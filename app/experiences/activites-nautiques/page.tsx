"use client";

import { motion } from "framer-motion";
import { Waves, CheckCircle, ArrowLeft, Star, Anchor, Wind, Compass, Ship } from "lucide-react";
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

export default function ActivitesNautiquesPage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Aventures Marines",
      title: "Activités Nautiques",
      subtitle: "Vivez des moments d'exception sur les plus belles eaux de la Méditerranée",
      intro: "De la location de yacht privé aux sports nautiques les plus excitants, découvrez la mer comme jamais auparavant. Nos partenaires sélectionnés vous garantissent des expériences maritimes inoubliables.",
      price: "Sur devis",

      whatWeOffer: "Nos Activités",
      offers: [
        {
          icon: Ship,
          title: "Location de Yacht",
          description: "Yachts de luxe avec équipage, du voilier élégant au motor yacht. Journée, croisière ou charter complet.",
        },
        {
          icon: Wind,
          title: "Jet-Ski & Wakeboard",
          description: "Sensations fortes garanties ! Location avec ou sans moniteur pour tous les niveaux.",
        },
        {
          icon: Compass,
          title: "Plongée Sous-Marine",
          description: "Explorez les fonds marins avec nos instructeurs PADI. Baptême ou plongée confirmée.",
        },
        {
          icon: Anchor,
          title: "Pêche au Gros",
          description: "Sortie pêche sportive avec capitaine expérimenté. Thon, espadon, dorade coryphène...",
        },
      ],

      processTitle: "L'Expérience",
      process: [
        {
          step: "01",
          title: "Consultation",
          description: "Définissons ensemble l'activité idéale selon vos envies et votre niveau.",
        },
        {
          step: "02",
          title: "Organisation",
          description: "Réservation du matériel, équipement de sécurité et briefing préalable.",
        },
        {
          step: "03",
          title: "Aventure",
          description: "Vivez votre expérience encadrée par des professionnels passionnés.",
        },
        {
          step: "04",
          title: "Souvenirs",
          description: "Photos et vidéos de votre journée disponibles sur demande.",
        },
      ],

      benefitsTitle: "Pourquoi nous choisir",
      benefits: [
        "Partenaires sélectionnés et certifiés",
        "Équipement haut de gamme et sécurisé",
        "Moniteurs et skippers expérimentés",
        "Flexibilité horaire et personnalisation",
        "Assurance complète incluse",
        "Service conciergerie dédié",
      ],

      activitiesTitle: "Toutes nos activités",
      activities: [
        "Location Yacht - Journée ou croisière",
        "Jet-Ski - Sessions de 30min à la journée",
        "Wakeboard & Ski Nautique - Tous niveaux",
        "Paddle & Kayak - Exploration côtière",
        "Plongée - Baptême ou exploration",
        "Snorkeling - Découverte des fonds marins",
        "Pêche sportive - Sortie demi-journée ou journée",
        "Voile - Cours particuliers ou régate",
      ],

      galleryTitle: "L'Appel du Large",

      ctaTitle: "Prêt pour l'aventure ?",
      ctaSubtitle: "Réservez votre expérience nautique et vivez des moments inoubliables",
      ctaButton: "Réserver une activité",
      backButton: "Retour aux expériences",
    },
    en: {
      badge: "Marine Adventures",
      title: "Water Activities",
      subtitle: "Experience exceptional moments on the most beautiful Mediterranean waters",
      intro: "From private yacht rental to the most exciting water sports, discover the sea like never before. Our selected partners guarantee unforgettable maritime experiences.",
      price: "On request",

      whatWeOffer: "Our Activities",
      offers: [
        {
          icon: Ship,
          title: "Yacht Charter",
          description: "Luxury yachts with crew, from elegant sailboats to motor yachts. Day trip, cruise or full charter.",
        },
        {
          icon: Wind,
          title: "Jet-Ski & Wakeboard",
          description: "Thrills guaranteed! Rental with or without instructor for all levels.",
        },
        {
          icon: Compass,
          title: "Scuba Diving",
          description: "Explore the seabed with our PADI instructors. Discovery dive or confirmed diving.",
        },
        {
          icon: Anchor,
          title: "Deep Sea Fishing",
          description: "Sport fishing trip with experienced captain. Tuna, swordfish, mahi-mahi...",
        },
      ],

      processTitle: "The Experience",
      process: [
        {
          step: "01",
          title: "Consultation",
          description: "Let's define together the ideal activity according to your wishes and level.",
        },
        {
          step: "02",
          title: "Organization",
          description: "Equipment booking, safety gear and preliminary briefing.",
        },
        {
          step: "03",
          title: "Adventure",
          description: "Live your experience supervised by passionate professionals.",
        },
        {
          step: "04",
          title: "Memories",
          description: "Photos and videos of your day available on request.",
        },
      ],

      benefitsTitle: "Why choose us",
      benefits: [
        "Selected and certified partners",
        "High-end and secure equipment",
        "Experienced instructors and skippers",
        "Schedule flexibility and customization",
        "Full insurance included",
        "Dedicated concierge service",
      ],

      activitiesTitle: "All our activities",
      activities: [
        "Yacht Charter - Day trip or cruise",
        "Jet-Ski - 30min to full day sessions",
        "Wakeboard & Water Skiing - All levels",
        "Paddle & Kayak - Coastal exploration",
        "Diving - Discovery or exploration",
        "Snorkeling - Seabed discovery",
        "Sport Fishing - Half-day or full day trip",
        "Sailing - Private lessons or regatta",
      ],

      galleryTitle: "The Call of the Sea",

      ctaTitle: "Ready for adventure?",
      ctaSubtitle: "Book your nautical experience and live unforgettable moments",
      ctaButton: "Book an activity",
      backButton: "Back to experiences",
    },
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80", alt: "Yacht" },
    { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", alt: "Jet ski" },
    { src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80", alt: "Diving" },
    { src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80", alt: "Sailing" },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", alt: "Beach" },
    { src: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800&q=80", alt: "Paddleboard" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1920&q=80" alt="Yacht" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-noir/60 to-noir/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/#experiences" className={`inline-flex items-center gap-2 text-blanc/70 hover:text-or transition-colors mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
                <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                {pageContent.backButton}
              </Link>
            </motion.div>

            <motion.span className="inline-block text-or text-sm tracking-[0.3em] uppercase mb-4 font-outfit" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {pageContent.badge}
            </motion.span>

            <motion.h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-blanc font-medium mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {pageContent.title}
            </motion.h1>

            <motion.p className="text-blanc/80 text-xl md:text-2xl font-cormorant max-w-3xl mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              {pageContent.subtitle}
            </motion.p>

            <motion.div className="inline-flex items-center gap-2 bg-or/20 backdrop-blur-sm px-6 py-3 rounded-full" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <span className="text-or font-outfit font-semibold text-lg">{pageContent.price}</span>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.p className="text-noir/80 text-lg md:text-xl leading-relaxed font-outfit text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {pageContent.intro}
            </motion.p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-16 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {pageContent.whatWeOffer}
            </motion.h2>

            <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {pageContent.offers.map((offer, index) => {
                const Icon = offer.icon;
                return (
                  <motion.div key={index} variants={fadeInUp} className="bg-creme p-8 rounded-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 bg-bordeaux/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-bordeaux" />
                    </div>
                    <h3 className="font-cormorant text-2xl text-noir font-medium mb-4">{offer.title}</h3>
                    <p className="text-noir/70 font-outfit leading-relaxed">{offer.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-16 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {pageContent.galleryTitle}
            </motion.h2>

            <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {galleryImages.map((image, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-noir text-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium mb-16 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {pageContent.processTitle}
            </motion.h2>

            <motion.div className="grid md:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {pageContent.process.map((step, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="text-or font-cormorant text-5xl font-medium mb-4">{step.step}</div>
                  <h3 className="font-cormorant text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-blanc/70 font-outfit text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits & Activities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-10">{pageContent.benefitsTitle}</h2>
                <div className="space-y-4">
                  {pageContent.benefits.map((benefit, index) => (
                    <motion.div key={index} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <CheckCircle className="w-6 h-6 text-bordeaux flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-10">{pageContent.activitiesTitle}</h2>
                <div className="space-y-4">
                  {pageContent.activities.map((activity, index) => (
                    <motion.div key={index} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{activity}</span>
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
            <motion.h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-blanc font-medium mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {pageContent.ctaTitle}
            </motion.h2>
            <motion.p className="text-blanc/80 text-lg mb-10 font-outfit" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              {pageContent.ctaSubtitle}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link href="/#contact" className="inline-flex items-center gap-3 px-10 py-4 bg-blanc text-bordeaux hover:bg-or hover:text-noir transition-all duration-300 font-outfit font-medium">
                {pageContent.ctaButton}
                <Waves className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
