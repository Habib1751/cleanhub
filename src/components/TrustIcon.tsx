import { ShieldCheck, BadgeCheck, CheckCircle2, Headphones } from "lucide-react";

type Kind = "shield" | "badge" | "check" | "headset";

const ICONS = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  check: CheckCircle2,
  headset: Headphones,
};

export default function TrustIcon({
  kind,
  className = "h-6 w-6",
}: {
  kind: Kind;
  className?: string;
}) {
  const Icon = ICONS[kind];
  return <Icon className={className} strokeWidth={2} />;
}
