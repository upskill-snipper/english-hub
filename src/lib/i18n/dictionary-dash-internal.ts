/**
 * Dashboard-internal i18n entries (dashboard.classes.*, dashboard.grades.*,
 * dashboard.mock.*, dashboard.review.*, dashboard.tr.*).
 *
 * Covers the deep stat labels, table headers, tooltips, and form chrome
 * for the authenticated dashboard surface that previously had only the
 * top-of-page H1 wired. Kept separate from the master dictionary.ts to
 * avoid merge churn on a 13k-line file that lints/formatters keep touching.
 *
 * Khaleeji conventions (mirrored from dictionary.ts):
 *   أبغى, شوف, دوّر, الحين, ببلاش, لحظة, إحنا, سكّر, روح
 * BANNED (Levantine): شو, بحكي, كيفك, ليش
 *
 * Latin retention: brand names, exam codes (GCSE, IGCSE, AQA, OCR,
 * Edexcel, AO1-AO6, CAIE, WJEC, Eduqas, IAL, KS3, MCQ, PDF, AI) stay
 * in Latin script inside Arabic text per Gulf convention.
 *
 * GENDER POLICY: binary M/F. Male-second-person addressed by default
 * (matches the rest of the dictionary).
 */

import type { Dictionary } from './dictionary'

