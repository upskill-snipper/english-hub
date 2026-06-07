/**
 * dictionary-rev-texts.ts
 *
 * Curated EN + Khaleeji (Gulf) Arabic + Spanish for the UI CHROME of the
 * /revision/texts/** set-text revision pages (Macbeth, An Inspector Calls,
 * Jekyll and Hyde, etc.).
 *
 * SCOPE: ONLY chrome — "Back to …" links, breadcrumbs, buttons/CTAs, short
 * generic section HEADINGS/labels ("Themes", "Analysis", "Key Quotes",
 * "Evidence by Act", "Essay Tip", "Overview", "Compare with"…), tab/nav
 * labels, the page hero/intro MARKETING copy, navigational card titles/
 * descriptions and alt/aria text. The actual teaching prose, quotations,
 * plot summaries, character studies, theme analysis, model answers and
 * examiner commentary are STUDY CONTENT and are intentionally NOT in this
 * shard — they stay English in the page source.
 *
 * Brand/tech/title/author terms stay Latin in BOTH ar and es: The English
 * Hub, GCSE, IGCSE, KS3, AQA, OCR, Edexcel, Eduqas, Cambridge, WJEC,
 * AO1–AO6, £, codes, text titles (Macbeth, An Inspector Calls…), author
 * names (Shakespeare, Dickens, Priestley…) and literary-device terms
 * (caesura, enjambment, volta, iambic pentameter…).
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/
 * روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * {tokens} are preserved exactly across all three languages.
 *
 * NOTE: annotated Record (NOT `as const`) so the orchestrator can merge it
 * via lookup() in dictionary.ts. Do NOT edit dictionary.ts here.
 */

