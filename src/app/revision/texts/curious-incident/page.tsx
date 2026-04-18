import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  title: 'The Curious Incident of the Dog in the Night-Time — Study Guide | The English Hub',
  description:
    'In-depth study guide for The Curious Incident of the Dog in the Night-Time (stage play by Simon Stephens, from the novel by Mark Haddon): plot, characters, themes, context and key quotations for Edexcel IGCSE.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/curious-incident',
  },
}

const data: TextGuideData = {
  title: 'The Curious Incident of the Dog in the Night-Time',
  author: 'Simon Stephens (adapted from Mark Haddon)',
  year: 'first staged 2012',
  category: 'Play',
  badge: 'Edexcel IGCSE',
  intro:
    "Simon Stephens' stage adaptation of Mark Haddon's novel follows Christopher Boone, a fifteen-year-old mathematical prodigy who thinks and perceives the world differently. When he discovers his neighbour's dog Wellington killed with a garden fork, he resolves to investigate — a decision that unravels the carefully managed lies of his family and sends him on a solo journey across England.",
  quickInfo: {
    genre: 'Contemporary play with meta-theatrical framing',
    setting: 'Swindon and London, present day',
    length: 'Two-act play',
    published: '2012 (play); 2003 (source novel)',
  },
  plotSummary: [
    "Christopher Boone, a fifteen-year-old who is very good at mathematics and finds social interaction confusing, discovers his neighbour Mrs Shears\u2019s dog Wellington lying dead on the lawn, killed with a garden fork. He decides to investigate the crime like his hero Sherlock Holmes and to write the investigation down in a book. His teacher Siobhan encourages the project and the play is staged as Siobhan reading aloud from Christopher\u2019s book, a meta-theatrical frame that keeps Christopher's voice at the centre.",
    "Christopher\u2019s father Ed forbids him from investigating. Searching anyway, Christopher eventually finds a cache of letters in Ed\u2019s bedroom that his father had told him did not exist: they are from his mother Judy, whom Ed had told him was dead. Reading them, Christopher realises his mother is alive and has been writing to him from London for years. He also learns that Ed killed Wellington in a moment of anger.",
    "Overwhelmed by the betrayal, Christopher runs away. Alone, panicking but methodical, he travels across Swindon, navigates a crowded train station and the Underground, and eventually arrives at his mother\u2019s flat in Willesden. Judy, who left the family because she could not cope, is stunned and moved. Ed follows and tries to win Christopher back. The family cannot be reassembled.",
    "Christopher returns to Swindon with his mother and sits his A Level Maths exam, getting the A grade he dreamed of. The play ends not with reconciliation but with Christopher asking Siobhan whether his achievement means he can now do 'anything'. The ambiguity of Siobhan\u2019s silence is the production\u2019s quietest, most honest moment.",
  ],
  characters: [
    {
      name: 'Christopher Boone',
      role: 'Fifteen-year-old narrator and investigator',
      body: 'Brilliant at mathematics, terrified by the colours yellow and brown, honest to the point of bluntness. Stephens and Haddon refuse to reduce Christopher to a diagnosis, letting him be the centre of his own story.',
    },
    {
      name: 'Ed Boone',
      role: "Christopher's father",
      body: 'A man who loves his son fiercely and has been holding his life together with lies. Ed\u2019s killing of Wellington is a moment of real violence, and the play is brave about not letting him off the hook while still letting him remain complicated.',
    },
    {
      name: 'Judy Boone',
      role: "Christopher's mother",
      body: 'Exhausted, regretful and honest. Judy\u2019s decision to leave is shown as understandable but not excusable, and her reunion with Christopher is one of the play\u2019s most cautious, adult scenes.',
    },
    {
      name: 'Siobhan',
      role: "Christopher's teacher",
      body: 'A calm, attentive presence whose voice frames the play. She is the book\u2019s most stable figure and the adult Christopher actually trusts.',
    },
    {
      name: 'Mrs Shears',
      role: 'Neighbour and dog owner',
      body: 'Her grief for Wellington drives the initial mystery, and her brief relationship with Ed provides one of the clues Christopher pieces together.',
    },
    {
      name: 'Mr Shears and Mrs Alexander',
      role: 'Supporting neighbours',
      body: 'Characters whose unrelated relationships and secrets become accidental clues. Haddon and Stephens are careful to show that ordinary lives contain plenty of quiet chaos.',
    },
  ],
  themes: [
    {
      title: 'Difference and neurodivergence',
      body: "Christopher thinks differently, and the play refuses to treat that difference as a problem to solve. Stephens uses lighting, sound and ensemble movement to let the audience briefly experience the sensory world from Christopher\u2019s perspective.",
    },
    {
      title: 'Truth and lies',
      body: "Christopher cannot tell a lie, and the adults around him cannot seem to stop. The play stages the cost of the gap between them, and its central argument is that lies told out of love are still corrosive.",
    },
    {
      title: 'Independence and courage',
      body: 'Christopher\u2019s solo journey to London is the play\u2019s emotional heart. In a production that uses the full ensemble as swirling chaos around him, the train station sequence becomes an act of pure bravery.',
    },
    {
      title: 'Family and forgiveness',
      body: 'The Boone family is broken at the start of the play and differently broken at the end. Stephens resists easy reconciliation and lets the audience sit with the idea that love and failure can coexist in the same household.',
    },
    {
      title: 'Pattern, logic and control',
      body: 'Christopher calms himself by doing mathematics and by listing prime numbers. The play treats this as a genuine coping strategy, not a quirk, and Christopher\u2019s final exam scene turns mathematics into a form of selfhood.',
    },
  ],
  historicalContext: [
    "Mark Haddon published the novel in 2003, where it was an enormous international success. Haddon has said he did not set out to write a book 'about autism' and has resisted specific diagnostic labels for Christopher, preferring to let the character stand in his own complexity. The play honours that refusal.",
    "Simon Stephens adapted the play for London\u2019s National Theatre in 2012, directed by Marianne Elliott. The production was famous for its immersive staging: a grid-patterned box set that lit up around Christopher, treating his mind as a space the audience could enter. It transferred to the West End and Broadway, winning Olivier and Tony Awards for Best Play.",
    "Since the early 2000s, public understanding of autism and neurodivergence has changed rapidly, and the play sits inside that ongoing conversation. Critics and autistic readers have debated whether Christopher is a useful portrait or an idealised one; Stephens and Haddon have largely welcomed the debate rather than closing it down.",
    "The play is also about contemporary English life: commuter trains, suburban Swindon, Underground platforms, and the way ordinary families hold together. Its specificity is part of why it lands so strongly in the classroom.",
  ],
  quotations: [
    {
      quote: '"I find people confusing."',
      who: 'Christopher — Act 1',
      analysis: 'Christopher\u2019s quietly devastating statement of his main problem and the play\u2019s starting point.',
    },
    {
      quote: '"Prime numbers are what is left when you have taken all the patterns away."',
      who: 'Christopher — Act 1',
      analysis: 'Mathematics as Christopher\u2019s way of finding certainty in a chaotic world.',
    },
    {
      quote: '"I am going to prove that I am not stupid."',
      who: 'Christopher — Act 2',
      analysis: 'The A Level Maths exam is a promise he makes to himself early in the play. His keeping of it is its quiet triumph.',
    },
    {
      quote: '"Your mother was not a very good mother."',
      who: 'Ed — Act 1',
      analysis: 'The lie that unravels when Christopher finds the letters. Exposes the scale of Ed\u2019s deception.',
    },
    {
      quote: '"I can do anything."',
      who: 'Christopher — closing',
      analysis: "Christopher's ambiguous final line. Siobhan's silence is the play's most unsettling piece of staging.",
    },
    {
      quote: '"I killed Wellington."',
      who: 'Ed — Act 2',
      analysis: 'Ed\u2019s confession breaks the family and frames the second half of the play.',
    },
    {
      quote: '"I see everything."',
      who: 'Christopher — Act 2',
      analysis: 'Stephens gives Christopher a declaration of perceptual power, reframing difference as insight.',
    },
  ],
}

export default async function CuriousIncidentPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <StudyTools textName="The Curious Incident of the Dog in the Night-Time" textType="play" examBoard="AQA" />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </>
  )
}
