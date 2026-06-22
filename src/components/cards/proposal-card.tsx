import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { ProposalEntry } from "@/lib/content";

interface ProposalCardProps {
  proposal: ProposalEntry;
}

export function ProposalCard({ proposal }: ProposalCardProps) {
  return (
    <a
      href={proposal.url}
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
        {/* Header: protocol + date + status */}
        <div className="mb-3 flex items-center gap-2 font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground">
          <span className="font-medium text-accent">{proposal.protocol}</span>
          <span className="text-border">/</span>
          <span>{proposal.date}</span>
          <Badge
            variant="outline"
            className="ml-auto text-[10px] bg-green-500/10 text-green-700 border-green-500/20"
          >
            {proposal.status}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
          {proposal.title}
        </h3>

        {/* Description */}
        <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
          {proposal.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {proposal.tags.map((tag) => (
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
          View proposal &rarr;
        </span>
      </article>
    </a>
  );
}
