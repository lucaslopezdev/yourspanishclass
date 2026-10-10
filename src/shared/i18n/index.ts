import { defaultLocale, isLocale, type Locale } from './locales';
import { ui, type UiStrings } from './ui';

export { defaultLocale, isLocale, localeLabels, locales, type Locale } from './locales';
export { ui, type UiStrings } from './ui';

export function getTranslations(locale: string): UiStrings {
	if (isLocale(locale)) {
		return ui[locale];
	}

	return ui[defaultLocale];
}

export function resolveLocale(locale: string | undefined): Locale {
	if (locale && isLocale(locale)) {
		return locale;
	}

	return defaultLocale;
}
