import type { Metadata } from "next";
import { playfairDisplay, ibmPlexMono } from "@/lib/fonts";
import { getSiteMeta } from "@/lib/content";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export function generateMetadata(): Metadata {
  const site = getSiteMeta();
  return {
    title: {
      default: site.title,
      template: `%s | ${site.title}`,
    },
    description: site.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = getSiteMeta();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${ibmPlexMono.variable} min-h-screen bg-background font-[family-name:var(--font-body)] text-foreground antialiased`}
      >
        <ThemeProvider>
          <TooltipProvider delayDuration={200}>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter motto={site.motto} social={site.social} />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
