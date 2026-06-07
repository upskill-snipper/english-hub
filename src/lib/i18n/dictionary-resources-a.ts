/**
 * Khaleeji translations - `resources` namespace, Bucket A wave 4
 * (real-EN subset, source: dictionary-placeholder-fix-may15.ts)
 *
 * Public SEO resource/revision pages rendered in AR mode. The EN here
 * is byte-identical to dictionary-placeholder-fix-may15.ts (the
 * hand-written quality strings); the `ar` is genuine Gulf register in
 * the voice of src/lib/eal/curriculum.ts. Exam terminology (AO1/AO2/
 * AO3, GCSE/IGCSE, board names AQA/Edexcel/Cambridge, SM-2) is kept
 * verbatim because students must recognise it in the exam.
 *
 * 99 keys. Wired into the lookup chain from dictionary.ts (do NOT
 * edit dictionary.ts from this file - wiring is handled separately).
 */

export const RESOURCES_A_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ─── Resources hub (/resources) ──────────────────────────────────
  'resources.hub.eyebrow': {
    en: 'Revision library',
    ar: 'مكتبة المراجعة',
    es: 'Biblioteca de repaso',
  },
  'resources.hub.title': {
    en: 'Every revision resource, one shelf',
    ar: 'كل مصادر المراجعة في رفّ واحد',
    es: 'Todos los recursos de repaso, en un solo lugar',
  },
  'resources.hub.subtitle': {
    en: 'Study guides, model answers, technique cheatsheets, vocabulary lists and exam-paper walkthroughs - sorted by category.',
    ar: 'أدلة مراجعة، إجابات نموذجية، أوراق تلخيص للتقنيات، قوائم مفردات، وشرح خطوة بخطوة لأوراق الامتحان - كلها مرتّبة حسب التصنيف.',
    es: 'Guías de estudio, respuestas modelo, chuletas de técnicas, listas de vocabulario y análisis paso a paso de exámenes, ordenados por categoría.',
  },
  'resources.hub.stat.study_guides': {
    en: 'Study guides',
    ar: 'أدلة مراجعة',
    es: 'Guías de estudio',
  },
  'resources.hub.stat.categories': { en: 'Categories', ar: 'تصنيفات', es: 'Categorías' },
  'resources.hub.popular.title': {
    en: 'Most-used resources',
    ar: 'أكثر المصادر استخداماً',
    es: 'Recursos más utilizados',
  },
  'resources.hub.popular.subtitle': {
    en: 'What students and teachers reach for first.',
    ar: 'الشي اللي يرجع له الطلاب والمدرّسين أول.',
    es: 'Lo que estudiantes y profesores buscan primero.',
  },
  'resources.hub.quick.revision_notes.title': {
    en: 'Revision notes',
    ar: 'ملاحظات المراجعة',
    es: 'Apuntes de repaso',
  },
  'resources.hub.quick.revision_notes.desc': {
    en: 'Concise summaries of plot, character, theme and context - written for revision, not first reading.',
    ar: 'تلخيصات مركّزة للأحداث والشخصيات والثيمات والسياق - مكتوبة عشان المراجعة، مو عشان أول قراءة.',
    es: 'Resúmenes concisos de la trama, los personajes, el tema y el contexto, escritos para el repaso, no para una primera lectura.',
  },
  'resources.hub.quick.writing_skills.title': {
    en: 'Writing skills',
    ar: 'مهارات الكتابة',
    es: 'Destrezas de escritura',
  },
  'resources.hub.quick.writing_skills.desc': {
    en: 'Structure templates, sentence-level technique guides and openings/closings for narrative and transactional writing.',
    ar: 'قوالب للهيكلة، وأدلة تقنيات على مستوى الجملة، وبدايات ونهايات للكتابة السردية والوظيفية.',
    es: 'Plantillas de estructura, guías de técnica a nivel de oración y aperturas/cierres para la escritura narrativa y funcional.',
  },
  'resources.hub.quick.poetry.title': { en: 'Poetry', ar: 'الشعر', es: 'Poesía' },
  'resources.hub.quick.poetry.desc': {
    en: 'Anthology poem analyses, unseen poetry frameworks and comparison stems for every major board.',
    ar: 'تحليلات لقصائد المجموعة المقررة، وأطر للشعر غير المرئي، وعبارات للمقارنة لكل المجالس الكبيرة.',
    es: 'Análisis de poemas de la antología, marcos para poesía desconocida y conectores de comparación para todas las juntas principales.',
  },
  'resources.hub.quick.techniques.title': { en: 'Techniques', ar: 'التقنيات', es: 'Técnicas' },
  'resources.hub.quick.techniques.desc': {
    en: 'Named techniques (metaphor, sibilance, dramatic irony, etc.) with examples and effect-language for AO2.',
    ar: 'تقنيات مسمّاة (الاستعارة، التكرار الصفيري، السخرية الدرامية، وغيرها) مع أمثلة ولغة الأثر لـ AO2.',
    es: 'Técnicas nombradas (metáfora, sibilancia, ironía dramática, etc.) con ejemplos y lenguaje de efecto para AO2.',
  },
  'resources.hub.quick.model_answers.title': {
    en: 'Model answers',
    ar: 'إجابات نموذجية',
    es: 'Respuestas modelo',
  },
  'resources.hub.quick.model_answers.desc': {
    en: 'Grade-7-to-9 exemplar essays with marker commentary explaining the band judgement.',
    ar: 'مقالات نموذجية من درجة 7 إلى 9 مع تعليق المصحّح اللي يشرح ليش استحقّت هالنطاق من الدرجات.',
    es: 'Redacciones ejemplares de notas 7 a 9 con comentarios del corrector que explican el criterio de la banda.',
  },
  'resources.hub.quick.study_tools.title': {
    en: 'Study tools',
    ar: 'أدوات المراجعة',
    es: 'Herramientas de estudio',
  },
  'resources.hub.quick.study_tools.desc': {
    en: 'Revision planners, spaced-repetition flashcards, quote tests and exam-paper checklists.',
    ar: 'مخطّطات مراجعة، بطاقات تذكّر بالتكرار المتباعد، اختبارات اقتباسات، وقوائم تحقّق لأوراق الامتحان.',
    es: 'Planificadores de repaso, tarjetas de repetición espaciada, pruebas de citas y listas de verificación de exámenes.',
  },
  'resources.hub.all.title': {
    en: 'All resource categories',
    ar: 'كل تصنيفات المصادر',
    es: 'Todas las categorías de recursos',
  },
  'resources.hub.all.subtitle': {
    en: "Sorted by what you're revising for.",
    ar: 'مرتّبة حسب الشي اللي تراجع له.',
    es: 'Ordenadas según lo que estés repasando.',
  },
  'resources.hub.cat.english_literature': {
    en: 'English Literature',
    ar: 'الأدب الإنجليزي',
    es: 'Literatura inglesa',
  },
  'resources.hub.cat.english_language': {
    en: 'English Language',
    ar: 'اللغة الإنجليزية',
    es: 'Lengua inglesa',
  },
  'resources.hub.cat.revision_notes': {
    en: 'Revision notes',
    ar: 'ملاحظات المراجعة',
    es: 'Apuntes de repaso',
  },
  'resources.hub.cat.poetry': { en: 'Poetry', ar: 'الشعر', es: 'Poesía' },
  'resources.hub.cat.writing_skills': {
    en: 'Writing skills',
    ar: 'مهارات الكتابة',
    es: 'Destrezas de escritura',
  },
  'resources.hub.cat.techniques': { en: 'Techniques', ar: 'التقنيات', es: 'Técnicas' },
  'resources.hub.cat.model_answers': {
    en: 'Model answers',
    ar: 'إجابات نموذجية',
    es: 'Respuestas modelo',
  },
  'resources.hub.cat.exam_technique': {
    en: 'Exam technique',
    ar: 'تقنية الامتحان',
    es: 'Técnica de examen',
  },
  'resources.hub.cat.grade_targets': {
    en: 'Grade-by-grade targets',
    ar: 'أهداف لكل درجة على حدة',
    es: 'Objetivos nota por nota',
  },
  'resources.hub.cat.study_tools': {
    en: 'Study tools',
    ar: 'أدوات المراجعة',
    es: 'Herramientas de estudio',
  },
  'resources.hub.cat.vocabulary': { en: 'Vocabulary', ar: 'المفردات', es: 'Vocabulario' },
  'resources.hub.cat.glossary': { en: 'Glossary', ar: 'قائمة المصطلحات', es: 'Glosario' },
  'resources.hub.cat.context': {
    en: 'Context & background',
    ar: 'السياق والخلفية',
    es: 'Contexto y antecedentes',
  },
  'resources.hub.cat.themes': { en: 'Themes', ar: 'الثيمات', es: 'Temas' },
  'resources.hub.cat.authors': { en: 'Authors', ar: 'المؤلّفون', es: 'Autores' },
  'resources.hub.cat.spoken_language': {
    en: 'Spoken language',
    ar: 'اللغة المنطوقة',
    es: 'Lengua hablada',
  },
  'resources.hub.cat.teaching': { en: 'For teachers', ar: 'للمدرّسين', es: 'Para profesores' },

  // ─── Resources / poetry (/resources/poetry) ──────────────────────
  'resources.poetry.skill.techniques.tag': { en: 'Technique', ar: 'تقنية', es: 'Técnica' },
  'resources.poetry.skill.techniques.title': {
    en: 'Poetic techniques',
    ar: 'التقنيات الشعرية',
    es: 'Técnicas poéticas',
  },
  'resources.poetry.skill.techniques.desc': {
    en: "Identifying form, structure and language devices - what they're called and what effects they create.",
    ar: 'تتعرّف على الشكل والهيكلة وأدوات اللغة - وش أسمائها ووش الأثر اللي تخلّقه.',
    es: 'Identificar la forma, la estructura y los recursos del lenguaje: cómo se llaman y qué efectos crean.',
  },
  'resources.poetry.skill.unseen.tag': { en: 'Unseen', ar: 'غير مرئي', es: 'Desconocida' },
  'resources.poetry.skill.unseen.title': {
    en: 'Unseen poetry',
    ar: 'الشعر غير المرئي',
    es: 'Poesía desconocida',
  },
  'resources.poetry.skill.unseen.desc': {
    en: 'A repeatable five-step framework for any unseen poem under exam conditions.',
    ar: 'إطار من خمس خطوات تقدر تعيده على أي قصيدة غير مرئية في ظروف الامتحان.',
    es: 'Un marco repetible de cinco pasos para cualquier poema desconocido en condiciones de examen.',
  },
  'resources.poetry.skill.compare.tag': { en: 'Comparison', ar: 'مقارنة', es: 'Comparación' },
  'resources.poetry.skill.compare.title': {
    en: 'Comparative poetry',
    ar: 'الشعر المقارن',
    es: 'Poesía comparada',
  },
  'resources.poetry.skill.compare.desc': {
    en: 'Structuring a comparison: similarities, differences, and which order earns more marks.',
    ar: 'تهيكل المقارنة: أوجه الشبه، أوجه الاختلاف، وأي ترتيب يجيب درجات أكثر.',
    es: 'Estructurar una comparación: similitudes, diferencias y qué orden gana más puntos.',
  },
  'resources.poetry.tip.memorise.title': {
    en: 'Memorise short, not whole',
    ar: 'احفظ مقاطع قصيرة، مو القصيدة كاملة',
    es: 'Memoriza fragmentos cortos, no el poema entero',
  },
  'resources.poetry.tip.memorise.text': {
    en: 'Three killer quotes per poem beats memorising the whole text. Pick lines that work for multiple themes.',
    ar: 'ثلاثة اقتباسات قوية لكل قصيدة أحسن من حفظ النص كله. اختر أبيات تنفع لأكثر من ثيمة.',
    es: 'Tres citas potentes por poema superan a memorizar el texto completo. Elige versos que sirvan para varios temas.',
  },
  'resources.poetry.tip.tech_effect.title': {
    en: 'Technique → effect, never just naming',
    ar: 'التقنية ← الأثر، مو بس تسمية',
    es: 'Técnica → efecto, nunca solo nombrarla',
  },
  'resources.poetry.tip.tech_effect.text': {
    en: 'Naming "sibilance" earns nothing on its own. Always answer the next question: what effect does it create here?',
    ar: 'تسمية «التكرار الصفيري» وحدها ما تجيب شي. دايم جاوب على السؤال اللي بعده: وش الأثر اللي يخلّقه هني؟',
    es: 'Nombrar la "sibilancia" no gana nada por sí solo. Responde siempre a la siguiente pregunta: ¿qué efecto crea aquí?',
  },
  'resources.poetry.tip.compare.title': {
    en: 'Comparison goes both ways',
    ar: 'المقارنة تروح في الاتجاهين',
    es: 'La comparación va en ambos sentidos',
  },
  'resources.poetry.tip.compare.text': {
    en: 'For every similarity, find a difference. Top-band answers move between the two poems sentence by sentence.',
    ar: 'مع كل وجه شبه، لاقِ وجه اختلاف. إجابات النطاق الأعلى تتنقّل بين القصيدتين جملة جملة.',
    es: 'Por cada similitud, encuentra una diferencia. Las respuestas de banda alta se mueven entre los dos poemas oración por oración.',
  },
  'resources.poetry.tip.context.title': {
    en: 'Context earns AO3, not anecdote',
    ar: 'السياق يجيب AO3، مو الحكاية الجانبية',
    es: 'El contexto gana AO3, no la anécdota',
  },
  'resources.poetry.tip.context.text': {
    en: "AO3 wants ideas linked back to the poem's effect - never an essay about the poet's life detached from the lines.",
    ar: 'AO3 يبي أفكار مربوطة برجعها لأثر القصيدة - مو مقال عن حياة الشاعر منفصل عن الأبيات.',
    es: 'AO3 quiere ideas vinculadas al efecto del poema, nunca una redacción sobre la vida del poeta desligada de los versos.',
  },
  'resources.poetry.tip.structure.title': {
    en: "Read the poem's shape first",
    ar: 'اقرأ شكل القصيدة أول',
    es: 'Lee primero la forma del poema',
  },
  'resources.poetry.tip.structure.text': {
    en: 'Before any analysis, look at: stanzas, line lengths, rhyme, volta. Structure is half the meaning.',
    ar: 'قبل أي تحليل، شوف: المقاطع، أطوال الأبيات، القافية، نقطة التحوّل. الهيكلة نص المعنى.',
    es: 'Antes de cualquier análisis, fíjate en: estrofas, longitud de los versos, rima, volta. La estructura es la mitad del significado.',
  },
  'resources.poetry.tip.plan.title': {
    en: 'Plan for 4 minutes',
    ar: 'خطّط لمدة 4 دقايق',
    es: 'Planifica durante 4 minutos',
  },
  'resources.poetry.tip.plan.text': {
    en: 'A 4-minute plan adds a whole grade on average. Map three big ideas before writing a word.',
    ar: 'الخطّة اللي تاخذ 4 دقايق تزيد درجة كاملة بالمعدّل. ارسم ثلاث أفكار كبيرة قبل لا تكتب كلمة.',
    es: 'Un plan de 4 minutos añade una nota entera de media. Esboza tres grandes ideas antes de escribir una palabra.',
  },
  'resources.poetry.ao.ao1.detail': {
    en: 'Personal response with apt, embedded references',
    ar: 'استجابة شخصية مع إشارات مناسبة ومدمجة في النص',
    es: 'Respuesta personal con referencias apropiadas e integradas',
  },
  'resources.poetry.ao.ao1.tip': {
    en: 'Quotes shorter than 6 words, woven into your own sentence.',
    ar: 'اقتباسات أقصر من 6 كلمات، منسوجة جوّا جملتك انت.',
    es: 'Citas de menos de 6 palabras, entretejidas en tu propia oración.',
  },
  'resources.poetry.ao.ao2.detail': {
    en: 'Analyse language, form and structure with subject terminology',
    ar: 'حلّل اللغة والشكل والهيكلة بمصطلحات المادة',
    es: 'Analiza el lenguaje, la forma y la estructura con terminología de la materia',
  },
  'resources.poetry.ao.ao2.tip': {
    en: "For every technique you name, write the EFFECT it creates - that's where the marks live.",
    ar: 'مع كل تقنية تسمّيها، اكتب الأثر اللي تخلّقه - هني وين الدرجات.',
    es: 'Por cada técnica que nombres, escribe el EFECTO que crea: ahí es donde están los puntos.',
  },
  'resources.poetry.ao.ao3.detail': {
    en: 'Contextual links - ideas, beliefs and conditions the poem reflects',
    ar: 'روابط سياقية - أفكار ومعتقدات وظروف تعكسها القصيدة',
    es: 'Vínculos contextuales: ideas, creencias y condiciones que refleja el poema',
  },
  'resources.poetry.ao.ao3.tip': {
    en: "Tie context to a specific line, not just the poet's biography in general.",
    ar: 'اربط السياق ببيت محدّد، مو بس بسيرة الشاعر بشكل عام.',
    es: 'Vincula el contexto a un verso concreto, no solo a la biografía del poeta en general.',
  },

  // ─── Resources / study tools (/resources/study-tools) ────────────
  'resources.study_tools.title': {
    en: 'Study tools',
    ar: 'أدوات المراجعة',
    es: 'Herramientas de estudio',
  },
  'resources.study_tools.subtitle': {
    en: 'Plan revision, drill recall, and time your past papers - every tool below saves to your account.',
    ar: 'خطّط مراجعتك، درّب الاسترجاع، وقيس وقتك في الأوراق السابقة - كل أداة تحت تنحفظ في حسابك.',
    es: 'Planifica el repaso, ejercita la memoria y cronometra tus exámenes anteriores: todas las herramientas de abajo se guardan en tu cuenta.',
  },
  'resources.study_tools.cta.open': { en: 'Open tool', ar: 'افتح الأداة', es: 'Abrir herramienta' },
  'resources.study_tools.rp.title': {
    en: 'Revision planner',
    ar: 'مخطّط المراجعة',
    es: 'Planificador de repaso',
  },
  'resources.study_tools.rp.desc': {
    en: 'Pick your exam date and the planner builds you a study schedule around it.',
    ar: 'اختر تاريخ امتحانك والمخطّط يبني لك جدول مراجعة حواليه.',
    es: 'Elige la fecha de tu examen y el planificador te construye un calendario de estudio en torno a ella.',
  },
  'resources.study_tools.rp.feat.calendar': {
    en: 'Calendar view',
    ar: 'عرض التقويم',
    es: 'Vista de calendario',
  },
  'resources.study_tools.rp.feat.countdown': {
    en: 'Exam countdown',
    ar: 'العدّ التنازلي للامتحان',
    es: 'Cuenta atrás del examen',
  },
  'resources.study_tools.rp.feat.plan': {
    en: 'Auto-balanced plan',
    ar: 'خطّة متوازنة تلقائياً',
    es: 'Plan equilibrado automáticamente',
  },
  'resources.study_tools.rp.feat.checklist': {
    en: 'Daily checklist',
    ar: 'قائمة تحقّق يومية',
    es: 'Lista de verificación diaria',
  },
  'resources.study_tools.fc.title': {
    en: 'Flashcards',
    ar: 'البطاقات التعليمية',
    es: 'Tarjetas didácticas',
  },
  'resources.study_tools.fc.desc': {
    en: 'Spaced-repetition flashcards for quotes, technique definitions and key terms.',
    ar: 'بطاقات بالتكرار المتباعد للاقتباسات وتعريفات التقنيات والمصطلحات المهمة.',
    es: 'Tarjetas de repetición espaciada para citas, definiciones de técnicas y términos clave.',
  },
  'resources.study_tools.fc.feat.sm2': {
    en: 'SM-2 algorithm',
    ar: 'خوارزمية SM-2',
    es: 'Algoritmo SM-2',
  },
  'resources.study_tools.fc.feat.grade': {
    en: 'Self-grading',
    ar: 'تصحيح ذاتي',
    es: 'Autoevaluación',
  },
  'resources.study_tools.fc.feat.difficult': {
    en: 'Hard-card focus',
    ar: 'تركيز على البطاقات الصعبة',
    es: 'Enfoque en tarjetas difíciles',
  },
  'resources.study_tools.fc.feat.streak': {
    en: 'Daily streak',
    ar: 'سلسلة يومية',
    es: 'Racha diaria',
  },
  'resources.study_tools.qt.title': {
    en: 'Quote tester',
    ar: 'مختبِر الاقتباسات',
    es: 'Probador de citas',
  },
  'resources.study_tools.qt.desc': {
    en: 'Drill your memorised quotes with fill-in-the-blank and timed recall.',
    ar: 'درّب اقتباساتك المحفوظة بأسلوب املأ الفراغ والاسترجاع الموقوت.',
    es: 'Ejercita tus citas memorizadas con completar huecos y recuerdo cronometrado.',
  },
  'resources.study_tools.qt.feat.fill_blank': {
    en: 'Fill the blank',
    ar: 'املأ الفراغ',
    es: 'Completa el hueco',
  },
  'resources.study_tools.qt.feat.timed': {
    en: 'Timed mode',
    ar: 'وضع موقوت',
    es: 'Modo cronometrado',
  },
  'resources.study_tools.qt.feat.sr': {
    en: 'Spaced repetition',
    ar: 'تكرار متباعد',
    es: 'Repetición espaciada',
  },
  'resources.study_tools.qt.feat.score': {
    en: 'Score tracking',
    ar: 'تتبّع النتيجة',
    es: 'Seguimiento de la puntuación',
  },
  'resources.study_tools.cl.title': {
    en: 'Exam checklist',
    ar: 'قائمة تحقّق الامتحان',
    es: 'Lista de verificación del examen',
  },
  'resources.study_tools.cl.desc': {
    en: 'Tick off every topic on your spec - board-specific, autosaves to your account.',
    ar: 'علّم على كل موضوع في منهجك - خاص بكل مجلس، ويتحفظ تلقائياً في حسابك.',
    es: 'Marca cada tema de tu temario: específico de cada junta, se autoguarda en tu cuenta.',
  },
  'resources.study_tools.cl.feat.aqa': {
    en: 'AQA spec coverage',
    ar: 'تغطية منهج AQA',
    es: 'Cobertura del temario AQA',
  },
  'resources.study_tools.cl.feat.edexcel': {
    en: 'Edexcel spec coverage',
    ar: 'تغطية منهج Edexcel',
    es: 'Cobertura del temario Edexcel',
  },
  'resources.study_tools.cl.feat.cambridge': {
    en: 'Cambridge IGCSE coverage',
    ar: 'تغطية Cambridge IGCSE',
    es: 'Cobertura de Cambridge IGCSE',
  },
  'resources.study_tools.cl.feat.autosave': {
    en: 'Autosave progress',
    ar: 'حفظ التقدّم تلقائياً',
    es: 'Guardado automático del progreso',
  },
  'resources.study_tools.tip.title': {
    en: 'How to use these tools well',
    ar: 'كيف تستخدم هالأدوات صح',
    es: 'Cómo usar bien estas herramientas',
  },
  'resources.study_tools.tip.start.label': {
    en: 'Start with the planner',
    ar: 'ابدأ بالمخطّط',
    es: 'Empieza por el planificador',
  },
  'resources.study_tools.tip.start.body': {
    en: 'A schedule is the difference between revising and panic-revising - set yours up first.',
    ar: 'الجدول هو الفرق بين إنك تراجع وإنك تراجع وانت مهلوع - سوّ جدولك أول شي.',
    es: 'Un calendario marca la diferencia entre repasar y repasar con pánico: configura el tuyo primero.',
  },
  'resources.study_tools.tip.daily.label': {
    en: 'Daily, not weekend-only',
    ar: 'كل يوم، مو بس نهاية الأسبوع',
    es: 'A diario, no solo el fin de semana',
  },
  'resources.study_tools.tip.daily.body': {
    en: 'Spaced repetition only works if you show up most days. 20 min daily beats 3 hours every Sunday.',
    ar: 'التكرار المتباعد ما يشتغل إلا إذا حضرت أغلب الأيام. 20 دقيقة كل يوم أحسن من 3 ساعات كل أحد.',
    es: 'La repetición espaciada solo funciona si apareces casi todos los días. 20 min al día superan a 3 horas cada domingo.',
  },
  'resources.study_tools.tip.track.label': {
    en: "Track what's hard",
    ar: 'تابع الشي الصعب',
    es: 'Controla lo que cuesta',
  },
  'resources.study_tools.tip.track.body': {
    en: "The flashcard hard-card focus shows you what's actually not sticking - go review the underlying notes for those.",
    ar: 'تركيز البطاقات الصعبة يوريك وش الشي اللي فعلاً ما يثبت - روح راجع الملاحظات الأصلية لهالأشياء.',
    es: 'El enfoque en tarjetas difíciles te muestra lo que de verdad no se te queda: repasa los apuntes originales de eso.',
  },
}
