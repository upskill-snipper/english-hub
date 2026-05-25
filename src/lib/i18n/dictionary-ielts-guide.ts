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

export const IELTS_GUIDE_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // ─── Back link ────────────────────────────────────────────────────────────
  'ielts.guide.back': { en: 'Back to IELTS', ar: 'رجوع لـ IELTS' },

  // ─── Hero ─────────────────────────────────────────────────────────────────
  'ielts.guide.hero.eyebrow': { en: 'IELTS reference', ar: 'مرجع IELTS' },
  'ielts.guide.hero.title': {
    en: 'The complete IELTS exam guide',
    ar: 'دليل امتحان IELTS الكامل',
  },
  'ielts.guide.hero.intro': {
    en: 'Everything you need to understand the test before you book it: the four sections and their timings, how the 0-9 band scale is scored, where candidates lose marks, and the step-by-step process from registration to results.',
    ar: 'كل اللي تحتاجه عشان تفهم الامتحان قبل ما تحجزه: الأقسام الأربعة ومواعيدها، كيف يتحسب مقياس Band من 0-9، وين يخسر المتقدّمين درجات، والعملية خطوة خطوة من التسجيل لين النتائج.',
  },
  'ielts.guide.hero.cta_diagnostic': {
    en: 'Take the free diagnostic',
    ar: 'سوِّ الاختبار التشخيصي ببلاش',
  },
  'ielts.guide.hero.cta_hub': { en: 'Explore the IELTS hub', ar: 'استكشف مركز IELTS' },
  'ielts.guide.hero.disclaimer': {
    en: 'An independent, factual reference. The English Hub is not affiliated with the official IELTS test owners. Band requirements are set per institution and may change - always confirm the current requirement with your university, employer or immigration authority.',
    ar: 'مرجع مستقل ومبني على الحقائق. The English Hub مو تابع لمالكي اختبار IELTS الرسميين. متطلبات Band تحددها كل مؤسسة بنفسها وممكن تتغيّر - دايماً تأكّد من المتطلب الحالي مع جامعتك أو جهة عملك أو سلطة الهجرة.',
  },

  // ─── 1. Overview ──────────────────────────────────────────────────────────
  'ielts.guide.overview.eyebrow': { en: 'The basics', ar: 'الأساسيات' },
  'ielts.guide.overview.title': { en: 'What IELTS is', ar: 'شنو هو IELTS' },
  // Paragraph 1 splits around two interpolated exam-facts values:
  //   {lead} {testsPerYear} {mid} {ownedBy}, {tail} {acceptedBy}.
  'ielts.guide.overview.p1_lead': {
    en: 'The International English Language Testing System (IELTS) is the world’s most widely recognised English-proficiency test, taken',
    ar: 'نظام اختبار اللغة الإنجليزية الدولي (IELTS) هو أكثر اختبار إجادة إنجليزي معترف فيه بالعالم، يتقدّمون له',
  },
  'ielts.guide.overview.p1_mid': {
    en: 'times a year. It is jointly owned by',
    ar: 'مرة بالسنة. مملوك بالاشتراك من',
  },
  'ielts.guide.overview.p1_tail': { en: ', and accepted by', ar: '، ومقبول من' },
  // Paragraph 2 splits around the TRF validity figure:
  //   {lead} {trfValidityYears} years.
  'ielts.guide.overview.p2_lead': {
    en: 'It assesses four skills - Listening, Reading, Writing and Speaking - each reported on a 0-9 band scale. There is no pass or fail: you receive a band for every skill and an overall band, and each institution decides the minimum it will accept. Your result is issued as a Test Report Form (TRF), valid for',
    ar: 'يقيس أربع مهارات - Listening وReading وWriting وSpeaking - وكل وحدة تنذكر على مقياس Band من 0-9. ما في نجاح أو رسوب: تاخذ Band لكل مهارة وBand كلي، وكل مؤسسة تحدد الحد الأدنى اللي بتقبله. نتيجتك تُصدر كـ Test Report Form (TRF)، صالح لمدة',
  },
  'ielts.guide.overview.p2_years': { en: 'years', ar: 'سنوات' },
  // Paragraph 3 splits around the two share percentages:
  //   {lead} ({academicPct}% …) {mid} ({generalPct}%) {tail}.
  'ielts.guide.overview.p3_lead': { en: 'There are two versions.', ar: 'في نسختين.' },
  'ielts.guide.overview.p3_academic_open': { en: '(around', ar: '(حوالي' },
  'ielts.guide.overview.p3_academic_close': {
    en: 'of test takers) is for university study and professional registration;',
    ar: 'من المتقدّمين) للدراسة الجامعية والتسجيل المهني؛',
  },
  'ielts.guide.overview.p3_general_open': { en: '(around', ar: '(حوالي' },
  'ielts.guide.overview.p3_general_close': {
    en: ') is for work and migration. Listening and Speaking are identical across both; only Reading and Writing differ.',
    ar: ') للعمل والهجرة. Listening وSpeaking نفسهم في النسختين؛ بس Reading وWriting يختلفون.',
  },
  // Stat-card labels.
  'ielts.guide.overview.stat.tests_per_year': {
    en: 'tests sat per year',
    ar: 'اختبار يتقدّمون له بالسنة',
  },
  'ielts.guide.overview.stat.trf_validity': { en: 'TRF validity', ar: 'صلاحية TRF' },
  'ielts.guide.overview.stat.take_academic': { en: 'take Academic', ar: 'ياخذون Academic' },
  'ielts.guide.overview.stat.take_general': {
    en: 'take General Training',
    ar: 'ياخذون General Training',
  },
  // "{trfValidityYears} yrs" stat value - only the unit suffix is chrome.
  'ielts.guide.overview.stat.yrs': { en: 'yrs', ar: 'سنة' },

  // ─── 2. The four sections ───────────────────────────────────────────────────
  'ielts.guide.sections.eyebrow': { en: 'Test structure', ar: 'هيكل الامتحان' },
  'ielts.guide.sections.title': { en: 'The four sections', ar: 'الأقسام الأربعة' },
  'ielts.guide.sections.intro': {
    en: 'Each module is timed and marked independently. The published means below are the real-world Academic averages - useful context for setting a realistic target.',
    ar: 'كل وحدة مؤقّتة وتتصحّح بشكل مستقل. المتوسطات المنشورة تحت هي معدلات Academic الحقيقية - سياق مفيد عشان تحط هدف واقعي.',
  },
  // Per-card chrome: the time unit suffix and the "mean ~" badge prefix.
  'ielts.guide.sections.minutes': { en: 'minutes', ar: 'دقيقة' },
  'ielts.guide.sections.mean': { en: 'mean ~', ar: 'متوسط ~' },
  // Sitting callout splits around the duration + minutes figures:
  //   {lead} {h}h{mm} ({SITTING_MINUTES} {minutes}) {tail}
  'ielts.guide.sections.sitting_lead': {
    en: 'Listening, Reading and Writing are sat back-to-back in one sitting of',
    ar: 'Listening وReading وWriting يتقدّمون لهم ورا بعض في جلسة وحدة مدتها',
  },
  'ielts.guide.sections.sitting_tail': {
    en: 'with no breaks. Speaking is held separately - the same day, or up to seven days apart.',
    ar: 'بدون استراحات. Speaking يكون منفصل - نفس اليوم، أو لين سبعة أيام بعدها.',
  },

  // ─── 3. Scoring ─────────────────────────────────────────────────────────────
  'ielts.guide.scoring.eyebrow': { en: 'How it’s marked', ar: 'كيف يتصحّح' },
  'ielts.guide.scoring.title': { en: 'The band scale', ar: 'مقياس Band' },
  // Intro lead; the SCORING_RULE fact is spliced in after it (stays English).
  'ielts.guide.scoring.intro_lead': {
    en: 'Every skill is scored from 0 to 9 against the same descriptors.',
    ar: 'كل مهارة تتقيّم من 0 لين 9 حسب نفس الأوصاف.',
  },
  // Band-scale table column headers.
  'ielts.guide.scoring.col.band': { en: 'Band', ar: 'Band' },
  'ielts.guide.scoring.col.level': { en: 'Level', ar: 'المستوى' },
  'ielts.guide.scoring.col.meaning': { en: 'What it means', ar: 'شنو يعني' },

  // ─── 4. Where people struggle ───────────────────────────────────────────────
  'ielts.guide.struggle.eyebrow': { en: 'Common mistakes', ar: 'الأخطاء الشائعة' },
  'ielts.guide.struggle.title': {
    en: 'Where candidates lose marks',
    ar: 'وين يخسر المتقدّمين درجات',
  },
  // Callout splits around the hardest-skill mean band:
  //   {lead} (… mean is only ~{mean}). {tail}
  'ielts.guide.struggle.callout_lead': {
    en: 'is the lowest-scoring module for most candidates worldwide - and lowest of all for Gulf learners (the published Academic mean is only ~',
    ar: 'هي أقل وحدة بالدرجات لأغلب المتقدّمين بالعالم - وأقلها كلها لمتعلّمي الخليج (متوسط Academic المنشور بس ~',
  },
  'ielts.guide.struggle.callout_tail': {
    en: '). If you only have time to fix one thing, fix this.',
    ar: '). إذا عندك وقت تصلّح شي واحد بس، صلّح هذا.',
  },
  'ielts.guide.struggle.cta_writing': { en: 'Practise Writing', ar: 'تدرّب على Writing' },
  'ielts.guide.struggle.cta_learn': { en: 'Study the skills', ar: 'ادرس المهارات' },
  'ielts.guide.struggle.badge_hardest': { en: 'hardest', ar: 'الأصعب' },

  // ─── 5. Typical requirements ────────────────────────────────────────────────
  'ielts.guide.requirements.eyebrow': { en: 'What you’ll need', ar: 'شنو بتحتاج' },
  'ielts.guide.requirements.title': {
    en: 'Typical band requirements',
    ar: 'متطلبات Band المعتادة',
  },
  // Intro splits around the "sets its own minimum" emphasis:
  //   {lead} {emphasis} {tail}
  'ielts.guide.requirements.intro_lead': {
    en: 'These are indicative ranges only. Every university, employer and immigration authority',
    ar: 'هذي نطاقات استرشادية بس. كل جامعة وجهة عمل وسلطة هجرة',
  },
  'ielts.guide.requirements.intro_emphasis': {
    en: 'sets its own minimum',
    ar: 'تحدد الحد الأدنى مالها بنفسها',
  },
  'ielts.guide.requirements.intro_tail': {
    en: '- and IELTS itself has no pass/fail. Always check the exact requirement for your specific course or visa.',
    ar: '- وIELTS نفسه ما فيه نجاح أو رسوب. دايماً شيك على المتطلب بالضبط لتخصصك أو تأشيرتك.',
  },
  // Requirements table column headers.
  'ielts.guide.requirements.col.where': { en: 'Where', ar: 'وين' },
  'ielts.guide.requirements.col.purpose': { en: 'Purpose', ar: 'الغرض' },
  'ielts.guide.requirements.col.min': { en: 'Typical minimum', ar: 'الحد الأدنى المعتاد' },

  // ─── 6. The process ─────────────────────────────────────────────────────────
  'ielts.guide.process.eyebrow': { en: 'Step by step', ar: 'خطوة خطوة' },
  'ielts.guide.process.title': { en: 'The test process', ar: 'عملية الامتحان' },

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  'ielts.guide.faq.eyebrow': { en: 'Quick answers', ar: 'إجابات سريعة' },
  'ielts.guide.faq.title': { en: 'IELTS FAQs', ar: 'أسئلة IELTS الشائعة' },

  // Q1 - good band. Answer = {SCORING_RULE fact} + connective context.
  'ielts.guide.faq.q1.question': {
    en: 'What is a good IELTS band score?',
    ar: 'شنو درجة Band الزينة في IELTS؟',
  },
  'ielts.guide.faq.q1.answer_context': {
    en: 'There is no universal pass mark: institutions set their own minimums. As context, most undergraduate study sits around Band 6.0-6.5 and postgraduate around 6.5-7.5, while professional registration can require 7.0-7.5 in each skill.',
    ar: 'ما في درجة نجاح موحّدة: المؤسسات تحدد الحد الأدنى مالها بنفسها. كسياق، أغلب الدراسة الجامعية حوالي Band 6.0-6.5 والدراسات العليا حوالي 6.5-7.5، بينما التسجيل المهني ممكن يطلب 7.0-7.5 في كل مهارة.',
  },

  // Q2 - test length. Answer interleaves the sitting duration + Speaking minutes.
  //   {a} {h}h{mm} ({SITTING_MINUTES} {minutes_word}) {b} {speakingMins} {c}
  'ielts.guide.faq.q2.question': {
    en: 'How long is the IELTS test?',
    ar: 'كم مدة اختبار IELTS؟',
  },
  'ielts.guide.faq.q2.answer_a': {
    en: 'The Listening, Reading and Writing sections are sat back-to-back in a single sitting of',
    ar: 'أقسام Listening وReading وWriting يتقدّمون لهم ورا بعض في جلسة وحدة مدتها',
  },
  'ielts.guide.faq.q2.minutes_word': { en: 'minutes', ar: 'دقيقة' },
  'ielts.guide.faq.q2.answer_b': {
    en: 'with no breaks. Speaking is a',
    ar: 'بدون استراحات. Speaking عبارة عن مقابلة',
  },
  'ielts.guide.faq.q2.answer_c': {
    en: 'minute interview held separately - the same day or up to seven days apart.',
    ar: 'دقيقة تكون منفصلة - نفس اليوم أو لين سبعة أيام بعدها.',
  },

  // Q3 - hardest section. Answer interleaves the hardest-skill label + mean band,
  // then the ONE_SKILL_RETAKE_NOTE fact (stays English).
  //   {label} {a} Band {mean}. {ONE_SKILL_RETAKE_NOTE}
  'ielts.guide.faq.q3.question': {
    en: 'Which IELTS section is the hardest?',
    ar: 'أي قسم في IELTS هو الأصعب؟',
  },
  'ielts.guide.faq.q3.answer_a': {
    en: 'is the lowest-scoring module for most candidates worldwide, and lowest of all for Gulf learners - the published mean is around Band',
    ar: 'هي أقل وحدة بالدرجات لأغلب المتقدّمين بالعالم، وأقلها كلها لمتعلّمي الخليج - المتوسط المنشور حوالي Band',
  },

  // Q4 - validity. Answer interleaves TRF validity years + acceptedBy fact.
  //   {a} {trfValidityYears} {years_word}. {b} {acceptedBy}.
  'ielts.guide.faq.q4.question': {
    en: 'How long is an IELTS result valid?',
    ar: 'كم مدة صلاحية نتيجة IELTS؟',
  },
  'ielts.guide.faq.q4.answer_a': {
    en: 'Your Test Report Form (TRF) is valid for',
    ar: 'الـ Test Report Form (TRF) مالك صالح لمدة',
  },
  'ielts.guide.faq.q4.years_word': { en: 'years', ar: 'سنوات' },
  'ielts.guide.faq.q4.answer_b': { en: 'IELTS is accepted by', ar: 'IELTS مقبول من' },

  // ─── Closing CTA ──────────────────────────────────────────────────────────
  'ielts.guide.cta.heading': {
    en: 'Know the exam. Now build the band.',
    ar: 'افهم الامتحان. الحين ابنِ الـ Band.',
  },
  'ielts.guide.cta.body': {
    en: 'Start with a free diagnostic to find your weakest skill, then follow a personalised path of practice and instant AI feedback across all four sections.',
    ar: 'ابدأ باختبار تشخيصي ببلاش عشان تلاقي أضعف مهارة عندك، وبعدها اتبع مسار مخصص من التدريب والتقييم الفوري بالـ AI في الأقسام الأربعة كلها.',
  },
  'ielts.guide.cta.cta_diagnostic': {
    en: 'Take the free diagnostic',
    ar: 'سوِّ الاختبار التشخيصي ببلاش',
  },
  'ielts.guide.cta.cta_learn': { en: 'Study the skills', ar: 'ادرس المهارات' },
}
