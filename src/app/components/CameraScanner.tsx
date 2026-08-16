import { useState } from "react";
import { Camera, Image as ImageIcon, Grid3x3, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function CameraScanner({ onCapture, onClose }: { onCapture: () => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-background z-50">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-foreground hover:bg-background/80 backdrop-blur-sm"
          >
            <X className="w-5 h-5 mr-2" />
            Close
          </Button>
          <Button
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Identify
          </Button>
        </div>
      </div>

      {/* Camera Viewfinder Simulation */}
      <div className="relative h-full flex items-center justify-center bg-gradient-to-br from-muted/20 to-muted/40">
        {/* Simulated camera feed */}
        <div className="absolute inset-0 bg-muted/10 backdrop-blur-3xl" />

        {/* Scanning frame */}
        <div className="relative w-80 h-80 max-w-[90vw] max-h-[50vh]">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary rounded-br-2xl" />

          {/* Scanning line animation */}
          <div className="absolute inset-x-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        </div>

        {/* Instructions */}
        <div className="absolute bottom-32 left-0 right-0 text-center px-4">
          <div className="bg-background/80 backdrop-blur-md rounded-xl p-4 max-w-sm mx-auto border border-border">
            <p className="text-sm font-semibold text-foreground mb-1">
              Point at barcode or take a photo
            </p>
            <p className="text-xs text-muted-foreground">
              Barcodes detected automatically
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent">
        <div className="flex items-center justify-center gap-8 mb-4">
          {/* Library */}
          <button className="flex flex-col items-center gap-2 text-foreground hover:text-primary transition-colors">
            <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/40 transition-colors">
              <ImageIcon className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">Library</span>
          </button>

          {/* Capture Button */}
          <button
            onClick={onCapture}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all group-hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-primary-foreground" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping" />
            </div>
            <span className="text-xs font-medium text-foreground">Take a photo or point at barcode</span>
          </button>

          {/* Manual */}
          <button className="flex flex-col items-center gap-2 text-foreground hover:text-primary transition-colors">
            <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/40 transition-colors">
              <Grid3x3 className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">Manual</span>
          </button>
        </div>
      </div>
    </div>
  );
}
