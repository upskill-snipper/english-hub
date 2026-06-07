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
  lines: [
    {
      text: 'I was a cottage maiden',
      annotations: [
        {
          type: 'Social status',
          note: '"Cottage maiden" - the speaker defines herself by her humble social position. A cottage maiden is a rural working-class girl. This establishes the class dynamic that drives the poem: she is low-born, vulnerable, and will be exploited by a man of higher rank.',
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
      text: 'Contented with my cottage mates,',
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
    { text: '' },
    {
      text: 'Why did a great lord find me out,',
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
      text: 'He lured me to his palace home,',
      annotations: [
        {
          type: 'Key quote',
          note: '"Lured" is the language of trapping animals - the lord is a hunter, the speaker is prey. "Palace home" contrasts with her "cottage". The move from cottage to palace is not social advancement but entrapment. Rossetti makes the power imbalance explicit through the verb choice.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "Woe's me for joy thereof,",
      annotations: [
        {
          type: 'Paradox',
          note: '"Woe\'s me for joy thereof" - she felt joy at the time, but that joy became her downfall. The archaic "Woe\'s me" gives the line a biblical, fatalistic quality, as if her suffering was predestined. Joy and woe are inseparable in this poem.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'He wore me like a silken knot,',
      annotations: [
        {
          type: 'Key quote',
          note: '"Wore me like a silken knot" - she was an accessory, something decorative to be displayed and discarded. "Silken" suggests luxury but also fragility. A knot can be untied. The metaphor reduces her from a person to an object the lord owned and eventually removed.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'He changed me like a glove.',
      annotations: [
        {
          type: 'Simile',
          note: '"Changed me like a glove" - gloves are removed when no longer needed. This simile dehumanises the speaker completely: she is something put on and taken off at will. The casualness of "changed" emphasises the lord\'s indifference to her feelings.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'He watched your survey the survey of gold,',
      annotations: [],
    },
    {
      text: 'So now I moan, an unclean thing,',
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
      text: 'O Lady Kate, my cousin Kate,',
      annotations: [
        {
          type: 'Direct address',
          note: '"O Lady Kate" - now the speaker addresses her cousin directly. Kate has the title "Lady" because she married the lord. The formality of "Lady" marks the social distance between the cousins that the lord\'s choice has created.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'You grew more fair than I:',
      annotations: [
        {
          type: 'Comparison',
          note: '"You grew more fair than I" - Kate became more beautiful (or more socially valued) than the speaker. The comparison is bitter: the speaker acknowledges Kate\'s advantage while resenting the system that created it.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "He saw you at your father's gate,",
      annotations: [
        {
          type: 'Detail',
          note: '"Father\'s gate" - Kate was still under her father\'s protection when the lord saw her. Unlike the speaker, Kate was properly guarded. The gate is both literal and metaphorical - a boundary the lord approached properly this time, through courtship rather than seduction.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Chose you, and cast me by.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Chose you, and cast me by" - two brutal, simple verbs. The lord chose Kate and discarded the speaker as if selecting one item and throwing away another. "Cast me by" echoes the disposal of the "glove" - again the speaker is treated as an object.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'He bound you with his survey of gold,',
      annotations: [],
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
    {
      text: "Who knows if you'd have been so good,",
      annotations: [],
    },
    {
      text: 'And would you have been less bad?',
      annotations: [],
    },
    { text: '' },
    {
      text: "Yet I've a gift you have not got,",
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
      text: 'For all your clothes and survey of gold,',
      annotations: [],
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
      text: 'Your father would give lands for one,',
      annotations: [
        {
          type: 'Irony',
          note: '"Your father would give lands for one" - the lord, who treated the speaker as disposable, now desperately wants what she has: an heir. She has something his wealth cannot buy. The power has reversed entirely.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'To wear his survey of gold.',
      annotations: [],
    },
  ],

  context: `
    <h3>Christina Rossetti (1830-1894)</h3>
    <p>Rossetti was one of the most important English poets of the Victorian era. She was part of the <strong>Pre-Raphaelite</strong> artistic movement (her brother, Dante Gabriel Rossetti, was a founding member). She was deeply religious (Anglo-Catholic) and much of her poetry explores themes of <strong>love, loss, faith and female experience</strong>. She never married, though she was twice engaged.</p>

    <h3>The "Fallen Woman" in Victorian society</h3>
    <p>In Victorian England, a woman who had sex outside marriage was considered a <strong>"fallen woman"</strong> - permanently disgraced. She lost her social standing, her marriage prospects and often her family. The double standard was extreme: men faced no such consequences. Rossetti was deeply aware of this injustice. She volunteered at a <strong>Magdalene penitentiary</strong> (a home for "fallen women" and former prostitutes), which exposed her to the real suffering caused by these social rules.</p>

    <h3>Class and power</h3>
    <p>"Cousin Kate" explores how <strong>class</strong> and <strong>gender</strong> intersect to create vulnerability. The speaker is a "cottage maiden" - working-class and unprotected. The "great lord" has wealth, status and power. He can seduce and discard her without consequences because the social system protects him and punishes her. Rossetti exposes this injustice without preaching - she lets the speaker\'s voice carry the argument.</p>

    <h3>Women's choices</h3>
    <p>The poem questions whether Kate had any real choice. Kate married the lord, but was she "bound" by genuine love or by the "survey of gold"? The speaker asks whether Kate would have behaved differently in her position. Rossetti suggests that women in this society had very limited agency - their fates were determined by men\'s choices, not their own.</p>

    <h3>Publication</h3>
    <p>"Cousin Kate" was published in Rossetti\'s first collection, <em>Goblin Market and Other Poems</em> (1862). The collection established her as a major poet and includes several poems exploring female sexuality, exploitation and resistance.</p>
  `,

  summary: `Stanza 1 (lines 1-4): The speaker introduces herself as a "cottage maiden" - working-class, sun-weathered, content with her life. She was not aware of her own beauty ("Not mindful I was fair"). This innocence made her vulnerable.

Stanza 2 (lines 5-8): She asks why a "great lord" sought her out and praised her beauty. The repeated question "Why did a great lord find me out" is accusatory - he came looking for her. His attention brought not happiness but sorrow ("care").

Stanza 3 (lines 9-12): The lord "lured" her to his palace, seduced her, and treated her as a possession. She was "worn like a silken knot" and "changed like a glove" - decorative objects to be used and discarded. The metaphors reduce her from person to thing.

Stanza 4 (lines 13-15): Now discarded, the speaker is "an unclean thing" - sexually used and socially ruined. She could have remained innocent ("a dove") if the lord had not corrupted her. She has internalised society's judgement of her.

Stanza 5 (lines 16-19): The speaker addresses Cousin Kate directly. Kate grew "more fair", caught the lord's eye, and was chosen - while the speaker was "cast by". Kate received marriage; the speaker received disgrace.

Stanza 6 (lines 20-23): The speaker challenges Kate - would Kate have behaved any differently in her position? The implication is that Kate's virtue is a matter of luck, not moral superiority.

Stanza 7 (lines 24-30): The poem's reversal. The speaker has something Kate does not: a son. He is "my shame, my pride" - evidence of her fall but also the thing she loves most. The lord would "give lands" for an heir. The powerless, discarded woman now holds the one thing money cannot buy.

Overall meaning: "Cousin Kate" is a dramatic monologue exploring sexual exploitation, class, and the double standards of Victorian morality. Rossetti gives voice to a "fallen woman" and exposes the injustice of a system that punishes women for men's actions. The final reversal - the speaker's son as her triumph - challenges the notion that sexual purity is a woman's only value.`,

  formAndStructure: `Form: Ballad form - six stanzas of four lines each (with a longer final stanza of seven lines). The ballad form is traditionally used for storytelling, especially stories of love, betrayal and injustice. Rossetti's choice connects the poem to a tradition of women's ballads about seduction and abandonment.

Rhyme scheme: ABAB - simple and regular, like a folk song. The simplicity of the form contrasts with the complexity of the speaker's emotions. The regular rhymes give the poem a measured, controlled quality, as if the speaker has rehearsed this story many times.

Metre: Roughly iambic, alternating tetrameter and trimeter. This is ballad metre - the same form used by Hardy in "The Man He Killed". The folk-song rhythm makes the poem feel oral, as if the speaker is telling her story aloud to an audience (or to Kate herself).

Structure - three movements:
• Stanzas 1-3: The speaker's story - seduction, exploitation, discard.
• Stanzas 4-6: Comparison with Kate - the double standard.
• Stanza 7: The reversal - the speaker's son as her triumph.

Dramatic monologue: The speaker addresses Kate directly ("O Lady Kate, my cousin Kate"), creating an intimate, confrontational tone. This is not a public speech but a private reckoning between two women.

The final stanza: The last stanza is longer than the others (seven lines instead of four), which gives it extra weight. It contains the poem's reversal and emotional climax. The expansion of the form mirrors the expansion of the speaker's power.

Tone: Bitter, accusatory, proud, tender. The tone shifts throughout - from nostalgic sadness (stanza 1) to anger (stanzas 2-4) to challenge (stanzas 5-6) to fierce maternal pride (stanza 7).`,

  keyQuotes: [
    {
      quote: 'I was a cottage maiden / Hardened by sun and air',
      analysis:
        'The speaker defines herself by class and physical labour. "Cottage maiden" is humble; "hardened by sun and air" means her skin is tanned from outdoor work - not beautiful by Victorian standards of pale femininity. Yet there is dignity in the description. She was real, natural, honest - qualities the lord\'s world lacks.',
      themes: ['Class', 'Innocence', 'Nature'],
      analysisAr:
        'تُعرّف المتكلّمةُ نفسَها بطبقتها وعملها البدنيّ. "Cottage maiden" متواضعة؛ و"hardened by sun and air" تعني أنّ بشرتها سُمرت من العمل في الخلاء - وهو ما لم يكن جمالاً وفق معايير الأنوثة الفيكتوريّة الشاحبة. ومع ذلك ففي الوصف وقارٌ. كانت حقيقيّةً طبيعيّةً صادقة - صفاتٌ يفتقر إليها عالم اللورد.',
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
      quote: 'He lured me to his palace home',
      analysis:
        '"Lured" is the language of trapping - the lord is a predator, the speaker his prey. The word places all the agency and blame on the lord. She did not choose to go; she was lured. "Palace home" contrasts sharply with her "cottage" - the class gulf between them is spatial as well as social.',
      themes: ['Predation', 'Class', 'Power'],
      analysisAr:
        'لفظة "lured" من معجم النصب والإيقاع - اللوردُ صيّاد، والمتكلّمةُ فريسته. الكلمةُ تضع الفاعليّةَ واللومَ كلَّهما على اللورد. لم تختر الذهاب؛ بل اسْتُدرجَت. وتضادّ "palace home" حادٌّ مع "cottage"-ها - الهوّةُ الطبقيّة بينهما مكانيّةٌ كما هي اجتماعيّة.',
      themesAr: ['الاستدراج', 'الطبقة', 'السلطة'],
    },
    {
      quote: 'He wore me like a silken knot, / He changed me like a glove',
      analysis:
        'Two devastating similes. A silken knot is decorative but disposable; a glove is worn and removed at will. Both reduce the speaker from a person to an object - something the lord used for his pleasure and discarded when he wanted something new. The casualness of "changed" is chilling.',
      themes: ['Objectification', 'Disposal', 'Power'],
      analysisAr:
        'تشبيهان موجعان. عُقدةُ الحرير زينةٌ قابلةٌ للنبذ؛ والقفّازُ يُلبَس ويُخلَع كما يشاء صاحبه. كلاهما يَختزل المتكلّمةَ من إنسانٍ إلى شيء - استعمله اللورد لمتعته ثمّ تخلّى عنه حين شاء آخر. والتلقائيّة في "changed" مرعبة.',
      themesAr: ['التشييء', 'النبذ', 'السلطة'],
    },
    {
      quote: 'So now I moan, an unclean thing, / Who might have been a dove',
      analysis:
        '"Unclean thing" versus "dove" - the speaker measures the distance between what she is (ruined, impure) and what she could have been (innocent, pure). "Unclean" has biblical connotations of contamination. That she calls herself a "thing" shows how completely she has internalised society\'s dehumanisation of fallen women.',
      themes: ['Fallen woman', 'Purity', 'Self-judgement'],
      analysisAr:
        '"Unclean thing" في مقابل "dove" - تَقيس المتكلّمةُ المسافةَ بين ما هي عليه (مدمَّرة، غير طاهرة) وما كان يمكن أن تكونه (بريئة، نقيّة). للفظة "unclean" دلالاتٌ كتابيّة بالتلوّث. وأن تصف نفسَها بـ"thing" يُظهر مقدار ما استبطنته من تجريد المجتمع للنساء "الساقطات" من إنسانيّتهنّ.',
      themesAr: ['المرأة الساقطة', 'الطهارة', 'الحكم على الذات'],
    },
    {
      quote: 'Chose you, and cast me by',
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
        'The poem\'s most complex line. The son is simultaneously her "shame" (proof of her sexual fall) and her "pride" (the child she loves). The paradox refuses to let the reader see the son as simply one or the other. "Fair-haired" echoes the "flaxen hair" the lord once praised - the son carries his father\'s features. The speaker reclaims what was done to her through love for her child.',
      themes: ['Motherhood', 'Paradox', 'Reclamation'],
      analysisAr:
        'أعقد سطور القصيدة. الابنُ في آنٍ معاً "shame" (دليلُ السقوط) و"pride" (الطفل الذي تحبّه). تأبى المفارقةُ أن نختزله في أحد الوصفين. وعبارة "fair-haired" تردّد صدى "flaxen hair" التي مدحها اللورد ذات يوم - الابنُ يحمل ملامح أبيه. تستردّ المتكلّمةُ ما فُعل بها عبر محبّتها لطفلها.',
      themesAr: ['الأمومة', 'المفارقة', 'الاسترداد'],
    },
    {
      quote: 'Your father would give lands for one',
      analysis:
        'The final reversal. The lord, who discarded the speaker, now desperately needs what she has: a male heir. In Victorian society, landed estates required heirs. The speaker - powerless, ruined, "unclean" - holds the one thing wealth and status cannot buy. The power dynamic has completely inverted.',
      themes: ['Power reversal', 'Heir', 'Irony'],
      analysisAr:
        'الانعطافة الختاميّة. اللوردُ الذي نَبذ المتكلّمةَ يحتاج الآن في يأسٍ إلى ما عندها: وريثٌ ذَكَر. في المجتمع الفيكتوريّ كانت الإقطاعاتُ تستلزم وريثاً. والمتكلّمةُ - الضعيفةُ المدمَّرةُ "unclean" - تملك الشيء الوحيد الذي لا يشتريه مالٌ ولا جاه. وموازين القوى انقلبت بالكامل.',
      themesAr: ['انقلاب موازين القوى', 'الوريث', 'المفارقة'],
    },
  ],

  languageDevices: [
    {
      device: 'Simile / Objectification',
      example: 'He wore me like a silken knot, / He changed me like a glove',
      effect:
        'The similes reduce the speaker from a human being to an accessory. A silken knot is tied and untied; a glove is worn and removed. Both images convey the lord\'s casual, careless treatment of a woman as a disposable object. The luxury of "silken" makes the disposal worse - even as an object, she was only briefly valued.',
      lineRef: 12,
      effectAr:
        'يَختزل التشبيهان المتكلّمةَ من إنسانٍ إلى ملحقٍ زينة. عقدةُ الحرير تُعقد وتُحلّ؛ والقفّاز يُلبَس ويُخلَع. الصورتان تُوصلان كيف عاملها اللورد ببرودٍ كأنّها شيءٌ قابلٌ للنبذ. وفخامةُ "silken" تجعل النبذَ أشدّ وقعاً - حتى بوصفها شيئاً، لم تَدُم قيمتُها إلّا لحظات.',
    },
    {
      device: 'Dramatic monologue / Direct address',
      example: 'O Lady Kate, my cousin Kate',
      effect:
        "The poem is addressed directly to Kate, creating an intimate confrontation. The speaker is not making a public argument but a private accusation. The direct address forces the reader into Kate's position - we must listen, as Kate must, to the speaker's pain and challenge.",
      lineRef: 18,
      effectAr:
        'القصيدة موجَّهةٌ مباشرةً إلى Kate، فتولّد مواجهةً حميمة. المتكلّمةُ لا تطرح حُجّةً علنيّة بل اتّهاماً خاصّاً. والنداءُ المباشر يُلزم القارئَ بأن يضع نفسه في موضع Kate - علينا أن نُصغي، كما يجب على Kate أن تُصغي، إلى ألم المتكلّمة وتحدّيها.',
    },
    {
      device: 'Semantic field of predation',
      example: 'lured, found me out, wore, changed, cast me by',
      effect:
        'The verbs describing the lord\'s behaviour come from the semantic field of hunting and trapping. He "lured" (baited), "found out" (tracked), "wore" (used), and "cast by" (discarded). The consistent animal-hunting language makes the lord a predator throughout, which undercuts any reading of the relationship as romantic.',
      lineRef: 10,
      effectAr:
        'الأفعال التي تصف سلوك اللورد تنتمي إلى حقل الصيد والاستدراج. "lured" (أغرى بطعم)، "found out" (تتبّع)، "wore" (استعمل)، و"cast by" (نَبَذ). واتّساق معجم صيد الحيوان يجعل اللورد صيّاداً طوال القصيدة، فيُفرّغ أيَّ قراءةٍ غزليّة للعلاقة.',
    },
    {
      device: 'Paradox / Oxymoron',
      example: 'my shame, my pride',
      effect:
        'The son is simultaneously shame and pride - the evidence of the speaker\'s ruin and the source of her only joy. The paradox refuses simple moral categories. Rossetti challenges Victorian morality by showing that what society calls "shame" can also be the deepest source of love.',
      lineRef: 31,
      effectAr:
        'الابنُ في آنٍ معاً عارٌ وفخر - دليلُ خراب المتكلّمة ومصدرُ فرحها الوحيد. المفارقةُ تأبى التصنيفات الأخلاقيّة البسيطة. تتحدّى Rossetti أخلاق العصر الفيكتوريّ ببرهنتها على أنّ ما يسمّيه المجتمع "عاراً" يمكن أن يكون كذلك أعمقَ مصادر الحبّ.',
    },
    {
      device: 'Rhetorical questions',
      example: 'Why did a great lord find me out... / If you stood where I stand',
      effect:
        'The questions demand answers that cannot be given. "Why did a great lord find me out?" - there is no good reason. "If you stood where I stand" - Kate cannot answer. The questions expose the injustice of the speaker\'s situation and challenge Kate\'s moral superiority.',
      lineRef: 5,
      effectAr:
        'الأسئلةُ تطلب إجاباتٍ لا يمكن تقديمها. "Why did a great lord find me out?" - لا سببَ وجيهاً. "If you stood where I stand" - لا تستطيع Kate أن تُجيب. تكشف الأسئلةُ ظلمَ وضع المتكلّمة وتُفنّد ادّعاءَ Kate بالأفضليّة الأخلاقيّة.',
    },
    {
      device: 'Ballad form',
      example: 'ABAB rhyme scheme, alternating tetrameter/trimeter',
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
    <p>تستكشف "Cousin Kate" كيف يتقاطع <strong>الطبقة</strong> و<strong>النوع الاجتماعيّ</strong> في توليد الهشاشة. المتكلّمةُ "cottage maiden" - من الطبقة العاملة لا حماةَ لها. واللوردُ الـ"great" عنده ثروةٌ ومكانةٌ وسلطة. يستطيع أن يُغوي وينبذ بلا تبعات لأنّ النظامَ الاجتماعيّ يحميه ويعاقبها. تكشف Rossetti هذا الظلم دون وعظ - تُسلّم الحُجّةَ لصوت المتكلّمة.</p>

    <h3>اختيارات النساء</h3>
    <p>تسأل القصيدة هل كان لـKate خيارٌ حقيقيّ. تزوّجت Kate اللوردَ، لكن هل كانت "مربوطة" بحبٍّ حقيقيّ أم بـ"survey of gold"؟ تسأل المتكلّمةُ هل كانت Kate ستتصرّف مختلفةً في موضعها. وتُلمح Rossetti إلى أنّ للنساء في هذا المجتمع فاعليّةً محدودةً جدّاً - تتحدّد أقدارهنّ باختيارات الرجال لا باختياراتهنّ.</p>

    <h3>النشر</h3>
    <p>نُشرت "Cousin Kate" في مجموعة Rossetti الأولى <em>Goblin Market and Other Poems</em> (سنة 1862). أرست هذه المجموعةُ مكانتها شاعرةً كبرى، وتضمّ عدّة قصائد تستكشف الجنسانيّةَ الأنثويّة والاستغلال والمقاومة.</p>
  `,

  summaryAr: `المقطع الأوّل (السطور 1-4): تُقدّم المتكلّمةُ نفسها "cottage maiden" - من طبقةٍ عاملة، سُمرت بشرتها من الشمس، راضيةً بحياتها. لم تكن واعيةً جمالَها ("Not mindful I was fair"). هذه البراءة جعلتها هشّة.

المقطع الثاني (السطور 5-8): تسأل لماذا تبيّنها "great lord" ومدح جمالها. سؤالُ "Why did a great lord find me out" المتكرَّر اتّهاميّ - هو من جاء يبحث عنها. اهتمامُه لم يجلب لها سعادةً بل همّاً ("care").

المقطع الثالث (السطور 9-12): "lured" اللوردُ المتكلّمةَ إلى قصره، أغواها، وعاملها كأنّها مُلكية. كانت "worn like a silken knot" و"changed like a glove" - أشياء زينةٍ تُستعمَل وتُنبَذ. الاستعاراتُ تُختزلها من إنسانٍ إلى شيء.

المقطع الرابع (السطور 13-15): الآن، بعد نبذها، تصير المتكلّمةُ "an unclean thing" - مُستعمَلةً جنسيّاً، مدمَّرةً اجتماعيّاً. وكان يمكن أن تظلّ بريئة ("a dove") لو لم يُفسدها اللورد. لقد استبطنت حُكم المجتمع عليها.

المقطع الخامس (السطور 16-19): تُخاطب المتكلّمةُ Cousin Kate مباشرةً. ازدادت Kate جمالاً، فلفتت أنظار اللورد، فاختارها - أمّا المتكلّمة فـ"cast by". نالت Kate الزواج، ونالت المتكلّمةُ العار.

المقطع السادس (السطور 20-23): تتحدّى المتكلّمةُ Kate - هل كانت Kate ستتصرّف مختلفةً في موضعها؟ والمدلولُ أنّ فضيلةَ Kate حظٌّ لا تفوّق أخلاقيّ.

المقطع السابع (السطور 24-30): انعطافةُ القصيدة. للمتكلّمة شيءٌ ليس عند Kate: ابن. هو "my shame, my pride" - دليلُ سقوطها ومحبوبُها معاً. وكان اللورد ليعطي "lands" مقابل وريث. والمنبوذةُ المسكينةُ تملك الآن ما لا يشتريه مال.

المعنى الإجماليّ: "Cousin Kate" مونولوغٌ دراميّ يستكشف الاستغلال الجنسيّ والطبقة وازدواج الأخلاق الفيكتوريّ. تُعطي Rossetti صوتاً لـ"fallen woman" وتكشف ظلم نظامٍ يُعاقب النساء على أفعال الرجال. والانعطافةُ الختاميّة - ابنُ المتكلّمة بوصفه انتصارَها - تتحدّى فكرةَ أنّ الطهارةَ الجنسيّة هي قيمةُ المرأة الوحيدة.`,

  formAndStructureAr: `الشكل: شكلُ الـ ballad - ستّةُ مقاطع من أربعة أسطر (مع مقطعٍ ختاميّ أطول من سبعة أسطر). يُستخدَم شكلُ الـ ballad تقليديّاً للسرد، خاصّةً قصصِ الحبّ والخيانة والظلم. اختيارُ Rossetti يربط القصيدةَ بتقليدِ أغاني النساء عن الإغواء والهجر.

نظام القافية: ABAB - بسيطٌ منتظم، كأنشودةٍ شعبيّة. وبساطةُ الشكل تتقابل مع تعقيد عواطف المتكلّمة. القوافي المنتظمة تكسب القصيدةَ صفةَ ضبطٍ ووَزن، كأنّ المتكلّمةَ قد رتّبت قصّتها مرّاتٍ كثيرة.

الوزن: iambic إجمالاً، يتناوب tetrameter وtrimeter. هذا وزنُ الـ ballad - وهو الشكلُ نفسُه الذي يستعمله Hardy في "The Man He Killed". إيقاعُ الأغنية الشعبيّة يكسب القصيدةَ طابعاً شفويّاً، كأنّ المتكلّمة تروي قصّتها بصوتٍ مسموع أمام جمهور (أو أمام Kate نفسها).

البنية في ثلاث حركات:
• المقاطع 1-3: قصّة المتكلّمة - الإغواء، الاستغلال، النبذ.
• المقاطع 4-6: المقارنة بـKate - ازدواج المعايير.
• المقطع 7: الانعطافة - ابنُ المتكلّمة انتصاراً لها.

المونولوغ الدراميّ: تُخاطب المتكلّمةُ Kate مباشرةً ("O Lady Kate, my cousin Kate")، فتولّد نبرةً حميمةً مواجِهة. ليست خطبةً علنيّة بل محاسبةً خاصّة بين امرأتين.

المقطع الختاميّ: المقطع الأخير أطول من سواه (سبعةُ أسطر بدل أربعة)، ممّا يمنحه ثقلاً إضافيّاً. وفيه انعطافةُ القصيدة وذروتها العاطفيّة. واتّساعُ الشكل يحاكي اتّساعَ سلطة المتكلّمة.

النبرة: مرارة، اتّهام، فخر، حنان. تتقلّب على امتداد القصيدة - من حزنٍ حنينيّ (المقطع الأوّل) إلى غضب (المقاطع 2-4) إلى تحدّ (المقاطع 5-6) إلى فخرٍ أموميّ شَرِس (المقطع 7).`,
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
          className="mb-3 -ml-2 text-muted-foreground"
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
              Christina Rossetti &middot; Edexcel IGCSE Anthology
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
              assessment.
            </p>
            <p>
              "Cousin Kate" is a set text in the{' '}
              <strong className="text-foreground">Eduqas GCSE 2025 poetry cluster</strong>. For the
              canonical cluster context (set alongside the other Eduqas anthology poems), see{' '}
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
