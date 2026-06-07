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

export const IELTS_MOCK_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ══════════════════════════════════════════════════════════════════════════
  // INTRO / SETUP  (MockIntro.tsx - owns the route's single <h1>)
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Header ───────────────────────────────────────────────────────────────
  'ielts.mock.intro.title': {
    en: 'Full IELTS Mock Test',
    ar: 'اختبار IELTS تجريبي كامل',
    es: 'Examen simulado completo de IELTS',
  },
  'ielts.mock.intro.subtitle': {
    en: 'Timed, exam-realistic practice across all four skills - with a predicted band.',
    ar: 'تدريب مؤقّت وواقعي زي الامتحان في المهارات الأربع كلها - مع Band متوقع.',
    es: 'Práctica cronometrada y realista como el examen en las cuatro destrezas, con una banda predicha.',
  },

  // ─── Setup card ───────────────────────────────────────────────────────────
  'ielts.mock.intro.setup_badge': {
    en: 'Set up your mock',
    ar: 'جهّز اختبارك التجريبي',
    es: 'Configura tu simulacro',
  },
  // Renders around <strong>{track}</strong> and <strong>{minutes}</strong> tokens.
  'ielts.mock.intro.lead': {
    en: 'You are about to sit a complete {track} IELTS mock. The four sections run back-to-back in the real exam order, each under its own countdown. When a section’s timer reaches zero it is submitted automatically and you cannot return to it - exactly like the real test. Set aside about {minutes} of uninterrupted time.',
    ar: 'أنت على وشك تسوّي اختبار IELTS تجريبي {track} كامل. الأقسام الأربعة تجي ورا بعض بترتيب الامتحان الحقيقي، كل واحد تحت مؤقّته الخاص. أول ما يوصل مؤقّت القسم صفر يتسلّم تلقائياً وما تقدر ترجع له - بالضبط زي الامتحان الحقيقي. خصّص لك حوالي {minutes} وقت بدون مقاطعة.',
    es: 'Estás a punto de hacer un simulacro completo de IELTS {track}. Las cuatro secciones se suceden en el orden del examen real, cada una con su propia cuenta atrás. Cuando el temporizador de una sección llega a cero se entrega automáticamente y no puedes volver a ella, exactamente como en el examen real. Reserva unos {minutes} de tiempo sin interrupciones.',
  },
  'ielts.mock.intro.duration_value': {
    en: '2 hours 45 minutes',
    ar: 'ساعتين و45 دقيقة',
    es: '2 horas y 45 minutos',
  },

  // ─── Structure grid (section names stay Latin; minutes/blurbs translate) ────
  'ielts.mock.intro.structure.listening.minutes': {
    en: '≈ 30 minutes',
    ar: '≈ 30 دقيقة',
    es: '≈ 30 minutos',
  },
  'ielts.mock.intro.structure.listening.blurb': {
    en: 'Four recorded sections, ~40 questions, marked automatically.',
    ar: 'أربعة أقسام مسجّلة، ~40 سؤال، تتصحّح تلقائياً.',
    es: 'Cuatro secciones grabadas, ~40 preguntas, corregidas automáticamente.',
  },
  'ielts.mock.intro.structure.reading.minutes': {
    en: '60 minutes',
    ar: '60 دقيقة',
    es: '60 minutos',
  },
  'ielts.mock.intro.structure.reading.blurb': {
    en: 'Long passages with ~40 questions, marked automatically.',
    ar: 'نصوص طويلة فيها ~40 سؤال، تتصحّح تلقائياً.',
    es: 'Pasajes largos con ~40 preguntas, corregidos automáticamente.',
  },
  'ielts.mock.intro.structure.writing.minutes': {
    en: '60 minutes',
    ar: '60 دقيقة',
    es: '60 minutos',
  },
  'ielts.mock.intro.structure.writing.blurb': {
    en: 'Task 1 + Task 2 in one hour, given an AI examiner band.',
    ar: 'Task 1 + Task 2 في ساعة وحدة، ياخذون Band من مصحّح AI.',
    es: 'Task 1 + Task 2 en una hora, con una banda de examinador de IA.',
  },
  'ielts.mock.intro.structure.speaking.minutes': {
    en: '≈ 14 minutes',
    ar: '≈ 14 دقيقة',
    es: '≈ 14 minutos',
  },
  'ielts.mock.intro.structure.speaking.blurb': {
    en: 'A Part 1 / 2 / 3 interview, scored from a typed transcript.',
    ar: 'مقابلة Part 1 / 2 / 3، تتقيّم من نص مكتوب.',
    es: 'Una entrevista de Part 1 / 2 / 3, puntuada a partir de una transcripción escrita.',
  },

  // ─── What this mock contains (titles + counts are tokens) ───────────────────
  'ielts.mock.intro.contains.heading': {
    en: 'This mock contains',
    ar: 'هذا الاختبار التجريبي فيه',
    es: 'Este simulacro contiene',
  },
  // "Listening: {title} ({n} questions)"
  'ielts.mock.intro.contains.listening': {
    en: 'Listening: {title} ({n} questions)',
    ar: 'Listening: {title} ({n} سؤال)',
    es: 'Listening: {title} ({n} preguntas)',
  },
  'ielts.mock.intro.contains.reading': {
    en: 'Reading: {title} ({n} questions)',
    ar: 'Reading: {title} ({n} سؤال)',
    es: 'Reading: {title} ({n} preguntas)',
  },
  // "Writing: {title1} (Task 1) and {title2} (Task 2)"
  'ielts.mock.intro.contains.writing': {
    en: 'Writing: {title1} (Task 1) and {title2} (Task 2)',
    ar: 'Writing: {title1} (Task 1) و{title2} (Task 2)',
    es: 'Writing: {title1} (Task 1) y {title2} (Task 2)',
  },
  // "Speaking: a Part 1, Part 2 and Part 3 set ({title} for the long turn)"
  'ielts.mock.intro.contains.speaking': {
    en: 'Speaking: a Part 1, Part 2 and Part 3 set ({title} for the long turn)',
    ar: 'Speaking: مجموعة Part 1 وPart 2 وPart 3 ({title} للدور الطويل)',
    es: 'Speaking: un conjunto de Part 1, Part 2 y Part 3 ({title} para el turno largo)',
  },

  // ─── Predicted-band disclaimer (intro) ──────────────────────────────────────
  // Three <strong> spans embedded; kept inline with {open}/{close}-free phrasing.
  'ielts.mock.intro.disclaimer.lead': { en: 'This is a', ar: 'هذا', es: 'Esto es un' },
  'ielts.mock.intro.disclaimer.practice': {
    en: 'practice mock',
    ar: 'اختبار تجريبي للتمرين',
    es: 'simulacro de práctica',
  },
  'ielts.mock.intro.disclaimer.mid': {
    en: '. Every band is an',
    ar: '. كل Band هو',
    es: '. Cada banda es una',
  },
  'ielts.mock.intro.disclaimer.estimate': {
    en: 'estimate for preparation only',
    ar: 'تقدير للتحضير بس',
    es: 'estimación solo para la preparación',
  },
  'ielts.mock.intro.disclaimer.tail': {
    en: '- it is not an official IELTS result, and your score on test day may differ. Writing and Speaking bands are generated by AI.',
    ar: '- هو مو نتيجة IELTS رسمية، ودرجتك يوم الامتحان ممكن تختلف. درجات Band مال Writing وSpeaking تتولّد بالـ AI.',
    es: '- no es un resultado oficial de IELTS, y tu puntuación el día del examen puede variar. Las bandas de Writing y Speaking las genera la IA.',
  },

  // ─── Start / fallback ───────────────────────────────────────────────────────
  'ielts.mock.intro.start': {
    en: 'Start full mock',
    ar: 'ابدأ الاختبار الكامل',
    es: 'Iniciar simulacro completo',
  },
  'ielts.mock.intro.back_to_plan': {
    en: 'Back to study plan',
    ar: 'ارجع لخطة الدراسة',
    es: 'Volver al plan de estudio',
  },
  // "A full {track} mock could not be assembled …"
  'ielts.mock.intro.assemble_fail': {
    en: 'A full {track} mock could not be assembled from the practice library right now. Please try the individual skill pages, or switch track.',
    ar: 'ما قدرنا نجمّع اختبار {track} تجريبي كامل من مكتبة التمرين الحين. جرّب صفحات المهارات وحدة وحدة، أو بدّل الـ track.',
    es: 'Ahora mismo no se ha podido montar un simulacro completo de {track} a partir de la biblioteca de práctica. Prueba las páginas de cada destreza por separado, o cambia de track.',
  },

  // ─── Quick links (intro footer) ─────────────────────────────────────────────
  'ielts.mock.intro.view_progress': { en: 'View progress', ar: 'شوف التقدّم', es: 'Ver progreso' },
  'ielts.mock.intro.study_plan': { en: 'Study plan', ar: 'خطة الدراسة', es: 'Plan de estudio' },

  // ══════════════════════════════════════════════════════════════════════════
  // STAGE HEADER + TIMER  (StageHeader.tsx, CountdownTimer.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  // Screen-reader announcement: "{time} remaining" (time is a token, stays mm:ss).
  'ielts.mock.timer.remaining': { en: '{time} remaining', ar: 'باقي {time}', es: 'quedan {time}' },

  // Section title bars - "Section {n} of 4 · {skill}" (skill stays Latin).
  'ielts.mock.stage.title': {
    en: 'Section {n} of 4 · {skill}',
    ar: 'القسم {n} من 4 · {skill}',
    es: 'Sección {n} de 4 · {skill}',
  },
  // Step sub-label under the title - "{skill} · {answered}/{total} answered".
  'ielts.mock.stage.step_answered': {
    en: '{skill} · {answered}/{total} answered',
    ar: '{skill} · {answered}/{total} مجاوب',
    es: '{skill} · {answered}/{total} respondidas',
  },
  // Step sub-label for Writing - "{skill} · Task 1 + Task 2" (tasks stay Latin).
  'ielts.mock.stage.step_writing': {
    en: '{skill} · Task 1 + Task 2',
    ar: '{skill} · Task 1 + Task 2',
    es: '{skill} · Task 1 + Task 2',
  },
  // Step sub-label for Speaking - "{skill} · Parts 1-3" (Parts stay Latin).
  'ielts.mock.stage.step_speaking': {
    en: '{skill} · Parts 1-3',
    ar: '{skill} · Parts 1-3',
    es: '{skill} · Parts 1-3',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // OBJECTIVE QUESTIONS  (ObjectiveQuestions.tsx - type labels + gap placeholder)
  // ══════════════════════════════════════════════════════════════════════════

  // True/False/Not Given option labels stay LATIN per brand-term rule.
  'ielts.mock.q.tfng.true': { en: 'True', ar: 'True', es: 'True' },
  'ielts.mock.q.tfng.false': { en: 'False', ar: 'False', es: 'False' },
  'ielts.mock.q.tfng.not_given': { en: 'Not Given', ar: 'Not Given', es: 'Not Given' },
  // Question-type chips (chrome - describe the answer format).
  'ielts.mock.q.type.mcq': { en: 'Multiple choice', ar: 'اختيار من متعدد', es: 'Opción múltiple' },
  'ielts.mock.q.type.tfng': {
    en: 'True / False / Not Given',
    ar: 'True / False / Not Given',
    es: 'True / False / Not Given',
  },
  'ielts.mock.q.type.gap': {
    en: 'Sentence completion',
    ar: 'إكمال الجملة',
    es: 'Completar la frase',
  },
  'ielts.mock.q.type.matching': { en: 'Matching', ar: 'مطابقة', es: 'Emparejamiento' },
  'ielts.mock.q.gap_placeholder': {
    en: 'Type your answer',
    ar: 'اكتب إجابتك',
    es: 'Escribe tu respuesta',
  },
  'ielts.mock.q.matching_select': { en: 'Select…', ar: 'اختر…', es: 'Selecciona…' },

  // ══════════════════════════════════════════════════════════════════════════
  // LISTENING STAGE  (ListeningStage.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.listening.submit': {
    en: 'Submit Listening',
    ar: 'سلّم Listening',
    es: 'Enviar Listening',
  },
  'ielts.mock.listening.intro': {
    en: 'Play each section’s audio, then answer its questions. In the real exam the recording plays once - here you may replay to practise. Your answers are marked automatically when you submit or when the timer reaches zero.',
    ar: 'شغّل صوت كل قسم، وبعدها جاوب أسئلته. في الامتحان الحقيقي التسجيل يشتغل مرة وحدة - هني تقدر تعيده عشان تتدرّب. إجاباتك تتصحّح تلقائياً أول ما تسلّم أو أول ما يوصل المؤقّت صفر.',
    es: 'Reproduce el audio de cada sección y luego responde a sus preguntas. En el examen real la grabación suena una vez; aquí puedes repetirla para practicar. Tus respuestas se corrigen automáticamente cuando las envías o cuando el temporizador llega a cero.',
  },
  // Part chip in the Listening body - "Part {n}" (Part stays Latin).
  'ielts.mock.listening.part': { en: 'Part {n}', ar: 'Part {n}', es: 'Part {n}' },
  // Question range under a section title - "Questions {start}-{end}".
  'ielts.mock.listening.questions_range': {
    en: 'Questions {start}-{end}',
    ar: 'الأسئلة {start}-{end}',
    es: 'Preguntas {start}-{end}',
  },
  // Footer progress line - wraps <strong>{answered}</strong> then "of {total}…".
  'ielts.mock.listening.footer_lead': {
    en: 'You have answered',
    ar: 'جاوبت',
    es: 'Has respondido',
  },
  'ielts.mock.listening.footer_tail': {
    en: 'of {total}. Submitting moves you on to Reading and you cannot return.',
    ar: 'من {total}. التسليم ينقلك لـ Reading وما تقدر ترجع.',
    es: 'de {total}. Al enviar pasas a Reading y no puedes volver.',
  },
  'ielts.mock.listening.finish': {
    en: 'Finish Listening & start Reading',
    ar: 'خلّص Listening وابدأ Reading',
    es: 'Terminar Listening y empezar Reading',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // READING STAGE  (ReadingStage.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.reading.submit': { en: 'Submit Reading', ar: 'سلّم Reading', es: 'Enviar Reading' },
  // "Read each passage and answer all {total} questions in 60 minutes…"
  'ielts.mock.reading.intro': {
    en: 'Read each passage and answer all {total} questions in 60 minutes. Manage your own time across the passages. Answers are marked automatically on submit or at zero.',
    ar: 'اقرأ كل نص وجاوب كل الـ {total} سؤال في 60 دقيقة. نظّم وقتك بنفسك بين النصوص. الإجابات تتصحّح تلقائياً عند التسليم أو عند الصفر.',
    es: 'Lee cada pasaje y responde a las {total} preguntas en 60 minutos. Gestiona tú mismo el tiempo entre los pasajes. Las respuestas se corrigen automáticamente al enviar o al llegar a cero.',
  },
  // Passage chip - "Passage {n}".
  'ielts.mock.reading.passage': { en: 'Passage {n}', ar: 'النص {n}', es: 'Pasaje {n}' },
  'ielts.mock.reading.footer_lead': { en: 'You have answered', ar: 'جاوبت', es: 'Has respondido' },
  'ielts.mock.reading.footer_tail': {
    en: 'of {total}. Submitting moves you on to Writing and you cannot return.',
    ar: 'من {total}. التسليم ينقلك لـ Writing وما تقدر ترجع.',
    es: 'de {total}. Al enviar pasas a Writing y no puedes volver.',
  },
  'ielts.mock.reading.finish': {
    en: 'Finish Reading & start Writing',
    ar: 'خلّص Reading وابدأ Writing',
    es: 'Terminar Reading y empezar Writing',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WRITING STAGE  (WritingStage.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.writing.submit': { en: 'Submit Writing', ar: 'سلّم Writing', es: 'Enviar Writing' },
  'ielts.mock.writing.intro_title': {
    en: 'Writing - one hour for both tasks',
    ar: 'Writing - ساعة وحدة للمهمتين',
    es: 'Writing: una hora para ambas tareas',
  },
  // "Spend about 20 minutes on Task 1 ({min1}+ words) and 40 minutes on Task 2
  //  ({min2}+ words). Switch freely between the two…"
  'ielts.mock.writing.intro_body': {
    en: 'Spend about 20 minutes on Task 1 ({min1}+ words) and 40 minutes on Task 2 ({min2}+ words). Switch freely between the two. When you submit, or when the clock reaches zero, each response is sent for an AI band - and is saved either way.',
    ar: 'اقضِ حوالي 20 دقيقة على Task 1 ({min1}+ كلمة) و40 دقيقة على Task 2 ({min2}+ كلمة). بدّل بينهم وقت ما تبي. أول ما تسلّم، أو أول ما يوصل المؤقّت صفر، كل إجابة تنرسل لـ Band بالـ AI - وتنحفظ على كل حال.',
    es: 'Dedica unos 20 minutos a la Task 1 ({min1}+ palabras) y 40 minutos a la Task 2 ({min2}+ palabras). Alterna libremente entre las dos. Cuando envíes, o cuando el reloj llegue a cero, cada respuesta se manda para obtener una banda de IA, y se guarda en cualquier caso.',
  },
  // Writing-task tabs - "Task N" stays Latin; the "·{n}w" suffix is a count token.
  'ielts.mock.writing.tab_task1': { en: 'Task 1', ar: 'Task 1', es: 'Task 1' },
  'ielts.mock.writing.tab_task2': { en: 'Task 2', ar: 'Task 2', es: 'Task 2' },
  // Words-so-far suffix on a tab - "· {n}w".
  'ielts.mock.writing.tab_words': { en: '· {n}w', ar: '· {n}ك', es: '· {n}p' },
  // Eyebrow above the active prompt - stays Latin (brand task names).
  'ielts.mock.writing.eyebrow_task1': {
    en: 'Writing Task 1',
    ar: 'Writing Task 1',
    es: 'Writing Task 1',
  },
  'ielts.mock.writing.eyebrow_task2': {
    en: 'Writing Task 2',
    ar: 'Writing Task 2',
    es: 'Writing Task 2',
  },
  // Response textarea label - "Your response - Task 1/2" (task name stays Latin).
  'ielts.mock.writing.response_label': {
    en: 'Your response - {task}',
    ar: 'إجابتك - {task}',
    es: 'Tu respuesta: {task}',
  },
  'ielts.mock.writing.placeholder_task1': {
    en: 'Write your report here…',
    ar: 'اكتب تقريرك هني…',
    es: 'Escribe tu informe aquí…',
  },
  'ielts.mock.writing.placeholder_task2': {
    en: 'Write your essay here…',
    ar: 'اكتب مقالك هني…',
    es: 'Escribe tu ensayo aquí…',
  },
  // Word count chrome - singular / plural "{n} word(s)" (count is a token).
  'ielts.mock.writing.word_one': { en: '{n} word', ar: '{n} كلمة', es: '{n} palabra' },
  'ielts.mock.writing.word_other': { en: '{n} words', ar: '{n} كلمة', es: '{n} palabras' },
  // "· aim for {min}+ ({remaining} to go)"
  'ielts.mock.writing.aim_for': {
    en: '· aim for {min}+ ({remaining} to go)',
    ar: '· اهدف لـ {min}+ (باقي {remaining})',
    es: '· apunta a {min}+ (faltan {remaining})',
  },
  'ielts.mock.writing.minimum_reached': {
    en: '· minimum reached',
    ar: '· وصلت الحد الأدنى',
    es: '· mínimo alcanzado',
  },
  'ielts.mock.writing.marking_notice': {
    en: 'Marking your writing… this can take a few seconds. Please wait.',
    ar: 'نصحّح كتابتك… ممكن تاخذ ثواني. لحظة من فضلك.',
    es: 'Corrigiendo tu escritura… esto puede tardar unos segundos. Espera, por favor.',
  },
  'ielts.mock.writing.finish_warning': {
    en: 'Submitting marks both tasks and moves you on to Speaking. You cannot return to Writing.',
    ar: 'التسليم يصحّح المهمتين وينقلك لـ Speaking. ما تقدر ترجع لـ Writing.',
    es: 'Al enviar se corrigen ambas tareas y pasas a Speaking. No puedes volver a Writing.',
  },
  'ielts.mock.writing.finish': {
    en: 'Finish Writing & start Speaking',
    ar: 'خلّص Writing وابدأ Speaking',
    es: 'Terminar Writing y empezar Speaking',
  },
  // Resilience note - neither task could be band-scored.
  'ielts.mock.writing.note_none_scored': {
    en: 'Your Task 1 and Task 2 responses were recorded, but an AI band could not be generated this time (the feedback service may be unavailable, over its daily limit, or require a Premium subscription).',
    ar: 'إجاباتك مال Task 1 وTask 2 تسجّلت، بس ما قدرنا نطلّع Band بالـ AI هالمرة (خدمة التقييم ممكن تكون مو متوفرة، أو تجاوزت حدّها اليومي، أو تحتاج اشتراك Premium).',
    es: 'Tus respuestas de la Task 1 y la Task 2 se registraron, pero esta vez no se pudo generar una banda de IA (el servicio de feedback puede no estar disponible, haber superado su límite diario o requerir una suscripción Premium).',
  },
  // Resilience note - only one of the two tasks scored.
  'ielts.mock.writing.note_one_scored': {
    en: 'Only one of your two tasks could be band-scored; the other was recorded as submitted.',
    ar: 'وحدة بس من مهمتيك قدرنا نعطيها Band؛ والثانية تسجّلت كمسلّمة.',
    es: 'Solo se pudo puntuar con banda una de tus dos tareas; la otra se registró como entregada.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SPEAKING STAGE  (SpeakingStage.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.speaking.submit': {
    en: 'Submit Speaking',
    ar: 'سلّم Speaking',
    es: 'Enviar Speaking',
  },
  'ielts.mock.speaking.intro_title': {
    en: 'Speaking - about 14 minutes, three parts',
    ar: 'Speaking - حوالي 14 دقيقة، ثلاثة أجزاء',
    es: 'Speaking: unos 14 minutos, tres partes',
  },
  'ielts.mock.speaking.intro_body': {
    en: 'Answer each part aloud as you would with an examiner. Recording is optional and only for your own review - it is never uploaded. To get a predicted band, type a little of what you said in each box; the text is what we assess in this version.',
    ar: 'جاوب كل جزء بصوت عالي زي ما تسوّي مع مصحّح. التسجيل اختياري ولمراجعتك الخاصة بس - ما يترفع أبداً. عشان تاخذ Band متوقع، اكتب شوي من اللي قلته في كل خانة؛ النص هو اللي نقيّمه في هالنسخة.',
    es: 'Responde a cada parte en voz alta como lo harías con un examinador. La grabación es opcional y solo para tu propia revisión: nunca se sube. Para obtener una banda predicha, escribe un poco de lo que dijiste en cada cuadro; en esta versión evaluamos el texto.',
  },
  // Part badges (Part N stays Latin; the role descriptor translates).
  'ielts.mock.speaking.badge_part1': {
    en: 'Part 1 · Interview',
    ar: 'Part 1 · مقابلة',
    es: 'Part 1 · Entrevista',
  },
  'ielts.mock.speaking.badge_part2': {
    en: 'Part 2 · Long turn (cue card)',
    ar: 'Part 2 · دور طويل (بطاقة موضوع)',
    es: 'Part 2 · Turno largo (tarjeta de tema)',
  },
  'ielts.mock.speaking.badge_part3': {
    en: 'Part 3 · Discussion',
    ar: 'Part 3 · نقاش',
    es: 'Part 3 · Discusión',
  },
  // Long-turn sub-timer states.
  'ielts.mock.speaking.longturn_idle': {
    en: 'You get 1 minute to prepare, then up to 2 minutes to speak.',
    ar: 'عندك دقيقة وحدة تحضّر، وبعدها لين دقيقتين تتكلّم.',
    es: 'Tienes 1 minuto para prepararte y luego hasta 2 minutos para hablar.',
  },
  // "Preparing - {time}" / "Speaking - {time}" (time stays mm:ss; Speaking Latin).
  'ielts.mock.speaking.longturn_prep': {
    en: 'Preparing - {time}',
    ar: 'تحضير - {time}',
    es: 'Preparando - {time}',
  },
  'ielts.mock.speaking.longturn_speaking': {
    en: 'Speaking - {time}',
    ar: 'Speaking - {time}',
    es: 'Speaking - {time}',
  },
  'ielts.mock.speaking.longturn_done': {
    en: 'Long turn finished.',
    ar: 'خلص الدور الطويل.',
    es: 'Turno largo terminado.',
  },
  'ielts.mock.speaking.start_prep': {
    en: 'Start preparation',
    ar: 'ابدأ التحضير',
    es: 'Empezar preparación',
  },
  'ielts.mock.speaking.start_speaking': {
    en: 'Start speaking now',
    ar: 'ابدأ تتكلّم الحين',
    es: 'Empezar a hablar ahora',
  },
  'ielts.mock.speaking.stop': { en: 'Stop', ar: 'وقّف', es: 'Detener' },
  'ielts.mock.speaking.part_placeholder': {
    en: 'Type a little of what you said (optional, but needed for a band)…',
    ar: 'اكتب شوي من اللي قلته (اختياري، بس لازم عشان Band)…',
    es: 'Escribe un poco de lo que dijiste (opcional, pero necesario para una banda)…',
  },
  'ielts.mock.speaking.marking_notice': {
    en: 'Assessing your speaking… this can take a few seconds. Please wait.',
    ar: 'نقيّم كلامك… ممكن تاخذ ثواني. لحظة من فضلك.',
    es: 'Evaluando tu expresión oral… esto puede tardar unos segundos. Espera, por favor.',
  },
  // Footer - wraps a {n}-words count token: "…Typed {n} words so far across the three parts."
  'ielts.mock.speaking.finish_warning': {
    en: 'Submitting finishes the mock and takes you to your band report. Typed {n} words so far across the three parts.',
    ar: 'التسليم يخلّص الاختبار التجريبي وياخذك لتقرير Band مالك. كتبت {n} كلمة لين الحين عبر الأجزاء الثلاثة.',
    es: 'Al enviar terminas el simulacro y pasas a tu informe de banda. Has escrito {n} palabras hasta ahora en las tres partes.',
  },
  'ielts.mock.speaking.finish': {
    en: 'Finish mock & see my band',
    ar: 'خلّص الاختبار وشوف Band مالي',
    es: 'Terminar simulacro y ver mi banda',
  },
  // Resilience notes.
  'ielts.mock.speaking.note_too_short': {
    en: 'Your spoken answers were captured, but there was too little typed text to generate an AI band. Type a little of what you said next time for a predicted Speaking band.',
    ar: 'إجاباتك المنطوقة انحفظت، بس النص المكتوب كان قليل وما يكفي عشان نطلّع Band بالـ AI. المرة الجاية اكتب شوي من اللي قلته عشان تاخذ Band متوقع لـ Speaking.',
    es: 'Tus respuestas habladas se capturaron, pero había muy poco texto escrito para generar una banda de IA. La próxima vez escribe un poco de lo que dijiste para obtener una banda predicha de Speaking.',
  },
  'ielts.mock.speaking.note_service_unavailable': {
    en: 'Your spoken answers were recorded, but an AI band could not be generated this time (the feedback service may be unavailable, over its daily limit, or require a Premium subscription).',
    ar: 'إجاباتك المنطوقة تسجّلت، بس ما قدرنا نطلّع Band بالـ AI هالمرة (خدمة التقييم ممكن تكون مو متوفرة، أو تجاوزت حدّها اليومي، أو تحتاج اشتراك Premium).',
    es: 'Tus respuestas habladas se registraron, pero esta vez no se pudo generar una banda de IA (el servicio de feedback puede no estar disponible, haber superado su límite diario o requerir una suscripción Premium).',
  },
  'ielts.mock.speaking.note_unreadable': {
    en: 'Your spoken answers were recorded, but the AI feedback was unreadable this time.',
    ar: 'إجاباتك المنطوقة تسجّلت، بس تقييم الـ AI كان غير مقروء هالمرة.',
    es: 'Tus respuestas habladas se registraron, pero esta vez el feedback de la IA resultó ilegible.',
  },
  'ielts.mock.speaking.note_network_failed': {
    en: 'Your spoken answers were recorded, but the network request for AI feedback failed.',
    ar: 'إجاباتك المنطوقة تسجّلت، بس طلب الشبكة لتقييم الـ AI فشل.',
    es: 'Tus respuestas habladas se registraron, pero la petición de red para el feedback de la IA falló.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // REPORT  (MockReport.tsx - predicted band report chrome)
  // ══════════════════════════════════════════════════════════════════════════

  'ielts.mock.report.title': {
    en: 'Your mock band report',
    ar: 'تقرير Band مال اختبارك التجريبي',
    es: 'Tu informe de banda del simulacro',
  },
  // "Predicted {track} IELTS bands - practice only, not an official result."
  'ielts.mock.report.subtitle': {
    en: 'Predicted {track} IELTS bands - practice only, not an official result.',
    ar: 'درجات Band متوقعة لـ IELTS {track} - للتمرين بس، مو نتيجة رسمية.',
    es: 'Bandas predichas de IELTS {track}: solo práctica, no un resultado oficial.',
  },
  // Overall band hero.
  'ielts.mock.report.overall_label': {
    en: 'Predicted overall band',
    ar: 'Band الكلي المتوقع',
    es: 'Banda global predicha',
  },
  // "Overall needs all four sections scored ({n}/4 so far)."
  'ielts.mock.report.overall_incomplete': {
    en: 'Overall needs all four sections scored ({n}/4 so far).',
    ar: 'Band الكلي يحتاج تقييم الأقسام الأربعة كلها ({n}/4 لين الحين).',
    es: 'La banda global requiere que se puntúen las cuatro secciones ({n}/4 hasta ahora).',
  },
  'ielts.mock.report.overall_explainer': {
    en: 'The overall band is the average of your four section bands, rounded the way IELTS rounds. It is an estimate for preparation and may differ from your result on test day.',
    ar: 'Band الكلي هو متوسط درجات Band مال أقسامك الأربعة، مقرّب بنفس طريقة تقريب IELTS. هو تقدير للتحضير وممكن يختلف عن نتيجتك يوم الامتحان.',
    es: 'La banda global es la media de las bandas de tus cuatro secciones, redondeada como redondea IELTS. Es una estimación para la preparación y puede diferir de tu resultado el día del examen.',
  },
  // Per-section labels (skill names stay Latin).
  'ielts.mock.report.label.listening': { en: 'Listening', ar: 'Listening', es: 'Listening' },
  'ielts.mock.report.label.reading': { en: 'Reading', ar: 'Reading', es: 'Reading' },
  'ielts.mock.report.label.writing': { en: 'Writing', ar: 'Writing', es: 'Writing' },
  'ielts.mock.report.label.speaking': { en: 'Speaking', ar: 'Speaking', es: 'Speaking' },
  // Per-section detail lines.
  // "{correct}/{total} correct" (counts are tokens).
  'ielts.mock.report.detail.correct': {
    en: '{correct}/{total} correct',
    ar: '{correct}/{total} صح',
    es: '{correct}/{total} correctas',
  },
  'ielts.mock.report.detail.not_completed': {
    en: 'Not completed',
    ar: 'ما خُلّص',
    es: 'No completado',
  },
  'ielts.mock.report.detail.writing_scored': {
    en: 'AI examiner band (Task 1 + Task 2)',
    ar: 'Band من مصحّح AI (Task 1 + Task 2)',
    es: 'Banda de examinador de IA (Task 1 + Task 2)',
  },
  'ielts.mock.report.detail.speaking_scored': {
    en: 'AI band from your transcript',
    ar: 'Band بالـ AI من نصّك',
    es: 'Banda de IA a partir de tu transcripción',
  },
  'ielts.mock.report.detail.recorded': {
    en: 'Responses recorded',
    ar: 'الإجابات تسجّلت',
    es: 'Respuestas registradas',
  },
  // "What this means" explainer.
  'ielts.mock.report.what_heading': {
    en: 'What this means',
    ar: 'شنو يعني هذا',
    es: 'Qué significa esto',
  },
  // Scored variant - wraps <strong>{band}</strong> and <strong>{tier}</strong> tokens.
  'ielts.mock.report.what_scored': {
    en: 'A predicted overall band of {band} places you at {tier}. Your lowest section is the fastest place to gain marks - open your study plan to focus your next sessions there, and re-sit a mock in a week or two to see the movement.',
    ar: 'Band كلي متوقع قدره {band} يحطّك عند {tier}. أوطى قسم عندك هو أسرع مكان تكسب فيه درجات - افتح خطة دراستك عشان تركّز جلساتك الجاية هناك، وأعِد اختبار تجريبي بعد أسبوع أو أسبوعين عشان تشوف التغيّر.',
    es: 'Una banda global predicha de {band} te sitúa en {tier}. Tu sección más baja es el lugar más rápido para ganar puntos: abre tu plan de estudio para centrar ahí tus próximas sesiones, y vuelve a hacer un simulacro en una o dos semanas para ver el avance.',
  },
  // Incomplete variant - "{n}" sections scored.
  'ielts.mock.report.what_incomplete': {
    en: 'You have a band for {n} of the four sections. Writing and Speaking are scored by AI and need a Premium subscription and a typed response; complete those to see your full predicted overall band. Your section bands are still saved to your progress.',
    ar: 'عندك Band لـ {n} من الأقسام الأربعة. Writing وSpeaking يتقيّمون بالـ AI ويحتاجون اشتراك Premium وإجابة مكتوبة؛ كمّلهم عشان تشوف Band الكلي المتوقع كامل. درجات Band مال أقسامك محفوظة في تقدّمك على كل حال.',
    es: 'Tienes una banda para {n} de las cuatro secciones. Writing y Speaking los puntúa la IA y requieren una suscripción Premium y una respuesta escrita; complétalos para ver tu banda global predicha completa. Las bandas de tus secciones se guardan igualmente en tu progreso.',
  },
  // Criteria-breakdown heading - "{skill} - criteria breakdown" (skill stays Latin).
  'ielts.mock.report.criteria_heading': {
    en: '{skill} - criteria breakdown',
    ar: '{skill} - تفصيل المعايير',
    es: '{skill}: desglose por criterios',
  },
  // Actions.
  'ielts.mock.report.sit_another': {
    en: 'Sit another mock',
    ar: 'سوِّ اختبار تجريبي ثاني',
    es: 'Hacer otro simulacro',
  },
  'ielts.mock.report.study_plan': { en: 'Study plan', ar: 'خطة الدراسة', es: 'Plan de estudio' },
  'ielts.mock.report.view_progress': { en: 'View progress', ar: 'شوف التقدّم', es: 'Ver progreso' },
  // Footer disclaimer.
  'ielts.mock.report.footer_disclaimer': {
    en: 'Predicted bands are for IELTS preparation only and are not affiliated with or endorsed by the official IELTS test partners.',
    ar: 'درجات Band المتوقعة للتحضير لـ IELTS بس وما لها علاقة بشركاء اختبار IELTS الرسميين ولا معتمدة منهم.',
    es: 'Las bandas predichas son solo para la preparación de IELTS y no están afiliadas ni avaladas por los socios oficiales del examen IELTS.',
  },
}
