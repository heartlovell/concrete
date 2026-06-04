"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Hammer, Eye, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Family-Owned",
    desc: "A proud Mexican-American family business — three generations in the trade.",
  },
  {
    icon: Hammer,
    title: "Hardworking",
    desc: "Up at sunrise, on the job site early, doing it right the first time.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    desc: "Clean lines, smooth finishes, perfect grade. Quality you can see.",
  },
  {
    icon: Users,
    title: "Customer-First",
    desc: "Long-term relationships matter more to us than a single project.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/projects/patio-large-slab.jpg"
                alt="El Primos Concrete crew finishing a backyard concrete patio"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-orange text-white p-6 rounded-xl shadow-2xl shadow-orange/30 max-w-[200px]">
              <div className="font-display text-5xl leading-none">15+</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider">
                Years building trust
              </div>
            </div>
            <div className="absolute -top-6 -left-6 hidden md:block bg-charcoal text-white p-5 rounded-xl shadow-2xl border border-white/10">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange">
                Family Owned
              </div>
              <div className="mt-1 font-display text-xl uppercase">Since 2009</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
              <span className="h-px w-8 bg-orange" />
              Our Story
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl text-charcoal uppercase leading-[0.95]">
              Three generations of <span className="text-orange">concrete craftsmen</span>
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-concrete leading-relaxed">
              <p>
                El Primos Concrete is a family-owned Mexican-American business
                founded on a simple belief: when you pour concrete, you&rsquo;re
                pouring something that should outlast you.
              </p>
              <p>
                We learned the trade the way most things worth doing are learned —
                from family, with our hands, on real job sites. Today we bring
                that same craftsmanship and pride to every driveway, patio,
                foundation, and commercial pour we sign our name to.
              </p>
              <p>
                Our customers aren&rsquo;t just clients. They&rsquo;re neighbors,
                contractors we work with year after year, and families who trust us
                with the most important investments they&rsquo;ll ever make.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex gap-4 p-5 rounded-xl border border-concrete-50 hover:border-orange/30 hover:bg-concrete-50/50 transition-all"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange/10 group-hover:bg-orange transition-colors">
                    <Icon
                      className="h-5 w-5 text-orange group-hover:text-white transition-colors"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">{title}</h3>
                    <p className="mt-1 text-sm text-concrete leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
