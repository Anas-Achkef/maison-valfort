"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Zap, Globe, Lock, ChevronDown, CheckCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

// Icône Bitcoin personnalisée
const BitcoinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c1.77-.45 2.34-1.94 2.34-2.88 0-.87-.42-1.74-1.32-2.14V5h-1.5v1.01c-.31 0-.63.02-.94.05V5h-1.5v1.14c-.38.08-.76.18-1.12.3l.43 1.43c.27-.1.56-.18.86-.24v3.36c-.34-.07-.68-.11-1.02-.11l-.38 1.48c.43.11.86.2 1.4.28v3.71c-.34.07-.68.11-1.02.11l-.38 1.48c.43.11.86.2 1.4.28V19h1.5v-1.01c.31 0 .63-.02.94-.05V19h1.5v-1.14c1.97-.49 2.85-1.82 2.85-3.12 0-1.56-.84-2.5-2.54-3.6zm-2.42-2.49c.31-.03.63-.05.94-.05v2.43c-.31.02-.63.05-.94.07V8.65zm0 6.7v-2.51c.31-.02.63-.05.94-.07v2.53c-.31.03-.63.05-.94.05zm2.44-.73c0 .5-.21.92-.62 1.19-.33.22-.71.35-1.13.43v-2.51c.65.16 1.03.37 1.26.64.25.31.49.68.49 1.25zm-.25-4.52c-.23.27-.57.48-1.01.64V8.69c.55.14.87.32 1.06.55.22.27.35.6.35.99 0 .45-.16.81-.4 1.07z"/>
  </svg>
);

// Icône Ethereum personnalisée
const EthereumIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.5L5.5 12 12 16l6.5-4L12 1.5zM5.5 13l6.5 9 6.5-9L12 17l-6.5-4z"/>
  </svg>
);

