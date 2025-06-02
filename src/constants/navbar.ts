import type { NavbarConfig } from '../types/navbar.ts';

export const NAVBAR_CONFIG: NavbarConfig = {
	scrollThreshold: 50,

	delays: {
		floating: 50,
		normal: 100,
	},

	// Navbar state configurations
	states: {
		// Normal State (scroll < threshold)
		normal: {
			classes: {
				remove: ['navbar-floating'],
				add: ['navbar-normal'],
			},
			styles: {
				backdropFilter: 'blur(4px)',
				bgOpacity: '0.90',
			},
		},

		// Floating State (scroll >= threshold)
		floating: {
			classes: {
				remove: ['navbar-normal'],
				add: ['navbar-floating'],
			},
			styles: {
				backdropFilter: 'blur(16px)',
				bgOpacity: '0.95',
			},
		},
	},
} as const;