export const DASH_INTERNAL_DICTIONARY: Dictionary = {
  // ─── Dashboard / Classes (teacher) ─────────────────────────────────
  'dashboard.classes.h1': { en: 'My Classes', ar: 'صفوفي', es: 'Mis clases' },
  'dashboard.classes.intro': {
    en: 'Manage your classes and track student progress',
    ar: 'أدر صفوفك وتابع تقدّم طلابك',
    es: 'Gestiona tus clases y sigue el progreso de los estudiantes',
  },
  'dashboard.classes.back': {
    en: '← Back to Dashboard',
    ar: '← رجوع للوحة',
    es: '← Volver al panel',
  },
  'dashboard.classes.create': { en: '+ Create Class', ar: '+ سوِّ صف جديد', es: '+ Crear clase' },
  'dashboard.classes.your_classes': { en: 'Your Classes', ar: 'صفوفك', es: 'Tus clases' },
  'dashboard.classes.students_count': { en: 'students', ar: 'طلاب', es: 'estudiantes' },
  'dashboard.classes.year_label': { en: 'Year', ar: 'سنة', es: 'Año' },
  'dashboard.classes.avg': { en: 'Avg', ar: 'معدل', es: 'Media' },
  'dashboard.classes.edit': { en: 'Edit Class', ar: 'عدّل الصف', es: 'Editar clase' },
  'dashboard.classes.add_student': {
    en: '+ Add Student',
    ar: '+ ضِف طالب',
    es: '+ Añadir estudiante',
  },
  'dashboard.classes.stat.students': { en: 'Students', ar: 'الطلاب', es: 'Estudiantes' },
  'dashboard.classes.stat.class_avg': {
    en: 'Class Average',
    ar: 'معدّل الصف',
    es: 'Media de la clase',
  },
  'dashboard.classes.stat.total_essays': {
    en: 'Total Essays',
    ar: 'مجموع المقالات',
    es: 'Total de ensayos',
  },
  'dashboard.classes.search': {
    en: 'Search students...',
    ar: 'دوّر على طالب...',
    es: 'Buscar estudiantes...',
  },
  'dashboard.classes.col.student': { en: 'Student', ar: 'الطالب', es: 'Estudiante' },
  'dashboard.classes.col.avg_score': {
    en: 'Avg Score',
    ar: 'معدّل الدرجة',
    es: 'Puntuación media',
  },
  'dashboard.classes.col.essays': { en: 'Essays', ar: 'مقالات', es: 'Ensayos' },
  'dashboard.classes.col.grade': { en: 'Grade', ar: 'الدرجة', es: 'Nota' },
  'dashboard.classes.col.last_active': {
    en: 'Last Active',
    ar: 'آخر نشاط',
    es: 'Última actividad',
  },
  'dashboard.classes.empty.title': {
    en: 'Select a Class',
    ar: 'اختر صف',
    es: 'Selecciona una clase',
  },
  'dashboard.classes.empty.body': {
    en: 'Choose a class from the sidebar to view student progress and manage your group.',
    ar: 'اختر صف من القائمة الجانبية عشان تشوف تقدّم الطلاب وتدير مجموعتك.',
    es: 'Elige una clase en la barra lateral para ver el progreso de los estudiantes y gestionar tu grupo.',
  },
  'dashboard.classes.modal.title': {
    en: 'Create New Class',
    ar: 'سوِّ صف جديد',
    es: 'Crear nueva clase',
  },
  'dashboard.classes.modal.name': { en: 'Class Name', ar: 'اسم الصف', es: 'Nombre de la clase' },
  'dashboard.classes.modal.name_ph': {
    en: 'e.g. 10A English Literature',
    ar: 'مثلاً: 10A English Literature',
    es: 'p. ej.: 10A English Literature',
  },
  'dashboard.classes.modal.subject': { en: 'Subject', ar: 'المادة', es: 'Asignatura' },
  'dashboard.classes.modal.board': {
    en: 'Exam Board',
    ar: 'بورد الامتحان',
    es: 'Junta examinadora',
  },
  'dashboard.classes.modal.year': { en: 'Year Group', ar: 'السنة الدراسية', es: 'Curso' },
  'dashboard.classes.modal.cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'dashboard.classes.modal.create': { en: 'Create Class', ar: 'سوِّ الصف', es: 'Crear clase' },

  // ─── Dashboard / Grades ────────────────────────────────────────────
  'dashboard.grades.h1': { en: 'Grade Dashboard', ar: 'لوحة الدرجات', es: 'Panel de notas' },
  'dashboard.grades.intro_a': {
    en: 'Your predicted grades based on',
    ar: 'درجاتك المتوقعة بناءً على',
    es: 'Tus notas previstas basadas en',
  },
  'dashboard.grades.assess_s': { en: 'assessment', ar: 'تقييم', es: 'evaluación' },
  'dashboard.grades.assess_p': { en: 'assessments', ar: 'تقييمات', es: 'evaluaciones' },
  'dashboard.grades.and': { en: 'and', ar: 'و', es: 'y' },
  'dashboard.grades.pract_s': {
    en: 'practice session',
    ar: 'جلسة تدريب',
    es: 'sesión de práctica',
  },
  'dashboard.grades.pract_p': {
    en: 'practice sessions',
    ar: 'جلسات تدريب',
    es: 'sesiones de práctica',
  },
  'dashboard.grades.back': { en: 'Back to dashboard', ar: 'رجوع للوحة', es: 'Volver al panel' },
  'dashboard.grades.locked.h1': {
    en: 'Grade Dashboard Locked',
    ar: 'لوحة الدرجات مقفلة',
    es: 'Panel de notas bloqueado',
  },
  'dashboard.grades.locked.body': {
    en: 'Complete at least 5 practice tests or assessments to unlock your Grade Dashboard.',
    ar: 'خلّص ٥ تدريبات أو تقييمات على الأقل عشان تفتح لوحة الدرجات.',
    es: 'Completa al menos 5 pruebas de práctica o evaluaciones para desbloquear tu panel de notas.',
  },
  'dashboard.grades.locked.progress': { en: 'Progress', ar: 'التقدم', es: 'Progreso' },
  'dashboard.grades.locked.practice': {
    en: 'Practice Questions',
    ar: 'أسئلة تدريب',
    es: 'Preguntas de práctica',
  },
  'dashboard.grades.locked.browse': {
    en: 'Browse Courses',
    ar: 'شوف الكورسات',
    es: 'Explorar cursos',
  },
  'dashboard.grades.err.fallback': {
    en: 'Something went wrong loading your grades. Please try again.',
    ar: 'صار خطأ وإحنا نجيب درجاتك. حاول مرة ثانية.',
    es: 'Algo salió mal al cargar tus notas. Inténtalo de nuevo.',
  },
  'dashboard.grades.retry': { en: 'Retry', ar: 'حاول مرة ثانية', es: 'Reintentar' },
  'dashboard.grades.overview': {
    en: 'Grade Overview',
    ar: 'نظرة عامة على الدرجة',
    es: 'Resumen de notas',
  },
  'dashboard.grades.working_at': { en: 'working at', ar: 'تشتغل على', es: 'trabajando en' },
  'dashboard.grades.predicted': {
    en: 'Predicted Grade',
    ar: 'الدرجة المتوقعة',
    es: 'Nota prevista',
  },
  'dashboard.grades.target': { en: 'Target Grade', ar: 'الدرجة المستهدفة', es: 'Nota objetivo' },
  'dashboard.grades.potential': {
    en: 'Potential Grade',
    ar: 'الدرجة الممكنة',
    es: 'Nota potencial',
  },
  'dashboard.grades.based_on': { en: 'Based on', ar: 'بناءً على', es: 'Basado en' },
  'dashboard.grades.label.excellent': { en: 'Excellent', ar: 'ممتاز', es: 'Excelente' },
  'dashboard.grades.label.good': { en: 'Good', ar: 'زين', es: 'Bien' },
  'dashboard.grades.label.needs_work': {
    en: 'Needs Work',
    ar: 'يبي شغل أكثر',
    es: 'Necesita mejorar',
  },
  'dashboard.grades.progress_time': {
    en: 'Progress Over Time',
    ar: 'التقدم مع الوقت',
    es: 'Progreso a lo largo del tiempo',
  },
  'dashboard.grades.no_data': {
    en: 'No assessment data yet.',
    ar: 'ما عندك تقييمات بعد.',
    es: 'Aún no hay datos de evaluación.',
  },
  'dashboard.grades.sw': {
    en: 'Strengths & Weaknesses',
    ar: 'نقاط القوة والضعف',
    es: 'Fortalezas y debilidades',
  },
  'dashboard.grades.sw.empty': {
    en: 'Complete assessments in different courses to see your strengths and weaknesses.',
    ar: 'خلّص تقييمات في كورسات مختلفة عشان تشوف نقاط قوتك وضعفك.',
    es: 'Completa evaluaciones en distintos cursos para ver tus fortalezas y debilidades.',
  },
  'dashboard.grades.sw.top_strengths': {
    en: 'Top Strengths',
    ar: 'أقوى نقاطك',
    es: 'Principales fortalezas',
  },
  'dashboard.grades.sw.improvement': {
    en: 'Areas for Improvement',
    ar: 'الأشياء اللي تبي تحسّنها',
    es: 'Áreas de mejora',
  },
  'dashboard.grades.sw.no_data': {
    en: 'No data yet.',
    ar: 'ما في بيانات بعد.',
    es: 'Aún no hay datos.',
  },
  'dashboard.grades.trajectory': {
    en: 'Grade Trajectory',
    ar: 'مسار درجاتك',
    es: 'Trayectoria de notas',
  },
  'dashboard.grades.trajectory.need_three': {
    en: 'Complete at least three assessments to see your trajectory.',
    ar: 'خلّص ثلاث تقييمات على الأقل عشان تشوف المسار.',
    es: 'Completa al menos tres evaluaciones para ver tu trayectoria.',
  },
  'dashboard.grades.trajectory.improving': {
    en: 'Your scores are improving!',
    ar: 'درجاتك بتحسّن!',
    es: '¡Tus puntuaciones están mejorando!',
  },
  'dashboard.grades.trajectory.declining': {
    en: 'Your scores are declining.',
    ar: 'درجاتك بتنزل.',
    es: 'Tus puntuaciones están bajando.',
  },
  'dashboard.grades.trajectory.stable': {
    en: 'Your scores are stable.',
    ar: 'درجاتك ثابتة.',
    es: 'Tus puntuaciones se mantienen estables.',
  },
  'dashboard.grades.trajectory.change_suffix': {
    en: 'change from your first three to last three assessments.',
    ar: 'تغيّر من أول ثلاث تقييمات لآخر ثلاث.',
    es: 'de cambio entre tus tres primeras y tus tres últimas evaluaciones.',
  },
  'dashboard.grades.recs': {
    en: 'Recommended Next Steps',
    ar: 'الخطوات التالية المقترحة',
    es: 'Próximos pasos recomendados',
  },
  'dashboard.grades.recs.empty': {
    en: 'Keep practising to receive personalised recommendations!',
    ar: 'كمّل تدريب عشان تحصّل اقتراحات تخصّك!',
    es: '¡Sigue practicando para recibir recomendaciones personalizadas!',
  },
  'dashboard.grades.recs.start': {
    en: 'Start This Course',
    ar: 'ابدأ هذا الكورس',
    es: 'Empezar este curso',
  },
  'dashboard.grades.tip.below50': {
    en: 'We recommend focusing on foundation courses to build a strong base before moving to GCSE-level content.',
    ar: 'ننصحك تركّز على الكورسات الأساسية عشان تبني قاعدة قوية قبل ما تنتقل لمستوى GCSE.',
    es: 'Te recomendamos centrarte en los cursos de base para construir unos cimientos sólidos antes de pasar a contenido de nivel GCSE.',
  },
  'dashboard.grades.tip.mid': {
    en: 'Great progress! Focus on your weaker areas to push your predicted grade higher.',
    ar: 'تقدّم زين! ركّز على نقاط الضعف عشان ترفع درجتك المتوقعة.',
    es: '¡Buen progreso! Céntrate en tus áreas más débiles para subir tu nota prevista.',
  },
  'dashboard.grades.tip.high': {
    en: 'Excellent work! Try extension and challenge content to aim for top grades.',
    ar: 'شغل ممتاز! جرّب محتوى صعب وامتد عشان توصل لأعلى الدرجات.',
    es: '¡Excelente trabajo! Prueba contenido de ampliación y de mayor dificultad para aspirar a las notas más altas.',
  },

  // ─── Dashboard / Mock Exam ─────────────────────────────────────────
  'dashboard.mock.h1': {
    en: 'Mock Exam Mode',
    ar: 'وضع الامتحان التجريبي',
    es: 'Modo de examen de prueba',
  },
  'dashboard.mock.intro': {
    en: 'Simulate real exam conditions with timed papers',
    ar: 'جرّب ظروف الامتحان الحقيقية بأوراق مؤقّتة',
    es: 'Simula condiciones reales de examen con exámenes cronometrados',
  },
  'dashboard.mock.loading': { en: 'Loading...', ar: 'لحظة...', es: 'Cargando...' },
  'dashboard.mock.step1': {
    en: '1. Select Exam Board',
    ar: '١. اختر بورد الامتحان',
    es: '1. Selecciona la junta examinadora',
  },
  'dashboard.mock.paper_avail_s': {
    en: 'paper available',
    ar: 'ورقة متاحة',
    es: 'examen disponible',
  },
  'dashboard.mock.paper_avail_p': {
    en: 'papers available',
    ar: 'ورقة متاحة',
    es: 'exámenes disponibles',
  },
  'dashboard.mock.step2': {
    en: '2. Select Paper',
    ar: '٢. اختر الورقة',
    es: '2. Selecciona el examen',
  },
  'dashboard.mock.paper_label': { en: 'Paper', ar: 'ورقة', es: 'Examen' },
  'dashboard.mock.marks': { en: 'marks', ar: 'علامة', es: 'puntos' },
  'dashboard.mock.total': { en: 'Total', ar: 'المجموع', es: 'Total' },
  'dashboard.mock.step3': {
    en: '3. Ready to Begin',
    ar: '٣. جاهز تبدأ',
    es: '3. Listo para empezar',
  },
  'dashboard.mock.time_allowed': {
    en: 'Time allowed',
    ar: 'الوقت المسموح',
    es: 'Tiempo permitido',
  },
  'dashboard.mock.section_s': { en: 'section', ar: 'قسم', es: 'sección' },
  'dashboard.mock.section_p': { en: 'sections', ar: 'أقسام', es: 'secciones' },
  'dashboard.mock.questions_total': {
    en: 'questions total',
    ar: 'سؤال إجمالاً',
    es: 'preguntas en total',
  },
  'dashboard.mock.total_avail': { en: 'Total available', ar: 'المتاح كله', es: 'Total disponible' },
  'dashboard.mock.conditions_title': {
    en: 'Exam conditions:',
    ar: 'ظروف الامتحان:',
    es: 'Condiciones del examen:',
  },
  'dashboard.mock.conditions_body': {
    en: 'Once you start, a countdown timer will begin. The timer will warn you at 5 minutes and 1 minute remaining. You can pause for accessibility, but try to complete the exam in one sitting for the most realistic experience.',
    ar: 'أول ما تبدأ، يشتغل عدّاد. بينبهك عند بقاء ٥ دقائق ودقيقة وحدة. تقدر توقّف العدّاد لو محتاج، بس حاول تخلّص الامتحان بجلسة وحدة عشان التجربة أقرب للحقيقة.',
    es: 'En cuanto empieces, comenzará una cuenta atrás. El temporizador te avisará cuando queden 5 minutos y 1 minuto. Puedes pausarlo por accesibilidad, pero intenta completar el examen de una sola vez para una experiencia lo más realista posible.',
  },
  'dashboard.mock.back_dash': { en: 'Back to Dashboard', ar: 'رجوع للوحة', es: 'Volver al panel' },
  'dashboard.mock.start': {
    en: 'Start Mock Exam',
    ar: 'ابدأ الامتحان التجريبي',
    es: 'Empezar examen de prueba',
  },
  'dashboard.mock.prev_attempts': {
    en: 'Previous Attempts',
    ar: 'محاولاتك السابقة',
    es: 'Intentos anteriores',
  },
  'dashboard.mock.min_used': { en: 'min used', ar: 'دقيقة استعملت', es: 'min usados' },
  'dashboard.mock.q_ans_s': {
    en: 'question answered',
    ar: 'سؤال انجاوب',
    es: 'pregunta respondida',
  },
  'dashboard.mock.q_ans_p': {
    en: 'questions answered',
    ar: 'سؤال انجاوب',
    es: 'preguntas respondidas',
  },
  'dashboard.mock.section_word': { en: 'Section', ar: 'قسم', es: 'Sección' },
  'dashboard.mock.of': { en: 'of', ar: 'من', es: 'de' },
  'dashboard.mock.answered': { en: 'answered', ar: 'انجاوب', es: 'respondidas' },
  'dashboard.mock.resume_timer': {
    en: 'Resume timer',
    ar: 'كمّل العدّاد',
    es: 'Reanudar temporizador',
  },
  'dashboard.mock.pause_timer': {
    en: 'Pause timer',
    ar: 'وقّف العدّاد',
    es: 'Pausar temporizador',
  },
  'dashboard.mock.warn_5min': {
    en: '5 minutes remaining! Consider finishing your current answer.',
    ar: 'باقي ٥ دقائق! حاول تخلّص إجابتك الحالية.',
    es: '¡Quedan 5 minutos! Considera terminar tu respuesta actual.',
  },
  'dashboard.mock.warn_1min': {
    en: '1 minute remaining! Your exam will be submitted automatically.',
    ar: 'باقي دقيقة وحدة! بيتسلّم امتحانك تلقائياً.',
    es: '¡Queda 1 minuto! Tu examen se enviará automáticamente.',
  },
  'dashboard.mock.warn_paused': {
    en: 'Timer paused. Click resume to continue.',
    ar: 'العدّاد موقَّف. اضغط كمّل عشان تتابع.',
    es: 'Temporizador en pausa. Haz clic en reanudar para continuar.',
  },
  'dashboard.mock.tab_prefix': {
    en: 'You have left this tab',
    ar: 'طلعت من الصفحة',
    es: 'Has salido de esta pestaña',
  },
  'dashboard.mock.tab_suffix_s': {
    en: 'time. In a real exam, this would be flagged.',
    ar: 'مرة. في امتحان حقيقي، هذا بيتسجّل.',
    es: 'vez. En un examen real, esto quedaría señalado.',
  },
  'dashboard.mock.tab_suffix_p': {
    en: 'times. In a real exam, this would be flagged.',
    ar: 'مرات. في امتحان حقيقي، هذا بيتسجّل.',
    es: 'veces. En un examen real, esto quedaría señalado.',
  },
  'dashboard.mock.sections_title': { en: 'Sections', ar: 'الأقسام', es: 'Secciones' },
  'dashboard.mock.submit': { en: 'Submit Exam', ar: 'سلّم الامتحان', es: 'Enviar examen' },
  'dashboard.mock.source_text': { en: 'Source Text', ar: 'النص الأصلي', es: 'Texto original' },
  'dashboard.mock.mark_s': { en: 'mark', ar: 'علامة', es: 'punto' },
  'dashboard.mock.mark_p': { en: 'marks', ar: 'علامة', es: 'puntos' },
  'dashboard.mock.q_ph_mcq': {
    en: 'Type your selected answers (e.g., A, C, F, H)...',
    ar: 'اكتب إجاباتك المختارة (مثلاً: A, C, F, H)...',
    es: 'Escribe tus respuestas seleccionadas (p. ej.: A, C, F, H)...',
  },
  'dashboard.mock.q_ph_short': {
    en: 'Write your answer here...',
    ar: 'اكتب إجابتك هنا...',
    es: 'Escribe tu respuesta aquí...',
  },
  'dashboard.mock.q_ph_long': {
    en: 'Write your response here...',
    ar: 'اكتب ردك هنا...',
    es: 'Escribe tu respuesta aquí...',
  },
  'dashboard.mock.prev_section': {
    en: 'Previous Section',
    ar: 'القسم السابق',
    es: 'Sección anterior',
  },
  'dashboard.mock.next_section': {
    en: 'Next Section',
    ar: 'القسم التالي',
    es: 'Sección siguiente',
  },
  'dashboard.mock.confirm.title': {
    en: 'Submit your exam?',
    ar: 'تسلّم امتحانك؟',
    es: '¿Enviar tu examen?',
  },
  'dashboard.mock.confirm.body': {
    en: 'This action cannot be undone. Your answers will be submitted for review.',
    ar: 'هذي الخطوة ما تتراجع. إجاباتك بتنرسل للمراجعة.',
    es: 'Esta acción no se puede deshacer. Tus respuestas se enviarán para su revisión.',
  },
  'dashboard.mock.confirm.answered': {
    en: 'Questions answered',
    ar: 'الأسئلة المنجاوبة',
    es: 'Preguntas respondidas',
  },
  'dashboard.mock.confirm.have': { en: 'You have', ar: 'عندك', es: 'Tienes' },
  'dashboard.mock.confirm.unans_s': {
    en: 'unanswered question. Are you sure you want to submit?',
    ar: 'سؤال ما انجاوب. متأكد تبي تسلّم؟',
    es: 'pregunta sin responder. ¿Seguro que quieres enviar?',
  },
  'dashboard.mock.confirm.unans_p': {
    en: 'unanswered questions. Are you sure you want to submit?',
    ar: 'أسئلة ما انجاوبت. متأكد تبي تسلّم؟',
    es: 'preguntas sin responder. ¿Seguro que quieres enviar?',
  },
  'dashboard.mock.confirm.keep': { en: 'Keep Working', ar: 'كمّل شغل', es: 'Seguir trabajando' },
  'dashboard.mock.results.h1': {
    en: 'Exam Complete',
    ar: 'الامتحان خلَّص',
    es: 'Examen completado',
  },
  'dashboard.mock.results.none': {
    en: 'No exam data found.',
    ar: 'ما لقينا بيانات الامتحان.',
    es: 'No se encontraron datos del examen.',
  },
  'dashboard.mock.results.start_new': {
    en: 'Start New Exam',
    ar: 'ابدأ امتحان جديد',
    es: 'Empezar examen nuevo',
  },
  'dashboard.mock.results.est_grade': {
    en: 'Estimated grade',
    ar: 'الدرجة التقريبية',
    es: 'Nota estimada',
  },
  'dashboard.mock.results.min_alloc': {
    en: 'min allocated',
    ar: 'دقيقة مخصّصة',
    es: 'min asignados',
  },
  'dashboard.mock.results.q_answered': {
    en: 'Questions answered',
    ar: 'الأسئلة المنجاوبة',
    es: 'Preguntas respondidas',
  },
  'dashboard.mock.results.completion': {
    en: 'Completion rate',
    ar: 'نسبة الإكمال',
    es: 'Tasa de finalización',
  },
  'dashboard.mock.results.time_usage': {
    en: 'Time usage',
    ar: 'استخدام الوقت',
    es: 'Uso del tiempo',
  },
  'dashboard.mock.results.spare_a': {
    en: 'You finished with',
    ar: 'خلّصت وعندك',
    es: 'Terminaste con',
  },
  'dashboard.mock.results.spare_b': {
    en: 'minutes to spare. In the real exam, use spare time to review your answers.',
    ar: 'دقيقة زيادة. في الامتحان الحقيقي، استغل الوقت الزايد لمراجعة الإجابات.',
    es: 'minutos de sobra. En el examen real, usa el tiempo extra para revisar tus respuestas.',
  },
  'dashboard.mock.results.all_used': {
    en: 'You used all the allocated time. Practise time management to leave a review buffer.',
    ar: 'استعملت كل الوقت المخصّص. تدرّب على إدارة الوقت عشان تخلّي وقت للمراجعة.',
    es: 'Usaste todo el tiempo asignado. Practica la gestión del tiempo para dejar un margen de revisión.',
  },
  'dashboard.mock.results.show_for': {
    en: 'Show model answers for:',
    ar: 'اعرض نموذج الإجابة لـ:',
    es: 'Mostrar respuestas modelo para:',
  },
  'dashboard.mock.results.complete': { en: 'Complete', ar: 'مكتمل', es: 'Completado' },
  'dashboard.mock.results.not_ans': { en: 'Not answered', ar: 'ما انجاوب', es: 'Sin responder' },
  'dashboard.mock.results.your_answer': { en: 'Your Answer', ar: 'إجابتك', es: 'Tu respuesta' },
  'dashboard.mock.results.show_model': { en: 'Show', ar: 'اعرض', es: 'Mostrar' },
  'dashboard.mock.results.hide_model': { en: 'Hide', ar: 'أخفِ', es: 'Ocultar' },
  'dashboard.mock.results.model_suffix': {
    en: 'model answer',
    ar: 'نموذج الإجابة',
    es: 'respuesta modelo',
  },
  'dashboard.mock.results.model_title': {
    en: 'Model Answer',
    ar: 'نموذج الإجابة',
    es: 'Respuesta modelo',
  },
  'dashboard.mock.results.no_model': {
    en: 'Model answer not available for this grade band.',
    ar: 'نموذج الإجابة غير متاح لهذي الفئة من الدرجات.',
    es: 'No hay respuesta modelo disponible para esta franja de notas.',
  },
  'dashboard.mock.results.marking_guide': {
    en: 'Marking Guide',
    ar: 'سلم العلامات',
    es: 'Guía de corrección',
  },
  'dashboard.mock.results.try_another': {
    en: 'Try Another Exam',
    ar: 'جرّب امتحان ثاني',
    es: 'Probar otro examen',
  },
  'dashboard.mock.results.ans': { en: 'answered', ar: 'انجاوب', es: 'respondidas' },
  'dashboard.mock.results.marks_avail': {
    en: 'marks available',
    ar: 'علامة متاحة',
    es: 'puntos disponibles',
  },

  // ─── Dashboard / Review Status ─────────────────────────────────────
  'dashboard.review.h1': { en: 'Review Status', ar: 'حالة المراجعة', es: 'Estado de la revisión' },
  'dashboard.review.back': {
    en: '← Back to Dashboard',
    ar: '← رجوع للوحة',
    es: '← Volver al panel',
  },
  'dashboard.review.back_btn': { en: 'Back to Dashboard', ar: 'رجوع للوحة', es: 'Volver al panel' },
  'dashboard.review.reference': { en: 'Reference', ar: 'المرجع', es: 'Referencia' },
  'dashboard.review.progress': { en: 'Progress', ar: 'التقدم', es: 'Progreso' },
  'dashboard.review.stage.submitted': { en: 'Submitted', ar: 'تم التسليم', es: 'Enviada' },
  'dashboard.review.stage.under_review': {
    en: 'Under Review',
    ar: 'قيد المراجعة',
    es: 'En revisión',
  },
  'dashboard.review.stage.completed': { en: 'Completed', ar: 'مخلَّص', es: 'Completada' },
  'dashboard.review.reviewer_response': {
    en: 'Reviewer Response',
    ar: 'رد المراجِع',
    es: 'Respuesta del revisor',
  },
  'dashboard.review.your_request': { en: 'Your Request', ar: 'طلبك', es: 'Tu solicitud' },
  'dashboard.review.essay': { en: 'Essay', ar: 'المقال', es: 'Ensayo' },
  'dashboard.review.reason': { en: 'Reason', ar: 'السبب', es: 'Motivo' },
  'dashboard.review.details': { en: 'Details', ar: 'التفاصيل', es: 'Detalles' },
  'dashboard.review.self_assess': {
    en: 'Your self-assessment',
    ar: 'تقييمك الذاتي',
    es: 'Tu autoevaluación',
  },
  'dashboard.review.submitted_at': { en: 'Submitted', ar: 'تاريخ التسليم', es: 'Enviada' },
  'dashboard.review.timeline': { en: 'Timeline', ar: 'الجدول الزمني', es: 'Cronología' },
  'dashboard.review.err.not_found': {
    en: 'Review request not found. Please check your reference number.',
    ar: 'ما لقينا طلب المراجعة. راجع رقم المرجع.',
    es: 'No se encontró la solicitud de revisión. Comprueba tu número de referencia.',
  },
  'dashboard.review.err.load': {
    en: 'Unable to load review details. Please try again later.',
    ar: 'ما قدرنا نجيب تفاصيل المراجعة. حاول بعدين.',
    es: 'No se pudieron cargar los detalles de la revisión. Inténtalo más tarde.',
  },
  'dashboard.review.err.conn': {
    en: 'Unable to connect. Please check your internet and try again.',
    ar: 'ما قدرنا نتصل. تأكد من الإنترنت وحاول مرة ثانية.',
    es: 'No se pudo conectar. Comprueba tu conexión a internet e inténtalo de nuevo.',
  },
  'dashboard.review.err.fallback': {
    en: 'Review not found.',
    ar: 'ما لقينا المراجعة.',
    es: 'No se encontró la revisión.',
  },

  // ─── Dashboard / Teacher Resources - shared ────────────────────────
  'dashboard.tr.back': {
    en: '← Back to Resources',
    ar: '← رجوع للموارد',
    es: '← Volver a los recursos',
  },

  // ─── Teacher Resources / Creative Writing ──────────────────────────
  'dashboard.tr.cw.h1': {
    en: 'Creative Writing Masterclass',
    ar: 'دورة الكتابة الإبداعية',
    es: 'Clase magistral de escritura creativa',
  },
  'dashboard.tr.cw.intro': {
    en: 'Model texts, annotated examples, and structured tasks for teaching descriptive and narrative writing at GCSE level. Suitable for AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
    ar: 'نصوص نموذجية، أمثلة مشروحة، ومهام منظّمة لتدريس الكتابة الوصفية والسردية على مستوى GCSE. مناسبة لـ AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
    es: 'Textos modelo, ejemplos comentados y tareas estructuradas para enseñar escritura descriptiva y narrativa a nivel GCSE. Adecuado para AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
  },
  'dashboard.tr.cw.tech_ann': {
    en: 'Technique Annotations',
    ar: 'شرح التقنيات',
    es: 'Anotaciones de técnicas',
  },
  'dashboard.tr.cw.example': { en: 'Example', ar: 'مثال', es: 'Ejemplo' },
  'dashboard.tr.cw.effect': { en: 'Effect', ar: 'الأثر', es: 'Efecto' },
  'dashboard.tr.cw.toolkit': {
    en: 'Technique Toolkit for Students',
    ar: 'مجموعة تقنيات للطلاب',
    es: 'Caja de herramientas de técnicas para estudiantes',
  },
  'dashboard.tr.cw.use_when': { en: 'Use when:', ar: 'استعمله متى:', es: 'Úsalo cuando:' },
  'dashboard.tr.cw.tasks': {
    en: 'Structured Writing Tasks',
    ar: 'مهام كتابة منظّمة',
    es: 'Tareas de escritura estructuradas',
  },
  'dashboard.tr.cw.success': {
    en: 'Success Criteria',
    ar: 'معايير النجاح',
    es: 'Criterios de éxito',
  },

  // ─── Teacher Resources / Differentiation ───────────────────────────
  'dashboard.tr.diff.h1': {
    en: 'Differentiation Guide for English',
    ar: 'دليل التمايز لمادة الإنجليزي',
    es: 'Guía de diferenciación para English',
  },
  'dashboard.tr.diff.intro': {
    en: 'Practical strategies for differentiating English lessons by ability, need, and learning style. Includes PP, SEND, and EAL guidance aligned to Ofsted expectations.',
    ar: 'استراتيجيات عملية لتمييز دروس الإنجليزي حسب القدرة والاحتياج وأسلوب التعلّم. تشمل إرشادات PP و SEND و EAL متماشية مع متطلبات Ofsted.',
    es: 'Estrategias prácticas para diferenciar las clases de English según la capacidad, las necesidades y el estilo de aprendizaje. Incluye orientación sobre PP, SEND y EAL alineada con las expectativas de Ofsted.',
  },
  'dashboard.tr.diff.by_ability': {
    en: 'Differentiation by Ability',
    ar: 'التمايز حسب القدرة',
    es: 'Diferenciación por capacidad',
  },
  'dashboard.tr.diff.lower': { en: 'Lower Ability', ar: 'قدرة أدنى', es: 'Capacidad menor' },
  'dashboard.tr.diff.middle': { en: 'Middle Ability', ar: 'قدرة متوسطة', es: 'Capacidad media' },
  'dashboard.tr.diff.higher': { en: 'Higher Ability', ar: 'قدرة أعلى', es: 'Capacidad mayor' },
  'dashboard.tr.diff.example_task': {
    en: 'Example: Differentiated Task',
    ar: 'مثال: مهمة متمايزة',
    es: 'Ejemplo: tarea diferenciada',
  },
  'dashboard.tr.diff.q_prefix': { en: 'Q:', ar: 'س:', es: 'P:' },
  'dashboard.tr.diff.target': { en: 'Target:', ar: 'الهدف:', es: 'Objetivo:' },
  'dashboard.tr.diff.strategies_h2': {
    en: 'PP, SEND & EAL Strategies',
    ar: 'استراتيجيات PP و SEND و EAL',
    es: 'Estrategias para PP, SEND y EAL',
  },

  // ─── Teacher Resources / Lesson Plans ──────────────────────────────
  'dashboard.tr.lp.overview': { en: 'Overview', ar: 'نظرة عامة', es: 'Resumen' },
  'dashboard.tr.lp.objectives': {
    en: 'Learning Objectives',
    ar: 'أهداف التعلم',
    es: 'Objetivos de aprendizaje',
  },
  'dashboard.tr.lp.starter': {
    en: 'Starter (5-10 mins)',
    ar: 'المقدمة (٥-١٠ دقائق)',
    es: 'Inicio (5-10 min)',
  },
  'dashboard.tr.lp.main': {
    en: 'Main Activities',
    ar: 'الأنشطة الرئيسية',
    es: 'Actividades principales',
  },
  'dashboard.tr.lp.plenary': {
    en: 'Plenary (5-10 mins)',
    ar: 'الخاتمة (٥-١٠ دقائق)',
    es: 'Cierre (5-10 min)',
  },
  'dashboard.tr.lp.differentiation': { en: 'Differentiation', ar: 'التمايز', es: 'Diferenciación' },
  'dashboard.tr.lp.resources': {
    en: 'Resources Needed',
    ar: 'الموارد المطلوبة',
    es: 'Recursos necesarios',
  },
  'dashboard.tr.lp.assess_ops': {
    en: 'Assessment Opportunities',
    ar: 'فرص التقييم',
    es: 'Oportunidades de evaluación',
  },
  'dashboard.tr.lp.cross_curr': {
    en: 'Cross-Curricular Links',
    ar: 'روابط مع مواد ثانية',
    es: 'Vínculos interdisciplinares',
  },

  // ─── Teacher Resources / Marking Guide ─────────────────────────────
  'dashboard.tr.ms.h1': {
    en: 'AQA English Literature Marking Guide',
    ar: 'سلم علامات AQA English Literature',
    es: 'Guía de corrección de AQA English Literature',
  },
  'dashboard.tr.ms.intro': {
    en: 'A teacher-friendly breakdown of the AQA GCSE English Literature 8702 marking guide with annotated student examples at each band level.',
    ar: 'شرح ميسّر للمعلم لسلم علامات AQA GCSE English Literature 8702 مع أمثلة طلابية مشروحة لكل مستوى.',
    es: 'Un desglose accesible para el profesor de la guía de corrección de AQA GCSE English Literature 8702, con ejemplos de estudiantes comentados en cada franja de nivel.',
  },
  'dashboard.tr.ms.ao_glance': {
    en: 'Assessment Objectives at a Glance',
    ar: 'أهداف التقييم باختصار',
    es: 'Objetivos de evaluación de un vistazo',
  },
  'dashboard.tr.ms.ao1_label': {
    en: 'AO1 (12 marks)',
    ar: 'AO1 (١٢ علامة)',
    es: 'AO1 (12 puntos)',
  },
  'dashboard.tr.ms.ao1_body': {
    en: 'Read, understand, respond. Use evidence and quotes.',
    ar: 'اقرأ، افهم، استجب. استعمل أدلة واقتباسات.',
    es: 'Lee, comprende, responde. Usa pruebas y citas.',
  },
  'dashboard.tr.ms.ao2_label': {
    en: 'AO2 (12 marks)',
    ar: 'AO2 (١٢ علامة)',
    es: 'AO2 (12 puntos)',
  },
  'dashboard.tr.ms.ao2_body': {
    en: 'Analyse language, form, structure. Use terminology.',
    ar: 'حلّل اللغة والشكل والتركيب. استعمل المصطلحات.',
    es: 'Analiza el lenguaje, la forma y la estructura. Usa terminología.',
  },
  'dashboard.tr.ms.ao3_label': { en: 'AO3 (6 marks)', ar: 'AO3 (٦ علامات)', es: 'AO3 (6 puntos)' },
  'dashboard.tr.ms.ao3_body': {
    en: 'Context: social, historical, literary. Link to writer’s purpose.',
    ar: 'السياق: اجتماعي، تاريخي، أدبي. اربطه بغرض الكاتب.',
    es: 'Contexto: social, histórico, literario. Vincúlalo al propósito del escritor.',
  },
  'dashboard.tr.ms.bands_h2': {
    en: 'Band Descriptors with Student Examples',
    ar: 'وصف المستويات مع أمثلة طلابية',
    es: 'Descriptores de franja con ejemplos de estudiantes',
  },
  'dashboard.tr.ms.level': { en: 'Level', ar: 'مستوى', es: 'Level' },
  'dashboard.tr.ms.marks_suffix': { en: 'marks', ar: 'علامة', es: 'puntos' },
  'dashboard.tr.ms.example_resp': {
    en: 'Example Student Response (An Inspector Calls)',
    ar: 'مثال إجابة طالب (An Inspector Calls)',
    es: 'Ejemplo de respuesta de estudiante (An Inspector Calls)',
  },
  'dashboard.tr.ms.common_errs': {
    en: 'Common Student Errors & How to Fix Them',
    ar: 'أخطاء شائعة وكيف نصلحها',
    es: 'Errores frecuentes de los estudiantes y cómo corregirlos',
  },
  'dashboard.tr.ms.fix': { en: 'Fix:', ar: 'الحل:', es: 'Solución:' },
  'dashboard.tr.ms.tips': {
    en: 'Quick Marking Tips',
    ar: 'نصائح تصحيح سريعة',
    es: 'Consejos rápidos de corrección',
  },
  'dashboard.tr.ms.copyright': {
    en: 'An Inspector Calls © The Estate of J.B. Priestley. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review.',
    ar: 'An Inspector Calls © The Estate of J.B. Priestley. اقتباسات قصيرة مأخوذة تحت بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 لأغراض النقد والمراجعة.',
    es: 'An Inspector Calls © The Estate of J.B. Priestley. Las citas breves se reproducen al amparo de la disposición de uso legítimo (fair dealing) de la Copyright, Designs and Patents Act 1988 con fines de crítica y reseña.',
  },

  // ─── Teacher Resources / Worksheets ────────────────────────────────
  'dashboard.tr.ws.h1': {
    en: 'Quote Analysis Worksheet: An Inspector Calls',
    ar: 'ورقة تحليل اقتباسات: An Inspector Calls',
    es: 'Ficha de análisis de citas: An Inspector Calls',
  },
  'dashboard.tr.ws.intro': {
    en: 'Pre-filled example worksheet with key quotes, techniques, and analysis. Use as a model answer or teacher reference. Print-friendly layout.',
    ar: 'ورقة عمل نموذجية معبّأة بالاقتباسات الرئيسية والتقنيات والتحليل. استعملها كنموذج إجابة أو مرجع للمعلم. مناسبة للطباعة.',
    es: 'Ficha de ejemplo ya rellenada con citas clave, técnicas y análisis. Úsala como respuesta modelo o referencia para el profesor. Diseño apto para imprimir.',
  },
  'dashboard.tr.ws.howto': {
    en: 'How to Use This Worksheet',
    ar: 'كيف تستعمل الورقة',
    es: 'Cómo usar esta ficha',
  },
  'dashboard.tr.ws.act': { en: 'Act', ar: 'الفصل', es: 'Act' },
  'dashboard.tr.ws.technique': { en: 'Technique(s)', ar: 'التقنية', es: 'Técnica(s)' },
  'dashboard.tr.ws.effect': {
    en: 'Effect & Analysis',
    ar: 'الأثر والتحليل',
    es: 'Efecto y análisis',
  },
  'dashboard.tr.ws.task': {
    en: 'Student Extension Task',
    ar: 'مهمة إضافية للطالب',
    es: 'Tarea de ampliación para el estudiante',
  },
  'dashboard.tr.ws.task_body': {
    en: 'Using the model analyses above, complete the same process for these additional quotes:',
    ar: 'استخدم نماذج التحليل اللي فوق وطبّق نفس الخطوات على هذي الاقتباسات الإضافية:',
    es: 'Usando los análisis modelo de arriba, aplica los mismos pasos a estas citas adicionales:',
  },
}
