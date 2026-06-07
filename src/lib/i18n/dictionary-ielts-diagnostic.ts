// ─── IELTS Diagnostic + Plan dictionary shard ──────────────────────────────
// UI-chrome copy for the IELTS placement diagnostic (/ielts/diagnostic) and
// the study-plan page (/ielts/plan): intro/instructions, the Writing/Speaking
// self-assessment scale, "estimates not official results" caveats, result
// labels, CTAs, the target-band selector, current-vs-target labels, source
// tags, the prioritised-step copy and the empty state.
//
// SCOPE: chrome only. The diagnostic practice ITEMS (reading passage,
// listening transcript, questions, options, answers) live in
// ./diagnostic-items.ts and stay English - they are NOT in this shard.
//
// Khaleeji (Gulf) Arabic per the master dictionary header
// (src/lib/i18n/dictionary.ts ~lines 9-28). Brand + technical terms stay in
// Latin script within the Arabic text: IELTS, Band, Academic, and the four
// skill labels (Reading/Listening/Writing/Speaking) where used as labels.
// Band numbers stay as digits.
//
// Interpolation: values with {tokens} (e.g. {minutes}, {skill}, {band}) are
// filled in by the page at render time so dynamic copy (plan steps, the
// submit gate, the auto-marked tally) stays translatable as a whole phrase.
//
// Consumed directly by diagnostic/page.tsx and plan/page.tsx via a small
// locale-aware helper (useLocale + this map), falling back to the shared
// useT()/lookup() for cross-module ielts.* keys. Not wired into
// dictionary.ts's lookup() chain by design.
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_DIAGNOSTIC_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> =
  {
    // ─── Shared: back link ──────────────────────────────────────────────
    'ielts.diagnostic.back': { en: 'Back to IELTS', ar: 'رجوع لـ IELTS' },

    // ─── Diagnostic: page header ────────────────────────────────────────
    'ielts.diagnostic.title': { en: 'IELTS Placement Test', ar: 'اختبار تحديد المستوى IELTS' },
    'ielts.diagnostic.subtitle': {
      en: 'A quick check of where you are right now - about {minutes} minutes. We use it to build your personalised study plan.',
      ar: 'فحص سريع لمستواك الحين - حوالي {minutes} دقيقة. نستخدمه عشان نبني لك خطة دراسة مخصصة.',
    },

    // ─── Diagnostic: intro steps ────────────────────────────────────────
    'ielts.diagnostic.intro.reading.body': {
      en: 'Read a short passage and answer 4 questions.',
      ar: 'اقرأ نص قصير وجاوب على 4 أسئلة.',
    },
    'ielts.diagnostic.intro.listening.body': {
      en: 'Read a short conversation transcript and answer 4 questions.',
      ar: 'اقرأ نص محادثة قصيرة وجاوب على 4 أسئلة.',
    },
    'ielts.diagnostic.intro.writing.body': {
      en: 'Write one short essay and get an AI band estimate.',
      ar: 'اكتب مقال قصير واحد وخذ تقدير Band بالذكاء الاصطناعي.',
    },
    'ielts.diagnostic.intro.speaking.body': {
      en: 'Answer one spoken question and get an AI band estimate.',
      ar: 'جاوب على سؤال محكي واحد وخذ تقدير Band بالذكاء الاصطناعي.',
    },

    // Marking tags
    'ielts.diagnostic.tag.auto_marked': { en: 'Auto-marked', ar: 'تصحيح تلقائي' },
    'ielts.diagnostic.tag.self_estimate': { en: 'Self-estimate', ar: 'تقدير ذاتي' },
    'ielts.diagnostic.tag.ai_assessed': { en: 'AI-assessed', ar: 'تقييم بالذكاء الاصطناعي' },
    'ielts.diagnostic.tag.skipped': { en: 'Skipped', ar: 'تم تخطّيه' },

    // ─── Diagnostic: AI Writing task ────────────────────────────────────
    'ielts.diagnostic.section.writing.title': { en: 'Part 3 - Writing', ar: 'الجزء 3 - Writing' },
    'ielts.diagnostic.section.writing.subtitle': {
      en: 'Write a short response (aim for about {words} words). We will estimate your Writing band with AI.',
      ar: 'اكتب رد قصير (حاول توصل حوالي {words} كلمة). بنقدّر Band الكتابة مالك بالذكاء الاصطناعي.',
    },
    'ielts.diagnostic.writing.placeholder': {
      en: 'Type your essay here…',
      ar: 'اكتب مقالك هنا…',
    },
    'ielts.diagnostic.writing.words': { en: '{count} words', ar: '{count} كلمة' },
    'ielts.diagnostic.writing.assess': { en: 'Assess my Writing', ar: 'قيّم Writing مالي' },
    'ielts.diagnostic.writing.assessing': { en: 'Assessing…', ar: 'يجري التقييم…' },
    'ielts.diagnostic.writing.assessed': {
      en: 'Writing assessed: Band {band}',
      ar: 'تم تقييم Writing: Band {band}',
    },
    'ielts.diagnostic.writing.skip': { en: 'Skip this task', ar: 'تخطّ هذي المهمة' },

    // ─── Diagnostic: AI Speaking task ───────────────────────────────────
    'ielts.diagnostic.section.speaking.title': {
      en: 'Part 4 - Speaking',
      ar: 'الجزء 4 - Speaking',
    },
    'ielts.diagnostic.section.speaking.subtitle': {
      en: 'Record your answer for your own review, then type what you said. We will estimate your Speaking band with AI from the transcript.',
      ar: 'سجّل جوابك لمراجعتك الخاصة، وبعدها اكتب اللي قلته. بنقدّر Band المحادثة مالك بالذكاء الاصطناعي من النص.',
    },
    'ielts.diagnostic.speaking.recorder_label': {
      en: 'Record your answer (for your own review - not uploaded)',
      ar: 'سجّل جوابك (لمراجعتك الخاصة - ما يترفع)',
    },
    'ielts.diagnostic.speaking.transcript_label': {
      en: 'Type what you said',
      ar: 'اكتب اللي قلته',
    },
    'ielts.diagnostic.speaking.placeholder': {
      en: 'Type or dictate your answer here…',
      ar: 'اكتب أو أملِ جوابك هنا…',
    },
    'ielts.diagnostic.speaking.dictate': { en: 'Speak to transcribe', ar: 'تكلّم للتفريغ النصي' },
    'ielts.diagnostic.speaking.assess': { en: 'Assess my Speaking', ar: 'قيّم Speaking مالي' },
    'ielts.diagnostic.speaking.assessing': { en: 'Assessing…', ar: 'يجري التقييم…' },
    'ielts.diagnostic.speaking.assessed': {
      en: 'Speaking assessed: Band {band}',
      ar: 'تم تقييم Speaking: Band {band}',
    },
    'ielts.diagnostic.speaking.skip': { en: 'Skip this task', ar: 'تخطّ هذي المهمة' },

    // Shared: assessment error + skipped-note
    'ielts.diagnostic.assess.error': {
      en: 'We could not assess that. Please check your answer and try again.',
      ar: 'ما قدرنا نقيّم هذا. راجع جوابك وحاول مرة ثانية.',
    },
    'ielts.diagnostic.assess.skipped_note': {
      en: 'Skipped - we will show a rough self-estimate instead. Do the full task in the module for a real band.',
      ar: 'تم التخطّي - بنوريك تقدير ذاتي تقريبي بداله. سوِّ المهمة الكاملة في الوحدة عشان Band حقيقي.',
    },

    // Intro CTA
    'ielts.diagnostic.intro.start': {
      en: 'Start the placement test',
      ar: 'ابدأ اختبار تحديد المستوى',
    },

    // ─── Diagnostic: section headings + subtitles ───────────────────────
    'ielts.diagnostic.section.reading.title': { en: 'Part 1 - Reading', ar: 'الجزء 1 - Reading' },
    'ielts.diagnostic.section.reading.subtitle': {
      en: 'Read the passage, then answer the four questions below.',
      ar: 'اقرأ النص، وبعدها جاوب على الأسئلة الأربعة تحت.',
    },
    'ielts.diagnostic.section.listening.title': {
      en: 'Part 2 - Listening',
      ar: 'الجزء 2 - Listening',
    },
    'ielts.diagnostic.section.listening.subtitle': {
      en: 'In the real test you would hear this once. Read the transcript, then answer.',
      ar: 'بالاختبار الحقيقي بتسمعه مرة وحدة. اقرأ النص، وبعدها جاوب.',
    },
    'ielts.diagnostic.section.selfassess.title': {
      en: 'Part 3 - Writing & Speaking (self-estimate)',
      ar: 'الجزء 3 - Writing و Speaking (تقدير ذاتي)',
    },
    'ielts.diagnostic.section.selfassess.subtitle': {
      en: 'There is no quick way to auto-mark these, so rate yourself honestly. You will refine this with real practice in the Writing and Speaking modules.',
      ar: 'ما في طريقة سريعة نصحح فيها هذي تلقائياً، فقيّم نفسك بصدق. بتظبّط التقدير بالتدريب الحقيقي في وحدات Writing و Speaking.',
    },

    // Transcript chip
    'ielts.diagnostic.transcript': { en: 'Transcript', ar: 'النص المكتوب' },

    // ─── Diagnostic: True / False / Not Given option labels ─────────────
    'ielts.diagnostic.tfng.true': { en: 'True', ar: 'صح' },
    'ielts.diagnostic.tfng.false': { en: 'False', ar: 'خطأ' },
    'ielts.diagnostic.tfng.not_given': { en: 'Not Given', ar: 'غير مذكور' },

    // Gap-fill input placeholder
    'ielts.diagnostic.gap.placeholder': { en: 'Type your answer', ar: 'اكتب جوابك' },

    // ─── Diagnostic: self-assessment prompts + scale labels ─────────────
    // The 4-point ladder labels are shared across both productive skills; the
    // English values mirror diagnostic-items.ts exactly so English mode is
    // byte-identical and scoring (value→band) is untouched.
    'ielts.diagnostic.selfassess.level1.label': { en: 'Just starting', ar: 'لسّه في البداية' },
    'ielts.diagnostic.selfassess.level2.label': { en: 'Getting there', ar: 'أتحسّن شوي شوي' },
    'ielts.diagnostic.selfassess.level3.label': { en: 'Fairly confident', ar: 'واثق نوعاً ما' },
    'ielts.diagnostic.selfassess.level4.label': { en: 'Very confident', ar: 'واثق وايد' },

    // Writing prompt + 4-point confidence-scale descriptions
    'ielts.diagnostic.selfassess.writing.question': {
      en: 'How confident are you writing a formal essay or describing data in clear English?',
      ar: 'شقد أنت واثق إنك تكتب مقال رسمي أو تصف بيانات بإنجليزي واضح؟',
    },
    'ielts.diagnostic.selfassess.writing.level1.desc': {
      en: 'I find it hard to write more than a few simple sentences, and I make frequent mistakes.',
      ar: 'أحس صعب أكتب أكثر من كم جملة بسيطة، وأغلط وايد.',
    },
    'ielts.diagnostic.selfassess.writing.level2.desc': {
      en: 'I can write short paragraphs but struggle to organise ideas and often repeat basic vocabulary.',
      ar: 'أقدر أكتب فقرات قصيرة بس أعاني في ترتيب الأفكار وأكرّر مفردات بسيطة وايد.',
    },
    'ielts.diagnostic.selfassess.writing.level3.desc': {
      en: 'I can structure an essay with paragraphs and link ideas, with some varied vocabulary and occasional errors.',
      ar: 'أقدر أبني مقال بفقرات وأربط الأفكار، مع شوية تنويع بالمفردات وأخطاء أحياناً.',
    },
    'ielts.diagnostic.selfassess.writing.level4.desc': {
      en: 'I write well-organised, developed essays with a wide range of accurate grammar and vocabulary.',
      ar: 'أكتب مقالات منظّمة ومطوّرة مع مدى واسع من القواعد والمفردات الصحيحة.',
    },

    // Speaking prompt + 4-point confidence-scale descriptions
    'ielts.diagnostic.selfassess.speaking.question': {
      en: 'How confident are you speaking English about familiar and unfamiliar topics?',
      ar: 'شقد أنت واثق إنك تتكلم إنجليزي عن مواضيع تعرفها وما تعرفها؟',
    },
    'ielts.diagnostic.selfassess.speaking.level1.desc': {
      en: 'I can only say a few words or short phrases and pause a lot to find words.',
      ar: 'أقدر أقول كم كلمة أو عبارات قصيرة بس وأوقف وايد عشان ألقى الكلمات.',
    },
    'ielts.diagnostic.selfassess.speaking.level2.desc': {
      en: 'I can have a simple conversation but hesitate often and keep my answers short.',
      ar: 'أقدر أسوّي محادثة بسيطة بس أتردّد وايد وأخلّي أجوبتي قصيرة.',
    },
    'ielts.diagnostic.selfassess.speaking.level3.desc': {
      en: 'I can speak fairly fluently on familiar topics and give reasons, with some hesitation on harder ones.',
      ar: 'أقدر أتكلم بطلاقة نوعاً ما عن مواضيع أعرفها وأعطي أسباب، مع تردّد شوي بالمواضيع الأصعب.',
    },
    'ielts.diagnostic.selfassess.speaking.level4.desc': {
      en: 'I speak fluently and naturally on a wide range of topics with clear pronunciation and few errors.',
      ar: 'أتكلم بطلاقة وبشكل طبيعي عن مدى واسع من المواضيع مع نطق واضح وأخطاء قليلة.',
    },

    // ─── Diagnostic: submit gate + CTA ──────────────────────────────────
    'ielts.diagnostic.gate.answer_count': {
      en: 'Answer all {total} questions ({answered}/{total} done)',
      ar: 'جاوب على كل الأسئلة الـ {total} ({answered}/{total} خلصت)',
    },
    'ielts.diagnostic.gate.and': { en: ' and ', ar: ' و ' },
    'ielts.diagnostic.gate.rate_both': {
      en: 'rate both Writing and Speaking',
      ar: 'قيّم Writing و Speaking الاثنين',
    },
    'ielts.diagnostic.gate.to_see': { en: ' to see your estimate.', ar: ' عشان تشوف تقديرك.' },
    'ielts.diagnostic.cta.see_bands': {
      en: 'See my estimated bands',
      ar: 'شوف الـ Band المتوقع مالي',
    },

    // ─── Diagnostic: result ─────────────────────────────────────────────
    'ielts.diagnostic.result.overall_label': {
      en: 'Estimated overall band',
      ar: 'Band الكلي المتوقع',
    },
    'ielts.diagnostic.result.tally': {
      en: 'Reading: {readingCorrect}/{readingTotal} correct · Listening: {listeningCorrect}/{listeningTotal} correct',
      ar: 'Reading: {readingCorrect}/{readingTotal} صحيحة · Listening: {listeningCorrect}/{listeningTotal} صحيحة',
    },
    'ielts.diagnostic.result.tally_note': {
      en: 'This is a short placement set, so your Reading and Listening estimates are scaled from just a few questions. A full practice test in each module will give you a far more accurate band.',
      ar: 'هذي مجموعة تحديد مستوى قصيرة، فتقديرات Reading و Listening محسوبة من كم سؤال بس. اختبار تدريبي كامل في كل وحدة بيعطيك Band أدق بوايد.',
    },

    // CTAs
    'ielts.diagnostic.cta.build_plan': { en: 'Build my study plan', ar: 'ابنِ خطة الدراسة مالي' },
    'ielts.diagnostic.cta.retake': { en: 'Retake the test', ar: 'أعد الاختبار' },

    // ─── Shared caveat: "estimates, not official results" ───────────────
    'ielts.diagnostic.caveat.strong': {
      en: 'These are estimates, not official results.',
      ar: 'هذي تقديرات، مو نتائج رسمية.',
    },
    'ielts.diagnostic.caveat.body': {
      en: 'This placement test gives an indicative starting point. Writing and Speaking bands are AI estimates from a single short task - refine them with full practice and detailed AI feedback in the Writing and Speaking modules. Official IELTS bands can only come from a real exam.',
      ar: 'اختبار تحديد المستوى هذا يعطيك نقطة بداية تقريبية. Band الكتابة والمحادثة تقديرات بالذكاء الاصطناعي من مهمة قصيرة وحدة - ظبّطها بالتدريب الكامل وتقييم مفصّل بالذكاء الاصطناعي في وحدات Writing و Speaking. Band الـ IELTS الرسمي ما يجي إلا من امتحان حقيقي.',
    },

    // ─── Plan: page header ──────────────────────────────────────────────
    'ielts.plan.title': { en: 'My IELTS Study Plan', ar: 'خطة دراسة IELTS مالي' },
    'ielts.plan.subtitle': {
      en: 'A prioritised, weakest-first route to your target band - built from your placement test and practice so far.',
      ar: 'مسار مرتّب حسب الأولوية، يبدأ من أضعف مهارة، وصولاً لـ Band المستهدف - مبني على اختبار تحديد المستوى والتدريب اللي سويته لين الحين.',
    },

    // ─── Plan: empty state ──────────────────────────────────────────────
    'ielts.plan.empty.title': {
      en: 'Take the placement test first',
      ar: 'سوِّ اختبار تحديد المستوى الأول',
    },
    'ielts.plan.empty.body': {
      en: 'Your study plan is built from where you are now. Take the quick placement test and we’ll show you your current band per skill, the gap to your target, and exactly what to work on first.',
      ar: 'خطة دراستك مبنية على مستواك الحين. سوِّ اختبار تحديد المستوى السريع وبنوريك Band الحالي لكل مهارة، والفرق لين هدفك، وبالضبط شنو تشتغل عليه الأول.',
    },
    'ielts.plan.empty.cta': { en: 'Take the placement test', ar: 'سوِّ اختبار تحديد المستوى' },

    // ─── Plan: target + overall ─────────────────────────────────────────
    'ielts.plan.target.heading': { en: 'Your target', ar: 'هدفك' },
    'ielts.plan.target.body': {
      en: 'Pick the overall band you’re aiming for. Most universities ask for 6.0-7.0 overall. We’ll prioritise your weakest skills to get you there.',
      ar: 'اختر Band الكلي اللي تبيه. أغلب الجامعات تطلب 6.0-7.0 كلي. بنرتّب أضعف مهاراتك حسب الأولوية عشان توصل له.',
    },
    'ielts.plan.target.select_label': { en: 'Target band', ar: 'Band المستهدف' },
    'ielts.plan.target.option': { en: 'Band {band}', ar: 'Band {band}' },

    'ielts.plan.overall.current': { en: 'Current overall', ar: 'الكلي الحالي' },
    'ielts.plan.overall.target': { en: 'Target overall', ar: 'الكلي المستهدف' },
    'ielts.plan.overall.from_placement_note': {
      en: 'These figures come from your placement test. Once you complete real practice in each module, your plan will update to use those results instead.',
      ar: 'هذي الأرقام جاية من اختبار تحديد المستوى. أول ما تخلّص تدريب حقيقي في كل وحدة، بتتحدّث خطتك وتستخدم تلك النتائج بدالها.',
    },

    // ─── Plan: "Where you stand" + source tags ──────────────────────────
    'ielts.plan.stand.heading': { en: 'Where you stand', ar: 'وين موقفك' },
    'ielts.plan.tag.from_practice': { en: 'From practice', ar: 'من التدريب' },
    'ielts.plan.tag.from_placement': { en: 'From placement', ar: 'من تحديد المستوى' },
    'ielts.plan.tag.not_assessed': { en: 'Not assessed', ar: 'غير مقيَّم' },
    // Rendered as: "{current_label} <band> · {target_label} <band>" so the band
    // numbers keep their colour/weight spans. The trailing space in the labels
    // separates the word from the coloured number.
    'ielts.plan.stand.current_label': { en: 'Current ', ar: 'الحالي ' },
    'ielts.plan.stand.target_label': { en: 'target ', ar: 'المستهدف ' },
    'ielts.plan.stand.no_data': { en: 'No data yet', ar: 'ما في بيانات بعد' },
    'ielts.plan.stand.on_target': { en: 'On target', ar: 'على الهدف' },

    // ─── Plan: prioritised plan section ─────────────────────────────────
    'ielts.plan.plan.heading': {
      en: 'Your plan - weakest skills first',
      ar: 'خطتك - أضعف المهارات أول',
    },
    'ielts.plan.plan.lead_gap': {
      en: 'Start with {skill} - it has the largest gap to Band {target}. Work down the list in order.',
      ar: 'ابدأ بـ {skill} - عنده أكبر فرق لين Band {target}. كمّل القائمة بالترتيب.',
    },
    'ielts.plan.plan.lead_on_target': {
      en: 'You’re meeting your target across the board. Keep practising to stay sharp and consider raising your target.',
      ar: 'أنت محقّق هدفك في كل المهارات. كمّل تدريب عشان تبقى حاد وفكّر ترفع هدفك.',
    },

    // Plan step chips
    'ielts.plan.chip.on_target': { en: 'On target', ar: 'على الهدف' },
    'ielts.plan.chip.baseline_needed': { en: 'Baseline needed', ar: 'يحتاج خط أساس' },
    'ielts.plan.chip.gap': { en: '+{gap} band', ar: '+{gap} Band' },

    // Plan step CTA - {skill} stays the Latin skill label
    'ielts.plan.cta.practise': { en: 'Practise {skill}', ar: 'تدرّب على {skill}' },

    // Plan step copy - "no current band" (baseline)
    'ielts.plan.step.baseline.headline': {
      en: 'Get a baseline in {skill}',
      ar: 'احصل على خط أساس في {skill}',
    },
    'ielts.plan.step.baseline.action': {
      en: 'You haven’t practised {skill} yet, so we can’t measure the gap to Band {target}. Do one {taskKind} to set your starting point - it will reshape this whole plan.',
      ar: 'ما تدرّبت على {skill} بعد، فما نقدر نقيس الفرق لين Band {target}. سوِّ {taskKind} وحدة عشان تحدّد نقطة بدايتك - بتعيد تشكيل الخطة كلها.',
    },
    // {taskKind} variants for the baseline action
    'ielts.plan.taskkind.feedback': {
      en: 'task with AI feedback',
      ar: 'مهمة مع تقييم بالذكاء الاصطناعي',
    },
    'ielts.plan.taskkind.practice_set': { en: 'practice set', ar: 'مجموعة تدريب' },

    // Plan step copy - "meets target" (hold)
    'ielts.plan.step.hold.headline': {
      en: 'Hold your {skill} at Band {current}',
      ar: 'ثبّت {skill} مالك على Band {current}',
    },
    'ielts.plan.step.hold.action': {
      en: 'You’re already at or above your target of Band {target} here. Keep it sharp with occasional timed practice so it doesn’t slip, and pour your energy into your weaker skills first.',
      ar: 'أنت أصلاً على هدفك Band {target} أو فوقه هنا. خلّه حاد بتدريب مؤقّت بين فترة وفترة عشان ما ينزل، وركّز طاقتك على مهاراتك الأضعف الأول.',
    },

    // Plan step copy - "has a gap" (close)
    'ielts.plan.step.close.headline': {
      en: 'Close a {gap}-band gap in {skill}',
      ar: 'سُدّ فرق {gap} Band في {skill}',
    },
    // Size note + productive/receptive action are composed into one sentence by the page.
    'ielts.plan.step.close.action_lead': {
      en: 'You’re estimated at Band {current} and aiming for Band {target}.',
      ar: 'تقديرك Band {current} وتطمح لـ Band {target}.',
    },
    'ielts.plan.step.close.size_big': {
      en: 'This is your biggest gap, so it deserves the most time.',
      ar: 'هذا أكبر فرق عندك، فيستاهل أكثر وقت.',
    },
    'ielts.plan.step.close.size_medium': {
      en: 'A focused push here should move the needle quickly.',
      ar: 'دفعة مركّزة هنا بتحرّك النتيجة بسرعة.',
    },
    'ielts.plan.step.close.size_small': {
      en: 'You’re close - a little polish should get you there.',
      ar: 'أنت قريب - شوية تلميع بتوصّلك.',
    },
    'ielts.plan.step.close.action_productive': {
      en: 'Submit a {skillLower} task to get AI band feedback against the official criteria.',
      ar: 'أرسل مهمة {skillLower} عشان تاخذ تقييم Band بالذكاء الاصطناعي حسب المعايير الرسمية.',
    },
    'ielts.plan.step.close.action_receptive': {
      en: 'Work through targeted {skillLower} practice sets and review every answer you miss.',
      ar: 'اشتغل على مجموعات تدريب {skillLower} موجّهة وراجع كل جواب يفوتك.',
    },

    // ─── Plan: caveat + footer CTAs ─────────────────────────────────────
    'ielts.plan.caveat.strong': { en: 'Bands here are estimates.', ar: 'الـ Band هنا تقديرات.' },
    'ielts.plan.caveat.body': {
      en: 'Placement and Writing/Speaking self-estimates are starting points, not official results. The more real practice you do in each module, the more accurate this plan becomes.',
      ar: 'تحديد المستوى وتقديرات Writing/Speaking الذاتية نقاط بداية، مو نتائج رسمية. كل ما تدرّبت أكثر بشكل حقيقي في كل وحدة، صارت هذي الخطة أدق.',
    },
    'ielts.plan.cta.retake': { en: 'Retake the placement test', ar: 'أعد اختبار تحديد المستوى' },
    'ielts.plan.cta.view_progress': { en: 'View my progress', ar: 'شوف تقدّمي' },
    'ielts.plan.cta.dated_planner': {
      en: 'Build a dated study plan',
      ar: 'سوّ خطة دراسة بمواعيد الاختبار',
    },
  }
