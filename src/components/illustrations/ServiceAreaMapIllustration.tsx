export default function ServiceAreaMapIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 480 220"
      className={className}
      role="img"
      aria-label="Stylized map showing the service coverage area across DHA Lahore"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mapBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
      </defs>

      <rect width="480" height="220" rx="16" fill="url(#mapBg)" />

      <g stroke="#bfdbfe" strokeWidth="2">
        <line x1="0" y1="55" x2="480" y2="55" />
        <line x1="0" y1="110" x2="480" y2="110" />
        <line x1="0" y1="165" x2="480" y2="165" />
        <line x1="100" y1="0" x2="100" y2="220" />
        <line x1="220" y1="0" x2="220" y2="220" />
        <line x1="340" y1="0" x2="340" y2="220" />
      </g>

      {[
        [40, 25], [150, 30], [270, 25], [390, 30],
        [40, 80], [160, 85], [280, 80], [400, 85],
        [50, 135], [170, 140], [290, 135], [400, 140],
        [45, 190], [160, 195], [280, 190], [400, 195],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <rect x="-9" y="-6" width="18" height="14" rx="2" fill="#93c5fd" />
          <path d="M-11 -6 L0 -15 L11 -6 Z" fill="#3b82f6" />
        </g>
      ))}

      <g transform="translate(240,95)">
        <path
          d="M0 -55 C28 -55 46 -33 46 -10 C46 22 0 55 0 55 C0 55 -46 22 -46 -10 C-46 -33 -28 -55 0 -55 Z"
          fill="#1d4ed8"
        />
        <circle cx="0" cy="-10" r="18" fill="#ffffff" />
        <circle cx="0" cy="-10" r="9" fill="#1d4ed8" />
      </g>

      <rect x="20" y="16" width="130" height="26" rx="13" fill="#1e293b" opacity="0.85" />
      <text x="85" y="34" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">
        DHA Lahore
      </text>
    </svg>
  );
}
