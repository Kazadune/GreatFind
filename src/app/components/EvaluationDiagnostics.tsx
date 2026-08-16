import { useState } from "react";
import { ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface EvaluationDiagnosticsProps {
  onBack: () => void;
}

interface Evaluation {
  id: string;
  title: string;
  timestamp: string;
  duration: string;
  recommendation: string;
  tier: string;
  source: string;
  comps: number;
}

const mockEvaluations: Evaluation[] = [
  {
    id: "1",
    title: "Coca-Cola Zero Sugar Can",
    timestamp: "May 1 at 11:08:47 PM",
    duration: "7121ms",
    recommendation: "MAYBE",
    tier: "T4",
    source: "ebay_browse",
    comps: 3,
  },
  {
    id: "2",
    title: "Coca-Cola Zero Soda, 12 Fl. Oz.",
    timestamp: "May 1 at 11:07:51 PM",
    duration: "7742ms",
    recommendation: "BUY",
    tier: "T9",
    source: "keepa",
    comps: 3,
  },
  {
    id: "3",
    title: "Complete Set (7 items): Logitech - Logitech W...",
    timestamp: "Apr 29 at 1:41:54 PM",
    duration: "10579ms",
    recommendation: "MAYBE",
    tier: "T4",
    source: "ebay_browse",
    comps: 4,
  },
  {
    id: "4",
    title: "Black Computer Keyboard (Full-size)",
    timestamp: "Apr 29 at 1:41:35 PM",
    duration: "8301ms",
    recommendation: "BUY",
    tier: "T8",
    source: "ebay_browse",
    comps: 27,
  },
  {
    id: "5",
    title: "Black Notebook with Price Sticker",
    timestamp: "Apr 29 at 1:41:26 PM",
    duration: "7892ms",
    recommendation: "MAYBE",
    tier: "T5",
    source: "openai",
    comps: 0,
  },
  {
    id: "6",
    title: "Pink Highlighter",
    timestamp: "Apr 29 at 1:41:26 PM",
    duration: "7029ms",
    recommendation: "PASS",
    tier: "T3",
    source: "openai",
    comps: 0,
  },
  {
    id: "7",
    title: "USB Flash Drive (Black)",
    timestamp: "Apr 29 at 1:41:25 PM",
    duration: "6709ms",
    recommendation: "BUY",
    tier: "T9",
    source: "keepa",
    comps: 2,
  },
  {
    id: "8",
    title: "Logitech Wireless Mouse (Gray with Green LED)",
    timestamp: "Apr 29 at 1:41:18 PM",
    duration: "9561ms",
    recommendation: "MAYBE",
    tier: "T5",
    source: "openai",
    comps: 0,
  },
  {
    id: "9",
    title: "Logitech Wireless Mouse (Dark Gray)",
    timestamp: "Apr 29 at 1:41:17 PM",
    duration: "8413ms",
    recommendation: "MAYBE",
    tier: "T5",
    source: "openai",
    comps: 0,
  },
  {
    id: "10",
    title: "Black Marker Pen (Unbranded)",
    timestamp: "Apr 29 at 1:41:17 PM",
    duration: "8373ms",
    recommendation: "MAYBE",
    tier: "T4",
    source: "ebay_browse",
    comps: 4,
  },
];

export function EvaluationDiagnostics({ onBack }: EvaluationDiagnosticsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "BUY":
        return "text-primary";
      case "MAYBE":
        return "text-warning";
      case "PASS":
        return "text-muted-foreground";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      <div className="max-w-md mx-auto pb-6">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-foreground hover:bg-primary/10 -ml-2"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Settings
            </Button>
            <h1 className="text-xl font-semibold text-foreground">Evaluation Diagnostics</h1>
            <div className="w-20" />
          </div>
        </div>

        {/* Description */}
        <div className="px-4 pt-4 pb-3">
          <p className="text-sm text-muted-foreground">
            The app auto-captures the last 20 evaluations (request + Edge Function response + timing) so you can review or share them to debug pricing issues.
          </p>
        </div>

        {/* Captured Count */}
        <div className="px-4 pb-3">
          <Card className="p-3 border-border bg-card">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">Captured</span>
              <span className="text-base font-semibold text-primary">10 / 20</span>
            </div>
          </Card>
        </div>

        {/* Evaluation List */}
        <div className="px-4 space-y-1.5">
          {mockEvaluations.map((evaluation) => (
            <Card
              key={evaluation.id}
              className="border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(evaluation.id)}
                className="w-full p-3 text-left hover:bg-muted/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground leading-tight mb-1">
                      {evaluation.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">
                      {evaluation.timestamp} · {evaluation.duration}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className={`font-semibold ${getRecommendationColor(evaluation.recommendation)}`}>
                        {evaluation.recommendation}
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{evaluation.tier}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{evaluation.source}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">n={evaluation.comps}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 pt-1">
                    {expandedId === evaluation.id ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </button>

              {expandedId === evaluation.id && (
                <div className="px-3 pb-3 border-t border-border bg-background">
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">
                      Detailed diagnostic data would appear here including full request/response JSON, pricing breakdown, and data sources.
                    </p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
          <div className="max-w-md mx-auto space-y-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold py-6">
              Export all as JSON
            </Button>
            <Button
              variant="outline"
              className="w-full border-destructive/30 text-destructive hover:bg-destructive/10 hover:border-destructive/50 text-base py-6"
            >
              Clear all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
