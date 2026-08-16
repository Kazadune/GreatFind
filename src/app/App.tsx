import { useState } from "react";
import { Search, SlidersHorizontal, Package, DollarSign, TrendingUp, Sparkles, Settings, Camera, Scan, FolderOpen, Plus, Layers, ChevronRight, Wallet, Archive } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import { Card } from "./components/ui/card";
import { LogoIcon, LogoWordmark, LogoIconSimple } from "./components/Logo";
import { LogoShowcase } from "./components/LogoShowcase";
import { EagleLogoShowcase } from "./components/EagleLensVariations";
import { BaldEagleLogoShowcase } from "./components/BaldEagleLogoVariations";
import { GreatFindLogo, GreatFindIcon, GreatFindIconRaw } from "./components/BrandLogo";
import { GreatFindLogoSVG, GreatFindLogoHorizontal } from "./components/GreatFindLogo";
import { InventoryTileShowcase } from "./components/InventoryTileVariations";
import { ScoreDisplayShowcase } from "./components/ScoreDisplayVariations";
import { CameraScanner } from "./components/CameraScanner";
import { ItemIdentification } from "./components/ItemIdentification";
import { EvaluationLoading } from "./components/EvaluationLoading";
import { EvaluationResults } from "./components/EvaluationResults";
import { Settings as SettingsPage } from "./components/Settings";
import { AIUsageDetails } from "./components/AIUsageDetails";
import { EbayPosting } from "./components/EbayPosting";
import { EvaluationDiagnostics } from "./components/EvaluationDiagnostics";

interface InventoryItem {
  id: string;
  name: string;
  source: string;
  image: string;
  purchasePrice: number;
  condition: string;
  status: "ready" | "learning" | "strong-buy";
  netProfit: { min: number; max: number };
  badge?: { text: string; value: string };
  addedDays: number;
}

interface Folder {
  id: string;
  name: string;
  itemCount: number;
  color: string;
}

const mockItems: InventoryItem[] = [
  {
    id: "1",
    name: "Portuguese Flor De Sal",
    source: "Trader Joe's",
    image: "/api/placeholder/80/80",
    purchasePrice: 0,
    condition: "New",
    status: "ready",
    netProfit: { min: 5.1, max: 10.2 },
    badge: { text: "Buy", value: "79" },
    addedDays: 1,
  },
  {
    id: "2",
    name: "Dr Pepper Cream Soda Zero Sugar, Limited Edition",
    source: "Dr Pepper",
    image: "/api/placeholder/80/80",
    purchasePrice: 0,
    condition: "New",
    status: "ready",
    netProfit: { min: 2.55, max: 5.05 },
    badge: { text: "Learning", value: "62" },
    addedDays: 2,
  },
  {
    id: "3",
    name: "DRNX Ginger Lime Energy Drink Bottle, 12oz",
    source: "DRNX",
    image: "/api/placeholder/80/80",
    purchasePrice: 0,
    condition: "New",
    status: "strong-buy",
    netProfit: { min: 8.5, max: 12.3 },
    badge: { text: "Strong Buy", value: "89" },
    addedDays: 6,
  },
];

const mockFolders: Folder[] = [
  { id: "1", name: "test", itemCount: 1, color: "primary" },
  { id: "2", name: "books", itemCount: 0, color: "primary" },
  { id: "3", name: "dog stuff", itemCount: 1, color: "primary" },
];

