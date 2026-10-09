// src/data/balancingEquationsData.js
// ChemNexus Master Balancing Chemical Equations Guide & Practice Bank
// Covers Law of Conservation of Mass, Inspection (Hit & Trial) Method, Algebraic Method, and worked examples with step-by-step atom balancing tables.

export const balancingPrinciples = {
  law: {
    title: 'Law of Conservation of Mass',
    hindiTitle: 'द्रव्यमान संरक्षण का नियम',
    en: 'Matter can neither be created nor destroyed in a chemical reaction. The total mass of reactants must equal the total mass of products, which means the total number of atoms of each element must remain constant before and after the reaction.',
    hi: 'किसी भी रासायनिक अभिक्रिया में द्रव्यमान का न तो निर्माण होता है और न ही विनाश। रासायनिक अभिक्रिया के पहले (अभिकारक) एवं उसके पश्चात (उत्पाद) प्रत्येक तत्व के परमाणुओं की संख्या सदैव समान रहनी चाहिए।'
  },
  rules: [
    {
      step: 1,
      title: 'Write Unbalanced Skeleton Equation',
      hindiTitle: 'कंकाली (असंतुलित) समीकरण लिखें',
      en: 'Identify reactants and products correctly with chemical formulas and physical states (s, l, g, aq).',
      hi: 'अभिकारकों और उत्पादों के सही रासायनिक सूत्र और भौतिक अवस्थाएँ (s, l, g, aq) लिखें।'
    },
    {
      step: 2,
      title: 'Count Atoms on Both Sides',
      hindiTitle: 'दोनों पक्षों में परमाणुओं की संख्या गिनें',
      en: 'List each element and count its atom tally in the reactants (LHS) vs products (RHS).',
      hi: 'प्रत्येक तत्व के परमाणुओं की संख्या अभिकारक (बाएं पक्ष) और उत्पाद (दाएं पक्ष) में सूचीबद्ध करें।'
    },
    {
      step: 3,
      title: 'Balance Metals and Complex Elements First',
      hindiTitle: 'सर्वप्रथम धातुओं और जटिल तत्वों को संतुलित करें',
      en: 'Balance elements appearing in the fewest compounds first. Leave Hydrogen and Oxygen for last.',
      hi: 'उन तत्वों को पहले संतुलित करें जो कम यौगिकों में उपस्थित हैं। हाइड्रोजन और ऑक्सीजन को अंत में संतुलित करें।'
    },
    {
      step: 4,
      title: 'Adjust Stoichiometric Coefficients ONLY',
      hindiTitle: 'केवल रससमीकरणमितीय गुणांक (Coefficients) बदलें',
      en: 'NEVER modify subscripts in chemical formulas (e.g., change 2H2O, never H2O2). Chemical identity must remain unchanged.',
      hi: 'रासायनिक सूत्रों के पादांक (Subscripts) को कभी न बदलें (उदा. 2H₂O लिखें, H₂O₂ कभी नहीं)।'
    },
    {
      step: 5,
      title: 'Verify Atom Balance and Simplify',
      hindiTitle: 'पुनः जांच करें और न्यूनतम पूर्णांक अनुपात प्राप्त करें',
      en: 'Verify the count for every element. Ensure all coefficients are in their lowest whole-number ratio.',
      hi: 'प्रत्येक तत्व के परमाणुओं की अंतिम जांच करें और सुनिश्चित करें कि गुणांक न्यूनतम पूर्णांक अनुपात में हैं।'
    }
  ]
};

