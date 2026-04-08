"use client";

import { motion } from "framer-motion";
import { Camera, CheckCircle, ArrowLeft, Star, Eye, Sparkles, Video, Compass } from "lucide-react";
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

export default function ShootingPhotoPage() {
  const { t, isRTL } = useLanguage();

  const serviceDetails = {
    fr: {
      badge: "Service Premium",
      title: "Shooting Photo Professionnel",
      subtitle: "Sublimez votre bien avec des visuels d'exception qui captivent et convertissent",
      intro: "Chez Maison Valfort, nous savons que la première impression est déterminante. Nos shootings photo professionnels transforment votre propriété en une expérience visuelle irrésistible qui attire les voyageurs les plus exigeants.",

      whatWeOffer: "Ce que nous offrons",
      offers: [
        {
          icon: Camera,
          title: "Photographie HD Premium",
          description: "Photos haute définition capturées avec du matériel professionnel haut de gamme. Chaque cliché est soigneusement composé pour mettre en valeur les atouts uniques de votre bien.",
        },
        {
          icon: Compass,
          title: "Visite Virtuelle 360°",
          description: "Permettez aux voyageurs de se projeter dans votre espace grâce à une visite immersive à 360°. Une technologie qui augmente significativement les réservations.",
        },
        {
          icon: Video,
          title: "Vidéo Cinématique",
          description: "Des vidéos professionnelles avec drone et stabilisateur qui racontent l'histoire de votre propriété et créent une connexion émotionnelle instantanée.",
        },
        {
          icon: Sparkles,
          title: "Retouche Experte",
          description: "Post-production professionnelle incluant correction colorimétrique, optimisation de la luminosité et mise en valeur des espaces pour un rendu parfait.",
        },
      ],

      processTitle: "Notre Processus",
      process: [
        {
          step: "01",
          title: "Préparation",
          description: "Nous coordonnons avec vous la date idéale et vous conseillons sur la mise en scène optimale de chaque pièce.",
        },
        {
          step: "02",
          title: "Shooting",
          description: "Notre photographe professionnel capture votre bien sous tous les angles avec un équipement de pointe.",
        },
        {
          step: "03",
          title: "Post-Production",
          description: "Retouche experte de chaque image, création de la visite virtuelle et montage vidéo si applicable.",
        },
        {
          step: "04",
          title: "Livraison",
          description: "Réception de vos visuels optimisés pour toutes les plateformes sous 48-72h.",
        },
      ],

      benefitsTitle: "Pourquoi c'est essentiel",
      benefits: [
        "Les annonces avec photos professionnelles génèrent 40% de clics en plus",
        "Les visites virtuelles augmentent le temps passé sur l'annonce de 300%",
        "Des visuels de qualité justifient des tarifs premium",
        "Différenciez-vous immédiatement de la concurrence",
        "Créez une première impression mémorable et professionnelle",
        "Attirez des voyageurs plus qualifiés et respectueux",
      ],

      equipmentTitle: "Équipement Professionnel",
      equipment: [
        "Appareils photo Full Frame dernière génération",
        "Objectifs grand angle professionnels",
        "Éclairage studio portable",
        "Drone homologué pour prises de vue aériennes",
        "Caméra 360° haute résolution",
        "Stabilisateur motorisé pour vidéos fluides",
      ],

      galleryTitle: "Exemples de Réalisations",

      ctaTitle: "Prêt à sublimer votre bien ?",
      ctaSubtitle: "Contactez-nous pour planifier votre shooting photo professionnel",
      ctaButton: "Demander un devis",
      backButton: "Retour aux services",
    },
    en: {
      badge: "Premium Service",
      title: "Professional Photo Shoot",
      subtitle: "Elevate your property with exceptional visuals that captivate and convert",
      intro: "At Maison Valfort, we know that first impressions are decisive. Our professional photo shoots transform your property into an irresistible visual experience that attracts the most discerning travelers.",

      whatWeOffer: "What We Offer",
      offers: [
        {
          icon: Camera,
          title: "Premium HD Photography",
          description: "High-definition photos captured with top-of-the-line professional equipment. Each shot is carefully composed to highlight your property's unique features.",
        },
        {
          icon: Compass,
          title: "360° Virtual Tour",
          description: "Allow travelers to immerse themselves in your space with a 360° virtual tour. A technology that significantly increases bookings.",
        },
        {
          icon: Video,
          title: "Cinematic Video",
          description: "Professional videos with drone and gimbal that tell your property's story and create an instant emotional connection.",
        },
        {
          icon: Sparkles,
          title: "Expert Retouching",
          description: "Professional post-production including color correction, brightness optimization, and space enhancement for a perfect result.",
        },
      ],

      processTitle: "Our Process",
      process: [
        {
          step: "01",
          title: "Preparation",
          description: "We coordinate the ideal date with you and advise on optimal staging for each room.",
        },
        {
          step: "02",
          title: "Shooting",
          description: "Our professional photographer captures your property from every angle with cutting-edge equipment.",
        },
        {
          step: "03",
          title: "Post-Production",
          description: "Expert retouching of each image, virtual tour creation, and video editing if applicable.",
        },
        {
          step: "04",
          title: "Delivery",
          description: "Receive your visuals optimized for all platforms within 48-72 hours.",
        },
      ],

      benefitsTitle: "Why It's Essential",
      benefits: [
        "Listings with professional photos generate 40% more clicks",
        "Virtual tours increase time spent on listings by 300%",
        "Quality visuals justify premium rates",
        "Immediately stand out from competition",
        "Create a memorable and professional first impression",
        "Attract more qualified and respectful travelers",
      ],

      equipmentTitle: "Professional Equipment",
      equipment: [
        "Latest generation Full Frame cameras",
        "Professional wide-angle lenses",
        "Portable studio lighting",
        "Certified drone for aerial shots",
        "High-resolution 360° camera",
        "Motorized gimbal for smooth videos",
      ],

      galleryTitle: "Portfolio Examples",

      ctaTitle: "Ready to elevate your property?",
      ctaSubtitle: "Contact us to schedule your professional photo shoot",
      ctaButton: "Request a quote",
      backButton: "Back to services",
    },
  };

  const content = serviceDetails[isRTL ? "fr" : (t.nav.home === "Accueil" ? "fr" : "en")];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      alt: "Luxury villa exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      alt: "Modern living room",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      alt: "Elegant bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      alt: "Stunning property",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      alt: "Pool view",
    },
    {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      alt: "Kitchen design",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&q=80"
              alt="Professional photographer"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-noir/60 to-noir/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/#services"
                className={`inline-flex items-center gap-2 text-blanc/70 hover:text-or transition-colors mb-8 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                {content.backButton}
              </Link>
            </motion.div>

            <motion.span
              className="inline-block text-or text-sm tracking-[0.3em] uppercase mb-4 font-outfit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.badge}
            </motion.span>

            <motion.h1
              className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-blanc font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.title}
            </motion.h1>

            <motion.p
              className="text-blanc/80 text-xl md:text-2xl font-cormorant max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.p
              className="text-noir/80 text-lg md:text-xl leading-relaxed font-outfit text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.intro}
            </motion.p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.whatWeOffer}
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {content.offers.map((offer, index) => {
                const Icon = offer.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-creme p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-14 h-14 bg-bordeaux/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-bordeaux" />
                    </div>
                    <h3 className="font-cormorant text-2xl text-noir font-medium mb-4">
                      {offer.title}
                    </h3>
                    <p className="text-noir/70 font-outfit leading-relaxed">
                      {offer.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.galleryTitle}
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-colors duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-blanc opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-noir text-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.processTitle}
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {content.process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-or font-cormorant text-5xl font-medium mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-cormorant text-xl font-medium mb-3">
                    {step.title}
                  </h3>
                  <p className="text-blanc/70 font-outfit text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-10">
                  {content.benefitsTitle}
                </h2>
                <div className="space-y-4">
                  {content.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-6 h-6 text-bordeaux flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                  alt="Professional photography result"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="py-20 bg-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
                  alt="Professional camera equipment"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-noir font-medium mb-10">
                  {content.equipmentTitle}
                </h2>
                <div className="space-y-4">
                  {content.equipment.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{item}</span>
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
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-blanc font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.ctaTitle}
            </motion.h2>
            <motion.p
              className="text-blanc/80 text-lg mb-10 font-outfit"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.ctaSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-blanc text-bordeaux hover:bg-or hover:text-noir transition-all duration-300 font-outfit font-medium"
              >
                {content.ctaButton}
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
