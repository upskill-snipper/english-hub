/**
 * MKT_STUDENTS_DICTIONARY - /students marketing page.
 *
 * Bilingual shard for `src/app/students/page.tsx` - the public-facing
 * "For Students" marketing page. EN values are byte-identical to the
 * current English literals on the page; AR values are curated
 * Khaleeji (Gulf) Arabic in the same warm, student-friendly marketing
 * register as `dictionary-homepage.ts` - NOT MSA, NOT Levantine, NOT
 * machine. Voice tuned for Gulf teenage GCSE/IGCSE learners.
 *
 * Khaleeji conventions matched:
 *   - الحين (not الآن), وايد (not كثيراً), حقّك (possessive marker)
 *   - شنو / شلون / أبغى family where natural
 *   - Conversational direct address (اضغط، اختر، شوف)
 *
 * Technical / brand tokens stay in Latin script per Gulf convention:
 *   GCSE, IGCSE, KS3, AQA, Edexcel, OCR, Eduqas, Cambridge, AO,
 *   AI, A-Level, EAL, The English Hub.
 * Western digits throughout.
 *
 * Wired into the central resolver chain in `dictionary.ts`
 * (orchestrator owns wiring - this shard exports only the map).
 */

export const MKT_STUDENTS_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  /* ── Metadata ── */
  'mkt.students.meta.title': {
    en: 'For Students - practise, improve and understand English',
    ar: 'للطلاب - تدرّب، طوّر مستواك وافهم الإنجليزي',
    es: 'Para estudiantes: practica, mejora y comprende el inglés',
  },
  'mkt.students.meta.description': {
    en: 'Revision, essay practice, comprehension and clearer feedback aligned to the exam board your school teaches, with progress tracking across English Language and Literature.',
    ar: 'مراجعة، تدريب على المقالات، فهم مقروء، وملاحظات أوضح متوافقة مع البورد اللي مدرستك تدرّسه، مع متابعة تقدّمك في English Language و Literature.',
    es: 'Repaso, práctica de redacción, comprensión y comentarios más claros alineados con la junta examinadora que enseña tu escuela, con seguimiento del progreso en English Language y Literature.',
  },
  'mkt.students.meta.og_title': {
    en: 'For Students - The English Hub',
    ar: 'للطلاب - The English Hub',
    es: 'Para estudiantes - The English Hub',
  },
  'mkt.students.meta.og_description': {
    en: 'Practise, improve and understand English with clearer feedback.',
    ar: 'تدرّب، طوّر مستواك وافهم الإنجليزي مع ملاحظات أوضح.',
    es: 'Practica, mejora y comprende el inglés con comentarios más claros.',
  },
  'mkt.students.meta.og_image_alt': {
    en: 'The English Hub for Students',
    ar: 'The English Hub للطلاب',
    es: 'The English Hub para estudiantes',
  },

  /* ── Breadcrumb JSON-LD visible labels (rendered as text by some clients) ── */
  // Note: JSON-LD `name` field IS user-visible in search results, so we
  // externalise it. The URL stays English/data.
  'mkt.students.breadcrumb.home': {
    en: 'Home',
    ar: 'الرئيسية',
    es: 'Inicio',
  },
  'mkt.students.breadcrumb.students': {
    en: 'Students',
    ar: 'الطلاب',
    es: 'Estudiantes',
  },

  /* ── 1. Hero ── */
  'mkt.students.hero.eyebrow': {
    en: 'For students',
    ar: 'للطلاب',
    es: 'Para estudiantes',
  },
  'mkt.students.hero.title': {
    en: 'Practise, improve and understand English with clearer feedback',
    ar: 'تدرّب، طوّر مستواك وافهم الإنجليزي مع ملاحظات أوضح',
    es: 'Practica, mejora y comprende el inglés con comentarios más claros',
  },
  'mkt.students.hero.subtitle': {
    en: 'Revise the texts you study, practise exam-style questions and get structured feedback aligned to the exam board your school teaches.',
    ar: 'راجع النصوص اللي تدرسها، تدرّب على أسئلة بصيغة الامتحان، واحصل على ملاحظات منظّمة متوافقة مع البورد اللي مدرستك تدرّسه.',
    es: 'Repasa los textos que estudias, practica preguntas de estilo examen y recibe comentarios estructurados alineados con la junta examinadora que enseña tu escuela.',
  },
  'mkt.students.hero.cta_primary': {
    en: 'Choose your exam board',
    ar: 'اختر بورد الامتحان حقّك',
    es: 'Elige tu junta examinadora',
  },
  'mkt.students.hero.cta_secondary': {
    en: 'See student pricing',
    ar: 'شوف أسعار الطلاب',
    es: 'Ver precios para estudiantes',
  },
  'mkt.students.hero.pill_boards': {
    en: 'All major boards',
    ar: 'كل البوردات الرئيسية',
    es: 'Todas las juntas principales',
  },
  'mkt.students.hero.pill_ai_feedback': {
    en: 'AI feedback in plain English',
    ar: 'ملاحظات AI بإنجليزي واضح',
    es: 'Comentarios de IA en inglés sencillo',
  },
  'mkt.students.hero.pill_levels': {
    en: 'KS3, GCSE, IGCSE, A-Level',
    ar: 'KS3 و GCSE و IGCSE و A-Level',
    es: 'KS3, GCSE, IGCSE, A-Level',
  },

  /* ── 2. Student journey ── */
  'mkt.students.journey.eyebrow': {
    en: 'How it works',
    ar: 'كيف يشتغل',
    es: 'Cómo funciona',
  },
  'mkt.students.journey.title': {
    en: 'How studying with The English Hub works',
    ar: 'كيف الدراسة مع The English Hub تشتغل',
    es: 'Cómo funciona estudiar con The English Hub',
  },
  'mkt.students.journey.subtitle': {
    en: 'Five small steps from picking your board to tracking your own progress.',
    ar: 'خمس خطوات صغيرة، من اختيار البورد لين متابعة تقدّمك بنفسك.',
    es: 'Cinco pasos pequeños, desde elegir tu junta hasta seguir tu propio progreso.',
  },
  'mkt.students.journey.step_label': {
    en: 'Step',
    ar: 'خطوة',
    es: 'Paso',
  },

  /* Journey step 1 - Pick your board */
  'mkt.students.journey.step1.title': {
    en: 'Pick your board',
    ar: 'اختر البورد حقّك',
    es: 'Elige tu junta',
  },
  'mkt.students.journey.step1.body': {
    en: 'Tell us your exam - AQA, Edexcel, OCR, Eduqas or IGCSE.',
    ar: 'قل لنا أي امتحان عندك - AQA أو Edexcel أو OCR أو Eduqas أو IGCSE.',
    es: 'Dinos tu examen: AQA, Edexcel, OCR, Eduqas o IGCSE.',
  },

  /* Journey step 2 - Revise set texts and topics */
  'mkt.students.journey.step2.title': {
    en: 'Revise set texts and topics',
    ar: 'راجع النصوص المقرّرة والمواضيع',
    es: 'Repasa los textos prescritos y los temas',
  },
  'mkt.students.journey.step2.body': {
    en: 'Specification-aligned revision, not generic notes.',
    ar: 'مراجعة متوافقة مع المنهج، مو ملخّصات عامّة.',
    es: 'Repaso alineado con el programa, no apuntes genéricos.',
  },

  /* Journey step 3 - Practise exam-style answers */
  'mkt.students.journey.step3.title': {
    en: 'Practise exam-style answers',
    ar: 'تدرّب على إجابات بصيغة الامتحان',
    es: 'Practica respuestas de estilo examen',
  },
  'mkt.students.journey.step3.body': {
    en: 'Real question formats with model structures.',
    ar: 'صيغ أسئلة حقيقية مع هياكل إجابة نموذجية.',
    es: 'Formatos de pregunta reales con estructuras modelo.',
  },

  /* Journey step 4 - Get clearer feedback */
  'mkt.students.journey.step4.title': {
    en: 'Get clearer feedback',
    ar: 'احصل على ملاحظات أوضح',
    es: 'Recibe comentarios más claros',
  },
  'mkt.students.journey.step4.body': {
    en: 'AI feedback in plain English - what to fix, and why.',
    ar: 'ملاحظات AI بإنجليزي واضح - شنو تصلّح، وليش.',
    es: 'Comentarios de IA en inglés sencillo: qué corregir y por qué.',
  },

  /* Journey step 5 - Track your progress */
  'mkt.students.journey.step5.title': {
    en: 'Track your progress',
    ar: 'تابع تقدّمك',
    es: 'Sigue tu progreso',
  },
  'mkt.students.journey.step5.body': {
    en: 'See what is improving and where to focus next.',
    ar: 'شوف وش يتحسّن، ووين تركّز بعدها.',
    es: 'Mira qué está mejorando y en qué centrarte a continuación.',
  },

  /* ── 3. What's inside ── */
  'mkt.students.inside.eyebrow': {
    en: 'What’s inside',
    ar: 'وش بالداخل',
    es: 'Qué incluye',
  },
  'mkt.students.inside.title': {
    en: 'Everything you need to revise and improve',
    ar: 'كل اللي تحتاجه عشان تراجع وتطوّر مستواك',
    es: 'Todo lo que necesitas para repasar y mejorar',
  },
  'mkt.students.inside.subtitle': {
    en: 'Built around the boards UK and international schools actually teach.',
    ar: 'مبنية على البوردات اللي تدرّسها فعلاً مدارس بريطانيا والمدارس الدولية.',
    es: 'Creado en torno a las juntas que realmente enseñan las escuelas del Reino Unido e internacionales.',
  },
  'mkt.students.inside.board_eyebrow': {
    en: 'Exam board',
    ar: 'بورد الامتحان',
    es: 'Junta examinadora',
  },

  /* Benefit cards */
  'mkt.students.inside.benefit.revision.title': {
    en: 'Revision',
    ar: 'المراجعة',
    es: 'Repaso',
  },
  'mkt.students.inside.benefit.revision.body': {
    en: 'Revise set texts and key topics aligned to your specification.',
    ar: 'راجع النصوص المقرّرة والمواضيع المهمّة المتوافقة مع منهجك.',
    es: 'Repasa los textos prescritos y los temas clave alineados con tu programa.',
  },
  'mkt.students.inside.benefit.essay.title': {
    en: 'Essay practice',
    ar: 'تدريب على المقالات',
    es: 'Práctica de redacción',
  },
  'mkt.students.inside.benefit.essay.body': {
    en: 'Practise exam-style essays and improve before the real thing.',
    ar: 'تدرّب على مقالات بصيغة الامتحان وطوّر مستواك قبل الامتحان الحقيقي.',
    es: 'Practica redacciones de estilo examen y mejora antes de la prueba real.',
  },
  'mkt.students.inside.benefit.feedback.title': {
    en: 'Clearer feedback',
    ar: 'ملاحظات أوضح',
    es: 'Comentarios más claros',
  },
  'mkt.students.inside.benefit.feedback.body': {
    en: 'Structured, criteria-referenced feedback that explains how to improve.',
    ar: 'ملاحظات منظّمة مبنية على المعايير تشرح لك كيف تتحسّن.',
    es: 'Comentarios estructurados y basados en criterios que explican cómo mejorar.',
  },
  'mkt.students.inside.benefit.lit_lang.title': {
    en: 'Literature & language support',
    ar: 'دعم في Literature و Language',
    es: 'Apoyo en Literature y Language',
  },
  'mkt.students.inside.benefit.lit_lang.body': {
    en: 'Support across English Literature and English Language.',
    ar: 'دعم في English Literature و English Language.',
    es: 'Apoyo en English Literature y English Language.',
  },
  'mkt.students.inside.benefit.eal.title': {
    en: 'EAL support',
    ar: 'دعم EAL',
    es: 'Apoyo EAL',
  },
  'mkt.students.inside.benefit.eal.body': {
    en: 'Structured practice if English is an additional language.',
    ar: 'تدريب منظّم إذا الإنجليزي لغة إضافية عندك.',
    es: 'Práctica estructurada si el inglés es una lengua adicional.',
  },
  'mkt.students.inside.benefit.progress.title': {
    en: 'Progress tracking',
    ar: 'متابعة التقدّم',
    es: 'Seguimiento del progreso',
  },
  'mkt.students.inside.benefit.progress.body': {
    en: 'See how you are progressing and where to focus next.',
    ar: 'شوف كيف تتقدّم، ووين تركّز بعدها.',
    es: 'Mira cómo avanzas y en qué centrarte a continuación.',
  },

  /* ── 4. Subjects ── */
  'mkt.students.subjects.eyebrow': {
    en: 'Subjects we cover',
    ar: 'المواد اللي نغطّيها',
    es: 'Asignaturas que cubrimos',
  },
  'mkt.students.subjects.title': {
    en: 'English Language and Literature, across every key stage',
    ar: 'English Language و Literature، في كل المراحل الدراسية',
    es: 'English Language y Literature, en cada key stage',
  },
  'mkt.students.subjects.subtitle': {
    en: 'From KS3 foundations to A-Level analysis - all in one place.',
    ar: 'من أساسيات KS3 لين تحليل A-Level - كله في مكان واحد.',
    es: 'Desde los fundamentos de KS3 hasta el análisis de A-Level, todo en un solo lugar.',
  },
  'mkt.students.subjects.ks3.title': {
    en: 'KS3 English',
    ar: 'إنجليزي KS3',
    es: 'Inglés KS3',
  },
  'mkt.students.subjects.ks3.body': {
    en: 'Build the foundations - reading, writing and vocabulary practice across Years 7 to 9.',
    ar: 'ابنِ الأساس - تدريب على القراءة والكتابة والمفردات في السنوات 7 لين 9.',
    es: 'Construye los fundamentos: práctica de lectura, escritura y vocabulario en Years 7 a 9.',
  },
  'mkt.students.subjects.lang.title': {
    en: 'GCSE English Language',
    ar: 'GCSE English Language',
    es: 'GCSE English Language',
  },
  'mkt.students.subjects.lang.body': {
    en: 'Reading comprehension, descriptive and persuasive writing aligned to your board.',
    ar: 'فهم المقروء، الكتابة الوصفية والإقناعية، متوافقة مع البورد حقّك.',
    es: 'Comprensión lectora, escritura descriptiva y persuasiva alineada con tu junta.',
  },
  'mkt.students.subjects.lit.title': {
    en: 'GCSE English Literature',
    ar: 'GCSE English Literature',
    es: 'GCSE English Literature',
  },
  'mkt.students.subjects.lit.body': {
    en: 'Set texts, themes, characters and exam-style essay practice with model paragraphs.',
    ar: 'النصوص المقرّرة، المواضيع، الشخصيات، وتدريب على مقالات بصيغة الامتحان مع فقرات نموذجية.',
    es: 'Textos prescritos, temas, personajes y práctica de redacción de estilo examen con párrafos modelo.',
  },
  'mkt.students.subjects.igcse_alevel.title': {
    en: 'IGCSE + A-Level',
    ar: 'IGCSE و A-Level',
    es: 'IGCSE + A-Level',
  },
  'mkt.students.subjects.igcse_alevel.body': {
    en: 'Cambridge and Edexcel IGCSE plus extended A-Level practice and feedback.',
    ar: 'Cambridge و Edexcel IGCSE، وكمان تدريب وملاحظات موسّعة لـ A-Level.',
    es: 'Cambridge y Edexcel IGCSE, además de práctica y comentarios ampliados de A-Level.',
  },

  /* ── 5. Demo CTA ── */
  'mkt.students.demo.eyebrow': {
    en: 'Try before you sign up',
    ar: 'جرّب قبل ما تسجّل',
    es: 'Pruébalo antes de registrarte',
  },
  'mkt.students.demo.title': {
    en: 'Want to look around first?',
    ar: 'تبغى تتطلّع شوي الأول؟',
    es: '¿Quieres echar un vistazo primero?',
  },
  'mkt.students.demo.subtitle': {
    en: 'Open the student demo to see how revision, feedback and progress tracking work - no sign-up needed.',
    ar: 'افتح ديمو الطالب وشوف كيف تشتغل المراجعة والملاحظات ومتابعة التقدّم - بدون تسجيل.',
    es: 'Abre la demo de estudiante para ver cómo funcionan el repaso, los comentarios y el seguimiento del progreso, sin necesidad de registrarte.',
  },
  'mkt.students.demo.cta_primary': {
    en: 'Open the student demo',
    ar: 'افتح ديمو الطالب',
    es: 'Abrir la demo de estudiante',
  },
  'mkt.students.demo.cta_secondary': {
    en: 'Pick your exam board',
    ar: 'اختر بورد الامتحان حقّك',
    es: 'Elige tu junta examinadora',
  },

  /* ── 6. Friendly teacher note ── */
  'mkt.students.note.title': {
    en: 'A quick note',
    ar: 'ملاحظة سريعة',
    es: 'Una nota rápida',
  },
  'mkt.students.note.body': {
    en: 'Your school may already use The English Hub. If so, ask your English teacher how to get started.',
    ar: 'يمكن مدرستك تستخدم The English Hub أصلاً. لو كذا، اسأل مدرّس الإنجليزي حقّك كيف تبدأ.',
    es: 'Puede que tu escuela ya use The English Hub. Si es así, pregunta a tu profesor de inglés cómo empezar.',
  },
}
