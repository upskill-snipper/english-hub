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

const beforeYouWereMinePOem: PoemData = {
  title: 'Before You Were Mine',
  poet: 'Carol Ann Duffy',
  // NOTE: "Before You Were Mine" (Carol Ann Duffy, 1993) is in copyright. To
  // avoid reproducing the poem, each line below is given as a PARAPHRASE in the
  // site's own words, one entry per line of the poem, and the notes quote only
  // short phrases. Students must read the full text in the AQA Love and
  // Relationships anthology.
  // Until 25 September 2026 this array held descriptions written without the
  // text to hand. From the eighth line on they described things the poem does
  // not contain, and they ran four lines in the third stanza and six in the
  // fourth, so the viewer, which numbers entries by position, numbered them
  // wrongly. The poem has four stanzas of five lines, and the entries below
  // follow it. On 26 September 2026 they were checked against the text printed
  // by the Scottish Poetry Library and in the AQA anthology, and the summary,
  // the form notes and one quiz question, which still described lines and
  // techniques the poem does not contain, were rewritten to match. The page
  // quotes 29 of the poem's words in all, counted once; the guard's cap is 56,
  // but POEM_WORDS in src/__tests__/helpers/poets.ts records the poem as 375
  // words when it is about 197, so 29 is what 15 per cent of the real poem allows.
  lines: [
    // Stanza 1
    {
      text: '[Paraphrase] A decade before the speaker\u2019s birth, her mother laughs on a street corner.',
      annotations: [
        {
          type: 'Time shift',
          note: "The speaker projects herself back in time to ten years before her own birth, imagining her mother's youth. This creates a possessive, controlling perspective over the past.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] She is out with two friends, Jean Duff and Maggie McGeeney.',
      annotations: [
        {
          type: 'Detail',
          note: "Naming real friends grounds the poem in autobiographical specificity. These are real people from the poet's mother's life, giving the poem documentary authenticity.",
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] The three friends double over, clinging on to',
      annotations: [
        {
          type: 'Visual imagery',
          note: 'The image of three young women doubled over with laughter is vivid and joyful. The mother is carefree, young, and full of life \u2014 before motherhood changed everything.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] one another or their own knees, and scream with laughter at the ground.',
      annotations: [
        {
          type: 'Verb choice',
          note: 'The chosen verb conveys uninhibited, wild laughter. The mother was loud, free, and unself-conscious \u2014 qualities the speaker associates with her pre-motherhood identity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] Her spotted dress billows about her legs. A one-word sentence: Marilyn.',
      annotations: [
        {
          type: 'Allusion',
          note: 'The Marilyn Monroe allusion recalls Monroe\u2019s iconic dress-blowing scene. The mother is glamorous and sexy \u2014 an image that clashes with her later identity as a parent.',
          color: '#ef4444',
        },
        {
          type: 'Caesura',
          note: 'The full stop isolates the single-word allusion, making it land with dramatic impact \u2014 a one-word sentence that transforms the mother into a movie star.',
          color: '#8b5cf6',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    {
      text: '[Paraphrase] The speaker is not born yet; no one gives a thought to her',
      annotations: [
        {
          type: 'Possessive tone',
          note: 'The speaker is almost jealous of this time when her mother existed without her. The line stresses the mother\u2019s total freedom from parental responsibility.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: '[Paraphrase] in a dance hall of admiring eyes and bubbly, cinematic futures',
      annotations: [
        {
          type: 'Imagery',
          note: 'The ballroom imagery evokes a room full of admiring gazes; the effervescent description suggests excitement and champagne-like energy. The mother\u2019s youth is intoxicating.',
          color: '#10b981',
        },
        {
          type: 'Metaphor',
          note: 'The cinematic image of her future suggests it seemed glamorous and full of possibility, like a film. Motherhood was not the script she imagined.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] that a suitable partner walking her home might bring. The speaker is sure her mother danced',
      annotations: [
        {
          type: 'Enjambment',
          note: 'Sentences run across the line breaks here: the effervescent futures spill into this line, and the speaker\u2019s certainty about how her mother would dance spills into the next. The flow mimics the energy of the dance hall.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] in just that style. Back then, before she was the speaker\u2019s, Grandma waits at the tenement entrance',
      annotations: [
        {
          type: 'Detail',
          note: 'Before motherhood, the mother was herself a daughter: her own mother waits at the "close", the Scots word for the shared entrance to a tenement, ready to punish her for coming home late. The local detail roots the poem in working-class Glasgow.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] ready to punish her for coming in late. Her mother judges the risk worthwhile.',
      annotations: [
        {
          type: 'Colloquial tone',
          note: 'The informal, conversational phrasing sounds like the speaker teasing her mother, imagining her deciding that the fun was worth the punishment. The tone is warm and intimate.',
          color: '#3b82f6',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: '[Paraphrase] Was the decade before her demanding baby cry her mother\u2019s best, she asks.',
      annotations: [
        {
          type: 'Self-awareness',
          note: 'The speaker admits that her arrival ended what she suggests was her mother\u2019s best decade: she knows it was her birth, not just time, that took her mother\u2019s youth away.',
          color: '#f59e0b',
        },
        {
          type: 'Possessive language',
          note: 'The speaker calls her own newborn cry "possessive", naming the poem\u2019s central idea: her claim on her mother began the moment she was born.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: '[Paraphrase] She recalls slipping her small hands into the old red stilettos, now relics,',
      annotations: [
        {
          type: 'Imagery',
          note: 'The red high heels are called "relics", as if they were sacred objects left from a vanished era. As a child the speaker handles them, touching a glamorous past she can only reach through things.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] Now the ghost of her young mother noisily crosses George Square towards her',
      annotations: [
        {
          type: 'Role reversal',
          note: 'The ghost here is not a dead person but the mother\u2019s own younger self, and it is the daughter who is haunted. The usual pattern of haunting is turned round: the living mother\u2019s lost youth pursues her child, its noisy approach recalling the high heels of the line before.',
          color: '#ef4444',
        },
      ],
    },
    { text: '[Paraphrase] until she sees her, as vivid as a remembered perfume, beneath the tree' },
    {
      text: '[Paraphrase] strung with lights, and asks, affectionately, who gave her those love bites.',
      annotations: [
        {
          type: 'Ambiguity',
          note: 'The question about the marks on her mother\u2019s neck is left unanswered: they hint at a lover the speaker never knew, and at a part of her mother\u2019s life that is closed to her.',
          color: '#f59e0b',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: '[Paraphrase] The cha-cha: her mother taught her its steps walking back from Mass,',
      annotations: [
        {
          type: 'Identification',
          note: 'Here the speaker\u2019s own childhood memory joins the imagined past: the mother teaches her daughter the dance steps, passing her younger self on to the child.',
          color: '#ec4899',
        },
        {
          type: 'Sound',
          note: 'The name of the dance, called out as an exclamation, is rhythmic and onomatopoeic, evoking the beat of the steps. It brings the memory alive through sound.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] their feet striking sparks off a street not meant for dancing. Already, as a child,',
      annotations: [
        {
          type: 'Alliteration',
          note: 'The alliterative "stamping stars" makes the dancing feet strike sparks from the pavement, turning an ordinary walk home into something magical.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] she wanted that daring, flirtatious young woman seen at Portobello,',
      annotations: [
        {
          type: 'Possessive language',
          note: 'The verb of wanting is controlling and acquisitive. The speaker claims desire for a version of her mother that existed before her \u2014 as though the mother belongs to her in every era.',
          color: '#ec4899',
        },
        {
          type: 'Characterisation',
          note: 'The young mother is bold and flirtatious - self-assured, independent, and free. This is a woman who has not yet been defined by motherhood.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] in Scotland, prior to her own birth. The glamour of that love has not faded',
    },
    {
      text: '[Paraphrase] in the time when her mother shone, danced and laughed, before being hers.',
      annotations: [
        {
          type: 'Polysyndeton',
          note: 'The repeated conjunction creates a breathless, excited list. Each verb captures a different facet of the mother\u2019s vitality \u2014 she is dazzling, joyful, and alive.',
          color: '#f59e0b',
        },
        {
          type: 'Possessive language',
          note: 'The poem closes on its title phrase, so the last word it gives is "mine": a final claim of ownership over the mother.',
          color: '#ec4899',
        },
        {
          type: 'Repetition',
          note: 'The title phrase returns in the final line after appearing in the second stanza, giving the poem a circular shape: it ends on the claim of possession it began with.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context:
    '<p><strong>Carol Ann Duffy (b. 1955)</strong> is a Scottish poet who served as Poet Laureate of the United Kingdom from 2009 to 2019 \u2014 the first woman and first openly LGBTQ+ person to hold the role. Her poetry often explores themes of identity, love, and the lives of women.</p>' +
    "<p><strong>Before You Were Mine</strong> was published in <em>Mean Time</em> (1993). The poem is addressed to Duffy's mother, imagining her life as a young, glamorous woman in 1950s Glasgow before she became a parent.</p>" +
    "<p>The poem is inspired by <strong>a photograph</strong> of Duffy's mother as a young woman, laughing with friends. Duffy has said the photo made her realise her mother had a whole life and identity before motherhood.</p>" +
    '<p>The title reverses the expected parent-child dynamic: rather than a parent saying a child was born, the daughter possessively frames a time before her mother was <em>hers</em> \u2014 claiming ownership of her mother.</p>' +
    '<p>The poem raises questions about <strong>how motherhood changes identity</strong>, whether children have the right to claim their parents, and how we romanticise the past through photographs and imagination.</p>' +
    "<p><em>Editorial note: the poem is paraphrased line by line here rather than reproduced, because Duffy's work is in copyright. The short phrases quoted on this page were checked word for word against the text printed by the Scottish Poetry Library and in the AQA Love &amp; Relationships anthology. Read the whole poem there, or in Carol Ann Duffy, <em>Mean Time</em> (Anvil Press, 1993).</em></p>",

  contextAr:
    '<p><strong>Carol Ann Duffy (\u0645\u0648\u0627\u0644\u064a\u062f 1955)</strong> \u0634\u0627\u0639\u0631\u0629 \u0627\u0633\u0643\u062a\u0644\u0646\u062f\u064a\u0629\u060c \u0634\u063a\u0644\u062a \u0645\u0646\u0635\u0628 Poet Laureate \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0645\u0646 2009 \u0644\u064a\u0646 2019 \u2014 \u0648\u0643\u0627\u0646\u062a \u0623\u0648\u0644 \u0627\u0645\u0631\u0623\u0629 \u0648\u0623\u0648\u0644 \u0634\u062e\u0635 \u0645\u0639\u0644\u0646 \u0625\u0646\u0647 LGBTQ+ \u064a\u062d\u0645\u0644 \u0627\u0644\u0644\u0642\u0628. \u0634\u0639\u0631\u0647\u0627 \u0639\u0627\u062f\u0629 \u064a\u0641\u062a\u062d \u0645\u0648\u0627\u0636\u064a\u0639 \u0627\u0644\u0647\u0648\u064a\u0629\u060c \u0648\u0627\u0644\u062d\u0628\u060c \u0648\u062d\u064a\u0627\u0629 \u0627\u0644\u0646\u0633\u0627\u0621.</p>' +
    '<p>\u0642\u0635\u064a\u062f\u0629 <strong>Before You Were Mine</strong> \u0627\u0646\u062a\u0634\u0631\u062a \u0641\u064a \u0645\u062c\u0645\u0648\u0639\u0629 <em>Mean Time</em> (1993). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0648\u062c\u0651\u0647\u0629 \u0644\u0623\u0645 Duffy\u060c \u0648\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u062a\u062e\u064a\u0651\u0644 \u062d\u064a\u0627\u062a\u0647\u0627 \u0648\u0647\u064a \u0634\u0627\u0628\u0629 \u0628\u0631\u0627\u0642\u0629 \u0641\u064a Glasgow \u0641\u064a \u0627\u0644\u062e\u0645\u0633\u064a\u0646\u0627\u062a\u060c \u0642\u0628\u0644 \u0645\u0627 \u062a\u0635\u064a\u0631 \u0623\u0645.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0633\u062a\u0648\u062d\u0627\u0629 \u0645\u0646 <strong>\u0635\u0648\u0631\u0629 \u0641\u0648\u062a\u0648\u063a\u0631\u0627\u0641\u064a\u0629</strong> \u0644\u0623\u0645 Duffy \u0648\u0647\u064a \u0634\u0627\u0628\u0629 \u062a\u0636\u062d\u0643 \u0645\u0639 \u0635\u062f\u064a\u0642\u0627\u062a\u0647\u0627. Duffy \u0642\u0627\u0644\u062a \u0625\u0646 \u0627\u0644\u0635\u0648\u0631\u0629 \u0647\u064a \u0627\u0644\u0644\u064a \u062e\u0644\u0651\u062a\u0647\u0627 \u062a\u0646\u062a\u0628\u0647 \u0625\u0646 \u0623\u0645\u0647\u0627 \u0639\u0627\u0634\u062a \u062d\u064a\u0627\u0629 \u0643\u0627\u0645\u0644\u0629 \u0648\u0643\u0627\u0646\u062a \u0644\u0647\u0627 \u0647\u0648\u064a\u0629 \u0645\u0633\u062a\u0642\u0644\u0651\u0629 \u0642\u0628\u0644 \u0627\u0644\u0623\u0645\u0648\u0645\u0629.</p>' +
    '<p>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u0642\u0644\u0628 \u0627\u0644\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0627\u0644\u0645\u062a\u0648\u0642\u0651\u0639\u0629 \u0628\u064a\u0646 \u0627\u0644\u0623\u0645 \u0648\u0628\u0646\u062a\u0647\u0627: \u0628\u062f\u0644 \u0645\u0627 \u064a\u0643\u0648\u0646 \u0643\u0644\u0627\u0645 \u0623\u0645 \u0639\u0646 \u0648\u0644\u0627\u062f\u0629 \u0637\u0641\u0644\u0647\u0627\u060c \u0627\u0644\u0628\u0646\u062a \u0628\u0646\u0628\u0631\u0629 \u0645\u0633\u062a\u062d\u0648\u0630\u0629 \u062a\u062a\u0635\u0648\u0651\u0631 \u0632\u0645\u0646 \u0642\u0628\u0644 \u0645\u0627 \u062a\u0643\u0648\u0646 \u0623\u0645\u0647\u0627 <em>\u0644\u0647\u0627</em> \u2014 \u0648\u062a\u062f\u0651\u0639\u064a \u0645\u0644\u0643\u064a\u0629 \u0623\u0645\u0647\u0627.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0637\u0631\u062d \u0623\u0633\u0626\u0644\u0629 \u0639\u0646 <strong>\u0643\u064a\u0641 \u0627\u0644\u0623\u0645\u0648\u0645\u0629 \u062a\u063a\u064a\u0651\u0631 \u0627\u0644\u0647\u0648\u064a\u0629</strong>\u060c \u0648\u0647\u0644 \u0645\u0646 \u062d\u0642 \u0627\u0644\u0623\u0628\u0646\u0627\u0621 \u064a\u062f\u0651\u0639\u0648\u0646 \u0645\u0644\u0643\u064a\u0629 \u0648\u0627\u0644\u062f\u064a\u0647\u0645\u060c \u0648\u0643\u064a\u0641 \u0646\u062d\u0646 \u0646\u0631\u0648\u0645\u0646\u0633 \u0627\u0644\u0645\u0627\u0636\u064a \u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0635\u0648\u0631 \u0648\u0627\u0644\u062e\u064a\u0627\u0644.</p>' +
    '<p><em>ملاحظة تحريرية: القصيدة هنا معروضة بإعادة صياغة بيت بيت وما هي منقولة، لأن أعمال Duffy محمية بحقوق نشر. العبارات القصيرة المقتبسة في هالصفحة متحقَّق منها كلمة كلمة مقابل النص اللي تنشره Scottish Poetry Library والنص في أنثولوجيا AQA لمحور الحب والعلاقات. اقرأ القصيدة كاملة هناك، أو في Carol Ann Duffy، <em>Mean Time</em> (Anvil Press، 1993).</em></p>',

  summary:
    "Stanza 1 (lines 1–5): The speaker imagines her mother ten years before she was born, laughing with two friends on a street corner. Her dress blows round her legs like Marilyn Monroe's: she is young, glamorous and free.\n\n" +
    "Stanza 2 (lines 6–10): The speaker is not born yet. Her mother dances in a ballroom full of admiring eyes, with an exciting, film-like future ahead of her, and comes home late to face her own mother's punishment, which she thinks worth it. The title phrase first appears here (line 9).\n\n" +
    "Stanza 3 (lines 11–15): The speaker asks whether the decade before her birth was her mother's best. She remembers, as a child, putting her hands into her mother's old red high heels, and the ghost of the young mother comes towards her across George Square. The possessive language intensifies.\n\n" +
    'Stanza 4 (lines 16–20): The speaker recalls her mother teaching her dance steps on the way home from Mass. Even then she wanted the bold young woman her mother had been, and the poem ends in the glamorous past where that woman still shines and dances, on the title phrase (line 20).',

  summaryAr:
    'المقطع الأول (الأبيات 1–5): المتكلّمة تتخيّل أمها قبل ولادتها بعشر سنين، وهي تضحك مع صديقتين على ركن شارع. فستانها يطير حول رجولها مثل فستان Marilyn Monroe: هي شابة، برّاقة، وحرّة.\n\n' +
    'المقطع الثاني (الأبيات 6–10): المتكلّمة لين الحين ما انولدت. أمها ترقص في قاعة رقص مليانة عيون معجبة، وقدّامها مستقبل مثير مثل الأفلام، وترجع البيت متأخّرة وتواجه عقاب أمها، وتشوف إن السهرة تستاهل. وعبارة العنوان تطلع أول مرّة هنا (البيت 9).\n\n' +
    'المقطع الثالث (الأبيات 11–15): المتكلّمة تسأل إذا كان العقد اللي قبل ولادتها هو أحلى سنين أمها. تتذكّر وهي طفلة إنها تدخّل يدينها في كعب أمها الأحمر القديم، وشبح الأم الشابة يجيها عبر George Square. ولغة الاستحواذ تشتد في هالمقطع.\n\n' +
    'المقطع الرابع (الأبيات 16–20): المتكلّمة تتذكّر أمها وهي تعلّمها خطوات الرقص في طريق الرجعة من القدّاس. حتى وقتها كانت تبي الشابة الجريئة اللي كانت أمها، والقصيدة تخلص في الماضي البرّاق اللي هالشابة لين الحين تلمع وترقص فيه، على عبارة العنوان (البيت 20).',

  formAndStructure:
    'Form: Four quintains (five-line stanzas), giving the poem a regular, balanced structure that contrasts with the messy emotional content of nostalgia and possession.\n\n' +
    'Present tense about the past: Duffy uses the present tense to describe events that happened before she was born. This makes the past feel vivid and immediate, as though the speaker is actually there: an act of imaginative possession.\n\n' +
    "Possessive language: The title itself establishes a possessive dynamic. The idea of the mother as the speaker's own recurs throughout: in the possessive cry of line 11, the verb of wanting in line 18 and a child's demanding gestures. The mother is treated as belonging to the speaker.\n\n" +
    'Direct address: The poem is addressed to the mother throughout, creating an intimate, confrontational tone, almost like an accusation of having had a life before the speaker existed.\n\n' +
    "Cyclical structure: The title phrase appears in the second stanza (line 9) and returns as the poem's last words (line 20), creating a circular structure that traps the mother in the speaker's possessive gaze.\n\n" +
    'Enjambment: Lines flow into each other, particularly between stanzas, reflecting the blurring of past and present, memory and imagination.\n\n' +
    "Contrast: The poem constantly contrasts the mother's glamorous youth with the implied domesticity of motherhood. The time before is dazzling; the time after is largely absent.",

  formAndStructureAr:
    'الشكل (Form): أربعة quintain (مقاطع من خمسة أبيات)، وهذا يعطي القصيدة بنية منتظمة ومتوازنة، تتناقض مع الفوضى العاطفية للحنين والاستحواذ.\n\n' +
    'الزمن الحاضر للحديث عن الماضي: Duffy تستخدم الزمن الحاضر عشان توصف أحداث صارت قبل ولادتها. هالشي يخلّي الماضي يحس به القارئ كأنه حيّ ومباشر، كأن المتكلّمة فعلاً موجودة هناك: وهذا فعل استحواذ بالخيال.\n\n' +
    'لغة الاستحواذ (Possessive language): العنوان نفسه يأسّس الديناميكية المستحوذة. فكرة إن الأم ملك للمتكلّمة تتكرر في كل مكان: في الصرخة المستحوذة في البيت 11، وفي فعل الرغبة في البيت 18، وفي حركات الطفلة المطالِبة. الأم تتعامل معها المتكلّمة كأنها ملك لها.\n\n' +
    'الخطاب المباشر (Direct address): القصيدة كلها موجّهة للأم، وهذا يخلق نبرة حميمة ومواجهة في نفس الوقت، تقريباً مثل اتهام لأمها إنها عاشت حياة قبل ما توجد المتكلّمة.\n\n' +
    'البنية الدائرية (Cyclical structure): عبارة العنوان تطلع في المقطع الثاني (البيت 9) وترجع كآخر كلمات في القصيدة (البيت 20)، وهذا يخلق بنية دائرية تحبس الأم في نظرة المتكلّمة المستحوذة.\n\n' +
    'Enjambment: الأبيات تنساب من واحد للثاني، خصوصاً بين المقاطع، وهذا يعكس التداخل بين الماضي والحاضر، وبين الذاكرة والخيال.\n\n' +
    'التضاد (Contrast): القصيدة طول الوقت تضع شباب الأم البرّاق مقابل الجو المنزلي الضمني للأمومة. الزمن اللي قبل متلألئ؛ أما الزمن اللي بعد فيكاد يكون غايب تماماً.',

  // NOTE: the `quote` field is rendered by the viewer wrapped in quotation
  // marks. Until 26 September 2026 these entries were descriptions of moments
  // in the poem ("Stanza 2 - the ...") printed as if they were quotations, and
  // four described things the poem does not contain: a verb casting the speaker
  // as the catalyst of her mother's change, a run of five verbs where the last
  // line has three, a closing ghost image in stanza 4 (the ghost is in line 13),
  // and a feet/street rhyme. Each is now a short phrase checked word for word
  // against the Scottish Poetry Library's text and the AQA anthology (Past and
  // present: poetry anthology, sample, filestore.aqa.org.uk AQA-8702-TG-POEMS.PDF),
  // which prints the poem by permission of Rogers, Coleridge & White.
  keyQuotes: [
    {
      quote: 'Before you were mine',
      analysis:
        'The title phrase appears twice in the poem, in the middle of the second stanza (line 9) and as its last words (line 20). It reverses parental possession: rather than a parent marking a child’s birth, the daughter claims a time before her mother belonged to her. Ending on the phrase gives the poem a circular shape, and its last word, "mine", is a claim of ownership.',
      themes: ['Love', 'Possession', 'Family'],
      analysisAr:
        'عبارة العنوان تطلع مرتين في القصيدة: في منتصف المقطع الثاني (البيت 9) وكآخر كلمات فيها (البيت 20). وهي تقلب الاستحواذ الأبوي: بدل ما يكون كلام أم عن ولادة طفلها، البنت تدّعي زمن قبل ما تكون أمها لها. والختام بنفس العبارة يعطي القصيدة شكل دائري، وآخر كلمة فيها "mine" ادّعاء ملكية.',
      themesAr: ['الحب', 'الاستحواذ', 'العائلة'],
    },
    {
      quote: 'Marilyn.',
      analysis:
        'Line 5 ends on a one-word sentence. The name recalls Marilyn Monroe and her famous scene in a billowing white dress, so the mother, her spotted dress lifting round her legs, becomes a glamorous icon. The full stop isolates the name for dramatic force: the mother is confident, attractive and admired.',
      themes: ['Youth', 'Glamour', 'Identity'],
      analysisAr:
        'البيت 5 يخلص بجملة من كلمة وحدة. الاسم يستدعي Marilyn Monroe ومشهدها المشهور بالفستان الأبيض اللي يطير، فالأم وفستانها المنقّط يرتفع حول رجولها تصير أيقونة برّاقة. والنقطة تعزل الاسم بثقل درامي: الأم واثقة، جذّابة، ومثار إعجاب.',
      themesAr: ['الشباب', 'البريق', 'الهوية'],
    },
    {
      quote: 'fizzy, movie tomorrows',
      analysis:
        'The mother’s future is imagined as a young woman might picture it: "fizzy" like a drink full of bubbles, exciting and effervescent, and "movie" like a film, glamorous and full of romance. The unusual plural, "tomorrows", multiplies the possibilities. Motherhood was not the script she imagined for herself.',
      themes: ['Youth', 'Nostalgia', 'Lost Potential'],
      analysisAr:
        'مستقبل الأم متخيَّل مثل ما تتخيّله بنت صغيرة: "fizzy" مثل مشروب مليان فقاعات، حماس وفوران، و"movie" مثل فيلم، برّاق ومليان رومانسية. وصيغة الجمع الغريبة "tomorrows" تضاعف الاحتمالات. الأمومة ما كانت السيناريو اللي تخيّلته لنفسها.',
      themesAr: ['الشباب', 'الحنين', 'الإمكانات الضايعة'],
    },
    {
      quote: 'loud, possessive yell',
      analysis:
        'The speaker describes her own newborn cry (line 11), which ended the decade she suggests was her mother’s best. "Possessive" names the poem’s central idea: from the moment she was born she claimed her mother. The casual question tag that closes the line teases, but it also admits the cost of her arrival.',
      themes: ['Family', 'Possession', 'Guilt'],
      analysisAr:
        'المتكلّمة تصف صرختها وهي مولودة (البيت 11)، الصرخة اللي أنهت العقد اللي تلمّح إنه كان أحلى سنين أمها. وكلمة "possessive" تسمّي فكرة القصيدة الأساسية: من لحظة ولادتها وهي تدّعي أمها لها. والسؤال العفوي اللي يختم البيت فيه مزح، بس هو كذلك اعتراف بثمن ولادتها.',
      themesAr: ['العائلة', 'الاستحواذ', 'الإحساس بالذنب'],
    },
    {
      quote: 'relics',
      analysis:
        'As a child the speaker puts her hands into her mother’s old red high heels (line 12). Calling them "relics" makes them the sacred remains of a vanished era, like the belongings of a saint: the glamorous past survives only in objects, and the daughter can reach it only through them.',
      themes: ['Memory', 'Nostalgia', 'Childhood'],
      analysisAr:
        'وهي طفلة، المتكلّمة تدخّل يدينها في كعب أمها الأحمر القديم (البيت 12). وتسميته "relics" (آثار مقدّسة) يخلّيه بقايا مقدّسة من زمن راح، مثل مقتنيات قدّيس: الماضي البرّاق ما بقى منه إلا الأشياء، والبنت ما تقدر توصله إلا عن طريقها.',
      themesAr: ['الذاكرة', 'الحنين', 'الطفولة'],
    },
    {
      quote: 'your ghost clatters',
      analysis:
        'The ghost of line 13 is not a dead person but the mother’s own younger self, and it is the daughter who is haunted: the usual pattern of haunting is turned round. "Clatters" gives the ghost the noise of high heels on stone, echoing the red shoes of the line before, so the memory of the shoes summons the young woman who wore them.',
      themes: ['Loss', 'Identity', 'Memory'],
      analysisAr:
        'الشبح في البيت 13 مو شخص ميّت، بل ذات الأم الأصغر، والبنت هي اللي يطاردها الشبح: النمط المعتاد للمطاردة ينقلب. وكلمة "clatters" تعطي الشبح صوت الكعب على الحجر، وتردّد صدى الكعب الأحمر في البيت اللي قبله، فذكرى الكعب تستدعي الشابة اللي كانت تلبسه.',
      themesAr: ['الفقد', 'الهوية', 'الذاكرة'],
    },
    {
      quote: 'stamping stars',
      analysis:
        'The mother teaches the child dance steps on the way home from Mass (lines 16 to 17), and their feet seem to strike stars from the pavement. The alliteration lets the steps be heard, and the image turns an ordinary walk home into something magical: for a moment the daughter meets the glamorous young woman inside the mother she knew.',
      themes: ['Childhood', 'Joy', 'Memory'],
      analysisAr:
        'الأم تعلّم بنتها خطوات الرقص وهم راجعين من القدّاس (الأبيات 16 و17)، ورجولهم كأنها تطلّع نجوم من الرصيف. الـalliteration يخلّي صوت الخطوات مسموع، والصورة تحوّل مشي عادي للبيت إلى شي سحري: للحظة البنت تلتقي الشابة البرّاقة داخل الأم اللي تعرفها.',
      themesAr: ['الطفولة', 'الفرح', 'الذاكرة'],
    },
    {
      quote: 'bold girl winking',
      analysis:
        'The speaker says that even as a child she wanted this earlier version of her mother (line 18), bold and flirtatious, seen at Portobello before the speaker was born. The verb of wanting is possessive: she claims a woman who existed before her, as though the mother belonged to her in every era.',
      themes: ['Possession', 'Nostalgia', 'Admiration'],
      analysisAr:
        'المتكلّمة تقول إنها حتى وهي طفلة كانت تبي هالنسخة القديمة من أمها (البيت 18)، الجريئة والمغازِلة، في Portobello قبل ما تنولد. وفعل الرغبة فيه استحواذ: تدّعي امرأة كانت موجودة قبلها، كأن الأم ملكها في كل زمن.',
      themesAr: ['الاستحواذ', 'الحنين', 'الإعجاب'],
    },
    {
      quote: 'sparkle and waltz and laugh',
      analysis:
        'Three verbs joined by repeated conjunctions (polysyndeton) create a breathless, energetic rhythm, each catching a different quality: light, grace, joy. The glamorous love the speaker imagines lasts in this present tense, and line 20 ends on the title phrase, closing the poem’s circle.',
      themes: ['Youth', 'Vitality', 'Joy'],
      analysisAr:
        'ثلاث أفعال موصولة بأداة ربط متكرّرة (polysyndeton) تصنع إيقاع لاهث ومتحمّس، كل فعل يلتقط صفة: ضوء، رشاقة، فرح. والحب البرّاق اللي تتخيّله المتكلّمة يدوم في هالزمن الحاضر، والبيت 20 يخلص بعبارة العنوان، فتنقفل دائرة القصيدة.',
      themesAr: ['الشباب', 'الحيوية', 'الفرح'],
    },
  ],

  // NOTE: the `example` field is rendered wrapped in quotation marks by the
  // viewer, so each is a short phrase checked against the sources named above.
  // lineRef is the entry's index in `lines`, stanza breaks included, so the
  // viewer highlights the right entry. Until 26 September 2026 the polysyndeton
  // and role-reversal entries pointed at the wrong lines, and an internal-rhyme
  // entry described a rhyme the poem does not have; it is replaced by the
  // simile of line 14.
  languageDevices: [
    {
      device: 'Allusion',
      example: 'Marilyn.',
      effect:
        'The reference to Marilyn Monroe casts the mother as a glamorous, desirable icon. It elevates her from an ordinary woman to a cultural figure, emphasising what was lost when she became a mother.',
      lineRef: 4,
      effectAr:
        'الإشارة إلى Marilyn Monroe ترسم الأم على إنها أيقونة برّاقة ومرغوبة. وترفعها من امرأة عادية إلى شخصية ثقافية، عشان تأكّد على اللي فُقد لمن صارت أم.',
    },
    {
      device: 'Possessive language',
      example: 'possessive',
      effect:
        'The speaker repeatedly claims ownership of her mother: in the title, in the possessive cry of line 11 and in the wanting of line 18. The possessive in the title sets the tone for a poem that treats the mother as the speaker’s possession, subverting the usual parent-child power dynamic.',
      lineRef: 12,
      effectAr:
        'المتكلّمة تدّعي ملكية أمها مرّة بعد مرّة: في العنوان، وفي الصرخة المستحوذة في البيت 11، وفي الرغبة في البيت 18. والضمير المُلكي في العنوان يضبط نبرة القصيدة كلها: قصيدة تتعامل مع الأم على إنها ملك للمتكلّمة، وهذا يقلب ديناميكية السلطة المعتادة بين الأم وبنتها.',
    },
    {
      device: 'Present tense',
      example: 'shriek',
      effect:
        "Using the present tense for past events makes the mother's youth feel vivid, immediate and ongoing: the friends shriek with laughter in line 4 as if the photograph had started to move. The speaker imaginatively inserts herself into a past she never witnessed.",
      lineRef: 3,
      effectAr:
        'استخدام الزمن الحاضر لأحداث ماضية يخلّي شباب الأم يحسّ به القارئ كأنه حيّ ومباشر ومستمر لين الحين: الصديقات يصرخون من الضحك في البيت 4 كأن الصورة الفوتوغرافية بدت تتحرّك. المتكلّمة تدخل نفسها بالخيال في ماضي ما شافته أبد.',
    },
    {
      device: 'Polysyndeton',
      example: 'sparkle and waltz and laugh',
      effect:
        'The repeated conjunction creates a breathless, accelerating rhythm across three verbs. The mother’s energy seems unstoppable, each verb adding another facet of her vitality.',
      lineRef: 22,
      effectAr:
        'تكرار أداة الربط يخلق إيقاع لاهث ومتسارع عبر ثلاث أفعال. طاقة الأم تبان كأنها ما تتوقّف، وكل فعل يضيف وجه ثاني من حيويتها.',
    },
    {
      device: 'Metaphor',
      example: 'fizzy, movie tomorrows',
      effect:
        "The mother's future is described as fizzy (effervescent, intoxicating) and cinematic. This romanticised vision contrasts with the implied reality of domestic motherhood.",
      lineRef: 7,
      effectAr:
        'مستقبل الأم موصوف على إنه فقّاعي (مُسكِر) وسينمائي. هالرؤية المرومنسة تتناقض مع الواقع الضمني للأمومة المنزلية.',
    },
    {
      device: 'Role reversal',
      example: 'your ghost clatters',
      effect:
        "The mother's younger self becomes a ghost that haunts her daughter. This inverts the expected dynamic: it is not the dead who walk but a living woman's lost youth, and the child is the one who is haunted by it.",
      lineRef: 14,
      effectAr:
        'ذات الأم الأصغر تصير شبح يطارد بنتها. هذا يقلب الديناميكية المتوقّعة: اللي يمشي مو الأموات، بل شباب امرأة حيّة راح، والطفلة هي اللي يطاردها.',
    },
    {
      device: 'Caesura',
      example: 'legs. Marilyn.',
      effect:
        'The full stop isolates the single-word allusion as a one-word sentence, giving it cinematic impact. The pause forces the reader to linger on the comparison, transforming an ordinary detail into a glamorous allusion.',
      lineRef: 4,
      effectAr:
        'النقطة تعزل الإشارة المكوّنة من كلمة واحدة كجملة مستقلّة، وتعطيها أثر سينمائي. التوقّف يجبر القارئ يقف عند المقارنة، ويحوّل تفصيلة عادية إلى allusion برّاقة.',
    },
    {
      device: 'Simile',
      example: 'clear as scent',
      effect:
        'The simile of line 14 mixes the senses: the speaker sees her mother as clearly as one smells a perfume, and scent is the sense most bound up with memory. The young mother is vivid and yet unseen, present only as a trace.',
      lineRef: 15,
      effectAr:
        'الـsimile في البيت 14 يخلط الحواس: المتكلّمة تشوف أمها بوضوح مثل ما تشم عطر، والرائحة هي أكثر حاسّة مرتبطة بالذاكرة. الأم الشابة واضحة ومع ذلك ما تنشاف، حاضرة بس كأثر.',
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'bywm-1',
    question: 'Who is the speaker addressing?',
    type: 'multiple-choice',
    options: [
      'A friend',
      'Her mother - imagining her life before she became a parent',
      'A lover',
      'Herself',
    ],
    correctIndex: 1,
    explanation:
      'Duffy addresses her mother, imagining the glamorous, carefree life she had before motherhood changed everything. The title "Before You Were Mine" suggests possessive love.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'bywm-2',
    question: 'What does the title suggest about the relationship?',
    type: 'multiple-choice',
    options: [
      'The mother belongs to the daughter',
      'The speaker possessively claims her mother - "mine" suggests ownership of the mother by the child',
      'The mother was sold',
      'It refers to a pet',
    ],
    correctIndex: 1,
    explanation:
      'The possessive "mine" in the title reverses the usual parent-child dynamic. The daughter claims ownership of her mother, suggesting love so intense it becomes possessive.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'bywm-3',
    question: 'How does Duffy present the mother before motherhood?',
    type: 'multiple-choice',
    options: [
      'As sad and lonely',
      'As glamorous, carefree, and full of life - dancing, laughing, like Marilyn Monroe',
      'As strict and serious',
      'As elderly',
    ],
    correctIndex: 1,
    explanation:
      'The mother is compared to Marilyn Monroe, shown laughing with friends on a street corner and dancing in a ballroom. She represents freedom, glamour, and youthful joy before motherhood restricted her.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'bywm-4',
    question: 'What is the effect of the Marilyn Monroe reference?',
    type: 'multiple-choice',
    options: [
      'It shows the mother was a film star',
      'It glamorises the mother and suggests her pre-parenthood life was exciting, even iconic',
      'It is a random cultural reference',
      'It shows the mother was American',
    ],
    correctIndex: 1,
    explanation:
      'Comparing the mother to Marilyn Monroe - a glamorous, iconic figure - elevates her ordinary youth into something extraordinary and emphasises what was lost when motherhood began.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'bywm-5',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      'Four quintains (four five-line stanzas) - 20 lines in total, written in free verse',
      'Free verse with no stanza divisions',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      'Four five-line stanzas (quintains) = 20 lines. The regular five-line stanzas create a measured, balanced structure that contrasts with the messy emotional content of nostalgia and possession.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'bywm-6',
    question:
      'In stanza 4 the speaker says she wanted the bold version of her mother even before her own birth. What does this suggest?',
    type: 'multiple-choice',
    options: [
      'The speaker wanted a sister',
      'The speaker loved her mother before she was even born - love transcends chronology',
      'The speaker is selfish',
      'It refers to a friend',
    ],
    correctIndex: 1,
    explanation:
      'Duffy imagines wanting her mother even before being born. This impossibility intensifies the love - it is so powerful it breaks the rules of time itself.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'bywm-7',
    question: 'Who is Carol Ann Duffy?',
    type: 'multiple-choice',
    options: [
      'A Victorian novelist',
      'The first female and first openly gay Poet Laureate, known for dramatic monologues and persona poems',
      'A war correspondent',
      "A children's author only",
    ],
    correctIndex: 1,
    explanation:
      'Carol Ann Duffy (b. 1955) became the UK Poet Laureate in 2009. She is known for giving voice to marginalised perspectives and exploring relationships with vivid, accessible language.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'bywm-8',
    question: 'How does Duffy use tense in the poem?',
    type: 'multiple-choice',
    options: [
      'Only past tense',
      "She blends past and present tense, collapsing time - the mother's past life is imagined as vividly present",
      'Only future tense',
      'Only present tense',
    ],
    correctIndex: 1,
    explanation:
      "Duffy moves between past and present tense, making the mother's pre-parenthood life feel vivid and immediate. Time collapses - the past is as real as the present.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'bywm-9',
    question: 'What tension exists in the poem about motherhood?',
    type: 'multiple-choice',
    options: [
      'None - motherhood is celebrated',
      "The daughter loves being the child, but recognises her birth took away her mother's freedom and glamour",
      'The mother regrets having children',
      'The daughter wants to leave home',
    ],
    correctIndex: 1,
    explanation:
      'The poem contains a bittersweet tension: the daughter is grateful to exist, but acknowledges that her existence cost her mother the carefree, glamorous life she once had.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'bywm-10',
    question: 'Which poem pairs best with Before You Were Mine?',
    type: 'multiple-choice',
    options: [
      'Neutral Tones',
      'Mother, any distance by Simon Armitage',
      'When We Two Parted',
      "Porphyria's Lover",
    ],
    correctIndex: 1,
    explanation:
      "Both explore the mother-child relationship. Before You Were Mine looks back at the mother's past; Mother, any distance explores the present moment of separation.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Before You Were Mine explores possessive love, the impact of motherhood on identity, memory, and the tension between gratitude and guilt.',
    keyPoints: [
      'Possessive love - the daughter claims ownership of her mother',
      'Identity and sacrifice - motherhood changed who the mother was',
      'Memory and imagination - the daughter recreates a past she never witnessed',
      'Time - love transcends chronology',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      "Duffy uses glamorous imagery, pop culture references, sensory detail, and possessive language to recreate her mother's youth.",
    keyPoints: [
      'Marilyn Monroe comparison - the mother as glamorous icon',
      'The possessive title - a claim of ownership over the mother',
      'Dancing and laughing imagery - freedom and joy before motherhood',
      'Wanting the bold young mother even before birth - love that transcends time',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four quintains (five-line stanzas) - 20 lines total - with tense shifts that collapse past and present into a vivid, immediate experience.',
    keyPoints: [
      'Four five-line stanzas (quintains) - 20 lines total',
      'Tense shifts - past becomes present, making memories vivid',
      'Direct address ("you") - intimate, personal tone',
      'No regular rhyme - conversational, natural voice',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Duffy present the relationship between mother and daughter in Before You Were Mine?',
  'Compare how parent-child relationships are presented in Before You Were Mine and one other poem from the anthology.',
  'How does Duffy use language and structure to explore memory and identity?',
]

const comparePoems = [
  {
    title: 'Mother, any distance',
    poet: 'Simon Armitage',
    link: '/revision/poetry/love-and-relationships/mother-any-distance',
    reason:
      "Both explore the mother-child bond. Duffy looks back possessively at her mother's past; Armitage looks forward to the moment of separation.",
    themes: ['Family', 'Love', 'Separation'],
  },
  {
    title: 'Eden Rock',
    poet: 'Charles Causley',
    link: '/revision/poetry/love-and-relationships/eden-rock',
    reason:
      'Both idealise parents in a past setting. Causley places his parents in a heavenly picnic; Duffy places her mother in a glamorous 1950s world.',
    themes: ['Family', 'Nostalgia', 'Memory'],
  },
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason:
      'Both explore connection across distance. Duffy bridges time; Dooley bridges physical distance. Both find intimacy through imagination.',
    themes: ['Love', 'Distance', 'Connection'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function BeforeYouWereMinePage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Before You Were Mine by Carol Ann Duffy - Analysis & Annotations"
        description="Line-by-line analysis of Before You Were Mine with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
          <h1 className="text-heading-lg font-heading text-foreground">Before You Were Mine</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Carol Ann Duffy &middot; <em>Mean Time</em> (1993)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Love', 'Family', 'Possession', 'Nostalgia', 'Identity', 'Youth'].map((theme) => (
          <Badge key={theme} variant="outline" className="text-xs">
            {theme}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Before You Were Mine"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Before You Were Mine"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={beforeYouWereMinePOem} />

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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground space-y-2">
        <p>
          <strong>Rights notice:</strong> &copy; Picador / Pan Macmillan and Rogers Coleridge &amp;
          White on behalf of Carol Ann Duffy (b. 1955). Quotations from{' '}
          <em>Before You Were Mine</em> are short fair-dealing extracts under CDPA 1988 &sect;30
          (criticism, review, quotation). For full text, students should consult the board-licensed
          AQA Love &amp; Relationships anthology or Duffy&rsquo;s collection <em>Mean Time</em>{' '}
          (1993).
        </p>
        <p>
          The poem is paraphrased line by line here rather than reproduced, and only short phrases
          are quoted, for criticism and review under UK fair-dealing provisions (Copyright, Designs
          and Patents Act 1988, s.30). It is printed in full in the AQA Love &amp; Relationships
          anthology. All quotations remain the intellectual property of the respective rights
          holders.
        </p>
      </footer>
    </div>
  )
}
