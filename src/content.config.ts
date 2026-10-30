import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: 'src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    author: z.string().default('Đặng Danh'),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(), // 'AI / ML', 'Web Apps', 'Dev Tools', 'Open Source'
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    github: z.string().optional(),
    demo: z.string().optional(),
    status: z.enum(['Completed', 'In Development', 'Experimental']).default('Completed'),
    cover: z.string().optional(),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: 'src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.string(),
    status: z.enum(['Active', 'Experimental', 'Concept', 'Completed']).default('Active'),
    date: z.string().optional(),
    tags: z.array(z.string()).default([]),
    interactive: z.boolean().default(false),
    demoUrl: z.string().optional(),
  }),
});

export const collections = { posts, projects, experiments };
