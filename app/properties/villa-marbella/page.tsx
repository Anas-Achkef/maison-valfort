"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Bed, Bath, Maximize, Star, Wifi, Car, Coffee, Wind, CheckCircle, Waves, Sun
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VillaMarbellaPage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Costa del Sol",
      title: "Villa Costa del Sol",
      location: "Marbella, Espagne",
      intro: "Sur les hauteurs de Marbella, cette villa contemporaine offre une vue spectaculaire sur la Méditerranée et la côte africaine. À quelques minutes de Puerto Banús et des meilleurs golfs de la région, elle incarne le style de vie luxueux de la Costa del Sol.",
      price: "À partir de 2 800€",
      perNight: "/ nuit",
      bedrooms: "6 Chambres",
      bathrooms: "5 Salles de bain",
      surface: "650 m²",
      guests: "12 Voyageurs",
      rating: "4.9",
      features: "Équipements Premium",
      amenities: [
        { icon: Wifi, label: "WiFi Fibre Optique" },
        { icon: Car, label: "Garage 4 Voitures" },
        { icon: Waves, label: "Piscine à Débordement" },
        { icon: Sun, label: "Solarium Privé" },
        { icon: Coffee, label: "Cuisine d'Été" },
        { icon: Wind, label: "Domotique Complète" },
      ],
      highlights: "Points Forts",
      highlightsList: [
        "Vue panoramique mer et Afrique",
        "Piscine à débordement chauffée",
        "À 5 min de Puerto Banús",
        "Proche des meilleurs golfs",
        "Terrasses sur 3 niveaux",
        "Salle de cinéma privée",
        "Cave à vin climatisée",
        "Accès plage-club privé"
      ],
      description: "Description",
      descriptionText: "Cette villa de 650m² sur un terrain de 3000m² représente l'excellence architecturale contemporaine. Les 6 suites luxueuses, dont une suite parentale de 80m² avec terrasse privée et jacuzzi, offrent des vues imprenables. Les espaces de vie intérieurs et extérieurs se fondent harmonieusement grâce aux immenses baies vitrées.",
      gallery: "Galerie",
      bookNow: "Réserver cette villa",
      contactUs: "Nous contacter",
      backToProperties: "Retour aux propriétés"
    },
    en: {
      badge: "Costa del Sol",
      title: "Costa del Sol Villa",
      location: "Marbella, Spain",
      intro: "On the heights of Marbella, this contemporary villa offers spectacular views of the Mediterranean and the African coast. Minutes from Puerto Banús and the region's best golf courses, it embodies the luxurious Costa del Sol lifestyle.",
      price: "From €2,800",
      perNight: "/ night",
      bedrooms: "6 Bedrooms",
      bathrooms: "5 Bathrooms",
      surface: "650 m²",
      guests: "12 Guests",
      rating: "4.9",
      features: "Premium Amenities",
      amenities: [
        { icon: Wifi, label: "Fiber Optic WiFi" },
        { icon: Car, label: "4-Car Garage" },
        { icon: Waves, label: "Infinity Pool" },
        { icon: Sun, label: "Private Solarium" },
        { icon: Coffee, label: "Summer Kitchen" },
        { icon: Wind, label: "Full Home Automation" },
      ],
      highlights: "Highlights",
      highlightsList: [
        "Panoramic sea and Africa views",
        "Heated infinity pool",
        "5 min from Puerto Banús",
        "Near the best golf courses",
        "Terraces on 3 levels",
        "Private cinema room",
        "Climate-controlled wine cellar",
        "Private beach club access"
      ],
      description: "Description",
      descriptionText: "This 650m² villa on a 3000m² plot represents contemporary architectural excellence. The 6 luxurious suites, including an 80m² master suite with private terrace and jacuzzi, offer breathtaking views. Indoor and outdoor living spaces blend harmoniously through immense bay windows.",
      gallery: "Gallery",
      bookNow: "Book this villa",
      contactUs: "Contact us",
      backToProperties: "Back to properties"
    }
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        <section className="relative h-[70vh] md:h-[80vh]">
          <Image src={galleryImages[0]} alt={pageContent.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/30 to-transparent" />
          <Link href="/#proprietes" className={`absolute top-24 ${isRTL ? "right-6" : "left-6"} z-20 flex items-center gap-2 text-blanc hover:text-or transition-colors`}>
            <ArrowLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            <span className="font-outfit">{pageContent.backToProperties}</span>
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-or text-sm tracking-[0.3em] uppercase mb-4 font-outfit">{pageContent.badge}</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-blanc font-medium mb-4">{pageContent.title}</motion.h1>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`flex items-center gap-2 text-blanc/80 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                <MapPin className="w-5 h-5" /><span className="font-outfit text-lg">{pageContent.location}</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className={`flex flex-wrap gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="flex items-center gap-2 text-blanc"><Bed className="w-5 h-5" /><span className="font-outfit">{pageContent.bedrooms}</span></div>
                <div className="flex items-center gap-2 text-blanc"><Bath className="w-5 h-5" /><span className="font-outfit">{pageContent.bathrooms}</span></div>
                <div className="flex items-center gap-2 text-blanc"><Maximize className="w-5 h-5" /><span className="font-outfit">{pageContent.surface}</span></div>
                <div className="flex items-center gap-2 text-or"><Star className="w-5 h-5 fill-or" /><span className="font-outfit font-semibold">{pageContent.rating}</span></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <p className="text-noir/70 text-lg md:text-xl leading-relaxed font-outfit">{pageContent.intro}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-cormorant text-3xl text-noir font-medium mb-6">{pageContent.description}</h2>
                  <p className="text-noir/60 leading-relaxed font-outfit">{pageContent.descriptionText}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-cormorant text-3xl text-noir font-medium mb-6">{pageContent.features}</h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {pageContent.amenities.map((amenity, index) => {
                      const Icon = amenity.icon;
                      return (<div key={index} className="flex items-center gap-3 p-4 bg-blanc rounded-lg shadow-sm"><div className="w-10 h-10 bg-bordeaux/10 rounded-full flex items-center justify-center"><Icon className="w-5 h-5 text-bordeaux" /></div><span className="font-outfit text-noir/80">{amenity.label}</span></div>);
                    })}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-cormorant text-3xl text-noir font-medium mb-6">{pageContent.highlights}</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {pageContent.highlightsList.map((highlight, index) => (<div key={index} className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}><CheckCircle className="w-5 h-5 text-bordeaux mt-0.5 flex-shrink-0" /><span className="font-outfit text-noir/70">{highlight}</span></div>))}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-cormorant text-3xl text-noir font-medium mb-6">{pageContent.gallery}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.slice(1).map((image, index) => (<motion.div key={index} whileHover={{ scale: 1.02 }} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"><Image src={image} alt={`${pageContent.title} - ${index + 1}`} fill className="object-cover" /></motion.div>))}
                  </div>
                </motion.div>
              </div>
              <div className="lg:col-span-1">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="sticky top-24 bg-blanc rounded-2xl shadow-xl p-6 md:p-8">
                  <div className="text-center mb-6"><span className="font-cormorant text-4xl text-bordeaux font-semibold">{pageContent.price}</span><span className="text-noir/50 font-outfit">{pageContent.perNight}</span></div>
                  <div className="space-y-4 mb-8">
                    <div className={`flex items-center justify-between py-3 border-b border-noir/10 ${isRTL ? "flex-row-reverse" : ""}`}><span className="text-noir/60 font-outfit">{pageContent.bedrooms}</span><Bed className="w-5 h-5 text-bordeaux" /></div>
                    <div className={`flex items-center justify-between py-3 border-b border-noir/10 ${isRTL ? "flex-row-reverse" : ""}`}><span className="text-noir/60 font-outfit">{pageContent.bathrooms}</span><Bath className="w-5 h-5 text-bordeaux" /></div>
                    <div className={`flex items-center justify-between py-3 border-b border-noir/10 ${isRTL ? "flex-row-reverse" : ""}`}><span className="text-noir/60 font-outfit">{pageContent.guests}</span><Star className="w-5 h-5 text-bordeaux" /></div>
                  </div>
                  <div className="space-y-3">
                    <motion.a href="#contact" className="block w-full py-4 bg-bordeaux text-blanc text-center font-medium hover:bg-noir transition-colors duration-300 font-outfit rounded-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>{pageContent.bookNow}</motion.a>
                    <motion.a href="#contact" className="block w-full py-4 border border-noir/20 text-noir text-center hover:border-bordeaux hover:text-bordeaux transition-all duration-300 font-outfit rounded-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>{pageContent.contactUs}</motion.a>
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
