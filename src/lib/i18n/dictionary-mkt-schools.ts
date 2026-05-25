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

export const MKT_SCHOOLS_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ───────────────────────────────────────────────────────────────────
  // Metadata (title / description) - used by generateMetadata()
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.meta.title': {
    en: 'The English Hub for Schools - assessment, intervention & reporting',
    ar: 'The English Hub للمدارس - تقييم وتدخّل وتقارير',
  },
  'mkt.schools.meta.description': {
    en: 'A school-ready English platform helping teachers save time, students improve faster and leaders understand where support is needed across English Language, Literature and EAL.',
    ar: 'منصّة إنجليزي جاهزة للمدارس تساعد المعلّمين يوفّرون وقتهم، والطلاب يتحسّنون أسرع، والقادة يفهمون وين يحتاج الدعم - في English Language وLiterature وEAL.',
  },
  'mkt.schools.meta.og_title': {
    en: 'The English Hub for Schools',
    ar: 'The English Hub للمدارس',
  },
  'mkt.schools.meta.og_description': {
    en: 'English department intelligence, assessment and intervention in one platform.',
    ar: 'ذكاء قسم الإنجليزي والتقييم والتدخّل في منصّة واحدة.',
  },
  'mkt.schools.meta.og_alt': {
    en: 'The English Hub for Schools',
    ar: 'The English Hub للمدارس',
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
  },
  'mkt.schools.hero.title': {
    en: 'English department intelligence, assessment and intervention in one platform',
    ar: 'ذكاء قسم الإنجليزي والتقييم والتدخّل في منصّة واحدة',
  },
  'mkt.schools.hero.lede': {
    en: 'A school-ready platform helping teachers save time, students improve faster and leaders understand where support is needed.',
    ar: 'منصّة جاهزة للمدارس تساعد المعلّمين يوفّرون وقتهم، والطلاب يتحسّنون أسرع، والقادة يفهمون وين يحتاج الدعم.',
  },
  'mkt.schools.hero.cta_primary': {
    en: 'Start a 90-Day School Pilot',
    ar: 'ابدأ تجربة المدرسة 90 يوم',
  },
  'mkt.schools.hero.cta_secondary': {
    en: 'See how the pilot works',
    ar: 'شوف كيف تشتغل التجربة',
  },
  'mkt.schools.hero.lozenge.language_literature': {
    en: 'English Language & Literature',
    ar: 'English Language و Literature',
  },
  'mkt.schools.hero.lozenge.levels': {
    en: 'KS3 · GCSE · IGCSE · A-Level',
    ar: 'KS3 · GCSE · IGCSE · A-Level',
  },
  'mkt.schools.hero.lozenge.designed_for_departments': {
    en: 'Designed for English departments',
    ar: 'مصمّمة لأقسام الإنجليزي',
  },

  // ───────────────────────────────────────────────────────────────────
  // 2. Problem
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.problem.eyebrow': {
    en: 'The challenge',
    ar: 'التحدّي',
  },
  'mkt.schools.problem.title': {
    en: 'English departments are under pressure',
    ar: 'أقسام الإنجليزي تحت ضغط',
  },
  'mkt.schools.problem.lede': {
    en: 'The work is growing faster than the time available to do it. Most departments tell us the same things.',
    ar: 'الشغل يزيد أسرع من الوقت المتاح له. أكثر الأقسام تقول لنا نفس الكلام.',
  },
  'mkt.schools.problem.card.marking_workload': {
    en: 'Marking workload is heavy and repetitive, eating into planning and teaching time.',
    ar: 'عبء التصحيح ثقيل ومكرّر، ويأكل من وقت التخطيط والتدريس.',
  },
  'mkt.schools.problem.card.practice_inconsistent': {
    en: 'Student practice is inconsistent and hard to monitor across classes.',
    ar: 'تمارين الطلاب غير منتظمة وصعب متابعتها عبر الفصول.',
  },
  'mkt.schools.problem.card.limited_visibility': {
    en: 'Leaders have limited visibility of progress across year groups.',
    ar: 'القادة عندهم رؤية محدودة لتقدّم الطلاب على مستوى الصفوف الدراسية.',
  },
  'mkt.schools.problem.card.late_identification': {
    en: 'Students who need support are often identified too late.',
    ar: 'الطلاب اللي يحتاجون دعم يتمّ تحديدهم متأخّر وايد.',
  },
  'mkt.schools.problem.card.eal_support': {
    en: 'EAL learners need structured support that is hard to resource at scale.',
    ar: 'طلاب EAL يحتاجون دعم منظّم يصعب توفيره على نطاق واسع.',
  },
  'mkt.schools.problem.card.reporting_scattered': {
    en: 'Reporting is time-consuming and pulls from scattered sources.',
    ar: 'إعداد التقارير ياخذ وقت طويل ويسحب البيانات من مصادر متفرّقة.',
  },

  // ───────────────────────────────────────────────────────────────────
  // 3. Solution
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.solution.title': {
    en: 'One platform for the whole English department',
    ar: 'منصّة واحدة لقسم الإنجليزي كامل',
  },
  'mkt.schools.solution.lede': {
    en: 'Designed to support teacher judgement and make department-wide work visible and manageable.',
    ar: 'مصمّمة عشان تدعم حكم المعلّم وتخلّي شغل القسم كامل واضح وقابل للإدارة.',
  },
  'mkt.schools.solution.panel_eyebrow': {
    en: 'The platform',
    ar: 'المنصّة',
  },
  'mkt.schools.solution.feature.marking.title': {
    en: 'AI-assisted marking & feedback',
    ar: 'تصحيح وملاحظات بمساعدة الذكاء الاصطناعي',
  },
  'mkt.schools.solution.feature.marking.body': {
    en: 'Structured, criteria-referenced feedback teachers can review and build on.',
    ar: 'ملاحظات منظّمة ومرتبطة بمعايير التقييم، يقدر المعلّم يراجعها ويبني عليها.',
  },
  'mkt.schools.solution.feature.practice.title': {
    en: 'Student practice & revision',
    ar: 'تمارين الطلاب والمراجعة',
  },
  'mkt.schools.solution.feature.practice.body': {
    en: 'Specification-aligned practice across English Language and Literature.',
    ar: 'تمارين متوافقة مع المواصفات في English Language و Literature.',
  },
  'mkt.schools.solution.feature.comprehension.title': {
    en: 'Comprehension & reading support',
    ar: 'دعم الفهم والقراءة',
  },
  'mkt.schools.solution.feature.comprehension.body': {
    en: 'Structured reading and comprehension practice across key stages.',
    ar: 'تمارين قراءة وفهم منظّمة عبر المراحل الدراسية المختلفة.',
  },
  'mkt.schools.solution.feature.eal.title': {
    en: 'EAL learning support',
    ar: 'دعم تعلّم EAL',
  },
  'mkt.schools.solution.feature.eal.body': {
    en: 'Differentiated practice built to support EAL learners.',
    ar: 'تمارين متدرّجة مصمّمة لدعم طلاب EAL.',
  },
  'mkt.schools.solution.feature.analytics.title': {
    en: 'Class & year-group analytics',
    ar: 'تحليلات الفصل والصف الدراسي',
  },
  'mkt.schools.solution.feature.analytics.body': {
    en: 'Turn student activity into actionable insight for the department.',
    ar: 'حوّل نشاط الطلاب لرؤى قابلة للتطبيق على مستوى القسم.',
  },
  'mkt.schools.solution.feature.intervention.title': {
    en: 'Intervention insights',
    ar: 'رؤى التدخّل',
  },
  'mkt.schools.solution.feature.intervention.body': {
    en: 'Surface students who may need support earlier in the term.',
    ar: 'يبيّن لك الطلاب اللي يمكن يحتاجون دعم من بدري في الفصل الدراسي.',
  },
  'mkt.schools.solution.feature.homework.title': {
    en: 'Homework & worksheet support',
    ar: 'دعم الواجبات وأوراق العمل',
  },
  'mkt.schools.solution.feature.homework.body': {
    en: 'Set practice and generate teacher resources quickly.',
    ar: 'حدّد التمارين وأنشئ موارد المعلّم بسرعة.',
  },
  'mkt.schools.solution.feature.reports.title': {
    en: 'Student reports',
    ar: 'تقارير الطلاب',
  },
  'mkt.schools.solution.feature.reports.body': {
    en: 'Clearer progress summaries for parents, reviews and leadership.',
    ar: 'ملخّصات تقدّم أوضح للأهالي والمراجعات والإدارة.',
  },
  'mkt.schools.solution.feature.resource_gen.title': {
    en: 'Teacher resource generation',
    ar: 'إنشاء موارد المعلّم',
  },
  'mkt.schools.solution.feature.resource_gen.body': {
    en: 'Draft worksheets and practice material aligned to the specification.',
    ar: 'صياغة أوراق عمل ومواد تمارين متوافقة مع المواصفات.',
  },

  // ───────────────────────────────────────────────────────────────────
  // 4. School value cards (eyebrow + heading + tiles + benefits)
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.value.eyebrow': {
    en: 'For departments and leaders',
    ar: 'للأقسام والقادة',
  },
  'mkt.schools.value.title': {
    en: 'What schools get from it',
    ar: 'وش تستفيد منه المدارس',
  },

  // Value tiles (three top tiles)
  'mkt.schools.value.tile.all_boards.label': {
    en: 'All boards',
    ar: 'كل البوردات',
  },
  'mkt.schools.value.tile.all_boards.headline': {
    en: 'Multi-spec',
    ar: 'متعدّد المواصفات',
  },
  'mkt.schools.value.tile.all_boards.body': {
    en: 'AQA · Edexcel · OCR · Eduqas · Cambridge',
    ar: 'AQA · Edexcel · OCR · Eduqas · Cambridge',
  },
  'mkt.schools.value.tile.eal.label': {
    en: 'EAL ready',
    ar: 'جاهزة لـ EAL',
  },
  'mkt.schools.value.tile.eal.headline': {
    en: 'Differentiated',
    ar: 'تمارين متدرّجة',
  },
  'mkt.schools.value.tile.eal.body': {
    en: 'Differentiated practice for EAL learners',
    ar: 'تمارين متدرّجة لطلاب EAL',
  },
  'mkt.schools.value.tile.institutional.label': {
    en: 'School-grade',
    ar: 'بمستوى المدرسة',
  },
  'mkt.schools.value.tile.institutional.headline': {
    en: 'Institutional',
    ar: 'مؤسّسيّة',
  },
  'mkt.schools.value.tile.institutional.body': {
    en: 'Designed for English departments',
    ar: 'مصمّمة لأقسام الإنجليزي',
  },

  // Benefit grid
  'mkt.schools.benefit.workload.title': {
    en: 'Reduce teacher workload',
    ar: 'قلّل عبء المعلّم',
  },
  'mkt.schools.benefit.workload.body': {
    en: 'Reduce repetitive marking so teachers can focus more time on teaching.',
    ar: 'قلّل التصحيح المكرّر حتى يركّز المعلّمون وقتهم على التدريس.',
  },
  'mkt.schools.benefit.intervention.title': {
    en: 'Improve intervention visibility',
    ar: 'حسّن وضوح التدخّل',
  },
  'mkt.schools.benefit.intervention.body': {
    en: 'Identify students who need support earlier, before gaps widen.',
    ar: 'حدّد الطلاب اللي يحتاجون دعم من بدري، قبل لا تكبر الفجوات.',
  },
  'mkt.schools.benefit.eal.title': {
    en: 'Support EAL learners',
    ar: 'دعم طلاب EAL',
  },
  'mkt.schools.benefit.eal.body': {
    en: 'Structured, differentiated practice for EAL cohorts.',
    ar: 'تمارين منظّمة ومتدرّجة لمجموعات EAL.',
  },
  'mkt.schools.benefit.exam_readiness.title': {
    en: 'Strengthen exam readiness',
    ar: 'قوّي الجاهزية للامتحان',
  },
  'mkt.schools.benefit.exam_readiness.body': {
    en: 'Specification-aligned practice and feedback across the department.',
    ar: 'تمارين وملاحظات متوافقة مع المواصفات على مستوى القسم كامل.',
  },
  'mkt.schools.benefit.reports.title': {
    en: 'Generate clearer student reports',
    ar: 'أنشئ تقارير طلاب أوضح',
  },
  'mkt.schools.benefit.reports.body': {
    en: 'Turn activity into shareable, leadership-ready summaries.',
    ar: 'حوّل النشاط لملخّصات قابلة للمشاركة وجاهزة للإدارة.',
  },
  'mkt.schools.benefit.cohorts.title': {
    en: 'Track progress across cohorts',
    ar: 'تابع التقدّم عبر المجموعات',
  },
  'mkt.schools.benefit.cohorts.body': {
    en: 'Clearer visibility across classes and year groups.',
    ar: 'رؤية أوضح عبر الفصول والصفوف الدراسية.',
  },

  // ───────────────────────────────────────────────────────────────────
  // 5. Demo showcase
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.demo.eyebrow': {
    en: 'Interactive walk-through',
    ar: 'جولة تفاعليّة',
  },
  'mkt.schools.demo.title': {
    en: 'See it in action',
    ar: 'شوفها وهي تشتغل',
  },
  'mkt.schools.demo.lede': {
    en: 'Browse the school dashboard, the teacher workspace and the student experience as a guest - no sign-up.',
    ar: 'تصفّح لوحة المدرسة، ومساحة عمل المعلّم، وتجربة الطالب كزائر - بدون تسجيل.',
  },
  'mkt.schools.demo.card.school.title': {
    en: 'School dashboard',
    ar: 'لوحة المدرسة',
  },
  'mkt.schools.demo.card.school.body': {
    en: 'A leadership view of practice activity, intervention insights and department reporting.',
    ar: 'عرض قيادي لنشاط التمارين، ورؤى التدخّل، وتقارير القسم.',
  },
  'mkt.schools.demo.card.teacher.title': {
    en: 'Teacher workspace',
    ar: 'مساحة عمل المعلّم',
  },
  'mkt.schools.demo.card.teacher.body': {
    en: 'How a head of English sets practice, reviews marking and tracks class progress.',
    ar: 'كيف يحدّد رئيس قسم الإنجليزي التمارين، ويراجع التصحيح، ويتابع تقدّم الفصل.',
  },
  'mkt.schools.demo.card.student.title': {
    en: 'Student experience',
    ar: 'تجربة الطالب',
  },
  'mkt.schools.demo.card.student.body': {
    en: 'The practice, comprehension and feedback flow students see in the platform.',
    ar: 'تدفّق التمارين والفهم والملاحظات اللي يشوفه الطالب في المنصّة.',
  },
  'mkt.schools.demo.card.cta_open': {
    en: 'Open the demo',
    ar: 'افتح العرض التجريبي',
  },

  // ───────────────────────────────────────────────────────────────────
  // 6. Pilot programme
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.pilot.eyebrow': {
    en: 'Founder School Programme',
    ar: 'برنامج المدارس المؤسِّسة',
  },
  'mkt.schools.pilot.title': {
    en: '90-Day Founder School Pilot',
    ar: 'تجربة المدارس المؤسِّسة 90 يوم',
  },
  'mkt.schools.pilot.lede': {
    en: 'Most schools begin with a structured one-term pilot focused on one year group or the English department. The pilot is designed to prove value before wider rollout.',
    ar: 'أكثر المدارس تبدأ بتجربة منظّمة لفصل دراسي واحد، تركّز على صفّ دراسي واحد أو على قسم الإنجليزي. التجربة مصمّمة عشان تثبت قيمتها قبل التوسّع.',
  },
  'mkt.schools.pilot.panel_eyebrow': {
    en: 'How the pilot runs',
    ar: 'كيف تجري التجربة',
  },
  'mkt.schools.pilot.cta': {
    en: 'Start a 90-Day School Pilot',
    ar: 'ابدأ تجربة المدرسة 90 يوم',
  },

  // ───────────────────────────────────────────────────────────────────
  // 7. Pricing
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.pricing.eyebrow': {
    en: 'Pricing',
    ar: 'الأسعار',
  },
  'mkt.schools.pricing.title': {
    en: 'Founder pricing',
    ar: 'أسعار المؤسِّسين',
  },
  'mkt.schools.pricing.lede': {
    en: 'Founder pilots are available for early school partners. Pricing depends on school size, scope and rollout requirements.',
    ar: 'تجارب المؤسِّسين متاحة لشركاء المدارس الأوائل. السعر يعتمد على حجم المدرسة، ونطاق التطبيق، ومتطلّبات التوسّع.',
  },

  // ───────────────────────────────────────────────────────────────────
  // 8. Conversion CTA
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.cta.eyebrow': {
    en: 'Talk to us',
    ar: 'كلّمنا',
  },
  'mkt.schools.cta.title': {
    en: 'Book a School Pilot',
    ar: 'احجز تجربة مدرسيّة',
  },
  'mkt.schools.cta.lede': {
    en: 'Tell us about your department and the challenge you most want to address. We will reply within one UK working day to discuss a pilot scoped to your school.',
    ar: 'احكِ لنا عن قسمك وعن التحدّي اللي تبغى تعالجه أكثر شي. بنردّ عليك خلال يوم عمل بريطاني واحد لنناقش تجربة مصمّمة لمدرستك.',
  },
  'mkt.schools.cta.bullet.scope': {
    en: 'Start with one year group or the whole department',
    ar: 'ابدأ بصفّ دراسي واحد أو بالقسم كامل',
  },
  'mkt.schools.cta.bullet.onboarding': {
    en: 'Structured onboarding and weekly adoption check-ins',
    ar: 'تأهيل منظّم ومتابعات أسبوعيّة لمعدّل الاستخدام',
  },
  'mkt.schools.cta.bullet.impact_report': {
    en: 'End-of-pilot impact report and rollout recommendation',
    ar: 'تقرير أثر نهاية التجربة وتوصية بالتوسّع',
  },
  'mkt.schools.cta.form_heading': {
    en: 'Request Founder School pricing',
    ar: 'اطلب أسعار المدارس المؤسِّسة',
  },

  // ───────────────────────────────────────────────────────────────────
  // FAQ
  // ───────────────────────────────────────────────────────────────────
  'mkt.schools.faq.title': {
    en: 'School leader questions',
    ar: 'أسئلة قادة المدارس',
  },
}
