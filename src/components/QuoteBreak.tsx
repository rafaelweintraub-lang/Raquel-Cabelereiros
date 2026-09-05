import { AnimatedLine, Reveal } from "./Reveal";

export function QuoteBreak() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-cream py-28 sm:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[42vw] leading-none text-espresso/[0.035]"
      >
        R
      </span>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <AnimatedLine className="mx-auto w-20 text-terracotta" />
        <Reveal delay={0.1}>
          <p className="mt-8 font-serif text-3xl italic leading-snug text-espresso sm:text-4xl lg:text-[2.75rem]">
            "Beleza, no seu ritmo."
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="eyebrow mt-8 text-espresso/45">Raquel Cabeleireiros — Jardins</p>
        </Reveal>
        <AnimatedLine delay={0.28} className="mx-auto mt-8 w-20 text-terracotta" />
      </div>
    </section>
  );
}
