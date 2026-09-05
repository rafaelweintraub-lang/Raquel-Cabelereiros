import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedLine, Reveal } from "./Reveal";
import { WHATSAPP_URL } from "../constants";

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden bg-espresso"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="flex min-h-[70vh] items-center px-6 py-20 sm:px-10 sm:py-24 lg:col-span-7 lg:min-h-[92vh] lg:px-16">
          <div className="max-w-lg">
            <Reveal>
              <p className="eyebrow text-gold">Agende seu horário</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-cream text-balance sm:text-5xl lg:text-6xl">
                Seu próximo momento começa aqui.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-cream/65">
                Um studio pequeno nos Jardins, pensado para quem procura cuidado de
                verdade. Chame no WhatsApp e vamos encontrar o melhor horário para você.
              </p>
            </Reveal>

            <Reveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-terracotta-dark"
              >
                Falar no WhatsApp
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <span className="text-sm text-cream/50">Jardins, São Paulo</span>
            </Reveal>

            <AnimatedLine delay={0.4} className="mt-14 w-full max-w-md text-cream/25" />
          </div>
        </div>

        <div className="relative min-h-[46vh] overflow-hidden lg:col-span-5 lg:min-h-[92vh]">
          <motion.div style={{ y: imgY }} className="absolute inset-0 h-[124%] w-full">
            <img
              src="./images/final-cta.jpg"
              alt="Perfil de mulher elegante com cabelo castanho contra fundo escuro"
              className="h-full w-full object-cover object-[65%_18%]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/10 to-transparent lg:bg-gradient-to-r lg:from-espresso lg:via-transparent lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
