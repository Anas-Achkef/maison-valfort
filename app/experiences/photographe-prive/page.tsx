"use client";

import { motion } from "framer-motion";
import { Camera, CheckCircle, ArrowLeft, Star, Film, Users, Heart, Sparkles } from "lucide-react";
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

export default function PhotographePrivePage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Souvenirs d'Exception",
      title: "Photographe Privé",
      subtitle: "Immortalisez vos moments précieux avec un regard d'artiste",
      intro: "Capturez l'essence de votre séjour avec un photographe professionnel dédié. Portraits de famille, couple, célébrations ou simplement les instants magiques de vos vacances. Des souvenirs qui traversent le temps.",
      price: "À partir de 250€",

      whatWeOffer: "Nos Formules",
      offers: [
        {
          icon: Users,
          title: "Séance Portrait",
          description: "Photos de famille, couple ou solo dans des lieux d'exception. 1 à 2 heures de shooting avec 30+ photos retouchées.",
        },
        {
          icon: Heart,
          title: "Demande en Mariage",
          description: "Immortalisation discrète de ce moment unique. Notre photographe capture la surprise et l'émotion en toute discrétion.",
        },
        {
          icon: Sparkles,
          title: "Événement Privé",
          description: "Anniversaire, fête de famille, célébration... Couverture complète de votre événement avec reportage photo.",
        },
        {
          icon: Film,
          title: "Vidéo Souvenir",
          description: "Film cinématique de votre séjour ou événement. Montage professionnel avec musique personnalisée.",
        },
      ],

      processTitle: "L'Expérience",
      process: [
        {
          step: "01",
          title: "Briefing",
          description: "Échange sur vos attentes, le style souhaité et les lieux de shooting.",
        },
        {
          step: "02",
          title: "Séance",
          description: "Shooting détendu avec notre photographe qui vous met à l'aise.",
        },
        {
          step: "03",
          title: "Sélection",
          description: "Vous choisissez vos photos préférées parmi les meilleurs clichés.",
        },
        {
          step: "04",
          title: "Livraison",
          description: "Réception de vos photos retouchées en haute résolution sous 7 jours.",
        },
      ],

      benefitsTitle: "Nos Garanties",
      benefits: [
        "Photographes professionnels expérimentés",
        "Matériel haut de gamme dernière génération",
        "Retouches professionnelles incluses",
        "Galerie privée en ligne sécurisée",
        "Téléchargement HD illimité",
        "Option impression et album disponible",
      ],

      packagesTitle: "Nos Forfaits",
      packages: [
        "Mini Session - 30min, 15 photos retouchées",
        "Session Classique - 1h, 30 photos retouchées",
        "Session Premium - 2h, 60 photos retouchées",
        "Demi-journée - 4h, 100+ photos retouchées",
        "Journée complète - 8h, 200+ photos",
        "Vidéo Cinématique - Film 3-5 min monté",
      ],

      galleryTitle: "Notre Portfolio",

      ctaTitle: "Créez des souvenirs éternels",
      ctaSubtitle: "Réservez votre séance photo privée",
      ctaButton: "Réserver un photographe",
      backButton: "Retour aux expériences",
    },
    en: {
      badge: "Exceptional Memories",
      title: "Private Photographer",
      subtitle: "Immortalize your precious moments with an artist's eye",
      intro: "Capture the essence of your stay with a dedicated professional photographer. Family portraits, couples, celebrations or simply the magical moments of your vacation. Memories that stand the test of time.",
      price: "From €250",

      whatWeOffer: "Our Packages",
      offers: [
        {
          icon: Users,
          title: "Portrait Session",
          description: "Family, couple or solo photos in exceptional locations. 1 to 2 hours of shooting with 30+ retouched photos.",
        },
        {
          icon: Heart,
          title: "Marriage Proposal",
          description: "Discreet capture of this unique moment. Our photographer captures the surprise and emotion with complete discretion.",
        },
        {
          icon: Sparkles,
          title: "Private Event",
          description: "Birthday, family party, celebration... Complete coverage of your event with photo reportage.",
        },
        {
          icon: Film,
          title: "Souvenir Video",
          description: "Cinematic film of your stay or event. Professional editing with personalized music.",
        },
      ],

      processTitle: "The Experience",
      process: [
        {
          step: "01",
          title: "Briefing",
          description: "Discussion about your expectations, desired style and shooting locations.",
        },
        {
          step: "02",
          title: "Session",
          description: "Relaxed shooting with our photographer who puts you at ease.",
        },
        {
          step: "03",
          title: "Selection",
          description: "You choose your favorite photos from the best shots.",
        },
        {
          step: "04",
          title: "Delivery",
          description: "Receive your retouched high-resolution photos within 7 days.",
        },
      ],

      benefitsTitle: "Our Guarantees",
      benefits: [
        "Experienced professional photographers",
        "Latest generation high-end equipment",
        "Professional retouching included",
        "Secure private online gallery",
        "Unlimited HD download",
        "Print and album option available",
      ],

      packagesTitle: "Our Packages",
      packages: [
        "Mini Session - 30min, 15 retouched photos",
        "Classic Session - 1h, 30 retouched photos",
        "Premium Session - 2h, 60 retouched photos",
        "Half Day - 4h, 100+ retouched photos",
        "Full Day - 8h, 200+ photos",
        "Cinematic Video - 3-5 min edited film",
      ],

      galleryTitle: "Our Portfolio",

      ctaTitle: "Create eternal memories",
      ctaSubtitle: "Book your private photo session",
      ctaButton: "Book a photographer",
      backButton: "Back to experiences",
    },
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80", alt: "Wedding photo" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Couple" },
    { src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80", alt: "Family portrait" },
    { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80", alt: "Camera" },
    { src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80", alt: "Travel" },
    { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80", alt: "Celebration" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1920&q=80" alt="Photography" fill className="object-cover" priority />
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

        {/* Benefits & Packages */}
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
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-10">{pageContent.packagesTitle}</h2>
                <div className="space-y-4">
                  {pageContent.packages.map((pkg, index) => (
                    <motion.div key={index} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{pkg}</span>
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
                <Camera className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
