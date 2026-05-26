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
const prelude: PoemData = {
  title: 'The Prelude: stealing the boat',
  poet: 'William Wordsworth',
  lines: [
    {
      text: 'One summer evening (led by her) I found',
      annotations: [
        {
          type: 'Personification',
          note: '"Led by her" - Nature is personified as female. The young Wordsworth feels guided by Nature into the experience, as if she is teaching him a lesson.',
          color: '#10b981',
        },
        {
          type: 'Setting',
          note: 'The opening sets a peaceful scene - "summer evening" suggests warmth and beauty. This calmness will be shattered by the threatening mountain.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'A little boat tied to a willow tree',
      annotations: [
        {
          type: 'Imagery',
          note: '"Little" diminishes the boat, foreshadowing the speaker\'s eventual smallness against nature\'s vastness. The willow is gentle and peaceful.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Within a rocky cove, its usual home.',
      annotations: [
        {
          type: 'Diction',
          note: 'The boat has a "home" - already personified. Wordsworth attributes life and place to inanimate objects, blurring the line between humans and nature.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Straight I unloosed her chain, and stepping in',
      annotations: [
        {
          type: 'Action',
          note: '"Unloosed" - the speaker is taking what is not his. The act is impulsive ("Straight" = immediately), suggesting the recklessness of youth.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Pushed from the shore. It was an act of stealth',
      annotations: [
        {
          type: 'Confession',
          note: '"Stealth" admits guilt - the speaker knows this is wrong. The poem is honest about the moral ambiguity of his action.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And troubled pleasure, nor without the voice',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Troubled pleasure" - the speaker enjoys the transgression but feels uneasy. This captures the complex emotion of doing something forbidden.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Of mountain-echoes did my boat move on;',
      annotations: [
        {
          type: 'Foreshadowing',
          note: '"Mountain-echoes" - already nature responds to him. The mountains are not silent; they are watching and replying. This foreshadows the central event.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Leaving behind her still, on either side,',
      annotations: [
        {
          type: 'Imagery',
          note: "The boat leaves a wake on either side - the speaker is making his mark on the previously undisturbed water. Nature's stillness is being broken.",
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Small circles glittering idly in the moon,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Glittering idly" - beautiful, peaceful imagery. The moonlit ripples suggest harmony and beauty. The contrast with what follows makes the shift more shocking.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Until they melted all into one track',
      annotations: [
        {
          type: 'Imagery',
          note: '"Melted" - the ripples disappear into a single trail. The boat is moving steadily, the speaker is in control - or so he thinks.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Of sparkling light. But now, like one who rows,',
      annotations: [
        {
          type: 'Volta',
          note: '"But now" - the turning point begins. The poem shifts from peaceful description to dramatic confrontation.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Proud of his skill, to reach a chosen point',
      annotations: [
        {
          type: 'Hubris',
          note: '"Proud of his skill" - the speaker\'s pride is highlighted. This pride is about to be punished by nature.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'With an unswerving line, I fixed my view',
      annotations: [
        {
          type: 'Diction',
          note: '"Unswerving line" - the speaker is confident, deliberate. He thinks he has total control.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Upon the summit of a craggy ridge,',
      annotations: [
        {
          type: 'Setting',
          note: '"Craggy ridge" - the harsh adjective hints at danger. The speaker uses this ridge as a navigation point but he hasn\'t noticed what lies beyond.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "The horizon's utmost boundary; far above",
      annotations: [
        {
          type: 'Perspective',
          note: '"Utmost boundary" - the speaker thinks the ridge is the limit of the visible world. He doesn\'t realise something larger is hidden behind it.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Was nothing but the stars and the grey sky.',
      annotations: [
        {
          type: 'Imagery',
          note: 'The sky seems empty - "nothing but the stars". This emptiness is about to be filled by something terrifying.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'She was an elfin pinnace; lustily',
      annotations: [
        {
          type: 'Diction',
          note: '"Elfin pinnace" - elf-like little boat, suggesting magic and lightness. "Lustily" means vigorously - the speaker rows enthusiastically, still confident.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'I dipped my oars into the silent lake,',
      annotations: [
        {
          type: 'Sibilance',
          note: 'The "s" sounds in "silent" emphasise the stillness about to be broken. The lake is unnaturally quiet, almost watching.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And, as I rose upon the stroke, my boat',
      annotations: [
        {
          type: 'Action',
          note: 'The speaker is fully engaged in rowing, putting his strength into each stroke. His confidence builds.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Went heaving through the water like a swan;',
      annotations: [
        {
          type: 'Simile',
          note: '"Like a swan" - graceful, elegant. The speaker compares himself to a beautiful creature. This is the peak of his pride.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'When, from behind that craggy steep till then',
      annotations: [
        {
          type: 'Volta',
          note: '"When" - the second turning point. Something is about to appear from behind the ridge.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "The horizon's bound, a huge peak, black and huge,",
      annotations: [
        {
          type: 'Repetition',
          note: '"Huge ... huge" - the repetition emphasises the overwhelming size. Wordsworth uses simple, repeated language to convey awe and terror.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The mountain emerges as if alive. "Black" suggests menace. The repeated "huge" shows the speaker is too overwhelmed for elegant language.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'As if with voluntary power instinct,',
      annotations: [
        {
          type: 'Personification',
          note: '"Voluntary power" - the mountain has its own will. It is not just a passive landscape but an active, intentional being. This is the sublime: nature as a living, threatening force.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Upreared its head. I struck and struck again,',
      annotations: [
        {
          type: 'Personification',
          note: '"Upreared its head" - the mountain is described like a giant rising up. The verb "upreared" is animal-like, threatening.',
          color: '#10b981',
        },
        {
          type: 'Repetition',
          note: '"Struck and struck again" - the speaker panics, rowing harder. The repetition shows desperation.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And growing still in stature the grim shape',
      annotations: [
        {
          type: 'Imagery',
          note: '"Growing still in stature" - the mountain seems to grow taller as he flees. "Grim" personifies it as having a serious, hostile expression.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Towered up between me and the stars, and still,',
      annotations: [
        {
          type: 'Sublime',
          note: 'The mountain "towered up" between him and the stars - blocking out the heavens. This is a key Romantic image of the sublime: nature so vast it dwarfs everything.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'For so it seemed, with purpose of its own',
      annotations: [
        {
          type: 'Personification',
          note: '"Purpose of its own" - the mountain seems to have intention. Wordsworth conveys the young boy\'s terrified perception that nature is hunting him.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And measured motion like a living thing,',
      annotations: [
        {
          type: 'Simile',
          note: '"Like a living thing" - the simile makes nature alive. The "measured motion" is steady and inexorable, as if the mountain is patient and certain.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'This line captures the central idea: nature is alive and aware. The Romantic vision is not of dead matter but of a living, conscious universe.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Strode after me. With trembling oars I turned,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Strode after me" - the mountain pursues him. "Trembling oars" reveals the speaker\'s fear (and his oars literally shaking). The chase is on.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And through the silent water stole my way',
      annotations: [
        {
          type: 'Diction',
          note: '"Stole my way" - the speaker is sneaking back. The earlier "act of stealth" comes back. He is now a frightened child trying to undo his transgression.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Back to the covert of the willow tree;',
      annotations: [
        {
          type: 'Cyclical structure',
          note: 'He returns to the willow tree - a cyclical journey. But he is changed. The familiar peaceful place is now a "covert" (hiding place).',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'There in her mooring-place I left my bark,-',
      annotations: [
        {
          type: 'Action',
          note: 'He returns the boat. The action is over but the experience is not. "Bark" is an old word for boat, giving the moment a literary, meditative quality.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And through the meadows homeward went, in grave',
      annotations: [
        {
          type: 'Tone shift',
          note: '"Grave" - serious, sombre. The boy walks home changed. The carefree pride is gone.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And serious mood; but after I had seen',
      annotations: [
        {
          type: 'Reflection',
          note: 'The speaker reflects on the experience as the older Wordsworth narrating his childhood. The poem moves from event to meditation.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'That spectacle, for many days, my brain',
      annotations: [
        {
          type: 'Aftermath',
          note: 'The vision haunts him "for many days" - the experience has lasting psychological impact. This is what Wordsworth calls a "spot of time".',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Worked with a dim and undetermined sense',
      annotations: [
        {
          type: 'Diction',
          note: '"Dim and undetermined" - the speaker cannot fully understand what he saw. The experience defies explanation, which is part of the sublime.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "Of unknown modes of being; o'er my thoughts",
      annotations: [
        {
          type: 'Key quote',
          note: '"Unknown modes of being" - the speaker now believes there are forms of consciousness he cannot understand. Nature is alive in ways humans cannot grasp.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'There hung a darkness, call it solitude',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Darkness" hangs over his thoughts. The speaker calls it "solitude" but knows it is more than that - a profound isolation from his previous certainty about the world.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Or blank desertion. No familiar shapes',
      annotations: [
        {
          type: 'Imagery',
          note: '"Blank desertion" - he feels abandoned. The familiar world has been emptied of meaning.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Remained, no pleasant images of trees,',
      annotations: [
        {
          type: 'Loss',
          note: '"No pleasant images" - the comforting, gentle nature is gone. The boy can no longer see nature as friendly.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Of sea or sky, no colours of green fields;',
      annotations: [
        {
          type: 'Catalogue',
          note: 'The list of lost things - sea, sky, green fields - shows the totality of his disillusionment. All of nature is now strange.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'But huge and mighty forms, that do not live',
      annotations: [
        {
          type: 'Repetition',
          note: '"Huge" returns - the same word used for the mountain. The vision of nature as massive, hostile beings now fills his mind.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Like living men, moved slowly through the mind',
      annotations: [
        {
          type: 'Imagery',
          note: '"Do not live like living men" - these forms are alive but not in a human way. Wordsworth glimpses a non-human consciousness in nature.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'By day, and were a trouble to my dreams.',
      annotations: [
        {
          type: 'Closing image',
          note: 'The poem ends with the lasting trouble - the experience haunts his daytime thoughts and his dreams. The childhood event has shaped him forever.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: "This is the heart of Wordsworth's philosophy: powerful childhood experiences with nature shape the adult mind permanently.",
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>William Wordsworth (1770-1850)</h3>
    <p>Wordsworth was one of the founders of English Romanticism, alongside Samuel Taylor Coleridge. He grew up in the Lake District and his deep love of nature shaped his entire poetic vision. He believed that childhood experiences in nature were formative and sacred.</p>

    <h3>The Prelude</h3>
    <p>The full title is <em>The Prelude, or Growth of a Poet\'s Mind</em>. It is an autobiographical epic poem in which Wordsworth traces his own intellectual and emotional development. He worked on it for most of his life. This extract comes from Book One.</p>

    <p><strong>Version note:</strong> The Eduqas anthology uses the <strong>1850 published Prelude</strong> (the same version used by AQA Power &amp; Conflict). OCR\'s "Towards a World Unknown" uses the earlier <strong>1799 two-part Prelude</strong>, which differs materially in wording. Always quote from the 1850 version when answering Eduqas questions.</p>

    <h3>"Spots of Time"</h3>
    <p>Wordsworth believed certain childhood experiences leave a permanent mark on the mind - he called them "spots of time". The boat-stealing episode is one of these. These memories are formative and continue to shape the adult.</p>

    <h3>Romantic Movement</h3>
    <p>Romantic poets valued <strong>emotion, imagination, and nature</strong> over reason. They saw nature as a teacher and a moral force. Wordsworth in particular believed that nature was alive and could communicate with humans.</p>

    <h3>The Sublime</h3>
    <p>The Romantic concept of the <strong>sublime</strong> - beauty mixed with terror - is central to this poem. The mountain rising up is sublime: vast, awe-inspiring, and frightening. Wordsworth believed the sublime taught humans humility before the natural world.</p>
  `,

  contextAr: `
    <h3>William Wordsworth (1770-1850)</h3>
    <p>Wordsworth واحد من مؤسّسي الرومانسية الإنجليزية، يم Samuel Taylor Coleridge. ترعرع في منطقة Lake District، وحبّه العميق للطبيعة شكّل رؤيته الشعرية كاملة. كان يؤمن إن تجارب الطفولة في الطبيعة تجارب مكوّنة ومقدّسة.</p>

    <h3>The Prelude</h3>
    <p>العنوان الكامل هو <em>The Prelude, or Growth of a Poet's Mind</em>. هي قصيدة ملحمية سيرة ذاتية، Wordsworth يتتبّع فيها تطوّره الفكري والعاطفي. اشتغل عليها معظم حياته. هذا المقطع من الكتاب الأول.</p>

    <p><strong>ملاحظة عن النسخة:</strong> منهج Eduqas يستخدم <strong>نسخة 1850 المنشورة من The Prelude</strong> (نفس النسخة اللي يستخدمها منهج AQA Power & Conflict). أما منهج OCR "Towards a World Unknown" فيستخدم النسخة الأقدم من <strong>1799 (The Prelude بنسختين)</strong>، اللي تختلف ماديّاً في الصياغة. لازم تقتبس من نسخة 1850 لما تجاوب على أسئلة Eduqas.</p>

    <h3>"Spots of Time"</h3>
    <p>Wordsworth كان يؤمن إن بعض تجارب الطفولة تترك أثر دائم على العقل - كان يسمّيها "spots of time". حادثة سرقة القارب وحدة من هذي الـspots. هالذكريات مكوّنة، وتستمر تشكّل الإنسان البالغ.</p>

    <h3>الحركة الرومانسية</h3>
    <p>الشعراء الرومانسيون كانوا يقدّرون <strong>العاطفة والخيال والطبيعة</strong> أكثر من العقل. كانوا يشوفون الطبيعة كمعلّم وقوة أخلاقية. Wordsworth بالذات كان يؤمن إن الطبيعة حيّة وتقدر تتواصل مع البشر.</p>

    <h3>السامي (The Sublime)</h3>
    <p>مفهوم <strong>السامي</strong> الرومانسي - الجمال مع الرعب - مركزي في القصيدة. الجبل اللي يطلع سامي: ضخم، يبعث الرهبة، ومخيف. Wordsworth كان يؤمن إن السامي يعلّم الإنسان التواضع أمام العالم الطبيعي.</p>
  `,

  summary: `Opening: The young Wordsworth finds a boat tied to a willow tree on a summer evening. He impulsively unties it ("an act of stealth and troubled pleasure") and pushes off into the lake.

Pride: He rows confidently, "proud of his skill", fixing his view on a craggy ridge as a navigation point. He compares his moving boat to a swan.

The mountain appears: From behind the ridge, a "huge peak, black and huge" emerges. The mountain seems to rise up "with voluntary power", towering between him and the stars. It strides after him "like a living thing".

Retreat: Terrified, the speaker turns and rows back. He returns the boat to its mooring under the willow and walks home in a "grave and serious mood".

Aftermath: For many days afterwards, his mind is haunted by "huge and mighty forms" - non-human shapes that move through his thoughts and disturb his dreams. The experience has changed him: he can no longer see nature as friendly and familiar.

Overall meaning: A childhood encounter with the sublime power of nature teaches the young Wordsworth humility and reveals that nature is alive - but not in the gentle, comforting way he had imagined. Pride is punished, and the experience shapes his adult mind forever.`,

  summaryAr: `الافتتاح: Wordsworth الصغير يلقى قارب مربوط بشجرة صفصاف في ليلة صيفية. يفكّه باندفاع ("an act of stealth and troubled pleasure") ويبتعد عن الشط في البحيرة.

الكبرياء: يجدّف بثقة، "proud of his skill"، يثبّت نظره على حافة صخرية كنقطة استدلال. يشبّه قاربه وهو يتحرّك بالبجعة.

ظهور الجبل: من خلف الحافة، يطلع "huge peak, black and huge". الجبل يبدو إنه يقوم "with voluntary power"، يبرز بين الولد والنجوم. يخطو وراه "like a living thing".

التراجع: الولد مذعور، يستدير ويجدّف بالعكس. يرجّع القارب لمرساه تحت شجرة الصفصاف، ويمشي للبيت في "grave and serious mood".

ما بعد الحدث: لأيام بعدها، عقله يطارده "huge and mighty forms" - أشكال غير بشرية تتحرّك عبر أفكاره وتزعج أحلامه. التجربة غيّرته: ما عاد يقدر يشوف الطبيعة كصديقة ومألوفة.

المعنى العام: لقاء طفولي مع قوة الطبيعة السامية يعلّم Wordsworth الصغير التواضع، ويكشف إن الطبيعة حيّة - بس مو بالطريقة اللطيفة المريحة اللي تخيّلها. الكبرياء يُعاقب، والتجربة تشكّل عقله البالغ للأبد.`,

  formAndStructure: `Form: Blank verse - unrhymed iambic pentameter. This is the form of epic poetry (Milton\'s Paradise Lost) and gives the personal memory a serious, elevated quality. It also feels natural and conversational.

Length: A continuous 44-line extract from a much longer epic poem. The lack of stanza breaks creates a flowing, unbroken narrative that mirrors how memory works - one image leading to another.

First-person narration: "I found", "I struck", "my brain". The intimacy of the first-person voice gives the poem confessional quality. Wordsworth is sharing a personal, formative memory.

Two voices: The narrator is the adult Wordsworth looking back at his childhood self. We feel both the immediacy of the boy\'s experience and the reflection of the older man.

Structural turn: The poem has a clear volta when the mountain appears ("a huge peak, black and huge"). Before this, the language is graceful and confident. After this, it becomes broken, repetitive, fearful.

Cyclical journey: The boy leaves the willow tree and returns to it - but he is changed. This circular structure mirrors how the experience completes a journey of self-discovery.

Repetition: "Huge ... huge", "struck and struck", "still ... still". The repetitions suggest a child\'s overwhelmed, panicked perception. Words fail him.

Personification: Nature is constantly personified. The boat has a "home", the lake is "silent" (watching), the mountain has "voluntary power" and "purpose". This is Wordsworth\'s pantheistic vision of nature as alive and conscious.`,

  formAndStructureAr: `Form: Blank verse - iambic pentameter بدون قافية. هذا هو شكل الشعر الملحمي (Paradise Lost لـMilton)، ويعطي الذكرى الشخصية طابع جدّي ورفيع. وفي نفس الوقت يحسّ طبيعي وحواري.

الطول: مقطع متواصل من 44 بيت من قصيدة ملحمية أطول. غياب تقسيمات المقاطع يخلق سرد منساب متّصل، يحاكي طريقة عمل الذاكرة - صورة تجرّ صورة ثانية.

الراوي بضمير المتكلّم: "I found"، "I struck"، "my brain". حميمية صوت المتكلّم تعطي القصيدة طابع اعترافي. Wordsworth يشارك ذكرى شخصية مكوّنة.

صوتان: الراوي هو Wordsworth البالغ يرجع لطفولته. نحسّ بفورية تجربة الولد وتأمّل الرجل الأكبر.

التحوّل البنيوي: القصيدة عندها volta واضح لما يطلع الجبل ("a huge peak, black and huge"). قبلها، اللغة هادئة وواثقة. بعدها تصير مكسّرة، متكرّرة، خائفة.

الرحلة الدائرية: الولد يترك شجرة الصفصاف ويرجع لها - بس وهو متغيّر. هالبنية الدائرية تحاكي كيف إن التجربة تكمّل رحلة اكتشاف الذات.

التكرار: "Huge ... huge"، "struck and struck"، "still ... still". التكرارات توحي بإدراك الطفل المرعوب المتأثّر. الكلمات تعجز.

Personification: الطبيعة دايماً مشخصنة. القارب عنده "home"، البحيرة "silent" (تراقب)، الجبل عنده "voluntary power" و"purpose". هذي رؤية Wordsworth الـpantheistic للطبيعة كحيّة وواعية.`,

  keyQuotes: [
    {
      quote: 'an act of stealth / And troubled pleasure',
      analysis:
        'The oxymoron captures the conflicted thrill of transgression. "Stealth" admits guilt - he knows it\'s wrong. "Troubled pleasure" shows the complex psychology of doing something forbidden. This sets up the moral framework: he has crossed a line, and nature will respond.',
      themes: ['Guilt', 'Transgression', 'Childhood'],
      analysisAr:
        'الـoxymoron يلتقط نشوة التجاوز المتعارضة. "Stealth" تعترف بالذنب - يعرف إن اللي يسوّيه غلط. و"troubled pleasure" تبيّن نفسية معقّدة لما يسوّي الشخص شي ممنوع. هذا يأسّس الإطار الأخلاقي: تجاوز الحدّ، والطبيعة بترد.',
      themesAr: ['الذنب', 'التجاوز', 'الطفولة'],
    },
    {
      quote: 'Proud of his skill',
      analysis:
        'A simple phrase that encapsulates the speaker\'s hubris. He thinks rowing is a "skill" he can perfect. The pride is innocent but it is exactly the pride that nature is about to punish. Wordsworth subtly criticises human arrogance.',
      themes: ['Pride', 'Hubris', 'Humanity vs nature'],
      analysisAr:
        'عبارة بسيطة تختصر غطرسة المتكلّم. يعتقد إن التجديف "مهارة" يقدر يتقنها. الكبرياء بريء، بس هو نفس الكبرياء اللي الطبيعة على وشك تعاقبه. Wordsworth ينتقد غرور الإنسان بطريقة خفية.',
      themesAr: ['الكبرياء', 'الغطرسة', 'الإنسان مقابل الطبيعة'],
    },
    {
      quote: 'a huge peak, black and huge',
      analysis:
        'The most famous line in the extract. The repetition of "huge" shows the speaker is too overwhelmed for elegant language - he can only repeat. "Black" suggests menace and the unknown. The mountain emerges almost like a living monster, breaking the peaceful spell of the rowing.',
      themes: ['Sublime', 'Power of nature', 'Fear'],
      analysisAr:
        'أشهر بيت في المقطع. تكرار "huge" يبيّن إن المتكلّم منهار، ما يقدر يستخدم لغة منمّقة - بس يكرّر. كلمة "black" توحي بالتهديد والمجهول. الجبل يطلع شبه وحش حيّ، يكسر سحر التجديف الهادي.',
      themesAr: ['السامي', 'قوة الطبيعة', 'الخوف'],
    },
    {
      quote: 'with voluntary power instinct, / Upreared its head',
      analysis:
        'The mountain has "voluntary power" - its own will. "Upreared its head" makes it animal-like, as if a giant beast is rising up. Wordsworth\'s pantheism (belief that nature is alive) is here at full force. This is the sublime: nature so vast it has agency.',
      themes: ['Personification', 'Sublime', 'Power of nature'],
      analysisAr:
        'الجبل عنده "voluntary power" - إرادة خاصة فيه. "Upreared its head" يخلّيه شبه حيوان، كأن وحش عملاق يقوم. الـpantheism عند Wordsworth (إيمانه إن الطبيعة حيّة) في أوج قوّته هنا. هذا هو السامي: طبيعة ضخمة لدرجة إن عندها إرادة.',
      themesAr: ['Personification', 'السامي', 'قوة الطبيعة'],
    },
    {
      quote: 'like a living thing, / Strode after me',
      analysis:
        'The simile makes the mountain a living predator. "Strode" suggests a deliberate, purposeful walk. The boy is being hunted. Wordsworth captures the terror of a child\'s perception when nature seems alive and hostile.',
      themes: ['Sublime', 'Fear', 'Personification'],
      analysisAr:
        'الـsimile يخلّي الجبل مفترس حيّ. "Strode" توحي بمشية متعمّدة، فيها هدف. الولد يصيد. Wordsworth يلتقط رعب إدراك الطفل لما تبدو الطبيعة حيّة وعدائية.',
      themesAr: ['السامي', 'الخوف', 'Personification'],
    },
    {
      quote: 'unknown modes of being',
      analysis:
        "After the experience, the speaker realises there are forms of consciousness he cannot understand. Nature is alive in ways beyond human comprehension. This phrase captures Wordsworth's philosophy: there are levels of existence the human mind can sense but not grasp.",
      themes: ['Sublime', 'Spirituality', 'Limits of understanding'],
      analysisAr:
        'بعد التجربة، المتكلّم يدرك إن فيه أشكال من الوعي ما يقدر يفهمها. الطبيعة حيّة بطرق تتجاوز الفهم البشري. هالعبارة تلخّص فلسفة Wordsworth: فيه مستويات من الوجود العقل البشري يحسّ فيها بس ما يقدر يدركها.',
      themesAr: ['السامي', 'الروحانية', 'حدود الفهم'],
    },
    {
      quote: 'No familiar shapes / Remained',
      analysis:
        'The boy\'s comfortable view of nature is shattered. The "pleasant images of trees ... colours of green fields" all disappear. The world has been transformed. This is a loss of innocence: he can no longer see nature as a friendly companion.',
      themes: ['Loss of innocence', 'Childhood', 'Transformation'],
      analysisAr:
        'رؤية الولد المريحة للطبيعة تتحطّم. "pleasant images of trees ... colours of green fields" كلّها تختفي. العالم تحوّل. هذا فقدان للبراءة: ما عاد يقدر يشوف الطبيعة كرفيق ودود.',
      themesAr: ['فقدان البراءة', 'الطفولة', 'التحوّل'],
    },
    {
      quote: 'huge and mighty forms ... were a trouble to my dreams',
      analysis:
        'The closing lines show the lasting impact. "Huge" returns from the mountain scene. The forms "do not live like living men" - they are alive but in non-human ways. They invade his dreams, showing how a single childhood experience can shape the adult mind permanently.',
      themes: ['Memory', 'Lasting impact', 'Sublime'],
      analysisAr:
        'الأبيات الختامية تبيّن الأثر الباقي. كلمة "huge" ترجع من مشهد الجبل. الأشكال "do not live like living men" - حيّة بس بطرق غير بشرية. تغزو أحلامه، وهذا يبيّن كيف إن تجربة طفولة واحدة تقدر تشكّل العقل البالغ للأبد.',
      themesAr: ['الذاكرة', 'الأثر الباقي', 'السامي'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example:
        'huge peak ... with voluntary power instinct, / Upreared its head ... Strode after me',
      effect:
        "Wordsworth personifies the mountain as a living giant with intention. This is the central technique of the poem - nature is alive, conscious, and powerful. The personification captures both the child's terrified perception and Wordsworth's philosophical view of nature as a living force.",
      lineRef: 21,
      effectAr:
        'Wordsworth يشخصن الجبل كعملاق حيّ عنده نيّة. هذي هي التقنية المركزية في القصيدة - الطبيعة حيّة، واعية، وقوية. الـpersonification يلتقط إدراك الطفل المرعوب ورؤية Wordsworth الفلسفية للطبيعة كقوة حيّة.',
    },
    {
      device: 'Repetition',
      example: 'a huge peak, black and huge / struck and struck again',
      effect:
        "The repetitions show the speaker overwhelmed by experience - words fail him. They also create a sense of the mountain's relentlessness and the speaker's panic. The simple repeated language mirrors a child's response to fear.",
      lineRef: 21,
      effectAr:
        'التكرارات تبيّن المتكلّم منهار من التجربة - الكلمات تعجزه. وفي نفس الوقت يخلق إحساس بإصرار الجبل وذعر المتكلّم. اللغة البسيطة المكرّرة تحاكي ردّة فعل الطفل على الخوف.',
    },
    {
      device: 'Oxymoron',
      example: 'troubled pleasure',
      effect:
        'The oxymoron captures the conflicted emotion of doing something forbidden but exciting. It establishes the moral complexity early: this is not simple wrongdoing but the rich psychological territory of childhood guilt.',
      lineRef: 5,
      effectAr:
        'الـoxymoron يلتقط شعور متعارض: عمل ممنوع بس ممتع. يأسّس التعقيد الأخلاقي من البداية: مو غلط بسيط، بل أرض نفسية غنية لذنب الطفولة.',
    },
    {
      device: 'Simile',
      example: 'like a swan ... like a living thing',
      effect:
        'Two contrasting similes capture the poem\'s journey. First the boat is "like a swan" (graceful, confident). Then the mountain is "like a living thing" (alive, threatening). The shift from elegant to monstrous comparison mirrors the speaker\'s emotional change.',
      lineRef: 19,
      effectAr:
        'تشبيهان متضادان يلتقطون رحلة القصيدة. أول شي القارب "like a swan" (رشيق، واثق). بعدها الجبل "like a living thing" (حيّ، يهدّد). الانتقال من المقارنة الرشيقة للوحشية يحاكي التحوّل العاطفي عند المتكلّم.',
    },
    {
      device: 'Volta',
      example: 'When, from behind that craggy steep ... a huge peak',
      effect:
        'The poem has a clear turning point when the mountain appears. Before, the language is graceful and the speaker confident. After, the language becomes broken and fearful. The volta dramatises the moment of moral and emotional reckoning.',
      lineRef: 20,
      effectAr:
        'القصيدة عندها نقطة تحوّل واضحة لما يطلع الجبل. قبلها، اللغة رشيقة والمتكلّم واثق. بعدها، اللغة تنكسر وتصير خائفة. الـvolta يدرمَن لحظة الحساب الأخلاقي والعاطفي.',
    },
    {
      device: 'Blank verse',
      example: 'Continuous unrhymed iambic pentameter throughout',
      effect:
        'The blank verse gives the personal memory the weight of epic poetry. It feels conversational yet elevated. The lack of rhyme allows the language to flow naturally, mirroring how memory and reflection actually work in the mind.',
      lineRef: 1,
      effectAr:
        'الـblank verse يعطي الذكرى الشخصية ثقل الشعر الملحمي. تحسّ حوارية ورفيعة في نفس الوقت. غياب القافية يخلّي اللغة تنساب طبيعياً، تحاكي كيف تشتغل الذاكرة والتأمّل فعلياً في العقل.',
    },
    {
      device: 'First-person narration',
      example: 'I found ... I struck ... my brain',
      effect:
        "The first person makes the experience intimate and confessional. We feel both the boy's immediate terror and the adult's reflective wisdom. This dual voice is essential to The Prelude's autobiographical project.",
      lineRef: 1,
      effectAr:
        'ضمير المتكلّم يخلّي التجربة حميمة واعترافية. نحسّ بذعر الولد المباشر وحكمة الراوي البالغ المتأمّل. هالصوت المزدوج جوهري لمشروع The Prelude السيري.',
    },
  ],
}

const comparisons = [
  {
    title: 'To Autumn',
    poet: 'John Keats',
    href: '/revision/poetry/eduqas/to-autumn',
    reason:
      'Both Romantic poems present nature as awe-inspiring, but Keats sees nature as gentle and abundant while Wordsworth shows it as sublime and threatening. A perfect contrast in Romantic visions of nature.',
    themes: ['Nature', 'Romantic poetry', 'Awe'],
  },
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    href: '/revision/poetry/eduqas/ozymandias',
    reason:
      "Both poems show nature dwarfing human ambition. Wordsworth's mountain humbles a young boy; Shelley's desert erases an empire. Both Romantic poets warn of human pride.",
    themes: ['Power of nature', 'Pride', 'Romantic poetry'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'pre-1',
    question: 'What does the young Wordsworth do?',
    type: 'multiple-choice',
    options: [
      'Goes swimming',
      'Steals a boat and rows across a lake',
      'Climbs a mountain',
      'Walks through a forest',
    ],
    correctIndex: 1,
    explanation:
      'He finds a boat and rows it across a lake - an "act of stealth" that leads to a terrifying encounter with a mountain.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'pre-2',
    question: 'What does the mountain appear to do?',
    type: 'multiple-choice',
    options: ['Crumble', 'Rise up and stride after the boy', 'Disappear', 'Shine'],
    correctIndex: 1,
    explanation:
      'The mountain "Upreared its head" and "Strode after me" - personified as a living creature pursuing the terrified boy.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'pre-3',
    question: 'What is "troubled pleasure"?',
    type: 'multiple-choice',
    options: [
      'Pure happiness',
      'An oxymoron capturing excitement mixed with guilt',
      'A type of boat',
      'Weather',
    ],
    correctIndex: 1,
    explanation:
      '"Troubled pleasure" combines contradictory emotions - thrill and guilt about stealing the boat.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'pre-4',
    question: 'What form is it in?',
    type: 'multiple-choice',
    options: [
      'Rhyming couplets',
      'Blank verse (unrhymed iambic pentameter)',
      'Free verse',
      'A sonnet',
    ],
    correctIndex: 1,
    explanation:
      'Blank verse gives the poem a natural, conversational rhythm mirroring the flow of memory.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'pre-5',
    question: 'What does the contrast between "lustily" and "trembling" show?',
    type: 'multiple-choice',
    options: [
      'Weather changed',
      'Nature replaces confidence with terror',
      'Getting tired',
      'Oars are broken',
    ],
    correctIndex: 1,
    explanation:
      "The shift from confident energy to fear demonstrates nature's power to humble even the self-assured.",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'pre-6',
    question: 'What are "unknown modes of being"?',
    type: 'multiple-choice',
    options: [
      'A new species',
      'Something beyond human comprehension - a spiritual power in nature',
      'A new language',
      'Memory loss',
    ],
    correctIndex: 1,
    explanation:
      'Deliberately abstract - the boy has glimpsed something transcendent that exceeds human understanding.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'pre-7',
    question: 'What is The Prelude?',
    type: 'multiple-choice',
    options: [
      'War poems',
      "An epic autobiographical poem about the growth of Wordsworth's mind",
      'A novel',
      'A play',
    ],
    correctIndex: 1,
    explanation:
      'An epic autobiography tracing development from childhood to adulthood. This extract is from Book I.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'pre-8',
    question: 'What Romantic concept does this exemplify?',
    type: 'multiple-choice',
    options: [
      'Pathetic fallacy',
      'The sublime - awe and terror from vast natural phenomena',
      'The pastoral',
      'The picturesque',
    ],
    correctIndex: 1,
    explanation:
      'The sublime: encounters with vast, powerful nature produce awe and spiritual transformation.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'pre-9',
    question: 'Why no stanza breaks?',
    type: 'multiple-choice',
    options: [
      'Forgotten',
      'The continuous block reflects unbroken memory flow and how the experience consumed consciousness',
      'Makes it shorter',
      'Printer error',
    ],
    correctIndex: 1,
    explanation:
      'The single block mirrors how memory flows without divisions - the experience consumed everything.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'pre-10',
    question: 'How does the experience permanently change the boy?',
    type: 'multiple-choice',
    options: [
      "It doesn't",
      '"Huge and mighty forms" replace pleasant images - nature is no longer comforting but overwhelming and unknowable',
      'He becomes happier',
      'He forgets',
    ],
    correctIndex: 1,
    explanation:
      'Familiar natural scenes are replaced by "huge and mighty forms" that haunt his thoughts by day and trouble his dreams. His relationship with nature is permanently altered.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'The Prelude explores the power of nature, the Romantic sublime, growing up, and the lasting impact of formative experience.',
    keyPoints: [
      'Nature has "voluntary power" - it can humble humans',
      'The sublime - overwhelming awe and terror',
      'Growing up - confidence permanently replaced by uncertainty',
      'Memory - the experience haunts him day and night',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Wordsworth uses personification, contrast, simile, and abstract language to chart the shift from confidence to existential terror.',
    keyPoints: [
      '"Upreared its head", "Strode after me" - mountain personified',
      '"Lustily" vs "trembling" - confidence replaced by fear',
      'Swan simile - grace before the terrifying encounter',
      '"Unknown modes of being" - beyond comprehension',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Blank verse in a single block, with enjambment mirroring memory's flow and the journey's momentum.",
    keyPoints: [
      'Blank verse - natural rhythm',
      'Volta at the mountain encounter',
      'Enjambment - momentum and overflow',
      'First-person retrospective - adult reflecting on childhood',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Wordsworth present the power of nature in this extract from The Prelude?',
  'Compare how nature is presented as powerful in The Prelude and one other poem from the anthology.',
  'How does Wordsworth use language and structure to show a shift from confidence to fear?',
]

export default function PreludeEduqasPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="The Prelude by William Wordsworth - Analysis & Annotations"
        description="Line-by-line analysis of The Prelude with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Eduqas Poetry', url: 'https://theenglishhub.app/revision/poetry/eduqas' },
          {
            name: 'The Prelude',
            url: 'https://theenglishhub.app/revision/poetry/eduqas/the-prelude',
          },
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
          Back to Eduqas Poetry
        </Button>

        <div className="mb-5 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-body-sm text-amber-100">
          <p className="font-semibold mb-1">Legacy anthology notice</p>
          <p className="text-amber-100/90 leading-relaxed">
            This page is from the legacy pre-2025 Eduqas anthology. The current Eduqas 2025 cluster
            does not include this poem. The content remains as a study reference.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              The Prelude: stealing the boat
            </h1>
            <p className="text-body-sm text-muted-foreground">
              William Wordsworth &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="The Prelude: stealing the boat"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />
      <InlineStudyEngine
        textName="The Prelude"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={prelude} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong Eduqas pairings for comparison questions involving The Prelude.
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
        Extract from The Prelude (1850) by William Wordsworth is in the public domain. Source:
        Project Gutenberg / Wikisource &mdash; verified against the Verified Library. Reproduced
        freely for educational use.
      </footer>
    </div>
  )
}
