import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_URL } from "../constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.42, 0.72]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="topo"
      ref={ref}
      className="relative flex h-[100dvh] min-h-[640px] w-full items-end overflow-hidden bg-espresso"
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0 h-[120%] w-full">
        <img
          src="./images/hero-main.jpg"
          alt="Mulher elegante com cabelo castanho fluindo, retrato editorial do studio Raquel Cabeleireiros"
          className="h-full w-full object-cover object-[42%_22%]"
        />
      </motion.div>

      {/* Legibility gradient: strong on the left where the wordmark & text live */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/55 to-espresso/10" />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-espresso"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-espresso/25" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="eyebrow text-cream/80"
          >
            Studio de Beleza · Jardins, São Paulo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="wordmark mt-3 text-cream sm:mt-4"
          >
            RAQUEL
          </motion.h1>

          <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:flex-row sm:items-end sm:justify-between lg:mt-10">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: EASE }}
              className="max-w-md font-serif text-2xl italic text-cream/95 sm:text-3xl lg:text-4xl"
            >
              Beleza, no seu ritmo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: EASE }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.2em] text-cream shadow-lg shadow-black/20 transition-all hover:bg-terracotta-dark"
              >
                Agendar horário
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#detalhe"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.2em] text-cream/90 transition-colors hover:border-cream hover:text-cream"
              >
                Conhecer o studio
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 sm:flex"
      >
        <span className="eyebrow">Role</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-cream/50"
        />
      </motion.div>
    </section>
  );
}
