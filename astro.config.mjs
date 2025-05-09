// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    integrations: [icon(), mdx(), sitemap(), alpinejs()],
});