export const REV_TEXTS_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Shared recurring CHROME labels (rev.texts.common.*) ────────────────
  // Generic section headings (heading is chrome; the prose beneath stays EN).
  'rev.texts.common.overview': { en: 'Overview', ar: 'نظرة عامة', es: 'Resumen' },
  'rev.texts.common.analysis': { en: 'Analysis', ar: 'تحليل', es: 'Análisis' },
  'rev.texts.common.key_quotes': {
    en: 'Key Quotes',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts.common.key_quotations': {
    en: 'Key Quotations',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts.common.themes': { en: 'Themes', ar: 'المحاور', es: 'Temas' },
  'rev.texts.common.theme_analysis': {
    en: 'Theme Analysis',
    ar: 'تحليل المحاور',
    es: 'Análisis de temas',
  },
  'rev.texts.common.characters': { en: 'Characters', ar: 'الشخصيات', es: 'Personajes' },
  'rev.texts.common.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'rev.texts.common.historical_context': {
    en: 'Historical Context',
    ar: 'السياق التاريخي',
    es: 'Contexto histórico',
  },
  'rev.texts.common.plot': { en: 'Plot', ar: 'الحبكة', es: 'Argumento' },
  'rev.texts.common.plot_summary': {
    en: 'Plot Summary',
    ar: 'ملخص الحبكة',
    es: 'Resumen del argumento',
  },
  'rev.texts.common.summary': { en: 'Summary', ar: 'ملخص', es: 'Resumen' },
  'rev.texts.common.evidence_by_act': {
    en: 'Evidence by Act',
    ar: 'الأدلة حسب الفصل',
    es: 'Evidencia por acto',
  },
  'rev.texts.common.essay_tip': {
    en: 'Essay Tip',
    ar: 'نصيحة للمقال',
    es: 'Consejo para el ensayo',
  },
  'rev.texts.common.essay_tips': {
    en: 'Essay Tips',
    ar: 'نصائح للمقال',
    es: 'Consejos para el ensayo',
  },
  'rev.texts.common.essay_plans': {
    en: 'Essay Plans',
    ar: 'خطط المقالات',
    es: 'Planes de ensayo',
  },
  'rev.texts.common.exam_tip': {
    en: 'Exam Tip',
    ar: 'نصيحة للامتحان',
    es: 'Consejo para el examen',
  },
  'rev.texts.common.quick_revise': {
    en: 'Quick revise',
    ar: 'مراجعة سريعة',
    es: 'Repaso rápido',
  },
  'rev.texts.common.compare_with': { en: 'Compare with', ar: 'قارن مع', es: 'Compara con' },
  // Nav / CTA chrome.
  'rev.texts.common.back_to_texts': {
    en: 'Back to all texts',
    ar: 'رجوع لكل النصوص',
    es: 'Volver a todos los textos',
  },
  'rev.texts.common.open_guide': {
    en: 'Open guide →',
    ar: 'افتح الدليل →',
    es: 'Abrir guía →',
  },
  // "Back to {text} overview" — {text} stays the Latin title in all langs.
  'rev.texts.common.back_to_overview': {
    en: 'Back to {text} overview',
    ar: 'رجوع لنظرة عامة على {text}',
    es: 'Volver al resumen de {text}',
  },
  // "{n} themes" badge — {n} preserved.
  'rev.texts.common.themes_count': {
    en: '{n} themes',
    ar: '{n} محاور',
    es: '{n} temas',
  },
  // "Act {n}" badge — {n} preserved.
  'rev.texts.common.act_n': { en: 'Act {n}', ar: 'الفصل {n}', es: 'Acto {n}' },
  'rev.texts.common.detailed_analysis': {
    en: 'Detailed Analysis',
    ar: 'تحليل مفصّل',
    es: 'Análisis detallado',
  },
  'rev.texts.common.ao3_context_link': {
    en: 'AO3 Context Link',
    ar: 'رابط سياق AO3',
    es: 'Vínculo de contexto AO3',
  },
  'rev.texts.common.essay_planning_tip': {
    en: 'Essay Planning Tip',
    ar: 'نصيحة لتخطيط المقال',
    es: 'Consejo para planificar el ensayo',
  },
  'rev.texts.common.continue_studying': {
    en: 'Continue studying',
    ar: 'كمّل دراستك',
    es: 'Sigue estudiando',
  },
  'rev.texts.common.exam_technique': {
    en: 'Exam technique',
    ar: 'أسلوب الامتحان',
    es: 'Técnica de examen',
  },
  'rev.texts.common.ao2_label': { en: 'AO2: ', ar: 'AO2: ', es: 'AO2: ' },
  // "Back to {text}" — {text} stays the Latin title in all languages.
  'rev.texts.common.back_to_text': {
    en: 'Back to {text}',
    ar: 'رجوع لـ {text}',
    es: 'Volver a {text}',
  },

  // ─── Shared sub-page navigation card titles + descriptions ──────────────
  // (rev.texts.subpage.*) — the navigational study-hub cards on every
  // set-text landing page. Same label set reused across texts.
  'rev.texts.subpage.read.title': {
    en: 'Read Full Text',
    ar: 'اقرأ النص كامل',
    es: 'Leer el texto completo',
  },
  'rev.texts.subpage.read.desc': {
    en: 'With annotations',
    ar: 'مع الشروحات',
    es: 'Con anotaciones',
  },
  'rev.texts.subpage.acts.title': {
    en: 'Act-by-Act Analysis',
    ar: 'تحليل فصل بفصل',
    es: 'Análisis acto por acto',
  },
  'rev.texts.subpage.acts.desc': {
    en: 'Key moments & quotes',
    ar: 'اللحظات والاقتباسات المفتاحية',
    es: 'Momentos y citas clave',
  },
  'rev.texts.subpage.characters.title': {
    en: 'Characters',
    ar: 'الشخصيات',
    es: 'Personajes',
  },
  'rev.texts.subpage.characters.desc': {
    en: 'Full character guide',
    ar: 'دليل الشخصيات الكامل',
    es: 'Guía completa de personajes',
  },
  'rev.texts.subpage.themes.title': { en: 'Themes', ar: 'المحاور', es: 'Temas' },
  'rev.texts.subpage.themes.desc': {
    en: 'Theme analysis',
    ar: 'تحليل المحاور',
    es: 'Análisis de temas',
  },
  'rev.texts.subpage.quotes.title': {
    en: 'Key Quotes',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts.subpage.quotes.desc': {
    en: 'Quotes with analysis',
    ar: 'اقتباسات مع تحليل',
    es: 'Citas con análisis',
  },
  'rev.texts.subpage.context.title': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'rev.texts.subpage.context.desc': {
    en: 'Historical context',
    ar: 'السياق التاريخي',
    es: 'Contexto histórico',
  },
  'rev.texts.subpage.essays.title': {
    en: 'Essay Plans',
    ar: 'خطط المقالات',
    es: 'Planes de ensayo',
  },
  'rev.texts.subpage.essays.desc': {
    en: 'GCSE essay plans',
    ar: 'خطط مقالات GCSE',
    es: 'Planes de ensayo GCSE',
  },

  'rev.texts.common.character_analysis': {
    en: 'Character Analysis',
    ar: 'تحليل الشخصيات',
    es: 'Análisis de personajes',
  },
  'rev.texts.common.character_arc': {
    en: 'Character Arc',
    ar: 'مسار الشخصية',
    es: 'Arco del personaje',
  },
  'rev.texts.common.links_to_themes': {
    en: 'Links to Themes',
    ar: 'روابط بالمحاور',
    es: 'Vínculos con los temas',
  },
  // "{n} characters" badge — {n} preserved.
  'rev.texts.common.characters_count': {
    en: '{n} characters',
    ar: '{n} شخصيات',
    es: '{n} personajes',
  },

  'rev.texts.common.background': { en: 'Background', ar: 'الخلفية', es: 'Antecedentes' },
  'rev.texts.common.key_quote': {
    en: 'Key Quote',
    ar: 'الاقتباس المفتاحي',
    es: 'Cita clave',
  },
  'rev.texts.common.key_terms': {
    en: 'Key Terms',
    ar: 'المصطلحات المفتاحية',
    es: 'Términos clave',
  },
  'rev.texts.common.why_it_matters': {
    en: 'Why it matters: ',
    ar: 'ليش مهم: ',
    es: 'Por qué importa: ',
  },
  // "{n} topics" badge — {n} preserved.
  'rev.texts.common.topics_count': {
    en: '{n} topics',
    ar: '{n} مواضيع',
    es: '{n} temas',
  },

  // "{n} key quotes" subcount — {n} preserved.
  'rev.texts.common.key_quotes_count': {
    en: '{n} key quotes',
    ar: '{n} اقتباسات مفتاحية',
    es: '{n} citas clave',
  },

  // ─── Macbeth key-quotes page chrome (rev.texts.macbeth.quotes.*) ────────
  'rev.texts.macbeth.quotes.title': {
    en: 'Macbeth - Key Quotes',
    ar: 'Macbeth - الاقتباسات المفتاحية',
    es: 'Macbeth - Citas clave',
  },
  'rev.texts.macbeth.quotes.bank_badge': {
    en: 'Key Quotes Bank',
    ar: 'بنك الاقتباسات المفتاحية',
    es: 'Banco de citas clave',
  },
  'rev.texts.macbeth.quotes.intro': {
    en: 'Thirty essential Macbeth quotations organised by act with detailed language analysis, speaker context, and thematic links for GCSE and IGCSE English Literature.',
    ar: 'ثلاثين اقتباس أساسي من Macbeth مرتّبة حسب الفصل مع تحليل لغوي مفصّل وسياق المتحدّث وروابط بالمحاور لـ GCSE و IGCSE English Literature.',
    es: 'Treinta citas esenciales de Macbeth organizadas por acto con análisis lingüístico detallado, contexto del hablante y vínculos temáticos para GCSE e IGCSE English Literature.',
  },
  'rev.texts.macbeth.quotes.how_to_use_h': {
    en: 'How to Use These Quotes',
    ar: 'كيف تستخدم هذه الاقتباسات',
    es: 'Cómo usar estas citas',
  },
  // "{n} quotes" badge — {n} preserved.
  'rev.texts.common.quotes_count': {
    en: '{n} quotes',
    ar: '{n} اقتباسات',
    es: '{n} citas',
  },

  // ─── Macbeth context page chrome (rev.texts.macbeth.context.*) ──────────
  'rev.texts.macbeth.context.title': {
    en: 'Macbeth - Historical Context',
    ar: 'Macbeth - السياق التاريخي',
    es: 'Macbeth - Contexto histórico',
  },
  'rev.texts.macbeth.context.intro': {
    en: 'Essential Jacobean context for Macbeth: James I, witchcraft, the Gunpowder Plot, the Divine Right of Kings, and the theatrical world Shakespeare wrote for. Understanding context is worth up to 6 marks in AQA GCSE Literature.',
    ar: 'السياق الجاكوبي الأساسي لـ Macbeth: James I، والسحر، وthe Gunpowder Plot، وthe Divine Right of Kings، والعالم المسرحي اللي كتب له Shakespeare. فهم السياق يحسب لك حتى 6 درجات في AQA GCSE Literature.',
    es: 'Contexto jacobeo esencial para Macbeth: James I, la brujería, the Gunpowder Plot, the Divine Right of Kings y el mundo teatral para el que escribió Shakespeare. Comprender el contexto vale hasta 6 puntos en AQA GCSE Literature.',
  },
  'rev.texts.macbeth.context.using_context_h': {
    en: 'Using Context in Your Essays',
    ar: 'استخدام السياق في مقالاتك',
    es: 'Usar el contexto en tus ensayos',
  },
  'rev.texts.macbeth.context.how_connects_h': {
    en: 'How This Connects to the Play',
    ar: 'كيف يرتبط هذا بالمسرحية',
    es: 'Cómo se conecta esto con la obra',
  },
  'rev.texts.macbeth.context.ao3_marks_h': {
    en: 'How Context Earns AO3 Marks',
    ar: 'كيف يكسب السياق درجات AO3',
    es: 'Cómo el contexto gana puntos de AO3',
  },
  'rev.texts.macbeth.context.mistakes_h': {
    en: 'Common Context Mistakes to Avoid',
    ar: 'أخطاء السياق الشائعة اللي تتجنّبها',
    es: 'Errores de contexto comunes que evitar',
  },
  'rev.texts.macbeth.context.timeline_h': {
    en: 'Key Dates Timeline',
    ar: 'الجدول الزمني للتواريخ المهمة',
    es: 'Cronología de fechas clave',
  },
  'rev.texts.macbeth.context.mistake_label': { en: 'Mistake: ', ar: 'خطأ: ', es: 'Error: ' },
  'rev.texts.macbeth.context.better_label': { en: 'Better: ', ar: 'الأفضل: ', es: 'Mejor: ' },

  // ─── Macbeth characters page chrome (rev.texts.macbeth.characters.*) ────
  'rev.texts.macbeth.characters.title': {
    en: 'Macbeth - Character Analysis',
    ar: 'Macbeth - تحليل الشخصيات',
    es: 'Macbeth - Análisis de personajes',
  },
  'rev.texts.macbeth.characters.intro': {
    en: 'Full character studies for every significant figure in Macbeth, with key quotes, character arcs, theme links, and exam tips for GCSE and IGCSE English Literature.',
    ar: 'دراسات كاملة لكل شخصية مهمة في Macbeth، مع اقتباسات مفتاحية ومسارات الشخصيات وروابط بالمحاور ونصائح للامتحان لـ GCSE و IGCSE English Literature.',
    es: 'Estudios completos de cada figura importante de Macbeth, con citas clave, arcos de personajes, vínculos temáticos y consejos de examen para GCSE e IGCSE English Literature.',
  },

  // ─── An Inspector Calls themes page chrome (rev.texts.aic.themes.*) ─────
  'rev.texts.aic.themes.title': {
    en: 'An Inspector Calls — Themes',
    ar: 'An Inspector Calls — المحاور',
    es: 'An Inspector Calls — Temas',
  },
  'rev.texts.aic.themes.byline': {
    en: 'by J.B. Priestley — 1945',
    ar: 'تأليف J.B. Priestley — 1945',
    es: 'por J.B. Priestley — 1945',
  },
  'rev.texts.aic.themes.intro': {
    en: 'Seven major themes analysed in depth with key quotes, act-by-act evidence, AO3 context links, and essay planning tips for GCSE literature.',
    ar: 'سبعة محاور رئيسية محلّلة بعمق مع اقتباسات مفتاحية وأدلة فصل بفصل وروابط سياق AO3 ونصائح لتخطيط المقال لـ GCSE literature.',
    es: 'Siete temas principales analizados a fondo con citas clave, evidencia acto por acto, vínculos de contexto AO3 y consejos de planificación de ensayos para GCSE literature.',
  },
  'rev.texts.aic.themes.exam_technique_body': {
    en: 'Theme questions require you to track how an idea develops across the whole play (AO1), analyse Priestley’s use of language and structure (AO2), and link to historical context (AO3). Use the act-by-act evidence sections below to build a progressive argument.',
    ar: 'أسئلة المحاور تطلب منك تتبّع كيف تتطوّر الفكرة عبر المسرحية كاملة (AO1)، وتحليل استخدام Priestley للغة والبنية (AO2)، والربط بالسياق التاريخي (AO3). استخدم أقسام الأدلة فصل بفصل تحت عشان تبني حجّة متدرّجة.',
    es: 'Las preguntas temáticas requieren que sigas cómo se desarrolla una idea a lo largo de toda la obra (AO1), analices el uso del lenguaje y la estructura de Priestley (AO2) y lo vincules con el contexto histórico (AO3). Usa las secciones de evidencia acto por acto de abajo para construir un argumento progresivo.',
  },
  'rev.texts.aic.themes.continue_sub': {
    en: 'Explore characters, key quotes, and context for An Inspector Calls.',
    ar: 'استكشف الشخصيات والاقتباسات المفتاحية والسياق لـ An Inspector Calls.',
    es: 'Explora los personajes, las citas clave y el contexto de An Inspector Calls.',
  },
  'rev.texts.aic.themes.fair_dealing': {
    en: 'Short quotations (≤15 words each) reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism, review and educational study. An Inspector Calls © J.B. Priestley Estate. Full text available from your school or local library.',
    ar: 'اقتباسات قصيرة (15 كلمة أو أقل لكل واحد) منسوخة بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 لغرض النقد والمراجعة والدراسة التعليمية. An Inspector Calls © J.B. Priestley Estate. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Citas breves (≤15 palabras cada una) reproducidas conforme a la disposición de uso legítimo (fair dealing) de la Copyright, Designs and Patents Act 1988 con fines de crítica, reseña y estudio educativo. An Inspector Calls © J.B. Priestley Estate. Texto completo disponible en tu colegio o biblioteca local.',
  },

  // ─── Macbeth landing page extra chrome (rev.texts.macbeth.*) ────────────
  'rev.texts.macbeth.at_a_glance': {
    en: 'Macbeth at a glance',
    ar: 'Macbeth باختصار',
    es: 'Macbeth de un vistazo',
  },
  'rev.texts.macbeth.top5_heading': {
    en: 'Top 5 quotes you must know for AO2',
    ar: 'أهم 5 اقتباسات لازم تعرفها لـ AO2',
    es: 'Las 5 citas que debes conocer para AO2',
  },
  'rev.texts.macbeth.top5_sub': {
    en: 'Five exam-essential quotations with focused AO2 readings. Memorise the wording exactly — precise quotation is the foundation of Grade 7+ analysis.',
    ar: 'خمسة اقتباسات أساسية للامتحان مع قراءات AO2 مركّزة. احفظ الصياغة بالضبط — الاقتباس الدقيق هو أساس تحليل Grade 7+.',
    es: 'Cinco citas esenciales para el examen con lecturas AO2 enfocadas. Memoriza la redacción exacta: la cita precisa es la base del análisis de Grade 7+.',
  },
  'rev.texts.macbeth.compare_sub': {
    en: 'Comparative thinking is rewarded by examiners across boards. Cross-reference Macbeth with these set texts to strengthen your thematic essays.',
    ar: 'المقارنة يكافئ عليها المصححون في كل البورد. قارن Macbeth بهذه النصوص المقررة عشان تقوّي مقالاتك حول المحاور.',
    es: 'El pensamiento comparativo lo premian los examinadores de todas las juntas. Relaciona Macbeth con estos textos para reforzar tus ensayos temáticos.',
  },
  'rev.texts.macbeth.ao2_reading_label': {
    en: 'AO2 reading: ',
    ar: 'قراءة AO2: ',
    es: 'Lectura AO2: ',
  },
  'rev.texts.macbeth.faq_heading': {
    en: 'Macbeth: frequently asked questions',
    ar: 'Macbeth: الأسئلة الشائعة',
    es: 'Macbeth: preguntas frecuentes',
  },

  // ─── Macbeth themes page chrome (rev.texts.macbeth.themes.*) ────────────
  'rev.texts.macbeth.themes.title': {
    en: 'Macbeth - Themes',
    ar: 'Macbeth - المحاور',
    es: 'Macbeth - Temas',
  },
  'rev.texts.macbeth.themes.intro': {
    en: 'In-depth analysis of every major theme in Macbeth with key quotes, evidence by act, historical context, and essay tips for GCSE and IGCSE English Literature.',
    ar: 'تحليل معمّق لكل محور رئيسي في Macbeth مع اقتباسات مفتاحية وأدلة حسب الفصل وسياق تاريخي ونصائح للمقال لـ GCSE و IGCSE English Literature.',
    es: 'Análisis a fondo de cada tema principal de Macbeth con citas clave, evidencia por acto, contexto histórico y consejos de ensayo para GCSE e IGCSE English Literature.',
  },
}
