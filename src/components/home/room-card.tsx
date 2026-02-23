import Link from "next/link";
import { cn } from "@/lib/utils";
import { GlyphIcon } from "@/components/shared/glyph-icon";
import type { MoodConfig } from "@/lib/moods";

interface RoomCardProps {
  section: MoodConfig;
}

export function RoomCard({ section }: RoomCardProps) {
  return (
    <Link href={section.href} className="group block">
      <div
        data-mood={section.mood}
        className={cn(
          "relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6",
          "transition-all duration-300",
          "hover:border-accent/30 hover:bg-card hover:shadow-sm",
          "hover:-translate-y-0.5"
        )}
        style={{
          transform: `rotate(var(--card-rotate, 0deg))`,
        }}
      >
        {/* Glyph */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
          <GlyphIcon glyph={section.glyph} size="lg" />
        </div>

        {/* Label */}
        <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-foreground">
          {section.label}
        </h3>

        {/* Description */}
        <p className="mt-1 font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground">
          {section.description}
        </p>

        {/* Arrow hint */}
        <span className="absolute right-4 top-4 text-muted-foreground/0 transition-all duration-300 group-hover:text-muted-foreground/50 group-hover:translate-x-0.5">
          {"\u2192"}
        </span>
      </div>
    </Link>
  );
}
