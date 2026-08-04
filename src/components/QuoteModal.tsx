"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatedButton } from "@/components/Animated";
import { type Service } from "@/components/QuoteModalProvider";
import { siteConfig } from "@/lib/siteConfig";

export default function QuoteModal({
  open,
  onClose,
  service,
  setService,
}: {
  open: boolean;
  onClose: () => void;
  service: Service;
  setService: (service: Service) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      "Hi, I'd like to book a service.",
      name && `Name: ${name}`,
      `Phone: ${phone}`,
      `Location: ${location}`,
      `Service: ${service}`,
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`${siteConfig.whatsappHref}?text=${message}`, "_blank", "noopener,noreferrer");

    setName("");
    setPhone("");
    setLocation("");
    setService("Multiple Services");
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-4">
              <div className="relative h-20 sm:h-24">
                <Image
                  src="/images/solar-cleaning.jpg"
                  alt="Technician cleaning solar panels with a wiper"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
                <span className="absolute bottom-1 left-1 rounded bg-black/40 px-1 py-0.5 text-[8px] font-medium text-white">
                  Solar
                </span>
              </div>
              <div className="relative h-20 sm:h-24">
                <Image
                  src="/images/ac-cleaning.png"
                  alt="Technician servicing an outdoor AC unit"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
                <span className="absolute bottom-1 left-1 rounded bg-black/40 px-1 py-0.5 text-[8px] font-medium text-white">
                  AC
                </span>
              </div>
              <div className="relative h-20 sm:h-24">
                <Image
                  src="/images/water-tank-cleaning.png"
                  alt="Rooftop water tank"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
                <span className="absolute bottom-1 left-1 rounded bg-black/40 px-1 py-0.5 text-[8px] font-medium text-white">
                  Water Tank
                </span>
              </div>
              <div className="relative h-20 sm:h-24">
                <Image
                  src="/images/cctv-installation.png"
                  alt="CCTV security camera mounted on a wall"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
                <span className="absolute bottom-1 left-1 rounded bg-black/40 px-1 py-0.5 text-[8px] font-medium text-white">
                  CCTV
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Get a Free Quote</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Share your location &amp; number — we&apos;ll confirm on WhatsApp.
                  </p>
                </div>
                <AnimatedButton
                  onClick={onClose}
                  aria-label="Close"
                  className="-mr-1 -mt-1 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </AnimatedButton>
              </div>

              <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="qm-name" className="mb-1 block text-xs font-semibold text-slate-700">
                    Name
                  </label>
                  <input
                    id="qm-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="qm-phone" className="mb-1 block text-xs font-semibold text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="qm-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="03XX-XXXXXXX"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="qm-location" className="mb-1 block text-xs font-semibold text-slate-700">
                    Location (DHA Phase) <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="qm-location"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select your area
                    </option>
                    {siteConfig.serviceAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="mb-1 block text-xs font-semibold text-slate-700">
                    Service Needed
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {(
                      [
                        "Solar Panel Cleaning",
                        "AC Service",
                        "Water Tank Cleaning",
                        "CCTV Installation",
                        "Multiple Services",
                      ] as Service[]
                    ).map((opt) => (
                      <AnimatedButton
                        key={opt}
                        onClick={() => setService(opt)}
                        className={`rounded-lg border px-2 py-2 text-xs font-medium transition ${
                          opt === "Multiple Services" ? "col-span-2" : ""
                        } ${
                          service === opt
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-slate-300 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {opt}
                      </AnimatedButton>
                    ))}
                  </div>
                </div>

                <AnimatedButton
                  type="submit"
                  className="mt-1 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700"
                >
                  Send via WhatsApp
                </AnimatedButton>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
