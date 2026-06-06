"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Hartwell",
    photo: "https://i.pravatar.cc/120?img=47",
    project: "Stamped Patio",
    rating: 5,
    quote:
      "Primos Concrete LLC exceeded our expectations. The quality of work was outstanding and the project was completed ahead of schedule. We’ll never use anyone else.",
  },
  {
    name: "Marcus Reed",
    photo: "https://i.pravatar.cc/120?img=12",
    project: "Driveway Replacement",
    rating: 5,
    quote:
      "From the estimate to the final walkthrough, everything was professional. They communicated clearly and the driveway looks incredible. Worth every penny.",
  },
  {
    name: "Sarah Lindqvist",
    photo: "https://i.pravatar.cc/120?img=23",
    project: "Pool Deck",
    rating: 5,
    quote:
      "We had three quotes and Primos was clearly the most thorough. They explained the process, showed up on time, and the pool deck looks like it belongs in a magazine.",
  },
  {
    name: "David Okonkwo",
    photo: "https://i.pravatar.cc/120?img=68",
    project: "Commercial Parking Lot",
    rating: 5,
    quote:
      "We hired Primos for our retail expansion. They handled a complex 22,000 sq ft pour without a hitch. Honest pricing, no surprises, and clean job site every day.",
  },
  {
    name: "Emily Pham",
    photo: "https://i.pravatar.cc/120?img=32",
    project: "Foundation Work",
    rating: 5,
    quote:
      "Our addition needed a precise foundation pour. The crew was meticulous — exactly the kind of attention to detail you want when it’s holding up your home.",
  },
  {
    name: "Robert Calloway",
    photo: "https://i.pravatar.cc/120?img=15",
    project: "Decorative Walkway",
    rating: 5,
    quote:
      "Honest, hardworking, and skilled. They treated our property like their own and the result speaks for itself. Already booking them for next spring.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-8 bg-orange" />
            Customer Reviews
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl text-charcoal uppercase leading-[0.95]">
            Trusted by hundreds <span className="text-orange">of customers</span>
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-orange text-orange" />
              ))}
            </div>
            <p className="text-base text-concrete">
              <span className="font-bold text-charcoal">5.0</span> from
              <span className="font-bold text-charcoal"> 127+ </span>
              verified Google reviews
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-concrete-50 bg-white p-7 hover:border-orange/40 hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-orange/10 group-hover:text-orange/20 transition-colors" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-orange text-orange" />
                ))}
              </div>
              <blockquote className="mt-5 text-base text-charcoal leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-concrete-50">
                <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-orange/20">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-charcoal">{t.name}</div>
                  <div className="text-xs uppercase tracking-wider text-concrete">
                    {t.project}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
