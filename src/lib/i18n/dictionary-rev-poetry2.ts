/**
 * Revision poetry HUB / COMPARISON-GUIDE / ESSAY-PLAN chrome that the prior
 * poetry pass skipped (rev.poetry2.*).
 *
 * Covers the bespoke trilingual chrome (back links, badges, hero copy,
 * section headings, card/step titles, buttons/CTAs, aria/title) on the
 * board hub / comparison-guide / essay-plan / cluster-index pages whose
 * exact English wording was NOT already present (verbatim) in
 * dictionary-poetry-hub.ts. Pages whose chrome already matched existing
 * poetry_hub.* keys are wired directly to those keys instead.
 *
 * Strictly chrome only. Poem text, quotations, essay-plan model content,
 * comparison-analysis prose, exam-board factual data and teaching prose
 * stay English in the source files.
 *
 * Conventions (Khaleeji Gulf Arabic):
 *   شنو / أبغى / وايد / الحين / إحنا / روح / شوف / دوّر / سكّر / لحظة
 *   Banned Levantine: شو / بحكي / كيفك / ليش
 *   Brand + technical terms stay Latin in AR and ES: The English Hub, GCSE,
 *   IGCSE, exam boards (AQA / OCR / Edexcel / Eduqas / WJEC / Pearson),
 *   AO1-AO6, PEEL, poem titles + poets, Section A/B, Paper 2, 4EA1.
 *   {tokens} preserved verbatim. No em-dashes / en-dashes in ES.
 *
 * Kept in a separate module to avoid merge churn on dictionary.ts; the
 * orchestrator wires REV_POETRY2_DICTIONARY into the lookup chain.
 */

