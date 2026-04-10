import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

export const metadata: Metadata = {
  title: 'Things Fall Apart — Study Guide | The English Hub',
  description:
    'In-depth study guide for Things Fall Apart by Chinua Achebe: plot, characters, themes, context and key quotations for Edexcel IGCSE.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/things-fall-apart',
  },
}

const data: TextGuideData = {
  title: 'Things Fall Apart',
  author: 'Chinua Achebe',
  year: 'published 1958',
  category: 'Novel',
  badge: 'Edexcel IGCSE 4ET1',
  intro:
    "Chinua Achebe's landmark novel follows Okonkwo, a proud Igbo warrior in pre-colonial Nigeria, whose rigid masculinity and world are shattered by the arrival of European missionaries and colonial administrators. It is a foundational text of postcolonial literature and a direct reply to European narratives of Africa.",
  quickInfo: {
    genre: 'Postcolonial tragedy',
    setting: 'Umuofia, Igboland (Nigeria), late 1890s',
    length: '~50,000 words, 25 chapters',
    published: '1958',
  },
  plotSummary: [
    "The novel opens in the nine Igbo villages of Umuofia, where Okonkwo is a celebrated wrestler and yam farmer. Determined not to resemble his lazy, debt-ridden father Unoka, Okonkwo builds wealth, takes three wives and earns titles. Achebe devotes the first third of the book to the rich fabric of Igbo daily life: festivals, proverbs, egwugwu ceremonies and the Oracle of the Hills and Caves.",
    "Okonkwo's world begins to fracture when a neighbouring village offers a young boy, Ikemefuna, as reparation for a killing. Ikemefuna lives with Okonkwo's family for three years and becomes like a son to him. When the Oracle decrees that Ikemefuna must be killed, Okonkwo takes part in the execution, cutting the boy down with his machete to avoid appearing weak. The act haunts him and marks the first step in his decline.",
    'During a funeral, Okonkwo\u2019s gun accidentally kills a clansman and he is exiled to his mother\u2019s village of Mbanta for seven years. While he is away, Christian missionaries arrive, bringing with them a new religion and, soon, a colonial court. His son Nwoye, alienated by the killing of Ikemefuna and the rigidity of his father, converts to Christianity.',
    "When Okonkwo returns to Umuofia he finds the village changed beyond recognition. After a clash between the clan and the church, a colonial officer summons the elders and has them beaten. Okonkwo kills a messenger sent to disperse a meeting, realises the clan will not fight, and hangs himself. The novel ends with the District Commissioner reducing Okonkwo's life to a single paragraph in a book tentatively titled 'The Pacification of the Primitive Tribes of the Lower Niger'.",
  ],
  characters: [
    {
      name: 'Okonkwo',
      role: 'Proud warrior and tragic hero',
      body: "Okonkwo's strength and ambition mask a deep fear of weakness inherited from his father. Achebe uses him to show that rigidity — not colonialism alone — is what breaks a man who cannot adapt.",
    },
    {
      name: 'Unoka',
      role: "Okonkwo's father",
      body: "A gentle, music-loving debtor who shames his son. Unoka represents the 'unmanly' tenderness that Okonkwo spends his life rejecting.",
    },
    {
      name: 'Nwoye',
      role: "Okonkwo's eldest son",
      body: 'Sensitive, thoughtful and alienated by his father\u2019s violence, Nwoye converts to Christianity and takes the name Isaac, symbolising the generational rupture that colonialism exploits.',
    },
    {
      name: 'Ikemefuna',
      role: 'Adopted ward',
      body: "The boy who becomes the son Okonkwo wishes Nwoye were. His killing is the moral hinge of the novel and exposes the cost of Okonkwo's fear.",
    },
    {
      name: 'Obierika',
      role: "Okonkwo's closest friend",
      body: "Thoughtful and questioning where Okonkwo is rigid, Obierika articulates the reader's doubts and delivers the novel's most moving closing eulogy.",
    },
    {
      name: 'Mr Brown / Reverend Smith',
      role: 'Missionaries',
      body: 'Brown is patient and respectful; Smith is zealous and provocative. Achebe contrasts them to show the range of colonial intrusion and to complicate any simple good-versus-evil reading.',
    },
  ],
  themes: [
    {
      title: 'Colonialism and cultural collision',
      body: 'Achebe refuses the colonial fantasy of empty Africa. The first half of the novel establishes a complex, functioning society; the second half shows a foreign power dismantling it. The tragedy is not that the Igbo were simple but that they were recognisable, and destroyed anyway.',
    },
    {
      title: 'Masculinity and fear',
      body: 'Okonkwo equates manhood with violence and dominance. His terror of being like Unoka makes him cruel to his family and blind to his own suffering. Achebe suggests that toxic masculinity is itself a kind of colonised consciousness.',
    },
    {
      title: 'Tradition and change',
      body: 'Igbo culture is not static in the novel — it has debates, reformers and internal dissenters. Achebe shows that change is possible from within, but that colonialism forecloses the slower, kinder alternative.',
    },
    {
      title: 'Language and storytelling',
      body: "The novel weaves in Igbo proverbs and songs, what Achebe calls 'the palm-oil with which words are eaten'. The final paragraph, which reduces Okonkwo to an anecdote, dramatises the violence of colonial narrative.",
    },
    {
      title: 'Fate and personal chi',
      body: 'The Igbo concept of chi — personal spirit — runs throughout. Okonkwo believes a man can shape his chi, but Achebe repeatedly suggests that no amount of willpower can save a man fighting on two fronts.',
    },
  ],
  historicalContext: [
    'Chinua Achebe published Things Fall Apart in 1958, two years before Nigerian independence. The novel is set sixty years earlier, at the moment British colonial power was consolidating its grip on the Lower Niger. Achebe wrote it in English specifically to answer European novels, especially Joseph Conrad\u2019s Heart of Darkness, that depicted Africa as a blank and savage backdrop.',
    "The Igbo people of southeastern Nigeria had decentralised villages, democratic councils and sophisticated religious and legal systems. Achebe's own grandparents lived through the imposition of British rule, and the oral histories of that generation shape the novel's texture and dialogue.",
    "British colonialism in the region used missionary work as its opening wedge: schools and churches were followed by district commissioners, prisons and native courts. By the time Okonkwo's generation realises what has happened, the institutions of daily life are already controlled from outside.",
    "Achebe's title is taken from W.B. Yeats's poem 'The Second Coming' ('Things fall apart; the centre cannot hold'), planting his Igbo tragedy inside the European literary canon and quietly insisting that it belongs there.",
  ],
  quotations: [
    {
      quote: '"Among the Igbo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten."',
      who: 'Narrator — Chapter 1',
      analysis: 'Establishes the sophistication of Igbo culture before any colonial contact.',
    },
    {
      quote: '"Okonkwo was clearly cut out for great things."',
      who: 'Narrator — Chapter 1',
      analysis: 'The early promise that the rest of the novel systematically dismantles.',
    },
    {
      quote: '"He was afraid of being thought weak."',
      who: 'Narrator on Okonkwo — Chapter 2',
      analysis: 'Identifies fear as the engine of his rigidity and eventual destruction.',
    },
    {
      quote: '"The white man is very clever... Now he has won our brothers, and our clan can no longer act like one."',
      who: 'Obierika — Chapter 20',
      analysis: 'A precise diagnosis of colonial strategy: divide, convert, rule.',
    },
    {
      quote: '"Living fire begets cold, impotent ash."',
      who: 'Narrator — Chapter 17',
      analysis: "Okonkwo's bitter view of his son Nwoye — foreshadows his own solitary end.",
    },
    {
      quote: '"That man was one of the greatest men in Umuofia. You drove him to kill himself."',
      who: 'Obierika — Chapter 25',
      analysis: "Reclaims Okonkwo's death from the colonial record and lays the blame where it belongs.",
    },
    {
      quote: '"The Pacification of the Primitive Tribes of the Lower Niger."',
      who: 'District Commissioner — Chapter 25',
      analysis: "The colonial book title that turns a human tragedy into a footnote — the novel's sharpest irony.",
    },
  ],
}

export default async function ThingsFallApartPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return <TextGuide data={data} />
}
