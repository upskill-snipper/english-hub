/**
 * KS3 marking rubrics — Y7, Y8, Y9 × 4 strands × 4 levels = 48 cells.
 *
 * Used by:
 *   • /ks3/rubrics (interactive table)
 *   • Week pages (when a teacher wants to mark an Independent Outcome)
 *   • EssayFeedbackInline (when marking against a KS3 task)
 *
 * Levels are deliberately neutral / non-punitive: "Below target" not
 * "Failing", "Working towards" not "Weak", etc. — translated phrasings
 * follow Gulf school-report conventions where "دون المستوى المطلوب"
 * is the standard polite term.
 *
 * Skill-code references on each cell let us cross-link rubric →
 * skills.ts → lesson plans.
 */

import type { RubricCell } from './types'

export const RUBRICS: RubricCell[] = [
  // ─── YEAR 7 RUBRICS ─────────────────────────────────────────────────
  // Reading
  {
    year: 7,
    strand: 'reading',
    level: 'below',
    skillCodes: ['7R.1'],
    descriptor: {
      en: 'Identifies simple ideas. Limited evidence. Basic or unclear comments.',
      ar: 'يحدّد أفكاراً بسيطة فقط. الأدلة المُستخدمة محدودة. التعليقات أساسية أو غير واضحة.',
    },
  },
  {
    year: 7,
    strand: 'reading',
    level: 'working',
    skillCodes: ['7R.1', '7R.2', '7R.3'],
    descriptor: {
      en: 'Shows some understanding. Uses some evidence. Begins to comment on language.',
      ar: 'يُظهر فهماً جزئياً. يستخدم بعض الأدلة. يبدأ في التعليق على اللغة.',
    },
  },
  {
    year: 7,
    strand: 'reading',
    level: 'expected',
    skillCodes: ['7R.1', '7R.2', '7R.4', '7R.5'],
    descriptor: {
      en: 'Explains ideas clearly using relevant evidence. Makes supported inferences. Explains effects.',
      ar: 'يشرح الأفكار بوضوح مستنداً إلى أدلة مناسبة. يُجري استنتاجات مدعومة بالنص. يشرح التأثيرات.',
    },
  },
  {
    year: 7,
    strand: 'reading',
    level: 'depth',
    skillCodes: ['7R.2', '7R.5', '7R.6'],
    descriptor: {
      en: 'Interprets meaning confidently. Selects precise evidence. Explains how and why methods shape meaning. Makes connections.',
      ar: 'يُفسّر المعنى بثقة. يختار أدلة دقيقة. يشرح كيف ولماذا تشكّل الأساليب المعنى. يربط بين الأفكار.',
    },
  },

  // Writing
  {
    year: 7,
    strand: 'writing',
    level: 'below',
    skillCodes: ['7W.1'],
    descriptor: {
      en: 'Writes simple ideas with limited structure. Little control.',
      ar: 'يكتب أفكاراً بسيطة مع بنية محدودة. التحكم اللغوي ضعيف.',
    },
  },
  {
    year: 7,
    strand: 'writing',
    level: 'working',
    skillCodes: ['7W.1', '7W.2', '7W.3'],
    descriptor: {
      en: 'Some structure and paragraphing. Ideas partly developed. Some control.',
      ar: 'بعض البنية والتقسيم إلى فقرات. الأفكار مُطوّرة جزئياً. تحكّم جزئي.',
    },
  },
  {
    year: 7,
    strand: 'writing',
    level: 'expected',
    skillCodes: ['7W.1', '7W.2', '7W.5', '7W.6'],
    descriptor: {
      en: 'Clear paragraphs. Developed ideas. Writes for purpose with some control of viewpoint.',
      ar: 'فقرات واضحة. أفكار مُطوّرة. يكتب بهدف محدّد مع تحكّم جزئي في وجهة النظر.',
    },
  },
  {
    year: 7,
    strand: 'writing',
    level: 'depth',
    skillCodes: ['7W.3', '7W.5', '7W.6', '7W.9'],
    descriptor: {
      en: 'Well-crafted, controlled writing. Shapes meaning through vocabulary, tone, and viewpoint.',
      ar: 'كتابة مُصاغة بإحكام وتحكّم. يُشكّل المعنى من خلال المفردات والنبرة ووجهة النظر.',
    },
  },

  // Language and control
  {
    year: 7,
    strand: 'language',
    level: 'below',
    skillCodes: ['7W.4'],
    descriptor: {
      en: 'Frequent errors. Limited control of punctuation and spelling.',
      ar: 'أخطاء متكرّرة. تحكّم محدود في علامات الترقيم والإملاء.',
    },
  },
  {
    year: 7,
    strand: 'language',
    level: 'working',
    skillCodes: ['7W.3', '7W.4'],
    descriptor: {
      en: 'Some accuracy. Attempts control of sentences and punctuation.',
      ar: 'بعض الدقّة. يحاول التحكّم في الجمل وعلامات الترقيم.',
    },
  },
  {
    year: 7,
    strand: 'language',
    level: 'expected',
    skillCodes: ['7W.3', '7W.4', '7W.7'],
    descriptor: {
      en: 'Mostly accurate punctuation and spelling. Some deliberate choices.',
      ar: 'علامات الترقيم والإملاء صحيحة في الغالب. بعض الاختيارات المقصودة.',
    },
  },
  {
    year: 7,
    strand: 'language',
    level: 'depth',
    skillCodes: ['7W.4', '7W.7', '7W.9'],
    descriptor: {
      en: 'Accurate and controlled. Edits effectively. Adapts language for purpose and audience.',
      ar: 'دقيق ومتحكّم. يُحرّر النص بفاعلية. يُكيّف اللغة بحسب الغرض والجمهور.',
    },
  },

  // Speaking & Listening
  {
    year: 7,
    strand: 'speaking',
    level: 'below',
    skillCodes: ['7SL.1'],
    descriptor: {
      en: 'Shares simple ideas with limited clarity.',
      ar: 'يُشارك أفكاراً بسيطة مع وضوح محدود.',
    },
  },
  {
    year: 7,
    strand: 'speaking',
    level: 'working',
    skillCodes: ['7SL.1', '7SL.2'],
    descriptor: {
      en: 'Responds to others. Some clarity in ideas.',
      ar: 'يستجيب للآخرين. بعض الوضوح في الأفكار.',
    },
  },
  {
    year: 7,
    strand: 'speaking',
    level: 'expected',
    skillCodes: ['7SL.1', '7SL.2', '7SL.3'],
    descriptor: {
      en: 'Clear ideas. Uses evidence. Responds appropriately.',
      ar: 'أفكار واضحة. يستخدم الأدلة. يستجيب بطريقة مناسبة.',
    },
  },
  {
    year: 7,
    strand: 'speaking',
    level: 'depth',
    skillCodes: ['7SL.2', '7SL.3'],
    descriptor: {
      en: 'Justifies ideas with evidence. Builds and challenges ideas. Structured, confident delivery.',
      ar: 'يُبرّر الأفكار بالأدلة. يبني على الأفكار ويتحدّاها. عرض مُنظّم وواثق.',
    },
  },

  // ─── YEAR 8 RUBRICS ─────────────────────────────────────────────────
  // Reading
  {
    year: 8,
    strand: 'reading',
    level: 'below',
    skillCodes: ['8R.1'],
    descriptor: {
      en: 'Identifies basic meaning. Quotations are loose or paraphrased.',
      ar: 'يحدّد المعنى الأساسي فقط. الاقتباسات غير دقيقة أو مُعاد صياغتها.',
    },
  },
  {
    year: 8,
    strand: 'reading',
    level: 'working',
    skillCodes: ['8R.1', '8R.2', '8R.3'],
    descriptor: {
      en: 'Explains meaning. Uses embedded quotations sometimes. Single inferences with brief explanation.',
      ar: 'يشرح المعنى. يُدمج الاقتباسات أحياناً. استنتاجات مفردة مع شرح مختصر.',
    },
  },
  {
    year: 8,
    strand: 'reading',
    level: 'expected',
    skillCodes: ['8R.2', '8R.4', '8R.5', '8R.6'],
    descriptor: {
      en: 'Embeds quotations confidently. Explains effects with "this suggests… because…". Compares texts.',
      ar: 'يُدمج الاقتباسات بثقة. يشرح التأثيرات بصيغة "يُوحي هذا بـ… لأنّ…". يقارن بين النصوص.',
    },
  },
  {
    year: 8,
    strand: 'reading',
    level: 'depth',
    skillCodes: ['8R.4', '8R.5', '8R.6', '8R.7'],
    descriptor: {
      en: 'Develops multiple interpretations. Uses precise terminology. Sustained comparison across texts.',
      ar: 'يُطوّر تفسيرات متعدّدة. يستخدم المصطلحات بدقّة. مقارنة مُستدامة بين النصوص.',
    },
  },

  // Writing
  {
    year: 8,
    strand: 'writing',
    level: 'below',
    skillCodes: ['8W.2'],
    descriptor: {
      en: 'Some structure but ideas under-developed.',
      ar: 'بعض البنية لكن الأفكار غير مُطوّرة.',
    },
  },
  {
    year: 8,
    strand: 'writing',
    level: 'working',
    skillCodes: ['8W.1', '8W.2', '8W.4'],
    descriptor: {
      en: 'Coherent paragraphs. Ideas developed with detail. Beginning to make deliberate choices.',
      ar: 'فقرات متماسكة. الأفكار مُطوّرة بالتفصيل. يبدأ في اتخاذ اختيارات مقصودة.',
    },
  },
  {
    year: 8,
    strand: 'writing',
    level: 'expected',
    skillCodes: ['8W.2', '8W.4', '8W.5', '8W.7'],
    descriptor: {
      en: 'Logically organised writing. Deliberate sentence and structural choices. Tone matches purpose.',
      ar: 'كتابة مُنظّمة منطقياً. اختيارات مقصودة للجُمَل والبنية. النبرة تتوافق مع الغرض.',
    },
  },
  {
    year: 8,
    strand: 'writing',
    level: 'depth',
    skillCodes: ['8W.5', '8W.6', '8W.7'],
    descriptor: {
      en: 'Sustained craft. Imagery, perspective and structure shape reader experience deliberately.',
      ar: 'صياغة مُستدامة. الصور والمنظور والبنية تُشكّل تجربة القارئ بقصد.',
    },
  },

  // Language
  {
    year: 8,
    strand: 'language',
    level: 'below',
    skillCodes: ['8W.3'],
    descriptor: {
      en: 'Errors disrupt meaning. Inconsistent register.',
      ar: 'الأخطاء تعطّل المعنى. الأسلوب غير مُتّسق.',
    },
  },
  {
    year: 8,
    strand: 'language',
    level: 'working',
    skillCodes: ['8W.3', '8W.8'],
    descriptor: {
      en: 'Mostly accurate punctuation. Distinguishes formal from informal in places.',
      ar: 'علامات الترقيم صحيحة في الغالب. يميّز بين الرسمي وغير الرسمي في بعض المواضع.',
    },
  },
  {
    year: 8,
    strand: 'language',
    level: 'expected',
    skillCodes: ['8W.3', '8W.8', '8W.9', '8W.10'],
    descriptor: {
      en: 'Accurate punctuation and spelling. Adapts vocabulary and syntax for audience.',
      ar: 'علامات الترقيم والإملاء دقيقة. يُكيّف المفردات والتراكيب بحسب الجمهور.',
    },
  },
  {
    year: 8,
    strand: 'language',
    level: 'depth',
    skillCodes: ['8W.8', '8W.9', '8W.10'],
    descriptor: {
      en: 'Secure register control. Self-edits to refine effectiveness. Wide vocabulary deployed precisely.',
      ar: 'تحكّم آمن في الأسلوب. يُحرّر النص بنفسه لتعزيز فاعليته. مفردات واسعة تُوظَّف بدقّة.',
    },
  },

  // Speaking & Listening
  {
    year: 8,
    strand: 'speaking',
    level: 'below',
    skillCodes: ['8SL.2'],
    descriptor: {
      en: 'Speaks briefly. Limited contribution to discussion.',
      ar: 'يتحدّث بإيجاز. مساهمته في النقاش محدودة.',
    },
  },
  {
    year: 8,
    strand: 'speaking',
    level: 'working',
    skillCodes: ['8SL.1', '8SL.2'],
    descriptor: {
      en: 'Speaks clearly. Some building on others’ contributions.',
      ar: 'يتحدّث بوضوح. يبني جزئياً على مساهمات الآخرين.',
    },
  },
  {
    year: 8,
    strand: 'speaking',
    level: 'expected',
    skillCodes: ['8SL.1', '8SL.2', '8SL.3'],
    descriptor: {
      en: 'Confident speaker. Builds on others. Presents ideas in structured way.',
      ar: 'متحدّث واثق. يبني على آراء الآخرين. يعرض الأفكار بطريقة مُنظّمة.',
    },
  },
  {
    year: 8,
    strand: 'speaking',
    level: 'depth',
    skillCodes: ['8SL.2', '8SL.3'],
    descriptor: {
      en: 'Sustained, organised analytical talk. Develops and challenges peers with evidence.',
      ar: 'حديث تحليلي مُستدام ومُنظّم. يُطوّر آراء أقرانه ويتحدّاها بالأدلة.',
    },
  },

  // ─── YEAR 9 RUBRICS ─────────────────────────────────────────────────
  // Reading
  {
    year: 9,
    strand: 'reading',
    level: 'below',
    skillCodes: ['9R.1'],
    descriptor: {
      en: 'Some understanding. Single, surface-level inferences.',
      ar: 'فهم جزئي. استنتاجات سطحية مفردة.',
    },
  },
  {
    year: 9,
    strand: 'reading',
    level: 'working',
    skillCodes: ['9R.1', '9R.2', '9R.3'],
    descriptor: {
      en: 'Multiple inferences attempted. Quotations mostly embedded. One method analysed at a time.',
      ar: 'محاولة استنتاجات متعدّدة. الاقتباسات مُدمَجة في الغالب. يُحلّل أسلوباً واحداً في كل مرة.',
    },
  },
  {
    year: 9,
    strand: 'reading',
    level: 'expected',
    skillCodes: ['9R.2', '9R.3', '9R.4', '9R.5', '9R.7'],
    descriptor: {
      en: 'Sustained conceptual argument. Fluent integrated quotations. Multiple methods analysed together. Evaluative voice.',
      ar: 'حجّة مفاهيمية مُستدامة. اقتباسات مُدمَجة بطلاقة. تحليل أساليب متعدّدة معاً. صوت تقييمي.',
    },
  },
  {
    year: 9,
    strand: 'reading',
    level: 'depth',
    skillCodes: ['9R.3', '9R.5', '9R.6', '9R.7'],
    descriptor: {
      en: 'Original conceptual reading. Judicious selection. Comparative or contextual framing. Sophisticated terminology.',
      ar: 'قراءة مفاهيمية أصيلة. اختيار حصيف. تأطير مقارن أو سياقي. مصطلحات متطوّرة.',
    },
  },

  // Writing
  {
    year: 9,
    strand: 'writing',
    level: 'below',
    skillCodes: ['9W.1'],
    descriptor: {
      en: 'Paragraphs present but not cohesive across whole text.',
      ar: 'الفقرات موجودة لكن غير متماسكة على امتداد النص الكامل.',
    },
  },
  {
    year: 9,
    strand: 'writing',
    level: 'working',
    skillCodes: ['9W.1', '9W.3', '9W.4'],
    descriptor: {
      en: 'Cohesive structure emerging. Ideas developed critically. Sentence variation present.',
      ar: 'بنية متماسكة بدأت تتشكّل. الأفكار مُطوّرة بشكل نقدي. تنوّع في الجُمَل.',
    },
  },
  {
    year: 9,
    strand: 'writing',
    level: 'expected',
    skillCodes: ['9W.1', '9W.3', '9W.4', '9W.6', '9W.7'],
    descriptor: {
      en: 'Cohesive whole-text structure. Critical depth. Crafted tone and imagery. Sustained control.',
      ar: 'بنية متماسكة على امتداد النص. عمق نقدي. نبرة وصور مصوغة بعناية. تحكّم مُستدام.',
    },
  },
  {
    year: 9,
    strand: 'writing',
    level: 'depth',
    skillCodes: ['9W.5', '9W.6', '9W.7'],
    descriptor: {
      en: 'Confident manipulation of voice and structure. Tone and imagery deliberately shape reader response.',
      ar: 'تحكّم واثق في الصوت والبنية. النبرة والصور تُشكّل استجابة القارئ بقصد.',
    },
  },

  // Language
  {
    year: 9,
    strand: 'language',
    level: 'below',
    skillCodes: ['9W.2'],
    descriptor: {
      en: 'Errors limit precision. Register slips.',
      ar: 'الأخطاء تحدّ من الدقّة. الأسلوب يتذبذب.',
    },
  },
  {
    year: 9,
    strand: 'language',
    level: 'working',
    skillCodes: ['9W.2', '9W.8'],
    descriptor: {
      en: 'Wide punctuation used accurately. Register controlled.',
      ar: 'استخدام دقيق لمجموعة واسعة من علامات الترقيم. تحكّم في الأسلوب.',
    },
  },
  {
    year: 9,
    strand: 'language',
    level: 'expected',
    skillCodes: ['9W.2', '9W.8', '9W.9', '9W.10'],
    descriptor: {
      en: 'Punctuation used deliberately for effect. Vocabulary precise. Edits critically.',
      ar: 'علامات الترقيم تُستخدم بقصد لتحقيق التأثير. مفردات دقيقة. تحرير نقدي.',
    },
  },
  {
    year: 9,
    strand: 'language',
    level: 'depth',
    skillCodes: ['9W.9', '9W.10'],
    descriptor: {
      en: 'Sophisticated syntactic manipulation. Independent critical editing. Deliberate stylistic choices.',
      ar: 'تحكّم نحوي متطوّر. تحرير نقدي مستقل. اختيارات أسلوبية مقصودة.',
    },
  },

  // Speaking & Listening
  {
    year: 9,
    strand: 'speaking',
    level: 'below',
    skillCodes: ['9SL.2'],
    descriptor: {
      en: 'Speaks audibly. Contributions descriptive rather than analytical.',
      ar: 'يتحدّث بصوت مسموع. مساهماته وصفية وليست تحليلية.',
    },
  },
  {
    year: 9,
    strand: 'speaking',
    level: 'working',
    skillCodes: ['9SL.1', '9SL.2'],
    descriptor: {
      en: 'Develops own ideas with evidence. Contributes to discussion.',
      ar: 'يُطوّر أفكاره مدعومة بالأدلة. يُسهم في المناقشة.',
    },
  },
  {
    year: 9,
    strand: 'speaking',
    level: 'expected',
    skillCodes: ['9SL.1', '9SL.2', '9SL.3'],
    descriptor: {
      en: 'Develops AND challenges peer ideas. Fluent across contexts. Structured analytical register.',
      ar: 'يُطوّر آراء أقرانه ويتحدّاها. طلاقة في السياقات المتعدّدة. أسلوب تحليلي مُنظّم.',
    },
  },
  {
    year: 9,
    strand: 'speaking',
    level: 'depth',
    skillCodes: ['9SL.1', '9SL.3'],
    descriptor: {
      en: 'Sustained sophisticated debate. Critical challenge with precise terminology. Presents ideas memorably.',
      ar: 'نقاش متطوّر ومُستدام. تحدٍّ نقدي بمصطلحات دقيقة. عرض أفكار يصعب نسيانه.',
    },
  },
]
