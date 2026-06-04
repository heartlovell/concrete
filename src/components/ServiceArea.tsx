"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Minneapolis",
  "St. Paul",
  "Minnetonka",
  "Eden Prairie",
  "Plymouth",
  "Bloomington",
  "Edina",
  "Wayzata",
  "Maple Grove",
  "Woodbury",
  "Roseville",
  "Burnsville",
];

export default function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32 text-white">
      <div className="absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-8 bg-orange" />
            Service Area
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95]">
            Proudly serving the <span className="text-orange">Twin Cities</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Based in Minneapolis, we serve homeowners, contractors, and
            commercial clients across the metro and surrounding communities.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-orange/40 hover:bg-orange/5 transition-all"
            >
              <MapPin
                className="h-5 w-5 text-orange shrink-0 group-hover:scale-110 transition-transform"
                strokeWidth={2.2}
              />
              <span className="text-base font-semibold text-white">{city}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center text-white/60">
          <span className="font-medium">And surrounding communities</span>
          <span className="mx-3 text-white/20">•</span>
          <a
            href="#contact"
            className="text-orange font-semibold hover:underline underline-offset-4"
          >
            Not in the list? Ask us →
          </a>
        </div>
      </div>
    </section>
  );
}
