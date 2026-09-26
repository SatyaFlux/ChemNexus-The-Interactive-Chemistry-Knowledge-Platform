// src/data/quizzesData.js
// ChemNexus Interactive Chemistry Quiz Question Banks

export const quizzesData = [
  {
    id: 'periodic-trends',
    title: 'Periodic Table Trends & Periodicity',
    description: 'Test your mastery of electronegativity, ionization energies, atomic radii, and electron affinities across periods and groups.',
    category: 'Periodic Trends',
    difficulty: 'Intermediate',
    estimatedMinutes: 6,
    questions: [
      {
        id: 'pt-1',
        question: 'Which of the following elements has the highest electronegativity on the Pauling scale?',
        options: ['Fluorine (F)', 'Oxygen (O)', 'Chlorine (Cl)', 'Nitrogen (N)'],
        correctIndex: 0,
        explanation: 'Fluorine is the most electronegative element in the periodic table with a Pauling value of 3.98, due to its small atomic radius and high effective nuclear charge.',
        hint: 'It is the halogen at the top of group 17.'
      },
      {
        id: 'pt-2',
        question: 'As you move from left to right across Period 3 (Na to Ar), how does the atomic radius generally change?',
        options: ['Decreases', 'Increases', 'Remains constant', 'First increases then drops sharply'],
        correctIndex: 0,
        explanation: 'Across a period from left to right, electrons are added to the same principal energy level while nuclear protons increase, pulling the electron cloud inward and decreasing the atomic radius.',
        hint: 'Consider the effect of increasing nuclear charge without adding new shells.'
      },
      {
        id: 'pt-3',
        question: 'Which element possesses the highest first ionization energy among all 118 elements?',
        options: ['Helium (He)', 'Neon (Ne)', 'Fluorine (F)', 'Hydrogen (H)'],
        correctIndex: 0,
        explanation: 'Helium has the highest first ionization energy (2372.3 kJ/mol) because its two electrons are in the 1s orbital, extremely close to the nucleus without any inner shielding.',
        hint: 'Look at the top-right corner noble gas with a duet configuration.'
      },
      {
        id: 'pt-4',
        question: 'Which alkali metal has the lowest first ionization energy and is the most electropositive stable element?',
        options: ['Cesium (Cs)', 'Potassium (K)', 'Sodium (Na)', 'Lithium (Li)'],
        correctIndex: 0,
        explanation: 'Cesium has the lowest first ionization energy (375.7 kJ/mol) among stable elements because its valence 6s electron is shielded by 54 inner electrons and situated far from the nucleus.',
        hint: 'Its atomic number is 55 in Period 6.'
      },
      {
        id: 'pt-5',
        question: 'Why does Nitrogen (atomic number 7) have a higher first ionization energy than Oxygen (atomic number 8)?',
        options: [
          'Nitrogen has a half-filled 2p³ subshell which exhibits quantum exchange stability',
          'Nitrogen is more electronegative than Oxygen',
          'Oxygen has fewer nuclear protons than Nitrogen',
          'Nitrogen has an extra electron shell'
        ],
        correctIndex: 0,
        explanation: 'Nitrogen has an electron configuration of 1s² 2s² 2p³, where the three 2p orbitals are each half-filled. Removing an electron from oxygen removes a paired electron that experiences electron-electron repulsion, making it easier to ionize.',
        hint: 'Hund rule states that half-filled subshells possess extra symmetry and exchange stability.'
      }
    ]
  },
  {
    id: 'element-fundamentals',
    title: 'Element Fundamentals & Symbols',
    description: 'Challenge your knowledge on chemical symbols, Latin origins, atomic numbers, and historical discoveries.',
    category: 'Fundamentals',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    questions: [
      {
        id: 'ef-1',
        question: 'What is the chemical symbol for Lead, and what Latin word does it originate from?',
        options: ['Pb (Plumbum)', 'Ld (Lepidum)', 'Fe (Ferrum)', 'Sb (Stibium)'],
        correctIndex: 0,
        explanation: 'Lead symbol Pb is derived from the Latin word "plumbum", which also gave rise to English words like "plumber" and "plumbing" because the Romans constructed aqueduct pipes out of lead.',
        hint: 'Think of ancient Roman water pipes.'
      },
      {
        id: 'ef-2',
        question: 'Which element is liquid at room temperature (25°C) alongside Bromine?',
        options: ['Mercury (Hg)', 'Gallium (Ga)', 'Cesium (Cs)', 'Francium (Fr)'],
        correctIndex: 0,
        explanation: 'Mercury (Hg) and Bromine (Br) are the only two chemical elements in the entire periodic table that exist as liquids under standard room temperature and pressure (STP).',
        hint: 'Historically known as quicksilver.'
      },
      {
        id: 'ef-3',
        question: 'Which element has the atomic number 26 and is the most abundant element by mass of the whole Earth?',
        options: ['Iron (Fe)', 'Silicon (Si)', 'Nickel (Ni)', 'Aluminium (Al)'],
        correctIndex: 0,
        explanation: 'Iron has atomic number 26. When considering the planet as a whole (including the molten outer core and solid inner core), iron is the most abundant element by mass (~32%).',
        hint: 'Its Latin name is Ferrum.'
      },
      {
        id: 'ef-4',
        question: 'What is the chemical symbol for Potassium?',
        options: ['K', 'P', 'Po', 'Pt'],
        correctIndex: 0,
        explanation: 'Potassium has the symbol K, derived from the Neo-Latin word "Kalium", which stems from the Arabic "al-qalyah" (calcined ashes).',
        hint: 'Derived from Kalium.'
      },
      {
        id: 'ef-5',
        question: 'How many total chemical elements are officially recognized in the modern standard periodic table?',
        options: ['118', '112', '92', '120'],
        correctIndex: 0,
        explanation: 'The modern IUPAC periodic table contains exactly 118 recognized elements, completing Periods 1 through 7 from Hydrogen (1) to Oganesson (118).',
        hint: 'The seventh period was fully completed with elements 113 through 118 in 2016.'
      }
    ]
  },
  {
    id: 'chemical-reactions',
    title: 'Chemical Reactions & Stoichiometry',
    description: 'Explore reaction classifications, balanced stoichiometry, industrial catalysts, and Le Chatelier equilibrium.',
    category: 'Reactions',
    difficulty: 'Intermediate',
    estimatedMinutes: 6,
    questions: [
      {
        id: 'cr-1',
        question: 'In the Haber-Bosch process (N2 + 3H2 <-> 2NH3 + heat), which condition will shift equilibrium toward higher ammonia yield?',
        options: ['Increasing total pressure', 'Increasing temperature', 'Decreasing pressure', 'Removing nitrogen gas'],
        correctIndex: 0,
        explanation: 'The reaction converts 4 moles of gaseous reactants (1 N2 + 3 H2) into 2 moles of gaseous product (2 NH3). By Le Chatelier principle, increasing pressure favors the side with fewer gas molecules, increasing ammonia yield.',
        hint: 'Count the stoichiometric moles of gas on both sides of the arrow.'
      },
      {
        id: 'cr-2',
        question: 'What type of chemical reaction is represented by: 2Al + Fe2O3 -> Al2O3 + 2Fe?',
        options: ['Single Displacement / Redox', 'Double Displacement', 'Decomposition', 'Acid-Base Neutralization'],
        correctIndex: 0,
        explanation: 'This is the classic thermite reaction, a single displacement redox reaction where aluminium replaces iron due to its greater electropositive oxidation potential.',
        hint: 'A more reactive metal displaces a less reactive metal from its oxide.'
      },
      {
        id: 'cr-3',
        question: 'Which catalyst is used industrially in the Contact Process to convert sulfur dioxide into sulfur trioxide (2SO2 + O2 -> 2SO3)?',
        options: ['Vanadium(V) oxide (V2O5)', 'Iron (Fe)', 'Platinum (Pt)', 'Nickel (Ni)'],
        correctIndex: 0,
        explanation: 'Vanadium(V) oxide (V2O5) dispersed on silica pellets is the primary heterogeneous catalyst used in the industrial Contact Process at 450°C.',
        hint: 'A transition metal in Group 5 with yellow-orange pentoxide.'
      },
      {
        id: 'cr-4',
        question: 'What is the balanced stoichiometric coefficient of O2 in the complete combustion of propane: C3H8 + x O2 -> 3CO2 + 4H2O?',
        options: ['5', '3', '7', '10'],
        correctIndex: 0,
        explanation: 'Products have 3 CO2 (6 oxygen atoms) + 4 H2O (4 oxygen atoms) = 10 total oxygen atoms. Thus, 10 / 2 = 5 O2 molecules are needed.',
        hint: 'Count the oxygen atoms in 3 CO2 plus 4 H2O.'
      },
      {
        id: 'cr-5',
        question: 'What is the oxidation state of Chromium in potassium dichromate (K2Cr2O7)?',
        options: ['+6', '+3', '+7', '+4'],
        correctIndex: 0,
        explanation: 'K has oxidation state +1 (total +2), O has -2 (total -14). To be neutral: 2 + 2x - 14 = 0 => 2x = 12 => x = +6.',
        hint: 'Remember that oxygen is -2 and alkali metals are +1.'
      }
    ]
  },
  {
    id: 'advanced-materials',
    title: 'Advanced Materials & Nuclear Chemistry',
    description: 'Test high-level knowledge of semiconductors, radioactive decay modes, superalloys, and transuranic elements.',
    category: 'Advanced Materials',
    difficulty: 'Advanced',
    estimatedMinutes: 7,
    questions: [
      {
        id: 'am-1',
        question: 'Why is Zirconium preferred over standard stainless steel for cladding nuclear fuel rods in pressurized water reactors?',
        options: [
          'It has an extremely low neutron absorption cross-section',
          'It melts at a lower temperature than aluminium',
          'It undergoes fission directly to produce power',
          'It is cheaper than ordinary carbon steel'
        ],
        correctIndex: 0,
        explanation: 'Zirconium has an exceptionally low capture cross-section for thermal neutrons (0.18 barns), allowing neutrons to freely sustain the uranium chain reaction rather than being wastefully absorbed.',
        hint: 'Think about neutron economy inside a reactor core.'
      },
      {
        id: 'am-2',
        question: 'Which superheavy element was named after the nuclear physicist who discovered the concept of the actinide series?',
        options: ['Seaborgium (Sg, 106)', 'Bohrium (Bh, 107)', 'Rutherfordium (Rf, 104)', 'Meitnerium (Mt, 109)'],
        correctIndex: 0,
        explanation: 'Glenn T. Seaborg formulated the actinide concept in 1944 and co-discovered 10 transuranic elements. Element 106 was named Seaborgium in his honor during his lifetime.',
        hint: 'Nobel laureate who reorganized the periodic table by pulling actinides below the main body.'
      },
      {
        id: 'am-3',
        question: 'In modern smartphone lithium-ion batteries, what material predominantly forms the negative electrode (anode)?',
        options: ['Graphite (Carbon)', 'Lithium Cobalt Oxide', 'Silicon-Nitride', 'Metallic Sodium'],
        correctIndex: 0,
        explanation: 'Graphite is the ubiquitous commercial anode material, intercalating lithium ions (LiC6) between graphene honeycomb sheets during battery charging.',
        hint: 'An allotrope of carbon consisting of layered hexagonal planar rings.'
      },
      {
        id: 'am-4',
        question: 'What radioactive isotope provides long-term thermal energy in NASA Voyager and Curiosity rover RTGs?',
        options: ['Plutonium-238', 'Uranium-235', 'Cobalt-60', 'Cesium-137'],
        correctIndex: 0,
        explanation: 'Plutonium-238 decays via pure alpha emission with a half-life of 87.7 years, generating steady thermal heat (0.57 W/g) without hazardous gamma or neutron emission.',
        hint: 'An even-numbered alpha-emitting actinide isotope with an 88-year half-life.'
      },
      {
        id: 'am-5',
        question: 'Which compound semiconductor enables ultra-fast GaN smartphone chargers with dramatically smaller form factor?',
        options: ['Gallium Nitride (GaN)', 'Silicon Germanium (SiGe)', 'Cadmium Selenide (CdSe)', 'Gallium Antimonide (GaSb)'],
        correctIndex: 0,
        explanation: 'Gallium Nitride (GaN) is a wide-bandgap (3.4 eV) semiconductor with superior electron mobility and breakdown electric field, allowing power converters to switch at high frequencies with minimal thermal dissipation.',
        hint: 'Compound made of Group 13 Gallium and Group 15 Nitrogen.'
      }
    ]
  },
  {
    id: 'organic-chemistry',
    title: 'Organic Chemistry & Reaction Mechanisms',
    description: 'Explore functional groups, electrophilic additions, substitution pathways, and aromatic stability.',
    category: 'Organic Chemistry',
    difficulty: 'Intermediate',
    estimatedMinutes: 6,
    questions: [
      {
        id: 'oc-1',
        question: 'According to Markovnikov’s rule, in the addition of HX to an unsymmetrical alkene, where does the hydrogen atom attach?',
        options: [
          'To the carbon with the fewest hydrogen atoms',
          'To the carbon with the greatest number of hydrogen atoms already attached',
          'Equally to both double-bonded carbons',
          'To whichever carbon has a bulkier alkyl substituent'
        ],
        correctIndex: 1,
        explanation: 'Markovnikov’s rule states that the electrophilic proton (H⁺) adds to the double-bonded carbon holding more hydrogens, generating the more substituted, thermodynamically stable carbocation intermediate (tertiary > secondary > primary).',
        hint: 'Remember the mnemonic: "The rich get richer" in hydrogen atoms.'
      },
      {
        id: 'oc-2',
        question: 'Which substitution mechanism proceeds through a single concerted transition state with complete Walden inversion of stereochemistry?',
        options: [
          'SN2 (Substitution Nucleophilic Bimolecular)',
          'SN1 (Substitution Nucleophilic Unimolecular)',
          'E1 (Elimination Unimolecular)',
          'E2 (Elimination Bimolecular)'
        ],
        correctIndex: 0,
        explanation: 'The SN2 pathway involves backside nucleophilic attack simultaneous with leaving-group departure in a single concerted step, resulting in 100% stereochemical inversion (Walden inversion).',
        hint: 'Think of an umbrella turning inside out in strong wind.'
      },
      {
        id: 'oc-3',
        question: 'According to Hückel’s Rule, a planar monocyclic ring system is aromatic if it contains how many delocalized pi electrons?',
        options: ['4n', '2n + 2', '4n + 2 (where n is a non-negative integer)', '2n²'],
        correctIndex: 2,
        explanation: 'Hückel’s Rule dictates that cyclic, planar, completely conjugated systems possess special aromatic stability if they contain [4n + 2] pi electrons (e.g. 2, 6, 10, 14 electrons, like benzene with 6 pi electrons).',
        hint: 'Benzene has 6 pi electrons, satisfying 4(1) + 2.'
      },
      {
        id: 'oc-4',
        question: 'What product is formed when a Grignard reagent (R-MgX) reacts with an aliphatic ketone followed by aqueous acid workup?',
        options: [
          'A primary alcohol',
          'A tertiary alcohol',
          'A secondary alcohol',
          'A carboxylic acid'
        ],
        correctIndex: 1,
        explanation: 'Nucleophilic addition of a carbanion from Grignard reagent (R⁻) to the carbonyl carbon of a ketone (which already has two alkyl groups) produces an alkoxide that protonates to yield a tertiary alcohol.',
        hint: 'Formaldehyde gives primary alcohols, other aldehydes give secondary, ketones give tertiary.'
      },
      {
        id: 'oc-5',
        question: 'Why are the alpha-hydrogens of carbonyl compounds (aldehydes and ketones) significantly more acidic than alkane hydrogens?',
        options: [
          'The carbonyl carbon is an electron-donating group',
          'Alpha-hydrogens form intramolecular hydrogen bonds with oxygen',
          'Alpha-carbons have an expanded octet',
          'The conjugate base enolate anion is resonance-stabilized by delocalization onto the electronegative oxygen atom'
        ],
        correctIndex: 3,
        explanation: 'Deprotonation at the alpha-carbon yields an enolate anion, where negative charge is resonance-delocalized between the carbon atom and the highly electronegative carbonyl oxygen atom (C=C-O⁻ <-> ⁻C-C=O).',
        hint: 'Draw resonance structures of the resulting enolate intermediate.'
      }
    ]
  },
  {
    id: 'thermodynamics-kinetics',
    title: 'Thermodynamics & Reaction Kinetics',
    description: 'Master Gibbs free energy, enthalpy changes, Arrhenius activation energies, and reaction order rates.',
    category: 'Physical Chemistry',
    difficulty: 'Advanced',
    estimatedMinutes: 7,
    questions: [
      {
        id: 'tk-1',
        question: 'Under standard conditions, a chemical process is thermodynamically spontaneous when the change in Gibbs Free Energy (ΔG) is:',
        options: ['Negative (ΔG < 0)', 'Positive (ΔG > 0)', 'Zero (ΔG = 0)', 'Equal to the enthalpy of formation'],
        correctIndex: 0,
        explanation: 'A negative change in Gibbs free energy (ΔG < 0) indicates an exergonic process that can perform work spontaneously at constant temperature and pressure without external energy input.',
        hint: 'Spontaneous reactions release available free energy to the universe.'
      },
      {
        id: 'tk-2',
        question: 'In the Arrhenius equation k = A * exp(-Ea / RT), what does a plot of ln(k) versus (1 / T) yield?',
        options: [
          'A curve whose inflection point gives entropy',
          'A horizontal line equal to the gas constant R',
          'A straight line with a slope equal to (-Ea / R)',
          'A vertical asymptote at absolute zero'
        ],
        correctIndex: 2,
        explanation: 'Taking the natural logarithm yields ln(k) = ln(A) - (Ea / R)(1/T). Comparing this to y = mx + b, a plot of ln(k) against 1/T yields a straight line with slope m = -Ea / R and y-intercept ln(A).',
        hint: 'Use the linear form: y = m*x + b where x = (1/T).'
      },
      {
        id: 'tk-3',
        question: 'What fundamental law states that the total enthalpy change for a chemical reaction is independent of the pathway taken from reactants to products?',
        options: [
          'Le Chatelier’s Principle',
          'Hess’s Law of Constant Heat Summation',
          'Raoult’s Law',
          'Avogadro’s Hypothesis'
        ],
        correctIndex: 1,
        explanation: 'Because enthalpy (H) is a thermodynamic state function, Hess’s Law allows chemists to calculate the enthalpy of an overall reaction by summing the enthalpies of intermediate reaction steps.',
        hint: 'Named after Swiss-Russian chemist Germain Hess in 1840.'
      },
      {
        id: 'tk-4',
        question: 'How does adding a positive catalyst affect the equilibrium constant (K_eq) of a reversible chemical reaction?',
        options: [
          'It increases K_eq significantly',
          'It decreases K_eq by stabilizing reactants',
          'It inverts K_eq into 1 / K_eq',
          'It does not change K_eq at all'
        ],
        correctIndex: 3,
        explanation: 'A catalyst lowers the activation energy equally for both forward and reverse reactions, increasing reaction rates without altering the thermodynamic energies of reactants and products. Hence, K_eq remains unchanged.',
        hint: 'Catalysts influence kinetics (speed), not thermodynamics (equilibrium position).'
      },
      {
        id: 'tk-5',
        question: 'What does the Second Law of Thermodynamics state regarding an isolated system?',
        options: [
          'The total entropy of an isolated system always increases over time in spontaneous processes',
          'Energy can neither be created nor destroyed',
          'The entropy of a perfect crystal at absolute zero is exactly zero',
          'Matter is conserved in all non-nuclear reactions'
        ],
        correctIndex: 0,
        explanation: 'The Second Law states that any spontaneous natural process results in an overall increase in the entropy of the universe (isolated system), defining the thermodynamic "arrow of time".',
        hint: 'Relates to universal disorder and irreversible energy dissipation.'
      }
    ]
  },
  {
    id: 'atomic-structure',
    title: 'Quantum Atomic Structure & Orbitals',
    description: 'Test quantum numbers, the Pauli Exclusion Principle, Hund’s rule, and electron orbital geometries.',
    category: 'Atomic Physics',
    difficulty: 'Intermediate',
    estimatedMinutes: 6,
    questions: [
      {
        id: 'as-1',
        question: 'What quantum rule states that no two electrons in the same atom can possess identical sets of all four quantum numbers?',
        options: [
          'Heisenberg Uncertainty Principle',
          'Aufbau Principle',
          'Pauli Exclusion Principle',
          'De Broglie Relation'
        ],
        correctIndex: 2,
        explanation: 'The Pauli Exclusion Principle dictates that an orbital can hold a maximum of two electrons, and those two electrons must have opposite spin quantum numbers (ms = +1/2 and -1/2).',
        hint: 'Formulated by Austrian physicist Wolfgang Pauli in 1925.'
      },
      {
        id: 'as-2',
        question: 'According to the Aufbau Principle, which atomic orbital is filled with electrons immediately after the 3p subshell in neutral ground-state atoms?',
        options: ['3d', '4s', '4p', '3f'],
        correctIndex: 1,
        explanation: 'Following the (n + l) energy ordering rule, the 4s orbital (4 + 0 = 4) has a lower energy than the 3d orbital (3 + 2 = 5) and is therefore filled first (e.g. Potassium: [Ar] 4s¹).',
        hint: 'The (n + l) rule determines the filling sequence.'
      },
      {
        id: 'as-3',
        question: 'What physical property of an electron orbital is determined primarily by the principal quantum number (n)?',
        options: [
          'The overall size and main energy level of the electron shell',
          'The three-dimensional spatial shape of the orbital',
          'The orientation of the orbital in magnetic fields',
          'The intrinsic magnetic spin direction of the electron'
        ],
        correctIndex: 0,
        explanation: 'The principal quantum number (n = 1, 2, 3...) designates the principal electronic shell, dictating the average radial distance of the electron from the nucleus and its primary energy tier.',
        hint: 'Compare n=1 (K shell) with n=2 (L shell).'
      },
      {
        id: 'as-4',
        question: 'What does the Heisenberg Uncertainty Principle establish regarding subatomic particles like electrons?',
        options: [
          'Electrons orbit the nucleus in precise circular planetary orbits',
          'The mass of an electron increases exponentially with speed',
          'Energy is emitted in continuous wave spectra only',
          'It is fundamentally impossible to simultaneously determine both the exact position and momentum of a particle with arbitrary precision'
        ],
        correctIndex: 3,
        explanation: 'The Heisenberg Uncertainty Principle (Δx · Δp ≥ ℏ / 2) proves that the wave nature of quantum matter places a fundamental limit on the simultaneous measurement of position and conjugate momentum.',
        hint: 'Formulated by Werner Heisenberg; leads to orbital probability clouds.'
      },
      {
        id: 'as-5',
        question: 'Why does Chromium (Z = 24) have an anomalous ground-state electron configuration of [Ar] 3d⁵ 4s¹ rather than [Ar] 3d⁴ 4s²?',
        options: [
          'The 4s orbital is completely absent in transition metals',
          'A half-filled d-subshell (3d⁵) provides extra quantum mechanical exchange energy and orbital symmetry',
          'Chromium has a lower nuclear charge than Vanadium',
          'The 4s electrons pair up inside the nucleus'
        ],
        correctIndex: 1,
        explanation: 'Promoting one 4s electron into the 3d subshell creates a half-filled 3d⁵ subshell with parallel spins, maximizing stabilizing quantum exchange energy and minimizing inter-electronic repulsion.',
        hint: 'Subshells that are exactly half-filled (d⁵) or fully filled (d¹⁰) have exceptional stability.'
      }
    ]
  },
  {
    id: 'chemical-bonding',
    title: 'Chemical Bonding & VSEPR Molecular Geometry',
    description: 'Determine bond polarities, orbital hybridization, dipole moments, and spatial shapes of molecules.',
    category: 'Chemical Bonding',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    questions: [
      {
        id: 'cb-1',
        question: 'What is the molecular geometry (shape) of the water molecule (H2O) according to VSEPR theory?',
        options: ['Bent (Angular) with bond angle ~104.5°', 'Linear with bond angle 180°', 'Trigonal Planar with bond angle 120°', 'Tetrahedral with bond angle 109.5°'],
        correctIndex: 0,
        explanation: 'Oxygen in H2O has four electron pairs (two bonding pairs and two lone pairs) arranged in a tetrahedral electron geometry. The strong repulsion from the two lone pairs compresses the H-O-H angle down to ~104.5°, giving a bent molecular shape.',
        hint: 'Two single bonds and two non-bonding lone pairs on the central oxygen.'
      },
      {
        id: 'cb-2',
        question: 'What is the orbital hybridization of each carbon atom in ethylene (ethene, C2H4)?',
        options: ['sp', 'sp³', 'sp²', 'sp³d'],
        correctIndex: 2,
        explanation: 'Each carbon in ethene forms three sigma bonds (two to hydrogens, one to carbon) using sp² hybrid orbitals arranged at ~120° angles, while the remaining unhybridized 2p orbital forms a lateral pi bond.',
        hint: 'Three regions of electron density surround each carbon atom.'
      },
      {
        id: 'cb-3',
        question: 'What is the molecular geometry of sulfur hexafluoride (SF6)?',
        options: ['Trigonal Bipyramidal', 'Octahedral', 'Square Planar', 'Tetrahedral'],
        correctIndex: 1,
        explanation: 'Sulfur in SF6 possesses six bonding pairs and zero lone pairs, forming an expanded octet with sp³d² hybridization that points toward the six vertices of a regular octahedron with 90° bond angles.',
        hint: 'Six identical fluorine atoms symmetrically surrounding a central sulfur atom.'
      },
      {
        id: 'cb-4',
        question: 'Carbon tetrachloride (CCl4) contains four polar C-Cl bonds, yet its net molecular dipole moment is zero. Why?',
        options: [
          'Chlorine and carbon have identical electronegativities',
          'The C-Cl bonds are purely ionic',
          'Carbon loses all its electrons to chlorine',
          'The tetrahedral molecular symmetry causes the four individual bond dipole vectors to cancel out completely'
        ],
        correctIndex: 3,
        explanation: 'Because CCl4 has a perfectly symmetric regular tetrahedral geometry, the vector sum of the four identical C-Cl bond dipoles points equally in opposite directions, resulting in zero net dipole moment.',
        hint: 'Vector addition in symmetrical 3D geometric shapes.'
      },
      {
        id: 'cb-5',
        question: 'What type of bond is formed when an ammonia molecule (NH3) bonds with a proton (H⁺) to produce the ammonium ion (NH4⁺)?',
        options: [
          'Coordinate Covalent (Dative) Bond',
          'Pure Ionic Bond',
          'Metallic Bond',
          'Non-polar London Dispersion Bond'
        ],
        correctIndex: 0,
        explanation: 'The nitrogen atom in ammonia provides both electrons of its lone pair to share with the bare proton (H⁺), forming a coordinate covalent (dative) bond that is identical in strength to ordinary covalent bonds once formed.',
        hint: 'Both shared electrons originate from a single atom.'
      }
    ]
  },
  {
    id: 'acids-and-bases',
    title: 'Acids, Bases, pH & Buffer Solutions',
    description: 'Calculate pH values, evaluate Bronsted-Lowry & Lewis definitions, and understand buffer action.',
    category: 'Analytical Chemistry',
    difficulty: 'Intermediate',
    estimatedMinutes: 6,
    questions: [
      {
        id: 'ab-1',
        question: 'What is the pH of a 0.001 M aqueous solution of strong hydrochloric acid (HCl) at 25°C?',
        options: ['1.0', '3.0', '7.0', '11.0'],
        correctIndex: 1,
        explanation: 'Because HCl is a strong acid, it dissociates completely: [H⁺] = 0.001 M = 10⁻³ M. The pH is calculated as pH = -log[H⁺] = -log(10⁻³) = 3.0.',
        hint: 'pH is the negative base-10 logarithm of hydronium concentration.'
      },
      {
        id: 'ab-2',
        question: 'Which equation is utilized to calculate the pH of an acid-base buffer system containing a weak acid and its conjugate base?',
        options: [
          'Henderson-Hasselbalch Equation: pH = pKa + log([Conjugate Base] / [Weak Acid])',
          'Arrhenius Rate Equation: k = A exp(-Ea / RT)',
          'Nernst Electrochemical Equation: E = E° - (RT/nF) ln(Q)',
          'Van der Waals Equation: (P + a/V²)(V - b) = RT'
        ],
        correctIndex: 0,
        explanation: 'The Henderson-Hasselbalch equation relates pH to the acid dissociation constant (pKa) and the logarithmic ratio of conjugate base to weak acid concentrations.',
        hint: 'Derived directly from the Ka equilibrium expression.'
      },
      {
        id: 'ab-3',
        question: 'How does the Lewis acid-base theory define an acid?',
        options: [
          'A substance that donates hydrogen ions (H⁺) to water',
          'A substance that produces hydroxide ions (OH⁻) in solution',
          'An electron-pair acceptor',
          'An electron-pair donor'
        ],
        correctIndex: 2,
        explanation: 'Gilbert N. Lewis defined an acid as any chemical species (molecule or ion) capable of accepting a lone pair of electrons (e.g. BF3, AlCl3, H⁺), while a Lewis base is an electron-pair donor (e.g. NH3).',
        hint: 'Think in terms of electron pairs, not proton transfer.'
      },
      {
        id: 'ab-4',
        question: 'What is the conjugate acid of the hydrogen phosphate ion (HPO4²⁻)?',
        options: ['PO4³⁻ (Phosphate ion)', 'H3PO4 (Phosphoric acid)', 'OH⁻ (Hydroxide ion)', 'H2PO4⁻ (Dihydrogen phosphate ion)'],
        correctIndex: 3,
        explanation: 'A conjugate acid is formed when a base accepts one proton (H⁺). Adding H⁺ to HPO4²⁻ gives dihydrogen phosphate: HPO4²⁻ + H⁺ -> H2PO4⁻.',
        hint: 'Add one H⁺ to the chemical formula and increase the charge by +1.'
      },
      {
        id: 'ab-5',
        question: 'What is the value of the autoionization ionic product of pure water (Kw) at standard 25°C?',
        options: ['1.0 × 10⁻⁷', '1.0 × 10⁻¹⁴', '7.0', '14.0'],
        correctIndex: 1,
        explanation: 'In pure water at 25°C, [H⁺][OH⁻] = Kw = 1.0 × 10⁻¹⁴. At neutrality, [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M, yielding a neutral pH of 7.0.',
        hint: 'Relates to why pH + pOH = 14 at room temperature.'
      }
    ]
  },
  {
    id: 'electrochemistry',
    title: 'Electrochemistry, Galvanic Cells & Nernst Equation',
    description: 'Explore reduction potentials, cell EMF, Faraday’s laws of electrolysis, and battery operations.',
    category: 'Electrochemistry',
    difficulty: 'Advanced',
    estimatedMinutes: 7,
    questions: [
      {
        id: 'ec-1',
        question: 'What is the assigned standard reduction potential (E°) of the Standard Hydrogen Electrode (SHE) at 298 K?',
        options: ['0.00 V (by international convention)', '+1.00 V', '-0.76 V', '+0.34 V'],
        correctIndex: 0,
        explanation: 'By universal IUPAC agreement, the Standard Hydrogen Electrode (2H⁺ + 2e⁻ -> H2 at 1 atm, 1 M H⁺, 298 K) is assigned a potential of exactly 0.00 V as the universal reference standard.',
        hint: 'The arbitrary zero benchmark against which all half-cell potentials are measured.'
      },
      {
        id: 'ec-2',
        question: 'In an electrochemical galvanic cell, what critical role does the salt bridge perform?',
        options: [
          'It supplies electrons directly to the external electrical circuit',
          'It increases the standard reduction potential of the cathode',
          'It maintains electrical neutrality in half-cells by allowing ion migration without mixing electrolyte solutions',
          'It serves as a sacrificial physical catalyst'
        ],
        correctIndex: 2,
        explanation: 'As electrons flow externally from anode to cathode, anions migrate into the anode compartment and cations into the cathode compartment via the salt bridge, maintaining charge neutrality and preventing voltage drop.',
        hint: 'Without it, charge accumulation immediately stops electron flow.'
      },
      {
        id: 'ec-3',
        question: 'At which electrode does chemical oxidation ALWAYS occur in both galvanic and electrolytic cells?',
        options: [
          'The Cathode',
          'The Anode',
          'The Salt Bridge',
          'The Platinum Wire'
        ],
        correctIndex: 1,
        explanation: 'By electrochemical definition, oxidation (loss of electrons) always takes place at the anode, while reduction (gain of electrons) always takes place at the cathode. (Mnemonic: "An Ox and a Red Cat").',
        hint: 'Mnemonic: "An Ox" = Anode Oxidation.'
      },
      {
        id: 'ec-4',
        question: 'According to Faraday’s First Law of Electrolysis, the mass (m) of a substance liberated at an electrode is directly proportional to:',
        options: [
          'The total quantity of electric charge (Q = I × t) passed through the electrolyte',
          'The square of the applied voltage across terminals',
          'The volume of solvent in the cell',
          'The resistance of the wire connection'
        ],
        correctIndex: 0,
        explanation: 'Faraday’s first law states m = Z · Q = Z · I · t, meaning that deposited mass is directly proportional to the total moles of transferred electrons (electric charge passed in Coulombs).',
        hint: 'Formulated by Michael Faraday in 1834.'
      },
      {
        id: 'ec-5',
        question: 'According to the Nernst equation E = E° - (RT/nF) ln(Q), what happens to the cell potential (E) as a battery completely discharges to equilibrium?',
        options: [
          'Cell potential reaches infinity',
          'Cell potential equals standard potential E°',
          'Reaction quotient Q drops to zero',
          'Cell potential E drops to exactly 0.00 V because Q equals the equilibrium constant K'
        ],
        correctIndex: 3,
        explanation: 'At complete electrochemical equilibrium, the forward and reverse reaction rates balance, the reaction quotient Q equals the equilibrium constant K, and the cell potential E drops to 0 V (a "dead" battery).',
        hint: 'A dead battery has reached thermodynamic equilibrium.'
      }
    ]
  },
  {
    id: 'states-of-matter',
    title: 'Gas Laws & Kinetic Molecular Theory',
    description: 'Analyze PV=nRT ideal gas relationships, Graham’s effusion rates, real gas deviations, and phase diagrams.',
    category: 'Physical Chemistry',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    questions: [
      {
        id: 'sm-1',
        question: 'According to Boyle’s Law, if the volume of an ideal gas sample is halved at constant temperature, what happens to its pressure?',
        options: [
          'The pressure is reduced to one-fourth',
          'The pressure doubles (2×)',
          'The pressure remains unchanged',
          'The pressure drops by 50%'
        ],
        correctIndex: 1,
        explanation: 'Boyle’s Law states P1V1 = P2V2 at constant temperature. Halving volume forces gas particles into half the space, doubling the collision frequency against container walls and doubling pressure.',
        hint: 'Pressure and volume are inversely proportional.'
      },
      {
        id: 'sm-2',
        question: 'According to Graham’s Law of Effusion, how does the effusion rate of gas A compare to gas B?',
        options: [
          'It is inversely proportional to the square root of their molar masses: Rate_A / Rate_B = sqrt(M_B / M_A)',
          'It is directly proportional to their molar masses',
          'Lighter gases always effuse more slowly than heavy gases',
          'Effusion rate is independent of molecular weight'
        ],
        correctIndex: 0,
        explanation: 'Because average kinetic energy depends only on temperature (1/2 m v² = 3/2 kT), lighter gas molecules travel at higher average velocities and effuse faster through tiny pinholes inversely proportional to the square root of molar mass.',
        hint: 'Helium effuses much faster than dense xenon.'
      },
      {
        id: 'sm-3',
        question: 'Under which physical conditions do real gases deviate MOST significantly from ideal gas behavior?',
        options: [
          'High temperature and low pressure',
          'Moderate room temperature and standard pressure',
          'Extremely high pressure and very low temperature',
          'In a complete vacuum'
        ],
        correctIndex: 2,
        explanation: 'At very high pressures, the physical volume occupied by gas molecules becomes non-negligible. At very low temperatures, slow-moving molecules succumb to intermolecular van der Waals attractions, violating ideal gas postulates.',
        hint: 'When particles are squeezed tightly together and moving slowly.'
      },
      {
        id: 'sm-4',
        question: 'On a single-substance phase diagram, what unique condition is represented by the "Triple Point"?',
        options: [
          'The temperature above which gas cannot be liquefied',
          'The boiling point at 1 atmosphere pressure',
          'The point where sublimation is impossible',
          'The unique temperature and pressure where solid, liquid, and gas phases coexist in thermodynamic equilibrium'
        ],
        correctIndex: 3,
        explanation: 'The triple point represents the exact invariant combination of temperature and pressure at which solid, liquid, and vapor phases coexist in stable thermodynamic equilibrium (e.g. for water: 0.01°C at 0.006 atm).',
        hint: 'Three phases coexisting simultaneously.'
      },
      {
        id: 'sm-5',
        question: 'What is the volume occupied by exactly one mole of an ideal gas at Standard Temperature and Pressure (STP: 0°C, 1 atm)?',
        options: ['22.4 Liters', '11.2 Liters', '44.8 Liters', '1.0 Liter'],
        correctIndex: 0,
        explanation: 'Substituting STP conditions (T = 273.15 K, P = 1.0 atm, R = 0.0821 L·atm/mol·K) into PV = nRT yields standard molar volume V = nRT / P = 22.414 L/mol.',
        hint: 'A standard fundamental constant memorized in stoichiometry.'
      }
    ]
  },
  {
    id: 'coordination-chemistry',
    title: 'Coordination Chemistry & Transition Metal Complexes',
    description: 'Explore ligand field splitting, Werner’s coordination theory, chelate rings, and isomerism.',
    category: 'Inorganic Chemistry',
    difficulty: 'Advanced',
    estimatedMinutes: 7,
    questions: [
      {
        id: 'cc-1',
        question: 'In Crystal Field Theory (CFT) for an octahedral transition metal complex, how do the five d-orbitals split in energy?',
        options: [
          'They remain degenerate at identical energy levels',
          'Into a higher-energy doubly degenerate set (eg: dx²-y², dz²) and a lower-energy triply degenerate set (t2g: dxy, dyz, dxz)',
          'Into a higher-energy t2g set and lower-energy eg set',
          'Into five separate non-degenerate energy levels'
        ],
        correctIndex: 1,
        explanation: 'In an octahedral field, ligands approach along the Cartesian x, y, and z axes. Orbitals pointing directly at ligands (dx²-y² and dz², the eg set) experience electrostatic repulsion and rise in energy, while orbitals pointing between axes (dxy, dyz, dxz, the t2g set) drop in energy.',
        hint: 'The eg orbitals point directly at the incoming ligand lone pairs.'
      },
      {
        id: 'cc-2',
        question: 'What is the coordination number and oxidation state of cobalt in the complex [Co(NH3)6]Cl3?',
        options: [
          'Coordination number = 6, Oxidation state = +3',
          'Coordination number = 3, Oxidation state = +6',
          'Coordination number = 6, Oxidation state = 0',
          'Coordination number = 9, Oxidation state = +3'
        ],
        correctIndex: 0,
        explanation: 'Six neutral ammine (NH3) ligands coordinate directly to the central cobalt ion (coordination number 6, octahedral). Three outer-sphere chloride counter-anions (3 × -1 = -3) indicate that cobalt is in the +3 oxidation state.',
        hint: 'Count the ligands bonded inside the square coordination brackets.'
      },
      {
        id: 'cc-3',
        question: 'What thermodynamic phenomenon explains why polydentate chelating ligands (like EDTA⁴⁻ or ethylenediamine) form vastly more stable complexes than monodentate ligands?',
        options: [
          'The Inductive Effect',
          'The Common-Ion Effect',
          'The Chelate Effect (driven primarily by favorable positive entropy change ΔS > 0)',
          'The Jahn-Teller Effect'
        ],
        correctIndex: 2,
        explanation: 'When a single multidentate ligand displaces multiple individual monodentate water ligands from a metal ion, the total number of free molecules in solution increases, generating a large favorable positive entropy change (ΔS > 0) that drives complexation.',
        hint: 'Releasing multiple bound water molecules increases disorder.'
      },
      {
        id: 'cc-4',
        question: 'According to the Spectrochemical Series, which ligand produces the strongest crystal field splitting (largest Δ_oct)?',
        options: ['Iodide (I⁻)', 'Chloride (Cl⁻)', 'Water (H2O)', 'Carbon Monoxide (CO / Cyanide CN⁻)'],
        correctIndex: 3,
        explanation: 'Carbon monoxide (CO) and cyanide (CN⁻) are strong pi-acceptor ligands that engage in back-bonding with metal d-orbitals, causing massive crystal field splitting (Δ_oct) and producing low-spin diamagnetic complexes.',
        hint: 'Strong pi-acid ligands with empty antibonding pi* orbitals.'
      },
      {
        id: 'cc-5',
        question: 'According to Alfred Werner’s pioneering coordination theory (1893), what is the difference between primary and secondary valence?',
        options: [
          'Primary valence is non-directional, while secondary valence determines coordination number and geometry',
          'Primary valence corresponds to oxidation state (ionizable), while secondary valence corresponds to coordination number (directional, non-ionizable)',
          'Primary valence involves covalent bonds; secondary valence involves metallic bonds',
          'Primary valence applies only to non-metals'
        ],
        correctIndex: 1,
        explanation: 'Werner deduced that transition metals exhibit two types of valency: primary valency (satisfying formal oxidation state with ionizable anions) and secondary valency (fixed spatial coordination number directed toward ligands in 3D geometry).',
        hint: 'Alfred Werner won the 1913 Nobel Prize in Chemistry for this distinction.'
      }
    ]
  },
  {
    id: 'environmental-chemistry',
    title: 'Environmental & Atmospheric Green Chemistry',
    description: 'Evaluate greenhouse radiative forcing, ozone depletion catalysis, ocean acidification, and atom economy.',
    category: 'Environmental Chemistry',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    questions: [
      {
        id: 'env-1',
        question: 'Which anthropogenic gas contributes the largest share to total cumulative atmospheric radiative greenhouse warming since pre-industrial times?',
        options: [
          'Carbon Dioxide (CO2)',
          'Methane (CH4)',
          'Sulfur Hexafluoride (SF6)',
          'Nitrous Oxide (N2O)'
        ],
        correctIndex: 0,
        explanation: 'While gases like SF6 and methane have higher global warming potentials per molecule, carbon dioxide (CO2) is emitted in tens of billions of metric tons annually and persists for centuries, accounting for roughly 66% of human radiative climate forcing.',
        hint: 'Released in massive quantities by fossil fuel combustion.'
      },
      {
        id: 'env-2',
        question: 'In the catalytic destruction of stratospheric ozone by chlorofluorocarbons (CFCs), which reactive intermediate acts as the propagating catalyst?',
        options: ['Fluoride anion (F⁻)', 'Carbon atom', 'Chlorine free radical (Cl•)', 'Nitrogen dioxide gas'],
        correctIndex: 2,
        explanation: 'UV photolysis of CFCs releases reactive chlorine free radicals (Cl•). A single chlorine radical can catalytically destroy upwards of 100,000 ozone molecules through cyclical reactions (Cl• + O3 -> ClO• + O2; ClO• + O -> Cl• + O2).',
        hint: 'A neutral chlorine atom possessing an unpaired valence electron.'
      },
      {
        id: 'env-3',
        question: 'What are the two primary industrial atmospheric emissions responsible for generating unpolluted acid precipitation (acid rain)?',
        options: [
          'Argon (Ar) and Helium (He)',
          'Sulfur Dioxide (SO2) and Nitrogen Oxides (NOx)',
          'Carbon Monoxide (CO) and Methane (CH4)',
          'Chlorine (Cl2) and Ammonia (NH3)'
        ],
        correctIndex: 1,
        explanation: 'Combustion of coal and smelting of sulfide ores emit SO2 (forming sulfuric acid H2SO4), while high-temperature engine combustion emits NOx (forming nitric acid HNO3), lowering rainwater pH below 4.5.',
        hint: 'Form sulfuric and nitric acids when oxidized in cloud droplets.'
      },
      {
        id: 'env-4',
        question: 'What primary chemical reaction causes ocean acidification as marine waters absorb excess atmospheric CO2?',
        options: [
          'CO2 precipitates directly as dry ice crystals on the sea floor',
          'CO2 oxidizes chloride ions into toxic chlorine bleach',
          'CO2 neutralizes all marine salt ions into pure water',
          'Dissolved CO2 forms carbonic acid (H2CO3) which releases H⁺ ions, consuming carbonate ions (CO3²⁻) needed by calcifying corals and shellfish'
        ],
        correctIndex: 3,
        explanation: 'CO2 reacts with seawater: CO2 + H2O <-> H2CO3 <-> H⁺ + HCO3⁻. The generated H⁺ ions consume ambient carbonate ions (H⁺ + CO3²⁻ <-> HCO3⁻), lowering calcium carbonate saturation levels and dissolving coral reefs.',
        hint: 'Involves carbonic acid and reduction of available carbonate ions.'
      },
      {
        id: 'env-5',
        question: 'In Green Chemistry, what does the fundamental metric "Atom Economy" measure?',
        options: [
          'The proportion of reactant atoms that are successfully incorporated into the final desired product versus waste: (MW of product / Sum of MW of reactants) × 100%',
          'The monetary cost of buying chemical reagents per gram',
          'The number of electrons transferred in a redox reaction',
          'The physical density of atoms in a solid metal crystal'
        ],
        correctIndex: 0,
        explanation: 'Formulated by Barry Trost in 1991, Atom Economy evaluates synthetic efficiency at the molecular level by measuring how much of the starting reactant mass ends up in the target compound rather than hazardous side-product waste.',
        hint: 'A percentage measuring how cleanly starting atoms become product atoms.'
      }
    ]
  },
  {
    id: 'biochemistry',
    title: 'Biochemistry, Enzymes & Molecular Biology',
    description: 'Test protein folding, peptide linkages, Chargaff’s DNA rules, enzyme energetics, and metabolic ATP bonds.',
    category: 'Biochemistry',
    difficulty: 'Intermediate',
    estimatedMinutes: 6,
    questions: [
      {
        id: 'bio-1',
        question: 'In protein biochemistry, what non-covalent interactions predominantly stabilize secondary structures such as alpha-helices and beta-pleated sheets?',
        options: [
          'Covalent disulfide bridges',
          'Hydrogen bonds between backbone carbonyl oxygens and amide hydrogens (C=O···H-N)',
          'Hydrophobic aromatic pi-stacking interactions',
          'Coordinate bonds with zinc cations'
        ],
        correctIndex: 1,
        explanation: 'Secondary protein structures are maintained by regular, repeating hydrogen bonds between the peptide backbone amide hydrogen (-NH) and carbonyl oxygen (-C=O) groups, independent of side-chain R groups.',
        hint: 'Hydrogen bonding along the peptide backbone.'
      },
      {
        id: 'bio-2',
        question: 'What type of chemical reaction links two amino acids together to form a peptide bond?',
        options: [
          'Condensation (Dehydration Synthesis) eliminating a water molecule',
          'Electrophilic Aromatic Substitution',
          'Free-Radical Halogenation',
          'Reductive Cleavage'
        ],
        correctIndex: 0,
        explanation: 'Ribosomal peptide bond formation is a condensation reaction where the alpha-amino group (-NH2) of one amino acid attacks the alpha-carboxyl group (-COOH) of another, releasing one molecule of water.',
        hint: 'Joining two biological monomers by removing water.'
      },
      {
        id: 'bio-3',
        question: 'According to Chargaff’s Rules in double-stranded DNA, which nitrogenous bases form specific complementary base pairs?',
        options: [
          'Adenine pairs with Guanine; Cytosine pairs with Thymine',
          'Uracil pairs with Guanine; Adenine pairs with Cytosine',
          'Adenine pairs with Thymine (2 hydrogen bonds); Guanine pairs with Cytosine (3 hydrogen bonds)',
          'All four bases pair interchangeably without specificity'
        ],
        correctIndex: 2,
        explanation: 'In duplex B-DNA, purine Adenine (A) forms two hydrogen bonds with pyrimidine Thymine (T), and purine Guanine (G) forms three hydrogen bonds with pyrimidine Cytosine (C), ensuring consistent double-helix diameter.',
        hint: 'A-T (2 H-bonds) and G-C (3 H-bonds).'
      },
      {
        id: 'bio-4',
        question: 'How do biological enzyme catalysts accelerate the rate of biochemical reactions by orders of magnitude?',
        options: [
          'By raising the overall standard free energy of the products (ΔG°)',
          'By making non-spontaneous endergonic reactions spontaneous',
          'By heating the cellular cytoplasm to high temperatures',
          'By stabilizing the transition state and dramatically lowering the Gibbs free energy of activation (ΔG‡)'
        ],
        correctIndex: 3,
        explanation: 'Enzymes bind substrate molecules within their active sites, providing optimal spatial orientation and strain that lowers the activation energy barrier (ΔG‡) without altering the equilibrium position or overall ΔG.',
        hint: 'Enzymes lower the height of the transition state energy hill.'
      },
      {
        id: 'bio-5',
        question: 'Which chemical bonds within Adenosine Triphosphate (ATP) release large quantities of free energy upon hydrolysis to drive cellular metabolic work?',
        options: [
          'Carbon-carbon single bonds in the ribose sugar ring',
          'Phosphoanhydride bonds connecting the terminal phosphate groups',
          'Covalent glycosidic bonds linking adenine to ribose',
          'Peptide amide bonds'
        ],
        correctIndex: 1,
        explanation: 'Hydrolysis of the phosphoanhydride bonds linking the beta and gamma phosphates of ATP releases ~30.5 kJ/mol of free energy (ΔG°\' = -30.5 kJ/mol), relieved of electrostatic repulsion among adjacent negative charges.',
        hint: 'High-energy bonds linking adjacent phosphorus and oxygen atoms.'
      }
    ]
  }
];

export default quizzesData;

