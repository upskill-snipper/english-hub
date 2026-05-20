/**
 * dictionary-mkt-teachers.ts — `/teachers` marketing page.
 *
 * Externalises every visible English literal on `src/app/teachers/page.tsx`
 * (the public teachers marketing surface) under the stable
 * `mkt.teachers.*` namespace. EN values are verbatim from the page as
 * authored. AR values are curated Khaleeji (Gulf) Arabic in the same
 * marketing register used across `dictionary-homepage.ts` (warm,
 * conversational, direct address) and the teacher-SaaS tone of
 * `dictionary-teacher.ts` (formal-but-warm professional voice) —
 * NOT MSA-stiff, NOT machine, NOT Levantine.
 *
 * Technical tokens stay in Latin per Gulf convention:
 *   GCSE / IGCSE / AQA / Edexcel / OCR / AO / CEFR / AI / EAL /
 *   The English Hub.
 *
 * Western (Arabic-Indic 0-9) digits used throughout.
 *
 * This shard is wired into the master `lookup()` chain in
 * `./dictionary.ts` at the curated-override tier — BEFORE the
 * placeholder/audit supplements — by the orchestrator. Do NOT edit
 * `dictionary.ts` from this shard.
 */

export const MKT_TEACHERS_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ── Metadata (title + description) ─────────────────────────────────
  'mkt.teachers.meta.title': {
    en: 'For Teachers — reduce workload, support every student',
    ar: 'للمعلّمين — قلّل الضغط وادعم كل طالب',
  },
  'mkt.teachers.meta.description': {
    en: 'AI-assisted feedback, homework setting, worksheet building and clearer student insight — designed to support teacher judgement and reduce repetitive workload.',
    ar: 'تغذية راجعة بمساعدة الـ AI، تحضير الواجبات، بناء أوراق العمل، ورؤية أوضح عن طلابك — مصمّم يدعم حكم المعلّم ويقلّل الشغل المتكرّر.',
  },
  'mkt.teachers.meta.og_title': {
    en: 'For Teachers — The English Hub',
    ar: 'للمعلّمين — The English Hub',
  },
  'mkt.teachers.meta.og_description': {
    en: 'Support every student without adding to your workload.',
    ar: 'ادعم كل طالب بدون ما تزيد على شغلك.',
  },
  'mkt.teachers.meta.og_image_alt': {
    en: 'The English Hub for Teachers',
    ar: 'The English Hub للمعلّمين',
  },

  // ── 1. Hero ────────────────────────────────────────────────────────
  'mkt.teachers.hero.eyebrow': {
    en: 'For teachers',
    ar: 'للمعلّمين',
  },
  'mkt.teachers.hero.title': {
    en: 'Support every student without adding to your workload',
    ar: 'ادعم كل طالب بدون ما تزيد على شغلك',
  },
  'mkt.teachers.hero.subtitle': {
    en: 'The English Hub is designed to reduce repetitive marking, give you clearer insight into class weaknesses, and help you focus more time on teaching. It supports your judgement — it does not replace it.',
    ar: 'The English Hub مصمّم يقلّل التصحيح المتكرّر، يعطيك رؤية أوضح عن نقاط ضعف الصف، ويساعدك تركّز وقتك أكثر على التدريس. يدعم حكمك المهني — ما يحلّ محلّه.',
  },
  'mkt.teachers.hero.cta_primary': {
    en: 'See teacher pricing',
    ar: 'شوف أسعار المعلّمين',
  },
  'mkt.teachers.hero.cta_secondary': {
    en: 'Bring it to your school',
    ar: 'وصّله لمدرستك',
  },
  'mkt.teachers.hero.pill_reduce_marking': {
    en: 'Reduce repetitive marking',
    ar: 'قلّل التصحيح المتكرّر',
  },
  'mkt.teachers.hero.pill_class_insight': {
    en: 'Class-level insight',
    ar: 'رؤية على مستوى الصف',
  },
  'mkt.teachers.hero.pill_spec_aligned': {
    en: 'Specification-aligned',
    ar: 'متوافق مع المنهج',
  },

  // ── 2. Before / After ──────────────────────────────────────────────
  'mkt.teachers.shift.eyebrow': {
    en: 'The shift',
    ar: 'النقلة',
  },
  'mkt.teachers.shift.title': {
    en: 'What changes when teachers use The English Hub',
    ar: 'شنو يتغيّر لمّا المعلّمين يستخدمون The English Hub',
  },
  'mkt.teachers.shift.lead': {
    en: 'A qualitative shift in where teacher time goes — fewer evenings on repetitive marking, more class hours spent on what actually moves the dial.',
    ar: 'نقلة نوعية في توزيع وقت المعلّم — ليالي أقل على التصحيح المتكرّر، وساعات صف أكثر على اللي فعلاً يفرق.',
  },

  // Without — eyebrow + heading + four bullets
  'mkt.teachers.shift.without.eyebrow': {
    en: 'Without',
    ar: 'بدون',
  },
  'mkt.teachers.shift.without.title': {
    en: 'The familiar grind',
    ar: 'الروتين اللي تعرفه',
  },
  'mkt.teachers.shift.without.point_late_nights': {
    en: 'Long marking nights that eat into planning and family time',
    ar: 'ليالي تصحيح طويلة تاكل من وقت التحضير ووقت العائلة',
  },
  'mkt.teachers.shift.without.point_scattered_feedback': {
    en: 'Feedback scattered across exercise books, docs and emails',
    ar: 'التغذية الراجعة مبعثرة بين الدفاتر والمستندات والإيميلات',
  },
  'mkt.teachers.shift.without.point_late_identification': {
    en: 'Struggling students identified late, after the gap has widened',
    ar: 'الطلاب اللي يعانون يتم اكتشافهم متأخّر، بعد ما تكبر الفجوة',
  },
  'mkt.teachers.shift.without.point_invisible_patterns': {
    en: 'Class-wide patterns invisible until exam season',
    ar: 'الأنماط على مستوى الصف ما تبيّن إلا في موسم الامتحانات',
  },

  // With — eyebrow + heading + four bullets
  'mkt.teachers.shift.with.eyebrow': {
    en: 'With The English Hub',
    ar: 'مع The English Hub',
  },
  'mkt.teachers.shift.with.title': {
    en: 'Time back, signal up',
    ar: 'وقت يرجع لك، ووضوح أكثر',
  },
  'mkt.teachers.shift.with.point_faster_turnaround': {
    en: 'Faster feedback turnaround on routine written work',
    ar: 'تغذية راجعة أسرع على الأعمال الكتابية الروتينية',
  },
  'mkt.teachers.shift.with.point_structured_commentary': {
    en: 'Structured commentary aligned to assessment objectives',
    ar: 'تعليق منظّم متوافق مع الـ assessment objectives',
  },
  'mkt.teachers.shift.with.point_earlier_surfacing': {
    en: 'Earlier surfacing of students who may need intervention',
    ar: 'اكتشاف أبكر للطلاب اللي يحتاجون تدخّل',
  },
  'mkt.teachers.shift.with.point_class_patterns': {
    en: 'Class-wide pattern insight you can act on next lesson',
    ar: 'رؤية لأنماط الصف تقدر تتصرّف عليها في الحصة الجاية',
  },

  // ── 3. Feature grid — workflow surfaces ────────────────────────────
  'mkt.teachers.features.eyebrow': {
    en: 'Workflow surfaces',
    ar: 'محاور سير العمل',
  },
  'mkt.teachers.features.title': {
    en: 'What it does for you',
    ar: 'شنو يسوّي لك',
  },
  'mkt.teachers.features.lead': {
    en: 'Eight workflow surfaces designed around the day-to-day reality of an English department.',
    ar: 'ثمانية محاور لسير العمل مصمّمة حول الواقع اليومي لقسم اللغة الإنجليزية.',
  },
  'mkt.teachers.features.panel_eyebrow': {
    en: 'What it does for teachers',
    ar: 'شنو يسوّي للمعلّمين',
  },

  // Eight feature items (title + body)
  'mkt.teachers.features.ai_feedback.title': {
    en: 'AI-assisted feedback',
    ar: 'تغذية راجعة بمساعدة الـ AI',
  },
  'mkt.teachers.features.ai_feedback.body': {
    en: 'Structured, criteria-referenced feedback you can review, adjust and build on.',
    ar: 'تعليقات منظّمة مرجعها معايير التقييم، تقدر تراجعها وتعدّل عليها وتبني فوقها.',
  },
  'mkt.teachers.features.class_weaknesses.title': {
    en: 'Class weaknesses',
    ar: 'نقاط ضعف الصف',
  },
  'mkt.teachers.features.class_weaknesses.body': {
    en: 'See where a class is struggling so you can target the next lesson.',
    ar: 'شوف وين يعاني الصف عشان تستهدف الحصة الجاية.',
  },
  'mkt.teachers.features.homework_setting.title': {
    en: 'Homework setting',
    ar: 'تحضير الواجبات',
  },
  'mkt.teachers.features.homework_setting.body': {
    en: 'Set specification-aligned practice in a few clicks.',
    ar: 'حضّر تمارين متوافقة مع المنهج بكم ضغطة.',
  },
  'mkt.teachers.features.worksheet_builder.title': {
    en: 'Worksheet & revision builder',
    ar: 'بنّاء أوراق العمل والمراجعة',
  },
  'mkt.teachers.features.worksheet_builder.body': {
    en: 'Draft worksheets and revision material aligned to the specification.',
    ar: 'جهّز أوراق عمل ومواد مراجعة متوافقة مع المنهج.',
  },
  'mkt.teachers.features.student_reports.title': {
    en: 'Student reports',
    ar: 'تقارير الطلاب',
  },
  'mkt.teachers.features.student_reports.body': {
    en: 'Clearer progress summaries for parents’ evenings and reviews.',
    ar: 'ملخّصات تقدّم أوضح للقاءات الأهل والمراجعات.',
  },
  'mkt.teachers.features.reading_support.title': {
    en: 'Reading & comprehension support',
    ar: 'دعم القراءة والفهم',
  },
  'mkt.teachers.features.reading_support.body': {
    en: 'Structured comprehension practice across key stages.',
    ar: 'تمارين فهم منظّمة عبر مراحل الـ key stages.',
  },
  'mkt.teachers.features.eal_support.title': {
    en: 'EAL support',
    ar: 'دعم EAL',
  },
  'mkt.teachers.features.eal_support.body': {
    en: 'Differentiated practice to support EAL learners in your class.',
    ar: 'تمارين متفاوتة المستوى لدعم طلاب EAL في صفّك.',
  },
  'mkt.teachers.features.targeted_revision.title': {
    en: 'Targeted revision',
    ar: 'مراجعة مستهدفة',
  },
  'mkt.teachers.features.targeted_revision.body': {
    en: 'Point students at the practice that will move their grade.',
    ar: 'وجّه الطلاب للتمارين اللي تحرّك درجتهم.',
  },

  // Trust statement card
  'mkt.teachers.features.trust.eyebrow': {
    en: 'Designed to support, not replace',
    ar: 'مصمّم يدعم، مو يحلّ محلّك',
  },
  'mkt.teachers.features.trust.body': {
    en: 'AI-assisted feedback is designed to support your professional judgement and reduce repetitive workload — not to replace marking or teaching. Teachers stay in control of every decision.',
    ar: 'التغذية الراجعة بمساعدة الـ AI مصمّمة تدعم حكمك المهني وتقلّل الشغل المتكرّر — مو تحلّ محل التصحيح ولا التدريس. المعلّم يبقى مسيطر على كل قرار.',
  },

  // ── 4. A typical week ──────────────────────────────────────────────
  'mkt.teachers.week.eyebrow': {
    en: 'The rhythm',
    ar: 'الإيقاع',
  },
  'mkt.teachers.week.title': {
    en: 'A typical week',
    ar: 'أسبوع نموذجي',
  },
  'mkt.teachers.week.lead': {
    en: 'How the platform fits the cadence of a real English teaching week — from Monday setup through to half-term reporting.',
    ar: 'كيف المنصّة تنسجم مع إيقاع أسبوع تدريس إنجليزي حقيقي — من تحضير الإثنين إلى تقارير منتصف الفصل.',
  },
  'mkt.teachers.week.step_label': {
    en: 'Step',
    ar: 'خطوة',
  },

  // Four week steps (day + body)
  'mkt.teachers.week.monday.day': {
    en: 'Monday',
    ar: 'الإثنين',
  },
  'mkt.teachers.week.monday.body': {
    en: 'Set homework aligned to your specification',
    ar: 'حضّر واجبات متوافقة مع منهجك',
  },
  'mkt.teachers.week.tue_thu.day': {
    en: 'Tue – Thu',
    ar: 'الثلاثاء – الخميس',
  },
  'mkt.teachers.week.tue_thu.body': {
    en: 'Students practise; AI drafts first-pass feedback',
    ar: 'الطلاب يتمرّنون؛ والـ AI يجهّز مسوّدة أولى للتغذية الراجعة',
  },
  'mkt.teachers.week.friday.day': {
    en: 'Friday',
    ar: 'الجمعة',
  },
  'mkt.teachers.week.friday.body': {
    en: 'Review feedback, focus class time where it matters',
    ar: 'راجع التغذية الراجعة، وركّز وقت الصف وين يهم',
  },
  'mkt.teachers.week.half_term.day': {
    en: 'End of half-term',
    ar: 'نهاية نصف الفصل',
  },
  'mkt.teachers.week.half_term.body': {
    en: 'Share progress with parents and leadership',
    ar: 'شارك التقدّم مع الأهل والإدارة',
  },

  // ── 5. Demo CTA ────────────────────────────────────────────────────
  'mkt.teachers.demo.eyebrow': {
    en: 'Live walkthrough',
    ar: 'جولة حيّة',
  },
  'mkt.teachers.demo.title': {
    en: 'See the teacher workspace',
    ar: 'شوف مساحة عمل المعلّم',
  },
  'mkt.teachers.demo.lead': {
    en: 'Browse a sample teacher dashboard with mark queue, class analytics and student insight — no sign-up needed.',
    ar: 'تصفّح لوحة معلّم تجريبية فيها قائمة تصحيح، وتحليلات الصف، ورؤية عن الطلاب — بدون تسجيل.',
  },
  'mkt.teachers.demo.cta_primary': {
    en: 'Open the teacher demo',
    ar: 'افتح ديمو المعلّم',
  },
  'mkt.teachers.demo.cta_secondary': {
    en: 'Or see the school dashboard view',
    ar: 'أو شوف عرض لوحة المدرسة',
  },

  // ── 6. FAQ ─────────────────────────────────────────────────────────
  'mkt.teachers.faq.eyebrow': {
    en: 'Answers',
    ar: 'أجوبة',
  },
  'mkt.teachers.faq.title': {
    en: 'Common questions',
    ar: 'أسئلة شائعة',
  },
  'mkt.teachers.faq.panel_eyebrow': {
    en: 'Teacher FAQ',
    ar: 'أسئلة المعلّمين الشائعة',
  },

  // ── 7. Final CTA strip ─────────────────────────────────────────────
  'mkt.teachers.final.title': {
    en: 'Ready to take a closer look?',
    ar: 'مستعد تشوف عن قرب؟',
  },
  'mkt.teachers.final.body': {
    en: 'Start with teacher pricing or bring The English Hub to your whole department.',
    ar: 'ابدأ بأسعار المعلّمين أو وصّل The English Hub لقسمك كامل.',
  },
  'mkt.teachers.final.cta_pricing': {
    en: 'See teacher pricing',
    ar: 'شوف أسعار المعلّمين',
  },
  'mkt.teachers.final.cta_school': {
    en: 'Bring it to your school',
    ar: 'وصّله لمدرستك',
  },
}
