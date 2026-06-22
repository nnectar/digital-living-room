export type SectionMood =
  | "projects"
  | "work"
  | "writing"
  | "speaking"
  | "events"
;

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
    glyph: "◆",
    description: "Things I build",
    href: "/projects",
  },
  work: {
    mood: "work",
    label: "Work",
    glyph: "⬢",
    description: "Where I've been",
    href: "/work",
  },
  writing: {
    mood: "writing",
    label: "Content",
    glyph: "▲",
    description: "Things I think",
    href: "/writing",
  },
  speaking: {
    mood: "speaking",
    label: "Speaking",
    glyph: "⬡",
    description: "Things I say",
    href: "/speaking",
  },
  events: {
    mood: "events",
    label: "Events",
    glyph: "✦",
    description: "Gatherings I produce",
    href: "/events",
  },
};

export const SECTION_LIST = Object.values(SECTION_MOODS);
