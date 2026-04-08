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
  CheckCircle,
  Wine
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MasProvencalPage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Charme Authentique",
      title: "Mas Provençal",
      location: "Luberon, France",
      intro: "Au cœur du Luberon, ce mas provençal du XVIIIe siècle a été entièrement restauré avec passion. Entre champs de lavande et vignobles réputés, il offre l'authenticité de la Provence dans un cadre de grand standing.",
      price: "À partir de 1 800€",
      perNight: "/ nuit",
      bedrooms: "4 Chambres",
      bathrooms: "3 Salles de bain",
      surface: "320 m²",
      guests: "8 Voyageurs",
      rating: "4.8",
      features: "Équipements Premium",
      amenities: [
        { icon: Wifi, label: "WiFi Haut Débit" },
        { icon: Car, label: "Parking Privé" },
        { icon: Waves, label: "Piscine Chauffée" },
        { icon: TreePine, label: "Parc Arboré 5000m²" },
        { icon: Wine, label: "Cave à Vin" },
        { icon: Coffee, label: "Cuisine d'Été" },
      ],
      highlights: "Points Forts",
      highlightsList: [
        "Mas du XVIIIe siècle entièrement rénové",
        "Piscine chauffée dans un écrin de verdure",
        "Vue imprenable sur les vignes",
        "Four à pain traditionnel fonctionnel",
        "Potager bio à disposition",
        "Vélos électriques inclus",
        "À 10 min de Gordes et Roussillon",
        "Dégustations de vins organisées"
      ],
      description: "Description",
      descriptionText: "Ce mas de 320m² allie le charme des pierres anciennes au confort contemporain le plus raffiné. Les 4 chambres aux noms de villages provençaux disposent chacune de leur propre caractère, avec tomettes anciennes, poutres apparentes et literie haut de gamme. La grande cuisine provençale invite aux repas conviviaux.",
      gallery: "Galerie",
      bookNow: "Réserver ce mas",
      contactUs: "Nous contacter",
      backToProperties: "Retour aux propriétés"
    },
    en: {
      badge: "Authentic Charm",
      title: "Provençal Farmhouse",
      location: "Luberon, France",
      intro: "In the heart of the Luberon, this 18th-century Provençal farmhouse has been entirely restored with passion. Between lavender fields and renowned vineyards, it offers the authenticity of Provence in a high-end setting.",
      price: "From €1,800",
      perNight: "/ night",
      bedrooms: "4 Bedrooms",
      bathrooms: "3 Bathrooms",
      surface: "320 m²",
      guests: "8 Guests",
      rating: "4.8",
      features: "Premium Amenities",
      amenities: [
        { icon: Wifi, label: "High-Speed WiFi" },
        { icon: Car, label: "Private Parking" },
        { icon: Waves, label: "Heated Pool" },
        { icon: TreePine, label: "5000m² Wooded Park" },
        { icon: Wine, label: "Wine Cellar" },
        { icon: Coffee, label: "Summer Kitchen" },
      ],
      highlights: "Highlights",
      highlightsList: [
        "Fully renovated 18th-century farmhouse",
        "Heated pool in a green setting",
        "Stunning views over the vineyards",
        "Traditional working bread oven",
        "Organic vegetable garden available",
        "Electric bikes included",
        "10 min from Gordes and Roussillon",
        "Wine tastings organized"
      ],
      description: "Description",
      descriptionText: "This 320m² farmhouse combines the charm of ancient stones with the most refined contemporary comfort. The 4 bedrooms, named after Provençal villages, each have their own character, with antique terracotta tiles, exposed beams and high-end bedding. The large Provençal kitchen invites convivial meals.",
      gallery: "Gallery",
      bookNow: "Book this farmhouse",
      contactUs: "Contact us",
      backToProperties: "Back to properties"
    }
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
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
