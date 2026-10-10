import type { Locale } from './locales';

export type UiStrings = {
	siteName: string;
	nav: {
		home: string;
		about: string;
		lessons: string;
		deleSiele: string;
		resources: string;
		contact: string;
	};
	cta: {
		contact: string;
		learnMore: string;
	};
	language: string;
	menu: {
		open: string;
		close: string;
	};
	footer: {
		rights: string;
	};
	placeholders: {
		sectionReady: string;
	};
	form: {
		name: string;
		email: string;
		message: string;
		submit: string;
	};
	pages: {
		home: { title: string; description: string };
		about: { title: string; description: string };
		lessons: { title: string; description: string };
		deleSiele: { title: string; description: string };
		resources: { title: string; description: string };
		contact: { title: string; description: string };
	};
};

export const ui: Record<Locale, UiStrings> = {
	es: {
		siteName: 'Your Spanish Class',
		nav: {
			home: 'Inicio',
			about: 'Sobre mí',
			lessons: 'Clases de español',
			deleSiele: 'Preparación DELE y SIELE',
			resources: 'Recursos gratis',
			contact: 'Contacto',
		},
		cta: {
			contact: 'Contactar',
			learnMore: 'Saber más',
		},
		language: 'Idioma',
		menu: {
			open: 'Abrir menú',
			close: 'Cerrar menú',
		},
		footer: {
			rights: 'Todos los derechos reservados.',
		},
		placeholders: {
			sectionReady: 'Contenido próximamente.',
		},
		form: {
			name: 'Nombre',
			email: 'Email',
			message: 'Mensaje',
			submit: 'Enviar',
		},
		pages: {
			home: {
				title: 'Inicio',
				description:
					'Clases de español personalizadas y preparación DELE y SIELE con Cristina, desde Salamanca.',
			},
			about: {
				title: 'Sobre mí',
				description: 'Conoce a tu profesora de español.',
			},
			lessons: {
				title: 'Clases de español',
				description: 'Clases adaptadas a tu nivel y objetivos.',
			},
			deleSiele: {
				title: 'Preparación DELE y SIELE',
				description: 'Prepárate para los exámenes oficiales.',
			},
			resources: {
				title: 'Recursos gratis',
				description: 'Materiales gratuitos para practicar.',
			},
			contact: {
				title: 'Contacto',
				description: 'Escribe y reserva tu clase.',
			},
		},
	},
	en: {
		siteName: 'Your Spanish Class',
		nav: {
			home: 'Home',
			about: 'About me',
			lessons: 'Spanish lessons',
			deleSiele: 'DELE and SIELE preparation',
			resources: 'Free resources',
			contact: 'Contact',
		},
		cta: {
			contact: 'Contact',
			learnMore: 'Learn more',
		},
		language: 'Language',
		menu: {
			open: 'Open menu',
			close: 'Close menu',
		},
		footer: {
			rights: 'All rights reserved.',
		},
		placeholders: {
			sectionReady: 'Content coming soon.',
		},
		form: {
			name: 'Name',
			email: 'Email',
			message: 'Message',
			submit: 'Send',
		},
		pages: {
			home: {
				title: 'Home',
				description:
					'Personalized Spanish lessons and DELE & SIELE prep with Cristina, from Salamanca.',
			},
			about: {
				title: 'About me',
				description: 'Meet your Spanish teacher.',
			},
			lessons: {
				title: 'Spanish lessons',
				description: 'Lessons tailored to your level and goals.',
			},
			deleSiele: {
				title: 'DELE and SIELE preparation',
				description: 'Get ready for the official exams.',
			},
			resources: {
				title: 'Free resources',
				description: 'Free materials to practice.',
			},
			contact: {
				title: 'Contact',
				description: 'Write and book your lesson.',
			},
		},
	},
	pt: {
		siteName: 'Your Spanish Class',
		nav: {
			home: 'Início',
			about: 'Sobre mim',
			lessons: 'Aulas de espanhol',
			deleSiele: 'Preparação DELE e SIELE',
			resources: 'Recursos grátis',
			contact: 'Contacto',
		},
		cta: {
			contact: 'Contactar',
			learnMore: 'Saber mais',
		},
		language: 'Idioma',
		menu: {
			open: 'Abrir menu',
			close: 'Fechar menu',
		},
		footer: {
			rights: 'Todos os direitos reservados.',
		},
		placeholders: {
			sectionReady: 'Conteúdo em breve.',
		},
		form: {
			name: 'Nome',
			email: 'Email',
			message: 'Mensagem',
			submit: 'Enviar',
		},
		pages: {
			home: {
				title: 'Início',
				description:
					'Aulas de espanhol personalizadas e preparação DELE e SIELE com a Cristina, desde Salamanca.',
			},
			about: {
				title: 'Sobre mim',
				description: 'Conheça a sua professora de espanhol.',
			},
			lessons: {
				title: 'Aulas de espanhol',
				description: 'Aulas adaptadas ao seu nível e objetivos.',
			},
			deleSiele: {
				title: 'Preparação DELE e SIELE',
				description: 'Prepare-se para os exames oficiais.',
			},
			resources: {
				title: 'Recursos grátis',
				description: 'Materiais gratuitos para praticar.',
			},
			contact: {
				title: 'Contacto',
				description: 'Escreva e reserve a sua aula.',
			},
		},
	},
	it: {
		siteName: 'Your Spanish Class',
		nav: {
			home: 'Home',
			about: 'Chi sono',
			lessons: 'Lezioni di spagnolo',
			deleSiele: 'Preparazione DELE e SIELE',
			resources: 'Risorse gratuite',
			contact: 'Contatto',
		},
		cta: {
			contact: 'Contattami',
			learnMore: 'Scopri di più',
		},
		language: 'Lingua',
		menu: {
			open: 'Apri menu',
			close: 'Chiudi menu',
		},
		footer: {
			rights: 'Tutti i diritti riservati.',
		},
		placeholders: {
			sectionReady: 'Contenuti in arrivo.',
		},
		form: {
			name: 'Nome',
			email: 'Email',
			message: 'Messaggio',
			submit: 'Invia',
		},
		pages: {
			home: {
				title: 'Home',
				description:
					'Lezioni di spagnolo su misura e preparazione DELE e SIELE con Cristina, da Salamanca.',
			},
			about: {
				title: 'Chi sono',
				description: 'Conosci la tua insegnante di spagnolo.',
			},
			lessons: {
				title: 'Lezioni di spagnolo',
				description: 'Lezioni su misura per il tuo livello e i tuoi obiettivi.',
			},
			deleSiele: {
				title: 'Preparazione DELE e SIELE',
				description: 'Preparati agli esami ufficiali.',
			},
			resources: {
				title: 'Risorse gratuite',
				description: 'Materiali gratuiti per esercitarti.',
			},
			contact: {
				title: 'Contatto',
				description: 'Scrivi e prenota la tua lezione.',
			},
		},
	},
	fr: {
		siteName: 'Your Spanish Class',
		nav: {
			home: 'Accueil',
			about: 'À propos',
			lessons: 'Cours d’espagnol',
			deleSiele: 'Préparation DELE et SIELE',
			resources: 'Ressources gratuites',
			contact: 'Contact',
		},
		cta: {
			contact: 'Contacter',
			learnMore: 'En savoir plus',
		},
		language: 'Langue',
		menu: {
			open: 'Ouvrir le menu',
			close: 'Fermer le menu',
		},
		footer: {
			rights: 'Tous droits réservés.',
		},
		placeholders: {
			sectionReady: 'Contenu à venir.',
		},
		form: {
			name: 'Nom',
			email: 'Email',
			message: 'Message',
			submit: 'Envoyer',
		},
		pages: {
			home: {
				title: 'Accueil',
				description:
					'Cours d’espagnol personnalisés et préparation DELE et SIELE avec Cristina, depuis Salamanque.',
			},
			about: {
				title: 'À propos',
				description: 'Rencontrez votre professeure d’espagnol.',
			},
			lessons: {
				title: 'Cours d’espagnol',
				description: 'Des cours adaptés à votre niveau et vos objectifs.',
			},
			deleSiele: {
				title: 'Préparation DELE et SIELE',
				description: 'Préparez-vous aux examens officiels.',
			},
			resources: {
				title: 'Ressources gratuites',
				description: 'Des supports gratuits pour pratiquer.',
			},
			contact: {
				title: 'Contact',
				description: 'Écrivez et réservez votre cours.',
			},
		},
	},
	de: {
		siteName: 'Your Spanish Class',
		nav: {
			home: 'Start',
			about: 'Über mich',
			lessons: 'Spanischunterricht',
			deleSiele: 'DELE- und SIELE-Vorbereitung',
			resources: 'Kostenlose Ressourcen',
			contact: 'Kontakt',
		},
		cta: {
			contact: 'Kontakt',
			learnMore: 'Mehr erfahren',
		},
		language: 'Sprache',
		menu: {
			open: 'Menü öffnen',
			close: 'Menü schließen',
		},
		footer: {
			rights: 'Alle Rechte vorbehalten.',
		},
		placeholders: {
			sectionReady: 'Inhalt folgt in Kürze.',
		},
		form: {
			name: 'Name',
			email: 'E-Mail',
			message: 'Nachricht',
			submit: 'Senden',
		},
		pages: {
			home: {
				title: 'Start',
				description:
					'Persönlicher Spanischunterricht und DELE- sowie SIELE-Vorbereitung mit Cristina, aus Salamanca.',
			},
			about: {
				title: 'Über mich',
				description: 'Lerne deine Spanischlehrerin kennen.',
			},
			lessons: {
				title: 'Spanischunterricht',
				description: 'Unterricht passend zu deinem Niveau und deinen Zielen.',
			},
			deleSiele: {
				title: 'DELE- und SIELE-Vorbereitung',
				description: 'Bereite dich auf die offiziellen Prüfungen vor.',
			},
			resources: {
				title: 'Kostenlose Ressourcen',
				description: 'Kostenlose Materialien zum Üben.',
			},
			contact: {
				title: 'Kontakt',
				description: 'Schreibe und buche deine Stunde.',
			},
		},
	},
};
