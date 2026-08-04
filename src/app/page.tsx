import Image from "next/image";
import { FileText, MapPin } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import TrustIcon from "@/components/TrustIcon";
import GetQuoteButton from "@/components/GetQuoteButton";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ServicesMarquee from "@/components/ServicesMarquee";
import { AnimatedAnchor, AnimatedLink } from "@/components/Animated";
import type { Service } from "@/components/QuoteModalProvider";
import { siteConfig } from "@/lib/siteConfig";

const galleryImages = [
  { src: "/images/gallery-solar-1.jpg", alt: "Technician squeegee-cleaning a solar panel" },
  { src: "/images/gallery-solar-2.jpg", alt: "Technician brush-cleaning a rooftop solar array" },
  { src: "/images/gallery-solar-3.jpg", alt: "Close-up of a technician clearing dust off a solar panel" },
];

const heroTiles: {
  kind: "solar" | "ac" | "waterTank" | "cctv";
  label: string;
  image: string;
  alt: string;
  service: Service;
}[] = [
  {
    kind: "solar",
    label: "Solar Panel Cleaning",
    image: "/images/solar-cleaning.jpg",
    alt: "Technician cleaning solar panels with a wiper",
    service: "Solar Panel Cleaning",
  },
  {
    kind: "ac",
    label: "AC Cleaning",
    image: "/images/ac-cleaning.png",
    alt: "Technician servicing an outdoor AC unit",
    service: "AC Service",
  },
  {
    kind: "waterTank",
    label: "Water Tank Cleaning",
    image: "/images/water-tank-cleaning.png",
    alt: "Rooftop water tank",
    service: "Water Tank Cleaning",
  },
  {
    kind: "cctv",
    label: "CCTV Installation",
    image: "/images/cctv-installation.png",
    alt: "CCTV security camera mounted on a wall",
    service: "CCTV Installation",
  },
];

const trustItems = [
  {
    icon: "shield" as const,
    title: "Trained Professionals",
    body: "Our team is fully trained and experienced in all services.",
  },
  {
    icon: "badge" as const,
    title: "Quality Service",
    body: "We use the best equipment for top-quality results.",
  },
  {
    icon: "check" as const,
    title: "100% Safe & Secure",
    body: "We follow safety standards to protect your property.",
  },
  {
    icon: "headset" as const,
    title: "Customer Support",
    body: "We are always here to help you anytime.",
  },
];

