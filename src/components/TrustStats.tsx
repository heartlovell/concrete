"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Hammer, Smile, Star } from "lucide-react";

type Stat = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Hammer, value: 1000, suffix: "+", label: "Projects Completed" },
  { icon: Smile, value: 500, suffix: "+", label: "Happy Customers" },
  { icon: Star, value: 5, suffix: "★", label: "Customer Reviews" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  return (
    <section className="relative -mt-px bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-concrete-50 bg-concrete-50 shadow-sm">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white p-8 sm:p-10 hover:bg-charcoal transition-colors duration-500"
            >
              <Icon
                className="h-9 w-9 text-orange transition-transform group-hover:scale-110"
                strokeWidth={1.8}
              />
              <div className="mt-6 font-display text-5xl sm:text-6xl text-charcoal group-hover:text-white transition-colors">
                <Counter value={value} suffix={suffix} />
              </div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-concrete group-hover:text-orange transition-colors">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
