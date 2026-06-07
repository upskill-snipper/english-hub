/**
 * dictionary-mkt-schools.ts - /schools institutional marketing page.
 * EN + Khaleeji (Gulf) Arabic.
 *
 * Covers EVERY user-visible string on src/app/schools/page.tsx - the
 * primary public conversion surface for school leaders + the Qatar Expo
 * audience. Server component, looked up via the server-side `t()` helper.
 *
 * Tone: formal-but-warm Khaleeji, targeted at Gulf school leaders and
 * heads of English departments. Calibrated against:
 *   - dictionary-trust.ts (institutional press / about register)
 *   - dictionary-homepage.ts (conversational marketing register)
 * Not stiff MSA, not Levantine, not machine.
 *
 * Conventions:
 *   - Technical / brand tokens stay Latin: GCSE, IGCSE, AQA, Edexcel,
 *     OCR, Eduqas, Cambridge, AO, CEFR, AI, EAL, KS3, MAT, The English Hub.
 *   - Numerals: Western digits (90, 11, etc).
 *   - Khaleeji markers in use: وايد, الحين, إحنا, شوف, دوّر, ما, مو, شنو.
 *   - Khaleeji avoids: شو, بحكي, كيفك, ليش (Levantine - banned).
 *
 * Wired into the master lookup chain centrally by dictionary.ts
 * (the orchestrator). DO NOT edit dictionary.ts here - a parallel
 * agent owns the wiring.
 */

