import { CodeTexture } from "@/components/shared/code-texture";

interface HeroProps {
  name: string;
  bio: string;
  motto?: string;
}

export function Hero({ name, bio, motto }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Layered gradient backgrounds for depth */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-secondary/5 blur-3xl" />
      </div>

      {/* Code texture */}
      <CodeTexture className="z-0" opacity={0.03} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-24 md:pb-24 md:pt-32">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {name}
        </h1>

        {motto && (
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm tracking-widest text-accent uppercase">
            {motto}
          </p>
        )}

        <p className="mt-6 max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-muted-foreground md:text-lg">
          {bio}
        </p>
      </div>
    </section>
  );
}
