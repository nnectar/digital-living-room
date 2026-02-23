import { cn } from "@/lib/utils";

interface GlyphIconProps {
  glyph: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
};

export function GlyphIcon({ glyph, className, size = "md" }: GlyphIconProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center leading-none select-none",
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    >
      {glyph}
    </span>
  );
}
