"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  FileCheck,
  Camera,
  Rocket,
  Check,
  Send,
  User,
  Mail,
  Phone,
  Home,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const processStepsData = [
  { id: 1, key: "contact" as const, icon: Handshake },
  { id: 2, key: "visit" as const, icon: FileCheck },
  { id: 3, key: "photos" as const, icon: Camera },
  { id: 4, key: "online" as const, icon: Rocket },
];

const advantagesKeys = [
  "freeEstimate",
  "freePhotos",
  "fullManagement",
  "rentGuarantee",
  "insuranceIncluded",
  "monthlyReporting",
  "availability",
  "clearPricing",
] as const;

export default function DevenirPartenaire() {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeBien: "",
    adresse: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="partenaire" className="py-32 bg-creme relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Lignes décoratives */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bordeaux/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-bordeaux/60 text-sm tracking-[0.3em] uppercase mb-6 font-outfit">
            {t.partner.badge}
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-noir font-medium mb-6">
            {t.partner.title}
          </h2>
          <p className="text-noir/70 max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-cormorant font-medium leading-relaxed">
            {t.partner.subtitle}
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processStepsData.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 bg-blanc border border-noir/5 text-center shadow-sm"
                >
                  {/* Numéro */}
                  <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} text-bordeaux/20 text-sm font-cormorant`}>
                    0{step.id}
                  </div>

                  {/* Icône */}
                  <div className="w-14 h-14 mx-auto mb-4 border border-bordeaux/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-bordeaux/70" />
                  </div>

                  <h4 className="font-cormorant text-lg text-noir mb-1">{t.partner.process[step.key].title}</h4>
                  <p className="text-noir/50 text-sm font-outfit">{t.partner.process[step.key].description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? "lg:grid-flow-dense" : ""}`}>
          {/* Avantages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isRTL ? "lg:col-start-2" : ""}
          >
            <h3 className="font-cormorant text-2xl text-noir mb-8">
              {t.partner.whyChooseUs}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {advantagesKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`flex items-center gap-3 p-4 bg-blanc border border-noir/5 shadow-sm ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-6 h-6 border border-bordeaux/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-bordeaux" />
                  </div>
                  <span className="text-noir/70 text-sm font-outfit">{t.partner.advantages[key]}</span>
                </motion.div>
              ))}
            </div>

            {/* Témoignage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 p-6 border border-bordeaux/20 bg-gradient-to-br from-bordeaux/5 to-transparent"
            >
              <p className="text-noir/70 italic mb-4 font-cormorant text-lg">
                &quot;{t.partner.testimonial.quote}&quot;
              </p>
              <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-10 h-10 border border-bordeaux/30 flex items-center justify-center">
                  <User className="w-5 h-5 text-bordeaux/60" />
                </div>
                <div>
                  <p className="text-noir font-medium text-sm font-outfit">{t.partner.testimonial.author}</p>
                  <p className="text-noir/50 text-xs font-outfit">{t.partner.testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`p-8 bg-blanc border border-noir/5 shadow-sm ${isRTL ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 border border-bordeaux/30 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-bordeaux" />
                </div>
                <h3 className="font-cormorant text-2xl text-noir mb-4">
                  {t.partner.form.requestSent}
                </h3>
                <p className="text-noir/50 font-outfit">
                  {t.partner.form.weWillContact}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-cormorant text-2xl text-noir mb-6">
                  {t.contact.title}
                </h3>

                <div className="space-y-4">
                  <div className="relative">
                    <User className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-4 h-4 text-noir/30`} />
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder={t.contact.form.name}
                      required
                      className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 bg-creme border border-noir/10 text-noir placeholder:text-noir/30 focus:border-bordeaux/50 outline-none transition-colors`}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <Mail className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-4 h-4 text-noir/30`} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.email}
                        required
                        className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 bg-creme border border-noir/10 text-noir placeholder:text-noir/30 focus:border-bordeaux/50 outline-none transition-colors`}
                        dir={isRTL ? "rtl" : "ltr"}
                      />
                    </div>
                    <div className="relative">
                      <Phone className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-4 h-4 text-noir/30`} />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder={t.contact.form.phone}
                        required
                        className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 bg-creme border border-noir/10 text-noir placeholder:text-noir/30 focus:border-bordeaux/50 outline-none transition-colors`}
                        dir={isRTL ? "rtl" : "ltr"}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Home className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-4 h-4 text-noir/30`} />
                    <select
                      name="typeBien"
                      value={formData.typeBien}
                      onChange={handleChange}
                      required
                      className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 bg-creme border border-noir/10 text-noir focus:border-bordeaux/50 outline-none transition-colors appearance-none`}
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      <option value="" className="text-noir/30">{t.simulator.form.propertyType}</option>
                      <option value="studio">{t.simulator.propertyTypes.studio}</option>
                      <option value="t2">{t.simulator.propertyTypes.t2}</option>
                      <option value="t3">{t.simulator.propertyTypes.t3}</option>
                      <option value="t4">{t.simulator.propertyTypes.t4}</option>
                      <option value="maison">{t.simulator.propertyTypes.maison}</option>
                      <option value="villa">{t.simulator.propertyTypes.villa}</option>
                    </select>
                  </div>

                  <div className="relative">
                    <MapPin className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-4 h-4 text-noir/30`} />
                    <input
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      placeholder={t.partner.form.addressPlaceholder}
                      required
                      className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 bg-creme border border-noir/10 text-noir placeholder:text-noir/30 focus:border-bordeaux/50 outline-none transition-colors`}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className={`absolute ${isRTL ? "right-4" : "left-4"} top-4 w-4 h-4 text-noir/30`} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={`${t.contact.form.message} ${t.partner.form.messageOptional}`}
                      rows={3}
                      className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 bg-creme border border-noir/10 text-noir placeholder:text-noir/30 focus:border-bordeaux/50 outline-none transition-colors resize-none`}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-bordeaux text-blanc font-medium hover:bg-bordeaux/90 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-blanc/30 border-t-blanc rounded-full animate-spin" />
                        {t.contact.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.contact.form.submit}
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
