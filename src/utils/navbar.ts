import { NAVBAR_CONFIG } from '../constants/navbar.ts';
import type { NavbarState, CleanupFunction } from '../types/navbar.ts';
import { initializeMobileMenu } from './mobileMenu.ts';

export function initializeNavbar(): void {
	function createNavbarController(): CleanupFunction | null {
		const navbar = document.getElementById('navbar');
		if (!navbar) return null;

		let isFloating = false;
		let animationFrameId: number | null = null;

		function applyNavbarState(state: NavbarState, delay: number = 0): void {
			const config = NAVBAR_CONFIG.states[state];
			if (!config || !navbar) return;

			navbar.style.backdropFilter = config.styles.backdropFilter;
			navbar.style.setProperty(
				'--tw-bg-opacity',
				config.styles.bgOpacity
			);

			const applyClasses = (): void => {
				if (!navbar) return;
				navbar.classList.remove(...config.classes.remove);
				navbar.classList.add(...config.classes.add);
			};

			if (delay > 0) {
				setTimeout(applyClasses, delay);
			} else {
				applyClasses();
			}
		}

		function updateNavbar(): void {
			const currentScrollY = window.scrollY;
			const shouldFloat = currentScrollY > NAVBAR_CONFIG.scrollThreshold;

			if (shouldFloat === isFloating) return;

			if (shouldFloat) {
				applyNavbarState('floating', NAVBAR_CONFIG.delays.floating);
				isFloating = true;
			} else {
				applyNavbarState('normal', NAVBAR_CONFIG.delays.normal);
				isFloating = false;
			}
		}

		function handleScroll(): void {
			if (animationFrameId === null) {
				animationFrameId = requestAnimationFrame(() => {
					updateNavbar();
					animationFrameId = null;
				});
			}
		}

		updateNavbar();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return (): void => {
			window.removeEventListener('scroll', handleScroll);
			if (animationFrameId !== null) {
				cancelAnimationFrame(animationFrameId);
				animationFrameId = null;
			}
		};
	}

	let navbarCleanup: CleanupFunction | null = null;
	let mobileMenuCleanup: CleanupFunction | null = null;

	function setupNavbar(): void {
		if (navbarCleanup) {
			navbarCleanup();
		}
		if (mobileMenuCleanup) {
			mobileMenuCleanup();
		}

		navbarCleanup = createNavbarController();
		mobileMenuCleanup = initializeMobileMenu();
	}

	document.addEventListener('DOMContentLoaded', setupNavbar);
	document.addEventListener('astro:page-load', setupNavbar);

	document.addEventListener('astro:before-preparation', () => {
		if (navbarCleanup) {
			navbarCleanup();
			navbarCleanup = null;
		}
		if (mobileMenuCleanup) {
			mobileMenuCleanup();
			mobileMenuCleanup = null;
		}
	});
}
