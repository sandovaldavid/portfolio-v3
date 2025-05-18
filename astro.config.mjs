// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://devsandoval.com',
	integrations: [icon(), mdx(), sitemap(), alpinejs()],
	vite: {
		plugins: [tailwindcss()],
	},
});
