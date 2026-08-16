export function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer gem shape */}
      <path
        d="M50 10L75 30L70 60L50 90L30 60L25 30L50 10Z"
        fill="url(#gemGradient)"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Inner facets */}
      <path
        d="M50 10L40 35L50 50L60 35L50 10Z"
        fill="url(#facetGradient1)"
        opacity="0.8"
      />
      <path
        d="M25 30L40 35L50 50L30 60L25 30Z"
        fill="url(#facetGradient2)"
        opacity="0.6"
      />
      <path
        d="M75 30L60 35L50 50L70 60L75 30Z"
        fill="url(#facetGradient2)"
        opacity="0.6"
      />
      <path
        d="M30 60L50 50L50 90L30 60Z"
        fill="url(#facetGradient3)"
        opacity="0.7"
      />
      <path
        d="M70 60L50 50L50 90L70 60Z"
        fill="url(#facetGradient3)"
        opacity="0.7"
      />
      {/* Sparkle accent */}
      <circle cx="65" cy="25" r="3" fill="#FFF" opacity="0.9" />
      <circle cx="70" cy="32" r="2" fill="#FFF" opacity="0.7" />

      <defs>
        <linearGradient id="gemGradient" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="50%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
        <linearGradient id="facetGradient1" x1="50" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ECFDF5" />
          <stop offset="100%" stopColor="#A7F3D0" />
        </linearGradient>
        <linearGradient id="facetGradient2" x1="25" y1="30" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
        <linearGradient id="facetGradient3" x1="50" y1="50" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoWordmark({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="30"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        fontStyle="italic"
        fill="url(#textGradient)"
      >
        Great Find
      </text>
      <defs>
        <linearGradient id="textGradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoFull({ iconClassName = "w-8 h-8", textClassName = "h-8" }: { iconClassName?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon className={iconClassName} />
      <LogoWordmark className={textClassName} />
    </div>
  );
}

// Simple icon variant for small spaces
export function LogoIconSimple({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L17 7L16 14L12 22L8 14L7 7L12 2Z"
        fill="url(#simpleGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="6" r="1.5" fill="white" opacity="0.9" />
      <defs>
        <linearGradient id="simpleGradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
