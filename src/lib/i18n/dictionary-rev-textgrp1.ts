/**
 * dictionary-rev-textgrp1.ts
 *
 * EN + Khaleeji (Gulf) Arabic + Spanish for the UI CHROME of a further
 * batch of /revision/texts/** set-text revision pages:
 *   - Romeo and Juliet (landing + acts, characters, context, essay-plans,
 *     extract-walkthrough, key-quotes, themes subpages)
 *   - Macbeth (acts, essay-plans, extract-walkthrough, read subpages)
 *
 * SCOPE: ONLY chrome — page titles/taglines, section headings, nav/
 * breadcrumb labels, buttons/CTAs, generic UI labels, badges, and short
 * framing/intro sentences that describe a page rather than teach. The
 * teaching prose, quotations, plot/act summaries, character/theme analysis,
 * model answers and examiner commentary are STUDY CONTENT and stay English
 * in the page source.
 *
 * Brand/tech/title/author terms stay Latin in BOTH ar and es: The English
 * Hub, GCSE, IGCSE, AQA, OCR, Edexcel, Eduqas, AO1–AO6, text titles
 * (Romeo and Juliet, Macbeth…), author/character names (Shakespeare, Romeo,
 * Juliet, Macbeth…) and literary-device terms.
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/
 * روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * {tokens} are preserved exactly across all three languages.
 *
 * Annotated Record (NOT `as const`) so the orchestrator can merge it via
 * lookup() in dictionary.ts. Do NOT edit dictionary.ts here.
 */

import type { Dictionary } from './dictionary'

