'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
const poemData: PoemData = {
  title: "Love's Philosophy",
  poet: 'Percy Bysshe Shelley',
  lines: [
    {
      text: 'The fountains mingle with the river',
      annotations: [
        {
          type: 'Natural imagery',
          note: 'Shelley opens with an image of water flowing together naturally. Fountains and rivers merging is presented as inevitable -- a law of nature.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the rivers with the ocean,',
      annotations: [
        {
          type: 'Scale',
          note: 'The imagery expands from small (fountains) to vast (ocean), building a persuasive argument that union is universal at every scale.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The winds of heaven mix for ever',
      annotations: [
        {
          type: 'Personification',
          note: '"Winds of heaven" elevates the natural world to something divine. "Mix for ever" implies eternal, sacred union.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'With a sweet emotion;',
      annotations: [
        {
          type: 'Personification',
          note: 'Nature is given human feeling -- "sweet emotion". Shelley blurs the boundary between the natural and the emotional to suggest love is as natural as wind.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Nothing in the world is single;',
      annotations: [
        {
          type: 'Key argument',
          note: "A bold, universal statement -- Shelley's central thesis. Everything in nature exists in pairs, making solitude unnatural.",
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'All things by a law divine',
      annotations: [
        {
          type: 'Religious language',
          note: '"Law divine" gives his argument spiritual authority. Union is not just natural but ordained by God -- a powerful persuasive tactic.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'In one spirit meet and mingle.',
      annotations: [
        {
          type: 'Sibilance',
          note: 'The soft "s" and "m" sounds in "spirit", "meet", "mingle" create a gentle, seductive musicality that mirrors the merging he describes.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Why not I with thine?--',
      annotations: [
        {
          type: 'Rhetorical question',
          note: "The stanza's climax. After building evidence from nature, Shelley challenges the beloved: if everything else unites, why should they be different? The dash suggests an expectant pause.",
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    {
      text: 'See the mountains kiss high heaven',
      annotations: [
        {
          type: 'Personification',
          note: '"Kiss" personifies the mountains, using romantic and physical language. The image of earth meeting sky suggests the union of different elements.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'And the waves clasp one another;',
      annotations: [
        {
          type: 'Personification',
          note: '"Clasp" suggests an embrace -- waves holding each other. Shelley continues to project human affection onto the natural world.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'No sister-flower would be forgiven',
      annotations: [
        {
          type: 'Anthropomorphism',
          note: 'Even flowers would be morally wrong ("not forgiven") to reject their counterpart. Shelley frames rejection of love as a kind of sin.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'If it disdained its brother;',
      annotations: [
        {
          type: 'Family metaphor',
          note: '"Sister" and "brother" create familial bonds in nature, suggesting that all living things are connected and obligated to love.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And the sunlight clasps the earth',
      annotations: [
        {
          type: 'Imagery',
          note: 'The grandest image yet -- sunlight embracing the entire earth. The scale of the examples has grown through the poem, building persuasive momentum.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the moonbeams kiss the sea:',
      annotations: [
        {
          type: 'Parallelism',
          note: 'The parallel structure ("And the... clasps/kiss the...") creates a rhythmic momentum that feels irresistible, mirroring Shelley\'s persuasive intent.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'What is all this sweet work worth',
      annotations: [
        {
          type: 'Rhetorical question',
          note: 'Shelley questions the value of all natural beauty if human love is denied. "Sweet work" frames nature as God\'s craftsmanship.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'If thou kiss not me?',
      annotations: [
        {
          type: 'Climax',
          note: 'The poem\'s final, direct plea. "Thou" addresses the beloved intimately. The monosyllabic simplicity of "kiss not me" contrasts with the elaborate natural imagery, making the request feel raw and honest.',
          color: '#ef4444',
        },
      ],
    },
  ],
  context: `<p><strong>Percy Bysshe Shelley (1792-1822)</strong> was a key figure of the <strong>Romantic movement</strong>, which celebrated nature, emotion, and individual expression. This poem was likely written around <strong>1819</strong>.</p>
<p>The poem functions as a <strong>persuasion poem</strong> (or "seduction poem") -- Shelley builds an elaborate argument from nature to convince his beloved to return his affection. This tradition dates back to the <strong>carpe diem</strong> poetry of the Renaissance.</p>
<p>Shelley was known for his radical views on love and marriage. He believed love should be <strong>free and unconstrained</strong> by social conventions. The poem reflects his philosophical belief that love is a <strong>natural force</strong> that humans should not resist.</p>
<p>The poem also engages with Romantic ideas about the <strong>interconnectedness of all nature</strong> -- a philosophy that saw humans as part of the natural world rather than separate from it.</p>`,
  contextAr: `<p><strong>Percy Bysshe Shelley (1792-1822)</strong> شخصية محورية في <strong>الحركة الرومانسية</strong>، اللي احتفت بالطبيعة والعاطفة والتعبير الفردي. القصيدة كتبت على الأرجح حوالين <strong>1819</strong>.</p>
<p>القصيدة تشتغل كـ<strong>قصيدة إقناع</strong> (أو "قصيدة إغواء") - Shelley يبني حجّة مفصّلة من الطبيعة عشان يقنع محبوبته (أنثى) ترد محبّته. هالتقليد يرجع لشعر <strong>carpe diem</strong> اللي كان رايج في عصر النهضة.</p>
<p>Shelley كان معروف بآرائه الراديكالية في الحب والزواج. كان يؤمن إن الحب لازم يكون <strong>حر وغير مقيّد</strong> بالقيود الاجتماعية. القصيدة تعكس قناعته الفلسفية بإن الحب <strong>قوّة طبيعية</strong> ما ينفع البشر يقاومونها.</p>
<p>القصيدة تتفاعل كمان مع أفكار الرومانسية حول <strong>ترابط الطبيعة كلّها</strong> - فلسفة شافت البشر جزء من العالم الطبيعي، مو منفصلين عنه.</p>`,
  summary: `The speaker uses examples from nature to argue that everything in the world exists in union -- rivers merge with oceans, winds blend together, mountains touch the sky. He claims this is "a law divine", making union a spiritual imperative.\n\nHaving built his case, he asks a simple rhetorical question: if everything in nature comes together, why should the beloved refuse him?\n\nThe second stanza escalates the argument with grander imagery -- sunlight clasping the earth, moonbeams kissing the sea -- before ending with a direct, almost pleading question: what is the point of all this natural beauty if the beloved will not love him?\n\nThe poem is essentially an elaborate argument for love, using nature as evidence. Whether it is charming or manipulative depends on interpretation.`,
  summaryAr: `المتكلّم (ذكر) يستخدم أمثلة من الطبيعة عشان يستدل إن كل شي في الدنيا موجود في اتحاد - الأنهار تنصب في المحيطات، الرياح تختلط ببعض، الجبال تلامس السماء. ويدّعي إن هذا "law divine"، فيخلّي الاتحاد ضرورة روحانية.\n\nبعد ما يبني حجّته، يسأل سؤال بلاغي بسيط: إذا كل شي في الطبيعة يجي مع بعضه، ليش المحبوبة (أنثى) ترفضه؟\n\nالمقطع الثاني يصعّد الحجّة بصور أعظم - الشمس تحضن الأرض، أشعّة القمر تبوس البحر - قبل ما يختم بسؤال مباشر وقريب من التوسّل: ايش فايدة كل هالجمال الطبيعي إذا المحبوبة (أنثى) ما تحبّه؟\n\nالقصيدة في جوهرها حجّة مفصّلة من أجل الحب، تستخدم الطبيعة كدليل. تكون ساحرة أو تكون متلاعبة - هذا يعتمد على تفسير القارئ.`,
  formAndStructure: `Form: Two stanzas of eight lines each, creating a balanced, symmetrical structure that mirrors the poem's argument about natural pairing.\n\nRhyme scheme: ABABCDCD in both stanzas -- the regular, predictable pattern creates a sense of natural order and inevitability that supports Shelley's argument.\n\nRhetorical questions: Each stanza builds to a climactic rhetorical question (lines 8 and 16-17). The structure is persuasive -- evidence followed by conclusion.\n\nEscalation: The imagery grows in scale from fountains to rivers to ocean, then from mountains to sunlight to moonbeams, building persuasive momentum.\n\nList structure: The accumulation of natural examples creates a sense of overwhelming evidence, making the argument feel irresistible.\n\nEnding: The final line is notably shorter and simpler than the rest, creating bathos -- the grand natural argument resolves into a simple, human plea.`,
  formAndStructureAr: `Form: مقطعين كل واحد منهم ثمانية أبيات، فيخلق بنية متوازنة ومتناسقة، تحاكي حجّة القصيدة عن التزاوج الطبيعي.\n\nRhyme scheme: ABABCDCD في كلا المقطعين - النمط المنتظم اللي تقدر تتوقّعه يخلق إحساس بالنظام الطبيعي والحتمية، اللي يدعم حجّة Shelley.\n\nالأسئلة البلاغية: كل مقطع يبني وصولاً إلى سؤال بلاغي على ذروة (البيت 8 والبيتين 16-17). البنية إقناعية - أدلّة ثم استنتاج.\n\nالتصاعد: الصور تكبر في الحجم: من النوافير إلى الأنهار إلى المحيط، ثم من الجبال إلى ضوء الشمس إلى أشعّة القمر، وهذا يبني زخم إقناعي.\n\nبنية القائمة: تراكم الأمثلة الطبيعية يخلق إحساس بأدلّة كاسحة، فتطلع الحجّة كأنها ما يقدر يقاومها أحد.\n\nالخاتمة: البيت الأخير أقصر وأبسط من البقيّة، وهذا يخلق bathos - الحجّة الطبيعية الفخمة تنحل إلى توسّل إنساني بسيط.`,
  keyQuotes: [
    {
      quote: 'The fountains mingle with the river',
      analysis:
        'Opens the poem with natural imagery of union. "Mingle" suggests a gentle, willing merging -- not forced but natural and inevitable.',
      themes: ['Nature', 'Union', 'Harmony'],
      analysisAr:
        'يفتتح القصيدة بصورة طبيعية من صور الاتحاد. كلمة "mingle" توحي بدمج لطيف وراضي - مو إجبار، بل شي طبيعي وحتمي.',
      themesAr: ['الطبيعة', 'الاتحاد', 'الانسجام'],
    },
    {
      quote: 'Nothing in the world is single',
      analysis:
        "A bold universal claim that forms the poem's thesis. Shelley states it as absolute fact, leaving no room for counter-argument. Isolation is presented as unnatural.",
      themes: ['Argument', 'Natural law', 'Loneliness'],
      analysisAr:
        'ادعاء عام جريء يشكّل فرضيّة القصيدة. Shelley يقولها كأنها حقيقة مطلقة، بدون ما يخلّي مجال لأي حجّة مضادّة. العزلة تتقدّم على إنها شي غير طبيعي.',
      themesAr: ['الحجّة', 'القانون الطبيعي', 'الوحدة'],
    },
    {
      quote: 'All things by a law divine',
      analysis:
        '"Law divine" elevates the argument from natural observation to spiritual imperative. Rejecting love becomes not just unnatural but ungodly.',
      themes: ['Religion', 'Natural law', 'Persuasion'],
      analysisAr:
        'عبارة "law divine" ترفع الحجّة من ملاحظة طبيعية إلى وجوب روحاني. رفض الحب يصير مو بس ضد الطبيعة، بل ضد الله نفسه.',
      themesAr: ['الدين', 'القانون الطبيعي', 'الإقناع'],
    },
    {
      quote: 'Why not I with thine?',
      analysis:
        "The stanza's climactic question. After extensive evidence from nature, the simple personal plea feels both logical and emotionally vulnerable.",
      themes: ['Desire', 'Persuasion', 'Vulnerability'],
      analysisAr:
        'سؤال ذروة المقطع. بعد ما يقدّم أدلّة وافرة من الطبيعة، يجي التوسّل الشخصي البسيط ويبيّن إنه منطقي وضعيف عاطفياً في نفس الوقت.',
      themesAr: ['الرغبة', 'الإقناع', 'الانكشاف العاطفي'],
    },
    {
      quote: 'See the mountains kiss high heaven',
      analysis:
        '"Kiss" personifies mountains with romantic action. "See" is an imperative, directing the beloved to observe the evidence. The imagery is grand and romantic.',
      themes: ['Personification', 'Romance', 'Nature'],
      analysisAr:
        'كلمة "kiss" تشخّص الجبال بفعل رومانسي. وكلمة "See" فعل أمر، توجّه المحبوبة (أنثى) إنها تلاحظ الأدلّة. الصورة فخمة ورومانسية.',
      themesAr: ['التشخيص', 'الرومانسية', 'الطبيعة'],
    },
    {
      quote: 'No sister-flower would be forgiven',
      analysis:
        'Shelley frames the rejection of love as morally wrong -- even sinful. The familial language ("sister", "brother") creates obligation.',
      themes: ['Morality', 'Guilt', 'Persuasion'],
      analysisAr:
        'Shelley يقدّم رفض الحب على إنه خطأ أخلاقي - بل إثم. اللغة العائليّة ("sister", "brother") تخلق التزام بين الطرفين.',
      themesAr: ['الأخلاق', 'الذنب', 'الإقناع'],
    },
    {
      quote: 'And the sunlight clasps the earth',
      analysis:
        'The grandest image -- light itself embracing the planet. "Clasps" implies a firm, warm hold, suggesting love is all-encompassing and unavoidable.',
      themes: ['Nature', 'Scale', 'Union'],
      analysisAr:
        'الصورة الأعظم - النور نفسه يحضن الكوكب. كلمة "clasps" توحي بقبضة دافئة قويّة، فتشير إن الحب يشمل كل شي وما ينفع تتجنّبه.',
      themesAr: ['الطبيعة', 'السعة', 'الاتحاد'],
    },
    {
      quote: 'If thou kiss not me?',
      analysis:
        'The final plea is devastatingly simple after the elaborate natural imagery. The monosyllabic words strip away all pretence, revealing raw human desire beneath the philosophical argument.',
      themes: ['Desire', 'Vulnerability', 'Simplicity'],
      analysisAr:
        'التوسّل الأخير بسيط بشكل موجع بعد كل الصور الطبيعية المفصّلة. الكلمات أحادية المقطع تنزع كل تكلّف، وتكشف الرغبة الإنسانية الخام تحت الحجّة الفلسفية.',
      themesAr: ['الرغبة', 'الانكشاف العاطفي', 'البساطة'],
    },
  ],
  languageDevices: [
    {
      device: 'Personification',
      example: 'the mountains kiss high heaven',
      effect:
        'By giving human romantic actions to nature, Shelley argues that love is woven into the fabric of the natural world, making human love equally inevitable.',
      lineRef: 9,
      effectAr:
        'بإعطاء الطبيعة أفعال إنسانية رومانسية، Shelley يستدل إن الحب منسوج في نسيج العالم الطبيعي، فيخلّي الحب البشري كذلك حتمي.',
    },
    {
      device: 'Rhetorical question',
      example: 'Why not I with thine?',
      effect:
        'The question is designed to be unanswerable. After presenting overwhelming natural evidence, Shelley implies the only logical response is to accept his love.',
      lineRef: 7,
      effectAr:
        'السؤال مصمّم بحيث ما له جواب. بعد ما يقدّم Shelley أدلّة طبيعية كاسحة، يلمّح إن الردّ المنطقي الوحيد هو قبول حبّه.',
    },
    {
      device: 'Sibilance',
      example: 'In one spirit meet and mingle',
      effect:
        'The soft "s" and "m" sounds create a seductive, flowing musicality that enacts the gentle merging Shelley describes, appealing to the senses.',
      lineRef: 6,
      effectAr:
        'أصوات الـ"s" والـ"m" الناعمة تخلق موسيقى منسابة ومغرية، تجسّد الاندماج اللطيف اللي Shelley يوصفه، وتخاطب الحواس.',
    },
    {
      device: 'Semantic field of union',
      example: 'mingle, mix, meet, clasp, kiss',
      effect:
        'A sustained vocabulary of coming-together runs through the poem, creating a cumulative sense of inevitability around the theme of union.',
      lineRef: 0,
      effectAr:
        'مفردات ثابتة من معاني الالتقاء تمشي طول القصيدة، فتخلق إحساس متراكم بحتميّة موضوع الاتحاد.',
    },
    {
      device: 'Parallelism',
      example: 'And the sunlight clasps... / And the moonbeams kiss...',
      effect:
        'The repeated grammatical structure creates rhythmic momentum, making each new example feel like further irrefutable proof in a logical argument.',
      lineRef: 13,
      effectAr:
        'البنية النحويّة المتكرّرة تخلق زخم إيقاعي، وتخلّي كل مثال جديد يحسّ كأنه برهان إضافي ما ينفع تردّه في حجّة منطقيّة.',
    },
    {
      device: 'Religious language',
      example: 'a law divine',
      effect:
        "By invoking divine authority, Shelley elevates his argument beyond personal desire to a cosmic principle. Rejecting love becomes an act against God's design.",
      lineRef: 5,
      effectAr:
        'باستحضار السلطة الإلهيّة، Shelley يرفع حجّته من رغبة شخصيّة إلى مبدأ كوني. رفض الحب يصير عمل ضد تصميم الله.',
    },
    {
      device: 'Bathos / tonal shift',
      example: 'If thou kiss not me?',
      effect:
        'The grand, cosmic imagery suddenly collapses into a simple personal plea. This shift reveals vulnerability beneath the confident rhetoric and grounds the poem in genuine human feeling.',
      lineRef: 16,
      effectAr:
        'الصور الكونيّة الفخمة فجأة تنهار إلى توسّل شخصي بسيط. هالنقلة تكشف الانكشاف العاطفي تحت الخطاب الواثق، وتربط القصيدة بإحساس إنساني صادق.',
    },
    {
      device: 'List / accumulation',
      example: 'fountains... rivers... ocean... winds',
      effect:
        "The piling up of natural examples creates a sense of overwhelming evidence, making Shelley's argument feel logically irresistible.",
      lineRef: 0,
      effectAr:
        'تكديس الأمثلة الطبيعيّة يخلق إحساس بأدلّة كاسحة، فتطلع حجّة Shelley منطقياً ما يقدر تردّها.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'lp-1',
    question: "What is the speaker trying to do in Love's Philosophy?",
    type: 'multiple-choice',
    options: [
      'Describe a beautiful landscape',
      'Persuade someone to love him by arguing that everything in nature is united',
      'Write a scientific essay about nature',
      'End a relationship',
    ],
    correctIndex: 1,
    explanation:
      "Shelley uses examples from nature (rivers, winds, mountains) to argue that everything naturally joins together - so why won't his beloved do the same? It is a persuasive love poem.",
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'lp-2',
    question: 'What technique dominates the poem?',
    type: 'multiple-choice',
    options: [
      'Dramatic monologue',
      'Extended use of natural imagery and personification to argue for love',
      'War imagery',
      'Stream of consciousness',
    ],
    correctIndex: 1,
    explanation:
      'Shelley personifies nature throughout - rivers "mingle", mountains "clasp", the moon "kisses" the sea. Each example serves as evidence in his argument that love is natural.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'lp-3',
    question: 'What does "And the sunlight clasps the earth" suggest?',
    type: 'multiple-choice',
    options: [
      'The sun is too hot',
      'Even cosmic forces embrace each other - making human love seem natural and universal',
      'The earth is cold',
      'It describes a sunset',
    ],
    correctIndex: 1,
    explanation:
      '"Clasps" personifies sunlight as embracing the earth. Shelley elevates his argument to a cosmic scale - if the sun and earth unite, human love should follow.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'lp-4',
    question: "What is the effect of the rhetorical questions at each stanza's end?",
    type: 'multiple-choice',
    options: [
      'They show the speaker is confused',
      'They challenge the beloved - if nature is united, why are they apart?',
      'They are philosophical digressions',
      'They show the speaker has given up',
    ],
    correctIndex: 1,
    explanation:
      "The rhetorical questions function as the climax of each stanza - after presenting evidence from nature, the speaker challenges the beloved directly: why won't you yield?",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'lp-5',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'Two stanzas with a regular ABAB rhyme scheme',
      'A sonnet',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      "The poem has two eight-line stanzas with ABAB rhyme. The controlled, persuasive structure mirrors the speaker's logical argument.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'lp-6',
    question: 'Who wrote it and when?',
    type: 'multiple-choice',
    options: [
      '1850 by Tennyson',
      '1819 by Percy Bysshe Shelley, a major Romantic poet',
      '1914 by Owen',
      '1960 by Hughes',
    ],
    correctIndex: 1,
    explanation:
      'Written in 1819 by Shelley, one of the major Romantic poets. The Romantics celebrated nature, emotion, and passionate love.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'lp-7',
    question: 'How does the final line of each stanza function?',
    type: 'multiple-choice',
    options: [
      'It summarises the stanza',
      "It undercuts nature imagery with personal frustration - revealing the argument's failure",
      'It celebrates success in love',
      'It describes more nature',
    ],
    correctIndex: 1,
    explanation:
      'Each stanza ends with a direct appeal. After grand natural imagery, the final lines reveal frustration - nature may be united, but the beloved is not persuaded.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'lp-8',
    question: 'What does the personification of nature suggest about love?',
    type: 'multiple-choice',
    options: [
      'Love is artificial',
      'Love is a natural, universal force - as inevitable as rivers flowing to the sea',
      'Love is only for poets',
      'Love is dangerous',
    ],
    correctIndex: 1,
    explanation:
      'By showing nature in constant union, Shelley argues love is not a human invention but a universal law of nature. Resisting love is resisting nature itself.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'lp-9',
    question: "Is the speaker's argument ultimately successful?",
    type: 'multiple-choice',
    options: [
      'Yes - the beloved agrees',
      'No - despite all his evidence, the final lines reveal frustrated, unrequited desire',
      'The poem is purely descriptive',
      'Partially successful',
    ],
    correctIndex: 1,
    explanation:
      'Despite the elaborate argument, the poem ends with frustrated questions. The beloved has not been persuaded, creating tension between confident logic and emotional failure.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'lp-10',
    question: "Which poem offers the strongest contrast to Love's Philosophy?",
    type: 'multiple-choice',
    options: [
      'Singh Song!',
      'Neutral Tones by Thomas Hardy',
      'Climbing My Grandfather',
      'Walking Away',
    ],
    correctIndex: 1,
    explanation:
      "Neutral Tones offers a polar opposite - Hardy's bleak proof of love's failure vs Shelley's optimistic argument for love. Both use nature imagery but to opposite effects.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      "Love's Philosophy explores desire, natural imagery as evidence for love, persuasion, and the frustration of unrequited love.",
    keyPoints: [
      'Love is natural and universal - everything in nature is united',
      'Persuasion - the speaker builds a logical argument from nature',
      'Frustration - despite his argument, the beloved is not persuaded',
      'Romanticism - nature, emotion, and passion are celebrated',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Shelley uses personification of nature, rhetorical questions, and cumulative listing to build his persuasive argument.',
    keyPoints: [
      '"The fountains mingle with the river" - natural union as evidence',
      '"The sunlight clasps the earth" - cosmic personification',
      'Rhetorical questions challenge the beloved directly',
      'Listing of natural pairs builds overwhelming evidence',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Two regular stanzas with ABAB rhyme. The controlled form mirrors the argument, while frustrated final lines reveal its failure.',
    keyPoints: [
      'Two parallel stanzas build the argument',
      'ABAB rhyme scheme - orderly, persuasive form',
      'Final lines shift from nature to personal appeal',
      'Regular metre creates a song-like, persuasive quality',
    ],
  },
]

const ESSAY_PROMPTS = [
  "How does Shelley present desire in Love's Philosophy?",
  "Compare how love is presented in Love's Philosophy and one other poem from the anthology.",
  'How does Shelley use natural imagery to build his argument for love?',
]

const COMPARE_POEMS = [
  {
    title: 'When We Two Parted',
    href: '/revision/poetry/love-and-relationships/when-we-two-parted',
    reason:
      "Contrasting Romantic perspectives -- Shelley celebrates love's potential; Byron mourns its death.",
  },
  {
    title: 'Sonnet 29',
    href: '/revision/poetry/love-and-relationships/sonnet-29',
    reason:
      'Both use natural imagery to express desire, but EBB writes from a position of reciprocated love.',
  },
  {
    title: 'Neutral Tones',
    href: '/revision/poetry/love-and-relationships/neutral-tones',
    reason:
      "Hardy's bleak rejection of love provides a stark contrast to Shelley's optimistic persuasion.",
  },
]

export default function LovesPhilosophyPage() {
  return (
    <div className="space-y-6">
      <CourseJsonLd
        name="Love's Philosophy by Percy Bysshe Shelley - Analysis & Annotations"
        description="Line-by-line analysis of Love's Philosophy with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          {
            name: 'Love and Relationships',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships',
          },
          {
            name: "Love's Philosophy",
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/loves-philosophy',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-heading-lg font-heading text-foreground">Love&apos;s Philosophy</h1>
          <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20">
            Love &amp; Relationships
          </Badge>
          <Badge variant="outline">AQA Anthology</Badge>
        </div>
      </div>

      <StudyTools
        textName="Love's Philosophy"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Love's Philosophy"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={poemData} />

      {/* Compare With Section */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-heading-sm font-heading text-foreground mb-3">Compare With</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {COMPARE_POEMS.map((p) => (
            <div key={p.title} className="rounded-lg border border-border/60 bg-muted/30 p-3.5">
              <p className="text-sm font-medium text-foreground mb-1">{p.title}</p>
              <p className="text-xs text-muted-foreground mb-2.5">{p.reason}</p>
              <Button variant="outline" size="xs" render={<Link href={p.href} />}>
                Study poem
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
