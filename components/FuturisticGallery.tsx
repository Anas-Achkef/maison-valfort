"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    id: 1,
    src: "/hauss.webp",
    title: "L'Art de Vivre",
    subtitle: "Paris",
    color: "#6D0303",
  },
  {
    id: 2,
    src: "/campagniard.webp",
    title: "Évasion Alpine",
    subtitle: "Chamonix",
    color: "#2D5A27",
  },
  {
    id: 3,
    src: "/penthouse.webp",
    title: "Vue Céleste",
    subtitle: "Skyline",
    color: "#1A1A2E",
  },
  {
    id: 4,
    src: "/vignoble.webp",
    title: "Terroir d'Exception",
    subtitle: "Provence",
    color: "#8B7355",
  },
  {
    id: 5,
    src: "/la-mer.webp",
    title: "Horizon Infini",
    subtitle: "Côte d'Azur",
    color: "#0077B6",
  },
];

export default function FuturisticGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !track || slides.length === 0) return;

    // Check if mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const totalSlides = slides.length;
      const slideWidth = window.innerWidth;
      const totalDistance = (totalSlides - 1) * slideWidth;

      // Main horizontal scroll animation
      gsap.to(track, {
        x: -totalDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalDistance + window.innerHeight}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentIndex = Math.min(
              Math.floor(progress * totalSlides),
              totalSlides - 1
            );
            setActiveIndex(currentIndex);

            // Parallax effect on each slide
            slides.forEach((slide, i) => {
              const slideProgress = progress * (totalSlides - 1) - i;
              const parallaxX = slideProgress * 100;

              const imageWrapper = slide.querySelector(".parallax-image");
              if (imageWrapper) {
                gsap.set(imageWrapper, {
                  x: parallaxX,
                });
              }

              // Scale effect based on distance from center
              const distanceFromActive = Math.abs(slideProgress);
              const scale = gsap.utils.clamp(0.85, 1, 1 - distanceFromActive * 0.15);
              const opacity = gsap.utils.clamp(0.3, 1, 1 - distanceFromActive * 0.7);

              gsap.set(slide, {
                scale,
                opacity,
              });

              // Text reveal effect
              const textContent = slide.querySelector(".text-content");
              if (textContent) {
                const textOpacity = distanceFromActive < 0.5 ? 1 : 0;
                const textY = distanceFromActive < 0.5 ? 0 : 50;
                gsap.set(textContent, {
                  opacity: textOpacity,
                  y: textY,
                });
              }
            });
          },
        },
      });

      // Entrance animation
      gsap.fromTo(
        slides,
        {
          clipPath: "inset(100% 0 0 0)",
          scale: 0.9,
        },
        {
          clipPath: "inset(0% 0 0 0)",
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-noir overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          background: `radial-gradient(ellipse at center, ${galleryImages[activeIndex]?.color}20 0%, #0a0a0a 70%)`
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-bordeaux/30 rounded-full"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animation: `float ${3 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-bordeaux" />
              <span className="text-bordeaux text-xs tracking-[0.3em] uppercase font-outfit">
                Collection Exclusive
              </span>
            </div>
            <h2 className="font-cormorant text-3xl md:text-5xl text-blanc font-light">
              Galerie <span className="text-bordeaux italic">Immersive</span>
            </h2>
          </div>

          {/* Navigation dots */}
          <div className="hidden md:flex items-center gap-3">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "bg-bordeaux w-8"
                    : "bg-blanc/30 hover:bg-blanc/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main slider container */}
      <div className="relative h-screen flex items-center">
        <div
          ref={trackRef}
          className="flex"
          style={{ willChange: "transform" }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              ref={(el) => { slidesRef.current[index] = el; }}
              className="relative flex-shrink-0 w-screen h-screen flex items-center justify-center px-6 md:px-20"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Main image card */}
              <div className="relative w-full max-w-5xl h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden group">
                {/* Parallax image wrapper */}
                <div className="parallax-image absolute inset-0 scale-110">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                    quality={90}
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-noir/50 via-transparent to-noir/50" />

                {/* Decorative corners */}
                <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-blanc/30" />
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-blanc/30" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-blanc/30" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-blanc/30" />

                {/* Scan lines effect */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                  }}
                />

                {/* Content */}
                <div className="text-content absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="inline-block px-4 py-1 bg-bordeaux/80 backdrop-blur-sm text-blanc text-xs tracking-[0.2em] uppercase font-outfit mb-4 rounded-full">
                        {image.subtitle}
                      </span>
                      <h3 className="font-cormorant text-4xl md:text-6xl text-blanc font-light mb-4">
                        {image.title}
                      </h3>
                      <p className="text-blanc/60 text-sm md:text-base font-outfit max-w-md">
                        Une expérience unique au cœur de l&apos;excellence immobilière française.
                      </p>
                    </div>

                    {/* Large number indicator */}
                    <div className="hidden md:block">
                      <span className="font-cormorant text-[120px] leading-none text-blanc/10 font-light">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 100px ${image.color}40`,
                  }}
                />
              </div>

              {/* Side info panels */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col gap-4 text-blanc/40">
                  {galleryImages.map((_, i) => (
                    <div
                      key={i}
                      className={`h-12 w-px transition-all duration-500 ${
                        i === activeIndex ? "bg-bordeaux" : "bg-blanc/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Current slide info */}
          <div className="flex items-center gap-4">
            <span className="font-cormorant text-4xl text-bordeaux">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div className="w-16 h-px bg-blanc/20" />
            <span className="text-blanc/40 font-outfit text-sm">
              {String(galleryImages.length).padStart(2, '0')}
            </span>
          </div>

          {/* Scroll hint */}
          <div className="flex items-center gap-3 text-blanc/40 text-xs font-outfit">
            <span className="hidden md:inline">SCROLL POUR DÉCOUVRIR</span>
            <div className="flex items-center gap-1">
              <ChevronLeft className="w-4 h-4 animate-pulse" />
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* Current image title */}
          <div className="hidden md:block text-right">
            <span className="text-bordeaux font-outfit text-sm tracking-wider">
              {galleryImages[activeIndex]?.title}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-[2px] bg-blanc/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-bordeaux to-bordeaux/50 rounded-full transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / galleryImages.length) * 100}%` }}
          />
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
