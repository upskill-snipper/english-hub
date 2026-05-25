// ─── IELTS Study Planner dictionary shard ───────────────────────────────────
// UI-chrome copy for the exam-date study planner (/ielts/planner): the page
// header, the exam countdown + urgency lines, the goals form labels, the
// time-aware "what can I do right now?" panel (15/30/60-minute actions), the
// dated plan timeline (phase / week intros, the no-results callout), the
// milestone names, the per-block notes (week / phase copy), the block card
// labels (Learn / Practise / Full mock), the empty/initial state and the
// footer caveat.
//
// SCOPE: interface chrome only. IELTS is an English exam - no test CONTENT
// lives here. Curriculum-owned labels are NOT translated and stay where they
// are produced: skill labels come from SKILL_META.label (Listening / Reading /
// Writing / Speaking), level labels + band ranges come from LEVELS /
// curriculum, and learn-unit titles come from the curriculum UNITS. The page
// interpolates these (and band labels / dates) into the phrases below as
// {tokens} so the surrounding sentence still translates as a whole.
//
// Khaleeji (Gulf) Arabic per the master dictionary header
// (src/lib/i18n/dictionary.ts ~lines 9-28): شنو / وايد / الحين / ببلاش / شوف /
// دوّر …; Levantine forms شو / كيفك / ليش are banned. Brand + technical terms
// stay in Latin script within the Arabic text: The English Hub, IELTS, Band,
// Academic, General Training, Task 1/2, Listening / Reading / Writing /
// Speaking, AI. Band numbers + day/week counts stay as digits.
//
// Consumed directly by planner/page.tsx via a small locale-aware helper
// (useLocale + this map), falling back to the shared useT()/lookup() for any
// cross-module ielts.* keys. Not wired into dictionary.ts's lookup() chain by
// design (mirrors the diagnostic + plan shards).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_PLANNER_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // ─── Header ─────────────────────────────────────────────────────────
  'ielts.planner.back': { en: 'Back to IELTS', ar: 'رجوع لـ IELTS' },
  'ielts.planner.title': { en: 'IELTS Study Planner', ar: 'مخطّط دراسة IELTS' },
  'ielts.planner.subtitle': {
    en: "Tell us your exam date and target band, and we'll plan backwards from the exam - front-loading your weakest skills, week by week.",
    ar: 'قل لنا تاريخ امتحانك وBand الهدف، وإحنا نخطّط من الامتحان للخلف - نركّز على أضعف مهاراتك أول، أسبوع بأسبوع.',
  },

  // ─── Countdown ──────────────────────────────────────────────────────
  'ielts.planner.countdown.eyebrow': { en: 'Countdown to your exam', ar: 'العد التنازلي لامتحانك' },
  'ielts.planner.countdown.today': { en: 'Today', ar: 'اليوم' },
  'ielts.planner.countdown.day': { en: '{count} day', ar: '{count} يوم' },
  'ielts.planner.countdown.days': { en: '{count} days', ar: '{count} يوم' },
  'ielts.planner.countdown.week': { en: '{count} week', ar: '{count} أسبوع' },
  'ielts.planner.countdown.weeks': { en: '{count} weeks', ar: '{count} أسابيع' },
  // " and {days}" tail appended to the weeks figure (e.g. "3 weeks and 2 days").
  'ielts.planner.countdown.and_day': { en: ' and {count} day', ar: ' و{count} يوم' },
  'ielts.planner.countdown.and_days': { en: ' and {count} days', ar: ' و{count} يوم' },
  'ielts.planner.countdown.aria': { en: 'Exam countdown', ar: 'العد التنازلي للامتحان' },
  'ielts.planner.countdown.target_band': { en: 'Target band', ar: 'Band الهدف' },

  // Urgency line (one of four, picked by days-left bucket).
  'ielts.planner.urgency.exam_day': {
    en: "It's exam day - you've got this.",
    ar: 'اليوم يوم الامتحان - أنت قدّها.',
  },
  'ielts.planner.urgency.final_stretch': {
    en: 'Final stretch: practise to time, rest well, stay calm.',
    ar: 'آخر مرحلة: تدرّب بالوقت، ارتاح زين، وخلّك هادي.',
  },
  'ielts.planner.urgency.close': {
    en: "You're close. Tighten technique and sit at least one full mock.",
    ar: 'أنت قريب. ظبّط الأسلوب وسوِّ على الأقل اختبار تجريبي كامل واحد.',
  },
  'ielts.planner.urgency.runway': {
    en: 'Plenty of runway - build the habit and the bands will follow.',
    ar: 'عندك وقت وايد - ابنِ العادة وBands بتجي وراها.',
  },

  // ─── Goals form ─────────────────────────────────────────────────────
  'ielts.planner.goals.heading': { en: 'Your goals', ar: 'أهدافك' },
  'ielts.planner.goals.target_label': { en: 'Target band', ar: 'Band الهدف' },
  // Target-band <option> text - band number stays a digit (Latin "Band").
  'ielts.planner.goals.target_option': { en: 'Band {band}', ar: 'Band {band}' },
  'ielts.planner.goals.date_label': { en: 'Exam date', ar: 'تاريخ الامتحان' },
  'ielts.planner.goals.level_label': { en: 'Your level now', ar: 'مستواك الحين' },
  // Level <option> text: label + band range both come from curriculum (English).
  'ielts.planner.goals.level_option': { en: '{label} ({range})', ar: '{label} ({range})' },
  'ielts.planner.goals.saved': { en: 'Saved', ar: 'انحفظ' },

  // ─── "What can I do right now?" panel ───────────────────────────────
  'ielts.planner.rightnow.heading': {
    en: 'What can I do right now?',
    ar: 'شنو أقدر أسوّي الحين؟',
  },
  // Intro splits into base + an optional weakest-skill tail (skill stays Latin).
  'ielts.planner.rightnow.intro_base': {
    en: "Tell us how long you've got and we'll pick one thing",
    ar: 'قل لنا كم عندك وقت وإحنا نختار لك شي واحد',
  },
  'ielts.planner.rightnow.intro_weakest': {
    en: ' - aimed at your weakest skill, {skill}.',
    ar: ' - موجّه لأضعف مهارة عندك، {skill}.',
  },
  'ielts.planner.rightnow.intro_end': { en: '.', ar: '.' },
  'ielts.planner.rightnow.time_aria': { en: 'Time available', ar: 'الوقت المتاح' },
  // Minutes toggle label - number stays a digit.
  'ielts.planner.rightnow.minutes': { en: '{count} min', ar: '{count} دقيقة' },

  // 15-minute action (a single lesson). {title} is a curriculum unit title or a
  // skill label (Latin); {skillLower} is the lower-cased skill label (Latin).
  'ielts.planner.rightnow.learn.title': { en: 'Learn: {title}', ar: 'تعلّم: {title}' },
  'ielts.planner.rightnow.learn.body_unit': {
    en: 'A focused {skillLower} lesson - {blurb} Just enough to move one thing forward.',
    ar: 'درس {skillLower} مركّز - {blurb} بس عشان تتقدّم شي واحد.',
  },
  'ielts.planner.rightnow.learn.body_generic': {
    en: 'One short {skillLower} lesson to keep momentum.',
    ar: 'درس {skillLower} قصير واحد عشان تحافظ على الزخم.',
  },
  'ielts.planner.rightnow.learn.cta': { en: 'Open a lesson', ar: 'افتح درس' },

  // 30-minute action (a timed section). {skill}/{skillLower} stay Latin.
  'ielts.planner.rightnow.practice.title': {
    en: 'Practise: a {skill} section',
    ar: 'تدرّب: قسم {skill}',
  },
  'ielts.planner.rightnow.practice.body': {
    en: 'Do one timed {skillLower} section, then read every answer explanation. This is where your weakest skill improves fastest.',
    ar: 'سوِّ قسم {skillLower} واحد بالوقت، وبعدها اقرأ شرح كل جواب. هني تتحسّن أضعف مهارة عندك أسرع شي.',
  },
  'ielts.planner.rightnow.practice.cta': {
    en: 'Start {skillLower} practice',
    ar: 'ابدأ تدريب {skillLower}',
  },

  // 60-minute action (a full / mini mock).
  'ielts.planner.rightnow.mock.title': {
    en: 'Sit a full mock section (or a mini mock)',
    ar: 'سوِّ قسم اختبار تجريبي كامل (أو اختبار تجريبي مصغّر)',
  },
  'ielts.planner.rightnow.mock.body': {
    en: 'An hour is enough for a full Listening or Reading test under exam conditions - the single best way to build stamina and spot weak points. Mark it and note what to fix.',
    ar: 'ساعة تكفي لاختبار Listening أو Reading كامل بظروف امتحان - أحسن طريقة وحدة تبني التحمّل وتكتشف نقاط الضعف. صحّحه ودوّن شنو تصلّح.',
  },
  'ielts.planner.rightnow.mock.cta': { en: 'Go to mock exams', ar: 'روح للاختبارات التجريبية' },

  // ─── Dated plan timeline ────────────────────────────────────────────
  'ielts.planner.timeline.heading': { en: 'Your dated plan', ar: 'خطتك المؤرّخة' },
  // Phase-mode intro. {weeks} digits; {target} Band digit; the weakest-two list
  // is appended via .weakest_suffix with skill labels (Latin) joined by " and ".
  'ielts.planner.timeline.intro_phases': {
    en: "With {weeks} weeks to go, here's a phased plan towards Band {target}. It opens on your weakest skills{weakest} and builds to full mocks before the exam.",
    ar: 'باقي {weeks} أسبوع، هذي خطة على مراحل نحو Band {target}. تبدأ بأضعف مهاراتك{weakest} وتبني للاختبارات التجريبية الكاملة قبل الامتحان.',
  },
  'ielts.planner.timeline.intro_weeks': {
    en: 'A week-by-week plan towards Band {target}, front-loading your weakest skills{weakest} and finishing with a full mock.',
    ar: 'خطة أسبوع بأسبوع نحو Band {target}، تركّز على أضعف مهاراتك{weakest} أول وتنتهي باختبار تجريبي كامل.',
  },
  // Parenthetical weakest-skills list inserted into the intros ({list} = Latin
  // skill labels joined by the connector below).
  'ielts.planner.timeline.weakest_suffix': { en: ' ({list})', ar: ' ({list})' },
  'ielts.planner.timeline.weakest_join': { en: ' and ', ar: ' و' },

  // No-results callout (split around the placement-test link).
  'ielts.planner.timeline.nodata_lead': {
    en: "We don't have any results yet, so this plan starts even across all four skills.",
    ar: 'ما عندنا أي نتائج لين الحين، فهذي الخطة تبدأ متساوية على المهارات الأربع كلها.',
  },
  'ielts.planner.timeline.nodata_link': {
    en: 'Take the 10-minute placement test',
    ar: 'سوِّ اختبار تحديد المستوى اللي ياخذ 10 دقائق',
  },
  'ielts.planner.timeline.nodata_tail': {
    en: 'and the plan will re-focus on your real weak spots.',
    ar: 'وبتعيد الخطة التركيز على نقاط ضعفك الحقيقية.',
  },

  // ─── Milestones ─────────────────────────────────────────────────────
  'ielts.planner.milestones.heading': { en: 'Milestones', ar: 'المحطّات' },
  'ielts.planner.milestone.plan_starts': {
    en: 'Plan starts - first focus session',
    ar: 'الخطة تبدأ - أول جلسة تركيز',
  },
  'ielts.planner.milestone.midpoint': {
    en: 'Mid-point check-in - re-take the diagnostic',
    ar: 'مراجعة منتصف الطريق - أعد اختبار تحديد المستوى',
  },
  'ielts.planner.milestone.full_mock': { en: 'Full mock exam', ar: 'اختبار تجريبي كامل' },
  'ielts.planner.milestone.rest': {
    en: 'Rest & light review',
    ar: 'راحة ومراجعة خفيفة',
  },
  'ielts.planner.milestone.exam_day': { en: 'Exam day', ar: 'يوم الامتحان' },

  // ─── Plan block cards ───────────────────────────────────────────────
  // Block labels. {n} = block/week number; {start}/{end} = week numbers; {names}
  // = phase name (from .phase_name_*). All numbers stay digits.
  'ielts.planner.block.week': { en: 'Week {n}', ar: 'الأسبوع {n}' },
  'ielts.planner.block.final_week': {
    en: 'Final week - exam ready',
    ar: 'الأسبوع الأخير - جاهز للامتحان',
  },
  'ielts.planner.block.phase_week': { en: '{name} (week {start})', ar: '{name} (الأسبوع {start})' },
  'ielts.planner.block.phase_weeks': {
    en: '{name} (weeks {start}-{end})',
    ar: '{name} (الأسابيع {start}-{end})',
  },

  // Phase names (the 4-phase long-runway campaign).
  'ielts.planner.phase.name1': {
    en: 'Phase 1 - Foundations & weak spots',
    ar: 'المرحلة 1 - الأساسيات ونقاط الضعف',
  },
  'ielts.planner.phase.name2': {
    en: 'Phase 2 - Build technique across all four skills',
    ar: 'المرحلة 2 - ابنِ الأسلوب في المهارات الأربع كلها',
  },
  'ielts.planner.phase.name3': {
    en: 'Phase 3 - Sharpen under time pressure',
    ar: 'المرحلة 3 - اشحذ مهاراتك تحت ضغط الوقت',
  },
  'ielts.planner.phase.name4': {
    en: 'Phase 4 - Exam-ready & full mocks',
    ar: 'المرحلة 4 - جاهز للامتحان واختبارات تجريبية كاملة',
  },

  // Block notes. {list} = focus skill labels (Latin) joined by " and "; {primary}
  // = primary skill label (Latin); {secondaryLower} = lower-cased secondary label.
  'ielts.planner.note.mock_week': {
    en: 'Sit a full timed mock, review every mistake, and rest the day before.',
    ar: 'سوِّ اختبار تجريبي كامل بالوقت، راجع كل غلطة، وارتاح اليوم اللي قبله.',
  },
  'ielts.planner.note.consolidate': {
    en: 'Consolidate: redo your weakest question types and a half-length timed set.',
    ar: 'ثبّت: أعد أضعف أنواع الأسئلة عندك ومجموعة بنص الطول بالوقت.',
  },
  'ielts.planner.note.week': {
    en: 'Main focus: {primary}. Keep {secondaryLower} warm with one short set.',
    ar: 'التركيز الرئيسي: {primary}. خلِّ {secondaryLower} نشطة بمجموعة قصيرة وحدة.',
  },
  'ielts.planner.note.phase1': {
    en: 'Get the fundamentals solid and attack your weakest skills first: {list}.',
    ar: 'ثبّت الأساسيات وهاجم أضعف مهاراتك أول: {list}.',
  },
  'ielts.planner.note.phase2': {
    en: 'Learn a reliable method for every question type across {list}.',
    ar: 'تعلّم طريقة موثوقة لكل نوع سؤال في {list}.',
  },
  'ielts.planner.note.phase3': {
    en: 'Practise everything to time. Tighten accuracy and pacing on all four skills.',
    ar: 'تدرّب على كل شي بالوقت. ظبّط الدقة والإيقاع في المهارات الأربع كلها.',
  },
  'ielts.planner.note.phase4': {
    en: 'Full timed mocks, targeted fixes from each mock, and confidence work.',
    ar: 'اختبارات تجريبية كاملة بالوقت، إصلاحات موجّهة من كل اختبار، وشغل على الثقة.',
  },

  // Block card sub-labels + practice/mock chips. {skillLower} stays Latin.
  'ielts.planner.block.learn': { en: 'Learn', ar: 'تعلّم' },
  'ielts.planner.block.practise_skill': {
    en: 'Practise {skillLower}',
    ar: 'تدرّب على {skillLower}',
  },
  'ielts.planner.block.full_mock': { en: 'Full mock exam', ar: 'اختبار تجريبي كامل' },

  // ─── Empty / initial state ──────────────────────────────────────────
  'ielts.planner.empty.title_has_goals': {
    en: 'Add your exam date to build the plan',
    ar: 'ضيف تاريخ امتحانك عشان نبني الخطة',
  },
  'ielts.planner.empty.title_no_goals': {
    en: 'Set your goals to get a dated plan',
    ar: 'حدّد أهدافك عشان تاخذ خطة مؤرّخة',
  },
  'ielts.planner.empty.body_has_goals': {
    en: "Pick your exam date above and we'll lay out a week-by-week schedule that works backwards from the exam, front-loading your weakest skills.",
    ar: 'اختر تاريخ امتحانك فوق وإحنا نرتّب لك جدول أسبوع بأسبوع يشتغل من الامتحان للخلف، يركّز على أضعف مهاراتك أول.',
  },
  'ielts.planner.empty.body_no_goals': {
    en: "Choose a target band, exam date and your current level above. Not sure where you stand? Take the quick placement test first and we'll tailor the plan to your weak spots.",
    ar: 'اختر Band الهدف وتاريخ الامتحان ومستواك الحالي فوق. مو متأكد وين مستواك؟ سوِّ اختبار تحديد المستوى السريع أول وإحنا نفصّل الخطة على نقاط ضعفك.',
  },
  'ielts.planner.empty.cta': { en: 'Take the placement test', ar: 'سوِّ اختبار تحديد المستوى' },

  // ─── Footer caveat + cross-links ────────────────────────────────────
  'ielts.planner.caveat.strong': {
    en: 'This plan is a guide, not a guarantee.',
    ar: 'هذي الخطة دليل، مو ضمان.',
  },
  'ielts.planner.caveat.body': {
    en: 'It adapts to your exam date and results, but real progress comes from consistent practice. Adjust the pace to fit your week - little and often beats cramming.',
    ar: 'تتأقلم مع تاريخ امتحانك ونتائجك، بس التقدّم الحقيقي يجي من التدريب المستمر. ظبّط الإيقاع على أسبوعك - شوي وباستمرار أحسن من الحشو دفعة وحدة.',
  },
  'ielts.planner.cta.weakest_plan': {
    en: 'See your weakest-first plan',
    ar: 'شوف خطة الأضعف-أول مالك',
  },
  'ielts.planner.cta.placement': {
    en: 'Take the placement test',
    ar: 'سوِّ اختبار تحديد المستوى',
  },
}
