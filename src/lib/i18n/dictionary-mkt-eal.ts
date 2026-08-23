/**
 * dictionary-mkt-eal.ts - /eal marketing page completion.
 *
 * Bilingual EN + Khaleeji (Gulf) Arabic supplement for the EAL landing
 * hub at `src/app/eal/page.tsx`. The page was partially bilingual via
 * inline `isAr ? AR : EN` ternaries and a local `loc()` shape-resolver;
 * this shard externalises every remaining hardcoded English literal
 * (institutional hero, benefit cards, "what teachers see" block) and
 * folds the existing inline bilingual ternaries onto stable keys so
 * future copy edits don't have to chase JSX.
 *
 * Namespace `mkt.eal.*` - deliberately disjoint from any existing
 * `eal.*` keys (curriculum / category labels resolved through
 * `src/lib/eal/types.ts`) so this shard is purely additive and cannot
 * collide with the partial wiring already on the page.
 *
 * The shard is consumed in-file by the EAL hub page (imported directly
 * and resolved through a tiny page-local lookup that wraps `useT()`),
 * so `dictionary.ts` is not modified. Once any future master dictionary
 * pass wires this in, the page lookup degrades gracefully - entries
 * here would just be hit twice with identical results.
 *
 * Khaleeji conventions match `dictionary-homepage.ts` and the existing
 * EAL curriculum copy in `src/lib/eal/curriculum.ts`: formal-but-warm,
 * direct address, Gulf lexis (وايد, هذي, مو, ما، يجي…). Western digits
 * throughout. Technical tokens kept in Latin: GCSE / IGCSE / AQA /
 * Edexcel / OCR / AO / CEFR / AI / IELTS / SPaG / GCC / SVO / VSO /
 * A2 / B1 / B2 / C1.
 *
 * Templated keys use the literal placeholder `{level}` for the CEFR
 * band letter - the page replaces it at render time so a single key
 * covers all four bands (A2/B1/B2/C1).
 */

