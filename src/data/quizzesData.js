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
  }
];

export default quizzesData;
