"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: t.nav.concierge, href: "#services" },
    { name: t.nav.subletting, href: "#souslocation" },
    { name: t.nav.simulator, href: "#simulateur" },
    { name: t.nav.crypto || "Paiement Crypto", href: "#bitcoin" },
    { name: t.nav.member || "Devenir Membre", href: "#partenaire" },
    { name: t.nav.partner, href: "#partners" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      clipPath: isRTL ? "circle(0% at 40px 40px)" : "circle(0% at calc(100% - 40px) 40px)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
    open: {
      clipPath: isRTL ? "circle(150% at 40px 40px)" : "circle(150% at calc(100% - 40px) 40px)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled && !isMenuOpen
          ? "bg-blanc/95 backdrop-blur-sm shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className={`max-w-full px-4 md:px-6 flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
        {/* Logo */}
        <a
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative z-50 cursor-pointer ml-0"
        >
          <Logo
            variant={isScrolled && !isMenuOpen ? "bordeaux" : isMenuOpen ? "white" : "white"}
            size="md"
          />
        </a>

        {/* Language Switcher + Menu Button */}
        <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Language Switcher - visible quand le menu est fermé */}
          {!isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <LanguageSwitcher variant={isScrolled ? "dark" : "light"} />
            </motion.div>
          )}

          {/* Bouton Menu Burger */}
          <motion.button
            className="relative z-50 w-14 h-14 flex items-center justify-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            <div className="relative w-8 h-6 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 10 : 0,
                  width: isMenuOpen ? "100%" : "100%",
                }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className={`h-[2px] w-full origin-center transition-colors duration-300 ${
                  isMenuOpen ? "bg-blanc" : isScrolled ? "bg-bordeaux" : "bg-blanc"
                }`}
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  x: isMenuOpen ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`h-[2px] w-3/4 transition-colors duration-300 ${
                  isMenuOpen ? "bg-blanc" : isScrolled ? "bg-bordeaux" : "bg-blanc"
                } ${isRTL ? "self-end" : ""}`}
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -10 : 0,
                  width: isMenuOpen ? "100%" : "50%",
                }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className={`h-[2px] origin-center transition-colors duration-300 ${
                  isMenuOpen ? "bg-blanc" : isScrolled ? "bg-bordeaux" : "bg-blanc"
                } ${isRTL ? "self-end" : ""}`}
              />
            </div>
          </motion.button>
        </div>

        {/* Menu Fullscreen Luxueux */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-bordeaux z-40"
            >
              {/* Motif de fond animé */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Cercles concentriques animés */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="w-[1000px] h-[1000px] border border-blanc/5 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-blanc/10 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blanc/5 rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Lignes diagonales */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.03 }}
                  transition={{ delay: 0.5 }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 100px,
                      rgba(255,255,255,0.5) 100px,
                      rgba(255,255,255,0.5) 101px
                    )`,
                  }}
                />
              </div>

              {/* Contenu du menu - Centré */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center">
                {/* Language Switcher dans le menu */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-24 left-1/2 -translate-x-1/2"
                >
                  <LanguageSwitcher variant="light" showLabel />
                </motion.div>

                <nav className="text-center">
                  <ul className="space-y-3">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + index * 0.06,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          onMouseEnter={() => setHoveredLink(link.name)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className="group relative inline-flex items-center justify-center py-2"
                        >
                          <span className={`text-4xl md:text-5xl lg:text-6xl font-cormorant font-light tracking-wide transition-all duration-500 ${
                            hoveredLink === link.name
                              ? "text-creme scale-110"
                              : hoveredLink && hoveredLink !== link.name
                                ? "text-blanc/30"
                                : "text-blanc"
                          }`}>
                            {link.name}
                          </span>

                          {/* Ligne sous le texte au hover */}
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: hoveredLink === link.name ? "100%" : 0 }}
                            className="absolute -bottom-1 left-0 h-px bg-creme"
                          />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA centré */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="mt-12"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={`inline-flex items-center gap-3 px-8 py-4 bg-blanc text-bordeaux font-medium tracking-wide hover:bg-creme transition-all duration-300 group ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <span>{t.nav.contact}</span>
                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180" : ""}`} />
                  </a>
                </motion.div>

                {/* Réseaux sociaux en bas du menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center gap-6 mt-10"
                >
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/maison.valfort" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -3 }}
                      className="w-12 h-12 rounded-full border border-blanc/20 flex items-center justify-center text-blanc/50 hover:text-blanc hover:border-blanc transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Footer du menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className={`absolute bottom-8 left-8 right-8 flex justify-between items-center text-blanc/30 text-xs tracking-wider font-outfit ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <span>&copy; 2024 MAISON VALFORT</span>
                <div className="hidden md:flex items-center gap-8">
                  <a href="/mentions-legales" className="hover:text-blanc transition-colors">{t.footer.legal}</a>
                  <a href="/politique-confidentialite" className="hover:text-blanc transition-colors">{t.footer.privacy}</a>
                </div>
                <span>PARIS | FRANCE</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
