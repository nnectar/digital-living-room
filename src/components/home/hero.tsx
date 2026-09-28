import { TimeGreeting } from "@/components/home/time-greeting";

interface HeroProps {
  name: string;
  bio: string;
  motto?: string;
}

export function Hero({ name, bio }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-accent-secondary/[0.03]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-24 md:pb-20 md:pt-32">
        <TimeGreeting />

        <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {name}
        </h1>

        <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground md:text-base">
          {bio}
        </p>
      </div>
    </section>
  );
}
