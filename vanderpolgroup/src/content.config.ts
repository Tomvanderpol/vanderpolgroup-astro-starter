
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/research'
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    icon: z.string().optional()
  })
});

const people = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/people'
  }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    email: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(99)
  })
});

// Alumni collection
const alumni = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/alumni'
  }),
  schema: z.object({
    name: z.string(),
    position: z.string(),
    nextPosition: z.string(),
    order: z.number().default(99)
  })
});

const publications = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/publications'
  }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string().optional(),
    year: z.number(),
    doi: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const news = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/news'
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    image: z.string().optional()
  })
});

export const collections = {
  research,
  people,
  alumni,
  publications,
  news
};
