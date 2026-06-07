'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
const london: PoemData = {
  title: 'London',
  poet: 'William Blake',
  lines: [
    {
      text: 'I wander thro\u2019 each charter\u2019d street,',
      annotations: [
        {
          type: 'Verb',
          note: '"Wander" implies aimlessness and detachment. The speaker observes the city without belonging to it \u2014 a typically Romantic outsider position.',
          color: '#3b82f6',
        },
        {
          type: 'Vocabulary',
          note: '"Charter\u2019d" means mapped, owned, controlled. Streets that should be public spaces have been taken over by commerce and law.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Near where the charter\u2019d Thames does flow.',
      annotations: [
        {
          type: 'Repetition',
          note: 'Even the river \u2014 nature\u2019s most uncontainable element \u2014 has been "charter\u2019d". Blake suggests no part of London escapes ownership.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And mark in every face I meet',
      annotations: [
        {
          type: 'Pun',
          note: '"Mark" carries two meanings: to notice, and to brand or scar. The speaker both records and recognises damage on every passer-by.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Marks of weakness, marks of woe.',
      annotations: [
        {
          type: 'Triple repetition',
          note: 'The triple "marks" turns the line into a hammer-blow. Suffering is universal \u2014 it shows on every face.',
          color: '#f59e0b',
        },
        {
          type: 'Key quote',
          note: 'Blake establishes the central observation of the poem: London is a city of visible misery.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'In every cry of every Man,',
      annotations: [
        {
          type: 'Anaphora',
          note: '"In every" begins four consecutive lines, creating a relentless drum-beat. The repetition forces the reader to feel how comprehensive the suffering is.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'In every Infants cry of fear,',
      annotations: [
        {
          type: 'Imagery',
          note: 'Even babies are crying in fear \u2014 not hunger or tiredness, but fear. Innocence is corrupted from birth in this city.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'In every voice: in every ban,',
      annotations: [
        {
          type: 'Vocabulary',
          note: '"Ban" can mean a curse, an official prohibition, or a marriage announcement. All three connect speech and authority \u2014 every voice carries the marks of control.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'The mind-forg\u2019d manacles I hear.',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Manacles (chains) are made not by the state but by the mind itself. Londoners have internalised their oppression \u2014 they accept being controlled.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The most famous line of the poem. Blake names the central evil: it is psychological as much as political.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'How the Chimney-sweepers cry',
      annotations: [
        {
          type: 'Social context',
          note: 'Chimney sweeps were children, often as young as four, sold by poor parents and forced into dangerous work. Their "cry" links labour with grief.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Every blackning Church appalls,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Blackning" works on two levels: the church is literally darkened by industrial soot, and morally darkened by complicity in child labour.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Blake attacks the Church for failing the children it should protect. The institution that preaches mercy is "appalled" but does nothing.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And the hapless Soldiers sigh',
      annotations: [
        {
          type: 'Adjective',
          note: '"Hapless" means unlucky and helpless. The soldier is not heroic \u2014 he is a victim of the system that sends him to die.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Runs in blood down Palace walls.',
      annotations: [
        {
          type: 'Imagery',
          note: 'The soldier\u2019s sigh becomes blood running down palace walls \u2014 a synaesthetic, almost surreal image. Blake makes the monarchy literally responsible for the soldier\u2019s death.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'Blake stains the palace with the blood of the men sent to fight for it. A direct political accusation.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'But most thro\u2019 midnight streets I hear',
      annotations: [
        {
          type: 'Volta',
          note: '"But most" signals a final turn. The previous stanza named institutions; now Blake reveals the worst suffering of all \u2014 in the streets at midnight.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'How the youthful Harlots curse',
      annotations: [
        {
          type: 'Social context',
          note: '"Youthful Harlots" \u2014 child prostitutes \u2014 represent the most extreme victims of London\u2019s economic system. Their curse passes pain to the next generation.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Blasts the new-born Infants tear,',
      annotations: [
        {
          type: 'Sexually transmitted disease',
          note: 'The "blast" is venereal disease passed from prostitute to baby. The child is born with infected, weeping eyes \u2014 ruined before life begins.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And blights with plagues the Marriage hearse.',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Marriage hearse" yokes wedding and funeral together. Blake suggests marriage in London is itself a kind of death \u2014 disease and unhappiness pass from prostitution into the marriage bed.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The closing image fuses life and death. Even what should be the happiest social institution is poisoned.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>William Blake (1757&ndash;1827)</h3>
    <p>Blake was a Romantic poet, painter and engraver who lived almost his entire life in London. Unlike most Romantics, he stayed in the city instead of writing about the countryside \u2014 and what he saw there filled him with anger.</p>

    <h3>Songs of Experience (1794)</h3>
    <p>"London" appears in <em>Songs of Experience</em>, the dark companion to <em>Songs of Innocence</em>. The poems in <em>Experience</em> show a world where poverty, prostitution, child labour and institutional cruelty have corrupted everything that is innocent.</p>

    <h3>Industrial London</h3>
    <p>By the 1790s, London was the largest city in Europe. Mass migration into the city created huge slums, child labour was widespread, and wealth was concentrated in a small elite. Blake\u2019s poem captures the suffering of ordinary Londoners in the early years of the Industrial Revolution.</p>

    <h3>Politics and protest</h3>
    <p>Blake was a political radical sympathetic to the French and American Revolutions. He hated the institutions he believed were responsible for suffering: the monarchy, the established Church, and the legal system that defended both. "London" reads almost like a list of charges in a courtroom indictment.</p>

    <h3>Time and Place in this poem</h3>
    <p>For the Edexcel Time and Place cluster, "London" is essential because it shows how a place \u2014 a single named city \u2014 can become a moral character in its own right. The whole poem is a portrait of one location at one historical moment, and that location shapes everything we feel.</p>
  `,

  contextAr: `
    <h3>William Blake (1757&ndash;1827)</h3>
    <p><strong>William Blake</strong> \u0634\u0627\u0639\u0631 \u0648\u0631\u0633\u0651\u0627\u0645 \u0648\u062d\u0641\u0651\u0627\u0631 (engraver) \u0631\u0648\u0645\u0627\u0646\u0633\u064a\u060c \u0639\u0627\u0634 \u0645\u0639\u0638\u0645 \u062d\u064a\u0627\u062a\u0647 \u0641\u064a London. \u0648\u0639\u0644\u0649 \u0639\u0643\u0633 \u0623\u063a\u0644\u0628 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u0633\u064a\u064a\u0646\u060c \u0638\u0644\u0651 \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0628\u062f\u0644 \u0645\u0627 \u064a\u0643\u062a\u0628 \u0639\u0646 \u0627\u0644\u0631\u064a\u0641 \u2014 \u0648\u0627\u0644\u0644\u064a \u0634\u0627\u0641\u0647 \u0641\u064a\u0647\u0627 \u0639\u0628\u0651\u0623\u0647 \u063a\u064a\u0638\u0627\u064b.</p>

    <h3>Songs of Experience (1794)</h3>
    <p>\u0642\u0635\u064a\u062f\u0629 "London" \u062a\u062c\u064a \u0636\u0645\u0646 \u062f\u064a\u0648\u0627\u0646 <em>Songs of Experience</em>\u060c \u0627\u0644\u062f\u064a\u0648\u0627\u0646 \u0627\u0644\u0645\u0638\u0644\u0645 \u0627\u0644\u0644\u064a \u064a\u0631\u0627\u0641\u0642 <em>Songs of Innocence</em>. \u0648\u0642\u0635\u0627\u0626\u062f <em>Experience</em> \u062a\u0633\u062a\u0639\u0631\u0636 \u0639\u0627\u0644\u0645\u0627\u064b \u0641\u064a\u0647 \u0627\u0644\u0641\u0642\u0631 \u0648\u0627\u0644\u062f\u0639\u0627\u0631\u0629 \u0648\u0639\u0645\u0627\u0644\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0648\u0627\u0644\u0642\u0633\u0648\u0629 \u0627\u0644\u0645\u0624\u0633\u0651\u0633\u064a\u0629 \u0623\u0641\u0633\u062f\u062a \u0643\u0644 \u0634\u064a \u0628\u0631\u064a\u0621.</p>

    <h3>London \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u0629</h3>
    <p>\u0628\u062d\u0644\u0648\u0644 1790s\u060c \u0635\u0627\u0631\u062a London \u0623\u0643\u0628\u0631 \u0645\u062f\u064a\u0646\u0629 \u0641\u064a \u0623\u0648\u0631\u0648\u0628\u0627. \u0648\u0627\u0644\u0647\u062c\u0631\u0629 \u0627\u0644\u062c\u0645\u0627\u0639\u064a\u0629 \u0644\u0647\u0627 \u062e\u0644\u0642\u062a \u0623\u062d\u064a\u0627\u0621 \u0641\u0642\u064a\u0631\u0629 \u0636\u062e\u0645\u0629\u060c \u0648\u0639\u0645\u0627\u0644\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0635\u0627\u0631\u062a \u0645\u0646\u062a\u0634\u0631\u0629\u060c \u0648\u0627\u0644\u062b\u0631\u0648\u0629 \u062a\u0631\u0643\u0651\u0632\u062a \u0641\u064a \u0646\u062e\u0628\u0629 \u0635\u063a\u064a\u0631\u0629. \u0642\u0635\u064a\u062f\u0629 Blake \u062a\u0644\u062a\u0642\u0637 \u0645\u0639\u0627\u0646\u0627\u0629 \u0627\u0644\u0646\u0627\u0633 \u0627\u0644\u0639\u0627\u062f\u064a\u064a\u0646 \u0641\u064a London \u0641\u064a \u0627\u0644\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0646 \u0627\u0644\u062b\u0648\u0631\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u0629.</p>

    <h3>\u0627\u0644\u0633\u064a\u0627\u0633\u0629 \u0648\u0627\u0644\u0627\u062d\u062a\u062c\u0627\u062c</h3>
    <p>Blake \u0643\u0627\u0646 \u0631\u0627\u062f\u064a\u0643\u0627\u0644\u064a\u0627\u064b \u0633\u064a\u0627\u0633\u064a\u0627\u064b\u060c \u0645\u062a\u0639\u0627\u0637\u0641\u0627\u064b \u0645\u0639 \u0627\u0644\u062b\u0648\u0631\u062a\u064a\u0646 \u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629 \u0648\u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629. \u0643\u0627\u0646 \u064a\u0643\u0631\u0647 \u0627\u0644\u0645\u0624\u0633\u0651\u0633\u0627\u062a \u0627\u0644\u0644\u064a \u064a\u0639\u062a\u0642\u062f \u0625\u0646\u0647\u0627 \u0645\u0633\u0624\u0648\u0644\u0629 \u0639\u0646 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629: \u0627\u0644\u0645\u0644\u0643\u064a\u0629\u060c \u0648\u0627\u0644\u0643\u0646\u064a\u0633\u0629 \u0627\u0644\u0631\u0633\u0645\u064a\u0629\u060c \u0648\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a \u0627\u0644\u0644\u064a \u064a\u062d\u0645\u064a \u0627\u0644\u0627\u062b\u0646\u064a\u0646. \u0642\u0635\u064a\u062f\u0629 "London" \u062a\u0642\u0631\u0623 \u0634\u0628\u0647 \u0642\u0627\u0626\u0645\u0629 \u062a\u0647\u0645 \u0641\u064a \u0644\u0627\u0626\u062d\u0629 \u0627\u062a\u0647\u0627\u0645 \u0641\u064a \u0645\u062d\u0643\u0645\u0629.</p>

    <h3>\u0627\u0644\u0632\u0645\u0627\u0646 \u0648\u0627\u0644\u0645\u0643\u0627\u0646 \u0641\u064a \u0647\u0627\u0644\u0642\u0635\u064a\u062f\u0629</h3>
    <p>\u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0645\u062c\u0645\u0648\u0639\u0629 Edexcel Time and Place\u060c "London" \u0642\u0635\u064a\u062f\u0629 \u062c\u0648\u0647\u0631\u064a\u0629 \u0644\u0623\u0646\u0647\u0627 \u062a\u0628\u064a\u0651\u0646 \u0643\u064a\u0641 \u0625\u0646 \u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f \u2014 \u0645\u062f\u064a\u0646\u0629 \u0648\u062d\u062f\u0629 \u0628\u0639\u064a\u0646\u0647\u0627 \u2014 \u064a\u0642\u062f\u0631 \u064a\u0635\u064a\u0631 \u0634\u062e\u0635\u064a\u0629 \u0623\u062e\u0644\u0627\u0642\u064a\u0629 \u0642\u0627\u0626\u0645\u0629 \u0628\u0630\u0627\u062a\u0647\u0627. \u0648\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0644\u0651\u0647\u0627 \u0628\u0648\u0631\u062a\u0631\u064a\u0647 \u0644\u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f \u0641\u064a \u0644\u062d\u0638\u0629 \u062a\u0627\u0631\u064a\u062e\u064a\u0629 \u0648\u062d\u062f\u0629\u060c \u0648\u0647\u0627\u0644\u0645\u0643\u0627\u0646 \u064a\u0634\u0643\u0651\u0644 \u0643\u0644 \u0634\u064a \u0646\u062d\u0633\u0651\u0647.</p>
  `,

  summary: `Stanza 1: The speaker walks through London\u2019s streets and along the Thames, both of which have been "charter\u2019d" (mapped, owned, controlled). On every face he sees, he notices "marks of weakness" and "marks of woe" \u2014 visible signs of suffering.

Stanza 2: Everywhere he hears cries \u2014 the cries of men, the fearful cries of babies, every voice and every ban. He hears "mind-forg\u2019d manacles": the chains that Londoners have built in their own minds, accepting their oppression.

Stanza 3: He attacks two institutions. The Church is "blackning" \u2014 darkened by soot and complicit in child labour, since chimney sweeps die in its chimneys. The Palace is responsible for the deaths of "hapless Soldiers" whose blood runs down its walls.

Stanza 4: The worst suffering comes at midnight. "Youthful Harlots" (child prostitutes) curse and infect newborn babies with disease, then carry that disease into marriages. The poem ends with the oxymoron "Marriage hearse" \u2014 a wedding that is also a funeral.

Overall meaning: London is a portrait of an entire city corrupted by oppression, poverty and disease. Blake shows how political institutions (Palace and Church) and economic forces ("charter\u2019d" streets) damage every Londoner, especially the youngest and most vulnerable. The "mind-forg\u2019d manacles" suggest that the deepest oppression is the one Londoners have accepted in their own heads.`,

  summaryAr: `\u0627\u0644\u0645\u0642\u0637\u0639 1: \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0645\u0634\u064a \u0641\u064a \u0634\u0648\u0627\u0631\u0639 London \u0648\u0639\u0644\u0649 \u0636\u0641\u0651\u0629 \u0627\u0644\u0640Thames\u060c \u0648\u0627\u0644\u0627\u062b\u0646\u064a\u0646 "charter\u2019d" (\u0645\u0631\u0633\u0648\u0645\u064a\u0646 \u0648\u0645\u0645\u0644\u0648\u0643\u064a\u0646 \u0648\u0645\u0633\u064a\u0637\u0631 \u0639\u0644\u064a\u0647\u0645). \u0648\u0639\u0644\u0649 \u0643\u0644 \u0648\u062c\u0647 \u064a\u0634\u0648\u0641\u0647\u060c \u064a\u0644\u0627\u062d\u0638 "marks of weakness" \u0648"marks of woe" \u2014 \u0639\u0644\u0627\u0645\u0627\u062a \u0645\u0639\u0627\u0646\u0627\u0629 \u0638\u0627\u0647\u0631\u0629.

\u0627\u0644\u0645\u0642\u0637\u0639 2: \u0641\u064a \u0643\u0644 \u0645\u0643\u0627\u0646 \u064a\u0633\u0645\u0639 \u0635\u0631\u0627\u062e\u0627\u064b \u2014 \u0635\u0631\u0627\u062e \u0627\u0644\u0631\u062c\u0627\u0644\u060c \u0648\u0628\u0643\u0627\u0621 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u062e\u0627\u0626\u0641\u060c \u0648\u0643\u0644 \u0635\u0648\u062a \u0648\u0643\u0644 "ban". \u0648\u064a\u0633\u0645\u0639 "mind-forg\u2019d manacles": \u0627\u0644\u0642\u064a\u0648\u062f \u0627\u0644\u0644\u064a \u0628\u0646\u0627\u0647\u0627 \u0633\u0643\u0627\u0646 London \u0641\u064a \u0639\u0642\u0648\u0644\u0647\u0645\u060c \u0648\u0642\u0628\u0644\u0648\u0627 \u0641\u064a\u0647\u0627 \u0638\u0644\u0645\u0647\u0645.

\u0627\u0644\u0645\u0642\u0637\u0639 3: \u064a\u0647\u0627\u062c\u0645 \u0645\u0624\u0633\u0651\u0633\u062a\u064a\u0646. \u0627\u0644\u0643\u0646\u064a\u0633\u0629 "blackning" \u2014 \u0645\u0633\u0648\u0651\u062f\u0629 \u0628\u0627\u0644\u0633\u062e\u0627\u0645\u060c \u0648\u0634\u0631\u064a\u0643\u0629 \u0641\u064a \u0639\u0645\u0627\u0644\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644\u060c \u0644\u0623\u0646 \u0645\u0646\u0638\u0651\u0641\u064a \u0627\u0644\u0645\u062f\u0627\u062e\u0646 \u064a\u0645\u0648\u062a\u0648\u0646 \u0641\u064a \u0645\u062f\u0627\u062e\u0646\u0647\u0627. \u0648\u0627\u0644\u0642\u0635\u0631 \u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u0645\u0648\u062a "hapless Soldiers" \u0627\u0644\u0644\u064a \u062f\u0645\u0651\u0647\u0645 \u064a\u0633\u064a\u0644 \u0639\u0644\u0649 \u062c\u062f\u0631\u0627\u0646\u0647.

\u0627\u0644\u0645\u0642\u0637\u0639 4: \u0623\u0633\u0648\u0623 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u062a\u062c\u064a \u0639\u0646\u062f \u0645\u0646\u062a\u0635\u0641 \u0627\u0644\u0644\u064a\u0644. "Youthful Harlots" (\u0641\u062a\u064a\u0627\u062a \u0635\u063a\u0627\u0631 \u0634\u063a\u0651\u0627\u0644\u0627\u062a \u0641\u064a \u0627\u0644\u062f\u0639\u0627\u0631\u0629) \u064a\u0644\u0639\u0646\u0651 \u0648\u064a\u0639\u062f\u0651\u0646 \u0627\u0644\u0645\u0631\u0636 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u062d\u062f\u064a\u062b\u064a \u0627\u0644\u0648\u0644\u0627\u062f\u0629\u060c \u062b\u0645 \u064a\u0646\u0642\u0644\u0648\u0646 \u0647\u0627\u0644\u0645\u0631\u0636 \u0625\u0644\u0649 \u0627\u0644\u0632\u064a\u062c\u0627\u062a. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0646\u062a\u0647\u064a \u0628\u0645\u0641\u0627\u0631\u0642\u0629 (oxymoron) "Marriage hearse" \u2014 \u0632\u0641\u0627\u0641 \u0627\u0644\u0644\u064a \u0647\u0648 \u062c\u0646\u0627\u0632\u0629 \u0643\u0645\u0627\u0646.

\u0627\u0644\u0645\u0639\u0646\u0649 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a: London \u0628\u0648\u0631\u062a\u0631\u064a\u0647 \u0644\u0645\u062f\u064a\u0646\u0629 \u0628\u0623\u0643\u0645\u0644\u0647\u0627 \u0623\u0641\u0633\u062f\u0647\u0627 \u0627\u0644\u0638\u0644\u0645 \u0648\u0627\u0644\u0641\u0642\u0631 \u0648\u0627\u0644\u0645\u0631\u0636. Blake \u064a\u0628\u064a\u0651\u0646 \u0643\u064a\u0641 \u0625\u0646 \u0627\u0644\u0645\u0624\u0633\u0651\u0633\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u0633\u064a\u0629 (Palace \u0648 Church) \u0648\u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 (\u0634\u0648\u0627\u0631\u0639 "charter\u2019d") \u062a\u0623\u0630\u064a \u0643\u0644 \u0633\u0627\u0643\u0646 \u0641\u064a London\u060c \u062e\u0635\u0648\u0635\u0627\u064b \u0627\u0644\u0623\u0635\u063a\u0631 \u0648\u0627\u0644\u0623\u0643\u062b\u0631 \u0647\u0634\u0627\u0634\u0629. \u0648"mind-forg\u2019d manacles" \u062a\u0644\u0645\u0651\u062d \u0625\u0646 \u0623\u0639\u0645\u0642 \u0638\u0644\u0645 \u0647\u0648 \u0627\u0644\u0644\u064a \u0642\u0628\u0644\u0647 \u0633\u0643\u0627\u0646 London \u062f\u0627\u062e\u0644 \u0639\u0642\u0648\u0644\u0647\u0645.`,

  formAndStructure: `Form: Four quatrains with an ABAB rhyme scheme. The neat, regular form is deliberately at odds with the chaos and suffering it describes \u2014 Blake imposes order on horror to make the reader notice it more clearly.

Metre: Iambic tetrameter (four feet per line). The steady rhythm gives the poem a marching, drum-like quality that matches the relentless cataloguing of misery.

Stanza shape: Each stanza widens the lens. Stanza 1 sees faces; stanza 2 hears voices; stanza 3 names institutions; stanza 4 zooms in on the most vulnerable victim. The structure works as a moral argument that builds to a climax.

Repetition: The triple "marks" in stanza 1 and the quadruple "every" in stanza 2 create a rhetorical hammer-blow. Suffering is not isolated \u2014 it is universal.

Volta: The word "But most" in line 13 marks a final turn. Blake has named two institutional evils (Church, Palace) and now reveals an even worse one in the streets at midnight.

Closing oxymoron: The poem ends with "Marriage hearse" \u2014 two contradictory words yoked together. The final image refuses any easy resolution; happiness and death are inseparable in Blake\u2019s London.

End-stopped lines: Most lines end with punctuation, giving the poem a clipped, list-like feel. Each line lands like another item in a charge sheet.`,

  formAndStructureAr: `\u0627\u0644\u0634\u0643\u0644: \u0623\u0631\u0628\u0639 quatrains \u0628\u0646\u0638\u0627\u0645 \u0642\u0627\u0641\u064a\u0629 ABAB. \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0645\u0646\u062a\u0638\u0645 \u0648\u0627\u0644\u0645\u0631\u062a\u0651\u0628 \u064a\u062a\u0639\u0627\u0631\u0636 \u0639\u0645\u062f\u0627\u064b \u0645\u0639 \u0627\u0644\u0641\u0648\u0636\u0649 \u0648\u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u0627\u0644\u0644\u064a \u064a\u0648\u0635\u0641\u0647\u0627 \u2014 Blake \u064a\u0641\u0631\u0636 \u0646\u0638\u0627\u0645\u0627\u064b \u0639\u0644\u0649 \u0627\u0644\u0631\u0639\u0628 \u0639\u0634\u0627\u0646 \u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u0644\u0627\u062d\u0638\u0647 \u0623\u0648\u0636\u062d.

Metre: iambic tetrameter (\u0623\u0631\u0628\u0639 \u062a\u0641\u0639\u064a\u0644\u0627\u062a \u0644\u0643\u0644 \u0628\u064a\u062a). \u0627\u0644\u0625\u064a\u0642\u0627\u0639 \u0627\u0644\u062b\u0627\u0628\u062a \u064a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062c\u0648\u062f\u0629 \u0639\u0633\u0643\u0631\u064a\u0629 \u0634\u0628\u0647 \u0637\u0628\u0644\u064a\u0629\u060c \u062a\u0648\u0627\u0641\u0642 \u0627\u0644\u062a\u0639\u062f\u0627\u062f \u0627\u0644\u0645\u062a\u0648\u0627\u0635\u0644 \u0644\u0644\u0645\u0622\u0633\u064a.

\u0634\u0643\u0644 \u0627\u0644\u0645\u0642\u0637\u0639: \u0643\u0644 \u0645\u0642\u0637\u0639 \u064a\u0648\u0633\u0651\u0639 \u0627\u0644\u0639\u062f\u0633\u0629. \u0627\u0644\u0645\u0642\u0637\u0639 1 \u064a\u0634\u0648\u0641 \u0648\u062c\u0648\u0647\u061b \u0627\u0644\u0645\u0642\u0637\u0639 2 \u064a\u0633\u0645\u0639 \u0623\u0635\u0648\u0627\u062a\u061b \u0627\u0644\u0645\u0642\u0637\u0639 3 \u064a\u0633\u0645\u0651\u064a \u0627\u0644\u0645\u0624\u0633\u0651\u0633\u0627\u062a\u061b \u0627\u0644\u0645\u0642\u0637\u0639 4 \u064a\u0642\u0631\u0651\u0628 \u0627\u0644\u0639\u062f\u0633\u0629 \u0639\u0644\u0649 \u0627\u0644\u0636\u062d\u064a\u0629 \u0627\u0644\u0623\u0643\u062b\u0631 \u0647\u0634\u0627\u0634\u0629. \u0648\u0627\u0644\u0628\u0646\u064a\u0629 \u062a\u0634\u062a\u063a\u0644 \u0643\u062d\u062c\u0651\u0629 \u0623\u062e\u0644\u0627\u0642\u064a\u0629 \u062a\u062a\u0635\u0627\u0639\u062f \u0625\u0644\u0649 \u0630\u0631\u0648\u0629.

\u0627\u0644\u062a\u0643\u0631\u0627\u0631: "marks" \u062b\u0644\u0627\u062b \u0645\u0631\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 1\u060c \u0648"every" \u0623\u0631\u0628\u0639 \u0645\u0631\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 2 \u062a\u062e\u0644\u0642 \u0636\u0631\u0628\u0629 \u0628\u0644\u0627\u063a\u064a\u0629 \u0643\u0627\u0644\u0645\u0637\u0631\u0642\u0629. \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u0645\u0648 \u0645\u0639\u0632\u0648\u0644\u0629 \u2014 \u0647\u064a \u0634\u0627\u0645\u0644\u0629.

Volta: \u0639\u0628\u0627\u0631\u0629 "But most" \u0641\u064a \u0627\u0644\u0628\u064a\u062a 13 \u062a\u0639\u0644\u0651\u0645 \u0639\u0644\u0649 \u0627\u0646\u0639\u0637\u0627\u0641 \u0623\u062e\u064a\u0631. Blake \u0633\u0645\u0651\u0649 \u0634\u0631\u0651\u064a\u0646 \u0645\u0624\u0633\u0651\u0633\u062a\u064a\u0646 (Church, Palace) \u0648\u0627\u0644\u062d\u064a\u0646 \u064a\u0643\u0634\u0641 \u0639\u0646 \u0634\u0631\u0651 \u0623\u0633\u0648\u0623 \u0641\u064a \u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0645\u0646\u062a\u0635\u0641 \u0627\u0644\u0644\u064a\u0644.

\u0627\u0644\u0645\u0641\u0627\u0631\u0642\u0629 \u0627\u0644\u062e\u062a\u0627\u0645\u064a\u0629 (Closing oxymoron): \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0646\u062a\u0647\u064a \u0628\u0640"Marriage hearse" \u2014 \u0643\u0644\u0645\u062a\u064a\u0646 \u0645\u062a\u0646\u0627\u0642\u0636\u062a\u064a\u0646 \u0645\u062c\u0628\u0648\u0631\u062a\u064a\u0646 \u0639\u0644\u0649 \u064a\u062f \u0628\u0639\u0636. \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u062a\u0631\u0641\u0636 \u0623\u064a\u0651 \u062d\u0644\u0651 \u0633\u0647\u0644\u061b \u0627\u0644\u0633\u0639\u0627\u062f\u0629 \u0648\u0627\u0644\u0645\u0648\u062a \u0645\u0627 \u064a\u0642\u062f\u0631\u0648\u0646 \u064a\u0646\u0641\u0635\u0644\u0648\u0646 \u0641\u064a London \u0639\u0646\u062f Blake.

\u0623\u0628\u064a\u0627\u062a End-stopped: \u0623\u063a\u0644\u0628 \u0627\u0644\u0623\u0628\u064a\u0627\u062a \u062a\u0646\u062a\u0647\u064a \u0628\u0639\u0644\u0627\u0645\u0629 \u062a\u0631\u0642\u064a\u0645\u060c \u0648\u0647\u0630\u0627 \u064a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0625\u062d\u0633\u0627\u0633\u0627\u064b \u0645\u0642\u062a\u0636\u0628\u0627\u064b \u0643\u0642\u0627\u0626\u0645\u0629. \u0643\u0644 \u0628\u064a\u062a \u064a\u0646\u0632\u0644 \u0645\u062b\u0644 \u0628\u0646\u062f \u062c\u062f\u064a\u062f \u0641\u064a \u0635\u062d\u064a\u0641\u0629 \u0627\u062a\u0647\u0627\u0645.`,

  keyQuotes: [
    {
      quote: 'I wander thro\u2019 each charter\u2019d street',
      analysis:
        '"Charter\u2019d" is the political bombshell of the line. It suggests legal ownership, control by trade, and the erosion of common land. Even walking through the city involves trespassing on someone\u2019s property. The verb "wander" makes the speaker an outsider in his own city.',
      themes: ['Oppression', 'Control', 'Place'],
      analysisAr:
        '\u0643\u0644\u0645\u0629 "charter\u2019d" \u0647\u064a \u0627\u0644\u0642\u0646\u0628\u0644\u0629 \u0627\u0644\u0633\u064a\u0627\u0633\u064a\u0629 \u0641\u064a \u0627\u0644\u0628\u064a\u062a. \u062a\u0644\u0645\u0651\u062d \u0625\u0644\u0649 \u0645\u0644\u0643\u064a\u0629 \u0642\u0627\u0646\u0648\u0646\u064a\u0629\u060c \u0648\u0633\u064a\u0637\u0631\u0629 \u062a\u062c\u0627\u0631\u064a\u0629\u060c \u0648\u062a\u0622\u0643\u0644 \u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0645\u0634\u062a\u0631\u0643\u0629. \u062d\u062a\u0649 \u0627\u0644\u0645\u0634\u064a \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u064a\u0635\u064a\u0631 \u062a\u0639\u062f\u0651\u064a\u0627\u064b \u0639\u0644\u0649 \u0645\u0645\u062a\u0644\u0643\u0627\u062a \u0623\u062d\u062f. \u0648\u0627\u0644\u0641\u0639\u0644 "wander" \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u063a\u0631\u064a\u0628\u0627\u064b \u0641\u064a \u0645\u062f\u064a\u0646\u062a\u0647.',
      themesAr: [
        '\u0627\u0644\u0638\u0644\u0645',
        '\u0627\u0644\u0633\u064a\u0637\u0631\u0629',
        '\u0627\u0644\u0645\u0643\u0627\u0646',
      ],
    },
    {
      quote: 'Marks of weakness, marks of woe',
      analysis:
        'The triple repetition of "marks" hammers the universality of suffering. "Mark" works as both noun (scar) and verb (notice), so the speaker is recording wounds even as he observes them. The alliteration of "weakness" and "woe" adds an almost lamenting sound.',
      themes: ['Suffering', 'Observation', 'Place'],
      analysisAr:
        '\u062a\u0643\u0631\u0627\u0631 "marks" \u062b\u0644\u0627\u062b \u0645\u0631\u0627\u062a \u064a\u062f\u0642\u0651 \u0639\u0644\u0649 \u0634\u0645\u0648\u0644\u064a\u0629 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629. \u0648\u0643\u0644\u0645\u0629 "mark" \u062a\u0634\u062a\u063a\u0644 \u0643\u0627\u0633\u0645 (\u0646\u062f\u0628\u0629) \u0648\u0643\u0641\u0639\u0644 (\u064a\u0644\u0627\u062d\u0638) \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a\u060c \u0641\u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0633\u062c\u0651\u0644 \u0627\u0644\u062c\u0631\u0648\u062d \u0648\u0647\u0648 \u064a\u0644\u0627\u062d\u0638\u0647\u0627. \u0648\u0627\u0644\u0640alliteration \u0628\u064a\u0646 "weakness" \u0648"woe" \u062a\u0636\u064a\u0641 \u0646\u0628\u0631\u0629 \u0634\u0628\u0647 \u0646\u0648\u0627\u062d\u064a\u0629.',
      themesAr: [
        '\u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629',
        '\u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629',
        '\u0627\u0644\u0645\u0643\u0627\u0646',
      ],
    },
    {
      quote: 'The mind-forg\u2019d manacles I hear',
      analysis:
        'The most famous line in the poem. Manacles are chains; "mind-forg\u2019d" means the prisoners made them themselves. Blake names the deepest form of oppression: not the laws of the state but the beliefs and habits of mind that make people accept being controlled.',
      themes: ['Oppression', 'Mental enslavement', 'Power'],
      analysisAr:
        '\u0623\u0634\u0647\u0631 \u0628\u064a\u062a \u0641\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629. \u0627\u0644\u0640manacles \u0642\u064a\u0648\u062f \u062d\u062f\u064a\u062f\u060c \u0648"mind-forg\u2019d" \u0645\u0639\u0646\u0627\u0647\u0627 \u0625\u0646 \u0627\u0644\u0633\u062c\u0646\u0627\u0621 \u0635\u0646\u0639\u0648\u0647\u0627 \u0628\u0646\u0641\u0633\u0647\u0645. Blake \u064a\u0633\u0645\u0651\u064a \u0623\u0639\u0645\u0642 \u0634\u0643\u0644 \u0645\u0646 \u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u0638\u0644\u0645: \u0645\u0648 \u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u062f\u0648\u0644\u0629\u060c \u0628\u0644 \u0627\u0644\u0645\u0639\u062a\u0642\u062f\u0627\u062a \u0648\u0627\u0644\u0639\u0627\u062f\u0627\u062a \u0627\u0644\u0630\u0647\u0646\u064a\u0629 \u0627\u0644\u0644\u064a \u062a\u062e\u0644\u0651\u064a \u0627\u0644\u0646\u0627\u0633 \u064a\u0642\u0628\u0644\u0648\u0646 \u0627\u0644\u0633\u064a\u0637\u0631\u0629 \u0639\u0644\u064a\u0647\u0645.',
      themesAr: [
        '\u0627\u0644\u0638\u0644\u0645',
        '\u0627\u0644\u0627\u0633\u062a\u0639\u0628\u0627\u062f \u0627\u0644\u0630\u0647\u0646\u064a',
        '\u0627\u0644\u0642\u0648\u0651\u0629',
      ],
    },
    {
      quote: 'Every blackning Church appalls',
      analysis:
        '"Blackning" works on two levels: the church is literally blackened by industrial soot and morally blackened by its complicity in child labour. The verb "appalls" sounds like "pall" \u2014 the cloth that covers a coffin. The church is dressed for a funeral.',
      themes: ['Religion', 'Hypocrisy', 'Industry'],
      analysisAr:
        '\u0643\u0644\u0645\u0629 "blackning" \u062a\u0634\u062a\u063a\u0644 \u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u064a\u064a\u0646: \u0627\u0644\u0643\u0646\u064a\u0633\u0629 \u0645\u0633\u0648\u0651\u062f\u0629 \u062d\u0631\u0641\u064a\u0627\u064b \u0628\u0633\u062e\u0627\u0645 \u0627\u0644\u0645\u0635\u0627\u0646\u0639\u060c \u0648\u0645\u0633\u0648\u0651\u062f\u0629 \u0623\u062e\u0644\u0627\u0642\u064a\u0627\u064b \u0644\u0623\u0646\u0647\u0627 \u0634\u0631\u064a\u0643\u0629 \u0641\u064a \u0639\u0645\u0627\u0644\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644. \u0648\u0627\u0644\u0641\u0639\u0644 "appalls" \u0641\u064a\u0647 \u0635\u062f\u0649 \u0644\u0643\u0644\u0645\u0629 "pall" \u2014 \u0627\u0644\u0643\u0641\u0646 \u0627\u0644\u0644\u064a \u064a\u063a\u0637\u0651\u064a \u0627\u0644\u062a\u0627\u0628\u0648\u062a. \u0627\u0644\u0643\u0646\u064a\u0633\u0629 \u0645\u0644\u0628\u0651\u0633\u0629 \u062c\u0646\u0627\u0632\u0629.',
      themesAr: [
        '\u0627\u0644\u062f\u064a\u0646',
        '\u0627\u0644\u0646\u0641\u0627\u0642',
        '\u0627\u0644\u0635\u0646\u0627\u0639\u0629',
      ],
    },
    {
      quote: 'Runs in blood down Palace walls',
      analysis:
        'A surreal, synaesthetic image: a soldier\u2019s sigh becomes blood on the walls of the building responsible for sending him to die. Blake stains the monarchy with the violence it commands. The verb "Runs" makes the blood feel fresh and ongoing.',
      themes: ['Monarchy', 'War', 'Responsibility'],
      analysisAr:
        '\u0635\u0648\u0631\u0629 \u0633\u0648\u0631\u064a\u0627\u0644\u064a\u0629 \u062a\u062e\u0644\u0637 \u0627\u0644\u062d\u0648\u0627\u0633\u0651 (synaesthesia): \u062a\u0646\u0647\u064a\u062f\u0629 \u0627\u0644\u062c\u0646\u062f\u064a \u062a\u0635\u064a\u0631 \u062f\u0645\u0627\u064b \u0639\u0644\u0649 \u062c\u062f\u0631\u0627\u0646 \u0627\u0644\u0645\u0628\u0646\u0649 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u0625\u0631\u0633\u0627\u0644\u0647 \u0644\u0644\u0645\u0648\u062a. Blake \u064a\u0644\u0637\u0651\u062e \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0628\u0627\u0644\u0639\u0646\u0641 \u0627\u0644\u0644\u064a \u062a\u0623\u0645\u0631 \u0628\u0647. \u0648\u0627\u0644\u0641\u0639\u0644 "Runs" \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u062f\u0645 \u064a\u062d\u0633\u0651 \u0637\u0627\u0632\u062c\u0627\u064b \u0648\u0645\u0633\u062a\u0645\u0631\u0651\u0627\u064b.',
      themesAr: [
        '\u0627\u0644\u0645\u0644\u0643\u064a\u0629',
        '\u0627\u0644\u062d\u0631\u0628',
        '\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629',
      ],
    },
    {
      quote: 'How the youthful Harlots curse',
      analysis:
        'The juxtaposition of "youthful" with "Harlots" is shocking. These are children who have been forced into prostitution by poverty. Their "curse" can mean foul language, a moral malediction, or venereal disease \u2014 all three are at work in the poem\u2019s closing stanza.',
      themes: ['Poverty', 'Innocence corrupted', 'Disease'],
      analysisAr:
        '\u0627\u0644\u062a\u062c\u0627\u0648\u0631 \u0628\u064a\u0646 "youthful" \u0648"Harlots" \u064a\u0635\u062f\u0645 \u0627\u0644\u0642\u0627\u0631\u0626. \u0647\u0630\u0648\u0644\u0627 \u0623\u0637\u0641\u0627\u0644 \u0623\u062c\u0628\u0631\u0647\u0645 \u0627\u0644\u0641\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u062f\u0639\u0627\u0631\u0629. \u0648\u0644\u0639\u0646\u062a\u0647\u0646 (curse) \u062a\u062d\u062a\u0645\u0644 \u062b\u0644\u0627\u062b \u0645\u0639\u0627\u0646\u064a: \u0634\u062a\u064a\u0645\u0629\u060c \u0623\u0648 \u0644\u0639\u0646\u0629 \u0623\u062e\u0644\u0627\u0642\u064a\u0629\u060c \u0623\u0648 \u0645\u0631\u0636 \u062c\u0646\u0633\u064a \u2014 \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0629 \u0643\u0644\u0651\u0647\u0627 \u0634\u063a\u0651\u0627\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u0642\u0637\u0639 \u0627\u0644\u062e\u062a\u0627\u0645\u064a.',
      themesAr: [
        '\u0627\u0644\u0641\u0642\u0631',
        '\u0627\u0644\u0628\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0641\u0633\u064e\u062f\u0629',
        '\u0627\u0644\u0645\u0631\u0636',
      ],
    },
    {
      quote: 'And blights with plagues the Marriage hearse',
      analysis:
        'The closing oxymoron yokes wedding and funeral. Sexually transmitted disease passes from prostitution into the marriage bed; happiness is poisoned at its source. "Blights" is an agricultural verb \u2014 marriage in London is a crop ruined before harvest.',
      themes: ['Disease', 'Marriage', 'Death-in-life'],
      analysisAr:
        '\u0627\u0644\u0640oxymoron \u0627\u0644\u062e\u062a\u0627\u0645\u064a\u0629 \u062a\u0631\u0628\u0637 \u0627\u0644\u0632\u0648\u0627\u062c \u0628\u0627\u0644\u062c\u0646\u0627\u0632\u0629. \u0627\u0644\u0645\u0631\u0636 \u0627\u0644\u0645\u0646\u0642\u0648\u0644 \u062c\u0646\u0633\u064a\u0627\u064b \u064a\u062a\u0633\u0631\u0651\u0628 \u0645\u0646 \u0627\u0644\u062f\u0639\u0627\u0631\u0629 \u0625\u0644\u0649 \u0641\u0631\u0627\u0634 \u0627\u0644\u0632\u0648\u0627\u062c\u061b \u0627\u0644\u0633\u0639\u0627\u062f\u0629 \u0645\u0633\u0645\u0648\u0645\u0629 \u0645\u0646 \u0623\u0635\u0644\u0647\u0627. \u0648\u0643\u0644\u0645\u0629 "Blights" \u0641\u0639\u0644 \u0632\u0631\u0627\u0639\u064a \u2014 \u0627\u0644\u0632\u0648\u0627\u062c \u0641\u064a London \u0645\u062d\u0635\u0648\u0644 \u0645\u0641\u0633\u064e\u062f \u0642\u0628\u0644 \u0645\u0627 \u064a\u064f\u062d\u0635\u062f.',
      themesAr: [
        '\u0627\u0644\u0645\u0631\u0636',
        '\u0627\u0644\u0632\u0648\u0627\u062c',
        '\u0627\u0644\u0645\u0648\u062a \u0641\u064a \u0627\u0644\u062d\u064a\u0627\u0629',
      ],
    },
    {
      quote: 'In every cry of every Man',
      analysis:
        'The first of four "in every" lines, the anaphora overwhelms the reader with the totality of suffering. Crucially, the "cry" is not just of men but of "every Man" \u2014 the universal human voice crying in pain.',
      themes: ['Universal suffering', 'Place', 'Oppression'],
      analysisAr:
        '\u0623\u0648\u0651\u0644 \u0623\u0631\u0628\u0639 \u0623\u0628\u064a\u0627\u062a \u062a\u0628\u062f\u0623 \u0628\u0640"in every"\u060c \u0648\u0627\u0644\u0640anaphora \u062a\u063a\u0645\u0631 \u0627\u0644\u0642\u0627\u0631\u0626 \u0628\u0643\u0644\u0651\u064a\u0629 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629. \u0648\u0627\u0644\u0645\u0647\u0645 \u0625\u0646 \u0627\u0644\u0640"cry" \u0645\u0648 \u0641\u0642\u0637 \u0635\u0631\u0627\u062e \u0627\u0644\u0631\u062c\u0627\u0644\u060c \u0628\u0644 \u0635\u0631\u0627\u062e "every Man" \u2014 \u0627\u0644\u0635\u0648\u062a \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a \u0627\u0644\u0643\u0648\u0646\u064a \u064a\u0628\u0643\u064a \u0623\u0644\u0645\u0627\u064b.',
      themesAr: [
        '\u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u0627\u0644\u0634\u0627\u0645\u0644\u0629',
        '\u0627\u0644\u0645\u0643\u0627\u0646',
        '\u0627\u0644\u0638\u0644\u0645',
      ],
    },
  ],

  languageDevices: [
    {
      device: 'Repetition',
      example: 'charter\u2019d street / charter\u2019d Thames',
      effect:
        'The repetition of "charter\u2019d" forces the reader to register that ownership has spread from streets to rivers \u2014 from the human-made to the natural. Even nature is for sale in London.',
      lineRef: 0,
      effectAr:
        '\u062a\u0643\u0631\u0627\u0631 "charter\u2019d" \u064a\u062c\u0628\u0631 \u0627\u0644\u0642\u0627\u0631\u0626 \u0625\u0646\u0647 \u064a\u0633\u062a\u0648\u0639\u0628 \u0625\u0646 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0645\u062a\u062f\u0651\u062a \u0645\u0646 \u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0625\u0644\u0649 \u0627\u0644\u0623\u0646\u0647\u0627\u0631 \u2014 \u0645\u0646 \u0627\u0644\u0635\u0646\u064a\u0639 \u0627\u0644\u0628\u0634\u0631\u064a \u0625\u0644\u0649 \u0627\u0644\u0637\u0628\u064a\u0639\u064a. \u062d\u062a\u0649 \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0644\u0644\u0628\u064a\u0639 \u0641\u064a London.',
    },
    {
      device: 'Anaphora',
      example: 'In every cry... In every Infants... In every voice... in every ban',
      effect:
        'The repeated "in every" turns stanza 2 into a relentless catalogue. The structure leaves no space for relief or exception \u2014 suffering is total. Blake writes prosecution, not description.',
      lineRef: 4,
      effectAr:
        '\u062a\u0643\u0631\u0627\u0631 "in every" \u064a\u062d\u0648\u0651\u0644 \u0627\u0644\u0645\u0642\u0637\u0639 2 \u0625\u0644\u0649 \u0642\u0627\u0626\u0645\u0629 \u0644\u0627 \u062a\u062a\u0648\u0642\u0651\u0641. \u0648\u0627\u0644\u0628\u0646\u064a\u0629 \u0645\u0627 \u062a\u062a\u0631\u0643 \u0645\u0643\u0627\u0646 \u0644\u0644\u0631\u0627\u062d\u0629 \u0623\u0648 \u0627\u0644\u0627\u0633\u062a\u062b\u0646\u0627\u0621 \u2014 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u0643\u0644\u0651\u064a\u0629. Blake \u064a\u0643\u062a\u0628 \u0644\u0627\u0626\u062d\u0629 \u0627\u062a\u0647\u0627\u0645\u060c \u0645\u0648 \u0648\u0635\u0641\u0627\u064b.',
    },
    {
      device: 'Metaphor',
      example: 'The mind-forg\u2019d manacles I hear',
      effect:
        'Blake invents a single image that names psychological oppression. Manacles are physical chains; "mind-forg\u2019d" relocates them inside the head. The poem\u2019s critique cuts deeper than law \u2014 it targets accepted belief.',
      lineRef: 7,
      effectAr:
        'Blake \u064a\u0628\u062a\u0643\u0631 \u0635\u0648\u0631\u0629 \u0648\u062d\u062f\u0629 \u062a\u0633\u0645\u0651\u064a \u0627\u0644\u0638\u0644\u0645 \u0627\u0644\u0646\u0641\u0633\u064a. \u0627\u0644\u0640manacles \u0642\u064a\u0648\u062f \u0645\u0627\u062f\u064a\u0629\u060c \u0648"mind-forg\u2019d" \u062a\u0646\u0642\u0644\u0647\u0627 \u0625\u0644\u0649 \u062f\u0627\u062e\u0644 \u0627\u0644\u0631\u0623\u0633. \u0648\u0646\u0642\u062f \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u064a\u0642\u0637\u0639 \u0623\u0639\u0645\u0642 \u0645\u0646 \u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u2014 \u064a\u0633\u062a\u0647\u062f\u0641 \u0627\u0644\u0645\u0639\u062a\u0642\u062f \u0627\u0644\u0645\u0642\u0628\u0648\u0644.',
    },
    {
      device: 'Symbolism',
      example: 'blackning Church / Palace walls',
      effect:
        'Two institutions become symbols of the corrupt system. The Church symbolises hypocrisy (preaching mercy while ignoring children dying in chimneys); the Palace symbolises the warmaking power of monarchy. Blake makes architecture moral.',
      lineRef: 10,
      effectAr:
        '\u0645\u0624\u0633\u0651\u0633\u062a\u0627\u0646 \u062a\u0635\u064a\u0631\u0627\u0646 \u0631\u0645\u0648\u0632\u0627\u064b \u0644\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u0627\u0633\u062f. \u0627\u0644\u0643\u0646\u064a\u0633\u0629 \u062a\u0631\u0645\u0632 \u0644\u0644\u0646\u0641\u0627\u0642 (\u062a\u0639\u0638 \u0628\u0627\u0644\u0631\u062d\u0645\u0629 \u0648\u0647\u064a \u062a\u062a\u062c\u0627\u0647\u0644 \u0623\u0637\u0641\u0627\u0644\u0627\u064b \u064a\u0645\u0648\u062a\u0648\u0646 \u0641\u064a \u0627\u0644\u0645\u062f\u0627\u062e\u0646)\u061b \u0648\u0627\u0644\u0642\u0635\u0631 \u064a\u0631\u0645\u0632 \u0644\u0642\u0648\u0651\u0629 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0641\u064a \u0635\u0646\u0639 \u0627\u0644\u062d\u0631\u0648\u0628. Blake \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0639\u0645\u0627\u0631\u0629 \u0623\u062e\u0644\u0627\u0642\u064a\u0629.',
    },
    {
      device: 'Synaesthesia',
      example: 'the hapless Soldiers sigh / Runs in blood down Palace walls',
      effect:
        'A sound (a sigh) becomes a substance (blood) on a surface (palace walls). The mixing of senses creates a surreal, indelible image. The blood is the consequence of the sigh \u2014 cause and effect collapsed into one image.',
      lineRef: 11,
      effectAr:
        '\u0635\u0648\u062a (\u062a\u0646\u0647\u064a\u062f\u0629) \u064a\u0635\u064a\u0631 \u0645\u0627\u062f\u0629 (\u062f\u0645) \u0639\u0644\u0649 \u0633\u0637\u062d (\u062c\u062f\u0631\u0627\u0646 \u0642\u0635\u0631). \u062e\u0644\u0637 \u0627\u0644\u062d\u0648\u0627\u0633\u0651 \u064a\u062e\u0644\u0642 \u0635\u0648\u0631\u0629 \u0633\u0648\u0631\u064a\u0627\u0644\u064a\u0629 \u0645\u0627 \u062a\u0646\u0645\u062d\u064a. \u0648\u0627\u0644\u062f\u0645 \u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u062a\u0646\u0647\u064a\u062f\u0629 \u2014 \u0627\u0644\u0633\u0628\u0628 \u0648\u0627\u0644\u0646\u062a\u064a\u062c\u0629 \u0645\u0646\u0647\u0627\u0631\u064a\u0646 \u0641\u064a \u0635\u0648\u0631\u0629 \u0648\u062d\u062f\u0629.',
    },
    {
      device: 'Oxymoron',
      example: 'Marriage hearse',
      effect:
        'Two opposites \u2014 wedding and funeral \u2014 are forced into a single phrase. The figure is shocking and refuses resolution. In Blake\u2019s London, the institution most associated with new life is also a vehicle for death.',
      lineRef: 16,
      effectAr:
        '\u0646\u0642\u064a\u0636\u0627\u0646 \u2014 \u0632\u0641\u0627\u0641 \u0648\u062c\u0646\u0627\u0632\u0629 \u2014 \u0645\u062c\u0628\u0648\u0631\u064a\u0646 \u0641\u064a \u0639\u0628\u0627\u0631\u0629 \u0648\u062d\u062f\u0629. \u0627\u0644\u0635\u0648\u0631\u0629 \u0635\u0627\u062f\u0645\u0629 \u0648\u062a\u0631\u0641\u0636 \u0623\u064a\u0651 \u062d\u0644\u0651. \u0641\u064a London \u0639\u0646\u062f Blake\u060c \u0627\u0644\u0645\u0624\u0633\u0651\u0633\u0629 \u0627\u0644\u0623\u0643\u062b\u0631 \u0627\u0631\u062a\u0628\u0627\u0637\u0627\u064b \u0628\u062d\u064a\u0627\u0629 \u062c\u062f\u064a\u062f\u0629 \u0647\u064a \u0628\u0646\u0641\u0633\u0647\u0627 \u0645\u0631\u0643\u0628\u0629 \u0645\u0648\u062a.',
    },
  ],
}

const comparisons = [
  {
    title: 'Composed Upon Westminster Bridge',
    poet: 'William Wordsworth',
    href: '/revision/poetry/edexcel/time-and-place/composed-upon-westminster-bridge',
    reason:
      'Wordsworth and Blake describe the same city only a few years apart \u2014 yet they see opposite Londons. Wordsworth finds beauty in the silent dawn; Blake finds suffering in every street. The contrast is the perfect Time and Place comparison.',
    themes: ['City', 'Place', 'Perspective'],
  },
  {
    title: "Nothing's Changed",
    poet: 'Tatamkhulu Afrika',
    href: '/revision/poetry/edexcel/time-and-place',
    reason:
      'Both poems use a walk through a place to expose social injustice. Blake walks London under the Industrial Revolution; Afrika walks District Six under apartheid. Compare the politics of place and observation.',
    themes: ['Place', 'Oppression', 'Walking'],
  },
  {
    title: 'I started Early \u2013 Took my Dog',
    poet: 'Emily Dickinson',
    href: '/revision/poetry/edexcel/time-and-place/i-started-early-took-my-dog',
    reason:
      'Both poems give voice to a speaker on the move through a landscape. Blake walks the city under control; Dickinson walks the shore where nature is uncontrollable. Compare how each speaker relates to their environment.',
    themes: ['Place', 'Walking', 'Identity'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'lon-1',
    question: 'What does "charter\'d" suggest about London?',
    type: 'multiple-choice',
    options: [
      'The streets are well-maintained',
      'Everything is controlled, owned, and commercialised',
      'The streets are full of tourists',
      'London is free',
    ],
    correctIndex: 1,
    explanation:
      'Blake uses "charter\'d" to suggest even streets and the Thames are controlled. Freedom is an illusion.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'lon-2',
    question: 'What are "mind-forg\'d manacles"?',
    type: 'multiple-choice',
    options: [
      'Physical chains',
      'Psychological chains - people imprisoned by acceptance of oppression',
      'Bracelets',
      'Laws',
    ],
    correctIndex: 1,
    explanation:
      'The chains are mental - people have internalised their oppression and accepted it as normal.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'lon-3',
    question: 'What institutions does Blake attack?',
    type: 'multiple-choice',
    options: [
      'Schools and hospitals',
      'The Church and the monarchy',
      'Factories and shops',
      'The army',
    ],
    correctIndex: 1,
    explanation:
      'Blake attacks the Church for ignoring child chimney sweeps and the monarchy for sending soldiers to die.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'lon-4',
    question: 'What is the oxymoron "Marriage hearse"?',
    type: 'multiple-choice',
    options: [
      'A wedding tradition',
      'Love and death fused - corruption has poisoned every aspect of life',
      'A funeral procession',
      'A type of carriage',
    ],
    correctIndex: 1,
    explanation:
      'Marriage (love) combined with hearse (death) shows corruption has destroyed even sacred institutions.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'lon-5',
    question: 'What dominates stanza 2?',
    type: 'multiple-choice',
    options: [
      'Rhyming couplets',
      'Anaphora - "In every" repeated four times',
      'A volta',
      'Lack of punctuation',
    ],
    correctIndex: 1,
    explanation:
      'The repetition creates overwhelming, cumulative effect making suffering feel universal.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'lon-6',
    question: 'What does "Runs in blood down Palace walls" suggest?',
    type: 'multiple-choice',
    options: [
      'The Palace is being painted',
      "Blake directly blames the monarchy for soldiers' deaths",
      'Soldiers are protecting the Palace',
      'The Palace is under renovation',
    ],
    correctIndex: 1,
    explanation:
      'Blood on "Palace walls" makes the monarchy\'s responsibility for death undeniable.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'lon-7',
    question: 'When was the poem published?',
    type: 'multiple-choice',
    options: ['1818', '1794, during the Industrial Revolution', '1850', '1914'],
    correctIndex: 1,
    explanation:
      'Published in Songs of Experience (1794) during the Industrial Revolution and aftermath of the French Revolution.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'lon-8',
    question: 'What metre does Blake use?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'Iambic tetrameter - steady marching rhythm',
      'Iambic pentameter',
      'Anapaestic',
    ],
    correctIndex: 1,
    explanation: 'The four-beat rhythm sounds like footsteps, reinforcing relentless oppression.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'lon-9',
    question: 'How does the cyclical structure reinforce the message?',
    type: 'multiple-choice',
    options: [
      'London is improving',
      'Suffering repeats endlessly from generation to generation',
      'There is resolution',
      'The streets are circular',
    ],
    correctIndex: 1,
    explanation:
      "The poem begins with a baby's cry and ends with a new-born infant's tear - suffering passes from generation to generation.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'lon-10',
    question: 'Which theme is most central to the poem?',
    type: 'multiple-choice',
    options: [
      "Nature's beauty",
      'Institutional oppression and its effects on ordinary people',
      'Romantic love',
      'Travel',
    ],
    correctIndex: 1,
    explanation:
      'The poem attacks every level of institutional power - commercial, religious, royal - and shows how they destroy innocence and freedom.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'London explores corruption of power, suffering of ordinary people, and loss of innocence in an industrialised city.',
    keyPoints: [
      'Power corrupts - Church, monarchy, and commercial interests cause suffering',
      'Oppression is both external and internal ("mind-forg\'d manacles")',
      'Innocence destroyed - children suffer from birth',
      'Cyclical suffering repeats across generations',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Blake uses metaphor, repetition, oxymoron, and visceral imagery to create unrelenting suffering.',
    keyPoints: [
      '"Mind-forg\'d manacles" - psychological chains',
      '"Marriage hearse" - oxymoron fusing love with death',
      '"Runs in blood down Palace walls" - monarchy blamed',
      'Semantic field of suffering throughout',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Four quatrains in ABAB rhyme with iambic tetrameter - rigid structure mirrors charter'd restrictions.",
    keyPoints: [
      'Regular ABAB rhyme - form as constrained as the city',
      'Anaphora in stanza 2 - overwhelming cumulative effect',
      '"But most" signals volta to darkest imagery',
      'First-person narrator as eyewitness',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Blake present the effects of power on ordinary people in London?',
  'Compare how Blake and one other poet present the abuse of power.',
  'How does Blake use language and structure to create a sense of hopelessness?',
]

export default function LondonEdexcelPage() {
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
          { name: 'Edexcel Poetry', url: 'https://theenglishhub.app/revision/poetry/edexcel' },
          { name: 'London', url: 'https://theenglishhub.app/revision/poetry/edexcel/london' },
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
          {t('rev.poetry.shared.back_to_time_and_place')}
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">London</h1>
            <p className="text-body-sm text-muted-foreground">
              William Blake &middot; Edexcel Time and Place anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="London"
        textType="poem"
        examBoard="Edexcel"
        cluster="Time and Place"
        variant="compact"
      />
      <InlineStudyEngine
        textName="London"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={london} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {t('rev.poetry.shared.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with London from the Edexcel Time and Place cluster.
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
          &ldquo;London&rdquo; by William Blake (1794) is in the public domain. All quotations on
          this page are used for the purpose of criticism, review and educational study under fair
          dealing (s.30 Copyright, Designs and Patents Act 1988).
        </p>
      </footer>
    </div>
  )
}
