export type SectionMood =
  | "projects"
  | "work"
  | "writing"
  | "bookshelf"
  | "playlist"
  | "speaking"
  | "contributions"
  | "videos"
  | "events"
  | "media"
  | "photos"
  | "wip";

export interface MoodConfig {
  mood: SectionMood;
  label: string;
  glyph: string;
  description: string;
  href: string;
}

export const SECTION_MOODS: Record<SectionMood, MoodConfig> = {
  projects: {
    mood: "projects",
    label: "Projects",
    glyph: "\u25C6",
    description: "Things I build",
    href: "/projects",
  },
  work: {
    mood: "work",
    label: "Work",
    glyph: "\u2B22",
    description: "Where I've been",
    href: "/work",
  },
  writing: {
    mood: "writing",
    label: "Writing",
    glyph: "\u25B2",
    description: "Things I think",
    href: "/writing",
  },
  bookshelf: {
    mood: "bookshelf",
    label: "Bookshelf",
    glyph: "\u25CE",
    description: "Things I read",
    href: "/bookshelf",
  },
  playlist: {
    mood: "playlist",
    label: "Playlist",
    glyph: "\u266B",
    description: "Things I hear",
    href: "/playlist",
  },
  speaking: {
    mood: "speaking",
    label: "Speaking",
    glyph: "\u2B21",
    description: "Things I say",
    href: "/speaking",
  },
  contributions: {
    mood: "contributions",
    label: "Contributions",
    glyph: "\u25C7",
    description: "Things I give",
    href: "/contributions",
  },
  videos: {
    mood: "videos",
    label: "Videos",
    glyph: "\u25B6",
    description: "Things I show",
    href: "/videos",
  },
  events: {
    mood: "events",
    label: "Events",
    glyph: "\u2726",
    description: "Things I attend",
    href: "/events",
  },
  media: {
    mood: "media",
    label: "Media",
    glyph: "\u274B",
    description: "Things about me",
    href: "/media",
  },
  photos: {
    mood: "photos",
    label: "Photos",
    glyph: "\u25A1",
    description: "Things I see",
    href: "/photos",
  },
  wip: {
    mood: "wip",
    label: "WIP",
    glyph: "\u2699",
    description: "Things in progress",
    href: "/wip",
  },
};

export const SECTION_LIST = Object.values(SECTION_MOODS);
