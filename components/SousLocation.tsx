"use client";

import { motion } from "framer-motion";
import { Home, Shield, Banknote, CalendarCheck, Handshake, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SousLocation() {
  const { t, isRTL } = useLanguage();

  const avantages = [
    {
      icon: Banknote,
      titleKey: "guaranteed" as const,
    },
    {
      icon: Shield,
      titleKey: "noRisk" as const,
    },
    {
      icon: CalendarCheck,
      titleKey: "fullManagement" as const,
    },
    {
      icon: Handshake,
      titleKey: "secureLease" as const,
    },
  ];

  const etapes = [
    { title: t.subletting.steps.estimate, desc: t.subletting.benefits.guaranteed.description.split('.')[0] },
    { title: t.subletting.steps.proposal, desc: t.subletting.benefits.noRisk.description.split('.')[0] },
    { title: t.subletting.steps.signature, desc: t.subletting.benefits.secureLease.description.split('.')[0] },
    { title: t.subletting.steps.income, desc: t.subletting.benefits.guaranteed.description },
  ];

  return (
    <section id="souslocation" className="py-32 bg-creme relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-bordeaux/5 via-transparent to-transparent"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-bordeaux/5 via-transparent to-transparent"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-bordeaux/60 text-sm tracking-[0.3em] uppercase mb-6 font-outfit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.subletting.badge}
          </motion.span>
          <motion.h2
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-noir font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t.subletting.title.split(',')[0]}, <span className="text-bordeaux italic">{t.subletting.title.split(',')[1]?.trim() || ""}</span>
          </motion.h2>
          <motion.p
            className="text-noir/70 max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-cormorant font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.subletting.subtitle}
          </motion.p>
        </motion.div>

        {/* Section principale avec illustration */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 ${isRTL ? "lg:grid-flow-dense" : ""}`}>
          {/* Colonne gauche - Avantages (arrive du haut) */}
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-6">
              {avantages.map((avantage, index) => {
                const Icon = avantage.icon;
                const benefit = t.subletting.benefits[avantage.titleKey];
                return (
                  <motion.div
                    key={avantage.titleKey}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + index * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{ x: isRTL ? -8 : 8, scale: 1.02 }}
                    className={`flex gap-5 p-6 bg-blanc border border-noir/5 hover:border-bordeaux/30 shadow-sm hover:shadow-md transition-all duration-300 group ${isRTL ? "flex-row-reverse text-right" : ""}`}
                  >
                    <div className="w-12 h-12 bg-bordeaux/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-bordeaux/20 transition-colors">
                      <Icon className="w-6 h-6 text-bordeaux" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl text-noir mb-2 group-hover:text-bordeaux transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-noir/50 text-sm font-outfit">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Colonne droite - Card visuelle (arrive du bas) */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative bg-blanc border border-noir/5 shadow-lg p-10">
              {/* Icône décorative */}
              <motion.div
                className={`absolute -top-8 ${isRTL ? "-left-8" : "-right-8"} w-24 h-24 bg-bordeaux rounded-full flex items-center justify-center shadow-lg`}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Home className="w-10 h-10 text-blanc" />
              </motion.div>

              <h3 className={`font-cormorant text-3xl text-noir mb-6 ${isRTL ? "text-right" : ""}`}>
                {t.common.learnMore}
              </h3>

              <div className="space-y-6">
                {etapes.map((etape, index) => (
                  <motion.div
                    key={etape.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 + index * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={isRTL ? "text-right" : ""}
                  >
                    <h4 className="text-noir font-medium mb-1">{etape.title}</h4>
                    <p className="text-noir/40 text-sm font-outfit">{etape.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Points clés */}
              <div className="mt-8 pt-8 border-t border-noir/10">
                <div className={`flex flex-wrap gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {[t.subletting.benefits.guaranteed.title, t.subletting.benefits.secureLease.title, t.subletting.benefits.noRisk.title].map((point, i) => (
                    <span
                      key={i}
                      className={`flex items-center gap-2 text-sm text-noir/60 font-outfit ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <Check className="w-4 h-4 text-bordeaux" />
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Élément décoratif */}
            <div className={`absolute -bottom-4 ${isRTL ? "-right-4" : "-left-4"} w-full h-full border border-bordeaux/20 -z-10`} />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-noir/40 text-sm font-outfit mb-6">
            {t.subletting.subtitle}
          </p>
          <motion.a
            href="/sous-location"
            className={`inline-flex items-center gap-3 px-10 py-5 bg-bordeaux text-blanc hover:bg-bordeaux/90 transition-all duration-300 group ${isRTL ? "flex-row-reverse" : ""}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium tracking-wide">{t.subletting.cta}</span>
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180" : ""}`} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
