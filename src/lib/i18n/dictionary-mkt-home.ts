/**
 * dictionary-mkt-home.ts - public marketing + homepage chrome supplement.
 *
 * Covers the hard-coded English that previously leaked through on the
 * public marketing surfaces because it never routed through the i18n
 * dictionary:
 *
 *   - src/app/page.tsx                      (home.* - institutional sections)
 *   - src/app/for-teachers/page.tsx         (mkt.teachers.ft.*)
 *   - src/app/for-schools/page.tsx          (mkt.schools.fs.*)
 *   - src/app/for-schools/pilot/page.tsx    (mkt.schools.pilot.*)
 *   - src/app/about/content-verification    (about.cv.*)
 *
 * Namespaces are deliberately distinct from the existing supplements to
 * avoid collisions:
 *   - `homepage.*`        is owned by dictionary-homepage.ts (board picker)
 *   - `mkt.teachers.*`    (non-`.ft.`) is owned by dictionary-mkt-teachers.ts
 *                         (the /teachers page, NOT /for-teachers)
 *   - `about.*` / `about.verified.*` are owned by dictionary.ts
 * So we use `home.*`, `mkt.teachers.ft.*`, `mkt.schools.fs.*`,
 * `mkt.schools.pilot.*` and `about.cv.*` here.
 *
 * EN values are verbatim from the page source (including curly
 * apostrophes / &amp; / em-dashes) so English mode is byte-for-byte
 * unchanged. AR values are genuine Khaleeji (Gulf) Arabic in a warm
 * marketing register - NOT MSA-stiff, NOT machine, NEVER Levantine.
 *
 * Brand / technical tokens stay Latin inside the Arabic per Gulf
 * convention: The English Hub, GCSE, IGCSE, IELTS, EAL, KS3, AQA, OCR,
 * Edexcel, Eduqas, WJEC, Cambridge, AO, AI, Ofsted, GDPR, DPA, CPD,
 * £ amounts and numbers.
 *
 * Annotated `Record<string, { en: string; ar?: string; es?: string }>` (NOT `as
 * const`) so string indexing works when the orchestrator wires it into
 * the master lookup() chain. Do NOT edit dictionary.ts from here.
 */

