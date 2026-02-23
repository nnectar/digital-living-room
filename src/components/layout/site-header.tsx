"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SECTION_LIST } from "@/lib/moods";
import { GlyphIcon } from "@/components/shared/glyph-icon";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        {/* Site name */}
        <Link
          href="/"
          className={cn(
            "font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight",
            "text-foreground transition-colors hover:text-accent"
          )}
        >
          N
        </Link>

        {/* Desktop glyph navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {SECTION_LIST.map((section) => {
            const isActive = pathname.startsWith(section.href);
            return (
              <Tooltip key={section.mood}>
                <TooltipTrigger asChild>
                  <Link
                    href={section.href}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-md transition-all",
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label={section.label}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <GlyphIcon glyph={section.glyph} size="sm" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="font-[family-name:var(--font-body)] text-xs tracking-wide">
                  <p>{section.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>

        {/* Right side: theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
