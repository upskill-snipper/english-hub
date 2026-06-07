/**
 * dictionary-b1-resources.ts - Bucket B Phase B1.
 * Curated EN + Khaleeji (Gulf) Arabic for the /resources shell + hub pages.
 *
 * Covers:
 *   - resources/layout.tsx  (GeoFaq heading)
 *   - resources/english-language/layout.tsx  (generateMetadata)
 *   - resources/english-literature/layout.tsx  (generateMetadata)
 *   - resources/glossary/layout.tsx  (generateMetadata)
 *   - resources/revision-notes/layout.tsx  (generateMetadata)
 *   - resources/techniques/layout.tsx  (generateMetadata)
 *   - resources/vocabulary/layout.tsx  (generateMetadata)
 *   - resources/teaching/layout.tsx  (generateMetadata)
 *   - resources/english-language/page.tsx  (hub page, 'use client')
 *   - resources/english-literature/page.tsx  (hub page, server)
 *   - resources/techniques/page.tsx  (hub page, 'use client')
 *   - resources/revision-notes/revision-notes-view.tsx  ('use client')
 *
 * Khaleeji conventions (per dictionary.ts header):
 *   وايد not كثيراً  |  الحين not الآن  |  ببلاش not مجاناً
 *   Brand/exam terms in Latin script: GCSE, IGCSE, AQA, OCR, Edexcel,
 *   WJEC, CAIE, AO1-AO6, SPaG.
 */
