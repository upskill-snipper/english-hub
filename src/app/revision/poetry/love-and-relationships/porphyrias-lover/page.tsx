'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
const poemData: PoemData = {
  title: "Porphyria's Lover",
  poet: 'Robert Browning',
  lines: [
    {
      text: 'The rain set early in to-night,',
      annotations: [
        {
          type: 'Pathetic fallacy',
          note: "The storm mirrors the speaker's turbulent mental state. The weather is violent and unpredictable, foreshadowing the violence to come.",
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'The sullen wind was soon awake,',
      annotations: [
        {
          type: 'Personification',
          note: '"Sullen" gives the wind human mood -- resentful and brooding, reflecting the speaker\'s jealous, possessive temperament.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'It tore the elm-tops down for spite,',
      annotations: [
        {
          type: 'Foreshadowing',
          note: 'The wind\'s destructive violence foreshadows the speaker\'s own act. "Spite" projects human malice onto nature.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And did its best to vex the lake:',
      annotations: [
        {
          type: 'Personification',
          note: "The storm personified as deliberately trying to cause harm mirrors the speaker's later calculated violence.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'I listened with heart fit to break.',
      annotations: [
        {
          type: 'Emotional state',
          note: "The first hint of the speaker's instability. His heart is ready to break with longing, jealousy, or despair -- establishing his volatile emotional state.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'When glided in Porphyria; straight',
      annotations: [
        {
          type: 'Contrast',
          note: '"Glided" is smooth and ethereal, contrasting with the storm\'s violence. Porphyria enters like a calming presence, almost supernatural.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'She shut the cold out and the storm,',
      annotations: [
        {
          type: 'Power dynamic',
          note: 'Porphyria has agency and control here -- she shuts out the chaos. She is the active force while the speaker passively waits. This dynamic will be violently reversed.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And kneeled and made the cheerless grate',
      annotations: [
        {
          type: 'Domestic imagery',
          note: 'Porphyria tends to the fire and the home, taking a nurturing, active role. She is creating warmth where there was none.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Blaze up, and all the cottage warm;',
      annotations: [
        {
          type: 'Symbolism',
          note: 'The fire she creates symbolises passion and warmth. But fire also destroys -- foreshadowing the destructive passion to come.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Which done, she rose, and from her form',
      annotations: [
        {
          type: 'Agency',
          note: 'Porphyria remains the active agent in these lines: she rises, removes her clothing, lets down her hair. The speaker is entirely passive.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Withdrew the dripping cloak and shawl,',
      annotations: [
        {
          type: 'Sensory detail',
          note: '"Dripping" is a vivid sensory detail connecting Porphyria to the storm outside. She has braved the elements to be with the speaker.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And laid her soiled gloves by, untied',
      annotations: [
        {
          type: 'Detail',
          note: "The meticulous cataloguing of Porphyria's actions reveals the speaker's obsessive attention to her every movement.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Her hat and let the damp long hair',
      annotations: [
        {
          type: 'Hair imagery',
          note: "Porphyria's hair becomes a central symbol. Here it is freely released; later it becomes the murder weapon. The hair represents her sexuality and vitality.",
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Fall, and, last, she sat down by my side',
      annotations: [
        {
          type: 'Enjambment',
          note: "The heavy enjambment across these lines creates a breathless, flowing narrative that mirrors the speaker's obsessive observation.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'And called me. When no voice replied,',
      annotations: [
        {
          type: "Speaker's passivity",
          note: "The speaker refuses to respond, remaining silent and passive. This sullen refusal to engage contrasts with Porphyria's warmth and creates tension.",
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'She put my arm about her waist,',
      annotations: [
        {
          type: 'Power dynamic',
          note: "Porphyria physically arranges the speaker's body, placing his arm around her. She has complete control of the physical relationship at this point.",
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And made my cheek lie there, and spread',
      annotations: [
        {
          type: 'Objectification',
          note: 'The speaker is almost puppet-like, being physically positioned by Porphyria. He is the passive object, she the active subject.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "O'er all her yellow hair displayed,",
      annotations: [
        {
          type: 'Hair symbolism',
          note: '"Yellow hair displayed" suggests both beauty and vanity. The hair is deliberately shown, associated with Porphyria\'s sexuality and freedom.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Murmuring how she loved me -- she',
      annotations: [
        {
          type: 'Enjambment',
          note: 'The enjambment after "she" creates suspense and emphasises the separation between Porphyria\'s declaration of love and the conditions that follow.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: "Too weak, for all her heart's endeavour,",
      annotations: [
        {
          type: 'Social context',
          note: '"Too weak" introduces the class barrier. Porphyria cannot fully commit to the speaker due to social expectations -- she is likely of higher social standing.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'To set its struggling passion free',
      annotations: [
        {
          type: 'Conflict',
          note: 'Her passion "struggles" against social convention. Porphyria is trapped between desire and duty, love and social respectability.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'From pride, and vainer ties dissever,',
      annotations: [
        {
          type: 'Social commentary',
          note: '"Pride" and "vainer ties" refer to Porphyria\'s social position and the expectations of her class. The speaker views these as obstacles to their love.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And give herself to me for ever.',
      annotations: [
        {
          type: 'Possessiveness',
          note: '"Give herself to me for ever" reveals the speaker\'s desire for total, permanent possession. He wants Porphyria as a permanent object, not a free agent.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'But passion sometimes would prevail,',
      annotations: [
        {
          type: 'Turning point',
          note: 'This line explains why Porphyria comes tonight -- passion temporarily overcomes propriety. But the word "sometimes" suggests it is not consistent enough for the speaker.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "Nor could to-night's gay feast restrain",
      annotations: [
        {
          type: 'Context',
          note: 'Porphyria has left a social gathering ("gay feast") of her own class to be with the speaker. She has chosen him over society, but only temporarily.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'A sudden thought of one so pale --',
      annotations: [
        {
          type: 'Self-description',
          note: '"One so pale" is how the speaker sees himself -- sickly, passive, lesser. This self-image fuels his insecurity and desire for control.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'She was come through wind and rain.',
      annotations: [
        {
          type: 'Devotion',
          note: "A simple statement of Porphyria's devotion -- she braved the storm for him. This makes what follows even more disturbing.",
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Be sure I looked up at her eyes',
      annotations: [
        {
          type: 'Shift',
          note: '"Be sure" directly addresses the reader, as if justifying what follows. The speaker becomes active for the first time, looking up with intent.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Happy and proud; at last I knew',
      annotations: [
        {
          type: 'Revelation',
          note: '"At last I knew" -- the speaker reaches a moment of certainty. He has convinced himself that Porphyria truly loves him, and this triggers his decision to act.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Porphyria worshipped me; surprise',
      annotations: [
        {
          type: 'Delusion',
          note: '"Worshipped" is extreme -- the speaker elevates Porphyria\'s love to religious devotion. This grandiose thinking is a sign of his psychological instability.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Made my heart swell, and still it grew',
      annotations: [
        {
          type: 'Building tension',
          note: 'The swelling heart suggests both joy and something more sinister -- a growing determination or mania that will soon be unleashed.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'While I debated what to do.',
      annotations: [
        {
          type: 'Chilling line',
          note: 'This matter-of-fact line is deeply unsettling. The speaker "debates" as if choosing between rational options, yet his conclusion will be murder.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'That moment she was mine, mine, fair,',
      annotations: [
        {
          type: 'Possessive repetition',
          note: 'The repetition of "mine" reveals obsessive possessiveness. "That moment" -- he wants to freeze time, to own this instant of Porphyria\'s complete devotion permanently.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Perfectly pure and good: I found',
      annotations: [
        {
          type: 'Idealisation',
          note: 'The speaker projects idealised purity onto Porphyria. He has decided what she represents to him, regardless of her actual complexity as a person.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'A thing to do, and all her hair',
      annotations: [
        {
          type: 'Euphemism',
          note: '"A thing to do" is a horrifying euphemism for murder. The casual phrasing reveals the speaker\'s detachment from the enormity of his action.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'In one long yellow string I wound',
      annotations: [
        {
          type: 'Murder',
          note: "The hair that symbolised Porphyria's sexuality and freedom becomes the instrument of her death. The speaker uses her own body against her.",
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Three times her little throat around,',
      annotations: [
        {
          type: 'Detail',
          note: '"Little throat" is simultaneously tender and horrifying. The diminutive "little" reveals a possessive tenderness even in the act of killing. "Three times" shows cold precision.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And strangled her. No pain felt she;',
      annotations: [
        {
          type: 'Self-justification',
          note: 'The speaker immediately reassures himself (and the reader) that she felt no pain. This is the first of several attempts to rationalise the murder.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'I am quite sure she felt no pain.',
      annotations: [
        {
          type: 'Repetition',
          note: 'The insistent repetition betrays anxiety. The speaker needs to convince himself she did not suffer. The certainty rings hollow.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'As a shut bud that holds a bee,',
      annotations: [
        {
          type: 'Simile',
          note: "A disturbing simile comparing Porphyria's dead body to a flower bud trapping a bee. Beauty containing captivity -- the image is both lovely and sinister.",
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I warily oped her lids: again',
      annotations: [
        {
          type: 'Objectification',
          note: '"Oped her lids" -- the speaker physically manipulates her dead body as if she were a doll. "Warily" suggests he is still uncertain of his actions.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Laughed the blue eyes without a stain.',
      annotations: [
        {
          type: 'Delusion',
          note: 'The speaker sees laughter in dead eyes and projects purity ("without a stain"). He has created the version of Porphyria he wanted -- silent, still, and entirely his.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'As I untied at her cheek once more',
      annotations: [
        {
          type: 'Repetition of actions',
          note: 'The speaker now arranges Porphyria as she earlier arranged him, reversing the power dynamic. He is now the active agent, she the passive object.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Blushed bright beneath my burning kiss.',
      annotations: [
        {
          type: 'Disturbing imagery',
          note: 'He projects life onto death -- seeing a "blush" where there is none. "Burning" contrasts with her now-cold flesh. The speaker\'s delusion is complete.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And thus we sit together now,',
      annotations: [
        {
          type: 'Present tense',
          note: "The shift to present tense is deeply disturbing -- the speaker is sitting with Porphyria's corpse as he narrates, treating the scene as domestic normality.",
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And all night long we have not stirred,',
      annotations: [
        {
          type: 'Stillness',
          note: '"Not stirred" applies literally to the corpse but the speaker presents it as mutual contentment. He has achieved his desire -- Porphyria will never leave him.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And yet God has not said a word!',
      annotations: [
        {
          type: 'Final line',
          note: "The exclamation mark conveys surprise or triumph. The speaker expected divine punishment but received none, interpreting God's silence as approval. This final line is Browning's most chilling -- the absence of consequence emboldens the psychopath.",
          color: '#ef4444',
        },
      ],
    },
  ],
  context: `<p><strong>Robert Browning (1812-1889)</strong> published this poem in 1836 as part of a pair titled <em>Madhouse Cells</em>, making clear the speaker is meant to be understood as <strong>mentally unstable</strong>.</p>
<p>The poem is a <strong>dramatic monologue</strong> -- a form Browning mastered. The speaker is not Browning himself but a fictional character whose unreliable perspective the reader must see through. Browning reveals character through what the speaker says and, crucially, what they fail to recognise about themselves.</p>
<p>The <strong>Victorian era</strong> was fascinated by psychology, criminality, and the darker aspects of human nature. Browning explores <strong>obsessive love, power, and control</strong> through a speaker who sees murder as a rational solution to an emotional problem.</p>
<p>The poem also reflects Victorian anxieties about <strong>class and sexuality</strong>. Porphyria crosses class boundaries to visit the speaker, and her sexual agency -- freely visiting a lover -- may be part of what the speaker seeks to control and punish.</p>`,
  contextAr: `<p><strong>Robert Browning (1812-1889)</strong> نشر هالقصيدة سنة 1836 ضمن ثنائي شعري عنوانه <em>Madhouse Cells</em> (زنازين المجانين)، وهذا العنوان يوضّح من البداية إن المتكلّم المفروض يُفهم على إنه <strong>مختلّ نفسياً</strong>.</p>
<p>القصيدة <strong>dramatic monologue</strong> (مونولوج درامي) - وهو شكل أتقنه Browning. المتكلّم مو Browning نفسه، إنما شخصية متخيّلة منظورها مو موثوق، والقارئ لازم يقرأ ما بين السطور. Browning يكشف الشخصية من خلال اللي يقوله المتكلّم، والأهم من ذلك، من خلال اللي يعجز هو نفسه عن إدراكه عن نفسه.</p>
<p><strong>العصر الفيكتوري</strong> كان مفتون بعلم النفس وبالإجرام وبالجوانب المظلمة من الطبيعة البشرية. Browning يستكشف <strong>الحب الهوسي والسلطة والسيطرة</strong> من خلال متكلّم يشوف القتل حلّ منطقي لمشكلة عاطفية.</p>
<p>القصيدة كمان تعكس قلق العصر الفيكتوري من <strong>الطبقة الاجتماعية والجنسانية</strong>. Porphyria تعبر حدود الطبقة عشان تزور المتكلّم، وحريّتها الجنسية - إنها تزور حبيب بإرادتها - يحتمل إنها جزء من اللي يبي المتكلّم يسيطر عليه ويعاقبها عليه.</p>`,
  summary: `The speaker sits alone in a cottage while a storm rages outside. Porphyria arrives, tends to the fire, removes her wet clothes, and sits beside him. She arranges his body against hers and murmurs her love, but the speaker knows she is "too weak" to fully leave her privileged life for him.\n\nIn a moment of realisation that Porphyria truly loves him, the speaker decides to preserve this perfect moment forever. He winds her hair around her throat three times and strangles her. He then opens her eyes, kisses her, and sits with the corpse all night.\n\nThe poem ends with the speaker's observation that God has not intervened or punished him, which he interprets as divine approval. The dramatic monologue reveals a deeply disturbed mind that rationalises murder as an act of love and preservation.`,
  summaryAr: `المتكلّم قاعد لحاله في كوخ، وبراً عاصفة هايجة. Porphyria تجي، تشعل النار، تشلح ثيابها المبلولة، وتقعد جنبه. هي بنفسها ترتّب جسمه على جسمها، وتهمس له بحبّها، بس المتكلّم يدري إنها "too weak" - أضعف من إنها تتخلّى عن حياتها المرفّهة عشانه.\n\nفي لحظة يكتشف فيها إن Porphyria صدق تحبه، يقرّر إنه يخلّد هاللحظة الكاملة للأبد. يلفّ شعرها حول حلقها ثلاث مرّات ويخنقها. بعدها يفتح عيونها، يبوسها، ويقعد جنب جثّتها طول الليل.\n\nالقصيدة تنتهي بملاحظة المتكلّم إن الله ما تدخّل ولا عاقبه، وهو يفسّر هالشي على إنه موافقة إلهية. الـdramatic monologue يكشف عقل مضطرب جداً يبرّر القتل ويعتبره فعل محبة وحفظ.`,
  formAndStructure: `Form: A dramatic monologue -- the entire poem is spoken by a single, unreliable narrator whose true nature is gradually revealed through his own words.\n\nSingle stanza: The poem is one continuous block of text with no stanza breaks, creating a relentless, claustrophobic narrative that mirrors the speaker's obsessive, unbroken thought process.\n\nRhyme scheme: ABABB -- the interlocking rhyme creates a sense of entrapment and obsession. The extra rhyme in each group creates an unsettling asymmetry.\n\nEnjambment: Heavy use of enjambment creates a breathless, flowing narrative that mimics natural speech, drawing the reader into the speaker's warped perspective.\n\nPower reversal: The poem's structure mirrors the shift in power -- Porphyria is active and the speaker passive in the first half; this reverses completely after the murder.\n\nPresent tense ending: The shift to present tense ("And thus we sit together now") creates a disturbing immediacy, revealing the speaker is narrating while sitting beside the corpse.`,
  formAndStructureAr: `DRAMATIC MONOLOGUE (مونولوج درامي)\nالقصيدة كلها يحكيها متكلّم واحد غير موثوق، وحقيقة شخصيته تنكشف تدريجياً من خلال كلامه نفسه.\n\nSINGLE STANZA (مقطوعة واحدة)\nالقصيدة كتلة نص واحدة متّصلة، بدون أي فاصل بين المقاطع، وهذا يخلق سرد متلاحق وخانق يعكس تيّار التفكير الهوسي المتواصل عند المتكلّم.\n\nRHYME SCHEME (نمط القافية)\nABABB - القافية المتشابكة تعطي إحساس بالحصار والهوس. القافية الزايدة في كل مجموعة تخلق عدم تماثل مقلق.\n\nENJAMBMENT\nالاستخدام المكثّف للـenjambment يخلق سرد متدفّق وشبه لاهث يحاكي الكلام الطبيعي، ويسحب القارئ داخل منظور المتكلّم المعوجّ.\n\nانعكاس السلطة\nبنية القصيدة تعكس تحوّل السلطة - Porphyria هي الفاعلة والمتكلّم خامل في النصف الأول؛ وهالشي ينقلب بالكامل بعد جريمة القتل.\n\nنهاية بزمن المضارع\nالتحوّل إلى زمن المضارع ("And thus we sit together now") يخلق إحساس مرعب بالحضور الآني، ويكشف إن المتكلّم يحكي وهو قاعد جنب الجثّة.`,
  keyQuotes: [
    {
      quote: 'I listened with heart fit to break',
      analysis:
        "Establishes the speaker's volatile emotional state from the outset. His heart is already at breaking point, priming the reader for irrational action.",
      themes: ['Emotional instability', 'Vulnerability'],
      analysisAr:
        'يثبّت الحالة العاطفية المتقلّبة عند المتكلّم من البداية. قلبه أصلاً على وشك الانكسار، وهالشي يهيّئ القارئ لتصرّف غير عقلاني.',
      themesAr: ['عدم استقرار عاطفي', 'هشاشة'],
    },
    {
      quote: 'She shut the cold out and the storm',
      analysis:
        'Porphyria has agency and power -- she controls the environment. This positions her as the dominant force in the relationship, which the speaker will violently reverse.',
      themes: ['Power', 'Control', 'Gender roles'],
      analysisAr:
        'Porphyria عندها فاعلية وسلطة - هي اللي تتحكّم في البيئة. هالشي يجعلها القوّة المهيمنة في العلاقة، وهالوضع المتكلّم بيقلبه بعنف لاحقاً.',
      themesAr: ['السلطة', 'السيطرة', 'الأدوار الجندرية'],
    },
    {
      quote: "Too weak, for all her heart's endeavour",
      analysis:
        'Porphyria cannot escape social expectations. "Too weak" is the speaker\'s judgment, framing her social obligation as a personal failing rather than a systemic constraint.',
      themes: ['Class', 'Social convention', 'Judgment'],
      analysisAr:
        'Porphyria ما تقدر تهرب من توقّعات المجتمع. عبارة "too weak" هي حكم المتكلّم عليها، يأطّر التزامها الاجتماعي على إنه عيب شخصي مو قيد منظومي مفروض عليها.',
      themesAr: ['الطبقة', 'الأعراف الاجتماعية', 'الحكم على الآخر'],
    },
    {
      quote: 'That moment she was mine, mine, fair',
      analysis:
        'The possessive repetition of "mine" reveals the speaker\'s desire for ownership. He wants to freeze this moment of complete devotion permanently.',
      themes: ['Possession', 'Obsession', 'Control'],
      analysisAr:
        'تكرار كلمة "mine" التملّكي يكشف رغبة المتكلّم في الامتلاك. يبي يجمّد هاللحظة من التفاني الكامل بشكل دائم.',
      themesAr: ['التملّك', 'الهوس', 'السيطرة'],
    },
    {
      quote: 'A thing to do',
      analysis:
        "A horrifyingly casual euphemism for murder. The simplicity of the phrasing reveals the speaker's detachment from the moral weight of his actions.",
      themes: ['Violence', 'Euphemism', 'Psychopathy'],
      analysisAr:
        'كناية عن القتل، بسيطة بشكل مرعب. بساطة الصياغة تكشف انفصال المتكلّم عن الوزن الأخلاقي لفعلته.',
      themesAr: ['العنف', 'الكناية', 'اعتلال نفسي'],
    },
    {
      quote: 'Three times her little throat around',
      analysis:
        'The precision of "three times" and the tenderness of "little" create a deeply disturbing juxtaposition of care and violence, revealing the speaker\'s warped perception.',
      themes: ['Violence', 'Tenderness', 'Contradiction'],
      analysisAr:
        'دقّة عبارة "three times" مع رقّة كلمة "little" يخلقون تجاور مزعج جداً بين الحنان والعنف، ويكشفون إدراك المتكلّم المعوج.',
      themesAr: ['العنف', 'الحنان', 'التناقض'],
    },
    {
      quote: 'I am quite sure she felt no pain',
      analysis:
        'The insistent repetition of painlessness is self-justification. The speaker needs to believe the murder was painless to maintain his delusion that it was an act of love.',
      themes: ['Self-deception', 'Guilt', 'Rationalisation'],
      analysisAr:
        'الإصرار على تكرار فكرة إنها ما تألّمت هو تبرير ذاتي. المتكلّم محتاج يصدّق إن القتل صار بدون ألم عشان يحافظ على وهمه إنه فعل محبة.',
      themesAr: ['الخداع الذاتي', 'الذنب', 'التبرير العقلاني'],
    },
    {
      quote: 'And yet God has not said a word!',
      analysis:
        "The poem's final, chilling line. The speaker interprets God's silence as approval, revealing complete moral bankruptcy. The exclamation mark suggests triumph rather than anxiety.",
      themes: ['Morality', 'Religion', 'Madness'],
      analysisAr:
        'البيت الأخير المرعب في القصيدة. المتكلّم يفسّر صمت الله على إنه موافقة، وهذا يكشف إفلاس أخلاقي تام. علامة التعجّب توحي بانتصار أكثر منها بقلق.',
      themesAr: ['الأخلاق', 'الدين', 'الجنون'],
    },
  ],
  languageDevices: [
    {
      device: 'Pathetic fallacy',
      example: 'The rain set early in to-night, / The sullen wind was soon awake',
      effect:
        "The violent storm mirrors the speaker's turbulent mental state and foreshadows the violence to come. Nature externalises inner turmoil.",
      lineRef: 0,
      effectAr:
        'العاصفة العنيفة تعكس الحالة الذهنية المضطربة عند المتكلّم، وتمهّد لمشهد العنف اللي جاي. الطبيعة تخرج الاضطراب الداخلي وتجسّده.',
    },
    {
      device: 'Dramatic monologue',
      example: 'entire poem',
      effect:
        "The single-speaker form forces readers to experience events through the murderer's distorted lens, creating dramatic irony as we see truths the speaker cannot.",
      lineRef: 0,
      effectAr:
        'شكل المتكلّم الواحد يجبر القارئ يعيش الأحداث من خلال عدسة القاتل المشوّهة، وهذا يخلق dramatic irony، لأننا نشوف حقائق المتكلّم نفسه عاجز عنها.',
    },
    {
      device: 'Enjambment',
      example: 'she rose, and from her form / Withdrew the dripping cloak',
      effect:
        "Heavy enjambment creates breathless, flowing speech that draws the reader into the speaker's obsessive perspective and makes the narrative feel unstoppable.",
      lineRef: 9,
      effectAr:
        'الـenjambment المكثّف يخلق كلام شبه لاهث ومتدفّق، يسحب القارئ داخل منظور المتكلّم الهوسي، ويعطي السرد إحساس إنه ما يقدر أحد يوقّفه.',
    },
    {
      device: 'Repetition (possessive)',
      example: 'mine, mine',
      effect:
        'The frantic doubling reveals obsessive possessiveness. The speaker reduces Porphyria to an object to be owned rather than a person to be loved.',
      lineRef: 32,
      effectAr:
        'التكرار المحموم يكشف عن تملّك هوسي. المتكلّم يختزل Porphyria إلى شي يُمتلك، مو شخص يُحَب.',
    },
    {
      device: 'Euphemism',
      example: 'A thing to do',
      effect:
        "The casual, everyday phrasing for murder reveals the speaker's psychological detachment and inability to recognise the horror of his actions.",
      lineRef: 34,
      effectAr:
        'الصياغة العادية اليومية للقتل تكشف انفصال المتكلّم النفسي وعجزه عن إدراك بشاعة فعلته.',
    },
    {
      device: 'Symbolism (hair)',
      example: 'all her hair / In one long yellow string I wound',
      effect:
        "Porphyria's hair, symbolising her sexuality and freedom throughout, becomes the murder weapon. Her own identity is literally turned against her.",
      lineRef: 35,
      effectAr:
        'شعر Porphyria، اللي كان يرمز لجنسانيتها وحريّتها طول القصيدة، يتحوّل إلى أداة القتل. هويّتها نفسها تنقلب ضدّها حرفياً.',
    },
    {
      device: 'Simile',
      example: 'As a shut bud that holds a bee',
      effect:
        "A beautiful natural image for an unnatural act. The simile presents entrapment as natural and beautiful, revealing the speaker's capacity for aesthetic detachment from violence.",
      lineRef: 39,
      effectAr:
        'صورة طبيعية جميلة لفعل غير طبيعي. الـsimile يقدّم الحبس على إنه طبيعي وجميل، وهذا يكشف قدرة المتكلّم على الانفصال الجمالي عن العنف.',
    },
    {
      device: 'Power reversal (structural)',
      example: 'she put my arm... / I wound... her throat',
      effect:
        'In the first half, Porphyria physically arranges the passive speaker. After the murder, he arranges her corpse. The structural reversal mirrors his violent seizure of control.',
      lineRef: 15,
      effectAr:
        'في النصف الأول، Porphyria هي اللي ترتّب جسم المتكلّم الخامل. بعد القتل، هو اللي يرتّب جثّتها. الانعكاس البنيوي يعكس استيلاءه العنيف على السيطرة.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'pl-1',
    question: 'What does the speaker do to Porphyria?',
    type: 'multiple-choice',
    options: [
      'He proposes marriage',
      'He strangles her with her own hair to preserve the perfect moment',
      'He sends her away',
      'He writes her a letter',
    ],
    correctIndex: 1,
    explanation:
      "In the poem's shocking climax, the speaker wraps Porphyria's hair around her throat and strangles her, believing this will preserve the moment of her love forever.",
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'pl-2',
    question: 'What form is the poem written in?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      'A dramatic monologue in a single 60-line stanza with an ABABB rhyme scheme',
      'Free verse',
      'A ballad',
    ],
    correctIndex: 1,
    explanation:
      "Like My Last Duchess, Porphyria's Lover is a dramatic monologue - a single speaker reveals his disturbed psychology to the reader through his own words. It is written as one continuous 60-line stanza in iambic tetrameter with an ABABB rhyme scheme.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'pl-3',
    question: 'What does pathetic fallacy achieve in the opening?',
    type: 'multiple-choice',
    options: [
      'Creates a cheerful mood',
      "The violent storm reflects the speaker's disturbed mental state",
      'Describes normal weather',
      'Shows the season is summer',
    ],
    correctIndex: 1,
    explanation:
      'The storm that "tore the elm-tops" and "did its worst to vex the lake" mirrors the speaker\'s inner turmoil and foreshadows the violence to come.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'pl-4',
    question: 'Why does the speaker kill Porphyria?',
    type: 'multiple-choice',
    options: [
      'He hates her',
      'He wants to possess her completely and freeze the moment she belongs entirely to him',
      'She asks him to',
      'It was an accident',
    ],
    correctIndex: 1,
    explanation:
      'The speaker believes Porphyria cannot always be his due to social barriers. By killing her at the moment she "worshipped" him, he freezes her love in time - the ultimate act of possession.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'pl-5',
    question: "What is disturbing about the speaker's tone after the murder?",
    type: 'multiple-choice',
    options: [
      'He is filled with remorse',
      'He is calm and matter-of-fact, showing no guilt - suggesting psychopathy',
      'He calls for help',
      'He is angry',
    ],
    correctIndex: 1,
    explanation:
      'After strangling her, the speaker calmly arranges her body and sits with her all night. His lack of guilt or horror is deeply disturbing and reveals a psychopathic detachment.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'pl-6',
    question: 'What does "And yet God has not said a word!" suggest?',
    type: 'multiple-choice',
    options: [
      'The speaker is religious',
      'The speaker believes the murder is justified because God has not punished him',
      'God approves of the murder',
      'The speaker is praying',
    ],
    correctIndex: 1,
    explanation:
      "The final line is chilling - the speaker interprets God's silence as approval. His warped logic shows complete moral blindness, believing divine inaction equals divine endorsement.",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'pl-7',
    question: 'Who wrote the poem and when?',
    type: 'multiple-choice',
    options: ['Shelley in 1819', 'Robert Browning in 1836', 'Hardy in 1867', 'Byron in 1816'],
    correctIndex: 1,
    explanation:
      'Written by Robert Browning in 1836. Browning was fascinated by the psychology of disturbed minds and used the dramatic monologue form to let speakers reveal their true nature.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'pl-8',
    question: 'How does the poem explore power and control?',
    type: 'multiple-choice',
    options: [
      'Porphyria controls the speaker',
      'The speaker seizes control by killing Porphyria - transforming a living woman into a possessed object',
      'Power is shared equally',
      'Neither character has power',
    ],
    correctIndex: 1,
    explanation:
      'Initially Porphyria has power - she enters, tends the fire, arranges herself. The murder reverses this completely. The speaker transforms a living, autonomous woman into a lifeless possession he can control.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'pl-9',
    question: 'How does enjambment function in the poem?',
    type: 'multiple-choice',
    options: [
      'It slows the poem down',
      "The continuous flow creates a disturbing sense of the speaker's uninterrupted, obsessive thought process",
      'It creates neat, contained thoughts',
      'It has no particular effect',
    ],
    correctIndex: 1,
    explanation:
      "The enjambment creates a relentless, flowing monologue that mirrors the speaker's obsessive train of thought. There are no breaks - his disturbed logic rolls forward without pause for reflection.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'pl-10',
    question: "Which poem pairs best with Porphyria's Lover?",
    type: 'multiple-choice',
    options: [
      'Walking Away',
      'My Last Duchess (also by Browning)',
      'Singh Song!',
      'Climbing My Grandfather',
    ],
    correctIndex: 1,
    explanation:
      'Both are Browning dramatic monologues where a male speaker kills a woman he claims to love. Both explore possessive, controlling power through the voice of the perpetrator.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      "Porphyria's Lover explores obsessive love, possession, power, control, and the psychology of a disturbed mind.",
    keyPoints: [
      'Obsessive love - the speaker kills to possess Porphyria forever',
      'Power reversal - Porphyria initially has power; the murder gives it to the speaker',
      'Moral blindness - the speaker feels no guilt and believes God approves',
      'The dramatic monologue reveals psychology the speaker cannot see himself',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      "Browning uses pathetic fallacy, disturbing calm after violence, and the final shocking reference to God to reveal the speaker's psychopathy.",
    keyPoints: [
      "Pathetic fallacy - the storm mirrors the speaker's inner turmoil",
      'Calm, matter-of-fact tone after the murder - no guilt or horror',
      '"And yet God has not said a word!" - chilling final line',
      'Hair as murder weapon - intimacy twisted into violence',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'A dramatic monologue of 60 lines in one continuous stanza, written in iambic tetrameter with an ABABB rhyme scheme and relentless enjambment, creating an unbroken flow of obsessive thought.',
    keyPoints: [
      'Dramatic monologue - the speaker unwittingly reveals his madness',
      'ABABB rhyme scheme - the extra B rhyme creates an unsettling asymmetry',
      'Iambic tetrameter - controlled metre masks violent content',
      "Single 60-line stanza - no breaks, no escape from the speaker's logic",
    ],
  },
]

const ESSAY_PROMPTS = [
  "How does Browning present obsessive love in Porphyria's Lover?",
  "Compare how power and control are presented in Porphyria's Lover and one other poem from the anthology.",
  "How does Browning use the dramatic monologue form to reveal the speaker's disturbed psychology?",
]

const COMPARE_POEMS = [
  {
    title: 'When We Two Parted',
    href: '/revision/poetry/love-and-relationships/when-we-two-parted',
    reason:
      'Both explore secret, forbidden love, but with vastly different responses -- grief vs. violence.',
  },
  {
    title: 'Sonnet 29',
    href: '/revision/poetry/love-and-relationships/sonnet-29',
    reason:
      "Both feature a lover longing for possession, but EBB seeks healthy union while Browning's speaker seeks total control.",
  },
  {
    title: 'Neutral Tones',
    href: '/revision/poetry/love-and-relationships/neutral-tones',
    reason:
      "Both present dysfunctional relationships, but Hardy's speaker internalises pain while Browning's externalises it through violence.",
  },
]

export default function PorphyriasLoverPage() {
  const t = useT()
  return (
    <div className="space-y-6">
      <CourseJsonLd
        name="Porphyria's Lover by Robert Browning - Analysis & Annotations"
        description="Line-by-line analysis of Porphyria's Lover with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: "Porphyria's Lover",
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/porphyrias-lover',
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
          {t('rev.poetry.shared.back_to_poetry')}
        </Button>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-heading-lg font-heading text-foreground">Porphyria&apos;s Lover</h1>
          <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20">
            Love &amp; Relationships
          </Badge>
          <Badge variant="outline">AQA Anthology</Badge>
        </div>
      </div>

      <StudyTools
        textName="Porphyria's Lover"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Porphyria's Lover"
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
