"use client";

import { motion } from "framer-motion";
import {
  Car,
  Trees,
  Footprints,
  Building,
  Stamp,
  Warehouse,
  Wrench,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Driveways",
    desc: "Custom concrete driveways engineered for Minnesota weather and built to last decades.",
  },
  {
    icon: Trees,
    title: "Patios",
    desc: "Beautiful outdoor living spaces — from clean modern slabs to custom-shaped designs.",
  },
  {
    icon: Footprints,
    title: "Sidewalks & Walkways",
    desc: "Durable, clean, code-compliant walkway installations for any property.",
  },
  {
    icon: Building,
    title: "Foundations",
    desc: "Strong, level foundations for residential additions and commercial structures.",
  },
  {
    icon: Stamp,
    title: "Stamped Concrete",
    desc: "Decorative finishes — slate, stone, brick patterns — at the strength of solid concrete.",
  },
  {
    icon: Warehouse,
    title: "Commercial Concrete",
    desc: "Parking lots, loading docks, warehouses, and large commercial developments.",
  },
  {
    icon: Wrench,
    title: "Concrete Repair",
    desc: "Crack repair, resurfacing, lifting, and full restoration of existing concrete.",
  },
  {
    icon: Layers,
    title: "Retaining Walls",
    desc: "Functional, attractive structural walls that hold up to time and pressure.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-8 bg-orange" />
            What We Do
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl text-charcoal uppercase leading-[0.95]">
            Concrete services <span className="text-orange">built to last</span>
          </h2>
          <p className="mt-6 text-lg text-concrete leading-relaxed">
            From residential driveways to commercial foundations, we deliver
            premium concrete work backed by 15 years of hands-on craftsmanship.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.a
              key={title}
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              className="group relative overflow-hidden rounded-xl border border-concrete-50 bg-white p-7 hover:border-charcoal/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-concrete-50 group-hover:bg-orange transition-colors">
                  <Icon
                    className="h-7 w-7 text-charcoal group-hover:text-white transition-colors"
                    strokeWidth={1.8}
                  />
                </div>
                <ArrowUpRight className="h-5 w-5 text-concrete-light group-hover:text-orange group-hover:rotate-12 transition-all" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-charcoal uppercase tracking-wide">
                {title}
              </h3>
              <p className="mt-2 text-sm text-concrete leading-relaxed">
                {desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
