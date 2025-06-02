import type { PreloaderConfig } from '../types/icons';

export const PRELOADER_CONFIG: PreloaderConfig = {
	containerSize: {
		width: 230,
		height: 270,
	},
	letterSize: 120,
	zIndex: {
		overlay: 50,
		polygon: 10,
		letter: 20,
	},
} as const;

export const PRELOADER_SELECTORS = {
	preloader: '#preloader',
	dLetter: '#dLetter',
	hexPolygon: '#hexPolygon',
} as const;

export const PRELOADER_TIMINGS = {
	letterAnimation: 1000,
	preloaderRemoval: 2000,
	fadeOutDuration: 500,
	maxWaitTime: 5000,
} as const;

export const PRELOADER_ANIMATIONS = {
	letterFadeIn: 'animate-fadeInRotate',
	preloaderFadeOut: 'animate-fadeOut',
} as const;

export default {
	PRELOADER_CONFIG,
	PRELOADER_SELECTORS,
	PRELOADER_TIMINGS,
	PRELOADER_ANIMATIONS,
};
