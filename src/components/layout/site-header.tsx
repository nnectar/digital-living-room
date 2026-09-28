"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SECTION_LIST } from "@/lib/moods";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

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

        {/* Desktop text navigation */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {SECTION_LIST.map((section) => {
            const isActive = pathname.startsWith(section.href);
            return (
              <Link
                key={section.mood}
                href={section.href}
                className={cn(
                  "font-[family-name:var(--font-body)] text-xs tracking-widest uppercase transition-colors",
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {section.label}
              </Link>
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
