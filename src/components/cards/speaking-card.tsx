import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { SpeakingEntry } from "@/lib/content";

interface SpeakingCardProps {
  entry: SpeakingEntry;
}

export function SpeakingCard({ entry }: SpeakingCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-xl border border-border/50 bg-card/50",
        "border-l-2 border-l-accent",
        "transition-all duration-300",
        "hover:border-border hover:bg-card hover:shadow-sm"
      )}
    >
      {/* Photos */}
      {entry.images.length > 0 && (
        <div
          className={cn(
            "grid gap-0.5",
            entry.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
          )}
        >
          {entry.images.map((src) => (
            <div key={src} className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={src}
                alt={`${entry.name} — ${entry.city} ${entry.year}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Header: role + city + year */}
        <div className="mb-3 flex items-center gap-2 font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground">
          <span>{entry.role}</span>
          <span className="text-border">/</span>
          <span>{entry.city}</span>
          <span className="text-border">/</span>
          <span>{entry.year}</span>
        </div>

        {/* Name */}
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
          {entry.name}
        </h3>

        {/* Related orgs */}
        {entry.relatedOrgs && entry.relatedOrgs.length > 0 && (
          <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-accent">
            {entry.relatedOrgs.join(", ")}
          </p>
        )}

        {/* Description */}
        <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
          {entry.description}
        </p>

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
      </div>
    </article>
  );
}
