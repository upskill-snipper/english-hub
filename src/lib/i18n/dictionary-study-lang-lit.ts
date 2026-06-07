/**
 * Study-pages i18n dictionary (study.lang.* / study.lit.*).
 *
 * Covers UI CHROME ONLY on the GCSE/IGCSE study pages under
 *   src/app/resources/english-language/**
 *   src/app/resources/english-literature/**
 *
 * Scope is deliberately limited to navigational chrome: "Back to ..."
 * links, breadcrumbs, buttons/CTAs, short generic section headings and
 * labels (Overview, Mark Scheme, Grade Boundaries, Exam Tip, ...), tab
 * labels, page hero/intro marketing copy and navigational card
 * titles/descriptions. Exam-paper question text, model-answer prose,
 * examiner commentary, grade-boundary table values and official spec /
 * AO descriptor prose are NEVER translated here - they stay English in
 * the page source.
 *
 * Conventions (matching the rest of the i18n layer):
 *   - Brand + board + qualification names stay Latin: The English Hub,
 *     GCSE/IGCSE/IELTS/KS3, AQA/OCR/Edexcel/Eduqas/Cambridge/CAIE/WJEC,
 *     paper codes (8700, 1EN0, J351, 4EA1, 0500, ...), AO1-AO6, £, text
 *     and author names, literary/linguistic terms.
 *   - Khaleeji (Gulf) Arabic preferred: شنو/أبغى/وايد/الحين/إحنا/روح/
 *     شوف/دوّر/سكّر/ببلاش/لحظة.
 *   - Levantine forms banned (شو/بحكي/كيفك/ليش).
 *
 * A `study.shared.*` sub-namespace holds chrome strings that recur
 * across many pages and across both subjects (Language + Literature).
 *
 * NB: annotated with an explicit Record type (NOT `as const`) so the
 * shape stays assignable to the merged Dictionary lookup map.
 */

