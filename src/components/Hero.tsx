"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, FileText, Building2 } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Users, label: "Family-Owned Business" },
  { icon: FileText, label: "Free Estimates" },
  { icon: Building2, label: "Residential & Commercial" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen w-full overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0">
        <Image
          src="/projects/patio-stamped-pool.jpg"
          alt="Premium stamped concrete patio by El Primos Concrete"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center self-start gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
          Family-Owned Since 2009
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-white text-shadow-strong uppercase"
        >
          Strong Foundations.{" "}
          <span className="text-orange">Exceptional</span> Craftsmanship.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed"
        >
          Professional concrete solutions for homes, businesses, and commercial
          developments — built to last for generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-orange px-7 py-4 text-base font-semibold text-white shadow-xl shadow-orange/25 hover:bg-orange-dark transition-all hover:shadow-2xl hover:shadow-orange/40 hover:-translate-y-0.5"
          >
            Get Free Estimate
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 backdrop-blur px-7 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-all"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 max-w-3xl"
        >
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 border border-white/15">
                <Icon className="h-5 w-5 text-orange" strokeWidth={2.2} />
              </div>
              <span className="text-sm font-medium text-white/90 leading-tight">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
