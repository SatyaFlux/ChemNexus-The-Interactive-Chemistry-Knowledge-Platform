// src/data/quizzes/electrochemistry.js
// 20 Comprehensive Questions on Electrochemistry, Galvanic Cells, Electrolysis & Batteries

export const electrochemistryQuiz = {
  id: 'electrochemistry',
  title: 'Electrochemistry, Galvanic Cells & Nernst Equation',
  description: 'Master standard potentials, cell EMF, Faraday\'s laws of electrolysis, batteries, fuel cells, and corrosion.',
  category: 'Electrochemistry',
  difficulty: 'Advanced',
  estimatedMinutes: 15,
  questions: [
    {
      id: 'ec-1',
      question: 'What is the standard reduction potential (E°) assigned to the Standard Hydrogen Electrode (SHE) at 298 K?',
      options: ['0.00 V (by international convention)', '+1.00 V', '-0.76 V', '+0.34 V'],
      correctIndex: 0,
      explanation: 'By international IUPAC agreement, the Standard Hydrogen Electrode (2H⁺ + 2e⁻ -> H2 at 1 atm, 1 M H⁺, 298 K) is assigned 0.00 V as the universal reference benchmark.',
      hint: 'The arbitrary zero reference potential.'
    },
    {
      id: 'ec-2',
      question: 'In a galvanic cell, what critical role does the salt bridge perform?',
      options: [
        'It maintains electrical neutrality in half-cells by allowing ion migration without mixing electrolyte solutions',
        'It supplies electrons directly to the external electrical circuit',
        'It increases the standard reduction potential of the cathode',
        'It serves as a sacrificial physical catalyst'
      ],
      correctIndex: 0,
      explanation: 'As electrons flow externally, ions migrate through the salt bridge (anions toward anode, cations toward cathode) to neutralize charge accumulation.',
      hint: 'Without it, charge accumulation immediately halts current flow.'
    },
    {
      id: 'ec-3',
      question: 'At which electrode does chemical oxidation ALWAYS occur in both galvanic and electrolytic cells?',
      options: ['The Anode', 'The Cathode', 'The Salt Bridge', 'The Voltmeter'],
      correctIndex: 0,
      explanation: 'By electrochemical definition, oxidation (loss of electrons) always occurs at the anode, while reduction (gain of electrons) takes place at the cathode ("An Ox").',
      hint: 'Mnemonic: "An Ox" = Anode Oxidation.'
    },
    {
      id: 'ec-4',
      question: 'According to Faraday’s First Law of Electrolysis, the mass (m) of a substance liberated at an electrode is directly proportional to:',
      options: [
        'The total quantity of electric charge (Q = I × t) passed through the cell',
        'The square of the applied voltage across terminals',
        'The volume of solvent in the cell',
        'The resistance of the wire connection'
      ],
      correctIndex: 0,
      explanation: 'Faraday’s first law states m = Z · Q = Z · I · t, meaning deposited mass is proportional to the total Coulombs of charge transferred.',
      hint: 'Formulated by Michael Faraday in 1834.'
    },
    {
      id: 'ec-5',
      question: 'According to the Nernst equation E = E° - (RT/nF) ln(Q), what happens to cell potential (E) as a battery completely discharges to equilibrium?',
      options: [
        'Cell potential E drops to exactly 0.00 V because Q equals the equilibrium constant K',
        'Cell potential reaches infinity',
        'Cell potential equals standard potential E°',
        'Reaction quotient Q drops to zero'
      ],
      correctIndex: 0,
      explanation: 'At equilibrium, forward and reverse electron transfer rates equalize, Q = K, and the cell potential E drops to 0.00 V (a "dead" battery).',
      hint: 'A dead battery has reached thermodynamic equilibrium.'
    },
    {
      id: 'ec-6',
      question: 'What is the standard cell potential (E°_cell) for the Daniell cell: Zn(s) + Cu²⁺(aq) -> Zn²⁺(aq) + Cu(s) given E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V?',
      options: ['+1.10 V (E°_cell = E°_cathode - E°_anode = +0.34 - (-0.76) = +1.10 V)', '+0.42 V', '-1.10 V', '+0.76 V'],
      correctIndex: 0,
      explanation: 'E°_cell = E°_cathode (Cu) - E°_anode (Zn) = +0.34 V - (-0.76 V) = +1.10 V. The positive potential confirms spontaneous operation.',
      hint: 'Subtract anode potential from cathode potential.'
    },
    {
      id: 'ec-7',
      question: 'What is the relationship between standard cell potential (E°_cell) and standard Gibbs Free Energy change (ΔG°)?',
      options: [
        'ΔG° = -n F E°_cell (where n = moles of e⁻, F = Faraday constant)',
        'ΔG° = +n F E°_cell',
        'ΔG° = -R T ln(E°_cell)',
        'ΔG° = E°_cell / nF'
      ],
      correctIndex: 0,
      explanation: 'A spontaneous galvanic cell with positive E°_cell yields a negative ΔG°, establishing thermodynamic spontaneity: ΔG° = -nFE°.',
      hint: 'Connects electrical potential to chemical free energy.'
    },
    {
      id: 'ec-8',
      question: 'In a commercial secondary Lead-Acid battery during discharge, what chemical compound forms on BOTH positive and negative plates?',
      options: ['Lead(II) sulfate (PbSO4)', 'Lead dioxide (PbO2)', 'Elemental lead (Pb)', 'Lead oxide (PbO)'],
      correctIndex: 0,
      explanation: 'Comproportionation converts both sponge lead (anode) and lead dioxide (cathode) into solid lead(II) sulfate: Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O.',
      hint: 'A sulfate precipitate coating automotive battery plates.'
    },
    {
      id: 'ec-9',
      question: 'What is the Faraday constant (F), representing the total electric charge carried by one mole of electrons?',
      options: ['~96,485 Coulombs per mole', '1.602 × 10⁻¹⁹ Coulombs', '6.022 × 10²³ Coulombs', '8.314 Joules'],
      correctIndex: 0,
      explanation: 'F = e · N_A = (1.60217663 × 10⁻¹⁹ C) × (6.02214076 × 10²³ mol⁻¹) ≈ 96,485 C/mol.',
      hint: 'Charge of one electron times Avogadro\'s number.'
    },
    {
      id: 'ec-10',
      question: 'Which method protects buried steel pipelines from corrosion by connecting them to a sacrificial block of zinc or magnesium?',
      options: [
        'Cathodic Protection (Sacrificial Anode)',
        'Anodic Passivation',
        'Electroplating',
        'Galvanic Pickling'
      ],
      correctIndex: 0,
      explanation: 'More active metals (Zn or Mg) have lower reduction potentials and oxidize preferentially, supplying electrons to the steel pipe and making it cathodic.',
      hint: 'The more active metal sacrifices itself to protect the pipe.'
    },
    {
      id: 'ec-11',
      question: 'What gas is produced at the cathode during the electrolysis of molten sodium chloride (NaCl) in a Downs cell?',
      options: [
        'No gas; liquid sodium metal (Na) is produced at the cathode',
        'Chlorine gas (Cl2)',
        'Hydrogen gas (H2)',
        'Oxygen gas (O2)'
      ],
      correctIndex: 0,
      explanation: 'In molten NaCl (no water present), Na⁺ ions are reduced at the cathode to liquid sodium metal (Na⁺ + e⁻ -> Na(l)), while Cl2 gas forms at the anode.',
      hint: 'Downs cell isolates metallic sodium metal.'
    },
    {
      id: 'ec-12',
      question: 'What gas is evolved at the cathode during the electrolysis of aqueous sodium chloride brine (Chloralkali process)?',
      options: ['Hydrogen gas (H2)', 'Sodium vapor', 'Chlorine gas (Cl2)', 'Oxygen gas (O2)'],
      correctIndex: 0,
      explanation: 'In aqueous brine, water is more easily reduced than Na⁺ (-0.83 V vs -2.71 V), evolving H2 gas and OH⁻: 2H2O + 2e⁻ -> H2 + 2OH⁻.',
      hint: 'Water reduces more easily than sodium ions.'
    },
    {
      id: 'ec-13',
      question: 'What is the voltage produced by a single standard commercial Lithium-ion battery cell using a LiCoO2 cathode and graphite anode?',
      options: ['~3.6 to 3.7 Volts', '~1.5 Volts', '~2.1 Volts', '~1.2 Volts'],
      correctIndex: 0,
      explanation: 'Lithium-ion cells operate at a nominal voltage of ~3.6-3.7 V, more than double alkaline (1.5 V) or NiMH (1.2 V) cells.',
      hint: 'Smartphone battery operating voltage.'
    },
    {
      id: 'ec-14',
      question: 'In a Hydrogen-Oxygen Proton Exchange Membrane (PEM) Fuel Cell, what is the sole chemical exhaust byproduct?',
      options: ['Pure water (H2O)', 'Carbon dioxide (CO2)', 'Carbon monoxide (CO)', 'Sulfur dioxide (SO2)'],
      correctIndex: 0,
      explanation: 'PEM fuel cells combine H2 and atmospheric O2 electrochemically to generate electricity, releasing only pure water: 2H2 + O2 -> 2H2O.',
      hint: 'Zero-emission vehicle exhaust.'
    },
    {
      id: 'ec-15',
      question: 'What is a "Concentration Cell"?',
      options: [
        'A galvanic cell with identical electrodes and electrolytes differing only in solute concentrations',
        'A battery that concentrates acid',
        'An industrial smelting tank',
        'A cell that cannot generate electricity'
      ],
      correctIndex: 0,
      explanation: 'A concentration cell has E° = 0 V, but generates potential (E = -0.0592/n log([dilute]/[concentrated])) driven by the entropy of dilution.',
      hint: 'Operates due to a concentration gradient between half-cells.'
    },
    {
      id: 'ec-16',
      question: 'How long will it take a current of 10.0 Amperes to deposit 1.0 mole of silver metal (Ag⁺ + e⁻ -> Ag) from an AgNO3 bath?',
      options: [
        '9648.5 seconds (~2.68 hours)',
        '964.8 seconds',
        '100 seconds',
        '86,400 seconds'
      ],
      correctIndex: 0,
      explanation: 'Depositing 1.0 mol Ag requires 1.0 mol electrons = 96,485 Coulombs. Time t = Q / I = 96,485 C / 10.0 A = 9648.5 seconds (2.68 hours).',
      hint: 't = (n · F) / I.'
    },
    {
      id: 'ec-17',
      question: 'What is the Overpotential (overvoltage) in electrochemistry?',
      options: [
        'The extra potential beyond thermodynamic potential required to drive an electrolytic reaction at a practical rate due to kinetic activation barriers',
        'The maximum voltage of a battery',
        'The breakdown voltage of water',
        'The voltage of a lightning strike'
      ],
      correctIndex: 0,
      explanation: 'Kinetic barriers (especially gas evolution like O2 or H2 on electrodes) necessitate an overpotential beyond reversible Nernstian potential.',
      hint: 'Kinetic resistance requiring additional voltage.'
    },
    {
      id: 'ec-18',
      question: 'Which equation relates the standard equilibrium constant (K) to standard cell potential (E°_cell) at 298 K?',
      options: [
        'E°_cell = (0.0592 V / n) log10(K)',
        'E°_cell = n · F · K',
        'E°_cell = -RT · K',
        'E°_cell = K / n'
      ],
      correctIndex: 0,
      explanation: 'Combining ΔG° = -nFE° and ΔG° = -RT ln(K) at 25°C gives: E°_cell = (2.303 RT / nF) log10(K) = (0.0592 V / n) log10(K).',
      hint: 'Connects electrical voltage directly to the chemical equilibrium constant.'
    },
    {
      id: 'ec-19',
      question: 'In the corrosion of iron (rusting), what acts as the cathode site on the metal surface?',
      options: [
        'A region exposed to high dissolved oxygen where O2 is reduced: O2 + 2H2O + 4e⁻ -> 4OH⁻',
        'The iron pit where Fe is oxidized to Fe²⁺',
        'The dry interior of the metal',
        'The zinc coating'
      ],
      correctIndex: 0,
      explanation: 'Iron dissolves at anodic pit sites (Fe -> Fe²⁺ + 2e⁻), while electrons travel through metal to the droplet perimeter where oxygen is reduced to OH⁻.',
      hint: 'Where atmospheric oxygen is reduced to hydroxide.'
    },
    {
      id: 'ec-20',
      question: 'Why does an ordinary alkaline AA battery (Zn/MnO2) eventually drop in voltage as it is used?',
      options: [
        'Internal resistance rises and reactant concentrations drop, increasing reaction quotient Q in the Nernst equation',
        'Electrons leak out of the battery casing into the air',
        'The zinc metal gains protons',
        'The battery turns into lead'
      ],
      correctIndex: 0,
      explanation: 'As reactants convert to products, Q increases. Per the Nernst equation E = E° - (RT/nF) ln(Q), increasing Q lowers the cell voltage.',
      hint: 'Applying the Nernst equation as reactants are depleted.'
    }
  ]
};
