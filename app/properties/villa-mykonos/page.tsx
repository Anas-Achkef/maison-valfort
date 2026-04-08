"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Star, Wifi, Car, Coffee, Wind, CheckCircle, Sun, Waves } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VillaMykonosPage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Cyclades Grecques",
      title: "Villa Cycladique",
      location: "Mykonos, Grèce",
      intro: "Perchée sur les collines de Mykonos avec vue sur la mer Égée, cette villa blanche typique des Cyclades incarne l'élégance grecque contemporaine. Architecture traditionnelle, piscine infinity et couchers de soleil légendaires vous attendent.",
      price: "À partir de 2 600€",
      perNight: "/ nuit",
      bedrooms: "5 Chambres",
      bathrooms: "5 Salles de bain",
      surface: "400 m²",
      guests: "10 Voyageurs",
      rating: "4.9",
      features: "Équipements Premium",
      amenities: [
        { icon: Wifi, label: "WiFi Haut Débit" },
        { icon: Car, label: "Parking Privé" },
        { icon: Waves, label: "Piscine Infinity" },
        { icon: Sun, label: "Terrasses Panoramiques" },
        { icon: Coffee, label: "Chef sur Demande" },
        { icon: Wind, label: "Climatisation" },
      ],
      highlights: "Points Forts",
      highlightsList: [
        "Vue mer Égée à 180°",
        "Architecture cycladique authentique",
        "Piscine infinity face au coucher de soleil",
        "À 10 min de Mykonos Town",
        "Plage privée accessible",
        "Décoration design grec",
        "Transfert héliport disponible",
        "Service de yacht sur demande"
      ],
      description: "Description",
      descriptionText: "Cette villa de 400m² épouse parfaitement le paysage mykoniote avec ses murs blancs immaculés et ses touches de bleu profond. Les 5 suites indépendantes offrent chacune une terrasse privée face à la mer. Les espaces communs, dont un salon extérieur couvert et une salle à manger al fresco, sont conçus pour profiter du climat exceptionnel.",
      gallery: "Galerie",
      bookNow: "Réserver cette villa",
      contactUs: "Nous contacter",
      backToProperties: "Retour aux propriétés"
    },
    en: {
      badge: "Greek Cyclades",
      title: "Cycladic Villa",
      location: "Mykonos, Greece",
      intro: "Perched on the hills of Mykonos overlooking the Aegean Sea, this typical white Cycladic villa embodies contemporary Greek elegance. Traditional architecture, infinity pool and legendary sunsets await you.",
      price: "From €2,600",
      perNight: "/ night",
      bedrooms: "5 Bedrooms",
      bathrooms: "5 Bathrooms",
      surface: "400 m²",
      guests: "10 Guests",
      rating: "4.9",
      features: "Premium Amenities",
      amenities: [
        { icon: Wifi, label: "High-Speed WiFi" },
        { icon: Car, label: "Private Parking" },
        { icon: Waves, label: "Infinity Pool" },
        { icon: Sun, label: "Panoramic Terraces" },
        { icon: Coffee, label: "Chef on Request" },
        { icon: Wind, label: "Air Conditioning" },
      ],
      highlights: "Highlights",
      highlightsList: [
        "180° Aegean Sea views",
        "Authentic Cycladic architecture",
        "Infinity pool facing the sunset",
        "10 min from Mykonos Town",
        "Accessible private beach",
        "Greek design decor",
        "Heliport transfer available",
        "Yacht service on request"
      ],
      description: "Description",
      descriptionText: "This 400m² villa perfectly embraces the Mykonos landscape with its immaculate white walls and deep blue accents. The 5 independent suites each offer a private terrace facing the sea. Common areas, including a covered outdoor lounge and al fresco dining room, are designed to enjoy the exceptional climate.",
      gallery: "Gallery",
      bookNow: "Book this villa",
      contactUs: "Contact us",
      backToProperties: "Back to properties"
    }
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];
  const galleryImages = [
    "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        <section className="relative h-[70vh] md:h-[80vh]">
          <Image src={galleryImages[0]} alt={pageContent.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/30 to-transparent" />
          <Link href="/#proprietes" className={`absolute top-24 ${isRTL ? "right-6" : "left-6"} z-20 flex items-center gap-2 text-blanc hover:text-or transition-colors`}>
            <ArrowLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} /><span className="font-outfit">{pageContent.backToProperties}</span>
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
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p className="text-noir/70 text-lg md:text-xl leading-relaxed font-outfit">{pageContent.intro}</p></motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="font-cormorant text-3xl text-noir font-medium mb-6">{pageContent.description}</h2><p className="text-noir/60 leading-relaxed font-outfit">{pageContent.descriptionText}</p></motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="font-cormorant text-3xl text-noir font-medium mb-6">{pageContent.features}</h2><div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">{pageContent.amenities.map((amenity, index) => { const Icon = amenity.icon; return (<div key={index} className="flex items-center gap-3 p-4 bg-blanc rounded-lg shadow-sm"><div className="w-10 h-10 bg-bordeaux/10 rounded-full flex items-center justify-center"><Icon className="w-5 h-5 text-bordeaux" /></div><span className="font-outfit text-noir/80">{amenity.label}</span></div>); })}</div></motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="font-cormorant text-3xl text-noir font-medium mb-6">{pageContent.highlights}</h2><div className="grid sm:grid-cols-2 gap-3">{pageContent.highlightsList.map((highlight, index) => (<div key={index} className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}><CheckCircle className="w-5 h-5 text-bordeaux mt-0.5 flex-shrink-0" /><span className="font-outfit text-noir/70">{highlight}</span></div>))}</div></motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="font-cormorant text-3xl text-noir font-medium mb-6">{pageContent.gallery}</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{galleryImages.slice(1).map((image, index) => (<motion.div key={index} whileHover={{ scale: 1.02 }} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"><Image src={image} alt={`${pageContent.title} - ${index + 1}`} fill className="object-cover" /></motion.div>))}</div></motion.div>
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
