// ─── IELTS hub + progress dictionary shard ──────────────────────────────────
// UI chrome that was previously inline-English on the two IELTS overview
// surfaces:
//   • src/app/ielts/page.tsx           → ielts.hubx.*  (SEO hub landing)
//   • src/app/ielts/progress/page.tsx  → ielts.progress.* (band dashboard)
//
// SCOPE: interface copy only — section headings, marketing detail lines, skill
// blurbs, badge chips, dashboard labels, callouts and empty states. No test
// CONTENT lives here (IELTS is an English exam). Cross-module strings already
// carried by ./dictionary-ielts.ts (ielts.hub.*, ielts.loop.*, ielts.skill.*,
// ielts.cta.*, ielts.band.*, ielts.estimate_note, ielts.nav) are REUSED, not
// duplicated — these new keys cover only the formerly-inline English.
//
// NB: namespaced `ielts.hubx.*` (not `ielts.hub.*`) on purpose so the hub keys
// never collide with the existing curated `ielts.hub.*` entries.
//
// Khaleeji (Gulf) Arabic per the master dictionary header conventions
// (شنو/وايد/الحين/ببلاش/شوف/دوّر …; Levantine forms شو/كيفك/ليش banned). Brand +
// technical terms stay Latin: The English Hub, IELTS, Band, Academic, UCAS,
// Listening / Reading / Writing / Speaking, AI. Band numbers stay digits.
//
// Wired into src/lib/i18n/dictionary.ts centrally (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_HUBPROGRESS_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // ══════════════════════════════════════════════════════════════════════════
  // HUB  (src/app/ielts/page.tsx — server component, await t('ielts.hubx.*'))
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Hero: secondary CTA + badge chips ───────────────────────────────────
  'ielts.hubx.view_progress': { en: 'View my progress', ar: 'شوف تقدّمي' },
  'ielts.hubx.badge.academic_module': { en: 'Academic module', ar: 'وحدة Academic' },
  'ielts.hubx.badge.four_skills': {
    en: 'Listening · Reading · Writing · Speaking',
    ar: 'Listening · Reading · Writing · Speaking',
  },
  // Already-bilingual literal in the source; kept as a key for completeness.
  'ielts.hubx.badge.bilingual': { en: 'English / العربية', ar: 'English / العربية' },

  // ─── Loop step detail lines (labels stay on ielts.loop.*) ─────────────────
  'ielts.hubx.loop.diagnose.detail': {
    en: 'A short placement test pins your starting band across all four skills.',
    ar: 'اختبار تحديد مستوى قصير يثبّت Band البداية مالك في المهارات الأربع كلها.',
  },
  'ielts.hubx.loop.plan.detail': {
    en: 'Get a personalised study plan that targets your weakest skill first.',
    ar: 'خذ خطة دراسة مخصصة لك تركّز على أضعف مهارة عندك أول.',
  },
  'ielts.hubx.loop.practise.detail': {
    en: 'Work through Academic Listening, Reading, Writing and Speaking tasks.',
    ar: 'اشتغل على مهام Academic في Listening وReading وWriting وSpeaking.',
  },
  'ielts.hubx.loop.feedback.detail': {
    en: 'Writing and Speaking get an instant AI band against the official criteria.',
    ar: 'Writing وSpeaking ياخذون Band فوري بالـ AI حسب المعايير الرسمية.',
  },
  'ielts.hubx.loop.mock.detail': {
    en: 'Sit a full, timed mock under real exam conditions when you are ready.',
    ar: 'سوِّ اختبار تجريبي كامل ومؤقّت بظروف امتحان حقيقية أول ما تكون جاهز.',
  },
  'ielts.hubx.loop.predict.detail': {
    en: 'See your predicted overall band and exactly what will lift it higher.',
    ar: 'شوف Band الكلي المتوقع مالك وبالضبط شنو اللي بيرفعه أعلى.',
  },

  // ─── Skill marking badges ─────────────────────────────────────────────────
  'ielts.hubx.marking.auto': { en: 'Auto-marked', ar: 'تصحيح تلقائي' },
  'ielts.hubx.marking.ai': { en: 'AI band score', ar: 'درجة Band بالـ AI' },

  // ─── Skill blurbs (skill names stay on ielts.skill.*) ─────────────────────
  'ielts.hubx.skill.listening.blurb': {
    en: 'Section-by-section question practice with instant scoring and a band from your raw mark.',
    ar: 'تدريب أسئلة قسم قسم مع تصحيح فوري وBand من درجتك الخام.',
  },
  'ielts.hubx.skill.reading.blurb': {
    en: 'Academic passages with True/False/Not Given, matching and completion — marked the moment you finish.',
    ar: 'نصوص Academic فيها True/False/Not Given ومطابقة وإكمال — تتصحّح أول ما تخلّص.',
  },
  'ielts.hubx.skill.writing.blurb': {
    en: 'Task 1 data responses and Task 2 essays scored on all four criteria, with fixes you can action.',
    ar: 'إجابات بيانات Task 1 ومقالات Task 2 تتقيّم على المعايير الأربعة كلها، مع تصحيحات تقدر تطبّقها.',
  },
  'ielts.hubx.skill.speaking.blurb': {
    en: 'Parts 1–3 with cue cards and follow-ups, assessed for fluency, vocabulary, grammar and pronunciation.',
    ar: 'الأجزاء 1–3 مع بطاقات أسئلة وأسئلة متابعة، تتقيّم على الطلاقة والمفردات والقواعد والنطق.',
  },

  // ─── Section 2: the learning loop ─────────────────────────────────────────
  'ielts.hubx.loop.eyebrow': { en: 'How it works', ar: 'كيف يشتغل' },
  'ielts.hubx.loop.heading': {
    en: 'One loop, repeated until you are exam-ready',
    ar: 'مسار واحد، يتكرّر لين تصير جاهز للامتحان',
  },
  'ielts.hubx.loop.body': {
    en: 'Every cycle moves you up a band. Diagnose where you are, follow the plan, practise, get feedback, then prove it — and repeat.',
    ar: 'كل دورة ترفعك Band. شخّص وين أنت، اتبع الخطة، تدرّب، خذ تقييم، وبعدها أثبتها — وكرّر.',
  },

  // ─── Section 3: the four skills ───────────────────────────────────────────
  'ielts.hubx.skills.eyebrow': { en: 'Four skills, one platform', ar: 'أربع مهارات، منصة وحدة' },
  'ielts.hubx.skills.heading': {
    en: 'Practise every part of the Academic test',
    ar: 'تدرّب على كل جزء من اختبار Academic',
  },
  'ielts.hubx.skills.body': {
    en: 'Listening and Reading are marked automatically. Writing and Speaking are scored by AI against the official band descriptors — so you always know where you stand.',
    ar: 'Listening وReading يتصحّحون تلقائياً. Writing وSpeaking يتقيّمون بالـ AI حسب أوصاف Band الرسمية — عشان دايماً تعرف وين موقفك.',
  },

  // ─── Section 4: why The English Hub ───────────────────────────────────────
  'ielts.hubx.why.eyebrow': { en: 'Why The English Hub', ar: 'ليش The English Hub' },
  'ielts.hubx.why.heading': {
    en: 'Feedback that used to need a tutor — instantly',
    ar: 'تقييم كان يحتاج مدرّس قبل — الحين فوري',
  },
  'ielts.hubx.why.instant.title': {
    en: 'Instant AI band feedback',
    ar: 'تقييم Band فوري بالـ AI',
  },
  'ielts.hubx.why.instant.body': {
    en: 'No waiting for a tutor. Writing and Speaking responses get a band and targeted next steps in seconds.',
    ar: 'ما في انتظار لمدرّس. إجابات Writing وSpeaking ياخذون Band وخطوات تالية محددة في ثواني.',
  },
  'ielts.hubx.why.bilingual.title': {
    en: 'Built bilingual for Gulf learners',
    ar: 'مبني ثنائي اللغة لمتعلّمي الخليج',
  },
  'ielts.hubx.why.bilingual.body': {
    en: 'Every page works in English or Arabic, so instructions never get in the way of the practice.',
    ar: 'كل صفحة تشتغل بالإنجليزي أو العربي، عشان التعليمات ما تعطّلك عن التدريب أبداً.',
  },
  'ielts.hubx.why.path.title': {
    en: 'A starter-to-Band-9 path',
    ar: 'مسار من البداية لين Band 9',
  },
  'ielts.hubx.why.path.body': {
    en: 'Whether you are at Band 4 or chasing Band 8, the loop adapts and tracks every step of the climb.',
    ar: 'سواء أنت على Band 4 أو تطمح لـ Band 8، المسار يتكيّف ويتابع كل خطوة بالطريق.',
  },

  // ─── Section 4b: beyond practice ──────────────────────────────────────────
  'ielts.hubx.more.eyebrow': { en: 'Beyond practice', ar: 'أبعد من التدريب' },
  'ielts.hubx.more.heading': {
    en: 'From your target band to your university place',
    ar: 'من Band المستهدف مالك لين مقعدك بالجامعة',
  },
  'ielts.hubx.more.admissions.title': {
    en: 'UK admissions & statement coach',
    ar: 'مدرّب القبول في بريطانيا والـ statement',
  },
  'ielts.hubx.more.admissions.body': {
    en: 'Plan your UCAS application and get instant AI feedback on your personal statement.',
    ar: 'خطّط طلب UCAS مالك وخذ تقييم فوري بالـ AI على الـ personal statement مالك.',
  },
  'ielts.hubx.more.centre.title': { en: 'For tutors & centres', ar: 'للمدرّسين والمراكز' },
  'ielts.hubx.more.centre.body': {
    en: 'Track your students’ bands across every skill from one dashboard.',
    ar: 'تابع Band طلابك في كل مهارة من لوحة وحدة.',
  },
  'ielts.hubx.more.partners.title': { en: 'Partner with us', ar: 'اشترك معانا' },
  'ielts.hubx.more.partners.body': {
    en: 'Bring The English Hub to your school or agency across the Gulf.',
    ar: 'وصّل The English Hub لمدرستك أو وكالتك في الخليج.',
  },
  'ielts.hubx.more.explore': { en: 'Explore', ar: 'استكشف' },

  // ─── Section 5: closing CTA ───────────────────────────────────────────────
  'ielts.hubx.cta.heading': {
    en: 'Find your band today — for free',
    ar: 'لاقِ Band مالك اليوم — ببلاش',
  },
  'ielts.hubx.cta.body': {
    en: 'Take the placement test, get your personalised plan, and start closing the gap to your target band.',
    ar: 'سوِّ اختبار تحديد المستوى، خذ خطتك المخصصة، وابدأ تسكّر الفجوة لين Band المستهدف مالك.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PROGRESS  (src/app/ielts/progress/page.tsx — client, t('ielts.progress.*'))
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Header ───────────────────────────────────────────────────────────────
  'ielts.progress.header.title': { en: 'My IELTS Progress', ar: 'تقدّمي في IELTS' },
  'ielts.progress.header.subtitle': {
    en: 'Your bands, trend and recent attempts across all four skills.',
    ar: 'Band مالك واتجاهك ومحاولاتك الأخيرة في المهارات الأربع كلها.',
  },

  // ─── Empty state ──────────────────────────────────────────────────────────
  'ielts.progress.empty.title': {
    en: 'No band yet — let’s find yours',
    ar: 'ما في Band بعد — خلّنا نلاقي مالك',
  },
  'ielts.progress.empty.body': {
    en: 'Take the placement test to estimate your band across all four skills. Your overall band, progress and recent attempts will appear here as you practise.',
    ar: 'سوِّ اختبار تحديد المستوى عشان نقدّر Band مالك في المهارات الأربع. Band الكلي مالك وتقدّمك ومحاولاتك الأخيرة بيطلعون هني وأنت تتدرّب.',
  },
  'ielts.progress.empty.explore': { en: 'Explore IELTS', ar: 'استكشف IELTS' },

  // ─── Overall band: locked-until-complete copy (split around the count) ─────
  // Renders as: "Keep going — you are {n} of 4 there."
  'ielts.progress.overall.locked_lead': {
    en: 'Your overall band unlocks once you have at least one result in every skill. Keep going — you are',
    ar: 'Band الكلي مالك ينفتح أول ما تكون عندك نتيجة وحدة على الأقل في كل مهارة. كمّل — أنت',
  },
  'ielts.progress.overall.locked_tail': { en: 'of 4 there.', ar: 'من 4 وصلت.' },

  // ─── Per-skill bands ──────────────────────────────────────────────────────
  'ielts.progress.bands_by_skill': { en: 'Bands by skill', ar: 'Band حسب المهارة' },
  // BandChip sublabels (passed in as props from this client page).
  'ielts.progress.chip.not_attempted': { en: 'Not attempted', ar: 'ما جُرّبت' },
  'ielts.progress.chip.attempt_one': { en: '1 attempt', ar: 'محاولة وحدة' },
  // Plural form — "{n} attempts". Count stays a digit outside the string.
  'ielts.progress.chip.attempts_other': { en: 'attempts', ar: 'محاولات' },

  // ─── Weakest-skill callout (skill name comes from SKILL_META.label) ────────
  // Renders as: "Focus next on {skill}"
  'ielts.progress.weakest.title_lead': { en: 'Focus next on', ar: 'ركّز بعدها على' },
  // Renders as: "It’s currently your lowest band ({band}). …"
  'ielts.progress.weakest.body_lead': {
    en: 'It’s currently your lowest band (',
    ar: 'هذي الحين أقل Band عندك (',
  },
  'ielts.progress.weakest.body_tail': {
    en: '). Your study plan puts it first so your overall band rises fastest.',
    ar: '). خطة دراستك تحطها أول عشان Band الكلي مالك يرتفع بأسرع شكل.',
  },

  // ─── Band over time ───────────────────────────────────────────────────────
  'ielts.progress.trend.heading': { en: 'Band over time', ar: 'Band عبر الوقت' },
  // Used as the accessible name (aria-label) of the inline bar chart.
  'ielts.progress.trend.aria': { en: 'Band over time', ar: 'Band عبر الوقت' },
  'ielts.progress.trend.empty': {
    en: 'Complete a few more attempts to see your band trend build here.',
    ar: 'خلّص شوية محاولات زيادة عشان تشوف اتجاه Band مالك يتكوّن هني.',
  },

  // ─── Recent attempts ──────────────────────────────────────────────────────
  'ielts.progress.recent.heading': { en: 'Recent attempts', ar: 'المحاولات الأخيرة' },
}
