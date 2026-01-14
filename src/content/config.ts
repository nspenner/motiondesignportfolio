import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    vimeoId: z.string(),
    thumbnail: z.string().optional(),
    category: z.enum(['Commercial', 'Music Video', 'Documentary', 'Short Film', 'Corporate']),
    client: z.string().optional(),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
