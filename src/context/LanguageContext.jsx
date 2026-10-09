// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    nav_periodicTable: 'Periodic Table',
    nav_atlas3d: '3D Atlas',
    nav_reactions: 'Reactions',
    nav_quizzes: 'Quizzes',
    nav_aiAssistant: 'AI Assistant',
    nav_search: 'Search',
    nav_back: 'Back',
    nav_subtitle: 'Chemistry Knowledge Platform',
    nav_savedBookmarks: 'Saved Bookmarks',
    nav_logIn: 'Log In',
    nav_getStarted: 'Get Started',
    nav_signUp: 'Sign Up',
    nav_studentDashboard: 'Student Dashboard',
    nav_bookmarkedElements: 'Bookmarked Elements',
    nav_profileSettings: 'Profile & Settings',
    nav_signOut: 'Sign Out',
    nav_signedInAs: 'Signed in as',
    nav_guestMode: 'Guest Demo Mode',
    nav_scholar: 'Scholar',

    // HomePage Hero & Search
    home_backButton: 'Go to Back Page',
    home_iupacBadge: 'IUPAC-Compliant Periodic Table of All 118 Elements',
    home_heroTitle1: 'Explore Every Element.',
    home_heroTitle2: 'Understand Every Reaction.',
    home_heroSubtitle: 'ChemNexus is your centralized, research-grade chemistry knowledge platform. Study physical and chemical properties, atomic shells, reaction mechanisms, and real-world applications in one unified interface.',
    home_searchPlaceholder: 'Search any element (e.g. Iron, Fe, 26, Gold, H)...',
    home_clear: 'Clear',
    home_searchButton: 'Search',
    home_popular: 'Popular:',
    home_matchingTitle: 'Elements Matching',
    home_clickToOpen: 'click to open',
    home_open: 'Open',
    home_viewAllDeepSearch: 'View all comprehensive results for',
    home_inDeepSearch: 'in Deep Search →',
    home_noMatches: 'No exact element matches',
    home_searchAllCompounds: 'Search all compounds, reactions and topics →',

    // HomePage Action Buttons
    home_openPeriodicTable: 'Open Periodic Table',
    home_launch3DAtlas: 'Launch 3D Atlas',
    home_reactionDatabase: 'Reaction Database',

    // HomePage Element of the Day
    home_elementOfDay: 'Element of the Day',
    home_atomicNum: 'Atomic #',
    home_mass: 'Mass:',
    home_viewFullProfile: 'View Full Element Profile',
    home_bookmarkElement: 'Bookmark Element',
    home_bookmarked: 'Bookmarked',

    // HomePage Core Modules
    home_modulesHeading: 'Everything You Need to Master Chemistry',
    home_modulesSubheading: 'A comprehensive suite of interactive tools designed to bridge textbook theory with practical molecular understanding.',
    home_mod_periodicTable: 'Interactive Periodic Table',
    home_mod_periodicTableDesc: 'Explore all 118 elements with heatmaps for electronegativity, ionization energy, and density.',
    home_mod_reactionDb: 'Reaction Database',
    home_mod_reactionDbDesc: 'Understand balanced chemical equations, stoichiometry, industrial catalysts, and conditions.',
    home_mod_quizzes: 'Interactive Quizzes',
    home_mod_quizzesDesc: 'Challenge your knowledge with periodic trends, chemical properties, and stoichiometry questions.',
    home_mod_assistant: 'AI Chemistry Assistant',
    home_mod_assistantDesc: 'Ask complex chemistry questions, balance reactions, and clarify concepts 24/7.',
    home_exploreModule: 'Explore Module',

    // HomePage Stats
    home_statElements: 'Chemical Elements Cataloged',
    home_statClassifications: 'Periodic Classifications',
    home_statVerified: 'IUPAC Verified Data',
    home_statEducation: 'Open Chemistry Education',
    home_statFree: 'Free',

    // Category translations
    cat_alkaliMetal: 'Alkali Metal',
    cat_alkalineEarth: 'Alkaline Earth Metal',
    cat_transitionMetal: 'Transition Metal',
    cat_postTransitionMetal: 'Post-Transition Metal',
    cat_metalloid: 'Metalloid',
    cat_reactiveNonmetal: 'Reactive Nonmetal',
    cat_nobleGas: 'Noble Gas',
    cat_lanthanide: 'Lanthanide',
    cat_actinide: 'Actinide',
    cat_unknown: 'Unknown Properties',

    // Footer
    footer_tagline: 'Explore Every Element. Understand Every Reaction. A centralized, research-grade chemistry knowledge platform designed for students, researchers, and science educators.',
    footer_iupacVerified: 'IUPAC Standard Verified Reference Data',
    footer_platform: 'Platform',
    footer_periodicTable: 'Interactive Periodic Table',
    footer_reactions: 'Chemical Reaction Explorer',
    footer_quizzes: 'Chemistry Quiz Challenges',
    footer_assistant: 'AI Chemistry Assistant',
    footer_deepSearch: 'Deep Element Search',
    footer_resources: 'Resources',
    footer_curriculum: 'Chemistry Curriculum',
    footer_atomicModels: 'Atomic Models & Orbitals',
    footer_solubility: 'Solubility Rules Chart',
    footer_glossary: 'Glossary of Chemistry Terms',
    footer_about: 'About',
    footer_aboutChemNexus: 'About ChemNexus',
    footer_dataSources: 'Data Sources & IUPAC',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Use',
    footer_copyright: 'All rights reserved. Designed for chemistry learners and researchers worldwide.',
  },
  hi: {
    // Navbar
    nav_periodicTable: 'आवर्त सारणी',
    nav_atlas3d: '3D एटलस',
    nav_reactions: 'अभिक्रियाएं',
    nav_quizzes: 'क्विज़',
    nav_aiAssistant: 'AI सहायक',
    nav_search: 'खोजें',
    nav_back: 'वापस',
    nav_subtitle: 'रसायन विज्ञान ज्ञान मंच',
    nav_savedBookmarks: 'सहेजे गए बुकमार्क',
    nav_logIn: 'लॉग इन',
    nav_getStarted: 'शुरू करें',
    nav_signUp: 'साइन अप',
    nav_studentDashboard: 'विद्यार्थी डैशबोर्ड',
    nav_bookmarkedElements: 'बुकमार्क किए गए तत्व',
    nav_profileSettings: 'प्रोफ़ाइल और सेटिंग्स',
    nav_signOut: 'साइन आउट',
    nav_signedInAs: 'इस रूप में लॉग इन हैं',
    nav_guestMode: 'अतिथि डेमो मोड',
    nav_scholar: 'अध्येता',

    // HomePage Hero & Search
    home_backButton: 'पिछले पृष्ठ पर जाएं',
    home_iupacBadge: 'सभी 118 तत्वों की IUPAC-मानक आवर्त सारणी',
    home_heroTitle1: 'हर तत्व को समझें।',
    home_heroTitle2: 'हर अभिक्रिया को जानें।',
    home_heroSubtitle: 'ChemNexus आपका केंद्रीय, शोध-स्तरीय रसायन विज्ञान ज्ञान मंच है। भौतिक और रासायनिक गुणों, परमाणु कोशों, अभिक्रिया विधियों और वास्तविक अनुप्रयोगों का एक ही स्थान पर अध्ययन करें।',
    home_searchPlaceholder: 'किसी भी तत्व को खोजें (उदा. Iron, Fe, 26, Gold, H)...',
    home_clear: 'साफ़ करें',
    home_searchButton: 'खोजें',
    home_popular: 'लोकप्रिय:',
    home_matchingTitle: 'तत्व जो मेल खाते हैं',
    home_clickToOpen: 'खोलने के लिए क्लिक करें',
    home_open: 'खोलें',
    home_viewAllDeepSearch: 'के लिए गहन खोज में सभी परिणाम देखें',
    home_inDeepSearch: 'गहन खोज में →',
    home_noMatches: 'से कोई सटीक तत्व नहीं मिला',
    home_searchAllCompounds: 'सभी यौगिक, अभिक्रियाएं और विषय खोजें →',

    // HomePage Action Buttons
    home_openPeriodicTable: 'आवर्त सारणी खोलें',
    home_launch3DAtlas: '3D एटलस शुरू करें',
    home_reactionDatabase: 'अभिक्रिया डेटाबेस',

    // HomePage Element of the Day
    home_elementOfDay: 'आज का तत्व',
    home_atomicNum: 'परमाणु #',
    home_mass: 'द्रव्यमान:',
    home_viewFullProfile: 'पूरी तत्व प्रोफ़ाइल देखें',
    home_bookmarkElement: 'तत्व बुकमार्क करें',
    home_bookmarked: 'बुकमार्क किया गया',

    // HomePage Core Modules
    home_modulesHeading: 'रसायन विज्ञान में निपुणता के लिए सब कुछ',
    home_modulesSubheading: 'किताबी सिद्धांत और व्यावहारिक आणविक समझ को जोड़ने के लिए डिज़ाइन किए गए संवादात्मक उपकरणों का संपूर्ण संग्रह।',
    home_mod_periodicTable: 'इंटरैक्टिव आवर्त सारणी',
    home_mod_periodicTableDesc: 'विद्युतऋणात्मकता, आयनन ऊर्जा और घनत्व के हीटमैप के साथ सभी 118 तत्वों का अन्वेषण करें।',
    home_mod_reactionDb: 'अभिक्रिया डेटाबेस',
    home_mod_reactionDbDesc: 'संतुलित रासायनिक समीकरण, रससमीकरणमिति, औद्योगिक उत्प्रेरक और परिस्थितियों को समझें।',
    home_mod_quizzes: 'इंटरैक्टिव क्विज़',
    home_mod_quizzesDesc: 'आवर्त प्रवृत्तियों, रासायनिक गुणों और रससमीकरणमिति प्रश्नों से अपने ज्ञान को परखें।',
    home_mod_assistant: 'AI रसायन विज्ञान सहायक',
    home_mod_assistantDesc: 'जटिल रसायन विज्ञान प्रश्न पूछें, रासायनिक अभिक्रियाओं को संतुलित करें और अवधारणाओं को स्पष्ट करें।',
    home_exploreModule: 'मॉड्यूल देखें',

    // HomePage Stats
    home_statElements: 'सूचीबद्ध रासायनिक तत्व',
    home_statClassifications: 'आवर्त वर्गीकरण',
    home_statVerified: 'IUPAC सत्यापित डेटा',
    home_statEducation: 'खुली रसायन विज्ञान शिक्षा',
    home_statFree: 'निःशुल्क',

    // Category translations
    cat_alkaliMetal: 'क्षार धातु (Alkali Metal)',
    cat_alkalineEarth: 'क्षारीय मृदा धातु (Alkaline Earth Metal)',
    cat_transitionMetal: 'संक्रमण धातु (Transition Metal)',
    cat_postTransitionMetal: 'उत्तर-संक्रमण धातु (Post-Transition Metal)',
    cat_metalloid: 'उपधातु (Metalloid)',
    cat_reactiveNonmetal: 'सक्रिय अधातु (Reactive Nonmetal)',
    cat_nobleGas: 'उत्कृष्ट गैस (Noble Gas)',
    cat_lanthanide: 'लैन्थेनाइड (Lanthanide)',
    cat_actinide: 'ऐक्टिनाइड (Actinide)',
    cat_unknown: 'अज्ञात गुण (Unknown)',

    // Footer
    footer_tagline: 'हर तत्व को समझें। हर अभिक्रिया को जानें। छात्रों, शोधकर्ताओं और शिक्षकों के लिए डिज़ाइन किया गया रसायन विज्ञान ज्ञान मंच।',
    footer_iupacVerified: 'IUPAC मानक सत्यापित संदर्भ डेटा',
    footer_platform: 'मंच',
    footer_periodicTable: 'इंटरैक्टिव आवर्त सारणी',
    footer_reactions: 'रासायनिक अभिक्रिया अन्वेषक',
    footer_quizzes: 'रसायन विज्ञान क्विज़ चुनौतियाँ',
    footer_assistant: 'AI रसायन विज्ञान सहायक',
    footer_deepSearch: 'गहन तत्व खोज',
    footer_resources: 'संसाधन',
    footer_curriculum: 'रसायन विज्ञान पाठ्यक्रम',
    footer_atomicModels: 'परमाणु मॉडल और कक्षक',
    footer_solubility: 'घुलनशीलता नियम चार्ट',
    footer_glossary: 'रसायन विज्ञान शब्दावली',
    footer_about: 'के बारे में',
    footer_aboutChemNexus: 'ChemNexus के बारे में',
    footer_dataSources: 'डेटा स्रोत और IUPAC',
    footer_privacy: 'गोपनीयता नीति',
    footer_terms: 'उपयोग की शर्तें',
    footer_copyright: 'सर्वाधिकार सुरक्षित। दुनिया भर के रसायन विज्ञान शिक्षार्थियों और शोधकर्ताओं के लिए डिज़ाइन किया गया।',
  }
};

