/**
 * dictionary-mkt-school-pilot.ts - /school-pilot marketing page. EN + Khaleeji (Gulf) Arabic.
 *
 * Bilingual supplement for the high-conversion pilot-programme page at
 *   src/app/school-pilot/page.tsx
 * - a server-component marketing surface for school decision-makers
 * (Heads of English / SLT) and Qatar Expo school-leader visitors.
 *
 * EN values are byte-identical to the rendered English on the page.
 * AR is curated Khaleeji (Gulf) register - formal-but-warm, matching
 * the voice of dictionary-homepage.ts (marketing) and dictionary-trust.ts
 * (institutional). NOT MSA-stiff, NOT Levantine, NOT machine output.
 *
 * Convention reminders applied:
 *   - Technical / brand tokens kept in Latin script per Gulf convention:
 *     The English Hub, GCSE, IGCSE, KS3, KS4, AO, EAL, AI.
 *   - Western digits (8-12, 90).
 *   - Cardinal direction: school audience, so direct-to-leader register
 *     ("مدرستكم", "قسمكم") rather than the conversational
 *     "أبغى / شلونك / شنو" stack used on student-facing pages.
 *     Gulf colloquial lexis (وايد, الحين, ببلاش, شوف, دوّر) reserved for
 *     less formal student surfaces; here we keep clean Gulf marketing
 *     register that a Head of English in Doha or Abu Dhabi would read
 *     as natural - not stiff news-anchor MSA, not casual chat.
 *   - The two `mkt.pilot.about.body_*` keys are a prefix/suffix split
 *     around the EN constant `PRICING_DISPLAY.schoolPilotLength`
 *     ("one term (around 8-12 weeks)" - out of scope per the brief).
 *     AR is written so the data string flows naturally in its slot.
 *
 * This file only defines data - wiring into the master lookup() chain
 * is owned centrally by dictionary.ts (the orchestrator). Do not edit
 * dictionary.ts here.
 */