export const REV_TEXTGRP1_DICTIONARY: Dictionary = {
  // ─── Shared CHROME labels added by this batch (rev.texts.common.*) ──────
  'rev.texts.common.shakespeare_play_badge': {
    en: 'Shakespeare - Play',
    ar: 'Shakespeare - مسرحية',
    es: 'Shakespeare - Obra de teatro',
  },
  'rev.texts.common.all_5_acts_scene': {
    en: 'All 5 Acts Scene-by-Scene',
    ar: 'كل الفصول الخمسة مشهد بمشهد',
    es: 'Los 5 actos escena por escena',
  },
  'rev.texts.common.jump_to_act': {
    en: 'Jump to Act',
    ar: 'انتقل لفصل',
    es: 'Ir a un acto',
  },
  'rev.texts.common.in_detail': { en: 'In Detail', ar: 'بالتفصيل', es: 'En detalle' },
  'rev.texts.common.jump_to_theme_label': {
    en: 'Jump to theme',
    ar: 'انتقل لمحور',
    es: 'Ir a un tema',
  },
  'rev.texts.common.exam_relevance_ao3': {
    en: 'Exam relevance (AO3)',
    ar: 'الصلة بالامتحان (AO3)',
    es: 'Relevancia para el examen (AO3)',
  },
  'rev.texts.common.examiner_tip': {
    en: 'Examiner Tip',
    ar: 'نصيحة المصحح',
    es: 'Consejo del examinador',
  },
  // "{n} plans" badge — {n} preserved.
  'rev.texts.common.plans_count': {
    en: '{n} plans',
    ar: '{n} خطط',
    es: '{n} planes',
  },
  'rev.texts.common.language_techniques': {
    en: 'Language Techniques',
    ar: 'تقنيات اللغة',
    es: 'Técnicas del lenguaje',
  },
  // "Act {n}: {title}" / "Act {n} - {title}" — {title} stays study content
  // and is concatenated in the page; this keys only the "Act {n}" prefix.
  'rev.texts.common.prologue': { en: 'Prologue', ar: 'المقدّمة', es: 'Prólogo' },
  'rev.texts.common.prologue_act2': {
    en: 'Prologue (Act 2)',
    ar: 'المقدّمة (الفصل 2)',
    es: 'Prólogo (Acto 2)',
  },
  // "Act {n}, Scene {s}" composite scene heading.
  'rev.texts.common.act_n_scene_s': {
    en: 'Act {n}, Scene {s}',
    ar: 'الفصل {n}، المشهد {s}',
    es: 'Acto {n}, Escena {s}',
  },

  // ─── Romeo and Juliet landing page chrome (rev.texts.rj.*) ──────────────
  // Shared "Romeo and Juliet by William Shakespeare" byline used on several
  // R&J subpage heroes.
  'rev.texts.rj.byline': {
    en: 'Romeo and Juliet by William Shakespeare',
    ar: 'Romeo and Juliet تأليف William Shakespeare',
    es: 'Romeo and Juliet de William Shakespeare',
  },
  'rev.texts.rj.public_domain_note': {
    en: 'Romeo and Juliet (c. 1594-96) by William Shakespeare is in the public domain. All quotations are reproduced freely.',
    ar: 'Romeo and Juliet (حوالي 1594-96) تأليف William Shakespeare ضمن الملكية العامة. كل الاقتباسات مُعاد إنتاجها بحرية.',
    es: 'Romeo and Juliet (c. 1594-96) de William Shakespeare es de dominio público. Todas las citas se reproducen libremente.',
  },
  'rev.texts.rj.faq_heading': {
    en: 'Romeo and Juliet: frequently asked questions',
    ar: 'Romeo and Juliet: الأسئلة الشائعة',
    es: 'Romeo and Juliet: preguntas frecuentes',
  },

  // ─── Romeo and Juliet acts page chrome (rev.texts.rj.acts.*) ────────────
  'rev.texts.rj.acts.title': {
    en: 'Romeo and Juliet - Act-by-Act Analysis',
    ar: 'Romeo and Juliet - تحليل فصل بفصل',
    es: 'Romeo and Juliet - Análisis acto por acto',
  },
  'rev.texts.rj.acts.intro': {
    en: 'A detailed walkthrough of all five acts with key moments, quotations, and analysis of Shakespeare’s methods for GCSE and IGCSE English Literature.',
    ar: 'شرح مفصّل لكل الفصول الخمسة مع اللحظات المفتاحية والاقتباسات وتحليل أساليب Shakespeare لـ GCSE و IGCSE English Literature.',
    es: 'Un recorrido detallado por los cinco actos con momentos clave, citas y análisis de los métodos de Shakespeare para GCSE e IGCSE English Literature.',
  },

  // ─── Romeo and Juliet characters page chrome (rev.texts.rj.characters.*) ─
  'rev.texts.rj.characters.title': {
    en: 'Romeo and Juliet - Character Analysis',
    ar: 'Romeo and Juliet - تحليل الشخصيات',
    es: 'Romeo and Juliet - Análisis de personajes',
  },
  'rev.texts.rj.characters.h1': {
    en: 'Characters - Deep Study',
    ar: 'الشخصيات - دراسة معمّقة',
    es: 'Personajes - Estudio profundo',
  },
  'rev.texts.rj.characters.intro': {
    en: 'Detailed analysis of every major character with key quotations, character development, theme links, and exam tips for top-grade responses.',
    ar: 'تحليل مفصّل لكل شخصية رئيسية مع اقتباسات مفتاحية وتطوّر الشخصية وروابط بالمحاور ونصائح للامتحان لإجابات بأعلى الدرجات.',
    es: 'Análisis detallado de cada personaje importante con citas clave, desarrollo del personaje, vínculos temáticos y consejos de examen para respuestas de la máxima nota.',
  },
  'rev.texts.common.character_study_badge': {
    en: 'Character Study',
    ar: 'دراسة الشخصيات',
    es: 'Estudio de personajes',
  },

  // ─── Romeo and Juliet context page chrome (rev.texts.rj.context.*) ──────
  'rev.texts.rj.context.title': {
    en: 'Romeo and Juliet - Historical Context',
    ar: 'Romeo and Juliet - السياق التاريخي',
    es: 'Romeo and Juliet - Contexto histórico',
  },
  'rev.texts.rj.context.h1': {
    en: 'Context - Deep Study',
    ar: 'السياق - دراسة معمّقة',
    es: 'Contexto - Estudio profundo',
  },
  'rev.texts.rj.context.byline': {
    en: 'Romeo and Juliet by William Shakespeare',
    ar: 'Romeo and Juliet تأليف William Shakespeare',
    es: 'Romeo and Juliet de William Shakespeare',
  },
  'rev.texts.rj.context.intro': {
    en: 'Essential historical, social and literary context for top-grade GCSE responses. Every section includes exam relevance to help you apply context effectively.',
    ar: 'سياق تاريخي واجتماعي وأدبي أساسي لإجابات GCSE بأعلى الدرجات. كل قسم يشمل صلته بالامتحان عشان يساعدك تطبّق السياق بفعالية.',
    es: 'Contexto histórico, social y literario esencial para respuestas GCSE de la máxima nota. Cada sección incluye su relevancia para el examen para ayudarte a aplicar el contexto con eficacia.',
  },
  'rev.texts.rj.context.public_domain_note': {
    en: 'Romeo and Juliet (c. 1594-96) by William Shakespeare is in the public domain. Context information is drawn from standard historical and literary scholarship.',
    ar: 'Romeo and Juliet (حوالي 1594-96) تأليف William Shakespeare ضمن الملكية العامة. معلومات السياق مأخوذة من الدراسات التاريخية والأدبية المعتادة.',
    es: 'Romeo and Juliet (c. 1594-96) de William Shakespeare es de dominio público. La información de contexto procede de estudios históricos y literarios estándar.',
  },

  // ─── Romeo and Juliet essay-plans page chrome (rev.texts.rj.essays.*) ───
  'rev.texts.rj.essays.title': {
    en: 'Romeo and Juliet - GCSE Essay Plans',
    ar: 'Romeo and Juliet - خطط مقالات GCSE',
    es: 'Romeo and Juliet - Planes de ensayo GCSE',
  },
  'rev.texts.rj.essays.intro': {
    en: 'Five model essay plans with thesis statements, paragraph structures, key quotations and examiner tips. Each plan follows the point-quotation-analysis structure expected at GCSE.',
    ar: 'خمس خطط مقالات نموذجية مع صياغة الأطروحة وبُنى الفقرات والاقتباسات المفتاحية ونصائح المصحح. كل خطة تتبع بنية النقطة-الاقتباس-التحليل المتوقّعة في GCSE.',
    es: 'Cinco planes de ensayo modelo con declaraciones de tesis, estructuras de párrafos, citas clave y consejos del examinador. Cada plan sigue la estructura punto-cita-análisis que se espera en GCSE.',
  },

  // ─── Romeo and Juliet extract-walkthrough page chrome (rev.texts.rj.extract.*) ─
  'rev.texts.rj.extract.badge': {
    en: 'Extract Walkthrough',
    ar: 'شرح المقتطف',
    es: 'Recorrido por el extracto',
  },
  'rev.texts.rj.extract.public_domain_badge': {
    en: 'Public Domain',
    ar: 'ملكية عامة',
    es: 'Dominio público',
  },
  'rev.texts.rj.extract.sonnet_form_badge': {
    en: 'Sonnet form',
    ar: 'صيغة السوناتة',
    es: 'Forma de soneto',
  },
  'rev.texts.rj.extract.title': {
    en: 'The Prologue: a love sonnet that announces a tragedy',
    ar: 'المقدّمة: سوناتة حب تعلن عن مأساة',
    es: 'El Prólogo: un soneto de amor que anuncia una tragedia',
  },
  'rev.texts.rj.extract.intro': {
    en: 'A line-by-line walkthrough of the opening fourteen lines of Romeo and Juliet - Shakespeare’s decision to frame his tragedy in the form of a love sonnet, and the central paradox that choice creates.',
    ar: 'شرح سطراً بسطر لأول أربعة عشر سطراً من Romeo and Juliet - قرار Shakespeare إنه يصوغ مأساته في صيغة سوناتة حب، والمفارقة المركزية اللي يخلقها هذا الاختيار.',
    es: 'Un recorrido línea por línea de los catorce versos iniciales de Romeo and Juliet: la decisión de Shakespeare de enmarcar su tragedia en la forma de un soneto de amor, y la paradoja central que crea esa elección.',
  },
  'rev.texts.rj.extract.full_extract_h': {
    en: 'The full extract',
    ar: 'المقتطف كامل',
    es: 'El extracto completo',
  },
  'rev.texts.rj.extract.full_extract_source': {
    en: 'Chorus, Prologue (public domain). Act 1, opening of the play.',
    ar: 'Chorus، المقدّمة (ملكية عامة). الفصل 1، بداية المسرحية.',
    es: 'Chorus, Prólogo (dominio público). Acto 1, comienzo de la obra.',
  },
  'rev.texts.rj.extract.line_by_line_h': {
    en: 'Line-by-line analysis',
    ar: 'تحليل سطراً بسطر',
    es: 'Análisis línea por línea',
  },
  'rev.texts.rj.extract.form_sound_h': {
    en: 'Form, sound and structure',
    ar: 'الصيغة والصوت والبنية',
    es: 'Forma, sonido y estructura',
  },
  'rev.texts.rj.extract.model_para_h': {
    en: 'Model 250-word paragraph',
    ar: 'فقرة نموذجية من 250 كلمة',
    es: 'Párrafo modelo de 250 palabras',
  },
  'rev.texts.rj.extract.model_para_desc': {
    en: 'How the Prologue’s form (love sonnet) collides with its content (death and feud) to set up the play’s central paradox.',
    ar: 'كيف تتصادم صيغة المقدّمة (سوناتة حب) مع محتواها (الموت والثأر) عشان تؤسّس المفارقة المركزية للمسرحية.',
    es: 'Cómo la forma del Prólogo (soneto de amor) choca con su contenido (muerte y disputa) para plantear la paradoja central de la obra.',
  },
  'rev.texts.rj.extract.approx_words': {
    en: 'Approx. 280 words',
    ar: 'حوالي 280 كلمة',
    es: 'Aprox. 280 palabras',
  },
  'rev.texts.rj.extract.back_hub': {
    en: 'Back to Romeo and Juliet hub',
    ar: 'رجوع لمركز Romeo and Juliet',
    es: 'Volver al centro de Romeo and Juliet',
  },

  // ─── Romeo and Juliet key-quotes page chrome (rev.texts.rj.quotes.*) ────
  'rev.texts.rj.quotes.title': {
    en: 'Romeo and Juliet - Key Quotes',
    ar: 'Romeo and Juliet - الاقتباسات المفتاحية',
    es: 'Romeo and Juliet - Citas clave',
  },
  'rev.texts.rj.quotes.bank_badge': {
    en: 'Key Quotes Bank',
    ar: 'بنك الاقتباسات المفتاحية',
    es: 'Banco de citas clave',
  },
  'rev.texts.rj.quotes.intro': {
    en: 'Essential Romeo and Juliet quotations organised by act with detailed language analysis, speaker context, and thematic links for GCSE and IGCSE English Literature.',
    ar: 'اقتباسات أساسية من Romeo and Juliet مرتّبة حسب الفصل مع تحليل لغوي مفصّل وسياق المتحدّث وروابط بالمحاور لـ GCSE و IGCSE English Literature.',
    es: 'Citas esenciales de Romeo and Juliet organizadas por acto con análisis lingüístico detallado, contexto del hablante y vínculos temáticos para GCSE e IGCSE English Literature.',
  },
  'rev.texts.rj.quotes.how_to_use_h': {
    en: 'How to Use These Quotes',
    ar: 'كيف تستخدم هذه الاقتباسات',
    es: 'Cómo usar estas citas',
  },
  'rev.texts.rj.quotes.h1': {
    en: '30 Key Quotes by Theme',
    ar: '30 اقتباس مفتاحي حسب المحور',
    es: '30 citas clave por tema',
  },
  'rev.texts.rj.quotes.intro_short': {
    en: 'Every quotation you need for the exam, organised by theme with detailed analysis. All from the public-domain text.',
    ar: 'كل اقتباس تحتاجه للامتحان، مرتّب حسب المحور مع تحليل مفصّل. كله من النص ضمن الملكية العامة.',
    es: 'Todas las citas que necesitas para el examen, organizadas por tema con análisis detallado. Todas del texto de dominio público.',
  },

  // ─── Romeo and Juliet themes page chrome (rev.texts.rj.themes.*) ────────
  'rev.texts.rj.themes.title': {
    en: 'Romeo and Juliet - Themes',
    ar: 'Romeo and Juliet - المحاور',
    es: 'Romeo and Juliet - Temas',
  },
  'rev.texts.rj.themes.h1': {
    en: 'Themes - Deep Study',
    ar: 'المحاور - دراسة معمّقة',
    es: 'Temas - Estudio profundo',
  },
  'rev.texts.rj.themes.intro': {
    en: 'Comprehensive analysis of the seven key themes with quotations, contextual links, and exam strategies for top-grade responses.',
    ar: 'تحليل شامل للمحاور السبعة المفتاحية مع اقتباسات وروابط سياقية واستراتيجيات امتحان لإجابات بأعلى الدرجات.',
    es: 'Análisis completo de los siete temas clave con citas, vínculos contextuales y estrategias de examen para respuestas de la máxima nota.',
  },

  // ─── Macbeth acts page chrome (rev.texts.macbeth.acts.*) ────────────────
  'rev.texts.macbeth.acts.title': {
    en: 'Macbeth - Act-by-Act Analysis',
    ar: 'Macbeth - تحليل فصل بفصل',
    es: 'Macbeth - Análisis acto por acto',
  },
  'rev.texts.macbeth.acts.intro': {
    en: 'Every scene with full public-domain quotations and language technique analysis',
    ar: 'كل مشهد مع اقتباسات كاملة ضمن الملكية العامة وتحليل تقنيات اللغة',
    es: 'Cada escena con citas completas de dominio público y análisis de técnicas del lenguaje',
  },
  'rev.texts.macbeth.acts.framing': {
    en: 'This guide breaks down all five acts of Macbeth scene by scene. Each scene includes a plot summary, at least five key quotations from Shakespeare’s original text (public domain), and detailed analysis of the language techniques Shakespeare employs. Use it for close reading, essay planning, and exam preparation.',
    ar: 'هذا الدليل يفصّل كل الفصول الخمسة من Macbeth مشهد بمشهد. كل مشهد يشمل ملخص الحبكة، وخمسة اقتباسات مفتاحية على الأقل من نص Shakespeare الأصلي (ضمن الملكية العامة)، وتحليل مفصّل لتقنيات اللغة اللي يستعملها Shakespeare. استخدمه للقراءة المتأنّية وتخطيط المقال والاستعداد للامتحان.',
    es: 'Esta guía desglosa los cinco actos de Macbeth escena por escena. Cada escena incluye un resumen del argumento, al menos cinco citas clave del texto original de Shakespeare (dominio público) y un análisis detallado de las técnicas del lenguaje que emplea Shakespeare. Úsala para la lectura atenta, la planificación de ensayos y la preparación del examen.',
  },
  'rev.texts.macbeth.acts.public_domain_note': {
    en: 'All quotations are from Shakespeare’s Macbeth (c. 1606), which is in the public domain. Analysis and study notes are original to The English Hub.',
    ar: 'كل الاقتباسات من Macbeth تأليف Shakespeare (حوالي 1606)، وهو ضمن الملكية العامة. التحليل وملاحظات الدراسة أصلية من The English Hub.',
    es: 'Todas las citas provienen de Macbeth de Shakespeare (c. 1606), que es de dominio público. El análisis y las notas de estudio son originales de The English Hub.',
  },

  // ─── Macbeth essay-plans page chrome (rev.texts.macbeth.essays.*) ───────
  'rev.texts.macbeth.essays.title': {
    en: 'Macbeth - Essay Plans',
    ar: 'Macbeth - خطط المقالات',
    es: 'Macbeth - Planes de ensayo',
  },
  'rev.texts.macbeth.essays.intro': {
    en: 'Eight exam-style essay plans covering character, theme, and writer’s methods questions. Each plan includes an introduction, three PEAL paragraphs with quotes and analysis, and a conclusion.',
    ar: 'ثمان خطط مقالات على نمط الامتحان تغطّي أسئلة الشخصيات والمحاور وأساليب الكاتب. كل خطة تشمل مقدّمة، وثلاث فقرات PEAL مع اقتباسات وتحليل، وخاتمة.',
    es: 'Ocho planes de ensayo de estilo examen que cubren preguntas de personaje, tema y métodos del escritor. Cada plan incluye una introducción, tres párrafos PEAL con citas y análisis, y una conclusión.',
  },
  'rev.texts.macbeth.essays.how_to_use_h': {
    en: 'How to Use These Plans',
    ar: 'كيف تستخدم هذه الخطط',
    es: 'Cómo usar estos planes',
  },

  // ─── Macbeth extract-walkthrough page chrome (rev.texts.macbeth.extract.*) ─
  'rev.texts.macbeth.extract.badge': {
    en: 'Extract Walkthrough',
    ar: 'شرح المقتطف',
    es: 'Recorrido por el extracto',
  },
  'rev.texts.macbeth.extract.lines_badge': {
    en: 'Lines 1-28',
    ar: 'الأسطر 1-28',
    es: 'Versos 1-28',
  },
  'rev.texts.macbeth.extract.aqa_style_badge': {
    en: 'AQA-style',
    ar: 'على نمط AQA',
    es: 'Estilo AQA',
  },
  'rev.texts.macbeth.extract.title': {
    en: 'Macbeth’s “If it were done” soliloquy — line-by-line walkthrough',
    ar: 'مناجاة Macbeth “If it were done” — شرح سطراً بسطر',
    es: 'El soliloquio “If it were done” de Macbeth: recorrido línea por línea',
  },
  'rev.texts.macbeth.extract.intro': {
    en: 'A worked AQA-style extract analysis of Macbeth’s first great soliloquy. For each segment you get what to notice, what to say in AO2 method language, and how to zoom out to the wider play.',
    ar: 'تحليل مقتطف مشغول على نمط AQA لأول مناجاة كبرى لـ Macbeth. لكل مقطع تحصل على شنو تلاحظ، وشنو تقول بلغة أسلوب AO2، وكيف توسّع الصورة للمسرحية الأوسع.',
    es: 'Un análisis trabajado de estilo AQA del primer gran soliloquio de Macbeth. Para cada segmento obtienes qué observar, qué decir en el lenguaje de método AO2 y cómo ampliar la mirada a la obra en conjunto.',
  },
  'rev.texts.macbeth.extract.where_we_are_h': {
    en: 'Where we are in the play',
    ar: 'وين إحنا في المسرحية',
    es: 'Dónde estamos en la obra',
  },
  'rev.texts.macbeth.extract.the_extract_h': {
    en: 'The extract',
    ar: 'المقتطف',
    es: 'El extracto',
  },
  'rev.texts.macbeth.extract.extract_source': {
    en: 'Macbeth, alone. Act 1, Scene 7, lines 1-28.',
    ar: 'Macbeth، وحده. الفصل 1، المشهد 7، الأسطر 1-28.',
    es: 'Macbeth, solo. Acto 1, Escena 7, versos 1-28.',
  },
  'rev.texts.macbeth.extract.text_pd_note': {
    en: 'Text from Macbeth, Act 1 Scene 7. Public domain.',
    ar: 'النص من Macbeth، الفصل 1 المشهد 7. ملكية عامة.',
    es: 'Texto de Macbeth, Acto 1 Escena 7. Dominio público.',
  },
  'rev.texts.macbeth.extract.segment_h': {
    en: 'Segment-by-segment',
    ar: 'مقطعاً بمقطع',
    es: 'Segmento por segmento',
  },
  'rev.texts.macbeth.extract.segment_desc': {
    en: 'For each chunk: what to notice, what to say, how to zoom out.',
    ar: 'لكل مقطع: شنو تلاحظ، وشنو تقول، وكيف توسّع الصورة.',
    es: 'Para cada fragmento: qué observar, qué decir, cómo ampliar la mirada.',
  },
  'rev.texts.macbeth.extract.say_ao2': {
    en: 'Say (AO2)',
    ar: 'قُل (AO2)',
    es: 'Di (AO2)',
  },
  'rev.texts.macbeth.extract.model_para_h': {
    en: 'Model paragraph — how this extract reveals ambition',
    ar: 'فقرة نموذجية — كيف يكشف هذا المقتطف الطموح',
    es: 'Párrafo modelo: cómo este extracto revela la ambición',
  },
  'rev.texts.macbeth.extract.model_para_desc': {
    en: '~250 words. A single tightly-argued paragraph that braids language, structure and context into one thesis on ambition.',
    ar: 'حوالي 250 كلمة. فقرة واحدة محكمة الحجّة تضفّر اللغة والبنية والسياق في أطروحة وحدة عن الطموح.',
    es: 'Unas 250 palabras. Un único párrafo bien argumentado que entrelaza lenguaje, estructura y contexto en una sola tesis sobre la ambición.',
  },
  'rev.texts.macbeth.extract.fair_dealing': {
    en: 'Extract from Macbeth by William Shakespeare (c. 1606), Act 1 Scene 7, lines 1-28 - in the public domain. Commentary, segmentation and model paragraph are original educational analysis intended for study and revision under fair-dealing provisions for criticism, review and quotation.',
    ar: 'مقتطف من Macbeth تأليف William Shakespeare (حوالي 1606)، الفصل 1 المشهد 7، الأسطر 1-28 - ضمن الملكية العامة. التعليق والتقسيم والفقرة النموذجية تحليل تعليمي أصلي مخصّص للدراسة والمراجعة بموجب أحكام الاستخدام العادل للنقد والمراجعة والاقتباس.',
    es: 'Extracto de Macbeth de William Shakespeare (c. 1606), Acto 1 Escena 7, versos 1-28, de dominio público. El comentario, la segmentación y el párrafo modelo son un análisis educativo original destinado al estudio y al repaso conforme a las disposiciones de uso legítimo para crítica, reseña y cita.',
  },
}
