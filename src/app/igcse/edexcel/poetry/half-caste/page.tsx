'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare, AlertTriangle } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

/* ── Poem data ────────────────────────────────────────────────────── */
/* NOTE: "Half-Caste" by John Agard is IN COPYRIGHT.                 */
/* Only short extracts (key phrases, ≤15 words per annotation) are   */
/* used here for the purpose of criticism, review and study under    */
/* fair dealing (Copyright, Designs and Patents Act 1988, s.30).     */

const poem: PoemData = {
  title: 'Half-Caste',
  poet: 'John Agard',
  lines: [
    {
      text: 'Excuse me',
      annotations: [
        {
          type: 'Tone',
          note: 'The poem opens with mock politeness. "Excuse me" is ironic - the speaker is not really apologising, but challenging the listener to justify themselves. The exaggerated courtesy highlights how absurd it is that the speaker should have to explain or excuse his identity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'standing on one leg',
      annotations: [
        {
          type: 'Key phrase',
          note: '"Standing on one leg" - the speaker mockingly performs the literal meaning of "half". If he is only half a person, then he can only stand on one leg. This physical absurdity exposes the absurdity of the label "half-caste".',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "I'm half-caste",
      annotations: [
        {
          type: 'Irony',
          note: 'The speaker adopts the offensive term to dismantle it. By claiming the label himself, he can show how ridiculous it is. The whole poem is an act of reclaiming and dismantling a word used to diminish mixed-race people.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: '[Extract: Explain yuself / wha yu mean]',
      annotations: [
        {
          type: 'Direct address',
          note: 'The repeated demand "Explain yuself" turns the tables on the listener. Instead of the mixed-race speaker having to justify himself, the person who used the term must explain what they mean. The Caribbean dialect spelling asserts cultural identity.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: '[See anthology - Picasso analogy: mixing paint colours]',
      annotations: [
        {
          type: 'Analogy - Art',
          note: 'Agard argues that when a great artist mixed colours on canvas, nobody called the painting "half-caste". Mixing is seen as creative genius in art but as something lesser in human beings. This exposes the double standard. Refer to the anthology for the exact wording.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[See anthology - Tchaikovsky analogy: black and white piano keys]',
      annotations: [
        {
          type: 'Analogy - Music',
          note: 'A second analogy: Tchaikovsky combined black and white piano keys to create beautiful music. Nobody calls a symphony "half-caste". Agard shows that mixing is natural and beautiful in every field except racial identity, where prejudice distorts our judgement. Refer to the anthology for the exact wording.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[See anthology - English weather analogy: sun and cloud]',
      annotations: [
        {
          type: 'Analogy - Weather',
          note: 'A third, humorous analogy: English weather is a mix of sun and cloud. The bathos of comparing racial prejudice to weather is deliberately comic, making the term look silly and small. Refer to the anthology for the exact wording.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: '[See anthology - literalisation: casting half-a-shadow]',
      annotations: [
        {
          type: 'Literalisation',
          note: 'Agard takes "half" literally: if he is only half a person, he casts half a shadow. The physical impossibility exposes the linguistic cruelty of the word. The technique of literalising the metaphor runs throughout the poem. Refer to the anthology for the exact wording.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[See anthology - accumulating list of "halves": dream, eye, ear]',
      annotations: [
        {
          type: 'Accumulation',
          note: 'The speaker lists more "halves" - half a dream, half an eye, half an ear. The list accumulates until the idea becomes obviously absurd. This rhetorical strategy of piling up examples overwhelms the reader with the foolishness of the term. Refer to the anthology for the exact wording.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: '[Extract: come back tomorrow / wid de whole of yu eye]',
      annotations: [
        {
          type: 'Key phrase',
          note: '"Come back tomorrow / wid de whole of yu eye" - the poem ends with a challenge. The speaker tells the listener to return with their full humanity - whole eye, whole ear, whole mind - and then the speaker will tell them "de other half / of my story". The implication: you can only understand me when you see me as a whole person.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Extract: de other half / of my story]',
      annotations: [
        {
          type: 'Final reversal',
          note: 'The final lines cleverly reverse "half". Now it is the listener who is incomplete - seeing with half an eye, hearing with half an ear. The speaker has a whole story; it is the listener who is only offering half their attention. The power has shifted entirely.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>John Agard (b. 1949)</h3>
    <p>John Agard is a Guyanese-British poet, playwright and children's writer. He was born in British Guiana (now Guyana) and moved to England in 1977. His work frequently explores themes of <strong>cultural identity</strong>, <strong>race</strong> and <strong>language</strong>. He writes in both Standard English and Caribbean Creole, often mixing them within a single poem. In 2012 he won the Queen's Gold Medal for Poetry.</p>

    <h3>The term "half-caste"</h3>
    <p>The word "caste" comes from the Portuguese/Spanish <em>casta</em>, meaning "race" or "lineage". "Half-caste" was historically used to describe people of mixed racial heritage, implying they were <strong>incomplete</strong> or <strong>lesser</strong> - literally "half" a person. The term is now widely regarded as offensive. Agard wrote this poem to dismantle the word and expose its cruelty.</p>

    <h3>Multicultural Britain</h3>
    <p>The poem was written in the context of <strong>multicultural Britain</strong> in the late twentieth century. Immigration from the Caribbean (the "Windrush generation" from 1948 onwards) brought new communities to Britain, but also racial tension, discrimination and casual prejudice. Agard's poem confronts everyday racism - not violent attacks, but the thoughtless use of labels that diminish people.</p>

    <h3>Language and power</h3>
    <p>Agard deliberately writes in <strong>Caribbean Creole English</strong> - "yu", "wid", "dem", "wha". This is a political choice. Standard English is the language of the colonial power that once ruled Guyana. By writing in Creole, Agard asserts the value and beauty of his own linguistic heritage. The dialect IS the argument: mixing languages, like mixing races, produces something richer, not lesser.</p>

    <h3>Performance poetry</h3>
    <p>"Half-Caste" is a <strong>performance poem</strong> - written to be spoken aloud. Agard is a celebrated performer, and the poem's rhythms, repetitions and direct address all work best when heard. The confrontational "Explain yuself" is addressed to a live audience, making every listener feel the challenge personally.</p>
  `,

  summary: `The poem opens with mock politeness - "Excuse me / standing on one leg / I'm half-caste". The speaker adopts the offensive label in order to dismantle it, performing its literal meaning to show how absurd it is.

The speaker then demands that the listener explain what they mean by "half-caste". This demand - "Explain yuself / wha yu mean" - is repeated throughout the poem as a refrain, turning the burden of explanation onto the person who used the word.

Agard uses three analogies to show that mixing is valued everywhere except in racial identity. Picasso mixed red and green paint - nobody called his art "half-caste". Tchaikovsky mixed black and white piano keys - nobody called his music "half-caste". English weather mixes sun and cloud - nobody calls the sky "half-caste".

The speaker then literalises the metaphor of "half". If he is only half a person, he must cast half a shadow, dream half a dream, see with half an eye, listen with half an ear. The accumulation of physical impossibilities makes the term look increasingly stupid.

The poem ends with a powerful challenge. The speaker tells the listener to "come back tomorrow / wid de whole of yu eye" (and to bring the whole of their ear and mind). Only when the listener approaches as a whole, unprejudiced person will the speaker share "de other half / of my story". The reversal is complete: it is the listener, not the speaker, who has been incomplete all along.

Overall meaning: "Half-Caste" is a poem that uses humour, irony and Caribbean dialect to confront racial prejudice. Agard reclaims an offensive word, exposes its absurdity through analogies and literalisation, and ultimately shifts power from the labeller to the labelled.`,

  formAndStructure: `Form: Free verse - no regular metre, no rhyme scheme. The poem is written as a continuous dramatic monologue addressed directly to a listener. This suits its origins as a performance poem and its conversational, confrontational tone.

Line length: Lines are short and punchy, often just a few words. This creates a staccato, insistent rhythm - like the speaker jabbing a finger at the listener. The shortness also mimics speech patterns.

Dialect: The poem is written in Caribbean Creole English throughout - "yu", "wid", "dem", "wha". This is a structural choice, not decoration. The dialect asserts cultural identity and resists the dominance of Standard English. The mixing of languages mirrors the mixing of races that the poem celebrates.

Repetition: "Explain yuself / wha yu mean" is repeated as a refrain, creating a sense of relentless demand. The word "half" is repeated dozens of times, each repetition making it sound more ridiculous.

Structure - three movements:
• Movement 1 (opening): The speaker introduces himself with mock humility and announces the topic.
• Movement 2 (middle): Three analogies - Picasso, Tchaikovsky, English weather - each showing that mixing is valued in art, music and nature.
• Movement 3 (ending): Literalisation of "half" (half a shadow, half a dream, half an eye) and the final challenge to the listener.

Tone: Mock-polite, ironic, confrontational, humorous, angry. The humour is essential - Agard makes the listener laugh at the absurdity of the term, then feel the anger beneath the laughter.

No punctuation or capitalisation: The poem uses minimal punctuation and no capital letters (except for proper nouns). This removes the hierarchies of Standard English grammar - another act of linguistic resistance.

Enjambment: Lines flow into each other without stops, creating a sense of rapid, unstoppable speech. The speaker will not be silenced or interrupted.`,

  keyQuotes: [
    {
      quote: "Excuse me / standing on one leg / I'm half-caste",
      analysis:
        'The opening is brilliantly ironic. "Excuse me" is mock-polite - the speaker pretends to apologise for existing. "Standing on one leg" literalises "half" immediately, showing that if the term were true, the speaker would be physically incomplete. The absurdity is deliberate and sets the tone for the whole poem.',
      themes: ['Identity', 'Irony', 'Absurdity'],
      analysisAr:
        'مفتتحٌ ساخرٌ ببراعة. عبارة "Excuse me" متأدّبةٌ تأدّباً متصنّعاً - يتظاهر المتكلّم بأنّه يعتذر عن وجوده. أمّا "standing on one leg" فتُحرفي "half" فوراً، لتُري أنّ كلمة "half-caste" لو كانت صحيحة لكان المتكلّم ناقصاً جسديّاً. والعبثيّةُ مقصودة، وتضبط نبرة القصيدة كلّها.',
      themesAr: ['الهويّة', 'المفارقة', 'العبثيّة'],
    },
    {
      quote: 'Explain yuself / wha yu mean',
      analysis:
        'The repeated demand turns the power dynamic around. Normally, mixed-race people are expected to explain or justify their identity. Here, the speaker demands that the person who used the term explain themselves. The Caribbean Creole spelling ("yuself", "wha yu") asserts the speaker\'s linguistic identity as valid and powerful.',
      themes: ['Power', 'Language', 'Challenge'],
      analysisAr:
        'الطلبُ المكرَّر يقلب موازين القوّة. عادةً يُطلَب من أصحاب الهُويّات المختلطة أن يُبرّروا هُويّتهم. أمّا هنا فيُطالب المتكلّمُ مَن استعمل التعبيرَ بأن يشرحَ هو نفسه. والكتابةُ بالكريول الكاريبيّ ("yuself"، "wha yu") تُؤكّد أنّ هُويّةَ المتكلّم اللغويّة مشروعةٌ ومُقتدِرة.',
      themesAr: ['السلطة', 'اللغة', 'التحدّي'],
    },
    {
      quote: '[See anthology - Picasso paint-mixing analogy]',
      analysis:
        'The first of three analogies. When a great artist mixes colours, the result is celebrated as genius. Nobody calls a Picasso painting "half-caste". The analogy exposes the double standard: mixing is valued in art but denigrated in human identity. The rhetorical question demands the listener confront their own inconsistency. Refer to your Edexcel IGCSE anthology for the exact wording.',
      themes: ['Art', 'Double standards', 'Mixing'],
      analysisAr:
        'أولى المماثلات الثلاث. حين يخلط فنّانٌ عظيمٌ ألوانَه يحتفي العالم بالنتيجة عبقريّةً. لا أحدَ يصف لوحةَ Picasso بـ"half-caste". تكشف المماثلةُ ازدواجَ المعايير: الخلطُ ممدوحٌ في الفنّ، مذمومٌ في هُويّة الإنسان. والسؤالُ البلاغيّ يُلزم السامعَ بأن يُواجه تناقضَه. ارجع إلى الـEdexcel IGCSE anthology للنصّ الكامل.',
      themesAr: ['الفنّ', 'ازدواج المعايير', 'الخلط'],
    },
    {
      quote: '[See anthology - Tchaikovsky black-and-white-keys analogy]',
      analysis:
        'The musical analogy is particularly sharp because it uses black and white piano keys - the very colours of racial categorisation. Nobody calls a chord "half-caste". The pun on black/white exposes how arbitrary racial categories are when applied to harmony. Refer to your Edexcel IGCSE anthology for the exact wording.',
      themes: ['Music', 'Race', 'Harmony'],
      analysisAr:
        'المماثلةُ الموسيقيّة حادّةٌ جدّاً لأنّها تستعمل مفاتيح البيانو السوداء والبيضاء - لونَي التصنيف العِرقيّ نفسَه. لا أحدَ يصف وَتراً موسيقيّاً بـ"half-caste". والتوريةُ بين الأبيض والأسود تكشف عُسفَ التصنيفات العِرقيّة حين تُطبَّق على الانسجام الموسيقيّ. ارجع إلى الـEdexcel IGCSE anthology للنصّ الكامل.',
      themesAr: ['الموسيقى', 'العِرق', 'الانسجام'],
    },
    {
      quote: '[See anthology - half-a-shadow literalisation]',
      analysis:
        'The literalisation of "half" reaches its most powerful point. If the speaker is truly half a person, he would cast half a shadow - a physical impossibility. By making the metaphor literal, Agard reveals it as nonsense. The image is both comic and chilling: to call someone "half-caste" is to deny them their full humanity. Refer to your Edexcel IGCSE anthology for the exact wording.',
      themes: ['Dehumanisation', 'Literalisation', 'Identity'],
      analysisAr:
        'تبلغ حرفنةُ كلمة "half" أوجها هنا. لو كان المتكلّمُ حقّاً نصفَ إنسان لألقى نصفَ ظِلٍّ - وهذا مستحيلٌ جسديّاً. وبإحالة الاستعارة إلى الحرف يكشف Agard أنّها بلا معنى. والصورة هزليّة ومخيفةٌ معاً: مَن يصف الآخرَ بـ"half-caste" يُنكر إنسانيّته الكاملة. ارجع إلى الـEdexcel IGCSE anthology للنصّ الكامل.',
      themesAr: ['نزع الإنسانيّة', 'الحرفنة', 'الهويّة'],
    },
    {
      quote: '[See anthology - accumulating list of "halves"]',
      analysis:
        'The accumulation of "halves" builds to a crescendo of absurdity. Half a dream, half an eye, half an ear - each image is more ridiculous than the last. The list overwhelms the listener with evidence that the concept of "half" a person makes no sense. The technique is rhetorically powerful: quantity becomes quality. Refer to your Edexcel IGCSE anthology for the exact wording.',
      themes: ['Accumulation', 'Absurdity', 'Rhetoric'],
      analysisAr:
        'يتراكم الـ"halves" حتى يبلغ ذروةَ السخف. نصفُ حلم، نصفُ عين، نصفُ أُذن - كلّ صورةٍ أسخف من سابقتها. تُغرق القائمةُ السامعَ بالبراهين على أنّ فكرة "نصف إنسان" بلا معنى. تقنيّةٌ بلاغيّة قويّة: الكَمّ يصير كيفاً. ارجع إلى الـEdexcel IGCSE anthology للنصّ الكامل.',
      themesAr: ['التراكم', 'العبثيّة', 'البلاغة'],
    },
    {
      quote: 'come back tomorrow / wid de whole of yu eye',
      analysis:
        'The command to "come back tomorrow" turns the tables completely. Now it is the listener who is incomplete - they have been looking with half an eye, listening with half an ear. The speaker will only share his full story when the listener brings their full, unprejudiced attention. The challenge is direct, confident and empowering.',
      themes: ['Challenge', 'Wholeness', 'Power reversal'],
      analysisAr:
        'يقلب أمرُ "come back tomorrow" الطاولةَ تماماً. صار السامعُ هو الناقص - كان ينظر بنصف عينٍ ويُصغي بنصف أُذن. ولن يُشاركه المتكلّمُ كاملَ قصّته إلّا متى أحضر انتباهه كاملاً غيرَ مُتحيّز. والتحدّي مباشرٌ واثقٌ مُمكِّن.',
      themesAr: ['التحدّي', 'الكمال', 'انقلاب موازين القوى'],
    },
    {
      quote: 'de other half / of my story',
      analysis:
        'The final words reclaim "half" one last time. The speaker has a complete identity - a whole story - but the listener has only heard half of it because they have been too prejudiced to listen properly. The poem ends with a promise and a challenge: there is more to the speaker than a label. The listener must earn the right to hear it.',
      themes: ['Identity', 'Completeness', 'Empowerment'],
      analysisAr:
        'الكلمات الأخيرة تستردّ "half" مرّةً أخيرة. للمتكلّم هُويّةٌ تامّة - قصّةٌ كاملة - لكنّ السامعَ لم يسمع منها إلّا نصفاً لأنّه أشدّ تحيّزاً من أن يُصغي كما ينبغي. تختم القصيدة بوعدٍ وتحدّ: المتكلّمُ أكبر من أن يُختزل في وَسم. وعلى السامع أن يستحقّ سماعَ الباقي.',
      themesAr: ['الهويّة', 'الاكتمال', 'التمكين'],
    },
  ],

  languageDevices: [
    {
      device: 'Literalisation of metaphor',
      example: 'standing on one leg (opening); see anthology for the half-a-shadow image',
      effect:
        'Agard takes the word "half" literally: if "half-caste" is true, the speaker can only stand on one leg, cast half a shadow, dream half a dream. By making the metaphor literal, the poet exposes it as absurd and cruel. This is the poem\'s central technique.',
      lineRef: 1,
      effectAr:
        'يأخذ Agard كلمة "half" بحرفيّتها: لو كان "half-caste" تعبيراً صحيحاً، لما استطاع المتكلّم إلّا الوقوفَ على ساقٍ واحدة، وإلقاءَ نصف ظِلّ، وحُلمَ نصف حُلم. وبإحالة الاستعارة إلى الحرف يكشف الشاعرُ سخفَها وقسوتَها. وهذه تقنيّةُ القصيدة المحوريّة.',
    },
    {
      device: 'Analogy',
      example: 'See anthology - Picasso paint, Tchaikovsky piano keys, English weather',
      effect:
        'Three analogies (art, music, weather) show that mixing is celebrated everywhere except race. Each analogy adds another layer of evidence that the term "half-caste" is intellectually bankrupt. The analogies move from high culture (Picasso, Tchaikovsky) to everyday life (weather), showing that the principle applies universally.',
      lineRef: 6,
      effectAr:
        'مماثلاتٌ ثلاث (الفنّ، الموسيقى، الطقس) تُري أنّ الخلطَ محتفىً به في كلّ مكانٍ إلّا في العِرق. كلّ مماثلةٍ تُضيف برهاناً جديداً على إفلاس مصطلح "half-caste". وتنتقل المماثلاتُ من الثقافة الرفيعة (Picasso وTchaikovsky) إلى الحياة اليوميّة (الطقس)، فتُري أنّ المبدأ يسري على كلّ شيء.',
    },
    {
      device: 'Caribbean Creole dialect',
      example: 'Explain yuself / wha yu mean',
      effect:
        'Writing in Creole English is itself a political act. Standard English represents colonial power; Creole represents Caribbean identity. By refusing Standard English, Agard asserts the value of his heritage. The dialect also makes the poem feel spoken, direct and personal - a real voice, not a literary exercise.',
      lineRef: 4,
      effectAr:
        'الكتابةُ بالكريول الإنجليزيّ موقفٌ سياسيّ بذاته. الـStandard English يُمثّل القوّةَ الاستعماريّة؛ والـCreole يُمثّل الهُويّةَ الكاريبيّة. وبرفضِ الـStandard English يُثبت Agard قيمةَ تراثه. وتمنح اللهجة القصيدةَ كذلك إحساساً منطوقاً مباشراً شخصيّاً - صوتاً حقيقيّاً لا تمريناً أدبيّاً.',
    },
    {
      device: 'Repetition / Refrain',
      example: 'Explain yuself / wha yu mean (repeated)',
      effect:
        'The refrain "Explain yuself" is repeated throughout the poem, creating a relentless, insistent demand. Each repetition becomes more forceful. The word "half" is also repeated obsessively, each use making the term sound more absurd. The repetition mimics the way prejudice is itself repetitive - the same lazy label applied again and again.',
      lineRef: 4,
      effectAr:
        'لازمة "Explain yuself" تتكرّر على امتداد القصيدة، فتُولّد طلباً لا يهدأ. كلّ تكرار أعنف من سابقه. وكلمة "half" تتكرّر بإلحاحٍ مهووس، وكلّ استعمالٍ يجعلها أشدّ سخفاً. والتكرارُ يحاكي طبيعةَ التحيّز الذي يكرّر نفسه: وَسمٌ كسولٌ يُلقى مرّةً بعد مرّة.',
    },
    {
      device: 'Rhetorical questions',
      example: 'See anthology - Agard frames each analogy as a rhetorical question',
      effect:
        'The rhetorical questions force the listener to answer "no" - of course a painting isn\'t "half-caste". Each "no" builds the logical case that a person isn\'t "half-caste" either. The questions are unanswerable, which is the point: the term cannot be defended.',
      lineRef: 6,
      effectAr:
        'الأسئلةُ البلاغيّة تُجبر السامعَ على الإجابة بـ"لا" - فاللوحةُ بالطبع ليست "half-caste". وكلّ "لا" تبني الحُجّةَ المنطقيّة على أنّ الإنسانَ كذلك ليس "half-caste". الأسئلةُ بلا جوابٍ ممكن، وهذا هو المقصد: المصطلحُ لا يُدافَع عنه.',
    },
    {
      device: 'Direct address and imperative verbs',
      example: 'Excuse me... Explain yuself... come back tomorrow',
      effect:
        'The poem is addressed directly to "yu" - the person who used the term. This makes the poem feel confrontational and personal. The imperatives ("explain", "come back") are commands, not requests. The speaker takes authority over the conversation, reversing the power dynamic that the label tried to impose.',
      lineRef: 0,
      effectAr:
        'القصيدة موجَّهةٌ مباشرةً إلى "yu" - الشخص الذي استعمل المصطلح. وهذا يكسبها طابعاً مواجِهاً شخصيّاً. وصِيَغُ الأمر ("explain"، "come back") أوامرٌ لا طلبات. يستولي المتكلّم على سُلطة الحوار، فيقلب موازين القوى التي حاول الوَسمُ فرضَها.',
    },
  ],

  contextAr: `
    <h3>John Agard (مواليد 1949)</h3>
    <p>John Agard شاعرٌ وكاتبُ مسرحٍ وأدبِ أطفالٍ من غويانا، يعيش في بريطانيا. وُلد في British Guiana (Guyana الآن) وانتقل إلى إنكلترا سنة 1977. كثيراً ما يستكشف عمله موضوعات <strong>الهُويّة الثقافيّة</strong> و<strong>العِرق</strong> و<strong>اللغة</strong>. يكتب بالإنجليزيّة الفصحى وبالكريول الكاريبيّ معاً، وكثيراً ما يخلط بينهما داخل قصيدةٍ واحدة. وفي 2012 نال Queen\'s Gold Medal for Poetry.</p>

    <h3>مصطلح "half-caste"</h3>
    <p>كلمة "caste" من البرتغاليّة/الإسبانيّة <em>casta</em>، بمعنى "العِرق" أو "النسب". واستُعمل "half-caste" تاريخيّاً لوصف ذوي التراث العِرقيّ المختلط، بإيحاءٍ أنّهم <strong>ناقصون</strong> أو <strong>أدنى</strong> - حرفيّاً "نصفُ" إنسان. وقد صار المصطلح اليوم مرفوضاً على نطاقٍ واسع بوصفه مهيناً. كتب Agard هذه القصيدةَ ليُفكّك الكلمة ويكشف قسوتها.</p>

    <h3>بريطانيا المتعدّدة الثقافات</h3>
    <p>كُتبت القصيدة في سياق <strong>بريطانيا المتعدّدة الثقافات</strong> في أواخر القرن العشرين. جاءت الهجرة من الكاريبي (جيلُ "Windrush" منذ 1948 فصاعداً) بمجتمعاتٍ جديدة إلى بريطانيا، وجاءت معها كذلك توتّراتٌ عِرقيّة وتمييزٌ وتحاملٌ يوميّ. تواجه قصيدةُ Agard العنصريّةَ اليوميّة - لا الاعتداءات العنيفة، بل الاستعمال الطائش لوَسمٍ يُقلّل الإنسان.</p>

    <h3>اللغة والسلطة</h3>
    <p>يكتب Agard قصدياً بالـ<strong>Caribbean Creole English</strong> - "yu"، "wid"، "dem"، "wha". خيارٌ سياسيّ. الفصحى الإنجليزيّة لغةُ القوّة الاستعماريّة التي حكمت Guyana في الماضي. وبالكتابة بالكريول يُثبت Agard قيمةَ تراثه اللغويّ وجماله. اللهجةُ نفسُها هي الحُجّة: خلطُ اللغات، كخلط الأعراق، يُنتج ما هو أغنى لا أنقص.</p>

    <h3>شعر الأداء</h3>
    <p>"Half-Caste" قصيدةُ <strong>أداءٍ</strong> - كُتبت لتُلقى صوتاً. وAgard مُؤدٍّ معروف، وإيقاعات القصيدة وتكرارها ونداؤها المباشر تعمل كلّها في أبهى صورها متى سُمعت. ونداءُ "Explain yuself" المواجِه موجَّهٌ إلى جمهورٍ حيّ، فيُحسّ كلُّ سامعٍ بأنّ التحدّي شخصيّ.</p>
  `,

  summaryAr: `تبدأ القصيدة بتأدّبٍ متصنّع - "Excuse me / standing on one leg / I\'m half-caste". يتقمّص المتكلّم الوَسمَ المهين ليُفكّكه، مؤدّياً معناه الحرفيّ ليُبيّن سخفه.

ثمّ يطالب المتكلّمُ السامعَ بأن يشرح ما يقصده بـ"half-caste". وهذا الطلب - "Explain yuself / wha yu mean" - يتكرّر على امتداد القصيدة لازمةً، فيُلقي عبءَ الشرح على من استعمل الكلمة.

يستعمل Agard ثلاث مماثلاتٍ ليُري أنّ الخلطَ محتفىً به في كلّ مكانٍ إلّا في الهُويّة العِرقيّة. خلط Picasso الأحمر والأخضر - لم يصف أحدٌ فنّه بـ"half-caste". خلط Tchaikovsky مفاتيح البيانو السوداء والبيضاء - لم يصف أحدٌ موسيقاه بـ"half-caste". وخلطُ الطقس الإنجليزيّ بين شمسٍ وغيمٍ - لم يصف أحدٌ السماء بـ"half-caste".

ثمّ يُحرفي المتكلّمُ استعارةَ "half". لو كان نصفَ إنسانٍ لألقى نصفَ ظِلّ، وحَلَم نصفَ حُلم، ورأى بنصف عين، وأصغى بنصف أُذن. وتراكمُ الاستحالات الجسديّة يجعل المصطلحَ يبدو أسخف وأسخف.

تختم القصيدة بتحدٍّ قويّ. يأمر المتكلّمُ السامعَ بأن "come back tomorrow / wid de whole of yu eye" (وأن يُحضر كاملَ أُذنه وعقله). ولن يُشاركه "de other half / of my story" إلّا متى أقبل إنساناً كاملاً غيرَ مُتحيّز. وانقلابُ الموازين تامّ: السامعُ، لا المتكلّم، هو الناقص طوال الوقت.

المعنى الإجماليّ: "Half-Caste" قصيدةٌ تستعمل الفُكاهة والمفارقة واللهجة الكاريبيّة لمواجهة التحيّز العِرقيّ. يستردّ Agard كلمةً مهينة، ويكشف سخفها بالمماثلة والحرفنة، ثمّ ينقل السلطةَ في النهاية من الواسم إلى الموسوم.`,

  formAndStructureAr: `الشكل: شعرٌ حرّ - لا وزنَ منتظم ولا قافية. القصيدة مونولوغٌ دراميّ متّصل موجَّهٌ مباشرةً إلى سامع. وهذا يلائم أصلَها قصيدةَ أداءٍ ونبرتَها الحواريّة المواجِهة.

طول السطر: أسطرٌ قصيرة حادّة، كثيراً ما تتكوّن من كلماتٍ قليلة. وهذا يُولّد إيقاعاً متقطّعاً مُلِحّاً - كأنّ المتكلّم يَخِزُ السامعَ بأصبعه. وقِصَر الأسطر يحاكي كذلك أنماط الكلام المنطوق.

اللهجة: كُتبت القصيدةُ كلُّها بالكريول الكاريبيّ الإنجليزيّ - "yu"، "wid"، "dem"، "wha". اختيارٌ بنائيّ لا زخرفة. تُؤكّد اللهجةُ الهُويّةَ الثقافيّة وتقاوم هيمنةَ الفصحى الإنجليزيّة. وخلطُ اللغات يحاكي خلطَ الأعراق الذي تحتفي به القصيدة.

التكرار: "Explain yuself / wha yu mean" يتكرّر لازمةً، فيُولّد إحساساً بطلبٍ لا يهدأ. وكلمة "half" تتكرّر عشرات المرّات، كلّ مرّةٍ تجعلها أشدّ سخفاً.

البنية في ثلاث حركات:
• الحركة الأولى (الافتتاح): يُقدّم المتكلّمُ نفسَه بتواضعٍ متصنّع ويُعلن الموضوع.
• الحركة الثانية (الوسط): ثلاثُ مماثلاتٍ - Picasso، Tchaikovsky، الطقس الإنجليزيّ - تُري كلٌّ منها أنّ الخلطَ محتفىً به في الفنّ والموسيقى والطبيعة.
• الحركة الثالثة (الختام): حرفنةُ "half" (نصفُ ظِلّ، نصفُ حُلم، نصفُ عين) ثمّ التحدّي الختاميّ للسامع.

النبرة: تأدّبٌ متصنّع، مفارقة، مواجهة، فُكاهة، غضب. والفُكاهة جوهريّة - يجعل Agard السامعَ يضحك من سخف المصطلح، ثمّ يُحسّ بالغضب تحت الضحك.

غياب الترقيم والحروف الكبيرة: تستعمل القصيدة ترقيماً ضئيلاً ولا حروفَ كبيرة (إلّا في أسماء الأعلام). وهذا ينزع هرميّات نحو الفصحى الإنجليزيّة - فِعل مقاومةٍ لغويٍّ آخر.

الـ enjambment: تنساب الأسطرُ بعضُها في بعضٍ دون وقفات، فيتولّد إحساسٌ بكلامٍ سريعٍ لا يُقطع. لن يُسكَت المتكلّمُ ولن يُقاطَع.`,
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'The Tyger',
    poet: 'William Blake',
    href: '/igcse/edexcel/poetry/the-tyger',
    reason:
      'Both poems use questions as their primary technique - Blake asks unanswered questions about creation, Agard asks rhetorical questions that dismantle a racial label. Compare how each poet uses questions to different purposes: Blake to express awe, Agard to express anger.',
    themes: ['Questions', 'Challenge', 'Identity'],
  },
  {
    title: 'Piano',
    poet: 'D.H. Lawrence',
    href: '/igcse/edexcel/poetry/piano',
    reason:
      "Both poems explore identity and belonging. Lawrence mourns a lost childhood self; Agard defends a present adult self. Compare how each speaker's sense of identity is shaped by their past - Lawrence by memory, Agard by cultural heritage.",
    themes: ['Identity', 'Belonging', 'Memory'],
  },
  {
    title: 'If',
    poet: 'Rudyard Kipling',
    href: '/igcse/edexcel/poetry/if',
    reason:
      "Both poems are directly addressed to a listener. Kipling instructs his son in how to be a man; Agard instructs his listener in how to see a whole person. Compare the contrasting views of British identity - Kipling's imperial confidence and Agard's postcolonial challenge.",
    themes: ['British identity', 'Direct address', 'Power'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function HalfCastePage() {
  const tr = useT()
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          {tr('anth_text.back_to_anthology')}
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500/10">
            <BookOpen className="size-5 text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Half-Caste</h1>
            <p className="text-body-sm text-muted-foreground">
              John Agard &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              {tr('igcse.page.badge_edexcel_lit')}
            </Badge>
          </div>
        </div>
      </div>

      {/* Fair dealing notice */}
      <div className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Copyright notice:</strong> &quot;Half-Caste&quot; by
          John Agard is in copyright. Only short extracts (key phrases) are reproduced here for the
          purpose of criticism, review and study, in accordance with fair dealing provisions
          (Copyright, Designs and Patents Act 1988, s.30). The full poem is published by{' '}
          <strong className="text-foreground">Hodder Education</strong> in the
          <em> Edexcel International GCSE English Anthology (Issue 2, ISBN 978-1-446-93108-0)</em>.
          For the full text, refer to your Edexcel IGCSE anthology.
        </p>
      </div>

      {/* Teacher note: Caribbean creole spelling */}
      <div className="flex items-start gap-3 rounded-lg border border-purple-500/30 bg-purple-500/5 p-4">
        <BookOpen className="mt-0.5 size-4 shrink-0 text-purple-500" />
        <div className="text-xs leading-relaxed text-muted-foreground">
          <p className="mb-1">
            <strong className="text-foreground">Teacher note &mdash; on the spelling:</strong>
          </p>
          <p>
            Agard&apos;s Caribbean creole spelling (<strong>&quot;yu&quot;</strong> for
            &quot;you&quot;, <strong>&quot;wha&quot;</strong> for &quot;what&quot;,
            <strong> &quot;yuself&quot;</strong> for &quot;yourself&quot;) is{' '}
            <strong className="text-foreground">
              deliberate and central to the poem&apos;s meaning
            </strong>
            . Do not &quot;correct&quot; to Standard English &mdash; the creole is itself a
            political statement. The Edexcel IGCSE Anthology (Issue 2) preserves Agard&apos;s
            spelling, and students should quote it exactly as printed. &quot;Correcting&quot; the
            dialect in an essay loses marks for accuracy and misses the poem&apos;s argument that
            mixed languages, like mixed identities, are valid in their own right.
          </p>
        </div>
      </div>

      {/* Audit notice */}
      <div className="flex items-start gap-3 rounded-lg border border-sky-500/30 bg-sky-500/5 p-4">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-sky-500" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Page audited April 2026:</strong> Direct quotations
          from mid-poem analogies (Picasso, Tchaikovsky, weather, half-a-shadow, accumulating
          &quot;halves&quot;) and other passages we could not verify against a primary source have
          been replaced with paraphrases or pointers to the anthology. The well-attested opening
          (&ldquo;Excuse me / standing on one leg / I&rsquo;m half-caste&rdquo;), the refrain
          (&ldquo;Explain yuself / wha yu mean&rdquo;) and the closing lines (&ldquo;come back
          tomorrow / wid de whole of yu eye&rdquo; and &ldquo;de other half / of my story&rdquo;)
          are retained. Quote from your Edexcel IGCSE Anthology (Issue 2) for the exact wording of
          all other passages.
        </p>
      </div>

      <InteractivePoemViewer poem={poem} />

      <StudyTools textName="Half-Caste" textType="poem" examBoard="Edexcel" variant="compact" />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {tr('anth_text.section.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another from the anthology. These
          are strong pairings for Half-Caste.
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
    </div>
  )
}
