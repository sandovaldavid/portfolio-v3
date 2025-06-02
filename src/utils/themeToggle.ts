export type Theme = 'light' | 'dark' | 'system';

export function setTheme(theme: Theme): void {
	if (theme === 'light') {
		localStorage.theme = 'light';
		document.documentElement.classList.remove('dark');
	} else if (theme === 'dark') {
		localStorage.theme = 'dark';
		document.documentElement.classList.add('dark');
	} else {
		localStorage.removeItem('theme');
		document.documentElement.classList.toggle(
			'dark',
			window.matchMedia('(prefers-color-scheme: dark)').matches
		);
	}

	updateThemeUI();
}

export function getCurrentTheme(): Theme {
	if (localStorage.theme === 'light') return 'light';
	if (localStorage.theme === 'dark') return 'dark';
	return 'system';
}

function updateThemeUI(): void {
	const currentTheme = getCurrentTheme();

	// Hide all theme icons
	document.querySelectorAll('.theme-icon').forEach(icon => {
		icon.classList.add('hidden');
	});

	// Show current theme icon
	const iconMap = {
		light: 'sun-icon',
		dark: 'moon-icon',
		system: 'system-icon',
	};

	// Update all instances
	document.querySelectorAll('[id^="theme-toggle-"]').forEach(toggle => {
		const uniqueId = toggle.id.replace('theme-toggle-', '');
		const activeIcon = document.getElementById(
			`${iconMap[currentTheme]}-${uniqueId}`
		);
		if (activeIcon) {
			activeIcon.classList.remove('hidden');
		}
	});

	// Update active option styling
	document.querySelectorAll('.theme-option').forEach(option => {
		option.classList.remove(
			'bg-section-200',
			'dark:bg-section-700',
			'font-semibold'
		);
	});

	document
		.querySelectorAll(`[data-theme="${currentTheme}"]`)
		.forEach(activeOption => {
			activeOption.classList.add(
				'bg-section-200',
				'dark:bg-section-700',
				'font-semibold'
			);
		});
}

// Dropdown management
const openDropdowns = new Set<string>();

function toggleDropdown(uniqueId: string): void {
	const dropdown = document.getElementById(`theme-dropdown-${uniqueId}`);
	const toggle = document.getElementById(`theme-toggle-${uniqueId}`);
	const arrow = document.getElementById(`dropdown-arrow-${uniqueId}`);

	if (!dropdown) return;

	const isOpen = openDropdowns.has(uniqueId);

	if (isOpen) {
		// Close dropdown
		dropdown.classList.remove('opacity-100', 'scale-100');
		dropdown.classList.add('opacity-0', 'scale-95');
		setTimeout(() => dropdown.classList.add('invisible'), 100);

		toggle?.setAttribute('aria-expanded', 'false');
		arrow?.classList.remove('rotate-180');
		openDropdowns.delete(uniqueId);
	} else {
		// Close all other dropdowns first
		openDropdowns.forEach(id => closeDropdown(id));

		// Open dropdown
		dropdown.classList.remove('invisible', 'opacity-0', 'scale-95');
		dropdown.classList.add('opacity-100', 'scale-100');

		toggle?.setAttribute('aria-expanded', 'true');
		arrow?.classList.add('rotate-180');
		openDropdowns.add(uniqueId);
	}
}

function closeDropdown(uniqueId: string): void {
	const dropdown = document.getElementById(`theme-dropdown-${uniqueId}`);
	const toggle = document.getElementById(`theme-toggle-${uniqueId}`);
	const arrow = document.getElementById(`dropdown-arrow-${uniqueId}`);

	if (!dropdown || !openDropdowns.has(uniqueId)) return;

	dropdown.classList.remove('opacity-100', 'scale-100');
	dropdown.classList.add('opacity-0', 'scale-95');
	setTimeout(() => dropdown.classList.add('invisible'), 100);

	toggle?.setAttribute('aria-expanded', 'false');
	arrow?.classList.remove('rotate-180');
	openDropdowns.delete(uniqueId);
}

function closeAllDropdowns(): void {
	openDropdowns.forEach(id => closeDropdown(id));
}

export function initializeThemeToggles(): void {
	updateThemeUI();

	// Initialize all toggle buttons
	document.querySelectorAll('[id^="theme-toggle-"]').forEach(toggle => {
		const uniqueId = toggle.id.replace('theme-toggle-', '');

		toggle.addEventListener('click', e => {
			e.preventDefault();
			e.stopPropagation();
			toggleDropdown(uniqueId);
		});
	});

	// Theme option clicks
	document.querySelectorAll('.theme-option').forEach(option => {
		option.addEventListener('click', e => {
			e.preventDefault();
			e.stopPropagation();
			const theme = (e.currentTarget as HTMLElement).getAttribute(
				'data-theme'
			) as Theme;
			const toggleId = (e.currentTarget as HTMLElement).getAttribute(
				'data-toggle-id'
			);

			if (theme) {
				setTheme(theme);
				if (toggleId) {
					closeDropdown(toggleId);
				}
			}
		});
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', e => {
		let clickedInsideToggle = false;

		// Check if clicked inside any toggle
		document.querySelectorAll('[id^="theme-toggle-"]').forEach(toggle => {
			const uniqueId = toggle.id.replace('theme-toggle-', '');
			const dropdown = document.getElementById(
				`theme-dropdown-${uniqueId}`
			);

			if (
				toggle.contains(e.target as Node) ||
				dropdown?.contains(e.target as Node)
			) {
				clickedInsideToggle = true;
			}
		});

		if (!clickedInsideToggle) {
			closeAllDropdowns();
		}
	});

	// Close dropdown on escape key
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			closeAllDropdowns();
		}
	});

	// Listen for system theme changes
	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', () => {
			if (getCurrentTheme() === 'system') {
				setTheme('system');
			}
		});
}

// Legacy function for backward compatibility
export function initializeThemeToggle(): void {
	initializeThemeToggles();
}
