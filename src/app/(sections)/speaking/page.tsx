import type { Metadata } from "next";
import { SectionLayout } from "@/components/layout/section-layout";
import { SpeakingCard } from "@/components/cards/speaking-card";
import { getSpeaking } from "@/lib/content";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Talks on frontier technology, governance, and builder ecosystems.",
};

export default function SpeakingPage() {
  const speaking = getSpeaking();

  return (
    <SectionLayout mood="speaking">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Section header */}
        <div className="mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Speaking
          </h1>
          <p className="mt-2 max-w-xl font-[family-name:var(--font-body)] text-sm tracking-wide text-muted-foreground">
            I speak about frontier technology trends, opportunities and
            challenges in decentralized governance, and building durable
            ecosystems.
          </p>
        </div>

        {/* Speaking grid */}
        {speaking.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {speaking.map((entry) => (
              <SpeakingCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground">
            Speaking engagements loading&hellip; check back soon.
          </p>
        )}
      </div>
    </SectionLayout>
  );
}
