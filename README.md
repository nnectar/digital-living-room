# Digital Living Room

A modular personal website that refuses the split between a sterile portfolio and a separate blog. Each section is a "room" with its own mood — projects feel sharper, writing feels warm and typographic, photos feel gallery-like — while sharing a cohesive design system underneath.

## Tech Stack

- **Next.js 16** (App Router, Server Components)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** with OKLCH color tokens
- **Velite** for type-safe content (MDX + YAML)
- **Radix UI** primitives with shadcn/ui patterns
- **next-themes** for warm/night theme switching

## Architecture

### Mood System

Every section has a mood defined via CSS custom properties scoped with `data-mood` attributes. Wrapping a page in `<SectionLayout mood="projects">` changes the accent color, card rotation, and hover behavior — without touching component code.

### Content Pipeline

Content lives in `content/` as YAML and MDX:

```
content/
  meta/
    site.yaml        # Name, bio, motto, social links
    currently.yaml   # What I'm building/reading/listening to
  projects/
    *.mdx            # Project pages with frontmatter + body
```

Velite validates schemas at build time, compiles MDX, and outputs typed JSON to `.velite/`. Helper functions in `src/lib/content.ts` load this data with try/catch fallbacks.

### Sections (Rooms)

| Room | Glyph | Status |
|------|-------|--------|
| Projects | ◆ | Built |
| Writing | ▲ | Planned |
| Bookshelf | ◎ | Planned |
| Playlist | ♫ | Planned |
| Speaking | ⬡ | Planned |
| Contributions | ◇ | Planned |
| Videos | ▶ | Planned |
| Events | ✦ | Planned |
| Media | ❋ | Planned |
| Photos | □ | Planned |
| WIP | ⚙ | Planned |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server uses webpack (required for the Velite plugin).

## Adding Content

### New project

Create `content/projects/my-project.mdx`:

```mdx
---
title: "My Project"
slug: "my-project"
date: "2025-01-01"
status: "active"
role: "Creator"
tags: ["typescript", "react"]
summary: "A short description."
featured: false
---

Write your project details here in MDX.
```

### Update currently items

Edit `content/meta/currently.yaml`:

```yaml
- label: "Building"
  value: "Something cool"
  emoji: "\U0001F680"
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (webpack + Velite watch) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |
