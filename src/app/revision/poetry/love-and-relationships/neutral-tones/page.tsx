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
  title: 'Neutral Tones',
  poet: 'Thomas Hardy',
  lines: [
    {
      text: 'We stood by a pond that winter day,',
      annotations: [
        {
          type: 'Setting',
          note: 'The pond and winter establish a cold, still, lifeless setting. Water often symbolises emotion, but this pond is stagnant -- reflecting the dead relationship.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the sun was white, as though chidden of God;',
      annotations: [
        {
          type: 'Pathetic fallacy',
          note: 'The sun -- normally warm and life-giving -- is drained of colour ("white") and seems punished by God ("chidden"). Nature itself has lost its vitality, mirroring the loveless relationship.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And a few leaves lay on the starving sod,',
      annotations: [
        {
          type: 'Personification',
          note: '"Starving sod" personifies the ground as malnourished. Everything in the landscape is depleted and suffering, creating a pathetic fallacy for the dying relationship.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'They had fallen from an ash, and were gray.',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Ash" works as a pun -- both the tree species and the residue of fire (passion burned out). "Gray" continues the colourless palette that gives the poem its title.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'Your eyes on me were as eyes that rove',
      annotations: [
        {
          type: 'Simile',
          note: 'The lover\'s eyes "rove" -- they wander, unable to focus on the speaker. This suggests disinterest, detachment, or searching for something better.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Over tedious riddles of years ago;',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The speaker has become a "tedious riddle" -- something puzzling but boring, no longer worth solving. The relationship has become an obligation rather than a joy.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And some words played between us to and fro',
      annotations: [
        {
          type: 'Minimisation',
          note: '"Some words" is deliberately vague -- the actual content is unimportant. "Played" suggests the words are empty, performative, going through the motions without meaning.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'On which lost the more by our love.',
      annotations: [
        {
          type: 'Ambiguity',
          note: 'A deliberately ambiguous line -- who lost more from their love? Or perhaps: which words lost meaning because of their love? The confusion mirrors the tangled, unresolvable nature of failed love.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: '' },
    {
      text: 'The smile on your mouth was the deadest thing',
      annotations: [
        {
          type: 'Oxymoron',
          note: 'A smile should signify life and warmth, but this is "the deadest thing" -- the most extreme form of lifelessness. The oxymoron captures the grotesque falseness of performed emotion.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Alive enough to have strength to die;',
      annotations: [
        {
          type: 'Paradox',
          note: 'A devastating paradox: the smile has just enough life left to complete the process of dying. Love is in its death throes, not yet dead but certainly not alive.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And a grin of bitterness swept thereby',
      annotations: [
        {
          type: 'Shift',
          note: '"Grin of bitterness" replaces the dead smile -- beneath the performed pleasantness is genuine bitterness. "Swept" suggests it passed briefly across her face, revealing truth.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Like an ominous bird a-wing....',
      annotations: [
        {
          type: 'Simile',
          note: 'The bitterness is compared to a bird of ill omen -- something that passes overhead casting a shadow. The ellipsis creates a trailing, unfinished quality, as if the memory still haunts.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'Since then, keen lessons that love deceives,',
      annotations: [
        {
          type: 'Temporal shift',
          note: '"Since then" shifts to the present, showing the lasting impact. "Keen lessons" -- sharp, painful learnings. Love is characterised as fundamentally deceptive.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And wrings with wrong, have shaped to me',
      annotations: [
        {
          type: 'Alliteration',
          note: 'The harsh "w" sounds in "wrings with wrong" create a physically painful quality. Love is personified as something that twists and tortures.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Your face, and the God-curst sun, and a tree,',
      annotations: [
        {
          type: 'List',
          note: 'The three images from the opening -- face, sun, tree -- return, but now distorted by painful memory. "God-curst" intensifies the earlier "chidden" -- the sun is now actively cursed.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And a pond edged with grayish leaves.',
      annotations: [
        {
          type: 'Cyclical ending',
          note: 'The poem returns to its opening image -- the pond and grey leaves. The circular structure suggests the speaker is trapped in this memory, unable to escape or move beyond it.',
          color: '#ef4444',
        },
      ],
    },
  ],
  context: `<p><strong>Thomas Hardy (1840-1928)</strong> wrote this poem in <strong>1867</strong>, though it was not published until 1898 in <em>Wessex Poems</em>. It is one of his earliest poems and reflects personal experience of failed love.</p>
<p>Hardy is associated with <strong>pessimism and determinism</strong> -- a worldview in which humans are subject to forces beyond their control, including the inevitable failure of love. His work often challenges the <strong>Victorian idealisation of romantic love</strong>.</p>
<p>The poem reflects Hardy's belief that love is inherently <strong>deceptive</strong> -- it promises joy but delivers suffering. This aligns with the broader <strong>late Victorian disillusionment</strong> with Romantic ideals.</p>
<p>Hardy was also influenced by <strong>Darwin's theory of evolution</strong>, which suggested an indifferent universe with no divine plan. The "God-curst sun" reflects a world where nature is not benevolent but hostile or uncaring.</p>`,
  contextAr: `<p><strong>Thomas Hardy (1840–1928)</strong> كتب هالقصيدة في <strong>1867</strong>، بس ما نشرها إلا في 1898 في ديوان <em>Wessex Poems</em>. هي من أوّل قصائده، وتعكس تجربة شخصية في فشل الحب.</p>
<p>Hardy مرتبط بنظرة <strong>التشاؤم والحتميّة</strong> — رؤية للعالم البشر فيها خاضعين لقوى أكبر منهم، منها الفشل الحتمي للحب. أعماله غالباً تحدّت <strong>المثاليّة الفيكتورية للحب الرومانسي</strong>.</p>
<p>القصيدة تعكس قناعة Hardy بإن الحب في جوهره <strong>خدّاع</strong> — يوعد بالفرح بس يوصل المعاناة. هذي القناعة تتماشى مع <strong>خيبة أمل أواخر العصر الفيكتوري</strong> من المثل الرومانسية.</p>
<p>Hardy كمان كان متأثّر بـ<strong>نظرية التطور لـDarwin</strong>، اللي اقترحت إن الكون غير مبالي وما فيه خطة إلهية. عبارة "God-curst sun" تعكس عالم الطبيعة فيه ما تكون رحيمة، بل عدائيّة أو غير مبالية.</p>`,
  summary: `The speaker recalls standing by a pond on a winter day with a former lover. The landscape is drained of colour -- a white sun, grey leaves, starving ground. Everything reflects the lifelessness of their dying relationship.\n\nThe lover's eyes wander with disinterest. Empty words pass between them. The lover's smile is described as "the deadest thing" -- a devastating oxymoron that captures performed affection masking genuine bitterness.\n\nIn the final stanza, the speaker reflects on what this experience taught them: that love deceives and causes pain. The poem returns to its opening images -- face, sun, tree, pond -- showing the speaker is trapped in a cycle of painful memory with no escape or resolution.`,
  summaryAr: `المتكلّم (ذكر) يتذكّر يوم وقف يم بِركة في يوم شتوي مع حبيبته (أنثى) السابقة. المنظر مسحوب منه اللون — شمس بيضاء، أوراق رماديّة، أرض جوعى. كل شي يعكس انعدام الحياة في علاقتهم المحتضرة.\n\nعيون الحبيبة (أنثى) تطوف بدون اهتمام. كلمات فاضية تمر بينهم. ابتسامتها توصف بإنها "the deadest thing" — تناقض موجع يلتقط مظهر العاطفة المؤدّى الذي يخفي مرارة حقيقيّة.\n\nفي المقطع الأخير، المتكلّم (ذكر) يتأمّل في الدرس اللي علّمته هالتجربة: إن الحب يخدع ويسبّب الألم. القصيدة ترجع لصورها الافتتاحيّة — الوجه، الشمس، الشجرة، البِركة — وتبيّن إن المتكلّم (ذكر) محاصر في دورة من الذكرى المؤلمة بدون مفرّ ولا حلّ.`,
  formAndStructure: `Form: Four quatrains (four-line stanzas) with a regular structure that creates an appearance of order and control, belying the emotional devastation within.\n\nRhyme scheme: ABBA -- the enclosed/envelope rhyme scheme mirrors the poem's cyclical structure and the speaker's sense of entrapment. The first and last lines of each stanza rhyme, creating a closed, inescapable pattern.\n\nCyclical structure: The final stanza returns to the images of the first (pond, sun, tree, leaves), showing the speaker is trapped in a loop of painful memory. No progress or healing has occurred.\n\nColour palette: The poem is deliberately drained of colour -- white, grey, neutral. The "neutral tones" of the title refer both to the emotional flatness and the visual bleakness.\n\nTemporal structure: Stanzas 1-3 describe the past event; stanza 4 shifts to the present, showing the lasting psychological damage.\n\nEllipsis: The trailing dots after "a-wing...." create an unfinished, haunting quality, suggesting the memory refuses to end cleanly.`,
  formAndStructureAr: `Form: أربع رباعيّات (مقاطع من أربعة أبيات) ببنية منتظمة، تخلق مظهر من النظام والسيطرة، يخفي خلفه الدمار العاطفي اللي بداخل القصيدة.\n\nRhyme scheme: ABBA — نظام القافية المغلق/الظرفي (envelope) يحاكي البنية الدوريّة للقصيدة وإحساس المتكلّم (ذكر) بالاحتجاز. البيتان الأوّل والأخير من كل مقطع يتقافيان، فيخلقان نمط مقفول ما له مفر.\n\nالبنية الدوريّة: المقطع الأخير يرجع لصور المقطع الأوّل (البِركة، الشمس، الشجرة، الأوراق)، فيبيّن إن المتكلّم (ذكر) محاصر في حلقة من الذكرى المؤلمة. ما فيه تقدّم ولا شفاء.\n\nلوحة الألوان: القصيدة مسحوب منها اللون عن قصد — أبيض، رمادي، محايد. عبارة "neutral tones" في العنوان تشير في نفس الوقت لرتابة العاطفة وقتامة المنظر.\n\nالبنية الزمنيّة: المقاطع 1–3 توصف الحدث الماضي؛ المقطع 4 ينتقل للحاضر، فيبيّن الضرر النفسي اللي يستمر.\n\nنقاط الحذف (Ellipsis): النقاط اللي تتعلّق بعد "a-wing...." تخلق إحساس بعدم اكتمال ومطاردة، وتوحي إن الذكرى ترفض إنها تنتهي بشكل نظيف.`,
  keyQuotes: [
    {
      quote: 'the sun was white, as though chidden of God',
      analysis:
        'The sun is punished and drained of warmth. Hardy creates a world where even God is hostile, and nature offers no comfort. The religious language suggests cosmic disapproval.',
      themes: ['Pathetic fallacy', 'Religion', 'Bleakness'],
      analysisAr:
        'الشمس معاقبة ومسحوب منها الدفء. Hardy يخلق عالم حتى الله فيه عدائي، والطبيعة ما تقدّم أي راحة. اللغة الدينيّة توحي بإن الكون نفسه يستهجن المشهد.',
      themesAr: ['Pathetic fallacy', 'الدين', 'القتامة'],
    },
    {
      quote: 'starving sod',
      analysis:
        'Personification presents the earth itself as malnourished. The ground mirrors the emotional starvation of the relationship -- both are depleted and dying.',
      themes: ['Nature', 'Depletion', 'Suffering'],
      analysisAr:
        'التشخيص يقدّم الأرض نفسها على إنها سيّئة التغذية. الأرض تعكس المجاعة العاطفيّة في العلاقة — كلاهما منهك ويموت.',
      themesAr: ['الطبيعة', 'النضوب', 'المعاناة'],
    },
    {
      quote: 'fallen from an ash, and were gray',
      analysis:
        'The ash tree pun suggests passion burned to ash. "Gray" -- the dominant colour -- represents emotional neutrality, the absence of both love and hate.',
      themes: ['Death of love', 'Neutrality', 'Wordplay'],
      analysisAr:
        'التورية في "ash" (شجرة الدردار ورماد النار) توحي إن العاطفة احترقت ل رماد. كلمة "gray" — اللون السائد — تمثّل الحياد العاطفي، غياب الحب وغياب الكره مع بعض.',
      themesAr: ['موت الحب', 'الحياد', 'التورية'],
    },
    {
      quote: 'eyes that rove / Over tedious riddles',
      analysis:
        'The lover\'s wandering eyes show disengagement. The speaker has become a "tedious riddle" -- something once intriguing now boring. Love has made familiarity breed contempt.',
      themes: ['Disillusionment', 'Boredom', 'Loss'],
      analysisAr:
        'عيون الحبيبة (أنثى) اللي تطوف تبيّن انفصال. المتكلّم (ذكر) صار "tedious riddle" — شي كان مثير وصار الحين ممل. الحب خلّى الألفة تولّد الاحتقار.',
      themesAr: ['خيبة الأمل', 'الملل', 'الفقد'],
    },
    {
      quote: 'The smile on your mouth was the deadest thing',
      analysis:
        'The poem\'s most devastating line. An oxymoron -- a dead smile -- captures the horror of performed emotion when genuine feeling has died. The superlative "deadest" is absolute.',
      themes: ['Death imagery', 'Performance', 'Falseness'],
      analysisAr:
        'أكثر بيت موجع في القصيدة. تناقض — ابتسامة ميتة — يلتقط بشاعة العاطفة المؤدّاة لما يكون الإحساس الصادق مات. صيغة التفضيل "deadest" مطلقة.',
      themesAr: ['صور الموت', 'الأداء', 'الزيف'],
    },
    {
      quote: 'Alive enough to have strength to die',
      analysis:
        'A paradox that captures love in its final moments -- still technically alive but with no purpose except to complete the process of dying. Grimly ironic.',
      themes: ['Paradox', 'Death of love', 'Irony'],
      analysisAr:
        'مفارقة تلتقط الحب في لحظاته الأخيرة — لين الحين حي شكلياً، بس بدون أي غرض غير إكمال عمليّة الاحتضار. مفارقة قاتمة.',
      themesAr: ['المفارقة', 'موت الحب', 'السخريّة'],
    },
    {
      quote: 'keen lessons that love deceives',
      analysis:
        'Hardy\'s thesis: love is fundamentally deceptive. "Keen" means both sharp (painful) and eager -- the speaker has learned this lesson intensely and applies it universally.',
      themes: ['Pessimism', 'Deception', 'Disillusionment'],
      analysisAr:
        'فرضيّة Hardy: الحب في جوهره خدّاع. كلمة "keen" تحمل معنيين: حادّ (مؤلم) ومتلهّف — المتكلّم (ذكر) تعلّم هذا الدرس بحدّة ويطبّقه على كل شي.',
      themesAr: ['التشاؤم', 'الخداع', 'خيبة الأمل'],
    },
    {
      quote: 'And a pond edged with grayish leaves',
      analysis:
        'The return to the opening image completes the cycle. "Grayish" slightly alters the original "gray" -- memory distorts even as it repeats. The speaker is trapped.',
      themes: ['Cyclical structure', 'Memory', 'Entrapment'],
      analysisAr:
        'الرجوع للصورة الافتتاحيّة يكمل الدورة. "Grayish" تعدّل قليلاً "gray" الأصلية — الذاكرة تشوّه حتى وهي تكرّر. المتكلّم (ذكر) محاصر.',
      themesAr: ['البنية الدوريّة', 'الذاكرة', 'الاحتجاز'],
    },
  ],
  languageDevices: [
    {
      device: 'Pathetic fallacy',
      example: 'the sun was white, as though chidden of God',
      effect:
        'The entire landscape -- white sun, grey leaves, starving ground -- mirrors the emotional desolation. Hardy creates a world where nature itself has lost the will to live.',
      lineRef: 1,
      effectAr:
        'المشهد كله — شمس بيضاء، أوراق رماديّة، أرض جوعى — يعكس الخراب العاطفي. Hardy يخلق عالم الطبيعة نفسها فقدت إرادة الحياة فيه.',
    },
    {
      device: 'Oxymoron',
      example: 'The smile on your mouth was the deadest thing',
      effect:
        'A smile (life) that is the "deadest thing" (death) captures the horror of false emotion. The contradiction forces the reader to confront the grotesque reality of performed affection.',
      lineRef: 10,
      effectAr:
        'ابتسامة (حياة) تكون "the deadest thing" (موت) تلتقط بشاعة العاطفة الزائفة. التناقض يفرض على القارئ يواجه الحقيقة المشوّهة للعاطفة المؤدّاة.',
    },
    {
      device: 'Paradox',
      example: 'Alive enough to have strength to die',
      effect:
        "Love exists in a liminal state between life and death, with just enough vitality to expire. The philosophical paradox reflects Hardy's bleak view that love contains the seeds of its own destruction.",
      lineRef: 11,
      effectAr:
        'الحب موجود في حالة وسطى بين الحياة والموت، مع حيويّة قد ما تكفي عشان يموت. المفارقة الفلسفية تعكس نظرة Hardy القاتمة، إن الحب يحمل بذور دماره الذاتي.',
    },
    {
      device: 'Cyclical structure',
      example: 'a pond... grayish leaves (echoing stanza 1)',
      effect:
        'The return to opening images in the final stanza creates a closed loop, suggesting the speaker is imprisoned by memory. No growth, healing, or escape is possible.',
      lineRef: 18,
      effectAr:
        'الرجوع للصور الافتتاحيّة في المقطع الأخير يخلق حلقة مقفولة، يوحي إن المتكلّم (ذكر) سجين الذاكرة. ما فيه تطوّر ولا شفاء ولا هروب ممكن.',
    },
    {
      device: 'Semantic field of death/decay',
      example: 'starving, fallen, gray, deadest, die',
      effect:
        'A sustained vocabulary of death and decay runs through the poem, creating an atmosphere of total lifelessness. Love is not just ended but decomposing.',
      lineRef: 2,
      effectAr:
        'مفردات ثابتة من معاني الموت والتحلّل تمشي طول القصيدة، فتخلق جو من انعدام الحياة الكامل. الحب مو بس انتهى، بل يتحلّل ويتعفّن.',
    },
    {
      device: 'Pun',
      example: 'fallen from an ash',
      effect:
        '"Ash" works as both tree species and fire residue (suggesting passion burned to nothing). The double meaning enriches the image and connects nature to human emotional experience.',
      lineRef: 3,
      effectAr:
        'كلمة "ash" تشتغل في نفس الوقت كنوع شجرة وكرماد نار (يوحي بإن العاطفة احترقت إلى لا شي). المعنى المزدوج يثري الصورة، ويربط الطبيعة بالتجربة العاطفيّة البشريّة.',
    },
    {
      device: 'Alliteration',
      example: 'wrings with wrong',
      effect:
        'The harsh, repeated "w" sound creates a physically uncomfortable quality that mirrors the twisting pain love causes. The alliteration makes the line feel contorted.',
      lineRef: 16,
      effectAr:
        'صوت الـ"w" المتكرّر القاسي يخلق إحساس جسدي غير مريح، يحاكي الألم اللي يلوي اللي يسبّبه الحب. الـalliteration يخلّي البيت يحسّ ملتوي.',
    },
    {
      device: 'Colour symbolism',
      example: 'white... gray... grayish',
      effect:
        'The deliberate absence of colour creates the "neutral tones" of the title. The palette drains warmth and vibrancy from the world, reflecting emotional numbness and the death of passion.',
      lineRef: 1,
      effectAr:
        'الغياب المقصود للون يخلق "neutral tones" اللي تشير لها القصيدة بعنوانها. لوحة الألوان تسحب الدفء والحياة من العالم، فتعكس الخدر العاطفي وموت الشغف.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'nt-1',
    question: 'What is the poem about?',
    type: 'multiple-choice',
    options: [
      'A happy walk by a pond',
      'The painful memory of a relationship ending beside a bleak winter pond',
      'A scientific description of a pond',
      'A celebration of nature',
    ],
    correctIndex: 1,
    explanation:
      'Hardy recalls the moment a relationship died, set beside a pond on a grey winter day. The bleak landscape mirrors the emotional deadness.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'nt-2',
    question: 'What does the pond symbolise?',
    type: 'multiple-choice',
    options: [
      'Beauty and life',
      'Stagnation and emotional deadness',
      'A place for swimming',
      'Wealth',
    ],
    correctIndex: 1,
    explanation:
      'The pond is stagnant and lifeless, mirroring the dead relationship. The "starving sod" reinforces the absence of vitality.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'nt-3',
    question: 'What is the effect of the "neutral tones" colour palette?',
    type: 'multiple-choice',
    options: [
      'Bright colours create excitement',
      'White, grey, and ash drain all warmth from the scene, matching the dead relationship',
      'Vivid colours celebrate nature',
      'Colours are random',
    ],
    correctIndex: 1,
    explanation:
      'Hardy removes colour — the sun is "white", leaves are "grey". This drained palette matches the emotional neutrality of the failed love.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'nt-4',
    question: 'What does "The smile on your mouth was the deadest thing" suggest?',
    type: 'multiple-choice',
    options: [
      'A beautiful smile',
      'The smile is false and lifeless — the relationship is beyond saving',
      'Shyness',
      'A genuine sad smile',
    ],
    correctIndex: 1,
    explanation:
      'The smile is deader than dead leaves — forced, insincere, representing total death of feeling. The superlative "deadest" emphasises extinction.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'nt-5',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: ['Free verse', 'Four quatrains with ABBA rhyme scheme', 'A sonnet', 'Blank verse'],
    correctIndex: 1,
    explanation:
      'Four quatrains with ABBA (envelope) rhyme. The enclosing rhyme mirrors how the speaker is trapped in the memory.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'nt-6',
    question: 'What is the effect of the cyclical structure?',
    type: 'multiple-choice',
    options: [
      'Time passing',
      'The poem ends where it began, trapping the speaker in inescapable painful memory',
      'Happy resolution',
      'No effect',
    ],
    correctIndex: 1,
    explanation:
      'The final stanza returns to the pond. The speaker is trapped in this memory — it defines all subsequent experiences of love.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'nt-7',
    question: 'When was the poem written?',
    type: 'multiple-choice',
    options: [
      '1867 by Thomas Hardy',
      '1818 during the Romantic period',
      '1914 during WWI',
      '1950 post-war',
    ],
    correctIndex: 0,
    explanation:
      'Written in 1867 by Hardy, who frequently presented love as doomed and painful. His pessimistic worldview shapes the bleak landscape.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'nt-8',
    question: 'What does pathetic fallacy achieve?',
    type: 'multiple-choice',
    options: [
      'Cheerfulness',
      'The bleak landscape mirrors emotional deadness — nature reflects human feeling',
      'Decoration',
      'Suspense',
    ],
    correctIndex: 1,
    explanation:
      "Grey sky, white sun, fallen leaves, and starving sod mirror the speaker's emotional state. Nature reinforces the emotional deadness.",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'nt-9',
    question: 'How does the final stanza transform the memory?',
    type: 'multiple-choice',
    options: [
      'It stays personal',
      'The memory becomes a universal lesson — "keen lessons that love deceives"',
      'New character introduced',
      'Hope offered',
    ],
    correctIndex: 1,
    explanation:
      'The pond scene becomes not just one memory but "keen lessons" about love\'s inevitable deception — it colours all future relationships.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'nt-10',
    question: 'Which poem pairs best with Neutral Tones?',
    type: 'multiple-choice',
    options: [
      'Singh Song!',
      'When We Two Parted by Byron',
      'Climbing My Grandfather',
      'Before You Were Mine',
    ],
    correctIndex: 1,
    explanation:
      'Both explore the painful end of love with cold imagery and cyclical structures. Both speakers are trapped in memories of failed relationships.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Neutral Tones explores the death of love, bleakness of memory, and how one painful experience defines all future relationships.',
    keyPoints: [
      'Love as deception — "keen lessons that love deceives"',
      'Emotional deadness — all warmth and colour drained',
      'Memory as trap — speaker locked in cyclical loop',
      'Pessimism — love is doomed to fail',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Hardy uses pathetic fallacy, drained colour palette, and death imagery to create total emotional extinction.',
    keyPoints: [
      '"Neutral tones" — white, grey, ash remove all warmth',
      '"The deadest thing" — superlative death imagery',
      'Pathetic fallacy — landscape mirrors dead relationship',
      '"Starving sod" — even the earth is dying',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four quatrains with ABBA rhyme creating an enclosed, trapped structure mirroring inescapable memory.',
    keyPoints: [
      'ABBA rhyme — enclosing structure traps the speaker',
      'Cyclical — begins and ends at the pond',
      'Regular form contrasts with disordered emotions',
      'Past tense throughout — memory becomes permanent',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Hardy present the end of love in Neutral Tones?',
  'Compare how lost love is presented in Neutral Tones and one other poem from the anthology.',
  'How does Hardy use natural imagery to convey emotional pain?',
]

const COMPARE_POEMS = [
  {
    title: 'When We Two Parted',
    href: '/revision/poetry/love-and-relationships/when-we-two-parted',
    reason: 'Both use cold imagery and cyclical structures to explore the pain of lost love.',
  },
  {
    title: "Love's Philosophy",
    href: '/revision/poetry/love-and-relationships/loves-philosophy',
    reason:
      "Polar opposites -- Shelley's optimistic argument for love vs. Hardy's bleak proof of its failure.",
  },
  {
    title: 'Sonnet 29',
    href: '/revision/poetry/love-and-relationships/sonnet-29',
    reason:
      'EBB celebrates living, present love; Hardy anatomises its death. Both use nature imagery to opposite effects.',
  },
]

export default function NeutralTonesPage() {
  return (
    <div className="space-y-6">
      <CourseJsonLd
        name="Neutral Tones by Thomas Hardy — Analysis & Annotations"
        description="Line-by-line analysis of Neutral Tones with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'Neutral Tones',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/neutral-tones',
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
          <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20">
            Love &amp; Relationships
          </Badge>
          <Badge variant="outline">AQA Anthology</Badge>
        </div>
      </div>

      <StudyTools
        textName="Neutral Tones"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Neutral Tones"
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
