import type { NavbarConfig } from '../types/navbar.ts';

export const NAVBAR_CONFIG: NavbarConfig = {
	scrollThreshold: 50,

	delays: {
		floating: 50,
		normal: 100,
	},

	// Nnavbar state configurations
	states: {
		// Normal State (scroll < threshold)
		normal: {
			classes: {
				remove: [
					'mt-3',
					'shadow-2xl',
					'border-primary/20',
					'dark:border-primary/30',
					'px-8',
					'py-2.5',
					'scale-[0.98]',
					'z-50',
				],
				add: [
					'mt-2',
					'shadow-lg',
					'border-primary/10',
					'dark:border-primary/15',
					'px-10',
					'py-3',
					'z-50',
				],
			},
			styles: {
				backdropFilter: 'blur(4px)',
				bgOpacity: '0.90',
			},
		},

		// Floating State (scroll >= threshold)
		floating: {
			classes: {
				remove: [
					'mt-2',
					'shadow-lg',
					'border-primary/10',
					'dark:border-primary/15',
					'px-10',
					'py-3',
					'z-50',
				],
				add: [
					'mt-3',
					'shadow-2xl',
					'border-primary/20',
					'dark:border-primary/30',
					'px-8',
					'py-2.5',
					'scale-[0.98]',
					'z-50',
				],
			},
			styles: {
				backdropFilter: 'blur(16px)',
				bgOpacity: '0.95',
			},
		},
	},
} as const;
