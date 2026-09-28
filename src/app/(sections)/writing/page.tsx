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
          <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
            {[
              { id: "mlE9i7CsMHE", title: "Video" },
              { id: "J5cDeSbSN6w", title: "Video" },
              { id: "8L4wr9YIe88", title: "Founders Forge" },
            ].map((video) => (
              <div
                key={video.id}
                className="aspect-video w-[80vw] max-w-xl flex-shrink-0 snap-start overflow-hidden rounded-xl border border-border/50"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Writing */}
        {writing.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
              Writing
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
