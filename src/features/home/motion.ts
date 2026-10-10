function prefersReducedMotion(): boolean {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function easeOutCubic(t: number): number {
	return 1 - (1 - t) ** 3;
}

function animateCount(el: HTMLElement): void {
	const target = Number(el.dataset.countTo ?? '0');
	const prefix = el.dataset.countPrefix ?? '';
	const duration = Number(el.dataset.countDuration ?? '1400');

	if (prefersReducedMotion() || !Number.isFinite(target)) {
		el.textContent = `${prefix}${target}`;
		return;
	}

	const start = performance.now();

	const frame = (now: number) => {
		const progress = Math.min((now - start) / duration, 1);
		const value = Math.round(easeOutCubic(progress) * target);
		el.textContent = `${prefix}${value}`;

		if (progress < 1) {
			requestAnimationFrame(frame);
		}
	};

	requestAnimationFrame(frame);
}

function observe(selector: string, onEnter: (el: Element) => void): void {
	const elements = [...document.querySelectorAll(selector)].filter(
		(el) => !el.hasAttribute('data-motion-bound'),
	);
	if (elements.length === 0) {
		return;
	}

	elements.forEach((el) => el.setAttribute('data-motion-bound', ''));

	if (prefersReducedMotion()) {
		elements.forEach((el) => onEnter(el));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) {
					continue;
				}

				onEnter(entry.target);
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.35 },
	);

	elements.forEach((el) => observer.observe(el));
}

export function initHomeMotion(): void {
	observe('[data-count-up]', (el) => {
		if (el instanceof HTMLElement) {
			animateCount(el);
		}
	});

	observe('[data-reveal]', (el) => {
		el.classList.add('is-visible');
	});
}

initHomeMotion();
document.addEventListener('astro:page-load', initHomeMotion);
