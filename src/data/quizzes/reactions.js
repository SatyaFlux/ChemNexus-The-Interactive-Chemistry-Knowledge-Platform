// src/data/quizzes/reactions.js
// 20 Comprehensive Questions on Chemical Reactions, Stoichiometry, Catalysis & Equilibria

export const reactionsQuiz = {
  id: 'chemical-reactions',
  title: 'Chemical Reactions & Stoichiometry',
  description: 'Master reaction classifications, stoichiometric mole calculations, catalysts, equilibrium shifts, and redox half-reactions.',
  category: 'Reactions',
  difficulty: 'Intermediate',
  estimatedMinutes: 15,
  questions: [
    {
      id: 'cr-1',
      question: 'In the Haber-Bosch process (N2 + 3H2 <-> 2NH3 + heat), which condition shifts equilibrium toward higher ammonia yield?',
      options: ['Increasing total pressure', 'Increasing temperature', 'Decreasing pressure', 'Removing nitrogen gas'],
      correctIndex: 0,
      explanation: 'The reaction turns 4 moles of gas into 2 moles of gas. Increasing pressure shifts equilibrium toward fewer gas molecules, enhancing ammonia yield.',
      hint: 'Count stoichiometric moles of gas on both sides.'
    },
    {
      id: 'cr-2',
      question: 'What reaction type is: 2Al + Fe2O3 -> Al2O3 + 2Fe?',
      options: ['Single Displacement / Redox', 'Double Displacement', 'Decomposition', 'Acid-Base Neutralization'],
      correctIndex: 0,
      explanation: 'The thermite reaction is a single displacement redox reaction where aluminium replaces iron due to its higher oxidation potential.',
      hint: 'A more electropositive metal displaces a less reactive metal.'
    },
    {
      id: 'cr-3',
      question: 'Which catalyst is used industrially in the Contact Process to convert SO2 to SO3 (2SO2 + O2 -> 2SO3)?',
      options: ['Vanadium(V) oxide (V2O5)', 'Iron (Fe)', 'Platinum (Pt)', 'Nickel (Ni)'],
      correctIndex: 0,
      explanation: 'Vanadium(V) oxide (V2O5) on silica pellets is the primary heterogeneous catalyst for sulfuric acid precursor oxidation at ~450°C.',
      hint: 'A Group 5 transition metal pentoxide.'
    },
    {
      id: 'cr-4',
      question: 'What is the balanced stoichiometric coefficient of O2 in the complete combustion of propane: C3H8 + x O2 -> 3CO2 + 4H2O?',
      options: ['5', '3', '7', '10'],
      correctIndex: 0,
      explanation: 'Products contain 3 CO2 (6 oxygens) + 4 H2O (4 oxygens) = 10 total oxygen atoms. Thus, 10 / 2 = 5 O2 molecules.',
      hint: 'Count total oxygen atoms in products.'
    },
    {
      id: 'cr-5',
      question: 'What is the oxidation state of Chromium in potassium dichromate (K2Cr2O7)?',
      options: ['+6', '+3', '+7', '+4'],
      correctIndex: 0,
      explanation: 'K is +1 (total +2), O is -2 (total -14). In neutral K2Cr2O7: 2 + 2x - 14 = 0 => 2x = 12 => x = +6.',
      hint: 'Alkali metals are +1 and oxygen is -2.'
    },
    {
      id: 'cr-6',
      question: 'In the redox reaction Zn + CuSO4 -> ZnSO4 + Cu, which species acts as the reducing agent?',
      options: ['Zinc metal (Zn)', 'Copper(II) ions (Cu²⁺)', 'Sulfate ions (SO4²⁻)', 'Water'],
      correctIndex: 0,
      explanation: 'Zinc loses two electrons (is oxidized from 0 to +2), thereby donating electrons to reduce Cu²⁺ to elemental copper.',
      hint: 'The reducing agent undergoes oxidation.'
    },
    {
      id: 'cr-7',
      question: 'How many moles of water are produced when 4.0 moles of hydrogen gas react with excess oxygen (2H2 + O2 -> 2H2O)?',
      options: ['4.0 moles', '2.0 moles', '8.0 moles', '1.0 mole'],
      correctIndex: 0,
      explanation: 'The mole ratio of H2 to H2O is 2:2 (or 1:1). Thus, 4.0 moles of H2 will yield exactly 4.0 moles of H2O.',
      hint: 'The molar ratio between H2 and H2O is 1:1.'
    },
    {
      id: 'cr-8',
      question: 'Which of the following represents a disproportionation reaction?',
      options: [
        '2H2O2 -> 2H2O + O2',
        'CH4 + 2O2 -> CO2 + 2H2O',
        'HCl + NaOH -> NaCl + H2O',
        'AgNO3 + NaCl -> AgCl + NaNO3'
      ],
      correctIndex: 0,
      explanation: 'Oxygen in H2O2 (-1 oxidation state) is simultaneously reduced to water (-2) and oxidized to elemental oxygen (0).',
      hint: 'The same element is both oxidized and reduced.'
    },
    {
      id: 'cr-9',
      question: 'What does Le Chatelier’s principle predict when an exothermic reaction at equilibrium is heated?',
      options: [
        'Equilibrium shifts in the endothermic reverse direction, decreasing product yield',
        'Equilibrium shifts forward to make more products',
        'Reaction completely stops',
        'Equilibrium constant K remains unchanged'
      ],
      correctIndex: 0,
      explanation: 'In exothermic reactions (heat is a product), adding thermal energy drives the system to absorb heat by shifting in the reverse endothermic direction.',
      hint: 'Treat heat as a product on the right side of the arrow.'
    },
    {
      id: 'cr-10',
      question: 'What is the limiting reactant when 3 moles of H2 react with 2 moles of O2 to form water (2H2 + O2 -> 2H2O)?',
      options: ['Hydrogen (H2)', 'Oxygen (O2)', 'Water (H2O)', 'Neither (equimolar)'],
      correctIndex: 0,
      explanation: '3 moles of H2 require 1.5 moles of O2. Since 2.0 moles of O2 are available, H2 runs out first, making it the limiting reactant.',
      hint: 'Compare mole ratios: 2 moles of H2 are needed for each mole of O2.'
    },
    {
      id: 'cr-11',
      question: 'What type of reaction occurs when solid calcium carbonate is heated: CaCO3(s) -> CaO(s) + CO2(g)?',
      options: ['Thermal Decomposition', 'Combustion', 'Single Displacement', 'Precipitation'],
      correctIndex: 0,
      explanation: 'Calcination of limestone breaks a single compound into two simpler chemical substances through thermal heating.',
      hint: 'A single reactant breaking down into multiple products.'
    },
    {
      id: 'cr-12',
      question: 'In the Ostwald process, what precious metal catalyst oxidizes ammonia into nitric oxide (4NH3 + 5O2 -> 4NO + 6H2O)?',
      options: ['Platinum-Rhodium gauze', 'Iron oxide', 'Vanadium pentoxide', 'Nickel mesh'],
      correctIndex: 0,
      explanation: 'A 90% Platinum - 10% Rhodium wire gauze operates at 800-900°C to flash-oxidize ammonia in millisecond contact times.',
      hint: 'Discovered by Wilhelm Ostwald.'
    },
    {
      id: 'cr-13',
      question: 'What is the oxidation state of Manganese in the permanganate ion (MnO4⁻)?',
      options: ['+7', '+4', '+2', '+6'],
      correctIndex: 0,
      explanation: 'Four oxygens contribute 4 × (-2) = -8. For net charge of -1: x - 8 = -1 => x = +7.',
      hint: 'Total charge on the polyatomic ion is -1.'
    },
    {
      id: 'cr-14',
      question: 'What is the net ionic equation for the reaction of aqueous hydrochloric acid with aqueous sodium hydroxide?',
      options: [
        'H⁺(aq) + OH⁻(aq) -> H2O(l)',
        'Na⁺(aq) + Cl⁻(aq) -> NaCl(s)',
        'HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)',
        '2H⁺(aq) + O²⁻(aq) -> H2O(l)'
      ],
      correctIndex: 0,
      explanation: 'Sodium (Na⁺) and chloride (Cl⁻) are spectator ions. The actual chemical change is hydronium/hydrogen ion neutralizing hydroxide to form water.',
      hint: 'Omit spectator ions appearing on both sides.'
    },
    {
      id: 'cr-15',
      question: 'What is the percentage yield if a reaction theoretically calculated to yield 50.0 grams produces 40.0 grams experimentally?',
      options: ['80.0%', '20.0%', '125.0%', '90.0%'],
      correctIndex: 0,
      explanation: 'Percentage Yield = (Actual Yield / Theoretical Yield) × 100% = (40.0 g / 50.0 g) × 100% = 80.0%.',
      hint: 'Divide actual yield by theoretical yield and multiply by 100.'
    },
    {
      id: 'cr-16',
      question: 'Which reaction condition represents the Water-Gas Shift Reaction (WGSR)?',
      options: [
        'CO + H2O <-> CO2 + H2',
        'CH4 + H2O <-> CO + 3H2',
        '2H2 + O2 -> 2H2O',
        'C + O2 -> CO2'
      ],
      correctIndex: 0,
      explanation: 'The water-gas shift reaction converts toxic carbon monoxide and steam into carbon dioxide and valuable hydrogen gas over iron-chromium catalysts.',
      hint: 'Shifts CO and steam to CO2 and H2.'
    },
    {
      id: 'cr-17',
      question: 'What type of chemical reaction is represented by: BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)?',
      options: ['Double Displacement / Precipitation', 'Single Displacement', 'Synthesis', 'Combustion'],
      correctIndex: 0,
      explanation: 'Cations and anions exchange partners, precipitating insoluble white barium sulfate.',
      hint: 'Metathesis reaction forming an insoluble solid.'
    },
    {
      id: 'cr-18',
      question: 'In the thermite reaction 2Al + Fe2O3 -> Al2O3 + 2Fe, what is the role of Aluminium?',
      options: [
        'It acts as the reducing agent and is oxidized to Al³⁺',
        'It acts as the oxidizing agent and is reduced',
        'It acts solely as a physical solvent',
        'It acts as an inert spectator ion'
      ],
      correctIndex: 0,
      explanation: 'Aluminium starts at 0 oxidation state and ends as +3 in Al2O3, donating electrons to reduce iron from +3 to 0.',
      hint: 'Aluminium strips oxygen away from iron oxide.'
    },
    {
      id: 'cr-19',
      question: 'What is the balanced equation for the catalytic decomposition of hydrogen peroxide?',
      options: [
        '2H2O2 -> 2H2O + O2',
        'H2O2 -> H2 + O2',
        '2H2O2 -> 2H2 + 2O2',
        'H2O2 + O2 -> H2O3'
      ],
      correctIndex: 0,
      explanation: 'Two moles of hydrogen peroxide decompose exothermically into two moles of water and one mole of oxygen gas.',
      hint: 'Known as the "elephant toothpaste" reaction.'
    },
    {
      id: 'cr-20',
      question: 'How many liters of CO2 at STP are produced by complete combustion of 1.0 mole of methane (CH4 + 2O2 -> CO2 + 2H2O)?',
      options: ['22.4 Liters', '44.8 Liters', '11.2 Liters', '2.0 Liters'],
      correctIndex: 0,
      explanation: '1 mole of CH4 yields 1 mole of CO2 gas. At STP, 1 mole of any ideal gas occupies 22.4 Liters.',
      hint: '1 mole of gas at STP occupies 22.4 L.'
    }
  ]
};
