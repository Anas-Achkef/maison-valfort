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
  Coffee,
  Wind,
  CheckCircle,
  Building,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppartementParisLuxePage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Luxe Parisien",
      title: "Appartement Haussmannien",
      location: "Paris 8ème, France",
      intro: "Au cœur du prestigieux 8ème arrondissement, cet appartement haussmannien d'exception offre une vue imprenable sur la Tour Eiffel. Moulures, parquet point de Hongrie et cheminées d'époque côtoient un design contemporain raffiné.",
      price: "À partir de 1 500€",
      perNight: "/ nuit",
      bedrooms: "3 Chambres",
      bathrooms: "2 Salles de bain",
      surface: "180 m²",
      guests: "6 Voyageurs",
      rating: "4.9",
      features: "Équipements Premium",
      amenities: [
        { icon: Wifi, label: "WiFi Fibre Très Haut Débit" },
        { icon: Car, label: "Place de Parking Sécurisée" },
        { icon: Building, label: "Vue Tour Eiffel" },
        { icon: Sparkles, label: "Service de Ménage Quotidien" },
        { icon: Coffee, label: "Machine Nespresso Pro" },
        { icon: Wind, label: "Climatisation Silencieuse" },
      ],
      highlights: "Points Forts",
      highlightsList: [
        "Vue directe sur la Tour Eiffel",
        "Immeuble haussmannien classé",
        "Parquet point de Hongrie d'origine",
        "Moulures et cheminées d'époque",
        "Balcon filant avec vue",
        "À 5 min des Champs-Élysées",
        "Concierge de l'immeuble",
        "Cave à vin privée"
      ],
      description: "Description",
      descriptionText: "Cet appartement de 180m² au 5ème étage avec ascenseur incarne le raffinement parisien. Les hauts plafonds de 3,20m, les moulures finement ouvragées et les cheminées en marbre témoignent de l'histoire du lieu. Le mobilier de designer et les œuvres d'art contemporain créent un dialogue élégant entre passé et présent.",
      gallery: "Galerie",
      bookNow: "Réserver cet appartement",
      contactUs: "Nous contacter",
      backToProperties: "Retour aux propriétés"
    },
    en: {
      badge: "Parisian Luxury",
      title: "Haussmann Apartment",
      location: "Paris 8th, France",
      intro: "In the heart of the prestigious 8th arrondissement, this exceptional Haussmann apartment offers breathtaking views of the Eiffel Tower. Moldings, herringbone parquet and period fireplaces meet refined contemporary design.",
      price: "From €1,500",
      perNight: "/ night",
      bedrooms: "3 Bedrooms",
      bathrooms: "2 Bathrooms",
      surface: "180 m²",
      guests: "6 Guests",
      rating: "4.9",
      features: "Premium Amenities",
      amenities: [
        { icon: Wifi, label: "Ultra High-Speed Fiber WiFi" },
        { icon: Car, label: "Secure Parking Space" },
        { icon: Building, label: "Eiffel Tower View" },
        { icon: Sparkles, label: "Daily Housekeeping" },
        { icon: Coffee, label: "Pro Nespresso Machine" },
        { icon: Wind, label: "Silent Air Conditioning" },
      ],
      highlights: "Highlights",
      highlightsList: [
        "Direct view of the Eiffel Tower",
        "Listed Haussmann building",
        "Original herringbone parquet",
        "Period moldings and fireplaces",
        "Full-length balcony with views",
        "5 min from the Champs-Élysées",
        "Building concierge",
        "Private wine cellar"
      ],
      description: "Description",
      descriptionText: "This 180m² apartment on the 5th floor with elevator embodies Parisian refinement. The 3.20m high ceilings, finely crafted moldings and marble fireplaces reflect the history of the place. Designer furniture and contemporary artworks create an elegant dialogue between past and present.",
      gallery: "Gallery",
      bookNow: "Book this apartment",
      contactUs: "Contact us",
      backToProperties: "Back to properties"
    }
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    "https://images.unsplash.com/photo-1600566752547-33e9ddc71876?w=800&q=80",
    "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
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
