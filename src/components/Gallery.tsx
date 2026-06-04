"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: "Patios" | "Decorative" | "Walkways" | "Steps";
  location: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Dark Stamped Backyard Patio",
    category: "Patios",
    location: "Twin Cities, MN",
    description: "Custom curved-edge stamped concrete patio with charcoal finish and brick pattern.",
    image: "/projects/patio-dark-stamped.jpg",
  },
  {
    id: 2,
    title: "Flagstone Stamped Patio",
    category: "Decorative",
    location: "Twin Cities, MN",
    description: "Multi-tone stamped flagstone pattern with antiqued release for a natural-stone look.",
    image: "/projects/patio-flagstone-stamped.jpg",
  },
  {
    id: 3,
    title: "Backyard Patio Under Deck",
    category: "Patios",
    location: "Twin Cities, MN",
    description: "Smooth-troweled concrete patio with paver border under a new walkout deck.",
    image: "/projects/patio-deck-concrete.jpg",
  },
  {
    id: 4,
    title: "Stamped Walkway & Front Entry",
    category: "Walkways",
    location: "Twin Cities, MN",
    description: "Tan stamped concrete walkway leading to a refinished front entry with built-up landing.",
    image: "/projects/walkway-front-entry.jpg",
  },
  {
    id: 5,
    title: "Stamped Pool Patio",
    category: "Patios",
    location: "Twin Cities, MN",
    description: "Large stamped brick-pattern patio in a slate finish — perfect alongside the pool.",
    image: "/projects/patio-stamped-pool.jpg",
  },
  {
    id: 6,
    title: "Curved Flagstone Walkway",
    category: "Walkways",
    location: "Twin Cities, MN",
    description: "Hand-shaped curved walkway with random-flagstone stamp and warm tan color.",
    image: "/projects/walkway-flagstone.jpg",
  },
  {
    id: 7,
    title: "Stamped Stone Stairs",
    category: "Steps",
    location: "Twin Cities, MN",
    description: "Custom-formed stamped concrete stairs with stone texture and antique release finish.",
    image: "/projects/stairs-stamped-stone.jpg",
  },
  {
    id: 8,
    title: "Large Backyard Slab Pour",
    category: "Patios",
    location: "Twin Cities, MN",
    description: "Smooth-finish concrete patio behind a new build — fresh pour and clean broom finish.",
    image: "/projects/patio-large-slab.jpg",
  },
];

const categories = ["All", "Patios", "Decorative", "Walkways", "Steps"] as const;

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="relative bg-concrete-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
              <span className="h-px w-8 bg-orange" />
              Project Gallery
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl text-charcoal uppercase leading-[0.95]">
              Recent <span className="text-orange">work</span>
            </h2>
            <p className="mt-6 text-lg text-concrete leading-relaxed">
              A look at real projects we&apos;ve poured — from custom stamped
              patios to decorative walkways and entries.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === cat
                    ? "bg-charcoal text-white shadow-md"
                    : "bg-white text-concrete hover:bg-charcoal/5 hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-2xl transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-concrete-50">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent opacity-90" />
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {p.category}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="font-display text-2xl text-white uppercase leading-tight">
                    {p.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-orange">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location}
                  </div>
                  <p className="mt-3 text-sm text-white/85 leading-relaxed max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500">
                    {p.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
