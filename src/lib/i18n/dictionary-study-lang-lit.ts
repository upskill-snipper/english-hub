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

export const STUDY_LANG_LIT_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Shared chrome (both subjects) ──────────────────────────────────
  'study.shared.home': { en: 'Home', ar: 'الرئيسية', es: 'Inicio' },
  'study.shared.resources': { en: 'Resources', ar: 'المصادر', es: 'Recursos' },
  'study.shared.english_language': {
    en: 'English Language',
    ar: 'English Language',
    es: 'English Language',
  },
  'study.shared.english_literature': {
    en: 'English Literature',
    ar: 'English Literature',
    es: 'English Literature',
  },
  'study.shared.breadcrumb_aria': {
    en: 'Breadcrumb',
    ar: 'مسار التنقّل',
    es: 'Ruta de navegación',
  },

  'study.shared.overview': { en: 'Overview', ar: 'نظرة عامة', es: 'Visión general' },
  'study.shared.course_overview': {
    en: 'Course Overview',
    ar: 'نظرة عامة على المنهج',
    es: 'Visión general del curso',
  },
  'study.shared.study_resources': {
    en: 'Study Resources',
    ar: 'مصادر المذاكرة',
    es: 'Recursos de estudio',
  },
  'study.shared.study_now': { en: 'Study now', ar: 'ذاكر الحين', es: 'Estudiar ahora' },
  'study.shared.view_resource': { en: 'View resource', ar: 'شوف المصدر', es: 'Ver recurso' },
  'study.shared.view_resources': { en: 'View resources', ar: 'شوف المصادر', es: 'Ver recursos' },
  'study.shared.explore': { en: 'Explore', ar: 'استكشف', es: 'Explorar' },
  'study.shared.read_more': { en: 'Read more', ar: 'اقرأ المزيد', es: 'Leer más' },
  'study.shared.start_revising': {
    en: 'Ready to start revising?',
    ar: 'جاهز تبدأ المراجعة؟',
    es: '¿Listo para empezar a repasar?',
  },

  'study.shared.paper_1': { en: 'Paper 1', ar: 'Paper 1', es: 'Paper 1' },
  'study.shared.paper_2': { en: 'Paper 2', ar: 'Paper 2', es: 'Paper 2' },
  'study.shared.techniques': { en: 'Techniques', ar: 'الأساليب', es: 'Técnicas' },
  'study.shared.techniques_guide': {
    en: 'Language Techniques',
    ar: 'أساليب اللغة',
    es: 'Técnicas del lenguaje',
  },
  'study.shared.writing_skills': {
    en: 'Writing Skills',
    ar: 'مهارات الكتابة',
    es: 'Destrezas de escritura',
  },
  'study.shared.grade_boundaries': {
    en: 'Grade Boundaries',
    ar: 'حدود الدرجات',
    es: 'Límites de notas',
  },
  'study.shared.mark_scheme': {
    en: 'Mark Scheme',
    ar: 'مخطط التصحيح',
    es: 'Esquema de calificación',
  },
  'study.shared.model_answer': { en: 'Model Answer', ar: 'إجابة نموذجية', es: 'Respuesta modelo' },
  'study.shared.exam_tip': { en: 'Exam Tip', ar: 'نصيحة للامتحان', es: 'Consejo de examen' },
  'study.shared.exam_tips': { en: 'Exam Tips', ar: 'نصائح للامتحان', es: 'Consejos de examen' },
  'study.shared.examiner_commentary': {
    en: 'Examiner Commentary',
    ar: 'تعليق المصحّح',
    es: 'Comentario del examinador',
  },
  'study.shared.quick_revise': { en: 'Quick revise', ar: 'مراجعة سريعة', es: 'Repaso rápido' },
  'study.shared.how_to_use': { en: 'How to use this', ar: 'شلون تستخدم هذا', es: 'Cómo usar esto' },

  'study.shared.about_qualification': {
    en: 'About this qualification',
    ar: 'عن هذا المؤهّل',
    es: 'Sobre esta titulación',
  },
  'study.shared.exam_board': { en: 'Exam board', ar: 'مجلس الامتحان', es: 'Junta examinadora' },
  'study.shared.spec_code': {
    en: 'Specification code',
    ar: 'رمز المواصفات',
    es: 'Código de especificación',
  },
  'study.shared.assessment': { en: 'Assessment', ar: 'التقييم', es: 'Evaluación' },
  'study.shared.total_marks': { en: 'Total marks', ar: 'مجموع الدرجات', es: 'Puntuación total' },
  'study.shared.duration': { en: 'Duration', ar: 'المدة', es: 'Duración' },
  'study.shared.weighting': { en: 'Weighting', ar: 'الوزن', es: 'Ponderación' },
  'study.shared.marks': { en: 'Marks', ar: 'الدرجات', es: 'Puntos' },
  'study.shared.component': { en: 'Component', ar: 'المكوّن', es: 'Componente' },
  'study.shared.paper': { en: 'Paper', ar: 'الورقة', es: 'Examen' },

  // ─── English Language: per-board hub pages ──────────────────────────
  // AQA
  'study.lang.aqa.eyebrow': { en: 'AQA GCSE (8700)', ar: 'AQA GCSE (8700)', es: 'AQA GCSE (8700)' },
  'study.lang.aqa.h1': {
    en: 'English Language Revision Hub',
    ar: 'مركز مراجعة English Language',
    es: 'Centro de repaso de English Language',
  },
  'study.lang.aqa.intro': {
    en: 'Everything you need to achieve your best grade in AQA GCSE English Language. Detailed study notes, techniques, marking guides, and example responses for both papers.',
    ar: 'كل اللي تحتاجه عشان توصل لأحسن درجة في AQA GCSE English Language. ملاحظات مذاكرة مفصّلة، وأساليب، وأدلّة تصحيح، وإجابات نموذجية للورقتين.',
    es: 'Todo lo que necesitas para obtener tu mejor nota en AQA GCSE English Language. Notas de estudio detalladas, técnicas, guías de calificación y respuestas de ejemplo para ambos exámenes.',
  },
  'study.lang.aqa.back': {
    en: 'Back to AQA English Language',
    ar: 'رجوع لـ AQA English Language',
    es: 'Volver a AQA English Language',
  },
  'study.lang.aqa.breadcrumb_current': {
    en: 'AQA English Language',
    ar: 'AQA English Language',
    es: 'AQA English Language',
  },
  'study.lang.aqa.how_structured': {
    en: 'How is the qualification structured?',
    ar: 'شلون متركّب المؤهّل؟',
    es: '¿Cómo está estructurada la titulación?',
  },
  'study.lang.aqa.quick_tips': {
    en: 'Quick revision tips for AQA English Language',
    ar: 'نصائح مراجعة سريعة لـ AQA English Language',
    es: 'Consejos rápidos de repaso para AQA English Language',
  },
  'study.lang.aqa.cta_intro': {
    en: 'Begin with Paper 1 or Paper 2, or build your foundations with the Language Techniques and Writing Skills guides.',
    ar: 'ابدأ بـ Paper 1 أو Paper 2، أو ثبّت أساسك مع أدلّة أساليب اللغة ومهارات الكتابة.',
    es: 'Empieza con el Paper 1 o el Paper 2, o asienta tus bases con las guías de Técnicas del lenguaje y Destrezas de escritura.',
  },

  // CAIE (Cambridge IGCSE)
  'study.lang.caie.eyebrow': {
    en: 'Cambridge International (CAIE)',
    ar: 'Cambridge International (CAIE)',
    es: 'Cambridge International (CAIE)',
  },
  'study.lang.caie.h1': {
    en: 'IGCSE English Language',
    ar: 'IGCSE English Language',
    es: 'IGCSE English Language',
  },
  'study.lang.caie.intro': {
    en: 'Everything you need to prepare for your Cambridge IGCSE English Language examination. Thorough coverage of both reading and writing papers, language techniques, marking guides, and grade boundaries.',
    ar: 'كل اللي تحتاجه عشان تجهّز لامتحان Cambridge IGCSE English Language. تغطية شاملة لورقتي القراءة والكتابة، وأساليب اللغة، وأدلّة التصحيح، وحدود الدرجات.',
    es: 'Todo lo que necesitas para prepararte para tu examen de Cambridge IGCSE English Language. Cobertura exhaustiva de los exámenes de lectura y escritura, técnicas del lenguaje, guías de calificación y límites de notas.',
  },
  'study.lang.caie.back': {
    en: 'Back to CAIE English Language',
    ar: 'رجوع لـ CAIE English Language',
    es: 'Volver a CAIE English Language',
  },
  'study.lang.caie.select_topic': {
    en: 'Select a topic below to access full, detailed revision material.',
    ar: 'اختر موضوع من تحت عشان توصل لمادة مراجعة كاملة ومفصّلة.',
    es: 'Selecciona un tema a continuación para acceder al material de repaso completo y detallado.',
  },
  'study.lang.caie.exam_tips_intl': {
    en: 'Exam Tips for International Students',
    ar: 'نصائح امتحان للطلاب الدوليين',
    es: 'Consejos de examen para estudiantes internacionales',
  },

  // Edexcel
  'study.lang.edexcel.back': {
    en: 'Back to Edexcel Hub',
    ar: 'رجوع لمركز Edexcel',
    es: 'Volver al centro de Edexcel',
  },
  'study.lang.edexcel.back_long': {
    en: 'Back to Edexcel English Language',
    ar: 'رجوع لـ Edexcel English Language',
    es: 'Volver a Edexcel English Language',
  },

  // OCR
  'study.lang.ocr.back': {
    en: 'Back to OCR English Language',
    ar: 'رجوع لـ OCR English Language',
    es: 'Volver a OCR English Language',
  },

  // WJEC / Eduqas
  'study.lang.wjec.back': {
    en: 'Back to WJEC English Language',
    ar: 'رجوع لـ WJEC English Language',
    es: 'Volver a WJEC English Language',
  },

  // Shared Language card titles/CTA
  'study.lang.card.paper_1_reading': {
    en: 'Paper 1: Reading',
    ar: 'Paper 1: القراءة',
    es: 'Paper 1: Lectura',
  },
  'study.lang.back_to_lang': {
    en: 'Back to English Language',
    ar: 'رجوع لـ English Language',
    es: 'Volver a English Language',
  },

  // ─── English Literature: per-board chrome ───────────────────────────
  'study.lit.back.aqa': {
    en: 'Back to AQA English Literature',
    ar: 'رجوع لـ AQA English Literature',
    es: 'Volver a AQA English Literature',
  },
  'study.lit.back.caie': {
    en: 'Back to Cambridge IGCSE English Literature',
    ar: 'رجوع لـ Cambridge IGCSE English Literature',
    es: 'Volver a Cambridge IGCSE English Literature',
  },
  'study.lit.back.caie_resources': {
    en: 'Back to CAIE Literature Resources',
    ar: 'رجوع لمصادر CAIE Literature',
    es: 'Volver a los recursos de CAIE Literature',
  },
  'study.lit.back.edexcel': {
    en: 'Back to Edexcel English Literature',
    ar: 'رجوع لـ Edexcel English Literature',
    es: 'Volver a Edexcel English Literature',
  },
  'study.lit.back.ocr': {
    en: 'Back to OCR English Literature',
    ar: 'رجوع لـ OCR English Literature',
    es: 'Volver a OCR English Literature',
  },
  'study.lit.back.wjec': {
    en: 'Back to WJEC English Literature',
    ar: 'رجوع لـ WJEC English Literature',
    es: 'Volver a WJEC English Literature',
  },
  'study.lit.back.songs_v1': {
    en: 'Back to Songs of Ourselves Vol 1',
    ar: 'رجوع لـ Songs of Ourselves Vol 1',
    es: 'Volver a Songs of Ourselves Vol 1',
  },
  'study.lit.back.anthology_overview': {
    en: 'Back to anthology overview',
    ar: 'رجوع لنظرة عامة على المختارات',
    es: 'Volver a la visión general de la antología',
  },
}
