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

const londonPoem: PoemData = {
  title: 'London',
  poet: 'William Blake',
  lines: [
    // Stanza 1
    {
      text: 'I wander thro\u2019 each charter\u2019d street,',
      annotations: [
        {
          type: 'Vocabulary',
          note: '"Charter\'d" means mapped, controlled, or owned. Blake uses it to suggest that even the streets of London have been bought and sold \u2014 freedom is an illusion.',
          color: '#3b82f6',
        },
        {
          type: 'Context',
          note: 'The speaker walks through London as a detached observer, cataloguing the suffering he sees around him.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Near where the charter\u2019d Thames does flow.',
      annotations: [
        {
          type: 'Imagery',
          note: 'Even the river Thames \u2014 a natural, free-flowing force \u2014 has been "charter\'d" (controlled). Nature itself has been commodified.',
          color: '#10b981',
        },
        {
          type: 'Repetition',
          note: 'The repetition of "charter\'d" emphasises the all-consuming nature of commercial and political control over London.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And mark in every face I meet',
      annotations: [
        {
          type: 'Verb choice',
          note: '"Mark" has a double meaning: to notice/observe, and to scar or brand. Blake both sees and records the damage.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Marks of weakness, marks of woe.',
      annotations: [
        {
          type: 'Repetition',
          note: 'Triple repetition of "marks" hammers home the universality of suffering. No one escapes.',
          color: '#f59e0b',
        },
        {
          type: 'Tone',
          note: 'The tone is sombre and despairing. "Weakness" and "woe" are powerful emotive words conveying physical and emotional suffering.',
          color: '#ec4899',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    {
      text: 'In every cry of every Man,',
      annotations: [
        {
          type: 'Anaphora',
          note: '"In every" is repeated four times across stanza 2, creating a relentless, list-like rhythm that overwhelms the reader with the scale of suffering.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'In every Infant\u2019s cry of fear,',
      annotations: [
        {
          type: 'Imagery',
          note: "Even newborn infants are born into fear and suffering \u2014 innocence is corrupted from birth. This connects to Blake's broader theme in Songs of Experience.",
          color: '#10b981',
        },
      ],
    },
    {
      text: 'In every voice: in every ban,',
      annotations: [
        {
          type: 'Vocabulary',
          note: '"Ban" suggests both legal prohibitions imposed by those in power and the banns of marriage \u2014 even love is institutionalised and controlled.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'The mind-forg\u2019d manacles I hear.',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Mind-forg\'d manacles" is Blake\'s most famous phrase from this poem. The chains are not physical but psychological \u2014 people are imprisoned by their own acceptance of oppression.',
          color: '#ef4444',
        },
        {
          type: 'Aural imagery',
          note: 'Blake can "hear" the manacles, using synesthesia to blend sight and sound, suggesting oppression pervades every sense.',
          color: '#10b981',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: 'How the Chimney-sweeper\u2019s cry',
      annotations: [
        {
          type: 'Context',
          note: 'Child chimney sweeps were a notorious example of child exploitation. Blake wrote several poems about them. Boys as young as four were forced up chimneys, often dying from suffocation or cancer.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Every black\u2019ning Church appalls;',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Black\'ning" works on multiple levels: literal soot from industry, moral corruption, and the Church\'s complicity in child labour by failing to act.',
          color: '#ef4444',
        },
        {
          type: 'Vocabulary',
          note: '"Appalls" means to horrify, but also carries the sense of a funeral pall (a cloth draped over a coffin) \u2014 the Church is associated with death.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the hapless Soldier\u2019s sigh',
      annotations: [
        {
          type: 'Emotive language',
          note: '"Hapless" means unlucky or unfortunate. The soldier is powerless, sent to die by those in authority. His "sigh" is quiet, suppressed protest.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'Runs in blood down Palace walls.',
      annotations: [
        {
          type: 'Imagery',
          note: "A shocking, visceral image: the soldier's suffering literally stains the walls of royal power. The monarchy is directly blamed for his death.",
          color: '#10b981',
        },
        {
          type: 'Symbolism',
          note: 'Blood on "Palace walls" could foreshadow revolution (Blake supported the French Revolution). The powerful are not shielded from the consequences of their oppression.',
          color: '#ef4444',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: 'But most thro\u2019 midnight streets I hear',
      annotations: [
        {
          type: 'Structure',
          note: '"But most" signals a shift \u2014 the worst is saved for last. "Midnight" creates a dark, secretive, morally corrupt atmosphere.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'How the youthful Harlot\u2019s curse',
      annotations: [
        {
          type: 'Context',
          note: 'Prostitution was rife in 18th-century London. "Youthful" emphasises how young these women were \u2014 victims of poverty, not moral failings.',
          color: '#8b5cf6',
        },
        {
          type: 'Vocabulary',
          note: '"Curse" has a triple meaning: swearing in anger, a sexually transmitted disease passed to clients, and a divine curse upon society.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Blasts the new-born Infant\u2019s tear',
      annotations: [
        {
          type: 'Imagery',
          note: '"Blasts" is violent and destructive. The baby is born into disease and suffering. The cycle of misery is inescapable \u2014 it passes from generation to generation.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And blights with plagues the Marriage hearse.',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Marriage hearse" is a powerful oxymoron \u2014 marriage (life, love, new beginnings) is fused with a hearse (death, endings). Love and death become inseparable in Blake\'s London.',
          color: '#ef4444',
        },
        {
          type: 'Vocabulary',
          note: '"Blights" and "plagues" are words of disease and destruction, suggesting that corruption infects all of society, even its most sacred institutions.',
          color: '#3b82f6',
        },
      ],
    },
  ],

  context:
    '<p><strong>William Blake (1757\u20131827)</strong> was a Romantic poet, painter, and printmaker who lived in London his entire life. He was a radical thinker who championed individual freedom and opposed all forms of institutional authority.</p>' +
    '<p><strong>"London"</strong> was published in <em>Songs of Experience</em> (1794), a companion volume to <em>Songs of Innocence</em> (1789). Together they explore how innocence is corrupted by the adult world. "London" is one of the most powerful poems of Experience.</p>' +
    '<p><strong>Historical context:</strong> Blake wrote during the <strong>Industrial Revolution</strong>, which transformed London into a centre of factories, poverty, and child labour. He was also deeply influenced by the <strong>French Revolution</strong> (1789), which he initially supported as a liberation from tyranny.</p>' +
    '<p>Blake was critical of the <strong>Church</strong>, the <strong>monarchy</strong>, and <strong>Parliament</strong> for their complicity in the suffering of the poor. He saw London not as a city of progress but as a prison of the mind and spirit.</p>' +
    '<p>The poem is a <strong>social protest</strong>, attacking every level of power \u2014 from commercial charters to religious hypocrisy to royal indifference \u2014 and showing how these forces destroy innocence, freedom, and human connection.</p>',

  contextAr:
    '<p><strong>William Blake (1757\u20131827)</strong> \u0634\u0627\u0639\u0631 \u0648\u0631\u0633\u0651\u0627\u0645 \u0648\u0641\u0646\u0651\u0627\u0646 \u0637\u0628\u0627\u0639\u0629 \u0645\u0646 \u0634\u0639\u0631\u0627\u0621 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u0633\u064a\u0629\u060c \u0639\u0627\u0634 \u0637\u0648\u0644 \u0639\u0645\u0631\u0647 \u0641\u064a \u0644\u0646\u062f\u0646. \u0643\u0627\u0646 \u0645\u0641\u0643\u0651\u0631 \u0631\u0627\u062f\u064a\u0643\u0627\u0644\u064a\u060c \u064a\u062f\u0627\u0641\u0639 \u0639\u0646 \u062d\u0631\u064a\u0629 \u0627\u0644\u0641\u0631\u062f \u0648\u064a\u0642\u0641 \u0636\u062f \u0643\u0644 \u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u0633\u0644\u0637\u0629 \u0627\u0644\u0645\u0624\u0633\u0651\u0633\u064a\u0629.</p>' +
    '<p>\u0642\u0635\u064a\u062f\u0629 <strong>"London"</strong> \u0627\u0646\u062a\u0634\u0631\u062a \u0636\u0645\u0646 \u062f\u064a\u0648\u0627\u0646 <em>Songs of Experience</em> \u0633\u0646\u0629 1794\u060c \u0648\u0647\u0648 \u062f\u064a\u0648\u0627\u0646 \u0645\u0643\u0645\u0651\u0644 \u0644\u062f\u064a\u0648\u0627\u0646 <em>Songs of Innocence</em> \u0627\u0644\u0644\u064a \u0637\u0644\u0639 \u0633\u0646\u0629 1789. \u0627\u0644\u062f\u064a\u0648\u0627\u0646\u064a\u0646 \u0645\u0639 \u0628\u0639\u0636 \u064a\u0633\u062a\u0639\u0631\u0636\u0648\u0646 \u0643\u064a\u0641 \u0625\u0646 \u0627\u0644\u0628\u0631\u0627\u0621\u0629 \u062a\u062a\u0644\u0648\u0651\u062b \u0628\u0639\u0627\u0644\u0645 \u0627\u0644\u0643\u0628\u0627\u0631. \u0648\u0642\u0635\u064a\u062f\u0629 "London" \u0645\u0646 \u0623\u0642\u0648\u0649 \u0642\u0635\u0627\u0626\u062f \u0627\u0644\u0640Experience.</p>' +
    '<p><strong>\u0627\u0644\u0633\u064a\u0627\u0642 \u0627\u0644\u062a\u0627\u0631\u064a\u062e\u064a:</strong> Blake \u0643\u062a\u0628 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0641\u064a \u0641\u062a\u0631\u0629 <strong>\u0627\u0644\u062b\u0648\u0631\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u0629</strong>\u060c \u0627\u0644\u0644\u064a \u062d\u0648\u0651\u0644\u062a \u0644\u0646\u062f\u0646 \u0625\u0644\u0649 \u0645\u0631\u0643\u0632 \u0645\u0635\u0627\u0646\u0639 \u0648\u0641\u0642\u0631 \u0648\u0639\u0645\u0627\u0644\u0629 \u0623\u0637\u0641\u0627\u0644. \u0648\u0643\u0627\u0646 \u0623\u064a\u0636\u0627\u064b \u0645\u062a\u0623\u062b\u0651\u0631 \u0648\u0627\u064a\u062f \u0628\u0640<strong>\u0627\u0644\u062b\u0648\u0631\u0629 \u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629</strong> (1789)\u060c \u0627\u0644\u0644\u064a \u062f\u0639\u0645\u0647\u0627 \u0641\u064a \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0628\u0627\u0639\u062a\u0628\u0627\u0631\u0647\u0627 \u062a\u062d\u0631\u0651\u0631 \u0645\u0646 \u0627\u0644\u0637\u063a\u064a\u0627\u0646.</p>' +
    '<p>Blake \u0643\u0627\u0646 \u064a\u0646\u062a\u0642\u062f <strong>\u0627\u0644\u0643\u0646\u064a\u0633\u0629</strong> \u0648<strong>\u0627\u0644\u0645\u0644\u0643\u064a\u0629</strong> \u0648<strong>\u0627\u0644\u0628\u0631\u0644\u0645\u0627\u0646</strong> \u0644\u0623\u0646\u0647\u0645 \u0634\u0631\u0643\u0627\u0621 \u0641\u064a \u0645\u0639\u0627\u0646\u0627\u0629 \u0627\u0644\u0641\u0642\u0631\u0627\u0621. \u0643\u0627\u0646 \u064a\u0634\u0648\u0641 \u0644\u0646\u062f\u0646 \u0645\u0648 \u0645\u062f\u064a\u0646\u0629 \u062a\u0642\u062f\u0651\u0645\u060c \u0628\u0644 \u0633\u062c\u0646 \u0644\u0644\u0639\u0642\u0644 \u0648\u0627\u0644\u0631\u0648\u062d.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 <strong>\u0627\u062d\u062a\u062c\u0627\u062c \u0627\u062c\u062a\u0645\u0627\u0639\u064a</strong>\u060c \u064a\u0647\u0627\u062c\u0645 \u0643\u0644 \u0645\u0633\u062a\u0648\u0649 \u0645\u0646 \u0645\u0633\u062a\u0648\u064a\u0627\u062a \u0627\u0644\u0633\u0644\u0637\u0629 \u2014 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u062b\u064a\u0642 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629\u060c \u0644\u0644\u0646\u0641\u0627\u0642 \u0627\u0644\u062f\u064a\u0646\u064a\u060c \u0644\u0644\u0627\u0645\u0628\u0627\u0644\u0627\u0629 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u2014 \u0648\u064a\u0628\u064a\u0651\u0646 \u0643\u064a\u0641 \u0625\u0646 \u0647\u0627\u0644\u0642\u0648\u0649 \u062a\u062f\u0645\u0651\u0631 \u0627\u0644\u0628\u0631\u0627\u0621\u0629 \u0648\u0627\u0644\u062d\u0631\u064a\u0629 \u0648\u0627\u0644\u062a\u0631\u0627\u0628\u0637 \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a.</p>',

  summary:
    'Stanza 1: The speaker walks through London\'s streets, observing that everything \u2014 even the river Thames \u2014 is "charter\'d" (controlled and owned). Every face he sees is marked with suffering and despair.\n\n' +
    'Stanza 2: He hears the cries of men, infants, and the voice of every social restriction. Most importantly, he recognises that the chains binding people are "mind-forg\'d" \u2014 psychological, not physical. People have internalised their oppression.\n\n' +
    'Stanza 3: Blake attacks specific institutions. The Church ignores the suffering of child chimney sweeps (its walls "black\'ning" with soot and guilt). The soldier\'s blood runs down the Palace walls \u2014 the monarchy sends men to die.\n\n' +
    'Stanza 4: The poem reaches its darkest point. A young prostitute\'s curse infects a newborn baby with disease, and the final oxymoron \u2014 "Marriage hearse" \u2014 fuses love with death. The cycle of suffering is inescapable; corruption poisons even the next generation.',

  summaryAr:
    '\u0627\u0644\u0645\u0642\u0637\u0639 1: \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0645\u0634\u064a \u0641\u064a \u0634\u0648\u0627\u0631\u0639 \u0644\u0646\u062f\u0646\u060c \u0648\u064a\u0644\u0627\u062d\u0638 \u0625\u0646 \u0643\u0644 \u0634\u064a \u2014 \u062d\u062a\u0649 \u0646\u0647\u0631 \u0627\u0644\u062a\u0627\u064a\u0645\u0632 (Thames) \u2014 "charter\'d" (\u0645\u0645\u0644\u0648\u0643 \u0648\u0645\u0633\u064a\u0637\u0631 \u0639\u0644\u064a\u0647). \u0648\u0643\u0644 \u0648\u062c\u0647 \u064a\u0634\u0648\u0641\u0647 \u0641\u064a\u0647 \u0622\u062b\u0627\u0631 \u0645\u0639\u0627\u0646\u0627\u0629 \u0648\u064a\u0623\u0633.\n\n' +
    '\u0627\u0644\u0645\u0642\u0637\u0639 2: \u064a\u0633\u0645\u0639 \u0635\u0631\u0627\u062e \u0627\u0644\u0631\u062c\u0627\u0644\u060c \u0648\u0628\u0643\u0627\u0621 \u0627\u0644\u0623\u0637\u0641\u0627\u0644\u060c \u0648\u0643\u0644 \u0635\u0648\u062a \u0645\u0646 \u0623\u0635\u0648\u0627\u062a \u0627\u0644\u0642\u064a\u0648\u062f \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629. \u0648\u0627\u0644\u0623\u0647\u0645\u060c \u064a\u062f\u0631\u0643 \u0625\u0646 \u0627\u0644\u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0644\u064a \u062a\u0643\u0628\u0651\u0644 \u0627\u0644\u0646\u0627\u0633 "mind-forg\'d" \u2014 \u0633\u0644\u0627\u0633\u0644 \u0646\u0641\u0633\u064a\u0629\u060c \u0645\u0648 \u062d\u0633\u0651\u064a\u0629. \u0627\u0644\u0646\u0627\u0633 \u0628\u0646\u0641\u0633\u0647\u0645 \u0627\u0633\u062a\u0628\u0637\u0646\u0648\u0627 \u0627\u0644\u0638\u0644\u0645 \u0648\u0642\u0628\u0644\u0648\u0647.\n\n' +
    '\u0627\u0644\u0645\u0642\u0637\u0639 3: Blake \u064a\u0647\u0627\u062c\u0645 \u0645\u0624\u0633\u0633\u0627\u062a \u0628\u0639\u064a\u0646\u0647\u0627. \u0627\u0644\u0643\u0646\u064a\u0633\u0629 \u062a\u062a\u062c\u0627\u0647\u0644 \u0645\u0639\u0627\u0646\u0627\u0629 \u0623\u0637\u0641\u0627\u0644 \u0645\u0646\u0638\u0651\u0641\u064a \u0627\u0644\u0645\u062f\u0627\u062e\u0646 (\u0648\u062c\u062f\u0631\u0627\u0646\u0647\u0627 "black\'ning" \u0645\u0646 \u0627\u0644\u0633\u062e\u0627\u0645 \u0648\u0627\u0644\u0630\u0646\u0628). \u0648\u062f\u0645 \u0627\u0644\u062c\u0646\u062f\u064a \u064a\u0646\u0632\u0644 \u0639\u0644\u0649 \u062c\u062f\u0631\u0627\u0646 \u0627\u0644\u0642\u0635\u0631 \u2014 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u062a\u0631\u0633\u0644 \u0627\u0644\u0631\u062c\u0627\u0644 \u0644\u0644\u0645\u0648\u062a.\n\n' +
    '\u0627\u0644\u0645\u0642\u0637\u0639 4: \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0648\u0635\u0644 \u0644\u0623\u062d\u0644\u0643 \u0646\u0642\u0637\u0629. \u0644\u0639\u0646\u0629 (curse) \u0641\u062a\u0627\u0629 \u0634\u063a\u0651\u0627\u0644\u0629 \u0641\u064a \u0627\u0644\u062f\u0639\u0627\u0631\u0629 \u0648\u0639\u0645\u0631\u0647\u0627 \u0635\u063a\u064a\u0631 \u062a\u0635\u064a\u0628 \u0631\u0636\u064a\u0639 \u062d\u062f\u064a\u062b \u0627\u0644\u0648\u0644\u0627\u062f\u0629 \u0628\u0627\u0644\u0645\u0631\u0636\u060c \u0648\u0627\u0644\u0645\u0641\u0627\u0631\u0642\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u2014 "Marriage hearse" \u2014 \u062a\u062f\u0645\u062c \u0627\u0644\u062d\u0628 \u0628\u0627\u0644\u0645\u0648\u062a. \u062f\u0648\u0631\u0629 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u0645\u0627 \u0644\u0647\u0627 \u0645\u0647\u0631\u0628\u061b \u0627\u0644\u0641\u0633\u0627\u062f \u064a\u0633\u0645\u0651\u0645 \u062d\u062a\u0649 \u0627\u0644\u062c\u064a\u0644 \u0627\u0644\u0644\u064a \u064a\u0627\u064a.',

  formAndStructure:
    'Form: Four quatrains (four-line stanzas) with a regular ABAB rhyme scheme throughout. This rigid, controlled structure mirrors the "charter\'d" restrictions Blake describes \u2014 even the poem\'s form feels constrained.\n\n' +
    'Metre: Predominantly iambic tetrameter (four stressed beats per line), creating a steady, marching rhythm like footsteps through the city. This regularity reinforces the relentless, inescapable nature of suffering.\n\n' +
    'Anaphora: "In every" is repeated four times in stanza 2, creating a cumulative, overwhelming effect. The repetition makes suffering feel universal and inescapable.\n\n' +
    'Repetition: "Charter\'d" (lines 1\u20132), "marks" (lines 3\u20134), and "every" (throughout stanza 2) are repeated to hammer home key ideas. Blake uses simple, powerful language with deliberate repetition rather than elaborate vocabulary.\n\n' +
    'Cyclical structure: The poem begins with a baby\'s "cry of fear" in stanza 2 and ends with a "new-born Infant\'s tear" in stanza 4, suggesting the cycle of suffering repeats endlessly from generation to generation.\n\n' +
    'Volta: "But most" at the start of the final stanza signals a shift to the poem\'s most shocking imagery, building to the devastating climax of the "Marriage hearse".\n\n' +
    'First-person narrator: The use of "I" makes the poem feel like a personal testimony \u2014 Blake positions himself as an eyewitness to London\'s horrors, giving the poem moral authority.',

  formAndStructureAr:
    '\u0627\u0644\u0634\u0643\u0644: \u0623\u0631\u0628\u0639 quatrains (\u0645\u0642\u0637\u0648\u0639\u0627\u062a \u0645\u0646 \u0623\u0631\u0628\u0639 \u0623\u0628\u064a\u0627\u062a) \u0628\u0646\u0638\u0627\u0645 \u0642\u0627\u0641\u064a\u0629 \u0645\u0646\u062a\u0638\u0645 ABAB \u0645\u0646 \u0628\u062f\u0627\u064a\u062a\u0647\u0627 \u0644\u0646\u0647\u0627\u064a\u062a\u0647\u0627. \u0647\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u0635\u0627\u0631\u0645\u0629 \u062a\u0639\u0643\u0633 \u0627\u0644\u0642\u064a\u0648\u062f \u0627\u0644\u0640"charter\'d" \u0627\u0644\u0644\u064a \u064a\u0648\u0635\u0641\u0647\u0627 Blake \u2014 \u062d\u062a\u0649 \u0634\u0643\u0644 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0646\u0641\u0633\u0647 \u064a\u062d\u0633\u0651 \u0627\u0644\u0642\u0627\u0631\u0626 \u0625\u0646\u0647 \u0645\u0642\u064a\u0651\u062f.\n\n' +
    '\u0627\u0644\u0648\u0632\u0646: \u063a\u0627\u0644\u0628\u0627\u064b iambic tetrameter (\u0623\u0631\u0628\u0639 \u0646\u0628\u0631\u0627\u062a \u0645\u0634\u062f\u0651\u062f\u0629 \u0641\u064a \u0643\u0644 \u0628\u064a\u062a)\u060c \u0648\u064a\u062e\u0644\u0642 \u0625\u064a\u0642\u0627\u0639 \u062b\u0627\u0628\u062a \u064a\u0634\u0628\u0647 \u0645\u0634\u064a \u0627\u0644\u0623\u0642\u062f\u0627\u0645 \u0641\u064a \u0627\u0644\u0634\u0648\u0627\u0631\u0639. \u0647\u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0645 \u064a\u0623\u0643\u0651\u062f \u0639\u0644\u0649 \u0627\u0644\u0637\u0627\u0628\u0639 \u0627\u0644\u0645\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0644\u064a \u0645\u0627 \u0644\u0647 \u0645\u0647\u0631\u0628 \u0644\u0644\u0645\u0639\u0627\u0646\u0627\u0629.\n\n' +
    'Anaphora: \u0639\u0628\u0627\u0631\u0629 "In every" \u062a\u062a\u0643\u0631\u0651\u0631 \u0623\u0631\u0628\u0639 \u0645\u0631\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u062b\u0627\u0646\u064a\u060c \u0648\u062a\u062e\u0644\u0642 \u0623\u062b\u0631 \u062a\u0631\u0627\u0643\u0645\u064a \u064a\u063a\u0645\u0631 \u0627\u0644\u0642\u0627\u0631\u0626. \u0627\u0644\u062a\u0643\u0631\u0627\u0631 \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u062a\u062d\u0633 \u0625\u0646\u0647\u0627 \u0634\u0627\u0645\u0644\u0629\u060c \u0648\u0644\u0627 \u0645\u0641\u0631\u0651 \u0645\u0646\u0647\u0627.\n\n' +
    '\u0627\u0644\u062a\u0643\u0631\u0627\u0631: \u0643\u0644\u0645\u0627\u062a "charter\'d" (\u0623\u0628\u064a\u0627\u062a 1\u20132)\u060c \u0648"marks" (\u0623\u0628\u064a\u0627\u062a 3\u20134)\u060c \u0648"every" (\u0637\u0648\u0644 \u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u062b\u0627\u0646\u064a)\u060c \u062a\u062a\u0643\u0631\u0651\u0631 \u0639\u0634\u0627\u0646 \u062a\u062b\u0628\u0651\u062a \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629. Blake \u064a\u0633\u062a\u062e\u062f\u0645 \u0644\u063a\u0629 \u0628\u0633\u064a\u0637\u0629 \u0642\u0648\u064a\u0629 \u0645\u0639 \u062a\u0643\u0631\u0627\u0631 \u0645\u0642\u0635\u0648\u062f\u060c \u0628\u062f\u0644 \u0627\u0644\u0645\u0641\u0631\u062f\u0627\u062a \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0641\u0629.\n\n' +
    '\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062f\u0627\u0626\u0631\u064a\u0629: \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0628\u062f\u0623 \u0628\u0640"cry of fear" \u0644\u0631\u0636\u064a\u0639 \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u062b\u0627\u0646\u064a\u060c \u0648\u062a\u0646\u062a\u0647\u064a \u0628\u0640"new-born Infant\'s tear" \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u0631\u0627\u0628\u0639. \u0647\u0627\u0644\u0634\u064a \u064a\u0644\u0645\u0651\u062d \u0625\u0646 \u062f\u0648\u0631\u0629 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u062a\u062a\u0643\u0631\u0651\u0631 \u0628\u0644\u0627 \u0646\u0647\u0627\u064a\u0629 \u0645\u0646 \u062c\u064a\u0644 \u0644\u062c\u064a\u0644.\n\n' +
    'Volta: \u0639\u0628\u0627\u0631\u0629 "But most" \u0641\u064a \u0628\u062f\u0627\u064a\u0629 \u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u0623\u062e\u064a\u0631 \u062a\u0634\u064a\u0631 \u0644\u062a\u062d\u0648\u0651\u0644 \u0646\u062d\u0648 \u0623\u0642\u0633\u0649 \u0635\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u062f\u0629\u060c \u0648\u062a\u0628\u0646\u064a \u0627\u0644\u0630\u0631\u0648\u0629 \u0627\u0644\u0645\u062f\u0645\u0651\u0631\u0629 \u0644\u0640"Marriage hearse".\n\n' +
    '\u0627\u0644\u0631\u0627\u0648\u064a \u0628\u0636\u0645\u064a\u0631 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645: \u0627\u0633\u062a\u062e\u062f\u0627\u0645 "I" \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u062d\u0633\u0651 \u0643\u0623\u0646\u0647\u0627 \u0634\u0647\u0627\u062f\u0629 \u0634\u062e\u0635\u064a\u0629 \u2014 Blake \u064a\u062d\u0637 \u0646\u0641\u0633\u0647 \u0634\u0627\u0647\u062f \u0639\u064a\u0627\u0646 \u0639\u0644\u0649 \u0645\u0622\u0633\u064a \u0644\u0646\u062f\u0646\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0633\u0644\u0637\u0629 \u0623\u062e\u0644\u0627\u0642\u064a\u0629.',

  keyQuotes: [
    {
      quote: 'charter\u2019d street',
      analysis:
        '"Charter\'d" means legally mapped or commercially controlled. Blake subverts the positive connotation of "charter" (a document granting rights) to show how rights have become restrictions \u2014 everything in London is owned and commodified.',
      themes: ['Power', 'Oppression', 'Corruption'],
      analysisAr:
        '\u0643\u0644\u0645\u0629 "charter\'d" \u0645\u0639\u0646\u0627\u0647\u0627 \u0645\u0631\u0633\u0648\u0645 \u0642\u0627\u0646\u0648\u0646\u064a\u0627\u064b \u0623\u0648 \u062e\u0627\u0636\u0639 \u0644\u0644\u0633\u064a\u0637\u0631\u0629 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629. Blake \u064a\u0642\u0644\u0628 \u0627\u0644\u0625\u064a\u062d\u0627\u0621 \u0627\u0644\u0625\u064a\u062c\u0627\u0628\u064a \u0644\u0643\u0644\u0645\u0629 "charter" (\u0648\u062b\u064a\u0642\u0629 \u062a\u0645\u0646\u062d \u062d\u0642\u0648\u0642) \u0639\u0634\u0627\u0646 \u064a\u0628\u064a\u0651\u0646 \u0643\u064a\u0641 \u0625\u0646 \u0627\u0644\u062d\u0642\u0648\u0642 \u062a\u062d\u0648\u0651\u0644\u062a \u0644\u0642\u064a\u0648\u062f \u2014 \u0643\u0644 \u0634\u064a \u0641\u064a \u0644\u0646\u062f\u0646 \u0635\u0627\u0631 \u0645\u0645\u062a\u0644\u064e\u0643 \u0648\u0645\u064f\u0633\u0644\u064e\u0651\u0639.',
      themesAr: [
        '\u0627\u0644\u0633\u0644\u0637\u0629',
        '\u0627\u0644\u0638\u0644\u0645',
        '\u0627\u0644\u0641\u0633\u0627\u062f',
      ],
    },
    {
      quote: 'charter\u2019d Thames',
      analysis:
        'Extending "charter\'d" to the river Thames \u2014 a force of nature \u2014 suggests that even the natural world has been controlled and exploited by those in power. Nothing is free.',
      themes: ['Power', 'Nature vs Industry'],
      analysisAr:
        '\u0644\u0645\u0651\u0627 Blake \u064a\u0645\u062f\u0651 \u0635\u0641\u0629 "charter\'d" \u062d\u062a\u0649 \u0644\u0646\u0647\u0631 \u0627\u0644\u062a\u0627\u064a\u0645\u0632 (Thames) \u2014 \u0627\u0644\u0644\u064a \u0647\u0648 \u0642\u0648\u0629 \u0637\u0628\u064a\u0639\u064a\u0629 \u2014 \u064a\u0644\u0645\u0651\u062d \u0625\u0646 \u062d\u062a\u0649 \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0635\u0627\u0631\u062a \u062a\u062d\u062a \u0633\u064a\u0637\u0631\u0629 \u0623\u0635\u062d\u0627\u0628 \u0627\u0644\u0646\u0641\u0648\u0630 \u0648\u064a\u0633\u062a\u063a\u0644\u0651\u0648\u0646\u0647\u0627. \u0645\u0627 \u0641\u064a\u0647 \u0634\u064a \u062d\u0631 \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629.',
      themesAr: [
        '\u0627\u0644\u0633\u0644\u0637\u0629',
        '\u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0635\u0646\u0627\u0639\u0629',
      ],
    },
    {
      quote: 'mind-forg\u2019d manacles',
      analysis:
        'The most important metaphor in the poem. "Manacles" are handcuffs, but these are "mind-forg\'d" \u2014 created in the mind. People are imprisoned not by physical chains but by their own acceptance of oppression, fear, and social conditioning.',
      themes: ['Oppression', 'Power', 'Individual Freedom'],
      analysisAr:
        '\u0623\u0647\u0645 \u0627\u0633\u062a\u0639\u0627\u0631\u0629 \u0641\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629. \u0643\u0644\u0645\u0629 "manacles" \u0645\u0639\u0646\u0627\u0647\u0627 \u0642\u064a\u0648\u062f \u062d\u062f\u064a\u062f \u0644\u0644\u0623\u064a\u062f\u064a\u060c \u0628\u0633 \u0647\u0630\u064a \u0627\u0644\u0642\u064a\u0648\u062f "mind-forg\'d" \u2014 \u0645\u0635\u0646\u0648\u0639\u0629 \u0641\u064a \u0627\u0644\u0639\u0642\u0644. \u0627\u0644\u0646\u0627\u0633 \u0645\u0633\u062c\u0648\u0646\u064a\u0646 \u0645\u0648 \u0628\u0633\u0644\u0627\u0633\u0644 \u0645\u0627\u062f\u064a\u0651\u0629\u060c \u0628\u0644 \u0628\u0642\u0628\u0648\u0644\u0647\u0645 \u0627\u0644\u0630\u0627\u062a\u064a \u0644\u0644\u0638\u0644\u0645 \u0648\u0627\u0644\u062e\u0648\u0641 \u0648\u0627\u0644\u062a\u0646\u0634\u0626\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629.',
      themesAr: [
        '\u0627\u0644\u0638\u0644\u0645',
        '\u0627\u0644\u0633\u0644\u0637\u0629',
        '\u0627\u0644\u062d\u0631\u064a\u0629 \u0627\u0644\u0641\u0631\u062f\u064a\u0629',
      ],
    },
    {
      quote: 'every black\u2019ning Church appalls',
      analysis:
        '"Black\'ning" works literally (soot from industry) and metaphorically (moral corruption). "Appalls" puns on a funeral pall. The Church, which should protect the vulnerable, is complicit in their suffering.',
      themes: ['Corruption', 'Religion', 'Hypocrisy'],
      analysisAr:
        '\u0643\u0644\u0645\u0629 "black\'ning" \u062a\u0634\u062a\u063a\u0644 \u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u064a\u064a\u0646: \u062d\u0631\u0641\u064a (\u0633\u062e\u0627\u0645 \u0627\u0644\u0645\u0635\u0627\u0646\u0639)\u060c \u0648\u0631\u0645\u0632\u064a (\u0627\u0644\u0641\u0633\u0627\u062f \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a). \u0648\u0643\u0644\u0645\u0629 "appalls" \u0641\u064a\u0647\u0627 \u062a\u0648\u0631\u064a\u0629 \u0645\u0639 "pall" (\u0642\u0645\u0627\u0634 \u0627\u0644\u0643\u0641\u0646 \u0627\u0644\u0644\u064a \u064a\u063a\u0637\u0651\u064a \u0627\u0644\u062a\u0627\u0628\u0648\u062a). \u0627\u0644\u0643\u0646\u064a\u0633\u0629 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0625\u0646\u0647\u0627 \u062a\u062d\u0645\u064a \u0627\u0644\u0636\u0639\u064a\u0641\u060c \u0635\u0627\u0631\u062a \u0634\u0631\u064a\u0643\u0629 \u0641\u064a \u0645\u0639\u0627\u0646\u0627\u062a\u0647.',
      themesAr: [
        '\u0627\u0644\u0641\u0633\u0627\u062f',
        '\u0627\u0644\u062f\u064a\u0646',
        '\u0627\u0644\u0646\u0641\u0627\u0642',
      ],
    },
    {
      quote: 'the hapless Soldier\u2019s sigh',
      analysis:
        '"Hapless" means unfortunate or powerless. The soldier cannot speak out \u2014 he can only "sigh". His quiet suffering contrasts with the violence of his blood running down Palace walls, showing the human cost of war.',
      themes: ['Power', 'Conflict', 'Individual Suffering'],
      analysisAr:
        '\u0643\u0644\u0645\u0629 "hapless" \u0645\u0639\u0646\u0627\u0647\u0627 \u0628\u0627\u0626\u0633 \u0648\u0645\u062d\u0631\u0648\u0645 \u0645\u0646 \u0627\u0644\u062d\u0648\u0644. \u0627\u0644\u062c\u0646\u062f\u064a \u0645\u0627 \u064a\u0642\u062f\u0631 \u064a\u062d\u0643\u064a \u0648\u064a\u0639\u062a\u0631\u0636 \u2014 \u0643\u0644 \u0627\u0644\u0644\u064a \u064a\u0642\u062f\u0631 \u0639\u0644\u064a\u0647 \u0647\u0648 "sigh"\u060c \u062a\u0646\u0647\u064a\u062f\u0629. \u0645\u0639\u0627\u0646\u0627\u062a\u0647 \u0627\u0644\u0635\u0627\u0645\u062a\u0629 \u062a\u062a\u0646\u0627\u0642\u0636 \u0645\u0639 \u0639\u0646\u0641 \u0645\u0646\u0638\u0631 \u062f\u0645\u0651\u0647 \u0648\u0647\u0648 \u064a\u0633\u064a\u0644 \u0639\u0644\u0649 \u062c\u062f\u0631\u0627\u0646 \u0627\u0644\u0642\u0635\u0631\u060c \u0648\u0647\u0630\u0627 \u064a\u0628\u064a\u0651\u0646 \u0627\u0644\u0643\u0644\u0641\u0629 \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a\u0629 \u0644\u0644\u062d\u0631\u0628.',
      themesAr: [
        '\u0627\u0644\u0633\u0644\u0637\u0629',
        '\u0627\u0644\u0635\u0631\u0627\u0639',
        '\u0645\u0639\u0627\u0646\u0627\u0629 \u0627\u0644\u0641\u0631\u062f',
      ],
    },
    {
      quote: 'Runs in blood down Palace walls',
      analysis:
        'A shocking visual image that directly blames the monarchy for soldiers\' deaths. "Palace walls" represent royal power, and the blood imagery links to the French Revolution, suggesting violent consequences for oppressive rulers.',
      themes: ['Power', 'Conflict', 'Revolution'],
      analysisAr:
        '\u0635\u0648\u0631\u0629 \u0628\u0635\u0631\u064a\u0629 \u0635\u0627\u062f\u0645\u0629\u060c \u062a\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0645\u0648\u062a \u0627\u0644\u062c\u0646\u0648\u062f \u0628\u0634\u0643\u0644 \u0645\u0628\u0627\u0634\u0631. "Palace walls" \u062a\u0631\u0645\u0632 \u0644\u0644\u0633\u0644\u0637\u0629 \u0627\u0644\u0645\u0644\u0643\u064a\u0629\u060c \u0648\u0635\u0648\u0631\u0629 \u0627\u0644\u062f\u0645 \u062a\u0631\u0628\u0637 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0628\u0627\u0644\u062b\u0648\u0631\u0629 \u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629\u060c \u0648\u062a\u0644\u0645\u0651\u062d \u0625\u0646 \u0627\u0644\u062d\u0643\u0651\u0627\u0645 \u0627\u0644\u0638\u0627\u0644\u0645\u064a\u0646 \u0628\u064a\u062d\u0635\u062f\u0648\u0646 \u0639\u0648\u0627\u0642\u0628 \u0639\u0646\u064a\u0641\u0629.',
      themesAr: [
        '\u0627\u0644\u0633\u0644\u0637\u0629',
        '\u0627\u0644\u0635\u0631\u0627\u0639',
        '\u0627\u0644\u062b\u0648\u0631\u0629',
      ],
    },
    {
      quote: 'midnight streets',
      analysis:
        '"Midnight" creates a dark, concealed atmosphere. The worst horrors \u2014 prostitution, disease \u2014 happen in the darkness, hidden from respectable society but no less real.',
      themes: ['Corruption', 'Concealment'],
      analysisAr:
        '\u0643\u0644\u0645\u0629 "Midnight" \u062a\u062e\u0644\u0642 \u062c\u0648 \u0645\u0638\u0644\u0645 \u0648\u0645\u062e\u0641\u064a. \u0623\u0634\u062f \u0627\u0644\u0645\u0622\u0633\u064a \u2014 \u0627\u0644\u062f\u0639\u0627\u0631\u0629\u060c \u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u2014 \u062a\u0635\u064a\u0631 \u0641\u064a \u0627\u0644\u0638\u0644\u0645\u0629\u060c \u0628\u0639\u064a\u062f \u0639\u0646 \u0623\u0639\u064a\u0646 \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u062d\u062a\u0631\u0645\u060c \u0628\u0633 \u0647\u0630\u064a \u0627\u0644\u0645\u0622\u0633\u064a \u0645\u0648\u062c\u0648\u062f\u0629 \u0641\u0639\u0644\u0627\u064b.',
      themesAr: [
        '\u0627\u0644\u0641\u0633\u0627\u062f',
        '\u0627\u0644\u062a\u0633\u062a\u0651\u0631',
      ],
    },
    {
      quote: 'Marriage hearse',
      analysis:
        "A devastating oxymoron that ends the poem. Marriage (love, life, hope) is combined with a hearse (death, funerals). In Blake's London, love is poisoned by disease and social corruption. There is no escape, not even in the institution meant to celebrate human connection.",
      themes: ['Corruption', 'Death', 'Loss of Innocence'],
      analysisAr:
        'oxymoron \u0645\u062f\u0645\u0651\u0631 \u062a\u0646\u062a\u0647\u064a \u0628\u0647 \u0627\u0644\u0642\u0635\u064a\u062f\u0629. \u0627\u0644\u0632\u0648\u0627\u062c (\u062d\u0628\u060c \u062d\u064a\u0627\u0629\u060c \u0623\u0645\u0644) \u064a\u062f\u0645\u062c \u0645\u0639 \u0627\u0644\u0640hearse (\u0645\u0648\u062a\u060c \u062c\u0646\u0627\u0632\u0629). \u0641\u064a \u0644\u0646\u062f\u0646 \u0627\u0644\u0644\u064a \u064a\u0648\u0635\u0641\u0647\u0627 Blake\u060c \u0627\u0644\u062d\u0628 \u0645\u0633\u0645\u0648\u0645 \u0628\u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0648\u0628\u0641\u0633\u0627\u062f \u0627\u0644\u0645\u062c\u062a\u0645\u0639. \u0645\u0627 \u0641\u064a\u0647 \u0645\u0647\u0631\u0628\u060c \u062d\u062a\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0627\u0644\u0644\u064a \u064a\u0641\u062a\u0631\u0636 \u0625\u0646\u0647\u0627 \u062a\u062d\u062a\u0641\u064a \u0628\u0627\u0644\u062a\u0631\u0627\u0628\u0637 \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a \u0635\u0627\u0631\u062a \u0645\u0633\u0645\u0648\u0645\u0629.',
      themesAr: [
        '\u0627\u0644\u0641\u0633\u0627\u062f',
        '\u0627\u0644\u0645\u0648\u062a',
        '\u0641\u0642\u062f\u0627\u0646 \u0627\u0644\u0628\u0631\u0627\u0621\u0629',
      ],
    },
  ],

  languageDevices: [
    {
      device: 'Anaphora',
      example:
        'In every cry of every Man, / In every Infant\u2019s cry of fear, / In every voice: in every ban',
      effect:
        'The relentless repetition of "In every" creates a cumulative, overwhelming effect. The reader is bombarded with suffering just as Blake is bombarded by what he sees and hears. It makes the oppression feel total and universal.',
      lineRef: 5,
      effectAr:
        '\u062a\u0643\u0631\u0627\u0631 "In every" \u0628\u062f\u0648\u0646 \u062a\u0648\u0642\u0651\u0641 \u064a\u062e\u0644\u0642 \u0623\u062b\u0631 \u062a\u0631\u0627\u0643\u0645\u064a \u064a\u063a\u0645\u0631 \u0627\u0644\u0642\u0627\u0631\u0626. \u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u062a\u0639\u0631\u0651\u0636 \u0644\u0642\u0635\u0641 \u0645\u0646 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629\u060c \u062a\u0645\u0627\u0645\u0627\u064b \u0645\u062b\u0644 \u0645\u0627 Blake \u0646\u0641\u0633\u0647 \u064a\u062a\u0639\u0631\u0651\u0636 \u0644\u0642\u0635\u0641 \u0628\u0635\u0631\u064a \u0648\u0633\u0645\u0639\u064a. \u0647\u0627\u0644\u0634\u064a \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0638\u0644\u0645 \u064a\u062d\u0633\u0651 \u0634\u0627\u0645\u0644 \u0648\u0645\u0637\u0644\u0642.',
    },
    {
      device: 'Oxymoron',
      example: 'Marriage hearse',
      effect:
        "Fusing two contradictory concepts \u2014 marriage (celebration of life) and hearse (vehicle of death) \u2014 creates a shocking final image. It encapsulates Blake's argument that corruption has poisoned every aspect of human life, even love itself.",
      lineRef: 19,
      effectAr:
        '\u062f\u0645\u062c \u0645\u0641\u0647\u0648\u0645\u064a\u0646 \u0645\u062a\u0646\u0627\u0642\u0636\u064a\u0646 \u2014 \u0627\u0644\u0632\u0648\u0627\u062c (\u0627\u062d\u062a\u0641\u0627\u0644 \u0628\u0627\u0644\u062d\u064a\u0627\u0629) \u0648\u0627\u0644\u0640hearse (\u0639\u0631\u0628\u0629 \u0627\u0644\u0645\u0648\u062a\u0649) \u2014 \u064a\u062e\u0644\u0642 \u0635\u0648\u0631\u0629 \u062e\u062a\u0627\u0645\u064a\u0629 \u0635\u0627\u062f\u0645\u0629. \u0648\u062a\u0644\u062e\u0651\u0635 \u062d\u062c\u0629 Blake \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629: \u0627\u0644\u0641\u0633\u0627\u062f \u0633\u0645\u0651\u0645 \u0643\u0644 \u062c\u0627\u0646\u0628 \u0645\u0646 \u062c\u0648\u0627\u0646\u0628 \u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u0628\u0634\u0631\u064a\u0629\u060c \u062d\u062a\u0649 \u0627\u0644\u062d\u0628 \u0646\u0641\u0633\u0647.',
    },
    {
      device: 'Synesthesia',
      example: 'The mind-forg\u2019d manacles I hear',
      effect:
        'Manacles are seen, but Blake "hears" them. This blending of senses suggests that oppression is so pervasive it overwhelms every sense. The psychological chains are audible in every cry and sigh.',
      lineRef: 8,
      effectAr:
        '\u0627\u0644\u0642\u064a\u0648\u062f (manacles) \u0641\u064a \u0627\u0644\u0623\u0635\u0644 \u0634\u064a \u064a\u064f\u0634\u0627\u0641\u060c \u0628\u0633 Blake "\u064a\u0633\u0645\u0639\u0647\u0627". \u0647\u0627\u0644\u062e\u0644\u0637 \u0628\u064a\u0646 \u0627\u0644\u062d\u0648\u0627\u0633 (synesthesia) \u064a\u0644\u0645\u0651\u062d \u0625\u0646 \u0627\u0644\u0638\u0644\u0645 \u0645\u0646\u062a\u0634\u0631 \u0644\u062f\u0631\u062c\u0629 \u0625\u0646\u0647 \u064a\u063a\u0645\u0631 \u0643\u0644 \u0627\u0644\u062d\u0648\u0627\u0633. \u0627\u0644\u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0646\u0641\u0633\u064a\u0629 \u064a\u0642\u062f\u0631 \u064a\u0633\u0645\u0639\u0647\u0627 \u0641\u064a \u0643\u0644 \u0635\u0631\u062e\u0629 \u0648\u062a\u0646\u0647\u064a\u062f\u0629.',
    },
    {
      device: 'Visual imagery',
      example: 'Runs in blood down Palace walls',
      effect:
        "This vivid, violent image transforms an abstract concept (the cost of war) into something viscerally concrete. The reader can see the blood, making the monarch's responsibility undeniable.",
      lineRef: 15,
      effectAr:
        '\u0647\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0639\u0646\u064a\u0641\u0629 \u0648\u0627\u0644\u062d\u064a\u0651\u0629 \u062a\u062d\u0648\u0651\u0644 \u0645\u0641\u0647\u0648\u0645 \u0645\u062c\u0631\u0651\u062f (\u0643\u0644\u0641\u0629 \u0627\u0644\u062d\u0631\u0628) \u0644\u0634\u064a \u0645\u0644\u0645\u0648\u0633 \u0648\u0645\u0631\u0626\u064a. \u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u0642\u062f\u0631 \u064a\u0634\u0648\u0641 \u0627\u0644\u062f\u0645 \u0628\u0639\u064a\u0646\u0647\u060c \u0648\u0647\u0630\u0627 \u064a\u062e\u0644\u0651\u064a \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0627\u0644\u0645\u0644\u0643 \u0645\u0627 \u062a\u0646\u0643\u0631.',
    },
    {
      device: 'Emotive language',
      example: 'hapless Soldier\u2019s sigh',
      effect:
        '"Hapless" evokes pity, while "sigh" suggests resignation and powerlessness. Together they portray the soldier as a victim, not a hero \u2014 challenging patriotic narratives of military glory.',
      lineRef: 14,
      effectAr:
        '\u0643\u0644\u0645\u0629 "hapless" \u062a\u0633\u062a\u062d\u0636\u0631 \u0627\u0644\u0634\u0641\u0642\u0629\u060c \u0623\u0645\u0627 "sigh" \u0641\u062a\u0648\u062d\u064a \u0628\u0627\u0644\u0627\u0633\u062a\u0633\u0644\u0627\u0645 \u0648\u0627\u0644\u0639\u062c\u0632. \u0627\u0644\u0643\u0644\u0645\u062a\u064a\u0646 \u0645\u0639 \u0628\u0639\u0636 \u064a\u0635\u0648\u0651\u0631\u0648\u0646 \u0627\u0644\u062c\u0646\u062f\u064a \u0643\u0636\u062d\u064a\u0629\u060c \u0645\u0648 \u0643\u0628\u0637\u0644 \u2014 \u0648\u0647\u0630\u0627 \u062a\u062d\u062f\u0651\u064a \u0644\u0644\u0633\u0631\u062f\u064a\u0627\u062a \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0627\u0644\u0644\u064a \u062a\u0645\u062c\u0651\u062f \u0627\u0644\u0645\u062c\u062f \u0627\u0644\u0639\u0633\u0643\u0631\u064a.',
    },
    {
      device: 'Symbolism',
      example: 'every black\u2019ning Church',
      effect:
        'The Church symbolises institutional religion and its moral authority. "Black\'ning" symbolises both industrial pollution and moral decay. Blake attacks the Church as a hypocritical institution that ignores suffering.',
      lineRef: 13,
      effectAr:
        '\u0627\u0644\u0643\u0646\u064a\u0633\u0629 \u062a\u0631\u0645\u0632 \u0644\u0644\u062f\u064a\u0646 \u0627\u0644\u0645\u0624\u0633\u0651\u0633\u064a \u0648\u0633\u0644\u0637\u062a\u0647 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a\u0629. \u0648\u0643\u0644\u0645\u0629 "black\'ning" \u062a\u0631\u0645\u0632 \u0644\u0644\u062a\u0644\u0648\u0651\u062b \u0627\u0644\u0635\u0646\u0627\u0639\u064a \u0648\u0644\u0644\u062a\u0639\u0641\u0651\u0646 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a \u0645\u0639 \u0628\u0639\u0636. Blake \u064a\u0647\u0627\u062c\u0645 \u0627\u0644\u0643\u0646\u064a\u0633\u0629 \u0643\u0645\u0624\u0633\u0633\u0629 \u0645\u0646\u0627\u0641\u0642\u0629 \u062a\u062a\u062c\u0627\u0647\u0644 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u0627\u0644\u0644\u064a \u062d\u0648\u0627\u0644\u064a\u0647\u0627.',
    },
    {
      device: 'Semantic field of suffering',
      example: 'weakness, woe, cry, fear, curse, plagues, blights',
      effect:
        'A sustained semantic field of pain, disease, and despair runs throughout the poem. There is no relief or positive language \u2014 Blake creates an unbroken atmosphere of hopelessness.',
      lineRef: 3,
      effectAr:
        '\u062d\u0642\u0644 \u062f\u0644\u0627\u0644\u064a \u0645\u062a\u0648\u0627\u0635\u0644 \u0645\u0646 \u0627\u0644\u0623\u0644\u0645 \u0648\u0627\u0644\u0645\u0631\u0636 \u0648\u0627\u0644\u064a\u0623\u0633 \u064a\u0645\u062a\u062f \u0639\u0628\u0631 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0647\u0627. \u0645\u0627 \u0641\u064a\u0647 \u0623\u064a \u0631\u0627\u062d\u0629 \u0623\u0648 \u0644\u063a\u0629 \u0625\u064a\u062c\u0627\u0628\u064a\u0629 \u2014 Blake \u064a\u062e\u0644\u0642 \u062c\u0648 \u064a\u0623\u0633 \u0645\u062a\u0648\u0627\u0635\u0644 \u0645\u0627 \u064a\u0646\u0642\u0637\u0639.',
    },
    {
      device: 'Plosive sounds',
      example: 'Blasts the new-born Infant\u2019s tear / And blights with plagues',
      effect:
        'The harsh plosive "b" sounds in "Blasts", "blights", and "plagues" create an aggressive, violent aural quality. The sounds themselves feel destructive, mirroring the content.',
      lineRef: 18,
      effectAr:
        '\u0623\u0635\u0648\u0627\u062a \u0627\u0644\u0640plosive \u0627\u0644\u0642\u0627\u0633\u064a\u0629 \u0641\u064a \u062d\u0631\u0641 "b" \u0641\u064a \u0643\u0644\u0645\u0627\u062a "Blasts" \u0648"blights" \u0648"plagues" \u062a\u062e\u0644\u0642 \u0637\u0627\u0628\u0639 \u0635\u0648\u062a\u064a \u0639\u062f\u0648\u0627\u0646\u064a \u0648\u0639\u0646\u064a\u0641. \u0627\u0644\u0623\u0635\u0648\u0627\u062a \u0628\u0646\u0641\u0633\u0647\u0627 \u062a\u062d\u0633\u0651 \u0645\u062f\u0645\u0651\u0631\u0629\u060c \u0648\u062a\u0639\u0643\u0633 \u0627\u0644\u0645\u0639\u0646\u0649.',
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'lon-1',
    question: 'What does the word "charter\'d" suggest in the opening lines?',
    type: 'multiple-choice',
    options: [
      'The streets are well-maintained',
      'Everything in London is controlled, owned, and commercialised',
      'The streets are full of tourists with maps',
      'London is a free and open city',
    ],
    correctIndex: 1,
    explanation:
      'Blake uses "charter\'d" to suggest that even the streets and the Thames have been bought, sold, and controlled. Freedom is an illusion - everything is owned by those in power.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'lon-2',
    question: 'What are "mind-forg\'d manacles"?',
    type: 'multiple-choice',
    options: [
      'Physical chains used on prisoners',
      'Psychological chains - people are imprisoned by their own acceptance of oppression',
      'Decorative bracelets worn by Londoners',
      'Laws written by Parliament',
    ],
    correctIndex: 1,
    explanation:
      '"Mind-forg\'d manacles" is Blake\'s most important metaphor. The chains are not physical but mental - people have internalised their oppression and accepted it as normal.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'lon-3',
    question: 'What institutions does Blake attack in stanza 3?',
    type: 'multiple-choice',
    options: [
      'Schools and hospitals',
      'The Church and the monarchy',
      'Factories and shops',
      'The army and the navy',
    ],
    correctIndex: 1,
    explanation:
      'Blake attacks the Church ("every black\'ning Church appalls") for ignoring child chimney sweeps, and the monarchy ("Runs in blood down Palace walls") for sending soldiers to die.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'lon-4',
    question: 'What is the effect of the oxymoron "Marriage hearse"?',
    type: 'multiple-choice',
    options: [
      'It celebrates wedding traditions',
      'It fuses love and death, showing that corruption has poisoned every aspect of life',
      'It describes a funeral procession',
      'It shows that marriage is popular in London',
    ],
    correctIndex: 1,
    explanation:
      'Marriage (love, life, new beginnings) is combined with a hearse (death, endings). Blake argues that corruption has destroyed even the most sacred human institutions.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'lon-5',
    question: 'What structural feature dominates stanza 2?',
    type: 'multiple-choice',
    options: [
      'Rhyming couplets',
      'Anaphora - the repetition of "In every"',
      'A volta or turning point',
      'Lack of punctuation',
    ],
    correctIndex: 1,
    explanation:
      '"In every" is repeated four times in stanza 2, creating a relentless, overwhelming effect. The repetition makes suffering feel universal and inescapable.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'lon-6',
    question: 'What does "Runs in blood down Palace walls" suggest about the monarchy?',
    type: 'multiple-choice',
    options: [
      'The Palace is being redecorated',
      "Blake directly blames the monarchy for soldiers' deaths",
      'The Palace is under attack by revolutionaries',
      'The soldier is protecting the Palace',
    ],
    correctIndex: 1,
    explanation:
      "This vivid image places blood directly on the walls of royal power, making the monarchy's responsibility for sending soldiers to die undeniable. It may also foreshadow revolution.",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'lon-7',
    question: 'When was London published, and what was happening historically?',
    type: 'multiple-choice',
    options: [
      '1818, during the Romantic period',
      '1794, during the Industrial Revolution and aftermath of the French Revolution',
      '1850, during the Victorian era',
      '1914, at the start of World War I',
    ],
    correctIndex: 1,
    explanation:
      'London was published in Songs of Experience in 1794. Blake wrote during the Industrial Revolution, which brought poverty and child labour, and was influenced by the French Revolution (1789).',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'lon-8',
    question: 'Why does Blake use iambic tetrameter throughout the poem?',
    type: 'multiple-choice',
    options: [
      'It was the only metre he knew',
      'The steady, marching rhythm mirrors the relentless, inescapable nature of suffering',
      'It makes the poem easier to memorise',
      'It creates a cheerful, upbeat tone',
    ],
    correctIndex: 1,
    explanation:
      'The regular four-beat rhythm sounds like footsteps through the city, reinforcing the sense of relentless, unavoidable oppression. The rigid form also mirrors the "charter\'d" restrictions Blake describes.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'lon-9',
    question: "How does the cyclical structure of the poem reinforce Blake's message?",
    type: 'multiple-choice',
    options: [
      'It shows London is improving over time',
      'It suggests the cycle of suffering repeats endlessly from generation to generation',
      'It creates a sense of resolution',
      "It reflects the circular layout of London's streets",
    ],
    correctIndex: 1,
    explanation:
      'The poem begins with an infant\'s "cry of fear" in stanza 2 and ends with a "new-born Infant\'s tear" in stanza 4. This cyclical structure suggests suffering passes from generation to generation with no escape.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'lon-10',
    question:
      "Which poem from the Power and Conflict anthology shares London's concern with institutional oppression?",
    type: 'multiple-choice',
    options: [
      'The Prelude by Wordsworth',
      'Checking Out Me History by John Agard',
      'Storm on the Island by Seamus Heaney',
      'Exposure by Wilfred Owen',
    ],
    correctIndex: 1,
    explanation:
      'Both London and Checking Out Me History attack institutional control over people. Blake targets the Church and monarchy; Agard targets the colonial education system. Both show how power structures suppress individuals.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'London explores the corruption of power, the suffering of ordinary people, and the loss of innocence in an industrialised city controlled by oppressive institutions.',
    keyPoints: [
      'Power corrupts - the Church, monarchy, and commercial interests all cause suffering',
      'Oppression is both external (institutions) and internal ("mind-forg\'d manacles")',
      'Innocence is destroyed - children suffer from birth (chimney sweeps, diseased infants)',
      'The cycle of suffering repeats endlessly from generation to generation',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Blake uses metaphor, repetition, oxymoron, and visceral imagery to create an unrelenting picture of suffering and institutional corruption.',
    keyPoints: [
      '"Mind-forg\'d manacles" - psychological chains of internalised oppression',
      '"Marriage hearse" - oxymoron fusing love with death',
      '"Runs in blood down Palace walls" - visceral imagery blaming the monarchy',
      'Semantic field of suffering throughout: weakness, woe, cry, curse, plagues',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four quatrains in ABAB rhyme with iambic tetrameter - the rigid, controlled structure mirrors the "charter\'d" restrictions of the city itself.',
    keyPoints: [
      "Regular ABAB rhyme scheme - the poem's form feels as constrained as the city",
      'Anaphora ("In every") in stanza 2 creates overwhelming cumulative effect',
      '"But most" signals the volta to the poem\'s darkest imagery in stanza 4',
      'First-person narrator gives the poem moral authority as eyewitness testimony',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Blake present the effects of power on ordinary people in London?',
  'Compare how Blake and one other poet from the anthology present the abuse of power.',
  'How does Blake use language and structure to create a sense of hopelessness in London?',
]

/* ── Compare-with poems ────────────────────────────────────────────── */

const comparePoems = [
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    link: '/revision/poetry/power-and-conflict/ozymandias',
    reason:
      'Both critique powerful rulers. Shelley shows power as temporary; Blake shows it as actively destructive.',
    themes: ['Power', 'Corruption'],
  },
  {
    title: 'The \u00c9migr\u00e9e',
    poet: 'Carol Rumens',
    link: '/revision/poetry/power-and-conflict/the-emigree',
    reason:
      "Both present a city as a symbol \u2014 Blake's London is oppressive; Rumens' city is idealised through memory despite political darkness.",
    themes: ['Place', 'Power'],
  },
  {
    title: 'Checking Out Me History',
    poet: 'John Agard',
    link: '/revision/poetry/power-and-conflict/checking-out-me-history',
    reason:
      'Both attack institutional control over people. Blake targets the Church and monarchy; Agard targets the colonial education system.',
    themes: ['Power', 'Oppression', 'Identity'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function LondonPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="London by William Blake - Analysis & Annotations"
        description="Line-by-line analysis of London with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          {
            name: 'Power and Conflict',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict',
          },
          {
            name: 'London',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/london',
          },
        ]}
      />
      {/* ── Back navigation ──────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Power and Conflict
        </Button>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h1 className="text-heading-lg font-heading text-foreground">London</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          William Blake &middot; <em>Songs of Experience</em> (1794)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {[
          'Power',
          'Oppression',
          'Corruption',
          'Conflict',
          'Loss of Innocence',
          'Individual Suffering',
        ].map((theme) => (
          <Badge key={theme} variant="outline" className="text-xs">
            {theme}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="London"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="London"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={londonPoem} />

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

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Public domain &mdash; quotations from London by William Blake reproduced freely.
      </p>
    </div>
  )
}