export const workedBalancingExamples = [
  {
    id: 'balance-01',
    title: 'Combustion of Propane (LPG)',
    hindiTitle: 'प्रोपेन (घरेलू गैस) का दहन',
    unbalanced: 'C3H8 + O2 -> CO2 + H2O',
    balanced: 'C3H8 + 5O2 -> 3CO2 + 4H2O',
    type: 'Combustion',
    steps: [
      {
        stepNum: 1,
        action: 'Balance Carbon atoms: 3 C on LHS in C3H8, so place coefficient 3 before CO2.',
        hindiAction: 'कार्बन संतुलित करें: बाईं ओर 3 C हैं, अतः CO₂ के आगे 3 गुणांक लगाएं: C3H8 + O2 -> 3CO2 + H2O',
        table: [
          { element: 'C', lhs: 3, rhs: 3, status: 'Balanced' },
          { element: 'H', lhs: 8, rhs: 2, status: 'Unbalanced' },
          { element: 'O', lhs: 2, rhs: 7, status: 'Unbalanced' }
        ]
      },
      {
        stepNum: 2,
        action: 'Balance Hydrogen atoms: 8 H on LHS in C3H8, so place coefficient 4 before H2O (4 x 2 = 8).',
        hindiAction: 'हाइड्रोजन संतुलित करें: बाईं ओर 8 H हैं, अतः H₂O के आगे 4 लगाएं (4 × 2 = 8): C3H8 + O2 -> 3CO2 + 4H2O',
        table: [
          { element: 'C', lhs: 3, rhs: 3, status: 'Balanced' },
          { element: 'H', lhs: 8, rhs: 8, status: 'Balanced' },
          { element: 'O', lhs: 2, rhs: 10, status: 'Unbalanced' }
        ]
      },
      {
        stepNum: 3,
        action: 'Balance Oxygen atoms: RHS has (3 x 2) + (4 x 1) = 10 O atoms. Place coefficient 5 before O2 (5 x 2 = 10).',
        hindiAction: 'ऑक्सीजन संतुलित करें: दाईं ओर (3 × 2) + (4 × 1) = 10 O हैं। O₂ के आगे 5 लगाएं: C3H8 + 5O2 -> 3CO2 + 4H2O',
        table: [
          { element: 'C', lhs: 3, rhs: 3, status: 'Balanced' },
          { element: 'H', lhs: 8, rhs: 8, status: 'Balanced' },
          { element: 'O', lhs: 10, rhs: 10, status: 'Balanced' }
        ]
      }
    ],
    explanation: 'Propane burns completely in 5 molar equivalents of oxygen gas producing 3 moles of carbon dioxide and 4 moles of water vapor.',
    hindiExplanation: 'प्रोपेन 5 मोल ऑक्सीजन के साथ पूर्णतः जलकर 3 मोल कार्बन डाइऑक्साइड और 4 मोल जलवाष्प उत्पन्न करता है।'
  },
  {
    id: 'balance-02',
    title: 'Thermite Reaction (Aluminothermic Welding)',
    hindiTitle: 'थर्मिट अभिक्रिया (रेलवे पटरी वेल्डिंग)',
    unbalanced: 'Al + Fe2O3 -> Al2O3 + Fe',
    balanced: '2Al + Fe2O3 -> Al2O3 + 2Fe',
    type: 'Single Displacement / Redox',
    steps: [
      {
        stepNum: 1,
        action: 'Balance Iron (Fe): Fe2O3 on LHS has 2 Fe atoms, so place 2 before Fe on RHS.',
        hindiAction: 'आयरन (Fe) संतुलित करें: बाईं ओर Fe₂O₃ में 2 Fe हैं, अतः दाईं ओर Fe के आगे 2 लगाएं: Al + Fe2O3 -> Al2O3 + 2Fe',
        table: [
          { element: 'Al', lhs: 1, rhs: 2, status: 'Unbalanced' },
          { element: 'Fe', lhs: 2, rhs: 2, status: 'Balanced' },
          { element: 'O', lhs: 3, rhs: 3, status: 'Balanced' }
        ]
      },
      {
        stepNum: 2,
        action: 'Balance Aluminium (Al): Al2O3 on RHS has 2 Al atoms, so place 2 before Al on LHS.',
        hindiAction: 'एल्युमिनियम (Al) संतुलित करें: दाईं ओर 2 Al हैं, अतः बाईं ओर Al के आगे 2 लगाएं: 2Al + Fe2O3 -> Al2O3 + 2Fe',
        table: [
          { element: 'Al', lhs: 2, rhs: 2, status: 'Balanced' },
          { element: 'Fe', lhs: 2, rhs: 2, status: 'Balanced' },
          { element: 'O', lhs: 3, rhs: 3, status: 'Balanced' }
        ]
      }
    ],
    explanation: 'Aluminium reduces iron(III) oxide to molten metallic iron, releasing intense heat (over 2500°C).',
    hindiExplanation: 'एल्युमिनियम फेरिक ऑक्साइड को पिघले हुए लोहे में अपचयित करता है, जिससे 2500°C से अधिक ऊष्मा निकलती है।'
  },
  {
    id: 'balance-03',
    title: 'Rusting of Iron (Formation of Ferric Oxide)',
    hindiTitle: 'लोहे पर जंग लगना',
    unbalanced: 'Fe + O2 -> Fe2O3',
    balanced: '4Fe + 3O2 -> 2Fe2O3',
    type: 'Redox / Synthesis',
    steps: [
      {
        stepNum: 1,
        action: 'Notice odd-even issue for Oxygen: O2 has 2 atoms, Fe2O3 has 3 atoms. Find LCM of 2 and 3 = 6. Place 2 before Fe2O3 and 3 before O2.',
        hindiAction: 'ऑक्सीजन का विषम-सम अनुपात: O₂ में 2 और Fe₂O₃ में 3 हैं। 2 और 3 का ल.स. (LCM) 6 है। Fe₂O₃ के आगे 2 और O₂ के आगे 3 लगाएं: Fe + 3O2 -> 2Fe2O3',
        table: [
          { element: 'Fe', lhs: 1, rhs: 4, status: 'Unbalanced' },
          { element: 'O', lhs: 6, rhs: 6, status: 'Balanced' }
        ]
      },
      {
        stepNum: 2,
        action: 'Balance Iron: RHS now has 2 x 2 = 4 Fe atoms. Place coefficient 4 before Fe on LHS.',
        hindiAction: 'आयरन संतुलित करें: दाईं ओर 2 × 2 = 4 Fe हैं। बाईं ओर Fe के आगे 4 लगाएं: 4Fe + 3O2 -> 2Fe2O3',
        table: [
          { element: 'Fe', lhs: 4, rhs: 4, status: 'Balanced' },
          { element: 'O', lhs: 6, rhs: 6, status: 'Balanced' }
        ]
      }
    ],
    explanation: 'Four atoms of solid iron react with three molecules of oxygen gas to synthesize two units of iron(III) oxide.',
    hindiExplanation: 'लोहे के 4 परमाणु ऑक्सीजन के 3 अणुओं से क्रिया करके फेरिक ऑक्साइड के 2 सूत्र इकाई बनाते हैं।'
  },
  {
    id: 'balance-04',
    title: 'Reaction of Iron with Steam',
    hindiTitle: 'लोहे की भाप से अभिक्रिया',
    unbalanced: 'Fe + H2O -> Fe3O4 + H2',
    balanced: '3Fe + 4H2O -> Fe3O4 + 4H2',
    type: 'Redox / Displacement',
    steps: [
      {
        stepNum: 1,
        action: 'Balance Iron: Fe3O4 on RHS has 3 Fe atoms. Place 3 before Fe on LHS: 3Fe + H2O -> Fe3O4 + H2.',
        hindiAction: 'आयरन संतुलित करें: दाईं ओर Fe₃O₄ में 3 Fe हैं। बाईं ओर Fe के आगे 3 लगाएं।',
        table: [{ element: 'Fe', lhs: 3, rhs: 3, status: 'Balanced' }]
      },
      {
        stepNum: 2,
        action: 'Balance Oxygen: Fe3O4 has 4 O atoms. Place 4 before H2O on LHS: 3Fe + 4H2O -> Fe3O4 + H2.',
        hindiAction: 'ऑक्सीजन संतुलित करें: दाईं ओर 4 O हैं। H₂O के आगे 4 लगाएं।',
        table: [{ element: 'O', lhs: 4, rhs: 4, status: 'Balanced' }]
      },
      {
        stepNum: 3,
        action: 'Balance Hydrogen: LHS has 4 x 2 = 8 H atoms. Place 4 before H2 on RHS: 3Fe + 4H2O -> Fe3O4 + 4H2.',
        hindiAction: 'हाइड्रोजन संतुलित करें: बाईं ओर 8 H हैं। H₂ के आगे 4 लगाएं: 3Fe + 4H2O -> Fe3O4 + 4H2',
        table: [
          { element: 'Fe', lhs: 3, rhs: 3, status: 'Balanced' },
          { element: 'H', lhs: 8, rhs: 8, status: 'Balanced' },
          { element: 'O', lhs: 4, rhs: 4, status: 'Balanced' }
        ]
      }
    ],
    explanation: 'Red-hot iron reacts with water steam to form mixed ferroso-ferric oxide (Fe3O4, magnetite) and releases hydrogen gas.',
    hindiExplanation: 'रक्त तप्त लोहा भाप के साथ क्रिया कर फेरोसो-फेरिक ऑक्साइड (Fe₃O₄, मैग्नेटाइट) और हाइड्रोजन गैस बनाता है।'
  }
];

