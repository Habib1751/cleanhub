import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 24 L24 10 L40 24"
          stroke="#1d4ed8"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M12 22 V38 H36 V22"
          stroke="#1d4ed8"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M22 38 V29 H27 V38"
          stroke="#1d4ed8"
          strokeWidth="3"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M18 33 C13 33 10 29 10 24 C15 24 18 28 18 33 Z"
          fill="#22c55e"
        />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate text-lg font-extrabold tracking-tight text-slate-900">
          {siteConfig.businessName}
        </span>
        <span className="mt-0.5 hidden truncate text-[10px] font-medium text-slate-500 sm:block">
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
