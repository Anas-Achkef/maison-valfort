"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, languages, translations, Translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "ltr" | "rtl";
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "maison-valfort-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (savedLanguage && languages.some(l => l.code === savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0] as Language;
      if (languages.some(l => l.code === browserLang)) {
        setLanguageState(browserLang);
      }
    }
  }, []);

  // Update document direction when language changes
  useEffect(() => {
    if (mounted) {
      const langConfig = languages.find(l => l.code === language);
      if (langConfig) {
        document.documentElement.dir = langConfig.dir;
        document.documentElement.lang = language;
      }
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const currentLangConfig = languages.find(l => l.code === language) || languages[0];

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    dir: currentLangConfig.dir,
    isRTL: currentLangConfig.dir === "rtl",
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ ...value, t: translations.fr }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Hook for getting translations
export function useTranslations() {
  const { t } = useLanguage();
  return t;
}