export const MKT_EAL_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ─── Institutional hero (top of page - schools framing) ─────────────
  'mkt.eal.inst.badge': {
    en: 'For schools',
    ar: 'للمدارس',
    es: 'Para escuelas',
  },
  'mkt.eal.inst.heading': {
    en: 'Structured English support for EAL learners',
    ar: 'دعم إنجليزي منظّم لطلاب الـ EAL',
    es: 'Apoyo estructurado de inglés para estudiantes EAL',
  },
  'mkt.eal.inst.lead': {
    en: 'Designed to help international and GCC schools support EAL learners across vocabulary, reading fluency, comprehension, grammar and writing confidence - with teacher visibility and progress reporting.',
    ar: 'مصمّم عشان يساعد المدارس الدولية ومدارس الـ GCC على دعم طلاب الـ EAL في المفردات، طلاقة القراءة، الفهم، القواعد، والثقة في الكتابة - مع رؤية واضحة للمعلّم وتقارير تتبّع التقدّم.',
    es: 'Diseñado para ayudar a las escuelas internacionales y del GCC a apoyar a los estudiantes EAL en vocabulario, fluidez lectora, comprensión, gramática y confianza al escribir, con visibilidad para el profesor e informes de progreso.',
  },
  'mkt.eal.inst.cta_schools': {
    en: 'For schools',
    ar: 'للمدارس',
    es: 'Para escuelas',
  },
  'mkt.eal.inst.cta_test': {
    en: 'Take the CEFR placement test',
    ar: 'سوّ اختبار تحديد المستوى CEFR',
    es: 'Haz la prueba de nivel CEFR',
  },

  // ─── 3 benefit cards row ────────────────────────────────────────────
  'mkt.eal.benefit.curriculum.title': {
    en: 'Vocabulary, reading and writing - structured',
    ar: 'المفردات والقراءة والكتابة - بشكل منظّم',
    es: 'Vocabulario, lectura y escritura, de forma estructurada',
  },
  'mkt.eal.benefit.curriculum.desc': {
    en: 'A coherent progression across vocabulary breadth, reading fluency, comprehension, grammar accuracy and writing confidence - graded across CEFR levels so learners always know the next step.',
    ar: 'تدرّج متماسك يشمل اتساع المفردات، طلاقة القراءة، الفهم، دقة القواعد، والثقة في الكتابة - مرتّب على مستويات CEFR عشان الطالب يعرف الخطوة الجاية على طول.',
    es: 'Una progresión coherente que abarca amplitud de vocabulario, fluidez lectora, comprensión, precisión gramatical y confianza al escribir, graduada por niveles CEFR para que los estudiantes siempre conozcan el siguiente paso.',
  },
  'mkt.eal.benefit.intl.title': {
    en: 'Designed for international schools',
    ar: 'مصمّم للمدارس الدولية',
    es: 'Diseñado para escuelas internacionales',
  },
  'mkt.eal.benefit.intl.desc': {
    en: 'Built with Qatar, the wider GCC and IGCSE/GCSE classrooms in mind - content addresses the specific language gaps Arabic-L1 learners face when working through a UK-aligned curriculum.',
    ar: 'مبني وفي البال قطر ودول الـ GCC وصفوف الـ IGCSE/GCSE - المحتوى يعالج بالضبط الفجوات اللغوية اللي يواجهها متحدّث العربي وقت يدرس منهج بريطاني.',
    es: 'Creado pensando en Qatar, el conjunto del GCC y las aulas de IGCSE/GCSE: el contenido aborda las carencias lingüísticas concretas a las que se enfrentan los estudiantes con árabe como L1 al cursar un currículo alineado con el del Reino Unido.',
  },
  'mkt.eal.benefit.teacher.title': {
    en: 'Teacher visibility and progress reporting',
    ar: 'رؤية المعلّم وتقارير التقدّم',
    es: 'Visibilidad para el profesor e informes de progreso',
  },
  'mkt.eal.benefit.teacher.desc': {
    en: "Leadership and EAL coordinators get the oversight they need: where learners are, where they're stuck, and where targeted support will move the needle the most.",
    ar: 'الإدارة ومنسّقو الـ EAL يحصلون الرؤية اللي يحتاجونها: وين وصل الطالب، ووين متعثّر، ووين الدعم المركّز يسوّي فرق فعلي.',
    es: 'La dirección y los coordinadores de EAL obtienen la supervisión que necesitan: dónde están los estudiantes, dónde se atascan y dónde el apoyo específico marcará más la diferencia.',
  },

  // ─── "What teachers see" card ───────────────────────────────────────
  'mkt.eal.teacher_view.title': {
    en: 'What teachers see',
    ar: 'شنو يشوف المعلّم',
    es: 'Lo que ven los profesores',
  },
  'mkt.eal.teacher_view.desc': {
    en: 'Teacher view: progress by learner, by skill, and by year group, so departments can plan targeted EAL support.',
    ar: 'صفحة المعلّم: تقدّم لكل طالب، وحسب المهارة، وحسب الصف الدراسي - عشان الأقسام تقدر تخطّط دعم EAL مركّز.',
    es: 'Vista del profesor: progreso por estudiante, por destreza y por curso, para que los departamentos puedan planificar un apoyo EAL específico.',
  },

  // ─── Learner hero (second hero, was inline ternaries) ───────────────
  'mkt.eal.hero.badge': {
    en: 'English for Arabic Speakers',
    ar: 'الإنجليزية للناطقين بالعربية',
    es: 'Inglés para hablantes de árabe',
  },
  'mkt.eal.hero.heading': {
    en: 'English Skills for Arabic Speakers',
    ar: 'تعلّم الإنجليزية: المهارات الأساسية للناطقين بالعربية',
    es: 'Destrezas de inglés para hablantes de árabe',
  },
  'mkt.eal.hero.lead': {
    en: 'Bilingual lessons targeting exactly where Arabic L1 students stumble when studying English for UK GCSE/IGCSE: first-language transfer errors (word order, tenses, articles, prepositions), graded across CEFR levels A2 to C1. Start with the free placement test to find your level.',
    ar: 'دروس ثنائية اللغة مركّزة على النقاط اللي يتعثّر فيها متحدّث العربي وقت دراسة الإنجليزي لامتحانات GCSE / IGCSE البريطانية: أخطاء النقل من العربي (ترتيب الكلمات، الأزمنة، أدوات التعريف، حروف الجر)، ومدرّجة على مستويات CEFR من A2 إلى C1. ابدأ باختبار تحديد المستوى المجاني عشان تعرف من وين تبدأ.',
    es: 'Lecciones bilingües centradas exactamente en los puntos donde tropiezan los estudiantes con árabe como L1 al estudiar inglés para el GCSE/IGCSE del Reino Unido: errores de transferencia de la primera lengua (orden de las palabras, tiempos verbales, artículos, preposiciones), graduadas por niveles CEFR de A2 a C1. Empieza con la prueba de nivel gratuita para descubrir tu nivel.',
  },

  // Hero stat box labels (value chips are numeric / band letters / "Free")
  'mkt.eal.hero_stat.lessons': {
    en: 'lessons',
    ar: 'دروس',
    es: 'lecciones',
  },
  'mkt.eal.hero_stat.cefr_levels': {
    en: 'CEFR levels',
    ar: 'مستويات CEFR',
    es: 'niveles CEFR',
  },
  'mkt.eal.hero_stat.exercises': {
    en: 'exercises',
    ar: 'تمارين',
    es: 'ejercicios',
  },
  'mkt.eal.hero_stat.free_value': {
    en: 'Free',
    ar: 'مجاني',
    es: 'Gratis',
  },
  'mkt.eal.hero_stat.placement_test_label': {
    en: 'placement test',
    ar: 'اختبار تحديد المستوى',
    es: 'prueba de nivel',
  },

  // ─── Primary CTA: CEFR placement test ──────────────────────────────
  'mkt.eal.cta.start_here_badge': {
    en: 'Start here',
    ar: 'ابدأ من هنا',
    es: 'Empieza aquí',
  },
  'mkt.eal.cta.heading': {
    en: 'CEFR Placement Test',
    ar: 'اختبار تحديد المستوى (CEFR)',
    es: 'Prueba de nivel CEFR',
  },
  'mkt.eal.cta.lead': {
    en: 'A short, free test that pinpoints your level from A2 to C1 and routes you straight to the lessons you most need - built around the weak points common to Arabic speakers.',
    ar: 'اختبار قصير ومجاني يحدّد مستواك من A2 إلى C1، ويوجّهك مباشرة للدروس اللي تحتاجها أكثر - مصمّم على نقاط الضعف الشائعة عند متحدّث العربي.',
    es: 'Una prueba breve y gratuita que determina tu nivel de A2 a C1 y te dirige directamente a las lecciones que más necesitas, diseñada en torno a las debilidades comunes de los hablantes de árabe.',
  },
  'mkt.eal.cta.button': {
    en: 'Start the test',
    ar: 'ابدأ الاختبار',
    es: 'Empezar la prueba',
  },

  // ─── Topic section heading + per-card overlays ─────────────────────
  'mkt.eal.topics.heading': {
    en: 'Lessons by skill',
    ar: 'الدروس حسب المهارة',
    es: 'Lecciones por destreza',
  },
  // Per-card counters (singular/plural rendering is left as the original
  // file shipped - EN uses plural noun, AR uses generic noun - verbatim).
  'mkt.eal.topics.examples_label': {
    en: 'examples',
    ar: 'مثال',
    es: 'ejemplos',
  },
  'mkt.eal.topics.exercises_label': {
    en: 'exercises',
    ar: 'تمرين',
    es: 'ejercicios',
  },
  'mkt.eal.topics.open_lesson': {
    en: 'Open lesson',
    ar: 'افتح الدرس',
    es: 'Abrir lección',
  },

  // ─── Practice & assessment ──────────────────────────────────────────
  'mkt.eal.practice.heading': {
    en: 'Practice & assessment',
    ar: 'التدريب والتقييم',
    es: 'Práctica y evaluación',
  },
  // Banded mock-exam cards. `{level}` placeholder is replaced at render
  // time with the band letter (A2 / B1 / B2 / C1).
  'mkt.eal.practice.mock_exam_title': {
    en: '{level} Mock Exam',
    ar: 'امتحان تجريبي {level}',
    es: 'Examen de prueba {level}',
  },
  'mkt.eal.practice.mock_exam_subtitle': {
    en: '{level} band · CEFR',
    ar: 'مستوى {level} · CEFR',
    es: 'nivel {level} · CEFR',
  },
  'mkt.eal.practice.mock_exam_body': {
    en: 'A full {level}-level practice exam with exam-style questions and instant marking.',
    ar: 'امتحان تدريبي كامل بمستوى {level} بأسئلة بأسلوب الامتحان وتصحيح فوري.',
    es: 'Un examen de práctica completo de nivel {level} con preguntas de estilo examen y corrección instantánea.',
  },
  'mkt.eal.practice.start_practice': {
    en: 'Start practice',
    ar: 'ابدأ التدريب',
    es: 'Empezar la práctica',
  },

  // AI writing & speaking card
  'mkt.eal.practice.ai_badge': {
    en: 'AI',
    ar: 'ذكاء اصطناعي',
    es: 'IA',
  },
  'mkt.eal.practice.ai_title': {
    en: 'AI writing & speaking',
    ar: 'تقييم الكتابة والمحادثة بالذكاء الاصطناعي',
    es: 'Escritura y expresión oral con IA',
  },
  'mkt.eal.practice.ai_subtitle': {
    en: 'inside every lesson',
    ar: 'داخل كل درس',
    es: 'dentro de cada lección',
  },
  'mkt.eal.practice.ai_body': {
    en: 'Every lesson includes reading, listening, writing and speaking practice - writing and speaking are AI-assessed with feedback tailored to Arabic speakers.',
    ar: 'كل درس فيه تدريب على القراءة والاستماع والكتابة والمحادثة - والكتابة والمحادثة يصحّحها الذكاء الاصطناعي مع ملاحظات مخصّصة لمتحدّث العربي.',
    es: 'Cada lección incluye práctica de lectura, comprensión auditiva, escritura y expresión oral; la escritura y la expresión oral las evalúa la IA con comentarios adaptados a los hablantes de árabe.',
  },
  'mkt.eal.practice.skill_reading': {
    en: 'Reading',
    ar: 'قراءة',
    es: 'Lectura',
  },
  'mkt.eal.practice.skill_listening': {
    en: 'Listening',
    ar: 'استماع',
    es: 'Comprensión auditiva',
  },
  'mkt.eal.practice.skill_writing': {
    en: 'Writing',
    ar: 'كتابة',
    es: 'Escritura',
  },
  'mkt.eal.practice.skill_speaking': {
    en: 'Speaking',
    ar: 'محادثة',
    es: 'Expresión oral',
  },
  'mkt.eal.practice.try_it_now': {
    en: 'Try it now',
    ar: 'جرّب الآن',
    es: 'Pruébalo ahora',
  },

  // ─── Games CTA card ─────────────────────────────────────────────────
  'mkt.eal.games.badge': {
    en: 'Learn through play',
    ar: 'تعلّم باللعب',
    es: 'Aprende jugando',
  },
  'mkt.eal.games.heading': {
    en: 'English games for beginners',
    ar: 'ألعاب الإنجليزية للمبتدئين',
    es: 'Juegos de inglés para principiantes',
  },
  'mkt.eal.games.lead': {
    en: '18+ friendly games: picture-word match, articles, the verb “to be”, tenses, prepositions, numbers & time, phrasal verbs and more - with instant feedback and scores.',
    ar: 'أكثر من ١٨ لعبة سهلة وممتعة: مطابقة الصور بالكلمات، أدوات التعريف، فعل to be، الأزمنة، حروف الجر، الأرقام والوقت، والمزيد - مع تصحيح فوري ونقاط.',
    es: 'Más de 18 juegos amigables: emparejar imagen y palabra, artículos, el verbo “to be”, tiempos verbales, preposiciones, números y hora, phrasal verbs y más, con valoración instantánea y puntuaciones.',
  },
  'mkt.eal.games.play_now': {
    en: 'Play now',
    ar: 'العب الآن',
    es: 'Jugar ahora',
  },

  // ─── "How to use this section" ──────────────────────────────────────
  'mkt.eal.howto.heading': {
    en: 'How to use this section',
    ar: 'كيف تستخدم هذا القسم',
    es: 'Cómo usar esta sección',
  },
  // Step 1 - placement test
  'mkt.eal.howto.step1.bold': {
    en: 'Start with the placement test',
    ar: 'ابدأ باختبار تحديد المستوى',
    es: 'Empieza con la prueba de nivel',
  },
  'mkt.eal.howto.step1.body': {
    en: 'so you know your A2-C1 level and go straight to the right lessons.',
    ar: 'عشان تعرف مستواك من A2 إلى C1 وتروح للدروس المناسبة لك مباشرة.',
    es: 'para que conozcas tu nivel de A2 a C1 y vayas directo a las lecciones adecuadas.',
  },
  // Step 2 - sentence structure
  'mkt.eal.howto.step2.bold': {
    en: 'Then move to “Sentence Structure”',
    ar: 'ثم انتقل إلى «بناء الجملة»',
    es: 'Luego pasa a «Estructura de la oración»',
  },
  'mkt.eal.howto.step2.body': {
    en: 'the biggest gap between Arabic and English. Fix word order first.',
    ar: 'أكبر فرق بين العربي والإنجليزي. أصلح ترتيب الكلمات أولاً.',
    es: 'la mayor diferencia entre el árabe y el inglés. Corrige primero el orden de las palabras.',
  },
  // Step 3 - grammar
  'mkt.eal.howto.step3.bold': {
    en: 'Next, “Grammar”',
    ar: 'بعدها «القواعد»',
    es: 'A continuación, «Gramática»',
  },
  'mkt.eal.howto.step3.body': {
    en: 'articles, tenses, subject-verb agreement - these decide a big chunk of the SPaG grade.',
    ar: 'أدوات التعريف، الأزمنة، مطابقة الفاعل للفعل - تحدّد جزء كبير من درجة SPaG.',
    es: 'artículos, tiempos verbales, concordancia entre sujeto y verbo: deciden buena parte de la nota de SPaG.',
  },
  // Step 4 - common errors
  'mkt.eal.howto.step4.bold': {
    en: 'Use “Common Errors” as a checklist',
    ar: 'استخدم «الأخطاء الشائعة» كقائمة فحص',
    es: 'Usa «Errores comunes» como lista de comprobación',
  },
  'mkt.eal.howto.step4.body': {
    en: 'run through it before submitting any essay, and do the exercises and AI assessment in each lesson.',
    ar: 'راجعها قبل تسليم أي مقالة، وسوّ التمارين والتقييم بالذكاء الاصطناعي في كل درس.',
    es: 'repásala antes de entregar cualquier redacción y haz los ejercicios y la evaluación con IA de cada lección.',
  },

  // ══════════════════════════════════════════════════════════════════════
  // mkt.biz.* - /business-english (organisations & institutional cohorts)
  //
  // Added 2026-08-23 for the new corporate/institutional EAL surface. The
  // namespace lives in this shard (not a new file) because the offer is
  // assembled entirely from EAL + IELTS capability that this shard already
  // describes, and because the shard is already in the DICTIONARY_CHAIN -
  // a brand-new shard would need dictionary.ts edited, which is off-limits.
  //
  // COPY DISCIPLINE - the defect class this page was built to avoid:
  // every claim below maps to something that exists in the repo today.
  //   · topic + exercise counts are NOT written here; the page computes
  //     them from src/lib/eal/curriculum.ts at render time via {topics} /
  //     {exercises} placeholders, so the copy cannot drift from the data.
  //   · IELTS prices are NOT written here; the page substitutes
  //     PRICING.IELTS_MONTHLY / IELTS_ANNUAL into {monthly} / {annual}.
  //   · fair-use numbers mirror the real rate limits in
  //     /api/ielts/writing-feedback (10 per 24h) and
  //     /api/ielts/speaking-feedback (30 per 24h).
  //   · NO client names, logos, case studies, testimonials, headcounts,
  //     outcome statistics or band-gain claims appear anywhere. There is
  //     no evidence for any of them, so none are stated.
  // The `mkt.biz.excl.*` block is deliberately as prominent as the
  // capability block: the brief is to be clear about what is absent
  // rather than imply an enterprise feature set that does not exist.
  // ══════════════════════════════════════════════════════════════════════

  // ─── Hero ───────────────────────────────────────────────────────────
  'mkt.biz.badge': {
    en: 'For organisations',
    ar: 'للمؤسسات والشركات',
    es: 'Para organizaciones',
  },
  'mkt.biz.heading': {
    en: 'English practice and IELTS preparation for staff and learner cohorts',
    ar: 'تدريب على اللغة الإنجليزية وتحضير لاختبار IELTS للموظفين ومجموعات المتدربين',
    es: 'Práctica de inglés y preparación para el IELTS para plantillas y grupos de estudiantes',
  },
  'mkt.biz.lead': {
    en: 'If your organisation needs to move a group of adults or students up the CEFR ladder, or get them ready to sit IELTS, you can run that on The English Hub today. This page sets out exactly what that includes, and exactly what it does not.',
    ar: 'إذا كانت مؤسستك تحتاج ترفع مستوى مجموعة من الموظفين أو الطلاب على سلّم CEFR، أو تجهّزهم لاختبار IELTS، تقدر تسوّي هذا على The English Hub من اليوم. هذي الصفحة توضّح بالضبط شنو يشمل العرض، وشنو ما يشمله.',
    es: 'Si tu organización necesita subir a un grupo de adultos o estudiantes por la escala CEFR, o prepararlos para presentarse al IELTS, puedes hacerlo hoy mismo en The English Hub. Esta página explica exactamente qué incluye y qué no incluye.',
  },
  'mkt.biz.cta_primary': {
    en: 'Enquire about a cohort',
    ar: 'استفسر عن مجموعة تدريب',
    es: 'Consultar sobre un grupo',
  },
  'mkt.biz.cta_secondary': {
    en: 'Try the CEFR placement test',
    ar: 'جرّب اختبار تحديد المستوى CEFR',
    es: 'Prueba el test de nivel CEFR',
  },

  // ─── Scope honesty block (sits directly under the hero) ─────────────
  'mkt.biz.scope.title': {
    en: 'Read this first: what this platform actually is',
    ar: 'اقرأ هذا أول: شنو هي هذي المنصة بالضبط',
    es: 'Lee esto primero: qué es realmente esta plataforma',
  },
  'mkt.biz.scope.body': {
    en: 'The English Hub was built for 13-18 year olds sitting GCSE and IGCSE English, and for the schools that teach them. Two parts of it transfer directly to organisations: IELTS preparation, which is an adult exam, and structured EAL practice graded to CEFR levels. Everything offered on this page is one of those two. There is no separate business-communication, workplace-writing or industry-vocabulary library behind it, and we are not going to imply there is.',
    ar: 'The English Hub انبنت أصلاً لطلاب من 13 إلى 18 سنة يقدّمون GCSE و IGCSE في الإنجليزي، وللمدارس اللي تدرّسهم. جزئين منها ينطبقون مباشرة على المؤسسات: التحضير لاختبار IELTS، وهو اختبار للكبار، والتدريب المنظّم على الإنجليزية كلغة إضافية (EAL) المدرّج حسب مستويات CEFR. كل شي معروض في هذي الصفحة يرجع لواحد من هذين. ما في مكتبة منفصلة للتواصل في بيئة العمل أو الكتابة المهنية أو المفردات المتخصصة حسب القطاع، وما راح نوحي إن فيه.',
    es: 'The English Hub se creó para jóvenes de 13 a 18 años que se presentan a los exámenes GCSE e IGCSE de inglés, y para los centros que los preparan. Dos partes se trasladan directamente al mundo profesional: la preparación del IELTS, que es un examen para adultos, y la práctica estructurada de EAL graduada por niveles CEFR. Todo lo que se ofrece en esta página pertenece a una de esas dos. No hay detrás ninguna biblioteca aparte de comunicación empresarial, escritura profesional o vocabulario sectorial, y no vamos a dar a entender que la haya.',
  },

  // ─── Capability cards ───────────────────────────────────────────────
  'mkt.biz.caps.heading': {
    en: 'What your learners get',
    ar: 'شنو يحصل عليه المتدربون',
    es: 'Qué obtienen tus estudiantes',
  },
  'mkt.biz.caps.lead': {
    en: 'Three capabilities, all of them live on the platform now. You can open the first two yourself before you speak to anyone.',
    ar: 'ثلاث إمكانيات، كلها شغّالة على المنصة الحين. تقدر تفتح أول ثنتين بنفسك قبل ما تكلّم أي أحد.',
    es: 'Tres funcionalidades, todas ya disponibles en la plataforma. Puedes abrir las dos primeras tú mismo antes de hablar con nadie.',
  },
  'mkt.biz.cap.eal.title': {
    en: 'Structured EAL practice, graded A2 to C1',
    ar: 'تدريب EAL منظّم، مدرّج من A2 إلى C1',
    es: 'Práctica estructurada de EAL, graduada de A2 a C1',
  },
  'mkt.biz.cap.eal.desc': {
    en: '{topics} topic units covering sentence building, grammar, vocabulary, pronunciation and the errors that recur most often. Each unit carries worked examples and practice exercises with written explanations ({exercises} exercise sets in total), and splits into reading, listening, writing and speaking work at the learner’s own CEFR band. The material was written for Arabic first-language learners, so the error analysis is sharpest for that group.',
    ar: '{topics} وحدات موضوعية تغطي بناء الجملة، القواعد، المفردات، النطق، والأخطاء اللي تتكرر أكثر شي. كل وحدة فيها أمثلة محلولة وتمارين مع شرح مكتوب ({exercises} مجموعات تمارين بالمجموع)، وتتفرّع إلى قراءة واستماع وكتابة ومحادثة على مستوى CEFR الخاص بالمتدرب. المحتوى مكتوب أصلاً لمتحدثي العربية كلغة أولى، فتحليل الأخطاء يكون أدق لهذي الفئة.',
    es: '{topics} unidades temáticas que cubren construcción de oraciones, gramática, vocabulario, pronunciación y los errores que más se repiten. Cada unidad incluye ejemplos resueltos y ejercicios con explicaciones escritas ({exercises} series de ejercicios en total), y se divide en trabajo de lectura, comprensión oral, escritura y expresión oral en el nivel CEFR de cada estudiante. El material se escribió para estudiantes con árabe como primera lengua, por lo que el análisis de errores es más preciso para ese grupo.',
  },
  'mkt.biz.cap.placement.title': {
    en: 'CEFR placement test',
    ar: 'اختبار تحديد المستوى CEFR',
    es: 'Test de nivel CEFR',
  },
  'mkt.biz.cap.placement.desc': {
    en: 'A placement test that puts each learner on the CEFR ladder from A1 to C2, with per-skill sub-scores and a recommended set of starting topics. The score is calculated deterministically, not by AI, so the same answers always produce the same level. It is free and needs no subscription, which makes it a sensible first step before you commit to anything.',
    ar: 'اختبار تحديد مستوى يحدّد موقع كل متدرب على سلّم CEFR من A1 إلى C2، مع درجات فرعية لكل مهارة ومجموعة مواضيع مقترحة للبداية. الدرجة تُحسب بطريقة حتمية، مو بالذكاء الاصطناعي، فنفس الإجابات تعطي دايماً نفس المستوى. الاختبار مجاني وما يحتاج اشتراك، وهذا يخليه خطوة أولى منطقية قبل ما تلتزم بأي شي.',
    es: 'Un test de nivel que sitúa a cada estudiante en la escala CEFR de A1 a C2, con subpuntuaciones por destreza y un conjunto recomendado de temas iniciales. La puntuación se calcula de forma determinista, no mediante IA, así que las mismas respuestas dan siempre el mismo nivel. Es gratuito y no requiere suscripción, lo que lo convierte en un primer paso sensato antes de comprometerse a nada.',
  },
  'mkt.biz.cap.ielts.title': {
    en: 'IELTS preparation with AI band feedback',
    ar: 'تحضير IELTS مع تقييم درجات بالذكاء الاصطناعي',
    es: 'Preparación del IELTS con evaluación de bandas mediante IA',
  },
  'mkt.biz.cap.ielts.desc': {
    en: 'Academic and General Training, across all four papers, with a diagnostic, lessons, practice and model answers. Written responses are assessed against the four IELTS criteria and returned with a band for each criterion plus an overall band on the standard half-band scale; spoken responses get the same treatment. The feedback is generated by AI against published assessment criteria. It is practice feedback, not a mark from a registered IELTS examiner, and it is not an official band score.',
    ar: 'مسارَي Academic و General Training، عبر الأوراق الأربع كلها، مع اختبار تشخيصي ودروس وتدريب وإجابات نموذجية. الإجابات المكتوبة تُقيَّم مقابل معايير IELTS الأربعة وترجع بدرجة لكل معيار ودرجة إجمالية على مقياس أنصاف الدرجات المعتاد؛ والإجابات المنطوقة نفس الشي. التقييم يُنتَج بالذكاء الاصطناعي مقابل معايير التقييم المنشورة. هذا تقييم تدريبي، مو تصحيح من مصحّح IELTS معتمد، ومو درجة رسمية.',
    es: 'Academic y General Training, en las cuatro pruebas, con diagnóstico, lecciones, práctica y respuestas modelo. Las respuestas escritas se evalúan según los cuatro criterios del IELTS y se devuelven con una banda por criterio más una banda global en la escala habitual de medias bandas; las respuestas orales reciben el mismo tratamiento. La evaluación la genera una IA aplicando criterios de evaluación publicados. Es una evaluación de práctica, no la corrección de un examinador oficial del IELTS, y no constituye una puntuación oficial.',
  },
  'mkt.biz.cap.eal.link': {
    en: 'Open the EAL topic list',
    ar: 'افتح قائمة مواضيع EAL',
    es: 'Ver la lista de temas de EAL',
  },
  'mkt.biz.cap.placement.link': {
    en: 'Take the placement test yourself',
    ar: 'سوّ اختبار تحديد المستوى بنفسك',
    es: 'Haz tú mismo el test de nivel',
  },
  'mkt.biz.cap.ielts.link': {
    en: 'Open the IELTS section',
    ar: 'افتح قسم IELTS',
    es: 'Ver la sección de IELTS',
  },
  'mkt.biz.cap.fairuse': {
    en: 'Fair use on AI feedback: up to 10 assessed writing submissions and 30 assessed speaking responses per learner per day.',
    ar: 'حد الاستخدام العادل للتقييم بالذكاء الاصطناعي: حتى 10 نصوص مكتوبة و30 إجابة منطوقة لكل متدرب في اليوم.',
    es: 'Uso razonable de la evaluación con IA: hasta 10 textos escritos y 30 respuestas orales evaluados por estudiante y día.',
  },

  // ─── Cohort visibility ──────────────────────────────────────────────
  'mkt.biz.cohort.heading': {
    en: 'What the person running the programme sees',
    ar: 'شنو يشوف المسؤول عن البرنامج',
    es: 'Qué ve la persona que gestiona el programa',
  },
  'mkt.biz.cohort.body': {
    en: 'An organisation account groups learners into cohorts. It is the same cohort model schools use, so it is the part of the product that has had the most use.',
    ar: 'حساب المؤسسة يجمّع المتدربين في مجموعات. هو نفس نموذج المجموعات اللي تستخدمه المدارس، يعني هذا الجزء من المنتج هو الأكثر استخداماً.',
    es: 'Una cuenta de organización agrupa a los estudiantes en cohortes. Es el mismo modelo de cohortes que usan los centros educativos, así que es la parte del producto con más uso real.',
  },
  'mkt.biz.cohort.point1': {
    en: 'Cohorts with join codes, so learners enrol themselves instead of you emailing a spreadsheet of personal data.',
    ar: 'مجموعات برموز انضمام، عشان المتدربون يسجّلون نفسهم بدل ما ترسل ملف فيه بيانات شخصية بالإيميل.',
    es: 'Cohortes con códigos de acceso, para que los estudiantes se inscriban solos en lugar de que envíes por correo una hoja con datos personales.',
  },
  'mkt.biz.cohort.point2': {
    en: 'Three roles: administrator, programme lead and tutor. A tutor sees only the cohorts assigned to them, not the whole organisation.',
    ar: 'ثلاثة أدوار: مسؤول، قائد برنامج، ومدرّب. المدرّب يشوف بس المجموعات المسندة له، مو كل المؤسسة.',
    es: 'Tres roles: administrador, responsable de programa y tutor. Un tutor solo ve las cohortes que tiene asignadas, no toda la organización.',
  },
  'mkt.biz.cohort.point3': {
    en: 'A cohort view of CEFR placement results and activity, so you can see the spread of levels you are dealing with before you plan anything.',
    ar: 'عرض على مستوى المجموعة لنتائج تحديد المستوى CEFR وللنشاط، عشان تشوف توزّع المستويات اللي تتعامل معها قبل ما تخطّط لأي شي.',
    es: 'Una vista de cohorte con los resultados de nivel CEFR y la actividad, para ver el abanico real de niveles antes de planificar nada.',
  },
  'mkt.biz.cohort.caveat': {
    en: 'Reporting covers what learners do on this platform. It is not a record of their English anywhere else, and it is not a competency assessment for HR purposes.',
    ar: 'التقارير تغطي بس نشاط المتدربين على هذي المنصة. ما هي سجل لمستواهم بالإنجليزي في أي مكان ثاني، ولا هي تقييم كفاءة لأغراض الموارد البشرية.',
    es: 'Los informes recogen lo que los estudiantes hacen en esta plataforma. No son un registro de su inglés fuera de ella ni una evaluación de competencias para fines de recursos humanos.',
  },

  // ─── What is NOT included ───────────────────────────────────────────
  'mkt.biz.excl.heading': {
    en: 'What is not included',
    ar: 'شنو مو مشمول',
    es: 'Qué no está incluido',
  },
  'mkt.biz.excl.lead': {
    en: 'Better you know now than after a purchase order. None of the following exists today:',
    ar: 'أحسن تعرف الحين مو بعد ما تصدر أمر الشراء. ولا وحدة من التالية موجودة اليوم:',
    es: 'Mejor saberlo ahora que después de firmar una orden de compra. Nada de lo siguiente existe hoy:',
  },
  'mkt.biz.excl.item1': {
    en: 'No live teaching, tutoring or classroom delivery. Learning is self-paced with automated feedback.',
    ar: 'ما في تدريس مباشر ولا دروس خصوصية ولا حصص صفّية. التعلّم ذاتي الوتيرة مع تقييم آلي.',
    es: 'No hay clases en directo, tutorías ni formación presencial. El aprendizaje es a tu ritmo con evaluación automatizada.',
  },
  'mkt.biz.excl.item2': {
    en: 'No single sign-on, SAML or automated user provisioning. Learners create their own account and join with a code.',
    ar: 'ما في تسجيل دخول موحّد (SSO) ولا SAML ولا إنشاء حسابات آلي. كل متدرب يسوّي حسابه وينضم برمز.',
    es: 'No hay inicio de sesión único, SAML ni aprovisionamiento automático de usuarios. Cada estudiante crea su cuenta y se une con un código.',
  },
  'mkt.biz.excl.item3': {
    en: 'No LMS integration. There is no SCORM package, no LTI tile and no xAPI feed.',
    ar: 'ما في تكامل مع أنظمة إدارة التعلّم. ما في حزمة SCORM ولا بطاقة LTI ولا تغذية xAPI.',
    es: 'No hay integración con LMS. No hay paquete SCORM, ni bloque LTI, ni flujo xAPI.',
  },
  'mkt.biz.excl.item4': {
    en: 'No business-English, workplace-writing or sector-specific vocabulary content. The material is general English, GCSE and IGCSE English, and IELTS.',
    ar: 'ما في محتوى إنجليزي للأعمال ولا كتابة مهنية ولا مفردات متخصصة حسب القطاع. المحتوى إنجليزي عام، وإنجليزي GCSE و IGCSE، و IELTS.',
    es: 'No hay contenido de inglés de negocios, escritura profesional ni vocabulario sectorial. El material es inglés general, inglés de GCSE e IGCSE, e IELTS.',
  },
  'mkt.biz.excl.item5': {
    en: 'No accredited qualification and no official test result. AI band feedback is practice feedback and cannot be used as evidence of English proficiency.',
    ar: 'ما في شهادة معتمدة ولا نتيجة اختبار رسمية. تقييم الدرجات بالذكاء الاصطناعي هو تقييم تدريبي وما ينفع كإثبات لمستوى الإنجليزي.',
    es: 'No hay titulación acreditada ni resultado oficial de examen. La evaluación de bandas con IA es una evaluación de práctica y no sirve como acreditación del nivel de inglés.',
  },
  'mkt.biz.excl.item6': {
    en: 'No self-serve bulk checkout on this site, and no published volume discount. Cohorts are set up by enquiry.',
    ar: 'ما في شراء بالجملة ذاتي الخدمة على الموقع، ولا خصم كميات منشور. المجموعات تُجهّز عن طريق الاستفسار.',
    es: 'No hay compra masiva de autoservicio en este sitio ni descuento por volumen publicado. Las cohortes se configuran mediante consulta.',
  },

  // ─── Pricing honesty ────────────────────────────────────────────────
  'mkt.biz.pricing.heading': {
    en: 'Pricing, stated plainly',
    ar: 'الأسعار، بصراحة',
    es: 'Precios, dicho claramente',
  },
  'mkt.biz.pricing.ielts': {
    en: 'IELTS access is sold per learner at the published rate: £{monthly} a month or £{annual} a year. That is the same price an individual pays.',
    ar: 'الوصول إلى IELTS يُباع لكل متدرب بالسعر المنشور: £{monthly} في الشهر أو £{annual} في السنة. وهو نفس السعر اللي يدفعه الفرد.',
    es: 'El acceso al IELTS se vende por estudiante a la tarifa publicada: £{monthly} al mes o £{annual} al año. Es el mismo precio que paga un particular.',
  },
  'mkt.biz.pricing.eal': {
    en: 'The EAL topic material and the CEFR placement test are open to any account at no cost. AI assessment of writing and speaking against CEFR levels sits behind a paid plan.',
    ar: 'محتوى مواضيع EAL واختبار تحديد المستوى CEFR متاحين لأي حساب مجاناً. أما التقييم بالذكاء الاصطناعي للكتابة والمحادثة مقابل مستويات CEFR فيحتاج اشتراك مدفوع.',
    es: 'El material temático de EAL y el test de nivel CEFR están disponibles gratis para cualquier cuenta. La evaluación con IA de la escritura y la expresión oral según niveles CEFR requiere un plan de pago.',
  },
  'mkt.biz.pricing.volume': {
    en: 'We do not publish a volume discount, so there is not one quoted here. If you need a purchase order, a single invoice for a cohort or a phased rollout, put it in the enquiry and we will tell you what we can and cannot do.',
    ar: 'ما ننشر خصم كميات، فما راح تلقى واحد مذكور هنا. إذا تحتاج أمر شراء، أو فاتورة واحدة للمجموعة، أو تطبيق على مراحل، اكتبها في الاستفسار وبنقول لك شنو نقدر وشنو ما نقدر عليه.',
    es: 'No publicamos descuentos por volumen, así que aquí no se cita ninguno. Si necesitas una orden de compra, una factura única para la cohorte o un despliegue por fases, indícalo en la consulta y te diremos qué podemos y qué no podemos hacer.',
  },
  'mkt.biz.pricing.link': {
    en: 'See all plans on the pricing page',
    ar: 'شوف كل الباقات في صفحة الأسعار',
    es: 'Consulta todos los planes en la página de precios',
  },

  // ─── What happens next ──────────────────────────────────────────────
  'mkt.biz.next.heading': {
    en: 'What happens after you enquire',
    ar: 'شنو يصير بعد ما ترسل الاستفسار',
    es: 'Qué ocurre después de tu consulta',
  },
  'mkt.biz.next.step1': {
    en: 'Your enquiry goes to the same inbox as our school enquiries, and we reply within one UK working day.',
    ar: 'استفسارك يوصل نفس البريد اللي توصله استفسارات المدارس، ونرد خلال يوم عمل واحد بتوقيت المملكة المتحدة.',
    es: 'Tu consulta llega al mismo buzón que las consultas de centros educativos y respondemos en un día laborable del Reino Unido.',
  },
  'mkt.biz.next.step2': {
    en: 'We ask what the cohort actually needs: how many learners, roughly what level they are, and what they need English for. If the honest answer is workplace communication coaching, we will say so and point you elsewhere.',
    ar: 'نسألك شنو تحتاجه المجموعة فعلاً: كم عدد المتدربين، وأي مستوى تقريباً، وليش يحتاجون الإنجليزي. وإذا كانت الحاجة الحقيقية تدريب على التواصل في بيئة العمل، بنقول لك بصراحة ونوجّهك لجهة ثانية.',
    es: 'Preguntamos qué necesita realmente el grupo: cuántas personas, en qué nivel aproximado están y para qué necesitan el inglés. Si la respuesta honesta es formación en comunicación profesional, lo diremos y te orientaremos a otra parte.',
  },
  'mkt.biz.next.step3': {
    en: 'If it is a fit, we agree a small first cohort, set up the organisation account and cohorts, and give you the join codes.',
    ar: 'إذا كان في توافق، نتفق على مجموعة أولى صغيرة، ونجهّز حساب المؤسسة والمجموعات، ونعطيك رموز الانضمام.',
    es: 'Si encaja, acordamos una primera cohorte pequeña, configuramos la cuenta de organización y las cohortes, y te entregamos los códigos de acceso.',
  },
  'mkt.biz.next.step4': {
    en: 'Learners sit the CEFR placement test first, so the starting level is measured rather than assumed.',
    ar: 'المتدربون يسوّون اختبار تحديد المستوى CEFR أول، عشان يكون مستوى البداية مقاس مو مفترض.',
    es: 'Los estudiantes hacen primero el test de nivel CEFR, de modo que el punto de partida se mide en vez de suponerse.',
  },

  // ─── Enquiry form ───────────────────────────────────────────────────
  'mkt.biz.form.heading': {
    en: 'Enquire about a cohort',
    ar: 'استفسر عن مجموعة تدريب',
    es: 'Consultar sobre un grupo',
  },
  'mkt.biz.form.lead': {
    en: 'Six fields. No payment details are collected on this form.',
    ar: 'ست خانات. ما نجمع أي بيانات دفع في هذي الاستمارة.',
    es: 'Seis campos. En este formulario no se recogen datos de pago.',
  },
  'mkt.biz.form.org': {
    en: 'Organisation',
    ar: 'المؤسسة',
    es: 'Organización',
  },
  'mkt.biz.form.name': {
    en: 'Your name',
    ar: 'اسمك',
    es: 'Tu nombre',
  },
  'mkt.biz.form.jobtitle': {
    en: 'Your job title',
    ar: 'مسمّاك الوظيفي',
    es: 'Tu cargo',
  },
  'mkt.biz.form.jobtitle_ph': {
    en: 'e.g. L&D Manager, HR Business Partner',
    ar: 'مثلاً: مدير التدريب والتطوير، شريك أعمال الموارد البشرية',
    es: 'p. ej., responsable de formación, socio de RR. HH.',
  },
  'mkt.biz.form.email': {
    en: 'Work email',
    ar: 'البريد الإلكتروني للعمل',
    es: 'Correo del trabajo',
  },
  'mkt.biz.form.country': {
    en: 'Country',
    ar: 'الدولة',
    es: 'País',
  },
  'mkt.biz.form.country_ph': {
    en: 'e.g. United Kingdom, Qatar',
    ar: 'مثلاً: المملكة المتحدة، قطر',
    es: 'p. ej., Reino Unido, Qatar',
  },
  'mkt.biz.form.phone': {
    en: 'Phone or WhatsApp',
    ar: 'الهاتف أو واتساب',
    es: 'Teléfono o WhatsApp',
  },
  'mkt.biz.form.learners': {
    en: 'Number of learners',
    ar: 'عدد المتدربين',
    es: 'Número de estudiantes',
  },
  'mkt.biz.form.learners_ph': {
    en: 'Select a range',
    ar: 'اختر نطاقاً',
    es: 'Selecciona un rango',
  },
  'mkt.biz.form.range_30': {
    en: 'Up to 30 (a first cohort)',
    ar: 'حتى 30 (مجموعة أولى)',
    es: 'Hasta 30 (una primera cohorte)',
  },
  'mkt.biz.form.needs': {
    en: 'What does the cohort need English for?',
    ar: 'ليش تحتاج المجموعة اللغة الإنجليزية؟',
    es: '¿Para qué necesita el grupo el inglés?',
  },
  'mkt.biz.form.needs_ph': {
    en: 'e.g. staff sitting IELTS for a visa or a licence, students moving into an English-medium programme, raising a mixed-level team from A2 towards B2',
    ar: 'مثلاً: موظفون يقدّمون IELTS لتأشيرة أو رخصة مهنية، طلاب داخلون برنامج دراسة بالإنجليزي، رفع مستوى فريق متفاوت من A2 نحو B2',
    es: 'p. ej., personal que se presenta al IELTS para un visado o una licencia, estudiantes que pasan a un programa en inglés, subir a un equipo de nivel mixto de A2 hacia B2',
  },
  'mkt.biz.form.optional': {
    en: 'optional',
    ar: 'اختياري',
    es: 'opcional',
  },
  'mkt.biz.form.submit': {
    en: 'Send enquiry',
    ar: 'إرسال الاستفسار',
    es: 'Enviar consulta',
  },
  'mkt.biz.form.sending': {
    en: 'Sending…',
    ar: 'جاري الإرسال…',
    es: 'Enviando…',
  },
  'mkt.biz.form.reassure': {
    en: 'We reply within one UK working day. Your details are used to answer this enquiry and nothing else.',
    ar: 'نرد خلال يوم عمل واحد بتوقيت المملكة المتحدة. بياناتك تُستخدم للرد على هذا الاستفسار فقط.',
    es: 'Respondemos en un día laborable del Reino Unido. Tus datos se usan para responder a esta consulta y para nada más.',
  },
  'mkt.biz.form.success_title': {
    en: 'Enquiry received',
    ar: 'وصلنا استفسارك',
    es: 'Consulta recibida',
  },
  'mkt.biz.form.success_body': {
    en: 'A confirmation is on its way to the address you gave us, and someone will reply within one UK working day.',
    ar: 'رسالة تأكيد في طريقها للعنوان اللي كتبته، وراح يرد عليك أحد خلال يوم عمل واحد بتوقيت المملكة المتحدة.',
    es: 'Va camino una confirmación a la dirección que nos has dado y alguien responderá en un día laborable del Reino Unido.',
  },
  'mkt.biz.form.error_generic': {
    en: 'That did not send. Please try again, or email us directly.',
    ar: 'ما تم الإرسال. حاول مرة ثانية، أو راسلنا مباشرة بالإيميل.',
    es: 'No se ha enviado. Inténtalo de nuevo o escríbenos directamente por correo.',
  },

  // ─── Footnotes ──────────────────────────────────────────────────────
  'mkt.biz.foot.data': {
    en: 'The English Hub is a product designed with under-18s in mind, so its data handling is built to that standard. How we handle personal data is set out in the privacy policy.',
    ar: 'The English Hub منتج مصمّم مع مراعاة المستخدمين تحت 18 سنة، فمعالجة البيانات فيه مبنية على ذاك المعيار. طريقة تعاملنا مع البيانات الشخصية موضّحة في سياسة الخصوصية.',
    es: 'The English Hub es un producto diseñado teniendo en cuenta a los menores de 18 años, por lo que su tratamiento de datos se ajusta a ese estándar. Cómo tratamos los datos personales se detalla en la política de privacidad.',
  },
  'mkt.biz.foot.privacy_link': {
    en: 'Read the privacy policy',
    ar: 'اقرأ سياسة الخصوصية',
    es: 'Leer la política de privacidad',
  },
  'mkt.biz.foot.schools': {
    en: 'Buying for a school rather than an organisation? The schools page covers pilots, departmental rollout and school pricing.',
    ar: 'تشتري لمدرسة مو لمؤسسة؟ صفحة المدارس تغطي البرامج التجريبية والتطبيق على مستوى القسم وأسعار المدارس.',
    es: '¿Compras para un centro educativo y no para una empresa? La página de centros cubre pilotos, despliegue por departamento y precios para colegios.',
  },
}
