/**
 * Khaleeji translations — `resources` namespace, Bucket A wave 4
 * (real-EN subset, source: dictionary-placeholder-fix-may15.ts)
 *
 * Public SEO resource/revision pages rendered in AR mode. The EN here
 * is byte-identical to dictionary-placeholder-fix-may15.ts (the
 * hand-written quality strings); the `ar` is genuine Gulf register in
 * the voice of src/lib/eal/curriculum.ts. Exam terminology (AO1/AO2/
 * AO3, GCSE/IGCSE, board names AQA/Edexcel/Cambridge, SM-2) is kept
 * verbatim because students must recognise it in the exam.
 *
 * 99 keys. Wired into the lookup chain from dictionary.ts (do NOT
 * edit dictionary.ts from this file — wiring is handled separately).
 */

export const RESOURCES_A_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── Resources hub (/resources) ──────────────────────────────────
  'resources.hub.eyebrow': { en: 'Revision library', ar: 'مكتبة المراجعة' },
  'resources.hub.title': {
    en: 'Every revision resource, one shelf',
    ar: 'كل مصادر المراجعة في رفّ واحد',
  },
  'resources.hub.subtitle': {
    en: 'Study guides, model answers, technique cheatsheets, vocabulary lists and exam-paper walkthroughs — sorted by category.',
    ar: 'أدلة مراجعة، إجابات نموذجية، أوراق تلخيص للتقنيات، قوائم مفردات، وشرح خطوة بخطوة لأوراق الامتحان — كلها مرتّبة حسب التصنيف.',
  },
  'resources.hub.stat.study_guides': { en: 'Study guides', ar: 'أدلة مراجعة' },
  'resources.hub.stat.categories': { en: 'Categories', ar: 'تصنيفات' },
  'resources.hub.popular.title': { en: 'Most-used resources', ar: 'أكثر المصادر استخداماً' },
  'resources.hub.popular.subtitle': {
    en: 'What students and teachers reach for first.',
    ar: 'الشي اللي يرجع له الطلاب والمدرّسين أول.',
  },
  'resources.hub.quick.revision_notes.title': { en: 'Revision notes', ar: 'ملاحظات المراجعة' },
  'resources.hub.quick.revision_notes.desc': {
    en: 'Concise summaries of plot, character, theme and context — written for revision, not first reading.',
    ar: 'تلخيصات مركّزة للأحداث والشخصيات والثيمات والسياق — مكتوبة عشان المراجعة، مو عشان أول قراءة.',
  },
  'resources.hub.quick.writing_skills.title': { en: 'Writing skills', ar: 'مهارات الكتابة' },
  'resources.hub.quick.writing_skills.desc': {
    en: 'Structure templates, sentence-level technique guides and openings/closings for narrative and transactional writing.',
    ar: 'قوالب للهيكلة، وأدلة تقنيات على مستوى الجملة، وبدايات ونهايات للكتابة السردية والوظيفية.',
  },
  'resources.hub.quick.poetry.title': { en: 'Poetry', ar: 'الشعر' },
  'resources.hub.quick.poetry.desc': {
    en: 'Anthology poem analyses, unseen poetry frameworks and comparison stems for every major board.',
    ar: 'تحليلات لقصائد المجموعة المقررة، وأطر للشعر غير المرئي، وعبارات للمقارنة لكل المجالس الكبيرة.',
  },
  'resources.hub.quick.techniques.title': { en: 'Techniques', ar: 'التقنيات' },
  'resources.hub.quick.techniques.desc': {
    en: 'Named techniques (metaphor, sibilance, dramatic irony, etc.) with examples and effect-language for AO2.',
    ar: 'تقنيات مسمّاة (الاستعارة، التكرار الصفيري، السخرية الدرامية، وغيرها) مع أمثلة ولغة الأثر لـ AO2.',
  },
  'resources.hub.quick.model_answers.title': { en: 'Model answers', ar: 'إجابات نموذجية' },
  'resources.hub.quick.model_answers.desc': {
    en: 'Grade-7-to-9 exemplar essays with marker commentary explaining the band judgement.',
    ar: 'مقالات نموذجية من درجة 7 إلى 9 مع تعليق المصحّح اللي يشرح ليش انحطّت في هالنطاق.',
  },
  'resources.hub.quick.study_tools.title': { en: 'Study tools', ar: 'أدوات المراجعة' },
  'resources.hub.quick.study_tools.desc': {
    en: 'Revision planners, spaced-repetition flashcards, quote tests and exam-paper checklists.',
    ar: 'مخطّطات مراجعة، بطاقات تذكّر بالتكرار المتباعد، اختبارات اقتباسات، وقوائم تحقّق لأوراق الامتحان.',
  },
  'resources.hub.all.title': { en: 'All resource categories', ar: 'كل تصنيفات المصادر' },
  'resources.hub.all.subtitle': {
    en: "Sorted by what you're revising for.",
    ar: 'مرتّبة حسب الشي اللي تراجع له.',
  },
  'resources.hub.cat.english_literature': { en: 'English Literature', ar: 'الأدب الإنجليزي' },
  'resources.hub.cat.english_language': { en: 'English Language', ar: 'اللغة الإنجليزية' },
  'resources.hub.cat.revision_notes': { en: 'Revision notes', ar: 'ملاحظات المراجعة' },
  'resources.hub.cat.poetry': { en: 'Poetry', ar: 'الشعر' },
  'resources.hub.cat.writing_skills': { en: 'Writing skills', ar: 'مهارات الكتابة' },
  'resources.hub.cat.techniques': { en: 'Techniques', ar: 'التقنيات' },
  'resources.hub.cat.model_answers': { en: 'Model answers', ar: 'إجابات نموذجية' },
  'resources.hub.cat.exam_technique': { en: 'Exam technique', ar: 'تقنية الامتحان' },
  'resources.hub.cat.grade_targets': { en: 'Grade-by-grade targets', ar: 'أهداف لكل درجة على حدة' },
  'resources.hub.cat.study_tools': { en: 'Study tools', ar: 'أدوات المراجعة' },
  'resources.hub.cat.vocabulary': { en: 'Vocabulary', ar: 'المفردات' },
  'resources.hub.cat.glossary': { en: 'Glossary', ar: 'قائمة المصطلحات' },
  'resources.hub.cat.context': { en: 'Context & background', ar: 'السياق والخلفية' },
  'resources.hub.cat.themes': { en: 'Themes', ar: 'الثيمات' },
  'resources.hub.cat.authors': { en: 'Authors', ar: 'المؤلّفون' },
  'resources.hub.cat.spoken_language': { en: 'Spoken language', ar: 'اللغة المنطوقة' },
  'resources.hub.cat.teaching': { en: 'For teachers', ar: 'للمدرّسين' },

  // ─── Resources / poetry (/resources/poetry) ──────────────────────
  'resources.poetry.skill.techniques.tag': { en: 'Technique', ar: 'تقنية' },
  'resources.poetry.skill.techniques.title': { en: 'Poetic techniques', ar: 'التقنيات الشعرية' },
  'resources.poetry.skill.techniques.desc': {
    en: "Identifying form, structure and language devices — what they're called and what effects they create.",
    ar: 'تتعرّف على الشكل والهيكلة وأدوات اللغة — وش أسمائها ووش الأثر اللي تخلّقه.',
  },
  'resources.poetry.skill.unseen.tag': { en: 'Unseen', ar: 'غير مرئي' },
  'resources.poetry.skill.unseen.title': { en: 'Unseen poetry', ar: 'الشعر غير المرئي' },
  'resources.poetry.skill.unseen.desc': {
    en: 'A repeatable five-step framework for any unseen poem under exam conditions.',
    ar: 'إطار من خمس خطوات تقدر تعيده على أي قصيدة غير مرئية في ظروف الامتحان.',
  },
  'resources.poetry.skill.compare.tag': { en: 'Comparison', ar: 'مقارنة' },
  'resources.poetry.skill.compare.title': { en: 'Comparative poetry', ar: 'الشعر المقارن' },
  'resources.poetry.skill.compare.desc': {
    en: 'Structuring a comparison: similarities, differences, and which order earns more marks.',
    ar: 'تهيكل المقارنة: أوجه الشبه، أوجه الاختلاف، وأي ترتيب يجيب درجات أكثر.',
  },
  'resources.poetry.tip.memorise.title': {
    en: 'Memorise short, not whole',
    ar: 'احفظ مقاطع قصيرة، مو القصيدة كاملة',
  },
  'resources.poetry.tip.memorise.text': {
    en: 'Three killer quotes per poem beats memorising the whole text. Pick lines that work for multiple themes.',
    ar: 'ثلاثة اقتباسات قوية لكل قصيدة أحسن من حفظ النص كله. اختر أبيات تنفع لأكثر من ثيمة.',
  },
  'resources.poetry.tip.tech_effect.title': {
    en: 'Technique → effect, never just naming',
    ar: 'التقنية ← الأثر، مو بس تسمية',
  },
  'resources.poetry.tip.tech_effect.text': {
    en: 'Naming "sibilance" earns nothing on its own. Always answer the next question: what effect does it create here?',
    ar: 'تسمية «التكرار الصفيري» وحدها ما تجيب شي. دايم جاوب على السؤال اللي بعده: وش الأثر اللي يخلّقه هني؟',
  },
  'resources.poetry.tip.compare.title': {
    en: 'Comparison goes both ways',
    ar: 'المقارنة تروح في الاتجاهين',
  },
  'resources.poetry.tip.compare.text': {
    en: 'For every similarity, find a difference. Top-band answers move between the two poems sentence by sentence.',
    ar: 'مع كل وجه شبه، لاقِ وجه اختلاف. إجابات النطاق الأعلى تتنقّل بين القصيدتين جملة جملة.',
  },
  'resources.poetry.tip.context.title': {
    en: 'Context earns AO3, not anecdote',
    ar: 'السياق يجيب AO3، مو الحكاية الجانبية',
  },
  'resources.poetry.tip.context.text': {
    en: "AO3 wants ideas linked back to the poem's effect — never an essay about the poet's life detached from the lines.",
    ar: 'AO3 يبي أفكار مربوطة برجعها لأثر القصيدة — مو مقال عن حياة الشاعر منفصل عن الأبيات.',
  },
  'resources.poetry.tip.structure.title': {
    en: "Read the poem's shape first",
    ar: 'اقرأ شكل القصيدة أول',
  },
  'resources.poetry.tip.structure.text': {
    en: 'Before any analysis, look at: stanzas, line lengths, rhyme, volta. Structure is half the meaning.',
    ar: 'قبل أي تحليل، شوف: المقاطع، أطوال الأبيات، القافية، نقطة التحوّل. الهيكلة نص المعنى.',
  },
  'resources.poetry.tip.plan.title': { en: 'Plan for 4 minutes', ar: 'خطّط لمدة 4 دقايق' },
  'resources.poetry.tip.plan.text': {
    en: 'A 4-minute plan adds a whole grade on average. Map three big ideas before writing a word.',
    ar: 'الخطّة اللي تاخذ 4 دقايق تزيد درجة كاملة بالمعدّل. ارسم ثلاث أفكار كبيرة قبل لا تكتب كلمة.',
  },
  'resources.poetry.ao.ao1.detail': {
    en: 'Personal response with apt, embedded references',
    ar: 'استجابة شخصية مع إشارات مناسبة ومدمجة في النص',
  },
  'resources.poetry.ao.ao1.tip': {
    en: 'Quotes shorter than 6 words, woven into your own sentence.',
    ar: 'اقتباسات أقصر من 6 كلمات، منسوجة جوّا جملتك انت.',
  },
  'resources.poetry.ao.ao2.detail': {
    en: 'Analyse language, form and structure with subject terminology',
    ar: 'حلّل اللغة والشكل والهيكلة بمصطلحات المادة',
  },
  'resources.poetry.ao.ao2.tip': {
    en: "For every technique you name, write the EFFECT it creates — that's where the marks live.",
    ar: 'مع كل تقنية تسمّيها، اكتب الأثر اللي تخلّقه — هني وين الدرجات.',
  },
  'resources.poetry.ao.ao3.detail': {
    en: 'Contextual links — ideas, beliefs and conditions the poem reflects',
    ar: 'روابط سياقية — أفكار ومعتقدات وظروف تعكسها القصيدة',
  },
  'resources.poetry.ao.ao3.tip': {
    en: "Tie context to a specific line, not just the poet's biography in general.",
    ar: 'اربط السياق ببيت محدّد، مو بس بسيرة الشاعر بشكل عام.',
  },

  // ─── Resources / study tools (/resources/study-tools) ────────────
  'resources.study_tools.title': { en: 'Study tools', ar: 'أدوات المراجعة' },
  'resources.study_tools.subtitle': {
    en: 'Plan revision, drill recall, and time your past papers — every tool below saves to your account.',
    ar: 'خطّط مراجعتك، درّب الاسترجاع، وقيس وقتك في الأوراق السابقة — كل أداة تحت تنحفظ في حسابك.',
  },
  'resources.study_tools.cta.open': { en: 'Open tool', ar: 'افتح الأداة' },
  'resources.study_tools.rp.title': { en: 'Revision planner', ar: 'مخطّط المراجعة' },
  'resources.study_tools.rp.desc': {
    en: 'Pick your exam date and the planner builds you a study schedule around it.',
    ar: 'اختر تاريخ امتحانك والمخطّط يبني لك جدول مراجعة حواليه.',
  },
  'resources.study_tools.rp.feat.calendar': { en: 'Calendar view', ar: 'عرض التقويم' },
  'resources.study_tools.rp.feat.countdown': {
    en: 'Exam countdown',
    ar: 'العدّ التنازلي للامتحان',
  },
  'resources.study_tools.rp.feat.plan': { en: 'Auto-balanced plan', ar: 'خطّة متوازنة تلقائياً' },
  'resources.study_tools.rp.feat.checklist': { en: 'Daily checklist', ar: 'قائمة تحقّق يومية' },
  'resources.study_tools.fc.title': { en: 'Flashcards', ar: 'البطاقات التعليمية' },
  'resources.study_tools.fc.desc': {
    en: 'Spaced-repetition flashcards for quotes, technique definitions and key terms.',
    ar: 'بطاقات بالتكرار المتباعد للاقتباسات وتعريفات التقنيات والمصطلحات المهمة.',
  },
  'resources.study_tools.fc.feat.sm2': { en: 'SM-2 algorithm', ar: 'خوارزمية SM-2' },
  'resources.study_tools.fc.feat.grade': { en: 'Self-grading', ar: 'تصحيح ذاتي' },
  'resources.study_tools.fc.feat.difficult': {
    en: 'Hard-card focus',
    ar: 'تركيز على البطاقات الصعبة',
  },
  'resources.study_tools.fc.feat.streak': { en: 'Daily streak', ar: 'سلسلة يومية' },
  'resources.study_tools.qt.title': { en: 'Quote tester', ar: 'مختبِر الاقتباسات' },
  'resources.study_tools.qt.desc': {
    en: 'Drill your memorised quotes with fill-in-the-blank and timed recall.',
    ar: 'درّب اقتباساتك المحفوظة بأسلوب املأ الفراغ والاسترجاع الموقوت.',
  },
  'resources.study_tools.qt.feat.fill_blank': { en: 'Fill the blank', ar: 'املأ الفراغ' },
  'resources.study_tools.qt.feat.timed': { en: 'Timed mode', ar: 'وضع موقوت' },
  'resources.study_tools.qt.feat.sr': { en: 'Spaced repetition', ar: 'تكرار متباعد' },
  'resources.study_tools.qt.feat.score': { en: 'Score tracking', ar: 'تتبّع النتيجة' },
  'resources.study_tools.cl.title': { en: 'Exam checklist', ar: 'قائمة تحقّق الامتحان' },
  'resources.study_tools.cl.desc': {
    en: 'Tick off every topic on your spec — board-specific, autosaves to your account.',
    ar: 'علّم على كل موضوع في منهجك — خاص بكل مجلس، ويتحفظ تلقائياً في حسابك.',
  },
  'resources.study_tools.cl.feat.aqa': { en: 'AQA spec coverage', ar: 'تغطية منهج AQA' },
  'resources.study_tools.cl.feat.edexcel': {
    en: 'Edexcel spec coverage',
    ar: 'تغطية منهج Edexcel',
  },
  'resources.study_tools.cl.feat.cambridge': {
    en: 'Cambridge IGCSE coverage',
    ar: 'تغطية Cambridge IGCSE',
  },
  'resources.study_tools.cl.feat.autosave': { en: 'Autosave progress', ar: 'حفظ التقدّم تلقائياً' },
  'resources.study_tools.tip.title': {
    en: 'How to use these tools well',
    ar: 'كيف تستخدم هالأدوات صح',
  },
  'resources.study_tools.tip.start.label': {
    en: 'Start with the planner',
    ar: 'ابدأ بالمخطّط',
  },
  'resources.study_tools.tip.start.body': {
    en: 'A schedule is the difference between revising and panic-revising — set yours up first.',
    ar: 'الجدول هو الفرق بين إنك تراجع وإنك تراجع وانت مهلوع — سوّ جدولك أول شي.',
  },
  'resources.study_tools.tip.daily.label': {
    en: 'Daily, not weekend-only',
    ar: 'كل يوم، مو بس نهاية الأسبوع',
  },
  'resources.study_tools.tip.daily.body': {
    en: 'Spaced repetition only works if you show up most days. 20 min daily beats 3 hours every Sunday.',
    ar: 'التكرار المتباعد ما يشتغل إلا إذا حضرت أغلب الأيام. 20 دقيقة كل يوم أحسن من 3 ساعات كل أحد.',
  },
  'resources.study_tools.tip.track.label': { en: "Track what's hard", ar: 'تابع الشي الصعب' },
  'resources.study_tools.tip.track.body': {
    en: "The flashcard hard-card focus shows you what's actually not sticking — go review the underlying notes for those.",
    ar: 'تركيز البطاقات الصعبة يوريك وش الشي اللي فعلاً ما يثبت — روح راجع الملاحظات الأصلية لهالأشياء.',
  },
}
