import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { DetailSection } from "./components/DetailSection";
import { ServiceSection } from "./components/ServiceSection";
import { GestureGallery } from "./components/GestureGallery";
import { QuoteBreak } from "./components/QuoteBreak";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-cream">
      <Header />
      <main>
        <Hero />
        <DetailSection />

        <ServiceSection
          id="cabelo"
          index="01 — Cabelo"
          eyebrow="Cabelo"
          title="Um corte que acompanha você."
          text="Da escuta ao acabamento, cada cabelo é tratado como único — cor, textura e movimento pensados para caber no seu dia a dia, não só no espelho do studio."
          cta="Falar sobre o meu cabelo"
          image="./images/cabelo-section.jpg"
          imageAlt="Cabeleireira trabalhando no cabelo castanho ondulado de uma cliente, luz natural"
        />

        <ServiceSection
          id="maquiagem"
          index="02 — Maquiagem"
          eyebrow="Maquiagem"
          title="Uma make que parece pele."
          text="Produções leves para o dia a dia ou para ocasiões especiais, sempre respeitando os traços, o tempo e o estilo de quem está na cadeira."
          cta="Agendar minha make"
          image="./images/maquiagem-section.jpg"
          imageAlt="Maquiadora aplicando maquiagem natural com pincel em uma cliente"
          reverse
        />

        <GestureGallery />
        <QuoteBreak />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
