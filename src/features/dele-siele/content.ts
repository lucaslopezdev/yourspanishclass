import type { Locale } from '@/shared/i18n';

export const examDateLinks = {
	dele: 'https://examenes.cervantes.es/es/dele/cuando',
	siele: 'https://examenes.cervantes.es/es/siele/cuando',
} as const;

export type DeleSieleCopy = {
	hero: {
		eyebrow: string;
		title: string;
		lead: string;
	};
	compare: {
		title: string;
		lead: string;
		dele: {
			title: string;
			text: string;
			points: string[];
		};
		siele: {
			title: string;
			text: string;
			points: string[];
		};
	};
	why: {
		title: string;
		lead: string;
		items: { title: string; text: string }[];
	};
	prep: {
		title: string;
		lead: string;
		price: string;
		dele: { title: string; points: string[] };
		siele: { title: string; points: string[] };
	};
	dates: {
		title: string;
		lead: string;
		dele: string;
		siele: string;
	};
	cta: {
		title: string;
		text: string;
		button: string;
	};
};

export const deleSieleCopy: Record<Locale, DeleSieleCopy> = {
	es: {
		hero: {
			eyebrow: 'Preparación DELE y SIELE',
			title: 'El diploma es el objetivo. Yo pongo el mapa',
			lead: 'Soy examinadora DELE de todos los niveles y preparadora SIELE. Te acompaño con un plan, materiales oficiales y simulacros hasta el día del examen.',
		},
		compare: {
			title: '¿DELE o SIELE?',
			lead: 'Depende de tu plazo y de lo que necesites acreditar. Los dos son oficiales; el encaje es distinto.',
			dele: {
				title: 'DELE',
				text: 'El Diploma de Español del Instituto Cervantes. Prestigioso, por niveles, y para toda la vida.',
				points: [
					'A1–C2, un examen por nivel',
					'Instituto Cervantes y Ministerio de Educación',
					'No caduca',
					'Convocatorias en fechas fijas',
				],
			},
			siele: {
				title: 'SIELE',
				text: 'Una prueba digital y flexible, con una calificación multinivel de las cuatro destrezas.',
				points: [
					'Puntuación A1–C1 por destreza',
					'Examen por ordenador, fechas flexibles',
					'El certificado vale cinco años',
					'Ideal si necesitas acreditar el nivel con rapidez',
				],
			},
		},
		why: {
			title: 'Por qué certificar',
			lead: 'Un título oficial abre puertas que un “nivel B2” en el currículum no abre.',
			items: [
				{
					title: 'Reconocimiento',
					text: 'El DELE es el certificado oficial del Instituto Cervantes, valorado en más de 100 países.',
				},
				{
					title: 'Vigencia',
					text: 'El DELE no caduca. Una vez aprobado, el diploma es para siempre.',
				},
				{
					title: 'Trabajo',
					text: 'Empresas internacionales lo piden o lo premian: un idioma acreditado pesa en un proceso de selección.',
				},
				{
					title: 'Universidad',
					text: 'Grados, másteres, becas e intercambios en el mundo hispano suelen pedir o valorar el DELE.',
				},
				{
					title: 'Nacionalidad',
					text: 'En España, el DELE A2 forma parte del trámite de nacionalidad y de otros procesos administrativos.',
				},
				{
					title: 'Confianza',
					text: 'Preparar un examen ordena el estudio y da seguridad para hablar en contextos reales.',
				},
			],
		},
		prep: {
			title: 'Cómo te preparo',
			lead: 'Tras una valoración breve, te propongo un plan y un presupuesto según tu nivel, tu plazo y el examen que elijas.',
			price: 'El precio se ajusta al número de sesiones. Lo vemos juntos después de esa primera conversación.',
			dele: {
				title: 'Preparación DELE',
				points: [
					'Simulacros por destreza',
					'Estrategia para cada prueba',
					'Corrección con rúbricas oficiales',
					'Gestión del tiempo',
					'Programas para A2, B1, B2 y C1',
				],
			},
			siele: {
				title: 'Preparación SIELE',
				points: [
					'Ejercicios de la plataforma oficial',
					'Práctica intensiva de las cuatro destrezas',
					'Revisión de textos y grabaciones',
					'Pistas para subir la puntuación',
				],
			},
		},
		dates: {
			title: 'Convocatorias',
			lead: 'Las fechas las publica el Instituto Cervantes. Aquí las consultas oficiales.',
			dele: 'Fechas DELE',
			siele: 'Fechas SIELE',
		},
		cta: {
			title: '¿Lo preparamos juntos?',
			text: 'Cuéntame el examen, el nivel y la convocatoria. Si encaja, reservamos tu clase de prueba.',
			button: 'Contactar',
		},
	},
	en: {
		hero: {
			eyebrow: 'DELE and SIELE prep',
			title: 'The diploma is the goal. I bring the map',
			lead: 'I am a DELE examiner at every level and a SIELE trainer. I walk with you through a plan, official materials and mocks until exam day.',
		},
		compare: {
			title: 'DELE or SIELE?',
			lead: 'It depends on your deadline and what you need to prove. Both are official; they fit different lives.',
			dele: {
				title: 'DELE',
				text: 'The Instituto Cervantes Diploma of Spanish. Prestigious, by level, and for life.',
				points: [
					'A1–C2, one exam per level',
					'Instituto Cervantes and the Ministry of Education',
					'It does not expire',
					'Fixed exam dates',
				],
			},
			siele: {
				title: 'SIELE',
				text: 'A digital, flexible test with a multilevel score across the four skills.',
				points: [
					'A1–C1 score by skill',
					'Computer-based, flexible dates',
					'The certificate lasts five years',
					'Ideal if you need to prove your level quickly',
				],
			},
		},
		why: {
			title: 'Why certify',
			lead: 'An official diploma opens doors that a “B2 level” on a CV does not.',
			items: [
				{
					title: 'Recognition',
					text: 'DELE is the official Instituto Cervantes certificate, valued in more than 100 countries.',
				},
				{
					title: 'Validity',
					text: 'DELE does not expire. Once you pass, the diploma is yours for life.',
				},
				{
					title: 'Work',
					text: 'International companies ask for it or reward it: a proven language weighs in hiring.',
				},
				{
					title: 'University',
					text: 'Degrees, master’s, grants and exchanges in the Spanish-speaking world often require or value DELE.',
				},
				{
					title: 'Nationality',
					text: 'In Spain, DELE A2 is part of the nationality process and other administrative steps.',
				},
				{
					title: 'Confidence',
					text: 'Preparing for an exam orders your study and makes you braver in real conversations.',
				},
			],
		},
		prep: {
			title: 'How I prepare you',
			lead: 'After a short assessment I propose a plan and a quote for your level, your deadline and the exam you choose.',
			price: 'The fee depends on the number of sessions. We settle it after that first conversation.',
			dele: {
				title: 'DELE prep',
				points: [
					'Mocks by skill',
					'A strategy for each paper',
					'Feedback with official rubrics',
					'Time management',
					'Programmes for A2, B1, B2 and C1',
				],
			},
			siele: {
				title: 'SIELE prep',
				points: [
					'Exercises from the official platform',
					'Intensive practice of the four skills',
					'Review of texts and recordings',
					'Tips to raise your score',
				],
			},
		},
		dates: {
			title: 'Exam dates',
			lead: 'Instituto Cervantes publishes the calendar. Here are the official pages.',
			dele: 'DELE dates',
			siele: 'SIELE dates',
		},
		cta: {
			title: 'Shall we prepare it together?',
			text: 'Tell me the exam, the level and the sitting. If it fits, we book your trial lesson.',
			button: 'Contact',
		},
	},
	pt: {
		hero: {
			eyebrow: 'Preparação DELE e SIELE',
			title: 'O diploma é o objetivo. Eu ponho o mapa',
			lead: 'Sou examinadora DELE de todos os níveis e preparadora SIELE. Acompanho-te com um plano, materiais oficiais e simulacros até ao dia do exame.',
		},
		compare: {
			title: 'DELE ou SIELE?',
			lead: 'Depende do teu prazo e do que precisas de creditar. Os dois são oficiais; o encaixe é diferente.',
			dele: {
				title: 'DELE',
				text: 'O Diploma de Espanhol do Instituto Cervantes. Prestigioso, por níveis, e para a vida.',
				points: [
					'A1–C2, um exame por nível',
					'Instituto Cervantes e Ministério da Educação',
					'Não caduca',
					'Convocatórias em datas fixas',
				],
			},
			siele: {
				title: 'SIELE',
				text: 'Uma prova digital e flexível, com uma classificação multinível das quatro competências.',
				points: [
					'Pontuação A1–C1 por competência',
					'Exame no computador, datas flexíveis',
					'O certificado vale cinco anos',
					'Ideal se precisas de creditar o nível depressa',
				],
			},
		},
		why: {
			title: 'Porquê certificar',
			lead: 'Um título oficial abre portas que um “nível B2” no currículo não abre.',
			items: [
				{
					title: 'Reconhecimento',
					text: 'O DELE é o certificado oficial do Instituto Cervantes, valorizado em mais de 100 países.',
				},
				{
					title: 'Validade',
					text: 'O DELE não caduca. Depois de aprovado, o diploma é para sempre.',
				},
				{
					title: 'Trabalho',
					text: 'Empresas internacionais pedem-no ou premiam-no: uma língua creditada pesa num processo de seleção.',
				},
				{
					title: 'Universidade',
					text: 'Licenciaturas, mestrados, bolsas e intercâmbios no mundo hispano costumam pedir ou valorizar o DELE.',
				},
				{
					title: 'Nacionalidade',
					text: 'Em Espanha, o DELE A2 faz parte do processo de nacionalidade e de outros trâmites.',
				},
				{
					title: 'Confiança',
					text: 'Preparar um exame ordena o estudo e dá segurança para falar em contextos reais.',
				},
			],
		},
		prep: {
			title: 'Como te preparo',
			lead: 'Após uma avaliação breve, proponho um plano e um orçamento segundo o teu nível, o teu prazo e o exame que escolheres.',
			price: 'O preço ajusta-se ao número de sessões. Vemo-lo juntos depois dessa primeira conversa.',
			dele: {
				title: 'Preparação DELE',
				points: [
					'Simulacros por competência',
					'Estratégia para cada prova',
					'Correção com rubricas oficiais',
					'Gestão do tempo',
					'Programas para A2, B1, B2 e C1',
				],
			},
			siele: {
				title: 'Preparação SIELE',
				points: [
					'Exercícios da plataforma oficial',
					'Prática intensiva das quatro competências',
					'Revisão de textos e gravações',
					'Dicas para subir a pontuação',
				],
			},
		},
		dates: {
			title: 'Convocatórias',
			lead: 'As datas são do Instituto Cervantes. Aqui estão as páginas oficiais.',
			dele: 'Datas DELE',
			siele: 'Datas SIELE',
		},
		cta: {
			title: 'Preparamos juntos?',
			text: 'Conta-me o exame, o nível e a convocatória. Se fizer sentido, reservamos a tua aula experimental.',
			button: 'Contactar',
		},
	},
	it: {
		hero: {
			eyebrow: 'Preparazione DELE e SIELE',
			title: 'Il diploma è l’obiettivo. Io porto la mappa',
			lead: 'Sono esaminatrice DELE di tutti i livelli e preparatrice SIELE. Ti accompagno con un piano, materiali ufficiali e simulazioni fino al giorno dell’esame.',
		},
		compare: {
			title: 'DELE o SIELE?',
			lead: 'Dipende dalla scadenza e da ciò che devi dimostrare. Entrambi sono ufficiali; l’incastro è diverso.',
			dele: {
				title: 'DELE',
				text: 'Il Diploma di Spagnolo dell’Instituto Cervantes. Prestigioso, per livelli, e per tutta la vita.',
				points: [
					'A1–C2, un esame per livello',
					'Instituto Cervantes e Ministero dell’Istruzione',
					'Non scade',
					'Sessioni in date fisse',
				],
			},
			siele: {
				title: 'SIELE',
				text: 'Una prova digitale e flessibile, con un punteggio multilivello delle quattro abilità.',
				points: [
					'Punteggio A1–C1 per abilità',
					'Esame al computer, date flessibili',
					'Il certificato vale cinque anni',
					'Ideale se ti serve accreditare il livello in fretta',
				],
			},
		},
		why: {
			title: 'Perché certificare',
			lead: 'Un titolo ufficiale apre porte che un “livello B2” sul CV non apre.',
			items: [
				{
					title: 'Riconoscimento',
					text: 'Il DELE è il certificato ufficiale dell’Instituto Cervantes, valorizzato in oltre 100 Paesi.',
				},
				{
					title: 'Validità',
					text: 'Il DELE non scade. Una volta superato, il diploma è per sempre.',
				},
				{
					title: 'Lavoro',
					text: 'Aziende internazionali lo chiedono o lo premiano: una lingua accreditata pesa in selezione.',
				},
				{
					title: 'Università',
					text: 'Lauree, master, borse e scambi nel mondo ispanico spesso chiedono o valorizzano il DELE.',
				},
				{
					title: 'Cittadinanza',
					text: 'In Spagna, il DELE A2 fa parte del percorso di cittadinanza e di altri iter amministrativi.',
				},
				{
					title: 'Fiducia',
					text: 'Preparare un esame ordina lo studio e dà sicurezza per parlare in contesti reali.',
				},
			],
		},
		prep: {
			title: 'Come ti preparo',
			lead: 'Dopo una breve valutazione, propongo un piano e un preventivo in base al livello, alla scadenza e all’esame che scegli.',
			price: 'Il prezzo si adatta al numero di sessioni. Lo vediamo insieme dopo quella prima conversazione.',
			dele: {
				title: 'Preparazione DELE',
				points: [
					'Simulazioni per abilità',
					'Strategia per ogni prova',
					'Correzione con rubriche ufficiali',
					'Gestione del tempo',
					'Percorsi per A2, B1, B2 e C1',
				],
			},
			siele: {
				title: 'Preparazione SIELE',
				points: [
					'Esercizi della piattaforma ufficiale',
					'Pratica intensiva delle quattro abilità',
					'Revisione di testi e registrazioni',
					'Consigli per alzare il punteggio',
				],
			},
		},
		dates: {
			title: 'Sessioni',
			lead: 'Le date le pubblica l’Instituto Cervantes. Qui le pagine ufficiali.',
			dele: 'Date DELE',
			siele: 'Date SIELE',
		},
		cta: {
			title: 'Lo prepariamo insieme?',
			text: 'Raccontami l’esame, il livello e la sessione. Se torna, prenotiamo la lezione di prova.',
			button: 'Contattami',
		},
	},
	fr: {
		hero: {
			eyebrow: 'Préparation DELE et SIELE',
			title: 'Le diplôme est l’objectif. Je mets la carte',
			lead: 'Je suis examinatrice DELE à tous les niveaux et préparatrice SIELE. Je vous accompagne avec un plan, des supports officiels et des blancs jusqu’au jour J.',
		},
		compare: {
			title: 'DELE ou SIELE ?',
			lead: 'Cela dépend de votre délai et de ce que vous devez prouver. Les deux sont officiels ; l’usage change.',
			dele: {
				title: 'DELE',
				text: 'Le diplôme d’espagnol de l’Instituto Cervantes. Prestigieux, par niveaux, et à vie.',
				points: [
					'A1–C2, un examen par niveau',
					'Instituto Cervantes et ministère de l’Éducation',
					'Il ne caduque pas',
					'Sessions à dates fixes',
				],
			},
			siele: {
				title: 'SIELE',
				text: 'Une épreuve numérique et souple, avec une note multiniveau des quatre compétences.',
				points: [
					'Note A1–C1 par compétence',
					'Examen sur ordinateur, dates souples',
					'Le certificat vaut cinq ans',
					'Idéal si vous devez prouver le niveau vite',
				],
			},
		},
		why: {
			title: 'Pourquoi certifier',
			lead: 'Un titre officiel ouvre des portes qu’un « niveau B2 » sur un CV n’ouvre pas.',
			items: [
				{
					title: 'Reconnaissance',
					text: 'Le DELE est le certificat officiel de l’Instituto Cervantes, valorisé dans plus de 100 pays.',
				},
				{
					title: 'Validité',
					text: 'Le DELE ne caduque pas. Une fois obtenu, le diplôme est pour toujours.',
				},
				{
					title: 'Travail',
					text: 'Des entreprises internationales le demandent ou le valorisent : une langue prouvée pèse dans un recrutement.',
				},
				{
					title: 'Université',
					text: 'Licences, masters, bourses et échanges dans le monde hispanique demandent ou valorisent souvent le DELE.',
				},
				{
					title: 'Nationalité',
					text: 'En Espagne, le DELE A2 fait partie du dossier de nationalité et d’autres démarches.',
				},
				{
					title: 'Confiance',
					text: 'Préparer un examen ordonne le travail et donne de l’assurance pour parler pour de vrai.',
				},
			],
		},
		prep: {
			title: 'Comment je vous prépare',
			lead: 'Après une brève évaluation, je propose un plan et un devis selon votre niveau, votre délai et l’examen choisi.',
			price: 'Le tarif s’ajuste au nombre de séances. On le voit ensemble après cette première conversation.',
			dele: {
				title: 'Préparation DELE',
				points: [
					'Blancs par compétence',
					'Stratégie pour chaque épreuve',
					'Correction avec les grilles officielles',
					'Gestion du temps',
					'Parcours A2, B1, B2 et C1',
				],
			},
			siele: {
				title: 'Préparation SIELE',
				points: [
					'Exercices de la plateforme officielle',
					'Pratique intensive des quatre compétences',
					'Relecture de textes et d’enregistrements',
					'Pistes pour faire monter la note',
				],
			},
		},
		dates: {
			title: 'Sessions',
			lead: 'Les dates sont publiées par l’Instituto Cervantes. Voici les pages officielles.',
			dele: 'Dates DELE',
			siele: 'Dates SIELE',
		},
		cta: {
			title: 'On le prépare ensemble ?',
			text: 'Dites-moi l’examen, le niveau et la session. Si cela convient, on réserve votre cours d’essai.',
			button: 'Contacter',
		},
	},
	de: {
		hero: {
			eyebrow: 'DELE- und SIELE-Vorbereitung',
			title: 'Das Diplom ist das Ziel. Ich bringe die Karte',
			lead: 'Ich bin DELE-Prüferin aller Niveaus und SIELE-Trainerin. Ich begleite dich mit einem Plan, offiziellen Materialien und Simulationen bis zum Prüfungstag.',
		},
		compare: {
			title: 'DELE oder SIELE?',
			lead: 'Es hängt von deiner Frist und davon ab, was du nachweisen musst. Beide sind offiziell; sie passen zu verschiedenen Leben.',
			dele: {
				title: 'DELE',
				text: 'Das Spanischdiplom des Instituto Cervantes. Renommiert, nach Niveaus, und fürs Leben.',
				points: [
					'A1–C2, eine Prüfung pro Niveau',
					'Instituto Cervantes und Bildungsministerium',
					'Verfällt nicht',
					'Termine an festen Daten',
				],
			},
			siele: {
				title: 'SIELE',
				text: 'Eine digitale, flexible Prüfung mit einer Mehrebenen-Bewertung der vier Fertigkeiten.',
				points: [
					'Punktzahl A1–C1 pro Fertigkeit',
					'Am Computer, flexible Termine',
					'Das Zertifikat gilt fünf Jahre',
					'Ideal, wenn du das Niveau schnell belegen musst',
				],
			},
		},
		why: {
			title: 'Warum zertifizieren',
			lead: 'Ein offizieller Titel öffnet Türen, die ein „Niveau B2“ im Lebenslauf nicht öffnet.',
			items: [
				{
					title: 'Anerkennung',
					text: 'DELE ist das offizielle Zertifikat des Instituto Cervantes, in über 100 Ländern anerkannt.',
				},
				{
					title: 'Gültigkeit',
					text: 'DELE verfällt nicht. Einmal bestanden, gehört dir das Diplom für immer.',
				},
				{
					title: 'Beruf',
					text: 'Internationale Firmen verlangen oder belohnen es: eine belegte Sprache zählt in der Auswahl.',
				},
				{
					title: 'Universität',
					text: 'Bachelor, Master, Stipendien und Austausch in der hispanischen Welt verlangen oder schätzen DELE oft.',
				},
				{
					title: 'Staatsangehörigkeit',
					text: 'In Spanien gehört DELE A2 zum Einbürgerungsverfahren und zu anderen Amtswegen.',
				},
				{
					title: 'Sicherheit',
					text: 'Eine Prüfung zu planen ordnet das Lernen und macht dich mutiger im echten Gespräch.',
				},
			],
		},
		prep: {
			title: 'Wie ich dich vorbereite',
			lead: 'Nach einer kurzen Einschätzung schlage ich einen Plan und ein Angebot vor — zu deinem Niveau, deiner Frist und der Prüfung.',
			price: 'Der Preis richtet sich nach der Zahl der Stunden. Das klären wir nach dem ersten Gespräch.',
			dele: {
				title: 'DELE-Vorbereitung',
				points: [
					'Simulationen nach Fertigkeit',
					'Strategie für jeden Prüfungsteil',
					'Korrektur mit offiziellen Rastern',
					'Zeitmanagement',
					'Programme für A2, B1, B2 und C1',
				],
			},
			siele: {
				title: 'SIELE-Vorbereitung',
				points: [
					'Übungen der offiziellen Plattform',
					'Intensive Praxis der vier Fertigkeiten',
					'Rückmeldung zu Texten und Aufnahmen',
					'Tipps für eine höhere Punktzahl',
				],
			},
		},
		dates: {
			title: 'Termine',
			lead: 'Die Daten veröffentlicht das Instituto Cervantes. Hier die offiziellen Seiten.',
			dele: 'DELE-Termine',
			siele: 'SIELE-Termine',
		},
		cta: {
			title: 'Bereiten wir es gemeinsam vor?',
			text: 'Erzähl mir Prüfung, Niveau und Termin. Wenn es passt, buchen wir deine Probestunde.',
			button: 'Kontakt',
		},
	},
};

export function getDeleSieleCopy(locale: Locale): DeleSieleCopy {
	return deleSieleCopy[locale];
}
