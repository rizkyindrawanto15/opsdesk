"use client";

import * as React from "react";
import { Language, Translations, DICTIONARY } from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = React.createContext<LanguageContextType>({
  language: "id",
  setLanguage: () => {},
  t: DICTIONARY.id,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("id");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("opsdesk_language") as Language | null;
      if (saved === "id" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // Ignore localStorage access failures
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("opsdesk_language", lang);
    } catch {
      // Ignore
    }
  };

  const t = DICTIONARY[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
