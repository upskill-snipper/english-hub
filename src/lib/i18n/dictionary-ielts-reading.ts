// ─── IELTS Reading module dictionary shard ──────────────────────────────────
// UI chrome (headings, intro, instructions, buttons, progress/results/review
// labels, empty/loading states, disclaimers) for src/app/ielts/reading/page.tsx.
//
// SCOPE: this shard translates the *interface* only. The practice CONTENT
// (passages, questions, options, gap answers, explanations) lives in
// ./reading-tests.ts and stays English - IELTS is an English exam - so no keys
// for it exist here.
//
// Khaleeji (Gulf) Arabic per the master dictionary header conventions
// (شنو/وايد/الحين/ببلاش …; Levantine forms banned). Brand + technical terms
// stay Latin: IELTS, Band, Academic, True / False / Not Given. Band numbers
// stay digits. Cross-module strings (ielts.skill.*, ielts.band.*, ielts.cta.*)
// are reused from ./dictionary-ielts.ts rather than duplicated here.
//
// Wired into src/lib/i18n/dictionary.ts centrally (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_READING_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Header ────────────────────────────────────────────────────────────
  'ielts.reading.header.title': {
    en: 'IELTS Academic Reading',
    ar: 'IELTS القراءة الأكاديمية',
    es: 'IELTS Academic Reading',
  },
  'ielts.reading.header.subtitle': {
    en: 'Original practice passages with instant band estimates',
    ar: 'نصوص تدريب أصلية مع تقدير Band فوري',
    es: 'Textos de práctica originales con estimaciones de Band instantáneas',
  },

  // ─── Intro / start screen ────────────────────────────────────────────────
  'ielts.reading.intro.eyebrow': {
    en: 'IELTS preparation · Academic',
    ar: 'تحضير IELTS · Academic',
    es: 'Preparación de IELTS · Academic',
  },
  // Intro body is split into pieces so the dynamic numbers (passages, questions)
  // stay outside the translated string.
  'ielts.reading.intro.body.lead': { en: 'Read', ar: 'اقرأ', es: 'Lee' },
  'ielts.reading.intro.body.passages_word': {
    en: 'short academic passages and answer',
    ar: 'نصوص أكاديمية قصيرة وجاوب على',
    es: 'textos académicos cortos y responde',
  },
  'ielts.reading.intro.body.questions_word': { en: 'questions.', ar: 'سؤال.', es: 'preguntas.' },
  'ielts.reading.intro.body.rest': {
    en: 'You will see multiple-choice, True/False/Not Given, and sentence-completion tasks - the core question types in the Academic Reading paper. When you finish, your answers are marked instantly and converted to an estimated band score with full explanations.',
    ar: 'بتشوف أسئلة اختيار من متعدد، True/False/Not Given، وإكمال جمل - وهي أهم أنواع الأسئلة في ورقة القراءة Academic. أول ما تخلّص، تتصحّح إجاباتك على طول وتتحوّل لتقدير Band مع شرح كامل.',
    es: 'Verás tareas de opción múltiple, True/False/Not Given y de completar frases, los tipos de pregunta principales del examen de Academic Reading. Cuando termines, tus respuestas se corrigen al instante y se convierten en una puntuación de Band estimada con explicaciones completas.',
  },

  // Intro stat tiles
  'ielts.reading.stat.questions': { en: 'Questions', ar: 'الأسئلة', es: 'Preguntas' },
  'ielts.reading.stat.passages': { en: 'Passages', ar: 'النصوص', es: 'Textos' },
  'ielts.reading.stat.suggested_time': {
    en: 'Suggested time',
    ar: 'الوقت المقترح',
    es: 'Tiempo sugerido',
  },
  // Unit suffix for the suggested-time value (number stays a digit).
  'ielts.reading.stat.minutes': { en: 'min', ar: 'دقيقة', es: 'min' },

  // "How marking works" panel
  'ielts.reading.marking.title': {
    en: 'How marking works:',
    ar: 'كيف يصير التصحيح:',
    es: 'Cómo funciona la corrección:',
  },
  'ielts.reading.marking.body': {
    en: 'multiple-choice and True/False/Not Given are checked against the correct option; sentence completion accepts any listed answer, ignoring case and spaces. The band shown is an estimate for practice, not an official IELTS result.',
    ar: 'الاختيار من متعدد وTrue/False/Not Given يتصحّحون حسب الخيار الصحيح؛ وإكمال الجمل يقبل أي إجابة من المدرجة، من دون فرق بين الحروف الكبيرة والصغيرة ولا المسافات. الـ Band المعروض تقديري للتدريب، مو نتيجة IELTS رسمية.',
    es: 'las preguntas de opción múltiple y True/False/Not Given se comparan con la opción correcta; el completado de frases acepta cualquier respuesta de la lista, sin distinguir mayúsculas ni espacios. La Band mostrada es una estimación para practicar, no un resultado oficial de IELTS.',
  },

  // Intro actions
  'ielts.reading.action.start': {
    en: 'Start the test',
    ar: 'ابدأ الاختبار',
    es: 'Empezar el examen',
  },
  'ielts.reading.action.back_to_plan': {
    en: 'Back to study plan',
    ar: 'ارجع لخطة الدراسة',
    es: 'Volver al plan de estudio',
  },

  // ─── Results screen ──────────────────────────────────────────────────────
  'ielts.reading.results.estimated_band': {
    en: 'Estimated Reading band',
    ar: 'Band القراءة التقديري',
    es: 'Band estimada de Reading',
  },
  'ielts.reading.results.correct_answers': {
    en: 'Correct answers',
    ar: 'الإجابات الصحيحة',
    es: 'Respuestas correctas',
  },
  'ielts.reading.results.score': { en: 'Score', ar: 'النتيجة', es: 'Puntuación' },
  'ielts.reading.results.disclaimer': {
    en: 'This is an estimate based on published Academic band approximations and is intended for practice only - it is not an official IELTS score.',
    ar: 'هذا تقدير مبني على تقريبات Band الـ Academic المنشورة، وهو للتدريب بس - مو نتيجة IELTS رسمية.',
    es: 'Esta es una estimación basada en las aproximaciones de Band de Academic publicadas y está destinada solo a la práctica; no es una puntuación oficial de IELTS.',
  },

  // Results actions
  'ielts.reading.action.try_again': {
    en: 'Try again',
    ar: 'حاول مرة ثانية',
    es: 'Inténtalo de nuevo',
  },
  'ielts.reading.action.view_progress': {
    en: 'View progress',
    ar: 'شوف تقدّمك',
    es: 'Ver progreso',
  },
  'ielts.reading.action.study_plan': { en: 'Study plan', ar: 'خطة الدراسة', es: 'Plan de estudio' },

  // ─── Per-question review ───────────────────────────────────────────────
  'ielts.reading.review.heading': {
    en: 'Review your answers',
    ar: 'راجع إجاباتك',
    es: 'Revisa tus respuestas',
  },
  'ielts.reading.review.your_answer': { en: 'Your answer:', ar: 'إجابتك:', es: 'Tu respuesta:' },
  'ielts.reading.review.correct_answer': {
    en: 'Correct answer:',
    ar: 'الإجابة الصحيحة:',
    es: 'Respuesta correcta:',
  },
  'ielts.reading.review.no_answer': { en: 'No answer', ar: 'بدون إجابة', es: 'Sin respuesta' },

  // ─── Test runner ─────────────────────────────────────────────────────────
  // Progress label is split so the counts stay numeric: "{n} of {total} answered".
  'ielts.reading.progress.of': { en: 'of', ar: 'من', es: 'de' },
  'ielts.reading.progress.answered': { en: 'answered', ar: 'تمت الإجابة عنها', es: 'respondidas' },
  'ielts.reading.progress.aria': {
    en: 'Reading progress: {answered} of {total} questions answered',
    ar: 'تقدّم القراءة: تمت الإجابة عن {answered} من {total} سؤال',
    es: 'Progreso de Reading: {answered} de {total} preguntas respondidas',
  },
  'ielts.reading.action.submit': { en: 'Submit', ar: 'سلّم', es: 'Enviar' },
  'ielts.reading.action.submit_and_see_band': {
    en: 'Submit and see my band',
    ar: 'سلّم وشوف Band مالي',
    es: 'Envía y ve mi Band',
  },

  // Passage label: "Passage {n}"
  'ielts.reading.passage.label': { en: 'Passage', ar: 'النص', es: 'Texto' },

  // Bottom submit summary - split around the dynamic counts.
  'ielts.reading.summary.you_answered': {
    en: 'You have answered',
    ar: 'جاوبت على',
    es: 'Has respondido',
  },
  'ielts.reading.summary.tail': {
    en: 'questions. You can submit at any time.',
    ar: 'سؤال. تقدر تسلّم في أي وقت.',
    es: 'preguntas. Puedes enviar en cualquier momento.',
  },

  // ─── Question type labels (UI chrome describing the task format) ──────────
  // "True / False / Not Given" stays a Latin technical term per the rules.
  'ielts.reading.qtype.mcq': {
    en: 'Multiple choice',
    ar: 'اختيار من متعدد',
    es: 'Opción múltiple',
  },
  'ielts.reading.qtype.tfng': {
    en: 'True / False / Not Given',
    ar: 'True / False / Not Given',
    es: 'True / False / Not Given',
  },
  'ielts.reading.qtype.gap': {
    en: 'Sentence completion',
    ar: 'إكمال الجملة',
    es: 'Completar frases',
  },
  'ielts.reading.qtype.matching': { en: 'Matching', ar: 'مطابقة', es: 'Emparejamiento' },

  // Gap-fill input placeholder + matching-row "choose an option" placeholder
  'ielts.reading.gap.placeholder': {
    en: 'Type your answer',
    ar: 'اكتب إجابتك',
    es: 'Escribe tu respuesta',
  },
  'ielts.reading.matching.select': { en: 'Select…', ar: 'اختر…', es: 'Selecciona…' },

  // Test picker (intro screen) + "choose another test" action
  'ielts.reading.picker.title': {
    en: 'Choose a reading test',
    ar: 'اختر اختبار قراءة',
    es: 'Elige un examen de lectura',
  },
  'ielts.reading.picker.subtitle': {
    en: 'Pick any test below to begin. Each one is auto-marked and gives you an estimated band.',
    ar: 'اختر أي اختبار تحت عشان تبدأ. كل واحد يتصحّح تلقائياً ويعطيك Band تقديري.',
    es: 'Elige cualquier examen de abajo para empezar. Cada uno se corrige automáticamente y te da una Band estimada.',
  },
  'ielts.reading.action.choose_test': {
    en: 'Choose another test',
    ar: 'اختر اختباراً ثانياً',
    es: 'Elige otro examen',
  },

  // ─── Empty / fallback state ──────────────────────────────────────────────
  'ielts.reading.empty.title': {
    en: 'Reading practice unavailable',
    ar: 'تدريب القراءة مو متوفر',
    es: 'Práctica de Reading no disponible',
  },
  'ielts.reading.empty.body': {
    en: 'No reading test could be loaded. Please try again later.',
    ar: 'ما قدرنا نحمّل اختبار القراءة. حاول مرة ثانية بعدين.',
    es: 'No se pudo cargar ningún examen de lectura. Inténtalo de nuevo más tarde.',
  },
}
