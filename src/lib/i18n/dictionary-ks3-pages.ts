/**
 * KS3 study-page bespoke CHROME - `ks3.page.*` namespace.
 *
 * Scope: page-level UI CHROME that was still hard-coded on the KS3
 * study pages under src/app/ks3/** AFTER the shared shell
 * (ks3/layout.tsx) and the hub/index pages were already keyed by the
 * earlier B1_KS3 sweep. In practice this shard covers the per-page
 * visible breadcrumb trails (the navigational <p>/<nav> breadcrumb at
 * the top of each study article): the recurring parent segments live
 * under the shared `ks3.page.bc.*` sub-namespace, and each page's own
 * leaf (current-page) label lives under `ks3.page.<area>.<slug>.bc`.
 *
 * This shard deliberately contains NO study/teaching content: no
 * lesson prose, set-text quotations, model answers, examiner
 * commentary, or analysis. Only navigational breadcrumb chrome.
 *
 * Brand + technical terms stay in Latin script even inside Arabic and
 * Spanish (standard Gulf convention + house style): The English Hub,
 * KS3, iLowerSecondary, AO/RAO/WAO codes (RAO2 etc.), Year 7/8/9, £,
 * literary/linguistic term names. {tokens} are preserved verbatim.
 *
 * Register: Khaleeji (Gulf) Arabic, not MSA/Levantine -
 * شنو/أبغى/وايد/الحين/إحنا/روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي,
 * كيفك, ليش.
 *
 * Annotated as Record (NOT `as const`) so the lookup chain in
 * dictionary.ts can consume it uniformly. Wiring into dictionary.ts is
 * handled separately.
 */