export const MKT_SCHOOLS_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ───────────────────────────────────────────────────────────────────
  // Metadata (title / description) - used by generateMetadata()
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.meta.title': {
    en: 'The English Hub for Schools - assessment, intervention & reporting',
    ar: 'The English Hub للمدارس - تقييم وتدخّل وتقارير',
    es: 'The English Hub para colegios: evaluación, intervención e informes',
  },
  'mkt.schools.meta.description': {
    en: 'A school-ready English platform helping teachers save time, students improve faster and leaders understand where support is needed across English Language, Literature and EAL.',
    ar: 'منصّة إنجليزي جاهزة للمدارس تساعد المعلّمين يوفّرون وقتهم، والطلاب يتحسّنون أسرع، والقادة يفهمون وين يحتاج الدعم - في English Language وLiterature وEAL.',
    es: 'Una plataforma de inglés lista para colegios que ayuda a los profesores a ahorrar tiempo, a los estudiantes a mejorar más rápido y a los directivos a entender dónde se necesita apoyo en English Language, Literature y EAL.',
  },
  'mkt.schools.meta.og_title': {
    en: 'The English Hub for Schools',
    ar: 'The English Hub للمدارس',
    es: 'The English Hub para colegios',
  },
  'mkt.schools.meta.og_description': {
    en: 'English department intelligence, assessment and intervention in one platform.',
    ar: 'ذكاء قسم الإنجليزي والتقييم والتدخّل في منصّة واحدة.',
    es: 'Inteligencia, evaluación e intervención del departamento de inglés en una sola plataforma.',
  },
  'mkt.schools.meta.og_alt': {
    en: 'The English Hub for Schools',
    ar: 'The English Hub للمدارس',
    es: 'The English Hub para colegios',
  },

  // ───────────────────────────────────────────────────────────────────
  // Breadcrumb (JSON-LD names - kept English for structured-data hygiene)
  // (BreadcrumbJsonLd values are NOT externalised; see report.)
  // ───────────────────────────────────────────────────────────────────

  // ───────────────────────────────────────────────────────────────────
  // 1. Hero
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.hero.eyebrow': {
    en: 'The English Hub for Schools',
    ar: 'The English Hub للمدارس',
    es: 'The English Hub para colegios',
  },
  'mkt.schools.hero.title': {
    en: 'English department intelligence, assessment and intervention in one platform',
    ar: 'ذكاء قسم الإنجليزي والتقييم والتدخّل في منصّة واحدة',
    es: 'Inteligencia, evaluación e intervención del departamento de inglés en una sola plataforma',
  },
  'mkt.schools.hero.lede': {
    en: 'A school-ready platform helping teachers save time, students improve faster and leaders understand where support is needed.',
    ar: 'منصّة جاهزة للمدارس تساعد المعلّمين يوفّرون وقتهم، والطلاب يتحسّنون أسرع، والقادة يفهمون وين يحتاج الدعم.',
    es: 'Una plataforma lista para colegios que ayuda a los profesores a ahorrar tiempo, a los estudiantes a mejorar más rápido y a los directivos a entender dónde se necesita apoyo.',
  },
  'mkt.schools.hero.cta_primary': {
    en: 'Start a 90-Day School Pilot',
    ar: 'ابدأ تجربة المدرسة 90 يوم',
    es: 'Inicia un piloto escolar de 90 días',
  },
  'mkt.schools.hero.cta_secondary': {
    en: 'See how the pilot works',
    ar: 'شوف كيف تشتغل التجربة',
    es: 'Descubre cómo funciona el piloto',
  },
  'mkt.schools.hero.lozenge.language_literature': {
    en: 'English Language & Literature',
    ar: 'English Language و Literature',
    es: 'English Language y Literature',
  },
  'mkt.schools.hero.lozenge.levels': {
    en: 'KS3 · GCSE · IGCSE · A-Level',
    ar: 'KS3 · GCSE · IGCSE · A-Level',
    es: 'KS3 · GCSE · IGCSE · A-Level',
  },
  'mkt.schools.hero.lozenge.designed_for_departments': {
    en: 'Designed for English departments',
    ar: 'مصمّمة لأقسام الإنجليزي',
    es: 'Diseñada para departamentos de inglés',
  },

  // ───────────────────────────────────────────────────────────────────
  // 2. Problem
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.problem.eyebrow': {
    en: 'The challenge',
    ar: 'التحدّي',
    es: 'El reto',
  },
  'mkt.schools.problem.title': {
    en: 'English departments are under pressure',
    ar: 'أقسام الإنجليزي تحت ضغط',
    es: 'Los departamentos de inglés están bajo presión',
  },
  'mkt.schools.problem.lede': {
    en: 'The work is growing faster than the time available to do it. Most departments tell us the same things.',
    ar: 'الشغل يزيد أسرع من الوقت المتاح له. أكثر الأقسام تقول لنا نفس الكلام.',
    es: 'El trabajo crece más rápido que el tiempo disponible para hacerlo. La mayoría de los departamentos nos dicen lo mismo.',
  },
  'mkt.schools.problem.card.marking_workload': {
    en: 'Marking workload is heavy and repetitive, eating into planning and teaching time.',
    ar: 'عبء التصحيح ثقيل ومكرّر، ويأكل من وقت التخطيط والتدريس.',
    es: 'La carga de corrección es pesada y repetitiva, y resta tiempo de planificación y enseñanza.',
  },
  'mkt.schools.problem.card.practice_inconsistent': {
    en: 'Student practice is inconsistent and hard to monitor across classes.',
    ar: 'تمارين الطلاب غير منتظمة وصعب متابعتها عبر الفصول.',
    es: 'La práctica de los estudiantes es irregular y difícil de supervisar entre clases.',
  },
  'mkt.schools.problem.card.limited_visibility': {
    en: 'Leaders have limited visibility of progress across year groups.',
    ar: 'القادة عندهم رؤية محدودة لتقدّم الطلاب على مستوى الصفوف الدراسية.',
    es: 'Los directivos tienen poca visibilidad del progreso entre los grupos de curso.',
  },
  'mkt.schools.problem.card.late_identification': {
    en: 'Students who need support are often identified too late.',
    ar: 'غالبًا ما يتأخّر اكتشاف الطلاب اللي يحتاجون دعم.',
    es: 'A menudo se identifica demasiado tarde a los estudiantes que necesitan apoyo.',
  },
  'mkt.schools.problem.card.eal_support': {
    en: 'EAL learners need structured support that is hard to resource at scale.',
    ar: 'طلاب EAL يحتاجون دعم منظّم يصعب توفيره على نطاق واسع.',
    es: 'Los estudiantes de EAL necesitan un apoyo estructurado difícil de proporcionar a gran escala.',
  },
  'mkt.schools.problem.card.reporting_scattered': {
    en: 'Reporting is time-consuming and pulls from scattered sources.',
    ar: 'إعداد التقارير ياخذ وقت طويل ويسحب البيانات من مصادر متفرّقة.',
    es: 'La elaboración de informes lleva mucho tiempo y se nutre de fuentes dispersas.',
  },

  // ───────────────────────────────────────────────────────────────────
  // 3. Solution
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.solution.title': {
    en: 'One platform for the whole English department',
    ar: 'منصّة واحدة لقسم الإنجليزي كامل',
    es: 'Una sola plataforma para todo el departamento de inglés',
  },
  'mkt.schools.solution.lede': {
    en: 'Designed to support teacher judgement and make department-wide work visible and manageable.',
    ar: 'مصمّمة عشان تدعم حكم المعلّم وتخلّي شغل القسم كامل واضح وقابل للإدارة.',
    es: 'Diseñada para respaldar el criterio del profesor y hacer que el trabajo de todo el departamento sea visible y manejable.',
  },
  'mkt.schools.solution.panel_eyebrow': {
    en: 'The platform',
    ar: 'المنصّة',
    es: 'La plataforma',
  },
  'mkt.schools.solution.feature.marking.title': {
    en: 'AI-assisted marking & feedback',
    ar: 'تصحيح وملاحظات بمساعدة الذكاء الاصطناعي',
    es: 'Corrección y comentarios asistidos por IA',
  },
  'mkt.schools.solution.feature.marking.body': {
    en: 'Structured, criteria-referenced feedback teachers can review and build on.',
    ar: 'ملاحظات منظّمة ومرتبطة بمعايير التقييم، يقدر المعلّم يراجعها ويبني عليها.',
    es: 'Comentarios estructurados y referenciados a criterios que los profesores pueden revisar y ampliar.',
  },
  'mkt.schools.solution.feature.practice.title': {
    en: 'Student practice & revision',
    ar: 'تمارين الطلاب والمراجعة',
    es: 'Práctica y repaso del estudiante',
  },
  'mkt.schools.solution.feature.practice.body': {
    en: 'Specification-aligned practice across English Language and Literature.',
    ar: 'تمارين متوافقة مع المواصفات في English Language و Literature.',
    es: 'Práctica alineada con las especificaciones en English Language y Literature.',
  },
  'mkt.schools.solution.feature.comprehension.title': {
    en: 'Comprehension & reading support',
    ar: 'دعم الفهم والقراءة',
    es: 'Apoyo de comprensión y lectura',
  },
  'mkt.schools.solution.feature.comprehension.body': {
    en: 'Structured reading and comprehension practice across key stages.',
    ar: 'تمارين قراءة وفهم منظّمة عبر المراحل الدراسية المختلفة.',
    es: 'Práctica estructurada de lectura y comprensión a lo largo de las etapas clave.',
  },
  'mkt.schools.solution.feature.eal.title': {
    en: 'EAL learning support',
    ar: 'دعم تعلّم EAL',
    es: 'Apoyo de aprendizaje EAL',
  },
  'mkt.schools.solution.feature.eal.body': {
    en: 'Differentiated practice built to support EAL learners.',
    ar: 'تمارين متدرّجة مصمّمة لدعم طلاب EAL.',
    es: 'Práctica diferenciada creada para apoyar a los estudiantes de EAL.',
  },
  'mkt.schools.solution.feature.analytics.title': {
    en: 'Class & year-group analytics',
    ar: 'تحليلات الفصل والصف الدراسي',
    es: 'Analíticas de clase y grupo de curso',
  },
  'mkt.schools.solution.feature.analytics.body': {
    en: 'Turn student activity into actionable insight for the department.',
    ar: 'حوّل نشاط الطلاب لرؤى قابلة للتطبيق على مستوى القسم.',
    es: 'Convierte la actividad de los estudiantes en información accionable para el departamento.',
  },
  'mkt.schools.solution.feature.intervention.title': {
    en: 'Intervention insights',
    ar: 'رؤى التدخّل',
    es: 'Información de intervención',
  },
  'mkt.schools.solution.feature.intervention.body': {
    en: 'Surface students who may need support earlier in the term.',
    ar: 'يبيّن لك الطلاب اللي يمكن يحتاجون دعم من بدري في الفصل الدراسي.',
    es: 'Identifica antes en el trimestre a los estudiantes que puedan necesitar apoyo.',
  },
  'mkt.schools.solution.feature.homework.title': {
    en: 'Homework & worksheet support',
    ar: 'دعم الواجبات وأوراق العمل',
    es: 'Apoyo de tareas y fichas de trabajo',
  },
  'mkt.schools.solution.feature.homework.body': {
    en: 'Set practice and generate teacher resources quickly.',
    ar: 'حدّد التمارين وأنشئ موارد المعلّم بسرعة.',
    es: 'Asigna práctica y genera recursos para el profesor rápidamente.',
  },
  'mkt.schools.solution.feature.reports.title': {
    en: 'Student reports',
    ar: 'تقارير الطلاب',
    es: 'Informes de estudiantes',
  },
  'mkt.schools.solution.feature.reports.body': {
    en: 'Clearer progress summaries for parents, reviews and leadership.',
    ar: 'ملخّصات تقدّم أوضح للأهالي والمراجعات والإدارة.',
    es: 'Resúmenes de progreso más claros para padres, revisiones y dirección.',
  },
  'mkt.schools.solution.feature.resource_gen.title': {
    en: 'Teacher resource generation',
    ar: 'إنشاء موارد المعلّم',
    es: 'Generación de recursos para el profesor',
  },
  'mkt.schools.solution.feature.resource_gen.body': {
    en: 'Draft worksheets and practice material aligned to the specification.',
    ar: 'صياغة أوراق عمل ومواد تمارين متوافقة مع المواصفات.',
    es: 'Redacta fichas de trabajo y material de práctica alineados con la especificación.',
  },

  // ───────────────────────────────────────────────────────────────────
  // 4. School value cards (eyebrow + heading + tiles + benefits)
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.value.eyebrow': {
    en: 'For departments and leaders',
    ar: 'للأقسام والقادة',
    es: 'Para departamentos y directivos',
  },
  'mkt.schools.value.title': {
    en: 'What schools get from it',
    ar: 'وش تستفيد منه المدارس',
    es: 'Lo que obtienen los colegios',
  },

  // Value tiles (three top tiles)
  'mkt.schools.value.tile.all_boards.label': {
    en: 'All boards',
    ar: 'كل البوردات',
    es: 'Todas las juntas',
  },
  'mkt.schools.value.tile.all_boards.headline': {
    en: 'Multi-spec',
    ar: 'متعدّد المواصفات',
    es: 'Multiespecificación',
  },
  'mkt.schools.value.tile.all_boards.body': {
    en: 'AQA · Edexcel · OCR · Eduqas · Cambridge',
    ar: 'AQA · Edexcel · OCR · Eduqas · Cambridge',
    es: 'AQA · Edexcel · OCR · Eduqas · Cambridge',
  },
  'mkt.schools.value.tile.eal.label': {
    en: 'EAL ready',
    ar: 'جاهزة لـ EAL',
    es: 'Lista para EAL',
  },
  'mkt.schools.value.tile.eal.headline': {
    en: 'Differentiated',
    ar: 'تمارين متدرّجة',
    es: 'Diferenciada',
  },
  'mkt.schools.value.tile.eal.body': {
    en: 'Differentiated practice for EAL learners',
    ar: 'تمارين متدرّجة لطلاب EAL',
    es: 'Práctica diferenciada para estudiantes de EAL',
  },
  'mkt.schools.value.tile.institutional.label': {
    en: 'School-grade',
    ar: 'بمستوى المدرسة',
    es: 'Nivel institucional',
  },
  'mkt.schools.value.tile.institutional.headline': {
    en: 'Institutional',
    ar: 'مؤسّسيّة',
    es: 'Institucional',
  },
  'mkt.schools.value.tile.institutional.body': {
    en: 'Designed for English departments',
    ar: 'مصمّمة لأقسام الإنجليزي',
    es: 'Diseñada para departamentos de inglés',
  },

  // Benefit grid
  'mkt.schools.benefit.workload.title': {
    en: 'Reduce teacher workload',
    ar: 'قلّل عبء المعلّم',
    es: 'Reduce la carga de trabajo del profesor',
  },
  'mkt.schools.benefit.workload.body': {
    en: 'Reduce repetitive marking so teachers can focus more time on teaching.',
    ar: 'قلّل التصحيح المكرّر حتى يركّز المعلّمون وقتهم على التدريس.',
    es: 'Reduce la corrección repetitiva para que los profesores dediquen más tiempo a enseñar.',
  },
  'mkt.schools.benefit.intervention.title': {
    en: 'Improve intervention visibility',
    ar: 'حسّن وضوح التدخّل',
    es: 'Mejora la visibilidad de la intervención',
  },
  'mkt.schools.benefit.intervention.body': {
    en: 'Identify students who need support earlier, before gaps widen.',
    ar: 'حدّد الطلاب اللي يحتاجون دعم من بدري، قبل لا تكبر الفجوات.',
    es: 'Identifica antes a los estudiantes que necesitan apoyo, antes de que se amplíen las brechas.',
  },
  'mkt.schools.benefit.eal.title': {
    en: 'Support EAL learners',
    ar: 'دعم طلاب EAL',
    es: 'Apoya a los estudiantes de EAL',
  },
  'mkt.schools.benefit.eal.body': {
    en: 'Structured, differentiated practice for EAL cohorts.',
    ar: 'تمارين منظّمة ومتدرّجة لمجموعات EAL.',
    es: 'Práctica estructurada y diferenciada para grupos de EAL.',
  },
  'mkt.schools.benefit.exam_readiness.title': {
    en: 'Strengthen exam readiness',
    ar: 'قوّي الجاهزية للامتحان',
    es: 'Refuerza la preparación para el examen',
  },
  'mkt.schools.benefit.exam_readiness.body': {
    en: 'Specification-aligned practice and feedback across the department.',
    ar: 'تمارين وملاحظات متوافقة مع المواصفات على مستوى القسم كامل.',
    es: 'Práctica y comentarios alineados con la especificación en todo el departamento.',
  },
  'mkt.schools.benefit.reports.title': {
    en: 'Generate clearer student reports',
    ar: 'أنشئ تقارير طلاب أوضح',
    es: 'Genera informes de estudiantes más claros',
  },
  'mkt.schools.benefit.reports.body': {
    en: 'Turn activity into shareable, leadership-ready summaries.',
    ar: 'حوّل النشاط لملخّصات قابلة للمشاركة وجاهزة للإدارة.',
    es: 'Convierte la actividad en resúmenes compartibles y listos para la dirección.',
  },
  'mkt.schools.benefit.cohorts.title': {
    en: 'Track progress across cohorts',
    ar: 'تابع التقدّم عبر المجموعات',
    es: 'Sigue el progreso entre cohortes',
  },
  'mkt.schools.benefit.cohorts.body': {
    en: 'Clearer visibility across classes and year groups.',
    ar: 'رؤية أوضح عبر الفصول والصفوف الدراسية.',
    es: 'Mayor visibilidad entre clases y grupos de curso.',
  },

  // ───────────────────────────────────────────────────────────────────
  // 5. Demo showcase
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.demo.eyebrow': {
    en: 'Interactive walk-through',
    ar: 'جولة تفاعليّة',
    es: 'Recorrido interactivo',
  },
  'mkt.schools.demo.title': {
    en: 'See it in action',
    ar: 'شوفها وهي تشتغل',
    es: 'Míralo en acción',
  },
  'mkt.schools.demo.lede': {
    en: 'Browse the school dashboard, the teacher workspace and the student experience as a guest - no sign-up.',
    ar: 'تصفّح لوحة المدرسة، ومساحة عمل المعلّم، وتجربة الطالب كزائر - بدون تسجيل.',
    es: 'Explora el panel del colegio, el espacio de trabajo del profesor y la experiencia del estudiante como invitado, sin registrarte.',
  },
  'mkt.schools.demo.card.school.title': {
    en: 'School dashboard',
    ar: 'لوحة المدرسة',
    es: 'Panel del colegio',
  },
  'mkt.schools.demo.card.school.body': {
    en: 'A leadership view of practice activity, intervention insights and department reporting.',
    ar: 'عرض قيادي لنشاط التمارين، ورؤى التدخّل، وتقارير القسم.',
    es: 'Una vista de dirección de la actividad de práctica, la información de intervención y los informes del departamento.',
  },
  'mkt.schools.demo.card.teacher.title': {
    en: 'Teacher workspace',
    ar: 'مساحة عمل المعلّم',
    es: 'Espacio de trabajo del profesor',
  },
  'mkt.schools.demo.card.teacher.body': {
    en: 'How a head of English sets practice, reviews marking and tracks class progress.',
    ar: 'كيف يحدّد رئيس قسم الإنجليزي التمارين، ويراجع التصحيح، ويتابع تقدّم الفصل.',
    es: 'Cómo un jefe de departamento de inglés asigna práctica, revisa la corrección y sigue el progreso de la clase.',
  },
  'mkt.schools.demo.card.student.title': {
    en: 'Student experience',
    ar: 'تجربة الطالب',
    es: 'Experiencia del estudiante',
  },
  'mkt.schools.demo.card.student.body': {
    en: 'The practice, comprehension and feedback flow students see in the platform.',
    ar: 'تدفّق التمارين والفهم والملاحظات اللي يشوفه الطالب في المنصّة.',
    es: 'El flujo de práctica, comprensión y comentarios que ven los estudiantes en la plataforma.',
  },
  'mkt.schools.demo.card.cta_open': {
    en: 'Open the demo',
    ar: 'افتح العرض التجريبي',
    es: 'Abrir la demo',
  },

  // ───────────────────────────────────────────────────────────────────
  // 6. Pilot programme
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.pilot.eyebrow': {
    en: 'Founder School Programme',
    ar: 'برنامج المدارس المؤسِّسة',
    es: 'Programa de colegios fundadores',
  },
  'mkt.schools.pilot.title': {
    en: '90-Day Founder School Pilot',
    ar: 'تجربة المدارس المؤسِّسة 90 يوم',
    es: 'Piloto de colegio fundador de 90 días',
  },
  'mkt.schools.pilot.lede': {
    en: 'Most schools begin with a structured one-term pilot focused on one year group or the English department. The pilot is designed to prove value before wider rollout.',
    ar: 'أكثر المدارس تبدأ بتجربة منظّمة لفصل دراسي واحد، تركّز على صفّ دراسي واحد أو على قسم الإنجليزي. التجربة مصمّمة عشان تثبت قيمتها قبل التوسّع.',
    es: 'La mayoría de los colegios empiezan con un piloto estructurado de un trimestre centrado en un grupo de curso o en el departamento de inglés. El piloto está diseñado para demostrar su valor antes de una implantación más amplia.',
  },
  'mkt.schools.pilot.panel_eyebrow': {
    en: 'How the pilot runs',
    ar: 'كيف تجري التجربة',
    es: 'Cómo se desarrolla el piloto',
  },
  'mkt.schools.pilot.cta': {
    en: 'Start a 90-Day School Pilot',
    ar: 'ابدأ تجربة المدرسة 90 يوم',
    es: 'Inicia un piloto escolar de 90 días',
  },

  // ───────────────────────────────────────────────────────────────────
  // 7. Pricing
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.pricing.eyebrow': {
    en: 'Pricing',
    ar: 'الأسعار',
    es: 'Precios',
  },
  'mkt.schools.pricing.title': {
    en: 'Founder pricing',
    ar: 'أسعار المؤسِّسين',
    es: 'Precios de fundador',
  },
  'mkt.schools.pricing.lede': {
    en: 'Founder pilots are available for early school partners. Pricing depends on school size, scope and rollout requirements.',
    ar: 'تجارب المؤسِّسين متاحة لشركاء المدارس الأوائل. السعر يعتمد على حجم المدرسة، ونطاق التطبيق، ومتطلّبات التوسّع.',
    es: 'Los pilotos de fundador están disponibles para los primeros colegios asociados. El precio depende del tamaño del colegio, el alcance y los requisitos de implantación.',
  },

  // ───────────────────────────────────────────────────────────────────
  // 8. Conversion CTA
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.cta.eyebrow': {
    en: 'Talk to us',
    ar: 'كلّمنا',
    es: 'Habla con nosotros',
  },
  'mkt.schools.cta.title': {
    en: 'Book a School Pilot',
    ar: 'احجز تجربة مدرسيّة',
    es: 'Reserva un piloto escolar',
  },
  'mkt.schools.cta.lede': {
    en: 'Tell us about your department and the challenge you most want to address. We will reply within one UK working day to discuss a pilot scoped to your school.',
    ar: 'احكِ لنا عن قسمك وعن التحدّي اللي تبغى تعالجه أكثر شي. بنردّ عليك خلال يوم عمل بريطاني واحد لنناقش تجربة مصمّمة لمدرستك.',
    es: 'Cuéntanos sobre tu departamento y el reto que más quieres abordar. Te responderemos en un día laborable del Reino Unido para hablar de un piloto adaptado a tu colegio.',
  },
  'mkt.schools.cta.bullet.scope': {
    en: 'Start with one year group or the whole department',
    ar: 'ابدأ بصفّ دراسي واحد أو بالقسم كامل',
    es: 'Empieza con un grupo de curso o con todo el departamento',
  },
  'mkt.schools.cta.bullet.onboarding': {
    en: 'Structured onboarding and weekly adoption check-ins',
    ar: 'تأهيل منظّم ومتابعات أسبوعيّة لمعدّل الاستخدام',
    es: 'Incorporación estructurada y seguimientos semanales de adopción',
  },
  'mkt.schools.cta.bullet.impact_report': {
    en: 'End-of-pilot impact report and rollout recommendation',
    ar: 'تقرير أثر نهاية التجربة وتوصية بالتوسّع',
    es: 'Informe de impacto al final del piloto y recomendación de implantación',
  },
  'mkt.schools.cta.form_heading': {
    en: 'Request Founder School pricing',
    ar: 'اطلب أسعار المدارس المؤسِّسة',
    es: 'Solicita precios de colegio fundador',
  },

  // ───────────────────────────────────────────────────────────────────
  // FAQ
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.faq.title': {
    en: 'School leader questions',
    ar: 'أسئلة قادة المدارس',
    es: 'Preguntas de los directivos escolares',
  },
}
