import type { SectionMood } from "@/lib/moods";
import type { ReactNode } from "react";

interface SectionLayoutProps {
  mood: SectionMood;
  children: ReactNode;
}

export function SectionLayout({ mood, children }: SectionLayoutProps) {
  return (
    <div data-mood={mood} className="min-h-screen">
      {children}
    </div>
  );
}
