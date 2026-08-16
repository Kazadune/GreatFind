import { Card } from "./ui/card";
import { Button } from "./ui/button";

// MAGNIFYING GLASS STYLES

// Style A: Modern Minimal - Thin, clean lines
function ModernMagnifier({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <path d="M68 68L88 88" stroke="url(#modern-handle)" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="40" cy="40" r="32" fill="url(#modern-glass)" stroke="#0D9488" strokeWidth="2"/>
      <circle cx="40" cy="40" r="26" fill="url(#modern-inner)" opacity="0.2"/>
      {children}
      <circle cx="26" cy="26" r="8" fill="#FFF" opacity="0.4"/>
      <defs>
        <linearGradient id="modern-glass" x1="40" y1="8" x2="40" y2="72">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="modern-handle" x1="68" y1="68" x2="88" y2="88">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="modern-inner">
          <stop offset="0%" stopColor="#FFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Style B: Classic Vintage - Thicker, traditional
function VintageMagnifier({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <path d="M66 66L86 86" stroke="url(#vintage-handle)" strokeWidth="10" strokeLinecap="round"/>
      <circle cx="40" cy="40" r="30" fill="url(#vintage-glass)" stroke="#0D9488" strokeWidth="4"/>
      <circle cx="40" cy="40" r="26" stroke="#2DD4BF" strokeWidth="1" opacity="0.5"/>
      <circle cx="40" cy="40" r="22" fill="url(#vintage-inner)" opacity="0.3"/>
      {children}
      <ellipse cx="28" cy="28" rx="7" ry="5" fill="#FFF" opacity="0.5" transform="rotate(-30 28 28)"/>
      <defs>
        <linearGradient id="vintage-glass" x1="40" y1="10" x2="40" y2="70">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="50%" stopColor="#2DD4BF"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="vintage-handle" x1="66" y1="66" x2="86" y2="86">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="vintage-inner">
          <stop offset="0%" stopColor="#ECFEFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Style C: Premium Ornate - Decorative details
function OrnateMagnifier({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <path d="M66 66L84 84" stroke="url(#ornate-handle)" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="85" cy="85" r="4" fill="#0F766E"/>
      <circle cx="40" cy="40" r="31" fill="url(#ornate-glass)" stroke="#0D9488" strokeWidth="3"/>
      <circle cx="40" cy="40" r="28" stroke="#FCD34D" strokeWidth="0.5" opacity="0.6"/>
      <circle cx="40" cy="40" r="24" stroke="#2DD4BF" strokeWidth="1" opacity="0.4"/>
      <circle cx="40" cy="40" r="20" fill="url(#ornate-inner)" opacity="0.3"/>
      {children}
      <circle cx="28" cy="28" r="6" fill="#FFF" opacity="0.5"/>
      <circle cx="32" cy="24" r="3" fill="#FFF" opacity="0.3"/>
      <defs>
        <linearGradient id="ornate-glass" x1="40" y1="9" x2="40" y2="71">
          <stop offset="0%" stopColor="#6EE7B7"/>
          <stop offset="50%" stopColor="#2DD4BF"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="ornate-handle" x1="66" y1="66" x2="84" y2="84">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="ornate-inner">
          <stop offset="0%" stopColor="#ECFEFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Style D: Tech Sharp - Angular, modern
function TechMagnifier({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <path d="M67 67L87 87" stroke="url(#tech-handle)" strokeWidth="7" strokeLinecap="square"/>
      <path d="M 40 8 L 65 20 L 72 40 L 65 60 L 40 72 L 15 60 L 8 40 L 15 20 Z" fill="url(#tech-glass)" stroke="#0D9488" strokeWidth="2.5"/>
      <circle cx="40" cy="40" r="24" fill="url(#tech-inner)" opacity="0.25"/>
      {children}
      <path d="M 28 22 L 35 28 L 32 32 L 25 26 Z" fill="#FFF" opacity="0.5"/>
      <defs>
        <linearGradient id="tech-glass" x1="40" y1="8" x2="40" y2="72">
          <stop offset="0%" stopColor="#5EEAD4"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
        <linearGradient id="tech-handle" x1="67" y1="67" x2="87" y2="87">
          <stop offset="0%" stopColor="#0F766E"/>
          <stop offset="100%" stopColor="#134E4A"/>
        </linearGradient>
        <radialGradient id="tech-inner">
          <stop offset="0%" stopColor="#FFF"/>
          <stop offset="100%" stopColor="#5EEAD4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// BALD EAGLE SILHOUETTES (More Realistic)

// Eagle 1: Classic Soaring Pose - Wings Fully Extended
function BaldEagleSoaring() {
  return (
    <g transform="translate(40, 40)">
      {/* Body */}
      <ellipse cx="0" cy="0" rx="3.5" ry="6" fill="#134E4A"/>
      {/* White head (lighter in silhouette) */}
      <ellipse cx="0" cy="-7" rx="3" ry="3.5" fill="#0F766E"/>
      {/* Distinctive hooked beak */}
      <path d="M 2 -7 Q 4 -8 4.5 -6.5 L 3 -6.5 Z" fill="#F59E0B"/>
      {/* Eye */}
      <circle cx="1" cy="-7.5" r="0.6" fill="#FCD34D"/>

      {/* Left wing - broad and long */}
      <path d="M -3.5 -2 Q -8 -6 -14 -7 Q -16 -5 -15 -2 Q -12 0 -8 1 L -3.5 2 Z" fill="#134E4A"/>
      {/* Left wing feathers detail */}
      <path d="M -14 -7 L -15 -5 M -12 -5 L -13 -3 M -10 -3 L -11 -1" stroke="#0F766E" strokeWidth="0.5" opacity="0.5"/>

      {/* Right wing - broad and long */}
      <path d="M 3.5 -2 Q 8 -6 14 -7 Q 16 -5 15 -2 Q 12 0 8 1 L 3.5 2 Z" fill="#134E4A"/>
      {/* Right wing feathers detail */}
      <path d="M 14 -7 L 15 -5 M 12 -5 L 13 -3 M 10 -3 L 11 -1" stroke="#0F766E" strokeWidth="0.5" opacity="0.5"/>

      {/* White tail (fan-shaped) */}
      <path d="M -2.5 6 Q -3 9 -2 11 L 0 12 L 2 11 Q 3 9 2.5 6 Z" fill="#0F766E"/>
      {/* Tail feather details */}
      <path d="M -1 8 L -1 11 M 0 8 L 0 12 M 1 8 L 1 11" stroke="#134E4A" strokeWidth="0.5" opacity="0.3"/>

      {/* Talons */}
      <path d="M -1.5 5 L -2 7 M 0 5.5 L 0 7.5 M 1.5 5 L 2 7" stroke="#F59E0B" strokeWidth="0.8" strokeLinecap="round"/>
    </g>
  );
}

// Eagle 2: Head Profile - Iconic side view
function BaldEagleProfile() {
  return (
    <g transform="translate(38, 40)">
      {/* Neck/body */}
      <ellipse cx="0" cy="5" rx="4" ry="8" fill="#134E4A"/>
      {/* White head - distinctive round shape */}
      <ellipse cx="2" cy="-2" rx="6" ry="6.5" fill="#0F766E"/>
      {/* Eye - fierce and alert */}
      <circle cx="5" cy="-3" r="1.2" fill="#FCD34D"/>
      <circle cx="5.5" cy="-3.5" r="0.5" fill="#134E4A"/>
      {/* Distinctive curved beak */}
      <path d="M 8 -4 Q 12 -5 13 -2 Q 12 0 10 -1 L 9 -2 Z" fill="#F59E0B"/>
      <path d="M 10 -1 Q 12 0 11 2 Q 9 1 8.5 0 Z" fill="#EAB308"/>
      {/* Beak nostril detail */}
      <circle cx="10" cy="-2.5" r="0.4" fill="#D97706"/>
      {/* Crown feathers */}
      <path d="M 0 -7 Q -1 -9 0 -10 L 1 -9 L 2 -10 L 2 -8 Z" fill="#0F766E"/>
      {/* Neck feathers transition */}
      <path d="M -3 2 Q -5 4 -6 7 L -4 6 L -2 7 L 0 6" fill="#134E4A"/>
      <path d="M -2 -2 L -4 0 M -1 0 L -3 2" stroke="#134E4A" strokeWidth="0.8" opacity="0.4"/>
    </g>
  );
}

// Eagle 3: Perched Majestic
function BaldEaglePerched() {
  return (
    <g transform="translate(40, 38)">
      {/* White head */}
      <ellipse cx="0" cy="-8" rx="3.5" ry="4" fill="#0F766E"/>
      {/* Hooked beak */}
      <path d="M 2.5 -8 Q 5 -9 5.5 -7 L 4 -7 Z" fill="#F59E0B"/>
      {/* Eye */}
      <circle cx="1.5" cy="-9" r="0.8" fill="#FCD34D"/>
      <circle cx="1.8" cy="-9.3" r="0.3" fill="#134E4A"/>

      {/* Body - upright, proud posture */}
      <ellipse cx="0" cy="0" rx="4.5" ry="8" fill="#134E4A"/>

      {/* Left wing folded */}
      <path d="M -4.5 -4 Q -8 -2 -9 2 Q -8 6 -6 8 L -4 6 L -3.5 2 Z" fill="#134E4A"/>
      {/* Wing feather detail */}
      <path d="M -7 0 L -6.5 4 M -5.5 2 L -5 6" stroke="#0F766E" strokeWidth="0.6" opacity="0.4"/>

      {/* Right wing folded */}
      <path d="M 4.5 -4 Q 8 -2 9 2 Q 8 6 6 8 L 4 6 L 3.5 2 Z" fill="#134E4A"/>
      {/* Wing feather detail */}
      <path d="M 7 0 L 6.5 4 M 5.5 2 L 5 6" stroke="#0F766E" strokeWidth="0.6" opacity="0.4"/>

      {/* White tail */}
      <path d="M -3 8 L -2 13 L 0 14 L 2 13 L 3 8 Z" fill="#0F766E"/>

      {/* Perch */}
      <line x1="-10" y1="14" x2="10" y2="14" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Talons gripping */}
      <path d="M -2 8 L -2.5 14 M 0 8 L 0 14 M 2 8 L 2.5 14" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round"/>
      <path d="M -2.5 14 L -3 15 M 0 14 L 0 15 M 2.5 14 L 3 15" stroke="#F59E0B" strokeWidth="0.8" strokeLinecap="round"/>
    </g>
  );
}

// Eagle 4: Diving/Hunting
function BaldEagleDiving() {
  return (
    <g transform="translate(40, 32) rotate(25)">
      {/* White head angled down */}
      <ellipse cx="0" cy="-5" rx="2.8" ry="3.2" fill="#0F766E"/>
      {/* Sharp beak pointed down */}
      <path d="M 1.5 -4 L 4 -5 L 3 -3.5 Z" fill="#F59E0B"/>
      {/* Focused eye */}
      <circle cx="1" cy="-5.5" r="0.7" fill="#FCD34D"/>

      {/* Body streamlined */}
      <ellipse cx="0" cy="2" rx="3" ry="7" fill="#134E4A"/>

      {/* Left wing swept back */}
      <path d="M -3 -2 Q -10 -4 -14 -1 Q -12 2 -8 4 L -3 4 Z" fill="#134E4A"/>
      {/* Right wing swept forward */}
      <path d="M 3 -2 Q 9 -5 12 -3 Q 10 0 7 2 L 3 4 Z" fill="#134E4A"/>

      {/* White tail */}
      <path d="M -2 9 L -1 13 L 1 13 L 2 9 Z" fill="#0F766E"/>

      {/* Talons extended forward */}
      <g transform="translate(0, 8) rotate(-20)">
        <path d="M -2 0 L -3 4 M -1 0 L -1.5 4 M 0 0 L 0 4.5 M 1 0 L 1.5 4 M 2 0 L 3 4" stroke="#F59E0B" strokeWidth="0.8" strokeLinecap="round"/>
      </g>

      {/* Speed lines */}
      <path d="M -5 -3 L -8 -5 M -4 0 L -7 -1" stroke="#14B8A6" strokeWidth="0.8" opacity="0.3"/>
    </g>
  );
}

// CREATE ALL COMBINATIONS
const combinations = [
  { magnifier: ModernMagnifier, eagle: BaldEagleSoaring, magName: "Modern Minimal", eagleName: "Soaring", id: "modern-soaring" },
  { magnifier: ModernMagnifier, eagle: BaldEagleProfile, magName: "Modern Minimal", eagleName: "Profile", id: "modern-profile" },
  { magnifier: VintageMagnifier, eagle: BaldEagleSoaring, magName: "Classic Vintage", eagleName: "Soaring", id: "vintage-soaring" },
  { magnifier: VintageMagnifier, eagle: BaldEagleProfile, magName: "Classic Vintage", eagleName: "Profile", id: "vintage-profile" },
  { magnifier: VintageMagnifier, eagle: BaldEaglePerched, magName: "Classic Vintage", eagleName: "Perched", id: "vintage-perched" },
  { magnifier: OrnateMagnifier, eagle: BaldEagleSoaring, magName: "Premium Ornate", eagleName: "Soaring", id: "ornate-soaring" },
  { magnifier: OrnateMagnifier, eagle: BaldEagleProfile, magName: "Premium Ornate", eagleName: "Profile", id: "ornate-profile" },
  { magnifier: OrnateMagnifier, eagle: BaldEaglePerched, magName: "Premium Ornate", eagleName: "Perched", id: "ornate-perched" },
  { magnifier: TechMagnifier, eagle: BaldEagleSoaring, magName: "Tech Sharp", eagleName: "Soaring", id: "tech-soaring" },
  { magnifier: TechMagnifier, eagle: BaldEagleDiving, magName: "Tech Sharp", eagleName: "Diving", id: "tech-diving" },
  { magnifier: ModernMagnifier, eagle: BaldEagleDiving, magName: "Modern Minimal", eagleName: "Diving", id: "modern-diving" },
  { magnifier: VintageMagnifier, eagle: BaldEagleDiving, magName: "Classic Vintage", eagleName: "Diving", id: "vintage-diving" },
];

function LogoVariant({ Magnifier, Eagle, size = "md" }: {
  Magnifier: typeof ModernMagnifier;
  Eagle: typeof BaldEagleSoaring;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "w-16 h-16", md: "w-24 h-24", lg: "w-32 h-32" };
  return (
    <div className={sizes[size]}>
      <Magnifier>
        <Eagle />
      </Magnifier>
    </div>
  );
}

export function BaldEagleLogoShowcase({ onSelect }: { onSelect?: (id: string) => void }) {
  return (
    <div className="min-h-screen bg-background p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Bald Eagle Discovery Lens</h1>
        <p className="text-muted-foreground mb-4">
          Mix & match: 4 magnifying glass styles × authentic American bald eagle silhouettes
        </p>
        <div className="flex gap-2 flex-wrap">
          <div className="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900 text-xs">Mint #5EEAD4</div>
          <div className="px-3 py-1 rounded-full bg-teal-500 text-white text-xs">Teal #2DD4BF</div>
          <div className="px-3 py-1 rounded-full bg-teal-700 text-white text-xs">Navy #0F766E</div>
          <div className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs">Gold #F59E0B</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {combinations.map((combo) => (
          <Card key={combo.id} className="p-6 border-border hover:border-teal-500/50 transition-all group">
            {/* Logo Preview */}
            <div className="bg-gradient-to-br from-teal-50/50 to-emerald-50/50 dark:from-teal-950/20 dark:to-emerald-950/20 rounded-xl p-8 mb-4 flex items-center justify-center min-h-[200px]">
              <LogoVariant Magnifier={combo.magnifier} Eagle={combo.eagle} size="lg" />
            </div>

            {/* Details */}
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {combo.magName} + {combo.eagleName}
                </h3>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-secondary">{combo.magName}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">Eagle {combo.eagleName}</span>
                </div>
              </div>

              {/* Size Variations */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Sizes:</p>
                <div className="flex gap-4 items-center justify-center bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 p-4 rounded-lg">
                  <LogoVariant Magnifier={combo.magnifier} Eagle={combo.eagle} size="sm" />
                  <LogoVariant Magnifier={combo.magnifier} Eagle={combo.eagle} size="md" />
                </div>
              </div>

              {onSelect && (
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white group-hover:shadow-lg transition-all"
                  onClick={() => onSelect(combo.id)}
                >
                  Select This Design
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Style Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="p-6 border-border">
          <h3 className="font-semibold text-lg mb-4">Magnifying Glass Styles</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 flex-shrink-0">
                <ModernMagnifier><circle cx="40" cy="40" r="3" fill="#134E4A"/></ModernMagnifier>
              </div>
              <div>
                <p className="font-medium">Modern Minimal</p>
                <p className="text-xs text-muted-foreground">Thin lines, clean aesthetic. Professional and contemporary.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 flex-shrink-0">
                <VintageMagnifier><circle cx="40" cy="40" r="3" fill="#134E4A"/></VintageMagnifier>
              </div>
              <div>
                <p className="font-medium">Classic Vintage</p>
                <p className="text-xs text-muted-foreground">Traditional style with depth. Timeless and trustworthy.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 flex-shrink-0">
                <OrnateMagnifier><circle cx="40" cy="40" r="3" fill="#134E4A"/></OrnateMagnifier>
              </div>
              <div>
                <p className="font-medium">Premium Ornate</p>
                <p className="text-xs text-muted-foreground">Decorative details with gold accents. Luxurious and refined.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 flex-shrink-0">
                <TechMagnifier><circle cx="40" cy="40" r="3" fill="#134E4A"/></TechMagnifier>
              </div>
              <div>
                <p className="font-medium">Tech Sharp</p>
                <p className="text-xs text-muted-foreground">Angular octagon shape. Modern and tech-forward.</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border">
          <h3 className="font-semibold text-lg mb-4">Eagle Poses</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium">Soaring</p>
              <p className="text-xs text-muted-foreground">Wings fully extended. Represents freedom, discovery, and broad vision.</p>
            </div>
            <div>
              <p className="font-medium">Profile</p>
              <p className="text-xs text-muted-foreground">Iconic side head view. Sharp focus, precision, and brand recognition.</p>
            </div>
            <div>
              <p className="font-medium">Perched</p>
              <p className="text-xs text-muted-foreground">Majestic and grounded. Confidence, patience, and strategic thinking.</p>
            </div>
            <div>
              <p className="font-medium">Diving</p>
              <p className="text-xs text-muted-foreground">Action and pursuit. Speed, decisiveness, and seizing opportunities.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
