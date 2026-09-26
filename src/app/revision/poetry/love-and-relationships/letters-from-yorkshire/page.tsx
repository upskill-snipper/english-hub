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

const lettersPoem: PoemData = {
  title: 'Letters from Yorkshire',
  poet: 'Maura Dooley',
  // NOTE: "Letters from Yorkshire" (Maura Dooley) remains in copyright. To avoid
  // reproducing the poem, each line below is given as a PARAPHRASE in the site's
  // own words, and the annotations quote only short phrases. Students must read
  // the full original text in the AQA Love and Relationships anthology.
  //
  // Until 25 September 2026 this array printed a corrupted text as the poem. Of
  // its 18 lines, two were Dooley's as she wrote them, two were garbled versions
  // of hers and 14 were invented, and 11 of her 15 lines were missing. It now
  // follows the published poem, 15 lines in five tercets, one entry per line in
  // the poem's order, checked line by line on 26 September 2026 against a
  // printed copy of the poem. The viewer numbers entries by position, stanza
  // breaks included, so after the first stanza its numbers run ahead of the
  // anthology's. Annotations that described invented lines were rewritten for
  // the real ones.
  //
  // THE REST OF THE PAGE, rebuilt 26 September 2026. Until then the summary,
  // key quotes, devices, form notes, quiz and revision notes quoted 96 distinct
  // words, most of them from the invented lines (letters that fixed things,
  // a dozen roses, sheep and hens, a closing line about looking out for each
  // other), and misquoted the rhetorical question in the third person. They
  // also called the poem six stanzas of varying length in the present tense
  // throughout, and gave it an "I" it does not have. All of it now describes
  // the poem as published: five tercets, a past-tense first stanza, and
  // pronouns that move from him to you to a shared our. The page quotes seven
  // short phrases, 17 words counted once, each checked word for word against
  // the text BBC Bitesize prints by permission of Bloodaxe Books (guide
  // ztsphv4, "The poem") and against AQA's published anthology
  // (filestore.aqa.org.uk/resources/english/AQA-8702-TG-POEMS.PDF): lines 3,
  // 5, 7, 9, 13 and 15 (twice). Both texts are 120 words, so 17 is within 15
  // per cent of the poem; POEM_WORDS in
  // src/__tests__/helpers/poets.ts records 148, which would allow 22. Every
  // lineRef below is a lines-array index, stanza breaks included. Adding a
  // quotation takes the page towards the cap:
  // no-poem-quoted-beyond-fair-dealing.test.ts measures it.
  lines: [
    // Stanza 1
    {
      text: '[Paraphrase] One February he was out in his garden, setting potatoes in the ground.',
      annotations: [
        {
          type: 'Imagery',
          note: 'Opening with a specific month and physical activity immediately establishes the rural, seasonal world of the Yorkshire correspondent.',
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] He noticed the lapwings were back, the first of the year, and went' },
    { text: '[Paraphrase] into the house to write her a letter, his knuckles tingling' },
    { text: '' },
    // Stanza 2
    { text: '[Paraphrase] as the warmth of the room turned them red.' },
    {
      text: '[Paraphrase] There is nothing romantic here; this is simply everyday life.',
      annotations: [
        {
          type: 'Tone',
          note: 'The speaker pre-empts any assumption of romantic love; the relationship is defined by a deeper, quieter connection.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] Addressing him now: he is outside in the chill, watching the seasons',
      annotations: [
        {
          type: 'Direct address',
          note: 'The switch to the second person turns to address him directly, so the poem reads like her side of their correspondence.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '' },
    // Stanza 3
    {
      text: '[Paraphrase] change, while she, her heart brimming with news stories,',
      annotations: [
        {
          type: 'Contrast',
          note: 'The line turns from his world to hers, setting his physical, tangible life against her intellectual, screen-based one.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '[Paraphrase] types words into an empty computer screen.' },
    {
      text: '[Paraphrase] She asks if his digging and sowing make the way he lives more genuine.',
      annotations: [
        {
          type: 'Rhetorical question',
          note: 'The speaker questions whether physical labour is more authentic than digital work, revealing her insecurity about her own urban lifestyle.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    // Stanza 4
    { text: '[Paraphrase] He would not agree, cracking the frozen surface of a rain barrel' },
    {
      text: '[Paraphrase] and shovelling a way through the snow. Yet he is the one',
      annotations: [
        {
          type: 'Colloquial tone',
          note: 'The conversational one-word turn in line 11 is deliberately understated, bringing the poem round to his constancy and reliability: he is the one who keeps writing.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: '[Paraphrase] who writes to her with news of that different life,' },
    { text: '' },
    // Stanza 5
    {
      text: '[Paraphrase] packing daylight and fresh air into each envelope he posts. And so,',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Presents his letters as carrying the outdoors itself, implying his connection to nature can reach and sustain her in the city.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] after dark, they watch identical news bulletins in their separate homes,',
    },
    {
      text: '[Paraphrase] and their spirits send each other signals across the frozen distance.',
      annotations: [
        {
          type: 'Visual imagery',
          note: 'The final image of frozen distance makes the physical space between the two correspondents vivid, echoing the wintry opening.',
          color: '#3b82f6',
        },
        {
          type: 'Ambiguity',
          note: '"Tap out" suggests both typing and signalling in code. The shared plural pronoun conveys mutual devotion and equality.',
          color: '#f59e0b',
        },
      ],
    },
  ],
  context:
    '<p><strong>Maura Dooley</strong> (born 1957, in Truro) grew up in Bristol, worked in Yorkshire for a time and has lived in London. The poem may draw on her own experience, but that cannot be assumed. It explores the contrast between <strong>rural and urban lives</strong> and how genuine human connection can be sustained through simple, everyday communication.</p><p>The poem questions whether a life rooted in nature and physical labour is more <strong>authentic</strong> than one spent in front of screens. It celebrates the power of ordinary language and shared observation over grand romantic gestures, suggesting that true intimacy lies in <strong>noticing and reporting the small details</strong> of daily life.</p><p>Key themes include <strong>distance and connection</strong>, the tension between <strong>nature and technology</strong>, and the idea that love can be expressed through <strong>attention to the everyday</strong> rather than dramatic declarations.</p>',
  contextAr:
    '<p><strong>Maura Dooley</strong> (\u0645\u0648\u0627\u0644\u064a\u062f 1957 \u0641\u064a Truro) \u0634\u0627\u0639\u0631\u0629 \u062a\u0631\u0628\u0651\u062a \u0641\u064a Bristol\u060c \u0648\u0627\u0634\u062a\u063a\u0644\u062a \u0641\u064a Yorkshire \u0641\u062a\u0631\u0629\u060c \u0648\u0639\u0627\u0634\u062a \u0641\u064a \u0644\u0646\u062f\u0646. \u0645\u0645\u0643\u0646 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0623\u062e\u0648\u0630\u0629 \u0645\u0646 \u062a\u062c\u0631\u0628\u062a\u0647\u0627 \u0627\u0644\u0634\u062e\u0635\u064a\u0629\u060c \u0628\u0633 \u0645\u0627 \u0646\u0642\u062f\u0631 \u0646\u0641\u062a\u0631\u0636 \u0647\u0630\u0627. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u062a\u0636\u0627\u062f \u0628\u064a\u0646 <strong>\u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u0631\u064a\u0641\u064a\u0629 \u0648\u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u0645\u062f\u0646\u064a\u0629</strong>\u060c \u0648\u0643\u064a\u0641 \u0625\u0646 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a \u0627\u0644\u062d\u0642\u064a\u0642\u064a \u064a\u0642\u062f\u0631 \u064a\u0633\u062a\u0645\u0631 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0645\u062d\u0627\u062f\u062b\u0629 \u0628\u0633\u064a\u0637\u0629 \u0645\u0646 \u0627\u0644\u064a\u0648\u0645\u064a\u0627\u062a.</p><p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0633\u0623\u0644: \u0647\u0644 \u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u0644\u064a \u062c\u0630\u0648\u0631\u0647\u0627 \u0641\u064a \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0648\u0627\u0644\u0634\u063a\u0644 \u0627\u0644\u064a\u062f\u0648\u064a \u062a\u0639\u062a\u0628\u0631 <strong>\u0623\u0635\u062f\u0642</strong> \u0645\u0646 \u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u0644\u064a \u062a\u0646\u0642\u0636\u064a \u0642\u062f\u0627\u0645 \u0627\u0644\u0634\u0627\u0634\u0627\u062a\u061f \u062a\u062d\u062a\u0641\u064a \u0628\u0642\u0648\u0629 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0627\u062f\u064a\u0629 \u0648\u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u0643\u0629\u060c \u0623\u0643\u062b\u0631 \u0645\u0646 \u0627\u0644\u0625\u064a\u0645\u0627\u0621\u0627\u062a \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u0633\u064a\u0629 \u0627\u0644\u0643\u0628\u064a\u0631\u0629\u060c \u0648\u062a\u0634\u064a\u0631 \u0625\u0644\u0649 \u0625\u0646 \u0627\u0644\u062d\u0645\u064a\u0645\u064a\u0629 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629 \u062a\u0643\u0645\u0646 \u0641\u064a <strong>\u0645\u0644\u0627\u062d\u0638\u0629 \u0648\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0635\u063a\u064a\u0631\u0629</strong> \u0645\u0646 \u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u064a\u0648\u0645\u064a\u0629.</p><p>\u0627\u0644\u0645\u0648\u0627\u0636\u064a\u0639 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u062a\u0634\u0645\u0644 <strong>\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644</strong>\u060c \u0627\u0644\u062a\u0648\u062a\u0631 \u0628\u064a\u0646 <strong>\u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0648\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627</strong>\u060c \u0648\u0641\u0643\u0631\u0629 \u0625\u0646 \u0627\u0644\u062d\u0628 \u064a\u0642\u062f\u0631 \u064a\u0639\u0628\u0651\u0631 \u0639\u0646 \u0646\u0641\u0633\u0647 \u0639\u0646 \u0637\u0631\u064a\u0642 <strong>\u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647 \u0644\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u064a\u0648\u0645\u064a\u0629</strong> \u0623\u0643\u062b\u0631 \u0645\u0646 \u0627\u0644\u062a\u0635\u0631\u064a\u062d\u0627\u062a \u0627\u0644\u062f\u0631\u0627\u0645\u0627\u062a\u064a\u0643\u064a\u0629.</p>',
  summary:
    'The poem opens one February: a man in Yorkshire, digging his garden, sees the lapwings return for the first time that year and goes indoors to write to the speaker. She insists this is not romance, just how things are. She contrasts his outdoor life, out in the cold watching the seasons change, with her own, full of news headlines and typing on a screen, and asks whether his life is "more real". She knows he would deny it, busy with ice and snow, yet it is he who sends her news of his world, as if packing fresh air and daylight into each envelope. The poem ends at night, with the two of them watching the same news in different houses while their souls send messages across the cold distance between them. The relationship is never named: they could be friends, lovers or family.',
  summaryAr:
    'القصيدة تبدأ في يوم من أيام February: رجل في Yorkshire يحفر حديقته ويشوف طيور الـlapwings راجعة لأول مرة هالسنة، فيدخل البيت عشان يكتب للمتكلّمة (أنثى). هي تأكّد إن هذا مو رومانسية، بس هذي طبيعة الأشياء. تقارن حياته برّا في البرد، وهو يشوف الفصول تتغيّر، بحياتها هي المليانة بعناوين الأخبار والكتابة على شاشة، وتسأل إذا حياته أصدق. وتعرف إنه ما راح يوافق، وهو مشغول بالجليد والثلج، ومع ذلك هو اللي يرسل لها أخبار عالمه، كأنه يحط هوا منعش ونور النهار في كل ظرف. القصيدة تنتهي في الليل: الاثنين يتابعون نفس الأخبار في بيوت مختلفة، وأرواحهم ترسل رسائل لبعض عبر المسافة الباردة اللي بينهم. العلاقة بينهم ما تتسمّى أبداً: ممكن يكونون أصدقاء أو أحباب أو أهل.',
  formAndStructure:
    'Form: Five tercets (three-line stanzas) with no end rhyme and no strict metre, though most lines carry about five stresses. The unforced rhythm reflects the natural quality of the correspondence and of ordinary speech.\n\nStructure: The compact stanzas read like paragraphs in a letter. The poem moves from his world (stanza 1) to hers and back, and ends at night with the two of them joined in its last line.\n\nTense: The first stanza is in the past tense, telling what he did one February; from line 5 the poem moves into the present, suggesting the correspondence is ongoing and habitual.\n\nEnjambment: Sentences run on across lines and stanza breaks (lines 3 to 4, 6 to 7 and 12 to 13), mirroring the flowing, conversational quality of letters and the continuous nature of the relationship.\n\nCaesura: The comma in line 5 splits the denial of romance from the plain statement that follows, creating a reflective, considered tone.\n\nPronoun shift: The first stanza describes him in the third person; from line 6 the speaker addresses him directly; the last line joins them in a shared plural pronoun, moving from separation to connection.',
  formAndStructureAr:
    'Form: خمس tercets (مقاطع من ثلاث أبيات) بدون قافية وبدون وزن صارم، مع إن أغلب الأبيات فيها تقريباً خمس نبرات. الإيقاع العفوي يعكس الطبيعة غير المتكلّفة للمراسلات وللكلام العادي.\n\n' +
    'Structure: المقاطع قصيرة ومرتّبة مثل فقرات في رسالة. القصيدة تنتقل من عالمه (المقطع الأول) لعالمها وترجع، وتنتهي في الليل والاثنين مجتمعين في آخر بيت.\n\n' +
    'Tense: المقطع الأول بزمن الماضي، يحكي شو سوّا في يوم من أيام February؛ ومن البيت 5 القصيدة تنتقل للمضارع، وهذا يوحي إن المراسلات مستمرّة وعادة دائمة.\n\n' +
    'Enjambment: الجمل تنساب عبر الأبيات وفواصل المقاطع (الأبيات 3 إلى 4، و6 إلى 7، و12 إلى 13)، وهذا يحاكي السيلان والنبرة المحكيّة للرسائل، ويأكّد على استمرارية العلاقة.\n\n' +
    'Caesura: الفاصلة في البيت 5 تفصل نفي الرومانسية عن الجملة البسيطة اللي بعدها، وتخلق نبرة تأمليّة ومدروسة.\n\n' +
    'تبديل الضمائر: المقطع الأول يوصفه بضمير الغائب؛ ومن البيت 6 المتكلّمة تخاطبه مباشرة؛ وآخر بيت يجمعهم في ضمير جمع مشترك، فالقصيدة تنتقل من الانفصال للتواصل.',
  keyQuotes: [
    {
      quote: 'knuckles singing',
      analysis:
        'In line 3 the cold ache in his hands as they warm up indoors is turned into song. The metaphor suggests the joy he takes in writing to her, and makes the letter itself a kind of music.',
      themes: ['Communication', 'Nature', 'Joy'],
      analysisAr:
        'في البيت 3، ألم البرد في يدينه لما تدفى داخل البيت يتحوّل لأغنية. الاستعارة توحي بالفرح اللي يحسّه وهو يكتب لها، وتخلّي الرسالة نفسها نوع من الموسيقى.',
      themesAr: ['التواصل', 'الطبيعة', 'الفرح'],
    },
    {
      quote: 'not romance',
      analysis:
        'The flat denial in line 5 refuses to label the relationship, and the plain statement after the comma insists this is ordinary life. Paradoxically, the refusal makes their bond seem deeper: love expressed through reality rather than artifice. The poem never says whether they are friends, lovers or family.',
      themes: ['Love', 'Authenticity'],
      analysisAr:
        'النفي الصريح في البيت 5 يرفض يحطّ اسم للعلاقة، والجملة البسيطة بعد الفاصلة تأكّد إن هذي حياة عادية. وبمفارقة لطيفة، هذا الرفض يخلّي الرابط بينهم يبيّن أعمق: الحب يتعبّر عنه من خلال الواقع، مو من خلال التصنّع. والقصيدة أبد ما تقول إذا هم أصدقاء أو أحباب أو أهل.',
      themesAr: ['الحب', 'الأصالة'],
    },
    {
      quote: 'heartful of headlines',
      analysis:
        'The alliteration in line 7 links heart and head, feeling and thought. The coined word "heartful" suggests the news weighs on her emotions, and sets her world of words and screens against his world of soil, ice and snow.',
      themes: ['Nature vs Technology', 'Identity'],
      analysisAr:
        'الـalliteration في البيت 7 تربط القلب (heart) بالعقل (head)، يعني الشعور بالتفكير. والكلمة المبتكرة "heartful" توحي إن الأخبار تثقل مشاعرها، وتحطّ عالمها المليان كلام وشاشات مقابل عالمه المليان تراب وجليد وثلج.',
      themesAr: ['الطبيعة مقابل التكنولوجيا', 'الهويّة'],
    },
    {
      quote: 'more real',
      analysis:
        "The rhetorical question in line 9 asks whether his life is more real because he works the land. It reveals the speaker's anxiety about the value of her own desk-bound existence. It goes unanswered, and the next line admits that he would not say so.",
      themes: ['Identity', 'Nature vs Technology'],
      analysisAr:
        'السؤال البلاغي في البيت 9 يسأل إذا حياته أصدق لأنه يشتغل في الأرض. يكشف قلق المتكلّمة (أنثى) من قيمة حياتها المربوطة بالمكتب. والسؤال ما يتجاوب عليه، والبيت اللي بعده يعترف إنه هو نفسه ما راح يقول كذا.',
      themesAr: ['الهويّة', 'الطبيعة مقابل التكنولوجيا'],
    },
    {
      quote: 'air and light',
      analysis:
        'In line 13 writing a letter becomes filling an envelope with the outdoors itself. The metaphor shows the freshness of the news he sends and how much she welcomes it: his letters bring her a world her own life lacks.',
      themes: ['Communication', 'Connection', 'Nature'],
      analysisAr:
        'في البيت 13 كتابة الرسالة تصير كأنه يعبّي الظرف بالطبيعة نفسها. الاستعارة تبيّن انتعاش الأخبار اللي يرسلها، وقدّ إيش هي ترحّب فيها: رسايله تجيب لها عالم ناقص في حياتها.',
      themesAr: ['التواصل', 'الاتصال', 'الطبيعة'],
    },
    {
      quote: 'souls tap out',
      analysis:
        'At night, watching the same news in different houses, their souls signal to each other. "Tap out" suggests both typing and a code sent over a distance, and the shared pronoun in the last line joins them for the first time.',
      themes: ['Love', 'Connection', 'Distance'],
      analysisAr:
        'في الليل، وهم يتابعون نفس الأخبار في بيوت مختلفة، أرواحهم ترسل إشارات لبعض. عبارة "tap out" توحي بالكتابة على الكيبورد وبشيفرة تنرسل عبر مسافة، والضمير المشترك في آخر بيت يجمعهم لأول مرة.',
      themesAr: ['الحب', 'الاتصال', 'المسافة'],
    },
    {
      quote: 'icy miles',
      analysis:
        "The poem's last words make the distance between them physical and wintry, echoing the February opening. Yet the connection crosses it: the cold can be measured in miles, but it does not divide them.",
      themes: ['Distance', 'Connection'],
      analysisAr:
        'آخر كلمات القصيدة تخلّي المسافة بينهم ملموسة وشتوية، وترجّع صدى البداية في February. ومع ذلك التواصل يعبرها: البرد ينقاس بالأميال، بس ما يفرّقهم.',
      themesAr: ['المسافة', 'الاتصال'],
    },
  ],
  languageDevices: [
    {
      device: 'Metaphor',
      example: 'knuckles singing',
      effect:
        'Turns the ache of cold hands warming into music, suggesting the pleasure he takes in writing to her and making the act of communication itself joyful.',
      lineRef: 2,
      effectAr:
        'تحوّل ألم اليدين الباردة لما تدفى إلى موسيقى، وتوحي بالمتعة اللي يحسّها وهو يكتب لها، وتخلّي فعل التواصل نفسه شي مفرح.',
    },
    {
      device: 'Caesura and tone',
      example: 'not romance',
      effect:
        'The comma in the middle of line 5 creates a pause between the denial and the plain statement that follows, giving the line a reflective, matter-of-fact tone that quietly understates the bond.',
      lineRef: 5,
      effectAr:
        'الفاصلة في نص البيت 5 تخلق وقفة بين النفي والجملة البسيطة اللي بعده، وتعطي البيت نبرة تأمليّة وواقعية تقلّل من وصف الرابط بهدوء.',
    },
    {
      device: 'Alliteration',
      example: 'heartful of headlines',
      effect:
        'The repeated sound pairs heart and head, suggesting that the news she lives among weighs on her feelings as well as her mind, in contrast with his physical work outdoors.',
      lineRef: 8,
      effectAr:
        'تكرار الصوت يربط القلب بالعقل، ويوحي إن الأخبار اللي تعيش وسطها تثقل مشاعرها وتفكيرها، مقابل شغله الجسدي برّا.',
    },
    {
      device: 'Rhetorical question',
      example: 'more real',
      effect:
        "Sets his work on the land against hers at a screen, and invites the reader to question what makes a life meaningful, while revealing the speaker's own self-doubt. The question is never answered.",
      lineRef: 10,
      effectAr:
        'يحطّ شغله في الأرض مقابل شغلها قدّام الشاشة، ويدعو القارئ يسأل نفسه: شو اللي يخلّي الحياة ذات معنى؟ وفي نفس الوقت يكشف شك المتكلّمة (أنثى) في نفسها. والسؤال ما يتجاوب عليه أبداً.',
    },
    {
      device: 'Metaphor',
      example: 'air and light',
      effect:
        'Presents his letters as carrying the fresh outdoors of Yorkshire to her, implying that his connection to nature can reach and sustain her far away.',
      lineRef: 16,
      effectAr:
        'يقدّم رسايله كأنها تشيل هوا Yorkshire المنعش لها، ويوحي إن ارتباطه بالطبيعة يقدر يوصل لها ويسندها وهي بعيدة.',
    },
    {
      device: 'Ambiguity',
      example: 'souls tap out',
      effect:
        '"Tap out" means both typing and signalling in code, so the everyday and the spiritual meet in one phrase: their messages are ordinary, but what passes between them is not.',
      lineRef: 18,
      effectAr:
        'عبارة "tap out" تعني الكتابة على الكيبورد وإرسال إشارات بشيفرة في نفس الوقت، فاليومي والروحي يلتقون في عبارة وحدة: رسايلهم عادية، بس اللي يمرّ بينهم مو عادي.',
    },
    {
      device: 'Winter imagery',
      example: 'icy miles',
      effect:
        'Cold runs through the poem, from the February garden to the ice and snow of stanza 4, and ends with the wintry distance between them in the last line. The seasons also mark hope: the returning lapwings of line 2 signal spring.',
      lineRef: 18,
      effectAr:
        'البرد يمشي في القصيدة كلها، من الحديقة في February إلى الجليد والثلج في المقطع الرابع، وينتهي بالمسافة الشتوية بينهم في آخر بيت. والفصول كمان تحمل أمل: رجوع طيور الـlapwings في البيت 2 علامة على قدوم الربيع.',
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'lfy-1',
    question: 'What is the poem about?',
    type: 'multiple-choice',
    options: [
      'A tourist visiting Yorkshire',
      'The connection between two people maintained through letters despite living very different lives',
      'A love letter',
      'A business correspondence',
    ],
    correctIndex: 1,
    explanation:
      'The poem explores how two people maintain a deep connection through letters despite living different lives - one rural and physical, the other urban and desk-bound.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'lfy-2',
    question:
      'What does the rhetorical question in line 9, asking whether his life is "more real", suggest?',
    type: 'multiple-choice',
    options: [
      'His life is definitely better',
      'The speaker questions whether a physical, outdoor life is more authentic than her own indoor, intellectual life',
      'She looks down on gardening',
      'She wants to move to Yorkshire',
    ],
    correctIndex: 1,
    explanation:
      'This rhetorical question reveals the speaker\'s anxiety about the value of her own work compared to his tangible, physical existence. She questions what constitutes a "real" life.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'lfy-3',
    question: 'What do the letters represent?',
    type: 'multiple-choice',
    options: [
      'Business documents',
      'A lifeline of connection - words that bridge physical distance and different ways of living',
      'Postcards from holiday',
      'Official notices',
    ],
    correctIndex: 1,
    explanation:
      'The letters are the thread connecting two different worlds. They represent how language and shared feeling can bridge any distance - physical or experiential.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'lfy-4',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      'Five tercets (three-line stanzas) - a compact, contained form',
      'Free verse with no structure',
      'Rhyming couplets',
    ],
    correctIndex: 1,
    explanation:
      'Five tercets (three-line stanzas) with no regular rhyme. The compact form mirrors the concise, meaningful nature of a letter.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'lfy-5',
    question: 'Who wrote the poem?',
    type: 'multiple-choice',
    options: ['Carol Ann Duffy', 'Maura Dooley', 'Jane Weir', 'Imtiaz Dharker'],
    correctIndex: 1,
    explanation:
      'Maura Dooley is a contemporary British poet. Letters from Yorkshire explores how communication sustains relationships across distance and difference.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'lfy-6',
    question: 'What does the phrase "heartful of headlines" (line 7) suggest about the speaker?',
    type: 'multiple-choice',
    options: [
      'She works as a newspaper editor',
      'Her life is full of the news, and the alliteration of heart and head suggests it weighs on her feelings as well as her mind',
      'She is in love with the man',
      'She dislikes reading',
    ],
    correctIndex: 1,
    explanation:
      'The coined word "heartful" suggests her heart is loaded with the news she takes in, and the alliteration pairs heart and head, feeling and thought. Her world is made of other people\'s stories and a screen; his is made of soil, ice and snow.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'lfy-7',
    question: 'How does the poem present the contrast between two ways of living?',
    type: 'multiple-choice',
    options: [
      'One is clearly better than the other',
      'Both are presented as valid - the physical/rural and intellectual/urban lives complement each other',
      'Only the rural life is valued',
      'Only the urban life is valued',
    ],
    correctIndex: 1,
    explanation:
      'The poem resolves its initial anxiety by recognising both ways of living are valid. What matters is not what you do but your capacity for observation, thought, and connection.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'lfy-8',
    question: 'What is the effect of the metaphor "air and light" (line 13)?',
    type: 'multiple-choice',
    options: [
      'It describes the weather in the city',
      'It presents his letters as carrying the fresh outdoors of his world to her, so that writing becomes a gift',
      'It suggests the letters are empty',
      'It is a cliche',
    ],
    correctIndex: 1,
    explanation:
      'Line 13 presents writing a letter as filling an envelope with the freshness of his world. A letter carries not just information but the feeling of a place, which is why the speaker welcomes his so warmly.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'lfy-9',
    question: 'What is the ambiguity about the relationship between the two people?',
    type: 'multiple-choice',
    options: [
      'They are clearly married',
      'Dooley deliberately leaves the nature of the relationship undefined - friends, lovers, or family - making it universal',
      'They are strangers',
      'They are work colleagues',
    ],
    correctIndex: 1,
    explanation:
      'The poem never defines the relationship precisely. This ambiguity makes the poem universal - it could be about any deep connection maintained across distance.',
    topic: 'Meaning',
    difficulty: 'grade-9',
  },
  {
    id: 'lfy-10',
    question: 'Which poem pairs best with Letters from Yorkshire?',
    type: 'multiple-choice',
    options: ["Porphyria's Lover", 'Sonnet 29 by Barrett Browning', 'Neutral Tones', 'Ozymandias'],
    correctIndex: 1,
    explanation:
      'Both Letters from Yorkshire and Sonnet 29 explore the tension between physical presence and distance in a relationship. Both value connection but from different perspectives.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Letters from Yorkshire explores connection across distance, the value of different lifestyles, communication, and the power of shared observation.',
    keyPoints: [
      'Connection through letters - words bridge physical distance',
      'Two ways of living - physical/rural vs intellectual/urban',
      'Both are valid - what matters is observation and care',
      'Communication sustains relationships',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Dooley uses nature imagery, rhetorical questioning, and simple, precise language to explore how words carry experience across distance.',
    keyPoints: [
      'Nature imagery - the returning lapwings of line 2 signal the coming spring',
      '"More real" (line 9) - questioning the value of different lives',
      'Letters as lifeline - "air and light" (line 13) sent in an envelope',
      'Simple, precise language mirrors the clarity of a good letter',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Five compact tercets with no regular rhyme - the form mirrors the concise, meaningful nature of a letter.',
    keyPoints: [
      'Tercets - compact, contained stanzas like paragraphs in a letter',
      'No regular rhyme - natural, conversational tone',
      'Enjambment - thoughts flow across line and stanza breaks',
      'Tense - a past-tense first stanza gives way to the present, so the connection is ongoing and alive',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Dooley present the importance of communication in Letters from Yorkshire?',
  'Compare how relationships are maintained across distance in Letters from Yorkshire and one other poem from the anthology.',
  'How does Dooley use language and structure to explore what connects people?',
]

const comparePoems = [
  {
    title: 'Eden Rock',
    poet: 'Charles Causley',
    link: '/revision/poetry/love-and-relationships/eden-rock',
    reason:
      "Both explore non-romantic love sustained across distance. Dooley's correspondents are separated by geography; Causley's speaker is separated from his parents by death.",
    themes: ['Distance', 'Connection', 'Memory'],
  },
  {
    title: 'Walking Away',
    poet: 'Cecil Day-Lewis',
    link: '/revision/poetry/love-and-relationships/walking-away',
    reason:
      'Both meditate on how love is expressed through quiet acts rather than grand declarations. Day-Lewis finds love in letting go; Dooley finds it in everyday correspondence.',
    themes: ['Love', 'Distance', 'Reflection'],
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason:
      "Both contrast intellectual and physical worlds. Heaney's father ploughs while he writes poetry; Dooley's correspondent digs while she types at a screen.",
    themes: ['Rural life', 'Identity', 'Nature vs Intellect'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function LettersFromYorkshirePage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Letters from Yorkshire by Maura Dooley - Analysis & Annotations"
        description="Line-by-line analysis of Letters from Yorkshire with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
          <h1 className="text-heading-lg font-heading text-foreground">Letters from Yorkshire</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Maura Dooley &middot; <em>Sound Barrier: Poems 1982–2002</em> (2002)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Distance', 'Connection', 'Nature', 'Technology', 'Authenticity', 'Communication'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Letters from Yorkshire"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Letters from Yorkshire"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={lettersPoem} />

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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        The poem is paraphrased line by line here, not printed. Short quotations are used for
        criticism and review under UK fair-dealing provisions (Copyright, Designs and Patents Act
        1988, s.30) and remain the intellectual property of the respective rights holders. The full
        text is printed in the AQA Love and Relationships anthology.
      </footer>
    </div>
  )
}
