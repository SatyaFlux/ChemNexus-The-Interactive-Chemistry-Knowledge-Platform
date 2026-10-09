// src/data/reactionsEnrichment.js
// ChemNexus Reaction Enrichment: Authentic Hindi titles, scientific Hindi explanations, step-by-step balancing, practical applications, and safety notes.

export const reactionsHindiMap = {
  'rx-01': {
    slug: 'water-synthesis-hydrogen-combustion',
    hindiTitle: 'जल निर्माण / हाइड्रोजन दहन अभिक्रिया',
    hindiType: 'दहन एवं संयोजन अभिक्रिया',
    hindiConditions: 'चिंगारी या ज्वाला द्वारा सक्रियण; तीव्र ऊष्माक्षेपी (ΔH = -572 kJ/mol)',
    hindiExplanation: 'एक मूलभूत ऊष्माक्षेपी रेडॉक्स अभिक्रिया जिसमें हाइड्रोजन गैस ऑक्सीजन द्वारा ऑक्सीकृत होकर प्रचुर ऊष्मा ऊर्जा और जल बनाती है। यह तरल प्रणोदक रॉकेट इंजनों और स्वच्छ ईंधन सेलों में प्रयुक्त होती है।',
    stepByStep: [
      'Stage 1: H-H covalent bonds (436 kJ/mol) and O=O double bonds (498 kJ/mol) are broken by activation spark energy.',
      'Stage 2: Highly reactive free radicals (H• and OH•) participate in rapid chain propagation.',
      'Stage 3: Extremely stable O-H single bonds (464 kJ/mol each) form, releasing -572 kJ of enthalpy per 2 moles of liquid water produced.'
    ],
    hindiStepByStep: [
      'चरण 1: सक्रियण ऊर्जा द्वारा H-H एकल बंध और O=O द्विबंध टूटते हैं।',
      'चरण 2: अत्यधिक क्रियाशील मुक्त मूलक (H• एवं OH•) तीव्र शृंखला प्रसार करते हैं।',
      'चरण 3: स्थिर O-H बंधों के निर्माण से प्रति 2 मोल जल पर -572 kJ ऊष्मा उत्सर्जित होती है।'
    ],
    practicalExamples: [
      'Space Shuttle and modern rocket cryogenic propulsion (LH2/LOX engines)',
      'Hydrogen fuel cell zero-emission electric vehicles (FCEVs)',
      'Oxyhydrogen torch welding producing temperatures up to 2800°C'
    ],
    hindiPracticalExamples: [
      'क्रायोजेनिक रॉकेट इंजन (तरल हाइड्रोजन और ऑक्सीजन)',
      'शून्य-उत्सर्जन हाइड्रोजन ईंधन सेल इलेक्ट्रिक वाहन',
      'ऑक्सी-हाइड्रोजन वेल्डिंग टॉर्च (2800°C तापमान)'
    ],
    safety: 'Stoichiometric 2:1 H2:O2 gas mixtures (Knallgas) detonate violently. Hydrogen is odorless and burns with an almost invisible pale blue flame.'
  },
  'rx-02': {
    slug: 'haber-bosch-ammonia-synthesis',
    hindiTitle: 'हैबर-बॉश अमोनिया संश्लेषण',
    hindiType: 'संयोजन / उत्प्रेरकीय साम्यावस्था',
    hindiConditions: '400-450°C तापमान, 150-200 atm उच्च दाब, K2O संवर्धित बारीक Fe उत्प्रेरक',
    hindiExplanation: 'अत्यधिक स्थिर नाइट्रोजन त्रिक-बंध (N≡N) को तोड़कर अमोनिया का उत्पादन करने वाला ऐतिहासिक प्रक्रम। यह आधुनिक कृषि उर्वरकों का आधार है और विश्व की लगभग आधी आबादी का भरण-पोषण करता है।',
    stepByStep: [
      'Stage 1: Dissociative chemisorption of N2 and H2 on active iron catalyst crystal surfaces.',
      'Stage 2: Stepwise surface hydrogenation: N(ads) + H(ads) -> NH -> NH2 -> NH3(ads).',
      'Stage 3: Desorption of ammonia gas (NH3) from the catalyst surface into refrigeration condensers.'
    ],
    hindiStepByStep: [
      'चरण 1: लोहे के उत्प्रेरक की सतह पर N₂ और H₂ का रासायनिक अधिशोषण।',
      'चरण 2: उत्प्रेरक की सतह पर क्रमिक हाइड्रोजनीकरण: N + H → NH → NH₂ → NH₃।',
      'चरण 3: अमोनिया गैस का उत्प्रेरक की सतह से विशोषण और द्रवीकरण।'
    ],
    practicalExamples: [
      'Production of synthetic nitrogen fertilizers (Urea, Ammonium Nitrate)',
      'Precursor for manufacturing nitric acid and nylon plastics',
      'Industrial refrigeration systems'
    ],
    hindiPracticalExamples: [
      'यूरिया और अमोनियम नाइट्रेट रासायनिक उर्वरकों का निर्माण',
      'नायलॉन पॉलिमर और नाइट्रिक अम्ल के लिए कच्चा माल',
      'औद्योगिक प्रशीतन प्रणालियाँ'
    ],
    safety: 'Ammonia is a toxic, pungent respiratory irritant. High pressures (200 atm) pose rupture and explosive hazards.'
  },
  'rx-03': {
    slug: 'thermite-reaction-aluminothermic-reduction',
    hindiTitle: 'थर्मिट अभिक्रिया (ऐलुमिनोथर्मिक अपचयन)',
    hindiType: 'एकल विस्थापन / रेडॉक्स',
    hindiConditions: 'मैग्नीशियम रिबन से प्रज्वलन; 2500°C से अधिक ऊष्मा उत्पन्न',
    hindiExplanation: 'एल्युमिनियम की ऑक्सीजन के प्रति उच्च बंधुता लोहे के जंग को तीव्र ऊष्माक्षेपी अभिक्रिया द्वारा पिघले हुए शुद्ध लोहे में बदल देती है। इसका उपयोग रेलवे पटरियों की ऑन-साइट वेल्डिंग में होता है।',
    stepByStep: [
      'Stage 1: Ignition ribbon provides localized activation threshold exceeding 1200°C.',
      'Stage 2: Aluminium atoms reduce Fe³⁺ ions: 2Al + Fe2O3 -> Al2O3 + 2Fe.',
      'Stage 3: Extreme reaction temperature (>2500°C) produces liquid molten iron and buoyant aluminium oxide slag.'
    ],
    hindiStepByStep: [
      'चरण 1: मैग्नीशियम रिबन द्वारा 1200°C से अधिक प्रारंभिक सक्रियण ताप प्रदान किया जाता है।',
      'चरण 2: एल्युमिनियम परमाणु Fe³⁺ आयनों को अपचयित करते हैं।',
      'चरण 3: 2500°C से अधिक तापमान पर पिघला हुआ शुद्ध लोहा और एल्युमिना स्लैग प्राप्त होता है।'
    ],
    practicalExamples: [
      'Continuous railway track welding without heavy electrical generators',
      'Underwater field repairs of heavy steel machinery',
      'Incendiary demolition devices'
    ],
    hindiPracticalExamples: [
      'रेलवे पटरियों की मजबूत वेल्डिंग',
      'भारी इस्पात मशीनरी की मरम्मत',
      'उच्च-ताप विध्वंस उपकरण'
    ],
    safety: 'Once ignited, cannot be extinguished with water; steam explosion hazard.'
  },
  'rx-04': {
    slug: 'cellular-aerobic-respiration-glucose-oxidation',
    hindiTitle: 'कोशिकीय वायवीय श्वसन / ग्लूकोज ऑक्सीकरण',
    hindiType: 'ऑक्सीकरण / जैव-रासायनिक दहन',
    hindiConditions: 'माइटोकॉन्ड्रिया में एंजाइम-उत्प्रेरित (ग्लाइकोलिसिस, क्रेब्स चक्र, ETS)',
    hindiExplanation: 'प्राथमिक जैविक चयापचय प्रक्रिया जो ग्लूकोज और ऑक्सीजन को कोशिकीय ऊर्जा मुद्रा (ATP) में परिवर्तित करती है, तथा सह-उत्पाद के रूप में कार्बन डाइऑक्साइड और जल मुक्त करती है।',
    stepByStep: [
      'Stage 1: Glycolysis in cytoplasm splits glucose into pyruvate, yielding 2 ATP and 2 NADH.',
      'Stage 2: Citric Acid (Krebs) cycle inside mitochondrial matrix oxidizes acetyl-CoA.',
      'Stage 3: Oxidative phosphorylation along inner membrane electron transport chain yields 30-32 ATP.'
    ],
    hindiStepByStep: [
      'चरण 1: कोशिकाद्रव्य में ग्लाइकोलिसिस द्वारा ग्लूकोज का पायरुवेट में विखंडन।',
      'चरण 2: माइटोकॉन्ड्रिया के मैट्रिक्स में क्रेब्स चक्र द्वारा एसिटिल-CoA का ऑक्सीकरण।',
      'चरण 3: आंतरिक झिल्ली पर इलेक्ट्रॉन परिवहन शृंखला द्वारा 30-32 ATP ऊर्जा का निर्माण।'
    ],
    practicalExamples: [
      'Cellular energy generation in all aerobic living organisms',
      'Biological basis for human metabolic calorimetry',
      'Bioreactor cell culturing for biopharmaceuticals'
    ],
    hindiPracticalExamples: [
      'सभी वायवीय जीवों में कोशिकीय ऊर्जा उत्पादन',
      'मानव चयापचय कैलोरीमिति का आधार',
      'जैव-दवाओं के लिए बायो-रिएक्टर सेल कल्चर'
    ],
    safety: 'Strictly tightly regulated inside biological cells; uncoupling agents cause lethal hyperthermia.'
  },
  'rx-05': {
    slug: 'limestone-calcination-thermal-decomposition',
    hindiTitle: 'चूना पत्थर का निस्तापन / ऊष्मीय अपघटन',
    hindiType: 'अपघटन / ऊष्माशोषी',
    hindiConditions: 'चूना भट्टी में 840°C से ऊपर गर्म करना',
    hindiExplanation: 'ऊष्मा द्वारा कैल्शियम कार्बोनेट से कार्बन डाइऑक्साइड गैस को निष्कासित कर बिना बुझा चूना (CaO) प्राप्त किया जाता है, जो इस्पात और पोर्टलैंड सीमेंट निर्माण का मुख्य घटक है।',
    stepByStep: [
      'Stage 1: High thermal energy overcomes electrostatic lattice energy of crystalline CaCO3.',
      'Stage 2: Carbonate ion breaks down into oxide (O²⁻) and gaseous carbon dioxide (CO2).',
      'Stage 3: Porous solid quicklime (CaO) remains as continuous CO2 gas is vented.'
    ],
    hindiStepByStep: [
      'चरण 1: उच्च तापीय ऊर्जा CaCO₃ के क्रिस्टल जालक बंधों को तोड़ती है।',
      'चरण 2: कार्बोनेट आयन ऑक्साइड (O²⁻) और गैसीय कार्बन डाइऑक्साइड में टूटता है।',
      'चरण 3: छिद्रयुक्त ठोस बिना बुझा चूना (CaO) प्राप्त होता है।'
    ],
    practicalExamples: [
      'Portland cement clinker production',
      'Basic oxygen steelmaking flux to remove silicon impurities',
      'Flue-gas desulfurization in thermal coal power plants'
    ],
    hindiPracticalExamples: [
      'पोर्टलैंड सीमेंट का निर्माण',
      'इस्पात निर्माण में अशुद्धियों को हटाने वाला फ्लक्स',
      'थर्मल पावर प्लांटों में सल्फर डाइऑक्साइड का अवशोषण'
    ],
    safety: 'Quicklime reacts violently with water/sweat (exothermic hydration) causing severe chemical thermal skin and eye burns.'
  },
  'rx-06': {
    slug: 'contact-process-sulfuric-acid-catalytic-oxidation',
    hindiTitle: 'सम्पर्क प्रक्रम: सल्फर डाइऑक्साइड का उत्प्रेरकीय ऑक्सीकरण',
    hindiType: 'उत्प्रेरकीय ऑक्सीकरण / साम्यावस्था',
    hindiConditions: '450°C, 1-2 atm, V2O5 (वैनेडियम पेंटॉक्साइड) उत्प्रेरक',
    hindiExplanation: 'वैश्विक सल्फ्यूरिक अम्ल उत्पादन का दर-निर्धारक महत्वपूर्ण चरण। SO3 को आगे सांद्र H2SO4 में अवशोषित कर ओलियम (H2S2O7) बनाया जाता है।',
    stepByStep: [
      'Stage 1: Sulfur dioxide and oxygen pass over beds of porous V2O5 catalyst.',
      'Stage 2: V2O5 is temporarily reduced to V(IV) while oxidizing SO2 to SO3, then regenerated by O2.',
      'Stage 3: Equilibrium shifts right at moderate temperatures (450°C) according to Le Chatelier principle.'
    ],
    hindiStepByStep: [
      'चरण 1: SO₂ और O₂ को V₂O₅ उत्प्रेरक की परतों से गुजारा जाता है।',
      'चरण 2: V₂O₅ मध्यवर्ती रूप से SO₂ को SO₃ में ऑक्सीकृत करता है और O₂ द्वारा पुनर्जीवित होता है।',
      'चरण 3: ला-शातेलिए के नियमानुसार 450°C पर साम्यावस्था उत्पाद की ओर विस्थापित होती है।'
    ],
    practicalExamples: [
      'Manufacture of sulfuric acid (the world’s most produced chemical commodity)',
      'Phosphate fertilizer production',
      'Rayon synthetic fiber and titanium dioxide pigment manufacturing'
    ],
    hindiPracticalExamples: [
      'सल्फ्यूरिक अम्ल का वृहद औद्योगिक उत्पादन',
      'फॉस्फेट उर्वरकों का निर्माण',
      'रेयॉन कृत्रिम रेशे और पेंट निर्माण'
    ],
    safety: 'SO3 is an aggressive corrosive dehydrating agent that forms toxic choking acid mists.'
  },
  'rx-07': {
    slug: 'classic-acid-base-neutralization',
    hindiTitle: 'अम्ल-क्षार उदासीनीकरण अभिक्रिया',
    hindiType: 'द्विविस्थापन / उदासीनीकरण',
    hindiConditions: 'कमरे के तापमान पर जलीय विलयन; ऊष्माक्षेपी (ΔH = -57.3 kJ/mol)',
    hindiExplanation: 'हाइड्रोक्लोरिक अम्ल के हाइड्रोनियम आयन (H3O+) सोडियम हाइड्रॉक्साइड के हाइड्रॉक्साइड आयनों (OH-) के साथ क्रिया करके जल और अहानिकर साधारण नमक (NaCl) बनाते हैं।',
    stepByStep: [
      'Stage 1: Complete dissociation in water: HCl -> H⁺ + Cl⁻ and NaOH -> Na⁺ + OH⁻.',
      'Stage 2: Proton transfer: H⁺(aq) + OH⁻(aq) -> H2O(l).',
      'Stage 3: Spectator ions (Na⁺ and Cl⁻) remain solvated, forming neutral aqueous NaCl solution (pH 7.0).'
    ],
    hindiStepByStep: [
      'चरण 1: जल में पूर्ण वियोजन: HCl → H⁺ + Cl⁻ एवं NaOH → Na⁺ + OH⁻।',
      'चरण 2: प्रोटॉन स्थानांतरण: H⁺ + OH⁻ → H₂O।',
      'चरण 3: दर्शक आयन (Na⁺ और Cl⁻) जलयोजित रहते हैं, जिससे उदासीन लवण विलयन प्राप्त होता है।'
    ],
    practicalExamples: [
      'Laboratory volumetric acid-base titrations',
      'Neutralization of acidic industrial wastewater before environmental discharge',
      'Antacid treatment for medical gastric hyperacidity'
    ],
    hindiPracticalExamples: [
      'प्रयोगशाला में अनुमापन (टाइट्रेशन)',
      'अम्लीय औद्योगिक अपशिष्ट जल का उपचार',
      'पेट की अम्लता का औषधीय उपचार'
    ],
    safety: 'Concentrated acids and bases cause severe chemical burns; mixing concentrated solutions generates boiling splatters.'
  }
};

