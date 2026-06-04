"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How much does a new concrete driveway cost?",
    a: "Most residential concrete driveways in the Twin Cities range from $8 to $15 per square foot, depending on thickness, finish, square footage, and site prep. We provide free, itemized estimates so you know exactly what you’re paying for — no hidden fees or surprises.",
  },
  {
    q: "How long does concrete last?",
    a: "Properly installed concrete should last 30 to 50+ years with minimal maintenance. The key is correct sub-base preparation, the right concrete mix for Minnesota weather, proper jointing, and a quality seal. We back our work with a written guarantee.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes — all estimates are free, no obligation, and include a site visit. We take time to understand your project, walk you through options, and provide a clear written quote within 48 hours.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. El Primos Concrete is fully licensed, bonded, and insured in the state of Minnesota. We carry full liability and workers’ comp coverage on every job — we’re happy to provide proof of insurance on request.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential driveways are completed in 3–5 days from demo to final cure. Patios and walkways are typically 2–4 days. Larger commercial projects vary by scope. We’ll give you a clear timeline as part of your estimate and stick to it.",
  },
  {
    q: "What time of year can concrete be poured?",
    a: "In Minnesota, we typically pour from April through November. We monitor weather closely and use cold-weather additives and curing blankets when needed. Schedule early — spring and fall book out fast.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-8 bg-orange" />
            FAQ
            <span className="h-px w-8 bg-orange" />
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl text-charcoal uppercase leading-[0.95]">
            Common <span className="text-orange">questions</span>
          </h2>
          <p className="mt-6 text-lg text-concrete leading-relaxed">
            Don&rsquo;t see your question? Give us a call — we&rsquo;re happy to talk through your project.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "border-orange/40 bg-orange/[0.03]"
                    : "border-concrete-50 bg-white hover:border-charcoal/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span
                    className={`font-display text-lg sm:text-xl uppercase tracking-wide transition-colors ${
                      isOpen ? "text-orange" : "text-charcoal"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-orange text-white rotate-45"
                        : "bg-concrete-50 text-charcoal"
                    }`}
                  >
                    <Plus className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-6 text-base text-concrete leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
