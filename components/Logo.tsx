"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  variant?: "bordeaux" | "white" | "black";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  variant = "bordeaux",
  size = "md",
  showTagline = false
}: LogoProps) {
  const colors = {
    bordeaux: "#6D0303",
    white: "#FFFFFF",
    black: "#000000",
  };

  const sizeConfig = {
    sm: "h-8 md:h-10",
    md: "h-10 md:h-14",
    lg: "h-14 md:h-20",
    xl: "h-20 md:h-28",
    "2xl": "h-28 md:h-40",
    "3xl": "h-32 md:h-44 lg:h-52",
  };

  const color = colors[variant];

  return (
    <motion.div
      className={`${sizeConfig[size]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg viewBox="0 0 140 50" className="h-full w-auto">
        {/* LIGNE 1 : MA + CLÉ + SON */}
        <text
          x="43"
          y="22"
          fontFamily="Cinzel, serif"
          fontSize="18"
          fontWeight="400"
          letterSpacing="2"
          fill={color}
          textAnchor="end"
        >
          MA
        </text>

        {/* CLÉ VINTAGE - remplace le I */}
        <g transform="translate(45, 5) scale(0.024)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
          {/* ========== TÊTE DE CLÉ - QUATREFEUILLE ========== */}

          {/* LOBE HAUT */}
          <ellipse cx="200" cy="55" rx="52" ry="62" strokeWidth="14" />
          <ellipse cx="200" cy="55" rx="22" ry="26" strokeWidth="12" />

          {/* LOBE GAUCHE */}
          <ellipse cx="135" cy="118" rx="48" ry="58" strokeWidth="14" />
          <ellipse cx="135" cy="118" rx="20" ry="24" strokeWidth="12" />

          {/* LOBE DROIT */}
          <ellipse cx="265" cy="118" rx="48" ry="58" strokeWidth="14" />
          <ellipse cx="265" cy="118" rx="20" ry="24" strokeWidth="12" />

          {/* LOBE BAS */}
          <ellipse cx="200" cy="182" rx="44" ry="54" strokeWidth="14" />
          <ellipse cx="200" cy="182" rx="18" ry="22" strokeWidth="12" />

          {/* CERCLE CENTRAL */}
          <circle cx="200" cy="118" r="26" strokeWidth="12" />

          {/* ========== COLLET ========== */}
          <path d="M 172 236 Q 172 254, 200 254 Q 228 254, 228 236" strokeWidth="14" />
          <path d="M 176 254 Q 176 272, 200 272 Q 224 272, 224 254" strokeWidth="12" />

          {/* ========== TIGE ========== */}
          <line x1="188" y1="272" x2="188" y2="520" strokeWidth="16" />
          <line x1="212" y1="272" x2="212" y2="520" strokeWidth="16" />

          {/* Barres horizontales sur la tige */}
          <line x1="188" y1="320" x2="212" y2="320" strokeWidth="10" />
          <line x1="188" y1="370" x2="212" y2="370" strokeWidth="10" />
          <line x1="188" y1="420" x2="212" y2="420" strokeWidth="10" />
          <line x1="188" y1="470" x2="212" y2="470" strokeWidth="10" />

          {/* ========== PANNETON ========== */}
          {/* Côté gauche */}
          <path d="M 188 520 L 188 555 L 125 555 L 125 585 L 105 585 L 105 615 L 125 645 L 155 645 L 155 680 L 188 680" strokeWidth="14" />

          {/* Côté droit */}
          <path d="M 212 520 L 212 575 L 212 615 L 275 615 L 275 655 L 212 655 L 212 680 L 188 680" strokeWidth="14" />

          {/* Détail courbe gauche */}
          <path d="M 135 595 Q 148 580, 162 600 Q 152 620, 135 610" strokeWidth="10" />

          {/* Barre horizontale panneton */}
          <line x1="188" y1="640" x2="212" y2="640" strokeWidth="12" />
        </g>

        <text
          x="57"
          y="22"
          fontFamily="Cinzel, serif"
          fontSize="18"
          fontWeight="400"
          letterSpacing="2"
          fill={color}
          textAnchor="start"
        >
          SON
        </text>

        {/* LIGNE 2 : VALFORT centré */}
        <text
          x="70"
          y="42"
          fontFamily="Cinzel, serif"
          fontSize="18"
          fontWeight="400"
          letterSpacing="3"
          fill={color}
          textAnchor="middle"
        >
          VALFORT
        </text>

        {/* Tagline optionnel */}
        {showTagline && (
          <text
            x="70"
            y="49"
            fontFamily="Cormorant Garamond, serif"
            fontSize="4"
            fontWeight="400"
            letterSpacing="1"
            fill={color}
            textAnchor="middle"
            opacity="0.7"
          >
            Prestige | Qualité | Élégance
          </text>
        )}
      </svg>
    </motion.div>
  );
}
