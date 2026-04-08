"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const experienceData = {
  chef: {
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80",
    href: "/experiences/chef-domicile",
  },
  driver: {
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
    href: "/experiences/chauffeur-prive",
  },
  spa: {
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    href: "/experiences/spa-bien-etre",
  },
  nautical: {
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    href: "/experiences/activites-nautiques",
  },
  excursions: {
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=80",
    href: "/experiences/excursions-privees",
  },
  reservations: {
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    href: "/experiences/reservations-vip",
  },
  concierge: {
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    href: "/experiences/conciergerie-voyage",
  },
  photographer: {
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    href: "/experiences/photographe-prive",
  },
};

const experienceKeys = ["chef", "driver", "spa", "nautical", "excursions", "reservations", "concierge", "photographer"] as const;

// Directions d'animation pour chaque carte (x, y)
const animationDirections = [
  { x: -120, y: -80 },   // haut-gauche
  { x: 0, y: -120 },     // haut
  { x: 120, y: -80 },    // haut-droite
  { x: 150, y: 0 },      // droite
  { x: -150, y: 0 },     // gauche
  { x: -120, y: 80 },    // bas-gauche
  { x: 0, y: 120 },      // bas
  { x: 120, y: 80 },     // bas-droite
];

export default function Experiences() {
  const { t, isRTL } = useLanguage();

  const experiences = experienceKeys.map((key, index) => ({
    id: index + 1,
    key,
    title: t.experiences.items[key].title,
    description: t.experiences.items[key].description,
    price: t.experiences.items[key].price,
    image: experienceData[key].image,
    href: experienceData[key].href,
  }));

  return (
    <section id="experiences" className="py-32 bg-blanc relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-bordeaux/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-or/10 via-transparent to-transparent" />
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
            {t.experiences.badge}
          </motion.span>
          <motion.h2
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-noir font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t.experiences.title.split(" ")[0]}{" "}
            <span className="text-bordeaux italic">{t.experiences.title.split(" ").slice(1).join(" ")}</span>
          </motion.h2>
          <motion.p
            className="text-noir/70 max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-cormorant font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.experiences.subtitle}
          </motion.p>
        </motion.div>

        {/* Grille d'expériences avec images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => {
            const direction = animationDirections[index % animationDirections.length];
            return (
              <motion.div
                key={experience.id}
                initial={{
                  opacity: 0,
                  x: direction.x,
                  y: direction.y,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1
                }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group relative"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-[280px] md:h-[380px] lg:h-[450px] overflow-hidden shadow-xl rounded-lg">
                  {/* Image de fond - plus grande et visible */}
                  <div className="absolute inset-0">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Overlay gradient plus léger pour voir l'image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent group-hover:via-noir/50 transition-all duration-500" />
                  </div>

                  {/* Contenu en bas */}
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 lg:p-6 z-10">

                    {/* Titre */}
                    <h3 className="font-cormorant text-xl md:text-2xl lg:text-3xl text-blanc font-semibold mb-2 md:mb-3 group-hover:text-or transition-colors duration-300 drop-shadow-lg">
                      {experience.title}
                    </h3>

                    {/* Description */}
                    <p className="text-blanc/80 text-xs md:text-sm leading-relaxed mb-3 md:mb-5 font-outfit line-clamp-2 group-hover:text-blanc transition-colors duration-300">
                      {experience.description}
                    </p>

                    {/* Prix & Lien */}
                    <div className={`flex items-center justify-between pt-3 md:pt-4 border-t border-blanc/20 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="text-or text-sm md:text-base font-outfit font-semibold">{experience.price}</span>
                      <Link href={experience.href}>
                        <motion.div
                          whileHover={{ x: 3, y: -3 }}
                          className="w-8 h-8 md:w-10 md:h-10 bg-blanc/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-or transition-all duration-300"
                        >
                          <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 text-blanc group-hover:text-noir transition-colors duration-300 ${isRTL ? "rotate-90" : ""}`} />
                        </motion.div>
                      </Link>
                    </div>
                  </div>

                  {/* Bordure au hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-or/50 rounded-lg transition-all duration-500 pointer-events-none" />

                  {/* Lien invisible sur toute la carte */}
                  <Link href={experience.href} className="absolute inset-0 z-30" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className={`inline-flex flex-col sm:flex-row items-center gap-4 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-bordeaux text-blanc font-medium hover:bg-noir transition-colors duration-300 font-outfit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.experiences.bookExperience}
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-noir/20 text-noir hover:border-bordeaux hover:text-bordeaux transition-all duration-300 font-outfit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.experiences.createCustom}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
