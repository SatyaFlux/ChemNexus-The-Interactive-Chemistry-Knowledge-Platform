// src/data/chemicalFormulasData.js
// ChemNexus Comprehensive Chemical Formulas & Nomenclature Directory
// Essential compounds, formulas, IUPAC names, common names, molar masses, and valency rules.

export const formulaRules = {
  crissCross: {
    title: 'Criss-Cross Valency Rule',
    hindiTitle: 'कैंची नियम (Criss-Cross Rule)',
    en: 'Write the symbols of positive cation and negative anion side by side with their respective valencies or charges above them. Criss-cross the numerical charges to become subscripts of the opposing ion. Reduce to the lowest whole-number ratio.',
    hi: 'धनायन और ऋणायन के प्रतीकों को उनकी संयोजकता (आवेश) के साथ पास-पास लिखें। आवेशों के अंकों को तिरछा (कैंची की तरह) करके विपरीत आयन के पादांक (subscript) में लिखें और न्यूनतम पूर्णांक अनुपात में सरल करें।'
  },
  ionTypes: [
    {
      type: 'Monatomic Cations',
      hindiType: 'एकपरमाण्विक धनायन',
      examples: 'Na⁺ (Sodium), K⁺ (Potassium), Ca²⁺ (Calcium), Mg²⁺ (Magnesium), Al³⁺ (Aluminium)'
    },
    {
      type: 'Polyatomic Anions',
      hindiType: 'बहुपरमाण्विक ऋणायन',
      examples: 'SO₄²⁻ (Sulfate), NO₃⁻ (Nitrate), CO₃²⁻ (Carbonate), PO₄³⁻ (Phosphate), OH⁻ (Hydroxide)'
    },
    {
      type: 'Variable Valency Transition Cations',
      hindiType: 'परिवर्ती संयोजकता वाले संक्रमण धनायन',
      examples: 'Fe²⁺ (Iron(II) / Ferrous), Fe³⁺ (Iron(III) / Ferric), Cu⁺ (Copper(I) / Cuprous), Cu²⁺ (Copper(II) / Cupric)'
    }
  ]
};

