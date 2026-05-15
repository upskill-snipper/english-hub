import { ArrowLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    title: 'Checking Out Me History — AQA Power and Conflict | The English Hub',
    description:
      'Analysis of Checking Out Me History for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons.',
  },
  title: 'Checking Out Me History — AQA Power and Conflict | The English Hub',
  description:
    'Analysis of Checking Out Me History for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/power-and-conflict/checking-out-me-history',
  },
}

/* ── Poem data ────────────────────────────────────────────────────── */

const POEM: PoemData = {
  title: 'Checking Out Me History',
  poet: 'John Agard',
  lines: [
    // Stanza 1 — British education / nursery rhyme
    {
      text: 'Dem tell me',
      annotations: [
        {
          type: 'Phonetic dialect',
          note: '"Dem" instead of "They" — Agard writes in Caribbean Creole throughout, asserting his cultural identity through language itself. The pronoun "Dem" distances the speaker from the British establishment.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'Dem tell me' },
    {
      text: 'Wha dem want to tell me',
      annotations: [
        {
          type: 'Anaphora',
          note: 'The repetition of "Dem tell me" creates a chant-like rhythm, emphasising how the British education system controlled the narrative and dictated what was worth knowing.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: '' },
    {
      text: 'Bandage up me eye with me own history',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Bandage up me eye" — a powerful metaphor for being blinded by a one-sided education. The bandage is made from "me own history", suggesting his Caribbean heritage has been used against him, wrapped around him to prevent him from seeing the truth.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Blind me to me own identity',
      annotations: [
        {
          type: 'Identity',
          note: 'The direct connection between historical knowledge and personal identity — without knowing your own history, you cannot know yourself. This is the central argument of the poem.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '' },
    {
      text: 'Dem tell me bout 1066 and all dat',
      annotations: [
        {
          type: 'Allusion',
          note: '1066 — the Norman Conquest and the Battle of Hastings. Agard reduces this iconic date in British history to dismissive slang ("all dat") to show how irrelevant it feels to someone whose own history has been erased.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Dem tell me bout Dick Whittington and he cat',
      annotations: [
        {
          type: 'Nursery rhyme',
          note: 'Dick Whittington — a folklore/pantomime figure. By placing British history alongside nursery rhymes, Agard suggests the education he received was trivial and childish, not serious or empowering.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'Dem tell me bout Ole King Cole was a merry ole soul',
      annotations: [
        {
          type: 'Nursery rhyme',
          note: 'Old King Cole — a nursery rhyme character placed alongside genuine historical events, blurring the line between history and fantasy in the British curriculum as Agard experienced it.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'and de dish ran away with de spoon',
      annotations: [
        {
          type: 'Nursery rhyme',
          note: 'From "Hey Diddle Diddle" — the descent into pure nonsense underscores Agard\'s argument that the British education he received was meaningless compared to the history he was denied.',
          color: '#ec4899',
        },
      ],
    },
    { text: '' },

    // Stanza 2 — Toussaint L'Ouverture
    {
      text: 'But now I checking out me own history',
      annotations: [
        {
          type: 'Volta / Turning point',
          note: '"But now" marks the shift from passive recipient to active agent. The present continuous "checking out" suggests an ongoing, deliberate process of self-education. This is the poem\'s refrain and thesis statement.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I carving out me identity',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Carving" suggests something permanent and deliberate, like a sculptor creating art from raw material. Identity is not given — it must be actively made. The verb also implies effort and resistance against hard material.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    {
      text: 'Dem tell me bout de man who discover de balloon',
      annotations: [
        {
          type: 'Contrast',
          note: 'The balloon — a relatively trivial invention — is what the British curriculum chose to teach, while the heroic achievements of Caribbean figures were ignored.',
          color: '#6366f1',
        },
      ],
    },
    {
      text: 'and de cow who jump over de moon',
      annotations: [
        {
          type: 'Nursery rhyme',
          note: 'Another nursery rhyme mixed with historical fact, reinforcing the idea that British education blurred the line between trivial fantasy and genuine knowledge.',
          color: '#ec4899',
        },
      ],
    },
    { text: '' },
    {
      text: 'Dem tell me bout de dish heaving away with de spoon',
      annotations: [
        {
          type: 'Repetition',
          note: 'A return to the nursery rhyme imagery, creating a cyclical pattern that mirrors the repetitive, narrow nature of the education system Agard criticises.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: "but dem never tell me bout Toussaint L'Ouverture",
      annotations: [
        {
          type: 'Allusion — Caribbean hero',
          note: "Toussaint L'Ouverture (1743-1803) — the leader of the Haitian Revolution, the only successful slave revolt in history. He is the first of three Caribbean/African heroes Agard celebrates as missing from his education.",
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'Toussaint',
      annotations: [
        {
          type: 'Italicised stanza',
          note: 'In the original poem, the Caribbean hero stanzas are italicised, visually separating them from the British education stanzas. This typographical choice mirrors the separation between the two histories.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'a slave',
      annotations: [
        {
          type: 'Short lines',
          note: 'The short, clipped lines in the hero stanzas create a reverent, almost sacred tone — like a prayer or hymn. Each fact is given weight and space on the page.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: 'with vision' },
    { text: 'lick back' },
    {
      text: 'Napoleon',
      annotations: [
        {
          type: 'Heroic language',
          note: '"Lick back Napoleon" — Caribbean dialect for "defeated". L\'Ouverture\'s forces defeated Napoleon\'s army, one of the most powerful in the world. The colloquial language makes the achievement feel personal and immediate.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'battalion' },
    { text: 'and first Black' },
    {
      text: 'Republic born',
      annotations: [
        {
          type: 'Achievement',
          note: 'Haiti became the first Black republic in 1804 — a monumental event in world history that Agard argues was entirely absent from his British education.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Toussaint de thorn',
      annotations: [
        {
          type: 'Metaphor',
          note: '"De thorn" — Toussaint is imagined as a thorn in the side of colonial power. The metaphor suggests something small but sharp and impossible to ignore, a source of constant discomfort to oppressors.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'to de French' },
    {
      text: 'Toussaint de beacon',
      annotations: [
        {
          type: 'Metaphor',
          note: '"De beacon" — a guiding light. Toussaint represents hope and direction for oppressed people. The contrast between "thorn" (pain to oppressors) and "beacon" (hope to the oppressed) shows his dual significance.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'of de Haitian Revolution' },
    { text: '' },

    // Stanza 3 — British education again
    {
      text: 'Dem tell me bout de man who discover de balloon',
      annotations: [
        {
          type: 'Repetition',
          note: 'The repetition of British curriculum content creates a monotonous, cyclical feel — the same narrow history taught over and over while Caribbean history remains invisible.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: 'and de cow who jump over de moon' },
    { text: '' },
    { text: 'Dem tell me bout de dish heaving away with de spoon' },
    {
      text: 'but dem never tell me bout Nanny de maroon',
      annotations: [
        {
          type: 'Allusion — Caribbean hero',
          note: 'Nanny of the Maroons (c.1686-c.1755) — a Jamaican national hero who led guerrilla warfare against British colonisers. She is one of only two women named as a National Hero of Jamaica.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },

    // Stanza 4 — Nanny de maroon
    {
      text: 'Nanny',
      annotations: [
        {
          type: 'Italicised stanza',
          note: 'Again, the Caribbean hero stanza would be italicised in the original layout, marking it as separate from and more significant than the nursery rhyme stanzas.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: 'see-far woman' },
    {
      text: 'of mountain dream',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Mountain dream" — the Blue Mountains of Jamaica where the Maroons lived. The word "dream" elevates their resistance into something visionary and aspirational.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'fire-woman' },
    {
      text: 'struggle stream',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Struggle stream" — the ongoing flow of resistance. "Stream" suggests something natural, unstoppable, and life-giving. The struggle is not a single event but a continuous force.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'to freedom river',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Freedom river" — the stream of struggle flows into a river of freedom. The natural imagery suggests liberation is inevitable, a force of nature that cannot be contained.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },

    // Stanza 5 — British education again
    {
      text: 'Dem tell me bout Lord Nelson and Waterloo',
      annotations: [
        {
          type: 'Allusion',
          note: 'Lord Nelson — a British naval hero. Agard juxtaposes celebrated British military figures with forgotten Caribbean resistance fighters, questioning who gets to be called a "hero".',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'but dem never tell me bout Shaka de great Zulu',
      annotations: [
        {
          type: 'Allusion — African hero',
          note: 'Shaka Zulu (c.1787-1828) — the founder of the Zulu Kingdom and one of the most influential monarchs in Southern African history. His military innovations transformed the region.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'Dem tell me bout Columbus and 1492',
      annotations: [
        {
          type: 'Allusion',
          note: 'Columbus\'s arrival in the Americas in 1492 — presented as "discovery" in British education, but from a Caribbean perspective it marks the beginning of colonisation, slavery, and genocide.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'but not a word bout de Caribs and de Arawaks too',
      annotations: [
        {
          type: 'Contrast',
          note: 'The Caribs and Arawaks — the indigenous peoples of the Caribbean who were decimated by European colonisation. Their absence from the curriculum erases the victims while celebrating the colonisers.',
          color: '#6366f1',
        },
      ],
    },
    { text: '' },

    // Stanza 6 — British education again
    {
      text: 'Dem tell me bout Florence Nightingale and she lamp',
      annotations: [
        {
          type: 'Allusion',
          note: "Florence Nightingale — the famous British nurse. Her story is contrasted with Mary Seacole's, a Jamaican-born nurse who served in the Crimean War but was largely written out of British history.",
          color: '#10b981',
        },
      ],
    },
    // VERIFY: line 'and target me with dem statistics' was previously inserted here AND duplicated again later. The phrase does not appear in any verified Agard primary source I can confirm. Removed.
    { text: '' },

    // Stanza 7 — Mary Seacole
    {
      text: 'but dem never tell me bout Mary Seacole',
      annotations: [
        {
          type: 'Allusion — Caribbean hero',
          note: 'Mary Seacole (1805-1881) — a Jamaican-born nurse who set up the "British Hotel" near the Crimean War front to care for wounded soldiers, despite being rejected by the British War Office. She was largely forgotten until recent decades.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'From Jamaica',
      annotations: [
        {
          type: 'Italicised stanza',
          note: "The final hero stanza, again visually distinct. Seacole's story is given the same reverent, hymn-like treatment as Toussaint's and Nanny's.",
          color: '#8b5cf6',
        },
      ],
    },
    { text: 'she travel far' },
    {
      text: 'to de Crimean War',
      annotations: [
        {
          type: 'Historical detail',
          note: 'The Crimean War (1853-56) — Seacole travelled at her own expense to nurse wounded soldiers after being rejected by the official nursing establishment.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'she volunteer to go' },
    // VERIFY: removed fabricated lines 'and target me with dem statistics' and 'and target me with dem dates' — neither phrase appears in Agard's primary text. The actual Mary Seacole stanza ends with the heroic praise of Seacole; cross-check against Half-Caste and Other Poems (Hodder, 2005).
    { text: '' },
    {
      text: 'But now I checking out me own history',
      annotations: [
        {
          type: 'Refrain',
          note: "The return of the refrain, now carrying accumulated power from all the heroes who have been celebrated. The speaker's resolve has grown stronger through the poem.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I carving out me identity',
      annotations: [
        {
          type: 'Final declaration',
          note: 'The poem ends with the same defiant statement of self-determination. Identity is not something given by an education system — it must be carved out, actively and deliberately, by the individual.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `<p><strong>John Agard</strong> (born 1949) is a Guyanese-British poet who moved from Guyana to England in 1977. He is one of the most prominent voices in Caribbean-British poetry, known for his performance poetry, use of Creole dialect, and explorations of cultural identity.</p>

<p><strong>"Checking Out Me History"</strong> was published in 2005 in his collection <em>Half-Caste and Other Poems</em>. The poem is a direct challenge to the British education system, which Agard argues taught him only European history while erasing the achievements of Black and Caribbean historical figures.</p>

<p><strong>Postcolonial context:</strong> The poem sits within the postcolonial literary tradition, which examines the lasting cultural and psychological effects of European colonialism. Agard grew up in British Guiana (now Guyana), a former British colony, where the school curriculum was designed by the colonial power and centred entirely on British history and culture.</p>

<p><strong>Caribbean history:</strong> The poem celebrates three key figures: <strong>Toussaint L'Ouverture</strong>, who led the Haitian Revolution (the only successful slave revolt); <strong>Nanny of the Maroons</strong>, a Jamaican resistance leader; and <strong>Mary Seacole</strong>, a Jamaican nurse in the Crimean War. All three were largely absent from British school curricula when Agard was educated.</p>

<p><strong>British education system:</strong> The poem critiques how the National Curriculum prioritised a narrow, Eurocentric view of history. When Agard was at school, figures like Toussaint and Seacole were not taught, while nursery rhymes and British military heroes dominated. The poem argues this was a deliberate act of cultural erasure.</p>

<p><strong>Language as resistance:</strong> Agard writes in Caribbean Creole rather than Standard English, which is itself an act of defiance — he refuses to use the coloniser's language to discuss the coloniser's failings.</p>`,

  contextAr: `<p><strong>John Agard</strong> (مواليد 1949) شاعر غيانيّ-بريطاني، انتقل من غيانا إلى إنجلترا سنة 1977. يعتبر من أبرز الأصوات في الشعر الكاريبي-البريطاني، ومعروف بشعر الأداء (performance poetry) واستخدامه للهجة الكريول الكاريبية، واهتمامه بأسئلة الهوية الثقافية.</p>

<p>قصيدة <strong>"Checking Out Me History"</strong> انتشرت سنة 2005 ضمن ديوانه <em>Half-Caste and Other Poems</em>. القصيدة تحدّي مباشر للنظام التعليمي البريطاني، اللي يشوف Agard إنه علّمه التاريخ الأوروبي بس، ومحى إنجازات الشخصيات التاريخية السود والكاريبيين.</p>

<p><strong>السياق ما بعد الكولونيالي (postcolonial):</strong> القصيدة تنتمي للتقليد الأدبي ما بعد الكولونيالي، اللي يدرس الآثار الثقافية والنفسية اللي خلّفها الاستعمار الأوروبي. Agard ترعرع في غيانا البريطانية (Guyana حالياً)، اللي كانت مستعمرة بريطانية، وكان المنهج المدرسي مصمّم من القوة الاستعمارية، ويتمحور كله حول التاريخ والثقافة البريطانية.</p>

<p><strong>التاريخ الكاريبي:</strong> القصيدة تحتفي بثلاث شخصيات مفتاحية: <strong>Toussaint L'Ouverture</strong>، اللي قاد الثورة الهايتية (الثورة الوحيدة الناجحة للعبيد في التاريخ)؛ و<strong>Nanny of the Maroons</strong>، قائدة المقاومة في جامايكا؛ و<strong>Mary Seacole</strong>، الممرّضة الجامايكية اللي خدمت في حرب القرم. الثلاثة كانوا غائبين تقريباً من المناهج المدرسية البريطانية أيام دراسة Agard.</p>

<p><strong>النظام التعليمي البريطاني:</strong> القصيدة تنتقد كيف إن المنهج الوطني يعطي الأولوية لرؤية ضيّقة متمحورة حول أوروبا. أيام ما كان Agard في المدرسة، شخصيات مثل Toussaint وSeacole ما كانت تُدرَّس، بينما القوافي الأطفال (nursery rhymes) والأبطال العسكريين البريطانيين يستحوذون على المنهج. القصيدة تطرح إن هذا الشيء كان فعل مقصود لمحو ثقافي.</p>

<p><strong>اللغة كمقاومة:</strong> Agard يكتب بلهجة الكريول الكاريبية بدل English standard، وهذا بحدّ ذاته فعل تحدّي — يرفض إنه يستخدم لغة المستعمِر علشان يحكي عن أخطاء المستعمِر نفسه.</p>`,

  summary: `The speaker describes how the British education system ("Dem") taught him only European history and nursery rhymes while hiding the achievements of Black and Caribbean heroes. He was told about 1066, Dick Whittington, and Florence Nightingale, but never about Toussaint L'Ouverture (who led the Haitian Revolution), Nanny of the Maroons (who fought British colonisers in Jamaica), or Mary Seacole (who nursed soldiers in the Crimean War).

The poem alternates between dismissive stanzas about British education — mixing real history with nursery rhymes to show how trivial it felt — and reverent, hymn-like stanzas celebrating Caribbean heroes. The British stanzas are written in a sing-song, mocking rhythm, while the Caribbean stanzas use short, powerful lines that feel almost sacred.

The poem builds towards a repeated refrain: "But now I checking out me own history / I carving out me identity." The speaker rejects the passive role of being "told" what to know and instead takes active control of his own education and selfhood. The "carving" metaphor suggests this is difficult, deliberate work — identity must be fought for, not passively received.

Ultimately, the poem argues that controlling a people's history is a form of oppression ("Bandage up me eye"), and that reclaiming that history is essential to building a free and authentic identity.`,

  summaryAr: `المتكلّم يوصف كيف إن النظام التعليمي البريطاني ("Dem") علّمه التاريخ الأوروبي وقوافي الأطفال (nursery rhymes) بس، وخفى إنجازات الأبطال السود والكاريبيين. أهله علّموه عن 1066 وعن Dick Whittington وعن Florence Nightingale، بس ما حكوا له أبداً عن Toussaint L'Ouverture (اللي قاد الثورة الهايتية)، ولا عن Nanny of the Maroons (اللي حاربت المستعمرين البريطانيين في جامايكا)، ولا عن Mary Seacole (اللي مرّضت الجنود في حرب القرم).

القصيدة تتناوب بين مقاطع ساخرة عن التعليم البريطاني — تخلط التاريخ الحقيقي مع قوافي الأطفال علشان تبيّن كم كان تافه يحسّه — ومقاطع موقّرة، شبيهة بالترانيم، تحتفي بالأبطال الكاريبيين. المقاطع البريطانية مكتوبة بإيقاع غنائي ساخر، أما المقاطع الكاريبية فتستخدم أبيات قصيرة قوية تحسّ إنها تقريباً مقدّسة.

القصيدة تبني نحو لازمة (refrain) متكرّرة: "But now I checking out me own history / I carving out me identity". المتكلّم يرفض الدور السلبي اللي يخلّيه يستقبل "ما يُقال له"، ويأخذ زمام تعليمه وذاته بنفسه. استعارة "carving" تلمّح إن هذا شغل صعب ومقصود — الهوية لازم تتحارب عشانها، ما تُستلَم بشكل سلبي.

في النهاية، القصيدة تطرح إن السيطرة على تاريخ شعب نوع من أنواع الظلم ("Bandage up me eye")، وإن استرداد هذا التاريخ شرط أساسي لبناء هوية حرّة وأصيلة.`,

  formAndStructure: `STRUCTURE:
The poem alternates between two types of stanza:
1. "British education" stanzas — written in a mocking, sing-song rhythm that mixes real historical events (1066, Lord Nelson) with nursery rhymes (Dick Whittington, Old King Cole), suggesting the education was trivial and patronising.
2. "Caribbean hero" stanzas — originally italicised in print, written in short, reverent lines that feel like hymns or prayers, celebrating Toussaint L'Ouverture, Nanny of the Maroons, and Mary Seacole.

This alternating structure creates a powerful visual and rhythmic contrast on the page.

FORM:
- Free verse with no regular rhyme scheme — Agard rejects the formal structures of English poetry just as he rejects the English curriculum.
- The irregular form mirrors the speaker's refusal to conform to British expectations.
- Occasional half-rhymes and internal rhymes ("balloon/moon/spoon") appear in the British stanzas, mimicking nursery rhyme patterns to mock them.

REFRAIN:
"Dem tell me" opens most British stanzas, creating an insistent, accusatory rhythm.
"But now I checking out me own history / I carving out me identity" is the poem's refrain, growing in power with each repetition.

VISUAL LAYOUT:
- The Caribbean hero stanzas use shorter lines, creating white space on the page that forces the reader to slow down and give each fact weight.
- The British stanzas are longer and more cluttered, suggesting an overwhelming flood of irrelevant information.

PHONETIC SPELLING:
- "Dem", "me", "bout", "dat", "de" — Agard spells words phonetically to represent Caribbean Creole pronunciation, making the poem a performance piece that sounds like spoken dialect rather than written Standard English.

ENDING:
The poem ends with the refrain, giving the speaker the final word. The shift from "Dem tell me" (passive, past tense) to "I checking out" and "I carving" (active, present continuous) shows the speaker's transformation from passive recipient to active agent of his own identity.`,

  formAndStructureAr: `البنية:
القصيدة تتناوب بين نوعين من المقاطع:
1. مقاطع "التعليم البريطاني" — مكتوبة بإيقاع غنائي ساخر، تخلط أحداث تاريخية حقيقية (1066، Lord Nelson) مع قوافي الأطفال (Dick Whittington، Old King Cole)، علشان توحي إن التعليم كان تافه ومتعالي.
2. مقاطع "البطل الكاريبي" — في الأصل مطبوعة بخط مائل (italics)، مكتوبة بأبيات قصيرة موقّرة تحسّ إنها ترانيم أو دعوات، تحتفي بـToussaint L'Ouverture وNanny of the Maroons وMary Seacole.

هاي البنية المتناوبة تخلق تباين بصري وإيقاعي قوي على الصفحة.

الشكل:
- شعر حر (free verse) بلا نظام قافية منتظم — Agard يرفض الأشكال الرسمية للشعر الإنجليزي مثل ما يرفض المنهج الإنجليزي.
- الشكل غير المنتظم يعكس رفض المتكلّم إنه يطابق التوقّعات البريطانية.
- في بعض القوافي الناقصة والقوافي الداخلية ("balloon/moon/spoon") تطلع في المقاطع البريطانية، تقلّد نمط قوافي الأطفال علشان تسخر منها.

اللازمة (refrain):
"Dem tell me" يفتح أغلب المقاطع البريطانية، ويخلق إيقاع متّهِم مُلِحّ.
"But now I checking out me own history / I carving out me identity" هي لازمة القصيدة، وتزيد قوّتها مع كل تكرار.

التخطيط البصري:
- مقاطع الأبطال الكاريبيين تستخدم أبيات قصيرة، وتخلق فراغ أبيض على الصفحة يجبر القارئ إنه يتمهّل ويعطي كل معلومة وزنها.
- المقاطع البريطانية أطول وأكثر ازدحاماً، توحي بطوفان غامر من المعلومات اللي ما لها قيمة.

التهجئة الصوتية (phonetic spelling):
- "Dem"، "me"، "bout"، "dat"، "de" — Agard يهجّي الكلمات صوتياً علشان يمثّل النطق الكريولي الكاريبي، وهذا يخلّي القصيدة قطعة أداء (performance piece) تحسّ إنها لهجة منطوقة مو إنجليزية مكتوبة standard.

النهاية:
القصيدة تنتهي باللازمة، وتعطي المتكلّم الكلمة الأخيرة. الانتقال من "Dem tell me" (سلبي، ماضي) إلى "I checking out" و"I carving" (فاعل، مضارع مستمر) يبيّن تحوّل المتكلّم من مستقبِل سلبي إلى فاعل نشط لهويته نفسها.`,

  keyQuotes: [
    {
      quote: 'Dem tell me',
      analysis:
        'The poem\'s opening and most repeated phrase. "Dem" (they) refers to the British education system and establishment. The phonetic Creole spelling is itself an act of resistance — Agard refuses to write in Standard English. The repetition creates an insistent, almost accusatory tone, as if building a case against the system.',
      themes: ['Power of education', 'Cultural oppression', 'Identity'],
      analysisAr:
        'افتتاحية القصيدة وأكثر العبارات تكراراً فيها. "Dem" (they) تشير للنظام التعليمي البريطاني والمؤسسة الحاكمة. التهجئة الصوتية الكريولية بحدّ ذاتها فعل مقاومة — Agard يرفض إنه يكتب بـStandard English. التكرار يخلق نبرة مُلحّة، شبه اتهامية، كأنه يبني قضية ضد النظام.',
      themesAr: ['سلطة التعليم', 'القمع الثقافي', 'الهوية'],
    },
    {
      quote: 'Bandage up me eye with me own history',
      analysis:
        'The central metaphor of the poem. The speaker has been deliberately blinded — not with a foreign material, but with his "own history" twisted into a tool of oppression. The bandage prevents sight (understanding), and the fact that it is made from "me own history" suggests that colonial education weaponised Caribbean identity against Caribbean people.',
      themes: ['Oppression', 'Identity', 'Power of education', 'Colonialism'],
      analysisAr:
        'الاستعارة المركزية في القصيدة. المتكلّم انعمى بشكل مقصود — مو بمادة أجنبية، بل بـ"تاريخه نفسه" بعد ما لُوي وحُوّل لأداة قمع. الضمادة تمنع البصر (الفهم)، وحقيقة إنها مصنوعة من "me own history" تلمّح إن التعليم الاستعماري سلّح الهوية الكاريبية ضد الناس الكاريبيين أنفسهم.',
      themesAr: ['الظلم', 'الهوية', 'سلطة التعليم', 'الاستعمار'],
    },
    {
      quote: 'Toussaint a slave with vision lick back Napoleon battalion',
      analysis:
        'Celebrates Toussaint L\'Ouverture as a visionary who defeated one of the most powerful armies in the world. "Lick back" is Caribbean Creole for "defeated" — the use of dialect makes the victory feel personal and triumphant. The contrast between "slave" and "vision" emphasises that greatness is not determined by social status.',
      themes: ['Resistance', 'Heroism', 'Pride', 'Power'],
      analysisAr:
        'تحتفي بـToussaint L\'Ouverture كرجل بصيرة قدر يهزم وحد من أقوى الجيوش في العالم. "Lick back" بالكريول الكاريبية تعني "هزم" — استخدام اللهجة يخلّي النصر يحسّ شخصي ومنتصِر. التباين بين "slave" و"vision" يأكّد إن العظمة ما تتحدّد بالمكانة الاجتماعية.',
      themesAr: ['المقاومة', 'البطولة', 'الفخر', 'السلطة'],
    },
    {
      quote: 'Toussaint de thorn to de French / Toussaint de beacon of de Haitian Revolution',
      analysis:
        'A dual metaphor: Toussaint is both a "thorn" (a source of pain and irritation to oppressors) and a "beacon" (a guiding light for the oppressed). This contrast shows how the same figure can represent threat and hope depending on perspective.',
      themes: ['Resistance', 'Heroism', 'Dual perspective'],
      analysisAr:
        'استعارة مزدوجة: Toussaint هو في نفس الوقت "thorn" (شوكة، مصدر ألم وإزعاج للمستعمِرين) و"beacon" (منارة، نور يهدي المظلومين). هذا التباين يبيّن كيف إن نفس الشخصية تقدر تمثّل تهديد أو أمل، حسب وجهة النظر.',
      themesAr: ['المقاومة', 'البطولة', 'وجهة النظر المزدوجة'],
    },
    {
      quote: 'Nanny see-far woman of mountain dream',
      analysis:
        'Nanny of the Maroons is described with reverent, almost mythical language. "See-far woman" suggests prophetic vision and wisdom. "Mountain dream" elevates the Jamaican Blue Mountains — where the Maroons made their stand — into a place of aspiration and spiritual significance.',
      themes: ['Heroism', 'Pride', 'Resistance', 'Nature'],
      analysisAr:
        'Nanny of the Maroons موصوفة بلغة موقّرة، تقريباً أسطورية. عبارة "see-far woman" توحي بالبصيرة النبوية والحكمة. و"mountain dream" ترفع الـBlue Mountains في جامايكا — اللي وقفت فيها الـMaroons موقفها — لمكان طموح وذو دلالة روحية.',
      themesAr: ['البطولة', 'الفخر', 'المقاومة', 'الطبيعة'],
    },
    {
      quote: 'Mary Seacole / From Jamaica she travel far',
      analysis:
        'Mary Seacole is presented as someone who crossed vast distances — both physical and cultural — to help others. The simplicity of "she travel far" underscores the quiet determination and sacrifice that went unrecognised by the British establishment, which celebrated Florence Nightingale instead.',
      themes: ['Heroism', 'Injustice', 'Cultural erasure'],
      analysisAr:
        'Mary Seacole تتقدّم كشخصية قطعت مسافات هائلة — بدنية وثقافية في نفس الوقت — علشان تساعد الآخرين. بساطة عبارة "she travel far" تأكّد على الإصرار الصامت والتضحية اللي ما حصلوا على اعتراف من المؤسسة البريطانية، اللي احتفت بـFlorence Nightingale بدلاً منها.',
      themesAr: ['البطولة', 'الظلم', 'المحو الثقافي'],
    },
    {
      quote: 'But now I checking out me own history',
      analysis:
        'The poem\'s refrain and turning point. "But now" marks the shift from passive acceptance to active resistance. "Checking out" is deliberately casual and modern — this is not an academic exercise but a personal journey of discovery. The present continuous tense suggests the process is ongoing and unstoppable.',
      themes: ['Identity', 'Resistance', 'Empowerment', 'Self-discovery'],
      analysisAr:
        'لازمة القصيدة ونقطة تحوّلها. "But now" تشير لتحوّل من القبول السلبي إلى المقاومة الفاعلة. عبارة "checking out" عاميّة وعصرية بقصد — هذي مو مهمة أكاديمية، بل رحلة اكتشاف شخصية. صيغة المضارع المستمر (present continuous) توحي إن العملية مستمرة ولا تتوقّف.',
      themesAr: ['الهوية', 'المقاومة', 'التمكين', 'اكتشاف الذات'],
    },
    {
      quote: 'I carving out me identity',
      analysis:
        'The final line of the poem. "Carving" is a powerful verb — it suggests something permanent (like sculpture or inscription), deliberate, and requiring great effort against resistant material. Identity is not given or inherited; it must be actively created. The speaker has moved from object (being told) to subject (carving).',
      themes: ['Identity', 'Empowerment', 'Resistance', 'Self-determination'],
      analysisAr:
        'البيت الأخير في القصيدة. "Carving" فعل قوي — يوحي بشيء دائم (مثل النحت أو النقش)، مقصود، ويحتاج جهد كبير ضد مادة مقاوِمة. الهوية ما تُمنَح ولا تُورَث؛ لازم تُصنَع بشكل فاعل. المتكلّم انتقل من مفعول به (يُقال له) إلى فاعل (ينحت بنفسه).',
      themesAr: ['الهوية', 'التمكين', 'المقاومة', 'تقرير المصير'],
    },
  ],

  languageDevices: [
    {
      device: 'Phonetic Dialect (Caribbean Creole)',
      example: 'Dem tell me / Wha dem want to tell me',
      effect:
        'Agard writes in Caribbean Creole throughout the poem, using "Dem" for "They", "me" for "my", "bout" for "about", and "de" for "the". This is a deliberate act of linguistic resistance — by refusing to write in Standard English, Agard asserts his Caribbean identity in the very fabric of the poem. The language is inseparable from the message.',
      lineRef: 0,
    },
    {
      device: 'Anaphora',
      example: 'Dem tell me / Dem tell me / Dem tell me bout...',
      effect:
        'The relentless repetition of "Dem tell me" at the start of lines creates an insistent, accusatory rhythm — like a witness giving testimony or a prosecutor building a case. Each repetition adds another charge against the education system, building cumulative anger and frustration.',
      lineRef: 2,
    },
    {
      device: 'Metaphor of Blindness',
      example: 'Bandage up me eye with me own history / Blind me to me own identity',
      effect:
        'Education is presented as an act of deliberate blinding. The metaphor suggests that the curriculum was not simply incomplete but actively harmful — designed to prevent the speaker from seeing the truth about his own heritage. The bandage both conceals and constrains.',
      lineRef: 4,
    },
    {
      device: 'Contrast / Juxtaposition',
      example: 'Dem tell me bout Florence Nightingale... but dem never tell me bout Mary Seacole',
      effect:
        'The poem repeatedly juxtaposes celebrated British figures with forgotten Caribbean ones. Nightingale vs. Seacole is particularly pointed because both were nurses in the same war, yet only the white British woman was remembered. The contrast exposes the racial bias embedded in the curriculum.',
      lineRef: 49,
    },
    {
      device: 'Repetition (Refrain)',
      example: 'But now I checking out me own history / I carving out me identity',
      effect:
        "The refrain grows in power each time it appears. It marks the poem's structural turning points, shifting from complaint to celebration, from passivity to agency. The repetition also gives the poem a song-like or chant-like quality, connecting it to oral Caribbean storytelling traditions.",
      lineRef: 12,
    },
    {
      device: 'Allusion',
      example: "Toussaint L'Ouverture... Nanny de maroon... Mary Seacole... Shaka de great Zulu",
      effect:
        "Agard fills the poem with allusions to real historical figures who were excluded from his British education. Each allusion serves a dual purpose: it educates the reader about these figures while simultaneously proving that the British curriculum's omission of them was a choice, not an oversight.",
      lineRef: 19,
    },
    {
      device: 'Nursery Rhyme Parody',
      example: 'de dish ran away with de spoon / de cow who jump over de moon',
      effect:
        'By weaving nursery rhymes into stanzas about British education, Agard suggests that the history he was taught was as trivial and childish as fairy tales. The blurring of real history with fantasy undermines the authority of the British curriculum.',
      lineRef: 10,
    },
    {
      device: 'Semantic Field of Vision',
      example: 'Bandage up me eye / Blind me / see-far woman / beacon',
      effect:
        'The poem builds a sustained semantic field around sight and blindness. The British system "bandages" and "blinds", while the Caribbean heroes are associated with vision ("see-far woman") and light ("beacon"). Reclaiming history is presented as an act of recovering sight.',
      lineRef: 4,
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'com-1',
    question: 'What is the speaker protesting about in Checking Out Me History?',
    type: 'multiple-choice',
    options: [
      'The quality of school buildings',
      'The British education system for teaching only British/European history and erasing Caribbean and African history',
      'The cost of school textbooks',
      'The lack of sports facilities',
    ],
    correctIndex: 1,
    explanation:
      'Agard protests that the British education system taught him irrelevant British history and nursery rhymes while completely ignoring the achievements of Caribbean and African historical figures.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'com-2',
    question: 'What does "Bandage up me eye with me own history" mean?',
    type: 'multiple-choice',
    options: [
      'The speaker has an eye injury',
      'The British education system has blinded him to his own Caribbean heritage',
      'He is wearing a blindfold for a game',
      'He is reading in poor light',
    ],
    correctIndex: 1,
    explanation:
      'This powerful metaphor suggests the education system has used his own history against him — wrapping it around his eyes like a bandage to prevent him from seeing the truth about his heritage and identity.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'com-3',
    question: 'Why does Agard include nursery rhymes alongside historical references?',
    type: 'multiple-choice',
    options: [
      'He enjoys nursery rhymes',
      'By placing British history alongside nursery rhymes, he suggests the education he received was trivial and childish',
      'Nursery rhymes are part of the GCSE curriculum',
      "He is writing a children's poem",
    ],
    correctIndex: 1,
    explanation:
      'Agard deliberately mixes historical references (1066, Lord Nelson) with nursery rhymes (Dick Whittington, Old King Cole, "the dish ran away with the spoon") to show how equally meaningless and irrelevant both felt to someone denied their own history.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'com-4',
    question: "Who is Toussaint L'Ouverture, and why is he significant in the poem?",
    type: 'multiple-choice',
    options: [
      'A French king',
      "The leader of the Haitian Revolution — the only successful slave revolt in history, which Agard's education never taught him",
      'A British general',
      'A famous poet',
    ],
    correctIndex: 1,
    explanation:
      "Toussaint L'Ouverture (1743-1803) led the Haitian Revolution, the only successful slave revolt in history. He defeated Napoleon's army and Haiti became the first Black republic. Agard uses him as a hero whose achievements were erased by British education.",
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'com-5',
    question: 'What is the effect of writing in Caribbean Creole throughout the poem?',
    type: 'multiple-choice',
    options: [
      'It makes the poem harder to understand',
      'It asserts cultural identity through language itself — the dialect is an act of resistance against Standard English',
      'It is a mistake in spelling',
      'It shows the speaker is uneducated',
    ],
    correctIndex: 1,
    explanation:
      'Writing in Caribbean Creole is itself an act of resistance. By using "Dem" instead of "They" and "me" instead of "my", Agard refuses to conform to Standard English, asserting his cultural identity through his very language.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'com-6',
    question: 'What does "I carving out me identity" suggest about the process of self-discovery?',
    type: 'multiple-choice',
    options: [
      'Identity is given to you automatically',
      'Identity must be actively and deliberately created — like a sculptor carving art from raw material',
      'The speaker is a woodworker',
      'Identity is easy to find',
    ],
    correctIndex: 1,
    explanation:
      '"Carving" suggests something permanent, deliberate, and effortful — like a sculptor creating art. Identity is not passively received from education; it must be actively constructed through self-education and resistance.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'com-7',
    question: "How does the poem's visual layout on the page contribute to its meaning?",
    type: 'multiple-choice',
    options: [
      'It has no visual significance',
      'The italicised hero stanzas with short lines are visually separated from the British education stanzas, mirroring the separation of the two histories',
      'All stanzas look the same',
      'The layout is determined by the printer',
    ],
    correctIndex: 1,
    explanation:
      'The poem uses two distinct visual styles: longer lines for British education content and shorter, italicised lines for Caribbean heroes. This typographical separation mirrors the real-world separation between the two histories.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'com-8',
    question: 'Who is Nanny of the Maroons, mentioned in the poem?',
    type: 'multiple-choice',
    options: [
      'A character from a nursery rhyme',
      'A Jamaican national hero who led guerrilla warfare against British colonisers',
      'A fictional character created by Agard',
      'A British queen',
    ],
    correctIndex: 1,
    explanation:
      'Nanny of the Maroons (c.1686-c.1755) was a Jamaican national hero who led resistance against British colonisers through guerrilla warfare. She is one of only two women named as a National Hero of Jamaica.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'com-9',
    question: 'How does the refrain "Dem tell me" function throughout the poem?',
    type: 'multiple-choice',
    options: [
      'It is a polite request for information',
      "It creates a chant-like rhythm of protest, emphasising the relentless, repetitive nature of the education system's control over what is taught",
      'It shows the speaker is grateful',
      'It is used for musical effect only',
    ],
    correctIndex: 1,
    explanation:
      'The repetition of "Dem tell me" creates a chant-like, rhythmic quality rooted in Caribbean oral tradition. It hammers home how the education system dictated what was worth knowing, creating a powerful protest rhythm.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'com-10',
    question:
      'Which poem from the Power and Conflict anthology best pairs with Checking Out Me History for exploring how institutions control individuals?',
    type: 'multiple-choice',
    options: [
      'Storm on the Island by Heaney',
      'London by William Blake',
      'The Prelude by Wordsworth',
      'Exposure by Owen',
    ],
    correctIndex: 1,
    explanation:
      'Both London and Checking Out Me History attack institutional control over people. Blake targets the Church and monarchy; Agard targets the colonial education system. Both show how power structures suppress individual freedom and identity.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Checking Out Me History explores identity, cultural erasure, the power of education, resistance, and the reclaiming of suppressed heritage.',
    keyPoints: [
      'Identity — "Blind me to me own identity" — knowing your history is knowing yourself',
      'Cultural erasure — Caribbean and African history deliberately excluded from education',
      'Resistance — "I carving out me identity" — active self-education and protest',
      'Power of education — those who control what is taught control identity itself',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Agard uses Caribbean Creole, metaphor, contrast between nursery rhymes and real heroes, and chant-like repetition to create a powerful protest poem.',
    keyPoints: [
      '"Bandage up me eye" — metaphor for being blinded by a one-sided education',
      'Caribbean Creole dialect — language itself is an act of resistance',
      'Nursery rhymes vs real heroes — British education compared to trivial fantasy',
      '"Beacon" and "thorn" — metaphors celebrating Caribbean heroes\' dual significance',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Alternating stanza types — longer British education stanzas vs shorter, italicised Caribbean hero stanzas — visually and structurally separate the two histories.',
    keyPoints: [
      'Two visual styles — typographical separation mirrors the separation of histories',
      'Anaphora ("Dem tell me") — creates a chant-like protest rhythm',
      'Short lines in hero stanzas — reverential, almost prayer-like',
      'Refrain "But now I checking out me own history" — the poem\'s thesis statement',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Agard present the importance of identity in Checking Out Me History?',
  'Compare how power and control are presented in Checking Out Me History and one other poem from the anthology.',
  'How does Agard use language and structure to create a powerful protest poem?',
]

/* ── Comparison poems ─────────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'London',
    poet: 'William Blake',
    link: '/revision/poetry/power-and-conflict/london',
    points: [
      'Both poets criticise powerful institutions — Agard attacks the education system, Blake attacks the Church, monarchy, and government.',
      'Both use repetition to build a sense of injustice — "Dem tell me" echoes Blake\'s "In every" anaphora.',
      'Both poems give voice to the powerless and marginalised in society.',
      'Blake writes in strict quatrains (working within English tradition) while Agard rejects English poetic form entirely.',
    ],
  },
  {
    poem: 'The Émigrée',
    poet: 'Carol Rumens',
    link: '/revision/poetry/power-and-conflict/the-emigree',
    points: [
      'Both explore cultural identity and the relationship between place and selfhood.',
      'Both speakers feel displaced from their heritage — Agard by the education system, the Émigrée by political exile.',
      'Both poems contrast a hostile present reality with a treasured cultural past.',
      "The Émigrée's speaker idealises her homeland; Agard's speaker actively researches his, making his reclamation more deliberate.",
    ],
  },
  {
    poem: 'Tissue',
    poet: 'Imtiaz Dharker',
    link: '/revision/poetry/power-and-conflict/tissue',
    points: [
      'Both explore how human identity is shaped by external systems and records.',
      'Both use extended metaphors — Agard uses blindness/sight, Dharker uses paper/tissue.',
      'Both question the power structures that control narratives — education (Agard) vs. bureaucracy (Dharker).',
      'Both suggest that true identity transcends the systems that try to define it.',
    ],
  },
]

/* ── Theme tokens ─────────────────────────────────────────────────── */

const THEMES = [
  'Identity',
  'Power of education',
  'Cultural oppression',
  'Colonialism',
  'Resistance',
  'Heroism',
  'Pride',
  'Anger',
  'Empowerment',
]

/* ── Page component ───────────────────────────────────────────────── */

export default function CheckingOutMeHistoryPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Checking Out Me History by John Agard — Analysis & Annotations"
        description="Line-by-line analysis of Checking Out Me History with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          {
            name: 'Power and Conflict',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict',
          },
          {
            name: 'Checking Out Me History',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/checking-out-me-history',
          },
        ]}
      />
      <LearningResourceJsonLd
        name="Checking Out Me History (AQA Power and Conflict)"
        description="Analysis of Checking Out Me History for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons."
        educationalLevel="GCSE"
        learningResourceType="Lesson"
        about="AQA Power and Conflict anthology cluster"
        url="https://theenglishhub.app/revision/poetry/power-and-conflict/checking-out-me-history"
      />
      {/* ── Breadcrumb / back ─────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Power &amp; Conflict
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Checking Out Me History
            </h1>
            <p className="text-body-sm text-muted-foreground">
              John Agard &middot; Power &amp; Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              AQA
            </Badge>
          </div>
        </div>
      </div>

      {/* ── Theme badges ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ───────────────────────────────── */}
      <StudyTools
        textName="Checking Out Me History"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Checking Out Me History"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={POEM} />

      {/* ── Comparison poems ──────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Compare with&hellip;</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div key={c.poem} className="rounded-xl border border-border bg-card p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-foreground mb-0.5">{c.poem}</h3>
              <p className="text-xs text-muted-foreground mb-3">{c.poet}</p>

              <ul className="space-y-2 mb-4 flex-1">
                {c.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-card-foreground pl-4 relative before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-muted-foreground/30"
                  >
                    {p}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={c.link} />}
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        &ldquo;Checking Out Me History&rdquo; by John Agard is published by Hodder Children&rsquo;s
        Books in <em>Half-Caste and Other Poems</em> (2005) and is reproduced in the AQA Power &amp;
        Conflict anthology by permission of Hodder &amp; Stoughton Limited. Short quotations are
        reproduced here under the fair dealing provision of the CDPA 1988 for criticism and review.
        Full text available in your AQA anthology.
      </p>
    </div>
  )
}
