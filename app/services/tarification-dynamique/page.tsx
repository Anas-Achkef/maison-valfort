"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, ArrowLeft, Star, BarChart3, Calendar, PieChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function TarificationDynamiquePage() {
  const { t, isRTL } = useLanguage();

  const serviceDetails = {
    fr: {
      badge: "Service Premium",
      title: "Tarification Dynamique",
      subtitle: "Maximisez vos revenus grâce à l'intelligence artificielle et l'analyse en temps réel du marché",
      intro: "Notre algorithme de tarification dynamique analyse en permanence des centaines de facteurs pour ajuster automatiquement vos prix. Résultat : jusqu'à 40% de revenus supplémentaires tout en maintenant un taux d'occupation optimal.",

      whatWeOffer: "Ce que nous offrons",
      offers: [
        {
          icon: BarChart3,
          title: "Algorithme Intelligent",
          description: "Notre IA analyse la saisonnalité, les événements locaux, la concurrence et la demande en temps réel pour calculer le prix optimal chaque nuit.",
        },
        {
          icon: TrendingUp,
          title: "Revenue Management",
          description: "Stratégies éprouvées du secteur hôtelier appliquées à votre location. Maximisation du RevPAR (revenu par nuit disponible).",
        },
        {
          icon: Calendar,
          title: "Anticipation Saisonnière",
          description: "Ajustement automatique selon les périodes : vacances scolaires, ponts, festivals locaux, saison touristique.",
        },
        {
          icon: PieChart,
          title: "Analyse Concurrentielle",
          description: "Surveillance continue des prix de la concurrence locale pour rester compétitif tout en maximisant vos marges.",
        },
      ],

      processTitle: "Comment ça fonctionne",
      process: [
        {
          step: "01",
          title: "Analyse",
          description: "Notre algorithme collecte les données du marché, de la concurrence et des tendances de réservation.",
        },
        {
          step: "02",
          title: "Calcul",
          description: "L'IA calcule le prix optimal pour chaque nuit en fonction de centaines de paramètres.",
        },
        {
          step: "03",
          title: "Ajustement",
          description: "Les prix sont mis à jour automatiquement sur toutes les plateformes en temps réel.",
        },
        {
          step: "04",
          title: "Optimisation",
          description: "Apprentissage continu : l'algorithme s'améliore avec chaque réservation.",
        },
      ],

      benefitsTitle: "Résultats prouvés",
      benefits: [
        "Augmentation moyenne des revenus de 40%",
        "Taux d'occupation optimisé toute l'année",
        "Plus de revenus pendant les périodes de forte demande",
        "Réservations maintenues en basse saison",
        "Zéro gestion manuelle des prix",
        "Rapports détaillés et recommandations",
      ],

      factorsTitle: "Facteurs analysés",
      factors: [
        "Saisonnalité et périodes de vacances",
        "Événements locaux (concerts, salons, matchs...)",
        "Météo et prévisions",
        "Prix de la concurrence en temps réel",
        "Historique de vos réservations",
        "Durée de séjour moyenne demandée",
        "Délai avant la date d'arrivée",
        "Jour de la semaine (week-end vs semaine)",
      ],

      galleryTitle: "Nos Performances",

      ctaTitle: "Prêt à maximiser vos revenus ?",
      ctaSubtitle: "Découvrez le potentiel de votre bien avec notre tarification intelligente",
      ctaButton: "Demander une estimation",
      backButton: "Retour aux services",
    },
    en: {
      badge: "Premium Service",
      title: "Dynamic Pricing",
      subtitle: "Maximize your revenue with artificial intelligence and real-time market analysis",
      intro: "Our dynamic pricing algorithm continuously analyzes hundreds of factors to automatically adjust your prices. Result: up to 40% additional revenue while maintaining optimal occupancy rate.",

      whatWeOffer: "What We Offer",
      offers: [
        {
          icon: BarChart3,
          title: "Intelligent Algorithm",
          description: "Our AI analyzes seasonality, local events, competition and real-time demand to calculate the optimal price each night.",
        },
        {
          icon: TrendingUp,
          title: "Revenue Management",
          description: "Proven hotel industry strategies applied to your rental. RevPAR (revenue per available night) maximization.",
        },
        {
          icon: Calendar,
          title: "Seasonal Anticipation",
          description: "Automatic adjustment according to periods: school holidays, long weekends, local festivals, tourist season.",
        },
        {
          icon: PieChart,
          title: "Competitive Analysis",
          description: "Continuous monitoring of local competition prices to stay competitive while maximizing your margins.",
        },
      ],

      processTitle: "How It Works",
      process: [
        {
          step: "01",
          title: "Analysis",
          description: "Our algorithm collects market data, competition and booking trends.",
        },
        {
          step: "02",
          title: "Calculation",
          description: "AI calculates the optimal price for each night based on hundreds of parameters.",
        },
        {
          step: "03",
          title: "Adjustment",
          description: "Prices are automatically updated on all platforms in real-time.",
        },
        {
          step: "04",
          title: "Optimization",
          description: "Continuous learning: the algorithm improves with each booking.",
        },
      ],

      benefitsTitle: "Proven Results",
      benefits: [
        "Average revenue increase of 40%",
        "Optimized occupancy rate year-round",
        "More revenue during high-demand periods",
        "Bookings maintained in low season",
        "Zero manual price management",
        "Detailed reports and recommendations",
      ],

      factorsTitle: "Analyzed Factors",
      factors: [
        "Seasonality and holiday periods",
        "Local events (concerts, fairs, matches...)",
        "Weather and forecasts",
        "Real-time competition prices",
        "Your booking history",
        "Average requested stay duration",
        "Lead time before arrival date",
        "Day of week (weekend vs weekday)",
      ],

      galleryTitle: "Our Performance",

      ctaTitle: "Ready to maximize your revenue?",
      ctaSubtitle: "Discover your property's potential with our intelligent pricing",
      ctaButton: "Request an estimate",
      backButton: "Back to services",
    },
  };

  const content = serviceDetails[isRTL ? "fr" : (t.nav.home === "Accueil" ? "fr" : "en")];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
              alt="Analytics dashboard"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-noir/60 to-noir/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/#services"
                className={`inline-flex items-center gap-2 text-blanc/70 hover:text-or transition-colors mb-8 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                {content.backButton}
              </Link>
            </motion.div>

            <motion.span
              className="inline-block text-or text-sm tracking-[0.3em] uppercase mb-4 font-outfit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.badge}
            </motion.span>

            <motion.h1
              className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-blanc font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.title}
            </motion.h1>

            <motion.p
              className="text-blanc/80 text-xl md:text-2xl font-cormorant max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.p
              className="text-noir/80 text-lg md:text-xl leading-relaxed font-outfit text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.intro}
            </motion.p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.whatWeOffer}
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {content.offers.map((offer, index) => {
                const Icon = offer.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-creme p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-14 h-14 bg-bordeaux/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-bordeaux" />
                    </div>
                    <h3 className="font-cormorant text-2xl text-noir font-medium mb-4">
                      {offer.title}
                    </h3>
                    <p className="text-noir/70 font-outfit leading-relaxed">
                      {offer.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-bordeaux">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "+40%", label: isRTL || t.nav.home === "Accueil" ? "Revenus" : "Revenue" },
                { value: "95%", label: isRTL || t.nav.home === "Accueil" ? "Occupation" : "Occupancy" },
                { value: "24/7", label: isRTL || t.nav.home === "Accueil" ? "Ajustement" : "Adjustment" },
                { value: "100+", label: isRTL || t.nav.home === "Accueil" ? "Facteurs" : "Factors" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="font-cormorant text-4xl md:text-5xl text-or font-medium mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blanc/80 font-outfit text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-noir text-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.processTitle}
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {content.process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-or font-cormorant text-5xl font-medium mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-cormorant text-xl font-medium mb-3">
                    {step.title}
                  </h3>
                  <p className="text-blanc/70 font-outfit text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-10">
                  {content.benefitsTitle}
                </h2>
                <div className="space-y-4">
                  {content.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-6 h-6 text-bordeaux flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80"
                  alt="Revenue growth"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Factors */}
        <section className="py-20 bg-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
                  alt="Data analysis"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-10">
                  {content.factorsTitle}
                </h2>
                <div className="space-y-4">
                  {content.factors.map((factor, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{factor}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-bordeaux">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-blanc font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.ctaTitle}
            </motion.h2>
            <motion.p
              className="text-blanc/80 text-lg mb-10 font-outfit"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.ctaSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-blanc text-bordeaux hover:bg-or hover:text-noir transition-all duration-300 font-outfit font-medium"
              >
                {content.ctaButton}
                <TrendingUp className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
