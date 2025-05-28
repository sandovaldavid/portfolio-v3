import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export type Tag = {
	name: string;
	class: string;
	icon: AstroComponentFactory;
};