export const practiceEquations = [
  {
    id: 'pr-1',
    unbalanced: 'N2 + H2 -> NH3',
    balanced: 'N2 + 3H2 -> 2NH3',
    title: 'Haber Process Synthesis',
    hindiTitle: 'हैबर प्रक्रम अमोनिया निर्माण',
    hint: 'Balance Nitrogen first by placing 2 before NH3, then balance Hydrogen with 3 before H2.'
  },
  {
    id: 'pr-2',
    unbalanced: 'KClO3 -> KCl + O2',
    balanced: '2KClO3 -> 2KCl + 3O2',
    title: 'Decomposition of Potassium Chlorate',
    hindiTitle: 'पोटैशियम क्लोरेट का तापीय अपघटन',
    hint: 'Oxygen odd-even balance: LCM of 3 and 2 is 6. Place 2 before KClO3 and 3 before O2.'
  },
  {
    id: 'pr-3',
    unbalanced: 'Pb(NO3)2 -> PbO + NO2 + O2',
    balanced: '2Pb(NO3)2 -> 2PbO + 4NO2 + O2',
    title: 'Thermal Decomposition of Lead Nitrate',
    hindiTitle: 'लेड नाइट्रेट का अपघटन',
    hint: 'Nitrate decomposition produces brown fumes of NO2. Multiply lead nitrate by 2 to balance odd oxygens.'
  },
  {
    id: 'pr-4',
    unbalanced: 'NaOH + H2SO4 -> Na2SO4 + H2O',
    balanced: '2NaOH + H2SO4 -> Na2SO4 + 2H2O',
    title: 'Acid-Base Neutralization',
    hindiTitle: 'अम्ल-क्षार उदासीनीकरण',
    hint: 'Balance sodium with 2 before NaOH, then adjust water coefficient to 2.'
  },
  {
    id: 'pr-5',
    unbalanced: 'C6H12O6 + O2 -> CO2 + H2O',
    balanced: 'C6H12O6 + 6O2 -> 6CO2 + 6H2O',
    title: 'Cellular Aerobic Respiration',
    hindiTitle: 'कोशिकीय श्वसन (ग्लूकोज ऑक्सीकरण)',
    hint: 'Balance Carbon (6 CO2) and Hydrogen (6 H2O) first, then balance oxygen.'
  }
];

export default balancingPrinciples;

