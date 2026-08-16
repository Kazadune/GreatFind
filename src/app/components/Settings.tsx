import { useState } from "react";
import { ChevronRight, Moon, Mail, Calendar, Download, Trash2, Eye, Bug } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

interface SettingsProps {
  onBack: () => void;
  onNavigateToDiagnostics?: () => void;
}

export function Settings({ onBack, onNavigateToDiagnostics }: SettingsProps) {
  const [minimumProfitMargin, setMinimumProfitMargin] = useState("35");
  const [minimumProfitFloor, setMinimumProfitFloor] = useState("3.00");
  const [preferredChannel, setPreferredChannel] = useState("eBay");
  const [defaultPlatformFee, setDefaultPlatformFee] = useState("13");
  const [booksShipping, setBooksShipping] = useState("4.50");
  const [smallItemsShipping, setSmallItemsShipping] = useState("6.00");
  const [mediumItemsShipping, setMediumItemsShipping] = useState("9.00");
  const [largeItemsShipping, setLargeItemsShipping] = useState("15.00");
  const [darkMode, setDarkMode] = useState(true);

  const resetToDefaults = () => {
    setMinimumProfitMargin("35");
    setMinimumProfitFloor("3.00");
    setPreferredChannel("eBay");
    setDefaultPlatformFee("13");
    setBooksShipping("4.50");
    setSmallItemsShipping("6.00");
    setMediumItemsShipping("9.00");
    setLargeItemsShipping("15.00");
  };

  return (
    <div className="min-h-screen bg-background dark">
      <div className="max-w-md mx-auto pb-6">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-lg border-b border-border px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={onBack} className="text-foreground hover:bg-primary/10">
              ← Home
            </Button>
            <h2 className="font-semibold text-foreground">Settings</h2>
            <div className="w-16" />
          </div>
        </div>

        <div className="px-4 pt-3 space-y-4">
          {/* Account Section */}
          <section>
            <h3 className="text-sm font-semibold text-foreground mb-2">Account</h3>
            <Card className="p-3 border-border bg-card">
              <button className="w-full flex items-center justify-between group">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <div className="text-left">
                    <p className="text-[10px] text-muted-foreground uppercase leading-none mb-0.5">Email</p>
                    <p className="text-sm text-foreground">russell.d.whitney@gmail.com</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>

              <div className="flex items-center gap-2.5 pt-2.5 mt-2.5 border-t border-border">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase leading-none mb-0.5">Member Since</p>
                  <p className="text-sm text-foreground">January 19, 2026</p>
                </div>
              </div>
            </Card>

            <Card className="mt-2 border-border bg-card">
              <button className="w-full p-3 flex items-center justify-between group hover:bg-muted/10 transition-colors rounded-t-xl">
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-primary" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground leading-none mb-0.5">Export My Data</p>
                    <p className="text-xs text-muted-foreground m-0">Download your items and photos</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>

              <div className="border-t border-border" />

              <button className="w-full p-3 flex items-center justify-between group hover:bg-destructive/5 transition-colors rounded-b-xl">
                <div className="flex items-center gap-2.5">
                  <Trash2 className="w-4 h-4 text-destructive" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-destructive leading-none mb-0.5">Delete Account</p>
                    <p className="text-xs text-muted-foreground m-0">Permanently remove your data</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-destructive transition-colors" />
              </button>
            </Card>
          </section>

          {/* Appearance */}
          <section>
            <h3 className="text-sm font-semibold text-foreground mb-2">Appearance</h3>
            <Card className="p-3 border-border bg-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Moon className="w-4 h-4 text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground leading-none mb-0.5">Dark Mode</p>
                    <p className="text-xs text-muted-foreground m-0">Use dark color scheme</p>
                  </div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    darkMode ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                      darkMode ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </Card>
          </section>

          {/* Connected Accounts */}
          <section>
            <h3 className="text-sm font-semibold text-foreground mb-2">Connected Accounts</h3>
            <Card className="p-3 border-border bg-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">eb</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground leading-none mb-0.5">eBay</p>
                    <p className="text-xs text-muted-foreground m-0">Not connected</p>
                  </div>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-4">
                  Connect
                </Button>
              </div>
            </Card>
          </section>

          {/* Profit Thresholds */}
          <section>
            <h3 className="text-sm font-semibold text-foreground mb-2">Profit Thresholds</h3>
            <Card className="p-3 border-border bg-card">
              <div>
                <label className="text-sm text-foreground block leading-none mb-0.5">
                  Minimum Profit Margin
                </label>
                <p className="text-xs text-muted-foreground leading-tight m-0 mb-2">
                  Minimum ROI on purchase price (e.g. 35% on a $10 item = $3.50 profit)
                </p>
                <div className="relative">
                  <Input
                    type="number"
                    value={minimumProfitMargin}
                    onChange={(e) => setMinimumProfitMargin(e.target.value)}
                    className="bg-input-background border-border text-foreground pr-8"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                </div>
              </div>

              <div className="mt-3">
                <label className="text-sm text-foreground block leading-none mb-0.5">
                  Minimum Profit Floor
                </label>
                <p className="text-xs text-muted-foreground leading-tight m-0 mb-2">
                  Absolute minimum profit regardless of margin (prevents low-dollar BUY signals)
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input
                    type="number"
                    step="0.01"
                    value={minimumProfitFloor}
                    onChange={(e) => setMinimumProfitFloor(e.target.value)}
                    className="bg-input-background border-border text-foreground pl-8"
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* Platform Settings */}
          <section>
            <h3 className="text-sm font-semibold text-foreground mb-2">Platform Settings</h3>
            <Card className="p-3 border-border bg-card">
              <div>
                <label className="text-sm text-foreground block leading-none mb-2">
                  Preferred Sales Channel
                </label>
                <select
                  value={preferredChannel}
                  onChange={(e) => setPreferredChannel(e.target.value)}
                  className="w-full px-3 py-2 bg-input-background border border-border rounded-lg text-foreground text-sm"
                >
                  <option value="eBay">eBay</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Whatnot">Whatnot</option>
                </select>
              </div>

              <div className="mt-3">
                <label className="text-sm text-foreground block leading-none mb-2">
                  Default Platform Fee
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    value={defaultPlatformFee}
                    onChange={(e) => setDefaultPlatformFee(e.target.value)}
                    className="bg-input-background border-border text-foreground pr-8"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Shipping Estimates */}
          <section>
            <h3 className="text-sm font-semibold text-foreground mb-2">Shipping Estimates</h3>
            <Card className="p-3 border-border bg-card">
              <div>
                <label className="text-sm text-muted-foreground block leading-none mb-2">
                  Books (Media Mail)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input
                    type="number"
                    step="0.01"
                    value={booksShipping}
                    onChange={(e) => setBooksShipping(e.target.value)}
                    className="bg-input-background border-border text-foreground pl-8"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="text-sm text-muted-foreground block leading-none mb-2">
                  Small Items
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input
                    type="number"
                    step="0.01"
                    value={smallItemsShipping}
                    onChange={(e) => setSmallItemsShipping(e.target.value)}
                    className="bg-input-background border-border text-foreground pl-8"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="text-sm text-muted-foreground block leading-none mb-2">
                  Medium Items
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input
                    type="number"
                    step="0.01"
                    value={mediumItemsShipping}
                    onChange={(e) => setMediumItemsShipping(e.target.value)}
                    className="bg-input-background border-border text-foreground pl-8"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="text-sm text-muted-foreground block leading-none mb-2">
                  Large Items
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input
                    type="number"
                    step="0.01"
                    value={largeItemsShipping}
                    onChange={(e) => setLargeItemsShipping(e.target.value)}
                    className="bg-input-background border-border text-foreground pl-8"
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* Developer Section */}
          <section>
            <h3 className="text-sm font-semibold text-foreground mb-2">Developer</h3>
            <Card className="border-border bg-card">
              <button
                onClick={onNavigateToDiagnostics}
                className="w-full p-3 flex items-center justify-between group hover:bg-muted/10 transition-colors rounded-xl"
              >
                <div className="flex items-center gap-2.5">
                  <Bug className="w-4 h-4 text-muted-foreground" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground leading-none mb-0.5">Evaluation Diagnostics</p>
                    <p className="text-xs text-muted-foreground m-0">10 of last 20 captured</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </Card>
          </section>

          {/* Action Buttons */}
          <div className="space-y-2 pb-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg py-5 text-base font-semibold">
              Save Settings
            </Button>
            <Button
              onClick={resetToDefaults}
              variant="outline"
              className="w-full border-border text-foreground hover:bg-muted py-5 text-base"
            >
              Reset to Defaults
            </Button>
            <Button
              variant="outline"
              className="w-full border-destructive/30 text-destructive hover:bg-destructive/10 hover:border-destructive/50 py-5 text-base"
            >
              Sign Out
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center pb-4">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Eye className="w-3 h-3" />
              Aquila v1.0.0 (5)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
