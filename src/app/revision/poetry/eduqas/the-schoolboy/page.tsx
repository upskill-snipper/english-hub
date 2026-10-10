'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

import { CourseJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'

/* ── Poem data ─────────────────────────────────────────────────────── */

const theSchoolboy: PoemData = {
  title: 'The Schoolboy',
  poet: 'William Blake',
  // Printed as the Eduqas anthology for examination from 2027 prints it (WJEC 2024,
  // ISBN 978-1-86085-774-4, page 4), read from the PDF's text layer on 10 October 2026
  // and checked against an image of the page. Eduqas keeps the spellings "thro’",
  // "nip’d", "strip’d", "learnings" and "&", and closes many lines with a full stop,
  // even inside a question, where the 1901 edition on Project Gutenberg (#1934) prints
  // commas and question marks. The notes below read the sense, not the stops. The words
  // of Blake's 1794 title page quoted in the context are as the Library of Congress
  // records them.
  lines: [
    {
      text: 'I love to rise in a summer morn,',
      annotations: [
        {
          type: 'Opening image',
          note: 'The poem opens in the child’s own voice and in the open air. "I love to rise" is eager and active: on a summer morning, getting up is a pleasure, not a duty.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'When the birds sing on every tree;' },
    { text: 'The distant huntsman winds his horn,' },
    {
      text: 'And the sky-lark sings with me.',
      annotations: [
        {
          type: 'Harmony with nature',
          note: 'The boy does not just hear the sky-lark: it "sings with me". He is part of the morning’s music, with the birds and the huntsman’s horn, which is why the stanza can end "O! what sweet company."',
          color: '#10b981',
        },
      ],
    },
    { text: 'O! what sweet company.' },
    { text: '' },
    {
      text: 'But to go to school in a summer morn,',
      annotations: [
        {
          type: 'Turning point',
          note: 'Line 6 ends with the same words as line 1, "in a summer morn", but "But to go to school" turns that morning into a loss. The morning has not changed; only where the child must spend it.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'O! it drives all joy away;' },
    {
      text: 'Under a cruel eye outworn.',
      annotations: [
        {
          type: 'Surveillance',
          note: 'School is reduced to "a cruel eye": a watcher, not a teacher. "Outworn" makes that eye worn out and joyless, the opposite of the bright morning outside.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'The little ones spend the day.' },
    { text: 'In sighing and dismay.' },
    { text: '' },
    {
      text: 'Ah! then at times I drooping sit,',
      annotations: [
        {
          type: 'Plant imagery',
          note: '"drooping" is a word for a wilting flower or a tired bird, and it prepares for the poem’s later birds and plants. Outside he could "rise"; in school he can only "sit".',
          color: '#10b981',
        },
      ],
    },
    { text: 'And spend many an anxious hour,' },
    { text: 'Nor in my book can I take delight,' },
    {
      text: 'Nor sit in learnings bower,',
      annotations: [
        {
          type: 'Metaphor',
          note: 'A bower is a shady, pleasant shelter in a garden. "learnings bower" imagines learning as a place of rest and delight, and "Nor" tells us the child cannot reach it.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Worn thro’ with the dreary shower.',
      annotations: [
        {
          type: 'Weather imagery',
          note: 'Lessons fall on the child like "the dreary shower", the opposite of the summer morning, and leave him "Worn thro’", soaked and worn down.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'How can the bird that is born for joy,',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The child is a bird "born for joy", and the school is its cage. The question answers itself: a caged bird may still sing, but not with the joy it was made for.',
          color: '#10b981',
        },
      ],
    },
    { text: 'Sit in a cage and sing.' },
    {
      text: 'How can a child when fears annoy.',
      annotations: [
        {
          type: 'Diction',
          note: 'In older English "annoy" could mean to trouble or harm, a stronger sense than it has today. The child is frightened, not merely irritated.',
          color: '#10b981',
        },
      ],
    },
    { text: 'But droop his tender wing.' },
    { text: 'And forget his youthful spring.' },
    { text: '' },
    {
      text: 'O! father & mother, if buds are nip’d,',
      annotations: [
        {
          type: 'Direct address',
          note: 'The boy turns to his parents for the first time. "O! father & mother" appeals to the adults who send him to school, and the plant imagery that follows ("buds", "blossoms", "tender plants") makes children something to be nurtured, not drilled.',
          color: '#a855f7',
        },
      ],
    },
    { text: 'And blossoms blown away.' },
    { text: 'And if the tender plants are strip’d' },
    { text: 'Of their joy in the springing day.' },
    { text: 'By sorrow and care’s dismay.' },
    { text: '' },
    {
      text: 'How shall the summer arise in joy.',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'The last stanza turns the seasons into a human life. If the spring of childhood is spoiled, there will be no joyful "summer", no "summer fruits", nothing to "gather" and no "mellowing year" to bless.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'Or the summer fruits appear.' },
    { text: 'Or how shall we gather what griefs destroy' },
    { text: 'Or bless the mellowing year.' },
    {
      text: 'When the blasts of winter appear.',
      annotations: [
        {
          type: 'Ending',
          note: 'The poem began on a summer morning and ends looking ahead to "the blasts of winter": old age and hardship, the life that a joyless childhood prepares a child for.',
          color: '#ef4444',
        },
      ],
    },
  ],

  context: `<p><strong>William Blake</strong> (1757-1827) was a London poet, painter and engraver. He printed his poems himself, etching words and pictures together on copper plates and colouring the pages by hand.</p>
<p><em>The Schoolboy</em> first appeared in <em>Songs of Innocence</em> (1789). In 1794 Blake joined those poems to a new set in <em>Songs of Innocence and of Experience</em>, "Shewing the Two Contrary States of the Human Soul", and in later copies he moved The Schoolboy among the Songs of Experience. It sits between the two: a child’s voice, as in the Songs of Innocence, describing a joy that adults are destroying, as in the Songs of Experience.</p>
<p>Blake had no ordinary schooling that anyone knows of. From the age of ten he went to a drawing school in London’s Strand, and at fourteen he was apprenticed to an engraver. The poem does not attack learning: it imagines "learnings bower" as a place of delight. Its target is a schooling that keeps children indoors, watched and afraid, away from the world outside.</p>`,

  contextAr: `<p><strong>William Blake</strong> (1757-1827) شاعر ورسّام ونقّاش من لندن. كان يطبع قصائده بنفسه: ينقش الكلمات والرسومات مع بعض على ألواح نحاس، وبعدين يلوّن الصفحات بيده.</p>
<p>قصيدة <em>The Schoolboy</em> ظهرت أول مرة في <em>Songs of Innocence</em> سنة 1789. وفي 1794 جمع Blake هالقصائد مع مجموعة جديدة في <em>Songs of Innocence and of Experience</em>، وكتب على صفحة العنوان إنها "Shewing the Two Contrary States of the Human Soul". وفي نسخ لاحقة نقل The Schoolboy لقسم Songs of Experience. القصيدة واقفة بين العالمين: صوت طفل مثل Songs of Innocence، يوصف فرحة قاعد الكبار يدمّرونها، مثل Songs of Experience.</p>
<p>على حد علمنا، Blake ما درس في مدرسة عادية. من عمر عشر سنين راح لمدرسة رسم في شارع Strand بلندن، وفي عمر أربعطعش صار متدرّب عند نقّاش. القصيدة ما تهاجم العلم نفسه، بالعكس تتخيّل "learnings bower" كمكان راحة ومتعة. اللي تهاجمه هو نوع من التعليم يحبس الأطفال داخل، تحت المراقبة والخوف، بعيد عن العالم برّا.</p>`,

  summary: `STANZA 1: The schoolboy loves getting up on a summer morning, when the birds sing, a huntsman blows his horn and the sky-lark "sings with me". He calls it "sweet company".

STANZA 2: Going to school on such a morning "drives all joy away". The children spend the day "Under a cruel eye outworn", in "sighing and dismay".

STANZA 3: In class he sits "drooping" and anxious. He takes no delight in his book and cannot enjoy "learnings bower"; the lessons wear him down like "the dreary shower".

STANZA 4: He asks how a bird "born for joy" can sing in a cage, and how a frightened child can do anything "But droop his tender wing" and forget his youth.

STANZA 5: He turns to his parents. If buds are "nip’d" and blossoms "blown away", if tender plants are "strip’d" of their joy by sorrow and care...

STANZA 6: ...how can summer come "in joy", or its fruits appear? How can anything be gathered, or "the mellowing year" be blessed, when winter comes? A childhood spoiled in its spring spoils the whole life that follows.`,

  summaryAr: `المقطع 1: الطفل يحب يقوم بدري في صباح صيفي، لمّا الطيور تغرّد، والصيّاد ينفخ في بوقه، والـsky-lark "sings with me". ويسمّي هالجو "sweet company".

المقطع 2: الروحة للمدرسة في صباح مثل هذا "drives all joy away". الصغار يقضّون يومهم "Under a cruel eye outworn"، في "sighing and dismay".

المقطع 3: في الصف يقعد "drooping" وقلقان. ما يستمتع بكتابه، وما يقدر يتهنّى بـ"learnings bower"؛ والدروس تهدّه مثل "the dreary shower".

المقطع 4: يسأل كيف طير "born for joy" يقدر يغنّي في قفص، وكيف طفل خايف يقدر يسوّي أي شي غير "But droop his tender wing" وينسى شبابه.

المقطع 5: يلتفت لأبوه وأمه. إذا البراعم "nip’d" والأزهار "blown away"، وإذا النباتات الطريّة "strip’d" من فرحتها بسبب الحزن والهم...

المقطع 6: ...كيف الصيف بيجي "in joy"، أو كيف ثماره بتطلع؟ كيف بنجمع أي شي، أو نبارك "the mellowing year"، لمّا يجي الشتا؟ الطفولة اللي تخرب في ربيعها تخرّب العمر كله بعدها.`,

  formAndStructure: `FORM: Six stanzas of five lines, all in the voice of the schoolboy himself. Like the other Songs, it uses plain words and short lines, closer to a children’s song or a hymn than to formal verse.

RHYME: ABABB in every stanza, so the fifth line echoes the fourth. In stanza 3 "sit" and "delight" only half-rhyme. Stanza 5 repeats the rhyme words of stanza 2, "away", "day" and "dismay", so the plea to the parents echoes the misery of the schoolroom.

RHYTHM: The lines are short, with three or four strong beats and a varying number of light syllables between them. The result is the loose, lilting movement of a song.

STRUCTURE: The poem moves outwards. Stanza 1 is the free summer morning; stanzas 2 and 3 are the school day; stanza 4 asks questions about birds and children; stanza 5 turns to "father & mother"; stanza 6 widens to the seasons of a whole life. It begins on a summer morning and ends with "the blasts of winter".

PUNCTUATION: Eduqas prints the poem with a full stop at the end of many lines, even inside the questions of stanzas 4 and 6 ("How can a child when fears annoy."). The sentences run on across these stops, so read the poem by its sense.

REPETITION: "joy" comes four times (lines 7, 16, 24 and 26), and each time it is under threat: driven "away", caged, "strip’d" and finally put in question.`,

  formAndStructureAr: `الشكل: ست مقاطع، كل مقطع خمسة أبيات، وكلها بصوت الطفل نفسه. مثل باقي الـSongs، تستخدم كلمات بسيطة وأبيات قصيرة، أقرب لأغنية أطفال أو ترنيمة منها للشعر الرسمي.

القافية: ABABB في كل مقطع، يعني البيت الخامس يردّد قافية الرابع. في المقطع الثالث "sit" و"delight" قافيتهم ناقصة (half-rhyme). والمقطع الخامس يعيد نفس كلمات القافية حقّت المقطع الثاني، "away" و"day" و"dismay"، فيصير رجاء الطفل لأهله صدى لتعاسة الصف.

الإيقاع: الأبيات قصيرة، فيها ثلاث أو أربع نبرات قوية، وبينها عدد متغيّر من المقاطع الخفيفة. والنتيجة حركة غنائية مرنة ومتمايلة.

البنية: القصيدة تتوسّع لبرّا. المقطع الأول صباح الصيف الحر؛ والثاني والثالث يوم المدرسة؛ والرابع يطرح أسئلة عن الطيور والأطفال؛ والخامس يلتفت لـ"father & mother"؛ والسادس يتّسع لفصول عمر كامل. تبدأ بصباح صيفي وتنتهي بـ"the blasts of winter".

علامات الترقيم: نسخة Eduqas تحطّ نقطة في نهاية أبيات كثيرة، حتى داخل أسئلة المقطعين الرابع والسادس ("How can a child when fears annoy."). الجمل تكمل بعد هالنقاط، فاقرأ القصيدة حسب المعنى.

التكرار: كلمة "joy" تجي أربع مرات (الأبيات 7 و16 و24 و26)، وكل مرة تكون مهدّدة: تنطرد "away"، وتنحبس في قفص، وتنسلب "strip’d"، وآخر شي تصير محل سؤال.`,

  keyQuotes: [
    {
      quote: 'I love to rise in a summer morn',
      analysis:
        'The opening line is full of energy and pleasure. The verb "rise" suggests freedom and lightness, and the "summer morn" is the child’s natural element. Everything that follows is measured against this first line.',
      themes: ['Childhood', 'Nature', 'Freedom'],
      analysisAr:
        'البيت الافتتاحي مليان طاقة ومتعة. الفعل "rise" يوحي بالحرية والخفّة، و"summer morn" هو عالم الطفل الطبيعي. وكل اللي يجي بعده ينقاس على هالبيت الأول.',
      themesAr: ['الطفولة', 'الطبيعة', 'الحرية'],
    },
    {
      quote: 'And the sky-lark sings with me',
      analysis:
        'The skylark, a bird that sings as it climbs high into the sky, is the boy’s companion. "with me" makes the child part of nature’s music, which is why the stanza ends "O! what sweet company."',
      themes: ['Nature', 'Joy', 'Freedom'],
      analysisAr:
        'الـskylark طير يغنّي وهو طالع عالي في السما، وهو رفيق الولد. كلمة "with me" تخلّي الطفل جزء من موسيقى الطبيعة، وعشان كذا المقطع ينتهي بـ"O! what sweet company."',
      themesAr: ['الطبيعة', 'الفرح', 'الحرية'],
    },
    {
      quote: 'Under a cruel eye outworn',
      analysis:
        'The teacher is never named, only reduced to "a cruel eye": school is a place of being watched. "outworn" makes that eye tired and joyless, the opposite of the bright morning outside.',
      themes: ['Education', 'Control', 'Fear'],
      analysisAr:
        'المعلّم ما ينذكر اسمه أبداً، بس ينختصر لـ"a cruel eye": المدرسة مكان مراقبة. وكلمة "outworn" تخلّي هالعين تعبانة وبدون فرح، عكس الصباح المشرق برّا.',
      themesAr: ['التعليم', 'السيطرة', 'الخوف'],
    },
    {
      quote: 'Nor sit in learnings bower',
      analysis:
        'A bower is a shady, pleasant shelter. Blake imagines what learning could be, a place of rest and delight, and the child’s "Nor" tells us he cannot reach it. The poem’s quarrel is with this kind of schooling, not with learning itself.',
      themes: ['Education', 'Nature', 'Loss'],
      analysisAr:
        'الـbower ملجأ ظليل ومريح. Blake يتخيّل كيف ممكن يكون العلم: مكان راحة ومتعة، وكلمة "Nor" من الطفل تقول لنا إنه ما يقدر يوصل له. خلاف القصيدة مع هالنوع من التدريس، مو مع العلم نفسه.',
      themesAr: ['التعليم', 'الطبيعة', 'الفقد'],
    },
    {
      quote: 'How can the bird that is born for joy, / Sit in a cage and sing',
      analysis:
        'The poem’s central metaphor. The child is a bird made for freedom and song; school is the cage. The question answers itself: a caged bird may still sing, but not for joy.',
      themes: ['Freedom', 'Childhood', 'Control'],
      analysisAr:
        'الاستعارة المركزية في القصيدة. الطفل طير مخلوق للحرية والغناء؛ والمدرسة هي القفص. والسؤال يجاوب نفسه: الطير المحبوس ممكن يغنّي، بس مو من الفرح.',
      themesAr: ['الحرية', 'الطفولة', 'السيطرة'],
    },
    {
      quote: 'O! father & mother, if buds are nip’d',
      analysis:
        'The child appeals to his parents directly. Children become "buds", which a frost can nip before they open: to send a child to such a school is to damage the growth that parents should protect.',
      themes: ['Parents', 'Growth', 'Responsibility'],
      analysisAr:
        'الطفل يناشد أهله مباشرة. الأطفال يصيرون "buds"، والصقيع ممكن يقرصها قبل لا تتفتّح: إنك ترسل طفل لمدرسة مثل هذي يعني تأذي النمو اللي المفروض الأهل يحمونه.',
      themesAr: ['الأهل', 'النمو', 'المسؤولية'],
    },
    {
      quote: 'How shall the summer arise in joy',
      analysis:
        'The last stanza widens the argument from one school day to a whole life. A childhood that is "nip’d" in spring cannot grow into a joyful summer, and the poem ends looking ahead to "the blasts of winter".',
      themes: ['Childhood', 'Time', 'Nature'],
      analysisAr:
        'المقطع الأخير يوسّع الحجّة من يوم دراسي واحد لعمر كامل. الطفولة اللي تنقرص "nip’d" في الربيع ما تقدر تكبر لصيف فرحان، والقصيدة تنتهي وعينها على "the blasts of winter".',
      themesAr: ['الطفولة', 'الزمن', 'الطبيعة'],
    },
  ],

  // Each card's lineRef is the row of `lines` where its example begins, stanza breaks counted
  // (a-device-card-cites-the-line-it-quotes.test.tsx).
  languageDevices: [
    {
      device: 'Metaphor',
      example: 'How can the bird that is born for joy, / Sit in a cage and sing',
      effect:
        'The caged bird turns the classroom into a prison. A bird is "born" for flight and song, as a child is born for play and freedom; shutting it up does not stop it singing, but takes the joy out of its song.',
      lineRef: 18,
      effectAr:
        'الطير المحبوس يحوّل الصف لسجن. الطير "born" للطيران والغناء، مثل ما الطفل مولود للعب والحرية؛ وحبسه ما يوقّف غناه، بس ياخذ الفرح منه.',
    },
    {
      device: 'Repetition',
      example: 'I love to rise in a summer morn … But to go to school in a summer morn',
      effect:
        'The same words, "in a summer morn", end lines 1 and 6. The morning is identical; only school has changed it, so the second stanza undoes the first exactly.',
      lineRef: 0,
      effectAr:
        'نفس الكلمات، "in a summer morn"، تنهي البيت 1 والبيت 6. الصباح هو هو؛ بس المدرسة غيّرته، فالمقطع الثاني ينقض الأول بالضبط.',
    },
    {
      device: 'Interjection',
      example: 'O! it drives all joy away',
      effect:
        'The cries "O!" and "Ah!" give the poem a child’s voice, speaking from the heart. They mark its moments of feeling: delight in stanza 1 ("O! what sweet company."), complaint in stanzas 2 and 3, and appeal in stanza 5.',
      lineRef: 7,
      effectAr:
        'الصيحات "O!" و"Ah!" تعطي القصيدة صوت طفل يتكلّم من قلبه. وتجي في لحظات المشاعر: الفرح في المقطع الأول ("O! what sweet company.")، والشكوى في المقطعين الثاني والثالث، والرجاء في المقطع الخامس.',
    },
    {
      device: 'Rhetorical question',
      example: 'How can a child when fears annoy.',
      effect:
        'Stanzas 4 and 6 are built of questions, though Eduqas closes them with full stops. They need no answer: a child kept in fear can do nothing "But droop his tender wing".',
      lineRef: 20,
      effectAr:
        'المقطعين الرابع والسادس مبنيين من أسئلة، رغم إن نسخة Eduqas تختمها بنقاط. وما تحتاج جواب: الطفل اللي عايش في خوف ما يقدر يسوّي شي غير "But droop his tender wing".',
    },
    {
      device: 'Extended metaphor',
      example: 'if buds are nip’d, / And blossoms blown away',
      effect:
        'Children are "buds", "blossoms" and "tender plants", and harsh schooling is the frost or wind that destroys them before they open. The metaphor makes childhood a season of growth that cannot be had again once it is lost.',
      lineRef: 24,
      effectAr:
        'الأطفال "buds" و"blossoms" و"tender plants"، والتدريس القاسي هو الصقيع أو الريح اللي تدمّرهم قبل لا يتفتّحون. الاستعارة تخلّي الطفولة موسم نمو ما يرجع إذا راح.',
    },
    {
      device: 'Seasonal imagery',
      example: 'How shall the summer arise in joy. / Or the summer fruits appear.',
      effect:
        'The last stanza runs through a year: summer, its fruits, the harvest ("gather") and "the mellowing year", until winter. The year is a human life, and a spoiled spring spoils all of it.',
      lineRef: 30,
      effectAr:
        'المقطع الأخير يمر على سنة كاملة: الصيف، وثماره، والحصاد ("gather")، و"the mellowing year"، لين يجي الشتا. السنة هي عمر الإنسان، والربيع اللي يخرب يخرّبها كلها.',
    },
    {
      device: 'Contrast of sound',
      example: 'The little ones spend the day. / In sighing and dismay.',
      effect:
        'Stanza 1 is full of music: birds, the huntsman’s horn, the sky-lark. In school the only sound is "sighing". The children "spend the day" there, as if it were used up rather than lived.',
      lineRef: 9,
      effectAr:
        'المقطع الأول مليان موسيقى: الطيور، وبوق الصيّاد، والـsky-lark. وفي المدرسة الصوت الوحيد هو "sighing". الأطفال "spend the day" هناك، كأن اليوم ينصرف ويخلص بدل ما ينعاش.',
    },
  ],
}

export default function TheSchoolboyEduqasPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="The Schoolboy by William Blake - Analysis & Annotations"
        description="The Schoolboy by William Blake, printed as the Eduqas anthology prints it, with line-by-line study notes and themes for Eduqas GCSE English Literature."
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">The Schoolboy</h1>
            <p className="text-body-sm text-muted-foreground">
              William Blake (1789) &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="The Schoolboy"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />

      <InteractivePoemViewer poem={theSchoolboy} />

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        The Schoolboy by William Blake is in the public domain. The poem is printed as it appears in
        the WJEC Eduqas GCSE (9-1) English Literature Poetry Anthology (C720), for first assessment
        in 2027, page 4.
      </footer>
    </div>
  )
}
