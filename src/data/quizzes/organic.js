// src/data/quizzes/organic.js
// 20 Comprehensive Questions on Organic Chemistry, Functional Groups & Reaction Mechanisms

export const organicQuiz = {
  id: 'organic-chemistry',
  title: 'Organic Chemistry & Reaction Mechanisms',
  description: 'Master functional groups, IUPAC nomenclature, electrophilic additions, nucleophilic substitutions, and aromaticity.',
  category: 'Organic Chemistry',
  difficulty: 'Intermediate',
  estimatedMinutes: 15,
  questions: [
    {
      id: 'oc-1',
      question: 'According to Markovnikov’s rule, in the addition of HX to an unsymmetrical alkene, where does the hydrogen attach?',
      options: [
        'To the carbon with the greatest number of hydrogen atoms already attached',
        'To the carbon with the fewest hydrogen atoms',
        'Equally to both double-bonded carbons',
        'To whichever carbon has a bulkier alkyl substituent'
      ],
      correctIndex: 0,
      explanation: 'Markovnikov’s rule states that the electrophilic proton adds to the carbon with more hydrogens, generating the more stable carbocation intermediate (tertiary > secondary > primary).',
      hint: 'Remember the mnemonic: "The rich get richer" in hydrogen atoms.'
    },
    {
      id: 'oc-2',
      question: 'Which substitution mechanism proceeds through a single concerted transition state with complete inversion of configuration (Walden inversion)?',
      options: [
        'SN2 (Substitution Nucleophilic Bimolecular)',
        'SN1 (Substitution Nucleophilic Unimolecular)',
        'E1 (Elimination Unimolecular)',
        'E2 (Elimination Bimolecular)'
      ],
      correctIndex: 0,
      explanation: 'SN2 involves backside nucleophilic attack with simultaneous departure of the leaving group, causing 100% inversion of stereochemistry.',
      hint: 'Think of an umbrella turning inside out in a gust of wind.'
    },
    {
      id: 'oc-3',
      question: 'According to Hückel’s Rule, a planar monocyclic conjugated ring system is aromatic if it contains how many delocalized pi electrons?',
      options: ['4n + 2 (where n is a non-negative integer)', '4n', '2n + 2', '2n²'],
      correctIndex: 0,
      explanation: 'Hückel’s Rule requires [4n + 2] pi electrons (e.g. 2, 6, 10, 14 electrons). Benzene has 6 pi electrons, corresponding to n = 1.',
      hint: 'Benzene has 6 pi electrons, satisfying 4(1) + 2.'
    },
    {
      id: 'oc-4',
      question: 'What product is formed when a Grignard reagent (R-MgX) reacts with an aliphatic ketone followed by aqueous acid workup?',
      options: [
        'A tertiary alcohol',
        'A primary alcohol',
        'A secondary alcohol',
        'A carboxylic acid'
      ],
      correctIndex: 0,
      explanation: 'Nucleophilic addition of Grignard carbanion (R⁻) to a ketone adds a third alkyl group to the carbonyl carbon, producing a tertiary alcohol upon protonation.',
      hint: 'Ketones already hold two alkyl groups; Grignard adds a third.'
    },
    {
      id: 'oc-5',
      question: 'Why are alpha-hydrogens of carbonyl compounds significantly more acidic than alkane hydrogens?',
      options: [
        'The conjugate base enolate anion is resonance-stabilized onto the electronegative oxygen atom',
        'The carbonyl carbon is electron-donating',
        'Alpha-hydrogens form intramolecular hydrogen bonds',
        'Alpha-carbons have an expanded octet'
      ],
      correctIndex: 0,
      explanation: 'Deprotonation generates an enolate anion where the negative charge is stabilized by resonance delocalization between the carbon and electronegative oxygen atom.',
      hint: 'Draw resonance structures of the resulting enolate intermediate.'
    },
    {
      id: 'oc-6',
      question: 'What functional group is formed by the reaction between a carboxylic acid and an alcohol in the presence of an acid catalyst?',
      options: ['Ester', 'Ether', 'Amide', 'Anhydride'],
      correctIndex: 0,
      explanation: 'Fischer esterification condensates a carboxylic acid and an alcohol under acid catalysis (e.g. H2SO4), eliminating water to form an ester.',
      hint: 'Has the general formula R-COO-R\' and pleasant fruity odors.'
    },
    {
      id: 'oc-7',
      question: 'Which of the following carbocations is the MOST stable?',
      options: [
        'Tertiary carbocation (3°)',
        'Secondary carbocation (2°)',
        'Primary carbocation (1°)',
        'Methyl carbocation (CH3⁺)'
      ],
      correctIndex: 0,
      explanation: 'Tertiary carbocations are stabilized by inductive electron donation from three alkyl groups and hyperconjugation from adjacent C-H sigma bonds.',
      hint: 'Stability increases with the number of attached alkyl groups.'
    },
    {
      id: 'oc-8',
      question: 'What reagent is classically used to distinguish aldehydes from ketones via deposition of a silver mirror on glassware?',
      options: [
        'Tollens’ Reagent ([Ag(NH3)2]⁺ in aqueous base)',
        'Fehling’s Reagent',
        'Lucas Reagent',
        'Benedict’s Reagent'
      ],
      correctIndex: 0,
      explanation: 'Tollens’ reagent oxidizes aldehydes to carboxylates while reducing diamminesilver(I) to elemental metallic silver, forming a specular mirror.',
      hint: 'Also known as the silver mirror test.'
    },
    {
      id: 'oc-9',
      question: 'What is the hybridization of the carbonyl carbon in acetone (propanone)?',
      options: ['sp²', 'sp³', 'sp', 'sp³d'],
      correctIndex: 0,
      explanation: 'The carbonyl carbon has three attached groups (two methyls and one oxygen) in a trigonal planar geometry with ~120° bond angles, hence sp² hybridized.',
      hint: 'Three regions of electron density surround the carbonyl carbon.'
    },
    {
      id: 'oc-10',
      question: 'What is the major product when 2-bromobutane undergoes E2 elimination with a strong unhindered base like sodium ethoxide?',
      options: [
        'trans-2-Butene (Zaitsev product)',
        '1-Butene (Hofmann product)',
        '2-Butanol',
        'Butane'
      ],
      correctIndex: 0,
      explanation: 'Zaitsev’s rule dictates that elimination from 2-bromobutane with an unhindered base yields the more substituted and thermodynamically stable alkene (trans-2-butene).',
      hint: 'Zaitsev’s rule favors the more substituted alkene.'
    },
    {
      id: 'oc-11',
      question: 'Which functional group contains a nitrogen atom single-bonded to three carbon or hydrogen groups (R-NH2, R2NH, R3N)?',
      options: ['Amine', 'Amide', 'Nitrile', 'Nitro'],
      correctIndex: 0,
      explanation: 'Amines are organic derivatives of ammonia (NH3) where one or more hydrogens are replaced by alkyl or aryl groups.',
      hint: 'Unlike amides, amines lack a carbonyl group.'
    },
    {
      id: 'oc-12',
      question: 'Which of the following compounds is a non-superimposable mirror image isomer (enantiomer) of another molecule?',
      options: [
        'A chiral molecule possessing an asymmetric stereocenter',
        'An achiral planar molecule',
        'A meso compound with an internal plane of symmetry',
        'Any constitutional isomer'
      ],
      correctIndex: 0,
      explanation: 'Enantiomers are chiral stereoisomers that are non-superimposable mirror images of each other, rotating plane-polarized light in equal and opposite directions.',
      hint: 'Think of left and right hands.'
    },
    {
      id: 'oc-13',
      question: 'What is the product of the catalytic hydrogenation of vegetable oils (unsaturated fatty acids with double bonds)?',
      options: [
        'Saturated solid fats (e.g. margarine)',
        'Glycerol and soap',
        'Short-chain alkanes',
        'Carboxylic acids'
      ],
      correctIndex: 0,
      explanation: 'Hydrogenation adds H2 across alkene double bonds using nickel or palladium catalysts, converting liquid polyunsaturated oils into solid saturated fats.',
      hint: 'Adds hydrogen across double bonds.'
    },
    {
      id: 'oc-14',
      question: 'What type of reaction converts benzene into nitrobenzene using concentrated HNO3 and concentrated H2SO4?',
      options: [
        'Electrophilic Aromatic Substitution (EAS)',
        'Nucleophilic Aromatic Substitution (NAS)',
        'Free Radical Addition',
        'Electrophilic Addition'
      ],
      correctIndex: 0,
      explanation: 'Sulfuric acid protonates nitric acid to generate the electrophilic nitronium ion (NO2⁺), which attacks the aromatic benzene ring in an Electrophilic Aromatic Substitution.',
      hint: 'The nitronium ion (NO2⁺) acts as the active electrophile.'
    },
    {
      id: 'oc-15',
      question: 'What type of structural isomerism exists between 1-propanol and 2-propanol?',
      options: [
        'Positional isomerism',
        'Chain isomerism',
        'Functional group isomerism',
        'Geometric isomerism'
      ],
      correctIndex: 0,
      explanation: 'Both molecules have the same carbon skeleton (propane) and functional group (alcohol), differing only in the position of the -OH group (C-1 vs C-2).',
      hint: 'Same functional group, different position on the carbon chain.'
    },
    {
      id: 'oc-16',
      question: 'What is the common name of ethyne (C2H2), used in oxy-acetylene welding?',
      options: ['Acetylene', 'Ethylene', 'Propylene', 'Methane'],
      correctIndex: 0,
      explanation: 'Ethyne (H-C≡C-H) is commonly known as acetylene, possessing a triple bond and linear geometry.',
      hint: 'The simplest alkyne hydrocarbon.'
    },
    {
      id: 'oc-17',
      question: 'Which test identifies primary, secondary, and tertiary alcohols based on the rate of alkyl chloride turbidity formation with ZnCl2/HCl?',
      options: ['Lucas Test', 'Biuret Test', 'Ninhydrin Test', 'Beilstein Test'],
      correctIndex: 0,
      explanation: 'The Lucas reagent (anhydrous ZnCl2 in concentrated HCl) reacts via SN1: tertiary alcohols turn cloudy immediately, secondary within 5 minutes, primary not at room temperature.',
      hint: 'Lucas reagent uses anhydrous zinc chloride in concentrated HCl.'
    },
    {
      id: 'oc-18',
      question: 'What is the geometry and bond angle around the carbon atom in formaldehyde (methanal, HCHO)?',
      options: ['Trigonal Planar, ~120°', 'Tetrahedral, 109.5°', 'Linear, 180°', 'Bent, 104.5°'],
      correctIndex: 0,
      explanation: 'The carbonyl carbon has three electron domains (two single bonds to H, one double bond to O), giving a trigonal planar geometry with ~120° angles.',
      hint: 'Three electron regions around the central carbon.'
    },
    {
      id: 'oc-19',
      question: 'Which of the following polymers is formed by condensation polymerization rather than addition polymerization?',
      options: ['Nylon-6,6', 'Polyethylene', 'Polystyrene', 'Polypropylene'],
      correctIndex: 0,
      explanation: 'Nylon-6,6 is synthesized by condensation polymerization of adipic acid and hexamethylenediamine, eliminating water molecules during amide bond formation.',
      hint: 'Formed by reaction between a diacid and a diamine.'
    },
    {
      id: 'oc-20',
      question: 'What is the IUPAC name of the compound CH3-CH2-CHO?',
      options: ['Propanal', 'Propanone', 'Propanoic acid', 'Propanol'],
      correctIndex: 0,
      explanation: 'A three-carbon aliphatic chain with a terminal aldehyde (-CHO) group is named propanal.',
      hint: 'A three-carbon aldehyde.'
    }
  ]
};
