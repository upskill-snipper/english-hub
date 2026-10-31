/**
 * Text games: the interface around each text's quest
 * (src/components/games/quest/, src/app/games/texts/) and the index of texts
 * (src/components/games/text/). The text_games.* keys below are what the
 * quests still share with the guided path of rounds; the path's own sixty-two
 * (its rounds, buttons, scores and summaries) went with it on 12 October 2026.
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
  // "Most", not "every". This line and quest.map.how.levels once said every
  // answer came with the guide's reason, and every question from the guide.
  // Measured over all 107 quests on 12 October 2026: the 747 story-order
  // questions (of 8,768) show the right order and no reason, and 940 are built
  // from the comics, not the guide.
  'text_games.index.lead': {
    en: 'One set text at a time, in short levels: who’s who, story order, quotations, methods and themes, with comic panels to collect in the texts we have drawn. The questions come from our study guides and comics, and every answer is marked straight away, most of them with the reason.',
    ar: 'نص مقرر واحد كل مرة، في مستويات قصيرة: مين مين، ترتيب الأحداث، الاقتباسات، الأساليب والمواضيع، ومعها لوحات كوميك تجمعها في النصوص اللي رسمناها. الأسئلة مأخوذة من أدلة الدراسة والكوميك عندنا، وكل إجابة تتصحح على طول، وأغلبها مع السبب.',
    es: 'Un texto cada vez, en niveles breves: quién es quién, orden de la historia, citas, recursos y temas, con viñetas de cómic para coleccionar en los textos que hemos ilustrado. Las preguntas salen de nuestras guías de estudio y cómics, y cada respuesta se corrige al momento, casi siempre con el porqué.',
  },
  'text_games.index.your_course': { en: 'On your course', ar: 'من مقررك', es: 'De tu curso' },
  'text_games.index.comics': { en: 'Comic art', ar: 'رسومات كوميك', es: 'Con ilustraciones' },
  'text_games.index.play': { en: 'Play', ar: 'العب', es: 'Jugar' },
  // 13 October 2026: the founder decided game results are saved to signed-in
  // students' accounts (document 16, decision A). This line said "Nothing is
  // sent to us" for everyone; it is still true for a guest, and only for one.
  // src/components/games/game-round.tsx sends nothing unless signed in.
  //
  // 16 October 2026: it also ended "Nobody else can see them". Since 747b7b7e
  // the teacher of a pupil's class on the site, and the school's heads of
  // department and administrators, can see that pupil's game results from the
  // day the pupil joined the class (/api/school/classes/[classId]/games and
  // /api/school/students/[studentId]/games).
  'text_games.privacy': {
    en: "Signed in, your answers are saved to your account so you can see your progress in your hub. If you are in a class on the site through your school, your teacher, and your school's heads of department and administrators, can see your game results from the day you joined the class. Not signed in, your scores stay in this browser and nothing is sent to us.",
    ar: 'إذا انت مسجّل دخول، إجاباتك تنحفظ في حسابك عشان تشوف تقدّمك في الـ Hub مالك. وإذا انت في صف على الموقع عن طريق مدرستك، معلمك ورؤساء الأقسام والإداريين في مدرستك يقدرون يشوفون نتايج ألعابك من يوم انضمامك للصف. وإذا مو مسجّل دخول، نتايجك تبقى في هالمتصفح وما يوصلنا شي.',
    es: 'Con la sesión iniciada, tus respuestas se guardan en tu cuenta para que veas tu progreso en tu Hub. Si estás en una clase de la web a través de tu colegio, tu profesor y los jefes de departamento y administradores de tu colegio pueden ver los resultados de tus juegos desde el día en que te uniste a la clase. Sin iniciar sesión, tus puntuaciones se quedan en este navegador y no se nos envía nada.',
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

  // ── Feedback ─────────────────────────────────────────────────────────────
  'text_games.fb.wrong': { en: 'Not quite', ar: 'مو بالضبط', es: 'No exactamente' },
  'text_games.fb.why': {
    en: 'From the study guide',
    ar: 'من دليل الدراسة',
    es: 'De la guía de estudio',
  },
  'text_games.fb.also': {
    en: 'The guide links this moment to',
    ar: 'الدليل يربط هاللحظة بـ',
    es: 'La guía relaciona este momento con',
  },
  'text_games.fb.order_heading': {
    en: 'The order in the text',
    ar: 'الترتيب في النص',
    es: 'El orden en el texto',
  },

  // ── Story order ──────────────────────────────────────────────────────────
  'text_games.order.check': {
    en: 'Check the order',
    ar: 'شيّك على الترتيب',
    es: 'Comprobar el orden',
  },
  'text_games.order.clear': { en: 'Clear the order', ar: 'امسح الترتيب', es: 'Borrar el orden' },
  'text_games.order.position': { en: 'Position {n}', ar: 'المكان {n}', es: 'Posición {n}' },

  // ── Quests: the map of a text’s levels ──────────────────────────────────────
  'quest.map.progress': { en: 'Your progress', ar: 'تقدّمك', es: 'Tu progreso' },
  'quest.map.stars': {
    en: '{n} of {total} stars',
    ar: 'النجوم: {n} من {total}',
    es: '{n} de {total} estrellas',
  },
  'quest.map.xp': { en: '{n} XP', ar: '{n} نقطة خبرة', es: '{n} XP' },
  'quest.map.start': { en: 'Start: {level}', ar: 'ابدأ: {level}', es: 'Empezar: {level}' },
  'quest.map.continue': { en: 'Continue: {level}', ar: 'كمّل: {level}', es: 'Continuar: {level}' },
  'quest.map.all_done': {
    en: 'Three stars on every level',
    ar: 'ثلاث نجوم في كل المستويات',
    es: 'Tres estrellas en todos los niveles',
  },
  'quest.map.how.levels': {
    en: 'Each part of the text is a short level. Every answer is marked straight away, most of them with the reason.',
    ar: 'كل جزء من النص مستوى قصير. كل إجابة تتصحح على طول، وأغلبها مع السبب.',
    es: 'Cada parte del texto es un nivel breve. Cada respuesta se corrige al momento, casi siempre con el porqué.',
  },
  'quest.map.how.comic': {
    en: 'Finish a part to ink its panels into your own copy of the comic.',
    ar: 'خلّص جزء عشان تكسب لوحاته في نسختك من الكوميك.',
    es: 'Termina una parte para añadir sus viñetas a tu propio ejemplar del cómic.',
  },
  'quest.map.how.review': {
    en: 'Questions you miss come back in Review. The ones you get right come back later, spaced out, so they stick.',
    ar: 'الأسئلة اللي تفوتك ترجع لك في المراجعة. واللي تجاوبها صح ترجع بعدين على فترات، عشان تثبت في بالك.',
    es: 'Las preguntas que falles vuelven en el repaso. Las que aciertes vuelven más adelante, espaciadas, para que se queden.',
  },
  'quest.map.how.finale': {
    en: 'Earn a star on every part to open the final level.',
    ar: 'اكسب نجمة في كل جزء عشان يفتح لك المستوى الأخير.',
    es: 'Consigue una estrella en cada parte para abrir el nivel final.',
  },
  'quest.map.review_ready_one': {
    en: 'One question is ready to look at again.',
    ar: 'عندك سؤال واحد جاهز للمراجعة.',
    es: 'Hay una pregunta lista para repasar.',
  },
  'quest.map.review_ready': {
    en: '{n} questions are ready to look at again.',
    ar: 'أسئلة جاهزة للمراجعة: {n}',
    es: 'Hay {n} preguntas listas para repasar.',
  },
  'quest.map.review_none': {
    en: 'Nothing to review right now. Questions you miss come back here after a short break.',
    ar: 'ما في شي للمراجعة الحين. الأسئلة اللي تفوتك ترجع هني بعد استراحة قصيرة.',
    es: 'Ahora no hay nada que repasar. Las preguntas que falles vuelven aquí tras un breve descanso.',
  },
  'quest.map.review_start': { en: 'Start a review', ar: 'ابدأ المراجعة', es: 'Empezar el repaso' },
  'quest.map.levels': { en: 'Levels', ar: 'المستويات', es: 'Niveles' },
  'quest.map.span': { en: 'From {from} to {to}', ar: 'من {from} إلى {to}', es: 'De {from} a {to}' },
  'quest.map.cast_about': {
    en: 'Who’s who, and who the text describes',
    ar: 'مين مين، ومنو اللي يوصفه النص',
    es: 'Quién es quién y a quién describe el texto',
  },
  'quest.map.craft_about': {
    en: 'The writer’s methods, from the study guide',
    ar: 'أساليب الكاتب، من دليل الدراسة',
    es: 'Los recursos del autor, según la guía de estudio',
  },
  'quest.map.finale_about': {
    en: 'Questions from across the whole text',
    ar: 'أسئلة من النص كله',
    es: 'Preguntas de todo el texto',
  },
  'quest.map.finale_locked': {
    en: 'Opens when every part has a star',
    ar: 'يفتح لما يكون عندك نجمة في كل جزء',
    es: 'Se abre cuando tengas una estrella en cada parte',
  },
  'quest.map.up_next': { en: 'Up next', ar: 'اللي بعده', es: 'Siguiente' },
  'quest.map.level_stars': {
    en: 'Stars: {n} of 3',
    ar: 'النجوم: {n} من 3',
    es: 'Estrellas: {n} de 3',
  },
  'quest.map.best': { en: 'Best {n}%', ar: 'أفضل نتيجة {n}%', es: 'Mejor resultado: {n}%' },
  'quest.map.panels_to_ink': {
    en: 'Panels to ink: {n}',
    ar: 'لوحات تكسبها: {n}',
    es: 'Viñetas por entintar: {n}',
  },
  'quest.map.panels_inked': {
    en: 'Panels inked: {n}',
    ar: 'لوحات كسبتها: {n}',
    es: 'Viñetas entintadas: {n}',
  },
  'quest.progress.stars': { en: 'Stars: {n}', ar: 'النجوم: {n}', es: 'Estrellas: {n}' },

  // ── Quests: the levels, and the player’s rank ───────────────────────────────
  'quest.level.chapter': { en: 'Part {n}', ar: 'الجزء {n}', es: 'Parte {n}' },
  'quest.level.cast': { en: 'Cast', ar: 'الشخصيات', es: 'Personajes' },
  'quest.level.craft': { en: 'Writer’s craft', ar: 'أسلوب الكاتب', es: 'Oficio del autor' },
  'quest.level.finale': { en: 'Final level', ar: 'المستوى الأخير', es: 'Nivel final' },
  'quest.player.level': { en: 'Rank {n}', ar: 'الرتبة {n}', es: 'Rango {n}' },
  'quest.player.to_next': {
    en: '{n} XP to the next rank',
    ar: '{n} XP للرتبة الجاية',
    es: '{n} XP para el siguiente rango',
  },
  'quest.player.level_up': { en: 'New rank: {n}', ar: 'رتبة جديدة: {n}', es: 'Nuevo rango: {n}' },

  // ── Quests: playing a level ─────────────────────────────────────────────────
  'quest.leave': { en: 'Leave the level', ar: 'اطلع من المستوى', es: 'Salir del nivel' },
  'quest.progress': {
    en: 'Progress through the level',
    ar: 'تقدّمك في المستوى',
    es: 'Progreso en el nivel',
  },
  'quest.run_label': {
    en: 'Right answers in a row: {n}',
    ar: 'إجابات صح ورا بعض: {n}',
    es: 'Aciertos seguidos: {n}',
  },
  'quest.sound_on': { en: 'Turn sound on', ar: 'شغّل الصوت', es: 'Activar el sonido' },
  'quest.sound_off': { en: 'Turn sound off', ar: 'سكّر الصوت', es: 'Quitar el sonido' },
  'quest.count': { en: '{n} of {total}', ar: '{n} من {total}', es: '{n} de {total}' },
  'quest.continue': { en: 'Continue', ar: 'كمّل', es: 'Continuar' },
  'quest.see_results': { en: 'See how you did', ar: 'شوف نتيجتك', es: 'Ver cómo te ha ido' },
  'quest.check': { en: 'Check', ar: 'شيّك', es: 'Comprobar' },
  'quest.options': { en: 'Answers', ar: 'الإجابات', es: 'Respuestas' },
  'quest.option.your_right': {
    en: 'Your answer, right',
    ar: 'إجابتك، صح',
    es: 'Tu respuesta, correcta',
  },
  'quest.option.your_wrong': {
    en: 'Your answer, not right',
    ar: 'إجابتك، مو صح',
    es: 'Tu respuesta, incorrecta',
  },
  'quest.option.the_answer': {
    en: 'The right answer',
    ar: 'الإجابة الصح',
    es: 'La respuesta correcta',
  },
  'quest.yes': { en: 'Yes', ar: 'إيه', es: 'Sí' },
  'quest.no': { en: 'No', ar: 'لا', es: 'No' },
  'quest.review.title': { en: 'Review', ar: 'المراجعة', es: 'Repaso' },

  // ── Quests: the kinds of challenge, and their questions ─────────────────────
  'quest.kind.who': { en: 'Who’s who', ar: 'مين مين', es: 'Quién es quién' },
  'quest.kind.where': { en: 'Where is it?', ar: 'وين موجود؟', es: '¿Dónde está?' },
  'quest.kind.finish': { en: 'Finish the quotation', ar: 'كمّل الاقتباس', es: 'Completa la cita' },
  'quest.kind.method': { en: 'Method spotter', ar: 'اكتشف الأسلوب', es: 'Detecta el recurso' },
  'quest.kind.theme': { en: 'Theme match', ar: 'طابق الموضوع', es: 'Empareja el tema' },
  'quest.kind.order': { en: 'Story order', ar: 'ترتيب الأحداث', es: 'Orden de la historia' },
  'quest.kind.panel_line': { en: 'Fill the panel', ar: 'كمّل اللوحة', es: 'Completa la viñeta' },
  'quest.kind.line_panel': {
    en: 'Find the panel',
    ar: 'دوّر على اللوحة',
    es: 'Encuentra la viñeta',
  },
  'quest.kind.rebuild': {
    en: 'Rebuild the quotation',
    ar: 'رتّب الاقتباس',
    es: 'Reconstruye la cita',
  },
  'quest.kind.whose': { en: 'Who is described?', ar: 'منو الموصوف؟', es: '¿A quién se describe?' },
  'quest.kind.marker': { en: 'Spot the detail', ar: 'حدّد التفصيل', es: 'Encuentra el detalle' },
  'quest.kind.theme_check': { en: 'Theme check', ar: 'شيّك على الموضوع', es: 'Comprueba el tema' },
  'quest.kind.evidence': { en: 'Find the evidence', ar: 'لاقِ الدليل', es: 'Encuentra la prueba' },
  'quest.q.panel_line': {
    en: 'Which line belongs in this panel?',
    ar: 'أي سطر مكانه في هاللوحة؟',
    es: '¿Qué frase va en esta viñeta?',
  },
  'quest.q.line_panel': {
    en: 'Which moment is this line from?',
    ar: 'من أي لحظة هالسطر؟',
    es: '¿De qué momento es esta frase?',
  },
  'quest.q.rebuild': {
    en: 'Tap the words in order to rebuild the quotation.',
    ar: 'اضغط على الكلمات بالترتيب عشان ترجّع الاقتباس.',
    es: 'Toca las palabras en orden para reconstruir la cita.',
  },
  'quest.q.evidence': {
    en: 'This reading is about one of these lines. Which one?',
    ar: 'هالقراءة عن سطر واحد من هالسطور. أي واحد؟',
    es: 'Esta lectura trata de uno de estos versos o frases. ¿De cuál?',
  },
  'quest.q.whose': {
    en: 'Which character does the text describe in these words?',
    ar: 'أي شخصية يوصفها النص بهالكلمات؟',
    es: '¿A qué personaje describe el texto con estas palabras?',
  },
  'quest.q.marker': {
    en: 'Which marker on the portrait of {name} points to this?',
    ar: 'أي رقم على صورة {name} يأشّر على هذا؟',
    es: '¿Qué número del retrato de {name} señala esto?',
  },
  'quest.q.theme_check': {
    en: 'Is {theme} at work in this moment?',
    ar: 'موضوع {theme} موجود في هاللحظة؟',
    es: '¿Aparece el tema {theme} en este momento?',
  },
  'quest.order.cards': {
    en: 'Moments to put in order',
    ar: 'اللحظات اللي ترتّبها',
    es: 'Momentos para ordenar',
  },
  'quest.rebuild.line': { en: 'Your quotation', ar: 'اقتباسك', es: 'Tu cita' },
  'quest.rebuild.empty': {
    en: 'Tap the words in order.',
    ar: 'اضغط على الكلمات بالترتيب.',
    es: 'Toca las palabras en orden.',
  },
  'quest.rebuild.words': { en: 'Words to place', ar: 'كلمات تحطها', es: 'Palabras para colocar' },
  'quest.rebuild.clear': { en: 'Start again', ar: 'من البداية', es: 'Empezar de nuevo' },
  'quest.marker.numbers': {
    en: 'Marker numbers',
    ar: 'أرقام العلامات',
    es: 'Números de las marcas',
  },
  'quest.marker.label': { en: 'Marker {n}', ar: 'العلامة {n}', es: 'Marca {n}' },

  // ── Quests: after each answer ───────────────────────────────────────────────
  'quest.fb.right.1': { en: 'Right', ar: 'صح', es: 'Correcto' },
  'quest.fb.right.2': { en: 'Spot on', ar: 'بالضبط', es: 'Exacto' },
  'quest.fb.right.3': { en: 'Well done', ar: 'أحسنت', es: 'Bien hecho' },
  'quest.fb.right.4': { en: 'Nicely done', ar: 'شغل حلو', es: 'Muy bien' },
  'quest.fb.answer_is': { en: 'The answer:', ar: 'الإجابة:', es: 'La respuesta:' },
  'quest.fb.run': { en: '{n} right in a row', ar: '{n} صح ورا بعض', es: '{n} aciertos seguidos' },
  'quest.xp_gain': { en: '+{n} XP', ar: '+{n} نقطة', es: '+{n} XP' },

  // ── Quests: the end of a level ──────────────────────────────────────────────
  'quest.done.heading': { en: 'Level complete', ar: 'خلّصت المستوى', es: 'Nivel completado' },
  'quest.done.review': { en: 'Review complete', ar: 'خلصت المراجعة', es: 'Repaso completado' },
  'quest.done.score': {
    en: '{right} of {total} right',
    ar: '{right} من {total} صح',
    es: '{right} de {total} bien',
  },
  'quest.done.xp': { en: 'XP', ar: 'نقاط الخبرة', es: 'XP' },
  'quest.done.accuracy': { en: 'Accuracy', ar: 'الدقة', es: 'Precisión' },
  'quest.done.best_run': { en: 'Best run', ar: 'أطول سلسلة', es: 'Mejor serie' },
  'quest.done.inked': {
    en: 'Inked into your comic',
    ar: 'انضافت للكوميك مالك',
    es: 'Añadido a tu cómic',
  },
  'quest.done.next': { en: 'Next: {level}', ar: 'اللي بعده: {level}', es: 'Siguiente: {level}' },
  'quest.done.again': {
    en: 'Play this level again',
    ar: 'العب هالمستوى مرة ثانية',
    es: 'Jugar este nivel otra vez',
  },
  'quest.done.map': { en: 'Back to the map', ar: 'رجوع للخريطة', es: 'Volver al mapa' },

  // ── Quests: the student’s comic ─────────────────────────────────────────────
  'quest.comic.title': { en: 'Your comic', ar: 'الكوميك مالك', es: 'Tu cómic' },
  'quest.comic.count': {
    en: 'Panels inked: {n} of {total}',
    ar: 'اللوحات اللي كسبتها: {n} من {total}',
    es: 'Viñetas entintadas: {n} de {total}',
  },
  'quest.comic.open': { en: 'Open your comic', ar: 'افتح الكوميك مالك', es: 'Abrir tu cómic' },
  'quest.comic.close': { en: 'Close the comic', ar: 'سكّر الكوميك', es: 'Cerrar el cómic' },
  'quest.comic.how': {
    en: 'Finish a part to ink its panels.',
    ar: 'خلّص جزء عشان تكسب لوحاته.',
    es: 'Termina una parte para entintar sus viñetas.',
  },
  'quest.comic.complete': {
    en: 'Complete: every panel is inked.',
    ar: 'كامل: كل اللوحات صارت لك.',
    es: 'Completo: todas las viñetas están entintadas.',
  },
  'quest.comic.locked': {
    en: 'Inked when you finish {level}',
    ar: 'تنكسب لما تخلّص: {level}',
    es: 'Se entinta al terminar: {level}',
  },

  // ── Quests: achievements, earned across every text ──────────────────────────
  'quest.achievements.title': { en: 'Achievements', ar: 'الإنجازات', es: 'Logros' },
  'quest.achievements.count': { en: '{n} of {total}', ar: '{n} من {total}', es: '{n} de {total}' },
  'quest.achievements.note': {
    en: 'Earned across every text you play.',
    ar: 'تكسبها في كل النصوص اللي تلعبها.',
    es: 'Se consiguen en todos los textos que juegues.',
  },
  'quest.achievements.new': {
    en: 'Achievements earned',
    ar: 'إنجازات كسبتها',
    es: 'Logros conseguidos',
  },
  'quest.achievements.earned': { en: 'Earned', ar: 'كسبته', es: 'Conseguido' },
  'quest.achievements.not_yet': {
    en: 'Not earned yet',
    ar: 'ما كسبته للحين',
    es: 'Aún no conseguido',
  },
  'quest.ach.first_level.name': { en: 'First steps', ar: 'أول خطوة', es: 'Primeros pasos' },
  'quest.ach.first_level.what': {
    en: 'Finish your first level.',
    ar: 'خلّص أول مستوى لك.',
    es: 'Termina tu primer nivel.',
  },
  'quest.ach.three_stars.name': { en: 'Three stars', ar: 'ثلاث نجوم', es: 'Tres estrellas' },
  'quest.ach.three_stars.what': {
    en: 'Earn three stars on a level.',
    ar: 'اكسب ثلاث نجوم في مستوى.',
    es: 'Consigue tres estrellas en un nivel.',
  },
  'quest.ach.perfect.name': { en: 'Clean sheet', ar: 'بدون ولا غلطة', es: 'Sin fallos' },
  'quest.ach.perfect.what': {
    en: 'Get every question in a level right.',
    ar: 'جاوب كل أسئلة المستوى صح.',
    es: 'Acierta todas las preguntas de un nivel.',
  },
  'quest.ach.chapter_inked.name': { en: 'First ink', ar: 'أول لوحة', es: 'Primera tinta' },
  'quest.ach.chapter_inked.what': {
    en: 'Finish a part and ink its panels into your comic.',
    ar: 'خلّص جزء واكسب لوحاته في الكوميك مالك.',
    es: 'Termina una parte y añade sus viñetas a tu cómic.',
  },
  'quest.ach.comic_complete.name': {
    en: 'Collector',
    ar: 'جامع اللوحات',
    es: 'Colección completa',
  },
  'quest.ach.comic_complete.what': {
    en: 'Ink every panel in a text’s comic.',
    ar: 'اكسب كل لوحات الكوميك في نص واحد.',
    es: 'Entinta todas las viñetas del cómic de un texto.',
  },
  'quest.ach.full_cast.name': { en: 'Full cast', ar: 'كل الشخصيات', es: 'Reparto completo' },
  'quest.ach.full_cast.what': {
    en: 'Earn three stars on a Cast level.',
    ar: 'اكسب ثلاث نجوم في مستوى الشخصيات.',
    es: 'Consigue tres estrellas en un nivel de Personajes.',
  },
  'quest.ach.whole_story.name': { en: 'The whole way', ar: 'للآخر', es: 'Hasta el final' },
  'quest.ach.whole_story.what': {
    en: 'Finish a text’s final level.',
    ar: 'خلّص المستوى الأخير في نص.',
    es: 'Termina el nivel final de un texto.',
  },
  'quest.ach.quote_smith.name': { en: 'Quote smith', ar: 'صانع الاقتباسات', es: 'Taller de citas' },
  'quest.ach.quote_smith.what': {
    en: 'Rebuild {n} quotations word by word.',
    ar: 'رتّب {n} اقتباسات كلمة كلمة.',
    es: 'Reconstruye {n} citas palabra por palabra.',
  },
  'quest.ach.three_texts.name': { en: 'Well read', ar: 'قراءة واسعة', es: 'Buenas lecturas' },
  'quest.ach.three_texts.what': {
    en: 'Finish a level in three different texts.',
    ar: 'خلّص مستوى في ثلاث نصوص مختلفة.',
    es: 'Termina un nivel en tres textos distintos.',
  },
  'quest.ach.review.name': { en: 'Second look', ar: 'نظرة ثانية', es: 'Segunda mirada' },
  'quest.ach.review.what': { en: 'Finish a review.', ar: 'خلّص مراجعة.', es: 'Termina un repaso.' },

  // ── Skills games: progress (24 October 2026, src/lib/games/progression.ts) ─
  // XP, the rank and the achievements cabinet's store are the quests' own, so
  // a student has one rank across the site; a game's level and the run of
  // days are the skills games'. The run of days shows only where a student's
  // own setting allows it, and nothing here asks anyone to come back.
  'games.progress.title': { en: 'Your progress', ar: 'تقدّمك', es: 'Tu progreso' },
  'games.progress.level': {
    en: 'Level {n} of {top} in this game',
    ar: 'المستوى {n} من {top} في هاللعبة',
    es: 'Nivel {n} de {top} en este juego',
  },
  'games.progress.level_up': {
    en: 'Level {n} unlocked: harder questions from your next round',
    ar: 'فتحت المستوى {n}: أسئلة أصعب من الجولة الجاية',
    es: 'Nivel {n} desbloqueado: preguntas más difíciles desde tu próxima ronda',
  },
  'games.progress.passes': {
    en: '{n} of {total} strong rounds towards Level {next}',
    ar: '{n} من {total} جولات قوية للمستوى {next}',
    es: '{n} de {total} rondas fuertes para llegar al nivel {next}',
  },
  'games.progress.top': {
    en: 'You are on the top level in this game.',
    ar: 'إنت في أعلى مستوى في هاللعبة.',
    es: 'Estás en el nivel más alto de este juego.',
  },
  'games.progress.strong': {
    en: 'A strong round: at least four questions at your level, and 8 in 10 of them right.',
    ar: 'الجولة القوية: أربعة أسئلة على الأقل من مستواك، و8 من كل 10 منها صح.',
    es: 'Una ronda fuerte: al menos cuatro preguntas de tu nivel, y 8 de cada 10 bien.',
  },
  'games.progress.best_run': {
    en: 'Longest run this round: {n} right in a row',
    ar: 'أطول سلسلة في هالجولة: {n} صح ورا بعض',
    es: 'Racha más larga de esta ronda: {n} aciertos seguidos',
  },
  'games.progress.perfect': {
    en: 'Every answer right: +{n} XP',
    ar: 'كل الإجابات صح: +{n} نقطة',
    es: 'Todas bien: +{n} XP',
  },
  'games.progress.streak': {
    en: 'Days practised in a row: {n}',
    ar: 'أيام التدريب ورا بعض: {n}',
    es: 'Días seguidos de práctica: {n}',
  },
  'games.progress.kept': {
    en: 'Your XP, rank and levels are kept in this browser.',
    ar: 'نقاطك ورتبتك ومستوياتك محفوظة في هالمتصفح.',
    es: 'Tus XP, tu rango y tus niveles se guardan en este navegador.',
  },
  'games.ach.first_round.name': { en: 'Warmed up', ar: 'أول جولة', es: 'Primera ronda' },
  'games.ach.first_round.what': {
    en: 'Finish your first round of a skills game.',
    ar: 'خلّص أول جولة لك في لعبة من ألعاب المهارات.',
    es: 'Termina tu primera ronda de un juego de destrezas.',
  },
  'games.ach.perfect.name': { en: 'Full marks', ar: 'العلامة الكاملة', es: 'Pleno' },
  'games.ach.perfect.what': {
    en: 'Get every answer right in a round of ten or more.',
    ar: 'جاوب كل الأسئلة صح في جولة فيها عشرة أسئلة أو أكثر.',
    es: 'Acierta todas las respuestas de una ronda de diez o más.',
  },
  'games.ach.run_10.name': { en: 'Ten in a row', ar: 'عشرة ورا بعض', es: 'Diez seguidas' },
  'games.ach.run_10.what': {
    en: 'Get ten answers right in a row.',
    ar: 'جاوب عشرة أسئلة صح ورا بعض.',
    es: 'Acierta diez respuestas seguidas.',
  },
  'games.ach.level_2.name': { en: 'Stepping up', ar: 'المستوى الثاني', es: 'Subiendo de nivel' },
  'games.ach.level_2.what': {
    en: 'Reach Level 2 in a game.',
    ar: 'وصّل المستوى الثاني في لعبة.',
    es: 'Llega al nivel 2 en un juego.',
  },
  'games.ach.level_3.name': { en: 'Top level', ar: 'أعلى مستوى', es: 'Nivel máximo' },
  'games.ach.level_3.what': {
    en: 'Reach Level 3, the top level, in a game.',
    ar: 'وصّل المستوى الثالث، أعلى مستوى، في لعبة.',
    es: 'Llega al nivel 3, el más alto, en un juego.',
  },
  'games.ach.five_games.name': { en: 'All-rounder', ar: 'متعدد المهارات', es: 'Todoterreno' },
  'games.ach.five_games.what': {
    en: 'Finish a round in five different games.',
    ar: 'خلّص جولة في خمس ألعاب مختلفة.',
    es: 'Termina una ronda en cinco juegos distintos.',
  },
  'games.ach.hundred.name': { en: 'A hundred right', ar: 'مية إجابة صح', es: 'Cien aciertos' },
  'games.ach.hundred.what': {
    en: 'Get 100 answers right across the skills games.',
    ar: 'جاوب 100 سؤال صح في ألعاب المهارات.',
    es: 'Consigue 100 aciertos en los juegos de destrezas.',
  },
  'games.ach.comeback.name': { en: 'Learnt it', ar: 'تعلّمتها', es: 'Aprendido' },
  'games.ach.comeback.what': {
    en: 'Get right a question you missed in an earlier round.',
    ar: 'جاوب صح على سؤال غلطت فيه في جولة قبل.',
    es: 'Acierta una pregunta que fallaste en una ronda anterior.',
  },
}
