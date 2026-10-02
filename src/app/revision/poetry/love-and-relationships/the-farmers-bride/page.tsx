'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
/* ── Poem data ─────────────────────────────────────────────────────── */

const farmersBridePoem: PoemData = {
  title: "The Farmer's Bride",
  poet: 'Charlotte Mew',
  // Printed as AQA's anthology prints it in the book students are given (Love and
  // Relationships; Past and present: poetry anthology, Version 1.0 June 2015, pp. 13-14),
  // checked line by line against it on 2 October 2026; AQA's teacher sample
  // (AQA-8702-TG-POEMS.PDF, pp. 9-10) prints the same text. Until then this page
  // printed no line of the poem: an audit (item I5) found that the text it carried did not
  // match Mew's, and replaced it with a summary of each section, with paraphrase in place of
  // the key quotations and device examples. AQA's words are those of the Poetry Bookshop
  // edition (1921; Project Gutenberg 71305). Its marks differ in places, and the page follows
  // AQA: no full stop after "winter's day" (line 6), "Should" for "'Should" (line 11), single
  // quotation marks and spaced dashes. AQA's page break falls between the last two stanzas;
  // the break there is the 1921 edition's. AQA sets "I've" in line 29 in italics, which a
  // row cannot show, so the note on that line says so.
  lines: [
    {
      text: 'Three Summers since I chose a maid,',
      annotations: [
        {
          type: 'Possessive language',
          note: '"I chose a maid": the farmer is the only one who acts. The marriage is his decision, and "maid" means both a young unmarried woman and a servant.',
          color: '#f59e0b',
        },
        {
          type: 'Time',
          note: '"Three Summers" sets the clock: three years married, and nothing has changed. The poem goes on to measure time by the seasons, ending in winter.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "Too young maybe – but more's to do",
      annotations: [
        {
          type: 'Self-justification',
          note: '"Too young maybe" is an admission he brushes aside at once: the dash turns from her age to the farm work. He half knows something was wrong.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'At harvest-time than bide and woo.',
      annotations: [
        {
          type: 'Work over courtship',
          note: 'Courtship ("bide and woo") loses to the work of "harvest-time". To the farmer, a wife is part of running the farm.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'When us was wed she turned afraid',
      annotations: [
        {
          type: 'Dialect',
          note: '"When us was wed", with "us" for "we", is the first mark of the farmer\'s rural dialect. The voice is plain and ordinary, which makes what it tells more unsettling.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Of love and me and all things human;',
      annotations: [
        {
          type: 'Polysyndeton',
          note: 'The repeated "and" widens her fear from "love" to "me" to "all things human". He puts himself in the middle of the list without asking whether he is its cause.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "Like the shut of a winter's day",
      annotations: [
        {
          type: 'Simile',
          note: 'Her smile goes out like the close of a winter\'s day. "Shut" is abrupt and final, and winter brings cold and early dark.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "Her smile went out, and 'twasn't a woman –",
      annotations: [
        {
          type: 'Dehumanisation',
          note: '"\'twasn\'t a woman": it was not a woman. Because she does not behave as he expects a wife to, he decides she is hardly a woman at all.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'More like a little frightened fay.',
      annotations: [
        {
          type: 'Fairy imagery',
          note: 'A "fay" is a fairy. The image is tender ("little"), but it also makes her something other than human: wild, and out of reach.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'One night, in the Fall, she runned away.',
      annotations: [
        {
          type: 'Dialect / season',
          note: '"Runned" for "ran" keeps the dialect, and "the Fall" (autumn) is the first of the seasons that mark the poem\'s time. Her escape takes one plain line.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: '' },
    {
      text: "'Out 'mong the sheep, her be,' they said,",
      annotations: [
        {
          type: 'The community',
          note: '"They said": the neighbours join in. "Her be" (she is) is their dialect too, and the village speaks with one voice.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Should properly have been abed;',
      annotations: [
        {
          type: 'Expectation',
          note: 'What a wife "should properly" do is the village\'s measure of her. Their rules, not her fear, decide what is normal.',
          color: '#ef4444',
        },
      ],
    },
    { text: "But sure enough she wasn't there" },
    {
      text: 'Lying awake with her wide brown stare.',
      annotations: [
        {
          type: 'Animal imagery',
          note: 'Even while describing her absence, he pictures her usual state: lying awake, staring wide-eyed like a frightened animal. She cannot sleep in his house.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'So over seven-acre field and up-along across the down',
      annotations: [
        {
          type: 'Line length',
          note: 'The longest line in the poem stretches across the land as the chase does. Local names ("seven-acre field", "the down") make it a real hunt over real fields.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'We chased her, flying like a hare',
      annotations: [
        {
          type: 'Hunting imagery',
          note: 'She runs "like a hare" and they chase her: her husband and the neighbours become hunters, and she becomes the quarry.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Before our lanterns. To Church-Town',
      annotations: [
        {
          type: 'Caesura',
          note: 'The full stop in the middle of the line halts the chase for a moment before he tells how it ended.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'All in a shiver and a scare',
      annotations: [
        {
          type: 'Fear',
          note: 'He sees her terror ("a shiver and a scare") and tells it without pity. Seeing it does not stop him.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'We caught her, fetched her home at last',
      annotations: [
        {
          type: 'Capture',
          note: '"Caught" and "fetched" are verbs for animals and objects. "Home at last" is his relief, not hers.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And turned the key upon her, fast.',
      annotations: [
        {
          type: 'Imprisonment',
          note: 'He locks her in. "Fast" means both quickly and firmly shut, and the stanza ends, like the door, with her inside.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    {
      text: 'She does the work about the house',
      annotations: [
        {
          type: 'Present tense',
          note: 'The poem moves into the present. She does the housework, and in that one way she is the wife he wanted.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'As well as most, but like a mouse:',
      annotations: [
        {
          type: 'Simile',
          note: '"Like a mouse": small, quiet, frightened. His praise ("As well as most") is grudging, and the line turns at once to her fear.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'Happy enough to chat and play' },
    { text: 'With birds and rabbits and such as they,' },
    {
      text: 'So long as men-folk keep away.',
      annotations: [
        {
          type: 'Fear of men',
          note: 'She is "happy enough" with "birds and rabbits"; it is "men-folk" she fears. The farmer reports it without asking why.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "'Not near, not near!' her eyes beseech",
      annotations: [
        {
          type: 'Voiceless',
          note: 'These are the only words given to her, and they are spoken by her eyes: the farmer puts them into words. Even her plea reaches us through him.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'When one of us comes within reach.' },
    { text: 'The women say that beasts in stall' },
    {
      text: 'Look round like children at her call.',
      annotations: [
        {
          type: 'Simile',
          note: 'Animals answer her "like children". She has a gift for tenderness, and the image of children hints at what the marriage lacks.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "I've hardly heard her speak at all.",
      annotations: [
        {
          type: 'Emphasis',
          note: 'AQA prints "I\'ve" in italics, the farmer\'s own stress, which this line cannot show: she talks to the animals, perhaps to the women, but hardly ever to him.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'Shy as a leveret, swift as he,',
      annotations: [
        {
          type: 'Similes',
          note: 'A "leveret" is a young hare. The run of similes ("Shy as", "swift as", "Straight and slight as", "Sweet as") pictures her as part of the wild.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'Straight and slight as a young larch tree,' },
    {
      text: 'Sweet as the first wild violets, she,',
      annotations: [
        {
          type: 'Admiration',
          note: '"The first wild violets" are among the first flowers of spring. His admiration is real, and it is for something wild that he cannot keep.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'To her wild self. But what to me?',
      annotations: [
        {
          type: 'Rhetorical question',
          note: '"To her wild self" admits she is herself only away from him. "But what to me?" turns the stanza from her to his frustration.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    {
      text: 'The short days shorten and the oaks are brown,',
      annotations: [
        {
          type: 'Seasons',
          note: 'Winter is coming. The days shorten and the year turns, and nothing in the marriage changes.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The blue smoke rises to the low grey sky,',
      annotations: [
        {
          type: 'Pathetic fallacy',
          note: 'A "low grey sky" presses down on the scene, as his frustration presses on him.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'One leaf in the still air falls slowly down,',
      annotations: [
        {
          type: 'Pace',
          note: 'One leaf, still air, falling "slowly": the line moves as slowly as the waiting it describes, and the single leaf is as alone as he is.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "A magpie's spotted feathers lie",
      annotations: [
        {
          type: 'Imagery',
          note: 'Feathers lying on the frozen ground suggest a dead bird, and with "black earth spread white with rime" the landscape is drained to black and white.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'On the black earth spread white with rime,' },
    {
      text: 'The berries redden up to Christmas-time.',
      annotations: [
        {
          type: 'Colour',
          note: 'The only warm colour in the stanza is the berries reddening towards Christmas, a season for families.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "What's Christmas-time without there be",
      annotations: [
        {
          type: 'Longing',
          note: '"Some other in the house than we": he wants a child, and a family festival makes the empty marriage sharper. "Without there be" is dialect again.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'Some other in the house than we!' },
    { text: '' },
    {
      text: 'She sleeps up in the attic there',
      annotations: [
        {
          type: 'Separation',
          note: 'They sleep apart: she in the attic, he below. The whole marriage is in that distance.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "Alone, poor maid. 'Tis but a stair",
      annotations: [
        {
          type: 'Pity and threat',
          note: '"Poor maid" is pity, but "\'Tis but a stair" measures how near she is. The line holds both, and the reader cannot be sure which will win.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Betwixt us. Oh! my God! the down,',
      annotations: [
        {
          type: 'Caesura / exclamation',
          note: 'Full stops and exclamations break the line apart ("Oh! my God!"), and his calm, storytelling voice gives way.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'The soft young down of her, the brown,',
      annotations: [
        {
          type: 'Sensuous detail',
          note: '"Down" is the fine, soft hair on her skin, and "young" reminds us again of her age.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'The brown of her – her eyes, her hair, her hair!',
      annotations: [
        {
          type: 'Repetition',
          note: 'The repeated "brown" and "her hair, her hair" show his mind fixed on her body. The poem ends on his exclamation, and nothing is resolved.',
          color: '#ef4444',
        },
      ],
    },
  ],
  // Until 2 October 2026 the context said Mew "published this poem in 1916". It first
  // appeared in The Nation in 1912; 1916 is the year of the collection named after it.
  context:
    "<p><strong>Charlotte Mew</strong> (1869–1928) was a modernist poet who experienced personal tragedy, including the institutionalisation of two siblings and years of financial hardship. The poem first appeared in the magazine <em>The Nation</em> in 1912 and gave its title to her first collection, <em>The Farmer's Bride</em> (Poetry Bookshop, 1916).</p><p>The poem is a <strong>dramatic monologue</strong> spoken by a farmer whose young bride is terrified of him and of physical intimacy. It explores themes of <strong>trapped marriage</strong>, <strong>female oppression</strong>, and <strong>male desire</strong> in a rural setting where women had very little agency.</p><p>The bride is presented as a creature of nature, compared to animals and to a fairy, while the farmer's language reveals a troubling mix of <strong>tenderness and possessiveness</strong>. The poem can be read as a critique of Victorian and Edwardian marriage, where women were essentially <strong>property</strong> and had no legal right to refuse their husbands.</p><p>Mew's own experience as a queer woman in a repressive society likely informed her sympathy for the trapped bride and her understanding of desire that cannot be fulfilled.</p>",
  contextAr:
    "<p><strong>Charlotte Mew</strong> (1869–1928) شاعرة حداثية عاشت مآسي شخصية، منها إيداع اثنين من إخوتها في مصحّات نفسية، وسنين من الضيق المادّي. والقصيدة نُشرت أوّل مرّة في مجلة <em>The Nation</em> سنة 1912، وصار اسمها عنوان أوّل ديوان لها، <em>The Farmer's Bride</em> (Poetry Bookshop، سنة 1916).</p><p>القصيدة <strong>dramatic monologue</strong> (مونولوج درامي) يتكلّم بها مزارع، عروسه الصغيرة مرعوبة منه ومن الحميمية الجسدية. وتستكشف القصيدة مواضيع <strong>الزواج كفخّ</strong>، و<strong>القمع الأنثوي</strong>، و<strong>الرغبة الذكورية</strong> في بيئة ريفية كان فيها للنساء فاعلية ضعيفة جداً.</p><p>العروس تُقدَّم على إنها مخلوق من الطبيعة، تتشبّه بالحيوانات وبالجنّية، بينما لغة المزارع تكشف مزيج مقلق من <strong>الحنان والتملّك</strong>. القصيدة ممكن تتقرأ على إنها نقد للزواج الفيكتوري والإدواردي، اللي كانت فيه المرأة في الواقع <strong>ملكية</strong>، وما لها حق قانوني ترفض زوجها.</p><p>تجربة Mew الشخصية كامرأة مثلية في مجتمع قمعي يحتمل إنها غذّت تعاطفها مع العروس المحاصرة، وفهمها للرغبة اللي ما تقدر تتحقّق.</p>",
  summary:
    'A farmer tells how, three summers ago, he chose a young bride. From their wedding she was afraid of love, of him and of all people. One night in autumn she ran away: he and his neighbours chased her across the fields by lantern light, caught her, brought her home and locked her in. Now she does the housework well enough, but she is as timid as a mouse. She chats to birds and rabbits, shrinks from the men and hardly speaks to him. He admires her wild beauty and asks what it means to him, and as winter comes he longs for a child to share Christmas. The poem ends with her asleep alone in the attic, only a stair away, and his composure breaking into an exclamation about her eyes and hair that leaves a threat hanging over the ending.',
  summaryAr:
    'مزارع يحكي كيف اختار قبل ثلاث صيفيّات عروس صغيرة. من يوم الزواج وهي خايفة من الحب، ومنه، ومن كل البشر. في ليلة من ليالي الخريف هربت: وهو وجيرانه طاردوها في الحقول على ضوء الفوانيس، ومسكوها، ورجّعوها البيت وقفلوا عليها. الحين هي تسوّي شغل البيت زين بما فيه الكفاية، بس مرعوبة مثل الفأر. تسولف مع الطيور والأرانب، وتبتعد عن الرجال، وبالكاد تكلّمه. هو معجب بجمالها البرّي ويسأل وش يعني هالشي له، ومع قدوم الشتاء يشتاق لطفل يشاركهم عيد الميلاد. القصيدة تنتهي وهي نايمة بروحها في العلّية، وما بينهم إلا درج، وتماسكه ينهار في صيحة عن عيونها وشعرها تخلّي التهديد معلّق فوق النهاية.',
  formAndStructure:
    'Form: A dramatic monologue. The farmer is the only speaker, so we have only his account; even the bride\'s one plea, "Not near, not near!", is what he reads in her eyes.\n\nStructure: Six stanzas of uneven length (9, 10, 10, 4, 8 and 5 lines). The first two tell the past: the marriage, her flight and her capture. From the third the poem is in the present, moving from her life in the house to his longing and, in the last stanza, to the stair between them.\n\nRhyme: Insistent but irregular rhyme, often in couplets and triplets ("day", "fay", "away"; "house", "mouse"; "stall", "call", "all"), gives the poem the sound of a ballad, while the shifting pattern matches his unsettled mind.\n\nMetre: Most lines have four beats, but the chase stretches into the longest line in the poem (line 14), and the winter stanza moves into longer, slower lines of five beats.\n\nDialect: "When us was wed", "her be", "runned", "\'twasn\'t" and "without there be" give the farmer a rural, ordinary voice.\n\nCaesura and exclamation: In the last stanza full stops and exclamations break the lines ("Betwixt us. Oh! my God! the down"), as his composure breaks.\n\nProgression: From calm storytelling to a final exclamation about "her eyes, her hair, her hair", the poem tracks the farmer\'s growing desire and leaves its threat unresolved.',
  formAndStructureAr:
    'الشكل: DRAMATIC MONOLOGUE (مونولوج درامي). المزارع هو المتكلّم الوحيد، فما يوصلنا إلا روايته؛ وحتى رجاء العروس الوحيد، "Not near, not near!"، هو اللي يقرأه في عيونها.\n\nالبنية: ستّة مقاطع بأطوال مختلفة (9 و10 و10 و4 و8 و5 أبيات). أوّل مقطعين يحكون الماضي: الزواج، وهروبها، ومسكها. ومن المقطع الثالث القصيدة في الحاضر، تنتقل من حياتها في البيت إلى شوقه، وفي المقطع الأخير إلى الدرج اللي بينهم.\n\nالقافية: قافية ملحّة بس غير منتظمة، كثير منها في أزواج وثلاثيّات ("day" و"fay" و"away"؛ "house" و"mouse"؛ "stall" و"call" و"all")، تعطي القصيدة صوت الأغنية الشعبية (ballad)، والنمط المتغيّر يناسب عقله المضطرب.\n\nالوزن: أغلب الأبيات فيها أربع نبرات، بس المطاردة تمتد في أطول بيت في القصيدة (البيت 14)، ومقطع الشتاء ينتقل لأبيات أطول وأبطأ بخمس نبرات.\n\nاللهجة: "When us was wed" و"her be" و"runned" و"\'twasn\'t" و"without there be" تعطي المزارع صوت ريفي عادي.\n\nCAESURA والتعجّب: في المقطع الأخير النقاط وعلامات التعجّب تكسّر الأبيات ("Betwixt us. Oh! my God! the down")، مثل ما ينكسر تماسكه.\n\nالتدرّج: من حكي هادي إلى صيحة أخيرة عن "her eyes, her hair, her hair"، القصيدة تتابع رغبة المزارع وهي تكبر، وتخلّي تهديدها بدون حلّ.',
  keyQuotes: [
    {
      quote: 'Three Summers since I chose a maid',
      analysis:
        'The opening puts the farmer in charge: "I chose". "Maid" means both a young, unmarried woman and a servant, and the next line admits she was "Too young maybe". From the first line, the marriage is something done to her.',
      themes: ['Power', 'Ownership', 'Marriage'],
      analysisAr:
        'البيت الافتتاحي يحطّ المزارع في موقع السيطرة: "I chose" (أنا اخترت). وكلمة "maid" تعني بنت صغيرة ما تزوّجت، وتعني بعد خادمة، والبيت اللي بعده يعترف إنها كانت "Too young maybe". من أوّل بيت، الزواج شي ينسوّى فيها، مو شي تختاره.',
      themesAr: ['السلطة', 'التملّك', 'الزواج'],
    },
    {
      quote: 'When us was wed she turned afraid / Of love and me and all things human',
      analysis:
        'Her fear widens through the repeated "and" from love, to her husband, to everything human. The farmer names himself in the list but never asks whether he is the cause, and "When us was wed" sets his rural dialect.',
      themes: ['Fear', 'Isolation', 'Marriage'],
      analysisAr:
        'خوفها يتّسع مع تكرار "and" من الحب إلى زوجها إلى كل شي بشري. المزارع يذكر نفسه وسط القائمة، بس ما يسأل أبداً إذا هو السبب، و"When us was wed" تثبّت لهجته الريفية.',
      themesAr: ['الخوف', 'العزلة', 'الزواج'],
    },
    {
      quote: "Like the shut of a winter's day / Her smile went out",
      analysis:
        'A sudden, cold image: her smile goes out as a short winter day closes. "Shut" is abrupt and final, and winter suggests coldness and barrenness.',
      themes: ['Loss', 'Coldness', 'Nature'],
      analysisAr:
        'صورة مفاجئة وباردة: ابتسامتها تنطفي مثل ما يسكّر يوم شتوي قصير. كلمة "shut" مفاجئة ونهائية، والشتاء يوحي بالبرود والعقم.',
      themesAr: ['الفقد', 'البرودة', 'الطبيعة'],
    },
    {
      quote: "'twasn't a woman – / More like a little frightened fay",
      analysis:
        'He decides she is hardly a woman ("\'twasn\'t": it was not) but a "fay", a fairy. The image idealises her and makes her less than human at once: if she is not a woman, her fear need not be understood.',
      themes: ['Dehumanisation', 'Fantasy', 'Othering'],
      analysisAr:
        'يقرّر إنها مو امرأة تقريباً ("\'twasn\'t" يعني it was not) بل "fay"، يعني جنّية. الصورة ترفعها وتجرّدها من إنسانيتها في نفس الوقت: إذا هي مو امرأة، فما يحتاج يفهم خوفها.',
      themesAr: ['التجريد من الإنسانية', 'الخيال', 'تغريب الآخر'],
    },
    {
      quote: 'We chased her, flying like a hare / Before our lanterns',
      analysis:
        'The language of the hunt: she flees "like a hare" and the farmer and his neighbours chase her by lantern light. The community helps to bring her back, and no one asks why she ran.',
      themes: ['Power', 'Entrapment', 'Violence'],
      analysisAr:
        'لغة الصيد: هي تهرب "like a hare" (مثل الأرنب البرّي)، والمزارع وجيرانه يطاردونها على ضوء الفوانيس. المجتمع كلّه يساعد يرجّعها، وما أحد يسأل ليش هربت.',
      themesAr: ['السلطة', 'الحصار', 'العنف'],
    },
    {
      quote: 'And turned the key upon her, fast',
      analysis:
        'He locks her in. "Fast" means both quickly and securely: the marriage is now a prison, and the farmer tells it as a matter of course.',
      themes: ['Entrapment', 'Control', 'Marriage'],
      analysisAr:
        'يقفل عليها الباب. كلمة "fast" تعني بسرعة وتعني بإحكام: الزواج صار سجن، والمزارع يحكيها كأنها شي عادي.',
      themesAr: ['الحصار', 'السيطرة', 'الزواج'],
    },
    {
      quote: 'She does the work about the house / As well as most, but like a mouse',
      analysis:
        'She has become a worker in the house and nothing more. The mouse simile makes her small and frightened, and the grudging "As well as most" shows how he values her.',
      themes: ['Domesticity', 'Entrapment', 'Silence'],
      analysisAr:
        'صارت شغّالة في البيت وبس. تشبيه الفأر يخلّيها صغيرة ومرعوبة، والمديح البخيل "As well as most" يبيّن شلون يقدّرها.',
      themesAr: ['المنزلية', 'الحصار', 'الصمت'],
    },
    {
      quote: "What's Christmas-time without there be / Some other in the house than we!",
      analysis:
        'He longs for "Some other in the house", a child. Christmas, a festival of family, sharpens his sense of the empty marriage, and the exclamation shows his frustration rising.',
      themes: ['Desire', 'Loneliness', 'Family'],
      analysisAr:
        'يشتاق لـ"Some other in the house"، يعني طفل. وعيد الميلاد، وهو عيد عائلي، يزيد إحساسه بفراغ الزواج، وعلامة التعجّب تبيّن إن إحباطه يزيد.',
      themesAr: ['الرغبة', 'الوحدة', 'العائلة'],
    },
    {
      quote: "'Tis but a stair / Betwixt us",
      analysis:
        'She sleeps alone in the attic, and only a stair separates them. The line measures how close she is, and the ending leaves it uncertain whether he will cross it.',
      themes: ['Desire', 'Threat', 'Separation'],
      analysisAr:
        'هي تنام بروحها في العلّية، وما بينهم إلا درج. البيت يقيس قد إيش هي قريبة، والنهاية تخلّي السؤال مفتوح: هل بيطلع هالدرج ولا لا.',
      themesAr: ['الرغبة', 'التهديد', 'الانفصال'],
    },
    {
      quote: 'The brown of her – her eyes, her hair, her hair!',
      analysis:
        'His gaze breaks her into parts, her eyes and her hair, and the repetition shows obsession. The poem ends on this exclamation, his desire overwhelming the control of the earlier stanzas.',
      themes: ['Obsession', 'Objectification', 'Desire'],
      analysisAr:
        'نظرته تقسّمها لأجزاء، عيونها وشعرها، والتكرار يكشف الهوس. القصيدة تنتهي بهالصيحة، ورغبته تطغى على الضبط اللي كان في المقاطع الأولى.',
      themesAr: ['الهوس', 'تشييء المرأة', 'الرغبة'],
    },
  ],
  // Each card's lineRef is the row of `lines` where its example begins, stanza breaks counted:
  // the viewer lights that row and labels the card with its line number (poemLineNumbers in
  // InteractivePoemViewer). a-device-card-cites-the-line-it-quotes.test.tsx checks every card.
  // Until 2 October 2026 every example here was a paraphrase, because the rows were.
  languageDevices: [
    {
      device: 'Dramatic monologue',
      example: '[the whole poem: the farmer is the only speaker]',
      effect:
        'The farmer is the only speaker, so we have only his account. The bride is given no words of her own: even "Not near, not near!" is what her eyes say, put into words by him. The form enacts the power imbalance the poem explores.',
      lineRef: 0,
      effectAr:
        'المزارع هو المتكلّم الوحيد، فما يوصلنا إلا كلامه. العروس ما لها كلمات خاصّة فيها: حتى "Not near, not near!" هي كلام عيونها، وهو اللي يحطّه في كلمات. الشكل نفسه يجسّد الخلل في السلطة اللي تستكشفه القصيدة.',
    },
    {
      device: 'Animal imagery',
      example: 'flying like a hare … like a mouse … Shy as a leveret',
      effect:
        'The bride is compared to a hare, a mouse and a leveret: small, wild, hunted creatures. The comparisons are tender, but they make her prey, something to be caught and kept rather than a person.',
      lineRef: 15,
      effectAr:
        'العروس تتشبّه بأرنب برّي وفأر وخِرنق (leveret، يعني أرنب صغير): مخلوقات صغيرة وبرّية ومطاردة. التشبيهات فيها حنان، بس تخلّيها فريسة، شي ينصاد ويتخزّن بدل ما تكون إنسانة.',
    },
    {
      device: 'Dialect',
      example: 'When us was wed',
      effect:
        '"When us was wed", "her be", "runned", "\'twasn\'t", "without there be": the rural dialect gives the farmer an ordinary, credible voice, which makes the cruelty he takes for granted harder to dismiss.',
      lineRef: 3,
      effectAr:
        'عبارات مثل "When us was wed" و"her be" و"runned" و"\'twasn\'t" و"without there be": اللهجة الريفية تعطي المزارع صوت عادي ومصدَّق، وهذا يخلّي القسوة اللي يعتبرها طبيعية أصعب إننا نتجاهلها.',
    },
    {
      device: 'Possessive language',
      example: 'We caught her, fetched her home at last',
      effect:
        '"Chose", "caught", "fetched", "turned the key": the verbs of the marriage are all his. She is acted upon and never acts, except to run.',
      lineRef: 18,
      effectAr:
        'أفعال "chose" و"caught" و"fetched" و"turned the key" كلّها أفعاله هو. هي دايماً يُفعل فيها وما تفعل شي، إلا إنها تهرب.',
    },
    {
      device: 'Repetition',
      example: 'her eyes, her hair, her hair!',
      effect:
        'The repeated "her hair" fixes his gaze on her body. The poem ends on his exclamation: the desire he has held back is the last thing we hear.',
      lineRef: 50,
      effectAr:
        'تكرار "her hair" يثبّت نظرته على جسمها. القصيدة تنتهي بصيحته: الرغبة اللي كان يكتمها هي آخر شي نسمعه.',
    },
    {
      device: 'Simile',
      example: "Like the shut of a winter's day",
      effect:
        'Her smile goes out as suddenly as a winter afternoon ends. "Shut" is abrupt and final, and winter brings cold and darkness.',
      lineRef: 5,
      effectAr:
        'ابتسامتها تنطفي فجأة مثل ما ينتهي عصر يوم شتوي. كلمة "shut" مفاجئة ونهائية، والشتاء يجيب البرد والظلام.',
    },
    {
      device: 'Pathetic fallacy',
      example: 'The short days shorten and the oaks are brown',
      effect:
        'The coming winter, the "low grey sky" and the single falling leaf mirror the farmer\'s loneliness and frustration as time passes without change.',
      lineRef: 37,
      effectAr:
        'الشتاء الجاي، و"low grey sky"، والورقة الوحدة اللي تطيح، كلّها تعكس وحدة المزارع وإحباطه والوقت يمرّ بدون أي تغيير.',
    },
    {
      device: 'Caesura',
      example: 'Betwixt us. Oh! my God! the down',
      effect:
        'Full stops and exclamations break the line into pieces as his composure breaks. The storytelling voice of the opening is gone.',
      lineRef: 48,
      effectAr:
        'النقاط وعلامات التعجّب تكسّر البيت لقطع، مثل ما ينكسر تماسكه. صوت الحكواتي الهادي اللي بدأ فيه القصيدة راح.',
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'fb-1',
    question: 'Who is the speaker?',
    type: 'multiple-choice',
    options: [
      'The bride herself',
      'A farmer whose young wife is terrified of him and of physical intimacy',
      'A neighbour',
      'A priest',
    ],
    correctIndex: 1,
    explanation:
      'The poem is a dramatic monologue spoken by a farmer whose young bride fears him and all men. He describes her flight, capture, and continued terror with a mix of tenderness and frustration.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'fb-2',
    question: 'Why does the bride run away?',
    type: 'multiple-choice',
    options: [
      'She wants adventure',
      'She is terrified of the farmer and of physical intimacy - afraid of all human contact',
      'She is homesick',
      'She found another lover',
    ],
    correctIndex: 1,
    explanation:
      'The bride is afraid of all human contact, especially men and physical intimacy. She flees the marriage but is caught and brought back by the farmer and other men.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'fb-3',
    question: 'How is the bride described?',
    type: 'multiple-choice',
    options: [
      'As strong and confident',
      'As an animal or fairy - compared to a hare, a mouse, a leveret - more creature than person',
      'As angry and defiant',
      'As elderly and wise',
    ],
    correctIndex: 1,
    explanation:
      'The bride is consistently compared to wild animals - a hare, a mouse, a leveret (young hare). She is associated with nature rather than human society, suggesting she is trapped in a role she cannot inhabit.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'fb-4',
    question: 'What does the final stanza reveal about the farmer?',
    type: 'multiple-choice',
    options: [
      'He is content with the situation',
      'His desire becomes increasingly possessive and disturbing - a repeated, exclamatory fixation on her appearance suggests barely contained obsession',
      'He decides to let her go',
      'He is angry at her',
    ],
    correctIndex: 1,
    explanation:
      "The final stanza's repeated, exclamatory focus on the bride's appearance reveals the farmer's desire becoming obsessive and predatory. The broken exclamations suggest barely controlled passion that edges toward threat.",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'fb-5',
    question: 'What does the poem suggest about marriage in this period?',
    type: 'multiple-choice',
    options: [
      'Marriage was always happy',
      'Women had little agency - the bride is essentially property, caught and returned like a runaway animal',
      'Women could easily divorce',
      'Marriage was optional',
    ],
    correctIndex: 1,
    explanation:
      'The poem critiques Victorian/Edwardian marriage where women had little legal right to refuse their husbands. The bride is captured and returned like escaped livestock - she has no autonomy.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'fb-6',
    question: 'Who wrote the poem?',
    type: 'multiple-choice',
    options: [
      'Elizabeth Barrett Browning',
      'Charlotte Mew (1869-1928), a modernist poet who experienced personal tragedy',
      'Jane Austen',
      'Carol Ann Duffy',
    ],
    correctIndex: 1,
    explanation:
      'Charlotte Mew (1869-1928) was a modernist poet. Her own experience as a queer woman in a repressive society likely informed her sympathy for the trapped bride.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'fb-7',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      'A dramatic monologue with varying line lengths and an irregular rhyme scheme',
      'Free verse',
      'Regular quatrains',
    ],
    correctIndex: 1,
    explanation:
      "The poem is a dramatic monologue with irregular line lengths and an inconsistent rhyme scheme. The formal irregularity mirrors the farmer's agitated, unstable emotional state.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'fb-8',
    question: 'What does the changing of seasons represent?',
    type: 'multiple-choice',
    options: [
      'Nothing - it is just setting',
      'Time passing without resolution - each season brings new frustration as the marriage remains unconsummated',
      'The farmer enjoys gardening',
      'Hope for improvement',
    ],
    correctIndex: 1,
    explanation:
      'The poem moves through seasons - "three Summers" have passed. Time moves but nothing changes - the bride remains fearful, the farmer grows more frustrated, and the situation becomes increasingly tense.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'fb-9',
    question: 'How does Mew create sympathy for both characters?',
    type: 'multiple-choice',
    options: [
      "She doesn't - only the bride gets sympathy",
      "The farmer is presented as genuinely confused and frustrated, not purely villainous - while the bride's fear is painfully real",
      'Only the farmer gets sympathy',
      'Neither character is sympathetic',
    ],
    correctIndex: 1,
    explanation:
      "Mew creates a complex portrait: the farmer is not a cartoon villain but a confused, lonely man. Yet his desire becomes increasingly threatening. The bride's terror is genuine and pitiable. Both are trapped.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'fb-10',
    question: "Which poem pairs best with The Farmer's Bride?",
    type: 'multiple-choice',
    options: ['Singh Song!', "Porphyria's Lover by Robert Browning", 'Walking Away', 'Eden Rock'],
    correctIndex: 1,
    explanation:
      "Both The Farmer's Bride and Porphyria's Lover feature male speakers with possessive desire for women. Both use dramatic monologue to reveal disturbing psychology beneath a surface of love.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      "The Farmer's Bride explores trapped marriage, female oppression, male desire, the nature vs culture divide, and the loss of agency.",
    keyPoints: [
      'Trapped marriage - the bride has no freedom or choice',
      'Female oppression - caught and returned like property',
      'Male desire - increasingly possessive and threatening',
      'Nature vs culture - the bride belongs to nature, not human society',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      "Mew uses animal comparisons, seasonal imagery, and an increasingly agitated voice to reveal the farmer's desire and the bride's fear.",
    keyPoints: [
      'Animal imagery - "like a hare", "like a mouse", "Shy as a leveret" - the bride as a wild, hunted creature',
      '"her eyes, her hair, her hair!" - the closing, obsessive repetition',
      'The seasons - "Three Summers", "the Fall", "Christmas-time" - time passes but nothing resolves',
      '"To her wild self. But what to me?" - she belongs to nature, not to the marriage',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "A dramatic monologue with irregular line lengths and rhyme, mirroring the farmer's unstable emotional state.",
    keyPoints: [
      'Dramatic monologue - the farmer reveals more than he intends',
      'Irregular form - reflects agitation and instability',
      'Six stanzas of 9, 10, 10, 4, 8 and 5 lines - tension builds toward the disturbing finale',
      'Seasonal structure - time frames the growing frustration',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Mew present the relationship between the farmer and his bride?',
  "Compare how desire is presented in The Farmer's Bride and one other poem from the anthology.",
  'How does Mew use the dramatic monologue form to create sympathy and unease?',
]

const comparePoems = [
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason:
      "Both explore rural settings, but while Dooley's poem finds beauty in distance and communication, Mew's poem shows entrapment and the failure of connection within close proximity.",
    themes: ['Rural life', 'Communication', 'Distance'],
  },
  {
    title: 'Walking Away',
    poet: 'Cecil Day-Lewis',
    link: '/revision/poetry/love-and-relationships/walking-away',
    reason:
      'Both involve one person watching another. Day-Lewis watches with love as his son leaves; the farmer watches with obsessive desire as his bride is trapped.',
    themes: ['Watching', 'Power', 'Love vs Obsession'],
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason:
      "Both use rural farming settings and dialect to establish voice. Heaney's speaker admires his father's skill; Mew's farmer reveals troubling possessiveness through his dialect.",
    themes: ['Rural life', 'Dialect', 'Power dynamics'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function TheFarmersBridePage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="The Farmer's Bride by Charlotte Mew - Analysis & Annotations"
        description="Line-by-line analysis of The Farmer's Bride with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />

      {/* ── Back navigation ──────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/revision/poetry/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('rev.poetry.shared.back_label_love_and_relationships')}
        </Button>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h1 className="text-heading-lg font-heading text-foreground">The Farmer&apos;s Bride</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Charlotte Mew &middot; <em>The Farmer&apos;s Bride</em> (1916)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Power', 'Desire', 'Entrapment', 'Marriage', 'Fear', 'Oppression'].map((theme) => (
          <Badge key={theme} variant="outline" className="text-xs">
            {theme}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="The Farmer's Bride"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="The Farmer's Bride"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={farmersBridePoem} />

      {/* ── Compare with ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          {t('rev.poetry.shared.compare_with')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparePoems.map((cp) => (
            <div
              key={cp.title}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/80 hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cp.title}</h3>
                  <p className="text-xs text-muted-foreground">{cp.poet}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{cp.reason}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {cp.themes.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                render={<Link href={cp.link} />}
              >
                Study {cp.title}
                <ArrowRight className="size-3" />
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
