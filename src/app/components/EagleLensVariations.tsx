import { Card } from "./ui/card";
import { Button } from "./ui/button";

// Variation 1: Eagle in Flight - Wings Spread
export function EagleLens1({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Handle */}
      <path d="M65 65L85 85" stroke="url(#e1-handle)" strokeWidth="8" strokeLinecap="round"/>
      {/* Outer circle */}
      <circle cx="40" cy="40" r="30" fill="url(#e1-glass)" stroke="#0D9488" strokeWidth="3"/>
      {/* Inner shine */}
      <circle cx="40" cy="40" r="20" fill="url(#e1-inner)" opacity="0.3"/>

      {/* Eagle Silhouette - Wings Spread */}
      <g transform="translate(40, 40)">
        {/* Body */}
        <ellipse cx="0" cy="0" rx="3" ry="5" fill="#134E4A"/>
        {/* Head */}
        <circle cx="0" cy="-6" r="2.5" fill="#134E4A"/>
        {/* Beak */}
        <path d="M 0 -6 L 2 -7 L 1 -6 Z" fill="#F59E0B"/>
        {/* Left Wing */}
        <path d="M -3 -2 Q -12 -8 -15 -5 Q -12 -3 -8 0 L -3 2 Z" fill="#134E4A"/>
        {/* Right Wing */}
        <path d="M 3 -2 Q 12 -8 15 -5 Q 12 -3 8 0 L 3 2 Z" fill="#134E4A"/>
        {/* Tail */}
        <path d="M -2 5 L 0 10 L 2 5 Z" fill="#134E4A"/>
      </g>

      {/* Glare */}
      <circle cx="28" cy="28" r="6" fill="#FFF" opacity="0.5"/>
      <circle cx="52" cy="32" r="3" fill="#FFF" opacity="0.3"/>

      <defs>
        <linearGradient id="e1-glass" x1="40" y1="10" x2="40" y2="70">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="50%" stopColor="#2DD4BF"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="e1-handle" x1="65" y1="65" x2="85" y2="85">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="e1-inner">
          <stop offset="0%" stopColor="#ECFEFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Variation 2: Eagle Head Profile - Regal
export function EagleLens2({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Handle */}
      <path d="M65 65L85 85" stroke="url(#e2-handle)" strokeWidth="8" strokeLinecap="round"/>
      {/* Outer circle */}
      <circle cx="40" cy="40" r="30" fill="url(#e2-glass)" stroke="#0D9488" strokeWidth="3"/>
      {/* Inner shine */}
      <circle cx="40" cy="40" r="20" fill="url(#e2-inner)" opacity="0.3"/>

      {/* Eagle Head Profile */}
      <g transform="translate(35, 35)">
        {/* Head shape */}
        <ellipse cx="2" cy="0" rx="6" ry="7" fill="#134E4A"/>
        {/* Beak upper */}
        <path d="M 8 -2 Q 14 -3 15 0 Q 13 1 10 0 Z" fill="#F59E0B"/>
        {/* Beak lower */}
        <path d="M 10 0 Q 13 1 12 3 Q 10 2 9 1 Z" fill="#EAB308"/>
        {/* Eye */}
        <circle cx="5" cy="-1" r="1.5" fill="#FCD34D"/>
        <circle cx="5.5" cy="-1.5" r="0.5" fill="#134E4A"/>
        {/* Neck feathers */}
        <path d="M 0 6 Q -3 8 -4 10 L 0 9 L 2 10 L 3 9 Z" fill="#134E4A"/>
        {/* Crown feathers */}
        <path d="M 0 -6 L -1 -8 L 0 -7 L 1 -9 L 1 -6 Z" fill="#134E4A"/>
      </g>

      {/* Glare */}
      <circle cx="28" cy="28" r="6" fill="#FFF" opacity="0.5"/>

      <defs>
        <linearGradient id="e2-glass" x1="40" y1="10" x2="40" y2="70">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="50%" stopColor="#2DD4BF"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="e2-handle" x1="65" y1="65" x2="85" y2="85">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="e2-inner">
          <stop offset="0%" stopColor="#ECFEFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Variation 3: Eagle Diving - Dynamic Action
export function EagleLens3({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Handle */}
      <path d="M65 65L85 85" stroke="url(#e3-handle)" strokeWidth="8" strokeLinecap="round"/>
      {/* Outer circle */}
      <circle cx="40" cy="40" r="30" fill="url(#e3-glass)" stroke="#0D9488" strokeWidth="3"/>
      {/* Inner shine */}
      <circle cx="40" cy="40" r="20" fill="url(#e3-inner)" opacity="0.3"/>

      {/* Eagle Diving */}
      <g transform="translate(40, 30) rotate(15)">
        {/* Head */}
        <ellipse cx="0" cy="0" rx="2.5" ry="3" fill="#134E4A"/>
        {/* Beak */}
        <path d="M 1.5 0 L 4 -1 L 3 0 Z" fill="#F59E0B"/>
        {/* Body */}
        <ellipse cx="0" cy="8" rx="3.5" ry="6" fill="#134E4A"/>
        {/* Left Wing Extended */}
        <path d="M -3 3 Q -10 0 -14 2 Q -12 5 -8 7 Q -5 8 -3 8 Z" fill="#134E4A"/>
        {/* Right Wing Folded */}
        <path d="M 3 3 Q 8 2 10 4 Q 8 6 5 7 Q 4 7 3 8 Z" fill="#134E4A"/>
        {/* Tail feathers */}
        <path d="M -1 14 L -2 18 L 0 16 L 2 18 L 1 14 Z" fill="#134E4A"/>
        {/* Talons */}
        <path d="M -2 13 L -3 16 M 0 14 L 0 17 M 2 13 L 3 16" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round"/>
      </g>

      {/* Motion lines */}
      <path d="M 35 25 L 32 23" stroke="#14B8A6" strokeWidth="1" opacity="0.3"/>
      <path d="M 38 22 L 35 20" stroke="#14B8A6" strokeWidth="1" opacity="0.3"/>

      {/* Glare */}
      <circle cx="28" cy="28" r="6" fill="#FFF" opacity="0.5"/>

      <defs>
        <linearGradient id="e3-glass" x1="40" y1="10" x2="40" y2="70">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="50%" stopColor="#2DD4BF"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="e3-handle" x1="65" y1="65" x2="85" y2="85">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="e3-inner">
          <stop offset="0%" stopColor="#ECFEFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Variation 4: Geometric Eagle - Modern
export function EagleLens4({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Handle */}
      <path d="M65 65L85 85" stroke="url(#e4-handle)" strokeWidth="8" strokeLinecap="round"/>
      {/* Outer circle */}
      <circle cx="40" cy="40" r="30" fill="url(#e4-glass)" stroke="#0D9488" strokeWidth="3"/>
      {/* Inner shine */}
      <circle cx="40" cy="40" r="20" fill="url(#e4-inner)" opacity="0.3"/>

      {/* Geometric Eagle */}
      <g transform="translate(40, 38)">
        {/* Triangle body */}
        <path d="M 0 -8 L -5 4 L 5 4 Z" fill="#134E4A"/>
        {/* Triangle head */}
        <path d="M 0 -8 L -3 -12 L 3 -12 Z" fill="#134E4A"/>
        {/* Beak */}
        <path d="M 0 -12 L 2 -14 L 0 -13 Z" fill="#F59E0B"/>
        {/* Left wing triangle */}
        <path d="M -5 4 L -15 -2 L -8 -3 Z" fill="#134E4A"/>
        {/* Right wing triangle */}
        <path d="M 5 4 L 15 -2 L 8 -3 Z" fill="#134E4A"/>
        {/* Tail diamond */}
        <path d="M -3 4 L 0 10 L 3 4 L 0 6 Z" fill="#134E4A"/>
        {/* Eye accent */}
        <circle cx="0" cy="-10" r="0.8" fill="#FCD34D"/>
      </g>

      {/* Glare */}
      <circle cx="28" cy="28" r="6" fill="#FFF" opacity="0.5"/>

      <defs>
        <linearGradient id="e4-glass" x1="40" y1="10" x2="40" y2="70">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="50%" stopColor="#2DD4BF"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="e4-handle" x1="65" y1="65" x2="85" y2="85">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="e4-inner">
          <stop offset="0%" stopColor="#ECFEFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Variation 5: Eagle Perched - Grounded & Strong
export function EagleLens5({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Handle */}
      <path d="M65 65L85 85" stroke="url(#e5-handle)" strokeWidth="8" strokeLinecap="round"/>
      {/* Outer circle */}
      <circle cx="40" cy="40" r="30" fill="url(#e5-glass)" stroke="#0D9488" strokeWidth="3"/>
      {/* Inner shine */}
      <circle cx="40" cy="40" r="20" fill="url(#e5-inner)" opacity="0.3"/>

      {/* Eagle Perched */}
      <g transform="translate(40, 35)">
        {/* Head */}
        <circle cx="0" cy="-6" r="3" fill="#134E4A"/>
        {/* Beak */}
        <path d="M 2 -6 L 5 -7 L 4 -5 Z" fill="#F59E0B"/>
        {/* Eye */}
        <circle cx="1" cy="-7" r="0.8" fill="#FCD34D"/>
        {/* Body upright */}
        <ellipse cx="0" cy="2" rx="4" ry="7" fill="#134E4A"/>
        {/* Left wing folded */}
        <path d="M -4 -1 Q -7 0 -8 3 L -5 8 L -3 5 Z" fill="#134E4A"/>
        {/* Right wing folded */}
        <path d="M 4 -1 Q 7 0 8 3 L 5 8 L 3 5 Z" fill="#134E4A"/>
        {/* Tail down */}
        <path d="M -2 9 L -1 14 L 0 13 L 1 14 L 2 9 Z" fill="#134E4A"/>
        {/* Perch line */}
        <line x1="-8" y1="14" x2="8" y2="14" stroke="#0F766E" strokeWidth="1.5"/>
        {/* Talons */}
        <path d="M -2 9 L -2 14 M 2 9 L 2 14" stroke="#F59E0B" strokeWidth="1"/>
      </g>

      {/* Glare */}
      <circle cx="28" cy="28" r="6" fill="#FFF" opacity="0.5"/>

      <defs>
        <linearGradient id="e5-glass" x1="40" y1="10" x2="40" y2="70">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="50%" stopColor="#2DD4BF"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="e5-handle" x1="65" y1="65" x2="85" y2="85">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="e5-inner">
          <stop offset="0%" stopColor="#ECFEFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Variation 6: Eagle with Sparkle Accents - Premium
export function EagleLens6({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" };
  return (
    <svg viewBox="0 0 100 100" fill="none" className={sizes[size]}>
      {/* Handle */}
      <path d="M65 65L85 85" stroke="url(#e6-handle)" strokeWidth="8" strokeLinecap="round"/>
      {/* Outer circle */}
      <circle cx="40" cy="40" r="30" fill="url(#e6-glass)" stroke="#0D9488" strokeWidth="3"/>
      {/* Inner glow */}
      <circle cx="40" cy="40" r="24" fill="url(#e6-glow)" opacity="0.4"/>

      {/* Eagle silhouette */}
      <g transform="translate(40, 40)">
        {/* Body */}
        <ellipse cx="0" cy="0" rx="3" ry="5" fill="url(#e6-eagle)"/>
        {/* Head */}
        <circle cx="0" cy="-6" r="2.5" fill="url(#e6-eagle)"/>
        {/* Beak */}
        <path d="M 0 -6 L 2 -7 L 1 -6 Z" fill="#FCD34D"/>
        {/* Left Wing */}
        <path d="M -3 -2 Q -12 -8 -15 -5 Q -12 -3 -8 0 L -3 2 Z" fill="url(#e6-eagle)"/>
        {/* Right Wing */}
        <path d="M 3 -2 Q 12 -8 15 -5 Q 12 -3 8 0 L 3 2 Z" fill="url(#e6-eagle)"/>
        {/* Tail */}
        <path d="M -2 5 L 0 10 L 2 5 Z" fill="url(#e6-eagle)"/>
      </g>

      {/* Sparkle accents */}
      <g opacity="0.9">
        <path d="M 50 25 L 51 30 L 56 31 L 52 34 L 53 39 L 50 36 L 47 39 L 48 34 L 44 31 L 49 30 L 50 25Z" fill="#FFF"/>
        <circle cx="30" cy="35" r="2" fill="#FFF"/>
        <circle cx="25" cy="45" r="1.5" fill="#FFF"/>
      </g>

      {/* Glare */}
      <circle cx="28" cy="28" r="7" fill="#FFF" opacity="0.4"/>

      <defs>
        <linearGradient id="e6-glass" x1="40" y1="10" x2="40" y2="70">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="50%" stopColor="#2DD4BF"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="e6-handle" x1="65" y1="65" x2="85" y2="85">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="e6-glow">
          <stop offset="0%" stopColor="#FFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
        <linearGradient id="e6-eagle" x1="0" y1="-10" x2="0" y2="10">
          <stop offset="0%" stopColor="#134E4A"/>
          <stop offset="100%" stopColor="#064E3B"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Showcase component
export function EagleLogoShowcase({ onSelect }: { onSelect?: (id: string) => void }) {
  const variations = [
    {
      id: "eagle-flight",
      name: "Wings Spread in Flight",
      component: EagleLens1,
      description: "Dynamic and powerful. Eagle with fully extended wings suggesting discovery and freedom.",
    },
    {
      id: "eagle-profile",
      name: "Regal Head Profile",
      component: EagleLens2,
      description: "Classic and professional. Side profile emphasizes precision and focus.",
    },
    {
      id: "eagle-diving",
      name: "Diving Action",
      component: EagleLens3,
      description: "Sharp and decisive. Eagle in pursuit suggests active deal hunting and swift action.",
    },
    {
      id: "eagle-geometric",
      name: "Modern Geometric",
      component: EagleLens4,
      description: "Contemporary and tech-forward. Angular design for a modern, minimalist aesthetic.",
    },
    {
      id: "eagle-perched",
      name: "Perched & Strong",
      component: EagleLens5,
      description: "Grounded and stable. Eagle at rest conveys confidence and strategic patience.",
    },
    {
      id: "eagle-premium",
      name: "Premium with Sparkle",
      component: EagleLens6,
      description: "Elevated and aspirational. Sparkle accents add luxury and excitement to discovery.",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Eagle Discovery Lens Variations</h1>
        <p className="text-muted-foreground">
          Six variations of the magnifying glass logo featuring eagle silhouettes. Each maintains the mint/teal/navy color palette.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {variations.map((variation) => (
          <Card key={variation.id} className="p-6 border-border hover:border-primary/50 transition-all">
            {/* Logo Preview */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-8 mb-4 flex items-center justify-center min-h-[180px]">
              <variation.component size="lg" />
            </div>

            {/* Details */}
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg mb-1">{variation.name}</h3>
                <p className="text-sm text-muted-foreground">{variation.description}</p>
              </div>

              {/* Size Variations */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Size Variations:</p>
                <div className="flex gap-4 items-center bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 p-3 rounded-lg">
                  <variation.component size="sm" />
                  <variation.component size="md" />
                  <variation.component size="lg" />
                </div>
              </div>

              {onSelect && (
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                  onClick={() => onSelect(variation.id)}
                >
                  Select This Design
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Color Palette Reference */}
      <Card className="p-6 mt-8 border-border">
        <h3 className="font-semibold text-lg mb-4">Consistent Color Palette</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5EEAD4] to-[#2DD4BF] border-2 border-border"/>
            <div>
              <p className="text-sm font-medium">Mint Teal</p>
              <p className="text-xs text-muted-foreground">#5EEAD4 → #2DD4BF</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-[#14B8A6] border-2 border-border"/>
            <div>
              <p className="text-sm font-medium">Deep Teal</p>
              <p className="text-xs text-muted-foreground">#14B8A6</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0F766E] to-[#134E4A] border-2 border-border"/>
            <div>
              <p className="text-sm font-medium">Navy Green</p>
              <p className="text-xs text-muted-foreground">#0F766E → #134E4A</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-[#F59E0B] border-2 border-border"/>
            <div>
              <p className="text-sm font-medium">Gold Accent</p>
              <p className="text-xs text-muted-foreground">#F59E0B</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
