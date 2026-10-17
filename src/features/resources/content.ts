import type { ImageMetadata } from 'astro';
import type { Locale } from '@/shared/i18n';

/**
 * Add a resource:
 * 1. Put the PDF in `public/resources/{id}.pdf`
 * 2. Put page images in `src/assets/resources/pages/{id}/01.webp`, `02.webp`, …
 * 3. Append an entry to `resourceCatalog`
 * 4. Add title + description under `resourcesCopy.*.items[id]`
 */
export type ResourceId =
	| 'te-concedo-tres-deseos'
	| 'y-tu-que-opinas'
	| 'expresiones-callejeras';

const pageModules = import.meta.glob<{ default: ImageMetadata }>(
	'../../assets/resources/pages/*/*.webp',
	{ eager: true },
);

function pagesFor(id: ResourceId): ImageMetadata[] {
	return Object.entries(pageModules)
		.filter(([filePath]) => filePath.includes(`/pages/${id}/`))
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, mod]) => mod.default);
}

export type ResourceCatalogItem = {
	id: ResourceId;
	file: string;
	cover: ImageMetadata;
	pages: ImageMetadata[];
	level: string;
};

export type ResourceCopy = {
	title: string;
	description: string;
};

export type ResourcesPageCopy = {
	eyebrow: string;
	title: string;
	lead: string;
	view: string;
	download: string;
	close: string;
	viewerFallback: string;
	cta: {
		title: string;
		text: string;
		button: string;
	};
	items: Record<ResourceId, ResourceCopy>;
};

function catalogItem(
	id: ResourceId,
	file: string,
	level: string,
): ResourceCatalogItem {
	const pages = pagesFor(id);
	const cover = pages[0];
	if (!cover) {
		throw new Error(`Missing page images for resource "${id}"`);
	}

	return { id, file, cover, pages, level };
}

export const resourceCatalog: ResourceCatalogItem[] = [
	catalogItem('te-concedo-tres-deseos', 'te-concedo-tres-deseos.pdf', 'B1+'),
	catalogItem('y-tu-que-opinas', 'y-tu-que-opinas.pdf', 'A1–B2'),
	catalogItem('expresiones-callejeras', 'expresiones-callejeras.pdf', 'B1+'),
];

