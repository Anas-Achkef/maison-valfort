"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, ArrowLeft, Star, Clock, Phone, Gift, MessageCircle } from "lucide-react";
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

export default function AccueilVoyageursPage() {
  const { t, isRTL } = useLanguage();

  const serviceDetails = {
    fr: {
      badge: "Service Premium",
      title: "Accueil Voyageurs",
      subtitle: "Une expérience d'accueil sur-mesure qui fait la différence dès le premier instant",
      intro: "L'accueil est le premier contact de vos voyageurs avec votre bien. Nous créons une expérience mémorable qui garantit des avis 5 étoiles et des réservations récurrentes.",

      whatWeOffer: "Ce que nous offrons",
      offers: [
        {
          icon: Clock,
          title: "Check-in Flexible 24/7",
          description: "Arrivée tardive ou matinale ? Pas de problème. Notre équipe s'adapte aux horaires de vos voyageurs pour un accueil personnalisé à toute heure.",
        },
        {
          icon: MessageCircle,
          title: "Communication Multilingue",
          description: "Assistance en français, anglais, espagnol, arabe et plus. Chaque voyageur se sent compris et accompagné dans sa langue.",
        },
        {
          icon: Gift,
          title: "Welcome Pack Premium",
          description: "Bouteille de vin local, produits du terroir, guide personnalisé du quartier... Un accueil digne des plus grands hôtels.",
        },
        {
          icon: Phone,
          title: "Assistance Continue",
          description: "Ligne directe disponible tout au long du séjour. Nous répondons en moins de 15 minutes à toute demande.",
        },
      ],

      processTitle: "L'Expérience d'Accueil",
      process: [
        {
          step: "01",
          title: "Avant l'arrivée",
          description: "Communication proactive avec toutes les informations pratiques et recommandations personnalisées.",
        },
        {
          step: "02",
          title: "Check-in",
          description: "Accueil en personne ou autonome selon préférence, avec visite guidée du logement.",
        },
        {
          step: "03",
          title: "Pendant le séjour",
          description: "Assistance 24/7, conseils locaux et gestion de toute demande ou imprévu.",
        },
        {
          step: "04",
          title: "Check-out",
          description: "Départ fluide et collecte de feedback pour amélioration continue.",
        },
      ],

      benefitsTitle: "Pourquoi c'est essentiel",
      benefits: [
        "92% de nos voyageurs laissent un avis 5 étoiles",
        "Taux de réservation répétée de 35%",
        "Réduction de 80% des problèmes pendant le séjour",
        "Temps de réponse moyen inférieur à 15 minutes",
        "Zéro stress pour vous : nous gérons tout",
        "Expérience personnalisée pour chaque voyageur",
      ],

      servicesTitle: "Services Inclus",
      services: [
        "Remise des clés en personne ou boîte à clés sécurisée",
        "Visite guidée complète du logement",
        "Explication des équipements et particularités",
        "Guide du quartier avec nos recommandations",
        "Welcome pack avec produits locaux",
        "Assistance WhatsApp et téléphone 24/7",
        "Gestion des demandes spéciales",
        "Coordination avec services additionnels",
      ],

      galleryTitle: "L'Art de l'Accueil",

      ctaTitle: "Offrez une expérience inoubliable",
      ctaSubtitle: "Confiez-nous l'accueil de vos voyageurs pour des avis 5 étoiles garantis",
      ctaButton: "Demander un devis",
      backButton: "Retour aux services",
    },
    en: {
      badge: "Premium Service",
      title: "Guest Welcome",
      subtitle: "A tailor-made welcome experience that makes a difference from the first moment",
      intro: "The welcome is your travelers' first contact with your property. We create a memorable experience that guarantees 5-star reviews and recurring bookings.",

      whatWeOffer: "What We Offer",
      offers: [
        {
          icon: Clock,
          title: "Flexible 24/7 Check-in",
          description: "Late or early arrival? No problem. Our team adapts to your travelers' schedules for personalized welcome at any time.",
        },
        {
          icon: MessageCircle,
          title: "Multilingual Communication",
          description: "Assistance in French, English, Spanish, Arabic and more. Every traveler feels understood and supported in their language.",
        },
        {
          icon: Gift,
          title: "Premium Welcome Pack",
          description: "Local wine bottle, regional products, personalized neighborhood guide... A welcome worthy of the finest hotels.",
        },
        {
          icon: Phone,
          title: "Continuous Assistance",
          description: "Direct line available throughout the stay. We respond in less than 15 minutes to any request.",
        },
      ],

      processTitle: "The Welcome Experience",
      process: [
        {
          step: "01",
          title: "Before Arrival",
          description: "Proactive communication with all practical information and personalized recommendations.",
        },
        {
          step: "02",
          title: "Check-in",
          description: "In-person or self check-in as preferred, with guided tour of the accommodation.",
        },
        {
          step: "03",
          title: "During Stay",
          description: "24/7 assistance, local tips and management of any request or unexpected event.",
        },
        {
          step: "04",
          title: "Check-out",
          description: "Smooth departure and feedback collection for continuous improvement.",
        },
      ],

      benefitsTitle: "Why It's Essential",
      benefits: [
        "92% of our travelers leave a 5-star review",
        "35% repeat booking rate",
        "80% reduction in problems during stay",
        "Average response time under 15 minutes",
        "Zero stress for you: we handle everything",
        "Personalized experience for each traveler",
      ],

      servicesTitle: "Included Services",
      services: [
        "In-person key handover or secure lockbox",
        "Complete guided tour of the accommodation",
        "Explanation of equipment and features",
        "Neighborhood guide with our recommendations",
        "Welcome pack with local products",
        "24/7 WhatsApp and phone assistance",
        "Special requests management",
        "Coordination with additional services",
      ],

      galleryTitle: "The Art of Welcome",

      ctaTitle: "Offer an unforgettable experience",
      ctaSubtitle: "Entrust us with welcoming your travelers for guaranteed 5-star reviews",
      ctaButton: "Request a quote",
      backButton: "Back to services",
    },
  };

  const content = serviceDetails[isRTL ? "fr" : (t.nav.home === "Accueil" ? "fr" : "en")];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      alt: "Key handover",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      alt: "Welcome setup",
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      alt: "Hotel hospitality",
    },
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      alt: "Guest arrival",
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      alt: "Luxury welcome",
    },
    {
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
      alt: "Premium service",
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
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80"
              alt="Guest welcome"
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
                { value: "92%", label: isRTL || t.nav.home === "Accueil" ? "5 étoiles" : "5 stars" },
                { value: "24/7", label: isRTL || t.nav.home === "Accueil" ? "Disponibilité" : "Availability" },
                { value: "<15min", label: isRTL || t.nav.home === "Accueil" ? "Réponse" : "Response" },
                { value: "6+", label: isRTL || t.nav.home === "Accueil" ? "Langues" : "Languages" },
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
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
                  alt="Welcome experience"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
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
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                  alt="Premium hospitality"
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
                  {content.servicesTitle}
                </h2>
                <div className="space-y-4">
                  {content.services.map((service, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{service}</span>
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
                <Users className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
