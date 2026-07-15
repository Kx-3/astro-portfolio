import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const experience = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/experience" }),
    schema: z.object({
        title: z.string(),
        company: z.string(),
        period: z.string(),
        href: z.string().url().optional(),
        tech: z.array(z.string()).default([]),
        description: z.string().optional(),
    })
});

export const collections = {
    experience,
};