import { Phone, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { AnimatedAnchor } from "@/components/Animated";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <p className="text-sm uppercase tracking-wide text-blue-300">
          Book your service now
        </p>
        <div className="mt-2 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-4">
          <AnimatedAnchor
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
          >
            <Phone className="h-6 w-6 text-blue-300" /> {siteConfig.phone}
          </AnimatedAnchor>
          <span className="hidden text-slate-500 sm:inline">/</span>
          <AnimatedAnchor
            href={siteConfig.phoneSecondaryHref}
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-200 sm:text-2xl"
          >
            <Phone className="h-5 w-5 text-blue-300" /> {siteConfig.phoneSecondary}
          </AnimatedAnchor>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <AnimatedAnchor
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </AnimatedAnchor>
          <AnimatedAnchor
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 rounded-full border border-slate-500 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
          >
            <Mail className="h-4 w-4" /> {siteConfig.email}
          </AnimatedAnchor>
        </div>
        <p className="mt-6 text-xs text-slate-400">
          Serving {siteConfig.serviceCity} — DHA (all phases) · Solar Panel Cleaning, AC
          Service, Water Tank Cleaning &amp; CCTV Installation at your doorstep
        </p>
        <p className="mt-2 text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
