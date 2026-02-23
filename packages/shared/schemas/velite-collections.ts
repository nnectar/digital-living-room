/* eslint-disable @typescript-eslint/no-explicit-any */

// Factory functions for Velite collection schemas.
// Each site's velite.config.ts passes in defineCollection and s from its own velite install.

export function createSiteMetaSchema(defineCollection: any, s: any) {
  return defineCollection({
    name: "SiteMeta",
    pattern: "meta/site.yaml",
    schema: s.object({
      name: s.string(),
      title: s.string(),
      description: s.string(),
      motto: s.string().optional(),
      bio: s.string(),
      social: s.object({
        github: s.string().optional(),
        twitter: s.string().optional(),
        linkedin: s.string().optional(),
        email: s.string().optional(),
      }),
    }),
  });
}

export function createCurrentlySchema(defineCollection: any, s: any) {
  return defineCollection({
    name: "Currently",
    pattern: "meta/currently.yaml",
    schema: s.object({
      label: s.string(),
      value: s.string(),
      url: s.string().optional(),
      emoji: s.string().optional(),
    }),
  });
}

export function createProjectsSchema(defineCollection: any, s: any) {
  return defineCollection({
    name: "Project",
    pattern: "projects/*.mdx",
    schema: s
      .object({
        title: s.string().max(120),
        slug: s.slug("projects"),
        date: s.isodate(),
        updated: s.isodate().optional(),
        status: s.enum(["active", "completed", "archived", "paused"]),
        role: s.string(),
        tags: s.array(s.string()),
        summary: s.string().max(500),
        cover: s.image().optional(),
        url: s.string().optional(),
        repo: s.string().optional(),
        featured: s.boolean().default(false),
        body: s.mdx(),
      })
      .transform((data: any) => ({
        ...data,
        permalink: `/projects/${data.slug}`,
        year: new Date(data.date).getFullYear(),
      })),
  });
}
