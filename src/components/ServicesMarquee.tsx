const ITEMS = [
  { label: "Solar Panel Cleaning", dot: "bg-amber-500", chip: "bg-amber-50 text-amber-700" },
  { label: "AC Cleaning", dot: "bg-sky-500", chip: "bg-sky-50 text-sky-700" },
  { label: "Water Tank Cleaning", dot: "bg-teal-500", chip: "bg-teal-50 text-teal-700" },
  { label: "CCTV Installation", dot: "bg-violet-500", chip: "bg-violet-50 text-violet-700" },
];

export default function ServicesMarquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-3">
        {track.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold sm:text-sm ${item.chip}`}
          >
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
