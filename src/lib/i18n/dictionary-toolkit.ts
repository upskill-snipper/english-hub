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
  },
  'tools.meta.description': {
    en: 'Free tools for GCSE & IGCSE English: quote builders, essay frames, mark-scheme checklists.',
    ar: 'أدوات ببلاش لإنجليزي GCSE و IGCSE: بنّاء اقتباسات، هياكل مقالات، تشيك-لِست مخطط التصحيح.',
  },
  'tools.hub.h1': { en: 'Student Toolkit', ar: 'Toolkit الطالب' },
  'tools.hub.lead': {
    en: 'Your personal learning command centre. Build custom tests, generate revision notes, track your progress, and predict your GCSE grade.',
    ar: 'مركز التعلّم الشخصي مالك. سوِّ اختبارات على مقاسك، ولّد ملاحظات مراجعة، تابع تقدّمك، وتوقّع درجة GCSE مالتك.',
  },
  'tools.hub.section.ai_tools': {
    en: 'AI Study Tools',
    ar: 'أدوات دراسة بالذكاء الاصطناعي',
  },
  'tools.hub.section.dashboard': {
    en: 'Dashboard & Materials',
    ar: 'لوحة التحكم والمواد',
  },
  'tools.hub.section.predictor': { en: 'Grade Predictor', ar: 'متوقّع الدرجة' },
  'tools.hub.predictor.desc': {
    en: 'See your predicted GCSE grade based on quiz scores, mock results, and overall performance data. Updated as you study.',
    ar: 'شوف درجة GCSE المتوقّعة مالك بناءً على درجات الكويزات والامتحانات التجريبية وأداءك العام. يتحدّث مع كل ما تذاكر.',
  },
  'tools.hub.open_tool': { en: 'Open tool', ar: 'افتح الأداة' },
  'tools.hub.tag.ai': { en: 'AI-Powered', ar: 'مدعوم بالذكاء الاصطناعي' },
  'tools.hub.tag.data': { en: 'Data-Driven', ar: 'مبني على بياناتك' },
  'tools.hub.tool.test_builder.title': {
    en: 'AI Test Builder',
    ar: 'بنّاء اختبارات AI',
  },
  'tools.hub.tool.test_builder.desc': {
    en: "Generate custom tests from your board's texts and topics. Multiple-choice and short-answer questions, scored with GCSE grade equivalents.",
    ar: 'ولّد اختبارات من نصوص بورد الامتحان والمواضيع مالك. أسئلة اختيار من متعدّد وإجابات قصيرة، تنحسب مع درجات GCSE المُكافِئة.',
  },
  'tools.hub.tool.revision_notes.title': {
    en: 'AI Revision Notes',
    ar: 'ملاحظات مراجعة AI',
  },
  'tools.hub.tool.revision_notes.desc': {
    en: 'Get personalised revision summaries tailored to your weak areas, target grade, and study history. Key quotes, themes, and exam tips.',
    ar: 'احصل على ملخّصات مراجعة على مقاسك، مفصّلة على نقاط ضعفك ودرجتك المستهدَفة وتاريخ مذاكرتك. اقتباسات أساسية وثيمات ونصائح امتحان.',
  },
  'tools.hub.tool.personalised.title': {
    en: 'Personalised Revision',
    ar: 'مراجعة على مقاسك',
  },
  'tools.hub.tool.personalised.desc': {
    en: 'A revision guide built from YOUR data. Targets your weakest areas first, consolidates your current grade, then pushes you higher with stretch questions.',
    ar: 'دليل مراجعة مبني من بياناتك إنت. يستهدف نقاط الضعف مالك أوّل شي، يثبّت درجتك الحالية، وبعدها يدفعك أعلى بأسئلة تحدّي.',
  },
  'tools.hub.tool.progress.title': { en: 'My Progress', ar: 'تقدّمي' },
  'tools.hub.tool.progress.desc': {
    en: 'Track your scores, study streak, time spent, and see your predicted GCSE grade based on your performance.',
    ar: 'تابع درجاتك، وسلسلة مذاكرتك، والوقت اللي قضيته، وشوف درجة GCSE المتوقّعة مالك بناءً على أداءك.',
  },
  'tools.hub.tool.my_materials.title': { en: 'My Materials', ar: 'موادي' },
  'tools.hub.tool.my_materials.desc': {
    en: 'Access all your saved custom tests, revision notes, and quote banks in one place.',
    ar: 'وصول لكل الاختبارات المحفوظة وملاحظات المراجعة وبنوك الاقتباسات في مكان واحد.',
  },
  'tools.back': { en: 'Back to Toolkit', ar: 'رجوع لـ Toolkit' },

  // ─── My Materials (/toolkit/my-materials) ───────────────────────────
  'tools.my_materials.h1': { en: 'My Materials', ar: 'موادي' },
  'tools.my_materials.lead': {
    en: 'Your saved tests, revision notes, and quote banks',
    ar: 'اختباراتك المحفوظة وملاحظات المراجعة وبنوك الاقتباسات',
  },
  'tools.my_materials.filter.all': { en: 'All', ar: 'الكل' },
  'tools.my_materials.type.test': { en: 'Test', ar: 'اختبار' },
  'tools.my_materials.type.notes': { en: 'Revision Notes', ar: 'ملاحظات مراجعة' },
  'tools.my_materials.type.quotes': { en: 'Quote Bank', ar: 'بنك الاقتباسات' },
  'tools.my_materials.total_suffix': { en: 'total', ar: 'إجمالي' },
  'tools.my_materials.action.view': { en: 'View', ar: 'شوف' },
  'tools.my_materials.action.retake': { en: 'Re-take', ar: 'أعد المحاولة' },
  'tools.my_materials.confirm_delete': {
    en: 'Are you sure you want to delete this material?',
    ar: 'متأكّد إنك تبي تحذف هذه المادة؟',
  },
  'tools.my_materials.empty.h3': {
    en: 'No materials saved yet',
    ar: 'ما في مواد محفوظة الحين',
  },
  'tools.my_materials.empty.lead': {
    en: 'Generate custom tests or revision notes using the AI tools, then save them here for quick access later.',
    ar: 'ولّد اختبارات أو ملاحظات مراجعة بأدوات الذكاء الاصطناعي، وبعدها احفظها هنا عشان توصلها بسرعة لاحقاً.',
  },
  'tools.my_materials.empty.cta.test': { en: 'Create a Test', ar: 'سوِّ اختبار' },
  'tools.my_materials.empty.cta.notes': { en: 'Generate Notes', ar: 'ولّد ملاحظات' },
  'tools.my_materials.modal.test_count_prefix': {
    en: 'This test has',
    ar: 'هذا الاختبار فيه',
  },
  'tools.my_materials.modal.test_count_suffix': {
    en: 'questions.',
    ar: 'أسئلة.',
  },
  'tools.my_materials.modal.take_new': {
    en: 'Take a New Test',
    ar: 'سوِّ اختبار جديد',
  },

  // ─── Quiz / Test Builder (/toolkit/test-builder) ────────────────────
  'quiz_build.h1': { en: 'AI Test Builder', ar: 'بنّاء اختبارات AI' },
  'quiz_build.lead': {
    en: 'Generate custom tests and score them with GCSE grade equivalents',
    ar: 'ولّد اختبارات على مقاسك واحسب درجاتها مع درجات GCSE المُكافِئة',
  },
  'quiz_build.label.topic': { en: 'Topic / Text', ar: 'الموضوع / النص' },
  'quiz_build.placeholder.topic': { en: 'Select a topic...', ar: 'اختر موضوع...' },
  'quiz_build.optgroup.set_texts': { en: 'Set Texts', ar: 'النصوص المقرّرة' },
  'quiz_build.optgroup.general': { en: 'General Topics', ar: 'مواضيع عامة' },
  'quiz_build.option.language_analysis': {
    en: 'Language Analysis',
    ar: 'تحليل اللغة',
  },
  'quiz_build.option.creative_writing': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
  },
  'quiz_build.option.literary_techniques': {
    en: 'Literary Techniques',
    ar: 'الأساليب الأدبية',
  },
  'quiz_build.option.exam_technique': { en: 'Exam Technique', ar: 'أسلوب الامتحان' },
  'quiz_build.label.question_count': { en: 'Number of Questions', ar: 'عدد الأسئلة' },
  'quiz_build.questions_suffix': { en: 'questions', ar: 'سؤال' },
  'quiz_build.cta.generate': { en: 'Generate Test', ar: 'ولّد الاختبار' },
  'quiz_build.loading': {
    en: 'Generating your custom test...',
    ar: 'لحظة... نسوّي اختبارك على مقاسك',
  },
  'quiz_build.error.no_topic': {
    en: 'Please select a topic.',
    ar: 'اختر موضوع لو سمحت.',
  },
  'quiz_build.error.fail': {
    en: 'Failed to generate test',
    ar: 'ما قدرنا نولّد الاختبار',
  },
  'quiz_build.error.generic': { en: 'Something went wrong', ar: 'صار في خطأ' },
  'quiz_build.q_type.mcq': { en: 'MCQ', ar: 'اختيار متعدّد' },
  'quiz_build.q_type.short': { en: 'Short Answer', ar: 'إجابة قصيرة' },
  'quiz_build.input.placeholder_answer': {
    en: 'Type your answer here...',
    ar: 'اكتب جوابك هنا...',
  },
  'quiz_build.nav.previous': { en: 'Previous', ar: 'السابق' },
  'quiz_build.nav.next': { en: 'Next', ar: 'التالي' },
  'quiz_build.nav.submit': { en: 'Submit Test', ar: 'أرسل الاختبار' },
  'quiz_build.nav.go_to_q': { en: 'Go to question', ar: 'روح للسؤال' },
  'quiz_build.results.label': { en: 'Your Result', ar: 'نتيجتك' },
  'quiz_build.results.correct': { en: 'correct', ar: 'صحيحة' },
  'quiz_build.action.download_pdf': { en: 'Download as PDF', ar: 'حمّل PDF' },
  'quiz_build.action.save': { en: 'Save to My Materials', ar: 'احفظ في موادي' },
  'quiz_build.action.new_test': { en: 'New Test', ar: 'اختبار جديد' },
  'quiz_build.action.saved_alert': {
    en: 'Test saved to My Materials!',
    ar: 'تم حفظ الاختبار في موادي!',
  },
  'quiz_build.review.h3': { en: 'Review Answers', ar: 'راجع الإجابات' },
  'quiz_build.review.your_answer': { en: 'Your answer:', ar: 'جوابك:' },
  'quiz_build.review.not_answered': { en: 'Not answered', ar: 'ما تمت الإجابة' },
  'quiz_build.review.correct_answer': { en: 'Correct answer:', ar: 'الجواب الصحيح:' },

  // ─── Lesson / Revision Builder (/toolkit/revision-builder) ──────────
  'lesson_build.h1': {
    en: 'AI Revision Notes Builder',
    ar: 'بنّاء ملاحظات المراجعة AI',
  },
  'lesson_build.lead': {
    en: 'Generate personalised revision summaries tailored to your weak areas',
    ar: 'ولّد ملخّصات مراجعة على مقاسك مفصّلة على نقاط ضعفك',
  },
  'lesson_build.label.topic': { en: 'Text or Topic', ar: 'نص أو موضوع' },
  'lesson_build.placeholder.topic': {
    en: 'Select a text or topic...',
    ar: 'اختر نص أو موضوع...',
  },
  'lesson_build.optgroup.set_texts': { en: 'Set Texts', ar: 'النصوص المقرّرة' },
  'lesson_build.optgroup.language': { en: 'Language Topics', ar: 'مواضيع اللغة' },
  'lesson_build.optgroup.creative': { en: 'Creative Writing', ar: 'الكتابة الإبداعية' },
  'lesson_build.optgroup.exam': { en: 'Exam Technique', ar: 'أسلوب الامتحان' },
  'lesson_build.label.target_grade': { en: 'Target Grade', ar: 'الدرجة المستهدَفة' },
  'lesson_build.grade_prefix': { en: 'Grade', ar: 'درجة' },
  'lesson_build.weak.label': {
    en: 'Weak areas detected from your quiz history:',
    ar: 'نقاط ضعف مكتشفة من تاريخ الكويزات مالك:',
  },
  'lesson_build.weak.note': {
    en: 'Your revision notes will include extra focus on these areas.',
    ar: 'ملاحظات المراجعة مالتك بتركّز زيادة على هذه النقاط.',
  },
  'lesson_build.cta.generate': {
    en: 'Generate Revision Notes',
    ar: 'ولّد ملاحظات المراجعة',
  },
  'lesson_build.cta.generating': { en: 'Generating...', ar: 'لحظة...' },
  'lesson_build.error.no_topic': {
    en: 'Please select a topic.',
    ar: 'اختر موضوع لو سمحت.',
  },
  'lesson_build.error.fail': {
    en: 'Failed to generate notes',
    ar: 'ما قدرنا نولّد الملاحظات',
  },
  'lesson_build.error.generic': { en: 'Something went wrong', ar: 'صار في خطأ' },
  'lesson_build.badge.ai': { en: 'AI-Generated', ar: 'مُوَلَّد بالذكاء الاصطناعي' },
  'lesson_build.badge.template': { en: 'Template-Based', ar: 'قالب جاهز' },
  'lesson_build.generated_for': { en: 'Generated for Grade', ar: 'مولّد لدرجة' },
  'lesson_build.action.download_pdf': { en: 'Download PDF', ar: 'حمّل PDF' },
  'lesson_build.action.save': { en: 'Save to Materials', ar: 'احفظ في موادي' },
  'lesson_build.action.new_notes': {
    en: 'Generate New Notes',
    ar: 'ولّد ملاحظات جديدة',
  },
  'lesson_build.saved_alert': {
    en: 'Notes saved to My Materials!',
    ar: 'تم حفظ الملاحظات في موادي!',
  },

  // ─── Grade Predictor / Progress (/toolkit/progress) ─────────────────
  'grade_predict.h1': { en: 'My Progress', ar: 'تقدّمي' },
  'grade_predict.lead': {
    en: 'Track your learning journey and see where to focus next',
    ar: 'تابع رحلة التعلّم مالتك وشوف وين تركّز بعدها',
  },
  'grade_predict.section.stats': { en: 'Overall Stats', ar: 'الإحصائيات العامة' },
  'grade_predict.stat.poems': { en: 'Poems Studied', ar: 'قصائد درستها' },
  'grade_predict.stat.quizzes': { en: 'Quizzes Taken', ar: 'كويزات سوّيتها' },
  'grade_predict.stat.games': { en: 'Games Played', ar: 'ألعاب لعبتها' },
  'grade_predict.stat.essays': { en: 'Essays Marked', ar: 'مقالات اتصحّحت' },
  'grade_predict.stat.streak': { en: 'Day Streak', ar: 'سلسلة الأيام' },
  'grade_predict.section.predictor': { en: 'Grade Predictor', ar: 'متوقّع الدرجة' },
  'grade_predict.predicted_label': {
    en: 'Predicted GCSE Grade',
    ar: 'درجة GCSE المتوقّعة',
  },
  'grade_predict.predictor.based_prefix': { en: 'Based on', ar: 'بناءً على' },
  'grade_predict.predictor.scores_with_avg': {
    en: 'scores with an average of',
    ar: 'درجات بمتوسّط',
  },
  'grade_predict.predictor.equivalent_note': {
    en: 'equivalent -- take more quizzes for a more accurate prediction',
    ar: 'مُكافِئ -- سوِّ كويزات أكثر عشان توقّع أدقّ',
  },
  'grade_predict.predictor.empty': {
    en: 'No score data yet. Take quizzes and play games to see your predicted grade.',
    ar: 'ما في بيانات درجات الحين. سوِّ كويزات والعب ألعاب عشان تشوف درجتك المتوقّعة.',
  },
  'grade_predict.predictor.empty_cta': { en: 'Take a Quiz', ar: 'سوِّ كويز' },
  'grade_predict.section.streak': { en: 'Streak Tracker', ar: 'متتبّع السلسلة' },
  'grade_predict.streak.unit_one': { en: 'day', ar: 'يوم' },
  'grade_predict.streak.unit_many': { en: 'days', ar: 'أيام' },
  'grade_predict.streak.amazing': {
    en: 'Amazing streak! Keep it going!',
    ar: 'سلسلة وايد حلوة! كمّل عليها!',
  },
  'grade_predict.streak.good': {
    en: 'Good consistency! Push for a week!',
    ar: 'انتظام زين! ادفع للأسبوع!',
  },
  'grade_predict.streak.building': {
    en: 'You are building a habit. Come back tomorrow!',
    ar: 'إنت تبني عادة. ارجع باكر!',
  },
  'grade_predict.streak.start': {
    en: 'Start studying today to begin your streak.',
    ar: 'ابدأ المذاكرة الحين عشان تبدأ سلسلتك.',
  },
  'grade_predict.section.topic_breakdown': { en: 'Topic Breakdown', ar: 'تفصيل المواضيع' },
  'grade_predict.section.strengths': { en: 'Strengths', ar: 'نقاط القوّة' },
  'grade_predict.section.weaknesses': { en: 'Areas to Improve', ar: 'مجالات للتحسين' },
  'grade_predict.strengths.empty': {
    en: 'Score 80%+ on a topic to see it here.',
    ar: 'احصل على ٨٠٪ فأكثر على موضوع عشان تشوفه هنا.',
  },
  'grade_predict.weaknesses.empty': {
    en: 'Topics scoring below 60% will appear here with improvement links.',
    ar: 'المواضيع اللي درجاتها أقل من ٦٠٪ بتظهر هنا مع روابط للتحسين.',
  },
  'grade_predict.weaknesses.improve': { en: 'Improve this', ar: 'حسّن هذا' },
  'grade_predict.section.history': { en: 'Study History', ar: 'تاريخ المذاكرة' },
  'grade_predict.history.empty': {
    en: 'Your study activity will appear here as you use the platform.',
    ar: 'نشاط مذاكرتك بيظهر هنا لما تستخدم المنصة.',
  },
  'grade_predict.history.at': { en: 'at', ar: 'الساعة' },
  'grade_predict.section.suggestions': { en: 'Suggested Focus', ar: 'تركيز مُقترَح' },

  // ─── Personalised Revision (/toolkit/personalised-revision) ─────────
  'grade_predict.personal.h1': {
    en: 'Your Personalised Revision Guide',
    ar: 'دليل المراجعة على مقاسك',
  },
  'grade_predict.personal.lead': {
    en: 'Built from your quiz scores, essays, and study history. Updated every time you learn.',
    ar: 'مبني من درجات الكويزات والمقالات وتاريخ مذاكرتك. يتحدّث كل ما تتعلّم.',
  },
  'grade_predict.personal.no_data.h2': {
    en: 'We need your data first',
    ar: 'نحتاج بياناتك الأوّل',
  },
  'grade_predict.personal.no_data.lead': {
    en: 'Take some quizzes, study some poems, or submit an essay for marking. Once we have data on your performance, we can build a revision guide tailored specifically to you.',
    ar: 'سوِّ شوية كويزات، أو ادرس شوية قصائد، أو أرسل مقال للتصحيح. أوّل ما نحصل على بيانات أداءك، نقدر نبني دليل مراجعة على مقاسك إنت.',
  },
  'grade_predict.personal.cta.quiz': { en: 'Take a Quiz', ar: 'سوِّ كويز' },
  'grade_predict.personal.cta.essay': { en: 'Submit an Essay', ar: 'أرسل مقال' },
  'grade_predict.personal.stat.predicted': { en: 'Predicted Grade', ar: 'الدرجة المتوقّعة' },
  'grade_predict.personal.stat.quizzes': { en: 'Quizzes Taken', ar: 'كويزات سوّيتها' },
  'grade_predict.personal.stat.essays': { en: 'Essays Marked', ar: 'مقالات اتصحّحت' },
  'grade_predict.personal.stat.streak': { en: 'Study Streak', ar: 'سلسلة المذاكرة' },
  'grade_predict.personal.section.why': {
    en: 'Why we built this for you',
    ar: 'ليش بنينا هذا لك',
  },
  'grade_predict.personal.section.gaps': { en: 'Close the Gaps', ar: 'سدّ الثغرات' },
  'grade_predict.personal.section.secure_prefix': { en: 'Secure Grade', ar: 'ثبّت الدرجة' },
  'grade_predict.personal.section.push_prefix': { en: 'Push for Grade', ar: 'ادفع لدرجة' },
  'grade_predict.personal.priority1': { en: 'Priority 1', ar: 'الأولوية ١' },
  'grade_predict.personal.priority2': { en: 'Priority 2', ar: 'الأولوية ٢' },
  'grade_predict.personal.priority3': { en: 'Priority 3', ar: 'الأولوية ٣' },
  'grade_predict.personal.what_looks_like_prefix': {
    en: 'What Grade',
    ar: 'كيف تكون درجة',
  },
  'grade_predict.personal.what_looks_like_suffix': { en: 'looks like', ar: 'مالها شكل' },
  'grade_predict.personal.five_points': {
    en: '5 Key Revision Points',
    ar: '٥ نقاط مراجعة أساسية',
  },
  'grade_predict.personal.model_para_prefix': {
    en: 'Model Paragraph - Grade',
    ar: 'فقرة نموذجية - درجة',
  },
  'grade_predict.personal.annotations': { en: 'Annotations', ar: 'تعليقات' },
  'grade_predict.personal.what_to_reach_prefix': {
    en: 'What you need to reach Grade',
    ar: 'ما تحتاجه عشان توصل درجة',
  },
  'grade_predict.personal.challenges': { en: 'Challenge Questions', ar: 'أسئلة التحدّي' },
  'grade_predict.personal.challenges_note': {
    en: 'These are designed to make you think beyond surface-level analysis. Do not look for a "right answer" - the thinking process is what matters.',
    ar: 'هذه مصمّمة عشان تخلّيك تفكّر أبعد من التحليل السطحي. ما تدوّر على "جواب صح" - عملية التفكير هي اللي تهمّ.',
  },
  'grade_predict.personal.grade9_tip.h4': {
    en: 'Grade 9 Tip: Conceptualised Responses',
    ar: 'نصيحة الدرجة ٩: ردود مفهومية',
  },
  'grade_predict.personal.section.plan': {
    en: 'Your Personalised Study Plan',
    ar: 'خطة المذاكرة على مقاسك',
  },
  'grade_predict.personal.plan.impact_suffix': { en: 'impact', ar: 'الأثر' },
  'grade_predict.personal.quick.quiz': { en: 'Take a Quiz', ar: 'سوِّ كويز' },
  'grade_predict.personal.quick.essay': { en: 'Submit an Essay', ar: 'أرسل مقال' },
  'grade_predict.personal.quick.progress': { en: 'View Progress', ar: 'شوف التقدّم' },

  // ─── Essay Check / AO5 Critic Simulator (/toolkit/critic) ───────────
  // Long-form persona body content (the 5 critical schools, their named
  // figures, pushbacks and defence skeletons) stays EN-only - pedagogical
  // content rather than UI chrome. AR locale falls back gracefully via
  // lookup()'s en-default behaviour.
  'essay_check.h1': { en: 'AO5 Critic Simulator', ar: 'مُحاكي ناقد AO5' },
  'essay_check.badge.trainer': {
    en: 'AO5 Trainer - A-Level / IAL',
    ar: 'مدرّب AO5 - A-Level / IAL',
  },
  'essay_check.lead': {
    en: 'Pick a critical persona below. They open with a provocation about your studied text, follow up with three pushback questions, and give you a skeleton for a strong AO5 defence. Use this to practise the rhythm of critic → concede → reframe → sharpen before you hit a real Unit 3 or Unit 4 essay.',
    ar: 'اختر شخصية ناقد من تحت. الناقد يبدأ باستفزاز عن نصك المدروس، يتبعه بثلاثة أسئلة ضغط، ويعطيك هيكل لدفاع AO5 قوي. استخدم هذا عشان تتمرّن على إيقاع: ناقد ← اعترف ← أعد التأطير ← شحذ، قبل ما تواجه مقال Unit 3 أو Unit 4 حقيقي.',
  },
  'essay_check.note.weight': {
    en: 'Worth up to 15% of A2 marks on IAL Units 3 & 4, and ~15% on UK A-Level literature papers. Named critics beat unnamed generic engagement every time.',
    ar: 'يستحقّ حتى ١٥٪ من درجات A2 في وحدات IAL ٣ و٤، وحوالي ١٥٪ في أوراق أدب A-Level البريطاني. الناقدون المُسمَّون يتفوّقون على التفاعل العام المجهول كل مرّة.',
  },
  'essay_check.choose_persona': {
    en: 'Choose a critical perspective',
    ar: 'اختر منظوراً نقدياً',
  },
  'essay_check.cta.start': { en: 'Start', ar: 'ابدأ' },
  'essay_check.lens_suffix': { en: 'lens', ar: 'عدسة' },
  'essay_check.cta.change': { en: 'Change critic', ar: 'غيّر الناقد' },
  'essay_check.opening_move': { en: 'Opening move', ar: 'الحركة الافتتاحية' },
  'essay_check.pushback.prefix': { en: 'Pushback', ar: 'ضغط' },
  'essay_check.pushback.of': { en: 'of', ar: 'من' },
  'essay_check.pushback.desc': {
    en: 'Draft a response in your head (or on paper). When ready, reveal the next pushback to keep the pressure building.',
    ar: 'سوِّ مسودة رد في راسك (أو على ورق). لما تكون جاهز، اكشف الضغط التالي عشان تكمل بناء الضغط.',
  },
  'essay_check.nav.previous': { en: 'Previous', ar: 'السابق' },
  'essay_check.nav.next_pushback': { en: 'Next pushback', ar: 'الضغط التالي' },
  'essay_check.defence.title': { en: 'Your defence skeleton', ar: 'هيكل دفاعك' },
  'essay_check.defence.desc': {
    en: 'A structural template for writing AO5-grade responses to this persona.',
    ar: 'قالب هيكلي لكتابة ردود بمستوى AO5 على هذه الشخصية.',
  },
  'essay_check.howto.label': {
    en: 'How to use this in real essays:',
    ar: 'كيف تستخدم هذا في المقالات الفعلية:',
  },
  'essay_check.howto.body': {
    en: 'in a Unit 3 or Unit 4 answer, you should name the critical position (e.g. "a feminist reading, following Gilbert and Gubar, would argue that …"), engage with it seriously, and then defend your own position against it. The skeleton above maps onto that rhythm. Markers reward the rhythm, not just the name.',
    ar: 'في إجابة Unit 3 أو Unit 4، ينبغي تسمية الموقف النقدي (مثلاً "قراءة نسوية، اتباعاً لـ Gilbert و Gubar، ستجادل بأن …")، التفاعل معه بجدية، ثم الدفاع عن موقفك ضدّه. الهيكل فوق يطابق هذا الإيقاع. المصحّحون يكافئون الإيقاع، مو فقط الاسم.',
  },
  'essay_check.footnote.prefix': {
    en: 'Critic personas are authored practice prompts - they do not call a live AI. Use them to rehearse the rhythm; bring your own live feedback via',
    ar: 'شخصيات الناقد هي مطالبات تمرين مكتوبة - ما تستدعي ذكاء اصطناعي حيّ. استخدمها عشان تتمرّن على الإيقاع؛ احصل على تغذية راجعة حيّة من',
  },
  'essay_check.footnote.link': {
    en: 'AI essay marking',
    ar: 'تصحيح المقال بالذكاء الاصطناعي',
  },
  'essay_check.footnote.suffix': { en: 'after writing.', ar: 'بعد الكتابة.' },
}