const serviceCards: {
  id: string;
  icon: "solar" | "ac" | "waterTank" | "cctv";
  title: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  service: Service;
}[] = [
  {
    id: "service-solar",
    icon: "solar",
    title: "Solar Panel Cleaning",
    description:
      "Careful wiper-and-squeegee cleaning to remove dust and grime, restoring your panels' efficiency — panel by panel.",
    price: `Rs. ${siteConfig.pricing.solar.perPlate} / plate`,
    image: "/images/solar-cleaning.jpg",
    alt: "Technician cleaning solar panels with a wiper",
    service: "Solar Panel Cleaning",
  },
  {
    id: "service-ac",
    icon: "ac",
    title: "AC Outdoor Unit Cleaning",
    description:
      "High-pressure gun wash for your AC's outdoor unit to clear debris and improve cooling performance.",
    price: `Rs. ${siteConfig.pricing.ac.flat} / unit`,
    image: "/images/ac-cleaning.png",
    alt: "Technician servicing an outdoor AC unit with a pressure washer",
    service: "AC Service",
  },
  {
    id: "service-watertank",
    icon: "waterTank",
    title: "Water Tank Cleaning",
    description:
      "Full drain, scrub, and sanitize for your rooftop or underground water tank — safe, clean drinking water for your home.",
    price: `Rs. ${siteConfig.pricing.waterTank.flat} / tank`,
    image: "/images/water-tank-cleaning.png",
    alt: "Rooftop water tank",
    service: "Water Tank Cleaning",
  },
  {
    id: "service-cctv",
    icon: "cctv",
    title: "CCTV Camera Installation",
    description:
      "Secure your home or business with professionally installed CCTV cameras, wired and configured on-site.",
    price: `Rs. ${siteConfig.pricing.cctv.perCamera} / camera`,
    image: "/images/cctv-installation.png",
    alt: "CCTV security camera mounted on a wall",
    service: "CCTV Installation",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-sky-50 via-white to-white px-5 py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-800">
              Now serving {siteConfig.serviceCity} — DHA, all phases
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl">
              Professional Cleaning &amp;{" "}
              <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                Maintenance
              </span>
            </h1>
            <ServicesMarquee />
            <p className="mt-4 max-w-lg text-sm text-slate-600 sm:text-base">
              {siteConfig.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <GetQuoteButton className="flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 hover:shadow-xl">
                <FileText className="h-4 w-4" /> Get a Free Quote
              </GetQuoteButton>
              <AnimatedAnchor
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-green-600 bg-white px-6 py-3 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
              </AnimatedAnchor>
              <AnimatedLink
                href="/locations-pricing"
                className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:shadow-md"
              >
                <MapPin className="h-4 w-4" /> View Areas &amp; Prices
              </AnimatedLink>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {heroTiles.map((tile) => (
              <GetQuoteButton
                key={tile.label}
                service={tile.service}
                className="group relative h-40 overflow-hidden rounded-2xl text-left shadow-md transition hover:shadow-xl sm:h-48"
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  priority
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-full bg-white/95 py-1 pl-1 pr-3 shadow-md">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                    <ServiceIcon kind={tile.kind} className="h-4 w-4" />
                  </span>
                  <span className="truncate text-xs font-semibold text-slate-800">
                    {tile.label}
                  </span>
                </div>
              </GetQuoteButton>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-blue-100 text-blue-700">
                <TrustIcon kind={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">{item.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          About {siteConfig.businessName}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          {siteConfig.businessName} is a doorstep home-maintenance service based in DHA,
          Lahore. We handle solar panel cleaning, AC servicing, water tank cleaning, and CCTV
          installation — bringing trained technicians and the right equipment straight to
          your home, at clear, upfront prices.
        </p>
      </section>

      <section id="services" className="mx-auto w-full max-w-6xl px-5 py-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Our Services</h2>
          <p className="mt-2 text-sm text-slate-500">
            Four services, one visit — pick what you need.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {serviceCards.map((card) => (
            <GetQuoteButton
              key={card.id}
              id={card.id}
              service={card.service}
              className="group w-full scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden sm:h-64">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <ServiceIcon kind={card.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{card.description}</p>
                <p className="mt-3 text-sm font-semibold text-blue-700">{card.price}</p>
              </div>
            </GetQuoteButton>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-56 w-full sm:h-96">
            <Image
              src="/images/solar-before-after.jpg"
              alt="Solar panel before and after cleaning comparison"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
          <div className="p-6 text-center sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">See the Difference</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Dust and grime quietly cut your solar panels&apos; output. A proper wiper clean
              restores them to full brightness — and full efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-4">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Book Your Service in Simple Steps
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-64 w-full sm:h-full">
              <Image
                src="/images/solar-doorstep.jpg"
                alt="Technician cleaning solar panels on a rooftop overlooking the neighborhood"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white shadow-md shadow-blue-700/30">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-900">Call or WhatsApp us</p>
                <p className="text-sm text-slate-600">
                  Share your address and what needs service — solar panels, AC unit, water
                  tank, CCTV, or all of them.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white shadow-md shadow-blue-700/30">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-900">We arrive at your doorstep</p>
                <p className="text-sm text-slate-600">
                  Our technician comes fully equipped with wipers, squeegees, a pressure
                  washer, and CCTV installation tools.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white shadow-md shadow-blue-700/30">
                3
              </span>
              <div>
                <p className="font-semibold text-slate-900">Sit back and enjoy the result</p>
                <p className="text-sm text-slate-600">
                  Cleaner panels, a cleaner AC unit, a clean tank, secure cameras — all at a
                  clear, upfront price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Our Work</h2>
          <p className="mt-2 text-sm text-slate-500">Real jobs, real results, across DHA.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="group relative h-64 overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2">
          <div className="relative h-64 w-full sm:h-full">
            <Image
              src="/images/happy-customer.jpg"
              alt="Satisfied customer giving a thumbs up on a rooftop with clean solar panels"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="p-6 sm:pr-10">
            <h2 className="text-xl font-bold text-slate-900">
              Homeowners across DHA trust us
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              From single-panel touch-ups to full rooftop arrays, AC outdoor units, water
              tanks, and CCTV setups, we treat every home like our own — clean work, fair
              prices, no surprises.
            </p>
            <AnimatedAnchor
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" /> Book Your Service
            </AnimatedAnchor>
          </div>
        </div>
      </section>
    </div>
  );
}
