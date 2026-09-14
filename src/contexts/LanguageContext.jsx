import { createContext, useState, useContext } from "react";

const LANGUAGES = ["fr", "en", "es"];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("fr");

  const toggleLanguage = () => {
    setLang((prev) => LANGUAGES[(LANGUAGES.indexOf(prev) + 1) % LANGUAGES.length]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
