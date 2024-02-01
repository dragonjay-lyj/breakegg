import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    coverImage: z.string(),
    category: z.string(),
    xsrc: z.string(),
    xlink: z.string(),
    xusername: z.string(),
    xname: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
  }),
});

export const collections = { blog };
