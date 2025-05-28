import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string().optional(),
		tech: z.array(z.string()).optional(),
		image: z.string().optional(),
		github: z.string().optional(),
		live: z.string().optional(),
		lang: z.enum(['en', 'es']), // <- Language
	}),
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
		lang: z.enum(['en', 'es']), // <- Language
	}),
});

export const collections = {
	projects,
	blog,
};
