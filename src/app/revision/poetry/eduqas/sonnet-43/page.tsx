'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
const sonnet43: PoemData = {
  title: 'Sonnet 43',
  poet: 'Elizabeth Barrett Browning',
  lines: [
    {
      text: 'How do I love thee? Let me count the ways.',
      annotations: [
        {
          type: 'Rhetorical question',
          note: "The famous opening line is a rhetorical question - the speaker doesn't need an answer, only a list. The directness of the question contrasts with the abstract concept of love.",
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'One of the most famous opening lines in English poetry. The simplicity is deceptive - the rest of the poem is a passionate, mystical attempt to "count" something uncountable.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I love thee to the depth and breadth and height',
      annotations: [
        {
          type: 'Tricolon',
          note: '"Depth and breadth and height" - three spatial dimensions. The speaker uses the language of physical measurement to describe immeasurable love.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'My soul can reach, when feeling out of sight',
      annotations: [
        {
          type: 'Spirituality',
          note: '"My soul can reach" - love is not just physical but spiritual. "Out of sight" suggests reaching beyond the visible world into mystical experience.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'For the ends of being and ideal grace.',
      annotations: [
        {
          type: 'Diction',
          note: '"Ends of being" - the limits of existence. "Ideal grace" - perfect divine grace. The speaker compares her love to a soul reaching toward God.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'EBB establishes the cosmic scale of her love. It reaches as far as her soul can reach toward God Himself.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "I love thee to the level of every day's",
      annotations: [
        {
          type: 'Anaphora',
          note: '"I love thee" - this phrase begins many lines, creating a powerful incantatory rhythm. The repetition builds emotional intensity.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Most quiet need, by sun and candle-light.',
      annotations: [
        {
          type: 'Imagery',
          note: '"Sun and candle-light" - day and night. The line moves from the cosmic to the domestic. Love operates at every scale, from universal to ordinary.',
          color: '#10b981',
        },
        {
          type: 'Diction',
          note: '"Most quiet need" - love is also quiet, ordinary, essential. Not just grand passion but daily companionship.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'I love thee freely, as men strive for Right;',
      annotations: [
        {
          type: 'Simile',
          note: '"As men strive for Right" - compared to political and moral struggle. Love is freely chosen, like a noble cause. The capitalised "Right" suggests an absolute moral good.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I love thee purely, as they turn from Praise.',
      annotations: [
        {
          type: 'Simile',
          note: '"As they turn from Praise" - compared to humble people who reject vanity. Love is pure - unselfish, without seeking reward.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I love thee with the passion put to use',
      annotations: [
        {
          type: 'Diction',
          note: '"Passion put to use" - the intense emotions she previously felt about other things (grief, indignation) are now redirected into love. Love absorbs all her energy.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "In my old griefs, and with my childhood's faith.",
      annotations: [
        {
          type: 'Personal',
          note: '"My old griefs" - EBB had suffered serious illness and the loss of family. "Childhood\'s faith" - the pure, unquestioning belief of a child. Love restores both intensity and innocence.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'I love thee with a love I seemed to lose',
      annotations: [
        {
          type: 'Volta',
          note: "A turn toward something restored. The speaker had thought she had lost the capacity for love. Robert Browning's love has restored it.",
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'With my lost saints. I love thee with the breath,',
      annotations: [
        {
          type: 'Religious imagery',
          note: '"My lost saints" - she had lost her religious faith (or saintly figures from her past). Now this love replaces what she had lost. Love is a spiritual experience.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Smiles, tears, of all my life; and, if God choose,',
      annotations: [
        {
          type: 'Catalogue',
          note: '"Breath, smiles, tears" - the speaker offers her entire physical and emotional self. "If God choose" - she submits to divine will.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'I shall but love thee better after death.',
      annotations: [
        {
          type: 'Closing image',
          note: 'The final line claims that love will continue and even grow after death. Love is eternal, transcending mortal existence. The greatest possible declaration.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The famous closing line. EBB rejects death as the end of love. The promise that love will continue and intensify forever is the ultimate romantic statement.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Elizabeth Barrett Browning (1806-1861)</h3>
    <p>EBB was one of the most famous Victorian poets. She suffered from chronic illness from her teenage years and was largely confined to her father\'s house in London. She published her first collection at 14 and was considered for Poet Laureate after Wordsworth\'s death.</p>

    <h3>Love and Marriage</h3>
    <p>In 1845, EBB began an exchange of letters with the younger poet Robert Browning. They fell in love through correspondence. Her father forbade her to marry, so they eloped to Italy in 1846. They had a happy 15-year marriage until EBB\'s death in 1861.</p>

    <h3>Sonnets from the Portuguese (1850)</h3>
    <p>"Sonnet 43" (also called "How do I love thee?") is the penultimate poem in EBB\'s sonnet sequence <em>Sonnets from the Portuguese</em>. The title was a private joke - Robert called her his "little Portuguese". The 44 sonnets trace the development of her love for Robert.</p>

    <h3>Petrarchan Sonnet Tradition</h3>
    <p>EBB writes in the tradition of <strong>Petrarch</strong>, the 14th-century Italian poet whose sonnets to "Laura" defined love poetry for centuries. By using this form, she places her love within a long tradition of literary romance - but as a woman writing to a beloved man, she reverses the conventional gender roles.</p>

    <h3>Victorian Religious Doubt</h3>
    <p>EBB lived through a period of crisis in Victorian religious belief. The line "my lost saints" suggests she had experienced doubt or loss of faith. Her love for Robert restores spiritual experience - love becomes religion.</p>

    <h3>Female Voice</h3>
    <p>For centuries, sonnets had been written BY men ABOUT women. EBB writes as a woman declaring love TO a man. This was unusual and powerful. She claims for herself the same right to passionate, articulate love that male poets had always taken.</p>
  `,

  contextAr: `
    <h3>Elizabeth Barrett Browning (1806-1861)</h3>
    <p>EBB من أشهر شعراء العصر الفيكتوري. عانت من مرض مزمن من سنّ المراهقة، وكانت معظم وقتها حبيسة بيت أبوها في لندن. نشرت أول مجموعة شعرية وعمرها 14 سنة، وانذكر اسمها لمنصب Poet Laureate بعد وفاة Wordsworth.</p>

    <h3>الحب والزواج</h3>
    <p>في 1845، EBB بدت تبادل رسائل مع الشاعر الأصغر منها Robert Browning. وقعوا في الحب عبر الرسائل. أبوها منعها من الزواج، فهربوا سوا إلى إيطاليا في 1846. عاشوا 15 سنة زواج سعيد لين توفت EBB في 1861.</p>

    <h3>Sonnets from the Portuguese (1850)</h3>
    <p>"Sonnet 43" (المعروفة أيضاً باسم "How do I love thee?") هي القصيدة قبل الأخيرة في سلسلة EBB <em>Sonnets from the Portuguese</em>. العنوان مزحة خاصة بين الاثنين - Robert كان يناديها "البرتغالية الصغيرة". الـ44 sonnet تتبع تطوّر حبها لـRobert.</p>

    <h3>تقليد Petrarchan Sonnet</h3>
    <p>EBB تكتب على تقليد <strong>Petrarch</strong>، الشاعر الإيطالي من القرن 14، اللي قصايده لـ"Laura" حدّدت شعر الحب لقرون. باستخدام هذا الشكل، تضع حبها داخل تقليد أدبي طويل - بس باعتبارها امرأة تكتب لرجل، تقلب أدوار الجنسين التقليدية.</p>

    <h3>الشك الديني الفيكتوري</h3>
    <p>EBB عاشت في فترة أزمة في الإيمان الديني الفيكتوري. عبارة "my lost saints" توحي إنها مرّت بشك أو فقدان للإيمان. حبها لـRobert استرجع التجربة الروحية - الحب صار دين.</p>

    <h3>الصوت الأنثوي</h3>
    <p>طوال قرون، الـsonnets كانت تُكتب من قبل الرجال عن النساء. EBB تكتب كامرأة تعلن الحب لرجل. هذا شي غير مألوف وقوي. تطالب لنفسها بنفس الحق في الحب العاطفي الفصيح اللي أخذه الشعراء الرجال طول التاريخ.</p>
  `,

  summary: `Lines 1-4: The speaker opens with a rhetorical question - "How do I love thee?" - and offers to count the ways. She claims her love reaches the spatial limits her soul can reach, "to the depth and breadth and height", to "the ends of being and ideal grace". This is mystical, cosmic love.

Lines 5-8: Love also operates at the everyday level - "by sun and candle-light", in "most quiet need". Love is both ordinary and necessary. She loves freely (like men who strive for political rights) and purely (like those who reject vanity).

Lines 9-12: Love absorbs the passion she once felt for "old griefs" and her "childhood\'s faith". She thought she had lost the capacity to love when she lost "my lost saints" (her faith), but Robert\'s love has restored it. Her love is now her entire being - "breath, smiles, tears".

Lines 13-14: The closing couplet promises that, if God allows, she will love him even better after death. Love transcends mortality.

Overall meaning: "Sonnet 43" is one of the greatest love poems in English. EBB attempts to "count" the dimensions, intensities, and durations of her love. The poem moves from cosmic scale to domestic scale, from physical to spiritual, and finally to eternal. It is a complete declaration of total devotion.`,

  summaryAr: `الأبيات 1-4: المتكلّمة تفتح بسؤال بلاغي - "How do I love thee?" - وتعرض إنها تعدّ الطرق. تدّعي إن حبها يصل لأقصى حدود مكانية تقدر روحها تبلغها: "to the depth and breadth and height"، لـ"the ends of being and ideal grace". هذا حب صوفي كوني.

الأبيات 5-8: الحب يشتغل بعد على المستوى اليومي - "by sun and candle-light"، في "most quiet need". الحب عادي وضروري. تحبّه بحرية (مثل الرجال اللي يكافحون من أجل الحقوق السياسية) وبنقاء (مثل اللي يرفضون الغرور).

الأبيات 9-12: الحب يستوعب الشغف اللي كانت تحسّه من قبل تجاه "old griefs" و"childhood's faith". اعتقدت إنها فقدت القدرة على الحب لما فقدت "my lost saints" (إيمانها)، بس حب Robert استرجعها. حبها الحين كل كيانها - "breath, smiles, tears".

الأبيات 13-14: المقطع الختامي يوعد إنه، إذا الله أراد، بتحبّه أكثر بعد الموت. الحب يتجاوز الموت.

المعنى العام: "Sonnet 43" من أعظم قصايد الحب في اللغة الإنجليزية. EBB تحاول "تعدّ" أبعاد وقوّة ومدى حبها. القصيدة تتحرّك من المقياس الكوني للمقياس البيتي، من الجسدي للروحي، وأخيراً للأبدي. هي إعلان كامل بالتفاني الكلّي.`,

  formAndStructure: `Form: Petrarchan sonnet (Italian sonnet) - 14 lines with an octave (8 lines) and sestet (6 lines). The traditional form gives the poem dignity and places it in the long European tradition of love poetry.

Rhyme scheme: ABBAABBA in the octave, CDCDCD in the sestet (variant of Petrarchan). The rhymes are tightly woven, with many repetitions, creating a sense of perfect harmony.

Metre: Iambic pentameter throughout. The regular rhythm gives the poem a steady, prayer-like quality. Some lines are deliberately slowed by long vowels for emphasis.

Anaphora: "I love thee" repeats many times throughout, creating an incantatory rhythm. The repetition builds emotional intensity and gives the poem the quality of a litany or prayer.

Volta: The traditional turn comes at line 9 - "I love thee with the passion put to use". The octave catalogues different kinds of love; the sestet becomes more personal and confessional, drawing on the speaker\'s past griefs.

Spatial language: The poem uses the language of dimensions - depth, breadth, height. Love is given physical scale even though it is immaterial. This makes the abstract feel concrete.

Religious diction: "Soul", "ideal grace", "lost saints", "if God choose" - the poem is full of spiritual language. Love becomes a religious experience, replacing or completing faith.

Closure: The final line promises eternity. The poem ends not with limitation but with expansion - love continues beyond death. The closing couplet has the certainty of a vow.`,

  formAndStructureAr: `Form: Petrarchan sonnet (الـsonnet الإيطالي) - 14 بيت، فيها octave (8 أبيات) وsestet (6 أبيات). الشكل التقليدي يعطي القصيدة هيبة، ويحطّها داخل تقليد أوروبي طويل في شعر الحب.

Rhyme scheme: ABBAABBA في الـoctave، CDCDCD في الـsestet (تنويعة Petrarchan). القوافي محبوكة بإحكام، مع تكرارات وايدة، تخلق إحساس بالانسجام التام.

Metre: iambic pentameter طول القصيدة. الإيقاع المنتظم يعطي القصيدة جودة ثابتة، تشبه الصلاة. بعض الأبيات تتباطأ عن قصد بحروف العلة الطويلة عشان التأكيد.

Anaphora: "I love thee" تتكرّر وايد طول القصيدة، تخلق إيقاع تعويذي. التكرار يبني شدّة عاطفية، ويعطي القصيدة كأنها litany أو دعاء.

Volta: التحوّل التقليدي يجي في البيت 9 - "I love thee with the passion put to use". الـoctave يعدّ أنواع الحب؛ الـsestet يصير أكثر شخصي واعترافي، يعتمد على آلام المتكلّمة في الماضي.

اللغة المكانية: القصيدة تستخدم لغة الأبعاد - depth, breadth, height. الحب يعطى حجم مادي حتى لو هو غير مادي. هذا يخلّي المجرّد يحسّ ملموس.

اللغة الدينية: "Soul"، "ideal grace"، "lost saints"، "if God choose" - القصيدة مشبّعة بلغة روحية. الحب يصير تجربة دينية، يستبدل الإيمان أو يكمّله.

الخاتمة: البيت الأخير يوعد بالأبدية. القصيدة ما تنتهي بحدّ بل بتوسّع - الحب يستمر بعد الموت. المقطع الختامي عنده يقين القَسَم.`,

  keyQuotes: [
    {
      quote: 'How do I love thee? Let me count the ways',
      analysis:
        'One of the most famous opening lines in English poetry. The rhetorical question is direct and intimate. "Count the ways" suggests love can be itemised - but the rest of the poem shows it cannot. The speaker tries to measure something immeasurable.',
      themes: ['Love', 'Direct address', 'Famous opening'],
      analysisAr:
        'من أشهر أبيات الافتتاح في الشعر الإنجليزي. السؤال البلاغي مباشر وحميم. "Count the ways" توحي إن الحب يقدر يُعدّ - بس بقية القصيدة تبيّن إنه ما يقدر. المتكلّمة تحاول تقيس شي ما يتقاس.',
      themesAr: ['الحب', 'الخطاب المباشر', 'افتتاحية شهيرة'],
    },
    {
      quote: 'I love thee to the depth and breadth and height / My soul can reach',
      analysis:
        'The speaker uses spatial dimensions - "depth, breadth, height" - to measure love. The tricolon creates a sense of total coverage. But these are also the dimensions her SOUL can reach, suggesting love is spiritual as well as physical. The scale is cosmic.',
      themes: ['Cosmic love', 'Tricolon', 'Spirituality'],
      analysisAr:
        'المتكلّمة تستخدم أبعاد مكانية - "depth, breadth, height" - عشان تقيس الحب. الـtricolon يخلق إحساس بالتغطية الكاملة. بس هذي بعد أبعاد روحها - هي اللي تقدر توصل لها - وهذا يوحي إن الحب روحي وجسدي مع بعض. المقياس كوني.',
      themesAr: ['الحب الكوني', 'Tricolon', 'الروحانية'],
    },
    {
      quote: 'For the ends of being and ideal grace',
      analysis:
        '"Ends of being" - the limits of existence itself. "Ideal grace" - perfect divine grace, the highest spiritual concept. The speaker compares her love to a soul reaching toward God. Love has theological scale.',
      themes: ['Religion', 'Limits', 'Divine love'],
      analysisAr:
        '"Ends of being" - حدود الوجود نفسه. "Ideal grace" - النعمة الإلهية المثالية، أعلى مفهوم روحي. المتكلّمة تشبّه حبها بروح تمدّ نفسها نحو الله. الحب عنده مقياس لاهوتي.',
      themesAr: ['الدين', 'الحدود', 'الحب الإلهي'],
    },
    {
      quote: "I love thee to the level of every day's / Most quiet need",
      analysis:
        'After the cosmic scale, the poem moves to the domestic. Love is also "everyday" and "quiet" - not just grand passion but daily companionship. The shift from universal to intimate is deeply moving. Love must operate at all scales.',
      themes: ['Everyday love', 'Domesticity', 'Quiet devotion'],
      analysisAr:
        'بعد المقياس الكوني، القصيدة تنتقل للحياة البيتية. الحب بعد "everyday" و"quiet" - مو بس شغف عظيم، بل صحبة يومية. الانتقال من الكوني للحميم مؤثّر وايد. الحب لازم يشتغل على كل المقاييس.',
      themesAr: ['الحب اليومي', 'الحياة البيتية', 'التفاني الهادئ'],
    },
    {
      quote:
        'I love thee freely, as men strive for Right; / I love thee purely, as they turn from Praise',
      analysis:
        'Two parallel similes. Love is "free" (not coerced) like political struggle for justice. Love is "pure" (not selfish) like those who reject vanity. EBB compares love to noble moral pursuits. Love is not separate from ethics but a form of ethical commitment.',
      themes: ['Freedom', 'Purity', 'Moral love'],
      analysisAr:
        'similes متوازيين. الحب "حر" (مو مفروض) مثل الكفاح السياسي من أجل العدل. الحب "نقي" (مو أناني) مثل اللي يرفضون الغرور. EBB تشبّه الحب بمساعي أخلاقية نبيلة. الحب مو منفصل عن الأخلاق، بل هو نوع من الالتزام الأخلاقي.',
      themesAr: ['الحرية', 'النقاء', 'الحب الأخلاقي'],
    },
    {
      quote: 'I love thee with the passion put to use / In my old griefs',
      analysis:
        'The speaker reveals personal history. The intense emotions of past sufferings are now redirected into love. Pain has become passion. This makes the love feel earned, not naive - it carries the weight of past experience.',
      themes: ['Past suffering', 'Transformation', 'Personal history'],
      analysisAr:
        'المتكلّمة تكشف تاريخها الشخصي. المشاعر الحادّة اللي كانت في الآلام السابقة الحين موجّهة للحب. الألم صار شغف. هذا يخلّي الحب يحسّ مستحقّ، مو ساذج - يحمل ثقل التجربة السابقة.',
      themesAr: ['الألم السابق', 'التحوّل', 'التاريخ الشخصي'],
    },
    {
      quote: 'I love thee with a love I seemed to lose / With my lost saints',
      analysis:
        "A confession of past spiritual loss. The speaker had lost her saints - her religious faith or sacred figures. She thought she had lost the capacity for that kind of devotion. But Robert's love has restored it. Love replaces religion - or completes it.",
      themes: ['Religious doubt', 'Restoration', 'Love and faith'],
      analysisAr:
        'اعتراف بفقدان روحي سابق. المتكلّمة فقدت قدّيسيها - إيمانها الديني أو الشخصيات المقدّسة عندها. اعتقدت إنها فقدت القدرة على هالنوع من التفاني. بس حب Robert استرجعه. الحب يستبدل الدين - أو يكمّله.',
      themesAr: ['الشك الديني', 'الاسترجاع', 'الحب والإيمان'],
    },
    {
      quote: 'I shall but love thee better after death',
      analysis:
        'The closing line is an extraordinary promise. Love does not end at death - it intensifies. The speaker rejects mortality as a limit on love. This is the most romantic possible declaration: love is eternal, beyond physical existence.',
      themes: ['Eternal love', 'Death', 'Transcendence'],
      analysisAr:
        'البيت الختامي وعد استثنائي. الحب ما ينتهي عند الموت - بل يزداد. المتكلّمة ترفض الموت كحدّ للحب. هذا أرومانسي إعلان ممكن: الحب أبدي، يتجاوز الوجود المادي.',
      themesAr: ['الحب الأبدي', 'الموت', 'التجاوز'],
    },
  ],

  languageDevices: [
    {
      device: 'Anaphora',
      example: 'I love thee ... I love thee ... I love thee',
      effect:
        'The phrase "I love thee" repeats throughout the poem, creating an incantatory rhythm. The repetition builds emotional intensity and gives the poem the quality of a prayer or vow. Each repetition adds a new dimension of love.',
      lineRef: 1,
      effectAr:
        'عبارة "I love thee" تتكرّر طول القصيدة، تخلق إيقاع تعويذي. التكرار يبني شدّة عاطفية، ويعطي القصيدة جودة الدعاء أو القَسَم. كل تكرار يضيف بُعد جديد من الحب.',
    },
    {
      device: 'Tricolon',
      example: 'depth and breadth and height',
      effect:
        "Three spatial dimensions create a sense of total coverage. The tricolon makes love feel measurable, even as it claims to exceed measurement. The list captures the speaker's attempt to articulate the inexpressible.",
      lineRef: 2,
      effectAr:
        'ثلاثة أبعاد مكانية تخلق إحساس بتغطية كاملة. الـtricolon يخلّي الحب يحسّ كأنه قابل للقياس، حتى وهو يدّعي إنه يتجاوز القياس. القائمة تلتقط محاولة المتكلّمة إنها تعبّر عن اللي ما يتعبّر عنه.',
    },
    {
      device: 'Religious diction',
      example: 'soul ... ideal grace ... my lost saints ... if God choose',
      effect:
        "The poem is saturated with religious language. Love becomes a spiritual experience, equivalent to faith. The speaker's past religious doubt is transformed into a new kind of devotion - to her beloved.",
      lineRef: 3,
      effectAr:
        'القصيدة مشبّعة بلغة دينية. الحب يصير تجربة روحية، تعادل الإيمان. الشك الديني السابق عند المتكلّمة يتحوّل لنوع جديد من التفاني - لمحبوبها.',
    },
    {
      device: 'Sonnet form',
      example: 'Traditional Petrarchan sonnet',
      effect:
        'The 14-line Petrarchan form gives the poem dignity and places it in centuries of love poetry tradition. The strict form contains and shapes the overflowing emotion. The contrast between formal control and passionate content creates power.',
      lineRef: 1,
      effectAr:
        'شكل Petrarchan من 14 بيت يعطي القصيدة هيبة، ويحطّها داخل قرون من تقليد شعر الحب. الشكل الصارم يحتوي ويصوغ العاطفة الفائضة. التضاد بين السيطرة الشكلية والمحتوى الشغوف يخلق قوة.',
    },
    {
      device: 'Volta',
      example: 'I love thee with the passion put to use / In my old griefs',
      effect:
        'The traditional turn at line 9 shifts the poem from public, abstract dimensions of love to personal, confessional ones. The speaker reveals her past suffering and lost faith. The volta makes the poem feel deeply personal.',
      lineRef: 9,
      effectAr:
        'التحوّل التقليدي في البيت 9 ينقل القصيدة من أبعاد الحب العامة المجرّدة لأبعاد شخصية اعترافية. المتكلّمة تكشف عن آلامها السابقة وإيمانها المفقود. الـvolta يخلّي القصيدة تحسّ عميقة الشخصانية.',
    },
    {
      device: 'Simile',
      example: 'as men strive for Right ... as they turn from Praise',
      effect:
        'The similes compare love to noble moral pursuits - political struggle and humility. Love is not separate from ethics but a form of ethical commitment. The comparisons elevate love to the status of moral virtue.',
      lineRef: 7,
      effectAr:
        'الـsimiles تشبّه الحب بمساعي أخلاقية نبيلة - الكفاح السياسي والتواضع. الحب مو منفصل عن الأخلاق، بل نوع من الالتزام الأخلاقي. المقارنات ترفع الحب لمستوى الفضيلة الأخلاقية.',
    },
    {
      device: 'Iambic pentameter',
      example: 'I LOVE thee FREEly, AS men STRIVE for RIGHT',
      effect:
        'The regular metre creates a steady, prayer-like rhythm. The iambic pulse mirrors a heartbeat, making the poem feel both controlled and deeply alive. The rhythm carries the reader smoothly through emotional intensity.',
      lineRef: 7,
      effectAr:
        'الوزن المنتظم يخلق إيقاع ثابت يشبه الدعاء. نبض الـiambic يحاكي ضربات القلب، يخلّي القصيدة تحسّ مسيطر عليها وحيّة في نفس الوقت. الإيقاع ينقل القارئ بانسيابية عبر الشدّة العاطفية.',
    },
  ],
}

const comparisons = [
  {
    title: 'To Autumn',
    poet: 'John Keats',
    href: '/revision/poetry/eduqas/to-autumn',
    reason:
      'Both poems use rich, sensual language to celebrate something precious. Keats celebrates a season; EBB celebrates love. Both use the lyric tradition to express deeply felt emotion in formal poetic structures.',
    themes: ['Celebration', 'Lyrical form', 'Devotion'],
  },
  {
    title: 'The Soldier',
    poet: 'Rupert Brooke',
    href: '/revision/poetry/eduqas/the-soldier',
    reason:
      'Both are sonnets about devotion. EBB declares total love for a person; Brooke declares total love for a country. Both use the sonnet form to express absolute commitment.',
    themes: ['Sonnet form', 'Devotion', 'Total commitment'],
  },
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    href: '/revision/poetry/eduqas/ozymandias',
    reason:
      "Both are sonnets that use the form for very different purposes. Shelley's sonnet shows the limits of human power; EBB's sonnet claims that love transcends all limits. A perfect contrast in what the form can do.",
    themes: ['Sonnet form', 'Time', 'Permanence'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 's43-1',
    question: 'What is the poem about?',
    type: 'multiple-choice',
    options: [
      'A sad farewell',
      "An attempt to measure the depth and breadth of the speaker's love - listing all the ways she loves",
      'A business letter',
      'A prayer',
    ],
    correctIndex: 1,
    explanation:
      'EBB tries to answer the question "How do I love thee?" by listing all the ways - to the "depth and breadth and height" her soul can reach, with the passion of daily life, and beyond death.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 's43-2',
    question:
      'What does "I love thee to the depth and breadth and height / My soul can reach" suggest?',
    type: 'multiple-choice',
    options: [
      'Love is small',
      "Love fills every dimension of existence - it is as vast as the speaker's entire spiritual being",
      'She is measuring a room',
      'Love is physical only',
    ],
    correctIndex: 1,
    explanation:
      "The spatial metaphor presents love as filling three-dimensional space - it extends to the absolute limits of the soul's capacity. Love is infinite, spiritual, and all-encompassing.",
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 's43-3',
    question: 'What form is the poem?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'A Petrarchan sonnet - the form traditionally used for love poetry',
      'A ballad',
      'A dramatic monologue',
    ],
    correctIndex: 1,
    explanation:
      'A Petrarchan (Italian) sonnet - the traditional form for love poetry since Petrarch. EBB uses the established convention to express deeply personal, genuine love.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 's43-4',
    question: 'What is the effect of "I love thee freely, as men strive for right"?',
    type: 'multiple-choice',
    options: [
      'Love is easy',
      'Love is compared to the pursuit of justice - it is a moral, principled commitment, not just emotion',
      'She loves politics',
      'It describes freedom',
    ],
    correctIndex: 1,
    explanation:
      'By comparing love to the pursuit of justice, EBB elevates it from mere emotion to a moral and spiritual duty. Love is principled, deliberate, and righteous.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 's43-5',
    question: 'Who wrote the poem and what is its context?',
    type: 'multiple-choice',
    options: [
      'Jane Austen in 1813',
      "Elizabeth Barrett Browning, written during her secret courtship with Robert Browning despite her father's opposition",
      'Charlotte Bronte in 1847',
      'Emily Dickinson in 1862',
    ],
    correctIndex: 1,
    explanation:
      "Written during EBB's secret courtship with Robert Browning. Her tyrannical father forbade his children from marrying. She eventually eloped with Robert, making the poem's passion deeply personal.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 's43-6',
    question: 'What does "I shall but love thee better after death" mean?',
    type: 'multiple-choice',
    options: [
      'Love ends at death',
      'Love transcends death - it will grow even stronger in the afterlife',
      'She fears death',
      'Death is unrelated to love',
    ],
    correctIndex: 1,
    explanation:
      'The final line claims love will intensify after death. EBB argues love is not limited to mortal life - it is eternal, spiritual, and will grow beyond the grave.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 's43-7',
    question: 'What is the effect of the anaphora "I love thee"?',
    type: 'multiple-choice',
    options: [
      'Monotony',
      'The repetition creates a liturgical, prayer-like rhythm - love is expressed as devotion',
      'Random repetition',
      'It is a refrain',
    ],
    correctIndex: 1,
    explanation:
      'The repeated "I love thee" creates a chant-like, devotional quality. Each repetition adds a new dimension to love - it accumulates like prayer, building toward the transcendent final claim.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 's43-8',
    question: 'How does EBB move from the everyday to the spiritual?',
    type: 'multiple-choice',
    options: [
      "She doesn't",
      'The poem progresses from daily, mundane love ("by sun and candlelight") to eternal, spiritual love ("after death")',
      'From spiritual to everyday',
      'Only spiritual love matters',
    ],
    correctIndex: 1,
    explanation:
      'EBB begins with love in everyday life - "by sun and candlelight" - and elevates it through moral commitment and childhood faith to love that transcends death itself.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 's43-9',
    question: 'What does "with the passion put to use / In my old griefs" suggest?',
    type: 'multiple-choice',
    options: [
      'She has forgotten her past',
      'The passion she once directed at grief and suffering is now redirected to love - love transforms pain into devotion',
      'She is still grieving',
      'Grief and love are unrelated',
    ],
    correctIndex: 1,
    explanation:
      'EBB repurposes the intensity of past suffering into love. Pain has not been wasted - it has trained her heart for the depth of feeling she now directs at her beloved.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 's43-10',
    question: 'How does Sonnet 43 compare with other love poems in the anthology?',
    type: 'multiple-choice',
    options: [
      'It is identical to all others',
      "It presents love as unambiguously positive, spiritual, and eternal - contrasting with poems that show love's pain or complexity",
      'Love is always positive in all poems',
      'It is the only love poem',
    ],
    correctIndex: 1,
    explanation:
      "Sonnet 43 is unusual in presenting love as wholly positive, spiritual, and eternal. This contrasts with poems showing love's pain (Neutral Tones), danger (Porphyria's Lover), or complexity (The Farmer's Bride).",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Sonnet 43 celebrates love as infinite, spiritual, and eternal - progressing from everyday devotion to love that transcends death.',
    keyPoints: [
      'Love is immeasurable - fills "depth and breadth and height"',
      'Love is moral - compared to striving for right',
      'Love transforms suffering - past griefs redirected into devotion',
      'Love is eternal - "I shall but love thee better after death"',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'EBB uses spatial metaphor, anaphora, religious language, and a progression from mundane to transcendent to express limitless love.',
    keyPoints: [
      '"Depth and breadth and height" - love fills all dimensions',
      '"I love thee" anaphora - prayer-like repetition',
      '"Freely, as men strive for right" - love as moral principle',
      '"After death" - love transcends mortality',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'A Petrarchan sonnet - the traditional love form used for deeply personal, genuine expression.',
    keyPoints: [
      'Petrarchan sonnet - classical form for elevated love',
      'Anaphora builds cumulative intensity',
      'Progression: everyday → moral → spiritual → eternal',
      'Final line transcends death - the ultimate claim',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Barrett Browning present the depth of love in Sonnet 43?',
  'Compare how love is celebrated in Sonnet 43 and one other poem from the anthology.',
  'How does Barrett Browning use the sonnet form and repetition to convey infinite love?',
]

export default function Sonnet43EduqasPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Sonnet 43 by Elizabeth Barrett Browning - Analysis & Annotations"
        description="Line-by-line analysis of Sonnet 43 with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Eduqas Poetry', url: 'https://theenglishhub.app/revision/poetry/eduqas' },
          { name: 'Sonnet 43', url: 'https://theenglishhub.app/revision/poetry/eduqas/sonnet-43' },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/eduqas" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('rev.poetry.shared.back_to_eduqas_poetry')}
        </Button>

        <div className="mb-5 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-body-sm text-amber-100">
          <p className="font-semibold mb-1">Legacy anthology notice</p>
          <p className="text-amber-100/90 leading-relaxed">
            This page is from the legacy pre-2025 Eduqas anthology. The current Eduqas 2025 cluster
            does not include this poem. The content remains as a study reference.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
            <BookOpen className="size-5 text-pink-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Sonnet 43</h1>
            <p className="text-body-sm text-muted-foreground">
              Elizabeth Barrett Browning &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="Sonnet 43"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Sonnet 43"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={sonnet43} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {t('rev.poetry.shared.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong Eduqas pairings for comparison questions involving Sonnet 43.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Poem text is reproduced for the purpose of private study and educational criticism under UK
        fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30). No commercial use
        is intended. All quotations remain the intellectual property of the respective rights
        holders.
      </footer>
    </div>
  )
}