export const resourcesCopy: Record<Locale, ResourcesPageCopy> = {
	es: {
		eyebrow: 'Recursos gratis',
		title: 'Materiales para practicar, cuando quieras',
		lead: 'Infografías para desear, opinar y sonar más natural. Ábrelas aquí mismo o descárgalas.',
		view: 'Ver',
		download: 'Descargar',
		close: 'Cerrar',
		viewerFallback: '¿Quieres el archivo original? Descárgalo en PDF.',
		cta: {
			title: '¿Lo practicamos en clase?',
			text: 'Cuéntame tu nivel y lo que quieres conseguir. Si encaja, reservamos tu clase de prueba.',
			button: 'Contactar',
		},
		items: {
			'te-concedo-tres-deseos': {
				title: '¡Te concedo tres deseos!',
				description:
					'Ojalá, que + subjuntivo y verbos de deseo, con ejemplos para decir lo que quieres.',
			},
			'y-tu-que-opinas': {
				title: 'Y tú, ¿qué opinas?',
				description:
					'Fórmulas para dar tu opinión, de A1 a B2: creo que, en mi opinión, a mi modo de ver…',
			},
			'expresiones-callejeras': {
				title: 'Expresiones callejeras en español',
				description:
					'Expresiones coloquiales con significado y ejemplos: meter la pata, pasarse tres pueblos y más.',
			},
		},
	},
	en: {
		eyebrow: 'Free resources',
		title: 'Materials to practise, whenever you want',
		lead: 'Infographics to wish, give opinions and sound more natural. Open them here or download them.',
		view: 'View',
		download: 'Download',
		close: 'Close',
		viewerFallback: 'Want the original file? Download it as a PDF.',
		cta: {
			title: 'Shall we practise this in class?',
			text: 'Tell me your level and what you want to achieve. If it feels right, we book your trial lesson.',
			button: 'Contact',
		},
		items: {
			'te-concedo-tres-deseos': {
				title: '¡Te concedo tres deseos!',
				description:
					'Ojalá, que + subjunctive and verbs of wishing, with examples to say what you want.',
			},
			'y-tu-que-opinas': {
				title: 'Y tú, ¿qué opinas?',
				description:
					'Phrases to give your opinion, from A1 to B2: creo que, en mi opinión, a mi modo de ver…',
			},
			'expresiones-callejeras': {
				title: 'Expresiones callejeras en español',
				description:
					'Colloquial expressions with meaning and examples: meter la pata, pasarse tres pueblos and more.',
			},
		},
	},
	pt: {
		eyebrow: 'Recursos grátis',
		title: 'Materiais para praticar, quando quiseres',
		lead: 'Infografias para desejar, opinar e soar mais natural. Abre-as aqui ou descarrega-as.',
		view: 'Ver',
		download: 'Descarregar',
		close: 'Fechar',
		viewerFallback: 'Queres o ficheiro original? Descarrega-o em PDF.',
		cta: {
			title: 'Praticamos isto na aula?',
			text: 'Conta-me o teu nível e o que queres conseguir. Se fizer sentido, reservamos a tua aula experimental.',
			button: 'Contactar',
		},
		items: {
			'te-concedo-tres-deseos': {
				title: '¡Te concedo tres deseos!',
				description:
					'Ojalá, que + subjuntivo e verbos de desejo, com exemplos para dizer o que queres.',
			},
			'y-tu-que-opinas': {
				title: 'Y tú, ¿qué opinas?',
				description:
					'Fórmulas para dar a tua opinião, de A1 a B2: creo que, en mi opinión, a mi modo de ver…',
			},
			'expresiones-callejeras': {
				title: 'Expresiones callejeras en español',
				description:
					'Expressões coloquiais com significado e exemplos: meter la pata, pasarse tres pueblos e mais.',
			},
		},
	},
	it: {
		eyebrow: 'Risorse gratuite',
		title: 'Materiali per esercitarti, quando vuoi',
		lead: 'Infografiche per esprimere desideri, dare opinioni e suonare più naturale. Aprile qui o scaricale.',
		view: 'Apri',
		download: 'Scarica',
		close: 'Chiudi',
		viewerFallback: 'Vuoi il file originale? Scaricalo in PDF.',
		cta: {
			title: 'Lo pratichiamo in classe?',
			text: 'Raccontami il tuo livello e cosa vuoi ottenere. Se torna, prenotiamo la lezione di prova.',
			button: 'Contattami',
		},
		items: {
			'te-concedo-tres-deseos': {
				title: '¡Te concedo tres deseos!',
				description:
					'Ojalá, que + congiuntivo e verbi di desiderio, con esempi per dire quello che vuoi.',
			},
			'y-tu-que-opinas': {
				title: 'Y tú, ¿qué opinas?',
				description:
					'Formule per dare la tua opinione, da A1 a B2: creo que, en mi opinión, a mi modo de ver…',
			},
			'expresiones-callejeras': {
				title: 'Expresiones callejeras en español',
				description:
					'Espressioni colloquiali con significato ed esempi: meter la pata, pasarse tres pueblos e altro.',
			},
		},
	},
	fr: {
		eyebrow: 'Ressources gratuites',
		title: 'Des supports pour pratiquer, quand vous voulez',
		lead: 'Des infographies pour souhaiter, donner son avis et sonner plus naturel. Ouvrez-les ici ou téléchargez-les.',
		view: 'Voir',
		download: 'Télécharger',
		close: 'Fermer',
		viewerFallback: 'Vous voulez le fichier original ? Téléchargez-le en PDF.',
		cta: {
			title: 'On pratique ça en cours ?',
			text: 'Dites-moi votre niveau et ce que vous voulez réussir. Si cela convient, on réserve votre cours d’essai.',
			button: 'Contacter',
		},
		items: {
			'te-concedo-tres-deseos': {
				title: '¡Te concedo tres deseos!',
				description:
					'Ojalá, que + subjonctif et verbes de souhait, avec des exemples pour dire ce que vous voulez.',
			},
			'y-tu-que-opinas': {
				title: 'Y tú, ¿qué opinas?',
				description:
					'Formules pour donner votre avis, de A1 à B2 : creo que, en mi opinión, a mi modo de ver…',
			},
			'expresiones-callejeras': {
				title: 'Expresiones callejeras en español',
				description:
					'Expressions familières avec sens et exemples : meter la pata, pasarse tres pueblos, et plus.',
			},
		},
	},
	de: {
		eyebrow: 'Kostenlose Ressourcen',
		title: 'Material zum Üben, wann du willst',
		lead: 'Infografiken zum Wünschen, Meinen und natürlicher klingen. Hier öffnen oder herunterladen.',
		view: 'Ansehen',
		download: 'Download',
		close: 'Schließen',
		viewerFallback: 'Du willst die Originaldatei? Lade sie als PDF herunter.',
		cta: {
			title: 'Üben wir das im Unterricht?',
			text: 'Erzähl mir dein Niveau und dein Ziel. Wenn es passt, buchen wir deine Probestunde.',
			button: 'Kontakt',
		},
		items: {
			'te-concedo-tres-deseos': {
				title: '¡Te concedo tres deseos!',
				description:
					'Ojalá, que + Subjuntivo und Wunschverben, mit Beispielen, um zu sagen, was du willst.',
			},
			'y-tu-que-opinas': {
				title: 'Y tú, ¿qué opinas?',
				description:
					'Sätze, um deine Meinung zu sagen, von A1 bis B2: creo que, en mi opinión, a mi modo de ver…',
			},
			'expresiones-callejeras': {
				title: 'Expresiones callejeras en español',
				description:
					'Umgangssprachliche Ausdrücke mit Bedeutung und Beispielen: meter la pata, pasarse tres pueblos und mehr.',
			},
		},
	},
};

export type ResourceCardItem = ResourceCatalogItem &
	ResourceCopy & {
		href: string;
	};

export function getResources(locale: Locale): {
	page: Omit<ResourcesPageCopy, 'items'>;
	items: ResourceCardItem[];
} {
	const copy = resourcesCopy[locale];
	const { items, ...page } = copy;

	return {
		page,
		items: resourceCatalog.map((item) => ({
			...item,
			...items[item.id],
			href: `/resources/${item.file}`,
		})),
	};
}
