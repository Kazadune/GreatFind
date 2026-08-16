import { Sparkles, TrendingUp, Award, Star, CheckCircle2, Zap } from "lucide-react";
import { Card } from "./ui/card";

interface ScoreProps {
  value: string;
  text: string;
  description?: string;
}

// Variation 1: Circular Badge (Current but improved)
export function ScoreCircular({ value, text, description }: ScoreProps) {
  return (
    <Card className="p-6 bg-primary/10 border-primary/20">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-4 shadow-lg relative ring-4 ring-primary/20">
          <span className="text-5xl font-bold">{value}</span>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
        <p className="text-xl font-bold text-primary mb-2">{text}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </Card>
  );
}

// Variation 2: Progress Bar Style
export function ScoreProgress({ value, text, description }: ScoreProps) {
  const numValue = parseInt(value);
  return (
    <Card className="p-6 bg-card border-border">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <h4 className="font-bold text-foreground">Deal Score</h4>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">{value}</p>
            <p className="text-xs text-muted-foreground">out of 100</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
              style={{ width: `${numValue}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Poor</span>
            <span className="font-medium text-primary">{text}</span>
            <span className="text-muted-foreground">Excellent</span>
          </div>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground pt-2 border-t border-border">{description}</p>
        )}
      </div>
    </Card>
  );
}

// Variation 3: Minimal Badge
export function ScoreMinimal({ value, text, description }: ScoreProps) {
  return (
    <Card className="p-5 bg-card border-border">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/30">
          <span className="text-4xl font-bold text-primary">{value}</span>
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold text-foreground mb-1">{text}</p>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
      </div>
    </Card>
  );
}

// Variation 4: Letter Grade Style
export function ScoreGrade({ value, text, description }: ScoreProps) {
  const numValue = parseInt(value);
  let grade = "F";
  let gradeColor = "text-destructive";

  if (numValue >= 90) { grade = "A+"; gradeColor = "text-primary"; }
  else if (numValue >= 80) { grade = "A"; gradeColor = "text-primary"; }
  else if (numValue >= 70) { grade = "B"; gradeColor = "text-warning"; }
  else if (numValue >= 60) { grade = "C"; gradeColor = "text-warning"; }
  else if (numValue >= 50) { grade = "D"; gradeColor = "text-destructive"; }

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-2xl bg-primary/10 flex flex-col items-center justify-center border-2 border-primary/30">
            <span className={`text-5xl font-bold ${gradeColor}`}>{grade}</span>
            <span className="text-xs text-muted-foreground mt-1">{value}/100</span>
          </div>
        </div>

        <div className="flex-1 pt-2">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <p className="text-xl font-bold text-foreground">{text}</p>
          </div>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>
    </Card>
  );
}

// Variation 5: Speedometer/Gauge Style
export function ScoreGauge({ value, text, description }: ScoreProps) {
  const numValue = parseInt(value);
  const rotation = (numValue / 100) * 180 - 90; // -90 to 90 degrees

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-card border-primary/20">
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <svg width="160" height="100" viewBox="0 0 160 100" className="overflow-visible">
            {/* Background arc */}
            <path
              d="M 20 80 A 60 60 0 0 1 140 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-muted/20"
              strokeLinecap="round"
            />
            {/* Colored arc */}
            <path
              d="M 20 80 A 60 60 0 0 1 140 80"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${(numValue / 100) * 188.5} 188.5`}
            />
            {/* Needle */}
            <g transform={`rotate(${rotation} 80 80)`}>
              <line
                x1="80"
                y1="80"
                x2="80"
                y2="30"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary"
              />
              <circle cx="80" cy="80" r="6" fill="currentColor" className="text-primary" />
            </g>

            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
            <p className="text-4xl font-bold text-primary">{value}</p>
          </div>
        </div>

        <p className="text-lg font-bold text-foreground mb-2">{text}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </Card>
  );
}

// Variation 6: Bold Header Style
export function ScoreBold({ value, text, description }: ScoreProps) {
  return (
    <Card className="overflow-hidden border-border">
      <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Zap className="w-6 h-6 text-primary-foreground" />
          <span className="text-6xl font-black text-primary-foreground tracking-tight">{value}</span>
          <Zap className="w-6 h-6 text-primary-foreground" />
        </div>
        <p className="text-xl font-bold text-primary-foreground/90">{text}</p>
      </div>
      {description && (
        <div className="p-4 bg-card">
          <p className="text-sm text-muted-foreground text-center">{description}</p>
        </div>
      )}
    </Card>
  );
}

// Showcase component
export function ScoreDisplayShowcase({ onSelect }: { onSelect: (variation: string) => void }) {
  const sampleScore = {
    value: "89",
    text: "Strong Buy",
    description: "Strong market potential with competitive pricing"
  };

  const variations = [
    { id: "circular", name: "Circular Badge", component: ScoreCircular, description: "Classic, attention-grabbing" },
    { id: "progress", name: "Progress Bar", component: ScoreProgress, description: "Visual scale representation" },
    { id: "minimal", name: "Minimal Badge", component: ScoreMinimal, description: "Clean and compact" },
    { id: "grade", name: "Letter Grade", component: ScoreGrade, description: "Familiar grading system" },
    { id: "gauge", name: "Speedometer", component: ScoreGauge, description: "Dynamic gauge visualization" },
    { id: "bold", name: "Bold Header", component: ScoreBold, description: "Maximum impact" },
  ];

  return (
    <div className="min-h-screen bg-background dark p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Score Display Variations</h1>
        <p className="text-muted-foreground">Choose how you want to display deal scores</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {variations.map((variation) => (
          <div key={variation.id} className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{variation.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{variation.description}</p>
            </div>
            <variation.component {...sampleScore} />
            <button
              onClick={() => onSelect(variation.id)}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Use This Style
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
