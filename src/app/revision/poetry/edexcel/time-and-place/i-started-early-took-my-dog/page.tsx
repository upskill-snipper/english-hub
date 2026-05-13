'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
const dickinson: PoemData = {
  title: 'I started Early \u2013 Took my Dog \u2013',
  poet: 'Emily Dickinson',
  lines: [
    {
      text: 'I started Early \u2013 Took my Dog \u2013',
      annotations: [
        {
          type: 'Opening',
          note: 'A deceptively simple opening. Past tense, first person, casual companion (the dog). The line sets up a familiar scene before the poem turns surreal.',
          color: '#3b82f6',
        },
        {
          type: 'Dashes',
          note: 'Dickinson\u2019s famous dashes appear immediately. They create pauses inside the line, slowing the pace and giving each phrase its own breath.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And visited the Sea \u2013',
      annotations: [
        {
          type: 'Verb',
          note: '"Visited" is the verb you would use for a person, not a place. Dickinson treats the sea as if it were a friend or relative she has called on.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The sea is immediately personified. The whole poem will treat the ocean as a living, slightly threatening being.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'The Mermaids in the Basement',
      annotations: [
        {
          type: 'Imagery',
          note: 'The sea floor is reimagined as a "Basement". The domestic vocabulary makes the sea feel familiar but also surreal \u2014 a house with mermaids in the cellar.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Came out to look at me \u2013',
      annotations: [
        {
          type: 'Personification',
          note: 'The mermaids are curious, like neighbours looking out of a window. The speaker is the visitor; the sea is at home.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'And Frigates \u2013 in the Upper Floor',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'The metaphor of the sea as a house continues. Ships ("Frigates") are the upper floor, mermaids are the basement. The sea has architecture.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Extended Hempen Hands \u2013',
      annotations: [
        {
          type: 'Imagery',
          note: '"Hempen Hands" are ropes \u2014 the rigging of the ships. They reach out as if hands to greet the speaker. The animation of the inanimate is constant in this poem.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Presuming Me to be a Mouse \u2013',
      annotations: [
        {
          type: 'Self-image',
          note: 'The speaker is so small to the ships that they treat her as a mouse. The image suggests vulnerability and powerlessness in the face of the sea.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Aground \u2013 upon the Sands \u2013',
      annotations: [
        {
          type: 'Position',
          note: '"Aground" usually describes a stranded ship. Here it describes the speaker, reinforcing how the boundary between human and nautical is blurring.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'But no Man moved Me \u2013 till the Tide',
      annotations: [
        {
          type: 'Volta',
          note: 'The poem turns. Until now, only ships and mermaids have appeared. Now a "Tide" arrives \u2014 personified as masculine and active.',
          color: '#f59e0b',
        },
        {
          type: 'Capitalisation',
          note: 'Dickinson capitalises "Tide" and "Me", elevating both to the level of proper nouns. The encounter is staged like a meeting of two characters.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Went past my simple Shoe \u2013',
      annotations: [
        {
          type: 'Intimacy',
          note: 'The tide reaches the speaker\u2019s shoe. The contact is small and intimate \u2014 but also the beginning of something more invasive.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And past my Apron \u2013 and my Belt \u2013',
      annotations: [
        {
          type: 'Rising tide',
          note: 'The water rises in stages: shoe, apron, belt. Dickinson catalogues the encroachment with each dash signalling the next level of immersion.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And past my Bodice \u2013 too \u2013',
      annotations: [
        {
          type: 'Sexual undertone',
          note: 'The "Bodice" is the upper part of a woman\u2019s dress. The sea reaching past it carries an unmistakable note of sexual threat. "Too" sounds almost shocked \u2014 as if even she did not expect it.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'Dickinson uses the rising tide to suggest a dangerous, unwanted intimacy. The poem becomes uneasy here.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'And made as He would eat me up \u2013',
      annotations: [
        {
          type: 'Threat',
          note: 'The sea is now actively threatening. "Eat me up" makes the tide a predator with a mouth. The pronoun "He" continues the masculine personification.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'As wholly as a Dew',
      annotations: [
        {
          type: 'Simile',
          note: 'The speaker imagines being absorbed as completely as morning dew is taken up by a flower. The simile makes total annihilation sound delicate \u2014 a disturbing combination.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Upon a Dandelion\u2019s Sleeve \u2013',
      annotations: [
        {
          type: 'Domestic image',
          note: 'A dandelion is given a "Sleeve" \u2014 another piece of clothing. The natural world is constantly being domesticated and humanised in Dickinson\u2019s vocabulary.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And then \u2013 I started \u2013 too \u2013',
      annotations: [
        {
          type: 'Echo',
          note: '"Started" echoes the very first line ("I started Early"). The first "started" meant set out; this one means startled. The same word, two meanings, and the poem now has a current of fear.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'And He \u2013 He followed \u2013 close behind \u2013',
      annotations: [
        {
          type: 'Pursuit',
          note: 'The repeated "He \u2013 He" stutters with anxiety. The sea is no longer merely meeting the speaker \u2014 it is following her. The encounter has become a chase.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The poem\u2019s most disturbing line. The personified sea behaves like a predatory man following a woman home.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I felt His Silver Heel',
      annotations: [
        {
          type: 'Imagery',
          note: 'The sea\u2019s "Silver Heel" turns waves into the heel of a boot. The image is at once beautiful (silver) and threatening (heel about to step on her).',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Upon my Ankle \u2013 Then my Shoes',
      annotations: [
        {
          type: 'Reverse',
          note: 'The waves are now coming up from behind. The pursuit follows the same path the tide rose earlier, in reverse \u2014 ankle, shoes \u2014 mirroring the earlier ascent.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Would overflow with Pearl \u2013',
      annotations: [
        {
          type: 'Beauty in danger',
          note: '"Overflow with Pearl" turns the sea foam into precious jewels. Even at its most threatening, the sea is beautiful. Dickinson refuses to make it simply ugly or evil.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'Until We met the Solid Town \u2013',
      annotations: [
        {
          type: 'Boundary',
          note: 'Civilisation \u2014 the "Solid Town" \u2014 appears as the boundary between sea and land. The town is "Solid" in contrast to the fluid sea.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'No One He seemed to know \u2013',
      annotations: [
        {
          type: 'Outsider',
          note: 'The sea has no acquaintances in the town. The wild element is suddenly out of place in the human world. The pursuit ends because the pursuer no longer belongs.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And bowing \u2013 with a Mighty look \u2013',
      annotations: [
        {
          type: 'Dignity',
          note: 'The sea bows in farewell, like a courtly visitor who knows when to leave. The retreat is dignified \u2014 not a defeat, just a withdrawal.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'At me \u2013 The Sea withdrew \u2013',
      annotations: [
        {
          type: 'Closing',
          note: 'The sea pulls back. The encounter is over. The poem ends without commentary \u2014 the speaker is left to decide for herself what just happened.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The understated closing. The drama is over but unresolved \u2014 the speaker is unhurt yet altered by the meeting.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Emily Dickinson (1830&ndash;1886)</h3>
    <p>Dickinson was an American poet who lived almost her entire life in her family\u2019s house in Amherst, Massachusetts. She wrote nearly 1,800 poems, most of them never published in her lifetime. Her work is marked by short lines, distinctive dashes, unusual capitalisation and a mind interested in death, nature, faith and the inner life.</p>

    <h3>Publication</h3>
    <p>"I started Early \u2013 Took my Dog \u2013" was written around 1862 and published after Dickinson\u2019s death. Her early editors smoothed out her dashes and capitalisation; modern editions restore them, which matters because the punctuation is part of the meaning.</p>

    <h3>Dickinson and the sea</h3>
    <p>Dickinson rarely travelled and almost certainly never saw the ocean herself. The poem is therefore an imagined visit, not a record of one. The sea in her work tends to stand for huge, uncontrollable forces \u2014 sometimes God, sometimes death, sometimes desire.</p>

    <h3>Reading the encounter</h3>
    <p>Many critics read the poem as a coded encounter with male sexuality. The rising tide moves up the speaker\u2019s body in unmistakably bodily stages, the sea is personified as "He", and the pursuit is intimate and threatening. Other readers see it as an encounter with the sublime \u2014 with overwhelming natural force \u2014 or with death itself.</p>

    <h3>Time and Place in this poem</h3>
    <p>For the Edexcel Time and Place cluster, this poem captures a single visit to a single location. The whole drama happens in one walk \u2014 from town to shore and back \u2014 and the place itself becomes a character. The sea has agency, identity and intent. Place is not just background; it is the second figure in a duet.</p>
  `,

  contextAr: `
    <h3>Emily Dickinson (1830&ndash;1886)</h3>
    <p><strong>Emily Dickinson</strong> \u0634\u0627\u0639\u0631\u0629 \u0623\u0645\u0631\u064a\u0643\u064a\u0629\u060c \u0639\u0627\u0634\u062a \u0645\u0639\u0638\u0645 \u062d\u064a\u0627\u062a\u0647\u0627 \u0641\u064a \u0628\u064a\u062a \u0623\u0647\u0644\u0647\u0627 \u0641\u064a Amherst, Massachusetts. \u0643\u062a\u0628\u062a \u0645\u0627 \u064a\u0642\u0627\u0631\u0628 1,800 \u0642\u0635\u064a\u062f\u0629\u060c \u0623\u063a\u0644\u0628\u0647\u0627 \u0645\u0627 \u0627\u0646\u062a\u0634\u0631\u062a \u0641\u064a \u062d\u064a\u0627\u062a\u0647\u0627. \u0634\u0639\u0631\u0647\u0627 \u064a\u062a\u0645\u064a\u0651\u0632 \u0628\u0623\u0628\u064a\u0627\u062a \u0642\u0635\u064a\u0631\u0629\u060c \u0648\u0639\u0644\u0627\u0645\u0627\u062a \u0634\u0631\u0637\u0629 (dashes) \u0630\u0627\u062a \u0628\u0635\u0645\u0629 \u062e\u0627\u0635\u0629\u060c \u0648\u0643\u0627\u067e\u062a\u0644\u0629 (capitalisation) \u063a\u064a\u0631 \u0645\u0639\u062a\u0627\u062f\u0629\u060c \u0648\u0630\u0647\u0646 \u0645\u0634\u063a\u0648\u0644 \u0628\u0627\u0644\u0645\u0648\u062a \u0648\u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0648\u0627\u0644\u0625\u064a\u0645\u0627\u0646 \u0648\u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629.</p>

    <h3>\u0627\u0644\u0646\u0634\u0631</h3>
    <p>\u0642\u0635\u064a\u062f\u0629 "I started Early \u2013 Took my Dog \u2013" \u0643\u064f\u062a\u0628\u062a \u062a\u0642\u0631\u064a\u0628\u0627\u064b \u0633\u0646\u0629 1862 \u0648\u0627\u0646\u062a\u0634\u0631\u062a \u0628\u0639\u062f \u0648\u0641\u0627\u0629 Dickinson. \u0648\u0645\u062d\u0631\u0651\u0631\u0648\u0647\u0627 \u0627\u0644\u0623\u0648\u0627\u0626\u0644 \u0644\u0645\u0651\u0633\u0648\u0627 \u0627\u0644\u0634\u0631\u0637\u0627\u062a \u0648\u0627\u0644\u0640capitalisation \u0648\u062e\u0641\u0651\u0641\u0648\u0647\u0627\u061b \u0648\u0627\u0644\u0637\u0628\u0639\u0627\u062a \u0627\u0644\u062d\u062f\u064a\u062b\u0629 \u062a\u0631\u062c\u0639\u0647\u0627 \u0644\u0623\u0635\u0644\u0647\u0627\u060c \u0648\u0647\u0630\u0627 \u0627\u0644\u0634\u064a \u0645\u0647\u0645 \u0644\u0623\u0646 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0631\u0642\u064a\u0645 \u062c\u0632\u0621 \u0645\u0646 \u0627\u0644\u0645\u0639\u0646\u0649.</p>

    <h3>Dickinson \u0648\u0627\u0644\u0628\u062d\u0631</h3>
    <p>Dickinson \u0642\u0644\u0651\u0645\u0627 \u0633\u0627\u0641\u0631\u062a\u060c \u0648\u0628\u0627\u0644\u062a\u0623\u0643\u064a\u062f \u0645\u0627 \u0634\u0627\u0641\u062a \u0627\u0644\u0645\u062d\u064a\u0637 \u0628\u0646\u0641\u0633\u0647\u0627 \u0623\u0628\u062f\u0627\u064b. \u0639\u0634\u0627\u0646 \u0643\u0630\u0627\u060c \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0632\u064a\u0627\u0631\u0629 \u0645\u062a\u062e\u064a\u0651\u0644\u0629\u060c \u0645\u0648 \u0633\u062c\u0644 \u0644\u0632\u064a\u0627\u0631\u0629 \u062d\u0642\u064a\u0642\u064a\u0629. \u0648\u0627\u0644\u0628\u062d\u0631 \u0641\u064a \u0634\u0639\u0631\u0647\u0627 \u0639\u0627\u062f\u0629 \u064a\u0631\u0645\u0632 \u0644\u0642\u0648\u0649 \u0647\u0627\u0626\u0644\u0629 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0633\u064a\u0637\u0631\u0629 \u0639\u0644\u064a\u0647\u0627 \u2014 \u0645\u0631\u0629 \u0627\u0644\u0644\u0647\u060c \u0648\u0645\u0631\u0629 \u0627\u0644\u0645\u0648\u062a\u060c \u0648\u0645\u0631\u0629 \u0627\u0644\u0631\u063a\u0628\u0629.</p>

    <h3>\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0644\u0642\u0627\u0621</h3>
    <p>\u0648\u0627\u064a\u062f \u0646\u0642\u0651\u0627\u062f \u064a\u0642\u0631\u0624\u0648\u0646 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u0644\u0642\u0627\u0621 \u0645\u0634\u0641\u0651\u0631 \u0645\u0639 \u0627\u0644\u0630\u0643\u0648\u0631\u0629 \u0627\u0644\u062c\u0646\u0633\u064a\u0629. \u0627\u0644\u0645\u062f\u0651 \u0627\u0644\u0635\u0627\u0639\u062f \u064a\u062a\u062d\u0631\u0651\u0643 \u0639\u0644\u0649 \u062c\u0633\u062f \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0628\u0645\u0631\u0627\u062d\u0644 \u062c\u0633\u062f\u064a\u0629 \u0645\u0627 \u064a\u0642\u062f\u0631 \u0627\u0644\u0648\u0627\u062d\u062f \u064a\u0646\u0643\u0631\u0647\u0627\u060c \u0648\u0627\u0644\u0628\u062d\u0631 \u0645\u0634\u062e\u0651\u0635 \u0628\u0636\u0645\u064a\u0631 "He"\u060c \u0648\u0627\u0644\u0645\u0637\u0627\u0631\u062f\u0629 \u062d\u0645\u064a\u0645\u064a\u0629 \u0648\u0645\u0647\u062f\u0651\u062f\u0629. \u0648\u0642\u0631\u0651\u0627\u0621 \u0622\u062e\u0631\u064a\u0646 \u064a\u0634\u0648\u0641\u0648\u0646 \u0627\u0644\u0644\u0642\u0627\u0621 \u0643\u0644\u0642\u0627\u0621 \u0645\u0639 \u0627\u0644\u0633\u0627\u0645\u064a (sublime) \u2014 \u0645\u0639 \u0642\u0648\u0651\u0629 \u0637\u0628\u064a\u0639\u064a\u0629 \u0643\u0627\u0633\u062d\u0629 \u2014 \u0623\u0648 \u0645\u0639 \u0627\u0644\u0645\u0648\u062a \u0646\u0641\u0633\u0647.</p>

    <h3>\u0627\u0644\u0632\u0645\u0627\u0646 \u0648\u0627\u0644\u0645\u0643\u0627\u0646 \u0641\u064a \u0647\u0627\u0644\u0642\u0635\u064a\u062f\u0629</h3>
    <p>\u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0645\u062c\u0645\u0648\u0639\u0629 Edexcel Time and Place\u060c \u0647\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0644\u062a\u0642\u0637 \u0632\u064a\u0627\u0631\u0629 \u0648\u062d\u062f\u0629 \u0644\u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f. \u0643\u0644 \u0627\u0644\u062f\u0631\u0627\u0645\u0627 \u062a\u0635\u064a\u0631 \u0641\u064a \u0645\u0634\u064a\u0629 \u0648\u062d\u062f\u0629 \u2014 \u0645\u0646 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0625\u0644\u0649 \u0627\u0644\u0634\u0627\u0637\u0626 \u0648\u0631\u062c\u0648\u0639 \u2014 \u0648\u0627\u0644\u0645\u0643\u0627\u0646 \u0646\u0641\u0633\u0647 \u064a\u0635\u064a\u0631 \u0634\u062e\u0635\u064a\u0629. \u0627\u0644\u0628\u062d\u0631 \u0639\u0646\u062f\u0647 \u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u0647\u0648\u064a\u0629 \u0648\u0642\u0635\u062f. \u0627\u0644\u0645\u0643\u0627\u0646 \u0645\u0648 \u062e\u0644\u0641\u064a\u0629 \u0641\u0642\u0637\u060c \u0647\u0648 \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0627\u0644\u062b\u0627\u0646\u064a\u0629 \u0641\u064a \u062b\u0646\u0627\u0626\u064a.</p>
  `,

  summary: `Stanza 1: The speaker sets out early one morning with her dog and "visits" the sea, as if calling on a friend. The sea is described as a house: mermaids live in the basement, and they come to look at the visitor.

Stanza 2: Frigates (warships) live on the upper floor of this sea-house, and their ropes reach out like hands. They mistake the speaker for a stranded mouse on the sand \u2014 she is small and vulnerable in the face of their bulk.

Stanza 3: The tide arrives. It rises slowly up the speaker\u2019s body \u2014 past her shoe, her apron, her belt, her bodice. The encroachment is intimate, even bodily. Each dash marks another stage of the rising water.

Stanza 4: The sea seems about to consume her completely, like dew absorbed by a flower. The speaker is "started" \u2014 startled \u2014 echoing the verb she used in the very first line, but with a new and frightened meaning.

Stanza 5: The sea now follows the speaker, pursuing her closely. She feels his "Silver Heel" on her ankle. Even in pursuit, the foam is described as pearl \u2014 beautiful and dangerous at once.

Stanza 6: The chase ends when they reach the "Solid Town" \u2014 the human, civilised world. The sea recognises no one in the town and, with a "Mighty look", bows to her and withdraws.

Overall meaning: The poem dramatises an encounter between a human speaker and an immense, masculine, partly threatening natural force. The sea behaves like a person \u2014 curious, then intimate, then pursuing, then dignified in retreat. The encounter is open to many readings (sexual, mortal, sublime) but the poem itself remains poised and quiet. Place becomes a character, and the speaker is changed by meeting it.`,

  summaryAr: `\u0627\u0644\u0645\u0642\u0637\u0639 1: \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u0637\u0644\u0639 \u0645\u0646 \u0628\u064a\u062a\u0647\u0627 \u0635\u0628\u062d \u0628\u062f\u0631\u064a \u0648\u0645\u0639\u0647\u0627 \u0643\u0644\u0628\u0647\u0627 \u0648"\u062a\u0632\u0648\u0631" (visits) \u0627\u0644\u0628\u062d\u0631\u060c \u0643\u0623\u0646\u0647\u0627 \u062f\u0627\u0634\u0651\u0629 \u0639\u0644\u0649 \u0635\u0627\u062d\u0628. \u0648\u0627\u0644\u0628\u062d\u0631 \u064a\u064f\u0648\u0635\u0641 \u0643\u0623\u0646\u0647 \u0628\u064a\u062a: \u0627\u0644\u0640Mermaids \u0633\u0627\u0643\u0646\u064a\u0646 \u0641\u064a \u0627\u0644\u0640Basement (\u0627\u0644\u0633\u0631\u062f\u0627\u0628)\u060c \u0648\u0637\u0627\u0644\u0639\u064a\u0646 \u064a\u0637\u0627\u0644\u0639\u0648\u0646 \u0627\u0644\u0632\u0627\u0626\u0631\u0629.

\u0627\u0644\u0645\u0642\u0637\u0639 2: \u0627\u0644\u0640Frigates (\u0633\u0641\u0646 \u062d\u0631\u0628\u064a\u0629) \u062a\u0639\u064a\u0634 \u0641\u064a \u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0639\u0644\u0648\u064a \u0645\u0646 \u0628\u064a\u062a \u0627\u0644\u0628\u062d\u0631\u060c \u0648\u062d\u0628\u0627\u0644\u0647\u0627 \u062a\u0645\u062a\u062f\u0651 \u0643\u0623\u0646\u0647\u0627 \u0623\u064a\u0627\u062f\u064a. \u0648\u062a\u0641\u062a\u0631\u0636 \u0625\u0646 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0641\u0623\u0631\u0629 (mouse) \u062c\u0627\u0646\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u0631\u0645\u0644 \u2014 \u0647\u064a \u0635\u063a\u064a\u0631\u0629 \u0648\u0647\u0634\u0651\u0629 \u0642\u062f\u0651\u0627\u0645 \u0636\u062e\u0627\u0645\u062a\u0647\u0627.

\u0627\u0644\u0645\u0642\u0637\u0639 3: \u0627\u0644\u0645\u062f\u0651 \u064a\u0635\u0644. \u064a\u0631\u062a\u0641\u0639 \u0634\u0648\u064a\u0651 \u0634\u0648\u064a\u0651 \u0639\u0644\u0649 \u062c\u0633\u062f\u0647\u0627 \u2014 \u064a\u062a\u062c\u0627\u0648\u0632 \u0627\u0644\u062c\u0632\u0645\u0629 (shoe)\u060c \u0648\u0627\u0644\u0645\u0631\u064a\u0648\u0644 (apron)\u060c \u0648\u0627\u0644\u062d\u0632\u0627\u0645 (belt)\u060c \u0648\u0627\u0644\u0640bodice. \u0627\u0644\u0632\u062d\u0641 \u062d\u0645\u064a\u0645\u064a \u0628\u0644 \u0648\u062c\u0633\u062f\u064a. \u0648\u0643\u0644 \u0634\u0631\u0637\u0629 (dash) \u062a\u0639\u0644\u0651\u0645 \u0639\u0644\u0649 \u0645\u0631\u062d\u0644\u0629 \u062c\u062f\u064a\u062f\u0629 \u0645\u0646 \u0627\u0631\u062a\u0641\u0627\u0639 \u0627\u0644\u0645\u0627\u0621.

\u0627\u0644\u0645\u0642\u0637\u0639 4: \u0627\u0644\u0628\u062d\u0631 \u064a\u0628\u062f\u0648 \u0625\u0646\u0647 \u0642\u0627\u0628\u0644 \u064a\u0628\u062a\u0644\u0639\u0647\u0627 \u0628\u0627\u0644\u0643\u0627\u0645\u0644\u060c \u0643\u0623\u0646\u0647 \u0646\u062f\u0649 (dew) \u062a\u0645\u062a\u0635\u0651\u0647 \u0632\u0647\u0631\u0629. \u0648\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 "started" \u2014 \u0627\u0646\u0641\u0632\u0639\u062a \u2014 \u0648\u0647\u0630\u0627 \u0627\u0644\u0641\u0639\u0644 \u064a\u0631\u062f\u0651\u062f \u0646\u0641\u0633 \u0627\u0644\u0641\u0639\u0644 \u0627\u0644\u0644\u064a \u0627\u0633\u062a\u062e\u062f\u0645\u062a\u0647 \u0641\u064a \u0623\u0648\u0644 \u0628\u064a\u062a \u0628\u0627\u0644\u0642\u0635\u064a\u062f\u0629\u060c \u0628\u0633 \u0627\u0644\u0645\u0639\u0646\u0649 \u0627\u0644\u062d\u064a\u0646 \u062c\u062f\u064a\u062f \u0648\u0645\u062e\u064a\u0641.

\u0627\u0644\u0645\u0642\u0637\u0639 5: \u0627\u0644\u0628\u062d\u0631 \u0627\u0644\u062d\u064a\u0646 \u064a\u0644\u062d\u0642\u0647\u0627\u060c \u064a\u0637\u0627\u0631\u062f\u0647\u0627 \u0645\u0646 \u0648\u0631\u0627 \u0642\u0631\u064a\u0628\u0627\u064b \u0645\u0646\u0647\u0627. \u0648\u062a\u062d\u0633\u0651 \u0628\u0640"Silver Heel" (\u0643\u0639\u0628\u0647 \u0627\u0644\u0641\u0636\u064a) \u0639\u0644\u0649 \u0643\u0627\u062d\u0644\u0647\u0627. \u0648\u062d\u062a\u0649 \u0648\u0647\u0648 \u064a\u0637\u0627\u0631\u062f\u0647\u0627\u060c \u0627\u0644\u0632\u0628\u062f \u0645\u0648\u0635\u0648\u0641 \u0643\u0627\u0644\u0644\u0624\u0644\u0624 \u2014 \u062c\u0645\u064a\u0644 \u0648\u062e\u0637\u0631 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a.

\u0627\u0644\u0645\u0642\u0637\u0639 6: \u0627\u0644\u0645\u0637\u0627\u0631\u062f\u0629 \u062a\u0646\u062a\u0647\u064a \u0644\u0645\u0651\u0627 \u064a\u0648\u0635\u0644\u0648\u0646 "Solid Town" \u2014 \u0627\u0644\u0639\u0627\u0644\u0645 \u0627\u0644\u0628\u0634\u0631\u064a \u0627\u0644\u0645\u062a\u0645\u062f\u0651\u0646. \u0627\u0644\u0628\u062d\u0631 \u0645\u0627 \u064a\u0639\u0631\u0641 \u0623\u062d\u062f \u0641\u064a \u0647\u0627\u0644\u0628\u0644\u062f\u0629\u060c \u0648"\u0628\u0646\u0638\u0631\u0629 \u0645\u0647\u064a\u0628\u0629" (Mighty look) \u064a\u0646\u062d\u0646\u064a \u0644\u0647\u0627 \u0648\u064a\u0646\u0633\u062d\u0628.

\u0627\u0644\u0645\u0639\u0646\u0649 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a: \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u062c\u0633\u0651\u062f \u0644\u0642\u0627\u0621 \u0628\u064a\u0646 \u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0628\u0634\u0631\u064a\u0629 \u0648\u0642\u0648\u0651\u0629 \u0637\u0628\u064a\u0639\u064a\u0629 \u0647\u0627\u0626\u0644\u0629\u060c \u0630\u0643\u0648\u0631\u064a\u0629\u060c \u0648\u0645\u0647\u062f\u0651\u062f\u0629 \u0628\u0639\u0636 \u0627\u0644\u0634\u064a. \u0627\u0644\u0628\u062d\u0631 \u064a\u062a\u0635\u0631\u0651\u0641 \u0645\u062b\u0644 \u0634\u062e\u0635 \u2014 \u0641\u0636\u0648\u0644\u064a\u060c \u062b\u0645 \u062d\u0645\u064a\u0645\u064a\u060c \u062b\u0645 \u0645\u0637\u0627\u0631\u0650\u062f\u060c \u062b\u0645 \u0648\u0642\u0648\u0631 \u0648\u0647\u0648 \u064a\u0646\u0633\u062d\u0628. \u0627\u0644\u0644\u0642\u0627\u0621 \u0645\u0641\u062a\u0648\u062d \u0644\u0642\u0631\u0627\u0621\u0627\u062a \u0648\u0627\u064a\u062f\u0629 (\u062c\u0646\u0633\u064a\u0629\u060c \u0639\u0646 \u0627\u0644\u0645\u0648\u062a\u060c \u0639\u0646 \u0627\u0644\u0633\u0627\u0645\u064a) \u0644\u0643\u0646 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0646\u0641\u0633\u0647\u0627 \u062a\u0628\u0642\u0649 \u0645\u062a\u0651\u0632\u0646\u0629 \u0648\u0647\u0627\u062f\u0626\u0629. \u0627\u0644\u0645\u0643\u0627\u0646 \u064a\u0635\u064a\u0631 \u0634\u062e\u0635\u064a\u0629\u060c \u0648\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u062a\u063a\u064a\u0651\u0631 \u0628\u0644\u0642\u0627\u0626\u0647\u0627 \u0645\u0639\u0647.`,

  formAndStructure: `Form: Six four-line stanzas (quatrains), with an ABCB rhyme scheme and a ballad-like rhythm. The form is small and tight, which makes the strangeness of the content feel even more disturbing.

Metre: Common metre \u2014 alternating four-stress and three-stress lines (8.6.8.6 syllables, roughly). This is the metre of hymns and ballads. Dickinson often used hymn metre for poems about subjects far stranger than hymns.

Dashes: The dashes are not punctuation in the ordinary sense. They create pauses, pacing, hesitations and emphasis. Reading the poem out loud, every dash is a tiny breath. The dashes give the poem its strange, halting voice.

Capitalisation: Dickinson capitalises certain nouns \u2014 Tide, Sea, Bodice, Pearl, Solid Town \u2014 to give them weight and personality. Capitalisation turns ordinary objects into characters or symbols.

Six-stage structure: Each stanza is one stage of the encounter: arrival (1), greeting (2), the rising tide (3), the threat (4), the pursuit (5), the withdrawal (6). The narrative is tight and almost cinematic.

Echo and reversal: The verb "started" appears in stanza 1 (set out) and stanza 4 (startled). The water rises up the body in stanza 3 and chases up the body again in stanza 5. These echoes create a sense of inevitability and uncanny mirroring.

Personification: The whole poem rests on the sustained personification of the sea as "He". Every stanza adds another human attribute \u2014 the sea has a basement, a heel, a bow, a "Mighty look".`,

  formAndStructureAr: `\u0627\u0644\u0634\u0643\u0644: \u0633\u062a\u0629 \u0645\u0642\u0627\u0637\u0639\u060c \u0643\u0644 \u0645\u0642\u0637\u0639 \u0645\u0646 \u0623\u0631\u0628\u0639\u0629 \u0623\u0628\u064a\u0627\u062a (quatrains)\u060c \u0628\u0646\u0638\u0627\u0645 \u0642\u0627\u0641\u064a\u0629 ABCB \u0648\u0625\u064a\u0642\u0627\u0639 \u0634\u0628\u0647 \u0628\u0627\u0644\u0627\u062f (ballad). \u0627\u0644\u0634\u0643\u0644 \u0635\u063a\u064a\u0631 \u0648\u0645\u062d\u0643\u0645\u060c \u0648\u0647\u0630\u0627 \u064a\u062e\u0644\u0651\u064a \u063a\u0631\u0627\u0628\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u062a\u062d\u0633\u0651\u0647\u0627 \u0623\u0643\u062b\u0631 \u0627\u0636\u0637\u0631\u0627\u0628\u0627\u064b.

Metre: common metre \u2014 \u0623\u0628\u064a\u0627\u062a \u062a\u062a\u0646\u0627\u0648\u0628 \u0628\u064a\u0646 \u0623\u0631\u0628\u0639 \u0646\u0628\u0631\u0627\u062a \u0648\u062b\u0644\u0627\u062b \u0646\u0628\u0631\u0627\u062a (\u062a\u0642\u0631\u064a\u0628\u0627\u064b 8.6.8.6 \u0645\u0642\u0637\u0639). \u0647\u0630\u0627 \u0648\u0632\u0646 \u0627\u0644\u062a\u0631\u0627\u062a\u064a\u0644 \u0648\u0627\u0644\u0640ballads. \u0648Dickinson \u0643\u0627\u0646\u062a \u0643\u062b\u064a\u0631 \u062a\u0633\u062a\u062e\u062f\u0645 \u0648\u0632\u0646 \u0627\u0644\u062a\u0631\u062a\u064a\u0644\u0629 (hymn metre) \u0644\u0642\u0635\u0627\u0626\u062f \u0645\u0648\u0636\u0648\u0639\u0647\u0627 \u0623\u063a\u0631\u0628 \u0645\u0646 \u0627\u0644\u062a\u0631\u0627\u062a\u064a\u0644.

\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u0634\u0631\u0637\u0629 (Dashes): \u0627\u0644\u0634\u0631\u0637\u0627\u062a \u0641\u064a \u0634\u0639\u0631\u0647\u0627 \u0645\u0648 \u0639\u0644\u0627\u0645\u0627\u062a \u062a\u0631\u0642\u064a\u0645 \u0628\u0645\u0639\u0646\u0627\u0647\u0627 \u0627\u0644\u0639\u0627\u062f\u064a. \u062a\u062e\u0644\u0642 \u0648\u0642\u0641\u0627\u062a\u060c \u0648\u0625\u064a\u0642\u0627\u0639\u060c \u0648\u062a\u0631\u062f\u0651\u062f\u0627\u064b\u060c \u0648\u062a\u0623\u0643\u064a\u062f\u0627\u064b. \u0648\u0644\u0645\u0651\u0627 \u062a\u0642\u0631\u0623 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0628\u0635\u0648\u062a \u0639\u0627\u0644\u064d\u060c \u0643\u0644 \u0634\u0631\u0637\u0629 \u0647\u064a \u0646\u0641\u064e\u0633 \u0642\u0635\u064a\u0631. \u0627\u0644\u0634\u0631\u0637\u0627\u062a \u0647\u064a \u0627\u0644\u0644\u064a \u062a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0635\u0648\u062a\u0647\u0627 \u0627\u0644\u063a\u0631\u064a\u0628 \u0627\u0644\u0645\u062a\u0642\u0637\u0651\u0639.

Capitalisation: Dickinson \u062a\u0643\u0627\u067e\u062a\u0644 (\u062a\u0643\u062a\u0628 \u0628\u0627\u0644\u062d\u0631\u0641 \u0627\u0644\u0643\u0628\u064a\u0631) \u0623\u0633\u0645\u0627\u0621 \u0645\u0639\u064a\u0651\u0646\u0629 \u2014 Tide, Sea, Bodice, Pearl, Solid Town \u2014 \u0639\u0634\u0627\u0646 \u062a\u0639\u0637\u064a\u0647\u0627 \u062b\u0642\u0644\u0627\u064b \u0648\u0634\u062e\u0635\u064a\u0629. \u0627\u0644\u0640capitalisation \u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u0627\u0644\u0639\u0627\u062f\u064a\u0629 \u0625\u0644\u0649 \u0634\u062e\u0635\u064a\u0627\u062a \u0623\u0648 \u0631\u0645\u0648\u0632.

\u0627\u0644\u0628\u0646\u064a\u0629 \u0630\u0627\u062a \u0627\u0644\u0633\u062a \u0645\u0631\u0627\u062d\u0644: \u0643\u0644 \u0645\u0642\u0637\u0639 \u0647\u0648 \u0645\u0631\u062d\u0644\u0629 \u0645\u0646 \u0627\u0644\u0644\u0642\u0627\u0621: \u0627\u0644\u0648\u0635\u0648\u0644 (1)\u060c \u0627\u0644\u0633\u0644\u0627\u0645 (2)\u060c \u0635\u0639\u0648\u062f \u0627\u0644\u0645\u062f\u0651 (3)\u060c \u0627\u0644\u062a\u0647\u062f\u064a\u062f (4)\u060c \u0627\u0644\u0645\u0637\u0627\u0631\u062f\u0629 (5)\u060c \u0627\u0644\u0627\u0646\u0633\u062d\u0627\u0628 (6). \u0648\u0627\u0644\u0633\u0631\u062f \u0645\u062d\u0643\u0645 \u0648\u0634\u0628\u0647 \u0633\u064a\u0646\u0645\u0627\u0626\u064a.

\u0627\u0644\u062a\u0631\u062f\u0651\u062f \u0648\u0627\u0644\u0627\u0646\u0639\u0643\u0627\u0633 (Echo and reversal): \u0627\u0644\u0641\u0639\u0644 "started" \u064a\u0638\u0647\u0631 \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 1 (\u0637\u0644\u0639\u062a) \u0648\u0627\u0644\u0645\u0642\u0637\u0639 4 (\u0627\u0646\u0641\u0632\u0639\u062a). \u0648\u0627\u0644\u0645\u0627\u0621 \u064a\u0637\u0644\u0639 \u0639\u0644\u0649 \u0627\u0644\u062c\u0633\u062f \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 3 \u0648\u064a\u0644\u0627\u062d\u0642\u0647 \u0639\u0644\u0649 \u0627\u0644\u062c\u0633\u062f \u0645\u0631\u0629 \u062b\u0627\u0646\u064a\u0629 \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 5. \u0647\u0627\u0644\u0623\u0635\u062f\u0627\u0621 \u062a\u062e\u0644\u0642 \u0625\u062d\u0633\u0627\u0633\u0627\u064b \u0628\u0627\u0644\u062d\u062a\u0645\u064a\u0629 \u0648\u0627\u0646\u0639\u0643\u0627\u0633 \u063a\u0631\u064a\u0628.

\u0627\u0644\u062a\u0634\u062e\u064a\u0635 (Personification): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0651\u0647\u0627 \u062a\u0642\u0648\u0645 \u0639\u0644\u0649 \u062a\u0634\u062e\u064a\u0635 \u0645\u0645\u062a\u062f\u0651 \u0644\u0644\u0628\u062d\u0631 \u0628\u0636\u0645\u064a\u0631 "He". \u0643\u0644 \u0645\u0642\u0637\u0639 \u064a\u0636\u064a\u0641 \u0635\u0641\u0629 \u0628\u0634\u0631\u064a\u0629 \u062c\u062f\u064a\u062f\u0629 \u2014 \u0627\u0644\u0628\u062d\u0631 \u0639\u0646\u062f\u0647 \u0633\u0631\u062f\u0627\u0628\u060c \u0643\u0639\u0628\u060c \u0627\u0646\u062d\u0646\u0627\u0621\u060c \u0648"Mighty look".`,

  keyQuotes: [
    {
      quote: 'I started Early \u2013 Took my Dog \u2013 / And visited the Sea',
      analysis:
        'The opening makes a wild encounter sound like a casual social call. "Visited" is the verb you would use for a friend, immediately personifying the sea. The deceptively domestic tone is what makes the strangeness of the rest of the poem possible.',
      themes: ['Place', 'Personification', 'Encounter'],
      analysisAr:
        '\u0627\u0644\u0627\u0641\u062a\u062a\u0627\u062d\u064a\u0629 \u062a\u062e\u0644\u0651\u064a \u0627\u0644\u0644\u0642\u0627\u0621 \u0627\u0644\u0628\u0631\u064a \u064a\u062d\u0633\u0651 \u0643\u0623\u0646\u0647 \u0632\u064a\u0627\u0631\u0629 \u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629 \u0639\u0627\u062f\u064a\u0629. \u0643\u0644\u0645\u0629 "visited" \u0647\u064a \u0627\u0644\u0641\u0639\u0644 \u0627\u0644\u0644\u064a \u062a\u0633\u062a\u062e\u062f\u0645\u0647 \u0644\u0632\u064a\u0627\u0631\u0629 \u0635\u0627\u062d\u0628\u060c \u0648\u062a\u0634\u062e\u0651\u0635 \u0627\u0644\u0628\u062d\u0631 \u0645\u0646 \u0623\u0648\u0644 \u0644\u062d\u0638\u0629. \u0627\u0644\u0646\u0628\u0631\u0629 \u0627\u0644\u0645\u0646\u0632\u0644\u064a\u0629 \u0627\u0644\u062e\u062f\u0651\u0627\u0639\u0629 \u0647\u064a \u0627\u0644\u0644\u064a \u062a\u062e\u0644\u0651\u064a \u0627\u0644\u063a\u0631\u0627\u0628\u0629 \u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0645\u0645\u0643\u0646\u0629.',
      themesAr: [
        '\u0627\u0644\u0645\u0643\u0627\u0646',
        '\u0627\u0644\u062a\u0634\u062e\u064a\u0635',
        '\u0627\u0644\u0644\u0642\u0627\u0621',
      ],
    },
    {
      quote: 'The Mermaids in the Basement / Came out to look at me',
      analysis:
        'The sea is reimagined as a house with the mermaids in its cellar. By turning the ocean into architecture, Dickinson makes it strange and familiar at the same time. The mermaids are curious, the speaker is the visitor.',
      themes: ['Domestic imagery', 'Imagination', 'Place'],
      analysisAr:
        '\u0627\u0644\u0628\u062d\u0631 \u064a\u062a\u0639\u0627\u062f \u062a\u0635\u0648\u0651\u0631\u0647 \u0643\u0623\u0646\u0647 \u0628\u064a\u062a \u0648\u0627\u0644\u0640mermaids \u0633\u0627\u0643\u0646\u064a\u0646 \u0641\u064a \u0633\u0631\u062f\u0627\u0628\u0647. \u0644\u0645\u0651\u0627 \u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0645\u062d\u064a\u0637 \u0625\u0644\u0649 \u0639\u0645\u0627\u0631\u0629\u060c Dickinson \u062a\u062e\u0644\u0651\u064a\u0647 \u063a\u0631\u064a\u0628 \u0648\u0645\u0623\u0644\u0648\u0641 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a. \u0627\u0644\u0640mermaids \u0641\u0636\u0648\u0644\u064a\u0627\u062a\u060c \u0648\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0647\u064a \u0627\u0644\u0632\u0627\u0626\u0631\u0629.',
      themesAr: [
        '\u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0645\u0646\u0632\u0644\u064a\u0629',
        '\u0627\u0644\u062e\u064a\u0627\u0644',
        '\u0627\u0644\u0645\u0643\u0627\u0646',
      ],
    },
    {
      quote: 'Presuming Me to be a Mouse \u2013 / Aground \u2013 upon the Sands',
      analysis:
        'The ships look down at the speaker from the "upper floor" and treat her as a mouse stranded on the beach. The reduction of the speaker to a tiny animal sets up the vulnerability that the rest of the poem will exploit.',
      themes: ['Powerlessness', 'Scale', 'Vulnerability'],
      analysisAr:
        '\u0627\u0644\u0633\u0641\u0646 \u062a\u0637\u0644\u0651 \u0639\u0644\u0649 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0645\u0646 "\u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0639\u0644\u0648\u064a" \u0648\u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0627 \u0643\u0623\u0646\u0647\u0627 \u0641\u0623\u0631\u0629 \u0639\u0627\u0644\u0642\u0629 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0637\u0626. \u062a\u0635\u063a\u064a\u0631 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0625\u0644\u0649 \u062d\u064a\u0648\u0627\u0646 \u0635\u063a\u064a\u0631 \u064a\u0647\u064a\u0651\u0626 \u0627\u0644\u0647\u0634\u0627\u0634\u0629 \u0627\u0644\u0644\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0628\u062a\u0633\u062a\u062b\u0645\u0631\u0647\u0627.',
      themesAr: [
        '\u0627\u0644\u0639\u062c\u0632',
        '\u0627\u0644\u062d\u062c\u0645',
        '\u0627\u0644\u0647\u0634\u0627\u0634\u0629',
      ],
    },
    {
      quote: 'And past my Bodice \u2013 too \u2013',
      analysis:
        'The rising tide is catalogued in stages: shoe, apron, belt, bodice. The "bodice" is intimate clothing, and "too" carries an audible note of surprise or alarm. Many readers hear a sexual undertone here \u2014 a body being unwillingly approached.',
      themes: ['Intimacy', 'Threat', 'Body'],
      analysisAr:
        '\u0627\u0644\u0645\u062f\u0651 \u0627\u0644\u0635\u0627\u0639\u062f \u064a\u064f\u0639\u062f\u0651 \u0628\u0645\u0631\u0627\u062d\u0644: shoe, apron, belt, bodice. \u0627\u0644\u0640"bodice" \u0642\u0637\u0639\u0629 \u0644\u0628\u0633 \u062d\u0645\u064a\u0645\u0629\u060c \u0648\u0643\u0644\u0645\u0629 "too" \u062a\u062d\u0645\u0644 \u0644\u0645\u0633\u0629 \u0645\u0633\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0627\u062c\u0623\u0629 \u0623\u0648 \u0627\u0644\u0625\u0646\u0630\u0627\u0631. \u0648\u0627\u064a\u062f \u0642\u0631\u0651\u0627\u0621 \u064a\u0633\u0645\u0639\u0648\u0646 \u0646\u0628\u0631\u0629 \u062c\u0646\u0633\u064a\u0629 \u0647\u0646\u0627 \u2014 \u062c\u0633\u062f \u064a\u064f\u0642\u062a\u0631\u0628 \u0645\u0646\u0647 \u0642\u0633\u0631\u0627\u064b.',
      themesAr: [
        '\u0627\u0644\u062d\u0645\u064a\u0645\u064a\u0629',
        '\u0627\u0644\u062a\u0647\u062f\u064a\u062f',
        '\u0627\u0644\u062c\u0633\u062f',
      ],
    },
    {
      quote: 'And made as He would eat me up \u2013',
      analysis:
        'The sea becomes a predator with a mouth. The pronoun "He" sustains the masculine personification, and "eat me up" makes the threat physical and immediate. Coming after the rising tide, this is the moment of greatest danger.',
      themes: ['Predator', 'Annihilation', 'Power'],
      analysisAr:
        '\u0627\u0644\u0628\u062d\u0631 \u064a\u0635\u064a\u0631 \u0645\u0641\u062a\u0631\u0633\u0627\u064b (predator) \u0639\u0646\u062f\u0647 \u0641\u0645. \u0636\u0645\u064a\u0631 "He" \u064a\u062d\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062a\u0634\u062e\u064a\u0635 \u0627\u0644\u0630\u0643\u0648\u0631\u064a\u060c \u0648\u0639\u0628\u0627\u0631\u0629 "eat me up" \u062a\u062e\u0644\u0651\u064a \u0627\u0644\u062a\u0647\u062f\u064a\u062f \u062c\u0633\u062f\u064a\u0627\u064b \u0648\u0645\u0628\u0627\u0634\u0631\u0627\u064b. \u0648\u0628\u0639\u062f \u0627\u0644\u0645\u062f\u0651 \u0627\u0644\u0635\u0627\u0639\u062f\u060c \u0647\u064a \u0644\u062d\u0638\u0629 \u0627\u0644\u062e\u0637\u0631 \u0627\u0644\u0623\u0642\u0635\u0649.',
      themesAr: [
        '\u0627\u0644\u0645\u0641\u062a\u0631\u0633',
        '\u0627\u0644\u0641\u0646\u0627\u0621',
        '\u0627\u0644\u0642\u0648\u0651\u0629',
      ],
    },
    {
      quote: 'And He \u2013 He followed \u2013 close behind',
      analysis:
        'The stuttered repetition of "He \u2013 He" mimics the speaker\u2019s anxiety. The sea is no longer simply touching her \u2014 it is following her. The image is unmistakably one of pursuit. The dashes hold the moment open like a held breath.',
      themes: ['Pursuit', 'Fear', 'Encounter'],
      analysisAr:
        '\u0627\u0644\u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u0645\u062a\u0639\u062a\u0639 "He \u2013 He" \u064a\u062d\u0627\u0643\u064a \u0642\u0644\u0642 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629. \u0627\u0644\u0628\u062d\u0631 \u0645\u0627 \u0639\u0627\u062f \u0645\u062c\u0631\u0651\u062f \u0644\u0627\u0645\u0633 \u0644\u0647\u0627 \u2014 \u0647\u0648 \u064a\u0637\u0627\u0631\u062f\u0647\u0627. \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0644\u0627 \u0623\u062f\u0646\u0649 \u0634\u0643 \u0635\u0648\u0631\u0629 \u0645\u0637\u0627\u0631\u062f\u0629. \u0648\u0627\u0644\u0634\u0631\u0637\u0627\u062a \u062a\u0628\u0642\u064a \u0627\u0644\u0644\u062d\u0638\u0629 \u0645\u0641\u062a\u0648\u062d\u0629 \u0643\u0623\u0646\u0647\u0627 \u0646\u0641\u064e\u0633 \u0645\u062d\u0628\u0648\u0633.',
      themesAr: [
        '\u0627\u0644\u0645\u0637\u0627\u0631\u062f\u0629',
        '\u0627\u0644\u062e\u0648\u0641',
        '\u0627\u0644\u0644\u0642\u0627\u0621',
      ],
    },
    {
      quote: 'I felt His Silver Heel / Upon my Ankle',
      analysis:
        'The sea is given a "Silver Heel" \u2014 part beautiful jewel, part heavy boot. The image collapses ornament and threat into one. The sea\u2019s contact with the speaker\u2019s ankle is small and physical \u2014 it could be courtly or it could be dangerous.',
      themes: ['Beauty', 'Threat', 'Body'],
      analysisAr:
        '\u0627\u0644\u0628\u062d\u0631 \u064a\u064f\u0645\u0646\u062d "Silver Heel" \u2014 \u062c\u0632\u0621 \u0645\u0646\u0647 \u062c\u0648\u0647\u0631\u0629 \u062c\u0645\u064a\u0644\u0629\u060c \u0648\u062c\u0632\u0621 \u062c\u0632\u0645\u0629 \u062b\u0642\u064a\u0644\u0629. \u0627\u0644\u0635\u0648\u0631\u0629 \u062a\u062f\u0645\u062c \u0627\u0644\u0632\u064a\u0646\u0629 \u0648\u0627\u0644\u062a\u0647\u062f\u064a\u062f \u0641\u064a \u0648\u0627\u062d\u062f. \u062a\u0645\u0627\u0633 \u0627\u0644\u0628\u062d\u0631 \u0628\u0643\u0627\u062d\u0644 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0635\u063a\u064a\u0631 \u0648\u062c\u0633\u062f\u064a \u2014 \u064a\u062d\u062a\u0645\u0644 \u0625\u0646\u0647 \u0623\u062f\u0628 \u0628\u0644\u0627\u0637\u064a \u0623\u0648 \u062e\u0637\u0631.',
      themesAr: [
        '\u0627\u0644\u062c\u0645\u0627\u0644',
        '\u0627\u0644\u062a\u0647\u062f\u064a\u062f',
        '\u0627\u0644\u062c\u0633\u062f',
      ],
    },
    {
      quote: 'And bowing \u2013 with a Mighty look \u2013 / At me \u2013 The Sea withdrew',
      analysis:
        'The closing image is unexpectedly courtly. The sea bows like a gentleman taking his leave. The encounter ends without resolution \u2014 the speaker is unhurt but changed. Dickinson refuses to tell us what to feel.',
      themes: ['Withdrawal', 'Dignity', 'Ambiguity'],
      analysisAr:
        '\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062e\u062a\u0627\u0645\u064a\u0629 \u0645\u062a\u0623\u062f\u0651\u0628\u0629 \u0628\u0634\u0643\u0644 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0651\u0639. \u0627\u0644\u0628\u062d\u0631 \u064a\u0646\u062d\u0646\u064a \u0643\u0623\u0646\u0647 gentleman \u064a\u0633\u062a\u0623\u0630\u0646 \u0644\u0644\u062e\u0631\u0648\u062c. \u0627\u0644\u0644\u0642\u0627\u0621 \u064a\u0646\u062a\u0647\u064a \u0628\u0644\u0627 \u062d\u0644\u0651 \u2014 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0645\u0627 \u062a\u0623\u0630\u0651\u062a \u0628\u0633 \u062a\u063a\u064a\u0651\u0631\u062a. \u0648Dickinson \u062a\u0631\u0641\u0636 \u0625\u0646\u0647\u0627 \u062a\u062e\u0628\u0651\u0631\u0646\u0627 \u0627\u064a\u0634 \u0644\u0627\u0632\u0645 \u0646\u062d\u0633\u0651.',
      themesAr: [
        '\u0627\u0644\u0627\u0646\u0633\u062d\u0627\u0628',
        '\u0627\u0644\u0648\u0642\u0627\u0631',
        '\u0627\u0644\u063a\u0645\u0648\u0636',
      ],
    },
  ],

  languageDevices: [
    {
      device: 'Sustained personification',
      example: 'visited the Sea / The Mermaids in the Basement / He \u2013 He followed',
      effect:
        'The whole poem treats the sea as a person, specifically a man. Each stanza adds another human attribute. The personification turns the encounter from "speaker meets sea" into "speaker meets stranger", which is what gives the poem its uncanny intimacy.',
      lineRef: 1,
      effectAr:
        '\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0651\u0647\u0627 \u062a\u0639\u0627\u0645\u0644 \u0627\u0644\u0628\u062d\u0631 \u0643\u0625\u0646\u0633\u0627\u0646\u060c \u0648\u0628\u0627\u0644\u062a\u062d\u062f\u064a\u062f \u0643\u0631\u062c\u0644. \u0648\u0643\u0644 \u0645\u0642\u0637\u0639 \u064a\u0636\u064a\u0641 \u0635\u0641\u0629 \u0628\u0634\u0631\u064a\u0629 \u062c\u062f\u064a\u062f\u0629. \u0627\u0644\u062a\u0634\u062e\u064a\u0635 \u064a\u062d\u0648\u0651\u0644 \u0627\u0644\u0644\u0642\u0627\u0621 \u0645\u0646 "\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u0634\u0648\u0641 \u0627\u0644\u0628\u062d\u0631" \u0625\u0644\u0649 "\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u0644\u0627\u0642\u064a \u063a\u0631\u064a\u0628\u0627\u064b"\u060c \u0648\u0647\u0630\u0627 \u0627\u0644\u0644\u064a \u064a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062d\u0645\u064a\u0645\u064a\u062a\u0647\u0627 \u0627\u0644\u063a\u0631\u064a\u0628\u0629.',
    },
    {
      device: 'Dashes',
      example: 'I started Early \u2013 Took my Dog \u2013',
      effect:
        'Dickinson\u2019s dashes create pauses inside lines, slowing the pace, isolating phrases, and giving the poem a halting, almost breathless quality. They make the speaker sound thoughtful, anxious or surprised, depending on context.',
      lineRef: 0,
      effectAr:
        '\u0627\u0644\u0634\u0631\u0637\u0627\u062a \u0639\u0646\u062f Dickinson \u062a\u062e\u0644\u0642 \u0648\u0642\u0641\u0627\u062a \u062f\u0627\u062e\u0644 \u0627\u0644\u0628\u064a\u062a\u060c \u0648\u062a\u0628\u0637\u0651\u0626 \u0627\u0644\u0633\u0631\u0639\u0629\u060c \u0648\u062a\u0639\u0632\u0644 \u0627\u0644\u0639\u0628\u0627\u0631\u0627\u062a\u060c \u0648\u062a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062c\u0648\u062f\u0629 \u0645\u062a\u0644\u0639\u062b\u0645\u0629 \u0634\u0628\u0647 \u0645\u0642\u0637\u0648\u0639\u0629 \u0627\u0644\u0623\u0646\u0641\u0627\u0633. \u0648\u062a\u062e\u0644\u0651\u064a \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u062a\u062d\u0633\u0651\u0647\u0627 \u0645\u062a\u0623\u0645\u0651\u0644\u0629 \u0623\u0648 \u0642\u0644\u0642\u0627\u0646\u0629 \u0623\u0648 \u0645\u062a\u0641\u0627\u062c\u0626\u0629\u060c \u062d\u0633\u0628 \u0627\u0644\u0633\u064a\u0627\u0642.',
    },
    {
      device: 'Capitalisation',
      example: 'Tide / Sea / Mighty / Solid Town',
      effect:
        'Dickinson capitalises ordinary nouns to elevate them. By turning "Tide" and "Sea" into proper nouns, she gives them the weight of characters. The Solid Town becomes the named opposite of the fluid Sea.',
      lineRef: 9,
      effectAr:
        'Dickinson \u062a\u0643\u0627\u067e\u062a\u0644 \u0623\u0633\u0645\u0627\u0621 \u0639\u0627\u062f\u064a\u0629 \u0639\u0634\u0627\u0646 \u062a\u0631\u0641\u0639\u0647\u0627. \u0644\u0645\u0651\u0627 \u062a\u062d\u0648\u0651\u0644 "Tide" \u0648"Sea" \u0625\u0644\u0649 \u0623\u0633\u0645\u0627\u0621 \u0639\u0644\u0645\u060c \u062a\u0639\u0637\u064a\u0647\u0627 \u062b\u0642\u0644 \u0627\u0644\u0634\u062e\u0635\u064a\u0627\u062a. \u0648\u0627\u0644\u0640Solid Town \u064a\u0635\u064a\u0631 \u0627\u0644\u0646\u0642\u064a\u0636 \u0627\u0644\u0645\u0633\u0645\u0651\u0649 \u0644\u0644\u0640Sea \u0627\u0644\u0633\u0627\u0626\u0644.',
    },
    {
      device: 'Extended metaphor',
      example: 'the sea as a house \u2014 basement, upper floor, hempen hands',
      effect:
        'The sea is reimagined as a building with rooms. The metaphor makes the immense ocean small and domestic, while the speaker\u2019s small body becomes the visitor inside it. The reversal of scale destabilises the reader.',
      lineRef: 2,
      effectAr:
        '\u0627\u0644\u0628\u062d\u0631 \u064a\u062a\u0639\u0627\u062f \u062a\u0635\u0648\u0651\u0631\u0647 \u0643\u0623\u0646\u0647 \u0645\u0628\u0646\u0649 \u0641\u064a\u0647 \u063a\u0631\u0641. \u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u062a\u062e\u0644\u0651\u064a \u0627\u0644\u0645\u062d\u064a\u0637 \u0627\u0644\u0647\u0627\u0626\u0644 \u0635\u063a\u064a\u0631\u0627\u064b \u0648\u0623\u0647\u0644\u064a\u0627\u064b\u060c \u0648\u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a \u062c\u0633\u062f \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u0629 \u0627\u0644\u0635\u063a\u064a\u0631 \u064a\u0635\u064a\u0631 \u0627\u0644\u0632\u0627\u0626\u0631 \u0628\u062f\u0627\u062e\u0644\u0647. \u0639\u0643\u0633 \u0645\u0642\u064a\u0627\u0633 \u0627\u0644\u062d\u062c\u0645 \u064a\u0632\u0639\u0632\u0639 \u0627\u0644\u0642\u0627\u0631\u0626.',
    },
    {
      device: 'Repetition / echo',
      example: 'I started Early... I \u2013 started \u2013 too',
      effect:
        'The verb "started" appears twice with completely different meanings: set out and was startled. The echo retroactively darkens the opening, making the casual beginning of the poem feel ominous in hindsight.',
      lineRef: 19,
      effectAr:
        '\u0627\u0644\u0641\u0639\u0644 "started" \u064a\u062c\u064a \u0645\u0631\u0651\u062a\u064a\u0646 \u0628\u0645\u0639\u0646\u064a\u064a\u0646 \u0645\u062e\u062a\u0644\u0641\u064a\u0646 \u062a\u0645\u0627\u0645\u0627\u064b: \u0637\u0644\u0639 \u0645\u0646 \u0628\u064a\u062a\u0647\u060c \u0648\u0627\u0646\u0641\u0632\u0639. \u0648\u0627\u0644\u0635\u062f\u0649 \u064a\u0635\u0628\u063a \u0627\u0644\u0627\u0641\u062a\u062a\u0627\u062d\u064a\u0629 \u0628\u0638\u0644\u0627\u0644 \u0623\u063a\u0645\u0642 \u0628\u0623\u062b\u0631 \u0631\u062c\u0639\u064a\u060c \u0648\u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0627\u0644\u0639\u0641\u0648\u064a\u0629 \u062a\u062d\u0633\u0651\u0647\u0627 \u0645\u0634\u0624\u0648\u0645\u0629 \u0644\u0645\u0651\u0627 \u062a\u0641\u0643\u0651\u0631 \u0641\u064a\u0647\u0627 \u0628\u0639\u062f \u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0642\u0635\u064a\u062f\u0629.',
    },
    {
      device: 'Common metre',
      example: 'alternating 8 and 6 syllable lines, ballad rhythm',
      effect:
        'The hymn-like metre is reassuring and familiar \u2014 the kind of rhythm a child might recite. The contrast between the soothing form and the disturbing content is one of Dickinson\u2019s most characteristic effects.',
      lineRef: 0,
      effectAr:
        '\u0627\u0644\u0640metre \u0627\u0644\u062a\u0631\u062a\u064a\u0644\u064a \u064a\u0637\u0645\u0626\u0646 \u0648\u0645\u0623\u0644\u0648\u0641 \u2014 \u0646\u0648\u0639 \u0627\u0644\u0625\u064a\u0642\u0627\u0639 \u0627\u0644\u0644\u064a \u064a\u0642\u062f\u0631 \u064a\u0644\u0642\u064a\u0647 \u0637\u0641\u0644 \u0635\u063a\u064a\u0631. \u0648\u0627\u0644\u062a\u0628\u0627\u064a\u0646 \u0628\u064a\u0646 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0645\u0631\u064a\u062d \u0648\u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0636\u0637\u0631\u0628 \u0647\u0648 \u0645\u0646 \u0623\u0628\u0631\u0632 \u0633\u0645\u0627\u062a Dickinson.',
    },
  ],
}

const comparisons = [
  {
    title: 'To Autumn',
    poet: 'John Keats',
    href: '/revision/poetry/edexcel/time-and-place/to-autumn',
    reason:
      'Both poems personify a natural force as a single character. Keats\u2019s autumn is peaceful, restful and benign; Dickinson\u2019s sea is curious, intimate and threatening. Compare two very different relationships between speaker and place.',
    themes: ['Personification', 'Nature', 'Encounter'],
  },
  {
    title: 'Composed Upon Westminster Bridge',
    poet: 'William Wordsworth',
    href: '/revision/poetry/edexcel/time-and-place/composed-upon-westminster-bridge',
    reason:
      'Both poems describe a single encounter with a place at a specific moment. Wordsworth meets London at dawn and finds peace; Dickinson meets the sea at dawn and finds danger. Compare how the same time of day produces opposite experiences.',
    themes: ['Place', 'Time', 'Encounter'],
  },
  {
    title: 'London',
    poet: 'William Blake',
    href: '/revision/poetry/edexcel/time-and-place/london',
    reason:
      'Both poems give a place an active personality. Blake\u2019s London is oppressive and political; Dickinson\u2019s sea is intimate and personal. Compare the political poem and the psychological poem.',
    themes: ['Place', 'Personification', 'Encounter'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'ise-1',
    question: 'What is the poem about on one level?',
    type: 'multiple-choice',
    options: [
      'Walking a dog on the beach',
      "A walk to the sea that becomes an encounter with a powerful, pursuing force — often read as a metaphor for desire, death, or nature's power",
      'A boat trip',
      'Fishing',
    ],
    correctIndex: 1,
    explanation:
      'On the surface, the speaker walks to the sea. But the sea pursues her aggressively, and she barely escapes. The poem is widely interpreted as a metaphor for sexual desire, death, or overwhelming power.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'ise-2',
    question: 'How is the sea personified?',
    type: 'multiple-choice',
    options: [
      'As a gentle friend',
      'As an aggressive, pursuing masculine force that advances on the speaker',
      'As a mother',
      'As a child',
    ],
    correctIndex: 1,
    explanation:
      'The sea is personified as a masculine force that pursues the female speaker — advancing, rising, threatening to consume her. It can be read as a metaphor for desire or death.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'ise-3',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      "Ballad form (common metre) with ABCB rhyme — Dickinson's characteristic form",
      'Blank verse',
      'Free verse',
    ],
    correctIndex: 1,
    explanation:
      'Dickinson uses her characteristic ballad/hymn form with common metre (alternating 8 and 6 syllable lines) and ABCB rhyme — deceptively simple for complex content.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'ise-4',
    question: "What does the tide's retreat at the end suggest?",
    type: 'multiple-choice',
    options: [
      'Normal tidal patterns',
      'The speaker escapes the overwhelming force — she retreats to safety (the solid town) before being consumed',
      'The sea is tired',
      'It is evening',
    ],
    correctIndex: 1,
    explanation:
      'The speaker escapes by retreating to the town — solid, human territory. The sea cannot follow her there. This suggests reason or civilisation provides a boundary against overwhelming natural or emotional forces.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'ise-5',
    question: 'Who was Emily Dickinson?',
    type: 'multiple-choice',
    options: [
      'A Victorian travel writer',
      'An American poet (1830-1886) who lived in near-total seclusion and published almost nothing in her lifetime',
      'A British war poet',
      'An Irish novelist',
    ],
    correctIndex: 1,
    explanation:
      'Emily Dickinson (1830-1886) lived a reclusive life in Amherst, Massachusetts. She wrote nearly 1,800 poems but published fewer than a dozen in her lifetime.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'ise-6',
    question: 'What does "He followed — close behind" suggest about the sea?',
    type: 'multiple-choice',
    options: [
      'The sea is friendly',
      'The pursuit is relentless and threatening — the sea/masculine force refuses to let the speaker go',
      'The speaker is slow',
      'It describes a dog following',
    ],
    correctIndex: 1,
    explanation:
      'The sea\'s pursuit becomes increasingly aggressive. "Close behind" suggests an inescapable, predatory force — the speaker is being hunted by something she cannot outrun.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'ise-7',
    question: "How does the poem's simple form contrast with its content?",
    type: 'multiple-choice',
    options: [
      'There is no contrast',
      'The nursery-rhyme-like form disguises deeply complex themes of desire, power, and mortality',
      'The content is also simple',
      'The form is complex',
    ],
    correctIndex: 1,
    explanation:
      "Dickinson's characteristic technique: the hymn-like, childlike form (familiar, comforting) contains disturbing, adult content about overwhelming power, sexual threat, or death.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'ise-8',
    question: 'What does the mermaids and frigates imagery suggest?',
    type: 'multiple-choice',
    options: [
      'The speaker is at a harbour',
      'The sea is imagined as a realm of fantasy and danger — both enchanting and threatening',
      'She is reading a book',
      'The navy is nearby',
    ],
    correctIndex: 1,
    explanation:
      'Mermaids (enchantment) and frigates (military power) combine fantasy with threat. The sea is simultaneously alluring and dangerous — like desire itself.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'ise-9',
    question: "What is the poem's attitude to the overwhelming force?",
    type: 'multiple-choice',
    options: [
      'Pure terror',
      "Ambivalent — the speaker is both attracted to and frightened by the sea's power, creating tension between desire and self-preservation",
      'Pure joy',
      'Indifference',
    ],
    correctIndex: 1,
    explanation:
      'The poem is crucially ambivalent. The speaker is both fascinated and terrified. This tension between attraction and self-preservation is what gives the poem its power.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'ise-10',
    question: 'What does the "Solid Town" represent?',
    type: 'multiple-choice',
    options: [
      'A specific place',
      'Safety, civilisation, and rational control — a boundary that keeps the overwhelming force at bay',
      'A prison',
      'Loneliness',
    ],
    correctIndex: 1,
    explanation:
      'The "Solid Town" represents human civilisation, rational control, and safety. It is the boundary that the sea (nature/desire/death) cannot cross — the speaker retreats to solid ground.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'I Started Early explores the power of nature (or desire/death), the tension between attraction and self-preservation, and boundaries between the wild and civilised.',
    keyPoints: [
      'The sea as overwhelming force — nature, desire, or death',
      'Pursuit — the speaker is hunted by something she cannot control',
      'Ambivalence — both attracted to and frightened by the force',
      'Escape to the "Solid Town" — civilisation as safety',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Dickinson uses personification of the sea as a masculine pursuer, maritime imagery, and deceptively simple language for complex themes.',
    keyPoints: [
      'Sea personified as aggressive masculine force',
      'Mermaids and frigates — enchantment and military threat',
      '"He followed — close behind" — relentless pursuit',
      'Simple diction containing complex, disturbing ideas',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Ballad/hymn form with common metre — the deceptively simple, nursery-rhyme-like structure disguises dark, complex content.',
    keyPoints: [
      'Common metre (8/6 syllable lines) — childlike simplicity',
      'ABCB rhyme — familiar, hymn-like pattern',
      "Simple form for complex content — Dickinson's signature technique",
      'Narrative progression — approach, encounter, retreat, escape',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Dickinson present the power of nature in I Started Early?',
  'Compare how an encounter with a powerful force is presented in I Started Early and one other poem from the anthology.',
  'How does Dickinson use the contrast between simple form and complex content to create meaning?',
]

export default function IStartedEarlyPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="I Started Early — Took My Dog by Emily Dickinson — Analysis & Annotations"
        description="Line-by-line analysis of I Started Early — Took My Dog with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Edexcel Poetry', url: 'https://theenglishhub.app/revision/poetry/edexcel' },
          {
            name: 'I Started Early — Took My Dog',
            url: 'https://theenglishhub.app/revision/poetry/edexcel/i-started-early-took-my-dog',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/edexcel/time-and-place" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Time and Place cluster
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              I started Early &ndash; Took my Dog
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Emily Dickinson &middot; Edexcel Time and Place anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="I started Early - Took my Dog"
        textType="poem"
        examBoard="Edexcel"
        cluster="Time and Place"
        variant="compact"
      />
      <InlineStudyEngine
        textName="I Started Early - Took my Dog"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={dickinson} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with I started Early &ndash; Took my Dog from the Edexcel Time and Place
          cluster.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[0.7rem] leading-relaxed text-muted-foreground">
        <p>
          &ldquo;I started Early &ndash; Took my Dog&rdquo; by Emily Dickinson (c. 1862) is in the
          public domain. All quotations on this page are used for the purpose of criticism, review
          and educational study under fair dealing (s.30 Copyright, Designs and Patents Act 1988).
        </p>
      </footer>
    </div>
  )
}
