import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  LogoGem,
  LogoMagnify,
  LogoTag,
  LogoCompass,
  LogoBag,
  LogoGrowth,
  LogoText1,
  LogoText2,
  LogoText3,
  LogoText4,
  LogoText5,
  LogoText6,
} from "./LogoOptions";

interface LogoOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: "sm" | "md" | "lg" }>;
  text: React.ComponentType<{ text?: string }>;
  colors: string[];
  description: string;
}

const logoOptions: LogoOption[] = [
  {
    id: "gem",
    name: "Faceted Gem",
    icon: LogoGem,
    text: LogoText1,
    colors: ["Mint #6EE7B7", "Emerald #4ADE80", "Jade #22C55E"],
    description: "Premium treasure hunting aesthetic. Italic, bold style.",
  },
  {
    id: "magnify",
    name: "Discovery Lens",
    icon: LogoMagnify,
    text: LogoText2,
    colors: ["Mint #5EEAD4", "Teal #2DD4BF", "Navy #0D9488"],
    description: "Research and discovery focused. Clean, modern sans-serif.",
  },
  {
    id: "tag",
    name: "Price Tag",
    icon: LogoTag,
    text: LogoText3,
    colors: ["Mint #6EE7B7", "Coral #FB923C", "Sunset #F97316"],
    description: "Direct retail/resale branding. Bold uppercase tracking.",
  },
  {
    id: "compass",
    name: "Treasure Compass",
    icon: LogoCompass,
    text: LogoText6,
    colors: ["Mint #6EE7B7", "Gold #FCD34D", "Forest #059669"],
    description: "Navigation and guidance theme. Wide tracking.",
  },
  {
    id: "bag",
    name: "Shopping Sparkle",
    icon: LogoBag,
    text: LogoText4,
    colors: ["Mint #6EE7B7", "Purple #A78BFA", "Lavender #8B5CF6"],
    description: "E-commerce excitement. Modern gradient style.",
  },
  {
    id: "growth",
    name: "Growth Arrow",
    icon: LogoGrowth,
    text: LogoText5,
    colors: ["Mint #6EE7B7", "Sage #84CC9C", "Forest #065F46"],
    description: "Profit and success focused. Serif elegance.",
  },
];

export function LogoShowcase({ onSelect }: { onSelect?: (id: string) => void }) {
  return (
    <div className="min-h-screen bg-background p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Logo Options for Great Find</h1>
        <p className="text-muted-foreground">
          Each option features unique iconography, typography, and complementary color palettes with mint green.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {logoOptions.map((option) => (
          <Card key={option.id} className="p-6 border-border hover:border-primary/50 transition-all">
            {/* Logo Preview */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-8 mb-4 flex flex-col items-center justify-center min-h-[200px]">
              <option.icon size="lg" />
              <div className="mt-4">
                <option.text />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg mb-1">{option.name}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>

              {/* Color Palette */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Color Palette:</p>
                <div className="flex gap-2 flex-wrap">
                  {option.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Variations */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Size Variations:</p>
                <div className="flex gap-4 items-center">
                  <option.icon size="sm" />
                  <option.icon size="md" />
                  <option.icon size="lg" />
                </div>
              </div>

              {onSelect && (
                <Button
                  className="w-full mt-4"
                  variant="outline"
                  onClick={() => onSelect(option.id)}
                >
                  Select This Logo
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Typography Comparison */}
      <Card className="p-6 mt-8 border-border">
        <h3 className="font-semibold text-lg mb-4">Typography Styles Comparison</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
            <span className="text-sm text-muted-foreground w-24">Style 1:</span>
            <LogoText1 />
          </div>
          <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
            <span className="text-sm text-muted-foreground w-24">Style 2:</span>
            <LogoText2 />
          </div>
          <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
            <span className="text-sm text-muted-foreground w-24">Style 3:</span>
            <LogoText3 />
          </div>
          <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
            <span className="text-sm text-muted-foreground w-24">Style 4:</span>
            <LogoText4 />
          </div>
          <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
            <span className="text-sm text-muted-foreground w-24">Style 5:</span>
            <LogoText5 />
          </div>
          <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
            <span className="text-sm text-muted-foreground w-24">Style 6:</span>
            <LogoText6 />
          </div>
        </div>
      </Card>
    </div>
  );
}
