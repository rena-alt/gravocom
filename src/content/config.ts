import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: image().optional(), 
    specs: z.array(z.array(z.string())),
  }),
});

export const collections = { productos };