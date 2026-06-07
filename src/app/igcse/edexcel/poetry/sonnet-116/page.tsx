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

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'Sonnet 116',
  poet: 'William Shakespeare',
  lines: [
    {
      text: 'Let me not to the marriage of true minds',
      annotations: [
        {
          type: 'Opening',
          note: 'Shakespeare opens with a legalistic, formal phrase - almost like an objection in a wedding ceremony. "Let me not…" refuses to be the one who admits impediments to true love.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: '"Marriage of true minds" - love is framed as a union of minds, not bodies. This is Platonic and spiritual, not physical. "True" means faithful, constant, genuine.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Admit impediments. Love is not love',
      annotations: [
        {
          type: 'Allusion',
          note: '"Admit impediments" echoes the Book of Common Prayer marriage service - "if any of you know cause or just impediment". Shakespeare turns the priest\'s question into a personal vow.',
          color: '#a855f7',
        },
        {
          type: 'Definition by negation',
          note: 'The speaker defines love by saying what it is NOT. "Love is not love" is a paradox - it sets up the definition that follows. Real love cannot change.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Which alters when it alteration finds,',
      annotations: [
        {
          type: 'Polyptoton',
          note: 'The repetition of "alters / alteration" (same root word in different forms) is a rhetorical figure called polyptoton. It hammers the point: love that changes with change is not love at all.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: "Real love does not shift because circumstances have shifted. This is the poem's central claim - love's constancy.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Or bends with the remover to remove:',
      annotations: [
        {
          type: 'Polyptoton',
          note: 'Again the same trick: "remover / remove". Shakespeare\'s grammar mirrors his meaning - the sentence refuses to let its own words change. True love cannot be bent or redirected.',
          color: '#10b981',
        },
        {
          type: 'Metaphor',
          note: '"Bends" suggests physical pressure - love under strain. True love is rigid where false love flexes.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'O no! it is an ever-fixed mark',
      annotations: [
        {
          type: 'Key quote',
          note: '"O no!" is a sudden emotional outburst - the only exclamation in the poem. Shakespeare abandons his lawyer\'s tone to insist on love\'s permanence.',
          color: '#f59e0b',
        },
        {
          type: 'Metaphor',
          note: '"Ever-fixed mark" is a navigational image - a seamark or lighthouse that never moves, regardless of what storms or tides do around it. Love is the fixed point that lets you navigate.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'That looks on tempests and is never shaken;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Tempests" are storms at sea - classic Elizabethan imagery for life\'s trials. The fixed mark does not flinch in the face of storms. Love simply "looks on" them, calm and unmoved.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: '"Never shaken" - love is unshakable by definition. The word "never" is absolute; love is not partly steady, it is entirely steady or it is not love.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "It is the star to every wand'ring bark,",
      annotations: [
        {
          type: 'Metaphor',
          note: '"Star" - the North Star or Polaris, used by sailors to navigate. "Wand\'ring bark" is a small, lost ship. Love becomes the guiding star that orients lost travellers. This is one of the most famous metaphors in Shakespeare.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Love is a navigational aid - something you steer by when everything else is moving. It is external, fixed, reliable.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "Whose worth's unknown, although his height be taken.",
      annotations: [
        {
          type: 'Paradox',
          note: 'Sailors could measure a star\'s angular height ("altitude") for navigation - but they could not know what the star actually was. Love\'s position can be observed; its true value is mysterious.',
          color: '#a855f7',
        },
        {
          type: 'Tone',
          note: 'The line admits that love is partly unknowable, which is a surprisingly humble moment in a confident poem. Even the speaker cannot explain love fully.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "Love's not Time's fool, though rosy lips and cheeks",
      annotations: [
        {
          type: 'Personification',
          note: '"Time" is personified as a jester or master - and love refuses to be his "fool" (his servant / plaything). The capitalised "Time" becomes a mythological figure, almost Father Time with his scythe.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Love is not subject to time. Beauty is - "rosy lips and cheeks" will fade - but true love remains.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "Within his bending sickle's compass come;",
      annotations: [
        {
          type: 'Imagery of death',
          note: 'Time\'s "bending sickle" is a classic image of the Grim Reaper - harvesting lives. Beauty falls within Time\'s reach; love does not. The sickle\'s "compass" is its arc, its reach.',
          color: '#ef4444',
        },
        {
          type: 'Metaphor',
          note: 'Beauty is like a crop to be cut down. Love is outside the field Time can harvest.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Love alters not with his brief hours and weeks,',
      annotations: [
        {
          type: 'Polyptoton',
          note: 'Back to the "alter / alteration" theme from line 3. Shakespeare is building a careful argument: real love = unchanging. The repetition creates a refrain.',
          color: '#10b981',
        },
        {
          type: 'Diction',
          note: '"Brief hours and weeks" - human time is short and small. Love\'s time is enormous.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'But bears it out even to the edge of doom.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Bears it out" means endures, carries it through. "Edge of doom" is the end of the world - the Last Judgment. Love lasts not just a lifetime but until the apocalypse itself.',
          color: '#f59e0b',
        },
        {
          type: 'Biblical allusion',
          note: '"Edge of doom" echoes Christian eschatology - the final judgement. Shakespeare is claiming love is eternal in a theological sense, not just a romantic one.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'If this be error and upon me proved,',
      annotations: [
        {
          type: 'Volta',
          note: "The final couplet is a classic Shakespearean volta - a sudden turn into direct argument. The speaker puts his credibility on the line: if I'm wrong, then everything I've ever written is wrong.",
          color: '#a855f7',
        },
        {
          type: 'Legalistic tone',
          note: '"Proved" is legal language - as if the speaker is standing trial. He is challenging the reader to prove him wrong.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'I never writ, nor no man ever loved.',
      annotations: [
        {
          type: 'Key quote',
          note: "The famous ending. Shakespeare bets his own writing career - and the entire history of human love - on his definition being correct. If I'm wrong, I never wrote, and no one has ever truly loved.",
          color: '#f59e0b',
        },
        {
          type: 'Hyperbole',
          note: 'This is intentional overstatement. Of course Shakespeare wrote - his very writing of the line proves it. The grand bet is the point: the speaker is so certain that he wagers everything.',
          color: '#10b981',
        },
      ],
    },
  ],

  context: `
    <h3>William Shakespeare (1564-1616)</h3>
    <p>Shakespeare is the most celebrated writer in the English language. Famous for his plays (tragedies like <em>Hamlet</em>, <em>Macbeth</em> and <em>King Lear</em>; comedies like <em>Much Ado About Nothing</em>; histories like <em>Henry V</em>), he also wrote a sequence of 154 sonnets, published in 1609.</p>

    <h3>The sonnet sequence</h3>
    <p>Shakespeare\'s sonnets were published in 1609 but mostly written in the 1590s. The full sequence tells a loose story about a young man the speaker loves and admires (the "Fair Youth"), a rival poet, and a dark-haired mistress (the "Dark Lady"). Sonnets 1-126 are mostly addressed to the Fair Youth; 127-152 to the Dark Lady. Sonnet 116 comes in the Fair Youth section.</p>

    <h3>Love and constancy</h3>
    <p>Sonnet 116 is often read as a defence of constant love in the face of inconstancy - possibly at a point in the sequence where the speaker and the young man have become estranged. The poem is, in effect, an argument: <strong>real love does not change, even if people do</strong>. It may be trying to persuade as much as describe.</p>

    <h3>Elizabethan ideas of love</h3>
    <p>The Elizabethans inherited two main traditions of love poetry: <strong>courtly love</strong> (the distant, idealised lady of medieval romance) and <strong>Petrarchan love</strong> (the tortured lover writing sonnets to an unattainable beauty). Shakespeare often plays with - and against - these conventions. Sonnet 116 takes the Petrarchan ideal of eternal devotion and strips it of flattery, turning it into a stark philosophical claim.</p>

    <h3>Navigation and the North Star</h3>
    <p>The "ever-fixed mark" and "the star to every wand\'ring bark" are references to navigation. In the Elizabethan age of exploration (Drake had circumnavigated the globe in 1577-80, the East India Company was founded in 1600), sailors guided their ships by the <strong>Pole Star</strong> - a fixed point that never moved across the sky. Shakespeare\'s metaphor takes cutting-edge technology and turns it into a spiritual image.</p>
  `,

  summary: `Lines 1-4: The speaker argues that he will not permit any "impediments" (obstacles) to the "marriage of true minds". Real love is not love if it changes when it encounters change, or if it bends away when something tries to pull it away. Real love is defined by its constancy.

Lines 5-8: Shakespeare then offers metaphors for what love IS. It is an "ever-fixed mark" (a sea-mark or lighthouse) that stands firm even when storms rage around it. It is "the star to every wand\'ring bark" - the Pole Star that guides lost ships. Sailors can measure its height but cannot understand its true worth.

Lines 9-12: Love is also not subject to Time. "Rosy lips and cheeks" will fade under Time\'s scythe, but love is outside Time\'s reach. Love does not change with the passing of hours and weeks - it endures until "the edge of doom" (the Last Judgement).

Lines 13-14: In the final couplet, the speaker stakes his credibility on his definition. If his argument can be proved wrong, then he never wrote anything and no man ever truly loved. It is a grand rhetorical gamble - the speaker insists so strongly on the truth of his definition that he is willing to erase himself if he is wrong.

Overall meaning: The poem is a formal, almost philosophical argument about the nature of true love. For Shakespeare, love is defined by its permanence. Anything that can be changed by circumstance or time is not real love at all. The sonnet has become a staple of wedding ceremonies and is one of the most famous definitions of love in English literature.`,

  formAndStructure: `Form: A Shakespearean sonnet - 14 lines divided into three quatrains (four-line stanzas) and a final couplet.

Rhyme scheme: ABAB CDCD EFEF GG - the classic Shakespearean pattern. Each quatrain introduces and develops an idea, and the final couplet delivers a punchline or turn.

Metre: Iambic pentameter - ten syllables per line in five iambs (unstressed-stressed: "Let ME / not TO / the MAR / riage OF / true MINDS"). The regular metre gives the poem a calm, measured quality - fitting for an argument about constancy.

Three-part argument: Each quatrain advances the claim.
• Quatrain 1: Negative definition (love is not love which alters).
• Quatrain 2: Positive definition via metaphor (love is a fixed mark, a guiding star).
• Quatrain 3: Love vs. Time (love is not subject to time\'s scythe).
• Couplet: The speaker stakes his own credibility on the truth of the argument.

Rhetorical devices: Shakespeare uses polyptoton (alter / alteration / remover / remove) and paradox ("Love is not love") to make his logic feel airtight. The poem reads almost like a legal brief defending a client.

Volta: Two possible turns. The first is at line 5 ("O no!") - the speaker breaks from his legalistic definition into emotional insistence. The second is at line 13 - the traditional Shakespearean volta where the couplet challenges the reader directly.

Tone: The poem moves from cool definition (lines 1-4) to passionate insistence ("O no!") to navigational metaphor to defiant gamble. It is arguing as much as describing - trying to prove, not just illustrate.

Enjambment: Shakespeare uses enjambment sparingly, letting most lines end on natural pauses. This gives the poem the feel of deliberate, considered argument rather than rushed emotion.`,

  keyQuotes: [
    {
      quote: 'Let me not to the marriage of true minds / Admit impediments',
      analysis:
        'The opening is famously ceremonial, echoing the Book of Common Prayer\'s marriage service ("if any of you know cause or just impediment"). The speaker turns the priest\'s question into a private vow: I will not permit anything to obstruct true love. "Marriage of true minds" defines love as spiritual and intellectual, not merely physical. The formal tone signals that a serious argument is about to begin.',
      themes: ['Constancy', 'Marriage', 'True love'],
      analysisAr:
        'مفتتحٌ احتفاليّ ذائع الصيت، يرنُّ فيه صدى قدّاس الزواج في Book of Common Prayer ("if any of you know cause or just impediment"). يُحوّل المتكلّمُ سؤالَ الكاهن إلى عهدٍ خاصّ: لن أسمح لشيءٍ بأن يعترض الحبّ الصادق. وتعريفُ الحبّ بأنّه "marriage of true minds" يجعله اقتراناً روحيّاً عقليّاً لا جسديّاً فحسب. والنبرة الرسميّة تُنبئ بأنّ حُجّةً جادّةً على وشك الانطلاق.',
      themesAr: ['الثبات', 'الزواج', 'الحبّ الصادق'],
    },
    {
      quote: 'Love is not love / Which alters when it alteration finds',
      analysis:
        'The paradox - "love is not love" - is the poem\'s definitional claim. Real love cannot change in response to change. The polyptoton ("alters / alteration") ties the two parts of the line together grammatically: if something can alter, it is not love. Shakespeare is narrowing the definition of love to exclude anything that shifts with circumstance.',
      themes: ['Constancy', 'Definition of love', 'Change'],
      analysisAr:
        'المفارقة في عبارة "love is not love" هي المعادلة التعريفيّة التي تقوم عليها القصيدة. الحبّ الحقيقيّ لا يتبدّل تجاوباً مع تبدّل المحيط. والـ polyptoton ("alters / alteration") يربط طرفَي السطر نحويّاً: إن أمكن لشيءٍ أن يتبدّل، فليس بحبّ. يُضيّق Shakespeare تعريفَ الحبّ كي يُسقط منه كلّ ما يتزحزح مع المقام.',
      themesAr: ['الثبات', 'تعريف الحبّ', 'التبدّل'],
    },
    {
      quote: 'O no! it is an ever-fixed mark / That looks on tempests and is never shaken',
      analysis:
        'The sudden exclamation "O no!" breaks the poem\'s cool tone and reveals the speaker\'s emotional investment. The "ever-fixed mark" is a nautical metaphor - a seamark or lighthouse that stands firm while storms rage. "Looks on tempests" personifies the fixed mark as calm, unmoved, almost aloof. The repetition of "ever" and "never" makes the constancy feel absolute.',
      themes: ['Endurance', 'Storms of life', 'Steadfastness'],
      analysisAr:
        'صيحةُ "O no!" المفاجئة تكسر برودَ القصيدة وتكشف عن انخراطِ المتكلّم العاطفيّ. أمّا "ever-fixed mark" فاستعارةٌ بحريّة - علامةٌ ملاحيّة أو منارة تظلّ راسخة في وجه العواصف. وعبارة "looks on tempests" تُشخّص هذه العلامة الراسخة بأنّها هادئةٌ غير مهتزّة، شبهُ متعالية. ويُكسب تكرارُ "ever" و"never" الثباتَ معنى المطلق.',
      themesAr: ['الصمود', 'عواصف الحياة', 'الرسوخ'],
    },
    {
      quote: "It is the star to every wand'ring bark",
      analysis:
        'One of Shakespeare\'s most famous metaphors. Love becomes the North Star that guides every lost ship ("wand\'ring bark"). This is navigation imagery, turning love into a fixed external reference point that you steer by when everything else is moving. The implication is that love is not just felt internally - it is a guiding force outside the self.',
      themes: ['Guidance', 'Love as compass', 'Navigation'],
      analysisAr:
        'من أشهر استعارات Shakespeare. يصير الحبّ نجمَ الشمال الذي يهدي كلّ سفينةٍ تائهة ("wand\'ring bark"). هذه صورةٌ ملاحيّة، تُحوّل الحبّ إلى مرجعٍ خارجيّ ثابت تستدلّ به حين يتحرّك كلّ ما عداه. ومدلولُها أنّ الحبّ ليس إحساساً داخليّاً فقط، بل قوّةٌ هاديةٌ خارج الذات.',
      themesAr: ['الهداية', 'الحبّ بوصلةً', 'الملاحة'],
    },
    {
      quote:
        "Love's not Time's fool, though rosy lips and cheeks / Within his bending sickle's compass come",
      analysis:
        'Time is personified as a figure with a sickle - the classic image of the Grim Reaper or Father Time. Beauty ("rosy lips and cheeks") lies within the sickle\'s reach and will be cut down. Love, however, is not "Time\'s fool" (not his jester or servant). This is one of Shakespeare\'s most direct statements of love\'s power to outlast physical change.',
      themes: ['Time', 'Ageing', 'Beauty vs. love'],
      analysisAr:
        'يُشخَّص الزمنُ هيئةً تحمل منجلاً - هي الصورة التقليديّة لـ Grim Reaper أو Father Time. الجمالُ ("rosy lips and cheeks") في مرمى المنجل، وسيُحصد لا محالة. أمّا الحبّ فليس "Time\'s fool" (ليس مهرَّجَه ولا خادمَه). وهذا من أصرح بيانات Shakespeare على قدرة الحبّ على تجاوز التبدّل الجسديّ.',
      themesAr: ['الزمن', 'الكِبَر', 'الجمال في مقابل الحبّ'],
    },
    {
      quote: 'But bears it out even to the edge of doom',
      analysis:
        '"Bears it out" means endures, carries forward. "Edge of doom" is the Last Judgement - the end of time itself. Shakespeare is pushing the scope of love\'s endurance as far as it will go: not just a lifetime, but to the apocalypse. This is both a romantic and a theological claim - love has the same timeframe as eternity.',
      themes: ['Eternity', 'Endurance', 'Apocalypse'],
      analysisAr:
        'عبارة "bears it out" تعني يصبر ويُكمل المسير. وأمّا "edge of doom" فهي يومُ الحساب الأخير، نهايةُ الزمن نفسه. يدفع Shakespeare مدى صمود الحبّ إلى أقصى حدوده: ليس عمراً واحداً فحسب، بل حتى الأبد. وهذا ادّعاءٌ غزليّ ولاهوتيّ في آنٍ معاً - للحبّ زمنٌ بسعة الخلود.',
      themesAr: ['الخلود', 'الصمود', 'يوم الحساب'],
    },
    {
      quote: 'If this be error and upon me proved, / I never writ, nor no man ever loved',
      analysis:
        'The final couplet is a rhetorical gamble. The speaker bets his own career as a writer, and indeed the entire history of human love, on his definition being correct. Of course he did write - the very poem we are reading proves it. This is intentional hyperbole: the speaker is so certain that he stakes everything. The couplet challenges the reader to disagree: if you can, then Shakespeare never wrote and nobody has ever loved.',
      themes: ['Certainty', 'Rhetoric', 'Commitment'],
      analysisAr:
        'البيت الختاميّ مراهنةٌ بلاغيّة. يُراهن المتكلّمُ بمسيرته الكتابيّة كلِّها، بل بتاريخ الحبّ البشريّ كلِّه، على صحّة تعريفه. وبدهيٌّ أنّه قد كَتَب - فالقصيدة بين أيدينا تُثبت ذلك. هذه مبالغةٌ مقصودة: يستيقن المتكلّم إلى حدٍّ يُغامر فيه بكلّ شيء. ويتحدّى البيت القارئَ أن يخالف: إن استطعتَ، فلم يكتب Shakespeare قطّ، وما أحبّ امرؤٌ قطّ.',
      themesAr: ['اليقين', 'البلاغة', 'الالتزام'],
    },
    {
      quote: "Whose worth's unknown, although his height be taken",
      analysis:
        "A surprisingly humble moment. Sailors could measure a star's angular height to navigate, but they couldn't understand what the star actually was. Love is similar - you can observe its position in your life, but you can't fully explain what it is. The line admits that even the speaker's confident definition has an element of mystery.",
      themes: ['Mystery', "Love's unknowability"],
      analysisAr:
        'لحظةُ تواضعٍ لافتة. كان البحّارة يقيسون ارتفاع النجم زاويّاً لأغراض الملاحة، لكنّهم لا يدرون ما هو النجم في حقيقته. والحبّ كذلك - تستطيع أن ترصد موضعه في حياتك، لكنّك لا تستوعب كنهه على التمام. يعترف السطر بأنّ في تعريف المتكلّم الواثق عنصراً غامضاً.',
      themesAr: ['الغموض', 'كَنهُ الحبّ الذي لا يُدرَك'],
    },
  ],

  languageDevices: [
    {
      device: 'Polyptoton',
      example: 'alters when it alteration finds / bends with the remover to remove',
      effect:
        'Repeating the same word in different grammatical forms (alter/alteration, remover/remove) draws attention to the idea of change. The grammar enacts the argument: Shakespeare is showing how each word is anchored to its root, refusing to drift - just like true love refuses to drift.',
      lineRef: 2,
      effectAr:
        'تكرارُ اللفظة في صيغ نحويّة مختلفة (alter / alteration, remover / remove) يلفت الانتباه إلى فكرة التبدّل. النحوُ يُجسّد الحُجّة: يُري Shakespeare كيف ترتبط كلُّ كلمة بجذرها فترفض الانجراف - تماماً كما يرفض الحبّ الصادق الانجراف.',
    },
    {
      device: 'Metaphor (navigation)',
      example: "ever-fixed mark… star to every wand'ring bark",
      effect:
        'Shakespeare draws on the cutting-edge technology of his age - sea navigation by fixed stars - to give love a concrete image. Love becomes an external, observable reference point, not just a private feeling. This metaphor grounds an abstract argument in physical reality.',
      lineRef: 4,
      effectAr:
        'يستلهم Shakespeare تقنيةَ عصره الأحدث - الملاحة البحريّة بالنجوم الثابتة - ليمنح الحبّ صورةً ملموسة. يصير الحبّ مرجعاً خارجيّاً يُرصد ويُستدلّ به، لا مجرّد إحساسٍ خاصّ. وتُرسي هذه الاستعارةُ حُجّةً مجرّدة في الواقع المادّيّ.',
    },
    {
      device: 'Personification of Time',
      example: "Love's not Time's fool, though… / Within his bending sickle's compass come",
      effect:
        'Time is turned into a reaper-figure with a sickle - a classic mythological personification. Giving Time a body and a weapon makes him an antagonist. Love is defined against this villain, becoming the one thing Time cannot cut down.',
      lineRef: 8,
      effectAr:
        'يُحوَّل الزمنُ إلى هيئة حصّادٍ يحمل منجلاً - وهي تشخيصٌ ميثولوجيّ كلاسيكيّ. منحُ الزمن جسداً وسلاحاً يجعل منه خصماً. ويُعرَّف الحبُّ في مواجهة هذا الخصم، فيصير الشيءَ الوحيد الذي يعجز الزمنُ عن حصده.',
    },
    {
      device: 'Paradox',
      example: 'Love is not love / Which alters when it alteration finds',
      effect:
        'The self-contradicting statement forces the reader to stop and think. How can love not be love? The paradox is really a definition: anything we call "love" but which changes is not the real thing. The paradox does definitional work while sounding philosophical.',
      lineRef: 1,
      effectAr:
        'تُجبر العبارةُ المتناقضةُ القارئَ على التوقّف والتفكّر. كيف يكون الحبّ ليس حبّاً؟ المفارقةُ في الحقيقة تعريف: كلّ ما نُسمّيه "حبّاً" ثمّ يتبدّل فليس بالحقيقيّ. تُؤدّي المفارقةُ عملاً تعريفيّاً وهي تبدو فلسفيّةً في ظاهرها.',
    },
    {
      device: 'Iambic pentameter',
      example: 'Let ME / not TO / the MAR / riage OF / true MINDS',
      effect:
        'The regular ten-beat metre gives the poem a calm, formal, almost legal quality. The steadiness of the rhythm matches the steadiness of the love being described. Where Shakespeare breaks the metre ("O no!"), the disruption is emotionally charged.',
      lineRef: 0,
      effectAr:
        'يُكسب الـ iambic pentameter المنتظم القصيدةَ هدوءاً ورزانةً وطابعاً شبهَ قانونيّ. ثبات الإيقاع يحاكي ثبات الحبّ الموصوف. وحين يكسر Shakespeare الوزنَ ("O no!") يكون كسرُه مشحوناً بالعاطفة.',
    },
    {
      device: 'Hyperbole',
      example: 'I never writ, nor no man ever loved',
      effect:
        "The final couplet is deliberate overstatement. The speaker bets everything on his definition being right - his own writing, everyone's love, the whole of human experience. The excessiveness is the point: it communicates the speaker's absolute certainty.",
      lineRef: 13,
      effectAr:
        'البيت الختاميّ مبالغةٌ مقصودة. يُقامر المتكلّمُ بكلّ شيء على صحّة تعريفه - بكتابته نفسها، وبحبّ الجميع، وبالتجربة الإنسانيّة بأسرها. والمبالغة هي المقصد: تُبلِّغ يقينَ المتكلّم المطلق.',
    },
  ],

  contextAr: `
    <h3>William Shakespeare (1564-1616)</h3>
    <p>Shakespeare هو أبرز كتّاب اللغة الإنجليزيّة على الإطلاق. اشتُهر بمسرحيّاته (التراجيديّات الكبرى مثل <em>Hamlet</em> و<em>Macbeth</em> و<em>King Lear</em>، والكوميديّات مثل <em>Much Ado About Nothing</em>، والمسرحيّات التاريخيّة مثل <em>Henry V</em>)، كما كتب سلسلةً من 154 سونيتة، نُشرت سنة 1609.</p>

    <h3>سلسلة السونيتات</h3>
    <p>نُشرت سونيتات Shakespeare سنة 1609 وإن كانت أُنشئت في معظمها في تسعينيّات القرن السادس عشر. تروي السلسلةُ ككلٍّ قصّةً فضفاضة عن شابٍّ يكنّ له المتكلّم الحبّ والإعجاب (وهو "Fair Youth")، وعن شاعرٍ منافس، وعن سيّدةٍ سمراء ("Dark Lady"). السونيتات من 1 إلى 126 موجَّهةٌ في غالبها إلى Fair Youth، ومن 127 إلى 152 إلى Dark Lady. وتأتي Sonnet 116 ضمن قسم Fair Youth.</p>

    <h3>الحبّ والثبات</h3>
    <p>تُقرأ Sonnet 116 في الغالب بوصفها دفاعاً عن الحبّ الثابت في وجه التقلّب - ربّما عند نقطةٍ في السلسلة افترق فيها المتكلّم والشابّ. والقصيدة في حقيقتها حُجّة: <strong>الحبّ الحقيقيّ لا يتبدّل، وإن تبدّل أصحابه</strong>. ولعلّها تسعى إلى الإقناع بقدرِ ما تسعى إلى الوصف.</p>

    <h3>تصوّرات العصر الإليزابيثيّ للحبّ</h3>
    <p>ورث الإليزابيثيّون تقليدين رئيسين في شعر الحبّ: <strong>الحبّ البلاطيّ</strong> (السيّدة المتعالية المثاليّة في الرومانس القرسطيّ)، و<strong>الحبّ البتراركيّ</strong> (المحبّ المعذَّب الذي يكتب السونيتات إلى جمالٍ منيع). ويتلاعب Shakespeare كثيراً بهذين العُرفين، تأييداً ومخالفة. وتأخذ Sonnet 116 المثالَ البتراركيّ في الإخلاص الأبديّ، فتنزع عنه التودّد، وتحيله ادّعاءً فلسفيّاً صارماً.</p>

    <h3>الملاحة ونجم الشمال</h3>
    <p>إشارات "ever-fixed mark" و"the star to every wand\'ring bark" تعود إلى الملاحة. في عصر الاستكشاف الإليزابيثيّ (طاف Drake حول العالم بين 1577 و1580، وتأسّست East India Company سنة 1600)، كان البحّارة يهتدون بسفنهم على <strong>نجم القطب</strong> - نقطةٍ راسخة لا تتحرّك في السماء. تأخذ استعارةُ Shakespeare التقنيةَ المتقدّمة في عصره فتحوّلها صورةً روحيّة.</p>
  `,

  summaryAr: `السطور 1-4: يُحاجج المتكلّم بأنّه لن يُجيز أيّ "impediments" (عوائق) أمام "marriage of true minds". الحبّ الحقيقيّ ليس حبّاً إن تبدّل حين يصادف التبدّل، أو انحنى حين يحاول مَن يَنزعه أن ينزعه. الحبّ الحقيقيّ تعريفُه الثباتُ.

السطور 5-8: ثمّ يقدّم Shakespeare استعاراتٍ لما يكونه الحبّ. هو "ever-fixed mark" (علامةٌ بحريّة أو منارة) تثبت أمام عصف العواصف. هو "the star to every wand\'ring bark" - نجمُ القطب الذي يهدي السفن التائهة. يقدر البحّارة على قياس ارتفاعه، لكنّهم لا يفقهون قدرَه الحقيقيّ.

السطور 9-12: ليس الحبّ كذلك خاضعاً للزمن. "Rosy lips and cheeks" ستذبل تحت منجل الزمن، لكنّ الحبّ خارج مرماه. لا يتبدّل الحبّ بمرور الساعات والأسابيع - بل يصمد إلى "the edge of doom" (يومِ الحساب الأخير).

السطران 13-14: في البيت الختاميّ يُراهن المتكلّمُ بمصداقيّته على تعريفه. إن أمكن إثبات خطئه، فإنّه لم يكتب شيئاً قطّ، ولم يحبّ امرؤٌ قطّ على الحقيقة. مقامرةٌ بلاغيّةٌ كبرى - يصرّ المتكلّم على صحّة تعريفه إلى حدّ أنّه يقبل بمحو نفسه إن أخطأ.

المعنى الإجماليّ: القصيدة حجاجٌ شكليّ شبهُ فلسفيّ حول طبيعة الحبّ الحقيقيّ. عند Shakespeare يُعرَّف الحبّ بدوامه. وكلّ ما يتبدّل بفعل ظرفٍ أو زمن، فليس بحبٍّ حقيقيّ. صارت السونيتة من ثوابت قداديس الأعراس، وهي من أشهر تعاريف الحبّ في الأدب الإنجليزيّ.`,

  formAndStructureAr: `الشكل: سونيتة شيكسبيريّة - أربعة عشر سطراً مقسّمة إلى ثلاث رباعيّاتٍ (quatrains) وبيتٍ ختاميّ (couplet).

نظام القافية: ABAB CDCD EFEF GG - وهو النمط الشيكسبيريّ الكلاسيكيّ. كلّ رباعيّةٍ تُورد فكرةً وتُنمّيها، ويأتي البيت الختاميّ ليقدّم الانعطافةَ أو الضربةَ الأخيرة.

الوزن: iambic pentameter - عشرةُ مقاطع في السطر في خمس iambs (مقطعٌ غير مُشدّد ثمّ مُشدّد: "Let ME / not TO / the MAR / riage OF / true MINDS"). يمنح الوزنُ المنتظم القصيدةَ هدوءاً ورصانة - وهو ما يلائم حُجّةً عن الثبات.

الحُجّة الثلاثيّة: كلّ رباعيّة تُقدّم خطوةً في الحُجّة:
• الرباعيّة الأولى: تعريفٌ سلبيّ (الحبّ ليس حبّاً إن تبدّل).
• الرباعيّة الثانية: تعريفٌ إيجابيّ عبر الاستعارة (الحبّ علامةٌ راسخة، نجمٌ هادٍ).
• الرباعيّة الثالثة: الحبّ في مواجهة الزمن (الحبّ ليس خاضعاً لمنجل الزمن).
• البيت الختاميّ: يُراهن المتكلّمُ بمصداقيّته على صحّة الحجّة.

الأساليب البلاغيّة: يستعمل Shakespeare الـ polyptoton (alter / alteration / remover / remove) والمفارقة ("Love is not love") لإحكام منطقه. تكاد القصيدة تُقرأ مرافعةً قانونيّة.

الـ volta: ثمّة انعطافتان محتملتان. الأولى عند السطر الخامس ("O no!") - حيث يكسر المتكلّم تعريفَه القانونيّ النبرة بإصرارٍ عاطفيّ. والثانية عند السطر الثالث عشر - الـ volta الشيكسبيريّ التقليديّ حيث يتحدّى البيت الختاميّ القارئ مباشرةً.

النبرة: تتحرّك القصيدة من تعريفٍ بارد (السطور 1-4) إلى إصرارٍ متّقد ("O no!") إلى استعارةٍ ملاحيّة، إلى مراهنةٍ متحدّية. تُحاجج بقدر ما تصف - تسعى إلى البرهنة لا إلى الإيضاح فحسب.

الـ enjambment: يستعمل Shakespeare الـ enjambment باعتدال، إذ تنتهي معظم الأسطر عند وقفاتٍ طبيعيّة. وهذا يكسب القصيدةَ نبرةَ حُجّةٍ متأنّيةٍ لا انفعالٍ متسرّع.`,
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Remember',
    poet: 'Christina Rossetti',
    href: '/igcse/edexcel/poetry/remember',
    reason:
      "Both are sonnets about love and time. Shakespeare argues love is unchanging; Rossetti asks her beloved to remember her after death but is willing to be forgotten if that brings peace. Compare the rigid constancy of Sonnet 116 with Rossetti's more flexible, self-sacrificing love.",
    themes: ['Love', 'Time', 'Sonnet form'],
  },
  {
    title: 'La Belle Dame sans Merci',
    poet: 'John Keats',
    href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
    reason:
      "Keats presents love as dangerous, deceptive and ruinous - the opposite of Shakespeare's ideal. Compare Shakespeare's confident claim that real love never changes with Keats's portrait of a love that destroys.",
    themes: ['Love and deception', 'Contrasting ideals'],
  },
  {
    title: 'Poem at Thirty-Nine',
    poet: 'Alice Walker',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems celebrate a kind of love that outlasts time. Walker\'s daughterly love for her dead father persists across years, just as Shakespeare\'s true love persists "to the edge of doom". Compare how each writer imagines love surviving death.',
    themes: ['Enduring love', 'Memory', 'Time'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function Sonnet116Page() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Sonnet 116</h1>
            <p className="text-body-sm text-muted-foreground">
              William Shakespeare &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              {tr('igcse.page.badge_edexcel_lit')}
            </Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={poem} />

      <StudyTools textName="Sonnet 116" textType="poem" examBoard="Edexcel" variant="compact" />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {tr('anth_text.section.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another from the anthology. These
          are strong pairings for Sonnet 116.
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
