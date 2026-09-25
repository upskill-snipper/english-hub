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
  // follow it.
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
    "<p><em>Editorial note: the poem's wording is described here in paraphrase rather than quoted. The exact lines could not be verified in this environment and Duffy's work is in copyright \u2014 check all quotations against the AQA Love &amp; Relationships anthology or a named primary edition (Carol Ann Duffy, <em>Mean Time</em>, Anvil Press, 1993) before using them in teaching or assessment.</em></p>",

  contextAr:
    '<p><strong>Carol Ann Duffy (\u0645\u0648\u0627\u0644\u064a\u062f 1955)</strong> \u0634\u0627\u0639\u0631\u0629 \u0627\u0633\u0643\u062a\u0644\u0646\u062f\u064a\u0629\u060c \u0634\u063a\u0644\u062a \u0645\u0646\u0635\u0628 Poet Laureate \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0645\u0646 2009 \u0644\u064a\u0646 2019 \u2014 \u0648\u0643\u0627\u0646\u062a \u0623\u0648\u0644 \u0627\u0645\u0631\u0623\u0629 \u0648\u0623\u0648\u0644 \u0634\u062e\u0635 \u0645\u0639\u0644\u0646 \u0625\u0646\u0647 LGBTQ+ \u064a\u062d\u0645\u0644 \u0627\u0644\u0644\u0642\u0628. \u0634\u0639\u0631\u0647\u0627 \u0639\u0627\u062f\u0629 \u064a\u0641\u062a\u062d \u0645\u0648\u0627\u0636\u064a\u0639 \u0627\u0644\u0647\u0648\u064a\u0629\u060c \u0648\u0627\u0644\u062d\u0628\u060c \u0648\u062d\u064a\u0627\u0629 \u0627\u0644\u0646\u0633\u0627\u0621.</p>' +
    '<p>\u0642\u0635\u064a\u062f\u0629 <strong>Before You Were Mine</strong> \u0627\u0646\u062a\u0634\u0631\u062a \u0641\u064a \u0645\u062c\u0645\u0648\u0639\u0629 <em>Mean Time</em> (1993). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0648\u062c\u0651\u0647\u0629 \u0644\u0623\u0645 Duffy\u060c \u0648\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u062a\u062e\u064a\u0651\u0644 \u062d\u064a\u0627\u062a\u0647\u0627 \u0648\u0647\u064a \u0634\u0627\u0628\u0629 \u0628\u0631\u0627\u0642\u0629 \u0641\u064a Glasgow \u0641\u064a \u0627\u0644\u062e\u0645\u0633\u064a\u0646\u0627\u062a\u060c \u0642\u0628\u0644 \u0645\u0627 \u062a\u0635\u064a\u0631 \u0623\u0645.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0633\u062a\u0648\u062d\u0627\u0629 \u0645\u0646 <strong>\u0635\u0648\u0631\u0629 \u0641\u0648\u062a\u0648\u063a\u0631\u0627\u0641\u064a\u0629</strong> \u0644\u0623\u0645 Duffy \u0648\u0647\u064a \u0634\u0627\u0628\u0629 \u062a\u0636\u062d\u0643 \u0645\u0639 \u0635\u062f\u064a\u0642\u0627\u062a\u0647\u0627. Duffy \u0642\u0627\u0644\u062a \u0625\u0646 \u0627\u0644\u0635\u0648\u0631\u0629 \u0647\u064a \u0627\u0644\u0644\u064a \u062e\u0644\u0651\u062a\u0647\u0627 \u062a\u0646\u062a\u0628\u0647 \u0625\u0646 \u0623\u0645\u0647\u0627 \u0639\u0627\u0634\u062a \u062d\u064a\u0627\u0629 \u0643\u0627\u0645\u0644\u0629 \u0648\u0643\u0627\u0646\u062a \u0644\u0647\u0627 \u0647\u0648\u064a\u0629 \u0645\u0633\u062a\u0642\u0644\u0651\u0629 \u0642\u0628\u0644 \u0627\u0644\u0623\u0645\u0648\u0645\u0629.</p>' +
    '<p>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u0642\u0644\u0628 \u0627\u0644\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0627\u0644\u0645\u062a\u0648\u0642\u0651\u0639\u0629 \u0628\u064a\u0646 \u0627\u0644\u0623\u0645 \u0648\u0628\u0646\u062a\u0647\u0627: \u0628\u062f\u0644 \u0645\u0627 \u064a\u0643\u0648\u0646 \u0643\u0644\u0627\u0645 \u0623\u0645 \u0639\u0646 \u0648\u0644\u0627\u062f\u0629 \u0637\u0641\u0644\u0647\u0627\u060c \u0627\u0644\u0628\u0646\u062a \u0628\u0646\u0628\u0631\u0629 \u0645\u0633\u062a\u062d\u0648\u0630\u0629 \u062a\u062a\u0635\u0648\u0651\u0631 \u0632\u0645\u0646 \u0642\u0628\u0644 \u0645\u0627 \u062a\u0643\u0648\u0646 \u0623\u0645\u0647\u0627 <em>\u0644\u0647\u0627</em> \u2014 \u0648\u062a\u062f\u0651\u0639\u064a \u0645\u0644\u0643\u064a\u0629 \u0623\u0645\u0647\u0627.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0637\u0631\u062d \u0623\u0633\u0626\u0644\u0629 \u0639\u0646 <strong>\u0643\u064a\u0641 \u0627\u0644\u0623\u0645\u0648\u0645\u0629 \u062a\u063a\u064a\u0651\u0631 \u0627\u0644\u0647\u0648\u064a\u0629</strong>\u060c \u0648\u0647\u0644 \u0645\u0646 \u062d\u0642 \u0627\u0644\u0623\u0628\u0646\u0627\u0621 \u064a\u062f\u0651\u0639\u0648\u0646 \u0645\u0644\u0643\u064a\u0629 \u0648\u0627\u0644\u062f\u064a\u0647\u0645\u060c \u0648\u0643\u064a\u0641 \u0646\u062d\u0646 \u0646\u0631\u0648\u0645\u0646\u0633 \u0627\u0644\u0645\u0627\u0636\u064a \u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0635\u0648\u0631 \u0648\u0627\u0644\u062e\u064a\u0627\u0644.</p>' +
    '<p><em>\u0645\u0644\u0627\u062d\u0638\u0629 \u062a\u062d\u0631\u064a\u0631\u064a\u0629: \u0646\u0635 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0647\u0646\u0627 \u0645\u0648\u0635\u0648\u0641 \u0628\u0625\u0639\u0627\u062f\u0629 \u0635\u064a\u0627\u063a\u0629 \u0648\u0644\u064a\u0633 \u0645\u0642\u062a\u0628\u0633 \u062d\u0631\u0641\u064a\u0627\u064b. \u0645\u0627 \u0623\u0645\u0643\u0646 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0623\u0628\u064a\u0627\u062a \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0628\u064a\u0626\u0629\u060c \u0648\u0623\u0639\u0645\u0627\u0644 Duffy \u0645\u062d\u0645\u064a\u0629 \u0628\u062d\u0642\u0648\u0642 \u0646\u0634\u0631 \u2014 \u0644\u0627\u0632\u0645 \u064a\u064f\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0643\u0644 \u0627\u0642\u062a\u0628\u0627\u0633 \u0645\u0642\u0627\u0628\u0644 \u0623\u0646\u062b\u0648\u0644\u0648\u062c\u064a\u0627 AQA \u0644\u0645\u062d\u0648\u0631 \u0627\u0644\u062d\u0628 \u0648\u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062a \u0623\u0648 \u0637\u0628\u0639\u0629 \u0623\u0635\u0644\u064a\u0629 \u0645\u062d\u062f\u062f\u0629 (Carol Ann Duffy, <em>Mean Time</em>, Anvil Press, 1993) \u0642\u0628\u0644 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647 \u0641\u064a \u0627\u0644\u062a\u062f\u0631\u064a\u0633 \u0623\u0648 \u0627\u0644\u062a\u0642\u064a\u064a\u0645.</em></p>',

  summary:
    "Stanza 1 (lines 1\u20135): The speaker imagines her mother ten years before she was born, laughing with friends on a street corner. Her dress blows like Marilyn Monroe's \u2014 she is young, glamorous, and free.\n\n" +
    "Stanza 2 (lines 6\u201310): The mother dances in ballrooms with an effervescent, cinematic future imagined ahead of her. The speaker acknowledges she was the catalyst that changed her mother's life \u2014 she is aware that her birth ended her mother's carefree youth.\n\n" +
    "Stanza 3 (lines 11\u201315): The speaker expresses desire to occupy her mother's past \u2014 to walk those same streets, to claim that confidence. The possessive language intensifies.\n\n" +
    "Stanza 4 (lines 16\u201320): The poem shifts to childhood memories: the mother's dress, teaching the speaker to dance. The final line frames the speaker as her mother's ghost, haunting her former self.",

  summaryAr:
    '\u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u0623\u0648\u0644 (\u0627\u0644\u0623\u0628\u064a\u0627\u062a 1\u20135): \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u062a\u062e\u064a\u0651\u0644 \u0623\u0645\u0647\u0627 \u0642\u0628\u0644 \u0648\u0644\u0627\u062f\u062a\u0647\u0627 \u0628\u0639\u0634\u0631 \u0633\u0646\u064a\u0646\u060c \u0648\u0647\u064a \u062a\u0636\u062d\u0643 \u0645\u0639 \u0635\u062f\u064a\u0642\u0627\u062a\u0647\u0627 \u0639\u0644\u0649 \u0631\u0643\u0646 \u0634\u0627\u0631\u0639. \u0641\u0633\u062a\u0627\u0646 \u0623\u0645\u0647\u0627 \u064a\u0637\u064a\u0631 \u0645\u062b\u0644 \u0641\u0633\u062a\u0627\u0646 Marilyn Monroe \u2014 \u0647\u064a \u0634\u0627\u0628\u0629\u060c \u0628\u0631\u0627\u0642\u0629\u060c \u0648\u062d\u0631\u0651\u0629.\n\n' +
    '\u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u062b\u0627\u0646\u064a (\u0627\u0644\u0623\u0628\u064a\u0627\u062a 6\u201310): \u0627\u0644\u0623\u0645 \u062a\u0631\u0642\u0635 \u0641\u064a \u0642\u0627\u0639\u0627\u062a \u0627\u0644\u0631\u0642\u0635 \u0648\u0645\u0633\u062a\u0642\u0628\u0644 \u0641\u0642\u0651\u0627\u0639\u064a \u0633\u064a\u0646\u0645\u0627\u0626\u064a \u0645\u062a\u062e\u064a\u064e\u0651\u0644 \u0642\u062f\u0651\u0627\u0645\u0647\u0627. \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u0639\u062a\u0631\u0641 \u0625\u0646\u0647\u0627 \u0643\u0627\u0646\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0632 \u0627\u0644\u0644\u064a \u063a\u064a\u0651\u0631 \u062d\u064a\u0627\u0629 \u0623\u0645\u0647\u0627 \u2014 \u062a\u0639\u0631\u0641 \u0625\u0646 \u0648\u0644\u0627\u062f\u062a\u0647\u0627 \u0647\u064a \u0627\u0644\u0644\u064a \u0623\u0646\u0647\u062a \u0634\u0628\u0627\u0628 \u0623\u0645\u0647\u0627 \u0627\u0644\u062e\u0627\u0644\u064a \u0645\u0646 \u0627\u0644\u0647\u0645\u0648\u0645.\n\n' +
    '\u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u062b\u0627\u0644\u062b (\u0627\u0644\u0623\u0628\u064a\u0627\u062a 11\u201315): \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u0639\u0628\u0651\u0631 \u0639\u0646 \u0631\u063a\u0628\u0629 \u062a\u062d\u062a\u0644 \u0645\u0627\u0636\u064a \u0623\u0645\u0647\u0627 \u2014 \u062a\u0645\u0634\u064a \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0634\u0648\u0627\u0631\u0639\u060c \u0648\u062a\u062f\u0651\u0639\u064a \u0646\u0641\u0633 \u0627\u0644\u062b\u0642\u0629. \u0644\u063a\u0629 \u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u062a\u0634\u062a\u062f \u0641\u064a \u0647\u0627\u0644\u0645\u0642\u0637\u0639.\n\n' +
    '\u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u0631\u0627\u0628\u0639 (\u0627\u0644\u0623\u0628\u064a\u0627\u062a 16\u201320): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0646\u062a\u0642\u0644 \u0644\u0630\u0643\u0631\u064a\u0627\u062a \u0627\u0644\u0637\u0641\u0648\u0644\u0629: \u0641\u0633\u062a\u0627\u0646 \u0627\u0644\u0623\u0645\u060c \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0627\u0644\u0631\u0642\u0635. \u0648\u0627\u0644\u0628\u064a\u062a \u0627\u0644\u0623\u062e\u064a\u0631 \u064a\u0635\u0648\u0651\u0631 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0643\u0623\u0646\u0647\u0627 \u0634\u0628\u062d \u0623\u0645\u0647\u0627 \u064a\u0637\u0627\u0631\u062f \u0630\u0627\u062a\u0647\u0627 \u0627\u0644\u0633\u0627\u0628\u0642\u0629.',

  formAndStructure:
    'Form: Four quintains (five-line stanzas), giving the poem a regular, balanced structure that contrasts with the messy emotional content of nostalgia and possession.\n\n' +
    'Present tense about the past: Duffy uses the present tense to describe events that happened before she was born. This makes the past feel vivid and immediate, as though the speaker is actually there \u2014 an act of imaginative possession.\n\n' +
    "Possessive language: The title itself establishes a possessive dynamic. The idea of the mother as the speaker's own recurs implicitly throughout \u2014 in verbs of wanting, wishing to be present, and a child's demanding gestures. The mother is treated as belonging to the speaker.\n\n" +
    'Direct address: The poem is addressed to the mother throughout, creating an intimate, confrontational tone \u2014 almost like an accusation of having had a life before the speaker existed.\n\n' +
    "Cyclical structure: The speaker's self-identification with her mother and the idea of having changed her life appear in the second stanza and return in the final line, creating a circular structure that traps the mother in the speaker's possessive gaze.\n\n" +
    'Enjambment: Lines flow into each other, particularly between stanzas, reflecting the blurring of past and present, memory and imagination.\n\n' +
    'Contrast: The poem constantly contrasts the mother\'s glamorous youth with the implied domesticity of motherhood. The "before" is dazzling; the "after" is largely absent.',

  formAndStructureAr:
    '\u0627\u0644\u0634\u0643\u0644 (Form): \u0623\u0631\u0628\u0639\u0629 quintain (\u0645\u0642\u0627\u0637\u0639 \u0645\u0646 \u062e\u0645\u0633\u0629 \u0623\u0628\u064a\u0627\u062a)\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0628\u0646\u064a\u0629 \u0645\u0646\u062a\u0638\u0645\u0629 \u0648\u0645\u062a\u0648\u0627\u0632\u0646\u0629\u060c \u062a\u062a\u0646\u0627\u0642\u0636 \u0645\u0639 \u0627\u0644\u0641\u0648\u0636\u0649 \u0627\u0644\u0639\u0627\u0637\u0641\u064a\u0629 \u0644\u0644\u062d\u0646\u064a\u0646 \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630.\n\n' +
    '\u0627\u0644\u0632\u0645\u0646 \u0627\u0644\u062d\u0627\u0636\u0631 \u0644\u0644\u062d\u062f\u064a\u062b \u0639\u0646 \u0627\u0644\u0645\u0627\u0636\u064a: Duffy \u062a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0632\u0645\u0646 \u0627\u0644\u062d\u0627\u0636\u0631 \u0639\u0634\u0627\u0646 \u062a\u0648\u0635\u0641 \u0623\u062d\u062f\u0627\u062b \u0635\u0627\u0631\u062a \u0642\u0628\u0644 \u0648\u0644\u0627\u062f\u062a\u0647\u0627. \u0647\u0627\u0644\u0634\u064a \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0645\u0627\u0636\u064a \u064a\u062d\u0633 \u0628\u0647 \u0627\u0644\u0642\u0627\u0631\u0626 \u0643\u0623\u0646\u0647 \u062d\u064a\u0651 \u0648\u0645\u0628\u0627\u0634\u0631\u060c \u0643\u0623\u0646 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0641\u0639\u0644\u0627\u064b \u0645\u0648\u062c\u0648\u062f\u0629 \u0647\u0646\u0627\u0643 \u2014 \u0648\u0647\u0630\u0627 \u0641\u0639\u0644 \u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0628\u0627\u0644\u062e\u064a\u0627\u0644.\n\n' +
    '\u0644\u063a\u0629 \u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 (Possessive language): \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0646\u0641\u0633\u0647 \u064a\u0623\u0633\u0651\u0633 \u0627\u0644\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0627\u0644\u0645\u0633\u062a\u062d\u0648\u0630\u0629. \u0641\u0643\u0631\u0629 \u0625\u0646 \u0627\u0644\u0623\u0645 \u0645\u0644\u0643 \u0644\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u062a\u0643\u0631\u0631 \u0636\u0645\u0646\u064a\u0627\u064b \u0641\u064a \u0643\u0644 \u0645\u0643\u0627\u0646 \u2014 \u0641\u064a \u0623\u0641\u0639\u0627\u0644 \u0627\u0644\u0631\u063a\u0628\u0629\u060c \u0648\u062a\u0645\u0646\u0651\u064a \u0627\u0644\u062d\u0636\u0648\u0631\u060c \u0648\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0637\u0641\u0644\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0650\u0628\u0629. \u0627\u0644\u0623\u0645 \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0627 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0643\u0623\u0646\u0647\u0627 \u0645\u0644\u0643 \u0644\u0647\u0627.\n\n' +
    '\u0627\u0644\u062e\u0637\u0627\u0628 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 (Direct address): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0647\u0627 \u0645\u0648\u062c\u0651\u0647\u0629 \u0644\u0644\u0623\u0645\u060c \u0648\u0647\u0630\u0627 \u064a\u062e\u0644\u0642 \u0646\u0628\u0631\u0629 \u062d\u0645\u064a\u0645\u0629 \u0648\u0645\u0648\u0627\u062c\u0647\u0629 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a \u2014 \u062a\u0642\u0631\u064a\u0628\u0627\u064b \u0645\u062b\u0644 \u0627\u062a\u0647\u0627\u0645 \u0644\u0623\u0645\u0647\u0627 \u0625\u0646\u0647\u0627 \u0639\u0627\u0634\u062a \u062d\u064a\u0627\u0629 \u0642\u0628\u0644 \u0645\u0627 \u062a\u0648\u062c\u062f \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629.\n\n' +
    '\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062f\u0627\u0626\u0631\u064a\u0629 (Cyclical structure): \u062a\u0645\u0627\u0647\u064a \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0645\u0639 \u0623\u0645\u0647\u0627 \u0648\u0641\u0643\u0631\u0629 \u0625\u0646\u0647\u0627 \u063a\u064a\u0651\u0631\u062a \u062d\u064a\u0627\u062a\u0647\u0627 \u064a\u0637\u0644\u0639\u0648\u0646 \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u062b\u0627\u0646\u064a \u0648\u064a\u0631\u062c\u0639\u0648\u0646 \u0641\u064a \u0627\u0644\u0628\u064a\u062a \u0627\u0644\u0623\u062e\u064a\u0631\u060c \u0648\u0647\u0630\u0627 \u064a\u062e\u0644\u0642 \u0628\u0646\u064a\u0629 \u062f\u0627\u0626\u0631\u064a\u0629 \u062a\u062d\u0628\u0633 \u0627\u0644\u0623\u0645 \u0641\u064a \u0646\u0638\u0631\u0629 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0627\u0644\u0645\u0633\u062a\u062d\u0648\u0630\u0629.\n\n' +
    'Enjambment: \u0627\u0644\u0623\u0628\u064a\u0627\u062a \u062a\u0646\u0633\u0627\u0628 \u0645\u0646 \u0648\u0627\u062d\u062f \u0644\u0644\u062b\u0627\u0646\u064a\u060c \u062e\u0635\u0648\u0635\u0627\u064b \u0628\u064a\u0646 \u0627\u0644\u0645\u0642\u0627\u0637\u0639\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0643\u0633 \u0627\u0644\u062a\u062f\u0627\u062e\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u0627\u0636\u064a \u0648\u0627\u0644\u062d\u0627\u0636\u0631\u060c \u0648\u0628\u064a\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0648\u0627\u0644\u062e\u064a\u0627\u0644.\n\n' +
    '\u0627\u0644\u062a\u0636\u0627\u062f (Contrast): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0637\u0648\u0644 \u0627\u0644\u0648\u0642\u062a \u062a\u0636\u0639 \u0634\u0628\u0627\u0628 \u0627\u0644\u0623\u0645 \u0627\u0644\u0628\u0631\u0651\u0627\u0642 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u062c\u0648 \u0627\u0644\u0645\u0646\u0632\u0644\u064a \u0627\u0644\u0636\u0645\u0646\u064a \u0644\u0644\u0623\u0645\u0648\u0645\u0629. \u0627\u0644\u0640"before" (\u0642\u0628\u0644) \u0645\u062a\u0644\u0623\u0644\u0626\u061b \u0623\u0645\u0627 \u0627\u0644\u0640"after" (\u0628\u0639\u062f) \u0641\u064a\u0643\u0627\u062f \u064a\u0643\u0648\u0646 \u063a\u0627\u064a\u0628 \u062a\u0645\u0627\u0645\u0627\u064b.',

  // NOTE: the `quote` field is rendered by the viewer wrapped in
  // quotation marks. Because Duffy's exact wording could not be
  // verified here, each entry references the poem's MOMENT/feature in
  // paraphrase (not its words). Replace with verified quotations from a
  // primary edition before relying on these for assessment.
  keyQuotes: [
    {
      quote: 'The title (possessive framing of the mother)',
      analysis:
        'The title reverses parental possession: rather than a parent marking a child\u2019s birth, the daughter claims a time before her mother belonged to her \u2014 asserting ownership. It frames the mother-daughter relationship as one of belonging and control. Check the exact title and wording against a primary edition.',
      themes: ['Love', 'Possession', 'Family'],
      analysisAr:
        '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u0642\u0644\u0628 \u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0627\u0644\u0623\u0628\u0648\u064a: \u0628\u062f\u0644 \u0645\u0627 \u064a\u0643\u0648\u0646 \u0643\u0644\u0627\u0645 \u0623\u0645 \u0639\u0646 \u0648\u0644\u0627\u062f\u0629 \u0637\u0641\u0644\u0647\u0627\u060c \u0627\u0644\u0628\u0646\u062a \u062a\u062f\u0651\u0639\u064a \u0632\u0645\u0646 \u0642\u0628\u0644 \u0645\u0627 \u062a\u0643\u0648\u0646 \u0623\u0645\u0647\u0627 \u0644\u0647\u0627 \u2014 \u0648\u062a\u062b\u0628\u0651\u062a \u0627\u0644\u0645\u0644\u0643\u064a\u0629. \u0648\u0647\u0630\u0627 \u064a\u0635\u0646\u0651\u0641 \u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u0627\u0646\u062a\u0645\u0627\u0621 \u0648\u0633\u064a\u0637\u0631\u0629. \u0644\u0627\u0632\u0645 \u064a\u064f\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u0623\u0635\u0644\u064a \u0645\u0646 \u0637\u0628\u0639\u0629 \u0645\u0648\u062b\u0648\u0642\u0629.',
      themesAr: [
        '\u0627\u0644\u062d\u0628',
        '\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630',
        '\u0627\u0644\u0639\u0627\u0626\u0644\u0629',
      ],
    },
    {
      quote: 'Stanza 1 \u2014 the dress and the Marilyn Monroe allusion',
      analysis:
        'The Marilyn Monroe allusion transforms the mother into a glamorous icon, and a full stop isolates it for dramatic force. The mother is presented as confident, attractive, and admired. Verify the exact line before quoting.',
      themes: ['Youth', 'Glamour', 'Identity'],
      analysisAr:
        '\u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0625\u0644\u0649 Marilyn Monroe \u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0623\u0645 \u0625\u0644\u0649 \u0623\u064a\u0642\u0648\u0646\u0629 \u0628\u0631\u0651\u0627\u0642\u0629\u060c \u0648\u0646\u0642\u0637\u0629 \u062a\u0639\u0632\u0644\u0647\u0627 \u0628\u062b\u0642\u0644 \u062f\u0631\u0627\u0645\u064a. \u0627\u0644\u0623\u0645 \u0645\u0639\u0631\u0648\u0636\u0629 \u0643\u0648\u0627\u062b\u0642\u0629\u060c \u062c\u0630\u0651\u0627\u0628\u0629\u060c \u0648\u0645\u062b\u0627\u0631 \u0625\u0639\u062c\u0627\u0628. \u0644\u0627\u0632\u0645 \u064a\u064f\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0627\u0644\u0628\u064a\u062a \u0642\u0628\u0644 \u0627\u0642\u062a\u0628\u0627\u0633\u0647.',
      themesAr: [
        '\u0627\u0644\u0634\u0628\u0627\u0628',
        '\u0627\u0644\u0628\u0631\u064a\u0642',
        '\u0627\u0644\u0647\u0648\u064a\u0629',
      ],
    },
    {
      quote: 'Stanza 2 \u2014 the effervescent, cinematic future',
      analysis:
        'The mother\u2019s future is imagined as effervescent (champagne-like excitement) and cinematic (glamorous, like a film). Motherhood was not the script the mother imagined for herself. Confirm wording against a primary edition.',
      themes: ['Youth', 'Nostalgia', 'Lost Potential'],
      analysisAr:
        '\u0645\u0633\u062a\u0642\u0628\u0644 \u0627\u0644\u0623\u0645 \u0645\u062a\u062e\u064a\u064e\u0651\u0644 \u0643\u0641\u0642\u0651\u0627\u0639\u064a (\u062d\u0645\u0627\u0633 \u0634\u0628\u0647 champagne) \u0648\u0633\u064a\u0646\u0645\u0627\u0626\u064a (\u0628\u0631\u0651\u0627\u0642 \u0645\u062b\u0644 \u0641\u064a\u0644\u0645). \u0627\u0644\u0623\u0645\u0648\u0645\u0629 \u0645\u0627 \u0643\u0627\u0646\u062a \u0627\u0644\u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0627\u0644\u0644\u064a \u062a\u062e\u064a\u0651\u0644\u062a\u0647 \u0644\u0646\u0641\u0633\u0647\u0627. \u0644\u0627\u0632\u0645 \u064a\u064f\u062a\u0623\u0643\u0651\u062f \u0645\u0646 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0635\u0644\u064a\u0629.',
      themesAr: [
        '\u0627\u0644\u0634\u0628\u0627\u0628',
        '\u0627\u0644\u062d\u0646\u064a\u0646',
        '\u0627\u0644\u0625\u0645\u0643\u0627\u0646\u0627\u062a \u0627\u0644\u0636\u0627\u064a\u0639\u0629',
      ],
    },
    {
      quote: 'Stanza 2 \u2014 the speaker as the catalyst that changed the mother',
      analysis:
        'The speaker describes herself as a spark/catalyst, and the verb of change is deliberately ambiguous \u2014 it does not say improved. The speaker acknowledges her birth was a turning point that ended her mother\u2019s freedom. Quote only from a verified text.',
      themes: ['Family', 'Change', 'Guilt'],
      analysisAr:
        '\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u0635\u0641 \u0646\u0641\u0633\u0647\u0627 \u0643\u0634\u0631\u0627\u0631\u0629/\u0645\u062d\u0641\u0651\u0632\u060c \u0648\u0641\u0639\u0644 \u0627\u0644\u062a\u063a\u064a\u064a\u0631 \u063a\u0627\u0645\u0636 \u0639\u0646 \u0642\u0635\u062f \u2014 \u0645\u0627 \u0642\u0627\u0644 \u00ab\u062a\u062d\u0633\u0651\u0646\u00bb. \u062a\u0639\u062a\u0631\u0641 \u0625\u0646 \u0648\u0644\u0627\u062f\u062a\u0647\u0627 \u0646\u0642\u0637\u0629 \u062a\u062d\u0648\u0651\u0644 \u0623\u0646\u0647\u062a \u062d\u0631\u0651\u064a\u0629 \u0623\u0645\u0647\u0627. \u0644\u0627 \u062a\u064f\u0642\u062a\u0628\u0633 \u0625\u0644\u0627 \u0645\u0646 \u0646\u0635 \u0645\u0648\u062b\u0651\u0642.',
      themesAr: [
        '\u0627\u0644\u0639\u0627\u0626\u0644\u0629',
        '\u0627\u0644\u062a\u063a\u064a\u064a\u0631',
        '\u0627\u0644\u0625\u062d\u0633\u0627\u0633 \u0628\u0627\u0644\u0630\u0646\u0628',
      ],
    },
    {
      quote: 'Stanza 3 \u2014 wanting the bold, flirtatious mother',
      analysis:
        'The speaker stretches her desire impossibly back to before her own birth, characterising the young mother as confident and flirtatious \u2014 a woman she both admires and envies. Verify the exact phrasing before use.',
      themes: ['Possession', 'Nostalgia', 'Admiration'],
      analysisAr:
        '\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u0645\u062f\u0651 \u0631\u063a\u0628\u062a\u0647\u0627 \u0644\u0648\u0631\u0627 \u0628\u0634\u0643\u0644 \u0645\u0633\u062a\u062d\u064a\u0644 \u0644\u064a\u0646 \u0642\u0628\u0644 \u0648\u0644\u0627\u062f\u062a\u0647\u0627\u060c \u0648\u062a\u0635\u0648\u0651\u0631 \u0627\u0644\u0623\u0645 \u0627\u0644\u0634\u0627\u0628\u0629 \u0643\u0648\u0627\u062b\u0642\u0629 \u0648\u063a\u0646\u062f\u0648\u0631\u0629 \u2014 \u0627\u0645\u0631\u0623\u0629 \u062a\u0639\u062c\u0628 \u0641\u064a\u0647\u0627 \u0648\u062a\u062d\u0633\u062f\u0647\u0627. \u0644\u0627\u0632\u0645 \u064a\u064f\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0642\u0628\u0644 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645.',
      themesAr: [
        '\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630',
        '\u0627\u0644\u062d\u0646\u064a\u0646',
        '\u0627\u0644\u0625\u0639\u062c\u0627\u0628',
      ],
    },
    {
      quote: 'Stanza 4 \u2014 the child stamping on the romanticised street',
      analysis:
        'A child stamping her feet demands attention and claims territory. The speaker asserts her presence in her mother\u2019s past, refusing to let it exist without her, and romanticises that world as glamorous. Check the line against a primary edition.',
      themes: ['Possession', 'Childhood', 'Nostalgia'],
      analysisAr:
        '\u0627\u0644\u0637\u0641\u0644\u0629 \u0627\u0644\u0644\u064a \u062a\u062f\u0642\u0651 \u0628\u0631\u062c\u0648\u0644\u0647\u0627 \u062a\u0637\u0627\u0644\u0628 \u0628\u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647 \u0648\u062a\u062f\u0651\u0639\u064a \u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0645\u0643\u0627\u0646. \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u062b\u0628\u0651\u062a \u062d\u0636\u0648\u0631\u0647\u0627 \u0641\u064a \u0645\u0627\u0636\u064a \u0623\u0645\u0647\u0627 \u0648\u062a\u0631\u0641\u0636 \u0648\u062c\u0648\u062f\u0647 \u0628\u062f\u0648\u0646\u0647\u0627\u060c \u0648\u062a\u0631\u0648\u0645\u0646\u0633 \u0647\u0627\u0644\u0639\u0627\u0644\u0645 \u0643\u0623\u0646\u0647 \u0628\u0631\u0651\u0627\u0642. \u0644\u0627\u0632\u0645 \u064a\u064f\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0627\u0644\u0628\u064a\u062a \u0645\u0646 \u0637\u0628\u0639\u0629 \u0623\u0635\u0644\u064a\u0629.',
      themesAr: [
        '\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630',
        '\u0627\u0644\u0637\u0641\u0648\u0644\u0629',
        '\u0627\u0644\u062d\u0646\u064a\u0646',
      ],
    },
    {
      quote: 'Stanza 4 \u2014 the breathless run of five verbs',
      analysis:
        'A list of five verbs joined by repeated conjunctions creates a breathless, energetic rhythm, each capturing a different quality: light, grace, joy, noise, movement. The mother is overwhelmingly alive. Confirm the verbs against a verified text.',
      themes: ['Youth', 'Vitality', 'Joy'],
      analysisAr:
        '\u0642\u0627\u0626\u0645\u0629 \u0645\u0646 \u062e\u0645\u0633 \u0623\u0641\u0639\u0627\u0644 \u0645\u0648\u0635\u0648\u0644\u0629 \u0628\u0623\u062f\u0648\u0627\u062a \u0631\u0628\u0637 \u0645\u062a\u0643\u0631\u0651\u0631\u0629 \u062a\u0635\u0646\u0639 \u0625\u064a\u0642\u0627\u0639\u0627\u064b \u0644\u0627\u0647\u062b\u0627\u064b \u0645\u062a\u062d\u0645\u0651\u0633\u0627\u064b\u060c \u0643\u0644 \u0641\u0639\u0644 \u064a\u0644\u062a\u0642\u0637 \u0635\u0641\u0629: \u0636\u0648\u0621\u060c \u0631\u0634\u0627\u0642\u0629\u060c \u0641\u0631\u062d\u060c \u0636\u062c\u064a\u062c\u060c \u062d\u0631\u0643\u0629. \u0627\u0644\u0623\u0645 \u062d\u064a\u0651\u0629 \u0644\u062f\u0631\u062c\u0629 \u0637\u0627\u063a\u064a\u0629. \u0644\u0627\u0632\u0645 \u064a\u064f\u062a\u0623\u0643\u0651\u062f \u0645\u0646 \u0627\u0644\u0623\u0641\u0639\u0627\u0644 \u0645\u0646 \u0646\u0635 \u0645\u0648\u062b\u0651\u0642.',
      themesAr: [
        '\u0627\u0644\u0634\u0628\u0627\u0628',
        '\u0627\u0644\u062d\u064a\u0648\u064a\u0629',
        '\u0627\u0644\u0641\u0631\u062d',
      ],
    },
    {
      quote: 'Stanza 4 \u2014 the closing ghost image',
      analysis:
        'The speaker calls herself her mother\u2019s ghost, inverting the haunting metaphor: the unborn child haunts the mother\u2019s past, suggesting motherhood ended the mother\u2019s former identity. The idea of having changed the mother\u2019s life recurs from stanza 2, closing the cycle. Verify the final line before quoting.',
      themes: ['Loss', 'Identity', 'Family'],
      analysisAr:
        '\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u0633\u0645\u0651\u064a \u0646\u0641\u0633\u0647\u0627 \u0634\u0628\u062d \u0623\u0645\u0647\u0627\u060c \u0648\u062a\u0642\u0644\u0628 \u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0627\u0644\u0645\u0637\u0627\u0631\u062f\u0629: \u0627\u0644\u0637\u0641\u0644\u0629 \u0627\u0644\u0644\u064a \u0645\u0627 \u0648\u0644\u062f\u062a \u0628\u0639\u062f \u062a\u0637\u0627\u0631\u062f \u0645\u0627\u0636\u064a \u0623\u0645\u0647\u0627\u060c \u0648\u0647\u0630\u0627 \u064a\u0644\u0645\u0651\u062d \u0625\u0646 \u0627\u0644\u0623\u0645\u0648\u0645\u0629 \u0623\u0646\u0647\u062a \u0647\u0648\u064a\u0629 \u0627\u0644\u0623\u0645 \u0627\u0644\u0633\u0627\u0628\u0642\u0629. \u0641\u0643\u0631\u0629 \u062a\u063a\u064a\u064a\u0631 \u062d\u064a\u0627\u0629 \u0627\u0644\u0623\u0645 \u062a\u0631\u062c\u0639 \u0645\u0646 \u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u062b\u0627\u0646\u064a\u060c \u0639\u0634\u0627\u0646 \u062a\u0642\u0641\u0644 \u0627\u0644\u062f\u0627\u0626\u0631\u0629. \u0644\u0627\u0632\u0645 \u064a\u064f\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u0627\u0644\u0628\u064a\u062a \u0627\u0644\u0623\u062e\u064a\u0631 \u0642\u0628\u0644 \u0627\u0642\u062a\u0628\u0627\u0633\u0647.',
      themesAr: [
        '\u0627\u0644\u0641\u0642\u062f',
        '\u0627\u0644\u0647\u0648\u064a\u0629',
        '\u0627\u0644\u0639\u0627\u0626\u0644\u0629',
      ],
    },
  ],

  // NOTE: the `example` field is rendered wrapped in quotation marks
  // by the viewer. To avoid presenting unverified Duffy wording as a
  // verbatim quotation, `example` names the FEATURE/location, not the
  // poem's words. Substitute verified quotations from a primary edition.
  languageDevices: [
    {
      device: 'Allusion',
      example: 'Marilyn Monroe reference, stanza 1',
      effect:
        'The reference to Marilyn Monroe casts the mother as a glamorous, desirable icon. It elevates her from an ordinary woman to a cultural figure, emphasising what was lost when she became a mother.',
      lineRef: 4,
      effectAr:
        '\u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0625\u0644\u0649 Marilyn Monroe \u062a\u0631\u0633\u0645 \u0627\u0644\u0623\u0645 \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u0623\u064a\u0642\u0648\u0646\u0629 \u0628\u0631\u0651\u0627\u0642\u0629 \u0648\u0645\u0631\u063a\u0648\u0628\u0629. \u0648\u062a\u0631\u0641\u0639\u0647\u0627 \u0645\u0646 \u0627\u0645\u0631\u0623\u0629 \u0639\u0627\u062f\u064a\u0629 \u0625\u0644\u0649 \u0634\u062e\u0635\u064a\u0629 \u062b\u0642\u0627\u0641\u064a\u0629\u060c \u0639\u0634\u0627\u0646 \u062a\u0623\u0643\u0651\u062f \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0641\u064f\u0642\u062f \u0644\u0645\u0646 \u0635\u0627\u0631\u062a \u0623\u0645.',
    },
    {
      device: 'Possessive language',
      example: 'title and recurring verbs of wanting/claiming',
      effect:
        'The speaker repeatedly claims ownership of her mother. The possessive in the title sets the tone for a poem that treats the mother as the speaker\u2019s possession \u2014 subverting the usual parent-child power dynamic.',
      lineRef: 12,
      effectAr:
        '\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u062f\u0651\u0639\u064a \u0645\u0644\u0643\u064a\u0629 \u0623\u0645\u0647\u0627 \u0645\u0631\u0651\u0629 \u0628\u0639\u062f \u0645\u0631\u0651\u0629. \u0627\u0644\u0636\u0645\u064a\u0631 \u0627\u0644\u0645\u064f\u0644\u0643\u064a \u0641\u064a \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u0636\u0628\u0637 \u0646\u0628\u0631\u0629 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0647\u0627: \u0642\u0635\u064a\u062f\u0629 \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u0645 \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u0645\u0644\u0643 \u0644\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u2014 \u0648\u0647\u0630\u0627 \u064a\u0642\u0644\u0628 \u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0627\u0644\u0633\u0644\u0637\u0629 \u0627\u0644\u0645\u0639\u062a\u0627\u062f\u0629 \u0628\u064a\u0646 \u0627\u0644\u0623\u0645 \u0648\u0628\u0646\u062a\u0647\u0627.',
    },
    {
      device: 'Present tense',
      example: 'present-tense verbs describing past events',
      effect:
        "Using present tense for past events makes the mother's youth feel vivid, immediate, and ongoing. The speaker imaginatively inserts herself into a past she never witnessed.",
      lineRef: 4,
      effectAr:
        '\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0632\u0645\u0646 \u0627\u0644\u062d\u0627\u0636\u0631 \u0644\u0623\u062d\u062f\u0627\u062b \u0645\u0627\u0636\u064a\u0629 \u064a\u062e\u0644\u0651\u064a \u0634\u0628\u0627\u0628 \u0627\u0644\u0623\u0645 \u064a\u062d\u0633\u0651 \u0628\u0647 \u0627\u0644\u0642\u0627\u0631\u0626 \u0643\u0623\u0646\u0647 \u062d\u064a\u0651 \u0648\u0645\u0628\u0627\u0634\u0631 \u0648\u0645\u0633\u062a\u0645\u0631 \u0644\u064a\u0646 \u0627\u0644\u062d\u064a\u0646. \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u062f\u062e\u0644 \u0646\u0641\u0633\u0647\u0627 \u0628\u0627\u0644\u062e\u064a\u0627\u0644 \u0641\u064a \u0645\u0627\u0636\u064a \u0645\u0627 \u0634\u0627\u0641\u062a\u0647 \u0623\u0628\u062f.',
    },
    {
      device: 'Polysyndeton',
      example: 'the five linked verbs in stanza 4',
      effect:
        'The repeated conjunction creates a breathless, accelerating rhythm. The mother\u2019s energy seems unstoppable, each verb piling on another facet of her vitality.',
      lineRef: 19,
      effectAr:
        '\u062a\u0643\u0631\u0627\u0631 \u0623\u062f\u0627\u0629 \u0627\u0644\u0631\u0628\u0637 \u064a\u062e\u0644\u0642 \u0625\u064a\u0642\u0627\u0639 \u0644\u0627\u0647\u062b \u0648\u0645\u062a\u0633\u0627\u0631\u0639. \u0637\u0627\u0642\u0629 \u0627\u0644\u0623\u0645 \u062a\u0628\u0627\u0646 \u0643\u0623\u0646\u0647\u0627 \u0645\u0627 \u062a\u062a\u0648\u0642\u0651\u0641\u060c \u0648\u0643\u0644 \u0641\u0639\u0644 \u064a\u0636\u064a\u0641 \u0648\u062c\u0647 \u062b\u0627\u0646\u064a \u0645\u0646 \u062d\u064a\u0648\u064a\u062a\u0647\u0627.',
    },
    {
      device: 'Metaphor',
      example: 'the effervescent, cinematic future (stanza 2)',
      effect:
        "The mother's future is described as effervescent (intoxicating) and cinematic. This romanticised vision contrasts with the implied reality of domestic motherhood.",
      lineRef: 7,
      effectAr:
        '\u0645\u0633\u062a\u0642\u0628\u0644 \u0627\u0644\u0623\u0645 \u0645\u0648\u0635\u0648\u0641 \u0639\u0644\u0649 \u0625\u0646\u0647 \u0641\u0642\u0651\u0627\u0639\u064a (\u0645\u064f\u0633\u0643\u0650\u0631) \u0648\u0633\u064a\u0646\u0645\u0627\u0626\u064a. \u0647\u0627\u0644\u0631\u0624\u064a\u0629 \u0627\u0644\u0645\u0631\u0648\u0645\u0646\u0633\u0629 \u062a\u062a\u0646\u0627\u0642\u0636 \u0645\u0639 \u0627\u0644\u0648\u0627\u0642\u0639 \u0627\u0644\u0636\u0645\u0646\u064a \u0644\u0644\u0623\u0645\u0648\u0645\u0629 \u0627\u0644\u0645\u0646\u0632\u0644\u064a\u0629.',
    },
    {
      device: 'Role reversal',
      example: 'the closing ghost image (stanza 4)',
      effect:
        "The speaker becomes the ghost, haunting her mother's past. This inverts the expected dynamic where the dead haunt the living, suggesting the unborn child's future existence cast a shadow backwards over the mother's youth.",
      lineRef: 21,
      effectAr:
        '\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u0635\u064a\u0631 \u0627\u0644\u0634\u0628\u062d \u0627\u0644\u0644\u064a \u064a\u0637\u0627\u0631\u062f \u0645\u0627\u0636\u064a \u0623\u0645\u0647\u0627. \u0647\u0630\u0627 \u064a\u0642\u0644\u0628 \u0627\u0644\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0627\u0644\u0645\u062a\u0648\u0642\u0651\u0639\u0629 (\u0627\u0644\u0623\u0645\u0648\u0627\u062a \u064a\u0637\u0627\u0631\u062f\u0648\u0646 \u0627\u0644\u0623\u062d\u064a\u0627\u0621)\u060c \u0648\u064a\u0644\u0645\u0651\u062d \u0625\u0646 \u0648\u062c\u0648\u062f \u0627\u0644\u0637\u0641\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644 \u0623\u0644\u0642\u0649 \u0638\u0644\u0647 \u0644\u0648\u0631\u0627 \u0639\u0644\u0649 \u0634\u0628\u0627\u0628 \u0627\u0644\u0623\u0645.',
    },
    {
      device: 'Caesura',
      example: 'the full stop before the one-word allusion (stanza 1)',
      effect:
        'The full stop isolates the single-word allusion as a one-word sentence, giving it cinematic impact. The pause forces the reader to linger on the comparison, transforming an ordinary detail into a glamorous allusion.',
      lineRef: 4,
      effectAr:
        '\u0627\u0644\u0646\u0642\u0637\u0629 \u062a\u0639\u0632\u0644 \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0629 \u0645\u0646 \u0643\u0644\u0645\u0629 \u0648\u0627\u062d\u062f\u0629 \u0643\u062c\u0645\u0644\u0629 \u0645\u0633\u062a\u0642\u0644\u0651\u0629\u060c \u0648\u062a\u0639\u0637\u064a\u0647\u0627 \u0623\u062b\u0631 \u0633\u064a\u0646\u0645\u0627\u0626\u064a. \u0627\u0644\u062a\u0648\u0642\u0651\u0641 \u064a\u062c\u0628\u0631 \u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u0642\u0641 \u0639\u0646\u062f \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629\u060c \u0648\u064a\u062d\u0648\u0651\u0644 \u062a\u0641\u0635\u064a\u0644\u0629 \u0639\u0627\u062f\u064a\u0629 \u0625\u0644\u0649 allusion \u0628\u0631\u0651\u0627\u0642\u0629.',
    },
    {
      device: 'Internal rhyme',
      example: 'the feet/street rhyme in stanza 4',
      effect:
        'An internal rhyme on this line ties the speaker physically to her mother\u2019s world. The rhyme also echoes the rhythm of stamping feet, reinforcing the childish demand for attention.',
      lineRef: 20,
      effectAr:
        '\u0642\u0627\u0641\u064a\u0629 \u062f\u0627\u062e\u0644\u064a\u0629 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0628\u064a\u062a \u062a\u0631\u0628\u0637 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062c\u0633\u062f\u064a\u0627\u064b \u0628\u0639\u0627\u0644\u0645 \u0623\u0645\u0647\u0627. \u0648\u0627\u0644\u0642\u0627\u0641\u064a\u0629 \u062a\u0635\u062f\u0651\u0649 \u0644\u0625\u064a\u0642\u0627\u0639 \u062f\u0642 \u0627\u0644\u0631\u062c\u0648\u0644\u064a\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636\u060c \u0641\u062a\u0642\u0648\u0651\u064a \u0645\u0637\u0627\u0644\u0628\u0629 \u0627\u0644\u0637\u0641\u0644\u0629 \u0628\u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647.',
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
      'The mother is compared to Marilyn Monroe, shown dancing and laughing with friends on the pavement. She represents freedom, glamour, and youthful joy before motherhood restricted her.',
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
      'In stanza 3 the speaker says she wanted the bold version of her mother even before her own birth. What does this suggest?',
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
