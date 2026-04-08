"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield, Settings, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true, // Toujours activé
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Attendre un peu avant d'afficher la bannière
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      // Charger les préférences sauvegardées
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
        applyPreferences(saved);
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  const applyPreferences = (prefs: CookiePreferences) => {
    // Activer/désactiver Google Analytics selon les préférences
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gtag = (window as any).gtag;
      if (prefs.analytics) {
        // Activer GA
        gtag?.("consent", "update", {
          analytics_storage: "granted",
        });
      } else {
        // Désactiver GA
        gtag?.("consent", "update", {
          analytics_storage: "denied",
        });
      }

      if (prefs.marketing) {
        gtag?.("consent", "update", {
          ad_storage: "granted",
        });
      } else {
        gtag?.("consent", "update", {
          ad_storage: "denied",
        });
      }
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    applyPreferences(prefs);
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    savePreferences(defaultPreferences);
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Ne peut pas être désactivé
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="max-w-4xl mx-auto bg-blanc border border-noir/10 shadow-2xl overflow-hidden">
            {/* En-tête */}
            <div className={`bg-bordeaux p-4 flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-10 h-10 bg-blanc/10 rounded-lg flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-blanc" />
                </div>
                <div>
                  <h3 className="font-cormorant text-blanc text-lg">
                    {t.cookies.title}
                  </h3>
                  <p className="text-blanc/60 text-xs font-outfit">
                    {t.cookies.privacySubtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="w-8 h-8 flex items-center justify-center text-blanc/60 hover:text-blanc transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenu principal */}
            <div className="p-6">
              <p className="text-noir/70 text-sm font-outfit leading-relaxed mb-6">
                {t.cookies.description}
              </p>

              {/* Détails des cookies */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 mb-6 border-t border-noir/10 pt-6">
                      {/* Cookies nécessaires */}
                      <div className={`flex items-start justify-between p-4 bg-creme/50 rounded-lg ${isRTL ? "flex-row-reverse" : ""}`}>
                        <div className="flex-1">
                          <div className={`flex items-center gap-2 mb-1 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                            <Shield className="w-4 h-4 text-bordeaux" />
                            <span className="font-medium text-noir text-sm">
                              {t.cookies.necessary}
                            </span>
                            <span className="text-xs bg-bordeaux/10 text-bordeaux px-2 py-0.5 rounded">
                              {t.cookies.required}
                            </span>
                          </div>
                          <p className="text-noir/50 text-xs font-outfit">
                            {t.cookies.necessaryDesc}
                          </p>
                        </div>
                        <div className={`w-12 h-6 bg-bordeaux rounded-full flex items-center ${isRTL ? "justify-start" : "justify-end"} px-1`}>
                          <div className="w-4 h-4 bg-blanc rounded-full" />
                        </div>
                      </div>

                      {/* Cookies analytiques */}
                      <div className={`flex items-start justify-between p-4 bg-creme/50 rounded-lg ${isRTL ? "flex-row-reverse" : ""}`}>
                        <div className="flex-1">
                          <div className={`flex items-center gap-2 mb-1 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                            <Settings className="w-4 h-4 text-bordeaux" />
                            <span className="font-medium text-noir text-sm">
                              {t.cookies.analytics}
                            </span>
                          </div>
                          <p className="text-noir/50 text-xs font-outfit">
                            {t.cookies.analyticsDesc}
                          </p>
                        </div>
                        <button
                          onClick={() => togglePreference("analytics")}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                            preferences.analytics
                              ? `bg-bordeaux ${isRTL ? "justify-start" : "justify-end"}`
                              : `bg-noir/20 ${isRTL ? "justify-end" : "justify-start"}`
                          } px-1`}
                        >
                          <motion.div
                            layout
                            className="w-4 h-4 bg-blanc rounded-full"
                          />
                        </button>
                      </div>

                      {/* Cookies marketing */}
                      <div className={`flex items-start justify-between p-4 bg-creme/50 rounded-lg ${isRTL ? "flex-row-reverse" : ""}`}>
                        <div className="flex-1">
                          <div className={`flex items-center gap-2 mb-1 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                            <Cookie className="w-4 h-4 text-bordeaux" />
                            <span className="font-medium text-noir text-sm">
                              {t.cookies.marketing}
                            </span>
                          </div>
                          <p className="text-noir/50 text-xs font-outfit">
                            {t.cookies.marketingDesc}
                          </p>
                        </div>
                        <button
                          onClick={() => togglePreference("marketing")}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                            preferences.marketing
                              ? `bg-bordeaux ${isRTL ? "justify-start" : "justify-end"}`
                              : `bg-noir/20 ${isRTL ? "justify-end" : "justify-start"}`
                          } px-1`}
                        >
                          <motion.div
                            layout
                            className="w-4 h-4 bg-blanc rounded-full"
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Boutons d'action */}
              <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className={`flex-1 px-6 py-3 border border-noir/20 text-noir/70 hover:border-bordeaux hover:text-bordeaux transition-colors text-sm font-outfit flex items-center justify-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <Settings className="w-4 h-4" />
                  {showDetails ? t.cookies.hideDetails : t.cookies.customize}
                </button>

                {showDetails ? (
                  <button
                    onClick={saveCustom}
                    className={`flex-1 px-6 py-3 bg-bordeaux text-blanc hover:bg-bordeaux/90 transition-colors text-sm font-outfit flex items-center justify-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <Check className="w-4 h-4" />
                    {t.cookies.savePreferences}
                  </button>
                ) : (
                  <>
                    <button
                      onClick={acceptNecessary}
                      className="flex-1 px-6 py-3 border border-noir/20 text-noir/70 hover:border-bordeaux hover:text-bordeaux transition-colors text-sm font-outfit"
                    >
                      {t.cookies.refuseAll}
                    </button>
                    <button
                      onClick={acceptAll}
                      className={`flex-1 px-6 py-3 bg-bordeaux text-blanc hover:bg-bordeaux/90 transition-colors text-sm font-outfit flex items-center justify-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <Check className="w-4 h-4" />
                      {t.cookies.acceptAll}
                    </button>
                  </>
                )}
              </div>

              {/* Lien politique de confidentialité */}
              <p className="text-center text-noir/40 text-xs mt-4 font-outfit">
                {t.cookies.privacyText}{" "}
                <a
                  href="/politique-confidentialite"
                  className="underline hover:text-bordeaux transition-colors"
                >
                  {t.cookies.privacyLink}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
