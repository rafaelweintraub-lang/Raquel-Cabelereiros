import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.9,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span";
}) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export function AnimatedLine({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      style={{ transformOrigin: "left" }}
      className={cn("hairline", className)}
    />
  );
}

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
      transition={{ duration: 1.2, ease: EASE, delay }}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
        transition={{ duration: 1.6, ease: EASE, delay }}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </motion.div>
  );
}
