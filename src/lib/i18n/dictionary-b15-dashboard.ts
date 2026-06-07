/** dictionary-b15-dashboard.ts - Bucket B Phase B1.5. Curated EN + Khaleeji (Gulf) AR for /dashboard + /toolkit product UI. */
export const B15_DASHBOARD_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ── dashboard/analytics ────────────────────────────────────────────────────
  'dashboard.analytics.back': { en: 'Dashboard', ar: 'لوحة التحكم', es: 'Panel de control' },
  'dashboard.analytics.title': {
    en: 'Progress Analytics',
    ar: 'تحليلات التقدم',
    es: 'Analíticas de progreso',
  },
  'dashboard.analytics.subtitle': {
    en: 'Track your learning journey and exam preparation',
    ar: 'تابع رحلتك التعليمية واستعدادك للامتحان',
    es: 'Sigue tu trayectoria de aprendizaje y tu preparación para el examen',
  },
  'dashboard.analytics.class_view': { en: 'Class View', ar: 'عرض الصف', es: 'Vista de clase' },
  'dashboard.analytics.stat_study_time': {
    en: 'Study Time',
    ar: 'وقت الدراسة',
    es: 'Tiempo de estudio',
  },
  'dashboard.analytics.stat_study_this_week': {
    en: 'this week',
    ar: 'هذا الأسبوع',
    es: 'esta semana',
  },
  'dashboard.analytics.stat_modules': { en: 'Modules', ar: 'الوحدات', es: 'Módulos' },
  'dashboard.analytics.stat_completed': { en: 'completed', ar: 'مكتملة', es: 'completados' },
  'dashboard.analytics.stat_working_at_grade': {
    en: 'Working At Grade',
    ar: 'الدرجة الحالية',
    es: 'Nivel actual',
  },
  'dashboard.analytics.stat_avg_score': {
    en: 'based on avg score',
    ar: 'بناءً على متوسط الدرجة',
    es: 'según la puntuación media',
  },
  'dashboard.analytics.stat_streak': { en: 'Streak', ar: 'الاستمرارية', es: 'Racha' },
  'dashboard.analytics.stat_streak_day': { en: 'day', ar: 'يوم', es: 'día' },
  'dashboard.analytics.stat_streak_days': { en: 'days', ar: 'أيام', es: 'días' },
  'dashboard.analytics.stat_streak_in_a_row': { en: 'in a row', ar: 'متتالية', es: 'seguidos' },
  'dashboard.analytics.stat_exam_ready': {
    en: 'Exam Ready',
    ar: 'جاهز للامتحان',
    es: 'Preparado para el examen',
  },
  'dashboard.analytics.stat_readiness_score': {
    en: 'readiness score',
    ar: 'درجة الجاهزية',
    es: 'puntuación de preparación',
  },
  'dashboard.analytics.tooltip_study_time': {
    en: 'Total time spent studying across modules, practice and assessments',
    ar: 'إجمالي وقت الدراسة في الوحدات والتدريب والتقييمات',
    es: 'Tiempo total dedicado al estudio en módulos, práctica y evaluaciones',
  },
  'dashboard.analytics.tooltip_modules': {
    en: 'Modules completed out of total enrolled',
    ar: 'الوحدات المكتملة من إجمالي المسجّلة',
    es: 'Módulos completados del total en los que estás matriculado',
  },
  'dashboard.analytics.tooltip_avg_score': {
    en: 'Average score from quizzes, assessments, and practice ratings',
    ar: 'متوسط الدرجة من الاختبارات والتقييمات والتدريبات',
    es: 'Puntuación media de cuestionarios, evaluaciones y valoraciones de práctica',
  },
  'dashboard.analytics.tooltip_streak': {
    en: 'Consecutive days with at least one study activity',
    ar: 'الأيام المتتالية التي يوجد فيها نشاط دراسي واحد على الأقل',
    es: 'Días consecutivos con al menos una actividad de estudio',
  },
  'dashboard.analytics.tooltip_exam_ready': {
    en: 'Calculated from course completion (40%), practice scores (30%), and skill coverage (30%)',
    ar: 'يُحسب من إتمام الدورة (40%) ودرجات التدريب (30%) وتغطية المهارات (30%)',
    es: 'Calculado a partir de la finalización del curso (40%), las puntuaciones de práctica (30%) y la cobertura de habilidades (30%)',
  },
  'dashboard.analytics.course_progress_title': {
    en: 'Course Progress',
    ar: 'تقدم الدورة',
    es: 'Progreso del curso',
  },
  'dashboard.analytics.enrolled_courses': {
    en: 'enrolled course',
    ar: 'دورة مسجّلة',
    es: 'curso matriculado',
  },
  'dashboard.analytics.enrolled_courses_plural': {
    en: 'enrolled courses',
    ar: 'دورات مسجّلة',
    es: 'cursos matriculados',
  },
  'dashboard.analytics.no_courses': {
    en: 'Enrol in courses to track progress',
    ar: 'سجّل في دورات لمتابعة تقدمك',
    es: 'Matricúlate en cursos para seguir tu progreso',
  },
  'dashboard.analytics.no_courses_empty': {
    en: 'No enrolled courses yet.',
    ar: 'ما فيه دورات مسجّلة بعد.',
    es: 'Aún no hay cursos matriculados.',
  },
  'dashboard.analytics.browse_courses': {
    en: 'Browse Courses',
    ar: 'تصفّح الدورات',
    es: 'Explorar cursos',
  },
  'dashboard.analytics.last_activity': {
    en: 'Last activity:',
    ar: 'آخر نشاط:',
    es: 'Última actividad:',
  },
  'dashboard.analytics.exam_readiness_title': {
    en: 'Exam Readiness',
    ar: 'جاهزية الامتحان',
    es: 'Preparación para el examen',
  },
  'dashboard.analytics.exam_readiness_desc': {
    en: 'Overall preparation level',
    ar: 'مستوى الاستعداد الكلي',
    es: 'Nivel general de preparación',
  },
  'dashboard.analytics.exam_readiness_note': {
    en: 'Based on course completion, practice scores, and skill coverage.',
    ar: 'بناءً على إتمام الدورة ودرجات التدريب وتغطية المهارات.',
    es: 'Según la finalización del curso, las puntuaciones de práctica y la cobertura de habilidades.',
  },
  'dashboard.analytics.exam_readiness_low': {
    en: 'Keep studying and practising to improve your readiness score.',
    ar: 'واصل الدراسة والتدريب لتحسين درجة جاهزيتك.',
    es: 'Sigue estudiando y practicando para mejorar tu puntuación de preparación.',
  },
  'dashboard.analytics.skills_title': {
    en: 'Performance by Skill Area',
    ar: 'الأداء حسب مجال المهارة',
    es: 'Rendimiento por área de habilidad',
  },
  'dashboard.analytics.skills_desc': {
    en: 'Based on practice questions and assessments',
    ar: 'بناءً على أسئلة التدريب والتقييمات',
    es: 'Según las preguntas de práctica y las evaluaciones',
  },
  'dashboard.analytics.weekly_activity_title': {
    en: 'Weekly Activity',
    ar: 'النشاط الأسبوعي',
    es: 'Actividad semanal',
  },
  'dashboard.analytics.weekly_activity_desc': {
    en: 'Study time and questions answered (last 7 days)',
    ar: 'وقت الدراسة والأسئلة المجاب عليها (آخر 7 أيام)',
    es: 'Tiempo de estudio y preguntas respondidas (últimos 7 días)',
  },
  'dashboard.analytics.recommendations_title': {
    en: 'Recommendations',
    ar: 'التوصيات',
    es: 'Recomendaciones',
  },
  'dashboard.analytics.recommendations_desc': {
    en: 'Areas to focus on for improvement',
    ar: 'المجالات التي تحتاج إلى تركيز وتحسين',
    es: 'Áreas en las que centrarse para mejorar',
  },
  'dashboard.analytics.recommendations_empty': {
    en: 'Complete more activities to receive personalised recommendations.',
    ar: 'أكمل المزيد من الأنشطة لتحصل على توصيات مخصصة.',
    es: 'Completa más actividades para recibir recomendaciones personalizadas.',
  },
  'dashboard.analytics.recent_activity_title': {
    en: 'Recent Activity',
    ar: 'النشاط الأخير',
    es: 'Actividad reciente',
  },
  'dashboard.analytics.recent_activity_desc': {
    en: 'Your latest learning activities',
    ar: 'أحدث أنشطتك التعليمية',
    es: 'Tus últimas actividades de aprendizaje',
  },
  'dashboard.analytics.recent_activity_empty': {
    en: 'No activity yet. Start a course or try a practice question.',
    ar: 'ما فيه نشاط بعد. ابدأ دورة أو جرّب سؤال تدريبي.',
    es: 'Aún no hay actividad. Empieza un curso o prueba una pregunta de práctica.',
  },
  'dashboard.analytics.rec_go': { en: 'Go', ar: 'انتقل', es: 'Ir' },

  // ── dashboard/essay-feedback ──────────────────────────────────────────────
  'dashboard.essay_feedback.back': { en: 'Dashboard', ar: 'لوحة التحكم', es: 'Panel de control' },
  'dashboard.essay_feedback.title': {
    en: 'AI Essay Feedback',
    ar: 'تقييم المقال بالذكاء الاصطناعي',
    es: 'Comentarios de ensayos con IA',
  },
  'dashboard.essay_feedback.subtitle': {
    en: "Get GCSE marker-level feedback on your writing, aligned to your exam board's marking guide.",
    ar: 'احصل على تقييم بمستوى مصحّح GCSE لكتابتك، مبني على دليل التصحيح الخاص بلجنة الامتحان.',
    es: 'Recibe comentarios al nivel de un corrector de GCSE sobre tu escritura, alineados con la guía de corrección de tu junta examinadora.',
  },
  'dashboard.essay_feedback.remaining': { en: 'review', ar: 'مراجعة', es: 'revisión' },
  'dashboard.essay_feedback.remaining_plural': { en: 'reviews', ar: 'مراجعات', es: 'revisiones' },
  'dashboard.essay_feedback.remaining_today': {
    en: 'remaining today',
    ar: 'متبقية اليوم',
    es: 'restantes hoy',
  },
  'dashboard.essay_feedback.label_board': {
    en: 'Exam Board',
    ar: 'لجنة الامتحان',
    es: 'Junta examinadora',
  },
  'dashboard.essay_feedback.placeholder_board': {
    en: 'Select board',
    ar: 'اختر اللجنة',
    es: 'Selecciona junta',
  },
  'dashboard.essay_feedback.label_paper': { en: 'Paper', ar: 'الورقة', es: 'Paper' },
  'dashboard.essay_feedback.placeholder_paper': {
    en: 'Select paper',
    ar: 'اختر الورقة',
    es: 'Selecciona paper',
  },
  'dashboard.essay_feedback.placeholder_paper_first': {
    en: 'Select board first',
    ar: 'اختر اللجنة أولاً',
    es: 'Selecciona primero la junta',
  },
  'dashboard.essay_feedback.label_question_type': {
    en: 'Question Type',
    ar: 'نوع السؤال',
    es: 'Tipo de pregunta',
  },
  'dashboard.essay_feedback.placeholder_question_type': {
    en: 'Select type',
    ar: 'اختر النوع',
    es: 'Selecciona tipo',
  },
  'dashboard.essay_feedback.placeholder_question_type_first': {
    en: 'Select paper first',
    ar: 'اختر الورقة أولاً',
    es: 'Selecciona primero el paper',
  },
  'dashboard.essay_feedback.label_question': { en: 'Question', ar: 'السؤال', es: 'Pregunta' },
  'dashboard.essay_feedback.placeholder_question': {
    en: 'Select a question',
    ar: 'اختر سؤالاً',
    es: 'Selecciona una pregunta',
  },
  'dashboard.essay_feedback.placeholder_question_first': {
    en: 'Select question type first',
    ar: 'اختر نوع السؤال أولاً',
    es: 'Selecciona primero el tipo de pregunta',
  },
  'dashboard.essay_feedback.placeholder_question_custom': {
    en: 'Type or paste the question you are answering...',
    ar: 'اكتب أو الصق السؤال الذي تجيب عنه...',
    es: 'Escribe o pega la pregunta que estás respondiendo...',
  },
  'dashboard.essay_feedback.question_hint': {
    en: 'Choose a question from your exam board, or select "I\'ll type my own question" to enter a custom one.',
    ar: 'اختر سؤالاً من لجنة امتحانك، أو اختر "سأكتب سؤالي الخاص" لإدخال سؤال مخصص.',
    es: 'Elige una pregunta de tu junta examinadora, o selecciona "Escribiré mi propia pregunta" para introducir una personalizada.',
  },
  'dashboard.essay_feedback.label_essay': { en: 'Your Essay', ar: 'مقالك', es: 'Tu ensayo' },
  'dashboard.essay_feedback.placeholder_essay': {
    en: 'Paste or type your essay here...',
    ar: 'الصق مقالك هنا أو اكتبه...',
    es: 'Pega o escribe tu ensayo aquí...',
  },
  'dashboard.essay_feedback.word': { en: 'word', ar: 'كلمة', es: 'palabra' },
  'dashboard.essay_feedback.words': { en: 'words', ar: 'كلمات', es: 'palabras' },
  'dashboard.essay_feedback.word_min': {
    en: '(min 100)',
    ar: '(الحد الأدنى 100)',
    es: '(mín. 100)',
  },
  'dashboard.essay_feedback.disclaimer_ai': {
    en: 'Feedback is AI-generated and should be used as a guide, not a definitive grade.',
    ar: 'التقييم مُنتَج بالذكاء الاصطناعي ويُستخدم كمرشد وليس درجة نهائية.',
    es: 'Los comentarios son generados por IA y deben usarse como guía, no como una nota definitiva.',
  },
  'dashboard.essay_feedback.btn_analysing': {
    en: 'Analysing...',
    ar: 'جاري التحليل...',
    es: 'Analizando...',
  },
  'dashboard.essay_feedback.btn_get_feedback': {
    en: 'Get Feedback',
    ar: 'احصل على التقييم',
    es: 'Obtener comentarios',
  },
  'dashboard.essay_feedback.result_disclaimer_title': {
    en: 'Important Disclaimer',
    ar: 'تنبيه مهم',
    es: 'Aviso importante',
  },
  'dashboard.essay_feedback.result_disclaimer_body': {
    en: "This is an AI-generated estimate based on the marking guide criteria. It is not an official grade and should be used alongside your teacher's guidance. Actual exam grades may differ.",
    ar: 'هذا تقدير مُنتَج بالذكاء الاصطناعي بناءً على معايير دليل التصحيح. وهو ليس درجة رسمية ويُستخدم جنباً إلى جنب مع توجيهات معلمك. قد تختلف درجات الامتحان الفعلية.',
    es: 'Esta es una estimación generada por IA basada en los criterios de la guía de corrección. No es una nota oficial y debe usarse junto con la orientación de tu profesor. Las notas reales del examen pueden diferir.',
  },
  'dashboard.essay_feedback.marking_breakdown_title': {
    en: 'Marking Guide Breakdown',
    ar: 'تفصيل دليل التصحيح',
    es: 'Desglose de la guía de corrección',
  },
  'dashboard.essay_feedback.marking_breakdown_desc': {
    en: 'How your essay scored against each Assessment Objective',
    ar: 'كيف سجّل مقالك مقابل كل هدف تقييمي',
    es: 'Cómo ha puntuado tu ensayo en cada objetivo de evaluación',
  },
  'dashboard.essay_feedback.strengths_title': {
    en: 'Strengths',
    ar: 'نقاط القوة',
    es: 'Fortalezas',
  },
  'dashboard.essay_feedback.strengths_desc': {
    en: 'What you did well',
    ar: 'ما الذي أتقنته',
    es: 'Lo que has hecho bien',
  },
  'dashboard.essay_feedback.improvements_title': {
    en: 'Areas for Improvement',
    ar: 'مجالات التحسين',
    es: 'Áreas de mejora',
  },
  'dashboard.essay_feedback.improvements_desc': {
    en: 'How to push your grade higher',
    ar: 'كيف ترفع درجتك أعلى',
    es: 'Cómo subir tu nota',
  },
  'dashboard.essay_feedback.detailed_feedback_title': {
    en: 'Detailed Feedback',
    ar: 'تقييم مفصّل',
    es: 'Comentarios detallados',
  },
  'dashboard.essay_feedback.detailed_feedback_desc': {
    en: 'Paragraph-by-paragraph marker commentary',
    ar: 'تعليق المصحّح فقرة بفقرة',
    es: 'Comentario del corrector párrafo a párrafo',
  },
  'dashboard.essay_feedback.ai_approximate': {
    en: 'AI-generated feedback is approximate and should not replace teacher assessment.',
    ar: 'التقييم المُنتَج بالذكاء الاصطناعي تقريبي ولا يُغني عن تقييم المعلم.',
    es: 'Los comentarios generados por IA son aproximados y no deben sustituir la evaluación del profesor.',
  },
  'dashboard.essay_feedback.btn_try_again': {
    en: 'Try Again',
    ar: 'حاول مجدداً',
    es: 'Intentar de nuevo',
  },

  // ── dashboard/parent/reports ───────────────────────────────────────────────
  'dashboard.parent_reports.title': {
    en: 'Weekly Reports',
    ar: 'التقارير الأسبوعية',
    es: 'Informes semanales',
  },
  'dashboard.parent_reports.subtitle': {
    en: 'View detailed weekly progress reports for your child.',
    ar: 'اعرض تقارير التقدم الأسبوعية المفصّلة لطفلك.',
    es: 'Consulta informes semanales de progreso detallados de tu hijo.',
  },
  'dashboard.parent_reports.no_reports': {
    en: 'No reports available yet.',
    ar: 'ما فيه تقارير متاحة بعد.',
    es: 'Aún no hay informes disponibles.',
  },
  'dashboard.parent_reports.auto_generated': {
    en: 'Weekly reports are generated automatically every week.',
    ar: 'تُولَّد التقارير الأسبوعية تلقائياً كل أسبوع.',
    es: 'Los informes semanales se generan automáticamente cada semana.',
  },
  'dashboard.parent_reports.week_of': { en: 'Week of', ar: 'أسبوع', es: 'Semana del' },
  'dashboard.parent_reports.essays_completed': {
    en: 'Essays Completed',
    ar: 'المقالات المكتملة',
    es: 'Ensayos completados',
  },
  'dashboard.parent_reports.time_on_platform': {
    en: 'Time on Platform',
    ar: 'الوقت على المنصة',
    es: 'Tiempo en la plataforma',
  },
  'dashboard.parent_reports.average_score': {
    en: 'Average Score',
    ar: 'متوسط الدرجة',
    es: 'Puntuación media',
  },
  'dashboard.parent_reports.grades_title': {
    en: 'Working At & Predicted Grades',
    ar: 'الدرجة الحالية والمتوقعة',
    es: 'Nivel actual y notas previstas',
  },
  'dashboard.parent_reports.working_at': {
    en: 'Working At:',
    ar: 'الدرجة الحالية:',
    es: 'Nivel actual:',
  },
  'dashboard.parent_reports.predicted': { en: 'Predicted:', ar: 'المتوقعة:', es: 'Prevista:' },
  'dashboard.parent_reports.top_strengths': {
    en: 'Top Strengths',
    ar: 'أبرز نقاط القوة',
    es: 'Principales fortalezas',
  },
  'dashboard.parent_reports.areas_improvement': {
    en: 'Areas for Improvement',
    ar: 'مجالات التحسين',
    es: 'Áreas de mejora',
  },
  'dashboard.parent_reports.recommended_steps': {
    en: 'Recommended Next Steps',
    ar: 'الخطوات التالية الموصى بها',
    es: 'Próximos pasos recomendados',
  },
  'dashboard.parent_reports.download_pdf': {
    en: 'Download as PDF',
    ar: 'تحميل كـ PDF',
    es: 'Descargar como PDF',
  },
  'dashboard.parent_reports.generating': {
    en: 'Generating...',
    ar: 'جاري الإنشاء...',
    es: 'Generando...',
  },

  // ── dashboard/privacy ─────────────────────────────────────────────────────
  'dashboard.privacy.title': {
    en: 'Privacy & Data',
    ar: 'الخصوصية والبيانات',
    es: 'Privacidad y datos',
  },
  'dashboard.privacy.subtitle': {
    en: "You're in control. Manage how your data is used, download it, or delete it anytime.",
    ar: 'الأمر بيدك. تحكّم في طريقة استخدام بياناتك، وحمّلها أو احذفها في أي وقت.',
    es: 'Tú tienes el control. Gestiona cómo se usan tus datos, descárgalos o elimínalos en cualquier momento.',
  },
  'dashboard.privacy.loading': {
    en: 'Loading your privacy settings...',
    ar: 'جاري تحميل إعدادات الخصوصية...',
    es: 'Cargando tus ajustes de privacidad...',
  },
  'dashboard.privacy.settings_title': {
    en: 'Privacy Settings',
    ar: 'إعدادات الخصوصية',
    es: 'Ajustes de privacidad',
  },
  'dashboard.privacy.settings_desc': {
    en: 'Everything is off by default to keep your data private. Turn things on only if you want to.',
    ar: 'كل شيء مُوقَف افتراضياً للحفاظ على خصوصية بياناتك. فعّل ما تريده فقط.',
    es: 'Todo está desactivado por defecto para mantener tus datos privados. Activa solo lo que quieras.',
  },
  'dashboard.privacy.save_changes': {
    en: 'Save Changes',
    ar: 'حفظ التغييرات',
    es: 'Guardar cambios',
  },
  'dashboard.privacy.saving': { en: 'Saving...', ar: 'جاري الحفظ...', es: 'Guardando...' },
  'dashboard.privacy.profile_visibility': {
    en: 'Profile Visibility',
    ar: 'ظهور الملف الشخصي',
    es: 'Visibilidad del perfil',
  },
  'dashboard.privacy.profile_visibility_desc': {
    en: 'Control who can see your profile information',
    ar: 'تحكم في من يستطيع رؤية بيانات ملفك الشخصي',
    es: 'Controla quién puede ver la información de tu perfil',
  },
  'dashboard.privacy.data_title': {
    en: 'Your Data at a Glance',
    ar: 'بياناتك في لمحة',
    es: 'Tus datos de un vistazo',
  },
  'dashboard.privacy.data_desc': {
    en: "Here's a summary of what we hold about you. No surprises.",
    ar: 'ملخّص لما نحتفظ به عنك. لا مفاجآت.',
    es: 'Aquí tienes un resumen de lo que guardamos sobre ti. Sin sorpresas.',
  },
  'dashboard.privacy.data_no_summary': {
    en: 'Unable to load your data summary.',
    ar: 'تعذّر تحميل ملخّص بياناتك.',
    es: 'No se ha podido cargar el resumen de tus datos.',
  },
  'dashboard.privacy.download_title': {
    en: 'Download Your Data',
    ar: 'تحميل بياناتك',
    es: 'Descargar tus datos',
  },
  'dashboard.privacy.download_desc': {
    en: "You have the right to take your data with you. Request a copy and we'll email it to you.",
    ar: 'من حقك أخذ بياناتك معك. اطلب نسخة وسنرسلها إليك عبر البريد الإلكتروني.',
    es: 'Tienes derecho a llevarte tus datos contigo. Solicita una copia y te la enviaremos por correo electrónico.',
  },
  'dashboard.privacy.download_included': {
    en: "What's included in your export",
    ar: 'ما يتضمّنه التصدير',
    es: 'Qué se incluye en tu exportación',
  },
  'dashboard.privacy.download_format': {
    en: 'Choose format',
    ar: 'اختر الصيغة',
    es: 'Elige formato',
  },
  'dashboard.privacy.download_delivery': {
    en: 'Estimated delivery: within 48 hours',
    ar: 'الوقت المتوقع للتسليم: خلال 48 ساعة',
    es: 'Entrega estimada: en 48 horas',
  },
  'dashboard.privacy.download_delivery_desc': {
    en: "We'll email a secure download link to your registered email address.",
    ar: 'سنرسل رابط تحميل آمن إلى بريدك الإلكتروني المسجّل.',
    es: 'Enviaremos un enlace de descarga seguro a tu dirección de correo electrónico registrada.',
  },
  'dashboard.privacy.btn_export_requested': {
    en: 'Export Requested',
    ar: 'تم طلب التصدير',
    es: 'Exportación solicitada',
  },
  'dashboard.privacy.btn_requesting': {
    en: 'Requesting...',
    ar: 'جاري الطلب...',
    es: 'Solicitando...',
  },
  'dashboard.privacy.delete_title': {
    en: 'Delete Your Data',
    ar: 'حذف بياناتك',
    es: 'Eliminar tus datos',
  },
  'dashboard.privacy.delete_desc': {
    en: "You can delete individual essays or your entire account. Take your time - there's no pressure.",
    ar: 'يمكنك حذف مقالات فردية أو حسابك بالكامل. خذ وقتك - لا ضغط.',
    es: 'Puedes eliminar ensayos concretos o tu cuenta entera. Tómate tu tiempo, no hay prisa.',
  },
  'dashboard.privacy.delete_essays_title': {
    en: 'Delete Individual Essays',
    ar: 'حذف مقالات فردية',
    es: 'Eliminar ensayos concretos',
  },
  'dashboard.privacy.delete_no_essays': {
    en: 'No essays to show.',
    ar: 'ما فيه مقالات لعرضها.',
    es: 'No hay ensayos que mostrar.',
  },
  'dashboard.privacy.delete_account_title': {
    en: 'Delete Your Account',
    ar: 'حذف حسابك',
    es: 'Eliminar tu cuenta',
  },
  'dashboard.privacy.delete_account_desc': {
    en: "This will schedule your account for deletion. You'll have a 30-day grace period to change your mind. After that, all your data will be permanently erased.",
    ar: 'سيُجدول حذف حسابك. سيكون لديك 30 يوماً لتغيير رأيك. بعدها تُحذف جميع بياناتك نهائياً.',
    es: 'Esto programará la eliminación de tu cuenta. Dispondrás de un periodo de gracia de 30 días para cambiar de opinión. Después, todos tus datos se borrarán de forma permanente.',
  },
  'dashboard.privacy.delete_deleting': {
    en: 'Deleting...',
    ar: 'جاري الحذف...',
    es: 'Eliminando...',
  },
  'dashboard.privacy.delete_processing': {
    en: 'Processing...',
    ar: 'جاري المعالجة...',
    es: 'Procesando...',
  },
  'dashboard.privacy.rights_title': {
    en: 'Your Data Rights',
    ar: 'حقوقك في البيانات',
    es: 'Tus derechos sobre los datos',
  },
  'dashboard.privacy.rights_desc': {
    en: "Under UK GDPR and the ICO Children's Code, you have powerful rights over your data. Here's what they mean in plain English.",
    ar: 'بموجب اللائحة البريطانية GDPR وقانون ICO للأطفال، لديك حقوق قوية على بياناتك. إليك ما تعنيه بلغة بسيطة.',
    es: "En virtud del UK GDPR y el ICO Children's Code, tienes derechos importantes sobre tus datos. Aquí te explicamos qué significan en lenguaje sencillo.",
  },
  'dashboard.privacy.rights_need_help': {
    en: 'Need help?',
    ar: 'تحتاج مساعدة؟',
    es: '¿Necesitas ayuda?',
  },

  // ── dashboard/data-requests ────────────────────────────────────────────────
  'dashboard.data_requests.back': {
    en: '← Back to Dashboard',
    ar: '← رجوع للوحة التحكم',
    es: '← Volver al panel de control',
  },
  'dashboard.data_requests.title': {
    en: 'Your Data Rights',
    ar: 'حقوقك في البيانات',
    es: 'Tus derechos sobre los datos',
  },
  'dashboard.data_requests.subtitle': {
    en: 'Under UK GDPR, you have rights over your personal data. Use the options below to exercise these rights. All requests are processed within one calendar month.',
    ar: 'بموجب اللائحة البريطانية GDPR، لديك حقوق على بياناتك الشخصية. استخدم الخيارات أدناه لممارسة هذه الحقوق. تُعالَج جميع الطلبات خلال شهر تقويمي واحد.',
    es: 'En virtud del UK GDPR, tienes derechos sobre tus datos personales. Usa las opciones siguientes para ejercer estos derechos. Todas las solicitudes se tramitan en el plazo de un mes natural.',
  },
  'dashboard.data_requests.rights_notice_title': {
    en: 'Your data protection rights',
    ar: 'حقوق حماية بياناتك',
    es: 'Tus derechos de protección de datos',
  },
  'dashboard.data_requests.card_access_title': {
    en: 'Request My Data',
    ar: 'طلب بياناتي',
    es: 'Solicitar mis datos',
  },
  'dashboard.data_requests.card_access_desc': {
    en: 'Article 15 - Get a full copy of all personal data we hold about you.',
    ar: 'المادة 15 - احصل على نسخة كاملة من جميع البيانات الشخصية التي نحتفظ بها عنك.',
    es: 'Artículo 15: obtén una copia completa de todos los datos personales que guardamos sobre ti.',
  },
  'dashboard.data_requests.btn_access': {
    en: 'Request My Data',
    ar: 'طلب بياناتي',
    es: 'Solicitar mis datos',
  },
  'dashboard.data_requests.btn_access_submitting': {
    en: 'Submitting...',
    ar: 'جاري الإرسال...',
    es: 'Enviando...',
  },
  'dashboard.data_requests.card_download_title': {
    en: 'Download My Data',
    ar: 'تحميل بياناتي',
    es: 'Descargar mis datos',
  },
  'dashboard.data_requests.card_download_desc': {
    en: 'Article 20 - Download your data in a machine-readable format (JSON).',
    ar: 'المادة 20 - حمّل بياناتك بصيغة قابلة للقراءة آلياً (JSON).',
    es: 'Artículo 20: descarga tus datos en un formato legible por máquina (JSON).',
  },
  'dashboard.data_requests.btn_download': {
    en: 'Download My Data',
    ar: 'تحميل بياناتي',
    es: 'Descargar mis datos',
  },
  'dashboard.data_requests.btn_download_preparing': {
    en: 'Preparing...',
    ar: 'جاري التحضير...',
    es: 'Preparando...',
  },
  'dashboard.data_requests.card_correct_title': {
    en: 'Correct My Data',
    ar: 'تصحيح بياناتي',
    es: 'Corregir mis datos',
  },
  'dashboard.data_requests.card_correct_desc': {
    en: 'Article 16 - Update or correct any inaccurate personal information.',
    ar: 'المادة 16 - حدّث أو صحّح أي معلومات شخصية غير دقيقة.',
    es: 'Artículo 16: actualiza o corrige cualquier información personal inexacta.',
  },
  'dashboard.data_requests.btn_edit_profile': {
    en: 'Edit My Profile',
    ar: 'تعديل ملفي الشخصي',
    es: 'Editar mi perfil',
  },
  'dashboard.data_requests.card_delete_title': {
    en: 'Delete My Data',
    ar: 'حذف بياناتي',
    es: 'Eliminar mis datos',
  },
  'dashboard.data_requests.card_delete_desc': {
    en: 'Article 17 - Request erasure of your personal data. This action cannot be undone.',
    ar: 'المادة 17 - اطلب مسح بياناتك الشخصية. هذا الإجراء لا يمكن التراجع عنه.',
    es: 'Artículo 17: solicita la supresión de tus datos personales. Esta acción no se puede deshacer.',
  },
  'dashboard.data_requests.btn_delete': {
    en: 'Delete My Data',
    ar: 'حذف بياناتي',
    es: 'Eliminar mis datos',
  },
  'dashboard.data_requests.confirm_delete_title': {
    en: 'Are you sure?',
    ar: 'هل أنت متأكد؟',
    es: '¿Estás seguro?',
  },
  'dashboard.data_requests.confirm_delete_desc': {
    en: 'This will anonymise your account and remove your essays, feedback, and personal data. Your subscription will be cancelled. This cannot be undone.',
    ar: 'سيؤدي هذا إلى إخفاء هوية حسابك وإزالة مقالاتك وتقييماتك وبياناتك الشخصية. سيُلغى اشتراكك. لا يمكن التراجع عن هذا.',
    es: 'Esto anonimizará tu cuenta y eliminará tus ensayos, comentarios y datos personales. Tu suscripción se cancelará. Esto no se puede deshacer.',
  },
  'dashboard.data_requests.confirm_type_delete': {
    en: 'Type DELETE to confirm:',
    ar: 'اكتب DELETE للتأكيد:',
    es: 'Escribe DELETE para confirmar:',
  },
  'dashboard.data_requests.btn_cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'dashboard.data_requests.btn_confirm_deletion': {
    en: 'Confirm Deletion',
    ar: 'تأكيد الحذف',
    es: 'Confirmar eliminación',
  },
  'dashboard.data_requests.btn_erasure_submitting': {
    en: 'Submitting...',
    ar: 'جاري الإرسال...',
    es: 'Enviando...',
  },
  'dashboard.data_requests.request_submitted_title': {
    en: 'Request Submitted',
    ar: 'تم تقديم الطلب',
    es: 'Solicitud enviada',
  },
  'dashboard.data_requests.your_reference': {
    en: 'Your reference number',
    ar: 'رقم مرجعك',
    es: 'Tu número de referencia',
  },
  'dashboard.data_requests.estimated_completion': {
    en: 'Estimated completion:',
    ar: 'الإتمام المتوقع:',
    es: 'Finalización estimada:',
  },
  'dashboard.data_requests.gdpr_respond': {
    en: 'Under UK GDPR, we must respond within one calendar month of your request.',
    ar: 'بموجب اللائحة البريطانية GDPR، يجب أن نستجيب خلال شهر تقويمي واحد من طلبك.',
    es: 'En virtud del UK GDPR, debemos responder en el plazo de un mes natural desde tu solicitud.',
  },
  'dashboard.data_requests.btn_back': {
    en: 'Back to Data Requests',
    ar: 'رجوع لطلبات البيانات',
    es: 'Volver a las solicitudes de datos',
  },
  'dashboard.data_requests.btn_dashboard': {
    en: 'Dashboard',
    ar: 'لوحة التحكم',
    es: 'Panel de control',
  },
  'dashboard.data_requests.history_title': {
    en: 'Request History',
    ar: 'سجل الطلبات',
    es: 'Historial de solicitudes',
  },
  'dashboard.data_requests.history_desc': {
    en: 'Track the status of your data requests below.',
    ar: 'تابع حالة طلبات بياناتك أدناه.',
    es: 'Sigue el estado de tus solicitudes de datos a continuación.',
  },
  'dashboard.data_requests.history_loading': {
    en: 'Loading your requests...',
    ar: 'جاري تحميل طلباتك...',
    es: 'Cargando tus solicitudes...',
  },
  'dashboard.data_requests.history_empty': {
    en: 'You have not made any data requests yet.',
    ar: 'لم تُقدّم أي طلبات بيانات بعد.',
    es: 'Aún no has realizado ninguna solicitud de datos.',
  },
  'dashboard.data_requests.overdue': { en: 'Overdue', ar: 'متأخر', es: 'Atrasada' },
  'dashboard.data_requests.deadline': {
    en: 'Deadline:',
    ar: 'الموعد النهائي:',
    es: 'Fecha límite:',
  },
  'dashboard.data_requests.processing_title': {
    en: 'Processing times',
    ar: 'أوقات المعالجة',
    es: 'Tiempos de tramitación',
  },
  'dashboard.data_requests.processing_desc': {
    en: 'Under UK GDPR, we are required to respond to your request within one calendar month. In exceptional cases (complex or numerous requests), this may be extended by a further two months, but we will inform you within the first month if this is necessary.',
    ar: 'بموجب اللائحة البريطانية GDPR، يجب أن نستجيب لطلبك خلال شهر تقويمي واحد. في حالات استثنائية (طلبات معقدة أو كثيرة)، قد يُمدَّد بشهرين إضافيين، لكننا سنُعلمك خلال الشهر الأول إذا كان ذلك ضرورياً.',
    es: 'En virtud del UK GDPR, estamos obligados a responder a tu solicitud en el plazo de un mes natural. En casos excepcionales (solicitudes complejas o numerosas), este plazo puede ampliarse otros dos meses, pero te informaremos durante el primer mes si es necesario.',
  },
  'dashboard.data_requests.ico_complaint': {
    en: 'If you are not satisfied with our response, you have the right to lodge a complaint with the',
    ar: 'إذا لم تكن راضياً عن ردّنا، يحق لك تقديم شكوى إلى',
    es: 'Si no estás satisfecho con nuestra respuesta, tienes derecho a presentar una reclamación ante la',
  },
  'dashboard.data_requests.ico_name': {
    en: "Information Commissioner's Office (ICO)",
    ar: 'مكتب مفوّض المعلومات (ICO)',
    es: "Information Commissioner's Office (ICO)",
  },

  // ── dashboard/progress (parent/progress page) ─────────────────────────────
  'dashboard.parent_progress.back': {
    en: '← Back to Dashboard',
    ar: '← رجوع للوحة التحكم',
    es: '← Volver al panel de control',
  },
  'dashboard.parent_progress.title': {
    en: 'Student Progress',
    ar: 'تقدم الطالب',
    es: 'Progreso del estudiante',
  },
  'dashboard.parent_progress.subtitle': {
    en: "Track your child's learning journey and achievements",
    ar: 'تابع رحلة طفلك التعليمية وإنجازاته',
    es: 'Sigue la trayectoria de aprendizaje y los logros de tu hijo',
  },
  'dashboard.parent_progress.working_at': {
    en: 'Working At Grade',
    ar: 'الدرجة الحالية',
    es: 'Nivel actual',
  },
  'dashboard.parent_progress.predicted_grade': {
    en: 'Predicted Grade',
    ar: 'الدرجة المتوقعة',
    es: 'Nota prevista',
  },
  'dashboard.parent_progress.target_grade': {
    en: 'Target Grade',
    ar: 'الدرجة المستهدفة',
    es: 'Nota objetivo',
  },
  'dashboard.parent_progress.essays_written': {
    en: 'Essays Written',
    ar: 'المقالات المكتوبة',
    es: 'Ensayos escritos',
  },
  'dashboard.parent_progress.activities_this_week': {
    en: 'Activities This Week',
    ar: 'الأنشطة هذا الأسبوع',
    es: 'Actividades esta semana',
  },
  'dashboard.parent_progress.weekly_activity': {
    en: 'Weekly Activity',
    ar: 'النشاط الأسبوعي',
    es: 'Actividad semanal',
  },
  'dashboard.parent_progress.recent_work': {
    en: 'Recent Work',
    ar: 'الأعمال الأخيرة',
    es: 'Trabajo reciente',
  },
  'dashboard.parent_progress.student_info': {
    en: 'Student Info',
    ar: 'معلومات الطالب',
    es: 'Información del estudiante',
  },
  'dashboard.parent_progress.school': { en: 'School', ar: 'المدرسة', es: 'Centro' },
  'dashboard.parent_progress.year_group': {
    en: 'Year Group',
    ar: 'السنة الدراسية',
    es: 'Grupo de curso',
  },
  'dashboard.parent_progress.exam_board': {
    en: 'Exam Board',
    ar: 'لجنة الامتحان',
    es: 'Junta examinadora',
  },
  'dashboard.parent_progress.strengths': { en: 'Strengths', ar: 'نقاط القوة', es: 'Fortalezas' },
  'dashboard.parent_progress.areas_to_improve': {
    en: 'Areas to Improve',
    ar: 'مجالات التحسين',
    es: 'Áreas de mejora',
  },
  'dashboard.parent_progress.actions': { en: 'Actions', ar: 'الإجراءات', es: 'Acciones' },
  'dashboard.parent_progress.manage_reports': {
    en: 'Manage Weekly Reports',
    ar: 'إدارة التقارير الأسبوعية',
    es: 'Gestionar informes semanales',
  },
  'dashboard.parent_progress.contact_teacher': {
    en: 'Contact Teacher',
    ar: 'التواصل مع المعلم',
    es: 'Contactar con el profesor',
  },

  // ── dashboard/parent/settings ──────────────────────────────────────────────
  'dashboard.parent_settings.title': {
    en: 'Parent Settings',
    ar: 'إعدادات ولي الأمر',
    es: 'Ajustes de padres',
  },
  'dashboard.parent_settings.subtitle': {
    en: 'Manage your notifications, report preferences, and linked students.',
    ar: 'أدِر إشعاراتك وتفضيلات التقارير والطلاب المرتبطين.',
    es: 'Gestiona tus notificaciones, las preferencias de informes y los estudiantes vinculados.',
  },
  'dashboard.parent_settings.free_access_title': {
    en: 'Free Parent Access',
    ar: 'وصول ولي الأمر المجاني',
    es: 'Acceso gratuito para padres',
  },
  'dashboard.parent_settings.free_access_desc': {
    en: "Your parent dashboard is completely free and comes included with your child's paid subscription. You can monitor progress, receive weekly reports, and set target grades at no additional cost.",
    ar: 'لوحة تحكم ولي الأمر مجانية تماماً وتأتي مع اشتراك طفلك المدفوع. يمكنك متابعة التقدم وتلقي التقارير الأسبوعية وتحديد الدرجات المستهدفة بدون تكلفة إضافية.',
    es: 'Tu panel de padres es completamente gratuito y se incluye con la suscripción de pago de tu hijo. Puedes supervisar el progreso, recibir informes semanales y establecer notas objetivo sin coste adicional.',
  },
  'dashboard.parent_settings.notifications_title': {
    en: 'Email Notifications',
    ar: 'إشعارات البريد الإلكتروني',
    es: 'Notificaciones por correo electrónico',
  },
  'dashboard.parent_settings.notifications_desc': {
    en: 'Choose which email notifications you would like to receive.',
    ar: 'اختر إشعارات البريد الإلكتروني التي تريد استلامها.',
    es: 'Elige qué notificaciones por correo electrónico quieres recibir.',
  },
  'dashboard.parent_settings.notif_weekly_label': {
    en: 'Weekly progress report',
    ar: 'تقرير التقدم الأسبوعي',
    es: 'Informe semanal de progreso',
  },
  'dashboard.parent_settings.notif_weekly_desc': {
    en: "Receive a summary of your child's weekly activity, scores, and recommendations.",
    ar: 'استلم ملخصاً لنشاط طفلك الأسبوعي ودرجاته وتوصياته.',
    es: 'Recibe un resumen de la actividad semanal, las puntuaciones y las recomendaciones de tu hijo.',
  },
  'dashboard.parent_settings.notif_low_score_label': {
    en: 'Low score alerts',
    ar: 'تنبيهات الدرجات المنخفضة',
    es: 'Alertas de puntuación baja',
  },
  'dashboard.parent_settings.notif_low_score_desc': {
    en: 'Get notified when your child scores below 50% on an essay.',
    ar: 'احصل على إشعار عندما تكون درجة طفلك في مقال أقل من 50%.',
    es: 'Recibe una notificación cuando tu hijo saque menos del 50% en un ensayo.',
  },
  'dashboard.parent_settings.notif_inactivity_label': {
    en: 'Inactivity alerts',
    ar: 'تنبيهات الخمول',
    es: 'Alertas de inactividad',
  },
  'dashboard.parent_settings.notif_inactivity_desc': {
    en: "Get notified if your child hasn't used the platform for 5+ days.",
    ar: 'احصل على إشعار إذا لم يستخدم طفلك المنصة لأكثر من 5 أيام.',
    es: 'Recibe una notificación si tu hijo no ha usado la plataforma durante más de 5 días.',
  },
  'dashboard.parent_settings.notif_milestone_label': {
    en: 'Milestone celebrations',
    ar: 'الاحتفالات بالإنجازات',
    es: 'Celebración de hitos',
  },
  'dashboard.parent_settings.notif_milestone_desc': {
    en: 'Receive emails when your child reaches score milestones or completes achievements.',
    ar: 'استلم رسائل عندما يصل طفلك لمعالم الدرجات أو يُكمل الإنجازات.',
    es: 'Recibe correos cuando tu hijo alcance hitos de puntuación o complete logros.',
  },
  'dashboard.parent_settings.btn_save_notifications': {
    en: 'Save notification preferences',
    ar: 'حفظ تفضيلات الإشعارات',
    es: 'Guardar preferencias de notificaciones',
  },
  'dashboard.parent_settings.btn_saving': {
    en: 'Saving...',
    ar: 'جاري الحفظ...',
    es: 'Guardando...',
  },
  'dashboard.parent_settings.schedule_title': {
    en: 'Weekly Report Schedule',
    ar: 'جدول التقرير الأسبوعي',
    es: 'Programación del informe semanal',
  },
  'dashboard.parent_settings.schedule_desc': {
    en: "Choose when you'd like to receive your weekly progress report.",
    ar: 'اختر متى تريد استلام تقرير تقدمك الأسبوعي.',
    es: 'Elige cuándo quieres recibir tu informe semanal de progreso.',
  },
  'dashboard.parent_settings.day_of_week': {
    en: 'Day of week',
    ar: 'يوم الأسبوع',
    es: 'Día de la semana',
  },
  'dashboard.parent_settings.time': { en: 'Time', ar: 'الوقت', es: 'Hora' },
  'dashboard.parent_settings.btn_save_schedule': {
    en: 'Save report schedule',
    ar: 'حفظ جدول التقرير',
    es: 'Guardar programación del informe',
  },
  'dashboard.parent_settings.students_title': {
    en: 'Linked Students',
    ar: 'الطلاب المرتبطون',
    es: 'Estudiantes vinculados',
  },
  'dashboard.parent_settings.students_desc': {
    en: 'Manage the students linked to your parent account.',
    ar: 'أدِر الطلاب المرتبطين بحساب ولي الأمر.',
    es: 'Gestiona los estudiantes vinculados a tu cuenta de padre.',
  },
  'dashboard.parent_settings.btn_add_student': {
    en: 'Add Student',
    ar: 'إضافة طالب',
    es: 'Añadir estudiante',
  },
  'dashboard.parent_settings.link_new_student': {
    en: 'Link a new student',
    ar: 'ربط طالب جديد',
    es: 'Vincular un nuevo estudiante',
  },
  'dashboard.parent_settings.link_new_student_desc': {
    en: "Enter the email address associated with the student's account. They must have an active paid subscription.",
    ar: 'أدخل عنوان البريد الإلكتروني المرتبط بحساب الطالب. يجب أن يكون لديهم اشتراك مدفوع نشط.',
    es: 'Introduce la dirección de correo electrónico asociada a la cuenta del estudiante. Debe tener una suscripción de pago activa.',
  },
  'dashboard.parent_settings.btn_send_invitation': {
    en: 'Send invitation',
    ar: 'إرسال الدعوة',
    es: 'Enviar invitación',
  },
  'dashboard.parent_settings.btn_sending': {
    en: 'Sending...',
    ar: 'جاري الإرسال...',
    es: 'Enviando...',
  },
  'dashboard.parent_settings.btn_cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'dashboard.parent_settings.target_grades': {
    en: 'Target Grades',
    ar: 'الدرجات المستهدفة',
    es: 'Notas objetivo',
  },
  'dashboard.parent_settings.btn_edit_targets': {
    en: 'Edit targets',
    ar: 'تعديل الأهداف',
    es: 'Editar objetivos',
  },
  'dashboard.parent_settings.btn_save': { en: 'Save', ar: 'حفظ', es: 'Guardar' },
  'dashboard.parent_settings.no_students': {
    en: 'No students linked yet.',
    ar: 'لا يوجد طلاب مرتبطون بعد.',
    es: 'Aún no hay estudiantes vinculados.',
  },
  'dashboard.parent_settings.no_students_hint': {
    en: 'Click "Add Student" to link your child\'s account.',
    ar: 'اضغط "إضافة طالب" لربط حساب طفلك.',
    es: 'Haz clic en "Añadir estudiante" para vincular la cuenta de tu hijo.',
  },
  'dashboard.parent_settings.unlink_title': {
    en: 'Unlink student',
    ar: 'إلغاء ربط الطالب',
    es: 'Desvincular estudiante',
  },

  // ── dashboard/subscription/cancel ─────────────────────────────────────────
  'dashboard.cancel.step1_title': {
    en: 'Cancel Your Subscription',
    ar: 'إلغاء اشتراكك',
    es: 'Cancelar tu suscripción',
  },
  'dashboard.cancel.step1_desc': {
    en: 'Here is what will change if you cancel:',
    ar: 'إليك ما سيتغير إذا ألغيت الاشتراك:',
    es: 'Esto es lo que cambiará si cancelas:',
  },
  'dashboard.cancel.feature1': {
    en: 'AI-powered essay feedback on unlimited submissions',
    ar: 'تقييم المقالات بالذكاء الاصطناعي بعدد غير محدود من التسليمات',
    es: 'Comentarios de ensayos con IA en entregas ilimitadas',
  },
  'dashboard.cancel.feature2': {
    en: 'Detailed grammar, structure, and vocabulary analysis',
    ar: 'تحليل مفصّل للقواعد والبنية والمفردات',
    es: 'Análisis detallado de gramática, estructura y vocabulario',
  },
  'dashboard.cancel.feature3': {
    en: 'Progress tracking and revision insights',
    ar: 'تتبع التقدم وإحصاءات المراجعة',
    es: 'Seguimiento del progreso e información de repaso',
  },
  'dashboard.cancel.feature4': {
    en: 'Human review request access',
    ar: 'إمكانية طلب مراجعة بشرية',
    es: 'Acceso a solicitar revisión humana',
  },
  'dashboard.cancel.feature5': {
    en: 'Exam preparation resources and tools',
    ar: 'موارد وأدوات التحضير للامتحان',
    es: 'Recursos y herramientas de preparación para el examen',
  },
  'dashboard.cancel.access_note': {
    en: 'Your access will continue until the end of your current billing period. Your essays and data will be retained in accordance with our data retention policy.',
    ar: 'سيستمر وصولك حتى نهاية دورة الفوترة الحالية. ستُحتفظ بمقالاتك وبياناتك وفق سياسة الاحتفاظ بالبيانات.',
    es: 'Tu acceso continuará hasta el final de tu periodo de facturación actual. Tus ensayos y datos se conservarán conforme a nuestra política de conservación de datos.',
  },
  'dashboard.cancel.btn_keep': {
    en: 'Keep Subscription',
    ar: 'الإبقاء على الاشتراك',
    es: 'Mantener suscripción',
  },
  'dashboard.cancel.btn_continue': {
    en: 'Continue Cancellation',
    ar: 'متابعة الإلغاء',
    es: 'Continuar con la cancelación',
  },
  'dashboard.cancel.step2_title': {
    en: 'Quick Feedback (Optional)',
    ar: 'ملاحظات سريعة (اختياري)',
    es: 'Comentarios rápidos (opcional)',
  },
  'dashboard.cancel.step2_desc': {
    en: 'This step is entirely optional. Your feedback helps us improve.',
    ar: 'هذه الخطوة اختيارية تماماً. ملاحظاتك تساعدنا على التحسين.',
    es: 'Este paso es totalmente opcional. Tus comentarios nos ayudan a mejorar.',
  },
  'dashboard.cancel.feedback_label': {
    en: "Anything else you'd like to share? (Optional)",
    ar: 'هل هناك ما تريد إضافته؟ (اختياري)',
    es: '¿Hay algo más que quieras compartir? (Opcional)',
  },
  'dashboard.cancel.feedback_placeholder': {
    en: 'Your thoughts...',
    ar: 'أفكارك...',
    es: 'Tus comentarios...',
  },
  'dashboard.cancel.btn_back': { en: 'Back', ar: 'رجوع', es: 'Atrás' },
  'dashboard.cancel.btn_skip': {
    en: 'Skip & Continue',
    ar: 'تخطّ وتابع',
    es: 'Omitir y continuar',
  },
  'dashboard.cancel.btn_submit_continue': {
    en: 'Submit & Continue',
    ar: 'أرسل وتابع',
    es: 'Enviar y continuar',
  },
  'dashboard.cancel.step3_title': {
    en: 'Confirm Cancellation',
    ar: 'تأكيد الإلغاء',
    es: 'Confirmar cancelación',
  },
  'dashboard.cancel.step3_desc': {
    en: 'Please review the details below before confirming.',
    ar: 'راجع التفاصيل أدناه قبل التأكيد.',
    es: 'Revisa los detalles a continuación antes de confirmar.',
  },
  'dashboard.cancel.what_happens_next': {
    en: 'What happens next',
    ar: 'ما سيحدث بعد ذلك',
    es: 'Qué ocurre a continuación',
  },
  'dashboard.cancel.access_continues': {
    en: 'Access continues until period end',
    ar: 'الوصول مستمر حتى نهاية الفترة',
    es: 'El acceso continúa hasta el final del periodo',
  },
  'dashboard.cancel.future_charges': {
    en: 'Future charges',
    ar: 'الرسوم المستقبلية',
    es: 'Cargos futuros',
  },
  'dashboard.cancel.no_charges': {
    en: 'No further charges',
    ar: 'لا رسوم إضافية',
    es: 'No habrá más cargos',
  },
  'dashboard.cancel.your_data': { en: 'Your data', ar: 'بياناتك', es: 'Tus datos' },
  'dashboard.cancel.retained': {
    en: 'Retained per privacy policy',
    ar: 'محتفظ بها وفق سياسة الخصوصية',
    es: 'Conservados según la política de privacidad',
  },
  'dashboard.cancel.cooling_off': {
    en: 'Cooling-off information:',
    ar: 'معلومات فترة التفكير:',
    es: 'Información sobre el periodo de desistimiento:',
  },
  'dashboard.cancel.btn_go_back': { en: 'Go Back', ar: 'رجوع', es: 'Atrás' },
  'dashboard.cancel.btn_cancelling': {
    en: 'Cancelling...',
    ar: 'جاري الإلغاء...',
    es: 'Cancelando...',
  },
  'dashboard.cancel.btn_confirm': {
    en: 'Confirm Cancellation',
    ar: 'تأكيد الإلغاء',
    es: 'Confirmar cancelación',
  },
  'dashboard.cancel.step4_title': {
    en: 'Subscription Cancelled',
    ar: 'تم إلغاء الاشتراك',
    es: 'Suscripción cancelada',
  },
  'dashboard.cancel.step4_desc': {
    en: 'Your subscription has been cancelled successfully.',
    ar: 'تم إلغاء اشتراكك بنجاح.',
    es: 'Tu suscripción se ha cancelado correctamente.',
  },
  'dashboard.cancel.access_until': { en: 'Access until', ar: 'الوصول حتى', es: 'Acceso hasta' },
  'dashboard.cancel.access_end_fallback': {
    en: 'End of current billing period',
    ar: 'نهاية دورة الفوترة الحالية',
    es: 'Fin del periodo de facturación actual',
  },
  'dashboard.cancel.your_essays': { en: 'Your essays', ar: 'مقالاتك', es: 'Tus ensayos' },
  'dashboard.cancel.essays_saved': {
    en: 'Saved and accessible',
    ar: 'محفوظة ومتاحة',
    es: 'Guardados y accesibles',
  },
  'dashboard.cancel.data_note': {
    en: 'You can request a copy or deletion of your data at any time from your',
    ar: 'يمكنك طلب نسخة أو حذف بياناتك في أي وقت من',
    es: 'Puedes solicitar una copia o la eliminación de tus datos en cualquier momento desde tus',
  },
  'dashboard.cancel.account_settings': {
    en: 'account settings',
    ar: 'إعدادات الحساب',
    es: 'ajustes de cuenta',
  },
  'dashboard.cancel.btn_return': {
    en: 'Return to Dashboard',
    ar: 'رجوع للوحة التحكم',
    es: 'Volver al panel de control',
  },
  'dashboard.cancel.btn_resubscribe': {
    en: 'Resubscribe',
    ar: 'الاشتراك مجدداً',
    es: 'Volver a suscribirse',
  },

  // ── dashboard/teacher/resources/differentiation ────────────────────────────
  'dashboard.differentiation.back': {
    en: '← Back to Resources',
    ar: '← رجوع للموارد',
    es: '← Volver a los recursos',
  },
  'dashboard.differentiation.title': {
    en: 'Differentiation Guide for English',
    ar: 'دليل التمايز في اللغة الإنجليزية',
    es: 'Guía de diferenciación para Inglés',
  },
  'dashboard.differentiation.subtitle': {
    en: 'Practical strategies for differentiating English lessons by ability, need, and learning style. Includes PP, SEND, and EAL guidance aligned to Ofsted expectations.',
    ar: 'استراتيجيات عملية لتمايز دروس اللغة الإنجليزية حسب القدرة والاحتياج وأسلوب التعلم. يشمل التوجيه الخاص بـ PP وSEND وEAL وفق توقعات Ofsted.',
    es: 'Estrategias prácticas para diferenciar las clases de inglés según la capacidad, las necesidades y el estilo de aprendizaje. Incluye orientación sobre PP, SEND y EAL alineada con las expectativas de Ofsted.',
  },
  'dashboard.differentiation.by_ability': {
    en: 'Differentiation by Ability',
    ar: 'التمايز حسب القدرة',
    es: 'Diferenciación por capacidad',
  },
  'dashboard.differentiation.lower_ability': {
    en: 'Lower Ability',
    ar: 'المستوى الأدنى',
    es: 'Capacidad más baja',
  },
  'dashboard.differentiation.middle_ability': {
    en: 'Middle Ability',
    ar: 'المستوى المتوسط',
    es: 'Capacidad media',
  },
  'dashboard.differentiation.higher_ability': {
    en: 'Higher Ability',
    ar: 'المستوى المتقدم',
    es: 'Capacidad más alta',
  },
  'dashboard.differentiation.example_task': {
    en: 'Example: Differentiated Task',
    ar: 'مثال: مهمة متمايزة',
    es: 'Ejemplo: tarea diferenciada',
  },
  'dashboard.differentiation.task_question_prefix': { en: 'Q:', ar: 'س:', es: 'P:' },
  'dashboard.differentiation.target_prefix': { en: 'Target:', ar: 'الهدف:', es: 'Objetivo:' },
  'dashboard.differentiation.pp_send_eal': {
    en: 'PP, SEND & EAL Strategies',
    ar: 'استراتيجيات PP وSEND وEAL',
    es: 'Estrategias de PP, SEND y EAL',
  },

  // ── dashboard/teacher/resources/creative-writing ───────────────────────────
  'dashboard.creative_writing.back': {
    en: '← Back to Resources',
    ar: '← رجوع للموارد',
    es: '← Volver a los recursos',
  },
  'dashboard.creative_writing.title': {
    en: 'Creative Writing Masterclass',
    ar: 'درس الكتابة الإبداعية الاحترافي',
    es: 'Clase magistral de escritura creativa',
  },
  'dashboard.creative_writing.subtitle': {
    en: 'Model texts, annotated examples, and structured tasks for teaching descriptive and narrative writing at GCSE level. Suitable for AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
    ar: 'نصوص نموذجية وأمثلة مشروحة ومهام منظّمة لتعليم الكتابة الوصفية والسردية على مستوى GCSE. مناسبة لـ AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
    es: 'Textos modelo, ejemplos anotados y tareas estructuradas para enseñar escritura descriptiva y narrativa a nivel de GCSE. Adecuado para AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
  },
  'dashboard.creative_writing.technique_annotations': {
    en: 'Technique Annotations',
    ar: 'شروحات الأساليب',
    es: 'Anotaciones de técnicas',
  },
  'dashboard.creative_writing.technique_toolkit': {
    en: 'Technique Toolkit for Students',
    ar: 'أدوات الأسلوب للطلاب',
    es: 'Caja de herramientas de técnicas para estudiantes',
  },
  'dashboard.creative_writing.effect_prefix': { en: 'Effect:', ar: 'التأثير:', es: 'Efecto:' },
  'dashboard.creative_writing.use_when': {
    en: 'Use when:',
    ar: 'استخدمه عندما:',
    es: 'Úsalo cuando:',
  },
  'dashboard.creative_writing.structured_tasks': {
    en: 'Structured Writing Tasks',
    ar: 'مهام كتابية منظّمة',
    es: 'Tareas de escritura estructuradas',
  },
  'dashboard.creative_writing.success_criteria': {
    en: 'Success Criteria',
    ar: 'معايير النجاح',
    es: 'Criterios de éxito',
  },

  // ── dashboard/settings/parent-link ────────────────────────────────────────
  'dashboard.parent_link.settings_breadcrumb': { en: 'Settings', ar: 'الإعدادات', es: 'Ajustes' },
  'dashboard.parent_link.parent_linking_breadcrumb': {
    en: 'Parent Linking',
    ar: 'ربط ولي الأمر',
    es: 'Vinculación de padres',
  },
  'dashboard.parent_link.title_student': {
    en: 'Invite a Parent',
    ar: 'دعوة ولي الأمر',
    es: 'Invitar a un padre',
  },
  'dashboard.parent_link.title_parent': {
    en: 'Link to Student',
    ar: 'الربط بطالب',
    es: 'Vincular a un estudiante',
  },
  'dashboard.parent_link.title_generic': {
    en: 'Parent Linking',
    ar: 'ربط ولي الأمر',
    es: 'Vinculación de padres',
  },
  'dashboard.parent_link.subtitle_student': {
    en: 'Connect your parent or guardian so they can track your progress.',
    ar: 'اربط والديك أو وليّ أمرك لمتابعة تقدمك.',
    es: 'Conecta a tu padre, madre o tutor para que pueda seguir tu progreso.',
  },
  'dashboard.parent_link.subtitle_parent': {
    en: "Link to your child's account to monitor their study progress.",
    ar: 'اربط بحساب طفلك لمتابعة تقدمه الدراسي.',
    es: 'Vincúlate a la cuenta de tu hijo para supervisar su progreso de estudio.',
  },
  'dashboard.parent_link.subtitle_generic': {
    en: 'Manage parent-student connections.',
    ar: 'أدِر روابط ولي الأمر والطالب.',
    es: 'Gestiona las conexiones entre padres y estudiantes.',
  },
  'dashboard.parent_link.invite_title': {
    en: 'Invite a Parent',
    ar: 'دعوة ولي الأمر',
    es: 'Invitar a un padre',
  },
  'dashboard.parent_link.invite_desc': {
    en: 'Generate an invite link and share it with your parent or guardian. They will be able to view your progress reports and scores for free.',
    ar: 'أنشئ رابط دعوة وشاركه مع والديك أو وليّ أمرك. سيتمكنون من عرض تقارير تقدمك ودرجاتك مجاناً.',
    es: 'Genera un enlace de invitación y compártelo con tu padre, madre o tutor. Podrán ver tus informes de progreso y tus puntuaciones de forma gratuita.',
  },
  'dashboard.parent_link.invite_alert': {
    en: 'Your parent will not be able to read your essays. They can only see scores, progress, and weekly summaries.',
    ar: 'لن يتمكن ولي أمرك من قراءة مقالاتك. يمكنه فقط رؤية الدرجات والتقدم والملخصات الأسبوعية.',
    es: 'Tu padre o madre no podrá leer tus ensayos. Solo puede ver las puntuaciones, el progreso y los resúmenes semanales.',
  },
  'dashboard.parent_link.your_invite_code': {
    en: 'Your invite code',
    ar: 'رمز الدعوة الخاص بك',
    es: 'Tu código de invitación',
  },
  'dashboard.parent_link.expires': { en: 'Expires:', ar: 'ينتهي:', es: 'Caduca:' },
  'dashboard.parent_link.btn_copy_code': { en: 'Copy code', ar: 'نسخ الرمز', es: 'Copiar código' },
  'dashboard.parent_link.btn_copied': { en: 'Copied', ar: 'تم النسخ', es: 'Copiado' },
  'dashboard.parent_link.btn_copy_link': {
    en: 'Copy invite link',
    ar: 'نسخ رابط الدعوة',
    es: 'Copiar enlace de invitación',
  },
  'dashboard.parent_link.btn_generate_new': {
    en: 'Generate new code',
    ar: 'إنشاء رمز جديد',
    es: 'Generar código nuevo',
  },
  'dashboard.parent_link.btn_generating': {
    en: 'Generating...',
    ar: 'جاري الإنشاء...',
    es: 'Generando...',
  },
  'dashboard.parent_link.btn_generate': {
    en: 'Generate invite link',
    ar: 'إنشاء رابط دعوة',
    es: 'Generar enlace de invitación',
  },
  'dashboard.parent_link.new_code_note': {
    en: 'Generating a new code will invalidate the current one.',
    ar: 'إنشاء رمز جديد سيُبطل الرمز الحالي.',
    es: 'Generar un código nuevo invalidará el actual.',
  },
  'dashboard.parent_link.linked_parents_title': {
    en: 'Linked Parents',
    ar: 'أولياء الأمور المرتبطون',
    es: 'Padres vinculados',
  },
  'dashboard.parent_link.no_parents': {
    en: 'No parent is currently linked to your account. Generate an invite above to get started.',
    ar: 'لا يوجد ولي أمر مرتبط بحسابك حالياً. أنشئ دعوة أعلاه للبدء.',
    es: 'Actualmente no hay ningún padre vinculado a tu cuenta. Genera una invitación arriba para empezar.',
  },
  'dashboard.parent_link.linked_label': { en: 'Linked', ar: 'مرتبط منذ', es: 'Vinculado' },
  'dashboard.parent_link.btn_remove': { en: 'Remove', ar: 'إزالة', es: 'Eliminar' },
  'dashboard.parent_link.btn_removing': {
    en: 'Removing...',
    ar: 'جاري الإزالة...',
    es: 'Eliminando...',
  },
  'dashboard.parent_link.link_student_title': {
    en: 'Link to Student',
    ar: 'الربط بطالب',
    es: 'Vincular a un estudiante',
  },
  'dashboard.parent_link.link_student_desc': {
    en: 'Enter the invite code your child shared with you to link your accounts. This gives you free access to their progress reports.',
    ar: 'أدخل رمز الدعوة الذي شاركه طفلك معك لربط الحسابين. هذا يمنحك وصولاً مجانياً لتقارير تقدمه.',
    es: 'Introduce el código de invitación que tu hijo ha compartido contigo para vincular vuestras cuentas. Esto te da acceso gratuito a sus informes de progreso.',
  },
  'dashboard.parent_link.invite_code_label': {
    en: 'Invite code',
    ar: 'رمز الدعوة',
    es: 'Código de invitación',
  },
  'dashboard.parent_link.btn_link': {
    en: 'Link to student',
    ar: 'الربط بالطالب',
    es: 'Vincular al estudiante',
  },
  'dashboard.parent_link.btn_linking': {
    en: 'Linking...',
    ar: 'جاري الربط...',
    es: 'Vinculando...',
  },
  'dashboard.parent_link.no_code_hint': {
    en: "Don't have a code? Ask your child to generate one from their account settings.",
    ar: 'ما عندك رمز؟ اطلب من طفلك إنشاء واحد من إعدادات حسابه.',
    es: '¿No tienes un código? Pídele a tu hijo que genere uno desde los ajustes de su cuenta.',
  },
  'dashboard.parent_link.linked_students_title': {
    en: 'Linked Students',
    ar: 'الطلاب المرتبطون',
    es: 'Estudiantes vinculados',
  },
  'dashboard.parent_link.no_students': {
    en: 'You are not linked to any students yet. Use an invite code above to get started.',
    ar: 'أنت غير مرتبط بأي طلاب بعد. استخدم رمز دعوة أعلاه للبدء.',
    es: 'Aún no estás vinculado a ningún estudiante. Usa un código de invitación arriba para empezar.',
  },
  'dashboard.parent_link.active_badge': { en: 'Active', ar: 'نشط', es: 'Activo' },
  'dashboard.parent_link.no_subscription': {
    en: 'No subscription',
    ar: 'لا يوجد اشتراك',
    es: 'Sin suscripción',
  },
  'dashboard.parent_link.unsupported_role': {
    en: 'Parent linking is only available for student and parent accounts.',
    ar: 'ربط ولي الأمر متاح فقط لحسابات الطلاب وأولياء الأمور.',
    es: 'La vinculación de padres solo está disponible para cuentas de estudiante y de padre.',
  },

  // ── dashboard/teacher/resources/lesson-plans ──────────────────────────────
  'dashboard.lesson_plans.back': {
    en: '← Back to Resources',
    ar: '← رجوع للموارد',
    es: '← Volver a los recursos',
  },
  'dashboard.lesson_plans.overview': { en: 'Overview', ar: 'نظرة عامة', es: 'Visión general' },
  'dashboard.lesson_plans.objectives': {
    en: 'Learning Objectives',
    ar: 'أهداف التعلم',
    es: 'Objetivos de aprendizaje',
  },
  'dashboard.lesson_plans.starter_label': {
    en: 'Starter (5-10 mins)',
    ar: 'نشاط البداية (5-10 دقائق)',
    es: 'Actividad inicial (5-10 min)',
  },
  'dashboard.lesson_plans.main_activities': {
    en: 'Main Activities',
    ar: 'الأنشطة الرئيسية',
    es: 'Actividades principales',
  },
  'dashboard.lesson_plans.plenary_label': {
    en: 'Plenary (5-10 mins)',
    ar: 'الختام (5-10 دقائق)',
    es: 'Cierre (5-10 min)',
  },
  'dashboard.lesson_plans.differentiation_label': {
    en: 'Differentiation',
    ar: 'التمايز',
    es: 'Diferenciación',
  },
  'dashboard.lesson_plans.resources_needed': {
    en: 'Resources Needed',
    ar: 'الموارد المطلوبة',
    es: 'Recursos necesarios',
  },
  'dashboard.lesson_plans.assessment_title': {
    en: 'Assessment Opportunities',
    ar: 'فرص التقييم',
    es: 'Oportunidades de evaluación',
  },
  'dashboard.lesson_plans.cross_curricular': {
    en: 'Cross-Curricular Links',
    ar: 'الروابط عبر المناهج',
    es: 'Vínculos interdisciplinares',
  },

  // ── dashboard/parent/progress (full) ──────────────────────────────────────
  'dashboard.parent_progress_detailed.title': {
    en: 'Detailed Progress',
    ar: 'التقدم المفصّل',
    es: 'Progreso detallado',
  },
  'dashboard.parent_progress_detailed.subtitle_template': {
    en: "Track {name}'s learning journey over time.",
    ar: 'تابع رحلة {name} التعليمية عبر الزمن.',
    es: 'Sigue la trayectoria de aprendizaje de {name} a lo largo del tiempo.',
  },
  'dashboard.parent_progress_detailed.avg_score_trend': {
    en: 'Average Score Trend',
    ar: 'مسار متوسط الدرجة',
    es: 'Tendencia de la puntuación media',
  },
  'dashboard.parent_progress_detailed.essays_per_week': {
    en: 'Essays Completed Per Week',
    ar: 'المقالات المكتملة في الأسبوع',
    es: 'Ensayos completados por semana',
  },
  'dashboard.parent_progress_detailed.time_studying': {
    en: 'Time Spent Studying (minutes)',
    ar: 'وقت الدراسة (بالدقائق)',
    es: 'Tiempo dedicado al estudio (minutos)',
  },
  'dashboard.parent_progress_detailed.strengths_radar': {
    en: 'Strengths Radar',
    ar: 'رادار نقاط القوة',
    es: 'Radar de fortalezas',
  },
  'dashboard.parent_progress_detailed.areas_improvement': {
    en: 'Areas for Improvement',
    ar: 'مجالات التحسين',
    es: 'Áreas de mejora',
  },
  'dashboard.parent_progress_detailed.recommended_path': {
    en: 'Recommended Learning Path',
    ar: 'مسار التعلم الموصى به',
    es: 'Ruta de aprendizaje recomendada',
  },
  'dashboard.parent_progress_detailed.grades_comparison': {
    en: 'Working At Grade, Predicted Grade & Target',
    ar: 'الدرجة الحالية والمتوقعة والمستهدفة',
    es: 'Nivel actual, nota prevista y objetivo',
  },
  'dashboard.parent_progress_detailed.col_subject': { en: 'Subject', ar: 'المادة', es: 'Materia' },
  'dashboard.parent_progress_detailed.col_working_at': {
    en: 'Working At',
    ar: 'الدرجة الحالية',
    es: 'Nivel actual',
  },
  'dashboard.parent_progress_detailed.col_predicted': {
    en: 'Predicted',
    ar: 'المتوقعة',
    es: 'Prevista',
  },
  'dashboard.parent_progress_detailed.col_target': {
    en: 'Target',
    ar: 'المستهدفة',
    es: 'Objetivo',
  },
  'dashboard.parent_progress_detailed.col_status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'dashboard.parent_progress_detailed.on_track': {
    en: 'On track',
    ar: 'على المسار',
    es: 'En el buen camino',
  },
  'dashboard.parent_progress_detailed.above_target': {
    en: 'Above target',
    ar: 'فوق الهدف',
    es: 'Por encima del objetivo',
  },

  // ── dashboard/teacher/resources/mark-scheme ───────────────────────────────
  'dashboard.mark_scheme.back': {
    en: '← Back to Resources',
    ar: '← رجوع للموارد',
    es: '← Volver a los recursos',
  },
  'dashboard.mark_scheme.title': {
    en: 'AQA English Literature Marking Guide',
    ar: 'دليل تصحيح AQA للأدب الإنجليزي',
    es: 'Guía de corrección de AQA English Literature',
  },
  'dashboard.mark_scheme.subtitle': {
    en: 'A teacher-friendly breakdown of the AQA GCSE English Literature 8702 marking guide with annotated student examples at each band level.',
    ar: 'تفصيل مخصص للمعلمين لدليل تصحيح GCSE الأدب الإنجليزي AQA 8702 مع أمثلة مشروحة لطلاب في كل مستوى.',
    es: 'Un desglose accesible para profesores de la guía de corrección de AQA GCSE English Literature 8702 con ejemplos de estudiantes anotados en cada nivel de Band.',
  },
  'dashboard.mark_scheme.ao_glance_title': {
    en: 'Assessment Objectives at a Glance',
    ar: 'الأهداف التقييمية في لمحة',
    es: 'Objetivos de evaluación de un vistazo',
  },
  'dashboard.mark_scheme.bands_title': {
    en: 'Band Descriptors with Student Examples',
    ar: 'واصفات المستويات مع أمثلة طلابية',
    es: 'Descriptores de Band con ejemplos de estudiantes',
  },
  'dashboard.mark_scheme.student_example': {
    en: 'Example Student Response (An Inspector Calls)',
    ar: 'مثال استجابة طالب (An Inspector Calls)',
    es: 'Ejemplo de respuesta de estudiante (An Inspector Calls)',
  },
  'dashboard.mark_scheme.errors_title': {
    en: 'Common Student Errors & How to Fix Them',
    ar: 'الأخطاء الشائعة لدى الطلاب وكيفية تصحيحها',
    es: 'Errores frecuentes de los estudiantes y cómo corregirlos',
  },
  'dashboard.mark_scheme.fix_prefix': { en: 'Fix:', ar: 'الحل:', es: 'Solución:' },
  'dashboard.mark_scheme.tips_title': {
    en: 'Quick Marking Tips',
    ar: 'نصائح تصحيح سريعة',
    es: 'Consejos rápidos de corrección',
  },

  // ── toolkit/test-builder ──────────────────────────────────────────────────
  'toolkit.test_builder.back': {
    en: 'Back to Toolkit',
    ar: 'رجوع للأدوات',
    es: 'Volver a las herramientas',
  },
  'toolkit.test_builder.title': {
    en: 'AI Test Builder',
    ar: 'منشئ الاختبارات بالذكاء الاصطناعي',
    es: 'Creador de pruebas con IA',
  },
  'toolkit.test_builder.subtitle': {
    en: 'Generate custom tests and score them with GCSE grade equivalents',
    ar: 'أنشئ اختبارات مخصصة وقيّمها بدرجات GCSE المعادلة',
    es: 'Genera pruebas personalizadas y puntúalas con sus equivalencias de notas de GCSE',
  },
  'toolkit.test_builder.label_topic': {
    en: 'Topic / Text',
    ar: 'الموضوع / النص',
    es: 'Tema / Texto',
  },
  'toolkit.test_builder.option_select_topic': {
    en: 'Select a topic...',
    ar: 'اختر موضوعاً...',
    es: 'Selecciona un tema...',
  },
  'toolkit.test_builder.group_set_texts': {
    en: 'Set Texts',
    ar: 'النصوص المقررة',
    es: 'Textos prescritos',
  },
  'toolkit.test_builder.group_general': {
    en: 'General Topics',
    ar: 'المواضيع العامة',
    es: 'Temas generales',
  },
  'toolkit.test_builder.topic_language_analysis': {
    en: 'Language Analysis',
    ar: 'تحليل اللغة',
    es: 'Análisis del lenguaje',
  },
  'toolkit.test_builder.topic_creative_writing': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
    es: 'Escritura creativa',
  },
  'toolkit.test_builder.topic_literary_techniques': {
    en: 'Literary Techniques',
    ar: 'الأساليب الأدبية',
    es: 'Técnicas literarias',
  },
  'toolkit.test_builder.topic_exam_technique': {
    en: 'Exam Technique',
    ar: 'تقنية الامتحان',
    es: 'Técnica de examen',
  },
  'toolkit.test_builder.label_question_count': {
    en: 'Number of Questions',
    ar: 'عدد الأسئلة',
    es: 'Número de preguntas',
  },
  'toolkit.test_builder.questions_suffix': { en: 'questions', ar: 'أسئلة', es: 'preguntas' },
  'toolkit.test_builder.btn_generate': {
    en: 'Generate Test',
    ar: 'إنشاء الاختبار',
    es: 'Generar prueba',
  },
  'toolkit.test_builder.loading': {
    en: 'Generating your custom test...',
    ar: 'جاري إنشاء اختبارك المخصص...',
    es: 'Generando tu prueba personalizada...',
  },
  'toolkit.test_builder.label_mcq': { en: 'MCQ', ar: 'خيارات متعددة', es: 'Opción múltiple' },
  'toolkit.test_builder.label_short_answer': {
    en: 'Short Answer',
    ar: 'إجابة قصيرة',
    es: 'Respuesta corta',
  },
  'toolkit.test_builder.placeholder_short_answer': {
    en: 'Type your answer here...',
    ar: 'اكتب إجابتك هنا...',
    es: 'Escribe tu respuesta aquí...',
  },
  'toolkit.test_builder.btn_previous': { en: 'Previous', ar: 'السابق', es: 'Anterior' },
  'toolkit.test_builder.btn_next': { en: 'Next', ar: 'التالي', es: 'Siguiente' },
  'toolkit.test_builder.btn_submit': {
    en: 'Submit Test',
    ar: 'تسليم الاختبار',
    es: 'Enviar prueba',
  },
  'toolkit.test_builder.your_result': { en: 'Your Result', ar: 'نتيجتك', es: 'Tu resultado' },
  'toolkit.test_builder.correct_of': { en: 'correct', ar: 'صحيحة', es: 'correctas' },
  'toolkit.test_builder.btn_download_pdf': {
    en: 'Download as PDF',
    ar: 'تحميل كـ PDF',
    es: 'Descargar como PDF',
  },
  'toolkit.test_builder.btn_save_materials': {
    en: 'Save to My Materials',
    ar: 'حفظ في موادي',
    es: 'Guardar en mis materiales',
  },
  'toolkit.test_builder.btn_new_test': { en: 'New Test', ar: 'اختبار جديد', es: 'Nueva prueba' },
  'toolkit.test_builder.review_answers': {
    en: 'Review Answers',
    ar: 'مراجعة الإجابات',
    es: 'Revisar respuestas',
  },
  'toolkit.test_builder.your_answer': { en: 'Your answer:', ar: 'إجابتك:', es: 'Tu respuesta:' },
  'toolkit.test_builder.not_answered': { en: 'Not answered', ar: 'لم تُجَب', es: 'Sin responder' },
  'toolkit.test_builder.correct_answer': {
    en: 'Correct answer:',
    ar: 'الإجابة الصحيحة:',
    es: 'Respuesta correcta:',
  },

  // ── toolkit/progress ──────────────────────────────────────────────────────
  'toolkit.progress.back': {
    en: 'Back to Toolkit',
    ar: 'رجوع للأدوات',
    es: 'Volver a las herramientas',
  },
  'toolkit.progress.title': { en: 'My Progress', ar: 'تقدمي', es: 'Mi progreso' },
  'toolkit.progress.subtitle': {
    en: 'Track your learning journey and see where to focus next',
    ar: 'تابع رحلتك التعليمية وتعرّف على ما تحتاج التركيز عليه',
    es: 'Sigue tu trayectoria de aprendizaje y descubre en qué centrarte a continuación',
  },
  'toolkit.progress.overall_stats': {
    en: 'Overall Stats',
    ar: 'الإحصاءات الكلية',
    es: 'Estadísticas generales',
  },
  'toolkit.progress.label_poems': {
    en: 'Poems Studied',
    ar: 'القصائد المدروسة',
    es: 'Poemas estudiados',
  },
  'toolkit.progress.label_quizzes': {
    en: 'Quizzes Taken',
    ar: 'الاختبارات المنجزة',
    es: 'Cuestionarios realizados',
  },
  'toolkit.progress.label_games': {
    en: 'Games Played',
    ar: 'الألعاب التي لعبتها',
    es: 'Juegos jugados',
  },
  'toolkit.progress.label_essays': {
    en: 'Essays Marked',
    ar: 'المقالات المصحَّحة',
    es: 'Ensayos corregidos',
  },
  'toolkit.progress.label_streak': {
    en: 'Day Streak',
    ar: 'أيام الاستمرارية',
    es: 'Racha de días',
  },
  'toolkit.progress.grade_predictor': {
    en: 'Grade Predictor',
    ar: 'متنبئ الدرجة',
    es: 'Predictor de notas',
  },
  'toolkit.progress.predicted_gcse': {
    en: 'Predicted GCSE Grade',
    ar: 'درجة GCSE المتوقعة',
    es: 'Nota de GCSE prevista',
  },
  'toolkit.progress.based_on_scores': {
    en: 'scores with an average of',
    ar: 'درجات بمتوسط',
    es: 'puntuaciones con una media de',
  },
  'toolkit.progress.take_more_quizzes': {
    en: 'take more quizzes for a more accurate prediction',
    ar: 'خذ المزيد من الاختبارات للحصول على توقع أدق',
    es: 'haz más cuestionarios para obtener una predicción más precisa',
  },
  'toolkit.progress.no_scores': {
    en: 'No score data yet. Take quizzes and play games to see your predicted grade.',
    ar: 'لا توجد بيانات درجات بعد. خذ اختبارات والعب ألعاباً لترى درجتك المتوقعة.',
    es: 'Aún no hay datos de puntuación. Haz cuestionarios y juega para ver tu nota prevista.',
  },
  'toolkit.progress.btn_take_quiz': {
    en: 'Take a Quiz',
    ar: 'خذ اختباراً',
    es: 'Hacer un cuestionario',
  },
  'toolkit.progress.streak_tracker': {
    en: 'Streak Tracker',
    ar: 'متتبع الاستمرارية',
    es: 'Seguidor de rachas',
  },
  'toolkit.progress.streak_day': { en: 'day', ar: 'يوم', es: 'día' },
  'toolkit.progress.streak_days': { en: 'days', ar: 'أيام', es: 'días' },
  'toolkit.progress.streak_amazing': {
    en: 'Amazing streak! Keep it going!',
    ar: 'سلسلة مذهلة! واصل عليها!',
    es: '¡Racha increíble! ¡Sigue así!',
  },
  'toolkit.progress.streak_good': {
    en: 'Good consistency! Push for a week!',
    ar: 'انتظام جيد! اهدف لأسبوع كامل!',
    es: '¡Buena constancia! ¡Aspira a una semana!',
  },
  'toolkit.progress.streak_building': {
    en: 'You are building a habit. Come back tomorrow!',
    ar: 'أنت تبني عادة. ارجع غداً!',
    es: 'Estás creando un hábito. ¡Vuelve mañana!',
  },
  'toolkit.progress.streak_start': {
    en: 'Start studying today to begin your streak.',
    ar: 'ابدأ الدراسة اليوم لتبدأ سلسلتك.',
    es: 'Empieza a estudiar hoy para iniciar tu racha.',
  },
  'toolkit.progress.topic_breakdown': {
    en: 'Topic Breakdown',
    ar: 'تفصيل الموضوعات',
    es: 'Desglose por tema',
  },
  'toolkit.progress.strengths': { en: 'Strengths', ar: 'نقاط القوة', es: 'Fortalezas' },
  'toolkit.progress.strengths_empty': {
    en: 'Score 80%+ on a topic to see it here.',
    ar: 'سجّل 80% أو أكثر في موضوع لتراه هنا.',
    es: 'Saca un 80% o más en un tema para verlo aquí.',
  },
  'toolkit.progress.areas_improve': {
    en: 'Areas to Improve',
    ar: 'مجالات التحسين',
    es: 'Áreas de mejora',
  },
  'toolkit.progress.areas_empty': {
    en: 'Topics scoring below 60% will appear here with improvement links.',
    ar: 'ستظهر هنا الموضوعات التي تقل درجتها عن 60% مع روابط تحسين.',
    es: 'Los temas con una puntuación inferior al 60% aparecerán aquí con enlaces de mejora.',
  },
  'toolkit.progress.improve_this': { en: 'Improve this', ar: 'حسّن هذا', es: 'Mejorar esto' },
  'toolkit.progress.study_history': {
    en: 'Study History',
    ar: 'سجل الدراسة',
    es: 'Historial de estudio',
  },
  'toolkit.progress.study_history_empty': {
    en: 'Your study activity will appear here as you use the platform.',
    ar: 'سيظهر هنا نشاطك الدراسي عند استخدامك للمنصة.',
    es: 'Tu actividad de estudio aparecerá aquí a medida que uses la plataforma.',
  },
  'toolkit.progress.suggested_focus': {
    en: 'Suggested Focus',
    ar: 'التركيز المقترح',
    es: 'Enfoque sugerido',
  },

  // ─── dashboard.cancel (subscription cancellation flow) ────────────────
  'dashboard.cancel.back_btn': { en: 'Back', ar: 'رجوع', es: 'Atrás' },
  'dashboard.cancel.cancelling': { en: 'Cancelling…', ar: 'جاري الإلغاء…', es: 'Cancelando…' },
  'dashboard.cancel.confirm_btn': {
    en: 'Confirm Cancellation',
    ar: 'تأكيد الإلغاء',
    es: 'Confirmar cancelación',
  },
  'dashboard.cancel.continue_btn': { en: 'Continue', ar: 'تابع', es: 'Continuar' },
  'dashboard.cancel.keep_btn': {
    en: 'Keep My Subscription',
    ar: 'احتفظ باشتراكي',
    es: 'Mantener mi suscripción',
  },
  'dashboard.cancel.resubscribe_btn': {
    en: 'Resubscribe',
    ar: 'اشترك مجدداً',
    es: 'Volver a suscribirse',
  },
  'dashboard.cancel.return_btn': {
    en: 'Return to Dashboard',
    ar: 'ارجع للوحة التحكم',
    es: 'Volver al panel de control',
  },
  'dashboard.cancel.skip_btn': { en: 'Skip', ar: 'تخطَّ', es: 'Omitir' },
  'dashboard.cancel.submit_btn': {
    en: 'Submit Feedback',
    ar: 'أرسل ملاحظاتك',
    es: 'Enviar comentarios',
  },

  // ─── dashboard.creative_writing (teacher resource) ────────────────────
  'dashboard.creative_writing.annotations_title': {
    en: 'Technique Annotations',
    ar: 'شرح الأساليب',
    es: 'Anotaciones de técnicas',
  },
  'dashboard.creative_writing.technique_toolkit_title': {
    en: 'Technique Toolkit',
    ar: 'صندوق الأساليب الكتابية',
    es: 'Caja de herramientas de técnicas',
  },
  'dashboard.creative_writing.writing_tasks_title': {
    en: 'Writing Tasks',
    ar: 'مهام الكتابة',
    es: 'Tareas de escritura',
  },

  // ─── dashboard.data_requests (DSAR / GDPR) ────────────────────────────
  'dashboard.data_requests.access_btn': {
    en: 'Request Access Report',
    ar: 'اطلب تقرير الوصول',
    es: 'Solicitar informe de acceso',
  },
  'dashboard.data_requests.access_desc': {
    en: 'Receive a copy of all personal data we hold about you.',
    ar: 'احصل على نسخة من جميع بياناتك الشخصية المحفوظة لدينا.',
    es: 'Recibe una copia de todos los datos personales que guardamos sobre ti.',
  },
  'dashboard.data_requests.access_title': {
    en: 'Subject Access Request',
    ar: 'طلب الوصول إلى البيانات',
    es: 'Solicitud de acceso del interesado',
  },
  'dashboard.data_requests.back_btn': {
    en: 'Back to Requests',
    ar: 'ارجع إلى الطلبات',
    es: 'Volver a las solicitudes',
  },
  'dashboard.data_requests.back_dashboard': {
    en: 'Back to Dashboard',
    ar: 'ارجع للوحة التحكم',
    es: 'Volver al panel de control',
  },
  'dashboard.data_requests.cancel_btn': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'dashboard.data_requests.dashboard_btn': {
    en: 'Go to Dashboard',
    ar: 'اذهب للوحة التحكم',
    es: 'Ir al panel de control',
  },
  'dashboard.data_requests.erase_confirm_body': {
    en: 'This will permanently delete all your personal data, essays, and feedback. This action cannot be undone.',
    ar: 'سيُحذف جميع بياناتك الشخصية ومقالاتك وتقييماتك نهائياً. لا يمكن التراجع عن هذا الإجراء.',
    es: 'Esto eliminará de forma permanente todos tus datos personales, ensayos y comentarios. Esta acción no se puede deshacer.',
  },
  'dashboard.data_requests.erase_confirm_btn': {
    en: 'Confirm Erasure',
    ar: 'تأكيد الحذف',
    es: 'Confirmar supresión',
  },
  'dashboard.data_requests.erase_confirm_heading': {
    en: 'Are you sure?',
    ar: 'هل أنت متأكد؟',
    es: '¿Estás seguro?',
  },
  'dashboard.data_requests.erase_confirm_instruction': {
    en: 'Type DELETE to confirm.',
    ar: 'اكتب DELETE للتأكيد.',
    es: 'Escribe DELETE para confirmar.',
  },
  'dashboard.data_requests.erasure_btn': {
    en: 'Request Erasure',
    ar: 'اطلب الحذف',
    es: 'Solicitar supresión',
  },
  'dashboard.data_requests.erasure_desc': {
    en: 'Request permanent deletion of all your personal data ("right to be forgotten").',
    ar: 'اطلب حذف جميع بياناتك الشخصية نهائياً ("الحق في النسيان").',
    es: 'Solicita la eliminación permanente de todos tus datos personales ("derecho al olvido").',
  },
  'dashboard.data_requests.erasure_title': {
    en: 'Right to Erasure',
    ar: 'الحق في الحذف',
    es: 'Derecho de supresión',
  },
  'dashboard.data_requests.gdpr_note': {
    en: 'Under UK GDPR, we must complete your request within one calendar month.',
    ar: 'بموجب UK GDPR، يجب أن نُنجز طلبك خلال شهر تقويمي واحد.',
    es: 'En virtud del UK GDPR, debemos completar tu solicitud en el plazo de un mes natural.',
  },
  'dashboard.data_requests.history_subtitle': {
    en: 'A record of all data requests you have submitted.',
    ar: 'سجل بجميع طلبات البيانات التي قدَّمتها.',
    es: 'Un registro de todas las solicitudes de datos que has enviado.',
  },
  'dashboard.data_requests.portability_btn': {
    en: 'Download My Data',
    ar: 'حمّل بياناتي',
    es: 'Descargar mis datos',
  },
  'dashboard.data_requests.portability_desc': {
    en: 'Receive your data in a machine-readable format (JSON).',
    ar: 'احصل على بياناتك بصيغة قابلة للقراءة آلياً (JSON).',
    es: 'Recibe tus datos en un formato legible por máquina (JSON).',
  },
  'dashboard.data_requests.portability_title': {
    en: 'Data Portability',
    ar: 'قابلية نقل البيانات',
    es: 'Portabilidad de datos',
  },
  'dashboard.data_requests.preparing': {
    en: 'Preparing download…',
    ar: 'جاري تحضير التحميل…',
    es: 'Preparando la descarga…',
  },
  'dashboard.data_requests.rectification_btn': {
    en: 'Go to Privacy Settings',
    ar: 'اذهب لإعدادات الخصوصية',
    es: 'Ir a los ajustes de privacidad',
  },
  'dashboard.data_requests.rectification_desc': {
    en: 'Correct any inaccurate personal data we hold about you.',
    ar: 'صحِّح أي بيانات شخصية غير دقيقة لدينا.',
    es: 'Corrige cualquier dato personal inexacto que tengamos sobre ti.',
  },
  'dashboard.data_requests.rectification_title': {
    en: 'Right to Rectification',
    ar: 'الحق في التصحيح',
    es: 'Derecho de rectificación',
  },
  'dashboard.data_requests.reference_label': {
    en: 'Your reference number',
    ar: 'رقم مرجعك',
    es: 'Tu número de referencia',
  },
  'dashboard.data_requests.submitting': { en: 'Submitting…', ar: 'جاري الإرسال…', es: 'Enviando…' },
  'dashboard.data_requests.success_desc': {
    en: 'Your request has been received and will be processed within one calendar month.',
    ar: 'تم استلام طلبك وسيُعالَج خلال شهر تقويمي واحد.',
    es: 'Tu solicitud se ha recibido y se tramitará en el plazo de un mes natural.',
  },
  'dashboard.data_requests.success_title': {
    en: 'Request Submitted',
    ar: 'تم إرسال الطلب',
    es: 'Solicitud enviada',
  },

  // ─── dashboard.differentiation (teacher resource) ─────────────────────
  'dashboard.differentiation.diff_by_ability': {
    en: 'Differentiation by Ability',
    ar: 'التمييز حسب المستوى',
    es: 'Diferenciación por capacidad',
  },
  'dashboard.differentiation.example_task_title': {
    en: 'Example Differentiated Task',
    ar: 'مثال على مهمة متدرجة المستوى',
    es: 'Ejemplo de tarea diferenciada',
  },
  'dashboard.differentiation.pp_send_title': {
    en: 'PP / SEND / EAL Strategies',
    ar: 'استراتيجيات PP / SEND / EAL',
    es: 'Estrategias de PP / SEND / EAL',
  },

  // ─── dashboard.lesson_plans (teacher resource) ────────────────────────
  'dashboard.lesson_plans.cross_curricular_title': {
    en: 'Cross-Curricular Links',
    ar: 'الروابط بين المواد',
    es: 'Vínculos interdisciplinares',
  },
  'dashboard.lesson_plans.main_activities_label': {
    en: 'Main Activities',
    ar: 'الأنشطة الرئيسية',
    es: 'Actividades principales',
  },
  'dashboard.lesson_plans.objectives_title': {
    en: 'Learning Objectives',
    ar: 'أهداف التعلم',
    es: 'Objetivos de aprendizaje',
  },
  'dashboard.lesson_plans.overview_title': {
    en: 'Overview',
    ar: 'نظرة عامة',
    es: 'Visión general',
  },
  'dashboard.lesson_plans.resources_label': { en: 'Resources', ar: 'الموارد', es: 'Recursos' },

  // ─── dashboard.mark_scheme (teacher resource) ─────────────────────────
  'dashboard.mark_scheme.band_descriptors_title': {
    en: 'Band Descriptors with Student Examples',
    ar: 'واصفات المستويات مع أمثلة الطلاب',
    es: 'Descriptores de Band con ejemplos de estudiantes',
  },
  'dashboard.mark_scheme.common_errors_title': {
    en: 'Common Errors & How to Fix Them',
    ar: 'الأخطاء الشائعة وكيفية تصحيحها',
    es: 'Errores frecuentes y cómo corregirlos',
  },
  'dashboard.mark_scheme.marking_tips_title': {
    en: 'Marking Tips',
    ar: 'نصائح التصحيح',
    es: 'Consejos de corrección',
  },

  // ─── dashboard.parent_link (parent/student link settings) ─────────────
  'dashboard.parent_link.breadcrumb_current': {
    en: 'Parent Linking',
    ar: 'ربط ولي الأمر',
    es: 'Vinculación de padres',
  },
  'dashboard.parent_link.breadcrumb_settings': { en: 'Settings', ar: 'الإعدادات', es: 'Ajustes' },
  'dashboard.parent_link.copied': { en: 'Copied!', ar: 'تم النسخ!', es: '¡Copiado!' },
  'dashboard.parent_link.copy_code': { en: 'Copy Code', ar: 'انسخ الكود', es: 'Copiar código' },
  'dashboard.parent_link.copy_invite_link': {
    en: 'Copy Invite Link',
    ar: 'انسخ رابط الدعوة',
    es: 'Copiar enlace de invitación',
  },
  'dashboard.parent_link.default_subtitle': {
    en: 'Manage your parent or student connections.',
    ar: 'أدِر روابطك مع ولي الأمر أو الطالب.',
    es: 'Gestiona tus conexiones con padres o estudiantes.',
  },
  'dashboard.parent_link.generate_invite_btn': {
    en: 'Generate Invite Code',
    ar: 'أنشئ كود الدعوة',
    es: 'Generar código de invitación',
  },
  'dashboard.parent_link.generate_new_code': {
    en: 'Generate New Code',
    ar: 'أنشئ كوداً جديداً',
    es: 'Generar código nuevo',
  },
  'dashboard.parent_link.generate_warning': {
    en: 'Generating a new code will invalidate the current one.',
    ar: 'إنشاء كود جديد سيُلغي الكود الحالي.',
    es: 'Generar un código nuevo invalidará el actual.',
  },
  'dashboard.parent_link.generating': { en: 'Generating…', ar: 'جاري الإنشاء…', es: 'Generando…' },
  'dashboard.parent_link.link_btn': {
    en: 'Link to Student',
    ar: 'اربط بالطالب',
    es: 'Vincular al estudiante',
  },
  'dashboard.parent_link.linking': { en: 'Linking…', ar: 'جاري الربط…', es: 'Vinculando…' },
  'dashboard.parent_link.parent_link_desc': {
    en: 'Enter the invite code your student shared with you to link your accounts.',
    ar: 'أدخل كود الدعوة الذي شاركه معك الطالب لربط الحسابين.',
    es: 'Introduce el código de invitación que tu estudiante ha compartido contigo para vincular vuestras cuentas.',
  },
  'dashboard.parent_link.parent_link_title': {
    en: 'Link to Student Account',
    ar: 'ربط بحساب الطالب',
    es: 'Vincular a la cuenta del estudiante',
  },
  'dashboard.parent_link.parent_page_subtitle': {
    en: "Enter your student's invite code to view their progress.",
    ar: 'أدخل كود دعوة طالبك لمتابعة تقدمه.',
    es: 'Introduce el código de invitación de tu estudiante para ver su progreso.',
  },
  'dashboard.parent_link.remove_btn': { en: 'Remove', ar: 'إزالة', es: 'Eliminar' },
  'dashboard.parent_link.removing': { en: 'Removing…', ar: 'جاري الإزالة…', es: 'Eliminando…' },
  'dashboard.parent_link.student_invite_desc': {
    en: 'Generate an invite code and share it with your parent or guardian so they can view your progress.',
    ar: 'أنشئ كود دعوة وشاركه مع ولي أمرك حتى يتمكن من متابعة تقدمك.',
    es: 'Genera un código de invitación y compártelo con tu padre, madre o tutor para que pueda ver tu progreso.',
  },
  'dashboard.parent_link.student_invite_title': {
    en: 'Invite a Parent',
    ar: 'ادعُ ولي الأمر',
    es: 'Invitar a un padre',
  },
  'dashboard.parent_link.student_page_subtitle': {
    en: 'Share an invite code with your parent or guardian.',
    ar: 'شارك كود الدعوة مع ولي أمرك.',
    es: 'Comparte un código de invitación con tu padre, madre o tutor.',
  },

  // ─── dashboard.parent_progress (parent overview page) ─────────────────
  'dashboard.parent_progress.activities_week': {
    en: 'Activities This Week',
    ar: 'الأنشطة هذا الأسبوع',
    es: 'Actividades esta semana',
  },
  'dashboard.parent_progress.working_at_grade': {
    en: 'Working at Grade',
    ar: 'الدرجة الحالية',
    es: 'Nivel actual',
  },

  // ─── dashboard.parent_progress_detail (detailed progress view) ────────
  'dashboard.parent_progress_detail.areas_improvement': {
    en: 'Areas for Improvement',
    ar: 'مجالات التحسين',
    es: 'Áreas de mejora',
  },
  'dashboard.parent_progress_detail.col_predicted': {
    en: 'Predicted',
    ar: 'المتوقع',
    es: 'Prevista',
  },
  'dashboard.parent_progress_detail.col_status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'dashboard.parent_progress_detail.col_subject': { en: 'Subject', ar: 'المادة', es: 'Materia' },
  'dashboard.parent_progress_detail.col_target': { en: 'Target', ar: 'الهدف', es: 'Objetivo' },
  'dashboard.parent_progress_detail.col_working_at': {
    en: 'Working At',
    ar: 'الدرجة الحالية',
    es: 'Nivel actual',
  },
  'dashboard.parent_progress_detail.essays_per_week_label': {
    en: 'Essays Per Week',
    ar: 'المقالات في الأسبوع',
    es: 'Ensayos por semana',
  },
  'dashboard.parent_progress_detail.grades_heading': {
    en: 'Projected vs Target Grades',
    ar: 'الدرجات المتوقعة مقارنةً بالأهداف',
    es: 'Notas previstas frente a objetivos',
  },
  'dashboard.parent_progress_detail.recommended_path': {
    en: 'Recommended Learning Path',
    ar: 'المسار التعليمي المقترح',
    es: 'Ruta de aprendizaje recomendada',
  },
  'dashboard.parent_progress_detail.score_trend_label': {
    en: 'Score Trend',
    ar: 'اتجاه الدرجات',
    es: 'Tendencia de puntuaciones',
  },
  'dashboard.parent_progress_detail.status_above_target': {
    en: 'Above target',
    ar: 'فوق الهدف',
    es: 'Por encima del objetivo',
  },
  'dashboard.parent_progress_detail.status_on_track': {
    en: 'On track',
    ar: 'في المسار الصحيح',
    es: 'En el buen camino',
  },
  'dashboard.parent_progress_detail.strengths_radar': {
    en: 'Skills Breakdown',
    ar: 'تفصيل المهارات',
    es: 'Desglose de habilidades',
  },
  'dashboard.parent_progress_detail.subtitle': {
    en: 'Detailed progress report for',
    ar: 'تقرير التقدم التفصيلي لـ',
    es: 'Informe de progreso detallado de',
  },
  'dashboard.parent_progress_detail.time_spent_label': {
    en: 'Time Spent Studying',
    ar: 'وقت الدراسة',
    es: 'Tiempo dedicado al estudio',
  },
  'dashboard.parent_progress_detail.title': {
    en: 'Progress Report',
    ar: 'تقرير التقدم',
    es: 'Informe de progreso',
  },

  // ─── dashboard.parent_settings (parent account settings) ──────────────
  'dashboard.parent_settings.add_student_btn': {
    en: 'Add Student',
    ar: 'أضف طالباً',
    es: 'Añadir estudiante',
  },
  'dashboard.parent_settings.cancel_btn': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'dashboard.parent_settings.edit_targets': {
    en: 'Edit Targets',
    ar: 'عدِّل الأهداف',
    es: 'Editar objetivos',
  },
  'dashboard.parent_settings.link_student_desc': {
    en: 'Enter the email address of the student you want to link to your account.',
    ar: 'أدخل البريد الإلكتروني للطالب الذي تريد ربطه بحسابك.',
    es: 'Introduce la dirección de correo electrónico del estudiante que quieres vincular a tu cuenta.',
  },
  'dashboard.parent_settings.link_student_title': {
    en: 'Link a Student',
    ar: 'اربط طالباً',
    es: 'Vincular un estudiante',
  },
  'dashboard.parent_settings.save_btn': { en: 'Save', ar: 'احفظ', es: 'Guardar' },
  'dashboard.parent_settings.save_notifications': {
    en: 'Save Preferences',
    ar: 'احفظ التفضيلات',
    es: 'Guardar preferencias',
  },
  'dashboard.parent_settings.save_schedule': {
    en: 'Save Schedule',
    ar: 'احفظ الجدول',
    es: 'Guardar programación',
  },
  'dashboard.parent_settings.saving': { en: 'Saving…', ar: 'جاري الحفظ…', es: 'Guardando…' },
  'dashboard.parent_settings.schedule_day_label': { en: 'Day', ar: 'اليوم', es: 'Día' },
  'dashboard.parent_settings.schedule_time_label': { en: 'Time', ar: 'الوقت', es: 'Hora' },
  'dashboard.parent_settings.send_invite_btn': {
    en: 'Send Invite',
    ar: 'أرسل الدعوة',
    es: 'Enviar invitación',
  },
  'dashboard.parent_settings.sending': { en: 'Sending…', ar: 'جاري الإرسال…', es: 'Enviando…' },

  // ─── dashboard.privacy (privacy dashboard) ────────────────────────────
  'dashboard.privacy.data_load_error': {
    en: 'Could not load your data. Please refresh the page.',
    ar: 'تعذَّر تحميل بياناتك. يرجى تحديث الصفحة.',
    es: 'No se han podido cargar tus datos. Actualiza la página.',
  },
  'dashboard.privacy.data_subtitle': {
    en: 'A summary of all personal data we hold about you.',
    ar: 'ملخص لجميع بياناتك الشخصية المحفوظة لدينا.',
    es: 'Un resumen de todos los datos personales que guardamos sobre ti.',
  },
  'dashboard.privacy.delete_account_btn': {
    en: 'Request Account Deletion',
    ar: 'اطلب حذف الحساب',
    es: 'Solicitar eliminación de la cuenta',
  },
  'dashboard.privacy.delete_account_warning': {
    en: 'This action is irreversible. Once confirmed, your account and all associated data will be permanently deleted after a 30-day grace period.',
    ar: 'هذا الإجراء لا يمكن التراجع عنه. بعد التأكيد، سيُحذف حسابك وجميع بياناته نهائياً بعد فترة سماح مدتها 30 يوماً.',
    es: 'Esta acción es irreversible. Una vez confirmada, tu cuenta y todos los datos asociados se eliminarán de forma permanente tras un periodo de gracia de 30 días.',
  },
  'dashboard.privacy.delete_essay_btn': { en: 'Delete', ar: 'حذف', es: 'Eliminar' },
  'dashboard.privacy.delete_subtitle': {
    en: 'Delete individual essays or request full account deletion.',
    ar: 'احذف مقالات بعينها أو اطلب حذف الحساب بالكامل.',
    es: 'Elimina ensayos concretos o solicita la eliminación completa de la cuenta.',
  },
  'dashboard.privacy.deleting': { en: 'Deleting…', ar: 'جاري الحذف…', es: 'Eliminando…' },
  'dashboard.privacy.download_format_label': {
    en: 'Choose format',
    ar: 'اختر الصيغة',
    es: 'Elige formato',
  },
  'dashboard.privacy.download_included_heading': {
    en: "What's included",
    ar: 'ما الذي يتضمنه التحميل',
    es: 'Qué se incluye',
  },
  'dashboard.privacy.download_request_btn': {
    en: 'Request Download',
    ar: 'اطلب التحميل',
    es: 'Solicitar descarga',
  },
  'dashboard.privacy.download_requested': {
    en: 'Request sent! Check your email.',
    ar: 'تم الإرسال! تحقق من بريدك الإلكتروني.',
    es: '¡Solicitud enviada! Revisa tu correo electrónico.',
  },
  'dashboard.privacy.download_requesting': {
    en: 'Requesting…',
    ar: 'جاري الطلب…',
    es: 'Solicitando…',
  },
  'dashboard.privacy.download_subtitle': {
    en: 'Download a copy of all your data in your chosen format.',
    ar: 'حمِّل نسخة من جميع بياناتك بالصيغة التي تختارها.',
    es: 'Descarga una copia de todos tus datos en el formato que elijas.',
  },
  'dashboard.privacy.profile_visibility_label': {
    en: 'Profile Visibility',
    ar: 'ظهور الملف الشخصي',
    es: 'Visibilidad del perfil',
  },
  'dashboard.privacy.rights_subtitle': {
    en: 'Under UK GDPR you have the following rights regarding your personal data.',
    ar: 'بموجب UK GDPR، لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية.',
    es: 'En virtud del UK GDPR tienes los siguientes derechos sobre tus datos personales.',
  },

  // ─── toolkit.test_builder ─────────────────────────────────────────────
  'toolkit.test_builder.go_to_question': {
    en: 'Go to question',
    ar: 'اذهب إلى السؤال',
    es: 'Ir a la pregunta',
  },
}