export const KS3_PAGES_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Shared breadcrumb segments (recur across the study pages) ────
  'ks3.page.bc.home': { en: 'Home', ar: 'الرئيسية', es: 'Inicio' },
  'ks3.page.bc.ks3': { en: 'KS3', ar: 'KS3', es: 'KS3' },
  'ks3.page.bc.ils': {
    en: 'iLowerSecondary English',
    ar: 'iLowerSecondary English',
    es: 'iLowerSecondary English',
  },
  'ks3.page.bc.reading_skills': {
    en: 'Reading skills',
    ar: 'مهارات القراءة',
    es: 'Destrezas de lectura',
  },
  'ks3.page.bc.writing_skills': {
    en: 'Writing skills',
    ar: 'مهارات الكتابة',
    es: 'Destrezas de escritura',
  },
  'ks3.page.bc.writing_forms': {
    en: 'Writing forms',
    ar: 'أشكال الكتابة',
    es: 'Formas de escritura',
  },
  'ks3.page.bc.question_types': {
    en: 'Question types',
    ar: 'أنواع الأسئلة',
    es: 'Tipos de preguntas',
  },
  'ks3.page.bc.text_types': {
    en: 'Text types',
    ar: 'أنواع النصوص',
    es: 'Tipos de texto',
  },
  'ks3.page.bc.fiction': { en: 'Fiction', ar: 'الأدب القصصي', es: 'Ficción' },
  'ks3.page.bc.practice_papers': {
    en: 'Practice papers',
    ar: 'أوراق التدريب',
    es: 'Exámenes de práctica',
  },
  'ks3.page.bc.reference': { en: 'Reference', ar: 'المرجع', es: 'Referencia' },

  // ─── Per-page leaf (current-page) breadcrumb labels ──────────────
  // Top-level iLowerSecondary pages
  'ks3.page.about.bc': { en: 'About', ar: 'نبذة', es: 'Acerca de' },
  'ks3.page.exam_format.bc': {
    en: 'Exam format',
    ar: 'صيغة الامتحان',
    es: 'Formato del examen',
  },
  'ks3.page.for_parents_teachers.bc': {
    en: 'For parents & teachers',
    ar: 'لأولياء الأمور والمعلّمين',
    es: 'Para padres y profesores',
  },
  'ks3.page.grade_targets.bc': {
    en: 'Grade targets',
    ar: 'أهداف الدرجات',
    es: 'Objetivos de calificación',
  },
  'ks3.page.grammar_lab.bc': {
    en: 'Grammar lab',
    ar: 'مختبر القواعد',
    es: 'Laboratorio de gramática',
  },
  'ks3.page.mark_scheme.bc': {
    en: 'Mark scheme',
    ar: 'مخطّط التصحيح',
    es: 'Esquema de corrección',
  },
  'ks3.page.model_answers.bc': {
    en: 'Model answers',
    ar: 'إجابات نموذجية',
    es: 'Respuestas modelo',
  },
  'ks3.page.progression.bc': {
    en: 'Progression',
    ar: 'التدرّج',
    es: 'Progresión',
  },
  'ks3.page.quiz.bc': { en: 'Quiz', ar: 'اختبار قصير', es: 'Cuestionario' },
  'ks3.page.specification.bc': {
    en: 'Specification',
    ar: 'المواصفات',
    es: 'Especificación',
  },
  'ks3.page.study_plan.bc': {
    en: 'Study plan',
    ar: 'خطة الدراسة',
    es: 'Plan de estudio',
  },
  'ks3.page.vocabulary.bc': {
    en: 'Vocabulary',
    ar: 'المفردات',
    es: 'Vocabulario',
  },

  // Fiction sub-pages
  'ks3.page.fiction.genres.bc': {
    en: 'Fiction genres',
    ar: 'أنواع الأدب القصصي',
    es: 'Géneros de ficción',
  },
  'ks3.page.fiction.narrative_perspective.bc': {
    en: 'Narrative perspective',
    ar: 'منظور السرد',
    es: 'Perspectiva narrativa',
  },
  'ks3.page.fiction.reading_fiction.bc': {
    en: 'Reading fiction',
    ar: 'قراءة الأدب القصصي',
    es: 'Leer ficción',
  },

  // Practice sub-pages
  'ks3.page.practice.paper_1.bc': {
    en: 'Paper 1: Survival',
    ar: 'الورقة 1: البقاء',
    es: 'Examen 1: Supervivencia',
  },
  'ks3.page.practice.paper_2.bc': {
    en: 'Paper 2: Journeys',
    ar: 'الورقة 2: الرحلات',
    es: 'Examen 2: Viajes',
  },
  'ks3.page.practice.paper_3.bc': {
    en: 'Paper 3: The Natural World',
    ar: 'الورقة 3: العالم الطبيعي',
    es: 'Examen 3: El mundo natural',
  },
  'ks3.page.practice.paper_4.bc': {
    en: 'Paper 4: Courage',
    ar: 'الورقة 4: الشجاعة',
    es: 'Examen 4: Valentía',
  },
  'ks3.page.practice.paper_5.bc': {
    en: 'Paper 5: Change',
    ar: 'الورقة 5: التغيير',
    es: 'Examen 5: Cambio',
  },
  'ks3.page.practice.paper_6.bc': {
    en: 'Paper 6: Discovery',
    ar: 'الورقة 6: الاكتشاف',
    es: 'Examen 6: Descubrimiento',
  },
  'ks3.page.practice.writing_tasks.bc': {
    en: 'Writing task bank',
    ar: 'بنك مهام الكتابة',
    es: 'Banco de tareas de escritura',
  },

  // Question-types sub-pages
  'ks3.page.question_types.extended_comparison.bc': {
    en: 'Extended comparison',
    ar: 'المقارنة الموسّعة',
    es: 'Comparación extendida',
  },
  'ks3.page.question_types.feature_tables.bc': {
    en: 'Tables & closed questions',
    ar: 'الجداول والأسئلة المغلقة',
    es: 'Tablas y preguntas cerradas',
  },
  'ks3.page.question_types.meaning_impact.bc': {
    en: 'Meaning & impact',
    ar: 'المعنى والأثر',
    es: 'Significado e impacto',
  },
  'ks3.page.question_types.punctuation_effect.bc': {
    en: 'Punctuation effect',
    ar: 'علامات الترقيم للتأثير',
    es: 'Efecto de la puntuación',
  },
  'ks3.page.question_types.short_answer.bc': {
    en: 'Short answers',
    ar: 'الإجابات القصيرة',
    es: 'Respuestas cortas',
  },
  'ks3.page.question_types.synonym_vocabulary.bc': {
    en: 'Synonyms & vocabulary',
    ar: 'المرادفات والمفردات',
    es: 'Sinónimos y vocabulario',
  },

  // Reading sub-pages
  'ks3.page.reading.comparison.bc': {
    en: 'Comparison',
    ar: 'المقارنة',
    es: 'Comparación',
  },
  'ks3.page.reading.critical_response.bc': {
    en: 'Critical response',
    ar: 'الاستجابة النقدية',
    es: 'Respuesta crítica',
  },
  'ks3.page.reading.grammar_terminology.bc': {
    en: 'Grammar terminology',
    ar: 'مصطلحات القواعد',
    es: 'Terminología gramatical',
  },
  'ks3.page.reading.inference.bc': {
    en: 'Inference (RAO2)',
    ar: 'الاستنتاج (RAO2)',
    es: 'Inferencia (RAO2)',
  },
  'ks3.page.reading.language.bc': {
    en: 'Language (RAO4)',
    ar: 'اللغة (RAO4)',
    es: 'Lenguaje (RAO4)',
  },
  'ks3.page.reading.purpose_viewpoint.bc': {
    en: 'Purpose & viewpoint (RAO5)',
    ar: 'الغرض ووجهة النظر (RAO5)',
    es: 'Propósito y punto de vista (RAO5)',
  },
  'ks3.page.reading.retrieval.bc': {
    en: 'Retrieval',
    ar: 'استخراج المعلومات',
    es: 'Recuperación de información',
  },
  'ks3.page.reading.structure.bc': {
    en: 'Structure & organisation (RAO3)',
    ar: 'البنية والتنظيم (RAO3)',
    es: 'Estructura y organización (RAO3)',
  },

  // Reference sub-pages
  'ks3.page.reference.command_words.bc': {
    en: 'Command words',
    ar: 'كلمات الأوامر',
    es: 'Palabras de instrucción',
  },
  'ks3.page.reference.connectives.bc': {
    en: 'Connectives bank',
    ar: 'بنك أدوات الربط',
    es: 'Banco de conectores',
  },
  'ks3.page.reference.sentence_openers.bc': {
    en: 'Sentence openers',
    ar: 'مفتتحات الجمل',
    es: 'Inicios de oración',
  },
  'ks3.page.reference.spelling_punctuation.bc': {
    en: 'Spelling & punctuation',
    ar: 'الإملاء وعلامات الترقيم',
    es: 'Ortografía y puntuación',
  },

  // Text-types sub-pages
  'ks3.page.text_types.articles.bc': {
    en: 'Newspaper & magazine articles',
    ar: 'مقالات الصحف والمجلات',
    es: 'Artículos de periódico y revista',
  },
  'ks3.page.text_types.autobiography_biography.bc': {
    en: 'Autobiography & biography',
    ar: 'السيرة الذاتية والسيرة الغيرية',
    es: 'Autobiografía y biografía',
  },
  'ks3.page.text_types.blogs_journals.bc': {
    en: 'Blogs & journals',
    ar: 'المدونات واليوميات',
    es: 'Blogs y diarios',
  },
  'ks3.page.text_types.instructions.bc': {
    en: 'Instructions',
    ar: 'التعليمات',
    es: 'Instrucciones',
  },
  'ks3.page.text_types.leaflets_brochures_guides.bc': {
    en: 'Leaflets, brochures & guides',
    ar: 'النشرات والكتيّبات والأدلة',
    es: 'Folletos, catálogos y guías',
  },
  'ks3.page.text_types.purposes.bc': {
    en: 'Purposes',
    ar: 'الأغراض',
    es: 'Propósitos',
  },
  'ks3.page.text_types.recount.bc': {
    en: 'Recount',
    ar: 'السرد الإخباري',
    es: 'Relato de hechos',
  },
  'ks3.page.text_types.reports.bc': {
    en: 'Reports',
    ar: 'التقارير',
    es: 'Informes',
  },

  // Writing-skills sub-pages
  'ks3.page.writing.form_audience_purpose.bc': {
    en: 'Form, audience & purpose',
    ar: 'الشكل والجمهور والغرض',
    es: 'Forma, público y propósito',
  },
  'ks3.page.writing.grammar_punctuation_spelling.bc': {
    en: 'Grammar, punctuation & spelling',
    ar: 'القواعد وعلامات الترقيم والإملاء',
    es: 'Gramática, puntuación y ortografía',
  },
  'ks3.page.writing.planning_proofreading.bc': {
    en: 'Planning & proofreading',
    ar: 'التخطيط والمراجعة',
    es: 'Planificación y corrección',
  },
  'ks3.page.writing.section_b_task.bc': {
    en: 'The Section B task',
    ar: 'مهمة القسم B',
    es: 'La tarea de la Sección B',
  },
  'ks3.page.writing.sentence_variety.bc': {
    en: 'Sentence variety',
    ar: 'تنويع الجمل',
    es: 'Variedad de oraciones',
  },
  'ks3.page.writing.structure_organisation.bc': {
    en: 'Structure & organisation',
    ar: 'البنية والتنظيم',
    es: 'Estructura y organización',
  },
  'ks3.page.writing.vocabulary_cohesion.bc': {
    en: 'Vocabulary & cohesion',
    ar: 'المفردات والترابط',
    es: 'Vocabulario y cohesión',
  },

  // Writing-forms sub-pages
  'ks3.page.writing_forms.letter_diary.bc': {
    en: 'Letter & diary',
    ar: 'الرسالة واليوميات',
    es: 'Carta y diario',
  },
  'ks3.page.writing_forms.narrative_descriptive.bc': {
    en: 'Narrative & descriptive',
    ar: 'السرد والوصف',
    es: 'Narrativo y descriptivo',
  },
  'ks3.page.writing_forms.recount_newsletter_biography.bc': {
    en: 'Recount, newsletter & biography',
    ar: 'السرد الإخباري والنشرة والسيرة',
    es: 'Relato, boletín y biografía',
  },
}
