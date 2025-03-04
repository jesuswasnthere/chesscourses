// src/content/cursos/config.ts
import { defineCollection, z } from "astro:content";

const cursos = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    // Si necesitas el campo "buy" como en tu ejemplo anterior:
  })
});

export const collections = { 
  cursos // Nombre de la colección = nombre de la carpeta 
};