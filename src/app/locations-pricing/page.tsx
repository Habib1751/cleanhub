import type { Metadata } from "next";
import { MapPin, Wallet, Phone, PhoneCall } from "lucide-react";
import ServiceAreaMapIllustration from "@/components/illustrations/ServiceAreaMapIllustration";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { AnimatedAnchor } from "@/components/Animated";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Locations & Pricing | ${siteConfig.businessName}`,
  description:
    "Service areas and pricing for solar panel cleaning, AC service, water tank cleaning, and CCTV installation in DHA Lahore, all phases.",
};

export default function LocationsPricing() {
  const { solar, ac, waterTank, cctv } = siteConfig.pricing;

  return (
    <div className="mx-auto w-full max-w-5xl bg-white px-5 py-12">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Service Areas &amp; Pricing
        </h1>
        <p className="mt-3 text-slate-600">
          Currently we only serve select areas of {siteConfig.serviceCity}. Check below if we
          cover your location.
        </p>
      </header>

      <section id="areas" className="mt-10 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="flex items-start gap-2 text-xl font-bold text-slate-900">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" /> Our Services Are
          Available in All the Following Areas
        </h2>
        <ServiceAreaMapIllustration className="mt-4 h-40 w-full sm:h-52" />
        <p className="mt-4 text-sm text-slate-600">
          We provide reliable and top-quality services. You can avail of our services across
          all phases of DHA Lahore and other prominent residential communities:
        </p>
        <dl className="mt-4 space-y-3">
          {siteConfig.serviceAreaGroups.map((group) => (
            <div key={group.label} className="rounded-xl bg-blue-50 px-4 py-3">
              <dt className="text-sm font-bold text-blue-900">{group.label}</dt>
              <dd className="mt-0.5 text-sm text-slate-700">{group.areas}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 rounded-xl border border-slate-200 p-5 text-center">
          <p className="flex items-center justify-center gap-2 font-bold text-slate-900">
            <PhoneCall className="h-4 w-4 shrink-0 text-blue-700" /> Contact Us
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Reach out to us today for high-quality services tailored to your needs!
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <AnimatedAnchor
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              <Phone className="h-4 w-4" /> Call {siteConfig.phone}
            </AnimatedAnchor>
            <AnimatedAnchor
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </AnimatedAnchor>
          </div>
        </div>
      </section>

      <section id="pricing" className="mt-10 scroll-mt-24">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <Wallet className="h-5 w-5 shrink-0 text-blue-700" /> Our Pricing
        </h2>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-bold text-slate-900">Solar Panel Cleaning</h3>
            <p className="mt-3 text-3xl font-extrabold text-blue-700">
              Rs. {solar.perPlate}
              <span className="ml-1 text-sm font-medium text-slate-500">/ plate</span>
            </p>
            <p className="mt-3 text-sm text-slate-600">
              + Delivery &amp; fuel charges from{" "}
              <span className="font-semibold text-slate-800">
                Rs. {solar.deliveryFuelFrom}
              </span>
            </p>
            <p className="mt-2 text-xs text-slate-500">{solar.note}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-bold text-slate-900">AC Service</h3>
            <p className="mt-3 text-3xl font-extrabold text-blue-700">
              Rs. {ac.flat}
              <span className="ml-1 text-sm font-medium text-slate-500">/ unit</span>
            </p>
            <p className="mt-2 text-xs text-slate-500">{ac.note}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-bold text-slate-900">Water Tank Cleaning</h3>
            <p className="mt-3 text-3xl font-extrabold text-blue-700">
              Rs. {waterTank.flat}
              <span className="ml-1 text-sm font-medium text-slate-500">/ tank</span>
            </p>
            <p className="mt-2 text-xs text-slate-500">{waterTank.note}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-bold text-slate-900">CCTV Camera Installation</h3>
            <p className="mt-3 text-3xl font-extrabold text-blue-700">
              Rs. {cctv.perCamera}
              <span className="ml-1 text-sm font-medium text-slate-500">/ camera</span>
            </p>
            <p className="mt-2 text-xs text-slate-500">{cctv.note}</p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Prices may vary slightly depending on the number of plates/units/cameras and the
          scope of work. Final cost is always confirmed with you before the visit.
        </p>
      </section>

      <section className="mt-10 rounded-2xl bg-blue-700 p-8 text-center text-white">
        <h2 className="text-xl font-bold">Ready to book?</h2>
        <p className="mt-1 text-sm text-blue-100">
          Call or WhatsApp us with your address and we&apos;ll confirm availability &amp; price.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <AnimatedAnchor
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-800 shadow-md transition hover:bg-blue-50"
          >
            <Phone className="h-4 w-4" /> Call {siteConfig.phone}
          </AnimatedAnchor>
          <AnimatedAnchor
            href={siteConfig.phoneSecondaryHref}
            className="flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            <Phone className="h-4 w-4" /> Call {siteConfig.phoneSecondary}
          </AnimatedAnchor>
          <AnimatedAnchor
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </AnimatedAnchor>
        </div>
      </section>
    </div>
  );
}
