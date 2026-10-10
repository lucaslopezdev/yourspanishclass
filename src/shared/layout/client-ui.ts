import { LOCALE_STORAGE_KEY } from '@/shared/lib/detect-locale';

const DISCLOSURE = '[data-disclosure]';

function closeDisclosures(except?: HTMLDetailsElement) {
	document.querySelectorAll(DISCLOSURE).forEach((el) => {
		if (el instanceof HTMLDetailsElement && el !== except) {
			el.open = false;
		}
	});
}

document.addEventListener(
	'toggle',
	(event) => {
		const el = event.target;
		if (!(el instanceof HTMLDetailsElement) || !el.open) {
			return;
		}

		if (el.matches(DISCLOSURE)) {
			closeDisclosures(el);
		}
	},
	true,
);

document.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof Element)) {
		return;
	}

	const localeLink = target.closest<HTMLAnchorElement>('[data-locale-link]');
	if (localeLink?.dataset.locale) {
		try {
			localStorage.setItem(LOCALE_STORAGE_KEY, localeLink.dataset.locale);
		} catch {
			// ignore storage access errors
		}
	}

	if (!target.closest(DISCLOSURE)) {
		closeDisclosures();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeDisclosures();
	}
});

document.addEventListener('submit', (event) => {
	const form = event.target;
	if (form instanceof HTMLFormElement && form.hasAttribute('data-contact-form')) {
		event.preventDefault();
	}
});
