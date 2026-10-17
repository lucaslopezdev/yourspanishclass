const DIALOG = '[data-resource-viewer]';

function dialogEl(): HTMLDialogElement | null {
	return document.querySelector<HTMLDialogElement>(DIALOG);
}

function titleEl(dialog: HTMLDialogElement): HTMLElement | null {
	return dialog.querySelector('[data-resource-title]');
}

function downloadEls(dialog: HTMLDialogElement): HTMLAnchorElement[] {
	return [...dialog.querySelectorAll<HTMLAnchorElement>('[data-resource-download]')];
}

function triggerFor(id: string): HTMLElement | null {
	return document.querySelector<HTMLElement>(
		`[data-resource-open][data-resource-id="${CSS.escape(id)}"]`,
	);
}

function resourceIdFromHash(): string {
	return decodeURIComponent(location.hash.replace(/^#/, '')).trim();
}

function showPages(dialog: HTMLDialogElement, id: string): void {
	dialog.querySelectorAll<HTMLElement>('[data-resource-page-set]').forEach((set) => {
		set.hidden = set.dataset.resourcePageSet !== id;
	});

	const visible = dialog.querySelector<HTMLElement>(
		`[data-resource-page-set="${CSS.escape(id)}"]`,
	);
	visible?.closest('[data-resource-pages]')?.scrollTo({ top: 0 });
}

export function openResource(id: string): void {
	const dialog = dialogEl();
	const trigger = triggerFor(id);
	if (!dialog || !trigger) {
		return;
	}

	const title = trigger.dataset.resourceTitle;
	const href = trigger.dataset.resourceHref;
	const file = trigger.dataset.resourceFile;
	if (!title || !href) {
		return;
	}

	const titleNode = titleEl(dialog);
	if (titleNode) {
		titleNode.textContent = title;
	}

	for (const download of downloadEls(dialog)) {
		download.href = href;
		download.download = file || '';
	}

	showPages(dialog, id);

	if (!dialog.open) {
		dialog.showModal();
	}

	const nextHash = `#${id}`;
	if (location.hash !== nextHash) {
		history.replaceState(null, '', `${location.pathname}${location.search}${nextHash}`);
	}
}

export function closeResource(): void {
	const dialog = dialogEl();
	if (!dialog?.open) {
		return;
	}

	dialog.close();
}

function clearHash(): void {
	if (!location.hash) {
		return;
	}

	history.replaceState(null, '', `${location.pathname}${location.search}`);
}

function openFromHash(): void {
	const id = resourceIdFromHash();
	if (!id) {
		return;
	}

	openResource(id);
}

document.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof Element)) {
		return;
	}

	const openBtn = target.closest<HTMLElement>('[data-resource-open]');
	if (openBtn?.dataset.resourceId) {
		event.preventDefault();
		openResource(openBtn.dataset.resourceId);
		return;
	}

	if (target.closest('[data-resource-close]')) {
		closeResource();
	}
});

document.addEventListener(
	'close',
	(event) => {
		const dialog = event.target;
		if (!(dialog instanceof HTMLDialogElement) || !dialog.matches(DIALOG)) {
			return;
		}

		clearHash();
	},
	true,
);

openFromHash();
document.addEventListener('astro:page-load', openFromHash);
window.addEventListener('hashchange', openFromHash);
