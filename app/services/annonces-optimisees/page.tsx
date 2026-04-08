"use client";

import { motion } from "framer-motion";
import { Key, CheckCircle, ArrowLeft, Star, Globe, Search, BarChart3, Target } from "lucide-react";
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

export default function AnnoncesOptimiseesPage() {
  const { t, isRTL } = useLanguage();

  const serviceDetails = {
    fr: {
      badge: "Service Premium",
      title: "Annonces Optimisées",
      subtitle: "Maximisez votre visibilité sur toutes les plateformes avec des annonces parfaitement rédigées",
      intro: "Une annonce bien rédigée fait toute la différence. Nos experts en rédaction créent des descriptions captivantes et optimisées SEO qui convertissent les visiteurs en réservations confirmées.",

      whatWeOffer: "Ce que nous offrons",
      offers: [
        {
          icon: Globe,
          title: "Multi-Plateformes",
          description: "Diffusion simultanée sur Airbnb, Booking.com, Abritel, Expedia et autres plateformes majeures. Une seule gestion, une visibilité maximale.",
        },
        {
          icon: Search,
          title: "Optimisation SEO",
          description: "Rédaction stratégique avec les mots-clés recherchés par les voyageurs. Votre annonce apparaît en tête des résultats de recherche.",
        },
        {
          icon: Target,
          title: "Ciblage Précis",
          description: "Adaptation du ton et du contenu selon votre clientèle cible : familles, couples, voyageurs d'affaires ou groupes d'amis.",
        },
        {
          icon: BarChart3,
          title: "Reporting Détaillé",
          description: "Suivi des performances de vos annonces : vues, clics, taux de conversion. Optimisation continue basée sur les données.",
        },
      ],

      processTitle: "Notre Processus",
      process: [
        {
          step: "01",
          title: "Analyse",
          description: "Étude de votre bien, de la concurrence locale et identification des points forts à mettre en avant.",
        },
        {
          step: "02",
          title: "Rédaction",
          description: "Création d'un titre accrocheur et d'une description détaillée mettant en valeur chaque atout.",
        },
        {
          step: "03",
          title: "Optimisation",
          description: "Intégration des mots-clés stratégiques et structuration pour les algorithmes des plateformes.",
        },
        {
          step: "04",
          title: "Publication",
          description: "Mise en ligne simultanée sur toutes les plateformes avec suivi des performances.",
        },
      ],

      benefitsTitle: "Pourquoi c'est essentiel",
      benefits: [
        "Augmentation moyenne de 35% des réservations",
        "Meilleur positionnement dans les résultats de recherche",
        "Descriptions professionnelles multilingues",
        "Mise à jour régulière selon les saisons",
        "Synchronisation automatique des calendriers",
        "Gestion centralisée de toutes vos annonces",
      ],

      platformsTitle: "Plateformes Partenaires",
      platforms: [
        "Airbnb - Leader mondial de la location courte durée",
        "Booking.com - N°1 des réservations hôtelières",
        "Abritel / HomeAway - Spécialiste des locations de vacances",
        "Expedia - Plateforme de voyage internationale",
        "Google Vacation Rentals - Visibilité Google",
        "Et bien d'autres plateformes locales et spécialisées",
      ],

      galleryTitle: "Nos Réalisations",

      ctaTitle: "Prêt à booster vos réservations ?",
      ctaSubtitle: "Contactez-nous pour optimiser vos annonces dès maintenant",
      ctaButton: "Demander un devis",
      backButton: "Retour aux services",
    },
    en: {
      badge: "Premium Service",
      title: "Optimized Listings",
      subtitle: "Maximize your visibility on all platforms with perfectly written listings",
      intro: "A well-written listing makes all the difference. Our copywriting experts create captivating, SEO-optimized descriptions that convert visitors into confirmed bookings.",

      whatWeOffer: "What We Offer",
      offers: [
        {
          icon: Globe,
          title: "Multi-Platform",
          description: "Simultaneous distribution on Airbnb, Booking.com, Vrbo, Expedia and other major platforms. One management, maximum visibility.",
        },
        {
          icon: Search,
          title: "SEO Optimization",
          description: "Strategic writing with keywords searched by travelers. Your listing appears at the top of search results.",
        },
        {
          icon: Target,
          title: "Precise Targeting",
          description: "Adapting tone and content to your target clientele: families, couples, business travelers or groups of friends.",
        },
        {
          icon: BarChart3,
          title: "Detailed Reporting",
          description: "Tracking your listings performance: views, clicks, conversion rate. Continuous data-driven optimization.",
        },
      ],

      processTitle: "Our Process",
      process: [
        {
          step: "01",
          title: "Analysis",
          description: "Study of your property, local competition and identification of strengths to highlight.",
        },
        {
          step: "02",
          title: "Writing",
          description: "Creating a catchy title and detailed description highlighting every asset.",
        },
        {
          step: "03",
          title: "Optimization",
          description: "Integration of strategic keywords and structuring for platform algorithms.",
        },
        {
          step: "04",
          title: "Publication",
          description: "Simultaneous online publication on all platforms with performance tracking.",
        },
      ],

      benefitsTitle: "Why It's Essential",
      benefits: [
        "Average 35% increase in bookings",
        "Better positioning in search results",
        "Professional multilingual descriptions",
        "Regular seasonal updates",
        "Automatic calendar synchronization",
        "Centralized management of all your listings",
      ],

      platformsTitle: "Partner Platforms",
      platforms: [
        "Airbnb - World leader in short-term rentals",
        "Booking.com - #1 in hotel reservations",
        "Vrbo / HomeAway - Vacation rental specialist",
        "Expedia - International travel platform",
        "Google Vacation Rentals - Google visibility",
        "And many other local and specialized platforms",
      ],

      galleryTitle: "Our Achievements",

      ctaTitle: "Ready to boost your bookings?",
      ctaSubtitle: "Contact us to optimize your listings now",
      ctaButton: "Request a quote",
      backButton: "Back to services",
    },
  };

  const content = serviceDetails[isRTL ? "fr" : (t.nav.home === "Accueil" ? "fr" : "en")];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      alt: "Dashboard analytics",
    },
    {
      src: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
      alt: "Website optimization",
    },
    {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      alt: "Digital marketing",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      alt: "Data analysis",
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      alt: "Team collaboration",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      alt: "Property listing",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
              alt="Digital marketing"
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

        {/* Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.galleryTitle}
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </motion.div>
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
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="Digital optimization"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platforms */}
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
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80"
                  alt="Multiple platforms"
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
                  {content.platformsTitle}
                </h2>
                <div className="space-y-4">
                  {content.platforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{platform}</span>
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
                <Key className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
