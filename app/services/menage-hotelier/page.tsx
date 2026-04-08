"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle, ArrowLeft, Star, Leaf, Clock, Award, Bed } from "lucide-react";
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

export default function MenageHotelierPage() {
  const { t, isRTL } = useLanguage();

  const serviceDetails = {
    fr: {
      badge: "Service Premium",
      title: "Ménage Hôtelier",
      subtitle: "Des standards de propreté dignes des plus grands palaces pour chaque voyageur",
      intro: "La propreté est le critère n°1 des voyageurs. Notre service de ménage hôtelier garantit un intérieur impeccable à chaque rotation, avec du linge de maison haut de gamme et des produits écologiques.",

      whatWeOffer: "Ce que nous offrons",
      offers: [
        {
          icon: Award,
          title: "Standards 5 Étoiles",
          description: "Protocole de nettoyage inspiré des plus grands hôtels. Chaque recoin est inspecté selon une checklist de 80+ points.",
        },
        {
          icon: Bed,
          title: "Linge Premium",
          description: "Draps en coton égyptien, serviettes moelleuses, peignoirs... Un confort digne des meilleurs établissements.",
        },
        {
          icon: Leaf,
          title: "Produits Écologiques",
          description: "Nettoyants professionnels biodégradables, respectueux de l'environnement et de la santé des voyageurs.",
        },
        {
          icon: Clock,
          title: "Rotation Express",
          description: "Délai minimum entre deux voyageurs. Notre équipe intervient rapidement pour un logement prêt en temps record.",
        },
      ],

      processTitle: "Notre Protocole",
      process: [
        {
          step: "01",
          title: "État des lieux",
          description: "Vérification de l'état du logement et signalement de tout dommage éventuel.",
        },
        {
          step: "02",
          title: "Nettoyage complet",
          description: "Désinfection des surfaces, nettoyage sol à plafond selon notre protocole strict.",
        },
        {
          step: "03",
          title: "Mise en place",
          description: "Installation du linge frais, réassort des consommables, touches de bienvenue.",
        },
        {
          step: "04",
          title: "Contrôle qualité",
          description: "Inspection finale selon checklist et photos de confirmation envoyées.",
        },
      ],

      benefitsTitle: "Qualité garantie",
      benefits: [
        "Équipes formées aux standards hôteliers",
        "Linge de maison premium inclus et géré",
        "Produits d'accueil haut de gamme fournis",
        "Réassort automatique des consommables",
        "Photos de validation après chaque ménage",
        "Intervention rapide en cas de besoin",
      ],

      checklistTitle: "Notre Checklist",
      checklist: [
        "Désinfection complète des surfaces de contact",
        "Nettoyage approfondi cuisine et électroménager",
        "Sanitaires désinfectés et brillants",
        "Sols aspirés, lavés et séchés",
        "Vitres intérieures nettoyées",
        "Linge de lit changé et repassé",
        "Serviettes fraîches installées",
        "Poubelles vidées et sacs remplacés",
      ],

      galleryTitle: "Résultat Impeccable",

      ctaTitle: "Un intérieur toujours impeccable",
      ctaSubtitle: "Offrez à vos voyageurs une propreté irréprochable",
      ctaButton: "Demander un devis",
      backButton: "Retour aux services",
    },
    en: {
      badge: "Premium Service",
      title: "Hotel-Style Cleaning",
      subtitle: "Cleanliness standards worthy of the finest palaces for every traveler",
      intro: "Cleanliness is travelers' #1 criterion. Our hotel-style cleaning service guarantees an impeccable interior at every turnover, with high-end linens and eco-friendly products.",

      whatWeOffer: "What We Offer",
      offers: [
        {
          icon: Award,
          title: "5-Star Standards",
          description: "Cleaning protocol inspired by the finest hotels. Every corner is inspected according to an 80+ point checklist.",
        },
        {
          icon: Bed,
          title: "Premium Linens",
          description: "Egyptian cotton sheets, fluffy towels, bathrobes... Comfort worthy of the best establishments.",
        },
        {
          icon: Leaf,
          title: "Eco-Friendly Products",
          description: "Professional biodegradable cleaners, environmentally friendly and safe for travelers' health.",
        },
        {
          icon: Clock,
          title: "Express Turnover",
          description: "Minimum time between travelers. Our team intervenes quickly for a property ready in record time.",
        },
      ],

      processTitle: "Our Protocol",
      process: [
        {
          step: "01",
          title: "Inspection",
          description: "Property condition check and reporting of any potential damage.",
        },
        {
          step: "02",
          title: "Deep Cleaning",
          description: "Surface disinfection, floor-to-ceiling cleaning according to our strict protocol.",
        },
        {
          step: "03",
          title: "Setup",
          description: "Fresh linen installation, restocking of consumables, welcome touches.",
        },
        {
          step: "04",
          title: "Quality Control",
          description: "Final inspection according to checklist and confirmation photos sent.",
        },
      ],

      benefitsTitle: "Guaranteed Quality",
      benefits: [
        "Teams trained to hotel standards",
        "Premium linens included and managed",
        "High-end toiletries provided",
        "Automatic restocking of consumables",
        "Validation photos after each cleaning",
        "Quick intervention when needed",
      ],

      checklistTitle: "Our Checklist",
      checklist: [
        "Complete disinfection of contact surfaces",
        "Thorough kitchen and appliance cleaning",
        "Sanitized and sparkling bathrooms",
        "Floors vacuumed, washed and dried",
        "Interior windows cleaned",
        "Bed linen changed and ironed",
        "Fresh towels installed",
        "Trash emptied and bags replaced",
      ],

      galleryTitle: "Impeccable Result",

      ctaTitle: "An always impeccable interior",
      ctaSubtitle: "Offer your travelers flawless cleanliness",
      ctaButton: "Request a quote",
      backButton: "Back to services",
    },
  };

  const content = serviceDetails[isRTL ? "fr" : (t.nav.home === "Accueil" ? "fr" : "en")];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      alt: "Clean bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      alt: "Sparkling bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      alt: "Clean kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      alt: "Fresh towels",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
      alt: "Pristine living room",
    },
    {
      src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
      alt: "Clean linens",
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
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80"
              alt="Hotel cleaning"
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
                { value: "80+", label: isRTL || t.nav.home === "Accueil" ? "Points vérifiés" : "Checkpoints" },
                { value: "100%", label: isRTL || t.nav.home === "Accueil" ? "Écologique" : "Eco-friendly" },
                { value: "4h", label: isRTL || t.nav.home === "Accueil" ? "Rotation max" : "Max turnover" },
                { value: "5★", label: isRTL || t.nav.home === "Accueil" ? "Standards" : "Standards" },
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
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
                  alt="Clean bathroom"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Checklist */}
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
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                  alt="Clean kitchen"
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
                  {content.checklistTitle}
                </h2>
                <div className="space-y-4">
                  {content.checklist.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
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
                <Sparkles className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
