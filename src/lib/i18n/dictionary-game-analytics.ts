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
}
