"use client";

import { motion } from "framer-motion";
import { Wrench, CheckCircle, ArrowLeft, Star, ShieldCheck, Clock, Settings, AlertTriangle } from "lucide-react";
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

export default function MaintenancePage() {
  const { t, isRTL } = useLanguage();

  const serviceDetails = {
    fr: {
      badge: "Service Premium",
      title: "Maintenance",
      subtitle: "Une gestion proactive de votre bien pour préserver sa valeur et garantir le confort de vos voyageurs",
      intro: "Un problème technique peut gâcher un séjour. Notre service de maintenance assure une intervention rapide 24h/24 et un entretien préventif régulier pour éviter les mauvaises surprises.",

      whatWeOffer: "Ce que nous offrons",
      offers: [
        {
          icon: Clock,
          title: "Intervention 24h",
          description: "Panne de chauffe-eau, serrure bloquée, fuite d'eau ? Nos artisans partenaires interviennent en urgence, jour et nuit.",
        },
        {
          icon: ShieldCheck,
          title: "Maintenance Préventive",
          description: "Inspections régulières pour anticiper les problèmes : chaudière, climatisation, plomberie, électricité.",
        },
        {
          icon: Settings,
          title: "Réseau d'Artisans Qualifiés",
          description: "Plombiers, électriciens, serruriers, chauffagistes... Un réseau de professionnels vérifiés à votre service.",
        },
        {
          icon: AlertTriangle,
          title: "Gestion des Urgences",
          description: "Protocole d'urgence établi pour minimiser l'impact sur les séjours et rassurer vos voyageurs.",
        },
      ],

      processTitle: "Notre Approche",
      process: [
        {
          step: "01",
          title: "Signalement",
          description: "Le voyageur ou notre équipe signale un problème via notre système dédié.",
        },
        {
          step: "02",
          title: "Diagnostic",
          description: "Évaluation rapide pour déterminer l'urgence et le type d'intervention.",
        },
        {
          step: "03",
          title: "Intervention",
          description: "Déploiement d'un artisan qualifié dans les meilleurs délais.",
        },
        {
          step: "04",
          title: "Suivi",
          description: "Compte-rendu détaillé et facturation transparente.",
        },
      ],

      benefitsTitle: "Vos avantages",
      benefits: [
        "Intervention d'urgence sous 2 à 4 heures",
        "Tarifs négociés avec nos artisans partenaires",
        "Aucune mauvaise surprise : devis systématique",
        "Historique complet des interventions",
        "Inspections préventives incluses",
        "Tranquillité d'esprit totale",
      ],

      servicesTitle: "Types d'interventions",
      services: [
        "Plomberie : fuites, débouchage, robinetterie",
        "Électricité : pannes, prises, luminaires",
        "Serrurerie : clés, cylindres, portes",
        "Chauffage : chaudière, radiateurs, climatisation",
        "Menuiserie : portes, fenêtres, volets",
        "Électroménager : machine à laver, lave-vaisselle",
        "Petits travaux : peinture retouches, fixations",
        "Jardinage : entretien extérieur, piscine",
      ],

      galleryTitle: "Nos Interventions",

      ctaTitle: "Protégez votre investissement",
      ctaSubtitle: "Une maintenance régulière préserve la valeur de votre bien",
      ctaButton: "Demander un devis",
      backButton: "Retour aux services",
    },
    en: {
      badge: "Premium Service",
      title: "Maintenance",
      subtitle: "Proactive property management to preserve value and guarantee guest comfort",
      intro: "A technical problem can ruin a stay. Our maintenance service ensures rapid 24-hour intervention and regular preventive maintenance to avoid nasty surprises.",

      whatWeOffer: "What We Offer",
      offers: [
        {
          icon: Clock,
          title: "24h Intervention",
          description: "Water heater failure, stuck lock, water leak? Our partner craftsmen intervene urgently, day and night.",
        },
        {
          icon: ShieldCheck,
          title: "Preventive Maintenance",
          description: "Regular inspections to anticipate problems: boiler, air conditioning, plumbing, electricity.",
        },
        {
          icon: Settings,
          title: "Qualified Craftsmen Network",
          description: "Plumbers, electricians, locksmiths, heating engineers... A network of verified professionals at your service.",
        },
        {
          icon: AlertTriangle,
          title: "Emergency Management",
          description: "Established emergency protocol to minimize impact on stays and reassure your travelers.",
        },
      ],

      processTitle: "Our Approach",
      process: [
        {
          step: "01",
          title: "Report",
          description: "The traveler or our team reports a problem via our dedicated system.",
        },
        {
          step: "02",
          title: "Diagnosis",
          description: "Quick assessment to determine urgency and type of intervention.",
        },
        {
          step: "03",
          title: "Intervention",
          description: "Deployment of a qualified craftsman as quickly as possible.",
        },
        {
          step: "04",
          title: "Follow-up",
          description: "Detailed report and transparent billing.",
        },
      ],

      benefitsTitle: "Your Benefits",
      benefits: [
        "Emergency intervention within 2 to 4 hours",
        "Negotiated rates with our partner craftsmen",
        "No nasty surprises: systematic quotes",
        "Complete intervention history",
        "Preventive inspections included",
        "Total peace of mind",
      ],

      servicesTitle: "Types of Interventions",
      services: [
        "Plumbing: leaks, unclogging, faucets",
        "Electricity: failures, outlets, lighting",
        "Locksmith: keys, cylinders, doors",
        "Heating: boiler, radiators, air conditioning",
        "Carpentry: doors, windows, shutters",
        "Appliances: washing machine, dishwasher",
        "Small works: touch-up painting, fixtures",
        "Gardening: outdoor maintenance, pool",
      ],

      galleryTitle: "Our Interventions",

      ctaTitle: "Protect your investment",
      ctaSubtitle: "Regular maintenance preserves your property's value",
      ctaButton: "Request a quote",
      backButton: "Back to services",
    },
  };

  const content = serviceDetails[isRTL ? "fr" : (t.nav.home === "Accueil" ? "fr" : "en")];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      alt: "Maintenance work",
    },
    {
      src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
      alt: "Plumbing repair",
    },
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      alt: "Electrical work",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      alt: "HVAC maintenance",
    },
    {
      src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
      alt: "Home repair",
    },
    {
      src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
      alt: "Tools and repair",
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
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
              alt="Maintenance service"
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
                { value: "2-4h", label: isRTL || t.nav.home === "Accueil" ? "Urgence" : "Emergency" },
                { value: "24/7", label: isRTL || t.nav.home === "Accueil" ? "Disponibilité" : "Availability" },
                { value: "50+", label: isRTL || t.nav.home === "Accueil" ? "Artisans" : "Craftsmen" },
                { value: "100%", label: isRTL || t.nav.home === "Accueil" ? "Transparent" : "Transparent" },
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
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80"
                  alt="Maintenance work"
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
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                  alt="Repair services"
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
                <Wrench className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
