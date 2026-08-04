import { Sun, Fan, Droplets, Camera } from "lucide-react";

type Kind = "solar" | "ac" | "waterTank" | "cctv";

const ICONS = {
  solar: Sun,
  ac: Fan,
  waterTank: Droplets,
  cctv: Camera,
};

export default function ServiceIcon({
  kind,
  className = "h-4 w-4",
}: {
  kind: Kind;
  className?: string;
}) {
  const Icon = ICONS[kind];
  return <Icon className={className} strokeWidth={2} />;
}
