'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
/* ── Poem data ─────────────────────────────────────────────────────── */

const farmersBridePoem: PoemData = {
  title: "The Farmer's Bride",
  poet: 'Charlotte Mew',
  // NOTE (audit remediation, item I5): The previously displayed line-by-line
  // text was flagged as not matching the canonical poem and has been removed.
  // The lines below are PARAPHRASED descriptions of each section in our own
  // words (no verbatim quotation). Charlotte Mew (d. 1928) is public domain,
  // so accurate quotations may be restored ONLY after checking against a named
  // primary edition (e.g. The Farmer's Bride, The Poetry Bookshop, 1916).
  // Until then, no original line is shown in quotation marks.
  lines: [
    // Stanza 1 (paraphrase)
    {
      text: 'Section 1 \u2014 The farmer recalls choosing a young woman as his wife three summers ago.',
      annotations: [
        {
          type: 'Possessive language',
          note: 'The verb of selection the farmer uses implies ownership rather than mutual love; he frames marriage as something he decided, with no agency on her part.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'He admits she was perhaps too young, but says farm work left no time for courtship.' },
    {
      text: 'He recounts that once they were married she became afraid of him, of love, and of all human contact.',
      annotations: [
        {
          type: 'Dialect',
          note: 'The farmer narrates in non-standard rural grammar throughout, establishing his working-class voice and limited education.',
          color: '#8b5cf6',
        },
        {
          type: 'Escalation',
          note: 'Her fear is described as widening from the specific (the farmer, love) to the universal (everything human), suggesting an existential rather than merely personal dread.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'He compares the sudden vanishing of her warmth to the abrupt close of a winter day, and says she seemed less a woman than a small, frightened fairy-like creature.',
      annotations: [
        {
          type: 'Simile / dehumanisation',
          note: 'A winter-day comparison renders her withdrawal as sudden, cold and final; likening her to a fairy creature both idealises and strips her of full humanity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'One autumn night, he says, she ran away.',
      annotations: [
        {
          type: 'Dialect / season',
          note: 'Non-standard past-tense verbs reinforce the rural voice, while the autumn setting begins the seasonal framework that tracks time passing without resolution.',
          color: '#8b5cf6',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2 (paraphrase)
    {
      text: 'Section 2 \u2014 The men of the village pursued her and brought her back to the house.',
      annotations: [
        {
          type: 'Self-correction',
          note: 'The farmer revises his account of who recaptured her, a slip that exposes guilt and an awareness that the community acted as a single coercive force.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Surrounded by too many men, she could only stare, shake, cower and cry; the farmer insists she had never been treated so roughly.',
      annotations: [
        {
          type: 'Listing',
          note: 'The piling-up of frightened actions conveys her terror at being forcibly returned by a crowd of men.',
          color: '#10b981',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 3 (paraphrase)
    {
      text: 'Section 3 \u2014 Now she does the housework competently but silently, as timid as a mouse.',
      annotations: [
        {
          type: 'Simile',
          note: 'Reducing her to a small, frightened creature, the mouse comparison and the surrounding domestic detail enact her confinement within the home.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'The farmer dwells on the empty, silent house at night, hinting at the unconsummated marriage and his frustration.',
      annotations: [
        {
          type: 'Repetition / emptiness',
          note: 'A repeated emphasis on nothingness at night conveys the void at the centre of the marriage and the farmer\u2019s suppressed sexual frustration.',
          color: '#ef4444',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4 (paraphrase)
    {
      text: 'Final section \u2014 The farmer\u2019s control breaks down into an exclamatory, obsessive fixation on the young woman\u2019s appearance \u2014 her colouring, her eyes and especially her hair.',
      annotations: [
        {
          type: 'Repetition / climax',
          note: 'The obsessive, repeated focus on her physical features and the broken exclamations mark a loss of composure, ending the poem on an ominous, threatening note.',
          color: '#ef4444',
        },
      ],
    },
  ],
  context:
    "<p><strong>Charlotte Mew</strong> (1869\u20131928) was a modernist poet who experienced personal tragedy, including the institutionalisation of two siblings and lifelong poverty. She published this poem in 1916.</p><p>The poem is a <strong>dramatic monologue</strong> spoken by a farmer whose young bride is terrified of him and of physical intimacy. It explores themes of <strong>trapped marriage</strong>, <strong>female oppression</strong>, and <strong>male desire</strong> in a rural setting where women had very little agency.</p><p>The bride is presented as a creature of nature \u2014 compared to animals and fairies \u2014 while the farmer's language reveals a troubling mix of <strong>tenderness and possessiveness</strong>. The poem can be read as a critique of Victorian and Edwardian marriage, where women were essentially <strong>property</strong> and had no legal right to refuse their husbands.</p><p>Mew's own experience as a queer woman in a repressive society likely informed her sympathy for the trapped bride and her understanding of desire that cannot be fulfilled.</p>",
  contextAr:
    '<p><strong>Charlotte Mew</strong> (1869\u20131928) \u0634\u0627\u0639\u0631\u0629 \u062d\u062f\u0627\u062b\u064a\u0629 \u0639\u0627\u0634\u062a \u0645\u0622\u0633\u064a \u0634\u062e\u0635\u064a\u0629\u060c \u0645\u0646\u0647\u0627 \u0625\u064a\u062f\u0627\u0639 \u0627\u062b\u0646\u064a\u0646 \u0645\u0646 \u0625\u062e\u0648\u062a\u0647\u0627 \u0641\u064a \u0645\u0635\u062d\u0651\u0627\u062a \u0646\u0641\u0633\u064a\u0629\u060c \u0648\u0627\u0644\u0641\u0642\u0631 \u0637\u0648\u0644 \u062d\u064a\u0627\u062a\u0647\u0627. \u0648\u0646\u0634\u0631\u062a \u0647\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0633\u0646\u0629 1916.</p><p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 <strong>dramatic monologue</strong> (\u0645\u0648\u0646\u0648\u0644\u0648\u062c \u062f\u0631\u0627\u0645\u064a) \u064a\u062a\u0643\u0644\u0651\u0645 \u0628\u0647\u0627 \u0645\u0632\u0627\u0631\u0639\u060c \u0639\u0631\u0648\u0633\u0647 \u0627\u0644\u0635\u063a\u064a\u0631\u0629 \u0645\u0631\u0639\u0648\u0628\u0629 \u0645\u0646\u0647 \u0648\u0645\u0646 \u0627\u0644\u062d\u0645\u064a\u0645\u064a\u0629 \u0627\u0644\u062c\u0633\u062f\u064a\u0629. \u0648\u062a\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0648\u0627\u0636\u064a\u0639 <strong>\u0627\u0644\u0632\u0648\u0627\u062c \u0643\u0641\u062e\u0651</strong>\u060c \u0648<strong>\u0627\u0644\u0642\u0645\u0639 \u0627\u0644\u0623\u0646\u062b\u0648\u064a</strong>\u060c \u0648<strong>\u0627\u0644\u0631\u063a\u0628\u0629 \u0627\u0644\u0630\u0643\u0648\u0631\u064a\u0629</strong> \u0641\u064a \u0628\u064a\u0626\u0629 \u0631\u064a\u0641\u064a\u0629 \u0643\u0627\u0646 \u0641\u064a\u0647\u0627 \u0644\u0644\u0646\u0633\u0627\u0621 \u0641\u0627\u0639\u0644\u064a\u0629 \u0636\u0639\u064a\u0641\u0629 \u062c\u062f\u0627\u064b.</p><p>\u0627\u0644\u0639\u0631\u0648\u0633 \u062a\u064f\u0642\u062f\u064e\u0651\u0645 \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u0645\u062e\u0644\u0648\u0642 \u0645\u0646 \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u2014 \u062a\u062a\u0634\u0628\u0651\u0647 \u0628\u0627\u0644\u062d\u064a\u0648\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0627\u0644\u062e\u0631\u0627\u0641\u064a\u0629 \u2014 \u0628\u064a\u0646\u0645\u0627 \u0644\u063a\u0629 \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u062a\u0643\u0634\u0641 \u0645\u0632\u064a\u062c \u0645\u0642\u0644\u0642 \u0645\u0646 <strong>\u0627\u0644\u062d\u0646\u0627\u0646 \u0648\u0627\u0644\u062a\u0645\u0644\u0651\u0643</strong>. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0645\u0643\u0646 \u062a\u062a\u0642\u0631\u0623 \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u0646\u0642\u062f \u0644\u0644\u0632\u0648\u0627\u062c \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a \u0648\u0627\u0644\u0625\u062f\u0648\u0627\u0631\u062f\u064a\u060c \u0627\u0644\u0644\u064a \u0643\u0627\u0646\u062a \u0641\u064a\u0647 \u0627\u0644\u0645\u0631\u0623\u0629 \u0641\u064a \u0627\u0644\u0648\u0627\u0642\u0639 <strong>\u0645\u0644\u0643\u064a\u0629</strong>\u060c \u0648\u0645\u0627 \u0644\u0647\u0627 \u062d\u0642 \u0642\u0627\u0646\u0648\u0646\u064a \u062a\u0631\u0641\u0636 \u0632\u0648\u062c\u0647\u0627.</p><p>\u062a\u062c\u0631\u0628\u0629 Mew \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0643\u0627\u0645\u0631\u0623\u0629 \u0645\u062b\u0644\u064a\u0629 \u0641\u064a \u0645\u062c\u062a\u0645\u0639 \u0642\u0645\u0639\u064a \u064a\u062d\u062a\u0645\u0644 \u0625\u0646\u0647\u0627 \u063a\u0630\u0651\u062a \u062a\u0639\u0627\u0637\u0641\u0647\u0627 \u0645\u0639 \u0627\u0644\u0639\u0631\u0648\u0633 \u0627\u0644\u0645\u062d\u0627\u0635\u0631\u0629\u060c \u0648\u0641\u0647\u0645\u0647\u0627 \u0644\u0644\u0631\u063a\u0628\u0629 \u0627\u0644\u0644\u064a \u0645\u0627 \u062a\u0642\u062f\u0631 \u062a\u062a\u062d\u0642\u0651\u0642.</p>',
  summary:
    "A farmer narrates the story of his young bride who, from the moment of their wedding, was terrified of intimacy and of all human contact. She ran away one night but was caught and brought back by the men of the village. Now she lives in the house, doing domestic work silently and as timidly as a mouse, but the marriage remains unconsummated. The farmer's monologue shifts from matter-of-fact narration to increasingly desperate desire, ending with an obsessive fixation on her physical appearance that suggests the situation may become dangerous.",
  summaryAr:
    '\u0645\u0632\u0627\u0631\u0639 \u064a\u0633\u0631\u062f \u0642\u0635\u0651\u0629 \u0639\u0631\u0648\u0633\u0647 \u0627\u0644\u0635\u063a\u064a\u0631\u0629\u060c \u0627\u0644\u0644\u064a \u0645\u0646 \u0644\u062d\u0638\u0629 \u0632\u0648\u0627\u062c\u0647\u0645 \u0643\u0627\u0646\u062a \u0645\u0631\u0639\u0648\u0628\u0629 \u0645\u0646 \u0627\u0644\u062d\u0645\u064a\u0645\u064a\u0629 \u0648\u0645\u0646 \u0643\u0644 \u0634\u064a \u0628\u0634\u0631\u064a. \u0647\u0631\u0628\u062a \u0644\u064a\u0644\u0629 \u0645\u0646 \u0627\u0644\u0644\u064a\u0627\u0644\u064a\u060c \u0628\u0633 \u0631\u062c\u0627\u0644 \u0627\u0644\u0642\u0631\u064a\u0629 \u0623\u0645\u0633\u0643\u0648\u0647\u0627 \u0648\u0631\u062c\u0651\u0639\u0648\u0647\u0627 \u0628\u0627\u0644\u0642\u0648\u0651\u0629. \u0627\u0644\u062d\u064a\u0646 \u0647\u064a \u062a\u0639\u064a\u0634 \u0641\u064a \u0627\u0644\u0628\u064a\u062a\u060c \u062a\u0633\u0648\u0651\u064a \u0634\u063a\u0644 \u0627\u0644\u0628\u064a\u062a \u0628\u0635\u0645\u062a \u0645\u062b\u0644 \u0627\u0644\u0641\u0627\u0631\u060c \u0628\u0633 \u0627\u0644\u0632\u0648\u0627\u062c \u0645\u0627 \u062a\u0645\u0651 \u0648\u0644\u0627 \u0645\u0631\u0651\u0629. \u0627\u0644\u0645\u0648\u0646\u0648\u0644\u0648\u062c \u0645\u0627\u0644 \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u064a\u062a\u062d\u0648\u0651\u0644 \u0645\u0646 \u0633\u0631\u062f \u0639\u0627\u062f\u064a \u0644\u0644\u0623\u062d\u062f\u0627\u062b \u0625\u0644\u0649 \u0631\u063a\u0628\u0629 \u0645\u062d\u0628\u064e\u0637\u0629 \u0648\u0623\u0643\u062b\u0631 \u064a\u0623\u0633\u0627\u064b\u060c \u0648\u064a\u0646\u062a\u0647\u064a \u0628\u0647\u0648\u0633 \u0645\u062e\u064a\u0641 \u0628\u0645\u0638\u0647\u0631\u0647\u0627 \u0627\u0644\u062c\u0633\u062f\u064a \u064a\u0644\u0645\u0651\u062d \u0625\u0646 \u0627\u0644\u0648\u0636\u0639 \u0645\u0645\u0643\u0646 \u064a\u062a\u0637\u0648\u0651\u0631 \u0644\u0634\u064a \u062e\u0637\u064a\u0631.',
  formAndStructure:
    "Form: Dramatic monologue \u2014 the farmer is the sole speaker, giving us only his perspective. The bride is entirely voiceless.\n\nStructure: Irregular stanza lengths and line lengths mirror the farmer's unstable emotional state. The poem grows more fragmented as his composure breaks down.\n\nRhyme: An irregular rhyme scheme with frequent rhyming couplets creates a sense of confinement and entrapment.\n\nDialect: Non-standard rural grammar establishes the working-class setting and the farmer's limited education.\n\nCaesura: Frequent dashes and mid-line pauses reflect the farmer's hesitation and self-correction, suggesting he is aware his behaviour is troubling.\n\nProgression: The poem moves from past narration to present description to desperate exclamation, tracking the farmer's escalating obsession.\n\nNote: Mew is public domain; exact rhyme-word and dialect examples should be cited only after checking a named primary edition (The Farmer's Bride, The Poetry Bookshop, 1916).",
  formAndStructureAr:
    '\u0627\u0644\u0634\u0643\u0644: DRAMATIC MONOLOGUE (\u0645\u0648\u0646\u0648\u0644\u0648\u062c \u062f\u0631\u0627\u0645\u064a) \u2014 \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u0647\u0648 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0627\u0644\u0648\u062d\u064a\u062f\u060c \u0648\u0645\u0627 \u064a\u0648\u0635\u0644\u0646\u0627 \u0625\u0644\u0627 \u0645\u0646\u0638\u0648\u0631\u0647. \u0627\u0644\u0639\u0631\u0648\u0633 \u0628\u062f\u0648\u0646 \u0635\u0648\u062a \u0628\u0627\u0644\u0645\u0631\u0651\u0629.\n\n\u0627\u0644\u0628\u0646\u064a\u0629: \u0645\u0642\u0627\u0637\u0639 \u0648\u0623\u0628\u064a\u0627\u062a \u0628\u0623\u0637\u0648\u0627\u0644 \u063a\u064a\u0631 \u0645\u0646\u062a\u0638\u0645\u0629 \u062a\u0639\u0643\u0633 \u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0639\u0627\u0637\u0641\u064a\u0629 \u0627\u0644\u0645\u0636\u0637\u0631\u0628\u0629 \u0639\u0646\u062f \u0627\u0644\u0645\u0632\u0627\u0631\u0639. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0635\u064a\u0631 \u0623\u0643\u062b\u0631 \u062a\u0634\u0638\u0651\u064a\u0627\u064b \u0643\u0644 \u0645\u0627 \u0631\u0632\u0627\u0646\u062a\u0647 \u062a\u0646\u0647\u0627\u0631.\n\n\u0627\u0644\u0642\u0627\u0641\u064a\u0629: \u0646\u0645\u0637 \u0642\u0627\u0641\u064a\u0629 \u063a\u064a\u0631 \u0645\u0646\u062a\u0638\u0645 \u0645\u0639 couplets \u0645\u062a\u0643\u0631\u0651\u0631\u0629 \u062a\u062e\u0644\u0642 \u0625\u062d\u0633\u0627\u0633 \u0628\u0627\u0644\u062d\u0628\u0633 \u0648\u0627\u0644\u062d\u0635\u0627\u0631.\n\n\u0627\u0644\u0644\u0647\u062c\u0629: \u0642\u0648\u0627\u0639\u062f \u063a\u064a\u0631 \u0645\u0639\u064a\u0627\u0631\u064a\u0629 \u0631\u064a\u0641\u064a\u0629 \u062a\u062b\u0628\u0651\u062a \u0627\u0644\u0628\u064a\u0626\u0629 \u0627\u0644\u0631\u064a\u0641\u064a\u0629 \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0639\u0627\u0645\u0644\u0629\u060c \u0648\u062a\u0644\u0645\u064a\u062d \u0625\u0646 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u0645\u062d\u062f\u0648\u062f.\n\nCAESURA: \u0627\u0644\u0640dashes \u0648\u0627\u0644\u062a\u0648\u0642\u0651\u0641\u0627\u062a \u0641\u064a \u0646\u0635 \u0627\u0644\u0623\u0628\u064a\u0627\u062a \u0643\u062b\u064a\u0631\u0629\u060c \u0648\u062a\u0639\u0643\u0633 \u062a\u0631\u062f\u0651\u062f \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u0648\u062a\u0635\u062d\u064a\u062d\u0647 \u0644\u0646\u0641\u0633\u0647\u060c \u0648\u062a\u0644\u0645\u0651\u062d \u0625\u0646\u0647 \u0648\u0627\u0639\u064a \u0625\u0646 \u0633\u0644\u0648\u0643\u0647 \u0641\u064a\u0647 \u0634\u064a \u0645\u0632\u0639\u062c.\n\n\u0627\u0644\u062a\u062f\u0631\u0651\u062c: \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u062a\u062d\u0631\u0651\u0643 \u0645\u0646 \u0633\u0631\u062f \u0645\u0627\u0636\u064a \u0625\u0644\u0649 \u0648\u0635\u0641 \u0645\u0636\u0627\u0631\u0639 \u0625\u0644\u0649 \u0635\u0631\u062e\u0629 \u064a\u0627\u0626\u0633\u0629\u060c \u0648\u062a\u062a\u062a\u0628\u0651\u0639 \u062a\u0635\u0627\u0639\u062f \u0647\u0648\u0633 \u0627\u0644\u0645\u0632\u0627\u0631\u0639.',
  // NOTE (audit remediation, item I5): Verbatim "key quotes" previously shown
  // here were flagged as not matching the canonical poem. They have been
  // replaced with paraphrased descriptions of each key moment and its devices
  // (no quotation marks around original wording). Mew is public domain, so
  // exact quotations should be restored ONLY after verification against a
  // named primary edition (The Farmer's Bride, The Poetry Bookshop, 1916).
  keyQuotes: [
    {
      quote: 'Opening \u2014 the farmer recalls choosing a young bride (paraphrase)',
      analysis:
        'The farmer\u2019s verb of selection implies ownership rather than mutual love, and his stress on her youth frames her as a commodity. (Original wording pending primary-edition verification.)',
      themes: ['Power', 'Ownership', 'Marriage'],
      analysisAr:
        '\u0641\u0639\u0644 \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0644\u064a \u064a\u0633\u062a\u062e\u062f\u0645\u0647 \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u064a\u0644\u0645\u0651\u062d \u0644\u0644\u062a\u0645\u0644\u0651\u0643 \u0645\u0648 \u0627\u0644\u062d\u0628 \u0627\u0644\u0645\u062a\u0628\u0627\u062f\u0644\u060c \u0648\u062a\u0631\u0643\u064a\u0632\u0647 \u0639\u0644\u0649 \u0635\u063a\u0631 \u0633\u0646\u0651\u0647\u0627 \u064a\u0623\u0637\u0651\u0631\u0647\u0627 \u0643\u0623\u0646\u0647\u0627 \u0633\u0644\u0639\u0629. (\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0633\u0627\u0633\u064a\u0629.)',
      themesAr: [
        '\u0627\u0644\u0633\u0644\u0637\u0629',
        '\u0627\u0644\u062a\u0645\u0644\u0651\u0643',
        '\u0627\u0644\u0632\u0648\u0627\u062c',
      ],
    },
    {
      quote:
        'Her fear after the wedding \u2014 of the farmer, of love, of all humanity (paraphrase)',
      analysis:
        'Her dread is described as widening from the personal to the universal; the line break enacts a turning away. (Original wording pending primary-edition verification.)',
      themes: ['Fear', 'Isolation', 'Humanity'],
      analysisAr:
        '\u062e\u0648\u0641\u0647\u0627 \u064a\u064f\u0648\u0635\u0641 \u0648\u0647\u0648 \u064a\u062a\u0651\u0633\u0639 \u0645\u0646 \u0627\u0644\u0634\u062e\u0635\u064a \u0625\u0644\u0649 \u0627\u0644\u0643\u0648\u0646\u064a\u060c \u0648\u0641\u0627\u0635\u0644 \u0627\u0644\u0628\u064a\u062a \u064a\u062c\u0633\u0651\u062f \u0644\u062d\u0638\u0629 \u0627\u0644\u0627\u0646\u0643\u0641\u0627\u0621. (\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0633\u0627\u0633\u064a\u0629.)',
      themesAr: [
        '\u0627\u0644\u062e\u0648\u0641',
        '\u0627\u0644\u0639\u0632\u0644\u0629',
        '\u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a\u0629',
      ],
    },
    {
      quote: 'Winter-day simile for her vanished warmth (paraphrase)',
      analysis:
        'A comparison to the close of a winter day captures the sudden, cold finality of her withdrawal; winter connotes death and barrenness. (Original wording pending primary-edition verification.)',
      themes: ['Loss', 'Coldness', 'Nature'],
      analysisAr:
        '\u062a\u0634\u0628\u064a\u0647 \u0628\u0646\u0647\u0627\u064a\u0629 \u064a\u0648\u0645 \u0634\u062a\u0648\u064a \u064a\u0644\u062a\u0642\u0637 \u0627\u0644\u0646\u0647\u0627\u064a\u0629 \u0627\u0644\u0645\u0641\u0627\u062c\u0626\u0629 \u0648\u0627\u0644\u0628\u0627\u0631\u062f\u0629 \u0644\u0627\u0646\u0633\u062d\u0627\u0628\u0647\u0627\u061b \u0648\u0627\u0644\u0634\u062a\u0627\u0621 \u064a\u0648\u062d\u064a \u0628\u0627\u0644\u0645\u0648\u062a \u0648\u0627\u0644\u0639\u0642\u0645. (\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0633\u0627\u0633\u064a\u0629.)',
      themesAr: [
        '\u0627\u0644\u0641\u0642\u062f',
        '\u0627\u0644\u0628\u0631\u0648\u062f\u0629',
        '\u0627\u0644\u0637\u0628\u064a\u0639\u0629',
      ],
    },
    {
      quote: 'She seems a frightened fairy-creature rather than a woman (paraphrase)',
      analysis:
        'By likening her to a fairy-like creature he both idealises and dehumanises her, making her something other than human in his eyes. (Original wording pending primary-edition verification.)',
      themes: ['Dehumanisation', 'Fantasy', 'Othering'],
      analysisAr:
        '\u0628\u062a\u0634\u0628\u064a\u0647\u0647\u0627 \u0628\u0643\u0627\u0626\u0646 \u062e\u0631\u0627\u0641\u064a \u064a\u0645\u062b\u0651\u0644\u0647\u0627 \u0645\u062b\u0627\u0644\u064a\u0627\u064b \u0648\u064a\u062c\u0631\u0651\u062f\u0647\u0627 \u0645\u0646 \u0625\u0646\u0633\u0627\u0646\u064a\u062a\u0647\u0627 \u0641\u064a \u0622\u0646\u060c \u0641\u062a\u0635\u064a\u0631 \u0634\u064a\u0626\u0627\u064b \u063a\u064a\u0631 \u0628\u0634\u0631\u064a \u0641\u064a \u0639\u064a\u0646\u064a\u0647. (\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0633\u0627\u0633\u064a\u0629.)',
      themesAr: [
        '\u0627\u0644\u062a\u062c\u0631\u064a\u062f \u0645\u0646 \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a\u0629',
        '\u0627\u0644\u062e\u064a\u0627\u0644',
        '\u062a\u063a\u0631\u064a\u0628 \u0627\u0644\u0622\u062e\u0631',
      ],
    },
    {
      quote: 'The village men pursue and bring her back (paraphrase)',
      analysis:
        'The farmer\u2019s language of capture treats her like an escaped animal, revealing the violent power dynamics of the marriage and community. (Original wording pending primary-edition verification.)',
      themes: ['Power', 'Entrapment', 'Violence'],
      analysisAr:
        '\u0644\u063a\u0629 \u0627\u0644\u0627\u0635\u0637\u064a\u0627\u062f \u0639\u0646\u062f \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u062a\u0639\u0627\u0645\u0644\u0647\u0627 \u0645\u062b\u0644 \u062d\u064a\u0648\u0627\u0646 \u0647\u0627\u0631\u0628\u060c \u0648\u062a\u0643\u0634\u0641 \u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0627\u062a \u0627\u0644\u0633\u0644\u0637\u0629 \u0627\u0644\u0639\u0646\u064a\u0641\u0629 \u0641\u064a \u0627\u0644\u0632\u0648\u0627\u062c \u0648\u0627\u0644\u0645\u062c\u062a\u0645\u0639. (\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0633\u0627\u0633\u064a\u0629.)',
      themesAr: [
        '\u0627\u0644\u0633\u0644\u0637\u0629',
        '\u0627\u0644\u062d\u0635\u0627\u0631',
        '\u0627\u0644\u0639\u0646\u0641',
      ],
    },
    {
      quote: 'She works the house silently, as timid as a mouse (paraphrase)',
      analysis:
        'The mouse comparison reduces her to a small, frightened creature, and the surrounding domestic detail enacts her confinement. (Original wording pending primary-edition verification.)',
      themes: ['Domesticity', 'Entrapment', 'Silence'],
      analysisAr:
        '\u062a\u0634\u0628\u064a\u0647 \u0627\u0644\u0641\u0623\u0631 \u064a\u062e\u062a\u0632\u0644\u0647\u0627 \u0625\u0644\u0649 \u0645\u062e\u0644\u0648\u0642 \u0635\u063a\u064a\u0631 \u0648\u0645\u0631\u0639\u0648\u0628\u060c \u0648\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0646\u0632\u0644\u064a\u0629 \u0627\u0644\u0645\u062d\u064a\u0637\u0629 \u062a\u062c\u0633\u0651\u062f \u062d\u0635\u0627\u0631\u0647\u0627. (\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0633\u0627\u0633\u064a\u0629.)',
      themesAr: [
        '\u0627\u0644\u0645\u0646\u0632\u0644\u064a\u0629',
        '\u0627\u0644\u062d\u0635\u0627\u0631',
        '\u0627\u0644\u0635\u0645\u062a',
      ],
    },
    {
      quote: 'The empty, silent house at night (paraphrase)',
      analysis:
        'A repeated emphasis on nothingness conveys the emptiness of the marriage and the farmer\u2019s sexual frustration; night-time implies the absent intimacy. (Original wording pending primary-edition verification.)',
      themes: ['Desire', 'Emptiness', 'Frustration'],
      analysisAr:
        '\u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u062a\u0634\u062f\u064a\u062f \u0639\u0644\u0649 \u0627\u0644\u0639\u062f\u0645 \u064a\u0648\u0635\u0644 \u0641\u0631\u0627\u063a \u0627\u0644\u0632\u0648\u0627\u062c \u0648\u0625\u062d\u0628\u0627\u0637 \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u0627\u0644\u062c\u0646\u0633\u064a\u061b \u0648\u0627\u0644\u0644\u064a\u0644 \u064a\u0644\u0645\u0651\u062d \u0644\u0644\u062d\u0645\u064a\u0645\u064a\u0629 \u0627\u0644\u063a\u0627\u064a\u0628\u0629. (\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0633\u0627\u0633\u064a\u0629.)',
      themesAr: [
        '\u0627\u0644\u0631\u063a\u0628\u0629',
        '\u0627\u0644\u0641\u0631\u0627\u063a',
        '\u0627\u0644\u0625\u062d\u0628\u0627\u0637',
      ],
    },
    {
      quote: 'The closing fixation on her colouring, eyes and hair (paraphrase)',
      analysis:
        'The obsessive, repeated focus and broken exclamations signal the farmer losing control; his gaze fragments her into body parts and objectifies her. (Original wording pending primary-edition verification.)',
      themes: ['Obsession', 'Objectification', 'Desire'],
      analysisAr:
        '\u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0627\u0644\u0647\u0648\u0633\u064a \u0627\u0644\u0645\u062a\u0643\u0631\u0651\u0631 \u0648\u0627\u0644\u0635\u064a\u062d\u0627\u062a \u0627\u0644\u0645\u062a\u0642\u0637\u0651\u0639\u0629 \u062a\u0624\u0634\u0651\u0631 \u0641\u0642\u062f\u0627\u0646 \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u0644\u0644\u0633\u064a\u0637\u0631\u0629\u061b \u0648\u0646\u0638\u0631\u062a\u0647 \u062a\u062c\u0632\u0651\u0626\u0647\u0627 \u0625\u0644\u0649 \u0623\u0639\u0636\u0627\u0621 \u0648\u062a\u0634\u064a\u0651\u0626\u0647\u0627. (\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0633\u0627\u0633\u064a\u0629.)',
      themesAr: [
        '\u0627\u0644\u0647\u0648\u0633',
        '\u062a\u0634\u064a\u064a\u0621 \u0627\u0644\u0645\u0631\u0623\u0629',
        '\u0627\u0644\u0631\u063a\u0628\u0629',
      ],
    },
  ],
  languageDevices: [
    {
      device: 'Dramatic monologue',
      example: 'The farmer’s opening recollection of choosing his bride (paraphrase)',
      effect:
        'The farmer is the sole narrator, so we only get his perspective. The bride is voiceless, which itself enacts the power imbalance the poem critiques.',
      lineRef: 0,
      effectAr:
        '\u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u0647\u0648 \u0627\u0644\u0631\u0627\u0648\u064a \u0627\u0644\u0648\u062d\u064a\u062f\u060c \u0648\u0645\u0627 \u064a\u0648\u0635\u0644\u0646\u0627 \u063a\u064a\u0631 \u0645\u0646\u0638\u0648\u0631\u0647. \u0627\u0644\u0639\u0631\u0648\u0633 \u0628\u062f\u0648\u0646 \u0635\u0648\u062a\u060c \u0648\u0647\u0630\u0627 \u0628\u062d\u062f\u0651 \u0630\u0627\u062a\u0647 \u064a\u062c\u0633\u0651\u062f \u0627\u0644\u062e\u0644\u0644 \u0641\u064a \u0627\u0644\u0633\u0644\u0637\u0629 \u0627\u0644\u0644\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0646\u062a\u0642\u062f\u0647.',
    },
    {
      device: 'Animal imagery',
      example: 'The bride likened to a mouse and to a frightened fairy-creature (paraphrase)',
      effect:
        'Repeated animal and fairy comparisons dehumanise the bride, reducing her to a creature to be caught and kept rather than a person with agency.',
      lineRef: 18,
      effectAr:
        '\u0627\u0644\u062a\u0634\u0628\u064a\u0647\u0627\u062a \u0627\u0644\u0645\u062a\u0643\u0631\u0651\u0631\u0629 \u0628\u0627\u0644\u062d\u064a\u0648\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0627\u0644\u062e\u0631\u0627\u0641\u064a\u0629 \u062a\u062c\u0631\u0651\u062f \u0627\u0644\u0639\u0631\u0648\u0633 \u0645\u0646 \u0625\u0646\u0633\u0627\u0646\u064a\u062a\u0647\u0627\u060c \u0648\u062a\u062e\u062a\u0632\u0644\u0647\u0627 \u0625\u0644\u0649 \u0645\u062e\u0644\u0648\u0642 \u064a\u062a\u0645\u0651 \u0627\u0635\u0637\u064a\u0627\u062f\u0647 \u0648\u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0638 \u0628\u0647 \u0628\u062f\u0644 \u0645\u0627 \u062a\u0643\u0648\u0646 \u0634\u062e\u0635 \u0644\u0647 \u0641\u0627\u0639\u0644\u064a\u0629.',
    },
    {
      device: 'Dialect',
      example:
        'Non-standard rural grammar in the farmer’s narration of the wedding and her flight (paraphrase)',
      effect:
        "Non-standard grammar establishes the farmer's rural working-class voice and creates authenticity, but also suggests limited self-awareness.",
      lineRef: 3,
      effectAr:
        '\u0627\u0644\u0642\u0648\u0627\u0639\u062f \u063a\u064a\u0631 \u0627\u0644\u0645\u0639\u064a\u0627\u0631\u064a\u0629 \u062a\u062b\u0628\u0651\u062a \u0635\u0648\u062a \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u0627\u0644\u0631\u064a\u0641\u064a \u0645\u0646 \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0639\u0627\u0645\u0644\u0629\u060c \u0648\u062a\u0639\u0637\u064a \u0625\u062d\u0633\u0627\u0633 \u0628\u0627\u0644\u0623\u0635\u0627\u0644\u0629\u060c \u0628\u0633 \u0643\u0645\u0627\u0646 \u062a\u0644\u0645\u0651\u062d \u0625\u0646 \u0648\u0639\u064a\u0647 \u0627\u0644\u0630\u0627\u062a\u064a \u0645\u062d\u062f\u0648\u062f.',
    },
    {
      device: 'Possessive language',
      example: 'The farmer’s verbs of choosing, catching and bringing her home (paraphrase)',
      effect:
        'Verbs of ownership and control reveal the patriarchal power structures underlying the marriage. She is acted upon, never acting.',
      lineRef: 11,
      effectAr:
        '\u0623\u0641\u0639\u0627\u0644 \u0627\u0644\u062a\u0645\u0644\u0651\u0643 \u0648\u0627\u0644\u0633\u064a\u0637\u0631\u0629 \u062a\u0643\u0634\u0641 \u0628\u0646\u0649 \u0627\u0644\u0633\u0644\u0637\u0629 \u0627\u0644\u0623\u0628\u0648\u064a\u0629 \u0627\u0644\u0644\u064a \u064a\u0642\u0648\u0645 \u0639\u0644\u064a\u0647\u0627 \u0627\u0644\u0632\u0648\u0627\u062c. \u0647\u064a \u0634\u064a \u064a\u0642\u0639 \u0639\u0644\u064a\u0647\u0627 \u0627\u0644\u0641\u0639\u0644\u060c \u0645\u0648 \u0630\u0627\u062a \u062a\u0641\u0639\u0644.',
    },
    {
      device: 'Repetition',
      example: 'The farmer’s repeated, exclamatory fixation on her hair at the climax (paraphrase)',
      effect:
        "The obsessive repetition at the poem's climax reveals the farmer's desire overwhelming his restraint, creating an ominous, unsettling ending.",
      lineRef: 22,
      effectAr:
        '\u0627\u0644\u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u0647\u0648\u0633\u064a \u0639\u0646\u062f \u0630\u0631\u0648\u0629 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u064a\u0643\u0634\u0641 \u0631\u063a\u0628\u0629 \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u0648\u0647\u064a \u062a\u0637\u063a\u0649 \u0639\u0644\u0649 \u0636\u0628\u0637 \u0646\u0641\u0633\u0647\u060c \u0648\u064a\u062e\u0644\u0642 \u062e\u0627\u062a\u0645\u0629 \u0645\u0634\u0624\u0648\u0645\u0629 \u0648\u0645\u0642\u0644\u0642\u0629.',
    },
    {
      device: 'Simile',
      example: 'Her vanished warmth compared to the close of a winter day (paraphrase)',
      effect:
        'Captures the sudden, cold withdrawal of the bride\'s warmth. "Shut" is abrupt and final, while winter connotes death and emotional barrenness.',
      lineRef: 5,
      effectAr:
        '\u064a\u0644\u062a\u0642\u0637 \u0627\u0644\u0627\u0646\u0633\u062d\u0627\u0628 \u0627\u0644\u0645\u0641\u0627\u062c\u0626 \u0648\u0627\u0644\u0628\u0627\u0631\u062f \u0644\u062f\u0641\u0621 \u0627\u0644\u0639\u0631\u0648\u0633. \u0643\u0644\u0645\u0629 "shut" \u0645\u0641\u0627\u062c\u0626\u0629 \u0648\u0646\u0647\u0627\u0626\u064a\u0629\u060c \u0648\u0627\u0644\u0634\u062a\u0627\u0621 \u064a\u0648\u062d\u064a \u0628\u0627\u0644\u0645\u0648\u062a \u0648\u0627\u0644\u0639\u0642\u0645 \u0627\u0644\u0639\u0627\u0637\u0641\u064a.',
    },
    {
      device: 'Caesura / self-correction',
      example: 'The farmer revising his account of who recaptured her (paraphrase)',
      effect:
        "The farmer's self-correction reveals guilt and awareness that the recapture was violent, even as he tries to distance himself from it.",
      lineRef: 12,
      effectAr:
        '\u062a\u0635\u062d\u064a\u062d \u0627\u0644\u0645\u0632\u0627\u0631\u0639 \u0644\u0646\u0641\u0633\u0647 \u064a\u0643\u0634\u0641 \u0630\u0646\u0628\u0627\u064b \u0648\u0648\u0639\u064a\u0627\u064b \u0625\u0646 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0642\u0628\u0636 \u0639\u0644\u064a\u0647\u0627 \u0643\u0627\u0646\u062a \u0639\u0646\u064a\u0641\u0629\u060c \u062d\u062a\u0649 \u0648\u0647\u0648 \u064a\u062d\u0627\u0648\u0644 \u064a\u0628\u0639\u062f \u0646\u0641\u0633\u0647 \u0639\u0646 \u0627\u0644\u0641\u0639\u0644.',
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
      'Animal imagery - hare, mouse, leveret - the bride as wild creature',
      'The closing fixation on her eyes and hair - obsessive repetition',
      'Seasonal change - time passes but nothing resolves',
      'The bride compared to nature - she belongs outside, not in marriage',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "A dramatic monologue with irregular line lengths and rhyme, mirroring the farmer's unstable emotional state.",
    keyPoints: [
      'Dramatic monologue - the farmer reveals more than he intends',
      'Irregular form - reflects agitation and instability',
      'Changing stanza lengths - tension builds toward the disturbing finale',
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
            name: "The Farmer's Bride",
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/the-farmers-bride',
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
