'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

import { CourseJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'

/* ── Poem data ─────────────────────────────────────────────────────── */

const disabled: PoemData = {
  title: 'Disabled',
  poet: 'Wilfred Owen',
  // Printed as the Eduqas anthology for examination from 2027 prints it (WJEC 2024,
  // ISBN 978-1-86085-774-4, pages 10 and 11), read from the PDF's text layer on 10 October
  // 2026 and checked against images of both pages. Its words are those of Owen's first
  // collected Poems (1920; Project Gutenberg #1034, a transcript of the 1921 reprint),
  // which has no "all their guilt, / And Austria's" (Pearson's text, on the IGCSE page for
  // this poem, has them). Its stanzas differ from that edition's after line 35: the
  // anthology runs "Some cheered him home" on from "drums and cheers." and begins a stanza
  // at "Now, he will spend". The page turns after "a god in kilts.", where a stanza break
  // would leave no gap to see: this page begins a stanza at "That's why", as the 1920
  // edition does, and says so above the poem. No note here counts the poem's stanzas as
  // certain. Owen's dates, service and death, and the words of his Preface, are from that
  // edition. scripts/check-quotations.mjs lists this page in OTHER_PRINTINGS, since the
  // held text of the poem is Pearson's.
  lines: [
    {
      text: 'He sat in a wheeled chair, waiting for dark,',
      annotations: [
        {
          type: 'Opening image',
          note: 'The poem opens on stillness: a man who cannot walk, "waiting for dark". The day is ending, and so, the poem suggests, is his life’s hope.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'And shivered in his ghastly suit of grey,' },
    {
      text: 'Legless, sewn short at elbow. Through the park',
      annotations: [
        {
          type: 'Physical loss',
          note: '"Legless, sewn short at elbow" states his injuries flatly. He has no legs, and he has lost his arm below the elbow, or both arms: the poem does not say which. The surgical verb "sewn" makes his body something done to by others.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Voices of boys rang saddening like a hymn,',
      annotations: [
        {
          type: 'Simile',
          note: 'The boys’ voices ring "saddening like a hymn": their play sounds like church music, the music of funerals, because he can never join it again.',
          color: '#10b981',
        },
      ],
    },
    { text: 'Voices of play and pleasure after day,' },
    { text: 'Till gathering sleep had mothered them from him.' },
    { text: '' },
    { text: 'About this time Town used to swing so gay' },
    {
      text: 'When glow-lamps budded in the light-blue trees',
      annotations: [
        {
          type: 'Memory of beauty',
          note: '"glow-lamps budded in the light-blue trees": the lamps of the old town evenings are described as flowers in spring, an image of beauty and youth that the present cannot match.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'And girls glanced lovelier as the air grew dim,' },
    {
      text: '—In the old times, before he threw away his knees.',
      annotations: [
        {
          type: 'Understatement',
          note: '"before he threw away his knees" is shockingly casual. "threw away" sounds careless, as if he wasted something he chose to spend; the dash that opens the line marks the drop into memory.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'Now he will never feel again how slim' },
    { text: 'Girls’ waists are, or how warm their subtle hands,' },
    {
      text: 'All of them touch him like some queer disease.',
      annotations: [
        {
          type: 'Rejection',
          note: 'Girls now "touch him like some queer disease". "queer" here means strange; the touch that once meant desire now means caution, even disgust.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    { text: 'There was an artist silly for his face,' },
    {
      text: 'For it was younger than his youth, last year.',
      annotations: [
        {
          type: 'Lost youth',
          note: 'His face "was younger than his youth, last year". Now, a year later, "he is old". War has aged him decades in a single year.',
          color: '#10b981',
        },
      ],
    },
    { text: 'Now he is old; his back will never brace;' },
    { text: 'He’s lost his colour very far from here,' },
    {
      text: 'Poured it down shell-holes till the veins ran dry,',
      annotations: [
        {
          type: 'Metaphor',
          note: 'His blood is his "colour", "Poured" down shell-holes until "the veins ran dry". The image makes the wound a draining of his whole life.',
          color: '#10b981',
        },
      ],
    },
    { text: 'And half his lifetime lapsed in the hot race,' },
    { text: 'And leap of purple spurted from his thigh.' },
    {
      text: 'One time he liked a bloodsmear down his leg,',
      annotations: [
        {
          type: 'Contrast',
          note: 'After football, a "bloodsmear down his leg" was a badge of pride, and he was "carried shoulder-high". War’s blood brings no such glory.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'After the matches carried shoulder-high.' },
    {
      text: 'It was after football, when he’d drunk a peg,',
      annotations: [
        {
          type: 'Recruiting culture',
          note: 'He joined "after football, when he’d drunk a peg": a peg is a measure of spirits. The decision was casual, half-drunk, made on a whim.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'He thought he’d better join. He wonders why ...' },
    {
      text: 'Someone had said he’d look a god in kilts.',
      annotations: [
        {
          type: 'Vanity',
          note: 'The reason was vanity: "Someone had said he’d look a god in kilts". Kilts are the uniform of the Scottish regiments; he joined for how he would look.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    { text: 'That’s why; and maybe, too, to please his Meg,' },
    { text: 'Aye, that was it, to please the giddy jilts,' },
    { text: 'He asked to join. He didn’t have to beg;' },
    {
      text: 'Smiling they wrote his lie; aged nineteen years.',
      annotations: [
        {
          type: 'Irony',
          note: '"Smiling they wrote his lie": the recruiters wrote down "aged nineteen years" with a smile, as if they knew it was a lie and did not care. The army wanted him, whatever his age.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'Germans he scarcely thought of; and no fears' },
    {
      text: 'Of Fear came yet. He thought of jewelled hilts',
      annotations: [
        {
          type: 'Glamour of war',
          note: 'He thought of "jewelled hilts / For daggers in plaid socks", of salutes, leave and pay: the trappings of soldiering, not the fighting. Even "Fear" had not yet occurred to him.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'For daggers in plaid socks; of smart salutes;' },
    { text: 'And care of arms; and leave; and pay arrears;' },
    { text: 'Esprit de corps; and hints for young recruits.' },
    { text: 'And soon, he was drafted out with drums and cheers.' },
    {
      text: 'Some cheered him home, but not as crowds cheer Goal.',
      annotations: [
        {
          type: 'Muted homecoming',
          note: '"Some cheered him home, but not as crowds cheer Goal": the cheers for a wounded man are fewer and quieter than those for a goal at a football match.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'Only a solemn man who brought him fruits' },
    { text: 'Thanked him; and then inquired about his soul.' },
    { text: '' },
    {
      text: 'Now, he will spend a few sick years in Institutes,',
      annotations: [
        {
          type: 'Institutions',
          note: '"a few sick years in Institutes": his future is short and run by others. "do what things the rules consider wise" takes away his choices.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'And do what things the rules consider wise,' },
    { text: 'And take whatever pity they may dole.' },
    { text: 'To-night he noticed how the women’s eyes' },
    {
      text: 'Passed from him to the strong men that were whole.',
      annotations: [
        {
          type: 'Rejection',
          note: 'The women’s eyes pass over him "to the strong men that were whole". He is not even looked at now; "whole" marks what he no longer is.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'How cold and late it is! Why don’t they come' },
    {
      text: 'And put him into bed? Why don’t they come?',
      annotations: [
        {
          type: 'Ending',
          note: 'The poem ends with a repeated question, "Why don’t they come?" Like a small child, he must wait to be put to bed: helpless, cold and alone.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `<p><strong>Wilfred Owen</strong> (1893-1918) was born in Oswestry, in Shropshire. He was commissioned into the Manchester Regiment and served in France from December 1916 until June 1917, when he was sent home. He was treated for shell shock at Craiglockhart War Hospital in Edinburgh, where he met the poet Siegfried Sassoon.</p>
<p>Owen went back to the Western Front in 1918 and won the Military Cross. He was killed on 4 November 1918, getting his men across the Sambre Canal, a week before the war ended. Few of his poems were published in his lifetime; his <em>Poems</em>, put together by Sassoon, appeared in 1920. Owen’s Preface to them says: "The Poetry is in the pity."</p>
<p><em>Disabled</em> is about one of the war’s wounded, home again. In the British Army of the First World War a soldier had to be nineteen to serve overseas, so the "lie" the recruiters wrote down, "aged nineteen years", means he was younger than that when he joined.</p>`,

  contextAr: `<p><strong>Wilfred Owen</strong> (1893-1918) انولد في Oswestry في مقاطعة Shropshire. صار ضابط في Manchester Regiment وخدم في فرنسا من ديسمبر 1916 لين يونيو 1917، لمّا رجّعوه البلد. وتعالج من صدمة القذائف (shell shock) في مستشفى Craiglockhart الحربي في Edinburgh، وهناك تعرّف على الشاعر Siegfried Sassoon.</p>
<p>رجع Owen للجبهة الغربية سنة 1918 وحصل على وسام Military Cross. وانقتل في 4 نوفمبر 1918 وهو يعبّر رجاله قناة Sambre، قبل نهاية الحرب بأسبوع. وقليل من قصائده انتشرت في حياته؛ وديوانه <em>Poems</em>، اللي جمعه Sassoon، طلع سنة 1920. وفي المقدّمة (Preface) كتب Owen: "The Poetry is in the pity."</p>
<p>قصيدة <em>Disabled</em> عن واحد من جرحى الحرب، راجع للبيت. وفي الجيش البريطاني وقت الحرب العالمية الأولى، كان لازم الجندي يكون عمره تسعطعش عشان يخدم برّا البلد، فالـ"lie" اللي كتبوه المجنّدين، "aged nineteen years"، يعني إنه كان أصغر من كذا لمّا انضم.</p>`,

  summary: `STANZA 1: A young soldier who has lost both legs, and an arm or both arms below the elbow ("sewn short at elbow"), sits in a wheelchair in a park at dusk, in his "ghastly suit of grey", listening to boys at play until sleep gathers them away from him.

STANZA 2: He remembers evenings in town before the war, when lamps glowed in the trees and girls looked lovelier as night fell, "before he threw away his knees". Now he will never again feel a girl’s waist or warm hands; they all touch him "like some queer disease".

STANZA 3: Last year an artist was "silly for his face", it looked so young; now he is old. He lost his blood, "his colour", far from home, and half his life with it. Once he was proud of a "bloodsmear down his leg" from football. After a match, having "drunk a peg", he decided to join up, because someone said he would "look a god in kilts".

STANZA 4: That, and the wish to please the girls, is why he joined. Nobody made him beg, and the recruiters, smiling, wrote down his lie about his age. He thought of daggers, salutes, leave and pay, not of the Germans or of fear. He left to "drums and cheers"; fewer cheered him home, and only "a solemn man" brought him fruit and asked about his soul.

STANZA 5: Now he faces "a few sick years in Institutes", obeying rules and taking pity. Tonight the women’s eyes passed over him to men who were "whole". Cold and waiting to be put to bed, he asks twice: "Why don’t they come?"`,

  summaryAr: `المقطع 1: جندي شاب فقد رجوله الثنتين، وذراع أو الذراعين من تحت الكوع ("sewn short at elbow")، قاعد على كرسي متحرّك في حديقة وقت الغروب، لابس "ghastly suit of grey"، ويسمع أولاد يلعبون لين النوم يلمّهم ويبعدهم عنه.

المقطع 2: يتذكّر أمسيات البلد قبل الحرب، لمّا الفوانيس تلمع بين الشجر والبنات يحلون أكثر مع نزول الليل، "before he threw away his knees". والحين ما راح يحس مرة ثانية بخصر بنت أو بدفا يدها؛ كلهم يلمسونه "like some queer disease".

المقطع 3: السنة اللي طافت كان في رسّام "silly for his face"، من كثر ما كان وجهه صغير؛ والحين صار شايب. خسر دمّه، "his colour"، بعيد عن البيت، وخسر معاه نص عمره. كان مرة يفتخر بـ"bloodsmear down his leg" من الكورة. وبعد مباراة، وهو "drunk a peg"، قرّر يتطوّع، لأن واحد قال له إنه بيطلع "a god in kilts".

المقطع 4: هذا، والرغبة إنه يعجب البنات، هو سبب انضمامه. محد خلّاه يترجّى، والمجنّدين كتبوا كذبته عن عمره وهم يبتسمون. فكّر في الخناجر والتحيات والإجازات والراتب، مو في الألمان ولا في الخوف. طلع على "drums and cheers"؛ وقلّة اللي صفّقوا له وهو راجع، وبس "a solemn man" جاب له فاكهة وسأله عن روحه.

المقطع 5: والحين قدّامه "a few sick years in Institutes"، يطيع القوانين وياخذ الشفقة. والليلة عيون النساء عدّت عنه للرجال اللي هم "whole". بردان وينتظر أحد يحطّه في السرير، ويسأل مرتين: "Why don’t they come?"`,

  formAndStructure: `FORM: Forty-five lines in stanzas of uneven length: 6, 7, 12, 13 and 7 lines as printed here (see the note above the poem about "That’s why"). The stanzas follow the man’s thoughts rather than a set pattern.

METRE: Mostly iambic pentameter, about ten syllables to a line, but loosened. Some lines stretch to twelve syllables, as memory runs on: "—In the old times, before he threw away his knees."

RHYME: The poem rhymes, but irregularly. Rhymes return at uneven distances, some many lines apart ("Goal", "soul", "dole", "whole"), and the poem ends by repeating a word instead of rhyming: "Why don’t they come?"

TIME: The poem moves back and forth between present and past: the wheelchair at dusk, the town "In the old times", the artist "last year", the football match, joining up, coming home, and the "few sick years" ahead. The shifts follow his memory, which keeps returning to what he has lost.

FRAME: It begins "waiting for dark" and ends with "How cold and late it is!" The day closes as it began, in waiting.

VOICE: The third person ("He", "him") keeps the man at a distance, as the people around him do, yet phrases such as "Aye, that was it" and "He thought he’d better join" catch his own way of speaking.`,

  formAndStructureAr: `الشكل: خمسة وأربعين بيت في مقاطع أطوالها مو متساوية: 6 و7 و12 و13 و7 أبيات زي ما هي مطبوعة هنا (شوف الملاحظة فوق القصيدة عن "That’s why"). المقاطع تمشي ورا أفكار الرجل، مو ورا نمط ثابت.

الوزن: أغلبه iambic pentameter، تقريباً عشر مقاطع في البيت، بس مرخي. بعض الأبيات تمتد لاثنعش مقطع، كأن الذاكرة تسترسل: "—In the old times, before he threw away his knees."

القافية: القصيدة مقفّاة، بس بشكل غير منتظم. القوافي ترجع على مسافات مختلفة، بعضها بعد أبيات كثيرة ("Goal" و"soul" و"dole" و"whole")، والقصيدة تنتهي بتكرار كلمة بدل القافية: "Why don’t they come?"

الزمن: القصيدة تروح وترجع بين الحاضر والماضي: الكرسي المتحرّك وقت الغروب، والبلد "In the old times"، والرسّام "last year"، ومباراة الكورة، والتطوّع، والرجعة للبيت، و"few sick years" اللي قدّام. والانتقالات تمشي مع ذاكرته، اللي ما تبطّل ترجع لللي خسره.

الإطار: تبدأ بـ"waiting for dark" وتنتهي بـ"How cold and late it is!" اليوم ينتهي مثل ما بدأ: بالانتظار.

الصوت: ضمير الغايب ("He" و"him") يخلّي الرجل على مسافة، مثل ما يسوّون الناس اللي حواليه، بس عبارات مثل "Aye, that was it" و"He thought he’d better join" تمسك طريقته هو في الكلام.`,

  keyQuotes: [
    {
      quote: 'He sat in a wheeled chair, waiting for dark',
      analysis:
        'The opening shows a man who can only sit and wait. "waiting for dark" is literal, the end of the day, and suggests a life with nothing left to wait for but its end.',
      themes: ['Disability', 'Isolation', 'Time'],
      analysisAr:
        'البداية تورّينا رجل كل اللي يقدر عليه إنه يقعد وينتظر. "waiting for dark" حرفياً نهاية اليوم، وتوحي بعمر ما بقى فيه شي ينتظره غير نهايته.',
      themesAr: ['الإعاقة', 'العزلة', 'الزمن'],
    },
    {
      quote: 'Legless, sewn short at elbow.',
      analysis:
        'Blunt and clinical. The adjective and the surgical verb list what has been done to his body without comment, and the full stop halfway through the line stops the reader as the injuries stopped him.',
      themes: ['Disability', 'War', 'The body'],
      analysisAr:
        'مباشرة وباردة مثل تقرير طبّي. الصفة والفعل الجراحي يعدّدون اللي صار لجسمه بدون تعليق، والنقطة في نص البيت توقّف القارئ مثل ما الإصابات وقّفته.',
      themesAr: ['الإعاقة', 'الحرب', 'الجسد'],
    },
    {
      quote: 'before he threw away his knees',
      analysis:
        'A shocking understatement. "threw away" sounds careless, as if he wasted his knees himself, which hints at his own regret: he chose to join up, for reasons he now finds hard to explain.',
      themes: ['Loss', 'Regret', 'Youth'],
      analysisAr:
        'تهوين صادم. "threw away" تبان كأنها إهمال، كأنه هو اللي ضيّع ركبه بنفسه، وهذا يلمّح لندمه: هو اختار يتطوّع، لأسباب صار صعب عليه يشرحها الحين.',
      themesAr: ['الفقد', 'الندم', 'الشباب'],
    },
    {
      quote: 'All of them touch him like some queer disease.',
      analysis:
        'Girls’ hands were once "warm" to him; now their touch is wary, as if he were "some queer disease". "queer", meaning strange, makes his body something to be avoided. The loss of desire and love is as cruel as the loss of his limbs.',
      themes: ['Rejection', 'Isolation', 'Masculinity'],
      analysisAr:
        'أيادي البنات كانت "warm" عليه؛ والحين لمستهم فيها حذر، كأنه "some queer disease". وكلمة "queer"، يعني غريب، تخلّي جسمه شي ينتجنّب. وخسارة الحب والرغبة قاسية مثل خسارة أطرافه.',
      themesAr: ['الرفض', 'العزلة', 'الرجولة'],
    },
    {
      quote: 'Poured it down shell-holes till the veins ran dry',
      analysis:
        'His blood, "his colour", is poured away as if it were a liquid to be spent. "till the veins ran dry" makes the wound a draining of life itself, given "very far from here".',
      themes: ['War', 'Sacrifice', 'The body'],
      analysisAr:
        'دمّه، "his colour"، ينسكب كأنه سائل ينصرف. و"till the veins ran dry" تخلّي الجرح استنزاف للحياة نفسها، صار "very far from here".',
      themesAr: ['الحرب', 'التضحية', 'الجسد'],
    },
    {
      quote: 'Someone had said he’d look a god in kilts.',
      analysis:
        'The real reason he joined: vanity. A careless remark, by "Someone" unnamed, and the thought of looking like "a god" in a Scottish regiment’s kilt were enough. Owen shows how lightly a young man could be led to war.',
      themes: ['Vanity', 'Recruitment', 'Youth'],
      analysisAr:
        'السبب الحقيقي اللي خلّاه ينضم: الغرور. كلمة عابرة من "Someone" مجهول، وفكرة إنه بيطلع "a god" في الـkilt حق الأفواج الاسكتلندية، كانت كافية. Owen يبيّن قدّيش كان سهل يسحبون شاب للحرب.',
      themesAr: ['الغرور', 'التجنيد', 'الشباب'],
    },
    {
      quote: 'Smiling they wrote his lie; aged nineteen years.',
      analysis:
        'The recruiters wrote the lie down with a smile: Owen suggests they knew he was under age and did not care. He accuses the system as well as the boy: the army wanted soldiers more than the truth.',
      themes: ['Recruitment', 'Responsibility', 'Youth'],
      analysisAr:
        'المجنّدين كتبوا الكذبة وهم يبتسمون: Owen يلمّح إنهم كانوا يدرون إنه أصغر من السن المطلوب وما همّهم. ويتّهم النظام مثل ما يتّهم الولد: الجيش كان يبي جنود أكثر من الحقيقة.',
      themesAr: ['التجنيد', 'المسؤولية', 'الشباب'],
    },
    {
      quote: 'Passed from him to the strong men that were whole.',
      analysis:
        'The women’s eyes rest on him only to pass on. "whole" is the cruellest word: it names what he is not, and the line itself passes over him as their eyes do.',
      themes: ['Rejection', 'Masculinity', 'Isolation'],
      analysisAr:
        'عيون النساء توقف عليه بس عشان تعدّي. وكلمة "whole" أقسى كلمة: تسمّي الشي اللي هو مو هو، والبيت نفسه يعدّي عنه مثل ما تعدّي عيونهم.',
      themesAr: ['الرفض', 'الرجولة', 'العزلة'],
    },
  ],

  // Each card's lineRef is the row of `lines` where its example begins, stanza breaks counted
  // (a-device-card-cites-the-line-it-quotes.test.tsx).
  languageDevices: [
    {
      device: 'Simile',
      example: 'Voices of boys rang saddening like a hymn',
      effect:
        'Happy sounds become sad to him. Comparing the boys’ voices to a hymn, church music often sung at funerals, connects their play with loss, because he can never play again.',
      lineRef: 3,
      effectAr:
        'الأصوات الفرحانة تصير حزينة بالنسبة له. وتشبيه أصوات الأولاد بالـhymn، ترانيم الكنيسة اللي كثير تنقال في الجنايز، يربط لعبهم بالفقد، لأنه ما راح يلعب مرة ثانية.',
    },
    {
      device: 'Understatement',
      example: 'before he threw away his knees',
      effect:
        'The casual verb makes a terrible injury sound like a careless act. The effect is bitter: it hints that he blames himself, and that he gave his body away cheaply.',
      lineRef: 10,
      effectAr:
        'الفعل العادي يخلّي إصابة رهيبة تبان كأنها تصرّف مهمل. والأثر مرّ: يلمّح إنه يلوم نفسه، وإنه عطى جسمه برخص.',
    },
    {
      device: 'Metaphor',
      example:
        'He’s lost his colour very far from here, / Poured it down shell-holes till the veins ran dry',
      effect:
        'His blood is "his colour": the healthy colour of a young face, lost with the blood itself. "Poured" makes it a waste, spent in shell-holes far from home.',
      lineRef: 18,
      effectAr:
        'دمّه هو "his colour": لون الوجه الشاب الصحّي، اللي راح مع الدم نفسه. والفعل "Poured" يخلّيه هدر، انصرف في حفر القذائف بعيد عن البيت.',
    },
    {
      device: 'Contrast',
      example: 'One time he liked a bloodsmear down his leg',
      effect:
        'Blood from football was a badge of honour and won him a ride "shoulder-high". Blood from war has cost him his legs. The contrast shows how he imagined war as another game.',
      lineRef: 22,
      effectAr:
        'الدم من الكورة كان وسام فخر وخلّاهم يشيلونه "shoulder-high". والدم من الحرب كلّفه رجوله. والتضاد يبيّن كيف كان يتخيّل الحرب لعبة ثانية.',
    },
    {
      device: 'Listing',
      example: 'He thought of jewelled hilts / For daggers in plaid socks; of smart salutes',
      effect:
        'The list, broken up by semicolons, runs through the glamour of soldiering: daggers, salutes, "leave", "pay arrears", "Esprit de corps". None of it is about fighting, which is the point.',
      lineRef: 33,
      effectAr:
        'القائمة، المقطّعة بفواصل منقوطة، تمر على بريق الحياة العسكرية: خناجر، وتحيات، و"leave"، و"pay arrears"، و"Esprit de corps". ولا شي منها عن القتال، وهذا هو المقصود.',
    },
    {
      device: 'Irony',
      example: 'Some cheered him home, but not as crowds cheer Goal.',
      effect:
        'He went off "with drums and cheers"; he comes home to a few cheers, fewer than a goal would win. The football image returns to show how little his sacrifice is valued.',
      lineRef: 38,
      effectAr:
        'طلع "with drums and cheers"؛ ورجع على شوية تصفيق، أقل من اللي ينطى لهدف في مباراة. وصورة الكورة ترجع عشان تبيّن قدّيش تضحيته ما لها قيمة عندهم.',
    },
    {
      device: 'Repetition',
      example: 'Why don’t they come / And put him into bed? Why don’t they come?',
      effect:
        'The repeated question ends the poem without an answer. He depends on others even to go to bed, like a child, and the repetition makes his helplessness and loneliness the last thing we hear.',
      lineRef: 47,
      effectAr:
        'السؤال المكرّر ينهي القصيدة بدون جواب. هو معتمد على غيره حتى عشان يرقد، مثل الطفل، والتكرار يخلّي عجزه ووحدته آخر شي نسمعه.',
    },
  ],
}

export default function DisabledEduqasPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Disabled by Wilfred Owen - Analysis & Annotations"
        description="Disabled by Wilfred Owen, printed as the Eduqas anthology prints it, with line-by-line study notes and themes for Eduqas GCSE English Literature."
      />

      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/revision/poetry/eduqas" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('rev.poetry.shared.back_to_eduqas_poetry')}
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Disabled</h1>
            <p className="text-body-sm text-muted-foreground">
              Wilfred Owen (published 1920) &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-lg bg-blue-500/5 border border-blue-500/10 p-3">
        <Info className="mt-0.5 size-4 shrink-0 text-blue-400" />
        <p className="text-caption text-muted-foreground">
          <strong className="text-foreground">About the text:</strong> Eduqas prints this poem
          across two pages, and the page turns after “a god in kilts.” A stanza break at a page turn
          leaves no gap to see, so the anthology’s layout cannot show whether a new stanza begins at
          “That’s why”. This page begins one there, as the first edition of Owen’s <em>Poems</em>{' '}
          (1920) does. Every other line and stanza break here is the anthology’s.
        </p>
      </div>

      <StudyTools
        textName="Disabled"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />

      <InteractivePoemViewer poem={disabled} />

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Disabled by Wilfred Owen is in the public domain. The poem is printed as it appears in the
        WJEC Eduqas GCSE (9-1) English Literature Poetry Anthology (C720), for first assessment in
        2027, pages 10 and 11.
      </footer>
    </div>
  )
}
