import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

export const metadata: Metadata = {
  title: 'Lord of the Flies — Study Guide | The English Hub',
  description:
    'In-depth study guide for Lord of the Flies by William Golding: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/lord-of-the-flies',
  },
}

const data: TextGuideData = {
  title: 'Lord of the Flies',
  author: 'William Golding',
  year: 'published 1954',
  category: 'Novel',
  badge: 'AQA / OCR / Eduqas',
  intro:
    "William Golding's ferocious first novel strands a group of English schoolboys on a tropical island after their plane is shot down during a future war. What begins as an adventure quickly collapses into savagery as Golding tests — and rejects — the Victorian myth that civilisation is the natural state of well-bred boys.",
  quickInfo: {
    genre: 'Allegorical novel / Psychological fable',
    setting: 'An uninhabited Pacific island, near-future wartime',
    length: '~60,000 words, 12 chapters',
    published: '1954',
  },
  plotSummary: [
    "A plane carrying British schoolboys is shot down over a tropical island. The survivors, none older than about twelve, emerge to find no adults. Fair-haired Ralph finds a conch shell and, with the help of the plump, asthmatic Piggy, uses it to summon the others. The boys elect Ralph chief. Jack Merridew, leader of a group of choirboys, is made head of the hunters in a grudging compromise.",
    "Ralph builds shelters, insists on a signal fire and holds meetings where whoever holds the conch can speak. Jack becomes obsessed with hunting the island's pigs and gradually pulls his choir — painted, bare-chested and singing — away from Ralph's order. A rumour spreads among the younger children of a 'beast' on the mountain. What they have actually seen is the body of a dead parachutist tangled in his lines.",
    "At the centre of the novel, the group kills a sow and mounts her head on a stake. The visionary, epileptic Simon alone climbs the mountain, discovers the parachutist, and understands that the beast is nothing more than a man and that the real evil lives inside the boys themselves. As he returns in the dark to tell them, he is mistaken for the beast and beaten to death in a frenzied circle dance.",
    "Jack's tribe grows dominant. They raid Ralph's camp, steal Piggy's glasses (their only source of fire), and later roll a boulder that kills Piggy and shatters the conch. Ralph is hunted across the burning island by boys who now want him dead. He collapses on the beach at the feet of a naval officer, who has come ashore because of the smoke, and weeps for the end of innocence and 'the darkness of man's heart'.",
  ],
  characters: [
    {
      name: 'Ralph',
      role: 'Elected chief',
      body: 'Ralph stands for democratic order, fairness and common sense. Golding shows him as well-meaning but not particularly brilliant, and his gradual isolation is the measure of civilisation\u2019s collapse.',
    },
    {
      name: 'Piggy',
      role: 'Rational, asthmatic outsider',
      body: "Piggy is the voice of science and adult rationality. The boys mock his body, his glasses and his accent, and in destroying him they destroy the last argument for reason. His death ends any hope of rescue from within.",
    },
    {
      name: 'Jack Merridew',
      role: 'Head hunter, eventual dictator',
      body: 'Jack is the novel\u2019s portrait of authoritarianism: charismatic, cruel, hungry for power. He understands that fear and spectacle are more useful than argument, and he uses both.',
    },
    {
      name: 'Simon',
      role: 'Visionary, prophetic outsider',
      body: "Simon is the closest thing the novel has to a saint. He grasps the novel's central truth — that the beast is the boys themselves — and is murdered for trying to share it, in a scene Golding stages with religious overtones.",
    },
    {
      name: 'Roger',
      role: "Jack's lieutenant, sadist",
      body: 'Roger drops stones at first but misses on purpose because the old world still restrains him. By the end, civilisation has fallen away and he tortures and kills without hesitation.',
    },
    {
      name: 'Sam and Eric (Samneric)',
      role: 'Inseparable twins',
      body: 'Treated almost as one person, the twins represent ordinary conformity. Their eventual betrayal of Ralph shows how fear turns decent people into accomplices.',
    },
  ],
  themes: [
    {
      title: 'Civilisation versus savagery',
      body: 'The novel\u2019s central conflict. Golding refuses the comforting idea that British schoolboys carry civilisation inside them; he shows it as a thin paint that washes off in the rain.',
    },
    {
      title: 'Innate evil and original sin',
      body: 'Golding was shaped by the Second World War and rejected the liberal optimism of his age. The Lord of the Flies — the pig\u2019s head on a stake — speaks to Simon with a voice that could belong to anyone on the island.',
    },
    {
      title: 'Order, democracy and dictatorship',
      body: 'The conch symbolises rules and turn-taking. Its shattering at Piggy\u2019s death is the moment democracy dies on the island, and Jack\u2019s rule is a sharp warning about how quickly fear produces strongmen.',
    },
    {
      title: 'Loss of innocence',
      body: 'The boys begin the novel in their school uniforms and end it naked, painted and murderous. The tears on the beach in the final chapter mourn not just the dead but the shared myth of childhood purity itself.',
    },
    {
      title: 'The beast',
      body: 'The boys keep searching for an external monster, but Simon alone understands that the beast is internal. Golding makes this the novel\u2019s moral hinge and its most chilling psychological claim.',
    },
  ],
  historicalContext: [
    'William Golding, a schoolteacher and naval officer, served in the Royal Navy during the Second World War and participated in the D-Day landings. He later said that watching what ordinary people were willing to do during the war made it impossible for him to believe humans were innately good, and Lord of the Flies grew directly out of that disillusionment.',
    'The novel is set during a vague future war, usually read as a nuclear conflict, and the parachutist\u2019s body is a reminder that the adult world the boys trust has also descended into violence. The island is less an escape from civilisation than a tiny mirror of it.',
    'Golding was consciously writing against the Victorian tradition of R.M. Ballantyne\u2019s The Coral Island, in which stranded English boys remain cheerful, inventive and Christian. Golding\u2019s reply was that those boys were a comforting lie, and the pig on a stake is his answer to the cheerful campfire.',
    "The novel was repeatedly rejected before it was published in 1954 and only slowly became a classroom staple. By the 1960s it was required reading in British and American schools, and it won Golding the Nobel Prize in Literature in 1983.",
  ],
  quotations: [
    {
      quote: '"Maybe there is a beast... maybe it\'s only us."',
      who: 'Simon — Chapter 5',
      analysis: 'The novel\u2019s thesis in a sentence. Evil comes from within, not from the jungle.',
    },
    {
      quote: '"We\'ve got to have rules and obey them. After all, we\'re not savages."',
      who: 'Jack — Chapter 2',
      analysis: 'The irony of Jack\u2019s early insistence on order. Within a hundred pages he will embody the opposite.',
    },
    {
      quote: '"Kill the pig. Cut her throat. Spill her blood."',
      who: 'Chant — Chapter 4',
      analysis: 'The ritual chant Golding uses to track the boys\u2019 descent. It mutates into the chant that kills Simon.',
    },
    {
      quote: '"Ralph wept for the end of innocence, the darkness of man\'s heart."',
      who: 'Narrator — final chapter',
      analysis: 'Golding\u2019s closing judgement. The loss is not just of boyhood but of a shared moral illusion.',
    },
    {
      quote: '"Sucks to your ass-mar!"',
      who: 'The boys to Piggy — Chapter 1',
      analysis: 'Cruelty begins as playground teasing. Golding shows how easily it hardens into hunting.',
    },
    {
      quote: '"Fancy thinking the Beast was something you could hunt and kill!"',
      who: 'The Lord of the Flies — Chapter 8',
      analysis: "The pig's head taunts Simon with the truth the others refuse to see.",
    },
    {
      quote: '"The conch exploded into a thousand white fragments."',
      who: 'Narrator — Chapter 11',
      analysis: 'Democracy on the island dies in a single sentence. Piggy\u2019s death follows immediately.',
    },
  ],
}

export default async function LordOfTheFliesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </>
  )
}
