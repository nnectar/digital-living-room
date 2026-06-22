import type { Metadata } from "next";
import { SectionLayout } from "@/components/layout/section-layout";
import { WritingCard } from "@/components/cards/writing-card";
import { ProposalCard } from "@/components/cards/proposal-card";
import { getWriting, getProposals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Content",
  description: "Essays, proposals, and other things I think.",
};

export default function WritingPage() {
  const writing = getWriting();
  const proposals = getProposals();

  return (
    <SectionLayout mood="writing">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Section header */}
        <div className="mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Content
          </h1>
          <p className="mt-2 font-[family-name:var(--font-body)] text-sm tracking-wide text-muted-foreground">
            Essays, proposals, and other things I think.
          </p>
        </div>

        {/* Video */}
        <div className="mb-12">
          <h2 className="mb-6 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
            Video
          </h2>
          <div className="mx-auto aspect-video max-w-2xl overflow-hidden rounded-xl border border-border/50">
            <iframe
              src="https://www.youtube.com/embed/J5cDeSbSN6w"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Essays */}
        {writing.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
              Essays
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {writing.map((entry) => (
                <WritingCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        )}

        {/* Proposals */}
        {proposals.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
              Proposals
            </h2>
            <p className="mb-6 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
              Governance proposals I&rsquo;ve authored across DeFi
              protocols &mdash; 100% pass rate.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {proposals.map((proposal) => (
                <ProposalCard key={proposal.id} proposal={proposal} />
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionLayout>
  );
}
