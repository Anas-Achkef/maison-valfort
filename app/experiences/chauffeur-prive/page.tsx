"use client";

import { motion } from "framer-motion";
import { Car, CheckCircle, ArrowLeft, Star, Clock, MapPin, Briefcase, Plane } from "lucide-react";
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

export default function ChauffeurPrivePage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Transport de Luxe",
      title: "Chauffeur Privé",
      subtitle: "Voyagez avec élégance et sérénité à bord de véhicules d'exception",
      intro: "Découvrez le confort ultime du transport privé avec nos chauffeurs professionnels. Mercedes Classe S, BMW Série 7, Range Rover... Chaque trajet devient une expérience de luxe.",
      price: "À partir de 80€/h",

      whatWeOffer: "Nos Services",
      offers: [
        {
          icon: Plane,
          title: "Transferts Aéroport",
          description: "Accueil personnalisé avec pancarte, suivi des vols en temps réel. Ponctualité garantie pour tous vos vols.",
        },
        {
          icon: Clock,
          title: "Mise à Disposition",
          description: "Votre chauffeur reste à votre entière disposition pour la journée ou la soirée. Flexibilité totale.",
        },
        {
          icon: MapPin,
          title: "Excursions & Visites",
          description: "Découvrez la région avec un chauffeur-guide. Circuits personnalisés selon vos envies.",
        },
        {
          icon: Briefcase,
          title: "Déplacements Business",
          description: "Service discret et professionnel pour vos rendez-vous d'affaires. Wifi et rafraîchissements à bord.",
        },
      ],

      processTitle: "L'Expérience",
      process: [
        {
          step: "01",
          title: "Réservation",
          description: "Communiquez vos besoins : trajet, horaires, type de véhicule souhaité.",
        },
        {
          step: "02",
          title: "Confirmation",
          description: "Nous vous envoyons les détails de votre chauffeur et du véhicule assigné.",
        },
        {
          step: "03",
          title: "Prise en charge",
          description: "Votre chauffeur vous attend à l'heure convenue, véhicule impeccable.",
        },
        {
          step: "04",
          title: "Voyage",
          description: "Détendez-vous et profitez du trajet en toute sérénité.",
        },
      ],

      benefitsTitle: "Nos Garanties",
      benefits: [
        "Chauffeurs professionnels expérimentés",
        "Véhicules haut de gamme récents et entretenus",
        "Ponctualité garantie ou remboursement",
        "Wifi et rafraîchissements à bord",
        "Discrétion et confidentialité assurées",
        "Disponibilité 24h/24, 7j/7",
      ],

      vehiclesTitle: "Notre Flotte",
      vehicles: [
        "Mercedes Classe S - L'excellence allemande",
        "BMW Série 7 - Sportivité et confort",
        "Range Rover - Luxe tout-terrain",
        "Rolls Royce - Le summum du prestige",
        "Tesla Model S - Luxe électrique silencieux",
        "Mercedes V-Class - Jusqu'à 7 passagers",
      ],

      galleryTitle: "Voyagez avec Style",

      ctaTitle: "Un trajet d'exception vous attend",
      ctaSubtitle: "Réservez votre chauffeur privé pour une expérience inoubliable",
      ctaButton: "Réserver un chauffeur",
      backButton: "Retour aux expériences",
    },
    en: {
      badge: "Luxury Transport",
      title: "Private Driver",
      subtitle: "Travel with elegance and serenity aboard exceptional vehicles",
      intro: "Discover the ultimate comfort of private transport with our professional drivers. Mercedes S-Class, BMW 7 Series, Range Rover... Every journey becomes a luxury experience.",
      price: "From €80/h",

      whatWeOffer: "Our Services",
      offers: [
        {
          icon: Plane,
          title: "Airport Transfers",
          description: "Personalized welcome with sign, real-time flight tracking. Punctuality guaranteed for all your flights.",
        },
        {
          icon: Clock,
          title: "At Your Disposal",
          description: "Your driver remains at your complete disposal for the day or evening. Total flexibility.",
        },
        {
          icon: MapPin,
          title: "Excursions & Tours",
          description: "Discover the region with a driver-guide. Customized tours according to your wishes.",
        },
        {
          icon: Briefcase,
          title: "Business Travel",
          description: "Discreet and professional service for your business meetings. Wifi and refreshments on board.",
        },
      ],

      processTitle: "The Experience",
      process: [
        {
          step: "01",
          title: "Booking",
          description: "Share your needs: journey, schedules, desired vehicle type.",
        },
        {
          step: "02",
          title: "Confirmation",
          description: "We send you details of your driver and assigned vehicle.",
        },
        {
          step: "03",
          title: "Pick-up",
          description: "Your driver awaits you at the agreed time, vehicle impeccable.",
        },
        {
          step: "04",
          title: "Journey",
          description: "Relax and enjoy the ride in complete serenity.",
        },
      ],

      benefitsTitle: "Our Guarantees",
      benefits: [
        "Experienced professional drivers",
        "Recent, well-maintained luxury vehicles",
        "Punctuality guaranteed or refund",
        "Wifi and refreshments on board",
        "Discretion and confidentiality assured",
        "Available 24/7",
      ],

      vehiclesTitle: "Our Fleet",
      vehicles: [
        "Mercedes S-Class - German excellence",
        "BMW 7 Series - Sportiness and comfort",
        "Range Rover - Luxury all-terrain",
        "Rolls Royce - The ultimate prestige",
        "Tesla Model S - Silent electric luxury",
        "Mercedes V-Class - Up to 7 passengers",
      ],

      galleryTitle: "Travel in Style",

      ctaTitle: "An exceptional journey awaits",
      ctaSubtitle: "Book your private driver for an unforgettable experience",
      ctaButton: "Book a driver",
      backButton: "Back to experiences",
    },
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80", alt: "Luxury car" },
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", alt: "Mercedes interior" },
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", alt: "Porsche" },
    { src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", alt: "Range Rover" },
    { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80", alt: "BMW" },
    { src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80", alt: "Tesla" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920&q=80" alt="Luxury car" fill className="object-cover" priority />
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

        {/* Benefits & Fleet */}
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
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-10">{pageContent.vehiclesTitle}</h2>
                <div className="space-y-4">
                  {pageContent.vehicles.map((vehicle, index) => (
                    <motion.div key={index} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{vehicle}</span>
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
                <Car className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
