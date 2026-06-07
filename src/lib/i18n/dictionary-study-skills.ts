/**
 * Khaleeji (Gulf) Arabic translations - `study.skills.*` namespace.
 *
 * Scope: UI CHROME ONLY on the GCSE study-resource pages under
 *   src/app/resources/{writing-skills,model-answers,exam-technique,
 *   spoken-language,study-tools,teacher-library}/**
 *
 * This shard deliberately contains NO study/teaching content: no model
 * answers, examiner commentary, lesson-plan or worksheet teaching
 * material, quotations, or analysis. Only navigational chrome,
 * breadcrumbs, buttons/CTAs, short generic section/label headings,
 * hero/intro marketing copy, and resource-card chrome.
 *
 * Brand + technical terms stay in Latin script even inside Arabic
 * (standard Gulf convention): The English Hub, GCSE/IGCSE, exam boards
 * (AQA, Edexcel, OCR, Eduqas, Cambridge), AO1-AO6, Grade N, KS3/KS4,
 * SPaG, PEE/PEEL, AFOREST/DAFOREST, SMILE, £, numbers, text/author
 * names, and literary/linguistic terms.
 *
 * Register: Khaleeji, not MSA/Levantine. شنو/أبغى/وايد/الحين/إحنا/روح/
 * شوف/دوّر/سكّر/ببلاش. Banned: شو, بحكي, كيفك, ليش.
 *
 * Annotated as Record (NOT `as const`) so the lookup chain in
 * dictionary.ts can consume it uniformly. Wiring into dictionary.ts is
 * handled separately.
 */

