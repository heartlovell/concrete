"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const us = [
  "Experienced Crews",
  "Premium Materials",
  "Transparent Pricing",
  "On-Time Completion",
  "Licensed & Insured",
  "Professional Communication",
  "Quality Guarantee",
];

const them = [
  "Poor Communication",
  "Delayed Projects",
  "Cheap Materials",
  "Unclear Pricing",
  "No Quality Guarantee",
  "Unreliable Crews",
  "Hidden Fees",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32 text-white">
      <div className="absolute inset-0 bg-concrete-texture opacity-30" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-8 bg-orange" />
            Why Primos
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95]">
            The difference is in <span className="text-orange">the details</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            See how we stack up against typical concrete contractors — and why
            homeowners and developers keep coming back.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-orange/30 bg-gradient-to-br from-orange/10 via-charcoal-soft to-charcoal-soft p-8 sm:p-10 shadow-2xl"
          >
            <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-orange px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> Recommended
            </div>
            <h3 className="font-display text-3xl uppercase tracking-wide">
              Primos Concrete LLC
            </h3>
            <p className="mt-1 text-sm text-orange font-semibold uppercase tracking-wider">
              The premium standard
            </p>
            <ul className="mt-8 space-y-4">
              {us.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-base text-white font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            <h3 className="font-display text-3xl uppercase tracking-wide text-white/60">
              Typical Contractors
            </h3>
            <p className="mt-1 text-sm text-white/40 font-semibold uppercase tracking-wider">
              What you usually get
            </p>
            <ul className="mt-8 space-y-4">
              {them.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <X className="h-4 w-4 text-white/40" strokeWidth={3} />
                  </span>
                  <span className="text-base text-white/50 line-through decoration-white/20">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
