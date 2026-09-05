import { ImageReveal, Reveal, RevealGroup, RevealItem } from "./Reveal";
import { cn } from "../utils/cn";

const GESTURES = [
  { src: "./images/gesture-1.jpg", label: "Precisão", offset: "" },
  { src: "./images/gesture-2.jpg", label: "Textura", offset: "sm:mt-10" },
  { src: "./images/gesture-3.jpg", label: "Delicadeza", offset: "" },
  { src: "./images/gesture-4.jpg", label: "Presença", offset: "sm:mt-10" },
];

export function GestureGallery() {
  return (
    <section className="relative overflow-hidden bg-cream-dark py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <p className="eyebrow text-terracotta-dark">O ritmo do atendimento</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              Entre um gesto e outro.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-espresso/65">
              É na sequência de pequenos gestos — o penteado, a textura, o traço, o toque
              final — que a transformação acontece.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {GESTURES.map((g) => (
            <RevealItem key={g.src} className={cn("group", g.offset)}>
              <div className="overflow-hidden rounded-sm">
                <ImageReveal
                  src={g.src}
                  alt={g.label}
                  className="group aspect-[3/4] w-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <p className="mt-3 text-center font-serif text-base italic text-espresso/80 sm:text-lg">
                {g.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
