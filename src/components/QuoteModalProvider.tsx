"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { siteConfig } from "@/lib/siteConfig";

export type Service =
  | "Solar Panel Cleaning"
  | "AC Service"
  | "Water Tank Cleaning"
  | "CCTV Installation"
  | "Multiple Services";

type QuoteModalContextValue = {
  openModal: (service?: Service) => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return ctx;
}

const SESSION_KEY = "quoteModalShown";

export default function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<Service>("Multiple Services");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  function openModal(svc?: Service) {
    setService(svc ?? "Multiple Services");
    setOpen(true);
  }

  return (
    <QuoteModalContext.Provider value={{ openModal }}>
      {children}

      <motion.div
        className="fixed bottom-5 right-5 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
      >
        <motion.a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-800 text-white shadow-lg"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppIcon className="h-7 w-7" />
        </motion.a>
      </motion.div>

      <QuoteModal
        open={open}
        onClose={() => setOpen(false)}
        service={service}
        setService={setService}
      />
    </QuoteModalContext.Provider>
  );
}
