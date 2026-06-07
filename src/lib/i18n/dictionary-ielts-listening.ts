// ─── IELTS Listening dictionary shard ──────────────────────────────────────
// UI-chrome copy for the IELTS Listening practice module (page.tsx +
// _components/AudioPlayer.tsx): headings, intro/instructions, audio-player
// controls (visible + aria labels), question labels, results (band/score)
// labels, review labels, empty/loading states.
//
// SCOPE: interface chrome ONLY. The practice CONTENT - transcripts, question
// prompts, options, gap answers, explanations - stays English and lives in
// src/app/ielts/listening/listening-tests.ts (NOT translated here).
//
// Khaleeji (Gulf) Arabic conventions per the master dictionary header
// (src/lib/i18n/dictionary.ts ~lines 9-28): الحين not الآن, شوف not انظر,
// شنو not ماذا, سكّر/خلّ not أغلق, ببلاش not مجاناً, لحظة not "جاري التحميل".
// Banned Levantine forms (شو, كيفك, ليش, بحكي) are not used. Brand + technical
// terms stay in Latin script even inside Arabic text: IELTS, Band, Academic.
//
// Shared cross-module IELTS keys (ielts.skill.listening, ielts.band,
// ielts.estimate_note, etc.) live in ./dictionary-ielts.ts and are reused
// from the components directly rather than duplicated here.
//
// Wire into src/lib/i18n/dictionary.ts (import + one line in lookup()) - owned
// by the integrator; this file only authors the EN+AR pairs.
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_LISTENING_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> =
  {
    // ── Header / chrome ───────────────────────────────────────────────────────
    'ielts.listening.back_to_ielts': {
      en: 'Back to IELTS',
      ar: 'الرجوع إلى IELTS',
      es: 'Volver a IELTS',
    },
    'ielts.listening.title': { en: 'IELTS Listening', ar: 'IELTS الاستماع', es: 'IELTS Listening' },
    'ielts.listening.subtitle': {
      en: 'Academic preparation · auto-marked · predicted band score',
      ar: 'تحضير Academic · تصحيح تلقائي · درجة Band متوقعة',
      es: 'Preparación de Academic · corrección automática · puntuación de Band prevista',
    },

    // ── Empty / unavailable state ─────────────────────────────────────────────
    'ielts.listening.none_available': {
      en: 'No listening test is available right now. Please check back soon.',
      ar: 'ما فيه اختبار استماع متاح الحين. ارجع لنا بعد شوي.',
      es: 'No hay ningún examen de listening disponible ahora mismo. Vuelve a comprobarlo pronto.',
    },

    // ── Intro panel ───────────────────────────────────────────────────────────
    'ielts.listening.intro.lead': {
      en: 'A short two-section warm-up that mirrors the most common IELTS Listening question types: form / note completion and multiple choice. Listen to each section, then type or select your answers. You’ll get a predicted band score and a full review with the script and an explanation for every question.',
      ar: 'تحمية قصيرة من قسمين تشبه أكثر أنواع أسئلة IELTS الاستماع شيوعاً: تعبئة النموذج / الملاحظات والاختيار من متعدد. استمع لكل قسم، وبعدها اكتب أو اختر إجاباتك. بتحصل على درجة Band متوقعة ومراجعة كاملة مع النص وشرح لكل سؤال.',
      es: 'Un calentamiento corto de dos secciones que refleja los tipos de pregunta más comunes de IELTS Listening: completar formularios / notas y opción múltiple. Escucha cada sección y luego escribe o selecciona tus respuestas. Recibirás una puntuación de Band prevista y una revisión completa con el guion y una explicación para cada pregunta.',
    },
    'ielts.listening.intro.stat.questions': { en: 'Questions', ar: 'الأسئلة', es: 'Preguntas' },
    'ielts.listening.intro.stat.time': { en: 'Time', ar: 'الوقت', es: 'Tiempo' },
    // Composed in JSX as `~{minutes} {unit}` so the number stays dynamic.
    'ielts.listening.intro.stat.minutes_unit': { en: 'min', ar: 'دقيقة', es: 'min' },
    'ielts.listening.intro.stat.sections': { en: 'Sections', ar: 'الأقسام', es: 'Secciones' },

    'ielts.listening.intro.audio_heading': {
      en: 'How the audio works',
      ar: 'كيف يشتغل الصوت',
      es: 'Cómo funciona el audio',
    },
    'ielts.listening.intro.audio_body': {
      en: 'Wave 1 uses your browser’s built-in text-to-speech voice to read each section aloud (a stand-in for recorded audio). In the real test each recording plays once - try a single listen, then use Replay only for practice. The script stays hidden until you submit.',
      ar: 'تستخدم النسخة الأولى صوت تحويل النص إلى كلام المدمج في متصفحك عشان يقرأ كل قسم بصوت عالٍ (بدلاً عن تسجيل صوتي). في الاختبار الحقيقي كل تسجيل يشتغل مرة وحدة - جرّب استماع مرة وحدة، وبعدها استخدم إعادة التشغيل للتدريب بس. النص يبقى مخفي لين ما تسلّم.',
      es: 'La versión 1 usa la voz de texto a voz integrada en tu navegador para leer cada sección en voz alta (un sustituto del audio grabado). En el examen real cada grabación se reproduce una vez: prueba a escuchar una sola vez y luego usa Repetir solo para practicar. El guion permanece oculto hasta que envíes.',
    },
    'ielts.listening.intro.start': {
      en: 'Start practice test',
      ar: 'ابدأ الاختبار التدريبي',
      es: 'Empezar el examen de práctica',
    },
    // Test picker (intro screen)
    'ielts.listening.picker.title': {
      en: 'Choose a listening test',
      ar: 'اختر اختبار استماع',
      es: 'Elige un examen de listening',
    },
    'ielts.listening.picker.subtitle': {
      en: 'Pick any test below to begin. Each one is auto-marked and gives you an estimated band.',
      ar: 'اختر أي اختبار تحت عشان تبدأ. كل واحد يتصحّح تلقائياً ويعطيك Band تقديري.',
      es: 'Elige cualquier examen de abajo para empezar. Cada uno se corrige automáticamente y te da una Band estimada.',
    },
    'ielts.listening.intro.study_plan': {
      en: 'My study plan',
      ar: 'خطة دراستي',
      es: 'Mi plan de estudio',
    },
    'ielts.listening.intro.progress_dashboard': {
      en: 'Progress dashboard',
      ar: 'لوحة التقدّم',
      es: 'Panel de progreso',
    },

    // ── Test panel ────────────────────────────────────────────────────────────
    'ielts.listening.test.your_answers': {
      en: 'Your answers',
      ar: 'إجاباتك',
      es: 'Tus respuestas',
    },
    // Composed in JSX as `{answered} / {total} {answered_suffix}`.
    'ielts.listening.test.answered_suffix': { en: 'answered', ar: 'مُجابة', es: 'respondidas' },
    // aria-label for the progress bar. Composed: `{prefix} {answered} {of} {total} {suffix}`.
    'ielts.listening.test.progress_aria_prefix': {
      en: 'Listening progress:',
      ar: 'تقدّم الاستماع:',
      es: 'Progreso de Listening:',
    },
    'ielts.listening.test.progress_aria_of': { en: 'of', ar: 'من', es: 'de' },
    'ielts.listening.test.progress_aria_suffix': {
      en: 'questions answered',
      ar: 'أسئلة مُجابة',
      es: 'preguntas respondidas',
    },
    // Composed: `{section_label} {n}` - number stays dynamic.
    'ielts.listening.test.section_label': { en: 'Section', ar: 'القسم', es: 'Sección' },
    'ielts.listening.test.submit': {
      en: 'Submit & mark',
      ar: 'سلّم وصحّح',
      es: 'Enviar y corregir',
    },
    // Submit hint, partial: composed as `{prefix} {answered} {of} {total}. {suffix}`.
    'ielts.listening.test.submit_hint_partial_prefix': {
      en: 'You’ve answered',
      ar: 'جاوبت على',
      es: 'Has respondido',
    },
    'ielts.listening.test.submit_hint_partial_of': { en: 'of', ar: 'من', es: 'de' },
    'ielts.listening.test.submit_hint_partial_suffix': {
      en: 'You can submit now - unanswered questions are marked as incorrect.',
      ar: 'تقدر تسلّم الحين - الأسئلة اللي ما جاوبت عليها بتنحسب غلط.',
      es: 'Puedes enviar ahora; las preguntas sin responder se marcan como incorrectas.',
    },
    // Submit hint, all answered: composed as `{prefix} {total} {suffix}`.
    'ielts.listening.test.submit_hint_done_prefix': { en: 'All', ar: 'كل', es: 'Las' },
    'ielts.listening.test.submit_hint_done_suffix': {
      en: 'questions answered. Ready to see your band?',
      ar: 'الأسئلة مُجابة. جاهز تشوف الـ Band حقك؟',
      es: 'preguntas respondidas. ¿Listo para ver tu Band?',
    },

    // ── Question card ─────────────────────────────────────────────────────────
    'ielts.listening.question.gap_placeholder': {
      en: 'Type your answer',
      ar: 'اكتب إجابتك',
      es: 'Escribe tu respuesta',
    },
    // aria-label: composed as `{prefix} {number}`.
    'ielts.listening.question.gap_aria_prefix': {
      en: 'Answer for question',
      ar: 'إجابة السؤال',
      es: 'Respuesta de la pregunta',
    },
    // True/False/Not Given control labels.
    'ielts.listening.question.tfng.true': { en: 'True', ar: 'صح', es: 'True' },
    'ielts.listening.question.tfng.false': { en: 'False', ar: 'غلط', es: 'False' },
    'ielts.listening.question.tfng.not_given': {
      en: 'Not Given',
      ar: 'غير مذكور',
      es: 'Not Given',
    },

    // ── Results panel ─────────────────────────────────────────────────────────
    'ielts.listening.results.complete': {
      en: 'Test complete',
      ar: 'انتهى الاختبار',
      es: 'Examen completado',
    },
    'ielts.listening.results.predicted_note': {
      en: 'Predicted Listening band - an estimate based on this practice set.',
      ar: 'Band الاستماع المتوقع - تقدير مبني على هذا التدريب.',
      es: 'Band de Listening prevista: una estimación basada en este conjunto de práctica.',
    },
    'ielts.listening.results.band': { en: 'Band', ar: 'Band', es: 'Band' },
    'ielts.listening.results.correct': { en: 'Correct', ar: 'صحيحة', es: 'Correctas' },
    'ielts.listening.results.score': { en: 'Score', ar: 'الدرجة', es: 'Puntuación' },
    'ielts.listening.results.saved_note': {
      en: 'Saved to your progress. Bands here are estimates, not guarantees.',
      ar: 'انحفظ في تقدّمك. درجات الـ Band هنا تقديرية، مو مضمونة.',
      es: 'Guardado en tu progreso. Las Band de aquí son estimaciones, no garantías.',
    },
    'ielts.listening.results.retake': {
      en: 'Retake test',
      ar: 'أعِد الاختبار',
      es: 'Repetir el examen',
    },
    'ielts.listening.results.choose_test': {
      en: 'Choose another test',
      ar: 'اختر اختباراً ثانياً',
      es: 'Elige otro examen',
    },
    'ielts.listening.results.view_progress': {
      en: 'View progress',
      ar: 'شوف التقدّم',
      es: 'Ver progreso',
    },
    'ielts.listening.results.study_plan': {
      en: 'Study plan',
      ar: 'خطة الدراسة',
      es: 'Plan de estudio',
    },

    // ── Review (per-section + per-question) ───────────────────────────────────
    'ielts.listening.review.show_script': {
      en: 'Show script',
      ar: 'عرض النص',
      es: 'Mostrar guion',
    },
    'ielts.listening.review.hide_script': {
      en: 'Hide script',
      ar: 'إخفاء النص',
      es: 'Ocultar guion',
    },
    // Composed: `{label} {yourAnswer}`.
    'ielts.listening.review.your_answer': { en: 'Your answer', ar: 'إجابتك', es: 'Tu respuesta' },
    'ielts.listening.review.correct_answer': {
      en: 'Correct answer',
      ar: 'الإجابة الصحيحة',
      es: 'Respuesta correcta',
    },
    'ielts.listening.review.accepted_answer': {
      en: 'Accepted answer',
      ar: 'الإجابة المقبولة',
      es: 'Respuesta aceptada',
    },
    'ielts.listening.review.also_accepts_variants': {
      en: '(also accepts other close variants)',
      ar: '(يقبل كذلك صيغ قريبة ثانية)',
      es: '(también acepta otras variantes parecidas)',
    },
    'ielts.listening.review.no_answer': {
      en: '(no answer)',
      ar: '(بدون إجابة)',
      es: '(sin respuesta)',
    },

    // ── AudioPlayer ───────────────────────────────────────────────────────────
    'ielts.listening.audio.preparing': {
      en: 'Preparing audio…',
      ar: 'لحظة، نجهّز الصوت…',
      es: 'Preparando el audio…',
    },
    'ielts.listening.audio.unavailable_heading': {
      en: 'Audio playback isn’t available in this browser',
      ar: 'تشغيل الصوت مو متاح في هذا المتصفح',
      es: 'La reproducción de audio no está disponible en este navegador',
    },
    // Composed: `{prefix} {sectionTitle} {suffix}` - section title stays dynamic.
    'ielts.listening.audio.unavailable_body_prefix': {
      en: 'Your browser doesn’t support text-to-speech, so you can read the script for',
      ar: 'متصفحك ما يدعم تحويل النص إلى كلام، فتقدر تقرأ نص',
      es: 'Tu navegador no admite texto a voz, así que puedes leer el guion de',
    },
    'ielts.listening.audio.unavailable_body_suffix': {
      en: 'instead and answer the questions from the text.',
      ar: 'بدلاً عن الصوت وتجاوب على الأسئلة من النص.',
      es: 'en su lugar y responder las preguntas a partir del texto.',
    },
    'ielts.listening.audio.read_script_instead': {
      en: 'Read the script instead',
      ar: 'اقرأ النص بدل الصوت',
      es: 'Leer el guion en su lugar',
    },
    'ielts.listening.audio.hide_script': {
      en: 'Hide script',
      ar: 'إخفاء النص',
      es: 'Ocultar guion',
    },

    // Composed: `{sectionTitle} {audio_suffix}` (e.g. "Section 1 audio").
    'ielts.listening.audio.audio_suffix': { en: 'audio', ar: 'صوت', es: 'audio' },
    'ielts.listening.audio.status.playing': {
      en: 'Playing',
      ar: 'قاعد يشتغل',
      es: 'Reproduciendo',
    },
    'ielts.listening.audio.status.paused': { en: 'Paused', ar: 'متوقّف', es: 'En pausa' },
    'ielts.listening.audio.status.ready': {
      en: 'Ready to play',
      ar: 'جاهز للتشغيل',
      es: 'Listo para reproducir',
    },

    'ielts.listening.audio.play': { en: 'Play', ar: 'تشغيل', es: 'Reproducir' },
    'ielts.listening.audio.pause': { en: 'Pause', ar: 'إيقاف مؤقت', es: 'Pausar' },
    'ielts.listening.audio.resume': { en: 'Resume', ar: 'متابعة', es: 'Reanudar' },
    'ielts.listening.audio.stop': { en: 'Stop', ar: 'إيقاف', es: 'Detener' },
    'ielts.listening.audio.replay': { en: 'Replay', ar: 'إعادة', es: 'Repetir' },
    'ielts.listening.audio.stop_aria': {
      en: 'Stop playback',
      ar: 'إيقاف التشغيل',
      es: 'Detener la reproducción',
    },
    'ielts.listening.audio.replay_aria': {
      en: 'Replay from the start',
      ar: 'إعادة التشغيل من البداية',
      es: 'Repetir desde el principio',
    },

    // Footer note under the player. The dynamic emphasised word "once" is composed
    // in JSX, so the note is split into prefix + (bold) once + suffix.
    'ielts.listening.audio.note_prefix': {
      en: 'Spoken by your browser’s built-in voice. In the real test the recording plays',
      ar: 'يُقرأ بصوت متصفحك المدمج. في الاختبار الحقيقي التسجيل يشتغل',
      es: 'Leído por la voz integrada de tu navegador. En el examen real la grabación se reproduce',
    },
    'ielts.listening.audio.note_once': { en: 'once', ar: 'مرة وحدة', es: 'una vez' },
    'ielts.listening.audio.note_suffix': {
      en: '- try a single listen first, then use Replay only to practise. The script stays hidden until you submit.',
      ar: '- جرّب استماع مرة وحدة أول، وبعدها استخدم إعادة التشغيل للتدريب بس. النص يبقى مخفي لين ما تسلّم.',
      es: '- prueba a escuchar una sola vez primero y luego usa Repetir solo para practicar. El guion permanece oculto hasta que envíes.',
    },
  }
