"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { AnimatedButton, AnimatedAnchor } from "@/components/Animated";
import { siteConfig } from "@/lib/siteConfig";

const SERVICE_LINKS = [
  { label: "Solar Panel Cleaning", href: "/#service-solar" },
  { label: "AC Cleaning", href: "/#service-ac" },
  { label: "Water Tank Cleaning", href: "/#service-watertank" },
  { label: "CCTV Installation", href: "/#service-cctv" },
];

const NAV_LINKS = [
  { label: "About Us", href: "/#about" },
  { label: "Areas We Serve", href: "/locations-pricing#areas" },
  { label: "Pricing", href: "/locations-pricing#pricing" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>

          <div ref={dropdownRef} className="relative">
            <AnimatedButton
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 hover:text-blue-700"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </AnimatedButton>
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                {SERVICE_LINKS.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-700">
              {link.label}
            </Link>
          ))}

          <AnimatedAnchor
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 rounded-full bg-blue-700 px-4 py-2 text-white shadow-sm transition hover:bg-blue-800"
          >
            <Phone className="h-4 w-4" /> Call {siteConfig.phone}
          </AnimatedAnchor>
        </div>

        <AnimatedButton
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </AnimatedButton>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Services
            </p>
            {SERVICE_LINKS.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="pl-2">
                {s.label}
              </Link>
            ))}
            <hr className="my-1 border-slate-100" />
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <AnimatedAnchor
              href={siteConfig.phoneHref}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-blue-700 px-4 py-2 text-center text-white shadow-sm"
            >
              <Phone className="h-4 w-4" /> Call {siteConfig.phone}
            </AnimatedAnchor>
            <AnimatedAnchor
              href={siteConfig.phoneSecondaryHref}
              className="flex items-center justify-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-center text-slate-700"
            >
              <Phone className="h-4 w-4" /> Call {siteConfig.phoneSecondary}
            </AnimatedAnchor>
          </div>
        </div>
      )}
    </header>
  );
}
