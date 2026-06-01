// ─── IELTS Model Answers dictionary shard ───────────────────────────────────
// UI / guidance copy for the IELTS Model Answers surface (src/lib/ielts/
// model-answers.ts + src/app/ielts/model-answers/*) - English + Khaleeji
// (Gulf) Arabic.
//
// SCOPE — translated here:
//   • Each item's `section` label (descriptive words; "Task 1/2", "Part 1/2/3",
//     "Academic" technical terms stay Latin).
//   • Each item's `promptNote` (guidance around the prompt).
//   • Each sample's `label` ("Developing"/"Strong"; the "≈ Band x.x" stays Latin).
//   • Every `why[]` line (notes on what lifts the band).
//   • The page chrome (hero, filter chips, card buttons, locked teaser, upsell).
//
// DELIBERATELY NOT HERE (stay English — these are English-language exemplars /
// real-exam-style material, treated like code samples):
//   • Each item's `prompt` (the IELTS exam question as it appears in the test).
//   • Each sample's `text` (the actual model-answer prose at each band level).
//
// Khaleeji conventions per the master dictionary header (شنو/أبغى/وايد/الحين/
// إحنا/شوف/دوّر/ببلاش/لحظة …; Levantine شو/بحكي/كيفك/ليش banned). Brand +
// technical terms stay Latin even inside Arabic: The English Hub, IELTS, Band,
// Band 6.5, Band 8, Task 1, Task 2, Part 1, Part 2, Part 3, Academic, AI.
//
// The `en` value is the ORIGINAL English verbatim (curly apostrophes ’ and
// en-dashes – preserved exactly).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_MODELANSWERS_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // ── Writing Task 1 · Academic ─────────────────────────────────────────────
  'ielts.modelans.wt1a.section': {
    en: 'Writing Task 1 · Academic',
    ar: 'الكتابة Task 1 · Academic',
  },
  'ielts.modelans.wt1a.promptNote': {
    en: 'Self-authored data: National Gallery — 2.0m (2010), 3.2m (2015), 4.5m (2020). Science Centre — 1.5m (2010), 2.8m (2015), 3.0m (2020). History Museum — 3.5m (2010), 3.1m (2015), 2.4m (2020).',
    ar: 'بيانات من إعدادنا: National Gallery — 2.0m (2010)، 3.2m (2015)، 4.5m (2020). Science Centre — 1.5m (2010)، 2.8m (2015)، 3.0m (2020). History Museum — 3.5m (2010)، 3.1m (2015)، 2.4m (2020).',
  },
  'ielts.modelans.wt1a.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
  },
  'ielts.modelans.wt1a.s0.why.0': {
    en: 'It answers the task and includes the key figures accurately, which keeps the task-response mark solid.',
    ar: 'يجاوب على المطلوب ويحط الأرقام المهمة بدقة، وهذا يثبّت درجة الاستجابة للمهمة.',
  },
  'ielts.modelans.wt1a.s0.why.1': {
    en: 'There is an overview, but it arrives at the end rather than up front, and it could be sharper about the swap in ranking.',
    ar: 'فيه نظرة عامة، بس جت بالآخر بدل ما تكون بالبداية، وكان ممكن تكون أوضح عن تبدّل الترتيب.',
  },
  'ielts.modelans.wt1a.s0.why.2': {
    en: 'Linking is functional ("In 2010 / By 2020 / Overall") but a bit repetitive, which holds back the organisation mark.',
    ar: 'الربط شغّال ("In 2010 / By 2020 / Overall") بس مكرّر شوي، وهذا يأخّر درجة التنظيم.',
  },
  'ielts.modelans.wt1a.s0.why.3': {
    en: 'To climb higher: lead with the overview, group the two rising museums together, and use more varied change language (e.g. "more than doubled", "a steady decline").',
    ar: 'عشان ترتقي أعلى: ابدأ بالنظرة العامة، وجمّع المتحفين اللي طالعين مع بعض، واستخدم لغة تغيّر أكثر تنوّع (مثل "more than doubled"، "a steady decline").',
  },
  'ielts.modelans.wt1a.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
  },
  'ielts.modelans.wt1a.s1.why.0': {
    en: 'The overview is placed second, is fully separate, and captures the single most important idea — the reversal in ranking — which is exactly what lifts the task-response mark.',
    ar: 'النظرة العامة جت ثاني، ومنفصلة تمام، وتمسك الفكرة الأهم — انقلاب الترتيب — وهذا بالضبط اللي يرفع درجة الاستجابة للمهمة.',
  },
  'ielts.modelans.wt1a.s1.why.1': {
    en: 'Data is selected and grouped (the two rising museums versus the declining one) rather than listed year by year.',
    ar: 'البيانات منتقاة ومجمّعة (المتحفين الطالعين مقابل المتحف النازل) بدل ما تنسرد سنة سنة.',
  },
  'ielts.modelans.wt1a.s1.why.2': {
    en: 'Change is described with precise, varied phrasing ("more than doubled", "eased", "edging up only marginally", "the sharpest early surge").',
    ar: 'التغيّر موصوف بصياغة دقيقة ومتنوّعة ("more than doubled"، "eased"، "edging up only marginally"، "the sharpest early surge").',
  },
  'ielts.modelans.wt1a.s1.why.3': {
    en: 'Sentence structures vary naturally and the figures are woven in as support, not dumped, signalling strong control of grammar and vocabulary.',
    ar: 'تراكيب الجمل تتنوّع بشكل طبيعي والأرقام منسوجة كدعم مو مرمية رمي، وهذا يدل على تحكّم قوي بالقواعد والمفردات.',
  },

  // ── Writing Task 2 · Essay ────────────────────────────────────────────────
  'ielts.modelans.wt2.section': {
    en: 'Writing Task 2 · Essay',
    ar: 'الكتابة Task 2 · مقال',
  },
  'ielts.modelans.wt2.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
  },
  'ielts.modelans.wt2.s0.why.0': {
    en: 'Both views are covered and a clear opinion is given, so the essay does the job the question asks.',
    ar: 'الرأيين مغطّيين وفيه رأي واضح، فالمقال يسوّي اللي طالبه السؤال.',
  },
  'ielts.modelans.wt2.s0.why.1': {
    en: 'Paragraphing is logical, but ideas are stated rather than fully developed — each point needs an example or a "so what" to feel convincing.',
    ar: 'تقسيم الفقرات منطقي، بس الأفكار مذكورة مو متطوّرة تمام — كل نقطة تحتاج مثال أو "وش يعني هذا" عشان تقنع.',
  },
  'ielts.modelans.wt2.s0.why.2': {
    en: 'Vocabulary and grammar are accurate but fairly plain, with some repetition ("good", "think", "knowledge") that caps the range marks.',
    ar: 'المفردات والقواعد صحيحة بس بسيطة شوي، مع شوية تكرار ("good"، "think"، "knowledge") يحدّ من درجات التنوّع.',
  },
  'ielts.modelans.wt2.s0.why.3': {
    en: 'To climb higher: extend each reason with a concrete example, vary the linking beyond "On one hand / On the other hand", and use more precise academic vocabulary.',
    ar: 'عشان ترتقي أعلى: وسّع كل سبب بمثال محسوس، ونوّع الربط أكثر من "On one hand / On the other hand"، واستخدم مفردات أكاديمية أدق.',
  },
  'ielts.modelans.wt2.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
  },
  'ielts.modelans.wt2.s1.why.0': {
    en: 'The position is clear from the introduction and is sustained consistently — the writer argues the two aims are complementary, then proves it.',
    ar: 'الموقف واضح من المقدمة وثابت طول المقال — الكاتب يجادل إن الهدفين مكمّلين لبعض، وبعدها يثبتها.',
  },
  'ielts.modelans.wt2.s1.why.1': {
    en: 'Each body paragraph develops its idea with reasoning and concrete fields/examples rather than bare assertion, which is what the top task-response bands reward.',
    ar: 'كل فقرة في المتن تطوّر فكرتها بتعليل ومجالات/أمثلة محسوسة بدل التأكيد المجرّد، وهذا اللي تكافئ عليه أعلى Band بالاستجابة للمهمة.',
  },
  'ielts.modelans.wt2.s1.why.2': {
    en: 'Cohesion is natural and varied (no mechanical "Firstly/Secondly"); ideas connect through meaning, not just connector words.',
    ar: 'التماسك طبيعي ومتنوّع (بدون "Firstly/Secondly" آلي)؛ الأفكار تترابط بالمعنى مو بس بكلمات الربط.',
  },
  'ielts.modelans.wt2.s1.why.3': {
    en: 'Vocabulary is precise and academic ("complementary", "vocational", "intellectual curiosity") and sentence forms are varied and almost entirely error-free.',
    ar: 'المفردات دقيقة وأكاديمية ("complementary"، "vocational"، "intellectual curiosity") وأشكال الجمل متنوّعة وتقريباً خالية من الأخطاء.',
  },

  // ── Speaking Part 1 ───────────────────────────────────────────────────────
  'ielts.modelans.sp1.section': {
    en: 'Speaking Part 1',
    ar: 'المحادثة Part 1',
  },
  'ielts.modelans.sp1.promptNote': {
    en: 'Part 1 answers should be a couple of sentences — enough to give a reason and a small detail, without turning into a speech.',
    ar: 'أجوبة Part 1 لازم تكون جملتين ثلاث — تكفي تعطي سبب وتفصيلة صغيرة، بدون ما تتحوّل لخطبة.',
  },
  'ielts.modelans.sp1.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
  },
  'ielts.modelans.sp1.s0.why.0': {
    en: 'It answers directly and adds a reason and an example, so the response is relevant and complete enough for the question.',
    ar: 'يجاوب على طول ويضيف سبب ومثال، فالجواب مناسب ومكتمل بما يكفي للسؤال.',
  },
  'ielts.modelans.sp1.s0.why.1': {
    en: 'Speech would flow reasonably but the sentences are short and similar in shape, which limits the fluency and range marks.',
    ar: 'الكلام بينساب بشكل معقول بس الجمل قصيرة ومتشابهة بالشكل، وهذا يحدّ من درجات الطلاقة والتنوّع.',
  },
  'ielts.modelans.sp1.s0.why.2': {
    en: 'Vocabulary is correct but everyday ("like", "good", "relax"); a few more natural collocations would help.',
    ar: 'المفردات صحيحة بس يومية ("like"، "good"، "relax")؛ شوية متلازمات طبيعية أكثر بتساعد.',
  },
  'ielts.modelans.sp1.s0.why.3': {
    en: 'To climb higher: link ideas more smoothly, add one vivid detail, and use a more idiomatic phrase or two.',
    ar: 'عشان ترتقي أعلى: اربط الأفكار بسلاسة أكثر، وزِد تفصيلة حيّة وحدة، واستخدم عبارة اصطلاحية أو ثنتين.',
  },
  'ielts.modelans.sp1.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
  },
  'ielts.modelans.sp1.s1.why.0': {
    en: 'The answer sounds spontaneous and unforced, with natural fillers ("actually", "a bit of") that mark genuine fluency rather than a memorised script.',
    ar: 'الجواب يطلع عفوي وغير متكلّف، مع حشوات طبيعية ("actually"، "a bit of") تدل على طلاقة حقيقية مو نص محفوظ.',
  },
  'ielts.modelans.sp1.s1.why.1': {
    en: 'Ideas connect smoothly and the speaker extends the answer without being asked, which the higher fluency bands reward.',
    ar: 'الأفكار تترابط بسلاسة والمتحدث يمدّ الجواب من دون ما ينطلب منه، وهذا تكافئ عليه أعلى Band بالطلاقة.',
  },
  'ielts.modelans.sp1.s1.why.2': {
    en: 'Language is varied and idiomatic ("stress-reliever", "from scratch", "I\'m no chef"), showing a wide, flexible vocabulary.',
    ar: 'اللغة متنوّعة واصطلاحية ("stress-reliever"، "from scratch"، "I\'m no chef")، تبيّن مفردات واسعة ومرنة.',
  },
  'ielts.modelans.sp1.s1.why.3': {
    en: 'Grammar is accurate across a mix of tenses and structures, with the contractions and rhythm of natural speech.',
    ar: 'القواعد دقيقة عبر مزيج من الأزمنة والتراكيب، مع الاختصارات وإيقاع الكلام الطبيعي.',
  },

  // ── Speaking Part 2 ───────────────────────────────────────────────────────
  'ielts.modelans.sp2.section': {
    en: 'Speaking Part 2',
    ar: 'المحادثة Part 2',
  },
  'ielts.modelans.sp2.promptNote': {
    en: 'You have one minute to prepare and should speak for one to two minutes. The two samples below are written as continuous monologues.',
    ar: 'عندك دقيقة وحدة تحضّر فيها ولازم تتكلم من دقيقة إلى دقيقتين. النموذجين تحت مكتوبين كمونولوج متواصل.',
  },
  'ielts.modelans.sp2.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
  },
  'ielts.modelans.sp2.s0.why.0': {
    en: 'All four bullet points are covered and the talk fills the time, so the task is fully addressed.',
    ar: 'النقاط الأربع كلها مغطّاة والكلام يملا الوقت، فالمهمة معالَجة بالكامل.',
  },
  'ielts.modelans.sp2.s0.why.1': {
    en: 'It is organised in clear stages, but the connectors are simple and repeated ("So / Also / The reason"), keeping the organisation at a middle level.',
    ar: 'منظّم بمراحل واضحة، بس أدوات الربط بسيطة ومكرّرة ("So / Also / The reason")، وهذا يخلّي التنظيم بمستوى متوسط.',
  },
  'ielts.modelans.sp2.s0.why.2': {
    en: 'Vocabulary is accurate but plain, and most sentences follow a similar pattern, which limits the range marks.',
    ar: 'المفردات صحيحة بس بسيطة، ومعظم الجمل على نمط متشابه، وهذا يحدّ من درجات التنوّع.',
  },
  'ielts.modelans.sp2.s0.why.3': {
    en: 'To climb higher: add a specific detail or short story, vary sentence openings, and use more precise or idiomatic vocabulary.',
    ar: 'عشان ترتقي أعلى: زِد تفصيلة محددة أو قصة قصيرة، ونوّع بدايات الجمل، واستخدم مفردات أدق أو اصطلاحية أكثر.',
  },
  'ielts.modelans.sp2.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
  },
  'ielts.modelans.sp2.s1.why.0': {
    en: 'The long turn is delivered fluently and at length, covering every prompt while sounding like a real, unscripted explanation.',
    ar: 'الدور الطويل يُلقى بطلاقة وبإسهاب، يغطّي كل نقطة وفي نفس الوقت يبان شرح حقيقي مو محفوظ.',
  },
  'ielts.modelans.sp2.s1.why.1': {
    en: 'Cohesion is sophisticated and natural ("As for how", "On top of that", "once the muscle memory kicks in"), well beyond mechanical linking.',
    ar: 'التماسك راقي وطبيعي ("As for how"، "On top of that"، "once the muscle memory kicks in")، أرقى بوايد من الربط الآلي.',
  },
  'ielts.modelans.sp2.s1.why.2': {
    en: 'The language is rich and idiomatic ("never quite got round to", "a hybrid approach", "notoriously frustrating", "grounding"), showing a wide range used precisely.',
    ar: 'اللغة غنية واصطلاحية ("never quite got round to"، "a hybrid approach"، "notoriously frustrating"، "grounding")، تبيّن مدى واسع مستخدَم بدقة.',
  },
  'ielts.modelans.sp2.s1.why.3': {
    en: 'A variety of complex structures appears with very few errors, and the speaker shows nuance (distinguishing "play a song confidently" from "genuine fluency").',
    ar: 'يظهر تنوّع من التراكيب المعقّدة بأخطاء قليلة وايد، والمتحدث يبيّن دقة في الفروق (يفرّق بين "play a song confidently" و"genuine fluency").',
  },

  // ── Speaking Part 3 ───────────────────────────────────────────────────────
  'ielts.modelans.sp3.section': {
    en: 'Speaking Part 3',
    ar: 'المحادثة Part 3',
  },
  'ielts.modelans.sp3.promptNote': {
    en: 'Part 3 expects a fuller, more analytical answer — give a view, explain it, and consider more than one side.',
    ar: 'Part 3 يتوقّع جواب أوفى وأكثر تحليلاً — اعطِ رأي، واشرحه، وفكّر بأكثر من جهة.',
  },
  'ielts.modelans.sp3.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
  },
  'ielts.modelans.sp3.s0.why.0': {
    en: 'It gives a clear view and looks at both sides, which is what a Part 3 answer needs.',
    ar: 'يعطي رأي واضح ويشوف الجهتين، وهذا اللي يحتاجه جواب Part 3.',
  },
  'ielts.modelans.sp3.s0.why.1': {
    en: 'There is a relevant example, but the ideas stay fairly general and could be pushed further.',
    ar: 'فيه مثال مناسب، بس الأفكار تبقى عامة شوي وكان ممكن تتعمّق أكثر.',
  },
  'ielts.modelans.sp3.s0.why.2': {
    en: 'Linking ("However / So overall") works but is simple, and the vocabulary, while accurate, is not very precise.',
    ar: 'الربط ("However / So overall") شغّال بس بسيط، والمفردات، مع إنها صحيحة، مو دقيقة وايد.',
  },
  'ielts.modelans.sp3.s0.why.3': {
    en: 'To climb higher: develop each point with a clearer reason, hedge opinions more naturally, and use more academic vocabulary.',
    ar: 'عشان ترتقي أعلى: طوّر كل نقطة بسبب أوضح، ولطّف الآراء بشكل أطبع، واستخدم مفردات أكاديمية أكثر.',
  },
  'ielts.modelans.sp3.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
  },
  'ielts.modelans.sp3.s1.why.0': {
    en: 'The answer is analytical and nuanced — it qualifies the question ("depends on the type of skill") instead of giving a flat yes or no.',
    ar: 'الجواب تحليلي ودقيق — يقيّد السؤال ("depends on the type of skill") بدل ما يعطي نعم أو لا مباشرة.',
  },
  'ielts.modelans.sp3.s1.why.1': {
    en: 'Points are fully developed with reasoning and examples, and opinions are hedged naturally ("My instinct is", "I\'d be wary of overstating it").',
    ar: 'النقاط متطوّرة بالكامل بتعليل وأمثلة، والآراء ملطّفة بشكل طبيعي ("My instinct is"، "I\'d be wary of overstating it").',
  },
  'ielts.modelans.sp3.s1.why.2': {
    en: 'Cohesion is seamless and discursive ("That said", "So on balance", "if anything"), typical of a high-level speaker.',
    ar: 'التماسك سلس وحواري ("That said"، "So on balance"، "if anything")، نموذجي لمتحدث بمستوى عالي.',
  },
  'ielts.modelans.sp3.s1.why.3': {
    en: 'Vocabulary is precise and varied and the grammar handles complex, abstract ideas with ease and accuracy.',
    ar: 'المفردات دقيقة ومتنوّعة والقواعد تتعامل مع الأفكار المعقّدة والمجرّدة بسهولة ودقة.',
  },

  // ── Page chrome (ModelAnswersClient) ──────────────────────────────────────
  'ielts.modelans.back': {
    en: 'Back to IELTS',
    ar: 'رجوع إلى IELTS',
  },
  'ielts.modelans.hero.badge': {
    en: 'Model answers',
    ar: 'نماذج إجابات',
  },
  'ielts.modelans.hero.title': {
    en: 'IELTS model answers, graded band by band',
    ar: 'نماذج إجابات IELTS، مقيّمة Band ورا Band',
  },
  'ielts.modelans.hero.subtitle': {
    en: '{count} self-authored sample answers for Writing and Speaking, each written to a target band — a developing answer (around 6.5) and a strong answer (around 8) for the same question — with a plain-English note on exactly what moves the answer up the scale.',
    ar: '{count} نموذج إجابة من إعدادنا للكتابة والمحادثة، كل وحدة مكتوبة لـ Band مستهدف — إجابة في طور التطور (حوالي 6.5) وإجابة قوية (حوالي 8) لنفس السؤال — مع ملاحظة بإنجليزي بسيط عن وش بالضبط يطلّع الإجابة فوق بالسلّم.',
  },
  'ielts.modelans.hero.disclaimer': {
    en: 'These are original examples written by The English Hub. They are not taken from any real exam paper, and our scoring notes describe the marking criteria in our own words. Bands are illustrative, not a guarantee of a result.',
    ar: 'هذي أمثلة أصلية مكتوبة من The English Hub. مو مأخوذة من أي ورقة امتحان حقيقية، وملاحظات التقييم حقّتنا تصف معايير التصحيح بكلماتنا الخاصة. الـ Band توضيحية، مو ضمان لنتيجة.',
  },
  'ielts.modelans.filter.show': {
    en: 'Show',
    ar: 'اعرض',
  },
  'ielts.modelans.filter.all': {
    en: 'All',
    ar: 'الكل',
  },
  'ielts.modelans.filter.writing': {
    en: 'Writing',
    ar: 'الكتابة',
  },
  'ielts.modelans.filter.speaking': {
    en: 'Speaking',
    ar: 'المحادثة',
  },
  'ielts.modelans.free_sample': {
    en: 'Free sample',
    ar: 'نموذج ببلاش',
  },
  'ielts.modelans.why_heading': {
    en: 'Why this sits at this band',
    ar: 'ليش هذي عند هذا الـ Band',
  },
  'ielts.modelans.practise_cta': {
    en: 'Practise this with AI feedback',
    ar: 'تمرّن على هذا مع تقييم AI',
  },
  'ielts.modelans.upsell.title': {
    en: 'Unlock every model answer',
    ar: 'افتح كل نموذج إجابة',
  },
  'ielts.modelans.upsell.body': {
    en: 'The full library — and unlimited AI band feedback on your own Writing and Speaking — is part of the IELTS plan.',
    ar: 'المكتبة الكاملة — وتقييم Band بالـ AI بلا حدود على كتابتك ومحادثتك أنت — جزء من خطة IELTS.',
  },
  'ielts.modelans.upsell.cta': {
    en: 'See IELTS plans',
    ar: 'شوف خطط IELTS',
  },
  'ielts.modelans.locked.body': {
    en: 'The full sample answers and scoring notes are part of the IELTS plan.',
    ar: 'نماذج الإجابات الكاملة وملاحظات التقييم جزء من خطة IELTS.',
  },
  'ielts.modelans.locked.unlock': {
    en: 'Unlock',
    ar: 'افتح',
  },
}
