import type { Tag } from '../types/tags';
import { CSSIcon } from '../components/icons/languages';

export const TAGS: Record<string, Tag> = {
	CSS: {
		name: 'CSS',
		class: 'text-blue-500 dark:text-blue-400',
		icon: CSSIcon,
	},
};
