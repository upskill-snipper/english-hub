/**
 * Game analytics in the student's hub (/dashboard/learning,
 * src/components/learning/GameAnalyticsView.tsx), from 13 October 2026.
 *
 * The names of games and set texts are shown in English in every locale, as
 * the games show them. Skills games' own tags (a device such as "metaphor",
 * a rule) are subject terms a student uses in English in the exam, so they are
 * shown in English too.
 *
 * Every figure the copy describes is computed in src/lib/game-results/
 * analytics.ts: "last 30 answers", "80%" and "10 answers" are its constants,
 * and a change there must change the words here.
 *
 * House style in all three columns: no exclamation marks, no dashes for
 * punctuation, no grades. Khaleeji conventions as documented in ./dictionary.ts.
 */

// Structural type inline rather than `import type { Dictionary }`, matching
// every other supplement: dictionary.ts imports this file.
export const GAME_ANALYTICS_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ── The explanation after each skills game answer
  // (src/components/games/AnswerExplanation.tsx). The explanation itself is
  // English content and is not translated; these are its headings.
  'games.deep.title': { en: 'Explained', ar: 'الشرح', es: 'Explicación' },
  'games.deep.why': { en: 'The answer:', ar: 'الإجابة:', es: 'La respuesta:' },
  'games.deep.why_not': {
    en: 'Why not “{chosen}”:',
    ar: 'ليش مو «{chosen}»:',
    es: 'Por qué no «{chosen}»:',
  },
  'games.deep.more': { en: 'Going deeper:', ar: 'أعمق شوي:', es: 'Para ir más allá:' },
  'games.deep.tip': { en: 'Use it:', ar: 'استخدمها:', es: 'Úsalo:' },

  // ── States ──────────────────────────────────────────────────────────────
  'ga.loading': {
    en: 'Loading your results',
    ar: 'جاري تحميل نتايجك',
    es: 'Cargando tus resultados',
  },
  'ga.error': {
    en: 'Your results could not be loaded just now. Try again in a minute.',
    ar: 'ما قدرنا نحمّل نتايجك الحين. جرّب مرة ثانية بعد دقيقة.',
    es: 'No hemos podido cargar tus resultados ahora mismo. Inténtalo de nuevo en un minuto.',
  },
  'ga.retry': { en: 'Try again', ar: 'جرّب مرة ثانية', es: 'Reintentar' },
  'ga.empty.title': {
    en: 'No results yet',
    ar: 'ما فيه نتايج للحين',
    es: 'Todavía no hay resultados',
  },
  'ga.empty.body': {
    en: 'Play a skills game or a set text game while you are signed in, and your results build up here, question by question.',
    ar: 'العب لعبة مهارات ولا لعبة نص مقرر وانت مسجّل دخول، ونتايجك تنبني هني سؤال سؤال.',
    es: 'Juega a un juego de destrezas o a un juego de un texto con la sesión iniciada y tus resultados se irán acumulando aquí, pregunta a pregunta.',
  },
  'ga.empty.games': { en: 'Skills games', ar: 'ألعاب المهارات', es: 'Juegos de destrezas' },
  'ga.empty.quests': {
    en: 'Set text games',
    ar: 'ألعاب النصوص المقررة',
    es: 'Juegos de los textos',
  },
  'ga.empty.device': {
    en: 'Played on this device before your results were saved',
    ar: 'لعبتها على هالجهاز قبل ما تنحفظ نتايجك',
    es: 'Jugado en este dispositivo antes de que se guardaran tus resultados',
  },

  // ── Headline figures ────────────────────────────────────────────────────
  'ga.tile.answered': {
    en: 'Questions answered',
    ar: 'أسئلة جاوبتها',
    es: 'Preguntas respondidas',
  },
  'ga.tile.right': { en: 'Right first time', ar: 'صح من أول مرة', es: 'Acertadas a la primera' },
  'ga.tile.week': { en: 'This week', ar: 'هالأسبوع', es: 'Esta semana' },
  'ga.tile.week_sub': {
    en: '{n} answered, {pct}% right',
    ar: '{n} سؤال، {pct}% صح',
    es: '{n} respondidas, {pct}% bien',
  },
  'ga.tile.week_none': {
    en: 'Nothing yet this week',
    ar: 'ولا شي هالأسبوع للحين',
    es: 'Nada todavía esta semana',
  },
  'ga.tile.last_week': {
    en: 'Last week: {pct}% right',
    ar: 'الأسبوع اللي طاف: {pct}% صح',
    es: 'La semana pasada: {pct}% bien',
  },
  'ga.tile.time': { en: 'Time playing', ar: 'وقت اللعب', es: 'Tiempo jugando' },
  'ga.tile.minutes': { en: '{n} min', ar: '{n} دقيقة', es: '{n} min' },
  'ga.tile.days': { en: 'Days you played', ar: 'أيام لعبت فيها', es: 'Días que has jugado' },

  // ── Going well, to work on ──────────────────────────────────────────────
  'ga.strengths.title': { en: 'Going well', ar: 'ماشي زين', es: 'Va bien' },
  'ga.strengths.empty': {
    en: 'Nothing to call secure yet. A skill is secure when 80% or more of your recent answers on it are right, over at least 10 answers.',
    ar: 'ما فيه شي متمكّن منه للحين. تكون متمكّن من مهارة لما 80% أو أكثر من إجاباتك الأخيرة فيها صح، على الأقل في 10 إجابات.',
    es: 'Todavía no hay nada consolidado. Una destreza está consolidada cuando aciertas el 80% o más de tus respuestas recientes, en al menos 10 respuestas.',
  },
  'ga.work.title': { en: 'To work on', ar: 'تحتاج شغل', es: 'Para trabajar' },
  'ga.work.empty': {
    en: 'Nothing stands out as weak in your recent answers. Keep mixing your games.',
    ar: 'ما فيه شي ضعيف واضح في إجاباتك الأخيرة. استمر تنوّع ألعابك.',
    es: 'Nada destaca como flojo en tus respuestas recientes. Sigue variando los juegos.',
  },
  'ga.stat.recent': {
    en: '{right} of your last {n} right',
    ar: '{right} من آخر {n} صح',
    es: '{right} de tus últimas {n} bien',
  },
  'ga.trend.improving': { en: 'Improving', ar: 'يتحسّن', es: 'Mejorando' },
  'ga.trend.steady': { en: 'Steady', ar: 'ثابت', es: 'Estable' },
  'ga.trend.slipping': { en: 'Slipping', ar: 'يتراجع', es: 'Bajando' },
  'ga.band.secure': { en: 'Secure', ar: 'متمكّن', es: 'Consolidado' },
  'ga.band.developing': { en: 'Developing', ar: 'يتطوّر', es: 'En desarrollo' },
  'ga.band.needs-work': { en: 'Needs work', ar: 'يحتاج شغل', es: 'Necesita trabajo' },
  'ga.band.too-few': {
    en: 'Not enough answers yet',
    ar: 'إجابات قليلة للحين',
    es: 'Aún pocas respuestas',
  },

  // ── Skill groups (src/lib/game-results/skills.ts) ───────────────────────
  'ga.group.plot': { en: 'Plot and structure', ar: 'الحبكة والبناء', es: 'Trama y estructura' },
  'ga.group.characters': {
    en: 'Characters and relationships',
    ar: 'الشخصيات والعلاقات',
    es: 'Personajes y relaciones',
  },
  'ga.group.quotations': { en: 'Quotations', ar: 'الاقتباسات', es: 'Citas' },
  'ga.group.themes': { en: 'Themes and ideas', ar: 'المواضيع والأفكار', es: 'Temas e ideas' },
  'ga.group.methods': { en: 'Writer’s methods', ar: 'أساليب الكاتب', es: 'Recursos del autor' },
  'ga.group.interpretation': { en: 'Interpretation', ar: 'التفسير', es: 'Interpretación' },
  'ga.group.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'ga.group.reading': {
    en: 'Reading: finding and inferring',
    ar: 'القراءة: الاستخراج والاستنتاج',
    es: 'Lectura: localizar e inferir',
  },
  'ga.group.vocabulary': { en: 'Vocabulary', ar: 'المفردات', es: 'Vocabulario' },
  'ga.group.grammar': { en: 'Grammar', ar: 'القواعد', es: 'Gramática' },
  'ga.group.punctuation': { en: 'Punctuation', ar: 'علامات الترقيم', es: 'Puntuación' },
  'ga.group.spelling': { en: 'Spelling', ar: 'الإملاء', es: 'Ortografía' },
  'ga.group.writing': {
    en: 'Building sentences and paragraphs',
    ar: 'بناء الجمل والفقرات',
    es: 'Construir frases y párrafos',
  },

  // ── Quest question kinds ────────────────────────────────────────────────
  'ga.kind.who-role': { en: 'Who’s who', ar: 'مين مين', es: 'Quién es quién' },
  'ga.kind.who-relation': { en: 'Relationships', ar: 'العلاقات', es: 'Relaciones' },
  'ga.kind.portrait': {
    en: 'Character descriptions',
    ar: 'وصف الشخصيات',
    es: 'Descripciones de personajes',
  },
  'ga.kind.where': {
    en: 'Where a quotation comes from',
    ar: 'من وين الاقتباس',
    es: 'De dónde es la cita',
  },
  'ga.kind.finish': { en: 'Finishing quotations', ar: 'تكملة الاقتباسات', es: 'Completar citas' },
  'ga.kind.rebuild': {
    en: 'Rebuilding quotations',
    ar: 'إعادة بناء الاقتباسات',
    es: 'Reconstruir citas',
  },
  'ga.kind.method': { en: 'Naming methods', ar: 'تسمية الأساليب', es: 'Identificar recursos' },
  'ga.kind.theme': {
    en: 'Themes in quotations',
    ar: 'المواضيع في الاقتباسات',
    es: 'Temas en las citas',
  },
  'ga.kind.theme-check': {
    en: 'Themes in key moments',
    ar: 'المواضيع في اللحظات المهمة',
    es: 'Temas en momentos clave',
  },
  'ga.kind.order': { en: 'Story order', ar: 'ترتيب الأحداث', es: 'Orden de la historia' },
  'ga.kind.comic': {
    en: 'Moments and their lines',
    ar: 'اللحظات وجملها',
    es: 'Momentos y sus frases',
  },
  'ga.kind.significance': {
    en: 'Why a moment matters',
    ar: 'ليش اللحظة مهمة',
    es: 'Por qué importa un momento',
  },
  'ga.kind.extract-note': {
    en: 'Close reading of extracts',
    ar: 'قراءة دقيقة للمقتطفات',
    es: 'Lectura atenta de fragmentos',
  },
  'ga.kind.analysis-quote': {
    en: 'Matching analysis to quotations',
    ar: 'ربط التحليل بالاقتباسات',
    es: 'Relacionar análisis y citas',
  },
  'ga.kind.example-shows': {
    en: 'What an example shows',
    ar: 'شنو يوضّح المثال',
    es: 'Qué muestra un ejemplo',
  },
  'ga.kind.essay-plan': {
    en: 'Planning an essay',
    ar: 'تخطيط المقال',
    es: 'Planificar una redacción',
  },
  'ga.kind.paragraph-order': {
    en: 'Building a paragraph',
    ar: 'بناء فقرة',
    es: 'Construir un párrafo',
  },
  'ga.kind.vocabulary': {
    en: 'Vocabulary of the text',
    ar: 'مفردات النص',
    es: 'Vocabulario del texto',
  },
  'ga.kind.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'ga.kind.across_texts': {
    en: '{kind}, across your set texts',
    ar: '{kind}، في نصوصك المقررة',
    es: '{kind}, en tus textos',
  },

  // ── Your skills ─────────────────────────────────────────────────────────
  'ga.skills.title': { en: 'Your skills', ar: 'مهاراتك', es: 'Tus destrezas' },
  'ga.skills.lead': {
    en: 'Each question counts towards the one skill it mostly tests. A bar shows the share right in your last 30 answers on that skill.',
    ar: 'كل سؤال ينحسب للمهارة الوحدة اللي يختبرها أكثر شي. الشريط يوضّح نسبة الصح في آخر 30 إجابة لك في هالمهارة.',
    es: 'Cada pregunta cuenta para la destreza que más evalúa. La barra muestra el porcentaje de aciertos en tus últimas 30 respuestas de esa destreza.',
  },
  'ga.skills.literature': { en: 'Literature', ar: 'الأدب', es: 'Literatura' },
  'ga.skills.language': { en: 'Language', ar: 'اللغة', es: 'Lengua' },
  'ga.skills.ao': { en: 'GCSE {ao}', ar: 'GCSE {ao}', es: 'GCSE {ao}' },
  'ga.skills.ao_note': {
    en: 'AO numbers are those of GCSE English Literature. The International GCSE numbers some objectives differently.',
    ar: 'أرقام الأهداف (AO) هي حق GCSE الأدب الإنجليزي. الـ International GCSE يرقّم بعض الأهداف بشكل مختلف.',
    es: 'Los números de AO son los de GCSE English Literature. El International GCSE numera algunos objetivos de otra forma.',
  },
  'ga.skills.detail': { en: 'In more detail', ar: 'بتفصيل أكثر', es: 'Con más detalle' },

  // ── Set texts ───────────────────────────────────────────────────────────
  'ga.texts.title': {
    en: 'Set text games',
    ar: 'ألعاب النصوص المقررة',
    es: 'Juegos de los textos',
  },
  'ga.texts.answered': { en: '{n} answered', ar: '{n} سؤال', es: '{n} respondidas' },
  'ga.texts.right': { en: '{pct}% right', ar: '{pct}% صح', es: '{pct}% bien' },
  'ga.texts.levels': {
    en: 'Levels played: {n}',
    ar: 'مستويات لعبتها: {n}',
    es: 'Niveles jugados: {n}',
  },
  'ga.texts.weakest': { en: 'Weakest: {kind}', ar: 'الأضعف: {kind}', es: 'Lo más flojo: {kind}' },

  // ── Mix-ups ─────────────────────────────────────────────────────────────
  'ga.mixups.title': { en: 'Mix-ups', ar: 'لخبطات', es: 'Confusiones' },
  'ga.mixups.lead': {
    en: 'Wrong answers you have chosen more than once.',
    ar: 'إجابات غلط اخترتها أكثر من مرة.',
    es: 'Respuestas equivocadas que has elegido más de una vez.',
  },
  'ga.mixups.line': {
    en: '{game}: you chose “{chose}” when it was {kind}, {n} times',
    ar: '{game}: اخترت «{chose}» وهو {kind}، {n} مرات',
    es: '{game}: elegiste «{chose}» cuando era {kind}, {n} veces',
  },

  // ── Week by week ────────────────────────────────────────────────────────
  'ga.weeks.title': { en: 'Week by week', ar: 'أسبوع بأسبوع', es: 'Semana a semana' },
  'ga.weeks.lead': {
    en: 'Questions answered each week, with the share right underneath.',
    ar: 'عدد الأسئلة اللي جاوبتها كل أسبوع، وتحتها نسبة الصح.',
    es: 'Preguntas respondidas cada semana, con el porcentaje de aciertos debajo.',
  },
  'ga.weeks.week_of': { en: 'Week of {date}', ar: 'أسبوع {date}', es: 'Semana del {date}' },
  'ga.weeks.table_week': { en: 'Week', ar: 'الأسبوع', es: 'Semana' },
  'ga.weeks.table_answered': { en: 'Answered', ar: 'جاوبت', es: 'Respondidas' },
  'ga.weeks.table_right': { en: 'Right', ar: 'صح', es: 'Bien' },

  // ── Everything played ───────────────────────────────────────────────────
  'ga.played.title': {
    en: 'Everything you have played',
    ar: 'كل شي لعبته',
    es: 'Todo lo que has jugado',
  },
  'ga.played.rounds': { en: 'Rounds: {n}', ar: 'الجولات: {n}', es: 'Rondas: {n}' },
  'ga.played.no_detail': {
    en: 'Score only, without question-by-question detail',
    ar: 'النتيجة بس، بدون تفاصيل كل سؤال',
    es: 'Solo la puntuación, sin detalle por pregunta',
  },
  'ga.played.last': { en: 'Last played {date}', ar: 'آخر مرة {date}', es: 'Última vez: {date}' },

  // ── Next steps (only with suggestions switched on) ──────────────────────
  'ga.next.title': { en: 'What to do next', ar: 'شنو تسوي بعدين', es: 'Qué hacer ahora' },
  'ga.next.lead': {
    en: 'Suggested from your results above, one for each thing to work on.',
    ar: 'مقترحة من نتايجك اللي فوق، وحدة لكل شي يحتاج شغل.',
    es: 'Sugeridas a partir de tus resultados, una por cada cosa que trabajar.',
  },
  'ga.next.quest.craft': {
    en: '{text}, {kind}: {right} of your last {of} right. Play the quest’s {level} level, where these questions are.',
    ar: '{text}، {kind}: {right} من آخر {of} صح. العب مستوى {level} في المهمة، هني هالأسئلة.',
    es: '{text}, {kind}: {right} de tus últimas {of} bien. Juega el nivel {level} de la misión, que es donde están estas preguntas.',
  },
  'ga.next.quest.cast': {
    en: '{text}, {kind}: {right} of your last {of} right. Play the quest’s {level} level, where these questions are.',
    ar: '{text}، {kind}: {right} من آخر {of} صح. العب مستوى {level} في المهمة، هني هالأسئلة.',
    es: '{text}, {kind}: {right} de tus últimas {of} bien. Juega el nivel {level} de la misión, que es donde están estas preguntas.',
  },
  'ga.next.quest.chapters': {
    en: '{text}, {kind}: {right} of your last {of} right. Replay its chapter levels, and play Review when it comes up: it brings back the questions you missed.',
    ar: '{text}، {kind}: {right} من آخر {of} صح. عيد مستويات الفصول، والعب المراجعة لما تطلع لك: ترجّع لك الأسئلة اللي غلطت فيها.',
    es: '{text}, {kind}: {right} de tus últimas {of} bien. Vuelve a jugar sus niveles por capítulos y haz el Repaso cuando aparezca: te devuelve las preguntas que fallaste.',
  },
  'ga.next.game': {
    en: '{game}, {kind}: {right} of your last {of} right. Play it again, and read the explanation after each answer.',
    ar: '{game}، {kind}: {right} من آخر {of} صح. العبها مرة ثانية، واقرا الشرح بعد كل إجابة.',
    es: '{game}, {kind}: {right} de tus últimas {of} bien. Vuelve a jugar y lee la explicación después de cada respuesta.',
  },
  'ga.next.group': {
    en: '{group}: {right} of your last {of} right. {game} practises exactly this.',
    ar: '{group}: {right} من آخر {of} صح. {game} تتدرّب فيها على هالشي بالضبط.',
    es: '{group}: {right} de tus últimas {of} bien. {game} practica justo esto.',
  },
  'ga.next.group_quests': {
    en: '{group}: {right} of your last {of} right. The set text games practise this, level by level.',
    ar: '{group}: {right} من آخر {of} صح. ألعاب النصوص المقررة تتدرّب فيها على هالشي، مستوى بمستوى.',
    es: '{group}: {right} de tus últimas {of} bien. Los juegos de los textos practican esto, nivel a nivel.',
  },
  'ga.next.link.quest': { en: 'Open the quest', ar: 'افتح المهمة', es: 'Abrir la misión' },
  'ga.next.link.game': { en: 'Play', ar: 'العب', es: 'Jugar' },
  'ga.next.link.quests': { en: 'Choose a set text', ar: 'اختر نص مقرر', es: 'Elegir un texto' },
  'ga.next.learn': { en: 'Learn it first', ar: 'تعلّمها أول', es: 'Apréndelo antes' },

  // ── The AI coach (POST /api/games/coach; src/components/learning/CoachCard.tsx)
  'ga.coach.title': { en: 'Your AI coach', ar: 'مدرّبك بالذكاء الاصطناعي', es: 'Tu coach de IA' },
  'ga.coach.lead': {
    en: 'A short report on your results: what is going well, what to work on, and what to do next on the site.',
    ar: 'تقرير قصير عن نتايجك: شنو ماشي زين، وعلى شنو تشتغل، وشنو تسوي بعدين في الموقع.',
    es: 'Un informe breve sobre tus resultados: qué va bien, qué trabajar y qué hacer después en la web.',
  },
  'ga.coach.ask': { en: 'Write my report', ar: 'اكتب تقريري', es: 'Escribe mi informe' },
  'ga.coach.again': {
    en: 'Write a new report',
    ar: 'اكتب تقرير جديد',
    es: 'Escribe un informe nuevo',
  },
  'ga.coach.writing': {
    en: 'Writing your report. This can take up to a minute.',
    ar: 'جاري كتابة تقريرك. ممكن ياخذ لين دقيقة.',
    es: 'Escribiendo tu informe. Puede tardar hasta un minuto.',
  },
  'ga.coach.strengths': { en: 'Going well', ar: 'ماشي زين', es: 'Va bien' },
  'ga.coach.work_on': { en: 'To work on', ar: 'تحتاج شغل', es: 'Para trabajar' },
  'ga.coach.next': { en: 'What to do next', ar: 'شنو تسوي بعدين', es: 'Qué hacer ahora' },
  'ga.coach.go': { en: 'Go there', ar: 'روح لها', es: 'Ir allí' },
  'ga.coach.label': {
    en: 'Written by AI on {date} from your results in the games ({n} answered questions). No person has checked it, and it is not a prediction of any exam result.',
    ar: 'كتبه الذكاء الاصطناعي في {date} من نتايجك في الألعاب ({n} سؤال جاوبته). ما راجعه أي شخص، وهو مو توقّع لأي نتيجة امتحان.',
    es: 'Escrito por IA el {date} a partir de tus resultados en los juegos ({n} preguntas respondidas). Ninguna persona lo ha revisado y no es una predicción de ningún resultado de examen.',
  },
  'ga.coach.needs_plan': {
    en: 'The AI coach is part of a plan, or comes through your school. Your results and their analysis above are free.',
    ar: 'المدرّب بالذكاء الاصطناعي جزء من الاشتراك، أو يجيك عن طريق مدرستك. نتايجك وتحليلها اللي فوق ببلاش.',
    es: 'El coach de IA forma parte de un plan o llega a través de tu colegio. Tus resultados y su análisis siguen siendo gratis.',
  },
  'ga.coach.plans': { en: 'About plans', ar: 'عن الاشتراكات', es: 'Sobre los planes' },
  'ga.coach.too_few': {
    en: 'The coach needs at least {n} answered questions to write a useful report. You have answered {have} so far.',
    ar: 'المدرّب يحتاج على الأقل {n} سؤال مجاوب عشان يكتب تقرير مفيد. جاوبت {have} للحين.',
    es: 'El coach necesita al menos {n} preguntas respondidas para escribir un informe útil. Llevas {have}.',
  },
  'ga.coach.cooldown': {
    en: 'You can ask for one new report a day. The next one is available from {time}.',
    ar: 'تقدر تطلب تقرير جديد واحد كل يوم. التقرير الجاي متوفر من {time}.',
    es: 'Puedes pedir un informe nuevo al día. El siguiente estará disponible a partir del {time}.',
  },
  'ga.coach.failed': {
    en: 'The coach could not write a report just now. Try again later.',
    ar: 'المدرّب ما قدر يكتب تقرير الحين. جرّب بعدين.',
    es: 'El coach no ha podido escribir un informe ahora. Inténtalo más tarde.',
  },

  // ── The suggestions switch (PUT /api/games/suggestions) ─────────────────
  'ga.suggest.off_title': {
    en: 'Suggestions are switched off',
    ar: 'الاقتراحات مطفية',
    es: 'Las sugerencias están desactivadas',
  },
  'ga.suggest.off_body': {
    en: 'We can suggest what to revise next from your results above, and with a plan or school access the AI coach can write you a report. To do that we use your results to work out suggestions just for you, so this stays off until you switch it on. You can switch it off again at any time, and your results stay either way.',
    ar: 'نقدر نقترح عليك شنو تراجع بعدين من نتايجك اللي فوق، ومع الاشتراك أو عن طريق المدرسة يقدر المدرّب بالذكاء الاصطناعي يكتب لك تقرير. عشان نسوي هذا نستخدم نتايجك ونطلع اقتراحات خاصة فيك، فيبقى مطفي لين تشغّله انت. تقدر تطفيه مرة ثانية متى ما بغيت، ونتايجك تبقى في الحالتين.',
    es: 'Podemos sugerirte qué repasar a continuación a partir de tus resultados y, con un plan o a través de tu colegio, el coach de IA puede escribirte un informe. Para ello usamos tus resultados para preparar sugerencias solo para ti, así que está desactivado hasta que lo actives. Puedes desactivarlo de nuevo cuando quieras, y tus resultados se quedan igual.',
  },
  'ga.suggest.turn_on': {
    en: 'Switch suggestions on',
    ar: 'شغّل الاقتراحات',
    es: 'Activar sugerencias',
  },
  'ga.suggest.turn_off': {
    en: 'Switch suggestions off',
    ar: 'طفّ الاقتراحات',
    es: 'Desactivar sugerencias',
  },
  'ga.suggest.on_note': {
    en: 'Suggestions are on. They are worked out from your results only.',
    ar: 'الاقتراحات شغّالة. تنحسب من نتايجك بس.',
    es: 'Las sugerencias están activadas. Se calculan solo a partir de tus resultados.',
  },
  'ga.suggest.failed': {
    en: 'Your setting could not be saved. Try again.',
    ar: 'ما انحفظ الإعداد. جرّب مرة ثانية.',
    es: 'No se ha podido guardar el ajuste. Inténtalo de nuevo.',
  },
  // ── A teacher reading about a pupil (16 October 2026) ─────────────────────
  // GameAnalyticsBody in its teacher form (the pupil page) swaps copy that
  // speaks to the student for these third-person twins: TEACHER_VOICE in
  // src/components/learning/GameAnalyticsView.tsx lists the keys.
  'ga.tile.days.teacher': { en: 'Days played', ar: 'أيام اللعب', es: 'Días de juego' },
  'ga.strengths.empty.teacher': {
    en: "Nothing to call secure yet. A skill is secure when 80% or more of the pupil's recent answers on it are right, over at least 10 answers.",
    ar: 'ما فيه شي متمكّن منه للحين. تكون المهارة متمكّنة لما 80% أو أكثر من إجابات الطالب الأخيرة فيها صح، على الأقل في 10 إجابات.',
    es: 'Todavía no hay nada consolidado. Una destreza está consolidada cuando el alumno acierta el 80% o más de sus respuestas recientes, en al menos 10 respuestas.',
  },
  'ga.work.empty.teacher': {
    en: "Nothing stands out as weak in the pupil's recent answers.",
    ar: 'ما فيه شي ضعيف واضح في إجابات الطالب الأخيرة.',
    es: 'Nada destaca como flojo en las respuestas recientes del alumno.',
  },
  'ga.stat.recent.teacher': {
    en: '{right} of their last {n} right',
    ar: '{right} من آخر {n} صح',
    es: '{right} de sus últimas {n} bien',
  },
  'ga.kind.across_texts.teacher': {
    en: '{kind}, across their set texts',
    ar: '{kind}، في نصوصه المقررة',
    es: '{kind}, en sus textos',
  },
  'ga.skills.title.teacher': { en: 'Skills', ar: 'المهارات', es: 'Destrezas' },
  'ga.skills.lead.teacher': {
    en: "Each question counts towards the one skill it mostly tests. A bar shows the share right in the pupil's last 30 answers on that skill.",
    ar: 'كل سؤال ينحسب للمهارة الوحدة اللي يختبرها أكثر شي. الشريط يوضّح نسبة الصح في آخر 30 إجابة للطالب في هالمهارة.',
    es: 'Cada pregunta cuenta para la destreza que más evalúa. La barra muestra el porcentaje de aciertos en las últimas 30 respuestas del alumno en esa destreza.',
  },
  'ga.mixups.lead.teacher': {
    en: 'Wrong answers the pupil has chosen more than once.',
    ar: 'إجابات غلط اختارها الطالب أكثر من مرة.',
    es: 'Respuestas equivocadas que el alumno ha elegido más de una vez.',
  },
  'ga.mixups.line.teacher': {
    en: '{game}: chose “{chose}” when it was {kind}, {n} times',
    ar: '{game}: اختار «{chose}» وهو {kind}، {n} مرات',
    es: '{game}: eligió «{chose}» cuando era {kind}, {n} veces',
  },
  'ga.played.title.teacher': {
    en: 'Everything played',
    ar: 'كل شي لعبه الطالب',
    es: 'Todo lo que ha jugado',
  },

  // ── Telling the student who else sees their results (16 October 2026) ────
  'ga.teachers_see': {
    en: 'If you are in a class on The English Hub, your teachers can see these results from the day you joined their class.',
    ar: 'إذا كنت في صف على The English Hub، معلّمينك يقدرون يشوفون هالنتايج من يوم انضميت لصفهم.',
    es: 'Si estás en una clase de The English Hub, tus profesores pueden ver estos resultados desde el día en que te uniste a su clase.',
  },

  // ── The school's view: a class's Games tab and a pupil's Games panel ──────
  // (16 October 2026; src/components/school/games/). Bands reuse ga.band.*,
  // skill names ga.group.*, tiles ga.tile.*. Figures are shares of questions
  // right, never exam marks, as everywhere in the game analytics.
  'school.games.tab': { en: 'Games', ar: 'الألعاب', es: 'Juegos' },
  'school.games.title': {
    en: 'Game results',
    ar: 'نتايج الألعاب',
    es: 'Resultados de los juegos',
  },
  'school.games.lead': {
    en: "From each pupil's games since they joined this class. Where a pupil stands in a skill comes from their own last 30 answers in it. These are shares of questions right, not exam marks.",
    ar: 'من ألعاب كل طالب من يوم انضم لهالصف. مستوى الطالب في أي مهارة يجي من آخر 30 إجابة له فيها. هذي نسب أسئلة صح، مو درجات امتحان.',
    es: 'A partir de los juegos de cada alumno desde que se unió a esta clase. El nivel de un alumno en una destreza sale de sus propias últimas 30 respuestas en ella. Son porcentajes de preguntas acertadas, no notas de examen.',
  },
  'school.games.tile.pupils': {
    en: 'Pupils playing',
    ar: 'الطلاب اللي يلعبون',
    es: 'Alumnos que juegan',
  },
  'school.games.tile.pupils_sub': {
    en: '{n} of {total} in the class',
    ar: '{n} من {total} في الصف',
    es: '{n} de {total} en la clase',
  },
  'school.games.tile.week_sub': {
    en: '{n} answers from {pupils} pupils',
    ar: '{n} إجابة من {pupils} طلاب',
    es: '{n} respuestas de {pupils} alumnos',
  },
  'school.games.skills.title': {
    en: 'Skills across the class',
    ar: 'المهارات في الصف',
    es: 'Destrezas en la clase',
  },
  'school.games.skills.lead': {
    en: "How many pupils are secure, developing or need work in each skill, and the share of the class's answers in it that were right.",
    ar: 'كم طالب متمكّن، أو يتطوّر، أو يحتاج شغل في كل مهارة، ونسبة الصح من إجابات الصف فيها.',
    es: 'Cuántos alumnos tienen cada destreza consolidada, en desarrollo o por trabajar, y el porcentaje de respuestas acertadas de la clase en ella.',
  },
  'school.games.col.skill': { en: 'Skill', ar: 'المهارة', es: 'Destreza' },
  'school.games.col.right': { en: 'Right', ar: 'صح', es: 'Aciertos' },
  'school.games.col.answers': { en: 'Answers', ar: 'الإجابات', es: 'Respuestas' },
  'school.games.col.pupil': { en: 'Pupil', ar: 'الطالب', es: 'Alumno' },
  'school.games.col.last': { en: 'Last played', ar: 'آخر لعب', es: 'Última partida' },
  'school.games.mixups.title': {
    en: 'Common mix-ups',
    ar: 'أخطاء متكررة',
    es: 'Confusiones frecuentes',
  },
  'school.games.mixups.lead': {
    en: 'Wrong answers pupils chose more than once, the most widespread first.',
    ar: 'إجابات غلط اختارها الطلاب أكثر من مرة، الأكثر انتشار أول.',
    es: 'Respuestas equivocadas que los alumnos eligieron más de una vez, primero las más extendidas.',
  },
  'school.games.mixups.line': {
    en: '{game}: “{chose}” chosen when it was {kind}, by {pupils} pupils, {n} times',
    ar: '{game}: اختاروا «{chose}» وهو {kind}، {pupils} طلاب، {n} مرات',
    es: '{game}: eligieron «{chose}» cuando era {kind}, {pupils} alumnos, {n} veces',
  },
  // One pupil: the class view picks these when the count is 1.
  'school.games.mixups.line_one': {
    en: '{game}: “{chose}” chosen when it was {kind}, by 1 pupil, {n} times',
    ar: '{game}: اختار طالب واحد «{chose}» وهو {kind}، {n} مرات',
    es: '{game}: un alumno eligió «{chose}» cuando era {kind}, {n} veces',
  },
  'school.games.tile.week_sub_one': {
    en: '{n} answers from 1 pupil',
    ar: '{n} إجابة من طالب واحد',
    es: '{n} respuestas de un alumno',
  },
  'school.games.mixups.none': {
    en: 'No pupil has chosen the same wrong answer more than once.',
    ar: 'ما فيه طالب اختار نفس الإجابة الغلط أكثر من مرة.',
    es: 'Ningún alumno ha elegido la misma respuesta equivocada más de una vez.',
  },
  'school.games.pupils.title': { en: 'Pupils', ar: 'الطلاب', es: 'Alumnos' },
  'school.games.not_yet': { en: 'Not yet', ar: 'للحين لا', es: 'Aún no' },
  'school.games.no_date': {
    en: 'No joining date, so nothing is shown',
    ar: 'ما فيه تاريخ انضمام، فما ينعرض شي',
    es: 'Sin fecha de incorporación, así que no se muestra nada',
  },
  'school.games.nothing_weak': {
    en: 'Nothing stands out',
    ar: 'ما فيه شي بارز',
    es: 'Nada destaca',
  },
  'school.games.empty': {
    en: 'No pupil in this class has played a game since joining it.',
    ar: 'ما فيه طالب في هالصف لعب أي لعبة من يوم انضم له.',
    es: 'Ningún alumno de esta clase ha jugado desde que se unió a ella.',
  },
  'school.games.error': {
    en: 'The game results could not be loaded.',
    ar: 'ما قدرنا نحمّل نتايج الألعاب.',
    es: 'No se han podido cargar los resultados de los juegos.',
  },
  'school.games.pupil.lead': {
    en: 'From their games since {date}, when they joined. These are shares of questions right, not exam marks.',
    ar: 'من ألعابه من {date}، يوم انضم. هذي نسب أسئلة صح، مو درجات امتحان.',
    es: 'A partir de sus juegos desde el {date}, cuando se unió. Son porcentajes de preguntas acertadas, no notas de examen.',
  },
  'school.games.pupil.no_date': {
    en: 'Nothing is shown, because there is no record of when this pupil joined.',
    ar: 'ما ينعرض شي، لأن ما فيه سجل متى انضم هالطالب.',
    es: 'No se muestra nada porque no consta cuándo se unió este alumno.',
  },
  'school.games.pupil.empty': {
    en: 'No games played since {date}.',
    ar: 'ما لعب أي لعبة من {date}.',
    es: 'No ha jugado desde el {date}.',
  },

  // ── The AI class report for a teacher (23 October 2026;
  // POST /api/school/classes/[classId]/coach; src/lib/game-results/class-coach.ts).
  // The report's own headings reuse ga.coach.strengths, ga.coach.work_on,
  // ga.coach.next and ga.coach.go.
  'school.games.report.title': {
    en: 'AI report for this class',
    ar: 'تقرير الذكاء الاصطناعي لهالصف',
    es: 'Informe de IA para esta clase',
  },
  'school.games.report.lead': {
    en: "A short report for you on the class's results: what is going well, what to work on, and what to set next on the site. Written from the class's pooled figures with no names, and never from a pupil who has switched AI off.",
    ar: 'تقرير قصير لك عن نتايج الصف: شنو ماشي زين، وعلى شنو تشتغلون، وشنو تعطيهم بعدين في الموقع. مكتوب من أرقام الصف المجمّعة بدون أسماء، وأبداً مو من طالب طفّى الذكاء الاصطناعي.',
    es: 'Un informe breve para ti sobre los resultados de la clase: qué va bien, qué trabajar y qué asignar después en la web. Escrito a partir de las cifras agrupadas de la clase, sin nombres, y nunca a partir de un alumno que haya desactivado la IA.',
  },
  'school.games.report.ask': {
    en: 'Write a class report',
    ar: 'اكتب تقرير الصف',
    es: 'Escribir un informe de la clase',
  },
  'school.games.report.again': {
    en: 'Write a new report',
    ar: 'اكتب تقرير جديد',
    es: 'Escribir un informe nuevo',
  },
  'school.games.report.writing': {
    en: 'Writing the report. This can take up to a minute.',
    ar: 'جاري كتابة التقرير. ممكن ياخذ لين دقيقة.',
    es: 'Escribiendo el informe. Puede tardar hasta un minuto.',
  },
  'school.games.report.label': {
    en: "Written by AI on {date} from the class's pooled figures ({pupils} pupils, {n} answered questions), with no names. No person has checked it, and it is not a prediction of any exam result.",
    ar: 'كتبه الذكاء الاصطناعي في {date} من أرقام الصف المجمّعة ({pupils} طالب، {n} سؤال مجاوب)، بدون أسماء. ما راجعه أي شخص، وهو مو توقّع لأي نتيجة امتحان.',
    es: 'Escrito por IA el {date} a partir de las cifras agrupadas de la clase ({pupils} alumnos, {n} preguntas respondidas), sin nombres. Ninguna persona lo ha revisado y no es una predicción de ningún resultado de examen.',
  },
  'school.games.report.not_authorised': {
    en: 'Your school has not recorded its authorisation for AI processing, so no report can be written. An administrator can arrange this with The English Hub. The figures above are still shown.',
    ar: 'مدرستك ما سجّلت تصريحها لمعالجة الذكاء الاصطناعي، فما يمكن كتابة تقرير. يقدر مسؤول المدرسة يرتّب هذا مع The English Hub. الأرقام اللي فوق باقية معروضة.',
    es: 'Tu colegio no ha registrado su autorización para el procesamiento con IA, así que no se puede escribir un informe. Un administrador puede gestionarlo con The English Hub. Las cifras de arriba se siguen mostrando.',
  },
  'school.games.report.not_live': {
    en: "Your school's access is not live, so no report can be written.",
    ar: 'اشتراك مدرستك مو فعّال، فما يمكن كتابة تقرير.',
    es: 'El acceso de tu colegio no está activo, así que no se puede escribir un informe.',
  },
  'school.games.report.too_few': {
    en: 'A report needs at least {pupils} pupils with results and {n} answered questions between them.',
    ar: 'التقرير يحتاج على الأقل {pupils} طلاب عندهم نتايج و{n} سؤال مجاوب بينهم.',
    es: 'Un informe necesita al menos {pupils} alumnos con resultados y {n} preguntas respondidas entre ellos.',
  },
  'school.games.report.cooldown': {
    en: 'One report a day for each class. The next is available from {time}.',
    ar: 'تقرير واحد كل يوم لكل صف. التقرير الجاي متوفر من {time}.',
    es: 'Un informe al día por clase. El siguiente estará disponible a partir del {time}.',
  },
  'school.games.report.failed': {
    en: 'The report could not be written just now. Try again later.',
    ar: 'ما قدرنا نكتب التقرير الحين. جرّب بعدين.',
    es: 'No se ha podido escribir el informe ahora. Inténtalo más tarde.',
  },
}
