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

function initReveal(): void {
	const elements = [...document.querySelectorAll('[data-reveal]')].filter(
		(el) => !el.hasAttribute('data-motion-bound'),
	);

	if (elements.length === 0) {
		return;
	}

	elements.forEach((el) => el.setAttribute('data-motion-bound', ''));

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		elements.forEach((el) => el.classList.add('is-visible'));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) {
					continue;
				}

				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.08, rootMargin: '0px 0px 80px 0px' },
	);

	elements.forEach((el) => observer.observe(el));
}

initReveal();
document.addEventListener('astro:page-load', initReveal);
