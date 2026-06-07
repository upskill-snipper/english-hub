/**
 * Toolkit-specific dictionary - keys for /toolkit/* tool pages.
 *
 * Kept in a separate file from the master dictionary.ts because the
 * toolkit surface area is its own product (AI tools, grade predictor,
 * personalised revision) and is iterated on independently of the
 * marketing / curriculum surface. Merged into the master lookup by
 * `dictionary.ts → lookup()` at runtime - callers don't need to know
 * which file owns a key.
 *
 * Khaleeji conventions (mirrored from dictionary.ts):
 *   أبغى, شوف, دوّر, الحين, ببلاش, لحظة, إحنا, سكّر, روح
 * BANNED (Levantine): شو, بحكي, كيفك, ليش
 *
 * Latin retention: brand names (The English Hub, Toolkit), exam codes
 * (GCSE, IGCSE, AQA, OCR, Edexcel, AO1-AO6, IAL, A-Level, Unit 3/4,
 * MCQ, PDF, AI) stay in Latin script inside Arabic text per Gulf
 * convention.
 *
 * GENDER POLICY: binary M/F. Male-second-person addressed by default
 * (matches the rest of the dictionary, which uses masculine "إنت/مالك"
 * forms - see action.* and tools.* entries in dictionary.ts).
 */

import type { Dictionary } from './dictionary'

