import { useState } from "react";
import { Package, Sparkles, CheckCircle2, Circle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ItemIdentificationProps {
  onEvaluate: () => void;
  onCancel: () => void;
}

const conditionOptions = [
  {
    id: "new",
    label: "New",
    description: "Sealed, unused, original packaging",
    color: "primary"
  },
  {
    id: "like-new",
    label: "Like New",
    description: "Opened or used briefly, no damage",
    color: "primary"
  },
  {
    id: "very-good",
    label: "Very Good",
    description: "Lightly used, fully functional",
    color: "primary"
  },
  {
    id: "good",
    label: "Good",
    description: "Normal wear, fully functional",
    color: "warning"
  },
  {
    id: "acceptable",
    label: "Acceptable",
    description: "Heavy wear or damage, functional",
    color: "destructive"
  },
];

export function ItemIdentification({ onEvaluate, onCancel }: ItemIdentificationProps) {
  const [selectedCondition, setSelectedCondition] = useState("new");
  const [purchasePrice, setPurchasePrice] = useState("0.00");
  const [conditionDetails, setConditionDetails] = useState("");
  const [sourceStore, setSourceStore] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="min-h-screen bg-background dark">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onCancel} className="text-foreground hover:bg-primary/10 hover:text-primary">
            ← Back
          </Button>
          <h2 className="font-semibold text-foreground">Item Details</h2>
          <div className="w-16" />
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 pb-32 space-y-4">
        {/* Product Header */}
        <Card className="p-4 border-border">
          <div className="flex gap-3 mb-4">
            <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border flex-shrink-0">
              <Package className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-foreground leading-tight mb-1">
                Immuneti - Advanced Immune Defense 5-in-1 Powerful Blend of Vitamin...
              </h3>
              <Badge className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground border-border">
                Generic
              </Badge>
            </div>
          </div>

          {/* Category */}
          <div className="text-xs text-muted-foreground mb-3">
            <span className="font-medium">Category:</span> Health & Beauty › Health Care › Fitness & Nutrition › Vitamins & Supplements
          </div>

          {/* Description */}
          <div className="mb-3">
            <p className="text-xs font-medium text-muted-foreground mb-1">DESCRIPTION</p>
            <p className="text-sm text-foreground">
              Immuneti - Advanced Immune Defense 5-in-1 Powerful Blend of Vitamin C Zinc Elderberries Garlic Bulb Echinacea - Supports Overall Health Vital Nutrients & Antioxidants
            </p>
          </div>

          {/* EAN */}
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">EAN</p>
            <p className="text-sm font-mono text-foreground">628176357263</p>
            <p className="text-xs text-muted-foreground">Data from: UPC Database</p>
          </div>
        </Card>

        {/* Purchase Price */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Purchase Price
          </label>
          <Input
            type="number"
            step="0.01"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="bg-input-background border-border text-foreground"
            placeholder="$ 0.00"
          />
        </div>

        {/* Condition Selection */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Condition <span className="text-destructive">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {conditionOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedCondition(option.id)}
                className={`p-3 rounded-xl border-2 text-left transition-all ${
                  selectedCondition === option.id
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="flex items-start gap-2 mb-1">
                  {selectedCondition === option.id ? (
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground">{option.label}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* AI Condition Check */}
          <Button
            variant="outline"
            className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-foreground"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            AI Condition Check
          </Button>
        </div>

        {/* Condition Details */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Condition details <span className="text-muted-foreground">(optional)</span>
          </label>
          <Textarea
            value={conditionDetails}
            onChange={(e) => setConditionDetails(e.target.value)}
            placeholder="e.g., small scratch on back cover, missing dust jacket, battery tested and holds charge"
            className="bg-input-background border-border text-foreground min-h-[80px]"
          />
        </div>

        {/* Source Store */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Source Store
          </label>
          <Input
            value={sourceStore}
            onChange={(e) => setSourceStore(e.target.value)}
            placeholder="e.g., Goodwill, Estate Sale"
            className="bg-input-background border-border text-foreground"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Notes
          </label>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any additional notes about the item..."
            className="bg-input-background border-border text-foreground min-h-[80px]"
          />
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border max-w-md mx-auto">
        <div className="space-y-2">
          <Button
            onClick={onEvaluate}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Evaluate Deal
          </Button>
          <Button
            onClick={onCancel}
            variant="ghost"
            className="w-full text-foreground hover:bg-muted"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
