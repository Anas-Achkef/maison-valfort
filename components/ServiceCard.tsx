"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-blanc p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-bordeaux"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Icon className="w-12 h-12 text-bordeaux" strokeWidth={1.5} />
      </motion.div>

      <h3 className="font-cormorant text-2xl font-semibold text-noir mb-3">
        {title}
      </h3>

      <p className="text-noir/70 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
