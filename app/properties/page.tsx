"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, MapPin, Star, Sparkles, ChevronLeft, ChevronRight, BedDouble } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const allPropertyData = [
  {
    id: 1,
    key: "parisLuxury" as const,
    image: "/hauss.webp",
    bedrooms: 4,
    rating: 4.9,
    href: "/properties/appartement-paris-luxe",
    color: "#6D0303",
  },
  {
    id: 2,
    key: "chamonixChalet" as const,
    image: "/campagniard.webp",
    bedrooms: 5,
    rating: 5.0,
    href: "/properties/chalet-chamonix",
    color: "#2D5A27",
  },
  {
    id: 3,
    key: "marbellaPenthouse" as const,
    image: "/penthouse.webp",
    bedrooms: 6,
    rating: 5.0,
    href: "/properties/penthouse-marbella",
    color: "#1A1A2E",
  },
  {
    id: 4,
    key: "provencal" as const,
    image: "/vignoble.webp",
    bedrooms: 7,
    rating: 4.8,
    href: "/properties/mas-provencal",
    color: "#8B7355",
  },
  {
    id: 5,
    key: "mediterranean" as const,
    image: "/la-mer.webp",
    bedrooms: 8,
    rating: 4.9,
    href: "/properties/villa-mediterraneenne",
    color: "#0077B6",
  },
];

