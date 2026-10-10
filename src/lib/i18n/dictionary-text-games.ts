/**
 * Guided text games: the interface around each text's path of rounds
 * (src/components/games/text/, src/app/games/texts/).
 *
 * Only the interface is here. Everything the questions are made of, the
 * quotations, names, roles, methods, themes and the explanations, is the study
 * guide's own English, shown in English in every locale and marked lang="en",
 * because a student quotes in English in the exam.
 *
 * House style in all three columns: no exclamation marks, no dashes for
 * punctuation. Khaleeji conventions as documented in ./dictionary.ts.
 */

// Structural type inline rather than `import type { Dictionary }`, matching
// every other supplement: dictionary.ts imports this file.
export const TEXT_GAMES_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ── The index: /games/texts ─────────────────────────────────────────────
  'text_games.index.crumb': { en: 'Text games', ar: 'ألعاب النصوص', es: 'Juegos de textos' },
  'text_games.index.eyebrow': { en: 'Guided games', ar: 'ألعاب موجّهة', es: 'Juegos guiados' },
  'text_games.index.title': {
    en: 'Set text games',
    ar: 'ألعاب النصوص المقررة',
    es: 'Juegos de los textos',
  },
  'text_games.index.lead': {
    en: 'Short guided rounds on one set text at a time: who’s who, story order, quotations, methods and themes. Every question comes from our study guide, and every answer is marked straight away, with the reason.',
    ar: 'جولات قصيرة وموجّهة على نص مقرر واحد كل مرة: مين مين، ترتيب الأحداث، الاقتباسات، الأساليب والمواضيع. كل سؤال مأخوذ من دليل الدراسة عندنا، وكل إجابة تتصحح على طول مع السبب.',
    es: 'Rondas breves y guiadas sobre un texto cada vez: quién es quién, orden de la historia, citas, recursos y temas. Cada pregunta sale de nuestra guía de estudio y cada respuesta se corrige al momento, con el porqué.',
  },
  'text_games.index.your_course': { en: 'On your course', ar: 'من مقررك', es: 'De tu curso' },
  'text_games.index.comics': { en: 'Comic art', ar: 'رسومات كوميك', es: 'Con ilustraciones' },
  'text_games.index.play': { en: 'Play', ar: 'العب', es: 'Jugar' },
  'text_games.privacy': {
    en: 'Your scores are kept in this browser only. Nothing is sent to us, and nobody else can see them.',
    ar: 'نتايجك محفوظة في هالمتصفح بس. ما يوصلنا شي، ومحد غيرك يقدر يشوفها.',
    es: 'Tus puntuaciones se guardan solo en este navegador. No se nos envía nada y nadie más puede verlas.',
  },

  // ── Progress, as the index and the path show it ─────────────────────────
  'text_games.progress.rounds_done': {
    en: '{done} of {total} rounds done',
    ar: 'خلّصت {done} من {total} جولات',
    es: '{done} de {total} rondas hechas',
  },
  'text_games.progress.best': {
    en: 'Best: {score} of {max}',
    ar: 'أفضل نتيجة: {score} من {max}',
    es: 'Mejor: {score} de {max}',
  },

  // ── One text's page: /games/texts/<slug> ────────────────────────────────
  'text_games.page.eyebrow': { en: 'Text game', ar: 'لعبة النص', es: 'Juego del texto' },
  'text_games.page.by': { en: 'by {author}', ar: 'تأليف {author}', es: 'de {author}' },
  'text_games.page.guide_link': {
    en: 'Open the study guide',
    ar: 'افتح دليل الدراسة',
    es: 'Abrir la guía de estudio',
  },
  'text_games.page.all_games': {
    en: 'All text games',
    ar: 'كل ألعاب النصوص',
    es: 'Todos los juegos de textos',
  },

  // ── The path ─────────────────────────────────────────────────────────────
  'text_games.path.heading': { en: 'Your path', ar: 'مسارك', es: 'Tu recorrido' },
  'text_games.path.intro': {
    en: '{n} short rounds. Each answer is marked straight away, with the reason from the study guide.',
    ar: '{n} جولات قصيرة. كل إجابة تتصحح على طول، مع السبب من دليل الدراسة.',
    es: '{n} rondas breves. Cada respuesta se corrige al momento, con el porqué de la guía de estudio.',
  },
  'text_games.path.start': { en: 'Start the path', ar: 'ابدأ المسار', es: 'Empezar el recorrido' },
  'text_games.path.play': { en: 'Play', ar: 'العب', es: 'Jugar' },
  'text_games.path.play_label': {
    en: 'Play round {n}: {name}',
    ar: 'العب الجولة {n}: {name}',
    es: 'Jugar la ronda {n}: {name}',
  },
  'text_games.path.round_n': { en: 'Round {n}', ar: 'الجولة {n}', es: 'Ronda {n}' },
  'text_games.path.done': { en: 'Done', ar: 'خلصت', es: 'Hecha' },
  'text_games.path.full_marks': {
    en: 'Full marks',
    ar: 'العلامة الكاملة',
    es: 'Puntuación perfecta',
  },
  'text_games.path.questions': { en: '{n} questions', ar: '{n} أسئلة', es: '{n} preguntas' },
  'text_games.path.puzzles': { en: '{n} puzzles', ar: '{n} ألغاز', es: '{n} rompecabezas' },

  // ── The rounds ───────────────────────────────────────────────────────────
  'text_games.round.who.title': { en: 'Who’s who', ar: 'مين مين', es: 'Quién es quién' },
  'text_games.round.who.desc': {
    en: 'Match the people to their parts in the story.',
    ar: 'طابق الشخصيات مع أدوارها في القصة.',
    es: 'Relaciona a cada personaje con su papel en la historia.',
  },
  'text_games.round.order.title': {
    en: 'Story order',
    ar: 'ترتيب الأحداث',
    es: 'Orden de la historia',
  },
  'text_games.round.order.desc': {
    en: 'Put key moments in the order they come in the text.',
    ar: 'رتّب اللحظات المهمة حسب ورودها في النص.',
    es: 'Ordena los momentos clave tal como aparecen en el texto.',
  },
  'text_games.round.where.title': { en: 'Where is it?', ar: 'وين موجود؟', es: '¿Dónde está?' },
  'text_games.round.where.desc': {
    en: 'Say where a quotation comes from.',
    ar: 'قول من وين جا الاقتباس.',
    es: 'Di de dónde viene una cita.',
  },
  'text_games.round.finish.title': {
    en: 'Finish the quotation',
    ar: 'كمّل الاقتباس',
    es: 'Completa la cita',
  },
  'text_games.round.finish.desc': {
    en: 'Choose the missing word.',
    ar: 'اختار الكلمة الناقصة.',
    es: 'Elige la palabra que falta.',
  },
  'text_games.round.method.title': {
    en: 'Method spotter',
    ar: 'اكتشف الأسلوب',
    es: 'Detecta el recurso',
  },
  'text_games.round.method.desc': {
    en: 'Name the method an example from the guide shows.',
    ar: 'سمِّ الأسلوب اللي يوضّحه مثال من الدليل.',
    es: 'Nombra el recurso que muestra un ejemplo de la guía.',
  },
  'text_games.round.theme.title': { en: 'Theme match', ar: 'طابق الموضوع', es: 'Empareja el tema' },
  'text_games.round.theme.desc': {
    en: 'Find a theme a moment carries.',
    ar: 'دوّر على موضوع موجود في اللحظة.',
    es: 'Encuentra un tema presente en un momento.',
  },
  'text_games.round.review.title': {
    en: 'The ones you missed',
    ar: 'اللي فاتتك',
    es: 'Las que fallaste',
  },

  // ── Questions ────────────────────────────────────────────────────────────
  'text_games.q.who_role': { en: 'Who is this?', ar: 'منو هذا؟', es: '¿Quién es?' },
  'text_games.q.who_relation': {
    en: 'What is {from} to {to}?',
    ar: 'شنو علاقة {from} بـ {to}؟',
    es: '¿Qué es {from} para {to}?',
  },
  'text_games.q.order': {
    en: 'Tap the moments in the order they come in the text.',
    ar: 'اضغط على اللحظات بالترتيب اللي تجي فيه في النص.',
    es: 'Toca los momentos en el orden en que aparecen en el texto.',
  },
  'text_games.q.where': {
    en: 'Where does this quotation come from?',
    ar: 'من وين هالاقتباس؟',
    es: '¿De dónde es esta cita?',
  },
  'text_games.q.finish': {
    en: 'Which word completes the quotation?',
    ar: 'أي كلمة تكمّل الاقتباس؟',
    es: '¿Qué palabra completa la cita?',
  },
  'text_games.q.method': {
    en: 'The study guide gives this as an example of which method?',
    ar: 'دليل الدراسة يعطي هذا كمثال على أي أسلوب؟',
    es: '¿De qué recurso pone la guía este ejemplo?',
  },
  'text_games.q.theme': {
    en: 'Which theme does this moment carry?',
    ar: 'أي موضوع موجود في هاللحظة؟',
    es: '¿Qué tema aparece en este momento?',
  },
  'text_games.q.blank': { en: 'missing word', ar: 'كلمة ناقصة', es: 'palabra que falta' },
  'text_games.q.options': { en: 'Answers', ar: 'الإجابات', es: 'Respuestas' },

  // ── Feedback ─────────────────────────────────────────────────────────────
  'text_games.fb.correct': { en: 'Correct', ar: 'صح', es: 'Correcto' },
  'text_games.fb.wrong': { en: 'Not quite', ar: 'مو بالضبط', es: 'No exactamente' },
  'text_games.fb.answer': {
    en: 'The answer: {answer}',
    ar: 'الإجابة: {answer}',
    es: 'La respuesta: {answer}',
  },
  'text_games.fb.why': {
    en: 'From the study guide',
    ar: 'من دليل الدراسة',
    es: 'De la guía de estudio',
  },
  'text_games.fb.where': { en: 'Where', ar: 'وين', es: 'Dónde' },
  'text_games.fb.also': {
    en: 'The guide links this moment to',
    ar: 'الدليل يربط هاللحظة بـ',
    es: 'La guía relaciona este momento con',
  },
  'text_games.fb.your_answer': { en: 'your answer', ar: 'إجابتك', es: 'tu respuesta' },
  'text_games.fb.right_answer': {
    en: 'the right answer',
    ar: 'الإجابة الصح',
    es: 'la respuesta correcta',
  },
  'text_games.fb.order_right': {
    en: 'Every moment in its place',
    ar: 'كل لحظة في مكانها',
    es: 'Cada momento en su sitio',
  },
  'text_games.fb.order_placed': {
    en: '{n} of {total} in the right place',
    ar: '{n} من {total} في المكان الصح',
    es: '{n} de {total} en su sitio',
  },
  'text_games.fb.order_heading': {
    en: 'The order in the text',
    ar: 'الترتيب في النص',
    es: 'El orden en el texto',
  },

  // ── Story order ──────────────────────────────────────────────────────────
  'text_games.order.your_order': { en: 'Your order', ar: 'ترتيبك', es: 'Tu orden' },
  'text_games.order.empty': {
    en: 'Tap the moment that comes first.',
    ar: 'اضغط على اللحظة اللي تجي أول.',
    es: 'Toca el momento que va primero.',
  },
  'text_games.order.hint': {
    en: 'Tap a placed moment to take it back.',
    ar: 'اضغط على لحظة حطيتها عشان ترجّعها.',
    es: 'Toca un momento colocado para quitarlo.',
  },
  'text_games.order.check': {
    en: 'Check the order',
    ar: 'شيّك على الترتيب',
    es: 'Comprobar el orden',
  },
  'text_games.order.clear': { en: 'Clear the order', ar: 'امسح الترتيب', es: 'Borrar el orden' },
  'text_games.order.position': { en: 'Position {n}', ar: 'المكان {n}', es: 'Posición {n}' },
  'text_games.order.not_placed': { en: 'Not placed yet', ar: 'ما انحطت للحين', es: 'Sin colocar' },

  // ── Moving through a round ───────────────────────────────────────────────
  'text_games.status.question': {
    en: 'Question {n} of {total}',
    ar: 'السؤال {n} من {total}',
    es: 'Pregunta {n} de {total}',
  },
  'text_games.status.puzzle': {
    en: 'Puzzle {n} of {total}',
    ar: 'اللغز {n} من {total}',
    es: 'Rompecabezas {n} de {total}',
  },
  'text_games.status.score': { en: 'Score: {n}', ar: 'النتيجة: {n}', es: 'Puntos: {n}' },
  'text_games.btn.next': { en: 'Next question', ar: 'السؤال اللي بعده', es: 'Siguiente pregunta' },
  'text_games.btn.see_score': { en: 'See your score', ar: 'شوف نتيجتك', es: 'Ver tu puntuación' },
  'text_games.btn.next_round': {
    en: 'Next round',
    ar: 'الجولة اللي بعدها',
    es: 'Siguiente ronda',
  },
  'text_games.btn.back_to_path': {
    en: 'Back to the path',
    ar: 'رجوع للمسار',
    es: 'Volver al recorrido',
  },
  'text_games.btn.leave_round': {
    en: 'Leave this round',
    ar: 'اطلع من هالجولة',
    es: 'Salir de esta ronda',
  },
  'text_games.btn.see_summary': { en: 'See your summary', ar: 'شوف الملخص', es: 'Ver el resumen' },
  'text_games.btn.practise': {
    en: 'Practise the ones you missed',
    ar: 'تدرّب على اللي فاتتك',
    es: 'Practica las que fallaste',
  },
  'text_games.btn.play_again': {
    en: 'Play the path again',
    ar: 'العب المسار مرة ثانية',
    es: 'Jugar el recorrido otra vez',
  },
  'text_games.btn.retry_round': {
    en: 'Play this round again',
    ar: 'العب هالجولة مرة ثانية',
    es: 'Jugar esta ronda otra vez',
  },

  // ── The end of a round, and of the path ─────────────────────────────────
  'text_games.end.heading': { en: 'Round complete', ar: 'خلصت الجولة', es: 'Ronda completada' },
  'text_games.end.score': {
    en: '{score} of {max}',
    ar: '{score} من {max}',
    es: '{score} de {max}',
  },
  'text_games.end.new_best': {
    en: 'New personal best',
    ar: 'أفضل نتيجة جديدة لك',
    es: 'Nuevo récord personal',
  },
  'text_games.end.best': {
    en: 'Your best: {score} of {max}',
    ar: 'أفضل نتيجة لك: {score} من {max}',
    es: 'Tu mejor: {score} de {max}',
  },
  'text_games.cheer.top': { en: 'Well done', ar: 'أحسنت', es: 'Bien hecho' },
  'text_games.cheer.mid': { en: 'Good work', ar: 'شغل حلو', es: 'Buen trabajo' },
  'text_games.cheer.low': {
    en: 'Worth another go',
    ar: 'تستاهل محاولة ثانية',
    es: 'Vale la pena otro intento',
  },
  'text_games.summary.heading': {
    en: 'Path complete',
    ar: 'خلصت المسار',
    es: 'Recorrido completado',
  },
  'text_games.summary.points': {
    en: '{score} of {max} points',
    ar: '{score} من {max} نقطة',
    es: '{score} de {max} puntos',
  },
  'text_games.summary.rounds': {
    en: '{n} rounds completed',
    ar: 'خلّصت {n} جولات',
    es: '{n} rondas completadas',
  },
  'text_games.summary.best': {
    en: 'Your best for this text: {score} of {max}',
    ar: 'أفضل نتيجة لك في هالنص: {score} من {max}',
    es: 'Tu mejor resultado en este texto: {score} de {max}',
  },
  'text_games.summary.all_right': {
    en: 'You answered every question correctly.',
    ar: 'جاوبت كل الأسئلة صح.',
    es: 'Has respondido bien a todas las preguntas.',
  },
  'text_games.review.heading': {
    en: 'Practice complete',
    ar: 'خلص التدريب',
    es: 'Práctica completada',
  },
}
