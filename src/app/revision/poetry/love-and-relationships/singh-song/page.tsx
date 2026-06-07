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

const singhSongPoem: PoemData = {
  title: 'Singh Song!',
  poet: 'Daljit Nagra',
  // NOTE: "Singh Song!" is in copyright and its exact wording cannot be
  // verified here, so the poem is NOT reproduced. The entries below are a
  // paraphrased reading guide written in our own words: each item summarises
  // a movement of the poem and its devices for study. No verbatim Nagra line
  // is presented. Verify all wording against the named primary edition before
  // quoting in an exam answer.
  lines: [
    {
      text: 'Movement 1 \u2014 The speaker introduces himself (paraphrase, not the poem text).',
      annotations: [
        {
          type: 'Voice',
          note: 'From the opening, Nagra writes the speaker in a phonetic, Punjabi-inflected English rather than Standard English. This is a deliberate artistic and political choice that treats the British-Indian voice as fully poetic and worth celebrating.',
          color: '#3b82f6',
        },
        {
          type: 'Context',
          note: 'The speaker explains that he runs one of his father\u2019s shops, working very long hours. The family-business framing introduces the theme of duty and the expectations of the older generation.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Movement 2 \u2014 The newly-wed bride is introduced (paraphrase).',
      annotations: [
        {
          type: 'Characterisation',
          note: 'The speaker presents his new wife as confident, irreverent and disruptive \u2014 the opposite of the demure, dutiful daughter-in-law a traditional household might expect. Her rebelliousness is described affectionately and comically.',
          color: '#ec4899',
        },
        {
          type: 'Humour & rebellion',
          note: 'The bride\u2019s clashes with the older generation and her chaotic energy generate the poem\u2019s comedy while also celebrating a woman who refuses to conform.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Movement 3 \u2014 The customers complain about the neglected shop (paraphrase).',
      annotations: [
        {
          type: 'Dialogue & comic chorus',
          note: 'A second voice enters: frustrated customers who find the shop run down and badly stocked because the love-struck speaker keeps slipping away from it. Their grumbling recurs as a comic counter-refrain.',
          color: '#3b82f6',
        },
        {
          type: 'Duty vs desire',
          note: 'The customers\u2019 indignation is funny because the reader knows the speaker has chosen private love over public duty \u2014 the central tension of the poem.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Movement 4 \u2014 The couple\u2019s private, domestic intimacy (paraphrase).',
      annotations: [
        {
          type: 'Cultural detail',
          note: 'The love scenes are grounded in culturally specific, domestic imagery (shared food, the warmth of cooking) rather than conventional Western romantic clich\u00e9. Intimacy is presented as natural, joyful and unembarrassed.',
          color: '#10b981',
        },
        {
          type: 'Imagery & simile',
          note: 'Nagra builds original similes that fuse romantic intensity with Indian cultural identity, so the couple\u2019s love is expressed through their heritage rather than in spite of it.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Movement 5 \u2014 The bride speaks; the poem\u2019s tender close (paraphrase).',
      annotations: [
        {
          type: 'Refrain & structure',
          note: 'A short affectionate refrain naming the bride recurs to introduce each new picture of her, giving the poem a song-like, cyclical shape that mirrors the title\u2019s pun on \u201csing-song\u201d.',
          color: '#f59e0b',
        },
        {
          type: 'Contentment & defiance',
          note: 'The bride\u2019s closing declaration of happiness values their love above commerce and family expectation. Her phonetic voice is kept to the very end \u2014 Nagra refuses to standardise it, asserting its beauty and validity.',
          color: '#ec4899',
        },
      ],
    },
  ],

  context:
    "<p><strong>Daljit Nagra (b. 1966)</strong> is a British poet of Punjabi Sikh heritage, born in West London and raised in Sheffield. He won the Forward Prize for Best First Collection with <em>Look We Have Coming to Dover!</em> (2007) and has been BBC Radio 4's Poet in Residence.</p>" +
    '<p><strong>"Singh Song!"</strong> was published in <em>Look We Have Coming to Dover!</em> (2007). The poem celebrates the British-Indian experience with humour, warmth, and unapologetic cultural pride.</p>' +
    '<p><strong>"Singh"</strong> is a common Sikh surname meaning "lion". The title puns on "sing-song" \u2014 the poem\'s musical, rhythmic quality. It also celebrates Sikh identity as something joyful and vocal.</p>' +
    "<p>The poem explores the <strong>tension between duty and desire</strong>: the speaker is supposed to run his father's shop but keeps sneaking off to be with his new wife. Family obligation clashes with romantic love, and love wins.</p>" +
    '<p>Nagra uses <strong>phonetic spelling</strong> to represent British-Indian speech patterns. This is not mockery but celebration \u2014 an assertion that this voice is as valid and poetic as Standard English. The poem challenges whose language "counts" as literary.</p>' +
    '<p>The poem also touches on <strong>generational and cultural expectations</strong>: the parents expect a dutiful son and obedient daughter-in-law; instead they get a lovesick shopkeeper and a rebellious bride who swears in Punjabi.</p>',

  contextAr:
    '<p><strong>Daljit Nagra (\u0645\u0648\u0627\u0644\u064a\u062f 1966)</strong> \u0634\u0627\u0639\u0631 \u0628\u0631\u064a\u0637\u0627\u0646\u064a \u0645\u0646 \u0623\u0635\u0648\u0644 \u0633\u064a\u062e\u064a\u0629 \u0628\u0646\u062c\u0627\u0628\u064a\u0629\u060c \u0627\u0646\u0648\u0644\u062f \u0641\u064a \u063a\u0631\u0628 \u0644\u0646\u062f\u0646 \u0648\u062a\u0631\u0628\u0651\u0649 \u0641\u064a Sheffield. \u0641\u0627\u0632 \u0628\u062c\u0627\u064a\u0632\u0629 Forward Prize \u0644\u0623\u0641\u0636\u0644 \u062f\u064a\u0648\u0627\u0646 \u0623\u0648\u0651\u0644 \u0639\u0646 \u0645\u062c\u0645\u0648\u0639\u062a\u0647 <em>Look We Have Coming to Dover!</em> (2007)\u060c \u0648\u0643\u0627\u0646 Poet in Residence (\u0634\u0627\u0639\u0631 \u0645\u0642\u064a\u0645) \u0641\u064a BBC Radio 4.</p>' +
    '<p>\u0642\u0635\u064a\u062f\u0629 <strong>"Singh Song!"</strong> \u0646\u064f\u0634\u0631\u062a \u0636\u0645\u0646 <em>Look We Have Coming to Dover!</em> (2007). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u062d\u062a\u0641\u064a \u0628\u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0629-\u0627\u0644\u0647\u0646\u062f\u064a\u0629 \u0628\u062d\u0633 \u0641\u0643\u0627\u0647\u064a \u0648\u062f\u0641\u0621 \u0648\u0627\u0639\u062a\u0632\u0627\u0632 \u062b\u0642\u0627\u0641\u064a \u0635\u0631\u064a\u062d \u0628\u062f\u0648\u0646 \u0627\u0639\u062a\u0630\u0627\u0631.</p>' +
    '<p>\u0643\u0644\u0645\u0629 <strong>"Singh"</strong> \u0627\u0633\u0645 \u0639\u064a\u0644\u0629 \u0634\u0627\u0626\u0639 \u0639\u0646\u062f \u0627\u0644\u0633\u064a\u062e \u0648\u0645\u0639\u0646\u0627\u0647 "\u0623\u0633\u062f". \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064a\u0644\u0639\u0628 \u0639\u0644\u0649 \u0639\u0628\u0627\u0631\u0629 "sing-song" (\u0646\u063a\u0645\u0629 \u0644\u062d\u0646\u064a\u0629 \u0645\u062a\u0643\u0631\u0651\u0631\u0629) \u2014 \u064a\u0634\u064a\u0631 \u0644\u0625\u064a\u0642\u0627\u0639 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u064a. \u0648\u064a\u062d\u062a\u0641\u064a \u0643\u0630\u0644\u0643 \u0628\u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0633\u064a\u062e\u064a\u0629 \u0643\u0647\u0648\u064a\u0629 \u0645\u0641\u0631\u062d\u0629 \u0648\u0645\u0633\u0645\u0648\u0639\u0629.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0633\u062a\u0643\u0634\u0641 <strong>\u0627\u0644\u062a\u0648\u062a\u0651\u0631 \u0628\u064a\u0646 \u0627\u0644\u0648\u0627\u062c\u0628 \u0648\u0627\u0644\u0631\u063a\u0628\u0629</strong>: \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0625\u0646\u0647 \u064a\u062f\u064a\u0631 \u062f\u0643\u0651\u0627\u0646 \u0623\u0628\u0648\u0647\u060c \u0628\u0633 \u064a\u0637\u0644\u0651\u0639 \u0646\u0641\u0633\u0647 \u0637\u0648\u0644 \u0627\u0644\u0648\u0642\u062a \u0639\u0634\u0627\u0646 \u064a\u0642\u0639\u062f \u0645\u0639 \u0639\u0631\u0648\u0633\u0647 \u0627\u0644\u062c\u062f\u064a\u062f\u0629. \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u064a \u064a\u0635\u0637\u062f\u0645 \u0628\u0627\u0644\u062d\u0628 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u0633\u064a\u060c \u0648\u0627\u0644\u062d\u0628 \u064a\u0646\u062a\u0635\u0631.</p>' +
    '<p>Nagra \u064a\u0633\u062a\u062e\u062f\u0645 <strong>\u0627\u0644\u062a\u0647\u062c\u0626\u0629 \u0627\u0644\u0635\u0648\u062a\u064a\u0629 (phonetic spelling)</strong> \u0639\u0634\u0627\u0646 \u064a\u0645\u062b\u0651\u0644 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0643\u0644\u0627\u0645 \u0627\u0644\u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0629-\u0627\u0644\u0647\u0646\u062f\u064a\u0629. \u0647\u0630\u0627 \u0645\u0648 \u0633\u062e\u0631\u064a\u0629\u060c \u0647\u0630\u0627 \u0627\u062d\u062a\u0641\u0627\u0621 \u2014 \u062a\u0623\u0643\u064a\u062f \u0625\u0646 \u0647\u0627\u0644\u0635\u0648\u062a \u0634\u0639\u0631\u064a \u0648\u0645\u0634\u0631\u0648\u0639 \u0632\u064a \u0645\u0627 \u0647\u064a Standard English (\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0627\u0644\u0641\u0635\u062d\u0649). \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u062a\u062d\u062f\u0651\u0649 \u0627\u0644\u0641\u0643\u0631\u0629 \u0627\u0644\u0644\u064a \u062a\u0642\u0648\u0644 \u0625\u0646\u0647 \u0641\u064a\u0647 \u0644\u063a\u0629 \u0648\u062d\u062f\u0629 \u0628\u0633 \u062a\u0646\u062d\u0633\u0628 \u0623\u062f\u0628\u064a\u0629.</p>' +
    '<p>\u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0643\u0645\u0627\u0646 \u062a\u0644\u0627\u0645\u0633 <strong>\u0627\u0644\u062a\u0648\u0642\u0651\u0639\u0627\u062a \u0628\u064a\u0646 \u0627\u0644\u0623\u062c\u064a\u0627\u0644 \u0648\u0627\u0644\u062a\u0648\u0642\u0651\u0639\u0627\u062a \u0627\u0644\u062b\u0642\u0627\u0641\u064a\u0629</strong>: \u0627\u0644\u0623\u0647\u0644 \u064a\u0646\u062a\u0638\u0631\u0648\u0646 \u0648\u0644\u062f \u0645\u0637\u064a\u0639 \u0648\u0643\u0646\u0651\u0629 (\u0632\u0648\u062c\u0629 \u0627\u0628\u0646) \u062e\u0627\u0636\u0639\u0629\u061b \u0628\u0633 \u0627\u0644\u0644\u064a \u064a\u062d\u0635\u0644\u060c \u064a\u062d\u0635\u0644\u0648\u0646 \u0635\u0627\u062d\u0628 \u062f\u0643\u0651\u0627\u0646 \u0639\u0627\u0634\u0642 \u0648\u0639\u0631\u0648\u0633 \u0645\u062a\u0645\u0631\u0651\u062f\u0629 \u062a\u0633\u0628\u0651 \u0628\u0627\u0644\u0640Punjabi.</p>',

  summary:
    'Opening: The speaker introduces himself as the runner of one of his father\u2019s shops, working very long hours, and takes evident pride in his place on the Indian high street. (Paraphrased \u2014 the poem is not reproduced.)\n\n' +
    'The bride: His new wife is introduced as confident, irreverent and disruptive, clashing comically with the older generation \u2014 nothing like the obedient daughter-in-law a traditional household expects.\n\n' +
    'Customer complaints: Frustrated customers grumble that the shop is neglected and badly stocked, because the love-struck speaker keeps slipping away from it.\n\n' +
    'Intimacy and close: The poem turns to the couple\u2019s private, culturally specific domestic intimacy. The bride speaks tenderly, valuing their love above money and duty, and the poem ends on her contented, defiant declaration of happiness.',

  summaryAr:
    '\u0627\u0644\u0627\u0641\u062a\u062a\u0627\u062d\u064a\u0629: \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u064a\u0642\u062f\u0651\u0645 \u0646\u0641\u0633\u0647 \u0639\u0644\u0649 \u0625\u0646\u0647 \u064a\u062f\u064a\u0631 \u062f\u0643\u0651\u0627\u0646\u0627\u064b \u0645\u0646 \u062f\u0643\u0627\u0643\u064a\u0646 \u0623\u0628\u0648\u0647\u060c \u0648\u064a\u0634\u062a\u063a\u0644 \u0633\u0627\u0639\u0627\u062a \u0637\u0648\u064a\u0644\u0629\u060c \u0648\u064a\u0641\u062e\u0631 \u0628\u0645\u0643\u0627\u0646\u0647 \u0641\u064a \u0627\u0644\u062d\u064a. (\u0625\u0639\u0627\u062f\u0629 \u0635\u064a\u0627\u063a\u0629 \u2014 \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u063a\u064a\u0631 \u0645\u0633\u062a\u0646\u0633\u062e\u0629.)\n\n' +
    '\u0627\u0644\u0639\u0631\u0648\u0633: \u062a\u064f\u0642\u062f\u0651\u0645 \u0627\u0644\u0632\u0648\u062c\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u0648\u0627\u062b\u0642\u0629 \u0648\u062c\u0631\u064a\u0626\u0629 \u0648\u0645\u0634\u0627\u063a\u0628\u0629\u060c \u062a\u0635\u0637\u062f\u0645 \u0628\u0634\u0643\u0644 \u0643\u0648\u0645\u064a\u062f\u064a \u0628\u0627\u0644\u062c\u064a\u0644 \u0627\u0644\u0623\u0643\u0628\u0631 \u2014 \u0628\u0639\u0643\u0633 \u0627\u0644\u0643\u0646\u0651\u0629 \u0627\u0644\u0645\u0637\u064a\u0639\u0629 \u0627\u0644\u0644\u064a \u064a\u0646\u062a\u0638\u0631\u0647\u0627 \u0628\u064a\u062a \u062a\u0642\u0644\u064a\u062f\u064a.\n\n' +
    '\u0634\u0643\u0627\u0648\u0649 \u0627\u0644\u0632\u0628\u0627\u064a\u0646: \u0627\u0644\u0632\u0628\u0627\u064a\u0646 \u0627\u0644\u063a\u0627\u0636\u0628\u0648\u0646 \u064a\u062a\u0630\u0645\u0651\u0631\u0648\u0646 \u0625\u0646 \u0627\u0644\u062f\u0643\u0651\u0627\u0646 \u0645\u0647\u0645\u0644 \u0648\u0633\u064a\u0626 \u0627\u0644\u062a\u062c\u0647\u064a\u0632\u060c \u0644\u0623\u0646 \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u0627\u0644\u0639\u0627\u0634\u0642 \u064a\u062a\u0631\u0643\u0647 \u0637\u0648\u0644 \u0627\u0644\u0648\u0642\u062a.\n\n' +
    '\u0627\u0644\u062d\u0645\u064a\u0645\u064a\u0629 \u0648\u0627\u0644\u062e\u062a\u0627\u0645: \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0646\u062a\u0642\u0644 \u0644\u062d\u0645\u064a\u0645\u064a\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a \u0627\u0644\u0645\u0646\u0632\u0644\u064a\u0629 \u0630\u0627\u062a \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0644\u062b\u0642\u0627\u0641\u064a\u0629. \u0627\u0644\u0639\u0631\u0648\u0633 \u062a\u062a\u0643\u0644\u0651\u0645 \u0628\u062d\u0646\u0648\u0651 \u0648\u062a\u0636\u0639 \u062d\u0628\u0651\u0647\u0645\u0627 \u0641\u0648\u0642 \u0627\u0644\u0645\u0627\u0644 \u0648\u0627\u0644\u0648\u0627\u062c\u0628\u060c \u0648\u062a\u0646\u062a\u0647\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0639\u0644\u0649 \u0625\u0639\u0644\u0627\u0646\u0647\u0627 \u0627\u0644\u0631\u0627\u0636\u064a \u0627\u0644\u0645\u062a\u062d\u062f\u0651\u064a \u0628\u0627\u0644\u0633\u0639\u0627\u062f\u0629.',

  formAndStructure:
    'Form: Irregular stanzas of varying length, reflecting the chaotic, playful energy of the relationship. The poem resists neat containment, just like the couple resists convention.\n\n' +
    'Refrain: A short affectionate phrase naming the bride recurs to introduce each new picture of her, while the customers\u2019 repeated complaints form a comic counter-refrain. (Wording paraphrased, not quoted.)\n\n' +
    "Dialogue: The poem weaves together three voices \u2014 the speaker's narration, the customers' complaints, and the bride's romantic declarations. This polyphony creates a lively, dramatic texture.\n\n" +
    'Phonetic spelling: Throughout the poem, Nagra spells words to capture a Punjabi-inflected British-Indian accent rather than using Standard English. This is a political and artistic choice that validates non-standard English as poetic language.\n\n' +
    "Movement from public to private: The poem moves from the public shop floor to the private upstairs, from duty to love, from day to night. This structural journey reflects the speaker's priorities \u2014 love over commerce.\n\n" +
    'Tone: The poem is predominantly humorous and celebratory, but beneath the comedy lies a serious point about cultural identity, belonging, and the right to define your own happiness.',

  formAndStructureAr:
    '\u0627\u0644\u0634\u0643\u0644: \u0645\u0642\u0627\u0637\u0639 \u063a\u064a\u0631 \u0645\u0646\u062a\u0638\u0645\u0629 \u0628\u0623\u0637\u0648\u0627\u0644 \u0645\u062e\u062a\u0644\u0641\u0629\u060c \u062a\u0639\u0643\u0633 \u0637\u0627\u0642\u0629 \u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0627\u0644\u0641\u0648\u0636\u0648\u064a\u0629 \u0627\u0644\u0645\u0631\u062d\u0629. \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0631\u0641\u0636 \u0625\u0646\u0647\u0627 \u062a\u062a\u0642\u0648\u0644\u0628 \u0628\u0634\u0643\u0644 \u0645\u0646\u0638\u0651\u0645\u060c \u062a\u0645\u0627\u0645\u0627\u064b \u0645\u062b\u0644 \u0627\u0644\u062b\u0646\u0627\u0626\u064a \u0627\u0644\u0644\u064a \u064a\u0631\u0641\u0636 \u0627\u0644\u0623\u0639\u0631\u0627\u0641.\n\n' +
    '\u0627\u0644\u0644\u0627\u0632\u0645\u0629 (refrain): \u0639\u0628\u0627\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u062d\u0628\u0651\u0628\u0629 \u062a\u0633\u0645\u0651\u064a \u0627\u0644\u0639\u0631\u0648\u0633 \u062a\u062a\u0643\u0631\u0651\u0631 \u0644\u062a\u0642\u062f\u0651\u0645 \u0643\u0644 \u0635\u0648\u0631\u0629 \u062c\u062f\u064a\u062f\u0629 \u0644\u0647\u0627\u060c \u0648\u0634\u0643\u0627\u0648\u0649 \u0627\u0644\u0632\u0628\u0627\u064a\u0646 \u0627\u0644\u0645\u062a\u0643\u0631\u0651\u0631\u0629 \u062a\u0634\u0643\u0651\u0644 \u0644\u0627\u0632\u0645\u0629 \u0643\u0648\u0645\u064a\u062f\u064a\u0629 \u0645\u0636\u0627\u062f\u0629. (\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0645\u0639\u0627\u062f \u0635\u064a\u0627\u063a\u062a\u0647\u0627\u060c \u063a\u064a\u0631 \u0645\u0642\u062a\u0628\u0633\u0629.)\n\n' +
    '\u0627\u0644\u062d\u0648\u0627\u0631: \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u0646\u0633\u062c \u062b\u0644\u0627\u062b\u0629 \u0623\u0635\u0648\u0627\u062a \u2014 \u0633\u0631\u062f \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645\u060c \u0634\u0643\u0627\u0648\u0649 \u0627\u0644\u0632\u0628\u0627\u064a\u0646\u060c \u0648\u0625\u0639\u0644\u0627\u0646\u0627\u062a \u0627\u0644\u0639\u0631\u0648\u0633 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u0633\u064a\u0629. \u0647\u0630\u0627 \u0627\u0644\u062a\u0639\u062f\u0651\u062f \u0627\u0644\u0635\u0648\u062a\u064a \u064a\u0639\u0637\u064a \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0646\u0633\u064a\u062c \u062d\u064a\u0648\u064a \u0648\u062f\u0631\u0627\u0645\u064a.\n\n' +
    '\u0627\u0644\u062a\u0647\u062c\u0626\u0629 \u0627\u0644\u0635\u0648\u062a\u064a\u0629: \u0639\u0644\u0649 \u0637\u0648\u0644 \u0627\u0644\u0642\u0635\u064a\u062f\u0629\u060c Nagra \u064a\u0643\u062a\u0628 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0628\u0637\u0631\u064a\u0642\u0629 \u062a\u0644\u062a\u0642\u0637 \u0644\u0643\u0646\u0629 \u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0629-\u0647\u0646\u062f\u064a\u0629 \u0645\u062a\u0623\u062b\u0651\u0631\u0629 \u0628\u0627\u0644\u0628\u0646\u062c\u0627\u0628\u064a\u0629 \u0628\u062f\u0644 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0627\u0644\u0645\u0639\u064a\u0627\u0631\u064a\u0629. \u0647\u0630\u0627 \u062e\u064a\u0627\u0631 \u0633\u064a\u0627\u0633\u064a \u0648\u0641\u0646\u0651\u064a \u064a\u062b\u0628\u0651\u062a \u0634\u0631\u0639\u064a\u0629 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u063a\u064a\u0631 \u0627\u0644\u0645\u0639\u064a\u0627\u0631\u064a\u0629 \u0643\u0644\u063a\u0629 \u0634\u0639\u0631\u064a\u0629.\n\n' +
    '\u0627\u0644\u062a\u062d\u0648\u0651\u0644 \u0645\u0646 \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u062e\u0627\u0635: \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u062a\u062a\u062d\u0631\u0651\u0643 \u0645\u0646 \u0623\u0631\u0636 \u0627\u0644\u062f\u0643\u0651\u0627\u0646 \u0627\u0644\u0639\u0627\u0645\u0629 \u0625\u0644\u0649 \u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0639\u0644\u0648\u064a \u0627\u0644\u062e\u0627\u0635\u060c \u0645\u0646 \u0627\u0644\u0648\u0627\u062c\u0628 \u0644\u0644\u062d\u0628\u060c \u0645\u0646 \u0627\u0644\u0646\u0647\u0627\u0631 \u0644\u0644\u064a\u0644. \u0647\u0627\u0644\u0631\u062d\u0644\u0629 \u0627\u0644\u0628\u0646\u064a\u0648\u064a\u0629 \u062a\u0639\u0643\u0633 \u0623\u0648\u0644\u0648\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u0643\u0644\u0651\u0645 \u2014 \u0627\u0644\u062d\u0628 \u0641\u0648\u0642 \u0627\u0644\u062a\u062c\u0627\u0631\u0629.\n\n' +
    '\u0627\u0644\u0646\u0628\u0631\u0629: \u0627\u0644\u0642\u0635\u064a\u062f\u0629 \u0628\u0627\u0644\u063a\u0627\u0644\u0628 \u0641\u0643\u0627\u0647\u064a\u0629 \u0648\u0627\u062d\u062a\u0641\u0627\u0626\u064a\u0629\u060c \u0628\u0633 \u062a\u062d\u062a \u0627\u0644\u0633\u0637\u062d \u0641\u064a\u0647 \u0646\u0642\u0637\u0629 \u062c\u062f\u0651\u064a\u0629 \u0639\u0646 \u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u062b\u0642\u0627\u0641\u064a\u0629 \u0648\u0627\u0644\u0627\u0646\u062a\u0645\u0627\u0621 \u0648\u062d\u0642 \u0627\u0644\u0648\u0627\u062d\u062f \u0625\u0646\u0647 \u064a\u0639\u0631\u0651\u0641 \u0633\u0639\u0627\u062f\u062a\u0647 \u0628\u0646\u0641\u0633\u0647.',

  // Quotes and language-device panels are intentionally EMPTY. The shared
  // InteractivePoemViewer always wraps keyQuotes[].quote and
  // languageDevices[].example in quotation marks, which would present
  // unverifiable in-copyright Nagra text as verbatim quotation. Until the
  // wording is checked against the named primary edition, the teaching
  // value lives in the paraphrased line-guide annotations, summary and
  // formAndStructure prose above instead.
  keyQuotes: [],

  languageDevices: [],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'ss-1',
    question: 'What is the poem about?',
    type: 'multiple-choice',
    options: [
      'Running a supermarket',
      "A young shopkeeper who neglects his father's shop to spend time with his new wife, celebrating their playful love",
      'A cooking competition',
      'A family argument about business',
    ],
    correctIndex: 1,
    explanation:
      "The speaker runs his father's shop but keeps sneaking upstairs to be with his new wife. The poem celebrates their joyful, uninhibited love through humour and cultural detail.",
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'ss-2',
    question: 'What language does Nagra use and why?',
    type: 'multiple-choice',
    options: [
      'Standard English only',
      'A mixture of Punjabi-English dialect and Standard English, celebrating dual cultural identity',
      'Only Punjabi',
      'French',
    ],
    correctIndex: 1,
    explanation:
      "Nagra blends Punjabi-English dialect with Standard English, reflecting the speaker's British-Indian identity. The language itself celebrates cultural hybridity.",
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'ss-3',
    question: 'What is the wife like?',
    type: 'multiple-choice',
    options: [
      'Quiet and traditional',
      'Rebellious, playful, and unconventional - she defies traditional expectations',
      'Angry and critical',
      'Absent from the poem',
    ],
    correctIndex: 1,
    explanation:
      'The wife is presented as unconventional and rebellious - striking in appearance, irreverent towards traditional roles, and playfully disruptive. She defies expectations. (Description paraphrased; verify wording against the primary edition.)',
    topic: 'Meaning',
    difficulty: 'higher',
  },
  {
    id: 'ss-4',
    question: 'What is the tone of the poem?',
    type: 'multiple-choice',
    options: [
      'Sad and melancholy',
      'Joyful, humorous, and celebratory - love is presented as fun and liberating',
      'Angry and bitter',
      'Formal and serious',
    ],
    correctIndex: 1,
    explanation:
      'The poem is consistently joyful and humorous. Love is presented as playful, passionate, and liberating - a stark contrast to the more painful love poems in the anthology.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'ss-5',
    question: 'What does the shop represent?',
    type: 'multiple-choice',
    options: [
      'Wealth and success',
      'Duty, family expectation, and the older generation - which the speaker neglects for love',
      'A happy workplace',
      "The speaker's dream",
    ],
    correctIndex: 1,
    explanation:
      "The shop represents duty, family responsibility, and the expectations of the older generation (the father). The speaker's neglect of it for love shows passion triumphing over obligation.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'ss-6',
    question: 'Who is Daljit Nagra?',
    type: 'multiple-choice',
    options: [
      'A Victorian poet',
      'A British-Indian poet who explores Punjabi-British identity through humour and dialect',
      'A war poet',
      'A Romantic poet',
    ],
    correctIndex: 1,
    explanation:
      'Daljit Nagra (b. 1966) is a British poet of Punjabi heritage. His poetry celebrates the experience of second-generation British-Indians, using humour and dialect.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'ss-7',
    question: 'How does the poem challenge traditional presentations of love?',
    type: 'multiple-choice',
    options: [
      'It follows conventions exactly',
      'It presents love through humour, cultural specificity, and physical comedy rather than romantic idealism',
      'It avoids love entirely',
      'It criticises love',
    ],
    correctIndex: 1,
    explanation:
      'Singh Song! replaces Western romantic conventions with playful, culturally specific imagery. Love is expressed through shared chutney, sneaking from the shop, and irreverent humour.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'ss-8',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      'A long free-verse poem with a song-like refrain ("Singh Song!") and dialogue sections',
      'Blank verse',
      'Quatrains',
    ],
    correctIndex: 1,
    explanation:
      'The poem uses free verse with a distinctive song-like quality (the title itself is a pun on "sing-song"). Dialogue sections and refrains create a musical, oral-tradition feel.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'ss-9',
    question: "What is the effect of the customers' complaints?",
    type: 'multiple-choice',
    options: [
      'They make the speaker sad',
      "Their comic complaints highlight the speaker's neglect of duty - but the reader sides with love over commerce",
      'They are supportive',
      'They are ignored entirely',
    ],
    correctIndex: 1,
    explanation:
      "The customers' frustrated complaints about out-of-date produce and poor service provide comic contrast. The reader enjoys the speaker's prioritisation of love over the mundane duty of shopkeeping.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'ss-10',
    question: 'Which poem pairs best with Singh Song!?',
    type: 'multiple-choice',
    options: ['Neutral Tones', 'Letters from Yorkshire by Maura Dooley', 'Exposure', 'Ozymandias'],
    correctIndex: 1,
    explanation:
      'Both Singh Song! and Letters from Yorkshire explore relationships within specific cultural/social settings. Both present love through everyday, unglamorous detail rather than romantic idealism.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Singh Song! celebrates joyful, playful love, cultural identity, the tension between duty and desire, and unconventional relationships.',
    keyPoints: [
      'Love as joy and play - contrasts with painful love poems in the anthology',
      'Duty vs desire - the shop (obligation) vs the wife (passion)',
      'Cultural identity - Punjabi-British experience celebrated through language',
      'The wife as unconventional - she defies traditional expectations',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Nagra uses Punjabi-English dialect, humour, food imagery, and playful cultural references to celebrate love.',
    keyPoints: [
      'Punjabi-English dialect - language as cultural identity',
      'Food imagery - chutney and cooking as expressions of intimacy',
      'Humour - love is fun, not solemn',
      "Customers' complaints - comic contrast with the love story",
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Free verse with song-like qualities, dialogue sections, and a refrain. The loose form mirrors the speaker's carefree attitude.",
    keyPoints: [
      "Free verse - no rigid form, matching the speaker's freedom",
      'Song-like refrain - "Singh Song!" as musical, oral quality',
      'Dialogue - voices of customers contrast with the love story',
      'Long, flowing lines - energy and exuberance',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Nagra present love as joyful and liberating in Singh Song!?',
  'Compare how love is celebrated in Singh Song! and one other poem from the anthology.',
  'How does Nagra use language and form to explore cultural identity and love?',
]

const comparePoems = [
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason:
      'Both celebrate love expressed through everyday, domestic details rather than grand romantic gestures. Both find beauty in the ordinary.',
    themes: ['Love', 'Everyday Life', 'Connection'],
  },
  {
    title: 'Winter Swans',
    poet: 'Owen Sheers',
    link: '/revision/poetry/love-and-relationships/winter-swans',
    reason:
      "Both portray relationships that endure through difficulty. Sheers' couple survive an argument silently; Nagra's couple thrive amid cultural tension with joyful defiance.",
    themes: ['Love', 'Resilience', 'Unity'],
  },
  {
    title: 'Porphyria\u2019s Lover',
    poet: 'Robert Browning',
    link: '/revision/poetry/love-and-relationships/porphyrias-lover',
    reason:
      "Both feature dramatic monologues with a distinctive voice. Browning's speaker is obsessive and violent; Nagra's speaker is joyful and celebratory. Both challenge conventions of love poetry.",
    themes: ['Love', 'Voice', 'Dramatic Monologue'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function SinghSongPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Singh Song! by Daljit Nagra - Analysis & Annotations"
        description="Line-by-line analysis of Singh Song! with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'Singh Song!',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/singh-song',
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
          <h1 className="text-heading-lg font-heading text-foreground">Singh Song!</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Daljit Nagra &middot; <em>Look We Have Coming to Dover!</em> (2007)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Love', 'Identity', 'Culture', 'Duty', 'Rebellion', 'Humour'].map((theme) => (
          <Badge key={theme} variant="outline" className="text-xs">
            {theme}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Singh Song!"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Singh Song!"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      {/* Copyright / verification notice - Singh Song! is in copyright (Faber & Faber on behalf of
          Daljit Nagra) and its exact wording cannot be verified here, so the poem is NOT reproduced.
          The study guide below is paraphrase only. */}
      <aside
        role="note"
        aria-label="Copyright and verification notice"
        className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-[12px] leading-relaxed text-amber-900 dark:text-amber-200"
      >
        <p>
          <strong>Important - not the poem text:</strong> &ldquo;Singh Song!&rdquo; is in copyright
          (Faber &amp; Faber on behalf of Daljit Nagra) and its exact wording could not be verified
          for this guide, so the poem is <strong>not reproduced here</strong>. The reading guide
          below is a <strong>paraphrase in our own words</strong> describing the poem&rsquo;s
          content, voice, structure and devices for study. It contains no verbatim quotation. Before
          quoting in an exam answer, students{' '}
          <strong>
            must check all wording against the board-licensed AQA Love &amp; Relationships anthology
          </strong>{' '}
          or Nagra&rsquo;s named primary edition, <em>Look We Have Coming to Dover!</em> (Faber,
          2007).
        </p>
      </aside>

      <InteractivePoemViewer poem={singhSongPoem} />

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
          <strong>Rights notice:</strong> &copy; Faber &amp; Faber on behalf of Daljit Nagra (b.
          1966). Quotations from <em>Singh Song!</em> are short fair-dealing extracts under CDPA
          1988 &sect;30 (criticism, review, quotation). For full text, students should consult the
          board-licensed AQA Love &amp; Relationships anthology or Nagra&rsquo;s collection
          <em>Look We Have Coming to Dover!</em> (2007).
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
