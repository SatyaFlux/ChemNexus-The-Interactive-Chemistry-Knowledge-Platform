// src/data/chemistryNotesData.js
// ChemNexus High-Yield Chemistry Revision Notes & Verified Q&A Bank
// High-impact concepts, chapter-wise summaries, and board/competitive exam questions with detailed bilingual solutions.

export const highYieldNotes = [
  {
    chapterId: 'atomic-structure',
    title: 'Atomic Structure & Quantum Mechanics',
    hindiTitle: 'परमाणु संरचना एवं क्वांटम यांत्रिकी',
    summary: 'Atoms consist of a dense positive nucleus (protons + neutrons) surrounded by quantized electron orbitals defined by four quantum numbers: principal (n), azimuthal (l), magnetic (ml), and spin (ms).',
    hindiSummary: 'परमाणु एक सघन धनावेशित नाभिक (प्रोटॉन + न्यूट्रॉन) और उसके चारों ओर क्वांटीकृत कक्षक इलेक्ट्रॉनों से बना होता है, जिसे चार क्वांटम संख्याओं (n, l, ml, ms) द्वारा परिभाषित किया जाता है।',
    keyPoints: [
      'Bohr Model: Electrons revolve in discrete non-radiating orbits with angular momentum mvr = nh/2π.',
      'de Broglie Wavelength: Matter exhibits dual wave-particle nature: λ = h / (mv).',
      'Heisenberg Uncertainty Principle: It is impossible to simultaneously measure exact position and momentum: Δx · Δp ≥ h / (4π).',
      'Quantum Orbitals: s (spherical, 1 orbital, max 2 e⁻), p (dumbbell, 3 orbitals, max 6 e⁻), d (double dumbbell, 5 orbitals, max 10 e⁻), f (complex, 7 orbitals, max 14 e⁻).'
    ],
    hindiKeyPoints: [
      'बोर मॉडल: इलेक्ट्रॉन केवल निश्चित गैर-विकिरणी कक्षाओं में घूमते हैं जिनका कोणीय संवेग mvr = nh/2π होता है।',
      'डी ब्रोग्ली तरंगदैर्घ्य: द्रव्य में तरंग-कण दोनों प्रकृति होती है: λ = h / (mv)।',
      'हाइजेनबर्ग का अनिश्चितता सिद्धांत: किसी कण की स्थिति और संवेग दोनों को एक साथ यथार्थता से मापना असंभव है: Δx · Δp ≥ h / (4π)।',
      'क्वांटम कक्षक: s (गोलाकार, 2 e⁻), p (डम्बलाकार, 6 e⁻), d (द्वि-डम्बलाकार, 10 e⁻), f (जटिल, 14 e⁻)।'
    ]
  },
  {
    chapterId: 'chemical-bonding',
    title: 'Chemical Bonding & Molecular Structure',
    hindiTitle: 'रासायनिक आबंधन एवं आणविक संरचना',
    summary: 'Atoms bond to achieve stable electronic noble gas octets via ionic electron transfer, covalent electron sharing, or metallic sea-of-electrons bonding.',
    hindiSummary: 'परमाणु अक्रिय गैसों जैसा स्थायी अष्टक प्राप्त करने के लिए परस्पर बंध बनाते हैं: आयनिक (इलेक्ट्रॉन स्थानांतरण), सहसंयोजक (इलेक्ट्रॉन साझेदारी), अथवा धात्विक बंध।',
    keyPoints: [
      'Ionic Bond: Electrostatic attraction between opposite ions (e.g. NaCl, MgO); high melting point, conducts in molten/solution state.',
      'Covalent Bond: Sharing of electron pairs (e.g. H2O, CH4); directional bonds, molecular geometry predicted by VSEPR theory.',
      'Hydrogen Bonding: Dipole-dipole attraction when H is bonded to high electronegativity atoms (F, O, N); explains unusually high boiling point of water.',
      'Hybridization: Mixing of atomic orbitals: sp (linear, 180°), sp² (trigonal planar, 120°), sp³ (tetrahedral, 109.5°).'
    ],
    hindiKeyPoints: [
      'आयनिक बंध: विपरीत आवेशित आयनों के बीच स्थिर वैद्युत आकर्षण (उदा. NaCl); उच्च गलनांक, गलित अवस्था में विद्युत चालक।',
      'सहसंयोजक बंध: इलेक्ट्रॉन युग्मों की साझेदारी (उदा. H₂O, CH₄); VSEPR सिद्धांत द्वारा ज्यामिति का निर्धारण।',
      'हाइड्रोजन आबंधन: जब हाइड्रोजन अत्यधिक विद्युतऋणात्मक परमाणु (F, O, N) से जुड़ा हो; जल के उच्च क्वथनांक का कारण।',
      'संकरण (Hybridization): परमाणु कक्षकों का संमिश्रण: sp (रेखीय, 180°), sp² (त्रिकोणीय, 120°), sp³ (चतुष्फलकीय, 109.5°)।'
    ]
  },
  {
    chapterId: 'chemical-thermodynamics',
    title: 'Thermodynamics & Chemical Energetics',
    hindiTitle: 'ऊष्मागतिकी एवं रासायनिक ऊर्जा विज्ञान',
    summary: 'Thermodynamics governs heat and energy transfers in chemical systems. Gibbs Free Energy (ΔG = ΔH - TΔS) determines spontaneity: spontaneous when ΔG < 0.',
    hindiSummary: 'ऊष्मागतिकी रासायनिक प्रक्रियाओं में ऊर्जा और ऊष्मा के आदान-प्रदान का अध्ययन है। गिब्स मुक्त ऊर्जा (ΔG = ΔH - TΔS) अभिक्रिया की स्वतःस्फूर्तता निर्धारित करती है: ΔG < 0 होने पर अभिक्रिया स्वतः होती है।',
    keyPoints: [
      'First Law: Total energy of an isolated system is conserved: ΔU = q + w.',
      'Enthalpy (ΔH): Heat exchanged at constant pressure; ΔH < 0 is exothermic, ΔH > 0 is endothermic.',
      'Entropy (ΔS): Measure of system randomness or disorder; Second Law states universe entropy always increases.',
      'Hess’s Law: Total enthalpy change of a reaction is constant regardless of whether it occurs in one step or several steps.'
    ],
    hindiKeyPoints: [
      'प्रथम नियम: विलगित निकाय की कुल ऊर्जा स्थिर रहती है: ΔU = q + w।',
      'एन्थैल्पी (ΔH): स्थिर दाब पर ऊष्मा परिवर्तन; ΔH < 0 ऊष्माक्षेपी, ΔH > 0 ऊष्माशोषी।',
      'एन्ट्रॉपी (ΔS): अव्यवस्था या यादृच्छिकता का माप; ब्रह्मांड की कुल एन्ट्रॉपी निरंतर बढ़ रही है।',
      'हेस का नियम: किसी रासायनिक अभिक्रिया का कुल एन्थैल्पी परिवर्तन समान रहता है चाहे वह एक चरण में हो या अनेक चरणों में।'
    ]
  },
  {
    chapterId: 'acids-bases-salts',
    title: 'Acids, Bases, pH & Buffer Solutions',
    hindiTitle: 'अम्ल, क्षार, लवण एवं pH पैमाना',
    summary: 'Acids generate H⁺/H₃O⁺ ions, taste sour, and turn blue litmus red. Bases generate OH⁻ ions, feel slippery, and turn red litmus blue.',
    hindiSummary: 'अम्ल जलीय विलयन में H⁺/H₃O⁺ आयन देते हैं, स्वाद में खट्टे होते हैं और नीले लिटमस को लाल करते हैं। क्षार OH⁻ आयन देते हैं, चिकने होते हैं और लाल लिटमस को नीला करते हैं।',
    keyPoints: [
      'Arrhenius Theory: Acid gives H⁺ in water; Base gives OH⁻ in water.',
      'Brønsted-Lowry Theory: Acid is a proton (H⁺) donor; Base is a proton acceptor.',
      'Lewis Theory: Acid is an electron pair acceptor; Base is an electron pair donor.',
      'pH Scale: pH = -log₁₀[H⁺]. Acidic: pH < 7, Neutral: pH = 7, Alkaline: pH > 7.'
    ],
    hindiKeyPoints: [
      'आर्हिनियस सिद्धांत: जल में H⁺ देने वाला अम्ल; जल में OH⁻ देने वाला क्षार।',
      'ब्रॉन्स्टेड-लोरी सिद्धांत: प्रोटॉन (H⁺) दाता अम्ल; प्रोटॉन ग्राही क्षार।',
      'लुईस सिद्धांत: इलेक्ट्रॉन युग्म ग्राही अम्ल; इलेक्ट्रॉन युग्म दाता क्षार।',
      'pH पैमाना: pH = -log₁₀[H⁺]। अम्लीय: pH < 7, उदासीन: pH = 7, क्षारीय: pH > 7।'
    ]
  }
];

