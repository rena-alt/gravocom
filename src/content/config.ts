import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'data', // 'data' para archivos JSON o YAML
  schema: z.object({
    titulo: z.string(),
    precio: z.number(),
    categoria: z.string(),
    imagen: z.string(),
    descripcion: z.string().optional(),
  }),
});

const gratuitos = defineCollection({
    type: 'data',
    schema: z.object({
      titulo: z.string(),
      descripcion: z.string(),
      imagen: z.string(),
      archivoUrl: z.string(), // Ruta al PDF
    }),
  });
  
  export const collections = { productos, gratuitos };