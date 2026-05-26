/**
 * Emergency placeholder fix - 2026-05-15
 *
 * 21 production routes were rendering `[[some.key]]` markup because
 * audit_missing_keys.py only catches `t('literal-string')` calls and
 * misses INDIRECT lookups like `t(DIFFICULTY_KEY_MAP[level])` (used in
 * GameShell / GameCard) and `t(`prefix.${variable}.suffix`)` (used in
 * exam-boards, affiliates, resources hubs).
 *
 * This file fills the ~230 keys that audit-fix.ts couldn't see. EN
 * values are hand-written for quality; AR values mirror EN as a
 * graceful fallback (far better than rendering `[[…]]` to an Arabic
 * visitor). When the next translation sweep runs, ar_translator can
 * pick these up and replace with proper Khaleeji.
 *
 * Wired into the lookup chain from dictionary.ts immediately after
 * AUDIT_FIX_DICTIONARY (same precedence - both are emergency fills).
 */

import type { Dictionary } from './dictionary'

export const PLACEHOLDER_FIX_MAY15: Dictionary = {
  // ─── A-level board cards (/a-level) ──────────────────────────────
  'alevel.board.aqa.name': { en: 'AQA A-level English', ar: 'AQA A-level English' },
  'alevel.board.aqa.short': { en: 'AQA', ar: 'AQA' },
  'alevel.board.aqa.description': {
    en: 'AS and A-level English Literature and Language - paper-specific revision, set-text breakdowns, and full past-paper walkthroughs.',
    ar: 'AS و A-level English Literature and Language - مراجعة خاصة بكل paper، وتحليل للنصوص المقررة، وشرح كامل للـ past papers.',
  },
  'alevel.board.edexcel.name': {
    en: 'Pearson Edexcel A-level English',
    ar: 'Pearson Edexcel A-level English',
  },
  'alevel.board.edexcel.short': { en: 'Edexcel', ar: 'Edexcel' },
  'alevel.board.edexcel.description': {
    en: 'Pearson Edexcel A-level English Literature and Language - focused revision against the specification and exemplar A* answers.',
    ar: 'Pearson Edexcel A-level English Literature and Language - مراجعة مركزة على الـ specification وأجوبة نموذجية بمستوى A*.',
  },
  'alevel.board.ocr.name': { en: 'OCR A-level English', ar: 'OCR A-level English' },
  'alevel.board.ocr.short': { en: 'OCR', ar: 'OCR' },
  'alevel.board.ocr.description': {
    en: 'OCR A-level English Literature and Language - examiner-aligned analysis and structure for the closed-book papers.',
    ar: 'OCR A-level English Literature and Language - تحليل وتنظيم متوافق مع المصحح للـ closed-book papers.',
  },
  'alevel.board.eduqas.name': { en: 'Eduqas A-level English', ar: 'Eduqas A-level English' },
  'alevel.board.eduqas.short': { en: 'Eduqas', ar: 'Eduqas' },
  'alevel.board.eduqas.description': {
    en: 'WJEC Eduqas A-level English Literature and Language - coverage of the prescribed pre-1900 and post-1900 texts plus unseen practice.',
    ar: 'WJEC Eduqas A-level English Literature and Language - تغطية للنصوص المقررة قبل 1900 وبعد 1900 بالإضافة لتمارين على النصوص الجديدة.',
  },

  // ─── Games difficulty badges (/games/*) ──────────────────────────
  'games.difficulty.foundation': { en: 'Foundation', ar: 'المستوى الأساسي (Foundation)' },
  'games.difficulty.crossover': { en: 'Crossover', ar: 'المشترك (Crossover)' },
  'games.difficulty.higher': { en: 'Higher', ar: 'المستوى الأعلى (Higher)' },

  // ─── Marking scheme picker (/marking) ────────────────────────────
  'marking.scheme.lit_p1': { en: 'Literature Paper 1', ar: 'Literature Paper 1' },
  'marking.scheme.lit_p2': { en: 'Literature Paper 2', ar: 'Literature Paper 2' },
  'marking.scheme.lang_p1': { en: 'Language Paper 1', ar: 'Language Paper 1' },
  'marking.scheme.lang_p2': { en: 'Language Paper 2', ar: 'Language Paper 2' },

  // ─── Demo school grade-band analytics (/demo/school) ─────────────
  'analytics.grade_band.top': { en: 'Top grades (7-9)', ar: 'أعلى الدرجات (7-9)' },
  'analytics.grade_band.pass': { en: 'Pass grades (4-6)', ar: 'درجات النجاح (4-6)' },
  'analytics.grade_band.below': { en: 'Below pass (1-3)', ar: 'تحت النجاح (1-3)' },

  // ─── Exam-boards hub (/exam-boards) ──────────────────────────────
  'exam_boards.crumb.home': { en: 'Home', ar: 'الرئيسية' },
  'exam_boards.crumb.self': { en: 'Exam boards', ar: 'هيئات الامتحانات' },
  'exam_boards.eyebrow': { en: 'Pick your exam board', ar: 'اختر هيئة الامتحان حقتك' },
  'exam_boards.h1': {
    en: 'Every UK GCSE and IGCSE board, covered',
    ar: 'كل هيئات GCSE و IGCSE البريطانية، مغطّاة',
  },
  'exam_boards.lead': {
    en: 'Specification-aligned revision for AQA, Edexcel, OCR, Eduqas, Cambridge International and Pearson Edexcel International - pick yours below.',
    ar: 'مراجعة متوافقة مع الـ specification لـ AQA و Edexcel و OCR و Eduqas و Cambridge International و Pearson Edexcel International - اختر حقتك تحت.',
  },
  'exam_boards.level.gcse': { en: 'GCSE (UK)', ar: 'GCSE (بريطانيا)' },
  'exam_boards.level.igcse': { en: 'IGCSE (international)', ar: 'IGCSE (دولي)' },
  'exam_boards.gcse.heading': { en: 'GCSE boards', ar: 'هيئات GCSE' },
  'exam_boards.gcse.subheading': {
    en: 'For students sitting exams in UK schools',
    ar: 'للطلاب اللي يقدمون امتحانات في مدارس بريطانيا',
  },
  'exam_boards.igcse.heading': { en: 'IGCSE boards', ar: 'هيئات IGCSE' },
  'exam_boards.igcse.subheading': {
    en: 'For students in international schools',
    ar: 'للطلاب في المدارس الدولية',
  },
  'exam_boards.aqa.name': { en: 'AQA', ar: 'AQA' },
  'exam_boards.aqa.blurb': {
    en: 'The most-taken English Literature and Language GCSE specs (8702 and 8700).',
    ar: 'أكثر مناهج English Literature and Language GCSE اللي ياخذونها الطلاب (8702 و 8700).',
  },
  'exam_boards.edexcel.name': { en: 'Pearson Edexcel', ar: 'Pearson Edexcel' },
  'exam_boards.edexcel.blurb': {
    en: 'Edexcel GCSE English Literature (1ET0) and English Language (1EN0).',
    ar: 'Edexcel GCSE English Literature (1ET0) و English Language (1EN0).',
  },
  'exam_boards.ocr.name': { en: 'OCR', ar: 'OCR' },
  'exam_boards.ocr.blurb': {
    en: 'OCR GCSE English Literature (J352) and English Language (J351).',
    ar: 'OCR GCSE English Literature (J352) و English Language (J351).',
  },
  'exam_boards.eduqas.name': { en: 'WJEC Eduqas', ar: 'WJEC Eduqas' },
  'exam_boards.eduqas.blurb': {
    en: 'Eduqas GCSE English Literature (C720U) and English Language (C700U).',
    ar: 'Eduqas GCSE English Literature (C720U) و English Language (C700U).',
  },
  'exam_boards.cambridge.name': {
    en: 'Cambridge International (CIE)',
    ar: 'Cambridge International (CIE)',
  },
  'exam_boards.cambridge.blurb': {
    en: 'Cambridge IGCSE First Language English (0500) and Literature in English (0475/0992).',
    ar: 'Cambridge IGCSE First Language English (0500) و Literature in English (0475/0992).',
  },
  'exam_boards.edexcel_igcse.name': {
    en: 'Pearson Edexcel IGCSE Literature',
    ar: 'Pearson Edexcel IGCSE Literature',
  },
  'exam_boards.edexcel_igcse.blurb': {
    en: 'Edexcel IGCSE English Literature (4ET1) - set texts and unseen poetry.',
    ar: 'Edexcel IGCSE English Literature (4ET1) - نصوص مقررة وشعر غير مرئي.',
  },
  'exam_boards.edexcel_igcse_lang.name': {
    en: 'Pearson Edexcel IGCSE Language',
    ar: 'Pearson Edexcel IGCSE Language',
  },
  'exam_boards.edexcel_igcse_lang.blurb': {
    en: 'Edexcel IGCSE English Language A (4EA1) - non-fiction reading and transactional writing.',
    ar: 'Edexcel IGCSE English Language A (4EA1) - قراءة نصوص واقعية وكتابة تعاملية.',
  },
  'exam_boards.cta.open_board': { en: 'Open board hub', ar: 'افتح صفحة الهيئة' },
  'exam_boards.why.h2': { en: 'Why your exam board matters', ar: 'ليش هيئة الامتحان حقتك مهمة' },
  'exam_boards.why.p1': {
    en: 'Each board sets its own assessment objectives, prescribes its own anthology and set texts, and weights the marks differently between context, language analysis and structure.',
    ar: 'كل هيئة تحدد الـ assessment objectives حقتها، وتقرر الـ anthology والنصوص المقررة حقها، وتوزع الدرجات بشكل مختلف بين السياق وتحليل اللغة والبناء.',
  },
  'exam_boards.why.p2': {
    en: 'A model answer that scores Grade 9 on AQA might lose marks on Edexcel - the rubric is different even when the texts overlap.',
    ar: 'الجواب النموذجي اللي ياخذ Grade 9 في AQA ممكن يخسر درجات في Edexcel - معايير التصحيح مختلفة حتى لو كانت النصوص نفسها.',
  },
  'exam_boards.why.p3_pre': {
    en: 'Every revision page on The English Hub is board-aware. Pick yours once and the whole site re-skins to your spec - or read our ',
    ar: 'كل صفحة مراجعة في The English Hub تتعرف على هيئتك. اختر حقتك مرة وحدة والموقع كله يتغير حسب الـ spec حقك - أو اقرأ ',
  },
  'exam_boards.why.p3_link': {
    en: 'side-by-side comparison of every board',
    ar: 'مقارنة جنب بجنب لكل هيئة',
  },
  'exam_boards.why.p3_post': { en: ' first.', ar: ' أول.' },

  // ─── Free resources hub (/free-resources) ────────────────────────
  'free_res.crumb.home': { en: 'Home', ar: 'الرئيسية' },
  'free_res.crumb.self': { en: 'Free resources', ar: 'مصادر مجانية' },
  'free_res.eyebrow': { en: 'Free, no signup required', ar: 'ببلاش، بدون تسجيل' },
  'free_res.h1': {
    en: 'Free GCSE & IGCSE English revision resources',
    ar: 'مصادر مراجعة GCSE & IGCSE English مجانية',
  },
  'free_res.lead': {
    en: 'Pick up the printable revision packs we use with our own students. No email signup, no paywall - just open and download.',
    ar: 'خذ حزم المراجعة القابلة للطباعة اللي نستخدمها مع طلابنا. بدون تسجيل إيميل، وبدون دفع - بس افتح ونزّل.',
  },
  'free_res.grid_sr': { en: 'Free resources grid', ar: 'شبكة المصادر المجانية' },
  'free_res.coming_soon': { en: 'Coming soon', ar: 'قريباً' },
  'free_res.notify_when': { en: 'Notify me when it lands', ar: 'نبّهني لما ينزل' },
  'free_res.launch_eyebrow': { en: 'Launch updates', ar: 'تحديثات الإطلاق' },
  'free_res.notify_h2': {
    en: 'Get told when new free packs drop',
    ar: 'خلّنا نخبرك لما تنزل حزم مجانية جديدة',
  },
  'free_res.notify_lead': {
    en: 'One email per pack. Unsubscribe anytime - no follow-up marketing.',
    ar: 'إيميل واحد لكل حزمة. الغِ الاشتراك في أي وقت - بدون رسائل تسويقية بعدها.',
  },
  'free_res.scope.aqa': { en: 'AQA', ar: 'AQA' },
  'free_res.scope.aqa_edx_ocr_eduqas': {
    en: 'AQA · Edexcel · OCR · Eduqas',
    ar: 'AQA · Edexcel · OCR · Eduqas',
  },
  'free_res.scope.multi': { en: 'All boards', ar: 'كل الهيئات' },
  'free_res.scope.pearson_edexcel': { en: 'Pearson Edexcel IGCSE', ar: 'Pearson Edexcel IGCSE' },
  'free_res.scope.cambridge': { en: 'Cambridge IGCSE', ar: 'Cambridge IGCSE' },
  'free_res.macbeth_qb.title': { en: 'Macbeth quote bank', ar: 'بنك اقتباسات Macbeth' },
  'free_res.macbeth_qb.desc': {
    en: '60 essential Macbeth quotations sorted by theme, character and act - with one-line analysis hooks for every quote.',
    ar: '60 اقتباس أساسي من Macbeth مرتبة حسب الثيم والشخصية والـ act - مع تحليل مختصر بسطر لكل اقتباس.',
  },
  'free_res.pc_grid.title': {
    en: 'Power and Conflict cluster grid',
    ar: 'شبكة مجموعة Power and Conflict',
  },
  'free_res.pc_grid.desc': {
    en: 'All 15 AQA Power and Conflict poems in a single landscape grid - themes, form, key images and one comparison hook per poem.',
    ar: 'كل 15 قصيدة من AQA Power and Conflict في شبكة أفقية وحدة - الثيمات والشكل والصور الرئيسية ونقطة مقارنة وحدة لكل قصيدة.',
  },
  'free_res.aic_map.title': {
    en: 'An Inspector Calls character map',
    ar: 'خريطة شخصيات An Inspector Calls',
  },
  'free_res.aic_map.desc': {
    en: "Every character and their arc on one A3 sheet - social class, generation and the Inspector's effect on each.",
    ar: 'كل شخصية وتطورها في ورقة A3 وحدة - الطبقة الاجتماعية والجيل وتأثير الـ Inspector على كل وحدة.',
  },
  'free_res.ao2.title': {
    en: 'AO2 language analysis cheatsheet',
    ar: 'ورقة مختصرة لتحليل اللغة AO2',
  },
  'free_res.ao2.desc': {
    en: 'Forty named techniques with definitions, examples and the effect-language examiners want to see.',
    ar: 'أربعين تقنية مسماة مع تعريفاتها وأمثلتها ولغة التأثير اللي يبيها المصححون.',
  },
  'free_res.edx_4et1.title': {
    en: 'Edexcel IGCSE 4ET1 set-text checklist',
    ar: 'قائمة مراجعة النصوص المقررة Edexcel IGCSE 4ET1',
  },
  'free_res.edx_4et1.desc': {
    en: 'Tick-off revision checklist for every prescribed text on the 4ET1 anthology and set-text papers.',
    ar: 'قائمة مراجعة بعلامات صح لكل نص مقرر في الـ anthology وأوراق النصوص المقررة 4ET1.',
  },
  'free_res.cie_diff.title': {
    en: 'CIE 0500 vs 0475 differentiator',
    ar: 'مقارنة CIE 0500 مقابل 0475',
  },
  'free_res.cie_diff.desc': {
    en: 'Side-by-side breakdown of the two Cambridge syllabuses - assessment objectives, papers, weightings and what to revise first.',
    ar: 'تفصيل جنب بجنب لمنهجي Cambridge - الـ assessment objectives والأوراق والأوزان وشنو تراجع أول.',
  },

  // ─── Resources hub (/resources) ──────────────────────────────────
  'resources.hub.eyebrow': { en: 'Revision library', ar: 'مكتبة المراجعة' },
  'resources.hub.title': {
    en: 'Every revision resource, one shelf',
    ar: 'كل مصادر المراجعة في رف واحد',
  },
  'resources.hub.subtitle': {
    en: 'Study guides, model answers, technique cheatsheets, vocabulary lists and exam-paper walkthroughs - sorted by category.',
    ar: 'أدلة دراسية وأجوبة نموذجية وأوراق مختصرة للتقنيات وقوائم مفردات وشرح لأوراق الامتحانات - مرتبة حسب الفئة.',
  },
  'resources.hub.stat.study_guides': { en: 'Study guides', ar: 'أدلة دراسية' },
  'resources.hub.stat.categories': { en: 'Categories', ar: 'الفئات' },
  'resources.hub.popular.title': { en: 'Most-used resources', ar: 'أكثر المصادر استخداماً' },
  'resources.hub.popular.subtitle': {
    en: 'What students and teachers reach for first.',
    ar: 'اللي يلجأ له الطلاب والمعلمون أول.',
  },
  'resources.hub.quick.revision_notes.title': { en: 'Revision notes', ar: 'ملاحظات المراجعة' },
  'resources.hub.quick.revision_notes.desc': {
    en: 'Concise summaries of plot, character, theme and context - written for revision, not first reading.',
    ar: 'ملخصات مختصرة للحبكة والشخصية والثيم والسياق - مكتوبة للمراجعة، مو للقراءة الأولى.',
  },
  'resources.hub.quick.writing_skills.title': { en: 'Writing skills', ar: 'مهارات الكتابة' },
  'resources.hub.quick.writing_skills.desc': {
    en: 'Structure templates, sentence-level technique guides and openings/closings for narrative and transactional writing.',
    ar: 'قوالب بناء وأدلة تقنيات على مستوى الجملة وبدايات/خواتيم للكتابة السردية والتعاملية.',
  },
  'resources.hub.quick.poetry.title': { en: 'Poetry', ar: 'الشعر' },
  'resources.hub.quick.poetry.desc': {
    en: 'Anthology poem analyses, unseen poetry frameworks and comparison stems for every major board.',
    ar: 'تحليلات قصائد الـ anthology وأطر للشعر غير المرئي وعبارات مقارنة لكل هيئة رئيسية.',
  },
  'resources.hub.quick.techniques.title': { en: 'Techniques', ar: 'التقنيات' },
  'resources.hub.quick.techniques.desc': {
    en: 'Named techniques (metaphor, sibilance, dramatic irony, etc.) with examples and effect-language for AO2.',
    ar: 'تقنيات مسماة (metaphor و sibilance و dramatic irony وغيرها) مع أمثلة ولغة التأثير لـ AO2.',
  },
  'resources.hub.quick.model_answers.title': { en: 'Model answers', ar: 'أجوبة نموذجية' },
  'resources.hub.quick.model_answers.desc': {
    en: 'Grade-7-to-9 exemplar essays with marker commentary explaining the band judgement.',
    ar: 'مقالات نموذجية بمستوى Grade 7 إلى 9 مع تعليق المصحح اللي يشرح تقييم المستوى.',
  },
  'resources.hub.quick.study_tools.title': { en: 'Study tools', ar: 'أدوات الدراسة' },
  'resources.hub.quick.study_tools.desc': {
    en: 'Revision planners, spaced-repetition flashcards, quote tests and exam-paper checklists.',
    ar: 'مخططات مراجعة وبطاقات تذكير بالتكرار المتباعد واختبارات اقتباسات وقوائم لأوراق الامتحانات.',
  },
  'resources.hub.all.title': { en: 'All resource categories', ar: 'كل فئات المصادر' },
  'resources.hub.all.subtitle': {
    en: "Sorted by what you're revising for.",
    ar: 'مرتبة حسب اللي تراجع له.',
  },
  'resources.hub.cat.english_literature': { en: 'English Literature', ar: 'English Literature' },
  'resources.hub.cat.english_language': { en: 'English Language', ar: 'English Language' },
  'resources.hub.cat.revision_notes': { en: 'Revision notes', ar: 'ملاحظات المراجعة' },
  'resources.hub.cat.poetry': { en: 'Poetry', ar: 'الشعر' },
  'resources.hub.cat.writing_skills': { en: 'Writing skills', ar: 'مهارات الكتابة' },
  'resources.hub.cat.techniques': { en: 'Techniques', ar: 'التقنيات' },
  'resources.hub.cat.model_answers': { en: 'Model answers', ar: 'أجوبة نموذجية' },
  'resources.hub.cat.exam_technique': { en: 'Exam technique', ar: 'تقنية الامتحان' },
  'resources.hub.cat.grade_targets': { en: 'Grade-by-grade targets', ar: 'أهداف درجة بدرجة' },
  'resources.hub.cat.study_tools': { en: 'Study tools', ar: 'أدوات الدراسة' },
  'resources.hub.cat.vocabulary': { en: 'Vocabulary', ar: 'المفردات' },
  'resources.hub.cat.glossary': { en: 'Glossary', ar: 'قائمة المصطلحات' },
  'resources.hub.cat.context': { en: 'Context & background', ar: 'السياق والخلفية' },
  'resources.hub.cat.themes': { en: 'Themes', ar: 'الثيمات' },
  'resources.hub.cat.authors': { en: 'Authors', ar: 'المؤلفون' },
  'resources.hub.cat.spoken_language': { en: 'Spoken language', ar: 'اللغة المنطوقة' },
  'resources.hub.cat.teaching': { en: 'For teachers', ar: 'للمعلمين' },

  // ─── Resources / poetry (/resources/poetry) ──────────────────────
  'resources.poetry.skill.techniques.tag': { en: 'Technique', ar: 'تقنية' },
  'resources.poetry.skill.techniques.title': { en: 'Poetic techniques', ar: 'التقنيات الشعرية' },
  'resources.poetry.skill.techniques.desc': {
    en: "Identifying form, structure and language devices - what they're called and what effects they create.",
    ar: 'تحديد الشكل والبناء والأدوات اللغوية - شنو اسمها وشنو التأثيرات اللي تصنعها.',
  },
  'resources.poetry.skill.unseen.tag': { en: 'Unseen', ar: 'غير مرئي' },
  'resources.poetry.skill.unseen.title': { en: 'Unseen poetry', ar: 'الشعر غير المرئي' },
  'resources.poetry.skill.unseen.desc': {
    en: 'A repeatable five-step framework for any unseen poem under exam conditions.',
    ar: 'إطار من خمس خطوات قابل للتكرار لأي قصيدة غير مرئية في ظروف الامتحان.',
  },
  'resources.poetry.skill.compare.tag': { en: 'Comparison', ar: 'مقارنة' },
  'resources.poetry.skill.compare.title': { en: 'Comparative poetry', ar: 'الشعر المقارن' },
  'resources.poetry.skill.compare.desc': {
    en: 'Structuring a comparison: similarities, differences, and which order earns more marks.',
    ar: 'كيف تبني مقارنة: أوجه الشبه والاختلاف، وأي ترتيب ياخذ درجات أكثر.',
  },
  'resources.poetry.tip.memorise.title': {
    en: 'Memorise short, not whole',
    ar: 'احفظ مقاطع قصيرة، مو القصيدة كلها',
  },
  'resources.poetry.tip.memorise.text': {
    en: 'Three killer quotes per poem beats memorising the whole text. Pick lines that work for multiple themes.',
    ar: 'ثلاثة اقتباسات قوية لكل قصيدة أحسن من حفظ النص كله. اختر أسطر تنفع لأكثر من ثيم.',
  },
  'resources.poetry.tip.tech_effect.title': {
    en: 'Technique → effect, never just naming',
    ar: 'التقنية ← التأثير، مو بس التسمية',
  },
  'resources.poetry.tip.tech_effect.text': {
    en: 'Naming "sibilance" earns nothing on its own. Always answer the next question: what effect does it create here?',
    ar: 'تسمية "sibilance" ما تاخذ ولا درجة لحالها. دايماً جاوب على السؤال اللي بعده: شنو التأثير اللي تصنعه هني؟',
  },
  'resources.poetry.tip.compare.title': {
    en: 'Comparison goes both ways',
    ar: 'المقارنة تروح في الاتجاهين',
  },
  'resources.poetry.tip.compare.text': {
    en: 'For every similarity, find a difference. Top-band answers move between the two poems sentence by sentence.',
    ar: 'لكل وجه شبه، لقّ وجه اختلاف. الأجوبة بأعلى مستوى تنتقل بين القصيدتين جملة بجملة.',
  },
  'resources.poetry.tip.context.title': {
    en: 'Context earns AO3, not anecdote',
    ar: 'السياق ياخذ AO3، مو الحكاية الجانبية',
  },
  'resources.poetry.tip.context.text': {
    en: "AO3 wants ideas linked back to the poem's effect - never an essay about the poet's life detached from the lines.",
    ar: 'AO3 يبي أفكار مربوطة بتأثير القصيدة - مو مقال عن حياة الشاعر منفصل عن الأسطر.',
  },
  'resources.poetry.tip.structure.title': {
    en: "Read the poem's shape first",
    ar: 'اقرأ شكل القصيدة أول',
  },
  'resources.poetry.tip.structure.text': {
    en: 'Before any analysis, look at: stanzas, line lengths, rhyme, volta. Structure is half the meaning.',
    ar: 'قبل أي تحليل، شوف: المقاطع وأطوال الأسطر والقافية والـ volta. البناء نص المعنى.',
  },
  'resources.poetry.tip.plan.title': { en: 'Plan for 4 minutes', ar: 'خطّط لمدة 4 دقايق' },
  'resources.poetry.tip.plan.text': {
    en: 'A 4-minute plan adds a whole grade on average. Map three big ideas before writing a word.',
    ar: 'خطة بأربع دقايق تزيد درجة كاملة بالمعدل. حدد ثلاث أفكار كبيرة قبل ما تكتب كلمة.',
  },
  'resources.poetry.ao.ao1.detail': {
    en: 'Personal response with apt, embedded references',
    ar: 'استجابة شخصية مع إشارات مناسبة ومدمجة',
  },
  'resources.poetry.ao.ao1.tip': {
    en: 'Quotes shorter than 6 words, woven into your own sentence.',
    ar: 'اقتباسات أقصر من 6 كلمات، مدمجة داخل جملتك.',
  },
  'resources.poetry.ao.ao2.detail': {
    en: 'Analyse language, form and structure with subject terminology',
    ar: 'حلّل اللغة والشكل والبناء بمصطلحات المادة',
  },
  'resources.poetry.ao.ao2.tip': {
    en: "For every technique you name, write the EFFECT it creates - that's where the marks live.",
    ar: 'لكل تقنية تسميها، اكتب التأثير اللي تصنعه - هني وين الدرجات.',
  },
  'resources.poetry.ao.ao3.detail': {
    en: 'Contextual links - ideas, beliefs and conditions the poem reflects',
    ar: 'روابط سياقية - أفكار ومعتقدات وظروف تعكسها القصيدة',
  },
  'resources.poetry.ao.ao3.tip': {
    en: "Tie context to a specific line, not just the poet's biography in general.",
    ar: 'اربط السياق بسطر محدد، مو بس سيرة الشاعر بشكل عام.',
  },

  // ─── Resources / study tools (/resources/study-tools) ────────────
  'resources.study_tools.title': { en: 'Study tools', ar: 'أدوات الدراسة' },
  'resources.study_tools.subtitle': {
    en: 'Plan revision, drill recall, and time your past papers - every tool below saves to your account.',
    ar: 'خطّط للمراجعة، ودرّب على الاسترجاع، وحدد وقت الـ past papers - كل أداة تحت تنحفظ في حسابك.',
  },
  'resources.study_tools.cta.open': { en: 'Open tool', ar: 'افتح الأداة' },
  'resources.study_tools.rp.title': { en: 'Revision planner', ar: 'مخطط المراجعة' },
  'resources.study_tools.rp.desc': {
    en: 'Pick your exam date and the planner builds you a study schedule around it.',
    ar: 'اختر تاريخ امتحانك والمخطط يبني لك جدول دراسة حوله.',
  },
  'resources.study_tools.rp.feat.calendar': { en: 'Calendar view', ar: 'عرض تقويم' },
  'resources.study_tools.rp.feat.countdown': { en: 'Exam countdown', ar: 'عد تنازلي للامتحان' },
  'resources.study_tools.rp.feat.plan': { en: 'Auto-balanced plan', ar: 'خطة متوازنة تلقائياً' },
  'resources.study_tools.rp.feat.checklist': { en: 'Daily checklist', ar: 'قائمة يومية' },
  'resources.study_tools.fc.title': { en: 'Flashcards', ar: 'بطاقات تذكير' },
  'resources.study_tools.fc.desc': {
    en: 'Spaced-repetition flashcards for quotes, technique definitions and key terms.',
    ar: 'بطاقات تذكير بالتكرار المتباعد للاقتباسات وتعريفات التقنيات والمصطلحات الرئيسية.',
  },
  'resources.study_tools.fc.feat.sm2': { en: 'SM-2 algorithm', ar: 'خوارزمية SM-2' },
  'resources.study_tools.fc.feat.grade': { en: 'Self-grading', ar: 'تقييم ذاتي' },
  'resources.study_tools.fc.feat.difficult': {
    en: 'Hard-card focus',
    ar: 'تركيز على البطاقات الصعبة',
  },
  'resources.study_tools.fc.feat.streak': { en: 'Daily streak', ar: 'سلسلة يومية' },
  'resources.study_tools.qt.title': { en: 'Quote tester', ar: 'مختبر الاقتباسات' },
  'resources.study_tools.qt.desc': {
    en: 'Drill your memorised quotes with fill-in-the-blank and timed recall.',
    ar: 'درّب على الاقتباسات اللي حفظتها بملء الفراغ والاسترجاع الموقوت.',
  },
  'resources.study_tools.qt.feat.fill_blank': { en: 'Fill the blank', ar: 'املأ الفراغ' },
  'resources.study_tools.qt.feat.timed': { en: 'Timed mode', ar: 'وضع موقوت' },
  'resources.study_tools.qt.feat.sr': { en: 'Spaced repetition', ar: 'تكرار متباعد' },
  'resources.study_tools.qt.feat.score': { en: 'Score tracking', ar: 'تتبع النتيجة' },
  'resources.study_tools.cl.title': { en: 'Exam checklist', ar: 'قائمة الامتحان' },
  'resources.study_tools.cl.desc': {
    en: 'Tick off every topic on your spec - board-specific, autosaves to your account.',
    ar: 'علّم على كل موضوع في الـ spec حقك - خاص بالهيئة، ويحفظ تلقائياً في حسابك.',
  },
  'resources.study_tools.cl.feat.aqa': { en: 'AQA spec coverage', ar: 'تغطية spec حق AQA' },
  'resources.study_tools.cl.feat.edexcel': {
    en: 'Edexcel spec coverage',
    ar: 'تغطية spec حق Edexcel',
  },
  'resources.study_tools.cl.feat.cambridge': {
    en: 'Cambridge IGCSE coverage',
    ar: 'تغطية Cambridge IGCSE',
  },
  'resources.study_tools.cl.feat.autosave': { en: 'Autosave progress', ar: 'حفظ تلقائي للتقدم' },
  'resources.study_tools.tip.title': {
    en: 'How to use these tools well',
    ar: 'كيف تستخدم هالأدوات صح',
  },
  'resources.study_tools.tip.start.label': {
    en: 'Start with the planner',
    ar: 'ابدأ بالمخطط',
  },
  'resources.study_tools.tip.start.body': {
    en: 'A schedule is the difference between revising and panic-revising - set yours up first.',
    ar: 'الجدول هو الفرق بين المراجعة والمراجعة بهلع - رتّب حقك أول.',
  },
  'resources.study_tools.tip.daily.label': {
    en: 'Daily, not weekend-only',
    ar: 'يومي، مو بس نهاية الأسبوع',
  },
  'resources.study_tools.tip.daily.body': {
    en: 'Spaced repetition only works if you show up most days. 20 min daily beats 3 hours every Sunday.',
    ar: 'التكرار المتباعد ما يشتغل إلا إذا التزمت أغلب الأيام. 20 دقيقة يومياً أحسن من 3 ساعات كل أحد.',
  },
  'resources.study_tools.tip.track.label': { en: "Track what's hard", ar: 'تابع اللي صعب' },
  'resources.study_tools.tip.track.body': {
    en: "The flashcard hard-card focus shows you what's actually not sticking - go review the underlying notes for those.",
    ar: 'ميزة التركيز على البطاقات الصعبة تبيّن لك شنو اللي فعلاً ما ثبت - روح راجع الملاحظات الأساسية حقها.',
  },

  // ─── Affiliate program (/affiliate, /affiliates, /affiliate/*) ───
  'aff_comp.tier.tier-1.label': { en: 'Tier 1 · Starter', ar: 'Tier 1 · مبتدئ' },
  'aff_comp.tier.tier-2.label': { en: 'Tier 2 · Standard', ar: 'Tier 2 · قياسي' },
  'aff_comp.tier.tier-3.label': { en: 'Tier 3 · Established', ar: 'Tier 3 · راسخ' },
  'aff_comp.tier.tier-4.label': { en: 'Tier 4 · Featured', ar: 'Tier 4 · مميّز' },
  'aff_comp.tier.tier-5.label': {
    en: 'Tier 5 · Strategic partner',
    ar: 'Tier 5 · شريك استراتيجي',
  },
  'aff.tiers.tier-1.description': {
    en: '20% on every plan you refer, paid monthly. No minimum traffic, no exclusivity.',
    ar: '20% على كل خطة تحيلها، تندفع شهرياً. بدون حد أدنى للزيارات، وبدون حصرية.',
  },
  'aff.tiers.tier-2.description': {
    en: '25% commission once you cross 10 paid referrals - automatic upgrade, no application.',
    ar: '25% عمولة لما تتجاوز 10 إحالات مدفوعة - ترقية تلقائية، بدون طلب.',
  },
  'aff.tiers.tier-3.description': {
    en: '30% commission at 25 paid referrals, plus access to co-marketing slots in our newsletter.',
    ar: '30% عمولة عند 25 إحالة مدفوعة، بالإضافة لوصول لفرص تسويق مشترك في نشرتنا.',
  },
  'aff.tiers.tier-4.description': {
    en: '35% commission at 50 paid referrals, featured-creator placement and quarterly creator calls.',
    ar: '35% عمولة عند 50 إحالة مدفوعة، وظهور كصانع محتوى مميّز ومكالمات ربع سنوية للصنّاع.',
  },
  'aff.tiers.tier-5.description': {
    en: 'Custom commission, dedicated partner manager, exclusive content access and co-branded resources.',
    ar: 'عمولة مخصصة، ومدير شراكة مخصص، ووصول لمحتوى حصري ومصادر بعلامة مشتركة.',
  },
  'aff.faq.eligibility.q': {
    en: 'Who can join the affiliate program?',
    ar: 'مين يقدر ينضم لبرنامج الإحالة؟',
  },
  'aff.faq.eligibility.a': {
    en: 'Anyone with an audience of UK GCSE/IGCSE English students, parents or teachers. Tutors, content creators, school staff and bloggers all qualify - there is no minimum follower count for Tier 1.',
    ar: 'أي شخص عنده جمهور من طلاب أو أولياء أمور أو معلمي GCSE/IGCSE English في بريطانيا. المدرسون الخصوصيون وصنّاع المحتوى وموظفو المدارس والمدونون كلهم مؤهلون - ما في حد أدنى لعدد المتابعين لـ Tier 1.',
  },
  'aff.faq.payouts.q': {
    en: 'How and when are commissions paid?',
    ar: 'كيف ومتى تندفع العمولات؟',
  },
  'aff.faq.payouts.a': {
    en: "Monthly via Stripe or PayPal, on the 5th of each month for the previous month's referrals that cleared the 30-day refund window.",
    ar: 'شهرياً عن طريق Stripe أو PayPal، في يوم 5 من كل شهر عن إحالات الشهر اللي راح اللي عدّت فترة الاسترجاع 30 يوم.',
  },
  'aff.faq.cookies.q': {
    en: 'How long do tracking cookies last?',
    ar: 'كم تدوم كوكيز التتبع؟',
  },
  'aff.faq.cookies.a': {
    en: '90 days. If a referred visitor signs up at any point inside that window, the conversion is yours.',
    ar: '90 يوم. إذا الزائر المُحال سجّل في أي وقت داخل هالفترة، التحويل لك.',
  },
  'aff.faq.renewals.q': { en: 'Do I earn on plan renewals?', ar: 'هل آخذ عمولة على تجديد الخطط؟' },
  'aff.faq.renewals.a': {
    en: 'Yes - commission is paid on the lifetime of the subscription for as long as the customer remains active and you remain an affiliate in good standing.',
    ar: 'إي - العمولة تندفع طول عمر الاشتراك ما دام العميل نشط وأنت مسوّق بوضع جيد.',
  },
  'aff.faq.tier_upgrade.q': { en: 'How do I move up a tier?', ar: 'كيف أرتفع لمستوى أعلى؟' },
  'aff.faq.tier_upgrade.a': {
    en: 'Automatically. The moment your paid-referral count crosses a threshold (10/25/50), your dashboard re-rates you and the higher commission applies to all future referrals.',
    ar: 'تلقائياً. لحظة ما يتجاوز عدد إحالاتك المدفوعة الحد (10/25/50)، لوحة التحكم حقتك تعيد تصنيفك والعمولة الأعلى تنطبق على كل الإحالات الجاية.',
  },

  // /affiliate/links
  'aff.links.dest.homepage': { en: 'Homepage', ar: 'الصفحة الرئيسية' },
  'aff.links.dest.pricing': { en: 'Pricing', ar: 'الأسعار' },
  'aff.links.dest.igcse': { en: 'IGCSE landing', ar: 'صفحة IGCSE' },
  'aff.links.dest.mock_exams': { en: 'Mock exam builder', ar: 'منشئ الامتحانات التجريبية' },
  'aff.links.dest.for_schools': { en: 'For schools', ar: 'للمدارس' },
  'aff.links.preset.social': {
    en: 'Social media (utm_source=social)',
    ar: 'وسائل التواصل (utm_source=social)',
  },
  'aff.links.preset.newsletter': {
    en: 'Newsletter (utm_source=newsletter)',
    ar: 'النشرة البريدية (utm_source=newsletter)',
  },
  'aff.links.preset.blog': { en: 'Blog post (utm_source=blog)', ar: 'تدوينة (utm_source=blog)' },
  'aff.links.preset.youtube': {
    en: 'YouTube description (utm_source=youtube)',
    ar: 'وصف YouTube (utm_source=youtube)',
  },

  // /affiliate/resources
  'aff.resources.banner.leaderboard': { en: 'Leaderboard 728×90', ar: 'Leaderboard 728×90' },
  'aff.resources.banner.medium_rectangle': {
    en: 'Medium rectangle 300×250',
    ar: 'Medium rectangle 300×250',
  },
  'aff.resources.banner.square': { en: 'Square 250×250', ar: 'Square 250×250' },
  'aff.resources.banner.skyscraper': { en: 'Skyscraper 160×600', ar: 'Skyscraper 160×600' },
  'aff.resources.copy.short_social.label': {
    en: 'Short-form social post',
    ar: 'منشور قصير لوسائل التواصل',
  },
  'aff.resources.copy.short_social.body': {
    en: 'My students keep telling me about The English Hub - clean GCSE & IGCSE revision, exam-board specific, properly graded model answers. Worth a look: {link}',
    ar: 'طلابي ما يخلصون كلام عن The English Hub - مراجعة GCSE & IGCSE مرتبة، خاصة بهيئة الامتحان، وأجوبة نموذجية مصححة صح. يستاهل تشوفه: {link}',
  },
  'aff.resources.copy.newsletter.label': { en: 'Newsletter blurb', ar: 'نبذة للنشرة البريدية' },
  'aff.resources.copy.newsletter.body': {
    en: "I've been recommending The English Hub to parents asking how to support GCSE English revision at home. The exam-board switcher means you get materials matched to AQA, Edexcel, OCR or Eduqas without picking through generic content. {link}",
    ar: 'صرت أنصح بـ The English Hub لأولياء الأمور اللي يسألون كيف يدعمون مراجعة GCSE English في البيت. مبدّل هيئة الامتحان يعني توصلك مواد مطابقة لـ AQA أو Edexcel أو OCR أو Eduqas بدون ما تنبش في محتوى عام. {link}',
  },
  'aff.resources.copy.blog_review.label': {
    en: 'Blog review intro paragraph',
    ar: 'فقرة افتتاحية لمراجعة المدونة',
  },
  'aff.resources.copy.blog_review.body': {
    en: "I've spent the last few weeks testing The English Hub against three of the most-recommended GCSE English revision platforms. Here is what stood out - and where it does not yet match the competition. {link}",
    ar: 'قضيت الأسابيع الأخيرة أجرّب The English Hub مقابل ثلاث من أكثر منصات مراجعة GCSE English اللي ينصحون فيها. هذا اللي تميّز - ووين لساته ما يضاهي المنافسين. {link}',
  },
  'aff.resources.shot.dashboard_overview': {
    en: 'Student dashboard overview',
    ar: 'نظرة عامة على لوحة تحكم الطالب',
  },
  'aff.resources.shot.practice_question': {
    en: 'Practice question with AO breakdown',
    ar: 'سؤال تدريبي مع تفصيل AO',
  },
  'aff.resources.shot.essay_feedback': {
    en: 'AI essay-feedback report',
    ar: 'تقرير ملاحظات المقال بالـ AI',
  },
  'aff.resources.shot.progress_report': {
    en: 'Parent progress report',
    ar: 'تقرير تقدم لولي الأمر',
  },

  // /affiliate/signup
  'aff.signup.audience.under_1k': {
    en: 'Under 1,000 followers / subscribers',
    ar: 'أقل من 1,000 متابع / مشترك',
  },
  'aff.signup.audience.1k_5k': { en: '1,000 - 5,000', ar: '1,000 - 5,000' },
  'aff.signup.audience.5k_25k': { en: '5,000 - 25,000', ar: '5,000 - 25,000' },
  'aff.signup.audience.25k_100k': { en: '25,000 - 100,000', ar: '25,000 - 100,000' },
  'aff.signup.audience.over_100k': { en: 'Over 100,000', ar: 'أكثر من 100,000' },
  'aff.signup.niche.english_tutoring': { en: 'English tutoring', ar: 'تدريس English خصوصي' },
  'aff.signup.niche.school_classroom': {
    en: 'Classroom / school staff',
    ar: 'صف دراسي / موظفو مدرسة',
  },
  'aff.signup.niche.parenting_homeschool': {
    en: 'Parenting / homeschool',
    ar: 'تربية / تعليم منزلي',
  },
  'aff.signup.niche.edtech_reviews': { en: 'EdTech reviews', ar: 'مراجعات EdTech' },
  'aff.signup.niche.language_learning': { en: 'Language learning', ar: 'تعلّم اللغات' },
  'aff.signup.niche.other': { en: 'Other', ar: 'غير ذلك' },

  // /affiliates (public landing)
  'aff_comp.public.why.reason1.title': {
    en: 'Industry-leading commissions',
    ar: 'عمولات هي الأعلى في المجال',
  },
  'aff_comp.public.why.reason1.desc': {
    en: 'Start at 20% on every plan, climb to 35% as you grow - paid monthly with no minimum payout.',
    ar: 'ابدأ بـ 20% على كل خطة، وارتفع لـ 35% مع نموك - تندفع شهرياً بدون حد أدنى للسحب.',
  },
  'aff_comp.public.why.reason2.title': {
    en: 'A product parents actually trust',
    ar: 'منتج أولياء الأمور يثقون فيه فعلاً',
  },
  'aff_comp.public.why.reason2.desc': {
    en: 'Exam-board specific revision built by English teachers - not generic AI slop. Easy to recommend honestly.',
    ar: 'مراجعة خاصة بهيئة الامتحان من بناء معلمي English - مو محتوى AI رديء وعام. سهل تنصح فيه بصدق.',
  },
  'aff_comp.public.why.reason3.title': {
    en: 'Real support, not a portal',
    ar: 'دعم حقيقي، مو بوابة',
  },
  'aff_comp.public.why.reason3.desc': {
    en: 'Direct line to our partnerships team, custom assets, co-marketing slots and quarterly creator calls.',
    ar: 'تواصل مباشر مع فريق الشراكات حقنا، وأصول مخصصة، وفرص تسويق مشترك، ومكالمات ربع سنوية للصنّاع.',
  },
  'aff_comp.public.how.step1.title': { en: 'Apply in 60 seconds', ar: 'قدّم في 60 ثانية' },
  'aff_comp.public.how.step1.desc': {
    en: 'Tell us about your audience and how you plan to refer. Most applications are approved within one working day.',
    ar: 'خبّرنا عن جمهورك وكيف تنوي تحيل. أغلب الطلبات تتقبل خلال يوم عمل واحد.',
  },
  'aff_comp.public.how.step2.title': { en: 'Get your unique link', ar: 'احصل على رابطك الخاص' },
  'aff_comp.public.how.step2.desc': {
    en: 'Pick from preset destinations (homepage, pricing, IGCSE landing) or build your own with full UTM tagging.',
    ar: 'اختر من الوجهات الجاهزة (الصفحة الرئيسية، الأسعار، صفحة IGCSE) أو ابنِ حقك بوسوم UTM كاملة.',
  },
  'aff_comp.public.how.step3.title': { en: 'Share it your way', ar: 'شاركه على طريقتك' },
  'aff_comp.public.how.step3.desc': {
    en: 'Use our banners, screenshots and copy snippets - or write entirely your own. Whatever works for your audience.',
    ar: 'استخدم بنرّاتنا ولقطات الشاشة ومقاطع النصوص حقنا - أو اكتب حقك بالكامل. أي شي يناسب جمهورك.',
  },
  'aff_comp.public.how.step4.title': { en: 'Get paid monthly', ar: 'استلم شهرياً' },
  'aff_comp.public.how.step4.desc': {
    en: 'Commissions clear on the 5th of each month via Stripe or PayPal - for every plan, including renewals, for as long as the customer stays.',
    ar: 'العمولات تنزل في يوم 5 من كل شهر عن طريق Stripe أو PayPal - لكل خطة، ومنها التجديدات، ما دام العميل باقي.',
  },
  'aff_comp.public.commission.plan.student_monthly': {
    en: 'Student · monthly',
    ar: 'طالب · شهري',
  },
  'aff_comp.public.commission.plan.student_annual': {
    en: 'Student · annual',
    ar: 'طالب · سنوي',
  },
  'aff_comp.public.commission.plan.teacher_monthly': {
    en: 'Teacher · monthly',
    ar: 'معلم · شهري',
  },
  'aff_comp.public.commission.plan.teacher_annual': {
    en: 'Teacher · annual',
    ar: 'معلم · سنوي',
  },
  'aff_comp.public.impact.stat1.value': { en: '14,000+', ar: '14,000+' },
  'aff_comp.public.impact.stat1.label': {
    en: 'students revising on the platform',
    ar: 'طالب يراجعون على المنصة',
  },
  'aff_comp.public.impact.stat2.value': { en: '871', ar: '871' },
  'aff_comp.public.impact.stat2.label': {
    en: 'board-specific revision routes',
    ar: 'مسار مراجعة خاص بالهيئات',
  },
  'aff_comp.public.impact.stat3.value': { en: '£42', ar: '£42' },
  'aff_comp.public.impact.stat3.label': {
    en: 'average commission per referral, year one',
    ar: 'متوسط العمولة لكل إحالة، السنة الأولى',
  },
  'aff_comp.public.what_you_get.perk1': {
    en: 'Up to 35% recurring commission',
    ar: 'عمولة متكررة تصل لـ 35%',
  },
  'aff_comp.public.what_you_get.perk2': { en: '90-day cookie window', ar: 'فترة كوكيز 90 يوم' },
  'aff_comp.public.what_you_get.perk3': {
    en: 'Designed banner pack and screenshot library',
    ar: 'حزمة بنرّات مصممة ومكتبة لقطات شاشة',
  },
  'aff_comp.public.what_you_get.perk4': {
    en: 'Pre-written email and social copy',
    ar: 'نصوص إيميل ووسائل تواصل جاهزة',
  },
  'aff_comp.public.what_you_get.perk5': {
    en: 'Real-time dashboard with referral attribution',
    ar: 'لوحة تحكم لحظية مع نسب الإحالات',
  },
  'aff_comp.public.what_you_get.perk6': {
    en: 'Monthly creator newsletter and quarterly partner call',
    ar: 'نشرة شهرية للصنّاع ومكالمة ربع سنوية للشركاء',
  },
  'aff_comp.public.faq.q1.q': {
    en: 'Do I have to be a teacher to join?',
    ar: 'هل لازم أكون معلم عشان أنضم؟',
  },
  'aff_comp.public.faq.q2.q': {
    en: 'How long does it take to be approved?',
    ar: 'كم ياخذ وقت عشان أتقبل؟',
  },
  'aff_comp.public.faq.q3.q': {
    en: 'What happens if my audience is mainly outside the UK?',
    ar: 'شنو يصير إذا جمهوري أغلبه برّا بريطانيا؟',
  },
  'aff_comp.public.faq.q4.q': {
    en: 'Can I promote on TikTok / Instagram / YouTube?',
    ar: 'أقدر أروّج على TikTok / Instagram / YouTube؟',
  },
  'aff_comp.public.faq.q5.q': {
    en: 'Is the program available worldwide?',
    ar: 'هل البرنامج متوفر في كل العالم؟',
  },
  'aff_comp.public.faq.q6.q': {
    en: 'Do you offer custom landing pages for high-volume affiliates?',
    ar: 'هل توفرون صفحات مخصصة للمسوّقين ذوي الحجم العالي؟',
  },
  'aff_comp.public.faq.q7.q': {
    en: 'What happens if a referred customer cancels?',
    ar: 'شنو يصير إذا عميل مُحال ألغى اشتراكه؟',
  },
  'aff_comp.public.faq.q8.q': {
    en: 'Where can I see my referrals and earnings?',
    ar: 'وين أقدر أشوف إحالاتي وأرباحي؟',
  },

  // ─── Sitemap HTML (/sitemap-html) ────────────────────────────────
  'sitemap.h1': { en: 'Sitemap', ar: 'خريطة الموقع' },
  'sitemap.lead': {
    en: 'Every public page on The English Hub, grouped by section.',
    ar: 'كل صفحة عامة في The English Hub، مرتبة حسب القسم.',
  },
  'sitemap.section.home_and_key': { en: 'Home and key pages', ar: 'الرئيسية والصفحات الأساسية' },
  'sitemap.section.for_audiences': {
    en: 'For students, parents, teachers and schools',
    ar: 'للطلاب وأولياء الأمور والمعلمين والمدارس',
  },
  'sitemap.section.revision_hubs': {
    en: 'GCSE board revision hubs',
    ar: 'صفحات مراجعة هيئات GCSE',
  },
  'sitemap.section.set_texts': { en: 'GCSE set texts', ar: 'النصوص المقررة GCSE' },
  'sitemap.section.anthology_poems': { en: 'Anthology poems', ar: 'قصائد الـ anthology' },
  'sitemap.section.igcse': { en: 'IGCSE - board hubs', ar: 'IGCSE - صفحات الهيئات' },
  'sitemap.section.igcse_cambridge': { en: 'IGCSE - Cambridge', ar: 'IGCSE - Cambridge' },
  'sitemap.section.igcse_edexcel': {
    en: 'IGCSE - Pearson Edexcel Literature',
    ar: 'IGCSE - Pearson Edexcel Literature',
  },
  'sitemap.section.igcse_edexcel_lang': {
    en: 'IGCSE - Pearson Edexcel Language',
    ar: 'IGCSE - Pearson Edexcel Language',
  },
  'sitemap.section.courses': { en: 'Courses and units', ar: 'الدورات والوحدات' },
  'sitemap.section.resources': { en: 'Resources and study tools', ar: 'المصادر وأدوات الدراسة' },
  'sitemap.section.analysis_assessment': {
    en: 'Analysis and assessment',
    ar: 'التحليل والتقييم',
  },
  'sitemap.section.toolkit': { en: 'Toolkit and apps', ar: 'مجموعة الأدوات والتطبيقات' },
  'sitemap.section.help_faqs': { en: 'Help and FAQs', ar: 'المساعدة والأسئلة الشائعة' },
  'sitemap.section.legal': { en: 'Legal and policies', ar: 'القانونية والسياسات' },
  'sitemap.section.other': { en: 'Other', ar: 'غير ذلك' },
}