export const MKT_SCHOOL_PILOT_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── Metadata (generateMetadata → title/description/OG) ────────────
  'mkt.pilot.meta.title': {
    en: 'Founder School Pilot - The English Hub for Schools',
    ar: 'برنامج تجريبي للمدارس المؤسِّسة - The English Hub للمدارس',
  },
  'mkt.pilot.meta.description': {
    en: 'A structured one-term English pilot for schools: onboarding, usage, intervention insights and an end-of-pilot impact report with a rollout recommendation.',
    ar: 'برنامج تجريبي منظَّم لمدّة فصل دراسي واحد لتعلّم الإنجليزي في المدارس: تأهيل، ومتابعة الاستخدام، ورؤى للتدخّل، وتقرير أثر نهاية البرنامج مع توصية للتوسّع.',
  },
  'mkt.pilot.meta.og_title': {
    en: '90-Day Founder School Pilot - The English Hub',
    ar: 'برنامج تجريبي للمدارس المؤسِّسة لمدّة 90 يومًا - The English Hub',
  },
  'mkt.pilot.meta.og_description': {
    en: 'A structured one-term pilot designed to prove value before wider rollout.',
    ar: 'برنامج تجريبي منظَّم لمدّة فصل دراسي واحد، مصمّم لإثبات القيمة قبل التوسّع.',
  },
  'mkt.pilot.meta.og_alt': {
    en: 'Founder School Pilot',
    ar: 'برنامج تجريبي للمدارس المؤسِّسة',
  },

  // ─── Hero ──────────────────────────────────────────────────────────
  'mkt.pilot.hero.eyebrow': {
    en: 'Founder School Programme',
    ar: 'برنامج المدارس المؤسِّسة',
  },
  'mkt.pilot.hero.title': {
    en: '90-Day Founder School Pilot',
    ar: 'برنامج تجريبي للمدارس المؤسِّسة لمدّة 90 يومًا',
  },
  'mkt.pilot.hero.lede': {
    en: 'A structured one-term pilot designed to prove value before wider rollout - focused on one year group or the English department.',
    ar: 'برنامج تجريبي منظَّم لمدّة فصل دراسي واحد، مصمّم لإثبات القيمة قبل التوسّع - يركّز على صف دراسي واحد أو قسم الإنجليزي كاملًا.',
  },
  'mkt.pilot.hero.cta_primary': {
    en: 'Book a School Pilot',
    ar: 'احجز برنامج تجريبي للمدرسة',
  },
  'mkt.pilot.hero.cta_secondary': {
    en: 'Explore the platform',
    ar: 'تعرّف على المنصّة',
  },
  'mkt.pilot.hero.pill_length': {
    en: 'One term · 8-12 weeks',
    ar: 'فصل دراسي واحد · 8-12 أسبوع',
  },
  'mkt.pilot.hero.pill_scope': {
    en: 'Single year group or full department',
    ar: 'صف دراسي واحد أو قسم كامل',
  },
  'mkt.pilot.hero.pill_report': {
    en: 'Impact report on completion',
    ar: 'تقرير أثر عند الانتهاء',
  },
  'mkt.pilot.hero.demo_prompt': {
    en: 'Want to look around before booking?',
    ar: 'تبغون تتصفّحون المنصّة قبل الحجز؟',
  },
  'mkt.pilot.hero.demo_link': {
    en: 'Open the demo',
    ar: 'افتحوا العرض التجريبي',
  },

  // ─── 1. What the pilot is ──────────────────────────────────────────
  'mkt.pilot.about.heading': {
    en: 'What the pilot is',
    ar: 'إيش هو البرنامج التجريبي',
  },
  // Sentence splits around the EN data constant PRICING_DISPLAY.schoolPilotLength
  // ("one term (around 8-12 weeks)") which renders verbatim between the two.
  'mkt.pilot.about.body_prefix': {
    en: 'The Founder School Pilot is a structured engagement over ',
    ar: 'برنامج المدارس المؤسِّسة التجريبي عبارة عن التزام منظَّم على مدى ',
  },
  'mkt.pilot.about.body_suffix': {
    en: '. It is designed to embed The English Hub into how your department works, gather real adoption and usage signals, and produce an evidence base for a wider rollout decision - without committing to a full year up front.',
    ar: '. مصمَّم لدمج The English Hub في طريقة عمل قسمكم، وجمع مؤشّرات حقيقية للتبنّي والاستخدام، وإنتاج قاعدة أدلّة لقرار توسّع أوسع - بدون التزام بسنة كاملة من البداية.',
  },

  // ─── 2. Audience ───────────────────────────────────────────────────
  'mkt.pilot.audience.eyebrow': {
    en: 'Audience',
    ar: 'الجمهور',
  },
  'mkt.pilot.audience.heading': {
    en: 'Who it is for',
    ar: 'لمن هذا البرنامج',
  },
  'mkt.pilot.audiences.hods': {
    en: 'Heads of English and Heads of Department evaluating department-wide tools',
    ar: 'رؤساء قسم الإنجليزي ورؤساء الأقسام اللي يقيّمون أدوات على مستوى القسم كامل',
  },
  'mkt.pilot.audiences.senior_leaders': {
    en: 'Senior leaders looking to reduce marking workload and strengthen outcomes',
    ar: 'القيادات العليا اللي يدوّرون يقلّلون عبء التصحيح ويعزّزون النتائج',
  },
  'mkt.pilot.audiences.eal': {
    en: 'Schools with significant EAL cohorts needing structured support',
    ar: 'المدارس اللي عندها أعداد كبيرة من طلاب EAL يحتاجون دعم منظَّم',
  },
  'mkt.pilot.audiences.international': {
    en: 'International and IGCSE schools planning English improvement',
    ar: 'المدارس الدولية ومدارس IGCSE اللي تخطّط لتحسين مستوى الإنجليزي',
  },

  // ─── 3. What is included ───────────────────────────────────────────
  'mkt.pilot.scope.eyebrow': {
    en: 'Programme scope',
    ar: 'نطاق البرنامج',
  },
  'mkt.pilot.included.heading': {
    en: 'What is included',
    ar: 'إيش يشمل البرنامج',
  },
  'mkt.pilot.outcomes.setup': {
    en: 'Setup in week 1',
    ar: 'التجهيز في الأسبوع الأول',
  },
  'mkt.pilot.outcomes.checkins': {
    en: 'Adoption check-ins',
    ar: 'متابعات للتبنّي',
  },
  'mkt.pilot.outcomes.report': {
    en: 'End-of-pilot report',
    ar: 'تقرير نهاية البرنامج',
  },
  'mkt.pilot.included.panel_eyebrow': {
    en: 'Pilot deliverables',
    ar: 'مخرجات البرنامج التجريبي',
  },
  'mkt.pilot.included.onboarding': {
    en: 'Onboarding session with the English team',
    ar: 'جلسة تأهيل مع فريق الإنجليزي',
  },
  'mkt.pilot.included.teacher_setup': {
    en: 'Teacher setup and student access',
    ar: 'تجهيز حسابات المعلّمين ووصول الطلاب',
  },
  'mkt.pilot.included.baseline': {
    en: 'Baseline usage review',
    ar: 'مراجعة استخدام أساسية',
  },
  'mkt.pilot.included.weekly_checkins': {
    en: 'Weekly adoption check-ins',
    ar: 'متابعات أسبوعية للتبنّي',
  },
  'mkt.pilot.included.analytics_review': {
    en: 'Class and year-group analytics review',
    ar: 'مراجعة تحليلات على مستوى الفصل والصف الدراسي',
  },
  'mkt.pilot.included.intervention_report': {
    en: 'Intervention insight report',
    ar: 'تقرير رؤى للتدخّل',
  },
  'mkt.pilot.included.impact_report': {
    en: 'End-of-pilot impact report',
    ar: 'تقرير أثر نهاية البرنامج',
  },
  'mkt.pilot.included.rollout_plan': {
    en: 'Recommended rollout plan for wider deployment',
    ar: 'خطّة توسّع موصى بها للنشر على نطاق أوسع',
  },

  // ─── 4. Suggested pilot scopes ─────────────────────────────────────
  'mkt.pilot.suggested_scopes.eyebrow': {
    en: 'Pilot scopes',
    ar: 'نطاقات البرنامج التجريبي',
  },
  'mkt.pilot.suggested_scopes.heading': {
    en: 'Suggested pilot scopes',
    ar: 'نطاقات مقترحة للبرنامج التجريبي',
  },
  'mkt.pilot.suggested_scopes.lede': {
    en: 'Start small and expand. Most schools begin with a single year group.',
    ar: 'ابدأوا صغير وتوسّعوا. أغلب المدارس تبدأ بصف دراسي واحد.',
  },
  'mkt.pilot.suggested_scopes.badge': {
    en: 'Most schools start here',
    ar: 'أغلب المدارس تبدأ من هنا',
  },
  'mkt.pilot.scopes.year_group.name': {
    en: 'Single year group',
    ar: 'صف دراسي واحد',
  },
  'mkt.pilot.scopes.year_group.body': {
    en: 'Focus the pilot on one year group to prove value with minimal change management.',
    ar: 'ركّزوا البرنامج التجريبي على صف دراسي واحد لإثبات القيمة بأقل تغيير إداري.',
  },
  'mkt.pilot.scopes.department.name': {
    en: 'English department',
    ar: 'قسم الإنجليزي',
  },
  'mkt.pilot.scopes.department.body': {
    en: 'A whole-department pilot across KS3-KS4 English Language and Literature.',
    ar: 'برنامج تجريبي على مستوى القسم كامل يغطّي KS3-KS4 للإنجليزي لغة وأدب.',
  },
  'mkt.pilot.scopes.multi_campus.name': {
    en: 'Multi-campus / group',
    ar: 'مجمّع / عدّة فروع',
  },
  'mkt.pilot.scopes.multi_campus.body': {
    en: 'For school groups and multi-campus trusts. Scope and pricing tailored.',
    ar: 'للمجموعات المدرسية والكيانات متعدّدة الفروع. النطاق والسعر على مقاسكم.',
  },

  // ─── 5. Timeline ───────────────────────────────────────────────────
  'mkt.pilot.timeline.eyebrow': {
    en: 'Programme cadence',
    ar: 'إيقاع البرنامج',
  },
  'mkt.pilot.timeline.heading': {
    en: 'Pilot timeline',
    ar: 'الجدول الزمني للبرنامج التجريبي',
  },
  'mkt.pilot.timeline.lede': {
    en: 'A typical 90-day pilot runs in four phases.',
    ar: 'البرنامج التجريبي المعتاد لمدّة 90 يومًا يمشي على أربع مراحل.',
  },
  'mkt.pilot.timeline.panel_eyebrow': {
    en: 'Four-phase rollout',
    ar: 'تنفيذ على أربع مراحل',
  },

  // ─── 6. Pricing ────────────────────────────────────────────────────
  'mkt.pilot.pricing.eyebrow': {
    en: 'Investment',
    ar: 'الاستثمار',
  },
  'mkt.pilot.pricing.heading': {
    en: 'Pilot & deployment pricing',
    ar: 'أسعار البرنامج التجريبي والنشر',
  },
  'mkt.pilot.pricing.lede': {
    en: 'Indicative founder pricing. Final pricing depends on school size, scope and rollout requirements.',
    ar: 'أسعار استرشادية للمدارس المؤسِّسة. السعر النهائي يعتمد على حجم المدرسة والنطاق ومتطلّبات النشر.',
  },
  'mkt.pilot.pricing.panel_eyebrow': {
    en: 'Pilot & annual pricing',
    ar: 'أسعار البرنامج التجريبي والاشتراك السنوي',
  },
  'mkt.pilot.pricing.cta_label': {
    en: 'Request a pilot proposal',
    ar: 'اطلبوا عرض برنامج تجريبي',
  },

  // ─── 7. End-of-pilot deliverables ──────────────────────────────────
  'mkt.pilot.end.eyebrow': {
    en: 'Final handover',
    ar: 'التسليم النهائي',
  },
  'mkt.pilot.end.heading': {
    en: 'What your school receives at the end',
    ar: 'إيش تستلمه مدرستكم في النهاية',
  },
  'mkt.pilot.end.usage_summary': {
    en: 'Usage summary',
    ar: 'ملخّص الاستخدام',
  },
  'mkt.pilot.end.teacher_feedback': {
    en: 'Teacher feedback summary',
    ar: 'ملخّص ملاحظات المعلّمين',
  },
  'mkt.pilot.end.student_engagement': {
    en: 'Student engagement summary',
    ar: 'ملخّص تفاعل الطلاب',
  },
  'mkt.pilot.end.intervention_report': {
    en: 'Intervention insight report',
    ar: 'تقرير رؤى للتدخّل',
  },
  'mkt.pilot.end.rollout_plan': {
    en: 'Recommended rollout plan',
    ar: 'خطّة توسّع موصى بها',
  },
  'mkt.pilot.end.pricing_proposal': {
    en: 'Pricing proposal for annual deployment',
    ar: 'عرض سعر للنشر السنوي',
  },

  // ─── 8. CTA form section ───────────────────────────────────────────
  'mkt.pilot.book.eyebrow': {
    en: 'Next step',
    ar: 'الخطوة التالية',
  },
  'mkt.pilot.book.lede': {
    en: 'Tell us about your school and the challenge you most want to address. We will reply within one UK working day with a pilot scoped to your department.',
    ar: 'احكوا لنا عن مدرستكم والتحدّي اللي تبغون تعالجونه أكثر شي. بنردّ عليكم خلال يوم عمل بريطاني واحد ببرنامج تجريبي على مقاس قسمكم.',
  },
  'mkt.pilot.book.impact_note': {
    en: 'Impact reporting is available during the pilot. We do not publish improvement figures we cannot evidence - your pilot generates your own.',
    ar: 'تقارير الأثر متوفّرة أثناء البرنامج التجريبي. ما ننشر أرقام تحسّن ما نقدر نثبتها - برنامجكم التجريبي يولّد أرقامكم.',
  },
  'mkt.pilot.book.trust_pill': {
    en: 'Reply within one UK working day',
    ar: 'ردّ خلال يوم عمل بريطاني واحد',
  },
  'mkt.pilot.book.form_heading': {
    en: 'Request a Founder School Pilot',
    ar: 'اطلبوا برنامج تجريبي للمدارس المؤسِّسة',
  },

  // ─── FAQ ───────────────────────────────────────────────────────────
  'mkt.pilot.faq.eyebrow': {
    en: 'Common questions',
    ar: 'أسئلة شائعة',
  },
  'mkt.pilot.faq.heading': {
    en: 'Pilot questions',
    ar: 'أسئلة عن البرنامج التجريبي',
  },
}
