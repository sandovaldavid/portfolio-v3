import en from '../locales/en.json';
import es from '../locales/es.json';

type TranslationType = {
	[key: string]: string;
};

type SupportedLocale = 'en' | 'es';

const translations: Record<SupportedLocale, TranslationType> = {
	en,
	es,
};

export function t(lang: string | undefined, key: string): string {
	const locale = (lang === 'es' ? 'es' : 'en') as SupportedLocale;
	return translations[locale][key] || key;
}

export function getSupportedLocale(
	locale: string | undefined
): SupportedLocale {
	return locale === 'es' ? 'es' : 'en';
}