export default function App() {
  const [view, setView] = useState<"logos" | "home" | "inventory" | "evaluation" | "evaluation-loading" | "tile-options" | "score-options" | "camera" | "item-details" | "settings" | "ai-usage" | "ebay-posting" | "diagnostics">("home");
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background dark">
      {view === "logos" ? (
        <BaldEagleLogoShowcase onSelect={(id) => {
          console.log("Selected logo:", id);
          setView("home");
        }} />
      ) : view === "tile-options" ? (
        <InventoryTileShowcase
          item={mockItems[0]}
          onSelect={(id) => {
            console.log("Selected tile:", id);
            setView("score-options");
          }}
        />
      ) : view === "score-options" ? (
        <ScoreDisplayShowcase
          onSelect={(id) => {
            console.log("Selected score:", id);
            setView("home");
          }}
        />
      ) : view === "camera" ? (
        <CameraScanner
          onCapture={() => setView("item-details")}
          onClose={() => setView("home")}
        />
      ) : view === "item-details" ? (
        <ItemIdentification
          onEvaluate={() => {
            setView("evaluation-loading");
            setTimeout(() => setView("evaluation"), 2000);
          }}
          onCancel={() => setView("home")}
        />
      ) : view === "evaluation-loading" ? (
        <EvaluationLoading />
      ) : view === "settings" ? (
        <SettingsPage
          onBack={() => setView("home")}
          onNavigateToDiagnostics={() => setView("diagnostics")}
        />
      ) : view === "diagnostics" ? (
        <EvaluationDiagnostics onBack={() => setView("settings")} />
      ) : view === "ai-usage" ? (
        <AIUsageDetails onClose={() => setView("home")} />
      ) : view === "ebay-posting" ? (
        <EbayPosting
          onBack={() => setView("evaluation")}
          onPost={() => {
            console.log("Posted to eBay");
            setView("inventory");
          }}
        />
      ) : view === "home" ? (
        <Home
          onNavigate={(to) => setView(to)}
          onFolderClick={(folderId) => {
            setSelectedFolder(folderId);
            setView("inventory");
          }}
        />
      ) : view === "inventory" ? (
        <Inventory
          onItemClick={(item) => {
            setSelectedItem(item);
            setView("evaluation-loading");
            setTimeout(() => setView("evaluation"), 2000);
          }}
          onBack={() => {
            setSelectedFolder(null);
            setView("home");
          }}
          onSettings={() => setView("settings")}
          selectedFolder={selectedFolder}
          onClearFolder={() => setSelectedFolder(null)}
        />
      ) : view === "evaluation" ? (
        <EvaluationResults
          onAddToInventory={() => setView("inventory")}
          onReEvaluate={() => {
            setView("evaluation-loading");
            setTimeout(() => setView("evaluation"), 2000);
          }}
          onDiscard={() => setView("home")}
          onBack={() => setView("inventory")}
          onPostToEbay={() => setView("ebay-posting")}
        />
      ) : null}
    </div>
  );
}

function Home({
  onNavigate,
  onFolderClick
}: {
  onNavigate: (view: "home" | "inventory" | "evaluation" | "camera" | "settings" | "ai-usage") => void;
  onFolderClick: (folderId: string) => void;
}) {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background">
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex-1">
            <GreatFindLogoSVG className="h-12 mb-2" />
            <p className="text-xs text-muted-foreground">russell.d.whitney@gmail.com</p>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" onClick={() => onNavigate("settings")}>
            <Settings className="w-5 h-5 text-foreground" />
          </Button>
        </div>

        {/* Wallet Info */}
        <div
          className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20 group cursor-pointer hover:bg-primary/15 hover:border-primary/30 transition-all"
          onClick={() => onNavigate("ai-usage")}
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
              <Wallet className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-foreground/80">82,177 tokens · 39 calls · $0.0210</span>
            <ChevronRight className="w-3.5 h-3.5 ml-auto text-primary group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Identify Section */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Identify your Item</h2>
          <div className="space-y-2">
            <Card
              className="p-4 border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group"
              onClick={() => onNavigate("camera")}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Scan className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Identify Item</h3>
                  <p className="text-xs text-muted-foreground">Barcode auto-detect + photo AI</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Card>

            <Card
              className="p-4 border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group"
              onClick={() => {}}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Group Identify</h3>
                  <p className="text-xs text-muted-foreground">Multiple items at once</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Card>
          </div>
        </section>

        {/* Inventory Summary */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Inventory Summary</h2>
          <div className="grid grid-cols-4 gap-2.5 mb-3">
            <StatCard icon={Package} label="ITEMS" value="7" className="text-primary" />
            <StatCard icon={DollarSign} label="RESALE" value="$97" className="text-primary" />
            <StatCard icon={DollarSign} label="COST" value="$0" className="text-primary" />
            <StatCard icon={TrendingUp} label="AVG MARGIN" value="+88%" className="text-primary" />
          </div>
          <Button
            variant="outline"
            className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-foreground hover:text-primary transition-colors"
            onClick={() => onNavigate("inventory")}
          >
            <Archive className="w-4 h-4 mr-2 text-primary" />
            Inventory Bucket
          </Button>
        </section>

        {/* Your Folders */}
        <section className="pb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Your Folders</h2>
          <div className="grid grid-cols-4 gap-2">
            {mockFolders.map((folder) => (
              <FolderCard key={folder.id} folder={folder} onClick={() => onFolderClick(folder.id)} />
            ))}
            <button className="aspect-square p-2 rounded-xl border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary">
              <Plus className="w-5 h-5" />
              <span className="text-xs font-medium text-center">New</span>
            </button>
          </div>
        </section>

        {/* Footer Info */}
        <div className="text-center pb-4">
          <p className="text-xs text-muted-foreground">
            dev · v1.8.0 (5) · selected · prod
          </p>
        </div>
      </div>
    </div>
  );
}

