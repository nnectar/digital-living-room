// Content helper functions
// Import from Velite's generated output via require() to handle build-order timing

// ===== Site Metadata =====

export interface SiteMeta {
  name: string;
  title: string;
  description: string;
  motto?: string;
  bio: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

const SITE_META_FALLBACK: SiteMeta = {
  name: "Nneoma",
  title: "Digital Living Room",
  description:
    "A modular living room that holds both personal and professional artifacts.",
  motto: "Building in public, learning in the open.",
  bio: "Engineer, builder, and collector of interesting things.",
  social: {},
};

export function getSiteMeta(): SiteMeta {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { siteMeta } = require("#site/content") as {
      siteMeta: SiteMeta[];
    };
    return siteMeta[0] ?? SITE_META_FALLBACK;
  } catch {
    return SITE_META_FALLBACK;
  }
}

// ===== Currently Items =====

export interface CurrentlyItem {
  label: string;
  value: string;
  url?: string;
  emoji?: string;
}

export function getCurrentlyItems(): CurrentlyItem[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { currently } = require("#site/content") as {
      currently: CurrentlyItem[];
    };
    return currently;
  } catch {
    return [];
  }
}

// ===== Projects =====

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

export function getProjects(): Project[] {
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

export function getProjectBySlug(slug: string): Project | null {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}
