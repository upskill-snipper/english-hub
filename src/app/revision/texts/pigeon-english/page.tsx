import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

export const metadata: Metadata = {
  title: 'Pigeon English — Study Guide | The English Hub',
  description:
    'In-depth study guide for Pigeon English by Stephen Kelman: plot, characters, themes, context and key quotations for AQA GCSE.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/pigeon-english',
  },
}

const data: TextGuideData = {
  title: 'Pigeon English',
  author: 'Stephen Kelman',
  year: 'published 2011',
  category: 'Novel',
  badge: 'AQA GCSE',
  intro:
    "Stephen Kelman's Booker-shortlisted novel tells the story of eleven-year-old Harri Opoku, newly arrived in London from Ghana, who tries to solve the murder of a classmate on his estate. Narrated in Harri's voice — warm, funny, slang-heavy, endlessly hopeful — the book holds the reader close even as real danger closes in.",
  quickInfo: {
    genre: 'Contemporary literary fiction',
    setting: 'A fictional London tower-block estate, present day',
    length: '~70,000 words',
    published: '2011',
  },
  plotSummary: [
    "Harri Opoku and his older sister Lydia have recently moved from Ghana to join their mother and Auntie Sonia in a council flat on a high-rise estate. His father, baby sister and grandmother are still in Accra. Harri is dazzled by everything — Nike trainers, escalators, Haribo, Gameboys — and narrates his new life with a breathless inventiveness.",
    "A boy from Harri's school is stabbed to death outside a chicken shop. Inspired by the police tape and TV detectives, Harri and his friend Dean set out to investigate the murder. They collect 'evidence', spy on suspects and interview witnesses, blurring play with genuine risk.",
    "Meanwhile Harri tries to navigate school bullies, girls, the demands of the local gang known as the Dell Farm Crew, and the conflicting expectations of his mother and Auntie Sonia. A pigeon that visits his balcony becomes an imaginary friend and a quiet second narrator, offering the only adult perspective in the book.",
    "As Harri's amateur investigation edges closer to the truth, he attracts the attention of the gang. The novel's final chapters tighten into genuine suspense and end with a sudden, shocking act of violence. Kelman refuses to offer a neat resolution, and the reader is left with the terrible freshness of what has been lost.",
  ],
  characters: [
    {
      name: 'Harrison (Harri) Opoku',
      role: 'Eleven-year-old narrator',
      body: "Curious, gentle, fast on his feet and hopeful almost to the point of pain. Harri's voice — part Ghanaian, part playground London — is Kelman's greatest achievement and the reason the ending hurts so much.",
    },
    {
      name: 'Lydia Opoku',
      role: "Harri's older sister",
      body: "Fifteen and struggling to fit in, Lydia is tougher and angrier than Harri. Her exhaustion and outbursts show the weight adolescent migrant girls carry when they are expected to hold things together.",
    },
    {
      name: 'Mamma (Grace)',
      role: "Harri's mother",
      body: 'Works long shifts as a midwife and holds the family together through prayer, discipline and love. Her absences mean Harri is often unsupervised in a dangerous place.',
    },
    {
      name: 'Auntie Sonia',
      role: 'Glamorous, complicated aunt',
      body: "Beautiful and worldly, Sonia lives a riskier life than Mamma and is tangled up with men the family would prefer to forget. She represents the pull of adult choices Harri doesn't yet understand.",
    },
    {
      name: 'Dean',
      role: "Harri's white best friend",
      body: "A classmate obsessed with CSI, Dean drives the murder investigation forward. His friendship offers Harri a way into British childhood and, later, a glimpse of its limits.",
    },
    {
      name: 'The pigeon',
      role: 'Italicised second narrator',
      body: "A pigeon on the balcony offers brief, elevated meditations that counterpoint Harri's voice. It is tempting to read the bird as a watchful soul or a stand-in for the reader.",
    },
  ],
  themes: [
    {
      title: 'Childhood in a dangerous world',
      body: "Harri's innocence is not ignorance — he notices everything. Kelman shows how children process adult threat through play, and how play can keep a child alive or fail to.",
    },
    {
      title: 'Migration and belonging',
      body: 'Harri carries Ghana with him — proverbs, rituals, his grandmother\u2019s voice — and uses them to make sense of London. The novel treats migration as an act of love and improvisation rather than a problem to be solved.',
    },
    {
      title: 'Language and voice',
      body: 'Harri\u2019s slang is endlessly inventive. Kelman uses language to give his narrator agency; Harri names the world on his own terms, which is itself a form of power.',
    },
    {
      title: 'Violence and masculinity',
      body: 'The Dell Farm Crew offers belonging and protection in exchange for violence. Kelman refuses to demonise them, showing instead the poverty of options that make the gang attractive to young boys.',
    },
    {
      title: 'Faith, hope and superstition',
      body: 'Harri prays, counts his lucky objects and trusts that goodness will be rewarded. The gap between that faith and what actually happens gives the novel its moral weight.',
    },
  ],
  historicalContext: [
    "Pigeon English was directly inspired by the 2000 murder of Damilola Taylor, a ten-year-old Nigerian boy killed on a Peckham estate. Stephen Kelman wanted to imagine the inner life of a child like Damilola — not as victim but as narrator — and the novel's final chapters echo the real case closely.",
    "London's tower-block estates in the late twentieth and early twenty-first centuries were shaped by decades of underinvestment, high turnover and complex local gang cultures. Kelman grew up on a Luton estate and draws on the textures of that childhood — the smells, rituals, nicknames and hierarchies — rather than treating the estate as an abstraction.",
    'Ghanaian migration to the UK is a long-standing story: the Opokus are part of an established diaspora, and Harri\u2019s family speaks Twi at home while he learns to code-switch into playground English at school. Kelman researched Ghanaian speech and custom carefully, and the novel carries its cultural detail lightly.',
    "Published in 2011, Pigeon English appeared in a decade of heightened anxiety about knife crime in London. Kelman's novel insists on the humanity of the children involved on every side, pushing back against tabloid narratives that flatten them into statistics.",
  ],
  quotations: [
    {
      quote: '"You could see the blood. It was darker than you thought."',
      who: 'Harri — opening',
      analysis: "The novel's unsettling first line. Harri's flat tone is both childlike and traumatised.",
    },
    {
      quote: '"Asweh, it was brutal."',
      who: 'Harri — repeated',
      analysis: 'Harri\u2019s signature Ghanaian interjection. Anchors his voice and his sense of home.',
    },
    {
      quote: '"I just wanted to help."',
      who: 'Harri — throughout',
      analysis: 'His motivation is tenderly simple. The novel insists on honouring it rather than mocking it.',
    },
    {
      quote: '"Hutious" means scary, in case you were wondering.',
      who: 'Harri — passim',
      analysis: 'Kelman lets Harri define his own slang on the page. Vocabulary becomes an act of identity.',
    },
    {
      quote: '"I\'m not even scared, I promise."',
      who: 'Harri — late in novel',
      analysis: 'The repeated reassurance that makes the reader more afraid, not less.',
    },
    {
      quote: '"The dead boy\'s mother never stopped crying."',
      who: 'Harri — Chapter 1',
      analysis: 'Gives the murder its adult weight early, without ever leaving the child narrator\u2019s voice.',
    },
    {
      quote: '"I love everybody in my family even the ones I don\'t know yet."',
      who: 'Harri — middle',
      analysis: 'The moral centre of the book. The reader\u2019s grief at the end is grounded in lines like this.',
    },
  ],
}

export default async function PigeonEnglishPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return <TextGuide data={data} />
}
