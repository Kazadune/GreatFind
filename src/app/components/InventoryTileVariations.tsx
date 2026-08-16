import { Package, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface InventoryItem {
  id: string;
  name: string;
  source: string;
  purchasePrice: number;
  condition: string;
  status: "ready" | "learning" | "strong-buy";
  netProfit: { min: number; max: number };
  badge?: { text: string; value: string };
  addedDays: number;
}

// Variation 1: Compact Horizontal (Current style but cleaner)
export function ItemTileCompact({ item, onClick }: { item: InventoryItem; onClick: () => void }) {
  return (
    <Card
      className="p-4 border-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-3">
        <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
          <Package className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-foreground mb-1">{item.name}</h3>
          <p className="text-xs text-muted-foreground mb-2">{item.source}</p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20">
              {item.condition}
            </Badge>
            <span className="text-xs text-muted-foreground">{item.addedDays}d ago</span>
          </div>
        </div>
        {item.badge && (
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold bg-primary text-primary-foreground flex-shrink-0">
            {item.badge.value}
          </div>
        )}
      </div>
      <div className="mt-3 pt-3 border-t border-border">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Est. Profit</span>
          <span className="font-bold text-primary">${item.netProfit.min.toFixed(2)} - ${item.netProfit.max.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  );
}

// Variation 2: Card Grid (More visual, larger)
export function ItemTileCard({ item, onClick }: { item: InventoryItem; onClick: () => void }) {
  return (
    <Card
      className="p-4 border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
            <Package className="w-10 h-10 text-primary" />
          </div>
          {item.badge && (
            <div className="flex flex-col items-end">
              <div className="w-14 h-14 rounded-xl flex flex-col items-center justify-center bg-primary text-primary-foreground">
                <span className="text-xl font-bold">{item.badge.value}</span>
                <span className="text-[8px] opacity-80 uppercase">{item.badge.text}</span>
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-base leading-tight line-clamp-2 text-foreground mb-1">{item.name}</h3>
          <p className="text-xs text-muted-foreground mb-2">{item.source}</p>
          <div className="flex items-center gap-2">
            <Badge className="text-[10px] px-1.5 py-0 bg-primary/15 text-primary border-primary/30">
              {item.condition}
            </Badge>
            <span className="text-xs text-muted-foreground">{item.addedDays}d</span>
          </div>
        </div>

        <div className="pt-3 border-t border-border space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Est. Profit</span>
            <span className="text-sm font-bold text-primary">${item.netProfit.max.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Platform</span>
            <span className="text-xs font-medium text-foreground">Amazon FBM</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Variation 3: Minimal List (Dense, information-focused)
export function ItemTileMinimal({ item, onClick }: { item: InventoryItem; onClick: () => void }) {
  return (
    <Card
      className="p-3 border-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-lg font-bold text-primary">{item.badge?.value}</span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm leading-tight line-clamp-1 text-foreground">{item.name}</h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-muted-foreground">{item.source}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-primary font-medium">${item.netProfit.max.toFixed(2)}</span>
          </div>
        </div>

        <Badge className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary border-primary/20 flex-shrink-0">
          {item.condition}
        </Badge>
      </div>
    </Card>
  );
}

// Variation 4: Bold Featured (Eye-catching, profit-first)
export function ItemTileFeatured({ item, onClick }: { item: InventoryItem; onClick: () => void }) {
  return (
    <Card
      className="p-4 border-border hover:border-primary/40 hover:shadow-xl transition-all cursor-pointer bg-gradient-to-br from-card to-primary/5"
      onClick={onClick}
    >
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center border border-primary/30">
              <Package className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base leading-tight line-clamp-2 text-foreground mb-1">{item.name}</h3>
              <p className="text-xs text-muted-foreground">{item.source}</p>
            </div>
          </div>

          <div className="bg-primary/10 rounded-xl p-3 border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">Profit Potential</p>
                <p className="text-2xl font-bold text-primary">${item.netProfit.max.toFixed(2)}</p>
              </div>
              {item.badge && (
                <div className="w-16 h-16 rounded-xl flex flex-col items-center justify-center bg-primary text-primary-foreground shadow-md">
                  <span className="text-2xl font-bold">{item.badge.value}</span>
                  <span className="text-[9px] uppercase tracking-wide opacity-90">{item.badge.text.split(' ')[0]}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Badge className="text-[10px] px-2 py-0.5 bg-card text-foreground border-border">
              {item.condition}
            </Badge>
            <span className="text-xs text-muted-foreground">{item.addedDays}d ago</span>
            <TrendingUp className="w-3 h-3 text-primary ml-auto" />
          </div>
        </div>
      </div>
    </Card>
  );
}

// Variation 5: Two-Column Compact (Good for tablets/wider screens)
export function ItemTileTwoColumn({ item, onClick }: { item: InventoryItem; onClick: () => void }) {
  return (
    <Card
      className="p-4 border-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm leading-tight line-clamp-1 text-foreground">{item.name}</h3>
            <p className="text-xs text-muted-foreground line-clamp-1">{item.source}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Profit</p>
            <p className="text-sm font-bold text-primary">${item.netProfit.max.toFixed(2)}</p>
          </div>

          {item.badge && (
            <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-base">
              {item.badge.value}
            </div>
          )}

          <Badge className="text-[10px] px-2 py-1 bg-primary/10 text-primary border-primary/20">
            {item.condition}
          </Badge>
        </div>
      </div>
    </Card>
  );
}

// Variation 6: Bold Compact Hybrid (Two-Column + Bold Featured)
export function ItemTileBoldCompact({ item, onClick }: { item: InventoryItem; onClick: () => void }) {
  return (
    <Card
      className="p-4 border-border hover:border-primary/40 hover:shadow-md transition-all cursor-pointer bg-gradient-to-br from-card to-primary/5"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        {/* Left: Product Info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30">
            <Package className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base leading-tight line-clamp-1 text-foreground">{item.name}</h3>
            <p className="text-xs text-muted-foreground line-clamp-1 mb-1">{item.source}</p>
            <div className="flex items-center gap-2">
              <Badge className="text-[10px] px-1.5 py-0 bg-card text-foreground border-border">
                {item.condition}
              </Badge>
              <span className="text-xs text-muted-foreground">{item.addedDays}d</span>
            </div>
          </div>
        </div>

        {/* Right: Profit + Score */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Profit Box */}
          <div className="bg-primary/15 rounded-xl px-4 py-2.5 border border-primary/30 min-w-[100px]">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">Profit</p>
            <p className="text-xl font-bold text-primary">${item.netProfit.max.toFixed(2)}</p>
          </div>

          {/* Score Badge */}
          {item.badge && (
            <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-md">
              <span className="text-2xl font-bold leading-none">{item.badge.value}</span>
              <span className="text-[8px] uppercase tracking-wide opacity-90 mt-0.5">{item.badge.text.split(' ')[0]}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

// Showcase component
export function InventoryTileShowcase({ item, onSelect }: {
  item: InventoryItem;
  onSelect: (variation: string) => void;
}) {
  const variations = [
    { id: "bold-compact", name: "Bold Compact Hybrid", component: ItemTileBoldCompact, description: "Two-column layout with bold profit-first styling - RECOMMENDED" },
    { id: "compact", name: "Compact Horizontal", component: ItemTileCompact, description: "Current style - Clean and efficient" },
    { id: "card", name: "Visual Card", component: ItemTileCard, description: "Larger, more visual - Great for browsing" },
    { id: "minimal", name: "Minimal List", component: ItemTileMinimal, description: "Dense and information-focused" },
    { id: "featured", name: "Bold Featured", component: ItemTileFeatured, description: "Eye-catching, profit-first design" },
    { id: "two-column", name: "Two-Column", component: ItemTileTwoColumn, description: "Efficient for wider screens" },
  ];

  return (
    <div className="min-h-screen bg-background dark p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Inventory Tile Variations</h1>
        <p className="text-muted-foreground">Choose the layout that works best for your workflow</p>
      </div>

      <div className="space-y-8">
        {variations.map((variation) => (
          <div key={variation.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{variation.name}</h3>
                <p className="text-sm text-muted-foreground">{variation.description}</p>
              </div>
              <button
                onClick={() => onSelect(variation.id)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Use This Style
              </button>
            </div>
            <variation.component item={item} onClick={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
}
