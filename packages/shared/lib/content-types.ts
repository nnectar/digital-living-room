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

export interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
}

export interface SiteMeta {
  name: string;
  title: string;
  description: string;
  motto?: string;
  bio: string;
  social: SocialLinks;
}

export interface Currently {
  label: string;
  value: string;
  url?: string;
  emoji?: string;
}