export const REV_POETRY2_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Edexcel essay-plans ────────────────────────────────────────────
  'rev.poetry2.edexcel.ep.title': {
    en: 'Poetry Comparison Essay Plans',
    ar: 'خطط مقالات مقارنة الشعر',
    es: 'Planes de redacción de comparación de poesía',
  },
  'rev.poetry2.edexcel.ep.lead': {
    en: 'Ten model essay plans covering both the Conflict and Time & Place clusters. Each plan gives you a thesis, three comparative paragraphs with point-evidence-analysis for both poems, and an exam tip.',
    ar: 'عشر خطط مقالات نموذجية تغطّي مجموعتي Conflict و Time & Place. كل خطة تعطيك أطروحة وثلاث فقرات مقارنة بأسلوب point-evidence-analysis للقصيدتين، ونصيحة امتحان.',
    es: 'Diez planes de redacción modelo que cubren los clusters Conflict y Time & Place. Cada plan te ofrece una tesis, tres párrafos comparativos con point-evidence-analysis para ambos poemas y un consejo de examen.',
  },
  'rev.poetry2.edexcel.ep.filter_all': {
    en: 'All plans',
    ar: 'كل الخطط',
    es: 'Todos los planes',
  },

  // ─── Eduqas essay-plans ─────────────────────────────────────────────
  'rev.poetry2.eduqas.ep.badge': {
    en: 'Eduqas Essay Plans',
    ar: 'خطط مقالات Eduqas',
    es: 'Planes de redacción de Eduqas',
  },
  'rev.poetry2.eduqas.ep.title': {
    en: 'Comparison Essay Plans',
    ar: 'خطط مقالات المقارنة',
    es: 'Planes de redacción de comparación',
  },
  'rev.poetry2.eduqas.ep.lead': {
    en: '{count} fully planned comparison essays drawn from the Eduqas GCSE 2025 anthology. Each plan provides a comparative question, a thesis, three comparative paragraphs with evidence, and a conclusion.',
    ar: '{count} مقالات مقارنة مخطّطة بالكامل مأخوذة من مختارات Eduqas GCSE 2025. كل خطة توفّر سؤال مقارنة وأطروحة وثلاث فقرات مقارنة بالأدلّة وخاتمة.',
    es: '{count} redacciones de comparación totalmente planificadas a partir de la antología Eduqas GCSE 2025. Cada plan ofrece una pregunta comparativa, una tesis, tres párrafos comparativos con evidencia y una conclusión.',
  },
  'rev.poetry2.eduqas.ep.how_title': {
    en: 'How to use these essay plans',
    ar: 'شلون تستخدم خطط المقالات هاي',
    es: 'Cómo usar estos planes de redacción',
  },
  'rev.poetry2.eduqas.ep.all_plans': {
    en: 'All {count} Essay Plans',
    ar: 'كل الـ{count} خطط مقالات',
    es: 'Los {count} planes de redacción',
  },

  // ─── Love & Relationships shared back link ──────────────────────────
  'rev.poetry2.lr.back_to_lr': {
    en: 'Back to Love & Relationships',
    ar: 'رجوع لـ Love & Relationships',
    es: 'Volver a Love & Relationships',
  },

  // ─── Love & Relationships comparison-guide ──────────────────────────
  'rev.poetry2.lr.cg.title': {
    en: 'How to Compare Love & Relationships Poems',
    ar: 'شلون تقارن قصائد Love & Relationships',
    es: 'Cómo comparar los poemas de Love & Relationships',
  },
  'rev.poetry2.lr.cg.lead': {
    en: 'A complete guide to AQA Paper 2 Section B. Learn the point-by-point method, build Grade 9 thesis statements, choose strong pairings, and avoid the mistakes that cap otherwise good essays at Grade 6.',
    ar: 'دليل كامل لـ AQA Paper 2 Section B. تعلّم طريقة point-by-point، وابنِ أطروحات Grade 9، واختر أزواج قوية، وتجنّب الأخطاء اللي تحدّ المقالات الجيدة عند Grade 6.',
    es: 'Una guía completa de AQA Paper 2 Section B. Aprende el método point-by-point, construye tesis de Grade 9, elige emparejamientos sólidos y evita los errores que limitan al Grade 6 redacciones que de otro modo serían buenas.',
  },
  'rev.poetry2.lr.cg.what_asks_title': {
    en: 'What the Exam Asks You to Do',
    ar: 'شنو يطلب منك الامتحان',
    es: 'Qué te pide el examen',
  },
  'rev.poetry2.lr.cg.pbp_title': {
    en: 'Point-by-Point vs Block: Why Point-by-Point Wins',
    ar: 'Point-by-Point مقابل Block: وش يخلّي Point-by-Point يفوز',
    es: 'Point-by-Point frente a Block: por qué gana Point-by-Point',
  },
  'rev.poetry2.lr.cg.thesis_title': {
    en: 'Three Levels of Thesis',
    ar: 'ثلاث مستويات للأطروحة',
    es: 'Tres niveles de tesis',
  },
  'rev.poetry2.lr.cg.frames_title': {
    en: 'Three Paragraph Frames',
    ar: 'ثلاث أطر للفقرات',
    es: 'Tres marcos de párrafo',
  },
  'rev.poetry2.lr.cg.pairings_title': {
    en: '10 Strong Pairings to Know',
    ar: '١٠ أزواج قوية لازم تعرفها',
    es: '10 emparejamientos sólidos que debes conocer',
  },
  'rev.poetry2.lr.cg.markscheme_title': {
    en: 'AQA Mark Scheme Decoded',
    ar: 'فك شفرة Mark Scheme لـ AQA',
    es: 'El Mark Scheme de AQA descifrado',
  },
  'rev.poetry2.lr.cg.mistakes_title': {
    en: 'Common Mistakes That Cap Your Grade',
    ar: 'أخطاء شائعة تحدّ درجتك',
    es: 'Errores comunes que limitan tu nota',
  },
  'rev.poetry2.lr.cg.checklist_title': {
    en: '5-Minute Planning Checklist',
    ar: 'قائمة فحص التخطيط في ٥ دقايق',
    es: 'Lista de planificación en 5 minutos',
  },
  'rev.poetry2.lr.cg.language_title': {
    en: 'Comparative Language to Use',
    ar: 'لغة المقارنة اللي تستخدمها',
    es: 'Lenguaje comparativo para usar',
  },
  'rev.poetry2.lr.cg.cta_title': {
    en: 'See these techniques in action',
    ar: 'شوف هاي الأساليب وهي تشتغل',
    es: 'Mira estas técnicas en acción',
  },

  // ─── Love & Relationships essay-plans ───────────────────────────────
  'rev.poetry2.lr.ep.title': {
    en: 'Essay Plans: Love & Relationships',
    ar: 'خطط المقالات: Love & Relationships',
    es: 'Planes de redacción: Love & Relationships',
  },
  'rev.poetry2.lr.ep.lead': {
    en: '10 fully worked comparison essay plans for AQA Paper 2 Section B. Each plan includes a Grade 9 thesis, three point-by-point comparative paragraphs with quotations, and a conclusion. Use these as models for structuring your own responses.',
    ar: '١٠ خطط مقالات مقارنة محلولة بالكامل لـ AQA Paper 2 Section B. كل خطة فيها أطروحة Grade 9 وثلاث فقرات مقارنة point-by-point بالاقتباسات وخاتمة. استخدمها كنماذج لبناء إجاباتك.',
    es: '10 planes de redacción de comparación totalmente desarrollados para AQA Paper 2 Section B. Cada plan incluye una tesis de Grade 9, tres párrafos comparativos point-by-point con citas y una conclusión. Úsalos como modelos para estructurar tus propias respuestas.',
  },
  'rev.poetry2.lr.ep.copyright_title': {
    en: 'Key quotations only -- read the full poems',
    ar: 'اقتباسات أساسية بس: اقرا القصائد كاملة',
    es: 'Solo citas clave: lee los poemas completos',
  },
  'rev.poetry2.lr.ep.how_title': {
    en: 'How to Use These Plans',
    ar: 'شلون تستخدم الخطط هاي',
    es: 'Cómo usar estos planes',
  },
  'rev.poetry2.lr.ep.tip_structure_title': {
    en: 'Study the structure, not the words',
    ar: 'ذاكر البنية، مو الكلمات',
    es: 'Estudia la estructura, no las palabras',
  },
  'rev.poetry2.lr.ep.tip_adapt_title': {
    en: 'Adapt for the exam question',
    ar: 'كيّفها مع سؤال الامتحان',
    es: 'Adapta a la pregunta del examen',
  },
  'rev.poetry2.lr.ep.tip_memorise_title': {
    en: 'Do not memorise essays',
    ar: 'لا تحفظ المقالات',
    es: 'No memorices redacciones',
  },
  'rev.poetry2.lr.ep.tip_every_para_title': {
    en: 'Every paragraph compares',
    ar: 'كل فقرة تقارن',
    es: 'Cada párrafo compara',
  },
  'rev.poetry2.lr.ep.cta_title': {
    en: 'Ready to practise comparing poems?',
    ar: 'مستعد تتدرّب على مقارنة القصائد؟',
    es: '¿Listo para practicar la comparación de poemas?',
  },

  // ─── AQA Power & Conflict essay-plans ───────────────────────────────
  'rev.poetry2.pc.ep.back': {
    en: 'Back to Power & Conflict',
    ar: 'رجوع لـ Power & Conflict',
    es: 'Volver a Power & Conflict',
  },
  'rev.poetry2.pc.ep.badge_spec': {
    en: 'AQA GCSE English Literature',
    ar: 'AQA GCSE English Literature',
    es: 'AQA GCSE English Literature',
  },
  'rev.poetry2.pc.ep.badge_aqa_only': {
    en: 'AQA Only',
    ar: 'AQA بس',
    es: 'Solo AQA',
  },
  'rev.poetry2.pc.ep.title': {
    en: 'Essay Plans',
    ar: 'خطط المقالات',
    es: 'Planes de redacción',
  },
  'rev.poetry2.pc.ep.lead': {
    en: 'Ten ready-made essay plans for the most common AQA Power & Conflict comparison questions. Each plan includes a full introduction, three PEEL comparison paragraphs, and a conclusion, with Grade 5 and Grade 9 approaches so you can see exactly what the examiner wants at each level.',
    ar: 'عشر خطط مقالات جاهزة لأكثر أسئلة المقارنة شيوعاً في AQA Power & Conflict. كل خطة فيها مقدمة كاملة وثلاث فقرات مقارنة بأسلوب PEEL وخاتمة، مع طرق Grade 5 و Grade 9 عشان تشوف بالضبط شنو يبي المصحّح في كل مستوى.',
    es: 'Diez planes de redacción listos para las preguntas de comparación más comunes de AQA Power & Conflict. Cada plan incluye una introducción completa, tres párrafos de comparación PEEL y una conclusión, con enfoques de Grade 5 y Grade 9 para que veas exactamente qué quiere el examinador en cada nivel.',
  },
  'rev.poetry2.pc.ep.how_title': {
    en: 'How to use these plans',
    ar: 'شلون تستخدم الخطط هاي',
    es: 'Cómo usar estos planes',
  },
  'rev.poetry2.pc.ep.step1_title': {
    en: '1. Read the question',
    ar: '١. اقرا السؤال',
    es: '1. Lee la pregunta',
  },
  'rev.poetry2.pc.ep.step2_title': {
    en: '2. Study the PEEL structure',
    ar: '٢. ذاكر بنية PEEL',
    es: '2. Estudia la estructura PEEL',
  },
  'rev.poetry2.pc.ep.step3_title': {
    en: '3. Practise writing your own',
    ar: '٣. تدرّب على كتابة مالك',
    es: '3. Practica escribiendo los tuyos',
  },
  'rev.poetry2.pc.ep.quick_jump': {
    en: 'Quick jump',
    ar: 'قفزة سريعة',
    es: 'Salto rápido',
  },
  'rev.poetry2.pc.ep.cta_title': {
    en: 'Ready to write your own comparisons?',
    ar: 'مستعد تكتب مقارناتك؟',
    es: '¿Listo para escribir tus propias comparaciones?',
  },
  'rev.poetry2.pc.ep.cg_soon': {
    en: 'Comparison guide (coming soon)',
    ar: 'دليل المقارنة (قريباً)',
    es: 'Guía de comparación (próximamente)',
  },
  'rev.poetry2.pc.ep.cg_soon_title': {
    en: 'Comparison guide - coming soon',
    ar: 'دليل المقارنة: قريباً',
    es: 'Guía de comparación: próximamente',
  },
  'rev.poetry2.pc.ep.themes_soon': {
    en: 'Explore themes (coming soon)',
    ar: 'استكشف المواضيع (قريباً)',
    es: 'Explora los temas (próximamente)',
  },
  'rev.poetry2.pc.ep.themes_soon_title': {
    en: 'Themes - coming soon',
    ar: 'المواضيع: قريباً',
    es: 'Temas: próximamente',
  },

  // ─── Pearson IGCSE poetry hub ───────────────────────────────────────
  'rev.poetry2.pearson.back': {
    en: 'Back to Poetry Hub',
    ar: 'رجوع لـ Hub الشعر',
    es: 'Volver al hub de poesía',
  },
  'rev.poetry2.pearson.badge_section_b': {
    en: 'Section B',
    ar: 'Section B',
    es: 'Section B',
  },
  'rev.poetry2.pearson.poems': {
    en: 'poems',
    ar: 'قصائد',
    es: 'poemas',
  },
  'rev.poetry2.pearson.hero_title': {
    en: 'Pearson IGCSE Poetry Anthology',
    ar: 'مختارات شعر Pearson IGCSE',
    es: 'Antología de poesía Pearson IGCSE',
  },
  'rev.poetry2.pearson.hero_lead': {
    en: 'All 15 prescribed poems for the Pearson Edexcel International GCSE English Language A (4EA1) Section B anthology. Full study guides are in production. Each poem currently has a registry entry, themes and a one-paragraph teaser; line-by-line analysis and exam-style practice questions are being added.',
    ar: 'كل الـ١٥ قصيدة المقرّرة لمختارات Pearson Edexcel International GCSE English Language A (4EA1) Section B. أدلّة المذاكرة الكاملة قيد الإعداد. كل قصيدة عندها الحين مدخل في السجل ومواضيع وتعريف بفقرة وحدة؛ التحليل سطر سطر وأسئلة التدريب بأسلوب الامتحان قيد الإضافة.',
    es: 'Los 15 poemas prescritos para la antología Pearson Edexcel International GCSE English Language A (4EA1) Section B. Las guías de estudio completas están en producción. Cada poema tiene actualmente una entrada en el registro, temas y una presentación de un párrafo; se están añadiendo el análisis verso por verso y las preguntas de práctica tipo examen.',
  },
  'rev.poetry2.pearson.version_notice_aria': {
    en: 'Anthology version notice',
    ar: 'تنبيه نسخة المختارات',
    es: 'Aviso sobre la versión de la antología',
  },
  'rev.poetry2.pearson.all_poems': {
    en: 'All 15 anthology poems',
    ar: 'كل الـ١٥ قصيدة في المختارات',
    es: 'Los 15 poemas de la antología',
  },
  'rev.poetry2.pearson.open_notes': {
    en: 'Open study notes',
    ar: 'افتح ملاحظات المذاكرة',
    es: 'Abrir apuntes de estudio',
  },
}
