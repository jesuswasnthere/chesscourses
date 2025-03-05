// src/content/config.ts
import { defineCollection, z } from "astro:content";

const cursos = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number().optional(), // Campo opcional
    description: z.string(),
  })
});

export const collections = { 
  cursos // Nombre de la colección = nombre de la carpeta 
};