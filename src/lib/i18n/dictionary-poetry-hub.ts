/**
 * Poetry-hub i18n dictionary entries (poetry_hub.*).
 *
 * Covers the cluster hub + guide pages for OCR, Edexcel, Eduqas,
 * the AQA Love & Relationships and AQA Worlds and Lives anthologies.
 *
 * Kept in a separate module to avoid merge churn on the main
 * dictionary.ts. Imported and merged into the main DICTIONARY
 * at module init.
 *
 * Conventions:
 *   - Brand + board names (OCR, Edexcel, AQA, Eduqas, WJEC) stay Latin.
 *   - Poet names + poem titles stay Latin (standard Gulf practice).
 *   - Khaleeji forms preferred (شنو/شلون/أبغى/ذاكر/وايد/إحنا/شوف/دوّر).
 *   - Levantine forms banned (شو/كيفك/بحكي/ليش).
 */

import type { Dictionary } from './dictionary'

export const POETRY_HUB_DICTIONARY: Dictionary = {
  // ─── Poetry hub: OCR cluster (Towards a World Unknown) ──────────────
  'poetry_hub.ocr.back_to_poetry': {
    en: 'Back to Poetry',
    ar: 'رجوع للشعر',
    es: 'Volver a Poesía',
  },
  'poetry_hub.ocr.back_to_anthology': {
    en: 'Back to OCR Anthology',
    ar: 'رجوع لمختارات OCR',
    es: 'Volver a la antología de OCR',
  },
  'poetry_hub.ocr.badge_spec': {
    en: 'OCR GCSE English Literature J352',
    ar: 'OCR GCSE English Literature J352',
    es: 'OCR GCSE English Literature J352',
  },
  'poetry_hub.ocr.badge_anthology': {
    en: 'OCR Towards a World Unknown',
    ar: 'OCR Towards a World Unknown',
    es: 'OCR Towards a World Unknown',
  },
  'poetry_hub.ocr.hero_title': {
    en: 'Towards a World Unknown',
    ar: 'Towards a World Unknown',
    es: 'Towards a World Unknown',
  },
  'poetry_hub.ocr.hero_lead': {
    en: 'The OCR poetry anthology contains 60 poems split across 4 themed clusters of 15 poems each. For your exam, you only need to study one cluster - the one chosen by your school or teacher.',
    ar: 'مختارات الشعر OCR فيها ٦٠ قصيدة مقسّمة على ٤ مجموعات موضوعية، كل وحدة فيها ١٥ قصيدة. للامتحان، بس تذاكر مجموعة وحدة - اللي اختارتها مدرستك ولا معلمك.',
    es: 'La antología de poesía de OCR contiene 60 poemas repartidos en 4 clusters temáticos de 15 poemas cada uno. Para tu examen, solo necesitas estudiar un cluster: el que elija tu centro o tu profesor.',
  },
  'poetry_hub.ocr.which_cluster': {
    en: 'Which cluster do I study?',
    ar: 'أي مجموعة أذاكر؟',
    es: '¿Qué cluster estudio?',
  },
  'poetry_hub.ocr.which_cluster_body': {
    en: 'Check with your teacher to find out which of the 4 clusters your class is studying. Most schools choose one cluster at the start of Year 10 and stick with it through to the exam. You will be assessed on poems from that cluster only.',
    ar: 'اسأل المعلم عشان تعرف أي مجموعة من الأربعة فصلك يذاكرها. أغلب المدارس تختار مجموعة وحدة بداية Year 10 وتكمّل عليها للامتحان. الامتحان بيكون من قصائد المجموعة هاي بس.',
    es: 'Consulta con tu profesor para saber cuál de los 4 clusters estudia tu clase. La mayoría de los centros eligen un cluster al inicio del Year 10 y se mantienen con él hasta el examen. Solo se te evaluará sobre los poemas de ese cluster.',
  },
  'poetry_hub.ocr.four_clusters': {
    en: 'The Four Clusters',
    ar: 'المجموعات الأربعة',
    es: 'Los cuatro clusters',
  },
  'poetry_hub.ocr.poems_count': { en: 'poems', ar: 'قصائد', es: 'poemas' },
  'poetry_hub.ocr.study': { en: 'Study', ar: 'ذاكر', es: 'Estudiar' },
  'poetry_hub.ocr.about_pages_title': {
    en: 'About these study pages',
    ar: 'حول صفحات المذاكرة هاي',
    es: 'Acerca de estas páginas de estudio',
  },
  'poetry_hub.ocr.about_pages_body': {
    en: 'For older, public-domain poems we provide full interactive study pages with annotations, context, and quotation analysis. For poems still in copyright, we provide context, themes, and key quotation analysis only - you will need a copy of the OCR anthology (Towards a World Unknown, ISBN 9781398384408) to read the full text.',
    ar: 'القصائد الأقدم اللي بالمجال العام نوفّر صفحات مذاكرة كاملة وتفاعلية فيها الشروحات والسياق وتحليل الاقتباسات. القصائد اللي محفوظة حقوقها نوفّر السياق والمواضيع وتحليل الاقتباسات الأساسية بس - بتحتاج نسخة من مختارات OCR (Towards a World Unknown، ISBN 9781398384408) عشان تقرا النص كامل.',
    es: 'Para los poemas más antiguos y de dominio público ofrecemos páginas de estudio interactivas completas con anotaciones, contexto y análisis de citas. Para los poemas que aún están bajo derechos de autor, ofrecemos solo contexto, temas y análisis de citas clave: necesitarás un ejemplar de la antología de OCR (Towards a World Unknown, ISBN 9781398384408) para leer el texto completo.',
  },
  'poetry_hub.ocr.different_board_title': {
    en: 'Studying a different exam board?',
    ar: 'تذاكر بورد امتحان ثاني؟',
    es: '¿Estudias una junta examinadora distinta?',
  },
  'poetry_hub.ocr.different_board_body': {
    en: 'Head back to the Poetry hub to switch boards or explore unseen poetry techniques and general poetry skills that apply to every exam board.',
    ar: 'ارجع لـ Hub الشعر عشان تغيّر البورد أو تستكشف أساليب الشعر غير المرئي ومهارات الشعر العامة اللي تنطبق على كل البوردات.',
    es: 'Vuelve al hub de Poesía para cambiar de junta o explorar técnicas de poesía desconocida y destrezas generales de poesía que se aplican a todas las juntas examinadoras.',
  },
  'poetry_hub.ocr.back_to_hub': {
    en: 'Back to Poetry Hub',
    ar: 'رجوع لـ Hub الشعر',
    es: 'Volver al hub de Poesía',
  },
  'poetry_hub.ocr.cluster.lr.title': {
    en: 'Love and Relationships',
    ar: 'الحب والعلاقات',
    es: 'Love and Relationships',
  },
  'poetry_hub.ocr.cluster.lr.desc': {
    en: 'Romantic, familial and complex relationships from Byron and Wordsworth to Carol Ann Duffy and John Cooper Clarke.',
    ar: 'علاقات رومانسية وعائلية ومعقّدة، من Byron و Wordsworth إلى Carol Ann Duffy و John Cooper Clarke.',
    es: 'Relaciones románticas, familiares y complejas, desde Byron y Wordsworth hasta Carol Ann Duffy y John Cooper Clarke.',
  },
  'poetry_hub.ocr.cluster.conflict.title': { en: 'Conflict', ar: 'الصراع', es: 'Conflict' },
  'poetry_hub.ocr.cluster.conflict.desc': {
    en: 'War, prejudice and personal struggle, from Tennyson and Owen to Agard, Zephaniah and Imtiaz Dharker.',
    ar: 'الحرب والتحيّز والصراع الشخصي، من Tennyson و Owen إلى Agard و Zephaniah و Imtiaz Dharker.',
    es: 'Guerra, prejuicio y lucha personal, desde Tennyson y Owen hasta Agard, Zephaniah e Imtiaz Dharker.',
  },
  'poetry_hub.ocr.cluster.ya.title': {
    en: 'Youth and Age',
    ar: 'الشباب والشيخوخة',
    es: 'Youth and Age',
  },
  'poetry_hub.ocr.cluster.ya.desc': {
    en: 'Childhood, growing up, parenthood and mortality, from Yeats and Keats to Helen Dunmore and Carol Rumens.',
    ar: 'الطفولة والبلوغ والأبوّة والموت، من Yeats و Keats إلى Helen Dunmore و Carol Rumens.',
    es: 'Infancia, crecimiento, paternidad y mortalidad, desde Yeats y Keats hasta Helen Dunmore y Carol Rumens.',
  },
  'poetry_hub.ocr.cluster.pnw.title': {
    en: 'Power and the Natural World',
    ar: 'السلطة والعالم الطبيعي',
    es: 'Power and the Natural World',
  },
  'poetry_hub.ocr.cluster.pnw.desc': {
    en: 'Nature, environment and human power, from Shelley and Blake to Ted Hughes, Seamus Heaney and Achebe.',
    ar: 'الطبيعة والبيئة وقوة الإنسان، من Shelley و Blake إلى Ted Hughes و Seamus Heaney و Achebe.',
    es: 'Naturaleza, medio ambiente y poder humano, desde Shelley y Blake hasta Ted Hughes, Seamus Heaney y Achebe.',
  },
  'poetry_hub.ocr.lr.hero_lead': {
    en: "15 poems exploring romantic, familial and complex relationships across more than two centuries. From Byron's celebration of beauty to John Cooper Clarke's punk devotion.",
    ar: '١٥ قصيدة تستكشف العلاقات الرومانسية والعائلية والمعقّدة عبر أكثر من قرنين. من احتفاء Byron بالجمال إلى تفاني John Cooper Clarke بأسلوب الـ punk.',
    es: '15 poemas que exploran relaciones románticas, familiares y complejas a lo largo de más de dos siglos. Desde la celebración de la belleza de Byron hasta la devoción punk de John Cooper Clarke.',
  },
  'poetry_hub.ocr.conflict.hero_lead': {
    en: '15 poems exploring war, prejudice, identity and personal struggle. From Tennyson and Owen to Agard, Zephaniah and Imtiaz Dharker.',
    ar: '١٥ قصيدة تستكشف الحرب والتحيّز والهوية والصراع الشخصي. من Tennyson و Owen إلى Agard و Zephaniah و Imtiaz Dharker.',
    es: '15 poemas que exploran la guerra, el prejuicio, la identidad y la lucha personal. Desde Tennyson y Owen hasta Agard, Zephaniah e Imtiaz Dharker.',
  },
  'poetry_hub.ocr.ya.hero_lead': {
    en: '15 poems exploring childhood, growing up, parenthood and mortality. From Yeats and Keats to Helen Dunmore and Carol Rumens.',
    ar: '١٥ قصيدة تستكشف الطفولة والبلوغ والأبوّة والموت. من Yeats و Keats إلى Helen Dunmore و Carol Rumens.',
    es: '15 poemas que exploran la infancia, el crecimiento, la paternidad y la mortalidad. Desde Yeats y Keats hasta Helen Dunmore y Carol Rumens.',
  },
  'poetry_hub.ocr.pnw.hero_lead': {
    en: '15 poems exploring nature, environment and human power. From Shelley and Blake to Ted Hughes, Seamus Heaney and Chinua Achebe.',
    ar: '١٥ قصيدة تستكشف الطبيعة والبيئة وقوة الإنسان. من Shelley و Blake إلى Ted Hughes و Seamus Heaney و Chinua Achebe.',
    es: '15 poemas que exploran la naturaleza, el medio ambiente y el poder humano. Desde Shelley y Blake hasta Ted Hughes, Seamus Heaney y Chinua Achebe.',
  },
  'poetry_hub.ocr.all_15': { en: 'All 15 Poems', ar: 'كل الـ١٥ قصيدة', es: 'Los 15 poemas' },
  'poetry_hub.ocr.full_study': {
    en: 'Full study page',
    ar: 'صفحة مذاكرة كاملة',
    es: 'Página de estudio completa',
  },
  'poetry_hub.ocr.quotes_only': {
    en: 'Key quotations only',
    ar: 'اقتباسات أساسية بس',
    es: 'Solo citas clave',
  },
  'poetry_hub.ocr.why_locked': {
    en: 'Why are some poems locked?',
    ar: 'ليش بعض القصائد مقفولة؟',
    es: '¿Por qué algunos poemas están bloqueados?',
  },
  'poetry_hub.ocr.why_locked_body': {
    en: 'Older poems are public domain so we provide full annotated study pages. More recent poems are still in copyright - for those we offer context, themes and key quotation analysis only. You will need a copy of the OCR Towards a World Unknown anthology to read the full text.',
    ar: 'القصائد الأقدم بالمجال العام ولهذا نوفّر صفحات مذاكرة كاملة مع شروحات. القصائد الأحدث محفوظة حقوقها - ولها نوفّر السياق والمواضيع وتحليل الاقتباسات الأساسية بس. بتحتاج نسخة من مختارات OCR Towards a World Unknown عشان تقرا النص كامل.',
    es: 'Los poemas más antiguos son de dominio público, por lo que ofrecemos páginas de estudio completas y anotadas. Los poemas más recientes siguen bajo derechos de autor: para esos ofrecemos solo contexto, temas y análisis de citas clave. Necesitarás un ejemplar de la antología OCR Towards a World Unknown para leer el texto completo.',
  },
  'poetry_hub.ocr.rights_notice_label': {
    en: 'Rights notice.',
    ar: 'تنبيه الحقوق.',
    es: 'Aviso de derechos.',
  },
  'poetry_hub.ocr.prelude_version_title': {
    en: 'Version note: The Prelude (1799 two-part edition)',
    ar: 'ملاحظة النسخة: The Prelude (نسخة ١٧٩٩ المؤلّفة من جزأين)',
    es: 'Nota sobre la versión: The Prelude (edición de 1799 en dos partes)',
  },
  'poetry_hub.ocr.prelude_version_body': {
    en: "OCR prescribes the 1799 two-part Prelude, drafted in Wordsworth's lifetime but unpublished until 1973. The boat-stealing episode appears in Part First, lines 81-129. AQA prescribes the 1850 posthumous Prelude (edited by Wordsworth's widow Mary). The wording is materially different between the two editions - never cross-quote between versions. If you are revising for OCR, use only the 1799 text.",
    ar: 'OCR يقرّر نسخة The Prelude ١٧٩٩ المؤلّفة من جزأين، اللي كتبها Wordsworth في حياته بس ما انتشرت إلا عام ١٩٧٣. مشهد سرقة القارب يطلع في Part First، الأسطر ٨١-١٢٩. AQA يقرّر نسخة The Prelude ١٨٥٠ اللي انتشرت بعد موته (حرّرتها أرملته Mary). الكلام بين النسختين مختلف جوهرياً - لا تنقل اقتباسات بين النسختين أبداً. لو تراجع لـ OCR، استخدم نص ١٧٩٩ بس.',
    es: 'OCR prescribe The Prelude de 1799 en dos partes, redactado en vida de Wordsworth pero inédito hasta 1973. El episodio del robo de la barca aparece en Part First, versos 81-129. AQA prescribe The Prelude póstumo de 1850 (editado por la viuda de Wordsworth, Mary). La redacción difiere notablemente entre ambas ediciones: nunca cites cruzando versiones. Si te preparas para OCR, usa solo el texto de 1799.',
  },
  'poetry_hub.ocr.explore_other_clusters': {
    en: 'Explore other clusters',
    ar: 'استكشف المجموعات الثانية',
    es: 'Explora otros clusters',
  },

  // OCR comparison-guide
  'poetry_hub.ocr.cg.title': {
    en: 'How to Write a Poetry Comparison',
    ar: 'شلون تكتب مقارنة شعرية',
    es: 'Cómo escribir una comparación de poesía',
  },
  'poetry_hub.ocr.cg.lead': {
    en: 'A step-by-step guide to writing a top-band OCR poetry comparison essay. Covers structure, technique, and the most common mistakes students make.',
    ar: 'دليل خطوة خطوة لكتابة مقال مقارنة شعرية بأعلى درجة لـ OCR. يغطّي البنية والأسلوب وأكثر الأخطاء الشائعة عند الطلاب.',
    es: 'Una guía paso a paso para escribir una redacción de comparación de poesía de OCR de banda alta. Cubre la estructura, la técnica y los errores más comunes que cometen los estudiantes.',
  },
  'poetry_hub.ocr.cg.what_asks_title': {
    en: 'What the OCR exam asks you to do',
    ar: 'شنو يطلب منك امتحان OCR',
    es: 'Qué te pide hacer el examen de OCR',
  },
  'poetry_hub.ocr.cg.time_label': { en: 'Time', ar: 'الوقت', es: 'Tiempo' },
  'poetry_hub.ocr.cg.time_value': {
    en: 'Approximately 40 minutes',
    ar: 'تقريباً ٤٠ دقيقة',
    es: 'Aproximadamente 40 minutos',
  },
  'poetry_hub.ocr.cg.marks_label': { en: 'Marks', ar: 'الدرجات', es: 'Puntos' },
  'poetry_hub.ocr.cg.marks_value': {
    en: 'Up to 24 marks for this section',
    ar: 'لين ٢٤ درجة لهذا القسم',
    es: 'Hasta 24 puntos para esta sección',
  },
  'poetry_hub.ocr.cg.assess_label': { en: 'Assessment', ar: 'التقييم', es: 'Evaluación' },
  'poetry_hub.ocr.cg.assess_value': {
    en: 'AO1, AO2, AO3 are all tested',
    ar: 'AO1 و AO2 و AO3 كلها تتقيّم',
    es: 'Se evalúan AO1, AO2 y AO3',
  },
  'poetry_hub.ocr.cg.aos_title': {
    en: 'The Assessment Objectives',
    ar: 'أهداف التقييم',
    es: 'Los objetivos de evaluación',
  },
  'poetry_hub.ocr.cg.structure_title': {
    en: 'Recommended Essay Structure',
    ar: 'بنية المقال الموصى بها',
    es: 'Estructura de redacción recomendada',
  },
  'poetry_hub.ocr.cg.connectives_title': {
    en: 'Comparison Connectives',
    ar: 'روابط المقارنة',
    es: 'Conectores de comparación',
  },
  'poetry_hub.ocr.cg.connectives_sim': {
    en: 'For similarities',
    ar: 'للتشابهات',
    es: 'Para similitudes',
  },
  'poetry_hub.ocr.cg.connectives_diff': {
    en: 'For differences',
    ar: 'للاختلافات',
    es: 'Para diferencias',
  },
  'poetry_hub.ocr.cg.quoting_title': {
    en: 'How to Analyse a Quotation',
    ar: 'شلون تحلّل اقتباس',
    es: 'Cómo analizar una cita',
  },
  'poetry_hub.ocr.cg.choosing_title': {
    en: 'Choosing Your Comparison Poem',
    ar: 'اختيار قصيدة المقارنة',
    es: 'Elegir tu poema de comparación',
  },
  'poetry_hub.ocr.cg.do': { en: 'Do', ar: 'سوِّ', es: 'Haz' },
  'poetry_hub.ocr.cg.avoid': { en: 'Avoid', ar: 'تجنّب', es: 'Evita' },
  'poetry_hub.ocr.cg.mistakes_title': {
    en: 'Common Mistakes to Avoid',
    ar: 'أخطاء شائعة تجنّبها',
    es: 'Errores comunes que evitar',
  },
  'poetry_hub.ocr.cg.checklist_title': {
    en: 'Top-Band Checklist',
    ar: 'قائمة فحص الدرجة العالية',
    es: 'Lista de verificación de banda alta',
  },
  'poetry_hub.ocr.cg.quotes_in_exam_title': {
    en: 'About quotations in your exam',
    ar: 'حول الاقتباسات في امتحانك',
    es: 'Sobre las citas en tu examen',
  },
  'poetry_hub.ocr.cg.ready_practise': {
    en: 'Ready to practise?',
    ar: 'مستعد للتدريب؟',
    es: '¿Listo para practicar?',
  },
  'poetry_hub.ocr.cg.essay_plans_cta': {
    en: 'Essay Plans',
    ar: 'خطط المقالات',
    es: 'Planes de redacción',
  },

  // OCR essay-plans
  'poetry_hub.ocr.ep.title': {
    en: 'Poetry Comparison Essay Plans',
    ar: 'خطط مقالات مقارنة الشعر',
    es: 'Planes de redacción de comparación de poesía',
  },
  'poetry_hub.ocr.ep.lead': {
    en: '10 ready-made essay plans covering all 4 OCR clusters. Each plan pairs two poems, provides a three-point structure with side-by-side analysis, and includes an exam tip.',
    ar: '١٠ خطط مقالات جاهزة تغطّي كل المجموعات الأربعة لـ OCR. كل خطة تجمع قصيدتين، وتوفّر بنية بثلاث نقاط مع تحليل جنب جنب، وتتضمّن نصيحة للامتحان.',
    es: '10 planes de redacción listos que cubren los 4 clusters de OCR. Cada plan empareja dos poemas, ofrece una estructura de tres puntos con análisis en paralelo e incluye un consejo de examen.',
  },
  'poetry_hub.ocr.ep.how_to_title': {
    en: 'How to use these plans',
    ar: 'شلون تستخدم الخطط هاي',
    es: 'Cómo usar estos planes',
  },
  'poetry_hub.ocr.ep.all_plans': {
    en: 'All 10 Essay Plans',
    ar: 'كل الـ١٠ خطط مقالات',
    es: 'Los 10 planes de redacción',
  },
  'poetry_hub.ocr.ep.quotes_note_title': {
    en: 'A note on quotations',
    ar: 'ملاحظة عن الاقتباسات',
    es: 'Una nota sobre las citas',
  },
  'poetry_hub.ocr.ep.explore': {
    en: 'Explore the anthology',
    ar: 'استكشف المختارات',
    es: 'Explora la antología',
  },
  'poetry_hub.ocr.ep.thematic_focus': {
    en: 'Thematic focus',
    ar: 'التركيز الموضوعي',
    es: 'Enfoque temático',
  },
  'poetry_hub.ocr.ep.intro_label': { en: 'Introduction', ar: 'المقدّمة', es: 'Introducción' },
  'poetry_hub.ocr.ep.point_label': { en: 'Point', ar: 'نقطة', es: 'Punto' },
  'poetry_hub.ocr.ep.conclusion_label': { en: 'Conclusion', ar: 'الخاتمة', es: 'Conclusión' },
  'poetry_hub.ocr.ep.exam_tip': { en: 'Exam tip', ar: 'نصيحة امتحان', es: 'Consejo de examen' },

  // OCR themes
  'poetry_hub.ocr.themes.title': {
    en: 'Themes Across All Clusters',
    ar: 'المواضيع عبر كل المجموعات',
    es: 'Temas en todos los clusters',
  },
  'poetry_hub.ocr.themes.lead': {
    en: 'Every major theme in the OCR anthology mapped to the poems that explore it. Use this to find strong comparison pairings and to see how the same idea appears across different clusters.',
    ar: 'كل موضوع رئيسي في مختارات OCR مربوط بالقصائد اللي تستكشفه. استخدمها تلقى أزواج مقارنة قوية وتشوف شلون نفس الفكرة تطلع في مجموعات مختلفة.',
    es: 'Cada tema principal de la antología de OCR vinculado a los poemas que lo exploran. Úsalo para encontrar buenos emparejamientos de comparación y para ver cómo aparece la misma idea en distintos clusters.',
  },
  'poetry_hub.ocr.themes.how_title': {
    en: 'How to use this page',
    ar: 'شلون تستخدم الصفحة هاي',
    es: 'Cómo usar esta página',
  },
  'poetry_hub.ocr.themes.poem_singular': { en: 'poem', ar: 'قصيدة', es: 'poema' },
  'poetry_hub.ocr.themes.poem_plural': { en: 'poems', ar: 'قصائد', es: 'poemas' },
  'poetry_hub.ocr.themes.notes_title': {
    en: 'About these study notes',
    ar: 'حول ملاحظات المذاكرة هاي',
    es: 'Acerca de estos apuntes de estudio',
  },
  'poetry_hub.ocr.themes.explore_more': {
    en: 'Explore more',
    ar: 'استكشف أكثر',
    es: 'Explora más',
  },
  'poetry_hub.ocr.themes.comparison_guide_cta': {
    en: 'Comparison Guide',
    ar: 'دليل المقارنة',
    es: 'Guía de comparación',
  },

  // ─── Poetry hub: Edexcel cluster ───────────────────────────────────
  'poetry_hub.edexcel.back_to_poetry': {
    en: 'Back to Poetry',
    ar: 'رجوع للشعر',
    es: 'Volver a Poesía',
  },
  'poetry_hub.edexcel.back_to_anthology': {
    en: 'Back to Edexcel Poetry',
    ar: 'رجوع لشعر Edexcel',
    es: 'Volver a la poesía de Edexcel',
  },
  'poetry_hub.edexcel.badge_spec': {
    en: 'Pearson Edexcel GCSE English Literature (1ET0)',
    ar: 'Pearson Edexcel GCSE English Literature (1ET0)',
    es: 'Pearson Edexcel GCSE English Literature (1ET0)',
  },
  'poetry_hub.edexcel.badge_spec_short': {
    en: 'Pearson Edexcel GCSE English Literature',
    ar: 'Pearson Edexcel GCSE English Literature',
    es: 'Pearson Edexcel GCSE English Literature',
  },
  'poetry_hub.edexcel.hero_title': {
    en: 'Edexcel Poetry Anthology',
    ar: 'مختارات شعر Edexcel',
    es: 'Antología de poesía de Edexcel',
  },
  'poetry_hub.edexcel.hero_lead': {
    en: 'The Edexcel anthology contains two themed collections of fifteen poems each. You only study one cluster - either Conflict or Time and Place. Pick yours below and start with annotated study pages, key quotations and comparison practice.',
    ar: 'مختارات Edexcel فيها مجموعتين موضوعيتين، كل وحدة فيها خمستعش قصيدة. تذاكر مجموعة وحدة بس - يا Conflict يا Time and Place. اختر اللي مالك تحت وابدأ بصفحات مذاكرة مع شروحات واقتباسات أساسية وتدريب على المقارنة.',
    es: 'La antología de Edexcel contiene dos colecciones temáticas de quince poemas cada una. Solo estudias un cluster: Conflict o Time and Place. Elige el tuyo abajo y empieza con páginas de estudio anotadas, citas clave y práctica de comparación.',
  },
  'poetry_hub.edexcel.info_note': {
    en: 'Edexcel poetry is assessed in Paper 2, Section A. You will answer one comparison question on a named anthology poem and one of your own choice from the same cluster, plus an unseen poetry question.',
    ar: 'شعر Edexcel يتقيّم في Paper 2, Section A. بتجاوب على سؤال مقارنة وحد على قصيدة معيّنة من المختارات مع قصيدة من اختيارك من نفس المجموعة، زائد سؤال شعر غير مرئي.',
    es: 'La poesía de Edexcel se evalúa en Paper 2, Section A. Responderás a una pregunta de comparación sobre un poema concreto de la antología y otro de tu elección del mismo cluster, además de una pregunta de poesía desconocida.',
  },
  'poetry_hub.edexcel.choose_cluster': {
    en: 'Choose your cluster',
    ar: 'اختر مجموعتك',
    es: 'Elige tu cluster',
  },
  'poetry_hub.edexcel.fifteen_poems': { en: '15 poems', ar: '١٥ قصيدة', es: '15 poemas' },
  'poetry_hub.edexcel.cluster.conflict.title': { en: 'Conflict', ar: 'الصراع', es: 'Conflict' },
  'poetry_hub.edexcel.cluster.conflict.desc': {
    en: 'Poems exploring the many faces of conflict - war and bloodshed, personal and political battles, family tensions, prejudice, and inner emotional turmoil. Includes Blake, Owen, Byron, Tennyson, Hardy, Rossetti, Agard and Zephaniah.',
    ar: 'قصائد تستكشف وجوه الصراع المختلفة - الحرب والدم، المعارك الشخصية والسياسية، توتّرات العائلة، التحيّز، والاضطراب العاطفي الداخلي. تشمل Blake و Owen و Byron و Tennyson و Hardy و Rossetti و Agard و Zephaniah.',
    es: 'Poemas que exploran las múltiples caras del conflicto: guerra y derramamiento de sangre, batallas personales y políticas, tensiones familiares, prejuicio y agitación emocional interior. Incluye a Blake, Owen, Byron, Tennyson, Hardy, Rossetti, Agard y Zephaniah.',
  },
  'poetry_hub.edexcel.cluster.conflict.cta': {
    en: 'Study the Conflict cluster',
    ar: 'ذاكر مجموعة Conflict',
    es: 'Estudiar el cluster Conflict',
  },
  'poetry_hub.edexcel.cluster.tp.title': {
    en: 'Time and Place',
    ar: 'الزمان والمكان',
    es: 'Time and Place',
  },
  'poetry_hub.edexcel.cluster.tp.desc': {
    en: 'Poems rooted in landscape, memory and journeys - from Keats and Wordsworth to Dickinson, Hardy, Fanthorpe and Grace Nichols. The cluster explores how place shapes identity and how time alters our relationship with where we have lived.',
    ar: 'قصائد جذورها في الطبيعة والذكرى والرحلات - من Keats و Wordsworth إلى Dickinson و Hardy و Fanthorpe و Grace Nichols. المجموعة تستكشف شلون المكان يشكّل الهوية وشلون الزمن يغيّر علاقتنا بالمكان اللي عشنا فيه.',
    es: 'Poemas arraigados en el paisaje, la memoria y los viajes, desde Keats y Wordsworth hasta Dickinson, Hardy, Fanthorpe y Grace Nichols. El cluster explora cómo el lugar moldea la identidad y cómo el tiempo altera nuestra relación con los lugares donde hemos vivido.',
  },
  'poetry_hub.edexcel.cluster.tp.cta': {
    en: 'Study the Time and Place cluster',
    ar: 'ذاكر مجموعة Time and Place',
    es: 'Estudiar el cluster Time and Place',
  },
  'poetry_hub.edexcel.diff_aqa_title': {
    en: 'How is Edexcel different from AQA?',
    ar: 'شلون Edexcel يختلف عن AQA؟',
    es: '¿En qué se diferencia Edexcel de AQA?',
  },
  'poetry_hub.edexcel.diff_aqa_b1': {
    en: 'Edexcel students study one cluster (Conflict or Time and Place), not both.',
    ar: 'طلاب Edexcel يذاكرون مجموعة وحدة (Conflict أو Time and Place)، مو الثنتين.',
    es: 'Los estudiantes de Edexcel estudian un cluster (Conflict o Time and Place), no ambos.',
  },
  'poetry_hub.edexcel.diff_aqa_b2': {
    en: 'The exam asks you to compare a named poem with one of your choice from the same cluster.',
    ar: 'الامتحان يطلب منك تقارن قصيدة معيّنة مع قصيدة من اختيارك من نفس المجموعة.',
    es: 'El examen te pide comparar un poema concreto con otro de tu elección del mismo cluster.',
  },
  'poetry_hub.edexcel.diff_aqa_b3': {
    en: 'There is an unseen poetry question in the same paper, just like AQA.',
    ar: 'في سؤال شعر غير مرئي في نفس الورقة، مثل AQA.',
    es: 'Hay una pregunta de poesía desconocida en la misma prueba, igual que en AQA.',
  },
  'poetry_hub.edexcel.diff_aqa_b4': {
    en: 'Some poets overlap with the AQA anthology (Blake, Wordsworth, Owen, Tennyson) but the specific poems are different.',
    ar: 'كم شاعر يتداخلون مع مختارات AQA (Blake و Wordsworth و Owen و Tennyson) بس القصائد المحدّدة مختلفة.',
    es: 'Algunos poetas coinciden con la antología de AQA (Blake, Wordsworth, Owen, Tennyson), pero los poemas concretos son distintos.',
  },
  'poetry_hub.edexcel.conflict.hero_title': {
    en: 'Conflict Cluster',
    ar: 'مجموعة Conflict',
    es: 'Cluster Conflict',
  },
  'poetry_hub.edexcel.conflict.hero_lead': {
    en: 'All 15 poems in the Edexcel Conflict anthology. Conflict is explored in many forms - war and violence, prejudice and racism, family tension, internal struggle and the politics of class.',
    ar: 'كل الـ١٥ قصيدة في مختارات Conflict لـ Edexcel. الصراع يتم استكشافه بأشكال متعدّدة - الحرب والعنف، التحيّز والعنصرية، توتّر العائلة، الصراع الداخلي، وسياسات الطبقة.',
    es: 'Los 15 poemas de la antología Conflict de Edexcel. El conflicto se explora de muchas formas: guerra y violencia, prejuicio y racismo, tensión familiar, lucha interior y la política de clase.',
  },
  'poetry_hub.edexcel.tp.hero_title': {
    en: 'Time and Place Cluster',
    ar: 'مجموعة Time and Place',
    es: 'Cluster Time and Place',
  },
  'poetry_hub.edexcel.tp.hero_lead': {
    en: 'All 15 poems in the Edexcel Time and Place anthology. From Romantic celebrations of nature to modern poems about migration, identity and belonging, the cluster explores how places shape us and how time changes the way we see them.',
    ar: 'كل الـ١٥ قصيدة في مختارات Time and Place لـ Edexcel. من احتفاءات الرومانسية بالطبيعة إلى قصائد حديثة عن الهجرة والهوية والانتماء، المجموعة تستكشف شلون الأماكن تشكّلنا وشلون الزمن يغيّر طريقتنا في رؤيتها.',
    es: 'Los 15 poemas de la antología Time and Place de Edexcel. Desde las celebraciones románticas de la naturaleza hasta poemas modernos sobre la migración, la identidad y la pertenencia, el cluster explora cómo los lugares nos moldean y cómo el tiempo cambia la forma en que los vemos.',
  },
  'poetry_hub.edexcel.study_pages': {
    en: 'Study pages',
    ar: 'صفحات المذاكرة',
    es: 'Páginas de estudio',
  },
  'poetry_hub.edexcel.other_in_cluster': {
    en: 'Other poems in the cluster',
    ar: 'قصائد ثانية في المجموعة',
    es: 'Otros poemas del cluster',
  },
  'poetry_hub.edexcel.other_in_cluster_lead': {
    en: 'Full study pages for these poems are in development. Many are still in copyright, so we will provide key quotations, analysis and comparison notes rather than the full text.',
    ar: 'صفحات المذاكرة الكاملة لهاي القصائد قيد التطوير. كثير منها لا تزال محفوظة حقوقها، ولها بنوفّر اقتباسات أساسية وتحليل وملاحظات مقارنة بدل النص كامل.',
    es: 'Las páginas de estudio completas de estos poemas están en desarrollo. Muchos siguen bajo derechos de autor, así que ofreceremos citas clave, análisis y notas de comparación en lugar del texto completo.',
  },
  'poetry_hub.edexcel.quotes_only': { en: 'Quotes only', ar: 'اقتباسات بس', es: 'Solo citas' },
  'poetry_hub.edexcel.study_this_poem': {
    en: 'Study this poem',
    ar: 'ذاكر هاي القصيدة',
    es: 'Estudiar este poema',
  },
  'poetry_hub.edexcel.comparison_tip': {
    en: 'Comparison tip',
    ar: 'نصيحة مقارنة',
    es: 'Consejo de comparación',
  },
  'poetry_hub.edexcel.rights_notice_label': {
    en: 'Rights notice.',
    ar: 'تنبيه الحقوق.',
    es: 'Aviso de derechos.',
  },
  'poetry_hub.edexcel.ep.title': {
    en: 'Edexcel Poetry Comparison Essay Plans',
    ar: 'خطط مقالات مقارنة شعر Edexcel',
    es: 'Planes de redacción de comparación de poesía de Edexcel',
  },
  'poetry_hub.edexcel.ep.lead': {
    en: 'Ten ready-made comparison plans across both Edexcel clusters. Each plan opens to reveal a thesis, three full paragraphs with evidence and analysis, a conclusion and a tailored exam tip.',
    ar: 'عشر خطط مقارنة جاهزة عبر المجموعتين لـ Edexcel. كل خطة تفتح لتكشف عن أطروحة وثلاث فقرات كاملة بالأدلّة والتحليل وخاتمة ونصيحة امتحان موجّهة.',
    es: 'Diez planes de comparación listos para los dos clusters de Edexcel. Cada plan se despliega para mostrar una tesis, tres párrafos completos con evidencia y análisis, una conclusión y un consejo de examen adaptado.',
  },
  'poetry_hub.edexcel.ep.how_title': {
    en: 'How to use these plans',
    ar: 'شلون تستخدم الخطط هاي',
    es: 'Cómo usar estos planes',
  },
  'poetry_hub.edexcel.ep.all_plans': {
    en: 'All Essay Plans',
    ar: 'كل خطط المقالات',
    es: 'Todos los planes de redacción',
  },

  // ─── Poetry hub: Eduqas cluster ────────────────────────────────────
  'poetry_hub.eduqas.back_to_poetry': {
    en: 'Back to Poetry',
    ar: 'رجوع للشعر',
    es: 'Volver a Poesía',
  },
  'poetry_hub.eduqas.badge_anthology': {
    en: 'Eduqas GCSE 2025 Anthology',
    ar: 'Eduqas GCSE 2025 Anthology',
    es: 'Eduqas GCSE 2025 Anthology',
  },
  'poetry_hub.eduqas.hero_title': {
    en: 'WJEC Eduqas Poetry',
    ar: 'شعر WJEC Eduqas',
    es: 'Poesía de WJEC Eduqas',
  },
  'poetry_hub.eduqas.rights_notice_label': {
    en: 'Rights notice:',
    ar: 'تنبيه الحقوق:',
    es: 'Aviso de derechos:',
  },
  'poetry_hub.eduqas.comparison_heading': {
    en: 'Comparison Question Practice',
    ar: 'تدريب على سؤال المقارنة',
    es: 'Práctica de la pregunta de comparación',
  },
  'poetry_hub.eduqas.comparison_how_title': {
    en: 'How the Eduqas comparison question works',
    ar: 'شلون يشتغل سؤال المقارنة لـ Eduqas',
    es: 'Cómo funciona la pregunta de comparación de Eduqas',
  },
  'poetry_hub.eduqas.comparison_how_body': {
    en: 'Component 1 Section B will give you one named poem and ask you to compare it with another poem from the anthology of your choice. Choose your second poem carefully - it must share a clear theme or contrast.',
    ar: 'Component 1 Section B بيعطيك قصيدة معيّنة ويطلب منك تقارنها بقصيدة ثانية من المختارات من اختيارك. اختر القصيدة الثانية بعناية - لازم يكون فيها موضوع واضح مشترك أو تباين.',
    es: 'El Component 1 Section B te dará un poema concreto y te pedirá que lo compares con otro poema de la antología de tu elección. Elige tu segundo poema con cuidado: debe compartir un tema claro o un contraste.',
  },
  'poetry_hub.eduqas.comparison_tip_intro': {
    en: 'Strong pairings to practise. Each pair shares a clear thematic link, letting you draw both similarities and contrasts.',
    ar: 'أزواج قوية للتدرّب. كل زوج يشترك في رابط موضوعي واضح، يخلّيك تستخرج التشابهات والتباينات.',
    es: 'Emparejamientos sólidos para practicar. Cada pareja comparte un vínculo temático claro, lo que te permite trazar tanto similitudes como contrastes.',
  },
  'poetry_hub.eduqas.love_betrayal_title': {
    en: 'Love & betrayal pair',
    ar: 'زوج الحب والخيانة',
    es: 'Pareja de amor y traición',
  },
  'poetry_hub.eduqas.love_betrayal_desc': {
    en: 'A Victorian comparison anchor',
    ar: 'مرتكز مقارنة فيكتوري',
    es: 'Un ancla de comparación victoriana',
  },
  'poetry_hub.eduqas.love_betrayal_body': {
    en: 'Sonnet 29 (Barrett Browning) and Cousin Kate (Rossetti) are both Victorian, both from female speakers, and both about absent or lost lovers - a strong cluster pairing for the comparison question.',
    ar: 'Sonnet 29 (Barrett Browning) و Cousin Kate (Rossetti) كلاهما فيكتوري، كلاهما من متحدّثات نساء، وكلاهما عن حبيب غائب أو مفقود - زوج قوي في المجموعة لسؤال المقارنة.',
    es: 'Sonnet 29 (Barrett Browning) y Cousin Kate (Rossetti) son ambos victorianos, ambos de voces femeninas y ambos sobre amantes ausentes o perdidos: una pareja sólida del cluster para la pregunta de comparación.',
  },
  'poetry_hub.eduqas.war_identity_title': {
    en: 'War & identity pair',
    ar: 'زوج الحرب والهوية',
    es: 'Pareja de guerra e identidad',
  },
  'poetry_hub.eduqas.war_identity_desc': {
    en: 'Two wars, two erasures',
    ar: 'حربين، محوين',
    es: 'Dos guerras, dos borraduras',
  },
  'poetry_hub.eduqas.war_identity_body': {
    en: "Hardy's Drummer Hodge (Second Boer War, 1899) and Owen's Disabled (WWI) both interrogate what war takes from young men. Strong contrast in form, voice, and the kind of loss each poet exposes.",
    ar: 'Drummer Hodge لـ Hardy (حرب البوير الثانية، ١٨٩٩) و Disabled لـ Owen (الحرب العالمية الأولى) كلاهما يستجوب شنو الحرب تأخذه من الشباب. تباين قوي في الشكل والصوت ونوع الخسارة اللي يكشفه كل شاعر.',
    es: 'Drummer Hodge de Hardy (Segunda Guerra de los Bóeres, 1899) y Disabled de Owen (Primera Guerra Mundial) interrogan ambos qué le arrebata la guerra a los jóvenes. Fuerte contraste en la forma, la voz y el tipo de pérdida que expone cada poeta.',
  },
  'poetry_hub.eduqas.boer_note': {
    en: 'Note: Drummer Hodge is a Boer War poem (1899), not WWI.',
    ar: 'ملاحظة: Drummer Hodge قصيدة حرب البوير (١٨٩٩)، مو الحرب العالمية الأولى.',
    es: 'Nota: Drummer Hodge es un poema de la Guerra de los Bóeres (1899), no de la Primera Guerra Mundial.',
  },
  'poetry_hub.eduqas.copyright_only': {
    en: 'In copyright - study notes only (short fair-dealing extracts)',
    ar: 'حقوق محفوظة - ملاحظات مذاكرة بس (مقاطع قصيرة بحدود الاستخدام العادل)',
    es: 'Bajo derechos de autor: solo apuntes de estudio (breves extractos de uso legítimo)',
  },
  'poetry_hub.eduqas.pd_soon': {
    en: 'Public domain - study page coming soon',
    ar: 'مجال عام - صفحة المذاكرة قريباً',
    es: 'Dominio público: página de estudio próximamente',
  },
  'poetry_hub.eduqas.in_copyright_aria': {
    en: 'In copyright - study notes only',
    ar: 'حقوق محفوظة - ملاحظات مذاكرة بس',
    es: 'Bajo derechos de autor: solo apuntes de estudio',
  },
  'poetry_hub.eduqas.theme.childhood_nature': {
    en: 'Childhood & Nature',
    ar: 'الطفولة والطبيعة',
    es: 'Infancia y naturaleza',
  },
  'poetry_hub.eduqas.theme.love': {
    en: 'Love & Relationships',
    ar: 'الحب والعلاقات',
    es: 'Amor y relaciones',
  },
  'poetry_hub.eduqas.theme.war': {
    en: 'War & Conflict',
    ar: 'الحرب والصراع',
    es: 'Guerra y conflicto',
  },
  'poetry_hub.eduqas.theme.identity': {
    en: 'Identity & Voice',
    ar: 'الهوية والصوت',
    es: 'Identidad y voz',
  },
  'poetry_hub.eduqas.cb_pick': {
    en: 'Pick a poem with strong thematic links',
    ar: 'اختر قصيدة لها روابط موضوعية قوية',
    es: 'Elige un poema con vínculos temáticos sólidos',
  },
  'poetry_hub.eduqas.cb_plan': {
    en: 'Plan three points of comparison',
    ar: 'خطط ثلاث نقاط مقارنة',
    es: 'Planifica tres puntos de comparación',
  },
  'poetry_hub.eduqas.cb_connectives': {
    en: 'Use connectives: similarly, in contrast, whereas',
    ar: 'استخدم الروابط: بنفس الطريقة، بالمقابل، بينما',
    es: 'Usa conectores: del mismo modo, por el contrario, mientras que',
  },
  'poetry_hub.eduqas.cb_quote': {
    en: 'Quote from both poems in every paragraph',
    ar: 'اقتبس من القصيدتين في كل فقرة',
    es: 'Cita de ambos poemas en cada párrafo',
  },
  'poetry_hub.eduqas.cb_form': {
    en: 'Comment on form and structure, not just language',
    ar: 'علّق على الشكل والبنية، مو بس اللغة',
    es: 'Comenta la forma y la estructura, no solo el lenguaje',
  },
  'poetry_hub.eduqas.cb_context': {
    en: "Link analysis to context and the poet's intention",
    ar: 'اربط التحليل بالسياق ونيّة الشاعر',
    es: 'Vincula el análisis al contexto y a la intención del poeta',
  },
  'poetry_hub.eduqas.ep.title': {
    en: 'Eduqas Poetry Comparison Essay Plans',
    ar: 'خطط مقالات مقارنة شعر Eduqas',
    es: 'Planes de redacción de comparación de poesía de Eduqas',
  },
  'poetry_hub.eduqas.ep.lead': {
    en: 'Ready-made comparison plans across the Eduqas 2025 anthology. Each plan provides a thesis, three full paragraphs with evidence and analysis, a conclusion and an exam tip.',
    ar: 'خطط مقارنة جاهزة عبر مختارات Eduqas ٢٠٢٥. كل خطة توفّر أطروحة وثلاث فقرات كاملة بالأدلّة والتحليل وخاتمة ونصيحة امتحان.',
    es: 'Planes de comparación listos para la antología de Eduqas 2025. Cada plan ofrece una tesis, tres párrafos completos con evidencia y análisis, una conclusión y un consejo de examen.',
  },
  'poetry_hub.eduqas.ep.how_title': {
    en: 'How to use these plans',
    ar: 'شلون تستخدم الخطط هاي',
    es: 'Cómo usar estos planes',
  },
  'poetry_hub.eduqas.ep.all_plans': {
    en: 'All Essay Plans',
    ar: 'كل خطط المقالات',
    es: 'Todos los planes de redacción',
  },

  // ─── Poetry hub: AQA Love & Relationships ──────────────────────────
  'poetry_hub.lr.back_to_poetry': { en: 'Back to Poetry', ar: 'رجوع للشعر', es: 'Volver a Poesía' },
  'poetry_hub.lr.back_to_hub': {
    en: 'Back to Poetry Hub',
    ar: 'رجوع لـ Hub الشعر',
    es: 'Volver al hub de Poesía',
  },
  'poetry_hub.lr.badge_spec': {
    en: 'AQA GCSE English Literature',
    ar: 'AQA GCSE English Literature',
    es: 'AQA GCSE English Literature',
  },
  'poetry_hub.lr.badge_aqa_only': { en: 'AQA Only', ar: 'AQA بس', es: 'Solo AQA' },
  'poetry_hub.lr.hero_title': {
    en: 'Love & Relationships Poetry',
    ar: 'شعر الحب والعلاقات',
    es: 'Poesía de Love & Relationships',
  },
  'poetry_hub.lr.hero_lead': {
    en: 'Master all 15 poems in the AQA Love and Relationships anthology. Each study page includes annotations, key quotations, context, and comparison notes to help you write top-grade essays.',
    ar: 'أتقن كل الـ١٥ قصيدة في مختارات AQA Love and Relationships. كل صفحة مذاكرة فيها شروحات واقتباسات أساسية وسياق وملاحظات مقارنة عشان تساعدك تكتب مقالات بأعلى درجة.',
    es: 'Domina los 15 poemas de la antología AQA Love and Relationships. Cada página de estudio incluye anotaciones, citas clave, contexto y notas de comparación para ayudarte a escribir redacciones de la máxima nota.',
  },
  'poetry_hub.lr.rights_notice_label': {
    en: 'Rights notice:',
    ar: 'تنبيه الحقوق:',
    es: 'Aviso de derechos:',
  },
  'poetry_hub.lr.studied': { en: 'studied', ar: 'مذاكرة', es: 'estudiados' },
  'poetry_hub.lr.of': { en: 'of', ar: 'من', es: 'de' },
  'poetry_hub.lr.poems_studied': {
    en: 'poems studied',
    ar: 'قصيدة مذاكرة',
    es: 'poemas estudiados',
  },
  'poetry_hub.lr.study_this_poem': {
    en: 'Study this poem',
    ar: 'ذاكر هاي القصيدة',
    es: 'Estudiar este poema',
  },
  'poetry_hub.lr.theme.romantic': {
    en: 'Romantic Love',
    ar: 'الحب الرومانسي',
    es: 'Amor romántico',
  },
  'poetry_hub.lr.theme.family': { en: 'Family Love', ar: 'حب العائلة', es: 'Amor familiar' },
  'poetry_hub.lr.theme.distance_loss': {
    en: 'Distance & Loss',
    ar: 'البُعد والفقد',
    es: 'Distancia y pérdida',
  },
  'poetry_hub.lr.theme.identity_possession': {
    en: 'Identity & Possession',
    ar: 'الهوية والامتلاك',
    es: 'Identidad y posesión',
  },
  'poetry_hub.lr.study_tips_title': {
    en: 'Study Tips: Comparing Love & Relationships',
    ar: 'نصائح المذاكرة: مقارنة الحب والعلاقات',
    es: 'Consejos de estudio: comparar Love & Relationships',
  },
  'poetry_hub.lr.tip_pair_title': {
    en: 'Pair contrasting perspectives',
    ar: 'اجمع وجهات نظر متباينة',
    es: 'Empareja perspectivas contrastantes',
  },
  'poetry_hub.lr.tip_speaker_title': {
    en: 'Examine the speaker, not the poet',
    ar: 'افحص المتحدّث، مو الشاعر',
    es: 'Examina al hablante, no al poeta',
  },
  'poetry_hub.lr.tip_methods_title': {
    en: 'Compare methods, not just content',
    ar: 'قارن الأساليب، مو بس المحتوى',
    es: 'Compara métodos, no solo contenido',
  },
  'poetry_hub.lr.tip_quotes_title': {
    en: 'Learn 2-3 key quotes per poem',
    ar: 'احفظ ٢-٣ اقتباسات أساسية لكل قصيدة',
    es: 'Aprende 2-3 citas clave por poema',
  },
  'poetry_hub.lr.ready_explore_title': {
    en: 'Ready to explore more poetry?',
    ar: 'مستعد تستكشف شعر أكثر؟',
    es: '¿Listo para explorar más poesía?',
  },
  'poetry_hub.lr.cg.title': {
    en: 'Comparison Guide: Love & Relationships',
    ar: 'دليل المقارنة: الحب والعلاقات',
    es: 'Guía de comparación: Love & Relationships',
  },
  'poetry_hub.lr.cg.lead': {
    en: 'A practical guide to writing top-grade comparison essays on the AQA Love and Relationships cluster. Frames, theses, pairings and worked examples.',
    ar: 'دليل عملي لكتابة مقالات مقارنة بأعلى درجة على مجموعة AQA Love and Relationships. أطر وأطروحات وأزواج وأمثلة محلولة.',
    es: 'Una guía práctica para escribir redacciones de comparación de la máxima nota sobre el cluster AQA Love and Relationships. Marcos, tesis, emparejamientos y ejemplos resueltos.',
  },
  'poetry_hub.lr.cg.frames_title': {
    en: 'Paragraph Frames',
    ar: 'أطر الفقرات',
    es: 'Marcos de párrafo',
  },
  'poetry_hub.lr.cg.thesis_title': {
    en: 'Thesis Levels',
    ar: 'مستويات الأطروحة',
    es: 'Niveles de tesis',
  },
  'poetry_hub.lr.cg.pairings_title': {
    en: 'Strong Pairings',
    ar: 'أزواج قوية',
    es: 'Emparejamientos sólidos',
  },
  'poetry_hub.lr.ep.title': {
    en: 'Love & Relationships Essay Plans',
    ar: 'خطط مقالات الحب والعلاقات',
    es: 'Planes de redacción de Love & Relationships',
  },
  'poetry_hub.lr.ep.lead': {
    en: 'Ten ready-made comparison essay plans for the AQA Love and Relationships cluster. Each plan provides a thesis, paragraphs with evidence and analysis, a conclusion and an exam tip.',
    ar: 'عشر خطط مقالات مقارنة جاهزة لمجموعة AQA Love and Relationships. كل خطة توفّر أطروحة وفقرات بالأدلّة والتحليل وخاتمة ونصيحة امتحان.',
    es: 'Diez planes de redacción de comparación listos para el cluster AQA Love and Relationships. Cada plan ofrece una tesis, párrafos con evidencia y análisis, una conclusión y un consejo de examen.',
  },
  'poetry_hub.lr.ep.all_plans': {
    en: 'All Essay Plans',
    ar: 'كل خطط المقالات',
    es: 'Todos los planes de redacción',
  },

  // ─── Poetry hub: AQA Worlds and Lives ──────────────────────────────
  'poetry_hub.wl.back_to_poetry': { en: 'Back to Poetry', ar: 'رجوع للشعر', es: 'Volver a Poesía' },
  'poetry_hub.wl.back_to_hub': {
    en: 'Back to poetry hub',
    ar: 'رجوع لـ Hub الشعر',
    es: 'Volver al hub de poesía',
  },
  'poetry_hub.wl.badge_spec': {
    en: 'AQA GCSE English Literature (8702)',
    ar: 'AQA GCSE English Literature (8702)',
    es: 'AQA GCSE English Literature (8702)',
  },
  'poetry_hub.wl.badge_anthology': {
    en: 'Worlds and Lives',
    ar: 'Worlds and Lives',
    es: 'Worlds and Lives',
  },
  'poetry_hub.wl.hero_title': {
    en: 'AQA Worlds and Lives Anthology',
    ar: 'مختارات AQA Worlds and Lives',
    es: 'Antología AQA Worlds and Lives',
  },
  'poetry_hub.wl.rights_notice_label': {
    en: 'Rights notice.',
    ar: 'تنبيه الحقوق.',
    es: 'Aviso de derechos.',
  },
  'poetry_hub.wl.soon_title': {
    en: 'Detailed study pages coming soon',
    ar: 'صفحات مذاكرة تفصيلية قريباً',
    es: 'Páginas de estudio detalladas próximamente',
  },
  'poetry_hub.wl.soon_cta_pc': {
    en: 'Power and Conflict (full)',
    ar: 'Power and Conflict (كامل)',
    es: 'Power and Conflict (completo)',
  },
  'poetry_hub.wl.soon_cta_lr': {
    en: 'Love and Relationships (full)',
    ar: 'Love and Relationships (كامل)',
    es: 'Love and Relationships (completo)',
  },
  'poetry_hub.wl.all_poems_heading': {
    en: 'All 15 Worlds and Lives poems',
    ar: 'كل الـ١٥ قصيدة لـ Worlds and Lives',
    es: 'Los 15 poemas de Worlds and Lives',
  },
  'poetry_hub.wl.soon_badge': { en: 'Soon', ar: 'قريباً', es: 'Próximamente' },
  'poetry_hub.wl.themes_heading': {
    en: 'Key themes across the anthology',
    ar: 'المواضيع الأساسية عبر المختارات',
    es: 'Temas clave en toda la antología',
  },
  'poetry_hub.wl.theme_identity_title': {
    en: 'Identity and heritage',
    ar: 'الهوية والإرث',
    es: 'Identidad y herencia',
  },
  'poetry_hub.wl.theme_place_title': {
    en: 'Place and landscape',
    ar: 'المكان والطبيعة',
    es: 'Lugar y paisaje',
  },
  'poetry_hub.wl.theme_power_title': {
    en: 'Power and politics',
    ar: 'السلطة والسياسة',
    es: 'Poder y política',
  },
  'poetry_hub.wl.theme_belonging_title': {
    en: 'Belonging and migration',
    ar: 'الانتماء والهجرة',
    es: 'Pertenencia y migración',
  },
  'poetry_hub.wl.priority_title': {
    en: 'Want a poem prioritised?',
    ar: 'تبي قصيدة بأولوية؟',
    es: '¿Quieres priorizar un poema?',
  },
}
