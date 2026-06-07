'use client'

import { ArrowLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
/* ── Poem data ─────────────────────────────────────────────────── */

const poemData: PoemData = {
  title: 'My Last Duchess',
  poet: 'Robert Browning',
  lines: [
    {
      text: "That's my last Duchess painted on the wall,",
      annotations: [
        {
          type: 'Possessive pronoun',
          note: '"my" - the Duke treats his wife as a possession, an object to be owned and displayed. Even in death she belongs to him.',
          color: '#f59e0b',
        },
        {
          type: 'Dramatic monologue',
          note: 'The poem opens mid-conversation, as though we have stumbled into a private negotiation. The Duke addresses an envoy arranging his next marriage.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Looking as if she were alive. I call',
      annotations: [
        {
          type: 'Caesura',
          note: 'The full stop mid-line creates a jarring pause that mirrors the abrupt end of the Duchess\'s life. "I call" begins a new clause asserting his authority.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "That piece a wonder, now; Fra Pandolf's hands",
      annotations: [
        {
          type: 'Objectification',
          note: '"That piece" - the Duke reduces the portrait (and by extension the Duchess) to an art object, a "wonder" in his collection.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Worked busily a day, and there she stands.',
    },
    {
      text: "Will't please you sit and look at her? I said",
      annotations: [
        {
          type: 'Controlling language',
          note: 'Disguised as a polite request, this is really a command. The Duke controls who sees the painting - and, by extension, who saw his wife.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '"Fra Pandolf" by design, for never read',
    },
    {
      text: 'Strangers like you that pictured countenance,',
    },
    {
      text: 'The depth and passion of its earnest glance,',
      annotations: [
        {
          type: 'Irony',
          note: 'The "depth and passion" that disturbed the Duke in life is now safely contained within a painting he alone controls.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'But to myself they turned (since none puts by',
    },
    {
      text: 'The curtain I have drawn for you, but I)',
      annotations: [
        {
          type: 'Power & control',
          note: "The curtain is a symbol of the Duke's absolute control. Only he decides who sees her now - the possessiveness he could not enforce in life is total in death.",
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And seemed as they would ask me, if they durst,',
    },
    {
      text: 'How such a glance came there; so, not the first',
    },
    {
      text: "Are you to turn and ask thus. Sir, 'twas not",
      annotations: [
        {
          type: 'Form',
          note: '"Sir" - a reminder of the social context. The Duke addresses the envoy directly, blending casual revelation with political negotiation.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "Her husband's presence only, made that spot",
    },
    {
      text: "Of joy into the Duchess' cheek; perhaps",
      annotations: [
        {
          type: 'Jealousy',
          note: 'The Duke is enraged that his presence alone did not cause her blush - her joy came from many sources, which he found intolerable.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Fra Pandolf chanced to say, "Her mantle laps',
    },
    {
      text: 'Over my lady\'s wrist too much," or "Paint',
    },
    {
      text: 'Must never hope to reproduce the faint',
    },
    {
      text: 'Half-flush that dies along her throat"; such stuff',
      annotations: [
        {
          type: 'Dismissive language',
          note: '"such stuff" - the Duke dismisses ordinary human warmth and compliments as trivial, revealing his contempt for anything he cannot control.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Was courtesy, she thought, and cause enough',
    },
    {
      text: 'For calling up that spot of joy. She had',
    },
    {
      text: 'A heart - how shall I say? - too soon made glad,',
      annotations: [
        {
          type: 'Parenthetical aside',
          note: '"how shall I say?" - false modesty. The Duke feigns hesitation while delivering a calculated criticism. The parenthetical mimics natural speech but is carefully rehearsed.',
          color: '#a855f7',
        },
        {
          type: 'Characterisation',
          note: '"too soon made glad" - the Duchess\'s openness and warmth are presented as character flaws by the Duke, revealing his narcissism and need for exclusive devotion.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "Too easily impressed; she liked whate'er",
    },
    {
      text: 'She looked on, and her looks went everywhere.',
      annotations: [
        {
          type: 'Rhyming couplet',
          note: 'The rhyme of "whate\'er" and "everywhere" emphasises the Duke\'s grievance - that her attention and affection were not exclusively his.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "Sir, 'twas all one! My favour at her breast,",
      annotations: [
        {
          type: 'Indignation',
          note: '"all one" - the Duke is outraged that his aristocratic favour was valued no more than a sunset or a cherry bough. His status means everything to him.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'The dropping of the daylight in the West,',
    },
    {
      text: 'The bough of cherries some officious fool',
      annotations: [
        {
          type: 'Contempt',
          note: '"officious fool" - the Duke\'s disdain for those below his station. Anyone who brought the Duchess happiness threatens his monopoly on her emotions.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Broke in the orchard for her, the white mule',
    },
    {
      text: 'She rode with round the terrace - all and each',
    },
    {
      text: 'Would draw from her alike the approving speech,',
    },
    {
      text: 'Or blush, at least. She thanked men - good! but thanked',
      annotations: [
        {
          type: 'Enjambment',
          note: '"thanked / Somehow" - the enjambment across the line break enacts the Duke\'s inability to contain his frustration; his anger spills over.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Somehow - I know not how - as if she ranked',
      annotations: [
        {
          type: 'False uncertainty',
          note: '"I know not how" - another performance of uncertainty. The Duke knows exactly what bothered him but maintains a veneer of aristocratic restraint.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'My gift of a nine-hundred-years-old name',
      annotations: [
        {
          type: 'Pride / Status',
          note: '"nine-hundred-years-old name" - the Duke defines his worth entirely through aristocratic lineage. The compound modifier emphasises the weight he places on heritage and rank.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "With anybody's gift. Who'd stoop to blame",
      annotations: [
        {
          type: 'Key word: "stoop"',
          note: '"stoop" is central to the Duke\'s psychology. He refuses to lower himself to communicate his displeasure - he considers it beneath him to negotiate with his wife.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'This sort of trifling? Even had you skill',
    },
    {
      text: 'In speech - (which I have not) - to make your will',
      annotations: [
        {
          type: 'Irony',
          note: 'The Duke claims he lacks skill in speech, yet the entire poem demonstrates his masterful, manipulative rhetoric - a deeply ironic self-assessment.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Quite clear to such an one, and say, "Just this',
    },
    {
      text: 'Or that in you disgusts me; here you miss,',
    },
    {
      text: 'Or there exceed the mark" - and if she let',
    },
    {
      text: 'Herself be lessoned so, nor plainly set',
    },
    {
      text: 'Her wits to yours, forsooth, and made excuse -',
    },
    {
      text: "E'en then would be some stooping; and I choose",
      annotations: [
        {
          type: 'Key word: "choose"',
          note: '"I choose" - chilling in its finality. The Duke frames murder as an act of personal preference, a rational decision rather than a crime.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Never to stoop. Oh, sir, she smiled, no doubt,',
      annotations: [
        {
          type: 'Volta / turning point',
          note: '"Never to stoop" - the poem\'s emotional climax. Rather than communicate, the Duke chose to eliminate his wife. The casual "Oh, sir" immediately deflects from the horror.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "Whene'er I passed her; but who passed without",
    },
    {
      text: 'Much the same smile? This grew; I gave commands;',
      annotations: [
        {
          type: 'Euphemism',
          note: '"I gave commands" - the most chilling line in the poem. Browning never states directly what happened; the euphemism implicates the Duke while preserving his aristocratic composure.',
          color: '#ef4444',
        },
        {
          type: 'Caesura',
          note: "Three short clauses separated by semicolons mimic the Duke's cold, matter-of-fact delivery. The rhythm enacts his emotional detachment from the act of murder.",
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Then all smiles stopped together. There she stands',
      annotations: [
        {
          type: 'Sinister resolution',
          note: '"all smiles stopped" - the Duchess\'s death is reduced to the silencing of her joy. "There she stands" echoes line 4, framing the poem as a cycle of possession.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: "As if alive. Will't please you rise? We'll meet",
      annotations: [
        {
          type: 'Repetition',
          note: '"As if alive" echoes line 2 - the painting has replaced the living woman. The Duke\'s satisfaction is complete: she is now a perfect, controllable object.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'The company below, then. I repeat,',
    },
    {
      text: "The Count your master's known munificence",
    },
    {
      text: 'Is ample warrant that no just pretense',
    },
    {
      text: 'Of mine for dowry will be disallowed;',
      annotations: [
        {
          type: 'Context',
          note: 'The Duke reveals his true purpose: negotiating a dowry for his next marriage. The Duchess was a transaction; the next wife will be too.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "Though his fair daughter's self, as I avowed",
    },
    {
      text: "At starting, is my object. Nay, we'll go",
      annotations: [
        {
          type: 'Double meaning',
          note: '"object" - ostensibly means \'objective\' but also suggests the next wife will be another possession, another object in his collection.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Together down, sir. Notice Neptune, though,',
    },
    {
      text: 'Taming a sea-horse, thought a rarity,',
      annotations: [
        {
          type: 'Metaphor / Symbol',
          note: 'Neptune taming a sea-horse parallels the Duke taming his Duchess. The sculpture glorifies domination - the Duke identifies with a god who subdues wild creatures.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Which Claus of Innsbruck cast in bronze for me!',
      annotations: [
        {
          type: 'Final word: "me"',
          note: 'The poem ends on "me" - the Duke\'s entire worldview is self-centred. Art, wives, and status all exist to serve and reflect him.',
          color: '#f59e0b',
        },
      ],
    },
  ],
  context: `<p><strong>Robert Browning</strong> published <em>My Last Duchess</em> in 1842 as part of his collection <em>Dramatic Lyrics</em>. The poem is a <strong>dramatic monologue</strong> - a form Browning perfected - in which a single speaker inadvertently reveals their true character to the reader.</p>

<p>The speaker is based on <strong>Alfonso II, Duke of Ferrara</strong> (1533-1598), a real Italian Renaissance nobleman. His first wife, <strong>Lucrezia de' Medici</strong>, died in suspicious circumstances aged just 17, after only three years of marriage. Alfonso then negotiated to marry Barbara of Austria, niece of Ferdinand II, Count of Tyrol.</p>

<p><strong>Historical context:</strong> Renaissance Italian courts were centres of art patronage but also ruthless political power. Marriages among the aristocracy were transactional alliances - women were exchanged as property between powerful families. The poem explores how <strong>patriarchal power</strong> operated in this world: the Duke treats his wife as an extension of his status and property.</p>

<p><strong>Victorian context:</strong> Although set in Renaissance Italy, the poem was written for a Victorian audience who would recognise the critique of male authority. During the 1840s, married women had almost no legal rights - the <em>Married Women's Property Act</em> was not passed until 1882. Browning uses the historical distance to comment on contemporary gender politics.</p>

<p><strong>Form:</strong> The dramatic monologue allows Browning to create dramatic irony - the Duke intends to present himself as a cultured aristocrat, but the reader sees a jealous, controlling murderer. We hear only his voice, yet we sympathise entirely with the silent Duchess.</p>`,

  contextAr: `<p><strong>Robert Browning</strong> نشر قصيدة <em>My Last Duchess</em> سنة 1842 ضمن ديوانه <em>Dramatic Lyrics</em>. القصيدة <strong>dramatic monologue</strong> (مونولوج درامي) - وهو شكل أتقنه Browning، فيه متكلّم واحد بدون قصد منه يكشف للقارئ حقيقة شخصيته.</p>

<p>المتكلّم في القصيدة مستوحى من <strong>Alfonso II, Duke of Ferrara</strong> (1533-1598)، نبيل إيطالي حقيقي من عصر النهضة. زوجته الأولى، <strong>Lucrezia de' Medici</strong>، توفّت في ظروف مريبة وعمرها 17 سنة بس، بعد ثلاث سنوات من الزواج. بعدها، Alfonso بدأ مفاوضات للزواج من Barbara of Austria، بنت أخ Ferdinand II, Count of Tyrol.</p>

<p><strong>السياق التاريخي:</strong> القصور الإيطالية في عصر النهضة كانت مراكز لرعاية الفنون، بس في نفس الوقت كانت مراكز سلطة سياسية قاسية. زيجات الأرستقراطية كانت تحالفات سياسية - النساء يتبادلون كأنهم ممتلكات بين العائلات النافذة. والقصيدة تستعرض كيف كانت <strong>السلطة الذكورية</strong> تشتغل في هذا العالم: الـDuke يعامل زوجته كامتداد لمكانته وممتلكاته.</p>

<p><strong>السياق الفيكتوري:</strong> رغم إن الأحداث في إيطاليا عصر النهضة، Browning كتب القصيدة لجمهور فيكتوري كان بيستوعب النقد للسلطة الذكورية. في أربعينات القرن التاسع عشر، النساء المتزوجات في بريطانيا ما كان عندهم تقريباً أي حقوق قانونية - قانون <em>Married Women's Property Act</em> ما طلع إلا سنة 1882. Browning يستخدم البعد التاريخي عشان يعلّق على سياسات النوع الاجتماعي في زمنه.</p>

<p><strong>الشكل:</strong> الـdramatic monologue يخلّي Browning يخلق dramatic irony - الـDuke يقصد إنه يقدّم نفسه كأرستقراطي مثقّف، بس القارئ يشوف فيه قاتل غيور ومسيطر. ما نسمع غير صوته هو، ومع ذلك نتعاطف بالكامل مع الـDuchess الصامتة.</p>`,

  summary: `The Duke of Ferrara shows a visiting envoy a portrait of his former wife - his "last Duchess." As he describes the painting, he reveals his obsessive jealousy: the Duchess smiled too freely, appreciated simple pleasures, and treated everyone with equal warmth, which the Duke found intolerable.

Rather than communicate his displeasure (which he considers "stooping"), the Duke "gave commands" - a chilling euphemism for having her killed. The Duchess's smiles "stopped together," and now she exists only as a painting behind a curtain that he alone controls.

The poem ends with a shocking reveal: the Duke is in the middle of negotiating his next marriage. The entire monologue has been a veiled warning to the envoy (and, through him, to the next wife's family) about what happens to women who do not submit to his absolute authority.

As they leave, the Duke pauses to admire a bronze sculpture of Neptune taming a sea-horse - a final metaphor for his desire to dominate and possess.`,

  summaryAr: `Duke of Ferrara يعرض على مبعوث زائر لوحة لزوجته السابقة - "last Duchess" مالته. ولمّا يوصف اللوحة، يكشف غيرته المرضية: الـDuchess كانت تبتسم بسهولة، وتقدّر المتع البسيطة، وتعامل الكل بنفس الدفء، وهذا شي ما طاقه الـDuke أبداً.

بدل ما يبلّغها بانزعاجه (لأنه يعتبر هذا "stooping"، أي تنازل)، الـDuke "gave commands" - كناية مرعبة عن إنه أمر بقتلها. ابتسامات الـDuchess "stopped together"، والحين هي موجودة فقط كلوحة وراء ستارة هو وحده يتحكّم فيها.

القصيدة تنتهي بكشف صادم: الـDuke في الحين في وسط مفاوضات لزواجه التالي. كل المونولوج كان تحذير مبطّن للمبعوث (وعن طريقه، لعائلة الزوجة المقبلة) عن مصير النساء اللي ما يخضعون لسلطته المطلقة.

ولمّا يطلعون، الـDuke يوقف عشان يتأمّل تمثال برونزي يصوّر Neptune وهو "يروّض" حصان البحر - استعارة ختامية لرغبته في الهيمنة والتملّك.`,

  formAndStructure: `DRAMATIC MONOLOGUE
The entire poem is spoken by a single character - the Duke - to a silent listener (the envoy). Browning's genius is in what the Duke inadvertently reveals: he intends to appear cultured and reasonable, but the reader recognises a murderer. This creates dramatic irony throughout.

RHYMING COUPLETS (HEROIC COUPLETS)
The poem uses rhyming couplets (AABB) in iambic pentameter, but the heavy use of enjambment disguises the rhyme scheme. This mirrors the Duke's speech: he appears to speak naturally and spontaneously, but the tight structure beneath reveals his calculated control.

ENJAMBMENT
Lines frequently run on without pause ("she thanked / Men - good! but thanked / Somehow"), creating a sense of conversational flow. But the enjambment also enacts the Duke's inability to contain his anger - his grievances spill across line boundaries despite his attempt at composure.

IAMBIC PENTAMETER
The regular metre reflects the Duke's desire for order and control. When the rhythm breaks - as in the staccato "This grew; I gave commands;" - it signals moments of emotional intensity beneath his controlled exterior.

CAESURA
Strategic mid-line pauses ("Looking as if she were alive. I call") create moments of dramatic tension. The caesura after "alive" forces the reader to confront the reality of the Duchess's death before the Duke smoothly continues.

SINGLE STANZA
The poem is one continuous block - no stanza breaks, no pauses, no escape. This mirrors the Duke's monologue: once he starts talking, neither the envoy nor the reader can interrupt. The relentless flow reflects his absolute authority over the conversation and, metaphorically, over the women in his life.`,

  formAndStructureAr: `DRAMATIC MONOLOGUE (مونولوج درامي)
القصيدة كلها يتكلّم بها شخص واحد - الـDuke - لمستمع صامت (المبعوث). عبقرية Browning هي في الأشياء اللي يكشفها الـDuke بدون قصد: هو يقصد إنه يبيّن نفسه مثقّف ومنطقي، بس القارئ يلتقط فوراً إنه قاتل. هالشي يخلق dramatic irony مستمرّة في كل القصيدة.

RHYMING COUPLETS (HEROIC COUPLETS)
القصيدة تستخدم rhyming couplets (AABB) في iambic pentameter، بس الاستخدام المكثّف للـenjambment يخفي نمط القافية. هذا يعكس طريقة كلام الـDuke: يبدو إنه يحكي بشكل طبيعي وعفوي، بس البنية المحكمة تحت السطح تكشف سيطرته المحسوبة.

ENJAMBMENT
الأبيات تتسلسل بدون توقّف كثير ("she thanked / Men - good! but thanked / Somehow")، وهذا يعطي إحساس بالتدفّق الحواري. بس الـenjambment أيضاً يجسّد عجز الـDuke عن كبح غضبه - شكاويه تطفح عبر حدود الأبيات رغم محاولته يبيّن نفسه رزين.

IAMBIC PENTAMETER
الوزن المنتظم يعكس رغبة الـDuke في النظام والسيطرة. ولمّا يكسر الإيقاع - مثلاً في الجملة المتقطّعة "This grew; I gave commands;" - يكون هذا إشارة للحظات شدّة عاطفية تحت قشرته المتحكّمة.

CAESURA
التوقّفات الاستراتيجية في نص الأبيات ("Looking as if she were alive. I call") تخلق لحظات توتّر درامي. الـcaesura بعد "alive" تجبر القارئ يواجه حقيقة موت الـDuchess قبل ما الـDuke يكمّل كلامه بسلاسة.

SINGLE STANZA (مقطوعة واحدة)
القصيدة كتلة واحدة متّصلة - ولا فاصل بين المقاطع، ولا توقّف، ولا مهرب. هذا يعكس مونولوج الـDuke: لمّا يبدأ يحكي، لا المبعوث ولا القارئ يقدر يقاطعه. التدفّق المتواصل يعكس سلطته المطلقة على الحوار، وبشكل رمزي على النساء في حياته.`,

  keyQuotes: [
    {
      quote: "That's my last Duchess painted on the wall",
      analysis:
        'The possessive pronoun "my" establishes ownership from the very first line. "Last" is ambiguous - it could mean previous or final, hinting that there have been (or will be) others. The Duchess is reduced to a painting, an object on display.',
      themes: ['Power', 'Possession', 'Objectification'],
      analysisAr:
        'الضمير الملكي "my" من أول بيت يثبّت فكرة التملّك. وكلمة "last" غامضة - يحتمل إنها بمعنى السابقة، ويحتمل بمعنى الأخيرة، وهذا يلمّح إنه فيه دوقات قبلها وفيه أكيد دوقة بعدها. الـDuchess تختزل إلى لوحة، مجرّد قطعة معروضة.',
      themesAr: ['السلطة', 'التملّك', 'تشييء المرأة'],
    },
    {
      quote: 'The curtain I have drawn for you, but I',
      analysis:
        'The curtain symbolises the Duke\'s total control over access to the Duchess. In life he could not control who saw her or who she smiled at; in death, he has absolute power. The repetition of "I" emphasises his ego and authority.',
      themes: ['Power', 'Control', 'Jealousy'],
      analysisAr:
        'الستارة ترمز لسيطرة الـDuke المطلقة على الوصول للـDuchess. في حياتها كان عاجز يتحكّم بمين يشوفها ومين تبتسم له؛ بعد موتها، صار يملك السلطة المطلقة. تكرار "I" يأكّد على غروره وسلطته.',
      themesAr: ['السلطة', 'السيطرة', 'الغيرة'],
    },
    {
      quote: 'She had / A heart - how shall I say? - too soon made glad',
      analysis:
        'The parenthetical "how shall I say?" is performed hesitation - the Duke feigns delicacy while delivering a devastating criticism. The Duchess\'s warmth and generosity are reframed as moral failings. "Too soon" suggests she should have been harder to please.',
      themes: ['Jealousy', 'Patriarchy', 'Pride'],
      analysisAr:
        'العبارة الاعتراضية "how shall I say?" تردّد متكلّف - الـDuke يتظاهر باللباقة وهو يوجّه نقد قاتل. دفء الـDuchess وكرمها يعيد تأطيرهم كأنهم عيوب أخلاقية. وكلمة "too soon" تلمّح إنه كان يبي يصير إرضاؤها أصعب.',
      themesAr: ['الغيرة', 'السلطة الذكورية', 'الكبرياء'],
    },
    {
      quote:
        "She thanked men - good! but thanked / Somehow - I know not how - as if she ranked / My gift of a nine-hundred-years-old name / With anybody's gift",
      analysis:
        'The Duke\'s fury is that his aristocratic lineage - his entire identity - was not valued above all else. The compound modifier "nine-hundred-years-old" emphasises the weight he places on status. The Duchess\'s egalitarian spirit is, to him, an insult.',
      themes: ['Pride', 'Status', 'Patriarchy'],
      analysisAr:
        'غضب الـDuke سببه إن نسبه الأرستقراطي - اللي هو هويته كلها - ما اتحط فوق كل شي. الصفة المركّبة "nine-hundred-years-old" تأكّد على الوزن الكبير اللي يعطيه للمكانة الاجتماعية. روح الـDuchess المساواتية، عنده، إهانة شخصية.',
      themesAr: ['الكبرياء', 'المكانة', 'السلطة الذكورية'],
    },
    {
      quote: "Who'd stoop to blame / This sort of trifling?",
      analysis:
        '"Stoop" is the key word in the poem. The Duke refuses to lower himself to communicate his feelings to his wife - he considers conversation with her beneath his dignity. This refusal to "stoop" leads directly to her death.',
      themes: ['Pride', 'Power', 'Control'],
      analysisAr:
        'كلمة "stoop" مفتاح القصيدة. الـDuke يرفض إنه ينزل من قدره عشان يبلّغ زوجته بمشاعره - يعتبر إن مجرّد الحوار معاها أقل من كرامته. هذا الرفض هو السبب المباشر في موتها.',
      themesAr: ['الكبرياء', 'السلطة', 'السيطرة'],
    },
    {
      quote: 'I gave commands; / Then all smiles stopped together.',
      analysis:
        'The most chilling euphemism in GCSE literature. "Gave commands" distances the Duke from the act of murder - he did not kill her himself but ordered it done. "All smiles stopped" reduces her death to the silencing of her joy. The semicolons create a cold, staccato rhythm.',
      themes: ['Power', 'Violence', 'Control'],
      analysisAr:
        'أبشع كناية في منهج GCSE. عبارة "gave commands" تباعد الـDuke عن فعل القتل - هو ما قتلها بيده، أمر بقتلها. وعبارة "all smiles stopped" تختزل موتها إلى إسكات فرحها. الـsemicolons يخلقون إيقاع متقطّع بارد.',
      themesAr: ['السلطة', 'العنف', 'السيطرة'],
    },
    {
      quote: 'Notice Neptune, though, / Taming a sea-horse',
      analysis:
        'The final image is a metaphor for the Duke himself: like Neptune (god of the sea), he tames and subdues those beneath him. The sea-horse represents the Duchess - a beautiful, wild creature broken by a more powerful force. That the sculpture was "cast in bronze for me" shows art serving his ego.',
      themes: ['Power', 'Dominance', 'Possession'],
      analysisAr:
        'الصورة الأخيرة استعارة عن الـDuke نفسه: مثل Neptune (إله البحر)، هو يروّض ويُخضع كل من هم تحته. وحصان البحر يرمز للـDuchess - مخلوق جميل وحر تحطّمه قوة أكبر منه. وحقيقة إن التمثال "cast in bronze for me" تبيّن إن الفن نفسه يخدم غرور الـDuke.',
      themesAr: ['السلطة', 'الهيمنة', 'التملّك'],
    },
    {
      quote: "his fair daughter's self, as I avowed / At starting, is my object",
      analysis:
        "\"Object\" carries a sinister double meaning: it ostensibly means 'objective' or 'aim,' but it also implies the next wife will be another possession, another item in his collection. The cycle of ownership and potential destruction is set to repeat.",
      themes: ['Objectification', 'Patriarchy', 'Cyclical power'],
      analysisAr:
        'كلمة "object" تحمل معنى مزدوج شرّير: ظاهرياً معناها "هدف" أو "غاية"، بس باطنياً تلمّح إن الزوجة الجاية بتكون قطعة ثانية يملكها، عنصر إضافي في مجموعته. دورة التملّك واحتمال التدمير جاهزة عشان تتكرّر.',
      themesAr: ['تشييء المرأة', 'السلطة الذكورية', 'السلطة الدورية'],
    },
  ],
  languageDevices: [
    {
      device: 'Dramatic irony',
      example: 'which I have not',
      effect:
        "The Duke claims he lacks skill in speech, yet the entire poem is a masterclass in rhetorical manipulation. Browning creates dramatic irony: the reader sees through the Duke's false modesty to recognise a calculating, eloquent predator.",
      lineRef: 35,
      effectAr:
        'الـDuke يدّعي إنه يفتقر لمهارة الكلام، بس القصيدة كلها درس متقن في التلاعب البلاغي. Browning يخلق dramatic irony: القارئ يخترق تواضع الـDuke الزائف ويتعرّف على مفترس محسوب وفصيح.',
    },
    {
      device: 'Euphemism',
      example: 'I gave commands; / Then all smiles stopped together',
      effect:
        'The euphemism allows the Duke to confess to murder without ever saying the word. His aristocratic composure is maintained even as he describes the most violent act. The understatement makes the line more chilling, not less.',
      lineRef: 44,
      effectAr:
        'الكناية تخلّي الـDuke يعترف بالقتل بدون ما يقول كلمة "قتل" مرّة وحدة. رزانته الأرستقراطية تظل ثابتة وهو يوصف أبشع فعل عنف. والاستخفاف هذا يخلّي البيت أكثر رعباً، مو أقل.',
    },
    {
      device: 'Symbolism (the curtain)',
      example: 'The curtain I have drawn for you, but I',
      effect:
        "The curtain over the painting symbolises the Duke's control. In life, the Duchess's smiles were public and uncontrollable; in death, her image is hidden behind a curtain only the Duke can draw. The painting has given him the power he lacked in the marriage.",
      lineRef: 9,
      effectAr:
        'الستارة فوق اللوحة ترمز لسيطرة الـDuke. في حياة الـDuchess، ابتسامتها كانت علنية وما يقدر يتحكّم فيها؛ بعد موتها، صورتها مخفية وراء ستارة هو وحده يفتحها. اللوحة عطته السلطة اللي افتقدها في زواجه.',
    },
    {
      device: 'Metaphor (Neptune and the sea-horse)',
      example: 'Neptune... Taming a sea-horse',
      effect:
        'The bronze sculpture at the poem\'s end acts as a metaphor for the Duke\'s relationship with women. Like Neptune, he sees himself as a god who tames wild, beautiful creatures. The word "taming" implies violence disguised as control.',
      lineRef: 54,
      effectAr:
        'التمثال البرونزي في نهاية القصيدة يشتغل كاستعارة عن علاقة الـDuke بالنساء. مثل Neptune، يشوف نفسه كإله يروّض المخلوقات البرّية الجميلة. وكلمة "taming" تلمّح بعنف ملبّس بثوب السيطرة.',
    },
    {
      device: 'Possessive language',
      example: "That's my last Duchess... my object... for me",
      effect:
        'The poem is saturated with first-person possessive pronouns. The Duke defines everything in relation to himself - his wife, his art, his name. This linguistic pattern reveals a worldview in which people are property.',
      lineRef: 0,
      effectAr:
        'القصيدة مشبّعة بضمائر التملّك للمتكلّم. الـDuke يعرّف كل شي بالنسبة لنفسه - زوجته، فنّه، اسمه. هالنمط اللغوي يكشف نظرة للعالم تعتبر الناس فيها ممتلكات.',
    },
    {
      device: 'Enjambment',
      example: 'she thanked / Men - good! but thanked / Somehow',
      effect:
        "The enjambment across line breaks enacts the Duke's loss of composure. His anger overflows the neat couplet form, just as the Duchess's behaviour overflowed the boundaries he tried to impose. The tension between form and content mirrors his internal conflict.",
      lineRef: 30,
      effectAr:
        'الـenjambment عبر فواصل الأبيات يجسّد فقدان الـDuke لرزانته. غضبه يفيض من قالب الـcouplets المنظّم، تماماً مثل ما تصرّفات الـDuchess فاضت من الحدود اللي حاول يفرضها عليها. التوتّر بين الشكل والمحتوى يعكس صراعه الداخلي.',
    },
    {
      device: 'Caesura',
      example: 'Looking as if she were alive. I call',
      effect:
        'The mid-line full stop forces a pause that confronts the reader with the Duchess\'s death. The Duke\'s smooth continuation - "I call / That piece a wonder" - shows his chilling indifference. The caesura creates dramatic shock within his casual tone.',
      lineRef: 1,
      effectAr:
        'النقطة في نص البيت تفرض توقّف يواجه فيه القارئ حقيقة موت الـDuchess. واستمرار الـDuke بسلاسة - "I call / That piece a wonder" - يبيّن لامبالاته المرعبة. الـcaesura تخلق صدمة درامية داخل نبرته العادية.',
    },
    {
      device: 'Repetition ("stoop")',
      example: "Who'd stoop to blame... some stooping; and I choose / Never to stoop",
      effect:
        '"Stoop" appears three times, each use intensifying the Duke\'s refusal to communicate. The word reveals his fatal pride: he would rather kill his wife than lower himself to explain his feelings. The repetition makes his psychology inescapable.',
      lineRef: 33,
      effectAr:
        'كلمة "stoop" تطلع ثلاث مرات، وفي كل مرّة ترفع من مستوى رفض الـDuke للتواصل. الكلمة تكشف كبريائه القاتل: يفضّل يقتل زوجته على إنه ينزل من قدره ويشرح مشاعره. التكرار يخلّي القارئ ما يقدر يهرب من فهم نفسيّته.',
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'mld-1',
    question: 'What form is My Last Duchess written in?',
    type: 'multiple-choice',
    options: ['A sonnet', 'A dramatic monologue in rhyming couplets', 'Free verse', 'A ballad'],
    correctIndex: 1,
    explanation:
      'My Last Duchess is a dramatic monologue - a single speaker (the Duke) reveals his character to a silent listener. It uses rhyming couplets in iambic pentameter.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'mld-2',
    question: 'Who is the Duke speaking to in the poem?',
    type: 'multiple-choice',
    options: [
      'His dead wife',
      'An envoy arranging his next marriage',
      'A judge at a trial',
      'The sculptor of the painting',
    ],
    correctIndex: 1,
    explanation:
      'The Duke is speaking to an envoy (messenger) sent by the Count, whose daughter the Duke intends to marry next. The poem is essentially a negotiation for a new wife.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'mld-3',
    question: 'What does the curtain over the painting symbolise?',
    type: 'multiple-choice',
    options: [
      "The Duke's grief over his wife's death",
      "The Duke's absolute control - only he decides who sees her now",
      'The painting is damaged and needs protection',
      "The Duke's modesty about art",
    ],
    correctIndex: 1,
    explanation:
      "The curtain represents the Duke's possessive control. In life, he could not control who the Duchess smiled at. In death, he controls everything - only he draws the curtain and decides who sees her.",
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'mld-4',
    question: 'What happened to the last Duchess?',
    type: 'multiple-choice',
    options: [
      'She left the Duke for another man',
      "She is strongly implied to have been killed on the Duke's orders",
      'She died of natural illness',
      'She ran away to another country',
    ],
    correctIndex: 1,
    explanation:
      'The Duke says "I gave commands; / Then all smiles stopped together." This chilling euphemism strongly implies he had her killed because her friendliness to others wounded his pride.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'mld-5',
    question: 'What does the phrase "I gave commands; then all smiles stopped together" reveal?',
    type: 'multiple-choice',
    options: [
      'The Duke asked her politely to stop smiling',
      'The Duke coldly ordered her death - the euphemism makes him more chilling',
      'The Duchess agreed to be more serious',
      'The painting was completed',
    ],
    correctIndex: 1,
    explanation:
      'This is the poem\'s most sinister moment. The casual, euphemistic language ("gave commands") combined with the finality of "all smiles stopped" reveals a man who views murder as a simple administrative matter.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'mld-6',
    question: 'Why does Browning use enjambment and caesura throughout the poem?',
    type: 'multiple-choice',
    options: [
      'He was a careless writer',
      "They create a conversational flow while the caesura disrupts it, mirroring the Duke's controlled yet unstable nature",
      'They make the poem rhyme better',
      'They were common in Victorian poetry',
    ],
    correctIndex: 1,
    explanation:
      "Enjambment makes the Duke's speech flow naturally, but caesura creates unsettling pauses that hint at what he is concealing. The tension between flow and interruption mirrors the Duke's controlled exterior hiding violent impulses.",
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'mld-7',
    question:
      'What does the Duke\'s mention of his "nine-hundred-years-old name" reveal about his character?',
    type: 'multiple-choice',
    options: [
      'He is proud of his family but not arrogant',
      'He is obsessed with status, lineage, and social superiority',
      'He is interested in history as a hobby',
      'He is trying to impress the envoy with humour',
    ],
    correctIndex: 1,
    explanation:
      'The Duke values his aristocratic heritage above all else. The fact that the Duchess treated everyone equally - regardless of rank - was an intolerable insult to his sense of superiority.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'mld-8',
    question: 'When was My Last Duchess written, and what context is relevant?',
    type: 'multiple-choice',
    options: [
      '1842 - based loosely on the real Duke of Ferrara, Alfonso II, whose young wife died suspiciously',
      '1818 - during the Romantic period',
      '1914 - at the start of WWI',
      '1794 - during the French Revolution',
    ],
    correctIndex: 0,
    explanation:
      "Written in 1842, the poem is loosely based on Alfonso II, Duke of Ferrara, whose first wife Lucrezia de' Medici died aged 17 under suspicious circumstances. He then negotiated to marry the niece of a Count.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'mld-9',
    question: 'How does the final reference to Neptune "taming a sea-horse" function in the poem?',
    type: 'multiple-choice',
    options: [
      'It is an irrelevant detail about art',
      "It symbolises the Duke's desire to dominate and control, even nature - paralleling his treatment of the Duchess",
      'It shows the Duke is a generous art collector',
      "It represents the envoy's gift to the Duke",
    ],
    correctIndex: 1,
    explanation:
      "Neptune (god of the sea) taming a sea-horse mirrors the Duke's desire to control everything around him. The Duchess, like the sea-horse, was something natural and free that the Duke sought to dominate.",
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'mld-10',
    question:
      'Which poem from the Power and Conflict anthology offers the best comparison with My Last Duchess on the theme of controlling power?',
    type: 'multiple-choice',
    options: [
      'Exposure by Wilfred Owen',
      'Ozymandias by Percy Bysshe Shelley',
      'Bayonet Charge by Ted Hughes',
      'Poppies by Jane Weir',
    ],
    correctIndex: 1,
    explanation:
      'Both Ozymandias and My Last Duchess explore how powerful men use art to assert dominance. The Duke controls his wife through a portrait; Ozymandias through a statue. Both poems use irony to critique tyrannical power.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'My Last Duchess explores the abuse of power, male possessiveness, objectification of women, jealousy, and the relationship between art and control.',
    keyPoints: [
      'Power and control - the Duke treats his wife as a possession to be owned and displayed',
      'Jealousy - her friendliness to others enrages him because it diminishes his status',
      'Objectification - the Duchess is reduced to a "piece" of art behind a curtain',
      'Art as control - the painting gives the Duke the dominance he lacked in life',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      "Browning uses possessive pronouns, euphemism, dramatic irony, and carefully chosen verbs to reveal the Duke's controlling, violent nature through his own words.",
    keyPoints: [
      '"My last Duchess" - possessive pronoun treats her as property',
      '"I gave commands" - chilling euphemism for ordering her death',
      '"Who\'d stoop to blame... I choose / Never to stoop" - pride and refusal to communicate',
      "Neptune taming a sea-horse - symbolises the Duke's desire to dominate",
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "A dramatic monologue in rhyming couplets with iambic pentameter. The Duke's controlled verse form masks his violent psychology.",
    keyPoints: [
      'Dramatic monologue - the Duke unwittingly reveals his true nature to the listener',
      "Rhyming couplets - controlled form mirrors the Duke's controlled exterior",
      'Enjambment - conversational flow suggests the Duke is casual about horrifying things',
      'Caesura - disruptive pauses hint at what lurks beneath the polished surface',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Browning present the Duke as a controlling figure in My Last Duchess?',
  'Compare how power is presented in My Last Duchess and one other poem from the anthology.',
  "How does Browning use the dramatic monologue form to reveal the Duke's true character?",
]

/* ── Comparison poems ──────────────────────────────────────────── */

interface Comparison {
  poem: string
  link: string
  points: string[]
}

const comparisons: Comparison[] = [
  {
    poem: 'Ozymandias',
    link: '/revision/poetry/power-and-conflict/ozymandias',
    points: [
      'Both explore how powerful men use art to assert dominance - the Duke through his portrait collection, Ozymandias through his statue.',
      "Ozymandias shows power destroyed by time; the Duke's power remains intact, making his poem arguably more disturbing.",
      "Both use irony: Ozymandias's inscription is undercut by the desert; the Duke's self-presentation is undercut by what he reveals.",
      'Shelley critiques tyranny from the outside; Browning lets the tyrant speak, exposing him through his own words.',
    ],
  },
  {
    poem: "Porphyria's Lover",
    link: '/revision/poetry/love-and-relationships/porphyrias-lover',
    points: [
      'Both are Browning dramatic monologues in which a male speaker kills a woman he claims to love.',
      'The Duke kills through social power ("I gave commands"); Porphyria\'s lover kills with his own hands, making the violence more visceral.',
      'Both speakers are motivated by a desire to possess and freeze a moment of devotion - the Duke through a painting, the lover through murder.',
      "Porphyria's lover shows visible madness; the Duke's chilling rationality makes him arguably more frightening.",
    ],
  },
  {
    poem: 'The Charge of the Light Brigade',
    link: '/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade',
    points: [
      'Both explore the consequences of unchecked authority - the Duke\'s commands kill his wife; the military "blunder" kills six hundred soldiers.',
      "Tennyson critiques those who give orders from a distance; Browning's Duke is himself the one giving lethal commands.",
      "The Light Brigade's soldiers are celebrated; the Duchess is silenced and forgotten - both poems question who holds power and who suffers.",
      'Both use euphemism to distance the powerful from violence: "someone had blundered" and "I gave commands."',
    ],
  },
]

/* ── Page component ────────────────────────────────────────────── */

export default function MyLastDuchessPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="My Last Duchess by Robert Browning - Analysis & Annotations"
        description="Line-by-line analysis of My Last Duchess with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'My Last Duchess',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/my-last-duchess',
          },
        ]}
      />
      {/* Navigation */}
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
            <h1 className="text-heading-lg font-heading text-foreground">My Last Duchess</h1>
            <p className="text-body-sm text-muted-foreground">
              Robert Browning &middot; Power and Conflict anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              AQA
            </Badge>
          </div>
        </div>
      </div>

      {/* Interactive poem viewer */}
      <StudyTools
        textName="My Last Duchess"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="My Last Duchess"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={poemData} />

      {/* Comparison section */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          {t('rev.poetry.shared.compare_with_other')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <div key={c.poem} className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">{c.poem}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-muted-foreground"
                  render={<Link href={c.link} />}
                >
                  Study &rarr;
                </Button>
              </div>
              <ul className="space-y-2">
                {c.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-muted-foreground pl-3 border-l-2 border-border"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Public domain &mdash; quotations from My Last Duchess by Robert Browning reproduced freely.
      </p>
    </div>
  )
}
