import type { Metadata } from "next";
import { SectionLayout } from "@/components/layout/section-layout";
import { WorkCard } from "@/components/cards/work-card";
import { getWork } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Where I've been — roles and education.",
};

export default function WorkPage() {
  const work = getWork();

  const roles = work.filter((w) => w.type === "role");
  const education = work.filter((w) => w.type === "education");

  return (
    <SectionLayout mood="work">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Section header */}
        <div className="mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Work
          </h1>
          <p className="mt-2 font-[family-name:var(--font-body)] text-sm tracking-wide text-muted-foreground">
            Where I&rsquo;ve been &mdash; roles and education.
          </p>
        </div>

        {/* Roles */}
        {roles.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
              Roles
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {roles.map((entry) => (
                <WorkCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
              Education
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {education.map((entry) => (
                <WorkCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionLayout>
  );
}