export const B1_RESOURCES_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── resources/layout.tsx ────────────────────────────────────────────
  'resources.layout.faq_heading': {
    en: 'English resources: common questions',
    ar: 'مصادر الإنجليزي: أسئلة شائعة',
    es: 'Recursos de inglés: preguntas frecuentes',
  },

  // ─── resources/english-language/layout.tsx - metadata ───────────────
  'resources.eng_lang.meta.title': {
    en: 'English Language Resources',
    ar: 'مصادر اللغة الإنجليزية',
    es: 'Recursos de English Language',
  },
  'resources.eng_lang.meta.desc': {
    en: 'GCSE and IGCSE English Language revision resources for AQA, Edexcel, OCR, WJEC and CAIE. Paper guides, techniques, writing skills, and grade boundaries.',
    ar: 'مصادر مراجعة اللغة الإنجليزية لـ GCSE و IGCSE لمجالس AQA و Edexcel و OCR و WJEC و CAIE. أدلة الأوراق والتقنيات ومهارات الكتابة وحدود الدرجات.',
    es: 'Recursos de repaso de English Language para GCSE e IGCSE de AQA, Edexcel, OCR, WJEC y CAIE. Guías de exámenes, técnicas, destrezas de escritura y límites de notas.',
  },
  'resources.eng_lang.meta.og_title': {
    en: 'English Language Resources - The English Hub',
    ar: 'مصادر اللغة الإنجليزية - The English Hub',
    es: 'Recursos de English Language - The English Hub',
  },

  // ─── resources/english-literature/layout.tsx - metadata ─────────────
  'resources.eng_lit.meta.title': {
    en: 'English Literature Revision - GCSE & IGCSE',
    ar: 'مراجعة الأدب الإنجليزي - GCSE و IGCSE',
    es: 'Repaso de English Literature - GCSE e IGCSE',
  },
  'resources.eng_lit.meta.desc': {
    en: 'Complete GCSE and IGCSE English Literature revision. Study guides for Shakespeare, prose, drama, and poetry with character analysis, themes, quotations, and essay techniques.',
    ar: 'مراجعة شاملة لـ GCSE و IGCSE في الأدب الإنجليزي. أدلة دراسة لشكسبير والنثر والمسرح والشعر مع تحليل الشخصيات والثيمات والاقتباسات وتقنيات المقال.',
    es: 'Repaso completo de English Literature para GCSE e IGCSE. Guías de estudio de Shakespeare, prosa, teatro y poesía con análisis de personajes, temas, citas y técnicas de ensayo.',
  },
  'resources.eng_lit.meta.og_title': {
    en: 'English Literature Revision - The English Hub',
    ar: 'مراجعة الأدب الإنجليزي - The English Hub',
    es: 'Repaso de English Literature - The English Hub',
  },

  // ─── resources/glossary/layout.tsx - metadata ───────────────────────
  'resources.glossary.meta.title': {
    en: 'English Glossary',
    ar: 'قاموس مصطلحات الإنجليزي',
    es: 'Glosario de inglés',
  },
  'resources.glossary.meta.desc': {
    en: 'Comprehensive glossary of English literary and linguistic terms for GCSE and IGCSE students. Definitions, examples, and exam-relevant terminology explained.',
    ar: 'قاموس شامل للمصطلحات الأدبية واللغوية الإنجليزية لطلاب GCSE و IGCSE. تعريفات وأمثلة وشرح للمصطلحات المهمة للامتحان.',
    es: 'Glosario completo de términos literarios y lingüísticos ingleses para estudiantes de GCSE e IGCSE. Definiciones, ejemplos y terminología relevante para el examen, explicada.',
  },
  'resources.glossary.meta.og_title': {
    en: 'English Glossary - The English Hub',
    ar: 'قاموس مصطلحات الإنجليزي - The English Hub',
    es: 'Glosario de inglés - The English Hub',
  },

  // ─── resources/revision-notes/layout.tsx - metadata ─────────────────
  'resources.rev_notes.meta.title': {
    en: 'Revision Notes',
    ar: 'ملاحظات المراجعة',
    es: 'Notas de repaso',
  },
  'resources.rev_notes.meta.desc': {
    en: 'Free GCSE English Literature revision notes for every set text. Character analysis, themes, key quotes, and exam tips for Macbeth, An Inspector Calls, and more.',
    ar: 'ملاحظات مراجعة مجانية لـ GCSE في الأدب الإنجليزي لكل النصوص المقررة. تحليل الشخصيات والثيمات والاقتباسات الرئيسية ونصائح الامتحان لماكبث و"An Inspector Calls" وغيرها.',
    es: 'Notas de repaso gratuitas de GCSE English Literature para cada texto obligatorio. Análisis de personajes, temas, citas clave y consejos de examen para Macbeth, An Inspector Calls y más.',
  },
  'resources.rev_notes.meta.og_title': {
    en: 'Revision Notes - The English Hub',
    ar: 'ملاحظات المراجعة - The English Hub',
    es: 'Notas de repaso - The English Hub',
  },

  // ─── resources/techniques/layout.tsx - metadata ──────────────────────
  'resources.techniques.meta.title': {
    en: 'English Techniques',
    ar: 'تقنيات الإنجليزي',
    es: 'Técnicas de inglés',
  },
  'resources.techniques.meta.desc': {
    en: 'Master language and structural techniques for GCSE English. Learn to identify and analyse literary devices, rhetorical techniques, and structural features.',
    ar: 'أتقن تقنيات اللغة والبنية لـ GCSE في الإنجليزي. تعلّم كيف تتعرّف على الأساليب الأدبية والتقنيات البلاغية والسمات البنيوية وتحلّلها.',
    es: 'Domina las técnicas lingüísticas y estructurales para GCSE English. Aprende a identificar y analizar recursos literarios, técnicas retóricas y rasgos estructurales.',
  },
  'resources.techniques.meta.og_title': {
    en: 'English Techniques - The English Hub',
    ar: 'تقنيات الإنجليزي - The English Hub',
    es: 'Técnicas de inglés - The English Hub',
  },

  // ─── resources/vocabulary/layout.tsx - metadata ──────────────────────
  'resources.vocab.meta.title': {
    en: 'Vocabulary Builder',
    ar: 'بناء المفردات',
    es: 'Constructor de vocabulario',
  },
  'resources.vocab.meta.desc': {
    en: 'Build your English vocabulary for GCSE exams. Academic, analytical, and descriptive word banks with definitions, examples, and practice exercises.',
    ar: 'طوِّر مفرداتك الإنجليزية لامتحانات GCSE. بنوك كلمات أكاديمية وتحليلية ووصفية مع تعريفات وأمثلة وتمارين تطبيقية.',
    es: 'Amplía tu vocabulario en inglés para los exámenes de GCSE. Bancos de palabras académicas, analíticas y descriptivas con definiciones, ejemplos y ejercicios de práctica.',
  },
  'resources.vocab.meta.og_title': {
    en: 'Vocabulary Builder - The English Hub',
    ar: 'بناء المفردات - The English Hub',
    es: 'Constructor de vocabulario - The English Hub',
  },

  // ─── resources/teaching/layout.tsx - metadata ────────────────────────
  'resources.teaching.meta.title': {
    en: 'Teaching Resources',
    ar: 'مصادر التدريس',
    es: 'Recursos didácticos',
  },
  'resources.teaching.meta.desc': {
    en: 'Free teaching resources for English teachers. Lesson plans, assessment materials, printable worksheets, and curriculum-aligned content for KS3 to IGCSE.',
    ar: 'مصادر تدريس مجانية لمعلّمي الإنجليزي. خطط دروس ومواد تقييم وأوراق عمل قابلة للطباعة ومحتوى متوافق مع المنهج من KS3 إلى IGCSE.',
    es: 'Recursos didácticos gratuitos para profesores de inglés. Planes de clase, materiales de evaluación, fichas de trabajo imprimibles y contenido alineado con el currículo desde KS3 hasta IGCSE.',
  },
  'resources.teaching.meta.og_title': {
    en: 'Teaching Resources - The English Hub',
    ar: 'مصادر التدريس - The English Hub',
    es: 'Recursos didácticos - The English Hub',
  },

  // ─── resources/english-language/page.tsx - hub (client) ─────────────
  // Hero
  'resources.eng_lang.hub.eyebrow': { en: 'GCSE & IGCSE', ar: 'GCSE و IGCSE', es: 'GCSE e IGCSE' },
  'resources.eng_lang.hub.h1': {
    en: 'English Language',
    ar: 'اللغة الإنجليزية',
    es: 'English Language',
  },
  'resources.eng_lang.hub.for_board': { en: 'For', ar: 'لـ', es: 'Para' },
  'resources.eng_lang.hub.subtitle': {
    en: 'Master reading analysis, creative writing, and writing for real purposes with comprehensive revision resources tailored to your exam board. Covering all five major boards with AI-powered feedback on your practice answers.',
    ar: 'أتقن تحليل القراءة والكتابة الإبداعية والكتابة للأغراض الحقيقية بمصادر مراجعة شاملة مخصّصة لبورد امتحانك. تغطي كل البوردات الخمسة الكبيرة مع ملاحظات بالذكاء الاصطناعي على إجاباتك التدريبية.',
    es: 'Domina el análisis de lectura, la escritura creativa y la escritura para propósitos reales con recursos de repaso completos adaptados a tu junta examinadora. Cubre las cinco principales juntas con comentarios impulsados por IA sobre tus respuestas de práctica.',
  },
  // Hero stats
  'resources.eng_lang.stat.boards': {
    en: 'Exam Boards',
    ar: 'مجالس الامتحان',
    es: 'Juntas examinadoras',
  },
  'resources.eng_lang.stat.boards_sub': {
    en: 'AQA, Edexcel, CAIE, OCR, WJEC',
    ar: 'AQA، Edexcel، CAIE، OCR، WJEC',
    es: 'AQA, Edexcel, CAIE, OCR, WJEC',
  },
  'resources.eng_lang.stat.papers': {
    en: 'Papers Covered',
    ar: 'أوراق الامتحان',
    es: 'Exámenes cubiertos',
  },
  'resources.eng_lang.stat.papers_sub': {
    en: 'Reading & writing exams',
    ar: 'امتحانات القراءة والكتابة',
    es: 'Exámenes de lectura y escritura',
  },
  'resources.eng_lang.stat.marks': {
    en: 'Total Marks',
    ar: 'مجموع الدرجات',
    es: 'Puntuación total',
  },
  'resources.eng_lang.stat.marks_sub': {
    en: 'Across all boards',
    ar: 'عبر كل البوردات',
    es: 'En todas las juntas',
  },
  'resources.eng_lang.stat.skills': {
    en: 'Key Skills',
    ar: 'المهارات الرئيسية',
    es: 'Destrezas clave',
  },
  'resources.eng_lang.stat.skills_sub': {
    en: 'Core areas of study',
    ar: 'المجالات الأساسية للدراسة',
    es: 'Áreas de estudio fundamentales',
  },
  // Board section
  'resources.eng_lang.choose_board': {
    en: 'Choose your exam board',
    ar: 'اختر بورد الامتحان مالك',
    es: 'Elige tu junta examinadora',
  },
  'resources.eng_lang.your_board': {
    en: 'Your exam board',
    ar: 'بورد امتحانك',
    es: 'Tu junta examinadora',
  },
  'resources.eng_lang.board_intro': {
    en: 'Choose your exam board below to access board-specific revision resources, marking guides, and exam tips. Not sure which board you study? Use our',
    ar: 'اختر بورد امتحانك أدناه للوصول إلى مصادر مراجعة خاصة بالبورد وأدلة التصحيح ونصائح الامتحان. مو متأكد من البورد الذي تدرس؟ استخدم',
    es: 'Elige tu junta examinadora a continuación para acceder a recursos de repaso específicos de la junta, guías de calificación y consejos de examen. ¿No estás seguro de qué junta estudias? Usa nuestro',
  },
  'resources.eng_lang.board_finder_link': {
    en: 'board finder',
    ar: 'أداة البحث عن البورد',
    es: 'buscador de juntas',
  },
  'resources.eng_lang.board_intro_suffix': { en: 'below.', ar: 'أدناه.', es: 'de abajo.' },
  'resources.eng_lang.viewing_your_board': {
    en: "You're viewing resources for your chosen exam board only.",
    ar: 'أنت الحين تشوف المصادر الخاصة ببورد امتحانك بس.',
    es: 'Estás viendo solo los recursos de la junta examinadora que has elegido.',
  },
  'resources.eng_lang.marks_total': {
    en: 'marks total',
    ar: 'درجة إجمالاً',
    es: 'puntos en total',
  },
  'resources.eng_lang.view_resources': {
    en: 'View resources',
    ar: 'شوف المصادر',
    es: 'Ver recursos',
  },
  // Board finder
  'resources.eng_lang.which_board': {
    en: 'Which board am I studying?',
    ar: 'أنا من أي بورد؟',
    es: '¿Qué junta estoy estudiando?',
  },
  'resources.eng_lang.not_sure': {
    en: 'Not sure which exam board your school uses? Here are some quick ways to find out, plus a simple helper to narrow it down.',
    ar: 'مو متأكد من البورد الذي تستخدمه مدرستك؟ هذي بعض الطرق السريعة لمعرفته، مع أداة بسيطة تساعدك تضيّق الخيارات.',
    es: '¿No estás seguro de qué junta examinadora usa tu colegio? Aquí tienes algunas formas rápidas de averiguarlo, además de una sencilla herramienta para acotarlo.',
  },
  'resources.eng_lang.how_to_check': {
    en: 'How to check your exam board',
    ar: 'كيف تعرف بورد امتحانك',
    es: 'Cómo comprobar tu junta examinadora',
  },
  'resources.eng_lang.quick_finder': {
    en: 'Quick board finder',
    ar: 'أداة البحث السريع عن البورد',
    es: 'Buscador rápido de juntas',
  },
  'resources.eng_lang.quick_finder_sub': {
    en: 'Answer the question below to narrow down your likely exam board.',
    ar: 'جاوب على السؤال أدناه عشان تضيّق خيارات البورد المحتمل.',
    es: 'Responde la pregunta de abajo para acotar tu probable junta examinadora.',
  },
  'resources.eng_lang.likely_boards': {
    en: 'You are most likely studying one of these boards:',
    ar: 'الغالب أنك تدرس أحد هذي البوردات:',
    es: 'Lo más probable es que estés estudiando una de estas juntas:',
  },
  'resources.eng_lang.start_again': {
    en: 'Start again',
    ar: 'ابدأ من جديد',
    es: 'Empezar de nuevo',
  },
  // Core skills
  'resources.eng_lang.core_skills.h2': {
    en: 'Core skills across all boards',
    ar: 'المهارات الأساسية عبر كل البوردات',
    es: 'Destrezas fundamentales en todas las juntas',
  },
  'resources.eng_lang.core_skills.sub': {
    en: 'Regardless of which exam board you study, these six key skill areas form the backbone of every GCSE English Language course.',
    ar: 'بصرف النظر عن البورد الذي تدرس فيه، هذي المجالات المهارية الست الرئيسية تشكّل العمود الفقري لكل مساق GCSE في اللغة الإنجليزية.',
    es: 'Independientemente de la junta examinadora que estudies, estas seis áreas de destrezas clave constituyen la columna vertebral de todo curso de GCSE English Language.',
  },
  // What does EL cover
  'resources.eng_lang.what_covers.h2': {
    en: 'What does English Language cover?',
    ar: 'ماذا يغطي مساق اللغة الإنجليزية؟',
    es: '¿Qué abarca English Language?',
  },
  'resources.eng_lang.what_covers.p1': {
    en: 'GCSE English Language develops your ability to read critically, analyse how writers use language and structure, and produce your own high-quality writing across a range of forms and purposes. It is a core qualification required by most employers and further education providers, and a grade 4 or above is typically needed for sixth form, college, and apprenticeship entry.',
    ar: 'GCSE في اللغة الإنجليزية ينمّي قدرتك على القراءة النقدية وتحليل كيف يستخدم الكتّاب اللغة والبنية، وإنتاج كتاباتك الخاصة عالية الجودة عبر أشكال وأغراض متنوعة. هو مؤهل أساسي تطلبه معظم جهات العمل ومزودو التعليم العالي، والدرجة 4 أو أعلى مطلوبة عادةً لدخول الصف السادس والكلية والتدريب المهني.',
    es: 'GCSE English Language desarrolla tu capacidad de leer de forma crítica, analizar cómo usan los escritores el lenguaje y la estructura, y producir tu propia escritura de alta calidad en una variedad de formas y propósitos. Es una titulación fundamental que exigen la mayoría de los empleadores y proveedores de educación superior, y normalmente se necesita una nota de 4 o superior para acceder al sixth form, la universidad y los programas de formación profesional.',
  },
  'resources.eng_lang.what_covers.p2': {
    en: 'The course is assessed through written examinations (and a spoken language component in most boards). You will study a mix of fiction and non-fiction texts and develop both analytical and creative writing skills that are transferable to A Level and beyond.',
    ar: 'يُقيَّم المساق من خلال امتحانات كتابية (ومكوّن اللغة المنطوقة في معظم البوردات). ستدرس مزيجاً من النصوص الخيالية وغير الخيالية وتطوّر مهارات الكتابة التحليلية والإبداعية التي يمكن نقلها إلى المرحلة A Level وما بعدها.',
    es: 'El curso se evalúa mediante exámenes escritos (y un componente de lengua hablada en la mayoría de las juntas). Estudiarás una mezcla de textos de ficción y de no ficción y desarrollarás destrezas de escritura tanto analítica como creativa que son transferibles a A Level y más allá.',
  },
  // AI feedback callout
  'resources.eng_lang.ai.h2': {
    en: 'Get instant AI feedback on your answers',
    ar: 'احصل على ملاحظات فورية بالذكاء الاصطناعي على إجاباتك',
    es: 'Recibe comentarios con IA instantáneos sobre tus respuestas',
  },
  'resources.eng_lang.ai.sub': {
    en: 'Practice exam-style questions and receive detailed, marking-guide-aligned feedback powered by AI. Our system analyses your response against the assessment objectives for your specific exam board and provides targeted improvement suggestions.',
    ar: 'تدرّب على أسئلة بأسلوب الامتحان واحصل على ملاحظات مفصّلة ومتوافقة مع دليل التصحيح مدعومة بالذكاء الاصطناعي. يحلّل نظامنا إجابتك مقارنةً بأهداف التقييم لبوردك المحدد ويقدّم اقتراحات تحسين مستهدفة.',
    es: 'Practica preguntas de tipo examen y recibe comentarios detallados y alineados con la guía de calificación impulsados por IA. Nuestro sistema analiza tu respuesta según los objetivos de evaluación de tu junta examinadora concreta y ofrece sugerencias de mejora específicas.',
  },
  'resources.eng_lang.ai.cta_try': {
    en: 'Try practice questions',
    ar: 'جرّب أسئلة التدريب',
    es: 'Prueba las preguntas de práctica',
  },
  'resources.eng_lang.ai.cta_how': {
    en: 'See how it works',
    ar: 'شوف كيف يشتغل',
    es: 'Ver cómo funciona',
  },
  // Explore more
  'resources.eng_lang.more.h2': {
    en: 'Explore more resources',
    ar: 'استكشف مصادر أكثر',
    es: 'Explora más recursos',
  },
  'resources.eng_lang.more.sub': {
    en: 'Strengthen your English Language skills with these additional study areas.',
    ar: 'قوّي مهاراتك في اللغة الإنجليزية بهذي المجالات الدراسية الإضافية.',
    es: 'Refuerza tus destrezas de English Language con estas áreas de estudio adicionales.',
  },
  'resources.eng_lang.more.explore': { en: 'Explore', ar: 'استكشف', es: 'Explorar' },
  // Jump to board bar
  'resources.eng_lang.jump_board': {
    en: 'Jump to your board',
    ar: 'روح لبوردك',
    es: 'Ir a tu junta',
  },

  // ─── resources/english-literature/page.tsx - hub (server) ───────────
  'resources.eng_lit.hub.eyebrow': {
    en: 'GCSE & IGCSE Revision',
    ar: 'مراجعة GCSE و IGCSE',
    es: 'Repaso de GCSE e IGCSE',
  },
  'resources.eng_lit.hub.h1': {
    en: 'English Literature',
    ar: 'الأدب الإنجليزي',
    es: 'English Literature',
  },
  'resources.eng_lit.hub.for_board': { en: 'For', ar: 'لـ', es: 'Para' },
  'resources.eng_lit.hub.subtitle': {
    en: 'In-depth study guides for Shakespeare, prose, drama, and poetry. Character analysis, theme breakdowns, key quotations, essay techniques, and exam preparation - everything you need in one place.',
    ar: 'أدلة دراسة متعمّقة لشكسبير والنثر والمسرح والشعر. تحليل الشخصيات وتفكيك الثيمات والاقتباسات الرئيسية وتقنيات المقال والتحضير للامتحان - كل اللي تحتاجه في مكان واحد.',
    es: 'Guías de estudio en profundidad de Shakespeare, prosa, teatro y poesía. Análisis de personajes, desglose de temas, citas clave, técnicas de ensayo y preparación del examen: todo lo que necesitas en un solo lugar.',
  },
  // Stat labels
  'resources.eng_lit.stat.texts': {
    en: 'Set Texts Covered',
    ar: 'النصوص المقررة',
    es: 'Textos obligatorios cubiertos',
  },
  'resources.eng_lit.stat.quotes': {
    en: 'Key Quotations',
    ar: 'اقتباسات رئيسية',
    es: 'Citas clave',
  },
  'resources.eng_lit.stat.notes': {
    en: 'Revision Notes',
    ar: 'ملاحظات مراجعة',
    es: 'Notas de repaso',
  },
  'resources.eng_lit.stat.questions': {
    en: 'Practice Questions',
    ar: 'أسئلة تدريبية',
    es: 'Preguntas de práctica',
  },
  // What it involves
  'resources.eng_lit.what.h2': {
    en: 'What does GCSE English Literature involve?',
    ar: 'ماذا يتضمّن GCSE في الأدب الإنجليزي؟',
    es: '¿Qué implica GCSE English Literature?',
  },
  'resources.eng_lit.what.body': {
    en: 'GCSE English Literature requires you to read, analyse, and respond to a range of literary texts from different periods and genres. You will develop skills in close reading, critical analysis, comparison, and essay writing - demonstrating how writers create meaning through language, form, and structure. These skills are universal across all exam boards; while the specific texts and paper structures vary, the core analytical approach remains the same.',
    ar: 'يتطلّب GCSE في الأدب الإنجليزي قراءة وتحليل الاستجابة لمجموعة من النصوص الأدبية من حقب وأنواع مختلفة. ستطوّر مهارات القراءة الدقيقة والتحليل النقدي والمقارنة وكتابة المقال - مع إظهار كيف يصنع الكتّاب المعنى من خلال اللغة والشكل والبنية. هذي المهارات عالمية عبر كل بوردات الامتحان؛ وإن كانت النصوص المحددة وهياكل الأوراق تختلف، يبقى النهج التحليلي الأساسي نفسه.',
    es: 'GCSE English Literature requiere que leas, analices y respondas a una variedad de textos literarios de distintos periodos y géneros. Desarrollarás destrezas de lectura atenta, análisis crítico, comparación y redacción de ensayos, demostrando cómo los escritores crean significado a través del lenguaje, la forma y la estructura. Estas destrezas son universales en todas las juntas examinadoras; aunque los textos concretos y las estructuras de los exámenes varían, el enfoque analítico fundamental sigue siendo el mismo.',
  },
  // Study guides section
  'resources.eng_lit.guides.h2': {
    en: 'Set text study guides',
    ar: 'أدلة دراسة النصوص المقررة',
    es: 'Guías de estudio de los textos obligatorios',
  },
  'resources.eng_lit.guides.sub': {
    en: 'Detailed revision guides covering plot, characters, themes, key quotations, context, and essay planning. Each guide works for any exam board studying that text.',
    ar: 'أدلة مراجعة مفصّلة تغطي الحبكة والشخصيات والثيمات والاقتباسات الرئيسية والسياق وتخطيط المقال. كل دليل يصلح لأي بورد امتحان يدرس ذلك النص.',
    es: 'Guías de repaso detalladas que abarcan el argumento, los personajes, los temas, las citas clave, el contexto y la planificación del ensayo. Cada guía sirve para cualquier junta examinadora que estudie ese texto.',
  },
  'resources.eng_lit.guides.view': {
    en: 'View study guide',
    ar: 'شوف دليل الدراسة',
    es: 'Ver guía de estudio',
  },
  // Poetry anthologies
  'resources.eng_lit.poetry.h2': {
    en: 'Poetry anthology guides',
    ar: 'أدلة مجموعات الشعر',
    es: 'Guías de antologías de poesía',
  },
  'resources.eng_lit.poetry.sub': {
    en: 'Poem-by-poem analysis with stanza breakdowns, technique identification, thematic links, and comparison pairs.',
    ar: 'تحليل قصيدة بقصيدة مع تفكيك المقاطع وتحديد التقنيات والروابط الثيماتية وأزواج المقارنة.',
    es: 'Análisis poema por poema con desglose de estrofas, identificación de técnicas, enlaces temáticos y parejas de comparación.',
  },
  // Essay writing tips
  'resources.eng_lit.essay.h2': {
    en: 'How to write a top-mark literature essay',
    ar: 'كيف تكتب مقال أدب بأعلى درجة',
    es: 'Cómo escribir un ensayo de literatura de máxima nota',
  },
  'resources.eng_lit.essay.sub': {
    en: 'These techniques apply across all exam boards and question types. Master them and you will consistently reach the higher mark bands.',
    ar: 'هذي التقنيات تنطبق على كل بوردات الامتحان وأنواع الأسئلة. أتقنها وستصل باستمرار لمستويات الدرجات الأعلى.',
    es: 'Estas técnicas se aplican a todas las juntas examinadoras y tipos de preguntas. Domínalas y alcanzarás de forma constante las bandas de notas más altas.',
  },
  // Example paragraph
  'resources.eng_lit.example.h2': {
    en: 'Example analytical paragraph',
    ar: 'فقرة تحليلية نموذجية',
    es: 'Párrafo analítico de ejemplo',
  },
  'resources.eng_lit.example.sub': {
    en: 'See how all six essay tips come together in a single paragraph that would score in the top mark band.',
    ar: 'شوف كيف تتجمّع النصائح الست للمقال في فقرة واحدة تسجّل في أعلى نطاق درجات.',
    es: 'Mira cómo se combinan los seis consejos de ensayo en un solo párrafo que obtendría la banda de notas más alta.',
  },
  'resources.eng_lit.example.question_label': { en: 'Question:', ar: 'السؤال:', es: 'Pregunta:' },
  'resources.eng_lit.example.effective_label': {
    en: 'What makes this effective:',
    ar: 'شو اللي يخلّيها فعّالة:',
    es: 'Qué lo hace eficaz:',
  },
  // AI callout
  'resources.eng_lit.ai.h2': {
    en: 'Get AI-powered essay feedback',
    ar: 'احصل على ملاحظات مقال بالذكاء الاصطناعي',
    es: 'Recibe comentarios de ensayo impulsados por IA',
  },
  'resources.eng_lit.ai.sub': {
    en: 'Paste your literature essay and receive instant, detailed feedback on your argument, use of evidence, analysis of language, and exam technique. Our AI marker is calibrated to GCSE marking guides.',
    ar: 'الصق مقالك الأدبي واحصل على ملاحظات فورية ومفصّلة على حجّتك واستخدام الأدلة وتحليل اللغة وتقنية الامتحان. مصحّح الذكاء الاصطناعي مالتنا معايَر وفق أدلة تصحيح GCSE.',
    es: 'Pega tu ensayo de literatura y recibe comentarios instantáneos y detallados sobre tu argumento, el uso de evidencias, el análisis del lenguaje y la técnica de examen. Nuestro corrector con IA está calibrado según las guías de calificación de GCSE.',
  },
  'resources.eng_lit.ai.cta': { en: 'Try it free', ar: 'جرّبه ببلاش', es: 'Pruébalo gratis' },
  // More revision resources
  'resources.eng_lit.more.h2': {
    en: 'More revision resources',
    ar: 'مصادر مراجعة أكثر',
    es: 'Más recursos de repaso',
  },
  'resources.eng_lit.more.sub': {
    en: 'Strengthen specific skills that markers reward most highly.',
    ar: 'قوِّ المهارات المحددة التي يكافئها المصحّحون أكثر.',
    es: 'Refuerza las destrezas concretas que más recompensan los correctores.',
  },
  // Exam info
  'resources.eng_lit.exam.h2': {
    en: 'Exam information by board',
    ar: 'معلومات الامتحان حسب البورد',
    es: 'Información del examen por junta',
  },
  'resources.eng_lit.exam.sub': {
    en: 'Select your board below to view papers, grade boundaries, and board-specific resources.',
    ar: 'اختر بوردك أدناه لعرض الأوراق وحدود الدرجات والمصادر الخاصة بالبورد.',
    es: 'Selecciona tu junta a continuación para ver los exámenes, los límites de notas y los recursos específicos de la junta.',
  },
  'resources.eng_lit.exam.view_board': {
    en: 'View board resources',
    ar: 'شوف مصادر البورد',
    es: 'Ver recursos de la junta',
  },

  // ─── resources/techniques/page.tsx - hub (client) ────────────────────
  'resources.techniques.hub.eyebrow': {
    en: 'Techniques Reference',
    ar: 'مرجع التقنيات',
    es: 'Referencia de técnicas',
  },
  'resources.techniques.hub.h1': {
    en: 'Master Every Technique',
    ar: 'أتقن كل تقنية',
    es: 'Domina cada técnica',
  },
  'resources.techniques.hub.subtitle': {
    en: 'The definitive guide to 60+ language and structural techniques for GCSE English. Definitions, examples, effects, and exam-ready sentence starters - everything you need in one place.',
    ar: 'الدليل الشامل لأكثر من 60 تقنية لغوية وبنيوية لـ GCSE في الإنجليزي. تعريفات وأمثلة وتأثيرات وبدايات جمل جاهزة للامتحان - كل اللي تحتاجه في مكان واحد.',
    es: 'La guía definitiva de más de 60 técnicas lingüísticas y estructurales para GCSE English. Definiciones, ejemplos, efectos y comienzos de frase listos para el examen: todo lo que necesitas en un solo lugar.',
  },
  'resources.techniques.hub.search_placeholder': {
    en: 'Search techniques... e.g. metaphor, sibilance',
    ar: 'دوّر على التقنيات... مثلاً الاستعارة، التكرار الصفيري',
    es: 'Busca técnicas... p. ej. metáfora, sibilancia',
  },
  'resources.techniques.hub.cta_lang': {
    en: 'Language Devices',
    ar: 'الأساليب اللغوية',
    es: 'Recursos lingüísticos',
  },
  'resources.techniques.hub.cta_struct': {
    en: 'Structural Devices',
    ar: 'الأساليب البنيوية',
    es: 'Recursos estructurales',
  },
  // Browse by category
  'resources.techniques.hub.browse_h2': {
    en: 'Browse by Category',
    ar: 'تصفّح حسب التصنيف',
    es: 'Explorar por categoría',
  },
  'resources.techniques.hub.browse_sub': {
    en: 'All techniques are organised into two main categories. Each entry includes a definition, example, effect analysis, and a sentence starter you can use in your exam.',
    ar: 'كل التقنيات مرتّبة في تصنيفين رئيسيين. كل مدخل يتضمّن تعريفاً ومثالاً وتحليل تأثير وبداية جملة تقدر تستخدمها في امتحانك.',
    es: 'Todas las técnicas están organizadas en dos categorías principales. Cada entrada incluye una definición, un ejemplo, un análisis del efecto y un comienzo de frase que puedes usar en tu examen.',
  },
  'resources.techniques.hub.techniques_count_suffix': {
    en: 'techniques',
    ar: 'تقنية',
    es: 'técnicas',
  },
  // WHW method
  'resources.techniques.hub.whw.h2': {
    en: 'The What-How-Why method',
    ar: 'طريقة ماذا-كيف-لماذا',
    es: 'El método Qué-Cómo-Por qué',
  },
  'resources.techniques.hub.whw.sub': {
    en: 'Use this three-step framework for every technique you identify in an exam response.',
    ar: 'استخدم هذا الإطار الثلاثي لكل تقنية تحدّدها في إجابة الامتحان.',
    es: 'Usa este marco de tres pasos para cada técnica que identifiques en una respuesta de examen.',
  },
  // Quick reference filter
  'resources.techniques.hub.qr.h2': {
    en: 'Quick-reference guide',
    ar: 'دليل المرجع السريع',
    es: 'Guía de consulta rápida',
  },
  'resources.techniques.hub.qr.sub': {
    en: 'The most frequently tested techniques for GCSE English. Click a name to see the full entry.',
    ar: 'أكثر التقنيات التي يُختبر فيها في GCSE في الإنجليزي. انقر على الاسم لعرض المدخل الكامل.',
    es: 'Las técnicas que más se evalúan en GCSE English. Haz clic en un nombre para ver la entrada completa.',
  },
  'resources.techniques.hub.filter_all': { en: 'All', ar: 'الكل', es: 'Todas' },
  'resources.techniques.hub.filter_lang': { en: 'Language', ar: 'لغوية', es: 'Lingüística' },
  'resources.techniques.hub.filter_struct': { en: 'Structural', ar: 'بنيوية', es: 'Estructural' },
  'resources.techniques.hub.no_results': {
    en: 'No techniques found',
    ar: 'ما لقينا تقنيات',
    es: 'No se encontraron técnicas',
  },
  // Exam tips
  'resources.techniques.hub.tips.h2': {
    en: 'Exam writing tips',
    ar: 'نصائح كتابة الامتحان',
    es: 'Consejos de escritura para el examen',
  },
  'resources.techniques.hub.tips.sub': {
    en: 'Apply these six principles to every technique-based response for consistently high marks.',
    ar: 'طبّق هذي المبادئ الست على كل إجابة مبنية على تقنية عشان تحصل على درجات عالية باستمرار.',
    es: 'Aplica estos seis principios a cada respuesta basada en técnicas para obtener notas altas de forma constante.',
  },

  // ─── resources/revision-notes/revision-notes-view.tsx - client ───────
  'resources.rev_notes.hub.h1': {
    en: 'Revision Notes',
    ar: 'ملاحظات المراجعة',
    es: 'Notas de repaso',
  },
  'resources.rev_notes.hub.for_board': { en: 'For', ar: 'لـ', es: 'Para' },
  'resources.rev_notes.hub.subtitle': {
    en: 'Comprehensive, exam-focused revision guides for every major GCSE English Literature set text. Each guide includes plot summaries, character analysis, key quotations with analysis, thematic exploration, historical context, and exam technique advice.',
    ar: 'أدلة مراجعة شاملة ومركّزة على الامتحان لكل نص مقرر رئيسي في GCSE في الأدب الإنجليزي. كل دليل يتضمّن ملخصات الحبكة وتحليل الشخصيات والاقتباسات الرئيسية مع التحليل واستكشاف الثيمات والسياق التاريخي ونصائح تقنية الامتحان.',
    es: 'Guías de repaso completas y centradas en el examen para cada texto obligatorio principal de GCSE English Literature. Cada guía incluye resúmenes del argumento, análisis de personajes, citas clave con análisis, exploración temática, contexto histórico y consejos de técnica de examen.',
  },
  'resources.rev_notes.hub.search_placeholder': {
    en: 'Search texts, authors, or themes...',
    ar: 'دوّر على النصوص أو المؤلفين أو الثيمات...',
    es: 'Busca textos, autores o temas...',
  },
  'resources.rev_notes.hub.no_results.h': {
    en: 'No texts found',
    ar: 'ما لقينا نصوص',
    es: 'No se encontraron textos',
  },
  'resources.rev_notes.hub.no_results.sub': {
    en: 'Try adjusting your search term.',
    ar: 'حاول تعدّل مصطلح البحث.',
    es: 'Prueba a ajustar tu término de búsqueda.',
  },
  'resources.rev_notes.hub.clear_filters': {
    en: 'Clear filters',
    ar: 'امسح الفلاتر',
    es: 'Borrar filtros',
  },
  'resources.rev_notes.hub.view_guide': {
    en: 'View revision guide',
    ar: 'شوف دليل المراجعة',
    es: 'Ver guía de repaso',
  },
  'resources.rev_notes.hub.boards_prefix': { en: 'For:', ar: 'لـ:', es: 'Para:' },
}
