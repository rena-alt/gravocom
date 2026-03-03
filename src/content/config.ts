import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string().optional(),
    specs: z.array(z.array(z.string())),
  }),
});

export const collections = { productos }; // Asegúrate de que diga 'productos'