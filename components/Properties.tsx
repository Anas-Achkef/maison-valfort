"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, MapPin, BedDouble } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const propertyData = [
  {
    id: 1,
    image: "/hauss.webp",
    title: "Appartement Paris Luxe",
    location: "Paris, France",
    bedrooms: 4,
    tag: "Premium",
    description: "Appartement haussmannien d'exception au cœur de Paris avec vue imprenable.",
    href: "/properties/appartement-paris-luxe",
  },
  {
    id: 2,
    image: "/campagniard.webp",
    title: "Chalet Chamonix",
    location: "Chamonix, France",
    bedrooms: 5,
    tag: "Exclusif",
    description: "Chalet de montagne luxueux avec vue panoramique sur le Mont-Blanc.",
    href: "/properties/chalet-chamonix",
  },
  {
    id: 3,
    image: "/penthouse.webp",
    title: "Penthouse Marbella",
    location: "Marbella, Espagne",
    bedrooms: 6,
    tag: "Nouveau",
    description: "Penthouse moderne avec terrasse privée et vue sur la Méditerranée.",
    href: "/properties/penthouse-marbella",
  },
  {
    id: 4,
    image: "/vignoble.webp",
    title: "Mas Provençal",
    location: "Provence, France",
    bedrooms: 7,
    tag: "Signature",
    description: "Mas authentique au cœur des vignobles avec piscine et oliveraie.",
    href: "/properties/mas-provencal",
  },
  {
    id: 5,
    image: "/la-mer.webp",
    title: "Villa Méditerranéenne",
    location: "Côte d'Azur, France",
    bedrooms: 8,
    tag: "Prestige",
    description: "Villa pieds dans l'eau avec accès privé à la plage et spa.",
    href: "/properties/villa-mediterraneenne",
  },
];

