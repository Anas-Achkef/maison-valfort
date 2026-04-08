"use client";

import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle, ArrowLeft, Star, Utensils, Music, Theater, Trophy } from "lucide-react";
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

export default function ReservationsVIPPage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Accès Privilégiés",
      title: "Réservations VIP",
      subtitle: "Accédez aux tables les plus prisées et aux événements les plus exclusifs",
      intro: "Bénéficiez de notre réseau pour obtenir des réservations impossibles. Restaurants étoilés complets, concerts sold-out, événements privés... Nos relations privilégiées ouvrent toutes les portes.",
      price: "Service inclus",

      whatWeOffer: "Nos Accès",
      offers: [
        {
          icon: Utensils,
          title: "Restaurants Étoilés",
          description: "Réservations dans les meilleures tables : restaurants Michelin, chefs célèbres, adresses confidentielles. Même sans disponibilité affichée.",
        },
        {
          icon: Music,
          title: "Concerts & Festivals",
          description: "Places premium pour les concerts les plus demandés. Carré VIP, backstage, meet & greet avec les artistes.",
        },
        {
          icon: Theater,
          title: "Spectacles & Opéras",
          description: "Loges privées, premières représentations, accès aux générales. Vivez la culture autrement.",
        },
        {
          icon: Trophy,
          title: "Événements Sportifs",
          description: "Roland-Garros, Grand Prix F1, Coupes du monde... Billets exclusifs et hospitalités VIP.",
        },
      ],

      processTitle: "Notre Service",
      process: [
        {
          step: "01",
          title: "Demande",
          description: "Partagez vos souhaits : restaurant, spectacle, événement, date souhaitée.",
        },
        {
          step: "02",
          title: "Recherche",
          description: "Nous activons notre réseau pour trouver la meilleure solution.",
        },
        {
          step: "03",
          title: "Confirmation",
          description: "Vous recevez tous les détails de votre réservation confirmée.",
        },
        {
          step: "04",
          title: "Expérience",
          description: "Profitez de votre soirée avec un accueil privilégié.",
        },
      ],

      benefitsTitle: "Nos Atouts",
      benefits: [
        "Réseau exclusif de partenaires privilégiés",
        "Accès aux tables impossibles à réserver",
        "Places premium même en dernière minute",
        "Traitement VIP garanti sur place",
        "Conciergerie disponible 24/7",
        "Service sans frais supplémentaires",
      ],

      accessTitle: "Quelques exemples",
      access: [
        "L'Ambroisie, Le Cinq, L'Arpège - Paris",
        "Mirazur, La Vague d'Or - Côte d'Azur",
        "Opéra Garnier - Loges privées",
        "Festival de Cannes - Soirées officielles",
        "Roland-Garros - Loge Présidentielle",
        "GP de Monaco - Yachts et terrasses",
        "Fashion Week - Défilés haute couture",
        "Art Basel - Vernissages privés",
      ],

      galleryTitle: "L'Exception à Portée de Main",

      ctaTitle: "L'impossible devient possible",
      ctaSubtitle: "Confiez-nous vos envies les plus exclusives",
      ctaButton: "Faire une demande",
      backButton: "Retour aux expériences",
    },
    en: {
      badge: "Privileged Access",
      title: "VIP Reservations",
      subtitle: "Access the most sought-after tables and most exclusive events",
      intro: "Benefit from our network to obtain impossible reservations. Fully-booked starred restaurants, sold-out concerts, private events... Our privileged relationships open all doors.",
      price: "Service included",

      whatWeOffer: "Our Access",
      offers: [
        {
          icon: Utensils,
          title: "Starred Restaurants",
          description: "Reservations at the finest tables: Michelin restaurants, celebrity chefs, confidential addresses. Even without displayed availability.",
        },
        {
          icon: Music,
          title: "Concerts & Festivals",
          description: "Premium seats for the most in-demand concerts. VIP area, backstage, meet & greet with artists.",
        },
        {
          icon: Theater,
          title: "Shows & Operas",
          description: "Private boxes, premieres, access to dress rehearsals. Experience culture differently.",
        },
        {
          icon: Trophy,
          title: "Sports Events",
          description: "Roland-Garros, F1 Grand Prix, World Cups... Exclusive tickets and VIP hospitality.",
        },
      ],

      processTitle: "Our Service",
      process: [
        {
          step: "01",
          title: "Request",
          description: "Share your wishes: restaurant, show, event, preferred date.",
        },
        {
          step: "02",
          title: "Search",
          description: "We activate our network to find the best solution.",
        },
        {
          step: "03",
          title: "Confirmation",
          description: "You receive all details of your confirmed reservation.",
        },
        {
          step: "04",
          title: "Experience",
          description: "Enjoy your evening with privileged welcome.",
        },
      ],

      benefitsTitle: "Our Strengths",
      benefits: [
        "Exclusive network of privileged partners",
        "Access to impossible-to-book tables",
        "Premium seats even last minute",
        "Guaranteed VIP treatment on-site",
        "24/7 concierge available",
        "Service at no extra charge",
      ],

      accessTitle: "Some examples",
      access: [
        "L'Ambroisie, Le Cinq, L'Arpège - Paris",
        "Mirazur, La Vague d'Or - French Riviera",
        "Opéra Garnier - Private boxes",
        "Cannes Film Festival - Official parties",
        "Roland-Garros - Presidential box",
        "Monaco GP - Yachts and terraces",
        "Fashion Week - Haute couture shows",
        "Art Basel - Private viewings",
      ],

      galleryTitle: "The Exceptional Within Reach",

      ctaTitle: "The impossible becomes possible",
      ctaSubtitle: "Entrust us with your most exclusive wishes",
      ctaButton: "Make a request",
      backButton: "Back to experiences",
    },
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Fine dining" },
    { src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80", alt: "Concert" },
    { src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80", alt: "Opera" },
    { src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800&q=80", alt: "Tennis" },
    { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80", alt: "Festival" },
    { src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80", alt: "Theater" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80" alt="Fine dining" fill className="object-cover" priority />
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

        {/* Benefits & Access */}
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
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-10">{pageContent.accessTitle}</h2>
                <div className="space-y-4">
                  {pageContent.access.map((item, index) => (
                    <motion.div key={index} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{item}</span>
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
                <CalendarCheck className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
