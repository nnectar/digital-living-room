import Link from "next/link";
import type { SpeakingEntry } from "@/lib/content";

interface SpeakingPreviewProps {
  speaking: SpeakingEntry[];
}

export function SpeakingPreview({ speaking }: SpeakingPreviewProps) {
  if (!speaking.length) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-baseline justify-between">
        <h2 className="mb-8 font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase">
          Speaking
        </h2>
        <Link
          href="/speaking"
          className="font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground/60 transition-colors hover:text-accent"
        >
          View all &rarr;
        </Link>
      </div>
      <div className="space-y-0">
        {speaking.map((entry, i) => (
          <div
            key={entry.id}
            className="flex items-baseline gap-4 border-b border-border/30 py-4 first:border-t first:border-border/30"
          >
            <span className="font-[family-name:var(--font-body)] text-xs tabular-nums text-muted-foreground/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <span className="font-[family-name:var(--font-heading)] text-base font-medium tracking-tight text-foreground md:text-lg">
                {entry.name}
              </span>
              <span className="ml-2 font-[family-name:var(--font-body)] text-xs tracking-wide text-accent">
                {entry.role}
              </span>
            </div>
            <span className="hidden font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground sm:inline">
              {entry.city}
            </span>
            <span className="font-[family-name:var(--font-body)] text-xs tabular-nums text-muted-foreground/60">
              {entry.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