export default function PropertiesPage() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const content = {
    fr: {
      badge: "Collection Exclusive",
      title: "Nos Biens d'Exception",
      subtitle: "Une expérience immersive au cœur du luxe",
      backHome: "Retour à l'accueil",
      scroll: "SCROLL POUR DÉCOUVRIR",
    },
    en: {
      badge: "Exclusive Collection",
      title: "Our Exceptional Properties",
      subtitle: "An immersive experience at the heart of luxury",
      backHome: "Back to home",
      scroll: "SCROLL TO DISCOVER",
    }
  };

  const pageContent = content[t.nav.home === "Accueil" ? "fr" : "en"];

  const properties = allPropertyData.map((p) => ({
    ...p,
    title: t.properties.items[p.key]?.title || p.key,
    location: t.properties.items[p.key]?.location || "",
    description: t.properties.items[p.key]?.description || "",
  }));

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !track || slides.length === 0) return;

    // Check if mobile
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const totalSlides = slides.length;
      const isLarge = window.innerWidth >= 1024;
      const slideWidth = isMobile ? window.innerWidth * 0.85 : isLarge ? window.innerWidth * 0.5 : window.innerWidth * 0.6;
      const gap = isMobile ? 24 : 32;
      const totalDistance = (totalSlides - 1) * (slideWidth + gap);

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
              Math.round(progress * (totalSlides - 1)),
              totalSlides - 1
            );
            setActiveIndex(currentIndex);

            // Scale effects (sans parallax pour garder l'image bien centrée)
            slides.forEach((slide, i) => {
              const slideProgress = progress * (totalSlides - 1) - i;

              // Scale and opacity based on distance
              const distanceFromActive = Math.abs(slideProgress);
              const scale = gsap.utils.clamp(0.9, 1, 1 - distanceFromActive * 0.1);
              const opacity = gsap.utils.clamp(0.5, 1, 1 - distanceFromActive * 0.5);

              gsap.set(slide, { scale, opacity });

              // Text reveal
              const textContent = slide.querySelector(".text-content");
              if (textContent) {
                const textOpacity = distanceFromActive < 0.5 ? 1 : 0;
                const textY = distanceFromActive < 0.5 ? 0 : 20;
                gsap.set(textContent, { opacity: textOpacity, y: textY });
              }
            });
          },
        },
      });

      // Entrance animation
      gsap.fromTo(
        slides,
        { clipPath: "inset(100% 0 0 0)", scale: 0.9 },
        {
          clipPath: "inset(0% 0 0 0)",
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-noir" dir={isRTL ? "rtl" : "ltr"}>
        {/* Immersive Gallery Section */}
        <section ref={sectionRef} className="relative overflow-hidden">
          {/* Dynamic background */}
          <div
            className="absolute inset-0 transition-colors duration-1000"
            style={{
              background: `radial-gradient(ellipse at center, ${properties[activeIndex]?.color}25 0%, #0a0a0a 70%)`
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
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-bordeaux/30 rounded-full"
                style={{
                  left: `${5 + (i * 4.5)}%`,
                  top: `${15 + Math.sin(i * 0.5) * 35}%`,
                  animation: `float ${3 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>

          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-30 pt-24 md:pt-28 pb-6 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
              {/* Back Button */}
              <Link
                href="/#proprietes"
                className={`inline-flex items-center gap-2 text-blanc/70 hover:text-blanc transition-colors mb-6 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                <span className="font-outfit text-sm">{pageContent.backHome}</span>
              </Link>

              <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-bordeaux" />
                    <span className="text-bordeaux text-xs tracking-[0.3em] uppercase font-outfit">
                      {pageContent.badge}
                    </span>
                  </div>
                  <h1 className="font-cormorant text-3xl md:text-5xl lg:text-6xl text-blanc font-light">
                    {pageContent.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-bordeaux italic">{pageContent.title.split(" ").slice(-1)}</span>
                  </h1>
                  <p className="text-blanc/50 mt-2 font-outfit text-sm md:text-base">
                    {pageContent.subtitle}
                  </p>
                </div>

                {/* Navigation dots */}
                <div className="flex items-center gap-2 md:gap-3">
                  {properties.map((_, i) => (
                    <button
                      key={i}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i === activeIndex
                          ? "bg-bordeaux w-8"
                          : "bg-blanc/30 hover:bg-blanc/50 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main slider */}
          <div className="relative h-screen flex items-center pt-16">
            <div
              ref={trackRef}
              className="flex gap-6 md:gap-8 pl-[7.5vw] md:pl-[20vw] lg:pl-[25vw]"
              style={{ willChange: "transform" }}
            >
              {properties.map((property, index) => (
                <div
                  key={property.id}
                  ref={(el) => { slidesRef.current[index] = el; }}
                  className="relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[50vw] h-[60vh] md:h-[65vh] rounded-2xl md:rounded-3xl overflow-hidden group"
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link href={property.href} className="block w-full h-full">
                    {/* Background avec image floue bien visible */}
                    <div className="absolute inset-0">
                      <Image
                        src={property.image}
                        alt=""
                        fill
                        className="object-cover object-center blur-sm scale-105 opacity-80"
                        quality={50}
                      />
                    </div>
                    {/* Image principale - Nette et bien centrée */}
                    <div className="absolute inset-0 z-10">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-contain object-center"
                        priority={index < 2}
                        quality={100}
                        sizes="(max-width: 768px) 85vw, 50vw"
                      />
                    </div>

                    {/* Gradient overlay - Plus léger pour garder la clarté */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />

                    {/* Decorative corners */}
                    <div className="absolute top-4 md:top-6 left-4 md:left-6 w-8 md:w-12 h-8 md:h-12 border-t-2 border-l-2 border-blanc/30" />
                    <div className="absolute top-4 md:top-6 right-4 md:right-6 w-8 md:w-12 h-8 md:h-12 border-t-2 border-r-2 border-blanc/30" />
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 w-8 md:w-12 h-8 md:h-12 border-b-2 border-l-2 border-blanc/30" />
                    <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-8 md:w-12 h-8 md:h-12 border-b-2 border-r-2 border-blanc/30" />

                    {/* Scan lines */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-10"
                      style={{
                        background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
                      }}
                    />

                    {/* Rating badge */}
                    <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-blanc/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 z-10">
                      <Star className="w-4 h-4 text-bordeaux fill-bordeaux" />
                      <span className="text-noir text-sm font-medium">{property.rating}</span>
                    </div>

                    {/* Content */}
                    <div className="text-content absolute bottom-0 left-0 right-0 p-5 md:p-10">
                      <div className="flex items-end justify-between">
                        <div className="flex-1">
                          {/* Location */}
                          <div className="flex items-center gap-2 text-blanc/70 text-xs md:text-sm mb-2">
                            <MapPin className="w-3 md:w-4 h-3 md:h-4" />
                            <span className="font-outfit">{property.location}</span>
                          </div>

                          {/* Title */}
                          <h2 className="font-cormorant text-3xl md:text-5xl lg:text-6xl text-blanc font-light mb-3 group-hover:text-or transition-colors duration-300">
                            {property.title}
                          </h2>

                          {/* Description */}
                          <p className="text-blanc/60 text-sm md:text-base font-outfit max-w-lg mb-4 line-clamp-2">
                            {property.description}
                          </p>

                          {/* Details */}
                          <div className="flex items-center gap-4 md:gap-6">
                            <span className="flex items-center gap-2 text-blanc/70 text-sm font-outfit">
                              <BedDouble className="w-4 h-4" />
                              {property.bedrooms} {t.properties.bedrooms}
                            </span>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-bordeaux/80 backdrop-blur-sm text-blanc text-xs md:text-sm font-outfit rounded-full group-hover:bg-bordeaux transition-colors">
                              {t.properties.discover}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ boxShadow: `inset 0 0 100px ${property.color}40` }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 z-30 pb-6 md:pb-10 px-4 md:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Current title */}
              <div className="text-left">
                <span className="text-blanc font-cormorant text-xl md:text-2xl">
                  {properties[activeIndex]?.title}
                </span>
              </div>

              {/* Scroll hint */}
              <div className="flex items-center gap-3 text-blanc/40 text-xs font-outfit">
                <span className="hidden md:inline">{pageContent.scroll}</span>
                <div className="flex items-center gap-1">
                  <ChevronLeft className="w-4 h-4 animate-pulse" />
                  <ChevronRight className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              {/* Location */}
              <div className="hidden md:block text-right">
                <span className="text-blanc/60 font-outfit text-sm">
                  {properties[activeIndex]?.location}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 md:mt-6 h-[2px] bg-blanc/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-bordeaux to-bordeaux/50 rounded-full transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / properties.length) * 100}%` }}
              />
            </div>
          </div>

          {/* CSS for float animation */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); opacity: 0.3; }
              50% { transform: translateY(-15px); opacity: 0.6; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