export const MKT_HOME_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  /* ═══════════════════ HOMEPAGE (src/app/page.tsx) ═══════════════════ */

  // ── Students board intro band ──────────────────────────────────────
  'home.students.eyebrow': {
    en: 'For students & parents',
    ar: 'للطلاب والأهل',
    es: 'Para estudiantes y padres',
  },
  'home.students.heading': {
    en: 'Studying for an English exam? Choose your board',
    ar: 'تدرس لامتحان إنجليزي؟ اختر البورد حقّك',
    es: '¿Estudias para un examen de inglés? Elige tu junta examinadora',
  },
  'home.students.body': {
    en: 'Individual learners and families can start straight away - pick your exam board and land in a personalised revision hub.',
    ar: 'الطلاب الأفراد والعائلات يقدرون يبدون على طول - اختر بورد الامتحان حقّك وبتوصل لقسم مراجعة مخصّص لك.',
    es: 'Los estudiantes individuales y las familias pueden empezar de inmediato: elige tu junta examinadora y accede a un espacio de repaso personalizado.',
  },

  // ── Institutional hero (HomeHero) ──────────────────────────────────
  'home.hero.eyebrow': {
    en: 'GCSE, IGCSE & KS3 English revision',
    ar: 'مراجعة إنجليزي GCSE و IGCSE و KS3',
    es: 'Repaso de inglés GCSE, IGCSE y KS3',
  },
  'home.hero.title': {
    en: 'Revise GCSE and IGCSE English, marked by AI against the real mark scheme',
    ar: 'راجع إنجليزي GCSE و IGCSE، وتصحيح بالـ AI على نفس معايير الامتحان الحقيقية',
    es: 'Repasa inglés GCSE e IGCSE, corregido con IA según el verdadero esquema de calificación',
  },
  'home.hero.body': {
    en: 'Practice papers, model answers and instant feedback on your essays, aligned to your exam board: AQA, Edexcel, OCR, Eduqas and Cambridge IGCSE. Free to start, built for students and parents, and trusted by schools.',
    ar: 'أوراق تدريب، إجابات نموذجية، وتغذية راجعة فورية على مقالاتك، متوافقة مع بورد الامتحان حقّك: AQA و Edexcel و OCR و Eduqas و Cambridge IGCSE. تبدأ ببلاش، مصمّم للطلاب والأهل، ومعتمد عند المدارس.',
    es: 'Exámenes de práctica, respuestas modelo y comentarios instantáneos sobre tus redacciones, alineados con tu junta examinadora: AQA, Edexcel, OCR, Eduqas y Cambridge IGCSE. Gratis para empezar, creado para estudiantes y padres, y con la confianza de los colegios.',
  },
  'home.hero.cta_board': {
    en: 'Choose your exam board',
    ar: 'اختر بورد الامتحان حقّك',
    es: 'Elige tu junta examinadora',
  },
  'home.hero.cta_schools': {
    en: 'For schools and teachers',
    ar: 'للمدارس والمعلّمين',
    es: 'Para colegios y profesores',
  },
  'home.hero.footnote': {
    en: 'English Language, Literature and EAL. KS3 to A-Level, aligned to your specification.',
    ar: 'English Language و Literature و EAL. من KS3 لين A-Level، متوافق مع منهجك.',
    es: 'English Language, Literature y EAL. De KS3 a A-Level, alineado con tu temario.',
  },

  // ── Audience section ───────────────────────────────────────────────
  'home.audience.heading': {
    en: 'Built for students, teachers and schools',
    ar: 'مصمّم للطلاب والمعلّمين والمدارس',
    es: 'Creado para estudiantes, profesores y colegios',
  },
  'home.audience.body': {
    en: 'One platform that supports the whole English department - from individual practice to department-wide intelligence.',
    ar: 'منصّة وحدة تدعم قسم اللغة الإنجليزية كامل - من التدريب الفردي لين الرؤية على مستوى القسم كله.',
    es: 'Una sola plataforma que apoya a todo el departamento de inglés: desde la práctica individual hasta la inteligencia de todo el departamento.',
  },
  'home.audience.students.title': {
    en: 'Students',
    ar: 'الطلاب',
    es: 'Estudiantes',
  },
  'home.audience.students.body': {
    en: 'Structured practice, essay feedback and revision aligned to the specification their school teaches.',
    ar: 'تدريب منظّم، تغذية راجعة على المقالات، ومراجعة متوافقة مع المنهج اللي تدرّسه مدرستهم.',
    es: 'Práctica estructurada, comentarios sobre las redacciones y repaso alineado con el temario que enseña su colegio.',
  },
  'home.audience.students.cta': {
    en: 'For students',
    ar: 'للطلاب',
    es: 'Para estudiantes',
  },
  'home.audience.teachers.title': {
    en: 'Teachers',
    ar: 'المعلّمون',
    es: 'Profesores',
  },
  'home.audience.teachers.body': {
    en: 'AI-assisted feedback, homework setting and clearer insight into class weaknesses - without adding workload.',
    ar: 'تغذية راجعة بمساعدة الـ AI، تحضير الواجبات، ورؤية أوضح عن نقاط ضعف الصف - بدون ما تزيد على شغلك.',
    es: 'Comentarios asistidos por IA, asignación de deberes y una visión más clara de las debilidades de la clase, sin aumentar la carga de trabajo.',
  },
  'home.audience.teachers.cta': {
    en: 'For teachers',
    ar: 'للمعلّمين',
    es: 'Para profesores',
  },
  'home.audience.schools.title': {
    en: 'Schools',
    ar: 'المدارس',
    es: 'Colegios',
  },
  'home.audience.schools.body': {
    en: 'Department-wide assessment, intervention insight and reporting that leaders can act on.',
    ar: 'تقييم على مستوى القسم، رؤية للتدخّل، وتقارير تقدر الإدارة تتصرّف عليها.',
    es: 'Evaluación de todo el departamento, información sobre intervenciones e informes sobre los que los directivos pueden actuar.',
  },
  'home.audience.schools.cta': {
    en: 'For schools',
    ar: 'للمدارس',
    es: 'Para colegios',
  },

  // ── School platform section ────────────────────────────────────────
  'home.platform.eyebrow': {
    en: 'School infrastructure for English departments',
    ar: 'بنية تحتية مدرسية لأقسام اللغة الإنجليزية',
    es: 'Infraestructura escolar para departamentos de inglés',
  },
  'home.platform.heading': {
    en: 'From revision support to department-wide English intelligence',
    ar: 'من دعم المراجعة لين رؤية إنجليزية على مستوى القسم كله',
    es: 'Del apoyo al repaso a la inteligencia de inglés de todo el departamento',
  },
  'home.platform.body': {
    en: 'The English Hub is designed to become embedded in how an English department works - assessment, feedback, intervention and reporting in one place, supporting teacher judgement rather than replacing it.',
    ar: 'The English Hub مصمّم يصير جزء من طريقة شغل قسم اللغة الإنجليزية - التقييم والتغذية الراجعة والتدخّل والتقارير بمكان واحد، يدعم حكم المعلّم بدل ما يحلّ محلّه.',
    es: 'The English Hub está diseñado para integrarse en la forma de trabajar de un departamento de inglés: evaluación, comentarios, intervención e informes en un solo lugar, apoyando el criterio del profesor en lugar de sustituirlo.',
  },

  // ── Key benefits section ───────────────────────────────────────────
  'home.benefits.heading': {
    en: 'What it helps schools do',
    ar: 'شنو يساعد المدارس تسوّيه',
    es: 'En qué ayuda a los colegios',
  },
  'home.benefits.workload.title': {
    en: 'Reduce teacher workload',
    ar: 'قلّل ضغط شغل المعلّم',
    es: 'Reducir la carga de trabajo del profesor',
  },
  'home.benefits.workload.body': {
    en: 'Reduce repetitive marking workload so teachers can focus more time on teaching.',
    ar: 'قلّل شغل التصحيح المتكرّر عشان المعلّمين يركّزون وقت أكثر على التدريس.',
    es: 'Reduce la carga de corrección repetitiva para que los profesores puedan dedicar más tiempo a enseñar.',
  },
  'home.benefits.intervention.title': {
    en: 'Improve intervention visibility',
    ar: 'حسّن وضوح التدخّل',
    es: 'Mejorar la visibilidad de las intervenciones',
  },
  'home.benefits.intervention.body': {
    en: 'Identify students who may need support earlier, before gaps widen.',
    ar: 'اكتشف الطلاب اللي يمكن يحتاجون دعم بوقت أبكر، قبل ما تكبر الفجوات.',
    es: 'Identifica antes a los estudiantes que pueden necesitar apoyo, antes de que las carencias se agranden.',
  },
  'home.benefits.eal.title': {
    en: 'Support EAL learners',
    ar: 'ادعم متعلّمي EAL',
    es: 'Apoyar a los estudiantes de EAL',
  },
  'home.benefits.eal.body': {
    en: 'Structured practice designed to build EAL learners’ confidence in English.',
    ar: 'تدريب منظّم مصمّم يبني ثقة متعلّمي EAL في الإنجليزي.',
    es: 'Práctica estructurada diseñada para reforzar la confianza de los estudiantes de EAL en inglés.',
  },
  'home.benefits.readiness.title': {
    en: 'Strengthen exam readiness',
    ar: 'قوّي الجاهزية للامتحان',
    es: 'Reforzar la preparación para el examen',
  },
  'home.benefits.readiness.body': {
    en: 'Specification-aligned practice across English Language and Literature.',
    ar: 'تدريب متوافق مع المنهج عبر English Language و Literature.',
    es: 'Práctica alineada con el temario en English Language y Literature.',
  },
  'home.benefits.reports.title': {
    en: 'Generate clearer student reports',
    ar: 'جهّز تقارير طلاب أوضح',
    es: 'Generar informes de estudiantes más claros',
  },
  'home.benefits.reports.body': {
    en: 'Turn student activity into clearer, shareable progress summaries.',
    ar: 'حوّل نشاط الطالب لملخّصات تقدّم أوضح وقابلة للمشاركة.',
    es: 'Convierte la actividad del estudiante en resúmenes de progreso más claros y fáciles de compartir.',
  },
  'home.benefits.cohorts.title': {
    en: 'Track progress across cohorts',
    ar: 'تابع التقدّم عبر الدفعات',
    es: 'Seguir el progreso entre promociones',
  },
  'home.benefits.cohorts.body': {
    en: 'Give leaders clearer visibility across classes and year groups.',
    ar: 'اعطِ الإدارة وضوح أكثر عبر الصفوف والسنوات الدراسية.',
    es: 'Ofrece a los directivos una visibilidad más clara entre clases y cursos.',
  },

  // ── Capabilities section ───────────────────────────────────────────
  'home.capabilities.heading': {
    en: 'AI-assisted marking, analytics and intervention',
    ar: 'تصحيح بمساعدة الـ AI، تحليلات، وتدخّل',
    es: 'Corrección asistida por IA, analíticas e intervención',
  },
  'home.capabilities.body': {
    en: 'Designed to support teacher judgement and surface where attention is needed - not to replace professional assessment.',
    ar: 'مصمّم يدعم حكم المعلّم ويبيّن وين يحتاج انتباه - مو يحلّ محل التقييم المهني.',
    es: 'Diseñado para apoyar el criterio del profesor y mostrar dónde hace falta atención, no para sustituir la evaluación profesional.',
  },
  'home.capabilities.feedback.title': {
    en: 'AI-assisted marking & feedback',
    ar: 'تصحيح وتغذية راجعة بمساعدة الـ AI',
    es: 'Corrección y comentarios asistidos por IA',
  },
  'home.capabilities.feedback.body': {
    en: 'Students receive structured, criteria-referenced feedback teachers can review and build on.',
    ar: 'الطلاب يحصلون تغذية راجعة منظّمة مرجعها معايير التقييم، يقدر المعلّم يراجعها ويبني فوقها.',
    es: 'Los estudiantes reciben comentarios estructurados y referenciados a los criterios que los profesores pueden revisar y ampliar.',
  },
  'home.capabilities.analytics.title': {
    en: 'Class & year-group analytics',
    ar: 'تحليلات الصف والسنة الدراسية',
    es: 'Analíticas por clase y por curso',
  },
  'home.capabilities.analytics.body': {
    en: 'See patterns across cohorts and where the department should focus next.',
    ar: 'شوف الأنماط عبر الدفعات ووين لازم يركّز القسم بعدين.',
    es: 'Observa los patrones entre promociones y dónde debería centrarse el departamento a continuación.',
  },
  'home.capabilities.insights.title': {
    en: 'Intervention insights',
    ar: 'رؤى التدخّل',
    es: 'Información sobre intervenciones',
  },
  'home.capabilities.insights.body': {
    en: 'Surface students who may need support earlier in the term.',
    ar: 'بيّن الطلاب اللي يمكن يحتاجون دعم بوقت أبكر في الفصل.',
    es: 'Detecta a los estudiantes que pueden necesitar apoyo más temprano en el trimestre.',
  },
  'home.capabilities.homework.title': {
    en: 'Homework & worksheet support',
    ar: 'دعم الواجبات وأوراق العمل',
    es: 'Apoyo con deberes y fichas de trabajo',
  },
  'home.capabilities.homework.body': {
    en: 'Set practice and generate resources aligned to the specification.',
    ar: 'حضّر تمارين وجهّز موارد متوافقة مع المنهج.',
    es: 'Asigna práctica y genera recursos alineados con el temario.',
  },
  'home.capabilities.reports.title': {
    en: 'Student reports',
    ar: 'تقارير الطلاب',
    es: 'Informes de estudiantes',
  },
  'home.capabilities.reports.body': {
    en: 'Clearer progress summaries for parents, reviews and leadership.',
    ar: 'ملخّصات تقدّم أوضح للأهل والمراجعات والإدارة.',
    es: 'Resúmenes de progreso más claros para padres, revisiones y dirección.',
  },
  'home.capabilities.reading.title': {
    en: 'Reading & comprehension support',
    ar: 'دعم القراءة والفهم',
    es: 'Apoyo a la lectura y la comprensión',
  },
  'home.capabilities.reading.body': {
    en: 'Structured comprehension and reading practice across key stages.',
    ar: 'تمارين فهم وقراءة منظّمة عبر مراحل الـ key stages.',
    es: 'Práctica estructurada de comprensión y lectura en todas las etapas clave.',
  },

  // ── EAL section ────────────────────────────────────────────────────
  'home.eal.heading': {
    en: 'Structured English support for EAL learners',
    ar: 'دعم إنجليزي منظّم لمتعلّمي EAL',
    es: 'Apoyo estructurado de inglés para estudiantes de EAL',
  },
  'home.eal.body': {
    en: 'A growing priority for international and GCC schools. The English Hub is built to help EAL learners develop vocabulary, reading fluency, comprehension and writing confidence, with teacher visibility over progress and differentiated support.',
    ar: 'أولوية تكبر يوم بعد يوم للمدارس الدولية ومدارس الخليج. The English Hub مبني يساعد متعلّمي EAL يطوّرون المفردات، طلاقة القراءة، الفهم، وثقة الكتابة، مع وضوح للمعلّم عن التقدّم ودعم متفاوت المستوى.',
    es: 'Una prioridad creciente para los colegios internacionales y del Golfo. The English Hub está creado para ayudar a los estudiantes de EAL a desarrollar vocabulario, fluidez lectora, comprensión y confianza en la escritura, con visibilidad del profesor sobre el progreso y apoyo diferenciado.',
  },
  'home.eal.cta': {
    en: 'Explore EAL support',
    ar: 'استكشف دعم EAL',
    es: 'Explora el apoyo de EAL',
  },

  // ── Pilot CTA section ──────────────────────────────────────────────
  'home.pilot.eyebrow': {
    en: 'Founder School Programme',
    ar: 'برنامج المدارس المؤسِّسة',
    es: 'Programa de Colegios Fundadores',
  },
  'home.pilot.heading': {
    en: 'Start a 90-day Founder School Pilot',
    ar: 'ابدأ تجربة مدرسة مؤسِّسة لمدة 90 يوم',
    es: 'Inicia un Pilotaje de Colegio Fundador de 90 días',
  },
  'home.pilot.body': {
    en: 'Most schools begin with a structured one-term pilot focused on one year group or the English department. The pilot is designed to prove value before wider rollout.',
    ar: 'أغلب المدارس تبدأ بتجربة منظّمة لمدة فصل وحده تركّز على سنة دراسية وحدة أو قسم اللغة الإنجليزية. التجربة مصمّمة تثبت القيمة قبل التوسّع الأكبر.',
    es: 'La mayoría de los colegios empiezan con un pilotaje estructurado de un trimestre centrado en un curso o en el departamento de inglés. El pilotaje está diseñado para demostrar el valor antes de un despliegue más amplio.',
  },
  'home.pilot.cta_book': {
    en: 'Book a School Pilot',
    ar: 'احجز تجربة مدرسة',
    es: 'Reserva un Pilotaje Escolar',
  },
  'home.pilot.cta_deploy': {
    en: 'Explore School Deployment',
    ar: 'استكشف نشر المنصّة في المدرسة',
    es: 'Explora el Despliegue Escolar',
  },

  // ── Pricing preview section ────────────────────────────────────────
  'home.pricing.heading': {
    en: 'Pricing',
    ar: 'الأسعار',
    es: 'Precios',
  },
  'home.pricing.body': {
    en: 'Individual access for learners and teachers, and structured pilots and annual deployment for schools.',
    ar: 'وصول فردي للطلاب والمعلّمين، وتجارب منظّمة ونشر سنوي للمدارس.',
    es: 'Acceso individual para estudiantes y profesores, y pilotajes estructurados y despliegue anual para colegios.',
  },
  'home.pricing.student.label': {
    en: 'Student',
    ar: 'طالب',
    es: 'Estudiante',
  },
  'home.pricing.student.body': {
    en: 'Individual learner access.',
    ar: 'وصول للطالب الفرد.',
    es: 'Acceso individual para el estudiante.',
  },
  'home.pricing.teacher.label': {
    en: 'Teacher',
    ar: 'معلّم',
    es: 'Profesor',
  },
  'home.pricing.teacher.body': {
    en: 'Teacher tools and classroom support.',
    ar: 'أدوات المعلّم ودعم الصف.',
    es: 'Herramientas para el profesor y apoyo en el aula.',
  },
  'home.pricing.schools.label': {
    en: 'Schools',
    ar: 'المدارس',
    es: 'Colegios',
  },
  // 'Pilots {from}' - {from} stays as the PRICING_DISPLAY token at render.
  'home.pricing.schools.pilots_prefix': {
    en: 'Pilots',
    ar: 'تجارب من',
    es: 'Pilotajes',
  },
  // 'Annual deployment {from}.' - prefix + token + trailing dot at render.
  'home.pricing.schools.annual_prefix': {
    en: 'Annual deployment',
    ar: 'نشر سنوي من',
    es: 'Despliegue anual',
  },
  'home.pricing.cta': {
    en: 'Request School Pricing',
    ar: 'اطلب أسعار المدارس',
    es: 'Solicita los precios para colegios',
  },

  // ── Home FAQ heading + Final CTA ───────────────────────────────────
  'home.faq.school_leaders': {
    en: 'Questions from school leaders',
    ar: 'أسئلة من قادة المدارس',
    es: 'Preguntas de los directivos escolares',
  },
  'home.final.heading': {
    en: 'Discuss your English department’s needs',
    ar: 'ناقش احتياجات قسم اللغة الإنجليزية حقّك',
    es: 'Habla de las necesidades de tu departamento de inglés',
  },
  'home.final.body': {
    en: 'Talk to us about a pilot, an annual deployment, or how The English Hub could support your department.',
    ar: 'كلّمنا عن تجربة، أو نشر سنوي، أو كيف The English Hub يقدر يدعم قسمك.',
    es: 'Habla con nosotros sobre un pilotaje, un despliegue anual o cómo The English Hub podría apoyar a tu departamento.',
  },
  'home.final.cta_book': {
    en: 'Book a School Pilot',
    ar: 'احجز تجربة مدرسة',
    es: 'Reserva un Pilotaje Escolar',
  },
  'home.final.cta_rollout': {
    en: 'Discuss a School Rollout',
    ar: 'ناقش نشر المنصّة في المدرسة',
    es: 'Habla sobre un Despliegue Escolar',
  },

  /* ══════════════ FOR TEACHERS (src/app/for-teachers/page.tsx) ══════════════ */

  // ── Feature cards (module-scope `features` array) ──────────────────
  'mkt.teachers.ft.feat.lesson_builder.title': {
    en: 'Lesson Builder',
    ar: 'بنّاء الدروس',
    es: 'Constructor de lecciones',
  },
  'mkt.teachers.ft.feat.lesson_builder.desc': {
    en: 'Build structured, specification-aligned lessons in minutes. Add starter activities, main tasks, and plenaries with drag-and-drop ease, then share instantly with any class.',
    ar: 'ابنِ دروس منظّمة متوافقة مع المنهج بدقائق. ضيف أنشطة افتتاحية، مهام رئيسية، وختام بسهولة السحب والإفلات، وبعدين شاركها على طول مع أي صف.',
    es: 'Crea lecciones estructuradas y alineadas con el temario en minutos. Añade actividades de inicio, tareas principales y cierres con la sencillez de arrastrar y soltar, y luego compártelas al instante con cualquier clase.',
  },
  'mkt.teachers.ft.feat.ai_marking.title': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقالات بالـ AI',
    es: 'Corrección de redacciones con IA',
  },
  'mkt.teachers.ft.feat.ai_marking.desc': {
    en: "Students submit essays and get instant, detailed feedback aligned to your school's chosen exam board mark scheme. Review and adjust before it reaches them.",
    ar: 'الطلاب يسلّمون مقالاتهم ويحصلون تغذية راجعة فورية ومفصّلة متوافقة مع معايير تصحيح بورد الامتحان اللي اختارته مدرستك. راجع وعدّل قبل ما توصلهم.',
    es: 'Los estudiantes envían sus redacciones y reciben comentarios instantáneos y detallados, alineados con el esquema de calificación de la junta examinadora elegida por tu colegio. Revisa y ajusta antes de que les lleguen.',
  },
  'mkt.teachers.ft.feat.analytics.title': {
    en: 'Student Progress Analytics',
    ar: 'تحليلات تقدّم الطلاب',
    es: 'Analíticas del progreso del estudiante',
  },
  'mkt.teachers.ft.feat.analytics.desc': {
    en: 'Track every student in real time. Spot who is falling behind, who is excelling, and where the whole class needs extra support -- all in one dashboard.',
    ar: 'تابع كل طالب لحظة بلحظة. شوف منو متأخّر، منو متميّز، ووين الصف كله يحتاج دعم زيادة -- كله في لوحة وحدة.',
    es: 'Sigue a cada estudiante en tiempo real. Detecta quién se está quedando atrás, quién destaca y dónde toda la clase necesita más apoyo, todo en un solo panel.',
  },
  'mkt.teachers.ft.feat.homework.title': {
    en: 'Homework & Assignment Manager',
    ar: 'مدير الواجبات والمهام',
    es: 'Gestor de deberes y tareas',
  },
  'mkt.teachers.ft.feat.homework.desc': {
    en: 'Set assignments, track submissions, chase overdue work, and monitor completion rates across all your classes without juggling spreadsheets.',
    ar: 'حضّر المهام، تابع التسليمات، طالب بالشغل المتأخّر، وراقب نسب الإنجاز عبر كل صفوفك بدون ما تتلخبط بين الجداول.',
    es: 'Asigna tareas, sigue las entregas, reclama el trabajo atrasado y controla las tasas de finalización en todas tus clases sin malabares con hojas de cálculo.',
  },
  'mkt.teachers.ft.feat.library.title': {
    en: 'Ready Resources Library',
    ar: 'مكتبة موارد جاهزة',
    es: 'Biblioteca de recursos listos para usar',
  },
  'mkt.teachers.ft.feat.library.desc': {
    en: 'A growing library of worksheets, revision materials, model answers, and starter activities - all ready to print or share digitally.',
    ar: 'مكتبة تكبر يوم بعد يوم فيها أوراق عمل، مواد مراجعة، إجابات نموذجية، وأنشطة افتتاحية - كلها جاهزة للطباعة أو المشاركة رقمياً.',
    es: 'Una biblioteca creciente de fichas de trabajo, materiales de repaso, respuestas modelo y actividades de inicio, todo listo para imprimir o compartir digitalmente.',
  },
  'mkt.teachers.ft.feat.board.title': {
    en: 'Your Exam Board, Your Content',
    ar: 'بوردك، ومحتواك',
    es: 'Tu junta examinadora, tu contenido',
  },
  'mkt.teachers.ft.feat.board.desc': {
    en: 'We support AQA, Edexcel, OCR, WJEC, and IGCSE/CAIE. Your school selects one board during setup and every lesson, resource, and mark scheme is tailored to that specification -- so nothing is wasted.',
    ar: 'ندعم AQA و Edexcel و OCR و WJEC و IGCSE/CAIE. مدرستك تختار بورد واحد عند الإعداد وكل درس ومورد ومعيار تصحيح يتفصّل على ذاك المنهج -- عشان ما يضيع شي.',
    es: 'Damos soporte a AQA, Edexcel, OCR, WJEC e IGCSE/CAIE. Tu colegio selecciona una junta durante la configuración y cada lección, recurso y esquema de calificación se adapta a ese temario, para que no se desperdicie nada.',
  },

  // ── Time savers (module-scope `timeSavers` array) ──────────────────
  'mkt.teachers.ft.timesaver.1': {
    en: 'Spend less time on routine planning and marking - the AI shoulders the repetitive work.',
    ar: 'وقت أقل على التحضير والتصحيح الروتيني - الـ AI يشيل الشغل المتكرّر عنك.',
    es: 'Dedica menos tiempo a la planificación y la corrección rutinarias: la IA se encarga del trabajo repetitivo.',
  },
  'mkt.teachers.ft.timesaver.2': {
    en: 'Auto-mark homework essays in seconds',
    ar: 'صحّح مقالات الواجبات تلقائياً بثواني',
    es: 'Corrige automáticamente las redacciones de los deberes en segundos',
  },
  'mkt.teachers.ft.timesaver.3': {
    en: 'Generate worksheets and starter activities instantly',
    ar: 'جهّز أوراق عمل وأنشطة افتتاحية على طول',
    es: 'Genera fichas de trabajo y actividades de inicio al instante',
  },
  'mkt.teachers.ft.timesaver.4': {
    en: 'Get at-a-glance class progress without manual tracking',
    ar: 'شوف تقدّم الصف بلمحة بدون متابعة يدوية',
    es: 'Consulta el progreso de la clase de un vistazo sin seguimiento manual',
  },
  'mkt.teachers.ft.timesaver.5': {
    en: 'Predict student grades before exam season',
    ar: 'توقّع درجات الطلاب قبل موسم الامتحانات',
    es: 'Predice las notas de los estudiantes antes de la temporada de exámenes',
  },
  'mkt.teachers.ft.timesaver.6': {
    en: 'Share resources across all your classes in one click',
    ar: 'شارك الموارد عبر كل صفوفك بضغطة وحدة',
    es: 'Comparte recursos en todas tus clases con un solo clic',
  },
  'mkt.teachers.ft.timesaver.7': {
    en: 'Eliminate paper-based marking admin',
    ar: 'تخلّص من روتين التصحيح الورقي',
    es: 'Elimina la gestión de la corrección en papel',
  },
  'mkt.teachers.ft.timesaver.8': {
    en: 'Access the ready-made resource library any time',
    ar: 'ادخل مكتبة الموارد الجاهزة في أي وقت',
    es: 'Accede a la biblioteca de recursos lista para usar en cualquier momento',
  },

  // ── FAQ (module-scope `faqs` array) ────────────────────────────────
  'mkt.teachers.ft.faq.cost.q': {
    en: 'How much does it cost?',
    ar: 'كم تكلفته؟',
    es: '¿Cuánto cuesta?',
  },
  'mkt.teachers.ft.faq.cost.a': {
    en: 'Every feature is free to try -- you get 3 free uses per tool with no card required. When you are ready to upgrade, the Teacher plan is £6.99/month or £67.99/year at the Early Access / Founding rate (locked until August 2026; Standard pricing from August 2026 is £11.99/month or £99/year). Every paid plan starts with a 7-day free trial (card required, cancel before day 7). School plans are available through our Founding Schools Programme -- £4,000/year for the first 10 schools, anchored against projected Standard Pricing of £8,000/year. Book a call to discuss.',
    ar: 'كل ميزة تقدر تجرّبها ببلاش -- تحصل 3 استخدامات مجانية لكل أداة بدون بطاقة. لمّا تكون جاهز للترقية، خطة المعلّم بـ £6.99 بالشهر أو £67.99 بالسنة بسعر الـ Early Access / Founding (مثبّت لين أغسطس 2026؛ السعر العادي من أغسطس 2026 هو £11.99 بالشهر أو £99 بالسنة). كل خطة مدفوعة تبدأ بتجربة مجانية 7 أيام (تحتاج بطاقة، سكّر الاشتراك قبل اليوم السابع). خطط المدارس متوفّرة عبر برنامج المدارس المؤسِّسة -- £4,000 بالسنة لأول 10 مدارس، مقابل سعر عادي متوقّع £8,000 بالسنة. احجز مكالمة عشان نتناقش.',
    es: 'Todas las funciones se pueden probar gratis: dispones de 3 usos gratuitos por herramienta sin necesidad de tarjeta. Cuando estés listo para mejorar, el plan Profesor cuesta £6.99/mes o £67.99/año con la tarifa Early Access / Founding (fija hasta agosto de 2026; el precio estándar a partir de agosto de 2026 es £11.99/mes o £99/año). Todos los planes de pago empiezan con una prueba gratuita de 7 días (se requiere tarjeta, cancela antes del día 7). Los planes para colegios están disponibles a través de nuestro Programa de Colegios Fundadores: £4,000/año para los primeros 10 colegios, anclado frente al precio estándar previsto de £8,000/año. Reserva una llamada para hablarlo.',
  },
  'mkt.teachers.ft.faq.features.q': {
    en: 'What features are included?',
    ar: 'شنو المزايا اللي يشملها؟',
    es: '¿Qué funciones se incluyen?',
  },
  'mkt.teachers.ft.faq.features.a': {
    en: 'Every feature is available on the free tier with 3 uses per tool -- AI Lesson Plans, AI Marking, Worksheet Builder, Student Progress Analytics, and more. The Premium plan removes all limits and gives you full access to the ready resources library, predicted grades, and complete exam board coverage. There are no add-on charges.',
    ar: 'كل ميزة متوفّرة في الباقة المجانية مع 3 استخدامات لكل أداة -- خطط دروس بالـ AI، تصحيح بالـ AI، بنّاء أوراق العمل، تحليلات تقدّم الطلاب، وأكثر. خطة Premium تشيل كل الحدود وتعطيك وصول كامل لمكتبة الموارد الجاهزة، الدرجات المتوقّعة، وتغطية كاملة لبوردات الامتحان. ما فيه رسوم إضافية.',
    es: 'Todas las funciones están disponibles en el nivel gratuito con 3 usos por herramienta: planes de lección con IA, corrección con IA, constructor de fichas de trabajo, analíticas del progreso del estudiante y más. El plan Premium elimina todos los límites y te da acceso completo a la biblioteca de recursos lista para usar, las notas previstas y la cobertura completa de las juntas examinadoras. No hay cargos adicionales.',
  },
  'mkt.teachers.ft.faq.boards.q': {
    en: 'Which exam boards do you cover?',
    ar: 'أي بوردات امتحان تغطّون؟',
    es: '¿Qué juntas examinadoras cubrís?',
  },
  'mkt.teachers.ft.faq.boards.a': {
    en: "We support all major boards: AQA, Edexcel, OCR, WJEC Eduqas, and IGCSE/CAIE. Your school selects one exam board during setup and all content -- lessons, resources, mark schemes, and AI feedback -- is tailored to that board's specification. You only ever see what is relevant to your students' exams.",
    ar: 'ندعم كل البوردات الرئيسية: AQA و Edexcel و OCR و WJEC Eduqas و IGCSE/CAIE. مدرستك تختار بورد واحد عند الإعداد وكل المحتوى -- الدروس، الموارد، معايير التصحيح، وتغذية الـ AI الراجعة -- يتفصّل على منهج ذاك البورد. ما تشوف إلا اللي يخص امتحانات طلابك.',
    es: 'Damos soporte a todas las juntas principales: AQA, Edexcel, OCR, WJEC Eduqas e IGCSE/CAIE. Tu colegio selecciona una junta examinadora durante la configuración y todo el contenido (lecciones, recursos, esquemas de calificación y comentarios de IA) se adapta al temario de esa junta. Solo ves lo que es relevante para los exámenes de tus estudiantes.',
  },
  'mkt.teachers.ft.faq.marking.q': {
    en: 'How does AI Essay Marking work?',
    ar: 'كيف يشتغل تصحيح المقالات بالـ AI؟',
    es: '¿Cómo funciona la corrección de redacciones con IA?',
  },
  'mkt.teachers.ft.faq.marking.a': {
    en: 'Students submit essays through the platform. Our AI analyses the response against the mark scheme criteria for their exam board, provides detailed written feedback, and generates a predicted grade. You review and adjust everything before the student sees it.',
    ar: 'الطلاب يسلّمون مقالاتهم عبر المنصّة. الـ AI حقّنا يحلّل الإجابة على معايير التصحيح حق بوردهم، يعطي تغذية راجعة مكتوبة ومفصّلة، ويطلّع درجة متوقّعة. وانت تراجع وتعدّل كل شي قبل ما يشوفه الطالب.',
    es: 'Los estudiantes envían sus redacciones a través de la plataforma. Nuestra IA analiza la respuesta frente a los criterios del esquema de calificación de su junta examinadora, ofrece comentarios escritos detallados y genera una nota prevista. Tú revisas y ajustas todo antes de que el estudiante lo vea.',
  },
  'mkt.teachers.ft.faq.upgrade.q': {
    en: 'Can I upgrade to a school plan later?',
    ar: 'أقدر أترقّى لخطة مدرسة بعدين؟',
    es: '¿Puedo pasar a un plan para colegios más adelante?',
  },
  'mkt.teachers.ft.faq.upgrade.a': {
    en: 'Absolutely. If you want to roll The English Hub out to your department or whole school, visit our School Plans page or email us at info@Upskillenergy.com. We can migrate your existing data and give your colleagues instant access.',
    ar: 'أكيد. إذا تبي تنشر The English Hub على قسمك أو مدرستك كاملة، زور صفحة خطط المدارس حقّنا أو راسلنا على info@Upskillenergy.com. نقدر ننقل بياناتك الموجودة ونعطي زملاءك وصول فوري.',
    es: 'Por supuesto. Si quieres implantar The English Hub en tu departamento o en todo el colegio, visita nuestra página de Planes para Colegios o escríbenos a info@Upskillenergy.com. Podemos migrar tus datos existentes y dar a tus compañeros acceso inmediato.',
  },
  'mkt.teachers.ft.faq.free_tries.q': {
    en: 'What happens when I use my free tries?',
    ar: 'شنو يصير لمّا أخلّص تجاربي المجانية؟',
    es: '¿Qué ocurre cuando uso mis pruebas gratuitas?',
  },
  'mkt.teachers.ft.faq.free_tries.a': {
    en: 'You get 3 free uses per tool -- AI Lesson Plans, AI Marking, and Worksheet Builder. Once you have used them, you can upgrade to the Premium plan at any time. Every paid plan starts with a 7-day free trial (card required). Cancel any time from your account settings -- no hidden fees, no awkward cancellation calls.',
    ar: 'تحصل 3 استخدامات مجانية لكل أداة -- خطط الدروس بالـ AI، التصحيح بالـ AI، وبنّاء أوراق العمل. أول ما تستخدمها، تقدر تترقّى لخطة Premium في أي وقت. كل خطة مدفوعة تبدأ بتجربة مجانية 7 أيام (تحتاج بطاقة). سكّر الاشتراك في أي وقت من إعدادات حسابك -- بدون رسوم مخفية، وبدون مكالمات إلغاء محرجة.',
    es: 'Dispones de 3 usos gratuitos por herramienta: planes de lección con IA, corrección con IA y constructor de fichas de trabajo. Una vez los hayas usado, puedes pasar al plan Premium en cualquier momento. Todos los planes de pago empiezan con una prueba gratuita de 7 días (se requiere tarjeta). Cancela cuando quieras desde la configuración de tu cuenta: sin cargos ocultos ni incómodas llamadas de cancelación.',
  },

  // ── Hero "Start Free" extras + section copy ────────────────────────
  'mkt.teachers.ft.startfree.badge': {
    en: 'Start Free',
    ar: 'ابدأ ببلاش',
    es: 'Empieza gratis',
  },
  'mkt.teachers.ft.startfree.title': {
    en: 'Every Feature Available to Try',
    ar: 'كل ميزة متاحة للتجربة',
    es: 'Todas las funciones disponibles para probar',
  },
  'mkt.teachers.ft.startfree.body': {
    en: 'No credit card. No time limit. Try each premium tool 3 times free and see the results for yourself before you pay a penny.',
    ar: 'بدون بطاقة. بدون حد زمني. جرّب كل أداة Premium 3 مرّات ببلاش وشوف النتائج بنفسك قبل ما تدفع ولا قرش.',
    es: 'Sin tarjeta de crédito. Sin límite de tiempo. Prueba cada herramienta premium 3 veces gratis y comprueba los resultados por ti mismo antes de pagar un solo céntimo.',
  },
  'mkt.teachers.ft.tool.lesson_plans.title': {
    en: 'AI Lesson Plans',
    ar: 'خطط دروس بالـ AI',
    es: 'Planes de lección con IA',
  },
  'mkt.teachers.ft.tool.lesson_plans.desc': {
    en: 'Generate complete, exam-board-aligned lessons in seconds. Starter, main tasks, plenary -- all done.',
    ar: 'جهّز دروس كاملة متوافقة مع البورد بثواني. افتتاحية، مهام رئيسية، ختام -- كله جاهز.',
    es: 'Genera lecciones completas y alineadas con la junta examinadora en segundos. Inicio, tareas principales, cierre: todo listo.',
  },
  'mkt.teachers.ft.tool.marking.title': {
    en: 'AI Marking',
    ar: 'تصحيح بالـ AI',
    es: 'Corrección con IA',
  },
  'mkt.teachers.ft.tool.marking.desc': {
    en: 'Students submit essays and get instant, detailed feedback aligned to your mark scheme. You review before they see it.',
    ar: 'الطلاب يسلّمون مقالاتهم ويحصلون تغذية راجعة فورية ومفصّلة متوافقة مع معيار تصحيحك. وانت تراجع قبل ما يشوفونها.',
    es: 'Los estudiantes envían sus redacciones y reciben comentarios instantáneos y detallados alineados con tu esquema de calificación. Tú revisas antes de que los vean.',
  },
  'mkt.teachers.ft.tool.worksheet.title': {
    en: 'Worksheet Builder',
    ar: 'بنّاء أوراق العمل',
    es: 'Constructor de fichas de trabajo',
  },
  'mkt.teachers.ft.tool.worksheet.desc': {
    en: 'Create differentiated worksheets with model answers at multiple levels -- ready to print or share digitally.',
    ar: 'سوِّ أوراق عمل متفاوتة المستوى مع إجابات نموذجية بمستويات متعدّدة -- جاهزة للطباعة أو المشاركة رقمياً.',
    es: 'Crea fichas de trabajo diferenciadas con respuestas modelo en varios niveles, listas para imprimir o compartir digitalmente.',
  },
  'mkt.teachers.ft.tool.free_uses': {
    en: '3 free uses',
    ar: '3 استخدامات مجانية',
    es: '3 usos gratuitos',
  },
  'mkt.teachers.ft.upgrade_note': {
    en: 'Upgrade when you are ready. Every paid plan starts with a 7-day free trial (card required, cancel before day 7).',
    ar: 'ترقّى لمّا تكون جاهز. كل خطة مدفوعة تبدأ بتجربة مجانية 7 أيام (تحتاج بطاقة، سكّر قبل اليوم السابع).',
    es: 'Mejora cuando estés listo. Todos los planes de pago empiezan con una prueba gratuita de 7 días (se requiere tarjeta, cancela antes del día 7).',
  },
  'mkt.teachers.ft.cta.start_free': {
    en: 'Start Free',
    ar: 'ابدأ ببلاش',
    es: 'Empieza gratis',
  },
  'mkt.teachers.ft.cta.view_pricing': {
    en: 'View Pricing',
    ar: 'شوف الأسعار',
    es: 'Ver precios',
  },

  // ── Stats bar ──────────────────────────────────────────────────────
  'mkt.teachers.ft.stat.planning.value': {
    en: 'Faster',
    ar: 'أسرع',
    es: 'Más rápido',
  },
  'mkt.teachers.ft.stat.planning.label': {
    en: 'Lesson Planning',
    ar: 'تحضير الدروس',
    es: 'Planificación de lecciones',
  },
  'mkt.teachers.ft.stat.marking.value': {
    en: 'AI',
    ar: 'AI',
    es: 'IA',
  },
  'mkt.teachers.ft.stat.marking.label': {
    en: 'Essay Marking',
    ar: 'تصحيح المقالات',
    es: 'Corrección de redacciones',
  },
  'mkt.teachers.ft.stat.library.value': {
    en: 'Growing',
    ar: 'تكبر',
    es: 'Creciente',
  },
  'mkt.teachers.ft.stat.library.label': {
    en: 'Resource Library',
    ar: 'مكتبة الموارد',
    es: 'Biblioteca de recursos',
  },
  'mkt.teachers.ft.stat.boards.label': {
    en: 'Exam Boards',
    ar: 'بوردات الامتحان',
    es: 'Juntas examinadoras',
  },
  'mkt.teachers.ft.stat.founding.value': {
    en: 'New',
    ar: 'جديد',
    es: 'Nuevo',
  },
  'mkt.teachers.ft.stat.founding.label': {
    en: 'Founding Teachers',
    ar: 'معلّمون مؤسِّسون',
    es: 'Profesores fundadores',
  },

  // ── Interactive demo section ───────────────────────────────────────
  'mkt.teachers.ft.demo.badge': {
    en: 'Interactive Demo',
    ar: 'ديمو تفاعلي',
    es: 'Demo interactiva',
  },
  'mkt.teachers.ft.demo.title': {
    en: 'Try the Platform -- No Signup Required',
    ar: 'جرّب المنصّة -- بدون تسجيل',
    es: 'Prueba la plataforma: sin necesidad de registro',
  },
  'mkt.teachers.ft.demo.body': {
    en: 'Explore a fully working demo with sample data. See exactly how The English Hub will save you time before you create an account.',
    ar: 'استكشف ديمو شغّال بالكامل ببيانات تجريبية. شوف بالضبط كيف The English Hub بيوفّر وقتك قبل ما تسوّي حساب.',
    es: 'Explora una demo totalmente funcional con datos de ejemplo. Comprueba exactamente cómo The English Hub te ahorrará tiempo antes de crear una cuenta.',
  },
  'mkt.teachers.ft.demo.dashboard.title': {
    en: 'My Dashboard',
    ar: 'لوحتي',
    es: 'Mi panel',
  },
  'mkt.teachers.ft.demo.dashboard.desc': {
    en: 'See your classes, upcoming lessons, and student alerts at a glance.',
    ar: 'شوف صفوفك، الدروس الجاية، وتنبيهات الطلاب بلمحة.',
    es: 'Consulta tus clases, las lecciones próximas y las alertas de estudiantes de un vistazo.',
  },
  'mkt.teachers.ft.demo.lessons.title': {
    en: 'Lesson Builder',
    ar: 'بنّاء الدروس',
    es: 'Constructor de lecciones',
  },
  'mkt.teachers.ft.demo.lessons.desc': {
    en: 'Build a full lesson plan aligned to your exam board in minutes.',
    ar: 'ابنِ خطة درس كاملة متوافقة مع بوردك بدقائق.',
    es: 'Crea un plan de lección completo alineado con tu junta examinadora en minutos.',
  },
  'mkt.teachers.ft.demo.analytics.title': {
    en: 'Student Analytics',
    ar: 'تحليلات الطلاب',
    es: 'Analíticas de estudiantes',
  },
  'mkt.teachers.ft.demo.analytics.desc': {
    en: 'Track progress, spot at-risk students, and view predicted grades.',
    ar: 'تابع التقدّم، اكتشف الطلاب المعرّضين للخطر، وشوف الدرجات المتوقّعة.',
    es: 'Sigue el progreso, detecta a los estudiantes en riesgo y consulta las notas previstas.',
  },
  'mkt.teachers.ft.demo.launch': {
    en: 'Launch Teacher Demo',
    ar: 'افتح ديمو المعلّم',
    es: 'Abrir la demo de profesor',
  },

  // ── Features section heading ───────────────────────────────────────
  'mkt.teachers.ft.features.title': {
    en: 'Everything You Need to Teach Smarter',
    ar: 'كل اللي تحتاجه عشان تدرّس بذكاء',
    es: 'Todo lo que necesitas para enseñar de forma más inteligente',
  },
  'mkt.teachers.ft.features.body': {
    en: 'Premium tools built specifically for English teachers - less admin, more impact.',
    ar: 'أدوات Premium مبنية خصّيصاً لمعلّمي الإنجليزي - روتين أقل، وأثر أكثر.',
    es: 'Herramientas premium creadas específicamente para profesores de inglés: menos gestión, más impacto.',
  },

  // ── Content creation preview ───────────────────────────────────────
  'mkt.teachers.ft.content.badge': {
    en: 'Content Creation',
    ar: 'إنشاء المحتوى',
    es: 'Creación de contenido',
  },
  'mkt.teachers.ft.content.title': {
    en: 'Full Lesson Plans in Seconds, Not Hours',
    ar: 'خطط دروس كاملة بثواني، مو ساعات',
    es: 'Planes de lección completos en segundos, no en horas',
  },
  'mkt.teachers.ft.content.body': {
    en: 'Tell the Lesson Builder what you are teaching and it generates a complete, structured lesson aligned to your exam board specification -- including starter activities, main tasks, differentiation suggestions, and a plenary. You review, adjust if needed, and share.',
    ar: 'قول لبنّاء الدروس شنو تدرّس وبيجهّز لك درس كامل ومنظّم متوافق مع منهج بوردك -- يشمل أنشطة افتتاحية، مهام رئيسية، اقتراحات للتفاوت، وختام. وانت تراجع، تعدّل لو لزم، وتشارك.',
    es: 'Dile al Constructor de lecciones qué vas a enseñar y generará una lección completa y estructurada alineada con el temario de tu junta examinadora, incluyendo actividades de inicio, tareas principales, sugerencias de diferenciación y un cierre. Tú revisas, ajustas si hace falta y compartes.',
  },
  'mkt.teachers.ft.content.point.1': {
    en: 'Full lesson plans with learning objectives',
    ar: 'خطط دروس كاملة مع أهداف التعلّم',
    es: 'Planes de lección completos con objetivos de aprendizaje',
  },
  'mkt.teachers.ft.content.point.2': {
    en: 'Differentiated worksheets at multiple levels',
    ar: 'أوراق عمل متفاوتة المستوى بمستويات متعدّدة',
    es: 'Fichas de trabajo diferenciadas en varios niveles',
  },
  'mkt.teachers.ft.content.point.3': {
    en: 'Starter and plenary activities',
    ar: 'أنشطة افتتاحية وختامية',
    es: 'Actividades de inicio y de cierre',
  },
  'mkt.teachers.ft.content.point.4': {
    en: 'Exam-style practice questions with mark schemes',
    ar: 'أسئلة تدريب على نمط الامتحان مع معايير التصحيح',
    es: 'Preguntas de práctica tipo examen con esquemas de calificación',
  },
  'mkt.teachers.ft.content.point.5': {
    en: 'Ready to share or print in one click',
    ar: 'جاهزة للمشاركة أو الطباعة بضغطة وحدة',
    es: 'Listas para compartir o imprimir con un solo clic',
  },
  'mkt.teachers.ft.content.cta': {
    en: 'Try Lesson Builder Demo',
    ar: 'جرّب ديمو بنّاء الدروس',
    es: 'Prueba la demo del Constructor de lecciones',
  },
  // Mock generated lesson card (illustrative product UI, not study content)
  'mkt.teachers.ft.content.mock.generated': {
    en: 'Lesson Generated',
    ar: 'تم إنشاء الدرس',
    es: 'Lección generada',
  },
  'mkt.teachers.ft.content.mock.lesson_title': {
    en: "An Inspector Calls -- Act 1: Birling's Monologue",
    ar: 'An Inspector Calls -- Act 1: مونولوج Birling',
    es: 'An Inspector Calls -- Act 1: el monólogo de Birling',
  },
  'mkt.teachers.ft.content.mock.lesson_meta': {
    en: 'Year 11 -- 60 min lesson -- AQA English Literature',
    ar: 'Year 11 -- درس 60 دقيقة -- AQA English Literature',
    es: 'Year 11 -- lección de 60 min -- AQA English Literature',
  },
  'mkt.teachers.ft.content.mock.starter.label': {
    en: 'Starter',
    ar: 'افتتاحية',
    es: 'Inicio',
  },
  'mkt.teachers.ft.content.mock.starter.desc': {
    en: 'Class display: five quotes from Birling. Students rank from most to least capitalist. 5 min.',
    ar: 'عرض للصف: خمس اقتباسات من Birling. الطلاب يرتّبونها من الأكثر رأسمالية للأقل. 5 دقائق.',
    es: 'Proyección en clase: cinco citas de Birling. Los estudiantes las ordenan de más a menos capitalista. 5 min.',
  },
  'mkt.teachers.ft.content.mock.main1.label': {
    en: 'Main Task 1',
    ar: 'المهمة الرئيسية 1',
    es: 'Tarea principal 1',
  },
  'mkt.teachers.ft.content.mock.main1.desc': {
    en: "Close reading of Birling's monologue. Annotate for dramatic irony, context, and Priestley's message. 20 min.",
    ar: 'قراءة دقيقة لمونولوج Birling. علّق على المفارقة الدرامية، السياق، ورسالة Priestley. 20 دقيقة.',
    es: 'Lectura detallada del monólogo de Birling. Anota la ironía dramática, el contexto y el mensaje de Priestley. 20 min.',
  },
  'mkt.teachers.ft.content.mock.main2.label': {
    en: 'Main Task 2',
    ar: 'المهمة الرئيسية 2',
    es: 'Tarea principal 2',
  },
  'mkt.teachers.ft.content.mock.main2.desc': {
    en: 'Structured paragraph practice: how does Priestley present Birling as a symbol of capitalism? 20 min.',
    ar: 'تدريب على فقرة منظّمة: كيف يقدّم Priestley شخصية Birling كرمز للرأسمالية؟ 20 دقيقة.',
    es: 'Práctica de párrafo estructurado: ¿cómo presenta Priestley a Birling como símbolo del capitalismo? 20 min.',
  },
  'mkt.teachers.ft.content.mock.plenary.label': {
    en: 'Plenary',
    ar: 'ختام',
    es: 'Cierre',
  },
  'mkt.teachers.ft.content.mock.plenary.desc': {
    en: 'Exit ticket: one A01 point, one A02 quotation, one A03 context link. 5 min.',
    ar: 'بطاقة خروج: نقطة A01 وحدة، اقتباس A02 واحد، رابط سياق A03 واحد. 5 دقائق.',
    es: 'Ticket de salida: un punto de A01, una cita de A02, un enlace de contexto de A03. 5 min.',
  },
  'mkt.teachers.ft.content.mock.worksheet_included': {
    en: 'Worksheet included',
    ar: 'يشمل ورقة عمل',
    es: 'Incluye ficha de trabajo',
  },
  'mkt.teachers.ft.content.mock.markscheme_included': {
    en: 'Mark scheme included',
    ar: 'يشمل معيار تصحيح',
    es: 'Incluye esquema de calificación',
  },
  'mkt.teachers.ft.content.mock.diff_worksheet': {
    en: 'Differentiated worksheet',
    ar: 'ورقة عمل متفاوتة المستوى',
    es: 'Ficha de trabajo diferenciada',
  },
  'mkt.teachers.ft.content.mock.levels': {
    en: '3 levels',
    ar: '3 مستويات',
    es: '3 niveles',
  },
  'mkt.teachers.ft.content.mock.model_answer': {
    en: 'Model answer + mark scheme',
    ar: 'إجابة نموذجية + معيار تصحيح',
    es: 'Respuesta modelo + esquema de calificación',
  },
  'mkt.teachers.ft.content.mock.aqa_aligned': {
    en: 'AQA aligned',
    ar: 'متوافق مع AQA',
    es: 'Alineado con AQA',
  },

  // ── Analytics preview section ──────────────────────────────────────
  'mkt.teachers.ft.analytics.class_progress': {
    en: 'Class Progress -- Year 11 Set 1',
    ar: 'تقدّم الصف -- Year 11 Set 1',
    es: 'Progreso de la clase -- Year 11 Set 1',
  },
  'mkt.teachers.ft.analytics.bar.reading': {
    en: 'Reading & Comprehension',
    ar: 'القراءة والفهم',
    es: 'Lectura y comprensión',
  },
  'mkt.teachers.ft.analytics.bar.essay': {
    en: 'Essay Writing (A01)',
    ar: 'كتابة المقال (A01)',
    es: 'Redacción (A01)',
  },
  'mkt.teachers.ft.analytics.bar.language': {
    en: 'Language Analysis (A02)',
    ar: 'تحليل اللغة (A02)',
    es: 'Análisis del lenguaje (A02)',
  },
  'mkt.teachers.ft.analytics.bar.context': {
    en: 'Context & Evaluation (A03)',
    ar: 'السياق والتقييم (A03)',
    es: 'Contexto y evaluación (A03)',
  },
  'mkt.teachers.ft.analytics.bar.homework': {
    en: 'Homework Completion',
    ar: 'إنجاز الواجبات',
    es: 'Finalización de deberes',
  },
  'mkt.teachers.ft.analytics.at_risk': {
    en: 'At Risk',
    ar: 'معرّضون للخطر',
    es: 'En riesgo',
  },
  'mkt.teachers.ft.analytics.most_improved': {
    en: 'Most Improved',
    ar: 'الأكثر تحسّناً',
    es: 'Mayor mejora',
  },
  'mkt.teachers.ft.analytics.assignment_completion': {
    en: 'Assignment Completion',
    ar: 'إنجاز المهام',
    es: 'Finalización de tareas',
  },
  'mkt.teachers.ft.analytics.submitted_on_time': {
    en: '26 of 30 students submitted on time',
    ar: '26 من 30 طالب سلّموا في الوقت',
    es: '26 de 30 estudiantes entregaron a tiempo',
  },
  'mkt.teachers.ft.analytics.badge': {
    en: 'Analytics Dashboard',
    ar: 'لوحة التحليلات',
    es: 'Panel de analíticas',
  },
  'mkt.teachers.ft.analytics.title': {
    en: "Know Every Student's Progress at a Glance",
    ar: 'اعرف تقدّم كل طالب بلمحة',
    es: 'Conoce el progreso de cada estudiante de un vistazo',
  },
  'mkt.teachers.ft.analytics.body': {
    en: 'Stop waiting for the end-of-term report. The analytics dashboard gives you a live view of class and individual student performance -- so you can intervene early, celebrate progress, and direct your energy where it will make the biggest difference.',
    ar: 'بطّل تنتظر تقرير نهاية الفصل. لوحة التحليلات تعطيك عرض حي لأداء الصف وكل طالب على حدة -- عشان تتدخّل بدري، تحتفي بالتقدّم، وتوجّه طاقتك وين بتفرق أكثر.',
    es: 'Deja de esperar al informe de fin de trimestre. El panel de analíticas te ofrece una vista en directo del rendimiento de la clase y de cada estudiante, para que puedas intervenir pronto, celebrar el progreso y dirigir tu energía allí donde marcará la mayor diferencia.',
  },
  'mkt.teachers.ft.analytics.point.1': {
    en: 'Real-time progress tracking across all classes',
    ar: 'متابعة التقدّم لحظة بلحظة عبر كل الصفوف',
    es: 'Seguimiento del progreso en tiempo real en todas las clases',
  },
  'mkt.teachers.ft.analytics.point.2': {
    en: 'At-risk students flagged automatically',
    ar: 'الطلاب المعرّضون للخطر يُعلَّمون تلقائياً',
    es: 'Estudiantes en riesgo señalados automáticamente',
  },
  'mkt.teachers.ft.analytics.point.3': {
    en: 'Assignment completion rates per student',
    ar: 'نسب إنجاز المهام لكل طالب',
    es: 'Tasas de finalización de tareas por estudiante',
  },
  'mkt.teachers.ft.analytics.point.4': {
    en: 'Skill-by-skill breakdown (A01, A02, A03)',
    ar: 'تفصيل مهارة بمهارة (A01, A02, A03)',
    es: 'Desglose habilidad por habilidad (A01, A02, A03)',
  },
  'mkt.teachers.ft.analytics.point.5': {
    en: 'Predicted grade trajectories',
    ar: 'مسارات الدرجات المتوقّعة',
    es: 'Trayectorias de notas previstas',
  },

  // ── How it saves time ──────────────────────────────────────────────
  'mkt.teachers.ft.savetime.title': {
    en: 'How The English Hub Saves You Time',
    ar: 'كيف The English Hub يوفّر وقتك',
    es: 'Cómo The English Hub te ahorra tiempo',
  },
  'mkt.teachers.ft.savetime.body': {
    en: 'Built around the real pain points English teachers face every week.',
    ar: 'مبني حول المشاكل الحقيقية اللي يواجهها معلّمو الإنجليزي كل أسبوع.',
    es: 'Creado en torno a los problemas reales a los que se enfrentan los profesores de inglés cada semana.',
  },

  // ── Founding teachers empty state ──────────────────────────────────
  'mkt.teachers.ft.founding.title': {
    en: 'Be a Founding Teacher',
    ar: 'كن معلّماً مؤسِّساً',
    es: 'Sé un Profesor Fundador',
  },
  'mkt.teachers.ft.founding.body_pre': {
    en: "Founding teachers' first responses coming soon. Want to be one of them?",
    ar: 'أول ردود المعلّمين المؤسِّسين جاية قريب. تبي تكون منهم؟',
    es: 'Las primeras respuestas de los profesores fundadores llegarán pronto. ¿Quieres ser uno de ellos?',
  },
  'mkt.teachers.ft.founding.link': {
    en: 'Start your free teacher account',
    ar: 'ابدأ حساب معلّم مجاني',
    es: 'Crea tu cuenta de profesor gratuita',
  },

  // ── Free teaching resources ────────────────────────────────────────
  'mkt.teachers.ft.free.badge': {
    en: 'Free Resources',
    ar: 'موارد مجانية',
    es: 'Recursos gratuitos',
  },
  'mkt.teachers.ft.free.title': {
    en: 'Download Free Teaching Materials',
    ar: 'حمّل مواد تدريس مجانية',
    es: 'Descarga materiales de enseñanza gratuitos',
  },
  'mkt.teachers.ft.free.body': {
    en: 'Get a complete lesson pack for An Inspector Calls -- free, no signup required. See the quality of our resources.',
    ar: 'احصل على حزمة دروس كاملة لمسرحية An Inspector Calls -- ببلاش، بدون تسجيل. شوف جودة مواردنا.',
    es: 'Consigue un pack de lecciones completo de An Inspector Calls, gratis y sin registro. Comprueba la calidad de nuestros recursos.',
  },
  'mkt.teachers.ft.free.pack_title': {
    en: 'An Inspector Calls -- Free Lesson Pack',
    ar: 'An Inspector Calls -- حزمة دروس مجانية',
    es: 'An Inspector Calls -- pack de lecciones gratuito',
  },
  'mkt.teachers.ft.free.pack_sub': {
    en: 'Everything you need for a 60-minute lesson',
    ar: 'كل اللي تحتاجه لدرس 60 دقيقة',
    es: 'Todo lo que necesitas para una lección de 60 minutos',
  },
  'mkt.teachers.ft.free.item.1': {
    en: 'Complete 60-minute lesson plan',
    ar: 'خطة درس كاملة 60 دقيقة',
    es: 'Plan de lección completo de 60 minutos',
  },
  'mkt.teachers.ft.free.item.2': {
    en: '8-question worksheet with model answers',
    ar: 'ورقة عمل 8 أسئلة مع إجابات نموذجية',
    es: 'Ficha de trabajo de 8 preguntas con respuestas modelo',
  },
  'mkt.teachers.ft.free.item.3': {
    en: 'Teaching guide with context, themes, key quotes',
    ar: 'دليل تدريس فيه السياق، الثيمات، والاقتباسات المهمة',
    es: 'Guía de enseñanza con contexto, temas y citas clave',
  },
  'mkt.teachers.ft.free.item.4': {
    en: 'Differentiated activities (support/core/stretch)',
    ar: 'أنشطة متفاوتة المستوى (دعم/أساسي/توسّع)',
    es: 'Actividades diferenciadas (apoyo/básico/ampliación)',
  },
  'mkt.teachers.ft.free.cta_download': {
    en: 'Download Free Pack',
    ar: 'حمّل الحزمة المجانية',
    es: 'Descarga el pack gratuito',
  },
  'mkt.teachers.ft.free.cta_all': {
    en: 'See All Lessons',
    ar: 'شوف كل الدروس',
    es: 'Ver todas las lecciones',
  },

  // ── Pricing section ────────────────────────────────────────────────
  'mkt.teachers.ft.pricing.title': {
    en: 'Simple, Transparent Pricing',
    ar: 'أسعار بسيطة وواضحة',
    es: 'Precios sencillos y transparentes',
  },
  'mkt.teachers.ft.pricing.body': {
    en: 'Start free, upgrade when you are ready. Premium academic infrastructure for English teachers.',
    ar: 'ابدأ ببلاش، وترقّى لمّا تكون جاهز. بنية أكاديمية متطوّرة لمعلّمي الإنجليزي.',
    es: 'Empieza gratis y mejora cuando estés listo. Infraestructura académica premium para profesores de inglés.',
  },
  'mkt.teachers.ft.pricing.free.label': {
    en: 'Free',
    ar: 'مجاني',
    es: 'Gratis',
  },
  'mkt.teachers.ft.pricing.free.forever': {
    en: '/forever',
    ar: '/للأبد',
    es: '/para siempre',
  },
  'mkt.teachers.ft.pricing.free.sub': {
    en: '3 free uses per tool',
    ar: '3 استخدامات مجانية لكل أداة',
    es: '3 usos gratuitos por herramienta',
  },
  'mkt.teachers.ft.pricing.free.feat.1': {
    en: 'AI Lesson Plans -- 3 uses',
    ar: 'خطط دروس بالـ AI -- 3 استخدامات',
    es: 'Planes de lección con IA -- 3 usos',
  },
  'mkt.teachers.ft.pricing.free.feat.2': {
    en: 'AI Marking -- 3 uses',
    ar: 'تصحيح بالـ AI -- 3 استخدامات',
    es: 'Corrección con IA -- 3 usos',
  },
  'mkt.teachers.ft.pricing.free.feat.3': {
    en: 'Worksheet Builder -- 3 uses',
    ar: 'بنّاء أوراق العمل -- 3 استخدامات',
    es: 'Constructor de fichas de trabajo -- 3 usos',
  },
  'mkt.teachers.ft.pricing.free.feat.4': {
    en: 'Student Progress Analytics',
    ar: 'تحليلات تقدّم الطلاب',
    es: 'Analíticas del progreso del estudiante',
  },
  'mkt.teachers.ft.pricing.free.feat.5': {
    en: 'All exam boards supported',
    ar: 'كل بوردات الامتحان مدعومة',
    es: 'Todas las juntas examinadoras soportadas',
  },
  'mkt.teachers.ft.pricing.free.feat.6': {
    en: 'No credit card required',
    ar: 'بدون بطاقة ائتمان',
    es: 'Sin tarjeta de crédito',
  },
  'mkt.teachers.ft.pricing.free.note': {
    en: 'No card needed. Try every feature.',
    ar: 'ما تحتاج بطاقة. جرّب كل ميزة.',
    es: 'No hace falta tarjeta. Prueba todas las funciones.',
  },
  'mkt.teachers.ft.pricing.premium.trial_tag': {
    en: '7-day FREE trial',
    ar: 'تجربة مجانية 7 أيام',
    es: 'Prueba GRATUITA de 7 días',
  },
  'mkt.teachers.ft.pricing.premium.label': {
    en: 'Teacher Premium',
    ar: 'Teacher Premium',
    es: 'Teacher Premium',
  },
  'mkt.teachers.ft.pricing.premium.early_access': {
    en: 'Early Access',
    ar: 'Early Access',
    es: 'Early Access',
  },
  'mkt.teachers.ft.pricing.premium.month': {
    en: '/month',
    ar: '/بالشهر',
    es: '/mes',
  },
  'mkt.teachers.ft.pricing.premium.standard_pre': {
    en: 'Standard',
    ar: 'العادي',
    es: 'Estándar',
  },
  'mkt.teachers.ft.pricing.premium.standard_post': {
    en: 'from August 2026',
    ar: 'من أغسطس 2026',
    es: 'a partir de agosto de 2026',
  },
  'mkt.teachers.ft.pricing.premium.year_pre': {
    en: 'or £67.99/year (Standard',
    ar: 'أو £67.99 بالسنة (العادي',
    es: 'o £67.99/año (Estándar',
  },
  'mkt.teachers.ft.pricing.premium.year_post': {
    en: 'from Aug 2026)',
    ar: 'من أغسطس 2026)',
    es: 'a partir de ago. de 2026)',
  },
  'mkt.teachers.ft.pricing.premium.increase': {
    en: '⚡ Prices increasing August 2026',
    ar: '⚡ الأسعار بترتفع في أغسطس 2026',
    es: '⚡ Los precios suben en agosto de 2026',
  },
  'mkt.teachers.ft.pricing.premium.feat.1': {
    en: 'Unlimited AI Lesson Plans',
    ar: 'خطط دروس بالـ AI بلا حدود',
    es: 'Planes de lección con IA ilimitados',
  },
  'mkt.teachers.ft.pricing.premium.feat.2': {
    en: 'Unlimited AI Marking',
    ar: 'تصحيح بالـ AI بلا حدود',
    es: 'Corrección con IA ilimitada',
  },
  'mkt.teachers.ft.pricing.premium.feat.3': {
    en: 'Unlimited Worksheet Builder',
    ar: 'بنّاء أوراق عمل بلا حدود',
    es: 'Constructor de fichas de trabajo ilimitado',
  },
  'mkt.teachers.ft.pricing.premium.feat.4': {
    en: 'Student Progress Analytics',
    ar: 'تحليلات تقدّم الطلاب',
    es: 'Analíticas del progreso del estudiante',
  },
  'mkt.teachers.ft.pricing.premium.feat.5': {
    en: 'Homework & Assignment Manager',
    ar: 'مدير الواجبات والمهام',
    es: 'Gestor de deberes y tareas',
  },
  'mkt.teachers.ft.pricing.premium.feat.6': {
    en: 'Full ready resources library',
    ar: 'مكتبة موارد جاهزة كاملة',
    es: 'Biblioteca completa de recursos lista para usar',
  },
  'mkt.teachers.ft.pricing.premium.feat.7': {
    en: 'Predicted grades & interventions',
    ar: 'درجات متوقّعة وتدخّلات',
    es: 'Notas previstas e intervenciones',
  },
  'mkt.teachers.ft.pricing.premium.feat.8': {
    en: 'All boards -- content tailored to yours',
    ar: 'كل البوردات -- محتوى مفصّل على بوردك',
    es: 'Todas las juntas -- contenido adaptado a la tuya',
  },
  'mkt.teachers.ft.pricing.premium.feat.9': {
    en: 'Cancel any time',
    ar: 'سكّر في أي وقت',
    es: 'Cancela cuando quieras',
  },
  'mkt.teachers.ft.pricing.premium.note': {
    en: 'Demo 3 free uses without a card. Paid plans start with a 7-day free trial (card required, cancel before day 7).',
    ar: 'جرّب 3 استخدامات مجانية بدون بطاقة. الخطط المدفوعة تبدأ بتجربة مجانية 7 أيام (تحتاج بطاقة، سكّر قبل اليوم السابع).',
    es: 'Prueba 3 usos gratuitos sin tarjeta. Los planes de pago empiezan con una prueba gratuita de 7 días (se requiere tarjeta, cancela antes del día 7).',
  },
  'mkt.teachers.ft.pricing.school.label': {
    en: 'School / Department',
    ar: 'مدرسة / قسم',
    es: 'Colegio / Departamento',
  },
  'mkt.teachers.ft.pricing.school.founding_tag': {
    en: 'Founding · 10 only',
    ar: 'مؤسِّسة · 10 بس',
    es: 'Fundador · solo 10',
  },
  'mkt.teachers.ft.pricing.school.year': {
    en: '/year',
    ar: '/بالسنة',
    es: '/año',
  },
  'mkt.teachers.ft.pricing.school.standard_pre': {
    en: 'Standard',
    ar: 'العادي',
    es: 'Estándar',
  },
  'mkt.teachers.ft.pricing.school.standard_post': {
    en: 'from August 2026',
    ar: 'من أغسطس 2026',
    es: 'a partir de agosto de 2026',
  },
  'mkt.teachers.ft.pricing.school.sub': {
    en: 'Founding Schools Programme -- first 10 schools only',
    ar: 'برنامج المدارس المؤسِّسة -- أول 10 مدارس بس',
    es: 'Programa de Colegios Fundadores -- solo los primeros 10 colegios',
  },
  'mkt.teachers.ft.pricing.school.feat.1': {
    en: 'All Teacher Premium features',
    ar: 'كل مزايا Teacher Premium',
    es: 'Todas las funciones de Teacher Premium',
  },
  'mkt.teachers.ft.pricing.school.feat.2': {
    en: 'Unlimited teacher accounts',
    ar: 'حسابات معلّمين بلا حدود',
    es: 'Cuentas de profesor ilimitadas',
  },
  'mkt.teachers.ft.pricing.school.feat.3': {
    en: 'Department-level analytics',
    ar: 'تحليلات على مستوى القسم',
    es: 'Analíticas a nivel de departamento',
  },
  'mkt.teachers.ft.pricing.school.feat.4': {
    en: 'Centralised resource library',
    ar: 'مكتبة موارد مركزية',
    es: 'Biblioteca de recursos centralizada',
  },
  'mkt.teachers.ft.pricing.school.feat.5': {
    en: 'Priority support',
    ar: 'دعم بأولوية',
    es: 'Soporte prioritario',
  },
  'mkt.teachers.ft.pricing.school.feat.6': {
    en: 'Onboarding & training session',
    ar: 'جلسة إعداد وتدريب',
    es: 'Sesión de incorporación y formación',
  },
  'mkt.teachers.ft.pricing.school.feat.7': {
    en: 'Single invoice for finance',
    ar: 'فاتورة وحدة للمالية',
    es: 'Una sola factura para administración',
  },
  'mkt.teachers.ft.pricing.school.cta': {
    en: 'See School Plans',
    ar: 'شوف خطط المدارس',
    es: 'Ver Planes para Colegios',
  },
  'mkt.teachers.ft.pricing.school.note': {
    en: 'Custom pricing available for large schools.',
    ar: 'أسعار مخصّصة متوفّرة للمدارس الكبيرة.',
    es: 'Precios personalizados disponibles para colegios grandes.',
  },

  // ── Quick signup form ──────────────────────────────────────────────
  'mkt.teachers.ft.signup.badge': {
    en: 'Start Free',
    ar: 'ابدأ ببلاش',
    es: 'Empieza gratis',
  },
  'mkt.teachers.ft.signup.title': {
    en: 'Get Started in 30 Seconds',
    ar: 'ابدأ في 30 ثانية',
    es: 'Empieza en 30 segundos',
  },
  'mkt.teachers.ft.signup.body': {
    en: 'Create your free account and try every feature -- 3 free uses per tool, no card required.',
    ar: 'سوِّ حسابك المجاني وجرّب كل ميزة -- 3 استخدامات مجانية لكل أداة، بدون بطاقة.',
    es: 'Crea tu cuenta gratuita y prueba todas las funciones: 3 usos gratuitos por herramienta, sin necesidad de tarjeta.',
  },
  'mkt.teachers.ft.signup.name_label': {
    en: 'Full Name',
    ar: 'الاسم الكامل',
    es: 'Nombre completo',
  },
  'mkt.teachers.ft.signup.name_ph': {
    en: 'Your name',
    ar: 'اسمك',
    es: 'Tu nombre',
  },
  'mkt.teachers.ft.signup.email_label': {
    en: 'Email Address',
    ar: 'البريد الإلكتروني',
    es: 'Correo electrónico',
  },
  'mkt.teachers.ft.signup.school_label': {
    en: 'School',
    ar: 'المدرسة',
    es: 'Colegio',
  },
  'mkt.teachers.ft.signup.school_optional': {
    en: '(optional)',
    ar: '(اختياري)',
    es: '(opcional)',
  },
  'mkt.teachers.ft.signup.school_ph': {
    en: 'Your school name',
    ar: 'اسم مدرستك',
    es: 'El nombre de tu colegio',
  },
  'mkt.teachers.ft.signup.submit': {
    en: 'Start Free',
    ar: 'ابدأ ببلاش',
    es: 'Empieza gratis',
  },
  'mkt.teachers.ft.signup.terms': {
    en: 'By signing up you agree to our Terms of Service and Privacy Policy. Free tier includes 3 uses per tool. Premium: £6.99/month or £67.99/year (Early Access - Standard £11.99/£99 from August 2026). 7-day free trial, card required.',
    ar: 'بالتسجيل انت توافق على شروط الخدمة وسياسة الخصوصية حقّنا. الباقة المجانية تشمل 3 استخدامات لكل أداة. Premium: £6.99 بالشهر أو £67.99 بالسنة (Early Access - العادي £11.99/£99 من أغسطس 2026). تجربة مجانية 7 أيام، تحتاج بطاقة.',
    es: 'Al registrarte aceptas nuestras Condiciones del Servicio y nuestra Política de Privacidad. El nivel gratuito incluye 3 usos por herramienta. Premium: £6.99/mes o £67.99/año (Early Access - Estándar £11.99/£99 a partir de agosto de 2026). Prueba gratuita de 7 días, se requiere tarjeta.',
  },

  // ── FAQ section heading ────────────────────────────────────────────
  'mkt.teachers.ft.faq.heading': {
    en: 'Frequently Asked Questions',
    ar: 'الأسئلة الشائعة',
    es: 'Preguntas frecuentes',
  },
  'mkt.teachers.ft.faq.sub': {
    en: 'Everything you need to know about The English Hub for teachers.',
    ar: 'كل اللي تحتاج تعرفه عن The English Hub للمعلّمين.',
    es: 'Todo lo que necesitas saber sobre The English Hub para profesores.',
  },

  // ── Final CTA ──────────────────────────────────────────────────────
  'mkt.teachers.ft.final.badge': {
    en: 'Founding teachers welcome',
    ar: 'المعلّمون المؤسِّسون مرحّب فيهم',
    es: 'Profesores fundadores bienvenidos',
  },
  'mkt.teachers.ft.final.title': {
    en: 'Ready to Reclaim Your Evenings?',
    ar: 'جاهز تستردّ أمسياتك؟',
    es: '¿Listo para recuperar tus tardes?',
  },
  'mkt.teachers.ft.final.body': {
    en: 'Join the founding teachers using The English Hub to spend less time on routine planning and marking. Try every feature free -- upgrade when you are ready.',
    ar: 'انضمّ للمعلّمين المؤسِّسين اللي يستخدمون The English Hub عشان وقت أقل على التحضير والتصحيح الروتيني. جرّب كل ميزة ببلاش -- وترقّى لمّا تكون جاهز.',
    es: 'Únete a los profesores fundadores que usan The English Hub para dedicar menos tiempo a la planificación y la corrección rutinarias. Prueba todas las funciones gratis y mejora cuando estés listo.',
  },
  'mkt.teachers.ft.final.try_demo': {
    en: 'Try the Demo',
    ar: 'جرّب الديمو',
    es: 'Prueba la demo',
  },
  // Final-CTA price line broken into composable spans
  'mkt.teachers.ft.final.price.pre': {
    en: '3 free uses per tool. Early Access Premium from',
    ar: '3 استخدامات مجانية لكل أداة. Early Access Premium من',
    es: '3 usos gratuitos por herramienta. Premium Early Access desde',
  },
  'mkt.teachers.ft.final.price.amount': {
    en: '£6.99/month or £67.99/year',
    ar: '£6.99 بالشهر أو £67.99 بالسنة',
    es: '£6.99/mes o £67.99/año',
  },
  'mkt.teachers.ft.final.price.standard_pre': {
    en: '(Standard',
    ar: '(العادي',
    es: '(Estándar',
  },
  'mkt.teachers.ft.final.price.standard_post': {
    en: 'from August 2026)',
    ar: 'من أغسطس 2026)',
    es: 'a partir de agosto de 2026)',
  },
  'mkt.teachers.ft.final.price.trial': {
    en: '- 7-day free trial, card required.',
    ar: '- تجربة مجانية 7 أيام، تحتاج بطاقة.',
    es: '- prueba gratuita de 7 días, se requiere tarjeta.',
  },
  'mkt.teachers.ft.final.price.increase': {
    en: '⚡ Prices increasing August 2026 - lock in Early Access today.',
    ar: '⚡ الأسعار بترتفع في أغسطس 2026 - ثبّت Early Access اليوم.',
    es: '⚡ Los precios suben en agosto de 2026: asegura el Early Access hoy.',
  },

  /* ══════════════ FOR SCHOOLS (src/app/for-schools/page.tsx) ══════════════ */

  // ── Founding benefits (module-scope FOUNDING_BENEFITS) ─────────────
  'mkt.schools.fs.founding.benefit.1': {
    en: 'Full platform access for ALL students and ALL teachers',
    ar: 'وصول كامل للمنصّة لكل الطلاب وكل المعلّمين',
    es: 'Acceso completo a la plataforma para TODOS los estudiantes y TODOS los profesores',
  },
  'mkt.schools.fs.founding.benefit.2': {
    en: 'Early access to new features before general release',
    ar: 'وصول مبكّر للمزايا الجديدة قبل الإطلاق العام',
    es: 'Acceso anticipado a las nuevas funciones antes del lanzamiento general',
  },
  'mkt.schools.fs.founding.benefit.3': {
    en: 'Direct product input -- help shape the platform',
    ar: 'تأثير مباشر على المنتج -- ساعد في تشكيل المنصّة',
    es: 'Aportación directa al producto -- ayuda a dar forma a la plataforma',
  },
  'mkt.schools.fs.founding.benefit.4': {
    en: 'Priority onboarding and dedicated support',
    ar: 'إعداد بأولوية ودعم مخصّص',
    es: 'Incorporación prioritaria y soporte dedicado',
  },
  'mkt.schools.fs.founding.benefit.5': {
    en: 'Locked preferential pricing for 2-3 years',
    ar: 'سعر تفضيلي مثبّت لمدة 2-3 سنوات',
    es: 'Precio preferente fijado durante 2-3 años',
  },
  'mkt.schools.fs.founding.benefit.6': {
    en: 'Founding partner recognition on the platform',
    ar: 'تكريم كشريك مؤسِّس على المنصّة',
    es: 'Reconocimiento como socio fundador en la plataforma',
  },

  // ── Platform feature cards (module-scope PLATFORM_FEATURES) ────────
  'mkt.schools.fs.feat.analytics.title': {
    en: 'Department Analytics Dashboard',
    ar: 'لوحة تحليلات القسم',
    es: 'Panel de analíticas del departamento',
  },
  'mkt.schools.fs.feat.analytics.desc': {
    en: 'Real-time progress across every year group. Spot at-risk students early, compare class performance, and generate department reports aligned to common Ofsted English subject deep-dive criteria - ready to share at your next inspection.',
    ar: 'تقدّم لحظة بلحظة عبر كل السنوات الدراسية. اكتشف الطلاب المعرّضين للخطر بدري، قارن أداء الصفوف، وجهّز تقارير القسم متوافقة مع معايير Ofsted للتعمّق في مادة الإنجليزي - جاهزة للمشاركة في تفتيشك الجاي.',
    es: 'Progreso en tiempo real en todos los cursos. Detecta pronto a los estudiantes en riesgo, compara el rendimiento de las clases y genera informes del departamento alineados con los criterios habituales de la inspección detallada de la asignatura de inglés de Ofsted, listos para compartir en tu próxima inspección.',
  },
  'mkt.schools.fs.feat.lesson.title': {
    en: 'Lesson Builder & Resource Library',
    ar: 'بنّاء الدروس ومكتبة الموارد',
    es: 'Constructor de lecciones y biblioteca de recursos',
  },
  'mkt.schools.fs.feat.lesson.desc': {
    en: 'Instantly generate lesson plans, worksheets, and presentations from the platform. A growing library of resources mapped to AQA, Edexcel, OCR, WJEC and Cambridge IGCSE specifications.',
    ar: 'جهّز خطط دروس وأوراق عمل وعروض تقديمية على طول من المنصّة. مكتبة موارد تكبر يوم بعد يوم مربوطة بمناهج AQA و Edexcel و OCR و WJEC و Cambridge IGCSE.',
    es: 'Genera al instante planes de lección, fichas de trabajo y presentaciones desde la plataforma. Una biblioteca creciente de recursos mapeada a los temarios de AQA, Edexcel, OCR, WJEC y Cambridge IGCSE.',
  },
  'mkt.schools.fs.feat.feedback.title': {
    en: 'AI Essay Feedback',
    ar: 'تغذية راجعة على المقالات بالـ AI',
    es: 'Comentarios de redacciones con IA',
  },
  'mkt.schools.fs.feat.feedback.desc': {
    en: 'Students get instant, detailed feedback on their essays based on exam board mark schemes. Frees up teacher time while keeping every student on track.',
    ar: 'الطلاب يحصلون تغذية راجعة فورية ومفصّلة على مقالاتهم حسب معايير تصحيح البورد. توفّر وقت المعلّم وتخلّي كل طالب على المسار الصحيح.',
    es: 'Los estudiantes reciben comentarios instantáneos y detallados sobre sus redacciones según los esquemas de calificación de la junta examinadora. Libera tiempo del profesor mientras mantiene a cada estudiante en el buen camino.',
  },
  'mkt.schools.fs.feat.homework.title': {
    en: 'Homework Management',
    ar: 'إدارة الواجبات',
    es: 'Gestión de deberes',
  },
  'mkt.schools.fs.feat.homework.desc': {
    en: 'Set assignments in seconds, track completion automatically, and let the platform handle routine marking. Teachers reclaim hours every week.',
    ar: 'حضّر المهام بثواني، تابع الإنجاز تلقائياً، وخلّي المنصّة تتولّى التصحيح الروتيني. المعلّمون يستردّون ساعات كل أسبوع.',
    es: 'Asigna tareas en segundos, sigue su finalización automáticamente y deja que la plataforma se encargue de la corrección rutinaria. Los profesores recuperan horas cada semana.',
  },
  'mkt.schools.fs.feat.reports.title': {
    en: 'Progress Reports',
    ar: 'تقارير التقدّم',
    es: 'Informes de progreso',
  },
  'mkt.schools.fs.feat.reports.desc': {
    en: 'Auto-generated progress reports for parents, heads of year, and senior leadership. Always up to date, always audit-ready.',
    ar: 'تقارير تقدّم تُنشأ تلقائياً للأهل ورؤساء السنوات والإدارة العليا. محدّثة دايماً، وجاهزة للتدقيق دايماً.',
    es: 'Informes de progreso generados automáticamente para padres, jefes de curso y dirección. Siempre actualizados, siempre listos para auditoría.',
  },
  'mkt.schools.fs.feat.cpd.title': {
    en: 'Teacher CPD & Onboarding',
    ar: 'تطوير مهني وإعداد للمعلّمين',
    es: 'CPD e incorporación de profesores',
  },
  'mkt.schools.fs.feat.cpd.desc': {
    en: 'Built-in CPD materials and guided onboarding walkthroughs so every member of your department is confident and productive from day one.',
    ar: 'مواد CPD مدمجة وجولات إعداد موجّهة عشان كل عضو في قسمك يكون واثق ومنتج من اليوم الأول.',
    es: 'Materiales de CPD integrados y guías de incorporación paso a paso para que cada miembro de tu departamento tenga confianza y sea productivo desde el primer día.',
  },

  // ── Content creation items (module-scope CONTENT_CREATION_ITEMS) ───
  'mkt.schools.fs.content.lesson_plans.label': {
    en: 'Lesson Plans',
    ar: 'خطط الدروس',
    es: 'Planes de lección',
  },
  'mkt.schools.fs.content.lesson_plans.desc': {
    en: 'Full lesson plans mapped to your exam board specification, generated in under 30 seconds.',
    ar: 'خطط دروس كاملة مربوطة بمنهج بوردك، تُجهّز بأقل من 30 ثانية.',
    es: 'Planes de lección completos mapeados al temario de tu junta examinadora, generados en menos de 30 segundos.',
  },
  'mkt.schools.fs.content.worksheets.label': {
    en: 'Worksheets',
    ar: 'أوراق العمل',
    es: 'Fichas de trabajo',
  },
  'mkt.schools.fs.content.worksheets.desc': {
    en: 'Printable, editable worksheets aligned to any topic or text your class is studying.',
    ar: 'أوراق عمل قابلة للطباعة والتعديل متوافقة مع أي موضوع أو نص يدرسه صفّك.',
    es: 'Fichas de trabajo imprimibles y editables alineadas con cualquier tema o texto que estudie tu clase.',
  },
  'mkt.schools.fs.content.presentations.label': {
    en: 'Presentations',
    ar: 'العروض التقديمية',
    es: 'Presentaciones',
  },
  'mkt.schools.fs.content.presentations.desc': {
    en: 'Classroom-ready slide decks with teacher notes, discussion prompts, and learning objectives.',
    ar: 'شرائح جاهزة للصف مع ملاحظات المعلّم، أسئلة نقاش، وأهداف تعلّم.',
    es: 'Presentaciones listas para el aula con notas del profesor, preguntas de debate y objetivos de aprendizaje.',
  },
  'mkt.schools.fs.content.assessments.label': {
    en: 'Assessments',
    ar: 'التقييمات',
    es: 'Evaluaciones',
  },
  'mkt.schools.fs.content.assessments.desc': {
    en: 'Practice papers and formative assessments with auto-marking for multiple choice and short answer.',
    ar: 'أوراق تدريب وتقييمات تكوينية مع تصحيح تلقائي للاختيار من متعدّد والإجابات القصيرة.',
    es: 'Exámenes de práctica y evaluaciones formativas con corrección automática para opción múltiple y respuesta corta.',
  },

  // ── How it works (module-scope HOW_IT_WORKS) ──────────────────────
  'mkt.schools.fs.how.1.title': {
    en: 'Book a 20-Minute Call',
    ar: 'احجز مكالمة 20 دقيقة',
    es: 'Reserva una llamada de 20 minutos',
  },
  'mkt.schools.fs.how.1.desc': {
    en: 'Speak with our schools team. We will walk you through the platform, discuss your department needs, and agree a tailored package. No obligation.',
    ar: 'كلّم فريق المدارس حقّنا. بنشرح لك المنصّة، نناقش احتياجات قسمك، ونتّفق على باقة مفصّلة. بدون أي التزام.',
    es: 'Habla con nuestro equipo de colegios. Te mostraremos la plataforma, hablaremos de las necesidades de tu departamento y acordaremos un paquete a medida. Sin compromiso.',
  },
  'mkt.schools.fs.how.2.title': {
    en: 'We Set Up Your School',
    ar: 'إحنا نجهّز مدرستك',
    es: 'Configuramos tu colegio',
  },
  'mkt.schools.fs.how.2.desc': {
    en: 'We handle onboarding for you. Your exam board is configured, accounts are created in bulk, and your admin dashboard is ready to go.',
    ar: 'إحنا نتولّى الإعداد عنك. بوردك يتضبط، الحسابات تتسوّى بالجملة، ولوحة الإدارة حقّتك جاهزة.',
    es: 'Nos encargamos de la incorporación por ti. Se configura tu junta examinadora, se crean las cuentas de forma masiva y tu panel de administración queda listo.',
  },
  'mkt.schools.fs.how.3.title': {
    en: 'Everyone Has Instant Access',
    ar: 'الكل يحصل وصول فوري',
    es: 'Todos tienen acceso inmediato',
  },
  'mkt.schools.fs.how.3.desc': {
    en: 'Students and teachers receive login details and can start using the full platform immediately. Your admin dashboard is live from day one.',
    ar: 'الطلاب والمعلّمون يحصلون بيانات الدخول ويبدون يستخدمون المنصّة كاملة على طول. لوحة الإدارة حقّتك شغّالة من اليوم الأول.',
    es: 'Los estudiantes y profesores reciben sus datos de acceso y pueden empezar a usar la plataforma completa de inmediato. Tu panel de administración está activo desde el primer día.',
  },

  // ── Comparison rows (module-scope COMPARISON_ROWS) ────────────────
  'mkt.schools.fs.compare.unlimited_students': {
    en: 'Unlimited students',
    ar: 'طلاب بلا حدود',
    es: 'Estudiantes ilimitados',
  },
  'mkt.schools.fs.compare.unlimited_teachers': {
    en: 'Unlimited teachers',
    ar: 'معلّمون بلا حدود',
    es: 'Profesores ilimitados',
  },
  'mkt.schools.fs.compare.dept_analytics': {
    en: 'Department analytics',
    ar: 'تحليلات القسم',
    es: 'Analíticas del departamento',
  },
  'mkt.schools.fs.compare.bulk_excel': {
    en: 'Bulk Excel upload',
    ar: 'رفع بالجملة عبر Excel',
    es: 'Carga masiva por Excel',
  },
  'mkt.schools.fs.compare.admin_controls': {
    en: 'Admin controls',
    ar: 'صلاحيات الإدارة',
    es: 'Controles de administración',
  },
  'mkt.schools.fs.compare.homework': {
    en: 'Homework management',
    ar: 'إدارة الواجبات',
    es: 'Gestión de deberes',
  },
  'mkt.schools.fs.compare.progress_reports': {
    en: 'Progress reports',
    ar: 'تقارير التقدّم',
    es: 'Informes de progreso',
  },
  'mkt.schools.fs.compare.ofsted': {
    en: 'Ofsted-aligned department reporting',
    ar: 'تقارير القسم متوافقة مع Ofsted',
    es: 'Informes del departamento alineados con Ofsted',
  },
  'mkt.schools.fs.compare.ai_feedback': {
    en: 'AI essay feedback',
    ar: 'تغذية راجعة على المقالات بالـ AI',
    es: 'Comentarios de redacciones con IA',
  },
  'mkt.schools.fs.compare.resource_library': {
    en: 'Resource library mapped to your exam board',
    ar: 'مكتبة موارد مربوطة ببورد امتحانك',
    es: 'Biblioteca de recursos mapeada a tu junta examinadora',
  },
  'mkt.schools.fs.compare.tailored_content': {
    en: 'Content tailored to your exam board',
    ar: 'محتوى مفصّل على بورد امتحانك',
    es: 'Contenido adaptado a tu junta examinadora',
  },

  // ── FAQ (module-scope FAQS) ───────────────────────────────────────
  'mkt.schools.fs.faq.programme.q': {
    en: 'What is the Founding Schools Programme?',
    ar: 'شنو برنامج المدارس المؤسِّسة؟',
    es: '¿Qué es el Programa de Colegios Fundadores?',
  },
  'mkt.schools.fs.faq.programme.a': {
    en: 'The Founding Schools Programme is a strategic partnership for the 2026 academic year. The first 10 schools to sign are designated as founding partners and receive early features, direct product input, priority onboarding, founding partner recognition, and locked preferential pricing for 2-3 years. Additional schools are welcome on the platform at standard rates once the founding cohort closes. This is not a free trial -- it is a discounted, long-term partnership tailored to your department size.',
    ar: 'برنامج المدارس المؤسِّسة هو شراكة استراتيجية للسنة الدراسية 2026. أول 10 مدارس توقّع تنحدّد كشركاء مؤسِّسين وتحصل مزايا مبكّرة، تأثير مباشر على المنتج، إعداد بأولوية، تكريم كشريك مؤسِّس، وسعر تفضيلي مثبّت لمدة 2-3 سنوات. المدارس الإضافية مرحّب فيها على المنصّة بالأسعار العادية بعد ما تسكّر دفعة المؤسِّسين. هذي مو تجربة مجانية -- هي شراكة طويلة الأمد بسعر مخفّض ومفصّلة على حجم قسمك.',
    es: 'El Programa de Colegios Fundadores es una alianza estratégica para el curso académico 2026. Los primeros 10 colegios en firmar quedan designados como socios fundadores y reciben funciones anticipadas, aportación directa al producto, incorporación prioritaria, reconocimiento como socio fundador y precio preferente fijado durante 2-3 años. Los colegios adicionales son bienvenidos en la plataforma a tarifas estándar una vez se cierre la promoción fundadora. No es una prueba gratuita: es una alianza a largo plazo con descuento y adaptada al tamaño de tu departamento.',
  },
  'mkt.schools.fs.faq.cost.q': {
    en: 'How much does it cost?',
    ar: 'كم تكلفته؟',
    es: '¿Cuánto cuesta?',
  },
  'mkt.schools.fs.faq.cost.a': {
    en: 'Founding Schools Programme pricing starts at £4,000 per year for the first 10 schools only -- heavily anchored against our projected Standard Pricing of £8,000 per year from August 2026. Exact package scales with department size and is agreed during your onboarding call. Schools that joined in wave 1 at £3,000 are grandfathered at that rate. Book a call to lock in your founding price before the cohort closes.',
    ar: 'أسعار برنامج المدارس المؤسِّسة تبدأ من £4,000 بالسنة لأول 10 مدارس بس -- بخصم كبير مقابل سعرنا العادي المتوقّع £8,000 بالسنة من أغسطس 2026. الباقة بالضبط تكبر مع حجم القسم وتُتّفق عليها أثناء مكالمة الإعداد. المدارس اللي انضمّت في الموجة الأولى بـ £3,000 تبقى محتفظة بذاك السعر. احجز مكالمة عشان تثبّت سعرك المؤسِّس قبل ما تسكّر الدفعة.',
    es: 'Los precios del Programa de Colegios Fundadores empiezan en £4,000 al año solo para los primeros 10 colegios, fuertemente anclados frente a nuestro precio estándar previsto de £8,000 al año a partir de agosto de 2026. El paquete exacto escala con el tamaño del departamento y se acuerda durante tu llamada de incorporación. Los colegios que se unieron en la ola 1 a £3,000 conservan esa tarifa. Reserva una llamada para fijar tu precio fundador antes de que se cierre la promoción.',
  },
  'mkt.schools.fs.faq.access.q': {
    en: 'How do students and teachers get access?',
    ar: 'كيف يحصل الطلاب والمعلّمون الوصول؟',
    es: '¿Cómo obtienen acceso los estudiantes y profesores?',
  },
  'mkt.schools.fs.faq.access.a': {
    en: 'Once your school is onboarded, we set up your admin account and bulk-create all student and teacher accounts for you. Students and teachers can also join by entering your unique school code when they register themselves.',
    ar: 'أول ما تتجهّز مدرستك، نسوّي لك حساب الإدارة وننشئ كل حسابات الطلاب والمعلّمين بالجملة. الطلاب والمعلّمون يقدرون كمان ينضمّون بإدخال كود مدرستك الخاص لمّا يسجّلون بنفسهم.',
    es: 'Una vez incorporado tu colegio, configuramos tu cuenta de administrador y creamos de forma masiva todas las cuentas de estudiantes y profesores por ti. Los estudiantes y profesores también pueden unirse introduciendo el código único de tu colegio cuando se registran ellos mismos.',
  },
  'mkt.schools.fs.faq.excel.q': {
    en: 'How does the Excel bulk upload work?',
    ar: 'كيف يشتغل الرفع بالجملة عبر Excel؟',
    es: '¿Cómo funciona la carga masiva por Excel?',
  },
  'mkt.schools.fs.faq.excel.a': {
    en: 'Download our simple Excel template from your admin dashboard. Add your students and teachers (name, email, year group), save the file, and upload it. The platform creates all accounts instantly and sends login details by email. No IT support or technical setup required.',
    ar: 'حمّل قالب Excel البسيط حقّنا من لوحة الإدارة. ضيف طلابك ومعلّميك (الاسم، الإيميل، السنة الدراسية)، احفظ الملف، وارفعه. المنصّة تنشئ كل الحسابات على طول وترسل بيانات الدخول بالإيميل. ما يحتاج دعم IT ولا إعداد تقني.',
    es: 'Descarga nuestra sencilla plantilla de Excel desde tu panel de administración. Añade a tus estudiantes y profesores (nombre, correo, curso), guarda el archivo y súbelo. La plataforma crea todas las cuentas al instante y envía los datos de acceso por correo. No se necesita soporte de TI ni configuración técnica.',
  },
  'mkt.schools.fs.faq.admin.q': {
    en: 'What admin controls does the school have?',
    ar: 'شنو صلاحيات الإدارة اللي عند المدرسة؟',
    es: '¿Qué controles de administración tiene el colegio?',
  },
  'mkt.schools.fs.faq.admin.a': {
    en: 'Your school admin account lets you manage all student and teacher accounts, view department-wide analytics, set and track assignments, generate progress reports, and control which features are visible to students. You can also create sub-admin accounts for heads of year or class teachers.',
    ar: 'حساب إدارة مدرستك يخلّيك تدير كل حسابات الطلاب والمعلّمين، تشوف تحليلات على مستوى القسم، تحضّر وتتابع المهام، تجهّز تقارير التقدّم، وتتحكّم بأي مزايا تظهر للطلاب. تقدر كمان تنشئ حسابات إدارة فرعية لرؤساء السنوات أو معلّمي الصف.',
    es: 'La cuenta de administrador de tu colegio te permite gestionar todas las cuentas de estudiantes y profesores, ver analíticas de todo el departamento, asignar y seguir tareas, generar informes de progreso y controlar qué funciones son visibles para los estudiantes. También puedes crear cuentas de subadministrador para jefes de curso o tutores de clase.',
  },
  'mkt.schools.fs.faq.boards.q': {
    en: 'Which exam boards do you cover?',
    ar: 'أي بوردات امتحان تغطّون؟',
    es: '¿Qué juntas examinadoras cubrís?',
  },
  'mkt.schools.fs.faq.boards.a': {
    en: "We support all major boards: AQA, Edexcel, OCR, WJEC/Eduqas, and IGCSE/CAIE. Your school selects one exam board during setup and all content -- lessons, resources, mark schemes, and AI feedback -- is tailored to that board's specification.",
    ar: 'ندعم كل البوردات الرئيسية: AQA و Edexcel و OCR و WJEC/Eduqas و IGCSE/CAIE. مدرستك تختار بورد واحد عند الإعداد وكل المحتوى -- الدروس، الموارد، معايير التصحيح، وتغذية الـ AI الراجعة -- يتفصّل على منهج ذاك البورد.',
    es: 'Damos soporte a todas las juntas principales: AQA, Edexcel, OCR, WJEC/Eduqas e IGCSE/CAIE. Tu colegio selecciona una junta examinadora durante la configuración y todo el contenido (lecciones, recursos, esquemas de calificación y comentarios de IA) se adapta al temario de esa junta.',
  },
  'mkt.schools.fs.faq.gdpr.q': {
    en: 'Is the platform GDPR compliant?',
    ar: 'هل المنصّة متوافقة مع GDPR؟',
    es: '¿Cumple la plataforma con el GDPR?',
  },
  'mkt.schools.fs.faq.gdpr.a': {
    en: "Yes. We are GDPR compliant. We do not sell student data and we do not use behavioural advertising networks. We use a defined set of named sub-processors to operate the service (hosting, payment processing, error monitoring, analytics), each listed with purpose and location in our Data Processing page and Privacy Policy. You can manage non-essential cookies via 'Manage Cookies'. We can sign a Data Processing Agreement with your school.",
    ar: 'إي. إحنا متوافقين مع GDPR. ما نبيع بيانات الطلاب وما نستخدم شبكات إعلانات سلوكية. نستخدم مجموعة محدّدة ومسمّاة من المعالِجين الفرعيين لتشغيل الخدمة (الاستضافة، معالجة الدفع، مراقبة الأخطاء، التحليلات)، كل واحد مذكور بغرضه وموقعه في صفحة معالجة البيانات وسياسة الخصوصية حقّنا. تقدر تدير الكوكيز غير الأساسية عبر "Manage Cookies". نقدر نوقّع اتفاقية معالجة بيانات مع مدرستك.',
    es: "Sí. Cumplimos con el GDPR. No vendemos los datos de los estudiantes y no usamos redes de publicidad conductual. Empleamos un conjunto definido y nombrado de subencargados del tratamiento para operar el servicio (alojamiento, procesamiento de pagos, monitorización de errores, analíticas), cada uno indicado con su finalidad y ubicación en nuestra página de Tratamiento de Datos y en la Política de Privacidad. Puedes gestionar las cookies no esenciales mediante 'Manage Cookies'. Podemos firmar un Acuerdo de Tratamiento de Datos con tu colegio.",
  },
  'mkt.schools.fs.faq.after.q': {
    en: 'What happens after the Founding Schools Programme?',
    ar: 'شنو يصير بعد برنامج المدارس المؤسِّسة؟',
    es: '¿Qué ocurre después del Programa de Colegios Fundadores?',
  },
  'mkt.schools.fs.faq.after.a': {
    en: 'Founding schools lock in preferential pricing for 2-3 years. Post-programme standard pricing will be significantly higher. The exact terms are agreed during your onboarding call.',
    ar: 'المدارس المؤسِّسة تثبّت سعر تفضيلي لمدة 2-3 سنوات. السعر العادي بعد البرنامج بيكون أعلى بوايد. الشروط بالضبط تُتّفق عليها أثناء مكالمة الإعداد.',
    es: 'Los colegios fundadores fijan un precio preferente durante 2-3 años. El precio estándar posterior al programa será considerablemente más alto. Las condiciones exactas se acuerdan durante tu llamada de incorporación.',
  },

  // ── Hero feature pills ─────────────────────────────────────────────
  'mkt.schools.fs.hero.pill.1': {
    en: 'Only 10 founding schools',
    ar: '10 مدارس مؤسِّسة بس',
    es: 'Solo 10 colegios fundadores',
  },
  'mkt.schools.fs.hero.pill.2': {
    en: 'Significant time saved on planning and marking',
    ar: 'توفير وايد للوقت على التحضير والتصحيح',
    es: 'Ahorro de tiempo considerable en planificación y corrección',
  },
  'mkt.schools.fs.hero.pill.3': {
    en: 'Ofsted-aligned department reporting',
    ar: 'تقارير القسم متوافقة مع Ofsted',
    es: 'Informes del departamento alineados con Ofsted',
  },

  // ── Try before you buy (demo) section ──────────────────────────────
  'mkt.schools.fs.demo.badge': {
    en: 'Interactive Demo',
    ar: 'ديمو تفاعلي',
    es: 'Demo interactiva',
  },
  'mkt.schools.fs.demo.title': {
    en: 'Explore the Full Platform -- No Signup Required',
    ar: 'استكشف المنصّة كاملة -- بدون تسجيل',
    es: 'Explora la plataforma completa: sin necesidad de registro',
  },
  'mkt.schools.fs.demo.body': {
    en: 'Navigate a complete school dashboard with sample data. Click through students, classes, analytics, and reports. See exactly what your school gets.',
    ar: 'تنقّل في لوحة مدرسة كاملة ببيانات تجريبية. اضغط بين الطلاب والصفوف والتحليلات والتقارير. شوف بالضبط شنو بتحصل مدرستك.',
    es: 'Navega por un panel escolar completo con datos de ejemplo. Recorre estudiantes, clases, analíticas e informes. Comprueba exactamente qué obtiene tu colegio.',
  },
  'mkt.schools.fs.demo.card.dashboard.title': {
    en: 'School Dashboard',
    ar: 'لوحة المدرسة',
    es: 'Panel del colegio',
  },
  'mkt.schools.fs.demo.card.dashboard.desc': {
    en: 'Overview of all year groups',
    ar: 'نظرة عامة على كل السنوات الدراسية',
    es: 'Vista general de todos los cursos',
  },
  'mkt.schools.fs.demo.card.analytics.title': {
    en: 'Student Analytics',
    ar: 'تحليلات الطلاب',
    es: 'Analíticas de estudiantes',
  },
  'mkt.schools.fs.demo.card.analytics.desc': {
    en: 'Drill down to individual student level',
    ar: 'تعمّق لين مستوى الطالب الفرد',
    es: 'Profundiza hasta el nivel de estudiante individual',
  },
  'mkt.schools.fs.demo.card.reports.title': {
    en: 'Class Reports',
    ar: 'تقارير الصف',
    es: 'Informes de clase',
  },
  'mkt.schools.fs.demo.card.reports.desc': {
    en: 'Personalised reports per class',
    ar: 'تقارير مخصّصة لكل صف',
    es: 'Informes personalizados por clase',
  },
  'mkt.schools.fs.demo.card.teachers.title': {
    en: 'Teacher Insights',
    ar: 'رؤى المعلّمين',
    es: 'Información de profesores',
  },
  'mkt.schools.fs.demo.card.teachers.desc': {
    en: 'See teacher-level performance data',
    ar: 'شوف بيانات الأداء على مستوى المعلّم',
    es: 'Consulta datos de rendimiento a nivel de profesor',
  },
  'mkt.schools.fs.demo.explore': {
    en: 'Explore',
    ar: 'استكشف',
    es: 'Explorar',
  },
  'mkt.schools.fs.demo.launch': {
    en: 'Launch Interactive Demo',
    ar: 'افتح الديمو التفاعلي',
    es: 'Abrir la demo interactiva',
  },
  'mkt.schools.fs.demo.no_signup': {
    en: 'No signup, no email, completely free to explore',
    ar: 'بدون تسجيل، بدون إيميل، استكشاف ببلاش بالكامل',
    es: 'Sin registro, sin correo, totalmente gratis para explorar',
  },

  // ── Value proposition section ──────────────────────────────────────
  'mkt.schools.fs.value.title': {
    en: 'Why Schools Join the Founding Programme',
    ar: 'ليش المدارس تنضمّ لبرنامج المؤسِّسين',
    es: 'Por qué los colegios se unen al Programa Fundador',
  },
  'mkt.schools.fs.value.body': {
    en: 'Founding schools get more than a platform -- they get a partnership that shapes the future of English teaching.',
    ar: 'المدارس المؤسِّسة تحصل أكثر من منصّة -- تحصل شراكة تشكّل مستقبل تدريس الإنجليزي.',
    es: 'Los colegios fundadores obtienen más que una plataforma: obtienen una alianza que da forma al futuro de la enseñanza del inglés.',
  },
  'mkt.schools.fs.value.founding_partner': {
    en: 'FOUNDING PARTNER',
    ar: 'شريك مؤسِّس',
    es: 'SOCIO FUNDADOR',
  },
  'mkt.schools.fs.value.programme_name': {
    en: 'Founding Schools Programme',
    ar: 'برنامج المدارس المؤسِّسة',
    es: 'Programa de Colegios Fundadores',
  },
  'mkt.schools.fs.value.programme_sub': {
    en: 'First 10 schools -- 2026 founding rate',
    ar: 'أول 10 مدارس -- سعر التأسيس 2026',
    es: 'Primeros 10 colegios -- tarifa fundadora 2026',
  },
  'mkt.schools.fs.value.founding_tag': {
    en: 'Founding Pricing · 10 only',
    ar: 'سعر التأسيس · 10 بس',
    es: 'Precio Fundador · solo 10',
  },
  'mkt.schools.fs.value.year': {
    en: '/ year',
    ar: '/ بالسنة',
    es: '/ año',
  },
  'mkt.schools.fs.value.standard_tag': {
    en: 'Standard Pricing (estimated)',
    ar: 'السعر العادي (تقديري)',
    es: 'Precio estándar (estimado)',
  },
  'mkt.schools.fs.value.locked_note': {
    en: 'Founding rate locked for 2–3 years. Tailored to your department size and discussed during your onboarding call.',
    ar: 'سعر التأسيس مثبّت لمدة 2–3 سنوات. مفصّل على حجم قسمك ويُناقَش أثناء مكالمة الإعداد.',
    es: 'Tarifa fundadora fijada durante 2-3 años. Adaptada al tamaño de tu departamento y tratada durante tu llamada de incorporación.',
  },
  'mkt.schools.fs.value.feat.1': {
    en: 'Full platform access -- all features, all students, all teachers',
    ar: 'وصول كامل للمنصّة -- كل المزايا، كل الطلاب، كل المعلّمين',
    es: 'Acceso completo a la plataforma -- todas las funciones, todos los estudiantes, todos los profesores',
  },
  'mkt.schools.fs.value.feat.2': {
    en: 'Choose your exam board (AQA, Edexcel, OCR, WJEC, IGCSE/CAIE)',
    ar: 'اختر بورد امتحانك (AQA, Edexcel, OCR, WJEC, IGCSE/CAIE)',
    es: 'Elige tu junta examinadora (AQA, Edexcel, OCR, WJEC, IGCSE/CAIE)',
  },
  'mkt.schools.fs.value.feat.3': {
    en: 'Early access to new features',
    ar: 'وصول مبكّر للمزايا الجديدة',
    es: 'Acceso anticipado a las nuevas funciones',
  },
  'mkt.schools.fs.value.feat.4': {
    en: 'Direct product input and feedback loop',
    ar: 'تأثير مباشر على المنتج وقناة ملاحظات',
    es: 'Aportación directa al producto y canal de comentarios',
  },
  'mkt.schools.fs.value.feat.5': {
    en: 'Priority onboarding and dedicated support',
    ar: 'إعداد بأولوية ودعم مخصّص',
    es: 'Incorporación prioritaria y soporte dedicado',
  },
  'mkt.schools.fs.value.feat.6': {
    en: 'Locked preferential pricing for 2-3 years',
    ar: 'سعر تفضيلي مثبّت لمدة 2-3 سنوات',
    es: 'Precio preferente fijado durante 2-3 años',
  },
  'mkt.schools.fs.value.feat.7': {
    en: 'Founding partner recognition',
    ar: 'تكريم كشريك مؤسِّس',
    es: 'Reconocimiento como socio fundador',
  },
  'mkt.schools.fs.value.cta_book': {
    en: 'Book a Call to Discuss',
    ar: 'احجز مكالمة للنقاش',
    es: 'Reserva una llamada para hablarlo',
  },
  'mkt.schools.fs.value.post.title': {
    en: 'Post-Programme Pricing',
    ar: 'الأسعار بعد البرنامج',
    es: 'Precios posteriores al programa',
  },
  'mkt.schools.fs.value.post.sub': {
    en: 'After the founding cohort closes',
    ar: 'بعد ما تسكّر دفعة المؤسِّسين',
    es: 'Después de que se cierre la promoción fundadora',
  },
  'mkt.schools.fs.value.post.higher': {
    en: 'Significantly higher',
    ar: 'أعلى بوايد',
    es: 'Considerablemente más alto',
  },
  'mkt.schools.fs.value.post.higher_sub': {
    en: 'Standard pricing will reflect the full value of the platform.',
    ar: 'السعر العادي بيعكس القيمة الكاملة للمنصّة.',
    es: 'El precio estándar reflejará el valor completo de la plataforma.',
  },
  'mkt.schools.fs.value.post.why_join': {
    en: 'Why join now?',
    ar: 'ليش تنضمّ الحين؟',
    es: '¿Por qué unirse ahora?',
  },
  'mkt.schools.fs.value.post.why_body': {
    en: 'The first 10 schools to sign lock in founding-partner rates for 2-3 years. Schools joining after the founding cohort closes pay standard (higher) rates.',
    ar: 'أول 10 مدارس توقّع تثبّت أسعار الشريك المؤسِّس لمدة 2-3 سنوات. المدارس اللي تنضمّ بعد ما تسكّر دفعة المؤسِّسين تدفع الأسعار العادية (الأعلى).',
    es: 'Los primeros 10 colegios en firmar fijan tarifas de socio fundador durante 2-3 años. Los colegios que se unan después de que se cierre la promoción fundadora pagan tarifas estándar (más altas).',
  },
  'mkt.schools.fs.value.post.no_early': {
    en: 'No early features access',
    ar: 'بدون وصول مبكّر للمزايا',
    es: 'Sin acceso anticipado a las funciones',
  },
  'mkt.schools.fs.value.post.no_input': {
    en: 'No direct product input',
    ar: 'بدون تأثير مباشر على المنتج',
    es: 'Sin aportación directa al producto',
  },
  'mkt.schools.fs.value.post.no_locked': {
    en: 'No locked preferential pricing',
    ar: 'بدون سعر تفضيلي مثبّت',
    es: 'Sin precio preferente fijado',
  },
  'mkt.schools.fs.value.post.no_recognition': {
    en: 'No founding partner recognition',
    ar: 'بدون تكريم كشريك مؤسِّس',
    es: 'Sin reconocimiento como socio fundador',
  },
  'mkt.schools.fs.value.post.standard_onboarding': {
    en: 'Standard onboarding',
    ar: 'إعداد عادي',
    es: 'Incorporación estándar',
  },
  'mkt.schools.fs.value.post.full_access': {
    en: 'Full platform access',
    ar: 'وصول كامل للمنصّة',
    es: 'Acceso completo a la plataforma',
  },
  'mkt.schools.fs.value.reserved_note': {
    en: 'Founding partner pricing is reserved for the first 10 schools to sign. Book a call to secure your founding place -- later schools are welcome at standard rates.',
    ar: 'سعر الشريك المؤسِّس محجوز لأول 10 مدارس توقّع. احجز مكالمة عشان تأمّن مكانك المؤسِّس -- المدارس المتأخّرة مرحّب فيها بالأسعار العادية.',
    es: 'El precio de socio fundador está reservado para los primeros 10 colegios en firmar. Reserva una llamada para asegurar tu plaza de fundador: los colegios posteriores son bienvenidos a tarifas estándar.',
  },

  // ── Feature showcase section ───────────────────────────────────────
  'mkt.schools.fs.showcase.body': {
    en: 'Built to raise attainment, reduce workload, and give leadership full visibility across every class and year group.',
    ar: 'مبني يرفع التحصيل، يقلّل الضغط، ويعطي الإدارة وضوح كامل عبر كل صف وسنة دراسية.',
    es: 'Creado para elevar el rendimiento, reducir la carga de trabajo y dar a la dirección visibilidad completa en cada clase y curso.',
  },

  // ── Content creation preview (for-schools) ─────────────────────────
  'mkt.schools.fs.content.eyebrow': {
    en: 'For Teachers',
    ar: 'للمعلّمين',
    es: 'Para profesores',
  },
  'mkt.schools.fs.content.title': {
    en: 'Generate Lessons, Worksheets & Presentations Instantly',
    ar: 'جهّز دروس وأوراق عمل وعروض تقديمية على طول',
    es: 'Genera lecciones, fichas de trabajo y presentaciones al instante',
  },
  'mkt.schools.fs.content.body': {
    en: 'Stop spending evenings making resources. Teachers on The English Hub can instantly generate fully-formed lesson plans, printable worksheets, and classroom presentations from the platform -- all mapped to your exam board specification.',
    ar: 'بطّل تضيّع أمسياتك في تجهيز الموارد. المعلّمون على The English Hub يقدرون يجهّزون على طول خطط دروس متكاملة، أوراق عمل للطباعة، وعروض صفّية من المنصّة -- كلها مربوطة بمنهج بوردك.',
    es: 'Deja de pasar las tardes creando recursos. Los profesores de The English Hub pueden generar al instante planes de lección completos, fichas de trabajo imprimibles y presentaciones para el aula desde la plataforma, todo mapeado al temario de tu junta examinadora.',
  },
  'mkt.schools.fs.content.point.1': {
    en: 'Lesson plans with teacher notes and differentiation built in',
    ar: 'خطط دروس مع ملاحظات المعلّم والتفاوت مدمج فيها',
    es: 'Planes de lección con notas del profesor y diferenciación integradas',
  },
  'mkt.schools.fs.content.point.2': {
    en: 'Printable worksheets editable before download',
    ar: 'أوراق عمل للطباعة قابلة للتعديل قبل التحميل',
    es: 'Fichas de trabajo imprimibles y editables antes de la descarga',
  },
  'mkt.schools.fs.content.point.3': {
    en: 'Slide decks with learning objectives and discussion prompts',
    ar: 'شرائح مع أهداف تعلّم وأسئلة نقاش',
    es: 'Presentaciones con objetivos de aprendizaje y preguntas de debate',
  },
  'mkt.schools.fs.content.point.4': {
    en: 'Practice assessments with auto-marking',
    ar: 'تقييمات تدريبية مع تصحيح تلقائي',
    es: 'Evaluaciones de práctica con corrección automática',
  },
  'mkt.schools.fs.content.cta': {
    en: 'See It in a Demo',
    ar: 'شوفها في الديمو',
    es: 'Míralo en una demo',
  },
  'mkt.schools.fs.content.gen.title': {
    en: 'AI Lesson Generator',
    ar: 'مولّد الدروس بالـ AI',
    es: 'Generador de lecciones con IA',
  },
  'mkt.schools.fs.content.gen.prompt': {
    en: 'Generate a lesson plan for...',
    ar: 'جهّز خطة درس لـ...',
    es: 'Genera un plan de lección para...',
  },
  'mkt.schools.fs.content.gen.example': {
    en: '"AQA Language Paper 2 -- Viewpoints & Perspectives, Year 11"',
    ar: '"AQA Language Paper 2 -- Viewpoints & Perspectives, Year 11"',
    es: '"AQA Language Paper 2 -- Viewpoints & Perspectives, Year 11"',
  },
  'mkt.schools.fs.content.gen.generating': {
    en: 'Generating...',
    ar: 'يجهّز...',
    es: 'Generando...',
  },

  // ── Analytics preview (for-schools) ────────────────────────────────
  'mkt.schools.fs.analytics.dept_overview': {
    en: 'Department Overview',
    ar: 'نظرة عامة على القسم',
    es: 'Vista general del departamento',
  },
  'mkt.schools.fs.analytics.all_groups': {
    en: 'All Year Groups -- Live Data',
    ar: 'كل السنوات الدراسية -- بيانات حيّة',
    es: 'Todos los cursos -- datos en directo',
  },
  'mkt.schools.fs.analytics.live': {
    en: 'Live',
    ar: 'مباشر',
    es: 'En directo',
  },
  'mkt.schools.fs.analytics.metric.y11_avg.label': {
    en: 'Year 11 Avg Score',
    ar: 'متوسّط درجة Year 11',
    es: 'Nota media de Year 11',
  },
  'mkt.schools.fs.analytics.metric.y11_avg.trend': {
    en: '+4% this month',
    ar: '+4% هذا الشهر',
    es: '+4% este mes',
  },
  'mkt.schools.fs.analytics.metric.at_risk.label': {
    en: 'At-Risk Students',
    ar: 'الطلاب المعرّضون للخطر',
    es: 'Estudiantes en riesgo',
  },
  'mkt.schools.fs.analytics.metric.at_risk.trend': {
    en: 'Flagged for intervention',
    ar: 'مُعلَّمون للتدخّل',
    es: 'Señalados para intervención',
  },
  'mkt.schools.fs.analytics.metric.completion.label': {
    en: 'Completion Rate',
    ar: 'نسبة الإنجاز',
    es: 'Tasa de finalización',
  },
  'mkt.schools.fs.analytics.metric.completion.trend': {
    en: 'Across all year groups',
    ar: 'عبر كل السنوات الدراسية',
    es: 'En todos los cursos',
  },
  'mkt.schools.fs.analytics.metric.top_class.label': {
    en: 'Top Performing Class',
    ar: 'الصف الأعلى أداءً',
    es: 'Clase con mejor rendimiento',
  },
  'mkt.schools.fs.analytics.metric.top_class.trend': {
    en: '84% average',
    ar: 'متوسّط 84%',
    es: 'media del 84%',
  },
  'mkt.schools.fs.analytics.year_comparison': {
    en: 'Year Group Comparison',
    ar: 'مقارنة السنوات الدراسية',
    es: 'Comparación entre cursos',
  },
  'mkt.schools.fs.analytics.eyebrow': {
    en: 'For School Leaders',
    ar: 'لقادة المدارس',
    es: 'Para directivos escolares',
  },
  'mkt.schools.fs.analytics.title': {
    en: 'Real-Time Progress Across Every Year Group',
    ar: 'تقدّم لحظة بلحظة عبر كل سنة دراسية',
    es: 'Progreso en tiempo real en cada curso',
  },
  'mkt.schools.fs.analytics.body': {
    en: 'School admins and heads of department get a live overview of progress across all classes and year groups. Identify at-risk students before results day. Compare class performance. Generate department reports aligned to common Ofsted English subject deep-dive criteria.',
    ar: 'مدراء المدرسة ورؤساء الأقسام يحصلون نظرة حيّة على التقدّم عبر كل الصفوف والسنوات الدراسية. اكتشف الطلاب المعرّضين للخطر قبل يوم النتائج. قارن أداء الصفوف. جهّز تقارير القسم متوافقة مع معايير Ofsted للتعمّق في مادة الإنجليزي.',
    es: 'Los administradores escolares y los jefes de departamento obtienen una vista en directo del progreso en todas las clases y cursos. Identifica a los estudiantes en riesgo antes del día de resultados. Compara el rendimiento de las clases. Genera informes del departamento alineados con los criterios habituales de la inspección detallada de la asignatura de inglés de Ofsted.',
  },
  'mkt.schools.fs.analytics.point.1': {
    en: 'Live dashboard across all year groups and classes',
    ar: 'لوحة حيّة عبر كل السنوات الدراسية والصفوف',
    es: 'Panel en directo en todos los cursos y clases',
  },
  'mkt.schools.fs.analytics.point.2': {
    en: 'At-risk student alerts with suggested interventions',
    ar: 'تنبيهات للطلاب المعرّضين للخطر مع تدخّلات مقترحة',
    es: 'Alertas de estudiantes en riesgo con intervenciones sugeridas',
  },
  'mkt.schools.fs.analytics.point.3': {
    en: 'Class-by-class and student-by-student drill down',
    ar: 'تعمّق صف بصف وطالب بطالب',
    es: 'Análisis detallado clase por clase y estudiante por estudiante',
  },
  'mkt.schools.fs.analytics.point.4': {
    en: 'Department reports aligned to Ofsted English subject deep-dive criteria',
    ar: 'تقارير القسم متوافقة مع معايير Ofsted للتعمّق في مادة الإنجليزي',
    es: 'Informes del departamento alineados con los criterios de la inspección detallada de la asignatura de inglés de Ofsted',
  },
  'mkt.schools.fs.analytics.point.5': {
    en: 'Comparison against previous cohorts and national averages',
    ar: 'مقارنة مع الدفعات السابقة والمتوسّطات الوطنية',
    es: 'Comparación con promociones anteriores y medias nacionales',
  },
  'mkt.schools.fs.analytics.point.6': {
    en: 'An internal progress estimate from practice and mock activity to help target teaching support',
    ar: 'تقدير تقدّم داخلي من نشاط التدريب والاختبارات التجريبية يساعد في توجيه الدعم التدريسي',
    es: 'Una estimación interna del progreso a partir de la actividad de práctica y simulacros para ayudar a orientar el apoyo en la enseñanza',
  },
  'mkt.schools.fs.analytics.disclaimer': {
    en: 'The platform produces an internal progress estimate from a student’s practice and mock activity to help teachers see where to focus support. This is a teaching aid only — not a predicted grade for any awarding body, not a substitute for any exam-board or centre-assessment process, and not used to determine results when a student misses an exam (those are decided solely by the awarding body).',
    ar: 'المنصّة تطلّع تقدير تقدّم داخلي من نشاط التدريب والاختبارات التجريبية حق الطالب عشان تساعد المعلّمين يشوفون وين يركّزون الدعم. هذي أداة تدريسية بس — مو درجة متوقّعة لأي جهة منح، ومو بديل عن أي عملية بورد امتحان أو تقييم مركز، وما تُستخدم لتحديد النتائج لمّا يفوت الطالب امتحان (هذي تقرّرها جهة المنح وحدها).',
    es: 'La plataforma produce una estimación interna del progreso a partir de la actividad de práctica y simulacros del estudiante para ayudar a los profesores a ver dónde centrar el apoyo. Es únicamente una ayuda docente, no una nota prevista para ningún organismo de titulación, ni un sustituto de ningún proceso de junta examinadora o de evaluación del centro, ni se usa para determinar resultados cuando un estudiante falta a un examen (esos los decide exclusivamente el organismo de titulación).',
  },
  'mkt.schools.fs.analytics.cta': {
    en: 'See Full Demo',
    ar: 'شوف الديمو كامل',
    es: 'Ver demo completa',
  },

  // ── User management section ────────────────────────────────────────
  'mkt.schools.fs.users.badge': {
    en: 'Admin Controls',
    ar: 'صلاحيات الإدارة',
    es: 'Controles de administración',
  },
  'mkt.schools.fs.users.title': {
    en: 'Bulk Upload. Instant Access. Zero Friction.',
    ar: 'رفع بالجملة. وصول فوري. بدون أي عقبات.',
    es: 'Carga masiva. Acceso inmediato. Cero fricción.',
  },
  'mkt.schools.fs.users.body': {
    en: 'No IT department needed. Get your entire school live in one afternoon.',
    ar: 'ما يحتاج قسم IT. خلّي مدرستك كاملة شغّالة في عصرية وحدة.',
    es: 'No se necesita departamento de TI. Pon todo tu colegio en marcha en una sola tarde.',
  },
  'mkt.schools.fs.users.admin.title': {
    en: 'School Admin Account',
    ar: 'حساب إدارة المدرسة',
    es: 'Cuenta de administrador del colegio',
  },
  'mkt.schools.fs.users.admin.point.1': {
    en: 'Manage all student and teacher accounts',
    ar: 'إدارة كل حسابات الطلاب والمعلّمين',
    es: 'Gestiona todas las cuentas de estudiantes y profesores',
  },
  'mkt.schools.fs.users.admin.point.2': {
    en: 'Create sub-admin accounts for teachers',
    ar: 'إنشاء حسابات إدارة فرعية للمعلّمين',
    es: 'Crea cuentas de subadministrador para profesores',
  },
  'mkt.schools.fs.users.admin.point.3': {
    en: 'Set school-wide and class-level permissions',
    ar: 'ضبط الصلاحيات على مستوى المدرسة والصف',
    es: 'Establece permisos a nivel de colegio y de clase',
  },
  'mkt.schools.fs.users.admin.point.4': {
    en: 'View department-wide analytics',
    ar: 'عرض تحليلات على مستوى القسم',
    es: 'Consulta analíticas de todo el departamento',
  },
  'mkt.schools.fs.users.excel.title': {
    en: 'Excel Bulk Upload',
    ar: 'رفع بالجملة عبر Excel',
    es: 'Carga masiva por Excel',
  },
  'mkt.schools.fs.users.excel.point.1': {
    en: 'Download our simple Excel template',
    ar: 'حمّل قالب Excel البسيط حقّنا',
    es: 'Descarga nuestra sencilla plantilla de Excel',
  },
  'mkt.schools.fs.users.excel.point.2': {
    en: 'Add names, emails, year groups',
    ar: 'ضيف الأسماء والإيميلات والسنوات الدراسية',
    es: 'Añade nombres, correos y cursos',
  },
  'mkt.schools.fs.users.excel.point.3': {
    en: 'Upload once -- all accounts created instantly',
    ar: 'ارفع مرة وحدة -- كل الحسابات تُنشأ على طول',
    es: 'Sube una sola vez -- todas las cuentas se crean al instante',
  },
  'mkt.schools.fs.users.excel.point.4': {
    en: 'Login details sent to each student and teacher',
    ar: 'بيانات الدخول تُرسل لكل طالب ومعلّم',
    es: 'Los datos de acceso se envían a cada estudiante y profesor',
  },
  'mkt.schools.fs.users.self.title': {
    en: 'Self-Registration Option',
    ar: 'خيار التسجيل الذاتي',
    es: 'Opción de autorregistro',
  },
  'mkt.schools.fs.users.self.point.1': {
    en: 'Share your unique school code',
    ar: 'شارك كود مدرستك الخاص',
    es: 'Comparte el código único de tu colegio',
  },
  'mkt.schools.fs.users.self.point.2': {
    en: 'Students register themselves using the code',
    ar: 'الطلاب يسجّلون بنفسهم باستخدام الكود',
    es: 'Los estudiantes se registran ellos mismos con el código',
  },
  'mkt.schools.fs.users.self.point.3': {
    en: 'Auto-linked to your school account',
    ar: 'يُربطون تلقائياً بحساب مدرستك',
    es: 'Se vinculan automáticamente a la cuenta de tu colegio',
  },
  'mkt.schools.fs.users.self.point.4': {
    en: 'Admin approval toggle available',
    ar: 'خيار موافقة الإدارة متوفّر',
    es: 'Opción de aprobación por el administrador disponible',
  },
  'mkt.schools.fs.users.template.sub': {
    en: 'Download from your admin dashboard',
    ar: 'حمّل من لوحة الإدارة حقّتك',
    es: 'Descárgala desde tu panel de administración',
  },
  'mkt.schools.fs.users.template.col.first': {
    en: 'First Name',
    ar: 'الاسم الأول',
    es: 'Nombre',
  },
  'mkt.schools.fs.users.template.col.last': {
    en: 'Last Name',
    ar: 'اسم العائلة',
    es: 'Apellido',
  },
  'mkt.schools.fs.users.template.col.email': {
    en: 'Email',
    ar: 'البريد الإلكتروني',
    es: 'Correo electrónico',
  },
  'mkt.schools.fs.users.template.col.year': {
    en: 'Year Group',
    ar: 'السنة الدراسية',
    es: 'Curso',
  },
  'mkt.schools.fs.users.template.note': {
    en: 'Upload this file and all accounts are created instantly. No IT support needed.',
    ar: 'ارفع هذا الملف وكل الحسابات تُنشأ على طول. ما يحتاج دعم IT.',
    es: 'Sube este archivo y todas las cuentas se crean al instante. No se necesita soporte de TI.',
  },

  // ── How it works section headings ──────────────────────────────────
  'mkt.schools.fs.getting_started.badge': {
    en: 'Getting Started',
    ar: 'البداية',
    es: 'Primeros pasos',
  },
  'mkt.schools.fs.getting_started.title': {
    en: 'Up and Running in 3 Steps',
    ar: 'جاهز وشغّال في 3 خطوات',
    es: 'En marcha en 3 pasos',
  },
  'mkt.schools.fs.getting_started.body': {
    en: 'Most schools are fully live within a single afternoon. No IT department required.',
    ar: 'أغلب المدارس تكون شغّالة بالكامل خلال عصرية وحدة. ما يحتاج قسم IT.',
    es: 'La mayoría de los colegios están totalmente operativos en una sola tarde. No se necesita departamento de TI.',
  },
  'mkt.schools.fs.getting_started.step': {
    en: 'Step',
    ar: 'خطوة',
    es: 'Paso',
  },
  'mkt.schools.fs.getting_started.cta': {
    en: 'Book a 20-Minute Call',
    ar: 'احجز مكالمة 20 دقيقة',
    es: 'Reserva una llamada de 20 minutos',
  },

  // ── Testimonials section ───────────────────────────────────────────
  'mkt.schools.fs.testi.badge': {
    en: 'From Schools Using the Platform',
    ar: 'من المدارس اللي تستخدم المنصّة',
    es: 'De los colegios que usan la plataforma',
  },
  'mkt.schools.fs.testi.title': {
    en: "Founding teachers' words, coming soon.",
    ar: 'كلام المعلّمين المؤسِّسين، جاي قريب.',
    es: 'Las palabras de los profesores fundadores, próximamente.',
  },
  'mkt.schools.fs.testi.body': {
    en: 'We are launching now. Real testimonials will appear here as the first Founding Schools join the programme. Be one of them.',
    ar: 'إحنا في مرحلة الإطلاق الحين. الشهادات الحقيقية بتظهر هني أول ما تنضمّ المدارس المؤسِّسة الأولى للبرنامج. كن منهم.',
    es: 'Estamos lanzándonos ahora. Aquí aparecerán testimonios reales a medida que los primeros Colegios Fundadores se unan al programa. Sé uno de ellos.',
  },
  'mkt.schools.fs.testi.empty': {
    en: "We are at launch and we say so plainly. As Founding Schools come on board, their teachers' words will sit here - verified, attributable, and used only with explicit consent.",
    ar: 'إحنا في مرحلة الإطلاق ونقولها بصراحة. أول ما تنضمّ المدارس المؤسِّسة، كلام معلّميها بيكون هني - موثّق، منسوب لأصحابه، ويُستخدم بس بموافقة صريحة.',
    es: 'Estamos en el lanzamiento y lo decimos con claridad. A medida que los Colegios Fundadores se incorporen, las palabras de sus profesores se mostrarán aquí: verificadas, atribuibles y usadas solo con consentimiento explícito.',
  },

  // ── Comparison table section ───────────────────────────────────────
  'mkt.schools.fs.compare.badge': {
    en: 'Value Comparison',
    ar: 'مقارنة القيمة',
    es: 'Comparación de valor',
  },
  'mkt.schools.fs.compare.title': {
    en: 'School Partnership vs Individual Subscriptions',
    ar: 'شراكة المدرسة مقابل الاشتراكات الفردية',
    es: 'Alianza escolar frente a suscripciones individuales',
  },
  'mkt.schools.fs.compare.body': {
    en: 'The school partnership is not just better value -- it unlocks features that individual subscriptions simply do not include.',
    ar: 'شراكة المدرسة مو بس قيمة أفضل -- تفتح مزايا الاشتراكات الفردية ما تشملها أصلاً.',
    es: 'La alianza escolar no solo ofrece mejor valor: desbloquea funciones que las suscripciones individuales simplemente no incluyen.',
  },
  'mkt.schools.fs.compare.col.feature': {
    en: 'Feature',
    ar: 'الميزة',
    es: 'Función',
  },
  'mkt.schools.fs.compare.col.school': {
    en: 'School Partnership',
    ar: 'شراكة المدرسة',
    es: 'Alianza escolar',
  },
  'mkt.schools.fs.compare.col.school_founding': {
    en: 'Founding: £4,000/year',
    ar: 'تأسيس: £4,000 بالسنة',
    es: 'Fundador: £4,000/año',
  },
  'mkt.schools.fs.compare.col.school_first10': {
    en: 'First 10 schools only',
    ar: 'أول 10 مدارس بس',
    es: 'Solo los primeros 10 colegios',
  },
  'mkt.schools.fs.compare.col.individual': {
    en: 'Individual Subs',
    ar: 'اشتراكات فردية',
    es: 'Suscripciones individuales',
  },
  'mkt.schools.fs.compare.col.per_student': {
    en: 'Per student',
    ar: 'لكل طالب',
    es: 'Por estudiante',
  },

  // ── Compliance pack section ────────────────────────────────────────
  'mkt.schools.fs.compliance.title': {
    en: 'Compliance pack - available on request',
    ar: 'حزمة الامتثال - متوفّرة عند الطلب',
    es: 'Pack de cumplimiento - disponible bajo petición',
  },
  'mkt.schools.fs.compliance.body_pre': {
    en: 'For DPOs and bursars. Email',
    ar: 'لمسؤولي حماية البيانات والمحاسبين. راسل',
    es: 'Para DPO y administradores financieros. Escribe a',
  },
  'mkt.schools.fs.compliance.body_post': {
    en: 'and we will send the latest versions within one working day.',
    ar: 'وبنرسل لك أحدث النسخ خلال يوم عمل واحد.',
    es: 'y enviaremos las versiones más recientes en un día laborable.',
  },
  'mkt.schools.fs.compliance.dpa': {
    en: 'Data Processing Agreement (Word)',
    ar: 'اتفاقية معالجة البيانات (Word)',
    es: 'Acuerdo de Tratamiento de Datos (Word)',
  },
  'mkt.schools.fs.compliance.dpa_note': {
    en: '- available to schools on request during procurement',
    ar: '- متوفّرة للمدارس عند الطلب أثناء الشراء',
    es: '- disponible para los colegios bajo petición durante la contratación',
  },
  'mkt.schools.fs.compliance.dpia': {
    en: 'Data Protection Impact Assessment (PDF)',
    ar: 'تقييم أثر حماية البيانات (PDF)',
    es: 'Evaluación de Impacto sobre la Protección de Datos (PDF)',
  },
  'mkt.schools.fs.compliance.dpia_note': {
    en: '- in preparation; not yet available for inspection',
    ar: '- قيد الإعداد؛ مو متوفّرة للفحص بعد',
    es: '- en preparación; aún no disponible para su consulta',
  },
  'mkt.schools.fs.compliance.safeguard': {
    en: 'Safeguarding Policy (PDF)',
    ar: 'سياسة حماية الطلاب (PDF)',
    es: 'Política de Protección del Menor (PDF)',
  },
  'mkt.schools.fs.compliance.safeguard_note': {
    en: '- available to schools on request during procurement',
    ar: '- متوفّرة للمدارس عند الطلب أثناء الشراء',
    es: '- disponible para los colegios bajo petición durante la contratación',
  },
  'mkt.schools.fs.compliance.cyber': {
    en: 'Cyber Essentials certificate',
    ar: 'شهادة Cyber Essentials',
    es: 'Certificado Cyber Essentials',
  },
  'mkt.schools.fs.compliance.cyber_note': {
    en: '- not currently held',
    ar: '- غير متوفّرة حالياً',
    es: '- no disponible actualmente',
  },
  'mkt.schools.fs.compliance.vpat': {
    en: 'VPAT / accessibility conformance',
    ar: 'VPAT / مطابقة إمكانية الوصول',
    es: 'VPAT / conformidad de accesibilidad',
  },
  'mkt.schools.fs.compliance.vpat_note': {
    en: '- not currently held',
    ar: '- غير متوفّرة حالياً',
    es: '- no disponible actualmente',
  },

  // ── FAQ section headings (for-schools) ─────────────────────────────
  'mkt.schools.fs.faq.badge': {
    en: 'FAQs',
    ar: 'الأسئلة الشائعة',
    es: 'Preguntas frecuentes',
  },
  'mkt.schools.fs.faq.title': {
    en: 'Frequently Asked Questions',
    ar: 'الأسئلة الشائعة',
    es: 'Preguntas frecuentes',
  },
  'mkt.schools.fs.faq.sub': {
    en: 'Everything you need to know about The English Hub for schools.',
    ar: 'كل اللي تحتاج تعرفه عن The English Hub للمدارس.',
    es: 'Todo lo que necesitas saber sobre The English Hub para colegios.',
  },
  'mkt.schools.fs.faq.contact_pre': {
    en: 'Got a question not answered here?',
    ar: 'عندك سؤال ما لقيت جوابه هني؟',
    es: '¿Tienes una pregunta que no se responde aquí?',
  },
  'mkt.schools.fs.faq.contact_book': {
    en: 'Book a call',
    ar: 'احجز مكالمة',
    es: 'Reserva una llamada',
  },
  'mkt.schools.fs.faq.contact_or_email': {
    en: 'or email',
    ar: 'أو راسل',
    es: 'o escribe a',
  },
  'mkt.schools.fs.faq.contact_post': {
    en: 'and we will get back to you within one working day.',
    ar: 'وبنرد عليك خلال يوم عمل واحد.',
    es: 'y te responderemos en un día laborable.',
  },

  // ── Book a call / contact form section ─────────────────────────────
  'mkt.schools.fs.book.title': {
    en: 'Book a 20-Minute Call',
    ar: 'احجز مكالمة 20 دقيقة',
    es: 'Reserva una llamada de 20 minutos',
  },
  'mkt.schools.fs.book.body': {
    en: 'Speak with our schools team. We will walk you through the platform, discuss pricing tailored to your department, and answer every question you have.',
    ar: 'كلّم فريق المدارس حقّنا. بنشرح لك المنصّة، نناقش أسعار مفصّلة على قسمك، ونجاوب كل أسئلتك.',
    es: 'Habla con nuestro equipo de colegios. Te mostraremos la plataforma, hablaremos de precios adaptados a tu departamento y responderemos a todas tus preguntas.',
  },

  // ── Footer (for-schools) ───────────────────────────────────────────
  'mkt.schools.fs.footer.tagline': {
    en: 'Expert English courses for KS3, GCSE, IGCSE, and all major exam boards.',
    ar: 'دورات إنجليزي متخصّصة لـ KS3 و GCSE و IGCSE وكل بوردات الامتحان الرئيسية.',
    es: 'Cursos de inglés especializados para KS3, GCSE, IGCSE y todas las juntas examinadoras principales.',
  },
  'mkt.schools.fs.footer.link.schools': {
    en: 'For Schools',
    ar: 'للمدارس',
    es: 'Para colegios',
  },
  'mkt.schools.fs.footer.link.courses': {
    en: 'Courses',
    ar: 'الدورات',
    es: 'Cursos',
  },
  'mkt.schools.fs.footer.link.practice': {
    en: 'Practice',
    ar: 'تدريب',
    es: 'Práctica',
  },
  'mkt.schools.fs.footer.link.revision': {
    en: 'Revision',
    ar: 'المراجعة',
    es: 'Repaso',
  },
  'mkt.schools.fs.footer.link.login': {
    en: 'Log in',
    ar: 'تسجيل الدخول',
    es: 'Iniciar sesión',
  },
  'mkt.schools.fs.footer.rights': {
    en: 'All rights reserved.',
    ar: 'كل الحقوق محفوظة.',
    es: 'Todos los derechos reservados.',
  },

  /* ════ ABOUT > CONTENT VERIFICATION (src/app/about/content-verification) ════ */

  // ── Hero ───────────────────────────────────────────────────────────
  'about.cv.badge': {
    en: 'Methodology',
    ar: 'المنهجية',
    es: 'Metodología',
  },
  'about.cv.h1': {
    en: 'Content Verification Methodology',
    ar: 'منهجية التحقّق من المحتوى',
    es: 'Metodología de verificación de contenidos',
  },
  'about.cv.intro': {
    en: 'How we check what we publish, where AI is used and where it stops, and how readers can raise an issue. Written for parents, teachers and school leaders who need to know what stands behind the content their students see.',
    ar: 'كيف نتأكّد من اللي ننشره، وين نستخدم الـ AI ووين نوقف، وكيف القارئ يقدر يبلّغ عن مشكلة. مكتوب للأهل والمعلّمين وقادة المدارس اللي يبون يعرفون شنو يقف ورا المحتوى اللي يشوفه طلابهم.',
    es: 'Cómo comprobamos lo que publicamos, dónde se usa la IA y dónde se detiene, y cómo los lectores pueden plantear una incidencia. Redactado para padres, profesores y directivos escolares que necesitan saber qué respalda el contenido que ven sus estudiantes.',
  },
  'about.cv.last_reviewed': {
    en: 'Last reviewed:',
    ar: 'آخر مراجعة:',
    es: 'Última revisión:',
  },

  // ── A. Why verification matters ────────────────────────────────────
  'about.cv.a.eyebrow': {
    en: 'A. Why verification matters',
    ar: 'A. ليش التحقّق مهم',
    es: 'A. Por qué importa la verificación',
  },
  'about.cv.a.title': {
    en: 'English students rely on accurate sources',
    ar: 'طلاب الإنجليزي يعتمدون على مصادر دقيقة',
    es: 'Los estudiantes de inglés dependen de fuentes precisas',
  },
  'about.cv.a.p1': {
    en: 'English revision depends on accurate quotations, clear interpretation, valid exam guidance and trustworthy feedback. A misremembered Macbeth line or a mark-scheme guidance point that is half-right can cost a student real marks in a closed-book exam. Verification is how we keep that surface area clean.',
    ar: 'مراجعة الإنجليزي تعتمد على اقتباسات دقيقة، تفسير واضح، توجيه امتحاني صحيح، وتغذية راجعة موثوقة. سطر Macbeth متذكّر غلط أو نقطة توجيه في معيار التصحيح نص صح تقدر تكلّف الطالب درجات حقيقية في امتحان مغلق الكتاب. التحقّق هو طريقتنا نخلّي هالمساحة نظيفة.',
    es: 'El repaso de inglés depende de citas precisas, una interpretación clara, una orientación de examen válida y comentarios fiables. Un verso de Macbeth recordado mal o un punto de orientación del esquema de calificación que es medio correcto pueden costarle al estudiante puntos reales en un examen a libro cerrado. La verificación es nuestra forma de mantener limpia esa superficie.',
  },
  'about.cv.a.p2': {
    en: 'We are an AI-assisted platform, not an AI-only platform. The role of human review is to catch the things AI confidently gets wrong: invented quotations, conflated characters, plausible-sounding but invalid mark-scheme language, and contextual claims that no source supports.',
    ar: 'إحنا منصّة بمساعدة الـ AI، مو منصّة AI بس. دور المراجعة البشرية إنها تمسك الأشياء اللي الـ AI يخطئ فيها بثقة: اقتباسات مخترعة، شخصيات مدموجة بالغلط، لغة معيار تصحيح تبدو منطقية بس غير صحيحة، وادّعاءات سياقية ما يدعمها أي مصدر.',
    es: 'Somos una plataforma asistida por IA, no una plataforma exclusivamente de IA. El papel de la revisión humana es detectar las cosas que la IA acierta a equivocar con seguridad: citas inventadas, personajes confundidos, lenguaje de esquema de calificación que suena plausible pero no es válido, y afirmaciones contextuales que ninguna fuente respalda.',
  },

  // ── B. Verification principles ─────────────────────────────────────
  'about.cv.b.eyebrow': {
    en: 'B. Verification principles',
    ar: 'B. مبادئ التحقّق',
    es: 'B. Principios de verificación',
  },
  'about.cv.b.title': {
    en: 'The principles we follow',
    ar: 'المبادئ اللي نتّبعها',
    es: 'Los principios que seguimos',
  },
  'about.cv.principle.accuracy.title': {
    en: 'Accuracy over speed',
    ar: 'الدقة قبل السرعة',
    es: 'La precisión antes que la velocidad',
  },
  'about.cv.principle.accuracy.desc': {
    en: 'A correct, slightly later piece of content is better than a fast, wrong one. We hold material in review before publishing rather than ship it half-checked.',
    ar: 'محتوى صحيح ومتأخّر شوي أحسن من محتوى سريع وغلط. نحتفظ بالمادة قيد المراجعة قبل النشر بدل ما ننزّلها نص مفحوصة.',
    es: 'Un contenido correcto y algo más tardío es mejor que uno rápido y erróneo. Mantenemos el material en revisión antes de publicarlo en lugar de lanzarlo a medio comprobar.',
  },
  'about.cv.principle.original.title': {
    en: 'Original content over copied material',
    ar: 'محتوى أصلي بدل المادة المنسوخة',
    es: 'Contenido original frente a material copiado',
  },
  'about.cv.principle.original.desc': {
    en: 'Resources are written for The English Hub, not aggregated from other revision sites. Where we draw on public-domain texts or public specification information, the source is named.',
    ar: 'الموارد مكتوبة لـ The English Hub، مو مجمّعة من مواقع مراجعة ثانية. لمّا نعتمد على نصوص في الملك العام أو معلومات منهج عامة، نذكر المصدر.',
    es: 'Los recursos se redactan para The English Hub, no se recopilan de otros sitios de repaso. Cuando nos basamos en textos de dominio público o en información pública del temario, se cita la fuente.',
  },
  'about.cv.principle.human.title': {
    en: 'Human review for high-stakes content',
    ar: 'مراجعة بشرية للمحتوى الحسّاس',
    es: 'Revisión humana para los contenidos de alto riesgo',
  },
  'about.cv.principle.human.desc': {
    en: 'Mark-scheme guidance, set-text analysis and exam-style examples are reviewed by a human before they reach students. AI assists drafting; humans decide what ships.',
    ar: 'توجيه معيار التصحيح، تحليل النصوص المقرّرة، والأمثلة على نمط الامتحان يراجعها إنسان قبل ما توصل الطلاب. الـ AI يساعد في الصياغة؛ والبشر يقرّرون شنو ينشر.',
    es: 'La orientación del esquema de calificación, el análisis de textos prescritos y los ejemplos tipo examen los revisa una persona antes de que lleguen a los estudiantes. La IA ayuda en la redacción; las personas deciden qué se publica.',
  },
  'about.cv.principle.transparent.title': {
    en: 'Transparent AI limitations',
    ar: 'حدود الـ AI بشفافية',
    es: 'Limitaciones de la IA con transparencia',
  },
  'about.cv.principle.transparent.desc': {
    en: 'Where AI generates or assists feedback, we say so. Students and teachers should treat AI feedback as formative practice support, not as official grading.',
    ar: 'لمّا الـ AI يولّد أو يساعد في التغذية الراجعة، نقولها. لازم الطلاب والمعلّمون يتعاملون مع تغذية الـ AI الراجعة كدعم تدريبي تكويني، مو كتصحيح رسمي.',
    es: 'Cuando la IA genera o asiste comentarios, lo decimos. Los estudiantes y profesores deben tratar los comentarios de la IA como apoyo de práctica formativa, no como una calificación oficial.',
  },
  'about.cv.principle.copyright.title': {
    en: 'Clear copyright boundaries',
    ar: 'حدود واضحة لحقوق النشر',
    es: 'Límites claros de derechos de autor',
  },
  'about.cv.principle.copyright.desc': {
    en: 'Public-domain texts are used where legally available. Copyright-protected texts are handled within fair dealing for criticism, review and quotation. Official exam-board materials are not reproduced without permission.',
    ar: 'نستخدم نصوص الملك العام لمّا تكون متاحة قانونياً. النصوص المحمية بحقوق النشر نتعامل معها ضمن الاستخدام العادل للنقد والمراجعة والاقتباس. مواد بوردات الامتحان الرسمية ما تُنسخ بدون إذن.',
    es: 'Los textos de dominio público se usan cuando están disponibles legalmente. Los textos protegidos por derechos de autor se tratan dentro del uso leal para la crítica, la reseña y la cita. Los materiales oficiales de las juntas examinadoras no se reproducen sin permiso.',
  },
  'about.cv.principle.continuous.title': {
    en: 'Continuous correction',
    ar: 'تصحيح مستمر',
    es: 'Corrección continua',
  },
  'about.cv.principle.continuous.desc': {
    en: 'Verification is not a one-off pass. User-reported errors are logged, reviewed and corrected, and significant corrections are noted on the affected page.',
    ar: 'التحقّق مو مرة وحدة وخلاص. الأخطاء اللي يبلّغ عنها المستخدمون تُسجّل وتُراجَع وتُصحّح، والتصحيحات المهمة تُذكر على الصفحة المتأثّرة.',
    es: 'La verificación no es un proceso de una sola vez. Los errores notificados por los usuarios se registran, se revisan y se corrigen, y las correcciones importantes se indican en la página afectada.',
  },

  // ── C. Review categories ───────────────────────────────────────────
  'about.cv.c.eyebrow': {
    en: 'C. Review categories',
    ar: 'C. فئات المراجعة',
    es: 'C. Categorías de revisión',
  },
  'about.cv.c.title': {
    en: 'Status labels we use internally',
    ar: 'تسميات الحالة اللي نستخدمها داخلياً',
    es: 'Etiquetas de estado que usamos internamente',
  },
  'about.cv.c.body': {
    en: 'Every published page sits in one or more of these states. Surfacing the labels here keeps the framework honest: a reader can ask which category any specific page is in.',
    ar: 'كل صفحة منشورة تكون في حالة وحدة أو أكثر من هذي. إظهار التسميات هني يخلّي الإطار صادق: يقدر القارئ يسأل أي فئة فيها أي صفحة معيّنة.',
    es: 'Cada página publicada se encuentra en uno o más de estos estados. Mostrar aquí las etiquetas mantiene el marco honesto: un lector puede preguntar en qué categoría está cualquier página concreta.',
  },
  'about.cv.cat.draft.label': {
    en: 'Draft',
    ar: 'مسوّدة',
    es: 'Borrador',
  },
  'about.cv.cat.draft.desc': {
    en: 'Initial draft, not yet published to the public site.',
    ar: 'مسوّدة أوّلية، ما تُنشر للموقع العام بعد.',
    es: 'Borrador inicial, todavía no publicado en el sitio público.',
  },
  'about.cv.cat.ai_draft.label': {
    en: 'AI-assisted draft',
    ar: 'مسوّدة بمساعدة الـ AI',
    es: 'Borrador asistido por IA',
  },
  'about.cv.cat.ai_draft.desc': {
    en: 'Drafted with AI assistance and awaiting human review.',
    ar: 'مكتوبة بمساعدة الـ AI وتنتظر مراجعة بشرية.',
    es: 'Redactado con asistencia de IA y a la espera de revisión humana.',
  },
  'about.cv.cat.human.label': {
    en: 'Human reviewed',
    ar: 'مراجَعة بشرياً',
    es: 'Revisado por una persona',
  },
  'about.cv.cat.human.desc': {
    en: 'A human editor has read the content end-to-end and signed it off.',
    ar: 'محرّر بشري قرأ المحتوى من البداية للنهاية واعتمده.',
    es: 'Un editor humano ha leído el contenido de principio a fin y lo ha aprobado.',
  },
  'about.cv.cat.quote.label': {
    en: 'Quote checked',
    ar: 'الاقتباس مفحوص',
    es: 'Cita comprobada',
  },
  'about.cv.cat.quote.desc': {
    en: 'Quotations cross-referenced against a reliable source where one is available.',
    ar: 'الاقتباسات مقارنة مع مصدر موثوق لمّا يكون متوفّر.',
    es: 'Las citas se contrastan con una fuente fiable cuando hay una disponible.',
  },
  'about.cv.cat.board.label': {
    en: 'Exam-board aligned',
    ar: 'متوافق مع بورد الامتحان',
    es: 'Alineado con la junta examinadora',
  },
  'about.cv.cat.board.desc': {
    en: 'Mapped against public specification information and the relevant assessment objectives.',
    ar: 'مربوط بمعلومات المنهج العامة وأهداف التقييم ذات الصلة.',
    es: 'Mapeado con la información pública del temario y los objetivos de evaluación pertinentes.',
  },
  'about.cv.cat.updated.label': {
    en: 'Updated after user report',
    ar: 'محدّث بعد بلاغ مستخدم',
    es: 'Actualizado tras un aviso de usuario',
  },
  'about.cv.cat.updated.desc': {
    en: 'A reader flagged an issue; the content was reviewed and updated.',
    ar: 'قارئ بلّغ عن مشكلة؛ تمت مراجعة المحتوى وتحديثه.',
    es: 'Un lector señaló una incidencia; el contenido se revisó y se actualizó.',
  },
  'about.cv.cat.archived.label': {
    en: 'Archived or replaced',
    ar: 'مؤرشف أو مُستبدَل',
    es: 'Archivado o reemplazado',
  },
  'about.cv.cat.archived.desc': {
    en: 'No longer in active use. Kept on file for change history; superseded by a newer version.',
    ar: 'ما عاد مستخدم. محفوظ للسجلّ التاريخي؛ استبدلته نسخة أحدث.',
    es: 'Ya no está en uso activo. Se conserva en el archivo para el historial de cambios; sustituido por una versión más reciente.',
  },

  // ── D. Literature verification ─────────────────────────────────────
  'about.cv.d.eyebrow': {
    en: 'D. Literature verification',
    ar: 'D. التحقّق من الأدب',
    es: 'D. Verificación de literatura',
  },
  'about.cv.d.title': {
    en: 'How we check quotations and analysis',
    ar: 'كيف نتحقّق من الاقتباسات والتحليل',
    es: 'Cómo comprobamos las citas y el análisis',
  },
  'about.cv.d.quotes.title': {
    en: 'Quotations checked against reliable sources',
    ar: 'الاقتباسات مفحوصة مقابل مصادر موثوقة',
    es: 'Citas comprobadas con fuentes fiables',
  },
  'about.cv.d.quotes.desc': {
    en: 'Where a reliable text source exists (Project Gutenberg public-domain editions, Folger Shakespeare Library, the prescribed edition cited by the exam board), quotations are cross-referenced. If a quote cannot be sourced, it is removed.',
    ar: 'لمّا يكون فيه مصدر نص موثوق (طبعات Project Gutenberg في الملك العام، Folger Shakespeare Library، الطبعة المقرّرة اللي يذكرها بورد الامتحان)، الاقتباسات تتم مقارنتها. إذا ما قدرنا نوثّق اقتباس، نشيله.',
    es: 'Cuando existe una fuente de texto fiable (ediciones de dominio público de Project Gutenberg, Folger Shakespeare Library, la edición prescrita citada por la junta examinadora), las citas se contrastan. Si una cita no puede atribuirse a una fuente, se elimina.',
  },
  'about.cv.d.invented.title': {
    en: 'Invented quotes are removed',
    ar: 'الاقتباسات المخترعة تُشال',
    es: 'Las citas inventadas se eliminan',
  },
  'about.cv.d.invented.desc': {
    en: 'AI assistance can invent quotations that sound plausible. Any quote without an identifiable source is treated as suspect and either replaced with a verified line or removed.',
    ar: 'مساعدة الـ AI ممكن تخترع اقتباسات تبدو منطقية. أي اقتباس بدون مصدر معروف يُعتبر مشكوك فيه ويُستبدل بسطر موثّق أو يُشال.',
    es: 'La asistencia de IA puede inventar citas que suenan plausibles. Cualquier cita sin una fuente identificable se trata como sospechosa y se sustituye por un verso verificado o se elimina.',
  },
  'about.cv.d.unsupported.title': {
    en: 'Unsupported claims are corrected',
    ar: 'الادّعاءات غير المدعومة تُصحّح',
    es: 'Las afirmaciones no respaldadas se corrigen',
  },
  'about.cv.d.unsupported.desc': {
    en: "Claims about a writer's biography, the historical context, or the reception of a text are checked against published criticism. Unverifiable claims are removed or softened.",
    ar: 'الادّعاءات عن سيرة الكاتب، السياق التاريخي، أو استقبال النص تُفحص مقابل النقد المنشور. الادّعاءات اللي ما نقدر نتحقّق منها تُشال أو تُخفّف.',
    es: 'Las afirmaciones sobre la biografía de un autor, el contexto histórico o la recepción de un texto se comprueban con la crítica publicada. Las afirmaciones imposibles de verificar se eliminan o se matizan.',
  },
  'about.cv.d.alternative.title': {
    en: 'Alternative interpretations are allowed',
    ar: 'التفسيرات البديلة مسموحة',
    es: 'Se permiten interpretaciones alternativas',
  },
  'about.cv.d.alternative.desc': {
    en: 'Where multiple readings of a text are defensible, we say so. We do not pretend a single critical interpretation is the only valid one.',
    ar: 'لمّا تكون فيه قراءات متعدّدة للنص يمكن الدفاع عنها، نقولها. ما نتظاهر إن تفسير نقدي واحد هو الوحيد الصحيح.',
    es: 'Cuando varias lecturas de un texto son defendibles, lo decimos. No pretendemos que una única interpretación crítica sea la única válida.',
  },

  // ── E. Language and writing resources ──────────────────────────────
  'about.cv.e.eyebrow': {
    en: 'E. Language and writing resources',
    ar: 'E. موارد اللغة والكتابة',
    es: 'E. Recursos de lengua y escritura',
  },
  'about.cv.e.title': {
    en: 'How we check writing and language guidance',
    ar: 'كيف نتحقّق من توجيه الكتابة واللغة',
    es: 'Cómo comprobamos la orientación de escritura y lengua',
  },
  'about.cv.e.examples.strong': {
    en: 'Examples are checked for clarity and suitability.',
    ar: 'الأمثلة تُفحص للوضوح والملاءمة.',
    es: 'Los ejemplos se comprueban en cuanto a claridad e idoneidad.',
  },
  'about.cv.e.examples.rest': {
    en: 'Sample sentences, annotated extracts and worked answers are reviewed for age-appropriateness and for whether they actually demonstrate the technique they claim to.',
    ar: 'الجمل النموذجية، المقتطفات المعلّقة، والإجابات المحلولة تُراجَع لمناسبتها للعمر وهل فعلاً توضّح التقنية اللي تدّعيها.',
    es: 'Las oraciones de ejemplo, los fragmentos anotados y las respuestas resueltas se revisan en cuanto a su adecuación a la edad y a si realmente demuestran la técnica que afirman.',
  },
  'about.cv.e.terminology.strong': {
    en: 'Terminology is reviewed against published specifications.',
    ar: 'المصطلحات تُراجَع مقابل المناهج المنشورة.',
    es: 'La terminología se revisa con los temarios publicados.',
  },
  'about.cv.e.terminology.rest': {
    en: 'Where exam boards use specific labels for techniques, assessment objectives or paper components, we use the same labels.',
    ar: 'لمّا بوردات الامتحان تستخدم تسميات محدّدة للتقنيات أو أهداف التقييم أو أجزاء الورقة، نستخدم نفس التسميات.',
    es: 'Cuando las juntas examinadoras usan etiquetas específicas para técnicas, objetivos de evaluación o partes del examen, usamos las mismas etiquetas.',
  },
  'about.cv.e.models.strong': {
    en: 'Model answers are reviewed for quality.',
    ar: 'الإجابات النموذجية تُراجَع للجودة.',
    es: 'Las respuestas modelo se revisan en cuanto a calidad.',
  },
  'about.cv.e.models.rest': {
    en: 'A "Grade 7" exemplar must actually reach Grade 7 against the relevant mark scheme. Drafts that do not are rewritten or relabelled.',
    ar: 'نموذج "Grade 7" لازم فعلاً يوصل Grade 7 مقابل معيار التصحيح ذي الصلة. المسوّدات اللي ما توصل تُعاد كتابتها أو تُعاد تسميتها.',
    es: 'Un ejemplo de "Grade 7" debe alcanzar realmente Grade 7 según el esquema de calificación pertinente. Los borradores que no lo hacen se reescriben o se reetiquetan.',
  },
  'about.cv.e.formative.strong': {
    en: 'Mark guidance remains formative, not official.',
    ar: 'توجيه الدرجات يبقى تكوينياً، مو رسمياً.',
    es: 'La orientación sobre notas sigue siendo formativa, no oficial.',
  },
  'about.cv.e.formative.rest': {
    en: 'We can tell a student what a strong response looks like and where their writing falls short of that. We cannot - and do not - award official marks.',
    ar: 'نقدر نقول للطالب كيف تكون الإجابة القوية ووين كتابته تقصّر عنها. ما نقدر - وما نسوّي - منح درجات رسمية.',
    es: 'Podemos decirle a un estudiante cómo es una respuesta sólida y dónde su escritura se queda corta. No podemos -- ni lo hacemos -- otorgar notas oficiales.',
  },

  // ── F. Exam-board alignment ────────────────────────────────────────
  'about.cv.f.eyebrow': {
    en: 'F. Exam-board alignment',
    ar: 'F. التوافق مع بورد الامتحان',
    es: 'F. Alineación con la junta examinadora',
  },
  'about.cv.f.title': {
    en: 'Aligned, not endorsed',
    ar: 'متوافق، مو معتمد',
    es: 'Alineado, no avalado',
  },
  'about.cv.f.li1': {
    en: 'Resources may be mapped to assessment objectives and public specification information so students see the same vocabulary and structure they will meet in the exam room.',
    ar: 'الموارد ممكن تُربط بأهداف التقييم ومعلومات المنهج العامة عشان الطلاب يشوفون نفس المصطلحات والتركيب اللي بيواجهونه في قاعة الامتحان.',
    es: 'Los recursos pueden mapearse a los objetivos de evaluación y a la información pública del temario para que los estudiantes vean el mismo vocabulario y la misma estructura que encontrarán en la sala de examen.',
  },
  'about.cv.f.li2.strong': {
    en: 'The English Hub is independent.',
    ar: 'The English Hub مستقل.',
    es: 'The English Hub es independiente.',
  },
  'about.cv.f.li2.rest': {
    en: 'No exam board has endorsed, approved or partnered with the platform, and we do not represent ourselves as having any such relationship.',
    ar: 'ما فيه بورد امتحان اعتمد أو وافق أو دخل شراكة مع المنصّة، وما نقدّم نفسنا إن عندنا أي علاقة من هالنوع.',
    es: 'Ninguna junta examinadora ha avalado, aprobado ni se ha asociado con la plataforma, y no nos presentamos como si tuviéramos ninguna relación de ese tipo.',
  },
  'about.cv.f.li3': {
    en: 'Official exam-board materials (past papers, mark schemes, prescribed editions) are not reproduced on the platform without permission. Where we reference them, we point readers to the official source.',
    ar: 'مواد بوردات الامتحان الرسمية (الأوراق السابقة، معايير التصحيح، الطبعات المقرّرة) ما تُنسخ على المنصّة بدون إذن. لمّا نشير لها، نوجّه القرّاء للمصدر الرسمي.',
    es: 'Los materiales oficiales de las juntas examinadoras (exámenes anteriores, esquemas de calificación, ediciones prescritas) no se reproducen en la plataforma sin permiso. Cuando los referenciamos, dirigimos a los lectores a la fuente oficial.',
  },
  'about.cv.f.li4': {
    en: "Students preparing for an exam should always check the final requirements with their teacher and the board's official specification.",
    ar: 'الطلاب اللي يجهّزون لامتحان لازم دايماً يتأكّدون من المتطلّبات النهائية مع معلّمهم ومنهج البورد الرسمي.',
    es: 'Los estudiantes que se preparan para un examen siempre deben comprobar los requisitos definitivos con su profesor y con el temario oficial de la junta.',
  },

  // ── G. AI-generated feedback ───────────────────────────────────────
  'about.cv.g.eyebrow': {
    en: 'G. AI-generated feedback',
    ar: 'G. تغذية راجعة من الـ AI',
    es: 'G. Comentarios generados por IA',
  },
  'about.cv.g.title': {
    en: 'What AI feedback is and is not',
    ar: 'شنو تغذية الـ AI الراجعة وشنو مو هي',
    es: 'Qué son y qué no son los comentarios de IA',
  },
  'about.cv.g.can.title': {
    en: 'AI feedback can',
    ar: 'تغذية الـ AI الراجعة تقدر',
    es: 'Los comentarios de IA pueden',
  },
  'about.cv.g.can.1': {
    en: 'Support formative practice with detailed written responses.',
    ar: 'تدعم التدريب التكويني بردود مكتوبة مفصّلة.',
    es: 'Apoyar la práctica formativa con respuestas escritas detalladas.',
  },
  'about.cv.g.can.2': {
    en: 'Highlight where a piece of writing is strong and where it is weak.',
    ar: 'تبيّن وين الكتابة قوية ووين ضعيفة.',
    es: 'Resaltar dónde un texto es sólido y dónde es débil.',
  },
  'about.cv.g.can.3': {
    en: 'Suggest specific, actionable next steps a student can try.',
    ar: 'تقترح خطوات تالية محدّدة وقابلة للتطبيق يقدر الطالب يجرّبها.',
    es: 'Sugerir próximos pasos concretos y accionables que el estudiante puede probar.',
  },
  'about.cv.g.can.4': {
    en: 'Save teachers time on repetitive feedback patterns.',
    ar: 'توفّر وقت المعلّمين على أنماط التغذية الراجعة المتكرّرة.',
    es: 'Ahorrar tiempo a los profesores en patrones de comentarios repetitivos.',
  },
  'about.cv.g.cannot.title': {
    en: 'AI feedback cannot',
    ar: 'تغذية الـ AI الراجعة ما تقدر',
    es: 'Los comentarios de IA no pueden',
  },
  'about.cv.g.cannot.1': {
    en: 'Replace teacher professional judgement.',
    ar: 'تحلّ محل حكم المعلّم المهني.',
    es: 'Sustituir el criterio profesional del profesor.',
  },
  'about.cv.g.cannot.2': {
    en: 'Award official exam marks - that remains with the exam board.',
    ar: 'تمنح درجات امتحان رسمية - هذي تبقى عند بورد الامتحان.',
    es: 'Otorgar notas oficiales de examen: eso corresponde a la junta examinadora.',
  },
  'about.cv.g.cannot.3': {
    en: 'Guarantee accuracy on every response - errors are possible.',
    ar: 'تضمن الدقة في كل رد - الأخطاء واردة.',
    es: 'Garantizar la exactitud en cada respuesta: pueden producirse errores.',
  },
  'about.cv.g.cannot.4': {
    en: 'Substitute for the official specification or mark scheme.',
    ar: 'تكون بديل عن المنهج الرسمي أو معيار التصحيح.',
    es: 'Sustituir al temario oficial o al esquema de calificación.',
  },
  'about.cv.g.note': {
    en: 'Students and teachers can challenge or report AI feedback at any point. We treat disputed feedback as a content issue and route it through the correction workflow below.',
    ar: 'الطلاب والمعلّمون يقدرون يعترضون أو يبلّغون عن تغذية الـ AI الراجعة في أي وقت. نتعامل مع التغذية الراجعة المتنازع عليها كمشكلة محتوى ونمرّرها عبر سير عمل التصحيح تحت.',
    es: 'Los estudiantes y profesores pueden cuestionar o notificar los comentarios de IA en cualquier momento. Tratamos los comentarios en disputa como una incidencia de contenido y los encauzamos por el flujo de corrección que aparece a continuación.',
  },

  // ── H. Correction workflow ─────────────────────────────────────────
  'about.cv.h.eyebrow': {
    en: 'H. Correction workflow',
    ar: 'H. سير عمل التصحيح',
    es: 'H. Flujo de corrección',
  },
  'about.cv.h.title': {
    en: 'How we handle a reported issue',
    ar: 'كيف نتعامل مع مشكلة مُبلَّغ عنها',
    es: 'Cómo gestionamos una incidencia notificada',
  },
  'about.cv.step.1.title': {
    en: 'User reports issue',
    ar: 'المستخدم يبلّغ عن مشكلة',
    es: 'El usuario notifica una incidencia',
  },
  'about.cv.step.1.desc': {
    en: 'A reader spots something that looks wrong and uses the report-a-content-issue link.',
    ar: 'القارئ يلاحظ شي يبيّن غلط ويستخدم رابط الإبلاغ عن مشكلة في المحتوى.',
    es: 'Un lector detecta algo que parece erróneo y usa el enlace de notificar una incidencia de contenido.',
  },
  'about.cv.step.2.title': {
    en: 'Issue logged',
    ar: 'تسجيل المشكلة',
    es: 'Incidencia registrada',
  },
  'about.cv.step.2.desc': {
    en: "The report is recorded with the page URL, the specific claim or quote, and the reporter's notes.",
    ar: 'البلاغ يُسجّل مع رابط الصفحة، الادّعاء أو الاقتباس المحدّد، وملاحظات المُبلِّغ.',
    es: 'El aviso se registra con la URL de la página, la afirmación o cita concreta y las notas de quien lo notifica.',
  },
  'about.cv.step.3.title': {
    en: 'Content reviewed',
    ar: 'مراجعة المحتوى',
    es: 'Contenido revisado',
  },
  'about.cv.step.3.desc': {
    en: 'An editor reviews the original source and the claim, plus surrounding pages that reference the same fact.',
    ar: 'محرّر يراجع المصدر الأصلي والادّعاء، بالإضافة للصفحات المحيطة اللي تشير لنفس المعلومة.',
    es: 'Un editor revisa la fuente original y la afirmación, además de las páginas cercanas que hacen referencia al mismo dato.',
  },
  'about.cv.step.4.title': {
    en: 'Correction made if needed',
    ar: 'يتم التصحيح إذا لزم',
    es: 'Corrección realizada si es necesario',
  },
  'about.cv.step.4.desc': {
    en: 'If the report is valid, the page is updated. If it is a matter of interpretation, we note the alternative reading.',
    ar: 'إذا كان البلاغ صحيح، تُحدّث الصفحة. إذا كانت مسألة تفسير، نذكر القراءة البديلة.',
    es: 'Si el aviso es válido, la página se actualiza. Si es una cuestión de interpretación, indicamos la lectura alternativa.',
  },
  'about.cv.step.5.title': {
    en: 'Updated version published',
    ar: 'نشر النسخة المحدّثة',
    es: 'Versión actualizada publicada',
  },
  'about.cv.step.5.desc': {
    en: 'The corrected version replaces the previous content. The page\'s "Last updated" date is bumped.',
    ar: 'النسخة المصحّحة تستبدل المحتوى السابق. ويُحدّث تاريخ "Last updated" حق الصفحة.',
    es: 'La versión corregida sustituye al contenido anterior. Se actualiza la fecha de "Last updated" de la página.',
  },
  'about.cv.step.6.title': {
    en: 'Significant corrections noted',
    ar: 'تُذكر التصحيحات المهمة',
    es: 'Correcciones importantes indicadas',
  },
  'about.cv.step.6.desc': {
    en: 'For corrections that change the meaning of the page, a short note is added so returning visitors see what changed.',
    ar: 'للتصحيحات اللي تغيّر معنى الصفحة، تُضاف ملاحظة قصيرة عشان الزوّار العائدين يشوفون شنو تغيّر.',
    es: 'Para las correcciones que cambian el significado de la página, se añade una breve nota para que los visitantes que vuelven vean qué cambió.',
  },

  // ── I. CTA ─────────────────────────────────────────────────────────
  'about.cv.cta.title': {
    en: 'Spotted something that does not look right?',
    ar: 'لاحظت شي يبيّن غلط؟',
    es: '¿Has detectado algo que no parece correcto?',
  },
  'about.cv.cta.body': {
    en: 'Report it and we will review the page. Reports go to our editorial team, are logged, and acknowledged within one working day.',
    ar: 'بلّغ عنه وبنراجع الصفحة. البلاغات تروح لفريق التحرير حقّنا، تُسجّل، ويتم الردّ عليها خلال يوم عمل واحد.',
    es: 'Notifícalo y revisaremos la página. Los avisos llegan a nuestro equipo editorial, se registran y se acusan en un día laborable.',
  },
  'about.cv.cta.report': {
    en: 'Report a content issue',
    ar: 'بلّغ عن مشكلة في المحتوى',
    es: 'Notificar una incidencia de contenido',
  },
  'about.cv.cta.email': {
    en: 'Email',
    ar: 'راسل',
    es: 'Escribe a',
  },
  'about.cv.cta.summary_link': {
    en: 'Read our shorter Verified Content summary →',
    ar: 'اقرأ ملخّصنا الأقصر للمحتوى الموثّق →',
    es: 'Lee nuestro resumen más breve de Contenido Verificado →',
  },

  /* ════════ SCHOOL PILOT PACK (src/app/for-schools/pilot/page.tsx) ════════ */

  // ── Hero ───────────────────────────────────────────────────────────
  'mkt.schools.pilot.hero.badge': {
    en: 'School Pilot Pack',
    ar: 'حزمة تجربة المدرسة',
    es: 'Pack de Pilotaje Escolar',
  },
  'mkt.schools.pilot.hero.title': {
    en: 'A 90-day English improvement pilot for schools.',
    ar: 'تجربة 90 يوم لتحسين الإنجليزي للمدارس.',
    es: 'Un pilotaje de 90 días para mejorar el inglés en los colegios.',
  },
  'mkt.schools.pilot.hero.body': {
    en: 'A structured pilot to help schools baseline English needs, support targeted practice and review progress with clear usage and reporting data. Designed for British curriculum schools in the UK and overseas.',
    ar: 'تجربة منظّمة تساعد المدارس تحدّد احتياجات الإنجليزي من البداية، تدعم تدريب مستهدف، وتراجع التقدّم ببيانات استخدام وتقارير واضحة. مصمّمة لمدارس المنهج البريطاني في بريطانيا وبرّه.',
    es: 'Un pilotaje estructurado para ayudar a los colegios a establecer una línea base de las necesidades de inglés, apoyar la práctica dirigida y revisar el progreso con datos claros de uso e informes. Diseñado para colegios de currículo británico en el Reino Unido y en el extranjero.',
  },
  'mkt.schools.pilot.hero.cta_request': {
    en: 'Request a school pilot',
    ar: 'اطلب تجربة مدرسة',
    es: 'Solicita un pilotaje escolar',
  },
  'mkt.schools.pilot.hero.cta_back': {
    en: 'Back to For Schools',
    ar: 'رجوع لصفحة المدارس',
    es: 'Volver a Para Colegios',
  },
  'mkt.schools.pilot.hero.pdf_note': {
    en: "A designed downloadable PDF is on the way. The page is print-friendly: use your browser's print menu to save a copy for your team.",
    ar: 'نسخة PDF مصمّمة للتحميل في الطريق. الصفحة مهيّأة للطباعة: استخدم قائمة الطباعة في متصفّحك عشان تحفظ نسخة لفريقك.',
    es: 'Un PDF descargable con diseño está en camino. La página está preparada para impresión: usa el menú de impresión de tu navegador para guardar una copia para tu equipo.',
  },

  // ── A. Who it is for ───────────────────────────────────────────────
  'mkt.schools.pilot.who.eyebrow': {
    en: 'A. Who it is for',
    ar: 'A. لمن هي',
    es: 'A. Para quién es',
  },
  'mkt.schools.pilot.who.title': {
    en: 'Built for English departments - UK and international British curriculum',
    ar: 'مصمّمة لأقسام اللغة الإنجليزية - المنهج البريطاني في بريطانيا ودولياً',
    es: 'Creado para departamentos de inglés -- currículo británico del Reino Unido e internacional',
  },
  'mkt.schools.pilot.who.1': {
    en: 'Heads of English and English teaching teams',
    ar: 'رؤساء أقسام الإنجليزي وفِرَق تدريس الإنجليزي',
    es: 'Jefes de inglés y equipos docentes de inglés',
  },
  'mkt.schools.pilot.who.2': {
    en: 'Senior Leadership Teams (SLT) reviewing English provision',
    ar: 'فِرَق الإدارة العليا (SLT) اللي تراجع تقديم مادة الإنجليزي',
    es: 'Equipos directivos (SLT) que revisan la oferta de inglés',
  },
  'mkt.schools.pilot.who.3': {
    en: 'British curriculum schools - UK and international',
    ar: 'مدارس المنهج البريطاني - في بريطانيا ودولياً',
    es: 'Colegios de currículo británico -- en el Reino Unido e internacionales',
  },
  'mkt.schools.pilot.who.4': {
    en: 'GCSE and IGCSE cohorts preparing for terminal exams',
    ar: 'دفعات GCSE و IGCSE اللي تجهّز للامتحانات النهائية',
    es: 'Promociones de GCSE e IGCSE que se preparan para los exámenes finales',
  },
  'mkt.schools.pilot.who.5': {
    en: 'KS3 intervention groups closing skills gaps',
    ar: 'مجموعات تدخّل KS3 اللي تسدّ فجوات المهارات',
    es: 'Grupos de intervención de KS3 que cierran carencias de habilidades',
  },
  'mkt.schools.pilot.who.6': {
    en: 'EAL learners where the school needs structured English support',
    ar: 'متعلّمو EAL لمّا تحتاج المدرسة دعم إنجليزي منظّم',
    es: 'Estudiantes de EAL cuando el colegio necesita un apoyo de inglés estructurado',
  },
  'mkt.schools.pilot.who.7': {
    en: 'Gulf and international British curriculum schools using IGCSE pathways',
    ar: 'مدارس الخليج والمدارس الدولية بالمنهج البريطاني اللي تستخدم مسارات IGCSE',
    es: 'Colegios del Golfo e internacionales de currículo británico que usan itinerarios IGCSE',
  },

  // ── B. Pilot structure ─────────────────────────────────────────────
  'mkt.schools.pilot.structure.eyebrow': {
    en: 'B. Pilot structure',
    ar: 'B. هيكل التجربة',
    es: 'B. Estructura del pilotaje',
  },
  'mkt.schools.pilot.structure.title': {
    en: 'Three phases over 90 days',
    ar: 'ثلاث مراحل على مدى 90 يوم',
    es: 'Tres fases a lo largo de 90 días',
  },
  'mkt.schools.pilot.structure.body': {
    en: 'A structured cycle: get the cohort live, run targeted practice, and finish with a written review that a head of English can put in front of SLT.',
    ar: 'دورة منظّمة: خلّي الدفعة شغّالة، شغّل تدريب مستهدف، واختم بمراجعة مكتوبة يقدر رئيس قسم الإنجليزي يحطّها قدّام الـ SLT.',
    es: 'Un ciclo estructurado: pon en marcha la promoción, ejecuta práctica dirigida y termina con una revisión escrita que un jefe de inglés pueda presentar al SLT.',
  },
  'mkt.schools.pilot.phase_word': {
    en: 'Phase',
    ar: 'مرحلة',
    es: 'Fase',
  },
  'mkt.schools.pilot.phase1.title': {
    en: 'Setup and baseline',
    ar: 'الإعداد وخط الأساس',
    es: 'Configuración y línea base',
  },
  'mkt.schools.pilot.phase1.duration': {
    en: 'Weeks 1-3',
    ar: 'الأسابيع 1-3',
    es: 'Semanas 1-3',
  },
  'mkt.schools.pilot.phase1.point.1': {
    en: 'Confirm the year group(s) and cohort the pilot will cover',
    ar: 'حدّد السنة (أو السنوات) الدراسية والدفعة اللي بتغطّيها التجربة',
    es: 'Confirma el curso o cursos y la promoción que cubrirá el pilotaje',
  },
  'mkt.schools.pilot.phase1.point.2': {
    en: 'Onboard nominated teachers and create student accounts in bulk',
    ar: 'جهّز المعلّمين المرشّحين وأنشئ حسابات الطلاب بالجملة',
    es: 'Incorpora a los profesores designados y crea las cuentas de estudiantes de forma masiva',
  },
  'mkt.schools.pilot.phase1.point.3': {
    en: 'Select the exam board or pathway content should align to',
    ar: 'اختر بورد الامتحان أو المسار اللي لازم يتوافق معه المحتوى',
    es: 'Selecciona la junta examinadora o el itinerario con el que debe alinearse el contenido',
  },
  'mkt.schools.pilot.phase1.point.4': {
    en: 'Run baseline reading, writing and practice tasks across the cohort',
    ar: 'شغّل مهام قراءة وكتابة وتدريب أساسية عبر الدفعة',
    es: 'Ejecuta tareas de lectura, escritura y práctica de línea base en toda la promoción',
  },
  'mkt.schools.pilot.phase1.point.5': {
    en: 'Identify priority skill gaps - language analysis, structure, AO coverage, vocabulary, reading inference',
    ar: 'حدّد فجوات المهارات ذات الأولوية - تحليل اللغة، التركيب، تغطية الـ AO، المفردات، الاستنتاج في القراءة',
    es: 'Identifica las carencias de habilidades prioritarias -- análisis del lenguaje, estructura, cobertura de AO, vocabulario, inferencia lectora',
  },
  'mkt.schools.pilot.phase2.title': {
    en: 'Targeted practice',
    ar: 'تدريب مستهدف',
    es: 'Práctica dirigida',
  },
  'mkt.schools.pilot.phase2.duration': {
    en: 'Weeks 4-11',
    ar: 'الأسابيع 4-11',
    es: 'Semanas 4-11',
  },
  'mkt.schools.pilot.phase2.point.1': {
    en: 'Assign practice tasks aligned to the gaps identified in Phase 1',
    ar: 'كلّف بمهام تدريب متوافقة مع الفجوات المحدّدة في المرحلة 1',
    es: 'Asigna tareas de práctica alineadas con las carencias identificadas en la Fase 1',
  },
  'mkt.schools.pilot.phase2.point.2': {
    en: 'Use AI-assisted feedback to give students faster formative responses',
    ar: 'استخدم التغذية الراجعة بمساعدة الـ AI عشان تعطي الطلاب ردود تكوينية أسرع',
    es: 'Usa los comentarios asistidos por IA para dar a los estudiantes respuestas formativas más rápidas',
  },
  'mkt.schools.pilot.phase2.point.3': {
    en: 'Support mock exam preparation with exam-style practice and walkthroughs',
    ar: 'ادعم التحضير للامتحانات التجريبية بتدريب على نمط الامتحان وشروحات خطوة بخطوة',
    es: 'Apoya la preparación de los simulacros de examen con práctica tipo examen y explicaciones paso a paso',
  },
  'mkt.schools.pilot.phase2.point.4': {
    en: 'Track student engagement and submission patterns',
    ar: 'تابع تفاعل الطلاب وأنماط التسليم',
    es: 'Sigue la implicación de los estudiantes y los patrones de entrega',
  },
  'mkt.schools.pilot.phase2.point.5': {
    en: 'Review class-level weaknesses with teachers in fortnightly check-ins',
    ar: 'راجع نقاط ضعف الصف مع المعلّمين في لقاءات كل أسبوعين',
    es: 'Revisa las debilidades a nivel de clase con los profesores en encuentros quincenales',
  },
  'mkt.schools.pilot.phase3.title': {
    en: 'Review and impact report',
    ar: 'المراجعة وتقرير الأثر',
    es: 'Revisión e informe de impacto',
  },
  'mkt.schools.pilot.phase3.duration': {
    en: 'Weeks 12-13',
    ar: 'الأسابيع 12-13',
    es: 'Semanas 12-13',
  },
  'mkt.schools.pilot.phase3.point.1': {
    en: 'Usage summary across teachers and student cohort',
    ar: 'ملخّص استخدام عبر المعلّمين ودفعة الطلاب',
    es: 'Resumen de uso entre los profesores y la promoción de estudiantes',
  },
  'mkt.schools.pilot.phase3.point.2': {
    en: 'Skill-gap trends from baseline to end of pilot',
    ar: 'اتجاهات فجوات المهارات من خط الأساس لين نهاية التجربة',
    es: 'Tendencias de las carencias de habilidades desde la línea base hasta el final del pilotaje',
  },
  'mkt.schools.pilot.phase3.point.3': {
    en: 'Student progress indicators against the gaps identified',
    ar: 'مؤشّرات تقدّم الطلاب مقابل الفجوات المحدّدة',
    es: 'Indicadores del progreso de los estudiantes frente a las carencias identificadas',
  },
  'mkt.schools.pilot.phase3.point.4': {
    en: 'Teacher feedback on workload, content quality and student response',
    ar: 'ملاحظات المعلّمين عن الضغط، جودة المحتوى، وتجاوب الطلاب',
    es: 'Comentarios de los profesores sobre la carga de trabajo, la calidad del contenido y la respuesta de los estudiantes',
  },
  'mkt.schools.pilot.phase3.point.5': {
    en: 'Recommendations for the next term and beyond',
    ar: 'توصيات للفصل الجاي وما بعده',
    es: 'Recomendaciones para el siguiente trimestre y más allá',
  },
  'mkt.schools.pilot.phase3.point.6': {
    en: 'Annual school licence proposal if the pilot warrants it',
    ar: 'عرض رخصة مدرسة سنوية إذا التجربة تستاهل',
    es: 'Propuesta de licencia escolar anual si el pilotaje lo justifica',
  },

  // ── C. What schools receive ────────────────────────────────────────
  'mkt.schools.pilot.receive.eyebrow': {
    en: 'C. What schools receive',
    ar: 'C. شنو تحصل المدارس',
    es: 'C. Qué reciben los colegios',
  },
  'mkt.schools.pilot.receive.title': {
    en: 'What is included with every pilot',
    ar: 'شنو يشمل كل تجربة',
    es: 'Qué se incluye con cada pilotaje',
  },
  'mkt.schools.pilot.receive.1': {
    en: 'Teacher access for every nominated member of the English department',
    ar: 'وصول معلّم لكل عضو مرشّح في قسم اللغة الإنجليزية',
    es: 'Acceso de profesor para cada miembro designado del departamento de inglés',
  },
  'mkt.schools.pilot.receive.2': {
    en: 'Student access for every learner in the agreed cohort',
    ar: 'وصول طالب لكل متعلّم في الدفعة المتّفق عليها',
    es: 'Acceso de estudiante para cada alumno de la promoción acordada',
  },
  'mkt.schools.pilot.receive.3': {
    en: 'Onboarding support - guided setup walkthrough and an admin checklist',
    ar: 'دعم إعداد - جولة إعداد موجّهة وقائمة مهام للإدارة',
    es: 'Apoyo en la incorporación -- una guía de configuración paso a paso y una lista de comprobación para el administrador',
  },
  'mkt.schools.pilot.receive.4': {
    en: 'Reporting dashboard for the cohort and per-class breakdowns',
    ar: 'لوحة تقارير للدفعة وتفصيل لكل صف',
    es: 'Panel de informes para la promoción y desgloses por clase',
  },
  'mkt.schools.pilot.receive.5': {
    en: 'A written pilot review report at the end of the 90 days',
    ar: 'تقرير مراجعة مكتوب للتجربة في نهاية الـ 90 يوم',
    es: 'Un informe escrito de revisión del pilotaje al final de los 90 días',
  },
  'mkt.schools.pilot.receive.6': {
    en: 'A recommended intervention plan for the next academic block',
    ar: 'خطة تدخّل موصى بها للفترة الأكاديمية الجاية',
    es: 'Un plan de intervención recomendado para el siguiente bloque académico',
  },
  'mkt.schools.pilot.receive.7': {
    en: 'Optional staff walkthrough with the schools team',
    ar: 'جولة اختيارية للطاقم مع فريق المدارس',
    es: 'Recorrido opcional para el personal con el equipo de colegios',
  },

  // ── D. Success measures ────────────────────────────────────────────
  'mkt.schools.pilot.measure.eyebrow': {
    en: 'D. Success measures',
    ar: 'D. مقاييس النجاح',
    es: 'D. Medidas de éxito',
  },
  'mkt.schools.pilot.measure.title': {
    en: 'What we measure during the pilot',
    ar: 'شنو نقيس أثناء التجربة',
    es: 'Qué medimos durante el pilotaje',
  },
  'mkt.schools.pilot.measure.body': {
    en: 'We measure usage, engagement and identifiable skill gaps - not grade improvement. A 12-week pilot is too short to claim a causal grade lift, and we will not present it as one.',
    ar: 'نقيس الاستخدام والتفاعل وفجوات المهارات اللي نقدر نحدّدها - مو تحسّن الدرجات. تجربة 12 أسبوع أقصر من إنها تدّعي رفع درجات سببي، وما بنقدّمها على هذا الأساس.',
    es: 'Medimos el uso, la implicación y las carencias de habilidades identificables, no la mejora de notas. Un pilotaje de 12 semanas es demasiado corto para afirmar una subida de notas causal, y no lo presentaremos como tal.',
  },
  'mkt.schools.pilot.metric.activation.label': {
    en: 'Student activation',
    ar: 'تفعيل الطلاب',
    es: 'Activación de estudiantes',
  },
  'mkt.schools.pilot.metric.activation.desc': {
    en: 'Percentage of the cohort that signs in and starts using the platform.',
    ar: 'نسبة الدفعة اللي تسجّل دخول وتبدأ تستخدم المنصّة.',
    es: 'Porcentaje de la promoción que inicia sesión y empieza a usar la plataforma.',
  },
  'mkt.schools.pilot.metric.weekly.label': {
    en: 'Weekly usage',
    ar: 'الاستخدام الأسبوعي',
    es: 'Uso semanal',
  },
  'mkt.schools.pilot.metric.weekly.desc': {
    en: 'Active sessions per student per week, by class and overall.',
    ar: 'الجلسات النشطة لكل طالب بالأسبوع، حسب الصف وبشكل عام.',
    es: 'Sesiones activas por estudiante a la semana, por clase y en conjunto.',
  },
  'mkt.schools.pilot.metric.tasks.label': {
    en: 'Tasks completed',
    ar: 'المهام المنجَزة',
    es: 'Tareas completadas',
  },
  'mkt.schools.pilot.metric.tasks.desc': {
    en: 'Number of practice tasks, reading exercises and writing submissions.',
    ar: 'عدد مهام التدريب وتمارين القراءة وتسليمات الكتابة.',
    es: 'Número de tareas de práctica, ejercicios de lectura y entregas de escritura.',
  },
  'mkt.schools.pilot.metric.writing.label': {
    en: 'Writing submissions',
    ar: 'تسليمات الكتابة',
    es: 'Entregas de escritura',
  },
  'mkt.schools.pilot.metric.writing.desc': {
    en: 'Volume and length of student writing submitted for feedback.',
    ar: 'حجم وطول كتابة الطلاب المسلّمة للتغذية الراجعة.',
    es: 'Volumen y extensión de la escritura de los estudiantes entregada para recibir comentarios.',
  },
  'mkt.schools.pilot.metric.gaps.label': {
    en: 'Skill gaps identified',
    ar: 'فجوات المهارات المحدّدة',
    es: 'Carencias de habilidades identificadas',
  },
  'mkt.schools.pilot.metric.gaps.desc': {
    en: 'Specific weaknesses surfaced by the analytics - by class and student.',
    ar: 'نقاط ضعف محدّدة تبيّنها التحليلات - حسب الصف والطالب.',
    es: 'Debilidades concretas reveladas por las analíticas, por clase y por estudiante.',
  },
  'mkt.schools.pilot.metric.teacher.label': {
    en: 'Teacher feedback',
    ar: 'ملاحظات المعلّمين',
    es: 'Comentarios de los profesores',
  },
  'mkt.schools.pilot.metric.teacher.desc': {
    en: 'Qualitative feedback collected from each pilot teacher.',
    ar: 'ملاحظات نوعية تُجمع من كل معلّم في التجربة.',
    es: 'Comentarios cualitativos recogidos de cada profesor del pilotaje.',
  },
  'mkt.schools.pilot.metric.reports.label': {
    en: 'Reports generated',
    ar: 'التقارير المُنشأة',
    es: 'Informes generados',
  },
  'mkt.schools.pilot.metric.reports.desc': {
    en: 'Class, student and parent reports produced through the platform.',
    ar: 'تقارير الصف والطالب والأهل المُنتجة عبر المنصّة.',
    es: 'Informes de clase, estudiante y padres producidos a través de la plataforma.',
  },
  'mkt.schools.pilot.metric.groups.label': {
    en: 'Intervention groups created',
    ar: 'مجموعات التدخّل المُنشأة',
    es: 'Grupos de intervención creados',
  },
  'mkt.schools.pilot.metric.groups.desc': {
    en: 'Targeted groups set up off the back of skill-gap data.',
    ar: 'مجموعات مستهدفة تُنشأ بناءً على بيانات فجوات المهارات.',
    es: 'Grupos dirigidos creados a partir de los datos de carencias de habilidades.',
  },
  'mkt.schools.pilot.measure.no_promise.title': {
    en: 'We do not promise grade improvement',
    ar: 'إحنا ما نوعد بتحسّن الدرجات',
    es: 'No prometemos mejora de notas',
  },
  'mkt.schools.pilot.measure.no_promise.body': {
    en: 'Grade outcomes depend on too many factors outside the platform - cohort, teaching time, teacher experience, prior attainment, exam day performance. We measure engagement, gap-identification and teacher-reported impact, and let the school decide whether that adds up to grade change.',
    ar: 'نتائج الدرجات تعتمد على عوامل وايد برّه المنصّة - الدفعة، وقت التدريس، خبرة المعلّم، التحصيل السابق، الأداء يوم الامتحان. نقيس التفاعل، تحديد الفجوات، والأثر اللي يبلّغ عنه المعلّم، ونخلّي المدرسة تقرّر إذا هذا يوصل لتغيّر في الدرجات.',
    es: 'Los resultados de notas dependen de demasiados factores ajenos a la plataforma: la promoción, el tiempo de enseñanza, la experiencia del profesor, el rendimiento previo, el desempeño el día del examen. Medimos la implicación, la identificación de carencias y el impacto reportado por los profesores, y dejamos que el colegio decida si eso se traduce en un cambio de notas.',
  },

  // ── E. Pricing ─────────────────────────────────────────────────────
  'mkt.schools.pilot.pricing.eyebrow': {
    en: 'E. Pricing',
    ar: 'E. الأسعار',
    es: 'E. Precios',
  },
  'mkt.schools.pilot.pricing.title': {
    en: 'Recurring school pricing',
    ar: 'أسعار مدرسية متكرّرة',
    es: 'Precios escolares recurrentes',
  },
  'mkt.schools.pilot.pricing.founding.badge': {
    en: 'Founding School Pilot',
    ar: 'تجربة مدرسة مؤسِّسة',
    es: 'Pilotaje de Colegio Fundador',
  },
  'mkt.schools.pilot.pricing.from': {
    en: 'from',
    ar: 'من',
    es: 'desde',
  },
  'mkt.schools.pilot.pricing.year': {
    en: '/ year',
    ar: '/ بالسنة',
    es: '/ año',
  },
  'mkt.schools.pilot.pricing.founding.body': {
    en: 'Recurring annual licence, sized to cohort and scope. The first 10 founding schools lock in this preferential rate for 2-3 years.',
    ar: 'رخصة سنوية متكرّرة، محدّدة حسب الدفعة والنطاق. أول 10 مدارس مؤسِّسة تثبّت هذا السعر التفضيلي لمدة 2-3 سنوات.',
    es: 'Licencia anual recurrente, dimensionada según la promoción y el alcance. Los primeros 10 colegios fundadores fijan esta tarifa preferente durante 2-3 años.',
  },
  'mkt.schools.pilot.pricing.licence.badge': {
    en: 'School Licence',
    ar: 'رخصة مدرسة',
    es: 'Licencia Escolar',
  },
  'mkt.schools.pilot.pricing.licence.body': {
    en: 'Standard annual licence for schools joining after the founding cohort closes. Full platform access for all teachers and students in the agreed cohort.',
    ar: 'رخصة سنوية عادية للمدارس اللي تنضمّ بعد ما تسكّر دفعة المؤسِّسين. وصول كامل للمنصّة لكل المعلّمين والطلاب في الدفعة المتّفق عليها.',
    es: 'Licencia anual estándar para los colegios que se unan después de que se cierre la promoción fundadora. Acceso completo a la plataforma para todos los profesores y estudiantes de la promoción acordada.',
  },
  'mkt.schools.pilot.pricing.based_on.title': {
    en: 'School pricing is based on',
    ar: 'أسعار المدارس تعتمد على',
    es: 'Los precios escolares se basan en',
  },
  'mkt.schools.pilot.pricing.based_on.1': {
    en: 'Number of students in the cohort',
    ar: 'عدد الطلاب في الدفعة',
    es: 'El número de estudiantes de la promoción',
  },
  'mkt.schools.pilot.pricing.based_on.2': {
    en: 'Number of teachers requiring access',
    ar: 'عدد المعلّمين اللي يحتاجون وصول',
    es: 'El número de profesores que necesitan acceso',
  },
  'mkt.schools.pilot.pricing.based_on.3': {
    en: 'Year groups covered (KS3 / GCSE / IGCSE)',
    ar: 'السنوات الدراسية المغطّاة (KS3 / GCSE / IGCSE)',
    es: 'Los cursos cubiertos (KS3 / GCSE / IGCSE)',
  },
  'mkt.schools.pilot.pricing.based_on.4': {
    en: 'Reporting and analytics needs',
    ar: 'احتياجات التقارير والتحليلات',
    es: 'Las necesidades de informes y analíticas',
  },
  'mkt.schools.pilot.pricing.based_on.5': {
    en: 'Onboarding and training scope',
    ar: 'نطاق الإعداد والتدريب',
    es: 'El alcance de la incorporación y la formación',
  },
  'mkt.schools.pilot.pricing.based_on.6': {
    en: 'Pilot or full annual licence structure',
    ar: 'هيكل التجربة أو الرخصة السنوية الكاملة',
    es: 'La estructura de pilotaje o de licencia anual completa',
  },
  'mkt.schools.pilot.pricing.note': {
    en: 'Larger schools, multi-academy trusts (MATs) and international school groups are priced on a custom annual licence. Optional onboarding, training or implementation support may be included depending on package.',
    ar: 'المدارس الأكبر، اتحادات الأكاديميات المتعدّدة (MATs)، ومجموعات المدارس الدولية تُسعّر برخصة سنوية مخصّصة. الإعداد أو التدريب أو دعم التطبيق الاختياري ممكن يُشمل حسب الباقة.',
    es: 'Los colegios más grandes, los grupos de academias múltiples (MAT) y los grupos de colegios internacionales se tarifican con una licencia anual personalizada. La incorporación, la formación o el apoyo de implantación opcionales pueden incluirse según el paquete.',
  },
  'mkt.schools.pilot.pricing.cta': {
    en: 'Request school pricing',
    ar: 'اطلب أسعار المدارس',
    es: 'Solicita los precios para colegios',
  },

  // ── F. CTA ─────────────────────────────────────────────────────────
  'mkt.schools.pilot.cta.title': {
    en: 'Bring clearer English insight into your school.',
    ar: 'جيب رؤية إنجليزية أوضح لمدرستك.',
    es: 'Aporta una visión más clara del inglés a tu colegio.',
  },
  'mkt.schools.pilot.cta.body': {
    en: 'Tell us your year group, cohort size and exam board. We will come back within one working day with a tailored pilot proposal - no obligation.',
    ar: 'قول لنا سنتك الدراسية، حجم الدفعة، وبورد الامتحان. بنرجع لك خلال يوم عمل واحد بعرض تجربة مفصّل - بدون أي التزام.',
    es: 'Cuéntanos tu curso, el tamaño de la promoción y la junta examinadora. Te responderemos en un día laborable con una propuesta de pilotaje a medida, sin compromiso.',
  },
  'mkt.schools.pilot.cta.request': {
    en: 'Request a school pilot',
    ar: 'اطلب تجربة مدرسة',
    es: 'Solicita un pilotaje escolar',
  },
  'mkt.schools.pilot.cta.email': {
    en: 'Email',
    ar: 'راسل',
    es: 'Escribe a',
  },
}
