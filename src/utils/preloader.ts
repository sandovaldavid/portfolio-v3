import {
	PRELOADER_SELECTORS,
	PRELOADER_TIMINGS,
	PRELOADER_ANIMATIONS,
} from '../constants/preloader';

interface PreloaderManagerConfig {
	readonly selectors: typeof PRELOADER_SELECTORS;
	readonly timings: typeof PRELOADER_TIMINGS;
	readonly animations: typeof PRELOADER_ANIMATIONS;
}

const MANAGER_CONFIG: PreloaderManagerConfig = {
	selectors: PRELOADER_SELECTORS,
	timings: PRELOADER_TIMINGS,
	animations: PRELOADER_ANIMATIONS,
} as const;

class PreloaderManager {
	private readonly config: PreloaderManagerConfig;
	private preloaderElement: HTMLElement | null = null;
	private letterElement: HTMLElement | null = null;

	constructor(config: PreloaderManagerConfig) {
		this.config = config;
	}

	private initializeElements(): boolean {
		this.preloaderElement = document.querySelector(
			this.config.selectors.preloader
		);
		this.letterElement = document.querySelector(
			this.config.selectors.dLetter
		);

		if (!this.preloaderElement) {
			console.warn('Preloader: Preloader element not found');
			return false;
		}

		if (!this.letterElement) {
			console.warn('Preloader: Letter element not found');
			return false;
		}

		return true;
	}

	private animateLetter(): void {
		if (!this.letterElement) return;

		this.letterElement.style.opacity = '1';
		this.letterElement.classList.add(this.config.animations.letterFadeIn);
	}

	private removePreloader(): void {
		if (!this.preloaderElement) return;

		this.preloaderElement.classList.add(
			this.config.animations.preloaderFadeOut
		);

		setTimeout(() => {
			if (this.preloaderElement?.parentNode) {
				this.preloaderElement.parentNode.removeChild(
					this.preloaderElement
				);
			}
		}, this.config.timings.fadeOutDuration);
	}

	public start(): void {
		if (!this.initializeElements()) {
			return;
		}

		setTimeout(() => {
			this.animateLetter();
		}, this.config.timings.letterAnimation);

		setTimeout(() => {
			this.removePreloader();
		}, this.config.timings.preloaderRemoval);
	}

	public forceRemove(): void {
		if (this.preloaderElement?.parentNode) {
			this.preloaderElement.parentNode.removeChild(this.preloaderElement);
		}
	}
}

function initializePreloader(): void {
	const preloader = new PreloaderManager(MANAGER_CONFIG);
	preloader.start();

	setTimeout(() => {
		preloader.forceRemove();
	}, PRELOADER_TIMINGS.maxWaitTime);
}

export { PreloaderManager, MANAGER_CONFIG, initializePreloader };
