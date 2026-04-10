import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

export const metadata: Metadata = {
  title: 'Anita and Me — Study Guide | The English Hub',
  description:
    'In-depth study guide for Anita and Me by Meera Syal: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/anita-and-me',
  },
}

const data: TextGuideData = {
  title: 'Anita and Me',
  author: 'Meera Syal',
  year: 'published 1996',
  category: 'Novel',
  badge: 'AQA / Edexcel / OCR / Eduqas',
  intro:
    "Meera Syal's semi-autobiographical novel follows Meena Kumar, a British-Punjabi girl growing up in the fictional Black Country mining village of Tollington in the early 1970s. Her dangerous, electric friendship with the older, white, working-class Anita Rutter forces her to navigate identity, belonging and casual racism on the cusp of adolescence.",
  quickInfo: {
    genre: 'Bildungsroman / British-Asian coming-of-age',
    setting: 'Tollington, Black Country, 1972',
    length: '~110,000 words',
    published: '1996',
  },
  plotSummary: [
    'Nine-year-old Meena Kumar is the only child of Punjabi immigrant parents who have settled in Tollington, a small ex-mining village where theirs is the only Indian family. Meena loves her parents and the warm chaos of the extended community they call their aunties and uncles, but she longs for the freedom and glamour she sees in her white neighbours.',
    "The charismatic and troubled Anita Rutter takes Meena under her wing. Through Anita, Meena enters a riskier world of shoplifting, lying and playground hierarchies. Meena hides parts of her home life from Anita and parts of Anita's influence from her parents, and the double life begins to fracture her sense of self.",
    "Racial tensions sharpen as the summer wears on. The building of a new motorway threatens the village, Enoch Powell is on television, and Anita's older boyfriend Sam Lowbridge commits a shocking racist attack. Meena's family is directly targeted. The illusion that racism is someone else's problem collapses, and Meena begins to understand what her parents have been protecting her from.",
    "A serious accident and the arrival of Meena's beloved Nanima from India reorient her. Reconnected to her Punjabi heritage and sobered by Anita's betrayals, Meena studies for her eleven-plus, passes into grammar school and prepares to leave Tollington. The novel closes with a bittersweet farewell to the village and to the version of herself she has outgrown.",
  ],
  characters: [
    {
      name: 'Meena Kumar',
      role: 'Narrator and protagonist',
      body: "Bright, imaginative and a compulsive storyteller, Meena speaks from the retrospective voice of her adult self while inhabiting her nine-year-old longings. Her inner conflict between cultures is the novel's engine.",
    },
    {
      name: 'Anita Rutter',
      role: "Meena's dangerous best friend",
      body: "Older, tougher and from a chaotic home, Anita fascinates Meena with her freedom. Syal gradually reveals the damage behind Anita's swagger, refusing to let the reader simply pity or condemn her.",
    },
    {
      name: 'Mama and Papa (Shyam and Daljit)',
      role: "Meena's parents",
      body: 'Warm, aspirational and self-sacrificing, they carry the weight of migration with grace. Their pain when racism touches the family is quietly devastating and reframes Meena\u2019s understanding of them.',
    },
    {
      name: 'Nanima',
      role: "Meena's maternal grandmother",
      body: 'Arriving from India partway through the novel, Nanima speaks no English but reconnects Meena to her language, stories and sense of self. Her presence rebalances the book.',
    },
    {
      name: 'Sam Lowbridge',
      role: "Anita's racist boyfriend",
      body: "Charismatic and violent, Sam embodies the racist politics seeping into Tollington. His targeted attack is the novel's turning point.",
    },
    {
      name: 'Auntie Shaila and the uncles',
      role: 'Community family',
      body: 'The unrelated Punjabi adults who make the Kumars\u2019 home a centre of laughter, food and argument. They show Meena that family is chosen as well as inherited.',
    },
  ],
  themes: [
    {
      title: 'Identity and belonging',
      body: 'Meena swings between wanting to be British and discovering her Punjabi roots. Syal refuses a neat resolution and shows identity as something negotiated daily, not chosen once.',
    },
    {
      title: 'Racism and class',
      body: 'Syal carefully distinguishes casual, ignorant prejudice from organised violence. The novel tracks how ordinary villagers drift toward racist politics when their own lives are squeezed.',
    },
    {
      title: 'Friendship and betrayal',
      body: 'Meena\u2019s love for Anita is genuine and the betrayals are real on both sides. The friendship is a mirror that shows Meena what she wants to be and what she is not.',
    },
    {
      title: 'Storytelling and voice',
      body: 'Meena lies compulsively, and Syal makes lying the twin of creativity. The novel is also about finding a voice that can hold contradiction without flinching.',
    },
    {
      title: 'Change and nostalgia',
      body: "The motorway bulldozing Tollington stands in for the loss of a particular England. Syal's tone is affectionate but clear-eyed: not everything in the old village is worth keeping.",
    },
  ],
  historicalContext: [
    'Anita and Me is set in 1972, the year Meera Syal herself turned eleven. It captures a very specific moment in British-Asian history: families who arrived in the 1960s were putting down roots while the National Front and Enoch Powell\u2019s 1968 Rivers of Blood speech were sharpening public racism.',
    'The Black Country — the post-industrial area west of Birmingham — had been shaped by coal mining and heavy industry. By the 1970s those industries were in decline, jobs were insecure and communities like Tollington were visibly changing. The novel captures that economic anxiety.',
    "South Asian migration to the Midlands was driven by post-war labour shortages and then by the expulsion of Ugandan Asians in 1972. Many families experienced the gap between invitation and welcome that Syal dramatises through the Kumars' kindness to neighbours who sometimes repay it with suspicion.",
    'Syal is also writing in the 1990s, the decade of Goodness Gracious Me and a flowering of British-Asian voices in comedy and fiction. The novel\u2019s retrospective warmth is shaped by that later confidence.',
  ],
  quotations: [
    {
      quote: '"I\'m really not a liar, I just learned very early on that those of us deprived of history sometimes need to turn to mythology."',
      who: 'Meena — Chapter 1',
      analysis: 'Links storytelling directly to migration and displacement. Syal\u2019s thesis in one sentence.',
    },
    {
      quote: '"I began to realise that being an Indian in England was not the same as being Indian in India."',
      who: 'Meena — Chapter 8',
      analysis: 'Captures the diaspora experience and the impossibility of a single, unbroken identity.',
    },
    {
      quote: '"Anita was the undisputed cock of our yard."',
      who: 'Meena — Chapter 2',
      analysis: 'Establishes Anita\u2019s dominance in Meena\u2019s imagination and the power imbalance in their friendship.',
    },
    {
      quote: '"We don\'t want them here. Send them back."',
      who: 'Sam Lowbridge — Chapter 9',
      analysis: 'The novel\u2019s moment of explicit racist violence. Makes the political finally personal for Meena.',
    },
    {
      quote: '"I felt supremely beautiful for the first time in my short life."',
      who: 'Meena — Chapter 13',
      analysis: 'When she wears a Punjabi suit and reconnects with her culture. Identity is reframed as a source of pride, not shame.',
    },
    {
      quote: '"I knew I could not forgive Anita."',
      who: 'Meena — Chapter 14',
      analysis: 'The painful moral clarity that closes out childhood and the friendship.',
    },
    {
      quote: '"Goodbye, Tollington."',
      who: 'Meena — Epilogue',
      analysis: 'The novel\u2019s farewell carries loss and liberation in the same breath.',
    },
  ],
}

export default async function AnitaAndMePage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return <TextGuide data={data} />
}
