// @ts-check

import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://thehalfcourt.com',
	// imageCDN: false → optimize images at build time into /_astro/*.webp
	// instead of Netlify's on-demand /_image endpoint (which 404s on this site).
	adapter: netlify({ imageCDN: false }),
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Barlow',
			cssVariable: '--font-body',
			fallbacks: ['system-ui', 'sans-serif'],
			weights: [400, 500, 600, 700],
			styles: ['normal', 'italic'],
		},
		{
			provider: fontProviders.google(),
			name: 'Barlow Condensed',
			cssVariable: '--font-display',
			fallbacks: ['sans-serif'],
			weights: [600, 700],
		},
	],
});
