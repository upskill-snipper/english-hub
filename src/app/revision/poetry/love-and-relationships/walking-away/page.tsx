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

const walkingAwayPoem: PoemData = {
  title: 'Walking Away',
  poet: 'C. Day-Lewis',
  // NOTE: "Walking Away" (C. Day-Lewis, 1962) remains in copyright: Day-Lewis died in
  // 1972, so UK copyright runs to the end of 2042. To avoid reproducing the poem, each
  // line below is a PARAPHRASE in the site's own words, not the poet's text, and the
  // annotations quote only short phrases. Students must read the full poem in the AQA
  // Love and Relationships anthology.
  //
  // What this replaced, 25 September 2026: the array printed the poem line by line, which
  // is reproduction, not fair dealing. It was also corrupt. Eight of its sixteen printed
  // lines are not lines of the poem, twelve real lines were absent (four blank entries
  // marked lines an earlier audit had removed), and it showed five stanzas where the poem
  // has four of five lines each. Paraphrasing those entries in place would have taught
  // students the invented lines, so the array now follows the published poem, one entry
  // per line in order, and each annotation sits on the line it discusses; notes written
  // for invented lines were rewritten for the real ones. The languageDevices lineRefs
  // below were moved to match. The paraphrases were written from the poem's sense; on
  // 26 September 2026 they were checked line by line against the text AQA prints, by
  // permission, in its sample anthology (filestore.aqa.org.uk/resources/english/AQA-8702-TG-POEMS.PDF).
  //
  // Also fixed on 26 September 2026: the rest of the page quoted 84 distinct words of this
  // 137-word poem, many of them several times over, and some of what it quoted was not the
  // poem. Two key quotations and a revision point were invented, one device example misread
  // line 2, and the page called the poem five stanzas, its rhymes imperfect, its similes
  // metaphors and its penultimate line the last. It now quotes a few short phrases, 20
  // distinct words in all (the cap no-poem-quoted-beyond-fair-dealing.test.ts sets for a poem
  // of this length), and points to line numbers for everything else. Every quotation left
  // was then checked word for word against the AQA text; the one device example that
  // capitalised a word the poem prints in lower case now matches it.
  lines: [
    // Stanza 1
    {
      text: '[Paraphrase] It is now eighteen years, give or take a day or two, since the moment the father recalls.',
      annotations: [
        {
          type: 'Precision',
          note: 'The specific timeframe shows the memory is vivid and deeply significant. "Almost to the day" suggests an anniversary the father cannot forget.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] It was a bright day, and the leaves were only beginning to change colour.',
    },
    {
      text: '[Paraphrase] The lines around the pitch had just been marked out, on the day he watched his son play',
    },
    {
      text: '[Paraphrase] his first football match, and then saw the boy, like some satellite',
      annotations: [
        {
          type: 'Simile',
          note: 'The cosmic comparison raises a personal moment to universal significance. "Wrenched", which opens line 5, conveys the violence of separation, and the image of an orbit implies the child was once held by the parent\'s gravitational pull.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] knocked violently out of its path in space, float off into the distance',
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    { text: '[Paraphrase] trailing behind a loose group of boys. The father can still picture' },
    { text: '[Paraphrase] his son heading off from him in the direction of the school' },
    {
      text: '[Paraphrase] with the sad vulnerability of a young bird, not yet fully feathered, released',
      annotations: [
        {
          type: 'Compound adjectives',
          note: '"Half-fledged" pictures a young bird whose flight feathers have not fully grown, emphasising the child\'s incompleteness and vulnerability. He is not yet ready but must go anyway.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] into wild, unmapped country, walking like someone',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The world the boy walks into is pictured as a "wilderness" with no track to follow, so his first step into independence feels like exposure to danger. The father feels the separation as a physical loss, and that pain runs through the whole poem.',
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] who cannot find a route where there ought to be one.' },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: '[Paraphrase] That uncertain figure, drifting off in circling, unsteady movements,',
    },
    {
      text: '[Paraphrase] as a seed with wings floats free once it has come loose from the plant that grew it,',
      annotations: [
        {
          type: 'Simile / natural imagery',
          note: 'The organic image reframes separation as natural and necessary for growth: a seed must leave the plant that grew it to take root elsewhere. Here the seed comes loose rather than being torn away, which suggests gradual release, in contrast with the violent wrench of line 5.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] holds a meaning the father has never fully managed to put into words',
      annotations: [
        {
          type: 'Volta',
          note: 'The poem turns here from describing the memory to reflecting on what it means. The present tense marks the move to mature reflection, yet the father admits he has still not found the words for it.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '[Paraphrase] about how nature gives and takes away: the minor yet searing' },
    {
      text: "[Paraphrase] trials that harden a person's soft, unformed nature, the way heat hardens clay.",
    },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: '[Paraphrase] The father has known more painful separations, yet none that',
      annotations: [
        {
          type: 'Understatement',
          note: 'This understated acknowledgement (possibly referring to deaths) makes the final revelation more powerful \u2014 that this small parting haunts him most.',
          color: '#ef4444',
        },
      ],
    },
    { text: '[Paraphrase] still eats away at him like this one. Perhaps, in a rough way, it is' },
    {
      text: '[Paraphrase] expressing, imperfectly, something only God could show completely:',
      annotations: [
        {
          type: 'Religious allusion',
          note: 'The reference to God elevates parental love to something sacred and ineffable \u2014 beyond what human language can fully express.',
          color: '#3b82f6',
        },
      ],
    },
    { text: "[Paraphrase] that a person's sense of self starts when they walk away," },
    {
      text: '[Paraphrase] and that the true test of love is being able to release someone.',
      annotations: [
        {
          type: 'Aphorism',
          note: 'The final line distils the poem\'s meaning into a universal truth. "Proved" means both tested and demonstrated \u2014 love must endure separation to be real.',
          color: '#10b981',
        },
      ],
    },
  ],
  context:
    '<p><strong>C. Day-Lewis</strong> (1904–1972) was UK <strong>Poet Laureate from 1968 until his death in 1972</strong>. The poem was published in 1962 in <em>The Gate and Other Poems</em> and is dedicated to his eldest son <strong>Sean Day-Lewis</strong> (the journalist). It looks back eighteen years, "almost to the day", to a memory of watching young Sean play his first football match and then leave his father behind as he set off for the school.</p><p>(Note: this is <em>not</em> Daniel Day-Lewis the actor. Daniel was the poet\'s youngest son, born in 1957.)</p><p>Written eighteen years after the event, the poem explores the universal experience of a <strong>parent letting go</strong> of a child. The specific memory, a football match, becomes a metaphor for every moment a child steps further into independence.</p><p>The poem grapples with the <strong>paradox of parental love</strong>: that truly loving someone means allowing them to leave. This connects to broader themes of <strong>growing up</strong>, <strong>identity formation</strong>, and the <strong>pain of separation</strong> that is inherent in all loving relationships.</p><p>Day-Lewis wrote the poem in mature middle age, giving it the quality of <strong>mature reflection</strong> rather than immediate emotion. The distance of time allows him to articulate what he could not express in the moment.</p>',

  contextAr:
    '<p><strong>C. Day-Lewis</strong> (1904\u20131972) \u0643\u0627\u0646 <strong>\u0634\u0627\u0639\u0631 \u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627 \u0627\u0644\u0631\u0633\u0645\u064a (Poet Laureate) \u0645\u0646 \u0633\u0646\u0629 1968 \u0644\u064a\u0646 \u0648\u0641\u0627\u062a\u0647 \u0633\u0646\u0629 1972</strong>. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0637\u0644\u0639\u062a \u0633\u0646\u0629 1962 \u0641\u064a \u062f\u064a\u0648\u0627\u0646 <em>The Gate and Other Poems</em>\u060c \u0648\u0645\u0647\u062f\u0627\u0629 \u0644\u0648\u0644\u062f\u0647 \u0627\u0644\u0623\u0643\u0628\u0631 <strong>Sean Day-Lewis</strong> (\u0627\u0644\u0635\u062d\u0641\u064a). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0631\u062c\u0639 \u0628\u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u2014 "almost to the day" \u2014 \u0644\u0630\u0643\u0631\u0649 \u0627\u0644\u0623\u0628 \u0648\u0647\u0648 \u064a\u062a\u0641\u0631\u0651\u062c \u0639\u0644\u0649 Sean \u0627\u0644\u0635\u063a\u064a\u0631 \u0644\u0645\u0651\u0627 \u0645\u0634\u0649 \u0639\u0646\u0647 \u0641\u064a \u0628\u062f\u0627\u064a\u0629 \u0645\u0628\u0627\u0631\u0627\u0629 \u0643\u0631\u0629 \u0642\u062f\u0645 \u0645\u062f\u0631\u0633\u064a\u0629.</p><p>(\u0645\u0644\u0627\u062d\u0638\u0629: \u0647\u0630\u0627 <em>\u0645\u0648</em> Daniel Day-Lewis \u0627\u0644\u0645\u0645\u062b\u0651\u0644 \u2014 Daniel \u0647\u0648 \u0648\u0644\u062f \u0627\u0644\u0634\u0627\u0639\u0631 \u0627\u0644\u0623\u0635\u063a\u0631\u060c \u0645\u0648\u0627\u0644\u064a\u062f 1957.)</p><p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0643\u062a\u0648\u0628\u0629 \u0628\u0639\u062f 18 \u0633\u0646\u0629 \u0645\u0646 \u0627\u0644\u062d\u062f\u062b\u060c \u062a\u0633\u062a\u0643\u0634\u0641 \u062a\u062c\u0631\u0628\u0629 \u0625\u0646\u0633\u0627\u0646\u064a\u0629 \u064a\u0645\u0631 \u0641\u064a\u0647\u0627 \u0643\u0644 \u0623\u0628 \u0623\u0648 \u0623\u0645: <strong>\u0625\u0646 \u0627\u0644\u0648\u0627\u062d\u062f \u064a\u062e\u0644\u0651\u064a \u0648\u0644\u062f\u0647 \u064a\u0645\u0634\u064a</strong>. \u0627\u0644\u0630\u0643\u0631\u0649 \u0627\u0644\u0645\u062d\u062f\u0651\u062f\u0629 \u2014 \u0645\u0628\u0627\u0631\u0627\u0629 \u0643\u0631\u0629 \u0642\u062f\u0645 \u2014 \u062a\u062a\u062d\u0648\u0651\u0644 \u0644\u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0639\u0646 \u0643\u0644 \u0644\u062d\u0638\u0629 \u064a\u062e\u0637\u0648 \u0641\u064a\u0647\u0627 \u0627\u0644\u0639\u064a\u0627\u0644 \u062e\u0637\u0648\u0629 \u062c\u062f\u064a\u062f\u0629 \u0628\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0644.</p><p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0635\u0627\u0631\u0639 <strong>\u0645\u0641\u0627\u0631\u0642\u0629 \u0627\u0644\u062d\u0628 \u0627\u0644\u0623\u0628\u0648\u064a</strong>: \u0625\u0646 \u0627\u0644\u0648\u0627\u062d\u062f \u0644\u0645\u0651\u0627 \u064a\u062d\u0628 \u0648\u0644\u062f\u0647 \u0641\u0639\u0644\u0627\u064b\u060c \u0644\u0627\u0632\u0645 \u064a\u062e\u0644\u0651\u064a\u0647 \u064a\u0645\u0634\u064a. \u0648\u0647\u0630\u0627 \u064a\u0631\u0628\u0637 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0628\u0645\u0648\u0627\u0636\u064a\u0639 \u0623\u0648\u0633\u0639: <strong>\u0627\u0644\u0643\u0628\u0631</strong>\u060c \u0648<strong>\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0647\u0648\u064a\u0629</strong>\u060c \u0648<strong>\u0623\u0644\u0645 \u0627\u0644\u0641\u0631\u0627\u0642</strong> \u0627\u0644\u0644\u064a \u0645\u0627 \u064a\u0637\u0644\u0639 \u0645\u0646\u0647 \u0623\u064a \u0639\u0644\u0627\u0642\u0629 \u0645\u062d\u0628\u0651\u0629.</p><p>Day-Lewis \u0643\u062a\u0628 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0648\u0647\u0648 \u0641\u064a \u0645\u0646\u062a\u0635\u0641 \u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0646\u0627\u0636\u062c\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0637\u064a\u0647\u0627 \u0637\u0627\u0628\u0639 <strong>\u062a\u0623\u0645\u0651\u0644 \u0646\u0627\u0636\u062c</strong> \u0623\u0643\u062b\u0631 \u0645\u0646 \u0631\u062f\u0629 \u0641\u0639\u0644 \u0644\u062d\u0638\u064a\u0651\u0629. \u0628\u064f\u0639\u062f \u0627\u0644\u0648\u0642\u062a \u0633\u0645\u062d \u0644\u0647 \u064a\u0635\u064a\u063a \u0645\u0627 \u0639\u062c\u0632 \u064a\u0642\u0648\u0644\u0647 \u0641\u064a \u062a\u0644\u0643 \u0627\u0644\u0644\u062d\u0638\u0629.</p>',

  summary:
    "The speaker recalls watching his young son play his first football match eighteen years ago, and then leave him behind as he set off for the school. He remembers the physical wrench of separation as the child moved into the world independently for the first time. Using the simile of a satellite and the image of a young bird not yet able to fly, he captures the child's vulnerability and his own helplessness. In the final stanza, the father reflects that although he has experienced harder partings since, this one still haunts him because it represents the fundamental truth that love requires letting go.",

  summaryAr:
    'المتكلّم (الأب) يتذكّر إنه قبل 18 سنة شاف ولده الصغير وهو يمشي عنه عشان يلعب أول مباراة كرة قدم في حياته. يذكر الألم الجسدي للفراق لمّا الولد خطى للعالم الخارجي بشكل مستقل لأول مرّة. عن طريق تشبيه الـsatellite وصورة الطير الصغير (fledgling)، الأب يصوّر هشاشة الولد وعجز الأب نفسه. في المقطع الأخير، الأب يتأمّل إنه عاش فراقات أصعب بعد ذيك السنة، بس هذا الفراق الصغير هو اللي لين الحين يلاحقه، لأنه يمثّل الحقيقة الجوهريّة: إن الحب يقتضي إن الواحد يخلّي.',

  formAndStructure:
    'Form: Four quintains (five-line stanzas), twenty lines in all, rhymed ABACA: the first, third and fifth lines of each stanza share a rhyme, giving the poem a gentle, reflective rhythm without rigidity.\n\nStructure: The first two stanzas recall the memory, the third turns to what it means, and the fourth reflects from the present and closes on a two-line conclusion, mirroring the understanding that comes with time.\n\nRhyme: The A rhymes are full and hold each stanza together, while the second and fourth lines of each stanza do not rhyme, so no stanza sounds entirely neat or resolved.\n\nTense: Shifts from the past tense of line 3, where the father watched his son play, to the present tense from line 6 onwards, enacting the movement from experience to understanding.\n\nEnjambment: Lines frequently run on, and the first stanza runs straight into the second, mirroring the continuous, unresolved nature of parental anxiety.\n\nTone: Reflective and measured, with an undertone of persistent grief. The calm surface conceals deep emotional pain.',

  formAndStructureAr:
    'Form (الشكل): أربعة مقاطع، كل مقطع quintain (خمسة أبيات)، يعني عشرين بيت، بنظام قافية ABACA: البيت الأول والثالث والخامس في كل مقطع يتقفّون مع بعض، وهذا يعطي القصيدة إيقاع لطيف وتأمّلي بدون تصلّب.\n\nالبنية: أول مقطعين يسترجعون الذكرى، والمقطع الثالث ينتقل لمعناها، والمقطع الرابع يتأمّل من الحاضر ويختم بخلاصة في بيتين، وهذا يعكس عملية الفهم اللي تجي مع الوقت.\n\nالقافية (Rhyme): قوافي الـA تامّة وتربط كل مقطع، بينما البيت الثاني والرابع في كل مقطع بدون قافية، فما في مقطع يطلع مرتّب أو محلول بالكامل.\n\nالزمن (Tense): يتنقّل من الماضي في البيت 3، لمّا الأب كان يتفرّج على ولده يلعب، للحاضر من البيت 6 وطالع، وهذا الانتقال يجسّد الحركة من التجربة للفهم.\n\nEnjambment: الأبيات تنساب لبعضها بشكل متكرّر، والمقطع الأول يدخل على طول في الثاني، وهذا يعكس الطبيعة المتواصلة وغير المحلولة لقلق الأبوّة.\n\nالنبرة (Tone): تأمّلية ومتزنة، مع طبقة مستترة من حزن دائم. السطح الهادئ يخفي ألم نفسي عميق.',
  keyQuotes: [
    {
      quote: 'almost to the day',
      analysis:
        'Dating the memory eighteen years back, to the day, shows it has been relived again and again. The phrase suggests an unwilled anniversary: the pain returns every year.',
      themes: ['Memory', 'Time', 'Loss'],
      analysisAr:
        '\u0627\u0644\u062f\u0642\u0651\u0629 \u0641\u064a \u0627\u0644\u062a\u0627\u0631\u064a\u062e \u062a\u0628\u064a\u0651\u0646 \u0625\u0646 \u0627\u0644\u0630\u0643\u0631\u0649 \u0627\u0646\u0639\u0627\u0634\u062a \u0641\u064a \u0628\u0627\u0644\u0647 \u0645\u0631\u0651\u0629 \u0628\u0639\u062f \u0645\u0631\u0651\u0629. \u0639\u0628\u0627\u0631\u0629 "almost to the day" \u062a\u0644\u0645\u0651\u062d \u0628\u0630\u0643\u0631\u0649 \u0633\u0646\u0648\u064a\u0651\u0629 \u0645\u0627 \u064a\u0642\u062f\u0631 \u0627\u0644\u0623\u0628 \u064a\u062a\u062d\u0643\u0651\u0645 \u0641\u064a\u0647\u0627 \u2014 \u0627\u0644\u0623\u0644\u0645 \u064a\u0631\u062c\u0639\u0644\u0647 \u0643\u0644 \u0633\u0646\u0629.',
      themesAr: [
        '\u0627\u0644\u0630\u0643\u0631\u0649',
        '\u0627\u0644\u0648\u0642\u062a',
        '\u0627\u0644\u0641\u0642\u062f',
      ],
    },
    {
      quote: 'winged seed',
      analysis:
        'The simile in line 12 pictures the boy as a seed carried off from the plant that grew it. Separation is shown as natural and necessary: a seed has to leave to take root, however much the parent plant is left behind.',
      themes: ['Growing up', 'Separation', 'Nature'],
      analysisAr:
        'التشبيه في البيت 12 يصوّر الولد كأنه بذرة طايرة انفصلت عن النبتة اللي طلّعتها. الفراق هنا طبيعي وضروري: البذرة لازم تبتعد عشان تنبت، حتى لو النبتة الأم تنترك وراها.',
      themesAr: ['الكبر', 'الفراق', 'الطبيعة'],
    },
    {
      quote: 'satellite / Wrenched',
      analysis:
        'The cosmic simile across lines 4 and 5 raises a small domestic moment to universal significance. "Wrenched" conveys violence and pain: this separation is not gentle.',
      themes: ['Separation', 'Pain', 'Growing up'],
      analysisAr:
        '\u0627\u0644\u0640simile \u0627\u0644\u0643\u0648\u0646\u064a \u064a\u0631\u0641\u0639 \u0644\u062d\u0638\u0629 \u0645\u0646\u0632\u0644\u064a\u0651\u0629 \u0635\u063a\u064a\u0631\u0629 \u0644\u0645\u0633\u062a\u0648\u0649 \u0645\u0639\u0646\u0649 \u0643\u0648\u0646\u064a \u0648\u0639\u0627\u0645. \u0643\u0644\u0645\u0629 "wrenched" \u062a\u0646\u0642\u0644 \u0627\u0644\u0639\u0646\u0641 \u0648\u0627\u0644\u0623\u0644\u0645 \u2014 \u0647\u0630\u0627 \u0627\u0644\u0641\u0631\u0627\u0642 \u0645\u0648 \u0641\u0631\u0627\u0642 \u0644\u0637\u064a\u0641.',
      themesAr: [
        '\u0627\u0644\u0641\u0631\u0627\u0642',
        '\u0627\u0644\u0623\u0644\u0645',
        '\u0627\u0644\u0643\u0628\u0631',
      ],
    },
    {
      quote: 'half-fledged',
      analysis:
        'Bird imagery in line 8 presents the child as a young bird whose flight feathers have only half grown, not yet ready to fly on its own. "Half" stresses incompleteness and vulnerability, yet the boy is released into the world regardless.',
      themes: ['Vulnerability', 'Growing up', 'Protection'],
      analysisAr:
        'صور الطيور تقدّم الولد على إنه لين الحين ما هو جاهز يطير لحاله. وكلمة "half" تأكّد على نقص النضج وعلى الهشاشة.',
      themesAr: [
        '\u0627\u0644\u0647\u0634\u0627\u0634\u0629',
        '\u0627\u0644\u0643\u0628\u0631',
        '\u0627\u0644\u062d\u0645\u0627\u064a\u0629',
      ],
    },
    {
      quote: 'worse partings',
      analysis:
        'This understated admission in line 16 makes the conclusion more powerful: this small parting haunts him more than any other.',
      themes: ['Loss', 'Memory', 'Perspective'],
      analysisAr:
        '\u0647\u0630\u0627 \u0627\u0644\u0627\u0639\u062a\u0631\u0627\u0641 \u0627\u0644\u0645\u062a\u062d\u0641\u0651\u0638 (understatement) \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0643\u0634\u0641 \u0627\u0644\u0623\u062e\u064a\u0631 \u0623\u0642\u0648\u0649 \u0628\u0643\u062b\u064a\u0631 \u2014 \u0625\u0646 \u0647\u0630\u0627 \u0627\u0644\u0641\u0631\u0627\u0642 \u0627\u0644\u0635\u063a\u064a\u0631 \u0647\u0648 \u0627\u0644\u0644\u064a \u064a\u0644\u0627\u062d\u0642 \u0627\u0644\u0623\u0628 \u0623\u0643\u062b\u0631 \u0645\u0646 \u063a\u064a\u0631\u0647.',
      themesAr: [
        '\u0627\u0644\u0641\u0642\u062f',
        '\u0627\u0644\u0630\u0643\u0631\u0649',
        '\u0627\u0644\u0645\u0646\u0638\u0648\u0631',
      ],
    },
    {
      quote: 'Gnaws',
      analysis:
        'The verb "gnaws", placed at the start of line 17, is visceral and animalistic, suggesting the memory is a persistent, consuming pain that erodes him from within.',
      themes: ['Memory', 'Pain', 'Persistence'],
      analysisAr:
        '\u0627\u0644\u0641\u0639\u0644 "gnaws" \u062d\u0633\u0651\u064a \u0648\u062d\u064a\u0648\u0627\u0646\u064a\u060c \u064a\u0644\u0645\u0651\u062d \u0625\u0646 \u0627\u0644\u0630\u0643\u0631\u0649 \u0623\u0644\u0645 \u0645\u0633\u062a\u0645\u0631 \u064a\u0642\u0636\u0645 \u0627\u0644\u0623\u0628 \u0645\u0646 \u062c\u0648\u0651\u0627\u0647 \u0648\u064a\u0633\u062a\u0646\u0632\u0641\u0647 \u0639\u0644\u0649 \u0645\u0631\u0651 \u0627\u0644\u0633\u0646\u064a\u0646.',
      themesAr: [
        '\u0627\u0644\u0630\u0643\u0631\u0649',
        '\u0627\u0644\u0623\u0644\u0645',
        '\u0627\u0644\u0627\u0633\u062a\u0645\u0631\u0627\u0631',
      ],
    },
    {
      quote: 'selfhood',
      analysis:
        'Line 19 places the start of selfhood in the act of leaving. The child must separate from the parent to become an individual: identity requires independence, which requires distance.',
      themes: ['Identity', 'Independence', 'Growing up'],
      analysisAr:
        '\u0627\u0644\u0648\u0644\u062f \u0644\u0627\u0632\u0645 \u064a\u0646\u0641\u0635\u0644 \u0639\u0646 \u0623\u0628\u0648\u0647 \u0639\u0634\u0627\u0646 \u064a\u0635\u064a\u0631 \u0625\u0646\u0633\u0627\u0646 \u0645\u0633\u062a\u0642\u0644 \u0628\u0630\u0627\u062a\u0647. \u0627\u0644\u0647\u0648\u064a\u0629 \u062a\u062a\u0637\u0644\u0651\u0628 \u0627\u0633\u062a\u0642\u0644\u0627\u0644\u060c \u0648\u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0644 \u064a\u062a\u0637\u0644\u0651\u0628 \u0645\u0633\u0627\u0641\u0629.',
      themesAr: [
        '\u0627\u0644\u0647\u0648\u064a\u0629',
        '\u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0644',
        '\u0627\u0644\u0643\u0628\u0631',
      ],
    },
    {
      quote: 'proved in the letting go',
      analysis:
        'The poem\'s concluding aphorism: real love is demonstrated not by holding on but by releasing. "Proved" means both tested and demonstrated.',
      themes: ['Love', 'Sacrifice', 'Parental love'],
      analysisAr:
        '\u0627\u0644\u062d\u0643\u0645\u0629 \u0627\u0644\u062e\u062a\u0627\u0645\u064a\u0651\u0629 \u0641\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629: \u0627\u0644\u062d\u0628 \u0627\u0644\u062d\u0642\u064a\u0642\u064a \u0645\u0627 \u064a\u062b\u0628\u062a \u0628\u0627\u0644\u062a\u0645\u0633\u0651\u0643\u060c \u064a\u062b\u0628\u062a \u0628\u0627\u0644\u062a\u062e\u0644\u064a\u0629. \u0643\u0644\u0645\u0629 "proved" \u062a\u062d\u0645\u0644 \u0645\u0639\u0646\u064a\u064a\u0646: "\u064a\u064f\u062e\u062a\u0628\u0631" \u0648"\u064a\u064f\u0628\u0631\u0647\u0646".',
      themesAr: [
        '\u0627\u0644\u062d\u0628',
        '\u0627\u0644\u062a\u0636\u062d\u064a\u0629',
        '\u0627\u0644\u062d\u0628 \u0627\u0644\u0623\u0628\u0648\u064a',
      ],
    },
  ],
  languageDevices: [
    {
      device: 'Simile',
      example: 'satellite / Wrenched',
      effect:
        'The cosmic comparison raises a personal moment to universal significance. "Wrenched" conveys the violence of separation, while the image of an orbit implies the child was once held in the parent\'s gravitational pull.',
      lineRef: 3,
      effectAr:
        'المقارنة الكونية ترفع لحظة شخصية لمستوى معنى عام وكوني. كلمة "wrenched" تنقل عنف الفراق، بينما صورة المدار تلمّح إن الولد كان أصلاً ممسوك بجاذبية أبوه.',
    },
    {
      device: 'Metaphor',
      example: 'half-fledged',
      effect:
        "Bird imagery presents the child as a young bird not yet ready to fly, emphasising vulnerability and the parent's anxiety about whether they can survive independently.",
      lineRef: 8,
      effectAr:
        'صور الطيور تقدّم الولد كأنه طير صغير لين الحين ما هو جاهز يطير، وتأكّد على هشاشته وعلى قلق الأب: هل ولده يقدر يعيش بدونه؟',
    },
    {
      device: 'Verb choice and enjambment',
      example: 'Gnaws',
      effect:
        'The visceral, animalistic verb "gnaws" makes the abstract concept of memory physically painful, suggesting persistent, consuming grief. Enjambment carries the sentence over from line 16, so the verb lands at the start of line 17 with extra force, as the memory catches him unawares.',
      lineRef: 19,
      effectAr:
        'الفعل الحسّي والحيواني "gnaws" يحوّل المفهوم المجرّد (الذكرى) إلى ألم مادي محسوس، ويلمّح بحزن مستمر يقضم الأب من جوّاه. والـenjambment يكمّل الجملة من البيت 16، فيطيح الفعل في بداية البيت 17 بوقع أقوى، مثل ما الذكرى تباغت الأب بدون مقدّمات.',
    },
    {
      device: 'Aphorism',
      example: 'proved in the letting go',
      effect:
        "The final line condenses the poem's meaning into a memorable, universal statement. Its simplicity and balance give it proverbial authority.",
      lineRef: 22,
      effectAr:
        'البيت الأخير يكثّف معنى القصيدة في عبارة عامّة لافتة. بساطته وتوازنه يعطونه سلطة الحكمة الشعبيّة (proverbial authority).',
    },
    {
      device: 'Religious allusion',
      example: '[Paraphrase, line 18] a truth only the divine could reveal in full',
      effect:
        'Elevates parental love to something divine and beyond full human expression, suggesting the letting-go is a sacred, almost spiritual act.',
      lineRef: 20,
      effectAr:
        'يرفع الحب الأبوي لمنزلة قريبة من الإلهي، وأكبر من قدرة اللغة البشريّة على التعبير عنه. ويلمّح إن فعل التخلية فعل مقدّس، قريب من الروحي.',
    },
    {
      device: 'Seasonal imagery',
      example:
        '[Paraphrase, line 2] bright weather in early autumn, the leaves starting to change colour',
      effect:
        'The autumn setting mirrors the transition from childhood to independence. The leaves have only begun to change, as the child is only beginning to change.',
      lineRef: 1,
      effectAr:
        'مشهد الخريف يعكس الانتقال من الطفولة للاستقلال. الورق اللي توّه بدأ يتغيّر لونه يوازي حالة الولد اللي توّه يبدأ يتغيّر.',
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'wa-1',
    question: 'What event does the poem describe?',
    type: 'multiple-choice',
    options: [
      'A funeral',
      'A father watching his son walk away to his first day of school or a football match',
      'A couple breaking up',
      'A soldier leaving for war',
    ],
    correctIndex: 1,
    explanation:
      'The speaker (a father) recalls watching his son walk away to a football game or school - a small moment of separation that represents the larger process of letting go.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'wa-2',
    question: 'What does the satellite simile in lines 4 and 5 suggest?',
    type: 'multiple-choice',
    options: [
      'The son enjoys space',
      'Separation from a parent is as painful and unnatural as breaking a gravitational bond',
      'The son is spinning',
      'Space travel is important',
    ],
    correctIndex: 1,
    explanation:
      'The simile compares the son to a satellite torn from its orbit - suggesting the parent-child bond has a gravitational pull, and separation feels violent and unnatural.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'wa-3',
    question: 'What does line 19, on where "selfhood" begins, mean?',
    type: 'multiple-choice',
    options: [
      'Walking is good exercise',
      'Becoming your own person requires separating from your parents - independence starts with leaving',
      'Walking away is always sad',
      'Children should walk more',
    ],
    correctIndex: 1,
    explanation:
      'The father recognises that his child must walk away to become an independent person. "Selfhood" - individual identity - can only develop through separation, however painful.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'wa-4',
    question: 'What is the seed simile in line 12 about?',
    type: 'multiple-choice',
    options: [
      'Gardening advice',
      'The child must be released to grow independently, like a seed carried away from the plant that grew it',
      'The son plants a garden',
      'Seeds represent food',
    ],
    correctIndex: 1,
    explanation:
      'The seed simile shows separation as natural and necessary. A seed must leave its parent plant to grow. The father understands this intellectually but still finds it emotionally painful.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'wa-5',
    question: 'Who wrote the poem?',
    type: 'multiple-choice',
    options: [
      'Seamus Heaney',
      'C. Day-Lewis (1904-1972), UK Poet Laureate (1968-72), writing about his eldest son Sean Day-Lewis',
      'Ted Hughes',
      'Simon Armitage',
    ],
    correctIndex: 1,
    explanation:
      "C. Day-Lewis (1904-1972) was UK Poet Laureate from 1968 until his death. The poem (published 1962 in The Gate and Other Poems) is dedicated to his eldest son Sean Day-Lewis (the journalist) and looks back eighteen years to a memory of young Sean walking away to a school football game. (Daniel Day-Lewis the actor was the poet's youngest son, born in 1957.)",
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'wa-6',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'Four quintains (five-line stanzas) rhymed ABACA',
      'A sonnet',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      "Four quintains (five-line stanzas) rhymed ABACA. The regular structure reflects the father's attempt to understand and contain his emotions, while the unrhymed second and fourth lines keep each stanza from sounding neatly resolved.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'wa-7',
    question: 'Why has the memory haunted the speaker for so long?',
    type: 'multiple-choice',
    options: [
      'It was a bad football match',
      'The moment, eighteen years before, stands for the larger, ongoing process of letting go',
      'He forgot something',
      'The weather was bad',
    ],
    correctIndex: 1,
    explanation:
      'Line 1 dates the memory precisely, eighteen years back to within a day or so, which shows this small moment has haunted the father ever since. It represents not just one day but the entire process of watching a child become independent.',
    topic: 'Meaning',
    difficulty: 'higher',
  },
  {
    id: 'wa-8',
    question: 'What does the last line mean, where love is "proved in the letting go"?',
    type: 'multiple-choice',
    options: [
      'Love means holding on tightly',
      'True love means giving the other person freedom - the greatest act of love is releasing your child',
      'Love is easy',
      'Letting go is selfish',
    ],
    correctIndex: 1,
    explanation:
      "The poem's deepest insight: love is not possession but release. The hardest thing a parent does is let go, but doing so is the ultimate proof of love.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'wa-9',
    question: 'How does the poem balance pain and acceptance?',
    type: 'multiple-choice',
    options: [
      'Only pain, no acceptance',
      'The poem moves from painful memory to philosophical acceptance - separation hurts but is necessary for growth',
      'Only acceptance, no pain',
      'Neither - the tone is neutral',
    ],
    correctIndex: 1,
    explanation:
      'Day-Lewis balances genuine pain (the satellite "Wrenched" out of its path in line 5) with mature acceptance (the claim about selfhood in line 19). The poem does not pretend separation is easy, but recognises its necessity.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'wa-10',
    question: 'Which poem pairs best with Walking Away?',
    type: 'multiple-choice',
    options: [
      "Porphyria's Lover",
      'Follower by Seamus Heaney',
      'Neutral Tones',
      "Love's Philosophy",
    ],
    correctIndex: 1,
    explanation:
      "Both Walking Away and Follower explore parent-child relationships and the passage of time. Walking Away is from the parent's perspective; Follower from the child's. Both deal with separation.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Walking Away explores the pain of parental love, the necessity of letting go, and how independence is the ultimate gift a parent gives.',
    keyPoints: [
      'Letting go - the hardest act of love',
      'Line 19: selfhood starts with leaving - independence requires separation',
      'Memory - one small moment haunts the father for 18 years',
      'Love is proved in release, not possession',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Day-Lewis uses satellite and seed similes to present separation as both painful and natural.',
    keyPoints: [
      'The satellite "Wrenched" out of place (lines 4 to 5) - violent, unnatural separation',
      'The "winged seed" (line 12) - natural, necessary dispersal',
      '"Gnaws" (line 17) - the memory still eats away at him',
      'The last line (line 20) - love defined by release',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four quintains (five-line stanzas) rhymed ABACA, moving from specific memory to philosophical reflection on the nature of love.',
    keyPoints: [
      'Four quintains - orderly structure containing complex emotion',
      'ABACA rhyme, with the second and fourth lines unrhymed - things not quite resolved, like parental worry',
      'Progression from memory to philosophy',
      'Line 1 dates the memory to within a day - the specific opening grounds the universal theme',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Day-Lewis present the pain of letting go in Walking Away?',
  'Compare how parent-child relationships are presented in Walking Away and one other poem from the anthology.',
  'How does Day-Lewis use language and structure to explore the relationship between love and independence?',
]

const comparePoems = [
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason:
      "Both explore father-son relationships and role reversal. Day-Lewis watches his son leave; Heaney's father eventually stumbles behind the son. Both capture the pain of changing dynamics.",
    themes: ['Father-son', 'Role reversal', 'Growing up'],
  },
  {
    title: 'Eden Rock',
    poet: 'Charles Causley',
    link: '/revision/poetry/love-and-relationships/eden-rock',
    reason:
      "Both explore parental love across a threshold. Day-Lewis watches his child cross into independence; Causley's parents wait beyond the boundary of death.",
    themes: ['Parental love', 'Separation', 'Thresholds'],
  },
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason:
      'Both meditate on how love is expressed through quiet acts rather than grand declarations. Day-Lewis finds love in letting go; Dooley finds it in everyday correspondence.',
    themes: ['Love', 'Distance', 'Reflection'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function WalkingAwayPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Walking Away by C. Day-Lewis - Analysis & Annotations"
        description="Line-by-line analysis of Walking Away with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
          <h1 className="text-heading-lg font-heading text-foreground">Walking Away</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          C. Day-Lewis &middot; <em>The Gate and Other Poems</em> (1962)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Parental love', 'Separation', 'Growing up', 'Memory', 'Identity', 'Sacrifice'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Walking Away"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Walking Away"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={walkingAwayPoem} />

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
        <em>Walking Away</em> by C. Day-Lewis is in copyright, so this page does not print it. Each
        line in the poem viewer is a paraphrase in our own words, and only short phrases are quoted,
        for criticism and review under UK fair-dealing provisions (Copyright, Designs and Patents
        Act 1988, s.30). The poem is printed in full in the AQA Love &amp; Relationships anthology:
        read it there before quoting it in an exam. All quotations remain the intellectual property
        of the rights holders.
      </footer>
    </div>
  )
}
