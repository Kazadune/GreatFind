import { ImageWithFallback } from "./figma/ImageWithFallback";

// Full horizontal logo with wordmark
export function GreatFindLogo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src="/src/imports/image_(10).jpg"
      alt="Great Find"
      className={className}
    />
  );
}

// App icon only (square)
export function GreatFindIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img
      src="/src/imports/image_(9).jpg"
      alt="Great Find"
      className={`rounded-xl ${className}`}
    />
  );
}

// Icon without border radius for inline use
export function GreatFindIconRaw({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img
      src="/src/imports/image_(9).jpg"
      alt="Great Find"
      className={className}
    />
  );
}
