import Link from "next/link";
import type { Project } from "@/lib/content";

interface SelectedWorkProps {
  projects: Project[];
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  if (!projects.length) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="mb-8 font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase">
        Selected work
      </h2>
      <div className="space-y-0">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex items-baseline gap-4 border-b border-border/30 py-4 transition-colors hover:border-border first:border-t first:border-border/30 first:hover:border-border"
          >
            <span className="font-[family-name:var(--font-body)] text-xs tabular-nums text-muted-foreground/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-[family-name:var(--font-heading)] text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-accent md:text-lg">
              {project.title}
            </span>
            <span className="hidden font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground sm:inline">
              {project.role}
            </span>
            <span className="font-[family-name:var(--font-body)] text-xs tabular-nums text-muted-foreground/60">
              {project.year}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
