"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TAP = { scale: 0.96 };
const HOVER = { scale: 1.035, y: -2 };
const SPRING = { type: "spring" as const, stiffness: 400, damping: 22 };

type WithChildren = { className?: string; children: ReactNode };

type ConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

export function AnimatedButton({
  className,
  children,
  ...rest
}: WithChildren & Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers>) {
  return (
    <motion.button
      whileHover={HOVER}
      whileTap={TAP}
      transition={SPRING}
      className={className}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

export function AnimatedAnchor({
  className,
  children,
  ...rest
}: WithChildren & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers>) {
  return (
    <motion.a
      whileHover={HOVER}
      whileTap={TAP}
      transition={SPRING}
      className={className}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

const MotionLink = motion.create(Link);

export function AnimatedLink({
  href,
  className,
  children,
}: WithChildren & { href: string }) {
  return (
    <MotionLink
      href={href}
      whileHover={HOVER}
      whileTap={TAP}
      transition={SPRING}
      className={className}
    >
      {children}
    </MotionLink>
  );
}
