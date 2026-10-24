import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(), description: z.string(), cluster: z.string(), keyword: z.string(),
    reviewed: z.string(), reviewer: z.string(), updated: z.string(),
    sources: z.array(z.object({ label: z.string(), url: z.string() }))
  })
});
export const collections = { articles };
