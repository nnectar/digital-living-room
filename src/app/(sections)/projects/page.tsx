import type { Metadata } from "next";
import { SectionLayout } from "@/components/layout/section-layout";
import { ProjectCard } from "@/components/cards/project-card";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I build.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <SectionLayout mood="projects">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Section header */}
        <div className="mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Projects
          </h1>
          <p className="mt-2 font-[family-name:var(--font-body)] text-sm tracking-wide text-muted-foreground">
            Things I build — side projects, professional work, and experiments.
          </p>
        </div>

        {/* Project grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground">
            Projects are loading&hellip; check back soon.
          </p>
        )}
      </div>
    </SectionLayout>
  );
}
