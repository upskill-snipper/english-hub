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

const iWanderedLonelyAsACloud: PoemData = {
  title: 'I Wandered Lonely as a Cloud',
  poet: 'William Wordsworth',
  // Printed as the Eduqas anthology for examination from 2027 prints it (WJEC 2024,
  // ISBN 978-1-86085-774-4, page 5), read from the PDF's text layer on 10 October 2026
  // and checked against an image of the page. It is the poem as Wordsworth revised it in
  // 1815, with the second stanza he added then; the 1807 text had three stanzas. The
  // dates, the revisions, Dorothy Wordsworth's journal entry and Wordsworth's note that
  // "The two best lines in it are by Mary" are checked against Knight's edition (1896,
  // vol. 3, Project Gutenberg #12383), the 1807 Poems, in Two Volumes (#8824) and the
  // Journals of Dorothy Wordsworth (#42856).
  lines: [
    {
      text: 'I wandered lonely as a cloud',
      annotations: [
        {
          type: 'Simile',
          note: 'The speaker begins alone and drifting, "lonely as a cloud". A cloud floats high above the world, part of the landscape yet apart from it.',
          color: '#10b981',
        },
      ],
    },
    { text: 'That floats on high o’er vales and hills,' },
    { text: 'When all at once I saw a crowd,' },
    {
      text: 'A host, of golden daffodils;',
      annotations: [
        {
          type: 'Key quote',
          note: '"host" means a great crowd, and can suggest an army, or the heavenly host of angels. "golden" makes the flowers precious, a first hint of the "wealth" the poem will find in them.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'Beside the lake, beneath the trees,' },
    {
      text: 'Fluttering and dancing in the breeze.',
      annotations: [
        {
          type: 'Personification',
          note: 'The daffodils are "Fluttering and dancing", alive and joyful. The line opens on a stressed syllable, so its rhythm flutters too.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'Continuous as the stars that shine',
      annotations: [
        {
          type: 'Simile',
          note: 'Stanza 2, added in 1815, compares the flowers to the stars of the Milky Way: "Continuous", shining and countless. The scene grows from a lakeside to the scale of the sky.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'And twinkle on the milky way,' },
    { text: 'They stretched in never-ending line' },
    { text: 'Along the margin of a bay:' },
    {
      text: 'Ten thousand saw I at a glance,',
      annotations: [
        {
          type: 'Hyperbole',
          note: '"Ten thousand" is not a count but an impression of abundance. The inverted word order, "saw I", puts the number first.',
          color: '#10b981',
        },
      ],
    },
    { text: 'Tossing their heads in sprightly dance.' },
    { text: '' },
    {
      text: 'The waves beside them danced; but they',
      annotations: [
        {
          type: 'Personification',
          note: 'The waves dance too, but the daffodils "Out-did the sparkling waves in glee": the whole scene is alive, and the flowers lead it.',
          color: '#10b981',
        },
      ],
    },
    { text: 'Out-did the sparkling waves in glee:' },
    {
      text: 'A poet could not but be gay,',
      annotations: [
        {
          type: 'Diction',
          note: '"gay" here has its older meaning, merry or joyful. "could not but" means could not help it: the speaker’s happiness is caught from the flowers.',
          color: '#a855f7',
        },
      ],
    },
    { text: 'In such a jocund company:' },
    {
      text: 'I gazed—and gazed—but little thought',
      annotations: [
        {
          type: 'Caesura',
          note: 'The dashes break the line into pauses, "I gazed—and gazed—", and the repetition holds the moment. "but little thought" admits that he did not yet know what the sight would mean to him.',
          color: '#a855f7',
        },
      ],
    },
    { text: 'What wealth the show to me had brought:' },
    { text: '' },
    {
      text: 'For oft, when on my couch I lie',
      annotations: [
        {
          type: 'Change of tense',
          note: 'Stanza 4 moves into the present: "when on my couch I lie". The poem was about a past walk; now it is about what memory does, again and again ("oft").',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'In vacant or in pensive mood,' },
    {
      text: 'They flash upon that inward eye',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The "inward eye" is the mind’s eye, memory and imagination. "flash" makes the memory sudden and bright. Wordsworth said that "The two best lines in it are by Mary", his wife: these two lines.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'Which is the bliss of solitude;' },
    { text: 'And then my heart with pleasure fills,' },
    {
      text: 'And dances with the daffodils.',
      annotations: [
        {
          type: 'Ending',
          note: 'The poem began "lonely" and ends with a heart that "dances with the daffodils". The speaker has joined the dance he once only watched.',
          color: '#ef4444',
        },
      ],
    },
  ],

  context: `<p><strong>William Wordsworth</strong> (1770-1850) was born in Cockermouth, in Cumberland, and lived in the Lake District for most of his life. With Samuel Taylor Coleridge he published <em>Lyrical Ballads</em> (1798), a founding book of English Romantic poetry, and he became Poet Laureate in 1843.</p>
<p>On 15 April 1802 Wordsworth and his sister Dorothy, walking by Ullswater near Gowbarrow Park, came upon a great mass of daffodils stretching along the shore of the lake, and Dorothy described them in her journal. Wordsworth wrote the poem two years later, in 1804, at Town End in Grasmere, where they lived, and it was published in <em>Poems, in Two Volumes</em> (1807). In 1815 he added the second stanza and changed several words. Eduqas prints that later version.</p>
<p>In a note he dictated late in life, Wordsworth said "The two best lines in it are by Mary": his wife, Mary Hutchinson, whom he married in 1802. His editor William Knight identified them as lines 21 and 22, "They flash upon that inward eye / Which is the bliss of solitude".</p>`,

  contextAr: `<p><strong>William Wordsworth</strong> (1770-1850) انولد في Cockermouth في مقاطعة Cumberland، وعاش أغلب عمره في منطقة البحيرات (Lake District). نشر مع Samuel Taylor Coleridge ديوان <em>Lyrical Ballads</em> (1798)، وهو من الكتب اللي أسّست للشعر الرومانسي الإنجليزي، وصار شاعر البلاط (Poet Laureate) سنة 1843.</p>
<p>في 15 أبريل 1802، كان Wordsworth وأخته Dorothy يمشون جنب بحيرة Ullswater قريب من Gowbarrow Park، وصادفوا كمية كبيرة من أزهار النرجس البري ممتدة على شط البحيرة، وDorothy وصفتها في مذكّراتها. Wordsworth كتب القصيدة بعدها بسنتين، سنة 1804، في Town End في Grasmere حيث كانوا ساكنين، وانتشرت في <em>Poems, in Two Volumes</em> سنة 1807. وفي 1815 أضاف المقطع الثاني وغيّر كم كلمة. ونسخة Eduqas هي هالنسخة المتأخرة.</p>
<p>في ملاحظة أملاها في آخر عمره، قال Wordsworth: "The two best lines in it are by Mary"، يعني زوجته Mary Hutchinson اللي تزوّجها سنة 1802. والمحرّر William Knight حدّد إنها البيتين 21 و22: "They flash upon that inward eye / Which is the bliss of solitude".</p>`,

  summary: `STANZA 1: The speaker remembers wandering alone, "lonely as a cloud", when he suddenly saw a crowd of golden daffodils beside a lake, "Fluttering and dancing in the breeze".

STANZA 2: The daffodils seemed as endless as the stars of the Milky Way, stretching along the edge of a bay. He saw "Ten thousand" at a glance, "Tossing their heads in sprightly dance".

STANZA 3: The waves danced too, but the flowers outdid them in "glee". No poet could help being happy in "such a jocund company". He gazed and gazed, but did not yet realise "What wealth" the sight had given him.

STANZA 4: Now, in the present, when he lies on his couch, idle or thoughtful, the daffodils "flash upon that inward eye", his memory. His heart fills with pleasure "And dances with the daffodils".`,

  summaryAr: `المقطع 1: المتكلّم يتذكّر إنه كان يتمشّى بروحه، "lonely as a cloud"، ولمّا فجأة شاف جمع كبير من أزهار النرجس الذهبية جنب بحيرة، "Fluttering and dancing in the breeze".

المقطع 2: الأزهار كانت تبان بلا نهاية مثل نجوم درب التبّانة، ممتدة على طرف خليج. شاف "Ten thousand" منها بنظرة وحدة، "Tossing their heads in sprightly dance".

المقطع 3: الموج بعد كان يرقص، بس الأزهار تفوّقت عليه في الـ"glee". ما في شاعر يقدر ما يفرح في "such a jocund company". ظل يطالع ويطالع، بس للحين ما كان مستوعب "What wealth" عطاه هالمنظر.

المقطع 4: الحين، في الحاضر، لمّا يتمدّد على الكنبة، فاضي أو سرحان، الأزهار "flash upon that inward eye"، يعني ذاكرته. وقلبه يتعبّى سعادة "And dances with the daffodils".`,

  formAndStructure: `FORM: Four stanzas of six lines, each rhymed ABABCC, so every stanza closes on a rhyming couplet.

METRE: Iambic tetrameter: four stresses to the line, in a steady, walking rhythm. Lines 6 and 12 open on a stressed syllable instead ("Fluttering", "Tossing"), so the rhythm itself flutters and tosses as the flowers do.

STRUCTURE: Three stanzas in the past tense tell what happened on the walk; the fourth moves into the present ("For oft, when on my couch I lie") and tells what the memory does now. The poem’s real subject is that second moment.

JOURNEY: The poem moves from "lonely" in its first line to "the bliss of solitude" and a heart that "dances with the daffodils" in its last. Being alone has changed from loneliness into bliss.

REVISION: In 1815 Wordsworth added stanza 2, rewrote lines 5 and 6, and changed "dancing" to "golden" in line 4 and "laughing" to "jocund" in line 16. Eduqas prints the revised poem.`,

  formAndStructureAr: `الشكل: أربع مقاطع، كل مقطع ستة أبيات، والقافية ABABCC، يعني كل مقطع يختم بزوج أبيات متقافية (couplet).

الوزن: iambic tetrameter: أربع نبرات في البيت، بإيقاع ثابت مثل خطوات المشي. البيتين 6 و12 يبدون بمقطع منبور بدل كذا ("Fluttering" و"Tossing")، فالإيقاع نفسه يرفرف ويتمايل مثل الأزهار.

البنية: ثلاث مقاطع بالماضي تحكي اللي صار في المشوار؛ والرابع ينتقل للحاضر ("For oft, when on my couch I lie") ويحكي شو تسوّي الذكرى الحين. وموضوع القصيدة الحقيقي هو هاللحظة الثانية.

الرحلة: القصيدة تنتقل من "lonely" في أول بيت إلى "the bliss of solitude" وقلب "dances with the daffodils" في آخر بيت. الوحدة تحوّلت من وحشة إلى نعيم.

التعديل: في 1815 أضاف Wordsworth المقطع الثاني، وأعاد كتابة البيتين 5 و6، وغيّر "dancing" إلى "golden" في البيت 4، و"laughing" إلى "jocund" في البيت 16. ونسخة Eduqas هي القصيدة بعد التعديل.`,

  keyQuotes: [
    {
      quote: 'I wandered lonely as a cloud',
      analysis:
        'The opening simile makes the speaker solitary and aimless, drifting above the world like a cloud. It sets up the change the poem will make: by the end, being alone is no longer lonely.',
      themes: ['Solitude', 'Nature', 'The self'],
      analysisAr:
        'التشبيه الافتتاحي يخلّي المتكلّم وحيد وبدون هدف، سارح فوق العالم مثل الغيمة. وهذا يمهّد للتحوّل اللي بتسوّيه القصيدة: في النهاية الوحدة ما تعود وحشة.',
      themesAr: ['الوحدة', 'الطبيعة', 'الذات'],
    },
    {
      quote: 'A host, of golden daffodils',
      analysis:
        '"host" suggests a great crowd, even an army or a host of angels, so the flowers seem to arrive all at once and in force. "golden" makes them precious, and looks ahead to the "wealth" of stanza 3.',
      themes: ['Nature', 'Joy', 'Wealth'],
      analysisAr:
        'كلمة "host" توحي بجمع كبير، حتى جيش أو حشد من الملائكة، فالأزهار تبان كأنها وصلت كلها مرة وحدة وبقوّة. و"golden" تخلّيها ثمينة، وتمهّد لـ"wealth" في المقطع الثالث.',
      themesAr: ['الطبيعة', 'الفرح', 'الثروة'],
    },
    {
      quote: 'Ten thousand saw I at a glance',
      analysis:
        'Hyperbole: no one counts ten thousand flowers at a glance. The number gives the size of the experience, not the size of the field, and the inverted order ("saw I") puts it first.',
      themes: ['Nature', 'Wonder'],
      analysisAr:
        'مبالغة (hyperbole): محد يعدّ عشرة آلاف زهرة بنظرة وحدة. الرقم يعطي حجم التجربة، مو حجم الحقل، والترتيب المقلوب ("saw I") يقدّمه في البداية.',
      themesAr: ['الطبيعة', 'الدهشة'],
    },
    {
      quote: 'A poet could not but be gay, / In such a jocund company',
      analysis:
        'In its older sense "gay" means merry. The lonely wanderer of line 1 is now in "company", and the personified flowers are good company: "jocund" means cheerful. The joy is caught from nature, almost against his will ("could not but").',
      themes: ['Joy', 'Nature', 'Companionship'],
      analysisAr:
        'كلمة "gay" بمعناها القديم تعني مرح وفرحان. الماشي الوحيد في البيت الأول صار الحين في "company"، والأزهار المشخّصة رفقة حلوة: "jocund" تعني مبتهج. والفرح ينتقل له من الطبيعة، تقريباً غصباً عنه ("could not but").',
      themesAr: ['الفرح', 'الطبيعة', 'الرفقة'],
    },
    {
      quote: 'What wealth the show to me had brought',
      analysis:
        'The "wealth" is not money but a memory that pays out for years. At the time he "little thought" what he had been given; only later does he understand its value.',
      themes: ['Memory', 'Wealth', 'Nature'],
      analysisAr:
        'الـ"wealth" هنا مو فلوس، هي ذكرى تعطي من خيرها سنين. وقتها هو "little thought" شو اللي انعطى له؛ وبس بعدين فهم قيمته.',
      themesAr: ['الذاكرة', 'الثروة', 'الطبيعة'],
    },
    {
      quote: 'They flash upon that inward eye / Which is the bliss of solitude',
      analysis:
        'The "inward eye" is memory and imagination. The verb "flash" makes the daffodils return suddenly and brightly, and solitude, which began the poem as loneliness, becomes "bliss". Wordsworth said these were the poem’s best lines, and that his wife Mary wrote them.',
      themes: ['Memory', 'Imagination', 'Solitude'],
      analysisAr:
        'الـ"inward eye" هي الذاكرة والخيال. الفعل "flash" يخلّي الأزهار ترجع فجأة وبلمعة، والوحدة اللي بدأت القصيدة كوحشة تصير "bliss". وWordsworth قال إن هذول أحسن بيتين في القصيدة، وإن زوجته Mary هي اللي كتبتهم.',
      themesAr: ['الذاكرة', 'الخيال', 'الوحدة'],
    },
    {
      quote: 'And then my heart with pleasure fills, / And dances with the daffodils',
      analysis:
        'The poem ends with the speaker joining the dance. In stanza 1 the flowers danced while he watched; now his heart "dances with" them. Memory lets him take part in what he once only saw.',
      themes: ['Joy', 'Memory', 'Nature'],
      analysisAr:
        'القصيدة تنتهي والمتكلّم داخل الرقصة. في المقطع الأول الأزهار كانت ترقص وهو يطالع؛ والحين قلبه "dances with" معاها. الذاكرة تخلّيه يشارك في شي كان بس يتفرّج عليه.',
      themesAr: ['الفرح', 'الذاكرة', 'الطبيعة'],
    },
  ],

  // Each card's lineRef is the row of `lines` where its example begins, stanza breaks counted
  // (a-device-card-cites-the-line-it-quotes.test.tsx).
  languageDevices: [
    {
      device: 'Simile',
      example: 'I wandered lonely as a cloud',
      effect:
        'The speaker is drifting and alone, high above the world. The simile sets up the poem’s change: from loneliness to "the bliss of solitude".',
      lineRef: 0,
      effectAr:
        'المتكلّم سارح ووحيد، عالي فوق العالم. والتشبيه يمهّد لتحوّل القصيدة: من الوحشة إلى "the bliss of solitude".',
    },
    {
      device: 'Personification',
      example: 'Fluttering and dancing in the breeze',
      effect:
        'The daffodils dance, toss their heads and keep "jocund company": they are presented as a joyful crowd of people. The stressed first syllable of "Fluttering" makes the rhythm dance with them.',
      lineRef: 5,
      effectAr:
        'الأزهار ترقص، وتهزّ روسها، وتسوّي "jocund company": كأنها جمع ناس فرحانين. والمقطع المنبور في بداية "Fluttering" يخلّي الإيقاع يرقص معاها.',
    },
    {
      device: 'Simile',
      example: 'Continuous as the stars that shine / And twinkle on the milky way',
      effect:
        'Comparing the flowers to the stars of the Milky Way makes the scene endless and almost heavenly. This stanza was added in 1815, as if the memory had grown larger with time.',
      lineRef: 7,
      effectAr:
        'تشبيه الأزهار بنجوم درب التبّانة يخلّي المشهد بلا نهاية وتقريباً سماوي. وهالمقطع انضاف سنة 1815، كأن الذكرى كبرت مع الوقت.',
    },
    {
      device: 'Hyperbole',
      example: 'Ten thousand saw I at a glance',
      effect:
        'The impossible number expresses how overwhelming the sight was. The inverted word order puts "Ten thousand" first, where it strikes the reader at once, as the flowers struck the speaker.',
      lineRef: 11,
      effectAr:
        'الرقم المستحيل يعبّر قدّيش المنظر كان طاغي. والترتيب المقلوب للكلمات يحط "Ten thousand" أول شي، فيضرب القارئ على طول، مثل ما الأزهار ضربت المتكلّم.',
    },
    {
      device: 'Caesura and repetition',
      example: 'I gazed—and gazed—but little thought',
      effect:
        'The dashes and the repeated "gazed" slow the line and hold the moment, as the speaker stands absorbed. "but little thought" then admits that he did not yet know what he was being given.',
      lineRef: 18,
      effectAr:
        'الشرطات وتكرار "gazed" تبطّئ البيت وتمسك اللحظة، والمتكلّم واقف سرحان. وبعدها "but little thought" تعترف إنه للحين ما كان يدري شو اللي ينعطى له.',
    },
    {
      device: 'Change of tense',
      example: 'For oft, when on my couch I lie',
      effect:
        'After three stanzas in the past, the present tense ("I lie", "They flash", "fills", "dances") shows the memory returning again and again. The walk happened once; its effect goes on.',
      lineRef: 21,
      effectAr:
        'بعد ثلاث مقاطع بالماضي، المضارع ("I lie" و"They flash" و"fills" و"dances") يبيّن إن الذكرى ترجع مرة ورا مرة. المشوار صار مرة وحدة؛ بس أثره مستمر.',
    },
    {
      device: 'Metaphor',
      example: 'They flash upon that inward eye',
      effect:
        'Memory becomes an "inward eye" that can see the daffodils again whenever they "flash" upon it. The metaphor puts nature inside the mind, where solitude can enjoy it.',
      lineRef: 23,
      effectAr:
        'الذاكرة تصير "inward eye" تقدر تشوف الأزهار من جديد كل ما "flash" عليها. والاستعارة تحط الطبيعة داخل العقل، حيث الوحدة تقدر تستمتع فيها.',
    },
  ],
}

export default function IWanderedLonelyAsACloudEduqasPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="I Wandered Lonely as a Cloud by William Wordsworth - Analysis & Annotations"
        description="I Wandered Lonely as a Cloud by William Wordsworth, printed as the Eduqas anthology prints it, with line-by-line study notes and themes for Eduqas GCSE English Literature."
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
            <h1 className="text-heading-lg font-heading text-foreground">
              I Wandered Lonely as a Cloud
            </h1>
            <p className="text-body-sm text-muted-foreground">
              William Wordsworth (1807, revised 1815) &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="I Wandered Lonely as a Cloud"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />

      <InteractivePoemViewer poem={iWanderedLonelyAsACloud} />

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        I Wandered Lonely as a Cloud by William Wordsworth is in the public domain. The poem is
        printed as it appears in the WJEC Eduqas GCSE (9-1) English Literature Poetry Anthology
        (C720), for first assessment in 2027, page 5.
      </footer>
    </div>
  )
}
