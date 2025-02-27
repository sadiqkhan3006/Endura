import { delay } from "motion/react";

export const imageVariants = {
  hidden: { x: "-100%", opacity: 0, scale: 0.9 },
  visible: {
    x: "0",
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const textFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.5, //
    },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const textSpacingVariant = {
  hidden: { opacity: 0, y: 20, letterSpacing: "0px" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "1.5px",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const buttonHover = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

export const floatingBadge = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
  },
};

export const marqueeVariant = {
  animate: {
    x: ["0%", "-102.3%"],
    transition: { ease: "linear", duration: 12, repeat: Infinity },
  },
};

export const fadeInWithDelay = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

export const hoverCard = {
  whileHover: { scale: 1.05, y: -5 },
  transition: { type: "spring", stiffness: 200 },
};
export const hoverEffect = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  transition: { type: "spring", stiffness: 300 },
};

// Background fade-in effect
export const bgFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Text fade-in from left
export const textFadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }, // Delayed start
  },
};

// Image fade-in from right
export const imageFadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }, // Matches text delay
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};
export const swiperVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 0.4, ease: "easeOut" },
  },
};
