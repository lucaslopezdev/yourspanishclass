import type { Locale } from '@/shared/i18n';

export type PricePlan = {
	name: string;
	meta: string;
	price: string;
	perClass?: string;
	note?: string;
};

export type LessonsCopy = {
	hero: {
		eyebrow: string;
		title: string;
		lead: string;
	};
	intake: {
		title: string;
		intro: string;
		questions: string[];
	};
	individual: {
		eyebrow: string;
		title: string;
		lead: string;
		benefits: string[];
		plans: PricePlan[];
	};
	group: {
		eyebrow: string;
		title: string;
		lead: string;
		benefits: string[];
		plans: PricePlan[];
	};
	exams: {
		title: string;
		text: string;
		button: string;
	};
	cta: {
		title: string;
		text: string;
		button: string;
	};
	book: string;
};

export const lessonsCopy: Record<Locale, LessonsCopy> = {
	es: {
		hero: {
			eyebrow: 'Clases de español',
			title: 'Un método diseñado para ti',
			lead: 'Antes de la primera lección, nos conocemos. En 30 minutos hablamos de tu lengua, tus planes y cómo quieres usar el español.',
		},
		intake: {
			title: 'Primero, te escucho',
			intro: 'Esa conversación no es una clase: es el mapa. Con ella preparo un plan que encaje de verdad.',
			questions: [
				'¿Cuál es tu lengua materna?',
				'¿Quieres vivir en España?',
				'¿Lo necesitas para el trabajo?',
				'¿Es para viajar?',
			],
		},
		individual: {
			eyebrow: 'Uno a uno',
			title: 'Clases individuales',
			lead: 'Tú marcas el ritmo. Yo diseño el plan, los materiales y el empujón cuando te trabas.',
			benefits: [
				'Un plan de trabajo pensado solo para ti',
				'Lecciones centradas en tus fortalezas y tus lagunas',
				'Trato cercano: yo te acompaño, tú avanzas',
				'Metodología adaptada a cada alumno',
				'Mejora real de lo que quieres hacer con el idioma',
			],
			plans: [
				{
					name: 'Clase suelta',
					meta: '1 clase · 55 min · elige horario',
					price: '27,50 €',
				},
				{
					name: 'Pack 1',
					meta: '4 clases · 55 min · elige horario',
					price: '90 €',
					perClass: '22,50 € / clase',
					note: 'Caduca al mes',
				},
				{
					name: 'Pack 2',
					meta: '8 clases · 55 min · elige horario',
					price: '160 €',
					perClass: '20 € / clase',
					note: 'Caduca a los dos meses',
				},
				{
					name: 'Conversación',
					meta: '8 clases · 30 min · elige horario',
					price: '90 €',
					perClass: '11,25 € / clase',
					note: 'Caduca a los dos meses',
				},
			],
		},
		group: {
			eyebrow: 'Máximo 3',
			title: 'Clases en grupo',
			lead: 'Pocas personas, mismo nivel, mucha conversación. Se habla más —y con más ganas— cuando hay con quién.',
			benefits: [
				'Grupos reducidos: máximo 3 estudiantes',
				'Actividades, debates y práctica real',
				'Nivel homogéneo en cada grupo',
				'Hablar y comprender desde el primer día',
				'Un ambiente colaborativo, sin perder atención personal',
			],
			plans: [
				{
					name: 'Pack 1',
					meta: '4 clases al mes · 55 min',
					price: '70 €',
					perClass: '17,50 € / clase',
				},
				{
					name: 'Pack 2',
					meta: '8 clases al mes · 55 min',
					price: '130 €',
					perClass: '16,25 € / clase',
				},
			],
		},
		exams: {
			title: '¿Preparas el DELE o el SIELE?',
			text: 'Cada estudiante llega con un nivel y un plazo distintos. Tras una valoración breve, te propongo un plan y un presupuesto. El detalle de los exámenes está en la página de preparación.',
			button: 'Ver DELE y SIELE',
		},
		cta: {
			title: '¿Empezamos?',
			text: 'Escríbeme y reservamos esa primera conversación de 30 minutos.',
			button: 'Contactar',
		},
		book: 'Contactar',
	},
	en: {
		hero: {
			eyebrow: 'Spanish lessons',
			title: 'A method designed for you',
			lead: 'Before the first lesson, we talk. In 30 minutes we cover your language, your plans and how you want to use Spanish.',
		},
		intake: {
			title: 'First, I listen',
			intro: 'That conversation is not a lesson: it is the map. I use it to build a plan that actually fits.',
			questions: [
				'What is your native language?',
				'Do you want to live in Spain?',
				'Do you need Spanish for work?',
				'Is it for travel?',
			],
		},
		individual: {
			eyebrow: 'One to one',
			title: 'Private lessons',
			lead: 'You set the pace. I design the plan, the materials and the push when you get stuck.',
			benefits: [
				'A work plan designed only for you',
				'Lessons aimed at your strengths and gaps',
				'Close guidance: I stay with you, you move forward',
				'A method tailored to each student',
				'Real progress in what you want to do with the language',
			],
			plans: [
				{
					name: 'Single lesson',
					meta: '1 lesson · 55 min · choose your time',
					price: '27,50 €',
				},
				{
					name: 'Pack 1',
					meta: '4 lessons · 55 min · choose your time',
					price: '90 €',
					perClass: '22,50 € / lesson',
					note: 'Expires after one month',
				},
				{
					name: 'Pack 2',
					meta: '8 lessons · 55 min · choose your time',
					price: '160 €',
					perClass: '20 € / lesson',
					note: 'Expires after two months',
				},
				{
					name: 'Conversation',
					meta: '8 lessons · 30 min · choose your time',
					price: '90 €',
					perClass: '11,25 € / lesson',
					note: 'Expires after two months',
				},
			],
		},
		group: {
			eyebrow: 'Max. 3',
			title: 'Group lessons',
			lead: 'Few people, the same level, a lot of talk. You speak more — and more willingly — when there is someone to speak with.',
			benefits: [
				'Small groups: 3 students at most',
				'Activities, debates and real practice',
				'A homogeneous level in each group',
				'Speaking and understanding from day one',
				'A collaborative room, without losing personal attention',
			],
			plans: [
				{
					name: 'Pack 1',
					meta: '4 lessons a month · 55 min',
					price: '70 €',
					perClass: '17,50 € / lesson',
				},
				{
					name: 'Pack 2',
					meta: '8 lessons a month · 55 min',
					price: '130 €',
					perClass: '16,25 € / lesson',
				},
			],
		},
		exams: {
			title: 'Preparing for DELE or SIELE?',
			text: 'Every student arrives with a different level and deadline. After a short assessment I propose a plan and a quote. Exam detail lives on the preparation page.',
			button: 'See DELE and SIELE',
		},
		cta: {
			title: 'Shall we start?',
			text: 'Write to me and we book that first 30-minute conversation.',
			button: 'Contact',
		},
		book: 'Contact',
	},
	pt: {
		hero: {
			eyebrow: 'Aulas de espanhol',
			title: 'Um método desenhado para ti',
			lead: 'Antes da primeira aula, conhecemo-nos. Em 30 minutos falamos da tua língua, dos teus planos e de como queres usar o espanhol.',
		},
		intake: {
			title: 'Primeiro, escuto-te',
			intro: 'Essa conversa não é uma aula: é o mapa. Com ela preparo um plano que encaixa de verdade.',
			questions: [
				'Qual é a tua língua materna?',
				'Queres viver em Espanha?',
				'Precisas do espanhol para o trabalho?',
				'É para viajar?',
			],
		},
		individual: {
			eyebrow: 'Um a um',
			title: 'Aulas individuais',
			lead: 'Tu marcas o ritmo. Eu desenho o plano, os materiais e o empurrão quando travas.',
			benefits: [
				'Um plano de trabalho pensado só para ti',
				'Aulas centradas nas tuas forças e nas tuas falhas',
				'Acompanhamento próximo: eu guio, tu avanças',
				'Metodologia adaptada a cada aluno',
				'Melhoria real do que queres fazer com a língua',
			],
			plans: [
				{
					name: 'Aula avulsa',
					meta: '1 aula · 55 min · escolhe o horário',
					price: '27,50 €',
				},
				{
					name: 'Pack 1',
					meta: '4 aulas · 55 min · escolhe o horário',
					price: '90 €',
					perClass: '22,50 € / aula',
					note: 'Caduca ao fim de um mês',
				},
				{
					name: 'Pack 2',
					meta: '8 aulas · 55 min · escolhe o horário',
					price: '160 €',
					perClass: '20 € / aula',
					note: 'Caduca ao fim de dois meses',
				},
				{
					name: 'Conversação',
					meta: '8 aulas · 30 min · escolhe o horário',
					price: '90 €',
					perClass: '11,25 € / aula',
					note: 'Caduca ao fim de dois meses',
				},
			],
		},
		group: {
			eyebrow: 'Máximo 3',
			title: 'Aulas em grupo',
			lead: 'Poucas pessoas, o mesmo nível, muita conversa. Fala-se mais — e com mais gosto — quando há com quem.',
			benefits: [
				'Grupos reduzidos: no máximo 3 estudantes',
				'Atividades, debates e prática real',
				'Nível homogéneo em cada grupo',
				'Falar e compreender desde o primeiro dia',
				'Um ambiente colaborativo, sem perder atenção pessoal',
			],
			plans: [
				{
					name: 'Pack 1',
					meta: '4 aulas por mês · 55 min',
					price: '70 €',
					perClass: '17,50 € / aula',
				},
				{
					name: 'Pack 2',
					meta: '8 aulas por mês · 55 min',
					price: '130 €',
					perClass: '16,25 € / aula',
				},
			],
		},
		exams: {
			title: 'Preparás o DELE ou o SIELE?',
			text: 'Cada estudante chega com um nível e um prazo diferentes. Após uma avaliação breve, proponho um plano e um orçamento. O detalhe dos exames está na página de preparação.',
			button: 'Ver DELE e SIELE',
		},
		cta: {
			title: 'Começamos?',
			text: 'Escreve-me e reservamos essa primeira conversa de 30 minutos.',
			button: 'Contactar',
		},
		book: 'Contactar',
	},
	it: {
		hero: {
			eyebrow: 'Lezioni di spagnolo',
			title: 'Un metodo pensato per te',
			lead: 'Prima della lezione, ci conosciamo. In 30 minuti parliamo della tua lingua, dei tuoi piani e di come vuoi usare lo spagnolo.',
		},
		intake: {
			title: 'Prima, ti ascolto',
			intro: 'Quella conversazione non è una lezione: è la mappa. Con quella preparo un piano che stia davvero.',
			questions: [
				'Qual è la tua lingua madre?',
				'Vuoi vivere in Spagna?',
				'Ti serve lo spagnolo per lavoro?',
				'È per viaggiare?',
			],
		},
		individual: {
			eyebrow: 'Uno a uno',
			title: 'Lezioni individuali',
			lead: 'Tu segni il ritmo. Io disegno il piano, i materiali e la spinta quando ti blocchi.',
			benefits: [
				'Un piano di lavoro pensato solo per te',
				'Lezioni centrate sui tuoi punti forti e sulle lacune',
				'Un accompagnamento vicino: io ti seguo, tu avanzi',
				'Metodologia adattata a ogni studente',
				'Un miglioramento reale in quello che vuoi fare con la lingua',
			],
			plans: [
				{
					name: 'Lezione singola',
					meta: '1 lezione · 55 min · scegli l’orario',
					price: '27,50 €',
				},
				{
					name: 'Pack 1',
					meta: '4 lezioni · 55 min · scegli l’orario',
					price: '90 €',
					perClass: '22,50 € / lezione',
					note: 'Scade dopo un mese',
				},
				{
					name: 'Pack 2',
					meta: '8 lezioni · 55 min · scegli l’orario',
					price: '160 €',
					perClass: '20 € / lezione',
					note: 'Scade dopo due mesi',
				},
				{
					name: 'Conversazione',
					meta: '8 lezioni · 30 min · scegli l’orario',
					price: '90 €',
					perClass: '11,25 € / lezione',
					note: 'Scade dopo due mesi',
				},
			],
		},
		group: {
			eyebrow: 'Massimo 3',
			title: 'Lezioni di gruppo',
			lead: 'Poche persone, stesso livello, tanta conversazione. Si parla di più — e volentieri — quando c’è con chi.',
			benefits: [
				'Gruppi ridotti: massimo 3 studenti',
				'Attività, dibattiti e pratica reale',
				'Livello omogeneo in ogni gruppo',
				'Parlare e comprendere dal primo giorno',
				'Un ambiente collaborativo, senza perdere attenzione personale',
			],
			plans: [
				{
					name: 'Pack 1',
					meta: '4 lezioni al mese · 55 min',
					price: '70 €',
					perClass: '17,50 € / lezione',
				},
				{
					name: 'Pack 2',
					meta: '8 lezioni al mese · 55 min',
					price: '130 €',
					perClass: '16,25 € / lezione',
				},
			],
		},
		exams: {
			title: 'Prepari il DELE o il SIELE?',
			text: 'Ogni studente arriva con un livello e una scadenza diversi. Dopo una breve valutazione, propongo un piano e un preventivo. Il dettaglio degli esami è nella pagina di preparazione.',
			button: 'Vedi DELE e SIELE',
		},
		cta: {
			title: 'Iniziamo?',
			text: 'Scrivimi e prenotiamo quella prima conversazione di 30 minuti.',
			button: 'Contattami',
		},
		book: 'Contattami',
	},
	fr: {
		hero: {
			eyebrow: 'Cours d’espagnol',
			title: 'Une méthode conçue pour vous',
			lead: 'Avant la première leçon, on se connaît. En 30 minutes, on parle de votre langue, de vos projets et de la façon dont vous voulez utiliser l’espagnol.',
		},
		intake: {
			title: 'D’abord, je vous écoute',
			intro: 'Cette conversation n’est pas un cours : c’est la carte. Elle me sert à préparer un plan qui vous va vraiment.',
			questions: [
				'Quelle est votre langue maternelle ?',
				'Voulez-vous vivre en Espagne ?',
				'En avez-vous besoin pour le travail ?',
				'Est-ce pour voyager ?',
			],
		},
		individual: {
			eyebrow: 'Cours particuliers',
			title: 'Cours individuels',
			lead: 'Vous donnez le rythme. Je conçois le plan, les supports et l’élan quand vous bloquez.',
			benefits: [
				'Un plan de travail pensé uniquement pour vous',
				'Des leçons centrées sur vos forces et vos lacunes',
				'Un accompagnement proche : je vous guide, vous avancez',
				'Une méthodologie adaptée à chaque élève',
				'Un progrès réel dans ce que vous voulez faire avec la langue',
			],
			plans: [
				{
					name: 'Cours à l’unité',
					meta: '1 cours · 55 min · choisissez l’horaire',
					price: '27,50 €',
				},
				{
					name: 'Pack 1',
					meta: '4 cours · 55 min · choisissez l’horaire',
					price: '90 €',
					perClass: '22,50 € / cours',
					note: 'Valable un mois',
				},
				{
					name: 'Pack 2',
					meta: '8 cours · 55 min · choisissez l’horaire',
					price: '160 €',
					perClass: '20 € / cours',
					note: 'Valable deux mois',
				},
				{
					name: 'Conversation',
					meta: '8 cours · 30 min · choisissez l’horaire',
					price: '90 €',
					perClass: '11,25 € / cours',
					note: 'Valable deux mois',
				},
			],
		},
		group: {
			eyebrow: '3 personnes max.',
			title: 'Cours en groupe',
			lead: 'Peu de monde, même niveau, beaucoup de conversation. On parle plus — et plus volontiers — quand il y a de qui.',
			benefits: [
				'Groupes réduits : 3 élèves au plus',
				'Activités, débats et pratique réelle',
				'Niveau homogène dans chaque groupe',
				'Parler et comprendre dès le premier jour',
				'Un cadre collaboratif, sans perdre l’attention personnelle',
			],
			plans: [
				{
					name: 'Pack 1',
					meta: '4 cours par mois · 55 min',
					price: '70 €',
					perClass: '17,50 € / cours',
				},
				{
					name: 'Pack 2',
					meta: '8 cours par mois · 55 min',
					price: '130 €',
					perClass: '16,25 € / cours',
				},
			],
		},
		exams: {
			title: 'Vous préparez le DELE ou le SIELE ?',
			text: 'Chaque élève arrive avec un niveau et un délai différents. Après une brève évaluation, je propose un plan et un devis. Le détail des examens est sur la page de préparation.',
			button: 'Voir DELE et SIELE',
		},
		cta: {
			title: 'On commence ?',
			text: 'Écrivez-moi et on réserve cette première conversation de 30 minutes.',
			button: 'Contacter',
		},
		book: 'Contacter',
	},
	de: {
		hero: {
			eyebrow: 'Spanischunterricht',
			title: 'Eine Methode, die zu dir passt',
			lead: 'Vor der ersten Stunde lernen wir uns kennen. In 30 Minuten sprechen wir über deine Sprache, deine Pläne und wozu du Spanisch brauchst.',
		},
		intake: {
			title: 'Zuerst höre ich zu',
			intro: 'Dieses Gespräch ist keine Stunde: es ist die Karte. Damit baue ich einen Plan, der wirklich passt.',
			questions: [
				'Was ist deine Muttersprache?',
				'Willst du in Spanien leben?',
				'Brauchst du Spanisch für die Arbeit?',
				'Ist es zum Reisen?',
			],
		},
		individual: {
			eyebrow: 'Einzelunterricht',
			title: 'Einzelstunden',
			lead: 'Du gibst das Tempo vor. Ich entwerfe den Plan, die Materialien und den Schub, wenn du hängen bleibst.',
			benefits: [
				'Ein Arbeitsplan nur für dich',
				'Stunden zu deinen Stärken und Lücken',
				'Enge Begleitung: ich gehe mit, du kommst voran',
				'Eine Methode, die zu jeder Person passt',
				'Echter Fortschritt in dem, was du mit der Sprache tun willst',
			],
			plans: [
				{
					name: 'Einzelstunde',
					meta: '1 Stunde · 55 Min. · Zeit nach Wahl',
					price: '27,50 €',
				},
				{
					name: 'Pack 1',
					meta: '4 Stunden · 55 Min. · Zeit nach Wahl',
					price: '90 €',
					perClass: '22,50 € / Stunde',
					note: 'Gültig einen Monat',
				},
				{
					name: 'Pack 2',
					meta: '8 Stunden · 55 Min. · Zeit nach Wahl',
					price: '160 €',
					perClass: '20 € / Stunde',
					note: 'Gültig zwei Monate',
				},
				{
					name: 'Konversation',
					meta: '8 Stunden · 30 Min. · Zeit nach Wahl',
					price: '90 €',
					perClass: '11,25 € / Stunde',
					note: 'Gültig zwei Monate',
				},
			],
		},
		group: {
			eyebrow: 'Max. 3',
			title: 'Gruppenunterricht',
			lead: 'Wenige Personen, gleiches Niveau, viel Gespräch. Man spricht mehr — und lieber — wenn jemand da ist.',
			benefits: [
				'Kleine Gruppen: höchstens 3 Lernende',
				'Aktivitäten, Debatten und echte Praxis',
				'Homogenes Niveau in jeder Gruppe',
				'Sprechen und verstehen vom ersten Tag',
				'Ein gemeinsames Klima, ohne die persönliche Aufmerksamkeit zu verlieren',
			],
			plans: [
				{
					name: 'Pack 1',
					meta: '4 Stunden im Monat · 55 Min.',
					price: '70 €',
					perClass: '17,50 € / Stunde',
				},
				{
					name: 'Pack 2',
					meta: '8 Stunden im Monat · 55 Min.',
					price: '130 €',
					perClass: '16,25 € / Stunde',
				},
			],
		},
		exams: {
			title: 'DELE oder SIELE vorbereiten?',
			text: 'Jede Person kommt mit einem anderen Niveau und einer anderen Frist. Nach einer kurzen Einschätzung schlage ich einen Plan und ein Angebot vor. Die Details zu den Prüfungen stehen auf der Vorbereitungsseite.',
			button: 'DELE und SIELE ansehen',
		},
		cta: {
			title: 'Legen wir los?',
			text: 'Schreib mir und wir buchen dieses erste Gespräch von 30 Minuten.',
			button: 'Kontakt',
		},
		book: 'Kontakt',
	},
};

export function getLessonsCopy(locale: Locale): LessonsCopy {
	return lessonsCopy[locale];
}
