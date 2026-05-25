/**
 * HOMEPAGE_DICTIONARY - bilingual supplement for the homepage (`src/app/page.tsx`).
 *
 * The homepage was authored 100% in English as inline literals with no i18n
 * path, so Arabic-mode visitors saw English on the page they land on. This
 * supplement externalises every user-visible homepage string under the
 * stable `homepage.*` namespace and is wired into the master `lookup()`
 * resolver chain in `dictionary.ts` at the same precedence as the other
 * curated hand-written supplements (DEMO_PAGES / POETRY_HUB / TOOLKIT).
 *
 * The `ar` values are genuine Khaleeji (Gulf) Arabic in a natural marketing
 * register - NOT MSA, NOT machine/literal. Voice and lexical choices mirror
 * the existing EAL Khaleeji content in `src/lib/eal/curriculum.ts`
 * (e.g. وايد, هذي, ما تقدر, conversational direct address).
 *
 * Proper nouns (exam board names: AQA, Pearson Edexcel, OCR, WJEC Eduqas,
 * Cambridge IGCSE …) are intentionally NOT in this dictionary - they render
 * identically in both locales straight from the Board[] data.
 */

export const HOMEPAGE_DICTIONARY: Record<string, { en: string; ar: string }> = {
  /* ── GCSE board picker (the H1 section) ── */
  'homepage.gcse.kicker': {
    en: 'Pick your exam board to start',
    ar: 'اختر بورد الامتحان حقّك عشان تبدأ',
  },
  'homepage.gcse.heading': {
    en: 'GCSE and IGCSE English revision, AI marked against the AO mark scheme.',
    ar: 'مراجعة إنجليزي GCSE و IGCSE، تصحيح بالذكاء الاصطناعي على نفس معايير الـ AO.',
  },
  'homepage.gcse.subheading': {
    en: 'Year 10-11, ages 14-16. Tap your board and you’ll land on the exact specification you sit.',
    ar: 'سنة 10-11، أعمار 14-16. اضغط على البورد حقّك وبتوصل عالمنهج اللي تمتحن فيه بالضبط.',
  },

  /* ── KS3 board picker section (Years 7-9, pre-GCSE) ── */
  'homepage.ks3.kicker': {
    en: 'Younger learners (Years 7-9)',
    ar: 'الطلاب الأصغر (السنوات 7-9)',
  },
  'homepage.ks3.heading': {
    en: 'KS3 English - the curriculum before GCSE',
    ar: 'إنجليزي KS3 - المنهج اللي قبل الـ GCSE',
  },
  'homepage.ks3.subheading': {
    en: 'Ages 11-14. Reading comprehension, creative writing, grammar foundations and year-by-year schemes of work that prime students for GCSE English.',
    ar: 'أعمار 11-14. فهم المقروء، الكتابة الإبداعية، أساسيات القواعد، وخطط دراسية سنة بسنة تجهّز الطالب لإنجليزي الـ GCSE.',
  },
  'homepage.board.ks3.blurb': {
    en: 'Years 7, 8 and 9 schemes of work - weekly lessons, set texts and assessments.',
    ar: 'خطط دراسية للسنوات 7 و 8 و 9 - دروس أسبوعية ونصوص مقرّرة وتقييمات.',
  },

  /* ── IGCSE board picker section ── */
  'homepage.igcse.heading': {
    en: 'IGCSE boards (international)',
    ar: 'بوردات IGCSE (الدولية)',
  },
  'homepage.igcse.subheading': {
    en: 'International routes for the same age group. Pick the spec your school enters.',
    ar: 'مسارات دولية لنفس الفئة العمرية. اختر المنهج اللي مدرستك تسجّل فيه.',
  },

  /* ── GeoFaq heading (the FAQ items themselves live in an out-of-scope
       component and stay English-only - see report) ── */
  'homepage.faq.heading': {
    en: 'GCSE & IGCSE English: common questions',
    ar: 'إنجليزي GCSE و IGCSE: أسئلة شائعة',
  },

  /* ── Foundation / bilingual rail ── */
  'homepage.rail.kicker': {
    en: 'Two tracks alongside the exam boards',
    ar: 'مساران يمشون جنب بوردات الامتحان',
  },
  'homepage.rail.heading': {
    en: 'Build foundations early, or learn English alongside Arabic.',
    ar: 'ابنِ الأساس من بدري، أو تعلّم الإنجليزي جنب العربي.',
  },
  'homepage.rail.intro': {
    en: 'KS3 covers Years 7-9, the curriculum before GCSE. EAL is the bilingual track for Arabic-speaking students preparing for UK exams. Both run independently of (and alongside) any GCSE / IGCSE board you pick below.',
    ar: 'الـ KS3 يغطّي السنوات 7-9، وهو المنهج اللي قبل الـ GCSE. والـ EAL هو المسار ثنائي اللغة للطلاب الناطقين بالعربي اللي يجهّزون لامتحانات بريطانيا. الاثنين يشتغلون بشكل مستقل عن أي بورد GCSE أو IGCSE تختاره تحت - ويمشون جنبه.',
  },

  /* KS3 card */
  'homepage.rail.ks3.badge': {
    en: 'Foundation',
    ar: 'تأسيس',
  },
  'homepage.rail.ks3.title': {
    en: 'KS3 English - Years 7-9',
    ar: 'إنجليزي KS3 - السنوات 7-9',
  },
  'homepage.rail.ks3.subtitle': {
    en: 'Ages 11-14 · The curriculum before GCSE',
    ar: 'أعمار 11-14 · المنهج اللي قبل الـ GCSE',
  },
  'homepage.rail.ks3.body': {
    en: 'Reading comprehension, creative writing, grammar foundations, and the year-by-year curriculum that primes students for GCSE English. Full Year 7, Year 8 and Year 9 schemes of work with weekly lessons, set texts, and assessments.',
    ar: 'فهم المقروء، الكتابة الإبداعية، أساسيات القواعد، والمنهج سنة بسنة اللي يجهّز الطالب لإنجليزي الـ GCSE. خطط دراسية كاملة للسنة 7 والسنة 8 والسنة 9، مع دروس أسبوعية ونصوص مقرّرة وتقييمات.',
  },
  'homepage.rail.ks3.cta': {
    en: 'Open KS3 hub',
    ar: 'افتح قسم KS3',
  },

  /* EAL card */
  'homepage.rail.eal.badge': {
    en: 'Bilingual',
    ar: 'ثنائي اللغة',
  },
  'homepage.rail.eal.title': {
    en: 'English for Arabic Speakers',
    ar: 'الإنجليزي للناطقين بالعربية',
  },
  // Original is already part-Arabic ("للناطقين بالعربية · Khaleeji explanations").
  // EN keeps that bilingual flavour; AR is fully Khaleeji.
  'homepage.rail.eal.subtitle': {
    en: 'للناطقين بالعربية · Khaleeji explanations',
    ar: 'للناطقين بالعربية · شرح باللهجة الخليجية',
  },
  'homepage.rail.eal.body': {
    en: 'Focused lessons on the points Arabic L1 students most often stumble on: sentence structure (SVO vs VSO), articles, tenses, prepositions, common transfer errors. Every topic has examples, error remediation, and Khaleeji-Arabic explanations.',
    ar: 'دروس مركّزة على النقاط اللي يعثر فيها وايد متحدّث العربي: تركيب الجملة (SVO مقابل VSO)، أدوات التعريف والتنكير، الأزمنة، حروف الجر، وأخطاء النقل الشائعة. كل موضوع فيه أمثلة وتصحيح للأخطاء وشرح باللهجة الخليجية.',
  },
  'homepage.rail.eal.cta': {
    en: 'Open EAL section',
    ar: 'افتح قسم EAL',
  },

  /* ── Board picker shared labels ── */
  // Level acronyms (GCSE / KS3 / IGCSE) are universal and render identically;
  // not externalised. Below: the descriptive blurbs + CTA + help line.
  'homepage.board.cta.ks3': {
    en: 'Open KS3',
    ar: 'افتح KS3',
  },
  'homepage.board.cta.board': {
    en: 'Open board',
    ar: 'افتح البورد',
  },
  'homepage.board.help.text': {
    en: 'Not sure which spec your school sits?',
    ar: 'مو متأكد أي منهج مدرستك تمتحن فيه؟',
  },
  'homepage.board.help.link': {
    en: 'Choose by level instead.',
    ar: 'اختر حسب المستوى بدال كذا.',
  },

  /* ── EAL companion line shown on every board card so EAL learners
       see they are supported regardless of which board they pick. ── */
  'homepage.board.eal_supported': {
    en: 'EAL support included',
    ar: 'يشمل دعم EAL',
  },
  'homepage.board.eal_supported.aria': {
    en: 'EAL learner support is available for this board',
    ar: 'دعم متعلّمي EAL متوفّر مع هذا البورد',
  },

  /* GCSE board blurbs */
  'homepage.board.aqa.blurb': {
    en: 'Power & Conflict, Love & Relationships, Worlds & Lives.',
    ar: 'القوة والصراع، الحب والعلاقات، العوالم والحيوات.',
  },
  'homepage.board.edexcel.blurb': {
    en: 'Time & Place, Conflict, Relationships anthology.',
    ar: 'مختارات الزمان والمكان، الصراع، العلاقات.',
  },
  'homepage.board.ocr.blurb': {
    en: 'Love, Conflict, Power & Natural World, Youth & Age.',
    ar: 'الحب، الصراع، القوة والعالم الطبيعي، الشباب والكِبَر.',
  },
  'homepage.board.eduqas.blurb': {
    en: 'Eduqas anthology with annotated walkthroughs.',
    ar: 'مختارات Eduqas مع شروحات مفصّلة خطوة بخطوة.',
  },

  /* IGCSE board blurbs */
  'homepage.board.cambridge.blurb': {
    en: '0500 and 0990 - Reading, Composition, model answers.',
    ar: '0500 و 0990 - القراءة، الإنشاء، نماذج إجابات.',
  },
  'homepage.board.edexcel_igcse_lit.blurb': {
    en: 'Drama, Prose, Shakespeare, Unseen Poetry.',
    ar: 'الدراما، النثر، شكسبير، الشعر غير المُعَدّ مسبقاً.',
  },
  'homepage.board.edexcel_igcse_lang.blurb': {
    en: 'Anthology, non-fiction, transactional writing.',
    ar: 'المختارات، الكتابة الواقعية، الكتابة الوظيفية.',
  },
}
