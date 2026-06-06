"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Clock, FileText } from "lucide-react";
import { SITE } from "@/lib/site";
import QuoteForm from "./QuoteForm";

const promises = [
  { icon: Clock, text: "Response within 1 business day" },
  { icon: ShieldCheck, text: "Licensed & fully insured" },
  { icon: FileText, text: "Free, no-obligation estimate" },
];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-charcoal py-24 sm:py-32 text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/projects/patio-dark-stamped.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal-soft" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
              <span className="h-px w-8 bg-orange" />
              Get In Touch
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95]">
              Ready to build something <span className="text-orange">that lasts?</span>
            </h2>
            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-lg">
              Get a free estimate and discover why homeowners, contractors, and
              businesses across the Twin Cities trust Primos Concrete LLC.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#quote-form"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-orange px-7 py-4 text-base font-semibold text-white shadow-xl shadow-orange/25 hover:bg-orange-dark transition-all"
              >
                Request Free Estimate
              </a>
              <a
                href={SITE.phoneHref}
                className="group inline-flex items-center justify-center gap-3 rounded-md border border-white/20 bg-white/5 backdrop-blur px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                <Phone className="h-5 w-5 text-orange" strokeWidth={2.5} />
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/50 leading-none">
                    Call Now
                  </span>
                  <span className="block text-base font-semibold leading-none mt-1">
                    {SITE.phone}
                  </span>
                </span>
              </a>
            </div>

            <ul className="mt-10 space-y-3">
              {promises.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-white/80">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange/20">
                    <Icon className="h-3.5 w-3.5 text-orange" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            id="quote-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
