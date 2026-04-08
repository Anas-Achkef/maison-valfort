"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import scrollAnimationLight from "@/public/animations/scroll-down.json";
import scrollAnimationDark from "@/public/animations/scroll-down-dark.json";

interface ScrollIndicatorProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function ScrollIndicator({
  className = "",
  variant = "light",
  size = "md"
}: ScrollIndicatorProps) {
  const sizeClasses = {
    sm: "w-8 h-12",
    md: "w-10 h-16",
    lg: "w-12 h-20"
  };

  const animationData = variant === "light" ? scrollAnimationLight : scrollAnimationDark;

  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <div className={sizeClasses[size]}>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </motion.div>
  );
}
