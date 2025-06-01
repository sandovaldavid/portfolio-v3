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

	const activeIcon = document.getElementById(iconMap[currentTheme]);
	if (activeIcon) {
		activeIcon.classList.remove('hidden');
	}

	// Update active option styling
	document.querySelectorAll('.theme-option').forEach(option => {
		option.classList.remove(
			'bg-section-200',
			'dark:bg-section-700',
			'font-semibold'
		);
	});

	const activeOption = document.querySelector(
		`[data-theme="${currentTheme}"]`
	);
	if (activeOption) {
		activeOption.classList.add(
			'bg-section-200',
			'dark:bg-section-700',
			'font-semibold'
		);
	}
}

// Dropdown management
let isDropdownOpen = false;

function toggleDropdown(): void {
	const dropdown = document.getElementById('theme-dropdown');
	const toggle = document.getElementById('theme-toggle');
	const arrow = document.getElementById('dropdown-arrow');

	if (!dropdown) return;

	if (isDropdownOpen) {
		// Close dropdown
		dropdown.classList.remove('opacity-100', 'scale-100');
		dropdown.classList.add('opacity-0', 'scale-95');
		setTimeout(() => dropdown.classList.add('invisible'), 100);

		toggle?.setAttribute('aria-expanded', 'false');
		arrow?.classList.remove('rotate-180');
		isDropdownOpen = false;
	} else {
		// Open dropdown
		dropdown.classList.remove('invisible', 'opacity-0', 'scale-95');
		dropdown.classList.add('opacity-100', 'scale-100');

		toggle?.setAttribute('aria-expanded', 'true');
		arrow?.classList.add('rotate-180');
		isDropdownOpen = true;
	}
}

function closeDropdown(): void {
	if (isDropdownOpen) {
		toggleDropdown();
	}
}

export function initializeThemeToggle(): void {
	updateThemeUI();

	// Toggle button click
	const themeToggle = document.getElementById('theme-toggle');
	themeToggle?.addEventListener('click', e => {
		e.preventDefault();
		e.stopPropagation();
		toggleDropdown();
	});

	// Theme option clicks
	document.querySelectorAll('.theme-option').forEach(option => {
		option.addEventListener('click', e => {
			e.preventDefault();
			e.stopPropagation();
			const theme = (e.currentTarget as HTMLElement).getAttribute(
				'data-theme'
			) as Theme;
			if (theme) {
				setTheme(theme);
				closeDropdown();
			}
		});
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', e => {
		if (
			isDropdownOpen &&
			!themeToggle?.contains(e.target as Node) &&
			!document
				.getElementById('theme-dropdown')
				?.contains(e.target as Node)
		) {
			closeDropdown();
		}
	});

	// Close dropdown on escape key
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape' && isDropdownOpen) {
			closeDropdown();
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
