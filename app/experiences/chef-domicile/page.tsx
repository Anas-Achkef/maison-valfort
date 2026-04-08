"use client";

import { motion } from "framer-motion";
import { ChefHat, CheckCircle, ArrowLeft, Star, Utensils, Wine, Leaf, Award } from "lucide-react";
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

export default function ChefDomicilePage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Expérience Gastronomique",
      title: "Chef à Domicile",
      subtitle: "Une expérience culinaire d'exception dans l'intimité de votre location",
      intro: "Offrez-vous un moment gastronomique unique avec nos chefs étoilés et talents culinaires. Du marché à votre assiette, vivez une expérience sensorielle inoubliable sans quitter votre hébergement.",
      price: "À partir de 150€",

      whatWeOffer: "Nos Formules",
      offers: [
        {
          icon: Award,
          title: "Dîner Gastronomique",
          description: "Menu 5 à 7 services élaboré par un chef étoilé. Accord mets-vins possible. Une expérience digne des plus grands restaurants.",
        },
        {
          icon: Utensils,
          title: "Brunch Luxueux",
          description: "Réveillez-vous avec un brunch préparé sur place : viennoiseries maison, œufs bénédicte, pancakes, fruits frais et champagne.",
        },
        {
          icon: Wine,
          title: "Apéritif Dînatoire",
          description: "Cocktail privé avec tapas gastronomiques, canapés raffinés et sélection de champagnes pour vos événements.",
        },
        {
          icon: Leaf,
          title: "Cuisine Sur Mesure",
          description: "Menu personnalisé selon vos préférences : végétarien, sans gluten, cuisine du monde, spécialités régionales...",
        },
      ],

      processTitle: "Le Déroulement",
      process: [
        {
          step: "01",
          title: "Consultation",
          description: "Échange avec le chef pour définir vos envies, restrictions alimentaires et budget.",
        },
        {
          step: "02",
          title: "Préparation",
          description: "Le chef sélectionne les meilleurs produits frais au marché le jour même.",
        },
        {
          step: "03",
          title: "Expérience",
          description: "Cuisine réalisée devant vous, service à table, explications des plats.",
        },
        {
          step: "04",
          title: "Détente",
          description: "La cuisine est laissée propre. Vous n'avez qu'à profiter.",
        },
      ],

      benefitsTitle: "Pourquoi choisir cette expérience",
      benefits: [
        "Chefs avec expérience en restaurants étoilés",
        "Produits frais et locaux de saison",
        "Menu entièrement personnalisable",
        "Service et vaisselle inclus",
        "Accords mets-vins par un sommelier",
        "Cuisine laissée propre après le service",
      ],

      menuTitle: "Exemples de Menus",
      menus: [
        "Amuse-bouche : Huître pochée, écume de champagne",
        "Entrée : Foie gras mi-cuit, chutney de figues",
        "Poisson : Saint-Jacques snackées, purée de céleri",
        "Viande : Filet de bœuf Wagyu, jus corsé aux truffes",
        "Fromage : Sélection affinée de nos régions",
        "Dessert : Sphère chocolat Valrhona, cœur passion",
      ],

      galleryTitle: "L'Art Culinaire",

      ctaTitle: "Une soirée gastronomique inoubliable",
      ctaSubtitle: "Réservez votre chef privé pour une expérience sur mesure",
      ctaButton: "Réserver un chef",
      backButton: "Retour aux expériences",
    },
    en: {
      badge: "Gastronomic Experience",
      title: "Private Chef",
      subtitle: "An exceptional culinary experience in the privacy of your rental",
      intro: "Treat yourself to a unique gastronomic moment with our Michelin-starred chefs and culinary talents. From market to plate, live an unforgettable sensory experience without leaving your accommodation.",
      price: "From €150",

      whatWeOffer: "Our Packages",
      offers: [
        {
          icon: Award,
          title: "Gourmet Dinner",
          description: "5 to 7 course menu crafted by a starred chef. Wine pairing available. An experience worthy of the finest restaurants.",
        },
        {
          icon: Utensils,
          title: "Luxury Brunch",
          description: "Wake up to a brunch prepared on-site: homemade pastries, eggs benedict, pancakes, fresh fruits and champagne.",
        },
        {
          icon: Wine,
          title: "Cocktail Reception",
          description: "Private cocktail with gourmet tapas, refined canapés and champagne selection for your events.",
        },
        {
          icon: Leaf,
          title: "Custom Cuisine",
          description: "Personalized menu according to your preferences: vegetarian, gluten-free, world cuisine, regional specialties...",
        },
      ],

      processTitle: "The Experience",
      process: [
        {
          step: "01",
          title: "Consultation",
          description: "Discussion with the chef to define your desires, dietary restrictions and budget.",
        },
        {
          step: "02",
          title: "Preparation",
          description: "The chef selects the finest fresh products at the market on the same day.",
        },
        {
          step: "03",
          title: "Experience",
          description: "Cooking done in front of you, table service, dish explanations.",
        },
        {
          step: "04",
          title: "Relaxation",
          description: "The kitchen is left clean. You just have to enjoy.",
        },
      ],

      benefitsTitle: "Why choose this experience",
      benefits: [
        "Chefs with Michelin-starred restaurant experience",
        "Fresh and local seasonal products",
        "Fully customizable menu",
        "Service and dishes included",
        "Wine pairings by a sommelier",
        "Kitchen left clean after service",
      ],

      menuTitle: "Sample Menus",
      menus: [
        "Amuse-bouche: Poached oyster, champagne foam",
        "Starter: Semi-cooked foie gras, fig chutney",
        "Fish: Seared scallops, celery purée",
        "Meat: Wagyu beef fillet, truffle jus",
        "Cheese: Refined selection from our regions",
        "Dessert: Valrhona chocolate sphere, passion heart",
      ],

      galleryTitle: "Culinary Art",

      ctaTitle: "An unforgettable gastronomic evening",
      ctaSubtitle: "Book your private chef for a tailor-made experience",
      ctaButton: "Book a chef",
      backButton: "Back to experiences",
    },
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80", alt: "Chef cooking" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Gourmet dish" },
    { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Fine dining" },
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Restaurant table" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Plated dish" },
    { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", alt: "Dessert" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1920&q=80"
              alt="Private chef"
              fill
              className="object-cover"
              priority
            />
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

        {/* Benefits & Menu */}
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
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-10">{pageContent.menuTitle}</h2>
                <div className="space-y-4">
                  {pageContent.menus.map((menu, index) => (
                    <motion.div key={index} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{menu}</span>
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
                <ChefHat className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