export const chemicalCompoundsList = [
  {
    formula: 'H2O',
    name: 'Water',
    iupacName: 'Oxidane / Hydrogen oxide',
    hindiName: 'जल (पानी)',
    commonName: 'Universal Solvent',
    hindiCommonName: 'सार्वत्रिक विलायक',
    category: 'Covalent Compound',
    molarMass: '18.015 g/mol',
    elements: ['H', 'O'],
    uses: 'Essential for all known forms of life; universal laboratory and industrial solvent.'
  },
  {
    formula: 'CO2',
    name: 'Carbon Dioxide',
    iupacName: 'Carbon dioxide',
    hindiName: 'कार्बन डाइऑक्साइड',
    commonName: 'Dry Ice (solid form)',
    hindiCommonName: 'शुष्क बर्फ (ठोस अवस्था)',
    category: 'Covalent Compound',
    molarMass: '44.01 g/mol',
    elements: ['C', 'O'],
    uses: 'Photosynthesis substrate, fire extinguishers, carbonated beverages, greenhouse gas.'
  },
  {
    formula: 'NaCl',
    name: 'Sodium Chloride',
    iupacName: 'Sodium chloride',
    hindiName: 'सोडियम क्लोराइड',
    commonName: 'Table Salt / Rock Salt',
    hindiCommonName: 'साधारण नमक',
    category: 'Ionic Compound',
    molarMass: '58.44 g/mol',
    elements: ['Na', 'Cl'],
    uses: 'Dietary seasoning, chlorine-alkali chloralkali industry precursor, de-icing roads.'
  },
  {
    formula: 'H2SO4',
    name: 'Sulfuric Acid',
    iupacName: 'Sulfuric acid',
    hindiName: 'सल्फ्यूरिक अम्ल',
    commonName: 'Oil of Vitriol / King of Chemicals',
    hindiCommonName: 'गंधक का अम्ल / रसायनों का राजा',
    category: 'Mineral Acid',
    molarMass: '98.079 g/mol',
    elements: ['H', 'S', 'O'],
    uses: 'Fertilizer manufacturing (superphosphate), petroleum refining, lead-acid car batteries.'
  },
  {
    formula: 'HCl',
    name: 'Hydrochloric Acid',
    iupacName: 'Hydrochloric acid / Hydrogen chloride',
    hindiName: 'हाइड्रोक्लोरिक अम्ल',
    commonName: 'Muriatic Acid',
    hindiCommonName: 'नमक का तेजाब',
    category: 'Mineral Acid',
    molarMass: '36.46 g/mol',
    elements: ['H', 'Cl'],
    uses: 'Steel pickling, stomach digestion, PVC plastic precursors, pH control in pools.'
  },
  {
    formula: 'HNO3',
    name: 'Nitric Acid',
    iupacName: 'Nitric acid',
    hindiName: 'नाइट्रिक अम्ल',
    commonName: 'Aqua Fortis',
    hindiCommonName: 'शोरे का तेजाब',
    category: 'Mineral Acid',
    molarMass: '63.01 g/mol',
    elements: ['H', 'N', 'O'],
    uses: 'Ammonium nitrate fertilizers, explosives (TNT, nitroglycerin), aqua regia solvent for gold.'
  },
  {
    formula: 'NaOH',
    name: 'Sodium Hydroxide',
    iupacName: 'Sodium hydroxide',
    hindiName: 'सोडियम हाइड्रॉक्साइड',
    commonName: 'Caustic Soda / Lye',
    hindiCommonName: 'कास्टिक सोडा',
    category: 'Strong Base',
    molarMass: '39.997 g/mol',
    elements: ['Na', 'O', 'H'],
    uses: 'Soap and detergent manufacture (saponification), paper pulping, drain cleaners.'
  },
  {
    formula: 'CaCO3',
    name: 'Calcium Carbonate',
    iupacName: 'Calcium carbonate',
    hindiName: 'कैल्शियम कार्बोनेट',
    commonName: 'Limestone / Marble / Chalk',
    hindiCommonName: 'चूना पत्थर / संगमरमर / खड़िया',
    category: 'Ionic Salt',
    molarMass: '100.086 g/mol',
    elements: ['Ca', 'C', 'O'],
    uses: 'Portland cement manufacturing, antacid tablets, eggshell constituent, paper filler.'
  },
  {
    formula: 'CaO',
    name: 'Calcium Oxide',
    iupacName: 'Calcium oxide',
    hindiName: 'कैल्शियम ऑक्साइड',
    commonName: 'Quicklime / Burnt Lime',
    hindiCommonName: 'बिना बुझा चूना',
    category: 'Basic Oxide',
    molarMass: '56.077 g/mol',
    elements: ['Ca', 'O'],
    uses: 'Steelmaking flux, slaked lime production, glass manufacture, acidic soil neutralization.'
  },
  {
    formula: 'Ca(OH)2',
    name: 'Calcium Hydroxide',
    iupacName: 'Calcium dihydroxide',
    hindiName: 'कैल्शियम हाइड्रॉक्साइड',
    commonName: 'Slaked Lime / Milk of Lime',
    hindiCommonName: 'बुझा हुआ चूना',
    category: 'Base',
    molarMass: '74.093 g/mol',
    elements: ['Ca', 'O', 'H'],
    uses: 'Whitewashing walls, mortar preparation, wastewater treatment, acidic soil remediation.'
  },
  {
    formula: 'NaHCO3',
    name: 'Sodium Bicarbonate',
    iupacName: 'Sodium hydrogen carbonate',
    hindiName: 'सोडियम हाइड्रोजन कार्बोनेट',
    commonName: 'Baking Soda',
    hindiCommonName: 'खाने का सोडा / बेकिंग सोडा',
    category: 'Acidic Salt',
    molarMass: '84.007 g/mol',
    elements: ['Na', 'H', 'C', 'O'],
    uses: 'Culinary baking leavening agent, antacids for heartburn, soda-acid fire extinguishers.'
  },
  {
    formula: 'Na2CO3.10H2O',
    name: 'Sodium Carbonate Decahydrate',
    iupacName: 'Sodium carbonate decahydrate',
    hindiName: 'सोडियम कार्बोनेट डेकाहाइड्रेट',
    commonName: 'Washing Soda',
    hindiCommonName: 'धोने का सोडा',
    category: 'Hydrated Salt',
    molarMass: '286.14 g/mol',
    elements: ['Na', 'C', 'O', 'H'],
    uses: 'Permanent water hardness removal, glass and soap manufacturing, laundry detergents.'
  },
  {
    formula: 'CaOCl2',
    name: 'Calcium Hypochlorite / Oxychloride',
    iupacName: 'Calcium chloride hypochlorite',
    hindiName: 'कैल्शियम ऑक्सीक्लोराइड',
    commonName: 'Bleaching Powder',
    hindiCommonName: 'विरंजक चूर्ण (ब्लीचिंग पाउडर)',
    category: 'Disinfectant Salt',
    molarMass: '126.98 g/mol',
    elements: ['Ca', 'O', 'Cl'],
    uses: 'Drinking water sterilization, textile cotton and linen bleaching, chemical warfare neutralizer.'
  },
  {
    formula: 'CaSO4.0.5H2O',
    name: 'Calcium Sulfate Hemihydrate',
    iupacName: 'Calcium sulfate hemihydrate',
    hindiName: 'कैल्शियम सल्फेट हेमीहाइड्रेट',
    commonName: 'Plaster of Paris (POP)',
    hindiCommonName: 'प्लास्टर ऑफ पेरिस',
    category: 'Hydrated Salt',
    molarMass: '145.15 g/mol',
    elements: ['Ca', 'S', 'O', 'H'],
    uses: 'Orthopedic fracture bone casts, dental impressions, ceiling decorations, decorative statues.'
  },
  {
    formula: 'CaSO4.2H2O',
    name: 'Calcium Sulfate Dihydrate',
    iupacName: 'Calcium sulfate dihydrate',
    hindiName: 'कैल्शियम सल्फेट डाइहाइड्रेट',
    commonName: 'Gypsum',
    hindiCommonName: 'जिप्सम',
    category: 'Hydrated Salt',
    molarMass: '172.17 g/mol',
    elements: ['Ca', 'S', 'O', 'H'],
    uses: 'Slows the setting time of Portland cement, drywall boards, soil conditioning.'
  },
  {
    formula: 'CH4',
    name: 'Methane',
    iupacName: 'Methane',
    hindiName: 'मीथेन',
    commonName: 'Marsh Gas / Natural Gas',
    hindiCommonName: 'मार्श गैस / प्राकृतिक गैस',
    category: 'Hydrocarbon (Alkane)',
    molarMass: '16.04 g/mol',
    elements: ['C', 'H'],
    uses: 'Clean fuel in CNG vehicles and domestic heating, steam reforming hydrogen feedstock.'
  },
  {
    formula: 'NH3',
    name: 'Ammonia',
    iupacName: 'Azane / Ammonia',
    hindiName: 'अमोनिया',
    commonName: 'Spirits of Hartshorn',
    hindiCommonName: 'अमोनिया गैस',
    category: 'Inorganic Base',
    molarMass: '17.031 g/mol',
    elements: ['N', 'H'],
    uses: 'Nitrogenous fertilizers (urea, ammonium nitrate), industrial refrigeration, nitric acid synthesis.'
  },
  {
    formula: 'CH3COOH',
    name: 'Acetic Acid',
    iupacName: 'Ethanoic acid',
    hindiName: 'एसिटिक अम्ल (एथेनोइक अम्ल)',
    commonName: 'Vinegar (5-8% solution) / Glacial Acetic Acid',
    hindiCommonName: 'सिरका (5-8% जलीय विलयन)',
    category: 'Carboxylic Acid',
    molarMass: '60.052 g/mol',
    elements: ['C', 'H', 'O'],
    uses: 'Food preservation, pickling, cellulose acetate synthetic fibers, ester fragrances.'
  },
  {
    formula: 'C2H5OH',
    name: 'Ethanol',
    iupacName: 'Ethanol',
    hindiName: 'एथेनॉल (एथिल एल्कोहॉल)',
    commonName: 'Grain Alcohol / Ethyl Alcohol',
    hindiCommonName: 'शराब / स्पिरिट',
    category: 'Alcohol',
    molarMass: '46.07 g/mol',
    elements: ['C', 'H', 'O'],
    uses: 'Biofuel additive (E20 petrol blend), hand sanitizers, laboratory solvent, pharmaceuticals.'
  },
  {
    formula: 'C6H12O6',
    name: 'Glucose',
    iupacName: '(2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanal',
    hindiName: 'ग्लूकोज (द्राक्षा शर्करा)',
    commonName: 'Blood Sugar / Dextrose',
    hindiCommonName: 'रक्त शर्करा',
    category: 'Carbohydrate (Monosaccharide)',
    molarMass: '180.156 g/mol',
    elements: ['C', 'H', 'O'],
    uses: 'Primary cellular energy substrate in biology, IV medical rehydration drips.'
  },
  {
    formula: 'KMnO4',
    name: 'Potassium Permanganate',
    iupacName: 'Potassium manganate(VII)',
    hindiName: 'पोटैशियम परमैंगनेट',
    commonName: 'Condy\'s Crystals / Red Medicine',
    hindiCommonName: 'लाल दवा',
    category: 'Strong Oxidizing Agent',
    molarMass: '158.034 g/mol',
    elements: ['K', 'Mn', 'O'],
    uses: 'Powerful redox titrant, drinking well water disinfectant, Baeyer reagent for unsaturation.'
  },
  {
    formula: 'CuSO4.5H2O',
    name: 'Copper(II) Sulfate Pentahydrate',
    iupacName: 'Copper(II) sulfate pentahydrate',
    hindiName: 'कॉपर सल्फेट पेंटाहाइड्रेट',
    commonName: 'Blue Vitriol',
    hindiCommonName: 'नीला थोथा',
    category: 'Hydrated Salt',
    molarMass: '249.685 g/mol',
    elements: ['Cu', 'S', 'O', 'H'],
    uses: 'Bordeaux mixture agricultural fungicide, copper electroplating, Fehling solution reagent.'
  },
  {
    formula: 'FeSO4.7H2O',
    name: 'Iron(II) Sulfate Heptahydrate',
    iupacName: 'Iron(II) sulfate heptahydrate',
    hindiName: 'फेरस सल्फेट हेप्टाहाइड्रेट',
    commonName: 'Green Vitriol',
    hindiCommonName: 'हरा कसीस',
    category: 'Hydrated Salt',
    molarMass: '278.01 g/mol',
    elements: ['Fe', 'S', 'O', 'H'],
    uses: 'Treatment of iron-deficiency anemia, ink manufacturing, wastewater coagulant.'
  }
];

export default chemicalCompoundsList;