export const chemistryFaqQuestions = [
  {
    id: 'q-1',
    question: 'Why does the atomic size decrease as we move from left to right across a period in the periodic table?',
    hiQuestion: 'आवर्त सारणी के किसी आवर्त में बाएं से दाएं जाने पर परमाणु का आकार क्यों घटता है?',
    answer: 'As you move across a period, electrons are added to the same principal energy shell while protons are added to the nucleus. This increases the effective nuclear charge (Zeff), which pulls the outer electron shells closer to the nucleus, causing atomic radius to decrease.',
    hiAnswer: 'आवर्त में बाएं से दाएं जाने पर इलेक्ट्रॉन उसी मुख्य कोश में जुड़ते हैं जबकि नाभिक में प्रोटॉनों की संख्या बढ़ती जाती है। इससे प्रभावी नाभिकीय आवेश (Zeff) बढ़ता है, जो बाह्यतम कोश के इलेक्ट्रॉनों को नाभिक की ओर अधिक प्रबलता से खींचता है, जिससे परमाणु का आकार घटता है।'
  },
  {
    id: 'q-2',
    question: 'What is the Law of Conservation of Mass and why must every chemical equation be balanced?',
    hiQuestion: 'द्रव्यमान संरक्षण का नियम क्या है और प्रत्येक रासायनिक समीकरण को संतुलित करना क्यों आवश्यक है?',
    answer: 'The Law of Conservation of Mass states that matter can neither be created nor destroyed in a chemical reaction. Because the total number of atoms of each element must remain constant before and after the reaction, a chemical equation must be balanced with stoichiometric coefficients.',
    hiAnswer: 'द्रव्यमान संरक्षण के नियम के अनुसार किसी रासायनिक अभिक्रिया में न तो द्रव्यमान का निर्माण होता है और न ही विनाश। चूंकि अभिक्रिया से पहले और बाद में प्रत्येक तत्व के परमाणुओं की संख्या समान रहनी चाहिए, इसलिए समीकरण को संतुलित करना अनिवार्य है।'
  },
  {
    id: 'q-3',
    question: 'Why is sodium stored under kerosene oil?',
    hiQuestion: 'सोडियम धातु को मिट्टी के तेल (केरोसिन) में डुबोकर क्यों रखा जाता है?',
    answer: 'Sodium is an extremely reactive alkali metal. When exposed to open air, it reacts violently and exothermically with atmospheric oxygen and moisture, releasing hydrogen gas which can catch fire. Kerosene prevents contact with air and moisture.',
    hiAnswer: 'सोडियम एक अत्यधिक क्रियाशील क्षार धातु है। हवा में खुला रखने पर यह वायुमंडलीय ऑक्सीजन और नमी के साथ तीव्र ऊष्माक्षेपी क्रिया करके आग पकड़ लेती है। केरोसिन इसे हवा और नमी के संपर्क से बचाता है।'
  },
  {
    id: 'q-4',
    question: 'What is the valency of Carbon and why does it form an enormous number of organic compounds?',
    hiQuestion: 'कार्बन की संयोजकता क्या है और यह इतने अधिक कार्बनिक यौगिक क्यों बनाता है?',
    answer: 'Carbon has a valency of 4 (tetravalency). It forms millions of compounds due to two unique properties: 1. Catenation (the unique ability of carbon atoms to form strong covalent bonds with other carbon atoms into long chains, branched structures, and rings), and 2. Tetravalency allowing bonds with H, O, N, halogens, etc.',
    hiAnswer: 'कार्बन की संयोजकता 4 (चतुःसंयोजकता) है। इसके लाखों यौगिक बनाने के दो मुख्य कारण हैं: 1. शृंखलन (Catenation - कार्बन परमाणुओं का आपस में जुड़कर लंबी शृंखलाएँ व वलय बनाने का अद्वितीय गुण), और 2. चतुःसंयोजकता द्वारा अन्य तत्वों से मजबूत बंध बनाने की क्षमता।'
  },
  {
    id: 'q-5',
    question: 'What is the difference between an exothermic and an endothermic chemical reaction?',
    hiQuestion: 'ऊष्माक्षेपी और ऊष्माशोषी रासायनिक अभिक्रिया में क्या अंतर है?',
    answer: 'An exothermic reaction releases thermal energy into the surroundings (temperature rises, ΔH is negative, e.g. combustion, respiration). An endothermic reaction absorbs heat energy from the surroundings (temperature drops, ΔH is positive, e.g. photosynthesis, decomposition of limestone).',
    hiAnswer: 'ऊष्माक्षेपी अभिक्रिया में वातावरण में ऊष्मा उत्सर्जित होती है (तापमान बढ़ता है, ΔH ऋणात्मक, जैसे दहन व श्वसन)। ऊष्माशोषी अभिक्रिया में वातावरण से ऊष्मा का अवशोषण होता है (तापमान घटता है, ΔH धनात्मक, जैसे प्रकाश संश्लेषण व चूना पत्थर का अपघटन)।'
  },
  {
    id: 'q-6',
    question: 'Why does fluorine have the highest electronegativity on the periodic table?',
    hiQuestion: 'आवर्त सारणी में फ्लोरीन की विद्युतऋणात्मकता सर्वाधिक क्यों होती है?',
    answer: 'Fluorine has an atomic number of 9 with electron configuration 1s² 2s² 2p⁵. Its valence electrons are located in the small n=2 shell very close to a nucleus with 9 protons with minimal shielding, maximizing its electrostatic attraction for shared electron pairs (3.98 on Pauling scale).',
    hiAnswer: 'फ्लोरीन का परमाणु क्रमांक 9 है (1s² 2s² 2p⁵)। इसका आकार अत्यंत छोटा है और 9 प्रोटॉनों का उच्च प्रभावी नाभिकीय आवेश बहुत कम परिरक्षण के साथ साझी के इलेक्ट्रॉनों को तीव्र बल से आकर्षित करता है (Pauling पैमाने पर 3.98)।'
  },
  {
    id: 'q-7',
    question: 'What is a redox reaction? Explain with a simple example.',
    hiQuestion: 'रेडॉक्स अभिक्रिया क्या है? एक सरल उदाहरण सहित समझाइए।',
    answer: 'A redox reaction is one in which oxidation (loss of electrons / gain of oxygen) and reduction (gain of electrons / loss of oxygen) occur simultaneously. In the reaction CuO + H2 -> Cu + H2O, CuO is reduced to Cu, and H2 is oxidized to H2O.',
    hiAnswer: 'रेडॉक्स अभिक्रिया वह है जिसमें ऑक्सीकरण (इलेक्ट्रॉन त्यागना) और अपचयन (इलेक्ट्रॉन ग्रहण करना) दोनों प्रक्रियाएँ एक साथ होती हैं। उदाहरण: CuO + H₂ → Cu + H₂O में CuO का Cu में अपचयन और H₂ का H₂O में ऑक्सीकरण होता है।'
  },
  {
    id: 'q-8',
    question: 'What is the chemical formula and IUPAC name for Baking Soda and Washing Soda?',
    hiQuestion: 'खाने के सोडे (बेकिंग सोडा) और धोने के सोडे का रासायनिक सूत्र और नाम क्या है?',
    answer: 'Baking Soda: NaHCO3 (Sodium hydrogen carbonate). Washing Soda: Na2CO3·10H2O (Sodium carbonate decahydrate).',
    hiAnswer: 'खाने का सोडा (बेकिंग सोडा): NaHCO₃ (सोडियम हाइड्रोजन कार्बोनेट)। धोने का सोडा: Na₂CO₃·10H₂O (सोडियम कार्बोनेट डेकाहाइड्रेट)।'
  }
];

export default highYieldNotes;

