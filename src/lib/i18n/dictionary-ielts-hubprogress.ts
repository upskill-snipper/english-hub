// ─── IELTS hub + progress dictionary shard ──────────────────────────────────
// UI chrome that was previously inline-English on the two IELTS overview
// surfaces:
//   • src/app/ielts/page.tsx           → ielts.hubx.*  (SEO hub landing)
//   • src/app/ielts/progress/page.tsx  → ielts.progress.* (band dashboard)
//
// SCOPE: interface copy only - section headings, marketing detail lines, skill
// blurbs, badge chips, dashboard labels, callouts and empty states. No test
// CONTENT lives here (IELTS is an English exam). Cross-module strings already
// carried by ./dictionary-ielts.ts (ielts.hub.*, ielts.loop.*, ielts.skill.*,
// ielts.cta.*, ielts.band.*, ielts.estimate_note, ielts.nav) are REUSED, not
// duplicated - these new keys cover only the formerly-inline English.
//
// NB: namespaced `ielts.hubx.*` (not `ielts.hub.*`) on purpose so the hub keys
// never collide with the existing curated `ielts.hub.*` entries.
//
// Khaleeji (Gulf) Arabic per the master dictionary header conventions
// (شنو/وايد/الحين/ببلاش/شوف/دوّر …; Levantine forms شو/كيفك/ليش banned). Brand +
// technical terms stay Latin: The English Hub, IELTS, Band, Academic, UCAS,
// Listening / Reading / Writing / Speaking, AI. Band numbers stay digits.
//
// Wired into src/lib/i18n/dictionary.ts centrally (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_HUBPROGRESS_DICTIONARY: Record<
  string,
  { en: string; ar?: string; es?: string }
