import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '@/shared/i18n';

export type NavKey =
	| 'home'
	| 'about'
	| 'lessons'
	| 'deleSiele'
	| 'resources'
	| 'contact';

export const navRoutes: Record<NavKey, string> = {
	home: '',
	about: 'about',
	lessons: 'lessons',
	deleSiele: 'dele-siele',
	resources: 'resources',
	contact: 'contact',
};

export function localePath(locale: Locale, path = ''): string {
	return getRelativeLocaleUrl(locale, path);
}

export function stripLocaleFromPath(pathname: string, locale: string): string {
	const prefix = `/${locale}`;

	if (pathname === prefix || pathname === `${prefix}/`) {
		return '';
	}

	if (pathname.startsWith(`${prefix}/`)) {
		return pathname.slice(prefix.length + 1).replace(/\/$/, '');
	}

	return pathname.replace(/^\//, '').replace(/\/$/, '');
}
