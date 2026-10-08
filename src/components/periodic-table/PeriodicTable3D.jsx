// src/components/periodic-table/PeriodicTable3D.jsx
import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { elementsData } from '@/data/elementsData';
import {
  CATEGORY_CONFIG,
  getCategoryMeta,
  getHeatmapColor,
  formatElectronConfig,
  kelvinToCelsius
} from '@/utils/chemistryUtils';
import { useBookmarks } from '@/context/BookmarkContext';
import {
  Box,
  Layers,
  Orbit,
  RotateCcw,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Sparkles,
  Search,
  X,
  ExternalLink,
  Bookmark,
  Zap,
  Filter,
  Flame,
  Atom,
  HelpCircle,
  Dices
} from 'lucide-react';

export default function PeriodicTable3D({
  initialCategory = 'all',
  initialBlock = 'all',
  initialState = 'all',
  initialHeatmap = 'standard',
  initialSearch = '',
}) {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { toggleBookmark, isBookmarked } = useBookmarks();

  // Controls & HUD State
  const [layoutMode, setLayoutMode] = useState('table'); // 'table' | 'sphere' | 'helix' | 'grid' | 'cylinder'
  const [autoRotate, setAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter States
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeBlock, setActiveBlock] = useState(initialBlock);
  const [activeState, setActiveState] = useState(initialState);
  const [heatmapMode, setHeatmapMode] = useState(initialHeatmap);
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  // Inspector & Browser Modal States
  const [selectedElement, setSelectedElement] = useState(null);
  const [showElementBrowser, setShowElementBrowser] = useState(false);
  const [browserSearch, setBrowserSearch] = useState('');
  const [browserCategory, setBrowserCategory] = useState('all');
  const clickedElementRef = useRef(null);

  // Three.js References
  const threeRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    rootGroup: null,
    objects: [],
    targets: {
      table: [],
      sphere: [],
      helix: [],
      grid: [],
      cylinder: [],
    },
    isAnimating: false,
    animStartTime: 0,
    animDuration: 1000,
    startPositions: [],
    targetPositions: [],
    startQuaternions: [],
    targetQuaternions: [],
    isUserInteracting: false,
    reqId: null,
  });

  // Heatmap extremes
  const heatmapExtremes = {
    electronegativity: { min: 0.7, max: 4.0 },
    atomicRadius: { min: 30, max: 260 },
    ionizationEnergy: { min: 375, max: 2372 },
    density: { min: 0.089, max: 22.6 },
    meltingPoint: { min: 0.95, max: 3823 },
    boilingPoint: { min: 4.22, max: 5869 },
  };

  // Check if an element matches active filters
  const isElementVisible = useCallback((el) => {
    if (searchTerm) {
      const q = searchTerm.toLowerCase().trim();
      const matchName = el.name.toLowerCase().includes(q);
      const matchSymbol = el.symbol.toLowerCase() === q || el.symbol.toLowerCase().startsWith(q);
      const matchNumber = el.number.toString() === q;
      if (!matchName && !matchSymbol && !matchNumber) return false;
    }
    if (activeCategory !== 'all' && el.category !== activeCategory) return false;
    if (activeBlock !== 'all' && el.block !== activeBlock) return false;
    if (activeState !== 'all' && el.state !== activeState) return false;
    return true;
  }, [searchTerm, activeCategory, activeBlock, activeState]);

  // Compute number of matching elements
  const visibleCount = useMemo(() => {
    return elementsData.filter(isElementVisible).length;
  }, [isElementVisible]);

  // Transform calculation functions
  const computeTableTransform = (element) => {
    let col = element.group;
    let row = element.period;

    if (element.number >= 57 && element.number <= 71) {
      col = (element.number - 57) + 4;
      row = 8.5;
    } else if (element.number >= 89 && element.number <= 103) {
      col = (element.number - 89) + 4;
      row = 9.8;
    }

    const x = (col - 9.5) * 165;
    const y = -(row - 5.4) * 205;
    const z = 0;

    return {
      position: new THREE.Vector3(x, y, z),
      quaternion: new THREE.Quaternion(), // default (0,0,0,1)
    };
  };

  const computeSphereTransform = (index, total = 118, radius = 960) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    const pos = new THREE.Vector3(x, y, z);
    const dummy = new THREE.Object3D();
    dummy.position.copy(pos);
    dummy.lookAt(pos.clone().multiplyScalar(2));

    return {
      position: pos,
      quaternion: dummy.quaternion.clone(),
    };
  };

  const computeHelixTransform = (index, radius = 920) => {
    const theta = index * 0.22 + Math.PI;
    const y = -(index * 14) + 820;
    const x = radius * Math.sin(theta);
    const z = radius * Math.cos(theta);

    const pos = new THREE.Vector3(x, y, z);
    const dummy = new THREE.Object3D();
    dummy.position.copy(pos);
    dummy.lookAt(new THREE.Vector3(x * 2, y, z * 2));

    return {
      position: pos,
      quaternion: dummy.quaternion.clone(),
    };
  };

  const computeGridTransform = (index) => {
    const x = (index % 5) * 340 - 680;
    const y = -(Math.floor(index / 5) % 5) * 310 + 620;
    const z = Math.floor(index / 25) * 440 - 880;

    return {
      position: new THREE.Vector3(x, y, z),
      quaternion: new THREE.Quaternion(),
    };
  };

  const computeCylinderTransform = (element, radius = 1000) => {
    let col = element.group;
    let row = element.period;

    if (element.number >= 57 && element.number <= 71) {
      col = (element.number - 57) + 4;
      row = 8.5;
    } else if (element.number >= 89 && element.number <= 103) {
      col = (element.number - 89) + 4;
      row = 9.8;
    }

    const theta = ((col - 1) / 18) * Math.PI * 2;
    const x = radius * Math.sin(theta);
    const z = radius * Math.cos(theta);
    const y = -(row - 5.4) * 205;

    const pos = new THREE.Vector3(x, y, z);
    const dummy = new THREE.Object3D();
    dummy.position.copy(pos);
    dummy.lookAt(new THREE.Vector3(x * 2, y, z * 2));

    return {
      position: pos,
      quaternion: dummy.quaternion.clone(),
    };
  };

  // Helper to get secondary text based on heatmap mode
  const getSubMetric = (el, mode) => {
    if (mode === 'electronegativity') return el.electronegativity != null ? `EN: ${el.electronegativity}` : 'EN: —';
    if (mode === 'atomicRadius') return el.atomicRadius ? `${el.atomicRadius} pm` : 'Radius: —';
    if (mode === 'ionizationEnergy') return el.ionizationEnergy ? `${Math.round(el.ionizationEnergy)} kJ` : 'IE: —';
    if (mode === 'density') return el.density != null ? `${el.density} g/cm³` : 'Density: —';
    if (mode === 'meltingPoint') return el.meltingPoint ? `${kelvinToCelsius(el.meltingPoint)}°C` : 'Mp: —';
    if (mode === 'boilingPoint') return el.boilingPoint ? `${kelvinToCelsius(el.boilingPoint)}°C` : 'Bp: —';
    return el.name;
  };

  // Trigger smooth layout morphing
  const triggerTransition = useCallback((targetMode, duration = 1100) => {
    const s = threeRef.current;
    if (!s.targets[targetMode] || s.targets[targetMode].length === 0) return;

    s.animStartTime = performance.now();
    s.animDuration = duration;
    s.isAnimating = true;

    for (let i = 0; i < s.objects.length; i++) {
      const obj = s.objects[i];
      const target = s.targets[targetMode][i];

      s.startPositions[i].copy(obj.position);
      s.startQuaternions[i].copy(obj.quaternion);

      s.targetPositions[i].copy(target.position);
      s.targetQuaternions[i].copy(target.quaternion);
    }
  }, []);

  // Update card styles whenever filters or heatmap change
  const updateCardsAppearance = useCallback(() => {
    const s = threeRef.current;
    if (!s.objects || s.objects.length === 0) return;

    for (let i = 0; i < elementsData.length; i++) {
      const el = elementsData[i];
      const obj = s.objects[i];
      if (!obj) continue;

      const cardInner = obj.element.querySelector('.card-3d-inner');
      const submetricEl = obj.element.querySelector('.card-3d-subtext');
      if (!cardInner) continue;

      const visible = isElementVisible(el);
      const categoryMeta = getCategoryMeta(el.category);
      const color = categoryMeta.color;

      // Update visibility opacity
      if (!visible) {
        cardInner.style.opacity = '0.12';
        cardInner.style.filter = 'grayscale(80%)';
        cardInner.style.pointerEvents = 'none';
        obj.element.style.pointerEvents = 'none';
      } else {
        cardInner.style.opacity = '1';
        cardInner.style.filter = 'none';
        cardInner.style.pointerEvents = 'auto';
        obj.element.style.pointerEvents = 'auto';
      }

      // Update heatmap coloring
      if (heatmapMode !== 'standard' && heatmapExtremes[heatmapMode]) {
        const val = el[heatmapMode];
        const { min, max } = heatmapExtremes[heatmapMode];
        const hmColor = getHeatmapColor(val, min, max, heatmapMode);
        cardInner.style.borderColor = hmColor;
        cardInner.style.boxShadow = `0 4px 20px -2px ${hmColor}`;
        cardInner.style.background = `radial-gradient(circle at 50% 30%, ${hmColor.replace('0.85', '0.28')} 0%, rgba(10, 15, 29, 0.9) 85%)`;
      } else {
        cardInner.style.borderColor = `${color}99`;
        cardInner.style.boxShadow = `0 4px 20px -2px ${color}35`;
        cardInner.style.background = `radial-gradient(circle at 50% 30%, ${color}25 0%, rgba(10, 15, 29, 0.88) 85%)`;
      }

      // Update secondary text
      if (submetricEl) {
        submetricEl.textContent = getSubMetric(el, heatmapMode);
      }
    }
  }, [heatmapMode, isElementVisible]);

  // Effect: When layoutMode state changes, trigger transition
  useEffect(() => {
    triggerTransition(layoutMode);
  }, [layoutMode, triggerTransition]);

  // Effect: When filters or heatmap change, update styles
  useEffect(() => {
    updateCardsAppearance();
  }, [updateCardsAppearance]);

  // Responsive camera distance calculator
  const getResponsiveCameraZ = (w, h) => {
    const aspect = w / h;
    const contentWidth = 3200;
    const contentHeight = 2200;
    const vFovRad = THREE.MathUtils.degToRad(48);
    const distForHeight = (contentHeight / 2) / Math.tan(vFovRad / 2);
    const distForWidth = (contentWidth / 2) / (Math.tan(vFovRad / 2) * aspect);
    const idealZ = Math.max(distForWidth, distForHeight, 2300);
    return Math.min(idealZ, 7500);
  };

  // Reset Camera View
  const handleResetCamera = () => {
    const s = threeRef.current;
    if (!s.camera || !s.controls) return;
    const container = containerRef.current;
    const w = container?.clientWidth || window.innerWidth;
    const h = container?.clientHeight || 750;
    const targetZ = getResponsiveCameraZ(w, h);

    // Reset controls
    s.controls.reset();
    s.camera.position.set(0, 0, targetZ);
    s.camera.up.set(0, 1, 0);
    s.controls.target.set(0, 0, 0);

    // Reset rootGroup rotation smoothly
    if (s.rootGroup) {
      s.rootGroup.rotation.set(0, 0, 0);
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error('Fullscreen request failed:', err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch((err) => {
        console.error('Exit fullscreen failed:', err);
      });
      setIsFullscreen(false);
    }
  };

  // Mount Three.js Scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 1200;
    const height = container.clientHeight || 750;

    // 1. Scene & Root Group
    const scene = new THREE.Scene();
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 2. Camera with responsive distance
    const camera = new THREE.PerspectiveCamera(48, width / height, 1, 15000);
    const initialZ = getResponsiveCameraZ(width, height);
    camera.position.set(0, 0, initialZ);

    // 3. CSS3D Renderer
    const renderer = new CSS3DRenderer();
    renderer.setSize(width, height);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.overflow = 'hidden';
    renderer.domElement.style.touchAction = 'none'; // Essential for mobile touchscreen control
    container.appendChild(renderer.domElement);

    // 4. Controls
    const controls = new TrackballControls(camera, renderer.domElement);
    controls.minDistance = 350;
    controls.maxDistance = 9500;
    controls.rotateSpeed = width < 640 ? 0.9 : 1.1;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = false;
    controls.dynamicDampingFactor = 0.15;

    // Pause auto-rotation during user interaction
    controls.addEventListener('start', () => {
      threeRef.current.isUserInteracting = true;
    });
    controls.addEventListener('end', () => {
      setTimeout(() => {
        threeRef.current.isUserInteracting = false;
      }, 1000);
    });

    // 5. Build 118 Elements & Calculate Target Coordinates
    const objects = [];
    const targets = {
      table: [],
      sphere: [],
      helix: [],
      grid: [],
      cylinder: [],
    };
    const startPositions = [];
    const targetPositions = [];
    const startQuaternions = [];
    const targetQuaternions = [];

    for (let i = 0; i < elementsData.length; i++) {
      const el = elementsData[i];
      const categoryMeta = getCategoryMeta(el.category);
      const color = categoryMeta.color;

      // Outer wrapper
      const elementWrapper = document.createElement('div');
      elementWrapper.className = 'element-3d-wrapper';
      elementWrapper.style.width = '140px';
      elementWrapper.style.height = '175px';
      elementWrapper.style.userSelect = 'none';
      elementWrapper.style.pointerEvents = 'auto';

      // Inner card
      const cardInner = document.createElement('div');
      cardInner.className = 'card-3d-inner';
      cardInner.style.width = '100%';
      cardInner.style.height = '100%';
      cardInner.style.borderRadius = '14px';
      cardInner.style.border = `1.5px solid ${color}99`;
      cardInner.style.background = `radial-gradient(circle at 50% 30%, ${color}25 0%, rgba(10, 15, 29, 0.88) 85%)`;
      cardInner.style.boxShadow = `0 4px 20px -2px ${color}35`;
      cardInner.style.backdropFilter = 'blur(10px)';
      cardInner.style.display = 'flex';
      cardInner.style.flexDirection = 'column';
      cardInner.style.justifyContent = 'space-between';
      cardInner.style.padding = '9px 11px';
      cardInner.style.cursor = 'pointer';
      cardInner.style.pointerEvents = 'auto';
      cardInner.style.transition = 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, opacity 0.3s ease, border-color 0.25s ease';

      // Hover glow logic
      cardInner.addEventListener('mouseenter', () => {
        cardInner.style.transform = 'translateZ(26px) scale(1.08)';
        cardInner.style.borderColor = '#38bdf8';
        cardInner.style.boxShadow = `0 0 30px ${color}90, 0 10px 30px rgba(0,0,0,0.8)`;
      });
      cardInner.addEventListener('mouseleave', () => {
        cardInner.style.transform = 'none';
        cardInner.style.borderColor = `${color}99`;
        cardInner.style.boxShadow = `0 4px 20px -2px ${color}35`;
      });

      // Pointer tracking for click vs drag
      cardInner.addEventListener('pointerdown', (e) => {
        clickedElementRef.current = {
          element: el,
          x: e.clientX,
          y: e.clientY,
          time: performance.now(),
        };
      });

      cardInner.addEventListener('click', (e) => {
        e.stopPropagation();
        setSelectedElement(el);
      });

      // Top row: atomic number & mass
      const topRow = document.createElement('div');
      topRow.style.display = 'flex';
      topRow.style.justifyContent = 'space-between';
      topRow.style.alignItems = 'center';
      topRow.style.fontSize = '11px';
      topRow.style.fontFamily = 'monospace';
      topRow.style.fontWeight = '700';

      const numberSpan = document.createElement('span');
      numberSpan.style.color = '#e2e8f0';
      numberSpan.textContent = el.number;

      const massSpan = document.createElement('span');
      massSpan.style.color = '#94a3b8';
      massSpan.style.fontSize = '10px';
      massSpan.textContent = typeof el.atomicMass === 'number' ? el.atomicMass.toFixed(2) : el.atomicMass;

      topRow.appendChild(numberSpan);
      topRow.appendChild(massSpan);

      // Center: Chemical Symbol
      const centerBox = document.createElement('div');
      centerBox.style.textAlign = 'center';
      centerBox.style.marginTop = '2px';

      const symbolSpan = document.createElement('div');
      symbolSpan.style.fontSize = '34px';
      symbolSpan.style.fontWeight = '900';
      symbolSpan.style.letterSpacing = '-0.02em';
      symbolSpan.style.color = '#ffffff';
      symbolSpan.style.lineHeight = '1';
      symbolSpan.style.textShadow = `0 0 15px ${color}80`;
      symbolSpan.textContent = el.symbol;

      const nameSpan = document.createElement('div');
      nameSpan.style.fontSize = '11px';
      nameSpan.style.fontWeight = '600';
      nameSpan.style.color = '#cbd5e1';
      nameSpan.style.marginTop = '3px';
      nameSpan.style.overflow = 'hidden';
      nameSpan.style.textOverflow = 'ellipsis';
      nameSpan.style.whiteSpace = 'nowrap';
      nameSpan.textContent = el.name;

      centerBox.appendChild(symbolSpan);
      centerBox.appendChild(nameSpan);

      // Bottom row: Category or Metric & State dot
      const bottomRow = document.createElement('div');
      bottomRow.style.display = 'flex';
      bottomRow.style.justifyContent = 'space-between';
      bottomRow.style.alignItems = 'center';
      bottomRow.style.fontSize = '9.5px';
      bottomRow.style.paddingTop = '4px';
      bottomRow.style.borderTop = '1px solid rgba(255, 255, 255, 0.08)';

      const subtextSpan = document.createElement('span');
      subtextSpan.className = 'card-3d-subtext';
      subtextSpan.style.color = '#94a3b8';
      subtextSpan.style.fontWeight = '500';
      subtextSpan.style.maxWidth = '100px';
      subtextSpan.style.overflow = 'hidden';
      subtextSpan.style.textOverflow = 'ellipsis';
      subtextSpan.style.whiteSpace = 'nowrap';
      subtextSpan.textContent = el.name;

      const stateDot = document.createElement('span');
      stateDot.style.width = '7px';
      stateDot.style.height = '7px';
      stateDot.style.borderRadius = '50%';
      stateDot.style.backgroundColor =
        el.state === 'Gas'
          ? '#38bdf8'
          : el.state === 'Liquid'
          ? '#818cf8'
          : '#94a3b8';
      stateDot.title = `State: ${el.state}`;

      bottomRow.appendChild(subtextSpan);
      bottomRow.appendChild(stateDot);

      cardInner.appendChild(topRow);
      cardInner.appendChild(centerBox);
      cardInner.appendChild(bottomRow);
      elementWrapper.appendChild(cardInner);

      // Create CSS3DObject
      const objectCSS = new CSS3DObject(elementWrapper);

      // Compute positions for all layouts
      const tTable = computeTableTransform(el);
      const tSphere = computeSphereTransform(i, elementsData.length);
      const tHelix = computeHelixTransform(i);
      const tGrid = computeGridTransform(i);
      const tCylinder = computeCylinderTransform(el);

      targets.table.push(tTable);
      targets.sphere.push(tSphere);
      targets.helix.push(tHelix);
      targets.grid.push(tGrid);
      targets.cylinder.push(tCylinder);

      // Initial position (Table mode)
      objectCSS.position.copy(tTable.position);
      objectCSS.quaternion.copy(tTable.quaternion);

      rootGroup.add(objectCSS);
      objects.push(objectCSS);

      startPositions.push(new THREE.Vector3());
      targetPositions.push(new THREE.Vector3());
      startQuaternions.push(new THREE.Quaternion());
      targetQuaternions.push(new THREE.Quaternion());
    }

    // Save references to state
    threeRef.current = {
      scene,
      camera,
      renderer,
      controls,
      rootGroup,
      objects,
      targets,
      isAnimating: false,
      animStartTime: 0,
      animDuration: 1000,
      startPositions,
      targetPositions,
      startQuaternions,
      targetQuaternions,
      isUserInteracting: false,
      reqId: null,
    };

    // 6. Animation Loop
    let reqId = null;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // Damped controls update
      controls.update();

      const s = threeRef.current;

      // Layout Morphing Animation
      if (s.isAnimating) {
        const elapsed = performance.now() - s.animStartTime;
        const progress = Math.min(elapsed / s.animDuration, 1);
        // Smooth Cubic Easing
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        for (let j = 0; j < s.objects.length; j++) {
          s.objects[j].position.lerpVectors(s.startPositions[j], s.targetPositions[j], ease);
          s.objects[j].quaternion.slerpQuaternions(s.startQuaternions[j], s.targetQuaternions[j], ease);
        }

        if (progress >= 1) {
          s.isAnimating = false;
        }
      }

      // Auto-rotation around Y-axis
      if (autoRotate && !s.isUserInteracting && !s.isAnimating) {
        rootGroup.rotation.y += 0.0022;
      }

      renderer.render(scene, camera);
    };

    animate();
    threeRef.current.reqId = reqId;

    // 7. Window Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      const newW = containerRef.current.clientWidth;
      const newH = containerRef.current.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      controls.handleResize();
    };

    window.addEventListener('resize', handleResize);

    // Global pointerup to detect clicks even when TrackballControls captures pointer
    const handleGlobalPointerUp = (e) => {
      const pending = clickedElementRef.current;
      if (pending && pending.element) {
        const dist = Math.hypot(e.clientX - pending.x, e.clientY - pending.y);
        const duration = performance.now() - pending.time;
        if (dist < 10 && duration < 500) {
          setSelectedElement(pending.element);
        }
      }
      clickedElementRef.current = null;
    };

    window.addEventListener('pointerup', handleGlobalPointerUp);

    // Initial styles pass
    updateCardsAppearance();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      if (reqId) cancelAnimationFrame(reqId);
      controls.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []); // Run once on mount

  // Quick categories list
  const categoryPills = [
    { id: 'all', label: 'All Categories' },
    { id: 'alkali-metal', label: 'Alkali Metals' },
    { id: 'alkaline-earth', label: 'Alkaline Earth' },
    { id: 'transition-metal', label: 'Transition Metals' },
    { id: 'post-transition-metal', label: 'Post-Transition' },
    { id: 'metalloid', label: 'Metalloids' },
    { id: 'reactive-nonmetal', label: 'Reactive Nonmetals' },
    { id: 'noble-gas', label: 'Noble Gases' },
    { id: 'lanthanide', label: 'Lanthanides' },
    { id: 'actinide', label: 'Actinides' },
  ];

  const heatmaps = [
    { id: 'standard', label: 'Category View' },
    { id: 'electronegativity', label: 'Electronegativity' },
    { id: 'atomicRadius', label: 'Atomic Radius' },
    { id: 'ionizationEnergy', label: 'Ionization Energy' },
    { id: 'density', label: 'Density' },
    { id: 'meltingPoint', label: 'Melting Point' },
    { id: 'boilingPoint', label: 'Boiling Point' },
  ];

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-gradient-to-b from-[#0a0f1d] via-[#090d1a] to-[#040711] border border-slate-800 rounded-2xl sm:rounded-3xl select-none ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'h-[78vh] min-h-[500px] max-h-[860px] sm:h-[820px] shadow-2xl'
      }`}
    >
      {/* 3D Background Grid Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />

      {/* TOP FLOATING HUD CONTROLS BAR */}
      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-2 p-1.5 sm:p-2.5 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-800/80 shadow-xl">
        {/* Left: 3D Layout Geometry Buttons */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 scrollbar-none w-full sm:w-auto">
          <button
            onClick={() => setLayoutMode('table')}
            className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center space-x-1 sm:space-x-1.5 transition-all whitespace-nowrap flex-shrink-0 ${
              layoutMode === 'table'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
            title="Standard 18-Column Periodic Table"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Table</span>
          </button>

          <button
            onClick={() => setLayoutMode('sphere')}
            className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center space-x-1 sm:space-x-1.5 transition-all whitespace-nowrap flex-shrink-0 ${
              layoutMode === 'sphere'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
            title="3D Spherical Globe"
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>Sphere</span>
          </button>

          <button
            onClick={() => setLayoutMode('helix')}
            className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center space-x-1 sm:space-x-1.5 transition-all whitespace-nowrap flex-shrink-0 ${
              layoutMode === 'helix'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
            title="3D Spiral Helix"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Helix</span>
          </button>

          <button
            onClick={() => setLayoutMode('grid')}
            className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center space-x-1 sm:space-x-1.5 transition-all whitespace-nowrap flex-shrink-0 ${
              layoutMode === 'grid'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
            title="3D Cubic Matrix"
          >
            <Box className="w-3.5 h-3.5" />
            <span>Grid</span>
          </button>

          <button
            onClick={() => setLayoutMode('cylinder')}
            className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center space-x-1 sm:space-x-1.5 transition-all whitespace-nowrap flex-shrink-0 ${
              layoutMode === 'cylinder'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
            title="Wrapping 3D Cylinder"
          >
            <Atom className="w-3.5 h-3.5" />
            <span>Cylinder</span>
          </button>
        </div>

        {/* Right: Camera & Scene Actions */}
        <div className="flex items-center justify-between sm:justify-end gap-1 sm:gap-1.5 w-full sm:w-auto pt-1 sm:pt-0 border-t border-slate-800/60 sm:border-t-0">
          {/* Active elements badge */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 rounded-xl bg-slate-950/70 border border-slate-800 text-[10px] sm:text-[11px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{visibleCount} in 3D</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* Filter toggle button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1 border transition-all ${
                showFilters || activeCategory !== 'all' || activeBlock !== 'all' || activeState !== 'all' || searchTerm
                  ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40'
                  : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white'
              }`}
              title="Toggle Filters"
            >
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">Filters</span>
            </button>

            {/* Auto-Rotate toggle */}
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1 border transition-all ${
                autoRotate
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white'
              }`}
              title={autoRotate ? 'Pause Auto-Rotation' : 'Resume Auto-Rotation'}
            >
              {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{autoRotate ? 'Orbit On' : 'Orbit Off'}</span>
            </button>

            {/* Reset Camera */}
            <button
              onClick={handleResetCamera}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1 bg-slate-950/70 text-slate-300 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="Reset Camera Angle & Distance"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Reset</span>
            </button>

            {/* Help Tooltip */}
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-950/70 border border-slate-800 transition-all"
              title="3D Navigation Controls Help"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-950/70 border border-slate-800 transition-all"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen 3D Mode'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* EXPANDABLE FILTER DRAWER OVERLAY */}
      {showFilters && (
        <div className="absolute top-20 sm:top-16 left-2 sm:left-3 right-2 sm:right-3 z-20 p-3 sm:p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 shadow-2xl space-y-2.5 sm:space-y-3 max-h-[72vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center gap-2.5">
            {/* Search Input */}
            <div className="relative w-full lg:flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search 118 elements (e.g. Gold, Au, 79)..."
                className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Heatmap Metric Selector */}
            <div className="flex items-center justify-between sm:justify-start space-x-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs">
              <div className="flex items-center space-x-1.5 text-slate-400">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Heatmap:</span>
              </div>
              <select
                value={heatmapMode}
                onChange={(e) => setHeatmapMode(e.target.value)}
                className="bg-transparent text-cyan-300 font-semibold focus:outline-none cursor-pointer"
              >
                {heatmaps.map((h) => (
                  <option key={h.id} value={h.id} className="bg-slate-900 text-slate-200">
                    {h.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Block Filter */}
            <div className="flex items-center justify-between sm:justify-start space-x-1 bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs font-semibold">
              <span className="px-2 text-slate-400 font-normal">Block:</span>
              {['all', 's', 'p', 'd', 'f'].map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBlock(b)}
                  className={`px-2 py-1 rounded-lg transition-colors ${
                    activeBlock === b
                      ? 'bg-cyan-500 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {b.toUpperCase()}
                </button>
              ))}
            </div>

            {/* State Filter */}
            <div className="flex items-center justify-between sm:justify-start space-x-1 bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs font-semibold">
              <span className="px-2 text-slate-400 font-normal">State:</span>
              {['all', 'Solid', 'Liquid', 'Gas'].map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveState(s)}
                  className={`px-2 py-1 rounded-lg transition-colors ${
                    activeState === s
                      ? 'bg-cyan-500 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Category Pills Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
            {categoryPills.map((cat) => {
              const meta = cat.id !== 'all' ? getCategoryMeta(cat.id) : null;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm shadow-cyan-500/20'
                      : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {meta && (
                    <span
                      className="inline-block w-2 h-2 rounded-full mr-1.5"
                      style={{ backgroundColor: meta.solidBg }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* NAVIGATION HELP OVERLAY */}
      {showHelp && (
        <div className="absolute bottom-14 left-3 z-30 max-w-sm p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 shadow-2xl space-y-2 text-xs text-slate-300 animate-in fade-in">
          <div className="flex items-center justify-between pb-1 border-b border-slate-800 font-semibold text-white">
            <span className="flex items-center space-x-1.5">
              <Atom className="w-4 h-4 text-cyan-400" />
              <span>3D Navigation Guide</span>
            </span>
            <button onClick={() => setShowHelp(false)} className="text-slate-400 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <ul className="space-y-1.5 text-[11px] text-slate-300">
            <li><strong className="text-cyan-300">Rotate Scene:</strong> Click & drag with mouse left-click, or swipe on touchscreen.</li>
            <li><strong className="text-cyan-300">Zoom In/Out:</strong> Scroll mouse wheel, or pinch gesture on mobile.</li>
            <li><strong className="text-cyan-300">Pan Camera:</strong> Right-click & drag, or two-finger drag.</li>
            <li><strong className="text-cyan-300">Inspect Element:</strong> Click or tap any element card in 3D to reveal its electronic shells, thermodynamic states, and verified reactions.</li>
            <li><strong className="text-cyan-300">Layout Transforms:</strong> Switch seamlessly between Table, Sphere, Spiral Helix, Cubic Grid, and Wrapping Cylinder.</li>
          </ul>
        </div>
      )}

      {/* BOTTOM CLICKABLE PILL */}
      <button
        type="button"
        onClick={() => setShowElementBrowser(true)}
        className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 w-[94%] sm:w-auto max-w-lg flex items-center justify-between sm:justify-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-cyan-500/40 hover:border-cyan-400 text-xs text-slate-200 hover:text-white shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
        title="Click to browse all 118 elements or inspect detailed properties"
      >
        <div className="flex items-center space-x-1.5 sm:space-x-2 truncate">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0 group-hover:rotate-12 transition-transform" />
          <span className="font-medium text-[11px] sm:text-xs truncate">
            <span className="inline sm:hidden">Click any 3D element or browse:</span>
            <span className="hidden sm:inline">Click any element in 3D to inspect properties:</span>
          </span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors whitespace-nowrap flex-shrink-0">
          Browse 118 →
        </span>
      </button>

      {/* ALL 118 ELEMENTS QUICK BROWSER MODAL */}
      {showElementBrowser && (
        <div className="absolute inset-0 z-40 flex items-center justify-center p-2 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-2xl flex flex-col space-y-3 sm:space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 sm:pb-3">
              <div>
                <div className="flex items-center space-x-2">
                  <Atom className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base sm:text-xl font-bold text-white">
                    Atlas of All 118 Chemical Elements
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                  Click any element to inspect its electronic shells, thermodynamic states, and verified reactions.
                </p>
              </div>

              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <button
                  onClick={() => {
                    const randomEl = elementsData[Math.floor(Math.random() * elementsData.length)];
                    setSelectedElement(randomEl);
                    setShowElementBrowser(false);
                  }}
                  className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border border-purple-500/30 text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer"
                  title="Inspect a random element"
                >
                  <Dices className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Random Element</span>
                </button>

                <button
                  onClick={() => setShowElementBrowser(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search & Category Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  value={browserSearch}
                  onChange={(e) => setBrowserSearch(e.target.value)}
                  placeholder="Filter by name, symbol, or number (e.g. Iron, Au, 26)..."
                  className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
                />
                {browserSearch && (
                  <button
                    onClick={() => setBrowserSearch('')}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Category selector */}
              <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <select
                  value={browserCategory}
                  onChange={(e) => setBrowserCategory(e.target.value)}
                  className="w-full sm:w-auto bg-slate-950 border border-slate-800 text-cyan-300 font-semibold text-xs px-3 py-2 rounded-xl focus:outline-none cursor-pointer"
                >
                  {categoryPills.map((c) => (
                    <option key={c.id} value={c.id} className="bg-slate-900 text-slate-200">
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Elements Grid (All 118 elements) */}
            <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1.5 sm:gap-2">
              {elementsData
                .filter((el) => {
                  if (browserCategory !== 'all' && el.category !== browserCategory) return false;
                  if (browserSearch) {
                    const q = browserSearch.toLowerCase().trim();
                    const matchName = el.name.toLowerCase().includes(q);
                    const matchSymbol = el.symbol.toLowerCase() === q || el.symbol.toLowerCase().startsWith(q);
                    const matchNumber = el.number.toString() === q;
                    if (!matchName && !matchSymbol && !matchNumber) return false;
                  }
                  return true;
                })
                .map((el) => {
                  const catMeta = getCategoryMeta(el.category);
                  return (
                    <button
                      key={el.number}
                      onClick={() => {
                        setSelectedElement(el);
                        setShowElementBrowser(false);
                      }}
                      className="p-1.5 sm:p-2 rounded-xl bg-slate-950/80 hover:bg-slate-850 border border-slate-800 hover:border-cyan-400 text-left transition-all hover:scale-105 hover:shadow-lg flex flex-col justify-between group cursor-pointer active:scale-95"
                      style={{
                        borderColor: `${catMeta.color}40`,
                      }}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 group-hover:text-slate-200">
                        <span>#{el.number}</span>
                        <span className="text-[9px] truncate max-w-[45px] opacity-75">{el.atomicMass}</span>
                      </div>
                      <div className="my-0.5 sm:my-1 text-center">
                        <span
                          className="text-base sm:text-lg font-black tracking-tight group-hover:text-white"
                          style={{ color: catMeta.color }}
                        >
                          {el.symbol}
                        </span>
                      </div>
                      <div className="text-[10px] font-medium text-slate-300 truncate text-center">
                        {el.name}
                      </div>
                    </button>
                  );
                })}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
              <span className="hidden sm:inline">Showing all 118 elements with real-time property inspection</span>
              <span className="sm:hidden text-[11px] font-mono">118 Elements</span>
              <button
                onClick={() => setShowElementBrowser(false)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer text-xs"
              >
                Close Browser
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ELEMENT INSPECTOR MODAL IN 3D SCENE */}
      {selectedElement && (
        <div className="absolute inset-0 z-40 flex items-center justify-center p-2 sm:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl max-h-[92vh] overflow-y-auto space-y-3.5 sm:space-y-4">
            {/* Header: Element Title and Close Button */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3 sm:space-x-3.5">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex flex-col items-center justify-center font-bold text-white shadow-lg border flex-shrink-0"
                  style={{
                    backgroundColor: `${getCategoryMeta(selectedElement.category).color}25`,
                    borderColor: getCategoryMeta(selectedElement.category).color,
                    boxShadow: `0 0 25px ${getCategoryMeta(selectedElement.category).color}40`,
                  }}
                >
                  <span className="text-[10px] font-mono opacity-80 leading-none">
                    {selectedElement.number}
                  </span>
                  <span className="text-xl sm:text-2xl font-black leading-none mt-0.5">
                    {selectedElement.symbol}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <h3 className="text-lg sm:text-2xl font-black text-white">
                      {selectedElement.name}
                    </h3>
                    <span
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold border"
                      style={{
                        backgroundColor: `${getCategoryMeta(selectedElement.category).color}20`,
                        color: getCategoryMeta(selectedElement.category).color,
                        borderColor: `${getCategoryMeta(selectedElement.category).color}40`,
                      }}
                    >
                      {getCategoryMeta(selectedElement.category).name}
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-mono">
                    Mass: {selectedElement.atomicMass} u • Period {selectedElement.period}, Group {selectedElement.group} ({selectedElement.block}-block)
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedElement(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors flex-shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Electronic Shells Configuration */}
            <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Electron Configuration
                </div>
                <div className="text-xs font-mono font-bold text-cyan-300 mt-0.5">
                  {formatElectronConfig(selectedElement.electronConfiguration)}
                </div>
              </div>

              {selectedElement.electronsPerShell && (
                <div className="flex items-center space-x-1 text-[10px] sm:text-[11px] font-mono text-slate-300">
                  <span className="text-slate-500 mr-1">Shells:</span>
                  {selectedElement.electronsPerShell.join(' • ')}
                </div>
              )}
            </div>

            {/* Quick Properties Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 text-xs">
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase font-medium">State of Matter</span>
                <span className="font-semibold text-slate-200 mt-0.5 block">{selectedElement.state}</span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase font-medium">Electronegativity</span>
                <span className="font-semibold text-slate-200 mt-0.5 block">{selectedElement.electronegativity ?? '—'}</span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase font-medium">Atomic Radius</span>
                <span className="font-semibold text-slate-200 mt-0.5 block">
                  {selectedElement.atomicRadius ? `${selectedElement.atomicRadius} pm` : '—'}
                </span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase font-medium">Melting Point</span>
                <span className="font-semibold text-slate-200 mt-0.5 block">
                  {selectedElement.meltingPoint ? `${kelvinToCelsius(selectedElement.meltingPoint)}°C` : '—'}
                </span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase font-medium">Boiling Point</span>
                <span className="font-semibold text-slate-200 mt-0.5 block">
                  {selectedElement.boilingPoint ? `${kelvinToCelsius(selectedElement.boilingPoint)}°C` : '—'}
                </span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase font-medium">Density</span>
                <span className="font-semibold text-slate-200 mt-0.5 block">
                  {selectedElement.density != null ? `${selectedElement.density} g/cm³` : '—'}
                </span>
              </div>
            </div>

            {/* Scientific Summary */}
            {selectedElement.summary && (
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-2.5 sm:p-3 rounded-xl border border-slate-800/60">
                {selectedElement.summary}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2">
              <button
                onClick={() => toggleBookmark(selectedElement.symbol)}
                className={`flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  isBookmarked(selectedElement.symbol)
                    ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${
                    isBookmarked(selectedElement.symbol) ? 'fill-amber-400 text-amber-400' : ''
                  }`}
                />
                <span>
                  {isBookmarked(selectedElement.symbol) ? 'Bookmarked' : 'Bookmark Element'}
                </span>
              </button>

              <button
                onClick={() => navigate(`/element/${selectedElement.symbol}`)}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <span>Full Element Profile & Reactions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

