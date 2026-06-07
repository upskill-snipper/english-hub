/**
 * dictionary-rev-texts2.ts
 *
 * SECOND shard of trilingual UI CHROME (EN + Khaleeji Gulf AR + ES) for the
 * /revision/texts/** set-text revision SUBPAGES that were not covered by
 * dictionary-rev-texts.ts. Namespace: rev.texts2.*
 *
 * Covers the explicitly-scoped texts (Jekyll and Hyde, Things Fall Apart,
 * Great Expectations, Blood Brothers, To Kill a Mockingbird, Of Mice and Men,
 * Romeo and Juliet) and other set-text folders, EXCLUDING macbeth /
 * an-inspector-calls / a-christmas-carol (handled elsewhere).
 *
 * SCOPE: CHROME ONLY — back links, breadcrumbs, badges, hero/intro marketing
 * copy, jump-to nav, generic section headings/card titles, buttons/CTAs,
 * aria/title text, and public-domain / fair-dealing notices. The teaching
 * prose, quotations, analysis, plot summaries, character studies, theme
 * analysis, model answers and examiner commentary are STUDY CONTENT and stay
 * English in the page source.
 *
 * Brand/tech/title/author/literary-device terms stay Latin in BOTH ar and es:
 * The English Hub, GCSE, IGCSE, KS3, AQA, OCR, Edexcel, Eduqas, WJEC, AO1–AO6,
 * text titles, author names, character names, device terms.
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/روح/
 * شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * {tokens} are preserved exactly across all three languages.
 *
 * Pages may also REUSE rev.texts.common.* keys from dictionary-rev-texts.ts.
 *
 * NOTE: annotated Record (NOT `as const`) so the orchestrator merges it via
 * lookup() in dictionary.ts.
 */

