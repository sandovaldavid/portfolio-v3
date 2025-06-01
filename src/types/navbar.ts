export interface NavbarStateConfig {
	classes: {
		remove: string[];
		add: string[];
	};
	styles: {
		backdropFilter: string;
		bgOpacity: string;
	};
}

export interface NavbarStates {
	normal: NavbarStateConfig;
	floating: NavbarStateConfig;
}

export interface NavbarConfig {
	scrollThreshold: number;
	delays: {
		floating: number;
		normal: number;
	};
	states: NavbarStates;
}

export type NavbarState = 'normal' | 'floating';
export type CleanupFunction = () => void;
