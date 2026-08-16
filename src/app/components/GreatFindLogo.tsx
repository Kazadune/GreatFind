// Clean SVG logo - magnifying glass only, works in dark mode
export function GreatFindLogoSVG({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Magnifying Glass Circle - smaller */}
      <circle cx="32" cy="32" r="20" stroke="#4ADE80" strokeWidth="4" fill="none"/>

      {/* Inner glow circle */}
      <circle cx="32" cy="32" r="16" fill="url(#logo-glow)" opacity="0.12"/>

      {/* Glass highlight */}
      <circle cx="26" cy="26" r="6" fill="white" opacity="0.15"/>

      {/* Magnifying Glass Handle - longer */}
      <path d="M46 46L72 72" stroke="#4ADE80" strokeWidth="7" strokeLinecap="round"/>

      {/* Handle grip detail */}
      <line x1="50" y1="50" x2="68" y2="68" stroke="#22C55E" strokeWidth="2" opacity="0.4"/>

      {/* Text "Great Find" */}
      <g>
        {/* Great */}
        <text x="90" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontSize="32" fontWeight="600" fill="#4ADE80" letterSpacing="0.5">
          Great
        </text>

        {/* Find */}
        <text x="90" y="68" fontFamily="system-ui, -apple-system, sans-serif" fontSize="32" fontWeight="600" fill="#4ADE80" letterSpacing="0.5">
          Find
        </text>
      </g>

      <defs>
        <radialGradient id="logo-glow">
          <stop offset="0%" stopColor="#4ADE80"/>
          <stop offset="100%" stopColor="#22C55E"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Icon only version for smaller spaces
export function GreatFindIconSVG({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Magnifying Glass Circle - smaller */}
      <circle cx="35" cy="35" r="24" stroke="#4ADE80" strokeWidth="5" fill="none"/>

      {/* Glass Inner Glow */}
      <circle cx="35" cy="35" r="19" fill="url(#icon-glow)" opacity="0.12"/>

      {/* Glass highlight */}
      <circle cx="28" cy="28" r="7" fill="white" opacity="0.15"/>

      {/* Magnifying Glass Handle - longer */}
      <path d="M53 53L82 82" stroke="#4ADE80" strokeWidth="9" strokeLinecap="round"/>

      {/* Handle grip detail */}
      <line x1="57" y1="57" x2="78" y2="78" stroke="#22C55E" strokeWidth="3" opacity="0.4"/>

      {/* Handle End Cap */}
      <circle cx="82" cy="82" r="4" fill="#4ADE80"/>

      <defs>
        <radialGradient id="icon-glow">
          <stop offset="0%" stopColor="#4ADE80"/>
          <stop offset="100%" stopColor="#22C55E"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Horizontal logo variant (more compact)
export function GreatFindLogoHorizontal({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Magnifying Glass Circle - smaller */}
      <circle cx="26" cy="26" r="16" stroke="#4ADE80" strokeWidth="3.5" fill="none"/>

      {/* Inner glow */}
      <circle cx="26" cy="26" r="12" fill="url(#horiz-glow)" opacity="0.12"/>

      {/* Glass highlight */}
      <circle cx="21" cy="21" r="5" fill="white" opacity="0.15"/>

      {/* Magnifying Glass Handle - longer */}
      <path d="M38 38L58 58" stroke="#4ADE80" strokeWidth="6" strokeLinecap="round"/>

      {/* Handle grip */}
      <line x1="41" y1="41" x2="55" y2="55" stroke="#22C55E" strokeWidth="2" opacity="0.4"/>

      {/* Text "Great Find" side by side */}
      <text x="70" y="40" fontFamily="system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="600" fill="#4ADE80" letterSpacing="0.5">
        Great Find
      </text>

      <defs>
        <radialGradient id="horiz-glow">
          <stop offset="0%" stopColor="#4ADE80"/>
          <stop offset="100%" stopColor="#22C55E"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
