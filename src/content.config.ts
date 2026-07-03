import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string().default('AM'),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			// Path to an image in /public (e.g. '/images/foo.jpg'). Served as a
			// static file — avoids Netlify's on-demand /_image endpoint (404s here).
			heroImage: z.string().optional(),
		}),
});

export const collections = { blog };
