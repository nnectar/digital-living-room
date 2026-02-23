"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-16" />;
  }

  const isNight = theme === "night";

  return (
    <button
      onClick={() => setTheme(isNight ? "warm" : "night")}
      className={cn(
        "relative flex h-8 items-center gap-1.5 rounded-full border border-border px-3",
        "font-[family-name:var(--font-body)] text-xs tracking-widest uppercase",
        "text-muted-foreground transition-colors hover:text-foreground"
      )}
      aria-label={`Switch to ${isNight ? "warm" : "night"} mode`}
    >
      <span className={cn(!isNight && "text-accent font-medium")}>
        {"\u2600"}
      </span>
      <span className="text-border">/</span>
      <span className={cn(isNight && "text-accent font-medium")}>
        {"\u263E"}
      </span>
    </button>
  );
}
