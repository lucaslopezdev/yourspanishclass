import type { Locale } from '@/shared/i18n';

export type AboutCopy = {
	hero: {
		eyebrow: string;
		title: string;
		lead: string;
		imageAlt: string;
	};
	who: {
		title: string;
		paragraphs: string[];
	};
	work: {
		title: string;
		paragraphs: string[];
	};
	city: {
		title: string;
		paragraphs: string[];
	};
	cta: {
		title: string;
		text: string;
		button: string;
	};
};

export const aboutCopy: Record<Locale, AboutCopy> = {
	es: {
		hero: {
			eyebrow: 'Sobre mí',
			title: 'Soy Cristina, y el español es mi oficio',
			lead: 'Filóloga, profesora y examinadora. Vivo en Salamanca y acompaño a quienes quieren hablar español de verdad.',
			imageAlt: 'Cristina junto al río, con Salamanca al fondo',
		},
		who: {
			title: 'Quién soy',
			paragraphs: [
				'Estudié el Grado en Filología Hispánica y el Máster en Enseñanza del Español como Lengua Extranjera en Salamanca. Llegué a la docencia porque me interesa la lengua cuando está viva: cuando alguien se atreve a contar su día, a discutir una noticia o a reírse en otro idioma.',
				'Llevo 8 años trabajando con cientos de estudiantes de culturas, niveles y perfiles muy distintos. Esa diversidad me enseñó a escuchar: qué necesitas, dónde te trabas y cómo avanzar sin perder el gusto por hablar.',
			],
		},
		work: {
			title: 'Qué hago en clase',
			paragraphs: [
				'Diseño programas personalizados: clases individuales, grupos de máximo tres personas y preparación DELE y SIELE. Uso materiales oficiales y un plan que respeta tu ritmo, con acompañamiento constante.',
				'Soy examinadora DELE de todos los niveles y preparadora SIELE. Si tu objetivo es un diploma, te guío paso a paso, con estrategia para cada prueba y simulacros hasta el día del examen.',
				'En el aula priorizo hablar y comprender desde el primer día. La gramática entra al servicio de lo que quieres decir, no al revés.',
			],
		},
		city: {
			title: 'Salamanca, y lo que me mueve',
			paragraphs: [
				'Vivo en una ciudad universitaria donde el español se oye en cada esquina. Me gusta esa mezcla de historia, estudiantes y conversación cotidiana: el río, las plazas, las tardes que se alargan.',
				'Me interesa la cultura tanto como la lengua. Leer, pasear y prestar atención a cómo habla la gente me recuerda que el español no es un temario: es una forma de estar con los demás.',
				'Eso es lo que quiero para ti también: no solo aprobar un nivel, sino sentirte cómodo cuando el idioma deja de ser un ejercicio y empieza a ser tuyo.',
			],
		},
		cta: {
			title: '¿Hablamos?',
			text: 'Cuéntame qué quieres conseguir con el español. Si encaja, reservamos tu clase de prueba.',
			button: 'Contactar',
		},
	},
	en: {
		hero: {
			eyebrow: 'About me',
			title: 'I’m Cristina, and Spanish is my craft',
			lead: 'Philologist, teacher and examiner. I live in Salamanca and work with people who want to speak Spanish for real.',
			imageAlt: 'Cristina by the river, with Salamanca in the background',
		},
		who: {
			title: 'Who I am',
			paragraphs: [
				'I studied Hispanic Philology and a Master’s in Teaching Spanish as a Foreign Language in Salamanca. I came to teaching because I care about language when it is alive: when someone dares to talk about their day, argue over the news or laugh in another language.',
				'For 8 years I have worked with hundreds of students of many cultures, levels and profiles. That mix taught me to listen: what you need, where you get stuck, and how to move forward without losing the joy of speaking.',
			],
		},
		work: {
			title: 'What I do in class',
			paragraphs: [
				'I design personalised programmes: one-to-one lessons, groups of three at most, and DELE and SIELE prep. I use official materials and a plan that respects your pace, with steady support.',
				'I am a DELE examiner at every level and a SIELE trainer. If you want a diploma, I will guide you step by step, with a strategy for each paper and mocks until exam day.',
				'In class we speak and understand from day one. Grammar serves what you want to say, not the other way around.',
			],
		},
		city: {
			title: 'Salamanca, and what moves me',
			paragraphs: [
				'I live in a university city where Spanish is in the air. I like that mix of history, students and everyday talk: the river, the squares, the long afternoons.',
				'Culture matters to me as much as language. Reading, walking and listening to how people speak remind me that Spanish is not a syllabus: it is a way of being with others.',
				'That is what I want for you too: not just to pass a level, but to feel at ease when the language stops being an exercise and starts being yours.',
			],
		},
		cta: {
			title: 'Shall we talk?',
			text: 'Tell me what you want from Spanish. If it feels right, we book your trial lesson.',
			button: 'Contact',
		},
	},
	pt: {
		hero: {
			eyebrow: 'Sobre mim',
			title: 'Sou a Cristina, e o espanhol é o meu ofício',
			lead: 'Filóloga, professora e examinadora. Vivo em Salamanca e acompanho quem quer falar espanhol de verdade.',
			imageAlt: 'Cristina junto ao rio, com Salamanca ao fundo',
		},
		who: {
			title: 'Quem sou',
			paragraphs: [
				'Estudei Filologia Hispânica e o Mestrado em Ensino de Espanhol como Língua Estrangeira em Salamanca. Cheguei ao ensino porque me interessa a língua quando está viva: quando alguém se atreve a contar o dia, a discutir uma notícia ou a rir noutra língua.',
				'Há 8 anos trabalho com centenas de estudantes de culturas, níveis e perfis muito distintos. Essa diversidade ensinou-me a escutar: o que precisas, onde travas e como avançar sem perder o gosto de falar.',
			],
		},
		work: {
			title: 'O que faço na aula',
			paragraphs: [
				'Desenho programas personalizados: aulas individuais, grupos de no máximo três pessoas e preparação DELE e SIELE. Uso materiais oficiais e um plano que respeita o teu ritmo, com acompanhamento constante.',
				'Sou examinadora DELE de todos os níveis e preparadora SIELE. Se o teu objetivo é um diploma, guio-te passo a passo, com estratégia para cada prova e simulacros até ao dia do exame.',
				'Na aula, falar e compreender vêm desde o primeiro dia. A gramática entra ao serviço do que queres dizer, não o contrário.',
			],
		},
		city: {
			title: 'Salamanca, e o que me move',
			paragraphs: [
				'Vivo numa cidade universitária onde o espanhol se ouve em cada esquina. Gosto dessa mistura de história, estudantes e conversa do dia a dia: o rio, as praças, as tardes que se alongam.',
				'A cultura interessa-me tanto como a língua. Ler, passear e prestar atenção a como as pessoas falam lembram-me que o espanhol não é um programa: é uma forma de estar com os outros.',
				'É isso que quero para ti também: não só passar um nível, mas sentires-te à vontade quando a língua deixa de ser um exercício e passa a ser tua.',
			],
		},
		cta: {
			title: 'Falamos?',
			text: 'Conta-me o que queres conseguir com o espanhol. Se fizer sentido, reservamos a tua aula experimental.',
			button: 'Contactar',
		},
	},
	it: {
		hero: {
			eyebrow: 'Chi sono',
			title: 'Sono Cristina, e lo spagnolo è il mio mestiere',
			lead: 'Filologa, insegnante ed esaminatrice. Vivo a Salamanca e accompagno chi vuole parlare spagnolo sul serio.',
			imageAlt: 'Cristina vicino al fiume, con Salamanca sullo sfondo',
		},
		who: {
			title: 'Chi sono',
			paragraphs: [
				'Ho studiato Filologia Ispanica e il Master in Insegnamento dello Spagnolo come Lingua Straniera a Salamanca. Sono arrivata alla docenza perché mi interessa la lingua quando è viva: quando qualcuno osa raccontare la giornata, discutere una notizia o ridere in un’altra lingua.',
				'Da 8 anni lavoro con centinaia di studenti di culture, livelli e profili molto diversi. Questa varietà mi ha insegnato ad ascoltare: di cosa hai bisogno, dove ti blocchi e come avanzare senza perdere il piacere di parlare.',
			],
		},
		work: {
			title: 'Cosa faccio in classe',
			paragraphs: [
				'Progetto percorsi personalizzati: lezioni individuali, gruppi di massimo tre persone e preparazione DELE e SIELE. Uso materiali ufficiali e un piano che rispetta i tuoi tempi, con un accompagnamento costante.',
				'Sono esaminatrice DELE di tutti i livelli e preparatrice SIELE. Se il tuo obiettivo è un diploma, ti guido passo dopo passo, con una strategia per ogni prova e simulazioni fino al giorno dell’esame.',
				'In classe parliamo e comprendiamo dal primo giorno. La grammatica serve a quello che vuoi dire, non il contrario.',
			],
		},
		city: {
			title: 'Salamanca, e ciò che mi muove',
			paragraphs: [
				'Vivo in una città universitaria dove lo spagnolo si sente a ogni angolo. Mi piace quel mix di storia, studenti e conversazione quotidiana: il fiume, le piazze, i pomeriggi che si allungano.',
				'La cultura mi interessa tanto quanto la lingua. Leggere, camminare e ascoltare come parla la gente mi ricorda che lo spagnolo non è un programma: è un modo di stare con gli altri.',
				'È questo che voglio anche per te: non solo superare un livello, ma sentirti a tuo agio quando la lingua smette di essere un esercizio e inizia a essere tua.',
			],
		},
		cta: {
			title: 'Ne parliamo?',
			text: 'Raccontami cosa vuoi ottenere con lo spagnolo. Se torna, prenotiamo la lezione di prova.',
			button: 'Contattami',
		},
	},
	fr: {
		hero: {
			eyebrow: 'À propos',
			title: 'Je suis Cristina, et l’espagnol est mon métier',
			lead: 'Philologue, professeure et examinatrice. J’habite à Salamanque et j’accompagne celles et ceux qui veulent vraiment parler espagnol.',
			imageAlt: 'Cristina au bord de la rivière, Salamanque en arrière-plan',
		},
		who: {
			title: 'Qui je suis',
			paragraphs: [
				'J’ai étudié la philologie hispanique et un master en enseignement de l’espagnol langue étrangère à Salamanque. Je suis arrivée à l’enseignement parce que la langue m’intéresse quand elle est vivante : quand quelqu’un ose raconter sa journée, discuter une info ou rire dans une autre langue.',
				'Depuis 8 ans, je travaille avec des centaines d’élèves de cultures, de niveaux et de profils très différents. Cette diversité m’a appris à écouter : ce dont vous avez besoin, où vous bloquez, et comment avancer sans perdre le plaisir de parler.',
			],
		},
		work: {
			title: 'Ce que je fais en cours',
			paragraphs: [
				'Je conçois des programmes personnalisés : cours particuliers, groupes de trois personnes au plus, et préparation DELE et SIELE. J’utilise des supports officiels et un plan qui respecte votre rythme, avec un accompagnement constant.',
				'Je suis examinatrice DELE à tous les niveaux et préparatrice SIELE. Si votre but est un diplôme, je vous guide pas à pas, avec une stratégie pour chaque épreuve et des blancs jusqu’au jour J.',
				'En cours, on parle et on comprend dès le premier jour. La grammaire sert ce que vous voulez dire, pas l’inverse.',
			],
		},
		city: {
			title: 'Salamanque, et ce qui me porte',
			paragraphs: [
				'Je vis dans une ville universitaire où l’espagnol s’entend à chaque coin de rue. J’aime ce mélange d’histoire, d’étudiants et de conversation du quotidien : la rivière, les places, les après-midi qui s’étirent.',
				'La culture m’importe autant que la langue. Lire, marcher et écouter comment les gens parlent me rappellent que l’espagnol n’est pas un programme : c’est une façon d’être avec les autres.',
				'C’est aussi ce que je veux pour vous : non seulement valider un niveau, mais vous sentir à l’aise quand la langue cesse d’être un exercice et commence à être la vôtre.',
			],
		},
		cta: {
			title: 'On en parle ?',
			text: 'Dites-moi ce que vous voulez réussir en espagnol. Si cela convient, on réserve votre cours d’essai.',
			button: 'Contacter',
		},
	},
	de: {
		hero: {
			eyebrow: 'Über mich',
			title: 'Ich bin Cristina, und Spanisch ist mein Beruf',
			lead: 'Philologin, Lehrerin und Prüferin. Ich lebe in Salamanca und begleite Menschen, die Spanisch wirklich sprechen wollen.',
			imageAlt: 'Cristina am Fluss, mit Salamanca im Hintergrund',
		},
		who: {
			title: 'Wer ich bin',
			paragraphs: [
				'Ich habe in Salamanca Hispanische Philologie und den Master in der Lehre des Spanischen als Fremdsprache studiert. Zur Didaktik bin ich gekommen, weil mich Sprache interessiert, wenn sie lebendig ist: wenn jemand den Tag erzählt, über eine Nachricht diskutiert oder in einer anderen Sprache lacht.',
				'Seit 8 Jahren arbeite ich mit Hunderten Lernenden aus sehr unterschiedlichen Kulturen, Niveaus und Profilen. Diese Vielfalt hat mich gelehrt zuzuhören: was du brauchst, wo du hängen bleibst und wie du vorankommst, ohne die Freude am Sprechen zu verlieren.',
			],
		},
		work: {
			title: 'Was ich im Unterricht mache',
			paragraphs: [
				'Ich entwerfe persönliche Programme: Einzelunterricht, Gruppen mit höchstens drei Personen und DELE- sowie SIELE-Vorbereitung. Ich nutze offizielle Materialien und einen Plan in deinem Tempo, mit stetiger Begleitung.',
				'Ich bin DELE-Prüferin aller Niveaus und SIELE-Trainerin. Wenn dein Ziel ein Diplom ist, führe ich dich Schritt für Schritt, mit Strategie für jeden Prüfungsteil und Simulationen bis zum Prüfungstag.',
				'Im Unterricht sprechen und verstehen wir vom ersten Tag an. Grammatik dient dem, was du sagen willst — nicht umgekehrt.',
			],
		},
		city: {
			title: 'Salamanca, und was mich trägt',
			paragraphs: [
				'Ich lebe in einer Universitätsstadt, in der Spanisch an jeder Ecke zu hören ist. Ich mag diese Mischung aus Geschichte, Studierenden und Alltagssprache: der Fluss, die Plätze, die langen Nachmittage.',
				'Kultur ist mir so wichtig wie die Sprache. Lesen, spazieren und hören, wie Menschen sprechen, erinnern mich daran: Spanisch ist kein Lehrplan, sondern eine Art, mit anderen zu sein.',
				'Genau das wünsche ich dir auch: nicht nur ein Niveau zu bestehen, sondern dich wohlzufühlen, wenn die Sprache aufhört, eine Übung zu sein, und anfängt, dir zu gehören.',
			],
		},
		cta: {
			title: 'Sprechen wir?',
			text: 'Erzähl mir, was du mit Spanisch erreichen willst. Wenn es passt, buchen wir deine Probestunde.',
			button: 'Kontakt',
		},
	},
};

export function getAboutCopy(locale: Locale): AboutCopy {
	return aboutCopy[locale];
}
