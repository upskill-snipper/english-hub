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

export const HOMEPAGE_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  /* ── GCSE board picker (the H1 section) ── */
  'homepage.gcse.kicker': {
    en: 'Pick your exam board to start',
    ar: 'اختر بورد الامتحان حقّك عشان تبدأ',
    es: 'Elige tu junta examinadora para empezar',
  },
  'homepage.gcse.heading': {
    en: 'GCSE and IGCSE English revision, AI marked against the AO mark scheme.',
    ar: 'مراجعة إنجليزي GCSE و IGCSE، تصحيح بالذكاء الاصطناعي على نفس معايير الـ AO.',
    es: 'Repaso de inglés GCSE e IGCSE, corregido por IA según el esquema de calificación AO.',
  },
  'homepage.gcse.subheading': {
    en: 'Year 10-11, ages 14-16. Tap your board and you’ll land on the exact specification you sit.',
    ar: 'سنة 10-11، أعمار 14-16. اضغط على البورد حقّك وبتوصل عالمنهج اللي تمتحن فيه بالضبط.',
    es: 'Year 10-11, de 14 a 16 años. Toca tu junta y llegarás al programa exacto del que te vas a examinar.',
  },

  /* ── KS3 board picker section (Years 7-9, pre-GCSE) ── */
  'homepage.ks3.kicker': {
    en: 'Younger learners (Years 7-9)',
    ar: 'الطلاب الأصغر (السنوات 7-9)',
    es: 'Estudiantes más jóvenes (Years 7-9)',
  },
  'homepage.ks3.heading': {
    en: 'KS3 English - the curriculum before GCSE',
    ar: 'إنجليزي KS3 - المنهج اللي قبل الـ GCSE',
    es: 'Inglés KS3: el currículo previo al GCSE',
  },
  'homepage.ks3.subheading': {
    en: 'Ages 11-14. Reading comprehension, creative writing, grammar foundations and year-by-year schemes of work that prime students for GCSE English.',
    ar: 'أعمار 11-14. فهم المقروء، الكتابة الإبداعية، أساسيات القواعد، وخطط دراسية سنة بسنة تجهّز الطالب لإنجليزي الـ GCSE.',
    es: 'De 11 a 14 años. Comprensión lectora, escritura creativa, fundamentos de gramática y programaciones año por año que preparan a los estudiantes para el inglés GCSE.',
  },
  'homepage.board.ks3.blurb': {
    en: 'Years 7, 8 and 9 schemes of work - weekly lessons, set texts and assessments.',
    ar: 'خطط دراسية للسنوات 7 و 8 و 9 - دروس أسبوعية ونصوص مقرّرة وتقييمات.',
    es: 'Programaciones de Years 7, 8 y 9: lecciones semanales, textos prescritos y evaluaciones.',
  },

  /* ── IGCSE board picker section ── */
  'homepage.igcse.heading': {
    en: 'IGCSE boards (international)',
    ar: 'بوردات IGCSE (الدولية)',
    es: 'Juntas IGCSE (internacionales)',
  },
  'homepage.igcse.subheading': {
    en: 'International routes for the same age group. Pick the spec your school enters.',
    ar: 'مسارات دولية لنفس الفئة العمرية. اختر المنهج اللي مدرستك تسجّل فيه.',
    es: 'Rutas internacionales para el mismo grupo de edad. Elige el programa en el que te inscribe tu escuela.',
  },

  /* ── GeoFaq heading (the FAQ items themselves live in an out-of-scope
       component and stay English-only - see report) ── */
  'homepage.faq.heading': {
    en: 'GCSE & IGCSE English: common questions',
    ar: 'إنجليزي GCSE و IGCSE: أسئلة شائعة',
    es: 'Inglés GCSE e IGCSE: preguntas frecuentes',
  },

  /* ── Foundation / bilingual rail ── */
  'homepage.rail.kicker': {
    en: 'Two tracks alongside the exam boards',
    ar: 'مساران يمشون جنب بوردات الامتحان',
    es: 'Dos itinerarios junto a las juntas examinadoras',
  },
  'homepage.rail.heading': {
    en: 'Prepare for IELTS, or learn English alongside Arabic.',
    ar: 'جهّز لـ IELTS، أو تعلّم الإنجليزي جنب العربي.',
    es: 'Prepárate para el IELTS o aprende inglés junto al árabe.',
  },
  'homepage.rail.intro': {
    en: 'IELTS gives you Academic and General Training practice across all four skills with instant band-score feedback. EAL is the bilingual track for Arabic-speaking students preparing for UK exams. Both run independently of (and alongside) any GCSE / IGCSE board you pick below.',
    ar: 'IELTS يعطيك تدريب Academic و General Training لكل المهارات الأربع مع تقدير Band فوري. والـ EAL هو المسار ثنائي اللغة للطلاب الناطقين بالعربي اللي يجهّزون لامتحانات بريطانيا. الاثنين يشتغلون بشكل مستقل عن أي بورد GCSE أو IGCSE تختاره تحت - ويمشون جنبه.',
    es: 'IELTS te ofrece práctica de Academic y General Training en las cuatro destrezas con valoración de Band instantánea. EAL es el itinerario bilingüe para estudiantes de habla árabe que se preparan para los exámenes del Reino Unido. Ambos funcionan de forma independiente de (y junto a) cualquier junta GCSE / IGCSE que elijas abajo.',
  },

  /* IELTS card */
  'homepage.rail.ielts.badge': {
    en: 'Exam prep',
    ar: 'تحضير امتحان',
    es: 'Preparación de examen',
  },
  'homepage.rail.ielts.title': {
    en: 'IELTS preparation',
    ar: 'تحضير IELTS',
    es: 'Preparación para IELTS',
  },
  'homepage.rail.ielts.subtitle': {
    en: 'Academic & General Training · all four skills',
    ar: 'Academic و General Training · كل المهارات الأربع',
    es: 'Academic y General Training · las cuatro destrezas',
  },
  'homepage.rail.ielts.body': {
    en: 'Reading, Listening, Writing and Speaking practice with full mock tests, model answers and instant AI band-score feedback. Aligned to the real IELTS Academic and General Training papers.',
    ar: 'تدريب على القراءة والاستماع والكتابة والمحادثة مع اختبارات تجريبية كاملة وإجابات نموذجية وتقدير Band فوري بالذكاء الاصطناعي. متوافق مع ورق IELTS Academic و General Training الحقيقي.',
    es: 'Práctica de Reading, Listening, Writing y Speaking con exámenes de prueba completos, respuestas modelo y valoración de Band instantánea por IA. Alineado con los exámenes reales de IELTS Academic y General Training.',
  },
  'homepage.rail.ielts.cta': {
    en: 'Open IELTS hub',
    ar: 'افتح قسم IELTS',
    es: 'Abrir el centro de IELTS',
  },

  /* EAL card */
  'homepage.rail.eal.badge': {
    en: 'Bilingual',
    ar: 'ثنائي اللغة',
    es: 'Bilingüe',
  },
  'homepage.rail.eal.title': {
    en: 'English for Arabic Speakers',
    ar: 'الإنجليزي للناطقين بالعربية',
    es: 'Inglés para hablantes de árabe',
  },
  // Original is already part-Arabic ("للناطقين بالعربية · Khaleeji explanations").
  // EN keeps that bilingual flavour; AR is fully Khaleeji.
  'homepage.rail.eal.subtitle': {
    en: 'للناطقين بالعربية · Khaleeji explanations',
    ar: 'للناطقين بالعربية · شرح باللهجة الخليجية',
    es: 'للناطقين بالعربية · explicaciones en árabe del Golfo',
  },
  'homepage.rail.eal.body': {
    en: 'Focused lessons on the points Arabic L1 students most often stumble on: sentence structure (SVO vs VSO), articles, tenses, prepositions, common transfer errors. Every topic has examples, error remediation, and Khaleeji-Arabic explanations.',
    ar: 'دروس مركّزة على النقاط اللي يعثر فيها وايد متحدّث العربي: تركيب الجملة (SVO مقابل VSO)، أدوات التعريف والتنكير، الأزمنة، حروف الجر، وأخطاء النقل الشائعة. كل موضوع فيه أمثلة وتصحيح للأخطاء وشرح باللهجة الخليجية.',
    es: 'Lecciones centradas en los puntos en los que más suelen tropezar los estudiantes con árabe como L1: estructura de la oración (SVO frente a VSO), artículos, tiempos verbales, preposiciones y errores de transferencia comunes. Cada tema incluye ejemplos, corrección de errores y explicaciones en árabe del Golfo.',
  },
  'homepage.rail.eal.cta': {
    en: 'Open EAL section',
    ar: 'افتح قسم EAL',
    es: 'Abrir la sección EAL',
  },

  /* ── Board picker shared labels ── */
  // Level acronyms (GCSE / KS3 / IGCSE) are universal and render identically;
  // not externalised. Below: the descriptive blurbs + CTA + help line.
  'homepage.board.cta.ks3': {
    en: 'Open KS3',
    ar: 'افتح KS3',
    es: 'Abrir KS3',
  },
  'homepage.board.cta.board': {
    en: 'Open board',
    ar: 'افتح البورد',
    es: 'Abrir junta',
  },
  'homepage.board.help.text': {
    en: 'Not sure which spec your school sits?',
    ar: 'مو متأكد أي منهج مدرستك تمتحن فيه؟',
    es: '¿No sabes de qué programa se examina tu escuela?',
  },
  'homepage.board.help.link': {
    en: 'Choose by level instead.',
    ar: 'اختر حسب المستوى بدال كذا.',
    es: 'Elige por nivel en su lugar.',
  },

  /* ── EAL companion line shown on every board card so EAL learners
       see they are supported regardless of which board they pick. ── */
  'homepage.board.eal_supported': {
    en: 'EAL support included',
    ar: 'يشمل دعم EAL',
    es: 'Incluye apoyo EAL',
  },
  'homepage.board.eal_supported.aria': {
    en: 'EAL learner support is available for this board',
    ar: 'دعم متعلّمي EAL متوفّر مع هذا البورد',
    es: 'El apoyo para estudiantes EAL está disponible para esta junta',
  },

  /* GCSE board blurbs */
  'homepage.board.aqa.blurb': {
    en: 'Power & Conflict, Love & Relationships, Worlds & Lives.',
    ar: 'القوة والصراع، الحب والعلاقات، العوالم والحيوات.',
    es: 'Power & Conflict, Love & Relationships, Worlds & Lives.',
  },
  'homepage.board.edexcel.blurb': {
    en: 'Time & Place, Conflict, Relationships anthology.',
    ar: 'مختارات الزمان والمكان، الصراع، العلاقات.',
    es: 'Antología Time & Place, Conflict, Relationships.',
  },
  'homepage.board.ocr.blurb': {
    en: 'Love, Conflict, Power & Natural World, Youth & Age.',
    ar: 'الحب، الصراع، القوة والعالم الطبيعي، الشباب والكِبَر.',
    es: 'Love, Conflict, Power & Natural World, Youth & Age.',
  },
  'homepage.board.eduqas.blurb': {
    en: 'Eduqas anthology with annotated walkthroughs.',
    ar: 'مختارات Eduqas مع شروحات مفصّلة خطوة بخطوة.',
    es: 'Antología de Eduqas con guías anotadas paso a paso.',
  },

  /* IGCSE board blurbs */
  'homepage.board.cambridge.blurb': {
    en: '0500 and 0990 - Reading, Composition, model answers.',
    ar: '0500 و 0990 - القراءة، الإنشاء، نماذج إجابات.',
    es: '0500 y 0990 - Reading, Composition, respuestas modelo.',
  },
  'homepage.board.edexcel_igcse_lit.blurb': {
    en: 'Drama, Prose, Shakespeare, Unseen Poetry.',
    ar: 'الدراما، النثر، شكسبير، الشعر غير المُعَدّ مسبقاً.',
    es: 'Drama, Prose, Shakespeare, Unseen Poetry.',
  },
  'homepage.board.edexcel_igcse_lang.blurb': {
    en: 'Anthology, non-fiction, transactional writing.',
    ar: 'المختارات، النصوص غير الأدبية، الكتابة الوظيفية.',
    es: 'Antología, no ficción, escritura transaccional.',
  },
}