export const REV_TEXTS2_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Shared recurring CHROME labels (rev.texts2.common.*) ────────────────
  'rev.texts2.common.fair_dealing_notice': {
    en: 'Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.',
    ar: 'الاقتباسات القصيرة مُعاد إنتاجها بموجب بند fair dealing من Copyright, Designs and Patents Act 1988 لأغراض النقد والمراجعة. النص الكامل متوفّر من مدرستك أو مكتبتك المحلية.',
    es: 'Citas breves reproducidas bajo la disposición de fair dealing de la Copyright, Designs and Patents Act 1988 para crítica y reseña. El texto completo está disponible en tu colegio o biblioteca local.',
  },
  'rev.texts2.common.public_domain_notice': {
    en: '{title} ({year}) by {author} is in the public domain. All quotations are reproduced freely.',
    ar: '{title} ({year}) لـ {author} في الملك العام. كل الاقتباسات مُعاد إنتاجها بحرّية.',
    es: '{title} ({year}) de {author} es de dominio público. Todas las citas se reproducen libremente.',
  },
  'rev.texts2.common.public_domain_notice_after': {
    en: ' ({year}) by {author} is in the public domain. All quotations are reproduced freely.',
    ar: ' ({year}) لـ {author} في الملك العام. كل الاقتباسات مُعاد إنتاجها بحرّية.',
    es: ' ({year}) de {author} es de dominio público. Todas las citas se reproducen libremente.',
  },
  'rev.texts2.common.character_study': {
    en: 'Character Study',
    ar: 'دراسة الشخصيات',
    es: 'Estudio de personajes',
  },
  'rev.texts2.common.character_arc_sc': {
    en: 'Character arc',
    ar: 'مسار الشخصية',
    es: 'Arco del personaje',
  },
  'rev.texts2.common.key_quotations_sc': {
    en: 'Key quotations',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts2.common.key_quotes_sc': {
    en: 'Key quotes',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts2.common.modern_text_novel': {
    en: 'Modern Text - Novel',
    ar: 'نص حديث - رواية',
    es: 'Texto moderno: novela',
  },
  'rev.texts2.common.modern_text_novella': {
    en: 'Modern Text - Novella',
    ar: 'نص حديث - رواية قصيرة',
    es: 'Texto moderno: novela corta',
  },
  'rev.texts2.common.c19_novel': {
    en: '19th-Century Novel',
    ar: 'رواية القرن التاسع عشر',
    es: 'Novela del siglo XIX',
  },
  'rev.texts2.common.what_happens': {
    en: 'What happens',
    ar: 'شنو يصير',
    es: 'Qué ocurre',
  },
  'rev.texts2.common.why_it_matters_sc': {
    en: 'Why it matters',
    ar: 'ليش يهم',
    es: 'Por qué importa',
  },
  'rev.texts2.common.writers_methods': {
    en: "Writer's methods",
    ar: 'أساليب الكاتب',
    es: 'Métodos del escritor',
  },
  'rev.texts2.common.character_development_sc': {
    en: 'Character development',
    ar: 'تطوّر الشخصية',
    es: 'Desarrollo del personaje',
  },
  'rev.texts2.common.exam_focus': {
    en: 'Exam focus',
    ar: 'تركيز الامتحان',
    es: 'Enfoque del examen',
  },
  'rev.texts2.common.aqa_exam_tip': {
    en: 'AQA exam tip',
    ar: 'نصيحة امتحان AQA',
    es: 'Consejo de examen AQA',
  },
  'rev.texts2.common.essay_n': { en: 'Essay {n}', ar: 'المقال {n}', es: 'Ensayo {n}' },
  'rev.texts2.common.quotation': { en: 'Quotation', ar: 'الاقتباس', es: 'Cita' },
  'rev.texts2.common.plans': { en: 'Plans', ar: 'الخطط', es: 'Planes' },
  'rev.texts2.common.plan_n': { en: 'Plan {n}', ar: 'الخطة {n}', es: 'Plan {n}' },
  'rev.texts2.common.thesis': { en: 'Thesis', ar: 'الأطروحة', es: 'Tesis' },
  'rev.texts2.common.modern_text_play': {
    en: 'Modern Text - Play',
    ar: 'نص حديث - مسرحية',
    es: 'Texto moderno: obra de teatro',
  },
  'rev.texts2.common.essay_plans_sc': {
    en: 'Essay plans',
    ar: 'خطط المقالات',
    es: 'Planes de ensayo',
  },
  'rev.texts2.common.act_by_act_sc': {
    en: 'Act-by-act analysis',
    ar: 'تحليل فصلاً بفصل',
    es: 'Análisis acto por acto',
  },
  'rev.texts2.common.rights_notice_label': {
    en: 'Rights notice:',
    ar: 'إشعار الحقوق:',
    es: 'Aviso de derechos:',
  },
  'rev.texts2.common.key_moments': {
    en: 'Key moments',
    ar: 'اللحظات المفتاحية',
    es: 'Momentos clave',
  },
  'rev.texts2.common.linked_quotations': {
    en: 'Linked quotations',
    ar: 'الاقتباسات المرتبطة',
    es: 'Citas vinculadas',
  },
  'rev.texts2.ge.themes.how_dickens': {
    en: 'How Dickens presents this theme',
    ar: 'شلون يقدّم Dickens هالمحور',
    es: 'Cómo presenta Dickens este tema',
  },
  'rev.texts2.common.public_domain_dickens_after': {
    en: ' by Charles Dickens (1861) is in the public domain. Quotations are reproduced freely as the text is no longer subject to copyright.',
    ar: ' لـ Charles Dickens (1861) في الملك العام. الاقتباسات مُعاد إنتاجها بحرّية لأن النص ما عاد خاضع لحقوق النشر.',
    es: ' de Charles Dickens (1861) es de dominio público. Las citas se reproducen libremente porque el texto ya no está sujeto a derechos de autor.',
  },
  'rev.texts2.common.characters_intro_15w': {
    en: 'Deep profiles for every major character: overview, arc, key quotations and examiner tips. All quotes are 15 words or fewer.',
    ar: 'ملفّات معمّقة لكل شخصية رئيسية: نظرة عامة، والمسار، والاقتباسات المفتاحية، ونصائح المصحّح. كل الاقتباسات 15 كلمة أو أقل.',
    es: 'Perfiles detallados de cada personaje principal: resumen, arco, citas clave y consejos del examinador. Todas las citas tienen 15 palabras o menos.',
  },
  'rev.texts2.common.theme_links': {
    en: 'Theme links',
    ar: 'روابط المحاور',
    es: 'Vínculos temáticos',
  },
  'rev.texts2.common.thematic_links': {
    en: 'Thematic Links',
    ar: 'روابط المحاور',
    es: 'Vínculos temáticos',
  },
  'rev.texts2.common.exam_tip': { en: 'Exam tip', ar: 'نصيحة الامتحان', es: 'Consejo de examen' },
  'rev.texts2.common.context_link': {
    en: 'Context link',
    ar: 'رابط السياق',
    es: 'Vínculo con el contexto',
  },
  'rev.texts2.common.in_detail': { en: 'In Detail', ar: 'بالتفصيل', es: 'En detalle' },
  'rev.texts2.common.exam_relevance_ao3': {
    en: 'Exam relevance (AO3)',
    ar: 'علاقته بالامتحان (AO3)',
    es: 'Relevancia en el examen (AO3)',
  },
  'rev.texts2.common.jump_to_theme_short': {
    en: 'Jump to theme',
    ar: 'انتقل لمحور',
    es: 'Ir a un tema',
  },
  'rev.texts2.common.public_domain_context_after': {
    en: ' ({year}) by {author} is in the public domain. Context information is drawn from standard historical and literary scholarship.',
    ar: ' ({year}) لـ {author} في الملك العام. معلومات السياق مأخوذة من الأبحاث التاريخية والأدبية المعتمدة.',
    es: ' ({year}) de {author} es de dominio público. La información de contexto procede de estudios históricos y literarios estándar.',
  },
  'rev.texts2.common.exam_technique': {
    en: 'Exam Technique',
    ar: 'تقنية الامتحان',
    es: 'Técnica de examen',
  },
  'rev.texts2.common.jump_to_act': {
    en: 'Jump to an Act',
    ar: 'انتقل لفصل',
    es: 'Ir a un acto',
  },
  'rev.texts2.common.jump_to_chapter': {
    en: 'Jump to a Chapter',
    ar: 'انتقل لفصل',
    es: 'Ir a un capítulo',
  },
  'rev.texts2.common.extract_walkthrough': {
    en: 'Extract Walkthrough',
    ar: 'تحليل المقطع خطوة بخطوة',
    es: 'Análisis guiado del extracto',
  },
  'rev.texts2.common.walkthrough': {
    en: 'Walkthrough',
    ar: 'الشرح خطوة بخطوة',
    es: 'Análisis guiado',
  },
  'rev.texts2.common.chunk_n': { en: 'Chunk {n}', ar: 'المقطع {n}', es: 'Fragmento {n}' },
  'rev.texts2.common.notice': { en: 'Notice', ar: 'لاحظ', es: 'Observa' },
  'rev.texts2.common.say': { en: 'Say', ar: 'قول', es: 'Explica' },
  'rev.texts2.common.zoom_out': { en: 'Zoom Out', ar: 'وسّع النظرة', es: 'Amplía la mirada' },
  'rev.texts2.common.words_count': { en: '{n} words', ar: '{n} كلمة', es: '{n} palabras' },
  'rev.texts2.common.back_to_study_guide': {
    en: 'Back to study guide',
    ar: 'رجوع لدليل الدراسة',
    es: 'Volver a la guía de estudio',
  },
  'rev.texts2.common.study_guide_overview': {
    en: 'Study Guide Overview',
    ar: 'نظرة عامة على دليل الدراسة',
    es: 'Resumen de la guía de estudio',
  },
  'rev.texts2.common.key_events': {
    en: 'Key Events',
    ar: 'الأحداث الرئيسية',
    es: 'Eventos clave',
  },
  'rev.texts2.common.structural_significance': {
    en: 'Structural Significance',
    ar: 'الأهمية البنيوية',
    es: 'Importancia estructural',
  },
  'rev.texts2.common.jump_to_chapter_short': {
    en: 'Jump to chapter',
    ar: 'انتقل لفصل',
    es: 'Ir a un capítulo',
  },
  'rev.texts2.common.chapter': { en: 'Chapter', ar: 'الفصل', es: 'Capítulo' },
  'rev.texts2.common.ch_abbr': { en: 'Ch {n}', ar: 'فصل {n}', es: 'Cap. {n}' },
  'rev.texts2.common.key_quotes_by_theme': {
    en: 'Key Quotes by Theme',
    ar: 'الاقتباسات المفتاحية حسب المحور',
    es: 'Citas clave por tema',
  },
  'rev.texts2.common.chapter_by_chapter': {
    en: 'Chapter-by-Chapter Analysis',
    ar: 'تحليل فصلاً بفصل',
    es: 'Análisis capítulo por capítulo',
  },
  'rev.texts2.common.chapter_analysis': {
    en: 'Chapter Analysis',
    ar: 'تحليل الفصول',
    es: 'Análisis de capítulos',
  },
  'rev.texts2.common.gcse_essay_plans': {
    en: 'GCSE Essay Plans',
    ar: 'خطط مقالات GCSE',
    es: 'Planes de ensayo GCSE',
  },
  'rev.texts2.common.jump_to_essay': {
    en: 'Jump to essay',
    ar: 'انتقل لمقال',
    es: 'Ir a un ensayo',
  },
  'rev.texts2.common.contextual_link': {
    en: 'Contextual Link',
    ar: 'رابط سياقي',
    es: 'Vínculo contextual',
  },
  'rev.texts2.common.contextual_link_sc': {
    en: 'Contextual link',
    ar: 'رابط سياقي',
    es: 'Vínculo contextual',
  },
  'rev.texts2.common.link_to_the_text': {
    en: 'Link to the text',
    ar: 'رابط بالنص',
    es: 'Vínculo con el texto',
  },
  'rev.texts2.common.essay_plans_intro': {
    en: 'Five complete essay plans with thesis statements, paragraph-by-paragraph breakdowns, key quotations, analysis, contextual links, and exam tips.',
    ar: 'خمس خطط مقالات كاملة مع صياغات الأطروحة، وتفصيل فقرة فقرة، والاقتباسات المفتاحية، والتحليل، والروابط السياقية، ونصائح الامتحان.',
    es: 'Cinco planes de ensayo completos con declaraciones de tesis, desgloses párrafo a párrafo, citas clave, análisis, vínculos contextuales y consejos de examen.',
  },
  'rev.texts2.common.model_paragraph': {
    en: 'Model Paragraph',
    ar: 'فقرة نموذجية',
    es: 'Párrafo modelo',
  },
  'rev.texts2.common.how_to_use': {
    en: 'How to use this walkthrough',
    ar: 'شلون تستخدم هالتحليل',
    es: 'Cómo usar este análisis guiado',
  },

  'rev.texts2.common.public_domain_notice_after2': {
    en: ' ({year}) by {author} is in the public domain. Quotations are reproduced freely.',
    ar: ' ({year}) لـ {author} في الملك العام. الاقتباسات مُعاد إنتاجها بحرّية.',
    es: ' ({year}) de {author} es de dominio público. Las citas se reproducen libremente.',
  },

  // ─── Jekyll and Hyde (rev.texts2.jh.*) ───────────────────────────────────
  'rev.texts2.jh.faq_heading': {
    en: 'Dr Jekyll and Mr Hyde: frequently asked questions',
    ar: 'Dr Jekyll and Mr Hyde: الأسئلة الشائعة',
    es: 'Dr Jekyll and Mr Hyde: preguntas frecuentes',
  },
  'rev.texts2.jh.quick_summary_heading': {
    en: 'Dr Jekyll and Mr Hyde: quick summary',
    ar: 'Dr Jekyll and Mr Hyde: ملخص سريع',
    es: 'Dr Jekyll and Mr Hyde: resumen rápido',
  },
  'rev.texts2.jh.characters.title': {
    en: 'Characters - Deep Study',
    ar: 'الشخصيات - دراسة معمّقة',
    es: 'Personajes: estudio profundo',
  },
  'rev.texts2.jh.characters.intro': {
    en: 'Detailed analysis of every major character with key quotations, character development, theme links, and exam tips for top-grade responses.',
    ar: 'تحليل مفصّل لكل شخصية رئيسية مع الاقتباسات المفتاحية، وتطوّر الشخصية، وروابط المحاور، ونصائح الامتحان للإجابات بأعلى الدرجات.',
    es: 'Análisis detallado de cada personaje principal con citas clave, desarrollo del personaje, vínculos temáticos y consejos de examen para respuestas de máxima nota.',
  },
  'rev.texts2.jh.themes.title': {
    en: 'Themes - Deep Study',
    ar: 'المحاور - دراسة معمّقة',
    es: 'Temas: estudio profundo',
  },
  'rev.texts2.jh.themes.intro': {
    en: 'Comprehensive analysis of the six key themes with quotations, contextual links, and exam strategies for top-grade responses.',
    ar: 'تحليل شامل للمحاور الستة الرئيسية مع الاقتباسات، والروابط السياقية، واستراتيجيات الامتحان للإجابات بأعلى الدرجات.',
    es: 'Análisis exhaustivo de los seis temas clave con citas, vínculos contextuales y estrategias de examen para respuestas de máxima nota.',
  },
  'rev.texts2.jh.chapters.intro': {
    en: 'All 10 chapters analysed in depth: summaries, key events, character development, five language techniques per chapter with full quotations, and structural significance.',
    ar: 'كل الفصول العشرة محلّلة بعمق: الملخّصات، والأحداث الرئيسية، وتطوّر الشخصيات، وخمس تقنيات لغوية لكل فصل مع اقتباسات كاملة، والأهمية البنيوية.',
    es: 'Los 10 capítulos analizados en profundidad: resúmenes, eventos clave, desarrollo de personajes, cinco técnicas lingüísticas por capítulo con citas completas e importancia estructural.',
  },
  'rev.texts2.jh.extract.title': {
    en: 'Extract Walkthrough: The Trampling of the Girl',
    ar: 'تحليل المقطع خطوة بخطوة: The Trampling of the Girl',
    es: 'Análisis guiado del extracto: The Trampling of the Girl',
  },
  'rev.texts2.jh.extract.notice': {
    en: ' (1886) by Robert Louis Stevenson is in the public domain. The extract is reproduced in full from Chapter 1, "Story of the Door."',
    ar: ' (1886) لـ Robert Louis Stevenson في الملك العام. المقطع مُعاد إنتاجه بالكامل من Chapter 1, "Story of the Door."',
    es: ' (1886) de Robert Louis Stevenson es de dominio público. El extracto se reproduce íntegro del Chapter 1, "Story of the Door."',
  },
  'rev.texts2.jh.context.title': {
    en: 'Context - Deep Study',
    ar: 'السياق - دراسة معمّقة',
    es: 'Contexto: estudio profundo',
  },
  'rev.texts2.jh.key_quotes.title': {
    en: '25 Key Quotes by Theme',
    ar: '25 اقتباساً مفتاحياً حسب المحور',
    es: '25 citas clave por tema',
  },
  'rev.texts2.jh.key_quotes.intro': {
    en: 'Every quotation you need for the exam, organised by theme with detailed analysis. All from the public-domain text.',
    ar: 'كل اقتباس تحتاجه للامتحان، مرتّب حسب المحور مع تحليل مفصّل. كله من نص في الملك العام.',
    es: 'Todas las citas que necesitas para el examen, organizadas por tema con análisis detallado. Todas del texto de dominio público.',
  },
  'rev.texts2.jh.context.intro': {
    en: 'Essential historical, social and literary context for top-grade GCSE responses. Every section includes exam relevance to help you apply context effectively.',
    ar: 'السياق التاريخي والاجتماعي والأدبي الأساسي للإجابات بأعلى الدرجات في GCSE. كل قسم يتضمّن علاقته بالامتحان عشان يساعدك تطبّق السياق بشكل فعّال.',
    es: 'Contexto histórico, social y literario esencial para respuestas de máxima nota en GCSE. Cada sección incluye su relevancia en el examen para ayudarte a aplicar el contexto con eficacia.',
  },

  'rev.texts2.common.role_in_novel': {
    en: 'Role in the Novel',
    ar: 'الدور في الرواية',
    es: 'Papel en la novela',
  },

  'rev.texts2.common.extract_walkthrough_sc': {
    en: 'Extract walkthrough',
    ar: 'تحليل المقطع خطوة بخطوة',
    es: 'Análisis guiado del extracto',
  },
  'rev.texts2.common.practice_prompts': {
    en: 'Practice prompts',
    ar: 'أسئلة للتدرّب',
    es: 'Preguntas de práctica',
  },
  'rev.texts2.common.fair_dealing_notice_heading': {
    en: 'Fair dealing notice',
    ar: 'إشعار fair dealing',
    es: 'Aviso de fair dealing',
  },

  // ─── Blood Brothers (rev.texts2.bb.*) ────────────────────────────────────
  'rev.texts2.bb.rights_body': {
    en: ' © Methuen Drama / Bloomsbury on behalf of Willy Russell (b. 1947). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the licensed school edition.',
    ar: ' © Methuen Drama / Bloomsbury نيابة عن Willy Russell (مواليد 1947). الاقتباسات مقاطع قصيرة بموجب fair dealing تحت CDPA 1988 §30 (النقد، والمراجعة، والاقتباس). للنص الكامل، على الطلاب الرجوع للنسخة المدرسية المرخّصة.',
    es: ' © Methuen Drama / Bloomsbury en nombre de Willy Russell (n. 1947). Las citas son extractos breves de fair dealing bajo la CDPA 1988 §30 (crítica, reseña, cita). Para el texto completo, los estudiantes deben consultar la edición escolar con licencia.',
  },
  'rev.texts2.bb.acts.title': {
    en: 'Act-by-Act Analysis',
    ar: 'تحليل فصلاً بفصل',
    es: 'Análisis acto por acto',
  },
  'rev.texts2.bb.acts.intro': {
    en: "A detailed walk-through of both acts with key quotations, Russell's methods and examiner-focused analysis. Every quote is 15 words or fewer for memorisation.",
    ar: 'شرح مفصّل للفصلين مع الاقتباسات المفتاحية، وأساليب Russell، وتحليل مركّز على المصحّح. كل اقتباس 15 كلمة أو أقل للحفظ.',
    es: 'Un recorrido detallado por ambos actos con citas clave, los métodos de Russell y análisis enfocado al examinador. Cada cita tiene 15 palabras o menos para memorizar.',
  },
  'rev.texts2.bb.themes.intro': {
    en: "Six major themes explored in depth with Russell's methods, contextual links and examiner guidance. All quotes are 15 words or fewer.",
    ar: 'ستة محاور رئيسية مدروسة بعمق مع أساليب Russell، والروابط السياقية، وإرشادات المصحّح. كل الاقتباسات 15 كلمة أو أقل.',
    es: 'Seis temas principales explorados en profundidad con los métodos de Russell, vínculos contextuales y orientación del examinador. Todas las citas tienen 15 palabras o menos.',
  },
  'rev.texts2.bb.themes.how_russell': {
    en: 'How Russell presents it',
    ar: 'شلون يقدّمه Russell',
    es: 'Cómo lo presenta Russell',
  },
  'rev.texts2.bb.essay_plans.intro': {
    en: 'Five exam-style essay plans with thesis statements, paragraph outlines, embedded quotations and contextual links. All quotes are 15 words or fewer.',
    ar: 'خمس خطط مقالات بأسلوب الامتحان مع صياغات الأطروحة، ومخطّطات الفقرات، واقتباسات مضمّنة، وروابط سياقية. كل الاقتباسات 15 كلمة أو أقل.',
    es: 'Cinco planes de ensayo al estilo del examen con declaraciones de tesis, esquemas de párrafos, citas incorporadas y vínculos contextuales. Todas las citas tienen 15 palabras o menos.',
  },
  'rev.texts2.bb.key_quotes.title': {
    en: '20 Key Quotes',
    ar: '20 اقتباساً مفتاحياً',
    es: '20 citas clave',
  },
  'rev.texts2.bb.key_quotes.intro': {
    en: 'Twenty essential quotations for exam revision. Each quote is 15 words or fewer, with speaker, context, analysis and theme tags for quick reference.',
    ar: 'عشرون اقتباساً أساسياً للمراجعة قبل الامتحان. كل اقتباس 15 كلمة أو أقل، مع المتحدّث، والسياق، والتحليل، ووسوم المحاور للرجوع السريع.',
    es: 'Veinte citas esenciales para repasar para el examen. Cada cita tiene 15 palabras o menos, con hablante, contexto, análisis y etiquetas de tema para consulta rápida.',
  },
  'rev.texts2.bb.characters.intro': {
    en: 'Deep profiles for every major character: overview, arc, key quotations and examiner tips. All quotes are 15 words or fewer.',
    ar: 'ملفّات معمّقة لكل شخصية رئيسية: نظرة عامة، والمسار، والاقتباسات المفتاحية، ونصائح المصحّح. كل الاقتباسات 15 كلمة أو أقل.',
    es: 'Perfiles detallados de cada personaje principal: resumen, arco, citas clave y consejos del examinador. Todas las citas tienen 15 palabras o menos.',
  },

  // ─── Great Expectations (rev.texts2.ge.*) ────────────────────────────────
  'rev.texts2.ge.chapters.title': {
    en: 'Key Chapters',
    ar: 'الفصول المفتاحية',
    es: 'Capítulos clave',
  },
  'rev.texts2.ge.chapters.intro': {
    en: 'Five pivotal moments in the novel analysed in depth: the graveyard encounter, Satis House, the announcement of expectations, the revelation of the true benefactor, and the ambiguous ending.',
    ar: 'خمس لحظات محورية في الرواية محلّلة بعمق: لقاء المقبرة، وSatis House، والإعلان عن التوقّعات، وكشف الراعي الحقيقي، والنهاية الغامضة.',
    es: 'Cinco momentos cruciales de la novela analizados en profundidad: el encuentro en el cementerio, Satis House, el anuncio de las expectativas, la revelación del verdadero benefactor y el final ambiguo.',
  },
  'rev.texts2.ge.characters.intro': {
    en: 'Detailed profiles of nine key characters covering their role, development, key quotations and exam focus points.',
    ar: 'ملفّات مفصّلة لتسع شخصيات رئيسية تغطّي دورها، وتطوّرها، والاقتباسات المفتاحية، ونقاط التركيز للامتحان.',
    es: 'Perfiles detallados de nueve personajes clave que cubren su papel, desarrollo, citas clave y puntos de enfoque para el examen.',
  },
  'rev.texts2.ge.essay_plans.intro': {
    en: 'Five model essay plans for AQA GCSE English Literature, each with a structured introduction, three analytical paragraphs with embedded quotation and context, and a strong conclusion.',
    ar: 'خمس خطط مقالات نموذجية لـ AQA GCSE English Literature، كل واحدة فيها مقدّمة منظّمة، وثلاث فقرات تحليلية مع اقتباس وسياق مضمّنين، وخاتمة قوية.',
    es: 'Cinco planes de ensayo modelo para AQA GCSE English Literature, cada uno con una introducción estructurada, tres párrafos analíticos con cita y contexto incorporados, y una conclusión sólida.',
  },
  'rev.texts2.ge.key_quotes.intro': {
    en: '25 essential quotations with speaker, chapter, linked themes and detailed analysis. All quotations are from the public-domain text of Great Expectations (1861).',
    ar: '25 اقتباساً أساسياً مع المتحدّث، والفصل، والمحاور المرتبطة، وتحليل مفصّل. كل الاقتباسات من نص Great Expectations (1861) في الملك العام.',
    es: '25 citas esenciales con hablante, capítulo, temas vinculados y análisis detallado. Todas las citas provienen del texto de dominio público de Great Expectations (1861).',
  },
  'rev.texts2.ge.themes.title': {
    en: 'Key Themes',
    ar: 'المحاور المفتاحية',
    es: 'Temas clave',
  },
  'rev.texts2.ge.themes.intro': {
    en: 'Six major themes analysed in detail, with linked quotations, key moments and exam-focused guidance for AQA English Literature.',
    ar: 'ستة محاور رئيسية محلّلة بالتفصيل، مع اقتباسات مرتبطة، ولحظات مفتاحية، وإرشادات مركّزة على الامتحان لـ AQA English Literature.',
    es: 'Seis temas principales analizados en detalle, con citas vinculadas, momentos clave y orientación centrada en el examen para AQA English Literature.',
  },

  // ─── Of Mice and Men (rev.texts2.omam.*) ─────────────────────────────────
  'rev.texts2.omam.extract.eyebrow': {
    en: 'Extract walkthrough',
    ar: 'تحليل المقطع خطوة بخطوة',
    es: 'Análisis guiado del extracto',
  },
  'rev.texts2.omam.extract.title': {
    en: 'The closing scene at the pool',
    ar: 'المشهد الختامي عند البركة',
    es: 'La escena final junto al estanque',
  },
  'rev.texts2.omam.extract.intro': {
    en: "Lennie at the Salinas pool, the rabbit hallucination, and George's act of mercy. A close reading of the final pages of Steinbeck's 1937 novella.",
    ar: 'Lennie عند بركة Salinas، وهلوسة الأرنب، وفعل الرحمة من George. قراءة متأنّية للصفحات الأخيرة من رواية Steinbeck القصيرة لسنة 1937.',
    es: 'Lennie en el estanque de Salinas, la alucinación del conejo y el acto de misericordia de George. Una lectura atenta de las páginas finales de la novela corta de Steinbeck de 1937.',
  },
  'rev.texts2.omam.extract.setting_scene': {
    en: 'Setting the scene',
    ar: 'تهيئة المشهد',
    es: 'Situando la escena',
  },
  'rev.texts2.omam.extract.rabbit': {
    en: 'The rabbit hallucination',
    ar: 'هلوسة الأرنب',
    es: 'La alucinación del conejo',
  },
  'rev.texts2.omam.extract.model_para': {
    en: 'Model paragraph (≈250 words)',
    ar: 'فقرة نموذجية (≈250 كلمة)',
    es: 'Párrafo modelo (≈250 palabras)',
  },
  'rev.texts2.omam.extract.fair_dealing_body': {
    en: 'Of Mice and Men by John Steinbeck (first published 1937) remains in copyright. UK rights are held by Penguin Books Ltd (originally published in the United States by Covici Friede, now part of Penguin Random House / Viking). Short verbatim fragments are reproduced here under the fair dealing provisions of the Copyright, Designs and Patents Act 1988 for the purposes of criticism, review and educational quotation. All quoted fragments are fewer than fifteen words and are accompanied by substantial critical commentary. No part of this page is intended to substitute for the full text. Students should obtain a complete edition from Penguin or their school or public library.',
    ar: 'Of Mice and Men لـ John Steinbeck (نُشرت أول مرة 1937) ما زالت محميّة بحقوق النشر. حقوق UK يملكها Penguin Books Ltd (نُشرت أصلاً في United States بواسطة Covici Friede، الحين جزء من Penguin Random House / Viking). المقاطع القصيرة الحرفية مُعاد إنتاجها هنا بموجب أحكام fair dealing من Copyright, Designs and Patents Act 1988 لأغراض النقد والمراجعة والاقتباس التعليمي. كل المقاطع المقتبسة أقل من خمس عشرة كلمة ومصحوبة بتعليق نقدي وافٍ. ما في جزء من هالصفحة يقصد إنه بديل عن النص الكامل. على الطلاب يحصلون على نسخة كاملة من Penguin أو من مدرستهم أو المكتبة العامة.',
    es: 'Of Mice and Men de John Steinbeck (publicada por primera vez en 1937) sigue protegida por derechos de autor. Los derechos en el Reino Unido pertenecen a Penguin Books Ltd (publicada originalmente en los Estados Unidos por Covici Friede, ahora parte de Penguin Random House / Viking). Los fragmentos breves textuales se reproducen aquí bajo las disposiciones de fair dealing de la Copyright, Designs and Patents Act 1988 con fines de crítica, reseña y cita educativa. Todos los fragmentos citados tienen menos de quince palabras y van acompañados de un comentario crítico sustancial. Ninguna parte de esta página pretende sustituir el texto completo. Los estudiantes deben obtener una edición completa de Penguin o de su colegio o biblioteca pública.',
  },
  'rev.texts2.omam.context.intro': {
    en: "The essential background you need for the exam: the Great Depression, migrant labour, racial segregation, women's roles and Steinbeck's own life.",
    ar: 'الخلفية الأساسية اللي تحتاجها للامتحان: الكساد الكبير، والعمالة المهاجرة، والفصل العنصري، وأدوار المرأة، وحياة Steinbeck نفسه.',
    es: 'Los antecedentes esenciales que necesitas para el examen: la Gran Depresión, el trabajo migrante, la segregación racial, los roles de la mujer y la propia vida de Steinbeck.',
  },
  'rev.texts2.omam.themes.intro': {
    en: "Six major themes explored in depth with Steinbeck's methods, contextual links and examiner guidance. All quotes are 15 words or fewer.",
    ar: 'ستة محاور رئيسية مدروسة بعمق مع أساليب Steinbeck، والروابط السياقية، وإرشادات المصحّح. كل الاقتباسات 15 كلمة أو أقل.',
    es: 'Seis temas principales explorados en profundidad con los métodos de Steinbeck, vínculos contextuales y orientación del examinador. Todas las citas tienen 15 palabras o menos.',
  },
  'rev.texts2.omam.themes.how_steinbeck': {
    en: 'How Steinbeck presents it',
    ar: 'شلون يقدّمه Steinbeck',
    es: 'Cómo lo presenta Steinbeck',
  },
  'rev.texts2.omam.key_quotes.intro': {
    en: 'Twenty-five essential quotations for exam revision. Each quote is 15 words or fewer, with speaker, context, analysis and theme tags for quick reference.',
    ar: 'خمسة وعشرون اقتباساً أساسياً للمراجعة قبل الامتحان. كل اقتباس 15 كلمة أو أقل، مع المتحدّث، والسياق، والتحليل، ووسوم المحاور للرجوع السريع.',
    es: 'Veinticinco citas esenciales para repasar para el examen. Cada cita tiene 15 palabras o menos, con hablante, contexto, análisis y etiquetas de tema para consulta rápida.',
  },

  // ─── To Kill a Mockingbird (rev.texts2.tkam.*) ───────────────────────────
  'rev.texts2.tkam.characters.intro': {
    en: 'Deep profiles for every major character: overview, arc, key quotations and examiner tips. All quotes are 15 words or fewer.',
    ar: 'ملفّات معمّقة لكل شخصية رئيسية: نظرة عامة، والمسار، والاقتباسات المفتاحية، ونصائح المصحّح. كل الاقتباسات 15 كلمة أو أقل.',
    es: 'Perfiles detallados de cada personaje principal: resumen, arco, citas clave y consejos del examinador. Todas las citas tienen 15 palabras o menos.',
  },
  'rev.texts2.tkam.themes.intro': {
    en: "Six major themes explored in depth with Lee's methods, contextual links and examiner guidance. All quotes are 15 words or fewer.",
    ar: 'ستة محاور رئيسية مدروسة بعمق مع أساليب Lee، والروابط السياقية، وإرشادات المصحّح. كل الاقتباسات 15 كلمة أو أقل.',
    es: 'Seis temas principales explorados en profundidad con los métodos de Lee, vínculos contextuales y orientación del examinador. Todas las citas tienen 15 palabras o menos.',
  },
  'rev.texts2.tkam.themes.how_lee': {
    en: 'How Lee presents it',
    ar: 'شلون يقدّمه Lee',
    es: 'Cómo lo presenta Lee',
  },
  'rev.texts2.tkam.context.title': {
    en: 'Historical & Social Context',
    ar: 'السياق التاريخي والاجتماعي',
    es: 'Contexto histórico y social',
  },
  'rev.texts2.tkam.context.intro': {
    en: "The essential background you need for the exam: 1930s Alabama, Jim Crow laws, the Great Depression, Harper Lee's life and the Scottsboro Boys trial.",
    ar: 'الخلفية الأساسية اللي تحتاجها للامتحان: 1930s Alabama، وقوانين Jim Crow، والكساد الكبير، وحياة Harper Lee، ومحاكمة Scottsboro Boys.',
    es: 'Los antecedentes esenciales que necesitas para el examen: la Alabama de los años 1930, las leyes de Jim Crow, la Gran Depresión, la vida de Harper Lee y el juicio de los Scottsboro Boys.',
  },
  'rev.texts2.tkam.key_quotes.intro': {
    en: 'Twenty-five essential quotations for exam revision. Each quote is 15 words or fewer, with speaker, context, analysis and theme tags for quick reference.',
    ar: 'خمسة وعشرون اقتباساً أساسياً للمراجعة قبل الامتحان. كل اقتباس 15 كلمة أو أقل، مع المتحدّث، والسياق، والتحليل، ووسوم المحاور للرجوع السريع.',
    es: 'Veinticinco citas esenciales para repasar para el examen. Cada cita tiene 15 palabras o menos, con hablante, contexto, análisis y etiquetas de tema para consulta rápida.',
  },
  'rev.texts2.tkam.key_quotes.title': {
    en: '25 Key Quotes',
    ar: '25 اقتباساً مفتاحياً',
    es: '25 citas clave',
  },

  // ─── Things Fall Apart (rev.texts2.tfa.*) ────────────────────────────────
  'rev.texts2.tfa.characters.intro': {
    en: 'Ten key characters analysed in depth: role in the novel, character development across all three parts, key quotations with detailed analysis, links to themes, and exam technique tips.',
    ar: 'عشر شخصيات رئيسية مدروسة بعمق: الدور في الرواية، وتطوّر الشخصية عبر الأجزاء الثلاثة كلها، والاقتباسات المفتاحية مع تحليل مفصّل، والروابط بالمحاور، ونصائح تقنية الامتحان.',
    es: 'Diez personajes clave analizados en profundidad: papel en la novela, desarrollo del personaje a lo largo de las tres partes, citas clave con análisis detallado, vínculos con los temas y consejos de técnica de examen.',
  },
  'rev.texts2.tfa.context.intro': {
    en: "The essential background for the exam: pre-colonial Igbo society, British colonialism in Nigeria, Achebe's response to Conrad, the Yeats title, postcolonial literature and the politics of language.",
    ar: 'الخلفية الأساسية للامتحان: مجتمع Igbo قبل الاستعمار، والاستعمار البريطاني في Nigeria، وردّ Achebe على Conrad، وعنوان Yeats، والأدب ما بعد الاستعماري، وسياسات اللغة.',
    es: 'Los antecedentes esenciales para el examen: la sociedad Igbo precolonial, el colonialismo británico en Nigeria, la respuesta de Achebe a Conrad, el título de Yeats, la literatura poscolonial y la política de la lengua.',
  },
  'rev.texts2.tfa.context.title': {
    en: 'Historical and Social Context',
    ar: 'السياق التاريخي والاجتماعي',
    es: 'Contexto histórico y social',
  },
  'rev.texts2.common.how_to_use_context': {
    en: 'How to Use Context in Your Exam',
    ar: 'شلون تستخدم السياق في امتحانك',
    es: 'Cómo usar el contexto en tu examen',
  },
  'rev.texts2.tfa.key_quotes.intro': {
    en: 'Twenty-two essential quotations organised by theme. Each quote includes speaker, part reference, context, detailed analysis, and thematic links for exam revision.',
    ar: 'اثنان وعشرون اقتباساً أساسياً مرتّبة حسب المحور. كل اقتباس يتضمّن المتحدّث، ومرجع الجزء، والسياق، وتحليلاً مفصّلاً، وروابط المحاور للمراجعة قبل الامتحان.',
    es: 'Veintidós citas esenciales organizadas por tema. Cada cita incluye hablante, referencia de la parte, contexto, análisis detallado y vínculos temáticos para repasar para el examen.',
  },
  'rev.texts2.tfa.themes.intro': {
    en: 'Seven major themes explored in depth: definition, evidence from each part of the novel, key quotations, links to historical context, and essay planning tips for exam success.',
    ar: 'سبعة محاور رئيسية مدروسة بعمق: التعريف، والأدلة من كل جزء من الرواية، والاقتباسات المفتاحية، والروابط بالسياق التاريخي، ونصائح تخطيط المقال للنجاح في الامتحان.',
    es: 'Siete temas principales explorados en profundidad: definición, evidencia de cada parte de la novela, citas clave, vínculos con el contexto histórico y consejos de planificación de ensayos para el éxito en el examen.',
  },
}
