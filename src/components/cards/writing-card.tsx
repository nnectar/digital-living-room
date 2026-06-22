import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { WritingEntry } from "@/lib/content";

interface WritingCardProps {
  entry: WritingEntry;
}

export function WritingCard({ entry }: WritingCardProps) {
  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article
        className={cn(
          "relative rounded-xl border border-border/50 bg-card/50 p-6",
          "border-l-2 border-l-accent",
          "transition-all duration-300",
          "hover:border-border hover:bg-card hover:shadow-sm",
          "hover:-translate-y-0.5"
        )}
      >
        {/* Header: tag + date */}
        <div className="mb-3 flex items-center gap-2 font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground">
          <Badge
            variant="outline"
            className="text-[10px] border-accent/30 text-accent"
          >
            {entry.tag}
          </Badge>
          <span className="ml-auto">{entry.date}</span>
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-accent",
            entry.tag === "poetry" && "italic"
          )}
        >
          {entry.title}
        </h3>

        {/* Description */}
        {entry.description && (
          <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {entry.description}
          </p>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-border/50 text-[10px] text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Read arrow */}
        <span className="mt-4 inline-block font-[family-name:var(--font-body)] text-xs tracking-widest text-accent uppercase opacity-0 transition-opacity group-hover:opacity-100">
          Read &rarr;
        </span>
      </article>
    </a>
  );
}
