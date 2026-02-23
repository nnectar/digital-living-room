"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { SECTION_LIST } from "@/lib/moods";
import { GlyphIcon } from "@/components/shared/glyph-icon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 bg-background">
        <SheetHeader>
          <SheetTitle className="font-[family-name:var(--font-heading)] text-lg">
            Rooms
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
          {SECTION_LIST.map((section) => {
            const isActive = pathname.startsWith(section.href);
            return (
              <Link
                key={section.mood}
                href={section.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors",
                  "font-[family-name:var(--font-body)] text-sm tracking-wide",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <GlyphIcon glyph={section.glyph} size="md" />
                <div className="flex flex-col">
                  <span className="font-medium">{section.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {section.description}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
