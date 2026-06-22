import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ImageCarousel } from "@/components/ui/image-carousel";
import type { Project } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<string, string> = {
  active: "bg-green-500/10 text-green-700 border-green-500/20",
  completed: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  archived: "bg-muted text-muted-foreground border-border",
  paused: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.permalink} className="group block">
      <article
        className={cn(
          "relative overflow-hidden rounded-xl border border-border/50 bg-card/50",
          "border-l-2 border-l-accent",
          "transition-all duration-300",
          "hover:border-border hover:bg-card hover:shadow-sm",
          "hover:-translate-y-0.5"
        )}
      >
        {/* Image carousel */}
        {project.images.length > 0 && (
          <ImageCarousel
            images={project.images}
            alt={project.title}
          />
        )}

        <div className="p-6">
          {/* Header: role + year + status */}
          <div className="mb-3 flex items-center gap-2 font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground">
            <span>{project.role}</span>
            <span className="text-border">/</span>
            <span>{project.year}</span>
            <Badge
              variant="outline"
              className={cn(
                "ml-auto text-[10px]",
                statusColors[project.status]
              )}
            >
              {project.status}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
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
    </Link>
  );
}
