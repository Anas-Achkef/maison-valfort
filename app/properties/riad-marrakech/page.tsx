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
  Sparkles,
  Waves
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RiadMarrakechPage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Art de Vivre Marocain",
      title: "Riad d'Exception",
      location: "Médina, Marrakech",
      intro: "Au cœur de la médina millénaire de Marrakech, ce riad d'exception a été restauré par les meilleurs artisans marocains. Son patio central orné d'une fontaine en zellige, ses salons aux plafonds peints et sa terrasse avec vue sur l'Atlas créent une atmosphère envoûtante.",
      price: "À partir de 800€",
      perNight: "/ nuit",
      bedrooms: "6 Chambres",
      bathrooms: "6 Salles de bain",
      surface: "500 m²",
      guests: "12 Voyageurs",
      rating: "4.9",
      features: "Équipements Premium",
      amenities: [
        { icon: Wifi, label: "WiFi Haut Débit" },
        { icon: Car, label: "Transfert Aéroport Inclus" },
        { icon: Waves, label: "Piscine Intérieure Chauffée" },
        { icon: Sparkles, label: "Hammam Traditionnel" },
        { icon: Coffee, label: "Chef Cuisinier" },
        { icon: Wind, label: "Climatisation & Chauffage" },
      ],
      highlights: "Points Forts",
      highlightsList: [
        "Riad du XVIIe siècle entièrement restauré",
        "Patio central avec fontaine en zellige",
        "Hammam traditionnel privatif",
        "Terrasse panoramique vue Atlas",
        "Chef cuisinier pour tajines et pastillas",
        "Personnel de maison dévoué",
        "À 5 min de la place Jemaa el-Fna",
        "Cours de cuisine marocaine sur demande"
      ],
      description: "Description",
      descriptionText: "Ce riad de 500m² sur 3 niveaux est un joyau architectural. Les 6 suites, décorées de tadelakt, zelliges et bois de cèdre sculpté, offrent chacune une atmosphère unique. Le salon principal avec son plafond peint à la main et ses tapis berbères anciens invite à la détente. La piscine intérieure chauffée et le hammam complètent cette expérience authentique.",
      gallery: "Galerie",
      bookNow: "Réserver ce riad",
      contactUs: "Nous contacter",
      backToProperties: "Retour aux propriétés"
    },
    en: {
      badge: "Moroccan Art of Living",
      title: "Exceptional Riad",
      location: "Medina, Marrakech",
      intro: "In the heart of Marrakech's ancient medina, this exceptional riad has been restored by the finest Moroccan craftsmen. Its central patio adorned with a zellige fountain, salons with painted ceilings and terrace with Atlas views create an enchanting atmosphere.",
      price: "From €800",
      perNight: "/ night",
      bedrooms: "6 Bedrooms",
      bathrooms: "6 Bathrooms",
      surface: "500 m²",
      guests: "12 Guests",
      rating: "4.9",
      features: "Premium Amenities",
      amenities: [
        { icon: Wifi, label: "High-Speed WiFi" },
        { icon: Car, label: "Airport Transfer Included" },
        { icon: Waves, label: "Heated Indoor Pool" },
        { icon: Sparkles, label: "Traditional Hammam" },
        { icon: Coffee, label: "Private Chef" },
        { icon: Wind, label: "A/C & Heating" },
      ],
      highlights: "Highlights",
      highlightsList: [
        "Fully restored 17th century riad",
        "Central patio with zellige fountain",
        "Private traditional hammam",
        "Panoramic terrace with Atlas views",
        "Chef for tajines and pastillas",
        "Dedicated house staff",
        "5 min from Jemaa el-Fna square",
        "Moroccan cooking classes on request"
      ],
      description: "Description",
      descriptionText: "This 500m² riad on 3 levels is an architectural gem. The 6 suites, decorated with tadelakt, zelliges and carved cedar wood, each offer a unique atmosphere. The main salon with its hand-painted ceiling and antique Berber carpets invites relaxation. The heated indoor pool and hammam complete this authentic experience.",
      gallery: "Gallery",
      bookNow: "Book this riad",
      contactUs: "Contact us",
      backToProperties: "Back to properties"
    }
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    "https://images.unsplash.com/photo-1539437829697-1b4ed5aebd19?w=1200&q=80",
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=800&q=80",
    "https://images.unsplash.com/photo-1590059390047-f5e617a5c26f?w=800&q=80",
    "https://images.unsplash.com/photo-1548018560-c7196ca91c94?w=800&q=80",
    "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&q=80",
    "https://images.unsplash.com/photo-1584132869994-873f9363a562?w=800&q=80",
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
