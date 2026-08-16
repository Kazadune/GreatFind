import { useState } from "react";
import {
  Package, TrendingUp, AlertTriangle, Sparkles, Award, ShoppingCart, Plus, RotateCcw, Trash2,
  DollarSign, FileText, Wallet, Tv, Trophy, BarChart3, Tag, Store, Lightbulb, TrendingDown, Users
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface EvaluationResultsProps {
  onAddToInventory: () => void;
  onReEvaluate: () => void;
  onDiscard: () => void;
  onBack: () => void;
}

export function EvaluationResults({
  onAddToInventory,
  onReEvaluate,
  onDiscard,
  onBack,
  onPostToEbay
}: EvaluationResultsProps) {
  const [addedToInventory, setAddedToInventory] = useState(false);

  const handleAddToInventory = () => {
    setAddedToInventory(true);
    onAddToInventory();
  };

  return (
    <div className="min-h-screen bg-background dark">
      <div className="max-w-md mx-auto pb-6">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <Button variant="ghost" size="sm" onClick={onBack} className="text-foreground hover:bg-primary/10">
              ← Home
            </Button>
            <h2 className="font-semibold text-foreground">Evaluation</h2>
            <div className="w-16" />
          </div>

          {/* Product Title */}
          <h3 className="text-sm font-medium text-foreground leading-tight mb-3">
            Immuneti - Advanced Immune Defense 5-in-1 Powerful Blend of Vitamin C Zinc Elderberries G...
          </h3>
          <Badge className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground border-border mb-3">
            Generic
          </Badge>

          {/* Action Buttons */}
          {!addedToInventory ? (
            <div className="space-y-2">
              <div className="flex gap-2">
                <Button
                  onClick={handleAddToInventory}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-2"
                >
                  <Plus className="w-4 h-4 mr-1.5" />
                  Add to Inventory
                </Button>
                <Button
                  onClick={onPostToEbay}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-2"
                >
                  <ShoppingCart className="w-4 h-4 mr-1.5" />
                  Post to eBay
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={onReEvaluate}
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border text-foreground hover:bg-muted"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                  Re-evaluate
                </Button>
                <Button
                  onClick={onDiscard}
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border text-foreground hover:bg-muted"
                >
                  <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                  Discard
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                onClick={() => {}}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-2"
              >
                Add to Folder
              </Button>
              <Button
                onClick={onBack}
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
              >
                Done
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 pt-3 space-y-2">
        {/* Score - Most Important */}
        <Card className="p-2.5 bg-gradient-to-br from-primary/15 to-primary/5 border-primary/30">
          <div className="flex items-center gap-2.5">
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-2xl font-bold text-primary-foreground">98</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-base font-bold text-primary">Must Buy</span>
              </div>
              <p className="text-[10px] text-muted-foreground leading-tight">
                Solid average selling price on Amazon, but multiple competitors may affect profitability.
              </p>
            </div>
          </div>
        </Card>

        {/* Your Profit */}
        <Card className="p-2.5 border-primary/30 bg-card">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Wallet className="w-2.5 h-2.5 text-primary" />
            </div>
            <h4 className="font-semibold text-xs text-foreground">Your Profit</h4>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] text-muted-foreground">List on Amazon FBM</p>
              <p className="text-lg font-bold text-foreground">$16.55</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-muted-foreground">Net Profit</p>
              <p className="text-lg font-bold text-primary">$14.07</p>
            </div>
          </div>

          <div className="space-y-0.5 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center gap-1">
                <FileText className="w-3 h-3" />
                List Price
              </span>
              <span className="font-medium text-foreground">$16.55</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center gap-1">
                <Package className="w-3 h-3" />
                Amazon FBM Fee (15%)
              </span>
              <span className="font-medium text-destructive">-$2.48</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                Your Cost
              </span>
              <span className="font-medium text-foreground">-$0.00</span>
            </div>
          </div>

          {/* Whatnot Auction */}
          <div className="mt-2 pt-2 border-t border-border">
            <div className="flex items-center gap-1">
              <Tv className="w-3 h-3 text-foreground" />
              <h5 className="font-semibold text-[10px] text-foreground">Whatnot Auction</h5>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-[10px]">
              <div>
                <p className="text-[9px] text-muted-foreground">Starting Bid</p>
                <p className="font-bold text-foreground">$1.00</p>
              </div>
              <div>
                <p className="text-[9px] text-muted-foreground">Expected Close</p>
                <p className="font-bold text-foreground">$12.11–$16.39</p>
              </div>
              <div>
                <p className="text-[9px] text-muted-foreground">Est. Profit</p>
                <p className="font-bold text-primary">$11.00–$14.88</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Amazon Rankings - MOVED UP */}
        <Card className="p-2.5 border-border bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Trophy className="w-3 h-3 text-foreground" />
              <h4 className="font-semibold text-xs text-foreground">Amazon Rankings</h4>
            </div>
            <span className="text-[9px] text-muted-foreground">B087JNQ4X8</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between p-1.5 rounded-lg bg-primary/10 border border-primary/20">
              <div>
                <span className="text-base font-bold text-primary">#18</span>
                <span className="text-[10px] text-muted-foreground ml-1">in Elderberry</span>
              </div>
              <Badge className="text-[8px] px-1 py-0 bg-primary text-primary-foreground border-0">high</Badge>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-lg bg-primary/10 border border-primary/20">
              <div>
                <span className="text-base font-bold text-primary">#7,932</span>
                <span className="text-[10px] text-muted-foreground ml-1">in Health & Household</span>
              </div>
              <Badge className="text-[8px] px-1 py-0 bg-primary text-primary-foreground border-0">high</Badge>
            </div>
          </div>
        </Card>

        {/* Data & Prices Row */}
        <div className="grid grid-cols-2 gap-2">
          <Card className="p-2 border-border bg-card">
            <div className="flex items-center gap-1">
              <BarChart3 className="w-3 h-3 text-foreground" />
              <h5 className="font-semibold text-[10px] text-foreground">Data</h5>
            </div>
            <div className="space-y-0.5 text-[10px]">
              <div className="flex items-center gap-1">
                <ShoppingCart className="w-2.5 h-2.5 text-primary" />
                <span className="text-muted-foreground">BSR #18</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-2.5 h-2.5 text-primary" />
                <span className="text-muted-foreground">eBay: NIP 403</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="w-2 h-2 text-primary" />
                <span className="text-muted-foreground">AI 70% results</span>
              </div>
            </div>
          </Card>

          <Card className="p-2 border-border bg-card">
            <div className="flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-foreground" />
              <h5 className="font-semibold text-[10px] text-foreground">Prices</h5>
            </div>
            <div>
              <p className="text-[9px] text-muted-foreground">Amazon New</p>
              <p className="text-lg font-bold text-primary">$16.99</p>
              <p className="text-[8px] text-muted-foreground">
                3 data points
              </p>
            </div>
          </Card>
        </div>

        {/* Price & Profit by Platform */}
        <Card className="p-2.5 border-border bg-card">
          <div className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-foreground" />
            <h4 className="font-semibold text-xs text-foreground">Price & Profit by Platform</h4>
          </div>

          <div className="p-1 bg-warning/10 border border-warning/30 rounded-lg">
            <p className="text-[9px] font-medium text-warning flex items-center gap-1">
              <Sparkles className="w-2 h-2" />
              AI Recommended: Amazon, eBay
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between p-1.5 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-1 flex-1 min-w-0">
                <ShoppingCart className="w-3 h-3 text-foreground" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-[10px] text-foreground">Amazon FBM</span>
                    <Badge className="text-[7px] px-0.5 py-0 bg-primary text-primary-foreground border-0">BEST</Badge>
                  </div>
                  <p className="text-[8px] text-muted-foreground">15.0% fee · List $16.10 - $19.69</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-primary ml-1">$13.69 - $16.74</span>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-1 flex-1 min-w-0">
                <Tag className="w-3 h-3 text-foreground" />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[10px] text-foreground">eBay</span>
                  <p className="text-[8px] text-muted-foreground">13.0% fee · List $15.00 - $18.00</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-primary ml-1">$13.05 - $15.66</span>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-1 flex-1 min-w-0">
                <Tv className="w-3 h-3 text-foreground" />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[10px] text-foreground">Whatnot</span>
                  <p className="text-[8px] text-muted-foreground">9.2% + fee · List $12.11 - $16.39</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-primary ml-1">$11.00 - $14.88</span>
            </div>
          </div>
        </Card>

        {/* Market Overview */}
        <Card className="p-2.5 border-border bg-card">
          <div className="flex items-center gap-1">
            <Store className="w-3 h-3 text-foreground" />
            <h4 className="font-semibold text-xs text-foreground">Market Overview</h4>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] text-muted-foreground">Average</p>
              <p className="text-base font-bold text-foreground">$16.66</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-muted-foreground">Median Comp</p>
              <p className="text-base font-bold text-foreground">$16.55</p>
            </div>
          </div>

          <p className="text-[8px] text-muted-foreground italic">
            Amazon/Keepa market data (3 price points) | BSR #18 (high demand)
          </p>

          <div className="flex items-center gap-1">
            <Badge className="text-[8px] px-1 py-0 bg-primary/20 text-primary border-primary/30">● Amazon</Badge>
            <Badge className="text-[8px] px-1 py-0 bg-muted text-muted-foreground border-border">● eBay</Badge>
            <Badge className="text-[8px] px-1 py-0 bg-muted text-muted-foreground border-border">● AI</Badge>
          </div>
        </Card>

        {/* Data & Confidence */}
        <Card className="p-2.5 border-border bg-card">
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-foreground" />
            <h4 className="font-semibold text-xs text-foreground">Data & Confidence</h4>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            <div className="text-center">
              <p className="text-[9px] text-muted-foreground">Confidence</p>
              <p className="text-base font-bold text-warning">70%</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] text-muted-foreground">Source</p>
              <p className="text-[9px] font-bold text-foreground">Amazon/Kee...</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] text-muted-foreground">Comps</p>
              <p className="text-base font-bold text-foreground">3</p>
            </div>
          </div>

          <div>
            <p className="text-[9px] font-semibold text-muted-foreground">≡ Comp Prices</p>
            <div className="flex gap-1">
              <span className="px-2 py-0.5 bg-muted/30 rounded-lg text-[10px] font-medium text-foreground">$16.45</span>
              <span className="px-2 py-0.5 bg-muted/30 rounded-lg text-[10px] font-medium text-foreground">$16.55</span>
              <span className="px-2 py-0.5 bg-muted/30 rounded-lg text-[10px] font-medium text-foreground">$16.99</span>
            </div>
          </div>
        </Card>

        {/* Price Trend & Amazon Details */}
        <div className="space-y-1.5">
          <Card className="p-1.5 border-border bg-card">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-muted-foreground flex items-center gap-1">
                <TrendingDown className="w-2.5 h-2.5" />
                Price Trend
              </span>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-[10px] text-foreground">Stable +3%</span>
                <span className="text-[9px] text-muted-foreground">vs 90-day avg</span>
              </div>
            </div>
          </Card>

          <Card className="p-2 border-border bg-card">
            <div className="flex items-center gap-1">
              <ShoppingCart className="w-3 h-3 text-foreground" />
              <h5 className="font-semibold text-[10px] text-foreground">Amazon Prices</h5>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div>
                <p className="text-[8px] text-muted-foreground uppercase">New</p>
                <div>
                  <p className="text-[9px] font-medium text-muted-foreground">Current</p>
                  <p className="text-sm font-bold text-foreground">$16.99</p>
                </div>
              </div>
              <div>
                <p className="text-[8px] text-muted-foreground">30-Day</p>
                <p className="text-sm font-bold text-foreground">$16.55</p>
              </div>
              <div>
                <p className="text-[8px] text-muted-foreground">90-Day</p>
                <p className="text-sm font-bold text-foreground">$16.45</p>
              </div>
            </div>
          </Card>

          <Card className="p-2 border-border bg-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-foreground" />
                <h5 className="font-semibold text-[10px] text-foreground">Amazon Sellers</h5>
              </div>
              <div className="text-center">
                <p className="text-[9px] text-muted-foreground">New</p>
                <p className="text-base font-bold text-foreground">10</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Analysis */}
        <Card className="p-2.5 border-border bg-card">
          <div className="flex items-center gap-1">
            <Lightbulb className="w-3 h-3 text-foreground" />
            <h4 className="font-semibold text-xs text-foreground">Analysis</h4>
          </div>
          <div className="space-y-1 text-[10px] text-muted-foreground">
            <p className="flex items-start gap-1">
              <span className="text-primary mt-0.5">›</span>
              <span>Monitor competitor pricing closely on Amazon to adjust your listing price accordingly.</span>
            </p>
            <p className="flex items-start gap-1">
              <span className="text-primary mt-0.5">›</span>
              <span>Consider bundling with other health products to increase perceived value.</span>
            </p>
            <p className="flex items-start gap-1">
              <span className="text-primary mt-0.5">›</span>
              <span>Keep an eye on seasonal trends in health supplements, as demand may fluctuate.</span>
            </p>
            <p className="flex items-start gap-1">
              <span className="text-primary mt-0.5">›</span>
              <span>Health supplement with steady demand, but moderate competition (10 sellers on Amazon).</span>
            </p>
            <p className="flex items-start gap-1">
              <span className="text-primary mt-0.5">›</span>
              <span>Amazon best platform due to higher prices; eBay/Keepa secondary option.</span>
            </p>
          </div>
        </Card>

        {/* Risk Flags */}
        <Card className="p-2.5 border-destructive/30 bg-destructive/5">
          <div className="flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 text-destructive" />
            <h4 className="font-semibold text-xs text-destructive">RISK FLAGS</h4>
          </div>
          <div className="space-y-1">
            <div className="flex items-start gap-1 p-1 bg-destructive/10 rounded-lg">
              <AlertTriangle className="w-2.5 h-2.5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-destructive">High competition on Amazon may drive prices down.</p>
            </div>
            <div className="flex items-start gap-1 p-1 bg-destructive/10 rounded-lg">
              <AlertTriangle className="w-2.5 h-2.5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-destructive">Generic brand may have lower perceived value.</p>
            </div>
          </div>
        </Card>
      </div>
      </div>
    </div>
  );
}
