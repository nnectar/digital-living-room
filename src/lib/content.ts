// Content helper functions
// These will import from Velite's generated output

export function getProjects() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { projects } = require("#site/content") as {
      projects: Project[];
    };
    return projects.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

export function getProjectBySlug(slug: string) {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export interface Project {
  title: string;
  slug: string;
  date: string;
  updated?: string;
  status: "active" | "completed" | "archived" | "paused";
  role: string;
  tags: string[];
  summary: string;
  cover?: string;
  url?: string;
  repo?: string;
  featured: boolean;
  body: string;
  permalink: string;
  year: number;
}
