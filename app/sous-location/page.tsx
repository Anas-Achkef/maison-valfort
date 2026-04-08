"use client";

import { motion } from "framer-motion";
import {
  Home,
  TrendingUp,
  Check,
  ArrowRight,
  Sparkles,
  Users,
  Calendar,
  Percent,
  BadgeEuro,
  ClipboardList,
  Headphones,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SousLocationPage() {
  const { isRTL } = useLanguage();

  const services = [
    {
      icon: ClipboardList,
      title: "Création et optimisation des annonces",
      desc: "Airbnb, Booking, et autres plateformes",
    },
    {
      icon: Users,
      title: "Accueil et départ des voyageurs",
      desc: "Service personnalisé 24h/24",
    },
    {
      icon: Home,
      title: "Entretien, linge, maintenance",
      desc: "Qualité hôtelière garantie",
    },
    {
      icon: Headphones,
      title: "Assistance 7j/7",
      desc: "Support continu pour vos voyageurs",
    },
    {
      icon: Sparkles,
      title: "Valorisation du bien",
      desc: "Gestion de l'image et mise en valeur",
    },
  ];

  const avantages = [
    "Vous restez propriétaire du bien",
    "Revenus versés chaque mois",
    "20% HT de commission uniquement",
    "Aucun frais caché",
    "Gestion clé en main",
  ];

  return (
    <>
      <Header />
      <main className="bg-creme min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background decoratif */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bordeaux/5 to-transparent" />
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-bordeaux/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block text-bordeaux/60 text-sm tracking-[0.3em] uppercase mb-6 font-outfit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Conciergerie Premium
              </motion.span>
              <motion.h1
                className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-noir font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Votre bien, géré comme une{" "}
                <span className="text-bordeaux italic">maison d&apos;hôtes privée</span>
              </motion.h1>
              <motion.p
                className="text-noir/70 max-w-3xl mx-auto text-lg md:text-xl font-outfit leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Chez Maison Valfort, nous gérons votre bien avec une mission claire :
                valoriser votre propriété et maximiser vos revenus.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Section Prévisionnel - Simulation de revenus */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-4">
                Une rentabilité jusqu&apos;à{" "}
                <span className="text-bordeaux">3 fois supérieure</span>
              </h2>
              <p className="text-noir/60 font-outfit max-w-2xl mx-auto">
                Grâce à notre modèle de gestion en conciergerie, un bien peut générer
                jusqu&apos;à trois fois plus qu&apos;en location classique.
              </p>
            </motion.div>

            {/* Card Prévisionnel Premium */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-5xl mx-auto"
            >
              {/* Background décoratif */}
              <div className="absolute -inset-4 bg-gradient-to-br from-bordeaux/10 via-transparent to-bordeaux/5 rounded-3xl blur-xl" />

              <div className="relative bg-blanc rounded-2xl shadow-2xl overflow-hidden border border-noir/5">
                {/* Header du prévisionnel */}
                <div className="bg-gradient-to-r from-bordeaux to-bordeaux/90 px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-blanc/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-7 h-7 text-blanc" />
                      </div>
                      <div>
                        <h3 className="text-blanc font-cormorant text-2xl font-medium">
                          Simulation de Revenus
                        </h3>
                        <p className="text-blanc/70 text-sm font-outfit">
                          Exemple concret d&apos;une villa premium
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <span className="text-blanc/60 text-xs font-outfit uppercase tracking-wider">
                        Prévisionnel
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="p-8 md:p-12">
                  {/* Explication du calcul - Prix par nuit */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10"
                  >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-bordeaux/10 rounded-full mb-4">
                      <Calendar className="w-5 h-5 text-bordeaux" />
                      <span className="text-bordeaux font-outfit font-medium">
                        Base de calcul : 1 000 €/nuit
                      </span>
                    </div>
                    <p className="text-noir/60 font-outfit text-sm">
                      Pour une villa premium estimée à 1 000 € la nuit en location courte durée
                    </p>
                  </motion.div>

                  {/* Schéma comparatif détaillé */}
                  <div className="grid lg:grid-cols-3 gap-6 mb-10">
                    {/* Location Classique */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-noir/5 rounded-2xl p-6 relative"
                    >
                      <div className="absolute -top-3 left-6">
                        <span className="bg-noir/40 text-blanc text-xs font-outfit px-3 py-1 rounded-full">
                          Location classique
                        </span>
                      </div>
                      <div className="pt-4">
                        <div className="text-center mb-6">
                          <span className="text-5xl font-cormorant text-noir/40 font-medium">10 000</span>
                          <span className="text-noir/40 text-lg font-outfit ml-1">€</span>
                        </div>
                        <div className="space-y-3 text-sm font-outfit">
                          <div className="flex justify-between items-center py-2 border-b border-noir/10">
                            <span className="text-noir/50">Type</span>
                            <span className="text-noir/70">Bail annuel</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-noir/10">
                            <span className="text-noir/50">Occupation</span>
                            <span className="text-noir/70">30 jours</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-noir/50">Flexibilité</span>
                            <span className="text-noir/70">Aucune</span>
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-noir/10 text-center">
                          <span className="text-noir/40 text-xs font-outfit">Revenus fixes</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Conciergerie - 17 jours */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-gradient-to-br from-bordeaux/10 to-bordeaux/5 rounded-2xl p-6 relative border border-bordeaux/20"
                    >
                      <div className="absolute -top-3 left-6">
                        <span className="bg-bordeaux text-blanc text-xs font-outfit px-3 py-1 rounded-full">
                          Maison Valfort
                        </span>
                      </div>
                      <div className="pt-4">
                        <div className="text-center mb-6">
                          <span className="text-5xl font-cormorant text-bordeaux font-semibold">17 000</span>
                          <span className="text-bordeaux text-lg font-outfit ml-1">€</span>
                        </div>
                        <div className="space-y-3 text-sm font-outfit">
                          <div className="flex justify-between items-center py-2 border-b border-bordeaux/10">
                            <span className="text-noir/50">Prix/nuit</span>
                            <span className="text-bordeaux font-medium">1 000 €</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-bordeaux/10">
                            <span className="text-noir/50">Nuits louées</span>
                            <span className="text-bordeaux font-medium">17 nuits</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-noir/50">Calcul</span>
                            <span className="text-bordeaux font-medium">17 × 1 000 €</span>
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-bordeaux/20 text-center">
                          <div className="inline-flex items-center gap-2 text-bordeaux">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-outfit font-medium">+70% vs classique</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Conciergerie - 30 jours */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-br from-bordeaux to-bordeaux/90 rounded-2xl p-6 relative shadow-xl"
                    >
                      <div className="absolute -top-3 left-6">
                        <span className="bg-or text-noir text-xs font-outfit px-3 py-1 rounded-full font-medium">
                          Potentiel maximum
                        </span>
                      </div>
                      <div className="pt-4">
                        <div className="text-center mb-6">
                          <span className="text-5xl font-cormorant text-blanc font-semibold">30 000</span>
                          <span className="text-blanc/80 text-lg font-outfit ml-1">€</span>
                        </div>
                        <div className="space-y-3 text-sm font-outfit">
                          <div className="flex justify-between items-center py-2 border-b border-blanc/20">
                            <span className="text-blanc/60">Prix/nuit</span>
                            <span className="text-blanc font-medium">1 000 €</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-blanc/20">
                            <span className="text-blanc/60">Nuits louées</span>
                            <span className="text-blanc font-medium">30 nuits</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-blanc/60">Calcul</span>
                            <span className="text-blanc font-medium">30 × 1 000 €</span>
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-blanc/20 text-center">
                          <div className="inline-flex items-center gap-2 text-or">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-outfit font-medium">×3 vs classique</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Barre de progression visuelle */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mb-10"
                  >
                    <div className="flex items-center justify-between text-xs font-outfit text-noir/50 mb-2">
                      <span>10 000 €</span>
                      <span>17 000 €</span>
                      <span>30 000 €</span>
                    </div>
                    <div className="h-4 bg-noir/10 rounded-full overflow-hidden relative">
                      {/* Barre location classique */}
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 bg-noir/30 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "33%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                      />
                      {/* Barre 17 jours */}
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-bordeaux/70 to-bordeaux rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "57%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                      />
                      {/* Indicateur 17k */}
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blanc border-2 border-bordeaux rounded-full"
                        initial={{ left: 0, opacity: 0 }}
                        whileInView={{ left: "57%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-noir/30 rounded-full" />
                        <span className="text-xs font-outfit text-noir/50">Location classique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-bordeaux rounded-full" />
                        <span className="text-xs font-outfit text-noir/50">Avec conciergerie (17-30 nuits)</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Info importante */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="bg-creme/50 rounded-xl p-6 border border-bordeaux/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-bordeaux/10 rounded-lg flex items-center justify-center shrink-0">
                        <BadgeEuro className="w-5 h-5 text-bordeaux" />
                      </div>
                      <div>
                        <h4 className="font-cormorant text-xl text-noir font-medium mb-2">
                          100% des revenus vous appartiennent
                        </h4>
                        <p className="text-noir/60 font-outfit text-sm leading-relaxed">
                          Ces revenus vont intégralement au propriétaire. Nous prélevons uniquement{" "}
                          <span className="text-bordeaux font-semibold">20% HT de commission</span>,
                          hors frais de ménage.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Footer du prévisionnel */}
                <div className="bg-noir/5 px-8 py-4 border-t border-noir/10">
                  <p className="text-noir/40 text-xs font-outfit text-center">
                    * Estimations basées sur les performances moyennes de nos biens en gestion.
                    Les résultats peuvent varier selon la localisation et la saison.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Services inclus */}
        <section className="py-20 bg-blanc">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-4">
                Nous nous chargeons de <span className="text-bordeaux italic">tout</span>
              </h2>
              <p className="text-noir/60 font-outfit max-w-2xl mx-auto">
                Vous profitez de votre propriété, nous faisons fructifier son potentiel.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-creme/50 p-6 rounded-xl border border-noir/5 hover:border-bordeaux/20 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-bordeaux/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-bordeaux/20 transition-colors">
                      <Icon className="w-6 h-6 text-bordeaux" />
                    </div>
                    <h3 className="font-cormorant text-xl text-noir font-medium mb-2">
                      {service.title}
                    </h3>
                    <p className="text-noir/50 text-sm font-outfit">{service.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Modèle Simple */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Colonne gauche - Texte */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2 className="font-cormorant text-3xl md:text-4xl text-noir font-medium mb-6">
                  Un modèle{" "}
                  <span className="text-bordeaux italic">simple et transparent</span>
                </h2>
                <div className="space-y-4">
                  {avantages.map((avantage, index) => (
                    <motion.div
                      key={avantage}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 bg-bordeaux/10 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-bordeaux" />
                      </div>
                      <span className="text-noir/80 font-outfit">{avantage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Colonne droite - Card Commission */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-bordeaux/20 to-or/10 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-bordeaux to-bordeaux/90 rounded-2xl p-10 text-blanc overflow-hidden">
                  {/* Pattern décoratif */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Percent className="w-8 h-8 text-or" />
                      <span className="text-blanc/70 text-sm font-outfit uppercase tracking-wider">
                        Commission
                      </span>
                    </div>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-7xl md:text-8xl font-cormorant font-semibold">20</span>
                      <span className="text-3xl font-cormorant mb-4">% HT</span>
                    </div>
                    <p className="text-blanc/80 font-outfit mb-6">
                      Sur les réservations effectives uniquement, hors frais de ménage.
                    </p>
                    <div className="pt-6 border-t border-blanc/20">
                      <p className="text-blanc/60 text-sm font-outfit">
                        Une gestion clé en main, orientée performance.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-noir">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cormorant text-3xl md:text-4xl text-blanc font-medium mb-6">
                Prêt à maximiser vos revenus ?
              </h2>
              <p className="text-blanc/60 font-outfit mb-10 max-w-2xl mx-auto">
                Contactez-nous pour une estimation personnalisée de votre bien et découvrez
                son potentiel avec notre conciergerie premium.
              </p>
              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-bordeaux text-blanc hover:bg-bordeaux/90 transition-all duration-300 group rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium tracking-wide font-outfit">
                  Demander une estimation
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
