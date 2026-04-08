"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Star, Wifi, Car, Wind, CheckCircle, Building, Waves, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PenthouseDubaiPage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Ultra-Luxe",
      title: "Penthouse Marina",
      location: "Dubai Marina, EAU",
      intro: "Au sommet d'une des plus hautes tours de Dubai Marina, ce penthouse offre des vues à couper le souffle sur Palm Jumeirah et le Burj Khalifa. Un espace de 600m² où le luxe le plus absolu rencontre la démesure architecturale de Dubai.",
      price: "À partir de 5 000€",
      perNight: "/ nuit",
      bedrooms: "4 Chambres",
      bathrooms: "5 Salles de bain",
      surface: "600 m²",
      guests: "8 Voyageurs",
      rating: "4.9",
      features: "Équipements Premium",
      amenities: [
        { icon: Wifi, label: "WiFi Fibre 10Gbps" },
        { icon: Car, label: "3 Places Parking VIP" },
        { icon: Waves, label: "Piscine Privée 75ème Étage" },
        { icon: Building, label: "Vue Burj Khalifa & Palm" },
        { icon: Sparkles, label: "Service Butler 24/7" },
        { icon: Wind, label: "Domotique Bang & Olufsen" },
      ],
      highlights: "Points Forts",
      highlightsList: [
        "Vue 360° sur Dubai",
        "Piscine privée au 75ème étage",
        "Service de butler 24/7",
        "Accès spa et gym exclusifs",
        "Hélipad privé sur le toit",
        "Cave à cigares et bar à whisky",
        "Cinéma privé 12 places",
        "Chauffeur avec Rolls-Royce inclus"
      ],
      description: "Description",
      descriptionText: "Ce penthouse de 600m² sur deux niveaux représente le summum du luxe à Dubai. Les 4 suites, dont une master suite de 100m² avec dressing et spa privatif, offrent un confort inégalé. Le salon avec ses plafonds de 6m et ses baies vitrées panoramiques est meublé des plus grandes marques de design italien. La terrasse avec piscine privée offre une vue vertigineuse sur la Marina et le Golfe.",
      gallery: "Galerie",
      bookNow: "Réserver ce penthouse",
      contactUs: "Nous contacter",
      backToProperties: "Retour aux propriétés"
    },
    en: {
      badge: "Ultra-Luxury",
      title: "Marina Penthouse",
      location: "Dubai Marina, UAE",
      intro: "At the top of one of Dubai Marina's tallest towers, this penthouse offers breathtaking views of Palm Jumeirah and Burj Khalifa. A 600m² space where the most absolute luxury meets Dubai's architectural grandeur.",
      price: "From €5,000",
      perNight: "/ night",
      bedrooms: "4 Bedrooms",
      bathrooms: "5 Bathrooms",
      surface: "600 m²",
      guests: "8 Guests",
      rating: "4.9",
      features: "Premium Amenities",
      amenities: [
        { icon: Wifi, label: "10Gbps Fiber WiFi" },
        { icon: Car, label: "3 VIP Parking Spaces" },
        { icon: Waves, label: "Private Pool 75th Floor" },
        { icon: Building, label: "Burj Khalifa & Palm Views" },
        { icon: Sparkles, label: "24/7 Butler Service" },
        { icon: Wind, label: "Bang & Olufsen Home Automation" },
      ],
      highlights: "Highlights",
      highlightsList: [
        "360° Dubai views",
        "Private pool on 75th floor",
        "24/7 butler service",
        "Exclusive spa and gym access",
        "Private helipad on roof",
        "Cigar room and whisky bar",
        "12-seat private cinema",
        "Chauffeur with Rolls-Royce included"
      ],
      description: "Description",
      descriptionText: "This 600m² duplex penthouse represents the pinnacle of luxury in Dubai. The 4 suites, including a 100m² master suite with dressing room and private spa, offer unparalleled comfort. The living room with its 6m ceilings and panoramic bay windows is furnished by the finest Italian design brands. The terrace with private pool offers dizzying views of the Marina and the Gulf.",
      gallery: "Gallery",
      bookNow: "Book this penthouse",
      contactUs: "Contact us",
      backToProperties: "Back to properties"
    }
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];
  const galleryImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
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
