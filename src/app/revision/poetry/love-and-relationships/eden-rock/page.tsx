'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Poem data ─────────────────────────────────────────────────────── */

const edenRockPoem: PoemData = {
  title: 'Eden Rock',
  poet: 'Charles Causley',
  // RIGHTS NOTE: "Eden Rock" by Charles Causley is in copyright. Rights administered by David Higham Associates.
  // The full poem body is NOT reproduced here. Under fair-dealing for criticism/review (CDPA 1988 s.30), only the
  // verified opening line, verified final line, and a small number of short representative phrases are included
  // for analytical purposes. Students must consult Causley, *Collected Poems 1951-1997* (Macmillan), or the
  // Poetry Archive's licensed reproduction, for the complete text.
  lines: [
    // Stanza 1 \u2014 opening line (verified, fair-dealing extract)
    {
      text: 'They are waiting for me somewhere beyond Eden Rock:',
      annotations: [
        {
          type: 'Biblical allusion',
          note: '"Eden" evokes the Garden of Eden \u2014 paradise, innocence, and a place before death. "Beyond" suggests the afterlife or a threshold between worlds. "Eden Rock" is an invented place \u2014 Causley confirmed in interview: "I have no idea, I mean I made it up!" Some interpretations link it to the biblical Eden + Causley\'s Cornish landscape, but the place itself is fictional.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Stanza 1 continues: the speaker pictures his father as a young man in a tweed suit, with his terrier at his feet \u2014 full text omitted for copyright.]',
      annotations: [
        {
          type: 'Precise detail',
          note: 'The opening stanza pins the father at a specific age (twenty-five) and dresses him in carefully named fabric and a named pet. The photographic specificity makes the vision feel like a treasured snapshot or impossibly vivid memory.',
          color: '#8b5cf6',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2 \u2014 short representative phrase, then summary
    {
      text: '"My mother, twenty-three, in a sprigged dress" \u2026',
      annotations: [
        {
          type: 'Colour imagery',
          note: 'The precise colours and textures \u2014 the sprigged dress, the ribbon at her hat, hair "the colour of wheat" \u2014 create an almost hyper-real portrait. The specificity suggests this is more than ordinary memory.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Stanza 2 continues: the mother spreads a stiff white cloth over the grass and pours tea from a Thermos, the milk improvised from an old sauce-bottle \u2014 full text omitted for copyright.]',
      annotations: [
        {
          type: 'Sacramental detail',
          note: 'The careful, ritual laying-out of a picnic \u2014 cloth, tea, milk \u2014 turns an ordinary scene into something quietly sacramental, as though preparing a Communion table.',
          color: '#f59e0b',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 3 \u2014 representative phrase + summary
    {
      text: '\u2026 "the same three plates, the tin cups painted blue" \u2026',
      annotations: [
        {
          type: 'Listing',
          note: 'The careful enumeration of picnic items creates a ritual quality. Each object is precisely observed, lending the scene sacramental significance. "Three" recurs (three plates, three suns) \u2014 a quietly Trinitarian pattern.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'The sky whitens as if lit by three suns.',
      annotations: [
        {
          type: 'Supernatural imagery',
          note: 'The impossible three suns create an otherworldly, dreamlike atmosphere. The whitening sky suggests a threshold between life and death \u2014 the natural world tipping into vision.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Stanza 3 continues: the father skims a stone along the water; the mother shades her eyes and looks toward the speaker \u2014 full text omitted for copyright.]',
      annotations: [
        {
          type: 'Symbolism',
          note: "The water-skimming stone and the mother's shaded gaze together fix the parents on the far side of a stream \u2014 a traditional boundary-of-the-dead image (cf. the River Styx). The actions are calm, domestic, unhurried.",
          color: '#10b981',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4 \u2014 final line (verified, fair-dealing extract)
    {
      text: '[Final stanza: the parents call across the water that "crossing is not as hard as you might think" \u2014 full text omitted for copyright.]',
      annotations: [
        {
          type: 'Direct address',
          note: 'The casual, reassuring tone transforms death from something feared into something surprisingly gentle. The reported speech pulls the reader into the experience of being called across.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I had not thought that it would be like this.',
      annotations: [
        {
          type: 'Understated revelation',
          note: 'The poem\'s emotional climax. "It" is never named \u2014 death, the afterlife, reunion \u2014 leaving the meaning open and deeply moving. The understatement is devastating.',
          color: '#ef4444',
        },
      ],
    },
  ],
  context:
    '<p><strong>Charles Causley</strong> (1917\u20132003) was a Cornish poet who lost his father when he was young and was deeply affected by his mother\'s death. "Eden Rock" was published in 1988 and is widely read as a poem about <strong>approaching death</strong> and the hope of being reunited with deceased parents.</p><p>The poem recreates a childhood <strong>memory or vision</strong> of his parents as young people at a place called Eden Rock. The extraordinary precision of detail \u2014 specific ages, colours, fabrics \u2014 gives the scene a <strong>hyper-real, dreamlike</strong> quality, as though the speaker is seeing his parents more clearly than memory alone could allow.</p><p><strong>Important:</strong> "Eden Rock" is <strong>invented by Causley</strong> \u2014 it is NOT a real place. Causley confirmed in interview: "I have no idea, I mean I made it up!" Some revision sites incorrectly identify it with a Cornish location. Causley was Cornish, but Eden Rock itself is fictional, drawing on the biblical Garden of Eden and the dream-vision tradition.</p><p>The title alludes to the <strong>Garden of Eden</strong> \u2014 a lost paradise. The poem suggests that death may not be an ending but a <strong>return to an innocent, perfect state</strong> where loved ones wait. Causley never married and lived with his mother until her death, making the poem intensely personal.</p><p>Key themes include <strong>memory and nostalgia</strong>, the <strong>boundary between life and death</strong>, <strong>parental love</strong>, and the possibility of <strong>reunion after death</strong>.</p>',

  contextAr:
    '<p><strong>Charles Causley</strong> (1917\u20132003) \u0634\u0627\u0639\u0631 \u0645\u0646 Cornwall\u060c \u0641\u0642\u062f \u0623\u0628\u0648\u0647 \u0648\u0647\u0648 \u0635\u063a\u064a\u0631\u060c \u0648\u062a\u0623\u062b\u0651\u0631 \u0648\u0627\u064a\u062f \u0628\u0648\u0641\u0627\u0629 \u0623\u0645\u0647. \u0642\u0635\u064a\u062f\u0629 "Eden Rock" \u0627\u0646\u062a\u0634\u0631\u062a \u0633\u0646\u0629 1988\u060c \u0648\u064a\u064f\u0642\u0631\u0623 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0639\u0644\u0649 \u0646\u0637\u0627\u0642 \u0648\u0627\u0633\u0639 \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u0642\u0635\u064a\u062f\u0629 \u0639\u0646 <strong>\u0627\u0644\u0627\u0642\u062a\u0631\u0627\u0628 \u0645\u0646 \u0627\u0644\u0645\u0648\u062a</strong> \u0648\u0639\u0646 \u0627\u0644\u0623\u0645\u0644 \u0641\u064a \u0627\u0644\u0644\u0642\u0627\u0621 \u0645\u0639 \u0627\u0644\u0648\u0627\u0644\u062f\u064a\u0646 \u0627\u0644\u0645\u062a\u0648\u0641\u0651\u064a\u064a\u0646.</p><p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0639\u064a\u062f \u0628\u0646\u0627\u0621 <strong>\u0630\u0643\u0631\u0649 \u0645\u0646 \u0627\u0644\u0637\u0641\u0648\u0644\u0629 \u0623\u0648 \u0631\u0624\u064a\u0629</strong> \u0644\u0648\u0627\u0644\u062f\u064a\u0647 \u0648\u0647\u0645 \u0634\u0628\u0627\u0628 \u0641\u064a \u0645\u0643\u0627\u0646 \u0627\u0633\u0645\u0647 Eden Rock. \u0627\u0644\u062f\u0642\u0651\u0629 \u0627\u0644\u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629 \u0641\u064a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0623\u0639\u0645\u0627\u0631 \u0645\u062d\u062f\u0651\u062f\u0629\u060c \u0623\u0644\u0648\u0627\u0646\u060c \u0623\u0642\u0645\u0634\u0629 \u2014 \u062a\u0639\u0637\u064a \u0627\u0644\u0645\u0634\u0647\u062f \u0637\u0627\u0628\u0639 <strong>\u062d\u0642\u064a\u0642\u064a \u0628\u0634\u0643\u0644 \u0645\u0641\u0631\u0637\u060c \u062d\u0644\u0645\u064a</strong>\u060c \u0643\u0623\u0646 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0634\u0648\u0641 \u0648\u0627\u0644\u062f\u064a\u0647 \u0628\u0648\u0636\u0648\u062d \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u064a \u062a\u0633\u0645\u062d \u0641\u064a\u0647 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u0639\u0627\u062f\u064a\u0629.</p><p><strong>\u0645\u0644\u0627\u062d\u0638\u0629 \u0645\u0647\u0645\u0629:</strong> "Eden Rock" \u0645\u0643\u0627\u0646 <strong>\u0627\u062e\u062a\u0631\u0639\u0647 Causley</strong> \u2014 \u0645\u0648 \u0645\u0643\u0627\u0646 \u062d\u0642\u064a\u0642\u064a. Causley \u0646\u0641\u0633\u0647 \u0623\u0643\u0651\u062f \u0641\u064a \u0645\u0642\u0627\u0628\u0644\u0629: "I have no idea, I mean I made it up!" \u0628\u0639\u0636 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u062a\u062e\u0637\u0626 \u0648\u062a\u0631\u0628\u0637 \u0627\u0644\u0627\u0633\u0645 \u0628\u0645\u0643\u0627\u0646 \u0641\u064a Cornwall. \u0635\u062d\u064a\u062d \u0625\u0646 Causley \u0645\u0646 Cornwall\u060c \u0628\u0633 Eden Rock \u0646\u0641\u0633\u0647 \u062e\u064a\u0627\u0644\u064a\u060c \u064a\u0633\u062a\u0644\u0647\u0645 \u0645\u0646 Garden of Eden \u0641\u064a \u0627\u0644\u0643\u062a\u0627\u0628 \u0627\u0644\u0645\u0642\u062f\u0651\u0633 \u0648\u0645\u0646 \u062a\u0642\u0644\u064a\u062f \u0631\u0624\u0649 \u0627\u0644\u0623\u062d\u0644\u0627\u0645.</p><p>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0641\u064a\u0647 allusion \u0644\u0640<strong>Garden of Eden</strong> \u2014 \u0627\u0644\u0641\u0631\u062f\u0648\u0633 \u0627\u0644\u0645\u0641\u0642\u0648\u062f. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0644\u0645\u0651\u062d \u0625\u0646 \u0627\u0644\u0645\u0648\u062a \u064a\u062d\u062a\u0645\u0644 \u0645\u0627 \u064a\u0643\u0648\u0646 \u0646\u0647\u0627\u064a\u0629\u060c \u0628\u0644 <strong>\u0631\u062c\u0648\u0639 \u0644\u062d\u0627\u0644 \u0628\u0631\u064a\u0621 \u0643\u0627\u0645\u0644</strong> \u0641\u064a\u0647 \u0623\u062d\u0628\u0651\u0627\u0624\u0643 \u064a\u0646\u062a\u0638\u0631\u0648\u0646\u0643. Causley \u0645\u0627 \u062a\u0632\u0648\u0651\u062c \u0623\u0628\u062f\u060c \u0648\u0639\u0627\u0634 \u0645\u0639 \u0623\u0645\u0647 \u0644\u064a\u0646 \u062a\u0648\u0641\u0651\u062a\u060c \u0648\u0647\u0630\u0627 \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0634\u062e\u0635\u064a\u0629 \u0648\u0627\u064a\u062f.</p><p>\u0623\u0647\u0645 \u0627\u0644\u0645\u0648\u0627\u0636\u064a\u0639: <strong>\u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0648\u0627\u0644\u062d\u0646\u064a\u0646</strong>\u060c \u0648<strong>\u0627\u0644\u062d\u062f\u0651 \u0628\u064a\u0646 \u0627\u0644\u062d\u064a\u0627\u0629 \u0648\u0627\u0644\u0645\u0648\u062a</strong>\u060c \u0648<strong>\u0627\u0644\u062d\u0628 \u0627\u0644\u0623\u0628\u0648\u064a</strong>\u060c \u0648\u0625\u0645\u0643\u0627\u0646\u064a\u0629 <strong>\u0627\u0644\u0644\u0642\u0627\u0621 \u0628\u0639\u062f \u0627\u0644\u0645\u0648\u062a</strong>.</p>',
  summary:
    'The speaker describes a vision of his parents as young people waiting for him at Eden Rock, a picnic spot. His father is twenty-five, his mother twenty-three \u2014 ages they could only have been decades before the poem was written. Every detail of the scene is described with impossible precision: clothing, food, colours. As the vision intensifies, the sky whitens unnaturally, lit by three suns. A stream separates the speaker from his parents, but crossing it is "not as hard as you might think." The speaker accepts what is happening with quiet wonder: "I had not thought that it would be like this."',

  summaryAr:
    '\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0648\u0635\u0641 \u0631\u0624\u064a\u0629 \u0644\u0648\u0627\u0644\u062f\u064a\u0647 \u0648\u0647\u0645 \u0634\u0628\u0627\u0628\u060c \u064a\u0646\u062a\u0638\u0631\u0648\u0646\u0647 \u0641\u064a Eden Rock\u060c \u0645\u0643\u0627\u0646 \u0645\u062e\u0635\u0651\u0635 \u0644\u0644\u0646\u0632\u0647\u0629 (picnic). \u0627\u0644\u0623\u0628 \u0639\u0645\u0631\u0647 \u062e\u0645\u0633\u0629 \u0648\u0639\u0634\u0631\u064a\u0646\u060c \u0648\u0627\u0644\u0623\u0645 \u062b\u0644\u0627\u062b\u0629 \u0648\u0639\u0634\u0631\u064a\u0646 \u2014 \u0648\u0647\u064a \u0623\u0639\u0645\u0627\u0631 \u0645\u0627 \u0643\u0627\u0646\u0648\u0627 \u0641\u064a\u0647\u0627 \u0625\u0644\u0627 \u0642\u0628\u0644 \u0639\u0642\u0648\u062f \u0645\u0646 \u0632\u0645\u0646 \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0642\u0635\u064a\u062f\u0629. \u0643\u0644 \u062a\u0641\u0635\u064a\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u0634\u0647\u062f \u0645\u0648\u0635\u0648\u0641\u0629 \u0628\u062f\u0642\u0651\u0629 \u0645\u0633\u062a\u062d\u064a\u0644\u0629: \u0627\u0644\u0645\u0644\u0627\u0628\u0633\u060c \u0627\u0644\u0623\u0643\u0644\u060c \u0627\u0644\u0623\u0644\u0648\u0627\u0646. \u0648\u0645\u0639 \u062a\u0643\u062b\u0651\u0641 \u0627\u0644\u0631\u0624\u064a\u0629\u060c \u0627\u0644\u0633\u0645\u0627\u0621 \u062a\u0628\u064a\u0636\u0651 \u0628\u0634\u0643\u0644 \u063a\u064a\u0631 \u0637\u0628\u064a\u0639\u064a\u060c \u0643\u0623\u0646 \u062b\u0644\u0627\u062b \u0634\u0645\u0648\u0633 \u062a\u0646\u0648\u0651\u0631\u0647\u0627. \u0633\u0627\u0642\u064a\u0629 \u062a\u0641\u0635\u0644 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0639\u0646 \u0648\u0627\u0644\u062f\u064a\u0647\u060c \u0628\u0633 \u0639\u0628\u0648\u0631\u0647\u0627 "not as hard as you might think" (\u0645\u0648 \u0635\u0639\u0628 \u0645\u062b\u0644 \u0645\u0627 \u062a\u062a\u062e\u064a\u0651\u0644). \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0642\u0628\u0644 \u0627\u0644\u0644\u064a \u064a\u0635\u064a\u0631 \u0628\u062f\u0647\u0634\u0629 \u0647\u0627\u062f\u0626\u0629: "I had not thought that it would be like this".',
  formAndStructure:
    "Form: Four quatrains followed by shorter standalone lines, creating a structure that moves steadily toward a climactic final revelation.\n\nStructure: The poem builds from precise, grounded description to increasingly dreamlike, supernatural imagery, mirroring the speaker's crossing from life toward death.\n\nTense: Present tense throughout creates immediacy and collapses past and present, making the dead parents seem alive and present now.\n\nRhyme: No regular rhyme scheme, but subtle echoes and half-rhymes create a gentle, lulling musicality that avoids harshness.\n\nLine lengths: Relatively regular, creating a calm, measured pace that contrasts with the extraordinary subject matter.\n\nThe final short lines \u2014 separated by stanza breaks \u2014 create pauses before the poem's devastating, understated conclusions.",

  formAndStructureAr:
    '\u0627\u0644\u0634\u0643\u0644 (Form): \u0623\u0631\u0628\u0639\u0629 quatrain \u064a\u062a\u0628\u0639\u0647\u0627 \u0623\u0628\u064a\u0627\u062a \u0642\u0635\u064a\u0631\u0629 \u0645\u0646\u0641\u0635\u0644\u0629\u060c \u0648\u0647\u0630\u0627 \u064a\u062e\u0644\u0642 \u0628\u0646\u064a\u0629 \u062a\u062a\u062d\u0631\u0651\u0643 \u0628\u062b\u0628\u0627\u062a \u0644\u0648\u0631\u0627 \u0627\u0644\u0643\u0634\u0641 \u0627\u0644\u0646\u0647\u0627\u0626\u064a.\n\n' +
    '\u0627\u0644\u0628\u0646\u064a\u0629 (Structure): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0628\u0646\u0649 \u0645\u0646 \u0648\u0635\u0641 \u062f\u0642\u064a\u0642 \u0648\u0645\u0631\u0633\u0651\u062e \u0641\u064a \u0627\u0644\u0623\u0631\u0636\u060c \u0644\u064a\u0646 \u062a\u0646\u062a\u0642\u0644 \u0644\u0635\u0648\u0631 \u062d\u0644\u0645\u064a\u0629 \u0648\u0641\u0648\u0642 \u0637\u0628\u064a\u0639\u064a\u0629\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0643\u0633 \u0639\u0628\u0648\u0631 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0645\u0646 \u0627\u0644\u062d\u064a\u0627\u0629 \u0644\u0648\u0631\u0627 \u0627\u0644\u0645\u0648\u062a.\n\n' +
    '\u0627\u0644\u0632\u0645\u0646 (Tense): \u0627\u0644\u0632\u0645\u0646 \u0627\u0644\u062d\u0627\u0636\u0631 \u0637\u0648\u0644 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u064a\u062e\u0644\u0642 \u0625\u062d\u0633\u0627\u0633 \u0628\u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629\u060c \u0648\u064a\u062f\u0645\u062c \u0627\u0644\u0645\u0627\u0636\u064a \u0645\u0639 \u0627\u0644\u062d\u0627\u0636\u0631\u060c \u0639\u0634\u0627\u0646 \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0648\u0627\u0644\u062f\u064a\u0646 \u0627\u0644\u0645\u062a\u0648\u0641\u0651\u064a\u064a\u0646 \u064a\u0628\u0627\u0646\u0648\u0646 \u0623\u062d\u064a\u0627\u0621 \u0648\u062d\u0627\u0636\u0631\u064a\u0646 \u0641\u064a \u0647\u0627\u0644\u0644\u062d\u0638\u0629.\n\n' +
    '\u0627\u0644\u0642\u0627\u0641\u064a\u0629 (Rhyme): \u0645\u0627 \u0641\u064a\u0647 \u0646\u0638\u0627\u0645 \u0642\u0627\u0641\u064a\u0629 \u0645\u0646\u062a\u0638\u0645\u060c \u0628\u0633 \u0623\u0635\u062f\u0627\u0621 \u062e\u0641\u064a\u0641\u0629 \u0648half-rhymes \u062a\u062e\u0644\u0642 \u0645\u0648\u0633\u064a\u0642\u0649 \u0644\u0637\u064a\u0641\u0629 \u0648\u0645\u064f\u0647\u062f\u0651\u0626\u0629\u060c \u062a\u062a\u062c\u0646\u0651\u0628 \u0627\u0644\u0642\u0633\u0648\u0629.\n\n' +
    '\u0637\u0648\u0644 \u0627\u0644\u0623\u0628\u064a\u0627\u062a: \u0634\u0628\u0647 \u0645\u0646\u062a\u0638\u0645\u060c \u064a\u062e\u0644\u0642 \u0625\u064a\u0642\u0627\u0639 \u0647\u0627\u062f\u0626 \u0648\u0645\u0642\u064a\u0651\u0633\u060c \u064a\u062a\u0646\u0627\u0642\u0636 \u0645\u0639 \u0627\u0644\u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a.\n\n' +
    '\u0627\u0644\u0623\u0628\u064a\u0627\u062a \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0641\u064a \u0627\u0644\u0646\u0647\u0627\u064a\u0629 \u2014 \u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u0642\u0627\u0637\u0639 \u2014 \u062a\u062e\u0644\u0642 \u062a\u0648\u0642\u0651\u0641\u0627\u062a \u0642\u0628\u0644 \u062e\u0627\u062a\u0645\u0629 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0627\u0644\u0645\u062f\u0645\u0651\u0631\u0629 \u0627\u0644\u0645\u064f\u0642\u062a\u0635\u062f\u0629 \u0641\u064a \u0627\u0644\u0643\u0644\u0627\u0645.',
  keyQuotes: [
    {
      quote: 'They are waiting for me somewhere beyond Eden Rock:',
      analysis:
        '"Beyond" places the parents past a threshold the speaker has not yet crossed. "Eden" evokes paradise and innocence, suggesting death is a return to a perfect state. "Eden Rock" is an invented threshold place — Causley confirmed: "I have no idea, I mean I made it up!"',
      themes: ['Death', 'Paradise', 'Reunion'],
      analysisAr:
        'كلمة "beyond" تحط الوالدين بعد عتبة المتكلّم لين الحين ما عبرها. وكلمة "Eden" تستدعي الفردوس والبراءة، وتلمّح إن الموت رجوع لحال كامل. واسم "Eden Rock" مكان عتبة اخترعه Causley — هو نفسه أكّد: "I have no idea, I mean I made it up!"',
      themesAr: ['الموت', 'الفردوس', 'اللقاء بعد الفراق'],
    },
    {
      quote: 'My father, twenty-five',
      analysis:
        "Specifying the father's age makes him younger than the speaker writing the poem, creating a poignant reversal where the child outlives the parent's youth.",
      themes: ['Memory', 'Time', 'Loss'],
      analysisAr:
        'تحديد عمر الأب يخلّيه أصغر من المتكلّم وقت كتابة القصيدة، وهذا يخلق انعكاس مؤثّر: الابن عاش أطول من شباب أبوه.',
      themesAr: ['الذاكرة', 'الزمن', 'الفقد'],
    },
    {
      quote: 'looks and looks',
      analysis:
        "The simple repetition conveys deep, wordless love between the parents. The present tense makes their love eternal \u2014 still happening in the speaker's vision.",
      themes: ['Love', 'Memory', 'Permanence'],
      analysisAr:
        '\u0627\u0644\u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u0628\u0633\u064a\u0637 \u064a\u0646\u0642\u0644 \u062d\u0628 \u0639\u0645\u064a\u0642 \u0648\u0635\u0627\u0645\u062a \u0628\u064a\u0646 \u0627\u0644\u0648\u0627\u0644\u062f\u064a\u0646. \u0648\u0627\u0644\u0632\u0645\u0646 \u0627\u0644\u062d\u0627\u0636\u0631 \u064a\u062e\u0644\u0651\u064a \u062d\u0628\u0651\u0647\u0645 \u0623\u0628\u062f\u064a \u2014 \u0644\u064a\u0646 \u0627\u0644\u062d\u064a\u0646 \u064a\u0635\u064a\u0631 \u0641\u064a \u0631\u0624\u064a\u0629 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645.',
      themesAr: [
        '\u0627\u0644\u062d\u0628',
        '\u0627\u0644\u0630\u0627\u0643\u0631\u0629',
        '\u0627\u0644\u062f\u0648\u0627\u0645',
      ],
    },
    {
      quote: 'The sky whitens as if lit by three suns',
      analysis:
        'The impossible, supernatural light marks the shift from memory to vision, from earthly to otherworldly. Three suns may allude to the Trinity.',
      themes: ['Supernatural', 'Death', 'Transcendence'],
      analysisAr:
        'الضوء المستحيل وفوق الطبيعي يأشّر على الانتقال من الذاكرة للرؤية، ومن الأرضي للعالم الآخر. والثلاث شموس يحتمل إنها allusion للـTrinity.',
      themesAr: ['ما فوق الطبيعي', 'الموت', 'التسامي'],
    },
    {
      quote: 'My mother shades her eyes and looks my way',
      analysis:
        "The mother's gesture of shading her eyes suggests she is looking across a great distance or a blinding light \u2014 the boundary between life and death.",
      themes: ['Motherhood', 'Death', 'Boundary'],
      analysisAr:
        '\u062d\u0631\u0643\u0629 \u0627\u0644\u0623\u0645 \u0648\u0647\u064a \u062a\u0638\u0644\u0651\u0644 \u0639\u064a\u0648\u0646\u0647\u0627 \u062a\u0648\u062d\u064a \u0625\u0646\u0647\u0627 \u062a\u062a\u0637\u0644\u0651\u0639 \u0639\u0628\u0631 \u0645\u0633\u0627\u0641\u0629 \u0628\u0639\u064a\u062f\u0629 \u0623\u0648 \u0636\u0648\u0621 \u064a\u0639\u0645\u064a \u2014 \u0627\u0644\u062d\u062f\u0651 \u0628\u064a\u0646 \u0627\u0644\u062d\u064a\u0627\u0629 \u0648\u0627\u0644\u0645\u0648\u062a.',
      themesAr: [
        '\u0627\u0644\u0623\u0645\u0648\u0645\u0629',
        '\u0627\u0644\u0645\u0648\u062a',
        '\u0627\u0644\u062d\u062f\u0651 \u0627\u0644\u0641\u0627\u0635\u0644',
      ],
    },
    {
      quote: 'Over the drifted stream',
      analysis:
        'The stream is a traditional symbol of the boundary between life and death (the River Styx). "Drifted" suggests it has shifted, perhaps become easier to cross.',
      themes: ['Death', 'Crossing', 'Symbolism'],
      analysisAr:
        'الساقية رمز تقليدي للحدّ بين الحياة والموت (نهر Styx في الأسطورة اليونانية). وكلمة "drifted" توحي إنها انزاحت، يحتمل إنها صارت أسهل في العبور.',
      themesAr: ['الموت', 'العبور', 'الرمزية'],
    },
    {
      quote: 'Crossing is / Not as hard as you might think',
      analysis:
        'Enjambment isolates "Crossing is" at the line end, creating suspense. The reassuring tone transforms death from terror into gentle acceptance.',
      themes: ['Death', 'Acceptance', 'Comfort'],
      analysisAr:
        'الـenjambment يعزل "Crossing is" في نهاية البيت، فيخلق تشويق. والنبرة المُطمئنة تحوّل الموت من رعب إلى قبول لطيف.',
      themesAr: ['الموت', 'القبول', 'الراحة'],
    },
    {
      quote: 'I had not thought that it would be like this',
      analysis:
        'The most devastating line. "It" is never named \u2014 death, the afterlife, reunion. The understatement makes it more powerful than any dramatic exclamation.',
      themes: ['Death', 'Acceptance', 'Wonder'],
      analysisAr:
        '\u0623\u0643\u062b\u0631 \u0628\u064a\u062a \u064a\u0647\u062f\u0651 \u0627\u0644\u0642\u0627\u0631\u0626 \u0641\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629. \u0643\u0644\u0645\u0629 "it" \u0623\u0628\u062f \u0645\u0627 \u062a\u062a\u0633\u0645\u0651\u0649 \u2014 \u0627\u0644\u0645\u0648\u062a\u060c \u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u062b\u0627\u0646\u064a\u0629\u060c \u0627\u0644\u0644\u0642\u0627\u0621. \u0648\u0627\u0644\u0640understatement (\u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f \u0641\u064a \u0627\u0644\u0643\u0644\u0627\u0645) \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0628\u064a\u062a \u0623\u0642\u0648\u0649 \u0645\u0646 \u0623\u064a \u0635\u0631\u062e\u0629 \u062f\u0631\u0627\u0645\u064a\u0629.',
      themesAr: [
        '\u0627\u0644\u0645\u0648\u062a',
        '\u0627\u0644\u0642\u0628\u0648\u0644',
        '\u0627\u0644\u062f\u0647\u0634\u0629',
      ],
    },
  ],
  languageDevices: [
    {
      device: 'Biblical allusion',
      example: 'Eden Rock',
      effect:
        'The title evokes the Garden of Eden \u2014 a lost paradise of innocence. It frames death not as an ending but as a return to a perfect, prelapsarian state.',
      lineRef: 0,
      effectAr:
        '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u0633\u062a\u062f\u0639\u064a Garden of Eden \u2014 \u0627\u0644\u0641\u0631\u062f\u0648\u0633 \u0627\u0644\u0645\u0641\u0642\u0648\u062f \u0627\u0644\u0644\u064a \u064a\u0631\u0645\u0632 \u0644\u0644\u0628\u0631\u0627\u0621\u0629. \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0635\u0648\u0651\u0631 \u0627\u0644\u0645\u0648\u062a \u0645\u0648 \u0639\u0644\u0649 \u0625\u0646\u0647 \u0646\u0647\u0627\u064a\u0629\u060c \u0628\u0644 \u0639\u0644\u0649 \u0625\u0646\u0647 \u0631\u062c\u0648\u0639 \u0644\u062d\u0627\u0644 \u0643\u0627\u0645\u0644 \u0642\u0628\u0644 \u0627\u0644\u0633\u0642\u0648\u0637 (prelapsarian).',
    },
    {
      device: 'Present tense narration',
      example: 'They are waiting / My father... in the same suit',
      effect:
        'Using present tense for a memory (or vision) collapses time, making the dead parents seem alive and present. It creates dreamlike immediacy.',
      lineRef: 0,
      effectAr:
        'استخدام الزمن الحاضر لذكرى (أو رؤية) يدمج الأزمنة مع بعض، ويخلّي الوالدين المتوفّيين يبانون أحياء وحاضرين. هذا يخلق إحساس مباشر يشبه الحلم.',
    },
    {
      device: 'Precise visual detail',
      example: 'twenty-five, in the same suit',
      effect:
        'The photographic specificity of ages, colours, and clothing creates hyper-real clarity, suggesting this is more than ordinary memory \u2014 perhaps a vision.',
      lineRef: 1,
      effectAr:
        '\u0627\u0644\u062f\u0642\u0651\u0629 \u0627\u0644\u0641\u0648\u062a\u0648\u063a\u0631\u0627\u0641\u064a\u0629 \u0641\u064a \u0627\u0644\u0623\u0639\u0645\u0627\u0631 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u0645\u0644\u0627\u0628\u0633 \u062a\u062e\u0644\u0642 \u0648\u0636\u0648\u062d \u062d\u0642\u064a\u0642\u064a \u0628\u0634\u0643\u0644 \u0645\u0641\u0631\u0637\u060c \u0648\u064a\u0644\u0645\u0651\u062d \u0625\u0646 \u0647\u0630\u064a \u0645\u0648 \u0630\u0627\u0643\u0631\u0629 \u0639\u0627\u062f\u064a\u0629 \u2014 \u064a\u062d\u062a\u0645\u0644 \u062a\u0643\u0648\u0646 \u0631\u0624\u064a\u0629.',
    },
    {
      device: 'Supernatural imagery',
      example: 'The sky whitens as if lit by three suns',
      effect:
        'The impossible light signals a shift from the natural to the transcendent. The scene is no longer a memory but a threshold experience.',
      lineRef: 16,
      effectAr:
        'الضوء المستحيل يأشّر على انتقال من الطبيعي إلى المتسامي. المشهد ما عاد ذاكرة، بل تجربة عند العتبة بين عالمين.',
    },
    {
      device: 'Symbolism',
      example: 'the drifted stream',
      effect:
        'The stream separating the speaker from his parents echoes the mythological River Styx \u2014 the boundary between the living and the dead.',
      lineRef: 18,
      effectAr:
        '\u0627\u0644\u0633\u0627\u0642\u064a\u0629 \u0627\u0644\u0644\u064a \u062a\u0641\u0635\u0644 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0639\u0646 \u0648\u0627\u0644\u062f\u064a\u0647 \u062a\u0635\u062f\u0651\u0649 \u0644\u0646\u0647\u0631 Styx \u0641\u064a \u0627\u0644\u0645\u064a\u062b\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u064a\u0648\u0646\u0627\u0646\u064a\u0629 \u2014 \u0627\u0644\u062d\u062f\u0651 \u0627\u0644\u0641\u0627\u0635\u0644 \u0628\u064a\u0646 \u0627\u0644\u0623\u062d\u064a\u0627\u0621 \u0648\u0627\u0644\u0623\u0645\u0648\u0627\u062a.',
    },
    {
      device: 'Understatement',
      example: 'I had not thought that it would be like this',
      effect:
        'The restrained, conversational tone at the poem\'s climax is more emotionally devastating than dramatic language would be. The unnamed "it" resonates with mystery.',
      lineRef: 23,
      effectAr:
        'النبرة المنضبطة والحوارية في ذروة القصيدة تهدّ القارئ عاطفياً أكثر مما تهده اللغة الدرامية. وكلمة "it" اللي ما تتسمّى تتردّد بصدى من الغموض.',
    },
    {
      device: 'Enjambment',
      example: 'Crossing is / Not as hard as you might think',
      effect:
        'The line break isolates "Crossing is" and forces a pause before the reassurance, enacting the hesitation before the final step across the threshold.',
      lineRef: 19,
      effectAr:
        'كسر السطر يعزل "Crossing is" ويفرض توقّف قبل عبارة الطمأنينة، فيمثّل التردّد قبل الخطوة الأخيرة عبر العتبة.',
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
      'Causley describes his parents at a picnic by a stream, waiting for him. The stream represents the boundary between life and death — his parents beckon him to cross over to join them.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'er-2',
    question: 'What does the stream represent?',
    type: 'multiple-choice',
    options: [
      'A swimming pool',
      'The boundary between life and death — crossing it means joining his dead parents',
      'A river in Cornwall',
      'Tears of sadness',
    ],
    correctIndex: 1,
    explanation:
      'The stream is a powerful symbol of the divide between the living and the dead. The parents are on the other side, beckoning the speaker to "cross" — a metaphor for death.',
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
      'The precise details — the "H.P. Sauce bottle", the mother\'s dress, the father\'s tweed suit — make the memory intensely vivid. The scene feels more real than a dream, suggesting it may be a vision of the afterlife.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'er-4',
    question: 'What does the final line "I had not thought that it would be like this" suggest?',
    type: 'multiple-choice',
    options: [
      'Disappointment',
      'Death (or the approach of death) is gentler and more natural than expected — a calm acceptance',
      'Surprise at a holiday destination',
      'Confusion about the picnic',
    ],
    correctIndex: 1,
    explanation:
      'The final line is deliberately ambiguous but suggests the speaker is approaching death. It is not frightening but peaceful — "like this" implies something gentle, natural, and welcoming.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'er-5',
    question: 'Who was Charles Causley?',
    type: 'multiple-choice',
    options: [
      'A war poet from WWI',
      'A Cornish poet whose father died when he was young — this poem reflects on that loss and the hope of reunion',
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
      'Four quatrains followed by a single final line — the isolation of the last line is significant',
      'Free verse',
      'Rhyming couplets',
    ],
    correctIndex: 1,
    explanation:
      'Four quatrains followed by a standalone final line. The isolated last line stands apart, like the speaker standing alone on one side of the stream, about to cross.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'er-7',
    question: 'What does "They are waiting for me somewhere beyond Eden Rock" suggest?',
    type: 'multiple-choice',
    options: [
      'They are hiding',
      'The parents exist in a place beyond earthly experience — possibly heaven or the afterlife',
      'They are lost',
      'Eden Rock is a real place only',
    ],
    correctIndex: 1,
    explanation:
      '"Beyond Eden Rock" suggests a place beyond the physical world. "Eden" echoes the Garden of Eden — a paradise. The parents wait in a realm beyond ordinary reality.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'er-8',
    question: 'How does the poem present death?',
    type: 'multiple-choice',
    options: [
      'As terrifying and violent',
      'As a gentle, natural crossing — a reunion with loved ones rather than an ending',
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
      'Present tense makes the memory feel immediately alive — as if the vision is happening now, not in the past',
      'It makes the poem confusing',
      'It shows the speaker is forgetful',
    ],
    correctIndex: 1,
    explanation:
      'Using present tense for a memory/vision makes it feel vivid and current. The parents are not remembered — they are present, waiting now. This blurs the line between memory and vision.',
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
      'Death as reunion — crossing the stream to join loved ones',
      'Memory as vision — the scene is too vivid to be mere memory',
      'The enduring parent-child bond — love persists beyond death',
      'Acceptance — "I had not thought that it would be like this"',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Causley uses precise sensory detail, light imagery, water symbolism, and a calm, nostalgic tone to present death as gentle and natural.',
    keyPoints: [
      'Stream as boundary between life and death',
      'Precise details (H.P. Sauce, dress colour) make the vision vivid',
      '"Beyond Eden Rock" — paradise beyond the physical world',
      'Light and whiteness — the scene is illuminated, heavenly',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four quatrains followed by a standalone final line — the isolated last line enacts the moment of crossing or decision.',
    keyPoints: [
      'Isolated final line — stands alone like the speaker at the boundary',
      'Present tense — the vision is happening now, not in the past',
      'No regular rhyme — natural, conversational tone',
      'Progression toward the stream — the poem moves toward crossing',
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
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Eden Rock by Charles Causley — Analysis & Annotations"
        description="Line-by-line analysis of Eden Rock with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'Eden Rock',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/eden-rock',
          },
        ]}
      />
      {/* ── Back navigation ──────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Love and Relationships
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

      {/* Fair-dealing extract notice — Eden Rock is in copyright (David Higham Associates).
          Only the verified opening line, the verified final line, and a few short
          representative phrases are reproduced; bracketed prose summarises the rest. */}
      <aside
        role="note"
        aria-label="Copyright and fair-dealing notice"
        className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-[12px] leading-relaxed text-amber-900 dark:text-amber-200"
      >
        <p>
          <strong>Note on the poem text below:</strong> The full poem body is reproduced under
          fair-dealing extracts only. Students should refer to Causley&rsquo;s{' '}
          <em>Collected Poems 1951&ndash;1997</em> (Macmillan) or the{' '}
          <a
            href="https://poetryarchive.org/poet/charles-causley/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-100"
          >
            Poetry Archive
          </a>{' '}
          for the full text. Bracketed prose paraphrases passages omitted for copyright; quoted
          material is restricted to the verified opening line, verified final line, and short
          representative phrases used for analytical purposes under CDPA 1988 s.30.
        </p>
      </aside>

      <InteractivePoemViewer poem={edenRockPoem} />

      {/* ── Compare with ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Compare with</h2>
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
          Quotations from <em>Eden Rock</em> are short estate-licensed extracts. &copy; David Higham
          Associates on behalf of the Causley estate.
        </p>
        <p>
          Poem text is reproduced for the purpose of private study and educational criticism under
          UK fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30). No commercial
          use is intended. All quotations remain the intellectual property of the respective rights
          holders.
        </p>
      </footer>
    </div>
  )
}
