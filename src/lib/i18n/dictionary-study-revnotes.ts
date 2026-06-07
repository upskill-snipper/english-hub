/**
 * dictionary-study-revnotes.ts
 *
 * Curated EN + Khaleeji (Gulf) Arabic for the UI CHROME of the
 * /resources/revision-notes/** study pages.
 *
 * SCOPE: ONLY chrome — navigation, buttons/CTAs, short section
 * headings/labels, tab/nav-chip labels, the page hero/intro sell copy,
 * and alt/aria text. The actual teaching prose, quotations, character
 * analysis, model-answer essay text, examiner commentary and AO/mark-
 * scheme descriptors are STUDY CONTENT and are intentionally NOT in this
 * shard — they stay English in the page source.
 *
 * Brand/tech/title/author terms stay Latin: The English Hub, GCSE, IGCSE,
 * A-Level, AQA, OCR, Edexcel, Eduqas, CAIE, Cambridge, WJEC, AO1–AO6, £,
 * numbers, text titles (Macbeth, Hamlet, An Inspector Calls…), author
 * names (Shakespeare, Dickens, Steinbeck…), and literary-device terms
 * (volta, caesura, soliloquy, iambic pentameter…).
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/
 * روح/شوف/دوّر/سكّر/ببلاش/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * NOTE: annotated Record (NOT `as const`) so the orchestrator can merge it
 * via lookup() in dictionary.ts. Do NOT edit dictionary.ts here.
 */

