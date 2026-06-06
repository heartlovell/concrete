"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const serviceOptions = [
  "Driveway",
  "Patio",
  "Sidewalk / Walkway",
  "Foundation",
  "Stamped / Decorative",
  "Commercial Concrete",
  "Repair / Restoration",
  "Other",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate request. In production wire to /api/quote or a form service.
    setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center p-10 rounded-2xl border border-orange/40 bg-orange/5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange text-white">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl uppercase text-charcoal">
          Thanks! We&rsquo;ll be in touch.
        </h3>
        <p className="mt-2 text-base text-concrete max-w-sm">
          One of our team members will reach out within one business day to schedule your free on-site estimate.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 sm:p-8 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-white/70">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange focus:bg-white/10 outline-none transition-colors"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wider text-white/70">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange focus:bg-white/10 outline-none transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-white/70">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange focus:bg-white/10 outline-none transition-colors"
            placeholder="(651) 558-7970"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-white/70">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange focus:bg-white/10 outline-none transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-white/70">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-orange focus:bg-white/10 outline-none transition-colors appearance-none"
        >
          <option value="" disabled className="bg-charcoal">
            Select a service
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-charcoal text-white">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="block text-xs font-semibold uppercase tracking-wider text-white/70">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange focus:bg-white/10 outline-none transition-colors resize-none"
          placeholder="Tell us about your project — size, location, timing..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative w-full inline-flex items-center justify-center gap-2 rounded-md bg-orange px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange/30 hover:bg-orange-dark transition-all disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>Request Free Estimate</>
        )}
      </button>

      <p className="text-xs text-white/50 text-center">
        We respond within 1 business day. No spam, ever.
      </p>
    </form>
  );
}
