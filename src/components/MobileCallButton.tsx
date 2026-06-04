"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function MobileCallButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call ${SITE.phone}`}
      className={`lg:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-orange px-5 py-3.5 text-white font-semibold shadow-2xl shadow-orange/40 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
      </span>
      <Phone className="h-4 w-4" strokeWidth={2.5} />
      <span className="text-sm">Call Now</span>
    </a>
  );
}
