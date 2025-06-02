export interface PreloaderConfig {
	readonly containerSize: {
		readonly width: number;
		readonly height: number;
	};
	readonly letterSize: number;
	readonly zIndex: {
		readonly overlay: number;
		readonly polygon: number;
		readonly letter: number;
	};
}
