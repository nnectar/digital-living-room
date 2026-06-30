import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ImageCarousel } from "@/components/ui/image-carousel";
import type { EventEntry } from "@/lib/content";

interface EventCardProps {
  event: EventEntry;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article
      className={cn(
        "relative rounded-xl border border-border/50 bg-card/50 p-6",
        "border-l-2 border-l-accent",
        "transition-all duration-300",
        "hover:border-border hover:bg-card hover:shadow-sm"
      )}
    >
      {/* Image carousel */}
      {event.images && event.images.length > 0 && (
        <ImageCarousel images={event.images} alt={event.name} />
      )}

      {/* Header: role + year */}
      <div className="mb-3 flex items-center gap-2 font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground">
        <span>{event.role}</span>
        <span className="text-border">/</span>
        <span>{event.year}</span>
        {event.participants && (
          <>
            <span className="text-border">/</span>
            <span>{event.participants} participants</span>
          </>
        )}
      </div>

      {/* Name */}
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-foreground">
        {event.name}
      </h3>

      {/* Organization + City */}
      <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-accent">
        {event.organization}
        {event.city && (
          <span className="text-muted-foreground">
            {" "}
            &middot; {event.city}
          </span>
        )}
      </p>

      {/* Description */}
      <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
        {event.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {event.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-border/50 text-[10px] text-muted-foreground"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}
