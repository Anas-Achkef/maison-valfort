"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Star,
  Wifi,
  Car,
  Waves,
  TreePine,
  Coffee,
  Wind,
  CheckCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VillaMediterraneennePage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Villa d'Exception",
      title: "Villa Méditerranéenne",
      location: "Côte d'Azur, France",
      intro: "Nichée sur les hauteurs de la Côte d'Azur, cette villa méditerranéenne incarne l'élégance française dans toute sa splendeur. Avec ses jardins à la française, sa piscine à débordement et ses vues panoramiques sur la mer, elle offre un cadre idyllique pour des vacances inoubliables.",
      price: "À partir de 2 500€",
      perNight: "/ nuit",
      bedrooms: "5 Chambres",
      bathrooms: "4 Salles de bain",
      surface: "450 m²",
      guests: "10 Voyageurs",
      rating: "4.9",
      features: "Équipements Premium",
      amenities: [
        { icon: Wifi, label: "WiFi Fibre Haut Débit" },
        { icon: Car, label: "Garage 3 Voitures" },
        { icon: Waves, label: "Piscine à Débordement" },
        { icon: TreePine, label: "Jardin Paysager 2000m²" },
        { icon: Coffee, label: "Cuisine Professionnelle" },
        { icon: Wind, label: "Climatisation Réversible" },
      ],
      highlights: "Points Forts",
      highlightsList: [
        "Vue panoramique sur la Méditerranée",
        "Jardins à la française entretenus quotidiennement",
        "Suite parentale avec dressing et jacuzzi",
        "Cave à vin climatisée (200 bouteilles)",
        "Accès direct plage privée (5 min)",
        "Home cinéma 4K avec son Dolby Atmos",
        "Personnel de maison sur demande",
        "Conciergerie 24/7"
      ],
      description: "Description",
      descriptionText: "Cette villa d'architecte de 450m² allie le charme méditerranéen traditionnel au confort moderne le plus raffiné. Les 5 chambres avec salles de bain en suite offrent une intimité parfaite pour les familles ou groupes d'amis. Le séjour de 80m² avec ses baies vitrées offre une luminosité exceptionnelle et une vue imprenable sur les jardins et la mer.",
      gallery: "Galerie",
      bookNow: "Réserver cette villa",
      contactUs: "Nous contacter",
      backToProperties: "Retour aux propriétés"
    },
    en: {
      badge: "Exceptional Villa",
      title: "Mediterranean Villa",
      location: "French Riviera, France",
      intro: "Nestled in the hills of the French Riviera, this Mediterranean villa embodies French elegance in all its splendor. With its French gardens, infinity pool and panoramic sea views, it offers an idyllic setting for an unforgettable vacation.",
      price: "From €2,500",
      perNight: "/ night",
      bedrooms: "5 Bedrooms",
      bathrooms: "4 Bathrooms",
      surface: "450 m²",
      guests: "10 Guests",
      rating: "4.9",
      features: "Premium Amenities",
      amenities: [
        { icon: Wifi, label: "High-Speed Fiber WiFi" },
        { icon: Car, label: "3-Car Garage" },
        { icon: Waves, label: "Infinity Pool" },
        { icon: TreePine, label: "2000m² Landscaped Garden" },
        { icon: Coffee, label: "Professional Kitchen" },
        { icon: Wind, label: "Reversible Air Conditioning" },
      ],
      highlights: "Highlights",
      highlightsList: [
        "Panoramic Mediterranean views",
        "Daily maintained French gardens",
        "Master suite with dressing room and jacuzzi",
        "Climate-controlled wine cellar (200 bottles)",
        "Direct private beach access (5 min)",
        "4K home cinema with Dolby Atmos",
        "House staff on request",
        "24/7 concierge service"
      ],
      description: "Description",
      descriptionText: "This architect-designed 450m² villa combines traditional Mediterranean charm with the most refined modern comfort. The 5 bedrooms with en-suite bathrooms offer perfect privacy for families or groups of friends. The 80m² living room with its bay windows offers exceptional brightness and breathtaking views of the gardens and sea.",
      gallery: "Gallery",
      bookNow: "Book this villa",
      contactUs: "Contact us",
      backToProperties: "Back to properties"
    }
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh]">
          <Image
            src={galleryImages[0]}
            alt={pageContent.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/30 to-transparent" />

          {/* Back Button */}
          <Link
            href="/#proprietes"
            className={`absolute top-24 ${isRTL ? "right-6" : "left-6"} z-20 flex items-center gap-2 text-blanc hover:text-or transition-colors`}
          >
            <ArrowLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            <span className="font-outfit">{pageContent.backToProperties}</span>
          </Link>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-or text-sm tracking-[0.3em] uppercase mb-4 font-outfit"
              >
                {pageContent.badge}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-blanc font-medium mb-4"
              >
                {pageContent.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`flex items-center gap-2 text-blanc/80 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <MapPin className="w-5 h-5" />
                <span className="font-outfit text-lg">{pageContent.location}</span>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`flex flex-wrap gap-6 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <div className="flex items-center gap-2 text-blanc">
                  <Bed className="w-5 h-5" />
                  <span className="font-outfit">{pageContent.bedrooms}</span>
                </div>
                <div className="flex items-center gap-2 text-blanc">
                  <Bath className="w-5 h-5" />
                  <span className="font-outfit">{pageContent.bathrooms}</span>
                </div>
                <div className="flex items-center gap-2 text-blanc">
                  <Maximize className="w-5 h-5" />
                  <span className="font-outfit">{pageContent.surface}</span>
                </div>
                <div className="flex items-center gap-2 text-or">
                  <Star className="w-5 h-5 fill-or" />
                  <span className="font-outfit font-semibold">{pageContent.rating}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Description */}
              <div className="lg:col-span-2 space-y-12">
                {/* Intro */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-noir/70 text-lg md:text-xl leading-relaxed font-outfit">
                    {pageContent.intro}
                  </p>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-cormorant text-3xl text-noir font-medium mb-6">
                    {pageContent.description}
                  </h2>
                  <p className="text-noir/60 leading-relaxed font-outfit">
                    {pageContent.descriptionText}
                  </p>
                </motion.div>

                {/* Amenities */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-cormorant text-3xl text-noir font-medium mb-6">
                    {pageContent.features}
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {pageContent.amenities.map((amenity, index) => {
                      const Icon = amenity.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-blanc rounded-lg shadow-sm"
                        >
                          <div className="w-10 h-10 bg-bordeaux/10 rounded-full flex items-center justify-center">
                            <Icon className="w-5 h-5 text-bordeaux" />
                          </div>
                          <span className="font-outfit text-noir/80">{amenity.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-cormorant text-3xl text-noir font-medium mb-6">
                    {pageContent.highlights}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {pageContent.highlightsList.map((highlight, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                        <CheckCircle className="w-5 h-5 text-bordeaux mt-0.5 flex-shrink-0" />
                        <span className="font-outfit text-noir/70">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Gallery */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-cormorant text-3xl text-noir font-medium mb-6">
                    {pageContent.gallery}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.slice(1).map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
                      >
                        <Image
                          src={image}
                          alt={`${pageContent.title} - ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Booking Card */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="sticky top-24 bg-blanc rounded-2xl shadow-xl p-6 md:p-8"
                >
                  <div className="text-center mb-6">
                    <span className="font-cormorant text-4xl text-bordeaux font-semibold">
                      {pageContent.price}
                    </span>
                    <span className="text-noir/50 font-outfit">{pageContent.perNight}</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className={`flex items-center justify-between py-3 border-b border-noir/10 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="text-noir/60 font-outfit">{pageContent.bedrooms}</span>
                      <Bed className="w-5 h-5 text-bordeaux" />
                    </div>
                    <div className={`flex items-center justify-between py-3 border-b border-noir/10 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="text-noir/60 font-outfit">{pageContent.bathrooms}</span>
                      <Bath className="w-5 h-5 text-bordeaux" />
                    </div>
                    <div className={`flex items-center justify-between py-3 border-b border-noir/10 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="text-noir/60 font-outfit">{pageContent.guests}</span>
                      <Star className="w-5 h-5 text-bordeaux" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <motion.a
                      href="#contact"
                      className="block w-full py-4 bg-bordeaux text-blanc text-center font-medium hover:bg-noir transition-colors duration-300 font-outfit rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {pageContent.bookNow}
                    </motion.a>
                    <motion.a
                      href="#contact"
                      className="block w-full py-4 border border-noir/20 text-noir text-center hover:border-bordeaux hover:text-bordeaux transition-all duration-300 font-outfit rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {pageContent.contactUs}
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
