import type { Metadata } from "next";
import { SectionLayout } from "@/components/layout/section-layout";
import { EventCard } from "@/components/cards/event-card";
import { getEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Hackathons, builder houses, and activations I've produced.",
};

export default function EventsPage() {
  const events = getEvents();

  const eras = Array.from(new Set(events.map((e) => e.era)));

  return (
    <SectionLayout mood="events">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Section header */}
        <div className="mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Events
          </h1>
          <p className="mt-2 font-[family-name:var(--font-body)] text-sm tracking-wide text-muted-foreground">
            Hackathons, builder houses, and activations I&rsquo;ve produced.
          </p>
        </div>

        {/* Group by era */}
        {eras.map((era) => {
          const eraEvents = events.filter((e) => e.era === era);
          return (
            <div key={era} className="mb-12">
              <h2 className="mb-6 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
                {era}
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {eraEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}