export const categoryTranslations = {
  'alkali-metal': { en: 'Alkali Metal', hi: 'क्षार धातु' },
  'alkaline-earth': { en: 'Alkaline Earth Metal', hi: 'क्षारीय मृदा धातु' },
  'transition-metal': { en: 'Transition Metal', hi: 'संक्रमण धातु' },
  'post-transition-metal': { en: 'Post-Transition Metal', hi: 'उत्तर-संक्रमण धातु' },
  'metalloid': { en: 'Metalloid', hi: 'उपधातु' },
  'reactive-nonmetal': { en: 'Reactive Nonmetal', hi: 'सक्रिय अधातु' },
  'noble-gas': { en: 'Noble Gas', hi: 'उत्कृष्ट गैस' },
  'lanthanide': { en: 'Lanthanide', hi: 'लैन्थेनाइड' },
  'actinide': { en: 'Actinide', hi: 'ऐक्टिनाइड' },
  'unknown': { en: 'Unknown Properties', hi: 'अज्ञात गुण' }
};

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('chemnexus_language');
      return saved === 'hi' ? 'hi' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang) => {
    const validLang = lang === 'hi' ? 'hi' : 'en';
    setLanguageState(validLang);
    try {
      localStorage.setItem('chemnexus_language', validLang);
    } catch (e) {
      console.warn('Failed to save language preference:', e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key, fallback) => {
    const langDict = translations[language] || translations.en;
    if (langDict[key] !== undefined) {
      return langDict[key];
    }
    if (translations.en[key] !== undefined) {
      return translations.en[key];
    }
    return fallback !== undefined ? fallback : key;
  };

  const getTranslatedCategory = (categoryKey, fallbackName) => {
    const mapping = categoryTranslations[categoryKey];
    if (mapping && mapping[language]) {
      return mapping[language];
    }
    return fallbackName || categoryKey;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        getTranslatedCategory,
        isHindi: language === 'hi',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

