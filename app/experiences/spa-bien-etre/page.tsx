"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle, ArrowLeft, Star, Heart, Leaf, Users, Droplets } from "lucide-react";
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

export default function SpaBienEtrePage() {
  const { t, isRTL } = useLanguage();

  const content = {
    fr: {
      badge: "Bien-être & Relaxation",
      title: "Spa & Bien-être",
      subtitle: "Une parenthèse de détente absolue dans le confort de votre location",
      intro: "Offrez-vous une expérience spa digne des plus grands palaces, directement chez vous. Nos praticiens certifiés apportent tout le matériel nécessaire pour transformer votre séjour en retraite bien-être.",
      price: "À partir de 120€",

      whatWeOffer: "Nos Soins",
      offers: [
        {
          icon: Heart,
          title: "Massages Relaxants",
          description: "Massage suédois, californien, aux pierres chaudes ou aux huiles essentielles. Évacuez toutes les tensions.",
        },
        {
          icon: Droplets,
          title: "Soins du Visage",
          description: "Soins personnalisés avec produits premium. Nettoyage, hydratation, anti-âge selon votre type de peau.",
        },
        {
          icon: Leaf,
          title: "Rituels Bien-être",
          description: "Gommages corporels, enveloppements, soins ayurvédiques... Des rituels complets pour une détente profonde.",
        },
        {
          icon: Users,
          title: "Spa en Duo",
          description: "Partagez un moment de complicité avec massage simultané pour deux personnes. Idéal pour les couples.",
        },
      ],

      processTitle: "L'Expérience",
      process: [
        {
          step: "01",
          title: "Consultation",
          description: "Échange sur vos besoins, préférences et éventuelles contre-indications.",
        },
        {
          step: "02",
          title: "Préparation",
          description: "Installation de l'espace spa : table de massage, musique, ambiance tamisée, huiles.",
        },
        {
          step: "03",
          title: "Soin",
          description: "Profitez de votre soin dans une atmosphère de détente absolue.",
        },
        {
          step: "04",
          title: "Éveil",
          description: "Tisane offerte pour prolonger ce moment de sérénité.",
        },
      ],

      benefitsTitle: "Pourquoi chez vous ?",
      benefits: [
        "Intimité totale dans votre espace privé",
        "Pas de déplacement après le soin",
        "Horaires flexibles, même en soirée",
        "Ambiance personnalisée selon vos goûts",
        "Produits haut de gamme et naturels",
        "Praticiens certifiés et expérimentés",
      ],

      treatmentsTitle: "Nos Massages Signatures",
      treatments: [
        "Massage Californien - Relaxation profonde, mouvements fluides",
        "Massage aux Pierres Chaudes - Décontraction musculaire intense",
        "Massage Sportif - Récupération et performance",
        "Massage Ayurvédique - Équilibre corps et esprit",
        "Réflexologie Plantaire - Stimulation des zones réflexes",
        "Massage Prénatal - Douceur pour futures mamans",
      ],

      galleryTitle: "L'Art de la Détente",

      ctaTitle: "Accordez-vous une pause bien-être",
      ctaSubtitle: "Réservez votre soin spa à domicile pour une relaxation absolue",
      ctaButton: "Réserver un soin",
      backButton: "Retour aux expériences",
    },
    en: {
      badge: "Wellness & Relaxation",
      title: "Spa & Wellness",
      subtitle: "A moment of absolute relaxation in the comfort of your rental",
      intro: "Treat yourself to a spa experience worthy of the finest palaces, right at your place. Our certified practitioners bring all necessary equipment to transform your stay into a wellness retreat.",
      price: "From €120",

      whatWeOffer: "Our Treatments",
      offers: [
        {
          icon: Heart,
          title: "Relaxing Massages",
          description: "Swedish, Californian, hot stone or essential oil massage. Release all tensions.",
        },
        {
          icon: Droplets,
          title: "Facial Treatments",
          description: "Personalized treatments with premium products. Cleansing, hydration, anti-aging according to your skin type.",
        },
        {
          icon: Leaf,
          title: "Wellness Rituals",
          description: "Body scrubs, wraps, Ayurvedic treatments... Complete rituals for deep relaxation.",
        },
        {
          icon: Users,
          title: "Duo Spa",
          description: "Share a moment of connection with simultaneous massage for two. Ideal for couples.",
        },
      ],

      processTitle: "The Experience",
      process: [
        {
          step: "01",
          title: "Consultation",
          description: "Discussion about your needs, preferences and any contraindications.",
        },
        {
          step: "02",
          title: "Setup",
          description: "Spa space installation: massage table, music, dim lighting, oils.",
        },
        {
          step: "03",
          title: "Treatment",
          description: "Enjoy your treatment in an atmosphere of absolute relaxation.",
        },
        {
          step: "04",
          title: "Awakening",
          description: "Complimentary herbal tea to extend this moment of serenity.",
        },
      ],

      benefitsTitle: "Why at your place?",
      benefits: [
        "Total privacy in your own space",
        "No travel after the treatment",
        "Flexible hours, even in the evening",
        "Personalized ambiance to your taste",
        "High-end and natural products",
        "Certified and experienced practitioners",
      ],

      treatmentsTitle: "Our Signature Massages",
      treatments: [
        "Californian Massage - Deep relaxation, fluid movements",
        "Hot Stone Massage - Intense muscle relaxation",
        "Sports Massage - Recovery and performance",
        "Ayurvedic Massage - Body and mind balance",
        "Foot Reflexology - Reflex zone stimulation",
        "Prenatal Massage - Gentleness for expecting mothers",
      ],

      galleryTitle: "The Art of Relaxation",

      ctaTitle: "Give yourself a wellness break",
      ctaSubtitle: "Book your home spa treatment for absolute relaxation",
      ctaButton: "Book a treatment",
      backButton: "Back to experiences",
    },
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80", alt: "Spa ambiance" },
    { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80", alt: "Massage" },
    { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80", alt: "Wellness" },
    { src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80", alt: "Hot stones" },
    { src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80", alt: "Spa products" },
    { src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80", alt: "Relaxation" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-creme" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80" alt="Spa" fill className="object-cover" priority />
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

        {/* Benefits & Treatments */}
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
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-10">{pageContent.treatmentsTitle}</h2>
                <div className="space-y-4">
                  {pageContent.treatments.map((treatment, index) => (
                    <motion.div key={index} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <Star className="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                      <span className="text-noir/80 font-outfit">{treatment}</span>
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
                <Sparkles className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
