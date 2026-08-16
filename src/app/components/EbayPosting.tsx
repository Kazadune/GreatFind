import { useState } from "react";
import { ChevronLeft, ChevronDown, ChevronUp, Camera, Image as ImageIcon, Trash2, ShoppingBag, Gavel } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

interface EbayPostingProps {
  onBack: () => void;
  onPost: () => void;
}

export function EbayPosting({ onBack, onPost }: EbayPostingProps) {
  const [format, setFormat] = useState<"buy-it-now" | "auction">("buy-it-now");
  const [condition, setCondition] = useState("new");
  const [price, setPrice] = useState("12.00");
  const [quantity, setQuantity] = useState("1");
  const [duration, setDuration] = useState("good-til-cancelled");
  const [allowBestOffer, setAllowBestOffer] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    policies: false,
    promoted: false,
    listingOptions: true,
    itemSpecifics: false,
    photos: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-background dark">
      <div className="max-w-md mx-auto pb-32">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-foreground hover:bg-primary/10 -ml-2"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </Button>
            <h1 className="text-xl font-semibold text-foreground">Post to eBay</h1>
            <div className="w-16" />
          </div>
        </div>

        <div className="px-4 pt-4 space-y-3">
          {/* Format */}
          <Card className="p-4 border-border bg-card">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Format
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setFormat("buy-it-now")}
                className={`flex-1 px-4 py-2.5 rounded-lg border-2 font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                  format === "buy-it-now"
                    ? "bg-primary/20 border-primary text-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                Buy It Now
              </button>
              <button
                onClick={() => setFormat("auction")}
                className={`flex-1 px-4 py-2.5 rounded-lg border-2 font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                  format === "auction"
                    ? "bg-primary/20 border-primary text-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                <Gavel className="w-4 h-4" />
                Auction
              </button>
            </div>
          </Card>

          {/* Title */}
          <Card className="p-4 border-border bg-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Title (max 80 chars)
              </h3>
              <span className="text-xs text-muted-foreground">80/80</span>
            </div>
            <Input
              defaultValue="Immuneti Immuneti Advanced Immune Defe..."
              className="bg-background border-border text-foreground"
            />
          </Card>

          {/* Price */}
          <Card className="p-4 border-border bg-card">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Price
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-semibold text-foreground">$</span>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="flex-1 text-3xl font-semibold bg-background border-border text-foreground h-auto px-3 py-2"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Suggested: $12.00</p>
          </Card>

          {/* Listing Options */}
          <Card className="p-4 border-border bg-card">
            <button
              onClick={() => toggleSection("listingOptions")}
              className="w-full flex items-center justify-between mb-3"
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Listing Options
              </h3>
              {expandedSections.listingOptions ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>

            {expandedSections.listingOptions && (
              <div className="space-y-4">
                {/* Quantity */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Quantity
                  </h4>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="bg-background border-border text-foreground"
                  />
                </div>

                {/* Duration */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Duration
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setDuration("good-til-cancelled")}
                      className={`flex-1 px-3 py-2 rounded-lg border-2 text-xs font-medium transition-all ${
                        duration === "good-til-cancelled"
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-card border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      Good Til Cancelled
                    </button>
                    <button
                      onClick={() => setDuration("7-days")}
                      className={`px-4 py-2 rounded-lg border-2 text-xs font-medium transition-all ${
                        duration === "7-days"
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-card border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      7 days
                    </button>
                    <button
                      onClick={() => setDuration("10-days")}
                      className={`px-4 py-2 rounded-lg border-2 text-xs font-medium transition-all ${
                        duration === "10-days"
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-card border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      10 days
                    </button>
                  </div>
                </div>

                {/* Allow Best Offer */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Allow Best Offer</h4>
                    <p className="text-xs text-muted-foreground">Buyers can negotiate price</p>
                  </div>
                  <button
                    onClick={() => setAllowBestOffer(!allowBestOffer)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      allowBestOffer ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                        allowBestOffer ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Category */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Category
                  </h4>
                  <Input
                    placeholder="Search eBay categories..."
                    className="bg-background border-border text-foreground mb-2"
                  />
                  <p className="text-xs text-muted-foreground mb-2">Quick picks</p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all">
                      Consumer Electronics
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all">
                      Cell Phones & Accessories
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Falls back to "Everything Else" if not chosen
                  </p>
                </div>
              </div>
            )}
          </Card>

          {/* Policies & Location */}
          <Card className="p-4 border-border bg-card">
            <button
              onClick={() => toggleSection("policies")}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Policies & Location
              </h3>
              {expandedSections.policies ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            {!expandedSections.policies && (
              <p className="text-xs text-muted-foreground mt-1">
                Falls back to "Everything Else" if not chosen
              </p>
            )}
          </Card>

          {/* Promoted Listings */}
          <Card className="p-4 border-border bg-card">
            <button
              onClick={() => toggleSection("promoted")}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Promoted Listings
              </h3>
              {expandedSections.promoted ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </Card>

          {/* Condition */}
          <Card className="p-4 border-border bg-card">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Condition
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {["new", "like-new", "very-good", "good", "acceptable"].map((cond) => (
                <button
                  key={cond}
                  onClick={() => setCondition(cond)}
                  className={`px-4 py-2 rounded-full border-2 text-sm font-medium whitespace-nowrap transition-all ${
                    condition === cond
                      ? "bg-primary/20 border-primary text-primary"
                      : "bg-card border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {cond.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                </button>
              ))}
            </div>

            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2">
              Condition Note
            </h4>
            <textarea
              className="w-full p-3 rounded-lg bg-background border border-border text-foreground text-sm min-h-[100px] resize-none"
              defaultValue="Item is in new condition. Label intact; bottle cap present; packaging appears unopened/no visible damage, but expiration date not visible."
            />
          </Card>

          {/* Description */}
          <Card className="p-4 border-border bg-card">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Description
            </h3>
            <textarea
              className="w-full p-3 rounded-lg bg-background border border-border text-foreground text-sm min-h-[250px] resize-none"
              defaultValue={`Immuneti Advanced Immune Defense Dietary Supplement – Vitamin C Zinc D3 Garlic Elderberry Echinacea.

Condition: Label intact; bottle cap present; packaging appears unopened/no visible damage, but expiration date not visible.
Features: Ingredients listed on label: Vitamin C, Zinc, Vitamin D3, Garlic Bulb, Elderberry, Echinacea, 60 vegetarian capsules, Doctor formulated dietary supplement, Made in USA (label indicates)
Notes: Dietary supplement, not FDA-approved as a medicine; Expiration date not visible; verify before resale; Check for authenticity and packaging integrity to avoid counterfeits

Condition: new
Label intact; bottle cap present; packaging appears unopened/no visible damage, but expiration date not visible.

Please review all photos carefully before purchasing`}
            />
          </Card>

          {/* Item Specifics */}
          <Card className="p-4 border-border bg-card">
            <button
              onClick={() => toggleSection("itemSpecifics")}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Item Specifics
              </h3>
              {expandedSections.itemSpecifics ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </Card>

          {/* Photos */}
          <Card className="p-4 border-border bg-card">
            <button
              onClick={() => toggleSection("photos")}
              className="w-full flex items-center justify-between mb-3"
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Photos (1) — first photo is the main image
              </h3>
              {expandedSections.photos ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>

            {expandedSections.photos && (
              <div className="space-y-3">
                {/* Main Photo */}
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground">Main Photo</h4>
                    <p className="text-xs text-primary">AI Prepare</p>
                  </div>
                  <button className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Camera & Library Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-primary/10 hover:border-primary/30"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Camera
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-primary/10 hover:border-primary/30"
                  >
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Library
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Fixed Bottom Actions */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
          <div className="max-w-md mx-auto space-y-2">
            <Button
              onClick={onPost}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold py-6"
            >
              Post to eBay (Buy It Now)
            </Button>
            <Button
              variant="outline"
              className="w-full border-border text-foreground hover:bg-muted text-base py-6"
            >
              Regenerate Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
