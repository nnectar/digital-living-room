import Link from "next/link";
import type { WorkEntry } from "@/lib/content";

interface ExperiencePreviewProps {
  roles: WorkEntry[];
}

export function ExperiencePreview({ roles }: ExperiencePreviewProps) {
  if (!roles.length) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-baseline justify-between">
        <h2 className="mb-8 font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase">
          Experience
        </h2>
        <Link
          href="/work"
          className="font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground/60 transition-colors hover:text-accent"
        >
          View all &rarr;
        </Link>
      </div>
      <div className="space-y-8">
        {roles.map((role) => (
          <div key={role.id}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-foreground">
                {role.organization}
              </h3>
              <span className="font-[family-name:var(--font-body)] text-xs tabular-nums text-muted-foreground/60">
                {role.duration}
              </span>
            </div>
            <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs tracking-wide text-accent">
              {role.title}
            </p>
            <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
