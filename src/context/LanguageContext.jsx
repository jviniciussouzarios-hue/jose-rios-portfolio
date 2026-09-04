import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('jose_portfolio_lang');
    if (saved === 'pt' || saved === 'en') return saved;
    const browserLang = navigator.language || navigator.userLanguage || '';
    return browserLang.startsWith('pt') ? 'pt' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('jose_portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = (section, key) => {
    const sectionData = translations[language]?.[section] || translations.pt[section];
    if (!sectionData) return '';
    return sectionData[key] !== undefined ? sectionData[key] : key;
  };

  const currentContent = translations[language] || translations.pt;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        content: currentContent,
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
