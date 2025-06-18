import { defineCollection, z } from 'astro:content';

// Post collection schema
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    category: z.string(),
    readingTime: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Product picks collection schema
const picks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    category: z.string(),
    price: z.number().optional(),
    amazon_link: z.string().url().optional(),
    rating: z.number().min(0).max(5).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Pages collection schema
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts,
  picks,
  pages,
}; 