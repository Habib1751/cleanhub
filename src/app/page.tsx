import Image from "next/image";
import { FileText, MapPin, MessageCircle } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import TrustIcon from "@/components/TrustIcon";
import GetQuoteButton from "@/components/GetQuoteButton";
import ServicesMarquee from "@/components/ServicesMarquee";
import { AnimatedLink } from "@/components/Animated";
import type { Service } from "@/components/QuoteModalProvider";
import { siteConfig } from "@/lib/siteConfig";

const heroTiles: {
  kind: "solar" | "ac" | "waterTank" | "cctv";
  label: string;
  image: string;
  alt: string;
  service: Service;
  // Order on mobile (1 column); desktop keeps this array's natural order via sm:order-none.
  mobileOrder: number;
}[] = [
  {
    kind: "cctv",
    label: "CCTV Installation",
    image: "/images/cctv-installation.jpg",
    alt: "CCTV security camera mounted on a wall",
    service: "CCTV Installation",
    mobileOrder: 1,
  },
  {
    kind: "ac",
    label: "AC Cleaning",
    image: "/images/ac-cleaning.jpg",
    alt: "Technician servicing an outdoor AC unit",
    service: "AC Service",
    mobileOrder: 2,
  },
  {
    kind: "solar",
    label: "Solar Panel Cleaning",
    image: "/images/solar-cleaning.jpg",
    alt: "Technician cleaning solar panels with a wiper",
    service: "Solar Panel Cleaning",
    mobileOrder: 3,
  },
  {
    kind: "waterTank",
    label: "Water Tank Cleaning",
    image: "/images/water-tank-cleaning.jpg",
    alt: "Rooftop water tank",
    service: "Water Tank Cleaning",
    mobileOrder: 4,
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
    price: `Rs. ${siteConfig.pricing.solar.perPlate} / plate — more panels, more discount`,
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
    price: `Rs. ${siteConfig.pricing.ac.first} (1st unit) · Rs. ${siteConfig.pricing.ac.additional} each additional`,
    image: "/images/ac-cleaning.jpg",
    alt: "Technician servicing an outdoor AC unit with a pressure washer",
    service: "AC Service",
  },
  {
    id: "service-watertank",
    icon: "waterTank",
    title: "Water Tank Cleaning",
    description:
      "Full drain, scrub, and sanitize for your rooftop or underground water tank — safe, clean drinking water for your home.",
    price: `Rs. ${siteConfig.pricing.waterTank.first} (1st tank) · Rs. ${siteConfig.pricing.waterTank.additional} each additional`,
    image: "/images/water-tank-cleaning.jpg",
    alt: "Rooftop water tank",
    service: "Water Tank Cleaning",
  },
  {
    id: "service-cctv",
    icon: "cctv",
    title: "CCTV Camera Installation",
    description:
      "Basic package: 4 cameras (2MP), 1 DVR, 500GB hard drive, 100ft wire, with complete installation. Can be enhanced to fit your needs.",
    price: `Rs. ${siteConfig.pricing.cctv.packagePrice} basic package`,
    image: "/images/cctv-installation.jpg",
    alt: "CCTV security camera mounted on a wall",
    service: "CCTV Installation",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <section className="bg-gradient-to-b from-sky-50 via-white to-white px-5 py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-800">
              Now serving {siteConfig.serviceCity} — DHA, all phases
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
              Professional Security &amp; Cleaning Solutions for Homes &amp; Businesses
            </h1>
            <ServicesMarquee />
            <p className="mt-4 max-w-lg text-sm text-slate-600 sm:text-base">
              {siteConfig.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <GetQuoteButton className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:shadow-md">
                <FileText className="h-4 w-4" /> Get a Free Quote
              </GetQuoteButton>
              <GetQuoteButton className="flex items-center gap-2 rounded-full border border-green-600 bg-white px-6 py-3 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50">
                <MessageCircle className="h-4 w-4" /> Message Us
              </GetQuoteButton>
              <AnimatedLink
                href="/locations-pricing"
                className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:shadow-md"
              >
                <MapPin className="h-4 w-4" /> View Areas &amp; Prices
              </AnimatedLink>
            </div>
          </div>

          <div className="min-w-0 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {heroTiles.map((tile) => (
              <GetQuoteButton
                key={tile.label}
                service={tile.service}
                className="group relative order-[var(--mobile-order)] h-40 overflow-hidden rounded-2xl bg-slate-200 text-left shadow-md transition hover:shadow-xl sm:order-none sm:h-48"
                style={{ "--mobile-order": tile.mobileOrder } as React.CSSProperties}
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  priority
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
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

      <section className="mx-auto w-full max-w-4xl bg-white px-5 py-16 text-center">
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

      <section id="services" className="mx-auto w-full max-w-6xl bg-white px-5 py-4">
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
              <div className="relative h-56 w-full overflow-hidden bg-slate-200 sm:h-64">
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

      <section className="mx-auto w-full max-w-5xl bg-white px-5 py-16">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-56 w-full bg-slate-200 sm:h-96">
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

      <section className="mx-auto w-full max-w-5xl bg-white px-5 py-16">
        <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2">
          <div className="relative h-64 w-full bg-slate-200 sm:h-full">
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
            <GetQuoteButton className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg">
              <MessageCircle className="h-4 w-4" /> Message Us
            </GetQuoteButton>
          </div>
        </div>
      </section>
    </div>
  );
}
