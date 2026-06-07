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

export const IELTS_MODELANSWERS_DICTIONARY: Record<
  string,
  { en: string; ar?: string; es?: string }
> = {
  // ── Writing Task 1 · Academic ─────────────────────────────────────────────
  'ielts.modelans.wt1a.section': {
    en: 'Writing Task 1 · Academic',
    ar: 'الكتابة Task 1 · Academic',
    es: 'Writing Task 1 · Academic',
  },
  'ielts.modelans.wt1a.promptNote': {
    en: 'Self-authored data: National Gallery — 2.0m (2010), 3.2m (2015), 4.5m (2020). Science Centre — 1.5m (2010), 2.8m (2015), 3.0m (2020). History Museum — 3.5m (2010), 3.1m (2015), 2.4m (2020).',
    ar: 'بيانات من إعدادنا: National Gallery — 2.0m (2010)، 3.2m (2015)، 4.5m (2020). Science Centre — 1.5m (2010)، 2.8m (2015)، 3.0m (2020). History Museum — 3.5m (2010)، 3.1m (2015)، 2.4m (2020).',
    es: 'Datos de elaboración propia: National Gallery — 2.0m (2010), 3.2m (2015), 4.5m (2020). Science Centre — 1.5m (2010), 2.8m (2015), 3.0m (2020). History Museum — 3.5m (2010), 3.1m (2015), 2.4m (2020).',
  },
  'ielts.modelans.wt1a.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
    es: 'En desarrollo (≈ Band 6.5)',
  },
  'ielts.modelans.wt1a.s0.why.0': {
    en: 'It answers the task and includes the key figures accurately, which keeps the task-response mark solid.',
    ar: 'يجاوب على المطلوب ويحط الأرقام المهمة بدقة، وهذا يثبّت درجة الاستجابة للمهمة.',
    es: 'Responde a la tarea e incluye las cifras clave con precisión, lo que mantiene sólida la nota de respuesta a la tarea.',
  },
  'ielts.modelans.wt1a.s0.why.1': {
    en: 'There is an overview, but it arrives at the end rather than up front, and it could be sharper about the swap in ranking.',
    ar: 'فيه نظرة عامة، بس جت بالآخر بدل ما تكون بالبداية، وكان ممكن تكون أوضح عن تبدّل الترتيب.',
    es: 'Hay un resumen general, pero llega al final en lugar de al principio, y podría ser más preciso sobre el cambio en el orden.',
  },
  'ielts.modelans.wt1a.s0.why.2': {
    en: 'Linking is functional ("In 2010 / By 2020 / Overall") but a bit repetitive, which holds back the organisation mark.',
    ar: 'الربط شغّال ("In 2010 / By 2020 / Overall") بس مكرّر شوي، وهذا يأخّر درجة التنظيم.',
    es: 'Los conectores son funcionales ("In 2010 / By 2020 / Overall") pero algo repetitivos, lo que limita la nota de organización.',
  },
  'ielts.modelans.wt1a.s0.why.3': {
    en: 'To climb higher: lead with the overview, group the two rising museums together, and use more varied change language (e.g. "more than doubled", "a steady decline").',
    ar: 'عشان ترتقي أعلى: ابدأ بالنظرة العامة، وجمّع المتحفين اللي طالعين مع بعض، واستخدم لغة تغيّر أكثر تنوّع (مثل "more than doubled"، "a steady decline").',
    es: 'Para subir más: empieza con el resumen general, agrupa los dos museos en ascenso y usa un lenguaje de cambio más variado (p. ej. "more than doubled", "a steady decline").',
  },
  'ielts.modelans.wt1a.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
    es: 'Sólido (≈ Band 8)',
  },
  'ielts.modelans.wt1a.s1.why.0': {
    en: 'The overview is placed second, is fully separate, and captures the single most important idea — the reversal in ranking — which is exactly what lifts the task-response mark.',
    ar: 'النظرة العامة جت ثاني، ومنفصلة تمام، وتمسك الفكرة الأهم — انقلاب الترتيب — وهذا بالضبط اللي يرفع درجة الاستجابة للمهمة.',
    es: 'El resumen general aparece en segundo lugar, está totalmente separado y capta la idea más importante —la inversión del orden—, que es exactamente lo que eleva la nota de respuesta a la tarea.',
  },
  'ielts.modelans.wt1a.s1.why.1': {
    en: 'Data is selected and grouped (the two rising museums versus the declining one) rather than listed year by year.',
    ar: 'البيانات منتقاة ومجمّعة (المتحفين الطالعين مقابل المتحف النازل) بدل ما تنسرد سنة سنة.',
    es: 'Los datos se seleccionan y agrupan (los dos museos en ascenso frente al que desciende) en lugar de enumerarse año por año.',
  },
  'ielts.modelans.wt1a.s1.why.2': {
    en: 'Change is described with precise, varied phrasing ("more than doubled", "eased", "edging up only marginally", "the sharpest early surge").',
    ar: 'التغيّر موصوف بصياغة دقيقة ومتنوّعة ("more than doubled"، "eased"، "edging up only marginally"، "the sharpest early surge").',
    es: 'El cambio se describe con una formulación precisa y variada ("more than doubled", "eased", "edging up only marginally", "the sharpest early surge").',
  },
  'ielts.modelans.wt1a.s1.why.3': {
    en: 'Sentence structures vary naturally and the figures are woven in as support, not dumped, signalling strong control of grammar and vocabulary.',
    ar: 'تراكيب الجمل تتنوّع بشكل طبيعي والأرقام منسوجة كدعم مو مرمية رمي، وهذا يدل على تحكّم قوي بالقواعد والمفردات.',
    es: 'Las estructuras de las frases varían con naturalidad y las cifras se integran como apoyo, no se vuelcan sin más, lo que indica un dominio sólido de la gramática y el vocabulario.',
  },

  // ── Writing Task 2 · Essay ────────────────────────────────────────────────
  'ielts.modelans.wt2.section': {
    en: 'Writing Task 2 · Essay',
    ar: 'الكتابة Task 2 · مقال',
    es: 'Writing Task 2 · Ensayo',
  },
  'ielts.modelans.wt2.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
    es: 'En desarrollo (≈ Band 6.5)',
  },
  'ielts.modelans.wt2.s0.why.0': {
    en: 'Both views are covered and a clear opinion is given, so the essay does the job the question asks.',
    ar: 'الرأيين مغطّيين وفيه رأي واضح، فالمقال يسوّي اللي طالبه السؤال.',
    es: 'Se cubren ambas posturas y se da una opinión clara, así que el ensayo cumple lo que pide la pregunta.',
  },
  'ielts.modelans.wt2.s0.why.1': {
    en: 'Paragraphing is logical, but ideas are stated rather than fully developed — each point needs an example or a "so what" to feel convincing.',
    ar: 'تقسيم الفقرات منطقي، بس الأفكار مذكورة مو متطوّرة تمام — كل نقطة تحتاج مثال أو "وش يعني هذا" عشان تقنع.',
    es: 'La división en párrafos es lógica, pero las ideas se enuncian en lugar de desarrollarse del todo: cada punto necesita un ejemplo o un "y qué" para resultar convincente.',
  },
  'ielts.modelans.wt2.s0.why.2': {
    en: 'Vocabulary and grammar are accurate but fairly plain, with some repetition ("good", "think", "knowledge") that caps the range marks.',
    ar: 'المفردات والقواعد صحيحة بس بسيطة شوي، مع شوية تكرار ("good"، "think"، "knowledge") يحدّ من درجات التنوّع.',
    es: 'El vocabulario y la gramática son correctos pero bastante sencillos, con cierta repetición ("good", "think", "knowledge") que limita las notas de variedad.',
  },
  'ielts.modelans.wt2.s0.why.3': {
    en: 'To climb higher: extend each reason with a concrete example, vary the linking beyond "On one hand / On the other hand", and use more precise academic vocabulary.',
    ar: 'عشان ترتقي أعلى: وسّع كل سبب بمثال محسوس، ونوّع الربط أكثر من "On one hand / On the other hand"، واستخدم مفردات أكاديمية أدق.',
    es: 'Para subir más: amplía cada razón con un ejemplo concreto, varía los conectores más allá de "On one hand / On the other hand" y usa un vocabulario académico más preciso.',
  },
  'ielts.modelans.wt2.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
    es: 'Sólido (≈ Band 8)',
  },
  'ielts.modelans.wt2.s1.why.0': {
    en: 'The position is clear from the introduction and is sustained consistently — the writer argues the two aims are complementary, then proves it.',
    ar: 'الموقف واضح من المقدمة وثابت طول المقال — الكاتب يجادل إن الهدفين مكمّلين لبعض، وبعدها يثبتها.',
    es: 'La postura queda clara desde la introducción y se mantiene de forma coherente: el autor argumenta que los dos objetivos son complementarios y luego lo demuestra.',
  },
  'ielts.modelans.wt2.s1.why.1': {
    en: 'Each body paragraph develops its idea with reasoning and concrete fields/examples rather than bare assertion, which is what the top task-response bands reward.',
    ar: 'كل فقرة في المتن تطوّر فكرتها بتعليل ومجالات/أمثلة محسوسة بدل التأكيد المجرّد، وهذا اللي تكافئ عليه أعلى Band بالاستجابة للمهمة.',
    es: 'Cada párrafo del cuerpo desarrolla su idea con razonamiento y campos o ejemplos concretos en lugar de meras afirmaciones, que es lo que premian las bandas más altas de respuesta a la tarea.',
  },
  'ielts.modelans.wt2.s1.why.2': {
    en: 'Cohesion is natural and varied (no mechanical "Firstly/Secondly"); ideas connect through meaning, not just connector words.',
    ar: 'التماسك طبيعي ومتنوّع (بدون "Firstly/Secondly" آلي)؛ الأفكار تترابط بالمعنى مو بس بكلمات الربط.',
    es: 'La cohesión es natural y variada (sin un "Firstly/Secondly" mecánico); las ideas se conectan por el significado, no solo por palabras conectoras.',
  },
  'ielts.modelans.wt2.s1.why.3': {
    en: 'Vocabulary is precise and academic ("complementary", "vocational", "intellectual curiosity") and sentence forms are varied and almost entirely error-free.',
    ar: 'المفردات دقيقة وأكاديمية ("complementary"، "vocational"، "intellectual curiosity") وأشكال الجمل متنوّعة وتقريباً خالية من الأخطاء.',
    es: 'El vocabulario es preciso y académico ("complementary", "vocational", "intellectual curiosity") y las formas oracionales son variadas y casi totalmente libres de errores.',
  },

  // ── Speaking Part 1 ───────────────────────────────────────────────────────
  'ielts.modelans.sp1.section': {
    en: 'Speaking Part 1',
    ar: 'المحادثة Part 1',
    es: 'Speaking Part 1',
  },
  'ielts.modelans.sp1.promptNote': {
    en: 'Part 1 answers should be a couple of sentences — enough to give a reason and a small detail, without turning into a speech.',
    ar: 'أجوبة Part 1 لازم تكون جملتين ثلاث — تكفي تعطي سبب وتفصيلة صغيرة، بدون ما تتحوّل لخطبة.',
    es: 'Las respuestas de la Part 1 deben ser un par de frases: lo suficiente para dar una razón y un pequeño detalle, sin convertirse en un discurso.',
  },
  'ielts.modelans.sp1.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
    es: 'En desarrollo (≈ Band 6.5)',
  },
  'ielts.modelans.sp1.s0.why.0': {
    en: 'It answers directly and adds a reason and an example, so the response is relevant and complete enough for the question.',
    ar: 'يجاوب على طول ويضيف سبب ومثال، فالجواب مناسب ومكتمل بما يكفي للسؤال.',
    es: 'Responde directamente y añade una razón y un ejemplo, así que la respuesta es pertinente y lo bastante completa para la pregunta.',
  },
  'ielts.modelans.sp1.s0.why.1': {
    en: 'Speech would flow reasonably but the sentences are short and similar in shape, which limits the fluency and range marks.',
    ar: 'الكلام بينساب بشكل معقول بس الجمل قصيرة ومتشابهة بالشكل، وهذا يحدّ من درجات الطلاقة والتنوّع.',
    es: 'El discurso fluiría de forma razonable, pero las frases son cortas y de forma parecida, lo que limita las notas de fluidez y variedad.',
  },
  'ielts.modelans.sp1.s0.why.2': {
    en: 'Vocabulary is correct but everyday ("like", "good", "relax"); a few more natural collocations would help.',
    ar: 'المفردات صحيحة بس يومية ("like"، "good"، "relax")؛ شوية متلازمات طبيعية أكثر بتساعد.',
    es: 'El vocabulario es correcto pero cotidiano ("like", "good", "relax"); ayudarían algunas colocaciones más naturales.',
  },
  'ielts.modelans.sp1.s0.why.3': {
    en: 'To climb higher: link ideas more smoothly, add one vivid detail, and use a more idiomatic phrase or two.',
    ar: 'عشان ترتقي أعلى: اربط الأفكار بسلاسة أكثر، وزِد تفصيلة حيّة وحدة، واستخدم عبارة اصطلاحية أو ثنتين.',
    es: 'Para subir más: enlaza las ideas con más fluidez, añade un detalle vívido y usa una o dos expresiones más idiomáticas.',
  },
  'ielts.modelans.sp1.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
    es: 'Sólido (≈ Band 8)',
  },
  'ielts.modelans.sp1.s1.why.0': {
    en: 'The answer sounds spontaneous and unforced, with natural fillers ("actually", "a bit of") that mark genuine fluency rather than a memorised script.',
    ar: 'الجواب يطلع عفوي وغير متكلّف، مع حشوات طبيعية ("actually"، "a bit of") تدل على طلاقة حقيقية مو نص محفوظ.',
    es: 'La respuesta suena espontánea y sin esfuerzo, con muletillas naturales ("actually", "a bit of") que indican una fluidez genuina y no un guion memorizado.',
  },
  'ielts.modelans.sp1.s1.why.1': {
    en: 'Ideas connect smoothly and the speaker extends the answer without being asked, which the higher fluency bands reward.',
    ar: 'الأفكار تترابط بسلاسة والمتحدث يمدّ الجواب من دون ما ينطلب منه، وهذا تكافئ عليه أعلى Band بالطلاقة.',
    es: 'Las ideas se conectan con fluidez y el hablante amplía la respuesta sin que se lo pidan, algo que premian las bandas de fluidez más altas.',
  },
  'ielts.modelans.sp1.s1.why.2': {
    en: 'Language is varied and idiomatic ("stress-reliever", "from scratch", "I\'m no chef"), showing a wide, flexible vocabulary.',
    ar: 'اللغة متنوّعة واصطلاحية ("stress-reliever"، "from scratch"، "I\'m no chef")، تبيّن مفردات واسعة ومرنة.',
    es: 'El lenguaje es variado e idiomático ("stress-reliever", "from scratch", "I\'m no chef"), lo que muestra un vocabulario amplio y flexible.',
  },
  'ielts.modelans.sp1.s1.why.3': {
    en: 'Grammar is accurate across a mix of tenses and structures, with the contractions and rhythm of natural speech.',
    ar: 'القواعد دقيقة عبر مزيج من الأزمنة والتراكيب، مع الاختصارات وإيقاع الكلام الطبيعي.',
    es: 'La gramática es precisa en una mezcla de tiempos y estructuras, con las contracciones y el ritmo del habla natural.',
  },

  // ── Speaking Part 2 ───────────────────────────────────────────────────────
  'ielts.modelans.sp2.section': {
    en: 'Speaking Part 2',
    ar: 'المحادثة Part 2',
    es: 'Speaking Part 2',
  },
  'ielts.modelans.sp2.promptNote': {
    en: 'You have one minute to prepare and should speak for one to two minutes. The two samples below are written as continuous monologues.',
    ar: 'عندك دقيقة وحدة تحضّر فيها ولازم تتكلم من دقيقة إلى دقيقتين. النموذجين تحت مكتوبين كمونولوج متواصل.',
    es: 'Tienes un minuto para prepararte y debes hablar entre uno y dos minutos. Los dos modelos de abajo están escritos como monólogos continuos.',
  },
  'ielts.modelans.sp2.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
    es: 'En desarrollo (≈ Band 6.5)',
  },
  'ielts.modelans.sp2.s0.why.0': {
    en: 'All four bullet points are covered and the talk fills the time, so the task is fully addressed.',
    ar: 'النقاط الأربع كلها مغطّاة والكلام يملا الوقت، فالمهمة معالَجة بالكامل.',
    es: 'Se cubren los cuatro puntos y la intervención llena el tiempo, así que la tarea se aborda por completo.',
  },
  'ielts.modelans.sp2.s0.why.1': {
    en: 'It is organised in clear stages, but the connectors are simple and repeated ("So / Also / The reason"), keeping the organisation at a middle level.',
    ar: 'منظّم بمراحل واضحة، بس أدوات الربط بسيطة ومكرّرة ("So / Also / The reason")، وهذا يخلّي التنظيم بمستوى متوسط.',
    es: 'Está organizada en etapas claras, pero los conectores son sencillos y repetidos ("So / Also / The reason"), lo que mantiene la organización en un nivel medio.',
  },
  'ielts.modelans.sp2.s0.why.2': {
    en: 'Vocabulary is accurate but plain, and most sentences follow a similar pattern, which limits the range marks.',
    ar: 'المفردات صحيحة بس بسيطة، ومعظم الجمل على نمط متشابه، وهذا يحدّ من درجات التنوّع.',
    es: 'El vocabulario es correcto pero sencillo, y la mayoría de las frases siguen un patrón parecido, lo que limita las notas de variedad.',
  },
  'ielts.modelans.sp2.s0.why.3': {
    en: 'To climb higher: add a specific detail or short story, vary sentence openings, and use more precise or idiomatic vocabulary.',
    ar: 'عشان ترتقي أعلى: زِد تفصيلة محددة أو قصة قصيرة، ونوّع بدايات الجمل، واستخدم مفردات أدق أو اصطلاحية أكثر.',
    es: 'Para subir más: añade un detalle concreto o una breve anécdota, varía los inicios de frase y usa un vocabulario más preciso o idiomático.',
  },
  'ielts.modelans.sp2.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
    es: 'Sólido (≈ Band 8)',
  },
  'ielts.modelans.sp2.s1.why.0': {
    en: 'The long turn is delivered fluently and at length, covering every prompt while sounding like a real, unscripted explanation.',
    ar: 'الدور الطويل يُلقى بطلاقة وبإسهاب، يغطّي كل نقطة وفي نفس الوقت يبان شرح حقيقي مو محفوظ.',
    es: 'El turno largo se desarrolla con fluidez y extensión, cubriendo cada punto a la vez que suena como una explicación real y no ensayada.',
  },
  'ielts.modelans.sp2.s1.why.1': {
    en: 'Cohesion is sophisticated and natural ("As for how", "On top of that", "once the muscle memory kicks in"), well beyond mechanical linking.',
    ar: 'التماسك راقي وطبيعي ("As for how"، "On top of that"، "once the muscle memory kicks in")، أرقى بوايد من الربط الآلي.',
    es: 'La cohesión es sofisticada y natural ("As for how", "On top of that", "once the muscle memory kicks in"), muy por encima del enlace mecánico.',
  },
  'ielts.modelans.sp2.s1.why.2': {
    en: 'The language is rich and idiomatic ("never quite got round to", "a hybrid approach", "notoriously frustrating", "grounding"), showing a wide range used precisely.',
    ar: 'اللغة غنية واصطلاحية ("never quite got round to"، "a hybrid approach"، "notoriously frustrating"، "grounding")، تبيّن مدى واسع مستخدَم بدقة.',
    es: 'El lenguaje es rico e idiomático ("never quite got round to", "a hybrid approach", "notoriously frustrating", "grounding"), lo que muestra un amplio repertorio usado con precisión.',
  },
  'ielts.modelans.sp2.s1.why.3': {
    en: 'A variety of complex structures appears with very few errors, and the speaker shows nuance (distinguishing "play a song confidently" from "genuine fluency").',
    ar: 'يظهر تنوّع من التراكيب المعقّدة بأخطاء قليلة وايد، والمتحدث يبيّن دقة في الفروق (يفرّق بين "play a song confidently" و"genuine fluency").',
    es: 'Aparece una variedad de estructuras complejas con muy pocos errores, y el hablante muestra matices (distingue "play a song confidently" de "genuine fluency").',
  },

  // ── Speaking Part 3 ───────────────────────────────────────────────────────
  'ielts.modelans.sp3.section': {
    en: 'Speaking Part 3',
    ar: 'المحادثة Part 3',
    es: 'Speaking Part 3',
  },
  'ielts.modelans.sp3.promptNote': {
    en: 'Part 3 expects a fuller, more analytical answer — give a view, explain it, and consider more than one side.',
    ar: 'Part 3 يتوقّع جواب أوفى وأكثر تحليلاً — اعطِ رأي، واشرحه، وفكّر بأكثر من جهة.',
    es: 'La Part 3 espera una respuesta más completa y analítica: da un punto de vista, explícalo y considera más de una perspectiva.',
  },
  'ielts.modelans.sp3.s0.label': {
    en: 'Developing (≈ Band 6.5)',
    ar: 'في طور التطور (≈ Band 6.5)',
    es: 'En desarrollo (≈ Band 6.5)',
  },
  'ielts.modelans.sp3.s0.why.0': {
    en: 'It gives a clear view and looks at both sides, which is what a Part 3 answer needs.',
    ar: 'يعطي رأي واضح ويشوف الجهتين، وهذا اللي يحتاجه جواب Part 3.',
    es: 'Da un punto de vista claro y considera ambas perspectivas, que es lo que necesita una respuesta de la Part 3.',
  },
  'ielts.modelans.sp3.s0.why.1': {
    en: 'There is a relevant example, but the ideas stay fairly general and could be pushed further.',
    ar: 'فيه مثال مناسب، بس الأفكار تبقى عامة شوي وكان ممكن تتعمّق أكثر.',
    es: 'Hay un ejemplo pertinente, pero las ideas se quedan bastante generales y podrían profundizarse más.',
  },
  'ielts.modelans.sp3.s0.why.2': {
    en: 'Linking ("However / So overall") works but is simple, and the vocabulary, while accurate, is not very precise.',
    ar: 'الربط ("However / So overall") شغّال بس بسيط، والمفردات، مع إنها صحيحة، مو دقيقة وايد.',
    es: 'El enlace ("However / So overall") funciona pero es sencillo, y el vocabulario, aunque correcto, no es muy preciso.',
  },
  'ielts.modelans.sp3.s0.why.3': {
    en: 'To climb higher: develop each point with a clearer reason, hedge opinions more naturally, and use more academic vocabulary.',
    ar: 'عشان ترتقي أعلى: طوّر كل نقطة بسبب أوضح، ولطّف الآراء بشكل أطبع، واستخدم مفردات أكاديمية أكثر.',
    es: 'Para subir más: desarrolla cada punto con una razón más clara, matiza las opiniones con más naturalidad y usa más vocabulario académico.',
  },
  'ielts.modelans.sp3.s1.label': {
    en: 'Strong (≈ Band 8)',
    ar: 'قوي (≈ Band 8)',
    es: 'Sólido (≈ Band 8)',
  },
  'ielts.modelans.sp3.s1.why.0': {
    en: 'The answer is analytical and nuanced — it qualifies the question ("depends on the type of skill") instead of giving a flat yes or no.',
    ar: 'الجواب تحليلي ودقيق — يقيّد السؤال ("depends on the type of skill") بدل ما يعطي نعم أو لا مباشرة.',
    es: 'La respuesta es analítica y matizada: matiza la pregunta ("depends on the type of skill") en lugar de dar un sí o un no tajante.',
  },
  'ielts.modelans.sp3.s1.why.1': {
    en: 'Points are fully developed with reasoning and examples, and opinions are hedged naturally ("My instinct is", "I\'d be wary of overstating it").',
    ar: 'النقاط متطوّرة بالكامل بتعليل وأمثلة، والآراء ملطّفة بشكل طبيعي ("My instinct is"، "I\'d be wary of overstating it").',
    es: 'Los puntos se desarrollan por completo con razonamiento y ejemplos, y las opiniones se matizan con naturalidad ("My instinct is", "I\'d be wary of overstating it").',
  },
  'ielts.modelans.sp3.s1.why.2': {
    en: 'Cohesion is seamless and discursive ("That said", "So on balance", "if anything"), typical of a high-level speaker.',
    ar: 'التماسك سلس وحواري ("That said"، "So on balance"، "if anything")، نموذجي لمتحدث بمستوى عالي.',
    es: 'La cohesión es fluida y argumentativa ("That said", "So on balance", "if anything"), propia de un hablante de alto nivel.',
  },
  'ielts.modelans.sp3.s1.why.3': {
    en: 'Vocabulary is precise and varied and the grammar handles complex, abstract ideas with ease and accuracy.',
    ar: 'المفردات دقيقة ومتنوّعة والقواعد تتعامل مع الأفكار المعقّدة والمجرّدة بسهولة ودقة.',
    es: 'El vocabulario es preciso y variado, y la gramática maneja con soltura y precisión ideas complejas y abstractas.',
  },

  // ── Page chrome (ModelAnswersClient) ──────────────────────────────────────
  'ielts.modelans.back': {
    en: 'Back to IELTS',
    ar: 'رجوع إلى IELTS',
    es: 'Volver a IELTS',
  },
  'ielts.modelans.hero.badge': {
    en: 'Model answers',
    ar: 'نماذج إجابات',
    es: 'Modelos de respuesta',
  },
  'ielts.modelans.hero.title': {
    en: 'IELTS model answers, graded band by band',
    ar: 'نماذج إجابات IELTS، مقيّمة Band ورا Band',
    es: 'Modelos de respuesta de IELTS, calificados banda por banda',
  },
  'ielts.modelans.hero.subtitle': {
    en: '{count} self-authored sample answers for Writing and Speaking, each written to a target band — a developing answer (around 6.5) and a strong answer (around 8) for the same question — with a plain-English note on exactly what moves the answer up the scale.',
    ar: '{count} نموذج إجابة من إعدادنا للكتابة والمحادثة، كل وحدة مكتوبة لـ Band مستهدف — إجابة في طور التطور (حوالي 6.5) وإجابة قوية (حوالي 8) لنفس السؤال — مع ملاحظة بإنجليزي بسيط عن وش بالضبط يطلّع الإجابة فوق بالسلّم.',
    es: '{count} modelos de respuesta de elaboración propia para Writing y Speaking, cada uno escrito para una banda objetivo —una respuesta en desarrollo (en torno a 6.5) y una respuesta sólida (en torno a 8) para la misma pregunta— con una nota en inglés sencillo sobre qué hace exactamente que la respuesta suba en la escala.',
  },
  'ielts.modelans.hero.disclaimer': {
    en: 'These are original examples written by The English Hub. They are not taken from any real exam paper, and our scoring notes describe the marking criteria in our own words. Bands are illustrative, not a guarantee of a result.',
    ar: 'هذي أمثلة أصلية مكتوبة من The English Hub. مو مأخوذة من أي ورقة امتحان حقيقية، وملاحظات التقييم حقّتنا تصف معايير التصحيح بكلماتنا الخاصة. الـ Band توضيحية، مو ضمان لنتيجة.',
    es: 'Estos son ejemplos originales escritos por The English Hub. No están tomados de ningún examen real, y nuestras notas de calificación describen los criterios de corrección con nuestras propias palabras. Las bandas son orientativas, no una garantía de resultado.',
  },
  'ielts.modelans.filter.show': {
    en: 'Show',
    ar: 'اعرض',
    es: 'Mostrar',
  },
  'ielts.modelans.filter.all': {
    en: 'All',
    ar: 'الكل',
    es: 'Todos',
  },
  'ielts.modelans.filter.writing': {
    en: 'Writing',
    ar: 'الكتابة',
    es: 'Writing',
  },
  'ielts.modelans.filter.speaking': {
    en: 'Speaking',
    ar: 'المحادثة',
    es: 'Speaking',
  },
  'ielts.modelans.free_sample': {
    en: 'Free sample',
    ar: 'نموذج ببلاش',
    es: 'Muestra gratuita',
  },
  'ielts.modelans.why_heading': {
    en: 'Why this sits at this band',
    ar: 'ليش هذي عند هذا الـ Band',
    es: 'Por qué se sitúa en esta banda',
  },
  'ielts.modelans.practise_cta': {
    en: 'Practise this with AI feedback',
    ar: 'تمرّن على هذا مع تقييم AI',
    es: 'Practica esto con feedback de IA',
  },
  'ielts.modelans.upsell.title': {
    en: 'Unlock every model answer',
    ar: 'افتح كل نموذج إجابة',
    es: 'Desbloquea todos los modelos de respuesta',
  },
  'ielts.modelans.upsell.body': {
    en: 'The full library — and unlimited AI band feedback on your own Writing and Speaking — is part of the IELTS plan.',
    ar: 'المكتبة الكاملة — وتقييم Band بالـ AI بلا حدود على كتابتك ومحادثتك أنت — جزء من خطة IELTS.',
    es: 'La biblioteca completa —y feedback de banda ilimitado con IA sobre tu propio Writing y Speaking— forma parte del plan IELTS.',
  },
  'ielts.modelans.upsell.cta': {
    en: 'See IELTS plans',
    ar: 'شوف خطط IELTS',
    es: 'Ver planes de IELTS',
  },
  'ielts.modelans.locked.body': {
    en: 'The full sample answers and scoring notes are part of the IELTS plan.',
    ar: 'نماذج الإجابات الكاملة وملاحظات التقييم جزء من خطة IELTS.',
    es: 'Los modelos de respuesta completos y las notas de calificación forman parte del plan IELTS.',
  },
  'ielts.modelans.locked.unlock': {
    en: 'Unlock',
    ar: 'افتح',
    es: 'Desbloquear',
  },
}
