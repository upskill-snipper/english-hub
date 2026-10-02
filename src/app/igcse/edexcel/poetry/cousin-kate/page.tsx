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

const poem: PoemData = {
  title: 'Cousin Kate',
  poet: 'Christina Rossetti',
  // The poem as the Pearson Edexcel GCSE (9-1) English Literature Poetry
  // Anthology prints it (Issue 4, January 2023, page 28, in the Conflict
  // cluster), checked line by line against the PDF on 2 October 2026. Cousin
  // Kate is not in the International GCSE anthology this page sits beside (see
  // the scope notice), so it follows Pearson's GCSE printing. The Eduqas
  // anthology prints the poem with different words, and
  // /revision/poetry/eduqas/cousin-kate follows that: "silken knot", "You grew
  // more fair", "Your work among the rye", "He'd not have won me", "Your father
  // would give lands for one". The notes mark where the two differ.
  //
  // Until 2 October 2026 this array held 30 lines in stanzas of 4, 4, 4, 3, 4, 4
  // and 7, where the poem has six stanzas of eight: twenty lines were missing,
  // two were not Rossetti's, four put "survey of gold" where she has "steps
  // along the lane", "ring", "wedding-ring" and "coronet", and the rest mixed the
  // two printings. The form section and the ballad-form card described that
  // shape (short stanzas, a seven-line close, an ABAB rhyme scheme), and the
  // summary went through it stanza by stanza.
  lines: [
    {
      text: 'I was a cottage-maiden',
      annotations: [
        {
          type: 'Social status',
          note: '"Cottage-maiden" - the speaker defines herself by her humble social position. A cottage-maiden is a rural working-class girl. This establishes the class dynamic that drives the poem: she is low-born, vulnerable, and will be exploited by a man of higher rank.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Hardened by sun and air,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Hardened by sun and air" - she is tanned and weathered from outdoor work. This is not beauty by Victorian standards (pale skin was prized) but it is honest and natural. She is unrefined but genuine - a contrast with the artifice of the lord\'s world.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Contented with my cottage-mates,',
      annotations: [
        {
          type: 'Tone',
          note: '"Contented" - she was happy before the lord came. Rossetti establishes a state of innocent satisfaction that will be destroyed. The word choice emphasises that she did not seek the lord out; she was content where she was.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Not mindful I was fair.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Not mindful I was fair" - she did not know she was beautiful, or at least did not think about it. This innocence is important: she had no vanity, no ambition. Her beauty made her a target, but she was unaware of it. The line foreshadows the lord\'s predatory behaviour.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Why did a great lord find me out',
      annotations: [
        {
          type: 'Rhetorical question',
          note: '"Why did a great lord find me out" - the question is accusatory. The lord sought her out, like a hunter finding prey. "Find me out" also suggests discovery of something hidden - her beauty was private until the lord exposed and exploited it.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And praise my flaxen hair?',
      annotations: [
        {
          type: 'Detail',
          note: '"Flaxen hair" - pale blonde hair. The lord singles out a physical feature to praise, reducing the speaker to her appearance. His interest is sexual, not personal. The detail makes his seduction feel calculated and predatory.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Why did a great lord find me out',
      annotations: [
        {
          type: 'Repetition',
          note: 'The question is repeated, intensifying the accusation. The repetition suggests obsessive reflection - the speaker has asked herself this question many times. Why her? The answer the poem implies is: because she was vulnerable and he was powerful.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'To fill my heart with care?',
      annotations: [
        {
          type: 'Key quote',
          note: '"To fill my heart with care" - "care" means sorrow, worry, suffering. The lord\'s attention did not bring happiness but pain. The rhyme of "hair" and "care" connects the cause (her beauty) with the effect (her suffering). She was sought out only to be damaged.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'He lured me to his palace-home –',
      annotations: [
        {
          type: 'Key quote',
          note: '"Lured" is the language of trapping animals - the lord is a hunter, the speaker is prey. "Palace-home" contrasts with her "cottage". The move from cottage to palace is not social advancement but entrapment. Rossetti makes the power imbalance explicit through the verb choice.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Woe’s me for joy thereof –',
      annotations: [
        {
          type: 'Paradox',
          note: '"Woe\'s me for joy thereof" - she felt joy at the time, but that joy became her downfall. The archaic "Woe\'s me" gives the line a biblical, fatalistic quality, as if her suffering was predestined. Joy and woe are inseparable in this poem.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'To lead a shameless shameful life,',
      annotations: [
        {
          type: 'Wordplay',
          note: '"Shameless shameful": two words from one root. The life was "shameless" for the lord, who felt no shame, and "shameful" for her, who is left with all of it.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'His plaything and his love.',
      annotations: [
        {
          type: 'Word order',
          note: '"Plaything" comes before "love": she was a toy first. The order shows which mattered to him.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'He wore me like a golden knot,',
      annotations: [
        {
          type: 'Key quote',
          note: '"Wore me like a golden knot" - she was an accessory, something decorative to be displayed and discarded. "Golden" suggests wealth and show: she was worn like jewellery. A knot can be untied. The metaphor reduces her from a person to an object the lord owned and eventually removed. (The Eduqas anthology prints "silken knot".)',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'He changed me like a glove:',
      annotations: [
        {
          type: 'Simile',
          note: '"Changed me like a glove" - gloves are removed when no longer needed. This simile dehumanises the speaker completely: she is something put on and taken off at will. The casualness of "changed" emphasises the lord\'s indifference to her feelings.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'So now I moan an unclean thing',
      annotations: [
        {
          type: 'Key quote',
          note: '"An unclean thing" - the speaker has been sexually used and is now considered impure by Victorian society. "Unclean" has biblical connotations of sin and contamination. She is not a person but a "thing". The self-description shows how deeply she has internalised society\'s judgement of her.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Who might have been a dove.',
      annotations: [
        {
          type: 'Symbolism',
          note: '"A dove" - the dove symbolises purity, peace and the Holy Spirit. The speaker could have remained innocent ("a dove") if the lord had not corrupted her. The contrast between "unclean thing" and "dove" measures the distance the lord\'s actions have taken her from innocence.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'O Lady Kate, my Cousin Kate,',
      annotations: [
        {
          type: 'Direct address',
          note: '"O Lady Kate" - now the speaker addresses her cousin directly. Kate has the title "Lady" because she married the lord. The formality of "Lady" marks the social distance between the cousins that the lord\'s choice has created.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'You grow more fair than I:',
      annotations: [
        {
          type: 'Comparison',
          note: '"You grow more fair than I" - Kate is now the more beautiful, or the more valued, and the present tense keeps the comparison going. It is bitter: the speaker acknowledges Kate\'s advantage while resenting the system that created it. (The Eduqas anthology prints "You grew".)',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'He saw you at your father’s gate,',
      annotations: [
        {
          type: 'Detail',
          note: '"Father\'s gate" - Kate was still under her father\'s protection when the lord saw her. Unlike the speaker, Kate was properly guarded. The gate is both literal and metaphorical - a boundary the lord approached properly this time, through courtship rather than seduction.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Chose you and cast me by.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Chose you and cast me by" - two brutal, simple verbs. The lord chose Kate and discarded the speaker as if selecting one item and throwing away another. "Cast me by" echoes the disposal of the "glove" - again the speaker is treated as an object.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'He watched your steps along the lane,',
      annotations: [
        {
          type: 'Predation',
          note: 'The lord watches Kate as he once found the speaker out: the same pursuing attention, now turned on her cousin.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Your sport among the rye:',
      annotations: [
        {
          type: 'Printing',
          note: 'This page prints the poem as the Pearson Edexcel GCSE anthology does, with "sport": Kate at play in the rye field. The Eduqas anthology prints "Your work among the rye". Either way, Kate too was a country girl in the fields when the lord saw her.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'He lifted you from mean estate',
      annotations: [
        {
          type: 'Class',
          note: '"Mean estate" means low social rank. The lord raises Kate by marriage, as he lowered the speaker: the same man decides both their fortunes.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'To sit with him on high.',
      annotations: [
        {
          type: 'Contrast',
          note: 'Kate sits "on high"; in the next stanza the speaker will "sit and howl in dust". The poem sets the two women at opposite heights.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'Because you were so good and pure',
      annotations: [
        {
          type: 'Irony',
          note: 'The lord marries Kate "because" she is "good and pure", the very qualities he took from the speaker.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'He bound you with his ring:',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Bound" makes marriage a kind of capture: the ring is the respectable version of the possession the speaker suffered.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The neighbours call you good and pure,',
      annotations: [
        {
          type: 'Repetition',
          note: '"Good and pure" returns as the neighbours\' verdict. Society judges by the ring, not by conduct.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Call me an outcast thing.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Outcast thing" echoes "an unclean thing" in stanza 2: society, like the lord, makes her an object.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Even so I sit and howl in dust',
      annotations: [
        {
          type: 'Imagery',
          note: '"Howl in dust" is an animal cry and the dust of mourning. The next line answers it, "You sit in gold and sing", and sets the two women\'s lives side by side.',
          color: '#10b981',
        },
      ],
    },
    { text: 'You sit in gold and sing:' },
    {
      text: 'Now which of us has tenderer heart?',
      annotations: [
        {
          type: 'Rhetorical question',
          note: "The question turns the neighbours' judgement round: the outcast claims the tenderer heart.",
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'You had the stronger wing.',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Kate "had the stronger wing": she flew higher. The bird picks up the "dove" of stanza 2. The speaker concedes Kate\'s success, not her worth.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'O Cousin Kate, my love was true,',
      annotations: [
        {
          type: 'Direct address',
          note: 'The second address to Kate, now "Cousin Kate" rather than "Lady Kate". The speaker insists that her own love was "true".',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Your love was writ in sand:',
      annotations: [
        {
          type: 'Metaphor',
          note: "Writing in sand is washed away by the tide: Kate's love is shallow and will not last.",
          color: '#10b981',
        },
      ],
    },
    {
      text: 'If he had fooled not me but you,',
      annotations: [
        {
          type: 'Conditional',
          note: 'The speaker imagines their places reversed: if he had fooled Kate instead of her.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'If you stood where I stand,',
      annotations: [
        {
          type: 'Challenge',
          note: '"If you stood where I stand" - the speaker challenges Kate to imagine herself in the speaker\'s position. This conditional is a test of empathy: would Kate have behaved differently? The speaker implies Kate would not.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'He had not won me with his love' },
    {
      text: 'Nor bought me with his land:',
      annotations: [
        {
          type: 'Key idea',
          note: '"Bought": the speaker sees the lord\'s marriage to Kate as a purchase, his love and his land offered together.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'I would have spit into his face',
      annotations: [
        {
          type: 'Key quote',
          note: "The poem's most violent line. In Kate's place, she says, she would have refused him with contempt; \"spit\" is shockingly physical in a Victorian woman's voice.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And not have taken his hand.',
      annotations: [
        {
          type: 'Double meaning',
          note: '"Taken his hand" means accepted him in marriage. The speaker accuses Kate of marrying the man who ruined her cousin.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'Yet I’ve a gift you have not got',
      annotations: [
        {
          type: 'Key quote',
          note: '"Yet" - the poem\'s turning point. Despite everything, the speaker has something Kate does not. The confidence of "I\'ve a gift you have not got" reverses the power dynamic. The speaker, who has been a victim throughout, now holds something the lord and Kate can never take from her.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And seem not like to get:',
      annotations: [
        {
          type: 'Tone',
          note: '"And seem not like to get" - Kate is unlikely to receive this gift. There is satisfaction, even triumph, in this observation. The speaker has found a source of power in her apparent defeat.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'For all your clothes and wedding-ring',
      annotations: [
        {
          type: 'Contrast',
          note: 'Kate\'s "clothes and wedding-ring" are everything the marriage gave her. The speaker\'s answer, two lines on, is her son.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I’ve little doubt you fret.',
      annotations: [
        {
          type: 'Tone',
          note: '"I\'ve little doubt you fret": for all her fine clothes, Kate is unhappy, the speaker supposes, because the marriage has given her no child.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'My fair-haired son, my shame, my pride,',
      annotations: [
        {
          type: 'Key quote',
          note: '"My fair-haired son, my shame, my pride" - the gift is her child. He is both her "shame" (the evidence of her sexual fall) and her "pride" (the thing she loves most). The paradox of "shame" and "pride" side by side captures the speaker\'s complex relationship with her motherhood and her past.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Cling closer, closer yet:',
      annotations: [
        {
          type: 'Tenderness',
          note: '"Cling closer, closer yet" - the speaker pulls her son close. The repeated "closer" is physically intimate and protective. After a poem full of exploitation and discard, this moment of genuine human tenderness is deeply moving.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Your sire would give broad lands for one',
      annotations: [
        {
          type: 'Irony',
          note: '"Your sire would give broad lands for one" - the lord, who treated the speaker as disposable, would give part of his estate for a son to inherit his title, and the only son he has is hers. She has something his wealth cannot buy. The power has reversed entirely. (The Eduqas anthology prints "Your father would give lands for one".)',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'To wear his coronet.',
      annotations: [
        {
          type: 'Key quote',
          note: "The coronet is the lord's rank. He has no son by his marriage to inherit it; the son he has is the speaker's. Her last word names the one thing his wealth cannot buy.",
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Christina Rossetti (1830-1894)</h3>
    <p>Rossetti was one of the most important English poets of the Victorian era. She was part of the <strong>Pre-Raphaelite</strong> artistic movement (her brother, Dante Gabriel Rossetti, was a founding member). She was deeply religious (Anglo-Catholic) and much of her poetry explores themes of <strong>love, loss, faith and female experience</strong>. She never married, though she was twice engaged.</p>

    <h3>The "Fallen Woman" in Victorian society</h3>
    <p>In Victorian England, a woman who had sex outside marriage was considered a <strong>"fallen woman"</strong> - permanently disgraced. She lost her social standing, her marriage prospects and often her family. The double standard was extreme: men faced no such consequences. Rossetti was deeply aware of this injustice. She volunteered at a <strong>Magdalene penitentiary</strong> (a home for "fallen women" and former prostitutes), which exposed her to the real suffering caused by these social rules.</p>

    <h3>Class and power</h3>
    <p>"Cousin Kate" explores how <strong>class</strong> and <strong>gender</strong> intersect to create vulnerability. The speaker is a "cottage-maiden" - working-class and unprotected. The "great lord" has wealth, status and power. He can seduce and discard her without consequences because the social system protects him and punishes her. Rossetti exposes this injustice without preaching - she lets the speaker\'s voice carry the argument.</p>

    <h3>Women's choices</h3>
    <p>The poem questions what Kate\'s marriage means. The lord "bound" her "with his ring" because she was "so good and pure" - was that love, or a match made with rank and land? The speaker says that in Kate\'s place she would have refused him: "I would have spit into his face". Rossetti suggests that women in this society had very limited agency - their fates were determined by men\'s choices, not their own.</p>

    <h3>Publication</h3>
    <p>"Cousin Kate" was published in Rossetti\'s first collection, <em>Goblin Market and Other Poems</em> (1862). The collection established her as a major poet and includes several poems exploring female sexuality, exploitation and resistance.</p>
  `,

  summary: `Stanza 1 (lines 1-8): The speaker introduces herself as a "cottage-maiden" - working-class, weathered by sun and air, content with her life and "Not mindful" of her beauty. Twice she asks why a "great lord" sought her out, praising her "flaxen hair" only "To fill my heart with care". The repeated question is accusatory: he came looking for her.

Stanza 2 (lines 9-16): The lord "lured" her to his "palace-home" to lead "a shameless shameful life" as "His plaything and his love". He wore her "like a golden knot" and changed her "like a glove" - an ornament used and discarded. Now she calls herself "an unclean thing / Who might have been a dove".

Stanza 3 (lines 17-24): She turns to "Lady Kate", her cousin, who grows "more fair". The lord saw Kate "at your father's gate", "Chose you and cast me by", watched her in the lanes and fields, and lifted her "from mean estate / To sit with him on high".

Stanza 4 (lines 25-32): He married Kate "Because you were so good and pure", and the neighbours call Kate "good and pure" and the speaker "an outcast thing". The contrast is stark: "I sit and howl in dust / You sit in gold and sing". She asks "which of us has tenderer heart?" and answers that Kate simply "had the stronger wing".

Stanza 5 (lines 33-40): She claims her love was "true" and Kate's "writ in sand". Had their places been reversed, she says, the lord would not have won or bought her: she would have spat in his face and refused his hand. The charge is that Kate married the man who ruined her cousin.

Stanza 6 (lines 41-48): The reversal. "Yet I've a gift you have not got": her son, "my shame, my pride". For all Kate's "clothes and wedding-ring", she has no child, and the lord "would give broad lands for one / To wear his coronet". The discarded woman holds what his wealth cannot buy.

Overall meaning: "Cousin Kate" is a dramatic monologue exploring sexual exploitation, class, and the double standards of Victorian morality. Rossetti gives voice to a "fallen woman" and exposes the injustice of a system that punishes women for men's actions. The final reversal - the speaker's son as her triumph - challenges the notion that sexual purity is a woman's only value.`,

  formAndStructure: `Form: Ballad form - six stanzas of eight lines each. The ballad form is traditionally used for storytelling, especially stories of love, betrayal and injustice. Rossetti's choice connects the poem to a tradition of women's ballads about seduction and abandonment.

Rhyme scheme: Each stanza rhymes on its even lines - one rhyme sound runs through lines 2, 4, 6 and 8 ("air", "fair", "hair", "care" in the first stanza) - while the odd lines mostly do not rhyme. The simplicity of the form contrasts with the complexity of the speaker's emotions. The steadily returning rhyme gives the poem a measured, controlled quality, as if the speaker has rehearsed this story many times.

Metre: Roughly iambic, alternating tetrameter and trimeter. This is ballad metre - the same form used by Hardy in "The Man He Killed". The folk-song rhythm makes the poem feel oral, as if the speaker is telling her story aloud to an audience (or to Kate herself).

Structure - three movements:
• Stanzas 1-2: The speaker's story - seduction, exploitation, discard.
• Stanzas 3-5: Kate - chosen, married and praised: the double standard.
• Stanza 6: The reversal - the speaker's son as her triumph.

Dramatic monologue: The speaker addresses Kate directly ("O Lady Kate, my Cousin Kate"), creating an intimate, confrontational tone. This is not a public speech but a private reckoning between two women.

The final stanza: It turns on "Yet". After five stanzas of loss, the speaker names what she has and Kate lacks, and the poem ends on the lord's own desire: a son "To wear his coronet". The poem's reversal and emotional climax come in its last eight lines.

Tone: Bitter, accusatory, proud, tender. The tone shifts throughout - from regretful questioning (stanza 1) to bitterness (stanza 2) to resentment and challenge (stanzas 3-5) to fierce maternal pride (stanza 6).`,

  keyQuotes: [
    {
      quote: 'I was a cottage-maiden / Hardened by sun and air',
      analysis:
        'The speaker defines herself by class and physical labour. "Cottage-maiden" is humble; "hardened by sun and air" means her skin is tanned from outdoor work - not beautiful by Victorian standards of pale femininity. Yet there is dignity in the description. She was real, natural, honest - qualities the lord\'s world lacks.',
      themes: ['Class', 'Innocence', 'Nature'],
      analysisAr:
        'تُعرّف المتكلّمةُ نفسَها بطبقتها وعملها البدنيّ. "Cottage-maiden" متواضعة؛ و"hardened by sun and air" تعني أنّ بشرتها سُمرت من العمل في الخلاء - وهو ما لم يكن جمالاً وفق معايير الأنوثة الفيكتوريّة الشاحبة. ومع ذلك ففي الوصف وقارٌ. كانت حقيقيّةً طبيعيّةً صادقة - صفاتٌ يفتقر إليها عالم اللورد.',
      themesAr: ['الطبقة', 'البراءة', 'الطبيعة'],
    },
    {
      quote: 'Not mindful I was fair',
      analysis:
        "She did not know she was beautiful, or did not think about it. This unconscious beauty made her vulnerable - she had no defences because she did not know she needed them. The line also establishes her as without vanity or ambition, making the lord's exploitation of her innocence more cruel.",
      themes: ['Innocence', 'Beauty', 'Vulnerability'],
      analysisAr:
        'لم تكن تعلم أنّها جميلة، أو لم تَلتفِت إلى ذلك. هذا الجمالُ اللاواعي جعلها هشّة - لم تكن تملك دفاعاتٍ لأنّها لم تكن تعلم أنّها بحاجةٍ إليها. ويُؤكّد السطر كذلك أنّها بلا غرور ولا طموح، فيكون استغلال اللورد لبراءتها أشدّ قسوة.',
      themesAr: ['البراءة', 'الجمال', 'الهشاشة'],
    },
    {
      quote: 'He lured me to his palace-home',
      analysis:
        '"Lured" is the language of trapping - the lord is a predator, the speaker his prey. The word places all the agency and blame on the lord. She did not choose to go; she was lured. "Palace-home" contrasts sharply with her "cottage" - the class gulf between them is spatial as well as social.',
      themes: ['Predation', 'Class', 'Power'],
      analysisAr:
        'لفظة "lured" من معجم النصب والإيقاع - اللوردُ صيّاد، والمتكلّمةُ فريسته. الكلمةُ تضع الفاعليّةَ واللومَ كلَّهما على اللورد. لم تختر الذهاب؛ بل اسْتُدرجَت. وتضادّ "palace-home" حادٌّ مع "cottage"-ها - الهوّةُ الطبقيّة بينهما مكانيّةٌ كما هي اجتماعيّة.',
      themesAr: ['الاستدراج', 'الطبقة', 'السلطة'],
    },
    {
      quote: 'He wore me like a golden knot, / He changed me like a glove',
      analysis:
        'Two devastating similes. A golden knot is an ornament worn for show; a glove is worn and removed at will. Both reduce the speaker from a person to an object - something the lord used for his pleasure and discarded when he wanted something new. The casualness of "changed" is chilling.',
      themes: ['Objectification', 'Disposal', 'Power'],
      analysisAr:
        'تشبيهان موجعان. العُقدةُ الذهبيّة زينةٌ تُلبَس للتباهي؛ والقفّازُ يُلبَس ويُخلَع كما يشاء صاحبه. كلاهما يَختزل المتكلّمةَ من إنسانٍ إلى شيء - استعمله اللورد لمتعته ثمّ تخلّى عنه حين شاء آخر. والتلقائيّة في "changed" مرعبة.',
      themesAr: ['التشييء', 'النبذ', 'السلطة'],
    },
    {
      quote: 'So now I moan an unclean thing / Who might have been a dove',
      analysis:
        '"Unclean thing" versus "dove" - the speaker measures the distance between what she is (ruined, impure) and what she could have been (innocent, pure). "Unclean" has biblical connotations of contamination. That she calls herself a "thing" shows how completely she has internalised society\'s dehumanisation of fallen women.',
      themes: ['Fallen woman', 'Purity', 'Self-judgement'],
      analysisAr:
        '"Unclean thing" في مقابل "dove" - تَقيس المتكلّمةُ المسافةَ بين ما هي عليه (مدمَّرة، غير طاهرة) وما كان يمكن أن تكونه (بريئة، نقيّة). للفظة "unclean" دلالاتٌ كتابيّة بالتلوّث. وأن تصف نفسَها بـ"thing" يُظهر مقدار ما استبطنته من تجريد المجتمع للنساء "الساقطات" من إنسانيّتهنّ.',
      themesAr: ['المرأة الساقطة', 'الطهارة', 'الحكم على الذات'],
    },
    {
      quote: 'Chose you and cast me by',
      analysis:
        'The brutal economy of this line captures the lord\'s power. Two verbs - "chose" and "cast" - and two women\'s fates are decided. The speaker is discarded like waste. The parallelism shows that choosing Kate and discarding the speaker were simultaneous, linked actions - one woman\'s gain is another\'s ruin.',
      themes: ['Choice', 'Disposal', 'Power'],
      analysisAr:
        'الاقتصاد القاسي في هذا السطر يلتقط سلطة اللورد. فعلان - "chose" و"cast" - وقَدَران لامرأتين يُحسمان. تُنبَذ المتكلّمةُ كأنّها نفاية. والتوازي يُري أنّ اختيار Kate ونبذ المتكلّمة فِعلان متزامنان مترابطان - مكسبُ امرأةٍ خسارةُ امرأةٍ أخرى.',
      themesAr: ['الاختيار', 'النبذ', 'السلطة'],
    },
    {
      quote: 'My fair-haired son, my shame, my pride',
      analysis:
        'The poem\'s most complex line. The son is simultaneously her "shame" (proof of her sexual fall) and her "pride" (the child she loves). The paradox refuses to let the reader see the son as simply one or the other. "Fair-haired" echoes the "flaxen hair" the lord once praised in the speaker - the son has his mother\'s colouring, the beauty that drew the lord to her. The speaker reclaims what was done to her through love for her child.',
      themes: ['Motherhood', 'Paradox', 'Reclamation'],
      analysisAr:
        'أعقد سطور القصيدة. الابنُ في آنٍ معاً "shame" (دليلُ السقوط) و"pride" (الطفل الذي تحبّه). تأبى المفارقةُ أن نختزله في أحد الوصفين. وعبارة "fair-haired" تردّد صدى "flaxen hair" التي مدحها اللورد في المتكلّمة ذات يوم - الابنُ يحمل لونَ شعر أمّه، الجمالَ الذي جذب اللوردَ إليها. تستردّ المتكلّمةُ ما فُعل بها عبر محبّتها لطفلها.',
      themesAr: ['الأمومة', 'المفارقة', 'الاسترداد'],
    },
    {
      quote: 'Your sire would give broad lands for one',
      analysis:
        'The final reversal. The lord, who discarded the speaker, would give "broad lands" for a son to inherit his title, and the only son he has is hers. In Victorian society, landed estates required heirs. The speaker - powerless, ruined, "unclean" - holds the one thing wealth and status cannot buy. The power dynamic has completely inverted.',
      themes: ['Power reversal', 'Heir', 'Irony'],
      analysisAr:
        'الانعطافة الختاميّة. اللوردُ الذي نَبذ المتكلّمةَ مستعدٌّ أن يُعطي "broad lands" مقابل ابنٍ يرث لقبه، والابنُ الوحيد الذي عنده هو ابنُها. في المجتمع الفيكتوريّ كانت الإقطاعاتُ تستلزم وريثاً. والمتكلّمةُ - الضعيفةُ المدمَّرةُ "unclean" - تملك الشيء الوحيد الذي لا يشتريه مالٌ ولا جاه. وموازين القوى انقلبت بالكامل.',
      themesAr: ['انقلاب موازين القوى', 'الوريث', 'المفارقة'],
    },
  ],

  // Each card's lineRef is the row of `lines` where its example begins, stanza breaks counted: the
  // viewer lights that row and labels the card with its line number (poemLineNumbers in
  // InteractivePoemViewer). Until 2 October 2026 two cards pointed a row early, one of them at a
  // stanza break, which shows no line number, and the ballad-form card printed a description
  // between the quotation marks the viewer adds; it is now in square brackets, the mark these pages
  // use for the site's own words. a-device-card-cites-the-line-it-quotes.test.tsx now checks every
  // card. The same day the rows were replaced with the poem as the Edexcel anthology prints it
  // (see the note above `lines`), and every card was moved with its line; the ballad-form card had
  // also called the rhyme scheme ABAB, and the rhetorical-questions card had quoted a conditional,
  // "If you stood where I stand", as a question.
  languageDevices: [
    {
      device: 'Simile / Objectification',
      example: 'He wore me like a golden knot, / He changed me like a glove',
      effect:
        'The similes reduce the speaker from a human being to an accessory. A golden knot is tied and untied; a glove is worn and removed. Both images convey the lord\'s casual, careless treatment of a woman as a disposable object. The richness of "golden" makes the disposal worse - even as an object, she was only briefly valued.',
      lineRef: 13,
      effectAr:
        'يَختزل التشبيهان المتكلّمةَ من إنسانٍ إلى ملحقٍ زينة. العقدةُ الذهبيّة تُعقد وتُحلّ؛ والقفّاز يُلبَس ويُخلَع. الصورتان تُوصلان كيف عاملها اللورد ببرودٍ كأنّها شيءٌ قابلٌ للنبذ. وفخامةُ "golden" تجعل النبذَ أشدّ وقعاً - حتى بوصفها شيئاً، لم تَدُم قيمتُها إلّا لحظات.',
    },
    {
      device: 'Dramatic monologue / Direct address',
      example: 'O Lady Kate, my Cousin Kate',
      effect:
        "The poem is addressed directly to Kate, creating an intimate confrontation. The speaker is not making a public argument but a private accusation. The direct address forces the reader into Kate's position - we must listen, as Kate must, to the speaker's pain and challenge.",
      lineRef: 18,
      effectAr:
        'القصيدة موجَّهةٌ مباشرةً إلى Kate، فتولّد مواجهةً حميمة. المتكلّمةُ لا تطرح حُجّةً علنيّة بل اتّهاماً خاصّاً. والنداءُ المباشر يُلزم القارئَ بأن يضع نفسه في موضع Kate - علينا أن نُصغي، كما يجب على Kate أن تُصغي، إلى ألم المتكلّمة وتحدّيها.',
    },
    {
      device: 'Semantic field of predation',
      example: 'lured, find me out, wore, changed, cast me by',
      effect:
        'The verbs describing the lord\'s behaviour come from the semantic field of hunting and trapping. He "lured" (baited), would "find me out" (tracked), "wore" (used), and would "cast me by" (discarded). The consistent animal-hunting language makes the lord a predator throughout, which undercuts any reading of the relationship as romantic.',
      lineRef: 9,
      effectAr:
        'الأفعال التي تصف سلوك اللورد تنتمي إلى حقل الصيد والاستدراج. "lured" (أغرى بطعم)، "find me out" (تتبّع)، "wore" (استعمل)، و"cast me by" (نَبَذ). واتّساق معجم صيد الحيوان يجعل اللورد صيّاداً طوال القصيدة، فيُفرّغ أيَّ قراءةٍ غزليّة للعلاقة.',
    },
    {
      device: 'Paradox / Oxymoron',
      example: 'my shame, my pride',
      effect:
        'The son is simultaneously shame and pride - the evidence of the speaker\'s ruin and the source of her only joy. The paradox refuses simple moral categories. Rossetti challenges Victorian morality by showing that what society calls "shame" can also be the deepest source of love.',
      lineRef: 49,
      effectAr:
        'الابنُ في آنٍ معاً عارٌ وفخر - دليلُ خراب المتكلّمة ومصدرُ فرحها الوحيد. المفارقةُ تأبى التصنيفات الأخلاقيّة البسيطة. تتحدّى Rossetti أخلاق العصر الفيكتوريّ ببرهنتها على أنّ ما يسمّيه المجتمع "عاراً" يمكن أن يكون كذلك أعمقَ مصادر الحبّ.',
    },
    {
      device: 'Rhetorical questions',
      example: 'Why did a great lord find me out… Now which of us has tenderer heart?',
      effect:
        'The questions demand answers that cannot be given. "Why did a great lord find me out?" - there is no good reason. "Now which of us has tenderer heart?" - Kate cannot answer. The questions expose the injustice of the speaker\'s situation and challenge Kate\'s moral superiority.',
      lineRef: 4,
      effectAr:
        'الأسئلةُ تطلب إجاباتٍ لا يمكن تقديمها. "Why did a great lord find me out?" - لا سببَ وجيهاً. "Now which of us has tenderer heart?" - لا تستطيع Kate أن تُجيب. تكشف الأسئلةُ ظلمَ وضع المتكلّمة وتُفنّد ادّعاءَ Kate بالأفضليّة الأخلاقيّة.',
    },
    {
      device: 'Ballad form',
      example:
        '[Six eight-line stanzas, rhymed on the even lines, alternating tetrameter and trimeter]',
      effect:
        'The ballad form connects the poem to a long tradition of folk songs about seduction, betrayal and abandoned women. The simple, song-like form makes the poem feel oral and traditional - as if this story has been told many times by many women. The regularity of the rhyme creates a controlled, measured tone that contains powerful emotions.',
      lineRef: 0,
      effectAr:
        'شكلُ الـ ballad يربط القصيدةَ بتقليدٍ طويل من الأغاني الشعبيّة عن الإغواء والخيانة والنساء المنبوذات. وبساطةُ الشكل الغنائيّة تكسب القصيدةَ طابعاً شفويّاً تقليديّاً - كأنّ هذه القصّة قد رُويت مرّاتٍ كثيرة على ألسنة نساءٍ كثيرات. وانتظامُ القافية يُولّد نبرةً مضبوطةً تحتوي عواطف هائلة.',
    },
  ],

  contextAr: `
    <h3>Christina Rossetti (1830-1894)</h3>
    <p>من أبرز شعراء العصر الفيكتوريّ في الإنجليزيّة. كانت ضمن الحركة الفنّيّة <strong>Pre-Raphaelite</strong> (أخوها Dante Gabriel Rossetti من مؤسّسيها). متديّنةٌ التزاماً (أنغليكانيّة كاثوليكيّة)، وكثيرٌ من شعرها يستكشف <strong>الحبّ والفقد والإيمان وتجربة المرأة</strong>. لم تتزوّج وإن خُطبت مرّتين.</p>

    <h3>"المرأة الساقطة" في المجتمع الفيكتوريّ</h3>
    <p>في إنجلترا الفيكتوريّة كانت المرأةُ التي تُمارس الجنس خارج الزواج تُعتبر <strong>"fallen woman"</strong> - مَوصومةً إلى الأبد. تفقد مكانتها الاجتماعيّة وفرصها في الزواج وغالباً عائلتها. كان الازدواج صارخاً: لا يلحق الرجالَ شيءٌ من هذه التبعات. كانت Rossetti مدركةً تماماً لهذا الظلم. تطوّعت في <strong>Magdalene penitentiary</strong> (دارٌ للنساء "الساقطات" وللعاهرات السابقات)، فاطّلعت على الألم الحقيقيّ الذي تُولّده هذه القواعد.</p>

    <h3>الطبقة والسلطة</h3>
    <p>تستكشف "Cousin Kate" كيف يتقاطع <strong>الطبقة</strong> و<strong>النوع الاجتماعيّ</strong> في توليد الهشاشة. المتكلّمةُ "cottage-maiden" - من الطبقة العاملة لا حماةَ لها. واللوردُ الـ"great" عنده ثروةٌ ومكانةٌ وسلطة. يستطيع أن يُغوي وينبذ بلا تبعات لأنّ النظامَ الاجتماعيّ يحميه ويعاقبها. تكشف Rossetti هذا الظلم دون وعظ - تُسلّم الحُجّةَ لصوت المتكلّمة.</p>

    <h3>اختيارات النساء</h3>
    <p>تسأل القصيدة عن معنى زواج Kate. ربطها اللوردُ "with his ring" لأنّها كانت "so good and pure" - فهل كان ذلك حبّاً، أم صفقةً تُعقد بالمكانة والأرض؟ وتقول المتكلّمةُ إنّها لو كانت في موضع Kate لرفضته: "I would have spit into his face". وتُلمح Rossetti إلى أنّ للنساء في هذا المجتمع فاعليّةً محدودةً جدّاً - تتحدّد أقدارهنّ باختيارات الرجال لا باختياراتهنّ.</p>

    <h3>النشر</h3>
    <p>نُشرت "Cousin Kate" في مجموعة Rossetti الأولى <em>Goblin Market and Other Poems</em> (سنة 1862). أرست هذه المجموعةُ مكانتها شاعرةً كبرى، وتضمّ عدّة قصائد تستكشف الجنسانيّةَ الأنثويّة والاستغلال والمقاومة.</p>
  `,

  summaryAr: `المقطع الأوّل (السطور 1-8): تُقدّم المتكلّمةُ نفسها "cottage-maiden" - من طبقةٍ عاملة، لوّحت بشرتَها الشمسُ والهواء، راضيةً بحياتها و"Not mindful" بجمالها. وتسأل مرّتين لماذا تبيّنها "great lord" ومدح "flaxen hair" فقط "To fill my heart with care". السؤالُ المتكرّر اتّهاميّ: هو من جاء يبحث عنها.

المقطع الثاني (السطور 9-16): "lured" اللوردُ المتكلّمةَ إلى "palace-home" لتعيش "a shameless shameful life" بوصفها "His plaything and his love". لبسها "like a golden knot" وبدّلها "like a glove" - زينةٌ تُستعمَل ثمّ تُنبَذ. والآن تسمّي نفسها "an unclean thing / Who might have been a dove".

المقطع الثالث (السطور 17-24): تلتفت إلى "Lady Kate"، قريبتِها، التي تزداد "more fair". رأى اللوردُ Kate "at your father's gate"، و"Chose you and cast me by"، وراقبها في الدروب والحقول، ورفعها "from mean estate / To sit with him on high".

المقطع الرابع (السطور 25-32): تزوّج Kate "Because you were so good and pure"، والجيرانُ يسمّون Kate "good and pure" ويسمّون المتكلّمة "an outcast thing". والتضادّ صارخ: "I sit and howl in dust / You sit in gold and sing". وتسأل "which of us has tenderer heart?" وتُجيب أنّ Kate ببساطة "had the stronger wing".

المقطع الخامس (السطور 33-40): تقول إنّ حبّها كان "true" وحبّ Kate "writ in sand". ولو تبادلتا المكانين، تقول، لما كسبها اللورد ولا اشتراها: لبصقت في وجهه ورفضت يده. والتهمةُ أنّ Kate تزوّجت الرجلَ الذي دمّر قريبتَها.

المقطع السادس (السطور 41-48): الانعطافة. "Yet I've a gift you have not got": ابنُها، "my shame, my pride". ورغم "clothes and wedding-ring" عند Kate، فلا طفلَ لها، واللوردُ "would give broad lands for one / To wear his coronet". والمنبوذةُ تملك ما لا تشتريه ثروتُه.

المعنى الإجماليّ: "Cousin Kate" مونولوغٌ دراميّ يستكشف الاستغلال الجنسيّ والطبقة وازدواج الأخلاق الفيكتوريّ. تُعطي Rossetti صوتاً لـ"fallen woman" وتكشف ظلم نظامٍ يُعاقب النساء على أفعال الرجال. والانعطافةُ الختاميّة - ابنُ المتكلّمة بوصفه انتصارَها - تتحدّى فكرةَ أنّ الطهارةَ الجنسيّة هي قيمةُ المرأة الوحيدة.`,

  formAndStructureAr: `الشكل: شكلُ الـ ballad - ستّةُ مقاطع، كلٌّ منها ثمانيةُ أسطر. يُستخدَم شكلُ الـ ballad تقليديّاً للسرد، خاصّةً قصصِ الحبّ والخيانة والظلم. اختيارُ Rossetti يربط القصيدةَ بتقليدِ أغاني النساء عن الإغواء والهجر.

نظام القافية: كلُّ مقطعٍ تتّفق قافيتُه في أسطره الزوجيّة - صوتُ قافيةٍ واحد يجري في الأسطر 2 و4 و6 و8 ("air" و"fair" و"hair" و"care" في المقطع الأوّل) - بينما لا تتقفّى الأسطر الفرديّة في الغالب. وبساطةُ الشكل تتقابل مع تعقيد عواطف المتكلّمة. والقافيةُ العائدة بانتظام تكسب القصيدةَ صفةَ ضبطٍ ووَزن، كأنّ المتكلّمةَ قد رتّبت قصّتها مرّاتٍ كثيرة.

الوزن: iambic إجمالاً، يتناوب tetrameter وtrimeter. هذا وزنُ الـ ballad - وهو الشكلُ نفسُه الذي يستعمله Hardy في "The Man He Killed". إيقاعُ الأغنية الشعبيّة يكسب القصيدةَ طابعاً شفويّاً، كأنّ المتكلّمة تروي قصّتها بصوتٍ مسموع أمام جمهور (أو أمام Kate نفسها).

البنية في ثلاث حركات:
• المقطعان 1-2: قصّة المتكلّمة - الإغواء، الاستغلال، النبذ.
• المقاطع 3-5: Kate - المختارة المتزوّجة الممدوحة: ازدواج المعايير.
• المقطع 6: الانعطافة - ابنُ المتكلّمة انتصاراً لها.

المونولوغ الدراميّ: تُخاطب المتكلّمةُ Kate مباشرةً ("O Lady Kate, my Cousin Kate")، فتولّد نبرةً حميمةً مواجِهة. ليست خطبةً علنيّة بل محاسبةً خاصّة بين امرأتين.

المقطع الختاميّ: ينعطف على كلمة "Yet". بعد خمسة مقاطع من الفقد، تُسمّي المتكلّمةُ ما عندها وما ينقص Kate، وتنتهي القصيدة على رغبة اللورد نفسه: ابنٌ "To wear his coronet". وفي أسطرها الثمانية الأخيرة انعطافةُ القصيدة وذروتها العاطفيّة.

النبرة: مرارة، اتّهام، فخر، حنان. تتقلّب على امتداد القصيدة - من تساؤلٍ نادم (المقطع الأوّل) إلى مرارة (المقطع الثاني) إلى سخطٍ وتحدّ (المقاطع 3-5) إلى فخرٍ أموميّ شَرِس (المقطع 6).`,
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'La Belle Dame Sans Merci',
    poet: 'John Keats',
    href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
    reason:
      'Both poems tell stories of seduction and abandonment using ballad form. In Keats, a man is seduced by a supernatural woman; in Rossetti, a woman is seduced by a powerful man. Compare how gender reversal changes who has power and who is blamed.',
    themes: ['Seduction', 'Ballad', 'Gender and power'],
  },
  {
    title: 'Remember',
    poet: 'Christina Rossetti',
    href: '/igcse/edexcel/poetry/remember',
    reason:
      'Both poems are by Rossetti and explore female experience, loss and memory. "Remember" asks a lover to remember the speaker after death; "Cousin Kate" demands that Kate recognise the speaker\'s suffering. Compare the two speakers\' attitudes to love and loss.',
    themes: ['Female voice', 'Love', 'Loss'],
  },
  {
    title: 'Sonnet 116',
    poet: 'William Shakespeare',
    href: '/igcse/edexcel/poetry/sonnet-116',
    reason:
      'Shakespeare defines true love as constant and unchanging; the lord in "Cousin Kate" treats love as disposable. Compare Shakespeare\'s idealised view of love with Rossetti\'s realistic portrayal of exploitation disguised as love.',
    themes: ['Love', 'Constancy vs disposal', 'Power'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function CousinKatePage() {
  const tr = useT()
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          {tr('anth_text.back_to_anthology')}
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
            <BookOpen className="size-5 text-pink-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Cousin Kate</h1>
            <p className="text-body-sm text-muted-foreground">
              Christina Rossetti &middot; wider reading
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              {tr('igcse.page.badge_edexcel_lit')}
            </Badge>
          </div>
        </div>
      </div>

      <section
        aria-label="Anthology scope notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-2">
            <p>
              <strong className="text-foreground">
                This poem is not in the current Edexcel IGCSE 4ET1 anthology.
              </strong>{' '}
              It may have been included in earlier syllabus cycles or is provided as wider-reading
              content. Confirm via the official Pearson Edexcel anthology before relying on it for
              assessment. The poem is printed here as the Pearson Edexcel GCSE (9-1) anthology
              prints it, in its Conflict cluster.
            </p>
            <p>
              {/* Said "Eduqas GCSE 2025 poetry cluster" until 2 October 2026: the Eduqas
                  anthology is not a cluster and is examined from summer 2027. */}
              "Cousin Kate" is in the{' '}
              <strong className="text-foreground">
                Eduqas GCSE anthology examined from summer 2027
              </strong>
              . Eduqas prints a different text of the poem, differing in several words; for it, see{' '}
              <Link
                href="/revision/poetry/eduqas/cousin-kate"
                className="underline underline-offset-2 hover:text-foreground"
              >
                the Eduqas Cousin Kate page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <InteractivePoemViewer poem={poem} />

      <StudyTools textName="Cousin Kate" textType="poem" examBoard="Edexcel" variant="compact" />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {tr('anth_text.section.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Cousin Kate is not in the current 4ET1 anthology, so these are wider-reading pairings
          rather than exam-ready comparisons. Each poem listed here <em>is</em> in the 4ET1
          anthology, so you can practise the comparison skill while staying within the prescribed
          set.
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
