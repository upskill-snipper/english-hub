'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Ozymandias',
  alternativeHeadline: 'A Pearson Edexcel IGCSE 4ET1 set-text study guide',
  author: {
    '@type': 'Person',
    name: 'Percy Bysshe Shelley',
    birthDate: '1792',
    deathDate: '1822',
  },
  datePublished: '1818',
  inLanguage: 'en',
  about: ['Power', 'Hubris', 'Time and decay', 'Empire'],
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    educationalFramework: 'Pearson Edexcel IGCSE English Literature 4ET1',
    targetName: 'Anthology Poetry - Paper 1 Section B',
  },
}

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'Ozymandias',
  poet: 'Percy Bysshe Shelley',
  lines: [
    {
      text: 'I met a traveller from an antique land,',
      annotations: [
        {
          type: 'Frame narrative',
          note: 'The poem opens with a frame: the speaker is reporting what someone else told him. This double-distance - Shelley quoting a traveller quoting a statue - pushes the figure of the king far away in time and space.',
          color: '#3b82f6',
        },
        {
          type: 'Diction',
          note: '"Antique land" suggests Egypt - old, exotic, and already in ruins by the early 19th century. Shelley wrote the poem in 1817 in friendly competition with Horace Smith on the same subject.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Who said: Two vast and trunkless legs of stone',
      annotations: [
        {
          type: 'Imagery',
          note: '"Trunkless legs" - the body of the statue is gone. The image is grotesque: monumental power reduced to a pair of shins. Shelley begins with what is missing.',
          color: '#10b981',
        },
        {
          type: 'Caesura',
          note: 'The colon after "said" pivots the poem from the speaker into the traveller\'s account. From here on, every word is reported speech.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Stand in the desert. Near them, on the sand,',
      annotations: [
        {
          type: 'Setting',
          note: 'The desert isolates the ruin - there is no civilisation around it any more. "On the sand" emphasises that the empire has been swallowed by the elements.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Half sunk, a shattered visage lies, whose frown,',
      annotations: [
        {
          type: 'Key quote',
          note: '"Shattered visage" - the king\'s face is broken and partly buried. Shelley delays the head-rhyme word "lies" so that the line lands heavily on the king\'s ruined features.',
          color: '#f59e0b',
        },
        {
          type: 'Imagery',
          note: '"Half sunk" makes the desert into a slow-moving sea, gradually swallowing the king. The verb is strikingly ordinary, as if the empire is simply drowning.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And wrinkled lip, and sneer of cold command,',
      annotations: [
        {
          type: 'Key quote',
          note: '"Sneer of cold command" is Shelley\'s most famous phrase about tyranny. Three hard consonants - "cold command" - give the words a chilly, militaristic finality. The king ruled by contempt.',
          color: '#f59e0b',
        },
        {
          type: 'Triadic list',
          note: '"Frown… wrinkled lip… sneer" - a three-part list of facial features. Each one is hostile. The face survives in fragments, but every fragment is angry.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Tell that its sculptor well those passions read',
      annotations: [
        {
          type: 'Praise of art',
          note: 'The unnamed sculptor "read" the king\'s passions accurately - the artist understood his subject. Shelley quietly lifts the artist above the ruler: the king is dust, but the work survives.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Which yet survive, stamped on these lifeless things,',
      annotations: [
        {
          type: 'Irony',
          note: 'The "passions" - pride, contempt - outlive the man who felt them. They are now "stamped on" lifeless rock. The metaphor is from coining: a tyrant\'s temper has been minted into stone like a face on a coin.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'The hand that mocked them and the heart that fed:',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"Mocked" carries two senses: the sculptor\'s hand mimicked (mocked = reproduced) the passions, and also derided (mocked = ridiculed) them. Either way, the sculptor wins. "The heart that fed" is the king\'s heart, which fed the passions.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And on the pedestal these words appear:',
      annotations: [
        {
          type: 'Set-up',
          note: "The colon at the end builds anticipation. The next two lines will quote the king's own words - direct speech across thousands of years.",
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "'My name is Ozymandias, king of kings:",
      annotations: [
        {
          type: 'Key quote',
          note: 'The king names himself. "King of kings" is biblical (Daniel; Revelation) and royal - Ozymandias claims the very highest title. "My name is" is the rhetoric of authority.',
          color: '#f59e0b',
        },
        {
          type: 'Allusion',
          note: 'Ozymandias is the Greek name for Pharaoh Ramesses II (c.1303-1213 BCE), one of the most powerful kings of ancient Egypt. The boast is enormous; the rubble is total.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "Look on my Works, ye Mighty, and despair!'",
      annotations: [
        {
          type: 'Key quote',
          note: 'The most quoted line in the poem. Ozymandias commands rival kings ("ye Mighty") to look at what he has built and lose hope. The intended meaning was: "you will never match me." The actual meaning, in the empty desert, becomes: "your works will end like mine." (Edexcel anthology Issue 2 prints "Look on my Works", not "Look upon my works".)',
          color: '#f59e0b',
        },
        {
          type: 'Irony',
          note: 'Dramatic irony: the only "Works" left are two trunkless legs and a half-buried face. The boast turns into its opposite - every reader becomes a "Mighty" one looking at ruins.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Nothing beside remains. Round the decay',
      annotations: [
        {
          type: 'Volta',
          note: 'The volta - the turn of the sonnet - falls here. The three-word sentence "Nothing beside remains." crashes against the king\'s boast. Caesura makes it final and cold.',
          color: '#a855f7',
        },
        {
          type: 'Diction',
          note: '"Decay" is monumental and slow - the empire is not destroyed in a battle; it is being eaten by time itself.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Of that colossal Wreck, boundless and bare',
      annotations: [
        {
          type: 'Juxtaposition',
          note: '"Colossal" (huge) and "Wreck" (ruined) collide in one phrase. The capital "W" elevates the ruin to a proper noun - the empire has become a single, named disaster.',
          color: '#10b981',
        },
        {
          type: 'Alliteration',
          note: '"Boundless and bare" - the soft "b" sounds carry the eye out across the empty desert. The line stretches as the desert stretches.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'The lone and level sands stretch far away.',
      annotations: [
        {
          type: 'Key quote',
          note: 'The poem\'s last line. "Lone and level" - alliterative, flat, endless. The desert is the only thing that survives. The line itself stretches metrically, as if the sand goes on past the end of the poem.',
          color: '#f59e0b',
        },
        {
          type: 'Closure',
          note: "After the king's shouted boast, Shelley closes with quiet emptiness. Tyranny is loud; time is silent and wins.",
          color: '#10b981',
        },
      ],
    },
  ],

  context: `
    <h3>Percy Bysshe Shelley (1792-1822)</h3>
    <p>Shelley was one of the major English Romantic poets, alongside Byron and Keats. He was a political radical who believed in republicanism, atheism and the abolition of monarchy - views that scandalised early-19th-century Britain. He drowned in a sailing accident off the coast of Italy aged 29.</p>

    <h3>Composition and publication</h3>
    <p>"Ozymandias" was written in late 1817 and published in <em>The Examiner</em> on 11 January 1818. Shelley wrote it as part of a friendly sonnet competition with his friend <strong>Horace Smith</strong>, who wrote a poem on the same subject. Shelley\'s version is now world-famous; Smith\'s is largely forgotten.</p>

    <h3>The historical Ozymandias</h3>
    <p>"Ozymandias" is the Greek transliteration of "User-maat-Re", the throne name of <strong>Pharaoh Ramesses II</strong> (c.1303-1213 BCE), one of ancient Egypt\'s most powerful rulers. The Greek historian Diodorus Siculus recorded an inscription on a colossal Ramesses statue: "King of Kings am I, Ozymandias. If anyone would know how great I am and where I lie, let him surpass any of my works." Shelley re-imagines this for the new Romantic age.</p>

    <h3>The British Museum statue</h3>
    <p>In 1816 the upper fragment of a colossal statue of Ramesses II - known as the "Younger Memnon" - arrived at the British Museum. Shelley almost certainly knew of it through newspaper reports. The poem grew partly out of the public excitement around the new acquisition, although Shelley never saw it in person before writing.</p>

    <h3>Politics</h3>
    <p>Shelley was writing during an age of European revolution. The poem is often read as an attack on tyranny in general - Napoleon had been defeated only two years earlier (1815). The point is universal: every empire eventually falls, and the only thing that survives the tyrant is the artist\'s record of him.</p>
  `,

  summary: `Lines 1-4: The speaker meets a traveller who tells him about a ruined statue in a far-off desert. All that remains are two enormous stone legs with no body - and, lying nearby in the sand, a broken, half-buried face.

Lines 5-8: The face shows a frown, a wrinkled lip and a "sneer of cold command". The unnamed sculptor understood his subject perfectly - the king\'s contemptuous passions are still visible, "stamped on" lifeless stone, although the king and his hand are long gone.

Lines 9-11: An inscription on the pedestal preserves the king\'s own boast: "My name is Ozymandias, king of kings: / Look on my Works, ye Mighty, and despair!" The intended meaning was that no rival ruler could ever match him.

Lines 12-14: But around the broken statue, "nothing beside remains". The "colossal Wreck" is surrounded by empty, endless desert. The sands "stretch far away" - the empire has vanished, and only the artist\'s record of the tyrant\'s sneer survives.

Overall meaning: A meditation on the impermanence of political power. Shelley uses the ruined boast of an Egyptian pharaoh to argue that all human empires end the same way. Time levels every tyrant; only art outlasts the ruler.`,

  formAndStructure: `Form: A 14-line sonnet, but a hybrid - Shelley borrows from both Petrarchan and Shakespearean traditions without obeying either. The rhyme scheme is unusual: ABABACDCEDEFEF. The half-rhymes ("stone / frown / command", "appear / despair") echo a building that is itself half-collapsed.

Frame narrative: The poem stages multiple layers of distance - Shelley\'s speaker hears from a traveller who saw a sculptor\'s rendering of a king\'s face, with the king\'s own words quoted from a pedestal. We are several voices removed from Ozymandias himself. This nesting makes the king feel small and far away.

Iambic pentameter: The metre is loosely iambic pentameter, but Shelley constantly disrupts it (e.g. "Stand in the desert. Near them, on the sand,"). The broken metre matches the broken statue.

Volta: The classic sonnet turn comes at line 12 - "Nothing beside remains." Three short, hammered words break the king\'s boast in half. After 11 lines describing the figure of authority, the poem\'s second half collapses everything in one sentence.

Caesura: Strong mid-line pauses ("Stand in the desert. Near them, on the sand,") slow the poem and force the reader to step from one image to the next. The most powerful caesura is the full stop in line 12, which breaks the boast forever.

Direct speech: The only direct speech belongs to Ozymandias himself - and it is the part of the poem that ironises hardest. By preserving the king\'s exact words, Shelley lets him destroy himself.

Closing image: Shelley ends with the long, drawn-out alliteration of "lone and level sands stretch far away." The line\'s metre lengthens and softens, mirroring the endless emptiness of the desert. The poem doesn\'t conclude - it dissolves.`,

  keyQuotes: [
    {
      quote: 'Two vast and trunkless legs of stone',
      analysis:
        'The statue is introduced through what is missing - the body has gone, only the legs remain. "Trunkless" is a striking, almost grotesque adjective: monumental power reduced to a pair of shins in the sand. Shelley begins with absence rather than presence, and the absence is the real subject of the poem.',
      themes: ['Power', 'Decay', 'Imagery'],
      analysisAr:
        'يُقدَّم التمثالُ عبر ما هو غائبٌ منه - الجسد قد ذهب، ولم يبقَ إلّا الساقان. وصفةُ "trunkless" لافتةٌ تكاد تكون بشعة: عظمةٌ صارت ساقَيْن في الرمل. يبدأ Shelley بالغياب لا بالحضور، والغياب هو الموضوع الحقيقيّ للقصيدة.',
      themesAr: ['السلطة', 'الفناء', 'الصورة'],
    },
    {
      quote: 'a shattered visage lies, whose frown, / And wrinkled lip, and sneer of cold command',
      analysis:
        'The pharaoh\'s face is broken but his contempt is still legible. The triadic list - "frown… wrinkled lip… sneer" - piles up signs of hostility. "Cold command" with its hard consonants gives the king a chilly, military authority. The face rules even after the kingdom has vanished.',
      themes: ['Tyranny', 'Power', 'Pride'],
      analysisAr:
        'وجهُ الفرعون مُحطَّم، لكنّ ازدراءه ما زال يُقرأ. القائمةُ الثلاثيّة - "frown… wrinkled lip… sneer" - تكدّس علاماتِ العداء. وعبارة "cold command" بصوامتها الصلبة تمنح الملكَ سلطةً عسكريّةً باردة. الوجهُ يحكم حتى بعد أن اختفت المملكة.',
      themesAr: ['الطغيان', 'السلطة', 'الكِبر'],
    },
    {
      quote: 'The hand that mocked them and the heart that fed',
      analysis:
        '"Mocked" carries a brilliant double meaning: the sculptor\'s hand both mimicked (reproduced) and ridiculed (mocked) the king\'s passions. Either way, the artist outlives the ruler. The "heart that fed" is the king\'s - he kept his cruelties alive - but it is now silent, while the sculptor\'s work still speaks.',
      themes: ['Art vs. power', 'Pride', 'Time'],
      analysisAr:
        'لفظة "mocked" تحمل معنىً مزدوجاً بارعاً: يدُ النحّات حاكتْ (نسخت) ولكنّها سخرت أيضاً من شَهَوات الملك. وعلى المعنيين يبقى الفنّان بعد الحاكم. أمّا "heart that fed" فقلب الملك - أبقى قسوتَه حيّة - لكنّه الآن صامت، فيما عملُ النحّات ما زال يتكلّم.',
      themesAr: ['الفنّ في مقابل السلطة', 'الكِبر', 'الزمن'],
    },
    {
      quote: 'My name is Ozymandias, king of kings',
      analysis:
        'The pharaoh introduces himself with biblical grandeur - "king of kings" is a phrase used of Christ in Revelation and of imperial monarchs in the Old Testament. Ozymandias claims the highest possible status. The reader, looking at the rubble, feels the size of the gap between his claim and the reality.',
      themes: ['Hubris', 'Authority', 'Empire'],
      analysisAr:
        'يُقدّم الفرعون نفسه بفخامةٍ كتابيّة - "king of kings" عبارةٌ تُستعمل عن المسيح في Revelation وعن الأباطرة في العهد القديم. يدّعي Ozymandias المنزلةَ الأعلى. أمّا القارئ، وهو ينظر إلى الأنقاض، فيُحسّ بحجم الهوّة بين الادّعاء والواقع.',
      themesAr: ['الكِبر', 'السلطة', 'الإمبراطوريّة'],
    },
    {
      quote: 'Look on my Works, ye Mighty, and despair!',
      analysis:
        'The most-quoted line in the poem and the climax of the king\'s boast. He commands rival rulers ("ye Mighty") to despair at what he has built. The cruel irony is that the only "Works" remaining are two trunkless legs and a half-buried face - so the line tells the truth, but not the truth Ozymandias intended. (The Edexcel anthology Issue 2 reads "Look on my Works", not the more common "Look upon my works".)',
      themes: ['Hubris', 'Irony', 'Tyranny'],
      analysisAr:
        'أكثر سطور القصيدة تداولاً، وذروةُ تفاخر الملك. يأمر الحكّامَ المنافسين ("ye Mighty") بأن يفقدوا الأمل أمام ما بناه. والمفارقةُ القاسية أنّ الـ"Works" الباقية لا تتجاوز ساقَيْن بلا جذع ووجهاً نصف مدفون - فالسطر يقول الحقيقة، لكن ليست الحقيقة التي قصدها Ozymandias. (تطبع نسخةُ Edexcel anthology Issue 2 "Look on my Works"، لا "Look upon my works" الأشهرَ شيوعاً.)',
      themesAr: ['الكِبر', 'المفارقة', 'الطغيان'],
    },
    {
      quote: 'Nothing beside remains',
      analysis:
        'The volta of the sonnet, and one of the most devastating short sentences in English poetry. Three words and a full stop. The previous 11 lines have built up the king; the next three will dissolve him into desert. The bareness of the phrase enacts what it describes.',
      themes: ['Decay', 'Time', 'Mortality'],
      analysisAr:
        'الـ volta في السونيتة، ومن أشدّ الجمل القصيرة وقعاً في الشعر الإنجليزيّ. ثلاثُ كلماتٍ ونقطة. الأسطرُ الإحدى عشرة السابقة بَنَتْ الملك؛ والثلاثةُ التالية ستذيبه في الصحراء. والعُريُ في العبارة يُجسّد ما تصفه.',
      themesAr: ['الفناء', 'الزمن', 'الموت'],
    },
    {
      quote: 'The lone and level sands stretch far away',
      analysis:
        'The closing line. Alliteration ("lone… level… sands… stretch") and long vowels make the line itself stretch out, as if the desert continues past the page. Nothing remains of the empire except endless, indifferent sand. The poem refuses a moral - it just leaves the reader in the silence.',
      themes: ['Time', 'Indifference of nature', 'Empire'],
      analysisAr:
        'السطر الختاميّ. الجناسُ ("lone… level… sands… stretch") والصوائتُ الممدودة تجعل السطر نفسَه يتمدّد، كأنّ الصحراء تتجاوز حدود الصفحة. لم يبقَ من الإمبراطوريّة إلّا رملٌ لا نهاية له لا يكترث. تأبى القصيدة أن تُلقي درساً أخلاقيّاً - تترك القارئ في الصمت.',
      themesAr: ['الزمن', 'لامبالاة الطبيعة', 'الإمبراطوريّة'],
    },
  ],

  languageDevices: [
    {
      device: 'Frame narrative',
      example: 'I met a traveller from an antique land, / Who said…',
      effect:
        "Shelley pushes the king several voices away from us. The poem is the speaker quoting a traveller quoting a statue's inscription. Each frame increases the distance, making Ozymandias feel small and remote - a ruler who needs three layers of reporting before he can be heard.",
      lineRef: 1,
      effectAr:
        'يُبعد Shelley الملكَ عنّا بأصواتٍ عدّة. القصيدةُ متكلّمٌ يقتبس عن رحّالةٍ يقتبس عن نقشٍ على تمثال. كلُّ طبقةٍ تزيد المسافة، وتجعل Ozymandias يبدو صغيراً قَصيّاً - حاكمٌ يحتاج إلى ثلاث طبقاتٍ من النقل قبل أن يُسمَع صوته.',
    },
    {
      device: 'Caesura',
      example: 'Stand in the desert. Near them, on the sand,',
      effect:
        'The full stop in the middle of line 3 breaks the line into separate fragments - like the statue itself. Throughout the poem, Shelley uses mid-line pauses to mimic the rubble: each phrase isolated, as if scattered across the desert.',
      lineRef: 3,
      effectAr:
        'النقطةُ في وسط السطر الثالث تُكسّر السطر إلى شظايا منفصلة - كالتمثال نفسه. وعلى امتداد القصيدة يستعمل Shelley وقفاتٍ في وسط السطر تحاكي الأنقاض: كلّ عبارةٍ معزولة، كأنّها مبعثرة في الصحراء.',
    },
    {
      device: 'Triadic list',
      example: 'frown, / And wrinkled lip, and sneer of cold command',
      effect:
        'A three-part list of facial features, each one hostile. The cumulative effect is a face composed entirely of contempt. Shelley denies us a single human expression on the king - only the residue of his anger.',
      lineRef: 5,
      effectAr:
        'قائمةٌ ثلاثيّة من ملامح الوجه، كلّها عدوانيّ. أثرُها التراكميّ وجهٌ مصنوعٌ بالكامل من الازدراء. يحرمنا Shelley من تعبيرٍ إنسانيٍّ واحدٍ على الملك - لا يبقى إلّا أثرُ غضبه.',
    },
    {
      device: 'Pun (mocked)',
      example: 'The hand that mocked them and the heart that fed',
      effect:
        '"Mocked" means both "imitated" and "ridiculed". The sculptor\'s hand reproduced the king\'s passions, but in doing so it also exposed them. Shelley quietly hands the victory to the artist: the sculptor outlives the tyrant.',
      lineRef: 8,
      effectAr:
        'لفظة "mocked" تعني "حاكى" و"سخر" معاً. يدُ النحّات نسخت شَهَوات الملك، وبفعل النسخ كشفتها. يُسلّم Shelley النصرَ هادئاً للفنّان: النحّات يبقى بعد الطاغية.',
    },
    {
      device: 'Dramatic irony',
      example: 'Look on my Works, ye Mighty, and despair!',
      effect:
        "Ozymandias's boast comes true in the opposite way to what he meant. He intended other kings to despair at his power; instead, every reader despairs at the inevitability of all empires falling. The line works against itself.",
      lineRef: 11,
      effectAr:
        'تتحقّق مفاخرةُ Ozymandias على النقيض ممّا قصد. أرادها أن تجعل الملوكَ الآخرين ييأسون من سلطته؛ فإذا بكلّ قارئٍ ييأس من حتميّة سقوط كلّ الإمبراطوريّات. السطر يعمل ضدّ نفسه.',
    },
    {
      device: 'Volta',
      example: 'Nothing beside remains.',
      effect:
        "The classic sonnet turn arrives at line 12 in three flat words. After the king's thunder, this short sentence is almost silent. The contrast in pace and volume is what makes the irony land - Ozymandias shouts; time replies in a whisper.",
      lineRef: 12,
      effectAr:
        'انعطافةُ السونيتة الكلاسيكيّة تأتي في السطر الثاني عشر بثلاث كلماتٍ مسطّحة. بعد رعد الملك، تكاد هذه الجملةُ القصيرة تكون صامتة. والتقابل في الإيقاع والحجم هو ما يُمكّن المفارقة من الوصول - يصرخ Ozymandias؛ يُجيب الزمن بهمس.',
    },
    {
      device: 'Alliteration',
      example: 'The lone and level sands stretch far away',
      effect:
        'The repeated "l" sounds and long vowels stretch the line out across the page. The metre is loose and slow, mimicking the endless flatness of desert. Shelley ends not with a moral but with an image of indifferent space.',
      lineRef: 14,
      effectAr:
        'صوتُ الـ"l" المكرّر والصوائتُ الممدودة تُمدّ السطرَ عبر الصفحة. الوزنُ رخوٌ بطيء يحاكي بسطَ الصحراء الذي لا ينتهي. يختم Shelley لا بموعظةٍ بل بصورةٍ لمكانٍ لا يكترث.',
    },
  ],

  contextAr: `
    <h3>Percy Bysshe Shelley (1792-1822)</h3>
    <p>كان Shelley من كبار الشعراء الرومانسيّين الإنجليز إلى جانب Byron وKeats. كان راديكاليّاً سياسيّاً يؤمن بالجمهوريّة والإلحاد وإلغاء الملكيّة - آراءٌ صدمت بريطانيا في مطلع القرن التاسع عشر. غرق في حادث إبحارٍ قرب سواحل إيطاليا وهو في التاسعة والعشرين.</p>

    <h3>الكتابة والنشر</h3>
    <p>كُتبت "Ozymandias" في أواخر سنة 1817 ونُشرت في <em>The Examiner</em> يوم 11 يناير 1818. كَتَبها Shelley في إطار مسابقة سونيتاتٍ ودّيّة مع صديقه <strong>Horace Smith</strong>، الذي كتب قصيدةً على الموضوع نفسه. صارت نسخةُ Shelley مشهورةً عالميّاً؛ وكادت نسخةُ Smith أن تُنسى.</p>

    <h3>Ozymandias التاريخيّ</h3>
    <p>"Ozymandias" هو النقلُ الإغريقيّ لـ"User-maat-Re"، اسم العرش لـ<strong>الفرعون Ramesses II</strong> (حوالي 1303-1213 ق.م.)، أحد أقوى حكّام مصر القديمة. سجّل المؤرّخ الإغريقيّ Diodorus Siculus نقشاً على تمثالٍ ضخم لـRamesses: "ملكُ الملوك أنا Ozymandias. مَن أراد أن يعلم عظمَ ملكي وموضعَ قبري، فليتجاوز شيئاً من أعمالي." يُعيد Shelley تخيّلَ هذه العبارة لعصر الرومانسيّة الجديد.</p>

    <h3>تمثالُ British Museum</h3>
    <p>وصلت سنة 1816 الشظيّةُ العليا من تمثالٍ ضخم لـRamesses II - يُعرف بـ"Younger Memnon" - إلى British Museum. ومن شبه المؤكّد أنّ Shelley علم به من تقارير الصحف. وتولّدت القصيدة جزئيّاً من ضجّة الاقتناء الجديد، وإن لم يَرَه Shelley بنفسه قبل أن يكتب.</p>

    <h3>السياسة</h3>
    <p>كان Shelley يكتب في عصر الثورات الأوروبيّة. وتُقرأ القصيدةُ غالباً هجوماً على الطغيان عامّةً - كان Napoleon قد هُزم قبل سنتين فقط (سنة 1815). الفكرةُ كونيّة: كلُّ إمبراطوريّةٍ تسقط في النهاية، ولا يبقى من الطاغية إلّا سِجلُّ الفنّان عنه.</p>
  `,

  summaryAr: `السطور 1-4: يلقى المتكلّمُ رحّالةً يُحدّثه عن تمثالٍ مُحطَّمٍ في صحراءٍ بعيدة. كلّ ما تبقّى ساقا حجرٍ ضخمتان بلا جسد - وعلى مقربةٍ منهما، نصف مدفونٍ في الرمل، وجهٌ مكسور.

السطور 5-8: على الوجه تجهّمٌ، شفةٌ متغضّنة، و"sneer of cold command". فهم النحّاتُ المجهول موضوعه فهماً تامّاً - شَهَواتُ الملك الازدرائيّة ما زالت مرئيّةً "stamped on" على حجرٍ ميّت، وإن طال غيابُ الملك ويده.

السطور 9-11: نقشٌ على القاعدة يحفظ تفاخرَ الملك بنفسه: "My name is Ozymandias, king of kings: / Look on my Works, ye Mighty, and despair!" قصد بها أنّ لا حاكمَ منافساً يستطيع مجاراته.

السطور 12-14: لكنّ حول التمثال المكسور "nothing beside remains". تحيط بـ"colossal Wreck" صحراءٌ فارغة لا نهاية لها. الرمالُ "stretch far away" - اختفت الإمبراطوريّة، ولم يبقَ إلّا سِجلّ الفنّان لازدراء الطاغية.

المعنى الإجماليّ: تأمّلٌ في زوال السلطة السياسيّة. يستعمل Shelley مفاخرةَ فرعونٍ مصريّ المُحطَّمة ليُحاجج بأنّ كلّ إمبراطوريّات البشر تنتهي على النحو نفسه. الزمن يساوي بين كلّ الطغاة؛ ولا يبقى أحدٌ بعد الحاكم سوى الفنّ.`,

  formAndStructureAr: `الشكل: سونيتةٌ من أربعة عشر سطراً، لكنّها هجين - يستعير Shelley من التقليدَين البتراركيّ والشيكسبيريّ دون التزام بأحدهما. ونظامُ القافية غير معتاد: ABABACDCEDEFEF. والقوافي الناقصة ("stone / frown / command"، "appear / despair") تردّد صدى مبنىً نصفُه منهار.

السرد المؤطَّر: تَبني القصيدة طبقاتٍ متعدّدة من المسافة - يسمع متكلّمُ Shelley من رحّالةٍ رأى تمثيلَ نحّاتٍ لوجه ملك، فيما يُقتبَس كلامُ الملك نفسه من قاعدة التمثال. نحن على بُعد أصواتٍ عدّة من Ozymandias. وهذا التداخل يجعل الملك يبدو صغيراً قَصيّاً.

iambic pentameter: الوزنُ إجمالاً iambic pentameter، لكنّ Shelley يُخلّ به باستمرار (مثل: "Stand in the desert. Near them, on the sand,"). الوزنُ المكسور يحاكي التمثالَ المكسور.

الـ volta: انعطافةُ السونيتة الكلاسيكيّة في السطر الثاني عشر - "Nothing beside remains." ثلاثُ كلماتٍ قِصارٍ مُطرَقة تكسر مفاخرةَ الملك. بعد إحدى عشرة سطراً تُصوّر هيئةَ السلطة، يهدم النصفُ الثاني من القصيدة كلّ شيءٍ في جملةٍ واحدة.

الـ caesura: الوقفاتُ القويّة في وسط السطر ("Stand in the desert. Near them, on the sand,") تُبطئ القصيدةَ وتُجبر القارئ على الانتقال من صورةٍ إلى صورة. وأقوى الـ caesuras النقطةُ في السطر الثاني عشر، التي تكسر المفاخرةَ إلى الأبد.

الكلام المباشر: الكلام المباشر الوحيد يُنسب إلى Ozymandias نفسه - وهو أكثر أجزاء القصيدة سخريةً. وبحفظِ كلمات الملك بنصّها، يدع Shelley الملكَ يَهدم نفسَه.

الصورة الختاميّة: يختم Shelley بالجناس المطوَّل في "lone and level sands stretch far away." ووزنُ السطر يَمتدّ ويلين، فيحاكي الفراغَ الذي لا نهاية له. لا تختم القصيدةُ - تنحلّ.`,
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'The Tyger',
    poet: 'William Blake',
    href: '/igcse/edexcel/poetry/the-tyger',
    reason:
      'Both poems ask what a creator is responsible for. Blake stares at a divine power that made the tyger; Shelley looks at a human ruler whose only "creation" was a self-image now in ruins. Compare divine creation against earthly hubris.',
    themes: ['Power', 'Creation', 'Awe'],
  },
  {
    title: 'Sonnet 116',
    poet: 'William Shakespeare',
    href: '/igcse/edexcel/poetry/sonnet-116',
    reason:
      'Both are 14-line sonnets meditating on what survives time. Shakespeare argues that true love does not bend with "Time\'s sickle"; Shelley shows that political power does. Compare what each poet thinks survives the passage of years.',
    themes: ['Time', 'Endurance', 'Sonnet form'],
  },
  {
    title: 'Disabled',
    poet: 'Wilfred Owen',
    href: '/igcse/edexcel/poetry/disabled',
    reason:
      'Both poems unmake a heroic image. Ozymandias\'s "sneer of cold command" is reduced to rubble; Owen\'s recruit, who once played football and chased glory, is reduced to a wheelchair. Compare how Shelley and Owen expose the emptiness of conquering masculinity.',
    themes: ['Power', 'Loss', 'War'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function OzymandiasPage() {
  const tr = useT()
  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Ozymandias</h1>
            <p className="text-body-sm text-muted-foreground">
              Percy Bysshe Shelley (1792&ndash;1822) &middot; published 1818, <em>The Examiner</em>{' '}
              &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              {tr('igcse.page.badge_edexcel_lit')}
            </Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={poem} />

      <StudyTools textName="Ozymandias" textType="poem" examBoard="Edexcel" variant="compact" />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {tr('anth_text.section.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another from the anthology. These
          are strong pairings for Ozymandias.
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

      <footer className="pt-4 text-center text-body-xs text-muted-foreground">
        {tr('igcse.page.spec_aligned_4et1')}
      </footer>
    </div>
  )
}
