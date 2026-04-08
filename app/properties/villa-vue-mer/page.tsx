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
  Coffee,
  Wind,
  CheckCircle,
  Anchor
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VillaVueMerPage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Villa Prestige",
      title: "Villa Vue Mer",
      location: "Cap Ferrat, France",
      intro: "Surplombant la Méditerranée depuis la presqu'île légendaire du Cap Ferrat, cette villa d'exception offre une vue à 180° sur la Grande Bleue. Son architecture contemporaine et son accès privé à la plage en font l'une des propriétés les plus exclusives de la Riviera.",
      price: "À partir de 4 500€",
      perNight: "/ nuit",
      bedrooms: "6 Chambres",
      bathrooms: "5 Salles de bain",
      surface: "550 m²",
      guests: "12 Voyageurs",
      rating: "5.0",
      features: "Équipements Premium",
      amenities: [
        { icon: Wifi, label: "WiFi Fibre Ultra-Rapide" },
        { icon: Car, label: "Parking Sécurisé 4 Voitures" },
        { icon: Waves, label: "Piscine à Débordement Vue Mer" },
        { icon: Anchor, label: "Accès Privé à la Plage" },
        { icon: Coffee, label: "Chef Disponible" },
        { icon: Wind, label: "Domotique Intégrale" },
      ],
      highlights: "Points Forts",
      highlightsList: [
        "Vue panoramique 180° sur la Méditerranée",
        "Accès direct à une crique privée",
        "Piscine chauffée à débordement",
        "Suite parentale 60m² avec terrasse privée",
        "Ascenseur privatif panoramique",
        "Spa avec hammam et sauna",
        "Héliport à proximité",
        "Service de majordome inclus"
      ],
      description: "Description",
      descriptionText: "Cette villa contemporaine de 550m² représente le summum du luxe sur la Côte d'Azur. Conçue par un architecte de renommée internationale, elle marie parfaitement le béton, le verre et la pierre naturelle pour créer des espaces lumineux ouverts sur l'horizon marin. Les 6 suites, toutes avec vue mer, sont équipées des plus belles finitions.",
      gallery: "Galerie",
      bookNow: "Réserver cette villa",
      contactUs: "Nous contacter",
      backToProperties: "Retour aux propriétés"
    },
    en: {
      badge: "Prestige Villa",
      title: "Sea View Villa",
      location: "Cap Ferrat, France",
      intro: "Overlooking the Mediterranean from the legendary Cap Ferrat peninsula, this exceptional villa offers 180° views of the azure sea. Its contemporary architecture and private beach access make it one of the most exclusive properties on the Riviera.",
      price: "From €4,500",
      perNight: "/ night",
      bedrooms: "6 Bedrooms",
      bathrooms: "5 Bathrooms",
      surface: "550 m²",
      guests: "12 Guests",
      rating: "5.0",
      features: "Premium Amenities",
      amenities: [
        { icon: Wifi, label: "Ultra-Fast Fiber WiFi" },
        { icon: Car, label: "Secure 4-Car Parking" },
        { icon: Waves, label: "Infinity Pool with Sea View" },
        { icon: Anchor, label: "Private Beach Access" },
        { icon: Coffee, label: "Chef Available" },
        { icon: Wind, label: "Full Home Automation" },
      ],
      highlights: "Highlights",
      highlightsList: [
        "180° panoramic Mediterranean views",
        "Direct access to a private cove",
        "Heated infinity pool",
        "60m² master suite with private terrace",
        "Panoramic private elevator",
        "Spa with hammam and sauna",
        "Nearby helipad",
        "Butler service included"
      ],
      description: "Description",
      descriptionText: "This contemporary 550m² villa represents the pinnacle of luxury on the French Riviera. Designed by an internationally renowned architect, it perfectly blends concrete, glass and natural stone to create bright spaces open to the sea horizon. All 6 suites have sea views and are equipped with the finest finishes.",
      gallery: "Gallery",
      bookNow: "Book this villa",
      contactUs: "Contact us",
      backToProperties: "Back to properties"
    }
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
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

          <Link
            href="/#proprietes"
            className={`absolute top-24 ${isRTL ? "right-6" : "left-6"} z-20 flex items-center gap-2 text-blanc hover:text-or transition-colors`}
          >
            <ArrowLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            <span className="font-outfit">{pageContent.backToProperties}</span>
          </Link>

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
              <div className="lg:col-span-2 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-noir/70 text-lg md:text-xl leading-relaxed font-outfit">
                    {pageContent.intro}
                  </p>
                </motion.div>

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