export function getEnrichedReaction(rx) {
  const extra = reactionsHindiMap[rx.id] || {};
  const baseSlug = rx.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return {
    ...rx,
    slug: extra.slug || baseSlug,
    hindiTitle: extra.hindiTitle || rx.title,
    hindiType: extra.hindiType || rx.type,
    hindiConditions: extra.hindiConditions || rx.conditions,
    hindiExplanation: extra.hindiExplanation || rx.explanation,
    stepByStep: extra.stepByStep || [
      `Reactants (${rx.reactants.join(', ')}) collide under activation conditions.`,
      `Chemical bonds break and rearrange according to stoichiometric proportions.`,
      `Products (${rx.products.join(', ')}) are generated in accordance with the Law of Conservation of Mass.`
    ],
    hindiStepByStep: extra.hindiStepByStep || [
      `अभिकारक (${rx.reactants.join(', ')}) सक्रियण परिस्थितियों में परस्पर संघट्ट करते हैं।`,
      `रासायनिक बंध टूटते हैं और रससमीकरणमितीय अनुपात के अनुसार नए उत्पाद बनते हैं।`,
      `उत्पाद (${rx.products.join(', ')}) द्रव्यमान संरक्षण के नियम के अनुसार प्राप्त होते हैं।`
    ],
    practicalExamples: extra.practicalExamples || [
      'Industrial chemical manufacturing',
      'Laboratory synthesis and qualitative testing',
      'Energy generation and chemical engineering'
    ],
    hindiPracticalExamples: extra.hindiPracticalExamples || [
      'औद्योगिक रासायनिक निर्माण',
      'प्रयोगशाला संश्लेषण एवं परीक्षण',
      'ऊर्जा उत्पादन एवं इंजीनियरिंग'
    ],
    safety: extra.safety || rx.notes || 'Handle in well-ventilated laboratory with standard PPE.'
  };
}

export default reactionsHindiMap;

