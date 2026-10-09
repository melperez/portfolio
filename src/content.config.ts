import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const profile = defineCollection({
  loader: glob({ pattern: 'profile.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    headline: z.string(),
    location: z.string().optional(),
    email: z.email(),
    cvPdf: z.string().default('/Melissa-CV-Web.pdf'),
    links: z
      .array(z.object({ label: z.string(), url: z.url() }))
      .default([]),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    client: z.string().optional(), // consultancy engagements
    summary: z.string(), // one line shown on the card
    location: z.string().optional(),
    start: z.string(), // "YYYY-MM"
    end: z.string().optional(), // omitted = present
    tech: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    repo: z.url().optional(),
    demo: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.json'),
  schema: z.object({
    group: z.string(),
    items: z.array(z.string()),
  }),
});

const education = defineCollection({
  loader: file('src/content/education.json'),
  schema: z.object({
    kind: z.enum(['degree', 'certification', 'course']),
    title: z.string(),
    institution: z.string(),
    year: z.string(),
  }),
});

export const collections = { profile, experience, projects, skills, education };
