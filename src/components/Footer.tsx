import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.6 1.6-1.6h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V9.8H7.7V13h2.7v8h3.1z" />
    </svg>
  );
}

function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const servicesQuickLinks = [
  "Driveways",
  "Patios",
  "Foundations",
  "Stamped Concrete",
  "Commercial Concrete",
  "Concrete Repair",
];

const serviceAreas = [
  "Minneapolis",
  "St. Paul",
  "Minnetonka",
  "Eden Prairie",
  "Plymouth",
  "Bloomington",
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange">
                <span className="font-display text-2xl text-white leading-none">PC</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg tracking-wide text-white">PRIMOS</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-orange">
                  Concrete LLC
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-sm">
              Family-owned concrete construction serving the Twin Cities and surrounding communities since 2009.
              We build concrete that lasts for generations.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange text-orange" />
                ))}
              </div>
              <span className="text-sm text-white/70">
                <span className="font-semibold text-white">5.0</span> · 127+ Google reviews
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.socials[0].href}
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 hover:bg-orange hover:border-orange transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.socials[1].href}
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 hover:bg-orange hover:border-orange transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE.socials[2].href}
                aria-label="Google"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 hover:bg-orange hover:border-orange transition-colors text-sm font-bold"
              >
                G
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-orange">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-orange">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {servicesQuickLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/70 hover:text-orange transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-orange">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={SITE.phoneHref} className="flex items-start gap-3 text-white/80 hover:text-orange transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 text-orange shrink-0" strokeWidth={2.2} />
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-white/40">Phone</span>
                    <span className="block font-medium">{SITE.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="flex items-start gap-3 text-white/80 hover:text-orange transition-colors">
                  <Mail className="h-4 w-4 mt-0.5 text-orange shrink-0" strokeWidth={2.2} />
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-white/40">Email</span>
                    <span className="block font-medium break-all">{SITE.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5 text-orange shrink-0" strokeWidth={2.2} />
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">Address</span>
                  <span className="block font-medium">{SITE.address}</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Clock className="h-4 w-4 mt-0.5 text-orange shrink-0" strokeWidth={2.2} />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">Hours</span>
                  <ul className="mt-1 space-y-0.5">
                    {SITE.hours.map((h) => (
                      <li key={h.day} className="text-xs font-medium">
                        <span className="text-white/60">{h.day}:</span> {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Service Areas
          </h4>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {serviceAreas.map((a) => (
              <span key={a} className="text-sm text-white/60">
                {a}
              </span>
            ))}
            <span className="text-sm text-white/40">+ surrounding communities</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Primos Concrete LLC. All rights reserved. Licensed & Insured.
          </p>
          <p className="text-white/40">
            We build concrete that lasts for generations.
          </p>
        </div>
      </div>
    </footer>
  );
}
