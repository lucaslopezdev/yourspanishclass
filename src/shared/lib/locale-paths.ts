import { locales } from '@/shared/i18n';

export function localeStaticPaths() {
	return locales.map((locale) => ({
		params: { locale },
	}));
}
