/**
 * The 60 KS3 English skill codes — Year 7 + Year 8 + Year 9 across
 * Reading / Writing / Language / Speaking & Listening.
 *
 * Reading progression at a glance:
 *   Y7 → "This shows…" (identify + simple inference)
 *   Y8 → "This suggests… because…" (explain + multiple inferences + comparison)
 *   Y9 → "This suggests… which reflects…" (analyse methods across texts,
 *         conceptual interpretations, evaluation)
 *
 * Writing progression:
 *   Y7 → control + basic structure
 *   Y8 → deliberate choices + clearer development
 *   Y9 → craft + conceptual depth
 *
 * Arabic translations are populated by the `ks3_translator` agent
 * via the round-trip QA pipeline. English-only entries here will
 * fall back gracefully in AR mode until the AR variant lands.
 */

import type { SkillCode } from './types'

export const SKILL_CODES: SkillCode[] = [
  // ─── YEAR 7 — Foundations ───────────────────────────────────────────
  // Reading (7R.1 – 7R.6)
  {
    id: '7R.1',
    year: 7,
    strand: 'reading',
    descriptor: {
      en: 'Identify language and structural features.',
      ar: 'يتعرّف على السمات اللغوية والبنيوية في النص.',
    },
    becomes: '8R.4',
  },
  {
    id: '7R.2',
    year: 7,
    strand: 'reading',
    descriptor: {
      en: 'Understand explicit and implicit meaning.',
      ar: 'يفهم المعنى الصريح والضمني للنص.',
    },
    becomes: '8R.1',
  },
  {
    id: '7R.3',
    year: 7,
    strand: 'reading',
    descriptor: {
      en: 'Select relevant quotations.',
      ar: 'يختار الاقتباسات ذات الصلة من النص.',
    },
    becomes: '8R.2',
  },
  {
    id: '7R.4',
    year: 7,
    strand: 'reading',
    descriptor: {
      en: 'Make simple inferences.',
      ar: 'يُجري استنتاجات بسيطة من النص.',
    },
    becomes: '8R.3',
  },
  {
    id: '7R.5',
    year: 7,
    strand: 'reading',
    descriptor: {
      en: 'Comment on effects using "This shows…".',
      ar: 'يُعلّق على التأثيرات باستخدام صيغة "يُظهر هذا أنّ…".',
    },
    becomes: '8R.5',
  },
  {
    id: '7R.6',
    year: 7,
    strand: 'reading',
    descriptor: {
      en: 'Make connections between texts (themes, ideas, methods).',
      ar: 'يربط بين النصوص من حيث الموضوعات والأفكار والأساليب.',
    },
    becomes: '8R.6',
  },

  // Writing (7W.1 – 7W.6)
  {
    id: '7W.1',
    year: 7,
    strand: 'writing',
    descriptor: {
      en: 'Organise ideas into clear paragraphs.',
      ar: 'يُنظّم الأفكار في فقرات واضحة.',
    },
    becomes: '8W.2',
  },
  {
    id: '7W.2',
    year: 7,
    strand: 'writing',
    descriptor: {
      en: 'Use basic punctuation mostly accurately.',
      ar: 'يستخدم علامات الترقيم الأساسية بدقة معظم الوقت.',
    },
    becomes: '8W.3',
  },
  {
    id: '7W.3',
    year: 7,
    strand: 'writing',
    descriptor: {
      en: 'Use simple and some varied sentence structures.',
      ar: 'يستخدم تراكيب جُمَل بسيطة ومتنوّعة في بعض الأحيان.',
    },
    becomes: '8W.5',
  },
  {
    id: '7W.4',
    year: 7,
    strand: 'writing',
    descriptor: { en: 'Develop ideas with some detail.', ar: 'يُطوّر الأفكار مع بعض التفاصيل.' },
    becomes: '8W.4',
  },
  {
    id: '7W.5',
    year: 7,
    strand: 'writing',
    descriptor: {
      en: 'Write simple narratives with structure, description and voice.',
      ar: 'يكتب سرديات بسيطة ذات بنية ووصف وصوت.',
    },
    becomes: '8W.7',
  },
  {
    id: '7W.6',
    year: 7,
    strand: 'writing',
    descriptor: {
      en: 'Write for different purposes (describe, narrate, explain).',
      ar: 'يكتب لأغراض متعدّدة (الوصف، السرد، الشرح).',
    },
    becomes: '8W.1',
  },

  // Language, grammar and control (7W.7 – 7W.9)
  {
    id: '7W.7',
    year: 7,
    strand: 'language',
    descriptor: {
      en: 'Recognise differences between spoken and written language.',
      ar: 'يميّز بين اللغة المنطوقة واللغة المكتوبة.',
    },
    becomes: '8W.8',
  },
  {
    id: '7W.8',
    year: 7,
    strand: 'language',
    descriptor: {
      en: 'Make simple edits to improve clarity, vocabulary and punctuation.',
      ar: 'يُجري تعديلات بسيطة لتحسين الوضوح والمفردات وعلامات الترقيم.',
    },
    becomes: '8W.9',
  },
  {
    id: '7W.9',
    year: 7,
    strand: 'language',
    descriptor: {
      en: 'Begin to adapt vocabulary and sentence structures for purpose and audience.',
      ar: 'يبدأ في تكييف المفردات وتراكيب الجمل بحسب الغرض والجمهور.',
    },
    becomes: '8W.10',
  },

  // Speaking & Listening (7SL.1 – 7SL.3)
  {
    id: '7SL.1',
    year: 7,
    strand: 'speaking',
    descriptor: { en: 'Listen and respond appropriately.', ar: 'يُصغي ويستجيب بطريقة مناسبة.' },
    becomes: '8SL.1',
  },
  {
    id: '7SL.2',
    year: 7,
    strand: 'speaking',
    descriptor: { en: 'Share ideas with some confidence.', ar: 'يُشارك أفكاره بشيءٍ من الثقة.' },
    becomes: '8SL.2',
  },
  {
    id: '7SL.3',
    year: 7,
    strand: 'speaking',
    descriptor: { en: 'Speak clearly in discussions.', ar: 'يتحدّث بوضوح في المناقشات.' },
    becomes: '8SL.3',
  },

  // ─── YEAR 8 — Development ───────────────────────────────────────────
  // Reading
  {
    id: '8R.1',
    year: 8,
    strand: 'reading',
    descriptor: {
      en: 'Understand explicit and implicit meanings in increasingly challenging texts.',
      ar: 'يفهم المعاني الصريحة والضمنية في نصوص متزايدة الصعوبة.',
    },
    becomes: '9R.1',
  },
  {
    id: '8R.2',
    year: 8,
    strand: 'reading',
    descriptor: {
      en: 'Select and embed relevant quotations to support ideas.',
      ar: 'يختار الاقتباسات ذات الصلة ويُدمجها لدعم الأفكار.',
    },
    becomes: '9R.2',
  },
  {
    id: '8R.3',
    year: 8,
    strand: 'reading',
    descriptor: {
      en: 'Make clear, developed inferences using evidence.',
      ar: 'يُجري استنتاجات واضحة ومُطوّرة مستنداً إلى الأدلة.',
    },
    becomes: '9R.3',
  },
  {
    id: '8R.4',
    year: 8,
    strand: 'reading',
    descriptor: {
      en: 'Explain how writers use language and structure to shape meaning and influence the reader.',
      ar: 'يشرح كيف يستخدم الكتّاب اللغة والبنية لتشكيل المعنى والتأثير على القارئ.',
    },
    becomes: '9R.4',
  },
  {
    id: '8R.5',
    year: 8,
    strand: 'reading',
    descriptor: {
      en: 'Explain effects using "This suggests… because…".',
      ar: 'يشرح التأثيرات باستخدام صيغة "يُوحي هذا بـ… لأنّ…".',
    },
    becomes: '9R.5',
  },
  {
    id: '8R.6',
    year: 8,
    strand: 'reading',
    descriptor: {
      en: 'Explain similarities and differences in how texts present ideas and viewpoints.',
      ar: 'يشرح أوجه التشابه والاختلاف في كيفية عرض النصوص للأفكار ووجهات النظر.',
    },
    becomes: '9R.6',
  },
  {
    id: '8R.7',
    year: 8,
    strand: 'reading',
    descriptor: {
      en: 'Use subject terminology with growing accuracy.',
      ar: 'يستخدم المصطلحات الأدبية بدقّة متنامية.',
    },
    becomes: '9R.7',
  },

  // Writing
  {
    id: '8W.1',
    year: 8,
    strand: 'writing',
    descriptor: {
      en: 'Write for a range of purposes (argue, describe, narrate, explain).',
      ar: 'يكتب لأغراض متعدّدة (الإقناع، الوصف، السرد، الشرح).',
    },
    becomes: '9W.7',
  },
  {
    id: '8W.2',
    year: 8,
    strand: 'writing',
    descriptor: {
      en: 'Structure writing into logically organised, coherent paragraphs.',
      ar: 'يُنظّم الكتابة في فقرات متماسكة ومنطقية.',
    },
    becomes: '9W.1',
  },
  {
    id: '8W.3',
    year: 8,
    strand: 'writing',
    descriptor: {
      en: 'Use accurate punctuation and spelling.',
      ar: 'يستخدم علامات الترقيم والإملاء بدقّة.',
    },
    becomes: '9W.2',
  },
  {
    id: '8W.4',
    year: 8,
    strand: 'writing',
    descriptor: {
      en: 'Develop ideas with clear explanation and supporting detail.',
      ar: 'يُطوّر الأفكار بشرح واضح وتفاصيل داعمة.',
    },
    becomes: '9W.3',
  },
  {
    id: '8W.5',
    year: 8,
    strand: 'writing',
    descriptor: {
      en: 'Use a range of sentence structures deliberately to shape meaning and effect.',
      ar: 'يستخدم تراكيب جُمَل متنوّعة بقصد لتشكيل المعنى والتأثير.',
    },
    becomes: '9W.4',
  },
  {
    id: '8W.6',
    year: 8,
    strand: 'writing',
    descriptor: {
      en: 'Write from different perspectives to shape meaning and viewpoint.',
      ar: 'يكتب من وجهات نظر مختلفة لتشكيل المعنى ووجهة النظر.',
    },
    becomes: '9W.5',
  },
  {
    id: '8W.7',
    year: 8,
    strand: 'writing',
    descriptor: {
      en: 'Use structure, imagery and tone deliberately to engage the reader.',
      ar: 'يستخدم البنية والصور والنبرة بقصد لإشراك القارئ.',
    },
    becomes: '9W.6',
  },

  // Language, grammar and control
  {
    id: '8W.8',
    year: 8,
    strand: 'language',
    descriptor: {
      en: 'Use Standard English appropriately and distinguish between formal and informal register.',
      ar: 'يستخدم الإنجليزية الفصحى بشكل مناسب ويميّز بين الأسلوب الرسمي وغير الرسمي.',
    },
    becomes: '9W.8',
  },
  {
    id: '8W.9',
    year: 8,
    strand: 'language',
    descriptor: {
      en: 'Edit and improve writing for clarity, accuracy and effectiveness.',
      ar: 'يُحرّر الكتابة ويُحسّنها من حيث الوضوح والدقّة والفعالية.',
    },
    becomes: '9W.9',
  },
  {
    id: '8W.10',
    year: 8,
    strand: 'language',
    descriptor: {
      en: 'Adapt vocabulary and sentence structures, drawing on reading, to suit purpose and audience.',
      ar: 'يُكيّف المفردات وتراكيب الجمل، مستفيداً من قراءاته، بحسب الغرض والجمهور.',
    },
    becomes: '9W.10',
  },

  // Speaking & Listening
  {
    id: '8SL.1',
    year: 8,
    strand: 'speaking',
    descriptor: {
      en: 'Participate in discussions, building on others’ ideas.',
      ar: 'يُشارك في المناقشات ويبني على أفكار الآخرين.',
    },
    becomes: '9SL.1',
  },
  {
    id: '8SL.2',
    year: 8,
    strand: 'speaking',
    descriptor: {
      en: 'Speak clearly and confidently in a range of contexts.',
      ar: 'يتحدّث بوضوح وثقة في سياقات متعدّدة.',
    },
    becomes: '9SL.2',
  },
  {
    id: '8SL.3',
    year: 8,
    strand: 'speaking',
    descriptor: {
      en: 'Present ideas in a structured and organised way.',
      ar: 'يعرض الأفكار بأسلوب مُنظّم وواضح.',
    },
    becomes: '9SL.3',
  },

  // ─── YEAR 9 — Mastery ───────────────────────────────────────────────
  // Reading
  {
    id: '9R.1',
    year: 9,
    strand: 'reading',
    descriptor: {
      en: 'Interpret explicit and implicit meanings in complex texts.',
      ar: 'يُفسّر المعاني الصريحة والضمنية في نصوص مُركّبة.',
    },
  },
  {
    id: '9R.2',
    year: 9,
    strand: 'reading',
    descriptor: {
      en: 'Select, embed and integrate quotations fluently.',
      ar: 'يختار الاقتباسات ويُدمجها ويوظّفها بسلاسة.',
    },
  },
  {
    id: '9R.3',
    year: 9,
    strand: 'reading',
    descriptor: {
      en: 'Analyse developed inferences, exploring multiple interpretations.',
      ar: 'يُحلّل استنتاجات مُطوّرة، مع استكشاف تفسيرات متعدّدة.',
    },
  },
  {
    id: '9R.4',
    year: 9,
    strand: 'reading',
    descriptor: {
      en: 'Analyse how writers use language, structure and form to shape meaning.',
      ar: 'يُحلّل كيف يستخدم الكتّاب اللغة والبنية والشكل لتشكيل المعنى.',
    },
  },
  {
    id: '9R.5',
    year: 9,
    strand: 'reading',
    descriptor: {
      en: 'Evaluate the effects of writer’s choices on the reader.',
      ar: 'يُقيّم تأثير اختيارات الكاتب على القارئ.',
    },
  },
  {
    id: '9R.6',
    year: 9,
    strand: 'reading',
    descriptor: {
      en: 'Analyse and evaluate similarities and differences across texts.',
      ar: 'يُحلّل ويُقيّم أوجه التشابه والاختلاف بين النصوص.',
    },
  },
  {
    id: '9R.7',
    year: 9,
    strand: 'reading',
    descriptor: {
      en: 'Use precise subject terminology confidently and accurately.',
      ar: 'يستخدم المصطلحات الأدبية بدقّة وثقة.',
    },
  },

  // Writing
  {
    id: '9W.1',
    year: 9,
    strand: 'writing',
    descriptor: {
      en: 'Structure writing cohesively and logically across whole texts.',
      ar: 'يُنظّم الكتابة بشكل متماسك ومنطقي على امتداد النصوص الكاملة.',
    },
  },
  {
    id: '9W.2',
    year: 9,
    strand: 'writing',
    descriptor: {
      en: 'Use a wide range of punctuation accurately and deliberately.',
      ar: 'يستخدم مجموعة واسعة من علامات الترقيم بدقّة وقصد.',
    },
  },
  {
    id: '9W.3',
    year: 9,
    strand: 'writing',
    descriptor: {
      en: 'Develop ideas in depth with clear, critical explanation.',
      ar: 'يُطوّر الأفكار بعمق مع شرح نقدي واضح.',
    },
  },
  {
    id: '9W.4',
    year: 9,
    strand: 'writing',
    descriptor: {
      en: 'Use varied sentence structures deliberately for effect.',
      ar: 'يستخدم تراكيب جُمَل متنوّعة بقصد لتحقيق التأثير.',
    },
  },
  {
    id: '9W.5',
    year: 9,
    strand: 'writing',
    descriptor: {
      en: 'Manipulate perspective, viewpoint and voice confidently.',
      ar: 'يتحكّم في المنظور ووجهة النظر والصوت السردي بثقة.',
    },
  },
  {
    id: '9W.6',
    year: 9,
    strand: 'writing',
    descriptor: {
      en: 'Craft structure, tone and imagery to shape reader response.',
      ar: 'يصوغ البنية والنبرة والصور لتشكيل استجابة القارئ.',
    },
  },
  {
    id: '9W.7',
    year: 9,
    strand: 'writing',
    descriptor: {
      en: 'Write with sustained control for a range of purposes and audiences.',
      ar: 'يكتب بتحكّم مستدام لأغراض وجماهير متعدّدة.',
    },
  },

  // Language, grammar and control
  {
    id: '9W.8',
    year: 9,
    strand: 'language',
    descriptor: {
      en: 'Control register and adapt style for different audiences and purposes.',
      ar: 'يتحكّم في الأسلوب اللغوي ويُكيّفه بحسب الجمهور والغرض.',
    },
  },
  {
    id: '9W.9',
    year: 9,
    strand: 'language',
    descriptor: {
      en: 'Edit, refine and improve writing independently and critically.',
      ar: 'يُحرّر الكتابة ويُحسّنها بشكل مستقل ونقدي.',
    },
  },
  {
    id: '9W.10',
    year: 9,
    strand: 'language',
    descriptor: {
      en: 'Manipulate vocabulary and syntax deliberately for effect.',
      ar: 'يتحكّم في المفردات والتراكيب اللغوية بقصد لتحقيق التأثير.',
    },
  },

  // Speaking & Listening
  {
    id: '9SL.1',
    year: 9,
    strand: 'speaking',
    descriptor: {
      en: 'Contribute thoughtfully to discussions, developing and challenging ideas.',
      ar: 'يُسهم في المناقشات بتفكير عميق ويُطوّر الأفكار ويتحدّاها.',
    },
  },
  {
    id: '9SL.2',
    year: 9,
    strand: 'speaking',
    descriptor: {
      en: 'Speak clearly, confidently and fluently in a range of contexts.',
      ar: 'يتحدّث بوضوح وثقة وطلاقة في سياقات متعدّدة.',
    },
  },
  {
    id: '9SL.3',
    year: 9,
    strand: 'speaking',
    descriptor: {
      en: 'Present structured, analytical ideas using appropriate register.',
      ar: 'يعرض أفكاراً مُنظّمة وتحليلية بأسلوب لُغوي مناسب.',
    },
  },
]
