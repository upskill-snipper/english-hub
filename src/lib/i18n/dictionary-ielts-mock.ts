// ─── IELTS Mock Test dictionary shard ───────────────────────────────────────
// UI chrome for the full timed mock-test engine under src/app/ielts/mock/:
//   • page.tsx (client orchestrator) + the stage subcomponents
//     (MockIntro, MockReport, ListeningStage, ReadingStage, WritingStage,
//      SpeakingStage, StageHeader, CountdownTimer, ObjectiveQuestions).
//
// SCOPE: interface copy ONLY - the intro/setup screen, section + stage headers,
// timer labels, submit / navigation buttons, word-count chrome, the Speaking
// long-turn prep labels, every resilience/status note, and the whole band-report
// chrome (per-section + overall band labels, the "what this means" explainer,
// the criteria-breakdown heading, and the "practice only / not official"
// disclaimers). NO test CONTENT lives here: the question prompts, reading
// passages, listening transcripts, writing task prompts and speaking cue cards
// all come from the imported item banks and are never translated.
//
// This shard is NOT wired into the global lookup() chain in dictionary.ts - it
// is resolved LOCALLY by useMockT() (see src/app/ielts/mock/use-mock-t.ts),
// modelled on usePlanT() in src/app/ielts/plan/page.tsx. The namespace is
// `ielts.mock.*` so it can never collide with the curated shared keys.
//
// Khaleeji (Gulf) Arabic per the master dictionary header conventions
// (شنو/وايد/الحين/ببلاش/شوف/دوّر …; Levantine forms شو/كيفك/ليش banned). Brand +
// technical terms stay LATIN: The English Hub, IELTS, Band, Academic, General
// Training, Task 1 / Task 2, Part 1/2/3, Listening / Reading / Writing /
// Speaking, AI, True / False / Not Given. Bands, timers, counts and word counts
// stay digits. `{token}` placeholders interpolate dynamic values (counts, titles,
// section names, word counts, part numbers) so a phrase stays translatable whole.
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_MOCK_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // ══════════════════════════════════════════════════════════════════════════
  // INTRO / SETUP  (MockIntro.tsx - owns the route's single <h1>)
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Header ───────────────────────────────────────────────────────────────
  'ielts.mock.intro.title': { en: 'Full IELTS Mock Test', ar: 'اختبار IELTS تجريبي كامل' },
  'ielts.mock.intro.subtitle': {
    en: 'Timed, exam-realistic practice across all four skills - with a predicted band.',
    ar: 'تدريب مؤقّت وواقعي زي الامتحان في المهارات الأربع كلها - مع Band متوقع.',
  },

  // ─── Setup card ───────────────────────────────────────────────────────────
  'ielts.mock.intro.setup_badge': { en: 'Set up your mock', ar: 'جهّز اختبارك التجريبي' },
  // Renders around <strong>{track}</strong> and <strong>{minutes}</strong> tokens.
  'ielts.mock.intro.lead': {
    en: 'You are about to sit a complete {track} IELTS mock. The four sections run back-to-back in the real exam order, each under its own countdown. When a section’s timer reaches zero it is submitted automatically and you cannot return to it - exactly like the real test. Set aside about {minutes} of uninterrupted time.',
    ar: 'أنت على وشك تسوّي اختبار IELTS تجريبي {track} كامل. الأقسام الأربعة تجي ورا بعض بترتيب الامتحان الحقيقي، كل واحد تحت مؤقّته الخاص. أول ما يوصل مؤقّت القسم صفر يتسلّم تلقائياً وما تقدر ترجع له - بالضبط زي الامتحان الحقيقي. خصّص لك حوالي {minutes} وقت بدون مقاطعة.',
  },
  'ielts.mock.intro.duration_value': { en: '2 hours 45 minutes', ar: 'ساعتين و45 دقيقة' },

  // ─── Structure grid (section names stay Latin; minutes/blurbs translate) ────
  'ielts.mock.intro.structure.listening.minutes': { en: '≈ 30 minutes', ar: '≈ 30 دقيقة' },
  'ielts.mock.intro.structure.listening.blurb': {
    en: 'Four recorded sections, ~40 questions, marked automatically.',
    ar: 'أربعة أقسام مسجّلة، ~40 سؤال، تتصحّح تلقائياً.',
  },
  'ielts.mock.intro.structure.reading.minutes': { en: '60 minutes', ar: '60 دقيقة' },
  'ielts.mock.intro.structure.reading.blurb': {
    en: 'Long passages with ~40 questions, marked automatically.',
    ar: 'نصوص طويلة فيها ~40 سؤال، تتصحّح تلقائياً.',
  },
  'ielts.mock.intro.structure.writing.minutes': { en: '60 minutes', ar: '60 دقيقة' },
  'ielts.mock.intro.structure.writing.blurb': {
    en: 'Task 1 + Task 2 in one hour, given an AI examiner band.',
    ar: 'Task 1 + Task 2 في ساعة وحدة، ياخذون Band من مصحّح AI.',
  },
  'ielts.mock.intro.structure.speaking.minutes': { en: '≈ 14 minutes', ar: '≈ 14 دقيقة' },
  'ielts.mock.intro.structure.speaking.blurb': {
    en: 'A Part 1 / 2 / 3 interview, scored from a typed transcript.',
    ar: 'مقابلة Part 1 / 2 / 3، تتقيّم من نص مكتوب.',
  },

  // ─── What this mock contains (titles + counts are tokens) ───────────────────
  'ielts.mock.intro.contains.heading': {
    en: 'This mock contains',
    ar: 'هذا الاختبار التجريبي فيه',
  },
  // "Listening: {title} ({n} questions)"
  'ielts.mock.intro.contains.listening': {
    en: 'Listening: {title} ({n} questions)',
    ar: 'Listening: {title} ({n} سؤال)',
  },
  'ielts.mock.intro.contains.reading': {
    en: 'Reading: {title} ({n} questions)',
    ar: 'Reading: {title} ({n} سؤال)',
  },
  // "Writing: {title1} (Task 1) and {title2} (Task 2)"
  'ielts.mock.intro.contains.writing': {
    en: 'Writing: {title1} (Task 1) and {title2} (Task 2)',
    ar: 'Writing: {title1} (Task 1) و{title2} (Task 2)',
  },
  // "Speaking: a Part 1, Part 2 and Part 3 set ({title} for the long turn)"
  'ielts.mock.intro.contains.speaking': {
    en: 'Speaking: a Part 1, Part 2 and Part 3 set ({title} for the long turn)',
    ar: 'Speaking: مجموعة Part 1 وPart 2 وPart 3 ({title} للدور الطويل)',
  },

  // ─── Predicted-band disclaimer (intro) ──────────────────────────────────────
  // Three <strong> spans embedded; kept inline with {open}/{close}-free phrasing.
  'ielts.mock.intro.disclaimer.lead': { en: 'This is a', ar: 'هذا' },
  'ielts.mock.intro.disclaimer.practice': { en: 'practice mock', ar: 'اختبار تجريبي للتمرين' },
  'ielts.mock.intro.disclaimer.mid': { en: '. Every band is an', ar: '. كل Band هو' },
  'ielts.mock.intro.disclaimer.estimate': {
    en: 'estimate for preparation only',
    ar: 'تقدير للتحضير بس',
  },
  'ielts.mock.intro.disclaimer.tail': {
    en: '- it is not an official IELTS result, and your score on test day may differ. Writing and Speaking bands are generated by AI.',
    ar: '- هو مو نتيجة IELTS رسمية، ودرجتك يوم الامتحان ممكن تختلف. درجات Band مال Writing وSpeaking تتولّد بالـ AI.',
  },

  // ─── Start / fallback ───────────────────────────────────────────────────────
  'ielts.mock.intro.start': { en: 'Start full mock', ar: 'ابدأ الاختبار الكامل' },
  'ielts.mock.intro.back_to_plan': { en: 'Back to study plan', ar: 'ارجع لخطة الدراسة' },
  // "A full {track} mock could not be assembled …"
  'ielts.mock.intro.assemble_fail': {
    en: 'A full {track} mock could not be assembled from the practice library right now. Please try the individual skill pages, or switch track.',
    ar: 'ما قدرنا نجمّع اختبار {track} تجريبي كامل من مكتبة التمرين الحين. جرّب صفحات المهارات وحدة وحدة، أو بدّل الـ track.',
  },

  // ─── Quick links (intro footer) ─────────────────────────────────────────────
  'ielts.mock.intro.view_progress': { en: 'View progress', ar: 'شوف التقدّم' },
  'ielts.mock.intro.study_plan': { en: 'Study plan', ar: 'خطة الدراسة' },

  // ══════════════════════════════════════════════════════════════════════════
  // STAGE HEADER + TIMER  (StageHeader.tsx, CountdownTimer.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  // Screen-reader announcement: "{time} remaining" (time is a token, stays mm:ss).
  'ielts.mock.timer.remaining': { en: '{time} remaining', ar: 'باقي {time}' },

  // Section title bars - "Section {n} of 4 · {skill}" (skill stays Latin).
  'ielts.mock.stage.title': { en: 'Section {n} of 4 · {skill}', ar: 'القسم {n} من 4 · {skill}' },
  // Step sub-label under the title - "{skill} · {answered}/{total} answered".
  'ielts.mock.stage.step_answered': {
    en: '{skill} · {answered}/{total} answered',
    ar: '{skill} · {answered}/{total} مجاوب',
  },
  // Step sub-label for Writing - "{skill} · Task 1 + Task 2" (tasks stay Latin).
  'ielts.mock.stage.step_writing': {
    en: '{skill} · Task 1 + Task 2',
    ar: '{skill} · Task 1 + Task 2',
  },
  // Step sub-label for Speaking - "{skill} · Parts 1-3" (Parts stay Latin).
  'ielts.mock.stage.step_speaking': { en: '{skill} · Parts 1-3', ar: '{skill} · Parts 1-3' },

  // ══════════════════════════════════════════════════════════════════════════
  // OBJECTIVE QUESTIONS  (ObjectiveQuestions.tsx - type labels + gap placeholder)
  // ══════════════════════════════════════════════════════════════════════════

  // True/False/Not Given option labels stay LATIN per brand-term rule.
  'ielts.mock.q.tfng.true': { en: 'True', ar: 'True' },
  'ielts.mock.q.tfng.false': { en: 'False', ar: 'False' },
  'ielts.mock.q.tfng.not_given': { en: 'Not Given', ar: 'Not Given' },
  // Question-type chips (chrome - describe the answer format).
  'ielts.mock.q.type.mcq': { en: 'Multiple choice', ar: 'اختيار من متعدد' },
  'ielts.mock.q.type.tfng': { en: 'True / False / Not Given', ar: 'True / False / Not Given' },
  'ielts.mock.q.type.gap': { en: 'Sentence completion', ar: 'إكمال الجملة' },
  'ielts.mock.q.type.matching': { en: 'Matching', ar: 'مطابقة' },
  'ielts.mock.q.gap_placeholder': { en: 'Type your answer', ar: 'اكتب إجابتك' },
  'ielts.mock.q.matching_select': { en: 'Select…', ar: 'اختر…' },

  // ══════════════════════════════════════════════════════════════════════════
  // LISTENING STAGE  (ListeningStage.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.listening.submit': { en: 'Submit Listening', ar: 'سلّم Listening' },
  'ielts.mock.listening.intro': {
    en: 'Play each section’s audio, then answer its questions. In the real exam the recording plays once - here you may replay to practise. Your answers are marked automatically when you submit or when the timer reaches zero.',
    ar: 'شغّل صوت كل قسم، وبعدها جاوب أسئلته. في الامتحان الحقيقي التسجيل يشتغل مرة وحدة - هني تقدر تعيده عشان تتدرّب. إجاباتك تتصحّح تلقائياً أول ما تسلّم أو أول ما يوصل المؤقّت صفر.',
  },
  // Part chip in the Listening body - "Part {n}" (Part stays Latin).
  'ielts.mock.listening.part': { en: 'Part {n}', ar: 'Part {n}' },
  // Question range under a section title - "Questions {start}-{end}".
  'ielts.mock.listening.questions_range': {
    en: 'Questions {start}-{end}',
    ar: 'الأسئلة {start}-{end}',
  },
  // Footer progress line - wraps <strong>{answered}</strong> then "of {total}…".
  'ielts.mock.listening.footer_lead': { en: 'You have answered', ar: 'جاوبت' },
  'ielts.mock.listening.footer_tail': {
    en: 'of {total}. Submitting moves you on to Reading and you cannot return.',
    ar: 'من {total}. التسليم ينقلك لـ Reading وما تقدر ترجع.',
  },
  'ielts.mock.listening.finish': {
    en: 'Finish Listening & start Reading',
    ar: 'خلّص Listening وابدأ Reading',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // READING STAGE  (ReadingStage.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.reading.submit': { en: 'Submit Reading', ar: 'سلّم Reading' },
  // "Read each passage and answer all {total} questions in 60 minutes…"
  'ielts.mock.reading.intro': {
    en: 'Read each passage and answer all {total} questions in 60 minutes. Manage your own time across the passages. Answers are marked automatically on submit or at zero.',
    ar: 'اقرأ كل نص وجاوب كل الـ {total} سؤال في 60 دقيقة. نظّم وقتك بنفسك بين النصوص. الإجابات تتصحّح تلقائياً عند التسليم أو عند الصفر.',
  },
  // Passage chip - "Passage {n}".
  'ielts.mock.reading.passage': { en: 'Passage {n}', ar: 'النص {n}' },
  'ielts.mock.reading.footer_lead': { en: 'You have answered', ar: 'جاوبت' },
  'ielts.mock.reading.footer_tail': {
    en: 'of {total}. Submitting moves you on to Writing and you cannot return.',
    ar: 'من {total}. التسليم ينقلك لـ Writing وما تقدر ترجع.',
  },
  'ielts.mock.reading.finish': {
    en: 'Finish Reading & start Writing',
    ar: 'خلّص Reading وابدأ Writing',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WRITING STAGE  (WritingStage.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.writing.submit': { en: 'Submit Writing', ar: 'سلّم Writing' },
  'ielts.mock.writing.intro_title': {
    en: 'Writing - one hour for both tasks',
    ar: 'Writing - ساعة وحدة للمهمتين',
  },
  // "Spend about 20 minutes on Task 1 ({min1}+ words) and 40 minutes on Task 2
  //  ({min2}+ words). Switch freely between the two…"
  'ielts.mock.writing.intro_body': {
    en: 'Spend about 20 minutes on Task 1 ({min1}+ words) and 40 minutes on Task 2 ({min2}+ words). Switch freely between the two. When you submit, or when the clock reaches zero, each response is sent for an AI band - and is saved either way.',
    ar: 'اقضِ حوالي 20 دقيقة على Task 1 ({min1}+ كلمة) و40 دقيقة على Task 2 ({min2}+ كلمة). بدّل بينهم وقت ما تبي. أول ما تسلّم، أو أول ما يوصل المؤقّت صفر، كل إجابة تنرسل لـ Band بالـ AI - وتنحفظ على كل حال.',
  },
  // Writing-task tabs - "Task N" stays Latin; the "·{n}w" suffix is a count token.
  'ielts.mock.writing.tab_task1': { en: 'Task 1', ar: 'Task 1' },
  'ielts.mock.writing.tab_task2': { en: 'Task 2', ar: 'Task 2' },
  // Words-so-far suffix on a tab - "· {n}w".
  'ielts.mock.writing.tab_words': { en: '· {n}w', ar: '· {n}ك' },
  // Eyebrow above the active prompt - stays Latin (brand task names).
  'ielts.mock.writing.eyebrow_task1': { en: 'Writing Task 1', ar: 'Writing Task 1' },
  'ielts.mock.writing.eyebrow_task2': { en: 'Writing Task 2', ar: 'Writing Task 2' },
  // Response textarea label - "Your response - Task 1/2" (task name stays Latin).
  'ielts.mock.writing.response_label': {
    en: 'Your response - {task}',
    ar: 'إجابتك - {task}',
  },
  'ielts.mock.writing.placeholder_task1': {
    en: 'Write your report here…',
    ar: 'اكتب تقريرك هني…',
  },
  'ielts.mock.writing.placeholder_task2': {
    en: 'Write your essay here…',
    ar: 'اكتب مقالك هني…',
  },
  // Word count chrome - singular / plural "{n} word(s)" (count is a token).
  'ielts.mock.writing.word_one': { en: '{n} word', ar: '{n} كلمة' },
  'ielts.mock.writing.word_other': { en: '{n} words', ar: '{n} كلمة' },
  // "· aim for {min}+ ({remaining} to go)"
  'ielts.mock.writing.aim_for': {
    en: '· aim for {min}+ ({remaining} to go)',
    ar: '· اهدف لـ {min}+ (باقي {remaining})',
  },
  'ielts.mock.writing.minimum_reached': { en: '· minimum reached', ar: '· وصلت الحد الأدنى' },
  'ielts.mock.writing.marking_notice': {
    en: 'Marking your writing… this can take a few seconds. Please wait.',
    ar: 'نصحّح كتابتك… ممكن تاخذ ثواني. لحظة من فضلك.',
  },
  'ielts.mock.writing.finish_warning': {
    en: 'Submitting marks both tasks and moves you on to Speaking. You cannot return to Writing.',
    ar: 'التسليم يصحّح المهمتين وينقلك لـ Speaking. ما تقدر ترجع لـ Writing.',
  },
  'ielts.mock.writing.finish': {
    en: 'Finish Writing & start Speaking',
    ar: 'خلّص Writing وابدأ Speaking',
  },
  // Resilience note - neither task could be band-scored.
  'ielts.mock.writing.note_none_scored': {
    en: 'Your Task 1 and Task 2 responses were recorded, but an AI band could not be generated this time (the feedback service may be unavailable, over its daily limit, or require a Premium subscription).',
    ar: 'إجاباتك مال Task 1 وTask 2 تسجّلت، بس ما قدرنا نطلّع Band بالـ AI هالمرة (خدمة التقييم ممكن تكون مو متوفرة، أو تجاوزت حدّها اليومي، أو تحتاج اشتراك Premium).',
  },
  // Resilience note - only one of the two tasks scored.
  'ielts.mock.writing.note_one_scored': {
    en: 'Only one of your two tasks could be band-scored; the other was recorded as submitted.',
    ar: 'وحدة بس من مهمتيك قدرنا نعطيها Band؛ والثانية تسجّلت كمسلّمة.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SPEAKING STAGE  (SpeakingStage.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.speaking.submit': { en: 'Submit Speaking', ar: 'سلّم Speaking' },
  'ielts.mock.speaking.intro_title': {
    en: 'Speaking - about 14 minutes, three parts',
    ar: 'Speaking - حوالي 14 دقيقة، ثلاثة أجزاء',
  },
  'ielts.mock.speaking.intro_body': {
    en: 'Answer each part aloud as you would with an examiner. Recording is optional and only for your own review - it is never uploaded. To get a predicted band, type a little of what you said in each box; the text is what we assess in this version.',
    ar: 'جاوب كل جزء بصوت عالي زي ما تسوّي مع مصحّح. التسجيل اختياري ولمراجعتك الخاصة بس - ما يترفع أبداً. عشان تاخذ Band متوقع، اكتب شوي من اللي قلته في كل خانة؛ النص هو اللي نقيّمه في هالنسخة.',
  },
  // Part badges (Part N stays Latin; the role descriptor translates).
  'ielts.mock.speaking.badge_part1': { en: 'Part 1 · Interview', ar: 'Part 1 · مقابلة' },
  'ielts.mock.speaking.badge_part2': {
    en: 'Part 2 · Long turn (cue card)',
    ar: 'Part 2 · دور طويل (بطاقة موضوع)',
  },
  'ielts.mock.speaking.badge_part3': { en: 'Part 3 · Discussion', ar: 'Part 3 · نقاش' },
  // Long-turn sub-timer states.
  'ielts.mock.speaking.longturn_idle': {
    en: 'You get 1 minute to prepare, then up to 2 minutes to speak.',
    ar: 'عندك دقيقة وحدة تحضّر، وبعدها لين دقيقتين تتكلّم.',
  },
  // "Preparing - {time}" / "Speaking - {time}" (time stays mm:ss; Speaking Latin).
  'ielts.mock.speaking.longturn_prep': { en: 'Preparing - {time}', ar: 'تحضير - {time}' },
  'ielts.mock.speaking.longturn_speaking': { en: 'Speaking - {time}', ar: 'Speaking - {time}' },
  'ielts.mock.speaking.longturn_done': { en: 'Long turn finished.', ar: 'خلص الدور الطويل.' },
  'ielts.mock.speaking.start_prep': { en: 'Start preparation', ar: 'ابدأ التحضير' },
  'ielts.mock.speaking.start_speaking': { en: 'Start speaking now', ar: 'ابدأ تتكلّم الحين' },
  'ielts.mock.speaking.stop': { en: 'Stop', ar: 'وقّف' },
  'ielts.mock.speaking.part_placeholder': {
    en: 'Type a little of what you said (optional, but needed for a band)…',
    ar: 'اكتب شوي من اللي قلته (اختياري، بس لازم عشان Band)…',
  },
  'ielts.mock.speaking.marking_notice': {
    en: 'Assessing your speaking… this can take a few seconds. Please wait.',
    ar: 'نقيّم كلامك… ممكن تاخذ ثواني. لحظة من فضلك.',
  },
  // Footer - wraps a {n}-words count token: "…Typed {n} words so far across the three parts."
  'ielts.mock.speaking.finish_warning': {
    en: 'Submitting finishes the mock and takes you to your band report. Typed {n} words so far across the three parts.',
    ar: 'التسليم يخلّص الاختبار التجريبي وياخذك لتقرير Band مالك. كتبت {n} كلمة لين الحين عبر الأجزاء الثلاثة.',
  },
  'ielts.mock.speaking.finish': {
    en: 'Finish mock & see my band',
    ar: 'خلّص الاختبار وشوف Band مالي',
  },
  // Resilience notes.
  'ielts.mock.speaking.note_too_short': {
    en: 'Your spoken answers were captured, but there was too little typed text to generate an AI band. Type a little of what you said next time for a predicted Speaking band.',
    ar: 'إجاباتك المنطوقة انحفظت، بس النص المكتوب كان قليل وما يكفي عشان نطلّع Band بالـ AI. المرة الجاية اكتب شوي من اللي قلته عشان تاخذ Band متوقع لـ Speaking.',
  },
  'ielts.mock.speaking.note_service_unavailable': {
    en: 'Your spoken answers were recorded, but an AI band could not be generated this time (the feedback service may be unavailable, over its daily limit, or require a Premium subscription).',
    ar: 'إجاباتك المنطوقة تسجّلت، بس ما قدرنا نطلّع Band بالـ AI هالمرة (خدمة التقييم ممكن تكون مو متوفرة، أو تجاوزت حدّها اليومي، أو تحتاج اشتراك Premium).',
  },
  'ielts.mock.speaking.note_unreadable': {
    en: 'Your spoken answers were recorded, but the AI feedback was unreadable this time.',
    ar: 'إجاباتك المنطوقة تسجّلت، بس تقييم الـ AI كان غير مقروء هالمرة.',
  },
  'ielts.mock.speaking.note_network_failed': {
    en: 'Your spoken answers were recorded, but the network request for AI feedback failed.',
    ar: 'إجاباتك المنطوقة تسجّلت، بس طلب الشبكة لتقييم الـ AI فشل.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // REPORT  (MockReport.tsx - predicted band report chrome)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.report.title': { en: 'Your mock band report', ar: 'تقرير Band مال اختبارك التجريبي' },
  // "Predicted {track} IELTS bands - practice only, not an official result."
  'ielts.mock.report.subtitle': {
    en: 'Predicted {track} IELTS bands - practice only, not an official result.',
    ar: 'درجات Band متوقعة لـ IELTS {track} - للتمرين بس، مو نتيجة رسمية.',
  },
  // Overall band hero.
  'ielts.mock.report.overall_label': { en: 'Predicted overall band', ar: 'Band الكلي المتوقع' },
  // "Overall needs all four sections scored ({n}/4 so far)."
  'ielts.mock.report.overall_incomplete': {
    en: 'Overall needs all four sections scored ({n}/4 so far).',
    ar: 'Band الكلي يحتاج تقييم الأقسام الأربعة كلها ({n}/4 لين الحين).',
  },
  'ielts.mock.report.overall_explainer': {
    en: 'The overall band is the average of your four section bands, rounded the way IELTS rounds. It is an estimate for preparation and may differ from your result on test day.',
    ar: 'Band الكلي هو متوسط درجات Band مال أقسامك الأربعة، مقرّب بنفس طريقة تقريب IELTS. هو تقدير للتحضير وممكن يختلف عن نتيجتك يوم الامتحان.',
  },
  // Per-section labels (skill names stay Latin).
  'ielts.mock.report.label.listening': { en: 'Listening', ar: 'Listening' },
  'ielts.mock.report.label.reading': { en: 'Reading', ar: 'Reading' },
  'ielts.mock.report.label.writing': { en: 'Writing', ar: 'Writing' },
  'ielts.mock.report.label.speaking': { en: 'Speaking', ar: 'Speaking' },
  // Per-section detail lines.
  // "{correct}/{total} correct" (counts are tokens).
  'ielts.mock.report.detail.correct': {
    en: '{correct}/{total} correct',
    ar: '{correct}/{total} صح',
  },
  'ielts.mock.report.detail.not_completed': { en: 'Not completed', ar: 'ما خُلّص' },
  'ielts.mock.report.detail.writing_scored': {
    en: 'AI examiner band (Task 1 + Task 2)',
    ar: 'Band من مصحّح AI (Task 1 + Task 2)',
  },
  'ielts.mock.report.detail.speaking_scored': {
    en: 'AI band from your transcript',
    ar: 'Band بالـ AI من نصّك',
  },
  'ielts.mock.report.detail.recorded': { en: 'Responses recorded', ar: 'الإجابات تسجّلت' },
  // "What this means" explainer.
  'ielts.mock.report.what_heading': { en: 'What this means', ar: 'شنو يعني هذا' },
  // Scored variant - wraps <strong>{band}</strong> and <strong>{tier}</strong> tokens.
  'ielts.mock.report.what_scored': {
    en: 'A predicted overall band of {band} places you at {tier}. Your lowest section is the fastest place to gain marks - open your study plan to focus your next sessions there, and re-sit a mock in a week or two to see the movement.',
    ar: 'Band كلي متوقع قدره {band} يحطّك عند {tier}. أوطى قسم عندك هو أسرع مكان تكسب فيه درجات - افتح خطة دراستك عشان تركّز جلساتك الجاية هناك، وأعِد اختبار تجريبي بعد أسبوع أو أسبوعين عشان تشوف التغيّر.',
  },
  // Incomplete variant - "{n}" sections scored.
  'ielts.mock.report.what_incomplete': {
    en: 'You have a band for {n} of the four sections. Writing and Speaking are scored by AI and need a Premium subscription and a typed response; complete those to see your full predicted overall band. Your section bands are still saved to your progress.',
    ar: 'عندك Band لـ {n} من الأقسام الأربعة. Writing وSpeaking يتقيّمون بالـ AI ويحتاجون اشتراك Premium وإجابة مكتوبة؛ كمّلهم عشان تشوف Band الكلي المتوقع كامل. درجات Band مال أقسامك محفوظة في تقدّمك على كل حال.',
  },
  // Criteria-breakdown heading - "{skill} - criteria breakdown" (skill stays Latin).
  'ielts.mock.report.criteria_heading': {
    en: '{skill} - criteria breakdown',
    ar: '{skill} - تفصيل المعايير',
  },
  // Actions.
  'ielts.mock.report.sit_another': { en: 'Sit another mock', ar: 'سوِّ اختبار تجريبي ثاني' },
  'ielts.mock.report.study_plan': { en: 'Study plan', ar: 'خطة الدراسة' },
  'ielts.mock.report.view_progress': { en: 'View progress', ar: 'شوف التقدّم' },
  // Footer disclaimer.
  'ielts.mock.report.footer_disclaimer': {
    en: 'Predicted bands are for IELTS preparation only and are not affiliated with or endorsed by the official IELTS test partners.',
    ar: 'درجات Band المتوقعة للتحضير لـ IELTS بس وما لها علاقة بشركاء اختبار IELTS الرسميين ولا معتمدة منهم.',
  },
}
