import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { WorkEntry } from "@/lib/content";

interface WorkCardProps {
  entry: WorkEntry;
}

const typeLabels: Record<string, string> = {
  role: "Role",
  education: "Education",
  project: "Project",
};

export function WorkCard({ entry }: WorkCardProps) {
  return (
    <article
      className={cn(
        "relative rounded-xl border border-border/50 bg-card/50 p-6",
        "border-l-2 border-l-accent",
        "transition-all duration-300",
        "hover:border-border hover:bg-card hover:shadow-sm"
      )}
    >
      {/* Header: type + duration */}
      <div className="mb-3 flex items-center gap-2 font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground">
        <Badge
          variant="outline"
          className="text-[10px] border-accent/30 text-accent"
        >
          {typeLabels[entry.type]}
        </Badge>
        <span className="ml-auto">{entry.duration}</span>
      </div>

      {/* Title */}
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-foreground">
        {entry.title}
      </h3>

      {/* Organization */}
      <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-accent">
        {entry.organization}
        {entry.city && (
          <span className="text-muted-foreground"> &middot; {entry.city}</span>
        )}
      </p>

      {/* Description */}
      {entry.description && (
        <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
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
    </article>
  );
}
