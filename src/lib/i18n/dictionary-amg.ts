/**
 * AMG dictionary - Analytics / Marking / Games (Bucket A, Tier-2b).
 *
 * Authored EN + genuine Khaleeji (Gulf register, voice of
 * src/lib/eal/curriculum.ts) for `analytics.*`, `marking.*` and `games.*`
 * keys that were USED in code but only existed in placeholder/junk
 * supplements - so AR-mode visitors saw English or title-cased key
 * fragments instead of real Arabic.
 *
 * For audit-fix-only keys the junk EN (e.g. `Bar Chart Aria`) was
 * discarded and correct English written from the consuming component.
 * For placeholder-fix-may15 keys the real English is copied verbatim;
 * only the (English-in-AR) `ar` side is replaced with Khaleeji.
 *
 * Keys already carrying real Khaleeji in dictionary-screenshot-fixes.ts
 * (analytics.grade.*, analytics.unit.{students,students_total,attempts},
 * analytics.metric.correct) are intentionally NOT redefined here - the
 * screenshot-fixes supplement already renders them correctly.
 *
 * Chained into lookup() in ./dictionary.ts (do NOT edit dictionary.ts).
 */

export const AMG_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ════════════════════════════════════════════════════════════════
  //  ANALYTICS  (src/components/analytics/*, /demo/school,
  //              /dashboard|school/analytics)
  // ════════════════════════════════════════════════════════════════

  // ─── Aggregate stat badges (AggregateStats.tsx) ──────────────────
  // `{t('analytics.badge.avg_quiz_score')}: {avgScore}%`
  'analytics.badge.avg_quiz_score': {
    en: 'Avg quiz score',
    ar: 'متوسط درجة الاختبار القصير',
    es: 'Puntuación media del cuestionario',
  },
  // `{n} {t('analytics.badge.students_on_platform')}`
  'analytics.badge.students_on_platform': {
    en: 'students on the platform',
    ar: 'طالب على المنصة',
    es: 'estudiantes en la plataforma',
  },
  // `{n} {t('analytics.badge.students_studied_text')}` - studied this text
  'analytics.badge.students_studied_text': {
    en: 'students studied this text',
    ar: 'طالب درسوا هذا النص',
    es: 'estudiantes estudiaron este texto',
  },

  // ─── Cohort retention heatmap (CohortHeatmap.tsx) ────────────────
  'analytics.cohort.month': { en: 'Month', ar: 'الشهر', es: 'Mes' },
  'analytics.cohort.no_data_yet': {
    en: 'No data yet',
    ar: 'ما في بيانات لين الحين',
    es: 'Aún no hay datos',
  },
  // `… {v}% {t('analytics.cohort.of_initial_mrr_retained')} (bucket)`
  'analytics.cohort.of_initial_mrr_retained': {
    en: 'of initial MRR retained',
    ar: 'من الإيراد الشهري الأولي محتفظ فيه',
    es: 'del MRR inicial retenido',
  },

  // ─── Avg-scores-by-board table columns (AggregateStats.tsx) ──────
  'analytics.col.avg_assessment': {
    en: 'Avg assessment',
    ar: 'متوسط التقييم',
    es: 'Evaluación media',
  },
  'analytics.col.avg_quiz': {
    en: 'Avg quiz',
    ar: 'متوسط الاختبار القصير',
    es: 'Cuestionario medio',
  },
  'analytics.col.board': { en: 'Board', ar: 'مجلس الامتحانات', es: 'Junta' },
  'analytics.col.completion': { en: 'Completion', ar: 'نسبة الإنجاز', es: 'Finalización' },
  'analytics.col.students': { en: 'Students', ar: 'الطلاب', es: 'Estudiantes' },

  // ─── Question-difficulty labels (AggregateStats.tsx) ─────────────
  'analytics.difficulty.easy': { en: 'Easy', ar: 'سهل', es: 'Fácil' },
  'analytics.difficulty.hard': { en: 'Hard', ar: 'صعب', es: 'Difícil' },
  'analytics.difficulty.medium': { en: 'Medium', ar: 'متوسط', es: 'Media' },
  'analytics.difficulty.very_hard': { en: 'Very hard', ar: 'وايد صعب', es: 'Muy difícil' },

  // ─── Grade-distribution chart (GradeDistributionChart.tsx) ───────
  // aria-label on the bar chart wrapper
  'analytics.grade.bar_chart_aria': {
    en: 'Grade distribution bar chart',
    ar: 'رسم بياني بالأعمدة لتوزيع الدرجات',
    es: 'Gráfico de barras de la distribución de notas',
  },
  // aria-label prefix: "<prefix>: {top} students 7-9, …"
  'analytics.grade.distribution_aria_prefix': {
    en: 'Grade distribution',
    ar: 'توزيع الدرجات',
    es: 'Distribución de notas',
  },
  // aria-label on the legend list
  'analytics.grade.legend_aria': {
    en: 'Grade band legend',
    ar: 'مفتاح نطاقات الدرجات',
    es: 'Leyenda de bandas de notas',
  },
  'analytics.grade.no_data_yet': {
    en: 'No grade data yet',
    ar: 'ما في بيانات درجات لين الحين',
    es: 'Aún no hay datos de notas',
  },
  // resolved chart title fallback (GradeDistributionChart.tsx:127)
  'analytics.grade.working_at_distribution': {
    en: 'Working-at grade distribution',
    ar: 'توزيع الدرجات الحالية',
    es: 'Distribución de la nota de trabajo actual',
  },

  // ─── MRR waterfall movements (MRRWaterfallChart.tsx) ─────────────
  'analytics.mrr.churn': { en: 'Churn', ar: 'الإلغاء', es: 'Bajas' },
  'analytics.mrr.contraction': { en: 'Contraction', ar: 'الانكماش', es: 'Contracción' },
  'analytics.mrr.downgrade': { en: 'Downgrade', ar: 'تنزيل الباقة', es: 'Reducción de plan' },
  'analytics.mrr.ending': { en: 'Ending', ar: 'الرصيد الختامي', es: 'Saldo final' },
  'analytics.mrr.expansion': { en: 'Expansion', ar: 'التوسّع', es: 'Expansión' },
  'analytics.mrr.new': { en: 'New', ar: 'جديد', es: 'Nuevo' },
  'analytics.mrr.reactivation': { en: 'Reactivation', ar: 'إعادة التفعيل', es: 'Reactivación' },
  'analytics.mrr.starting': { en: 'Starting', ar: 'الرصيد الافتتاحي', es: 'Saldo inicial' },
  'analytics.mrr.upgrade': { en: 'Upgrade', ar: 'ترقية الباقة', es: 'Mejora de plan' },

  // ─── NRR headline panel (NRRHeadline.tsx) ────────────────────────
  'analytics.nrr.description': {
    en: 'Net revenue retained from existing customers, including expansion and churn.',
    ar: 'صافي الإيراد المحتفظ فيه من العملاء الحاليين، شامل التوسّع والإلغاء.',
    es: 'Ingresos netos retenidos de los clientes existentes, incluyendo expansión y bajas.',
  },
  'analytics.nrr.gross_retention': {
    en: 'Gross retention',
    ar: 'الاحتفاظ الإجمالي',
    es: 'Retención bruta',
  },
  'analytics.nrr.headline_title': {
    en: 'Net revenue retention',
    ar: 'صافي الاحتفاظ بالإيراد',
    es: 'Retención neta de ingresos',
  },
  'analytics.nrr.investor_target': {
    en: 'Investor target',
    ar: 'هدف المستثمرين',
    es: 'Objetivo para inversores',
  },
  'analytics.nrr.previous_month': {
    en: 'Previous month',
    ar: 'الشهر اللي راح',
    es: 'Mes anterior',
  },
  // "{momChange} {t('analytics.nrr.pts_mom')}" - points month-on-month
  'analytics.nrr.pts_mom': { en: 'pts MoM', ar: 'نقطة عن الشهر اللي راح', es: 'pts intermensual' },
  'analytics.nrr.trailing_12mo': { en: 'Trailing 12 mo', ar: 'آخر 12 شهر', es: 'Últimos 12 meses' },

  // ─── Skill radar (SkillRadar.tsx) ────────────────────────────────
  // "{t('analytics.skill.based_on')} {n} {responses}"
  'analytics.skill.based_on': { en: 'Based on', ar: 'مبني على', es: 'Basado en' },
  'analytics.skill.no_data_yet_hint': {
    en: 'No responses yet - keep practising to build this profile.',
    ar: 'ما في إجابات لين الحين - واصل التمرين عشان يتكوّن الملف.',
    es: 'Aún no hay respuestas: sigue practicando para construir este perfil.',
  },

  // ─── Summary stat cards (AggregateStats.tsx) ─────────────────────
  'analytics.summary.quiz_attempts': {
    en: 'Quiz attempts',
    ar: 'محاولات الاختبارات القصيرة',
    es: 'Intentos de cuestionario',
  },
  'analytics.summary.texts_studied': {
    en: 'Texts studied',
    ar: 'النصوص اللي اندرست',
    es: 'Textos estudiados',
  },
  'analytics.summary.total_students': {
    en: 'Total students',
    ar: 'إجمالي الطلاب',
    es: 'Total de estudiantes',
  },

  // ─── Units (WeeklyActivityChart.tsx, SkillRadar.tsx) ─────────────
  // "({totalMinutes}{t('analytics.unit.minute_short')})"
  'analytics.unit.minute_short': { en: 'm', ar: 'د', es: 'm' },
  // "{n} {t('analytics.unit.responses')}"
  'analytics.unit.responses': { en: 'responses', ar: 'إجابة', es: 'respuestas' },

  // ─── Weekly activity chart (WeeklyActivityChart.tsx) ─────────────
  'analytics.weekly.questions': { en: 'Questions', ar: 'الأسئلة', es: 'Preguntas' },
  'analytics.weekly.study_time': { en: 'Study time', ar: 'وقت الدراسة', es: 'Tiempo de estudio' },

  // ─── Widget headings (AggregateStats.tsx) ────────────────────────
  'analytics.widget.avg_scores_by_board': {
    en: 'Avg scores by board',
    ar: 'متوسط الدرجات حسب مجلس الامتحانات',
    es: 'Puntuaciones medias por junta',
  },
  'analytics.widget.grade_distribution': {
    en: 'Grade distribution',
    ar: 'توزيع الدرجات',
    es: 'Distribución de notas',
  },
  'analytics.widget.hardest_questions': {
    en: 'Hardest questions',
    ar: 'أصعب الأسئلة',
    es: 'Preguntas más difíciles',
  },
  'analytics.widget.most_popular_this_week': {
    en: 'Most popular this week',
    ar: 'الأكثر إقبالاً هذا الأسبوع',
    es: 'Lo más popular esta semana',
  },
  'analytics.widget.most_studied_texts': {
    en: 'Most studied texts',
    ar: 'النصوص الأكثر دراسة',
    es: 'Textos más estudiados',
  },

  // ─── Demo-school grade bands (copied verbatim EN ← may15) ─────────
  'analytics.grade_band.top': {
    en: 'Top grades (7-9)',
    ar: 'أعلى الدرجات (7-9)',
    es: 'Notas altas (7-9)',
  },
  'analytics.grade_band.pass': {
    en: 'Pass grades (4-6)',
    ar: 'درجات النجاح (4-6)',
    es: 'Notas de aprobado (4-6)',
  },
  'analytics.grade_band.below': {
    en: 'Below pass (1-3)',
    ar: 'تحت النجاح (1-3)',
    es: 'Por debajo del aprobado (1-3)',
  },

  // ════════════════════════════════════════════════════════════════
  //  MARKING  (/marking, /mock-exams, /practice, AITextArea.tsx)
  // ════════════════════════════════════════════════════════════════

  // ─── Marking hub header + CTAs (src/app/marking/page.tsx) ────────
  'marking.h1': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقالات بالذكاء الاصطناعي',
    es: 'Corrección de redacciones con IA',
  },
  'marking.lead': {
    en: 'Submit an exam-style answer and get instant, board-aligned feedback with a grade indication.',
    ar: 'سلّم إجابة على نمط الامتحان وخذ ملاحظات فورية على معايير المجلس مع مؤشّر للدرجة.',
    es: 'Envía una respuesta con formato de examen y obtén retroalimentación instantánea alineada con la junta, junto con una indicación de nota.',
  },
  'marking.cta.new': {
    en: 'Mark New Essay',
    ar: 'صحّح مقالة جديدة',
    es: 'Corregir nueva redacción',
  },
  'marking.cta.history': { en: 'View History', ar: 'شوف السجل', es: 'Ver historial' },

  // ─── Recent essays section ───────────────────────────────────────
  'marking.recent.h2': { en: 'Recent Essays', ar: 'آخر المقالات', es: 'Redacciones recientes' },
  'marking.recent.empty': {
    en: 'No marked essays yet.',
    ar: 'ما في مقالات مصحّحة لين الحين.',
    es: 'Aún no hay redacciones corregidas.',
  },
  'marking.recent.empty_cta': {
    en: 'Mark Your First Essay',
    ar: 'صحّح أول مقالة لك',
    es: 'Corrige tu primera redacción',
  },
  // "{wordCount} {t('marking.history.words')}"
  'marking.history.words': { en: 'words', ar: 'كلمة', es: 'palabras' },

  // ─── Start-new + samples cards ───────────────────────────────────
  'marking.start_new.title': {
    en: 'Start a New Essay',
    ar: 'ابدأ مقالة جديدة',
    es: 'Empezar una nueva redacción',
  },
  'marking.start_new.desc': {
    en: 'Pick a paper, write your answer, and get marked against the board criteria.',
    ar: 'اختر الورقة، اكتب إجابتك، وخذ تصحيح على معايير المجلس.',
    es: 'Elige una prueba, escribe tu respuesta y obtén la corrección según los criterios de la junta.',
  },
  'marking.start_new.cta': { en: 'Start Marking', ar: 'ابدأ التصحيح', es: 'Empezar corrección' },
  'marking.samples.title': {
    en: 'Sample Marked Essays',
    ar: 'نماذج مقالات مصحّحة',
    es: 'Redacciones corregidas de muestra',
  },
  'marking.samples.desc': {
    en: 'See how the marker breaks down a real answer before you submit your own.',
    ar: 'شوف كيف المصحّح يحلّل إجابة حقيقية قبل لا تسلّم إجابتك.',
    es: 'Mira cómo el corrector desglosa una respuesta real antes de enviar la tuya.',
  },
  'marking.samples.cta': { en: 'View Samples', ar: 'شوف النماذج', es: 'Ver muestras' },

  // ─── Mark-scheme library ─────────────────────────────────────────
  'marking.library.h2': {
    en: 'Mark Scheme Library',
    ar: 'مكتبة سلالم العلامات',
    es: 'Biblioteca de baremos',
  },
  'marking.library.coming_soon': { en: 'Coming soon', ar: 'قريباً', es: 'Próximamente' },

  // ─── Mark-scheme picker (copied verbatim EN ← may15) ─────────────
  'marking.scheme.lit_p1': {
    en: 'Literature Paper 1',
    ar: 'الأدب - الورقة 1',
    es: 'Literatura - Prueba 1',
  },
  'marking.scheme.lit_p2': {
    en: 'Literature Paper 2',
    ar: 'الأدب - الورقة 2',
    es: 'Literatura - Prueba 2',
  },
  'marking.scheme.lang_p1': {
    en: 'Language Paper 1',
    ar: 'اللغة - الورقة 1',
    es: 'Lengua - Prueba 1',
  },
  'marking.scheme.lang_p2': {
    en: 'Language Paper 2',
    ar: 'اللغة - الورقة 2',
    es: 'Lengua - Prueba 2',
  },

  // ════════════════════════════════════════════════════════════════
  //  GAMES  (src/components/games/GameCard.tsx, GameShell.tsx)
  // ════════════════════════════════════════════════════════════════

  // ─── GameCard relative-time + meta (GameCard.tsx) ────────────────
  // Suffixes are appended to a number, e.g. `${minutes}${suffix}`
  'games.card.just_now': { en: 'just now', ar: 'الحين', es: 'ahora mismo' },
  'games.card.minutes_ago_suffix': { en: 'm ago', ar: ' د', es: 'min' },
  'games.card.hours_ago_suffix': { en: 'h ago', ar: ' س', es: 'h' },
  'games.card.days_ago_suffix': { en: 'd ago', ar: ' يوم', es: 'd' },
  'games.card.weeks_ago_suffix': { en: 'w ago', ar: ' أسبوع', es: 'sem' },
  // "{t('games.card.grade_label')} {bestGrade}"
  'games.card.grade_label': { en: 'Grade', ar: 'الدرجة', es: 'Nota' },
  'games.card.play_cta': { en: 'Play', ar: 'العب', es: 'Jugar' },

  // ─── GameShell header / results / controls (GameShell.tsx) ───────
  'games.shell.grade_label': { en: 'Grade', ar: 'الدرجة', es: 'Nota' },
  'games.shell.score_label': { en: 'Score', ar: 'النتيجة', es: 'Puntuación' },
  'games.shell.accuracy_label': { en: 'Accuracy', ar: 'الدقة', es: 'Precisión' },
  'games.shell.time_label': { en: 'Time', ar: 'الوقت', es: 'Tiempo' },
  'games.shell.best_label': { en: 'Best', ar: 'الأفضل', es: 'Mejor' },
  // "{t('games.shell.best_prefix')} Grade {grade} ({pct}%)"
  'games.shell.best_prefix': { en: 'Best:', ar: 'أفضل نتيجة:', es: 'Mejor:' },
  'games.shell.press_start_prompt': {
    en: 'Press start when you are ready.',
    ar: 'اضغط ابدأ لمّا تكون جاهز.',
    es: 'Pulsa empezar cuando estés listo.',
  },
  'games.shell.start_game': { en: 'Start Game', ar: 'ابدأ اللعبة', es: 'Empezar juego' },
  'games.shell.play_again': { en: 'Play Again', ar: 'العب مرة ثانية', es: 'Jugar de nuevo' },
  'games.shell.game_paused': { en: 'Game paused', ar: 'اللعبة موقّفة', es: 'Juego en pausa' },
  'games.shell.pause': { en: 'Pause', ar: 'وقّف', es: 'Pausar' },
  'games.shell.resume': { en: 'Resume', ar: 'كمّل', es: 'Reanudar' },
  'games.shell.restart': { en: 'Restart', ar: 'من جديد', es: 'Reiniciar' },
  'games.shell.finish': { en: 'Finish', ar: 'خلّص', es: 'Terminar' },

  // ─── Difficulty badges - resolved via DIFFICULTY_KEY_MAP[level]
  //     in GameCard.tsx & GameShell.tsx (copied verbatim EN ← may15)
  'games.difficulty.foundation': { en: 'Foundation', ar: 'تأسيسي', es: 'Básico' },
  'games.difficulty.crossover': { en: 'Crossover', ar: 'انتقالي', es: 'Intermedio' },
  'games.difficulty.higher': { en: 'Higher', ar: 'متقدّم', es: 'Superior' },
}
