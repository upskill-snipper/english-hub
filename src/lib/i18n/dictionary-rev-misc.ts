/**
 * dictionary-rev-misc.ts
 *
 * Curated EN + Khaleeji (Gulf) Arabic + Spanish for the UI CHROME of the
 * miscellaneous /revision/** pages OUTSIDE poetry/ and language/ and OUTSIDE
 * the texts/ set-text guides — i.e. analytics, grade-targets, exam-technique,
 * common-errors, study-plan, ial, quiz, the revision hub index, etc.
 *
 * SCOPE: ONLY chrome — back links, breadcrumbs, section headings/labels,
 * buttons/CTAs, hero/intro marketing copy, card titles/descriptions, tab/nav
 * labels and alt/aria text. Teaching prose, model answers, examiner
 * commentary, quiz items and grade-descriptor analysis are STUDY CONTENT and
 * stay English in the page source — they are intentionally NOT in this shard.
 *
 * Brand/tech/title/author terms stay Latin in BOTH ar and es: The English
 * Hub, GCSE, IGCSE, KS3, AQA, OCR, Edexcel, Eduqas, Cambridge, WJEC, IAL,
 * AO1–AO6, £, grade numbers and codes.
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/
 * روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * {tokens} are preserved exactly across all three languages.
 *
 * NOTE: annotated Record (NOT `as const`) so the orchestrator can merge it
 * via lookup() in dictionary.ts. The orchestrator wires this shard.
 */

