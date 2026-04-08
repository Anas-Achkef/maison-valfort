"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

interface JourneeSlide {
  id: number;
  time: string;
  title: string;
  description: string;
  image: string;
}

const slides: JourneeSlide[] = [
  {
    id: 1,
    time: "7h00",
    title: "l'horizon",
    description:
      "Le soleil se lève sur votre villa privée. Savourez l'instant depuis votre infinity pool, un café d'exception à la main, face à l'immensité de la mer.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
  },
  {
    id: 2,
    time: "9h30",
    title: "la sérénité",
    description:
      "Dans l'intimité d'un spa suspendu au-dessus des eaux, nos thérapeutes vous offrent un voyage sensoriel. Massages ancestraux et soins d'exception.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80",
  },
  {
    id: 3,
    time: "12h30",
    title: "les saveurs",
    description:
      "Une table dressée face à l'océan, une brise légère, des mets raffinés. Chaque déjeuner devient une célébration des sens.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80",
  },
  {
    id: 4,
    time: "15h00",
    title: "le large",
    description:
      "Prenez le large à bord d'un yacht privé. Criques secrètes, eaux cristallines et champagne glacé, l'aventure vous appartient.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=80",
  },
  {
    id: 5,
    time: "19h30",
    title: "la magie",
    description:
      "Sous les lustres scintillants d'une table étoilée, le temps suspend son vol. Gastronomie d'exception et service irréprochable.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
  },
  {
    id: 6,
    time: "23h00",
    title: "l'écrin",
    description:
      "Votre suite présidentielle vous attend, baignée par les lumières de la ville. Draps de soie, champagne et vue panoramique pour clore cette journée parfaite.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80",
  },
];

export default function JourneeType() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentSlide) return;
      setIsAnimating(true);

      // Animation GSAP pour le contenu
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setCurrentSlide(index);
            gsap.fromTo(
              contentRef.current,
              { opacity: 0, y: -30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => setIsAnimating(false),
              }
            );
          },
        });
      }
    },
    [currentSlide, isAnimating]
  );

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  }, [currentSlide, goToSlide]);

  // Intersection Observer - détecter quand la section est visible
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.3);
      },
      {
        threshold: [0, 0.3, 0.5, 1],
        rootMargin: "0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto-play - seulement quand la section est visible
  useEffect(() => {
    if (isVisible) {
      autoPlayRef.current = setInterval(() => {
        if (!isAnimating) {
          nextSlide();
        }
      }, 6000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [nextSlide, isAnimating, isVisible]);

  // Animation de la barre de progression
  useEffect(() => {
    if (progressRef.current) {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 6,
          ease: "none",
          transformOrigin: "left",
        }
      );
    }
  }, [currentSlide]);

  // Gestion du clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      ref={sectionRef}
      id="journee-type"
      className="relative h-screen w-full overflow-hidden bg-noir"
    >
      {/* Background Images with Parallax Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-noir/80 via-transparent to-noir/40" />
        </motion.div>
      </AnimatePresence>

      {/* Gold decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

      {/* Section Title */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] font-outfit text-sm tracking-[0.3em] uppercase">
            L&apos;Art de Vivre
          </span>
          <h2 className="text-blanc font-cormorant text-3xl md:text-4xl mt-2 italic">
            Du lever au coucher du soleil
          </h2>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24">
        <div
          ref={contentRef}
          className="text-center max-w-3xl mx-auto mt-16 md:mt-0"
        >
          {/* Time */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#D4AF37] font-cinzel text-5xl md:text-7xl lg:text-8xl font-light tracking-wider">
              {slides[currentSlide].time}
            </span>
          </motion.div>

          {/* Title */}
          <h3 className="text-blanc font-cormorant text-4xl md:text-5xl lg:text-6xl italic mb-6 lowercase">
            {slides[currentSlide].title}
          </h3>

          {/* Description */}
          <p className="text-blanc/80 font-outfit text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 disabled:opacity-50"
        aria-label="Slide précédent"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 disabled:opacity-50"
        aria-label="Slide suivant"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Timeline - Desktop */}
      <div className="hidden md:block absolute bottom-16 left-1/2 -translate-x-1/2 z-20 w-full max-w-4xl px-8">
        {/* Progress bar background */}
        <div className="relative h-[2px] bg-blanc/20 mb-8">
          {/* Active progress */}
          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-full bg-[#D4AF37]"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>

        {/* Timeline points */}
        <div className="flex justify-between items-start">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className="group flex flex-col items-center"
            >
              {/* Point */}
              <div
                className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                  index === currentSlide
                    ? "bg-[#D4AF37] border-[#D4AF37] scale-125"
                    : index < currentSlide
                    ? "bg-[#D4AF37]/50 border-[#D4AF37]/50"
                    : "bg-transparent border-blanc/40 group-hover:border-[#D4AF37]/70"
                }`}
              >
                {/* Pulse effect for active */}
                {index === currentSlide && (
                  <span className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-30" />
                )}
              </div>

              {/* Time label */}
              <span
                className={`mt-3 font-cinzel text-sm transition-all duration-300 ${
                  index === currentSlide
                    ? "text-[#D4AF37]"
                    : "text-blanc/50 group-hover:text-blanc/80"
                }`}
              >
                {slide.time}
              </span>

              {/* Title label */}
              <span
                className={`mt-1 font-cormorant text-xs italic transition-all duration-300 ${
                  index === currentSlide
                    ? "text-blanc opacity-100"
                    : "text-blanc/0 group-hover:text-blanc/60"
                }`}
              >
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline - Mobile (Vertical dots) */}
      <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className="group flex flex-col items-center"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#D4AF37] scale-150"
                    : "bg-blanc/30 hover:bg-blanc/50"
                }`}
              />
              {index === currentSlide && (
                <span className="mt-2 text-[#D4AF37] font-cinzel text-xs">
                  {slide.time}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2">
        <span className="text-[#D4AF37] font-cinzel text-2xl">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="text-blanc/30 font-outfit">/</span>
        <span className="text-blanc/50 font-outfit text-sm">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37]/30" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-[#D4AF37]/30" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-[#D4AF37]/30" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[#D4AF37]/30" />
    </section>
  );
}
