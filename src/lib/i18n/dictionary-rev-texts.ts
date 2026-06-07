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

  // ─── More shared CHROME labels (rev.texts.common.*) ─────────────────────
  'rev.texts.common.deep_study': { en: 'Deep Study', ar: 'دراسة معمّقة', es: 'Estudio profundo' },
  'rev.texts.common.jump_to_theme': {
    en: 'Jump to a Theme',
    ar: 'انتقل لمحور',
    es: 'Ir a un tema',
  },
  'rev.texts.common.evidence_across_novella': {
    en: 'Evidence Across the Novella',
    ar: 'الأدلة عبر الرواية القصيرة',
    es: 'Evidencia a lo largo de la novela corta',
  },
  'rev.texts.common.links_to_context': {
    en: 'Links to Context',
    ar: 'روابط بالسياق',
    es: 'Vínculos con el contexto',
  },
  'rev.texts.common.essay_planning_tips': {
    en: 'Essay Planning Tips',
    ar: 'نصائح تخطيط المقال',
    es: 'Consejos para planificar ensayos',
  },
  'rev.texts.common.jump_to_character': {
    en: 'Jump to a Character',
    ar: 'انتقل لشخصية',
    es: 'Ir a un personaje',
  },
  'rev.texts.common.jump_to_section': {
    en: 'Jump to a Section',
    ar: 'انتقل لقسم',
    es: 'Ir a una sección',
  },
  'rev.texts.common.role_in_novella': {
    en: 'Role in the Novella',
    ar: 'الدور في الرواية القصيرة',
    es: 'Papel en la novela corta',
  },
  'rev.texts.common.what_they_represent': {
    en: 'What They Represent',
    ar: 'ماذا يمثّلون',
    es: 'Qué representan',
  },
  'rev.texts.common.character_development': {
    en: 'Character Development',
    ar: 'تطوّر الشخصية',
    es: 'Desarrollo del personaje',
  },
  'rev.texts.common.exam_tips': {
    en: 'Exam Tips',
    ar: 'نصائح الامتحان',
    es: 'Consejos de examen',
  },

  'rev.texts.common.key_facts': { en: 'Key Facts', ar: 'حقائق مفتاحية', es: 'Datos clave' },
  'rev.texts.common.key_quotes_bank': {
    en: 'Key Quotes Bank',
    ar: 'بنك الاقتباسات المفتاحية',
    es: 'Banco de citas clave',
  },
  'rev.texts.common.jump_to_stave': {
    en: 'Jump to a Stave',
    ar: 'انتقل لـ stave',
    es: 'Ir a un stave',
  },
  'rev.texts.common.language_analysis': {
    en: 'Language Analysis',
    ar: 'تحليل اللغة',
    es: 'Análisis del lenguaje',
  },
  'rev.texts.common.jump_to_plan': {
    en: 'Jump to a Plan',
    ar: 'انتقل لخطة',
    es: 'Ir a un plan',
  },
  'rev.texts.common.thesis_statement': {
    en: 'Thesis Statement',
    ar: 'صياغة الأطروحة',
    es: 'Declaración de tesis',
  },
  'rev.texts.common.introduction': {
    en: 'Introduction',
    ar: 'المقدّمة',
    es: 'Introducción',
  },
  'rev.texts.common.paragraph_n': {
    en: 'Paragraph {n}',
    ar: 'الفقرة {n}',
    es: 'Párrafo {n}',
  },
  'rev.texts.common.point': { en: 'Point', ar: 'النقطة', es: 'Punto' },
  'rev.texts.common.evidence': { en: 'Evidence', ar: 'الدليل', es: 'Evidencia' },
  'rev.texts.common.conclusion': {
    en: 'Conclusion',
    ar: 'الخاتمة',
    es: 'Conclusión',
  },
  'rev.texts.common.exam_technique_tip': {
    en: 'Exam Technique Tip',
    ar: 'نصيحة تقنية الامتحان',
    es: 'Consejo de técnica de examen',
  },
  // ─── A Christmas Carol — essay plans page chrome ────────────────────────
  'rev.texts.acc.essays.intro': {
    en: 'Eight exam-style questions with full PEEL paragraph plans. Each plan includes a thesis statement, three structured paragraphs with evidence and analysis, a conclusion approach, and an exam technique tip.',
    ar: 'ثمانية أسئلة على نمط الامتحان مع خطط فقرات PEEL كاملة. كل خطة تشمل صياغة أطروحة، وثلاث فقرات منظّمة بالدليل والتحليل، ومقاربة للخاتمة، ونصيحة تقنية للامتحان.',
    es: 'Ocho preguntas de estilo examen con planes completos de párrafo PEEL. Cada plan incluye una declaración de tesis, tres párrafos estructurados con evidencia y análisis, un enfoque de conclusión y un consejo de técnica de examen.',
  },

  // ─── A Christmas Carol — key quotes page chrome ─────────────────────────
  'rev.texts.acc.quotes.intro': {
    en: 'Twenty-eight essential quotations organised by stave. Each quote includes speaker, context, detailed language analysis, theme links, and an exam technique tip.',
    ar: 'ثمانية وعشرون اقتباس أساسي مرتّبة حسب الـ stave. كل اقتباس يشمل المتحدّث والسياق وتحليل لغوي مفصّل وروابط المحاور ونصيحة تقنية للامتحان.',
    es: 'Veintiocho citas esenciales organizadas por stave. Cada cita incluye hablante, contexto, análisis lingüístico detallado, vínculos temáticos y un consejo de técnica de examen.',
  },
  'rev.texts.common.links_to_the_text': {
    en: 'Links to the Text',
    ar: 'روابط بالنص',
    es: 'Vínculos con el texto',
  },

  // ─── A Christmas Carol — context page chrome ────────────────────────────
  'rev.texts.acc.context.title': {
    en: 'Historical and Social Context',
    ar: 'السياق التاريخي والاجتماعي',
    es: 'Contexto histórico y social',
  },
  'rev.texts.acc.context.intro': {
    en: "Understanding the world Dickens was writing about -- and writing FOR. Seven sections covering Victorian social conditions, the Poor Law, Dickens's own experience of poverty, publication context, the Industrial Revolution, the class system, and the novella's reception and lasting impact.",
    ar: 'فهم العالم اللي كان يكتب عنه Dickens — واللي كان يكتب له. سبعة أقسام تغطّي الأوضاع الاجتماعية الفيكتورية، وthe Poor Law، وتجربة Dickens الشخصية مع الفقر، وسياق النشر، وthe Industrial Revolution، والنظام الطبقي، وتلقّي الرواية القصيرة وأثرها الباقي.',
    es: 'Comprender el mundo sobre el que escribía Dickens, y PARA el que escribía. Siete secciones que cubren las condiciones sociales victorianas, the Poor Law, la propia experiencia de pobreza de Dickens, el contexto de publicación, the Industrial Revolution, el sistema de clases y la recepción e impacto duradero de la novela corta.',
  },
  'rev.texts.acc.context.how_to_use_h': {
    en: 'How to Use Context in Your Exam',
    ar: 'كيف تستخدم السياق في امتحانك',
    es: 'Cómo usar el contexto en tu examen',
  },

  // ─── A Christmas Carol — characters page chrome ─────────────────────────
  'rev.texts.acc.characters.title': {
    en: 'Character Analysis',
    ar: 'تحليل الشخصيات',
    es: 'Análisis de personajes',
  },
  'rev.texts.acc.characters.intro': {
    en: 'Eleven key characters analysed in depth: role in the novella, what they represent, character development across the staves, key quotations with detailed analysis, links to themes, and exam technique tips.',
    ar: 'إحدى عشرة شخصية رئيسية محلّلة بعمق: الدور في الرواية القصيرة، وماذا يمثّلون، وتطوّر الشخصية عبر الـ staves، والاقتباسات المفتاحية مع تحليل مفصّل، وروابط بالمحاور، ونصائح تقنية الامتحان.',
    es: 'Once personajes clave analizados en profundidad: papel en la novela corta, qué representan, desarrollo del personaje a lo largo de los staves, citas clave con análisis detallado, vínculos con los temas y consejos de técnica de examen.',
  },

  // ─── A Christmas Carol — themes page chrome ─────────────────────────────
  'rev.texts.acc.themes.back': {
    en: 'Back to A Christmas Carol',
    ar: 'رجوع إلى A Christmas Carol',
    es: 'Volver a A Christmas Carol',
  },
  'rev.texts.acc.themes.title': {
    en: 'Theme Analysis',
    ar: 'تحليل المحاور',
    es: 'Análisis de temas',
  },
  'rev.texts.acc.themes.byline': {
    en: 'A Christmas Carol by Charles Dickens',
    ar: 'A Christmas Carol تأليف Charles Dickens',
    es: 'A Christmas Carol de Charles Dickens',
  },
  'rev.texts.acc.themes.intro': {
    en: 'Seven major themes explored in depth: definition, evidence from each stave, key quotations, links to historical context, and essay planning tips for GCSE success.',
    ar: 'سبعة محاور رئيسية مستكشفة بعمق: التعريف، والأدلة من كل stave، والاقتباسات المفتاحية، وروابط بالسياق التاريخي، ونصائح تخطيط المقال للنجاح في GCSE.',
    es: 'Siete temas principales explorados en profundidad: definición, evidencia de cada stave, citas clave, vínculos con el contexto histórico y consejos para planificar ensayos con éxito en GCSE.',
  },
  'rev.texts.acc.themes.public_domain': {
    en: 'A Christmas Carol by Charles Dickens (1843) is in the public domain. Quotations are reproduced freely as the text is no longer subject to copyright.',
    ar: 'A Christmas Carol تأليف Charles Dickens (1843) ضمن الملكية العامة. الاقتباسات مُعاد إنتاجها بحرية لأن النص لم يعد خاضعاً لحقوق النشر.',
    es: 'A Christmas Carol de Charles Dickens (1843) es de dominio público. Las citas se reproducen libremente porque el texto ya no está sujeto a derechos de autor.',
  },

  // ─── More shared CHROME labels reused across set-text subpages ──────────
  'rev.texts.common.character_guide': {
    en: 'Character Guide',
    ar: 'دليل الشخصيات',
    es: 'Guía de personajes',
  },
  'rev.texts.common.theme_links': {
    en: 'Theme Links',
    ar: 'روابط المحاور',
    es: 'Vínculos temáticos',
  },
  'rev.texts.common.key_timeline': {
    en: 'Key Timeline',
    ar: 'الجدول الزمني المهم',
    es: 'Cronología clave',
  },
  'rev.texts.common.key_point': { en: 'Key Point', ar: 'النقطة المفتاحية', es: 'Punto clave' },
  'rev.texts.common.gcse_essay_plans': {
    en: 'GCSE Essay Plans',
    ar: 'خطط مقالات GCSE',
    es: 'Planes de ensayo GCSE',
  },
  'rev.texts.common.essay_n': { en: 'Essay {n}', ar: 'المقال {n}', es: 'Ensayo {n}' },
  'rev.texts.common.thesis': { en: 'Thesis', ar: 'الأطروحة', es: 'Tesis' },
  'rev.texts.common.link': { en: 'Link', ar: 'الربط', es: 'Enlace' },
  'rev.texts.common.filter_quotes': {
    en: 'Filter Quotes',
    ar: 'تصفية الاقتباسات',
    es: 'Filtrar citas',
  },
  'rev.texts.common.all_count': { en: 'All ({n})', ar: 'الكل ({n})', es: 'Todas ({n})' },
  'rev.texts.common.no_quotes_match': {
    en: 'No quotes match your current filters. Try a different combination.',
    ar: 'ما في اقتباسات تطابق التصفية الحالية. جرّب توليفة ثانية.',
    es: 'Ninguna cita coincide con tus filtros actuales. Prueba otra combinación.',
  },
  'rev.texts.common.exam_tip_label': {
    en: 'Exam tip: ',
    ar: 'نصيحة للامتحان: ',
    es: 'Consejo de examen: ',
  },
  'rev.texts.common.ao2_language_analysis': {
    en: 'AO2 — Language Analysis',
    ar: 'AO2 — تحليل اللغة',
    es: 'AO2 — Análisis del lenguaje',
  },
  'rev.texts.common.ao3_context_link_dash': {
    en: 'AO3 — Context Link',
    ar: 'AO3 — رابط السياق',
    es: 'AO3 — Vínculo de contexto',
  },
  'rev.texts.common.using_in_essay': {
    en: 'Using This in Your Essay',
    ar: 'استخدام هذا في مقالك',
    es: 'Usar esto en tu ensayo',
  },
  'rev.texts.common.model_paragraph': {
    en: 'Model paragraph',
    ar: 'فقرة نموذجية',
    es: 'Párrafo modelo',
  },
  'rev.texts.common.fair_dealing_copyright': {
    en: 'Fair dealing & copyright',
    ar: 'الاستخدام العادل وحقوق النشر',
    es: 'Uso legítimo y derechos de autor',
  },

  'rev.texts.common.summary_and_analysis': {
    en: 'Summary and Analysis',
    ar: 'الملخص والتحليل',
    es: 'Resumen y análisis',
  },
  'rev.texts.common.key_moments': {
    en: 'Key Moments',
    ar: 'اللحظات المفتاحية',
    es: 'Momentos clave',
  },
  'rev.texts.common.thematic_significance': {
    en: 'Thematic Significance',
    ar: 'الدلالة المحورية',
    es: 'Significado temático',
  },
  'rev.texts.common.stave_n_colon': {
    en: 'Stave {n}: ',
    ar: 'Stave {n}: ',
    es: 'Stave {n}: ',
  },

  // ─── A Christmas Carol — staves page chrome (rev.texts.acc.staves.*) ────
  'rev.texts.acc.back': {
    en: 'Back to A Christmas Carol',
    ar: 'رجوع إلى A Christmas Carol',
    es: 'Volver a A Christmas Carol',
  },
  'rev.texts.acc.staves.title': {
    en: 'A Christmas Carol -- All Five Staves',
    ar: 'A Christmas Carol -- كل الـ staves الخمسة',
    es: 'A Christmas Carol -- Los cinco staves',
  },
  'rev.texts.acc.staves.subtitle': {
    en: 'In-depth analysis of every stave: plot, language, key quotations and exam-ready commentary',
    ar: 'تحليل معمّق لكل stave: الحبكة واللغة والاقتباسات المفتاحية وتعليق جاهز للامتحان',
    es: 'Análisis a fondo de cada stave: argumento, lenguaje, citas clave y comentario listo para el examen',
  },
  'rev.texts.acc.staves.intro': {
    en: 'Dickens called the chapters of his novella “staves” -- a musical term meaning the lines on which notes are written. This choice reflects the structure of a carol: each stave builds on the last to form a harmonious whole, with a message of redemption and joy.',
    ar: 'سمّى Dickens فصول روايته القصيرة “staves” -- وهو مصطلح موسيقي يعني الأسطر اللي تتكتب عليها النوتات. هذا الاختيار يعكس بنية الـ carol: كل stave يبني على اللي قبله عشان يكوّن كلًّا متناغماً، برسالة خلاص وفرح.',
    es: 'Dickens llamó “staves” a los capítulos de su novela corta, un término musical que designa las líneas sobre las que se escriben las notas. Esta elección refleja la estructura de un carol: cada stave se apoya en el anterior para formar un todo armonioso, con un mensaje de redención y alegría.',
  },
  'rev.texts.acc.staves.public_domain': {
    en: 'A Christmas Carol by Charles Dickens (1843) is in the public domain. Quotations are reproduced freely as the text is no longer subject to copyright.',
    ar: 'A Christmas Carol تأليف Charles Dickens (1843) ضمن الملكية العامة. الاقتباسات مُعاد إنتاجها بحرية لأن النص لم يعد خاضعاً لحقوق النشر.',
    es: 'A Christmas Carol de Charles Dickens (1843) es de dominio público. Las citas se reproducen libremente porque el texto ya no está sujeto a derechos de autor.',
  },

  // ─── Shared extract-walkthrough card labels ────────────────────────────
  'rev.texts.common.notice': { en: 'Notice', ar: 'لاحظ', es: 'Observa' },
  'rev.texts.common.say': { en: 'Say', ar: 'قُل', es: 'Di' },
  'rev.texts.common.zoom_out': { en: 'Zoom out', ar: 'وسّع الصورة', es: 'Amplía' },
  'rev.texts.common.the_extract': { en: 'The Extract', ar: 'المقتطف', es: 'El extracto' },
  'rev.texts.common.model_paragraph_h': {
    en: 'Model Paragraph',
    ar: 'الفقرة النموذجية',
    es: 'Párrafo modelo',
  },

  // ─── A Christmas Carol — extract walkthrough chrome (rev.texts.acc.extract.*) ─
  'rev.texts.acc.extract.badge': {
    en: 'Extract Study',
    ar: 'دراسة المقتطف',
    es: 'Estudio del extracto',
  },
  'rev.texts.acc.extract.title': {
    en: 'Extract Walkthrough: The Opening of Stave 1',
    ar: 'شرح المقتطف: بداية Stave 1',
    es: 'Recorrido por el extracto: el comienzo del Stave 1',
  },
  'rev.texts.acc.extract.byline': {
    en: 'A Christmas Carol by Charles Dickens',
    ar: 'A Christmas Carol تأليف Charles Dickens',
    es: 'A Christmas Carol de Charles Dickens',
  },
  'rev.texts.acc.extract.intro': {
    en: 'A close reading of Dickens’s opening portrait of Scrooge, with the full passage line-numbered, six method-led walkthrough cards, and a model paragraph showing how to argue the AO1 thesis with secure AO2 and AO3 anchoring.',
    ar: 'قراءة متأنّية لبورتريه Dickens الافتتاحي لـ Scrooge، مع المقطع كامل مرقّم الأسطر، وست بطاقات شرح حسب الأسلوب، وفقرة نموذجية تبيّن كيف تحاجج أطروحة AO1 بترسيخ AO2 وAO3 متين.',
    es: 'Una lectura atenta del retrato inicial de Scrooge por Dickens, con el pasaje completo numerado por líneas, seis tarjetas de recorrido guiadas por método y un párrafo modelo que muestra cómo defender la tesis de AO1 con un anclaje sólido de AO2 y AO3.',
  },
  'rev.texts.acc.extract.where_sits_h': {
    en: 'Where this extract sits',
    ar: 'موقع هذا المقتطف',
    es: 'Dónde se sitúa este extracto',
  },
  'rev.texts.acc.extract.where_sits_desc': {
    en: 'Stave 1, "Marley\'s Ghost"',
    ar: 'Stave 1، "Marley\'s Ghost"',
    es: 'Stave 1, "Marley\'s Ghost"',
  },
  'rev.texts.acc.extract.the_extract_desc': {
    en: 'From "Oh! But he was a tight-fisted hand..." to "Solitary as an oyster." Public domain text, Dickens, 1843.',
    ar: 'من "Oh! But he was a tight-fisted hand..." إلى "Solitary as an oyster." نص ضمن الملكية العامة، Dickens، 1843.',
    es: 'Desde "Oh! But he was a tight-fisted hand..." hasta "Solitary as an oyster." Texto de dominio público, Dickens, 1843.',
  },
  'rev.texts.acc.extract.walkthrough_h': {
    en: 'Method-by-Method Walkthrough',
    ar: 'شرح أسلوباً بأسلوب',
    es: 'Recorrido método por método',
  },
  'rev.texts.acc.extract.walkthrough_intro': {
    en: 'For each chunk: Notice identifies the mechanics on the page; Say models the analytical sentence a strong AO2 response would write; and Zoom out connects the moment to the wider arc and to the 1843 reformist context in which Dickens was writing.',
    ar: 'لكل مقطع: Notice يحدّد الميكانيكا على الصفحة؛ Say ينمذج الجملة التحليلية اللي يكتبها رد AO2 القوي؛ وZoom out يربط اللحظة بالقوس الأوسع وبسياق الإصلاح في 1843 اللي كان يكتب فيه Dickens.',
    es: 'Para cada fragmento: Notice identifica los mecanismos en la página; Say modela la frase analítica que escribiría una respuesta AO2 sólida; y Zoom out conecta el momento con el arco más amplio y con el contexto reformista de 1843 en el que escribía Dickens.',
  },
  'rev.texts.acc.extract.model_para_desc': {
    en: "A single, exam-style paragraph (~250 words) arguing how the opening prepares the reader for Scrooge's eventual transformation.",
    ar: 'فقرة واحدة على نمط الامتحان (~250 كلمة) تحاجج كيف تهيّئ البداية القارئ لتحوّل Scrooge في النهاية.',
    es: 'Un solo párrafo de estilo examen (~250 palabras) que argumenta cómo el comienzo prepara al lector para la eventual transformación de Scrooge.',
  },
  'rev.texts.acc.extract.public_domain': {
    en: 'A Christmas Carol by Charles Dickens (1843) is in the public domain. Quotations are reproduced freely as the text is no longer subject to copyright. This walkthrough is provided for educational purposes under normal fair-dealing principles for study and criticism.',
    ar: 'A Christmas Carol تأليف Charles Dickens (1843) ضمن الملكية العامة. الاقتباسات مُعاد إنتاجها بحرية لأن النص لم يعد خاضعاً لحقوق النشر. هذا الشرح مُقدَّم لأغراض تعليمية وفق مبادئ الاستخدام العادل المعتادة للدراسة والنقد.',
    es: 'A Christmas Carol de Charles Dickens (1843) es de dominio público. Las citas se reproducen libremente porque el texto ya no está sujeto a derechos de autor. Este recorrido se ofrece con fines educativos conforme a los principios habituales de uso legítimo para el estudio y la crítica.',
  },

  // ─── Shared card-title chrome reused across themes/chapters pages ──────
  'rev.texts.common.key_points': {
    en: 'Key Points',
    ar: 'النقاط المفتاحية',
    es: 'Puntos clave',
  },
  'rev.texts.common.relevant_quotes': {
    en: 'Relevant Quotes',
    ar: 'الاقتباسات ذات الصلة',
    es: 'Citas relevantes',
  },
  'rev.texts.common.exam_discussion_points': {
    en: 'Exam Discussion Points',
    ar: 'نقاط النقاش للامتحان',
    es: 'Puntos de debate para el examen',
  },
  'rev.texts.common.themes_analysis': {
    en: 'Themes Analysis',
    ar: 'تحليل المحاور',
    es: 'Análisis de temas',
  },
  'rev.texts.common.chapter_by_chapter': {
    en: 'Chapter-by-Chapter',
    ar: 'فصل بفصل',
    es: 'Capítulo por capítulo',
  },
  'rev.texts.common.jump_to_chapter': {
    en: 'Jump to a Chapter',
    ar: 'انتقل لفصل',
    es: 'Ir a un capítulo',
  },
  'rev.texts.common.chapter_n_colon': {
    en: 'Chapter {n}: ',
    ar: 'الفصل {n}: ',
    es: 'Capítulo {n}: ',
  },
  'rev.texts.common.chapter_by_chapter_analysis': {
    en: 'Chapter-by-Chapter Analysis',
    ar: 'تحليل فصل بفصل',
    es: 'Análisis capítulo por capítulo',
  },
  'rev.texts.common.key_events': {
    en: 'Key Events',
    ar: 'الأحداث المفتاحية',
    es: 'Eventos clave',
  },
  'rev.texts.common.allegorical_parallels': {
    en: 'Allegorical Parallels',
    ar: 'التوازيات الرمزية',
    es: 'Paralelismos alegóricos',
  },
  'rev.texts.common.allegorical_significance': {
    en: 'Allegorical Significance',
    ar: 'الدلالة الرمزية',
    es: 'Significado alegórico',
  },
  'rev.texts.common.role_in_novel': {
    en: 'Role in the Novel',
    ar: 'الدور في الرواية',
    es: 'Papel en la novela',
  },
  'rev.texts.common.question': { en: 'Question', ar: 'السؤال', es: 'Pregunta' },
  'rev.texts.common.thematic_links': {
    en: 'Thematic Links',
    ar: 'روابط المحاور',
    es: 'Vínculos temáticos',
  },
  'rev.texts.common.filter_by_theme': {
    en: 'Filter by Theme',
    ar: 'تصفية حسب المحور',
    es: 'Filtrar por tema',
  },
  'rev.texts.common.how_to_use_quotes': {
    en: 'How to use these quotes',
    ar: 'كيف تستخدم هذي الاقتباسات',
    es: 'Cómo usar estas citas',
  },
  'rev.texts.common.no_quotes_match_theme': {
    en: 'No quotes match your current filter. Try a different theme.',
    ar: 'ما في اقتباسات تطابق تصفيتك الحالية. جرّب محور ثاني.',
    es: 'Ninguna cita coincide con tu filtro actual. Prueba otro tema.',
  },

  // ─── Animal Farm — shared chrome (rev.texts.af.*) ───────────────────────
  'rev.texts.af.back': {
    en: 'Back to Animal Farm',
    ar: 'رجوع إلى Animal Farm',
    es: 'Volver a Animal Farm',
  },
  'rev.texts.af.byline': {
    en: 'Animal Farm by George Orwell',
    ar: 'Animal Farm تأليف George Orwell',
    es: 'Animal Farm de George Orwell',
  },
  'rev.texts.af.how_orwell_presents': {
    en: 'How Orwell Presents This',
    ar: 'كيف يقدّم Orwell هذا',
    es: 'Cómo lo presenta Orwell',
  },
  'rev.texts.af.themes.intro': {
    en: 'Six major themes explored in depth: overview, key points, how Orwell presents each theme through literary methods, relevant quotations and links to exam questions.',
    ar: 'ستة محاور رئيسية مستكشفة بعمق: نظرة عامة، ونقاط مفتاحية، وكيف يقدّم Orwell كل محور عبر الأساليب الأدبية، واقتباسات ذات صلة، وروابط بأسئلة الامتحان.',
    es: 'Seis temas principales explorados a fondo: resumen, puntos clave, cómo presenta Orwell cada tema mediante recursos literarios, citas relevantes y vínculos con preguntas de examen.',
  },
  'rev.texts.af.context.title': {
    en: 'Animal Farm — Context',
    ar: 'Animal Farm — السياق',
    es: 'Animal Farm — Contexto',
  },
  'rev.texts.af.context.byline': {
    en: 'by George Orwell — 1945',
    ar: 'تأليف George Orwell — 1945',
    es: 'por George Orwell — 1945',
  },
  'rev.texts.af.context.ao3_badge': {
    en: 'AO3 — Context',
    ar: 'AO3 — السياق',
    es: 'AO3 — Contexto',
  },
  'rev.texts.af.context.ao3_want_h': {
    en: 'AO3 — What examiners want',
    ar: 'AO3 — شنو يبغى المصححون',
    es: 'AO3 — Qué quieren los examinadores',
  },
  'rev.texts.af.context.intro': {
    en: 'Historical and social context for GCSE literature. Covers the Russian Revolution, Stalin vs Trotsky, Orwell’s democratic socialism, the Spanish Civil War, allegory and satire, publication difficulties and Cold War relevance.',
    ar: 'السياق التاريخي والاجتماعي لـ GCSE literature. يغطّي the Russian Revolution، وStalin مقابل Trotsky، واشتراكية Orwell الديمقراطية، وthe Spanish Civil War، والرمزية والسخرية، وصعوبات النشر، وأهميته في the Cold War.',
    es: 'Contexto histórico y social para GCSE literature. Cubre the Russian Revolution, Stalin frente a Trotsky, el socialismo democrático de Orwell, the Spanish Civil War, la alegoría y la sátira, las dificultades de publicación y la relevancia en the Cold War.',
  },
  'rev.texts.af.context.ao3_want_body': {
    en: 'AO3 rewards you for showing how context shapes meaning. Do not simply list facts about the Russian Revolution — explain how the allegorical parallels affect the reader’s understanding of Orwell’s purpose. The best answers show why Orwell chose to tell this story through animals on a farm.',
    ar: 'AO3 يكافئك لمّا تبيّن كيف السياق يشكّل المعنى. لا تسرد حقائق عن the Russian Revolution وبس — اشرح كيف التوازيات الرمزية تأثّر على فهم القارئ لهدف Orwell. أفضل الإجابات تبيّن ليش اختار Orwell يحكي هذي القصة من خلال حيوانات في مزرعة.',
    es: 'AO3 te premia por mostrar cómo el contexto da forma al significado. No te limites a enumerar hechos sobre the Russian Revolution: explica cómo los paralelismos alegóricos afectan la comprensión del lector del propósito de Orwell. Las mejores respuestas muestran por qué Orwell eligió contar esta historia a través de animales en una granja.',
  },
  'rev.texts.af.context.quick_ref_h': {
    en: 'Quick Reference: Allegorical Parallels',
    ar: 'مرجع سريع: التوازيات الرمزية',
    es: 'Referencia rápida: paralelismos alegóricos',
  },
  'rev.texts.af.context.continue_sub': {
    en: 'Explore characters, themes, key quotes and essay plans for Animal Farm.',
    ar: 'استكشف الشخصيات والمحاور والاقتباسات المفتاحية وخطط المقالات لـ Animal Farm.',
    es: 'Explora los personajes, los temas, las citas clave y los planes de ensayo de Animal Farm.',
  },
  'rev.texts.af.quotes.title': {
    en: 'Animal Farm — Key Quotes',
    ar: 'Animal Farm — الاقتباسات المفتاحية',
    es: 'Animal Farm — Citas clave',
  },
  'rev.texts.af.quotes.byline': {
    en: 'by George Orwell — 1945',
    ar: 'تأليف George Orwell — 1945',
    es: 'por George Orwell — 1945',
  },
  'rev.texts.af.quotes.intro': {
    en: 'Twenty essential quotations organised by chapter and theme, each with speaker, context, detailed analysis, thematic links and exam tips for GCSE English Literature.',
    ar: 'عشرون اقتباس أساسي مرتّبة حسب الفصل والمحور، كل واحد مع المتحدّث والسياق وتحليل مفصّل وروابط المحاور ونصائح الامتحان لـ GCSE English Literature.',
    es: 'Veinte citas esenciales organizadas por capítulo y tema, cada una con hablante, contexto, análisis detallado, vínculos temáticos y consejos de examen para GCSE English Literature.',
  },
  'rev.texts.af.quotes.how_to_use_body': {
    en: 'You do not need to memorise all twenty. Aim for 10–12 versatile quotes that you can analyse in depth and that cover multiple themes. For each quote, practise identifying the technique, explaining its effect, and linking it to Orwell’s allegorical purpose.',
    ar: 'مو لازم تحفظ العشرين كلها. اهدف لـ 10–12 اقتباس مرن تقدر تحلّله بعمق ويغطّي محاور متعددة. لكل اقتباس، تمرّن على تحديد الأسلوب، وشرح أثره، وربطه بهدف Orwell الرمزي.',
    es: 'No necesitas memorizar las veinte. Apunta a 10–12 citas versátiles que puedas analizar en profundidad y que cubran varios temas. Para cada cita, practica identificar la técnica, explicar su efecto y vincularla con el propósito alegórico de Orwell.',
  },
  'rev.texts.af.quotes.continue_sub': {
    en: 'Explore characters, themes, context and essay plans for Animal Farm.',
    ar: 'استكشف الشخصيات والمحاور والسياق وخطط المقالات لـ Animal Farm.',
    es: 'Explora los personajes, los temas, el contexto y los planes de ensayo de Animal Farm.',
  },
  'rev.texts.af.extract.badge': {
    en: 'Extract Walkthrough',
    ar: 'شرح المقتطف',
    es: 'Recorrido por el extracto',
  },
  'rev.texts.af.extract.title': {
    en: 'The Closing Paragraph: “impossible to say which was which”',
    ar: 'الفقرة الختامية: “impossible to say which was which”',
    es: 'El párrafo final: “impossible to say which was which”',
  },
  'rev.texts.af.extract.byline': {
    en: 'Animal Farm by George Orwell - final paragraph of Chapter 10',
    ar: 'Animal Farm تأليف George Orwell - الفقرة الأخيرة من الفصل 10',
    es: 'Animal Farm de George Orwell - párrafo final del capítulo 10',
  },
  'rev.texts.af.extract.intro': {
    en: 'A guided walkthrough using the Notice / Say / Zoom out framework. Use this to model how examiners want you to move from observation, to analysis, to wider argument - without losing grip on the words on the page.',
    ar: 'شرح موجّه باستخدام إطار Notice / Say / Zoom out. استخدمه لتنمذج كيف يبغونك المصححون تنتقل من الملاحظة إلى التحليل إلى الحجّة الأوسع - بدون ما تفقد إمساكك بالكلمات على الصفحة.',
    es: 'Un recorrido guiado con el marco Notice / Say / Zoom out. Úsalo para modelar cómo quieren los examinadores que pases de la observación al análisis y a un argumento más amplio, sin perder el control de las palabras de la página.',
  },
  'rev.texts.af.extract.extract_caption': {
    en: 'Closing paragraph, Chapter 10',
    ar: 'الفقرة الختامية، الفصل 10',
    es: 'Párrafo final, capítulo 10',
  },
  'rev.texts.af.extract.notice_helper': {
    en: 'Surface details a careful reader would mark in the margin.',
    ar: 'تفاصيل ظاهرة يعلّمها القارئ المتأنّي على الهامش.',
    es: 'Detalles superficiales que un lector atento marcaría al margen.',
  },
  'rev.texts.af.extract.say_helper': {
    en: 'Turn the noticed details into argued analysis with evidence.',
    ar: 'حوّل التفاصيل الملحوظة إلى تحليل محاجَج بالدليل.',
    es: 'Convierte los detalles observados en un análisis argumentado con evidencia.',
  },
  'rev.texts.af.extract.zoom_helper': {
    en: 'Step back to context, allegory and the broader thesis.',
    ar: 'تراجع خطوة للسياق والرمزية والأطروحة الأوسع.',
    es: 'Da un paso atrás hacia el contexto, la alegoría y la tesis más amplia.',
  },
  'rev.texts.af.extract.model_para_h': {
    en: 'Model Paragraph (~250 words)',
    ar: 'الفقرة النموذجية (~250 كلمة)',
    es: 'Párrafo modelo (~250 palabras)',
  },
  'rev.texts.af.extract.rights_notice': {
    en: 'Rights notice: Animal Farm entered the UK public domain in 2021 (70 years after Orwell’s death in 1950) but remains in copyright in the United States until 2041. As The English Hub serves international students, the extract above is reproduced as a short fair-dealing quotation under the Copyright, Designs and Patents Act 1988 (s.30) for the purpose of criticism, review and educational study. Animal Farm by George Orwell is published by Penguin Books; the Orwell estate is administered by AM Heath. Students outside the UK should consult a school-licensed edition.',
    ar: 'إشعار حقوق: Animal Farm دخلت الملكية العامة في UK في 2021 (بعد 70 سنة من وفاة Orwell في 1950) لكنها لا تزال محفوظة الحقوق في United States حتى 2041. وبما إن The English Hub يخدم طلاباً دوليين، المقتطف فوق مُعاد إنتاجه كاقتباس قصير ضمن الاستخدام العادل بموجب Copyright, Designs and Patents Act 1988 (s.30) لغرض النقد والمراجعة والدراسة التعليمية. Animal Farm تأليف George Orwell صادرة عن Penguin Books؛ the Orwell estate يديره AM Heath. على الطلاب خارج UK الرجوع لطبعة مرخّصة للمدارس.',
    es: 'Aviso de derechos: Animal Farm entró en el dominio público del Reino Unido en 2021 (70 años después de la muerte de Orwell en 1950), pero sigue protegida por derechos de autor en los Estados Unidos hasta 2041. Como The English Hub atiende a estudiantes internacionales, el extracto anterior se reproduce como una cita breve de uso legítimo conforme a la Copyright, Designs and Patents Act 1988 (s.30) con fines de crítica, reseña y estudio educativo. Animal Farm de George Orwell está publicada por Penguin Books; el patrimonio de Orwell lo administra AM Heath. Los estudiantes fuera del Reino Unido deben consultar una edición con licencia escolar.',
  },
  'rev.texts.af.essays.intro': {
    en: 'Five structured essay plans covering the most common GCSE exam questions on Animal Farm. Each plan includes a thesis statement, paragraph-level guidance with evidence and analysis, a conclusion and an exam tip.',
    ar: 'خمس خطط مقالات منظّمة تغطّي أكثر أسئلة امتحان GCSE شيوعاً عن Animal Farm. كل خطة تشمل صياغة أطروحة، وإرشاد على مستوى الفقرة بالدليل والتحليل، وخاتمة، ونصيحة للامتحان.',
    es: 'Cinco planes de ensayo estructurados que cubren las preguntas de examen GCSE más comunes sobre Animal Farm. Cada plan incluye una declaración de tesis, orientación a nivel de párrafo con evidencia y análisis, una conclusión y un consejo de examen.',
  },
  'rev.texts.af.characters.intro': {
    en: 'Eight key characters analysed in depth: role, allegorical significance, character arc, key quotations and exam tips. Each character is a lens through which Orwell examines power, loyalty and betrayal.',
    ar: 'ثماني شخصيات مفتاحية محلّلة بعمق: الدور، والدلالة الرمزية، ومسار الشخصية، والاقتباسات المفتاحية، ونصائح الامتحان. كل شخصية عدسة يفحص من خلالها Orwell السلطة والولاء والخيانة.',
    es: 'Ocho personajes clave analizados a fondo: papel, significado alegórico, arco del personaje, citas clave y consejos de examen. Cada personaje es una lente con la que Orwell examina el poder, la lealtad y la traición.',
  },
  'rev.texts.af.chapters.intro': {
    en: 'All 10 chapters analysed with key events, character development, allegorical parallels and short quotations. Use this as a detailed revision companion alongside your own annotated copy.',
    ar: 'كل الـ 10 فصول محلّلة مع الأحداث المفتاحية وتطوّر الشخصيات والتوازيات الرمزية والاقتباسات القصيرة. استخدمها كرفيق مراجعة مفصّل جنب نسختك المشروحة.',
    es: 'Los 10 capítulos analizados con eventos clave, desarrollo de personajes, paralelismos alegóricos y citas breves. Úsalo como compañero de repaso detallado junto a tu propia copia anotada.',
  },
  'rev.texts.af.rights_notice': {
    en: 'Rights notice: While Animal Farm entered UK public domain in 2021, the Orwell estate (AM Heath) actively manages educational use. Quotations on this page are short fair-dealing extracts; longer engagement should use a school-licensed edition. Short quotations (each under 15 words) reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 (s.30) for the purpose of criticism, review and educational study. Animal Farm by George Orwell is published by Penguin Books. Full text available from your school or local library.',
    ar: 'إشعار حقوق: مع إن Animal Farm دخلت الملكية العامة في UK في 2021، إلا إن the Orwell estate (AM Heath) يدير الاستخدام التعليمي بفاعلية. الاقتباسات في هذي الصفحة مقتطفات قصيرة ضمن الاستخدام العادل؛ التعامل الأطول لازم يستخدم طبعة مرخّصة للمدارس. اقتباسات قصيرة (كل واحد أقل من 15 كلمة) منسوخة بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 (s.30) لغرض النقد والمراجعة والدراسة التعليمية. Animal Farm تأليف George Orwell صادرة عن Penguin Books. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Aviso de derechos: Aunque Animal Farm entró en el dominio público del Reino Unido en 2021, el patrimonio de Orwell (AM Heath) gestiona activamente el uso educativo. Las citas de esta página son extractos breves de uso legítimo; para un uso más extenso conviene una edición con licencia escolar. Citas breves (cada una de menos de 15 palabras) reproducidas conforme a la disposición de uso legítimo de la Copyright, Designs and Patents Act 1988 (s.30) con fines de crítica, reseña y estudio educativo. Animal Farm de George Orwell está publicada por Penguin Books. Texto completo disponible en tu colegio o biblioteca local.',
  },
  'rev.texts.af.rights_notice_short': {
    en: 'Rights notice: While Animal Farm entered UK public domain in 2021, the Orwell estate (AM Heath) actively manages educational use. Quotations on this page are short fair-dealing extracts; longer engagement should use a school-licensed edition. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 (s.30) for criticism and review. Full text available from your school or local library.',
    ar: 'إشعار حقوق: مع إن Animal Farm دخلت الملكية العامة في UK في 2021، إلا إن the Orwell estate (AM Heath) يدير الاستخدام التعليمي بفاعلية. الاقتباسات في هذي الصفحة مقتطفات قصيرة ضمن الاستخدام العادل؛ التعامل الأطول لازم يستخدم طبعة مرخّصة للمدارس. اقتباسات قصيرة منسوخة بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 (s.30) للنقد والمراجعة. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Aviso de derechos: Aunque Animal Farm entró en el dominio público del Reino Unido en 2021, el patrimonio de Orwell (AM Heath) gestiona activamente el uso educativo. Las citas de esta página son extractos breves de uso legítimo; para un uso más extenso conviene una edición con licencia escolar. Citas breves reproducidas conforme a la disposición de uso legítimo de la Copyright, Designs and Patents Act 1988 (s.30) para crítica y reseña. Texto completo disponible en tu colegio o biblioteca local.',
  },

  'rev.texts.common.context_link': {
    en: 'Context link',
    ar: 'رابط السياق',
    es: 'Vínculo de contexto',
  },
  'rev.texts.common.exam_tip_sc': {
    en: 'Exam tip',
    ar: 'نصيحة للامتحان',
    es: 'Consejo de examen',
  },
  'rev.texts.common.character_study': {
    en: 'Character Study',
    ar: 'دراسة الشخصيات',
    es: 'Estudio de personajes',
  },
  'rev.texts.common.c19_novel': {
    en: '19th-Century Novel',
    ar: 'رواية القرن التاسع عشر',
    es: 'Novela del siglo XIX',
  },
  'rev.texts.common.writers_methods': {
    en: "Writer's Methods",
    ar: 'أساليب الكاتب',
    es: 'Recursos del autor',
  },
  'rev.texts.common.key_chapters_analysed': {
    en: 'Key Chapters Analysed',
    ar: 'الفصول المفتاحية محلّلة',
    es: 'Capítulos clave analizados',
  },
  'rev.texts.common.crumb_revision': {
    en: 'Revision',
    ar: 'المراجعة',
    es: 'Repaso',
  },
  'rev.texts.common.crumb_set_texts': {
    en: 'Set Texts',
    ar: 'النصوص المقررة',
    es: 'Textos prescritos',
  },
  'rev.texts.common.key_themes': {
    en: 'Key Themes',
    ar: 'المحاور المفتاحية',
    es: 'Temas clave',
  },
  'rev.texts.common.key_symbols': {
    en: 'Key Symbols',
    ar: 'الرموز المفتاحية',
    es: 'Símbolos clave',
  },
  'rev.texts.common.meaning': { en: 'Meaning', ar: 'المعنى', es: 'Significado' },
  'rev.texts.common.symbolism': { en: 'Symbolism', ar: 'الرمزية', es: 'Simbolismo' },
  'rev.texts.common.crumb_chapters': {
    en: 'Chapters',
    ar: 'الفصول',
    es: 'Capítulos',
  },
  'rev.texts.common.crumb_characters': {
    en: 'Characters',
    ar: 'الشخصيات',
    es: 'Personajes',
  },
  'rev.texts.common.crumb_context': {
    en: 'Context',
    ar: 'السياق',
    es: 'Contexto',
  },
  'rev.texts.common.crumb_essay_plans': {
    en: 'Essay Plans',
    ar: 'خطط المقالات',
    es: 'Planes de ensayo',
  },
  'rev.texts.common.crumb_key_quotes': {
    en: 'Key Quotes',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts.common.key_quotation': {
    en: 'Key Quotation',
    ar: 'الاقتباس المفتاحي',
    es: 'Cita clave',
  },
  'rev.texts.common.allegorical_framework': {
    en: 'Allegorical Framework',
    ar: 'الإطار الرمزي',
    es: 'Marco alegórico',
  },
  'rev.texts.common.allegorical_role_label': {
    en: 'Allegorical role: ',
    ar: 'الدور الرمزي: ',
    es: 'Papel alegórico: ',
  },
  'rev.texts.common.paragraph_n_dash': {
    en: 'Paragraph {n} — ',
    ar: 'الفقرة {n} — ',
    es: 'Párrafo {n} — ',
  },
  'rev.texts.common.how_to_use_essay_plans': {
    en: 'How to use these essay plans',
    ar: 'كيف تستخدم خطط المقالات هذي',
    es: 'Cómo usar estos planes de ensayo',
  },

  // ─── Frankenstein — shared chrome (rev.texts.fr.*) ──────────────────────
  'rev.texts.fr.back': {
    en: 'Back to Frankenstein',
    ar: 'رجوع إلى Frankenstein',
    es: 'Volver a Frankenstein',
  },
  'rev.texts.fr.byline': {
    en: 'Frankenstein by Mary Shelley',
    ar: 'Frankenstein تأليف Mary Shelley',
    es: 'Frankenstein de Mary Shelley',
  },
  'rev.texts.fr.public_domain': {
    en: 'Frankenstein; or, The Modern Prometheus (1818) by Mary Shelley is in the public domain. All quotations are reproduced freely.',
    ar: 'Frankenstein; or, The Modern Prometheus (1818) تأليف Mary Shelley ضمن الملكية العامة. كل الاقتباسات مُعاد إنتاجها بحرية.',
    es: 'Frankenstein; or, The Modern Prometheus (1818) de Mary Shelley es de dominio público. Todas las citas se reproducen libremente.',
  },
  'rev.texts.fr.public_domain_short': {
    en: 'Frankenstein (1818) by Mary Shelley is in the public domain. Quotations are reproduced freely.',
    ar: 'Frankenstein (1818) تأليف Mary Shelley ضمن الملكية العامة. الاقتباسات مُعاد إنتاجها بحرية.',
    es: 'Frankenstein (1818) de Mary Shelley es de dominio público. Las citas se reproducen libremente.',
  },
  'rev.texts.fr.themes.title': {
    en: 'Themes - Deep Study',
    ar: 'المحاور - دراسة معمّقة',
    es: 'Temas - Estudio profundo',
  },
  'rev.texts.fr.characters.title': {
    en: 'Characters - Deep Study',
    ar: 'الشخصيات - دراسة معمّقة',
    es: 'Personajes - Estudio profundo',
  },
  'rev.texts.fr.characters.intro': {
    en: 'Detailed analysis of every major character with key quotations, contextual links, and exam tips for top-grade responses.',
    ar: 'تحليل مفصّل لكل شخصية رئيسية مع الاقتباسات المفتاحية والروابط السياقية ونصائح الامتحان لإجابات أعلى الدرجات.',
    es: 'Análisis detallado de cada personaje principal con citas clave, vínculos contextuales y consejos de examen para respuestas de máxima nota.',
  },
  'rev.texts.fr.chapters.intro': {
    en: "Deep analysis of the most important chapters for the exam: key quotations, writer's methods, and theme links for each section of the novel.",
    ar: 'تحليل معمّق لأهم الفصول للامتحان: الاقتباسات المفتاحية وأساليب الكاتب وروابط المحاور لكل قسم من الرواية.',
    es: 'Análisis profundo de los capítulos más importantes para el examen: citas clave, recursos del autor y vínculos temáticos de cada sección de la novela.',
  },
  'rev.texts.fr.quotes.title': {
    en: '25 Key Quotes by Theme',
    ar: '25 اقتباس مفتاحي حسب المحور',
    es: '25 citas clave por tema',
  },
  'rev.texts.fr.quotes.intro': {
    en: 'Every quotation you need for the exam, organised by theme with detailed analysis. All from the public-domain 1818 text.',
    ar: 'كل اقتباس تحتاجه للامتحان، مرتّب حسب المحور مع تحليل مفصّل. كله من نص 1818 ضمن الملكية العامة.',
    es: 'Todas las citas que necesitas para el examen, organizadas por tema con análisis detallado. Todas del texto de dominio público de 1818.',
  },
  'rev.texts.fr.quotes.jump_to_theme': {
    en: 'Jump to theme',
    ar: 'انتقل لمحور',
    es: 'Ir a un tema',
  },
  'rev.texts.fr.quotes.public_domain': {
    en: 'Frankenstein; or, The Modern Prometheus (1818) by Mary Shelley is in the public domain. All quotations are from the original 1818 text and are reproduced freely.',
    ar: 'Frankenstein; or, The Modern Prometheus (1818) تأليف Mary Shelley ضمن الملكية العامة. كل الاقتباسات من نص 1818 الأصلي ومُعاد إنتاجها بحرية.',
    es: 'Frankenstein; or, The Modern Prometheus (1818) de Mary Shelley es de dominio público. Todas las citas provienen del texto original de 1818 y se reproducen libremente.',
  },
  'rev.texts.fr.essays.title': {
    en: 'Model Essay Plans',
    ar: 'خطط مقالات نموذجية',
    es: 'Planes de ensayo modelo',
  },
  'rev.texts.fr.essays.intro': {
    en: 'Five exam-ready essay plans with introductions, three-paragraph structures, embedded quotations, analysis, context, and conclusions.',
    ar: 'خمس خطط مقالات جاهزة للامتحان مع مقدّمات وبنى من ثلاث فقرات واقتباسات مدمجة وتحليل وسياق وخواتيم.',
    es: 'Cinco planes de ensayo listos para el examen con introducciones, estructuras de tres párrafos, citas integradas, análisis, contexto y conclusiones.',
  },
  'rev.texts.fr.essays.general_strategy': {
    en: 'General exam strategy',
    ar: 'استراتيجية امتحان عامة',
    es: 'Estrategia general de examen',
  },
  'rev.texts.fr.extract.badge': {
    en: 'Volume I · Chapter 5 · The Awakening',
    ar: 'Volume I · Chapter 5 · The Awakening',
    es: 'Volume I · Chapter 5 · The Awakening',
  },
  'rev.texts.fr.extract.intro': {
    en: 'A guided extract walkthrough on the moment Victor Frankenstein animates the Creature. Each card invites you to notice a feature, say what the writer is doing with it, and zoom out to context. A model 250-word paragraph follows.',
    ar: 'شرح موجّه لمقتطف اللحظة اللي يبثّ فيها Victor Frankenstein الحياة في the Creature. كل بطاقة تدعوك تلاحظ ميزة (notice)، وتقول شنو يسوّي الكاتب فيها (say)، وتوسّع الصورة للسياق (zoom out). تتبعها فقرة نموذجية من 250 كلمة.',
    es: 'Un recorrido guiado por el extracto del momento en que Victor Frankenstein da vida a la Criatura. Cada tarjeta te invita a observar un rasgo (notice), decir qué hace el autor con él (say) y ampliar al contexto (zoom out). A continuación, un párrafo modelo de 250 palabras.',
  },
  'rev.texts.fr.extract.opens': {
    en: 'Extract opens: ',
    ar: 'المقتطف يبدأ: ',
    es: 'El extracto comienza: ',
  },
  'rev.texts.fr.extract.closes': {
    en: 'Extract closes: ',
    ar: 'المقتطف ينتهي: ',
    es: 'El extracto termina: ',
  },
  'rev.texts.fr.extract.attribution': {
    en: 'From Frankenstein; or, The Modern Prometheus, Mary Shelley, 1818 (public domain).',
    ar: 'من Frankenstein; or, The Modern Prometheus، Mary Shelley، 1818 (ضمن الملكية العامة).',
    es: 'De Frankenstein; or, The Modern Prometheus, Mary Shelley, 1818 (dominio público).',
  },
  'rev.texts.fr.extract.nsz_h': {
    en: 'Notice / Say / Zoom Out',
    ar: 'Notice / Say / Zoom Out',
    es: 'Notice / Say / Zoom Out',
  },
  'rev.texts.fr.extract.model_para_h': {
    en: 'Model Paragraph (250 words)',
    ar: 'الفقرة النموذجية (250 كلمة)',
    es: 'Párrafo modelo (250 palabras)',
  },
  'rev.texts.fr.extract.why_works_h': {
    en: 'Why this paragraph works',
    ar: 'ليش هذي الفقرة ناجحة',
    es: 'Por qué funciona este párrafo',
  },
  'rev.texts.fr.read.crumb_current': {
    en: 'Read the Novel',
    ar: 'اقرأ الرواية',
    es: 'Leer la novela',
  },
  'rev.texts.fr.read.pd_label': {
    en: 'Public Domain Text',
    ar: 'نص ضمن الملكية العامة',
    es: 'Texto de dominio público',
  },
  'rev.texts.fr.read.pd_body': {
    en: 'Frankenstein; or, The Modern Prometheus (1818) by Mary Shelley is in the public domain. The text below is from the original 1818 first edition. Key chapters are presented with interactive annotations for GCSE study.',
    ar: 'Frankenstein; or, The Modern Prometheus (1818) تأليف Mary Shelley ضمن الملكية العامة. النص تحت من الطبعة الأولى الأصلية 1818. الفصول المفتاحية معروضة مع شروحات تفاعلية لدراسة GCSE.',
    es: 'Frankenstein; or, The Modern Prometheus (1818) de Mary Shelley es de dominio público. El texto siguiente es de la primera edición original de 1818. Los capítulos clave se presentan con anotaciones interactivas para el estudio de GCSE.',
  },
  'rev.texts.fr.read.footer_pd': {
    en: 'Frankenstein; or, The Modern Prometheus (1818) by Mary Shelley is in the public domain. Text sourced from the 1818 first edition. Annotations are original study material.',
    ar: 'Frankenstein; or, The Modern Prometheus (1818) تأليف Mary Shelley ضمن الملكية العامة. النص مأخوذ من الطبعة الأولى 1818. الشروحات مادة دراسية أصلية.',
    es: 'Frankenstein; or, The Modern Prometheus (1818) de Mary Shelley es de dominio público. Texto tomado de la primera edición de 1818. Las anotaciones son material de estudio original.',
  },
  'rev.texts.fr.read.back_to_guide': {
    en: 'Back to Study Guide',
    ar: 'رجوع لدليل الدراسة',
    es: 'Volver a la guía de estudio',
  },
  'rev.texts.fr.themes.intro': {
    en: 'Comprehensive analysis of the six key themes with quotations, contextual links, and exam strategies.',
    ar: 'تحليل شامل للمحاور الستة المفتاحية مع الاقتباسات والروابط السياقية واستراتيجيات الامتحان.',
    es: 'Análisis exhaustivo de los seis temas clave con citas, vínculos contextuales y estrategias de examen.',
  },

  // ─── Lord of the Flies — shared chrome (rev.texts.lotf.*) ───────────────
  'rev.texts.lotf.back': {
    en: 'Back to Lord of the Flies',
    ar: 'رجوع إلى Lord of the Flies',
    es: 'Volver a Lord of the Flies',
  },
  'rev.texts.lotf.byline': {
    en: 'by William Golding -- published 1954',
    ar: 'تأليف William Golding -- نُشرت 1954',
    es: 'por William Golding -- publicada en 1954',
  },
  'rev.texts.lotf.fair_dealing': {
    en: 'Short quotations from Lord of the Flies by William Golding (1954) are reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism, review and educational study. Full text available from your school or local library.',
    ar: 'اقتباسات قصيرة من Lord of the Flies تأليف William Golding (1954) مُعاد إنتاجها بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 لغرض النقد والمراجعة والدراسة التعليمية. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Citas breves de Lord of the Flies de William Golding (1954) reproducidas conforme a la disposición de uso legítimo de la Copyright, Designs and Patents Act 1988 con fines de crítica, reseña y estudio educativo. Texto completo disponible en tu colegio o biblioteca local.',
  },
  'rev.texts.lotf.themes.badge': {
    en: 'Themes & Symbolism',
    ar: 'المحاور والرمزية',
    es: 'Temas y simbolismo',
  },
  'rev.texts.lotf.themes.title': {
    en: 'Lord of the Flies -- Themes & Symbolism',
    ar: 'Lord of the Flies -- المحاور والرمزية',
    es: 'Lord of the Flies -- Temas y simbolismo',
  },
  'rev.texts.lotf.themes.intro': {
    en: "Detailed analysis of the novel's key themes -- civilisation vs savagery, power, innocence and fear -- plus the four central symbols: the conch, the signal fire, the beast and the pig's head.",
    ar: "تحليل مفصّل لمحاور الرواية المفتاحية -- الحضارة مقابل الهمجية، والسلطة، والبراءة، والخوف -- زائد الرموز الأربعة المركزية: the conch، وthe signal fire، وthe beast، وthe pig's head.",
    es: "Análisis detallado de los temas clave de la novela -- civilización frente a salvajismo, poder, inocencia y miedo -- más los cuatro símbolos centrales: the conch, the signal fire, the beast y the pig's head.",
  },
  'rev.texts.lotf.themes.development': {
    en: 'Development through the novel',
    ar: 'التطوّر عبر الرواية',
    es: 'Desarrollo a lo largo de la novela',
  },
  'rev.texts.lotf.chapters.title': {
    en: 'Lord of the Flies -- Chapters',
    ar: 'Lord of the Flies -- الفصول',
    es: 'Lord of the Flies -- Capítulos',
  },
  'rev.texts.lotf.chapters.intro': {
    en: 'Detailed analysis of all twelve chapters, covering key events, symbolism, character development and a key quotation for each.',
    ar: 'تحليل مفصّل لكل الفصول الاثني عشر، يغطّي الأحداث المفتاحية والرمزية وتطوّر الشخصيات واقتباس مفتاحي لكل فصل.',
    es: 'Análisis detallado de los doce capítulos, que cubre eventos clave, simbolismo, desarrollo de personajes y una cita clave para cada uno.',
  },
  'rev.texts.lotf.characters.badge': {
    en: 'Character Analysis',
    ar: 'تحليل الشخصيات',
    es: 'Análisis de personajes',
  },
  'rev.texts.lotf.characters.title': {
    en: 'Lord of the Flies -- Characters',
    ar: 'Lord of the Flies -- الشخصيات',
    es: 'Lord of the Flies -- Personajes',
  },
  'rev.texts.lotf.characters.intro': {
    en: 'In-depth analysis of the major characters, their symbolic roles, development across the novel, and the key quotations you need for the exam.',
    ar: 'تحليل معمّق للشخصيات الرئيسية، وأدوارها الرمزية، وتطوّرها عبر الرواية، والاقتباسات المفتاحية اللي تحتاجها للامتحان.',
    es: 'Análisis a fondo de los personajes principales, sus papeles simbólicos, su desarrollo a lo largo de la novela y las citas clave que necesitas para el examen.',
  },
  'rev.texts.lotf.fair_dealing_short': {
    en: 'Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.',
    ar: 'اقتباسات قصيرة منسوخة بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 للنقد والمراجعة. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Citas breves reproducidas conforme a la disposición de uso legítimo de la Copyright, Designs and Patents Act 1988 para crítica y reseña. Texto completo disponible en tu colegio o biblioteca local.',
  },
  'rev.texts.lotf.faber_fair_dealing': {
    en: 'Short quotations (≤15 words each) reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism, review and educational study. Lord of the Flies by William Golding is published by Faber and Faber. Full text available from your school or local library.',
    ar: 'اقتباسات قصيرة (15 كلمة أو أقل لكل واحد) منسوخة بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 لغرض النقد والمراجعة والدراسة التعليمية. Lord of the Flies تأليف William Golding صادرة عن Faber and Faber. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Citas breves (≤15 palabras cada una) reproducidas conforme a la disposición de uso legítimo de la Copyright, Designs and Patents Act 1988 con fines de crítica, reseña y estudio educativo. Lord of the Flies de William Golding está publicada por Faber and Faber. Texto completo disponible en tu colegio o biblioteca local.',
  },
  'rev.texts.lotf.context.title': {
    en: 'Lord of the Flies — Context',
    ar: 'Lord of the Flies — السياق',
    es: 'Lord of the Flies — Contexto',
  },
  'rev.texts.lotf.context.byline': {
    en: 'by William Golding — 1954',
    ar: 'تأليف William Golding — 1954',
    es: 'por William Golding — 1954',
  },
  'rev.texts.lotf.context.ao3_badge': {
    en: 'AO3 — Context',
    ar: 'AO3 — السياق',
    es: 'AO3 — Contexto',
  },
  'rev.texts.lotf.context.ao3_want_h': {
    en: 'AO3 — What examiners want',
    ar: 'AO3 — شنو يبغى المصححون',
    es: 'AO3 — Qué quieren los examinadores',
  },
  'rev.texts.lotf.context.intro': {
    en: 'Historical and social context for GCSE literature. Covers post-WWII Britain, Golding’s war experience, the atomic age, The Coral Island, original sin, the Cold War and the Nobel Prize.',
    ar: 'السياق التاريخي والاجتماعي لـ GCSE literature. يغطّي بريطانيا ما بعد الحرب العالمية الثانية، وتجربة Golding في الحرب، والعصر الذري، وThe Coral Island، والخطيئة الأصلية، وthe Cold War، وthe Nobel Prize.',
    es: 'Contexto histórico y social para GCSE literature. Cubre la Gran Bretaña de posguerra, la experiencia bélica de Golding, la era atómica, The Coral Island, el pecado original, the Cold War y el Nobel Prize.',
  },
  'rev.texts.lotf.context.ao3_want_body': {
    en: 'AO3 rewards you for showing how context shapes meaning. Do not simply list facts about WWII — explain how Golding’s war experience and the atomic age shape his view of human nature and the novel’s argument. The best answers show why Golding chose to challenge Victorian optimism about childhood innocence.',
    ar: 'AO3 يكافئك لمّا تبيّن كيف السياق يشكّل المعنى. لا تسرد حقائق عن الحرب العالمية الثانية وبس — اشرح كيف تجربة Golding في الحرب والعصر الذري تشكّلان نظرته للطبيعة البشرية وحجّة الرواية. أفضل الإجابات تبيّن ليش اختار Golding يتحدّى التفاؤل الفيكتوري حول براءة الطفولة.',
    es: 'AO3 te premia por mostrar cómo el contexto da forma al significado. No te limites a enumerar hechos sobre la Segunda Guerra Mundial: explica cómo la experiencia bélica de Golding y la era atómica moldean su visión de la naturaleza humana y el argumento de la novela. Las mejores respuestas muestran por qué Golding eligió desafiar el optimismo victoriano sobre la inocencia de la infancia.',
  },
  'rev.texts.lotf.context.continue_sub': {
    en: 'Explore characters, themes, key quotes and essay plans for Lord of the Flies.',
    ar: 'استكشف الشخصيات والمحاور والاقتباسات المفتاحية وخطط المقالات لـ Lord of the Flies.',
    es: 'Explora los personajes, los temas, las citas clave y los planes de ensayo de Lord of the Flies.',
  },
  'rev.texts.lotf.essays.title': {
    en: 'Lord of the Flies — Essay Plans',
    ar: 'Lord of the Flies — خطط المقالات',
    es: 'Lord of the Flies — Planes de ensayo',
  },
  'rev.texts.lotf.essays.byline': {
    en: 'by William Golding — 1954',
    ar: 'تأليف William Golding — 1954',
    es: 'por William Golding — 1954',
  },
  'rev.texts.lotf.essays.intro': {
    en: 'Six structured essay plans covering the most common GCSE exam questions on Lord of the Flies. Each plan includes a thesis statement, paragraph-level guidance with evidence and analysis, a conclusion and an exam tip.',
    ar: 'ست خطط مقالات منظّمة تغطّي أكثر أسئلة امتحان GCSE شيوعاً عن Lord of the Flies. كل خطة تشمل صياغة أطروحة، وإرشاد على مستوى الفقرة بالدليل والتحليل، وخاتمة، ونصيحة للامتحان.',
    es: 'Seis planes de ensayo estructurados que cubren las preguntas de examen GCSE más comunes sobre Lord of the Flies. Cada plan incluye una declaración de tesis, orientación a nivel de párrafo con evidencia y análisis, una conclusión y un consejo de examen.',
  },
  'rev.texts.lotf.essays.continue_sub': {
    en: 'Explore characters, themes, context and key quotes for Lord of the Flies.',
    ar: 'استكشف الشخصيات والمحاور والسياق والاقتباسات المفتاحية لـ Lord of the Flies.',
    es: 'Explora los personajes, los temas, el contexto y las citas clave de Lord of the Flies.',
  },
  'rev.texts.lotf.quotes.title': {
    en: 'Lord of the Flies — Key Quotes',
    ar: 'Lord of the Flies — الاقتباسات المفتاحية',
    es: 'Lord of the Flies — Citas clave',
  },
  'rev.texts.lotf.quotes.byline': {
    en: 'by William Golding — 1954',
    ar: 'تأليف William Golding — 1954',
    es: 'por William Golding — 1954',
  },
  'rev.texts.lotf.quotes.intro': {
    en: 'Twenty essential quotations with speaker, chapter reference, detailed analysis and thematic links for GCSE English Literature.',
    ar: 'عشرون اقتباس أساسي مع المتحدّث ومرجع الفصل وتحليل مفصّل وروابط المحاور لـ GCSE English Literature.',
    es: 'Veinte citas esenciales con hablante, referencia de capítulo, análisis detallado y vínculos temáticos para GCSE English Literature.',
  },
  'rev.texts.lotf.quotes.continue_sub': {
    en: 'Explore characters, themes, context and essay plans for Lord of the Flies.',
    ar: 'استكشف الشخصيات والمحاور والسياق وخطط المقالات لـ Lord of the Flies.',
    es: 'Explora los personajes, los temas, el contexto y los planes de ensayo de Lord of the Flies.',
  },
  'rev.texts.lotf.extract.crumb_current': {
    en: 'Extract walkthrough',
    ar: 'شرح المقتطف',
    es: 'Recorrido por el extracto',
  },
  'rev.texts.lotf.extract.badge_chapter': {
    en: 'Chapter 9 - A View to a Death',
    ar: 'الفصل 9 - A View to a Death',
    es: 'Capítulo 9 - A View to a Death',
  },
  'rev.texts.lotf.extract.title': {
    en: "Simon's death - extract walkthrough",
    ar: 'موت Simon - شرح المقتطف',
    es: 'La muerte de Simon - recorrido por el extracto',
  },
  'rev.texts.lotf.extract.intro': {
    en: 'How Golding stages the storm, the chant and the misrecognition that kills Simon - and how the scene carries the central thesis of the whole novel. Read the cards in order; each Notice points at something concrete, each Say tells you what to write about it, and each Zoom out places it in the bigger argument.',
    ar: 'كيف يخرج Golding العاصفة والترنيمة وسوء التعرّف اللي يقتل Simon - وكيف يحمل المشهد الأطروحة المركزية للرواية كاملة. اقرأ البطاقات بالترتيب؛ كل Notice يشير لشي ملموس، وكل Say يقول لك شنو تكتب عنه، وكل Zoom out يضعه في الحجّة الأكبر.',
    es: 'Cómo Golding escenifica la tormenta, el cántico y la confusión que mata a Simon, y cómo la escena lleva la tesis central de toda la novela. Lee las tarjetas en orden; cada Notice señala algo concreto, cada Say te dice qué escribir sobre ello y cada Zoom out lo sitúa en el argumento más amplio.',
  },
  'rev.texts.lotf.extract.back_to_guide': {
    en: 'Back to Lord of the Flies guide',
    ar: 'رجوع لدليل Lord of the Flies',
    es: 'Volver a la guía de Lord of the Flies',
  },
  'rev.texts.lotf.extract.card_of': {
    en: 'Card {n} of {total}',
    ar: 'البطاقة {n} من {total}',
    es: 'Tarjeta {n} de {total}',
  },
  'rev.texts.lotf.extract.attribution': {
    en: '- Golding, Ch. 9',
    ar: '- Golding، الفصل 9',
    es: '- Golding, cap. 9',
  },
  'rev.texts.lotf.extract.in_the_scene': {
    en: 'In the scene: ',
    ar: 'في المشهد: ',
    es: 'En la escena: ',
  },
  'rev.texts.lotf.extract.model_para_h': {
    en: "Model paragraph - Simon's death and the novel's thesis",
    ar: 'فقرة نموذجية - موت Simon وأطروحة الرواية',
    es: 'Párrafo modelo - la muerte de Simon y la tesis de la novela',
  },
  'rev.texts.lotf.extract.model_para_desc': {
    en: "A single, exam-length paragraph (~250 words) showing how to link this scene to Golding's argument that civilisation is a thin veneer over savagery. Use it as a target, not a script - your own paragraph should sound like you, not like this.",
    ar: 'فقرة واحدة بطول الامتحان (~250 كلمة) تبيّن كيف تربط هذا المشهد بحجّة Golding إن الحضارة قشرة رقيقة فوق الهمجية. استخدمها كهدف، مو كنص جاهز - فقرتك لازم تكون بصوتك أنت، مو مثل هذي.',
    es: 'Un solo párrafo de longitud de examen (~250 palabras) que muestra cómo vincular esta escena con el argumento de Golding de que la civilización es una fina capa sobre el salvajismo. Úsalo como objetivo, no como guion: tu párrafo debe sonar a ti, no a esto.',
  },
  'rev.texts.lotf.extract.words_suffix': {
    en: '~{n} words',
    ar: '~{n} كلمة',
    es: '~{n} palabras',
  },
  'rev.texts.lotf.extract.full_guide_title': {
    en: 'Full revision guide',
    ar: 'دليل المراجعة الكامل',
    es: 'Guía de repaso completa',
  },
  'rev.texts.lotf.extract.full_guide_desc': {
    en: 'Plot, characters, themes, context, key quotes, essay plans',
    ar: 'الحبكة والشخصيات والمحاور والسياق والاقتباسات المفتاحية وخطط المقالات',
    es: 'Argumento, personajes, temas, contexto, citas clave, planes de ensayo',
  },
  'rev.texts.lotf.extract.all_texts_title': {
    en: 'All set texts',
    ar: 'كل النصوص المقررة',
    es: 'Todos los textos prescritos',
  },
  'rev.texts.lotf.extract.all_texts_desc': {
    en: 'Browse other extract walkthroughs and revision guides',
    ar: 'تصفّح شروحات مقتطفات وأدلّة مراجعة ثانية',
    es: 'Explora otros recorridos por extractos y guías de repaso',
  },
  'rev.texts.lotf.extract.copyright_h': {
    en: 'Copyright & fair dealing',
    ar: 'حقوق النشر والاستخدام العادل',
    es: 'Derechos de autor y uso legítimo',
  },
  'rev.texts.lotf.extract.copyright_p1': {
    en: 'Lord of the Flies by William Golding (first published 1954) remains in copyright. The UK rights are held by Faber & Faber Ltd; the William Golding Estate is represented by United Agents. This page is published in the United Kingdom and relies on the fair dealing exception for criticism, review and quotation under sections 30(1) and 30(1ZA) of the Copyright, Designs and Patents Act 1988.',
    ar: 'Lord of the Flies تأليف William Golding (نُشرت أول مرة 1954) لا تزال محفوظة الحقوق. حقوق UK يملكها Faber & Faber Ltd؛ وthe William Golding Estate يمثّله United Agents. هذي الصفحة منشورة في United Kingdom وتعتمد على استثناء الاستخدام العادل للنقد والمراجعة والاقتباس بموجب sections 30(1) and 30(1ZA) من Copyright, Designs and Patents Act 1988.',
    es: 'Lord of the Flies de William Golding (publicada por primera vez en 1954) sigue protegida por derechos de autor. Los derechos en el Reino Unido los tiene Faber & Faber Ltd; el William Golding Estate está representado por United Agents. Esta página se publica en el Reino Unido y se acoge a la excepción de uso legítimo para crítica, reseña y cita conforme a las sections 30(1) and 30(1ZA) de la Copyright, Designs and Patents Act 1988.',
  },
  'rev.texts.lotf.extract.copyright_p2': {
    en: "Each verbatim fragment is fifteen words or fewer, taken from the novel's widely available text, used solely as the object of analytical commentary, and clearly attributed to Golding (Chapter 9). No continuous extract is reproduced; the scene is otherwise summarised in our own paraphrase. The amount used is no more than is necessary for the educational purpose of teaching close-reading technique to GCSE and IGCSE students.",
    ar: 'كل مقتطف حرفي خمس عشرة كلمة أو أقل، مأخوذ من نص الرواية المتوفر على نطاق واسع، ومُستخدم فقط كموضوع للتعليق التحليلي، ومنسوب بوضوح لـ Golding (الفصل 9). ما في مقتطف متّصل مُعاد إنتاجه؛ المشهد ملخّص بصياغتنا الخاصة. الكمية المستخدمة ما تزيد عن اللازم للغرض التعليمي في تعليم أسلوب القراءة المتأنّية لطلاب GCSE وIGCSE.',
    es: 'Cada fragmento textual tiene quince palabras o menos, tomado del texto ampliamente disponible de la novela, usado únicamente como objeto de comentario analítico y claramente atribuido a Golding (capítulo 9). No se reproduce ningún extracto continuo; la escena se resume con nuestra propia paráfrasis. La cantidad utilizada no excede lo necesario para el propósito educativo de enseñar la técnica de lectura atenta a estudiantes de GCSE e IGCSE.',
  },
  'rev.texts.lotf.extract.copyright_p3_pre': {
    en: 'If you are the rights holder and believe any use here exceeds fair dealing, please contact us at ',
    ar: 'إذا كنت صاحب الحقوق وتعتقد إن أي استخدام هنا يتجاوز الاستخدام العادل، تواصل معنا على ',
    es: 'Si eres el titular de los derechos y crees que algún uso aquí excede el uso legítimo, contáctanos en ',
  },
  'rev.texts.lotf.extract.copyright_p3_post': {
    en: ' and we will remove or revise the material promptly. Students should buy or borrow a licensed copy of the novel from Faber & Faber, their school library, or a public library.',
    ar: ' وراح نشيل أو نعدّل المادة بسرعة. على الطلاب شراء أو استعارة نسخة مرخّصة من الرواية من Faber & Faber أو مكتبة مدرستهم أو مكتبة عامة.',
    es: ' y eliminaremos o revisaremos el material de inmediato. Los estudiantes deben comprar o pedir prestada una copia con licencia de la novela en Faber & Faber, la biblioteca de su colegio o una biblioteca pública.',
  },

  // ─── An Inspector Calls — shared chrome (rev.texts.aic.*) ───────────────
  'rev.texts.aic.byline': {
    en: 'by J.B. Priestley — 1945',
    ar: 'تأليف J.B. Priestley — 1945',
    es: 'por J.B. Priestley — 1945',
  },
  'rev.texts.aic.back': {
    en: 'Back to An Inspector Calls',
    ar: 'رجوع إلى An Inspector Calls',
    es: 'Volver a An Inspector Calls',
  },
  'rev.texts.aic.fair_dealing': {
    en: 'Short quotations (≤15 words each) reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism, review and educational study. An Inspector Calls © J.B. Priestley Estate. Full text available from your school or local library.',
    ar: 'اقتباسات قصيرة (15 كلمة أو أقل لكل واحد) منسوخة بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 لغرض النقد والمراجعة والدراسة التعليمية. An Inspector Calls © J.B. Priestley Estate. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Citas breves (≤15 palabras cada una) reproducidas conforme a la disposición de uso legítimo (fair dealing) de la Copyright, Designs and Patents Act 1988 con fines de crítica, reseña y estudio educativo. An Inspector Calls © J.B. Priestley Estate. Texto completo disponible en tu colegio o biblioteca local.',
  },

  // AIC acts page
  'rev.texts.aic.acts.title': {
    en: 'An Inspector Calls - Acts Analysis',
    ar: 'An Inspector Calls - تحليل الفصول',
    es: 'An Inspector Calls - Análisis de los actos',
  },
  'rev.texts.aic.acts.intro': {
    en: 'Detailed analysis of all three acts with key quotations, language techniques and dramatic devices. Every quote is 15 words or fewer.',
    ar: 'تحليل تفصيلي لكل فصول المسرحية الثلاثة مع الاقتباسات المفتاحية والأساليب اللغوية والوسائل الدرامية. كل اقتباس 15 كلمة أو أقل بالإنجليزية.',
    es: 'Análisis detallado de los tres actos con citas clave, técnicas lingüísticas y recursos dramáticos. Cada cita tiene 15 palabras o menos.',
  },
  'rev.texts.aic.acts.language_techniques_act': {
    en: 'Language Techniques — Act {n}',
    ar: 'الأساليب اللغوية — الفصل {n}',
    es: 'Técnicas lingüísticas — Acto {n}',
  },
  'rev.texts.aic.acts.dramatic_techniques_act': {
    en: 'Dramatic Techniques — Act {n}',
    ar: 'الوسائل الدرامية — الفصل {n}',
    es: 'Recursos dramáticos — Acto {n}',
  },
  'rev.texts.aic.acts.key_quotes_act': {
    en: 'Key Quotes — Act {n}',
    ar: 'الاقتباسات المفتاحية — الفصل {n}',
    es: 'Citas clave — Acto {n}',
  },
  'rev.texts.aic.acts.continue_sub': {
    en: 'Explore essay plans and key quotes for An Inspector Calls.',
    ar: 'استكشف خطط المقالات والاقتباسات المفتاحية لـ An Inspector Calls.',
    es: 'Explora los planes de ensayo y las citas clave de An Inspector Calls.',
  },
  'rev.texts.aic.acts_link': {
    en: 'Acts Analysis',
    ar: 'تحليل الفصول',
    es: 'Análisis de los actos',
  },

  // AIC characters page
  'rev.texts.aic.characters.title': {
    en: 'An Inspector Calls — Characters',
    ar: 'An Inspector Calls — الشخصيات',
    es: 'An Inspector Calls — Personajes',
  },
  'rev.texts.aic.characters.intro': {
    en: 'Complete character analysis for all seven key characters. Each section includes a detailed overview, character arc, key quotes with AO2 analysis, theme links, and exam technique advice.',
    ar: 'تحليل كامل للشخصيات لكل الشخصيات السبع المفتاحية. كل قسم يشمل نظرة عامة مفصّلة، ومسار الشخصية، واقتباسات مفتاحية مع تحليل AO2، وروابط المحاور، ونصائح أسلوب الامتحان.',
    es: 'Análisis completo de los siete personajes clave. Cada sección incluye un resumen detallado, el arco del personaje, citas clave con análisis AO2, vínculos temáticos y consejos de técnica de examen.',
  },
  'rev.texts.aic.characters.exam_technique_body': {
    en: 'In GCSE literature, character questions always require you to discuss Priestley’s intentions (AO1/AO3) and analyse language and structure (AO2). For every character point, ask: what is Priestley trying to show the audience through this character?',
    ar: 'في GCSE literature، أسئلة الشخصيات دايماً تطلب منك تناقش نوايا Priestley (AO1/AO3) وتحلّل اللغة والبنية (AO2). لكل نقطة عن الشخصية، اسأل: شنو يبغى Priestley يبيّن للجمهور من خلال هذي الشخصية؟',
    es: 'En GCSE literature, las preguntas sobre personajes siempre requieren que analices las intenciones de Priestley (AO1/AO3) y el lenguaje y la estructura (AO2). Para cada punto, pregúntate: ¿qué intenta mostrar Priestley al público a través de este personaje?',
  },
  'rev.texts.aic.characters.continue_sub': {
    en: 'Explore themes, key quotes, and context for An Inspector Calls.',
    ar: 'استكشف المحاور والاقتباسات المفتاحية والسياق لـ An Inspector Calls.',
    es: 'Explora los temas, las citas clave y el contexto de An Inspector Calls.',
  },

  // AIC context page
  'rev.texts.aic.context.title': {
    en: 'An Inspector Calls — Context',
    ar: 'An Inspector Calls — السياق',
    es: 'An Inspector Calls — Contexto',
  },
  'rev.texts.aic.context.intro': {
    en: 'Historical and social context for GCSE literature. Covers the 1912 setting, 1945 writing date, Priestley’s socialism, the welfare state, the class system, women’s rights, and the Labour landslide.',
    ar: 'السياق التاريخي والاجتماعي لـ GCSE literature. يغطّي إطار 1912، وتاريخ الكتابة 1945، واشتراكية Priestley، ودولة الرفاه، والنظام الطبقي، وحقوق المرأة، والفوز الكاسح لحزب Labour.',
    es: 'Contexto histórico y social para GCSE literature. Cubre la ambientación de 1912, la fecha de escritura de 1945, el socialismo de Priestley, el estado de bienestar, el sistema de clases, los derechos de las mujeres y la victoria aplastante de Labour.',
  },
  'rev.texts.aic.context.ao3_badge': {
    en: 'AO3 - Context',
    ar: 'AO3 - السياق',
    es: 'AO3 - Contexto',
  },
  'rev.texts.aic.context.ao3_want_h': {
    en: 'AO3 - What examiners want',
    ar: 'AO3 - شنو يبغى المصححون',
    es: 'AO3 - Qué quieren los examinadores',
  },
  'rev.texts.aic.context.ao3_want_body': {
    en: 'AO3 rewards you for showing how context shapes meaning. Do not simply list historical facts - explain how the 1912 setting and 1945 writing date affect the audience’s response to the play. The best AO3 answers explain why Priestley made specific choices, not just when things happened.',
    ar: 'AO3 يكافئك لمّا تبيّن كيف السياق يشكّل المعنى. لا تسرد الحقائق التاريخية وبس - اشرح كيف إطار 1912 وتاريخ الكتابة 1945 يأثّران على استجابة الجمهور للمسرحية. أفضل إجابات AO3 تشرح ليش سوّى Priestley خيارات معيّنة، مو بس متى صارت الأمور.',
    es: 'AO3 te premia por mostrar cómo el contexto da forma al significado. No te limites a enumerar hechos históricos: explica cómo la ambientación de 1912 y la fecha de escritura de 1945 afectan la respuesta del público a la obra. Las mejores respuestas de AO3 explican por qué Priestley tomó decisiones concretas, no solo cuándo ocurrieron las cosas.',
  },
  'rev.texts.aic.context.quick_ref_h': {
    en: 'Quick Reference: 1912 vs 1945',
    ar: 'مرجع سريع: 1912 مقابل 1945',
    es: 'Referencia rápida: 1912 vs 1945',
  },
  'rev.texts.aic.context.continue_sub': {
    en: 'Explore characters, themes, and key quotes for An Inspector Calls.',
    ar: 'استكشف الشخصيات والمحاور والاقتباسات المفتاحية لـ An Inspector Calls.',
    es: 'Explora los personajes, los temas y las citas clave de An Inspector Calls.',
  },

  // AIC key-quotes page
  'rev.texts.aic.quotes.title': {
    en: 'An Inspector Calls — Key Quotes',
    ar: 'An Inspector Calls — الاقتباسات المفتاحية',
    es: 'An Inspector Calls — Citas clave',
  },
  'rev.texts.aic.quotes.intro': {
    en: '30 essential quotations with full AO2 language analysis, AO3 context links, and exam technique tips. Filter by act or theme to find the quotes you need.',
    ar: '30 اقتباس أساسي مع تحليل لغوي AO2 كامل وروابط سياق AO3 ونصائح أسلوب الامتحان. صفّي حسب الفصل أو المحور عشان تلقى الاقتباسات اللي تبغاها.',
    es: '30 citas esenciales con análisis lingüístico AO2 completo, vínculos de contexto AO3 y consejos de técnica de examen. Filtra por acto o tema para encontrar las citas que necesitas.',
  },
  'rev.texts.aic.quotes.exam_technique_body': {
    en: 'You do not need to memorise every quote. Choose 3–4 versatile quotes per character that you can use across multiple themes and question types. For each, learn the quote, the speaker, the act, and one strong AO2 analytical point.',
    ar: 'مو لازم تحفظ كل اقتباس. اختر 3–4 اقتباسات مرنة لكل شخصية تقدر تستخدمها عبر محاور وأنواع أسئلة متعددة. لكل واحد، احفظ الاقتباس والمتحدّث والفصل ونقطة تحليلية AO2 قوية وحدة.',
    es: 'No necesitas memorizar todas las citas. Elige 3–4 citas versátiles por personaje que puedas usar en varios temas y tipos de pregunta. Para cada una, aprende la cita, el hablante, el acto y un punto analítico AO2 sólido.',
  },

  // AIC essay-plans page
  'rev.texts.aic.essays.title': {
    en: 'An Inspector Calls — Essay Plans',
    ar: 'An Inspector Calls — خطط المقالات',
    es: 'An Inspector Calls — Planes de ensayo',
  },
  'rev.texts.aic.essays.intro': {
    en: 'Five structured GCSE essay plans with thesis statements, paragraph plans, key quotes and analytical points. Use these as a framework for timed practice.',
    ar: 'خمس خطط مقالات GCSE منظّمة مع صياغات الأطروحة وخطط الفقرات والاقتباسات المفتاحية والنقاط التحليلية. استخدمها كإطار للتدريب الموقوت.',
    es: 'Cinco planes de ensayo GCSE estructurados con declaraciones de tesis, planes de párrafo, citas clave y puntos analíticos. Úsalos como marco para practicar con tiempo.',
  },
  'rev.texts.aic.essays.exam_tip_body': {
    en: 'These plans follow a four-paragraph structure (plus introduction and conclusion) suitable for a 45-minute GCSE literature response. Each paragraph uses a Point → Quote → Analysis → Link structure. Adapt the plans to match the specific wording of your exam question.',
    ar: 'هذي الخطط تتبع بنية من أربع فقرات (زائد مقدّمة وخاتمة) مناسبة لإجابة GCSE literature مدتها 45 دقيقة. كل فقرة تستخدم بنية Point → Quote → Analysis → Link. عدّل الخطط عشان تطابق صياغة سؤال امتحانك تحديداً.',
    es: 'Estos planes siguen una estructura de cuatro párrafos (más introducción y conclusión) adecuada para una respuesta de GCSE literature de 45 minutos. Cada párrafo usa una estructura Point → Quote → Analysis → Link. Adapta los planes a la redacción concreta de tu pregunta de examen.',
  },
  'rev.texts.aic.essays.continue_sub': {
    en: 'Deepen your knowledge with act analysis and key quotes.',
    ar: 'عمّق معرفتك مع تحليل الفصول والاقتباسات المفتاحية.',
    es: 'Profundiza tus conocimientos con el análisis de los actos y las citas clave.',
  },

  // AIC extract-walkthrough page
  'rev.texts.aic.extract.badge': {
    en: 'Extract walkthrough',
    ar: 'شرح المقتطف',
    es: 'Recorrido por el extracto',
  },
  'rev.texts.aic.extract.title': {
    en: 'The Inspector’s Final Speech — A Close Reading',
    ar: 'خطبة المفتش الختامية — قراءة متأنّية',
    es: 'El discurso final del Inspector — Una lectura atenta',
  },
  'rev.texts.aic.extract.byline': {
    en: 'An Inspector Calls, Act 3 — J.B. Priestley',
    ar: 'An Inspector Calls، الفصل 3 — J.B. Priestley',
    es: 'An Inspector Calls, Acto 3 — J.B. Priestley',
  },
  'rev.texts.aic.extract.how_to_read_h': {
    en: 'How to read this page',
    ar: 'كيف تقرأ هذي الصفحة',
    es: 'Cómo leer esta página',
  },
  'rev.texts.aic.extract.fragment_of': {
    en: 'Fragment {n} of {total}',
    ar: 'المقتطف {n} من {total}',
    es: 'Fragmento {n} de {total}',
  },
  'rev.texts.aic.extract.quote_caption': {
    en: 'Inspector Goole, Act 3 — {n} words (fair dealing)',
    ar: 'Inspector Goole، الفصل 3 — {n} كلمة (استخدام عادل)',
    es: 'Inspector Goole, Acto 3 — {n} palabras (uso legítimo)',
  },
  'rev.texts.aic.extract.notice_h': {
    en: 'Notice — what the words do',
    ar: 'لاحظ — شنو تسوّي الكلمات',
    es: 'Observa — qué hacen las palabras',
  },
  'rev.texts.aic.extract.say_h': {
    en: 'Say — your AO2 argument',
    ar: 'قُل — حجّتك في AO2',
    es: 'Di — tu argumento de AO2',
  },
  'rev.texts.aic.extract.zoom_h': {
    en: 'Zoom out — AO3 context',
    ar: 'وسّع الصورة — سياق AO3',
    es: 'Amplía — contexto de AO3',
  },
  'rev.texts.aic.extract.model_para_label': {
    en: 'Model paragraph — ~250 words',
    ar: 'فقرة نموذجية — ~250 كلمة',
    es: 'Párrafo modelo — ~250 palabras',
  },
  'rev.texts.aic.extract.intro': {
    en: 'A fragment-by-fragment walkthrough of the play’s didactic climax. We work through the speech in short, fair-dealing extracts — each followed by notice, say, and zoom-out cards that mirror the moves a strong AQA / Edexcel essay must make.',
    ar: 'شرح مقتطف-بمقتطف لذروة المسرحية التعليمية. نشتغل على الخطبة في مقتطفات قصيرة ضمن الاستخدام العادل — كل واحد يتبعه بطاقات notice وsay وzoom-out اللي تحاكي الخطوات اللي لازم يسوّيها مقال AQA / Edexcel القوي.',
    es: 'Un recorrido fragmento por fragmento del clímax didáctico de la obra. Trabajamos el discurso en extractos breves de uso legítimo, cada uno seguido de tarjetas notice, say y zoom-out que reflejan los movimientos que debe hacer un buen ensayo de AQA / Edexcel.',
  },
  'rev.texts.aic.extract.how_to_read_body': {
    en: 'Don’t skim. For each fragment, read the quotation aloud, then work through Notice (what the words do mechanically), Say (your argument about authorial method), and Zoom out (the AO3 context that makes the choice meaningful in 1945). This is the AO1 → AO2 → AO3 spine of a top-band paragraph.',
    ar: 'لا تمرّ مرور سريع. لكل مقتطف، اقرأ الاقتباس بصوت عالٍ، وبعدها اشتغل على Notice (شنو تسوّي الكلمات ميكانيكياً)، وSay (حجّتك حول أسلوب المؤلف)، وZoom out (سياق AO3 اللي يخلّي الخيار له معنى في 1945). هذا هو العمود الفقري AO1 → AO2 → AO3 للفقرة من أعلى فئة.',
    es: 'No leas por encima. Para cada fragmento, lee la cita en voz alta y luego trabaja Notice (qué hacen las palabras mecánicamente), Say (tu argumento sobre el método del autor) y Zoom out (el contexto AO3 que hace significativa la elección en 1945). Esta es la columna AO1 → AO2 → AO3 de un párrafo de banda alta.',
  },
  'rev.texts.aic.extract.model_para_title': {
    en: 'The final speech as Priestley’s didactic climax',
    ar: 'الخطبة الختامية كذروة Priestley التعليمية',
    es: 'El discurso final como clímax didáctico de Priestley',
  },
  'rev.texts.aic.extract.continue_sub': {
    en: 'Take this close-reading method into the rest of An Inspector Calls.',
    ar: 'خذ طريقة القراءة المتأنّية هذي لبقية An Inspector Calls.',
    es: 'Lleva este método de lectura atenta al resto de An Inspector Calls.',
  },
  'rev.texts.aic.extract.fair_dealing': {
    en: 'An Inspector Calls by J.B. Priestley remains in copyright (Heinemann editions; © the Estate of J.B. Priestley). All quotations on this page are short extracts of fifteen words or fewer, reproduced under the fair-dealing provisions of the Copyright, Designs and Patents Act 1988, sections 30(1) and 30(1ZA) for the purposes of criticism, review and quotation, with sufficient acknowledgement of the author and work. No continuous block extract is reproduced. Students should consult a licensed edition of the play (Heinemann, 1992 or later) for the complete text.',
    ar: 'An Inspector Calls تأليف J.B. Priestley لا تزال محفوظة الحقوق (Heinemann editions؛ © the Estate of J.B. Priestley). كل الاقتباسات في هذي الصفحة مقتطفات قصيرة من خمس عشرة كلمة أو أقل، منسوخة بموجب بنود الاستخدام العادل من Copyright, Designs and Patents Act 1988، sections 30(1) and 30(1ZA) لأغراض النقد والمراجعة والاقتباس، مع الإشارة الكافية للمؤلف والعمل. ما في مقتطف متّصل مُعاد إنتاجه. على الطلاب الرجوع لطبعة مرخّصة من المسرحية (Heinemann، 1992 أو أحدث) للنص الكامل.',
    es: 'An Inspector Calls de J.B. Priestley sigue protegida por derechos de autor (ediciones Heinemann; © the Estate of J.B. Priestley). Todas las citas de esta página son extractos breves de quince palabras o menos, reproducidos conforme a las disposiciones de uso legítimo de la Copyright, Designs and Patents Act 1988, sections 30(1) and 30(1ZA) con fines de crítica, reseña y cita, con suficiente reconocimiento del autor y la obra. No se reproduce ningún extracto continuo en bloque. Los estudiantes deben consultar una edición con licencia de la obra (Heinemann, 1992 o posterior) para el texto completo.',
  },
}
