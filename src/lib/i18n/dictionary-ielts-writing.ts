// ─── IELTS Writing module dictionary shard ──────────────────────────────────
// UI-chrome copy for the IELTS Academic Writing page (src/app/ielts/writing/
// page.tsx) - English + Khaleeji (Gulf) Arabic. Scope is the interface only:
// tab labels, prompt-picker chrome, timer + word-count labels, the submit
// button, loading / paywall / error / opt-out messages, and the results labels
// (overall band, strengths, improvements, model pointers, disclaimer).
//
// DELIBERATELY NOT HERE:
//   • The writing prompts / questions themselves (src/app/ielts/writing/
//     writing-prompts.ts) - stay English.
//   • The AI-generated feedback text (per-criterion comments, strengths,
//     improvements) - the API route already returns Arabic when locale=ar.
//   • The four marking-criterion NAMES (Task Achievement, Coherence &
//     Cohesion, Lexical Resource, Grammatical Range) - technical IELTS terms
//     supplied as API data; they render as-is and stay English.
//
// Khaleeji conventions per the master dictionary header (شنو/أبغى/وايد/الحين/
// إحنا/شوف/ببلاش/لحظة …; Levantine شو/ليش/كيفك banned). Brand + technical terms
// stay Latin even inside Arabic: IELTS, Band, Task 1, Task 2, Premium, AI.
//
// Reuses shared cross-module keys from dictionary-ielts.ts where they fit
// (ielts.task1/ielts.task2/ielts.band.*); these writing.* keys cover the
// page-specific chrome that has no shared equivalent.
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_WRITING_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ── Hero ──────────────────────────────────────────────────────────────────
  'ielts.writing.hero.badge': {
    en: 'AI band feedback - IELTS Academic',
    ar: 'تقييم Band بالذكاء الاصطناعي - IELTS أكاديمي',
    es: 'Feedback de Band con IA - IELTS Academic',
  },
  'ielts.writing.hero.title': {
    en: 'IELTS Academic Writing',
    ar: 'IELTS أكاديمي - الكتابة',
    es: 'IELTS Academic Writing',
  },
  'ielts.writing.hero.subtitle': {
    en: 'Choose a Task 1 or Task 2 question, write your response under timed conditions if you like, and get an instant predicted band for each of the four marking criteria - plus specific strengths, improvements and techniques to move up a band.',
    ar: 'اختر سؤال Task 1 أو Task 2، واكتب جوابك بوقت محدد إذا تبغى، وخذ Band متوقع فوري لكل معيار من معايير التصحيح الأربعة - مع نقاط قوة وتحسينات وتقنيات محددة تطلّعك Band أعلى.',
    es: 'Elige una pregunta de Task 1 o Task 2, escribe tu respuesta con tiempo cronometrado si quieres y obtén una Band prevista al instante para cada uno de los cuatro criterios de corrección, además de puntos fuertes, mejoras y técnicas concretas para subir de Band.',
  },
  'ielts.writing.hero.word_minutes_note': {
    en: 'Task 1 asks for at least 150 words in ~20 minutes; Task 2 asks for at least 250 words in ~40 minutes.',
    ar: 'Task 1 يطلب 150 كلمة على الأقل بحدود 20 دقيقة؛ وTask 2 يطلب 250 كلمة على الأقل بحدود 40 دقيقة.',
    es: 'La Task 1 pide al menos 150 palabras en unos 20 minutos; la Task 2 pide al menos 250 palabras en unos 40 minutos.',
  },

  // ── Task tabs ───────────────────────────────────────────────────────────
  // Brand terms Task 1 / Task 2 stay Latin; "Report" / "Essay" get Arabic.
  'ielts.writing.tab.task1': {
    en: 'Task 1 - Report',
    ar: 'Task 1 - تقرير',
    es: 'Task 1 - Informe',
  },
  'ielts.writing.tab.task2': {
    en: 'Task 2 - Essay',
    ar: 'Task 2 - مقال',
    es: 'Task 2 - Redacción',
  },

  // ── Prompt picker / workspace chrome ──────────────────────────────────────
  // "{minutes} min · min {words} words" rendered as two labelled fragments so
  // RTL ordering reads naturally.
  'ielts.writing.prompt.minutes_suffix': { en: 'min', ar: 'دقيقة', es: 'min' },
  'ielts.writing.prompt.min_words_label': { en: 'min', ar: 'الحد الأدنى', es: 'mín' },
  'ielts.writing.prompt.words_suffix': { en: 'words', ar: 'كلمة', es: 'palabras' },

  'ielts.writing.workspace.tag.task1': {
    en: 'Task 1 · Academic',
    ar: 'Task 1 · أكاديمي',
    es: 'Task 1 · Academic',
  },
  'ielts.writing.workspace.tag.task2': {
    en: 'Task 2 · Essay',
    ar: 'Task 2 · مقال',
    es: 'Task 2 · Redacción',
  },
  'ielts.writing.workspace.change_question': {
    en: 'Change question',
    ar: 'غيّر السؤال',
    es: 'Cambiar de pregunta',
  },

  // ── Timer ────────────────────────────────────────────────────────────────
  // "{clock} remaining" - keep the clock as a separate token; this is the
  // trailing label only.
  'ielts.writing.timer.remaining': { en: 'remaining', ar: 'باقي', es: 'restante' },
  // "Optional timer · {minutes} min"
  'ielts.writing.timer.optional': {
    en: 'Optional timer',
    ar: 'مؤقّت اختياري',
    es: 'Temporizador opcional',
  },
  'ielts.writing.timer.stop': { en: 'Stop timer', ar: 'وقّف المؤقّت', es: 'Detener temporizador' },
  // "Start {minutes}-minute timer" - split around the minute count. The unit +
  // noun live in the suffix so each locale reads naturally without a literal
  // hyphen in the JSX (EN "Start 20-minute timer" / AR "شغّل مؤقّت 20 دقيقة").
  'ielts.writing.timer.start_prefix': {
    en: 'Start',
    ar: 'شغّل مؤقّت',
    es: 'Iniciar temporizador de',
  },
  'ielts.writing.timer.start_suffix': { en: '-minute timer', ar: ' دقيقة', es: ' minutos' },

  // ── Response textarea ──────────────────────────────────────────────────────
  'ielts.writing.response.label': { en: 'Your response', ar: 'جوابك', es: 'Tu respuesta' },
  'ielts.writing.response.placeholder.task1': {
    en: 'Write your overview and describe the key features of the data…',
    ar: 'اكتب نظرة عامة ووصف للملامح الأساسية في البيانات…',
    es: 'Escribe tu resumen general y describe las características principales de los datos…',
  },
  'ielts.writing.response.placeholder.task2': {
    en: 'Write your essay: introduction, body paragraphs, and a conclusion…',
    ar: 'اكتب مقالك: مقدمة، فقرات أساسية، وخاتمة…',
    es: 'Escribe tu redacción: introducción, párrafos de desarrollo y una conclusión…',
  },

  // ── Word count ────────────────────────────────────────────────────────────
  'ielts.writing.words.singular': { en: 'word', ar: 'كلمة', es: 'palabra' },
  'ielts.writing.words.plural': { en: 'words', ar: 'كلمة', es: 'palabras' },
  // "· aim for {min}+ ({remaining} to go)" - assembled from two fragments
  // around the numbers.
  'ielts.writing.words.aim_for': { en: 'aim for', ar: 'استهدف', es: 'apunta a' },
  'ielts.writing.words.to_go': { en: 'to go', ar: 'باقية', es: 'restantes' },
  'ielts.writing.words.minimum_reached': {
    en: 'minimum reached',
    ar: 'وصلت للحد الأدنى',
    es: 'mínimo alcanzado',
  },
  'ielts.writing.words.too_short': {
    en: 'Write at least a few sentences to assess.',
    ar: 'اكتب على الأقل بضع جمل عشان نقدر نقيّم.',
    es: 'Escribe al menos unas frases para poder evaluar.',
  },

  // ── Submit + loading ────────────────────────────────────────────────────
  'ielts.writing.submit.cta': {
    en: 'Get my band feedback',
    ar: 'خذ تقييم الـ Band',
    es: 'Obtener mi feedback de Band',
  },
  'ielts.writing.submit.loading': {
    en: 'Assessing your writing…',
    ar: 'نقيّم كتابتك…',
    es: 'Evaluando tu escrito…',
  },
  'ielts.writing.submit.loading_note': {
    en: 'This usually takes 15-30 seconds. Please don’t close the page.',
    ar: 'عادة ياخذ 15-30 ثانية. لا تسكّر الصفحة من فضلك.',
    es: 'Esto suele tardar de 15 a 30 segundos. Por favor, no cierres la página.',
  },

  // ── Errors / paywall ──────────────────────────────────────────────────────
  'ielts.writing.error.401': {
    en: 'Please sign in to get AI band feedback on your writing.',
    ar: 'سجّل دخولك عشان تاخذ تقييم Band بالذكاء الاصطناعي على كتابتك.',
    es: 'Inicia sesión para obtener feedback de Band con IA sobre tu escrito.',
  },
  'ielts.writing.error.403': {
    en: 'IELTS Writing feedback is a Premium feature. Please upgrade to access it.',
    ar: 'تقييم كتابة IELTS ميزة Premium. رقِّ اشتراكك عشان تستخدمها.',
    es: 'El feedback de IELTS Writing es una función Premium. Mejora tu plan para acceder a ella.',
  },
  'ielts.writing.error.429': {
    en: "You've reached today's feedback limit. Please try again tomorrow.",
    ar: 'وصلت حد التقييمات لليوم. جرّب باچر مرة ثانية.',
    es: 'Has alcanzado el límite de feedback de hoy. Inténtalo de nuevo mañana.',
  },
  'ielts.writing.error.400': {
    en: 'There was a problem with your submission. Please check your response and try again.',
    ar: 'فيه مشكلة في إرسالك. راجع جوابك وجرّب مرة ثانية.',
    es: 'Hubo un problema con tu envío. Revisa tu respuesta e inténtalo de nuevo.',
  },
  'ielts.writing.error.503': {
    en: 'The AI feedback service is temporarily unavailable. Please try again shortly.',
    ar: 'خدمة التقييم بالذكاء الاصطناعي غير متاحة مؤقتاً. جرّب بعد شوي.',
    es: 'El servicio de feedback con IA no está disponible temporalmente. Inténtalo de nuevo en breve.',
  },
  'ielts.writing.error.500': {
    en: 'Something went wrong on our end. Please try again later.',
    ar: 'صار خطأ من عندنا. جرّب بعدين من فضلك.',
    es: 'Algo salió mal de nuestro lado. Inténtalo de nuevo más tarde.',
  },
  'ielts.writing.error.generic': {
    en: 'An unexpected error occurred. Please try again.',
    ar: 'صار خطأ غير متوقع. جرّب مرة ثانية.',
    es: 'Se produjo un error inesperado. Inténtalo de nuevo.',
  },
  'ielts.writing.error.unreadable': {
    en: 'We could not read the feedback this time. Please try again.',
    ar: 'ما قدرنا نقرأ التقييم هالمرة. جرّب مرة ثانية.',
    es: 'No pudimos leer el feedback esta vez. Inténtalo de nuevo.',
  },
  'ielts.writing.error.network': {
    en: 'Could not reach the feedback server. Please check your connection and try again.',
    ar: 'ما قدرنا نوصل لخادم التقييم. تأكد من اتصالك وجرّب مرة ثانية.',
    es: 'No se pudo conectar con el servidor de feedback. Comprueba tu conexión e inténtalo de nuevo.',
  },
  'ielts.writing.paywall.view_plans': {
    en: 'View Premium plans',
    ar: 'شوف باقات Premium',
    es: 'Ver planes Premium',
  },

  // ── AI opt-out screen ──────────────────────────────────────────────────────
  'ielts.writing.optout.title': {
    en: 'AI feedback is turned off',
    ar: 'تقييم الذكاء الاصطناعي مطفّي',
    es: 'El feedback con IA está desactivado',
  },
  // Body is split around the inline "privacy settings" link.
  'ielts.writing.optout.body_before': {
    en: 'AI features are currently disabled for this account. To turn AI band feedback back on, visit your',
    ar: 'ميزات الذكاء الاصطناعي مقفلة حالياً لهالحساب. عشان ترجّع تشغّل تقييم الـ Band بالذكاء الاصطناعي، روح',
    es: 'Las funciones de IA están desactivadas actualmente para esta cuenta. Para volver a activar el feedback de Band con IA, visita tus',
  },
  'ielts.writing.optout.privacy_link': {
    en: 'privacy settings',
    ar: 'إعدادات الخصوصية',
    es: 'ajustes de privacidad',
  },
  'ielts.writing.optout.body_after': {
    en: 'or ask a parent or guardian to update your preferences.',
    ar: 'أو اطلب من ولي أمرك يحدّث تفضيلاتك.',
    es: 'o pide a tu padre, madre o tutor que actualice tus preferencias.',
  },

  // ── Results / feedback labels ──────────────────────────────────────────────
  // "Predicted overall band - {promptTitle}" - split so the title slots in.
  'ielts.writing.results.predicted_overall': {
    en: 'Predicted overall band',
    ar: 'Band الكلي المتوقع',
    es: 'Band global prevista',
  },
  'ielts.writing.results.out_of': { en: 'out of 9.0', ar: 'من أصل 9.0', es: 'de 9.0' },
  'ielts.writing.results.strengths': { en: 'Strengths', ar: 'نقاط القوة', es: 'Puntos fuertes' },
  'ielts.writing.results.improvements': {
    en: 'Areas to improve',
    ar: 'مجالات للتحسين',
    es: 'Aspectos a mejorar',
  },
  'ielts.writing.results.model_pointers': {
    en: 'Techniques to move up a band',
    ar: 'تقنيات تطلّعك Band أعلى',
    es: 'Técnicas para subir de Band',
  },
  'ielts.writing.results.model_pointers_desc': {
    en: 'Concrete things to try next time - not a model answer to copy.',
    ar: 'أشياء محددة جرّبها المرة الجاية - مو إجابة نموذجية تنسخها.',
    es: 'Cosas concretas para probar la próxima vez, no una respuesta modelo para copiar.',
  },
  'ielts.writing.results.disclaimer_fallback': {
    en: 'This is a predicted band for IELTS preparation only, not an official result.',
    ar: 'هذا Band متوقع للتحضير لـ IELTS بس، مو نتيجة رسمية.',
    es: 'Esta es una Band prevista solo para la preparación de IELTS, no un resultado oficial.',
  },
  'ielts.writing.results.try_different': {
    en: 'Try a different question',
    ar: 'جرّب سؤال ثاني',
    es: 'Prueba otra pregunta',
  },
  'ielts.writing.results.rewrite': {
    en: 'Rewrite this answer',
    ar: 'أعد كتابة هالجواب',
    es: 'Reescribir esta respuesta',
  },

  // ── Back link ──────────────────────────────────────────────────────────────
  'ielts.writing.back': { en: 'Back to IELTS', ar: 'رجوع إلى IELTS', es: 'Volver a IELTS' },
}
