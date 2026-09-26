// src/data/quizzes/coordination.js
// 20 Comprehensive Questions on Coordination Chemistry, Transition Metal Complexes & Crystal Field Theory

export const coordinationQuiz = {
  id: 'coordination-chemistry',
  title: 'Coordination Chemistry & Transition Metal Complexes',
  description: 'Master Crystal Field Theory, d-orbital splitting, Werner\'s coordination theory, chelate rings, and isomerism.',
  category: 'Inorganic Chemistry',
  difficulty: 'Advanced',
  estimatedMinutes: 15,
  questions: [
    {
      id: 'cc-1',
      question: 'In Crystal Field Theory (CFT) for an octahedral complex, how do the five d-orbitals split in energy?',
      options: [
        'Into a higher-energy eg set (dx²-y², dz²) and a lower-energy t2g set (dxy, dyz, dxz)',
        'They remain degenerate at identical energy levels',
        'Into a higher-energy t2g set and lower-energy eg set',
        'Into five separate non-degenerate energy levels'
      ],
      correctIndex: 0,
      explanation: 'In an octahedral field, ligands approach along Cartesian axes, repelling axial eg orbitals (dx²-y², dz²) upward while non-axial t2g orbitals drop in energy.',
      hint: 'The eg orbitals point directly at incoming ligand lone pairs.'
    },
    {
      id: 'cc-2',
      question: 'What is the coordination number and oxidation state of cobalt in [Co(NH3)6]Cl3?',
      options: [
        'Coordination number = 6, Oxidation state = +3',
        'Coordination number = 3, Oxidation state = +6',
        'Coordination number = 6, Oxidation state = 0',
        'Coordination number = 9, Oxidation state = +3'
      ],
      correctIndex: 0,
      explanation: 'Six neutral ammine ligands bind to cobalt (coordination number 6). Three chloride counter-ions (3 × -1) balance a cobalt oxidation state of +3.',
      hint: 'Count ligands inside the square brackets.'
    },
    {
      id: 'cc-3',
      question: 'What thermodynamic factor explains why polydentate chelating ligands form vastly more stable complexes than monodentate ligands?',
      options: [
        'The Chelate Effect (driven primarily by favorable positive entropy change ΔS > 0)',
        'The Inductive Effect',
        'The Common-Ion Effect',
        'The Jahn-Teller Effect'
      ],
      correctIndex: 0,
      explanation: 'Displacing several monodentate water molecules with one multidentate chelating ligand increases the total number of free solution molecules, creating a large positive ΔS.',
      hint: 'Releasing multiple bound water molecules increases disorder.'
    },
    {
      id: 'cc-4',
      question: 'According to the Spectrochemical Series, which ligand produces the strongest crystal field splitting (largest Δ_oct)?',
      options: [
        'Carbon Monoxide (CO / Cyanide CN⁻)',
        'Iodide (I⁻)',
        'Chloride (Cl⁻)',
        'Water (H2O)'
      ],
      correctIndex: 0,
      explanation: 'CO and CN⁻ are strong pi-acceptor ligands that participate in metal-to-ligand back-bonding, causing huge crystal field splitting and producing low-spin diamagnetic complexes.',
      hint: 'Strong pi-acceptor ligands with empty antibonding pi* orbitals.'
    },
    {
      id: 'cc-5',
      question: 'In Werner’s coordination theory, what is the key difference between primary and secondary valency?',
      options: [
        'Primary valence corresponds to oxidation state (ionizable), while secondary valence corresponds to coordination number (directional, non-ionizable)',
        'Primary valence is non-directional, while secondary valence determines atomic mass',
        'Primary valence involves covalent bonds, while secondary valence involves metallic bonds',
        'Primary valence applies only to alkali metals'
      ],
      correctIndex: 0,
      explanation: 'Alfred Werner deduced that primary valence satisfies formal oxidation state with ionizable anions, while secondary valence forms fixed directional bonds to ligands.',
      hint: 'Alfred Werner won the 1913 Nobel Prize in Chemistry for this distinction.'
    },
    {
      id: 'cc-6',
      question: 'How do d-orbitals split in a tetrahedral crystal field relative to an octahedral field?',
      options: [
        'The splitting is inverted: e set is lower and t2 set is higher, with Δ_tet ≈ 4/9 Δ_oct',
        'The splitting is identical to octahedral',
        'd-orbitals do not split in tetrahedral fields',
        'All five d-orbitals increase equally in energy'
      ],
      correctIndex: 0,
      explanation: 'In tetrahedral geometry, ligands approach between Cartesian axes, raising t2 orbitals higher than e orbitals. Because there are only 4 ligands, Δ_tet is small (~4/9 of Δ_oct).',
      hint: 'Tetrahedral splitting is inverted and smaller than octahedral.'
    },
    {
      id: 'cc-7',
      question: 'What is the Jahn-Teller theorem regarding non-linear degenerate coordination complexes?',
      options: [
        'Any non-linear molecular system in a degenerate electronic state will undergo geometric distortion to remove degeneracy and lower energy',
        'All transition metals must be octahedral',
        'Complexes with odd electrons cannot exist',
        'Magnetic moments must be integer values'
      ],
      correctIndex: 0,
      explanation: 'Hermann Jahn and Edward Teller proved that electronically degenerate states (such as high-spin d⁴ Cr²⁺ or d⁹ Cu²⁺ with uneven eg filling) undergo tetragonal elongation along the z-axis.',
      hint: 'Commonly observed as axial elongation in copper(II) complexes.'
    },
    {
      id: 'cc-8',
      question: 'What type of isomerism is demonstrated by the pair [Co(NH3)5(SO4)]Br and [Co(NH3)5Br]SO4?',
      options: ['Ionization Isomerism', 'Linkage Isomerism', 'Hydrate Isomerism', 'Coordination Isomerism'],
      correctIndex: 0,
      explanation: 'These isomers yield different ions in solution: the first precipitates with Ag⁺ (forming AgBr), while the second precipitates with Ba²⁺ (forming BaSO4).',
      hint: 'Different ions are present inside vs outside the coordination sphere.'
    },
    {
      id: 'cc-9',
      question: 'What type of isomerism is shown by the nitrite ligand (NO2⁻), which can coordinate through either nitrogen or oxygen?',
      options: ['Linkage Isomerism (Nitro vs Nitrito)', 'Geometric Isomerism', 'Optical Isomerism', 'Ionization Isomerism'],
      correctIndex: 0,
      explanation: 'Ambidentate ligands like NO2⁻ can bind through nitrogen (-NO2, nitro, yellow) or oxygen (-ONO, nitrito, red), producing linkage isomers.',
      hint: 'An ambidentate ligand coordinating through different atoms.'
    },
    {
      id: 'cc-10',
      question: 'What is the spin-only magnetic moment formula (μ_eff) for a transition metal complex with "n" unpaired electrons?',
      options: ['μ = sqrt(n * (n + 2)) Bohr Magnetons (BM)', 'μ = n * 2 BM', 'μ = sqrt(n) BM', 'μ = n² BM'],
      correctIndex: 0,
      explanation: 'The spin-only formula μ_eff = sqrt(n(n+2)) BM calculates magnetic moment based on the number of unpaired d-electrons (e.g. n=1 gives 1.73 BM, n=3 gives 3.87 BM).',
      hint: 'Square root of n times (n + 2).'
    },
    {
      id: 'cc-11',
      question: 'Why are zinc(II) complexes such as [Zn(H2O)6]²⁺ completely colorless and diamagnetic?',
      options: [
        'Zinc(II) has a completely filled 3d¹⁰ configuration with no vacant d-orbitals for d-d electron transitions',
        'Zinc is not a metal',
        'Zinc absorbs all visible light completely',
        'Zinc has no valence shells'
      ],
      correctIndex: 0,
      explanation: 'With a closed 3d¹⁰ shell, all d-orbitals are fully occupied. No electron can undergo d-d transition upon absorbing visible photons, rendering Zn²⁺ colorless and diamagnetic.',
      hint: 'Completely filled d¹⁰ subshell.'
    },
    {
      id: 'cc-12',
      question: 'Which bidentate chelating ligand consists of two amino groups linked by a two-carbon chain (H2N-CH2-CH2-NH2)?',
      options: ['Ethylenediamine (en)', 'Oxalate (ox)', 'Bipyridine (bpy)', 'Acetylacetonate (acac)'],
      correctIndex: 0,
      explanation: 'Ethylenediamine (abbreviated "en") coordinates through two nitrogen lone pairs to form stable 5-membered chelate rings with transition metals.',
      hint: 'Neutral bidentate ligand abbreviated "en".'
    },
    {
      id: 'cc-13',
      question: 'What is the denticity of the hexadentate chelating agent EDTA⁴⁻ (Ethylenediaminetetraacetate)?',
      options: [
        'Hexadentate (binds through two amine nitrogens and four carboxylate oxygens)',
        'Bidentate',
        'Tetradentate',
        'Monodentate'
      ],
      correctIndex: 0,
      explanation: 'EDTA⁴⁻ wraps completely around a central metal ion like an octopus, utilizing 6 donor atoms (2 nitrogens, 4 oxygens) in an octahedral 1:1 complex.',
      hint: 'Forms 6 coordination bonds with a single metal ion.'
    },
    {
      id: 'cc-14',
      question: 'What is Cisplatin, cis-[Pt(NH3)2Cl2], widely utilized for in medicine?',
      options: [
        'A potent chemotherapy drug that cross-links DNA in cancer cells',
        'An antibiotic against gram-negative bacteria',
        'An antacid for stomach ulcers',
        'A general anesthetic'
      ],
      correctIndex: 0,
      explanation: 'Discovered by Barnett Rosenberg in 1965, square-planar cis-[Pt(NH3)2Cl2] cross-links guanine DNA bases, triggering apoptosis in testicular and ovarian cancer cells.',
      hint: 'Square planar platinum anti-cancer drug.'
    },
    {
      id: 'cc-15',
      question: 'What causes the intense deep purple color of the permanganate ion (MnO4⁻), despite Mn being d⁰ with no d-electrons?',
      options: [
        'Ligand-to-Metal Charge Transfer (LMCT) transition',
        'd-d electron transition',
        'Radioactive glow',
        'Fluorescence emission'
      ],
      correctIndex: 0,
      explanation: 'In MnO4⁻, manganese has an oxidation state of +7 (d⁰). The intense purple absorption is an LMCT band: an electron is photo-excited from an oxygen p-orbital into empty manganese d-orbitals.',
      hint: 'Charge transfer from oxygen ligands to the empty metal d-orbitals.'
    },
    {
      id: 'cc-16',
      question: 'What geometry is adopted by four-coordinate complexes with strong field d⁸ configurations, such as [Ni(CN)4]²⁻ or [PtCl4]²⁻?',
      options: ['Square Planar (dsp² hybridization)', 'Tetrahedral', 'Octahedral', 'Linear'],
      correctIndex: 0,
      explanation: 'For d⁸ transition metals with strong field ligands (or 4d/5d metals like Pt²⁺, Pd²⁺), high pairing energy forces electrons into four d-orbitals, leaving dx²-y² empty for dsp² square planar geometry.',
      hint: 'Planar geometry with 90° bond angles.'
    },
    {
      id: 'cc-17',
      question: 'Which geometric isomers are possible for an octahedral complex with the formula [MA4B2]?',
      options: ['Cis and Trans isomers', 'Facial (fac) and Meridional (mer) isomers', 'Optical enantiomers only', 'Linkage isomers'],
      correctIndex: 0,
      explanation: '[MA4B2] complexes exhibit cis isomerism (when the two B ligands are at 90° adjacent positions) and trans isomerism (when the two B ligands are at 180° opposite positions).',
      hint: 'Ligands at 90° vs 180°.'
    },
    {
      id: 'cc-18',
      question: 'Which geometric isomers are possible for an octahedral complex with the formula [MA3B3]?',
      options: [
        'Facial (fac) and Meridional (mer) isomers',
        'Cis and Trans isomers only',
        'Ionization isomers',
        'Coordination isomers'
      ],
      correctIndex: 0,
      explanation: 'In fac-[MA3B3], the three identical ligands occupy the vertices of a triangular face of the octahedron (all 90° apart). In mer-[MA3B3], they form a meridian plane (180° apart).',
      hint: 'Facial and Meridional isomers.'
    },
    {
      id: 'cc-19',
      question: 'What is the role of back-bonding (pi-backdonation) in metal carbonyl complexes like Ni(CO)4 or Fe(CO)5?',
      options: [
        'Filled metal d-orbitals donate electron density into empty pi* antibonding orbitals of CO, strengthening the M-C bond while weakening the C-O bond',
        'The metal donates protons to CO',
        'CO donates electrons only without receiving any',
        'The metal breaks apart into ions'
      ],
      correctIndex: 0,
      explanation: 'Synergistic bonding involves sigma-donation from CO to the metal accompanied by pi-backdonation from metal d-orbitals into CO pi* orbitals, shortening M-C and lengthening C-O bonds.',
      hint: 'Synergic bonding involving pi* antibonding orbitals.'
    },
    {
      id: 'cc-20',
      question: 'What is the Coordination Number of the central iron ion in the biological heme group of hemoglobin?',
      options: [
        '6 (four porphyrin nitrogens, one proximal histidine, one reversible O2 binding site)',
        '4',
        '8',
        '2'
      ],
      correctIndex: 0,
      explanation: 'In oxyhemoglobin, Fe(II) is coordinated by four pyrrole nitrogens of the protoporphyrin IX ring, a fifth nitrogen from a proximal histidine residue, and a sixth reversible site for O2 binding.',
      hint: 'Octahedral coordination with four planar ring nitrogens and two axial sites.'
    }
  ]
};
