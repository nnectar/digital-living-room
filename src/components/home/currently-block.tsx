interface CurrentlyItem {
  label: string;
  value: string;
  url?: string;
  emoji?: string;
}

interface CurrentlyBlockProps {
  items: CurrentlyItem[];
}

export function CurrentlyBlock({ items }: CurrentlyBlockProps) {
  if (!items.length) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="mb-6 font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase">
        Currently
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="group rounded-lg border border-border/50 bg-card/50 px-4 py-3 transition-colors hover:border-border hover:bg-card"
            style={{
              transform: `rotate(${(Math.random() - 0.5) * 0.8}deg)`,
            }}
          >
            <span className="block font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground uppercase">
              {item.emoji && <span className="mr-1.5">{item.emoji}</span>}
              {item.label}
            </span>
            <span className="mt-1 block font-[family-name:var(--font-heading)] text-sm font-medium text-foreground">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
