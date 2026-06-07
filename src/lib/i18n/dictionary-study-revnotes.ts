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

export const STUDY_REVNOTES_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // ─── Shared recurring CHROME labels (study.revnotes.common.*) ──────────
  // Section headings (the heading is chrome; the prose beneath stays English).
  'study.revnotes.common.plot_summary': { en: 'Plot Summary', ar: 'ملخّص الأحداث' },
  'study.revnotes.common.plot_summary_act': {
    en: 'Act-by-Act Plot Summary',
    ar: 'ملخّص الأحداث فصل بفصل',
  },
  'study.revnotes.common.plot_summary_key_events': {
    en: 'Plot Summary by Key Events',
    ar: 'ملخّص الأحداث حسب المشاهد المهمة',
  },
  'study.revnotes.common.chapter_summary': {
    en: 'Chapter-by-Chapter Summary',
    ar: 'ملخّص فصل بفصل',
  },
  'study.revnotes.common.chapter_summaries': { en: 'Chapter Summaries', ar: 'ملخّصات الفصول' },
  'study.revnotes.common.scene_summary': {
    en: 'Scene-by-Scene Summary',
    ar: 'ملخّص مشهد بمشهد',
  },
  'study.revnotes.common.characters': { en: 'Characters', ar: 'الشخصيات' },
  'study.revnotes.common.character_profiles': { en: 'Character Profiles', ar: 'ملفّات الشخصيات' },
  'study.revnotes.common.character_analysis': { en: 'Character Analysis', ar: 'تحليل الشخصيات' },
  'study.revnotes.common.themes': { en: 'Themes', ar: 'الثيمات' },
  'study.revnotes.common.key_themes': { en: 'Key Themes', ar: 'الثيمات الأساسية' },
  'study.revnotes.common.context': { en: 'Context', ar: 'السياق' },
  'study.revnotes.common.context_hist_lit': {
    en: 'Historical and Literary Context',
    ar: 'السياق التاريخي والأدبي',
  },
  'study.revnotes.common.context_hist_lit_amp': {
    en: 'Historical & Literary Context',
    ar: 'السياق التاريخي والأدبي',
  },
  'study.revnotes.common.context_hist_theatrical': {
    en: 'Historical and Theatrical Context',
    ar: 'السياق التاريخي والمسرحي',
  },
  'study.revnotes.common.context_hist_social': {
    en: 'Historical and Social Context',
    ar: 'السياق التاريخي والاجتماعي',
  },
  'study.revnotes.common.key_quotes': { en: 'Key Quotes', ar: 'أهم الاقتباسات' },
  'study.revnotes.common.key_quotations': { en: 'Key Quotations', ar: 'أهم الاقتباسات' },
  'study.revnotes.common.key_quotations_analysis': {
    en: 'Key Quotations with Analysis',
    ar: 'أهم الاقتباسات مع التحليل',
  },
  'study.revnotes.common.essay_planning': { en: 'Essay Planning', ar: 'تخطيط المقال' },
  'study.revnotes.common.essay_planning_common': {
    en: 'Essay Planning for Common Questions',
    ar: 'تخطيط المقال للأسئلة الشائعة',
  },
  'study.revnotes.common.writers_methods': {
    en: "Writer's Methods",
    ar: 'أساليب الكاتب',
  },
  'study.revnotes.common.writers_methods_tech': {
    en: "Writer's Methods & Techniques",
    ar: 'أساليب الكاتب وتقنياته',
  },
  'study.revnotes.common.grade_9_points': { en: 'Grade 9 Points', ar: 'نقاط Grade 9' },
  'study.revnotes.common.grade_9_exemplar': {
    en: 'Grade 9 Exemplar Points',
    ar: 'نقاط نموذجية لـ Grade 9',
  },
  'study.revnotes.common.exam_questions': { en: 'Exam Questions', ar: 'أسئلة الامتحان' },
  'study.revnotes.common.exam_questions_outlines': {
    en: 'Exam-Style Questions with Model Answer Outlines',
    ar: 'أسئلة على نمط الامتحان مع مخطّطات إجابة نموذجية',
  },
  'study.revnotes.common.practice_questions': {
    en: 'Practice Questions',
    ar: 'أسئلة تدريبية',
  },
  'study.revnotes.common.symbols': { en: 'Symbols', ar: 'الرموز' },
  'study.revnotes.common.symbolism': { en: 'Symbolism', ar: 'الرمزية' },
  'study.revnotes.common.symbols_stage': {
    en: 'Symbols and Stage Properties',
    ar: 'الرموز وعناصر المسرح',
  },
  'study.revnotes.common.dramatic_devices': { en: 'Dramatic Devices', ar: 'الأدوات الدرامية' },
  'study.revnotes.common.act_summary': { en: 'Act-by-Act Summary', ar: 'ملخّص فصل بفصل' },
  'study.revnotes.common.part_summary': { en: 'Part-by-Part Summary', ar: 'ملخّص جزء بجزء' },
  'study.revnotes.common.three_stage_plot': {
    en: 'Three-Stage Plot Summary',
    ar: 'ملخّص الأحداث في ثلاث مراحل',
  },

  // Small inline labels.
  'study.revnotes.common.jump_to_section': {
    en: 'Jump to section:',
    ar: 'انتقل للقسم:',
  },
  'study.revnotes.common.page_sections_aria': { en: 'Page sections', ar: 'أقسام الصفحة' },
  'study.revnotes.common.key_moments': { en: 'Key Moments', ar: 'اللحظات المهمة' },
  'study.revnotes.common.key_scenes': { en: 'Key Scenes', ar: 'المشاهد المهمة' },
  'study.revnotes.common.key_points_to_cover': {
    en: 'Key points to cover:',
    ar: 'النقاط المهمة اللي تغطّيها:',
  },
  'study.revnotes.common.plan': { en: 'Plan', ar: 'الخطة' },
  'study.revnotes.common.paragraph_1': { en: 'Paragraph 1', ar: 'الفقرة ١' },
  'study.revnotes.common.paragraph_2': { en: 'Paragraph 2', ar: 'الفقرة ٢' },
  'study.revnotes.common.paragraph_3': { en: 'Paragraph 3', ar: 'الفقرة ٣' },
  'study.revnotes.common.your_answer': { en: 'Your answer', ar: 'إجابتك' },
  'study.revnotes.common.essay_placeholder': {
    en: 'Write your essay response here...',
    ar: 'اكتب إجابتك للمقال هنا…',
  },
  'study.revnotes.common.back': { en: 'Back to Revision Notes', ar: 'رجوع لملخّصات المراجعة' },
  'study.revnotes.common.eyebrow': {
    en: 'GCSE English Literature — Revision Notes',
    ar: 'GCSE English Literature — ملخّصات المراجعة',
  },
  'study.revnotes.common.eyebrow_gcse_lit': {
    en: 'GCSE English Literature',
    ar: 'GCSE English Literature',
  },

  // Nav-chip / quick-nav LABELS (href is derived separately so labels are
  // safe to translate). These mirror the section headings above but exist as
  // standalone nav labels on a few pages.
  'study.revnotes.common.nav.plot_summary': { en: 'Plot Summary', ar: 'ملخّص الأحداث' },
  'study.revnotes.common.nav.chapter_summaries': {
    en: 'Chapter Summaries',
    ar: 'ملخّصات الفصول',
  },
  'study.revnotes.common.nav.characters': { en: 'Characters', ar: 'الشخصيات' },
  'study.revnotes.common.nav.themes': { en: 'Themes', ar: 'الثيمات' },
  'study.revnotes.common.nav.context': { en: 'Context', ar: 'السياق' },
  'study.revnotes.common.nav.key_quotations': { en: 'Key Quotations', ar: 'أهم الاقتباسات' },
  'study.revnotes.common.nav.key_quotes': { en: 'Key Quotes', ar: 'أهم الاقتباسات' },
  'study.revnotes.common.nav.exam_questions': { en: 'Exam Questions', ar: 'أسئلة الامتحان' },
  'study.revnotes.common.nav.essay_planning': { en: 'Essay Planning', ar: 'تخطيط المقال' },
  'study.revnotes.common.nav.writers_methods': {
    en: "Writer's Methods",
    ar: 'أساليب الكاتب',
  },
  'study.revnotes.common.nav.grade_9_points': { en: 'Grade 9 Points', ar: 'نقاط Grade 9' },
  'study.revnotes.common.nav.practice_questions': {
    en: 'Practice Questions',
    ar: 'أسئلة تدريبية',
  },
  'study.revnotes.common.nav.symbols': { en: 'Symbols', ar: 'الرموز' },
  'study.revnotes.common.nav.symbolism': { en: 'Symbolism', ar: 'الرمزية' },
  'study.revnotes.common.nav.plot_summary_short': { en: 'Plot Summary', ar: 'ملخّص الأحداث' },
  'study.revnotes.common.nav.scene_summaries': { en: 'Scene Summaries', ar: 'ملخّصات المشاهد' },
  'study.revnotes.common.nav.part_summaries': { en: 'Part Summaries', ar: 'ملخّصات الأجزاء' },
  'study.revnotes.common.nav.dramatic_devices': {
    en: 'Dramatic Devices',
    ar: 'الأدوات الدرامية',
  },
  'study.revnotes.common.nav.seven_commandments': {
    en: 'Seven Commandments',
    ar: 'الوصايا السبع',
  },
  'study.revnotes.common.nav.allegory': { en: 'Allegory', ar: 'الرمزية' },

  // Per-page unique section headings (chrome).
  'study.revnotes.animal-farm.sec.characters': {
    en: 'Character Analysis & Allegory Mapping',
    ar: 'تحليل الشخصيات وربط الرموز',
  },
  'study.revnotes.animal-farm.sec.seven_commandments': {
    en: 'The Seven Commandments: How They Change',
    ar: 'الوصايا السبع: كيف تتغيّر',
  },
  'study.revnotes.animal-farm.sec.allegory': {
    en: 'Allegory Mapping: Animal Farm & the Russian Revolution',
    ar: 'ربط الرموز: Animal Farm والثورة الروسية',
  },

  // Hero title suffixes (the text TITLE stays Latin; only the descriptive
  // "— Complete Study Guide" sell suffix is chrome).
  'study.revnotes.common.suffix.study_guide': {
    en: 'Complete Study Guide',
    ar: 'دليل مراجعة كامل',
  },
  'study.revnotes.common.suffix.revision_guide': {
    en: 'Complete Revision Guide',
    ar: 'دليل مراجعة كامل',
  },
  'study.revnotes.common.suffix.alevel_revision_guide': {
    en: 'A-Level Revision Guide',
    ar: 'دليل مراجعة A-Level',
  },
  'study.revnotes.common.suffix.alevel_complete_revision_guide': {
    en: 'Complete A-Level Revision Guide',
    ar: 'دليل مراجعة A-Level كامل',
  },

  // Generic exam-tips heading: "Exam Tips for <Title>" — split so the title
  // stays Latin. Page renders: `{tip_for} {Title}`.
  'study.revnotes.common.exam_tips_for': { en: 'Exam Tips for', ar: 'نصائح امتحان لـ' },

  // ─── Hub hero "How to use" heading (the bullet study-tips stay English) ──
  'study.revnotes.hub.how_to_use': {
    en: 'How to use these revision notes',
    ar: 'كيف تستفيد من ملخّصات المراجعة هذي',
  },

  // Hub category headings + descriptions (navigational chrome).
  'study.revnotes.hub.cat.shakespeare': { en: 'Shakespeare', ar: 'Shakespeare' },
  'study.revnotes.hub.cat.shakespeare.desc': {
    en: 'Plays studied for the Shakespeare component of GCSE Literature',
    ar: 'مسرحيات تُدرَس لقسم Shakespeare في GCSE Literature',
  },
  'study.revnotes.hub.cat.nineteenth': { en: '19th-Century Novels', ar: 'روايات القرن الـ19' },
  'study.revnotes.hub.cat.nineteenth.desc': {
    en: 'Novels from the 1800s studied for the prose component',
    ar: 'روايات من القرن الـ1800 تُدرَس لقسم النثر',
  },
  'study.revnotes.hub.cat.modern': { en: 'Modern Texts', ar: 'النصوص الحديثة' },
  'study.revnotes.hub.cat.modern.desc': {
    en: '20th-century plays and novels studied for the modern text component',
    ar: 'مسرحيات وروايات من القرن الـ20 تُدرَس لقسم النص الحديث',
  },
  'study.revnotes.hub.cat.poetry': { en: 'Poetry Anthologies', ar: 'مجموعات شعرية' },
  'study.revnotes.hub.cat.poetry.desc': {
    en: 'Set poetry collections studied for the poetry component of GCSE Literature',
    ar: 'مجموعات شعرية مقرّرة تُدرَس لقسم الشعر في GCSE Literature',
  },

  // Hub text-type badges (chrome labels).
  'study.revnotes.hub.type.play': { en: 'Play', ar: 'مسرحية' },
  'study.revnotes.hub.type.novel': { en: 'Novel', ar: 'رواية' },
  'study.revnotes.hub.type.novella': { en: 'Novella', ar: 'رواية قصيرة' },
  'study.revnotes.hub.type.allegory': { en: 'Allegory', ar: 'عمل رمزي' },
  'study.revnotes.hub.type.anthology': { en: 'Anthology', ar: 'مجموعة' },

  // ─── [slug] "in production" placeholder page (server) ───────────────────
  'study.revnotes.slug.back': {
    en: 'Back to all revision notes',
    ar: 'رجوع لكل ملخّصات المراجعة',
  },
  'study.revnotes.slug.in_production': { en: 'In production', ar: 'قيد الإعداد' },
  'study.revnotes.slug.boards_one': { en: '1 exam board', ar: 'بورد امتحان واحد' },
  'study.revnotes.slug.by': { en: 'by', ar: 'بقلم' },
  'study.revnotes.slug.status_title': {
    en: 'Revision notes are being written',
    ar: 'ملخّصات المراجعة قيد الكتابة',
  },
  'study.revnotes.slug.what_now': { en: 'What you can do now', ar: 'شنو تقدر تسوّي الحين' },
  'study.revnotes.slug.card.guide.title': { en: 'Full study guide', ar: 'دليل المراجعة الكامل' },
  'study.revnotes.slug.card.guide.cta': { en: 'Open study guide', ar: 'افتح دليل المراجعة' },
  'study.revnotes.slug.card.texts.title': {
    en: 'Browse all set texts',
    ar: 'تصفّح كل النصوص المقرّرة',
  },
  'study.revnotes.slug.card.texts.desc': {
    en: 'Every text on every board with the revision notes that are already published.',
    ar: 'كل نص على كل بورد مع ملخّصات المراجعة المنشورة حاليًا.',
  },
  'study.revnotes.slug.card.texts.cta': { en: 'Browse set texts', ar: 'تصفّح النصوص المقرّرة' },
  'study.revnotes.slug.card.marking.title': {
    en: 'AI essay marking',
    ar: 'تصحيح المقالات بالـ AI',
  },
  'study.revnotes.slug.card.marking.cta': { en: 'Submit essay', ar: 'أرسل المقال' },
  'study.revnotes.slug.card.hub.title': { en: 'Your hub', ar: 'مركزك' },
  'study.revnotes.slug.card.hub.desc': {
    en: 'Personalised revision plan, mock papers, and progress for your exam board.',
    ar: 'خطة مراجعة مخصّصة، امتحانات تجريبية، وتقدّمك حسب بورد الامتحان مالك.',
  },
  'study.revnotes.slug.card.hub.cta': { en: 'Open your hub', ar: 'افتح مركزك' },

  // ─── Per-page hero leads (page-selling intro copy = chrome) ─────────────
  // Author names + years stay Latin inside the Arabic sentence.
  'study.revnotes.animal-farm.lead': {
    en: "George Orwell's 1945 allegorical novella. Chapter summaries, character analysis, themes, allegory mapping, 25+ key quotations, the Seven Commandments, context, and essay planning.",
    ar: 'رواية George Orwell الرمزية القصيرة من 1945. ملخّصات الفصول، تحليل الشخصيات، الثيمات، ربط الرموز، أكثر من 25 اقتباس مهم، الوصايا السبع، السياق، وتخطيط المقال.',
  },
  'study.revnotes.blood-brothers.lead': {
    en: "Willy Russell's 1983 musical play. Act-by-act summaries, character analysis, themes, 22 key quotations with analysis, dramatic devices, context, and essay planning.",
    ar: 'مسرحية Willy Russell الغنائية من 1983. ملخّصات فصل بفصل، تحليل الشخصيات، الثيمات، 22 اقتباس مهم مع التحليل، الأدوات الدرامية، السياق، وتخطيط المقال.',
  },
  'study.revnotes.great-expectations.lead': {
    en: "Charles Dickens's 1861 Bildungsroman. Three-stage plot summary, character analysis, themes, 25+ key quotations with analysis, Victorian context, and essay planning.",
    ar: 'رواية Charles Dickens (Bildungsroman) من 1861. ملخّص الأحداث في ثلاث مراحل، تحليل الشخصيات، الثيمات، أكثر من 25 اقتباس مهم مع التحليل، السياق الفيكتوري، وتخطيط المقال.',
  },
  'study.revnotes.lord-of-the-flies.lead': {
    en: "William Golding's 1954 novel. Chapter summaries, character analysis, themes, 25+ key quotations with analysis, symbolism, context, and essay planning.",
    ar: 'رواية William Golding من 1954. ملخّصات الفصول، تحليل الشخصيات، الثيمات، أكثر من 25 اقتباس مهم مع التحليل، الرمزية، السياق، وتخطيط المقال.',
  },
  'study.revnotes.much-ado-about-nothing.lead': {
    en: 'Scene-by-scene summary, 8 character analyses, 5 key themes, 20+ quotations with detailed analysis, historical context, and essay planning.',
    ar: 'ملخّص مشهد بمشهد، تحليل 8 شخصيات، 5 ثيمات أساسية، أكثر من 20 اقتباس مع تحليل مفصّل، السياق التاريخي، وتخطيط المقال.',
  },
  'study.revnotes.never-let-me-go.lead': {
    en: "Kazuo Ishiguro's 2005 dystopian novel. Part-by-part summaries, character analysis, themes, key quotations with analysis, historical and literary context, and essay planning.",
    ar: 'رواية Kazuo Ishiguro الديستوبية من 2005. ملخّصات جزء بجزء، تحليل الشخصيات، الثيمات، اقتباسات مهمة مع التحليل، السياق التاريخي والأدبي، وتخطيط المقال.',
  },
  'study.revnotes.of-mice-and-men.lead': {
    en: "John Steinbeck's 1937 novella. Chapter summaries, character analysis, themes, 20 key quotations with analysis, historical context, writer's methods, and essay planning.",
    ar: 'رواية John Steinbeck القصيرة من 1937. ملخّصات الفصول، تحليل الشخصيات، الثيمات، 20 اقتباس مهم مع التحليل، السياق التاريخي، أساليب الكاتب، وتخطيط المقال.',
  },
  'study.revnotes.hamlet.lead': {
    en: 'Everything you need for GCSE and A-Level. Act-by-act plot, character profiles, themes with evidence, 20+ pivotal quotations with analysis, Elizabethan and Jacobean context, and exam-style questions with planning notes.',
    ar: 'كل اللي تحتاجه لـ GCSE و A-Level. الأحداث فصل بفصل، ملفّات الشخصيات، الثيمات مع الأدلة، أكثر من 20 اقتباس محوري مع التحليل، السياق الإليزابيثي والجاكوبي، وأسئلة على نمط الامتحان مع ملاحظات التخطيط.',
  },
}
