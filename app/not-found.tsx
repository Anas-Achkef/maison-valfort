"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-creme flex items-center justify-center px-6">
      <div className="text-center">
        {/* 404 animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <h1 className="font-cormorant text-[150px] md:text-[200px] leading-none text-bordeaux/20 font-bold">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-cormorant text-3xl md:text-4xl text-noir mb-4">
            Page introuvable
          </h2>
          <p className="text-noir/60 font-outfit mb-8 max-w-md mx-auto">
            La page que vous recherchez semble avoir disparu.
            Peut-être a-t-elle été déplacée ou n&apos;existe plus.
          </p>
        </motion.div>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bordeaux text-blanc font-outfit hover:bg-bordeaux/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-bordeaux text-bordeaux font-outfit hover:bg-bordeaux/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Page précédente
          </button>
        </motion.div>

        {/* Décoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-noir/30 text-sm font-outfit">
            Maison Valfort — Conciergerie de Luxe
          </p>
        </motion.div>
      </div>
    </main>
  );
}
