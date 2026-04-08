"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, Gift, Home, Bell } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Animation container qui déclenche les enfants en séquence
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Animation pour chaque élément de texte (apparition progressive)
const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

// Animation pour les caractères individuels (effet typewriter)
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1 },
  },
};

export default function Newsletter() {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
        }, 5000);
      } else {
        setError(data.error || "Une erreur est survenue");
      }
    } catch {
      setError("Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: Gift, text: t.newsletter?.benefits?.offers || "Offres exclusives" },
    { icon: Home, text: t.newsletter?.benefits?.properties || "Nouveaux biens" },
    { icon: Bell, text: t.newsletter?.benefits?.alerts || "Alertes personnalisées" },
  ];

  return (
    <section className="py-20 bg-creme relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bordeaux/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-or/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={textVariants}
            className="inline-flex items-center gap-2 bg-bordeaux/10 border border-bordeaux/20 px-4 py-2 mb-8"
          >
            <Mail className="w-4 h-4 text-bordeaux" />
            <motion.span
              className="text-bordeaux text-sm font-outfit tracking-wider flex"
            >
              {(t.newsletter?.badge || "NEWSLETTER").split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>

          {/* Titre avec effet typewriter */}
          <motion.h2
            variants={textVariants}
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-noir font-medium mb-6 overflow-hidden"
          >
            <motion.span className="flex flex-wrap justify-center">
              {(t.newsletter?.title || "Restez informé des meilleures opportunités").split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.6,
                    delay: wordIndex * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>

          {/* Sous-titre avec animation de révélation */}
          <motion.p
            variants={textVariants}
            className="text-noir/70 max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-cormorant font-medium leading-relaxed mb-10 overflow-hidden"
          >
            <motion.span className="flex flex-wrap justify-center">
              {(t.newsletter?.subtitle || "Recevez nos offres exclusives et les biens d'exception directement dans votre boîte mail").split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + wordIndex * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.p>

          {/* Avantages avec animation séquentielle */}
          <motion.div
            variants={textVariants}
            className={`flex flex-wrap justify-center gap-6 mb-10 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.5 + index * 0.15,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`flex items-center gap-2 text-noir/70 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6 + index * 0.15, type: "spring", stiffness: 200 }}
                >
                  <benefit.icon className="w-4 h-4 text-bordeaux" />
                </motion.div>
                <span className="text-sm font-outfit">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Formulaire avec animation de glissement */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.8,
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="max-w-md mx-auto"
          >
            <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="flex-1 relative">
                <Mail className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-noir/40 ${isRTL ? "right-4" : "left-4"}`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={t.newsletter?.placeholder || "Votre adresse email"}
                  className={`w-full py-4 bg-blanc text-noir placeholder:text-noir/40 outline-none focus:ring-2 focus:ring-bordeaux/50 transition-all border border-noir/10 ${isRTL ? "pr-12 pl-4 text-right" : "pl-12 pr-4"}`}
                  disabled={isSubmitted || isLoading}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted || isLoading}
                className={`px-6 py-4 font-medium transition-all duration-300 flex items-center gap-2 ${
                  isSubmitted
                    ? "bg-green-600 text-blanc"
                    : isLoading
                    ? "bg-bordeaux/70 text-blanc cursor-wait"
                    : "bg-bordeaux text-blanc hover:bg-bordeaux/90"
                } ${isRTL ? "flex-row-reverse" : ""}`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span className="hidden sm:inline">{t.newsletter?.success || "Inscrit !"}</span>
                  </>
                ) : isLoading ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-blanc/30 border-t-blanc rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">{t.newsletter?.button || "S'inscrire"}</span>
                  </>
                )}
              </motion.button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm mt-3 font-outfit"
              >
                {error}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-noir/50 text-xs mt-4 font-outfit"
            >
              {t.newsletter?.privacy || "En vous inscrivant, vous acceptez de recevoir nos communications. Désinscription possible à tout moment."}
            </motion.p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
