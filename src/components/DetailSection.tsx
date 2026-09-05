import { AnimatedLine, ImageReveal, Reveal, RevealGroup, RevealItem } from "./Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Escuta antes da tesoura",
    text: "Cada atendimento começa em conversa — entender o cabelo, a rotina e o momento de quem chega.",
  },
  {
    n: "02",
    title: "Técnica com calma",
    text: "Tempo certo para cada etapa, sem pressa, para que o resultado se sustente no dia a dia.",
  },
  {
    n: "03",
    title: "Acabamento que se nota",
    text: "O cuidado aparece nos pequenos detalhes finais — o que faz o conjunto parecer inteiro.",
  },
];

export function DetailSection() {
  return (
    <section id="detalhe" className="relative overflow-hidden bg-cream py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Visual composition */}
          <div className="relative lg:col-span-7">
            <ImageReveal
              src="./images/detail-primary.jpg"
              alt="Mãos de cabeleireira penteando cabelo castanho com cuidado"
              className="aspect-[4/5] w-full rounded-sm sm:aspect-[16/11] lg:aspect-[5/6]"
            />
            <Reveal
              delay={0.5}
              y={30}
              className="absolute -bottom-10 -right-4 w-[46%] max-w-[220px] rotate-2 border-8 border-cream shadow-2xl shadow-espresso/20 sm:-bottom-14 sm:-right-8 sm:max-w-[260px]"
            >
              <img
                src="./images/detail-secondary.jpg"
                alt="Textura de cabelo castanho em close, luz dourada"
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>

          </div>

          {/* Editorial text */}
          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-6">
            <Reveal>
              <p className="eyebrow text-terracotta-dark">O Studio</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-espresso text-balance sm:text-5xl">
                Cuidado que começa no detalhe.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-espresso/70">
                O Raquel Cabeleireiros nasceu para ser um intervalo dentro dos Jardins — um
                lugar pequeno, atento e feito na medida de quem senta na cadeira.
              </p>
            </Reveal>

            <AnimatedLine delay={0.28} className="mt-10 w-14 text-terracotta" />

            <RevealGroup className="mt-8 flex flex-col divide-y divide-espresso/10">

              {PRINCIPLES.map((p) => (
                <RevealItem key={p.n} className="flex gap-5 py-6">
                  <span className="font-serif text-lg italic text-terracotta">{p.n}</span>
                  <div>
                    <h3 className="font-serif text-lg text-espresso">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-espresso/60">{p.text}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
