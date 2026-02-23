import { Separator } from "@/components/ui/separator";

interface SiteFooterProps {
  motto?: string;
  social?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export function SiteFooter({ motto, social }: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {motto && (
          <p className="mb-6 font-[family-name:var(--font-body)] text-sm tracking-wide text-muted-foreground italic">
            &ldquo;{motto}&rdquo;
          </p>
        )}

        <Separator className="mb-6 bg-border/50" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* Social links */}
          <div className="flex gap-4">
            {social?.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-accent"
              >
                GitHub
              </a>
            )}
            {social?.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-accent"
              >
                Twitter
              </a>
            )}
            {social?.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            )}
            {social?.email && (
              <a
                href={`mailto:${social.email}`}
                className="font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-accent"
              >
                Email
              </a>
            )}
          </div>

          {/* Copyright */}
          <p className="font-[family-name:var(--font-body)] text-xs tracking-wide text-muted-foreground">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
