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
 * Annotated `Record<string, { en: string; ar?: string }>` (NOT `as
 * const`) so string indexing works when the orchestrator wires it into
 * the master lookup() chain. Do NOT edit dictionary.ts from here.
 */

export const MKT_HOME_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  /* ═══════════════════ HOMEPAGE (src/app/page.tsx) ═══════════════════ */

  // ── Students board intro band ──────────────────────────────────────
  'home.students.eyebrow': {
    en: 'For students & parents',
    ar: 'للطلاب والأهل',
  },
  'home.students.heading': {
    en: 'Studying for an English exam? Choose your board',
    ar: 'تدرس لامتحان إنجليزي؟ اختر البورد حقّك',
  },
  'home.students.body': {
    en: 'Individual learners and families can start straight away - pick your exam board and land in a personalised revision hub.',
    ar: 'الطلاب الأفراد والعائلات يقدرون يبدون على طول - اختر بورد الامتحان حقّك وبتوصل لقسم مراجعة مخصّص لك.',
  },

  // ── Institutional hero (HomeHero) ──────────────────────────────────
  'home.hero.eyebrow': {
    en: 'GCSE, IGCSE & KS3 English revision',
    ar: 'مراجعة إنجليزي GCSE و IGCSE و KS3',
  },
  'home.hero.title': {
    en: 'Revise GCSE and IGCSE English, marked by AI against the real mark scheme',
    ar: 'راجع إنجليزي GCSE و IGCSE، وتصحيح بالـ AI على نفس معايير الامتحان الحقيقية',
  },
  'home.hero.body': {
    en: 'Practice papers, model answers and instant feedback on your essays, aligned to your exam board: AQA, Edexcel, OCR, Eduqas and Cambridge IGCSE. Free to start, built for students and parents, and trusted by schools.',
    ar: 'أوراق تدريب، إجابات نموذجية، وتغذية راجعة فورية على مقالاتك، متوافقة مع بورد الامتحان حقّك: AQA و Edexcel و OCR و Eduqas و Cambridge IGCSE. تبدأ ببلاش، مصمّم للطلاب والأهل، ومعتمد عند المدارس.',
  },
  'home.hero.cta_board': {
    en: 'Choose your exam board',
    ar: 'اختر بورد الامتحان حقّك',
  },
  'home.hero.cta_schools': {
    en: 'For schools and teachers',
    ar: 'للمدارس والمعلّمين',
  },
  'home.hero.footnote': {
    en: 'English Language, Literature and EAL. KS3 to A-Level, aligned to your specification.',
    ar: 'English Language و Literature و EAL. من KS3 لين A-Level، متوافق مع منهجك.',
  },

  // ── Audience section ───────────────────────────────────────────────
  'home.audience.heading': {
    en: 'Built for students, teachers and schools',
    ar: 'مصمّم للطلاب والمعلّمين والمدارس',
  },
  'home.audience.body': {
    en: 'One platform that supports the whole English department - from individual practice to department-wide intelligence.',
    ar: 'منصّة وحدة تدعم قسم اللغة الإنجليزية كامل - من التدريب الفردي لين الرؤية على مستوى القسم كله.',
  },
  'home.audience.students.title': {
    en: 'Students',
    ar: 'الطلاب',
  },
  'home.audience.students.body': {
    en: 'Structured practice, essay feedback and revision aligned to the specification their school teaches.',
    ar: 'تدريب منظّم، تغذية راجعة على المقالات، ومراجعة متوافقة مع المنهج اللي تدرّسه مدرستهم.',
  },
  'home.audience.students.cta': {
    en: 'For students',
    ar: 'للطلاب',
  },
  'home.audience.teachers.title': {
    en: 'Teachers',
    ar: 'المعلّمون',
  },
  'home.audience.teachers.body': {
    en: 'AI-assisted feedback, homework setting and clearer insight into class weaknesses - without adding workload.',
    ar: 'تغذية راجعة بمساعدة الـ AI، تحضير الواجبات، ورؤية أوضح عن نقاط ضعف الصف - بدون ما تزيد على شغلك.',
  },
  'home.audience.teachers.cta': {
    en: 'For teachers',
    ar: 'للمعلّمين',
  },
  'home.audience.schools.title': {
    en: 'Schools',
    ar: 'المدارس',
  },
  'home.audience.schools.body': {
    en: 'Department-wide assessment, intervention insight and reporting that leaders can act on.',
    ar: 'تقييم على مستوى القسم، رؤية للتدخّل، وتقارير تقدر الإدارة تتصرّف عليها.',
  },
  'home.audience.schools.cta': {
    en: 'For schools',
    ar: 'للمدارس',
  },

  // ── School platform section ────────────────────────────────────────
  'home.platform.eyebrow': {
    en: 'School infrastructure for English departments',
    ar: 'بنية تحتية مدرسية لأقسام اللغة الإنجليزية',
  },
  'home.platform.heading': {
    en: 'From revision support to department-wide English intelligence',
    ar: 'من دعم المراجعة لين رؤية إنجليزية على مستوى القسم كله',
  },
  'home.platform.body': {
    en: 'The English Hub is designed to become embedded in how an English department works - assessment, feedback, intervention and reporting in one place, supporting teacher judgement rather than replacing it.',
    ar: 'The English Hub مصمّم يصير جزء من طريقة شغل قسم اللغة الإنجليزية - التقييم والتغذية الراجعة والتدخّل والتقارير بمكان واحد، يدعم حكم المعلّم بدل ما يحلّ محلّه.',
  },

  // ── Key benefits section ───────────────────────────────────────────
  'home.benefits.heading': {
    en: 'What it helps schools do',
    ar: 'شنو يساعد المدارس تسوّيه',
  },
  'home.benefits.workload.title': {
    en: 'Reduce teacher workload',
    ar: 'قلّل ضغط شغل المعلّم',
  },
  'home.benefits.workload.body': {
    en: 'Reduce repetitive marking workload so teachers can focus more time on teaching.',
    ar: 'قلّل شغل التصحيح المتكرّر عشان المعلّمين يركّزون وقت أكثر على التدريس.',
  },
  'home.benefits.intervention.title': {
    en: 'Improve intervention visibility',
    ar: 'حسّن وضوح التدخّل',
  },
  'home.benefits.intervention.body': {
    en: 'Identify students who may need support earlier, before gaps widen.',
    ar: 'اكتشف الطلاب اللي يمكن يحتاجون دعم بوقت أبكر، قبل ما تكبر الفجوات.',
  },
  'home.benefits.eal.title': {
    en: 'Support EAL learners',
    ar: 'ادعم متعلّمي EAL',
  },
  'home.benefits.eal.body': {
    en: 'Structured practice designed to build EAL learners’ confidence in English.',
    ar: 'تدريب منظّم مصمّم يبني ثقة متعلّمي EAL في الإنجليزي.',
  },
  'home.benefits.readiness.title': {
    en: 'Strengthen exam readiness',
    ar: 'قوّي الجاهزية للامتحان',
  },
  'home.benefits.readiness.body': {
    en: 'Specification-aligned practice across English Language and Literature.',
    ar: 'تدريب متوافق مع المنهج عبر English Language و Literature.',
  },
  'home.benefits.reports.title': {
    en: 'Generate clearer student reports',
    ar: 'جهّز تقارير طلاب أوضح',
  },
  'home.benefits.reports.body': {
    en: 'Turn student activity into clearer, shareable progress summaries.',
    ar: 'حوّل نشاط الطالب لملخّصات تقدّم أوضح وقابلة للمشاركة.',
  },
  'home.benefits.cohorts.title': {
    en: 'Track progress across cohorts',
    ar: 'تابع التقدّم عبر الدفعات',
  },
  'home.benefits.cohorts.body': {
    en: 'Give leaders clearer visibility across classes and year groups.',
    ar: 'اعطِ الإدارة وضوح أكثر عبر الصفوف والسنوات الدراسية.',
  },

  // ── Capabilities section ───────────────────────────────────────────
  'home.capabilities.heading': {
    en: 'AI-assisted marking, analytics and intervention',
    ar: 'تصحيح بمساعدة الـ AI، تحليلات، وتدخّل',
  },
  'home.capabilities.body': {
    en: 'Designed to support teacher judgement and surface where attention is needed - not to replace professional assessment.',
    ar: 'مصمّم يدعم حكم المعلّم ويبيّن وين يحتاج انتباه - مو يحلّ محل التقييم المهني.',
  },
  'home.capabilities.feedback.title': {
    en: 'AI-assisted marking & feedback',
    ar: 'تصحيح وتغذية راجعة بمساعدة الـ AI',
  },
  'home.capabilities.feedback.body': {
    en: 'Students receive structured, criteria-referenced feedback teachers can review and build on.',
    ar: 'الطلاب يحصلون تغذية راجعة منظّمة مرجعها معايير التقييم، يقدر المعلّم يراجعها ويبني فوقها.',
  },
  'home.capabilities.analytics.title': {
    en: 'Class & year-group analytics',
    ar: 'تحليلات الصف والسنة الدراسية',
  },
  'home.capabilities.analytics.body': {
    en: 'See patterns across cohorts and where the department should focus next.',
    ar: 'شوف الأنماط عبر الدفعات ووين لازم يركّز القسم بعدين.',
  },
  'home.capabilities.insights.title': {
    en: 'Intervention insights',
    ar: 'رؤى التدخّل',
  },
  'home.capabilities.insights.body': {
    en: 'Surface students who may need support earlier in the term.',
    ar: 'بيّن الطلاب اللي يمكن يحتاجون دعم بوقت أبكر في الفصل.',
  },
  'home.capabilities.homework.title': {
    en: 'Homework & worksheet support',
    ar: 'دعم الواجبات وأوراق العمل',
  },
  'home.capabilities.homework.body': {
    en: 'Set practice and generate resources aligned to the specification.',
    ar: 'حضّر تمارين وجهّز موارد متوافقة مع المنهج.',
  },
  'home.capabilities.reports.title': {
    en: 'Student reports',
    ar: 'تقارير الطلاب',
  },
  'home.capabilities.reports.body': {
    en: 'Clearer progress summaries for parents, reviews and leadership.',
    ar: 'ملخّصات تقدّم أوضح للأهل والمراجعات والإدارة.',
  },
  'home.capabilities.reading.title': {
    en: 'Reading & comprehension support',
    ar: 'دعم القراءة والفهم',
  },
  'home.capabilities.reading.body': {
    en: 'Structured comprehension and reading practice across key stages.',
    ar: 'تمارين فهم وقراءة منظّمة عبر مراحل الـ key stages.',
  },

  // ── EAL section ────────────────────────────────────────────────────
  'home.eal.heading': {
    en: 'Structured English support for EAL learners',
    ar: 'دعم إنجليزي منظّم لمتعلّمي EAL',
  },
  'home.eal.body': {
    en: 'A growing priority for international and GCC schools. The English Hub is built to help EAL learners develop vocabulary, reading fluency, comprehension and writing confidence, with teacher visibility over progress and differentiated support.',
    ar: 'أولوية تكبر يوم بعد يوم للمدارس الدولية ومدارس الخليج. The English Hub مبني يساعد متعلّمي EAL يطوّرون المفردات، طلاقة القراءة، الفهم، وثقة الكتابة، مع وضوح للمعلّم عن التقدّم ودعم متفاوت المستوى.',
  },
  'home.eal.cta': {
    en: 'Explore EAL support',
    ar: 'استكشف دعم EAL',
  },

  // ── Pilot CTA section ──────────────────────────────────────────────
  'home.pilot.eyebrow': {
    en: 'Founder School Programme',
    ar: 'برنامج المدارس المؤسِّسة',
  },
  'home.pilot.heading': {
    en: 'Start a 90-day Founder School Pilot',
    ar: 'ابدأ تجربة مدرسة مؤسِّسة لمدة 90 يوم',
  },
  'home.pilot.body': {
    en: 'Most schools begin with a structured one-term pilot focused on one year group or the English department. The pilot is designed to prove value before wider rollout.',
    ar: 'أغلب المدارس تبدأ بتجربة منظّمة لمدة فصل وحده تركّز على سنة دراسية وحدة أو قسم اللغة الإنجليزية. التجربة مصمّمة تثبت القيمة قبل التوسّع الأكبر.',
  },
  'home.pilot.cta_book': {
    en: 'Book a School Pilot',
    ar: 'احجز تجربة مدرسة',
  },
  'home.pilot.cta_deploy': {
    en: 'Explore School Deployment',
    ar: 'استكشف نشر المنصّة في المدرسة',
  },

  // ── Pricing preview section ────────────────────────────────────────
  'home.pricing.heading': {
    en: 'Pricing',
    ar: 'الأسعار',
  },
  'home.pricing.body': {
    en: 'Individual access for learners and teachers, and structured pilots and annual deployment for schools.',
    ar: 'وصول فردي للطلاب والمعلّمين، وتجارب منظّمة ونشر سنوي للمدارس.',
  },
  'home.pricing.student.label': {
    en: 'Student',
    ar: 'طالب',
  },
  'home.pricing.student.body': {
    en: 'Individual learner access.',
    ar: 'وصول للطالب الفرد.',
  },
  'home.pricing.teacher.label': {
    en: 'Teacher',
    ar: 'معلّم',
  },
  'home.pricing.teacher.body': {
    en: 'Teacher tools and classroom support.',
    ar: 'أدوات المعلّم ودعم الصف.',
  },
  'home.pricing.schools.label': {
    en: 'Schools',
    ar: 'المدارس',
  },
  // 'Pilots {from}' - {from} stays as the PRICING_DISPLAY token at render.
  'home.pricing.schools.pilots_prefix': {
    en: 'Pilots',
    ar: 'تجارب من',
  },
  // 'Annual deployment {from}.' - prefix + token + trailing dot at render.
  'home.pricing.schools.annual_prefix': {
    en: 'Annual deployment',
    ar: 'نشر سنوي من',
  },
  'home.pricing.cta': {
    en: 'Request School Pricing',
    ar: 'اطلب أسعار المدارس',
  },

  // ── Home FAQ heading + Final CTA ───────────────────────────────────
  'home.faq.school_leaders': {
    en: 'Questions from school leaders',
    ar: 'أسئلة من قادة المدارس',
  },
  'home.final.heading': {
    en: 'Discuss your English department’s needs',
    ar: 'ناقش احتياجات قسم اللغة الإنجليزية حقّك',
  },
  'home.final.body': {
    en: 'Talk to us about a pilot, an annual deployment, or how The English Hub could support your department.',
    ar: 'كلّمنا عن تجربة، أو نشر سنوي، أو كيف The English Hub يقدر يدعم قسمك.',
  },
  'home.final.cta_book': {
    en: 'Book a School Pilot',
    ar: 'احجز تجربة مدرسة',
  },
  'home.final.cta_rollout': {
    en: 'Discuss a School Rollout',
    ar: 'ناقش نشر المنصّة في المدرسة',
  },

  /* ══════════════ FOR TEACHERS (src/app/for-teachers/page.tsx) ══════════════ */

  // ── Feature cards (module-scope `features` array) ──────────────────
  'mkt.teachers.ft.feat.lesson_builder.title': {
    en: 'Lesson Builder',
    ar: 'بنّاء الدروس',
  },
  'mkt.teachers.ft.feat.lesson_builder.desc': {
    en: 'Build structured, specification-aligned lessons in minutes. Add starter activities, main tasks, and plenaries with drag-and-drop ease, then share instantly with any class.',
    ar: 'ابنِ دروس منظّمة متوافقة مع المنهج بدقائق. ضيف أنشطة افتتاحية، مهام رئيسية، وختام بسهولة السحب والإفلات، وبعدين شاركها على طول مع أي صف.',
  },
  'mkt.teachers.ft.feat.ai_marking.title': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقالات بالـ AI',
  },
  'mkt.teachers.ft.feat.ai_marking.desc': {
    en: "Students submit essays and get instant, detailed feedback aligned to your school's chosen exam board mark scheme. Review and adjust before it reaches them.",
    ar: 'الطلاب يسلّمون مقالاتهم ويحصلون تغذية راجعة فورية ومفصّلة متوافقة مع معايير تصحيح بورد الامتحان اللي اختارته مدرستك. راجع وعدّل قبل ما توصلهم.',
  },
  'mkt.teachers.ft.feat.analytics.title': {
    en: 'Student Progress Analytics',
    ar: 'تحليلات تقدّم الطلاب',
  },
  'mkt.teachers.ft.feat.analytics.desc': {
    en: 'Track every student in real time. Spot who is falling behind, who is excelling, and where the whole class needs extra support -- all in one dashboard.',
    ar: 'تابع كل طالب لحظة بلحظة. شوف منو متأخّر، منو متميّز، ووين الصف كله يحتاج دعم زيادة -- كله في لوحة وحدة.',
  },
  'mkt.teachers.ft.feat.homework.title': {
    en: 'Homework & Assignment Manager',
    ar: 'مدير الواجبات والمهام',
  },
  'mkt.teachers.ft.feat.homework.desc': {
    en: 'Set assignments, track submissions, chase overdue work, and monitor completion rates across all your classes without juggling spreadsheets.',
    ar: 'حضّر المهام، تابع التسليمات، طالب بالشغل المتأخّر، وراقب نسب الإنجاز عبر كل صفوفك بدون ما تتلخبط بين الجداول.',
  },
  'mkt.teachers.ft.feat.library.title': {
    en: 'Ready Resources Library',
    ar: 'مكتبة موارد جاهزة',
  },
  'mkt.teachers.ft.feat.library.desc': {
    en: 'A growing library of worksheets, revision materials, model answers, and starter activities - all ready to print or share digitally.',
    ar: 'مكتبة تكبر يوم بعد يوم فيها أوراق عمل، مواد مراجعة، إجابات نموذجية، وأنشطة افتتاحية - كلها جاهزة للطباعة أو المشاركة رقمياً.',
  },
  'mkt.teachers.ft.feat.board.title': {
    en: 'Your Exam Board, Your Content',
    ar: 'بوردك، ومحتواك',
  },
  'mkt.teachers.ft.feat.board.desc': {
    en: 'We support AQA, Edexcel, OCR, WJEC, and IGCSE/CAIE. Your school selects one board during setup and every lesson, resource, and mark scheme is tailored to that specification -- so nothing is wasted.',
    ar: 'ندعم AQA و Edexcel و OCR و WJEC و IGCSE/CAIE. مدرستك تختار بورد واحد عند الإعداد وكل درس ومورد ومعيار تصحيح يتفصّل على ذاك المنهج -- عشان ما يضيع شي.',
  },

  // ── Time savers (module-scope `timeSavers` array) ──────────────────
  'mkt.teachers.ft.timesaver.1': {
    en: 'Spend less time on routine planning and marking - the AI shoulders the repetitive work.',
    ar: 'وقت أقل على التحضير والتصحيح الروتيني - الـ AI يشيل الشغل المتكرّر عنك.',
  },
  'mkt.teachers.ft.timesaver.2': {
    en: 'Auto-mark homework essays in seconds',
    ar: 'صحّح مقالات الواجبات تلقائياً بثواني',
  },
  'mkt.teachers.ft.timesaver.3': {
    en: 'Generate worksheets and starter activities instantly',
    ar: 'جهّز أوراق عمل وأنشطة افتتاحية على طول',
  },
  'mkt.teachers.ft.timesaver.4': {
    en: 'Get at-a-glance class progress without manual tracking',
    ar: 'شوف تقدّم الصف بلمحة بدون متابعة يدوية',
  },
  'mkt.teachers.ft.timesaver.5': {
    en: 'Predict student grades before exam season',
    ar: 'توقّع درجات الطلاب قبل موسم الامتحانات',
  },
  'mkt.teachers.ft.timesaver.6': {
    en: 'Share resources across all your classes in one click',
    ar: 'شارك الموارد عبر كل صفوفك بضغطة وحدة',
  },
  'mkt.teachers.ft.timesaver.7': {
    en: 'Eliminate paper-based marking admin',
    ar: 'تخلّص من روتين التصحيح الورقي',
  },
  'mkt.teachers.ft.timesaver.8': {
    en: 'Access the ready-made resource library any time',
    ar: 'ادخل مكتبة الموارد الجاهزة في أي وقت',
  },

  // ── FAQ (module-scope `faqs` array) ────────────────────────────────
  'mkt.teachers.ft.faq.cost.q': {
    en: 'How much does it cost?',
    ar: 'كم تكلفته؟',
  },
  'mkt.teachers.ft.faq.cost.a': {
    en: 'Every feature is free to try -- you get 3 free uses per tool with no card required. When you are ready to upgrade, the Teacher plan is £6.99/month or £67.99/year at the Early Access / Founding rate (locked until August 2026; Standard pricing from August 2026 is £11.99/month or £99/year). Every paid plan starts with a 7-day free trial (card required, cancel before day 7). School plans are available through our Founding Schools Programme -- £4,000/year for the first 10 schools, anchored against projected Standard Pricing of £8,000/year. Book a call to discuss.',
    ar: 'كل ميزة تقدر تجرّبها ببلاش -- تحصل 3 استخدامات مجانية لكل أداة بدون بطاقة. لمّا تكون جاهز للترقية، خطة المعلّم بـ £6.99 بالشهر أو £67.99 بالسنة بسعر الـ Early Access / Founding (مثبّت لين أغسطس 2026؛ السعر العادي من أغسطس 2026 هو £11.99 بالشهر أو £99 بالسنة). كل خطة مدفوعة تبدأ بتجربة مجانية 7 أيام (تحتاج بطاقة، سكّر الاشتراك قبل اليوم السابع). خطط المدارس متوفّرة عبر برنامج المدارس المؤسِّسة -- £4,000 بالسنة لأول 10 مدارس، مقابل سعر عادي متوقّع £8,000 بالسنة. احجز مكالمة عشان نتناقش.',
  },
  'mkt.teachers.ft.faq.features.q': {
    en: 'What features are included?',
    ar: 'شنو المزايا اللي يشملها؟',
  },
  'mkt.teachers.ft.faq.features.a': {
    en: 'Every feature is available on the free tier with 3 uses per tool -- AI Lesson Plans, AI Marking, Worksheet Builder, Student Progress Analytics, and more. The Premium plan removes all limits and gives you full access to the ready resources library, predicted grades, and complete exam board coverage. There are no add-on charges.',
    ar: 'كل ميزة متوفّرة في الباقة المجانية مع 3 استخدامات لكل أداة -- خطط دروس بالـ AI، تصحيح بالـ AI، بنّاء أوراق العمل، تحليلات تقدّم الطلاب، وأكثر. خطة Premium تشيل كل الحدود وتعطيك وصول كامل لمكتبة الموارد الجاهزة، الدرجات المتوقّعة، وتغطية كاملة لبوردات الامتحان. ما فيه رسوم إضافية.',
  },
  'mkt.teachers.ft.faq.boards.q': {
    en: 'Which exam boards do you cover?',
    ar: 'أي بوردات امتحان تغطّون؟',
  },
  'mkt.teachers.ft.faq.boards.a': {
    en: "We support all major boards: AQA, Edexcel, OCR, WJEC Eduqas, and IGCSE/CAIE. Your school selects one exam board during setup and all content -- lessons, resources, mark schemes, and AI feedback -- is tailored to that board's specification. You only ever see what is relevant to your students' exams.",
    ar: 'ندعم كل البوردات الرئيسية: AQA و Edexcel و OCR و WJEC Eduqas و IGCSE/CAIE. مدرستك تختار بورد واحد عند الإعداد وكل المحتوى -- الدروس، الموارد، معايير التصحيح، وتغذية الـ AI الراجعة -- يتفصّل على منهج ذاك البورد. ما تشوف إلا اللي يخص امتحانات طلابك.',
  },
  'mkt.teachers.ft.faq.marking.q': {
    en: 'How does AI Essay Marking work?',
    ar: 'كيف يشتغل تصحيح المقالات بالـ AI؟',
  },
  'mkt.teachers.ft.faq.marking.a': {
    en: 'Students submit essays through the platform. Our AI analyses the response against the mark scheme criteria for their exam board, provides detailed written feedback, and generates a predicted grade. You review and adjust everything before the student sees it.',
    ar: 'الطلاب يسلّمون مقالاتهم عبر المنصّة. الـ AI حقّنا يحلّل الإجابة على معايير التصحيح حق بوردهم، يعطي تغذية راجعة مكتوبة ومفصّلة، ويطلّع درجة متوقّعة. وانت تراجع وتعدّل كل شي قبل ما يشوفه الطالب.',
  },
  'mkt.teachers.ft.faq.upgrade.q': {
    en: 'Can I upgrade to a school plan later?',
    ar: 'أقدر أترقّى لخطة مدرسة بعدين؟',
  },
  'mkt.teachers.ft.faq.upgrade.a': {
    en: 'Absolutely. If you want to roll The English Hub out to your department or whole school, visit our School Plans page or email us at info@Upskillenergy.com. We can migrate your existing data and give your colleagues instant access.',
    ar: 'أكيد. إذا تبي تنشر The English Hub على قسمك أو مدرستك كاملة، زور صفحة خطط المدارس حقّنا أو راسلنا على info@Upskillenergy.com. نقدر ننقل بياناتك الموجودة ونعطي زملاءك وصول فوري.',
  },
  'mkt.teachers.ft.faq.free_tries.q': {
    en: 'What happens when I use my free tries?',
    ar: 'شنو يصير لمّا أخلّص تجاربي المجانية؟',
  },
  'mkt.teachers.ft.faq.free_tries.a': {
    en: 'You get 3 free uses per tool -- AI Lesson Plans, AI Marking, and Worksheet Builder. Once you have used them, you can upgrade to the Premium plan at any time. Every paid plan starts with a 7-day free trial (card required). Cancel any time from your account settings -- no hidden fees, no awkward cancellation calls.',
    ar: 'تحصل 3 استخدامات مجانية لكل أداة -- خطط الدروس بالـ AI، التصحيح بالـ AI، وبنّاء أوراق العمل. أول ما تستخدمها، تقدر تترقّى لخطة Premium في أي وقت. كل خطة مدفوعة تبدأ بتجربة مجانية 7 أيام (تحتاج بطاقة). سكّر الاشتراك في أي وقت من إعدادات حسابك -- بدون رسوم مخفية، وبدون مكالمات إلغاء محرجة.',
  },

  // ── Hero "Start Free" extras + section copy ────────────────────────
  'mkt.teachers.ft.startfree.badge': {
    en: 'Start Free',
    ar: 'ابدأ ببلاش',
  },
  'mkt.teachers.ft.startfree.title': {
    en: 'Every Feature Available to Try',
    ar: 'كل ميزة متاحة للتجربة',
  },
  'mkt.teachers.ft.startfree.body': {
    en: 'No credit card. No time limit. Try each premium tool 3 times free and see the results for yourself before you pay a penny.',
    ar: 'بدون بطاقة. بدون حد زمني. جرّب كل أداة Premium 3 مرّات ببلاش وشوف النتائج بنفسك قبل ما تدفع ولا قرش.',
  },
  'mkt.teachers.ft.tool.lesson_plans.title': {
    en: 'AI Lesson Plans',
    ar: 'خطط دروس بالـ AI',
  },
  'mkt.teachers.ft.tool.lesson_plans.desc': {
    en: 'Generate complete, exam-board-aligned lessons in seconds. Starter, main tasks, plenary -- all done.',
    ar: 'جهّز دروس كاملة متوافقة مع البورد بثواني. افتتاحية، مهام رئيسية، ختام -- كله جاهز.',
  },
  'mkt.teachers.ft.tool.marking.title': {
    en: 'AI Marking',
    ar: 'تصحيح بالـ AI',
  },
  'mkt.teachers.ft.tool.marking.desc': {
    en: 'Students submit essays and get instant, detailed feedback aligned to your mark scheme. You review before they see it.',
    ar: 'الطلاب يسلّمون مقالاتهم ويحصلون تغذية راجعة فورية ومفصّلة متوافقة مع معيار تصحيحك. وانت تراجع قبل ما يشوفونها.',
  },
  'mkt.teachers.ft.tool.worksheet.title': {
    en: 'Worksheet Builder',
    ar: 'بنّاء أوراق العمل',
  },
  'mkt.teachers.ft.tool.worksheet.desc': {
    en: 'Create differentiated worksheets with model answers at multiple levels -- ready to print or share digitally.',
    ar: 'سوِّ أوراق عمل متفاوتة المستوى مع إجابات نموذجية بمستويات متعدّدة -- جاهزة للطباعة أو المشاركة رقمياً.',
  },
  'mkt.teachers.ft.tool.free_uses': {
    en: '3 free uses',
    ar: '3 استخدامات مجانية',
  },
  'mkt.teachers.ft.upgrade_note': {
    en: 'Upgrade when you are ready. Every paid plan starts with a 7-day free trial (card required, cancel before day 7).',
    ar: 'ترقّى لمّا تكون جاهز. كل خطة مدفوعة تبدأ بتجربة مجانية 7 أيام (تحتاج بطاقة، سكّر قبل اليوم السابع).',
  },
  'mkt.teachers.ft.cta.start_free': {
    en: 'Start Free',
    ar: 'ابدأ ببلاش',
  },
  'mkt.teachers.ft.cta.view_pricing': {
    en: 'View Pricing',
    ar: 'شوف الأسعار',
  },

  // ── Stats bar ──────────────────────────────────────────────────────
  'mkt.teachers.ft.stat.planning.value': {
    en: 'Faster',
    ar: 'أسرع',
  },
  'mkt.teachers.ft.stat.planning.label': {
    en: 'Lesson Planning',
    ar: 'تحضير الدروس',
  },
  'mkt.teachers.ft.stat.marking.value': {
    en: 'AI',
    ar: 'AI',
  },
  'mkt.teachers.ft.stat.marking.label': {
    en: 'Essay Marking',
    ar: 'تصحيح المقالات',
  },
  'mkt.teachers.ft.stat.library.value': {
    en: 'Growing',
    ar: 'تكبر',
  },
  'mkt.teachers.ft.stat.library.label': {
    en: 'Resource Library',
    ar: 'مكتبة الموارد',
  },
  'mkt.teachers.ft.stat.boards.label': {
    en: 'Exam Boards',
    ar: 'بوردات الامتحان',
  },
  'mkt.teachers.ft.stat.founding.value': {
    en: 'New',
    ar: 'جديد',
  },
  'mkt.teachers.ft.stat.founding.label': {
    en: 'Founding Teachers',
    ar: 'معلّمون مؤسِّسون',
  },

  // ── Interactive demo section ───────────────────────────────────────
  'mkt.teachers.ft.demo.badge': {
    en: 'Interactive Demo',
    ar: 'ديمو تفاعلي',
  },
  'mkt.teachers.ft.demo.title': {
    en: 'Try the Platform -- No Signup Required',
    ar: 'جرّب المنصّة -- بدون تسجيل',
  },
  'mkt.teachers.ft.demo.body': {
    en: 'Explore a fully working demo with sample data. See exactly how The English Hub will save you time before you create an account.',
    ar: 'استكشف ديمو شغّال بالكامل ببيانات تجريبية. شوف بالضبط كيف The English Hub بيوفّر وقتك قبل ما تسوّي حساب.',
  },
  'mkt.teachers.ft.demo.dashboard.title': {
    en: 'My Dashboard',
    ar: 'لوحتي',
  },
  'mkt.teachers.ft.demo.dashboard.desc': {
    en: 'See your classes, upcoming lessons, and student alerts at a glance.',
    ar: 'شوف صفوفك، الدروس الجاية، وتنبيهات الطلاب بلمحة.',
  },
  'mkt.teachers.ft.demo.lessons.title': {
    en: 'Lesson Builder',
    ar: 'بنّاء الدروس',
  },
  'mkt.teachers.ft.demo.lessons.desc': {
    en: 'Build a full lesson plan aligned to your exam board in minutes.',
    ar: 'ابنِ خطة درس كاملة متوافقة مع بوردك بدقائق.',
  },
  'mkt.teachers.ft.demo.analytics.title': {
    en: 'Student Analytics',
    ar: 'تحليلات الطلاب',
  },
  'mkt.teachers.ft.demo.analytics.desc': {
    en: 'Track progress, spot at-risk students, and view predicted grades.',
    ar: 'تابع التقدّم، اكتشف الطلاب المعرّضين للخطر، وشوف الدرجات المتوقّعة.',
  },
  'mkt.teachers.ft.demo.launch': {
    en: 'Launch Teacher Demo',
    ar: 'افتح ديمو المعلّم',
  },

  // ── Features section heading ───────────────────────────────────────
  'mkt.teachers.ft.features.title': {
    en: 'Everything You Need to Teach Smarter',
    ar: 'كل اللي تحتاجه عشان تدرّس بذكاء',
  },
  'mkt.teachers.ft.features.body': {
    en: 'Premium tools built specifically for English teachers - less admin, more impact.',
    ar: 'أدوات Premium مبنية خصّيصاً لمعلّمي الإنجليزي - روتين أقل، وأثر أكثر.',
  },

  // ── Content creation preview ───────────────────────────────────────
  'mkt.teachers.ft.content.badge': {
    en: 'Content Creation',
    ar: 'إنشاء المحتوى',
  },
  'mkt.teachers.ft.content.title': {
    en: 'Full Lesson Plans in Seconds, Not Hours',
    ar: 'خطط دروس كاملة بثواني، مو ساعات',
  },
  'mkt.teachers.ft.content.body': {
    en: 'Tell the Lesson Builder what you are teaching and it generates a complete, structured lesson aligned to your exam board specification -- including starter activities, main tasks, differentiation suggestions, and a plenary. You review, adjust if needed, and share.',
    ar: 'قول لبنّاء الدروس شنو تدرّس وبيجهّز لك درس كامل ومنظّم متوافق مع منهج بوردك -- يشمل أنشطة افتتاحية، مهام رئيسية، اقتراحات للتفاوت، وختام. وانت تراجع، تعدّل لو لزم، وتشارك.',
  },
  'mkt.teachers.ft.content.point.1': {
    en: 'Full lesson plans with learning objectives',
    ar: 'خطط دروس كاملة مع أهداف التعلّم',
  },
  'mkt.teachers.ft.content.point.2': {
    en: 'Differentiated worksheets at multiple levels',
    ar: 'أوراق عمل متفاوتة المستوى بمستويات متعدّدة',
  },
  'mkt.teachers.ft.content.point.3': {
    en: 'Starter and plenary activities',
    ar: 'أنشطة افتتاحية وختامية',
  },
  'mkt.teachers.ft.content.point.4': {
    en: 'Exam-style practice questions with mark schemes',
    ar: 'أسئلة تدريب على نمط الامتحان مع معايير التصحيح',
  },
  'mkt.teachers.ft.content.point.5': {
    en: 'Ready to share or print in one click',
    ar: 'جاهزة للمشاركة أو الطباعة بضغطة وحدة',
  },
  'mkt.teachers.ft.content.cta': {
    en: 'Try Lesson Builder Demo',
    ar: 'جرّب ديمو بنّاء الدروس',
  },
  // Mock generated lesson card (illustrative product UI, not study content)
  'mkt.teachers.ft.content.mock.generated': {
    en: 'Lesson Generated',
    ar: 'تم إنشاء الدرس',
  },
  'mkt.teachers.ft.content.mock.lesson_title': {
    en: "An Inspector Calls -- Act 1: Birling's Monologue",
    ar: 'An Inspector Calls -- Act 1: مونولوج Birling',
  },
  'mkt.teachers.ft.content.mock.lesson_meta': {
    en: 'Year 11 -- 60 min lesson -- AQA English Literature',
    ar: 'Year 11 -- درس 60 دقيقة -- AQA English Literature',
  },
  'mkt.teachers.ft.content.mock.starter.label': {
    en: 'Starter',
    ar: 'افتتاحية',
  },
  'mkt.teachers.ft.content.mock.starter.desc': {
    en: 'Class display: five quotes from Birling. Students rank from most to least capitalist. 5 min.',
    ar: 'عرض للصف: خمس اقتباسات من Birling. الطلاب يرتّبونها من الأكثر رأسمالية للأقل. 5 دقائق.',
  },
  'mkt.teachers.ft.content.mock.main1.label': {
    en: 'Main Task 1',
    ar: 'المهمة الرئيسية 1',
  },
  'mkt.teachers.ft.content.mock.main1.desc': {
    en: "Close reading of Birling's monologue. Annotate for dramatic irony, context, and Priestley's message. 20 min.",
    ar: 'قراءة دقيقة لمونولوج Birling. علّق على المفارقة الدرامية، السياق، ورسالة Priestley. 20 دقيقة.',
  },
  'mkt.teachers.ft.content.mock.main2.label': {
    en: 'Main Task 2',
    ar: 'المهمة الرئيسية 2',
  },
  'mkt.teachers.ft.content.mock.main2.desc': {
    en: 'Structured paragraph practice: how does Priestley present Birling as a symbol of capitalism? 20 min.',
    ar: 'تدريب على فقرة منظّمة: كيف يقدّم Priestley شخصية Birling كرمز للرأسمالية؟ 20 دقيقة.',
  },
  'mkt.teachers.ft.content.mock.plenary.label': {
    en: 'Plenary',
    ar: 'ختام',
  },
  'mkt.teachers.ft.content.mock.plenary.desc': {
    en: 'Exit ticket: one A01 point, one A02 quotation, one A03 context link. 5 min.',
    ar: 'بطاقة خروج: نقطة A01 وحدة، اقتباس A02 واحد، رابط سياق A03 واحد. 5 دقائق.',
  },
  'mkt.teachers.ft.content.mock.worksheet_included': {
    en: 'Worksheet included',
    ar: 'يشمل ورقة عمل',
  },
  'mkt.teachers.ft.content.mock.markscheme_included': {
    en: 'Mark scheme included',
    ar: 'يشمل معيار تصحيح',
  },
  'mkt.teachers.ft.content.mock.diff_worksheet': {
    en: 'Differentiated worksheet',
    ar: 'ورقة عمل متفاوتة المستوى',
  },
  'mkt.teachers.ft.content.mock.levels': {
    en: '3 levels',
    ar: '3 مستويات',
  },
  'mkt.teachers.ft.content.mock.model_answer': {
    en: 'Model answer + mark scheme',
    ar: 'إجابة نموذجية + معيار تصحيح',
  },
  'mkt.teachers.ft.content.mock.aqa_aligned': {
    en: 'AQA aligned',
    ar: 'متوافق مع AQA',
  },

  // ── Analytics preview section ──────────────────────────────────────
  'mkt.teachers.ft.analytics.class_progress': {
    en: 'Class Progress -- Year 11 Set 1',
    ar: 'تقدّم الصف -- Year 11 Set 1',
  },
  'mkt.teachers.ft.analytics.bar.reading': {
    en: 'Reading & Comprehension',
    ar: 'القراءة والفهم',
  },
  'mkt.teachers.ft.analytics.bar.essay': {
    en: 'Essay Writing (A01)',
    ar: 'كتابة المقال (A01)',
  },
  'mkt.teachers.ft.analytics.bar.language': {
    en: 'Language Analysis (A02)',
    ar: 'تحليل اللغة (A02)',
  },
  'mkt.teachers.ft.analytics.bar.context': {
    en: 'Context & Evaluation (A03)',
    ar: 'السياق والتقييم (A03)',
  },
  'mkt.teachers.ft.analytics.bar.homework': {
    en: 'Homework Completion',
    ar: 'إنجاز الواجبات',
  },
  'mkt.teachers.ft.analytics.at_risk': {
    en: 'At Risk',
    ar: 'معرّضون للخطر',
  },
  'mkt.teachers.ft.analytics.most_improved': {
    en: 'Most Improved',
    ar: 'الأكثر تحسّناً',
  },
  'mkt.teachers.ft.analytics.assignment_completion': {
    en: 'Assignment Completion',
    ar: 'إنجاز المهام',
  },
  'mkt.teachers.ft.analytics.submitted_on_time': {
    en: '26 of 30 students submitted on time',
    ar: '26 من 30 طالب سلّموا في الوقت',
  },
  'mkt.teachers.ft.analytics.badge': {
    en: 'Analytics Dashboard',
    ar: 'لوحة التحليلات',
  },
  'mkt.teachers.ft.analytics.title': {
    en: "Know Every Student's Progress at a Glance",
    ar: 'اعرف تقدّم كل طالب بلمحة',
  },
  'mkt.teachers.ft.analytics.body': {
    en: 'Stop waiting for the end-of-term report. The analytics dashboard gives you a live view of class and individual student performance -- so you can intervene early, celebrate progress, and direct your energy where it will make the biggest difference.',
    ar: 'بطّل تنتظر تقرير نهاية الفصل. لوحة التحليلات تعطيك عرض حي لأداء الصف وكل طالب على حدة -- عشان تتدخّل بدري، تحتفي بالتقدّم، وتوجّه طاقتك وين بتفرق أكثر.',
  },
  'mkt.teachers.ft.analytics.point.1': {
    en: 'Real-time progress tracking across all classes',
    ar: 'متابعة التقدّم لحظة بلحظة عبر كل الصفوف',
  },
  'mkt.teachers.ft.analytics.point.2': {
    en: 'At-risk students flagged automatically',
    ar: 'الطلاب المعرّضون للخطر يُعلَّمون تلقائياً',
  },
  'mkt.teachers.ft.analytics.point.3': {
    en: 'Assignment completion rates per student',
    ar: 'نسب إنجاز المهام لكل طالب',
  },
  'mkt.teachers.ft.analytics.point.4': {
    en: 'Skill-by-skill breakdown (A01, A02, A03)',
    ar: 'تفصيل مهارة بمهارة (A01, A02, A03)',
  },
  'mkt.teachers.ft.analytics.point.5': {
    en: 'Predicted grade trajectories',
    ar: 'مسارات الدرجات المتوقّعة',
  },

  // ── How it saves time ──────────────────────────────────────────────
  'mkt.teachers.ft.savetime.title': {
    en: 'How The English Hub Saves You Time',
    ar: 'كيف The English Hub يوفّر وقتك',
  },
  'mkt.teachers.ft.savetime.body': {
    en: 'Built around the real pain points English teachers face every week.',
    ar: 'مبني حول المشاكل الحقيقية اللي يواجهها معلّمو الإنجليزي كل أسبوع.',
  },

  // ── Founding teachers empty state ──────────────────────────────────
  'mkt.teachers.ft.founding.title': {
    en: 'Be a Founding Teacher',
    ar: 'كن معلّماً مؤسِّساً',
  },
  'mkt.teachers.ft.founding.body_pre': {
    en: "Founding teachers' first responses coming soon. Want to be one of them?",
    ar: 'أول ردود المعلّمين المؤسِّسين جاية قريب. تبي تكون منهم؟',
  },
  'mkt.teachers.ft.founding.link': {
    en: 'Start your free teacher account',
    ar: 'ابدأ حساب معلّم مجاني',
  },

  // ── Free teaching resources ────────────────────────────────────────
  'mkt.teachers.ft.free.badge': {
    en: 'Free Resources',
    ar: 'موارد مجانية',
  },
  'mkt.teachers.ft.free.title': {
    en: 'Download Free Teaching Materials',
    ar: 'حمّل مواد تدريس مجانية',
  },
  'mkt.teachers.ft.free.body': {
    en: 'Get a complete lesson pack for An Inspector Calls -- free, no signup required. See the quality of our resources.',
    ar: 'احصل على حزمة دروس كاملة لمسرحية An Inspector Calls -- ببلاش، بدون تسجيل. شوف جودة مواردنا.',
  },
  'mkt.teachers.ft.free.pack_title': {
    en: 'An Inspector Calls -- Free Lesson Pack',
    ar: 'An Inspector Calls -- حزمة دروس مجانية',
  },
  'mkt.teachers.ft.free.pack_sub': {
    en: 'Everything you need for a 60-minute lesson',
    ar: 'كل اللي تحتاجه لدرس 60 دقيقة',
  },
  'mkt.teachers.ft.free.item.1': {
    en: 'Complete 60-minute lesson plan',
    ar: 'خطة درس كاملة 60 دقيقة',
  },
  'mkt.teachers.ft.free.item.2': {
    en: '8-question worksheet with model answers',
    ar: 'ورقة عمل 8 أسئلة مع إجابات نموذجية',
  },
  'mkt.teachers.ft.free.item.3': {
    en: 'Teaching guide with context, themes, key quotes',
    ar: 'دليل تدريس فيه السياق، الثيمات، والاقتباسات المهمة',
  },
  'mkt.teachers.ft.free.item.4': {
    en: 'Differentiated activities (support/core/stretch)',
    ar: 'أنشطة متفاوتة المستوى (دعم/أساسي/توسّع)',
  },
  'mkt.teachers.ft.free.cta_download': {
    en: 'Download Free Pack',
    ar: 'حمّل الحزمة المجانية',
  },
  'mkt.teachers.ft.free.cta_all': {
    en: 'See All Lessons',
    ar: 'شوف كل الدروس',
  },

  // ── Pricing section ────────────────────────────────────────────────
  'mkt.teachers.ft.pricing.title': {
    en: 'Simple, Transparent Pricing',
    ar: 'أسعار بسيطة وواضحة',
  },
  'mkt.teachers.ft.pricing.body': {
    en: 'Start free, upgrade when you are ready. Premium academic infrastructure for English teachers.',
    ar: 'ابدأ ببلاش، وترقّى لمّا تكون جاهز. بنية أكاديمية متطوّرة لمعلّمي الإنجليزي.',
  },
  'mkt.teachers.ft.pricing.free.label': {
    en: 'Free',
    ar: 'مجاني',
  },
  'mkt.teachers.ft.pricing.free.forever': {
    en: '/forever',
    ar: '/للأبد',
  },
  'mkt.teachers.ft.pricing.free.sub': {
    en: '3 free uses per tool',
    ar: '3 استخدامات مجانية لكل أداة',
  },
  'mkt.teachers.ft.pricing.free.feat.1': {
    en: 'AI Lesson Plans -- 3 uses',
    ar: 'خطط دروس بالـ AI -- 3 استخدامات',
  },
  'mkt.teachers.ft.pricing.free.feat.2': {
    en: 'AI Marking -- 3 uses',
    ar: 'تصحيح بالـ AI -- 3 استخدامات',
  },
  'mkt.teachers.ft.pricing.free.feat.3': {
    en: 'Worksheet Builder -- 3 uses',
    ar: 'بنّاء أوراق العمل -- 3 استخدامات',
  },
  'mkt.teachers.ft.pricing.free.feat.4': {
    en: 'Student Progress Analytics',
    ar: 'تحليلات تقدّم الطلاب',
  },
  'mkt.teachers.ft.pricing.free.feat.5': {
    en: 'All exam boards supported',
    ar: 'كل بوردات الامتحان مدعومة',
  },
  'mkt.teachers.ft.pricing.free.feat.6': {
    en: 'No credit card required',
    ar: 'بدون بطاقة ائتمان',
  },
  'mkt.teachers.ft.pricing.free.note': {
    en: 'No card needed. Try every feature.',
    ar: 'ما تحتاج بطاقة. جرّب كل ميزة.',
  },
  'mkt.teachers.ft.pricing.premium.trial_tag': {
    en: '7-day FREE trial',
    ar: 'تجربة مجانية 7 أيام',
  },
  'mkt.teachers.ft.pricing.premium.label': {
    en: 'Teacher Premium',
    ar: 'Teacher Premium',
  },
  'mkt.teachers.ft.pricing.premium.early_access': {
    en: 'Early Access',
    ar: 'Early Access',
  },
  'mkt.teachers.ft.pricing.premium.month': {
    en: '/month',
    ar: '/بالشهر',
  },
  'mkt.teachers.ft.pricing.premium.standard_pre': {
    en: 'Standard',
    ar: 'العادي',
  },
  'mkt.teachers.ft.pricing.premium.standard_post': {
    en: 'from August 2026',
    ar: 'من أغسطس 2026',
  },
  'mkt.teachers.ft.pricing.premium.year_pre': {
    en: 'or £67.99/year (Standard',
    ar: 'أو £67.99 بالسنة (العادي',
  },
  'mkt.teachers.ft.pricing.premium.year_post': {
    en: 'from Aug 2026)',
    ar: 'من أغسطس 2026)',
  },
  'mkt.teachers.ft.pricing.premium.increase': {
    en: '⚡ Prices increasing August 2026',
    ar: '⚡ الأسعار بترتفع في أغسطس 2026',
  },
  'mkt.teachers.ft.pricing.premium.feat.1': {
    en: 'Unlimited AI Lesson Plans',
    ar: 'خطط دروس بالـ AI بلا حدود',
  },
  'mkt.teachers.ft.pricing.premium.feat.2': {
    en: 'Unlimited AI Marking',
    ar: 'تصحيح بالـ AI بلا حدود',
  },
  'mkt.teachers.ft.pricing.premium.feat.3': {
    en: 'Unlimited Worksheet Builder',
    ar: 'بنّاء أوراق عمل بلا حدود',
  },
  'mkt.teachers.ft.pricing.premium.feat.4': {
    en: 'Student Progress Analytics',
    ar: 'تحليلات تقدّم الطلاب',
  },
  'mkt.teachers.ft.pricing.premium.feat.5': {
    en: 'Homework & Assignment Manager',
    ar: 'مدير الواجبات والمهام',
  },
  'mkt.teachers.ft.pricing.premium.feat.6': {
    en: 'Full ready resources library',
    ar: 'مكتبة موارد جاهزة كاملة',
  },
  'mkt.teachers.ft.pricing.premium.feat.7': {
    en: 'Predicted grades & interventions',
    ar: 'درجات متوقّعة وتدخّلات',
  },
  'mkt.teachers.ft.pricing.premium.feat.8': {
    en: 'All boards -- content tailored to yours',
    ar: 'كل البوردات -- محتوى مفصّل على بوردك',
  },
  'mkt.teachers.ft.pricing.premium.feat.9': {
    en: 'Cancel any time',
    ar: 'سكّر في أي وقت',
  },
  'mkt.teachers.ft.pricing.premium.note': {
    en: 'Demo 3 free uses without a card. Paid plans start with a 7-day free trial (card required, cancel before day 7).',
    ar: 'جرّب 3 استخدامات مجانية بدون بطاقة. الخطط المدفوعة تبدأ بتجربة مجانية 7 أيام (تحتاج بطاقة، سكّر قبل اليوم السابع).',
  },
  'mkt.teachers.ft.pricing.school.label': {
    en: 'School / Department',
    ar: 'مدرسة / قسم',
  },
  'mkt.teachers.ft.pricing.school.founding_tag': {
    en: 'Founding · 10 only',
    ar: 'مؤسِّسة · 10 بس',
  },
  'mkt.teachers.ft.pricing.school.year': {
    en: '/year',
    ar: '/بالسنة',
  },
  'mkt.teachers.ft.pricing.school.standard_pre': {
    en: 'Standard',
    ar: 'العادي',
  },
  'mkt.teachers.ft.pricing.school.standard_post': {
    en: 'from August 2026',
    ar: 'من أغسطس 2026',
  },
  'mkt.teachers.ft.pricing.school.sub': {
    en: 'Founding Schools Programme -- first 10 schools only',
    ar: 'برنامج المدارس المؤسِّسة -- أول 10 مدارس بس',
  },
  'mkt.teachers.ft.pricing.school.feat.1': {
    en: 'All Teacher Premium features',
    ar: 'كل مزايا Teacher Premium',
  },
  'mkt.teachers.ft.pricing.school.feat.2': {
    en: 'Unlimited teacher accounts',
    ar: 'حسابات معلّمين بلا حدود',
  },
  'mkt.teachers.ft.pricing.school.feat.3': {
    en: 'Department-level analytics',
    ar: 'تحليلات على مستوى القسم',
  },
  'mkt.teachers.ft.pricing.school.feat.4': {
    en: 'Centralised resource library',
    ar: 'مكتبة موارد مركزية',
  },
  'mkt.teachers.ft.pricing.school.feat.5': {
    en: 'Priority support',
    ar: 'دعم بأولوية',
  },
  'mkt.teachers.ft.pricing.school.feat.6': {
    en: 'Onboarding & training session',
    ar: 'جلسة إعداد وتدريب',
  },
  'mkt.teachers.ft.pricing.school.feat.7': {
    en: 'Single invoice for finance',
    ar: 'فاتورة وحدة للمالية',
  },
  'mkt.teachers.ft.pricing.school.cta': {
    en: 'See School Plans',
    ar: 'شوف خطط المدارس',
  },
  'mkt.teachers.ft.pricing.school.note': {
    en: 'Custom pricing available for large schools.',
    ar: 'أسعار مخصّصة متوفّرة للمدارس الكبيرة.',
  },

  // ── Quick signup form ──────────────────────────────────────────────
  'mkt.teachers.ft.signup.badge': {
    en: 'Start Free',
    ar: 'ابدأ ببلاش',
  },
  'mkt.teachers.ft.signup.title': {
    en: 'Get Started in 30 Seconds',
    ar: 'ابدأ في 30 ثانية',
  },
  'mkt.teachers.ft.signup.body': {
    en: 'Create your free account and try every feature -- 3 free uses per tool, no card required.',
    ar: 'سوِّ حسابك المجاني وجرّب كل ميزة -- 3 استخدامات مجانية لكل أداة، بدون بطاقة.',
  },
  'mkt.teachers.ft.signup.name_label': {
    en: 'Full Name',
    ar: 'الاسم الكامل',
  },
  'mkt.teachers.ft.signup.name_ph': {
    en: 'Your name',
    ar: 'اسمك',
  },
  'mkt.teachers.ft.signup.email_label': {
    en: 'Email Address',
    ar: 'البريد الإلكتروني',
  },
  'mkt.teachers.ft.signup.school_label': {
    en: 'School',
    ar: 'المدرسة',
  },
  'mkt.teachers.ft.signup.school_optional': {
    en: '(optional)',
    ar: '(اختياري)',
  },
  'mkt.teachers.ft.signup.school_ph': {
    en: 'Your school name',
    ar: 'اسم مدرستك',
  },
  'mkt.teachers.ft.signup.submit': {
    en: 'Start Free',
    ar: 'ابدأ ببلاش',
  },
  'mkt.teachers.ft.signup.terms': {
    en: 'By signing up you agree to our Terms of Service and Privacy Policy. Free tier includes 3 uses per tool. Premium: £6.99/month or £67.99/year (Early Access - Standard £11.99/£99 from August 2026). 7-day free trial, card required.',
    ar: 'بالتسجيل انت توافق على شروط الخدمة وسياسة الخصوصية حقّنا. الباقة المجانية تشمل 3 استخدامات لكل أداة. Premium: £6.99 بالشهر أو £67.99 بالسنة (Early Access - العادي £11.99/£99 من أغسطس 2026). تجربة مجانية 7 أيام، تحتاج بطاقة.',
  },

  // ── FAQ section heading ────────────────────────────────────────────
  'mkt.teachers.ft.faq.heading': {
    en: 'Frequently Asked Questions',
    ar: 'الأسئلة الشائعة',
  },
  'mkt.teachers.ft.faq.sub': {
    en: 'Everything you need to know about The English Hub for teachers.',
    ar: 'كل اللي تحتاج تعرفه عن The English Hub للمعلّمين.',
  },

  // ── Final CTA ──────────────────────────────────────────────────────
  'mkt.teachers.ft.final.badge': {
    en: 'Founding teachers welcome',
    ar: 'المعلّمون المؤسِّسون مرحّب فيهم',
  },
  'mkt.teachers.ft.final.title': {
    en: 'Ready to Reclaim Your Evenings?',
    ar: 'جاهز تستردّ أمسياتك؟',
  },
  'mkt.teachers.ft.final.body': {
    en: 'Join the founding teachers using The English Hub to spend less time on routine planning and marking. Try every feature free -- upgrade when you are ready.',
    ar: 'انضمّ للمعلّمين المؤسِّسين اللي يستخدمون The English Hub عشان وقت أقل على التحضير والتصحيح الروتيني. جرّب كل ميزة ببلاش -- وترقّى لمّا تكون جاهز.',
  },
  'mkt.teachers.ft.final.try_demo': {
    en: 'Try the Demo',
    ar: 'جرّب الديمو',
  },
  // Final-CTA price line broken into composable spans
  'mkt.teachers.ft.final.price.pre': {
    en: '3 free uses per tool. Early Access Premium from',
    ar: '3 استخدامات مجانية لكل أداة. Early Access Premium من',
  },
  'mkt.teachers.ft.final.price.amount': {
    en: '£6.99/month or £67.99/year',
    ar: '£6.99 بالشهر أو £67.99 بالسنة',
  },
  'mkt.teachers.ft.final.price.standard_pre': {
    en: '(Standard',
    ar: '(العادي',
  },
  'mkt.teachers.ft.final.price.standard_post': {
    en: 'from August 2026)',
    ar: 'من أغسطس 2026)',
  },
  'mkt.teachers.ft.final.price.trial': {
    en: '- 7-day free trial, card required.',
    ar: '- تجربة مجانية 7 أيام، تحتاج بطاقة.',
  },
  'mkt.teachers.ft.final.price.increase': {
    en: '⚡ Prices increasing August 2026 - lock in Early Access today.',
    ar: '⚡ الأسعار بترتفع في أغسطس 2026 - ثبّت Early Access اليوم.',
  },

  /* ══════════════ FOR SCHOOLS (src/app/for-schools/page.tsx) ══════════════ */

  // ── Founding benefits (module-scope FOUNDING_BENEFITS) ─────────────
  'mkt.schools.fs.founding.benefit.1': {
    en: 'Full platform access for ALL students and ALL teachers',
    ar: 'وصول كامل للمنصّة لكل الطلاب وكل المعلّمين',
  },
  'mkt.schools.fs.founding.benefit.2': {
    en: 'Early access to new features before general release',
    ar: 'وصول مبكّر للمزايا الجديدة قبل الإطلاق العام',
  },
  'mkt.schools.fs.founding.benefit.3': {
    en: 'Direct product input -- help shape the platform',
    ar: 'تأثير مباشر على المنتج -- ساعد في تشكيل المنصّة',
  },
  'mkt.schools.fs.founding.benefit.4': {
    en: 'Priority onboarding and dedicated support',
    ar: 'إعداد بأولوية ودعم مخصّص',
  },
  'mkt.schools.fs.founding.benefit.5': {
    en: 'Locked preferential pricing for 2-3 years',
    ar: 'سعر تفضيلي مثبّت لمدة 2-3 سنوات',
  },
  'mkt.schools.fs.founding.benefit.6': {
    en: 'Founding partner recognition on the platform',
    ar: 'تكريم كشريك مؤسِّس على المنصّة',
  },

  // ── Platform feature cards (module-scope PLATFORM_FEATURES) ────────
  'mkt.schools.fs.feat.analytics.title': {
    en: 'Department Analytics Dashboard',
    ar: 'لوحة تحليلات القسم',
  },
  'mkt.schools.fs.feat.analytics.desc': {
    en: 'Real-time progress across every year group. Spot at-risk students early, compare class performance, and generate department reports aligned to common Ofsted English subject deep-dive criteria - ready to share at your next inspection.',
    ar: 'تقدّم لحظة بلحظة عبر كل السنوات الدراسية. اكتشف الطلاب المعرّضين للخطر بدري، قارن أداء الصفوف، وجهّز تقارير القسم متوافقة مع معايير Ofsted للتعمّق في مادة الإنجليزي - جاهزة للمشاركة في تفتيشك الجاي.',
  },
  'mkt.schools.fs.feat.lesson.title': {
    en: 'Lesson Builder & Resource Library',
    ar: 'بنّاء الدروس ومكتبة الموارد',
  },
  'mkt.schools.fs.feat.lesson.desc': {
    en: 'Instantly generate lesson plans, worksheets, and presentations from the platform. A growing library of resources mapped to AQA, Edexcel, OCR, WJEC and Cambridge IGCSE specifications.',
    ar: 'جهّز خطط دروس وأوراق عمل وعروض تقديمية على طول من المنصّة. مكتبة موارد تكبر يوم بعد يوم مربوطة بمناهج AQA و Edexcel و OCR و WJEC و Cambridge IGCSE.',
  },
  'mkt.schools.fs.feat.feedback.title': {
    en: 'AI Essay Feedback',
    ar: 'تغذية راجعة على المقالات بالـ AI',
  },
  'mkt.schools.fs.feat.feedback.desc': {
    en: 'Students get instant, detailed feedback on their essays based on exam board mark schemes. Frees up teacher time while keeping every student on track.',
    ar: 'الطلاب يحصلون تغذية راجعة فورية ومفصّلة على مقالاتهم حسب معايير تصحيح البورد. توفّر وقت المعلّم وتخلّي كل طالب على المسار الصحيح.',
  },
  'mkt.schools.fs.feat.homework.title': {
    en: 'Homework Management',
    ar: 'إدارة الواجبات',
  },
  'mkt.schools.fs.feat.homework.desc': {
    en: 'Set assignments in seconds, track completion automatically, and let the platform handle routine marking. Teachers reclaim hours every week.',
    ar: 'حضّر المهام بثواني، تابع الإنجاز تلقائياً، وخلّي المنصّة تتولّى التصحيح الروتيني. المعلّمون يستردّون ساعات كل أسبوع.',
  },
  'mkt.schools.fs.feat.reports.title': {
    en: 'Progress Reports',
    ar: 'تقارير التقدّم',
  },
  'mkt.schools.fs.feat.reports.desc': {
    en: 'Auto-generated progress reports for parents, heads of year, and senior leadership. Always up to date, always audit-ready.',
    ar: 'تقارير تقدّم تُنشأ تلقائياً للأهل ورؤساء السنوات والإدارة العليا. محدّثة دايماً، وجاهزة للتدقيق دايماً.',
  },
  'mkt.schools.fs.feat.cpd.title': {
    en: 'Teacher CPD & Onboarding',
    ar: 'تطوير مهني وإعداد للمعلّمين',
  },
  'mkt.schools.fs.feat.cpd.desc': {
    en: 'Built-in CPD materials and guided onboarding walkthroughs so every member of your department is confident and productive from day one.',
    ar: 'مواد CPD مدمجة وجولات إعداد موجّهة عشان كل عضو في قسمك يكون واثق ومنتج من اليوم الأول.',
  },

  // ── Content creation items (module-scope CONTENT_CREATION_ITEMS) ───
  'mkt.schools.fs.content.lesson_plans.label': {
    en: 'Lesson Plans',
    ar: 'خطط الدروس',
  },
  'mkt.schools.fs.content.lesson_plans.desc': {
    en: 'Full lesson plans mapped to your exam board specification, generated in under 30 seconds.',
    ar: 'خطط دروس كاملة مربوطة بمنهج بوردك، تُجهّز بأقل من 30 ثانية.',
  },
  'mkt.schools.fs.content.worksheets.label': {
    en: 'Worksheets',
    ar: 'أوراق العمل',
  },
  'mkt.schools.fs.content.worksheets.desc': {
    en: 'Printable, editable worksheets aligned to any topic or text your class is studying.',
    ar: 'أوراق عمل قابلة للطباعة والتعديل متوافقة مع أي موضوع أو نص يدرسه صفّك.',
  },
  'mkt.schools.fs.content.presentations.label': {
    en: 'Presentations',
    ar: 'العروض التقديمية',
  },
  'mkt.schools.fs.content.presentations.desc': {
    en: 'Classroom-ready slide decks with teacher notes, discussion prompts, and learning objectives.',
    ar: 'شرائح جاهزة للصف مع ملاحظات المعلّم، أسئلة نقاش، وأهداف تعلّم.',
  },
  'mkt.schools.fs.content.assessments.label': {
    en: 'Assessments',
    ar: 'التقييمات',
  },
  'mkt.schools.fs.content.assessments.desc': {
    en: 'Practice papers and formative assessments with auto-marking for multiple choice and short answer.',
    ar: 'أوراق تدريب وتقييمات تكوينية مع تصحيح تلقائي للاختيار من متعدّد والإجابات القصيرة.',
  },

  // ── How it works (module-scope HOW_IT_WORKS) ──────────────────────
  'mkt.schools.fs.how.1.title': {
    en: 'Book a 20-Minute Call',
    ar: 'احجز مكالمة 20 دقيقة',
  },
  'mkt.schools.fs.how.1.desc': {
    en: 'Speak with our schools team. We will walk you through the platform, discuss your department needs, and agree a tailored package. No obligation.',
    ar: 'كلّم فريق المدارس حقّنا. بنشرح لك المنصّة، نناقش احتياجات قسمك، ونتّفق على باقة مفصّلة. بدون أي التزام.',
  },
  'mkt.schools.fs.how.2.title': {
    en: 'We Set Up Your School',
    ar: 'إحنا نجهّز مدرستك',
  },
  'mkt.schools.fs.how.2.desc': {
    en: 'We handle onboarding for you. Your exam board is configured, accounts are created in bulk, and your admin dashboard is ready to go.',
    ar: 'إحنا نتولّى الإعداد عنك. بوردك يتضبط، الحسابات تتسوّى بالجملة، ولوحة الإدارة حقّتك جاهزة.',
  },
  'mkt.schools.fs.how.3.title': {
    en: 'Everyone Has Instant Access',
    ar: 'الكل يحصل وصول فوري',
  },
  'mkt.schools.fs.how.3.desc': {
    en: 'Students and teachers receive login details and can start using the full platform immediately. Your admin dashboard is live from day one.',
    ar: 'الطلاب والمعلّمون يحصلون بيانات الدخول ويبدون يستخدمون المنصّة كاملة على طول. لوحة الإدارة حقّتك شغّالة من اليوم الأول.',
  },

  // ── Comparison rows (module-scope COMPARISON_ROWS) ────────────────
  'mkt.schools.fs.compare.unlimited_students': {
    en: 'Unlimited students',
    ar: 'طلاب بلا حدود',
  },
  'mkt.schools.fs.compare.unlimited_teachers': {
    en: 'Unlimited teachers',
    ar: 'معلّمون بلا حدود',
  },
  'mkt.schools.fs.compare.dept_analytics': {
    en: 'Department analytics',
    ar: 'تحليلات القسم',
  },
  'mkt.schools.fs.compare.bulk_excel': {
    en: 'Bulk Excel upload',
    ar: 'رفع بالجملة عبر Excel',
  },
  'mkt.schools.fs.compare.admin_controls': {
    en: 'Admin controls',
    ar: 'صلاحيات الإدارة',
  },
  'mkt.schools.fs.compare.homework': {
    en: 'Homework management',
    ar: 'إدارة الواجبات',
  },
  'mkt.schools.fs.compare.progress_reports': {
    en: 'Progress reports',
    ar: 'تقارير التقدّم',
  },
  'mkt.schools.fs.compare.ofsted': {
    en: 'Ofsted-aligned department reporting',
    ar: 'تقارير القسم متوافقة مع Ofsted',
  },
  'mkt.schools.fs.compare.ai_feedback': {
    en: 'AI essay feedback',
    ar: 'تغذية راجعة على المقالات بالـ AI',
  },
  'mkt.schools.fs.compare.resource_library': {
    en: 'Resource library mapped to your exam board',
    ar: 'مكتبة موارد مربوطة ببورد امتحانك',
  },
  'mkt.schools.fs.compare.tailored_content': {
    en: 'Content tailored to your exam board',
    ar: 'محتوى مفصّل على بورد امتحانك',
  },

  // ── FAQ (module-scope FAQS) ───────────────────────────────────────
  'mkt.schools.fs.faq.programme.q': {
    en: 'What is the Founding Schools Programme?',
    ar: 'شنو برنامج المدارس المؤسِّسة؟',
  },
  'mkt.schools.fs.faq.programme.a': {
    en: 'The Founding Schools Programme is a strategic partnership for the 2026 academic year. The first 10 schools to sign are designated as founding partners and receive early features, direct product input, priority onboarding, founding partner recognition, and locked preferential pricing for 2-3 years. Additional schools are welcome on the platform at standard rates once the founding cohort closes. This is not a free trial -- it is a discounted, long-term partnership tailored to your department size.',
    ar: 'برنامج المدارس المؤسِّسة هو شراكة استراتيجية للسنة الدراسية 2026. أول 10 مدارس توقّع تنحدّد كشركاء مؤسِّسين وتحصل مزايا مبكّرة، تأثير مباشر على المنتج، إعداد بأولوية، تكريم كشريك مؤسِّس، وسعر تفضيلي مثبّت لمدة 2-3 سنوات. المدارس الإضافية مرحّب فيها على المنصّة بالأسعار العادية بعد ما تسكّر دفعة المؤسِّسين. هذي مو تجربة مجانية -- هي شراكة طويلة الأمد بسعر مخفّض ومفصّلة على حجم قسمك.',
  },
  'mkt.schools.fs.faq.cost.q': {
    en: 'How much does it cost?',
    ar: 'كم تكلفته؟',
  },
  'mkt.schools.fs.faq.cost.a': {
    en: 'Founding Schools Programme pricing starts at £4,000 per year for the first 10 schools only -- heavily anchored against our projected Standard Pricing of £8,000 per year from August 2026. Exact package scales with department size and is agreed during your onboarding call. Schools that joined in wave 1 at £3,000 are grandfathered at that rate. Book a call to lock in your founding price before the cohort closes.',
    ar: 'أسعار برنامج المدارس المؤسِّسة تبدأ من £4,000 بالسنة لأول 10 مدارس بس -- بخصم كبير مقابل سعرنا العادي المتوقّع £8,000 بالسنة من أغسطس 2026. الباقة بالضبط تكبر مع حجم القسم وتُتّفق عليها أثناء مكالمة الإعداد. المدارس اللي انضمّت في الموجة الأولى بـ £3,000 تبقى محتفظة بذاك السعر. احجز مكالمة عشان تثبّت سعرك المؤسِّس قبل ما تسكّر الدفعة.',
  },
  'mkt.schools.fs.faq.access.q': {
    en: 'How do students and teachers get access?',
    ar: 'كيف يحصل الطلاب والمعلّمون الوصول؟',
  },
  'mkt.schools.fs.faq.access.a': {
    en: 'Once your school is onboarded, we set up your admin account and bulk-create all student and teacher accounts for you. Students and teachers can also join by entering your unique school code when they register themselves.',
    ar: 'أول ما تتجهّز مدرستك، نسوّي لك حساب الإدارة وننشئ كل حسابات الطلاب والمعلّمين بالجملة. الطلاب والمعلّمون يقدرون كمان ينضمّون بإدخال كود مدرستك الخاص لمّا يسجّلون بنفسهم.',
  },
  'mkt.schools.fs.faq.excel.q': {
    en: 'How does the Excel bulk upload work?',
    ar: 'كيف يشتغل الرفع بالجملة عبر Excel؟',
  },
  'mkt.schools.fs.faq.excel.a': {
    en: 'Download our simple Excel template from your admin dashboard. Add your students and teachers (name, email, year group), save the file, and upload it. The platform creates all accounts instantly and sends login details by email. No IT support or technical setup required.',
    ar: 'حمّل قالب Excel البسيط حقّنا من لوحة الإدارة. ضيف طلابك ومعلّميك (الاسم، الإيميل، السنة الدراسية)، احفظ الملف، وارفعه. المنصّة تنشئ كل الحسابات على طول وترسل بيانات الدخول بالإيميل. ما يحتاج دعم IT ولا إعداد تقني.',
  },
  'mkt.schools.fs.faq.admin.q': {
    en: 'What admin controls does the school have?',
    ar: 'شنو صلاحيات الإدارة اللي عند المدرسة؟',
  },
  'mkt.schools.fs.faq.admin.a': {
    en: 'Your school admin account lets you manage all student and teacher accounts, view department-wide analytics, set and track assignments, generate progress reports, and control which features are visible to students. You can also create sub-admin accounts for heads of year or class teachers.',
    ar: 'حساب إدارة مدرستك يخلّيك تدير كل حسابات الطلاب والمعلّمين، تشوف تحليلات على مستوى القسم، تحضّر وتتابع المهام، تجهّز تقارير التقدّم، وتتحكّم بأي مزايا تظهر للطلاب. تقدر كمان تنشئ حسابات إدارة فرعية لرؤساء السنوات أو معلّمي الصف.',
  },
  'mkt.schools.fs.faq.boards.q': {
    en: 'Which exam boards do you cover?',
    ar: 'أي بوردات امتحان تغطّون؟',
  },
  'mkt.schools.fs.faq.boards.a': {
    en: "We support all major boards: AQA, Edexcel, OCR, WJEC/Eduqas, and IGCSE/CAIE. Your school selects one exam board during setup and all content -- lessons, resources, mark schemes, and AI feedback -- is tailored to that board's specification.",
    ar: 'ندعم كل البوردات الرئيسية: AQA و Edexcel و OCR و WJEC/Eduqas و IGCSE/CAIE. مدرستك تختار بورد واحد عند الإعداد وكل المحتوى -- الدروس، الموارد، معايير التصحيح، وتغذية الـ AI الراجعة -- يتفصّل على منهج ذاك البورد.',
  },
  'mkt.schools.fs.faq.gdpr.q': {
    en: 'Is the platform GDPR compliant?',
    ar: 'هل المنصّة متوافقة مع GDPR؟',
  },
  'mkt.schools.fs.faq.gdpr.a': {
    en: "Yes. We are GDPR compliant. We do not sell student data and we do not use behavioural advertising networks. We use a defined set of named sub-processors to operate the service (hosting, payment processing, error monitoring, analytics), each listed with purpose and location in our Data Processing page and Privacy Policy. You can manage non-essential cookies via 'Manage Cookies'. We can sign a Data Processing Agreement with your school.",
    ar: 'إي. إحنا متوافقين مع GDPR. ما نبيع بيانات الطلاب وما نستخدم شبكات إعلانات سلوكية. نستخدم مجموعة محدّدة ومسمّاة من المعالِجين الفرعيين لتشغيل الخدمة (الاستضافة، معالجة الدفع، مراقبة الأخطاء، التحليلات)، كل واحد مذكور بغرضه وموقعه في صفحة معالجة البيانات وسياسة الخصوصية حقّنا. تقدر تدير الكوكيز غير الأساسية عبر "Manage Cookies". نقدر نوقّع اتفاقية معالجة بيانات مع مدرستك.',
  },
  'mkt.schools.fs.faq.after.q': {
    en: 'What happens after the Founding Schools Programme?',
    ar: 'شنو يصير بعد برنامج المدارس المؤسِّسة؟',
  },
  'mkt.schools.fs.faq.after.a': {
    en: 'Founding schools lock in preferential pricing for 2-3 years. Post-programme standard pricing will be significantly higher. The exact terms are agreed during your onboarding call.',
    ar: 'المدارس المؤسِّسة تثبّت سعر تفضيلي لمدة 2-3 سنوات. السعر العادي بعد البرنامج بيكون أعلى بوايد. الشروط بالضبط تُتّفق عليها أثناء مكالمة الإعداد.',
  },

  // ── Hero feature pills ─────────────────────────────────────────────
  'mkt.schools.fs.hero.pill.1': {
    en: 'Only 10 founding schools',
    ar: '10 مدارس مؤسِّسة بس',
  },
  'mkt.schools.fs.hero.pill.2': {
    en: 'Significant time saved on planning and marking',
    ar: 'توفير وايد للوقت على التحضير والتصحيح',
  },
  'mkt.schools.fs.hero.pill.3': {
    en: 'Ofsted-aligned department reporting',
    ar: 'تقارير القسم متوافقة مع Ofsted',
  },

  // ── Try before you buy (demo) section ──────────────────────────────
  'mkt.schools.fs.demo.badge': {
    en: 'Interactive Demo',
    ar: 'ديمو تفاعلي',
  },
  'mkt.schools.fs.demo.title': {
    en: 'Explore the Full Platform -- No Signup Required',
    ar: 'استكشف المنصّة كاملة -- بدون تسجيل',
  },
  'mkt.schools.fs.demo.body': {
    en: 'Navigate a complete school dashboard with sample data. Click through students, classes, analytics, and reports. See exactly what your school gets.',
    ar: 'تنقّل في لوحة مدرسة كاملة ببيانات تجريبية. اضغط بين الطلاب والصفوف والتحليلات والتقارير. شوف بالضبط شنو بتحصل مدرستك.',
  },
  'mkt.schools.fs.demo.card.dashboard.title': {
    en: 'School Dashboard',
    ar: 'لوحة المدرسة',
  },
  'mkt.schools.fs.demo.card.dashboard.desc': {
    en: 'Overview of all year groups',
    ar: 'نظرة عامة على كل السنوات الدراسية',
  },
  'mkt.schools.fs.demo.card.analytics.title': {
    en: 'Student Analytics',
    ar: 'تحليلات الطلاب',
  },
  'mkt.schools.fs.demo.card.analytics.desc': {
    en: 'Drill down to individual student level',
    ar: 'تعمّق لين مستوى الطالب الفرد',
  },
  'mkt.schools.fs.demo.card.reports.title': {
    en: 'Class Reports',
    ar: 'تقارير الصف',
  },
  'mkt.schools.fs.demo.card.reports.desc': {
    en: 'Personalised reports per class',
    ar: 'تقارير مخصّصة لكل صف',
  },
  'mkt.schools.fs.demo.card.teachers.title': {
    en: 'Teacher Insights',
    ar: 'رؤى المعلّمين',
  },
  'mkt.schools.fs.demo.card.teachers.desc': {
    en: 'See teacher-level performance data',
    ar: 'شوف بيانات الأداء على مستوى المعلّم',
  },
  'mkt.schools.fs.demo.explore': {
    en: 'Explore',
    ar: 'استكشف',
  },
  'mkt.schools.fs.demo.launch': {
    en: 'Launch Interactive Demo',
    ar: 'افتح الديمو التفاعلي',
  },
  'mkt.schools.fs.demo.no_signup': {
    en: 'No signup, no email, completely free to explore',
    ar: 'بدون تسجيل، بدون إيميل، استكشاف ببلاش بالكامل',
  },

  // ── Value proposition section ──────────────────────────────────────
  'mkt.schools.fs.value.title': {
    en: 'Why Schools Join the Founding Programme',
    ar: 'ليش المدارس تنضمّ لبرنامج المؤسِّسين',
  },
  'mkt.schools.fs.value.body': {
    en: 'Founding schools get more than a platform -- they get a partnership that shapes the future of English teaching.',
    ar: 'المدارس المؤسِّسة تحصل أكثر من منصّة -- تحصل شراكة تشكّل مستقبل تدريس الإنجليزي.',
  },
  'mkt.schools.fs.value.founding_partner': {
    en: 'FOUNDING PARTNER',
    ar: 'شريك مؤسِّس',
  },
  'mkt.schools.fs.value.programme_name': {
    en: 'Founding Schools Programme',
    ar: 'برنامج المدارس المؤسِّسة',
  },
  'mkt.schools.fs.value.programme_sub': {
    en: 'First 10 schools -- 2026 founding rate',
    ar: 'أول 10 مدارس -- سعر التأسيس 2026',
  },
  'mkt.schools.fs.value.founding_tag': {
    en: 'Founding Pricing · 10 only',
    ar: 'سعر التأسيس · 10 بس',
  },
  'mkt.schools.fs.value.year': {
    en: '/ year',
    ar: '/ بالسنة',
  },
  'mkt.schools.fs.value.standard_tag': {
    en: 'Standard Pricing (estimated)',
    ar: 'السعر العادي (تقديري)',
  },
  'mkt.schools.fs.value.locked_note': {
    en: 'Founding rate locked for 2–3 years. Tailored to your department size and discussed during your onboarding call.',
    ar: 'سعر التأسيس مثبّت لمدة 2–3 سنوات. مفصّل على حجم قسمك ويُناقَش أثناء مكالمة الإعداد.',
  },
  'mkt.schools.fs.value.feat.1': {
    en: 'Full platform access -- all features, all students, all teachers',
    ar: 'وصول كامل للمنصّة -- كل المزايا، كل الطلاب، كل المعلّمين',
  },
  'mkt.schools.fs.value.feat.2': {
    en: 'Choose your exam board (AQA, Edexcel, OCR, WJEC, IGCSE/CAIE)',
    ar: 'اختر بورد امتحانك (AQA, Edexcel, OCR, WJEC, IGCSE/CAIE)',
  },
  'mkt.schools.fs.value.feat.3': {
    en: 'Early access to new features',
    ar: 'وصول مبكّر للمزايا الجديدة',
  },
  'mkt.schools.fs.value.feat.4': {
    en: 'Direct product input and feedback loop',
    ar: 'تأثير مباشر على المنتج وقناة ملاحظات',
  },
  'mkt.schools.fs.value.feat.5': {
    en: 'Priority onboarding and dedicated support',
    ar: 'إعداد بأولوية ودعم مخصّص',
  },
  'mkt.schools.fs.value.feat.6': {
    en: 'Locked preferential pricing for 2-3 years',
    ar: 'سعر تفضيلي مثبّت لمدة 2-3 سنوات',
  },
  'mkt.schools.fs.value.feat.7': {
    en: 'Founding partner recognition',
    ar: 'تكريم كشريك مؤسِّس',
  },
  'mkt.schools.fs.value.cta_book': {
    en: 'Book a Call to Discuss',
    ar: 'احجز مكالمة للنقاش',
  },
  'mkt.schools.fs.value.post.title': {
    en: 'Post-Programme Pricing',
    ar: 'الأسعار بعد البرنامج',
  },
  'mkt.schools.fs.value.post.sub': {
    en: 'After the founding cohort closes',
    ar: 'بعد ما تسكّر دفعة المؤسِّسين',
  },
  'mkt.schools.fs.value.post.higher': {
    en: 'Significantly higher',
    ar: 'أعلى بوايد',
  },
  'mkt.schools.fs.value.post.higher_sub': {
    en: 'Standard pricing will reflect the full value of the platform.',
    ar: 'السعر العادي بيعكس القيمة الكاملة للمنصّة.',
  },
  'mkt.schools.fs.value.post.why_join': {
    en: 'Why join now?',
    ar: 'ليش تنضمّ الحين؟',
  },
  'mkt.schools.fs.value.post.why_body': {
    en: 'The first 10 schools to sign lock in founding-partner rates for 2-3 years. Schools joining after the founding cohort closes pay standard (higher) rates.',
    ar: 'أول 10 مدارس توقّع تثبّت أسعار الشريك المؤسِّس لمدة 2-3 سنوات. المدارس اللي تنضمّ بعد ما تسكّر دفعة المؤسِّسين تدفع الأسعار العادية (الأعلى).',
  },
  'mkt.schools.fs.value.post.no_early': {
    en: 'No early features access',
    ar: 'بدون وصول مبكّر للمزايا',
  },
  'mkt.schools.fs.value.post.no_input': {
    en: 'No direct product input',
    ar: 'بدون تأثير مباشر على المنتج',
  },
  'mkt.schools.fs.value.post.no_locked': {
    en: 'No locked preferential pricing',
    ar: 'بدون سعر تفضيلي مثبّت',
  },
  'mkt.schools.fs.value.post.no_recognition': {
    en: 'No founding partner recognition',
    ar: 'بدون تكريم كشريك مؤسِّس',
  },
  'mkt.schools.fs.value.post.standard_onboarding': {
    en: 'Standard onboarding',
    ar: 'إعداد عادي',
  },
  'mkt.schools.fs.value.post.full_access': {
    en: 'Full platform access',
    ar: 'وصول كامل للمنصّة',
  },
  'mkt.schools.fs.value.reserved_note': {
    en: 'Founding partner pricing is reserved for the first 10 schools to sign. Book a call to secure your founding place -- later schools are welcome at standard rates.',
    ar: 'سعر الشريك المؤسِّس محجوز لأول 10 مدارس توقّع. احجز مكالمة عشان تأمّن مكانك المؤسِّس -- المدارس المتأخّرة مرحّب فيها بالأسعار العادية.',
  },

  // ── Feature showcase section ───────────────────────────────────────
  'mkt.schools.fs.showcase.body': {
    en: 'Built to raise attainment, reduce workload, and give leadership full visibility across every class and year group.',
    ar: 'مبني يرفع التحصيل، يقلّل الضغط، ويعطي الإدارة وضوح كامل عبر كل صف وسنة دراسية.',
  },

  // ── Content creation preview (for-schools) ─────────────────────────
  'mkt.schools.fs.content.eyebrow': {
    en: 'For Teachers',
    ar: 'للمعلّمين',
  },
  'mkt.schools.fs.content.title': {
    en: 'Generate Lessons, Worksheets & Presentations Instantly',
    ar: 'جهّز دروس وأوراق عمل وعروض تقديمية على طول',
  },
  'mkt.schools.fs.content.body': {
    en: 'Stop spending evenings making resources. Teachers on The English Hub can instantly generate fully-formed lesson plans, printable worksheets, and classroom presentations from the platform -- all mapped to your exam board specification.',
    ar: 'بطّل تضيّع أمسياتك في تجهيز الموارد. المعلّمون على The English Hub يقدرون يجهّزون على طول خطط دروس متكاملة، أوراق عمل للطباعة، وعروض صفّية من المنصّة -- كلها مربوطة بمنهج بوردك.',
  },
  'mkt.schools.fs.content.point.1': {
    en: 'Lesson plans with teacher notes and differentiation built in',
    ar: 'خطط دروس مع ملاحظات المعلّم والتفاوت مدمج فيها',
  },
  'mkt.schools.fs.content.point.2': {
    en: 'Printable worksheets editable before download',
    ar: 'أوراق عمل للطباعة قابلة للتعديل قبل التحميل',
  },
  'mkt.schools.fs.content.point.3': {
    en: 'Slide decks with learning objectives and discussion prompts',
    ar: 'شرائح مع أهداف تعلّم وأسئلة نقاش',
  },
  'mkt.schools.fs.content.point.4': {
    en: 'Practice assessments with auto-marking',
    ar: 'تقييمات تدريبية مع تصحيح تلقائي',
  },
  'mkt.schools.fs.content.cta': {
    en: 'See It in a Demo',
    ar: 'شوفها في الديمو',
  },
  'mkt.schools.fs.content.gen.title': {
    en: 'AI Lesson Generator',
    ar: 'مولّد الدروس بالـ AI',
  },
  'mkt.schools.fs.content.gen.prompt': {
    en: 'Generate a lesson plan for...',
    ar: 'جهّز خطة درس لـ...',
  },
  'mkt.schools.fs.content.gen.example': {
    en: '"AQA Language Paper 2 -- Viewpoints & Perspectives, Year 11"',
    ar: '"AQA Language Paper 2 -- Viewpoints & Perspectives, Year 11"',
  },
  'mkt.schools.fs.content.gen.generating': {
    en: 'Generating...',
    ar: 'يجهّز...',
  },

  // ── Analytics preview (for-schools) ────────────────────────────────
  'mkt.schools.fs.analytics.dept_overview': {
    en: 'Department Overview',
    ar: 'نظرة عامة على القسم',
  },
  'mkt.schools.fs.analytics.all_groups': {
    en: 'All Year Groups -- Live Data',
    ar: 'كل السنوات الدراسية -- بيانات حيّة',
  },
  'mkt.schools.fs.analytics.live': {
    en: 'Live',
    ar: 'مباشر',
  },
  'mkt.schools.fs.analytics.metric.y11_avg.label': {
    en: 'Year 11 Avg Score',
    ar: 'متوسّط درجة Year 11',
  },
  'mkt.schools.fs.analytics.metric.y11_avg.trend': {
    en: '+4% this month',
    ar: '+4% هذا الشهر',
  },
  'mkt.schools.fs.analytics.metric.at_risk.label': {
    en: 'At-Risk Students',
    ar: 'الطلاب المعرّضون للخطر',
  },
  'mkt.schools.fs.analytics.metric.at_risk.trend': {
    en: 'Flagged for intervention',
    ar: 'مُعلَّمون للتدخّل',
  },
  'mkt.schools.fs.analytics.metric.completion.label': {
    en: 'Completion Rate',
    ar: 'نسبة الإنجاز',
  },
  'mkt.schools.fs.analytics.metric.completion.trend': {
    en: 'Across all year groups',
    ar: 'عبر كل السنوات الدراسية',
  },
  'mkt.schools.fs.analytics.metric.top_class.label': {
    en: 'Top Performing Class',
    ar: 'الصف الأعلى أداءً',
  },
  'mkt.schools.fs.analytics.metric.top_class.trend': {
    en: '84% average',
    ar: 'متوسّط 84%',
  },
  'mkt.schools.fs.analytics.year_comparison': {
    en: 'Year Group Comparison',
    ar: 'مقارنة السنوات الدراسية',
  },
  'mkt.schools.fs.analytics.eyebrow': {
    en: 'For School Leaders',
    ar: 'لقادة المدارس',
  },
  'mkt.schools.fs.analytics.title': {
    en: 'Real-Time Progress Across Every Year Group',
    ar: 'تقدّم لحظة بلحظة عبر كل سنة دراسية',
  },
  'mkt.schools.fs.analytics.body': {
    en: 'School admins and heads of department get a live overview of progress across all classes and year groups. Identify at-risk students before results day. Compare class performance. Generate department reports aligned to common Ofsted English subject deep-dive criteria.',
    ar: 'مدراء المدرسة ورؤساء الأقسام يحصلون نظرة حيّة على التقدّم عبر كل الصفوف والسنوات الدراسية. اكتشف الطلاب المعرّضين للخطر قبل يوم النتائج. قارن أداء الصفوف. جهّز تقارير القسم متوافقة مع معايير Ofsted للتعمّق في مادة الإنجليزي.',
  },
  'mkt.schools.fs.analytics.point.1': {
    en: 'Live dashboard across all year groups and classes',
    ar: 'لوحة حيّة عبر كل السنوات الدراسية والصفوف',
  },
  'mkt.schools.fs.analytics.point.2': {
    en: 'At-risk student alerts with suggested interventions',
    ar: 'تنبيهات للطلاب المعرّضين للخطر مع تدخّلات مقترحة',
  },
  'mkt.schools.fs.analytics.point.3': {
    en: 'Class-by-class and student-by-student drill down',
    ar: 'تعمّق صف بصف وطالب بطالب',
  },
  'mkt.schools.fs.analytics.point.4': {
    en: 'Department reports aligned to Ofsted English subject deep-dive criteria',
    ar: 'تقارير القسم متوافقة مع معايير Ofsted للتعمّق في مادة الإنجليزي',
  },
  'mkt.schools.fs.analytics.point.5': {
    en: 'Comparison against previous cohorts and national averages',
    ar: 'مقارنة مع الدفعات السابقة والمتوسّطات الوطنية',
  },
  'mkt.schools.fs.analytics.point.6': {
    en: 'An internal progress estimate from practice and mock activity to help target teaching support',
    ar: 'تقدير تقدّم داخلي من نشاط التدريب والاختبارات التجريبية يساعد في توجيه الدعم التدريسي',
  },
  'mkt.schools.fs.analytics.disclaimer': {
    en: 'The platform produces an internal progress estimate from a student’s practice and mock activity to help teachers see where to focus support. This is a teaching aid only — not a predicted grade for any awarding body, not a substitute for any exam-board or centre-assessment process, and not used to determine results when a student misses an exam (those are decided solely by the awarding body).',
    ar: 'المنصّة تطلّع تقدير تقدّم داخلي من نشاط التدريب والاختبارات التجريبية حق الطالب عشان تساعد المعلّمين يشوفون وين يركّزون الدعم. هذي أداة تدريسية بس — مو درجة متوقّعة لأي جهة منح، ومو بديل عن أي عملية بورد امتحان أو تقييم مركز، وما تُستخدم لتحديد النتائج لمّا يفوت الطالب امتحان (هذي تقرّرها جهة المنح وحدها).',
  },
  'mkt.schools.fs.analytics.cta': {
    en: 'See Full Demo',
    ar: 'شوف الديمو كامل',
  },

  // ── User management section ────────────────────────────────────────
  'mkt.schools.fs.users.badge': {
    en: 'Admin Controls',
    ar: 'صلاحيات الإدارة',
  },
  'mkt.schools.fs.users.title': {
    en: 'Bulk Upload. Instant Access. Zero Friction.',
    ar: 'رفع بالجملة. وصول فوري. بدون أي عقبات.',
  },
  'mkt.schools.fs.users.body': {
    en: 'No IT department needed. Get your entire school live in one afternoon.',
    ar: 'ما يحتاج قسم IT. خلّي مدرستك كاملة شغّالة في عصرية وحدة.',
  },
  'mkt.schools.fs.users.admin.title': {
    en: 'School Admin Account',
    ar: 'حساب إدارة المدرسة',
  },
  'mkt.schools.fs.users.admin.point.1': {
    en: 'Manage all student and teacher accounts',
    ar: 'إدارة كل حسابات الطلاب والمعلّمين',
  },
  'mkt.schools.fs.users.admin.point.2': {
    en: 'Create sub-admin accounts for teachers',
    ar: 'إنشاء حسابات إدارة فرعية للمعلّمين',
  },
  'mkt.schools.fs.users.admin.point.3': {
    en: 'Set school-wide and class-level permissions',
    ar: 'ضبط الصلاحيات على مستوى المدرسة والصف',
  },
  'mkt.schools.fs.users.admin.point.4': {
    en: 'View department-wide analytics',
    ar: 'عرض تحليلات على مستوى القسم',
  },
  'mkt.schools.fs.users.excel.title': {
    en: 'Excel Bulk Upload',
    ar: 'رفع بالجملة عبر Excel',
  },
  'mkt.schools.fs.users.excel.point.1': {
    en: 'Download our simple Excel template',
    ar: 'حمّل قالب Excel البسيط حقّنا',
  },
  'mkt.schools.fs.users.excel.point.2': {
    en: 'Add names, emails, year groups',
    ar: 'ضيف الأسماء والإيميلات والسنوات الدراسية',
  },
  'mkt.schools.fs.users.excel.point.3': {
    en: 'Upload once -- all accounts created instantly',
    ar: 'ارفع مرة وحدة -- كل الحسابات تُنشأ على طول',
  },
  'mkt.schools.fs.users.excel.point.4': {
    en: 'Login details sent to each student and teacher',
    ar: 'بيانات الدخول تُرسل لكل طالب ومعلّم',
  },
  'mkt.schools.fs.users.self.title': {
    en: 'Self-Registration Option',
    ar: 'خيار التسجيل الذاتي',
  },
  'mkt.schools.fs.users.self.point.1': {
    en: 'Share your unique school code',
    ar: 'شارك كود مدرستك الخاص',
  },
  'mkt.schools.fs.users.self.point.2': {
    en: 'Students register themselves using the code',
    ar: 'الطلاب يسجّلون بنفسهم باستخدام الكود',
  },
  'mkt.schools.fs.users.self.point.3': {
    en: 'Auto-linked to your school account',
    ar: 'يُربطون تلقائياً بحساب مدرستك',
  },
  'mkt.schools.fs.users.self.point.4': {
    en: 'Admin approval toggle available',
    ar: 'خيار موافقة الإدارة متوفّر',
  },
  'mkt.schools.fs.users.template.sub': {
    en: 'Download from your admin dashboard',
    ar: 'حمّل من لوحة الإدارة حقّتك',
  },
  'mkt.schools.fs.users.template.col.first': {
    en: 'First Name',
    ar: 'الاسم الأول',
  },
  'mkt.schools.fs.users.template.col.last': {
    en: 'Last Name',
    ar: 'اسم العائلة',
  },
  'mkt.schools.fs.users.template.col.email': {
    en: 'Email',
    ar: 'البريد الإلكتروني',
  },
  'mkt.schools.fs.users.template.col.year': {
    en: 'Year Group',
    ar: 'السنة الدراسية',
  },
  'mkt.schools.fs.users.template.note': {
    en: 'Upload this file and all accounts are created instantly. No IT support needed.',
    ar: 'ارفع هذا الملف وكل الحسابات تُنشأ على طول. ما يحتاج دعم IT.',
  },

  // ── How it works section headings ──────────────────────────────────
  'mkt.schools.fs.getting_started.badge': {
    en: 'Getting Started',
    ar: 'البداية',
  },
  'mkt.schools.fs.getting_started.title': {
    en: 'Up and Running in 3 Steps',
    ar: 'جاهز وشغّال في 3 خطوات',
  },
  'mkt.schools.fs.getting_started.body': {
    en: 'Most schools are fully live within a single afternoon. No IT department required.',
    ar: 'أغلب المدارس تكون شغّالة بالكامل خلال عصرية وحدة. ما يحتاج قسم IT.',
  },
  'mkt.schools.fs.getting_started.step': {
    en: 'Step',
    ar: 'خطوة',
  },
  'mkt.schools.fs.getting_started.cta': {
    en: 'Book a 20-Minute Call',
    ar: 'احجز مكالمة 20 دقيقة',
  },

  // ── Testimonials section ───────────────────────────────────────────
  'mkt.schools.fs.testi.badge': {
    en: 'From Schools Using the Platform',
    ar: 'من المدارس اللي تستخدم المنصّة',
  },
  'mkt.schools.fs.testi.title': {
    en: "Founding teachers' words, coming soon.",
    ar: 'كلام المعلّمين المؤسِّسين، جاي قريب.',
  },
  'mkt.schools.fs.testi.body': {
    en: 'We are launching now. Real testimonials will appear here as the first Founding Schools join the programme. Be one of them.',
    ar: 'إحنا في مرحلة الإطلاق الحين. الشهادات الحقيقية بتظهر هني أول ما تنضمّ المدارس المؤسِّسة الأولى للبرنامج. كن منهم.',
  },
  'mkt.schools.fs.testi.empty': {
    en: "We are at launch and we say so plainly. As Founding Schools come on board, their teachers' words will sit here - verified, attributable, and used only with explicit consent.",
    ar: 'إحنا في مرحلة الإطلاق ونقولها بصراحة. أول ما تنضمّ المدارس المؤسِّسة، كلام معلّميها بيكون هني - موثّق، منسوب لأصحابه، ويُستخدم بس بموافقة صريحة.',
  },

  // ── Comparison table section ───────────────────────────────────────
  'mkt.schools.fs.compare.badge': {
    en: 'Value Comparison',
    ar: 'مقارنة القيمة',
  },
  'mkt.schools.fs.compare.title': {
    en: 'School Partnership vs Individual Subscriptions',
    ar: 'شراكة المدرسة مقابل الاشتراكات الفردية',
  },
  'mkt.schools.fs.compare.body': {
    en: 'The school partnership is not just better value -- it unlocks features that individual subscriptions simply do not include.',
    ar: 'شراكة المدرسة مو بس قيمة أفضل -- تفتح مزايا الاشتراكات الفردية ما تشملها أصلاً.',
  },
  'mkt.schools.fs.compare.col.feature': {
    en: 'Feature',
    ar: 'الميزة',
  },
  'mkt.schools.fs.compare.col.school': {
    en: 'School Partnership',
    ar: 'شراكة المدرسة',
  },
  'mkt.schools.fs.compare.col.school_founding': {
    en: 'Founding: £4,000/year',
    ar: 'تأسيس: £4,000 بالسنة',
  },
  'mkt.schools.fs.compare.col.school_first10': {
    en: 'First 10 schools only',
    ar: 'أول 10 مدارس بس',
  },
  'mkt.schools.fs.compare.col.individual': {
    en: 'Individual Subs',
    ar: 'اشتراكات فردية',
  },
  'mkt.schools.fs.compare.col.per_student': {
    en: 'Per student',
    ar: 'لكل طالب',
  },

  // ── Compliance pack section ────────────────────────────────────────
  'mkt.schools.fs.compliance.title': {
    en: 'Compliance pack - available on request',
    ar: 'حزمة الامتثال - متوفّرة عند الطلب',
  },
  'mkt.schools.fs.compliance.body_pre': {
    en: 'For DPOs and bursars. Email',
    ar: 'لمسؤولي حماية البيانات والمحاسبين. راسل',
  },
  'mkt.schools.fs.compliance.body_post': {
    en: 'and we will send the latest versions within one working day.',
    ar: 'وبنرسل لك أحدث النسخ خلال يوم عمل واحد.',
  },
  'mkt.schools.fs.compliance.dpa': {
    en: 'Data Processing Agreement (Word)',
    ar: 'اتفاقية معالجة البيانات (Word)',
  },
  'mkt.schools.fs.compliance.dpa_note': {
    en: '- available to schools on request during procurement',
    ar: '- متوفّرة للمدارس عند الطلب أثناء الشراء',
  },
  'mkt.schools.fs.compliance.dpia': {
    en: 'Data Protection Impact Assessment (PDF)',
    ar: 'تقييم أثر حماية البيانات (PDF)',
  },
  'mkt.schools.fs.compliance.dpia_note': {
    en: '- in preparation; not yet available for inspection',
    ar: '- قيد الإعداد؛ مو متوفّرة للفحص بعد',
  },
  'mkt.schools.fs.compliance.safeguard': {
    en: 'Safeguarding Policy (PDF)',
    ar: 'سياسة حماية الطلاب (PDF)',
  },
  'mkt.schools.fs.compliance.safeguard_note': {
    en: '- available to schools on request during procurement',
    ar: '- متوفّرة للمدارس عند الطلب أثناء الشراء',
  },
  'mkt.schools.fs.compliance.cyber': {
    en: 'Cyber Essentials certificate',
    ar: 'شهادة Cyber Essentials',
  },
  'mkt.schools.fs.compliance.cyber_note': {
    en: '- not currently held',
    ar: '- غير متوفّرة حالياً',
  },
  'mkt.schools.fs.compliance.vpat': {
    en: 'VPAT / accessibility conformance',
    ar: 'VPAT / مطابقة إمكانية الوصول',
  },
  'mkt.schools.fs.compliance.vpat_note': {
    en: '- not currently held',
    ar: '- غير متوفّرة حالياً',
  },

  // ── FAQ section headings (for-schools) ─────────────────────────────
  'mkt.schools.fs.faq.badge': {
    en: 'FAQs',
    ar: 'الأسئلة الشائعة',
  },
  'mkt.schools.fs.faq.title': {
    en: 'Frequently Asked Questions',
    ar: 'الأسئلة الشائعة',
  },
  'mkt.schools.fs.faq.sub': {
    en: 'Everything you need to know about The English Hub for schools.',
    ar: 'كل اللي تحتاج تعرفه عن The English Hub للمدارس.',
  },
  'mkt.schools.fs.faq.contact_pre': {
    en: 'Got a question not answered here?',
    ar: 'عندك سؤال ما لقيت جوابه هني؟',
  },
  'mkt.schools.fs.faq.contact_book': {
    en: 'Book a call',
    ar: 'احجز مكالمة',
  },
  'mkt.schools.fs.faq.contact_or_email': {
    en: 'or email',
    ar: 'أو راسل',
  },
  'mkt.schools.fs.faq.contact_post': {
    en: 'and we will get back to you within one working day.',
    ar: 'وبنرد عليك خلال يوم عمل واحد.',
  },

  // ── Book a call / contact form section ─────────────────────────────
  'mkt.schools.fs.book.title': {
    en: 'Book a 20-Minute Call',
    ar: 'احجز مكالمة 20 دقيقة',
  },
  'mkt.schools.fs.book.body': {
    en: 'Speak with our schools team. We will walk you through the platform, discuss pricing tailored to your department, and answer every question you have.',
    ar: 'كلّم فريق المدارس حقّنا. بنشرح لك المنصّة، نناقش أسعار مفصّلة على قسمك، ونجاوب كل أسئلتك.',
  },

  // ── Footer (for-schools) ───────────────────────────────────────────
  'mkt.schools.fs.footer.tagline': {
    en: 'Expert English courses for KS3, GCSE, IGCSE, and all major exam boards.',
    ar: 'دورات إنجليزي متخصّصة لـ KS3 و GCSE و IGCSE وكل بوردات الامتحان الرئيسية.',
  },
  'mkt.schools.fs.footer.link.schools': {
    en: 'For Schools',
    ar: 'للمدارس',
  },
  'mkt.schools.fs.footer.link.courses': {
    en: 'Courses',
    ar: 'الدورات',
  },
  'mkt.schools.fs.footer.link.practice': {
    en: 'Practice',
    ar: 'تدريب',
  },
  'mkt.schools.fs.footer.link.revision': {
    en: 'Revision',
    ar: 'المراجعة',
  },
  'mkt.schools.fs.footer.link.login': {
    en: 'Log in',
    ar: 'تسجيل الدخول',
  },
  'mkt.schools.fs.footer.rights': {
    en: 'All rights reserved.',
    ar: 'كل الحقوق محفوظة.',
  },

  /* ════ ABOUT > CONTENT VERIFICATION (src/app/about/content-verification) ════ */

  // ── Hero ───────────────────────────────────────────────────────────
  'about.cv.badge': {
    en: 'Methodology',
    ar: 'المنهجية',
  },
  'about.cv.h1': {
    en: 'Content Verification Methodology',
    ar: 'منهجية التحقّق من المحتوى',
  },
  'about.cv.intro': {
    en: 'How we check what we publish, where AI is used and where it stops, and how readers can raise an issue. Written for parents, teachers and school leaders who need to know what stands behind the content their students see.',
    ar: 'كيف نتأكّد من اللي ننشره، وين نستخدم الـ AI ووين نوقف، وكيف القارئ يقدر يبلّغ عن مشكلة. مكتوب للأهل والمعلّمين وقادة المدارس اللي يبون يعرفون شنو يقف ورا المحتوى اللي يشوفه طلابهم.',
  },
  'about.cv.last_reviewed': {
    en: 'Last reviewed:',
    ar: 'آخر مراجعة:',
  },

  // ── A. Why verification matters ────────────────────────────────────
  'about.cv.a.eyebrow': {
    en: 'A. Why verification matters',
    ar: 'A. ليش التحقّق مهم',
  },
  'about.cv.a.title': {
    en: 'English students rely on accurate sources',
    ar: 'طلاب الإنجليزي يعتمدون على مصادر دقيقة',
  },
  'about.cv.a.p1': {
    en: 'English revision depends on accurate quotations, clear interpretation, valid exam guidance and trustworthy feedback. A misremembered Macbeth line or a mark-scheme guidance point that is half-right can cost a student real marks in a closed-book exam. Verification is how we keep that surface area clean.',
    ar: 'مراجعة الإنجليزي تعتمد على اقتباسات دقيقة، تفسير واضح، توجيه امتحاني صحيح، وتغذية راجعة موثوقة. سطر Macbeth متذكّر غلط أو نقطة توجيه في معيار التصحيح نص صح تقدر تكلّف الطالب درجات حقيقية في امتحان مغلق الكتاب. التحقّق هو طريقتنا نخلّي هالمساحة نظيفة.',
  },
  'about.cv.a.p2': {
    en: 'We are an AI-assisted platform, not an AI-only platform. The role of human review is to catch the things AI confidently gets wrong: invented quotations, conflated characters, plausible-sounding but invalid mark-scheme language, and contextual claims that no source supports.',
    ar: 'إحنا منصّة بمساعدة الـ AI، مو منصّة AI بس. دور المراجعة البشرية إنها تمسك الأشياء اللي الـ AI يخطئ فيها بثقة: اقتباسات مخترعة، شخصيات مدموجة بالغلط، لغة معيار تصحيح تبدو منطقية بس غير صحيحة، وادّعاءات سياقية ما يدعمها أي مصدر.',
  },

  // ── B. Verification principles ─────────────────────────────────────
  'about.cv.b.eyebrow': {
    en: 'B. Verification principles',
    ar: 'B. مبادئ التحقّق',
  },
  'about.cv.b.title': {
    en: 'The principles we follow',
    ar: 'المبادئ اللي نتّبعها',
  },
  'about.cv.principle.accuracy.title': {
    en: 'Accuracy over speed',
    ar: 'الدقة قبل السرعة',
  },
  'about.cv.principle.accuracy.desc': {
    en: 'A correct, slightly later piece of content is better than a fast, wrong one. We hold material in review before publishing rather than ship it half-checked.',
    ar: 'محتوى صحيح ومتأخّر شوي أحسن من محتوى سريع وغلط. نحتفظ بالمادة قيد المراجعة قبل النشر بدل ما ننزّلها نص مفحوصة.',
  },
  'about.cv.principle.original.title': {
    en: 'Original content over copied material',
    ar: 'محتوى أصلي بدل المادة المنسوخة',
  },
  'about.cv.principle.original.desc': {
    en: 'Resources are written for The English Hub, not aggregated from other revision sites. Where we draw on public-domain texts or public specification information, the source is named.',
    ar: 'الموارد مكتوبة لـ The English Hub، مو مجمّعة من مواقع مراجعة ثانية. لمّا نعتمد على نصوص في الملك العام أو معلومات منهج عامة، نذكر المصدر.',
  },
  'about.cv.principle.human.title': {
    en: 'Human review for high-stakes content',
    ar: 'مراجعة بشرية للمحتوى الحسّاس',
  },
  'about.cv.principle.human.desc': {
    en: 'Mark-scheme guidance, set-text analysis and exam-style examples are reviewed by a human before they reach students. AI assists drafting; humans decide what ships.',
    ar: 'توجيه معيار التصحيح، تحليل النصوص المقرّرة، والأمثلة على نمط الامتحان يراجعها إنسان قبل ما توصل الطلاب. الـ AI يساعد في الصياغة؛ والبشر يقرّرون شنو ينشر.',
  },
  'about.cv.principle.transparent.title': {
    en: 'Transparent AI limitations',
    ar: 'حدود الـ AI بشفافية',
  },
  'about.cv.principle.transparent.desc': {
    en: 'Where AI generates or assists feedback, we say so. Students and teachers should treat AI feedback as formative practice support, not as official grading.',
    ar: 'لمّا الـ AI يولّد أو يساعد في التغذية الراجعة، نقولها. لازم الطلاب والمعلّمون يتعاملون مع تغذية الـ AI الراجعة كدعم تدريبي تكويني، مو كتصحيح رسمي.',
  },
  'about.cv.principle.copyright.title': {
    en: 'Clear copyright boundaries',
    ar: 'حدود واضحة لحقوق النشر',
  },
  'about.cv.principle.copyright.desc': {
    en: 'Public-domain texts are used where legally available. Copyright-protected texts are handled within fair dealing for criticism, review and quotation. Official exam-board materials are not reproduced without permission.',
    ar: 'نستخدم نصوص الملك العام لمّا تكون متاحة قانونياً. النصوص المحمية بحقوق النشر نتعامل معها ضمن الاستخدام العادل للنقد والمراجعة والاقتباس. مواد بوردات الامتحان الرسمية ما تُنسخ بدون إذن.',
  },
  'about.cv.principle.continuous.title': {
    en: 'Continuous correction',
    ar: 'تصحيح مستمر',
  },
  'about.cv.principle.continuous.desc': {
    en: 'Verification is not a one-off pass. User-reported errors are logged, reviewed and corrected, and significant corrections are noted on the affected page.',
    ar: 'التحقّق مو مرة وحدة وخلاص. الأخطاء اللي يبلّغ عنها المستخدمون تُسجّل وتُراجَع وتُصحّح، والتصحيحات المهمة تُذكر على الصفحة المتأثّرة.',
  },

  // ── C. Review categories ───────────────────────────────────────────
  'about.cv.c.eyebrow': {
    en: 'C. Review categories',
    ar: 'C. فئات المراجعة',
  },
  'about.cv.c.title': {
    en: 'Status labels we use internally',
    ar: 'تسميات الحالة اللي نستخدمها داخلياً',
  },
  'about.cv.c.body': {
    en: 'Every published page sits in one or more of these states. Surfacing the labels here keeps the framework honest: a reader can ask which category any specific page is in.',
    ar: 'كل صفحة منشورة تكون في حالة وحدة أو أكثر من هذي. إظهار التسميات هني يخلّي الإطار صادق: يقدر القارئ يسأل أي فئة فيها أي صفحة معيّنة.',
  },
  'about.cv.cat.draft.label': {
    en: 'Draft',
    ar: 'مسوّدة',
  },
  'about.cv.cat.draft.desc': {
    en: 'Initial draft, not yet published to the public site.',
    ar: 'مسوّدة أوّلية، ما تُنشر للموقع العام بعد.',
  },
  'about.cv.cat.ai_draft.label': {
    en: 'AI-assisted draft',
    ar: 'مسوّدة بمساعدة الـ AI',
  },
  'about.cv.cat.ai_draft.desc': {
    en: 'Drafted with AI assistance and awaiting human review.',
    ar: 'مكتوبة بمساعدة الـ AI وتنتظر مراجعة بشرية.',
  },
  'about.cv.cat.human.label': {
    en: 'Human reviewed',
    ar: 'مراجَعة بشرياً',
  },
  'about.cv.cat.human.desc': {
    en: 'A human editor has read the content end-to-end and signed it off.',
    ar: 'محرّر بشري قرأ المحتوى من البداية للنهاية واعتمده.',
  },
  'about.cv.cat.quote.label': {
    en: 'Quote checked',
    ar: 'الاقتباس مفحوص',
  },
  'about.cv.cat.quote.desc': {
    en: 'Quotations cross-referenced against a reliable source where one is available.',
    ar: 'الاقتباسات مقارنة مع مصدر موثوق لمّا يكون متوفّر.',
  },
  'about.cv.cat.board.label': {
    en: 'Exam-board aligned',
    ar: 'متوافق مع بورد الامتحان',
  },
  'about.cv.cat.board.desc': {
    en: 'Mapped against public specification information and the relevant assessment objectives.',
    ar: 'مربوط بمعلومات المنهج العامة وأهداف التقييم ذات الصلة.',
  },
  'about.cv.cat.updated.label': {
    en: 'Updated after user report',
    ar: 'محدّث بعد بلاغ مستخدم',
  },
  'about.cv.cat.updated.desc': {
    en: 'A reader flagged an issue; the content was reviewed and updated.',
    ar: 'قارئ بلّغ عن مشكلة؛ تمت مراجعة المحتوى وتحديثه.',
  },
  'about.cv.cat.archived.label': {
    en: 'Archived or replaced',
    ar: 'مؤرشف أو مُستبدَل',
  },
  'about.cv.cat.archived.desc': {
    en: 'No longer in active use. Kept on file for change history; superseded by a newer version.',
    ar: 'ما عاد مستخدم. محفوظ للسجلّ التاريخي؛ استبدلته نسخة أحدث.',
  },

  // ── D. Literature verification ─────────────────────────────────────
  'about.cv.d.eyebrow': {
    en: 'D. Literature verification',
    ar: 'D. التحقّق من الأدب',
  },
  'about.cv.d.title': {
    en: 'How we check quotations and analysis',
    ar: 'كيف نتحقّق من الاقتباسات والتحليل',
  },
  'about.cv.d.quotes.title': {
    en: 'Quotations checked against reliable sources',
    ar: 'الاقتباسات مفحوصة مقابل مصادر موثوقة',
  },
  'about.cv.d.quotes.desc': {
    en: 'Where a reliable text source exists (Project Gutenberg public-domain editions, Folger Shakespeare Library, the prescribed edition cited by the exam board), quotations are cross-referenced. If a quote cannot be sourced, it is removed.',
    ar: 'لمّا يكون فيه مصدر نص موثوق (طبعات Project Gutenberg في الملك العام، Folger Shakespeare Library، الطبعة المقرّرة اللي يذكرها بورد الامتحان)، الاقتباسات تتم مقارنتها. إذا ما قدرنا نوثّق اقتباس، نشيله.',
  },
  'about.cv.d.invented.title': {
    en: 'Invented quotes are removed',
    ar: 'الاقتباسات المخترعة تُشال',
  },
  'about.cv.d.invented.desc': {
    en: 'AI assistance can invent quotations that sound plausible. Any quote without an identifiable source is treated as suspect and either replaced with a verified line or removed.',
    ar: 'مساعدة الـ AI ممكن تخترع اقتباسات تبدو منطقية. أي اقتباس بدون مصدر معروف يُعتبر مشكوك فيه ويُستبدل بسطر موثّق أو يُشال.',
  },
  'about.cv.d.unsupported.title': {
    en: 'Unsupported claims are corrected',
    ar: 'الادّعاءات غير المدعومة تُصحّح',
  },
  'about.cv.d.unsupported.desc': {
    en: "Claims about a writer's biography, the historical context, or the reception of a text are checked against published criticism. Unverifiable claims are removed or softened.",
    ar: 'الادّعاءات عن سيرة الكاتب، السياق التاريخي، أو استقبال النص تُفحص مقابل النقد المنشور. الادّعاءات اللي ما نقدر نتحقّق منها تُشال أو تُخفّف.',
  },
  'about.cv.d.alternative.title': {
    en: 'Alternative interpretations are allowed',
    ar: 'التفسيرات البديلة مسموحة',
  },
  'about.cv.d.alternative.desc': {
    en: 'Where multiple readings of a text are defensible, we say so. We do not pretend a single critical interpretation is the only valid one.',
    ar: 'لمّا تكون فيه قراءات متعدّدة للنص يمكن الدفاع عنها، نقولها. ما نتظاهر إن تفسير نقدي واحد هو الوحيد الصحيح.',
  },

  // ── E. Language and writing resources ──────────────────────────────
  'about.cv.e.eyebrow': {
    en: 'E. Language and writing resources',
    ar: 'E. موارد اللغة والكتابة',
  },
  'about.cv.e.title': {
    en: 'How we check writing and language guidance',
    ar: 'كيف نتحقّق من توجيه الكتابة واللغة',
  },
  'about.cv.e.examples.strong': {
    en: 'Examples are checked for clarity and suitability.',
    ar: 'الأمثلة تُفحص للوضوح والملاءمة.',
  },
  'about.cv.e.examples.rest': {
    en: 'Sample sentences, annotated extracts and worked answers are reviewed for age-appropriateness and for whether they actually demonstrate the technique they claim to.',
    ar: 'الجمل النموذجية، المقتطفات المعلّقة، والإجابات المحلولة تُراجَع لمناسبتها للعمر وهل فعلاً توضّح التقنية اللي تدّعيها.',
  },
  'about.cv.e.terminology.strong': {
    en: 'Terminology is reviewed against published specifications.',
    ar: 'المصطلحات تُراجَع مقابل المناهج المنشورة.',
  },
  'about.cv.e.terminology.rest': {
    en: 'Where exam boards use specific labels for techniques, assessment objectives or paper components, we use the same labels.',
    ar: 'لمّا بوردات الامتحان تستخدم تسميات محدّدة للتقنيات أو أهداف التقييم أو أجزاء الورقة، نستخدم نفس التسميات.',
  },
  'about.cv.e.models.strong': {
    en: 'Model answers are reviewed for quality.',
    ar: 'الإجابات النموذجية تُراجَع للجودة.',
  },
  'about.cv.e.models.rest': {
    en: 'A "Grade 7" exemplar must actually reach Grade 7 against the relevant mark scheme. Drafts that do not are rewritten or relabelled.',
    ar: 'نموذج "Grade 7" لازم فعلاً يوصل Grade 7 مقابل معيار التصحيح ذي الصلة. المسوّدات اللي ما توصل تُعاد كتابتها أو تُعاد تسميتها.',
  },
  'about.cv.e.formative.strong': {
    en: 'Mark guidance remains formative, not official.',
    ar: 'توجيه الدرجات يبقى تكوينياً، مو رسمياً.',
  },
  'about.cv.e.formative.rest': {
    en: 'We can tell a student what a strong response looks like and where their writing falls short of that. We cannot - and do not - award official marks.',
    ar: 'نقدر نقول للطالب كيف تكون الإجابة القوية ووين كتابته تقصّر عنها. ما نقدر - وما نسوّي - منح درجات رسمية.',
  },

  // ── F. Exam-board alignment ────────────────────────────────────────
  'about.cv.f.eyebrow': {
    en: 'F. Exam-board alignment',
    ar: 'F. التوافق مع بورد الامتحان',
  },
  'about.cv.f.title': {
    en: 'Aligned, not endorsed',
    ar: 'متوافق، مو معتمد',
  },
  'about.cv.f.li1': {
    en: 'Resources may be mapped to assessment objectives and public specification information so students see the same vocabulary and structure they will meet in the exam room.',
    ar: 'الموارد ممكن تُربط بأهداف التقييم ومعلومات المنهج العامة عشان الطلاب يشوفون نفس المصطلحات والتركيب اللي بيواجهونه في قاعة الامتحان.',
  },
  'about.cv.f.li2.strong': {
    en: 'The English Hub is independent.',
    ar: 'The English Hub مستقل.',
  },
  'about.cv.f.li2.rest': {
    en: 'No exam board has endorsed, approved or partnered with the platform, and we do not represent ourselves as having any such relationship.',
    ar: 'ما فيه بورد امتحان اعتمد أو وافق أو دخل شراكة مع المنصّة، وما نقدّم نفسنا إن عندنا أي علاقة من هالنوع.',
  },
  'about.cv.f.li3': {
    en: 'Official exam-board materials (past papers, mark schemes, prescribed editions) are not reproduced on the platform without permission. Where we reference them, we point readers to the official source.',
    ar: 'مواد بوردات الامتحان الرسمية (الأوراق السابقة، معايير التصحيح، الطبعات المقرّرة) ما تُنسخ على المنصّة بدون إذن. لمّا نشير لها، نوجّه القرّاء للمصدر الرسمي.',
  },
  'about.cv.f.li4': {
    en: "Students preparing for an exam should always check the final requirements with their teacher and the board's official specification.",
    ar: 'الطلاب اللي يجهّزون لامتحان لازم دايماً يتأكّدون من المتطلّبات النهائية مع معلّمهم ومنهج البورد الرسمي.',
  },

  // ── G. AI-generated feedback ───────────────────────────────────────
  'about.cv.g.eyebrow': {
    en: 'G. AI-generated feedback',
    ar: 'G. تغذية راجعة من الـ AI',
  },
  'about.cv.g.title': {
    en: 'What AI feedback is and is not',
    ar: 'شنو تغذية الـ AI الراجعة وشنو مو هي',
  },
  'about.cv.g.can.title': {
    en: 'AI feedback can',
    ar: 'تغذية الـ AI الراجعة تقدر',
  },
  'about.cv.g.can.1': {
    en: 'Support formative practice with detailed written responses.',
    ar: 'تدعم التدريب التكويني بردود مكتوبة مفصّلة.',
  },
  'about.cv.g.can.2': {
    en: 'Highlight where a piece of writing is strong and where it is weak.',
    ar: 'تبيّن وين الكتابة قوية ووين ضعيفة.',
  },
  'about.cv.g.can.3': {
    en: 'Suggest specific, actionable next steps a student can try.',
    ar: 'تقترح خطوات تالية محدّدة وقابلة للتطبيق يقدر الطالب يجرّبها.',
  },
  'about.cv.g.can.4': {
    en: 'Save teachers time on repetitive feedback patterns.',
    ar: 'توفّر وقت المعلّمين على أنماط التغذية الراجعة المتكرّرة.',
  },
  'about.cv.g.cannot.title': {
    en: 'AI feedback cannot',
    ar: 'تغذية الـ AI الراجعة ما تقدر',
  },
  'about.cv.g.cannot.1': {
    en: 'Replace teacher professional judgement.',
    ar: 'تحلّ محل حكم المعلّم المهني.',
  },
  'about.cv.g.cannot.2': {
    en: 'Award official exam marks - that remains with the exam board.',
    ar: 'تمنح درجات امتحان رسمية - هذي تبقى عند بورد الامتحان.',
  },
  'about.cv.g.cannot.3': {
    en: 'Guarantee accuracy on every response - errors are possible.',
    ar: 'تضمن الدقة في كل رد - الأخطاء واردة.',
  },
  'about.cv.g.cannot.4': {
    en: 'Substitute for the official specification or mark scheme.',
    ar: 'تكون بديل عن المنهج الرسمي أو معيار التصحيح.',
  },
  'about.cv.g.note': {
    en: 'Students and teachers can challenge or report AI feedback at any point. We treat disputed feedback as a content issue and route it through the correction workflow below.',
    ar: 'الطلاب والمعلّمون يقدرون يعترضون أو يبلّغون عن تغذية الـ AI الراجعة في أي وقت. نتعامل مع التغذية الراجعة المتنازع عليها كمشكلة محتوى ونمرّرها عبر سير عمل التصحيح تحت.',
  },

  // ── H. Correction workflow ─────────────────────────────────────────
  'about.cv.h.eyebrow': {
    en: 'H. Correction workflow',
    ar: 'H. سير عمل التصحيح',
  },
  'about.cv.h.title': {
    en: 'How we handle a reported issue',
    ar: 'كيف نتعامل مع مشكلة مُبلَّغ عنها',
  },
  'about.cv.step.1.title': {
    en: 'User reports issue',
    ar: 'المستخدم يبلّغ عن مشكلة',
  },
  'about.cv.step.1.desc': {
    en: 'A reader spots something that looks wrong and uses the report-a-content-issue link.',
    ar: 'القارئ يلاحظ شي يبيّن غلط ويستخدم رابط الإبلاغ عن مشكلة في المحتوى.',
  },
  'about.cv.step.2.title': {
    en: 'Issue logged',
    ar: 'تسجيل المشكلة',
  },
  'about.cv.step.2.desc': {
    en: "The report is recorded with the page URL, the specific claim or quote, and the reporter's notes.",
    ar: 'البلاغ يُسجّل مع رابط الصفحة، الادّعاء أو الاقتباس المحدّد، وملاحظات المُبلِّغ.',
  },
  'about.cv.step.3.title': {
    en: 'Content reviewed',
    ar: 'مراجعة المحتوى',
  },
  'about.cv.step.3.desc': {
    en: 'An editor reviews the original source and the claim, plus surrounding pages that reference the same fact.',
    ar: 'محرّر يراجع المصدر الأصلي والادّعاء، بالإضافة للصفحات المحيطة اللي تشير لنفس المعلومة.',
  },
  'about.cv.step.4.title': {
    en: 'Correction made if needed',
    ar: 'يتم التصحيح إذا لزم',
  },
  'about.cv.step.4.desc': {
    en: 'If the report is valid, the page is updated. If it is a matter of interpretation, we note the alternative reading.',
    ar: 'إذا كان البلاغ صحيح، تُحدّث الصفحة. إذا كانت مسألة تفسير، نذكر القراءة البديلة.',
  },
  'about.cv.step.5.title': {
    en: 'Updated version published',
    ar: 'نشر النسخة المحدّثة',
  },
  'about.cv.step.5.desc': {
    en: 'The corrected version replaces the previous content. The page\'s "Last updated" date is bumped.',
    ar: 'النسخة المصحّحة تستبدل المحتوى السابق. ويُحدّث تاريخ "Last updated" حق الصفحة.',
  },
  'about.cv.step.6.title': {
    en: 'Significant corrections noted',
    ar: 'تُذكر التصحيحات المهمة',
  },
  'about.cv.step.6.desc': {
    en: 'For corrections that change the meaning of the page, a short note is added so returning visitors see what changed.',
    ar: 'للتصحيحات اللي تغيّر معنى الصفحة، تُضاف ملاحظة قصيرة عشان الزوّار العائدين يشوفون شنو تغيّر.',
  },

  // ── I. CTA ─────────────────────────────────────────────────────────
  'about.cv.cta.title': {
    en: 'Spotted something that does not look right?',
    ar: 'لاحظت شي يبيّن غلط؟',
  },
  'about.cv.cta.body': {
    en: 'Report it and we will review the page. Reports go to our editorial team, are logged, and acknowledged within one working day.',
    ar: 'بلّغ عنه وبنراجع الصفحة. البلاغات تروح لفريق التحرير حقّنا، تُسجّل، ويتم الردّ عليها خلال يوم عمل واحد.',
  },
  'about.cv.cta.report': {
    en: 'Report a content issue',
    ar: 'بلّغ عن مشكلة في المحتوى',
  },
  'about.cv.cta.email': {
    en: 'Email',
    ar: 'راسل',
  },
  'about.cv.cta.summary_link': {
    en: 'Read our shorter Verified Content summary →',
    ar: 'اقرأ ملخّصنا الأقصر للمحتوى الموثّق →',
  },

  /* ════════ SCHOOL PILOT PACK (src/app/for-schools/pilot/page.tsx) ════════ */

  // ── Hero ───────────────────────────────────────────────────────────
  'mkt.schools.pilot.hero.badge': {
    en: 'School Pilot Pack',
    ar: 'حزمة تجربة المدرسة',
  },
  'mkt.schools.pilot.hero.title': {
    en: 'A 90-day English improvement pilot for schools.',
    ar: 'تجربة 90 يوم لتحسين الإنجليزي للمدارس.',
  },
  'mkt.schools.pilot.hero.body': {
    en: 'A structured pilot to help schools baseline English needs, support targeted practice and review progress with clear usage and reporting data. Designed for British curriculum schools in the UK and overseas.',
    ar: 'تجربة منظّمة تساعد المدارس تحدّد احتياجات الإنجليزي من البداية، تدعم تدريب مستهدف، وتراجع التقدّم ببيانات استخدام وتقارير واضحة. مصمّمة لمدارس المنهج البريطاني في بريطانيا وبرّه.',
  },
  'mkt.schools.pilot.hero.cta_request': {
    en: 'Request a school pilot',
    ar: 'اطلب تجربة مدرسة',
  },
  'mkt.schools.pilot.hero.cta_back': {
    en: 'Back to For Schools',
    ar: 'رجوع لصفحة المدارس',
  },
  'mkt.schools.pilot.hero.pdf_note': {
    en: "A designed downloadable PDF is on the way. The page is print-friendly: use your browser's print menu to save a copy for your team.",
    ar: 'نسخة PDF مصمّمة للتحميل في الطريق. الصفحة مهيّأة للطباعة: استخدم قائمة الطباعة في متصفّحك عشان تحفظ نسخة لفريقك.',
  },

  // ── A. Who it is for ───────────────────────────────────────────────
  'mkt.schools.pilot.who.eyebrow': {
    en: 'A. Who it is for',
    ar: 'A. لمن هي',
  },
  'mkt.schools.pilot.who.title': {
    en: 'Built for English departments - UK and international British curriculum',
    ar: 'مصمّمة لأقسام اللغة الإنجليزية - المنهج البريطاني في بريطانيا ودولياً',
  },
  'mkt.schools.pilot.who.1': {
    en: 'Heads of English and English teaching teams',
    ar: 'رؤساء أقسام الإنجليزي وفِرَق تدريس الإنجليزي',
  },
  'mkt.schools.pilot.who.2': {
    en: 'Senior Leadership Teams (SLT) reviewing English provision',
    ar: 'فِرَق الإدارة العليا (SLT) اللي تراجع تقديم مادة الإنجليزي',
  },
  'mkt.schools.pilot.who.3': {
    en: 'British curriculum schools - UK and international',
    ar: 'مدارس المنهج البريطاني - في بريطانيا ودولياً',
  },
  'mkt.schools.pilot.who.4': {
    en: 'GCSE and IGCSE cohorts preparing for terminal exams',
    ar: 'دفعات GCSE و IGCSE اللي تجهّز للامتحانات النهائية',
  },
  'mkt.schools.pilot.who.5': {
    en: 'KS3 intervention groups closing skills gaps',
    ar: 'مجموعات تدخّل KS3 اللي تسدّ فجوات المهارات',
  },
  'mkt.schools.pilot.who.6': {
    en: 'EAL learners where the school needs structured English support',
    ar: 'متعلّمو EAL لمّا تحتاج المدرسة دعم إنجليزي منظّم',
  },
  'mkt.schools.pilot.who.7': {
    en: 'Gulf and international British curriculum schools using IGCSE pathways',
    ar: 'مدارس الخليج والمدارس الدولية بالمنهج البريطاني اللي تستخدم مسارات IGCSE',
  },

  // ── B. Pilot structure ─────────────────────────────────────────────
  'mkt.schools.pilot.structure.eyebrow': {
    en: 'B. Pilot structure',
    ar: 'B. هيكل التجربة',
  },
  'mkt.schools.pilot.structure.title': {
    en: 'Three phases over 90 days',
    ar: 'ثلاث مراحل على مدى 90 يوم',
  },
  'mkt.schools.pilot.structure.body': {
    en: 'A structured cycle: get the cohort live, run targeted practice, and finish with a written review that a head of English can put in front of SLT.',
    ar: 'دورة منظّمة: خلّي الدفعة شغّالة، شغّل تدريب مستهدف، واختم بمراجعة مكتوبة يقدر رئيس قسم الإنجليزي يحطّها قدّام الـ SLT.',
  },
  'mkt.schools.pilot.phase_word': {
    en: 'Phase',
    ar: 'مرحلة',
  },
  'mkt.schools.pilot.phase1.title': {
    en: 'Setup and baseline',
    ar: 'الإعداد وخط الأساس',
  },
  'mkt.schools.pilot.phase1.duration': {
    en: 'Weeks 1-3',
    ar: 'الأسابيع 1-3',
  },
  'mkt.schools.pilot.phase1.point.1': {
    en: 'Confirm the year group(s) and cohort the pilot will cover',
    ar: 'حدّد السنة (أو السنوات) الدراسية والدفعة اللي بتغطّيها التجربة',
  },
  'mkt.schools.pilot.phase1.point.2': {
    en: 'Onboard nominated teachers and create student accounts in bulk',
    ar: 'جهّز المعلّمين المرشّحين وأنشئ حسابات الطلاب بالجملة',
  },
  'mkt.schools.pilot.phase1.point.3': {
    en: 'Select the exam board or pathway content should align to',
    ar: 'اختر بورد الامتحان أو المسار اللي لازم يتوافق معه المحتوى',
  },
  'mkt.schools.pilot.phase1.point.4': {
    en: 'Run baseline reading, writing and practice tasks across the cohort',
    ar: 'شغّل مهام قراءة وكتابة وتدريب أساسية عبر الدفعة',
  },
  'mkt.schools.pilot.phase1.point.5': {
    en: 'Identify priority skill gaps - language analysis, structure, AO coverage, vocabulary, reading inference',
    ar: 'حدّد فجوات المهارات ذات الأولوية - تحليل اللغة، التركيب، تغطية الـ AO، المفردات، الاستنتاج في القراءة',
  },
  'mkt.schools.pilot.phase2.title': {
    en: 'Targeted practice',
    ar: 'تدريب مستهدف',
  },
  'mkt.schools.pilot.phase2.duration': {
    en: 'Weeks 4-11',
    ar: 'الأسابيع 4-11',
  },
  'mkt.schools.pilot.phase2.point.1': {
    en: 'Assign practice tasks aligned to the gaps identified in Phase 1',
    ar: 'كلّف بمهام تدريب متوافقة مع الفجوات المحدّدة في المرحلة 1',
  },
  'mkt.schools.pilot.phase2.point.2': {
    en: 'Use AI-assisted feedback to give students faster formative responses',
    ar: 'استخدم التغذية الراجعة بمساعدة الـ AI عشان تعطي الطلاب ردود تكوينية أسرع',
  },
  'mkt.schools.pilot.phase2.point.3': {
    en: 'Support mock exam preparation with exam-style practice and walkthroughs',
    ar: 'ادعم التحضير للامتحانات التجريبية بتدريب على نمط الامتحان وشروحات خطوة بخطوة',
  },
  'mkt.schools.pilot.phase2.point.4': {
    en: 'Track student engagement and submission patterns',
    ar: 'تابع تفاعل الطلاب وأنماط التسليم',
  },
  'mkt.schools.pilot.phase2.point.5': {
    en: 'Review class-level weaknesses with teachers in fortnightly check-ins',
    ar: 'راجع نقاط ضعف الصف مع المعلّمين في لقاءات كل أسبوعين',
  },
  'mkt.schools.pilot.phase3.title': {
    en: 'Review and impact report',
    ar: 'المراجعة وتقرير الأثر',
  },
  'mkt.schools.pilot.phase3.duration': {
    en: 'Weeks 12-13',
    ar: 'الأسابيع 12-13',
  },
  'mkt.schools.pilot.phase3.point.1': {
    en: 'Usage summary across teachers and student cohort',
    ar: 'ملخّص استخدام عبر المعلّمين ودفعة الطلاب',
  },
  'mkt.schools.pilot.phase3.point.2': {
    en: 'Skill-gap trends from baseline to end of pilot',
    ar: 'اتجاهات فجوات المهارات من خط الأساس لين نهاية التجربة',
  },
  'mkt.schools.pilot.phase3.point.3': {
    en: 'Student progress indicators against the gaps identified',
    ar: 'مؤشّرات تقدّم الطلاب مقابل الفجوات المحدّدة',
  },
  'mkt.schools.pilot.phase3.point.4': {
    en: 'Teacher feedback on workload, content quality and student response',
    ar: 'ملاحظات المعلّمين عن الضغط، جودة المحتوى، وتجاوب الطلاب',
  },
  'mkt.schools.pilot.phase3.point.5': {
    en: 'Recommendations for the next term and beyond',
    ar: 'توصيات للفصل الجاي وما بعده',
  },
  'mkt.schools.pilot.phase3.point.6': {
    en: 'Annual school licence proposal if the pilot warrants it',
    ar: 'عرض رخصة مدرسة سنوية إذا التجربة تستاهل',
  },

  // ── C. What schools receive ────────────────────────────────────────
  'mkt.schools.pilot.receive.eyebrow': {
    en: 'C. What schools receive',
    ar: 'C. شنو تحصل المدارس',
  },
  'mkt.schools.pilot.receive.title': {
    en: 'What is included with every pilot',
    ar: 'شنو يشمل كل تجربة',
  },
  'mkt.schools.pilot.receive.1': {
    en: 'Teacher access for every nominated member of the English department',
    ar: 'وصول معلّم لكل عضو مرشّح في قسم اللغة الإنجليزية',
  },
  'mkt.schools.pilot.receive.2': {
    en: 'Student access for every learner in the agreed cohort',
    ar: 'وصول طالب لكل متعلّم في الدفعة المتّفق عليها',
  },
  'mkt.schools.pilot.receive.3': {
    en: 'Onboarding support - guided setup walkthrough and an admin checklist',
    ar: 'دعم إعداد - جولة إعداد موجّهة وقائمة مهام للإدارة',
  },
  'mkt.schools.pilot.receive.4': {
    en: 'Reporting dashboard for the cohort and per-class breakdowns',
    ar: 'لوحة تقارير للدفعة وتفصيل لكل صف',
  },
  'mkt.schools.pilot.receive.5': {
    en: 'A written pilot review report at the end of the 90 days',
    ar: 'تقرير مراجعة مكتوب للتجربة في نهاية الـ 90 يوم',
  },
  'mkt.schools.pilot.receive.6': {
    en: 'A recommended intervention plan for the next academic block',
    ar: 'خطة تدخّل موصى بها للفترة الأكاديمية الجاية',
  },
  'mkt.schools.pilot.receive.7': {
    en: 'Optional staff walkthrough with the schools team',
    ar: 'جولة اختيارية للطاقم مع فريق المدارس',
  },

  // ── D. Success measures ────────────────────────────────────────────
  'mkt.schools.pilot.measure.eyebrow': {
    en: 'D. Success measures',
    ar: 'D. مقاييس النجاح',
  },
  'mkt.schools.pilot.measure.title': {
    en: 'What we measure during the pilot',
    ar: 'شنو نقيس أثناء التجربة',
  },
  'mkt.schools.pilot.measure.body': {
    en: 'We measure usage, engagement and identifiable skill gaps - not grade improvement. A 12-week pilot is too short to claim a causal grade lift, and we will not present it as one.',
    ar: 'نقيس الاستخدام والتفاعل وفجوات المهارات اللي نقدر نحدّدها - مو تحسّن الدرجات. تجربة 12 أسبوع أقصر من إنها تدّعي رفع درجات سببي، وما بنقدّمها على هذا الأساس.',
  },
  'mkt.schools.pilot.metric.activation.label': {
    en: 'Student activation',
    ar: 'تفعيل الطلاب',
  },
  'mkt.schools.pilot.metric.activation.desc': {
    en: 'Percentage of the cohort that signs in and starts using the platform.',
    ar: 'نسبة الدفعة اللي تسجّل دخول وتبدأ تستخدم المنصّة.',
  },
  'mkt.schools.pilot.metric.weekly.label': {
    en: 'Weekly usage',
    ar: 'الاستخدام الأسبوعي',
  },
  'mkt.schools.pilot.metric.weekly.desc': {
    en: 'Active sessions per student per week, by class and overall.',
    ar: 'الجلسات النشطة لكل طالب بالأسبوع، حسب الصف وبشكل عام.',
  },
  'mkt.schools.pilot.metric.tasks.label': {
    en: 'Tasks completed',
    ar: 'المهام المنجَزة',
  },
  'mkt.schools.pilot.metric.tasks.desc': {
    en: 'Number of practice tasks, reading exercises and writing submissions.',
    ar: 'عدد مهام التدريب وتمارين القراءة وتسليمات الكتابة.',
  },
  'mkt.schools.pilot.metric.writing.label': {
    en: 'Writing submissions',
    ar: 'تسليمات الكتابة',
  },
  'mkt.schools.pilot.metric.writing.desc': {
    en: 'Volume and length of student writing submitted for feedback.',
    ar: 'حجم وطول كتابة الطلاب المسلّمة للتغذية الراجعة.',
  },
  'mkt.schools.pilot.metric.gaps.label': {
    en: 'Skill gaps identified',
    ar: 'فجوات المهارات المحدّدة',
  },
  'mkt.schools.pilot.metric.gaps.desc': {
    en: 'Specific weaknesses surfaced by the analytics - by class and student.',
    ar: 'نقاط ضعف محدّدة تبيّنها التحليلات - حسب الصف والطالب.',
  },
  'mkt.schools.pilot.metric.teacher.label': {
    en: 'Teacher feedback',
    ar: 'ملاحظات المعلّمين',
  },
  'mkt.schools.pilot.metric.teacher.desc': {
    en: 'Qualitative feedback collected from each pilot teacher.',
    ar: 'ملاحظات نوعية تُجمع من كل معلّم في التجربة.',
  },
  'mkt.schools.pilot.metric.reports.label': {
    en: 'Reports generated',
    ar: 'التقارير المُنشأة',
  },
  'mkt.schools.pilot.metric.reports.desc': {
    en: 'Class, student and parent reports produced through the platform.',
    ar: 'تقارير الصف والطالب والأهل المُنتجة عبر المنصّة.',
  },
  'mkt.schools.pilot.metric.groups.label': {
    en: 'Intervention groups created',
    ar: 'مجموعات التدخّل المُنشأة',
  },
  'mkt.schools.pilot.metric.groups.desc': {
    en: 'Targeted groups set up off the back of skill-gap data.',
    ar: 'مجموعات مستهدفة تُنشأ بناءً على بيانات فجوات المهارات.',
  },
  'mkt.schools.pilot.measure.no_promise.title': {
    en: 'We do not promise grade improvement',
    ar: 'إحنا ما نوعد بتحسّن الدرجات',
  },
  'mkt.schools.pilot.measure.no_promise.body': {
    en: 'Grade outcomes depend on too many factors outside the platform - cohort, teaching time, teacher experience, prior attainment, exam day performance. We measure engagement, gap-identification and teacher-reported impact, and let the school decide whether that adds up to grade change.',
    ar: 'نتائج الدرجات تعتمد على عوامل وايد برّه المنصّة - الدفعة، وقت التدريس، خبرة المعلّم، التحصيل السابق، الأداء يوم الامتحان. نقيس التفاعل، تحديد الفجوات، والأثر اللي يبلّغ عنه المعلّم، ونخلّي المدرسة تقرّر إذا هذا يوصل لتغيّر في الدرجات.',
  },

  // ── E. Pricing ─────────────────────────────────────────────────────
  'mkt.schools.pilot.pricing.eyebrow': {
    en: 'E. Pricing',
    ar: 'E. الأسعار',
  },
  'mkt.schools.pilot.pricing.title': {
    en: 'Recurring school pricing',
    ar: 'أسعار مدرسية متكرّرة',
  },
  'mkt.schools.pilot.pricing.founding.badge': {
    en: 'Founding School Pilot',
    ar: 'تجربة مدرسة مؤسِّسة',
  },
  'mkt.schools.pilot.pricing.from': {
    en: 'from',
    ar: 'من',
  },
  'mkt.schools.pilot.pricing.year': {
    en: '/ year',
    ar: '/ بالسنة',
  },
  'mkt.schools.pilot.pricing.founding.body': {
    en: 'Recurring annual licence, sized to cohort and scope. The first 10 founding schools lock in this preferential rate for 2-3 years.',
    ar: 'رخصة سنوية متكرّرة، محدّدة حسب الدفعة والنطاق. أول 10 مدارس مؤسِّسة تثبّت هذا السعر التفضيلي لمدة 2-3 سنوات.',
  },
  'mkt.schools.pilot.pricing.licence.badge': {
    en: 'School Licence',
    ar: 'رخصة مدرسة',
  },
  'mkt.schools.pilot.pricing.licence.body': {
    en: 'Standard annual licence for schools joining after the founding cohort closes. Full platform access for all teachers and students in the agreed cohort.',
    ar: 'رخصة سنوية عادية للمدارس اللي تنضمّ بعد ما تسكّر دفعة المؤسِّسين. وصول كامل للمنصّة لكل المعلّمين والطلاب في الدفعة المتّفق عليها.',
  },
  'mkt.schools.pilot.pricing.based_on.title': {
    en: 'School pricing is based on',
    ar: 'أسعار المدارس تعتمد على',
  },
  'mkt.schools.pilot.pricing.based_on.1': {
    en: 'Number of students in the cohort',
    ar: 'عدد الطلاب في الدفعة',
  },
  'mkt.schools.pilot.pricing.based_on.2': {
    en: 'Number of teachers requiring access',
    ar: 'عدد المعلّمين اللي يحتاجون وصول',
  },
  'mkt.schools.pilot.pricing.based_on.3': {
    en: 'Year groups covered (KS3 / GCSE / IGCSE)',
    ar: 'السنوات الدراسية المغطّاة (KS3 / GCSE / IGCSE)',
  },
  'mkt.schools.pilot.pricing.based_on.4': {
    en: 'Reporting and analytics needs',
    ar: 'احتياجات التقارير والتحليلات',
  },
  'mkt.schools.pilot.pricing.based_on.5': {
    en: 'Onboarding and training scope',
    ar: 'نطاق الإعداد والتدريب',
  },
  'mkt.schools.pilot.pricing.based_on.6': {
    en: 'Pilot or full annual licence structure',
    ar: 'هيكل التجربة أو الرخصة السنوية الكاملة',
  },
  'mkt.schools.pilot.pricing.note': {
    en: 'Larger schools, multi-academy trusts (MATs) and international school groups are priced on a custom annual licence. Optional onboarding, training or implementation support may be included depending on package.',
    ar: 'المدارس الأكبر، اتحادات الأكاديميات المتعدّدة (MATs)، ومجموعات المدارس الدولية تُسعّر برخصة سنوية مخصّصة. الإعداد أو التدريب أو دعم التطبيق الاختياري ممكن يُشمل حسب الباقة.',
  },
  'mkt.schools.pilot.pricing.cta': {
    en: 'Request school pricing',
    ar: 'اطلب أسعار المدارس',
  },

  // ── F. CTA ─────────────────────────────────────────────────────────
  'mkt.schools.pilot.cta.title': {
    en: 'Bring clearer English insight into your school.',
    ar: 'جيب رؤية إنجليزية أوضح لمدرستك.',
  },
  'mkt.schools.pilot.cta.body': {
    en: 'Tell us your year group, cohort size and exam board. We will come back within one working day with a tailored pilot proposal - no obligation.',
    ar: 'قول لنا سنتك الدراسية، حجم الدفعة، وبورد الامتحان. بنرجع لك خلال يوم عمل واحد بعرض تجربة مفصّل - بدون أي التزام.',
  },
  'mkt.schools.pilot.cta.request': {
    en: 'Request a school pilot',
    ar: 'اطلب تجربة مدرسة',
  },
  'mkt.schools.pilot.cta.email': {
    en: 'Email',
    ar: 'راسل',
  },
}
