"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -150,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Bitcoin() {
  const { t, isRTL } = useLanguage();

  const cryptos = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      description: t.bitcoin?.cryptos?.btc || "La première et plus reconnue des cryptomonnaies",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      description: t.bitcoin?.cryptos?.eth || "Plateforme de smart contracts la plus utilisée",
      image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&q=80",
    },
    {
      name: "USDT",
      symbol: "USDT",
      description: t.bitcoin?.cryptos?.usdt || "Stablecoin indexé sur le dollar américain",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    },
    {
      name: "USDC",
      symbol: "USDC",
      description: t.bitcoin?.cryptos?.usdc || "Stablecoin régulé et audité",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80",
    },
  ];

  return (
    <section id="bitcoin" className="py-32 bg-creme relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-bordeaux/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-bordeaux/5 via-transparent to-transparent" />
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
            transition={{ duration: 0.6 }}
          >
            {t.bitcoin?.badge || "Paiement Crypto"}
          </motion.span>
          <motion.h2
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-noir font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.bitcoin?.title || "Payez en"}{" "}
            <span className="text-bordeaux italic">
              {t.bitcoin?.titleHighlight || "Cryptomonnaie"}
            </span>
          </motion.h2>
          <motion.p
            className="text-noir/70 max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-cormorant font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.bitcoin?.subtitle || "Maison Valfort accepte les paiements en Bitcoin et autres cryptomonnaies."}
          </motion.p>
        </motion.div>

        {/* Cryptos acceptées */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-noir/60 text-sm uppercase tracking-[0.2em] mb-10 font-outfit">
            {t.bitcoin?.acceptedCryptos || "Cryptomonnaies acceptées"}
          </h3>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
          >
            {cryptos.map((crypto) => (
              <motion.div
                key={crypto.symbol}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[200px] md:h-[240px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg">
                  {/* Image de fond */}
                  <div className="absolute inset-0">
                    <Image
                      src={crypto.image}
                      alt={crypto.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>

                  {/* Contenu */}
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-10">
                    <h4 className="font-cormorant text-xl md:text-2xl text-blanc font-medium mb-1">
                      {crypto.name}
                    </h4>
                    <p className="text-blanc/60 text-xs md:text-sm font-outfit mb-2">
                      {crypto.symbol}
                    </p>
                    <p className="text-blanc/70 text-xs leading-relaxed font-outfit hidden md:block">
                      {crypto.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bouton En savoir plus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/crypto">
            <motion.button
              className={`inline-flex items-center gap-3 px-8 py-4 bg-bordeaux text-blanc font-medium hover:bg-noir transition-colors duration-300 group ${isRTL ? "flex-row-reverse" : ""}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-outfit">{t.bitcoin?.viewAll || "En savoir plus"}</span>
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180" : ""}`} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
