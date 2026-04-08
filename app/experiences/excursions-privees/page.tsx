"use client";

import { motion } from "framer-motion";
import { Mountain, CheckCircle, ArrowLeft, Star, MapPin, Wine, TreePine, Utensils } from "lucide-react";
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

export default function ExcursionsPriveesPage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Découvertes & Évasion",
      title: "Excursions Privées",
      subtitle: "Explorez les trésors cachés de la région avec des guides passionnés",
      intro: "Découvrez l'authenticité de nos régions françaises avec des excursions sur mesure. Vignobles, villages pittoresques, sites naturels d'exception... Chaque sortie est une aventure unique.",
      price: "À partir de 200€",

      whatWeOffer: "Nos Excursions",
      offers: [
        {
          icon: Wine,
          title: "Routes des Vins",
          description: "Visitez les plus beaux domaines viticoles. Dégustations privées avec les vignerons, découverte des caves et accords mets-vins.",
        },
        {
          icon: TreePine,
          title: "Randonnées Guidées",
          description: "Sentiers secrets et panoramas à couper le souffle. Randonnées adaptées à tous les niveaux avec guide naturaliste.",
        },
        {
          icon: MapPin,
          title: "Villages de Charme",
          description: "Explorez les plus beaux villages de France. Ruelles médiévales, marchés locaux, artisans et trésors architecturaux.",
        },
        {
          icon: Utensils,
          title: "Découvertes Gastronomiques",
          description: "Marchés de producteurs, ateliers cuisine, déjeuners dans des fermes auberges. Goûtez au terroir authentique.",
        },
      ],

      processTitle: "L'Expérience",
      process: [
        {
          step: "01",
          title: "Personnalisation",
          description: "Échangeons sur vos centres d'intérêt pour créer l'excursion idéale.",
        },
        {
          step: "02",
          title: "Organisation",
          description: "Nous planifions l'itinéraire, réservons les visites et préparons les surprises.",
        },
        {
          step: "03",
          title: "Départ",
          description: "Votre guide privé vous prend en charge pour une journée de découvertes.",
        },
        {
          step: "04",
          title: "Souvenirs",
          description: "Repartez avec des souvenirs locaux et des adresses secrètes.",
        },
      ],

      benefitsTitle: "Nos Atouts",
      benefits: [
        "Guides locaux passionnés et cultivés",
        "Accès à des sites privés exceptionnels",
        "Itinéraires personnalisés hors des sentiers battus",
        "Transport en véhicule confortable",
        "Déjeuner gastronomique inclus (sur certaines formules)",
        "Flexibilité totale et rythme adapté",
      ],

      destinationsTitle: "Destinations Populaires",
      destinations: [
        "Côte d'Azur - Villages perchés et criques secrètes",
        "Provence - Lavande, marchés et villages du Luberon",
        "Bordeaux - Grands Crus et châteaux prestigieux",
        "Bourgogne - Route des Grands Crus et patrimoine",
        "Alsace - Route des vins et villages colorés",
        "Normandie - Mont Saint-Michel et plages du débarquement",
        "Loire - Châteaux et jardins à la française",
        "Alpes - Lacs, sommets et villages alpins",
      ],

      galleryTitle: "Nos Plus Belles Escapades",

      ctaTitle: "Partez à l'aventure",
      ctaSubtitle: "Créons ensemble votre excursion sur mesure",
      ctaButton: "Planifier une excursion",
      backButton: "Retour aux expériences",
    },
    en: {
      badge: "Discoveries & Escape",
      title: "Private Excursions",
      subtitle: "Explore the region's hidden treasures with passionate guides",
      intro: "Discover the authenticity of French regions with tailor-made excursions. Vineyards, picturesque villages, exceptional natural sites... Each outing is a unique adventure.",
      price: "From €200",

      whatWeOffer: "Our Excursions",
      offers: [
        {
          icon: Wine,
          title: "Wine Routes",
          description: "Visit the most beautiful wine estates. Private tastings with winemakers, cellar discovery and food-wine pairings.",
        },
        {
          icon: TreePine,
          title: "Guided Hikes",
          description: "Secret trails and breathtaking panoramas. Hikes adapted to all levels with naturalist guide.",
        },
        {
          icon: MapPin,
          title: "Charming Villages",
          description: "Explore the most beautiful villages in France. Medieval lanes, local markets, artisans and architectural treasures.",
        },
        {
          icon: Utensils,
          title: "Gastronomic Discoveries",
          description: "Producers' markets, cooking workshops, lunches in farm inns. Taste authentic local products.",
        },
      ],

      processTitle: "The Experience",
      process: [
        {
          step: "01",
          title: "Customization",
          description: "Let's discuss your interests to create the ideal excursion.",
        },
        {
          step: "02",
          title: "Organization",
          description: "We plan the itinerary, book visits and prepare surprises.",
        },
        {
          step: "03",
          title: "Departure",
          description: "Your private guide picks you up for a day of discoveries.",
        },
        {
          step: "04",
          title: "Memories",
          description: "Leave with local souvenirs and secret addresses.",
        },
      ],

      benefitsTitle: "Our Strengths",
      benefits: [
        "Passionate and knowledgeable local guides",
        "Access to exceptional private sites",
        "Personalized itineraries off the beaten path",
        "Transportation in comfortable vehicle",
        "Gourmet lunch included (on certain packages)",
        "Total flexibility and adapted pace",
      ],

      destinationsTitle: "Popular Destinations",
      destinations: [
        "French Riviera - Perched villages and secret coves",
        "Provence - Lavender, markets and Luberon villages",
        "Bordeaux - Grand Crus and prestigious châteaux",
        "Burgundy - Grand Crus route and heritage",
        "Alsace - Wine route and colorful villages",
        "Normandy - Mont Saint-Michel and D-Day beaches",
        "Loire Valley - Châteaux and French gardens",
        "Alps - Lakes, peaks and alpine villages",
      ],

      galleryTitle: "Our Most Beautiful Getaways",

      ctaTitle: "Start your adventure",
      ctaSubtitle: "Let's create your tailor-made excursion together",
      ctaButton: "Plan an excursion",
      backButton: "Back to experiences",
    },
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=80", alt: "Mountain view" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", alt: "Village" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", alt: "Vineyard" },
    { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", alt: "Forest" },
    { src: "https://images.unsplash.com/photo-1499002238440-d264f9436037?w=800&q=80", alt: "Lavender" },
    { src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80", alt: "French village" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1920&q=80" alt="Excursion" fill className="object-cover" priority />
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

        {/* Benefits & Destinations */}
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
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-10">{pageContent.destinationsTitle}</h2>
                <div className="space-y-4">
                  {pageContent.destinations.map((destination, index) => (
                    <motion.div key={index} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{destination}</span>
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
                <Mountain className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
