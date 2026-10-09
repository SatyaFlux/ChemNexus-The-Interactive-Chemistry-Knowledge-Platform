// src/data/reactionTypesData.js
// ChemNexus Comprehensive Guide to Reaction Types
// Authoritative definitions, formulas, bilingual explanations, verified equations, and educational FAQs.

export const reactionTypesData = [
  {
    id: 'combination',
    slug: 'combination',
    title: 'Combination Reactions (Synthesis)',
    hindiTitle: 'संयोजन अभिक्रिया (Synthesis Reaction)',
    generalFormula: 'A + B → AB',
    summary: 'A combination reaction (also called a synthesis reaction) occurs when two or more simple reactants combine chemically to form a single, more complex product.',
    hindiSummary: 'संयोजन अभिक्रिया वह रासायनिक अभिक्रिया है जिसमें दो या दो से अधिक सरल पदार्थ (तत्व या यौगिक) परस्पर संयोग करके केवल एक नया एकल उत्पाद बनाते हैं।',
    mechanism: 'Combination reactions are typically exothermic because new chemical bonds are formed, releasing bond formation enthalpy. They can occur between two elements (e.g., metal + nonmetal), an element and a compound, or two compounds.',
    hindiMechanism: 'संयोजन अभिक्रियाएँ प्रायः ऊष्माक्षेपी (exothermic) होती हैं क्योंकि नए रासायनिक बंधों के निर्माण से ऊर्जा मुक्त होती है। यह दो तत्वों के बीच, एक तत्व और यौगिक के बीच, अथवा दो यौगिकों के बीच हो सकती है।',
    keyCharacteristics: [
      'Single product formed on the right side of the equation',
      'Typically exothermic (releases heat energy, ΔH < 0)',
      'Bond formation predominates over bond cleavage'
    ],
    hindiKeyCharacteristics: [
      'समीकरण के दाईं ओर केवल एक एकल उत्पाद बनता है',
      'प्रायः ऊष्माक्षेपी होती हैं (ऊष्मा ऊर्जा उत्सर्जित होती है)',
      'बंध निर्माण प्रक्रिया बंध विखंडन पर हावी रहती है'
    ],
    examples: [
      {
        equation: '2H2(g) + O2(g) -> 2H2O(l)',
        title: 'Water Synthesis',
        hindiTitle: 'जल का निर्माण',
        notes: 'Hydrogen and oxygen combine explosively in a 2:1 molar ratio releasing -572 kJ/mol.',
        hindiNotes: 'हाइड्रोजन और ऑक्सीजन 2:1 के मोलर अनुपात में क्रिया करके जल बनाते हैं।'
      },
      {
        equation: 'CaO(s) + H2O(l) -> Ca(OH)2(aq)',
        title: 'Slaking of Quicklime',
        hindiTitle: 'बिना बुझे चूने का बुझना',
        notes: 'Highly exothermic reaction producing slaked lime (calcium hydroxide) used in whitewashing.',
        hindiNotes: 'बिना बुझा चूना (CaO) जल से क्रिया कर बुझा हुआ चूना (Ca(OH)₂) बनाता है, अत्यधिक ऊष्मा उत्पन्न होती है।'
      },
      {
        equation: '2Mg(s) + O2(g) -> 2MgO(s)',
        title: 'Burning of Magnesium Ribbon',
        hindiTitle: 'मैग्नीशियम रिबन का दहन',
        notes: 'Magnesium burns with a dazzling white flame to form white magnesium oxide powder.',
        hindiNotes: 'मैग्नीशियम चमकदार श्वेत लौ के साथ जलकर मैग्नीशियम ऑक्साइड का सफेद चूर्ण बनाता है।'
      },
      {
        equation: 'N2(g) + 3H2(g) <-> 2NH3(g)',
        title: 'Haber-Bosch Ammonia Synthesis',
        hindiTitle: 'हैबर प्रक्रम द्वारा अमोनिया संश्लेषण',
        notes: 'Catalyzed by iron with potassium oxide promoter at 450°C and 200 atm.',
        hindiNotes: 'लोहा उत्प्रेरक की उपस्थिति में उच्च दाब और ताप पर नाइट्रोजन और हाइड्रोजन से अमोनिया का निर्माण।'
      }
    ],
    faqs: [
      {
        q: 'What is the main condition for a reaction to be classified as a combination reaction?',
        hiQ: 'संयोजन अभिक्रिया की पहचान की मुख्य शर्त क्या है?',
        a: 'The defining characteristic is that two or more reactants yield exactly ONE product (A + B -> AB).',
        hiA: 'इसकी मुख्य शर्त यह है कि दो या दो से अधिक अभिकारक परस्पर मिलकर केवल एक एकल उत्पाद (A + B -> AB) बनाते हैं।'
      },
      {
        q: 'Why are most combination reactions exothermic?',
        hiQ: 'अधिकांश संयोजन अभिक्रियाएँ ऊष्माक्षेपी क्यों होती हैं?',
        a: 'Because the energy released during the formation of new chemical bonds is greater than the energy required to break the initial bonds.',
        hiA: 'क्योंकि नए रासायनिक बंधों के निर्माण में मुक्त होने वाली ऊर्जा अभिकारकों के पुराने बंधों को तोड़ने में प्रयुक्त ऊर्जा से अधिक होती है।'
      }
    ]
  },
  {
    id: 'decomposition',
    slug: 'decomposition',
    title: 'Decomposition Reactions',
    hindiTitle: 'अपघटन / वियोजन अभिक्रिया (Decomposition Reaction)',
    generalFormula: 'AB → A + B',
    summary: 'A decomposition reaction occurs when a single complex compound breaks down into two or more simpler chemical substances under the influence of heat, light, or electricity.',
    hindiSummary: 'अपघटन (वियोजन) अभिक्रिया वह रासायनिक अभिक्रिया है जिसमें एक एकल जटिल यौगिक ऊष्मा, प्रकाश अथवा विद्युत ऊर्जा के प्रभाव में दो या दो से अधिक सरल पदार्थों में टूट जाता है।',
    mechanism: 'Decomposition is the inverse of combination. Because chemical bonds must be cleaved, almost all decomposition reactions are endothermic (requiring continuous energy input: thermal, electrolytic, or photochemical).',
    hindiMechanism: 'अपघटन अभिक्रिया संयोजन की विपरीत होती है। चूंकि इसमें रासायनिक बंधों को तोड़ना पड़ता है, इसलिए लगभग सभी अपघटन अभिक्रियाएँ ऊष्माशोषी (endothermic) होती हैं।',
    keyCharacteristics: [
      'Single reactant on the left side of the equation',
      'Typically endothermic (absorbs energy: ΔH > 0)',
      'Categorized by energy source: Thermal, Electrolytic, or Photochemical'
    ],
    hindiKeyCharacteristics: [
      'समीकरण के बाईं ओर केवल एक एकल अभिकारक होता है',
      'प्रायः ऊष्माशोषी होती हैं (ऊर्जा का अवशोषण होता है)',
      'ऊर्जा स्रोत के आधार पर तीन प्रकार: ऊष्मीय, विद्युत और प्रकाशीय अपघटन'
    ],
    examples: [
      {
        equation: 'CaCO3(s) -> CaO(s) + CO2(g)',
        title: 'Thermal Decomposition of Limestone',
        hindiTitle: 'चूना पत्थर का ऊष्मीय अपघटन',
        notes: 'Limestone heated above 840°C decomposes into quicklime (CaO) and carbon dioxide.',
        hindiNotes: 'चूना पत्थर (CaCO₃) को 840°C से ऊपर गर्म करने पर यह बिना बुझा चूना (CaO) और CO₂ में अपघटित हो जाता है।'
      },
      {
        equation: '2H2O(l) -> 2H2(g) + O2(g)',
        title: 'Electrolysis of Water',
        hindiTitle: 'जल का विद्युत अपघटन',
        notes: 'Electric current passed through acidified water yields hydrogen at cathode and oxygen at anode in 2:1 volume ratio.',
        hindiNotes: 'अम्लीकृत जल में विद्युत धारा प्रवाहित करने पर कैथोड पर H₂ और एनोड पर O₂ गैस 2:1 आयतन में प्राप्त होती है।'
      },
      {
        equation: '2AgCl(s) -> 2Ag(s) + Cl2(g)',
        title: 'Photochemical Decomposition of Silver Chloride',
        hindiTitle: 'सिल्वर क्लोराइड का प्रकाशीय अपघटन',
        notes: 'White silver chloride turns grey in sunlight due to photochemical decomposition into metallic silver.',
        hindiNotes: 'सूर्य के प्रकाश में सफेद सिल्वर क्लोराइड अपघटित होकर धूसर रंग के धात्विक सिल्वर में बदल जाता है।'
      },
      {
        equation: '2Pb(NO3)2(s) -> 2PbO(s) + 4NO2(g) + O2(g)',
        title: 'Thermal Decomposition of Lead Nitrate',
        hindiTitle: 'लेड नाइट्रेट का ऊष्मीय अपघटन',
        notes: 'Heating lead nitrate produces yellow lead monoxide and brown nitrogen dioxide fumes.',
        hindiNotes: 'लेड नाइट्रेट को गर्म करने पर पीले रंग का लेड ऑक्साइड और भूरे रंग की नाइट्रोजन डाइऑक्साइड गैस निकलती है।'
      }
    ],
    faqs: [
      {
        q: 'What are the three main types of decomposition reactions?',
        hiQ: 'अपघटन अभिक्रिया के तीन मुख्य प्रकार कौन से हैं?',
        a: '1. Thermal decomposition (heat), 2. Electrolytic decomposition (electric current), 3. Photolytic decomposition (sunlight/UV light).',
        hiA: '1. ऊष्मीय अपघटन (ऊष्मा द्वारा), 2. विद्युत अपघटन (विद्युत धारा द्वारा), 3. प्रकाशीय अपघटन (सूर्य के प्रकाश द्वारा)।'
      }
    ]
  },
  {
    id: 'displacement',
    slug: 'displacement',
    title: 'Single Displacement Reactions',
    hindiTitle: 'विस्थापन अभिक्रिया (Single Displacement Reaction)',
    generalFormula: 'A + BC → AC + B',
    summary: 'A single displacement (or single replacement) reaction occurs when a more chemically reactive element replaces a less reactive element from its aqueous salt solution.',
    hindiSummary: 'विस्थापन अभिक्रिया वह रासायनिक अभिक्रिया है जिसमें अधिक क्रियाशील तत्व किसी कम क्रियाशील तत्व को उसके यौगिक (जलीय लवण विलयन) से विस्थापित (हटा) देता है।',
    mechanism: 'Governed by the electrochemical Reactivity Series (Activity Series). A metal higher in the reactivity series readily loses electrons (is oxidized) and forces ions of a less reactive metal to accept electrons (be reduced).',
    hindiMechanism: 'यह अभिक्रिया धातुओं की सक्रियता श्रेणी (Reactivity Series) द्वारा नियंत्रित होती है। सक्रियता श्रेणी में ऊपर स्थित धातु आसानी से इलेक्ट्रॉन त्यागती है और नीचे स्थित धातु आयन को विस्थापित करती है।',
    keyCharacteristics: [
      'Involves an uncombined element and a compound',
      'Determined strictly by standard electrode potentials / reactivity series',
      'Fundamental redox process involving simultaneous oxidation and reduction'
    ],
    hindiKeyCharacteristics: [
      'एक स्वतंत्र तत्व और एक यौगिक के बीच संपन्न होती है',
      'पूर्णतः मानक इलेक्ट्रोड विभव और सक्रियता श्रेणी पर निर्भर करती है',
      'यह एक प्रत्यक्ष रेडॉक्स प्रक्रम है जिसमें इलेक्ट्रॉन विनिमय होता है'
    ],
    examples: [
      {
        equation: 'Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s)',
        title: 'Iron Displacing Copper from Blue Vitriol',
        hindiTitle: 'आयरन द्वारा कॉपर सल्फेट से कॉपर का विस्थापन',
        notes: 'Iron is more reactive than copper; the blue CuSO4 solution turns pale green FeSO4 and reddish-brown copper deposits on the iron nail.',
        hindiNotes: 'आयरन कॉपर से अधिक क्रियाशील है; नीला कॉपर सल्फेट विलयन हल्के हरे फेरस सल्फेट में बदल जाता है और लोहे की कील पर तांबा जम जाता है।'
      },
      {
        equation: 'Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g)',
        title: 'Zinc with Dilute Hydrochloric Acid',
        hindiTitle: 'जिंक की तनु हाइड्रोक्लोरिक अम्ल से अभिक्रिया',
        notes: 'Zinc displaces hydrogen from acids, producing zinc chloride and effervescence of hydrogen gas.',
        hindiNotes: 'जिंक अम्ल से हाइड्रोजन को विस्थापित करता है, जिससे जिंक क्लोराइड और हाइड्रोजन गैस के बुलबुले बनते हैं।'
      },
      {
        equation: 'Cl2(g) + 2KBr(aq) -> 2KCl(aq) + Br2(l)',
        title: 'Halogen Displacement (Chlorine Displacing Bromine)',
        hindiTitle: 'हैलोजन विस्थापन (क्लोरीन द्वारा ब्रोमीन का विस्थापन)',
        notes: 'Chlorine is more electronegative than bromine and oxidizes bromide ions into elemental reddish-brown bromine.',
        hindiNotes: 'क्लोरीन अधिक विद्युतऋणात्मक होने के कारण ब्रोमाइड आयनों को ब्रोमीन में ऑक्सीकृत कर देती है।'
      }
    ],
    faqs: [
      {
        q: 'Why will copper not displace iron from iron sulfate solution?',
        hiQ: 'कॉपर फेरस सल्फेट से आयरन को विस्थापित क्यों नहीं कर सकता?',
        a: 'Because copper is lower than iron in the reactivity series (standard reduction potential E° = +0.34 V vs -0.44 V for Fe), so copper cannot reduce Fe²⁺ ions.',
        hiA: 'क्योंकि कॉपर सक्रियता श्रेणी में आयरन से नीचे स्थित है, अतः कॉपर Fe²⁺ आयनों को अपचयित करने में असमर्थ है।'
      }
    ]
  },
  {
    id: 'double-displacement',
    slug: 'double-displacement',
    title: 'Double Displacement Reactions (Metathesis)',
    hindiTitle: 'द्विविस्थापन अभिक्रिया (Double Displacement Reaction)',
    generalFormula: 'AB + CD → AD + CB',
    summary: 'A double displacement reaction (metathesis) occurs when two ionic compounds in aqueous solution exchange positive and negative ions, forming two new compounds.',
    hindiSummary: 'द्विविस्थापन अभिक्रिया वह रासायनिक अभिक्रिया है जिसमें जलीय विलयन में दो आयनिक यौगिक अपने धनायनों और ऋणायनों का परस्पर आदान-प्रदान (विनिमय) करके दो नए यौगिक बनाते हैं।',
    mechanism: 'Driven by the removal of ions from solution via: 1. Formation of an insoluble precipitate (Precipitation), 2. Formation of a neutral weak electrolyte like water (Neutralization), or 3. Evolution of an insoluble gas.',
    hindiMechanism: 'यह अभिक्रिया जलीय माध्यम से आयनों के हटने द्वारा संचालित होती है: 1. अघुलनशील अवक्षेप का निर्माण, 2. दुर्बल विद्युत-अपघट्य जैसे जल का निर्माण (उदासीनीकरण), या 3. गैस का निकास।',
    keyCharacteristics: [
      'Two ionic compounds react as aqueous solutions',
      'No change in oxidation states of participating ions (non-redox)',
      'Results in a precipitate, water, or an insoluble gas'
    ],
    hindiKeyCharacteristics: [
      'दो आयनिक यौगिक जलीय विलयन के रूप में परस्पर क्रिया करते हैं',
      'आयनों की ऑक्सीकरण संख्या में कोई परिवर्तन नहीं होता (गैर-रेडॉक्स)',
      'परिणामस्वरूप अवक्षेप, जल अथवा अघुलनशील गैस बनती है'
    ],
    examples: [
      {
        equation: 'Na2SO4(aq) + BaCl2(aq) -> BaSO4(s) + 2NaCl(aq)',
        title: 'Precipitation of White Barium Sulfate',
        hindiTitle: 'सफेद बेरियम सल्फेट का अवक्षेपण',
        notes: 'Instant formation of dense white precipitate of barium sulfate insoluble in water and dilute acids.',
        hindiNotes: 'सोडियम सल्फेट और बेरियम क्लोराइड की क्रिया से श्वेत अघुलनशील बेरियम सल्फेट का अवक्षेप बनता है।'
      },
      {
        equation: 'AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)',
        title: 'Silver Chloride Curdy White Precipitation',
        hindiTitle: 'सिल्वर क्लोराइड का दही जैसा श्वेत अवक्षेप',
        notes: 'Classic qualitative test for chloride ions producing curd-like white precipitate soluble in aqueous ammonia.',
        hindiNotes: 'सिल्वर नाइट्रेट में सोडियम क्लोराइड मिलाने पर दही जैसा श्वेत सिल्वर क्लोराइड अवक्षेप प्राप्त होता है।'
      },
      {
        equation: 'Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq)',
        title: 'Bright Yellow Lead Iodide Precipitation',
        hindiTitle: 'चमकीले पीले लेड आयोडाइड का निर्माण',
        notes: 'Mixing colorless solutions produces a brilliant yellow precipitate of lead(II) iodide.',
        hindiNotes: 'रंगहीन विलयनों को मिलाने पर चमकीला पीला लेड आयोडाइड अवक्षेप प्राप्त होता है।'
      }
    ],
    faqs: [
      {
        q: 'How do you know if a double displacement reaction has occurred?',
        hiQ: 'आप कैसे पहचानेंगे कि द्विविस्थापन अभिक्रिया संपन्न हुई है?',
        a: 'Look for one of three signs: an insoluble solid precipitate forms, a gas bubbles out, or temperature changes indicating neutralization.',
        hiA: 'तीन संकेतों में से एक दिखाई देता है: अघुलनशील ठोस अवक्षेप बनता है, गैस के बुलबुले निकलते हैं, या उदासीनीकरण से तापमान बदलता है।'
      }
    ]
  },
  {
    id: 'redox',
    slug: 'redox',
    title: 'Oxidation and Reduction Reactions (Redox)',
    hindiTitle: 'ऑक्सीकरण और अपचयन (रेडॉक्स अभिक्रियाएँ)',
    generalFormula: 'Oxidant + Reductant → Reduced Species + Oxidized Species',
    summary: 'A redox (reduction-oxidation) reaction involves a simultaneous transfer of electrons between chemical species, causing complementary changes in oxidation states.',
    hindiSummary: 'रेडॉक्स (उपचयन-अपचयन) अभिक्रिया वह रासायनिक अभिक्रिया है जिसमें अभिकारकों के बीच इलेक्ट्रॉनों का स्थानांतरण होता है, जिससे एक पदार्थ का ऑक्सीकरण तथा दूसरे का अपचयन एक साथ होता है।',
    mechanism: 'Oxidation is the loss of electrons (increase in oxidation number; OIL - Oxidation Is Loss). Reduction is the gain of electrons (decrease in oxidation number; RIG - Reduction Is Gain). An oxidizing agent accepts electrons and is reduced; a reducing agent donates electrons and is oxidized.',
    hindiMechanism: 'इलेक्ट्रॉन त्यागने की प्रक्रिया को ऑक्सीकरण (उपचयन) कहते हैं (ऑक्सीकरण संख्या में वृद्धि)। इलेक्ट्रॉन ग्रहण करने की प्रक्रिया को अपचयन कहते हैं (ऑक्सीकरण संख्या में कमी)। जो पदार्थ इलेक्ट्रॉन ग्रहण करता है वह ऑक्सीकारक तथा जो त्यागता है वह अपचायक कहलाता है।',
    keyCharacteristics: [
      'Always occurs concurrently: oxidation cannot happen without reduction',
      'Total electrons lost by reducing agent equals total electrons gained by oxidizing agent',
      'Essential to respiration, photosynthesis, batteries, and corrosion'
    ],
    hindiKeyCharacteristics: [
      'हमेशा एक साथ संपन्न होती हैं: बिना अपचयन के ऑक्सीकरण संभव नहीं है',
      'अपचायक द्वारा त्यागे गए कुल इलेक्ट्रॉन = ऑक्सीकारक द्वारा ग्रहण किए गए कुल इलेक्ट्रॉन',
      'श्वसन, प्रकाश संश्लेषण, बैटरियों और धातु संक्षारण (जंग) का आधार'
    ],
    examples: [
      {
        equation: 'CuO(s) + H2(g) -> Cu(s) + H2O(l)',
        title: 'Reduction of Copper(II) Oxide by Hydrogen',
        hindiTitle: 'हाइड्रोजन द्वारा कॉपर ऑक्साइड का अपचयन',
        notes: 'CuO loses oxygen (reduced to Cu); H2 gains oxygen (oxidized to H2O).',
        hindiNotes: 'CuO से ऑक्सीजन हटती है (Cu में अपचयन); H₂ ऑक्सीजन ग्रहण करता है (H₂O में ऑक्सीकरण)।'
      },
      {
        equation: 'Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)',
        title: 'Daniel Cell Redox Reaction',
        hindiTitle: 'डेनियल सेल रेडॉक्स अभिक्रिया',
        notes: 'Zn loses 2 electrons (Zn -> Zn²⁺ + 2e⁻, oxidation); Cu²⁺ gains 2 electrons (reduction).',
        hindiNotes: 'जिंक 2 इलेक्ट्रॉन त्यागता है (ऑक्सीकरण); कॉपर आयन 2 इलेक्ट्रॉन ग्रहण करता है (अपचयन)।'
      },
      {
        equation: '2Fe + 3/2 O2 + xH2O -> Fe2O3.xH2O',
        title: 'Rusting of Iron (Corrosion)',
        hindiTitle: 'लोहे में जंग लगना (संक्षारण)',
        notes: 'Electrochemical oxidation of metallic iron to hydrated iron(III) oxide rust.',
        hindiNotes: 'लोहे का वायुमंडलीय ऑक्सीजन और नमी की उपस्थिति में जलयोजित फेरिक ऑक्साइड में ऑक्सीकरण।'
      }
    ],
    faqs: [
      {
        q: 'What is the mnemonic to remember oxidation and reduction?',
        hiQ: 'ऑक्सीकरण और अपचयन याद रखने की ट्रिक क्या है?',
        a: 'OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain of electrons.',
        hiA: 'OIL RIG ट्रिक: Oxidation Is Loss (इलेक्ट्रॉन त्यागना = ऑक्सीकरण), Reduction Is Gain (इलेक्ट्रॉन पाना = अपचयन)।'
      }
    ]
  },
  {
    id: 'neutralization',
    slug: 'neutralization',
    title: 'Neutralization Reactions (Acid-Base)',
    hindiTitle: 'उदासीनीकरण अभिक्रिया (Neutralization Reaction)',
    generalFormula: 'Acid + Base → Salt + Water',
    summary: 'A neutralization reaction occurs when an acid and a base react stoichiometrically to produce water and an ionic salt, neutralizing the acidity and basicity.',
    hindiSummary: 'उदासीनीकरण अभिक्रिया वह रासायनिक अभिक्रिया है जिसमें अम्ल और क्षार परस्पर निश्चित अनुपात में क्रिया करके लवण और जल बनाते हैं, जिससे दोनों के अम्लीय व क्षारीय गुण समाप्त हो जाते हैं।',
    mechanism: 'In aqueous systems, hydronium/hydrogen ions (H⁺) from the acid combine with hydroxide ions (OH⁻) from the base to form covalent water molecules: H⁺(aq) + OH⁻(aq) → H₂O(l). The enthalpy of neutralization for strong acid-strong base is constant at -57.3 kJ/mol.',
    hindiMechanism: 'जलीय माध्यम में, अम्ल से प्राप्त H⁺ आयन और क्षार से प्राप्त OH⁻ आयन मिलकर सहसंयोजक जल (H₂O) अणु बनाते हैं: H⁺ + OH⁻ → H₂O। प्रबल अम्ल और प्रबल क्षार की उदासीनीकरण ऊष्मा सदैव -57.3 kJ/mol होती है।',
    keyCharacteristics: [
      'Net ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l)',
      'Exothermic reaction releasing neutralization enthalpy',
      'The resulting salt solution can be neutral (pH 7), acidic (pH < 7), or basic (pH > 7) depending on acid/base strength'
    ],
    hindiKeyCharacteristics: [
      'नेट आयनिक समीकरण: H⁺(aq) + OH⁻(aq) → H₂O(l)',
      'ऊष्माक्षेपी अभिक्रिया जिसमें उदासीनीकरण ऊष्मा उत्सर्जित होती है',
      'प्राप्त लवण विलयन प्रबलता के आधार पर उदासीन (pH 7), अम्लीय (pH < 7) या क्षारीय (pH > 7) हो सकता है'
    ],
    examples: [
      {
        equation: 'HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)',
        title: 'Hydrochloric Acid with Sodium Hydroxide',
        hindiTitle: 'हाइड्रोक्लोरिक अम्ल और सोडियम हाइड्रॉक्साइड',
        notes: 'Classic strong acid-strong base neutralization yielding table salt and neutral water.',
        hindiNotes: 'प्रबल अम्ल और प्रबल क्षार की क्रिया से साधारण नमक (NaCl) और जल बनता है; pH = 7।'
      },
      {
        equation: 'H2SO4(aq) + 2KOH(aq) -> K2SO4(aq) + 2H2O(l)',
        title: 'Sulfuric Acid with Potassium Hydroxide',
        hindiTitle: 'सल्फ्यूरिक अम्ल और पोटैशियम हाइड्रॉक्साइड',
        notes: 'Diprotic acid neutralization forming potassium sulfate salt.',
        hindiNotes: 'द्विक्षारकीय सल्फ्यूरिक अम्ल का पोटैशियम हाइड्रॉक्साइड से उदासीनीकरण।'
      },
      {
        equation: 'Mg(OH)2(s) + 2HCl(aq) -> MgCl2(aq) + 2H2O(l)',
        title: 'Antacid Action in Human Stomach',
        hindiTitle: 'आमाशय में एंटासिड (मिल्क ऑफ मैग्नीशिया) की क्रिया',
        notes: 'Milk of magnesia neutralizes excess hydrochloric acid in gastric juice, relieving acidity.',
        hindiNotes: 'मिल्क ऑफ मैग्नीशिया (मैग्नीशियम हाइड्रॉक्साइड) आमाशय के अतिरिक्त HCl अम्ल को उदासीन कर एसिडिटी से राहत देता है।'
      }
    ],
    faqs: [
      {
        q: 'Why does pH become 7 only for strong acid and strong base neutralizations?',
        hiQ: 'केवल प्रबल अम्ल और प्रबल क्षार के उदासीनीकरण पर ही pH 7 क्यों होता है?',
        a: 'Because neither the cation nor the anion hydrolyzes in water. A weak acid-strong base salt hydrolyzes to form basic solution (pH > 7).',
        hiA: 'क्योंकि बनने वाले लवण के आयन जल अपघटित नहीं होते। दुर्बल अम्ल और प्रबल क्षार का लवण क्षारीय विलयन (pH > 7) बनाता है।'
      }
    ]
  },
  {
    id: 'combustion',
    slug: 'combustion',
    title: 'Combustion Reactions',
    hindiTitle: 'दहन अभिक्रिया (Combustion Reaction)',
    generalFormula: 'Fuel + O2 → CO2 + H2O + Heat + Light',
    summary: 'A combustion reaction is a high-temperature exothermic redox chemical reaction between a fuel (usually a hydrocarbon) and an oxidant (typically atmospheric oxygen), producing oxidized products, intense heat, and light.',
    hindiSummary: 'दहन अभिक्रिया एक उच्च-ताप ऊष्माक्षेपी रेडॉक्स अभिक्रिया है जिसमें कोई ईंधन (प्रायः हाइड्रोकार्बन) वायुमंडलीय ऑक्सीजन के साथ तीव्रता से क्रिया करके ऑक्सीकृत उत्पाद (CO₂, H₂O), प्रचुर ऊष्मा और प्रकाश उत्पन्न करता है।',
    mechanism: 'In complete combustion (sufficient O2), all carbon oxidizes to carbon dioxide (CO2). In incomplete combustion (limited O2), toxic carbon monoxide (CO) and carbon soot (C) are produced.',
    hindiMechanism: 'पूर्ण दहन (पर्याप्त ऑक्सीजन) में सारा कार्बन कार्बन डाइऑक्साइड (CO₂) में बदल जाता है। अपूर्ण दहन (सीमित ऑक्सीजन) में अत्यंत विषैली कार्बन मोनोऑक्साइड (CO) और कालिख (सूट) बनती है।',
    keyCharacteristics: [
      'Requires fuel, oxygen, and ignition temperature (Fire Triangle)',
      'Highly exothermic with large negative enthalpy (ΔH < 0)',
      'Primary source of energy for transportation, heating, and power generation'
    ],
    hindiKeyCharacteristics: [
      'ईंधन, ऑक्सीजन और ज्वलन ताप (अग्नि त्रिकोण) की आवश्यकता होती है',
      'अत्यधिक ऊष्माक्षेपी होती है जिसमें उच्च दहन ऊष्मा मुक्त होती है',
      'परिवहन, तापन और विद्युत उत्पादन के लिए वैश्विक ऊर्जा का प्रमुख स्रोत'
    ],
    examples: [
      {
        equation: 'CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g)',
        title: 'Complete Combustion of Methane (Natural Gas)',
        hindiTitle: 'मीथेन (प्राकृतिक गैस) का पूर्ण दहन',
        notes: 'Releases 891 kJ/mol of heat; clean blue flame without soot.',
        hindiNotes: '891 kJ/mol ऊष्मा मुक्त होती है; बिना धुएं वाली स्वच्छ नीली लौ।'
      },
      {
        equation: 'C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(g)',
        title: 'Combustion of Propane (LPG Fuel)',
        hindiTitle: 'प्रोपेन (LPG गैस) का दहन',
        notes: 'Standard reaction in household LPG cylinders and camping stoves.',
        hindiNotes: 'घरेलू रसोई गैस (LPG) में प्रयुक्त प्रोपेन का स्वच्छ दहन।'
      },
      {
        equation: '2C8H18(l) + 25O2(g) -> 16CO2(g) + 18H2O(g)',
        title: 'Combustion of Octane (Gasoline / Petrol Engine)',
        hindiTitle: 'ऑक्टेन (पेट्रोल) का दहन',
        notes: 'Thermodynamic reaction powering internal combustion automobile engines.',
        hindiNotes: 'ऑटोमोबाइल के आंतरिक दहन इंजन को ऊर्जा प्रदान करने वाली रासायनिक क्रिया।'
      }
    ],
    faqs: [
      {
        q: 'What is the danger of incomplete combustion?',
        hiQ: 'अपूर्ण दहन का सबसे बड़ा खतरा क्या है?',
        a: 'Incomplete combustion generates carbon monoxide (CO), an odorless, colorless poisonous gas that binds irreversibly to hemoglobin, causing asphyxiation.',
        hiA: 'अपूर्ण दहन से कार्बन मोनोऑक्साइड (CO) बनती है, जो रक्त के हीमोग्लोबिन से जुड़कर ऑक्सीजन संवहन को रोक देती है और दम घुटने से मृत्यु हो सकती है।'
      }
    ]
  },
  {
    id: 'precipitation',
    slug: 'precipitation',
    title: 'Precipitation Reactions',
    hindiTitle: 'अवक्षेपण अभिक्रिया (Precipitation Reaction)',
    generalFormula: 'A⁺(aq) + B⁻(aq) → AB(s) ↓',
    summary: 'A precipitation reaction is a chemical process occurring in aqueous solution where two soluble ionic salts combine to form an insoluble solid ionic lattice called a precipitate.',
    hindiSummary: 'अवक्षेपण अभिक्रिया वह रासायनिक प्रक्रिया है जिसमें जलीय विलयन में दो घुलनशील लवण परस्पर मिलकर एक अघुलनशील ठोस आयनिक जालक का निर्माण करते हैं, जिसे अवक्षेप (Precipitate) कहते हैं।',
    mechanism: 'Occurs when the ionic product (Qsp) of dissolved ions exceeds the solubility product constant (Ksp) of the salt in water at that temperature.',
    hindiMechanism: 'यह तब संपन्न होती है जब विलयन में उपस्थित आयनों का आयनिक गुणनफल (Qsp) उस तापमान पर लवण के विलेयता गुणनफल स्थिरांक (Ksp) से अधिक हो जाता है।',
    keyCharacteristics: [
      'Indicated by downward arrow (↓) or state symbol (s)',
      'Governed strictly by solubility rules for ionic compounds',
      'Widely used in water treatment, qualitative chemical analysis, and metallurgy'
    ],
    hindiKeyCharacteristics: [
      'रासायनिक समीकरण में नीचे की ओर तीर (↓) या (s) से दर्शाया जाता है',
      'आयनिक यौगिकों के विलेयता नियमों द्वारा नियंत्रित होती है',
      'जल शोधन, गुणात्मक रासायनिक विश्लेषण और धातुकर्म में व्यापक उपयोग'
    ],
    examples: [
      {
        equation: 'BaCl2(aq) + H2SO4(aq) -> BaSO4(s) + 2HCl(aq)',
        title: 'Barium Sulfate Heavy White Precipitate',
        hindiTitle: 'बेरियम सल्फेट का भारी श्वेत अवक्षेप',
        notes: 'Insoluble in boiling hydrochloric acid; standard test for sulfate ions.',
        hindiNotes: 'उबलते हाइड्रोक्लोरिक अम्ल में भी अघुलनशील; सल्फेट आयनों का प्रामाणिक परीक्षण।'
      },
      {
        equation: 'CuSO4(aq) + 2NaOH(aq) -> Cu(OH)2(s) + Na2SO4(aq)',
        title: 'Pale Blue Copper(II) Hydroxide Precipitation',
        hindiTitle: 'हल्के नीले कॉपर हाइड्रॉक्साइड का अवक्षेप',
        notes: 'Precipitates as gelatinous pale blue solid upon adding base to copper sulfate.',
        hindiNotes: 'कॉपर सल्फेट में क्षार मिलाने पर हल्के नीले रंग का जैल जैसा अवक्षेप बनता है।'
      }
    ],
    faqs: [
      {
        q: 'Which salts are always soluble in water?',
        hiQ: 'कौन से लवण जल में सदैव विलेय होते हैं?',
        a: 'Salts containing alkali metal ions (Li⁺, Na⁺, K⁺, Rb⁺, Cs⁺), ammonium (NH₄⁺), nitrate (NO₃⁻), acetate (CH₃COO⁻), and perchlorate (ClO₄⁻) are always soluble.',
        hiA: 'क्षार धातु आयन (Na⁺, K⁺...), अमोनियम (NH₄⁺), नाइट्रेट (NO₃⁻) और एसीटेट (CH₃COO⁻) वाले सभी लवण जल में सदैव पूर्णतः विलेय होते हैं।'
      }
    ]
  },
  {
    id: 'organic',
    slug: 'organic',
    title: 'Organic Chemistry Reactions',
    hindiTitle: 'कार्बनिक रासायनिक अभिक्रियाएँ (Organic Chemistry Reactions)',
    generalFormula: 'Substrate + Reagent → Intermediate → Functional Product',
    summary: 'Organic reactions involve transformations of carbon-based covalent compounds, characterized by breaking and forming covalent bonds (homolytic or heterolytic) through reactive intermediates such as carbocations, carbanions, or free radicals.',
    hindiSummary: 'कार्बनिक रासायनिक अभिक्रियाएँ कार्बन-आधारित सहसंयोजक यौगिकों के रूपांतरण हैं, जिनमें कार्बोकैटायन, कार्बऋणायन अथवा मुक्त मूलक जैसे मध्यवर्तियों के माध्यम से सहसंयोजक बंध टूटते और नए बनते हैं।',
    mechanism: 'Divided into fundamental pathways: Nucleophilic Substitution (SN1, SN2), Electrophilic Addition, Elimination (E1, E2), Electrophilic Aromatic Substitution, and Condensation.',
    hindiMechanism: 'मुख्य क्रियाविधियाँ: नाभिकरागी प्रतिस्थापन (SN1, SN2), इलेक्ट्रॉनरागी योग, विलोपन (E1, E2), एरोमैटिक इलेक्ट्रॉनरागी प्रतिस्थापन, तथा संघनन अभिक्रियाएँ।',
    keyCharacteristics: [
      'Involve organic functional groups (alkanes, alkenes, alcohols, carboxylic acids)',
      'Stereospecificity and regioselectivity (Markovnikov / Saytzeff rules)',
      'Require organic catalysts, acids, bases, or enzymes'
    ],
    hindiKeyCharacteristics: [
      'क्रियात्मक समूहों (एल्केन, एल्कीन, एल्कोहॉल, कार्बोक्सिलिक अम्ल) से संबंधित',
      'त्रिविम-विशिष्टता और स्थान-चयनात्मकता (मारकोनीकॉफ और सेत्ज़ेफ नियम)',
      'कार्बनिक उत्प्रेरक, अम्ल, क्षार अथवा एंजाइम की आवश्यकता'
    ],
    examples: [
      {
        equation: 'CH3COOH + C2H5OH <-> CH3COOC2H5 + H2O',
        title: 'Fischer Esterification (Fruity Smell)',
        hindiTitle: 'फिशर एस्टरीकरण (मीठी फलों जैसी सुगंध)',
        notes: 'Acetic acid reacts with ethanol in concentrated H2SO4 to form ethyl acetate ester.',
        hindiNotes: 'सांद्र सल्फ्यूरिक अम्ल की उपस्थिति में एसिटिक अम्ल और एथेनॉल की क्रिया से एथिल एसीटेट एस्टर बनता है।'
      },
      {
        equation: 'CH2=CH2 + H2 -> CH3-CH3',
        title: 'Catalytic Hydrogenation of Ethene',
        hindiTitle: 'एथीन का उत्प्रेरकीय हाइड्रोजनीकरण',
        notes: 'Nickel or platinum catalyst converts unsaturated alkene into saturated alkane. Used in vanaspati ghee production.',
        hindiNotes: 'निकल उत्प्रेरक की उपस्थिति में असंतृप्त वनस्पति तेल संतृप्त वनस्पति घी में परिवर्तित होता है।'
      },
      {
        equation: 'C6H6 + HNO3 -> C6H5NO2 + H2O',
        title: 'Nitration of Benzene',
        hindiTitle: 'बेंजीन का नाइट्रीकरण',
        notes: 'Electrophilic aromatic substitution using nitrating mixture (conc. HNO3 + conc. H2SO4) producing nitrobenzene.',
        hindiNotes: 'नाइट्रिक और सल्फ्यूरिक अम्ल के मिश्रण द्वारा बेंजीन वलय में नाइट्रो समूह (-NO₂) का प्रतिस्थापन।'
      }
    ],
    faqs: [
      {
        q: 'What is the difference between SN1 and SN2 mechanisms?',
        hiQ: 'SN1 और SN2 क्रियाविधि में क्या मुख्य अंतर है?',
        a: 'SN1 is a two-step unimolecular process via a carbocation intermediate (favored by tertiary halides), while SN2 is a single-step bimolecular concerted process with backside attack and Walden inversion (favored by primary halides).',
        hiA: 'SN1 दो-चरणीय एकाणुक अभिक्रिया है जो कार्बोकैटायन मध्यवर्ती के माध्यम से होती है (तृतीयक हैलाइड में अनुकूल), जबकि SN2 एक-चरणीय पश्च आक्रमण द्वारा वाल्डन प्रतिलोमन के साथ संपन्न होती है (प्राथमिक हैलाइड में अनुकूल)।'
      }
    ]
  },
  {
    id: 'inorganic',
    slug: 'inorganic',
    title: 'Inorganic Chemistry Reactions',
    hindiTitle: 'अकार्बनिक रासायनिक अभिक्रियाएँ (Inorganic Chemistry Reactions)',
    generalFormula: 'Inorganic Species + Reagents → Heavy Chemical Commodities / Complexes',
    summary: 'Inorganic chemistry reactions encompass transformations of non-carbon elements, minerals, metals, coordination complexes, acids, and atmospheric gases driving modern chemical infrastructure.',
    hindiSummary: 'अकार्बनिक रासायनिक अभिक्रियाओं में कार्बन-रहित तत्वों, खनिजों, धातुओं, उपसहसंयोजन संकुलों, अम्लों और औद्योगिक गैसों के रासायनिक रूपांतरण शामिल हैं, जो आधुनिक औद्योगिक बुनियादी ढांचे को संचालित करते हैं।',
    mechanism: 'Involves high-temperature metallurgical roasting, blast furnace smelting, high-pressure catalytic gas equilibria, and ligand-exchange coordination chemistry.',
    hindiMechanism: 'इसमें उच्च-ताप धातुकर्म भर्जन, वात्या भट्टी प्रगलन, उच्च-दाब उत्प्रेरकीय गैसीय साम्यावस्था, और लिगैंड-विनिमय उपसहसंयोजन रसायन शामिल हैं।',
    keyCharacteristics: [
      'Core foundation of global industrial commodities (fertilizers, steel, cement)',
      'High activation energies requiring specialized heterogeneous catalysts',
      'Governed by Le Chatelier principle and Gibbs free energy'
    ],
    hindiKeyCharacteristics: [
      'वैश्विक औद्योगिक वस्तुओं (उर्वरक, इस्पात, सीमेंट) की आधारशिला',
      'उच्च सक्रियण ऊर्जा जिसे कम करने के लिए विशेष विषमांगी उत्प्रेरक आवश्यक होते हैं',
      'ला-शातेलिए के सिद्धांत और गिब्स मुक्त ऊर्जा द्वारा नियंत्रित'
    ],
    examples: [
      {
        equation: '2SO2(g) + O2(g) <-> 2SO3(g)',
        title: 'Contact Process (Sulfuric Acid Production)',
        hindiTitle: 'सम्पर्क प्रक्रम (सल्फ्यूरिक अम्ल निर्माण)',
        notes: 'Catalyzed by Vanadium(V) oxide (V2O5) at 450°C and 2 atm. Rate-determining step for H2SO4.',
        hindiNotes: '450°C पर V₂O₅ उत्प्रेरक की उपस्थिति में सल्फर डाइऑक्साइड का सल्फर ट्राइऑक्साइड में ऑक्सीकरण।'
      },
      {
        equation: '4NH3(g) + 5O2(g) -> 4NO(g) + 6H2O(g)',
        title: 'Ostwald Process (Nitric Acid Precursor)',
        hindiTitle: 'ओस्टवाल्ड प्रक्रम (नाइट्रिक अम्ल निर्माण)',
        notes: 'Platinum-rhodium gauze catalyst at 800°C oxidizes ammonia to nitric oxide.',
        hindiNotes: '800°C पर प्लैटिनम जाली उत्प्रेरक द्वारा अमोनिया का नाइट्रिक ऑक्साइड में तीव्र ऑक्सीकरण।'
      },
      {
        equation: 'Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g)',
        title: 'Blast Furnace Iron Smelting',
        hindiTitle: 'वात्या भट्टी में लोहे का प्रगलन',
        notes: 'Reduction of hematite ore by carbon monoxide gas in blast furnace producing molten pig iron.',
        hindiNotes: 'वात्या भट्टी में कार्बन मोनोऑक्साइड द्वारा हेमेटाइट अयस्क का अपचयन कर कच्चा लोहा प्राप्त करना।'
      }
    ],
    faqs: [
      {
        q: 'Why is sulfuric acid called the "King of Chemicals"?',
        hiQ: 'सल्फ्यूरिक अम्ल को "रसायनों का राजा" क्यों कहा जाता है?',
        a: 'Because its annual production volume is the largest in the world and directly reflects a nation\'s industrial strength, used in fertilizers, petroleum refining, paints, and metallurgy.',
        hiA: 'क्योंकि इसका वैश्विक उत्पादन सबसे अधिक है और इसका उपभोग किसी राष्ट्र की औद्योगिक प्रगति का सीधा सूचक है। इसका उपयोग उर्वरक, पेट्रोलियम, रंग और धातुकर्म में अनिवार्य है।'
      }
    ]
  }
];

export default reactionTypesData;

