"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import { Award, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Animation de zoom pour l'image de fond basée sur le scroll
  // L'image commence à 0.9 et grossit légèrement jusqu'à 1 en scrollant (moins de zoom)
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.4], [0.3, 0.8]);

  return (
    <section
      id="apropos"
      ref={sectionRef}
      className="py-24 overflow-hidden relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Image de fond avec effet flou et animation de zoom au scroll */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            scale: backgroundScale,
            opacity: backgroundOpacity,
          }}
        >
          <Image
            src="/spa-lux.jpg"
            alt=""
            fill
            className="object-cover blur-[1px]"
            priority
          />
        </motion.div>
        {/* Overlay clair pour lisibilité du texte */}
        <div className="absolute inset-0 bg-blanc/60" />
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-bordeaux/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-20 h-20 bg-bordeaux/5 rounded-full"
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-bordeaux/30 rounded-full"
          animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isRTL ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image avec animation élégante */}
          <motion.div
            className={`relative ${isRTL ? "lg:col-start-2" : ""}`}
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            style={{ y: imageY }}
          >
            <motion.div
              className="relative aspect-[4/3] overflow-hidden group rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image principale du spa avec vue mer */}
              <div className="absolute inset-0">
                <Image
                  src="/spa-lux.jpg"
                  alt="Spa de luxe Maison Valfort"
                  fill
                  className="object-cover object-center"
                  priority
                  quality={100}
                />
              </div>

              {/* Effet de brillance qui traverse l'image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 5,
                }}
              />

              {/* Overlay gradient bordeaux subtil */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-bordeaux/40 via-transparent to-transparent"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Badge flottant premium avec animation */}
            <motion.div
              className={`absolute -bottom-4 ${isRTL ? "-left-4" : "-right-4"}`}
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="bg-bordeaux text-blanc p-5 shadow-2xl rounded-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Award className="w-7 h-7" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contenu texte */}
          <div className={`${isRTL ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block text-bordeaux text-sm tracking-[0.3em] uppercase mb-4 font-outfit font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t.about.badge}
              </motion.span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-noir mb-6 drop-shadow-sm">
                {t.about.title}
              </h2>

              <p className="text-noir text-lg leading-relaxed mb-6 font-outfit font-medium">
                {t.about.description}
              </p>

              <motion.p
                className="text-noir leading-relaxed mb-12 italic font-cormorant text-xl font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                &ldquo;{t.about.quote}&rdquo;
              </motion.p>

              {/* Valeurs avec icônes */}
              <motion.div
                className={`flex flex-wrap gap-4 md:gap-6 mb-12 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  { icon: Shield, label: t.about.values.trust },
                  { icon: Heart, label: t.about.values.passion },
                  { icon: Award, label: t.about.values.excellence },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className={`flex items-center gap-2 text-noir ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                    whileHover={{ scale: 1.05, color: "#6D0303" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-bordeaux" />
                    <span className="text-xs md:text-sm font-outfit font-semibold">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Compteurs avec animation améliorée */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 md:gap-8"
            >
              <div className="text-center">
                <AnimatedCounter end={50} suffix="+" label={t.about.stats.properties} />
              </div>
              <div className="text-center">
                <AnimatedCounter end={98} suffix="%" label={t.about.stats.satisfaction} />
              </div>
              <div className="text-center">
                <AnimatedCounter end={24} suffix="/7" label={t.about.stats.availability} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lignes décoratives bordeaux */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bordeaux/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bordeaux/30 to-transparent" />
    </section>
  );
}
