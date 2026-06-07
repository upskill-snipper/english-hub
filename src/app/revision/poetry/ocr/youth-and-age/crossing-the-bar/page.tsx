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
const crossingTheBar: PoemData = {
  title: 'Crossing the Bar',
  poet: 'Alfred Lord Tennyson',
  lines: [
    {
      text: 'Sunset and evening star,',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Sunset" and "evening star" both symbolise the end of the day -- and by extension, the end of life. Tennyson uses dusk as a gentle metaphor for death.',
          color: '#10b981',
        },
        {
          type: 'Tone',
          note: 'The poem opens calmly. Sunset is beautiful, not frightening. This sets the tone for the entire poem: death is not something to fear.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And one clear call for me!',
      annotations: [
        {
          type: 'Religious imagery',
          note: '"One clear call" -- a summons. The capitalisation later of "Pilot" suggests this is a divine call. The exclamation mark expresses readiness, not panic.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'Death is presented as a clear, unmistakable invitation. The speaker is being called home -- and he hears the call distinctly.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And may there be no moaning of the bar,',
      annotations: [
        {
          type: 'Extended metaphor',
          note: '"The bar" is a sandbar at the entrance to a harbour, where waves break loudly ("moaning"). Tennyson uses the journey out of harbour as a metaphor for the soul leaving the body. He wishes for a quiet, calm passage.',
          color: '#10b981',
        },
        {
          type: 'Personification',
          note: '"Moaning" gives the bar a human voice of grief. Tennyson asks that there be no mourning at his death.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'When I put out to sea,',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Put out to sea" -- the soul setting sail from the harbour of life to the open ocean of eternity. The image is calm and adventurous, not dark or terrifying.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'But such a tide as moving seems asleep,',
      annotations: [
        {
          type: 'Imagery',
          note: '"As moving seems asleep" -- a tide so smooth it barely seems to move at all. Tennyson asks for a death so gentle it feels like sleep.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'A serene image. He wants the transition to be silent, peaceful, almost imperceptible -- like falling asleep.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Too full for sound and foam,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Too full" -- the tide is so deep and powerful that it does not need to make noise. Real strength is silent. The image suggests a quiet, dignified death.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'When that which drew from out the boundless deep',
      annotations: [
        {
          type: 'Religious imagery',
          note: '"That which drew from out the boundless deep" -- the soul that came from the infinite ocean of God or eternity. Tennyson is suggesting that the soul originated in the divine and is now returning home.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Turns again home.',
      annotations: [
        {
          type: 'Key quote',
          note: 'The most reassuring line of the first half of the poem. Death is a homecoming -- a return to where the soul originally came from. There is nothing alien or terrifying about it.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Twilight and evening bell,',
      annotations: [
        {
          type: 'Parallelism',
          note: 'Stanza 3 mirrors stanza 1: "Sunset and evening star" / "Twilight and evening bell". Both stanzas open with images of evening, but stanza 3 deepens the darkness from sunset to twilight -- the speaker is moving closer to death.',
          color: '#a855f7',
        },
        {
          type: 'Religious imagery',
          note: '"Evening bell" suggests the bell of a church or monastery summoning worshippers. Death is a religious call to evening prayer.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And after that the dark!',
      annotations: [
        {
          type: 'Tone',
          note: '"The dark!" -- the only mildly fearful note in the poem. After twilight comes night. The exclamation mark gives the line a slight thrill or shudder before the calmness returns.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And may there be no sadness of farewell,',
      annotations: [
        {
          type: 'Address to mourners',
          note: 'Tennyson is speaking directly to those he leaves behind, asking them not to grieve. This is a poem to console the living as much as it is to face death himself.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'When I embark;',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Embark" continues the sea voyage metaphor. The soul is boarding the boat that will take it across the bar to the open sea of eternity.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'For though from out our bourne of Time and Place',
      annotations: [
        {
          type: 'Diction',
          note: '"Bourne" is an old word for boundary or limit. Tennyson is saying that even though death takes him beyond the limits of time and space (this earthly life), it is not the end.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'The flood may bear me far,',
      annotations: [
        {
          type: 'Imagery',
          note: '"The flood" -- the great tide of death will carry him a long distance. Tennyson sounds calm: distance does not frighten him because he knows where he is going.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I hope to see my Pilot face to face',
      annotations: [
        {
          type: 'Religious imagery',
          note: '"Pilot" is capitalised -- it refers to God. In nautical terms, a pilot is the navigator who guides a ship through dangerous waters. Tennyson believes God has been steering his life all along, and after death he will finally meet his Pilot directly.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: "The poem's emotional and spiritual climax. The face-to-face meeting with God transforms death from an ending into a long-awaited reunion.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'When I have crost the bar.',
      annotations: [
        {
          type: 'Cyclical structure',
          note: "The poem ends with the same image it began with: crossing the bar. The repetition gives the poem a sense of completion. The crossing has happened in the speaker's imagination -- he has rehearsed his own death and found peace with it.",
          color: '#a855f7',
        },
      ],
    },
  ],

  context: `
    <h3>Alfred Lord Tennyson (1809--1892)</h3>
    <p>Alfred, Lord Tennyson, was the most famous poet of the Victorian era. He served as Poet Laureate of Great Britain for over 40 years, longer than anyone before or since. He wrote about big public themes (war, empire, religion) but also private grief, faith and doubt. His most famous works include <em>In Memoriam</em>, <em>The Charge of the Light Brigade</em>, and <em>The Lady of Shalott</em>.</p>

    <h3>Composition (1889)</h3>
    <p>Tennyson wrote "Crossing the Bar" in <strong>October 1889</strong>, when he was 80 years old, as he was crossing the Solent (the channel between the Isle of Wight and the English mainland) on a steamer. He had been seriously ill, and the poem reflects his thoughts on his approaching death. He insisted that this poem should always be placed at the end of any collection of his work -- a kind of final word to readers.</p>

    <h3>The bar</h3>
    <p>Literally, "the bar" is a sandbar at the entrance to a harbour. As ships cross it, the changing depth of water often makes the waves break loudly -- the "moaning" of the bar. For Tennyson, this becomes a metaphor for the moment of death: the dangerous, noisy crossing from the harbour of life into the open sea of eternity. He hopes for a calm crossing, when the tide is so high that the bar is silent.</p>

    <h3>Victorian faith and doubt</h3>
    <p>The Victorian period was a time of religious crisis. Darwin\'s <em>On the Origin of Species</em> (1859) and growing scientific scepticism led many Victorians to question Christian belief. Tennyson himself struggled with doubt throughout his life (most famously in <em>In Memoriam</em>). "Crossing the Bar" represents his final affirmation of faith: he hopes to meet his "Pilot" -- God -- after death.</p>
  `,

  contextAr: `
    <h3>Alfred Lord Tennyson (1809-1892)</h3>
    <p>Alfred, Lord Tennyson، أشهر شاعر في العصر الفيكتوري. خدم Poet Laureate لبريطانيا أكثر من 40 سنة، أطول مدة شاعر يحملها قبله أو بعده. كتب عن مواضيع عامة كبيرة (الحرب، الإمبراطورية، الدين) لكن كتب عن الحزن الخاص، والإيمان، والشك بعد. أشهر أعماله: <em>In Memoriam</em>، و<em>The Charge of the Light Brigade</em>، و<em>The Lady of Shalott</em>.</p>

    <h3>وقت الكتابة (1889)</h3>
    <p>Tennyson كتب "Crossing the Bar" في <strong>أكتوبر 1889</strong>، وعمره 80 سنة، وهو يعبر الـSolent (المضيق بين Isle of Wight والبرّ الإنجليزي) على باخرة. كان مريض بشكل خطير، والقصيدة تعكس تأمّلاته في موته القريب. أصرّ على إنه دائماً تكون آخر قصيدة في أي مجموعة من أعماله - نوع من الكلمة الأخيرة للقرّاء.</p>

    <h3>الـbar</h3>
    <p>حرفياً، الـ"bar" حاجز رملي عند مدخل الميناء. لمّا تعبر السفن فوقه، تغيّر عمق الماء كثير ما يخلّي الموج يتكسّر بصوت عالي - "moaning of the bar". عند Tennyson، هذا يصير استعارة للحظة الموت: العبور الخطير الصاخب من ميناء الحياة إلى البحر المفتوح للأبدية. هو يتمنّى عبور هادي، لمّا يكون المدّ عالي بحيث يصير الحاجز ساكت.</p>

    <h3>الإيمان والشك في العصر الفيكتوري</h3>
    <p>العصر الفيكتوري وقت أزمة دينية. كتاب Darwin <em>On the Origin of Species</em> (1859) وتنامي الشكّ العلمي خلّى كثير من الفيكتوريين يسألون عن العقيدة المسيحية. Tennyson نفسه عانى من الشكّ طول حياته (أشهر تعبير عن هذا في <em>In Memoriam</em>). "Crossing the Bar" تمثّل تأكيده النهائي لإيمانه: هو يأمل يقابل "Pilot" - الإله - بعد الموت.</p>
  `,

  summary: `Stanza 1: The speaker hears "one clear call" at sunset -- a summons to leave life. He hopes there will be no "moaning of the bar" (no painful, noisy struggle) when he sets out to sea (dies). The metaphor of leaving harbour for the open ocean is established.

Stanza 2: He wishes for a calm tide -- one so deep and gentle it barely seems to move. Such a tide will carry him back to where the soul originally came from: "the boundless deep" (the infinite ocean of God or eternity). Death is reframed as a homecoming.

Stanza 3: As twilight deepens to "the dark", the speaker hears another evening sound -- a bell. He asks his loved ones not to grieve when he "embarks". The sea voyage metaphor continues: he is boarding a ship for an unknown but trusted destination.

Stanza 4: Although the tide may carry him far beyond the limits of time and space, he hopes to meet his "Pilot" -- God, who has been steering his life all along -- "face to face" once he has crossed the bar. The poem ends with calm confidence in a meeting beyond death.

Overall meaning: The poem is a meditation on death by an elderly poet. Tennyson uses the metaphor of a peaceful sea voyage to make death feel calm, beautiful, and welcome -- a long-awaited homecoming and reunion with God, not an end. It is one of the most serene poems about mortality in English literature.`,

  summaryAr: `Stanza 1: المتكلّم يسمع "one clear call" عند الغروب - نداء عشان يترك الحياة. هو يأمل ما يكون فيه "moaning of the bar" (ما يكون فيه صراع مؤلم وضجّة) لمّا يطلع للبحر (يموت). يتأسّس استعارة مغادرة الميناء للمحيط المفتوح.

Stanza 2: هو يتمنّى مدّ هادي - مدّ عميق ولطيف يكاد ما يتحرّك. هالمدّ راح يحمله ويرجّعه للمكان اللي جت منه الروح أصلاً: "the boundless deep" (المحيط اللامتناهي للإله أو للأبدية). الموت يُعاد تأطيره كرجوع للديار.

Stanza 3: لمّا الغسق يعمّق ويصير "the dark"، المتكلّم يسمع صوت مسائي ثاني - جرس. يطلب من أحبابه ما يحزنون لمّا "embark". استعارة الرحلة البحرية تستمرّ: هو يركب سفينة لوجهة مجهولة لكن موثوقة.

Stanza 4: على الرغم من إن المدّ ممكن يحمله بعيد فوق حدود الزمان والمكان، هو يأمل يقابل "Pilot" - الإله، اللي كان يقود حياته من البداية - "face to face" لمّا يعبر الـbar. القصيدة تنتهي بثقة هادية في لقاء بعد الموت.

المعنى العام: القصيدة تأمّل في الموت من شاعر مسنّ. Tennyson يستخدم استعارة رحلة بحرية هادية عشان يخلّي الموت يحسّ بأنه هادي، جميل، ومرحَّب فيه - رجوع طال انتظاره للديار، ولقاء مع الإله، مو نهاية. من أكثر القصائد سكينة عن الموت في الأدب الإنجليزي.`,

  formAndStructure: `Form: Four stanzas, each containing four lines. Each stanza follows an ABAB rhyme scheme. The form is regular and balanced, mirroring the calm, controlled mood of the speaker.

Metre: The metre is irregular, alternating long and short lines (often four feet then two, or five then three). This swelling-and-receding rhythm is deliberate -- it mimics the rise and fall of waves, reinforcing the sea voyage metaphor.

Two-part structure: The poem divides into two halves of two stanzas each. Stanzas 1--2 cover sunset; stanzas 3--4 cover twilight and dark. The deepening night mirrors the speaker\'s movement towards death. Each half ends with the same idea: a gentle return home (stanza 2) and a hope to meet the Pilot (stanza 4).

Extended metaphor: The whole poem is built on the metaphor of crossing a sandbar at the mouth of a harbour. Life is the harbour; death is the bar; eternity is the open sea; God is the Pilot. The metaphor is sustained throughout, never breaking.

Cyclical structure: The first stanza ("the bar") and the last line ("crost the bar") echo each other, framing the poem with the same image. The crossing has happened in the speaker\'s mind -- by the end, he has imagined his death and found peace.

Tone: Calm, reverent, hopeful. There is no fear, no rage. Tennyson presents death as something natural and welcome -- the work of a long life now coming to its quiet end.`,

  formAndStructureAr: `Form (الشكل): أربعة مقاطع، كل مقطع أربعة أبيات. كل مقطع يتبع نظام قافية ABAB. الشكل منتظم ومتوازن، يعكس المزاج الهادي المضبوط للمتكلّم.

Metre (الوزن): الوزن غير منتظم، يتناوب بين أبيات طويلة وقصيرة (غالباً أربع تفعيلات بعدين تفعيلتين، أو خمس بعدين ثلاث). إيقاع المدّ والجزر هذا مقصود - يحاكي صعود وهبوط الموج، ويعزّز استعارة الرحلة البحرية.

تركيب من قسمين: القصيدة تنقسم نصفين، كل نصف مقطعين. Stanzas 1-2 تغطّي الغروب؛ Stanzas 3-4 تغطّي الغسق والظلام. تعمّق الليل يعكس حركة المتكلّم نحو الموت. كل نصف ينتهي بنفس الفكرة: رجوع لطيف للديار (Stanza 2) وأمل لقاء الـPilot (Stanza 4).

استعارة ممتدّة: القصيدة كلها مبنية على استعارة عبور حاجز رملي عند فم الميناء. الحياة هي الميناء؛ والموت هو الـbar؛ والأبدية هي البحر المفتوح؛ والإله هو الـPilot. الاستعارة مستمرّة طول القصيدة، ما تنكسر.

التركيب الدائري: المقطع الأول ("the bar") والبيت الأخير ("crost the bar") يتجاوبون، ويأطّرون القصيدة بنفس الصورة. العبور صار في ذهن المتكلّم - لمّا توصل النهاية، هو يكون تصوّر موته ووصل لسلام.

النبرة (tone): هادية، فيها وقار، فيها أمل. ما فيه خوف ولا غضب. Tennyson يقدّم الموت كشي طبيعي ومرحَّب فيه - حصيلة حياة طويلة الحين توصل لنهايتها الهادية.`,

  keyQuotes: [
    {
      quote: 'Sunset and evening star, / And one clear call for me!',
      analysis:
        'The opening combines a beautiful evening scene with a divine summons. Sunset symbolises the end of life; the "clear call" is a religious invitation -- there is no doubt or hesitation. The exclamation mark expresses readiness, not fear: the speaker is willing to go.',
      themes: ['Death', 'Religious calling', 'Acceptance'],
      analysisAr:
        'الافتتاحية تجمع بين مشهد مسائي جميل ونداء إلهي. الغروب يرمز لنهاية الحياة؛ والـ"clear call" دعوة دينية - ما فيه شكّ ولا تردّد. علامة التعجّب تعبّر عن استعداد، مو خوف: المتكلّم راضي ينروح.',
      themesAr: ['الموت', 'النداء الديني', 'القبول'],
    },
    {
      quote: 'such a tide as moving seems asleep, / Too full for sound and foam',
      analysis:
        'Tennyson asks for a death so gentle it barely registers. "Too full for sound and foam" -- the tide is so deep that there is no need for splash or noise. True power is silent. He wants his death to be the same: calm, dignified, almost unnoticed.',
      themes: ['Peaceful death', 'Imagery', 'Acceptance'],
      analysisAr:
        'Tennyson يطلب موت خفيف لدرجة يكاد ما يحسّ فيه. وعبارة "too full for sound and foam" - المدّ عميق لدرجة ما يحتاج رشاش أو ضجّة. القوة الحقيقية صامتة. هو يبغي موته يكون نفس الشي: هادي، فيه وقار، شبه ما يلاحَظ.',
      themesAr: ['الموت الهادي', 'الصورة الشعرية', 'القبول'],
    },
    {
      quote: 'When that which drew from out the boundless deep / Turns again home',
      analysis:
        'Tennyson reframes death as a homecoming. The soul came from the "boundless deep" (the infinite ocean of God or eternity), and now it is going back where it came from. There is nothing terrifying or unfamiliar about death -- it is simply a return.',
      themes: ['Soul', 'Return', 'Religious belief'],
      analysisAr:
        'Tennyson يعيد تأطير الموت كرجوع للديار. الروح جت من "the boundless deep" (المحيط اللامتناهي للإله أو للأبدية)، والحين راجعة لمنين جت. ما فيه شي مخيف ولا غريب في الموت - هو مجرّد رجوع.',
      themesAr: ['الروح', 'الرجوع', 'العقيدة الدينية'],
    },
    {
      quote: 'Twilight and evening bell, / And after that the dark!',
      analysis:
        'A subtle deepening from sunset to twilight to darkness -- the speaker is moving closer to death. The "evening bell" is a religious sound (a church bell), and "the dark!" is the only mildly fearful note in the poem. The exclamation mark contains both a shiver and a recognition that the dark must come.',
      themes: ['Movement towards death', 'Religious imagery', 'Calm fear'],
      analysisAr:
        'تعمّق لطيف من الغروب إلى الغسق إلى الظلام - المتكلّم يقترب من الموت. والـ"evening bell" صوت ديني (جرس كنيسة)، وعبارة "the dark!" هي النغمة الوحيدة فيها خوف خفيف في القصيدة. علامة التعجّب تحمل رعشة واعتراف إن الظلام لازم يجي.',
      themesAr: ['التحرّك نحو الموت', 'الصور الدينية', 'الخوف الهادي'],
    },
    {
      quote: 'I hope to see my Pilot face to face / When I have crost the bar',
      analysis:
        'The poem\'s spiritual climax. The "Pilot" (capitalised, meaning God) has been guiding the speaker\'s life all along. After death, the speaker will finally meet him "face to face" -- a phrase from the Bible (1 Corinthians 13:12). Death becomes a long-awaited reunion with God, not an end. This is Tennyson\'s final affirmation of his Christian faith.',
      themes: ['Religious belief', 'Reunion with God', 'Faith'],
      analysisAr:
        'الذروة الروحية للقصيدة. والـ"Pilot" (بـcapital، يعني الإله) كان يقود حياة المتكلّم من البداية. بعد الموت، المتكلّم بالأخير راح يقابله "face to face" - عبارة من الكتاب المقدّس (1 Corinthians 13:12). الموت يصير لقاء طال انتظاره مع الإله، مو نهاية. هذا التأكيد النهائي لـTennyson على إيمانه المسيحي.',
      themesAr: ['العقيدة الدينية', 'اللقاء مع الإله', 'الإيمان'],
    },
  ],

  languageDevices: [
    {
      device: 'Extended metaphor',
      example: 'crossing the bar / putting out to sea / the Pilot',
      effect:
        'The whole poem is built on a sustained sea voyage metaphor: life is the harbour, death is the bar, eternity is the open ocean, God is the Pilot. The metaphor is never broken, giving the poem unity and depth.',
      lineRef: 2,
      effectAr:
        'القصيدة كلها مبنية على استعارة رحلة بحرية مستمرّة: الحياة هي الميناء، والموت هو الـbar، والأبدية هي المحيط المفتوح، والإله هو الـPilot. الاستعارة ما تنكسر أبداً، وهذا يعطي القصيدة وحدة وعمق.',
    },
    {
      device: 'Religious imagery',
      example: 'one clear call / Pilot face to face',
      effect:
        'Tennyson weaves religious language throughout: a divine call, a homecoming, a Pilot. This gradually transforms a meditation on death into a meditation on faith. The capital "P" on "Pilot" is the giveaway: God is steering the ship.',
      lineRef: 1,
      effectAr:
        'Tennyson ينسج اللغة الدينية في كل القصيدة: نداء إلهي، ورجوع للديار، وPilot. هذا يحوّل تأمّلاً في الموت إلى تأمّل في الإيمان شي فشي. والـcapital "P" في "Pilot" هي الإشارة: الإله هو اللي يوجّه السفينة.',
    },
    {
      device: 'Personification',
      example: 'no moaning of the bar',
      effect:
        'The bar is given a human voice of grief ("moaning"). Tennyson asks that there be no mourning at his death. The personification softens the imagery -- the bar can be peaceful or sorrowful, depending on how the soul leaves.',
      lineRef: 2,
      effectAr:
        'الـbar تُعطى صوت بشري حزين ("moaning"). Tennyson يطلب ما يكون فيه نواح عند موته. الـpersonification تلطّف الصورة - الـbar ممكن يكون مسالم أو حزين، حسب كيف تغادر الروح.',
    },
    {
      device: 'Symbolism',
      example: 'Sunset / Twilight / dark',
      effect:
        "The progression from sunset to twilight to dark symbolises the speaker's gradual approach to death. Each stanza pushes a little further into the night. Yet the imagery remains beautiful, not frightening -- death is the natural close of a long day.",
      lineRef: 0,
      effectAr:
        'التدرّج من الغروب إلى الغسق إلى الظلام يرمز لاقتراب المتكلّم التدريجي من الموت. كل مقطع يدفع شوي أعمق في الليل. ومع ذلك، الصورة تبقى جميلة، مو مخيفة - الموت هو الإغلاق الطبيعي ليوم طويل.',
    },
    {
      device: 'Parallelism',
      example: 'Sunset and evening star / Twilight and evening bell',
      effect:
        'Stanzas 1 and 3 begin with parallel imagery -- "evening" combined with a sight (star) or sound (bell). The parallelism creates a sense of stately ritual, like the movements of a church service.',
      lineRef: 8,
      effectAr:
        'Stanzas 1 و3 يبدّأون بصور متوازية - "evening" مع مرئي (نجمة) أو صوت (جرس). الـparallelism تخلق إحساس بشعيرة وقورة، مثل حركات قدّاس كنيسة.',
    },
    {
      device: 'Sound and rhythm',
      example: 'rising and falling line lengths',
      effect:
        'Each stanza alternates long and short lines, creating a swelling-and-receding rhythm that mimics ocean waves. The form physically embodies the content: the poem moves like the tide.',
      lineRef: 4,
      effectAr:
        'كل مقطع يناوب بين أبيات طويلة وقصيرة، فيخلق إيقاع مدّ وجزر يحاكي موج المحيط. الشكل يجسّد المحتوى مادّياً: القصيدة تتحرّك مثل المدّ.',
    },
    {
      device: 'Cyclical structure',
      example: '"the bar" (line 3) / "crost the bar" (line 16)',
      effect:
        "The poem begins and ends with the same image. The crossing has happened in the speaker's imagination -- by the end, he has rehearsed his own death and arrived at peace with it. The structure enacts the journey.",
      lineRef: 15,
      effectAr:
        'القصيدة تبدأ وتنتهي بنفس الصورة. العبور صار في خيال المتكلّم - لمّا توصل النهاية، هو يكون تمرّن على موته ووصل لسلام معه. البنية تمثّل الرحلة نفسها.',
    },
  ],
}

const comparisons = [
  {
    title: 'When I Have Fears',
    poet: 'John Keats',
    href: '/revision/poetry/ocr/youth-and-age/when-i-have-fears',
    reason:
      'A perfect contrast: Keats fears dying young before his work is done; Tennyson, in old age, welcomes death calmly. Both poems face mortality, but from opposite ends of life.',
    themes: ['Death', 'Mortality', 'Acceptance vs fear'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'ctb-1',
    question: 'What is "crossing the bar" a metaphor for?',
    type: 'multiple-choice',
    options: [
      'Entering a pub',
      'Death - crossing from life to the afterlife, like a ship crossing the sandbar into the open ocean',
      'Passing a test',
      'Crossing a bridge',
    ],
    correctIndex: 1,
    explanation:
      'The "bar" is a sandbar at a harbour mouth. Crossing it takes the ship from sheltered water to open sea - a metaphor for the soul\'s journey from life to death and beyond.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'ctb-2',
    question: "What is the speaker's attitude to death?",
    type: 'multiple-choice',
    options: [
      'Terror',
      'Calm acceptance - death is a peaceful transition, not something to fear or mourn',
      'Anger',
      'Indifference',
    ],
    correctIndex: 1,
    explanation:
      'The speaker faces death with remarkable calm. He asks for "no moaning of the bar" - no sadness - and hopes to meet his "Pilot" (God) "face to face" after death.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'ctb-3',
    question: 'What does "I hope to see my Pilot face to face" mean?',
    type: 'multiple-choice',
    options: [
      'He wants to fly a plane',
      'The "Pilot" is God - the speaker hopes to meet God after death',
      "He wants to meet a ship's captain",
      'He hopes to navigate well',
    ],
    correctIndex: 1,
    explanation:
      'The "Pilot" is God or a divine guide. Just as a ship\'s pilot guides a vessel through dangerous waters, God guides the soul from life to death and into eternity.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'ctb-4',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      'Four quatrains with ABAB rhyme - the regular, calm form mirrors the peaceful acceptance of death',
      'Free verse',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      "Four neat quatrains with regular rhyme. The calm, orderly structure matches the speaker's serene acceptance of death - there is no formal disruption because there is no emotional turmoil.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'ctb-5',
    question: 'When was it written?',
    type: 'multiple-choice',
    options: [
      'In his youth',
      "1889, three years before Tennyson's death - he asked that it always be placed at the end of his collected poems",
      '1850',
      '1814',
    ],
    correctIndex: 1,
    explanation:
      'Written in 1889 when Tennyson was 80 and in declining health. He requested it be placed last in every edition of his poetry - as a farewell.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'ctb-6',
    question: 'What does "no moaning of the bar" mean?',
    type: 'multiple-choice',
    options: [
      'The bar should be quiet',
      'The speaker asks that there be no mourning or sadness at his death - it should be a peaceful departure',
      'A technical sailing term only',
      'The sea should be calm',
    ],
    correctIndex: 1,
    explanation:
      '"Moaning of the bar" has a double meaning - the sound of waves on the sandbar and the moaning of mourners. The speaker asks for neither - death should be a calm, quiet transition.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'ctb-7',
    question: 'How does the sea metaphor sustain the entire poem?',
    type: 'multiple-choice',
    options: [
      "It doesn't",
      'Every element of the extended sea metaphor maps onto death: the bar is the boundary, the tide is the life force, the Pilot is God, the open sea is eternity',
      'Only one line mentions the sea',
      'The sea is literal only',
    ],
    correctIndex: 1,
    explanation:
      "The extended metaphor is perfectly sustained: harbour = life, bar = death's threshold, open sea = eternity, tide = life force, Pilot = God. Every nautical element has a spiritual meaning.",
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'ctb-8',
    question: 'What does "may there be no sadness of farewell" request?',
    type: 'multiple-choice',
    options: [
      'The speaker has no friends',
      'Death should be treated as a departure, not an ending - the speaker moves on rather than being lost',
      "He doesn't want a funeral",
      'He wants to be forgotten',
    ],
    correctIndex: 1,
    explanation:
      'The speaker reframes death as departure rather than loss. He is not vanishing but travelling - going to meet his Pilot. There should be no grief because he is going somewhere, not nowhere.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'ctb-9',
    question: 'How does the poem balance personal faith and universal experience?',
    type: 'multiple-choice',
    options: [
      'It is only about faith',
      'The maritime metaphor makes death universally accessible while the "Pilot" grounds it in personal Christian faith',
      'It avoids faith entirely',
      'It is only about sailing',
    ],
    correctIndex: 1,
    explanation:
      'The poem works on two levels: the sea metaphor is universal (anyone can understand a journey), while the "Pilot" anchors it in Tennyson\'s personal Christian faith. It is both personal and universal.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'ctb-10',
    question: 'Which poem pairs well with Crossing the Bar?',
    type: 'multiple-choice',
    options: ['The Eagle', 'When I Have Fears by Keats', 'She Walks in Beauty', 'Neutral Tones'],
    correctIndex: 1,
    explanation:
      'Both Crossing the Bar and When I Have Fears address mortality. Tennyson faces death with calm acceptance; Keats faces it with anxiety and unfulfilled desire. Opposite responses to the same theme.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Crossing the Bar presents death as a peaceful departure into eternity, faced with calm acceptance and Christian faith.',
    keyPoints: [
      'Death as journey - crossing from harbour to open sea',
      'Calm acceptance - "no moaning of the bar"',
      'Faith - the "Pilot" (God) awaits after death',
      'Departure not ending - the speaker moves on, not into nothing',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Tennyson uses a perfectly sustained maritime metaphor where every nautical element maps onto the spiritual journey of death.',
    keyPoints: [
      "The bar = death's threshold",
      'The tide = life force',
      'The Pilot = God',
      '"No sadness of farewell" - reframing death as departure',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four calm, regular quatrains - the orderly form mirrors the peaceful acceptance of death.',
    keyPoints: [
      'Four quatrains - regular, undisrupted form',
      'ABAB rhyme - orderly, peaceful',
      'No formal disruption - no emotional turmoil',
      'Final request - a farewell placed last in his collected works',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Tennyson present death as a peaceful journey in Crossing the Bar?',
  'Compare how death is presented in Crossing the Bar and one other poem from the anthology.',
  'How does Tennyson use the extended maritime metaphor to explore mortality and faith?',
]

export default function CrossingTheBarPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Crossing the Bar by Alfred, Lord Tennyson - Analysis & Annotations"
        description="Line-by-line analysis of Crossing the Bar with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'OCR Poetry', url: 'https://theenglishhub.app/revision/poetry/ocr' },
          {
            name: 'Crossing the Bar',
            url: 'https://theenglishhub.app/revision/poetry/ocr/crossing-the-bar',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr/youth-and-age" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('rev.poetry.shared.back_to_youth_and_age')}
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Crossing the Bar</h1>
            <p className="text-body-sm text-muted-foreground">
              Alfred Lord Tennyson &middot; Youth and Age cluster
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              OCR
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="Crossing the Bar"
        textType="poem"
        examBoard="OCR"
        cluster="Youth and Age"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Crossing the Bar"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={crossingTheBar} />

      <section className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          The text of &ldquo;Crossing the Bar&rdquo; is in the public domain. All annotations and
          critical commentary on this page are original to english-hub and are provided for private
          study and educational purposes under the fair dealing provisions of the Copyright, Designs
          and Patents Act 1988.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {t('rev.poetry.shared.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings for the OCR Youth and Age cluster.
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
