"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/maison.valfort", label: "Instagram" },
];

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quickLinks = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.concierge, href: "#services" },
    { name: t.nav.subletting, href: "#souslocation" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-noir border-t border-blanc/5 relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-bordeaux/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-bordeaux/3 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Bouton retour en haut - discret */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        className={`fixed bottom-20 ${isRTL ? "left-6" : "right-6"} z-40 w-10 h-10 bg-blanc/10 backdrop-blur-sm rounded-full flex items-center justify-center text-blanc/60 hover:text-blanc hover:bg-blanc/20 transition-all border border-blanc/20`}
        aria-label={t.common.back}
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Logo variant="white" size="md" className="mb-6" />
            <p className="text-blanc/40 text-sm leading-relaxed max-w-md mb-6 font-outfit">
              {t.footer.description}
            </p>
            {/* Réseaux sociaux */}
            <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-blanc/10 flex items-center justify-center text-blanc/40 hover:border-bordeaux hover:text-bordeaux hover:bg-bordeaux/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-cormorant text-blanc text-lg mb-6">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className={`text-blanc/40 text-sm hover:text-bordeaux transition-colors font-outfit inline-flex items-center gap-2 group ${isRTL ? "flex-row-reverse" : ""}`}
                    whileHover={{ x: isRTL ? -5 : 5 }}
                  >
                    <motion.span
                      className="w-0 h-px bg-bordeaux group-hover:w-3 transition-all duration-300"
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-cormorant text-blanc text-lg mb-6">{t.footer.contact}</h4>
            <div className="space-y-3 text-sm font-outfit">
              <p className="text-blanc/40">contact@maison-valfort.com</p>
              <p className="text-blanc/40">+33 6 73 04 09 43</p>
              <p className="text-blanc/40">24h/24 - 7J/7</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-blanc/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            <motion.p
              className={`text-blanc/30 text-xs font-outfit flex items-center gap-1 ${isRTL ? "flex-row-reverse" : ""}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Maison Valfort. {t.footer.madeWith}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 text-bordeaux fill-bordeaux" />
              </motion.span>
              {t.footer.in}
            </motion.p>
            <div className={`flex gap-6 text-xs font-outfit ${isRTL ? "flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/mentions-legales"
                  className="text-blanc/30 hover:text-bordeaux transition-colors"
                >
                  {t.footer.legal}
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/politique-confidentialite"
                  className="text-blanc/30 hover:text-bordeaux transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/cgv"
                  className="text-blanc/30 hover:text-bordeaux transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
