"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// Animation des cartes avec effet de "deal" (distribution)
const getCardVariants = (index: number) => {
  // Différentes directions d'entrée selon la position
  const directions = [
    { x: -100, y: -50, rotate: -8 },   // Haut gauche
    { x: 0, y: -80, rotate: 0 },       // Haut centre
    { x: 100, y: -50, rotate: 8 },     // Haut droite
    { x: -100, y: 50, rotate: 8 },     // Bas gauche
    { x: 0, y: 80, rotate: 0 },        // Bas centre
    { x: 100, y: 50, rotate: -8 },     // Bas droite
  ];

  const dir = directions[index % 6];

  return {
    hidden: {
      opacity: 0,
      x: dir.x,
      y: dir.y,
      rotate: dir.rotate,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };
};

export default function Services() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      titleKey: "photos" as const,
      descriptionKey: "photos" as const,
      features: ["HD", "360°", "Drone"],
      image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
      href: "/services/shooting-photo",
    },
    {
      titleKey: "listings" as const,
      descriptionKey: "listings" as const,
      features: ["Multi-plateformes", "SEO", "Reporting"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      href: "/services/annonces-optimisees",
    },
    {
      titleKey: "pricing" as const,
      descriptionKey: "pricing" as const,
      features: ["Revenue management", "Analyse", "+40%"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      href: "/services/tarification-dynamique",
    },
    {
      titleKey: "welcome" as const,
      descriptionKey: "welcome" as const,
      features: ["24/7", "Multilingue", "Welcome pack"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      href: "/services/accueil-voyageurs",
    },
    {
      titleKey: "cleaning" as const,
      descriptionKey: "cleaning" as const,
      features: ["Qualité hôtelière", "Linge fourni", "Produits éco"],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      href: "/services/menage-hotelier",
    },
    {
      titleKey: "maintenance" as const,
      descriptionKey: "maintenance" as const,
      features: ["24h", "Artisans", "Préventif"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      href: "/services/maintenance",
    },
  ];

  return (
    <section id="services" className="py-32 bg-creme relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-bordeaux/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-bordeaux/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête de section */}
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
            transition={{ duration: 0.6 }}
          >
            {t.services.badge}
          </motion.span>
          <motion.h2
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-noir font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.services.title.split("d'")[0]}
            <span className="text-bordeaux italic">
              {t.services.title.includes("d'") ? "d'" + t.services.title.split("d'")[1] : ""}
            </span>
          </motion.h2>
          <motion.p
            className="text-noir/70 max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-cormorant font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.services.subtitle}
          </motion.p>
        </motion.div>

        {/* Grille de services avec effet rideau */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const serviceItem = t.services.items[service.titleKey];
            return (
              <motion.div
                key={service.titleKey}
                variants={getCardVariants(index)}
                className="group relative"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[260px] md:h-[340px] lg:h-[400px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg">
                  {/* Image de fond */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={serviceItem.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>

                  {/* Contenu */}
                  <div className="absolute inset-0 p-5 md:p-6 lg:p-8 flex flex-col justify-end z-10">
                    {/* Titre */}
                    <motion.h3
                      className="font-cormorant text-xl md:text-2xl lg:text-3xl text-blanc font-medium mb-2 md:mb-3 group-hover:text-or transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      {serviceItem.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-blanc/70 text-xs md:text-sm leading-relaxed mb-3 md:mb-5 font-outfit group-hover:text-blanc/90 transition-colors duration-300 line-clamp-2"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      {serviceItem.description}
                    </motion.p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-5">
                      {service.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.4 + index * 0.1 + idx * 0.08, duration: 0.4 }}
                          className="text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 bg-blanc/10 backdrop-blur-sm text-blanc/80 rounded-full font-outfit border border-blanc/10 group-hover:bg-bordeaux/30 group-hover:border-bordeaux/50 transition-all duration-300"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* Lien */}
                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-2 text-or text-sm font-outfit group-hover:text-blanc transition-colors duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <motion.span
                        className="flex items-center gap-2"
                        whileHover={{ x: isRTL ? -5 : 5 }}
                      >
                        {t.common.learnMore}
                        <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rotate-90" : ""}`} />
                      </motion.span>
                    </Link>
                  </div>

                  {/* Bordure décorative au hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-or/30 transition-all duration-500 pointer-events-none rounded-lg" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className={`inline-flex items-center gap-3 px-8 py-4 bg-bordeaux text-blanc hover:bg-noir transition-all duration-300 relative overflow-hidden group ${isRTL ? "flex-row-reverse" : ""}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 font-outfit">{t.simulator.results.cta}</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rotate-90" : ""}`} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
