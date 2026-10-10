import { defaultLocale, isLocale, type Locale } from '@/shared/i18n';

export const LOCALE_STORAGE_KEY = 'ysc-locale';

export function mapNavigatorLanguage(language: string): Locale | null {
	const normalized = language.toLowerCase().replace('_', '-');
	const base = normalized.split('-')[0] ?? '';

	if (isLocale(normalized)) {
		return normalized;
	}

	if (isLocale(base)) {
		return base;
	}

	return null;
}

export function detectLocaleFromLanguages(languages: readonly string[]): Locale {
	for (const language of languages) {
		const matched = mapNavigatorLanguage(language);
		if (matched) {
			return matched;
		}
	}

	return defaultLocale;
}
