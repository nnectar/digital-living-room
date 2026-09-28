import Link from "next/link";
import type { EventEntry } from "@/lib/content";

interface EventsPreviewProps {
  events: EventEntry[];
}

export function EventsPreview({ events }: EventsPreviewProps) {
  if (!events.length) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-baseline justify-between">
        <h2 className="mb-8 font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase">
          Events
        </h2>
        <Link
          href="/events"
          className="font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground/60 transition-colors hover:text-accent"
        >
          View all &rarr;
        </Link>
      </div>
      <div className="space-y-0">
        {events.map((event, i) => (
          <div
            key={event.id}
            className="flex items-baseline gap-4 border-b border-border/30 py-4 first:border-t first:border-border/30"
          >
            <span className="font-[family-name:var(--font-body)] text-xs tabular-nums text-muted-foreground/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <span className="font-[family-name:var(--font-heading)] text-base font-medium tracking-tight text-foreground md:text-lg">
                {event.name}
              </span>
              <span className="ml-2 font-[family-name:var(--font-body)] text-xs tracking-wide text-accent">
                {event.role}
              </span>
            </div>
            <span className="hidden font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground sm:inline">
              {event.city}
            </span>
            <span className="font-[family-name:var(--font-body)] text-xs tabular-nums text-muted-foreground/60">
              {event.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
