import type { Metadata } from "next";
import { playfairDisplay, ibmPlexMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Digital Living Room",
    template: "%s | Digital Living Room",
  },
  description:
    "A modular living room that holds both personal and professional artifacts.",
};

// Site metadata is hardcoded for now to avoid Velite build-order issues in layout
const siteMeta = {
  motto: "Building in public, learning in the open.",
  social: {
    github: "https://github.com/nneojet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              <SiteFooter
                motto={siteMeta.motto}
                social={siteMeta.social}
              />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
