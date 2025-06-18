import { defineCollection, z } from 'astro:content';

// Define a product schema for reuse
const productSchema = z.object({
  title: z.string(),
  description: z.string(),
  features: z.array(z.string()).optional(),
  image: z.string().optional(),
  price: z.number().optional(),
  amazon_link: z.string().url().optional(),
});

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
    products: z.array(productSchema).optional(),
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