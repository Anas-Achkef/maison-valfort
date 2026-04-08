"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Témoignages internationaux - chaque client s'exprime dans sa langue
const testimonials = [
  // Clients français
  {
    quote: "Un service irréprochable. Notre appartement n'a jamais été aussi bien géré.",
    author: "Marie D.",
    location: "Paris 16ème",
    rating: 5,
  },
  {
    quote: "Professionnalisme et réactivité exceptionnels. Je recommande vivement.",
    author: "Laurent P.",
    location: "Neuilly-sur-Seine",
    rating: 5,
  },
  {
    quote: "Enfin une conciergerie qui comprend nos exigences.",
    author: "Sophie M.",
    location: "Boulogne-Billancourt",
    rating: 5,
  },
  // Clients anglais
  {
    quote: "Impeccable service. Our apartment has never been managed so well.",
    author: "James W.",
    location: "London, UK",
    rating: 5,
  },
  {
    quote: "Exceptional professionalism and responsiveness. Highly recommended.",
    author: "Sarah K.",
    location: "New York, USA",
    rating: 5,
  },
  // Clients espagnols
  {
    quote: "Un servicio impecable. Nuestro apartamento nunca ha sido tan bien gestionado.",
    author: "Carlos M.",
    location: "Madrid, España",
    rating: 5,
  },
  {
    quote: "Profesionalismo excepcional. Lo recomiendo encarecidamente.",
    author: "Isabel G.",
    location: "Marbella, España",
    rating: 5,
  },
  // Clients russes
  {
    quote: "Безупречный сервис. Нашей квартирой никогда не управляли так хорошо.",
    author: "Анна К.",
    location: "Москва, Россия",
    rating: 5,
  },
  {
    quote: "Исключительный профессионализм. Настоятельно рекомендую.",
    author: "Дмитрий П.",
    location: "Санкт-Петербург",
    rating: 5,
  },
  // Clients arabes
  {
    quote: "خدمة لا تشوبها شائبة. أوصي به بشدة.",
    author: "أحمد م.",
    location: "دبي، الإمارات",
    rating: 5,
  },
];

export default function Testimonials() {
  const { t, isRTL } = useLanguage();
  const [current, setCurrent] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-bordeaux relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Éléments décoratifs animés */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 border border-blanc/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 border border-blanc/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-blanc/10 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-blanc/20 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-blanc/40 text-sm tracking-[0.3em] uppercase mb-4 font-outfit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.testimonials.badge}
          </motion.span>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-semibold text-blanc mb-4">
            {t.testimonials.title}
          </h2>
          <motion.div
            className="w-20 h-1 bg-blanc/50 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Carrousel */}
        <div className="relative">
          {/* Quote icon animé */}
          <motion.div
            animate={{ rotate: [0, 5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className={isRTL ? "absolute -top-8 right-0" : ""}
          >
            <Quote className={`${isRTL ? "" : "absolute -top-8 left-0"} w-16 h-16 text-blanc/20`} />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              {/* Étoiles */}
              <div className={`flex justify-center gap-1 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-blanc/80 text-blanc/80" />
                  </motion.div>
                ))}
              </div>

              <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-blanc italic leading-relaxed mb-6 md:mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="text-blanc/80 font-outfit">
                <motion.span
                  className="font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {testimonials[current].author}
                </motion.span>
                <span className="mx-2">•</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {testimonials[current].location}
                </motion.span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Barre de progression */}
          <div className="w-full h-0.5 bg-blanc/10 mt-8 overflow-hidden">
            <motion.div
              key={current}
              className="h-full bg-blanc/50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>

          {/* Navigation */}
          <div className={`flex items-center justify-center gap-4 mt-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            <motion.button
              onClick={prev}
              className="p-2 border border-blanc/30 text-blanc hover:bg-blanc hover:text-bordeaux transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className={`w-6 h-6 ${isRTL ? "rotate-180" : ""}`} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? "bg-blanc" : "bg-blanc/30"
                  }`}
                  whileHover={{ scale: 1.3 }}
                  animate={index === current ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-2 border border-blanc/30 text-blanc hover:bg-blanc hover:text-bordeaux transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Témoignage suivant"
            >
              <ChevronRight className={`w-6 h-6 ${isRTL ? "rotate-180" : ""}`} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