export const REV_MISC_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Analytics (/revision/analytics) ──────────────────────────────────
  'rev.misc.analytics.badge': {
    en: 'Personal analytics',
    ar: 'تحليلات شخصية',
    es: 'Analítica personal',
  },
  'rev.misc.analytics.title': { en: 'Your Analytics', ar: 'تحليلاتك', es: 'Tu analítica' },
  'rev.misc.analytics.subtitle_data': {
    en: "Based on {count} real answers you've given across quizzes.",
    ar: 'مبني على {count} إجابة فعلية أعطيتها في الاختبارات.',
    es: 'Basado en {count} respuestas reales que has dado en los cuestionarios.',
  },
  'rev.misc.analytics.subtitle_data_one': {
    en: "Based on {count} real answer you've given across quizzes.",
    ar: 'مبني على {count} إجابة فعلية أعطيتها في الاختبارات.',
    es: 'Basado en {count} respuesta real que has dado en los cuestionarios.',
  },
  'rev.misc.analytics.subtitle_empty': {
    en: 'Your personal performance dashboard -- powered by the quizzes you take on this site.',
    ar: 'لوحة أدائك الشخصية — مدعومة بالاختبارات اللي تسوّيها في هالموقع.',
    es: 'Tu panel de rendimiento personal, impulsado por los cuestionarios que haces en este sitio.',
  },
  'rev.misc.analytics.empty_heading': {
    en: 'No data yet',
    ar: 'ما في بيانات بعد',
    es: 'Aún no hay datos',
  },
  'rev.misc.analytics.empty_body': {
    en: "Take your first quiz at /revision/quiz and come back. Your weak spots, progress trend, and suggested next-steps will appear here once you've answered a handful of questions.",
    ar: 'سوّ أول اختبار لك في /revision/quiz وارجع. نقاط ضعفك واتجاه تقدّمك والخطوات المقترحة بتظهر هنا أول ما تجاوب على شوية أسئلة.',
    es: 'Haz tu primer cuestionario en /revision/quiz y vuelve. Tus puntos débiles, la tendencia de tu progreso y los siguientes pasos sugeridos aparecerán aquí cuando hayas respondido unas cuantas preguntas.',
  },
  'rev.misc.analytics.empty_cta': {
    en: 'Start your first quiz',
    ar: 'ابدأ أول اختبار لك',
    es: 'Empieza tu primer cuestionario',
  },
  'rev.misc.analytics.snapshot_heading': {
    en: 'Your progress snapshot',
    ar: 'لمحة عن تقدّمك',
    es: 'Resumen de tu progreso',
  },
  'rev.misc.analytics.tile.answered': {
    en: 'Questions answered',
    ar: 'الأسئلة المجابة',
    es: 'Preguntas respondidas',
  },
  'rev.misc.analytics.tile.answered_sub': {
    en: '{count} correct overall',
    ar: '{count} صحيحة إجمالاً',
    es: '{count} correctas en total',
  },
  'rev.misc.analytics.tile.correct_7d': {
    en: 'Correct last 7 days',
    ar: 'الصحيحة آخر 7 أيام',
    es: 'Correctas últimos 7 días',
  },
  'rev.misc.analytics.tile.over_answers': {
    en: 'over {count} answers',
    ar: 'على {count} إجابة',
    es: 'sobre {count} respuestas',
  },
  'rev.misc.analytics.tile.over_answers_one': {
    en: 'over {count} answer',
    ar: 'على {count} إجابة',
    es: 'sobre {count} respuesta',
  },
  'rev.misc.analytics.tile.no_activity_week': {
    en: 'no activity this week',
    ar: 'ما في نشاط هالأسبوع',
    es: 'sin actividad esta semana',
  },
  'rev.misc.analytics.tile.correct_30d': {
    en: 'Correct last 30 days',
    ar: 'الصحيحة آخر 30 يوم',
    es: 'Correctas últimos 30 días',
  },
  'rev.misc.analytics.tile.no_activity_month': {
    en: 'no activity this month',
    ar: 'ما في نشاط هالشهر',
    es: 'sin actividad este mes',
  },
  'rev.misc.analytics.tile.streak': {
    en: 'Answering streak',
    ar: 'سلسلة الإجابات',
    es: 'Racha de respuestas',
  },
  'rev.misc.analytics.tile.streak_best': {
    en: 'best: {count}d',
    ar: 'الأفضل: {count} يوم',
    es: 'mejor: {count}d',
  },
  'rev.misc.analytics.tile.streak_keep': {
    en: 'keep it going!',
    ar: 'كمّل عليها!',
    es: '¡sigue así!',
  },
  'rev.misc.analytics.tile.streak_start': {
    en: 'answer a question today to start',
    ar: 'جاوب على سؤال اليوم عشان تبدأ',
    es: 'responde una pregunta hoy para empezar',
  },
  'rev.misc.analytics.weak.title': {
    en: 'Your weakest topics',
    ar: 'أضعف مواضيعك',
    es: 'Tus temas más débiles',
  },
  'rev.misc.analytics.weak.desc': {
    en: 'Topics where your correct-rate is lowest, based on at least 2 attempts.',
    ar: 'المواضيع اللي نسبة صحتك فيها أقل، بناءً على محاولتين على الأقل.',
    es: 'Temas donde tu tasa de aciertos es más baja, según al menos 2 intentos.',
  },
  'rev.misc.analytics.weak.empty': {
    en: "Keep answering quiz questions -- we'll surface weak spots once you have at least 2 attempts in a topic.",
    ar: 'كمّل تجاوب على أسئلة الاختبار — بنطلّع لك نقاط الضعف أول ما يصير عندك محاولتين على الأقل في موضوع.',
    es: 'Sigue respondiendo preguntas: mostraremos tus puntos débiles cuando tengas al menos 2 intentos en un tema.',
  },
  'rev.misc.analytics.weak.x_of_y': {
    en: '{correct} of {total} correct',
    ar: '{correct} من {total} صحيحة',
    es: '{correct} de {total} correctas',
  },
  'rev.misc.analytics.weak.pct_correct_aria': {
    en: '{pct}% correct',
    ar: '{pct}% صحيحة',
    es: '{pct}% correctas',
  },
  'rev.misc.analytics.suggest.title': {
    en: 'Suggested next study',
    ar: 'الدراسة المقترحة التالية',
    es: 'Siguiente estudio sugerido',
  },
  'rev.misc.analytics.suggest.desc': {
    en: 'The three topics with the biggest potential for improvement, with a direct link to the matching revision section.',
    ar: 'الثلاثة مواضيع اللي عندها أكبر إمكانية للتحسّن، مع رابط مباشر لقسم المراجعة المناسب.',
    es: 'Los tres temas con mayor potencial de mejora, con un enlace directo a la sección de repaso correspondiente.',
  },
  'rev.misc.analytics.suggest.empty': {
    en: "Once you've answered a few more questions, we'll recommend a next-step study path here.",
    ar: 'أول ما تجاوب على شوية أسئلة أكثر، بنوصّي لك بمسار دراسة تالي هنا.',
    es: 'Cuando hayas respondido algunas preguntas más, te recomendaremos aquí una ruta de estudio.',
  },
  'rev.misc.analytics.suggest.revise_now': {
    en: 'Revise this now',
    ar: 'راجع هذا الحين',
    es: 'Repasar esto ahora',
  },
  'rev.misc.analytics.suggest.rate_aria': {
    en: 'Current correct rate {pct}%',
    ar: 'نسبة الصحة الحالية {pct}%',
    es: 'Tasa de aciertos actual {pct}%',
  },
  'rev.misc.analytics.diff.title': {
    en: 'Overall difficulty distribution',
    ar: 'توزيع الصعوبة الإجمالي',
    es: 'Distribución general de dificultad',
  },
  'rev.misc.analytics.diff.desc': {
    en: "How the questions you've answered break down by how hard they've been for you personally.",
    ar: 'كيف تتوزّع الأسئلة اللي جاوبت عليها حسب صعوبتها عليك شخصياً.',
    es: 'Cómo se distribuyen las preguntas que has respondido según lo difíciles que han sido para ti.',
  },
  'rev.misc.analytics.diff.no_answers': {
    en: 'No answers yet.',
    ar: 'ما في إجابات بعد.',
    es: 'Aún no hay respuestas.',
  },
  'rev.misc.analytics.diff.bar_aria': {
    en: 'Stacked bar of difficulty distribution',
    ar: 'شريط متراكم لتوزيع الصعوبة',
    es: 'Barra apilada de la distribución de dificultad',
  },
  'rev.misc.analytics.diff.answers_pct': {
    en: '{count} answers ({pct}%)',
    ar: '{count} إجابة ({pct}%)',
    es: '{count} respuestas ({pct}%)',
  },
  'rev.misc.analytics.diff.answers_pct_one': {
    en: '{count} answer ({pct}%)',
    ar: '{count} إجابة ({pct}%)',
    es: '{count} respuesta ({pct}%)',
  },
  'rev.misc.analytics.diff.easy': { en: 'Easy', ar: 'سهل', es: 'Fácil' },
  'rev.misc.analytics.diff.medium': { en: 'Medium', ar: 'متوسط', es: 'Medio' },
  'rev.misc.analytics.diff.hard': { en: 'Hard', ar: 'صعب', es: 'Difícil' },
  'rev.misc.analytics.diff.very_hard': { en: 'Very hard', ar: 'صعب جداً', es: 'Muy difícil' },
  'rev.misc.analytics.diff.easy_hint': {
    en: 'You get these right ~80% of the time.',
    ar: 'تجاوب على هذي صح حوالي 80% من الوقت.',
    es: 'Aciertas estas alrededor del 80% de las veces.',
  },
  'rev.misc.analytics.diff.medium_hint': {
    en: '50-79% correct -- room to grow.',
    ar: '50-79% صحيحة — في مجال للتحسّن.',
    es: '50-79% correctas: hay margen de mejora.',
  },
  'rev.misc.analytics.diff.hard_hint': {
    en: '25-49% correct -- focus area.',
    ar: '25-49% صحيحة — منطقة تركيز.',
    es: '25-49% correctas: área de enfoque.',
  },
  'rev.misc.analytics.diff.very_hard_hint': {
    en: 'Below 25% correct -- needs dedicated revision.',
    ar: 'أقل من 25% صحيحة — يحتاج مراجعة مخصّصة.',
    es: 'Menos del 25% correctas: necesita repaso dedicado.',
  },

  // ─── Grade targets (/revision/grade-targets/grade-N) ──────────────────
  'rev.misc.grade.back_all': {
    en: 'All grade targets',
    ar: 'كل أهداف الدرجات',
    es: 'Todos los objetivos de nota',
  },
  'rev.misc.grade.what_looks_like': {
    en: 'What {grade} looks like',
    ar: 'شكل {grade} كيف',
    es: 'Cómo es un {grade}',
  },
  'rev.misc.grade.lit_label': {
    en: 'English Literature ({grade})',
    ar: 'English Literature ({grade})',
    es: 'English Literature ({grade})',
  },
  'rev.misc.grade.lang_label': {
    en: 'English Language ({grade})',
    ar: 'English Language ({grade})',
    es: 'English Language ({grade})',
  },
  'rev.misc.grade.how_to_get_there': {
    en: 'How to get there',
    ar: 'كيف توصل لها',
    es: 'Cómo llegar ahí',
  },
  'rev.misc.grade.boundary_heading': {
    en: '{board} {label} Boundary',
    ar: 'حد {board} {label}',
    es: 'Umbral {label} de {board}',
  },
  'rev.misc.grade.prev_grade': { en: 'Previous grade', ar: 'الدرجة السابقة', es: 'Nota anterior' },
  'rev.misc.grade.next_grade': { en: 'Next grade', ar: 'الدرجة التالية', es: 'Nota siguiente' },

  // ─── Quiz hub (/revision/quiz) ────────────────────────────────────────
  'rev.misc.quiz.breadcrumb': { en: 'Quiz', ar: 'اختبار', es: 'Cuestionario' },
  'rev.misc.quiz.back_revision': {
    en: 'Back to Revision Hub',
    ar: 'ارجع لمركز المراجعة',
    es: 'Volver al centro de repaso',
  },
  'rev.misc.quiz.back_hub': {
    en: 'Back to Quiz Hub',
    ar: 'ارجع لمركز الاختبارات',
    es: 'Volver al centro de cuestionarios',
  },
  'rev.misc.quiz.title': { en: 'Quick Quizzes', ar: 'اختبارات سريعة', es: 'Cuestionarios rápidos' },
  'rev.misc.quiz.for_board': { en: 'For {board}', ar: 'لـ {board}', es: 'Para {board}' },
  'rev.misc.quiz.subtitle_board': {
    en: 'Test yourself on {board} English topics',
    ar: 'اختبر نفسك في مواضيع {board} English',
    es: 'Ponte a prueba con temas de {board} English',
  },
  'rev.misc.quiz.subtitle_generic': {
    en: 'Test yourself on any GCSE English topic',
    ar: 'اختبر نفسك في أي موضوع GCSE English',
    es: 'Ponte a prueba con cualquier tema de GCSE English',
  },
  'rev.misc.quiz.choose_topics': { en: 'Choose Topics', ar: 'اختر المواضيع', es: 'Elige temas' },
  'rev.misc.quiz.choose_topics_desc_board': {
    en: 'Showing topics covered by {board}. Select one or more, or leave all unselected for a mixed quiz.',
    ar: 'نعرض المواضيع اللي يغطيها {board}. اختر واحد أو أكثر، أو خلّها كلها بدون اختيار لاختبار منوّع.',
    es: 'Mostrando los temas que cubre {board}. Selecciona uno o más, o deja todos sin marcar para un cuestionario mixto.',
  },
  'rev.misc.quiz.choose_topics_desc_generic': {
    en: 'Select one or more topics, or leave all unselected for a mixed quiz.',
    ar: 'اختر موضوع أو أكثر، أو خلّها كلها بدون اختيار لاختبار منوّع.',
    es: 'Selecciona uno o más temas, o deja todos sin marcar para un cuestionario mixto.',
  },
  'rev.misc.quiz.start_a_quiz': {
    en: 'Start a Quiz',
    ar: 'ابدأ اختبار',
    es: 'Empieza un cuestionario',
  },
  'rev.misc.quiz.start_quiz': { en: 'Start quiz', ar: 'ابدأ الاختبار', es: 'Empezar cuestionario' },
  'rev.misc.quiz.questions_count': {
    en: '{count} questions',
    ar: '{count} سؤال',
    es: '{count} preguntas',
  },
  'rev.misc.quiz.mode.quick_title': {
    en: 'Quick Quiz',
    ar: 'اختبار سريع',
    es: 'Cuestionario rápido',
  },
  'rev.misc.quiz.mode.quick_desc': {
    en: 'A fast quiz to test your knowledge. Perfect for a revision break.',
    ar: 'اختبار سريع يفحص معلوماتك. مثالي لاستراحة مراجعة.',
    es: 'Un cuestionario rápido para poner a prueba lo que sabes. Perfecto para una pausa de repaso.',
  },
  'rev.misc.quiz.mode.full_title': {
    en: 'Full Quiz',
    ar: 'اختبار كامل',
    es: 'Cuestionario completo',
  },
  'rev.misc.quiz.mode.full_desc': {
    en: 'A thorough test covering more ground. Great for exam preparation.',
    ar: 'اختبار شامل يغطي مساحة أكبر. ممتاز للتحضير للامتحان.',
    es: 'Una prueba a fondo que abarca más terreno. Ideal para preparar el examen.',
  },
  'rev.misc.quiz.mode.mixed_title': { en: 'Mixed Topics', ar: 'مواضيع منوّعة', es: 'Temas mixtos' },
  'rev.misc.quiz.mode.mixed_desc_board': {
    en: 'Questions from every {board} topic, randomly shuffled.',
    ar: 'أسئلة من كل موضوع في {board}، مرتّبة عشوائياً.',
    es: 'Preguntas de cada tema de {board}, mezcladas al azar.',
  },
  'rev.misc.quiz.mode.mixed_desc_generic': {
    en: 'Questions from every topic, randomly shuffled. Covers all your bases.',
    ar: 'أسئلة من كل موضوع، مرتّبة عشوائياً. تغطّي كل شي عندك.',
    es: 'Preguntas de cada tema, mezcladas al azar. Cubre todo lo necesario.',
  },
  'rev.misc.quiz.score_history': {
    en: 'Score History',
    ar: 'سجل النتائج',
    es: 'Historial de resultados',
  },
  'rev.misc.quiz.col_date': { en: 'Date', ar: 'التاريخ', es: 'Fecha' },
  'rev.misc.quiz.col_mode': { en: 'Mode', ar: 'النمط', es: 'Modo' },
  'rev.misc.quiz.col_score': { en: 'Score', ar: 'النتيجة', es: 'Puntuación' },
  'rev.misc.quiz.col_grade': { en: 'Grade', ar: 'الدرجة', es: 'Nota' },
  'rev.misc.quiz.grade_label': { en: 'Grade {grade}', ar: 'Grade {grade}', es: 'Grade {grade}' },
  'rev.misc.quiz.motivate_title': {
    en: 'Regular quizzing boosts long-term retention',
    ar: 'الاختبارات المنتظمة تقوّي الحفظ على المدى الطويل',
    es: 'Hacer cuestionarios con regularidad mejora la retención a largo plazo',
  },
  'rev.misc.quiz.motivate_body': {
    en: 'Research shows that testing yourself is one of the most effective revision strategies. Try a quick quiz every day to keep your knowledge sharp.',
    ar: 'الأبحاث تبيّن إن اختبار نفسك من أكثر طرق المراجعة فعالية. جرّب اختبار سريع كل يوم عشان تخلي معلوماتك حاضرة.',
    es: 'Los estudios muestran que ponerse a prueba es una de las estrategias de repaso más eficaces. Haz un cuestionario rápido cada día para mantener tus conocimientos al día.',
  },

  // ─── Quiz engine (/revision/quiz, in-quiz chrome) ─────────────────────
  'rev.misc.quiz.question_x_of_y': {
    en: 'Question {n} of {total}',
    ar: 'السؤال {n} من {total}',
    es: 'Pregunta {n} de {total}',
  },
  'rev.misc.quiz.timer_off': { en: 'Timer off', ar: 'المؤقّت مطفي', es: 'Temporizador apagado' },
  'rev.misc.quiz.timer_on': { en: 'Timer on', ar: 'المؤقّت شغّال', es: 'Temporizador encendido' },
  'rev.misc.quiz.score_progress': {
    en: 'Score: {score}/{total}',
    ar: 'النتيجة: {score}/{total}',
    es: 'Puntuación: {score}/{total}',
  },
  'rev.misc.quiz.progress_aria': {
    en: 'Quiz progress: {n} of {total} questions',
    ar: 'تقدّم الاختبار: {n} من {total} سؤال',
    es: 'Progreso del cuestionario: {n} de {total} preguntas',
  },
  'rev.misc.quiz.correct': { en: 'Correct!', ar: 'صحيح!', es: '¡Correcto!' },
  'rev.misc.quiz.incorrect': { en: 'Incorrect', ar: 'خطأ', es: 'Incorrecto' },
  'rev.misc.quiz.next_question': {
    en: 'Next Question',
    ar: 'السؤال التالي',
    es: 'Siguiente pregunta',
  },
  'rev.misc.quiz.see_results': { en: 'See Results', ar: 'شوف النتائج', es: 'Ver resultados' },
  'rev.misc.quiz.complete': {
    en: 'Quiz Complete',
    ar: 'انتهى الاختبار',
    es: 'Cuestionario completado',
  },
  'rev.misc.quiz.correct_label': { en: 'Correct', ar: 'صحيحة', es: 'Correctas' },
  'rev.misc.quiz.score_label': { en: 'Score', ar: 'النتيجة', es: 'Puntuación' },
  'rev.misc.quiz.time_remaining': {
    en: 'Time remaining: {left} / {total}',
    ar: 'الوقت المتبقي: {left} / {total}',
    es: 'Tiempo restante: {left} / {total}',
  },
  'rev.misc.quiz.topic_breakdown': {
    en: 'Topic Breakdown',
    ar: 'تفصيل حسب الموضوع',
    es: 'Desglose por tema',
  },
  'rev.misc.quiz.recommended_revision': {
    en: 'Recommended Revision',
    ar: 'المراجعة الموصى بها',
    es: 'Repaso recomendado',
  },
  'rev.misc.quiz.weak_intro': {
    en: 'Based on your weakest topic, focus next on:',
    ar: 'بناءً على أضعف موضوع عندك، ركّز بعدها على:',
    es: 'Según tu tema más débil, céntrate ahora en:',
  },
  'rev.misc.quiz.weak_intro_plural': {
    en: 'Based on your weakest topics, focus next on:',
    ar: 'بناءً على أضعف مواضيعك، ركّز بعدها على:',
    es: 'Según tus temas más débiles, céntrate ahora en:',
  },
  'rev.misc.quiz.review_answers': {
    en: 'Review Answers',
    ar: 'راجع الإجابات',
    es: 'Revisar respuestas',
  },
  'rev.misc.quiz.your_answer': {
    en: 'Your answer: {answer}',
    ar: 'إجابتك: {answer}',
    es: 'Tu respuesta: {answer}',
  },
  'rev.misc.quiz.correct_answer': {
    en: 'Correct answer: {answer}',
    ar: 'الإجابة الصحيحة: {answer}',
    es: 'Respuesta correcta: {answer}',
  },
  'rev.misc.quiz.new_quiz': { en: 'New Quiz', ar: 'اختبار جديد', es: 'Nuevo cuestionario' },
  'rev.misc.quiz.revision_hub': { en: 'Revision Hub', ar: 'مركز المراجعة', es: 'Centro de repaso' },

  // ─── Grade-targets self-assessment quiz ───────────────────────────────
  'rev.misc.gtquiz.title': {
    en: 'What Grade Am I Working At?',
    ar: 'أي درجة أنا أشتغل عليها؟',
    es: '¿En qué nota estoy trabajando?',
  },
  'rev.misc.gtquiz.intro': {
    en: 'Answer five quick questions about how you currently write and analyse texts for {paper}. This is not a test - it helps you identify which guide to start with.',
    ar: 'جاوب على خمسة أسئلة سريعة عن طريقة كتابتك وتحليلك للنصوص في {paper} الحين. هذا مو اختبار — يساعدك تعرف من أي دليل تبدأ.',
    es: 'Responde cinco preguntas rápidas sobre cómo escribes y analizas textos actualmente para {paper}. No es un examen: te ayuda a identificar con qué guía empezar.',
  },
  'rev.misc.gtquiz.start': {
    en: 'Start Self-Assessment',
    ar: 'ابدأ التقييم الذاتي',
    es: 'Empezar autoevaluación',
  },
  'rev.misc.gtquiz.question_x_of_y': {
    en: 'Question {n} of {total}',
    ar: 'السؤال {n} من {total}',
    es: 'Pregunta {n} de {total}',
  },
  'rev.misc.gtquiz.your_result': { en: 'Your result', ar: 'نتيجتك', es: 'Tu resultado' },
  'rev.misc.gtquiz.retake': { en: 'Retake quiz', ar: 'أعد الاختبار', es: 'Repetir cuestionario' },
  'rev.misc.gtquiz.disclaimer': {
    en: 'This is a rough self-assessment, not a prediction. Your actual grade depends on exam performance, timing, and how well you apply techniques on the day. Use this as a starting point to focus your revision.',
    ar: 'هذا تقييم ذاتي تقريبي، مو توقّع. درجتك الفعلية تعتمد على أدائك في الامتحان والوقت ومدى تطبيقك للتقنيات في اليوم نفسه. استخدمه كنقطة بداية تركّز فيها مراجعتك.',
    es: 'Esta es una autoevaluación aproximada, no una predicción. Tu nota real depende del rendimiento en el examen, el tiempo y lo bien que apliques las técnicas el día de la prueba. Úsala como punto de partida para enfocar tu repaso.',
  },

  // ─── Grade-N interactive (checklist / vocab / comparison) ─────────────
  'rev.misc.gradeint.checklist_title': {
    en: 'Mastery Checklist',
    ar: 'قائمة الإتقان',
    es: 'Lista de dominio',
  },
  'rev.misc.gradeint.checklist_desc': {
    en: 'Tick off each skill as you feel confident with it. Aim to have all of these ticked before your exam.',
    ar: 'علّم على كل مهارة أول ما تحس إنك واثق منها. حاول تعلّم عليها كلها قبل امتحانك.',
    es: 'Marca cada habilidad cuando te sientas seguro de ella. Intenta tenerlas todas marcadas antes del examen.',
  },
  'rev.misc.gradeint.vocab_title': {
    en: 'Vocabulary Bank',
    ar: 'بنك المفردات',
    es: 'Banco de vocabulario',
  },
  'rev.misc.gradeint.vocab_desc': {
    en: 'These words and phrases will make your analysis sound more precise and academic. Click each word to see how to use it in a sentence.',
    ar: 'هالكلمات والعبارات بتخلي تحليلك يبان أدقّ وأكاديمي أكثر. دوس على كل كلمة عشان تشوف كيف تستخدمها في جملة.',
    es: 'Estas palabras y frases harán que tu análisis suene más preciso y académico. Haz clic en cada palabra para ver cómo usarla en una oración.',
  },
  'rev.misc.gradeint.compare_title': {
    en: '{lower} vs {higher}: See the Difference',
    ar: '{lower} مقابل {higher}: شوف الفرق',
    es: '{lower} vs {higher}: mira la diferencia',
  },
  'rev.misc.gradeint.show_comparison': {
    en: 'Show comparison',
    ar: 'اعرض المقارنة',
    es: 'Mostrar comparación',
  },
  'rev.misc.gradeint.hide_comparison': {
    en: 'Hide comparison',
    ar: 'سكّر المقارنة',
    es: 'Ocultar comparación',
  },

  // ─── Study plan (/revision/study-plan) ────────────────────────────────
  'rev.misc.plan.breadcrumb': { en: 'Study Plan', ar: 'خطة الدراسة', es: 'Plan de estudio' },
  'rev.misc.plan.back_revision': {
    en: 'Back to Revision Hub',
    ar: 'ارجع لمركز المراجعة',
    es: 'Volver al centro de repaso',
  },
  'rev.misc.plan.badge_saved': {
    en: 'Your study plan',
    ar: 'خطة دراستك',
    es: 'Tu plan de estudio',
  },
  'rev.misc.plan.saved_title': {
    en: 'Your Personalised {board} Plan',
    ar: 'خطتك الشخصية لـ {board}',
    es: 'Tu plan personalizado de {board}',
  },
  'rev.misc.plan.generated_on': {
    en: 'Generated on {date}',
    ar: 'أُنشئت في {date}',
    es: 'Generado el {date}',
  },
  'rev.misc.plan.retake_diagnostic': {
    en: 'Retake Diagnostic',
    ar: 'أعد التشخيص',
    es: 'Repetir diagnóstico',
  },
  'rev.misc.plan.summary': { en: 'Plan summary', ar: 'ملخّص الخطة', es: 'Resumen del plan' },
  'rev.misc.plan.time_horizon': {
    en: 'Time horizon',
    ar: 'المدى الزمني',
    es: 'Horizonte temporal',
  },
  'rev.misc.plan.target_grade': { en: 'Target grade', ar: 'الدرجة المستهدفة', es: 'Nota objetivo' },
  'rev.misc.plan.exam_board': { en: 'Exam board', ar: 'مجلس الامتحان', es: 'Junta examinadora' },
  'rev.misc.plan.not_set': { en: 'Not set', ar: 'غير محدّد', es: 'Sin definir' },
  'rev.misc.plan.weakest_area': { en: 'Weakest area', ar: 'أضعف منطقة', es: 'Área más débil' },
  'rev.misc.plan.hours_per_week': {
    en: 'Hours per week',
    ar: 'ساعات بالأسبوع',
    es: 'Horas por semana',
  },
  'rev.misc.plan.plan_length': { en: 'Plan length', ar: 'مدّة الخطة', es: 'Duración del plan' },
  'rev.misc.plan.weeks_count': {
    en: '{count} weeks',
    ar: '{count} أسبوع',
    es: '{count} semanas',
  },
  'rev.misc.plan.weeks_count_one': {
    en: '{count} week',
    ar: '{count} أسبوع',
    es: '{count} semana',
  },
  'rev.misc.plan.week_by_week': {
    en: 'Week-by-week tasks',
    ar: 'مهام أسبوع بأسبوع',
    es: 'Tareas semana a semana',
  },
  'rev.misc.plan.week_label': { en: 'Week {n}', ar: 'الأسبوع {n}', es: 'Semana {n}' },
  'rev.misc.plan.tasks_count': {
    en: '{count} tasks',
    ar: '{count} مهمة',
    es: '{count} tareas',
  },
  'rev.misc.plan.tasks_count_one': {
    en: '{count} task',
    ar: '{count} مهمة',
    es: '{count} tarea',
  },
  'rev.misc.plan.stick_title': {
    en: 'Stick with the plan',
    ar: 'التزم بالخطة',
    es: 'Sigue el plan',
  },
  'rev.misc.plan.stick_body': {
    en: 'Your plan is saved on this device. Come back any time and tick off tasks as you complete them. If your situation changes, you can always retake the diagnostic.',
    ar: 'خطتك محفوظة على هالجهاز. ارجع أي وقت وعلّم على المهام أول ما تخلّصها. إذا تغيّر وضعك، تقدر دايماً تعيد التشخيص.',
    es: 'Tu plan está guardado en este dispositivo. Vuelve cuando quieras y marca las tareas a medida que las completes. Si tu situación cambia, siempre puedes repetir el diagnóstico.',
  },
  'rev.misc.plan.diagnostic_badge': {
    en: '{count}-question diagnostic',
    ar: 'تشخيص من {count} أسئلة',
    es: 'Diagnóstico de {count} preguntas',
  },
  'rev.misc.plan.diagnostic_badge_board': {
    en: '{count}-question diagnostic for {board}',
    ar: 'تشخيص من {count} أسئلة لـ {board}',
    es: 'Diagnóstico de {count} preguntas para {board}',
  },
  'rev.misc.plan.intro_title': {
    en: 'Build your personalised study plan',
    ar: 'ابنِ خطة دراستك الشخصية',
    es: 'Crea tu plan de estudio personalizado',
  },
  'rev.misc.plan.intro_body': {
    en: 'Answer {count} quick questions and we will generate a week-by-week revision plan tailored to your exam date, target grade, and weakest area. Your plan is saved on this device so you can come back any time.',
    ar: 'جاوب على {count} أسئلة سريعة وبنطلّع لك خطة مراجعة أسبوع بأسبوع مفصّلة على تاريخ امتحانك ودرجتك المستهدفة وأضعف منطقة عندك. خطتك محفوظة على هالجهاز عشان ترجع أي وقت.',
    es: 'Responde {count} preguntas rápidas y generaremos un plan de repaso semana a semana adaptado a tu fecha de examen, tu nota objetivo y tu área más débil. Tu plan se guarda en este dispositivo para que puedas volver cuando quieras.',
  },
  'rev.misc.plan.intro_body_board': {
    en: 'Answer {count} quick questions and we will generate a week-by-week revision plan tailored to your exam date, target grade, and weakest area -- using {board} texts and links throughout. Your plan is saved on this device so you can come back any time.',
    ar: 'جاوب على {count} أسئلة سريعة وبنطلّع لك خطة مراجعة أسبوع بأسبوع مفصّلة على تاريخ امتحانك ودرجتك المستهدفة وأضعف منطقة عندك — باستخدام نصوص وروابط {board} طوال الخطة. خطتك محفوظة على هالجهاز عشان ترجع أي وقت.',
    es: 'Responde {count} preguntas rápidas y generaremos un plan de repaso semana a semana adaptado a tu fecha de examen, tu nota objetivo y tu área más débil, usando textos y enlaces de {board} en todo momento. Tu plan se guarda en este dispositivo para que puedas volver cuando quieras.',
  },
  'rev.misc.plan.building_badge': {
    en: 'Building your plan',
    ar: 'نبني خطتك',
    es: 'Creando tu plan',
  },
  'rev.misc.plan.building_badge_board': {
    en: 'Building your plan for {board}',
    ar: 'نبني خطتك لـ {board}',
    es: 'Creando tu plan para {board}',
  },
  'rev.misc.plan.few_questions': {
    en: 'A few quick questions',
    ar: 'شوية أسئلة سريعة',
    es: 'Unas preguntas rápidas',
  },
  'rev.misc.plan.building_fallback': {
    en: 'Building your plan...',
    ar: 'نبني خطتك...',
    es: 'Creando tu plan...',
  },
  'rev.misc.plan.step_x_of_y': {
    en: 'Question {n} of {total}',
    ar: 'السؤال {n} من {total}',
    es: 'Pregunta {n} de {total}',
  },
  'rev.misc.plan.select_one_or_more': {
    en: 'Select one or more.',
    ar: 'اختر واحد أو أكثر.',
    es: 'Selecciona uno o más.',
  },
  'rev.misc.plan.n_selected': {
    en: '{count} selected',
    ar: '{count} مختار',
    es: '{count} seleccionados',
  },
  'rev.misc.plan.previous': { en: 'Previous', ar: 'السابق', es: 'Anterior' },
  'rev.misc.plan.continue': { en: 'Continue', ar: 'كمّل', es: 'Continuar' },

  // ─── Exam-technique views (chrome only: nav) ──────────────────────────
  'rev.misc.et.back_exam_technique': {
    en: 'Back to Exam Technique',
    ar: 'ارجع لتقنيات الامتحان',
    es: 'Volver a Técnica de examen',
  },
  'rev.misc.et.time_management': {
    en: 'Time Management',
    ar: 'إدارة الوقت',
    es: 'Gestión del tiempo',
  },
  'rev.misc.et.question_types': {
    en: 'Question Types',
    ar: 'أنواع الأسئلة',
    es: 'Tipos de pregunta',
  },
  'rev.misc.et.essay_structure': {
    en: 'Essay Structure',
    ar: 'بنية المقال',
    es: 'Estructura del ensayo',
  },
}