// Icône Tether (USDT) personnalisée
const TetherIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v2H8v2h3v5h2v-5h3v-2h-3V7z"/>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function CryptoPage() {
  const { t, isRTL } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);

  const cryptos = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      icon: BitcoinIcon,
      color: "bg-orange-500",
      description: t.bitcoin?.cryptos?.btc || "La première et plus reconnue des cryptomonnaies",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: EthereumIcon,
      color: "bg-indigo-500",
      description: t.bitcoin?.cryptos?.eth || "Plateforme de smart contracts la plus utilisée",
      image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&q=80",
    },
    {
      name: "USDT",
      symbol: "USDT",
      icon: TetherIcon,
      color: "bg-emerald-500",
      description: t.bitcoin?.cryptos?.usdt || "Stablecoin indexé sur le dollar américain",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    },
    {
      name: "USDC",
      symbol: "USDC",
      icon: TetherIcon,
      color: "bg-blue-500",
      description: t.bitcoin?.cryptos?.usdc || "Stablecoin régulé et audité",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: t.bitcoin?.benefits?.fast?.title || "Transactions Rapides",
      description: t.bitcoin?.benefits?.fast?.description || "Paiements confirmés en quelques minutes",
      details: t.bitcoin?.benefits?.fast?.details || "Les transactions crypto sont traitées 24h/24, 7j/7.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      icon: Shield,
      title: t.bitcoin?.benefits?.secure?.title || "Sécurité Maximale",
      description: t.bitcoin?.benefits?.secure?.description || "Technologie blockchain inviolable",
      details: t.bitcoin?.benefits?.secure?.details || "Chaque transaction est cryptée et enregistrée.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    },
    {
      icon: Globe,
      title: t.bitcoin?.benefits?.global?.title || "Sans Frontières",
      description: t.bitcoin?.benefits?.global?.description || "Payez depuis n'importe où",
      details: t.bitcoin?.benefits?.global?.details || "Pas de frais de change ni de conversion.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    },
    {
      icon: Lock,
      title: t.bitcoin?.benefits?.privacy?.title || "Confidentialité",
      description: t.bitcoin?.benefits?.privacy?.description || "Vos données restent privées",
      details: t.bitcoin?.benefits?.privacy?.details || "Pas besoin de partager vos informations bancaires.",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80",
    },
  ];

  const steps = [
    {
      number: "01",
      title: t.bitcoin?.steps?.contact?.title || "Contactez-nous",
      description: t.bitcoin?.steps?.contact?.description || "Indiquez votre souhait de payer en crypto",
    },
    {
      number: "02",
      title: t.bitcoin?.steps?.wallet?.title || "Recevez l'adresse",
      description: t.bitcoin?.steps?.wallet?.description || "Nous vous envoyons l'adresse du wallet",
    },
    {
      number: "03",
      title: t.bitcoin?.steps?.send?.title || "Effectuez le paiement",
      description: t.bitcoin?.steps?.send?.description || "Envoyez le montant depuis votre portefeuille",
    },
    {
      number: "04",
      title: t.bitcoin?.steps?.confirm?.title || "Confirmation",
      description: t.bitcoin?.steps?.confirm?.description || "Profitez de votre séjour",
    },
  ];

  const faqItems = [
    {
      question: t.bitcoin?.faq?.q1?.question || "Quelles cryptomonnaies acceptez-vous ?",
      answer: t.bitcoin?.faq?.q1?.answer || "Nous acceptons Bitcoin (BTC), Ethereum (ETH), USDT et USDC.",
    },
    {
      question: t.bitcoin?.faq?.q2?.question || "Comment est calculé le taux de change ?",
      answer: t.bitcoin?.faq?.q2?.answer || "Le taux est fixé au moment de la création de la facture.",
    },
    {
      question: t.bitcoin?.faq?.q3?.question || "Y a-t-il des frais supplémentaires ?",
      answer: t.bitcoin?.faq?.q3?.answer || "Aucun frais supplémentaire de notre part.",
    },
    {
      question: t.bitcoin?.faq?.q4?.question || "Que se passe-t-il si je paie le mauvais montant ?",
      answer: t.bitcoin?.faq?.q4?.answer || "Contactez-nous immédiatement pour résoudre le problème.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh]">
          <Image
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
            alt="Cryptocurrency"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/50 to-transparent" />

          {/* Back Button */}
          <Link
            href="/#bitcoin"
            className={`absolute top-24 ${isRTL ? "right-6" : "left-6"} z-20 flex items-center gap-2 text-blanc hover:text-or transition-colors`}
          >
            <ArrowLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            <span className="font-outfit">{t.nav.home === "Accueil" ? "Retour" : "Back"}</span>
          </Link>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-or text-sm tracking-[0.3em] uppercase mb-4 font-outfit"
              >
                {t.bitcoin?.badge || "Paiement Crypto"}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-blanc font-medium mb-4"
              >
                {t.bitcoin?.title || "Payez en"}{" "}
                <span className="text-or italic">{t.bitcoin?.titleHighlight || "Cryptomonnaie"}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blanc/80 max-w-2xl text-lg font-outfit"
              >
                {t.bitcoin?.subtitle || "Maison Valfort accepte les paiements en Bitcoin et autres cryptomonnaies."}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Cryptos Accepted */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-4">
                {t.bitcoin?.acceptedCryptos || "Cryptomonnaies acceptées"}
              </h2>
              <div className="w-24 h-px bg-bordeaux mx-auto" />
            </motion.div>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cryptos.map((crypto) => (
                <motion.div
                  key={crypto.symbol}
                  variants={cardVariants}
                  className="group relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-[240px] md:h-[280px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg">
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

                    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-10">
                      <div className={`absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-14 md:h-14 ${crypto.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <crypto.icon className="w-6 h-6 md:w-7 md:h-7 text-blanc" />
                      </div>

                      <h3 className="font-cormorant text-2xl md:text-3xl text-blanc font-medium mb-1">
                        {crypto.name}
                      </h3>
                      <p className="text-blanc/60 text-sm font-outfit mb-2">
                        {crypto.symbol}
                      </p>
                      <p className="text-blanc/70 text-sm leading-relaxed font-outfit">
                        {crypto.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-4">
                {t.bitcoin?.whyPay || "Pourquoi payer en crypto ?"}
              </h2>
              <div className="w-24 h-px bg-bordeaux mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setExpandedBenefit(expandedBenefit === index ? null : index)}
                >
                  <div className="relative h-[280px] md:h-[320px]">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-transparent" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-bordeaux/90 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-7 h-7 text-blanc" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-cormorant text-2xl text-blanc font-medium mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-blanc/80 font-outfit text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: expandedBenefit === index ? "auto" : 0,
                          opacity: expandedBenefit === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-blanc/70 text-sm font-outfit mt-4 pt-4 border-t border-blanc/20">
                          {benefit.details}
                        </p>
                      </motion.div>

                      <div className="flex items-center gap-2 mt-4 text-or text-sm">
                        <span className="font-outfit">
                          {expandedBenefit === index
                            ? (t.nav.home === "Accueil" ? "Réduire" : "Close")
                            : (t.nav.home === "Accueil" ? "En savoir plus" : "Learn more")
                          }
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedBenefit === index ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 bg-noir text-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-cormorant text-3xl md:text-4xl text-blanc font-medium mb-4">
                {t.bitcoin?.howItWorks || "Comment ça marche ?"}
              </h2>
              <div className="w-24 h-px bg-or mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-or/50 to-transparent" />
                  )}

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-bordeaux/20 border-2 border-bordeaux mb-6">
                      <span className="font-cormorant text-3xl text-or font-bold">{step.number}</span>
                    </div>
                    <h3 className="font-cormorant text-xl text-blanc font-medium mb-3">
                      {step.title}
                    </h3>
                    <p className="text-blanc/60 text-sm font-outfit">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-blanc/10 backdrop-blur-sm rounded-full">
                <CheckCircle className="w-5 h-5 text-or" />
                <span className="text-blanc/80 text-sm font-outfit">
                  {t.bitcoin?.note || "Disponible pour toutes nos prestations"}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28 bg-creme">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-4">
                {t.bitcoin?.faqTitle || "Questions fréquentes"}
              </h2>
              <div className="w-24 h-px bg-bordeaux mx-auto" />
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blanc rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className={`w-full px-6 py-5 flex items-center justify-between text-left ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <span className="font-outfit font-medium text-noir">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-bordeaux transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: openFaq === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-noir/60 font-outfit text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-bordeaux">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <BitcoinIcon className="w-16 h-16 text-or mx-auto mb-6" />
              <h2 className="font-cormorant text-3xl md:text-4xl text-blanc font-medium mb-6">
                {t.nav.home === "Accueil"
                  ? "Prêt à payer en cryptomonnaie ?"
                  : "Ready to pay with cryptocurrency?"}
              </h2>
              <p className="text-blanc/80 font-outfit mb-8 max-w-2xl mx-auto">
                {t.nav.home === "Accueil"
                  ? "Contactez notre équipe pour effectuer votre paiement en Bitcoin, Ethereum ou stablecoin."
                  : "Contact our team to make your payment in Bitcoin, Ethereum or stablecoin."}
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <motion.a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-blanc text-bordeaux font-medium hover:bg-or hover:text-noir transition-colors duration-300 rounded-lg ${isRTL ? "flex-row-reverse" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BitcoinIcon className="w-5 h-5" />
                  <span className="font-outfit">{t.bitcoin?.cta || "Payer en crypto"}</span>
                </motion.a>
                <motion.a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 border border-blanc/30 text-blanc hover:bg-blanc/10 transition-colors duration-300 rounded-lg ${isRTL ? "flex-row-reverse" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-outfit">{t.bitcoin?.ctaQuestion || "Des questions ?"}</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
