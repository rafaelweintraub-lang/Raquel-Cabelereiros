import { motion } from "framer-motion";
import { AnimatedLine, ImageReveal, Reveal } from "./Reveal";
import { cn } from "../utils/cn";
import { WHATSAPP_URL } from "../constants";

export function ServiceSection({
  id,
  index,
  eyebrow,
  title,
  text,
  cta,
  image,
  imageAlt,
  reverse = false,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="relative bg-cream">
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-12",
          reverse && "lg:[direction:rtl]"
        )}
      >
        <div className="lg:col-span-7 lg:[direction:ltr]">
          <ImageReveal
            src={image}
            alt={imageAlt}
            className="group h-[62vh] min-h-[420px] w-full sm:h-[72vh] lg:h-[88vh] lg:min-h-[600px]"
            imgClassName="transition-transform duration-[1400ms] ease-out will-change-transform group-hover:scale-105"
          />
        </div>

        <div className="flex items-center bg-espresso px-6 py-16 sm:px-10 lg:col-span-5 lg:px-14 lg:py-0 lg:[direction:ltr]">
          <div className="mx-auto w-full max-w-md">
            <Reveal>
              <span className="font-serif text-sm italic text-gold">{index}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mt-3 text-cream/60">{eyebrow}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-cream text-balance sm:text-5xl">
                {title}
              </h2>
            </Reveal>
            <AnimatedLine delay={0.26} className="mt-7 w-16 text-gold" />
            <Reveal delay={0.32}>
              <p className="mt-7 text-[0.98rem] leading-relaxed text-cream/70">{text}</p>
            </Reveal>
            <Reveal delay={0.42}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-3 border-b border-cream/40 pb-1.5 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:border-cream"
              >
                {cta}
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