> = {
  // ══════════════════════════════════════════════════════════════════════════
  // HUB  (src/app/ielts/page.tsx - server component, await t('ielts.hubx.*'))
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Hero: secondary CTA + badge chips ───────────────────────────────────
  'ielts.hubx.view_progress': { en: 'View my progress', ar: 'شوف تقدّمي', es: 'Ver mi progreso' },
  'ielts.hubx.badge.academic_module': {
    en: 'Academic module',
    ar: 'وحدة Academic',
    es: 'Módulo Academic',
  },
  'ielts.hubx.badge.four_skills': {
    en: 'Listening · Reading · Writing · Speaking',
    ar: 'Listening · Reading · Writing · Speaking',
    es: 'Listening · Reading · Writing · Speaking',
  },
  // Already-bilingual literal in the source; kept as a key for completeness.
  'ielts.hubx.badge.bilingual': {
    en: 'English / العربية',
    ar: 'English / العربية',
    es: 'English / العربية',
  },

  // ─── Loop step detail lines (labels stay on ielts.loop.*) ─────────────────
  'ielts.hubx.loop.diagnose.detail': {
    en: 'A short placement test pins your starting band across all four skills.',
    ar: 'اختبار تحديد مستوى قصير يثبّت Band البداية مالك في المهارات الأربع كلها.',
    es: 'Una breve prueba de nivel fija tu Band inicial en las cuatro destrezas.',
  },
  'ielts.hubx.loop.plan.detail': {
    en: 'Get a personalised study plan that targets your weakest skill first.',
    ar: 'خذ خطة دراسة مخصصة لك تركّز على أضعف مهارة عندك أول.',
    es: 'Consigue un plan de estudio personalizado que se centra primero en tu destreza más débil.',
  },
  'ielts.hubx.loop.practise.detail': {
    en: 'Work through Academic Listening, Reading, Writing and Speaking tasks.',
    ar: 'اشتغل على مهام Academic في Listening وReading وWriting وSpeaking.',
    es: 'Trabaja tareas de Academic en Listening, Reading, Writing y Speaking.',
  },
  'ielts.hubx.loop.feedback.detail': {
    en: 'Writing and Speaking get an instant AI band against the official criteria.',
    ar: 'Writing وSpeaking ياخذون Band فوري بالـ AI حسب المعايير الرسمية.',
    es: 'Writing y Speaking reciben una Band instantánea con IA según los criterios oficiales.',
  },
  'ielts.hubx.loop.mock.detail': {
    en: 'Sit a full, timed mock under real exam conditions when you are ready.',
    ar: 'سوِّ اختبار تجريبي كامل ومؤقّت بظروف امتحان حقيقية أول ما تكون جاهز.',
    es: 'Haz un examen de prueba completo y cronometrado en condiciones reales cuando estés listo.',
  },
  'ielts.hubx.loop.predict.detail': {
    en: 'See your predicted overall band and exactly what will lift it higher.',
    ar: 'شوف Band الكلي المتوقع مالك وبالضبط شنو اللي بيرفعه أعلى.',
    es: 'Mira tu Band global prevista y exactamente qué la hará subir más.',
  },

  // ─── Skill marking badges ─────────────────────────────────────────────────
  'ielts.hubx.marking.auto': { en: 'Auto-marked', ar: 'تصحيح تلقائي', es: 'Corrección automática' },
  'ielts.hubx.marking.ai': {
    en: 'AI band score',
    ar: 'درجة Band بالـ AI',
    es: 'Puntuación de Band con IA',
  },

  // ─── Skill blurbs (skill names stay on ielts.skill.*) ─────────────────────
  'ielts.hubx.skill.listening.blurb': {
    en: 'Section-by-section question practice with instant scoring and a band from your raw mark.',
    ar: 'تدريب أسئلة قسم قسم مع تصحيح فوري وBand من درجتك الخام.',
    es: 'Práctica de preguntas sección por sección con corrección instantánea y una Band a partir de tu puntuación bruta.',
  },
  'ielts.hubx.skill.reading.blurb': {
    en: 'Academic passages with True/False/Not Given, matching and completion - marked the moment you finish.',
    ar: 'نصوص Academic فيها True/False/Not Given ومطابقة وإكمال - تتصحّح أول ما تخلّص.',
    es: 'Textos de Academic con True/False/Not Given, emparejamiento y completado, corregidos en cuanto terminas.',
  },
  'ielts.hubx.skill.writing.blurb': {
    en: 'Task 1 data responses and Task 2 essays scored on all four criteria, with fixes you can action.',
    ar: 'إجابات بيانات Task 1 ومقالات Task 2 تتقيّم على المعايير الأربعة كلها، مع تصحيحات تقدر تطبّقها.',
    es: 'Respuestas de datos de la Task 1 y redacciones de la Task 2 calificadas en los cuatro criterios, con mejoras que puedes aplicar.',
  },
  'ielts.hubx.skill.speaking.blurb': {
    en: 'Parts 1-3 with cue cards and follow-ups, assessed for fluency, vocabulary, grammar and pronunciation.',
    ar: 'الأجزاء 1-3 مع بطاقات أسئلة وأسئلة متابعة، تتقيّم على الطلاقة والمفردات والقواعد والنطق.',
    es: 'Partes 1-3 con tarjetas de tema y preguntas de seguimiento, evaluadas por fluidez, vocabulario, gramática y pronunciación.',
  },

  // ─── Section 2: the learning loop ─────────────────────────────────────────
  'ielts.hubx.loop.eyebrow': { en: 'How it works', ar: 'كيف يشتغل', es: 'Cómo funciona' },
  'ielts.hubx.loop.heading': {
    en: 'One loop, repeated until you are exam-ready',
    ar: 'مسار واحد، يتكرّر لين تصير جاهز للامتحان',
    es: 'Un único ciclo, repetido hasta que estés listo para el examen',
  },
  'ielts.hubx.loop.body': {
    en: 'Every cycle moves you up a band. Diagnose where you are, follow the plan, practise, get feedback, then prove it - and repeat.',
    ar: 'كل دورة ترفعك Band. شخّص وين أنت، اتبع الخطة، تدرّب، خذ تقييم، وبعدها أثبتها - وكرّر.',
    es: 'Cada ciclo te sube una Band. Diagnostica dónde estás, sigue el plan, practica, recibe feedback y luego demuéstralo, y repite.',
  },

  // ─── Section 3: the four skills ───────────────────────────────────────────
  'ielts.hubx.skills.eyebrow': {
    en: 'Four skills, one platform',
    ar: 'أربع مهارات، منصة وحدة',
    es: 'Cuatro destrezas, una plataforma',
  },
  'ielts.hubx.skills.heading': {
    en: 'Practise every part of the Academic test',
    ar: 'تدرّب على كل جزء من اختبار Academic',
    es: 'Practica cada parte del examen Academic',
  },
  'ielts.hubx.skills.body': {
    en: 'Listening and Reading are marked automatically. Writing and Speaking are scored by AI against the official band descriptors - so you always know where you stand.',
    ar: 'Listening وReading يتصحّحون تلقائياً. Writing وSpeaking يتقيّمون بالـ AI حسب أوصاف Band الرسمية - عشان دايماً تعرف وين موقفك.',
    es: 'Listening y Reading se corrigen automáticamente. Writing y Speaking los califica la IA según los descriptores oficiales de Band, así que siempre sabes dónde estás.',
  },

  // ─── Section 4: why The English Hub ───────────────────────────────────────
  'ielts.hubx.why.eyebrow': {
    en: 'Why The English Hub',
    ar: 'ليش The English Hub',
    es: 'Por qué The English Hub',
  },
  'ielts.hubx.why.heading': {
    en: 'Feedback that used to need a tutor - instantly',
    ar: 'تقييم كان يحتاج مدرّس قبل - الحين فوري',
    es: 'El feedback que antes requería un profesor, al instante',
  },
  'ielts.hubx.why.instant.title': {
    en: 'Instant AI band feedback',
    ar: 'تقييم Band فوري بالـ AI',
    es: 'Feedback de Band instantáneo con IA',
  },
  'ielts.hubx.why.instant.body': {
    en: 'No waiting for a tutor. Writing and Speaking responses get a band and targeted next steps in seconds.',
    ar: 'ما في انتظار لمدرّس. إجابات Writing وSpeaking ياخذون Band وخطوات تالية محددة في ثواني.',
    es: 'Sin esperar a un profesor. Las respuestas de Writing y Speaking reciben una Band y próximos pasos concretos en segundos.',
  },
  'ielts.hubx.why.bilingual.title': {
    en: 'Built bilingual for Gulf learners',
    ar: 'مبني ثنائي اللغة لمتعلّمي الخليج',
    es: 'Creado en dos idiomas para los estudiantes del Golfo',
  },
  'ielts.hubx.why.bilingual.body': {
    en: 'Every page works in English or Arabic, so instructions never get in the way of the practice.',
    ar: 'كل صفحة تشتغل بالإنجليزي أو العربي، عشان التعليمات ما تعطّلك عن التدريب أبداً.',
    es: 'Cada página funciona en inglés o árabe, para que las instrucciones nunca interfieran con la práctica.',
  },
  'ielts.hubx.why.path.title': {
    en: 'A starter-to-Band-9 path',
    ar: 'مسار من البداية لين Band 9',
    es: 'Una ruta de principiante a Band 9',
  },
  'ielts.hubx.why.path.body': {
    en: 'Whether you are at Band 4 or chasing Band 8, the loop adapts and tracks every step of the climb.',
    ar: 'سواء أنت على Band 4 أو تطمح لـ Band 8، المسار يتكيّف ويتابع كل خطوة بالطريق.',
    es: 'Tanto si estás en la Band 4 como si vas a por la Band 8, el ciclo se adapta y registra cada paso del ascenso.',
  },

  // ─── Section 4b: beyond practice ──────────────────────────────────────────
  'ielts.hubx.more.eyebrow': {
    en: 'Beyond practice',
    ar: 'أبعد من التدريب',
    es: 'Más allá de la práctica',
  },
  'ielts.hubx.more.heading': {
    en: 'From your target band to your university place',
    ar: 'من Band المستهدف مالك لين مقعدك بالجامعة',
    es: 'De tu Band objetivo a tu plaza universitaria',
  },
  'ielts.hubx.more.admissions.title': {
    en: 'UK admissions & statement coach',
    ar: 'مدرّب القبول في بريطانيا والـ statement',
    es: 'Asesor de admisiones del Reino Unido y del statement',
  },
  'ielts.hubx.more.admissions.body': {
    en: 'Plan your UCAS application and get instant AI feedback on your personal statement.',
    ar: 'خطّط طلب UCAS مالك وخذ تقييم فوري بالـ AI على الـ personal statement مالك.',
    es: 'Planifica tu solicitud de UCAS y obtén feedback instantáneo con IA sobre tu personal statement.',
  },
  'ielts.hubx.more.centre.title': {
    en: 'For tutors & centres',
    ar: 'للمدرّسين والمراكز',
    es: 'Para profesores y centros',
  },
  'ielts.hubx.more.centre.body': {
    en: 'Track your students’ bands across every skill from one dashboard.',
    ar: 'تابع Band طلابك في كل مهارة من لوحة وحدة.',
    es: 'Sigue las Band de tus estudiantes en cada destreza desde un único panel.',
  },
  'ielts.hubx.more.partners.title': {
    en: 'Partner with us',
    ar: 'اشترك معانا',
    es: 'Asóciate con nosotros',
  },
  'ielts.hubx.more.partners.body': {
    en: 'Bring The English Hub to your school or agency across the Gulf.',
    ar: 'وصّل The English Hub لمدرستك أو وكالتك في الخليج.',
    es: 'Lleva The English Hub a tu escuela o agencia en todo el Golfo.',
  },
  'ielts.hubx.more.explore': { en: 'Explore', ar: 'استكشف', es: 'Explorar' },

  // ─── Section 5: closing CTA ───────────────────────────────────────────────
  'ielts.hubx.cta.heading': {
    en: 'Find your band today - for free',
    ar: 'لاقِ Band مالك اليوم - ببلاش',
    es: 'Descubre tu Band hoy, gratis',
  },
  'ielts.hubx.cta.body': {
    en: 'Take the placement test, get your personalised plan, and start closing the gap to your target band.',
    ar: 'سوِّ اختبار تحديد المستوى، خذ خطتك المخصصة، وابدأ تسكّر الفجوة لين Band المستهدف مالك.',
    es: 'Haz la prueba de nivel, consigue tu plan personalizado y empieza a cerrar la brecha hacia tu Band objetivo.',
  },

  // ─── Section 1b: the readiness program (entry points to the new surfaces) ──
  'ielts.hubx.program.eyebrow': {
    en: 'Your readiness program',
    ar: 'برنامج جاهزيتك',
    es: 'Tu programa de preparación',
  },
  'ielts.hubx.program.heading': {
    en: 'Everything you need, in one place',
    ar: 'كل اللي تحتاجه، في مكان واحد',
    es: 'Todo lo que necesitas, en un solo lugar',
  },
  'ielts.hubx.program.body': {
    en: 'From your first lesson to a full timed mock - follow the path, or jump straight to what you need today.',
    ar: 'من أول درس لين اختبار تجريبي كامل ومؤقّت - اتبع المسار، أو انتقل طول لاللي تحتاجه اليوم.',
    es: 'Desde tu primera lección hasta un examen de prueba completo y cronometrado: sigue la ruta o ve directo a lo que necesitas hoy.',
  },
  'ielts.hubx.program.learn.title': {
    en: 'Learn the method',
    ar: 'تعلّم الطريقة',
    es: 'Aprende el método',
  },
  'ielts.hubx.program.learn.body': {
    en: 'Leveled lessons for every question type, from beginner to Band 9.',
    ar: 'دروس متدرّجة لكل نوع سؤال، من المبتدئ لين Band 9.',
    es: 'Lecciones por niveles para cada tipo de pregunta, de principiante a Band 9.',
  },
  'ielts.hubx.program.dashboard.title': { en: 'Your dashboard', ar: 'لوحتك', es: 'Tu panel' },
  'ielts.hubx.program.dashboard.body': {
    en: 'Predicted band, streak and what to study next - all at a glance.',
    ar: 'Band المتوقع وسلسلة أيامك وشنو تدرس بعدها - كله بلمحة.',
    es: 'Band prevista, racha y qué estudiar a continuación, todo de un vistazo.',
  },
  'ielts.hubx.program.planner.title': {
    en: 'Study planner',
    ar: 'مخطّط الدراسة',
    es: 'Planificador de estudio',
  },
  'ielts.hubx.program.planner.body': {
    en: 'A dated, weakest-first plan built around your exam date.',
    ar: 'خطة بمواعيد تبدأ بأضعف مهارة، مبنية حول تاريخ امتحانك.',
    es: 'Un plan con fechas que empieza por tu destreza más débil, creado en torno a la fecha de tu examen.',
  },
  'ielts.hubx.program.mock.title': {
    en: 'Full mock tests',
    ar: 'اختبارات تجريبية كاملة',
    es: 'Exámenes de prueba completos',
  },
  'ielts.hubx.program.mock.body': {
    en: 'Sit a timed mock under real exam conditions and get a band.',
    ar: 'سوِّ اختبار تجريبي مؤقّت بظروف امتحان حقيقية وخذ Band.',
    es: 'Haz un examen de prueba cronometrado en condiciones reales y obtén una Band.',
  },
  'ielts.hubx.program.guide.title': {
    en: 'The exam guide',
    ar: 'دليل الامتحان',
    es: 'La guía del examen',
  },
  'ielts.hubx.program.guide.body': {
    en: 'Structure, scoring and the mistakes that cost the most marks.',
    ar: 'الهيكل والتقييم والأخطاء اللي تكلّف أكثر درجات.',
    es: 'Estructura, puntuación y los errores que cuestan más puntos.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PROGRESS  (src/app/ielts/progress/page.tsx - client, t('ielts.progress.*'))
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Header ───────────────────────────────────────────────────────────────
  'ielts.progress.header.title': {
    en: 'My IELTS Progress',
    ar: 'تقدّمي في IELTS',
    es: 'Mi progreso en IELTS',
  },
  'ielts.progress.header.subtitle': {
    en: 'Your bands, trend and recent attempts across all four skills.',
    ar: 'Band مالك واتجاهك ومحاولاتك الأخيرة في المهارات الأربع كلها.',
    es: 'Tus Band, tendencia e intentos recientes en las cuatro destrezas.',
  },

  // ─── Empty state ──────────────────────────────────────────────────────────
  'ielts.progress.empty.title': {
    en: 'No band yet - let’s find yours',
    ar: 'ما في Band بعد - خلّنا نلاقي مالك',
    es: 'Aún no hay Band: vamos a descubrir la tuya',
  },
  'ielts.progress.empty.body': {
    en: 'Take the placement test to estimate your band across all four skills. Your overall band, progress and recent attempts will appear here as you practise.',
    ar: 'سوِّ اختبار تحديد المستوى عشان نقدّر Band مالك في المهارات الأربع. Band الكلي مالك وتقدّمك ومحاولاتك الأخيرة بيطلعون هني وأنت تتدرّب.',
    es: 'Haz la prueba de nivel para estimar tu Band en las cuatro destrezas. Tu Band global, tu progreso y tus intentos recientes aparecerán aquí a medida que practiques.',
  },
  'ielts.progress.empty.explore': { en: 'Explore IELTS', ar: 'استكشف IELTS', es: 'Explorar IELTS' },

  // ─── Overall band: locked-until-complete copy (split around the count) ─────
  // Renders as: "Keep going - you are {n} of 4 there."
  'ielts.progress.overall.locked_lead': {
    en: 'Your overall band unlocks once you have at least one result in every skill. Keep going - you are',
    ar: 'Band الكلي مالك ينفتح أول ما تكون عندك نتيجة وحدة على الأقل في كل مهارة. كمّل - أنت',
    es: 'Tu Band global se desbloquea cuando tengas al menos un resultado en cada destreza. Sigue así: vas por',
  },
  'ielts.progress.overall.locked_tail': { en: 'of 4 there.', ar: 'من 4 وصلت.', es: 'de 4.' },

  // ─── Per-skill bands ──────────────────────────────────────────────────────
  'ielts.progress.bands_by_skill': {
    en: 'Bands by skill',
    ar: 'Band حسب المهارة',
    es: 'Band por destreza',
  },
  // BandChip sublabels (passed in as props from this client page).
  'ielts.progress.chip.not_attempted': { en: 'Not attempted', ar: 'ما جُرّبت', es: 'Sin intentar' },
  'ielts.progress.chip.attempt_one': { en: '1 attempt', ar: 'محاولة وحدة', es: '1 intento' },
  // Plural form - "{n} attempts". Count stays a digit outside the string.
  'ielts.progress.chip.attempts_other': { en: 'attempts', ar: 'محاولات', es: 'intentos' },

  // ─── Weakest-skill callout (skill name comes from SKILL_META.label) ────────
  // Renders as: "Focus next on {skill}"
  'ielts.progress.weakest.title_lead': {
    en: 'Focus next on',
    ar: 'ركّز بعدها على',
    es: 'Enfócate ahora en',
  },
  // Renders as: "It’s currently your lowest band ({band}). …"
  'ielts.progress.weakest.body_lead': {
    en: 'It’s currently your lowest band (',
    ar: 'هذي الحين أقل Band عندك (',
    es: 'Es actualmente tu Band más baja (',
  },
  'ielts.progress.weakest.body_tail': {
    en: '). Your study plan puts it first so your overall band rises fastest.',
    ar: '). خطة دراستك تحطها أول عشان Band الكلي مالك يرتفع بأسرع شكل.',
    es: '). Tu plan de estudio la pone primero para que tu Band global suba lo más rápido posible.',
  },

  // ─── Band over time ───────────────────────────────────────────────────────
  'ielts.progress.trend.heading': {
    en: 'Band over time',
    ar: 'Band عبر الوقت',
    es: 'Band a lo largo del tiempo',
  },
  // Used as the accessible name (aria-label) of the inline bar chart.
  'ielts.progress.trend.aria': {
    en: 'Band over time',
    ar: 'Band عبر الوقت',
    es: 'Band a lo largo del tiempo',
  },
  'ielts.progress.trend.empty': {
    en: 'Complete a few more attempts to see your band trend build here.',
    ar: 'خلّص شوية محاولات زيادة عشان تشوف اتجاه Band مالك يتكوّن هني.',
    es: 'Completa algunos intentos más para ver cómo se forma aquí la tendencia de tu Band.',
  },

  // ─── Recent attempts ──────────────────────────────────────────────────────
  'ielts.progress.recent.heading': {
    en: 'Recent attempts',
    ar: 'المحاولات الأخيرة',
    es: 'Intentos recientes',
  },
}
