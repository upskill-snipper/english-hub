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

const edenRockPoem: PoemData = {
  title: 'Eden Rock',
  poet: 'Charles Causley',
  // NOTE: "Eden Rock" (Charles Causley, 1988) remains in copyright; the rights
  // are administered by David Higham Associates. To avoid reproducing the poem,
  // every entry below is a paraphrase in the site's own words, one entry per
  // line of the poem, and the notes quote only short phrases. Students must read
  // the full original text in the AQA Love and Relationships anthology (or
  // Causley, "Collected Poems 1951-2000", Picador).
  //
  // Until 25 September 2026 this array printed five lines or part-lines of the
  // poem verbatim, and its bracketed summaries carried longer runs of it.
  // Until 26 September 2026 it was still not one entry per line: bracketed
  // summaries stood in for groups of lines, its stanza breaks did not fall where
  // the poem's do, and four of the languageDevices lineRefs pointed past the end
  // of the array. The page also quoted a line break inside line 19 that the poem
  // does not have, and a repeated verb that is not in it. It now follows the
  // poem as printed by AQA (Past and present: poetry anthology, sample,
  // filestore.aqa.org.uk AQA-8702-TG-POEMS.PDF) and the Poetry Archive, which
  // prints it by permission of the Causley estate: four quatrains, a tercet and
  // a closing single line. Every quotation on the page was checked against both,
  // and the page quotes 24 of the poem's words in all, counted once, against a
  // cap of 25 (no-poem-quoted-beyond-fair-dealing.test.ts). The viewer numbers
  // entries by position, stanza breaks included, so from the second stanza its
  // numbers run ahead of the poem's; the prose below cites the poem's own.
  lines: [
    // Stanza 1
    {
      text: '[Paraphrase] The speaker says that people he has not yet named are expecting him somewhere past Eden Rock.',
      annotations: [
        {
          type: 'Biblical allusion',
          note: 'The name recalls the Garden of Eden: paradise, innocence, a place before death. "Beyond" puts the people waiting on the far side of a threshold the speaker has not crossed. Eden Rock is not a place on any map: Causley is widely reported to have said, when asked, that he had invented it. It draws on the biblical Eden and on the Cornish landscape Causley knew, but the place itself is fictional.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] His father is there, aged twenty-five, dressed in the suit he is always remembered in,',
      annotations: [
        {
          type: 'Precise detail',
          note: 'The opening stanza pins the father at a specific age (twenty-five), names the fabric of his suit and names his dog. The photographic specificity makes the vision feel like a treasured snapshot or an impossibly vivid memory.',
          color: '#8b5cf6',
        },
      ],
    },
    { text: '[Paraphrase] a suit of real Irish tweed, and his terrier, Jack, is with him,' },
    {
      text: "[Paraphrase] the dog still only two and quivering by his master's feet.",
      annotations: [
        {
          type: 'Time stopped',
          note: 'The dog is still two years old, as the father is still twenty-five: nothing in the scene has aged. The parents and even the pet are held at one moment, as if in a photograph.',
          color: '#10b981',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    {
      text: '[Paraphrase] His mother is there as well, twenty-three years old and wearing a dress patterned with little sprays of flowers',
      annotations: [
        {
          type: 'Colour imagery',
          note: 'The precise colours and textures (the flowered dress, the ribbon on her hat, hair the colour of ripe wheat) create an almost hyper-real portrait. The specificity suggests this is more than ordinary memory.',
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] gathered in at the waist, and a straw hat trimmed with ribbon.' },
    {
      text: '[Paraphrase] She has laid a crisp white cloth out across the lawn.',
      annotations: [
        {
          type: 'Sacramental detail',
          note: 'The careful, ritual laying-out of a picnic (cloth, tea, milk) turns an ordinary scene into something quietly sacramental, as though a Communion table were being prepared.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '[Paraphrase] Her hair, wheat-coloured, catches the light.' },
    // Stanza break
    { text: '' },
    // Stanza 3
    { text: '[Paraphrase] She pours tea from a flask, with the milk coming straight' },
    { text: '[Paraphrase] out of an old sauce bottle, stoppered with a twist' },
    { text: '[Paraphrase] of paper. Unhurriedly, she lays out' },
    {
      text: '[Paraphrase] the familiar three plates and the blue-painted tin cups.',
      annotations: [
        {
          type: 'Listing',
          note: 'The careful enumeration of picnic items creates a ritual quality: each object is precisely observed. "Three" recurs (three plates here, three suns in the next line), a quietly Trinitarian pattern, and "the same" of line 2 returns: the plates are the ones they always used.',
          color: '#8b5cf6',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: '[Paraphrase] The sky goes white, as though three suns were blazing at once.',
      annotations: [
        {
          type: 'Supernatural imagery',
          note: 'The impossible three suns create an otherworldly, dreamlike atmosphere. The whitening sky suggests a threshold between life and death: the natural world tipping into vision.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '[Paraphrase] Shielding her eyes with a hand, his mother gazes towards him' },
    {
      text: '[Paraphrase] across the stream. His father sends a pebble',
      annotations: [
        {
          type: 'Symbolism',
          note: "The skimming stone and the mother's shaded gaze together fix the parents on the far side of a stream, a traditional image of the boundary of the dead (compare the River Styx). Their actions are calm, domestic and unhurried.",
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] skipping over the water. Without any hurry,',
      annotations: [
        {
          type: 'Enjambment',
          note: 'The stanza ends on a single unhurried adverb, and its sentence runs on over the stanza break into the next line. The pause in the white space is itself leisurely: the parents are in no rush, and neither is the poem.',
          color: '#8b5cf6',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 5
    { text: '[Paraphrase] they wave to him from the far bank, inviting him over.' },
    { text: '[Paraphrase] He hears them calling to him to look for the path along the stream,' },
    {
      text: '[Paraphrase] and telling him that getting across is easier than he might expect.',
      annotations: [
        {
          type: 'Direct speech',
          note: 'The parents’ words are given in their own voice, casual and reassuring, and turn death from something feared into something surprisingly gentle. The speech pulls the reader into the experience of being called across.',
          color: '#f59e0b',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Final line
    {
      text: '[Paraphrase] The speaker admits he never expected it to be this way.',
      annotations: [
        {
          type: 'Understated revelation',
          note: 'The poem\'s emotional climax. "It" is never named (death, the afterlife, reunion), which leaves the meaning open and deeply moving. The understatement is devastating.',
          color: '#ef4444',
        },
      ],
    },
  ],
  context:
    '<p><strong>Charles Causley</strong> (1917\u20132003) was a Cornish poet who lost his father when he was young and was deeply affected by his mother\'s death. "Eden Rock" was published in 1988 and is widely read as a poem about <strong>approaching death</strong> and the hope of being reunited with deceased parents.</p><p>The poem recreates a childhood <strong>memory or vision</strong> of his parents as young people at a place called Eden Rock. The extraordinary precision of detail \u2014 specific ages, colours, fabrics \u2014 gives the scene a <strong>hyper-real, dreamlike</strong> quality, as though the speaker is seeing his parents more clearly than memory alone could allow.</p><p><strong>Important:</strong> "Eden Rock" is <strong>invented by Causley</strong>: it is NOT a real place. Causley is widely reported to have said, when asked where it was, that he had made it up. Some revision sites incorrectly identify it with a Cornish location. Causley was Cornish, but Eden Rock itself is fictional, drawing on the biblical Garden of Eden and the dream-vision tradition.</p><p>The title alludes to the <strong>Garden of Eden</strong> \u2014 a lost paradise. The poem suggests that death may not be an ending but a <strong>return to an innocent, perfect state</strong> where loved ones wait. Causley never married and lived with his mother until her death, making the poem intensely personal.</p><p>Key themes include <strong>memory and nostalgia</strong>, the <strong>boundary between life and death</strong>, <strong>parental love</strong>, and the possibility of <strong>reunion after death</strong>.</p>',

  contextAr:
    '<p><strong>Charles Causley</strong> (1917\u20132003) \u0634\u0627\u0639\u0631 \u0645\u0646 Cornwall\u060c \u0641\u0642\u062f \u0623\u0628\u0648\u0647 \u0648\u0647\u0648 \u0635\u063a\u064a\u0631\u060c \u0648\u062a\u0623\u062b\u0651\u0631 \u0648\u0627\u064a\u062f \u0628\u0648\u0641\u0627\u0629 \u0623\u0645\u0647. \u0642\u0635\u064a\u062f\u0629 "Eden Rock" \u0627\u0646\u062a\u0634\u0631\u062a \u0633\u0646\u0629 1988\u060c \u0648\u064a\u064f\u0642\u0631\u0623 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0639\u0644\u0649 \u0646\u0637\u0627\u0642 \u0648\u0627\u0633\u0639 \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u0642\u0635\u064a\u062f\u0629 \u0639\u0646 <strong>\u0627\u0644\u0627\u0642\u062a\u0631\u0627\u0628 \u0645\u0646 \u0627\u0644\u0645\u0648\u062a</strong> \u0648\u0639\u0646 \u0627\u0644\u0623\u0645\u0644 \u0641\u064a \u0627\u0644\u0644\u0642\u0627\u0621 \u0645\u0639 \u0627\u0644\u0648\u0627\u0644\u062f\u064a\u0646 \u0627\u0644\u0645\u062a\u0648\u0641\u0651\u064a\u064a\u0646.</p><p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0639\u064a\u062f \u0628\u0646\u0627\u0621 <strong>\u0630\u0643\u0631\u0649 \u0645\u0646 \u0627\u0644\u0637\u0641\u0648\u0644\u0629 \u0623\u0648 \u0631\u0624\u064a\u0629</strong> \u0644\u0648\u0627\u0644\u062f\u064a\u0647 \u0648\u0647\u0645 \u0634\u0628\u0627\u0628 \u0641\u064a \u0645\u0643\u0627\u0646 \u0627\u0633\u0645\u0647 Eden Rock. \u0627\u0644\u062f\u0642\u0651\u0629 \u0627\u0644\u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629 \u0641\u064a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0623\u0639\u0645\u0627\u0631 \u0645\u062d\u062f\u0651\u062f\u0629\u060c \u0623\u0644\u0648\u0627\u0646\u060c \u0623\u0642\u0645\u0634\u0629 \u2014 \u062a\u0639\u0637\u064a \u0627\u0644\u0645\u0634\u0647\u062f \u0637\u0627\u0628\u0639 <strong>\u062d\u0642\u064a\u0642\u064a \u0628\u0634\u0643\u0644 \u0645\u0641\u0631\u0637\u060c \u062d\u0644\u0645\u064a</strong>\u060c \u0643\u0623\u0646 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0634\u0648\u0641 \u0648\u0627\u0644\u062f\u064a\u0647 \u0628\u0648\u0636\u0648\u062d \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u064a \u062a\u0633\u0645\u062d \u0641\u064a\u0647 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u0639\u0627\u062f\u064a\u0629.</p><p><strong>\u0645\u0644\u0627\u062d\u0638\u0629 \u0645\u0647\u0645\u0629:</strong> "Eden Rock" \u0645\u0643\u0627\u0646 <strong>\u0627\u062e\u062a\u0631\u0639\u0647 Causley</strong> \u2014 \u0645\u0648 \u0645\u0643\u0627\u0646 \u062d\u0642\u064a\u0642\u064a. Causley يُنقَل عنه على نطاق واسع إنه لما انسأل وين المكان، قال إنه اخترعه. \u0628\u0639\u0636 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u062a\u062e\u0637\u0626 \u0648\u062a\u0631\u0628\u0637 \u0627\u0644\u0627\u0633\u0645 \u0628\u0645\u0643\u0627\u0646 \u0641\u064a Cornwall. \u0635\u062d\u064a\u062d \u0625\u0646 Causley \u0645\u0646 Cornwall\u060c \u0628\u0633 Eden Rock \u0646\u0641\u0633\u0647 \u062e\u064a\u0627\u0644\u064a\u060c \u064a\u0633\u062a\u0644\u0647\u0645 \u0645\u0646 Garden of Eden \u0641\u064a \u0627\u0644\u0643\u062a\u0627\u0628 \u0627\u0644\u0645\u0642\u062f\u0651\u0633 \u0648\u0645\u0646 \u062a\u0642\u0644\u064a\u062f \u0631\u0624\u0649 \u0627\u0644\u0623\u062d\u0644\u0627\u0645.</p><p>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0641\u064a\u0647 allusion \u0644\u0640<strong>Garden of Eden</strong> \u2014 \u0627\u0644\u0641\u0631\u062f\u0648\u0633 \u0627\u0644\u0645\u0641\u0642\u0648\u062f. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0644\u0645\u0651\u062d \u0625\u0646 \u0627\u0644\u0645\u0648\u062a \u064a\u062d\u062a\u0645\u0644 \u0645\u0627 \u064a\u0643\u0648\u0646 \u0646\u0647\u0627\u064a\u0629\u060c \u0628\u0644 <strong>\u0631\u062c\u0648\u0639 \u0644\u062d\u0627\u0644 \u0628\u0631\u064a\u0621 \u0643\u0627\u0645\u0644</strong> \u0641\u064a\u0647 \u0623\u062d\u0628\u0651\u0627\u0624\u0643 \u064a\u0646\u062a\u0638\u0631\u0648\u0646\u0643. Causley \u0645\u0627 \u062a\u0632\u0648\u0651\u062c \u0623\u0628\u062f\u060c \u0648\u0639\u0627\u0634 \u0645\u0639 \u0623\u0645\u0647 \u0644\u064a\u0646 \u062a\u0648\u0641\u0651\u062a\u060c \u0648\u0647\u0630\u0627 \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0634\u062e\u0635\u064a\u0629 \u0648\u0627\u064a\u062f.</p><p>\u0623\u0647\u0645 \u0627\u0644\u0645\u0648\u0627\u0636\u064a\u0639: <strong>\u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0648\u0627\u0644\u062d\u0646\u064a\u0646</strong>\u060c \u0648<strong>\u0627\u0644\u062d\u062f\u0651 \u0628\u064a\u0646 \u0627\u0644\u062d\u064a\u0627\u0629 \u0648\u0627\u0644\u0645\u0648\u062a</strong>\u060c \u0648<strong>\u0627\u0644\u062d\u0628 \u0627\u0644\u0623\u0628\u0648\u064a</strong>\u060c \u0648\u0625\u0645\u0643\u0627\u0646\u064a\u0629 <strong>\u0627\u0644\u0644\u0642\u0627\u0621 \u0628\u0639\u062f \u0627\u0644\u0645\u0648\u062a</strong>.</p>',
  summary:
    'Lines 1–4: The speaker says his parents are waiting for him "beyond" Eden Rock. His father is twenty-five, in his tweed suit, with his terrier Jack at his feet.\n\n' +
    'Lines 5–12: His mother, twenty-three, in a "sprigged" dress and a straw hat, lays a cloth on the lawn, serves tea from a flask with milk from an old sauce bottle, and sets out "the same" three plates and blue tin cups. Every detail is described with impossible precision.\n\n' +
    'Lines 13–16: The sky whitens unnaturally, lit by "three suns". His mother shields her eyes to look across to him over the "drifted stream", and his father skims a stone.\n\n' +
    'Lines 17–20: The parents wave him over from the far bank and call to him that crossing is easier than he might expect (line 19). The poem ends on a single line of quiet wonder (line 20), in which the speaker admits he had not expected it to be this way.',

  summaryAr:
    'الأبيات 1–4: المتكلّم يقول إن والديه ينتظرونه "beyond" (ورا) Eden Rock. أبوه عمره خمسة وعشرين، لابس بدلته من قماش tweed، وكلبه Jack عند رجوله.\n\n' +
    'الأبيات 5–12: أمه، عمرها ثلاثة وعشرين، لابسة فستان "sprigged" (منقوش بورود صغيرة) وقبعة قش، تفرش مفرش على العشب، وتصب الشاي من ترمس والحليب من قارورة صلصة قديمة، وتحط "the same" الثلاث صحون والأكواب الزرقا. كل تفصيلة موصوفة بدقّة مستحيلة.\n\n' +
    'الأبيات 13–16: السما تبيضّ بشكل غير طبيعي، كأن "three suns" (ثلاث شموس) تنوّرها. أمه تظلّل عيونها عشان تشوفه عبر "drifted stream" (الساقية المنجرفة)، وأبوه يزحلق حجر على الماي.\n\n' +
    'الأبيات 17–20: الوالدين يأشّرون له من الضفة الثانية وينادونه إن العبور أسهل مما يتوقّع (البيت 19). والقصيدة تخلص ببيت واحد فيه دهشة هادئة (البيت 20)، يعترف فيه المتكلّم إنه ما توقّع إن الشي بيكون كذا.',
  formAndStructure:
    'Form: Four quatrains, then a tercet, then a single closing line. The stanzas shrink as the poem nears its end, moving steadily towards a climactic final revelation.\n\n' +
    "Structure: The poem builds from precise, grounded description to increasingly dreamlike, supernatural imagery, mirroring the speaker's crossing from life towards death.\n\n" +
    'Tense: The present tense runs from the first line to the nineteenth, which creates immediacy and collapses past and present, so the dead parents seem alive and present now. Only the last line turns to the past perfect, as the speaker looks back on what he had expected.\n\n' +
    'Rhyme: No regular rhyme scheme, but subtle echoes and half-rhymes create a gentle, lulling musicality that avoids harshness.\n\n' +
    'Line lengths: Relatively regular, creating a calm, measured pace that contrasts with the extraordinary subject matter.\n\n' +
    "The last line stands alone, cut off from the tercet by a stanza break, and the white space before it creates a pause before the poem's understated conclusion.",

  formAndStructureAr:
    'الشكل (Form): أربعة quatrain، بعدها tercet، بعدها بيت أخير لحاله. المقاطع تقصر كل ما قرّبت القصيدة من نهايتها، وتتحرّك بثبات لين الكشف الأخير.\n\n' +
    'البنية (Structure): القصيدة تبنى من وصف دقيق ومرسّخ في الأرض، لين تنتقل لصور حلمية وفوق طبيعية، وهذا يعكس عبور المتكلّم من الحياة نحو الموت.\n\n' +
    'الزمن (Tense): الزمن الحاضر يمشي من البيت الأول لين البيت التاسع عشر، وهذا يخلق إحساس بالمباشرة ويدمج الماضي مع الحاضر، فيبانون الوالدين المتوفّيين أحياء وحاضرين في هاللحظة. والبيت الأخير بس يتحوّل للـpast perfect، والمتكلّم يطالع لورا على اللي كان يتوقّعه.\n\n' +
    'القافية (Rhyme): ما فيه نظام قافية منتظم، بس أصداء خفيفة وhalf-rhymes تخلق موسيقى لطيفة ومُهدّئة، تتجنّب القسوة.\n\n' +
    'طول الأبيات: شبه منتظم، يخلق إيقاع هادئ ومقيّس، يتناقض مع الموضوع الاستثنائي.\n\n' +
    'البيت الأخير واقف لحاله، مفصول عن الـtercet بفاصل مقطع، والمساحة البيضا قبله تخلق توقّف قبل خاتمة القصيدة المُقتصدة في الكلام.',
  keyQuotes: [
    {
      quote: 'beyond',
      analysis:
        'The first line places the parents "beyond" Eden Rock, past a threshold the speaker has not yet crossed. The name recalls the Garden of Eden, paradise and innocence, suggesting that death is a return to a perfect state. Eden Rock is an invented place: Causley is widely reported to have said he made it up.',
      themes: ['Death', 'Paradise', 'Reunion'],
      analysisAr:
        'البيت الأول يحط الوالدين "beyond" (ورا) Eden Rock، يعني بعد عتبة المتكلّم لين الحين ما عبرها. والاسم يستدعي Garden of Eden، الفردوس والبراءة، ويلمّح إن الموت رجوع لحال كامل. وEden Rock مكان مخترَع: يُنقَل عن Causley على نطاق واسع إنه قال إنه اخترعه.',
      themesAr: ['الموت', 'الفردوس', 'اللقاء بعد الفراق'],
    },
    {
      quote: 'the same',
      analysis:
        'The father wears "the same" suit (line 2) and the mother sets out "the same" three plates (line 12). The repetition suggests an unchanging scene: the father is twenty-five and the mother twenty-three, younger than the speaker who remembers them, and nothing about them has aged. The child has outlived his parents’ youth.',
      themes: ['Memory', 'Time', 'Loss'],
      analysisAr:
        'الأب لابس "the same" (نفس) البدلة (البيت 2)، والأم تحط "the same" الثلاث صحون (البيت 12). التكرار يوحي بمشهد ما يتغيّر: الأب عمره خمسة وعشرين والأم ثلاثة وعشرين، أصغر من المتكلّم اللي يتذكّرهم، وما شي فيهم كبر. الابن عاش أطول من شباب والديه.',
      themesAr: ['الذاكرة', 'الزمن', 'الفقد'],
    },
    {
      quote: 'three suns',
      analysis:
        'The impossible, supernatural light of line 13 marks the shift from memory to vision, from earthly to otherworldly. Three suns may allude to the Trinity, and the number echoes the three plates of the line before.',
      themes: ['Supernatural', 'Death', 'Transcendence'],
      analysisAr:
        'الضوء المستحيل وفوق الطبيعي في البيت 13 يأشّر على الانتقال من الذاكرة للرؤية، ومن الأرضي للعالم الآخر. والثلاث شموس يحتمل إنها allusion للـTrinity، والرقم يردّد صدى الثلاث صحون في البيت اللي قبله.',
      themesAr: ['ما فوق الطبيعي', 'الموت', 'التسامي'],
    },
    {
      quote: 'drifted stream',
      analysis:
        'The stream of line 15 is a traditional symbol of the boundary between life and death (compare the River Styx). "Drifted" suggests it has shifted or silted, perhaps become easier to cross, and the mother has to shield her eyes to see across it.',
      themes: ['Death', 'Crossing', 'Symbolism'],
      analysisAr:
        'الساقية في البيت 15 رمز تقليدي للحدّ بين الحياة والموت (قارن نهر Styx في الأسطورة اليونانية). وكلمة "drifted" توحي إنها انزاحت أو ترسّبت، يحتمل إنها صارت أسهل في العبور، والأم لازم تظلّل عيونها عشان تشوف الضفة الثانية.',
      themesAr: ['الموت', 'العبور', 'الرمزية'],
    },
    {
      quote: 'Leisurely',
      analysis:
        'The adverb ends the fourth stanza (line 16), and its sentence runs on over the break into the next line, where the parents invite him over from the far side. They are in no hurry: the calm of the gesture makes the invitation to cross feel gentle rather than urgent.',
      themes: ['Calm', 'Crossing', 'Death'],
      analysisAr:
        'هالظرف يختم المقطع الرابع (البيت 16)، والجملة تكمل عبر الفاصل للبيت اللي بعده، وهناك الوالدين يأشّرون له من الضفة الثانية. ما عندهم عجلة: هدوء الحركة يخلّي دعوة العبور لطيفة مو مستعجلة.',
      themesAr: ['الهدوء', 'العبور', 'الموت'],
    },
    {
      quote: 'Crossing is not as hard',
      analysis:
        'The parents’ own words, the only speech in the poem, reassure the speaker in line 19 that the crossing (to death, or to them) is easy. The line is not broken: the reassurance comes whole and unhesitating, in plain, conversational language that turns death from terror into gentle acceptance.',
      themes: ['Death', 'Acceptance', 'Comfort'],
      analysisAr:
        'كلام الوالدين بصوتهم، وهو الكلام المباشر الوحيد في القصيدة، يطمّن المتكلّم في البيت 19 إن العبور (للموت، أو لهم) سهل. والبيت ما فيه كسر: الطمأنينة تجي كاملة وبدون تردّد، بلغة بسيطة وحوارية تحوّل الموت من رعب إلى قبول لطيف.',
      themesAr: ['الموت', 'القبول', 'الراحة'],
    },
    {
      quote: 'I had not thought that it would be like this',
      analysis:
        'The most devastating line, set apart as a stanza of its own. "It" is never named: it may be death, the afterlife or reunion. The understatement makes it more powerful than any dramatic exclamation.',
      themes: ['Death', 'Acceptance', 'Wonder'],
      analysisAr:
        'أكثر بيت يهدّ القارئ في القصيدة، وهو مقطع لحاله. كلمة "it" أبد ما تتسمّى: يمكن الموت، أو الحياة الثانية، أو اللقاء. والـunderstatement (الاقتصاد في الكلام) يخلّي البيت أقوى من أي صرخة درامية.',
      themesAr: ['الموت', 'القبول', 'الدهشة'],
    },
  ],
  // lineRef is the entry's index in `lines` above, stanza breaks included, so
  // the viewer highlights the right entry; until 26 September 2026 four of these
  // pointed past the end of the array.
  languageDevices: [
    {
      device: 'Biblical allusion',
      example: 'Eden Rock',
      effect:
        'The title evokes the Garden of Eden, a lost paradise of innocence. It frames death not as an ending but as a return to a perfect, prelapsarian state.',
      lineRef: 0,
      effectAr:
        'العنوان يستدعي Garden of Eden، الفردوس المفقود اللي يرمز للبراءة. يخلّي القصيدة تصوّر الموت مو على إنه نهاية، بل على إنه رجوع لحال كامل قبل السقوط (prelapsarian).',
    },
    {
      device: 'Present tense narration',
      example: 'I had not thought',
      effect:
        'Every verb until the last line is in the present tense (the parents are waiting, the mother pours, the sky whitens), which collapses time and makes the dead parents seem alive and present. The final line breaks the pattern: its past perfect looks back, as if the crossing had already begun.',
      lineRef: 24,
      effectAr:
        'كل الأفعال لين البيت الأخير في الزمن الحاضر (الوالدين ينتظرون، الأم تصب الشاي، السما تبيضّ)، وهذا يدمج الأزمنة ويخلّي الوالدين المتوفّيين يبانون أحياء وحاضرين. والبيت الأخير يكسر النمط: الـpast perfect فيه يطالع لورا، كأن العبور بدأ خلاص.',
    },
    {
      device: 'Precise visual detail',
      example: 'sprigged',
      effect:
        'The photographic specificity of ages, colours and clothing (a dress printed with small sprays of flowers, a straw hat with a ribbon, a tweed suit) creates hyper-real clarity, suggesting this is more than ordinary memory: perhaps a vision.',
      lineRef: 5,
      effectAr:
        'الدقّة الفوتوغرافية في الأعمار والألوان والملابس (فستان بنقشة ورود صغيرة، قبعة قش بشريطة، بدلة tweed) تخلق وضوح حقيقي بشكل مفرط، وتلمّح إن هذي مو ذاكرة عادية: يحتمل تكون رؤية.',
    },
    {
      device: 'Supernatural imagery',
      example: 'three suns',
      effect:
        'The impossible light signals a shift from the natural to the transcendent. The scene is no longer a memory but a threshold experience.',
      lineRef: 15,
      effectAr:
        'الضوء المستحيل يأشّر على انتقال من الطبيعي إلى المتسامي. المشهد ما عاد ذاكرة، بل تجربة عند العتبة بين عالمين.',
    },
    {
      device: 'Symbolism',
      example: 'drifted stream',
      effect:
        'The stream separating the speaker from his parents echoes the mythological River Styx: the boundary between the living and the dead.',
      lineRef: 17,
      effectAr:
        'الساقية اللي تفصل المتكلّم عن والديه تصدّى لنهر Styx في الميثولوجيا اليونانية: الحدّ الفاصل بين الأحياء والأموات.',
    },
    {
      device: 'Understatement',
      example: 'like this',
      effect:
        'The restrained, conversational tone of the last line is more emotionally devastating than dramatic language would be. The unnamed "it" resonates with mystery, and the closing words point at an experience the poem never describes.',
      lineRef: 24,
      effectAr:
        'النبرة المنضبطة والحوارية في البيت الأخير تهدّ القارئ عاطفياً أكثر مما تهده اللغة الدرامية. وكلمة "it" اللي ما تتسمّى تتردّد بصدى من الغموض، والكلمات الأخيرة تأشّر على تجربة القصيدة أبد ما توصفها.',
    },
    {
      device: 'Enjambment',
      example: 'Leisurely',
      effect:
        'The fourth stanza ends on this single adverb, and the sentence runs on over the stanza break into the fifth, where the parents wave him over. The pause in the white space enacts the unhurried calm of the scene, and delays the invitation to cross.',
      lineRef: 18,
      effectAr:
        'المقطع الرابع يخلص على هالظرف الوحيد، والجملة تكمل عبر الفاصل بين المقطعين للمقطع الخامس، وهناك الوالدين يأشّرون له. التوقّف في المساحة البيضا يمثّل هدوء المشهد اللي ما فيه عجلة، ويأجّل دعوة العبور.',
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'er-1',
    question: 'What is the speaker describing?',
    type: 'multiple-choice',
    options: [
      'A holiday in Cornwall',
      'A vivid memory or vision of his dead parents waiting for him across a stream',
      'A childhood picnic',
      'A dream about heaven',
    ],
    correctIndex: 1,
    explanation:
      'Causley describes his parents at a picnic by a stream, waiting for him. The stream represents the boundary between life and death - his parents beckon him to cross over to join them.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'er-2',
    question: 'What does the stream represent?',
    type: 'multiple-choice',
    options: [
      'A swimming pool',
      'The boundary between life and death - crossing it means joining his dead parents',
      'A river in Cornwall',
      'Tears of sadness',
    ],
    correctIndex: 1,
    explanation:
      'The stream is a powerful symbol of the divide between the living and the dead. The parents are on the other side, calling the speaker to cross over - a metaphor for death.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'er-3',
    question: 'What is the effect of the precise sensory detail in the poem?',
    type: 'multiple-choice',
    options: [
      'It makes the poem boring',
      'The vivid details make the scene feel real and present, as if the memory is more alive than reality',
      'It is just description',
      'It shows the speaker has a good memory',
    ],
    correctIndex: 1,
    explanation:
      "The precise details - the old sauce bottle used as a milk jug, the mother's dress, the father's tweed suit - make the memory intensely vivid. The scene feels more real than a dream, suggesting it may be a vision of the afterlife.",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'er-4',
    question: 'What does the final line of the poem (line 20) suggest?',
    type: 'multiple-choice',
    options: [
      'Disappointment',
      'Death (or the approach of death) is gentler and more natural than expected - a calm acceptance',
      'Surprise at a holiday destination',
      'Confusion about the picnic',
    ],
    correctIndex: 1,
    explanation:
      'The final line is deliberately ambiguous but suggests the speaker is approaching death. It is not frightening but peaceful - "like this" implies something gentle, natural, and welcoming.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'er-5',
    question: 'Who was Charles Causley?',
    type: 'multiple-choice',
    options: [
      'A war poet from WWI',
      'A Cornish poet whose father died when he was young - this poem reflects on that loss and the hope of reunion',
      'A Romantic poet',
      'A London playwright',
    ],
    correctIndex: 1,
    explanation:
      'Charles Causley (1917-2003) was a Cornish poet. His father died from war injuries when Causley was young. Eden Rock imagines reunion with both parents after death.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'er-6',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      'Four quatrains, a tercet and a single final line - the isolation of the last line is significant',
      'Free verse',
      'Rhyming couplets',
    ],
    correctIndex: 1,
    explanation:
      'Four quatrains, then a three-line stanza, then a standalone final line. The stanzas shrink towards the end, and the isolated last line stands apart, like the speaker standing alone on one side of the stream, about to cross.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'er-7',
    question: 'What does the first line suggest by placing the parents "beyond" Eden Rock?',
    type: 'multiple-choice',
    options: [
      'They are hiding',
      'The parents exist in a place beyond earthly experience - possibly heaven or the afterlife',
      'They are lost',
      'Eden Rock is a real place only',
    ],
    correctIndex: 1,
    explanation:
      'The word suggests a place past the physical world, and the name Eden echoes the Garden of Eden - a paradise. The parents wait in a realm beyond ordinary reality.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'er-8',
    question: 'How does the poem present death?',
    type: 'multiple-choice',
    options: [
      'As terrifying and violent',
      'As a gentle, natural crossing - a reunion with loved ones rather than an ending',
      'As meaningless',
      'As punishment',
    ],
    correctIndex: 1,
    explanation:
      'Death is presented not as something to fear but as a gentle crossing of a stream toward waiting loved ones. The calm, nostalgic tone makes death feel like a homecoming.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'er-9',
    question: 'What is the effect of present tense in a poem about the past?',
    type: 'multiple-choice',
    options: [
      'It is a mistake',
      'Present tense makes the memory feel immediately alive - as if the vision is happening now, not in the past',
      'It makes the poem confusing',
      'It shows the speaker is forgetful',
    ],
    correctIndex: 1,
    explanation:
      'Using present tense for a memory/vision makes it feel vivid and current. The parents are not remembered - they are present, waiting now. This blurs the line between memory and vision.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'er-10',
    question: 'Which poem pairs best with Eden Rock?',
    type: 'multiple-choice',
    options: [
      'Singh Song!',
      'Walking Away by Cecil Day-Lewis',
      "Love's Philosophy",
      "Porphyria's Lover",
    ],
    correctIndex: 1,
    explanation:
      'Both Eden Rock and Walking Away explore parent-child separation. Walking Away shows a parent letting go of a child; Eden Rock shows a child approaching reunion with dead parents.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Eden Rock explores death as reunion, the power of memory, the parent-child bond, and a peaceful acceptance of mortality.',
    keyPoints: [
      'Death as reunion - crossing the stream to join loved ones',
      'Memory as vision - the scene is too vivid to be mere memory',
      'The enduring parent-child bond - love persists beyond death',
      'Acceptance - the quiet surprise of the final line (line 20)',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Causley uses precise sensory detail, light imagery, water symbolism, and a calm, nostalgic tone to present death as gentle and natural.',
    keyPoints: [
      'Stream as boundary between life and death',
      'Precise details (the sauce bottle, the flowered dress) make the vision vivid',
      'Eden Rock, and the "beyond" of line 1 - paradise past the physical world',
      'Light and whiteness - the scene is illuminated, heavenly',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four quatrains, a tercet and a standalone final line - the isolated last line enacts the moment of crossing or decision.',
    keyPoints: [
      'Isolated final line - stands alone like the speaker at the boundary',
      'Present tense - the vision is happening now, not in the past',
      'No regular rhyme - natural, conversational tone',
      'Progression toward the stream - the poem moves toward crossing',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Causley present the relationship between the speaker and his parents in Eden Rock?',
  'Compare how memory is presented in Eden Rock and one other poem from the anthology.',
  'How does Causley use language and structure to present death as something peaceful?',
]

const comparePoems = [
  {
    title: 'Walking Away',
    poet: 'Cecil Day-Lewis',
    link: '/revision/poetry/love-and-relationships/walking-away',
    reason:
      "Both explore parental love across a threshold. Day-Lewis watches his child cross into independence; Causley's parents wait beyond the boundary of death. Both find love in separation.",
    themes: ['Parental love', 'Separation', 'Thresholds'],
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason:
      "Both are deeply personal poems about a parent. Heaney's father is a living presence who becomes a memory; Causley's parents are memories who become a living vision.",
    themes: ['Family', 'Memory', 'Parent-child'],
  },
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason:
      'Both sustain connection across distance. Dooley bridges geography through letters; Causley bridges the ultimate distance between life and death through memory and vision.',
    themes: ['Distance', 'Connection', 'Communication'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function EdenRockPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Eden Rock by Charles Causley - Analysis & Annotations"
        description="Line-by-line analysis of Eden Rock with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
          <h1 className="text-heading-lg font-heading text-foreground">Eden Rock</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Charles Causley &middot; <em>A Field of Vision</em> (1988)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Death', 'Memory', 'Parental love', 'Paradise', 'Nostalgia', 'Reunion'].map((theme) => (
          <Badge key={theme} variant="outline" className="text-xs">
            {theme}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Eden Rock"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Eden Rock"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      {/* Copyright notice - Eden Rock is in copyright (David Higham Associates). The line
          viewer paraphrases the poem in the site's own words; only short extracts are
          quoted, in the analysis. */}
      <aside
        role="note"
        aria-label="Copyright and fair-dealing notice"
        className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-[12px] leading-relaxed text-amber-900 dark:text-amber-200"
      >
        <p>
          <strong>Note on the poem text below:</strong> The poem is paraphrased here, not
          reproduced, and is printed in full in the AQA Love &amp; Relationships anthology. Students
          can also refer to Causley&rsquo;s <em>Collected Poems 1951–1997</em> (Macmillan) or the{' '}
          <a
            href="https://poetryarchive.org/poet/charles-causley/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-100"
          >
            Poetry Archive
          </a>{' '}
          for the full text. Every line marked [Paraphrase] is in our own words; the analysis quotes
          only short extracts, for criticism under CDPA 1988 s.30.
        </p>
      </aside>

      <InteractivePoemViewer poem={edenRockPoem} />

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
          Quotations from <em>Eden Rock</em> are short extracts for criticism and review. &copy; the
          Causley estate; rights administered by David Higham Associates.
        </p>
        <p>
          The poem is paraphrased here, not reproduced; it is printed in full in the AQA Love and
          Relationships anthology. Short quotations are used for private study and educational
          criticism under UK fair-dealing provisions (Copyright, Designs and Patents Act 1988,
          s.30). No commercial use is intended. All quotations remain the intellectual property of
          the respective rights holders.
        </p>
      </footer>
    </div>
  )
}