export const STUDY_REVNOTES_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Shared recurring CHROME labels (study.revnotes.common.*) ──────────
  // Section headings (the heading is chrome; the prose beneath stays English).
  'study.revnotes.common.plot_summary': {
    en: 'Plot Summary',
    ar: 'ملخّص الأحداث',
    es: 'Resumen del argumento',
  },
  'study.revnotes.common.plot_summary_act': {
    en: 'Act-by-Act Plot Summary',
    ar: 'ملخّص الأحداث فصل بفصل',
    es: 'Resumen del argumento acto por acto',
  },
  'study.revnotes.common.plot_summary_key_events': {
    en: 'Plot Summary by Key Events',
    ar: 'ملخّص الأحداث حسب المشاهد المهمة',
    es: 'Resumen del argumento por hechos clave',
  },
  'study.revnotes.common.chapter_summary': {
    en: 'Chapter-by-Chapter Summary',
    ar: 'ملخّص فصل بفصل',
    es: 'Resumen capítulo por capítulo',
  },
  'study.revnotes.common.chapter_summaries': {
    en: 'Chapter Summaries',
    ar: 'ملخّصات الفصول',
    es: 'Resúmenes de capítulos',
  },
  'study.revnotes.common.scene_summary': {
    en: 'Scene-by-Scene Summary',
    ar: 'ملخّص مشهد بمشهد',
    es: 'Resumen escena por escena',
  },
  'study.revnotes.common.characters': { en: 'Characters', ar: 'الشخصيات', es: 'Personajes' },
  'study.revnotes.common.character_profiles': {
    en: 'Character Profiles',
    ar: 'ملفّات الشخصيات',
    es: 'Perfiles de personajes',
  },
  'study.revnotes.common.character_analysis': {
    en: 'Character Analysis',
    ar: 'تحليل الشخصيات',
    es: 'Análisis de personajes',
  },
  'study.revnotes.common.themes': { en: 'Themes', ar: 'الثيمات', es: 'Temas' },
  'study.revnotes.common.key_themes': {
    en: 'Key Themes',
    ar: 'الثيمات الأساسية',
    es: 'Temas clave',
  },
  'study.revnotes.common.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'study.revnotes.common.context_hist_lit': {
    en: 'Historical and Literary Context',
    ar: 'السياق التاريخي والأدبي',
    es: 'Contexto histórico y literario',
  },
  'study.revnotes.common.context_hist_lit_amp': {
    en: 'Historical & Literary Context',
    ar: 'السياق التاريخي والأدبي',
    es: 'Contexto histórico y literario',
  },
  'study.revnotes.common.context_hist_theatrical': {
    en: 'Historical and Theatrical Context',
    ar: 'السياق التاريخي والمسرحي',
    es: 'Contexto histórico y teatral',
  },
  'study.revnotes.common.context_hist_social': {
    en: 'Historical and Social Context',
    ar: 'السياق التاريخي والاجتماعي',
    es: 'Contexto histórico y social',
  },
  'study.revnotes.common.key_quotes': { en: 'Key Quotes', ar: 'أهم الاقتباسات', es: 'Citas clave' },
  'study.revnotes.common.key_quotations': {
    en: 'Key Quotations',
    ar: 'أهم الاقتباسات',
    es: 'Citas clave',
  },
  'study.revnotes.common.key_quotations_analysis': {
    en: 'Key Quotations with Analysis',
    ar: 'أهم الاقتباسات مع التحليل',
    es: 'Citas clave con análisis',
  },
  'study.revnotes.common.essay_planning': {
    en: 'Essay Planning',
    ar: 'تخطيط المقال',
    es: 'Planificación del ensayo',
  },
  'study.revnotes.common.essay_planning_common': {
    en: 'Essay Planning for Common Questions',
    ar: 'تخطيط المقال للأسئلة الشائعة',
    es: 'Planificación del ensayo para preguntas habituales',
  },
  'study.revnotes.common.writers_methods': {
    en: "Writer's Methods",
    ar: 'أساليب الكاتب',
    es: 'Métodos del escritor',
  },
  'study.revnotes.common.writers_methods_tech': {
    en: "Writer's Methods & Techniques",
    ar: 'أساليب الكاتب وتقنياته',
    es: 'Métodos y técnicas del escritor',
  },
  'study.revnotes.common.grade_9_points': {
    en: 'Grade 9 Points',
    ar: 'نقاط Grade 9',
    es: 'Puntos de Grade 9',
  },
  'study.revnotes.common.grade_9_exemplar': {
    en: 'Grade 9 Exemplar Points',
    ar: 'نقاط نموذجية لـ Grade 9',
    es: 'Puntos modelo de Grade 9',
  },
  'study.revnotes.common.exam_questions': {
    en: 'Exam Questions',
    ar: 'أسئلة الامتحان',
    es: 'Preguntas de examen',
  },
  'study.revnotes.common.exam_questions_outlines': {
    en: 'Exam-Style Questions with Model Answer Outlines',
    ar: 'أسئلة على نمط الامتحان مع مخطّطات إجابة نموذجية',
    es: 'Preguntas de tipo examen con esquemas de respuesta modelo',
  },
  'study.revnotes.common.practice_questions': {
    en: 'Practice Questions',
    ar: 'أسئلة تدريبية',
    es: 'Preguntas de práctica',
  },
  'study.revnotes.common.symbols': { en: 'Symbols', ar: 'الرموز', es: 'Símbolos' },
  'study.revnotes.common.symbolism': { en: 'Symbolism', ar: 'الرمزية', es: 'Simbolismo' },
  'study.revnotes.common.symbols_stage': {
    en: 'Symbols and Stage Properties',
    ar: 'الرموز وعناصر المسرح',
    es: 'Símbolos y elementos escénicos',
  },
  'study.revnotes.common.dramatic_devices': {
    en: 'Dramatic Devices',
    ar: 'الأدوات الدرامية',
    es: 'Recursos dramáticos',
  },
  'study.revnotes.common.act_summary': {
    en: 'Act-by-Act Summary',
    ar: 'ملخّص فصل بفصل',
    es: 'Resumen acto por acto',
  },
  'study.revnotes.common.part_summary': {
    en: 'Part-by-Part Summary',
    ar: 'ملخّص جزء بجزء',
    es: 'Resumen parte por parte',
  },
  'study.revnotes.common.three_stage_plot': {
    en: 'Three-Stage Plot Summary',
    ar: 'ملخّص الأحداث في ثلاث مراحل',
    es: 'Resumen del argumento en tres etapas',
  },

  // Small inline labels.
  'study.revnotes.common.jump_to_section': {
    en: 'Jump to section:',
    ar: 'انتقل للقسم:',
    es: 'Ir a la sección:',
  },
  'study.revnotes.common.page_sections_aria': {
    en: 'Page sections',
    ar: 'أقسام الصفحة',
    es: 'Secciones de la página',
  },
  'study.revnotes.common.key_moments': {
    en: 'Key Moments',
    ar: 'اللحظات المهمة',
    es: 'Momentos clave',
  },
  'study.revnotes.common.key_scenes': {
    en: 'Key Scenes',
    ar: 'المشاهد المهمة',
    es: 'Escenas clave',
  },
  'study.revnotes.common.key_points_to_cover': {
    en: 'Key points to cover:',
    ar: 'النقاط المهمة اللي تغطّيها:',
    es: 'Puntos clave que tratar:',
  },
  'study.revnotes.common.plan': { en: 'Plan', ar: 'الخطة', es: 'Plan' },
  'study.revnotes.common.paragraph_1': { en: 'Paragraph 1', ar: 'الفقرة ١', es: 'Párrafo 1' },
  'study.revnotes.common.paragraph_2': { en: 'Paragraph 2', ar: 'الفقرة ٢', es: 'Párrafo 2' },
  'study.revnotes.common.paragraph_3': { en: 'Paragraph 3', ar: 'الفقرة ٣', es: 'Párrafo 3' },
  'study.revnotes.common.your_answer': { en: 'Your answer', ar: 'إجابتك', es: 'Tu respuesta' },
  'study.revnotes.common.essay_placeholder': {
    en: 'Write your essay response here...',
    ar: 'اكتب إجابتك للمقال هنا…',
    es: 'Escribe aquí la respuesta de tu ensayo...',
  },
  'study.revnotes.common.back': {
    en: 'Back to Revision Notes',
    ar: 'رجوع لملخّصات المراجعة',
    es: 'Volver a las notas de repaso',
  },
  'study.revnotes.common.eyebrow': {
    en: 'GCSE English Literature — Revision Notes',
    ar: 'GCSE English Literature — ملخّصات المراجعة',
    es: 'GCSE English Literature: Notas de repaso',
  },
  'study.revnotes.common.eyebrow_gcse_lit': {
    en: 'GCSE English Literature',
    ar: 'GCSE English Literature',
    es: 'GCSE English Literature',
  },

  // Nav-chip / quick-nav LABELS (href is derived separately so labels are
  // safe to translate). These mirror the section headings above but exist as
  // standalone nav labels on a few pages.
  'study.revnotes.common.nav.plot_summary': {
    en: 'Plot Summary',
    ar: 'ملخّص الأحداث',
    es: 'Resumen del argumento',
  },
  'study.revnotes.common.nav.chapter_summaries': {
    en: 'Chapter Summaries',
    ar: 'ملخّصات الفصول',
    es: 'Resúmenes de capítulos',
  },
  'study.revnotes.common.nav.characters': { en: 'Characters', ar: 'الشخصيات', es: 'Personajes' },
  'study.revnotes.common.nav.themes': { en: 'Themes', ar: 'الثيمات', es: 'Temas' },
  'study.revnotes.common.nav.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'study.revnotes.common.nav.key_quotations': {
    en: 'Key Quotations',
    ar: 'أهم الاقتباسات',
    es: 'Citas clave',
  },
  'study.revnotes.common.nav.key_quotes': {
    en: 'Key Quotes',
    ar: 'أهم الاقتباسات',
    es: 'Citas clave',
  },
  'study.revnotes.common.nav.exam_questions': {
    en: 'Exam Questions',
    ar: 'أسئلة الامتحان',
    es: 'Preguntas de examen',
  },
  'study.revnotes.common.nav.essay_planning': {
    en: 'Essay Planning',
    ar: 'تخطيط المقال',
    es: 'Planificación del ensayo',
  },
  'study.revnotes.common.nav.writers_methods': {
    en: "Writer's Methods",
    ar: 'أساليب الكاتب',
    es: 'Métodos del escritor',
  },
  'study.revnotes.common.nav.grade_9_points': {
    en: 'Grade 9 Points',
    ar: 'نقاط Grade 9',
    es: 'Puntos de Grade 9',
  },
  'study.revnotes.common.nav.practice_questions': {
    en: 'Practice Questions',
    ar: 'أسئلة تدريبية',
    es: 'Preguntas de práctica',
  },
  'study.revnotes.common.nav.symbols': { en: 'Symbols', ar: 'الرموز', es: 'Símbolos' },
  'study.revnotes.common.nav.symbolism': { en: 'Symbolism', ar: 'الرمزية', es: 'Simbolismo' },
  'study.revnotes.common.nav.plot_summary_short': {
    en: 'Plot Summary',
    ar: 'ملخّص الأحداث',
    es: 'Resumen del argumento',
  },
  'study.revnotes.common.nav.scene_summaries': {
    en: 'Scene Summaries',
    ar: 'ملخّصات المشاهد',
    es: 'Resúmenes de escenas',
  },
  'study.revnotes.common.nav.part_summaries': {
    en: 'Part Summaries',
    ar: 'ملخّصات الأجزاء',
    es: 'Resúmenes de partes',
  },
  'study.revnotes.common.nav.dramatic_devices': {
    en: 'Dramatic Devices',
    ar: 'الأدوات الدرامية',
    es: 'Recursos dramáticos',
  },
  'study.revnotes.common.nav.seven_commandments': {
    en: 'Seven Commandments',
    ar: 'الوصايا السبع',
    es: 'Los Siete Mandamientos',
  },
  'study.revnotes.common.nav.allegory': { en: 'Allegory', ar: 'الرمزية', es: 'Alegoría' },

  // Per-page unique section headings (chrome).
  'study.revnotes.animal-farm.sec.characters': {
    en: 'Character Analysis & Allegory Mapping',
    ar: 'تحليل الشخصيات وربط الرموز',
    es: 'Análisis de personajes y correspondencias alegóricas',
  },
  'study.revnotes.animal-farm.sec.seven_commandments': {
    en: 'The Seven Commandments: How They Change',
    ar: 'الوصايا السبع: كيف تتغيّر',
    es: 'Los Siete Mandamientos: cómo cambian',
  },
  'study.revnotes.animal-farm.sec.allegory': {
    en: 'Allegory Mapping: Animal Farm & the Russian Revolution',
    ar: 'ربط الرموز: Animal Farm والثورة الروسية',
    es: 'Correspondencias alegóricas: Animal Farm y la Revolución rusa',
  },

  // Hero title suffixes (the text TITLE stays Latin; only the descriptive
  // "— Complete Study Guide" sell suffix is chrome).
  'study.revnotes.common.suffix.study_guide': {
    en: 'Complete Study Guide',
    ar: 'دليل مراجعة كامل',
    es: 'Guía de estudio completa',
  },
  'study.revnotes.common.suffix.revision_guide': {
    en: 'Complete Revision Guide',
    ar: 'دليل مراجعة كامل',
    es: 'Guía de repaso completa',
  },
  'study.revnotes.common.suffix.alevel_revision_guide': {
    en: 'A-Level Revision Guide',
    ar: 'دليل مراجعة A-Level',
    es: 'Guía de repaso de A-Level',
  },
  'study.revnotes.common.suffix.alevel_complete_revision_guide': {
    en: 'Complete A-Level Revision Guide',
    ar: 'دليل مراجعة A-Level كامل',
    es: 'Guía de repaso completa de A-Level',
  },

  // Generic exam-tips heading: "Exam Tips for <Title>" — split so the title
  // stays Latin. Page renders: `{tip_for} {Title}`.
  'study.revnotes.common.exam_tips_for': {
    en: 'Exam Tips for',
    ar: 'نصائح امتحان لـ',
    es: 'Consejos de examen para',
  },

  // ─── Hub hero "How to use" heading (the bullet study-tips stay English) ──
  'study.revnotes.hub.how_to_use': {
    en: 'How to use these revision notes',
    ar: 'كيف تستفيد من ملخّصات المراجعة هذي',
    es: 'Cómo usar estas notas de repaso',
  },

  // Hub category headings + descriptions (navigational chrome).
  'study.revnotes.hub.cat.shakespeare': { en: 'Shakespeare', ar: 'Shakespeare', es: 'Shakespeare' },
  'study.revnotes.hub.cat.shakespeare.desc': {
    en: 'Plays studied for the Shakespeare component of GCSE Literature',
    ar: 'مسرحيات تُدرَس لقسم Shakespeare في GCSE Literature',
    es: 'Obras de teatro estudiadas para el componente de Shakespeare de GCSE Literature',
  },
  'study.revnotes.hub.cat.nineteenth': {
    en: '19th-Century Novels',
    ar: 'روايات القرن الـ19',
    es: 'Novelas del siglo XIX',
  },
  'study.revnotes.hub.cat.nineteenth.desc': {
    en: 'Novels from the 1800s studied for the prose component',
    ar: 'روايات من القرن الـ1800 تُدرَس لقسم النثر',
    es: 'Novelas del siglo XIX estudiadas para el componente de prosa',
  },
  'study.revnotes.hub.cat.modern': {
    en: 'Modern Texts',
    ar: 'النصوص الحديثة',
    es: 'Textos modernos',
  },
  'study.revnotes.hub.cat.modern.desc': {
    en: '20th-century plays and novels studied for the modern text component',
    ar: 'مسرحيات وروايات من القرن الـ20 تُدرَس لقسم النص الحديث',
    es: 'Obras de teatro y novelas del siglo XX estudiadas para el componente de texto moderno',
  },
  'study.revnotes.hub.cat.poetry': {
    en: 'Poetry Anthologies',
    ar: 'مجموعات شعرية',
    es: 'Antologías de poesía',
  },
  'study.revnotes.hub.cat.poetry.desc': {
    en: 'Set poetry collections studied for the poetry component of GCSE Literature',
    ar: 'مجموعات شعرية مقرّرة تُدرَس لقسم الشعر في GCSE Literature',
    es: 'Colecciones de poesía obligatorias estudiadas para el componente de poesía de GCSE Literature',
  },

  // Hub text-type badges (chrome labels).
  'study.revnotes.hub.type.play': { en: 'Play', ar: 'مسرحية', es: 'Obra de teatro' },
  'study.revnotes.hub.type.novel': { en: 'Novel', ar: 'رواية', es: 'Novela' },
  'study.revnotes.hub.type.novella': { en: 'Novella', ar: 'رواية قصيرة', es: 'Novela corta' },
  'study.revnotes.hub.type.allegory': { en: 'Allegory', ar: 'عمل رمزي', es: 'Alegoría' },
  'study.revnotes.hub.type.anthology': { en: 'Anthology', ar: 'مجموعة', es: 'Antología' },

  // ─── [slug] "in production" placeholder page (server) ───────────────────
  'study.revnotes.slug.back': {
    en: 'Back to all revision notes',
    ar: 'رجوع لكل ملخّصات المراجعة',
    es: 'Volver a todas las notas de repaso',
  },
  'study.revnotes.slug.in_production': {
    en: 'In production',
    ar: 'قيد الإعداد',
    es: 'En producción',
  },
  'study.revnotes.slug.boards_one': {
    en: '1 exam board',
    ar: 'بورد امتحان واحد',
    es: '1 junta examinadora',
  },
  'study.revnotes.slug.by': { en: 'by', ar: 'بقلم', es: 'por' },
  'study.revnotes.slug.status_title': {
    en: 'Revision notes are being written',
    ar: 'ملخّصات المراجعة قيد الكتابة',
    es: 'Las notas de repaso se están redactando',
  },
  'study.revnotes.slug.what_now': {
    en: 'What you can do now',
    ar: 'شنو تقدر تسوّي الحين',
    es: 'Lo que puedes hacer ahora',
  },
  'study.revnotes.slug.card.guide.title': {
    en: 'Full study guide',
    ar: 'دليل المراجعة الكامل',
    es: 'Guía de estudio completa',
  },
  'study.revnotes.slug.card.guide.cta': {
    en: 'Open study guide',
    ar: 'افتح دليل المراجعة',
    es: 'Abrir guía de estudio',
  },
  'study.revnotes.slug.card.texts.title': {
    en: 'Browse all set texts',
    ar: 'تصفّح كل النصوص المقرّرة',
    es: 'Explorar todos los textos obligatorios',
  },
  'study.revnotes.slug.card.texts.desc': {
    en: 'Every text on every board with the revision notes that are already published.',
    ar: 'كل نص على كل بورد مع ملخّصات المراجعة المنشورة حاليًا.',
    es: 'Todos los textos de todas las juntas con las notas de repaso ya publicadas.',
  },
  'study.revnotes.slug.card.texts.cta': {
    en: 'Browse set texts',
    ar: 'تصفّح النصوص المقرّرة',
    es: 'Explorar textos obligatorios',
  },
  'study.revnotes.slug.card.marking.title': {
    en: 'AI essay marking',
    ar: 'تصحيح المقالات بالـ AI',
    es: 'Corrección de ensayos con IA',
  },
  'study.revnotes.slug.card.marking.cta': {
    en: 'Submit essay',
    ar: 'أرسل المقال',
    es: 'Enviar ensayo',
  },
  'study.revnotes.slug.card.hub.title': { en: 'Your hub', ar: 'مركزك', es: 'Tu centro' },
  'study.revnotes.slug.card.hub.desc': {
    en: 'Personalised revision plan, mock papers, and progress for your exam board.',
    ar: 'خطة مراجعة مخصّصة، امتحانات تجريبية، وتقدّمك حسب بورد الامتحان مالك.',
    es: 'Plan de repaso personalizado, exámenes simulados y progreso para tu junta examinadora.',
  },
  'study.revnotes.slug.card.hub.cta': {
    en: 'Open your hub',
    ar: 'افتح مركزك',
    es: 'Abrir tu centro',
  },

  // ─── Per-page hero leads (page-selling intro copy = chrome) ─────────────
  // Author names + years stay Latin inside the Arabic sentence.
  'study.revnotes.animal-farm.lead': {
    en: "George Orwell's 1945 allegorical novella. Chapter summaries, character analysis, themes, allegory mapping, 25+ key quotations, the Seven Commandments, context, and essay planning.",
    ar: 'رواية George Orwell الرمزية القصيرة من 1945. ملخّصات الفصول، تحليل الشخصيات، الثيمات، ربط الرموز، أكثر من 25 اقتباس مهم، الوصايا السبع، السياق، وتخطيط المقال.',
    es: 'La novela corta alegórica de George Orwell de 1945. Resúmenes de capítulos, análisis de personajes, temas, correspondencias alegóricas, más de 25 citas clave, los Siete Mandamientos, contexto y planificación del ensayo.',
  },
  'study.revnotes.blood-brothers.lead': {
    en: "Willy Russell's 1983 musical play. Act-by-act summaries, character analysis, themes, 22 key quotations with analysis, dramatic devices, context, and essay planning.",
    ar: 'مسرحية Willy Russell الغنائية من 1983. ملخّصات فصل بفصل، تحليل الشخصيات، الثيمات، 22 اقتباس مهم مع التحليل، الأدوات الدرامية، السياق، وتخطيط المقال.',
    es: 'La obra musical de Willy Russell de 1983. Resúmenes acto por acto, análisis de personajes, temas, 22 citas clave con análisis, recursos dramáticos, contexto y planificación del ensayo.',
  },
  'study.revnotes.great-expectations.lead': {
    en: "Charles Dickens's 1861 Bildungsroman. Three-stage plot summary, character analysis, themes, 25+ key quotations with analysis, Victorian context, and essay planning.",
    ar: 'رواية Charles Dickens (Bildungsroman) من 1861. ملخّص الأحداث في ثلاث مراحل، تحليل الشخصيات، الثيمات، أكثر من 25 اقتباس مهم مع التحليل، السياق الفيكتوري، وتخطيط المقال.',
    es: 'El Bildungsroman de Charles Dickens de 1861. Resumen del argumento en tres etapas, análisis de personajes, temas, más de 25 citas clave con análisis, contexto victoriano y planificación del ensayo.',
  },
  'study.revnotes.lord-of-the-flies.lead': {
    en: "William Golding's 1954 novel. Chapter summaries, character analysis, themes, 25+ key quotations with analysis, symbolism, context, and essay planning.",
    ar: 'رواية William Golding من 1954. ملخّصات الفصول، تحليل الشخصيات، الثيمات، أكثر من 25 اقتباس مهم مع التحليل، الرمزية، السياق، وتخطيط المقال.',
    es: 'La novela de William Golding de 1954. Resúmenes de capítulos, análisis de personajes, temas, más de 25 citas clave con análisis, simbolismo, contexto y planificación del ensayo.',
  },
  'study.revnotes.much-ado-about-nothing.lead': {
    en: 'Scene-by-scene summary, 8 character analyses, 5 key themes, 20+ quotations with detailed analysis, historical context, and essay planning.',
    ar: 'ملخّص مشهد بمشهد، تحليل 8 شخصيات، 5 ثيمات أساسية، أكثر من 20 اقتباس مع تحليل مفصّل، السياق التاريخي، وتخطيط المقال.',
    es: 'Resumen escena por escena, análisis de 8 personajes, 5 temas clave, más de 20 citas con análisis detallado, contexto histórico y planificación del ensayo.',
  },
  'study.revnotes.never-let-me-go.lead': {
    en: "Kazuo Ishiguro's 2005 dystopian novel. Part-by-part summaries, character analysis, themes, key quotations with analysis, historical and literary context, and essay planning.",
    ar: 'رواية Kazuo Ishiguro الديستوبية من 2005. ملخّصات جزء بجزء، تحليل الشخصيات، الثيمات، اقتباسات مهمة مع التحليل، السياق التاريخي والأدبي، وتخطيط المقال.',
    es: 'La novela distópica de Kazuo Ishiguro de 2005. Resúmenes parte por parte, análisis de personajes, temas, citas clave con análisis, contexto histórico y literario, y planificación del ensayo.',
  },
  'study.revnotes.of-mice-and-men.lead': {
    en: "John Steinbeck's 1937 novella. Chapter summaries, character analysis, themes, 20 key quotations with analysis, historical context, writer's methods, and essay planning.",
    ar: 'رواية John Steinbeck القصيرة من 1937. ملخّصات الفصول، تحليل الشخصيات، الثيمات، 20 اقتباس مهم مع التحليل، السياق التاريخي، أساليب الكاتب، وتخطيط المقال.',
    es: 'La novela corta de John Steinbeck de 1937. Resúmenes de capítulos, análisis de personajes, temas, 20 citas clave con análisis, contexto histórico, métodos del escritor y planificación del ensayo.',
  },
  'study.revnotes.hamlet.lead': {
    en: 'Everything you need for GCSE and A-Level. Act-by-act plot, character profiles, themes with evidence, 20+ pivotal quotations with analysis, Elizabethan and Jacobean context, and exam-style questions with planning notes.',
    ar: 'كل اللي تحتاجه لـ GCSE و A-Level. الأحداث فصل بفصل، ملفّات الشخصيات، الثيمات مع الأدلة، أكثر من 20 اقتباس محوري مع التحليل، السياق الإليزابيثي والجاكوبي، وأسئلة على نمط الامتحان مع ملاحظات التخطيط.',
    es: 'Todo lo que necesitas para GCSE y A-Level. Argumento acto por acto, perfiles de personajes, temas con evidencias, más de 20 citas fundamentales con análisis, contexto isabelino y jacobeo, y preguntas de tipo examen con notas de planificación.',
  },
}
