import type { Locale } from '@/shared/i18n';

export type HomeStat = {
	value: number;
	prefix: string;
	label: string;
};

export type HomeService = {
	title: string;
	hrefKey: 'lessons' | 'deleSiele';
	bullets: string[];
	cta: string;
};

export type HomeCopy = {
	hero: {
		eyebrow: string;
		title: string;
		subtitle: string;
		ctaPrimary: string;
		ctaSecondary: string;
		imageAlt: string;
	};
	stats: {
		title: string;
		items: HomeStat[];
	};
	intro: {
		eyebrow: string;
		title: string;
		paragraphs: string[];
		highlight: string;
		imageAlt: string;
	};
	services: {
		eyebrow: string;
		title: string;
		items: HomeService[];
	};
	exams: {
		eyebrow: string;
		title: string;
		subtitle: string;
		cta: string;
		dele: { title: string; text: string };
		siele: { title: string; text: string };
	};
	contact: {
		eyebrow: string;
		title: string;
		text: string;
	};
};

const statsValues = {
	students: 200,
	years: 8,
	levels: 6,
	group: 3,
} as const;

export const homeCopy: Record<Locale, HomeCopy> = {
	es: {
		hero: {
			eyebrow: 'Clases de español · Salamanca',
			title: 'Español a tu ritmo, con una profesora que te acompaña',
			subtitle:
				'Clases individuales, grupos reducidos y preparación DELE y SIELE. Desde Salamanca, para estudiantes de todo el mundo.',
			ctaPrimary: 'Reserva tu clase de prueba',
			ctaSecondary: 'Preparación DELE y SIELE',
			imageAlt: 'Cristina en Salamanca, frente a la catedral',
		},
		stats: {
			title: 'Un acompañamiento cercano, con resultados',
			items: [
				{ value: statsValues.students, prefix: '+', label: 'Estudiantes' },
				{ value: statsValues.years, prefix: '', label: 'Años' },
				{ value: statsValues.levels, prefix: '', label: 'Niveles DELE' },
				{ value: statsValues.group, prefix: '', label: 'Máx. por grupo' },
			],
		},
		intro: {
			eyebrow: 'Tu profesora',
			title: 'Soy Cristina, y el español es mi oficio',
			paragraphs: [
				'Vivo en Salamanca, donde estudié el Grado en Filología Hispánica y el Máster en Enseñanza del Español como Lengua Extranjera. Llevo 8 años trabajando con estudiantes de culturas, niveles y objetivos muy distintos.',
				'Esa diversidad me enseñó a escuchar de verdad: qué necesitas, dónde te trabas y cómo avanzar sin perder el gusto por hablar.',
			],
			highlight:
				'Soy examinadora DELE de todos los niveles y preparadora SIELE. Si tu meta es un diploma oficial, te guío con materiales oficiales y un plan a tu ritmo.',
			imageAlt: 'Cristina junto al río, con Salamanca al fondo',
		},
		services: {
			eyebrow: 'Servicios',
			title: 'De tus primeras palabras al certificado oficial',
			items: [
				{
					title: 'Clases individuales',
					hrefKey: 'lessons',
					cta: 'Ver clases',
					bullets: [
						'Un plan de trabajo diseñado solo para ti',
						'Lecciones centradas en tus fortalezas y tus lagunas',
						'Trato cercano: yo te acompaño, tú avanzas',
						'Metodología adaptada a cada alumno',
					],
				},
				{
					title: 'Clases grupales',
					hrefKey: 'lessons',
					cta: 'Ver grupos',
					bullets: [
						'Grupos reducidos: máximo 3 estudiantes',
						'Actividades dinámicas, debates y práctica real',
						'Nivel homogéneo en cada grupo',
						'Hablar y comprender desde el primer día',
					],
				},
				{
					title: 'Preparación DELE y SIELE',
					hrefKey: 'deleSiele',
					cta: 'Ver preparación',
					bullets: [
						'Plan estructurado hasta el día del examen',
						'Materiales oficiales y simulacros',
						'Estrategia para cada prueba',
						'Acompañamiento constante hasta la convocatoria',
					],
				},
			],
		},
		exams: {
			eyebrow: 'Certificación oficial',
			title: '¿DELE o SIELE? Te guío en los dos',
			subtitle:
				'Elige el examen que encaja con tu plazo y tu objetivo. Yo pongo el mapa y los materiales.',
			cta: 'Quiero prepararme',
			dele: {
				title: 'DELE',
				text: 'El Diploma de Español del Instituto Cervantes: la certificación prestigiosa que no caduca. Ideal si buscas un título de por vida.',
			},
			siele: {
				title: 'SIELE',
				text: 'Un examen moderno, digital y flexible, con calificación multinivel (A1–C1). Perfecto si necesitas acreditar tu nivel con rapidez.',
			},
		},
		contact: {
			eyebrow: 'Primer paso',
			title: '¿Listo para empezar tu español?',
			text: 'Escríbeme hoy. Hablamos de tus objetivos y, si te encaja, reservamos tu clase de prueba.',
		},
	},
	en: {
		hero: {
			eyebrow: 'Spanish lessons · Salamanca',
			title: 'Spanish at your pace, with a teacher who stays with you',
			subtitle:
				'One-to-one lessons, small groups, and DELE & SIELE prep. From Salamanca, for students everywhere.',
			ctaPrimary: 'Book a trial lesson',
			ctaSecondary: 'DELE & SIELE prep',
			imageAlt: 'Cristina in Salamanca, in front of the cathedral',
		},
		stats: {
			title: 'Close guidance, real progress',
			items: [
				{ value: statsValues.students, prefix: '+', label: 'Students' },
				{ value: statsValues.years, prefix: '', label: 'Years' },
				{ value: statsValues.levels, prefix: '', label: 'DELE levels' },
				{ value: statsValues.group, prefix: '', label: 'Max. per group' },
			],
		},
		intro: {
			eyebrow: 'Your teacher',
			title: 'I’m Cristina, and Spanish is my craft',
			paragraphs: [
				'I live in Salamanca, where I studied Hispanic Philology and a Master’s in Teaching Spanish as a Foreign Language. For 8 years I have worked with students of many cultures, levels and goals.',
				'That mix taught me to listen: what you need, where you get stuck, and how to move forward without losing the joy of speaking.',
			],
			highlight:
				'I am a DELE examiner at every level and a SIELE trainer. If you want an official diploma, I will guide you with official materials and a plan that respects your pace.',
			imageAlt: 'Cristina by the river, with Salamanca in the background',
		},
		services: {
			eyebrow: 'What I offer',
			title: 'From your first words to the official certificate',
			items: [
				{
					title: 'Private lessons',
					hrefKey: 'lessons',
					cta: 'See lessons',
					bullets: [
						'A study plan designed only for you',
						'Lessons focused on your strengths and gaps',
						'Close interaction: I guide, you progress',
						'A method adapted to each student',
					],
				},
				{
					title: 'Group lessons',
					hrefKey: 'lessons',
					cta: 'See groups',
					bullets: [
						'Small groups: 3 students maximum',
						'Dynamic activities, debates and real practice',
						'Groups organised by level',
						'Speaking and understanding from day one',
					],
				},
				{
					title: 'DELE & SIELE prep',
					hrefKey: 'deleSiele',
					cta: 'See exam prep',
					bullets: [
						'A structured plan up to exam day',
						'Official materials and mock tests',
						'Strategy for every paper',
						'Steady support until the session',
					],
				},
			],
		},
		exams: {
			eyebrow: 'Official certification',
			title: 'DELE or SIELE? I prepare you for both',
			subtitle:
				'Pick the exam that fits your deadline and your goal. I bring the map and the materials.',
			cta: 'I want to prepare',
			dele: {
				title: 'DELE',
				text: 'The Instituto Cervantes Diploma in Spanish: a prestigious certificate that never expires. Ideal if you want a lifelong qualification.',
			},
			siele: {
				title: 'SIELE',
				text: 'A modern, digital and flexible exam with a multilevel score (A1–C1). Perfect when you need to prove your level quickly.',
			},
		},
		contact: {
			eyebrow: 'First step',
			title: 'Ready to start your Spanish?',
			text: 'Write to me today. We’ll talk about your goals and, if it feels right, book your trial lesson.',
		},
	},
	pt: {
		hero: {
			eyebrow: 'Aulas de espanhol · Salamanca',
			title: 'Espanhol no teu ritmo, com uma professora que te acompanha',
			subtitle:
				'Aulas individuais, grupos reduzidos e preparação DELE e SIELE. De Salamanca, para estudantes de todo o mundo.',
			ctaPrimary: 'Reserva a tua aula experimental',
			ctaSecondary: 'Preparação DELE e SIELE',
			imageAlt: 'Cristina em Salamanca, em frente à catedral',
		},
		stats: {
			title: 'Acompanhamento próximo, com resultados',
			items: [
				{ value: statsValues.students, prefix: '+', label: 'Estudantes' },
				{ value: statsValues.years, prefix: '', label: 'Anos' },
				{ value: statsValues.levels, prefix: '', label: 'Níveis DELE' },
				{ value: statsValues.group, prefix: '', label: 'Máx. por grupo' },
			],
		},
		intro: {
			eyebrow: 'A tua professora',
			title: 'Sou a Cristina, e o espanhol é o meu ofício',
			paragraphs: [
				'Vivo em Salamanca, onde estudei Filologia Hispânica e o Mestrado em Ensino de Espanhol como Língua Estrangeira. Há 8 anos trabalho com estudantes de culturas, níveis e objetivos muito diferentes.',
				'Essa diversidade ensinou-me a escutar de verdade: o que precisas, onde travas e como avançar sem perder o gosto de falar.',
			],
			highlight:
				'Sou examinadora DELE de todos os níveis e preparadora SIELE. Se o teu objetivo é um diploma oficial, guio-te com materiais oficiais e um plano ao teu ritmo.',
			imageAlt: 'Cristina junto ao rio, com Salamanca ao fundo',
		},
		services: {
			eyebrow: 'Serviços',
			title: 'Das primeiras palavras ao certificado oficial',
			items: [
				{
					title: 'Aulas individuais',
					hrefKey: 'lessons',
					cta: 'Ver aulas',
					bullets: [
						'Um plano de trabalho só para ti',
						'Lições centradas nas tuas forças e lacunas',
						'Acompanhamento próximo entre nós',
						'Método adaptado a cada aluno',
					],
				},
				{
					title: 'Aulas de grupo',
					hrefKey: 'lessons',
					cta: 'Ver grupos',
					bullets: [
						'Grupos reduzidos: no máximo 3 estudantes',
						'Atividades dinâmicas, debates e prática real',
						'Nível homogéneo em cada grupo',
						'Falar e compreender desde o primeiro dia',
					],
				},
				{
					title: 'Preparação DELE e SIELE',
					hrefKey: 'deleSiele',
					cta: 'Ver preparação',
					bullets: [
						'Plano estruturado até ao dia do exame',
						'Materiais oficiais e simulacros',
						'Estratégia para cada prova',
						'Acompanhamento constante até à convocatória',
					],
				},
			],
		},
		exams: {
			eyebrow: 'Certificação oficial',
			title: 'DELE ou SIELE? Guio-te nos dois',
			subtitle:
				'Escolhe o exame que encaixa no teu prazo e no teu objetivo. Eu trago o mapa e os materiais.',
			cta: 'Quero preparar-me',
			dele: {
				title: 'DELE',
				text: 'O Diploma de Espanhol do Instituto Cervantes: a certificação de prestígio que não caduca. Ideal se queres um título para a vida.',
			},
			siele: {
				title: 'SIELE',
				text: 'Um exame moderno, digital e flexível, com classificação multinível (A1–C1). Perfeito se precisas de creditar o teu nível com rapidez.',
			},
		},
		contact: {
			eyebrow: 'Primeiro passo',
			title: 'Pronto para começar o teu espanhol?',
			text: 'Escreve-me hoje. Falamos dos teus objetivos e, se fizer sentido, reservamos a tua aula experimental.',
		},
	},
	it: {
		hero: {
			eyebrow: 'Lezioni di spagnolo · Salamanca',
			title: 'Lo spagnolo al tuo ritmo, con una docente che ti accompagna',
			subtitle:
				'Lezioni individuali, gruppi ridotti e preparazione DELE e SIELE. Da Salamanca, per studenti di tutto il mondo.',
			ctaPrimary: 'Prenota la lezione di prova',
			ctaSecondary: 'Preparazione DELE e SIELE',
			imageAlt: 'Cristina a Salamanca, davanti alla cattedrale',
		},
		stats: {
			title: 'Un percorso vicino, con risultati',
			items: [
				{ value: statsValues.students, prefix: '+', label: 'Studenti' },
				{ value: statsValues.years, prefix: '', label: 'Anni' },
				{ value: statsValues.levels, prefix: '', label: 'Livelli DELE' },
				{ value: statsValues.group, prefix: '', label: 'Max. per gruppo' },
			],
		},
		intro: {
			eyebrow: 'La tua insegnante',
			title: 'Sono Cristina, e lo spagnolo è il mio mestiere',
			paragraphs: [
				'Vivo a Salamanca, dove ho studiato Filologia Ispanica e il Master in Insegnamento dello Spagnolo come Lingua Straniera. Da 8 anni lavoro con studenti di culture, livelli e obiettivi molto diversi.',
				'Questa varietà mi ha insegnato ad ascoltare davvero: di cosa hai bisogno, dove ti blocchi e come avanzare senza perdere il piacere di parlare.',
			],
			highlight:
				'Sono esaminatrice DELE di tutti i livelli e preparatrice SIELE. Se il tuo obiettivo è un diploma ufficiale, ti guido con materiali ufficiali e un piano al tuo ritmo.',
			imageAlt: 'Cristina vicino al fiume, con Salamanca sullo sfondo',
		},
		services: {
			eyebrow: 'Cosa offro',
			title: 'Dalle prime parole al certificato ufficiale',
			items: [
				{
					title: 'Lezioni individuali',
					hrefKey: 'lessons',
					cta: 'Vedi le lezioni',
					bullets: [
						'Un piano di lavoro pensato solo per te',
						'Lezioni sulle tue forze e sui tuoi punti deboli',
						'Un rapporto ravvicinato tra noi',
						'Un metodo adattato a ogni studente',
					],
				},
				{
					title: 'Lezioni di gruppo',
					hrefKey: 'lessons',
					cta: 'Vedi i gruppi',
					bullets: [
						'Gruppi ridotti: massimo 3 studenti',
						'Attività dinamiche, dibattiti e pratica reale',
						'Livello omogeneo in ogni gruppo',
						'Parlare e capire dal primo giorno',
					],
				},
				{
					title: 'Preparazione DELE e SIELE',
					hrefKey: 'deleSiele',
					cta: 'Vedi la preparazione',
					bullets: [
						'Un piano strutturato fino al giorno dell’esame',
						'Materiali ufficiali e simulazioni',
						'Strategia per ogni prova',
						'Supporto costante fino alla sessione',
					],
				},
			],
		},
		exams: {
			eyebrow: 'Certificazione ufficiale',
			title: 'DELE o SIELE? Ti preparo per entrambi',
			subtitle:
				'Scegli l’esame che si adatta ai tuoi tempi e al tuo obiettivo. Io porto la mappa e i materiali.',
			cta: 'Voglio prepararmi',
			dele: {
				title: 'DELE',
				text: 'Il Diploma di Spagnolo dell’Instituto Cervantes: la certificazione prestigiosa che non scade. Ideale se cerchi un titolo per tutta la vita.',
			},
			siele: {
				title: 'SIELE',
				text: 'Un esame moderno, digitale e flessibile, con punteggio multinivello (A1–C1). Perfetto se devi attestare il tuo livello in tempi rapidi.',
			},
		},
		contact: {
			eyebrow: 'Primo passo',
			title: 'Pronto a iniziare il tuo spagnolo?',
			text: 'Scrivimi oggi. Parliamo dei tuoi obiettivi e, se ti torna, prenotiamo la lezione di prova.',
		},
	},
	fr: {
		hero: {
			eyebrow: 'Cours d’espagnol · Salamanque',
			title: 'L’espagnol à votre rythme, avec une professeure à vos côtés',
			subtitle:
				'Cours particuliers, petits groupes et préparation DELE et SIELE. Depuis Salamanque, pour des élèves du monde entier.',
			ctaPrimary: 'Réserver un cours d’essai',
			ctaSecondary: 'Préparation DELE et SIELE',
			imageAlt: 'Cristina à Salamanque, devant la cathédrale',
		},
		stats: {
			title: 'Un accompagnement proche, des progrès concrets',
			items: [
				{ value: statsValues.students, prefix: '+', label: 'Élèves' },
				{ value: statsValues.years, prefix: '', label: 'Années' },
				{ value: statsValues.levels, prefix: '', label: 'Niveaux DELE' },
				{ value: statsValues.group, prefix: '', label: 'Max. par groupe' },
			],
		},
		intro: {
			eyebrow: 'Votre professeure',
			title: 'Je suis Cristina, et l’espagnol est mon métier',
			paragraphs: [
				'J’habite à Salamanque, où j’ai étudié la philologie hispanique et un master en enseignement de l’espagnol langue étrangère. Depuis 8 ans, j’accompagne des élèves de cultures, de niveaux et d’objectifs très différents.',
				'Cette diversité m’a appris à vraiment écouter : ce dont vous avez besoin, où vous bloquez, et comment avancer sans perdre le plaisir de parler.',
			],
			highlight:
				'Je suis examinatrice DELE à tous les niveaux et préparatrice SIELE. Si votre but est un diplôme officiel, je vous guide avec des supports officiels et un plan à votre rythme.',
			imageAlt: 'Cristina au bord de la rivière, Salamanque en arrière-plan',
		},
		services: {
			eyebrow: 'Ce que je propose',
			title: 'De vos premiers mots au certificat officiel',
			items: [
				{
					title: 'Cours particuliers',
					hrefKey: 'lessons',
					cta: 'Voir les cours',
					bullets: [
						'Un plan de travail conçu uniquement pour vous',
						'Des leçons centrées sur vos forces et vos lacunes',
						'Un suivi proche entre nous',
						'Une méthode adaptée à chaque élève',
					],
				},
				{
					title: 'Cours en groupe',
					hrefKey: 'lessons',
					cta: 'Voir les groupes',
					bullets: [
						'Petits groupes : 3 élèves maximum',
						'Activités dynamiques, débats et pratique réelle',
						'Niveau homogène dans chaque groupe',
						'Parler et comprendre dès le premier jour',
					],
				},
				{
					title: 'Préparation DELE et SIELE',
					hrefKey: 'deleSiele',
					cta: 'Voir la préparation',
					bullets: [
						'Un plan structuré jusqu’au jour de l’examen',
						'Supports officiels et examens blancs',
						'Une stratégie pour chaque épreuve',
						'Un accompagnement constant jusqu’à la session',
					],
				},
			],
		},
		exams: {
			eyebrow: 'Certification officielle',
			title: 'DELE ou SIELE ? Je vous prépare aux deux',
			subtitle:
				'Choisissez l’examen qui correspond à votre délai et à votre objectif. J’apporte la carte et les supports.',
			cta: 'Je veux me préparer',
			dele: {
				title: 'DELE',
				text: 'Le Diplôme d’espagnol de l’Instituto Cervantes : la certification prestigieuse qui n’expire pas. Idéal si vous voulez un titre pour la vie.',
			},
			siele: {
				title: 'SIELE',
				text: 'Un examen moderne, numérique et flexible, avec une note multiniveau (A1–C1). Parfait si vous devez certifier votre niveau rapidement.',
			},
		},
		contact: {
			eyebrow: 'Premier pas',
			title: 'Prêt à commencer votre espagnol ?',
			text: 'Écrivez-moi aujourd’hui. Nous parlons de vos objectifs et, si cela vous convient, nous réservons votre cours d’essai.',
		},
	},
	de: {
		hero: {
			eyebrow: 'Spanischunterricht · Salamanca',
			title: 'Spanisch in deinem Tempo, mit einer Lehrerin an deiner Seite',
			subtitle:
				'Einzelunterricht, kleine Gruppen und DELE- sowie SIELE-Vorbereitung. Aus Salamanca, für Lernende weltweit.',
			ctaPrimary: 'Probestunde buchen',
			ctaSecondary: 'DELE- und SIELE-Vorbereitung',
			imageAlt: 'Cristina in Salamanca, vor der Kathedrale',
		},
		stats: {
			title: 'Nahe Begleitung, echte Fortschritte',
			items: [
				{ value: statsValues.students, prefix: '+', label: 'Lernende' },
				{ value: statsValues.years, prefix: '', label: 'Jahre' },
				{ value: statsValues.levels, prefix: '', label: 'DELE-Niveaus' },
				{ value: statsValues.group, prefix: '', label: 'Max. pro Gruppe' },
			],
		},
		intro: {
			eyebrow: 'Deine Lehrerin',
			title: 'Ich bin Cristina, und Spanisch ist mein Beruf',
			paragraphs: [
				'Ich lebe in Salamanca, wo ich Hispanische Philologie und den Master in der Lehre des Spanischen als Fremdsprache studiert habe. Seit 8 Jahren arbeite ich mit Lernenden aus sehr unterschiedlichen Kulturen, Niveaus und Zielen.',
				'Diese Vielfalt hat mich gelehrt, wirklich zuzuhören: was du brauchst, wo du hängen bleibst und wie du vorankommst, ohne die Freude am Sprechen zu verlieren.',
			],
			highlight:
				'Ich bin DELE-Prüferin aller Niveaus und SIELE-Trainerin. Wenn dein Ziel ein offizielles Diplom ist, führe ich dich mit offiziellen Materialien und einem Plan in deinem Tempo.',
			imageAlt: 'Cristina am Fluss, mit Salamanca im Hintergrund',
		},
		services: {
			eyebrow: 'Angebot',
			title: 'Von den ersten Wörtern zum offiziellen Zertifikat',
			items: [
				{
					title: 'Einzelunterricht',
					hrefKey: 'lessons',
					cta: 'Unterricht ansehen',
					bullets: [
						'Ein Lernplan nur für dich',
						'Stunden zu deinen Stärken und Lücken',
						'Nah dran: ich begleite, du kommst voran',
						'Eine Methode, die zu jeder Person passt',
					],
				},
				{
					title: 'Gruppenunterricht',
					hrefKey: 'lessons',
					cta: 'Gruppen ansehen',
					bullets: [
						'Kleine Gruppen: höchstens 3 Lernende',
						'Dynamische Übungen, Debatten und echte Praxis',
						'Homogenes Niveau in jeder Gruppe',
						'Sprechen und verstehen vom ersten Tag an',
					],
				},
				{
					title: 'DELE- und SIELE-Vorbereitung',
					hrefKey: 'deleSiele',
					cta: 'Vorbereitung ansehen',
					bullets: [
						'Ein strukturierter Plan bis zum Prüfungstag',
						'Offizielle Materialien und Simulationen',
						'Strategie für jeden Prüfungsteil',
						'Stetige Begleitung bis zum Termin',
					],
				},
			],
		},
		exams: {
			eyebrow: 'Offizielle Zertifizierung',
			title: 'DELE oder SIELE? Ich bereite dich auf beides vor',
			subtitle:
				'Wähle die Prüfung, die zu deiner Frist und deinem Ziel passt. Ich bringe den Plan und die Materialien.',
			cta: 'Ich will mich vorbereiten',
			dele: {
				title: 'DELE',
				text: 'Das Spanischdiplom des Instituto Cervantes: die angesehene Zertifizierung, die nicht verfällt. Ideal, wenn du einen Titel fürs Leben willst.',
			},
			siele: {
				title: 'SIELE',
				text: 'Eine moderne, digitale und flexible Prüfung mit einer Mehrebenen-Bewertung (A1–C1). Perfekt, wenn du dein Niveau schnell nachweisen musst.',
			},
		},
		contact: {
			eyebrow: 'Erster Schritt',
			title: 'Bereit, mit Spanisch zu starten?',
			text: 'Schreib mir heute. Wir sprechen über deine Ziele und buchen, wenn es passt, deine Probestunde.',
		},
	},
};

export function getHomeCopy(locale: Locale): HomeCopy {
	return homeCopy[locale];
}
