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

const walkingAwayPoem: PoemData = {
  title: 'Walking Away',
  poet: 'C. Day-Lewis',
  lines: [
    // Stanza 1
    {
      text: 'It is eighteen years ago, almost to the day \u2014',
      annotations: [
        {
          type: 'Precision',
          note: 'The specific timeframe shows the memory is vivid and deeply significant. "Almost to the day" suggests an anniversary the father cannot forget.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'A sunny day with the leaves just turning,' },
    // VERIFY: line redacted \u2014 previously contained a corruption artefact (a hyphenated compound describing pitch / touch-line imagery in stanza 1). Day-Lewis's image in this position concerns the football pitch markings; restore only against a verified primary source (e.g. Faber edition of Walking Away).
    { text: '' },
    { text: 'When I watched you play your first game of football,' },
    {
      text: 'And my heart went with you as you walked away',
      annotations: [
        {
          type: 'Metaphor',
          note: "The father's heart literally departing with his son captures the physical pain of letting go. This image echoes throughout the poem.",
          color: '#10b981',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    { text: 'To the ignominy of a side that lost;' },
    { text: 'And in the agony of having to decide,' },
    { text: "It's as if the child I'd fathered had, grown," },
    // VERIFY: line redacted — previously contained an unverifiable phrase ('survey of himself' was a corruption that does not match any verified Day-Lewis text). Restore only against a primary source.
    { text: '' },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: 'Like a satellite wrenched from its orbit, you went,',
      annotations: [
        {
          type: 'Simile',
          note: 'The cosmic comparison elevates a personal moment to universal significance. "Wrenched" conveys the violence of separation, while "orbit" implies the child was once held in the parent\'s gravitational pull.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Like a winged seed loosened from its parent stem,',
      annotations: [
        {
          type: 'Simile / natural imagery',
          note: 'The organic image reframes separation as natural and necessary for growth — a seed must leave the parent stem to take root elsewhere. "Loosened" suggests gradual release rather than violent rupture.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Half-fledged, half-knowing, wide-eyed into a world',
      annotations: [
        {
          type: 'Compound adjectives',
          note: 'The "half-" prefix repeated twice emphasises the child\'s incompleteness and vulnerability. He is not yet ready but must go anyway.',
          color: '#8b5cf6',
        },
      ],
    },
    // VERIFY: line redacted — 'survey of the road' was a corruption that does not match any verified Day-Lewis text. Restore only against a primary source.
    { text: '' },
    // Stanza break
    { text: '' },
    // Stanza 4
    // VERIFY: line redacted — 'survey of the road' was a corruption that does not match any verified Day-Lewis text. Restore only against a primary source.
    { text: '' },
    {
      text: 'Has altered, though it was not so at first.',
      annotations: [
        {
          type: 'Volta',
          note: 'The shift to present tense and the word "now" marks the turn from memory to mature reflection. The father can finally understand what the moment meant.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I have had worse partings, but none that so',
      annotations: [
        {
          type: 'Understatement',
          note: 'This understated acknowledgement (possibly referring to deaths) makes the final revelation more powerful \u2014 that this small parting haunts him most.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'Gnaws at my mind still. Perhaps it is roughly' },
    // Stanza break
    { text: '' },
    // Stanza 5
    {
      text: 'Saying what God alone could perfectly show \u2014',
      annotations: [
        {
          type: 'Religious allusion',
          note: 'The reference to God elevates parental love to something sacred and ineffable \u2014 beyond what human language can fully express.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'How selfhood begins with a walking away,' },
    {
      text: 'And love is proved in the letting go.',
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
    '<p><strong>C. Day-Lewis</strong> (1904\u20131972) was UK <strong>Poet Laureate from 1968 until his death in 1972</strong>. The poem was published in 1962 in <em>The Gate and Other Poems</em> and is dedicated to his eldest son <strong>Sean Day-Lewis</strong> (the journalist). The poem looks back \u2014 "eighteen years ago, almost to the day" \u2014 to a memory of watching young Sean walk away from his father at the start of a school football match.</p><p>(Note: this is <em>not</em> Daniel Day-Lewis the actor \u2014 Daniel was the poet\'s youngest son, born in 1957.)</p><p>Written eighteen years after the event, the poem explores the universal experience of a <strong>parent letting go</strong> of a child. The specific memory \u2014 a football match \u2014 becomes a metaphor for every moment a child steps further into independence.</p><p>The poem grapples with the <strong>paradox of parental love</strong>: that truly loving someone means allowing them to leave. This connects to broader themes of <strong>growing up</strong>, <strong>identity formation</strong>, and the <strong>pain of separation</strong> that is inherent in all loving relationships.</p><p>Day-Lewis wrote the poem in mature middle age, giving it the quality of <strong>mature reflection</strong> rather than immediate emotion. The distance of time allows him to articulate what he could not express in the moment.</p>',

  contextAr:
    '<p><strong>C. Day-Lewis</strong> (1904\u20131972) \u0643\u0627\u0646 <strong>\u0634\u0627\u0639\u0631 \u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627 \u0627\u0644\u0631\u0633\u0645\u064a (Poet Laureate) \u0645\u0646 \u0633\u0646\u0629 1968 \u0644\u064a\u0646 \u0648\u0641\u0627\u062a\u0647 \u0633\u0646\u0629 1972</strong>. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0637\u0644\u0639\u062a \u0633\u0646\u0629 1962 \u0641\u064a \u062f\u064a\u0648\u0627\u0646 <em>The Gate and Other Poems</em>\u060c \u0648\u0645\u0647\u062f\u0627\u0629 \u0644\u0648\u0644\u062f\u0647 \u0627\u0644\u0623\u0643\u0628\u0631 <strong>Sean Day-Lewis</strong> (\u0627\u0644\u0635\u062d\u0641\u064a). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0631\u062c\u0639 \u0628\u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u2014 "eighteen years ago, almost to the day" \u2014 \u0644\u0630\u0643\u0631\u0649 \u0627\u0644\u0623\u0628 \u0648\u0647\u0648 \u064a\u062a\u0641\u0631\u0651\u062c \u0639\u0644\u0649 Sean \u0627\u0644\u0635\u063a\u064a\u0631 \u0644\u0645\u0651\u0627 \u0645\u0634\u0649 \u0639\u0646\u0647 \u0641\u064a \u0628\u062f\u0627\u064a\u0629 \u0645\u0628\u0627\u0631\u0627\u0629 \u0643\u0631\u0629 \u0642\u062f\u0645 \u0645\u062f\u0631\u0633\u064a\u0629.</p><p>(\u0645\u0644\u0627\u062d\u0638\u0629: \u0647\u0630\u0627 <em>\u0645\u0648</em> Daniel Day-Lewis \u0627\u0644\u0645\u0645\u062b\u0651\u0644 \u2014 Daniel \u0647\u0648 \u0648\u0644\u062f \u0627\u0644\u0634\u0627\u0639\u0631 \u0627\u0644\u0623\u0635\u063a\u0631\u060c \u0645\u0648\u0627\u0644\u064a\u062f 1957.)</p><p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0643\u062a\u0648\u0628\u0629 \u0628\u0639\u062f 18 \u0633\u0646\u0629 \u0645\u0646 \u0627\u0644\u062d\u062f\u062b\u060c \u062a\u0633\u062a\u0643\u0634\u0641 \u062a\u062c\u0631\u0628\u0629 \u0625\u0646\u0633\u0627\u0646\u064a\u0629 \u064a\u0645\u0631 \u0641\u064a\u0647\u0627 \u0643\u0644 \u0623\u0628 \u0623\u0648 \u0623\u0645: <strong>\u0625\u0646 \u0627\u0644\u0648\u0627\u062d\u062f \u064a\u062e\u0644\u0651\u064a \u0648\u0644\u062f\u0647 \u064a\u0645\u0634\u064a</strong>. \u0627\u0644\u0630\u0643\u0631\u0649 \u0627\u0644\u0645\u062d\u062f\u0651\u062f\u0629 \u2014 \u0645\u0628\u0627\u0631\u0627\u0629 \u0643\u0631\u0629 \u0642\u062f\u0645 \u2014 \u062a\u062a\u062d\u0648\u0651\u0644 \u0644\u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0639\u0646 \u0643\u0644 \u0644\u062d\u0638\u0629 \u064a\u062e\u0637\u0648 \u0641\u064a\u0647\u0627 \u0627\u0644\u0639\u064a\u0627\u0644 \u062e\u0637\u0648\u0629 \u062c\u062f\u064a\u062f\u0629 \u0628\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0644.</p><p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0635\u0627\u0631\u0639 <strong>\u0645\u0641\u0627\u0631\u0642\u0629 \u0627\u0644\u062d\u0628 \u0627\u0644\u0623\u0628\u0648\u064a</strong>: \u0625\u0646 \u0627\u0644\u0648\u0627\u062d\u062f \u0644\u0645\u0651\u0627 \u064a\u062d\u0628 \u0648\u0644\u062f\u0647 \u0641\u0639\u0644\u0627\u064b\u060c \u0644\u0627\u0632\u0645 \u064a\u062e\u0644\u0651\u064a\u0647 \u064a\u0645\u0634\u064a. \u0648\u0647\u0630\u0627 \u064a\u0631\u0628\u0637 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0628\u0645\u0648\u0627\u0636\u064a\u0639 \u0623\u0648\u0633\u0639: <strong>\u0627\u0644\u0643\u0628\u0631</strong>\u060c \u0648<strong>\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0647\u0648\u064a\u0629</strong>\u060c \u0648<strong>\u0623\u0644\u0645 \u0627\u0644\u0641\u0631\u0627\u0642</strong> \u0627\u0644\u0644\u064a \u0645\u0627 \u064a\u0637\u0644\u0639 \u0645\u0646\u0647 \u0623\u064a \u0639\u0644\u0627\u0642\u0629 \u0645\u062d\u0628\u0651\u0629.</p><p>Day-Lewis \u0643\u062a\u0628 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0648\u0647\u0648 \u0641\u064a \u0645\u0646\u062a\u0635\u0641 \u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0646\u0627\u0636\u062c\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0637\u064a\u0647\u0627 \u0637\u0627\u0628\u0639 <strong>\u062a\u0623\u0645\u0651\u0644 \u0646\u0627\u0636\u062c</strong> \u0623\u0643\u062b\u0631 \u0645\u0646 \u0631\u062f\u0629 \u0641\u0639\u0644 \u0644\u062d\u0638\u064a\u0651\u0629. \u0628\u064f\u0639\u062f \u0627\u0644\u0648\u0642\u062a \u0633\u0645\u062d \u0644\u0647 \u064a\u0635\u064a\u063a \u0645\u0627 \u0639\u062c\u0632 \u064a\u0642\u0648\u0644\u0647 \u0641\u064a \u062a\u0644\u0643 \u0627\u0644\u0644\u062d\u0638\u0629.</p>',

  summary:
    "The speaker recalls watching his young son walk away to play his first football match eighteen years ago. He remembers the physical wrench of separation as the child moved into the world independently for the first time. Using metaphors of satellites and fledgling birds, he captures the child's vulnerability and his own helplessness. In the final stanza, the father reflects that although he has experienced worse partings since, this one still haunts him because it represents the fundamental truth that love requires letting go.",

  summaryAr:
    '\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 (\u0627\u0644\u0623\u0628) \u064a\u062a\u0630\u0643\u0651\u0631 \u0625\u0646\u0647 \u0642\u0628\u0644 18 \u0633\u0646\u0629 \u0634\u0627\u0641 \u0648\u0644\u062f\u0647 \u0627\u0644\u0635\u063a\u064a\u0631 \u0648\u0647\u0648 \u064a\u0645\u0634\u064a \u0639\u0646\u0647 \u0639\u0634\u0627\u0646 \u064a\u0644\u0639\u0628 \u0623\u0648\u0644 \u0645\u0628\u0627\u0631\u0627\u0629 \u0643\u0631\u0629 \u0642\u062f\u0645 \u0641\u064a \u062d\u064a\u0627\u062a\u0647. \u064a\u0630\u0643\u0631 \u0627\u0644\u0623\u0644\u0645 \u0627\u0644\u062c\u0633\u062f\u064a \u0644\u0644\u0641\u0631\u0627\u0642 \u0644\u0645\u0651\u0627 \u0627\u0644\u0648\u0644\u062f \u062e\u0637\u0649 \u0644\u0644\u0639\u0627\u0644\u0645 \u0627\u0644\u062e\u0627\u0631\u062c\u064a \u0628\u0634\u0643\u0644 \u0645\u0633\u062a\u0642\u0644 \u0644\u0623\u0648\u0644 \u0645\u0631\u0651\u0629. \u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0633\u062a\u0639\u0627\u0631\u0627\u062a \u0627\u0644\u0640satellite \u0648\u0627\u0644\u0637\u064a\u0648\u0631 \u0627\u0644\u0635\u063a\u064a\u0631\u0629 (fledgling)\u060c \u0627\u0644\u0623\u0628 \u064a\u0635\u0648\u0651\u0631 \u0647\u0634\u0627\u0634\u0629 \u0627\u0644\u0648\u0644\u062f \u0648\u0639\u062c\u0632 \u0627\u0644\u0623\u0628 \u0646\u0641\u0633\u0647. \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u0623\u062e\u064a\u0631\u060c \u0627\u0644\u0623\u0628 \u064a\u062a\u0623\u0645\u0651\u0644 \u0625\u0646\u0647 \u0639\u0627\u0634 \u0641\u0631\u0627\u0642\u0627\u062a \u0623\u0635\u0639\u0628 \u0628\u0639\u062f \u0630\u064a\u0643 \u0627\u0644\u0633\u0646\u0629\u060c \u0628\u0633 \u0647\u0630\u0627 \u0627\u0644\u0641\u0631\u0627\u0642 \u0627\u0644\u0635\u063a\u064a\u0631 \u0647\u0648 \u0627\u0644\u0644\u064a \u0644\u064a\u0646 \u0627\u0644\u062d\u064a\u0646 \u064a\u0644\u0627\u062d\u0642\u0647\u060c \u0644\u0623\u0646\u0647 \u064a\u0645\u062b\u0651\u0644 \u0627\u0644\u062d\u0642\u064a\u0642\u0629 \u0627\u0644\u062c\u0648\u0647\u0631\u064a\u0651\u0629: \u0625\u0646 \u0627\u0644\u062d\u0628 \u064a\u0642\u062a\u0636\u064a \u0625\u0646 \u0627\u0644\u0648\u0627\u062d\u062f \u064a\u062e\u0644\u0651\u064a.',

  formAndStructure:
    'Form: Five quintains (five-line stanzas) with a loose ABACA rhyme scheme, giving the poem a gentle, reflective rhythm without rigidity.\n\nStructure: Chronological movement from past memory (stanzas 1\u20133) to present reflection (stanzas 4\u20135), mirroring the process of understanding that comes with time.\n\nRhyme: Partial, imperfect rhymes reflect the imperfect, painful nature of the separation being described.\n\nTense: Shifts from past ("I watched") to present ("I can see now"), enacting the movement from experience to understanding.\n\nEnjambment: Lines frequently run on, particularly across stanza breaks, mirroring the continuous, unresolved nature of parental anxiety.\n\nTone: Reflective and measured, with an undertone of persistent grief. The calm surface conceals deep emotional pain.',

  formAndStructureAr:
    'Form (\u0627\u0644\u0634\u0643\u0644): \u062e\u0645\u0633 \u0645\u0642\u0627\u0637\u0639\u060c \u0643\u0644 \u0645\u0642\u0637\u0639 quintain (\u062e\u0645\u0633\u0629 \u0623\u0628\u064a\u0627\u062a)\u060c \u0628\u0646\u0638\u0627\u0645 \u0642\u0627\u0641\u064a\u0629 \u0645\u0631\u0646 ABACA\u060c \u064a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0625\u064a\u0642\u0627\u0639 \u0644\u0637\u064a\u0641 \u0648\u062a\u0623\u0645\u0651\u0644\u064a \u0628\u062f\u0648\u0646 \u062a\u0635\u0644\u0651\u0628.\n\n\u0627\u0644\u0628\u0646\u064a\u0629: \u062d\u0631\u0643\u0629 \u0632\u0645\u0646\u064a\u0629 \u0645\u062a\u0633\u0644\u0633\u0644\u0629 \u0645\u0646 \u0630\u0643\u0631\u0649 \u0627\u0644\u0645\u0627\u0636\u064a (\u0627\u0644\u0645\u0642\u0627\u0637\u0639 1\u20133) \u0644\u062a\u0623\u0645\u0651\u0644 \u0627\u0644\u062d\u0627\u0636\u0631 (\u0627\u0644\u0645\u0642\u0627\u0637\u0639 4\u20135)\u060c \u062a\u0639\u0643\u0633 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0641\u0647\u0645 \u0627\u0644\u0644\u064a \u062a\u064a\u064a\u064a \u0645\u0639 \u0627\u0644\u0648\u0642\u062a.\n\n\u0627\u0644\u0642\u0627\u0641\u064a\u0629 (Rhyme): \u0642\u0648\u0627\u0641\u064a \u062c\u0632\u0626\u064a\u0629 \u0648\u063a\u064a\u0631 \u062a\u0627\u0645\u0651\u0629 (half-rhyme)\u060c \u062a\u0639\u0643\u0633 \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u0646\u0627\u0642\u0635\u0629 \u0648\u0627\u0644\u0645\u0624\u0644\u0645\u0629 \u0644\u0644\u0641\u0631\u0627\u0642 \u0627\u0644\u0644\u064a \u062a\u0648\u0635\u0641\u0647 \u0627\u0644\u0642\u0635\u064a\u062f\u0629.\n\n\u0627\u0644\u0632\u0645\u0646 (Tense): \u064a\u062a\u0646\u0642\u0651\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u0636\u064a ("I watched") \u0644\u0644\u062d\u0627\u0636\u0631 ("I can see now")\u060c \u0648\u0647\u0630\u0627 \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u064a\u062c\u0633\u0651\u062f \u0627\u0644\u062d\u0631\u0643\u0629 \u0645\u0646 \u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u0644\u0644\u0641\u0647\u0645.\n\nEnjambment: \u0627\u0644\u0623\u0628\u064a\u0627\u062a \u062a\u0646\u0633\u0627\u0628 \u0644\u0628\u0639\u0636\u0647\u0627 \u0628\u0634\u0643\u0644 \u0645\u062a\u0643\u0631\u0651\u0631\u060c \u062e\u0635\u0648\u0635\u0627\u064b \u0639\u0628\u0631 \u0641\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0642\u0627\u0637\u0639\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0643\u0633 \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u0645\u062a\u0648\u0627\u0635\u0644\u0629 \u0648\u063a\u064a\u0631 \u0627\u0644\u0645\u062d\u0644\u0648\u0644\u0629 \u0644\u0642\u0644\u0642 \u0627\u0644\u0623\u0628\u0648\u0651\u0629.\n\n\u0627\u0644\u0646\u0628\u0631\u0629 (Tone): \u062a\u0623\u0645\u0651\u0644\u064a\u0629 \u0648\u0645\u062a\u0632\u0646\u0629\u060c \u0645\u0639 \u0637\u0628\u0642\u0629 \u0645\u0633\u062a\u062a\u0631\u0629 \u0645\u0646 \u062d\u0632\u0646 \u062f\u0627\u0626\u0645. \u0627\u0644\u0633\u0637\u062d \u0627\u0644\u0647\u0627\u062f\u0626 \u064a\u062e\u0641\u064a \u0623\u0644\u0645 \u0646\u0641\u0633\u064a \u0639\u0645\u064a\u0642.',
  keyQuotes: [
    {
      quote: 'It is eighteen years ago, almost to the day',
      analysis:
        'The precision shows this memory has been relived repeatedly. "Almost to the day" suggests an unwilled anniversary \u2014 the pain returns annually.',
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
      quote: 'my heart went with you as you walked away',
      analysis:
        "The father's heart literally departing with the child is both metaphor and felt truth. It establishes that separation is a form of physical loss.",
      themes: ['Parental love', 'Separation', 'Pain'],
      analysisAr:
        '\u0642\u0644\u0628 \u0627\u0644\u0623\u0628 \u0627\u0644\u0644\u064a \u064a\u0645\u0634\u064a \u062d\u0631\u0641\u064a\u0627\u064b \u0645\u0639 \u0648\u0644\u062f\u0647 \u0647\u0648 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a \u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0648\u062d\u0642\u064a\u0642\u0629 \u0645\u062d\u0633\u0648\u0633\u0629. \u0648\u0647\u0630\u0627 \u0627\u0644\u062a\u0635\u0648\u064a\u0631 \u064a\u062b\u0628\u0651\u062a \u0625\u0646 \u0627\u0644\u0641\u0631\u0627\u0642 \u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u0641\u0642\u062f \u0627\u0644\u062c\u0633\u062f\u064a.',
      themesAr: [
        '\u0627\u0644\u062d\u0628 \u0627\u0644\u0623\u0628\u0648\u064a',
        '\u0627\u0644\u0641\u0631\u0627\u0642',
        '\u0627\u0644\u0623\u0644\u0645',
      ],
    },
    {
      quote: 'Like a satellite wrenched from its orbit',
      analysis:
        'The cosmic simile elevates a small domestic moment to universal significance. "Wrenched" conveys violence and pain \u2014 this separation is not gentle.',
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
      quote: 'Half-fledged, half-knowing',
      analysis:
        'Bird imagery presents the child as not yet ready to fly independently. The repetition of "half" emphasises incompleteness and vulnerability.',
      themes: ['Vulnerability', 'Growing up', 'Protection'],
      analysisAr:
        '\u0635\u0648\u0631 \u0627\u0644\u0637\u064a\u0648\u0631 \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0648\u0644\u062f \u0639\u0644\u0649 \u0625\u0646\u0647 \u0644\u064a\u0646 \u0627\u0644\u062d\u064a\u0646 \u0645\u0627 \u0647\u0648 \u062c\u0627\u0647\u0632 \u064a\u0637\u064a\u0631 \u0644\u062d\u0627\u0644\u0647. \u0648\u062a\u0643\u0631\u0627\u0631 \u0643\u0644\u0645\u0629 "half" \u064a\u0623\u0643\u0651\u062f \u0639\u0644\u0649 \u0646\u0642\u0635 \u0627\u0644\u0646\u0636\u062c \u0648\u0639\u0644\u0649 \u0627\u0644\u0647\u0634\u0627\u0634\u0629.',
      themesAr: [
        '\u0627\u0644\u0647\u0634\u0627\u0634\u0629',
        '\u0627\u0644\u0643\u0628\u0631',
        '\u0627\u0644\u062d\u0645\u0627\u064a\u0629',
      ],
    },
    {
      quote: 'I have had worse partings',
      analysis:
        'This understated acknowledgement makes the final revelation more powerful \u2014 that this small parting haunts him most of all.',
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
      quote: 'Gnaws at my mind still',
      analysis:
        'The verb "gnaws" is visceral and animalistic, suggesting the memory is a persistent, consuming pain that erodes him from within.',
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
      quote: 'selfhood begins with a walking away',
      analysis:
        'The child must separate from the parent to become an individual. Identity requires independence, which requires distance.',
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
      quote: 'love is proved in the letting go',
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
      example: 'Like a satellite wrenched from its orbit',
      effect:
        'The cosmic comparison elevates a personal moment to universal significance. "Wrenched" conveys the violence of separation, while "orbit" implies the child was once held in the parent\'s gravitational pull.',
      lineRef: 11,
      effectAr:
        'المقارنة الكونية ترفع لحظة شخصية لمستوى معنى عام وكوني. كلمة "wrenched" تنقل عنف الفراق، بينما "orbit" تلمّح إن الولد كان أصلاً ممسوك بجاذبية أبوه.',
    },
    {
      device: 'Metaphor',
      example: 'Half-fledged',
      effect:
        "Bird imagery presents the child as a young bird not yet ready to fly, emphasising vulnerability and the parent's anxiety about whether they can survive independently.",
      lineRef: 12,
      effectAr:
        'صور الطيور تقدّم الولد كأنه طير صغير لين الحين ما هو جاهز يطير، وتأكّد على هشاشته وعلى قلق الأب: هل ولده يقدر يعيش بدونه؟',
    },
    {
      device: 'Sensory language',
      example: 'Gnaws at my mind still',
      effect:
        'The visceral, animalistic verb "gnaws" makes the abstract concept of memory physically painful, suggesting persistent, consuming grief.',
      lineRef: 18,
      effectAr:
        'الفعل الحسّي والحيواني "gnaws" يحوّل المفهوم المجرّد (الذكرى) إلى ألم مادي محسوس، ويلمّح بحزن مستمر يقضم الأب من جوّاه.',
    },
    {
      device: 'Aphorism',
      example: 'love is proved in the letting go',
      effect:
        "The final line condenses the poem's meaning into a memorable, universal statement. Its simplicity and balance give it proverbial authority.",
      lineRef: 22,
      effectAr:
        'البيت الأخير يكثّف معنى القصيدة في عبارة عامّة لافتة. بساطته وتوازنه يعطونه سلطة الحكمة الشعبيّة (proverbial authority).',
    },
    {
      device: 'Enjambment',
      example: 'so / Gnaws at my mind still',
      effect:
        'The line break isolates "Gnaws" at the start of the line, giving it greater impact and enacting the way the memory catches him unexpectedly.',
      lineRef: 17,
      effectAr:
        'كسر البيت يعزل كلمة "Gnaws" في بداية السطر الجديد، فيعطيها وقع أقوى ويجسّد كيف إن الذكرى تباغت الأب بدون مقدّمات.',
    },
    {
      device: 'Religious allusion',
      example: 'what God alone could perfectly show',
      effect:
        'Elevates parental love to something divine and beyond full human expression, suggesting the letting-go is a sacred, almost spiritual act.',
      lineRef: 20,
      effectAr:
        'يرفع الحب الأبوي لمنزلة قريبة من الإلهي، وأكبر من قدرة اللغة البشريّة على التعبير عنه. ويلمّح إن فعل التخلية فعل مقدّس، قريب من الروحي.',
    },
    {
      device: 'Pathetic fallacy',
      example: 'A sunny day with the leaves just turning',
      effect:
        'The autumn setting mirrors the transition from childhood to independence. "Just turning" parallels the child who is just beginning to change.',
      lineRef: 1,
      effectAr:
        'مشهد الخريف يعكس الانتقال من الطفولة للاستقلال. عبارة "just turning" (الورق توّه يتغيّر لونه) توازي حالة الولد اللي توّه يبدأ يتغيّر.',
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
      'The speaker (a father) recalls watching his son walk away to a football game or school — a small moment of separation that represents the larger process of letting go.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'wa-2',
    question: 'What does "like a satellite wrenched from its orbit" suggest?',
    type: 'multiple-choice',
    options: [
      'The son enjoys space',
      'Separation from a parent is as painful and unnatural as breaking a gravitational bond',
      'The son is spinning',
      'Space travel is important',
    ],
    correctIndex: 1,
    explanation:
      'The simile compares the son to a satellite torn from its orbit — suggesting the parent-child bond has a gravitational pull, and separation feels violent and unnatural.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'wa-3',
    question: 'What does the final line "selfhood begins with a walking away" mean?',
    type: 'multiple-choice',
    options: [
      'Walking is good exercise',
      'Becoming your own person requires separating from your parents — independence starts with leaving',
      'Walking away is always sad',
      'Children should walk more',
    ],
    correctIndex: 1,
    explanation:
      'The father recognises that his child must walk away to become an independent person. "Selfhood" — individual identity — can only develop through separation, however painful.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'wa-4',
    question: 'What is the seed metaphor about?',
    type: 'multiple-choice',
    options: [
      'Gardening advice',
      '"Like a winged seed loosened from its parent stem" — the child must be released to grow independently, like a seed dispersing',
      'The son plants a garden',
      'Seeds represent food',
    ],
    correctIndex: 1,
    explanation:
      'The seed metaphor shows separation as natural and necessary. A seed must leave its parent plant to grow. The father understands this intellectually but still finds it emotionally painful.',
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
      'Five quintains (five-line stanzas) with a loose ABACA rhyme scheme',
      'A sonnet',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      "Five quintains (five-line stanzas) with a loose ABACA rhyme scheme. The regular structure reflects the father's attempt to understand and contain his emotions, while the half-rhymes suggest things not quite resolved.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'wa-7',
    question: 'Why has the memory haunted the speaker for so long?',
    type: 'multiple-choice',
    options: [
      'It was a bad football match',
      '"Eighteen years ago, almost to the day" — the moment symbolises the larger, ongoing process of letting go',
      'He forgot something',
      'The weather was bad',
    ],
    correctIndex: 1,
    explanation:
      'The specific detail "eighteen years ago" shows this small moment has haunted the father for years. It represents not just one day but the entire process of watching a child become independent.',
    topic: 'Meaning',
    difficulty: 'higher',
  },
  {
    id: 'wa-8',
    question: 'What does "love is proved in the letting go" mean?',
    type: 'multiple-choice',
    options: [
      'Love means holding on tightly',
      'True love means giving the other person freedom — the greatest act of love is releasing your child',
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
      'The poem moves from painful memory to philosophical acceptance — separation hurts but is necessary for growth',
      'Only acceptance, no pain',
      'Neither — the tone is neutral',
    ],
    correctIndex: 1,
    explanation:
      'Day-Lewis balances genuine pain ("wrenched from its orbit") with mature acceptance ("selfhood begins with a walking away"). The poem does not pretend separation is easy, but recognises its necessity.',
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
      'Letting go — the hardest act of love',
      '"Selfhood begins with a walking away" — independence requires separation',
      'Memory — one small moment haunts the father for 18 years',
      'Love is proved in release, not possession',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Day-Lewis uses satellite and seed metaphors to present separation as both painful and natural.',
    keyPoints: [
      '"Satellite wrenched from its orbit" — violent, unnatural separation',
      '"Winged seed loosened from its parent stem" — natural, necessary dispersal',
      '"Dazed" — the father\'s bewilderment at losing control',
      '"Proved in the letting go" — love defined by release',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Five quintains (five-line stanzas) with a loose ABACA rhyme scheme moving from specific memory to philosophical reflection on the nature of love.',
    keyPoints: [
      'Five quintains — orderly structure containing complex emotion',
      'ABACA loose rhyme — things not quite resolved, like parental worry',
      'Progression from memory to philosophy',
      '"Eighteen years ago" — the specific opening grounds the universal theme',
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
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Walking Away by C. Day-Lewis — Analysis & Annotations"
        description="Line-by-line analysis of Walking Away with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'Walking Away',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/walking-away',
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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Poem text is reproduced for the purpose of private study and educational criticism under UK
        fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30). No commercial use
        is intended. All quotations remain the intellectual property of the respective rights
        holders.
      </footer>
    </div>
  )
}
