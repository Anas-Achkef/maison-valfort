"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send, Check, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Animation container avec stagger pour les enfants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

// Animation pour chaque élément de contact (arrive un par un)
const contactItemVariants = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

// Animation pour les champs du formulaire
const formFieldVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Contact() {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    { icon: Phone, label: t.contact.info.phone, value: "+33 6 73 04 09 43" },
    { icon: Mail, label: t.contact.info.email, value: "contact@maison-valfort.com" },
    { icon: Clock, label: t.contact.info.hours, value: "24h/24 - 7J/7" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 4000);
      } else {
        setError(data.error || t.contact.error);
      }
    } catch {
      setError(t.contact.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-blanc relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Fond décoratif animé */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-bordeaux/5 via-transparent to-transparent"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-bordeaux/3 via-transparent to-transparent"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Formes flottantes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-24 h-24 border border-bordeaux/10 rounded-full"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity } }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-bordeaux/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête avec animation séquentielle */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-bordeaux/60 text-sm tracking-[0.3em] uppercase mb-6 font-outfit"
            variants={contactItemVariants}
          >
            {t.contact.badge}
          </motion.span>
          <motion.h2
            variants={contactItemVariants}
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-noir font-medium mb-6"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            className="text-noir/70 max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-cormorant font-medium leading-relaxed"
            variants={contactItemVariants}
          >
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? "lg:grid-flow-dense" : ""}`}>
          {/* Informations de contact avec animation séquentielle */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
          >
            <motion.h3
              variants={contactItemVariants}
              className="font-cormorant text-2xl text-noir mb-8"
            >
              {t.footer.contact}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className="space-y-4 mb-12"
            >
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  variants={contactItemVariants}
                  whileHover={{ x: isRTL ? -10 : 10, borderColor: "rgba(109, 3, 3, 0.3)" }}
                  className={`flex items-start gap-4 p-4 bg-creme border border-noir/5 group cursor-pointer transition-colors ${isRTL ? "flex-row-reverse text-right" : ""}`}
                >
                  <motion.div
                    className="w-10 h-10 border border-bordeaux/20 flex items-center justify-center flex-shrink-0 group-hover:bg-bordeaux/10 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    initial={{ rotate: -90, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <item.icon className="w-4 h-4 text-bordeaux/70 group-hover:text-bordeaux transition-colors" />
                  </motion.div>
                  <div>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 }}
                      className="text-noir/50 text-xs mb-1 font-outfit"
                    >
                      {item.label}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4 }}
                      className="text-noir font-outfit group-hover:text-bordeaux transition-colors"
                    >
                      {item.value}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Téléphone avec animation */}
            <motion.a
              href="tel:+33673040943"
              variants={contactItemVariants}
              whileHover={{ scale: 1.02, borderColor: "rgba(109, 3, 3, 0.5)" }}
              className={`flex items-center justify-between p-6 border border-bordeaux/20 bg-gradient-to-r ${isRTL ? "from-transparent to-bordeaux/5" : "from-bordeaux/5 to-transparent"} hover:border-bordeaux/40 transition-colors group ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <div className={isRTL ? "text-right" : ""}>
                <p className="text-noir/50 text-sm mb-1 font-outfit">{t.contact.info.phone}</p>
                <p className="text-bordeaux font-cormorant text-lg">{t.nav.contact}</p>
              </div>
              <motion.div
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 5, y: -5 }}
              >
                <ArrowUpRight className={`w-5 h-5 text-bordeaux ${isRTL ? "rotate-90" : ""}`} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Formulaire avec animation séquentielle des champs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="p-5 md:p-8 bg-creme border border-noir/5"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div variants={formFieldVariants}>
                  <label htmlFor="name" className="block text-noir/60 text-sm mb-2 font-outfit">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-blanc border border-noir/10 text-noir placeholder:text-noir/30 focus:border-bordeaux/50 outline-none transition-colors"
                    placeholder={t.contact.form.name}
                  />
                </motion.div>
                <motion.div variants={formFieldVariants}>
                  <label htmlFor="email" className="block text-noir/60 text-sm mb-2 font-outfit">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-blanc border border-noir/10 text-noir placeholder:text-noir/30 focus:border-bordeaux/50 outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div variants={formFieldVariants}>
                <label htmlFor="phone" className="block text-noir/60 text-sm mb-2 font-outfit">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-blanc border border-noir/10 text-noir placeholder:text-noir/30 focus:border-bordeaux/50 outline-none transition-colors"
                  placeholder="+33 6 XX XX XX XX"
                />
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label htmlFor="message" className="block text-noir/60 text-sm mb-2 font-outfit">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-blanc border border-noir/10 text-noir placeholder:text-noir/30 focus:border-bordeaux/50 outline-none transition-colors resize-none"
                  placeholder={t.contact.form.message}
                />
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-outfit"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                variants={formFieldVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted || isLoading}
                className={`w-full py-4 flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-600/80 text-blanc"
                    : isLoading
                    ? "bg-bordeaux/70 text-blanc cursor-wait"
                    : "bg-bordeaux text-blanc hover:bg-bordeaux/90"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    {t.contact.success}
                  </>
                ) : isLoading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-blanc/30 border-t-blanc rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.form.submit}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
