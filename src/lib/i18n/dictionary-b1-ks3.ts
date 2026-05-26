/**
 * dictionary-b1-ks3.ts - Bucket B Phase B1.
 * Curated EN + Khaleeji (Gulf) Arabic for the /ks3 shell + hub pages.
 *
 * Khaleeji conventions (matches dictionary.ts master rules):
 *   شوف / دوّر / وايد / الحين / شلون / أبغى
 *   Brand + technical terms stay in Latin: KS3, iLowerSecondary, Edexcel,
 *   Section A / Section B, S1-S4, RAO1-WAO2.
 */
export const B1_KS3_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ── KS3 hub page - stat boxes ──────────────────────────────────────────────
  'ks3.hub.stat.year_groups': { en: 'Year groups', ar: 'المجموعات السنوية' },
  'ks3.hub.stat.terms_mapped': { en: 'Terms mapped', ar: 'الفصول المخططة' },
  'ks3.hub.stat.skill_codes': { en: 'Skill codes', ar: 'رموز المهارات' },
  'ks3.hub.stat.rubric_rows': { en: 'Rubric rows', ar: 'صفوف معايير التصحيح' },

  // ── KS3 hub page - iLowerSecondary CTA section ─────────────────────────────
  'ks3.hub.ils.eyebrow': { en: 'Exam preparation', ar: 'التحضير للامتحان' },
  'ks3.hub.ils.body': {
    en: 'The complete student hub for the {paperCode} paper: the specification and mark scheme, skill masterclasses for every reading and writing objective, question-type guides, six full original practice papers, a quiz, grammar lab and study plan.',
    ar: 'مركز الطالب الكامل لورقة {paperCode}: المواصفات ومعايير التصحيح، وحصص إتقان المهارات لكل هدف قراءة وكتابة، وأدلة أنواع الأسئلة، وستة أوراق تدريبية أصلية كاملة، وكويز ومختبر القواعد وخطة الدراسة.',
  },
  'ks3.hub.ils.cta': { en: 'Open the exam hub', ar: 'افتح مركز الامتحان' },

  // ── KS3 hub page - reference & standards section ───────────────────────────
  'ks3.hub.reference.heading': { en: 'Reference & standards', ar: 'المراجع والمعايير' },
  'ks3.hub.reference.explore': { en: 'Explore', ar: 'استكشف' },
  'ks3.hub.reference.skills.desc': {
    en: 'The KS3 skill progression mapped code-by-code across Reading, Writing, Language and Speaking & Listening - each code shows what it becomes the following year.',
    ar: 'تطور مهارات KS3 مُرتَّب رمزاً برمز عبر القراءة والكتابة واللغة والتحدث والاستماع - كل رمز يوضح ما يصبح عليه في السنة التالية.',
  },
  'ks3.hub.reference.rubrics.desc': {
    en: 'Year-by-year marking rubrics with level descriptors, so every independent outcome is assessed against a consistent, transparent standard.',
    ar: 'معايير التصحيح سنة بسنة مع وصف كل مستوى، حتى يُقيَّم كل إنتاج مستقل وفق معيار ثابت وواضح.',
  },
  'ks3.hub.reference.endks3.desc': {
    en: 'The end-of-KS3 expected standard across reading, writing, grammar, speaking and literary knowledge - the bar students clear before GCSE.',
    ar: 'المعيار المتوقع في نهاية KS3 في القراءة والكتابة والقواعد والتحدث والمعرفة الأدبية - العتبة اللي يتخطاها الطالب قبل GCSE.',
  },

  // ── KS3 hub page - start CTA section ──────────────────────────────────────
  'ks3.hub.start.heading': {
    en: 'Start at the beginning: {yearLabel}',
    ar: 'ابدأ من الأساس: {yearLabel}',
  },
  'ks3.hub.start.heading_prefix': { en: 'Start at the beginning:', ar: 'ابدأ من الأساس:' },
  'ks3.hub.start.body': {
    en: 'Foundations builds the core reading and writing reflexes the rest of KS3 depends on. Open Year 7 to see the termly plans and weekly lesson frameworks.',
    ar: 'سنة الأساسيات تبني ردود الفعل الأساسية في القراءة والكتابة اللي تعتمد عليها بقية KS3. افتح Year 7 لتشوف خطط الفصول وأطر الدروس الأسبوعية.',
  },

  // ── iLowerSecondary layout - subnav ────────────────────────────────────────
  'ks3.ils.nav.aria': {
    en: 'iLowerSecondary English sections',
    ar: 'أقسام iLowerSecondary English',
  },
  'ks3.ils.nav.header': { en: 'iLowerSecondary English', ar: 'iLowerSecondary English' },
  'ks3.ils.nav.overview': { en: 'Overview', ar: 'نظرة عامة' },
  'ks3.ils.nav.specification': { en: 'Specification', ar: 'المواصفات' },
  'ks3.ils.nav.exam_format': { en: 'Exam format', ar: 'شكل الامتحان' },
  'ks3.ils.nav.mark_scheme': { en: 'Mark scheme', ar: 'مخطط الدرجات' },
  'ks3.ils.nav.grade_targets': { en: 'Grade targets S1-S4', ar: 'أهداف الدرجات S1-S4' },
  'ks3.ils.nav.reading_skills': { en: 'Reading skills', ar: 'مهارات القراءة' },
  'ks3.ils.nav.writing_skills': { en: 'Writing skills', ar: 'مهارات الكتابة' },
  'ks3.ils.nav.question_types': { en: 'Question types', ar: 'أنواع الأسئلة' },
  'ks3.ils.nav.text_types': { en: 'Text types', ar: 'أنواع النصوص' },
  'ks3.ils.nav.fiction': { en: 'Fiction', ar: 'الأدب' },
  'ks3.ils.nav.practice': { en: 'Practice papers', ar: 'أوراق التدريب' },
  'ks3.ils.nav.quiz': { en: 'Quiz', ar: 'كويز' },
  'ks3.ils.nav.grammar_lab': { en: 'Grammar lab', ar: 'مختبر القواعد' },
  'ks3.ils.nav.vocabulary': { en: 'Vocabulary', ar: 'المفردات' },

  // ── iLowerSecondary overview page - breadcrumb ─────────────────────────────
  'ks3.ils.breadcrumb.home': { en: 'Home', ar: 'الرئيسية' },
  'ks3.ils.breadcrumb.ks3': { en: 'Key Stage 3', ar: 'المرحلة الرئيسية الثالثة KS3' },
  'ks3.ils.breadcrumb.ils': { en: 'iLowerSecondary English', ar: 'iLowerSecondary English' },

  // ── iLowerSecondary overview page - sections ───────────────────────────────
  'ks3.ils.overview.who_heading': { en: 'Who it is for', ar: 'لمن هذا الامتحان؟' },
  'ks3.ils.overview.who_body': {
    en: 'This qualification is sat by Year 9 students following the Pearson Edexcel iLowerSecondary English Curriculum.',
    ar: 'هذا المؤهل يأخذه طلاب Year 9 الملتحقون بمنهج Pearson Edexcel iLowerSecondary English.',
  },
  'ks3.ils.overview.progression_heading': {
    en: 'Strong performance progresses naturally to:',
    ar: 'الأداء القوي يفضي بشكل طبيعي إلى:',
  },
  'ks3.ils.overview.glance_heading': { en: 'Exam at a glance', ar: 'الامتحان بنظرة سريعة' },
  'ks3.ils.overview.glance_assessment': { en: 'Assessment', ar: 'طريقة التقييم' },
  'ks3.ils.overview.glance_duration': { en: 'Duration', ar: 'المدة' },
  'ks3.ils.overview.glance_duration_detail': {
    en: 'One sitting, no breaks. Dictionaries are not allowed.',
    ar: 'جلسة واحدة بدون فترة راحة. القواميس غير مسموحة.',
  },
  'ks3.ils.overview.glance_total_marks': { en: 'Total marks', ar: 'مجموع الدرجات' },
  'ks3.ils.overview.glance_sections': { en: 'Sections', ar: 'الأقسام' },
  'ks3.ils.overview.glance_grading': { en: 'Grading', ar: 'نظام التقدير' },
  'ks3.ils.overview.glance_availability': { en: 'Availability', ar: 'مواعيد التوفر' },
  'ks3.ils.overview.ao_heading': {
    en: 'The seven assessment objectives',
    ar: 'الأهداف التقييمية السبعة',
  },
  'ks3.ils.overview.ao_intro': {
    en: 'Every question targets one of these objectives. The percentages are the weighting each carries across the qualification.',
    ar: 'كل سؤال يستهدف واحداً من هذه الأهداف. النسب المئوية توضح وزن كل هدف في المؤهل الكامل.',
  },
  'ks3.ils.overview.start_here_heading': { en: 'Start here', ar: 'ابدأ من هنا' },

  // ── iLowerSecondary overview page - start-here card titles + blurbs ────────
  'ks3.ils.start.specification.title': { en: 'Specification', ar: 'المواصفات' },
  'ks3.ils.start.specification.blurb': {
    en: 'The full content breakdown - what is assessed and why.',
    ar: 'تفصيل المحتوى الكامل - شنو يُقيَّم ولماذا.',
  },
  'ks3.ils.start.exam_format.title': { en: 'Exam format', ar: 'شكل الامتحان' },
  'ks3.ils.start.exam_format.blurb': {
    en: 'Section A reading, Section B writing, timings and the source booklet.',
    ar: 'قراءة Section A، كتابة Section B، التوقيت وكتيّب النصوص.',
  },
  'ks3.ils.start.mark_scheme.title': { en: 'Mark scheme', ar: 'مخطط الدرجات' },
  'ks3.ils.start.mark_scheme.blurb': {
    en: 'How examiners award marks, including the levelled writing grids.',
    ar: 'شلون يمنح المصححون الدرجات، بما فيها جداول الكتابة المستوياتية.',
  },
  'ks3.ils.start.grade_targets.title': { en: 'Grade targets S1-S4', ar: 'أهداف الدرجات S1-S4' },
  'ks3.ils.start.grade_targets.blurb': {
    en: 'What each grade looks like and how to move up a level.',
    ar: 'شلون يبدو كل مستوى وكيف ترتقي لمستوى أعلى.',
  },
  'ks3.ils.start.reading_skills.title': { en: 'Reading skills', ar: 'مهارات القراءة' },
  'ks3.ils.start.reading_skills.blurb': {
    en: 'Retrieval, inference, structure, language and comparison.',
    ar: 'الاسترجاع والاستنتاج والبنية واللغة والمقارنة.',
  },
  'ks3.ils.start.writing_skills.title': { en: 'Writing skills', ar: 'مهارات الكتابة' },
  'ks3.ils.start.writing_skills.blurb': {
    en: 'Form, audience and purpose, structure, grammar and accuracy.',
    ar: 'الشكل والجمهور والهدف والبنية والقواعد والدقة.',
  },
  'ks3.ils.start.question_types.title': { en: 'Question types', ar: 'أنواع الأسئلة' },
  'ks3.ils.start.question_types.blurb': {
    en: 'Every question style with how-to-answer guidance.',
    ar: 'كل أسلوب سؤال مع إرشادات كيف تجيب عليه.',
  },
  'ks3.ils.start.text_types.title': { en: 'Text types', ar: 'أنواع النصوص' },
  'ks3.ils.start.text_types.blurb': {
    en: 'The non-fiction and fiction texts you may meet.',
    ar: 'النصوص غير القصصية والقصصية اللي قد تواجهها.',
  },
  'ks3.ils.start.fiction.title': { en: 'Fiction', ar: 'الأدب' },
  'ks3.ils.start.fiction.blurb': {
    en: 'Working with the unseen fiction text and its genres.',
    ar: 'التعامل مع النص الأدبي الجديد وأجناسه.',
  },
  'ks3.ils.start.practice.title': { en: 'Practice papers', ar: 'أوراق التدريب' },
  'ks3.ils.start.practice.blurb': {
    en: 'Original, exam-style papers written by The English Hub.',
    ar: 'أوراق أصلية بأسلوب الامتحان، كتبها The English Hub.',
  },
  'ks3.ils.start.quiz.title': { en: 'Quiz', ar: 'كويز' },
  'ks3.ils.start.quiz.blurb': {
    en: 'Quick-fire questions to test your understanding.',
    ar: 'أسئلة سريعة لاختبار فهمك.',
  },
  'ks3.ils.start.grammar_lab.title': { en: 'Grammar lab', ar: 'مختبر القواعد' },
  'ks3.ils.start.grammar_lab.blurb': {
    en: 'Sentences, punctuation and grammatical terminology drills.',
    ar: 'تمارين على الجمل والترقيم والمصطلحات النحوية.',
  },
  'ks3.ils.start.vocabulary.title': { en: 'Vocabulary', ar: 'المفردات' },
  'ks3.ils.start.vocabulary.blurb': {
    en: 'Build precise, ambitious word choices for top marks.',
    ar: 'طوّر اختيارات مفردات دقيقة وطموحة للدرجات العليا.',
  },

  // ── Shared breadcrumb labels (reused across section indexes) ───────────────
  'ks3.ils.breadcrumb.question_types': { en: 'Question types', ar: 'أنواع الأسئلة' },
  'ks3.ils.breadcrumb.text_types': { en: 'Text types', ar: 'أنواع النصوص' },
  'ks3.ils.breadcrumb.fiction': { en: 'Fiction', ar: 'الأدب' },
  'ks3.ils.breadcrumb.practice': { en: 'Practice papers', ar: 'أوراق التدريب' },

  // ── Shared inline text (reused across section indexes) ─────────────────────
  'ks3.ils.shared.home': { en: 'Home', ar: 'الرئيسية' },

  // ── Question types index page ──────────────────────────────────────────────
  'ks3.ils.qt.h1': { en: 'Question types', ar: 'أنواع الأسئلة' },
  'ks3.ils.qt.lead': {
    en: 'Every question style that appears in the Section A reading paper has its own masterclass - how it is worded, exactly how the marks are awarded, and original worked examples.',
    ar: 'لكل أسلوب سؤال يظهر في ورقة قراءة Section A حصة إتقان خاصة - شلون صيغته، وكيف بالضبط تُمنح الدرجات، مع أمثلة محلولة أصلية.',
  },
  'ks3.ils.qt.cross_link': {
    en: 'See them combined in a full {practice_link} and compare to top-band {model_link}.',
    ar: 'شوفها مجتمعة في {practice_link} كامل وقارنها بـ{model_link} من أعلى المستويات.',
  },
  'ks3.ils.qt.practice_link_text': { en: 'practice paper', ar: 'ورقة تدريبية' },
  'ks3.ils.qt.model_link_text': { en: 'model answers', ar: 'إجابات نموذجية' },

  // Question types card titles + blurbs
  'ks3.ils.qt.synonyms.title': { en: 'Synonyms & vocabulary', ar: 'المرادفات والمفردات' },
  'ks3.ils.qt.synonyms.blurb': {
    en: 'Circle/underline the synonym; vocabulary-in-context MCQs.',
    ar: 'دوّر/خطّط تحت المرادف؛ أسئلة اختيار متعدد للمفردات في السياق.',
  },
  'ks3.ils.qt.short_answer.title': { en: 'Short answers', ar: 'الإجابات القصيرة' },
  'ks3.ils.qt.short_answer.blurb': {
    en: '1-2 mark "Why…?" / "How does…?" retrieval and inference.',
    ar: 'استرجاع واستنتاج بـ1-2 درجة من نوع "لماذا…؟" / "كيف…؟"',
  },
  'ks3.ils.qt.punctuation.title': { en: 'Punctuation effect', ar: 'تأثير علامات الترقيم' },
  'ks3.ils.qt.punctuation.blurb': {
    en: 'Name the effect of a mark, then explain it from the text.',
    ar: 'سمّ تأثير العلامة ثم وضّحه من النص.',
  },
  'ks3.ils.qt.meaning_impact.title': { en: 'Meaning & impact', ar: 'المعنى والتأثير' },
  'ks3.ils.qt.meaning_impact.blurb': {
    en: '"What did the writer mean…?" and 4-mark "how does…" items.',
    ar: '"شنو قصد الكاتب…؟" وأسئلة "كيف…" من 4 درجات.',
  },
  'ks3.ils.qt.tables.title': { en: 'Tables & closed questions', ar: 'الجداول والأسئلة المغلقة' },
  'ks3.ils.qt.tables.blurb': {
    en: 'Tick-which-text tables, MCQs, underline, which-text-appealing.',
    ar: 'جداول أي نص، اختيار متعدد، تسطير، أي نص أكثر جاذبية.',
  },
  'ks3.ils.qt.extended.title': { en: 'Extended comparison', ar: 'المقارنة الموسّعة' },
  'ks3.ils.qt.extended.blurb': {
    en: 'The 6-mark levelled comparison (RAO2 + RAO4 + RAO5).',
    ar: 'المقارنة المستوياتية من 6 درجات (RAO2 + RAO4 + RAO5).',
  },

  // ── Text types index page ──────────────────────────────────────────────────
  'ks3.ils.tt.h1': { en: 'Non-fiction text types', ar: 'أنواع النصوص غير القصصية' },
  'ks3.ils.tt.lead_pre': {
    en: 'Section A always includes two non-fiction texts. The specification expects experience of',
    ar: 'يتضمن Section A دائماً نصّين غير قصصيين. تتوقع المواصفات التعامل مع',
  },
  'ks3.ils.tt.lead_post': {
    en: 'text types written for five purposes. Each guide shows how to read it analytically and how to write it for Section B.',
    ar: 'أنواع نصوص مكتوبة لخمسة أهداف. كل دليل يوضح كيف تقرأها تحليلياً وكيف تكتبها في Section B.',
  },
  'ks3.ils.tt.fiction_link': {
    en: 'The third Section A text is always fiction - see the {fiction_link}.',
    ar: 'النص الثالث في Section A يكون دائماً أدبياً - شوف {fiction_link}.',
  },
  'ks3.ils.tt.fiction_link_text': { en: 'fiction guides', ar: 'أدلة الأدب' },

  // Text types card titles + blurbs
  'ks3.ils.tt.auto_bio.title': {
    en: 'Autobiography & biography',
    ar: 'السيرة الذاتية والسيرة الغيرية',
  },
  'ks3.ils.tt.auto_bio.blurb': {
    en: 'First-person life writing and accounts of others.',
    ar: 'الكتابة عن الحياة بضمير المتكلم ورواية حياة الآخرين.',
  },
  'ks3.ils.tt.blogs.title': { en: 'Blogs & journals', ar: 'المدونات والمذكرات' },
  'ks3.ils.tt.blogs.blurb': {
    en: 'Personal voice, informal register, dated entries.',
    ar: 'الصوت الشخصي، الأسلوب غير الرسمي، التدوينات المؤرخة.',
  },
  'ks3.ils.tt.leaflets.title': {
    en: 'Leaflets, brochures & guides',
    ar: 'النشرات والكتيّبات والأدلة',
  },
  'ks3.ils.tt.leaflets.blurb': {
    en: 'Headings, direct address, layout features and effect.',
    ar: 'العناوين، المخاطبة المباشرة، خصائص التصميم وتأثيره.',
  },
  'ks3.ils.tt.articles.title': { en: 'Newspaper & magazine articles', ar: 'مقالات الصحف والمجلات' },
  'ks3.ils.tt.articles.blurb': {
    en: 'Headline, standfirst, report vs opinion structure.',
    ar: 'العنوان الرئيسي والعنوان الفرعي وبنية التقرير مقابل الرأي.',
  },
  'ks3.ils.tt.instructions.title': { en: 'Instructions', ar: 'التعليمات' },
  'ks3.ils.tt.instructions.blurb': {
    en: 'Imperative verbs and sequencing - a common RAO4 focus.',
    ar: 'أفعال الأمر والتسلسل - تركيز شائع في RAO4.',
  },
  'ks3.ils.tt.recount.title': { en: 'Recount', ar: 'إعادة السرد' },
  'ks3.ils.tt.recount.blurb': {
    en: 'Chronological, past tense - a text type and a writing form.',
    ar: 'زمني، ماضٍ - نوع نص وشكل كتابة في آنٍ معاً.',
  },
  'ks3.ils.tt.reports.title': { en: 'Reports', ar: 'التقارير' },
  'ks3.ils.tt.reports.blurb': {
    en: 'Objective, impersonal, classified information.',
    ar: 'موضوعية، غير شخصية، معلومات مصنّفة.',
  },
  'ks3.ils.tt.purposes.title': { en: 'The five purposes', ar: 'الأهداف الخمسة' },
  'ks3.ils.tt.purposes.blurb': {
    en: 'Argue, describe, explain, inform, persuade - how to spot each.',
    ar: 'الجدل والوصف والتفسير والإخبار والإقناع - كيف تتعرف على كل منها.',
  },

  // ── Fiction index page ─────────────────────────────────────────────────────
  'ks3.ils.fic.h1': { en: 'Fiction (Section A)', ar: 'الأدب (Section A)' },
  'ks3.ils.fic.lead': {
    en: 'One of the three Section A texts is always fiction. These guides teach you how to read it analytically - by genre, by narrative perspective, and through a complete guided-reading method.',
    ar: 'واحد من نصوص Section A الثلاثة يكون دائماً أدبياً. هذه الأدلة تعلّمك كيف تقرأه تحليلياً - حسب الجنس الأدبي، وزاوية الرواية، ومن خلال أسلوب قراءة موجّه كامل.',
  },
  'ks3.ils.fic.practice_link': {
    en: 'Then apply it under timed conditions in a {practice_link}.',
    ar: 'ثم طبّقه في ظروف محدودة الوقت في {practice_link}.',
  },
  'ks3.ils.fic.practice_link_text': { en: 'practice paper', ar: 'ورقة تدريبية' },

  // Fiction card titles + blurbs
  'ks3.ils.fic.reading.title': { en: 'Reading fiction', ar: 'قراءة الأدب' },
  'ks3.ils.fic.reading.blurb': {
    en: 'The guided-reading method: characters, plot/structure, style - with a full worked extract.',
    ar: 'أسلوب القراءة الموجّهة: الشخصيات، الحبكة/البنية، الأسلوب - مع مقتطف محلول كامل.',
  },
  'ks3.ils.fic.genres.title': { en: 'Fiction genres', ar: 'الأجناس الأدبية' },
  'ks3.ils.fic.genres.blurb_pre': {
    en: 'Conventions of',
    ar: 'خصائص',
  },
  'ks3.ils.fic.genres.blurb_post': {
    en: '- with original genre extracts.',
    ar: '- مع مقتطفات أصلية من كل جنس.',
  },
  'ks3.ils.fic.perspective.title': { en: 'Narrative perspective', ar: 'زاوية السرد' },
  'ks3.ils.fic.perspective.blurb_pre': {
    en: '',
    ar: '',
  },
  'ks3.ils.fic.perspective.blurb_post': {
    en: '- and the effect each has on the reader.',
    ar: '- وتأثير كل منها على القارئ.',
  },

  // ── Practice papers index page ─────────────────────────────────────────────
  'ks3.ils.prac.h1': { en: 'Practice papers', ar: 'أوراق التدريب' },
  'ks3.ils.prac.lead_pre': {
    en: 'Six complete, original practice papers built to the exact',
    ar: 'ست أوراق تدريبية أصلية وكاملة مبنية بالضبط وفق',
  },
  'ks3.ils.prac.lead_post': {
    en: 'format - {marks} marks, {duration}, two sections. Every source text is an original work written for The English Hub: nothing is reproduced from a real past paper.',
    ar: 'format - {marks} درجة، {duration}، قسمان. كل نص مصدر هو عمل أصلي كتبه The English Hub: لا شيء مأخوذ من ورقة امتحان حقيقية سابقة.',
  },
  'ks3.ils.prac.choose_heading': { en: 'Choose a paper', ar: 'اختر ورقة' },
  'ks3.ils.prac.paper_label': { en: 'Paper', ar: 'الورقة' },
  'ks3.ils.prac.open_paper': { en: 'Open Paper {n} →', ar: 'افتح الورقة {n} ←' },
  'ks3.ils.prac.more_writing_heading': { en: 'More writing practice', ar: 'تدريب كتابي إضافي' },
  'ks3.ils.prac.more_writing_body': {
    en: 'Want to drill Section B on its own? The {tasks_link} has a large set of original extended-writing prompts mapped to every form, audience and purpose on the specification, each with a planning steer and the band the examiner is looking for.',
    ar: 'تبغى تتدرب على Section B لحاله؟ {tasks_link} يحتوي على مجموعة كبيرة من محفّزات الكتابة الموسّعة الأصلية مرتبطة بكل شكل وجمهور وهدف في المواصفات، مع توجيه للتخطيط والمستوى اللي يبحث عنه المصحح.',
  },
  'ks3.ils.prac.tasks_link_text': { en: 'writing task bank', ar: 'بنك مهام الكتابة' },
  'ks3.ils.prac.how_to_heading': { en: 'How to use these papers', ar: 'شلون تستخدم هذه الأوراق' },
  'ks3.ils.prac.how_1': {
    en: 'Sit one in a single {duration} session with no dictionary - that mirrors the real exam.',
    ar: 'اجلس لواحدة في جلسة واحدة {duration} بدون قاموس - هذا يحاكي الامتحان الحقيقي.',
  },
  'ks3.ils.prac.how_2': {
    en: 'Spend about {secA_time} on Section A and {secB_time} on Section B.',
    ar: 'اقضِ حوالي {secA_time} في Section A و{secB_time} في Section B.',
  },
  'ks3.ils.prac.how_3': {
    en: 'Mark it yourself using the hidden mark scheme on each paper and the {mark_scheme_link}.',
    ar: 'صحّحها بنفسك باستخدام مخطط الدرجات المخفي في كل ورقة و{mark_scheme_link}.',
  },
  'ks3.ils.prac.mark_scheme_link_text': { en: 'mark-scheme guide', ar: 'دليل مخطط الدرجات' },
  'ks3.ils.prac.how_4': {
    en: 'Diagnose weak question types, then revisit the matching {skill_link}.',
    ar: 'حدّد أنواع الأسئلة الضعيفة، ثم راجع {skill_link} المناسبة.',
  },
  'ks3.ils.prac.skill_link_text': { en: 'skill masterclass', ar: 'حصة إتقان المهارة' },
}
