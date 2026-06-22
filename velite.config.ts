import { defineConfig, defineCollection, s } from "velite";

const siteMeta = defineCollection({
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

const currently = defineCollection({
  name: "Currently",
  pattern: "meta/currently.yaml",
  schema: s.object({
    label: s.string(),
    value: s.string(),
    url: s.string().optional(),
    emoji: s.string().optional(),
  }),
});

const work = defineCollection({
  name: "Work",
  pattern: "work.yaml",
  schema: s.object({
    id: s.string(),
    type: s.enum(["role", "education", "project"]),
    title: s.string(),
    organization: s.string(),
    duration: s.string(),
    description: s.string(),
    tags: s.array(s.string()),
    city: s.string().optional(),
  }),
});

const events = defineCollection({
  name: "Event",
  pattern: "events.yaml",
  schema: s.object({
    id: s.string(),
    name: s.string(),
    role: s.string(),
    year: s.string(),
    era: s.string(),
    organization: s.string(),
    city: s.string().optional(),
    participants: s.number().optional(),
    description: s.string(),
    tags: s.array(s.string()),
  }),
});

const speaking = defineCollection({
  name: "Speaking",
  pattern: "speaking.yaml",
  schema: s.object({
    id: s.string(),
    name: s.string(),
    role: s.string(),
    city: s.string(),
    year: s.string(),
    description: s.string(),
    tags: s.array(s.string()),
    relatedOrgs: s.array(s.string()).optional(),
    images: s.array(s.string()),
  }),
});

const projects = defineCollection({
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
    .transform((data) => ({
      ...data,
      permalink: `/projects/${data.slug}`,
      year: new Date(data.date).getFullYear(),
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { siteMeta, currently, projects, work, events, speaking },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
