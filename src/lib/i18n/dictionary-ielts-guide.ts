// ─── IELTS exam-guide dictionary shard ───────────────────────────────────────
// UI chrome that was previously inline-English on the standalone exam-guide
// reference surface:
//   • src/app/ielts/guide/page.tsx → ielts.guide.* (SEO exam reference)
//
// SCOPE: interface copy only - the back link, hero eyebrow/heading/intro, the
// per-section eyebrows/headings/intros, connective narrative sentences, table
// column headers, callout framing, stat-card labels, FAQ questions + the
// connective phrasing around each FAQ answer, CTA copy and the disclaimer.
//
// HARD BOUNDARY - no exam FACTS live here. Every factual figure on the page is
// the single source of truth in `@/lib/ielts/exam-facts` (IELTS_OVERVIEW,
// SECTION_FACTS.format / .questionsOrTasks, BAND_SCALE descriptions,
// SCORING_RULE, COMMON_MISTAKES, COUNTRY_REQUIREMENTS, PROCESS_STEPS detail,
// ONE_SKILL_RETAKE_NOTE). Those render straight from exam-facts and stay in
// English - they are NOT mirrored as keys here. Where a sentence interleaves a
// fact (e.g. an FAQ answer or an overview paragraph), only the connective
// fragments around the interpolated value are keyed; the value itself is the
// untranslated exam-facts string spliced in at render time.
//
// Khaleeji (Gulf) Arabic per the master dictionary header conventions
// (شنو/وايد/الحين/ببلاش/شوف/دوّر …; Levantine forms شو/كيفك/ليش banned). Brand +
// technical terms stay Latin: The English Hub, IELTS, Band, Academic, General
// Training, Task 1/2, Listening / Reading / Writing / Speaking, AI, UCAS, TRF,
// EOR. Band numbers, percentages, timings and counts stay digits.
//
// Wired into src/lib/i18n/dictionary.ts centrally (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_GUIDE_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Back link ────────────────────────────────────────────────────────────
  'ielts.guide.back': { en: 'Back to IELTS', ar: 'رجوع لـ IELTS', es: 'Volver a IELTS' },

  // ─── Hero ─────────────────────────────────────────────────────────────────
  'ielts.guide.hero.eyebrow': {
    en: 'IELTS reference',
    ar: 'مرجع IELTS',
    es: 'Referencia de IELTS',
  },
  'ielts.guide.hero.title': {
    en: 'The complete IELTS exam guide',
    ar: 'دليل امتحان IELTS الكامل',
    es: 'La guía completa del examen IELTS',
  },
  'ielts.guide.hero.intro': {
    en: 'Everything you need to understand the test before you book it: the four sections and their timings, how the 0-9 band scale is scored, where candidates lose marks, and the step-by-step process from registration to results.',
    ar: 'كل اللي تحتاجه عشان تفهم الامتحان قبل ما تحجزه: الأقسام الأربعة ومواعيدها، كيف يتحسب مقياس Band من 0-9، وين يخسر المتقدّمين درجات، والعملية خطوة خطوة من التسجيل لين النتائج.',
    es: 'Todo lo que necesitas para entender el examen antes de reservarlo: las cuatro secciones y sus tiempos, cómo se puntúa la escala de Band de 0 a 9, dónde pierden puntos los candidatos y el proceso paso a paso desde la inscripción hasta los resultados.',
  },
  'ielts.guide.hero.cta_diagnostic': {
    en: 'Take the free diagnostic',
    ar: 'سوِّ الاختبار التشخيصي ببلاش',
    es: 'Haz el diagnóstico gratuito',
  },
  'ielts.guide.hero.cta_hub': {
    en: 'Explore the IELTS hub',
    ar: 'استكشف مركز IELTS',
    es: 'Explora el centro de IELTS',
  },
  'ielts.guide.hero.disclaimer': {
    en: 'An independent, factual reference. The English Hub is not affiliated with the official IELTS test owners. Band requirements are set per institution and may change - always confirm the current requirement with your university, employer or immigration authority.',
    ar: 'مرجع مستقل ومبني على الحقائق. The English Hub مو تابع لمالكي اختبار IELTS الرسميين. متطلبات Band تحددها كل مؤسسة بنفسها وممكن تتغيّر - دايماً تأكّد من المتطلب الحالي مع جامعتك أو جهة عملك أو سلطة الهجرة.',
    es: 'Una referencia independiente y basada en hechos. The English Hub no está afiliado a los propietarios oficiales del examen IELTS. Los requisitos de Band los fija cada institución y pueden cambiar; confirma siempre el requisito actual con tu universidad, empleador o autoridad de inmigración.',
  },

  // ─── 1. Overview ──────────────────────────────────────────────────────────
  'ielts.guide.overview.eyebrow': { en: 'The basics', ar: 'الأساسيات', es: 'Lo básico' },
  'ielts.guide.overview.title': { en: 'What IELTS is', ar: 'شنو هو IELTS', es: 'Qué es IELTS' },
  // Paragraph 1 splits around two interpolated exam-facts values:
  //   {lead} {testsPerYear} {mid} {ownedBy}, {tail} {acceptedBy}.
  'ielts.guide.overview.p1_lead': {
    en: 'The International English Language Testing System (IELTS) is the world’s most widely recognised English-proficiency test, taken',
    ar: 'نظام اختبار اللغة الإنجليزية الدولي (IELTS) هو أكثر اختبار إجادة إنجليزي معترف فيه بالعالم، يتقدّمون له',
    es: 'El International English Language Testing System (IELTS) es el examen de dominio del inglés más reconocido del mundo, realizado',
  },
  'ielts.guide.overview.p1_mid': {
    en: 'times a year. It is jointly owned by',
    ar: 'مرة بالسنة. مملوك بالاشتراك من',
    es: 'veces al año. Es propiedad conjunta de',
  },
  'ielts.guide.overview.p1_tail': {
    en: ', and accepted by',
    ar: '، ومقبول من',
    es: ', y aceptado por',
  },
  // Paragraph 2 splits around the TRF validity figure:
  //   {lead} {trfValidityYears} years.
  'ielts.guide.overview.p2_lead': {
    en: 'It assesses four skills - Listening, Reading, Writing and Speaking - each reported on a 0-9 band scale. There is no pass or fail: you receive a band for every skill and an overall band, and each institution decides the minimum it will accept. Your result is issued as a Test Report Form (TRF), valid for',
    ar: 'يقيس أربع مهارات - Listening وReading وWriting وSpeaking - وكل وحدة تتعطى Band من 0-9. ما في نجاح أو رسوب: تاخذ Band لكل مهارة وBand كلي، وكل مؤسسة تحدد الحد الأدنى اللي بتقبله. نتيجتك تُصدر كـ Test Report Form (TRF)، صالح لمدة',
    es: 'Evalúa cuatro destrezas - Listening, Reading, Writing y Speaking - cada una calificada en una escala de Band de 0 a 9. No hay aprobado ni suspenso: recibes una Band por cada destreza y una Band global, y cada institución decide el mínimo que aceptará. Tu resultado se emite como un Test Report Form (TRF), válido durante',
  },
  'ielts.guide.overview.p2_years': { en: 'years', ar: 'سنوات', es: 'años' },
  // Paragraph 3 splits around the two share percentages:
  //   {lead} ({academicPct}% …) {mid} ({generalPct}%) {tail}.
  'ielts.guide.overview.p3_lead': {
    en: 'There are two versions.',
    ar: 'في نسختين.',
    es: 'Hay dos versiones.',
  },
  'ielts.guide.overview.p3_academic_open': { en: '(around', ar: '(حوالي', es: '(alrededor del' },
  'ielts.guide.overview.p3_academic_close': {
    en: 'of test takers) is for university study and professional registration;',
    ar: 'من المتقدّمين) للدراسة الجامعية والتسجيل المهني؛',
    es: 'de los examinados) es para estudios universitarios y registro profesional;',
  },
  'ielts.guide.overview.p3_general_open': { en: '(around', ar: '(حوالي', es: '(alrededor del' },
  'ielts.guide.overview.p3_general_close': {
    en: ') is for work and migration. Listening and Speaking are identical across both; only Reading and Writing differ.',
    ar: ') للعمل والهجرة. Listening وSpeaking نفسهم في النسختين؛ بس Reading وWriting يختلفون.',
    es: ') es para trabajo y migración. Listening y Speaking son idénticos en ambas; solo difieren Reading y Writing.',
  },
  // Stat-card labels.
  'ielts.guide.overview.stat.tests_per_year': {
    en: 'tests sat per year',
    ar: 'اختبار يتقدّمون له بالسنة',
    es: 'exámenes realizados al año',
  },
  'ielts.guide.overview.stat.trf_validity': {
    en: 'TRF validity',
    ar: 'صلاحية TRF',
    es: 'validez del TRF',
  },
  'ielts.guide.overview.stat.take_academic': {
    en: 'take Academic',
    ar: 'ياخذون Academic',
    es: 'hacen Academic',
  },
  'ielts.guide.overview.stat.take_general': {
    en: 'take General Training',
    ar: 'ياخذون General Training',
    es: 'hacen General Training',
  },
  // "{trfValidityYears} yrs" stat value - only the unit suffix is chrome.
  'ielts.guide.overview.stat.yrs': { en: 'yrs', ar: 'سنة', es: 'años' },

  // ─── 2. The four sections ───────────────────────────────────────────────────
  'ielts.guide.sections.eyebrow': {
    en: 'Test structure',
    ar: 'هيكل الامتحان',
    es: 'Estructura del examen',
  },
  'ielts.guide.sections.title': {
    en: 'The four sections',
    ar: 'الأقسام الأربعة',
    es: 'Las cuatro secciones',
  },
  'ielts.guide.sections.intro': {
    en: 'Each module is timed and marked independently. The published means below are the real-world Academic averages - useful context for setting a realistic target.',
    ar: 'كل وحدة مؤقّتة وتتصحّح بشكل مستقل. المتوسطات المنشورة تحت هي معدلات Academic الحقيقية - سياق مفيد عشان تحط هدف واقعي.',
    es: 'Cada módulo está cronometrado y se califica de forma independiente. Las medias publicadas a continuación son los promedios reales de Academic, un contexto útil para fijar una meta realista.',
  },
  // Per-card chrome: the time unit suffix and the "mean ~" badge prefix.
  'ielts.guide.sections.minutes': { en: 'minutes', ar: 'دقيقة', es: 'minutos' },
  'ielts.guide.sections.mean': { en: 'mean ~', ar: 'متوسط ~', es: 'media ~' },
  // Sitting callout splits around the duration + minutes figures:
  //   {lead} {h}h{mm} ({SITTING_MINUTES} {minutes}) {tail}
  'ielts.guide.sections.sitting_lead': {
    en: 'Listening, Reading and Writing are sat back-to-back in one sitting of',
    ar: 'Listening وReading وWriting يتقدّمون لهم ورا بعض في جلسة وحدة مدتها',
    es: 'Listening, Reading y Writing se realizan seguidos en una sola sesión de',
  },
  'ielts.guide.sections.sitting_tail': {
    en: 'with no breaks. Speaking is held separately - the same day, or up to seven days apart.',
    ar: 'بدون استراحات. Speaking يكون منفصل - نفس اليوم، أو لين سبعة أيام بعدها.',
    es: 'sin descansos. Speaking se realiza por separado, el mismo día o hasta siete días después.',
  },

  // ─── 3. Scoring ─────────────────────────────────────────────────────────────
  'ielts.guide.scoring.eyebrow': {
    en: 'How it’s marked',
    ar: 'كيف يتصحّح',
    es: 'Cómo se califica',
  },
  'ielts.guide.scoring.title': { en: 'The band scale', ar: 'مقياس Band', es: 'La escala de Band' },
  // Intro lead; the SCORING_RULE fact is spliced in after it (stays English).
  'ielts.guide.scoring.intro_lead': {
    en: 'Every skill is scored from 0 to 9 against the same descriptors.',
    ar: 'كل مهارة تتقيّم من 0 لين 9 حسب نفس الأوصاف.',
    es: 'Cada destreza se puntúa de 0 a 9 con los mismos descriptores.',
  },
  // Band-scale table column headers.
  'ielts.guide.scoring.col.band': { en: 'Band', ar: 'Band', es: 'Band' },
  'ielts.guide.scoring.col.level': { en: 'Level', ar: 'المستوى', es: 'Nivel' },
  'ielts.guide.scoring.col.meaning': { en: 'What it means', ar: 'شنو يعني', es: 'Qué significa' },

  // ─── 4. Where people struggle ───────────────────────────────────────────────
  'ielts.guide.struggle.eyebrow': {
    en: 'Common mistakes',
    ar: 'الأخطاء الشائعة',
    es: 'Errores comunes',
  },
  'ielts.guide.struggle.title': {
    en: 'Where candidates lose marks',
    ar: 'وين يخسر المتقدّمين درجات',
    es: 'Dónde pierden puntos los candidatos',
  },
  // Callout splits around the hardest-skill mean band:
  //   {lead} (… mean is only ~{mean}). {tail}
  'ielts.guide.struggle.callout_lead': {
    en: 'is the lowest-scoring module for most candidates worldwide - and lowest of all for Gulf learners (the published Academic mean is only ~',
    ar: 'هي أقل وحدة بالدرجات لأغلب المتقدّمين بالعالم - وأقلها كلها لمتعلّمي الخليج (متوسط Academic المنشور بس ~',
    es: 'es el módulo con la puntuación más baja para la mayoría de los candidatos del mundo, y el más bajo de todos para los estudiantes del Golfo (la media publicada de Academic es solo de ~',
  },
  'ielts.guide.struggle.callout_tail': {
    en: '). If you only have time to fix one thing, fix this.',
    ar: '). إذا عندك وقت تصلّح شي واحد بس، صلّح هذا.',
    es: '). Si solo tienes tiempo para mejorar una cosa, mejora esta.',
  },
  'ielts.guide.struggle.cta_writing': {
    en: 'Practise Writing',
    ar: 'تدرّب على Writing',
    es: 'Practica Writing',
  },
  'ielts.guide.struggle.cta_learn': {
    en: 'Study the skills',
    ar: 'ادرس المهارات',
    es: 'Estudia las destrezas',
  },
  'ielts.guide.struggle.badge_hardest': { en: 'hardest', ar: 'الأصعب', es: 'la más difícil' },

  // ─── 5. Typical requirements ────────────────────────────────────────────────
  'ielts.guide.requirements.eyebrow': {
    en: 'What you’ll need',
    ar: 'شنو بتحتاج',
    es: 'Lo que necesitarás',
  },
  'ielts.guide.requirements.title': {
    en: 'Typical band requirements',
    ar: 'متطلبات Band المعتادة',
    es: 'Requisitos típicos de Band',
  },
  // Intro splits around the "sets its own minimum" emphasis:
  //   {lead} {emphasis} {tail}
  'ielts.guide.requirements.intro_lead': {
    en: 'These are indicative ranges only. Every university, employer and immigration authority',
    ar: 'هذي نطاقات استرشادية بس. كل جامعة وجهة عمل وسلطة هجرة',
    es: 'Estos son solo rangos orientativos. Cada universidad, empleador y autoridad de inmigración',
  },
  'ielts.guide.requirements.intro_emphasis': {
    en: 'sets its own minimum',
    ar: 'تحدد الحد الأدنى مالها بنفسها',
    es: 'fija su propio mínimo',
  },
  'ielts.guide.requirements.intro_tail': {
    en: '- and IELTS itself has no pass/fail. Always check the exact requirement for your specific course or visa.',
    ar: '- وIELTS نفسه ما فيه نجاح أو رسوب. دايماً شيك على المتطلب بالضبط لتخصصك أو تأشيرتك.',
    es: '- y el propio IELTS no tiene aprobado ni suspenso. Comprueba siempre el requisito exacto para tu curso o visado concreto.',
  },
  // Requirements table column headers.
  'ielts.guide.requirements.col.where': { en: 'Where', ar: 'وين', es: 'Dónde' },
  'ielts.guide.requirements.col.purpose': { en: 'Purpose', ar: 'الغرض', es: 'Finalidad' },
  'ielts.guide.requirements.col.min': {
    en: 'Typical minimum',
    ar: 'الحد الأدنى المعتاد',
    es: 'Mínimo típico',
  },

  // ─── 6. The process ─────────────────────────────────────────────────────────
  'ielts.guide.process.eyebrow': { en: 'Step by step', ar: 'خطوة خطوة', es: 'Paso a paso' },
  'ielts.guide.process.title': {
    en: 'The test process',
    ar: 'عملية الامتحان',
    es: 'El proceso del examen',
  },

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  'ielts.guide.faq.eyebrow': { en: 'Quick answers', ar: 'إجابات سريعة', es: 'Respuestas rápidas' },
  'ielts.guide.faq.title': {
    en: 'IELTS FAQs',
    ar: 'أسئلة IELTS الشائعة',
    es: 'Preguntas frecuentes sobre IELTS',
  },

  // Q1 - good band. Answer = {SCORING_RULE fact} + connective context.
  'ielts.guide.faq.q1.question': {
    en: 'What is a good IELTS band score?',
    ar: 'شنو درجة Band الزينة في IELTS؟',
    es: '¿Qué es una buena puntuación de Band en IELTS?',
  },
  'ielts.guide.faq.q1.answer_context': {
    en: 'There is no universal pass mark: institutions set their own minimums. As context, most undergraduate study sits around Band 6.0-6.5 and postgraduate around 6.5-7.5, while professional registration can require 7.0-7.5 in each skill.',
    ar: 'ما في درجة نجاح موحّدة: المؤسسات تحدد الحد الأدنى مالها بنفسها. كسياق، أغلب الدراسة الجامعية حوالي Band 6.0-6.5 والدراسات العليا حوالي 6.5-7.5، بينما التسجيل المهني ممكن يطلب 7.0-7.5 في كل مهارة.',
    es: 'No hay una nota de aprobado universal: las instituciones fijan sus propios mínimos. Como contexto, la mayoría de los estudios de grado se sitúan en torno a Band 6.0-6.5 y los de posgrado alrededor de 6.5-7.5, mientras que el registro profesional puede exigir 7.0-7.5 en cada destreza.',
  },

  // Q2 - test length. Answer interleaves the sitting duration + Speaking minutes.
  //   {a} {h}h{mm} ({SITTING_MINUTES} {minutes_word}) {b} {speakingMins} {c}
  'ielts.guide.faq.q2.question': {
    en: 'How long is the IELTS test?',
    ar: 'كم مدة اختبار IELTS؟',
    es: '¿Cuánto dura el examen IELTS?',
  },
  'ielts.guide.faq.q2.answer_a': {
    en: 'The Listening, Reading and Writing sections are sat back-to-back in a single sitting of',
    ar: 'أقسام Listening وReading وWriting يتقدّمون لهم ورا بعض في جلسة وحدة مدتها',
    es: 'Las secciones de Listening, Reading y Writing se realizan seguidas en una sola sesión de',
  },
  'ielts.guide.faq.q2.minutes_word': { en: 'minutes', ar: 'دقيقة', es: 'minutos' },
  'ielts.guide.faq.q2.answer_b': {
    en: 'with no breaks. Speaking is a',
    ar: 'بدون استراحات. Speaking عبارة عن مقابلة',
    es: 'sin descansos. Speaking es una entrevista de',
  },
  'ielts.guide.faq.q2.answer_c': {
    en: 'minute interview held separately - the same day or up to seven days apart.',
    ar: 'دقيقة تكون منفصلة - نفس اليوم أو لين سبعة أيام بعدها.',
    es: 'minutos que se realiza por separado, el mismo día o hasta siete días después.',
  },

  // Q3 - hardest section. Answer interleaves the hardest-skill label + mean band,
  // then the ONE_SKILL_RETAKE_NOTE fact (stays English).
  //   {label} {a} Band {mean}. {ONE_SKILL_RETAKE_NOTE}
  'ielts.guide.faq.q3.question': {
    en: 'Which IELTS section is the hardest?',
    ar: 'أي قسم في IELTS هو الأصعب؟',
    es: '¿Qué sección de IELTS es la más difícil?',
  },
  'ielts.guide.faq.q3.answer_a': {
    en: 'is the lowest-scoring module for most candidates worldwide, and lowest of all for Gulf learners - the published mean is around Band',
    ar: 'هي أقل وحدة بالدرجات لأغلب المتقدّمين بالعالم، وأقلها كلها لمتعلّمي الخليج - المتوسط المنشور حوالي Band',
    es: 'es el módulo con la puntuación más baja para la mayoría de los candidatos del mundo, y el más bajo de todos para los estudiantes del Golfo; la media publicada ronda la Band',
  },

  // Q4 - validity. Answer interleaves TRF validity years + acceptedBy fact.
  //   {a} {trfValidityYears} {years_word}. {b} {acceptedBy}.
  'ielts.guide.faq.q4.question': {
    en: 'How long is an IELTS result valid?',
    ar: 'كم مدة صلاحية نتيجة IELTS؟',
    es: '¿Cuánto tiempo es válido un resultado de IELTS?',
  },
  'ielts.guide.faq.q4.answer_a': {
    en: 'Your Test Report Form (TRF) is valid for',
    ar: 'الـ Test Report Form (TRF) مالك صالح لمدة',
    es: 'Tu Test Report Form (TRF) es válido durante',
  },
  'ielts.guide.faq.q4.years_word': { en: 'years', ar: 'سنوات', es: 'años' },
  'ielts.guide.faq.q4.answer_b': {
    en: 'IELTS is accepted by',
    ar: 'IELTS مقبول من',
    es: 'IELTS es aceptado por',
  },

  // ─── Closing CTA ──────────────────────────────────────────────────────────
  'ielts.guide.cta.heading': {
    en: 'Know the exam. Now build the band.',
    ar: 'افهم الامتحان. الحين ابنِ الـ Band.',
    es: 'Conoce el examen. Ahora construye tu Band.',
  },
  'ielts.guide.cta.body': {
    en: 'Start with a free diagnostic to find your weakest skill, then follow a personalised path of practice and instant AI feedback across all four sections.',
    ar: 'ابدأ باختبار تشخيصي ببلاش عشان تلاقي أضعف مهارة عندك، وبعدها اتبع مسار مخصص من التدريب والتقييم الفوري بالـ AI في الأقسام الأربعة كلها.',
    es: 'Empieza con un diagnóstico gratuito para encontrar tu destreza más débil y luego sigue una ruta personalizada de práctica y feedback instantáneo con IA en las cuatro secciones.',
  },
  'ielts.guide.cta.cta_diagnostic': {
    en: 'Take the free diagnostic',
    ar: 'سوِّ الاختبار التشخيصي ببلاش',
    es: 'Haz el diagnóstico gratuito',
  },
  'ielts.guide.cta.cta_learn': {
    en: 'Study the skills',
    ar: 'ادرس المهارات',
    es: 'Estudia las destrezas',
  },
}
