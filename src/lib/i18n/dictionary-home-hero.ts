import type { Dictionary } from './dictionary'

/**
 * 2026-06-08: landing-page hero rebuild ("Intelligent English Learning for
 * Everyone" + 7 demo cards + sales-CTA subtitles). Curated EN + Khaleeji AR
 * + ES. Brand/exam/board terms (GCSE, IGCSE, IELTS, EAL, AQA, Edexcel, OCR,
 * Eduqas, Cambridge IGCSE, Pearson Edexcel International) and the track codes
 * IELTS/EAL/KS3/GCSE/IGCSE stay Latin in all locales. No em-dashes in es/ar.
 */
export const HOME_LP_DICTIONARY: Dictionary = {
  'home.lp.h1': {
    en: 'Intelligent English Learning for Everyone',
    ar: 'تعلُّم إنجليزي ذكي.. للجميع',
    es: 'Aprendizaje de inglés inteligente para todos',
  },
  'home.lp.subtitle': {
    en: 'Personalised, exam-aligned and AI-assisted - from Years 7–9 through GCSE, IGCSE and IELTS, and structured English support for EAL learners. Pick your track to explore the live demo.',
    ar: 'مُخصّص ومتوافق مع الامتحان ومدعوم بالذكاء الاصطناعي: من السنوات 7-9 مرورًا بـ GCSE وIGCSE وIELTS، مع دعم منظّم للإنجليزي لطلاب EAL. اختر مسارك وجرّب العرض المباشر.',
    es: 'Personalizado, alineado con el examen y asistido por IA: desde los años 7-9 hasta GCSE, IGCSE e IELTS, además de apoyo estructurado de inglés para estudiantes EAL. Elige tu itinerario y explora la demo en vivo.',
  },
  'home.lp.track.ielts.sub': {
    en: 'Prepare with confidence for IELTS',
    ar: 'استعد بثقة لامتحان IELTS',
    es: 'Prepárate con confianza para el IELTS',
  },
  'home.lp.track.eal.sub': {
    en: 'Master English with bilingual support',
    ar: 'أتقن الإنجليزي بدعم ثنائي اللغة',
    es: 'Domina el inglés con apoyo bilingüe',
  },
  'home.lp.track.ks3.sub': {
    en: 'Build strong foundations for GCSE English',
    ar: 'ابنِ أساسًا قويًا لإنجليزي الـ GCSE',
    es: 'Construye una base sólida para el inglés de GCSE',
  },
  'home.lp.track.gcse.sub': {
    en: 'Exam-board-exact revision with examiner-style feedback',
    ar: 'مراجعة مطابقة لهيئة امتحانك مع ملاحظات بأسلوب المصحّح',
    es: 'Repaso fiel a tu junta examinadora, con feedback estilo examinador',
  },
  'home.lp.track.igcse.sub': {
    en: 'Structured IGCSE English preparation',
    ar: 'تحضير منظّم لإنجليزي الـ IGCSE',
    es: 'Preparación estructurada para el inglés de IGCSE',
  },
  'home.lp.track.teachers.label': {
    en: 'Teachers',
    ar: 'المعلّمون',
    es: 'Profesores',
  },
  'home.lp.track.teachers.sub': {
    en: 'Save hours and reach every student',
    ar: 'وفّر ساعات ووصّل لكل طالب',
    es: 'Ahorra horas y llega a cada estudiante',
  },
  'home.lp.track.schools.label': {
    en: 'Schools',
    ar: 'المدارس',
    es: 'Colegios',
  },
  'home.lp.track.schools.sub': {
    en: 'Run a sharper English department',
    ar: 'أدر قسم إنجليزي أكثر كفاءة',
    es: 'Dirige un departamento de inglés más eficaz',
  },
  'home.lp.track.aria': {
    en: 'Explore {label}: {sub}',
    ar: 'استكشف {label}: {sub}',
    es: 'Explora {label}: {sub}',
  },
  'home.lp.cta_pilot': {
    en: 'Book a school pilot',
    ar: 'احجز تجربة مدرسية',
    es: 'Reserva una prueba piloto para tu colegio',
  },
  'home.lp.spec_note': {
    en: 'Personalised practice + AI-assisted feedback aligned to AQA, Edexcel, OCR, Eduqas, Cambridge IGCSE and Pearson Edexcel International specifications.',
    ar: 'تمارين مُخصّصة + ملاحظات بمساعدة الذكاء الاصطناعي متوافقة مع مواصفات AQA وEdexcel وOCR وEduqas وCambridge IGCSE وPearson Edexcel International.',
    es: 'Práctica personalizada y feedback asistido por IA alineados con las especificaciones de AQA, Edexcel, OCR, Eduqas, Cambridge IGCSE y Pearson Edexcel International.',
  },

  // ─── Learn by playing (10 October 2026), straight after the hero ─────────
  // Game names stay in Latin script, as on the game pages they open.
  'home.play.eyebrow': {
    en: 'Learn by playing',
    ar: 'تعلّم باللعب',
    es: 'Aprende jugando',
  },
  'home.play.heading': {
    en: 'Play your way through revision',
    ar: 'راجع وإنت تلعب',
    es: 'Repasa mientras juegas',
  },
  'home.play.body': {
    en: 'Guided games on the set texts you study, and quick games that drill quotations, themes and techniques for the exam.',
    ar: 'ألعاب موجّهة على النصوص المقررة اللي تدرسها، وألعاب سريعة تدرّبك على الاقتباسات والمواضيع والأساليب للامتحان.',
    es: 'Juegos guiados sobre los textos prescritos que estudias y juegos rápidos para practicar citas, temas y recursos para el examen.',
  },
  'home.play.texts.title': {
    en: 'Play your set texts',
    ar: 'العب مع نصوصك المقررة',
    es: 'Juega con tus textos prescritos',
  },
  'home.play.texts.body': {
    en: 'Guided games built from our study guide to each text. Pick one and learn it as you play.',
    ar: 'ألعاب موجّهة مبنية من دليل الدراسة حق كل نص. اختر نص وتعلّمه وإنت تلعب.',
    es: 'Juegos guiados creados a partir de nuestra guía de estudio de cada texto. Elige uno y apréndelo jugando.',
  },
  // "{board}" is the board's short name, e.g. AQA. The texts follow as links.
  'home.play.texts.for_board': {
    en: 'Your {board} texts:',
    ar: 'نصوصك في {board}:',
    es: 'Tus textos de {board}:',
  },
  'home.play.texts.more': {
    en: 'and {count} more',
    ar: 'و{count} غيرها',
    es: 'y {count} más',
  },
  'home.play.texts.cta': {
    en: 'Choose a text',
    ar: 'اختر نص',
    es: 'Elige un texto',
  },
  'home.play.play': { en: 'Play', ar: 'العب', es: 'Jugar' },
  'home.play.all_games': {
    en: 'See all games',
    ar: 'شوف كل الألعاب',
    es: 'Ver todos los juegos',
  },
  'home.play.theme_matcher.title': {
    en: 'Theme Matcher',
    ar: 'Theme Matcher',
    es: 'Theme Matcher',
  },
  'home.play.theme_matcher.body': {
    en: 'Pick every set text a theme appears in, from ambition to power.',
    ar: 'اختر كل نص مقرر يظهر فيه الموضوع، من الطموح إلى السلطة.',
    es: 'Elige todos los textos prescritos en los que aparece un tema, de la ambición al poder.',
  },
  'home.play.speed_analysis.title': {
    en: 'Speed Analysis',
    ar: 'Speed Analysis',
    es: 'Speed Analysis',
  },
  'home.play.speed_analysis.body': {
    en: 'Name the literary device in each extract before the timer runs out.',
    ar: 'سمِّ الأسلوب الأدبي في كل مقطع قبل لا يخلص الوقت.',
    es: 'Identifica el recurso literario de cada fragmento antes de que se acabe el tiempo.',
  },
  'home.play.quote_detective.title': {
    en: 'Quote Detective',
    ar: 'Quote Detective',
    es: 'Quote Detective',
  },
  'home.play.quote_detective.body': {
    en: 'Work out which set text each quotation comes from.',
    ar: 'اعرف كل اقتباس من أي نص مقرر.',
    es: 'Averigua de qué texto prescrito procede cada cita.',
  },
  'home.play.grade_climber.title': {
    en: 'Grade Climber',
    ar: 'Grade Climber',
    es: 'Grade Climber',
  },
  'home.play.grade_climber.body': {
    en: 'GCSE-style questions that get harder as you go: three right to climb a grade.',
    ar: 'أسئلة بأسلوب GCSE تصعب كل ما تقدّمت: ثلاث إجابات صح وتطلع درجة.',
    es: 'Preguntas de estilo GCSE cada vez más difíciles: tres aciertos para subir de nota.',
  },
}
