"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ClipboardCheck,
  FileText,
  CalendarCheck,
  HardHat,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "Tell us about your project. We’ll talk timing, scope, and budget.",
  },
  {
    icon: ClipboardCheck,
    title: "Site Evaluation",
    desc: "We visit your property to measure, inspect, and plan the work.",
  },
  {
    icon: FileText,
    title: "Detailed Estimate",
    desc: "You get a transparent written estimate — no hidden fees, no surprises.",
  },
  {
    icon: CalendarCheck,
    title: "Project Scheduling",
    desc: "We lock in a clear start and finish date that works for you.",
  },
  {
    icon: HardHat,
    title: "Construction",
    desc: "Our experienced crew executes with precision and clean job-site standards.",
  },
  {
    icon: CheckCircle2,
    title: "Final Walkthrough",
    desc: "We inspect together, confirm quality, and back it up with our guarantee.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-concrete-50 py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-concrete-texture opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-8 bg-orange" />
            Our Process
            <span className="h-px w-8 bg-orange" />
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl text-charcoal uppercase leading-[0.95]">
            From quote to <span className="text-orange">completion</span>
          </h2>
          <p className="mt-6 text-lg text-concrete leading-relaxed">
            A clear, no-nonsense process built around your time, your property,
            and your budget.
          </p>
        </div>

        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden lg:block h-full w-px bg-gradient-to-b from-transparent via-orange/40 to-transparent -translate-x-1/2"
          />

          <ol className="space-y-6 lg:space-y-0">
            {steps.map(({ icon: Icon, title, desc }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                    i > 0 ? "lg:mt-[-2rem]" : ""
                  }`}
                >
                  <div
                    className={`${
                      isLeft ? "lg:col-start-1 lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"
                    } lg:py-12`}
                  >
                    <div
                      className={`group inline-block max-w-md ${
                        isLeft ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange">
                        Step {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 font-display text-3xl text-charcoal uppercase tracking-wide">
                        {title}
                      </h3>
                      <p className="mt-3 text-base text-concrete leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>

                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 hidden lg:flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange shadow-xl shadow-orange/30 ring-8 ring-concrete-50"
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
                  </div>

                  <div className="lg:hidden flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange">
                      <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
