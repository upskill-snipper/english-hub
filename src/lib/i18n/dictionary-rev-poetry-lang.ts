/**
 * Revision poetry + language page-level UI chrome (rev.poetry.* / rev.lang.*).
 *
 * Covers the bespoke chrome on the GCSE revision poetry and language pages
 * that the shared StudyTools / InteractivePoemViewer components do NOT
 * already translate: back links, breadcrumbs, hero copy, section headings
 * and labels, tab labels, card titles/descriptions, button labels and the
 * recurring "Compare with" / "Back to Poetry" / rights-notice chrome.
 *
 * Strictly chrome only. Poem text, quotations, teaching/analysis prose,
 * model answers, word lists, exam-board factual paper data and worked
 * examples stay English in the source files.
 *
 * Conventions (Khaleeji Gulf Arabic):
 *   شنو / أبغى / وايد / الحين / إحنا / روح / شوف / دوّر / سكّر / لحظة
 *   Banned Levantine: شو / بحكي / كيفك / ليش
 *   Brand + technical terms stay Latin in AR and ES: The English Hub, GCSE,
 *   IGCSE, exam boards (AQA/OCR/Edexcel/Eduqas/WJEC), AO1-AO6, £, poem
 *   titles + poets, and device terms (caesura, enjambment, volta, sibilance,
 *   iambic pentameter). {tokens} preserved verbatim.
 *
 * Kept in a separate module to avoid merge churn on dictionary.ts.
 */

import type { Dictionary } from './dictionary'

