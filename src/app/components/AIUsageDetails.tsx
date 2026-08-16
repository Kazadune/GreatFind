import { X, RotateCcw, Zap, ArrowUpCircle, ArrowDownCircle, DollarSign } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface UsageData {
  apiCalls: number;
  inputTokens: number;
  outputTokens: number;
  estimatedCost: number;
  functions: {
    name: string;
    cost: number;
    calls: number;
    tokens: number;
  }[];
}

const mockUsageData: UsageData = {
  apiCalls: 39,
  inputTokens: 56844,
  outputTokens: 30333,
  estimatedCost: 0.021,
  functions: [
    {
      name: "Item Identification",
      cost: 0.0114,
      calls: 11,
      tokens: 50775,
    },
    {
      name: "AI Evaluation",
      cost: 0.0096,
      calls: 28,
      tokens: 36402,
    },
  ],
};

export function AIUsageDetails({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="max-w-md mx-auto min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">AI Usage Details</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-primary/10"
            >
              <X className="w-5 h-5 text-foreground" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Total Usage */}
          <section>
            <h2 className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">
              Total Usage
            </h2>
            <Card className="p-3 border-border bg-card">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm text-foreground">API Calls</span>
                  </div>
                  <span className="text-base font-semibold text-primary">
                    {mockUsageData.apiCalls}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ArrowUpCircle className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm text-foreground">Input Tokens</span>
                  </div>
                  <span className="text-base font-semibold text-primary">
                    {mockUsageData.inputTokens.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ArrowDownCircle className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm text-foreground">Output Tokens</span>
                  </div>
                  <span className="text-base font-semibold text-primary">
                    {mockUsageData.outputTokens.toLocaleString()}
                  </span>
                </div>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Estimated Cost</span>
                  </div>
                  <span className="text-xl font-bold text-primary">
                    ${mockUsageData.estimatedCost.toFixed(4)}
                  </span>
                </div>
              </div>
            </Card>
          </section>

          {/* Breakdown by Function */}
          <section>
            <h2 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              Breakdown by Function
            </h2>
            <div className="space-y-2">
              {mockUsageData.functions.map((func, index) => (
                <Card key={index} className="p-3 border-border bg-card">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-sm font-semibold text-foreground">{func.name}</h3>
                    <span className="text-lg font-bold text-primary">
                      ${func.cost.toFixed(4)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {func.calls} calls · {func.tokens.toLocaleString()} tokens
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Reset Button */}
          <section className="pt-2">
            <Button
              variant="outline"
              className="w-full border-border hover:bg-destructive/10 hover:border-destructive/30 hover:text-destructive transition-colors py-5"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Usage Counter
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
