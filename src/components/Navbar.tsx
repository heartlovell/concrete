"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md bg-orange shadow-lg shadow-orange/20">
              <span className="font-display text-2xl text-white leading-none">EP</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg tracking-wide text-white">
                EL PRIMOS
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-orange">
                Concrete Co.
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-white hover:text-orange transition-colors"
            >
              <Phone className="h-4 w-4 text-orange" strokeWidth={2.5} />
              {SITE.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange-dark transition-colors"
            >
              Free Estimate
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-charcoal border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-4 py-3 text-base font-medium text-white hover:bg-white/5 hover:text-orange"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4 text-orange" />
                  {SITE.phone}
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-dark"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
