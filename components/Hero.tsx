"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import Logo from "./Logo";
import ScrollIndicator from "./ScrollIndicator";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVideo } from "@/contexts/VideoContext";

export default function Hero() {
  const { t, isRTL } = useLanguage();
  const { setIsVideoPlaying } = useVideo();
  const [videoVisible, setVideoVisible] = useState(false);
  const [showInitialScreen, setShowInitialScreen] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Fonction pour démarrer la vidéo
  const startVideo = useCallback(() => {
    const video = videoRef.current;
    if (video && isHeroVisible) {
      setShowInitialScreen(false);
      video.currentTime = 0;
      video.muted = true;
      setIsMuted(true);

      // Promise-based play avec fallback
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoVisible(true);
            setIsVideoPlaying(true);
            setHasStarted(true);
          })
          .catch(() => {
            // Autoplay bloqué - essayer avec interaction utilisateur
            setVideoVisible(true);
            setHasStarted(true);
          });
      }
    }
  }, [isHeroVisible, setIsVideoPlaying]);

  // Intersection Observer - Pause/Resume based on visibility
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.3;
        setIsHeroVisible(isVisible);

        if (!isVisible) {
          if (videoRef.current) {
            videoRef.current.pause();
          }
          setIsVideoPlaying(false);
        } else if (hasStarted && !showInitialScreen) {
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
            setVideoVisible(true);
            setIsVideoPlaying(true);
          }
        }
      },
      {
        threshold: [0, 0.3, 0.5, 1],
        rootMargin: "0px",
      }
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, [hasStarted, showInitialScreen, setIsVideoPlaying]);

  // Start video after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasStarted) {
        startVideo();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasStarted, startVideo]);

  // Événement canplay pour s'assurer que la vidéo peut jouer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      if (hasStarted && !showInitialScreen) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, [hasStarted, showInitialScreen]);

  // Toggle mute
  const handleToggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  // Clic sur la vidéo pour la démarrer (fallback mobile)
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(() => {});
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-noir"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Écran initial avec fond bordeaux et logo centré avec slogan */}
      <AnimatePresence>
        {showInitialScreen && (
          <motion.div
            className="absolute inset-0 w-full h-full bg-bordeaux z-20 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center px-6"
            >
              <Logo variant="white" size="3xl" />
              <motion.p
                className="mt-8 text-blanc/90 font-cormorant text-lg md:text-xl lg:text-2xl italic tracking-wide text-center max-w-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                &quot;{t.hero.quote}&quot;
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video container - fullscreen */}
      <div className="absolute inset-0 w-full h-full" onClick={handleVideoClick}>
        {/* Video fullscreen avec object-cover */}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoVisible ? "opacity-100" : "opacity-0"
          }`}
          poster="/header-poster.jpg"
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          muted
          loop
        >
          <source src="/header-web.mp4" type="video/mp4" />
        </video>

        {/* Fond noir de fallback quand la vidéo charge */}
      </div>

      {/* Overlay sombre pour lisibilité du logo et menu */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir/50 via-transparent to-noir/30 pointer-events-none" />

      {/* Bouton son + Scroll indicator - centrés ensemble */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40">
        <AnimatePresence>
          {hasStarted && (
            <motion.button
              onClick={handleToggleMute}
              className="w-8 h-8 bg-transparent flex items-center justify-center text-blanc/60 hover:text-blanc transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-label={isMuted ? "Activer le son" : "Couper le son"}
            >
              {isMuted ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </motion.button>
          )}
        </AnimatePresence>
        <a
          href="#services"
          className="hover:opacity-80 transition-opacity duration-300"
        >
          <ScrollIndicator variant="light" />
        </a>
      </div>
    </section>
  );
}
