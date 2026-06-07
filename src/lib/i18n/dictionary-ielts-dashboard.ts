// ─── IELTS dashboard dictionary shard ───────────────────────────────────────
// UI chrome for the signed-in learner home:
//   • src/app/ielts/dashboard/page.tsx → ielts.dashboard.*  ("Your Hub" home)
//
// SCOPE: interface copy ONLY - hero headings/subcopy, stat-pill labels, quick
// actions, the empty state, the three overview lenses, the "What to study next"
// list + its weakest-first microcopy, "Recently studied" + its empty state, and
// the footer counts. No test/reference CONTENT lives here (IELTS is an English
// exam): the top common-mistake string is pulled live from exam-facts (English)
// and skill labels come from SKILL_META.label (Latin) - neither is translated.
//
// Resolved LOCALLY by a useDashboardT() helper inside the page (modelled on
// usePlanT() in src/app/ielts/plan/page.tsx). This shard is deliberately NOT
// wired into the global dictionary.ts lookup() chain; the page reads it directly
// and falls back to the shared useT() for any cross-module ielts.* key.
// `{token}` placeholders interpolate dynamic values (bands, day counts, lesson
// fractions, streak counts, gap steps) so each phrase stays translatable whole.
//
// Khaleeji (Gulf) Arabic per the master dictionary header conventions
// (شنو/وايد/الحين/ببلاش/شوف/دوّر …; Levantine forms شو/كيفك/ليش banned). Brand +
// technical terms stay Latin: The English Hub, IELTS, Band, Academic, General
// Training, Task 1/2, Listening / Reading / Writing / Speaking, AI. Band numbers
// stay digits.
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_DASHBOARD_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> =
  {
    // ─── Hero ─────────────────────────────────────────────────────────────────
    'ielts.dashboard.hero.eyebrow': {
      en: 'My IELTS Dashboard',
      ar: 'لوحة IELTS مالي',
      es: 'Mi panel de IELTS',
    },
    // hasData heading vs cold-start heading
    'ielts.dashboard.hero.heading.has_data': {
      en: 'Here’s where you stand today.',
      ar: 'هذي وين موقفك اليوم.',
      es: 'Aquí es donde estás hoy.',
    },
    'ielts.dashboard.hero.heading.cold': {
      en: 'Welcome - let’s build your IELTS plan.',
      ar: 'حيّاك - خلّنا نبني خطة IELTS مالك.',
      es: 'Bienvenido: vamos a crear tu plan de IELTS.',
    },
    'ielts.dashboard.hero.sub.has_data': {
      en: 'Your predicted band, exam countdown and what to study next - all in one place. Keep your weakest skill moving and the overall band follows.',
      ar: 'Band المتوقع مالك والعدّ التنازلي للامتحان وشنو تدرس بعده - كله في مكان واحد. خلّ أضعف مهارة عندك ماشية وBand الكلي بيلحق.',
      es: 'Tu Band prevista, la cuenta atrás del examen y qué estudiar a continuación, todo en un solo lugar. Mantén en marcha tu destreza más débil y la Band global le seguirá.',
    },
    'ielts.dashboard.hero.sub.cold': {
      en: 'Take the placement test or set your goal and we’ll turn it into a focused, weakest-first study plan.',
      ar: 'سوِّ اختبار تحديد المستوى أو حدّد هدفك وإحنا نحوّله لخطة دراسة مركّزة تبدأ بأضعف مهارة.',
      es: 'Haz la prueba de nivel o fija tu objetivo y lo convertiremos en un plan de estudio enfocado que empieza por tu destreza más débil.',
    },

    // ─── Hero stat pills ────────────────────────────────────────────────────────
    'ielts.dashboard.pill.target': { en: 'Target', ar: 'الهدف', es: 'Objetivo' },
    // Renders inside the pill when no goal is set (interpolated as the value).
    'ielts.dashboard.pill.set_goal': { en: 'Set a goal', ar: 'حدّد هدف', es: 'Fija un objetivo' },
    'ielts.dashboard.pill.predicted': { en: 'Predicted', ar: 'المتوقع', es: 'Prevista' },
    'ielts.dashboard.pill.not_predicted': {
      en: 'Not yet predicted',
      ar: 'ما تحدّد بعد',
      es: 'Aún no prevista',
    },
    // Target / Predicted value when a band exists. {band} stays a digit.
    'ielts.dashboard.pill.band_value': { en: 'Band {band}', ar: 'Band {band}', es: 'Band {band}' },
    'ielts.dashboard.pill.exam_today': {
      en: 'Exam day is here',
      ar: 'يوم الامتحان وصل',
      es: 'Llegó el día del examen',
    },
    // Exam countdown. {days} stays a digit; singular/plural picked in the page.
    'ielts.dashboard.pill.days_to_exam_one': {
      en: '{days} day to your exam',
      ar: 'باقي {days} يوم لامتحانك',
      es: '{days} día para tu examen',
    },
    'ielts.dashboard.pill.days_to_exam_other': {
      en: '{days} days to your exam',
      ar: 'باقي {days} يوم لامتحانك',
      es: '{days} días para tu examen',
    },
    'ielts.dashboard.pill.set_exam_date': {
      en: 'Set your exam date',
      ar: 'حدّد تاريخ امتحانك',
      es: 'Fija la fecha de tu examen',
    },
    // Streak. {streak} stays a digit.
    'ielts.dashboard.pill.streak': {
      en: '{streak}-day streak',
      ar: 'سلسلة {streak} يوم',
      es: 'racha de {streak} días',
    },
    'ielts.dashboard.pill.start_streak': {
      en: 'Start your streak today',
      ar: 'ابدأ سلسلتك اليوم',
      es: 'Empieza tu racha hoy',
    },
    'ielts.dashboard.pill.level': { en: 'Level', ar: 'المستوى', es: 'Nivel' },
    // Predicted-band caveat line. {tier} is the band tier (from bandTier()).
    'ielts.dashboard.hero.estimate_note': {
      en: '{tier} · predicted bands are estimates from your practice, not a guarantee.',
      ar: '{tier} · Band المتوقع تقديرات من تدريبك، مو ضمان.',
      es: '{tier} · las Band previstas son estimaciones de tu práctica, no una garantía.',
    },

    // ─── Quick actions ──────────────────────────────────────────────────────────
    'ielts.dashboard.qa.aria': { en: 'Quick actions', ar: 'إجراءات سريعة', es: 'Acciones rápidas' },
    'ielts.dashboard.qa.start_learning': {
      en: 'Start learning',
      ar: 'ابدأ التعلّم',
      es: 'Empezar a aprender',
    },
    'ielts.dashboard.qa.continue_learning': {
      en: 'Continue learning',
      ar: 'كمّل التعلّم',
      es: 'Continuar aprendiendo',
    },
    'ielts.dashboard.qa.take_mock': {
      en: 'Take a mock',
      ar: 'سوِّ اختبار تجريبي',
      es: 'Hacer un examen de prueba',
    },
    'ielts.dashboard.qa.study_plan': { en: 'Study plan', ar: 'خطة الدراسة', es: 'Plan de estudio' },
    'ielts.dashboard.qa.practise_skill': {
      en: 'Practise a skill',
      ar: 'تدرّب على مهارة',
      es: 'Practicar una destreza',
    },

    // ─── Empty state (brand-new learner) ────────────────────────────────────────
    'ielts.dashboard.empty.title': {
      en: 'No practice yet - start here',
      ar: 'ما في تدريب بعد - ابدأ من هني',
      es: 'Aún no hay práctica: empieza aquí',
    },
    // Body wraps an emphasised "Writing" (kept Latin) - split around it.
    'ielts.dashboard.empty.body_lead': {
      en: 'Take the quick placement test to estimate your bands, or set your target band and exam date and we’ll build the schedule around it. Not sure where to begin?',
      ar: 'سوِّ اختبار تحديد المستوى السريع عشان نقدّر Band مالك، أو حدّد Band المستهدف وتاريخ امتحانك وإحنا نبني الجدول حوله. مو متأكد من وين تبدأ؟',
      es: 'Haz la prueba de nivel rápida para estimar tus Band, o fija tu Band objetivo y la fecha de tu examen y crearemos el calendario en torno a ello. ¿No sabes por dónde empezar?',
    },
    'ielts.dashboard.empty.body_tail': {
      en: 'is the most common weak spot - see the recommendation below.',
      ar: 'هي أكثر نقطة ضعف شائعة - شوف التوصية تحت.',
      es: 'es el punto débil más común; mira la recomendación de abajo.',
    },
    'ielts.dashboard.empty.cta_test': {
      en: 'Take the placement test',
      ar: 'سوِّ اختبار تحديد المستوى',
      es: 'Haz la prueba de nivel',
    },
    'ielts.dashboard.empty.cta_goals': {
      en: 'Set goals',
      ar: 'حدّد الأهداف',
      es: 'Fijar objetivos',
    },

    // ─── 3-lens grid ─────────────────────────────────────────────────────────────
    'ielts.dashboard.overview.aria': {
      en: 'Your IELTS overview',
      ar: 'نظرة عامة على IELTS مالك',
      es: 'Tu resumen de IELTS',
    },

    // Lens 1 - In progress
    'ielts.dashboard.lens.inprogress.eyebrow': {
      en: 'In progress',
      ar: 'قيد التقدّم',
      es: 'En curso',
    },
    'ielts.dashboard.lens.inprogress.title': {
      en: 'Pick up where you left off',
      ar: 'كمّل من وين وقفت',
      es: 'Retoma donde lo dejaste',
    },
    'ielts.dashboard.lens.inprogress.empty': {
      en: 'Nothing in progress yet - start a lesson or take the placement test to begin.',
      ar: 'ما في شي قيد التقدّم بعد - ابدأ درس أو سوِّ اختبار تحديد المستوى عشان تبدأ.',
      es: 'Nada en curso todavía: empieza una lección o haz la prueba de nivel para comenzar.',
    },
    // Per-row sublabel: "{done} of {total} lessons". Counts stay digits.
    'ielts.dashboard.lens.inprogress.lessons_frac': {
      en: '{done} of {total} lessons',
      ar: '{done} من {total} دروس',
      es: '{done} de {total} lecciones',
    },
    'ielts.dashboard.lens.inprogress.in_progress': {
      en: 'In progress',
      ar: 'قيد التقدّم',
      es: 'En curso',
    },
    // Appended after the fraction when a band exists: " · Band {band}".
    'ielts.dashboard.lens.inprogress.band_suffix': {
      en: ' · Band {band}',
      ar: ' · Band {band}',
      es: ' · Band {band}',
    },
    'ielts.dashboard.lens.inprogress.view_progress': {
      en: 'View progress',
      ar: 'شوف التقدّم',
      es: 'Ver progreso',
    },

    // Lens 2 - Recommended next
    'ielts.dashboard.lens.recommended.eyebrow': {
      en: 'Recommended next',
      ar: 'الموصى به بعده',
      es: 'Recomendado a continuación',
    },
    'ielts.dashboard.lens.recommended.title.has_data': {
      en: 'Your highest-leverage focus',
      ar: 'تركيزك الأكثر تأثيراً',
      es: 'Tu foco de mayor impacto',
    },
    'ielts.dashboard.lens.recommended.title.cold': {
      en: 'A strong place to start',
      ar: 'مكان قوي تبدأ منه',
      es: 'Un buen punto de partida',
    },
    // Cold-start Writing rationale. {section} appends the global-mean sentence
    // (or a full stop) - built in the page so Writing stays Latin & emphasised.
    'ielts.dashboard.lens.recommended.body.cold': {
      en: 'Writing is the lowest-scoring module for almost every nationality - and the lowest of all for Gulf learners. It’s the highest-leverage place to begin{section}',
      ar: 'Writing هي الوحدة الأقل درجة عند تقريباً كل الجنسيات - وأقلها كلها عند متعلّمي الخليج. هذي أكثر نقطة تأثير تبدأ منها{section}',
      es: 'Writing es el módulo con la puntuación más baja para casi todas las nacionalidades, y el más bajo de todos para los estudiantes del Golfo. Es el punto de mayor impacto para empezar{section}',
    },
    // The {section} tail: " (the global mean is just Band {band})." {band} a digit.
    'ielts.dashboard.lens.recommended.mean_tail': {
      en: ' (the global mean is just Band {band}).',
      ar: ' (المعدّل العالمي بس Band {band}).',
      es: ' (la media mundial es de apenas Band {band}).',
    },
    'ielts.dashboard.lens.recommended.body.weakest': {
      en: 'This is your weakest skill right now, so it’s where focused practice lifts your overall band fastest.',
      ar: 'هذي أضعف مهارة عندك الحين، فهني وين التدريب المركّز يرفع Band الكلي مالك بأسرع شكل.',
      es: 'Esta es tu destreza más débil ahora mismo, así que es donde la práctica enfocada sube tu Band global más rápido.',
    },
    // Label before the top common mistake (the mistake itself stays English).
    'ielts.dashboard.lens.recommended.watch_out': {
      en: 'Watch out for:',
      ar: 'انتبه من:',
      es: 'Cuidado con:',
    },
    'ielts.dashboard.lens.recommended.learn_method': {
      en: 'Learn the method',
      ar: 'تعلّم الطريقة',
      es: 'Aprende el método',
    },
    // "Practise {skill}" - skill label (Latin) interpolated, lowercased in page.
    'ielts.dashboard.lens.recommended.practise_skill': {
      en: 'Practise {skill}',
      ar: 'تدرّب على {skill}',
      es: 'Practica {skill}',
    },

    // Lens 3 - Per-skill bands
    'ielts.dashboard.lens.bands.eyebrow': { en: 'Your bands', ar: 'Band مالك', es: 'Tus Band' },
    'ielts.dashboard.lens.bands.title': {
      en: 'Band by skill',
      ar: 'Band حسب المهارة',
      es: 'Band por destreza',
    },
    'ielts.dashboard.lens.bands.full_progress': {
      en: 'Full progress',
      ar: 'التقدّم الكامل',
      es: 'Progreso completo',
    },

    // ─── What to study next ──────────────────────────────────────────────────────
    'ielts.dashboard.study_next.heading': {
      en: 'What to study next',
      ar: 'شنو تدرس بعده',
      es: 'Qué estudiar a continuación',
    },
    'ielts.dashboard.study_next.full_plan': {
      en: 'Full plan',
      ar: 'الخطة الكاملة',
      es: 'Plan completo',
    },
    'ielts.dashboard.study_next.dated_schedule': {
      en: 'Dated schedule',
      ar: 'جدول بمواعيد',
      es: 'Calendario con fechas',
    },
    'ielts.dashboard.study_next.start_here': {
      en: 'Start here',
      ar: 'ابدأ من هني',
      es: 'Empieza aquí',
    },
    'ielts.dashboard.study_next.learn': { en: 'Learn', ar: 'تعلّم', es: 'Aprender' },
    'ielts.dashboard.study_next.practise': { en: 'Practise', ar: 'تدرّب', es: 'Practicar' },

    // studyNextReason() microcopy - one phrase per branch.
    // Unknown band, hardest skill (Writing):
    'ielts.dashboard.reason.unknown_hardest': {
      en: 'Not measured yet - and the toughest module for most learners, so it’s worth a baseline early.',
      ar: 'ما تقاس بعد - وأصعب وحدة لأغلب المتعلّمين، فيستاهل تاخذ قياس بداية بدري.',
      es: 'Aún sin medir, y el módulo más difícil para la mayoría de los estudiantes, así que vale la pena tomar una referencia pronto.',
    },
    // Unknown band, other skills:
    'ielts.dashboard.reason.unknown_other': {
      en: 'Not measured yet - take a short practice set to get a baseline band.',
      ar: 'ما تقاس بعد - سوِّ مجموعة تدريب قصيرة عشان تاخذ Band بداية.',
      es: 'Aún sin medir: haz un conjunto de práctica corto para obtener una Band de referencia.',
    },
    // Gap remaining vs target. {current}/{target} bands (digits), {steps} a number.
    'ielts.dashboard.reason.gap_one': {
      en: 'Band {current} now vs your Band {target} target - about {steps} band to close.',
      ar: 'Band {current} الحين مقابل هدفك Band {target} - تقريباً {steps} Band تسكّرها.',
      es: 'Band {current} ahora frente a tu objetivo de Band {target}: unas {steps} Band por cubrir.',
    },
    'ielts.dashboard.reason.gap_other': {
      en: 'Band {current} now vs your Band {target} target - about {steps} bands to close.',
      ar: 'Band {current} الحين مقابل هدفك Band {target} - تقريباً {steps} Band تسكّرها.',
      es: 'Band {current} ahora frente a tu objetivo de Band {target}: unas {steps} Band por cubrir.',
    },
    // At/above target:
    'ielts.dashboard.reason.met': {
      en: 'Band {current} - at or above your target. Keep it warm with light practice.',
      ar: 'Band {current} - على هدفك أو فوقه. خلّها دافية بتدريب خفيف.',
      es: 'Band {current}: en tu objetivo o por encima. Mantenla activa con práctica ligera.',
    },
    // No target set (band known):
    'ielts.dashboard.reason.no_target': {
      en: 'Band {current} - keep building range and accuracy.',
      ar: 'Band {current} - كمّل تبني المدى والدقّة.',
      es: 'Band {current}: sigue desarrollando variedad y precisión.',
    },

    // ─── Recently studied ────────────────────────────────────────────────────────
    'ielts.dashboard.recent.heading': {
      en: 'Recently studied',
      ar: 'اللي درسته مؤخراً',
      es: 'Estudiado recientemente',
    },
    // Empty state wraps two links - "{skill} task" and "full mock". Split around.
    'ielts.dashboard.recent.empty_lead': {
      en: 'Your practice attempts will appear here. Try a',
      ar: 'محاولات تدريبك بتطلع هني. جرّب',
      es: 'Tus intentos de práctica aparecerán aquí. Prueba una',
    },
    // "{skill} task" link text - {skill} is the lowercased skill label (Latin).
    'ielts.dashboard.recent.empty_skill_task': {
      en: '{skill} task',
      ar: 'مهمة {skill}',
      es: 'tarea de {skill}',
    },
    'ielts.dashboard.recent.empty_mid': { en: 'or a', ar: 'أو', es: 'o un' },
    'ielts.dashboard.recent.empty_mock': {
      en: 'full mock',
      ar: 'اختبار تجريبي كامل',
      es: 'examen de prueba completo',
    },
    'ielts.dashboard.recent.empty_tail': {
      en: 'to get started.',
      ar: 'عشان تبدأ.',
      es: 'para empezar.',
    },
    // Footer counts. {done}/{total}/{attempts} stay digits; singular/plural in page.
    'ielts.dashboard.recent.footer_one': {
      en: '{done} of {total} lessons complete · {attempts} practice attempt logged.',
      ar: '{done} من {total} دروس مكتملة · {attempts} محاولة تدريب مسجّلة.',
      es: '{done} de {total} lecciones completadas · {attempts} intento de práctica registrado.',
    },
    'ielts.dashboard.recent.footer_other': {
      en: '{done} of {total} lessons complete · {attempts} practice attempts logged.',
      ar: '{done} من {total} دروس مكتملة · {attempts} محاولة تدريب مسجّلة.',
      es: '{done} de {total} lecciones completadas · {attempts} intentos de práctica registrados.',
    },

    // ─── Shared header ───────────────────────────────────────────────────────────
    'ielts.dashboard.header.back': { en: 'IELTS hub', ar: 'مركز IELTS', es: 'Centro de IELTS' },
    'ielts.dashboard.header.title': {
      en: 'My IELTS Dashboard',
      ar: 'لوحة IELTS مالي',
      es: 'Mi panel de IELTS',
    },
    'ielts.dashboard.header.subtitle': {
      en: 'Your learner home for the IELTS readiness program.',
      ar: 'صفحتك الرئيسية كمتعلّم لبرنامج الجاهزية لـ IELTS.',
      es: 'Tu página principal de estudiante para el programa de preparación de IELTS.',
    },
  }
