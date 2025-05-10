/**
 @type {import('tailwindcss').Config}
 */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'fira-code': ['Fira Code', 'monospace'],
				'sf-mono': ['SF Mono', 'monospace'],
			},
		},
	},
	plugins: [],
};
