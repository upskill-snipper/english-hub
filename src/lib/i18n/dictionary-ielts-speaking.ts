// ─── IELTS Speaking module dictionary shard ─────────────────────────────────
// UI chrome (hero, part selector, prep/speaking timer, the self-review Recorder,
// the transcript box, submit/loading/error states, and the results labels) for
// src/app/ielts/speaking/page.tsx and its _components/Recorder.tsx.
//
// SCOPE: this shard translates the *interface* only. The practice CONTENT - the
// speaking cue cards / questions / prompts (./speaking-cues.ts) and the AI
// feedback text returned by /api/ielts/speaking-feedback - stays English and has
// NO keys here. IELTS is an English exam, so the surrounding Arabic chrome wraps
// English content.
//
// Khaleeji (Gulf) Arabic per the master dictionary header conventions
// (شنو/وايد/الحين/ببلاش …; Levantine forms banned). Brand + technical terms stay
// Latin even inside Arabic text: IELTS, Band, Part 1/2/3, and the four criteria
// names (Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy,
// Pronunciation). Time digits (60, 2 min) stay numeric. Cross-module strings
// (ielts.skill.*, ielts.band.*, ielts.cta.*, ielts.estimate_note) are reused
// from ./dictionary-ielts.ts rather than duplicated here.
//
// Wired into src/lib/i18n/dictionary.ts centrally (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_SPEAKING_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // ─── Back link ─────────────────────────────────────────────────────────
  'ielts.speaking.back': { en: 'Back to IELTS', ar: 'ارجع لـ IELTS' },

  // ─── Hero ──────────────────────────────────────────────────────────────
  'ielts.speaking.hero.eyebrow': {
    en: 'IELTS Speaking · Parts 1-3',
    ar: 'IELTS Speaking · Part 1-3',
  },
  'ielts.speaking.hero.title': {
    en: 'IELTS Speaking Practice',
    ar: 'تدريب IELTS Speaking',
  },
  'ielts.speaking.hero.subtitle': {
    en: 'Choose a question set, record yourself for private self-review, then type what you said to get an estimated band for each of the four IELTS Speaking criteria - Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation.',
    ar: 'اختر مجموعة أسئلة، سجّل نفسك لمراجعة خاصة، وبعدها اكتب اللي قلته عشان تاخذ تقدير Band لكل معيار من معايير IELTS Speaking الأربعة - Fluency & Coherence وLexical Resource وGrammatical Range & Accuracy وPronunciation.',
  },
  // Wave-1 disclaimer in the hero - split so the bold lead can stay separate.
  'ielts.speaking.hero.notice.lead': {
    en: 'Wave 1, transcript-based.',
    ar: 'Wave 1، مبني على النص.',
  },
  'ielts.speaking.hero.notice.body': {
    en: 'Your recording stays on your device and is never uploaded. We score the words you type, so Pronunciation is a best-effort estimate and Fluency is inferred from your transcript. Live auto-transcription and full pronunciation scoring are coming soon.',
    ar: 'تسجيلك يبقى على جهازك وما يترفع أبداً. إحنا نقيّم الكلمات اللي تكتبها، فعشان كذا Pronunciation تقدير على قدر الإمكان وFluency نستنتجها من النص مالك. التفريغ التلقائي المباشر وتقييم النطق الكامل بيوصلون قريب.',
  },

  // ─── Cue picker ──────────────────────────────────────────────────────────
  'ielts.speaking.picker.title': { en: 'Choose a question set', ar: 'اختر مجموعة أسئلة' },
  // Sub-line shown on a Part 1/3 card: "{n} questions". Number stays a digit.
  'ielts.speaking.picker.questions': { en: 'questions', ar: 'أسئلة' },

  // ─── Part badges (technical "Part N" stays Latin; the label is translated) ─
  'ielts.speaking.part1.badge': { en: 'Part 1 · Interview', ar: 'Part 1 · مقابلة' },
  'ielts.speaking.part2.badge': { en: 'Part 2 · Long turn', ar: 'Part 2 · حديث طويل' },
  'ielts.speaking.part3.badge': { en: 'Part 3 · Discussion', ar: 'Part 3 · نقاش' },

  // ─── Prompt card descriptions ──────────────────────────────────────────────
  'ielts.speaking.prompt.desc.part2': {
    en: 'You get 60 seconds to prepare, then speak for up to 2 minutes. Cover all the bullet points.',
    ar: 'عندك 60 ثانية للتحضير، وبعدها تتكلم لين 2 دقيقة. غطِّ كل النقاط.',
  },
  'ielts.speaking.prompt.desc.other': {
    en: 'Answer each question as you would in the real interview - aim for full, developed answers.',
    ar: 'جاوب على كل سؤال مثل ما بتسوي في المقابلة الحقيقية - خلِّ إجاباتك كاملة ومتوسّعة.',
  },

  // ─── Part 2 timer ──────────────────────────────────────────────────────────
  // Phase headings
  'ielts.speaking.timer.heading.idle': { en: 'Ready when you are', ar: 'جاهز متى ما تبي' },
  'ielts.speaking.timer.heading.prep': { en: 'Preparation time', ar: 'وقت التحضير' },
  'ielts.speaking.timer.heading.speaking': {
    en: 'Speaking - your long turn',
    ar: 'تتكلم - حديثك الطويل',
  },
  'ielts.speaking.timer.heading.done': { en: 'Time complete', ar: 'انتهى الوقت' },
  // Phase helper lines (60s / 2-minute kept numeric)
  'ielts.speaking.timer.help.idle': {
    en: 'Start the 60-second prep timer, jot a few notes, then speak for up to 2 minutes.',
    ar: 'شغّل مؤقّت التحضير 60 ثانية، دوّن لك بعض الملاحظات، وبعدها تكلم لين 2 دقيقة.',
  },
  'ielts.speaking.timer.help.prep': {
    en: 'Plan your answer. Recording is optional during prep.',
    ar: 'رتّب إجابتك. التسجيل اختياري وقت التحضير.',
  },
  'ielts.speaking.timer.help.speaking': {
    en: 'Speak now and record yourself for self-review.',
    ar: 'تكلم الحين وسجّل نفسك للمراجعة الذاتية.',
  },
  'ielts.speaking.timer.help.done': {
    en: 'Now type what you said below to get band feedback.',
    ar: 'الحين اكتب اللي قلته تحت عشان تاخذ تقييم Band.',
  },
  // Timer buttons (60s kept numeric in the label)
  'ielts.speaking.timer.btn.start_prep': { en: 'Start 60s preparation', ar: 'ابدأ تحضير 60 ثانية' },
  'ielts.speaking.timer.btn.skip': { en: 'Skip to speaking', ar: 'تخطَّ للتكلم' },
  'ielts.speaking.timer.btn.stop': { en: 'Stop timer', ar: 'وقّف المؤقّت' },
  'ielts.speaking.timer.btn.reset': { en: 'Reset timer', ar: 'صفّر المؤقّت' },

  // ─── Recorder (self-review) ────────────────────────────────────────────────
  'ielts.speaking.recorder.label': {
    en: 'Record yourself (optional, private)',
    ar: 'سجّل نفسك (اختياري، خاص)',
  },
  // Controls
  'ielts.speaking.recorder.btn.record': { en: 'Record', ar: 'سجّل' },
  'ielts.speaking.recorder.btn.record_again': { en: 'Record again', ar: 'سجّل مرة ثانية' },
  'ielts.speaking.recorder.btn.stop': { en: 'Stop', ar: 'وقّف' },
  'ielts.speaking.recorder.btn.play': { en: 'Play back', ar: 'شغّل التسجيل' },
  'ielts.speaking.recorder.btn.pause': { en: 'Pause', ar: 'وقّف مؤقتاً' },
  'ielts.speaking.recorder.btn.discard': { en: 'Discard', ar: 'احذف' },
  // Self-review note under the controls
  'ielts.speaking.recorder.note': {
    en: 'Recording is for your own self-review only - your audio stays on this device and is never uploaded. Listen back, then type what you said below so we can give you band feedback.',
    ar: 'التسجيل لمراجعتك الذاتية بس - الصوت مالك يبقى على هذا الجهاز وما يترفع أبداً. اسمعه، وبعدها اكتب اللي قلته تحت عشان نعطيك تقييم Band.',
  },
  // Unsupported-browser notice
  'ielts.speaking.recorder.unsupported.title': {
    en: 'Recording isn’t available in this browser',
    ar: 'التسجيل مو متاح في هذا المتصفح',
  },
  'ielts.speaking.recorder.unsupported.body': {
    en: 'No problem - you can still type or paste what you said in the transcript box below and get full band feedback. For audio self-review, try a recent version of Chrome, Edge, Firefox or Safari.',
    ar: 'ما يخالف - تقدر تكتب أو تلصق اللي قلته في خانة النص تحت وتاخذ تقييم Band كامل. لمراجعة الصوت، جرّب نسخة حديثة من Chrome أو Edge أو Firefox أو Safari.',
  },
  // Permission/error messages
  'ielts.speaking.recorder.error.denied': {
    en: 'Microphone access was blocked. You can still type or paste your transcript below to get band feedback. To record, allow microphone access in your browser settings and try again.',
    ar: 'الوصول للمايك مرفوض. تقدر تكتب أو تلصق النص مالك تحت وتاخذ تقييم Band. عشان تسجّل، اسمح بالوصول للمايك من إعدادات المتصفح وحاول مرة ثانية.',
  },
  'ielts.speaking.recorder.error.no_mic': {
    en: 'No microphone was found. You can still type or paste your transcript below to get band feedback.',
    ar: 'ما لقينا مايك. تقدر تكتب أو تلصق النص مالك تحت وتاخذ تقييم Band.',
  },
  'ielts.speaking.recorder.error.generic': {
    en: 'We could not start recording on this device. You can still type or paste your transcript below to get band feedback.',
    ar: 'ما قدرنا نبدأ التسجيل على هذا الجهاز. تقدر تكتب أو تلصق النص مالك تحت وتاخذ تقييم Band.',
  },
  'ielts.speaking.recorder.error.unsupported': {
    en: 'Audio recording is not supported in this browser. You can still type or paste your transcript below.',
    ar: 'تسجيل الصوت مو مدعوم في هذا المتصفح. تقدر تكتب أو تلصق النص مالك تحت.',
  },

  // ─── Transcript + submit ───────────────────────────────────────────────────
  'ielts.speaking.transcript.label': {
    en: 'Type or paste what you said - we’ll give band feedback (auto-transcription coming soon)',
    ar: 'اكتب أو الصق اللي قلته - بنعطيك تقييم Band (التفريغ التلقائي قريب)',
  },
  'ielts.speaking.transcript.placeholder': {
    en: 'Write out, as closely as you can, what you actually said. Include your hesitations (um, you know) if you noticed them - it helps the fluency estimate be realistic.',
    ar: 'اكتب، على قد ما تقدر، اللي قلته فعلاً. حط ترددك (um، you know) إذا انتبهت له - هذا يخلّي تقدير Fluency واقعي.',
  },
  // Word counter: "{n} word" / "{n} words" - number stays a digit.
  'ielts.speaking.transcript.word': { en: 'word', ar: 'كلمة' },
  'ielts.speaking.transcript.words': { en: 'words', ar: 'كلمة' },

  // Submit-row helper + button
  'ielts.speaking.submit.helper': {
    en: 'This gives an AI band estimate from your transcript - not an official IELTS result.',
    ar: 'هذا يعطيك تقدير Band بالذكاء الاصطناعي من النص مالك - مو نتيجة IELTS رسمية.',
  },
  'ielts.speaking.submit.assessing': { en: 'Assessing…', ar: 'يقيّم…' },
  'ielts.speaking.submit.btn': { en: 'Get band feedback', ar: 'خذ تقييم Band' },

  // ─── Validation / network errors ───────────────────────────────────────────
  'ielts.speaking.error.sign_in': {
    en: 'Please sign in to get speaking feedback.',
    ar: 'سجّل دخول لو سمحت عشان تاخذ تقييم Speaking.',
  },
  'ielts.speaking.error.too_short': {
    en: 'Please type at least a sentence or two of what you said.',
    ar: 'اكتب لو سمحت جملة أو جملتين على الأقل من اللي قلته.',
  },
  'ielts.speaking.error.bad_request': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار في خطأ. حاول مرة ثانية لو سمحت.',
  },
  'ielts.speaking.error.unexpected': {
    en: 'We received an unexpected response. Please try again.',
    ar: 'وصلنا رد غير متوقع. حاول مرة ثانية لو سمحت.',
  },
  'ielts.speaking.error.network': {
    en: 'Network error. Please check your connection and try again.',
    ar: 'خطأ في الشبكة. تأكد من اتصالك وحاول مرة ثانية لو سمحت.',
  },

  // ─── Results ───────────────────────────────────────────────────────────────
  // Transcript-based disclaimer (title + fallback body)
  'ielts.speaking.results.disclaimer.title': {
    en: 'Transcript-based estimate',
    ar: 'تقدير مبني على النص',
  },
  'ielts.speaking.results.disclaimer.body': {
    en: 'This is an AI practice estimate based on your typed transcript, not an official IELTS score. Pronunciation is approximated from your words and fluency is inferred from the transcript.',
    ar: 'هذا تقدير تدريبي بالذكاء الاصطناعي مبني على النص اللي كتبته، مو نتيجة IELTS رسمية. Pronunciation مُقدّرة من كلماتك وFluency مُستنتجة من النص.',
  },
  // Overall band hero
  'ielts.speaking.results.overall': {
    en: 'Estimated overall band',
    ar: 'Band الكلي التقديري',
  },
  'ielts.speaking.results.saved': { en: 'Saved to your progress', ar: 'انحفظ في تقدّمك' },
  // Criteria breakdown
  'ielts.speaking.results.criteria.title': { en: 'Criteria breakdown', ar: 'تفصيل المعايير' },
  'ielts.speaking.results.criteria.desc': {
    en: 'Each criterion is scored 0-9. Pronunciation is a transcript-based proxy in this version.',
    ar: 'كل معيار يتقيّم من 0-9. Pronunciation في هذي النسخة مؤشر مبني على النص.',
  },
  // Strengths
  'ielts.speaking.results.strengths.title': { en: 'What you did well', ar: 'الشي اللي سويته زين' },
  // Improvements
  'ielts.speaking.results.improvements.title': {
    en: 'How to raise your band',
    ar: 'كيف ترفع Band مالك',
  },
  // Model pointers
  'ielts.speaking.results.pointers.title': {
    en: 'Phrases that would lift this answer',
    ar: 'عبارات ترفع مستوى هذي الإجابة',
  },
  'ielts.speaking.results.pointers.desc': {
    en: 'Example language for this topic - adapt it into your own words.',
    ar: 'أمثلة لغوية لهذا الموضوع - طوّعها بأسلوبك.',
  },
  // Results actions
  'ielts.speaking.results.action.helper': {
    en: 'AI estimate - practice guidance, not a guarantee.',
    ar: 'تقدير بالذكاء الاصطناعي - توجيه للتدريب، مو ضمان.',
  },
  'ielts.speaking.results.action.try_again': { en: 'Try another answer', ar: 'جرّب إجابة ثانية' },

  // ─── Footnote ──────────────────────────────────────────────────────────────
  'ielts.speaking.footnote': {
    en: 'For IELTS preparation only. Band estimates are AI-generated from a typed transcript and are not affiliated with or endorsed by the official IELTS partners.',
    ar: 'لتحضير IELTS بس. تقديرات Band مولّدة بالذكاء الاصطناعي من نص مكتوب وما لها علاقة بشركاء IELTS الرسميين ولا معتمدة منهم.',
  },
}
