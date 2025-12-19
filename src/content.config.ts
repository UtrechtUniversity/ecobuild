import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/publications" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    type: z.enum(['paper', 'book', 'patent', 'software', 'journal', 'newspaper']).default('paper'),
    cover: image().optional(),
    doi: z.string().optional(),
    award: z.string().optional(),
    links: z.object({
      pdf: z.string().optional(),
      code: z.string().optional(),
      website: z.string().optional(),
      demo: z.string().optional(),
      slides: z.string().optional(),
      video: z.string().optional(),
    }).optional(),
    featured: z.boolean().default(false),
    badges: z.array(z.object({
      text: z.string(),
      type: z.enum(['gold', 'blue', 'red', 'green', 'default']).default('default')
    })).optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/books" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    cover: image().optional(),
    doi: z.string().optional(),
    award: z.string().optional(),
    links: z.object({
      pdf: z.string().optional(),
      code: z.string().optional(),
      website: z.string().optional(),
      demo: z.string().optional(),
      slides: z.string().optional(),
      video: z.string().optional(),
    }).optional(),
    // Removed featured as per user request
    badges: z.array(z.object({
      text: z.string(),
      type: z.enum(['gold', 'blue', 'red', 'green', 'default']).default('default')
    })).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/team" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.enum([
      'Principal Investigator',
      'Professor',
      'Associate Professor',
      'Assistant Professor',
      'Postdoc',
      'Research Assistant',
      'PhD Student',
      'Master Student',
      'Undergraduate',
      'Alumni',
      'Policy Advisor',
      'Lecturer',
      'Student Assistant',
      'External'
    ]),
    title: z.array(z.string()).optional(), // For specific academic titles like "Academician", "Changjiang Scholar"
    avatar: image(),
    bio: z.string().optional(), // Short bio for card
    email: z.string().optional(),
    website: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    googleScholar: z.string().optional(),
    weight: z.number().default(100),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image().optional(),
    order: z.number().default(100),
  }),
});

const patents = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/patents" }),
  schema: z.object({
    title: z.string(),
    inventors: z.array(z.string()),
    number: z.string(), // Patent Number
    date: z.date(),
    status: z.enum(['Granted', 'Pending', 'Filed']),
    link: z.string().optional(),
  }),
});

const softwares = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/softwares" }),
  schema: z.object({
    title: z.string(),
    developers: z.array(z.string()),
    number: z.string(), // Registration Number
    date: z.date(),
    description: z.string().optional(),
  }),
});

const presentations = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/presentations" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    event: z.string().optional(),
    style: z.enum(['presentation', 'conference']).default('presentation'),
    url: z.string().optional(),
    order: z.number().optional().default(100), // For manual sorting if needed
  }),
});

const activities = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/activities" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    cover: image().optional(),
    description: z.string().optional(),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/partners" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    logo: image(),
    website: z.string(),
    type: z.enum(['company', 'government', 'academic', 'nonprofit']).default('company'),
  }),
});

export const collections = {
  publications,
  books,
  team,
  news,
  research,
  patents,
  softwares,
  presentations,
  activities,
  partners,
};
