// src/data/periodicTrendsData.js
// ChemNexus Comprehensive Guide to Periodic Trends, Electronic Configurations & Valency
// Authoritative IUPAC trends across periods (left to right) and groups (top to bottom).

export const periodicTrendsData = {
  overview: {
    title: 'Periodic Table Trends & Law',
    hindiTitle: 'आवर्त सारणी की प्रवृत्तियाँ एवं नियम',
    en: 'Modern Periodic Law states that the physical and chemical properties of elements are periodic functions of their atomic numbers (Henry Moseley, 1913). Across a period and down a group, atomic properties exhibit predictable mathematical trends driven by effective nuclear charge (Zeff) and principal quantum numbers (n).',
    hi: 'आधुनिक आवर्त नियम के अनुसार: तत्वों के भौतिक और रासायनिक गुण उनके परमाणु क्रमांकों के आवर्ती फलन होते हैं (हेनरी मोजले, 1913)। आवर्त में बाएं से दाएं और समूह में ऊपर से नीचे जाने पर प्रभावी नाभिकीय आवेश (Zeff) और कोशों की संख्या (n) के कारण तत्वों के गुण नियमित प्रवृत्तियाँ प्रदर्शित करते हैं।'
  },
  trends: [
    {
      id: 'atomic-radius',
      name: 'Atomic Radius',
      hindiName: 'परमाणु त्रिज्या',
      definition: 'The distance from the center of the nucleus to the outermost electron shell of an isolated atom.',
      hindiDefinition: 'किसी विलगित परमाणु के नाभिक के केंद्र से उसके बाह्यतम इलेक्ट्रॉन कोश के बीच की दूरी को परमाणु त्रिज्या कहते हैं।',
      acrossPeriod: 'Decreases (Left to Right)',
      hindiAcrossPeriod: 'घटती है (बाएं से दाएं)',
      acrossPeriodReason: 'Electrons are added to the same principal shell while protons increase, raising effective nuclear charge (Zeff) and pulling shells closer to the nucleus.',
      hindiAcrossPeriodReason: 'इलेक्ट्रॉन उसी मुख्य कोश में जुड़ते हैं जबकि प्रोटॉनों की संख्या बढ़ती है, जिससे प्रभावी नाभिकीय आवेश (Zeff) बढ़ता है और कोश नाभिक की ओर खिंचते हैं।',
      downGroup: 'Increases (Top to Bottom)',
      hindiDownGroup: 'बढ़ती है (ऊपर से नीचे)',
      downGroupReason: 'A new principal energy level (n) is added with each period, increasing shielding effect and orbital distance despite higher nuclear charge.',
      hindiDownGroupReason: 'प्रत्येक नए आवर्त में एक नया मुख्य ऊर्जा स्तर (कोश) जुड़ता है, जिससे परिरक्षण प्रभाव (Shielding effect) बढ़ता है और नाभिक से दूरी बढ़ती है।'
    },
    {
      id: 'ionization-energy',
      name: 'Ionization Energy (IE)',
      hindiName: 'आयनन ऊर्जा / आयनन एन्थैल्पी',
      definition: 'The minimum amount of energy required to remove the most loosely bound valence electron from an isolated gaseous atom in its ground state: X(g) + IE → X⁺(g) + e⁻.',
      hindiDefinition: 'किसी विलगित गैसीय परमाणु की मूल अवस्था से उसके सबसे ढीले बंधे बाह्यतम इलेक्ट्रॉन को बाहर निकालने के लिए आवश्यक न्यूनतम ऊर्जा: X(g) + IE → X⁺(g) + e⁻।',
      acrossPeriod: 'Increases (Left to Right)',
      hindiAcrossPeriod: 'बढ़ती है (बाएं से दाएं)',
      acrossPeriodReason: 'Smaller atomic radius and higher effective nuclear charge hold valence electrons more tightly.',
      hindiAcrossPeriodReason: 'परमाणु का आकार छोटा होने और उच्च प्रभावी नाभिकीय आवेश के कारण बाह्यतम इलेक्ट्रॉन नाभिक से अधिक मजबूती से बंधा रहता है।',
      downGroup: 'Decreases (Top to Bottom)',
      hindiDownGroup: 'घटती है (ऊपर से नीचे)',
      downGroupReason: 'Valence electrons are farther from the nucleus and shielded by inner core electrons, making them easier to remove.',
      hindiDownGroupReason: 'बाह्यतम इलेक्ट्रॉन नाभिक से दूर होते जाते हैं और आंतरिक इलेक्ट्रॉनों के परिरक्षण प्रभाव के कारण उन्हें निकालना आसान हो जाता है।'
    },
    {
      id: 'electronegativity',
      name: 'Electronegativity (Pauling Scale)',
      hindiName: 'विद्युतऋणात्मकता (Pauling Scale)',
      definition: 'The relative tendency of an atom in a covalent bond to attract shared electron pairs toward itself.',
      hindiDefinition: 'किसी सहसंयोजक बंध में जुड़े परमाणु द्वारा साझी के इलेक्ट्रॉन युग्म को अपनी ओर आकर्षित करने की सापेक्ष क्षमता को विद्युतऋणात्मकता कहते हैं।',
      acrossPeriod: 'Increases (Left to Right)',
      hindiAcrossPeriod: 'बढ़ती है (बाएं से दाएं)',
      acrossPeriodReason: 'Higher nuclear charge and smaller atomic radius strongly attract bonding electron density (Fluorine is highest: 3.98).',
      hindiAcrossPeriodReason: 'उच्च नाभिकीय आवेश और छोटी परमाणु त्रिज्या बंध के इलेक्ट्रॉनों को प्रबलता से आकर्षित करती है (फ्लोरीन का मान सर्वाधिक: 3.98)।',
      downGroup: 'Decreases (Top to Bottom)',
      hindiDownGroup: 'घटती है (ऊपर से नीचे)',
      downGroupReason: 'Increased atomic radius and electron screening weaken electrostatic pull on shared pairs (Cesium/Francium are lowest: ~0.7).',
      hindiDownGroupReason: 'बढ़ते आकार और परिरक्षण प्रभाव के कारण नाभिक का साझी के इलेक्ट्रॉनों पर आकर्षण दुर्बल हो जाता है (सीज़ियम/फ्रांसियम न्यूनतम: ~0.7)।'
    },
    {
      id: 'electron-affinity',
      name: 'Electron Affinity (Electron Gain Enthalpy)',
      hindiName: 'इलेक्ट्रॉन लब्धि एन्थैल्पी (Electron Affinity)',
      definition: 'The enthalpy change when a neutral isolated gaseous atom accepts an electron to form a univalent negative anion: X(g) + e⁻ → X⁻(g).',
      hindiDefinition: 'जब कोई विलगित गैसीय परमाणु एक अतिरिक्त इलेक्ट्रॉन ग्रहण करके ऋणायन बनाता है, तो होने वाले एन्थैल्पी परिवर्तन को इलेक्ट्रॉन लब्धि एन्थैल्पी कहते हैं: X(g) + e⁻ → X⁻(g)।',
      acrossPeriod: 'Becomes More Negative / Increases (Left to Right)',
      hindiAcrossPeriod: 'अधिक ऋणात्मक होती है (बाएं से दाएं)',
      acrossPeriodReason: 'Atoms approach stable noble gas octets and hold incoming electrons tightly due to high Zeff (Halogens are highest; Chlorine is highest at -349 kJ/mol).',
      hindiAcrossPeriodReason: 'परमाणु अक्रिय गैस अष्टक के निकट होते हैं और उच्च Zeff के कारण नए इलेक्ट्रॉन को प्रबलता से आकर्षित करते हैं (क्लोरीन का मान सर्वाधिक: -349 kJ/mol)।',
      downGroup: 'Becomes Less Negative / Decreases (Top to Bottom)',
      hindiDownGroup: 'कम ऋणात्मक होती है (ऊपर से नीचे)',
      downGroupReason: 'Larger atom size places the incoming electron farther from the nucleus, experiencing weaker attraction.',
      hindiDownGroupReason: 'परमाणु का आकार बड़ा होने के कारण नया जुड़ने वाला इलेक्ट्रॉन नाभिक से दूर रहता है और कम आकर्षण महसूस करता है।'
    },
    {
      id: 'valency',
      name: 'Valency & Valence Electrons',
      hindiName: 'संयोजकता एवं संयोजी इलेक्ट्रॉन',
      definition: 'The combining capacity of an atom, determined by the number of electrons lost, gained, or shared to achieve a noble gas electronic configuration.',
      hindiDefinition: 'किसी तत्व के परमाणु की अन्य परमाणुओं से जुड़ने की संयोजन क्षमता को संयोजकता कहते हैं, जो अक्रिय गैस विन्यास प्राप्त करने के लिए त्यागे, ग्रहण किए या साझे किए गए इलेक्ट्रॉनों की संख्या है।',
      acrossPeriod: 'Increases from 1 to 4, then Decreases to 0 (with respect to H)',
      hindiAcrossPeriod: '1 से 4 तक बढ़ती है, फिर घटकर 0 हो जाती है (हाइड्रोजन के सापेक्ष)',
      acrossPeriodReason: 'Group 1 (1) -> Group 2 (2) -> Group 13 (3) -> Group 14 (4) -> Group 15 (8-5=3) -> Group 16 (8-6=2) -> Group 17 (8-7=1) -> Group 18 (0).',
      hindiAcrossPeriodReason: 'समूह 1 (1) → समूह 2 (2) → समूह 13 (3) → समूह 14 (4) → समूह 15 (8-5=3) → समूह 16 (8-6=2) → समूह 17 (8-7=1) → समूह 18 (0)।',
      downGroup: 'Remains Constant for Main Group Elements',
      hindiDownGroup: 'समूह में सदैव समान रहती है',
      downGroupReason: 'All elements in the same group possess identical valence shell electron configurations (e.g., Group 1 always has ns¹ with valency 1).',
      hindiDownGroupReason: 'एक ही समूह के सभी तत्वों का बाह्यतम इलेक्ट्रॉनिक विन्यास समान होता है (जैसे समूह 1 के सभी तत्वों का विन्यास ns¹ और संयोजकता 1 होती है)।'
    },
    {
      id: 'metallic-character',
      name: 'Metallic Character (Electropositivity)',
      hindiName: 'धात्विक लक्षण (विद्युतधनात्मकता)',
      definition: 'The tendency of an element to lose electrons and form positive cations (electropositive nature).',
      hindiDefinition: 'किसी तत्व द्वारा सरलता से इलेक्ट्रॉन त्यागकर धनायन बनाने की प्रवृत्ति को धात्विक लक्षण या विद्युतधनात्मकता कहते हैं।',
      acrossPeriod: 'Decreases (Metals → Metalloids → Nonmetals)',
      hindiAcrossPeriod: 'घटता है (धातु → उपधातु → अधातु)',
      acrossPeriodReason: 'Increasing nuclear charge makes electron loss progressively more difficult.',
      hindiAcrossPeriodReason: 'नाभिकीय आवेश बढ़ने से इलेक्ट्रॉन त्यागना कठिन और इलेक्ट्रॉन ग्रहण करना आसान हो जाता है।',
      downGroup: 'Increases (Top to Bottom)',
      hindiDownGroup: 'बढ़ता है (ऊपर से नीचे)',
      downGroupReason: 'Larger atomic radius allows outer electrons to be detached with lower energy.',
      hindiDownGroupReason: 'परमाणु आकार बढ़ने से बाह्यतम इलेक्ट्रॉन आसानी से मुक्त हो जाते हैं, अतः धात्विक गुण बढ़ता है।'
    }
  ],
  configurationRules: [
    {
      rule: 'Aufbau Principle',
      hindiRule: 'आउफबाऊ सिद्धांत',
      en: 'Electrons fill atomic orbitals of lowest available energy levels before occupying higher levels (1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p...).',
      hi: 'इलेक्ट्रॉन सबसे पहले न्यूनतम ऊर्जा वाले उपलब्ध कक्षकों में प्रवेश करते हैं और उसके बाद उच्च ऊर्जा वाले कक्षकों को भरते हैं (1s < 2s < 2p < 3s < 3p < 4s < 3d...)।'
    },
    {
      rule: 'Pauli Exclusion Principle',
      hindiRule: 'पाउली का अपवर्जन सिद्धांत',
      en: 'No two electrons in an atom can have the same four quantum numbers (n, l, ml, ms). An orbital holds at most 2 electrons with opposite spins (↑↓).',
      hi: 'किसी एक परमाणु में किन्हीं दो इलेक्ट्रॉनों के लिए चारों क्वांटम संख्याओं का मान कभी समान नहीं हो सकता। एक कक्षक में विपरीत चक्रण (↑↓) वाले अधिकतम 2 इलेक्ट्रॉन रह सकते हैं।'
    },
    {
      rule: 'Hund\'s Rule of Maximum Multiplicity',
      hindiRule: 'हुंड का अधिकतम बहुलता का नियम',
      en: 'Every orbital in a subshell is singly occupied with parallel spins before any orbital is doubly occupied.',
      hi: 'समान ऊर्जा वाले उपकोशों (जैसे p, d, f) के कक्षकों में इलेक्ट्रॉन पहले एक-एक करके समानांतर चक्रण के साथ भरते हैं, उसके बाद ही युग्मन प्रारंभ होता है।'
    },
    {
      rule: 'Exceptional Configurations: Chromium (Cr) and Copper (Cu)',
      hindiRule: 'अपवाद: क्रोमियम (Cr) एवं कॉपर (Cu) का विन्यास',
      en: 'Cr (Z=24): [Ar] 3d⁵ 4s¹ (half-filled d-subshell stability). Cu (Z=29): [Ar] 3d¹⁰ 4s¹ (fully-filled d-subshell stability). Symmetrical charge distributions and maximized exchange energies confer extra stability.',
      hi: 'Cr (24): [Ar] 3d⁵ 4s¹ (अर्ध-पूरित d-उपकोश का स्थायित्व)। Cu (29): [Ar] 3d¹⁰ 4s¹ (पूर्ण-पूरित d-उपकोश का स्थायित्व)। सममित इलेक्ट्रॉन वितरण और अधिकतम विनिमय ऊर्जा के कारण ये विन्यास अतिरिक्त स्थायित्व प्राप्त करते हैं।'
    }
  ]
};

export default periodicTrendsData;

