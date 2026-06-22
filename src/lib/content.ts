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
  images: string[];
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

// ===== Work =====

export interface WorkEntry {
  id: string;
  type: "role" | "education";
  title: string;
  organization: string;
  duration: string;
  description: string;
  tags: string[];
  city?: string;
}

export function getWork(): WorkEntry[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { work } = require("#site/content") as {
      work: WorkEntry[];
    };
    return work;
  } catch {
    return [];
  }
}

// ===== Events =====

export interface EventEntry {
  id: string;
  name: string;
  role: string;
  year: string;
  era: string;
  organization: string;
  city?: string;
  participants?: number;
  description: string;
  tags: string[];
}

export function getEvents(): EventEntry[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { events } = require("#site/content") as {
      events: EventEntry[];
    };
    return events;
  } catch {
    return [];
  }
}

// ===== Speaking =====

export interface SpeakingEntry {
  id: string;
  name: string;
  role: string;
  city: string;
  year: string;
  description: string;
  tags: string[];
  relatedOrgs?: string[];
  images: string[];
}

export function getSpeaking(): SpeakingEntry[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { speaking } = require("#site/content") as {
      speaking: SpeakingEntry[];
    };
    return speaking;
  } catch {
    return [];
  }
}

// ===== Writing =====

export interface WritingEntry {
  id: string;
  title: string;
  date: string;
  tag: "essay" | "poetry";
  url: string;
  description: string;
  tags: string[];
}

// ===== Proposals =====

export interface ProposalEntry {
  id: string;
  title: string;
  protocol: string;
  date: string;
  status: "passed" | "pending" | "rejected";
  url: string;
  description: string;
  tags: string[];
}

export function getProposals(): ProposalEntry[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { proposals } = require("#site/content") as {
      proposals: ProposalEntry[];
    };
    return proposals;
  } catch {
    return [];
  }
}

export function getWriting(): WritingEntry[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { writing } = require("#site/content") as {
      writing: WritingEntry[];
    };
    return writing;
  } catch {
    return [];
  }
}
