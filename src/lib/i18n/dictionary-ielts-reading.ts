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
  'ielts.reading.header.title': { en: 'IELTS Academic Reading', ar: 'IELTS القراءة الأكاديمية' },
  'ielts.reading.header.subtitle': {
    en: 'Original practice passages with instant band estimates',
    ar: 'نصوص تدريب أصلية مع تقدير Band فوري',
  },

  // ─── Intro / start screen ────────────────────────────────────────────────
  'ielts.reading.intro.eyebrow': {
    en: 'IELTS preparation · Academic',
    ar: 'تحضير IELTS · Academic',
  },
  // Intro body is split into pieces so the dynamic numbers (passages, questions)
  // stay outside the translated string.
  'ielts.reading.intro.body.lead': { en: 'Read', ar: 'اقرأ' },
  'ielts.reading.intro.body.passages_word': {
    en: 'short academic passages and answer',
    ar: 'نصوص أكاديمية قصيرة وجاوب على',
  },
  'ielts.reading.intro.body.questions_word': { en: 'questions.', ar: 'سؤال.' },
  'ielts.reading.intro.body.rest': {
    en: 'You will see multiple-choice, True/False/Not Given, and sentence-completion tasks - the core question types in the Academic Reading paper. When you finish, your answers are marked instantly and converted to an estimated band score with full explanations.',
    ar: 'بتشوف أسئلة اختيار من متعدد، True/False/Not Given، وإكمال جمل - وهي أهم أنواع الأسئلة في ورقة القراءة Academic. أول ما تخلّص، تتصحّح إجاباتك على طول وتتحوّل لتقدير Band مع شرح كامل.',
  },

  // Intro stat tiles
  'ielts.reading.stat.questions': { en: 'Questions', ar: 'الأسئلة' },
  'ielts.reading.stat.passages': { en: 'Passages', ar: 'النصوص' },
  'ielts.reading.stat.suggested_time': { en: 'Suggested time', ar: 'الوقت المقترح' },
  // Unit suffix for the suggested-time value (number stays a digit).
  'ielts.reading.stat.minutes': { en: 'min', ar: 'دقيقة' },

  // "How marking works" panel
  'ielts.reading.marking.title': { en: 'How marking works:', ar: 'كيف يصير التصحيح:' },
  'ielts.reading.marking.body': {
    en: 'multiple-choice and True/False/Not Given are checked against the correct option; sentence completion accepts any listed answer, ignoring case and spaces. The band shown is an estimate for practice, not an official IELTS result.',
    ar: 'الاختيار من متعدد وTrue/False/Not Given يتصحّحون حسب الخيار الصحيح؛ وإكمال الجمل يقبل أي إجابة من المدرجة، من دون فرق بين الحروف الكبيرة والصغيرة ولا المسافات. الـ Band المعروض تقديري للتدريب، مو نتيجة IELTS رسمية.',
  },

  // Intro actions
  'ielts.reading.action.start': { en: 'Start the test', ar: 'ابدأ الاختبار' },
  'ielts.reading.action.back_to_plan': { en: 'Back to study plan', ar: 'ارجع لخطة الدراسة' },

  // ─── Results screen ──────────────────────────────────────────────────────
  'ielts.reading.results.estimated_band': {
    en: 'Estimated Reading band',
    ar: 'Band القراءة التقديري',
  },
  'ielts.reading.results.correct_answers': { en: 'Correct answers', ar: 'الإجابات الصحيحة' },
  'ielts.reading.results.score': { en: 'Score', ar: 'النتيجة' },
  'ielts.reading.results.disclaimer': {
    en: 'This is an estimate based on published Academic band approximations and is intended for practice only - it is not an official IELTS score.',
    ar: 'هذا تقدير مبني على تقريبات Band الـ Academic المنشورة، وهو للتدريب بس - مو نتيجة IELTS رسمية.',
  },

  // Results actions
  'ielts.reading.action.try_again': { en: 'Try again', ar: 'حاول مرة ثانية' },
  'ielts.reading.action.view_progress': { en: 'View progress', ar: 'شوف تقدّمك' },
  'ielts.reading.action.study_plan': { en: 'Study plan', ar: 'خطة الدراسة' },

  // ─── Per-question review ───────────────────────────────────────────────
  'ielts.reading.review.heading': { en: 'Review your answers', ar: 'راجع إجاباتك' },
  'ielts.reading.review.your_answer': { en: 'Your answer:', ar: 'إجابتك:' },
  'ielts.reading.review.correct_answer': { en: 'Correct answer:', ar: 'الإجابة الصحيحة:' },
  'ielts.reading.review.no_answer': { en: 'No answer', ar: 'بدون إجابة' },

  // ─── Test runner ─────────────────────────────────────────────────────────
  // Progress label is split so the counts stay numeric: "{n} of {total} answered".
  'ielts.reading.progress.of': { en: 'of', ar: 'من' },
  'ielts.reading.progress.answered': { en: 'answered', ar: 'تمت الإجابة عنها' },
  'ielts.reading.progress.aria': {
    en: 'Reading progress: {answered} of {total} questions answered',
    ar: 'تقدّم القراءة: تمت الإجابة عن {answered} من {total} سؤال',
  },
  'ielts.reading.action.submit': { en: 'Submit', ar: 'سلّم' },
  'ielts.reading.action.submit_and_see_band': {
    en: 'Submit and see my band',
    ar: 'سلّم وشوف Band مالي',
  },

  // Passage label: "Passage {n}"
  'ielts.reading.passage.label': { en: 'Passage', ar: 'النص' },

  // Bottom submit summary - split around the dynamic counts.
  'ielts.reading.summary.you_answered': { en: 'You have answered', ar: 'جاوبت على' },
  'ielts.reading.summary.tail': {
    en: 'questions. You can submit at any time.',
    ar: 'سؤال. تقدر تسلّم في أي وقت.',
  },

  // ─── Question type labels (UI chrome describing the task format) ──────────
  // "True / False / Not Given" stays a Latin technical term per the rules.
  'ielts.reading.qtype.mcq': { en: 'Multiple choice', ar: 'اختيار من متعدد' },
  'ielts.reading.qtype.tfng': {
    en: 'True / False / Not Given',
    ar: 'True / False / Not Given',
  },
  'ielts.reading.qtype.gap': { en: 'Sentence completion', ar: 'إكمال الجملة' },
  'ielts.reading.qtype.matching': { en: 'Matching', ar: 'مطابقة' },

  // Gap-fill input placeholder + matching-row "choose an option" placeholder
  'ielts.reading.gap.placeholder': { en: 'Type your answer', ar: 'اكتب إجابتك' },
  'ielts.reading.matching.select': { en: 'Select…', ar: 'اختر…' },

  // Test picker (intro screen) + "choose another test" action
  'ielts.reading.picker.title': { en: 'Choose a reading test', ar: 'اختر اختبار قراءة' },
  'ielts.reading.picker.subtitle': {
    en: 'Pick any test below to begin. Each one is auto-marked and gives you an estimated band.',
    ar: 'اختر أي اختبار تحت عشان تبدأ. كل واحد يتصحّح تلقائياً ويعطيك Band تقديري.',
  },
  'ielts.reading.action.choose_test': { en: 'Choose another test', ar: 'اختر اختباراً ثانياً' },

  // ─── Empty / fallback state ──────────────────────────────────────────────
  'ielts.reading.empty.title': {
    en: 'Reading practice unavailable',
    ar: 'تدريب القراءة مو متوفر',
  },
  'ielts.reading.empty.body': {
    en: 'No reading test could be loaded. Please try again later.',
    ar: 'ما قدرنا نحمّل اختبار القراءة. حاول مرة ثانية بعدين.',
  },
}
