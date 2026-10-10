export const locales = ['es', 'en', 'pt', 'it', 'fr', 'de'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeLabels: Record<Locale, string> = {
	es: 'Español',
	en: 'English',
	pt: 'Português',
	it: 'Italiano',
	fr: 'Français',
	de: 'Deutsch',
};

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}
