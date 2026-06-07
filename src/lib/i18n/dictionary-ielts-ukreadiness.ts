// ─── IELTS UK Readiness dictionary shard ───────────────────────────────────
// Covers three previously hard-coded English surfaces so they translate when
// the site switches to Arabic:
//   • ielts.ukread.*  - the UK Readiness programme overview page
//   • pricing.ielts.* - the standalone IELTS Band Booster card on /pricing
//   • ielts.hub.more.* - the stray "Model answers" card on the IELTS hub
// Khaleeji (Gulf) Arabic per the master dictionary. Brand/technical terms
// (IELTS, UCAS, CAS, ATAS, TB test, Band, UKVI, PDF, Student visa, £/numbers)
// stay in Latin script, woven into the Arabic sentence.
// Wired into src/lib/i18n/dictionary.ts (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_UKREADINESS_DICTIONARY: Record<
  string,
  { en: string; ar?: string; es?: string }
> = {
  // ── UK Readiness overview: header / chrome ────────────────────────────────
  'ielts.ukread.back': { en: 'Back to IELTS', ar: 'ارجع لـ IELTS', es: 'Volver a IELTS' },
  'ielts.ukread.eyebrow': {
    en: 'IELTS plan · UK Readiness programme',
    ar: 'خطة IELTS · برنامج UK Readiness',
    es: 'Plan de IELTS · programa UK Readiness',
  },
  'ielts.ukread.h1': {
    en: 'Your route to studying in the UK, in four parts',
    ar: 'طريقك للدراسة في UK، على أربع مراحل',
    es: 'Tu ruta para estudiar en el Reino Unido, en cuatro partes',
  },
  'ielts.ukread.intro': {
    en: 'Getting to a UK university is more than an IELTS score. This programme breaks readiness into four domains — your English, your application, your visa & finance, and the move itself — and gives you a tool for each. Work through them in order, then pull everything together into one Readiness Report.',
    ar: 'الوصول لجامعة في UK أكثر من مجرد درجة IELTS. هالبرنامج يقسّم جاهزيتك على أربع مجالات — لغتك الإنجليزية، طلبك للجامعة، الـ visa والتمويل، والانتقال نفسه — ويعطيك أداة لكل واحد منها. روح فيها بالترتيب، وبعدها اجمع كل شي بتقرير Readiness واحد.',
    es: 'Llegar a una universidad del Reino Unido es más que una puntuación de IELTS. Este programa divide la preparación en cuatro ámbitos — tu inglés, tu solicitud, tu visado y financiación, y la propia mudanza — y te da una herramienta para cada uno. Recórrelos en orden y luego reúnelo todo en un único Readiness Report.',
  },

  // ── Domain: English readiness ─────────────────────────────────────────────
  'ielts.ukread.english.title': {
    en: 'English readiness',
    ar: 'جاهزية اللغة الإنجليزية',
    es: 'Preparación de inglés',
  },
  'ielts.ukread.english.summary': {
    en: 'Can your English meet the band your course and visa require — across all four skills, not just on average?',
    ar: 'هل لغتك الإنجليزية توصل للـ Band اللي يطلبه تخصصك والـ visa — بكل المهارات الأربع، مو بس بالمعدل؟',
    es: '¿Puede tu inglés alcanzar la Band que exigen tu curso y tu visado — en las cuatro destrezas, no solo de media?',
  },
  'ielts.ukread.english.cta': {
    en: 'Take the diagnostic',
    ar: 'خذ الاختبار التشخيصي',
    es: 'Haz el diagnóstico',
  },
  'ielts.ukread.english.ready.0': {
    en: 'You hit (or exceed) the overall band your offer asks for, AND no single skill falls below the per-skill minimum the university or UKVI sets.',
    ar: 'توصل (أو تتعدّى) الـ Band الكلي اللي يطلبه عرضك، وما تنزل أي مهارة عن الحد الأدنى اللي تحدده الجامعة أو UKVI لكل مهارة.',
    es: 'Alcanzas (o superas) la Band global que pide tu oferta, Y ninguna destreza baja del mínimo por destreza que fija la universidad o UKVI.',
  },
  'ielts.ukread.english.ready.1': {
    en: 'Your bands are consistent across attempts, not a lucky one-off — Writing and Speaking are usually the deciding skills.',
    ar: 'درجاتك في الـ Band ثابتة بكل المحاولات، مو ضربة حظ مرة وحدة — عادةً Writing وSpeaking هي المهارات اللي تحسم.',
    es: 'Tus Band son consistentes entre intentos, no un golpe de suerte puntual — Writing y Speaking suelen ser las destrezas decisivas.',
  },
  'ielts.ukread.english.ready.2': {
    en: 'You can handle the test format under time pressure, not just the language in isolation.',
    ar: 'تقدر تتعامل مع شكل الاختبار تحت ضغط الوقت، مو بس اللغة لحالها.',
    es: 'Puedes manejar el formato del examen bajo presión de tiempo, no solo el idioma de forma aislada.',
  },
  'ielts.ukread.english.gaps.0': {
    en: 'A strong average that hides one weak skill (often Writing) below the required floor.',
    ar: 'معدل قوي يخبّي مهارة ضعيفة وحدة (غالباً Writing) تحت الحد المطلوب.',
    es: 'Una buena media que oculta una destreza débil (a menudo Writing) por debajo del mínimo exigido.',
  },
  'ielts.ukread.english.gaps.1': {
    en: 'Relying on a score that is close but not yet repeatable.',
    ar: 'تعتمد على درجة قريبة بس ما تقدر تكررها بعد.',
    es: 'Confiar en una puntuación que está cerca pero que aún no puedes repetir.',
  },
  'ielts.ukread.english.gaps.2': {
    en: 'Practising language without practising the exam conditions and timing.',
    ar: 'تتدرّب على اللغة بدون ما تتدرّب على ظروف الامتحان وتوقيته.',
    es: 'Practicar el idioma sin practicar las condiciones y los tiempos del examen.',
  },
  'ielts.ukread.english.next': {
    en: 'Start with the diagnostic to see your current band per skill, then use the targeted practice and AI feedback in Writing and Speaking to close the weakest gap first.',
    ar: 'ابدأ بالاختبار التشخيصي عشان تشوف الـ Band الحالي لكل مهارة، وبعدها استخدم التمارين الموجّهة وتقييم الذكاء الاصطناعي في Writing وSpeaking عشان تسكّر أضعف ثغرة أول.',
    es: 'Empieza con el diagnóstico para ver tu Band actual por destreza y luego usa la práctica dirigida y el feedback con IA en Writing y Speaking para cerrar primero la brecha más débil.',
  },

  // ── Domain: Application readiness ──────────────────────────────────────────
  'ielts.ukread.application.title': {
    en: 'Application readiness',
    ar: 'جاهزية الطلب الجامعي',
    es: 'Preparación de la solicitud',
  },
  'ielts.ukread.application.summary': {
    en: 'Is your UCAS application — personal statement, references and choices — strong enough to convert offers?',
    ar: 'هل طلبك في UCAS — الـ personal statement والتزكيات والاختيارات — قوي كفاية عشان يحوّل العروض لقبول؟',
    es: '¿Es tu solicitud de UCAS — personal statement, referencias y elecciones — lo bastante sólida para convertir ofertas?',
  },
  'ielts.ukread.application.cta': {
    en: 'Open the UCAS coach',
    ar: 'افتح مدرّب UCAS',
    es: 'Abrir el asesor de UCAS',
  },
  'ielts.ukread.application.ready.0': {
    en: 'Your personal statement leads with a specific, evidenced motivation for the subject, not generic enthusiasm.',
    ar: 'الـ personal statement حقك يبدأ بدافع محدد ومدعوم بالأدلة للتخصص، مو حماس عام.',
    es: 'Tu personal statement empieza con una motivación concreta y demostrada por la materia, no con entusiasmo genérico.',
  },
  'ielts.ukread.application.ready.1': {
    en: 'Every claim is backed by something concrete — a project, a book, work experience, a result.',
    ar: 'كل ادّعاء مدعوم بشي ملموس — مشروع، كتاب، خبرة عمل، نتيجة.',
    es: 'Cada afirmación está respaldada por algo concreto — un proyecto, un libro, experiencia laboral, un resultado.',
  },
  'ielts.ukread.application.ready.2': {
    en: 'Your course and university choices are realistic against your predicted/achieved grades, with a sensible spread.',
    ar: 'اختياراتك للتخصص والجامعة واقعية مقارنة بدرجاتك المتوقعة/المحققة، وموزّعة بشكل منطقي.',
    es: 'Tus elecciones de curso y universidad son realistas frente a tus notas previstas/obtenidas, con una distribución sensata.',
  },
  'ielts.ukread.application.ready.3': {
    en: 'Deadlines, references and supporting documents are tracked and submitted on time.',
    ar: 'المواعيد النهائية والتزكيات والمستندات الداعمة متابَعة ومقدَّمة في وقتها.',
    es: 'Los plazos, las referencias y los documentos de apoyo se siguen y se presentan a tiempo.',
  },
  'ielts.ukread.application.gaps.0': {
    en: 'A statement full of clichés ("I have always been passionate…") with no evidence.',
    ar: 'statement مليان عبارات مكررة ("I have always been passionate…") بدون أي دليل.',
    es: 'Un statement lleno de clichés ("I have always been passionate…") sin ninguna prueba.',
  },
  'ielts.ukread.application.gaps.1': {
    en: 'Writing about the country or city rather than the course and your fit for it.',
    ar: 'تكتب عن الدولة أو المدينة بدل التخصص ومدى مناسبتك له.',
    es: 'Escribir sobre el país o la ciudad en lugar del curso y tu idoneidad para él.',
  },
  'ielts.ukread.application.gaps.2': {
    en: 'All five choices clustered at the same competitiveness, leaving no safety net.',
    ar: 'كل الاختيارات الخمسة بنفس مستوى التنافسية، بدون أي شبكة أمان.',
    es: 'Las cinco elecciones agrupadas en el mismo nivel de competitividad, sin red de seguridad.',
  },
  'ielts.ukread.application.gaps.3': {
    en: 'Leaving the statement to the last minute, so there is no time to redraft.',
    ar: 'تأجّل الـ statement لآخر لحظة، فما يبقى وقت تعيد صياغته.',
    es: 'Dejar el statement para el último momento, así que no queda tiempo para reescribirlo.',
  },
  'ielts.ukread.application.next': {
    en: 'Use the UCAS personal-statement coach to structure and sharpen your statement, then sense-check your five choices against your predicted grades.',
    ar: 'استخدم مدرّب الـ personal statement في UCAS عشان ترتّب وتقوّي نصّك، وبعدها راجع اختياراتك الخمسة مقابل درجاتك المتوقعة.',
    es: 'Usa el asesor de personal statement de UCAS para estructurar y pulir tu statement, y luego contrasta tus cinco elecciones con tus notas previstas.',
  },

  // ── Domain: Visa & finance readiness ──────────────────────────────────────
  'ielts.ukread.visa.title': {
    en: 'Visa & finance readiness',
    ar: 'جاهزية الـ visa والتمويل',
    es: 'Preparación de visado y finanzas',
  },
  'ielts.ukread.visa.summary': {
    en: 'Can you actually apply for the Student visa — maintenance funds, the 28-day rule, CAS, TB test and ATAS?',
    ar: 'هل تقدر فعلاً تقدّم على Student visa — أموال الإعاشة، قاعدة الـ 28 يوم، CAS، TB test وATAS؟',
    es: '¿Puedes realmente solicitar la Student visa — fondos de manutención, la regla de los 28 días, CAS, TB test y ATAS?',
  },
  'ielts.ukread.visa.cta': {
    en: 'Open the checklist',
    ar: 'افتح القائمة',
    es: 'Abrir la lista de comprobación',
  },

  // ── Domain: Academic transition readiness ─────────────────────────────────
  'ielts.ukread.transition.title': {
    en: 'Academic transition readiness',
    ar: 'جاهزية الانتقال الأكاديمي',
    es: 'Preparación para la transición académica',
  },
  'ielts.ukread.transition.summary': {
    en: 'Are you ready for how UK study actually works — academic writing, lectures, independent study, budgeting and living away?',
    ar: 'هل أنت مستعد لطريقة الدراسة في UK فعلاً — الكتابة الأكاديمية، المحاضرات، الدراسة المستقلة، الميزانية، والعيش بعيد عن البيت؟',
    es: '¿Estás listo para cómo funciona realmente el estudio en el Reino Unido — escritura académica, clases magistrales, estudio independiente, presupuesto y vivir fuera de casa?',
  },
  'ielts.ukread.transition.cta': {
    en: 'Start the modules',
    ar: 'ابدأ الوحدات',
    es: 'Empezar los módulos',
  },

  // ── Domain section labels ─────────────────────────────────────────────────
  // "Step {n} of 4" - whole sentence with a token so Arabic word order works.
  'ielts.ukread.step': { en: 'Step {n} of 4', ar: 'الخطوة {n} من 4', es: 'Paso {n} de 4' },
  'ielts.ukread.ready_label': {
    en: 'What "ready" looks like',
    ar: 'شكل "الجاهزية"',
    es: 'Cómo es estar "listo"',
  },
  'ielts.ukread.gaps_label': { en: 'Common gaps', ar: 'الثغرات الشائعة', es: 'Carencias comunes' },
  'ielts.ukread.next_label': {
    en: 'Your next step: ',
    ar: 'خطوتك الجاية: ',
    es: 'Tu siguiente paso: ',
  },
  'ielts.ukread.fallback': {
    en: 'This domain has its own guided tool — open it above to work through the checks step by step. Your progress there feeds straight into your Readiness Report.',
    ar: 'هالمجال له أداة موجّهة خاصة فيه — افتحها فوق عشان تمشي على الفحوصات خطوة بخطوة. تقدّمك هناك يروح مباشرة لتقرير Readiness حقك.',
    es: 'Este ámbito tiene su propia herramienta guiada — ábrela arriba para repasar las comprobaciones paso a paso. Tu progreso allí alimenta directamente tu Readiness Report.',
  },

  // ── The Report block ──────────────────────────────────────────────────────
  'ielts.ukread.report.eyebrow': { en: 'Pull it together', ar: 'اجمع كل شي', es: 'Reúnelo todo' },
  'ielts.ukread.report.heading': {
    en: 'Your UK Candidate Readiness Report',
    ar: 'تقرير UK Candidate Readiness حقك',
    es: 'Tu UK Candidate Readiness Report',
  },
  'ielts.ukread.report.body': {
    en: 'The report rolls all four domains into one traffic-light view, flags the red flags that could stop you, and gives you a 7/30/60-day action plan you can export to PDF. Each tool above feeds straight into it.',
    ar: 'التقرير يجمع المجالات الأربعة في عرض واحد بإشارات المرور، يبيّن العلامات الحمراء اللي ممكن توقفك، ويعطيك خطة عمل لـ 7/30/60 يوم تقدر تصدّرها PDF. كل أداة فوق تغذّيه مباشرة.',
    es: 'El informe reúne los cuatro ámbitos en una única vista tipo semáforo, señala las alertas que podrían frenarte y te da un plan de acción a 7/30/60 días que puedes exportar a PDF. Cada herramienta de arriba lo alimenta directamente.',
  },
  'ielts.ukread.report.cta': { en: 'Build my report', ar: 'سوّ تقريري', es: 'Crear mi informe' },

  // ── Cross-link to model answers ───────────────────────────────────────────
  'ielts.ukread.cross.heading': {
    en: 'Want to see what each band looks like?',
    ar: 'تبغى تشوف شكل كل Band؟',
    es: '¿Quieres ver cómo es cada Band?',
  },
  'ielts.ukread.cross.body': {
    en: 'Compare band-6.5 and band-8 model answers for Writing and Speaking, with notes on what lifts each one up the scale.',
    ar: 'قارن نماذج إجابات Band 6.5 وBand 8 لـ Writing وSpeaking، مع ملاحظات عن اللي يرفع كل وحدة بالسلّم.',
    es: 'Compara respuestas modelo de Band 6.5 y Band 8 para Writing y Speaking, con notas sobre qué hace subir cada una en la escala.',
  },
  'ielts.ukread.cross.cta': {
    en: 'View model answers',
    ar: 'شوف نماذج الإجابات',
    es: 'Ver respuestas modelo',
  },

  // ── Pricing: IELTS Band Booster card ──────────────────────────────────────
  'pricing.ielts.title': {
    en: 'IELTS Band Booster',
    ar: 'IELTS Band Booster',
    es: 'IELTS Band Booster',
  },
  'pricing.ielts.subtitle': {
    en: 'Adult exam prep with unlimited examiner-calibrated AI band feedback',
    ar: 'تحضير للامتحان للكبار مع تقييم Band غير محدود بالذكاء الاصطناعي معاير على المصححين',
    es: 'Preparación de examen para adultos con feedback de Band con IA ilimitado y calibrado por examinadores',
  },
  'pricing.ielts.trial_line': {
    en: '{days}-day free trial · cancel anytime',
    ar: 'تجربة ببلاش {days} يوم · سكّر أي وقت',
    es: 'prueba gratuita de {days} días · cancela cuando quieras',
  },
  'pricing.ielts.included': { en: "What's included", ar: 'شنو يشمل', es: 'Qué incluye' },
  'pricing.ielts.feat.writing': {
    en: 'Unlimited AI Writing band feedback',
    ar: 'تقييم Band غير محدود لـ Writing بالذكاء الاصطناعي',
    es: 'Feedback de Band de Writing con IA ilimitado',
  },
  'pricing.ielts.feat.speaking': {
    en: 'Unlimited AI Speaking band feedback',
    ar: 'تقييم Band غير محدود لـ Speaking بالذكاء الاصطناعي',
    es: 'Feedback de Band de Speaking con IA ilimitado',
  },
  'pricing.ielts.feat.calibrated': {
    en: 'Examiner-calibrated to IELTS band descriptors',
    ar: 'معاير على المصححين حسب واصفات Band في IELTS',
    es: 'Calibrado por examinadores según los descriptores de Band de IELTS',
  },
  'pricing.ielts.feat.models': {
    en: 'Model answers & improvement tips',
    ar: 'نماذج إجابات ونصائح للتحسين',
    es: 'Respuestas modelo y consejos de mejora',
  },
  'pricing.ielts.feat.trial': {
    en: '{days}-day free trial, cancel anytime',
    ar: 'تجربة ببلاش {days} يوم، سكّر أي وقت',
    es: 'prueba gratuita de {days} días, cancela cuando quieras',
  },
  'pricing.ielts.cta.monthly': {
    en: 'Start free trial — {currency}{price}/mo',
    ar: 'ابدأ التجربة ببلاش — {currency}{price}/شهر',
    es: 'Empieza la prueba gratuita — {currency}{price}/mes',
  },
  'pricing.ielts.cta.annual': {
    en: 'Or pay annually — {currency}{price}/year',
    ar: 'أو ادفع سنوي — {currency}{price}/سنة',
    es: 'O paga anualmente — {currency}{price}/año',
  },
  'pricing.ielts.footer': {
    en: 'Separate from Student & Teacher plans · adult IELTS exam prep',
    ar: 'منفصلة عن خطط Student وTeacher · تحضير امتحان IELTS للكبار',
    es: 'Independiente de los planes Student y Teacher · preparación del examen IELTS para adultos',
  },

  // ── IELTS hub: stray "Model answers" card ─────────────────────────────────
  'ielts.hub.more.modelanswers.title': {
    en: 'Model answers',
    ar: 'نماذج الإجابات',
    es: 'Respuestas modelo',
  },
  'ielts.hub.more.modelanswers.body': {
    en: 'Band-6.5 and band-8 sample answers for Writing and Speaking, with notes on what lifts each one up the scale.',
    ar: 'نماذج إجابات Band 6.5 وBand 8 لـ Writing وSpeaking، مع ملاحظات عن اللي يرفع كل وحدة بالسلّم.',
    es: 'Respuestas de ejemplo de Band 6.5 y Band 8 para Writing y Speaking, con notas sobre qué hace subir cada una en la escala.',
  },
}
