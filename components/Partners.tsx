"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { name: "Airbnb", logo: "AIRBNB" },
  { name: "Booking.com", logo: "BOOKING" },
  { name: "Vrbo", logo: "VRBO" },
  { name: "Expedia", logo: "EXPEDIA" },
  { name: "Abritel", logo: "ABRITEL" },
  { name: "TripAdvisor", logo: "TRIPADVISOR" },
];

export default function Partners() {
  const { t, isRTL } = useLanguage();
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-blanc border-y border-noir/5 relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-noir/30 text-sm tracking-[0.3em] uppercase font-outfit">
          {t.partners.badge}
        </span>
      </motion.div>

      {/* Scroll animé */}
      <div className="relative">
        {/* Gradient gauche */}
        <div className={`absolute ${isRTL ? "right-0" : "left-0"} top-0 bottom-0 w-32 bg-gradient-to-${isRTL ? "l" : "r"} from-blanc to-transparent z-10`} />
        {/* Gradient droite */}
        <div className={`absolute ${isRTL ? "left-0" : "right-0"} top-0 bottom-0 w-32 bg-gradient-to-${isRTL ? "r" : "l"} from-blanc to-transparent z-10`} />

        <div className="flex animate-scroll">
          {doubledPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12 flex items-center justify-center"
            >
              <span className="text-2xl md:text-3xl font-cormorant text-noir/20 hover:text-bordeaux/40 transition-colors duration-500 whitespace-nowrap tracking-wider">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats rapides */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mt-16 grid grid-cols-3 gap-8 text-center"
      >
        <div>
          <div className="text-3xl md:text-4xl font-cormorant text-bordeaux mb-2">6+</div>
          <div className="text-noir/40 text-sm font-outfit">Plateformes</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-cormorant text-bordeaux mb-2">98%</div>
          <div className="text-noir/40 text-sm font-outfit">Visibilité</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-cormorant text-bordeaux mb-2">+40%</div>
          <div className="text-noir/40 text-sm font-outfit">Réservations</div>
        </div>
      </motion.div>
    </section>
  );
}
