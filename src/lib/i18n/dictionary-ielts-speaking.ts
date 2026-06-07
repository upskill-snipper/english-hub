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

export const IELTS_SPEAKING_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Back link ─────────────────────────────────────────────────────────
  'ielts.speaking.back': { en: 'Back to IELTS', ar: 'ارجع لـ IELTS', es: 'Volver a IELTS' },

  // ─── Hero ──────────────────────────────────────────────────────────────
  'ielts.speaking.hero.eyebrow': {
    en: 'IELTS Speaking · Parts 1-3',
    ar: 'IELTS Speaking · Part 1-3',
    es: 'IELTS Speaking · Parts 1-3',
  },
  'ielts.speaking.hero.title': {
    en: 'IELTS Speaking Practice',
    ar: 'تدريب IELTS Speaking',
    es: 'Práctica de IELTS Speaking',
  },
  'ielts.speaking.hero.subtitle': {
    en: 'Choose a question set, record yourself for private self-review, then type what you said to get an estimated band for each of the four IELTS Speaking criteria - Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation.',
    ar: 'اختر مجموعة أسئلة، سجّل نفسك لمراجعة خاصة، وبعدها اكتب اللي قلته عشان تاخذ تقدير Band لكل معيار من معايير IELTS Speaking الأربعة - Fluency & Coherence وLexical Resource وGrammatical Range & Accuracy وPronunciation.',
    es: 'Elige un conjunto de preguntas, grábate para una autoevaluación privada y luego escribe lo que dijiste para obtener una Band estimada en cada uno de los cuatro criterios de IELTS Speaking: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy y Pronunciation.',
  },
  // Wave-1 disclaimer in the hero - split so the bold lead can stay separate.
  'ielts.speaking.hero.notice.lead': {
    en: 'Wave 1, transcript-based.',
    ar: 'Wave 1، مبني على النص.',
    es: 'Versión 1, basada en transcripción.',
  },
  'ielts.speaking.hero.notice.body': {
    en: 'Your recording stays on your device and is never uploaded. We score the words you type, so Pronunciation is a best-effort estimate and Fluency is inferred from your transcript. Live auto-transcription and full pronunciation scoring are coming soon.',
    ar: 'تسجيلك يبقى على جهازك وما يترفع أبداً. إحنا نقيّم الكلمات اللي تكتبها، فعشان كذا Pronunciation تقدير على قدر الإمكان وFluency نستنتجها من النص مالك. التفريغ التلقائي المباشر وتقييم النطق الكامل بيوصلون قريب.',
    es: 'Tu grabación permanece en tu dispositivo y nunca se sube. Calificamos las palabras que escribes, por lo que Pronunciation es una estimación aproximada y Fluency se deduce de tu transcripción. La transcripción automática en directo y la calificación completa de la pronunciación llegarán pronto.',
  },

  // ─── Cue picker ──────────────────────────────────────────────────────────
  'ielts.speaking.picker.title': {
    en: 'Choose a question set',
    ar: 'اختر مجموعة أسئلة',
    es: 'Elige un conjunto de preguntas',
  },
  // Sub-line shown on a Part 1/3 card: "{n} questions". Number stays a digit.
  'ielts.speaking.picker.questions': { en: 'questions', ar: 'أسئلة', es: 'preguntas' },

  // ─── Part badges (technical "Part N" stays Latin; the label is translated) ─
  'ielts.speaking.part1.badge': {
    en: 'Part 1 · Interview',
    ar: 'Part 1 · مقابلة',
    es: 'Part 1 · Entrevista',
  },
  'ielts.speaking.part2.badge': {
    en: 'Part 2 · Long turn',
    ar: 'Part 2 · حديث طويل',
    es: 'Part 2 · Turno largo',
  },
  'ielts.speaking.part3.badge': {
    en: 'Part 3 · Discussion',
    ar: 'Part 3 · نقاش',
    es: 'Part 3 · Debate',
  },

  // ─── Prompt card descriptions ──────────────────────────────────────────────
  'ielts.speaking.prompt.desc.part2': {
    en: 'You get 60 seconds to prepare, then speak for up to 2 minutes. Cover all the bullet points.',
    ar: 'عندك 60 ثانية للتحضير، وبعدها تتكلم لين 2 دقيقة. غطِّ كل النقاط.',
    es: 'Tienes 60 segundos para prepararte y luego hablas hasta 2 minutos. Cubre todos los puntos.',
  },
  'ielts.speaking.prompt.desc.other': {
    en: 'Answer each question as you would in the real interview - aim for full, developed answers.',
    ar: 'جاوب على كل سؤال مثل ما بتسوي في المقابلة الحقيقية - خلِّ إجاباتك كاملة ومتوسّعة.',
    es: 'Responde a cada pregunta como lo harías en la entrevista real; busca respuestas completas y desarrolladas.',
  },

  // ─── Part 2 timer ──────────────────────────────────────────────────────────
  // Phase headings
  'ielts.speaking.timer.heading.idle': {
    en: 'Ready when you are',
    ar: 'جاهز متى ما تبي',
    es: 'Listo cuando quieras',
  },
  'ielts.speaking.timer.heading.prep': {
    en: 'Preparation time',
    ar: 'وقت التحضير',
    es: 'Tiempo de preparación',
  },
  'ielts.speaking.timer.heading.speaking': {
    en: 'Speaking - your long turn',
    ar: 'تتكلم - حديثك الطويل',
    es: 'Hablando: tu turno largo',
  },
  'ielts.speaking.timer.heading.done': {
    en: 'Time complete',
    ar: 'انتهى الوقت',
    es: 'Tiempo terminado',
  },
  // Phase helper lines (60s / 2-minute kept numeric)
  'ielts.speaking.timer.help.idle': {
    en: 'Start the 60-second prep timer, jot a few notes, then speak for up to 2 minutes.',
    ar: 'شغّل مؤقّت التحضير 60 ثانية، دوّن لك بعض الملاحظات، وبعدها تكلم لين 2 دقيقة.',
    es: 'Inicia el temporizador de preparación de 60 segundos, anota algunas notas y luego habla hasta 2 minutos.',
  },
  'ielts.speaking.timer.help.prep': {
    en: 'Plan your answer. Recording is optional during prep.',
    ar: 'رتّب إجابتك. التسجيل اختياري وقت التحضير.',
    es: 'Planifica tu respuesta. La grabación es opcional durante la preparación.',
  },
  'ielts.speaking.timer.help.speaking': {
    en: 'Speak now and record yourself for self-review.',
    ar: 'تكلم الحين وسجّل نفسك للمراجعة الذاتية.',
    es: 'Habla ahora y grábate para la autoevaluación.',
  },
  'ielts.speaking.timer.help.done': {
    en: 'Now type what you said below to get band feedback.',
    ar: 'الحين اكتب اللي قلته تحت عشان تاخذ تقييم Band.',
    es: 'Ahora escribe lo que dijiste abajo para obtener feedback de Band.',
  },
  // Timer buttons (60s kept numeric in the label)
  'ielts.speaking.timer.btn.start_prep': {
    en: 'Start 60s preparation',
    ar: 'ابدأ تحضير 60 ثانية',
    es: 'Iniciar preparación de 60 s',
  },
  'ielts.speaking.timer.btn.skip': {
    en: 'Skip to speaking',
    ar: 'تخطَّ للتكلم',
    es: 'Saltar a hablar',
  },
  'ielts.speaking.timer.btn.stop': {
    en: 'Stop timer',
    ar: 'وقّف المؤقّت',
    es: 'Detener temporizador',
  },
  'ielts.speaking.timer.btn.reset': {
    en: 'Reset timer',
    ar: 'صفّر المؤقّت',
    es: 'Reiniciar temporizador',
  },

  // ─── Recorder (self-review) ────────────────────────────────────────────────
  'ielts.speaking.recorder.label': {
    en: 'Record yourself (optional, private)',
    ar: 'سجّل نفسك (اختياري، خاص)',
    es: 'Grábate (opcional, privado)',
  },
  // Controls
  'ielts.speaking.recorder.btn.record': { en: 'Record', ar: 'سجّل', es: 'Grabar' },
  'ielts.speaking.recorder.btn.record_again': {
    en: 'Record again',
    ar: 'سجّل مرة ثانية',
    es: 'Grabar de nuevo',
  },
  'ielts.speaking.recorder.btn.stop': { en: 'Stop', ar: 'وقّف', es: 'Detener' },
  'ielts.speaking.recorder.btn.play': { en: 'Play back', ar: 'شغّل التسجيل', es: 'Reproducir' },
  'ielts.speaking.recorder.btn.pause': { en: 'Pause', ar: 'وقّف مؤقتاً', es: 'Pausar' },
  'ielts.speaking.recorder.btn.discard': { en: 'Discard', ar: 'احذف', es: 'Descartar' },
  // Self-review note under the controls
  'ielts.speaking.recorder.note': {
    en: 'Recording is for your own self-review only - your audio stays on this device and is never uploaded. Listen back, then type what you said below so we can give you band feedback.',
    ar: 'التسجيل لمراجعتك الذاتية بس - الصوت مالك يبقى على هذا الجهاز وما يترفع أبداً. اسمعه، وبعدها اكتب اللي قلته تحت عشان نعطيك تقييم Band.',
    es: 'La grabación es solo para tu propia autoevaluación: tu audio permanece en este dispositivo y nunca se sube. Escúchalo y luego escribe lo que dijiste abajo para que podamos darte feedback de Band.',
  },
  // Unsupported-browser notice
  'ielts.speaking.recorder.unsupported.title': {
    en: 'Recording isn’t available in this browser',
    ar: 'التسجيل مو متاح في هذا المتصفح',
    es: 'La grabación no está disponible en este navegador',
  },
  'ielts.speaking.recorder.unsupported.body': {
    en: 'No problem - you can still type or paste what you said in the transcript box below and get full band feedback. For audio self-review, try a recent version of Chrome, Edge, Firefox or Safari.',
    ar: 'ما يخالف - تقدر تكتب أو تلصق اللي قلته في خانة النص تحت وتاخذ تقييم Band كامل. لمراجعة الصوت، جرّب نسخة حديثة من Chrome أو Edge أو Firefox أو Safari.',
    es: 'No pasa nada: aún puedes escribir o pegar lo que dijiste en el cuadro de transcripción de abajo y obtener feedback de Band completo. Para la autoevaluación de audio, prueba una versión reciente de Chrome, Edge, Firefox o Safari.',
  },
  // Permission/error messages
  'ielts.speaking.recorder.error.denied': {
    en: 'Microphone access was blocked. You can still type or paste your transcript below to get band feedback. To record, allow microphone access in your browser settings and try again.',
    ar: 'الوصول للمايك مرفوض. تقدر تكتب أو تلصق النص مالك تحت وتاخذ تقييم Band. عشان تسجّل، اسمح بالوصول للمايك من إعدادات المتصفح وحاول مرة ثانية.',
    es: 'Se bloqueó el acceso al micrófono. Aún puedes escribir o pegar tu transcripción abajo para obtener feedback de Band. Para grabar, permite el acceso al micrófono en los ajustes de tu navegador e inténtalo de nuevo.',
  },
  'ielts.speaking.recorder.error.no_mic': {
    en: 'No microphone was found. You can still type or paste your transcript below to get band feedback.',
    ar: 'ما لقينا مايك. تقدر تكتب أو تلصق النص مالك تحت وتاخذ تقييم Band.',
    es: 'No se encontró ningún micrófono. Aún puedes escribir o pegar tu transcripción abajo para obtener feedback de Band.',
  },
  'ielts.speaking.recorder.error.generic': {
    en: 'We could not start recording on this device. You can still type or paste your transcript below to get band feedback.',
    ar: 'ما قدرنا نبدأ التسجيل على هذا الجهاز. تقدر تكتب أو تلصق النص مالك تحت وتاخذ تقييم Band.',
    es: 'No pudimos iniciar la grabación en este dispositivo. Aún puedes escribir o pegar tu transcripción abajo para obtener feedback de Band.',
  },
  'ielts.speaking.recorder.error.unsupported': {
    en: 'Audio recording is not supported in this browser. You can still type or paste your transcript below.',
    ar: 'تسجيل الصوت مو مدعوم في هذا المتصفح. تقدر تكتب أو تلصق النص مالك تحت.',
    es: 'Este navegador no admite la grabación de audio. Aún puedes escribir o pegar tu transcripción abajo.',
  },

  // ─── Transcript + submit ───────────────────────────────────────────────────
  'ielts.speaking.transcript.label': {
    en: 'Type or paste what you said - we’ll give band feedback (auto-transcription coming soon)',
    ar: 'اكتب أو الصق اللي قلته - بنعطيك تقييم Band (التفريغ التلقائي قريب)',
    es: 'Escribe o pega lo que dijiste; te daremos feedback de Band (la transcripción automática llegará pronto)',
  },
  'ielts.speaking.transcript.placeholder': {
    en: 'Write out, as closely as you can, what you actually said. Include your hesitations (um, you know) if you noticed them - it helps the fluency estimate be realistic.',
    ar: 'اكتب، على قد ما تقدر، اللي قلته فعلاً. حط ترددك (um، you know) إذا انتبهت له - هذا يخلّي تقدير Fluency واقعي.',
    es: 'Escribe, con la mayor fidelidad posible, lo que realmente dijiste. Incluye tus titubeos (um, you know) si los notaste; ayuda a que la estimación de fluidez sea realista.',
  },
  // Word counter: "{n} word" / "{n} words" - number stays a digit.
  'ielts.speaking.transcript.word': { en: 'word', ar: 'كلمة', es: 'palabra' },
  'ielts.speaking.transcript.words': { en: 'words', ar: 'كلمة', es: 'palabras' },

  // Submit-row helper + button
  'ielts.speaking.submit.helper': {
    en: 'This gives an AI band estimate from your transcript - not an official IELTS result.',
    ar: 'هذا يعطيك تقدير Band بالذكاء الاصطناعي من النص مالك - مو نتيجة IELTS رسمية.',
    es: 'Esto da una estimación de Band con IA a partir de tu transcripción, no un resultado oficial de IELTS.',
  },
  'ielts.speaking.submit.assessing': { en: 'Assessing…', ar: 'يقيّم…', es: 'Evaluando…' },
  'ielts.speaking.submit.btn': {
    en: 'Get band feedback',
    ar: 'خذ تقييم Band',
    es: 'Obtener feedback de Band',
  },

  // ─── Validation / network errors ───────────────────────────────────────────
  'ielts.speaking.error.sign_in': {
    en: 'Please sign in to get speaking feedback.',
    ar: 'سجّل دخول لو سمحت عشان تاخذ تقييم Speaking.',
    es: 'Inicia sesión para obtener feedback de Speaking.',
  },
  'ielts.speaking.error.too_short': {
    en: 'Please type at least a sentence or two of what you said.',
    ar: 'اكتب لو سمحت جملة أو جملتين على الأقل من اللي قلته.',
    es: 'Escribe al menos una o dos frases de lo que dijiste.',
  },
  'ielts.speaking.error.bad_request': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار في خطأ. حاول مرة ثانية لو سمحت.',
    es: 'Algo salió mal. Inténtalo de nuevo.',
  },
  'ielts.speaking.error.unexpected': {
    en: 'We received an unexpected response. Please try again.',
    ar: 'وصلنا رد غير متوقع. حاول مرة ثانية لو سمحت.',
    es: 'Recibimos una respuesta inesperada. Inténtalo de nuevo.',
  },
  'ielts.speaking.error.network': {
    en: 'Network error. Please check your connection and try again.',
    ar: 'خطأ في الشبكة. تأكد من اتصالك وحاول مرة ثانية لو سمحت.',
    es: 'Error de red. Comprueba tu conexión e inténtalo de nuevo.',
  },

  // ─── Results ───────────────────────────────────────────────────────────────
  // Transcript-based disclaimer (title + fallback body)
  'ielts.speaking.results.disclaimer.title': {
    en: 'Transcript-based estimate',
    ar: 'تقدير مبني على النص',
    es: 'Estimación basada en la transcripción',
  },
  'ielts.speaking.results.disclaimer.body': {
    en: 'This is an AI practice estimate based on your typed transcript, not an official IELTS score. Pronunciation is approximated from your words and fluency is inferred from the transcript.',
    ar: 'هذا تقدير تدريبي بالذكاء الاصطناعي مبني على النص اللي كتبته، مو نتيجة IELTS رسمية. Pronunciation مُقدّرة من كلماتك وFluency مُستنتجة من النص.',
    es: 'Esta es una estimación de práctica con IA basada en la transcripción que escribiste, no una puntuación oficial de IELTS. La Pronunciation se aproxima a partir de tus palabras y la fluidez se deduce de la transcripción.',
  },
  // Overall band hero
  'ielts.speaking.results.overall': {
    en: 'Estimated overall band',
    ar: 'Band الكلي التقديري',
    es: 'Band global estimada',
  },
  'ielts.speaking.results.saved': {
    en: 'Saved to your progress',
    ar: 'انحفظ في تقدّمك',
    es: 'Guardado en tu progreso',
  },
  // Criteria breakdown
  'ielts.speaking.results.criteria.title': {
    en: 'Criteria breakdown',
    ar: 'تفصيل المعايير',
    es: 'Desglose por criterios',
  },
  'ielts.speaking.results.criteria.desc': {
    en: 'Each criterion is scored 0-9. Pronunciation is a transcript-based proxy in this version.',
    ar: 'كل معيار يتقيّم من 0-9. Pronunciation في هذي النسخة مؤشر مبني على النص.',
    es: 'Cada criterio se puntúa de 0 a 9. En esta versión, Pronunciation es una aproximación basada en la transcripción.',
  },
  // Strengths
  'ielts.speaking.results.strengths.title': {
    en: 'What you did well',
    ar: 'الشي اللي سويته زين',
    es: 'Lo que hiciste bien',
  },
  // Improvements
  'ielts.speaking.results.improvements.title': {
    en: 'How to raise your band',
    ar: 'كيف ترفع Band مالك',
    es: 'Cómo subir tu Band',
  },
  // Model pointers
  'ielts.speaking.results.pointers.title': {
    en: 'Phrases that would lift this answer',
    ar: 'عبارات ترفع مستوى هذي الإجابة',
    es: 'Frases que mejorarían esta respuesta',
  },
  'ielts.speaking.results.pointers.desc': {
    en: 'Example language for this topic - adapt it into your own words.',
    ar: 'أمثلة لغوية لهذا الموضوع - طوّعها بأسلوبك.',
    es: 'Lenguaje de ejemplo para este tema; adáptalo a tus propias palabras.',
  },
  // Results actions
  'ielts.speaking.results.action.helper': {
    en: 'AI estimate - practice guidance, not a guarantee.',
    ar: 'تقدير بالذكاء الاصطناعي - توجيه للتدريب، مو ضمان.',
    es: 'Estimación con IA: orientación para practicar, no una garantía.',
  },
  'ielts.speaking.results.action.try_again': {
    en: 'Try another answer',
    ar: 'جرّب إجابة ثانية',
    es: 'Prueba otra respuesta',
  },

  // ─── Footnote ──────────────────────────────────────────────────────────────
  'ielts.speaking.footnote': {
    en: 'For IELTS preparation only. Band estimates are AI-generated from a typed transcript and are not affiliated with or endorsed by the official IELTS partners.',
    ar: 'لتحضير IELTS بس. تقديرات Band مولّدة بالذكاء الاصطناعي من نص مكتوب وما لها علاقة بشركاء IELTS الرسميين ولا معتمدة منهم.',
    es: 'Solo para la preparación de IELTS. Las estimaciones de Band se generan con IA a partir de una transcripción escrita y no están afiliadas ni respaldadas por los socios oficiales de IELTS.',
  },
}
