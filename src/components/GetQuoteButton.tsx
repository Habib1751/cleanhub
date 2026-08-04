"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { useQuoteModal, type Service } from "@/components/QuoteModalProvider";

type Props = {
  service?: Service;
  className?: string;
  children: ReactNode;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "onClick"
  | "type"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
>;

export default function GetQuoteButton({ service, className, children, ...rest }: Props) {
  const { openModal } = useQuoteModal();
  return (
    <motion.button
      type="button"
      onClick={() => openModal(service)}
      className={className}
      whileHover={{ scale: 1.025, y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
