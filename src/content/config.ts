import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    category: z.string(),
    auther:z.string(),
    link:z.string(),
    pixiv:z.string(),
    tsrc:z.string(),
    username:z.string(),
    tdes:z.string(),
    thref:z.string(),
    tpubDate:z.string(),
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
