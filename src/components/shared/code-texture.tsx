import { cn } from "@/lib/utils";

interface CodeTextureProps {
  className?: string;
  opacity?: number;
}

export function CodeTexture({ className, opacity = 0.04 }: CodeTextureProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        className
      )}
      aria-hidden="true"
      style={{ opacity }}
    >
      <div className="absolute inset-0 font-[family-name:var(--font-body)] text-[10px] leading-[1.4] text-foreground whitespace-pre-wrap break-all">
        {generateBinaryPattern()}
      </div>
    </div>
  );
}

function generateBinaryPattern(): string {
  const chars = "01";
  const lines: string[] = [];
  for (let i = 0; i < 60; i++) {
    let line = "";
    for (let j = 0; j < 120; j++) {
      line += chars[Math.floor(Math.random() * chars.length)];
      if (j % 8 === 7) line += " ";
    }
    lines.push(line);
  }
  return lines.join("\n");
}
