import Link from "next/link";
import type { WritingEntry } from "@/lib/content";

interface ContentPreviewProps {
  writing: WritingEntry[];
}

export function ContentPreview({ writing }: ContentPreviewProps) {
  if (!writing.length) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-baseline justify-between">
        <h2 className="mb-8 font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase">
          Content
        </h2>
        <Link
          href="/writing"
          className="font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground/60 transition-colors hover:text-accent"
        >
          View all &rarr;
        </Link>
      </div>
      <div className="space-y-0">
        {writing.map((entry, i) => (
          <a
            key={entry.id}
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline gap-4 border-b border-border/30 py-4 transition-colors hover:border-border first:border-t first:border-border/30 first:hover:border-border"
          >
            <span className="font-[family-name:var(--font-body)] text-xs tabular-nums text-muted-foreground/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-[family-name:var(--font-heading)] text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-accent md:text-lg">
              {entry.title}
            </span>
            <span className="hidden font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground sm:inline">
              {entry.tag}
            </span>
            <span className="font-[family-name:var(--font-body)] text-xs tabular-nums text-muted-foreground/60">
              {new Date(entry.date).getFullYear()}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
