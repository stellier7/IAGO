import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const letterFromLeft: Variants = {
  hidden: { opacity: 0, x: -52 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const letterFromRight: Variants = {
  hidden: { opacity: 0, x: 52 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerLettersLeft: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

export const staggerLettersRight: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.18 },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideFromLeftBlur: Variants = {
  hidden: { opacity: 0, x: -80, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const lineSlideFromLeft: Variants = {
  hidden: { x: "-110%" },
  visible: {
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerLines: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.95 },
  },
};

export const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillarTransition = {
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export const pillarFromLeft: Variants = {
  hidden: { opacity: 0, x: -96 },
  visible: {
    opacity: 1,
    x: 0,
    transition: pillarTransition,
  },
};

export const pillarFromBottom: Variants = {
  hidden: { opacity: 0, y: 88 },
  visible: {
    opacity: 1,
    y: 0,
    transition: pillarTransition,
  },
};

export const pillarFromRight: Variants = {
  hidden: { opacity: 0, x: 96 },
  visible: {
    opacity: 1,
    x: 0,
    transition: pillarTransition,
  },
};

export const staggerPillarCards: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

export const pillarCardVariants: Variants[] = [
  pillarFromLeft,
  pillarFromBottom,
  pillarFromRight,
];
