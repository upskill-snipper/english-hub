'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
/* ── Poem data ─────────────────────────────────────────────────── */

const POEM: PoemData = {
  title: 'Extract from The Prelude: Stealing the Boat',
  poet: 'William Wordsworth',

  lines: [
    {
      text: 'One summer evening (led by her) I found',
      annotations: [
        {
          type: 'Personification',
          note: 'Nature is personified as a female guide ("her"), suggesting a nurturing, maternal force leading the young Wordsworth.',
          color: '#f59e0b',
        },
        {
          type: 'Context',
          note: 'The parenthetical "(led by her)" implies nature has agency and purpose, a key Romantic idea.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'A little boat tied to a willow tree',
      annotations: [
        {
          type: 'Imagery',
          note: 'The pastoral setting with the willow tree creates a sense of calm innocence before the dramatic shift.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Within a rocky cove, its usual home.',
      annotations: [
        {
          type: 'Setting',
          note: 'The boat has a "usual home" -- it belongs to someone else. This foreshadows the transgression of stealing it. ("Cove" = sheltered inlet, the verified 1850 reading.)',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Straight I unloosed her chain, and stepping in',
    },
    {
      text: 'Pushed from the shore. It was an act of stealth',
      annotations: [
        {
          type: 'Moral awareness',
          note: '"Act of stealth" shows Wordsworth knows this is wrong -- he is conscious of his transgression against nature.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And troubled pleasure, nor without the voice',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Troubled pleasure" reveals internal conflict -- excitement mixed with guilt. This duality drives the extract.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Of mountain-echoes did my boat move on;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Mountain-echoes" foreshadow the mountain\'s later sublime presence. Even the boat\'s departure is observed by the natural world.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Leaving behind her still, on either side,',
    },
    {
      text: 'Small circles glittering idly in the moon,',
      annotations: [
        {
          type: 'Imagery',
          note: 'Visual beauty of light on water -- the calm, picturesque mood before the volta.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Until they melted all into one track',
    },
    {
      text: 'Of sparkling light. But now, like one who rows,',
    },
    {
      text: 'Proud of his skill, to reach a chosen point',
      annotations: [
        {
          type: 'Pride / hubris',
          note: '"Proud of his skill" signals the boy\'s confidence -- the very pride that nature is about to humble.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'With an unswerving line, I fixed my view',
    },
    {
      text: 'Upon the summit of a craggy ridge,',
    },
    {
      text: "The horizon's utmost boundary; far above",
    },
    {
      text: 'Was nothing but the stars and the grey sky.',
    },
    {
      text: 'She was an elfin pinnace; lustily',
      annotations: [
        {
          type: 'Personification',
          note: 'The boat is called "she" and described as an "elfin pinnace" (fairy-like small boat), maintaining the magical, almost supernatural tone.',
          color: '#10b981',
        },
        {
          type: 'Adverb',
          note: '"Lustily" conveys youthful energy, enthusiasm, and physical confidence. The boy feels powerful and in control.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I dipped my oars into the silent lake,',
      annotations: [
        {
          type: 'Adjective',
          note: '"Silent" creates an ominous, expectant atmosphere -- the calm before the terrifying encounter.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And, as I rose upon the stroke, my boat',
    },
    {
      text: 'Went heaving through the water like a swan;',
      annotations: [
        {
          type: 'Simile',
          note: 'The swan simile suggests grace, elegance, and harmony with nature. The boy feels at one with his surroundings.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'When, from behind that craggy steep till then',
      annotations: [
        {
          type: 'Volta',
          note: 'This marks the dramatic turning point. "When" signals the sudden, unexpected encounter with the mountain.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: "The horizon's bound, a huge peak, black and huge,",
      annotations: [
        {
          type: 'Repetition',
          note: '"Huge" is repeated for emphasis, stressing the overwhelming scale of the mountain. The adjective "black" adds menace.',
          color: '#f59e0b',
        },
        {
          type: 'Sublime',
          note: 'This is the moment of the Romantic sublime -- an encounter with something so vast and terrifying it overwhelms human understanding.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'As if with voluntary power instinct,',
      annotations: [
        {
          type: 'Personification',
          note: 'The mountain is given "voluntary power" -- it seems to have its own will and consciousness, making it deeply threatening.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Upreared its head. I struck and struck again,',
      annotations: [
        {
          type: 'Personification',
          note: '"Upreared its head" makes the mountain seem like a giant creature rising up. The mountain becomes a living, purposeful being.',
          color: '#f59e0b',
        },
        {
          type: 'Repetition',
          note: '"Struck and struck again" conveys frantic, panicked rowing -- the boy\'s confidence is gone.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And growing still in stature the grim shape',
      annotations: [
        {
          type: 'Imagery',
          note: 'The mountain "grows" as he watches -- a psychological effect, but rendered as if literal. Fear distorts perception.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Towered up between me and the stars, and still,',
      annotations: [
        {
          type: 'Imagery',
          note: 'The mountain blocks the stars -- it cuts him off from the heavens, isolating him with its overwhelming presence.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'For so it seemed, with purpose of its own',
    },
    {
      text: 'And measured motion like a living thing,',
      annotations: [
        {
          type: 'Simile',
          note: '"Like a living thing" makes the comparison explicit -- the mountain appears animate and threatening.',
          color: '#10b981',
        },
        {
          type: 'Sublime',
          note: '"Measured motion" suggests slow, deliberate, controlled pursuit -- terrifying because it is purposeful.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Strode after me. With trembling oars I turned,',
      annotations: [
        {
          type: 'Personification',
          note: '"Strode after me" gives the mountain human movement -- it seems to pursue the boy like a predator. The short sentence ("Strode after me.") is itself a stylistic feature, abruptly underlining the threat.',
          color: '#f59e0b',
        },
        {
          type: 'Contrast',
          note: '"Trembling oars" contrasts sharply with the earlier "lustily I dipped" -- confidence has been replaced by terror.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And through the silent water stole my way',
      annotations: [
        {
          type: 'Verb choice',
          note: '"Stole" echoes the earlier "act of stealth" -- the boy is now the one sneaking away, his power reversed.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Back to the covert of the willow tree;',
    },
    {
      text: 'There in her mooring-place I left my bark, --',
    },
    {
      text: 'And through the meadows homeward went, in grave',
      annotations: [
        {
          type: 'Adjective',
          note: '"Grave" suggests seriousness and a weighty, solemn mood -- the boy has been profoundly changed by the experience.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'And serious mood; but after I had seen',
    },
    {
      text: 'That spectacle, for many days, my brain',
      annotations: [
        {
          type: 'Enjambment',
          note: "The enjambment across these lines mirrors the way the experience lingers and spills over into the boy's everyday thoughts.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Worked with a dim and undetermined sense',
    },
    {
      text: "Of unknown modes of being; o'er my thoughts",
      annotations: [
        {
          type: 'Abstract language',
          note: '"Unknown modes of being" suggests the boy has glimpsed something beyond human comprehension -- a spiritual or transcendent power in nature.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'There hung a darkness, call it solitude',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Darkness "hung" over his thoughts like a physical weight. Nature\'s power has left a lasting psychological imprint.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Or blank desertion. No familiar shapes',
      annotations: [
        {
          type: 'Imagery',
          note: '"Blank desertion" and "No familiar shapes" convey a loss of certainty -- the comforting, familiar world has been stripped away.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Remained, no pleasant images of trees,',
    },
    {
      text: 'Of sea or sky, no colours of green fields;',
      annotations: [
        {
          type: 'Listing',
          note: 'The list of absent natural images emphasises what has been lost. Previously comforting pastoral scenes can no longer reassure.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'But huge and mighty forms, that do not live',
      annotations: [
        {
          type: 'Contrast',
          note: '"Huge and mighty forms" replace "pleasant images" -- nature is no longer comforting but overwhelming and unknowable.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Like living men, moved slowly through the mind',
      annotations: [
        {
          type: 'Simile',
          note: 'The forms move "like living men" through his consciousness, suggesting the experience has become part of his inner life permanently.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'By day, and were a trouble to my dreams.',
      annotations: [
        {
          type: 'Time',
          note: '"By day" and "dreams" -- the experience haunts him both awake and asleep, showing its total psychological impact.',
          color: '#8b5cf6',
        },
      ],
    },
  ],

  context: `<p><strong>William Wordsworth</strong> (1770--1850) was one of the founders of the <strong>Romantic movement</strong> in English poetry. He grew up in the <strong>Lake District</strong>, and the natural landscapes of Cumbria profoundly shaped his writing and philosophy.</p>
<p><em>The Prelude</em> is Wordsworth's epic <strong>autobiographical poem</strong>, tracing the growth of his mind from childhood to adulthood. He began drafting it in <strong>1799</strong>, revised it extensively across his life (the 1805 version in 13 books; the final 1850 version in 14 books), and it was <strong>published posthumously in 1850</strong>. <strong>The AQA Power &amp; Conflict anthology prescribes the 1850 (posthumous) Prelude</strong>, and the extract comes from <strong>Book I</strong>, recounting a childhood boat-stealing incident on Ullswater.</p>
<p><strong>Version note:</strong> AQA prescribes the <strong>1850 published <em>Prelude</em></strong>. OCR prescribes the <strong>1799 two-part <em>Prelude</em></strong> -- the wording is materially different. Always quote from the AQA-anthology (1850) version on this page.</p>
<p>The Romantics valued <strong>emotion over reason</strong>, celebrated the <strong>power and beauty of nature</strong>, and explored the concept of <strong>the sublime</strong> -- the idea that encounters with vast, powerful, or terrifying natural phenomena could produce awe, wonder, and even spiritual transformation. <strong>Edmund Burke</strong> (in <em>A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful</em>, 1757) defined the sublime as the union of <strong>terror and awe</strong>; <strong>Immanuel Kant</strong> later refined this in his <em>Critique of Judgement</em> (1790), arguing the sublime arises when the mind confronts something so vast it overwhelms the imagination yet ultimately affirms reason's grandeur. Wordsworth's mountain encounter dramatises exactly this Burkean--Kantian sublime.</p>
<p>In this extract, the young Wordsworth steals a boat and rows across a lake at night. A mountain appears to rise up and pursue him, filling him with existential terror. The experience permanently changes his understanding of nature from something nurturing to something vast and unknowable -- a "spot of time" (Wordsworth's term for a formative memory) that shapes the adult poet's mind.</p>`,

  contextAr: `<p><strong>William Wordsworth</strong> (1770-1850) واحد من مؤسّسي <strong>الحركة الرومانسية (Romantic movement)</strong> في الشعر الإنجليزي. ترعرع في منطقة <strong>Lake District</strong>، ومناظر Cumbria الطبيعية أثّرت تأثير عميق على كتابته وفلسفته.</p>
<p><em>The Prelude</em> هي قصيدة Wordsworth الملحمية <strong>السيريّة الذاتية (autobiographical)</strong>، تتبّع نمو ذهنه من الطفولة لين الكبر. بدأ يكتبها في <strong>1799</strong>، ونقّحها بشكل متواصل طول حياته (نسخة 1805 في 13 كتاب؛ النسخة النهائية 1850 في 14 كتاب)، و<strong>انتشرت بعد وفاته في 1850</strong>. <strong>منهج AQA Power &amp; Conflict يعتمد نسخة 1850 (بعد الوفاة)</strong>، والمقطع مأخوذ من <strong>Book I</strong>، يحكي حادثة طفولية عن سرقة قارب في بحيرة Ullswater.</p>
<p><strong>ملاحظة عن النسخة:</strong> AQA يعتمد <strong>نسخة 1850 المنشورة من <em>The Prelude</em></strong>. أما OCR فيعتمد <strong>نسخة 1799 المؤلّفة من جزئين</strong> - والصياغة مختلفة اختلاف جوهري. لازم دايماً تستشهد من نسخة anthology AQA (1850) في هالصفحة.</p>
<p>الرومانسيون كانوا يقدّرون <strong>العاطفة على العقل</strong>، ويحتفون بـ<strong>قوة الطبيعة وجمالها</strong>، ويستكشفون مفهوم <strong>الـsublime (الجلال المهيب)</strong> - وهو الفكرة إن مواجهة الإنسان لظواهر طبيعية ضخمة أو مرعبة أو مهيبة تقدر تنتج إحساس بالرهبة والدهشة، وحتى تحوّل روحي. <strong>Edmund Burke</strong> (في كتابه <em>A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful</em>، 1757) عرّف الـsublime على إنه اجتماع <strong>الرعب والرهبة</strong>؛ ثم <strong>Immanuel Kant</strong> هذّب هالفكرة في <em>Critique of Judgement</em> (1790)، وقال إن الـsublime يطلع لمّا يواجه الذهن شي ضخم لدرجة إنه يطغى على الخيال، بس في النهاية يأكّد عظمة العقل. مواجهة Wordsworth للجبل تجسّد بالضبط هالنوع من الـsublime البِركي-الكانطي.</p>
<p>في هالمقطع، الـWordsworth الصغير يسرق قارب ويجدّف في بحيرة بالليل. ويظهر جبل كأنه يقوم ويلحقه، فيمتلئ برعب وجودي. التجربة تغيّر فهمه للطبيعة تغيير دائم - من شي حنون لشي ضخم ومجهول - وتصير "spot of time" (مصطلح Wordsworth للذكرى التكوينية) اللي يصيغ ذهن الشاعر لمّا يكبر.</p>`,

  summary: `CONFIDENCE AND FREEDOM (Lines 1--11)
The speaker recalls a summer evening when, guided by nature ("led by her"), he found a small boat and impulsively took it out onto a lake. He rows with energy and confidence ("lustily I dipped my oars"), feeling at one with the natural world. The boat moves gracefully, compared to a swan, and the scene is calm and beautiful.

THE ENCOUNTER WITH THE MOUNTAIN (Lines 12--19)
The mood shifts dramatically at the volta. A huge, black mountain peak appears from behind the horizon. It seems to have its own will ("voluntary power") and rises up like a living creature ("upreared its head"). The mountain appears to stride after the boy, transforming from scenery into a terrifying, purposeful force.

FEAR AND RETREAT (Lines 19--23)
Terrified, the boy turns back with "trembling oars" -- a stark contrast to his earlier confidence. He "stole" his way back across the silent water and returned the boat. The verb "stole" mirrors the earlier "stealth", but now the boy is the one cowering, not adventuring.

LASTING PSYCHOLOGICAL IMPACT (Lines 24--35)
The final section describes the aftermath. For many days the boy's mind is troubled by "a dim and undetermined sense / Of unknown modes of being." The familiar, comforting images of nature (trees, sky, green fields) are replaced by "huge and mighty forms" that haunt his thoughts by day and trouble his dreams. The experience has permanently altered his relationship with the natural world.`,

  summaryAr: `الثقة والحرية (الأبيات 1-11)
المتكلّم يتذكّر مغرب صيف، لمّا قادته الطبيعة ("led by her")، فلقى قارب صغير وأخذه بشكل اندفاعي وطلع فيه على بحيرة. يجدّف بطاقة وثقة ("lustily I dipped my oars")، ويحسّ إنه واحد مع الطبيعة. القارب يتحرّك بانسياب، مشبّه بالـswan (البجعة)، والمنظر هادئ وحلو.

المواجهة مع الجبل (الأبيات 12-19)
المزاج ينقلب فجأة عند الـvolta. قمّة جبل ضخمة وسوداء تطلع من خلف الأفق. يبدو إن لها إرادتها الخاصة ("voluntary power") وتقوم مثل مخلوق حي ("upreared its head"). الجبل يصير كأنه يخطو ورا الولد، ويتحوّل من مجرّد منظر إلى قوة مرعبة لها هدف.

الخوف والتراجع (الأبيات 19-23)
الولد، وهو خايف، يرجّع القارب بـ"trembling oars" - وهذا تضاد قوي مع ثقته السابقة. "Stole" طريقه عبر الماء الصامت، ورجّع القارب لمكانه. الفعل "stole" يعكس "stealth" اللي قبل، بس الحين الولد هو اللي يتسلّل خايف، مو في مغامرة.

الأثر النفسي الدائم (الأبيات 24-35)
المقطع الأخير يوصف ما صار بعدها. لأيام عديدة، ذهن الولد متعب بـ"a dim and undetermined sense / Of unknown modes of being." الصور المألوفة المريحة للطبيعة (شجر، سماء، حقول خضراء) تنبدل بـ"huge and mighty forms" تطارد أفكاره في النهار وتزعج أحلامه. التجربة غيّرت علاقته بالعالم الطبيعي بشكل دائم.`,

  formAndStructure: `BLANK VERSE
Written in unrhymed iambic pentameter (blank verse), giving the poem a natural, conversational rhythm that mirrors the flow of memory and thought. The lack of rhyme allows Wordsworth to build long, flowing sentences that carry the reader forward.

ENJAMBMENT
Extensive enjambment throughout the extract creates a sense of momentum and urgency. Lines spill into each other, mirroring both the movement of the boat through water and the way memories and emotions overflow boundaries. Key examples: "my boat / Went heaving" and "my brain / Worked with a dim and undetermined sense".

CAESURA
Caesura is used at pivotal moments to create pauses that disrupt the flow: "And troubled pleasure." forces the reader to stop and reflect on the oxymoron. "Upreared its head." creates a dramatic full stop at the moment of greatest terror.

FIRST PERSON RETROSPECTIVE
The poem is written in the first person, looking back on a childhood experience from an adult perspective. This dual viewpoint allows Wordsworth to convey both the immediate sensations of the boy and the mature understanding of the man reflecting on their significance.

VOLTA / TURNING POINT
The dramatic turning point occurs around line 16 with "When, from behind that craggy steep". The mood shifts from confidence and pleasure to awe and terror. The structure mirrors a journey: outward (confidence) --> encounter (sublime fear) --> return (retreat) --> aftermath (reflection).

SINGLE VERSE PARAGRAPH
The extract is one continuous block of text with no stanza breaks, reflecting the unbroken flow of memory and the way the experience consumed his consciousness entirely.`,

  formAndStructureAr: `Blank verse
مكتوبة بالـiambic pentameter بدون قافية (blank verse)، وهذا يعطي القصيدة إيقاع طبيعي شبه محادثة، يحاكي تدفّق الذاكرة والأفكار. غياب القافية يخلّي Wordsworth يبني جمل طويلة منسابة تشدّ القارئ معاها.

Enjambment
الـenjambment مستخدم بكثافة عبر المقطع، يخلق إحساس بالاندفاع والإلحاح. الأبيات تنساب لبعضها، وهذا يحاكي حركة القارب في الماء وفي نفس الوقت يحاكي طريقة تفيض فيها الذكريات والمشاعر فوق الحدود. أمثلة مهمّة: "my boat / Went heaving" و"my brain / Worked with a dim and undetermined sense".

Caesura
الـcaesura مستخدم في لحظات محورية عشان يخلق توقّفات تكسر التدفّق: "And troubled pleasure." تجبر القارئ يقف ويفكّر في الـoxymoron. و"Upreared its head." تخلق وقفة دراميّة كاملة في أوج لحظة الرعب.

سرد بضمير المتكلّم مع نظرة استرجاعية
القصيدة مكتوبة بضمير المتكلّم، يرجع للوراء على تجربة طفولة من منظور رجل كبير. هالازدواج في وجهة النظر يخلّي Wordsworth ينقل في نفس الوقت الإحساس المباشر للولد، والفهم الناضج للرجل وهو يتأمّل في معنى التجربة.

Volta / نقطة التحوّل
الـvolta يطلع تقريباً عند البيت 16 مع "When, from behind that craggy steep". المزاج ينقلب من الثقة والمتعة إلى الرهبة والرعب. البنية تحاكي رحلة: خروج (ثقة) ← مواجهة (sublime مرعب) ← رجوع (انسحاب) ← ما بعدها (تأمّل).

مقطع شعري واحد متواصل
المقطع كتلة واحدة من النص بدون فواصل بين الـstanzas، وهذا يعكس تدفّق الذاكرة بلا انقطاع، والطريقة اللي ابتلعت فيها التجربة وعي الولد بالكامل.`,

  keyQuotes: [
    {
      quote: 'One summer evening (led by her)',
      analysis:
        'Nature is personified as a guiding female figure. The parenthetical aside suggests this is something the adult narrator now understands -- that nature was leading him towards a formative experience.',
      themes: ['Power of nature', 'Memory', 'The sublime'],
      analysisAr:
        'الطبيعة تُجسَّد (personification) على هيئة شخصية أنثى تقود الولد. الجملة الاعتراضية بين القوسين توحي إن هذا شي يفهمه الراوي لمّا كبر - إن الطبيعة كانت تقوده نحو تجربة تكوينية تغيّره.',
      themesAr: ['قوة الطبيعة', 'الذاكرة', 'الـsublime'],
    },
    {
      quote: 'lustily I dipped my oars',
      analysis:
        'The adverb "lustily" conveys youthful energy, physical confidence, and enthusiasm. The boy feels powerful and in control of his environment -- a confidence that will be dramatically overturned.',
      themes: ['Youth', 'Confidence', 'Growing up'],
      analysisAr:
        'الـadverb "lustily" ينقل طاقة شبابية وثقة جسدية وحماس. الولد يحسّ إنه قوي ومسيطر على المكان حواليه - وهي ثقة بتنقلب رأساً على عقب بشكل دراميّ.',
      themesAr: ['الشباب', 'الثقة', 'النضوج'],
    },
    {
      quote: 'troubled pleasure',
      analysis:
        'This oxymoron captures the duality of the experience: excitement mixed with guilt about stealing the boat. It foreshadows the deeper "trouble" to come and suggests that transgression and growth are linked.',
      themes: ['Guilt', 'Growing up', 'The sublime'],
      analysisAr:
        'هذا الـoxymoron يلتقط ازدواجية التجربة: حماس مخلوط بشعور بالذنب على سرقة القارب. ويلمّح بـ"trouble" أعمق راح يجي قدّام، ويوحي إن التجاوز والنمو شيء واحد مربوط ببعض.',
      themesAr: ['الذنب', 'النضوج', 'الـsublime'],
    },
    {
      quote: 'a huge peak, black and huge',
      analysis:
        'The repetition of "huge" emphasises the overwhelming scale of the mountain. "Black" adds menace and darkness. The inversion of the normal adjective order creates a sense of the mountain growing larger as the boy stares at it.',
      themes: ['Power of nature', 'The sublime', 'Fear'],
      analysisAr:
        'تكرار كلمة "huge" يأكّد على حجم الجبل الطاغي. وكلمة "black" تضيف خطر وظلمة. وقلب ترتيب الـadjectives عن المعتاد يخلق إحساس إن الجبل يكبر ويكبر كل ما الولد يطالعه.',
      themesAr: ['قوة الطبيعة', 'الـsublime', 'الخوف'],
    },
    {
      quote: 'Upreared its head',
      analysis:
        'The mountain is personified as a creature rising up. "Upreared" suggests something rearing back, like a horse or serpent, giving the mountain animal-like threat. The mountain seems to assert its dominance over the boy.',
      themes: ['Power of nature', 'The sublime', 'Fear'],
      analysisAr:
        'الجبل يتجسّد (personification) كأنه مخلوق يقوم فجأة. كلمة "upreared" توحي بشي يتراجع للوراء ثم يهجم، مثل الحصان أو الثعبان، فتعطي الجبل تهديد شبيه بالحيوان. الجبل كأنه يفرض هيمنته على الولد.',
      themesAr: ['قوة الطبيعة', 'الـsublime', 'الخوف'],
    },
    {
      quote: 'measured motion like a living thing',
      analysis:
        'The simile makes the mountain seem animate and purposeful. "Measured motion" suggests slow, deliberate pursuit -- the mountain is not chaotic but controlled and powerful, which makes it more terrifying.',
      themes: ['Power of nature', 'The sublime', 'Personification'],
      analysisAr:
        'الـsimile يخلّي الجبل يبيّن كأنه حي وله هدف. "Measured motion" توحي بمطاردة بطيئة محسوبة - الجبل مو فوضوي، هو منظّم وقوي، وهذا اللي يخلّيه أكثر رعب.',
      themesAr: ['قوة الطبيعة', 'الـsublime', 'الـpersonification'],
    },
    {
      quote: 'unknown modes of being',
      analysis:
        'This abstract phrase suggests the boy has glimpsed something beyond human comprehension -- perhaps a spiritual or divine power within nature. The experience opens his mind to forces that cannot be rationally understood.',
      themes: ['The sublime', 'Spirituality', 'Growing up'],
      analysisAr:
        'هالعبارة المجرّدة توحي إن الولد لمح شي ما يقدر يفهمه عقل البشر - يمكن قوة روحية أو إلهية موجودة جوّا الطبيعة. التجربة تفتح ذهنه على قوى ما يقدر العقل يفسّرها.',
      themesAr: ['الـsublime', 'الروحانية', 'النضوج'],
    },
    {
      quote: 'huge and mighty forms, that do not live / Like living men',
      analysis:
        'The final haunting image. The "forms" are not human but they move through his mind as if alive. Nature has permanently altered his consciousness -- it is no longer a backdrop but an active, overwhelming presence in his inner life.',
      themes: ['Power of nature', 'Memory', 'The sublime'],
      analysisAr:
        'الصورة الأخيرة المسكنة. الـ"forms" مو بشر، بس تتحرّك في ذهنه كأنها حيّة. الطبيعة غيّرت وعيه تغيير دائم - ما عادت مجرّد خلفية، صارت حضور فعّال وطاغي في حياته الداخلية.',
      themesAr: ['قوة الطبيعة', 'الذاكرة', 'الـsublime'],
    },
    {
      quote: 'No familiar shapes / Remained',
      analysis:
        'The negation of everything familiar shows how completely the experience has transformed his perception. The comforting pastoral world has been replaced by something vast and unknowable.',
      themes: ['Loss of innocence', 'The sublime', 'Growing up'],
      analysisAr:
        'نفي كل شي مألوف يبيّن كيف غيّرت التجربة إدراكه بشكل كامل. العالم الريفي الهادي اللي كان يريحه انبدل بشي ضخم ومجهول ما يقدر يستوعبه.',
      themesAr: ['فقد البراءة', 'الـsublime', 'النضوج'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example: 'Upreared its head ... Strode after me',
      effect:
        'The mountain is given human and animal qualities -- rising up and striding after the boy like a predator. This transforms nature from a passive setting into an active, terrifying force with its own will and purpose.',
      lineRef: 18,
    },
    {
      device: 'Sublime imagery',
      example: 'a huge peak, black and huge, / As if with voluntary power instinct',
      effect:
        'The mountain embodies the Romantic sublime: something so vast and powerful it overwhelms human understanding. The encounter fills the boy with awe and terror, forcing him to confront his own insignificance.',
      lineRef: 16,
    },
    {
      device: 'Sibilance',
      example: 'silent ... stole ... stealth',
      effect:
        'The repeated "s" sounds create a hushed, secretive atmosphere throughout the extract. They link the boy\'s initial act of theft with his fearful retreat, bookending the experience with guilt and secrecy.',
      lineRef: 12,
    },
    {
      device: 'Enjambment',
      example: 'my brain / Worked with a dim and undetermined sense',
      effect:
        "Lines spill into each other without pause, mirroring both the physical momentum of the boat and the way the experience overflows into the boy's consciousness, refusing to be contained.",
      lineRef: 25,
    },
    {
      device: 'Contrast',
      example: '"lustily I dipped" vs "trembling oars I turned"',
      effect:
        "The dramatic contrast between the boy's confident outward journey and his terrified return underscores nature's power to humble and transform. His physical control gives way to emotional vulnerability.",
      lineRef: 19,
    },
    {
      device: 'Simile',
      example: 'Went heaving through the water like a swan',
      effect:
        'The swan simile evokes grace, beauty, and harmony with nature during the confident phase of the journey. It also carries connotations of elegance that contrast sharply with the violent imagery of the mountain encounter.',
      lineRef: 8,
    },
    {
      device: 'Oxymoron',
      example: 'troubled pleasure',
      effect:
        "Combines contradictory emotions -- pleasure in the adventure, trouble from the guilt. This compression captures the complexity of the boy's emotional state and foreshadows the deeper psychological disturbance to come.",
      lineRef: 5,
    },
    {
      device: 'Metaphor',
      example: 'There hung a darkness, call it solitude / Or blank desertion',
      effect:
        'Darkness becomes a metaphor for psychological transformation. It "hangs" over his thoughts like a physical weight, suggesting the experience has permanently clouded his understanding of the world.',
      lineRef: 28,
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'pre-1',
    question: 'What does the young Wordsworth do at the start of the extract?',
    type: 'multiple-choice',
    options: [
      'He goes swimming in a lake',
      'He steals a boat and rows across a lake',
      'He climbs a mountain',
      'He walks through a forest',
    ],
    correctIndex: 1,
    explanation:
      'The young Wordsworth finds a small boat tied to a willow tree, unlooses its chain, and rows it out across a lake - an "act of stealth" that he knows is wrong.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'pre-2',
    question: 'What does the mountain appear to do in the poem?',
    type: 'multiple-choice',
    options: [
      'It crumbles and falls into the lake',
      'It rises up and seems to stride after the boy',
      'It is covered in beautiful flowers',
      'It disappears behind clouds',
    ],
    correctIndex: 1,
    explanation:
      'The mountain "Upreared its head" and "Strode after me" - it is personified as a living creature that pursues the terrified boy, demonstrating nature\'s overwhelming power.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'pre-3',
    question: 'What is the effect of the oxymoron "troubled pleasure"?',
    type: 'multiple-choice',
    options: [
      'It shows the boy is happy throughout',
      'It captures the mix of excitement and guilt about stealing the boat',
      'It describes the weather conditions',
      "It refers to the mountain's appearance",
    ],
    correctIndex: 1,
    explanation:
      '"Troubled pleasure" combines contradictory emotions - the thrill of adventure with the guilt of transgression. It foreshadows the deeper psychological disturbance to come.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'pre-4',
    question: 'What form is the extract written in?',
    type: 'multiple-choice',
    options: [
      'Rhyming couplets',
      'Blank verse (unrhymed iambic pentameter)',
      'Free verse with no regular metre',
      'A Shakespearean sonnet',
    ],
    correctIndex: 1,
    explanation:
      'The extract is written in blank verse - unrhymed iambic pentameter. This gives the poem a natural, conversational rhythm that mirrors the flow of memory and thought.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'pre-5',
    question:
      'How does the contrast between "lustily I dipped" and "trembling oars" reflect the poem\'s message?',
    type: 'multiple-choice',
    options: [
      'It shows the weather changed',
      "It shows the boy's confidence being replaced by terror as nature asserts its power",
      'It shows the boy is getting tired',
      'It shows the oars are broken',
    ],
    correctIndex: 1,
    explanation:
      'The dramatic shift from confident energy ("lustily") to fear ("trembling") demonstrates how nature can humble even the most self-assured individual, which is the poem\'s central theme.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'pre-6',
    question: 'What does the phrase "unknown modes of being" suggest?',
    type: 'multiple-choice',
    options: [
      'The boy has discovered a new species',
      'The boy has glimpsed something beyond human comprehension - a spiritual power in nature',
      'The boy has learned a new language',
      'The boy has forgotten who he is',
    ],
    correctIndex: 1,
    explanation:
      '"Unknown modes of being" is deliberately abstract. It suggests the boy has encountered something transcendent and unknowable - a power in nature that exceeds human understanding, central to the Romantic concept of the sublime.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'pre-7',
    question: 'What is The Prelude?',
    type: 'multiple-choice',
    options: [
      'A collection of war poems',
      "An epic autobiographical poem tracing the growth of Wordsworth's mind",
      'A novel about the Lake District',
      'A play about the French Revolution',
    ],
    correctIndex: 1,
    explanation:
      "The Prelude is Wordsworth's epic autobiographical poem, tracing the development of his mind from childhood to adulthood. This extract comes from Book I, recounting a childhood experience on a lake.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'pre-8',
    question: 'What Romantic concept does the encounter with the mountain best exemplify?',
    type: 'multiple-choice',
    options: [
      'Pathetic fallacy',
      'The sublime - awe and terror caused by vast, powerful natural phenomena',
      'The pastoral - peaceful harmony with nature',
      'The picturesque - nature as beautiful scenery',
    ],
    correctIndex: 1,
    explanation:
      'The sublime is the Romantic concept that encounters with vast, powerful, or terrifying natural phenomena can produce awe, wonder, and spiritual transformation. The mountain encounter is a textbook example.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'pre-9',
    question: 'Why is the extract written as a single verse paragraph with no stanza breaks?',
    type: 'multiple-choice',
    options: [
      'Wordsworth forgot to add breaks',
      'The continuous block reflects the unbroken flow of memory and how the experience consumed his consciousness entirely',
      'It makes the poem shorter',
      "It was a printer's error",
    ],
    correctIndex: 1,
    explanation:
      'The single continuous block of text mirrors the way memory flows without neat divisions. The experience was so overwhelming it consumed his entire consciousness, refusing to be compartmentalised.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'pre-10',
    question:
      'Which poem from the Power and Conflict anthology best pairs with The Prelude for comparing the power of nature?',
    type: 'multiple-choice',
    options: [
      'My Last Duchess by Browning',
      'Storm on the Island by Seamus Heaney',
      'Checking Out Me History by Agard',
      'Remains by Simon Armitage',
    ],
    correctIndex: 1,
    explanation:
      "Both The Prelude and Storm on the Island explore the terrifying power of nature and humanity's vulnerability. Both use first-person speakers who shift from confidence to fear in the face of natural forces.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'The extract explores the power of nature, the Romantic sublime, the transition from innocence to experience, and the lasting psychological impact of a formative childhood encounter.',
    keyPoints: [
      'Nature is a powerful, autonomous force - it has "voluntary power" and can humble humans',
      'The sublime - encountering something so vast it overwhelms understanding',
      "Growing up - the boy's confidence is permanently replaced by awe and uncertainty",
      'Memory - the experience haunts him "by day" and in his "dreams", showing its lasting impact',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Wordsworth uses personification, contrast, simile, and increasingly abstract language to chart the shift from youthful confidence to existential terror.',
    keyPoints: [
      'Personification of the mountain: "Upreared its head", "Strode after me"',
      'Contrast: "lustily I dipped" vs "trembling oars" - confidence replaced by fear',
      'Swan simile: grace and harmony before the terrifying encounter',
      '"Unknown modes of being" - abstract language for something beyond comprehension',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Written in blank verse as a single verse paragraph, with extensive enjambment that mirrors the flow of memory and the momentum of the boat journey.',
    keyPoints: [
      'Blank verse (unrhymed iambic pentameter) - natural, conversational rhythm',
      'Volta at "When, from behind that craggy steep" - the dramatic turning point',
      "Enjambment creates momentum, mirroring both the boat's movement and overflowing memory",
      'First-person retrospective narration - adult reflecting on childhood experience',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Wordsworth present the power of nature in this extract from The Prelude?',
  'Compare how nature is presented as a powerful force in The Prelude and one other poem from the anthology.',
  'How does Wordsworth use language and structure to show a shift from confidence to fear?',
]

/* ── Compare-with poems ────────────────────────────────────────── */

const COMPARE_WITH = [
  {
    title: 'Storm on the Island',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/power-and-conflict/storm-on-the-island',
    points: [
      "Both explore the terrifying power of nature and humanity's vulnerability",
      'Both use first-person speakers who shift from confidence to fear',
      "Heaney's storm is literal and present; Wordsworth's mountain is remembered and internalised",
    ],
    themes: ['Power of nature', 'Fear', 'The sublime'],
  },
  {
    title: 'Exposure',
    poet: 'Wilfred Owen',
    link: '/revision/poetry/power-and-conflict/exposure',
    points: [
      'Both show nature as an overwhelming, hostile force that dwarfs human power',
      "Owen's soldiers are physically destroyed by nature; Wordsworth's boy is psychologically transformed",
      "Both use repetition and sensory imagery to convey nature's relentless presence",
    ],
    themes: ['Power of nature', 'Suffering', 'Fear'],
  },
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    link: '/revision/poetry/power-and-conflict/ozymandias',
    points: [
      'Both are Romantic poems exploring the limits of human power against greater forces',
      'Ozymandias shows time and nature destroying human arrogance; The Prelude shows nature humbling youthful confidence',
      'Both use imagery of vast scale to diminish human significance',
    ],
    themes: ['Power of nature', 'Hubris', 'Transience of power'],
  },
]

/* ── Page component ────────────────────────────────────────────── */

export default function ThePreludePage() {
  const t = useT()
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
          {
            name: 'Power and Conflict',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict',
          },
          {
            name: 'The Prelude',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/the-prelude',
          },
        ]}
      />
      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('rev.poetry.shared.back_to_poetry')}
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              The Prelude: Stealing the Boat
            </h1>
            <p className="text-body-sm text-muted-foreground">
              William Wordsworth &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              AQA
            </Badge>
          </div>
        </div>
      </div>

      {/* ── Interactive poem viewer ─────────────────────────────── */}
      <StudyTools
        textName="The Prelude: Stealing the Boat"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="The Prelude"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={POEM} />

      {/* ── Compare with ───────────────────────────────────────── */}
      <section>
        <h2 className="text-heading-md font-heading text-foreground mb-4">
          {t('rev.poetry.shared.compare_with')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARE_WITH.map((cmp) => (
            <div
              key={cmp.title}
              className="rounded-xl border border-border bg-card p-5 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-foreground">{cmp.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{cmp.poet}</p>

              <ul className="space-y-1.5 mb-4 flex-1">
                {cmp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground leading-relaxed pl-3 relative before:absolute before:left-0 before:top-1.5 before:size-1 before:rounded-full before:bg-muted-foreground/40"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {cmp.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-rose-500/10 px-2 py-0.5 text-xs text-rose-400"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                render={<Link href={cmp.link} />}
              >
                Study {cmp.title}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        The Prelude (1850) by William Wordsworth is in the public domain. Source: Project Gutenberg
        / Wikisource &mdash; verified against the Verified Library.
      </p>
    </div>
  )
}