export const TOOLKIT_DICTIONARY: Dictionary = {
  // ─── Toolkit hub (/toolkit) ─────────────────────────────────────────
  // Student's command centre. Latin "Toolkit" retained per house style.
  'tools.meta.title': {
    en: 'Revision toolkit - The English Hub',
    ar: 'Toolkit المراجعة - The English Hub',
    es: 'Kit de repaso - The English Hub',
  },
  'tools.meta.description': {
    en: 'Free tools for GCSE & IGCSE English: quote builders, essay frames, mark-scheme checklists.',
    ar: 'أدوات ببلاش لإنجليزي GCSE و IGCSE: بنّاء اقتباسات، هياكل مقالات، تشيك-لِست مخطط التصحيح.',
    es: 'Herramientas gratuitas para inglés GCSE e IGCSE: generadores de citas, esquemas de redacción, listas de control del baremo de corrección.',
  },
  'tools.hub.h1': { en: 'Student Toolkit', ar: 'Toolkit الطالب', es: 'Kit del estudiante' },
  'tools.hub.lead': {
    en: 'Your personal learning command centre. Build custom tests, generate revision notes, track your progress, and predict your GCSE grade.',
    ar: 'مركز التعلّم الشخصي مالك. سوِّ اختبارات على مقاسك، ولّد ملاحظات مراجعة، تابع تقدّمك، وتوقّع درجة GCSE مالتك.',
    es: 'Tu centro de control de aprendizaje personal. Crea pruebas personalizadas, genera notas de repaso, sigue tu progreso y predice tu nota de GCSE.',
  },
  'tools.hub.section.ai_tools': {
    en: 'AI Study Tools',
    ar: 'أدوات دراسة بالذكاء الاصطناعي',
    es: 'Herramientas de estudio con IA',
  },
  'tools.hub.section.dashboard': {
    en: 'Dashboard & Materials',
    ar: 'لوحة التحكم والمواد',
    es: 'Panel y materiales',
  },
  'tools.hub.section.predictor': {
    en: 'Grade Predictor',
    ar: 'متوقّع الدرجة',
    es: 'Predictor de notas',
  },
  'tools.hub.predictor.desc': {
    en: 'See your predicted GCSE grade based on quiz scores, mock results, and overall performance data. Updated as you study.',
    ar: 'شوف درجة GCSE المتوقّعة مالك بناءً على درجات الكويزات والامتحانات التجريبية وأداءك العام. يتحدّث مع كل ما تذاكر.',
    es: 'Consulta tu nota de GCSE prevista según las puntuaciones de los cuestionarios, los resultados de los simulacros y tus datos de rendimiento general. Se actualiza a medida que estudias.',
  },
  'tools.hub.open_tool': { en: 'Open tool', ar: 'افتح الأداة', es: 'Abrir herramienta' },
  'tools.hub.tag.ai': {
    en: 'AI-Powered',
    ar: 'مدعوم بالذكاء الاصطناعي',
    es: 'Con tecnología de IA',
  },
  'tools.hub.tag.data': { en: 'Data-Driven', ar: 'مبني على بياناتك', es: 'Basado en datos' },
  'tools.hub.tool.test_builder.title': {
    en: 'AI Test Builder',
    ar: 'بنّاء اختبارات AI',
    es: 'Generador de pruebas con IA',
  },
  'tools.hub.tool.test_builder.desc': {
    en: "Generate custom tests from your board's texts and topics. Multiple-choice and short-answer questions, scored with GCSE grade equivalents.",
    ar: 'ولّد اختبارات من نصوص بورد الامتحان والمواضيع مالك. أسئلة اختيار من متعدّد وإجابات قصيرة، تنحسب مع درجات GCSE المُكافِئة.',
    es: 'Genera pruebas personalizadas a partir de los textos y temas de tu junta examinadora. Preguntas de opción múltiple y de respuesta corta, calificadas con equivalencias de notas de GCSE.',
  },
  'tools.hub.tool.revision_notes.title': {
    en: 'AI Revision Notes',
    ar: 'ملاحظات مراجعة AI',
    es: 'Notas de repaso con IA',
  },
  'tools.hub.tool.revision_notes.desc': {
    en: 'Get personalised revision summaries tailored to your weak areas, target grade, and study history. Key quotes, themes, and exam tips.',
    ar: 'احصل على ملخّصات مراجعة على مقاسك، مفصّلة على نقاط ضعفك ودرجتك المستهدَفة وتاريخ مذاكرتك. اقتباسات أساسية وثيمات ونصائح امتحان.',
    es: 'Obtén resúmenes de repaso personalizados adaptados a tus puntos débiles, tu nota objetivo y tu historial de estudio. Citas clave, temas y consejos para el examen.',
  },
  'tools.hub.tool.personalised.title': {
    en: 'Personalised Revision',
    ar: 'مراجعة على مقاسك',
    es: 'Repaso personalizado',
  },
  'tools.hub.tool.personalised.desc': {
    en: 'A revision guide built from YOUR data. Targets your weakest areas first, consolidates your current grade, then pushes you higher with stretch questions.',
    ar: 'دليل مراجعة مبني من بياناتك إنت. يستهدف نقاط الضعف مالك أوّل شي، يثبّت درجتك الحالية، وبعدها يدفعك أعلى بأسئلة تحدّي.',
    es: 'Una guía de repaso creada a partir de TUS datos. Aborda primero tus áreas más débiles, consolida tu nota actual y luego te lleva más alto con preguntas de ampliación.',
  },
  'tools.hub.tool.progress.title': { en: 'My Progress', ar: 'تقدّمي', es: 'Mi progreso' },
  'tools.hub.tool.progress.desc': {
    en: 'Track your scores, study streak, time spent, and see your predicted GCSE grade based on your performance.',
    ar: 'تابع درجاتك، وسلسلة مذاكرتك، والوقت اللي قضيته، وشوف درجة GCSE المتوقّعة مالك بناءً على أداءك.',
    es: 'Sigue tus puntuaciones, tu racha de estudio y el tiempo dedicado, y consulta tu nota de GCSE prevista según tu rendimiento.',
  },
  'tools.hub.tool.my_materials.title': { en: 'My Materials', ar: 'موادي', es: 'Mis materiales' },
  'tools.hub.tool.my_materials.desc': {
    en: 'Access all your saved custom tests, revision notes, and quote banks in one place.',
    ar: 'وصول لكل الاختبارات المحفوظة وملاحظات المراجعة وبنوك الاقتباسات في مكان واحد.',
    es: 'Accede a todas tus pruebas personalizadas guardadas, notas de repaso y bancos de citas en un solo lugar.',
  },
  'tools.back': { en: 'Back to Toolkit', ar: 'رجوع لـ Toolkit', es: 'Volver al Toolkit' },

  // ─── My Materials (/toolkit/my-materials) ───────────────────────────
  'tools.my_materials.h1': { en: 'My Materials', ar: 'موادي', es: 'Mis materiales' },
  'tools.my_materials.lead': {
    en: 'Your saved tests, revision notes, and quote banks',
    ar: 'اختباراتك المحفوظة وملاحظات المراجعة وبنوك الاقتباسات',
    es: 'Tus pruebas guardadas, notas de repaso y bancos de citas',
  },
  'tools.my_materials.filter.all': { en: 'All', ar: 'الكل', es: 'Todos' },
  'tools.my_materials.type.test': { en: 'Test', ar: 'اختبار', es: 'Prueba' },
  'tools.my_materials.type.notes': {
    en: 'Revision Notes',
    ar: 'ملاحظات مراجعة',
    es: 'Notas de repaso',
  },
  'tools.my_materials.type.quotes': {
    en: 'Quote Bank',
    ar: 'بنك الاقتباسات',
    es: 'Banco de citas',
  },
  'tools.my_materials.total_suffix': { en: 'total', ar: 'إجمالي', es: 'en total' },
  'tools.my_materials.action.view': { en: 'View', ar: 'شوف', es: 'Ver' },
  'tools.my_materials.action.retake': { en: 'Re-take', ar: 'أعد المحاولة', es: 'Repetir' },
  'tools.my_materials.confirm_delete': {
    en: 'Are you sure you want to delete this material?',
    ar: 'متأكّد إنك تبي تحذف هذه المادة؟',
    es: '¿Seguro que quieres eliminar este material?',
  },
  'tools.my_materials.empty.h3': {
    en: 'No materials saved yet',
    ar: 'ما في مواد محفوظة الحين',
    es: 'Aún no hay materiales guardados',
  },
  'tools.my_materials.empty.lead': {
    en: 'Generate custom tests or revision notes using the AI tools, then save them here for quick access later.',
    ar: 'ولّد اختبارات أو ملاحظات مراجعة بأدوات الذكاء الاصطناعي، وبعدها احفظها هنا عشان توصلها بسرعة لاحقاً.',
    es: 'Genera pruebas personalizadas o notas de repaso con las herramientas de IA y luego guárdalas aquí para acceder a ellas rápidamente más adelante.',
  },
  'tools.my_materials.empty.cta.test': {
    en: 'Create a Test',
    ar: 'سوِّ اختبار',
    es: 'Crear una prueba',
  },
  'tools.my_materials.empty.cta.notes': {
    en: 'Generate Notes',
    ar: 'ولّد ملاحظات',
    es: 'Generar notas',
  },
  'tools.my_materials.modal.test_count_prefix': {
    en: 'This test has',
    ar: 'هذا الاختبار فيه',
    es: 'Esta prueba tiene',
  },
  'tools.my_materials.modal.test_count_suffix': {
    en: 'questions.',
    ar: 'أسئلة.',
    es: 'preguntas.',
  },
  'tools.my_materials.modal.take_new': {
    en: 'Take a New Test',
    ar: 'سوِّ اختبار جديد',
    es: 'Hacer una prueba nueva',
  },

  // ─── Quiz / Test Builder (/toolkit/test-builder) ────────────────────
  'quiz_build.h1': {
    en: 'AI Test Builder',
    ar: 'بنّاء اختبارات AI',
    es: 'Generador de pruebas con IA',
  },
  'quiz_build.lead': {
    en: 'Generate custom tests and score them with GCSE grade equivalents',
    ar: 'ولّد اختبارات على مقاسك واحسب درجاتها مع درجات GCSE المُكافِئة',
    es: 'Genera pruebas personalizadas y califícalas con equivalencias de notas de GCSE',
  },
  'quiz_build.label.topic': { en: 'Topic / Text', ar: 'الموضوع / النص', es: 'Tema / Texto' },
  'quiz_build.placeholder.topic': {
    en: 'Select a topic...',
    ar: 'اختر موضوع...',
    es: 'Selecciona un tema...',
  },
  'quiz_build.optgroup.set_texts': {
    en: 'Set Texts',
    ar: 'النصوص المقرّرة',
    es: 'Textos prescritos',
  },
  'quiz_build.optgroup.general': { en: 'General Topics', ar: 'مواضيع عامة', es: 'Temas generales' },
  'quiz_build.option.language_analysis': {
    en: 'Language Analysis',
    ar: 'تحليل اللغة',
    es: 'Análisis del lenguaje',
  },
  'quiz_build.option.creative_writing': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
    es: 'Escritura creativa',
  },
  'quiz_build.option.literary_techniques': {
    en: 'Literary Techniques',
    ar: 'الأساليب الأدبية',
    es: 'Recursos literarios',
  },
  'quiz_build.option.exam_technique': {
    en: 'Exam Technique',
    ar: 'أسلوب الامتحان',
    es: 'Técnica de examen',
  },
  'quiz_build.label.question_count': {
    en: 'Number of Questions',
    ar: 'عدد الأسئلة',
    es: 'Número de preguntas',
  },
  'quiz_build.questions_suffix': { en: 'questions', ar: 'سؤال', es: 'preguntas' },
  'quiz_build.cta.generate': { en: 'Generate Test', ar: 'ولّد الاختبار', es: 'Generar prueba' },
  'quiz_build.loading': {
    en: 'Generating your custom test...',
    ar: 'لحظة... نسوّي اختبارك على مقاسك',
    es: 'Generando tu prueba personalizada...',
  },
  'quiz_build.error.no_topic': {
    en: 'Please select a topic.',
    ar: 'اختر موضوع لو سمحت.',
    es: 'Por favor, selecciona un tema.',
  },
  'quiz_build.error.fail': {
    en: 'Failed to generate test',
    ar: 'ما قدرنا نولّد الاختبار',
    es: 'No se pudo generar la prueba',
  },
  'quiz_build.error.generic': {
    en: 'Something went wrong',
    ar: 'صار في خطأ',
    es: 'Algo salió mal',
  },
  'quiz_build.q_type.mcq': { en: 'MCQ', ar: 'اختيار متعدّد', es: 'Opción múltiple' },
  'quiz_build.q_type.short': { en: 'Short Answer', ar: 'إجابة قصيرة', es: 'Respuesta corta' },
  'quiz_build.input.placeholder_answer': {
    en: 'Type your answer here...',
    ar: 'اكتب جوابك هنا...',
    es: 'Escribe tu respuesta aquí...',
  },
  'quiz_build.nav.previous': { en: 'Previous', ar: 'السابق', es: 'Anterior' },
  'quiz_build.nav.next': { en: 'Next', ar: 'التالي', es: 'Siguiente' },
  'quiz_build.nav.submit': { en: 'Submit Test', ar: 'أرسل الاختبار', es: 'Enviar prueba' },
  'quiz_build.nav.go_to_q': { en: 'Go to question', ar: 'روح للسؤال', es: 'Ir a la pregunta' },
  'quiz_build.results.label': { en: 'Your Result', ar: 'نتيجتك', es: 'Tu resultado' },
  'quiz_build.results.correct': { en: 'correct', ar: 'صحيحة', es: 'correctas' },
  'quiz_build.action.download_pdf': {
    en: 'Download as PDF',
    ar: 'حمّل PDF',
    es: 'Descargar como PDF',
  },
  'quiz_build.action.save': {
    en: 'Save to My Materials',
    ar: 'احفظ في موادي',
    es: 'Guardar en Mis materiales',
  },
  'quiz_build.action.new_test': { en: 'New Test', ar: 'اختبار جديد', es: 'Prueba nueva' },
  'quiz_build.action.saved_alert': {
    en: 'Test saved to My Materials!',
    ar: 'تم حفظ الاختبار في موادي!',
    es: '¡Prueba guardada en Mis materiales!',
  },
  'quiz_build.review.h3': { en: 'Review Answers', ar: 'راجع الإجابات', es: 'Revisar respuestas' },
  'quiz_build.review.your_answer': { en: 'Your answer:', ar: 'جوابك:', es: 'Tu respuesta:' },
  'quiz_build.review.not_answered': {
    en: 'Not answered',
    ar: 'ما تمت الإجابة',
    es: 'Sin responder',
  },
  'quiz_build.review.correct_answer': {
    en: 'Correct answer:',
    ar: 'الجواب الصحيح:',
    es: 'Respuesta correcta:',
  },

  // ─── Lesson / Revision Builder (/toolkit/revision-builder) ──────────
  'lesson_build.h1': {
    en: 'AI Revision Notes Builder',
    ar: 'بنّاء ملاحظات المراجعة AI',
    es: 'Generador de notas de repaso con IA',
  },
  'lesson_build.lead': {
    en: 'Generate personalised revision summaries tailored to your weak areas',
    ar: 'ولّد ملخّصات مراجعة على مقاسك مفصّلة على نقاط ضعفك',
    es: 'Genera resúmenes de repaso personalizados adaptados a tus puntos débiles',
  },
  'lesson_build.label.topic': { en: 'Text or Topic', ar: 'نص أو موضوع', es: 'Texto o tema' },
  'lesson_build.placeholder.topic': {
    en: 'Select a text or topic...',
    ar: 'اختر نص أو موضوع...',
    es: 'Selecciona un texto o tema...',
  },
  'lesson_build.optgroup.set_texts': {
    en: 'Set Texts',
    ar: 'النصوص المقرّرة',
    es: 'Textos prescritos',
  },
  'lesson_build.optgroup.language': {
    en: 'Language Topics',
    ar: 'مواضيع اللغة',
    es: 'Temas de lenguaje',
  },
  'lesson_build.optgroup.creative': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
    es: 'Escritura creativa',
  },
  'lesson_build.optgroup.exam': {
    en: 'Exam Technique',
    ar: 'أسلوب الامتحان',
    es: 'Técnica de examen',
  },
  'lesson_build.label.target_grade': {
    en: 'Target Grade',
    ar: 'الدرجة المستهدَفة',
    es: 'Nota objetivo',
  },
  'lesson_build.grade_prefix': { en: 'Grade', ar: 'درجة', es: 'Nota' },
  'lesson_build.weak.label': {
    en: 'Weak areas detected from your quiz history:',
    ar: 'نقاط ضعف مكتشفة من تاريخ الكويزات مالك:',
    es: 'Áreas débiles detectadas en tu historial de cuestionarios:',
  },
  'lesson_build.weak.note': {
    en: 'Your revision notes will include extra focus on these areas.',
    ar: 'ملاحظات المراجعة مالتك بتركّز زيادة على هذه النقاط.',
    es: 'Tus notas de repaso incluirán un enfoque adicional en estas áreas.',
  },
  'lesson_build.cta.generate': {
    en: 'Generate Revision Notes',
    ar: 'ولّد ملاحظات المراجعة',
    es: 'Generar notas de repaso',
  },
  'lesson_build.cta.generating': { en: 'Generating...', ar: 'لحظة...', es: 'Generando...' },
  'lesson_build.error.no_topic': {
    en: 'Please select a topic.',
    ar: 'اختر موضوع لو سمحت.',
    es: 'Por favor, selecciona un tema.',
  },
  'lesson_build.error.fail': {
    en: 'Failed to generate notes',
    ar: 'ما قدرنا نولّد الملاحظات',
    es: 'No se pudieron generar las notas',
  },
  'lesson_build.error.generic': {
    en: 'Something went wrong',
    ar: 'صار في خطأ',
    es: 'Algo salió mal',
  },
  'lesson_build.badge.ai': {
    en: 'AI-Generated',
    ar: 'مُوَلَّد بالذكاء الاصطناعي',
    es: 'Generado por IA',
  },
  'lesson_build.badge.template': {
    en: 'Template-Based',
    ar: 'قالب جاهز',
    es: 'Basado en plantilla',
  },
  'lesson_build.generated_for': {
    en: 'Generated for Grade',
    ar: 'مولّد لدرجة',
    es: 'Generado para la nota',
  },
  'lesson_build.action.download_pdf': { en: 'Download PDF', ar: 'حمّل PDF', es: 'Descargar PDF' },
  'lesson_build.action.save': {
    en: 'Save to Materials',
    ar: 'احفظ في موادي',
    es: 'Guardar en Materiales',
  },
  'lesson_build.action.new_notes': {
    en: 'Generate New Notes',
    ar: 'ولّد ملاحظات جديدة',
    es: 'Generar notas nuevas',
  },
  'lesson_build.saved_alert': {
    en: 'Notes saved to My Materials!',
    ar: 'تم حفظ الملاحظات في موادي!',
    es: '¡Notas guardadas en Mis materiales!',
  },

  // ─── Grade Predictor / Progress (/toolkit/progress) ─────────────────
  'grade_predict.h1': { en: 'My Progress', ar: 'تقدّمي', es: 'Mi progreso' },
  'grade_predict.lead': {
    en: 'Track your learning journey and see where to focus next',
    ar: 'تابع رحلة التعلّم مالتك وشوف وين تركّز بعدها',
    es: 'Sigue tu trayectoria de aprendizaje y descubre dónde centrarte a continuación',
  },
  'grade_predict.section.stats': {
    en: 'Overall Stats',
    ar: 'الإحصائيات العامة',
    es: 'Estadísticas generales',
  },
  'grade_predict.stat.poems': { en: 'Poems Studied', ar: 'قصائد درستها', es: 'Poemas estudiados' },
  'grade_predict.stat.quizzes': {
    en: 'Quizzes Taken',
    ar: 'كويزات سوّيتها',
    es: 'Cuestionarios realizados',
  },
  'grade_predict.stat.games': { en: 'Games Played', ar: 'ألعاب لعبتها', es: 'Juegos jugados' },
  'grade_predict.stat.essays': {
    en: 'Essays Marked',
    ar: 'مقالات اتصحّحت',
    es: 'Redacciones corregidas',
  },
  'grade_predict.stat.streak': { en: 'Day Streak', ar: 'سلسلة الأيام', es: 'Racha de días' },
  'grade_predict.section.predictor': {
    en: 'Grade Predictor',
    ar: 'متوقّع الدرجة',
    es: 'Predictor de notas',
  },
  'grade_predict.predicted_label': {
    en: 'Predicted GCSE Grade',
    ar: 'درجة GCSE المتوقّعة',
    es: 'Nota de GCSE prevista',
  },
  'grade_predict.predictor.based_prefix': { en: 'Based on', ar: 'بناءً على', es: 'Según' },
  'grade_predict.predictor.scores_with_avg': {
    en: 'scores with an average of',
    ar: 'درجات بمتوسّط',
    es: 'puntuaciones con una media de',
  },
  'grade_predict.predictor.equivalent_note': {
    en: 'equivalent -- take more quizzes for a more accurate prediction',
    ar: 'مُكافِئ -- سوِّ كويزات أكثر عشان توقّع أدقّ',
    es: 'equivalente -- haz más cuestionarios para obtener una predicción más precisa',
  },
  'grade_predict.predictor.empty': {
    en: 'No score data yet. Take quizzes and play games to see your predicted grade.',
    ar: 'ما في بيانات درجات الحين. سوِّ كويزات والعب ألعاب عشان تشوف درجتك المتوقّعة.',
    es: 'Aún no hay datos de puntuación. Haz cuestionarios y juega para ver tu nota prevista.',
  },
  'grade_predict.predictor.empty_cta': {
    en: 'Take a Quiz',
    ar: 'سوِّ كويز',
    es: 'Hacer un cuestionario',
  },
  'grade_predict.section.streak': {
    en: 'Streak Tracker',
    ar: 'متتبّع السلسلة',
    es: 'Seguimiento de la racha',
  },
  'grade_predict.streak.unit_one': { en: 'day', ar: 'يوم', es: 'día' },
  'grade_predict.streak.unit_many': { en: 'days', ar: 'أيام', es: 'días' },
  'grade_predict.streak.amazing': {
    en: 'Amazing streak! Keep it going!',
    ar: 'سلسلة وايد حلوة! كمّل عليها!',
    es: '¡Racha increíble! ¡Sigue así!',
  },
  'grade_predict.streak.good': {
    en: 'Good consistency! Push for a week!',
    ar: 'انتظام زين! ادفع للأسبوع!',
    es: '¡Buena constancia! ¡Esfuérzate por llegar a una semana!',
  },
  'grade_predict.streak.building': {
    en: 'You are building a habit. Come back tomorrow!',
    ar: 'إنت تبني عادة. ارجع باكر!',
    es: 'Estás creando un hábito. ¡Vuelve mañana!',
  },
  'grade_predict.streak.start': {
    en: 'Start studying today to begin your streak.',
    ar: 'ابدأ المذاكرة الحين عشان تبدأ سلسلتك.',
    es: 'Empieza a estudiar hoy para iniciar tu racha.',
  },
  'grade_predict.section.topic_breakdown': {
    en: 'Topic Breakdown',
    ar: 'تفصيل المواضيع',
    es: 'Desglose por temas',
  },
  'grade_predict.section.strengths': { en: 'Strengths', ar: 'نقاط القوّة', es: 'Puntos fuertes' },
  'grade_predict.section.weaknesses': {
    en: 'Areas to Improve',
    ar: 'مجالات للتحسين',
    es: 'Áreas de mejora',
  },
  'grade_predict.strengths.empty': {
    en: 'Score 80%+ on a topic to see it here.',
    ar: 'احصل على ٨٠٪ فأكثر على موضوع عشان تشوفه هنا.',
    es: 'Obtén un 80 % o más en un tema para verlo aquí.',
  },
  'grade_predict.weaknesses.empty': {
    en: 'Topics scoring below 60% will appear here with improvement links.',
    ar: 'المواضيع اللي درجاتها أقل من ٦٠٪ بتظهر هنا مع روابط للتحسين.',
    es: 'Los temas con una puntuación inferior al 60 % aparecerán aquí con enlaces para mejorar.',
  },
  'grade_predict.weaknesses.improve': { en: 'Improve this', ar: 'حسّن هذا', es: 'Mejorar esto' },
  'grade_predict.section.history': {
    en: 'Study History',
    ar: 'تاريخ المذاكرة',
    es: 'Historial de estudio',
  },
  'grade_predict.history.empty': {
    en: 'Your study activity will appear here as you use the platform.',
    ar: 'نشاط مذاكرتك بيظهر هنا لما تستخدم المنصة.',
    es: 'Tu actividad de estudio aparecerá aquí a medida que uses la plataforma.',
  },
  'grade_predict.history.at': { en: 'at', ar: 'الساعة', es: 'a las' },
  'grade_predict.section.suggestions': {
    en: 'Suggested Focus',
    ar: 'تركيز مُقترَح',
    es: 'Enfoque sugerido',
  },

  // ─── Personalised Revision (/toolkit/personalised-revision) ─────────
  'grade_predict.personal.h1': {
    en: 'Your Personalised Revision Guide',
    ar: 'دليل المراجعة على مقاسك',
    es: 'Tu guía de repaso personalizada',
  },
  'grade_predict.personal.lead': {
    en: 'Built from your quiz scores, essays, and study history. Updated every time you learn.',
    ar: 'مبني من درجات الكويزات والمقالات وتاريخ مذاكرتك. يتحدّث كل ما تتعلّم.',
    es: 'Creada a partir de tus puntuaciones en los cuestionarios, tus redacciones y tu historial de estudio. Se actualiza cada vez que aprendes.',
  },
  'grade_predict.personal.no_data.h2': {
    en: 'We need your data first',
    ar: 'نحتاج بياناتك الأوّل',
    es: 'Primero necesitamos tus datos',
  },
  'grade_predict.personal.no_data.lead': {
    en: 'Take some quizzes, study some poems, or submit an essay for marking. Once we have data on your performance, we can build a revision guide tailored specifically to you.',
    ar: 'سوِّ شوية كويزات، أو ادرس شوية قصائد، أو أرسل مقال للتصحيح. أوّل ما نحصل على بيانات أداءك، نقدر نبني دليل مراجعة على مقاسك إنت.',
    es: 'Haz algunos cuestionarios, estudia algunos poemas o envía una redacción para que la corrijamos. Una vez que tengamos datos sobre tu rendimiento, podremos crear una guía de repaso adaptada específicamente a ti.',
  },
  'grade_predict.personal.cta.quiz': {
    en: 'Take a Quiz',
    ar: 'سوِّ كويز',
    es: 'Hacer un cuestionario',
  },
  'grade_predict.personal.cta.essay': {
    en: 'Submit an Essay',
    ar: 'أرسل مقال',
    es: 'Enviar una redacción',
  },
  'grade_predict.personal.stat.predicted': {
    en: 'Predicted Grade',
    ar: 'الدرجة المتوقّعة',
    es: 'Nota prevista',
  },
  'grade_predict.personal.stat.quizzes': {
    en: 'Quizzes Taken',
    ar: 'كويزات سوّيتها',
    es: 'Cuestionarios realizados',
  },
  'grade_predict.personal.stat.essays': {
    en: 'Essays Marked',
    ar: 'مقالات اتصحّحت',
    es: 'Redacciones corregidas',
  },
  'grade_predict.personal.stat.streak': {
    en: 'Study Streak',
    ar: 'سلسلة المذاكرة',
    es: 'Racha de estudio',
  },
  'grade_predict.personal.section.why': {
    en: 'Why we built this for you',
    ar: 'ليش بنينا هذا لك',
    es: 'Por qué creamos esto para ti',
  },
  'grade_predict.personal.section.gaps': {
    en: 'Close the Gaps',
    ar: 'سدّ الثغرات',
    es: 'Cierra las brechas',
  },
  'grade_predict.personal.section.secure_prefix': {
    en: 'Secure Grade',
    ar: 'ثبّت الدرجة',
    es: 'Asegura la nota',
  },
  'grade_predict.personal.section.push_prefix': {
    en: 'Push for Grade',
    ar: 'ادفع لدرجة',
    es: 'Aspira a la nota',
  },
  'grade_predict.personal.priority1': { en: 'Priority 1', ar: 'الأولوية ١', es: 'Prioridad 1' },
  'grade_predict.personal.priority2': { en: 'Priority 2', ar: 'الأولوية ٢', es: 'Prioridad 2' },
  'grade_predict.personal.priority3': { en: 'Priority 3', ar: 'الأولوية ٣', es: 'Prioridad 3' },
  'grade_predict.personal.what_looks_like_prefix': {
    en: 'What Grade',
    ar: 'كيف تكون درجة',
    es: 'Cómo es la nota',
  },
  'grade_predict.personal.what_looks_like_suffix': {
    en: 'looks like',
    ar: 'مالها شكل',
    es: 'en la práctica',
  },
  'grade_predict.personal.five_points': {
    en: '5 Key Revision Points',
    ar: '٥ نقاط مراجعة أساسية',
    es: '5 puntos clave de repaso',
  },
  'grade_predict.personal.model_para_prefix': {
    en: 'Model Paragraph - Grade',
    ar: 'فقرة نموذجية - درجة',
    es: 'Párrafo modelo - Nota',
  },
  'grade_predict.personal.annotations': { en: 'Annotations', ar: 'تعليقات', es: 'Anotaciones' },
  'grade_predict.personal.what_to_reach_prefix': {
    en: 'What you need to reach Grade',
    ar: 'ما تحتاجه عشان توصل درجة',
    es: 'Lo que necesitas para alcanzar la nota',
  },
  'grade_predict.personal.challenges': {
    en: 'Challenge Questions',
    ar: 'أسئلة التحدّي',
    es: 'Preguntas de desafío',
  },
  'grade_predict.personal.challenges_note': {
    en: 'These are designed to make you think beyond surface-level analysis. Do not look for a "right answer" - the thinking process is what matters.',
    ar: 'هذه مصمّمة عشان تخلّيك تفكّر أبعد من التحليل السطحي. ما تدوّر على "جواب صح" - عملية التفكير هي اللي تهمّ.',
    es: 'Están diseñadas para hacerte pensar más allá del análisis superficial. No busques una "respuesta correcta": lo que importa es el proceso de reflexión.',
  },
  'grade_predict.personal.grade9_tip.h4': {
    en: 'Grade 9 Tip: Conceptualised Responses',
    ar: 'نصيحة الدرجة ٩: ردود مفهومية',
    es: 'Consejo para la nota 9: respuestas conceptualizadas',
  },
  'grade_predict.personal.section.plan': {
    en: 'Your Personalised Study Plan',
    ar: 'خطة المذاكرة على مقاسك',
    es: 'Tu plan de estudio personalizado',
  },
  'grade_predict.personal.plan.impact_suffix': { en: 'impact', ar: 'الأثر', es: 'impacto' },
  'grade_predict.personal.quick.quiz': {
    en: 'Take a Quiz',
    ar: 'سوِّ كويز',
    es: 'Hacer un cuestionario',
  },
  'grade_predict.personal.quick.essay': {
    en: 'Submit an Essay',
    ar: 'أرسل مقال',
    es: 'Enviar una redacción',
  },
  'grade_predict.personal.quick.progress': {
    en: 'View Progress',
    ar: 'شوف التقدّم',
    es: 'Ver progreso',
  },

  // ─── Essay Check / AO5 Critic Simulator (/toolkit/critic) ───────────
  // Long-form persona body content (the 5 critical schools, their named
  // figures, pushbacks and defence skeletons) stays EN-only - pedagogical
  // content rather than UI chrome. AR locale falls back gracefully via
  // lookup()'s en-default behaviour.
  'essay_check.h1': {
    en: 'AO5 Critic Simulator',
    ar: 'مُحاكي ناقد AO5',
    es: 'Simulador de crítica AO5',
  },
  'essay_check.badge.trainer': {
    en: 'AO5 Trainer - A-Level / IAL',
    ar: 'مدرّب AO5 - A-Level / IAL',
    es: 'Entrenador AO5 - A-Level / IAL',
  },
  'essay_check.lead': {
    en: 'Pick a critical persona below. They open with a provocation about your studied text, follow up with three pushback questions, and give you a skeleton for a strong AO5 defence. Use this to practise the rhythm of critic → concede → reframe → sharpen before you hit a real Unit 3 or Unit 4 essay.',
    ar: 'اختر شخصية ناقد من تحت. الناقد يبدأ باستفزاز عن نصك المدروس، يتبعه بثلاثة أسئلة ضغط، ويعطيك هيكل لدفاع AO5 قوي. استخدم هذا عشان تتمرّن على إيقاع: ناقد ← اعترف ← أعد التأطير ← شحذ، قبل ما تواجه مقال Unit 3 أو Unit 4 حقيقي.',
    es: 'Elige una figura crítica a continuación. Empieza con una provocación sobre el texto que has estudiado, continúa con tres preguntas de réplica y te ofrece un esquema para una sólida defensa AO5. Úsalo para practicar el ritmo de crítica → conceder → replantear → afinar antes de enfrentarte a una redacción real de Unit 3 o Unit 4.',
  },
  'essay_check.note.weight': {
    en: 'Worth up to 15% of A2 marks on IAL Units 3 & 4, and ~15% on UK A-Level literature papers. Named critics beat unnamed generic engagement every time.',
    ar: 'يستحقّ حتى ١٥٪ من درجات A2 في وحدات IAL ٣ و٤، وحوالي ١٥٪ في أوراق أدب A-Level البريطاني. الناقدون المُسمَّون يتفوّقون على التفاعل العام المجهول كل مرّة.',
    es: 'Vale hasta el 15% de las notas de A2 en las Units 3 y 4 de IAL, y alrededor del 15% en los exámenes de literatura de A-Level del Reino Unido. Citar críticos por su nombre siempre supera a una interacción genérica sin atribución.',
  },
  'essay_check.choose_persona': {
    en: 'Choose a critical perspective',
    ar: 'اختر منظوراً نقدياً',
    es: 'Elige una perspectiva crítica',
  },
  'essay_check.cta.start': { en: 'Start', ar: 'ابدأ', es: 'Empezar' },
  'essay_check.lens_suffix': { en: 'lens', ar: 'عدسة', es: 'enfoque' },
  'essay_check.cta.change': { en: 'Change critic', ar: 'غيّر الناقد', es: 'Cambiar de crítico' },
  'essay_check.opening_move': {
    en: 'Opening move',
    ar: 'الحركة الافتتاحية',
    es: 'Movimiento de apertura',
  },
  'essay_check.pushback.prefix': { en: 'Pushback', ar: 'ضغط', es: 'Réplica' },
  'essay_check.pushback.of': { en: 'of', ar: 'من', es: 'de' },
  'essay_check.pushback.desc': {
    en: 'Draft a response in your head (or on paper). When ready, reveal the next pushback to keep the pressure building.',
    ar: 'سوِّ مسودة رد في راسك (أو على ورق). لما تكون جاهز، اكشف الضغط التالي عشان تكمل بناء الضغط.',
    es: 'Redacta una respuesta mentalmente (o en papel). Cuando estés listo, revela la siguiente réplica para mantener la presión.',
  },
  'essay_check.nav.previous': { en: 'Previous', ar: 'السابق', es: 'Anterior' },
  'essay_check.nav.next_pushback': {
    en: 'Next pushback',
    ar: 'الضغط التالي',
    es: 'Siguiente réplica',
  },
  'essay_check.defence.title': {
    en: 'Your defence skeleton',
    ar: 'هيكل دفاعك',
    es: 'El esquema de tu defensa',
  },
  'essay_check.defence.desc': {
    en: 'A structural template for writing AO5-grade responses to this persona.',
    ar: 'قالب هيكلي لكتابة ردود بمستوى AO5 على هذه الشخصية.',
    es: 'Una plantilla estructural para redactar respuestas de nivel AO5 a esta figura crítica.',
  },
  'essay_check.howto.label': {
    en: 'How to use this in real essays:',
    ar: 'كيف تستخدم هذا في المقالات الفعلية:',
    es: 'Cómo usar esto en redacciones reales:',
  },
  'essay_check.howto.body': {
    en: 'in a Unit 3 or Unit 4 answer, you should name the critical position (e.g. "a feminist reading, following Gilbert and Gubar, would argue that …"), engage with it seriously, and then defend your own position against it. The skeleton above maps onto that rhythm. Markers reward the rhythm, not just the name.',
    ar: 'في إجابة Unit 3 أو Unit 4، ينبغي تسمية الموقف النقدي (مثلاً "قراءة نسوية، اتباعاً لـ Gilbert و Gubar، ستجادل بأن …")، التفاعل معه بجدية، ثم الدفاع عن موقفك ضدّه. الهيكل فوق يطابق هذا الإيقاع. المصحّحون يكافئون الإيقاع، مو فقط الاسم.',
    es: 'en una respuesta de Unit 3 o Unit 4, debes nombrar la posición crítica (p. ej., "una lectura feminista, siguiendo a Gilbert and Gubar, sostendría que …"), abordarla con seriedad y luego defender tu propia postura frente a ella. El esquema anterior se ajusta a ese ritmo. Los correctores premian el ritmo, no solo el nombre.',
  },
  'essay_check.footnote.prefix': {
    en: 'Critic personas are authored practice prompts - they do not call a live AI. Use them to rehearse the rhythm; bring your own live feedback via',
    ar: 'شخصيات الناقد هي مطالبات تمرين مكتوبة - ما تستدعي ذكاء اصطناعي حيّ. استخدمها عشان تتمرّن على الإيقاع؛ احصل على تغذية راجعة حيّة من',
    es: 'Las figuras críticas son ejercicios redactados de práctica: no invocan una IA en vivo. Úsalas para ensayar el ritmo; obtén tu propia retroalimentación en vivo mediante',
  },
  'essay_check.footnote.link': {
    en: 'AI essay marking',
    ar: 'تصحيح المقال بالذكاء الاصطناعي',
    es: 'corrección de redacciones con IA',
  },
  'essay_check.footnote.suffix': {
    en: 'after writing.',
    ar: 'بعد الكتابة.',
    es: 'después de escribir.',
  },
}