export const REV_POETRY_LANG_DICTIONARY: Dictionary = {
  // ─── Shared recurring poetry chrome (rev.poetry.shared.*) ───────────
  'rev.poetry.shared.back_to_poetry': {
    en: 'Back to Poetry',
    ar: 'رجوع للشعر',
    es: 'Volver a Poesía',
  },
  'rev.poetry.shared.back_to_poetry_hub': {
    en: 'Back to Poetry Hub',
    ar: 'رجوع لـ Hub الشعر',
    es: 'Volver al hub de Poesía',
  },
  'rev.poetry.shared.compare_with': {
    en: 'Compare with',
    ar: 'قارن مع',
    es: 'Comparar con',
  },
  'rev.poetry.shared.compare_with_other': {
    en: 'Compare with other poems',
    ar: 'قارن مع قصائد ثانية',
    es: 'Comparar con otros poemas',
  },
  'rev.poetry.shared.anthology_suffix': {
    en: 'anthology',
    ar: 'مختارات',
    es: 'antología',
  },
  'rev.poetry.shared.back_to_eduqas_poetry': {
    en: 'Back to Eduqas Poetry',
    ar: 'رجوع لشعر Eduqas',
    es: 'Volver a Poesía Eduqas',
  },
  'rev.poetry.shared.back_to_edexcel_poetry': {
    en: 'Back to Edexcel Poetry',
    ar: 'رجوع لشعر Edexcel',
    es: 'Volver a Poesía Edexcel',
  },
  'rev.poetry.shared.back_to_time_and_place': {
    en: 'Back to Time and Place cluster',
    ar: 'رجوع لمجموعة Time and Place',
    es: 'Volver al grupo Time and Place',
  },
  'rev.poetry.shared.back_to_conflict_cluster': {
    en: 'Back to Conflict cluster',
    ar: 'رجوع لمجموعة Conflict',
    es: 'Volver al grupo Conflict',
  },
  'rev.poetry.shared.back_to_youth_and_age': {
    en: 'Back to Youth and Age',
    ar: 'رجوع لـ Youth and Age',
    es: 'Volver a Youth and Age',
  },
  'rev.poetry.shared.back_to_power_natural_world': {
    en: 'Back to Power and the Natural World',
    ar: 'رجوع لـ Power and the Natural World',
    es: 'Volver a Power and the Natural World',
  },
  'rev.poetry.shared.back_to_love_and_relationships': {
    en: 'Back to Love and Relationships',
    ar: 'رجوع لـ Love and Relationships',
    es: 'Volver a Love and Relationships',
  },
  'rev.poetry.shared.back_label_love_and_relationships': {
    en: 'Love and Relationships',
    ar: 'رجوع لـ Love and Relationships',
    es: 'Volver a Love and Relationships',
  },

  // ─── Unseen poetry guide (rev.poetry.unseen.*) ──────────────────────
  'rev.poetry.unseen.badge_guide': {
    en: 'Comprehensive Guide',
    ar: 'دليل شامل',
    es: 'Guía completa',
  },
  'rev.poetry.unseen.badge_all_boards': {
    en: 'All Exam Boards',
    ar: 'كل بوردات الامتحان',
    es: 'Todas las juntas examinadoras',
  },
  'rev.poetry.unseen.hero_title': {
    en: 'Unseen Poetry Guide',
    ar: 'دليل الشعر غير المرئي',
    es: 'Guía de poesía desconocida',
  },
  'rev.poetry.unseen.hero_lead': {
    en: 'Everything you need to approach, analyse, and write about a poem you have never seen before. A five-step method, twenty key techniques, five practice poems with model responses, and the most common mistakes to avoid.',
    ar: 'كل اللي تحتاجه عشان تتعامل مع قصيدة ما شفتها قبل، وتحلّلها، وتكتب عنها. طريقة من خمس خطوات، عشرين أسلوب أساسي، خمس قصائد للتدريب مع نماذج إجابة، وأكثر الأخطاء الشائعة اللي لازم تتجنّبها.',
    es: 'Todo lo que necesitas para abordar, analizar y escribir sobre un poema que nunca has visto. Un método de cinco pasos, veinte técnicas clave, cinco poemas de práctica con respuestas modelo y los errores más comunes que debes evitar.',
  },
  'rev.poetry.unseen.s_steps_title': {
    en: 'The five-step approach',
    ar: 'الطريقة من خمس خطوات',
    es: 'El enfoque de cinco pasos',
  },
  'rev.poetry.unseen.s_steps_lead': {
    en: 'Follow these steps in order on every unseen poem.',
    ar: 'اتبع الخطوات هاي بالترتيب مع كل قصيدة غير مرئية.',
    es: 'Sigue estos pasos en orden en cada poema desconocido.',
  },
  'rev.poetry.unseen.s_tech_title': {
    en: 'Key techniques to look for',
    ar: 'الأساليب الأساسية اللي تدوّر عليها',
    es: 'Técnicas clave que buscar',
  },
  'rev.poetry.unseen.s_tech_lead': {
    en: 'Twenty poetic techniques you should be able to identify and analyse in any unseen poem.',
    ar: 'عشرين أسلوب شعري لازم تقدر تتعرّف عليه وتحلّله في أي قصيدة غير مرئية.',
    es: 'Veinte técnicas poéticas que deberías poder identificar y analizar en cualquier poema desconocido.',
  },
  'rev.poetry.unseen.effect_label': {
    en: 'Effect:',
    ar: 'الأثر:',
    es: 'Efecto:',
  },
  'rev.poetry.unseen.s_structure_title': {
    en: 'How to write about structure',
    ar: 'شلون تكتب عن البنية',
    es: 'Cómo escribir sobre la estructura',
  },
  'rev.poetry.unseen.s_structure_lead': {
    en: 'Structure is not just "how the poem looks on the page." It is how the poet organises meaning. Here are the structural features to look for and how to discuss them.',
    ar: 'البنية مو بس "شكل القصيدة على الورقة". هي شلون الشاعر ينظّم المعنى. هذي ملامح البنية اللي تدوّر عليها وشلون تناقشها.',
    es: 'La estructura no es solo "cómo se ve el poema en la página". Es cómo el poeta organiza el significado. Aquí están los rasgos estructurales que buscar y cómo comentarlos.',
  },
  'rev.poetry.unseen.examiner_tip': {
    en: 'Examiner tip',
    ar: 'نصيحة الممتحن',
    es: 'Consejo del examinador',
  },
  'rev.poetry.unseen.s_language_title': {
    en: 'How to write about language',
    ar: 'شلون تكتب عن اللغة',
    es: 'Cómo escribir sobre el lenguaje',
  },
  'rev.poetry.unseen.s_language_lead': {
    en: 'Use the What-How-Why framework to turn feature-spotting into genuine analysis.',
    ar: 'استخدم إطار What-How-Why عشان تحوّل رصد الأساليب إلى تحليل حقيقي.',
    es: 'Usa el marco What-How-Why para convertir la mera identificación de recursos en análisis genuino.',
  },
  'rev.poetry.unseen.full_example_title': {
    en: 'Full example paragraph (What-How-Why combined)',
    ar: 'فقرة مثال كاملة (What-How-Why مع بعض)',
    es: 'Párrafo de ejemplo completo (What-How-Why combinados)',
  },
  'rev.poetry.unseen.s_practice_title': {
    en: 'Practice poems with model responses',
    ar: 'قصائد للتدريب مع نماذج إجابة',
    es: 'Poemas de práctica con respuestas modelo',
  },
  'rev.poetry.unseen.s_practice_lead': {
    en: 'Five public domain poems with guided analysis questions. Try to answer the questions yourself before revealing the model response.',
    ar: 'خمس قصائد بالمجال العام مع أسئلة تحليل موجّهة. حاول تجاوب على الأسئلة بنفسك قبل ما تكشف نموذج الإجابة.',
    es: 'Cinco poemas de dominio público con preguntas de análisis guiadas. Intenta responder las preguntas tú mismo antes de revelar la respuesta modelo.',
  },
  'rev.poetry.unseen.focus_label': {
    en: 'Focus:',
    ar: 'التركيز:',
    es: 'Enfoque:',
  },
  'rev.poetry.unseen.analysis_questions': {
    en: 'Analysis questions',
    ar: 'أسئلة التحليل',
    es: 'Preguntas de análisis',
  },
  'rev.poetry.unseen.reveal_model': {
    en: 'Reveal model response',
    ar: 'اكشف نموذج الإجابة',
    es: 'Mostrar respuesta modelo',
  },
  'rev.poetry.unseen.s_comparison_title': {
    en: 'How to compare two unseen poems',
    ar: 'شلون تقارن قصيدتين غير مرئيتين',
    es: 'Cómo comparar dos poemas desconocidos',
  },
  'rev.poetry.unseen.s_comparison_lead': {
    en: 'Many exam boards include a comparison question. Follow these five steps to structure a strong comparative response.',
    ar: 'كثير من بوردات الامتحان تتضمّن سؤال مقارنة. اتبع الخطوات الخمس هاي عشان تبني إجابة مقارنة قوية.',
    es: 'Muchas juntas examinadoras incluyen una pregunta de comparación. Sigue estos cinco pasos para estructurar una respuesta comparativa sólida.',
  },
  'rev.poetry.unseen.example_comparison_title': {
    en: 'Example comparison paragraph',
    ar: 'فقرة مقارنة كمثال',
    es: 'Párrafo de comparación de ejemplo',
  },
  'rev.poetry.unseen.s_mistakes_title': {
    en: 'Ten common mistakes',
    ar: 'عشرة أخطاء شائعة',
    es: 'Diez errores comunes',
  },
  'rev.poetry.unseen.s_mistakes_lead': {
    en: 'These are the errors examiners see most often. Avoiding them will immediately improve your grade.',
    ar: 'هذي الأخطاء اللي يشوفها الممتحنون أكثر شي. تجنّبها بيرفع درجتك على طول.',
    es: 'Estos son los errores que los examinadores ven con más frecuencia. Evitarlos mejorará tu nota de inmediato.',
  },
  'rev.poetry.unseen.cta_title': {
    en: 'Ready to study the anthology?',
    ar: 'مستعد تذاكر المختارات؟',
    es: '¿Listo para estudiar la antología?',
  },
  'rev.poetry.unseen.cta_lead': {
    en: 'Head back to the Poetry hub to explore Power and Conflict, Love and Relationships, and your full set of anthology poems.',
    ar: 'ارجع لـ Hub الشعر عشان تستكشف Power and Conflict و Love and Relationships وكل قصائد المختارات مالتك.',
    es: 'Vuelve al hub de Poesía para explorar Power and Conflict, Love and Relationships y tu conjunto completo de poemas de la antología.',
  },

  // ─── Language hub (rev.lang.hub.*) ──────────────────────────────────
  'rev.lang.hub.back_to_revision': {
    en: 'Back to Revision Hub',
    ar: 'رجوع لـ Hub المراجعة',
    es: 'Volver al hub de Repaso',
  },
  'rev.lang.hub.breadcrumb_revision': { en: 'Revision', ar: 'المراجعة', es: 'Repaso' },
  'rev.lang.hub.breadcrumb_language': { en: 'Language', ar: 'اللغة', es: 'Lengua' },
  'rev.lang.hub.heading_generic': {
    en: 'English Language Revision',
    ar: 'مراجعة اللغة الإنجليزية',
    es: 'Repaso de Lengua Inglesa',
  },
  'rev.lang.hub.heading_board_suffix': {
    en: 'English Language Revision',
    ar: 'مراجعة اللغة الإنجليزية',
    es: 'Repaso de Lengua Inglesa',
  },
  'rev.lang.hub.subtitle': {
    en: 'Reading, writing, and SPaG mastery tailored to your exam board',
    ar: 'إتقان القراءة والكتابة و SPaG مفصّل على بورد الامتحان مالك',
    es: 'Dominio de lectura, escritura y SPaG adaptado a tu junta examinadora',
  },
  'rev.lang.hub.igcse_banner_title': {
    en: 'Your board uses a different paper structure',
    ar: 'بوردك يستخدم بنية أوراق مختلفة',
    es: 'Tu junta usa una estructura de prueba distinta',
  },
  'rev.lang.hub.your_progress': {
    en: 'Your Progress',
    ar: 'تقدّمك',
    es: 'Tu progreso',
  },
  'rev.lang.hub.sections_suffix': {
    en: 'sections',
    ar: 'أقسام',
    es: 'secciones',
  },
  'rev.lang.hub.progress_hint': {
    en: 'Click the checkbox on each section card to track what you have revised',
    ar: 'اضغط على المربّع في كل بطاقة قسم عشان تتابع شنو ذاكرت.',
    es: 'Marca la casilla en cada tarjeta de sección para registrar lo que has repasado',
  },
  'rev.lang.hub.show_tips': {
    en: 'Show quick tips',
    ar: 'اعرض نصائح سريعة',
    es: 'Mostrar consejos rápidos',
  },
  'rev.lang.hub.hide_tips': {
    en: 'Hide quick tips',
    ar: 'أخفِ النصائح السريعة',
    es: 'Ocultar consejos rápidos',
  },
  'rev.lang.hub.start_revising': {
    en: 'Start revising',
    ar: 'ابدأ المذاكرة',
    es: 'Empezar a repasar',
  },
  'rev.lang.hub.go_to_igcse': {
    en: 'Go to your IGCSE hub',
    ar: 'روح لـ hub الـ IGCSE مالك',
    es: 'Ir a tu hub de IGCSE',
  },
  'rev.lang.hub.papers_glance_suffix': {
    en: 'Language Papers at a Glance',
    ar: 'أوراق اللغة بنظرة سريعة',
    es: 'Las pruebas de Lengua de un vistazo',
  },
  'rev.lang.hub.paper1': { en: 'Paper 1', ar: 'Paper 1', es: 'Paper 1' },
  'rev.lang.hub.paper2': { en: 'Paper 2', ar: 'Paper 2', es: 'Paper 2' },
  'rev.lang.hub.papers_equal_note': {
    en: 'Both papers carry equal weight and both test SPaG in the writing section.',
    ar: 'الورقتين لهما نفس الوزن، وكلتاهما تختبر SPaG في قسم الكتابة.',
    es: 'Ambas pruebas tienen el mismo peso y ambas evalúan SPaG en la sección de escritura.',
  },
  'rev.lang.hub.quick_reminder_title': {
    en: 'Language Paper Quick Reminder',
    ar: 'تذكير سريع بورقة اللغة',
    es: 'Recordatorio rápido de la prueba de Lengua',
  },
  'rev.lang.hub.quick_reminder_body': {
    en: 'Select your exam board to see paper-specific guidance. Paper 1 and Paper 2 structures vary by board, but reading, writing, and SPaG skills are universal.',
    ar: 'اختر بورد الامتحان مالك عشان تشوف إرشادات خاصة بالأوراق. بنية Paper 1 و Paper 2 تختلف حسب البورد، بس مهارات القراءة والكتابة و SPaG واحدة عند الكل.',
    es: 'Selecciona tu junta examinadora para ver orientación específica de cada prueba. La estructura de Paper 1 y Paper 2 varía según la junta, pero las destrezas de lectura, escritura y SPaG son universales.',
  },
  'rev.lang.hub.select_board': {
    en: 'Select your exam board',
    ar: 'اختر بورد الامتحان مالك',
    es: 'Selecciona tu junta examinadora',
  },
  // Section cards (titles/descriptions/stats) — chrome
  'rev.lang.hub.section.reading.title': {
    en: 'Reading Skills',
    ar: 'مهارات القراءة',
    es: 'Destrezas de lectura',
  },
  'rev.lang.hub.section.reading.desc': {
    en: 'How to approach unseen extracts, inference and deduction, language analysis using What-How-Why, comparison techniques, and model responses at every grade.',
    ar: 'شلون تتعامل مع المقاطع غير المرئية، الاستنتاج والاستدلال، تحليل اللغة باستخدام What-How-Why، أساليب المقارنة، ونماذج إجابة لكل درجة.',
    es: 'Cómo abordar extractos desconocidos, inferencia y deducción, análisis de lenguaje con What-How-Why, técnicas de comparación y respuestas modelo en cada nota.',
  },
  'rev.lang.hub.section.reading.stats': {
    en: '7 key topics',
    ar: '٧ مواضيع أساسية',
    es: '7 temas clave',
  },
  'rev.lang.hub.section.writing.title': {
    en: 'Writing Skills',
    ar: 'مهارات الكتابة',
    es: 'Destrezas de escritura',
  },
  'rev.lang.hub.section.writing.desc': {
    en: 'Creative writing techniques for narrative and descriptive pieces, transactional writing for articles, letters, and speeches, plus planning and vocabulary strategies.',
    ar: 'أساليب الكتابة الإبداعية للقطع السردية والوصفية، الكتابة الوظيفية للمقالات والرسائل والخطب، زائد استراتيجيات التخطيط والمفردات.',
    es: 'Técnicas de escritura creativa para textos narrativos y descriptivos, escritura transaccional para artículos, cartas y discursos, además de estrategias de planificación y vocabulario.',
  },
  'rev.lang.hub.section.writing.stats': {
    en: '6 key topics',
    ar: '٦ مواضيع أساسية',
    es: '6 temas clave',
  },
  'rev.lang.hub.section.spag.title': { en: 'SPaG', ar: 'SPaG', es: 'SPaG' },
  'rev.lang.hub.section.spag.desc': {
    en: 'Spelling rules and common errors, punctuation mastery (semicolons, colons, dashes, apostrophes), grammar essentials, and the mistakes that cost marks.',
    ar: 'قواعد الإملاء والأخطاء الشائعة، إتقان علامات الترقيم (semicolons و colons و dashes و apostrophes)، أساسيات القواعد، والأخطاء اللي تكلّفك درجات.',
    es: 'Reglas de ortografía y errores comunes, dominio de la puntuación (semicolons, colons, dashes, apostrophes), gramática esencial y los fallos que cuestan puntos.',
  },
  'rev.lang.hub.section.spag.stats': {
    en: '4 key areas',
    ar: '٤ مجالات أساسية',
    es: '4 áreas clave',
  },

  // ─── Language: Reading view (rev.lang.reading.*) ────────────────────
  'rev.lang.reading.back': {
    en: 'Back to Language Skills',
    ar: 'رجوع لمهارات اللغة',
    es: 'Volver a Destrezas de Lengua',
  },
  'rev.lang.reading.title': {
    en: 'Reading Skills',
    ar: 'مهارات القراءة',
    es: 'Destrezas de lectura',
  },
  'rev.lang.reading.badge_paper1_prefix': {
    en: 'For',
    ar: 'لـ',
    es: 'Para',
  },
  'rev.lang.reading.badge_paper1_suffix': {
    en: 'Language Paper 1',
    ar: 'Language Paper 1',
    es: 'Language Paper 1',
  },
  'rev.lang.reading.subtitle': {
    en: 'Extract analysis, inference, language methods, and comparison techniques',
    ar: 'تحليل المقاطع، الاستنتاج، أساليب اللغة، وأساليب المقارنة',
    es: 'Análisis de extractos, inferencia, métodos de lenguaje y técnicas de comparación',
  },
  'rev.lang.reading.igcse_banner_title': {
    en: 'Your board uses a different paper structure',
    ar: 'بوردك يستخدم بنية أوراق مختلفة',
    es: 'Tu junta usa una estructura de prueba distinta',
  },
  'rev.lang.reading.your_igcse_hub': {
    en: 'your IGCSE hub',
    ar: 'hub الـ IGCSE مالك',
    es: 'tu hub de IGCSE',
  },
  'rev.lang.reading.question_types_label': {
    en: 'Question types you will face:',
    ar: 'أنواع الأسئلة اللي بتواجهها:',
    es: 'Tipos de pregunta a los que te enfrentarás:',
  },
  'rev.lang.reading.sec_approaching': {
    en: 'Approaching Reading Questions',
    ar: 'التعامل مع أسئلة القراءة',
    es: 'Abordar las preguntas de lectura',
  },
  'rev.lang.reading.sec_inference': {
    en: 'Inference and Deduction',
    ar: 'الاستنتاج والاستدلال',
    es: 'Inferencia y deducción',
  },
  'rev.lang.reading.sec_whw': {
    en: 'Language Analysis: What-How-Why',
    ar: 'تحليل اللغة: What-How-Why',
    es: 'Análisis del lenguaje: What-How-Why',
  },
  'rev.lang.reading.sec_methods': {
    en: "Writer's Methods and Their Effects",
    ar: 'أساليب الكاتب وآثارها',
    es: 'Los métodos del escritor y sus efectos',
  },
  'rev.lang.reading.sec_comparison': {
    en: 'Comparison Techniques',
    ar: 'أساليب المقارنة',
    es: 'Técnicas de comparación',
  },
  'rev.lang.reading.sec_practice': {
    en: 'Practice Extract with Guided Questions',
    ar: 'مقطع للتدريب مع أسئلة موجّهة',
    es: 'Extracto de práctica con preguntas guiadas',
  },
  'rev.lang.reading.sec_grades': {
    en: 'Grade 5 vs Grade 7 vs Grade 9 Responses',
    ar: 'إجابات Grade 5 مقابل Grade 7 مقابل Grade 9',
    es: 'Respuestas de Grade 5 vs Grade 7 vs Grade 9',
  },
  'rev.lang.reading.practice_extract': {
    en: 'Practice Extract',
    ar: 'مقطع للتدريب',
    es: 'Extracto de práctica',
  },
  'rev.lang.reading.show_guidance': {
    en: 'Show guidance',
    ar: 'اعرض التوجيه',
    es: 'Mostrar orientación',
  },
  'rev.lang.reading.hide_guidance': {
    en: 'Hide guidance',
    ar: 'أخفِ التوجيه',
    es: 'Ocultar orientación',
  },
  'rev.lang.reading.take_further': {
    en: 'Take it Further',
    ar: 'خذها أبعد',
    es: 'Lleva tu repaso más lejos',
  },
  'rev.lang.reading.take_further_lead': {
    en: 'Build on your reading skills with related guides.',
    ar: 'ابنِ على مهارات القراءة مالتك مع أدلّة ذات صلة.',
    es: 'Amplía tus destrezas de lectura con guías relacionadas.',
  },
  'rev.lang.reading.rel_essay_title': {
    en: 'Essay Structure Guide',
    ar: 'دليل بنية المقال',
    es: 'Guía de estructura de redacción',
  },
  'rev.lang.reading.rel_essay_desc': {
    en: 'Turn close reading into top-band paragraphs.',
    ar: 'حوّل القراءة الدقيقة إلى فقرات بأعلى درجة.',
    es: 'Convierte la lectura atenta en párrafos de banda alta.',
  },
  'rev.lang.reading.rel_qtypes_title': {
    en: 'Question Types Decoded',
    ar: 'فك شفرة أنواع الأسئلة',
    es: 'Tipos de pregunta descifrados',
  },
  'rev.lang.reading.rel_qtypes_desc': {
    en: 'Match reading techniques to each question.',
    ar: 'طابق أساليب القراءة مع كل سؤال.',
    es: 'Asocia las técnicas de lectura a cada pregunta.',
  },
  'rev.lang.reading.rel_grade7_title': {
    en: 'Aiming for Grade 7',
    ar: 'تهدف لـ Grade 7',
    es: 'Apuntando a Grade 7',
  },
  'rev.lang.reading.rel_grade7_desc': {
    en: 'See how perceptive reading is rewarded.',
    ar: 'شوف شلون القراءة الثاقبة تتكافأ.',
    es: 'Descubre cómo se premia una lectura perspicaz.',
  },
  'rev.lang.reading.rel_quiz_title': {
    en: 'Test Yourself',
    ar: 'اختبر نفسك',
    es: 'Ponte a prueba',
  },
  'rev.lang.reading.rel_quiz_desc': {
    en: 'Quick quizzes on language techniques.',
    ar: 'اختبارات سريعة على أساليب اللغة.',
    es: 'Cuestionarios rápidos sobre técnicas de lenguaje.',
  },

  // ─── Language: SPaG view (rev.lang.spag.*) ──────────────────────────
  'rev.lang.spag.back': {
    en: 'Back to Language Skills',
    ar: 'رجوع لمهارات اللغة',
    es: 'Volver a Destrezas de Lengua',
  },
  'rev.lang.spag.title': {
    en: 'Spelling, Punctuation & Grammar',
    ar: 'الإملاء والترقيم والقواعد',
    es: 'Ortografía, puntuación y gramática',
  },
  'rev.lang.spag.applies_to': {
    en: 'Applies to',
    ar: 'ينطبق على',
    es: 'Aplica a',
  },
  'rev.lang.spag.subtitle': {
    en: 'The technical accuracy that earns (and loses) marks on every paper',
    ar: 'الدقة التقنية اللي تكسب (وتخسر) درجات في كل ورقة',
    es: 'La precisión técnica que gana (y pierde) puntos en cada prueba',
  },
  'rev.lang.spag.igcse_banner_title': {
    en: 'SPaG is universal -- every board rewards it',
    ar: 'SPaG واحد عند الكل - كل بورد يكافئ عليه',
    es: 'SPaG es universal: todas las juntas lo premian',
  },
  'rev.lang.spag.your_igcse_hub': {
    en: 'your IGCSE hub',
    ar: 'hub الـ IGCSE مالك',
    es: 'tu hub de IGCSE',
  },
  'rev.lang.spag.sec_spelling': {
    en: 'Spelling Rules and Common Errors',
    ar: 'قواعد الإملاء والأخطاء الشائعة',
    es: 'Reglas de ortografía y errores comunes',
  },
  'rev.lang.spag.sec_punctuation': {
    en: 'Punctuation Guide',
    ar: 'دليل علامات الترقيم',
    es: 'Guía de puntuación',
  },
  'rev.lang.spag.sec_grammar': {
    en: 'Grammar Essentials',
    ar: 'أساسيات القواعد',
    es: 'Gramática esencial',
  },
  'rev.lang.spag.sec_mistakes': {
    en: 'Common Mistakes to Avoid',
    ar: 'أخطاء شائعة تتجنّبها',
    es: 'Errores comunes que evitar',
  },
  'rev.lang.spag.tab_commas': { en: 'Commas', ar: 'Commas', es: 'Commas' },
  'rev.lang.spag.tab_semicolons': { en: 'Semicolons', ar: 'Semicolons', es: 'Semicolons' },
  'rev.lang.spag.tab_colons': { en: 'Colons', ar: 'Colons', es: 'Colons' },
  'rev.lang.spag.tab_dashes': { en: 'Dashes', ar: 'Dashes', es: 'Dashes' },
  'rev.lang.spag.tab_apostrophes': { en: 'Apostrophes', ar: 'Apostrophes', es: 'Apostrophes' },
  'rev.lang.spag.footer_title': {
    en: 'Accuracy Is a Habit, Not a Last-Minute Fix',
    ar: 'الدقة عادة، مو إصلاح في آخر لحظة',
    es: 'La precisión es un hábito, no un arreglo de último minuto',
  },
  'rev.lang.spag.footer_body': {
    en: 'The best way to improve your SPaG is to practise it in every piece of writing you do -- homework, notes, and timed essays. If you only think about accuracy in the exam, it will feel unnatural. Make it second nature now.',
    ar: 'أحسن طريقة تطوّر SPaG مالك هي إنك تتدرّب عليها في كل شي تكتبه - الواجبات والملاحظات والمقالات المؤقّتة. لو بس تفكّر في الدقة وقت الامتحان، بتحسّها غير طبيعية. خلّيها عادة من الحين.',
    es: 'La mejor forma de mejorar tu SPaG es practicarlo en todo lo que escribas: deberes, apuntes y redacciones cronometradas. Si solo piensas en la precisión durante el examen, te resultará forzada. Conviértela en algo natural desde ya.',
  },
  'rev.lang.spag.footer_cta': {
    en: 'Practise in Writing Skills',
    ar: 'تدرّب في مهارات الكتابة',
    es: 'Practica en Destrezas de escritura',
  },

  // ─── Language: Writing view (rev.lang.writing.*) ────────────────────
  'rev.lang.writing.back': {
    en: 'Back to Language Skills',
    ar: 'رجوع لمهارات اللغة',
    es: 'Volver a Destrezas de Lengua',
  },
  'rev.lang.writing.title_generic': {
    en: 'Writing Skills',
    ar: 'مهارات الكتابة',
    es: 'Destrezas de escritura',
  },
  'rev.lang.writing.title_board_suffix': {
    en: 'Language Writing Skills',
    ar: 'مهارات كتابة اللغة',
    es: 'Destrezas de escritura de Lengua',
  },
  'rev.lang.writing.subtitle_generic': {
    en: 'Creative writing, transactional writing, planning, and language craft',
    ar: 'الكتابة الإبداعية، الكتابة الوظيفية، التخطيط، وحرفة اللغة',
    es: 'Escritura creativa, escritura transaccional, planificación y oficio del lenguaje',
  },
  'rev.lang.writing.subtitle_board_prefix': {
    en: 'Creative and transactional writing craft for',
    ar: 'حرفة الكتابة الإبداعية والوظيفية لـ',
    es: 'El oficio de la escritura creativa y transaccional para',
  },
  'rev.lang.writing.igcse_banner_title': {
    en: 'Your board uses a different paper structure',
    ar: 'بوردك يستخدم بنية أوراق مختلفة',
    es: 'Tu junta usa una estructura de prueba distinta',
  },
  'rev.lang.writing.your_igcse_hub': {
    en: 'your IGCSE hub',
    ar: 'hub الـ IGCSE مالك',
    es: 'tu hub de IGCSE',
  },
  'rev.lang.writing.creative_writing': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
    es: 'Escritura creativa',
  },
  'rev.lang.writing.transactional_writing': {
    en: 'Transactional Writing',
    ar: 'الكتابة الوظيفية',
    es: 'Escritura transaccional',
  },
  'rev.lang.writing.length_label': { en: 'Length:', ar: 'الطول:', es: 'Extensión:' },
  'rev.lang.writing.marks_label': { en: 'Marks:', ar: 'الدرجات:', es: 'Puntos:' },
  'rev.lang.writing.timing_label': { en: 'Timing:', ar: 'الوقت:', es: 'Tiempo:' },
  'rev.lang.writing.sec_creative': {
    en: 'Creative Writing Techniques',
    ar: 'أساليب الكتابة الإبداعية',
    es: 'Técnicas de escritura creativa',
  },
  'rev.lang.writing.sec_transactional': {
    en: 'Transactional Writing',
    ar: 'الكتابة الوظيفية',
    es: 'Escritura transaccional',
  },
  'rev.lang.writing.sec_planning': {
    en: 'Planning Methods',
    ar: 'طرق التخطيط',
    es: 'Métodos de planificación',
  },
  'rev.lang.writing.sec_vocab': {
    en: 'Vocabulary Enhancement',
    ar: 'تحسين المفردات',
    es: 'Mejora del vocabulario',
  },
  'rev.lang.writing.sec_sentence': {
    en: 'Sentence Variety',
    ar: 'تنويع الجمل',
    es: 'Variedad de oraciones',
  },
  'rev.lang.writing.sec_paragraphing': {
    en: 'Paragraphing and Cohesion',
    ar: 'تقسيم الفقرات والترابط',
    es: 'Estructuración de párrafos y cohesión',
  },
  'rev.lang.writing.tab_narrative': {
    en: 'Narrative Writing',
    ar: 'الكتابة السردية',
    es: 'Escritura narrativa',
  },
  'rev.lang.writing.tab_descriptive': {
    en: 'Descriptive Writing',
    ar: 'الكتابة الوصفية',
    es: 'Escritura descriptiva',
  },
  'rev.lang.writing.tab_article': { en: 'Articles', ar: 'المقالات', es: 'Artículos' },
  'rev.lang.writing.tab_letter': { en: 'Letters', ar: 'الرسائل', es: 'Cartas' },
  'rev.lang.writing.tab_speech': { en: 'Speeches', ar: 'الخطب', es: 'Discursos' },
  'rev.lang.writing.take_further': {
    en: 'Take it Further',
    ar: 'خذها أبعد',
    es: 'Lleva tu repaso más lejos',
  },
  'rev.lang.writing.take_further_lead': {
    en: 'Pair your writing skills with these related guides.',
    ar: 'اجمع مهارات الكتابة مالتك مع الأدلّة ذات الصلة هذي.',
    es: 'Combina tus destrezas de escritura con estas guías relacionadas.',
  },
  'rev.lang.writing.rel_essay_title': {
    en: 'Essay Structure',
    ar: 'بنية المقال',
    es: 'Estructura de redacción',
  },
  'rev.lang.writing.rel_essay_desc': {
    en: 'Plan and structure your written response.',
    ar: 'خطط وابنِ بنية إجابتك المكتوبة.',
    es: 'Planifica y estructura tu respuesta escrita.',
  },
  'rev.lang.writing.rel_spag_title': {
    en: 'SPaG Mastery',
    ar: 'إتقان SPaG',
    es: 'Dominio de SPaG',
  },
  'rev.lang.writing.rel_spag_desc': {
    en: 'Polish accuracy for top writing marks.',
    ar: 'صقل الدقة عشان أعلى درجات الكتابة.',
    es: 'Pule la precisión para las mejores notas de escritura.',
  },
  'rev.lang.writing.rel_grade9_title': {
    en: 'Grade 9 Writing Standards',
    ar: 'معايير الكتابة لـ Grade 9',
    es: 'Estándares de escritura de Grade 9',
  },
  'rev.lang.writing.rel_grade9_desc': {
    en: 'See what crafted writing looks like at the top.',
    ar: 'شوف شلون تكون الكتابة المتقنة في القمة.',
    es: 'Mira cómo es la escritura cuidada en lo más alto.',
  },
  'rev.lang.writing.rel_time_title': {
    en: 'Time Management',
    ar: 'إدارة الوقت',
    es: 'Gestión del tiempo',
  },
  'rev.lang.writing.rel_time_desc': {
    en: 'Hit the planning, drafting, and checking stages.',
    ar: 'حقّق مراحل التخطيط والمسوّدة والمراجعة.',
    es: 'Cumple las etapas de planificación, redacción y revisión.',
  },

  // ─── Language: Vocabulary (rev.lang.vocab.*) ────────────────────────
  'rev.lang.vocab.breadcrumb': { en: 'Vocabulary', ar: 'المفردات', es: 'Vocabulario' },
  'rev.lang.vocab.back': {
    en: 'Back to Language Skills',
    ar: 'رجوع لمهارات اللغة',
    es: 'Volver a Destrezas de Lengua',
  },
  'rev.lang.vocab.title': {
    en: 'Advanced Vocabulary',
    ar: 'مفردات متقدّمة',
    es: 'Vocabulario avanzado',
  },
  'rev.lang.vocab.subtitle_suffix': {
    en: 'words organised by purpose -- describe, argue, analyse, and evaluate',
    ar: 'كلمة منظّمة حسب الغرض - الوصف والحجاج والتحليل والتقييم',
    es: 'palabras organizadas por propósito: describir, argumentar, analizar y evaluar',
  },
  'rev.lang.vocab.how_label': {
    en: 'How to learn these words:',
    ar: 'شلون تتعلّم الكلمات هذي:',
    es: 'Cómo aprender estas palabras:',
  },
  'rev.lang.vocab.how_body_prefix': {
    en: 'Do not try to memorise all',
    ar: 'لا تحاول تحفظ كل الـ',
    es: 'No intentes memorizar las',
  },
  'rev.lang.vocab.how_body_suffix': {
    en: 'at once. Pick 5 words per week, write them in sentences, and use them in practice essays. A word you can use confidently is worth more than 20 words you vaguely recognise. Focus on the category that matches your next practice task.',
    ar: 'دفعة وحدة. اختر ٥ كلمات بالأسبوع، اكتبها في جمل، واستخدمها في مقالات التدريب. كلمة تقدر تستخدمها بثقة أحسن من ٢٠ كلمة تعرفها بشكل غامض. ركّز على الفئة اللي تناسب مهمة التدريب الجاية مالتك.',
    es: 'de golpe. Elige 5 palabras por semana, escríbelas en oraciones y úsalas en redacciones de práctica. Una palabra que puedes usar con seguridad vale más que 20 que apenas reconoces. Céntrate en la categoría que corresponda a tu próxima tarea de práctica.',
  },
  'rev.lang.vocab.words_label': { en: 'words', ar: 'كلمات', es: 'palabras' },
  'rev.lang.vocab.cat.describe.title': { en: 'Describe', ar: 'الوصف', es: 'Describir' },
  'rev.lang.vocab.cat.describe.desc': {
    en: 'Words for creative and descriptive writing -- building atmosphere, setting, and character.',
    ar: 'كلمات للكتابة الإبداعية والوصفية - لبناء الأجواء والمكان والشخصية.',
    es: 'Palabras para la escritura creativa y descriptiva: crear atmósfera, ambientación y personaje.',
  },
  'rev.lang.vocab.cat.argue.title': { en: 'Argue', ar: 'الحجاج', es: 'Argumentar' },
  'rev.lang.vocab.cat.argue.desc': {
    en: 'Words for persuasive and argumentative writing -- building a case, countering objections, and influencing readers.',
    ar: 'كلمات للكتابة الإقناعية والحجاجية - لبناء حجة، والرد على الاعتراضات، والتأثير في القرّاء.',
    es: 'Palabras para la escritura persuasiva y argumentativa: construir un caso, rebatir objeciones e influir en los lectores.',
  },
  'rev.lang.vocab.cat.analyse.title': { en: 'Analyse', ar: 'التحليل', es: 'Analizar' },
  'rev.lang.vocab.cat.analyse.desc': {
    en: 'Words for reading responses -- discussing writer methods, language effects, and structural choices.',
    ar: 'كلمات لإجابات القراءة - لمناقشة أساليب الكاتب وآثار اللغة والخيارات البنيوية.',
    es: 'Palabras para respuestas de lectura: comentar los métodos del escritor, los efectos del lenguaje y las decisiones estructurales.',
  },
  'rev.lang.vocab.cat.evaluate.title': { en: 'Evaluate', ar: 'التقييم', es: 'Evaluar' },
  'rev.lang.vocab.cat.evaluate.desc': {
    en: 'Words for evaluation questions and comparison -- weighing arguments, making judgements, and expressing degree.',
    ar: 'كلمات لأسئلة التقييم والمقارنة - لموازنة الحجج، وإصدار الأحكام، والتعبير عن الدرجة.',
    es: 'Palabras para preguntas de evaluación y comparación: sopesar argumentos, emitir juicios y expresar grado.',
  },

  // ─── Language: Model answers (rev.lang.model.*) ─────────────────────
  'rev.lang.model.breadcrumb': {
    en: 'Model Answers',
    ar: 'نماذج الإجابات',
    es: 'Respuestas modelo',
  },
  'rev.lang.model.back': {
    en: 'Back to Language Skills',
    ar: 'رجوع لمهارات اللغة',
    es: 'Volver a Destrezas de Lengua',
  },
  'rev.lang.model.title': {
    en: 'Model Answers',
    ar: 'نماذج الإجابات',
    es: 'Respuestas modelo',
  },
  'rev.lang.model.subtitle': {
    en: '10 annotated responses across Paper 1 and Paper 2 at Grades 5, 7, and 9',
    ar: '١٠ إجابات مشروحة عبر Paper 1 و Paper 2 بدرجات Grade 5 و 7 و 9',
    es: '10 respuestas anotadas en Paper 1 y Paper 2 con notas Grade 5, 7 y 9',
  },
  'rev.lang.model.boundaries_title': {
    en: 'Understanding the Grade Boundaries',
    ar: 'فهم حدود الدرجات',
    es: 'Entender los límites de nota',
  },
  'rev.lang.model.grade5_label': { en: 'Competent.', ar: 'كفؤ.', es: 'Competente.' },
  'rev.lang.model.grade5_body': {
    en: 'Identifies features and explains effects clearly but analysis stays at surface level. Quotations are used but effects tend to be general.',
    ar: 'يحدّد الأساليب ويشرح الآثار بوضوح، بس التحليل يبقى على السطح. الاقتباسات تُستخدم، بس الآثار غالباً عامة.',
    es: 'Identifica recursos y explica efectos con claridad, pero el análisis se queda en la superficie. Usa citas, aunque los efectos suelen ser genéricos.',
  },
  'rev.lang.model.grade7_label': {
    en: 'Detailed and thoughtful.',
    ar: 'مفصّل ومدروس.',
    es: 'Detallada y reflexiva.',
  },
  'rev.lang.model.grade7_body': {
    en: 'Explores connotations and implications. Begins to track patterns and cumulative effects. Uses terminology precisely, not decoratively.',
    ar: 'يستكشف الإيحاءات والدلالات. يبدأ يتتبّع الأنماط والآثار التراكمية. يستخدم المصطلحات بدقة، مو للزينة.',
    es: 'Explora connotaciones e implicaciones. Empieza a rastrear patrones y efectos acumulativos. Usa la terminología con precisión, no como adorno.',
  },
  'rev.lang.model.grade9_label': {
    en: 'Perceptive and original.',
    ar: 'ثاقب وأصيل.',
    es: 'Perspicaz y original.',
  },
  'rev.lang.model.grade9_body': {
    en: 'Offers genuine critical insight. Analyses at word, sentence, and whole-text level. Sustains a coherent argument with a distinctive voice.',
    ar: 'يقدّم بصيرة نقدية حقيقية. يحلّل على مستوى الكلمة والجملة والنص كامل. يحافظ على حجة متماسكة بصوت مميّز.',
    es: 'Ofrece una visión crítica genuina. Analiza a nivel de palabra, oración y texto completo. Sostiene un argumento coherente con una voz distintiva.',
  },
  'rev.lang.model.how_label': {
    en: 'How to use these model answers:',
    ar: 'شلون تستخدم نماذج الإجابات هذي:',
    es: 'Cómo usar estas respuestas modelo:',
  },
  'rev.lang.model.how_body': {
    en: 'Read the Grade 5 answer first, then the Grade 7 and 9 versions of the same question. Pay attention to the annotations -- they show exactly what pushes a response into a higher band. Try rewriting the Grade 5 answer using the techniques from the Grade 9.',
    ar: 'اقرا إجابة Grade 5 أول، بعدين نسخ Grade 7 و 9 لنفس السؤال. انتبه للشروحات - تبيّن بالضبط شنو اللي يرفع الإجابة لفئة أعلى. حاول تعيد كتابة إجابة Grade 5 باستخدام أساليب Grade 9.',
    es: 'Lee primero la respuesta de Grade 5, luego las versiones de Grade 7 y 9 de la misma pregunta. Fíjate en las anotaciones: muestran exactamente qué eleva una respuesta a una banda superior. Intenta reescribir la respuesta de Grade 5 usando las técnicas de la de Grade 9.',
  },
  'rev.lang.model.paper1': { en: 'Paper 1', ar: 'Paper 1', es: 'Paper 1' },
  'rev.lang.model.paper2': { en: 'Paper 2', ar: 'Paper 2', es: 'Paper 2' },
  'rev.lang.model.paper1_heading': {
    en: 'Creative Reading and Writing',
    ar: 'القراءة والكتابة الإبداعية',
    es: 'Lectura y escritura creativa',
  },
  'rev.lang.model.paper2_heading': {
    en: "Writers' Viewpoints and Transactional Writing",
    ar: 'وجهات نظر الكتّاب والكتابة الوظيفية',
    es: 'Puntos de vista de los escritores y escritura transaccional',
  },
  'rev.lang.model.extract': { en: 'Extract', ar: 'المقطع', es: 'Extracto' },
  'rev.lang.model.student_response': {
    en: 'Student Response',
    ar: 'إجابة الطالب',
    es: 'Respuesta del estudiante',
  },
  'rev.lang.model.examiner_annotations': {
    en: 'Examiner Annotations',
    ar: 'شروحات الممتحن',
    es: 'Anotaciones del examinador',
  },
  'rev.lang.model.what_makes_prefix': {
    en: 'What makes this a Grade',
    ar: 'شنو يخلّي هذي إجابة Grade',
    es: 'Qué hace de esta una respuesta de Grade',
  },
  'rev.lang.model.what_makes_suffix': {
    en: 'response:',
    ar: ':',
    es: ':',
  },
  'rev.lang.model.ann_strength': { en: 'Strength', ar: 'نقطة قوة', es: 'Fortaleza' },
  'rev.lang.model.ann_improvement': { en: 'To improve', ar: 'للتحسين', es: 'A mejorar' },
  'rev.lang.model.ann_upgrade': { en: 'Grade upgrade', ar: 'رفع الدرجة', es: 'Subida de nota' },
}
