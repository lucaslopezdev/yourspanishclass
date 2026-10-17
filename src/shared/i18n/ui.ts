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
		madeBy: string;
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
			madeBy: 'Hecho por Lucas Lopez',
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
				description:
					'Cristina, filóloga y profesora de español en Salamanca. Examinadora DELE y preparadora SIELE.',
			},
			lessons: {
				title: 'Clases de español',
				description:
					'Clases individuales y en grupos de 3, con packs desde 27,50 €. Reunión previa de 30 min para diseñar tu plan.',
			},
			deleSiele: {
				title: 'Preparación DELE y SIELE',
				description:
					'Preparación DELE y SIELE con examinadora oficial. Simulacros, materiales del Cervantes y un plan a tu nivel.',
			},
			resources: {
				title: 'Recursos gratis',
				description:
					'Infografías y materiales gratuitos para practicar español: deseos, opiniones y expresiones coloquiales.',
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
			madeBy: 'Hecho por Lucas Lopez',
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
				description:
					'Cristina, Spanish teacher and philologist in Salamanca. DELE examiner and SIELE trainer.',
			},
			lessons: {
				title: 'Spanish lessons',
				description:
					'One-to-one and groups of 3, from 27,50 €. A 30-minute intake to design your plan.',
			},
			deleSiele: {
				title: 'DELE and SIELE preparation',
				description:
					'DELE and SIELE prep with an official examiner. Mock exams, Cervantes materials and a plan at your level.',
			},
			resources: {
				title: 'Free resources',
				description:
					'Free infographics and materials to practise Spanish: wishes, opinions and colloquial expressions.',
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
			madeBy: 'Hecho por Lucas Lopez',
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
				description:
					'Cristina, filóloga e professora de espanhol em Salamanca. Examinadora DELE e preparadora SIELE.',
			},
			lessons: {
				title: 'Aulas de espanhol',
				description:
					'Aulas individuais e em grupos de 3, com packs desde 27,50 €. Reunião prévia de 30 min para desenhar o teu plano.',
			},
			deleSiele: {
				title: 'Preparação DELE e SIELE',
				description:
					'Preparação DELE e SIELE com examinadora oficial. Simulacros, materiais do Cervantes e um plano ao teu nível.',
			},
			resources: {
				title: 'Recursos grátis',
				description:
					'Infografias e materiais gratuitos para praticar espanhol: desejos, opiniões e expressões coloquiais.',
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
			madeBy: 'Hecho por Lucas Lopez',
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
				description:
					'Cristina, filologa e insegnante di spagnolo a Salamanca. Esaminatrice DELE e preparatrice SIELE.',
			},
			lessons: {
				title: 'Lezioni di spagnolo',
				description:
					'Lezioni individuali e in gruppi di 3, con pacchetti da 27,50 €. Colloquio di 30 min per costruire il tuo piano.',
			},
			deleSiele: {
				title: 'Preparazione DELE e SIELE',
				description:
					'Preparazione DELE e SIELE con esaminatrice ufficiale. Simulazioni, materiali Cervantes e un piano al tuo livello.',
			},
			resources: {
				title: 'Risorse gratuite',
				description:
					'Infografiche e materiali gratuiti per esercitarti in spagnolo: desideri, opinioni ed espressioni colloquiali.',
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
			madeBy: 'Hecho por Lucas Lopez',
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
				description:
					'Cristina, philologue et professeure d’espagnol à Salamanque. Examinatrice DELE et préparatrice SIELE.',
			},
			lessons: {
				title: 'Cours d’espagnol',
				description:
					'Cours individuels et en groupes de 3, à partir de 27,50 €. Entretien de 30 min pour concevoir votre plan.',
			},
			deleSiele: {
				title: 'Préparation DELE et SIELE',
				description:
					'Préparation DELE et SIELE avec examinatrice officielle. Simulations, supports du Cervantes et un plan à votre niveau.',
			},
			resources: {
				title: 'Ressources gratuites',
				description:
					'Infographies et supports gratuits pour pratiquer l’espagnol : souhaits, avis et expressions familières.',
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
			madeBy: 'Hecho por Lucas Lopez',
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
				description:
					'Cristina, Spanischlehrerin und Philologin in Salamanca. DELE-Prüferin und SIELE-Trainerin.',
			},
			lessons: {
				title: 'Spanischunterricht',
				description:
					'Einzelunterricht und Gruppen zu 3, ab 27,50 €. Vorgespräch von 30 Min., um deinen Plan zu gestalten.',
			},
			deleSiele: {
				title: 'DELE- und SIELE-Vorbereitung',
				description:
					'DELE- und SIELE-Vorbereitung mit offizieller Prüferin. Simulationen, Cervantes-Materialien und ein Plan auf deinem Niveau.',
			},
			resources: {
				title: 'Kostenlose Ressourcen',
				description:
					'Kostenlose Infografiken und Materialien zum Spanischüben: Wünsche, Meinungen und umgangssprachliche Ausdrücke.',
			},
			contact: {
				title: 'Kontakt',
				description: 'Schreibe und buche deine Stunde.',
			},
		},
	},
};
