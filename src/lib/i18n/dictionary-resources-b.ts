/**
 * Bucket A wave 5 (part 1) - `resources` namespace repair.
 *
 * These 120 keys previously lived only in ./dictionary-audit-fix.ts with
 * path-segment fake English ("Title"/"Heading"/"Lead"/"Desc"/"B"/"H") and
 * machine-mangled AR, so the public SEO resource pages rendered junk in
 * AR mode. EN values here are authored to match the exact UI position each
 * key occupies (verified against the rendering page/component), using
 * exam-accurate GCSE/IGCSE terminology and the on-brand voice. AR is
 * natural Khaleeji (Gulf register), consistent with src/lib/eal/curriculum.ts.
 *
 * Merged into the master lookup() via ./dictionary.ts (do not edit there).
 *
 * Covers exam-technique (hub, exam-day, essay-structure, question-types,
 * time-management) + poetry hub + study-tools/checklists.
 * Remaining 29 resources.* audit-fix keys (study_tools tail) deferred to
 * wave 5 part 2.
 */

export const RESOURCES_B_DICTIONARY: Record<string, { en: string; ar: string }> = {
  /* ─── Exam technique - breadcrumbs ─────────────────────────────── */
  'resources.exam_tech.bc.exam_tech': { en: `Exam technique`, ar: `تقنيات الامتحان` },
  'resources.exam_tech.bc.home': { en: `Home`, ar: `الرئيسية` },
  'resources.exam_tech.bc.resources': { en: `Resources`, ar: `المصادر` },
  'resources.exam_tech.bc.this': { en: `Exam technique`, ar: `تقنيات الامتحان` },

  /* ─── Exam technique hub - "continue exploring" cards ──────────── */
  'resources.exam_tech.cont.all.desc': {
    en: `Browse every revision guide, resource and tool in one place.`,
    ar: `تصفّح كل أدلة المراجعة والمصادر والأدوات في مكان واحد.`,
  },
  'resources.exam_tech.cont.all.label': { en: `All resources`, ar: `كل المصادر` },
  'resources.exam_tech.cont.model.desc': {
    en: `Read graded model answers and see exactly what top responses look like.`,
    ar: `اقرأ نماذج إجابات مصحّحة وشوف بالضبط كيف تكون الإجابة الممتازة.`,
  },
  'resources.exam_tech.cont.model.label': { en: `Model answers`, ar: `نماذج الإجابات` },
  'resources.exam_tech.cont.tech.desc': {
    en: `Master every literary technique with clear explanations and examples.`,
    ar: `أتقن كل تقنية أدبية مع شرح واضح وأمثلة.`,
  },
  'resources.exam_tech.cont.tech.label': { en: `Literary techniques`, ar: `التقنيات الأدبية` },
  'resources.exam_tech.cont.title': { en: `Continue exploring`, ar: `كمّل استكشافك` },

  /* ─── Exam technique hub - section card CTA ────────────────────── */
  'resources.exam_tech.cta.read_guide': { en: `Read the guide`, ar: `اقرأ الدليل` },

  /* ─── Exam day page ────────────────────────────────────────────── */
  'resources.exam_tech.day.bc_this': { en: `Exam day`, ar: `يوم الامتحان` },
  'resources.exam_tech.day.eyebrow': { en: `Exam technique`, ar: `تقنيات الامتحان` },
  'resources.exam_tech.day.final_rev': {
    en: `One last revision before the big day`,
    ar: `مراجعة أخيرة قبل اليوم الكبير`,
  },
  'resources.exam_tech.day.got_this': { en: `You have got this`, ar: `أنت تقدر عليها` },
  'resources.exam_tech.day.how_plan': { en: `How to plan your answers`, ar: `كيف تخطّط لإجاباتك` },
  'resources.exam_tech.day.how_read': { en: `How to read the paper`, ar: `كيف تقرأ ورقة الامتحان` },
  'resources.exam_tech.day.last_5': { en: `The last 5 minutes`, ar: `آخر ٥ دقايق` },
  'resources.exam_tech.day.stay_calm': {
    en: `How to stay calm under pressure`,
    ar: `كيف تبقى هادئ تحت الضغط`,
  },
  'resources.exam_tech.day.subtitle': {
    en: `Everything you need to walk into your GCSE or IGCSE English exam prepared, calm and ready to do your best.`,
    ar: `كل اللي تحتاجه عشان تدخل امتحان الإنجليزي GCSE أو IGCSE وأنت مستعد وهادئ وجاهز تعطي أحسن ما عندك.`,
  },
  'resources.exam_tech.day.title': { en: `Exam day advice`, ar: `نصائح يوم الامتحان` },
  'resources.exam_tech.day.what_bring': { en: `What to bring`, ar: `وش تجيب معاك` },

  /* ─── Essay structure page ─────────────────────────────────────── */
  'resources.exam_tech.es.bc_this': { en: `Essay structure`, ar: `بنية المقال` },
  'resources.exam_tech.es.conclusion': { en: `Conclusion techniques`, ar: `تقنيات الخاتمة` },
  'resources.exam_tech.es.eyebrow': { en: `Exam technique`, ar: `تقنيات الامتحان` },
  'resources.exam_tech.es.how_many': { en: `How many paragraphs?`, ar: `كم فقرة تكتب؟` },
  'resources.exam_tech.es.intro': { en: `Introduction techniques`, ar: `تقنيات المقدّمة` },
  'resources.exam_tech.es.linking': {
    en: `Linking paragraphs to build an argument`,
    ar: `ربط الفقرات لبناء حجّة متماسكة`,
  },
  'resources.exam_tech.es.peel': { en: `The PEEL paragraph template`, ar: `قالب فقرة PEEL` },
  'resources.exam_tech.es.practise.body': {
    en: `Put these essay structures into practice with timed questions and graded model answers.`,
    ar: `طبّق بنى المقال هذي مع أسئلة موقّتة ونماذج إجابات مصحّحة.`,
  },
  'resources.exam_tech.es.practise.cta_model': {
    en: `View model answers`,
    ar: `شوف نماذج الإجابات`,
  },
  'resources.exam_tech.es.practise.cta_rev': {
    en: `Exam technique revision`,
    ar: `مراجعة تقنيات الامتحان`,
  },
  'resources.exam_tech.es.practise.title': {
    en: `Practise your essay structure`,
    ar: `تمرّن على بنية مقالك`,
  },
  'resources.exam_tech.es.subtitle': {
    en: `Proven templates for introductions, PEEL paragraphs, topic sentences, linking and conclusions - for every GCSE and IGCSE English essay.`,
    ar: `قوالب مجرّبة للمقدّمات وفقرات PEEL والجمل الموضوعية والربط والخواتيم - لكل مقال إنجليزي في GCSE وIGCSE.`,
  },
  'resources.exam_tech.es.title': { en: `Essay structure templates`, ar: `قوالب بنية المقال` },
  'resources.exam_tech.es.topic': {
    en: `Writing strong topic sentences`,
    ar: `كتابة جمل موضوعية قوية`,
  },

  /* ─── Exam technique hub - "explore the guides" ────────────────── */
  'resources.exam_tech.explore.subtitle': {
    en: `Four focused guides that cover everything you need to perform under exam conditions.`,
    ar: `أربعة أدلة مركّزة تغطّي كل اللي تحتاجه عشان تأدّي تحت ظروف الامتحان.`,
  },
  'resources.exam_tech.explore.title': { en: `Explore the guides`, ar: `استكشف الأدلة` },

  /* ─── Exam technique hub - hero ────────────────────────────────── */
  'resources.exam_tech.hero.eyebrow': { en: `Exam technique`, ar: `تقنيات الامتحان` },
  'resources.exam_tech.hero.subtitle': {
    en: `Knowledge alone does not earn top grades - exam technique does. Master timing, question types, essay structure and exam-day strategy.`,
    ar: `المعرفة وحدها ما تجيب أعلى الدرجات - تقنية الامتحان هي اللي تجيبها. أتقن التوقيت وأنواع الأسئلة وبنية المقال واستراتيجية يوم الامتحان.`,
  },
  'resources.exam_tech.hero.title': {
    en: `Exam technique that turns knowledge into grades`,
    ar: `تقنية امتحان تحوّل المعرفة إلى درجات`,
  },

  /* ─── Question types page ──────────────────────────────────────── */
  'resources.exam_tech.qt.bc_this': { en: `Question types`, ar: `أنواع الأسئلة` },
  'resources.exam_tech.qt.eyebrow': { en: `Exam technique`, ar: `تقنيات الامتحان` },
  'resources.exam_tech.qt.jump_to': { en: `Jump to a question type`, ar: `انتقل إلى نوع سؤال` },
  'resources.exam_tech.qt.practise.body': {
    en: `Practise every question type with exam-style questions and instant feedback.`,
    ar: `تمرّن على كل نوع سؤال مع أسئلة بنمط الامتحان وملاحظات فورية.`,
  },
  'resources.exam_tech.qt.practise.cta': {
    en: `Exam technique revision`,
    ar: `مراجعة تقنيات الامتحان`,
  },
  'resources.exam_tech.qt.practise.title': {
    en: `Practise these question types`,
    ar: `تمرّن على أنواع الأسئلة هذي`,
  },
  'resources.exam_tech.qt.subtitle': {
    en: `Decode what every question is really asking - how to structure your answer, common mistakes to avoid, and example responses.`,
    ar: `افهم وش يطلبه كل سؤال فعلاً - كيف تركّب إجابتك، والأخطاء الشائعة اللي تتجنّبها، ونماذج إجابات.`,
  },
  'resources.exam_tech.qt.title': {
    en: `How to approach different question types`,
    ar: `كيف تتعامل مع أنواع الأسئلة المختلفة`,
  },

  /* ─── Exam technique hub - quick wins ──────────────────────────── */
  'resources.exam_tech.qw.check.b': {
    en: `Always save the last few minutes to proofread for spelling, punctuation and grammar - easy marks are lost here.`,
    ar: `دايماً خلّ آخر دقايق للمراجعة الإملائية والترقيم والقواعد - هنا تضيع درجات سهلة.`,
  },
  'resources.exam_tech.qw.check.h': { en: `Check your SPaG`, ar: `راجع الإملاء والترقيم` },
  'resources.exam_tech.qw.clock.b': {
    en: `Roughly one mark equals one minute. Watch the clock and never overrun a low-mark question.`,
    ar: `تقريباً كل درجة تساوي دقيقة. راقب الساعة ولا تتجاوز الوقت في سؤال قليل الدرجات.`,
  },
  'resources.exam_tech.qw.clock.h': { en: `Watch the clock`, ar: `راقب الساعة` },
  'resources.exam_tech.qw.plan.b': {
    en: `Spend three to five minutes planning any extended answer - a quick plan keeps you focused and on-question.`,
    ar: `خصّص من ثلاث إلى خمس دقايق لتخطيط أي إجابة مطوّلة - الخطّة السريعة تخلّيك مركّز وملتزم بالسؤال.`,
  },
  'resources.exam_tech.qw.plan.h': { en: `Plan before you write`, ar: `خطّط قبل ما تكتب` },
  'resources.exam_tech.qw.quotes.b': {
    en: `Embed short quotations of two to five words. Precise evidence is far stronger than long copied lines.`,
    ar: `ضمّن اقتباسات قصيرة من كلمتين إلى خمس كلمات. الدليل الدقيق أقوى بكثير من سطور منقولة طويلة.`,
  },
  'resources.exam_tech.qw.quotes.h': { en: `Embed short quotations`, ar: `ضمّن اقتباسات قصيرة` },
  'resources.exam_tech.qw.read.b': {
    en: `Spend the first 10 to 15 minutes reading and annotating before you write a single word.`,
    ar: `خصّص أول ١٠ إلى ١٥ دقيقة للقراءة والتعليق على النص قبل ما تكتب ولا كلمة.`,
  },
  'resources.exam_tech.qw.read.h': { en: `Read before you write`, ar: `اقرأ قبل ما تكتب` },
  'resources.exam_tech.qw.subtitle': {
    en: `Five habits that make an immediate difference to your marks in any English exam.`,
    ar: `خمس عادات تفرق فوراً في درجاتك في أي امتحان إنجليزي.`,
  },
  'resources.exam_tech.qw.title': { en: `Five quick wins`, ar: `خمسة مكاسب سريعة` },

  /* ─── Exam technique hub - revision CTA ────────────────────────── */
  'resources.exam_tech.revcta.body': {
    en: `Put every technique into practice with timed, interactive exam-technique revision.`,
    ar: `طبّق كل تقنية مع مراجعة تفاعلية موقّتة لتقنيات الامتحان.`,
  },
  'resources.exam_tech.revcta.cta': {
    en: `Start exam technique revision`,
    ar: `ابدأ مراجعة تقنيات الامتحان`,
  },
  'resources.exam_tech.revcta.title': { en: `Ready to practise?`, ar: `جاهز تتمرّن؟` },

  /* ─── Exam technique hub - section cards ───────────────────────── */
  'resources.exam_tech.sec.day.badge': { en: `Be ready`, ar: `جهّز نفسك` },
  'resources.exam_tech.sec.day.desc': {
    en: `What to bring, how to read the paper, how to stay calm, and what to do in the last five minutes.`,
    ar: `وش تجيب معاك، وكيف تقرأ الورقة، وكيف تبقى هادئ، ووش تسوّي في آخر خمس دقايق.`,
  },
  'resources.exam_tech.sec.day.title': { en: `Exam day advice`, ar: `نصائح يوم الامتحان` },
  'resources.exam_tech.sec.essay.badge': { en: `Structure`, ar: `البنية` },
  'resources.exam_tech.sec.essay.desc': {
    en: `Introduction techniques, PEEL paragraphs, topic sentences, linking and strong conclusions.`,
    ar: `تقنيات المقدّمة، وفقرات PEEL، والجمل الموضوعية، والربط، والخواتيم القوية.`,
  },
  'resources.exam_tech.sec.essay.title': {
    en: `Essay structure templates`,
    ar: `قوالب بنية المقال`,
  },
  'resources.exam_tech.sec.qtypes.badge': { en: `Decode it`, ar: `افهمه` },
  'resources.exam_tech.sec.qtypes.desc': {
    en: `How to approach "How does the writer...", comparison, extract-based, essay and creative writing tasks.`,
    ar: `كيف تتعامل مع أسئلة "كيف يستخدم الكاتب..."، والمقارنة، والمقتطف، والمقال، والكتابة الإبداعية.`,
  },
  'resources.exam_tech.sec.qtypes.title': { en: `Question types`, ar: `أنواع الأسئلة` },
  'resources.exam_tech.sec.time.badge': { en: `Pace it`, ar: `وزّع وقتك` },
  'resources.exam_tech.sec.time.desc': {
    en: `Paper-by-paper timing breakdowns and how to divide time per question without running out.`,
    ar: `تقسيم التوقيت ورقة ورقة، وكيف توزّع الوقت لكل سؤال بدون ما يخلص الوقت.`,
  },
  'resources.exam_tech.sec.time.title': { en: `Time management`, ar: `إدارة الوقت` },

  /* ─── Time management page ─────────────────────────────────────── */
  'resources.exam_tech.tm.bc_this': { en: `Time management`, ar: `إدارة الوقت` },
  'resources.exam_tech.tm.divide': { en: `How to divide your time`, ar: `كيف توزّع وقتك` },
  'resources.exam_tech.tm.eyebrow': { en: `Exam technique`, ar: `تقنيات الامتحان` },
  'resources.exam_tech.tm.golden': { en: `The golden rule`, ar: `القاعدة الذهبية` },
  'resources.exam_tech.tm.plan': {
    en: `Build your timing plan`,
    ar: `ابنِ خطّتك الزمنية`,
  },
  'resources.exam_tech.tm.practise': {
    en: `Practise with timed questions`,
    ar: `تمرّن بأسئلة موقّتة`,
  },
  'resources.exam_tech.tm.run_out': {
    en: `What to do if you run out of time`,
    ar: `وش تسوّي إذا خلص وقتك`,
  },
  'resources.exam_tech.tm.subtitle': {
    en: `Paper-by-paper timing breakdowns for AQA, Edexcel, Cambridge IGCSE and OCR - plus what to do if you run out of time.`,
    ar: `تقسيم التوقيت ورقة ورقة لـ AQA وEdexcel وCambridge IGCSE وOCR - بالإضافة لوش تسوّي إذا خلص وقتك.`,
  },
  'resources.exam_tech.tm.title': {
    en: `Time management in English exams`,
    ar: `إدارة الوقت في امتحانات الإنجليزي`,
  },

  /* ─── Exam technique hub - why it matters ──────────────────────── */
  'resources.exam_tech.why.body1': {
    en: `Every year, students who know their texts inside out still miss top grades - not because they lack knowledge, but because they run out of time, misread the question, or never learned how to structure an answer under pressure.`,
    ar: `كل سنة، طلاب يعرفون نصوصهم عن ظهر قلب وبرضو يفوتهم أعلى الدرجات - مو لأنهم ما يعرفون، بس لأن الوقت يخلص عليهم، أو يقرون السؤال غلط، أو ما تعلّموا كيف يركّبون إجابة تحت الضغط.`,
  },
  'resources.exam_tech.why.body2': {
    en: `Exam technique is the difference between knowing the answer and proving it on paper. These guides turn what you know into the marks you deserve.`,
    ar: `تقنية الامتحان هي الفرق بين إنك تعرف الإجابة وإنك تثبتها على الورقة. هالأدلة تحوّل اللي تعرفه إلى الدرجات اللي تستاهلها.`,
  },
  'resources.exam_tech.why.title': {
    en: `Why exam technique matters`,
    ar: `ليش تقنية الامتحان مهمّة`,
  },

  /* ─── Poetry hub - assessment objectives ───────────────────────── */
  'resources.poetry.ao.subtitle': {
    en: `Every poetry answer is marked against these assessment objectives. Knowing them tells you exactly what examiners reward.`,
    ar: `كل إجابة شعر تتصحّح حسب أهداف التقييم هذي. معرفتها تقول لك بالضبط وش يكافئ عليه المصحّحون.`,
  },
  'resources.poetry.ao.tip_prefix': { en: `Tip:`, ar: `نصيحة:` },
  'resources.poetry.ao.title': { en: `How poetry is assessed`, ar: `كيف يُقيَّم الشعر` },

  /* ─── Poetry hub - board badge prefix ──────────────────────────── */
  'resources.poetry.board_prefix': { en: `Tailored for`, ar: `مخصّص لـ` },

  /* ─── Poetry hub - card CTAs ───────────────────────────────────── */
  'resources.poetry.cta.start_learning': { en: `Start learning`, ar: `ابدأ التعلّم` },
  'resources.poetry.cta.view_analysis': { en: `View analysis`, ar: `شوف التحليل` },

  /* ─── Poetry hub - hero ────────────────────────────────────────── */
  'resources.poetry.hero.eyebrow': { en: `GCSE poetry`, ar: `شعر GCSE` },
  'resources.poetry.hero.no_anthology_prefix': {
    en: `Your exam board`,
    ar: `مجلس امتحانك`,
  },
  'resources.poetry.hero.no_anthology_suffix': {
    en: `does not set a fixed poetry anthology, so we focus on unseen poetry skills instead. The technique and comparison guides below still apply.`,
    ar: `ما يحدّد مجموعة شعرية ثابتة، عشان كذا نركّز على مهارات الشعر غير المنظور بدالها. أدلة التقنية والمقارنة تحت تنطبق برضو.`,
  },
  'resources.poetry.hero.subtitle': {
    en: `Clear, exam-focused analysis of every anthology poem, plus the techniques and comparison skills you need to score full marks.`,
    ar: `تحليل واضح وموجّه للامتحان لكل قصيدة في المجموعة، بالإضافة للتقنيات ومهارات المقارنة اللي تحتاجها عشان تاخذ الدرجة كاملة.`,
  },
  'resources.poetry.hero.title': { en: `Poetry made clear`, ar: `الشعر بصورة واضحة` },

  /* ─── Poetry hub - anthology card poem count suffix ────────────── */
  'resources.poetry.poems_suffix': { en: `poems`, ar: `قصيدة` },

  /* ─── Poetry hub - board sections ──────────────────────────────── */
  'resources.poetry.section.aqa.subtitle': {
    en: `In-depth analysis of all 15 poems in each AQA cluster, with key quotes, themes and comparison links.`,
    ar: `تحليل معمّق لكل الـ ١٥ قصيدة في كل مجموعة AQA، مع الاقتباسات الأساسية والثيمات وروابط المقارنة.`,
  },
  'resources.poetry.section.aqa.title': { en: `AQA poetry anthology`, ar: `مجموعة شعر AQA` },
  'resources.poetry.section.edex_igcse.body': {
    en: `Edexcel IGCSE poetry is covered in our dedicated anthology guides. Use the techniques and comparison resources below alongside them.`,
    ar: `شعر Edexcel IGCSE مغطّى في أدلة المجموعة المخصّصة عندنا. استخدم مصادر التقنيات والمقارنة تحت معاها.`,
  },
  'resources.poetry.section.edex_igcse.title': {
    en: `Edexcel IGCSE poetry`,
    ar: `شعر Edexcel IGCSE`,
  },
  'resources.poetry.section.edexcel.subtitle': {
    en: `Full analysis of the Edexcel Conflict and Time and Place collections, with quotes and comparison guidance.`,
    ar: `تحليل كامل لمجموعتي Conflict وTime and Place من Edexcel، مع الاقتباسات وإرشادات المقارنة.`,
  },
  'resources.poetry.section.edexcel.title': {
    en: `Edexcel poetry anthology`,
    ar: `مجموعة شعر Edexcel`,
  },
  'resources.poetry.section.eduqas.subtitle': {
    en: `Detailed analysis of all 18 poems in the WJEC Eduqas anthology, with themes and comparison links.`,
    ar: `تحليل مفصّل لكل الـ ١٨ قصيدة في مجموعة WJEC Eduqas، مع الثيمات وروابط المقارنة.`,
  },
  'resources.poetry.section.eduqas.title': {
    en: `Eduqas poetry anthology`,
    ar: `مجموعة شعر Eduqas`,
  },
  'resources.poetry.section.ocr.body': {
    en: `OCR poetry is covered in our dedicated anthology guides. Use the techniques and comparison resources below alongside them.`,
    ar: `شعر OCR مغطّى في أدلة المجموعة المخصّصة عندنا. استخدم مصادر التقنيات والمقارنة تحت معاها.`,
  },
  'resources.poetry.section.ocr.title': { en: `OCR poetry`, ar: `شعر OCR` },

  /* ─── Poetry hub - skills + tips + top 10 ──────────────────────── */
  'resources.poetry.skills.subtitle': {
    en: `Master the analytical skills that work across every poem - seen or unseen.`,
    ar: `أتقن المهارات التحليلية اللي تشتغل مع كل قصيدة - منظورة أو غير منظورة.`,
  },
  'resources.poetry.skills.title': { en: `Poetry skills guides`, ar: `أدلة مهارات الشعر` },
  'resources.poetry.tips.subtitle': {
    en: `Quick, practical advice to lift your poetry marks straight away.`,
    ar: `نصايح سريعة وعملية ترفع درجات الشعر عندك من طول.`,
  },
  'resources.poetry.tips.title': { en: `Quick poetry tips`, ar: `نصايح شعر سريعة` },
  'resources.poetry.top10.subtitle': {
    en: `The poems that come up most often in exams - start your revision here.`,
    ar: `القصايد اللي تجي أكثر شي في الامتحانات - ابدأ مراجعتك من هنا.`,
  },
  'resources.poetry.top10.title': {
    en: `Top 10 most tested poems`,
    ar: `أكثر ١٠ قصايد تجي في الامتحان`,
  },

  /* ─── Study tools - board badge prefix ─────────────────────────── */
  'resources.study_tools.board_prefix': { en: `Tailored for`, ar: `مخصّص لـ` },

  /* ─── Study tools - checklists page ────────────────────────────── */
  'resources.study_tools.checklists.all_covered': {
    en: `Every skill covered - you are exam-ready!`,
    ar: `كل المهارات مغطّاة - أنت جاهز للامتحان!`,
  },
  'resources.study_tools.checklists.check_all': { en: `Check all`, ar: `حدّد الكل` },
  'resources.study_tools.checklists.clear_all': { en: `Clear all`, ar: `امسح الكل` },
  'resources.study_tools.checklists.of': { en: `of`, ar: `من` },
  'resources.study_tools.checklists.skills_covered': { en: `skills covered`, ar: `مهارة مغطّاة` },
  'resources.study_tools.checklists.subtitle': {
    en: `Tick off every skill your exam board assesses. Your progress is saved automatically on this device.`,
    ar: `أشّر على كل مهارة يقيّمها مجلس امتحانك. تقدّمك ينحفظ تلقائياً على هذا الجهاز.`,
  },
  'resources.study_tools.checklists.tip.confident.body': {
    en: `Only tick a skill once you could explain or demonstrate it under exam conditions.`,
    ar: `لا تأشّر على مهارة إلا لمّا تقدر تشرحها أو تطبّقها تحت ظروف الامتحان.`,
  },
  'resources.study_tools.checklists.tip.confident.label': {
    en: `Be honest:`,
    ar: `كن صريح مع نفسك:`,
  },
  'resources.study_tools.checklists.tip.prioritise.body': {
    en: `Focus your revision on the unticked items first - they are where the marks are.`,
    ar: `ركّز مراجعتك على البنود غير المؤشّرة أول - هي مكان الدرجات.`,
  },
  'resources.study_tools.checklists.tip.prioritise.label': {
    en: `Prioritise:`,
    ar: `رتّب الأولويات:`,
  },
  'resources.study_tools.checklists.tip.revisit.body': {
    en: `Come back a week before the exam and re-check - confidence fades without practice.`,
    ar: `ارجع قبل الامتحان بأسبوع وراجع مرّة ثانية - الثقة تخفّ بدون تمرين.`,
  },
  'resources.study_tools.checklists.tip.revisit.label': {
    en: `Revisit:`,
    ar: `راجع من جديد:`,
  },
}