export default function Properties() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const track = trackRef.current;
    const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];
    const progressBars = progressBarsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !container || !track || slides.length === 0) return;

    // Détecter si on est sur mobile
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Sur mobile, animation simplifiée avec scroll horizontal natif
      const ctx = gsap.context(() => {
        // Animation du titre
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // IMPORTANT (mobile) : on ne masque JAMAIS les cartes.
        // Le scroll horizontal est natif au conteneur, donc un ScrollTrigger ne s'y
        // applique pas et laissait les cartes bloquées à opacity:0 → invisibles.
        // Les cartes sont visibles par défaut (rendu serveur). On ajoute seulement une
        // entrée douce au montage, sans ScrollTrigger, qui se termine toujours visible.
        gsap.set(slides, { opacity: 1, y: 0 });
        gsap.from(slides, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "opacity,transform",
        });
      }, section);

      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      // Animation du titre
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Calcul des dimensions
      const totalSlides = slides.length;
      const slideWidth = window.innerWidth * 0.75;
      const gap = 20;

      // Distance totale à parcourir
      const totalScrollDistance = (totalSlides - 1) * (slideWidth + gap);

      // Animation principale du slider horizontal
      gsap.to(track, {
        x: -totalScrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScrollDistance + window.innerHeight}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const numSlides = totalSlides;

            // Déterminer l'index actif
            const currentIndex = Math.round(progress * (numSlides - 1));
            setActiveIndex(currentIndex);

            // Animer les cartes
            slides.forEach((s, i) => {
              const slideCenter = i / (numSlides - 1);
              const distanceFromCenter = Math.abs(progress - slideCenter);
              const normalizedDistance = Math.min(distanceFromCenter * (numSlides - 1), 1);

              // Scale: 1 au centre, 0.9 sur les côtés
              const scale = gsap.utils.interpolate(1, 0.9, normalizedDistance);

              // Opacité: 1 au centre, 0.5 sur les côtés
              const opacity = gsap.utils.interpolate(1, 0.5, normalizedDistance);

              gsap.set(s, { scale, opacity });

              // Overlay plus léger - garder les images claires
              const overlay = s.querySelector('.slide-overlay');
              if (overlay) {
                const overlayOpacity = gsap.utils.interpolate(1, 0.6, normalizedDistance);
                gsap.set(overlay, { opacity: overlayOpacity });
              }
            });

            // Animer les barres de progression
            progressBars.forEach((bar, i) => {
              const slideStart = i / numSlides;
              const slideEnd = (i + 1) / numSlides;

              let barProgress = 0;
              if (progress >= slideEnd) {
                barProgress = 100;
              } else if (progress > slideStart) {
                barProgress = ((progress - slideStart) / (slideEnd - slideStart)) * 100;
              }

              gsap.set(bar, { width: `${barProgress}%` });
            });
          },
        },
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proprietes"
      className="relative bg-blanc overflow-y-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-blanc via-creme to-blanc" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bordeaux/20 to-transparent" />

      {/* Container principal */}
      <div ref={containerRef} className="relative min-h-screen md:min-h-screen flex flex-col">

        {/* En-tête */}
        <div ref={titleRef} className="pt-16 md:pt-20 pb-6 md:pb-10 px-6 text-center relative z-10">
          <span className="inline-block text-bordeaux text-sm tracking-[0.3em] uppercase mb-4 font-outfit">
            {t.properties.badge}
          </span>
          <h2 className="font-cormorant text-3xl md:text-6xl text-noir font-medium mb-4">
            {t.properties.title}
          </h2>
          <p className="text-noir/60 max-w-2xl mx-auto text-base md:text-lg font-cormorant">
            {t.properties.subtitle}
          </p>
        </div>

        {/* Slider Container */}
        <div className="flex-1 flex items-center overflow-visible md:overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-5 pl-4 md:pl-[12.5vw] pr-4 md:pr-0 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none pb-4"
            style={{ willChange: 'transform' }}
          >
            {propertyData.map((property, index) => (
              <div
                key={property.id}
                ref={(el) => { slidesRef.current[index] = el; }}
                className="relative flex-shrink-0 w-[85vw] md:w-[75vw] h-[50vh] md:h-[65vh] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-2xl snap-center"
                style={{ willChange: 'transform, opacity' }}
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
                      sizes="75vw"
                    />
                  </div>

                  {/* Overlay gradient - Plus léger pour garder la clarté */}
                  <div className="slide-overlay absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent transition-opacity duration-500" />

                  {/* Bordure élégante au hover */}
                  <div className="absolute inset-0 border-2 border-blanc/0 group-hover:border-blanc/80 rounded-3xl transition-all duration-500 shadow-2xl" />

                  {/* Tag en haut à droite */}
                  <div className="absolute top-6 right-6 z-10">
                    <span className="px-4 py-2 bg-blanc/95 backdrop-blur-md text-bordeaux text-xs tracking-wider uppercase font-outfit rounded-full shadow-lg font-semibold">
                      {property.tag}
                    </span>
                  </div>

                  {/* Titre en haut à gauche */}
                  <div className="absolute top-6 left-6 z-10">
                    <h3 className="font-cormorant text-2xl md:text-3xl text-blanc font-semibold drop-shadow-lg">
                      {property.title}
                    </h3>
                  </div>

                  {/* Contenu en bas */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                      {/* Infos à gauche */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-blanc text-sm mb-3 drop-shadow-md">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-blanc" />
                            {property.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <BedDouble className="w-4 h-4 text-blanc" />
                            {property.bedrooms} {t.properties.bedrooms}
                          </span>
                        </div>
                        <p className="text-blanc/90 text-sm md:text-base font-outfit max-w-md leading-relaxed drop-shadow-md">
                          {property.description}
                        </p>

                        {/* Bouton Découvrir */}
                        <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-blanc/95 backdrop-blur-sm text-bordeaux rounded-full group-hover:bg-bordeaux group-hover:text-blanc transition-all duration-300 shadow-lg">
                          <span className="font-outfit text-sm font-medium tracking-wide">{t.properties.discover}</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Numéro d'index à droite */}
                      <div className="hidden md:block">
                        <span className="font-cormorant text-7xl text-blanc/30 font-light drop-shadow-lg">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateur de progression */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {propertyData.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                index === activeIndex ? 'w-16 bg-noir/20' : 'w-8 bg-noir/10'
              }`}
            >
              <div
                ref={(el) => { progressBarsRef.current[index] = el; }}
                className="h-full bg-bordeaux rounded-full"
                style={{ width: index === 0 ? '100%' : '0%' }}
              />
            </div>
          ))}
        </div>

        {/* Numéro de slide actuel */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-baseline gap-1">
          <span className="font-cormorant text-4xl text-bordeaux font-light">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-noir/40 text-sm">/</span>
          <span className="text-noir/40 text-sm font-outfit">
            {String(propertyData.length).padStart(2, '0')}
          </span>
        </div>

        {/* Boutons CTA en bas */}
        <div className="pb-20 pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <Link href="/properties">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-bordeaux text-blanc font-medium hover:bg-noir transition-all duration-300 text-sm rounded-full shadow-lg">
              <span>{t.properties.viewAll || "Voir tous nos biens"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-noir/20 text-noir hover:border-bordeaux hover:text-bordeaux transition-all duration-300 text-sm rounded-full"
          >
            <span>{t.properties.entrust}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