export const STUDY_SKILLS_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Shared chrome (recurring across study pages) ────────────────
  'study.skills.common.bc.home': { en: 'Home', ar: 'الرئيسية', es: 'Inicio' },
  'study.skills.common.bc.resources': { en: 'Resources', ar: 'المصادر', es: 'Recursos' },
  'study.skills.common.contents': { en: 'Contents', ar: 'المحتويات', es: 'Contenido' },
  'study.skills.common.examiner_commentary': {
    en: 'Examiner Commentary',
    ar: 'تعليق المصحّح',
    es: 'Comentario del examinador',
  },
  'study.skills.common.start_learning': {
    en: 'Start learning',
    ar: 'ابدأ التعلّم',
    es: 'Empezar a aprender',
  },
  'study.skills.common.download_pdf': {
    en: 'Download as PDF',
    ar: 'حمّله PDF',
    es: 'Descargar como PDF',
  },
  'study.skills.common.pdf_coming_soon': {
    en: 'PDF export coming soon',
    ar: 'تصدير PDF قريب',
    es: 'Exportación a PDF próximamente',
  },
  'study.skills.common.tl': {
    en: 'Teacher Library',
    ar: 'مكتبة المعلّم',
    es: 'Biblioteca del profesor',
  },

  // Teacher-library resource-card field labels (chrome)
  'study.skills.common.year_group': { en: 'Year Group', ar: 'المرحلة الدراسية', es: 'Curso' },
  'study.skills.common.format': { en: 'Format', ar: 'الصيغة', es: 'Formato' },
  'study.skills.common.objective': { en: 'Objective', ar: 'الهدف', es: 'Objetivo' },
  'study.skills.common.exam_board': {
    en: 'Exam Board',
    ar: 'هيئة الامتحان',
    es: 'Junta examinadora',
  },
  'study.skills.common.use_as': { en: 'Use as', ar: 'استخدمه كـ', es: 'Usar como' },

  // Teacher-library resource-card tag labels (generic status/type chrome)
  'study.skills.common.tag.task_card': {
    en: 'Task card',
    ar: 'بطاقة مهمة',
    es: 'Tarjeta de tarea',
  },
  'study.skills.common.tag.reference_card': {
    en: 'Reference card',
    ar: 'بطاقة مرجعية',
    es: 'Tarjeta de referencia',
  },
  'study.skills.common.tag.full_pack': {
    en: 'Full pack',
    ar: 'حزمة كاملة',
    es: 'Paquete completo',
  },
  'study.skills.common.tag.full_starter': {
    en: 'Full starter',
    ar: 'نشاط كامل',
    es: 'Actividad inicial completa',
  },
  'study.skills.common.tag.full_worksheet': {
    en: 'Full worksheet',
    ar: 'ورقة عمل كاملة',
    es: 'Ficha de trabajo completa',
  },
  'study.skills.common.tag.coming_soon': { en: 'Coming soon', ar: 'قريباً', es: 'Próximamente' },
  'study.skills.common.duration.five_mins': { en: '5 mins', ar: '٥ دقائق', es: '5 min' },

  // ─── Writing Skills hub (/resources/writing-skills) ──────────────
  'study.skills.ws.hero.eyebrow': {
    en: 'Writing Skills Masterclass',
    ar: 'ماستر كلاس مهارات الكتابة',
    es: 'Clase magistral de destrezas de escritura',
  },
  'study.skills.ws.hero.title': {
    en: 'Write Like a Grade 9 Student',
    ar: 'اكتب مثل طالب Grade 9',
    es: 'Escribe como un estudiante de Grade 9',
  },
  'study.skills.ws.hero.subtitle': {
    en: 'Board-agnostic writing guides that work for AQA, Edexcel, OCR, and Cambridge IGCSE. Whether you are crafting a story, arguing a case, or analysing a text, these masterclasses will transform your writing.',
    ar: 'أدلة كتابة تنفع مع كل البوردات: AQA و Edexcel و OCR و Cambridge IGCSE. سواء تكتب قصة، أو تبني حجة، أو تحلّل نص، هالماستر كلاس بتغيّر كتابتك.',
    es: 'Guías de escritura independientes de la junta que sirven para AQA, Edexcel, OCR y Cambridge IGCSE. Tanto si estás creando una historia, defendiendo un argumento o analizando un texto, estas clases magistrales transformarán tu escritura.',
  },
  'study.skills.ws.hero.cta_explore': {
    en: 'Explore Writing Skills',
    ar: 'استكشف مهارات الكتابة',
    es: 'Explorar destrezas de escritura',
  },
  'study.skills.ws.hero.cta_practice': {
    en: 'Practice Questions',
    ar: 'أسئلة تدريب',
    es: 'Preguntas de práctica',
  },
  'study.skills.ws.bc.this': {
    en: 'Writing Skills',
    ar: 'مهارات الكتابة',
    es: 'Destrezas de escritura',
  },
  'study.skills.ws.choose.title': {
    en: 'Choose a Writing Skill',
    ar: 'اختر مهارة كتابة',
    es: 'Elige una destreza de escritura',
  },
  'study.skills.ws.choose.subtitle': {
    en: 'Each guide is a complete masterclass packed with techniques, examples, and full annotated model responses.',
    ar: 'كل دليل ماستر كلاس كامل مليان تقنيات وأمثلة وإجابات نموذجية مشروحة بالكامل.',
    es: 'Cada guía es una clase magistral completa repleta de técnicas, ejemplos y respuestas modelo totalmente anotadas.',
  },
  // Skill-area card chrome (navigational card titles/subtitles/descriptions)
  'study.skills.ws.card.creative.title': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
    es: 'Escritura creativa',
  },
  'study.skills.ws.card.creative.subtitle': {
    en: 'Descriptive & Narrative',
    ar: 'وصفية وسردية',
    es: 'Descriptiva y narrativa',
  },
  'study.skills.ws.card.creative.desc': {
    en: 'Master descriptive and narrative writing with advanced techniques including sensory language, structural devices, compelling openings and endings, and vocabulary enhancement. Includes full annotated model responses.',
    ar: 'أتقن الكتابة الوصفية والسردية بتقنيات متقدمة: اللغة الحسّية، الأدوات البنائية، البدايات والنهايات المؤثرة، وتطوير المفردات. ويايه إجابات نموذجية مشروحة بالكامل.',
    es: 'Domina la escritura descriptiva y narrativa con técnicas avanzadas como el lenguaje sensorial, los recursos estructurales, las aperturas y los finales cautivadores y la ampliación del vocabulario. Incluye respuestas modelo totalmente anotadas.',
  },
  'study.skills.ws.card.persuasive.title': {
    en: 'Persuasive Writing',
    ar: 'الكتابة الإقناعية',
    es: 'Escritura persuasiva',
  },
  'study.skills.ws.card.persuasive.subtitle': {
    en: 'Articles, Letters & Speeches',
    ar: 'مقالات ورسائل وخطب',
    es: 'Artículos, cartas y discursos',
  },
  'study.skills.ws.card.persuasive.desc': {
    en: 'Learn how to argue, persuade, and influence through writing. Covers AFOREST techniques, counter-arguments, tone and register, plus format conventions for articles, speeches, letters, and reports. Annotated models included.',
    ar: 'تعلّم كيف تجادل وتقنع وتأثّر بالكتابة. يغطي تقنيات AFOREST، الحجج المضادة، النبرة والمستوى اللغوي، وقواعد صياغة المقالات والخطب والرسائل والتقارير. ويايه نماذج مشروحة.',
    es: 'Aprende a argumentar, persuadir e influir a través de la escritura. Abarca las técnicas AFOREST, los contraargumentos, el tono y el registro, además de las convenciones de formato para artículos, discursos, cartas e informes. Incluye modelos anotados.',
  },
  'study.skills.ws.card.analytical.title': {
    en: 'Analytical Writing',
    ar: 'الكتابة التحليلية',
    es: 'Escritura analítica',
  },
  'study.skills.ws.card.analytical.subtitle': {
    en: 'Essays & Language Analysis',
    ar: 'مقالات وتحليل لغوي',
    es: 'Ensayos y análisis del lenguaje',
  },
  'study.skills.ws.card.analytical.desc': {
    en: 'Write sophisticated analytical responses for literature and language papers. Master PEEL paragraphs, quotation embedding, language and structural analysis, evaluative vocabulary, and contextual linking. Full annotated essays included.',
    ar: 'اكتب إجابات تحليلية راقية لأوراق الأدب واللغة. أتقن فقرات PEEL، تضمين الاقتباسات، التحليل اللغوي والبنائي، المفردات التقييمية، والربط السياقي. ويايه مقالات نموذجية مشروحة بالكامل.',
    es: 'Escribe respuestas analíticas sofisticadas para los exámenes de literatura y lengua. Domina los párrafos PEEL, la integración de citas, el análisis lingüístico y estructural, el vocabulario evaluativo y la conexión contextual. Incluye ensayos totalmente anotados.',
  },
  'study.skills.ws.card.grammar.title': {
    en: 'Grammar & Punctuation',
    ar: 'القواعد وعلامات الترقيم',
    es: 'Gramática y puntuación',
  },
  'study.skills.ws.card.grammar.subtitle': {
    en: 'SPaG Mastery',
    ar: 'إتقان SPaG',
    es: 'Dominio de SPaG',
  },
  'study.skills.ws.card.grammar.desc': {
    en: 'Elevate your technical accuracy and learn to use grammar and punctuation for deliberate effect. Covers sentence types, advanced punctuation, paragraphing, common errors, voice, and tense control.',
    ar: 'ارفع دقتك التقنية وتعلّم استخدام القواعد وعلامات الترقيم لأثر مقصود. يغطي أنواع الجمل، الترقيم المتقدم، تقسيم الفقرات، الأخطاء الشائعة، الصوت، والتحكم بالأزمنة.',
    es: 'Eleva tu precisión técnica y aprende a usar la gramática y la puntuación para lograr un efecto deliberado. Abarca los tipos de oraciones, la puntuación avanzada, la división en párrafos, los errores comunes, la voz y el control de los tiempos verbales.',
  },
  // 5 universal tips section (heading + intro chrome only; tip body = study content, left EN)
  'study.skills.ws.tips.title': {
    en: '5 Tips That Work in Every Exam',
    ar: '٥ نصايح تنفع بكل امتحان',
    es: '5 consejos que funcionan en cualquier examen',
  },
  'study.skills.ws.tips.subtitle': {
    en: 'Universal writing strategies you can apply to any paper, any board, every time.',
    ar: 'استراتيجيات كتابة عامة تنفع لأي ورقة، أي بورد، كل مرة.',
    es: 'Estrategias de escritura universales que puedes aplicar a cualquier examen, cualquier junta, siempre.',
  },
  // AI feedback callout (marketing chrome)
  'study.skills.ws.ai.title': {
    en: 'AI Feedback Built Into Every Answer',
    ar: 'تغذية راجعة بالذكاء الاصطناعي بكل إجابة',
    es: 'Comentarios con IA integrados en cada respuesta',
  },
  'study.skills.ws.ai.body': {
    en: 'Every practice question comes with instant, personalised AI feedback. Submit your response and receive detailed commentary on your vocabulary choices, sentence structures, technique usage, and SPaG -- with actionable suggestions to push your writing into the top band.',
    ar: 'كل سؤال تدريب يايه تغذية راجعة فورية ومخصصة بالذكاء الاصطناعي. أرسل إجابتك وبتوصلك ملاحظات مفصّلة عن اختياراتك للمفردات وبناء الجمل واستخدام التقنيات و SPaG، مع اقتراحات عملية تدفع كتابتك للباند الأعلى.',
    es: 'Cada pregunta de práctica incluye comentarios con IA instantáneos y personalizados. Envía tu respuesta y recibe comentarios detallados sobre tus elecciones de vocabulario, las estructuras de tus oraciones, el uso de técnicas y SPaG, con sugerencias prácticas para llevar tu escritura a la banda más alta.',
  },
  'study.skills.ws.ai.cta': {
    en: 'Try a Practice Question',
    ar: 'جرّب سؤال تدريب',
    es: 'Prueba una pregunta de práctica',
  },
  // Practice links section (chrome + navigational card chrome)
  'study.skills.ws.practice.title': {
    en: 'Practice Makes Perfect',
    ar: 'التدريب يصنع الإتقان',
    es: 'La práctica hace al maestro',
  },
  'study.skills.ws.practice.subtitle': {
    en: 'Put your skills to the test with exam-style questions and get instant AI feedback on your responses.',
    ar: 'اختبر مهاراتك بأسئلة على نمط الامتحان واحصل على تغذية راجعة فورية بالذكاء الاصطناعي على إجاباتك.',
    es: 'Pon a prueba tus destrezas con preguntas de tipo examen y recibe comentarios con IA instantáneos sobre tus respuestas.',
  },
  'study.skills.ws.practice.start': {
    en: 'Start practising',
    ar: 'ابدأ التدريب',
    es: 'Empezar a practicar',
  },
  'study.skills.ws.practice.creative.label': {
    en: 'Creative Writing Questions',
    ar: 'أسئلة الكتابة الإبداعية',
    es: 'Preguntas de escritura creativa',
  },
  'study.skills.ws.practice.creative.desc': {
    en: 'Descriptive and narrative prompts with AI-powered feedback.',
    ar: 'محفّزات وصفية وسردية مع تغذية راجعة بالذكاء الاصطناعي.',
    es: 'Propuestas descriptivas y narrativas con comentarios impulsados por IA.',
  },
  'study.skills.ws.practice.persuasive.label': {
    en: 'Persuasive Writing Questions',
    ar: 'أسئلة الكتابة الإقناعية',
    es: 'Preguntas de escritura persuasiva',
  },
  'study.skills.ws.practice.persuasive.desc': {
    en: 'Article, speech, and letter tasks to sharpen your argument.',
    ar: 'مهام مقالات وخطب ورسائل تشحذ حجتك.',
    es: 'Tareas de artículos, discursos y cartas para afinar tu argumento.',
  },
  'study.skills.ws.practice.language.label': {
    en: 'Language Analysis Questions',
    ar: 'أسئلة تحليل اللغة',
    es: 'Preguntas de análisis del lenguaje',
  },
  'study.skills.ws.practice.language.desc': {
    en: 'Extract-based questions testing your analytical writing.',
    ar: 'أسئلة مبنية على مقاطع تختبر كتابتك التحليلية.',
    es: 'Preguntas basadas en extractos que ponen a prueba tu escritura analítica.',
  },
  'study.skills.ws.practice.all.label': {
    en: 'All Practice Questions',
    ar: 'كل أسئلة التدريب',
    es: 'Todas las preguntas de práctica',
  },
  'study.skills.ws.practice.all.desc': {
    en: 'Browse every question type across all exam boards.',
    ar: 'تصفّح كل أنواع الأسئلة عبر كل البوردات.',
    es: 'Explora todos los tipos de preguntas de todas las juntas examinadoras.',
  },
  // "Why these guides work" feature cards (navigational/marketing chrome)
  'study.skills.ws.why.title': {
    en: 'Why These Guides Work',
    ar: 'ليش هالأدلة تنفع',
    es: 'Por qué funcionan estas guías',
  },
  'study.skills.ws.why.board.title': {
    en: 'Board-Agnostic',
    ar: 'تنفع لكل البوردات',
    es: 'Independiente de la junta',
  },
  'study.skills.ws.why.board.body': {
    en: 'Works for AQA, Edexcel, OCR, and Cambridge IGCSE. The skills transfer across every specification because great writing is great writing.',
    ar: 'تنفع مع AQA و Edexcel و OCR و Cambridge IGCSE. المهارات تنتقل لكل منهج لأن الكتابة الحلوة كتابة حلوة بأي مكان.',
    es: 'Sirve para AQA, Edexcel, OCR y Cambridge IGCSE. Las destrezas se trasladan a cualquier programa porque la buena escritura es buena escritura.',
  },
  'study.skills.ws.why.examples.title': {
    en: 'Real Examples',
    ar: 'أمثلة حقيقية',
    es: 'Ejemplos reales',
  },
  'study.skills.ws.why.examples.body': {
    en: 'Every technique is illustrated with genuine examples you can model in your own work. No vague advice -- just concrete, usable demonstrations.',
    ar: 'كل تقنية موضّحة بأمثلة حقيقية تقدر تحاكيها بشغلك. ما في نصايح غامضة، بس أمثلة ملموسة وقابلة للاستخدام.',
    es: 'Cada técnica se ilustra con ejemplos auténticos que puedes imitar en tu propio trabajo. Sin consejos vagos, solo demostraciones concretas y aplicables.',
  },
  'study.skills.ws.why.models.title': {
    en: 'Full Model Responses',
    ar: 'إجابات نموذجية كاملة',
    es: 'Respuestas modelo completas',
  },
  'study.skills.ws.why.models.body': {
    en: 'Every guide includes complete annotated model responses so you can see exactly how top-grade writing looks from start to finish.',
    ar: 'كل دليل يايه إجابات نموذجية كاملة ومشروحة عشان تشوف بالضبط شلون تبين الكتابة عالية الدرجة من البداية للنهاية.',
    es: 'Cada guía incluye respuestas modelo completas y anotadas para que veas exactamente cómo es la escritura de máxima nota de principio a fin.',
  },

  // ─── Model Answers hub (/resources/model-answers) ────────────────
  'study.skills.ma.hero.eyebrow': {
    en: 'Learn from the Best',
    ar: 'تعلّم من الأفضل',
    es: 'Aprende de los mejores',
  },
  'study.skills.ma.hero.title': {
    en: 'Model Answers',
    ar: 'إجابات نموذجية',
    es: 'Respuestas modelo',
  },
  'study.skills.ma.hero.subtitle': {
    en: 'Expert-written model responses at every grade level. Each answer includes examiner commentary, technique annotations, and clear explanations of what separates a good answer from a great one.',
    ar: 'إجابات نموذجية مكتوبة من خبراء لكل مستوى Grade. كل إجابة فيها تعليق المصحّح، شرح للتقنيات، وتوضيح لشنو يفرّق الإجابة الحلوة عن الممتازة.',
    es: 'Respuestas modelo escritas por expertos para cada nivel de nota. Cada respuesta incluye comentarios del examinador, anotaciones de técnicas y explicaciones claras de lo que separa una buena respuesta de una excelente.',
  },
  'study.skills.ma.bc.this': { en: 'Model Answers', ar: 'إجابات نموذجية', es: 'Respuestas modelo' },
  'study.skills.ma.grade_level': { en: 'Grade Level', ar: 'مستوى Grade', es: 'Nivel de nota' },
  'study.skills.ma.filter.all': { en: 'All Grades', ar: 'كل الدرجات', es: 'Todas las notas' },
  // Question-type navigation cards (chrome titles + descriptions)
  'study.skills.ma.type.language.title': {
    en: 'Language Analysis',
    ar: 'تحليل اللغة',
    es: 'Análisis del lenguaje',
  },
  'study.skills.ma.type.language.desc': {
    en: "Model responses to 'How does the writer use language...' questions. Grade 3, 5, 7, and 9 examples with examiner commentary and side-by-side comparisons showing what makes the difference.",
    ar: "إجابات نموذجية لأسئلة 'How does the writer use language...'. أمثلة Grade 3 و5 و7 و9 مع تعليق المصحّح ومقارنات جنب بعض تبيّن شنو يفرّق.",
    es: "Respuestas modelo a las preguntas '¿Cómo usa el escritor el lenguaje...?'. Ejemplos de Grade 3, 5, 7 y 9 con comentarios del examinador y comparaciones lado a lado que muestran qué marca la diferencia.",
  },
  'study.skills.ma.type.creative.title': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
    es: 'Escritura creativa',
  },
  'study.skills.ma.type.creative.desc': {
    en: 'Descriptive and narrative model responses at every grade level. Full annotated examples showing how to craft atmosphere, use structural techniques, and deploy sophisticated vocabulary.',
    ar: 'إجابات نموذجية وصفية وسردية لكل مستوى Grade. أمثلة كاملة مشروحة تبيّن شلون تصنع الأجواء، وتستخدم التقنيات البنائية، وتوظّف مفردات راقية.',
    es: 'Respuestas modelo descriptivas y narrativas para cada nivel de nota. Ejemplos completos y anotados que muestran cómo crear una atmósfera, usar técnicas estructurales y emplear un vocabulario sofisticado.',
  },
  'study.skills.ma.type.literature.title': {
    en: 'Literature Essays',
    ar: 'مقالات الأدب',
    es: 'Ensayos de literatura',
  },
  'study.skills.ma.type.literature.desc': {
    en: 'Literature essays on key texts including Macbeth, A Christmas Carol, An Inspector Calls, and poetry comparison at multiple grade levels. Annotations show how to structure arguments and embed quotations.',
    ar: 'مقالات أدب على نصوص أساسية مثل Macbeth و A Christmas Carol و An Inspector Calls ومقارنة الشعر، على مستويات Grade متعددة. الشروح تبيّن شلون تبني الحجج وتضمّن الاقتباسات.',
    es: 'Ensayos de literatura sobre textos clave como Macbeth, A Christmas Carol, An Inspector Calls y comparación de poesía en varios niveles de nota. Las anotaciones muestran cómo estructurar argumentos e integrar citas.',
  },
  'study.skills.ma.type.persuasive.title': {
    en: 'Persuasive & Transactional Writing',
    ar: 'الكتابة الإقناعية والوظيفية',
    es: 'Escritura persuasiva y transaccional',
  },
  'study.skills.ma.type.persuasive.desc': {
    en: 'Model articles, speeches, and letters at every grade level with annotations highlighting rhetorical devices, structural choices, and persuasive techniques.',
    ar: 'مقالات وخطب ورسائل نموذجية لكل مستوى Grade مع شروح تبرز الأدوات البلاغية والخيارات البنائية وتقنيات الإقناع.',
    es: 'Artículos, discursos y cartas modelo para cada nivel de nota con anotaciones que destacan los recursos retóricos, las decisiones estructurales y las técnicas persuasivas.',
  },
  // "How to use" section (chrome)
  'study.skills.ma.howto.title': {
    en: 'How to Use These Model Answers',
    ar: 'شلون تستخدم هالإجابات النموذجية',
    es: 'Cómo usar estas respuestas modelo',
  },
  'study.skills.ma.howto.read.title': {
    en: 'Read Actively',
    ar: 'اقرأ بتركيز',
    es: 'Lee activamente',
  },
  'study.skills.ma.howto.read.body': {
    en: 'Hover over highlighted text to see technique annotations and examiner insights.',
    ar: 'حط المؤشر على النص المظلّل عشان تشوف شرح التقنيات وملاحظات المصحّح.',
    es: 'Pasa el cursor sobre el texto resaltado para ver las anotaciones de técnicas y las observaciones del examinador.',
  },
  'study.skills.ma.howto.compare.title': {
    en: 'Compare Grades',
    ar: 'قارن الدرجات',
    es: 'Compara notas',
  },
  'study.skills.ma.howto.compare.body': {
    en: 'Study the difference between grade 5, 7, and 9 responses on the same question.',
    ar: 'ادرس الفرق بين إجابات grade 5 و7 و9 على نفس السؤال.',
    es: 'Estudia la diferencia entre las respuestas de grade 5, 7 y 9 a la misma pregunta.',
  },
  'study.skills.ma.howto.practise.title': { en: 'Practise', ar: 'تدرّب', es: 'Practica' },
  'study.skills.ma.howto.practise.body': {
    en: 'Use the techniques you have identified to improve your own answers.',
    ar: 'استخدم التقنيات اللي حددتها عشان تحسّن إجاباتك انت.',
    es: 'Usa las técnicas que has identificado para mejorar tus propias respuestas.',
  },
  // Quick stats labels (chrome)
  'study.skills.ma.stat.model_answers': {
    en: 'Model Answers',
    ar: 'إجابات نموذجية',
    es: 'Respuestas modelo',
  },
  'study.skills.ma.stat.grade_levels': {
    en: 'Grade Levels',
    ar: 'مستويات Grade',
    es: 'Niveles de nota',
  },
  'study.skills.ma.stat.question_types': {
    en: 'Question Types',
    ar: 'أنواع الأسئلة',
    es: 'Tipos de preguntas',
  },
  'study.skills.ma.stat.annotations': { en: 'Annotations', ar: 'شروح', es: 'Anotaciones' },

  // ─── Model Answers subpages (shared chrome) ──────────────────────
  'study.skills.ma.sub.eyebrow': {
    en: 'Model Answers',
    ar: 'إجابات نموذجية',
    es: 'Respuestas modelo',
  },
  // Language Analysis subpage
  'study.skills.ma.lang.title': {
    en: 'Language Analysis',
    ar: 'تحليل اللغة',
    es: 'Análisis del lenguaje',
  },
  'study.skills.ma.lang.subtitle': {
    en: 'See exactly how top students respond to “How does the writer use language...” questions. Grade 3, 5, 7, and 9 examples with full examiner commentary.',
    ar: 'شوف بالضبط شلون يجاوب الطلاب المتفوقين على أسئلة “How does the writer use language...”. أمثلة Grade 3 و5 و7 و9 مع تعليق مصحّح كامل.',
    es: 'Mira exactamente cómo responden los mejores estudiantes a las preguntas “¿Cómo usa el escritor el lenguaje...?”. Ejemplos de Grade 3, 5, 7 y 9 con comentarios completos del examinador.',
  },
  'study.skills.ma.lang.bc.this': {
    en: 'Language Analysis',
    ar: 'تحليل اللغة',
    es: 'Análisis del lenguaje',
  },
  'study.skills.ma.lang.toc.question': { en: 'The Question', ar: 'السؤال', es: 'La pregunta' },
  'study.skills.ma.lang.toc.responses': {
    en: 'Model Responses',
    ar: 'الإجابات النموذجية',
    es: 'Respuestas modelo',
  },
  'study.skills.ma.lang.toc.comparison': {
    en: 'Grade Comparison',
    ar: 'مقارنة الدرجات',
    es: 'Comparación de notas',
  },
  'study.skills.ma.lang.sec.question': { en: 'The Question', ar: 'السؤال', es: 'La pregunta' },
  'study.skills.ma.lang.sec.responses': {
    en: 'Model Responses',
    ar: 'الإجابات النموذجية',
    es: 'Respuestas modelo',
  },
  'study.skills.ma.lang.sec.comparison': {
    en: 'What Makes the Difference?',
    ar: 'شنو يصنع الفرق؟',
    es: '¿Qué marca la diferencia?',
  },
  'study.skills.ma.lang.label.source': {
    en: 'Source Text (Extract)',
    ar: 'النص المصدر (مقطع)',
    es: 'Texto fuente (extracto)',
  },
  'study.skills.ma.lang.table.skill': { en: 'Skill', ar: 'المهارة', es: 'Destreza' },
  // Creative Writing subpage
  'study.skills.ma.cw.title': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
    es: 'Escritura creativa',
  },
  'study.skills.ma.cw.subtitle': {
    en: 'Full model descriptive and narrative responses at grade 3, 5, 7, and 9, with annotations highlighting every technique and examiner insights on what earns each grade.',
    ar: 'إجابات نموذجية وصفية وسردية كاملة على grade 3 و5 و7 و9، مع شروح تبرز كل تقنية وملاحظات المصحّح عن شنو يكسب كل درجة.',
    es: 'Respuestas modelo descriptivas y narrativas completas en grade 3, 5, 7 y 9, con anotaciones que destacan cada técnica y observaciones del examinador sobre qué merece cada nota.',
  },
  'study.skills.ma.cw.bc.this': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
    es: 'Escritura creativa',
  },
  'study.skills.ma.cw.toc.descriptive': {
    en: 'Descriptive Writing',
    ar: 'الكتابة الوصفية',
    es: 'Escritura descriptiva',
  },
  'study.skills.ma.cw.toc.narrative': {
    en: 'Narrative Writing',
    ar: 'الكتابة السردية',
    es: 'Escritura narrativa',
  },
  'study.skills.ma.cw.toc.techniques': {
    en: 'Key Techniques',
    ar: 'التقنيات الأساسية',
    es: 'Técnicas clave',
  },
  'study.skills.ma.cw.sec.descriptive': {
    en: 'Descriptive Writing',
    ar: 'الكتابة الوصفية',
    es: 'Escritura descriptiva',
  },
  'study.skills.ma.cw.sec.narrative': {
    en: 'Narrative Writing',
    ar: 'الكتابة السردية',
    es: 'Escritura narrativa',
  },
  'study.skills.ma.cw.sec.techniques': {
    en: 'Key Techniques Annotated',
    ar: 'التقنيات الأساسية مشروحة',
    es: 'Técnicas clave anotadas',
  },
  'study.skills.ma.cw.label.task': { en: 'Task', ar: 'المهمة', es: 'Tarea' },
  // Literature Essays subpage
  'study.skills.ma.lit.title': {
    en: 'Literature Essays',
    ar: 'مقالات الأدب',
    es: 'Ensayos de literatura',
  },
  'study.skills.ma.lit.subtitle': {
    en: 'Model essays on the most popular GCSE texts at grade 3, 5, 7, and 9. Every paragraph is annotated to show you exactly how to build arguments, embed quotations, and explore context.',
    ar: 'مقالات نموذجية على أشهر نصوص GCSE على grade 3 و5 و7 و9. كل فقرة مشروحة تبيّن لك بالضبط شلون تبني الحجج وتضمّن الاقتباسات وتستكشف السياق.',
    es: 'Ensayos modelo sobre los textos de GCSE más populares en grade 3, 5, 7 y 9. Cada párrafo está anotado para mostrarte exactamente cómo construir argumentos, integrar citas y explorar el contexto.',
  },
  'study.skills.ma.lit.bc.this': {
    en: 'Literature Essays',
    ar: 'مقالات الأدب',
    es: 'Ensayos de literatura',
  },
  'study.skills.ma.lit.toc.poetry': {
    en: 'Poetry Comparison',
    ar: 'مقارنة الشعر',
    es: 'Comparación de poesía',
  },
  'study.skills.ma.lit.toc.criteria': {
    en: 'What Examiners Want',
    ar: 'شنو يبغى المصحّحون',
    es: 'Qué quieren los examinadores',
  },
  'study.skills.ma.lit.sec.criteria': {
    en: 'What Examiners Want at Each Grade',
    ar: 'شنو يبغى المصحّحون بكل درجة',
    es: 'Qué quieren los examinadores en cada nota',
  },
  // Persuasive Writing subpage
  'study.skills.ma.pw.title': {
    en: 'Persuasive & Transactional Writing',
    ar: 'الكتابة الإقناعية والوظيفية',
    es: 'Escritura persuasiva y transaccional',
  },
  'study.skills.ma.pw.subtitle': {
    en: 'Model articles, speeches, and letters at grade 3, 5, 7, and 9 with annotations showing you how to deploy rhetorical devices, structure an argument, and write with purpose and flair.',
    ar: 'مقالات وخطب ورسائل نموذجية على grade 3 و5 و7 و9 مع شروح تبيّن لك شلون توظّف الأدوات البلاغية وتبني حجة وتكتب بهدف وأناقة.',
    es: 'Artículos, discursos y cartas modelo en grade 3, 5, 7 y 9 con anotaciones que te muestran cómo emplear recursos retóricos, estructurar un argumento y escribir con propósito y estilo.',
  },
  'study.skills.ma.pw.bc.this': {
    en: 'Persuasive Writing',
    ar: 'الكتابة الإقناعية',
    es: 'Escritura persuasiva',
  },
  'study.skills.ma.pw.toc.article': { en: 'Article', ar: 'مقال', es: 'Artículo' },
  'study.skills.ma.pw.toc.speech': { en: 'Speech', ar: 'خطبة', es: 'Discurso' },
  'study.skills.ma.pw.toc.techniques': {
    en: 'Key Techniques',
    ar: 'التقنيات الأساسية',
    es: 'Técnicas clave',
  },
  'study.skills.ma.pw.sec.article': {
    en: 'Model Article',
    ar: 'مقال نموذجي',
    es: 'Artículo modelo',
  },
  'study.skills.ma.pw.sec.speech': {
    en: 'Model Speech',
    ar: 'خطبة نموذجية',
    es: 'Discurso modelo',
  },
  'study.skills.ma.pw.sec.techniques': {
    en: 'Key Persuasive Techniques',
    ar: 'تقنيات الإقناع الأساسية',
    es: 'Técnicas persuasivas clave',
  },

  // ─── Spoken Language - Topics (/resources/spoken-language/topics) ─
  'study.skills.sl.topics.back': {
    en: 'Spoken Language Guide',
    ar: 'دليل Spoken Language',
    es: 'Guía de Spoken Language',
  },
  'study.skills.sl.topics.title': {
    en: 'Presentation Topic Ideas',
    ar: 'أفكار مواضيع للعرض',
    es: 'Ideas de temas para presentaciones',
  },
  'study.skills.sl.topics.subtitle': {
    en: 'Over 30 topic ideas for your Spoken Language endorsement, organised by category. Each includes a brief outline, key points to cover, and potential audience questions to prepare for.',
    ar: 'أكثر من ٣٠ فكرة موضوع لـ Spoken Language endorsement، مرتّبة حسب التصنيف. كل وحدة فيها مخطط مختصر، نقاط أساسية تغطيها، وأسئلة محتملة من الجمهور تتجهّز لها.',
    es: 'Más de 30 ideas de temas para tu Spoken Language endorsement, organizadas por categoría. Cada una incluye un esquema breve, los puntos clave que tratar y posibles preguntas del público para las que prepararte.',
  },
  'study.skills.sl.topics.bc.this': { en: 'Topics', ar: 'المواضيع', es: 'Temas' },
  'study.skills.sl.topics.bc.spoken': {
    en: 'Spoken Language',
    ar: 'Spoken Language',
    es: 'Spoken Language',
  },
  'study.skills.sl.topics.jump': {
    en: 'Jump to Category',
    ar: 'انتقل للتصنيف',
    es: 'Ir a la categoría',
  },
  'study.skills.sl.topics.count_suffix': { en: 'topics', ar: 'موضوع', es: 'temas' },
  'study.skills.sl.topics.keypoints': {
    en: 'Key Points to Cover',
    ar: 'نقاط أساسية تغطيها',
    es: 'Puntos clave que tratar',
  },
  'study.skills.sl.topics.questions': {
    en: 'Potential Audience Questions',
    ar: 'أسئلة محتملة من الجمهور',
    es: 'Posibles preguntas del público',
  },
  'study.skills.sl.topics.choose.title': {
    en: 'How to Choose the Right Topic for You',
    ar: 'شلون تختار الموضوع المناسب لك',
    es: 'Cómo elegir el tema adecuado para ti',
  },
  'study.skills.sl.topics.cta.title': {
    en: 'Ready to Prepare?',
    ar: 'جاهز تتجهّز؟',
    es: '¿Listo para prepararte?',
  },
  'study.skills.sl.topics.cta.body': {
    en: 'Head back to our full Spoken Language guide for detailed advice on planning, delivery, answering questions, and hitting every assessment criterion.',
    ar: 'ارجع لدليل Spoken Language الكامل عشان نصايح مفصّلة عن التخطيط والإلقاء والإجابة على الأسئلة وتحقيق كل معيار تقييم.',
    es: 'Vuelve a nuestra guía completa de Spoken Language para obtener consejos detallados sobre planificación, exposición, respuesta a preguntas y cumplimiento de cada criterio de evaluación.',
  },
  'study.skills.sl.topics.cta.back': {
    en: 'Back to the Full Guide',
    ar: 'ارجع للدليل الكامل',
    es: 'Volver a la guía completa',
  },

  // ─── Teacher Library subpages (hub-style) ────────────────────────
  // Homework
  'study.skills.tl.homework.bc.this': {
    en: 'Homework Tasks',
    ar: 'الواجبات البيتية',
    es: 'Tareas para casa',
  },
  'study.skills.tl.homework.title': {
    en: 'Homework Tasks',
    ar: 'الواجبات البيتية',
    es: 'Tareas para casa',
  },
  'study.skills.tl.homework.subtitle': {
    en: 'Meaningful homework that extends classroom learning - without creating a marking mountain. Each task is designed to be self-checked or lightly assessed in class.',
    ar: 'واجبات مفيدة توسّع تعلّم الصف، بدون ما تصير جبل تصحيح. كل مهمة مصممة عشان الطالب يصحّحها بنفسه أو تتقيّم بخفة بالصف.',
    es: 'Tareas significativas que amplían el aprendizaje del aula, sin generar una montaña de correcciones. Cada tarea está diseñada para autocorregirse o evaluarse de forma ligera en clase.',
  },
  // Mark Schemes
  'study.skills.tl.ms.bc.this': {
    en: 'Mark Schemes',
    ar: 'سلالم العلامات',
    es: 'Esquemas de calificación',
  },
  'study.skills.tl.ms.title': {
    en: 'Mark Schemes',
    ar: 'سلالم العلامات',
    es: 'Esquemas de calificación',
  },
  'study.skills.tl.ms.subtitle': {
    en: 'Quick-reference mark scheme cards for every major GCSE English exam board. Grade descriptors, AO weightings, and common examiner comments at your fingertips.',
    ar: 'بطاقات سلم علامات مرجعية سريعة لكل بوردات GCSE English الكبيرة. واصفات الدرجات، أوزان الـ AO، وملاحظات المصحّحين الشائعة بين يديك.',
    es: 'Tarjetas de esquema de calificación de consulta rápida para todas las principales juntas examinadoras de GCSE English. Descriptores de nota, ponderaciones de los AO y comentarios habituales de los examinadores al alcance de tu mano.',
  },
  'study.skills.tl.ms.note': {
    en: 'These are summary reference cards written by teachers. For the official mark schemes, visit the awarding body websites.',
    ar: 'هذي بطاقات مرجعية تلخيصية كتبها معلّمون. لسلالم العلامات الرسمية، روح مواقع الهيئات المانحة.',
    es: 'Estas son tarjetas de referencia resumidas escritas por profesores. Para los esquemas de calificación oficiales, visita los sitios web de los organismos certificadores.',
  },
  // Revision Packs
  'study.skills.tl.rp.bc.this': {
    en: 'Revision Packs',
    ar: 'حزم المراجعة',
    es: 'Paquetes de repaso',
  },
  'study.skills.tl.rp.title': {
    en: 'Revision Packs',
    ar: 'حزم المراجعة',
    es: 'Paquetes de repaso',
  },
  'study.skills.tl.rp.subtitle': {
    en: 'Ready-to-print revision booklets for every major GCSE set text. Hand them out as homework, mock-revision packs, or self-study resources.',
    ar: 'كتيّبات مراجعة جاهزة للطباعة لكل نص GCSE مقرر كبير. وزّعها كواجب، أو حزم مراجعة للموكات، أو مصادر دراسة ذاتية.',
    es: 'Cuadernillos de repaso listos para imprimir para cada texto principal de GCSE. Repártelos como tarea, paquetes de repaso para simulacros o recursos de estudio autónomo.',
  },
  // Starters
  'study.skills.tl.st.bc.this': {
    en: 'Starter Activities',
    ar: 'الأنشطة الافتتاحية',
    es: 'Actividades de inicio',
  },
  'study.skills.tl.st.title': {
    en: '5-Minute Starter Activities',
    ar: 'أنشطة افتتاحية بخمس دقايق',
    es: 'Actividades de inicio de 5 minutos',
  },
  'study.skills.tl.st.subtitle': {
    en: '20 quick, classroom-ready starters to hook your class. Retrieval practice, vocabulary, analysis, and creative writing warm-ups that need no printing.',
    ar: '٢٠ نشاط افتتاحي سريع وجاهز للصف يشدّ طلابك. تدريب استرجاع، مفردات، تحليل، وتسخينات كتابة إبداعية ما تحتاج طباعة.',
    es: '20 actividades de inicio rápidas y listas para el aula que enganchan a tu clase. Práctica de recuperación, vocabulario, análisis y calentamientos de escritura creativa que no necesitan impresión.',
  },
  // Worksheets
  'study.skills.tl.ws.bc.this': { en: 'Worksheets', ar: 'أوراق العمل', es: 'Fichas de trabajo' },
  'study.skills.tl.ws.title': { en: 'Worksheets', ar: 'أوراق العمل', es: 'Fichas de trabajo' },
  'study.skills.tl.ws.subtitle': {
    en: '25 printable worksheets covering comprehension, analysis, writing scaffolds, and exam skills practice. Designed to be used straight from the printer.',
    ar: '٢٥ ورقة عمل قابلة للطباعة تغطي الفهم، التحليل، سقالات الكتابة، وتدريب مهارات الامتحان. مصممة عشان تستخدمها مباشرة من الطابعة.',
    es: '25 fichas de trabajo imprimibles que abarcan comprensión, análisis, andamiajes de escritura y práctica de destrezas de examen. Diseñadas para usarse directamente desde la impresora.',
  },

  // ─── Teacher Library detail-page breadcrumb current labels ───────
  'study.skills.tl.detail.pee.bc.this': {
    en: 'PEE Paragraph Builder',
    ar: 'PEE Paragraph Builder',
    es: 'PEE Paragraph Builder',
  },
  'study.skills.tl.detail.speed.bc.this': {
    en: 'Literary Device Speed Round',
    ar: 'Literary Device Speed Round',
    es: 'Literary Device Speed Round',
  },
  'study.skills.tl.detail.jekyll.bc.this': {
    en: 'Jekyll and Hyde',
    ar: 'Jekyll and Hyde',
    es: 'Jekyll and Hyde',
  },
}
