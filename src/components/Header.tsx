import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { WHATSAPP_URL } from "../constants";

const LINKS = [
  { href: "#detalhe", label: "O Studio" },
  { href: "#cabelo", label: "Cabelo" },
  { href: "#maquiagem", label: "Maquiagem" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(36,26,21,0.08)]"
          : "bg-gradient-to-b from-black/35 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#topo"
          className={cn(
            "font-serif text-xl tracking-[0.18em] transition-colors sm:text-2xl",
            scrolled || open ? "text-espresso" : "text-cream"
          )}
        >
          RAQUEL
        </a>

        <nav
          className={cn(
            "hidden items-center gap-9 font-sans text-[0.72rem] uppercase tracking-[0.22em] md:flex",
            scrolled ? "text-espresso/80" : "text-cream/90"
          )}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "rounded-full border px-5 py-2.5 text-[0.68rem] tracking-[0.2em] transition-colors",
              scrolled
                ? "border-espresso/25 text-espresso hover:bg-espresso hover:text-cream"
                : "border-cream/50 text-cream hover:bg-cream hover:text-espresso"
            )}
          >
            Agendar
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden",
            scrolled || open ? "text-espresso" : "text-cream"
          )}
        >
          <span
            className={cn(
              "block h-px w-6 bg-current transition-transform duration-300",
              open && "translate-y-[6.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-current transition-opacity duration-300",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-current transition-transform duration-300",
              open && "-translate-y-[6.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="border-b border-espresso/10 py-4 font-serif text-2xl text-espresso"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28, duration: 0.4 }}
                className="mt-6 rounded-full bg-espresso px-6 py-4 text-center text-[0.72rem] uppercase tracking-[0.24em] text-cream"
              >
                Agendar pelo WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