export const STUDY_LANG_LIT_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // ─── Shared chrome (both subjects) ──────────────────────────────────
  'study.shared.home': { en: 'Home', ar: 'الرئيسية' },
  'study.shared.resources': { en: 'Resources', ar: 'المصادر' },
  'study.shared.english_language': { en: 'English Language', ar: 'English Language' },
  'study.shared.english_literature': { en: 'English Literature', ar: 'English Literature' },
  'study.shared.breadcrumb_aria': { en: 'Breadcrumb', ar: 'مسار التنقّل' },

  'study.shared.overview': { en: 'Overview', ar: 'نظرة عامة' },
  'study.shared.course_overview': { en: 'Course Overview', ar: 'نظرة عامة على المنهج' },
  'study.shared.study_resources': { en: 'Study Resources', ar: 'مصادر المذاكرة' },
  'study.shared.study_now': { en: 'Study now', ar: 'ذاكر الحين' },
  'study.shared.view_resource': { en: 'View resource', ar: 'شوف المصدر' },
  'study.shared.view_resources': { en: 'View resources', ar: 'شوف المصادر' },
  'study.shared.explore': { en: 'Explore', ar: 'استكشف' },
  'study.shared.read_more': { en: 'Read more', ar: 'اقرأ المزيد' },
  'study.shared.start_revising': { en: 'Ready to start revising?', ar: 'جاهز تبدأ المراجعة؟' },

  'study.shared.paper_1': { en: 'Paper 1', ar: 'Paper 1' },
  'study.shared.paper_2': { en: 'Paper 2', ar: 'Paper 2' },
  'study.shared.techniques': { en: 'Techniques', ar: 'الأساليب' },
  'study.shared.techniques_guide': { en: 'Language Techniques', ar: 'أساليب اللغة' },
  'study.shared.writing_skills': { en: 'Writing Skills', ar: 'مهارات الكتابة' },
  'study.shared.grade_boundaries': { en: 'Grade Boundaries', ar: 'حدود الدرجات' },
  'study.shared.mark_scheme': { en: 'Mark Scheme', ar: 'مخطط التصحيح' },
  'study.shared.model_answer': { en: 'Model Answer', ar: 'إجابة نموذجية' },
  'study.shared.exam_tip': { en: 'Exam Tip', ar: 'نصيحة للامتحان' },
  'study.shared.exam_tips': { en: 'Exam Tips', ar: 'نصائح للامتحان' },
  'study.shared.examiner_commentary': { en: 'Examiner Commentary', ar: 'تعليق المصحّح' },
  'study.shared.quick_revise': { en: 'Quick revise', ar: 'مراجعة سريعة' },
  'study.shared.how_to_use': { en: 'How to use this', ar: 'شلون تستخدم هذا' },

  'study.shared.about_qualification': {
    en: 'About this qualification',
    ar: 'عن هذا المؤهّل',
  },
  'study.shared.exam_board': { en: 'Exam board', ar: 'مجلس الامتحان' },
  'study.shared.spec_code': { en: 'Specification code', ar: 'رمز المواصفات' },
  'study.shared.assessment': { en: 'Assessment', ar: 'التقييم' },
  'study.shared.total_marks': { en: 'Total marks', ar: 'مجموع الدرجات' },
  'study.shared.duration': { en: 'Duration', ar: 'المدة' },
  'study.shared.weighting': { en: 'Weighting', ar: 'الوزن' },
  'study.shared.marks': { en: 'Marks', ar: 'الدرجات' },
  'study.shared.component': { en: 'Component', ar: 'المكوّن' },
  'study.shared.paper': { en: 'Paper', ar: 'الورقة' },

  // ─── English Language: per-board hub pages ──────────────────────────
  // AQA
  'study.lang.aqa.eyebrow': { en: 'AQA GCSE (8700)', ar: 'AQA GCSE (8700)' },
  'study.lang.aqa.h1': {
    en: 'English Language Revision Hub',
    ar: 'مركز مراجعة English Language',
  },
  'study.lang.aqa.intro': {
    en: 'Everything you need to achieve your best grade in AQA GCSE English Language. Detailed study notes, techniques, marking guides, and example responses for both papers.',
    ar: 'كل اللي تحتاجه عشان توصل لأحسن درجة في AQA GCSE English Language. ملاحظات مذاكرة مفصّلة، وأساليب، وأدلّة تصحيح، وإجابات نموذجية للورقتين.',
  },
  'study.lang.aqa.back': {
    en: 'Back to AQA English Language',
    ar: 'رجوع لـ AQA English Language',
  },
  'study.lang.aqa.breadcrumb_current': {
    en: 'AQA English Language',
    ar: 'AQA English Language',
  },
  'study.lang.aqa.how_structured': {
    en: 'How is the qualification structured?',
    ar: 'شلون متركّب المؤهّل؟',
  },
  'study.lang.aqa.quick_tips': {
    en: 'Quick revision tips for AQA English Language',
    ar: 'نصائح مراجعة سريعة لـ AQA English Language',
  },
  'study.lang.aqa.cta_intro': {
    en: 'Begin with Paper 1 or Paper 2, or build your foundations with the Language Techniques and Writing Skills guides.',
    ar: 'ابدأ بـ Paper 1 أو Paper 2، أو ثبّت أساسك مع أدلّة أساليب اللغة ومهارات الكتابة.',
  },

  // CAIE (Cambridge IGCSE)
  'study.lang.caie.eyebrow': {
    en: 'Cambridge International (CAIE)',
    ar: 'Cambridge International (CAIE)',
  },
  'study.lang.caie.h1': { en: 'IGCSE English Language', ar: 'IGCSE English Language' },
  'study.lang.caie.intro': {
    en: 'Everything you need to prepare for your Cambridge IGCSE English Language examination. Thorough coverage of both reading and writing papers, language techniques, marking guides, and grade boundaries.',
    ar: 'كل اللي تحتاجه عشان تجهّز لامتحان Cambridge IGCSE English Language. تغطية شاملة لورقتي القراءة والكتابة، وأساليب اللغة، وأدلّة التصحيح، وحدود الدرجات.',
  },
  'study.lang.caie.back': {
    en: 'Back to CAIE English Language',
    ar: 'رجوع لـ CAIE English Language',
  },
  'study.lang.caie.select_topic': {
    en: 'Select a topic below to access full, detailed revision material.',
    ar: 'اختر موضوع من تحت عشان توصل لمادة مراجعة كاملة ومفصّلة.',
  },
  'study.lang.caie.exam_tips_intl': {
    en: 'Exam Tips for International Students',
    ar: 'نصائح امتحان للطلاب الدوليين',
  },

  // Edexcel
  'study.lang.edexcel.back': {
    en: 'Back to Edexcel Hub',
    ar: 'رجوع لمركز Edexcel',
  },
  'study.lang.edexcel.back_long': {
    en: 'Back to Edexcel English Language',
    ar: 'رجوع لـ Edexcel English Language',
  },

  // OCR
  'study.lang.ocr.back': {
    en: 'Back to OCR English Language',
    ar: 'رجوع لـ OCR English Language',
  },

  // WJEC / Eduqas
  'study.lang.wjec.back': {
    en: 'Back to WJEC English Language',
    ar: 'رجوع لـ WJEC English Language',
  },

  // Shared Language card titles/CTA
  'study.lang.card.paper_1_reading': { en: 'Paper 1: Reading', ar: 'Paper 1: القراءة' },
  'study.lang.back_to_lang': {
    en: 'Back to English Language',
    ar: 'رجوع لـ English Language',
  },

  // ─── English Literature: per-board chrome ───────────────────────────
  'study.lit.back.aqa': {
    en: 'Back to AQA English Literature',
    ar: 'رجوع لـ AQA English Literature',
  },
  'study.lit.back.caie': {
    en: 'Back to Cambridge IGCSE English Literature',
    ar: 'رجوع لـ Cambridge IGCSE English Literature',
  },
  'study.lit.back.caie_resources': {
    en: 'Back to CAIE Literature Resources',
    ar: 'رجوع لمصادر CAIE Literature',
  },
  'study.lit.back.edexcel': {
    en: 'Back to Edexcel English Literature',
    ar: 'رجوع لـ Edexcel English Literature',
  },
  'study.lit.back.ocr': {
    en: 'Back to OCR English Literature',
    ar: 'رجوع لـ OCR English Literature',
  },
  'study.lit.back.wjec': {
    en: 'Back to WJEC English Literature',
    ar: 'رجوع لـ WJEC English Literature',
  },
  'study.lit.back.songs_v1': {
    en: 'Back to Songs of Ourselves Vol 1',
    ar: 'رجوع لـ Songs of Ourselves Vol 1',
  },
  'study.lit.back.anthology_overview': {
    en: 'Back to anthology overview',
    ar: 'رجوع لنظرة عامة على المختارات',
  },
}
