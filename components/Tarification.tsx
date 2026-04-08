"use client";

import { motion } from "framer-motion";
import { Check, Crown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Animation container avec stagger pour les enfants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Animation de flou vers net pour le texte
const blurToSharpVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

// Animation spéciale pour le pourcentage (plus dramatique)
const percentageVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(30px)",
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

// Animation pour les features (avec flou léger)
const featureVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    x: -20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Tarification() {
  const { t, isRTL } = useLanguage();

  // Features from translations
  const features = [
    t.pricing.features.listingsManagement,
    t.pricing.features.reservationsManagement,
    t.pricing.features.travelerCommunication,
    t.pricing.features.checkInOut,
    t.pricing.features.hotelCleaning,
    t.pricing.features.photoShooting,
    t.pricing.features.concierge7,
    t.pricing.features.rentGuarantee,
  ];

  return (
    <section id="tarification" className="py-32 bg-blanc relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-bordeaux/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* En-tête avec animation de flou vers net */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={blurToSharpVariants}
            className="inline-block text-bordeaux/60 text-sm tracking-[0.3em] uppercase mb-6 font-outfit"
          >
            {t.pricing.badge}
          </motion.span>
          <motion.h2
            variants={blurToSharpVariants}
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-noir font-medium mb-6"
          >
            {t.pricing.title}
          </motion.h2>
          <motion.p
            variants={blurToSharpVariants}
            className="text-noir/50 max-w-2xl mx-auto text-lg font-outfit font-light"
          >
            {t.pricing.subtitle}
          </motion.p>
        </motion.div>

        {/* Plan Excellence unique */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="relative"
        >
          {/* Badge */}
          <motion.div
            variants={blurToSharpVariants}
            className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
          >
            <span className="px-6 py-2 bg-bordeaux text-blanc text-sm font-medium tracking-wider">
              {t.pricing.uniqueFormula}
            </span>
          </motion.div>

          <motion.div
            variants={blurToSharpVariants}
            className="p-10 md:p-12 bg-gradient-to-b from-bordeaux/10 to-blanc border border-bordeaux/30 shadow-xl"
          >
            {/* Icône et nom */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, filter: "blur(15px)", scale: 0.5 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-6 border border-bordeaux/40 flex items-center justify-center"
              >
                <Crown className="w-7 h-7 text-bordeaux" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-cormorant text-3xl md:text-4xl text-noir mb-2"
              >
                {t.pricing.excellence}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-noir/50 text-sm font-outfit"
              >
                {t.pricing.forExceptional}
              </motion.p>
            </div>

            {/* Commission avec animation spéciale */}
            <div className="text-center mb-10">
              <motion.span
                variants={percentageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="text-6xl md:text-7xl font-cormorant text-bordeaux inline-block"
              >
                20%
              </motion.span>
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-noir/50 text-lg ml-2 font-outfit"
              >
                {t.pricing.commission}
              </motion.span>
            </div>

            {/* Features en 2 colonnes avec animation flou */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-30px" }}
              className="grid md:grid-cols-2 gap-4 mb-10"
            >
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  variants={featureVariants}
                  className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <Check className="w-5 h-5 flex-shrink-0 text-bordeaux" />
                  <span className="text-noir/70 font-outfit">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA avec animation flou */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center gap-3 w-full py-5 bg-bordeaux text-blanc font-medium text-lg hover:bg-bordeaux/90 transition-all duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              {t.pricing.cta}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Note avec animation de flou */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-noir/40 text-sm mt-10 font-outfit"
        >
          {t.pricing.noCommitment}
        </motion.p>
      </div>
    </section>
  );
}
