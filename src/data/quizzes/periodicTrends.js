// src/data/quizzes/periodicTrends.js
// 20 Comprehensive Questions on Periodic Trends & Periodicity

export const periodicTrendsQuiz = {
  id: 'periodic-trends',
  title: 'Periodic Table Trends & Periodicity',
  description: 'Master electronegativity, ionization energies, atomic/ionic radii, electron affinities, and metallic character across groups and periods.',
  category: 'Periodic Trends',
  difficulty: 'Intermediate',
  estimatedMinutes: 15,
  questions: [
    {
      id: 'pt-1',
      question: 'Which of the following elements has the highest electronegativity on the Pauling scale?',
      options: ['Fluorine (F)', 'Oxygen (O)', 'Chlorine (Cl)', 'Nitrogen (N)'],
      correctIndex: 0,
      explanation: 'Fluorine is the most electronegative element with a Pauling value of 3.98 due to its minimal atomic radius and strong effective nuclear charge.',
      hint: 'It is the halogen at the top of Group 17.'
    },
    {
      id: 'pt-2',
      question: 'As you move from left to right across Period 3 (Na to Ar), how does the atomic radius generally change?',
      options: ['Decreases', 'Increases', 'Remains constant', 'First increases then drops sharply'],
      correctIndex: 0,
      explanation: 'Electrons are added to the same principal shell while nuclear protons increase, pulling the electron cloud inward and reducing atomic radius.',
      hint: 'Effective nuclear charge increases across the period.'
    },
    {
      id: 'pt-3',
      question: 'Which element possesses the highest first ionization energy among all 118 elements?',
      options: ['Helium (He)', 'Neon (Ne)', 'Fluorine (F)', 'Hydrogen (H)'],
      correctIndex: 0,
      explanation: 'Helium has the highest first ionization energy (2372 kJ/mol) because its two 1s electrons experience minimal shielding and strong nuclear pull.',
      hint: 'The lightest noble gas with a duet configuration.'
    },
    {
      id: 'pt-4',
      question: 'Which alkali metal has the lowest first ionization energy among stable elements?',
      options: ['Cesium (Cs)', 'Potassium (K)', 'Sodium (Na)', 'Lithium (Li)'],
      correctIndex: 0,
      explanation: 'Cesium has the lowest first ionization energy (375.7 kJ/mol) because its 6s valence electron is heavily shielded by 54 inner electrons.',
      hint: 'Atomic number 55 in Period 6.'
    },
    {
      id: 'pt-5',
      question: 'Why does Nitrogen (Z = 7) have a higher first ionization energy than Oxygen (Z = 8)?',
      options: [
        'Nitrogen has a half-filled 2p³ subshell with special exchange stability',
        'Nitrogen is more electronegative than Oxygen',
        'Oxygen has fewer nuclear protons than Nitrogen',
        'Nitrogen has an extra electron shell'
      ],
      correctIndex: 0,
      explanation: 'Nitrogen has a stable half-filled 2p³ subshell. Removing an electron from oxygen relieves inter-electronic repulsion in its paired 2p⁴ orbital.',
      hint: 'Hund’s rule and half-filled subshell stability.'
    },
    {
      id: 'pt-6',
      question: 'Which element in Period 2 has the most negative (most exothermic) electron affinity?',
      options: ['Fluorine (F)', 'Chlorine (Cl)', 'Oxygen (O)', 'Neon (Ne)'],
      correctIndex: 0,
      explanation: 'Among Period 2 elements, Fluorine has the most exothermic electron affinity (-328 kJ/mol) as it readily gains an electron to complete an octet.',
      hint: 'Needs only one electron to attain the neon configuration.'
    },
    {
      id: 'pt-7',
      question: 'Why does Chlorine (Cl) have a slightly more exothermic electron affinity than Fluorine (F)?',
      options: [
        'Fluorine has a small, crowded 2p subshell with high electron-electron repulsion',
        'Chlorine has higher electronegativity than Fluorine',
        'Fluorine has more shielding than Chlorine',
        'Chlorine is a noble gas'
      ],
      correctIndex: 0,
      explanation: 'Fluorine’s compact 2p subshell suffers significant inter-electronic repulsion, slightly destabilizing the incoming electron compared to chlorine’s larger 3p subshell.',
      hint: 'Compare the physical volume of 2p versus 3p orbitals.'
    },
    {
      id: 'pt-8',
      question: 'How do the ionic radii of isoelectronic species change in the series: N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺?',
      options: [
        'Decreases continuously from N³⁻ to Al³⁺',
        'Increases continuously from N³⁻ to Al³⁺',
        'Remains identical because all have 10 electrons',
        'First decreases then increases'
      ],
      correctIndex: 0,
      explanation: 'All have 10 electrons, but nuclear charge increases from N (7 protons) to Al (13 protons). Greater proton pull contracts the ionic radius.',
      hint: 'Higher nuclear charge pulls the same 10 electrons closer.'
    },
    {
      id: 'pt-9',
      question: 'Which of the following elements exhibits the strongest metallic character?',
      options: ['Cesium (Cs)', 'Aluminium (Al)', 'Iron (Fe)', 'Lead (Pb)'],
      correctIndex: 0,
      explanation: 'Metallic character increases down a group and to the left across a period. Cesium loses its valence electron most readily.',
      hint: 'Bottom-left corner of the periodic table.'
    },
    {
      id: 'pt-10',
      question: 'What is the general trend for metallic oxide acidity across a period from left to right?',
      options: [
        'Changes from strongly basic (e.g. Na2O) to amphoteric (Al2O3) to acidic (SO3, Cl2O7)',
        'Changes from strongly acidic to basic',
        'Remains neutral across the entire period',
        'Oxides become purely inert'
      ],
      correctIndex: 0,
      explanation: 'Metal oxides on the left are basic ionic oxides. In the center, oxides like Al2O3 are amphoteric, and nonmetal oxides on the right are covalent and acidic.',
      hint: 'Sodium oxide forms NaOH (base), while sulfur trioxide forms H2SO4 (acid).'
    },
    {
      id: 'pt-11',
      question: 'Which group in the periodic table has the general valence electron configuration ns² np⁵?',
      options: ['Halogens (Group 17)', 'Chalcogens (Group 16)', 'Noble Gases (Group 18)', 'Alkali Metals (Group 1)'],
      correctIndex: 0,
      explanation: 'Halogens have 7 valence electrons (two in s and five in p), requiring one electron to complete an inert gas octet.',
      hint: 'Group containing Fluorine, Chlorine, Bromine, and Iodine.'
    },
    {
      id: 'pt-12',
      question: 'What is the "Lanthanide Contraction"?',
      options: [
        'The steady decrease in atomic and ionic radii of the lanthanides from La to Lu due to poor 4f shielding',
        'The radioactive decay of transuranic elements',
        'The expansion of alkali metals when heated',
        'The loss of d-electrons in transition metals'
      ],
      correctIndex: 0,
      explanation: 'The 14 4f electrons have poor shielding ability, causing increasing nuclear charge to pull outer shells inward, making 5d metals similar in size to 4d metals.',
      hint: 'Explains why Zirconium and Hafnium have nearly identical atomic radii.'
    },
    {
      id: 'pt-13',
      question: 'Why do Noble Gases (Group 18) possess positive or near-zero electron affinities?',
      options: [
        'Their valence s and p subshells are completely filled, forcing an added electron into a higher principal energy level',
        'They are highly electropositive metals',
        'They lack atomic nuclei',
        'Their electronegativity is too high'
      ],
      correctIndex: 0,
      explanation: 'Noble gases possess stable closed-shell octets (ns² np⁶). An additional electron must enter an unstable higher shell (e.g. (n+1)s), which is energetically unfavorable.',
      hint: 'Think about where the 9th or 11th electron would have to go.'
    },
    {
      id: 'pt-14',
      question: 'Which element has the highest density among all elements at standard conditions?',
      options: ['Osmium (Os)', 'Lead (Pb)', 'Gold (Au)', 'Uranium (U)'],
      correctIndex: 0,
      explanation: 'Osmium has a density of 22.59 g/cm³, closely rivaled by Iridium (22.56 g/cm³), due to the Lanthanide Contraction packing massive nuclei closely.',
      hint: 'A dense platinum-group transition metal in Period 6.'
    },
    {
      id: 'pt-15',
      question: 'What is the diagonal relationship in the periodic table, such as between Lithium and Magnesium?',
      options: [
        'Similarities in chemical properties between diagonally adjacent Period 2 and Period 3 elements due to similar charge-to-radius ratios',
        'Elements that fuse together in stars',
        'Metals that cannot form alloys',
        'Elements with identical boiling points'
      ],
      correctIndex: 0,
      explanation: 'Increasing charge across a period cancels with increasing radius down a group, giving diagonal pairs (Li/Mg, Be/Al, B/Si) remarkably similar polarizability and chemistry.',
      hint: 'Compare the ionic potential (charge/radius) of Li⁺ and Mg²⁺.'
    },
    {
      id: 'pt-16',
      question: 'Which of the following atoms has the largest atomic radius?',
      options: ['Rubidium (Rb)', 'Sodium (Na)', 'Chlorine (Cl)', 'Silicon (Si)'],
      correctIndex: 0,
      explanation: 'Atomic radius increases down groups and toward the left. Rubidium is in Period 5 Group 1, possessing 5 occupied electron shells.',
      hint: 'Look for the alkali metal in the lowest period listed.'
    },
    {
      id: 'pt-17',
      question: 'Why is the second ionization energy of Sodium (Na) dramatically higher than its first ionization energy?',
      options: [
        'The second electron is removed from a stable, core noble-gas shell [Ne] (2p⁶)',
        'Sodium has two valence electrons',
        'The sodium nucleus loses protons after first ionization',
        'Sodium becomes a non-metal after losing one electron'
      ],
      correctIndex: 0,
      explanation: 'First ionization removes the single 3s valence electron. The second ionization must break into the stable closed-shell 2p⁶ core much closer to the nucleus.',
      hint: 'Na: [Ne] 3s¹ -> Na⁺: [Ne].'
    },
    {
      id: 'pt-18',
      question: 'Which halogen exists as a reddish-brown liquid at standard room temperature and pressure?',
      options: ['Bromine (Br2)', 'Iodine (I2)', 'Chlorine (Cl2)', 'Fluorine (F2)'],
      correctIndex: 0,
      explanation: 'Bromine is the only nonmetallic element that is liquid at standard room conditions (melting point -7.2°C, boiling point 58.8°C).',
      hint: 'Its name comes from the Greek "bromos" meaning stench.'
    },
    {
      id: 'pt-19',
      question: 'How does effective nuclear charge (Z_eff) experienced by valence electrons change across Period 2 (Li to F)?',
      options: [
        'Increases roughly by ~0.65 per element because inner core shielding remains constant while nuclear protons increase',
        'Decreases because electrons repel each other',
        'Remains exactly 1.0 for all elements',
        'Oscillates between odd and even elements'
      ],
      correctIndex: 0,
      explanation: 'Slater’s rules show that inner 1s² electrons shield ~0.85-1.0, while valence electrons shield each other weakly (~0.35), so Z_eff rises steadily as atomic number increases.',
      hint: 'Z_eff = Z - S (protons minus shielding).'
    },
    {
      id: 'pt-20',
      question: 'What property explains why Beryllium has a higher first ionization energy than Boron?',
      options: [
        'Beryllium has a completely filled 2s² subshell, whereas Boron has a single, more easily removed 2p¹ electron',
        'Boron has more shielding than Carbon',
        'Beryllium is a noble gas',
        'Boron is located in Period 1'
      ],
      correctIndex: 0,
      explanation: 'Removing an electron from Beryllium requires breaking the filled 2s² subshell. Boron’s 2p¹ electron is higher in energy and shielded by the 2s² pair.',
      hint: 'Compare 2s² with 2s² 2p¹ orbital energies.'
    }
  ]
};
