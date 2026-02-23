import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionLayout } from "@/components/layout/section-layout";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { MDXContent } from "@/components/shared/mdx-content";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <SectionLayout mood="projects">
      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Hero */}
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-2 font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground">
            <span>{project.role}</span>
            <span className="text-border">/</span>
            <span>{project.year}</span>
            <span className="text-border">/</span>
            <Badge variant="outline" className="text-[10px]">
              {project.status}
            </Badge>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h1>

          <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-muted-foreground">
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

          {/* Links */}
          <div className="mt-6 flex gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-body)] text-xs tracking-widest text-accent uppercase hover:underline"
              >
                Visit &rarr;
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-body)] text-xs tracking-widest text-accent uppercase hover:underline"
              >
                Source &rarr;
              </a>
            )}
          </div>
        </header>

        {/* MDX body */}
        <div className="prose-custom">
          <MDXContent code={project.body} />
        </div>
      </article>
    </SectionLayout>
  );
}
