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
  title: 'When We Two Parted',
  poet: 'Lord Byron',
  lines: [
    {
      text: 'When we two parted',
      annotations: [
        {
          type: 'Tone',
          note: 'The abrupt, matter-of-fact opening establishes a tone of finality. The monosyllabic words create a blunt, clipped rhythm reflecting emotional restraint.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'In silence and tears,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Silence and tears" suggests the relationship ended with grief but also secrecy -- they could not publicly acknowledge their pain.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Half broken-hearted',
      annotations: [
        {
          type: 'Understatement',
          note: '"Half" is deliberately understated -- Byron minimises his pain, perhaps to protect himself or suggest the other person was less affected.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'To sever for years,',
      annotations: [
        {
          type: 'Structure',
          note: "The ABAB rhyme scheme and short lines create a tight, controlled form that mirrors Byron's emotional restraint.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Pale grew thy cheek and cold,',
      annotations: [
        {
          type: 'Imagery',
          note: 'Death imagery -- "pale" and "cold" foreshadow the death of the relationship and associate the lover with lifelessness.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Colder thy kiss;',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The cold kiss symbolises the loss of passion and warmth in their relationship. The comparative "colder" intensifies the sense of emotional withdrawal.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Truly that hour foretold',
      annotations: [
        {
          type: 'Foreshadowing',
          note: 'Byron suggests that even at the point of parting, there were signs that the relationship was doomed.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Sorrow to this.',
      annotations: [
        {
          type: 'Structure',
          note: 'The short, clipped line creates a sense of finality. "This" is ambiguous -- it could refer to his current pain or the present moment of writing.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: '' },
    {
      text: 'The dew of the morning',
      annotations: [
        {
          type: 'Pathetic fallacy',
          note: 'The dew could represent tears, connecting nature to human grief. Morning suggests a new beginning tainted by sorrow.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Sunk chill on my brow--',
      annotations: [
        {
          type: 'Sensory imagery',
          note: 'Physical coldness mirrors emotional coldness. The "brow" suggests shame and guilt weighing on the speaker.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'It felt like the warning',
      annotations: [
        {
          type: 'Tone shift',
          note: 'The sense of foreboding intensifies -- nature itself seemed to warn Byron of the pain to come.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Of what I feel now.',
      annotations: [
        {
          type: 'Temporal shift',
          note: 'Byron shifts between past and present, showing the pain has endured. The past event continues to haunt him.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Thy vows are all broken,',
      annotations: [
        {
          type: 'Accusation',
          note: 'Direct accusation -- the lover broke their promises. "All" emphasises the totality of the betrayal.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And light is thy fame:',
      annotations: [
        {
          type: 'Double meaning',
          note: '"Light" can mean both insubstantial (her reputation is damaged) and frivolous (she treats love lightly). A subtle public shaming.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I hear thy name spoken,',
      annotations: [
        {
          type: 'Context',
          note: "Byron's lover Lady Frances Webster became the subject of public gossip. Hearing her name spoken caused him shame by association.",
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And share in its shame.',
      annotations: [
        {
          type: 'Key theme',
          note: 'Secrecy and shame are central -- Byron cannot publicly acknowledge his grief because the affair was secret, intensifying his suffering.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    {
      text: 'They name thee before me,',
      annotations: [
        {
          type: 'Dramatic irony',
          note: "Others speak of her without knowing Byron's connection. He must hide his reaction, adding layers of pain and isolation.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'A knell to mine ear;',
      annotations: [
        {
          type: 'Metaphor',
          note: 'A "knell" is a funeral bell -- hearing her name is like a death toll, symbolising the death of their love and his ongoing grief.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "A shudder comes o'er me--",
      annotations: [
        {
          type: 'Physical reaction',
          note: 'An involuntary physical response shows that Byron cannot control his grief. The body betrays what the mind tries to suppress.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Why wert thou so dear?',
      annotations: [
        {
          type: 'Rhetorical question',
          note: 'The rhetorical question reveals vulnerability beneath the controlled exterior. Byron questions why he ever loved so deeply.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'They know not I knew thee,',
      annotations: [
        {
          type: 'Secrecy',
          note: 'The repetition of "know/knew" emphasises the theme of hidden knowledge. The secret affair means his grief must also be secret.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Who knew thee too well:--',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"Too well" is deliberately ambiguous -- it could mean he knew her intimately (sexually) or that he understood her true, faithless nature.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Long, long shall I rue thee,',
      annotations: [
        {
          type: 'Repetition',
          note: 'The repetition of "long" emphasises the enduring nature of his regret. The drawn-out sound mirrors the drawn-out suffering.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Too deeply to tell.',
      annotations: [
        {
          type: 'Understatement',
          note: 'The depth of feeling is inexpressible -- language itself is inadequate to convey his grief. This restraint makes the emotion more powerful.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: '' },
    {
      text: 'If I should meet thee',
      annotations: [
        {
          type: 'Conditional',
          note: 'The hypothetical "if" creates tension about a potential future encounter. The poem becomes forward-looking.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'After long years,',
      annotations: [
        {
          type: 'Cyclical structure',
          note: 'Echoes "to sever for years" from stanza one, creating a circular structure that traps the speaker in perpetual grief.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'How should I greet thee?--',
      annotations: [
        {
          type: 'Rhetorical question',
          note: 'A genuine dilemma -- how do you acknowledge someone you loved secretly? The question has no satisfactory answer.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'With silence and tears.',
      annotations: [
        {
          type: 'Cyclical ending',
          note: 'The final line echoes line 2, creating a circular structure. Nothing has changed -- the speaker is trapped in the same grief. The poem ends as it began.',
          color: '#ef4444',
        },
      ],
    },
  ],
  context: `<p><strong>Written in 1816</strong>, this poem reflects Byron's secret affair, widely believed to be with <strong>Lady Frances Webster</strong>. The affair had to remain hidden due to social conventions, meaning Byron could not publicly express his grief when it ended.</p>
<p>The poem's emotional restraint is characteristic of Byron's style -- he channels deep feeling through controlled, tight verse forms rather than emotional outpouring. The <strong>Romantic era</strong> valued intense personal emotion, but Byron often expressed this through irony and understatement.</p>
<p>The biographical context adds layers: Byron himself was notorious for scandalous affairs, yet here he presents himself as the wounded party. The poem explores how <strong>secrecy intensifies suffering</strong> -- he cannot share his grief with anyone.</p>`,
  contextAr: `<p><strong>القصيدة مكتوبة سنة 1816</strong>، وتعكس علاقة سرّية لـByron، يعتقد على نطاق واسع إنها كانت مع <strong>Lady Frances Webster</strong>. العلاقة كان لازم تبقى مخفيّة بسبب الأعراف الاجتماعية في تلك الفترة، يعني Byron ما قدر يعبّر عن حزنه بشكل علني لمّا انتهت.</p>
<p>التحفّظ العاطفي في القصيدة من السمات المميّزة لأسلوب Byron — هو يصرّف العاطفة العميقة عبر قوالب شعرية مضبوطة، مو عبر فيض عاطفي صريح. <strong>العصر الرومانسي</strong> كان يقدّر العاطفة الفرديّة الكثيفة، بس Byron كثير ما يعبّر عنها عبر السخريّة والـunderstatement.</p>
<p>السياق الشخصي يضيف طبقات: Byron نفسه كان معروف بفضائحه العاطفية، ومع ذلك هنا يقدّم نفسه على إنه الطرف المظلوم. القصيدة تستكشف كيف إن <strong>السرّية تكبّر الألم</strong> — ما يقدر يشارك حزنه مع أحد.</p>`,
  summary: `The speaker reflects on a painful parting from a former lover. The relationship was secret, and its ending brought silence rather than public mourning. He recalls the coldness of their final kiss and the signs that foreshadowed future sorrow.\n\nIn the present, hearing the lover's name spoken by others causes him physical pain -- like a funeral bell. He must hide his reaction because nobody knows of their connection. The poem ends with a hypothetical future meeting, but nothing has changed: he would greet them the same way they parted -- with silence and tears.\n\nThe circular structure reinforces the idea that the speaker is trapped in grief, unable to move forward or find closure.`,
  summaryAr: `المتكلّم (Byron) يتأمّل في فراق مؤلم عن حبيبته السابقة. العلاقة كانت سرّيّة، ونهايتها جابت صمت بدل العزاء العلني. يتذكّر برودة آخر قبلة بينهم، والعلامات اللي توقّعت الحزن اللي راح يعيشه.\n\nفي الحاضر، لمّا الناس يذكرون اسمها، يحسّ بألم جسدي — مثل صوت ناقوس جنازة. ولازم يخفي ردة فعله لأن ما حد يدري عن علاقتهم. القصيدة تنتهي بمشهد افتراضي للقاء مستقبلي، بس ما تغيّر شي: راح يستقبلها بنفس الطريقة اللي افترقوا بها — "with silence and tears".\n\nالبنية الدائرية تأكّد إن المتكلّم محاصر في حزنه، ما يقدر يمشي خطوة لقدّام ولا يلقى خاتمة.`,
  formAndStructure: `Form: Four stanzas of eight lines each, with a tight ABAB rhyme scheme throughout.\n\nShort lines: Predominantly monosyllabic and disyllabic words create a clipped, restrained rhythm that mirrors emotional suppression.\n\nCyclical structure: The final line ("With silence and tears") echoes the second line ("In silence and tears"), creating a circular poem that traps the speaker in perpetual grief.\n\nRhyme scheme: The regular ABAB pattern creates a sense of control and formality, contrasting with the raw emotion beneath.\n\nEnjambment is minimal -- most lines are end-stopped, creating a halting, measured pace as if the speaker is carefully controlling each word.\n\nTemporal shifts: The poem moves between past (the parting), present (hearing the name), and future (hypothetical meeting), showing grief transcends time.`,
  formAndStructureAr: `Form (الشكل): أربع مقاطع، كل مقطع ثمانية أبيات، بنظام قافية ABAB ثابت طوال القصيدة.\n\nأبيات قصيرة: معظم الكلمات أحاديّة المقطع أو ثنائيّة، تخلق إيقاع مقتطف ومتحفّظ يعكس كبت العاطفة.\n\nالبنية الدائرية (Cyclical structure): البيت الأخير "With silence and tears" يردّد البيت الثاني "In silence and tears"، فيخلق قصيدة دائرية تحبس المتكلّم في حزن لا ينتهي.\n\nنظام القافية: نمط ABAB المنتظم يخلق إحساس بالسيطرة والرسميّة، يتناقض مع العاطفة الخام تحت السطح.\n\nEnjambment قليل — معظم الأبيات end-stopped (تنتهي بعلامة ترقيم)، وهذا يخلق إيقاع متقطّع وحذِر، كأن المتكلّم يقيس كل كلمة قبل ما يقولها.\n\nالانتقالات الزمنيّة (Temporal shifts): القصيدة تتحرّك بين الماضي (لحظة الفراق)، والحاضر (سماع الاسم)، والمستقبل (اللقاء الافتراضي)، تبيّن إن الحزن يتجاوز الزمن.`,
  keyQuotes: [
    {
      quote: 'In silence and tears',
      analysis:
        'The secrecy of the relationship means the grief must also be silent. "Tears" shows genuine emotion despite the restraint. This phrase bookends the poem, emphasising the cyclical, inescapable nature of the pain.',
      themes: ['Secrecy', 'Grief', 'Memory'],
      analysisAr:
        'سرّية العلاقة تعني إن الحزن لازم يكون صامت بعد. كلمة "tears" تكشف عاطفة حقيقيّة، رغم كل التحفّظ. هذا التركيب يأطّر القصيدة من بدايتها لنهايتها، ويأكّد على طبيعة الألم الدائريّة اللي ما تطلع منها.',
      themesAr: ['السرّية', 'الحزن', 'الذكرى'],
    },
    {
      quote: 'Half broken-hearted',
      analysis:
        'The understatement of "half" is deliberately ambiguous -- is he minimising his own pain, or suggesting the lover was less affected? Either reading reveals emotional complexity and self-protection.',
      themes: ['Heartbreak', 'Understatement'],
      analysisAr:
        'الـunderstatement في كلمة "half" مقصود غامض — هل المتكلّم يقلّل من ألمه هو، أم يلمّح إن حبيبته ما تأثّرت بنفس القدر؟ القراءتين تكشفان تعقيد عاطفي ودفاع عن النفس.',
      themesAr: ['كسر القلب', 'الـUnderstatement'],
    },
    {
      quote: 'Pale grew thy cheek and cold',
      analysis:
        'Death imagery associates the lover with lifelessness. The physical description suggests the emotional warmth has literally drained from the relationship.',
      themes: ['Death imagery', 'Loss of love'],
      analysisAr:
        'صور الموت تربط الحبيبة بانعدام الحياة. الوصف الجسدي يلمّح إن الدفء العاطفي حرفياً انسحب من العلاقة.',
      themesAr: ['صور الموت', 'فقد الحب'],
    },
    {
      quote: 'Colder thy kiss',
      analysis:
        'The comparative adjective intensifies the coldness. A kiss should be warm and intimate, but this one signals the death of passion and emotional withdrawal.',
      themes: ['Loss of passion', 'Betrayal'],
      analysisAr:
        'صيغة التفضيل (comparative) "colder" تكثّف البرودة. القبلة لازم تكون دافية وحميمة، بس هذي القبلة تأشّر بموت الشغف وانسحاب عاطفي.',
      themesAr: ['فقد الشغف', 'الخيانة'],
    },
    {
      quote: 'A knell to mine ear',
      analysis:
        "A knell is a funeral bell -- hearing the lover's name is equated with death. The metaphor transforms everyday conversation into a source of profound grief.",
      themes: ['Death imagery', 'Memory', 'Grief'],
      analysisAr:
        'الـ"knell" هو ناقوس الجنازة — سماع اسم حبيبته يساوي عند المتكلّم سماع خبر موت. الاستعارة تحوّل المحادثة اليومية لمصدر حزن عميق.',
      themesAr: ['صور الموت', 'الذكرى', 'الحزن'],
    },
    {
      quote: 'They know not I knew thee',
      analysis:
        'The juxtaposition of "know" and "knew" emphasises secrecy. The plosive "k" sounds create a hard, bitter tone. Others\' ignorance intensifies his isolation.',
      themes: ['Secrecy', 'Isolation'],
      analysisAr:
        'التضاد بين "know" و"knew" يأكّد على السرّية. أصوات الـplosive في حرف "k" تخلق نبرة قاسية ومُرّة. وجهل الناس بالعلاقة يكبّر إحساس المتكلّم بالعزلة.',
      themesAr: ['السرّية', 'العزلة'],
    },
    {
      quote: 'Long, long shall I rue thee',
      analysis:
        'Repetition of "long" draws out the sound, mirroring the enduring nature of regret. "Rue" is an archaic, formal word that adds weight and gravity.',
      themes: ['Regret', 'Time', 'Memory'],
      analysisAr:
        'تكرار كلمة "long" يطوّل الصوت، يعكس طبيعة الندم اللي ما ينتهي. وكلمة "rue" قديمة ورسميّة، تضيف ثقل ووقار للعبارة.',
      themesAr: ['الندم', 'الوقت', 'الذكرى'],
    },
    {
      quote: 'With silence and tears',
      analysis:
        'The exact repetition of the opening creates a circular structure. Nothing has changed; the speaker is condemned to repeat the same grief. The poem offers no resolution or closure.',
      themes: ['Cyclical grief', 'Secrecy', 'Hopelessness'],
      analysisAr:
        'التكرار الحرفي للافتتاحية يخلق بنية دائرية. ما تغيّر شي؛ المتكلّم محكوم عليه يعيد نفس الحزن. القصيدة ما تقدّم حل ولا خاتمة.',
      themesAr: ['الحزن الدائري', 'السرّية', 'فقدان الأمل'],
    },
  ],
  languageDevices: [
    {
      device: 'Monosyllabic diction',
      example: 'When we two parted',
      effect:
        "The predominantly one-syllable words create a blunt, stark rhythm that reflects emotional restraint and the speaker's inability to elaborate on his pain.",
      lineRef: 0,
      effectAr:
        'الكلمات اللي معظمها أحاديّة المقطع تخلق إيقاع حاد وصارم، يعكس كبت العاطفة وعجز المتكلّم عن التوسّع في ألمه.',
    },
    {
      device: 'Pathetic fallacy',
      example: 'The dew of the morning / Sunk chill on my brow',
      effect:
        'Nature mirrors human emotion -- the cold dew represents the chill of grief. The natural world becomes a reflection of internal suffering.',
      lineRef: 9,
      effectAr:
        'الطبيعة تعكس العاطفة البشريّة — الندى البارد يمثّل برودة الحزن. والعالم الطبيعي يتحوّل لمرآة للمعاناة الداخلية.',
    },
    {
      device: 'Metaphor (death)',
      example: 'A knell to mine ear',
      effect:
        "Hearing the lover's name is compared to a funeral bell, transforming ordinary conversation into a death knell for their relationship. Elevates personal grief to something solemn and final.",
      lineRef: 19,
      effectAr:
        'سماع اسم الحبيبة يتشابه مع صوت ناقوس الجنازة، فيحوّل المحادثة العاديّة لإعلان موت العلاقة. ويرفع الحزن الشخصي لمستوى نهائي ومهيب.',
    },
    {
      device: 'Repetition',
      example: 'Long, long shall I rue thee',
      effect:
        'The repeated "long" elongates the line rhythmically, physically enacting the drawn-out nature of regret and making the reader feel the weight of enduring pain.',
      lineRef: 24,
      effectAr:
        'تكرار كلمة "long" يطوّل البيت إيقاعياً، ويجسّد فعلياً طبيعة الندم اللي يمتد لسنوات، ويخلّي القارئ يحسّ بثقل الألم المستمر.',
    },
    {
      device: 'Cyclical structure',
      example: 'In silence and tears / With silence and tears',
      effect:
        'The near-identical opening and closing lines create a circular poem, suggesting the speaker is trapped in a cycle of grief with no possibility of escape or resolution.',
      lineRef: 30,
      effectAr:
        'افتتاحية وخاتمة شبه متطابقتين تخلقان قصيدة دائريّة، تلمّح إن المتكلّم محاصر في دوّامة حزن بدون إمكانيّة هروب ولا حل.',
    },
    {
      device: 'Rhetorical question',
      example: 'Why wert thou so dear?',
      effect:
        'The unanswerable question reveals vulnerability beneath the controlled surface. Byron questions the very nature of love, finding no rational explanation for the depth of feeling.',
      lineRef: 21,
      effectAr:
        'السؤال اللي ما له إجابة يكشف هشاشة تحت السطح المضبوط. Byron يسأل عن جوهر الحب نفسه، وما يلقى تفسير عقلاني لعمق الإحساس.',
    },
    {
      device: 'Understatement',
      example: 'Half broken-hearted',
      effect:
        '"Half" deliberately minimises the pain, characteristic of Byron\'s restrained style. The understatement paradoxically intensifies the emotion by implying what remains unsaid.',
      lineRef: 2,
      effectAr:
        'كلمة "half" تقلّل من حدّة الألم بشكل متعمّد، وهذي من السمات المميّزة لأسلوب Byron المتحفّظ. والـunderstatement، بمفارقة، يكبّر العاطفة لأنه يلمّح بما يبقى مسكوت عنه.',
    },
    {
      device: 'Semantic field of cold',
      example: 'Pale... cold... Colder... chill',
      effect:
        'A sustained semantic field of coldness runs through the poem, contrasting with the expected warmth of love and creating an atmosphere of emotional death.',
      lineRef: 4,
      effectAr:
        'حقل دلالي (semantic field) متواصل من البرودة يسري في القصيدة كلها، يتناقض مع الدفء المتوقّع من الحب، ويخلق جو من الموت العاطفي.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'wwtp-1',
    question: 'What is the poem about?',
    type: 'multiple-choice',
    options: [
      'A happy reunion with a former lover',
      'The pain of a secret affair ending and the lasting grief it causes',
      'A letter to a future partner',
      'A celebration of marriage',
    ],
    correctIndex: 1,
    explanation:
      'Byron reflects on the painful end of a secret affair. The secrecy means he cannot publicly grieve, intensifying his suffering. The poem traces past, present, and imagined future.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'wwtp-2',
    question: 'What does the cyclical structure (ending with "silence and tears") suggest?',
    type: 'multiple-choice',
    options: [
      'The speaker has moved on',
      'The speaker is trapped in perpetual grief with no resolution',
      'The relationship has been repaired',
      'Time heals all wounds',
    ],
    correctIndex: 1,
    explanation:
      'The final line echoes the opening, creating a circular poem. Nothing has changed — the speaker is condemned to repeat the same silence and tears, with no escape from grief.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'wwtp-3',
    question: 'What does "A knell to mine ear" mean?',
    type: 'multiple-choice',
    options: [
      'A pleasant sound',
      "Hearing the lover's name is like a funeral bell — it signals the death of their love",
      'A musical instrument',
      'A whisper',
    ],
    correctIndex: 1,
    explanation:
      'A "knell" is a funeral bell. Hearing the lover\'s name in ordinary conversation becomes an agonising reminder of loss, transforming everyday moments into experiences of grief.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'wwtp-4',
    question: 'What is the effect of "Half broken-hearted"?',
    type: 'multiple-choice',
    options: [
      "It shows the speaker wasn't very upset",
      'The understatement paradoxically intensifies the emotion — Byron minimises his pain to protect himself',
      'It means exactly what it says literally',
      'It shows the relationship was unimportant',
    ],
    correctIndex: 1,
    explanation:
      '"Half" is deliberate understatement. Rather than diminishing the pain, it reveals Byron\'s characteristic restraint — the unsaid half is more powerful than what is expressed.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'wwtp-5',
    question: "Why is secrecy so important to the poem's meaning?",
    type: 'multiple-choice',
    options: [
      'It makes the poem mysterious',
      'Secrecy intensifies suffering — the speaker cannot publicly acknowledge his grief, making it inescapable and isolating',
      'It is a minor detail',
      'The speaker is ashamed of writing poetry',
    ],
    correctIndex: 1,
    explanation:
      "Because the affair was secret, Byron's grief must also be hidden. He cannot share it with anyone. This double secrecy — of the love and of the loss — creates profound isolation.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'wwtp-6',
    question: 'What semantic field runs through the poem?',
    type: 'multiple-choice',
    options: [
      'Warmth and fire',
      'Coldness — pale, cold, colder, chill',
      'Colour and brightness',
      'Music and sound',
    ],
    correctIndex: 1,
    explanation:
      'A sustained semantic field of coldness pervades the poem — "pale", "cold", "Colder", "chill". This contrasts with the expected warmth of love and creates an atmosphere of emotional death.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'wwtp-7',
    question: 'When was the poem written and what is its context?',
    type: 'multiple-choice',
    options: [
      '1850 during the Victorian era',
      "1816 — reflecting Byron's secret affair, likely with Lady Frances Webster",
      '1914 during WWI',
      '1790 during the French Revolution',
    ],
    correctIndex: 1,
    explanation:
      "Written in 1816, the poem is believed to reflect Byron's secret affair with Lady Frances Webster. The affair had to remain hidden, meaning Byron could not publicly express his grief when it ended.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'wwtp-8',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'Free verse with no regular pattern',
      'Four eight-line stanzas with a tight ABAB rhyme scheme and short, clipped lines',
      'A sonnet',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      "The poem uses four eight-line stanzas with regular ABAB rhyme and predominantly monosyllabic words. The tight, controlled form mirrors Byron's emotional restraint.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'wwtp-9',
    question: 'How does the shift between past and present tenses function?',
    type: 'multiple-choice',
    options: [
      'It is inconsistent writing',
      'It shows grief transcends time — the past event continues to haunt the present, proving the pain is unresolved',
      'It creates a happy memory',
      'It moves the poem forward chronologically',
    ],
    correctIndex: 1,
    explanation:
      'Byron shifts between past (the parting), present (hearing the name), and hypothetical future (a potential meeting). This temporal movement shows that grief is not confined to one moment — it bleeds across time.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'wwtp-10',
    question:
      'Which poem from the Love & Relationships anthology best pairs with When We Two Parted?',
    type: 'multiple-choice',
    options: [
      'Singh Song! by Nagra',
      'Neutral Tones by Thomas Hardy',
      'Climbing My Grandfather by Waterhouse',
      'Follower by Heaney',
    ],
    correctIndex: 1,
    explanation:
      'Both When We Two Parted and Neutral Tones explore the painful end of love with cold, bleak imagery and cyclical structures. Both speakers are trapped in memories of failed relationships.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'When We Two Parted explores secret love, the pain of betrayal, the isolation of hidden grief, and the inescapable nature of memory.',
    keyPoints: [
      'Secrecy intensifies suffering — grief that cannot be shared is doubly painful',
      'Betrayal and broken vows — "Thy vows are all broken"',
      'Cyclical, inescapable grief — the poem ends where it began',
      'Memory as torment — hearing the name causes physical pain',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Byron uses a semantic field of coldness, death imagery, understatement, and monosyllabic diction to convey restrained but profound grief.',
    keyPoints: [
      '"Pale... cold... Colder... chill" — sustained coldness imagery',
      '"A knell to mine ear" — funeral bell metaphor for hearing her name',
      '"Half broken-hearted" — understatement masking deep pain',
      'Monosyllabic words create blunt, clipped emotional restraint',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four regular stanzas with ABAB rhyme and cyclical structure — the controlled form mirrors emotional suppression while the circular ending traps the speaker in grief.',
    keyPoints: [
      'Cyclical structure — ends with "silence and tears" echoing the opening',
      'Short, clipped lines — emotional restraint enacted in form',
      'Temporal shifts — past, present, and future show grief transcends time',
      'ABAB rhyme — controlled form contrasts with raw emotion beneath',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Byron present the pain of lost love in When We Two Parted?',
  'Compare how the end of a relationship is presented in When We Two Parted and one other poem from the anthology.',
  "How does Byron use language and structure to convey the speaker's grief?",
]

const COMPARE_POEMS = [
  {
    title: 'Neutral Tones',
    href: '/revision/poetry/love-and-relationships/neutral-tones',
    reason:
      'Both explore the painful end of love with cold, bleak imagery and cyclical structures.',
  },
  {
    title: "Love's Philosophy",
    href: '/revision/poetry/love-and-relationships/loves-philosophy',
    reason:
      "Contrasting perspective -- Shelley celebrates love's potential while Byron mourns its death.",
  },
  {
    title: "Porphyria's Lover",
    href: '/revision/poetry/love-and-relationships/porphyrias-lover',
    reason:
      'Both explore secret, forbidden relationships but with vastly different responses to loss.',
  },
]

export default function WhenWeTwoPartedPage() {
  return (
    <div className="space-y-6">
      <CourseJsonLd
        name="When We Two Parted by Lord Byron — Analysis & Annotations"
        description="Line-by-line analysis of When We Two Parted with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'When We Two Parted',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/when-we-two-parted',
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
          <h1 className="text-heading-lg font-heading text-foreground">When We Two Parted</h1>
          <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20">
            Love &amp; Relationships
          </Badge>
          <Badge variant="outline">AQA Anthology</Badge>
        </div>
      </div>

      <StudyTools
        textName="When We Two Parted"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />

      <InlineStudyEngine
        textName="When We Two Parted"
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
