import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "../constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso pt-16 pb-8 text-cream/70">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-12 border-b border-cream/10 pb-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-serif text-2xl tracking-[0.15em] text-cream">RAQUEL</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/55">
              Studio boutique de cabelo e maquiagem nos Jardins, São Paulo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:flex sm:gap-16">
            <div>
              <p className="eyebrow text-cream/40">Navegação</p>
              <ul className="mt-4 space-y-2.5">
                <li><a href="#detalhe" className="transition-colors hover:text-cream">O Studio</a></li>
                <li><a href="#cabelo" className="transition-colors hover:text-cream">Cabelo</a></li>
                <li><a href="#maquiagem" className="transition-colors hover:text-cream">Maquiagem</a></li>
                <li><a href="#contato" className="transition-colors hover:text-cream">Contato</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-cream/40">Contato</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-cream">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-cream">
                    {INSTAGRAM_HANDLE}
                  </a>
                </li>
                <li className="text-cream/55">Jardins, São Paulo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-4 pt-8 text-xs text-cream/40 sm:flex-row sm:justify-between">
          <p>© {year} Raquel Cabeleireiros. Todos os direitos reservados.</p>
          <p className="italic font-serif text-cream/50">Beleza, no seu ritmo.</p>
        </div>
      </div>
    </footer>
  );
}