function Inventory({
  onItemClick,
  onBack,
  onSettings,
  selectedFolder,
  onClearFolder
}: {
  onItemClick: (item: InventoryItem) => void;
  onBack: () => void;
  onSettings: () => void;
  selectedFolder: string | null;
  onClearFolder: () => void;
}) {
  // Filter items by folder if one is selected
  const filteredItems = selectedFolder
    ? mockItems.filter(item => item.id === "1") // Mock: only show first item for "test" folder
    : mockItems;

  const folderData = selectedFolder
    ? mockFolders.find(f => f.id === selectedFolder)
    : null;
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onBack} className="px-2 text-foreground hover:bg-primary/10 hover:text-primary">
              ← Home
            </Button>
            <h1 className="text-xl font-semibold text-foreground">Inventory</h1>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" onClick={onSettings}>
            <Settings className="w-5 h-5 text-foreground" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2.5 mb-3">
          <StatCard icon={Package} label="ITEMS" value={selectedFolder ? "1" : "4"} className="text-primary" />
          <StatCard icon={DollarSign} label="RESALE" value={selectedFolder ? "$22" : "$50"} className="text-primary" />
          <StatCard icon={DollarSign} label="COST" value="$0" className="text-primary" />
          <StatCard icon={TrendingUp} label="AVG MARGIN" value={selectedFolder ? "+81%" : "+89%"} className="text-primary" />
        </div>

        {/* Selected Folder Chip */}
        {selectedFolder && folderData && (
          <div className="mb-3 flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/30">
              <FolderOpen className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-medium text-primary">{folderData.name}</span>
              <button
                onClick={onClearFolder}
                className="ml-1 hover:bg-primary/20 rounded-full p-0.5 transition-colors"
              >
                <span className="text-primary text-lg leading-none">×</span>
              </button>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Scan Item
          </Button>
          <Button size="sm" variant="outline" className="flex-1 border-border hover:bg-primary/10 hover:text-primary hover:border-primary/40">
            <Plus className="w-4 h-4 mr-2" />
            Add Manual
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="p-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            className="pl-10 bg-card border-border rounded-xl"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <FilterPill active>Newest</FilterPill>
          <FilterPill>Oldest</FilterPill>
          <FilterPill>Price: High</FilterPill>
          <FilterPill>Price: Low</FilterPill>
          <FilterPill>Top Profit</FilterPill>
        </div>
      </div>

      {/* Item List */}
      <div className="px-4 pb-24 space-y-3">
        {filteredItems.map((item, index) => (
          <ItemCard key={item.id} item={item} onClick={() => onItemClick(item)} index={index} />
        ))}
      </div>

      {/* Scan to Folder Button - Only show when folder is selected */}
      {selectedFolder && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent">
          <div className="max-w-md mx-auto">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg py-6 text-base font-semibold">
              <Camera className="w-5 h-5 mr-2" />
              Scan to Folder
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}


function StatCard({ icon: Icon, label, value, className }: {
  icon: any;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="bg-card rounded-xl p-2.5 border border-border shadow-sm">
      <div className="flex items-center justify-center mb-1">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <p className="text-[10px] text-foreground text-center mb-0.5 uppercase tracking-wide">{label}</p>
      <p className={`text-sm font-bold text-center ${className || "text-primary"}`}>{value}</p>
    </div>
  );
}

function FilterPill({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-card border border-border text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30"
      }`}
    >
      {children}
    </button>
  );
}

function FolderCard({ folder, onClick }: { folder: Folder; onClick: () => void }) {
  return (
    <Card
      className="aspect-square p-2 border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="h-full flex flex-col items-center justify-center text-center">
        <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-1.5">
          <FolderOpen className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-semibold text-xs text-foreground line-clamp-2 mb-0.5 leading-tight">{folder.name}</h3>
        <p className="text-[10px] text-muted-foreground">{folder.itemCount} items</p>
      </div>
    </Card>
  );
}

function ItemCard({ item, onClick, index }: { item: InventoryItem; onClick: () => void; index: number }) {
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
            <h3 className="font-bold text-sm leading-tight line-clamp-2 text-foreground mb-1">{item.name}</h3>
            <p className="text-xs text-muted-foreground mb-1">{item.source}</p>
            <div className="flex items-center gap-2">
              <Badge className="text-[10px] px-1.5 py-0 bg-card text-foreground border-border">
                {item.condition}
              </Badge>
              <span className="text-xs text-muted-foreground">{item.addedDays}d</span>
            </div>
          </div>
        </div>

        {/* Right: Profit + Score */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Profit Box */}
          <div className="bg-primary/15 rounded-lg px-2.5 py-1.5 border border-primary/30 min-w-[70px]">
            <p className="text-[8px] text-muted-foreground uppercase tracking-wide leading-none mb-1">Profit</p>
            <p className="text-base font-bold text-primary leading-none">${item.netProfit.max.toFixed(2)}</p>
          </div>

          {/* Score Badge */}
          {item.badge && (
            <div className="w-11 h-11 rounded-lg bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-md">
              <span className="text-lg font-bold leading-none">{item.badge.value}</span>
              <span className="text-[7px] uppercase tracking-wide opacity-90 mt-0.5 leading-none">{item.badge.text.split(' ')[0]}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

