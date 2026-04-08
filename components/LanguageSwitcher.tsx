"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages, Language } from "@/lib/translations";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  showLabel?: boolean;
}

export default function LanguageSwitcher({ variant = "dark", showLabel = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const textColor = variant === "light" ? "text-blanc" : "text-noir";
  const hoverBg = variant === "light" ? "hover:bg-blanc/10" : "hover:bg-noir/5";
  const dropdownBg = variant === "light" ? "bg-noir/90 backdrop-blur-md" : "bg-blanc";
  const dropdownText = variant === "light" ? "text-blanc" : "text-noir";
  const dropdownHover = variant === "light" ? "hover:bg-blanc/10" : "hover:bg-creme";
  const borderColor = variant === "light" ? "border-blanc/20" : "border-noir/10";

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg ${hoverBg} transition-colors ${textColor}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentLang.flag}</span>
        {showLabel && (
          <span className="text-sm font-outfit hidden sm:inline">{currentLang.name}</span>
        )}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full right-0 mt-2 ${dropdownBg} rounded-lg shadow-xl border ${borderColor} overflow-hidden z-50 min-w-[160px]`}
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 ${dropdownText} ${dropdownHover} transition-colors ${
                  language === lang.code ? "bg-bordeaux/10" : ""
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-outfit">{lang.name}</span>
                {language === lang.code && (
                  <motion.div
                    layoutId="activeLanguage"
                    className="ml-auto w-2 h-2 rounded-full bg-bordeaux"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
