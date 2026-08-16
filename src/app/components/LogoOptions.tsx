// Logo Option 1: Faceted Gem (Current) - Mint + Emerald + Jade
export function LogoGem({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      <path d="M50 10L75 30L70 60L50 90L30 60L25 30L50 10Z" fill="url(#gem1)" stroke="#22C55E" strokeWidth="2"/>
      <path d="M50 10L40 35L50 50L60 35L50 10Z" fill="url(#gem1-f1)" opacity="0.8"/>
      <path d="M25 30L40 35L50 50L30 60L25 30Z" fill="url(#gem1-f2)" opacity="0.6"/>
      <path d="M75 30L60 35L50 50L70 60L75 30Z" fill="url(#gem1-f2)" opacity="0.6"/>
      <circle cx="65" cy="25" r="3" fill="#FFF" opacity="0.9"/>
      <defs>
        <linearGradient id="gem1" x1="50" y1="10" x2="50" y2="90">
          <stop offset="0%" stopColor="#6EE7B7"/>
          <stop offset="50%" stopColor="#4ADE80"/>
          <stop offset="100%" stopColor="#22C55E"/>
        </linearGradient>
        <linearGradient id="gem1-f1" x1="50" y1="10" x2="50" y2="50">
          <stop offset="0%" stopColor="#ECFDF5"/>
          <stop offset="100%" stopColor="#A7F3D0"/>
        </linearGradient>
        <linearGradient id="gem1-f2" x1="25" y1="30" x2="50" y2="50">
          <stop offset="0%" stopColor="#86EFAC"/>
          <stop offset="100%" stopColor="#4ADE80"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Logo Option 2: Magnifying Glass Discovery - Mint + Teal + Navy
export function LogoMagnify({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Handle */}
      <path d="M65 65L85 85" stroke="url(#mag-handle)" strokeWidth="8" strokeLinecap="round"/>
      {/* Outer circle */}
      <circle cx="40" cy="40" r="30" fill="url(#mag-glass)" stroke="#0D9488" strokeWidth="3"/>
      {/* Inner shine */}
      <circle cx="40" cy="40" r="20" fill="url(#mag-inner)" opacity="0.4"/>
      {/* Star/sparkle in center */}
      <path d="M40 25L42 35L40 45L38 35L40 25Z" fill="#FFF" opacity="0.8"/>
      <path d="M25 40L35 42L45 40L35 38L25 40Z" fill="#FFF" opacity="0.8"/>
      {/* Glare */}
      <circle cx="30" cy="30" r="5" fill="#FFF" opacity="0.6"/>
      <defs>
        <linearGradient id="mag-glass" x1="40" y1="10" x2="40" y2="70">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="50%" stopColor="#2DD4BF"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="mag-handle" x1="65" y1="65" x2="85" y2="85">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="mag-inner">
          <stop offset="0%" stopColor="#ECFEFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Logo Option 3: Price Tag - Mint + Coral + Sunset
export function LogoTag({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Tag shape */}
      <path d="M20 20L50 10L80 20L90 50L80 80L50 90L20 80L10 50L20 20Z" fill="url(#tag-bg)" stroke="#F97316" strokeWidth="2.5"/>
      {/* Inner detail */}
      <path d="M30 30L50 25L70 30L75 50L70 70L50 75L30 70L25 50L30 30Z" fill="url(#tag-inner)" opacity="0.3"/>
      {/* Hole for tag string */}
      <circle cx="70" cy="30" r="6" fill="#FFF" stroke="#F97316" strokeWidth="2"/>
      <circle cx="70" cy="30" r="3" fill="url(#tag-hole)"/>
      {/* Star accent */}
      <path d="M45 45L47 50L52 51L48 55L49 60L45 57L41 60L42 55L38 51L43 50L45 45Z" fill="#FFF" opacity="0.9"/>
      <defs>
        <linearGradient id="tag-bg" x1="50" y1="10" x2="50" y2="90">
          <stop offset="0%" stopColor="#6EE7B7"/>
          <stop offset="40%" stopColor="#4ADE80"/>
          <stop offset="70%" stopColor="#FB923C"/>
          <stop offset="100%" stopColor="#F97316"/>
        </linearGradient>
        <linearGradient id="tag-inner" x1="50" y1="25" x2="50" y2="75">
          <stop offset="0%" stopColor="#FFF"/>
          <stop offset="100%" stopColor="#4ADE80"/>
        </linearGradient>
        <radialGradient id="tag-hole">
          <stop offset="0%" stopColor="#EA580C"/>
          <stop offset="100%" stopColor="#C2410C"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Logo Option 4: Treasure Compass - Mint + Gold + Deep Green
export function LogoCompass({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Outer ring */}
      <circle cx="50" cy="50" r="40" fill="url(#compass-outer)" stroke="#059669" strokeWidth="2.5"/>
      {/* Middle ring */}
      <circle cx="50" cy="50" r="32" fill="none" stroke="#FCD34D" strokeWidth="1.5" opacity="0.6"/>
      {/* Cardinal points */}
      <circle cx="50" cy="18" r="4" fill="#FCD34D"/>
      <circle cx="82" cy="50" r="4" fill="#FCD34D"/>
      <circle cx="50" cy="82" r="4" fill="#FCD34D"/>
      <circle cx="18" cy="50" r="4" fill="#FCD34D"/>
      {/* Needle */}
      <path d="M50 30L55 50L50 70L45 50L50 30Z" fill="url(#compass-needle)"/>
      <path d="M50 30L45 50L50 50L50 30Z" fill="#DC2626" opacity="0.8"/>
      {/* Center dot */}
      <circle cx="50" cy="50" r="5" fill="url(#compass-center)"/>
      <defs>
        <linearGradient id="compass-outer" x1="50" y1="10" x2="50" y2="90">
          <stop offset="0%" stopColor="#6EE7B7"/>
          <stop offset="50%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#059669"/>
        </linearGradient>
        <linearGradient id="compass-needle" x1="50" y1="30" x2="50" y2="70">
          <stop offset="0%" stopColor="#DC2626"/>
          <stop offset="50%" stopColor="#FFF"/>
          <stop offset="100%" stopColor="#6EE7B7"/>
        </linearGradient>
        <radialGradient id="compass-center">
          <stop offset="0%" stopColor="#FCD34D"/>
          <stop offset="100%" stopColor="#F59E0B"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Logo Option 5: Shopping Bag with Sparkle - Mint + Purple + Lavender
export function LogoBag({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Bag body */}
      <path d="M25 35L20 85C20 88 22 90 25 90H75C78 90 80 88 80 85L75 35H25Z" fill="url(#bag-body)" stroke="#8B5CF6" strokeWidth="2.5"/>
      {/* Bag top */}
      <rect x="20" y="30" width="60" height="8" rx="2" fill="url(#bag-top)"/>
      {/* Handle */}
      <path d="M35 30C35 22 42 15 50 15C58 15 65 22 65 30" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Sparkle 1 */}
      <path d="M30 55L32 60L37 62L32 64L30 69L28 64L23 62L28 60L30 55Z" fill="#FFF" opacity="0.9"/>
      {/* Sparkle 2 */}
      <path d="M60 65L61 68L64 69L61 70L60 73L59 70L56 69L59 68L60 65Z" fill="#FFF" opacity="0.9"/>
      {/* Badge circle */}
      <circle cx="70" cy="45" r="10" fill="url(#bag-badge)" stroke="#A78BFA" strokeWidth="2"/>
      <path d="M70 40L71 45L76 46L72 49L73 54L70 51L67 54L68 49L64 46L69 45L70 40Z" fill="#FFF"/>
      <defs>
        <linearGradient id="bag-body" x1="50" y1="35" x2="50" y2="90">
          <stop offset="0%" stopColor="#6EE7B7"/>
          <stop offset="50%" stopColor="#A78BFA"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
        <linearGradient id="bag-top" x1="50" y1="30" x2="50" y2="38">
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="100%" stopColor="#6D28D9"/>
        </linearGradient>
        <radialGradient id="bag-badge">
          <stop offset="0%" stopColor="#F0ABFC"/>
          <stop offset="100%" stopColor="#C084FC"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Logo Option 6: Upward Arrow Growth - Mint + Sage + Forest
export function LogoGrowth({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Circular background */}
      <circle cx="50" cy="50" r="42" fill="url(#growth-bg)"/>
      {/* Arrow shaft */}
      <path d="M50 75L50 35" stroke="url(#growth-arrow)" strokeWidth="8" strokeLinecap="round"/>
      {/* Arrow head */}
      <path d="M50 25L35 40L50 35L65 40L50 25Z" fill="#FFF"/>
      {/* Growth bars */}
      <rect x="30" y="65" width="6" height="15" rx="3" fill="#86EFAC" opacity="0.6"/>
      <rect x="42" y="55" width="6" height="25" rx="3" fill="#4ADE80" opacity="0.7"/>
      <rect x="54" y="45" width="6" height="35" rx="3" fill="#22C55E" opacity="0.8"/>
      <rect x="66" y="35" width="6" height="45" rx="3" fill="#16A34A" opacity="0.9"/>
      {/* Sparkles */}
      <circle cx="65" cy="30" r="2.5" fill="#FFF" opacity="0.9"/>
      <circle cx="70" cy="25" r="1.5" fill="#FFF" opacity="0.7"/>
      <defs>
        <linearGradient id="growth-bg" x1="50" y1="8" x2="50" y2="92">
          <stop offset="0%" stopColor="#6EE7B7"/>
          <stop offset="50%" stopColor="#84CC9C"/>
          <stop offset="100%" stopColor="#065F46"/>
        </linearGradient>
        <linearGradient id="growth-arrow" x1="50" y1="75" x2="50" y2="25">
          <stop offset="0%" stopColor="#065F46"/>
          <stop offset="100%" stopColor="#FFF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Typography options
export function LogoText1({ text = "Great Find" }: { text?: string }) {
  return (
    <div className="font-bold italic text-2xl bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
      {text}
    </div>
  );
}

export function LogoText2({ text = "Great Find" }: { text?: string }) {
  return (
    <div className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
      {text}
    </div>
  );
}

export function LogoText3({ text = "Great Find" }: { text?: string }) {
  return (
    <div className="font-black text-2xl tracking-wider uppercase bg-gradient-to-r from-primary via-orange-400 to-orange-500 bg-clip-text text-transparent">
      {text}
    </div>
  );
}

export function LogoText4({ text = "Great Find" }: { text?: string }) {
  return (
    <div className="font-bold text-2xl tracking-wide bg-gradient-to-br from-primary via-purple-400 to-purple-600 bg-clip-text text-transparent">
      {text}
    </div>
  );
}

export function LogoText5({ text = "Great Find" }: { text?: string }) {
  return (
    <div className="font-black text-2xl bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-700 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
      {text}
    </div>
  );
}

export function LogoText6({ text = "Great Find" }: { text?: string }) {
  return (
    <div className="font-bold text-2xl tracking-tight bg-gradient-to-br from-teal-300 via-emerald-400 to-green-600 bg-clip-text text-transparent rounded-lg">
      {text}
    </div>
  );
}
