import type { CleanupFunction } from '../types/navbar.js';

export function initializeMobileMenu(): CleanupFunction | null {
	console.log('Initializing mobile menu...');

	const mobileMenuButton = document.getElementById('mobile-menu-button');
	const mobileMenuClose = document.getElementById('mobile-menu-close');
	const mobileMenu = document.getElementById('mobile-menu');
	const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
	const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

	console.log('Mobile menu elements:', {
		button: !!mobileMenuButton,
		close: !!mobileMenuClose,
		menu: !!mobileMenu,
		overlay: !!mobileMenuOverlay,
		links: mobileNavLinks.length,
	});

	if (
		!mobileMenuButton ||
		!mobileMenuClose ||
		!mobileMenu ||
		!mobileMenuOverlay
	) {
		console.error('Missing mobile menu elements');
		return null;
	}

	let isMenuOpen = false;

	// Open Menu Function
	function openMenu(): void {
		console.log('Opening mobile menu...');
		if (!mobileMenu || !mobileMenuOverlay) return;
		isMenuOpen = true;
		mobileMenu.classList.remove('translate-x-full');
		mobileMenuOverlay.classList.remove('opacity-0', 'invisible');
		document.body.style.overflow = 'hidden';
		console.log('Mobile menu opened');
	}

	// Close Menu Function
	function closeMenu(): void {
		console.log('Closing mobile menu...');
		if (!mobileMenu || !mobileMenuOverlay) return;
		isMenuOpen = false;
		mobileMenu.classList.add('translate-x-full');
		mobileMenuOverlay.classList.add('opacity-0', 'invisible');
		document.body.style.overflow = '';
		console.log('Mobile menu closed');
	}

	function handleOpenMenu(): void {
		console.log('Mobile menu button clicked');
		openMenu();
	}

	function handleCloseMenu(): void {
		closeMenu();
	}

	function handleOverlayClick(): void {
		closeMenu();
	}

	function handleNavLinkClick(): void {
		closeMenu();
	}

	function handleKeyDown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && isMenuOpen) {
			closeMenu();
		}
	}

	function handleResize(): void {
		if (window.innerWidth >= 768 && isMenuOpen) {
			closeMenu();
		}
	}

	mobileMenuButton.addEventListener('click', handleOpenMenu);
	mobileMenuClose.addEventListener('click', handleCloseMenu);
	mobileMenuOverlay.addEventListener('click', handleOverlayClick);
	mobileNavLinks.forEach(link => {
		link.addEventListener('click', handleNavLinkClick);
	});
	document.addEventListener('keydown', handleKeyDown);
	window.addEventListener('resize', handleResize);

	console.log('Mobile menu event listeners added successfully');

	// Cleanup Function
	return (): void => {
		mobileMenuButton.removeEventListener('click', handleOpenMenu);
		mobileMenuClose.removeEventListener('click', handleCloseMenu);
		mobileMenuOverlay.removeEventListener('click', handleOverlayClick);
		mobileNavLinks.forEach(link => {
			link.removeEventListener('click', handleNavLinkClick);
		});
		document.removeEventListener('keydown', handleKeyDown);
		window.removeEventListener('resize', handleResize);

		if (isMenuOpen) {
			document.body.style.overflow = '';
		}
	};
}
