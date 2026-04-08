"use client";

import { motion } from "framer-motion";
import { Plane, CheckCircle, ArrowLeft, Star, Globe, Calendar, MapPin } from "lucide-react";
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

export default function ConciergerieVoyagePage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Sur Mesure",
      title: "Conciergerie Voyage",
      subtitle: "L'organisation complète de votre séjour parfait, de A à Z",
      intro: "Laissez-nous créer le voyage de vos rêves. De la recherche du lieu idéal à la dernière touche de votre séjour, notre équipe de spécialistes conçoit des expériences sur mesure qui dépassent vos attentes.",
      price: "Forfait personnalisé",

      whatWeOffer: "Nos Services",
      offers: [
        {
          icon: Globe,
          title: "Destinations Sur Mesure",
          description: "Week-end romantique, voyage en famille, séjour aventure... Nous dénichons la destination parfaite selon vos envies et votre budget.",
        },
        {
          icon: Plane,
          title: "Vols & Transferts",
          description: "Réservation de vols en classe affaires ou première, jets privés, transferts VIP. Voyagez dans les meilleures conditions.",
        },
        {
          icon: MapPin,
          title: "Hébergements d'Exception",
          description: "Palaces, villas privées, lodges exclusifs... Accès aux établissements les plus prestigieux avec avantages privilégiés.",
        },
        {
          icon: Calendar,
          title: "Planning Complet",
          description: "Itinéraire jour par jour, activités, restaurants, expériences uniques. Tout est planifié et réservé pour vous.",
        },
      ],

      processTitle: "Notre Approche",
      process: [
        {
          step: "01",
          title: "Découverte",
          description: "Nous apprenons à vous connaître : vos goûts, vos envies, vos contraintes.",
        },
        {
          step: "02",
          title: "Conception",
          description: "Notre équipe crée un programme sur mesure avec plusieurs options.",
        },
        {
          step: "03",
          title: "Réservation",
          description: "Nous gérons toutes les réservations avec nos partenaires privilégiés.",
        },
        {
          step: "04",
          title: "Accompagnement",
          description: "Support 24/7 pendant votre voyage et assistance en cas d'imprévu.",
        },
      ],

      benefitsTitle: "L'Expérience Maison Valfort",
      benefits: [
        "Conseiller voyage personnel dédié",
        "Accès à des expériences exclusives",
        "Tarifs préférentiels chez nos partenaires",
        "Carnet de voyage digital personnalisé",
        "Conciergerie disponible 24/7 pendant le séjour",
        "Attention aux moindres détails",
      ],

      servicesTitle: "Ce que nous organisons",
      services: [
        "Recherche et réservation d'hébergements",
        "Billets d'avion et surclassements",
        "Transferts et locations de véhicules",
        "Restaurants et tables gastronomiques",
        "Activités et excursions privées",
        "Billets de spectacles et événements",
        "Services de guides privés",
        "Demandes spéciales (anniversaire, demande en mariage...)",
      ],

      galleryTitle: "Voyages d'Exception",

      ctaTitle: "Créons votre voyage idéal",
      ctaSubtitle: "Partagez vos rêves, nous les transformons en réalité",
      ctaButton: "Planifier mon voyage",
      backButton: "Retour aux expériences",
    },
    en: {
      badge: "Tailor-Made",
      title: "Travel Concierge",
      subtitle: "Complete organization of your perfect stay, from A to Z",
      intro: "Let us create the trip of your dreams. From finding the ideal location to the final touch of your stay, our team of specialists designs tailor-made experiences that exceed your expectations.",
      price: "Custom package",

      whatWeOffer: "Our Services",
      offers: [
        {
          icon: Globe,
          title: "Tailor-Made Destinations",
          description: "Romantic weekend, family trip, adventure stay... We find the perfect destination according to your desires and budget.",
        },
        {
          icon: Plane,
          title: "Flights & Transfers",
          description: "Business or first class flight booking, private jets, VIP transfers. Travel in the best conditions.",
        },
        {
          icon: MapPin,
          title: "Exceptional Accommodations",
          description: "Palaces, private villas, exclusive lodges... Access to the most prestigious establishments with privileged benefits.",
        },
        {
          icon: Calendar,
          title: "Complete Planning",
          description: "Day-by-day itinerary, activities, restaurants, unique experiences. Everything is planned and booked for you.",
        },
      ],

      processTitle: "Our Approach",
      process: [
        {
          step: "01",
          title: "Discovery",
          description: "We get to know you: your tastes, your desires, your constraints.",
        },
        {
          step: "02",
          title: "Design",
          description: "Our team creates a tailor-made program with several options.",
        },
        {
          step: "03",
          title: "Booking",
          description: "We handle all reservations with our privileged partners.",
        },
        {
          step: "04",
          title: "Support",
          description: "24/7 support during your trip and assistance in case of unexpected events.",
        },
      ],

      benefitsTitle: "The Maison Valfort Experience",
      benefits: [
        "Dedicated personal travel advisor",
        "Access to exclusive experiences",
        "Preferential rates with our partners",
        "Personalized digital travel book",
        "24/7 concierge available during stay",
        "Attention to the smallest details",
      ],

      servicesTitle: "What we organize",
      services: [
        "Accommodation search and booking",
        "Air tickets and upgrades",
        "Transfers and car rentals",
        "Restaurants and gourmet tables",
        "Private activities and excursions",
        "Show and event tickets",
        "Private guide services",
        "Special requests (birthday, marriage proposal...)",
      ],

      galleryTitle: "Exceptional Journeys",

      ctaTitle: "Let's create your ideal trip",
      ctaSubtitle: "Share your dreams, we turn them into reality",
      ctaButton: "Plan my trip",
      backButton: "Back to experiences",
    },
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80", alt: "Private jet" },
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Luxury resort" },
    { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", alt: "Maldives" },
    { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80", alt: "Hotel pool" },
    { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", alt: "Safari" },
    { src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80", alt: "Beach" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=80" alt="Private jet" fill className="object-cover" priority />
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

        {/* Benefits & Services */}
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
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-10">{pageContent.servicesTitle}</h2>
                <div className="space-y-4">
                  {pageContent.services.map((service, index) => (
                    <motion.div key={index} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
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
            <motion.h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-blanc font-medium mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {pageContent.ctaTitle}
            </motion.h2>
            <motion.p className="text-blanc/80 text-lg mb-10 font-outfit" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              {pageContent.ctaSubtitle}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link href="/#contact" className="inline-flex items-center gap-3 px-10 py-4 bg-blanc text-bordeaux hover:bg-or hover:text-noir transition-all duration-300 font-outfit font-medium">
                {pageContent.ctaButton}
                <Plane className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
