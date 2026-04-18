import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  title: 'To Kill a Mockingbird — Study Guide | The English Hub',
  description:
    'In-depth study guide for To Kill a Mockingbird by Harper Lee: plot, characters, themes, context and key quotations for Edexcel IGCSE.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/to-kill-a-mockingbird',
  },
}

const data: TextGuideData = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 'published 1960',
  category: 'Novel',
  badge: 'Edexcel IGCSE',
  intro:
    "Harper Lee's Pulitzer-winning novel follows the Finch children as their father Atticus defends a Black man falsely accused of rape in 1930s Alabama. It is a coming-of-age story, a courtroom drama and an indictment of the racism woven into the American South.",
  quickInfo: {
    genre: 'Southern Gothic / Bildungsroman',
    setting: 'Maycomb, Alabama, 1933-35',
    length: '~100,000 words, 31 chapters',
    published: '1960',
  },
  plotSummary: [
    "Set in the fictional town of Maycomb, Alabama, during the Depression, the novel is narrated by Jean Louise 'Scout' Finch, looking back on the summers of her sixth to ninth years. Scout, her older brother Jem and their friend Dill spend their days inventing games, most of them centred on their reclusive neighbour Arthur 'Boo' Radley, whom they imagine as a monster but who is really a wounded, kind man.",
    'Their father Atticus, a widowed lawyer, is appointed to defend Tom Robinson, a Black field hand accused of raping a young white woman named Mayella Ewell. The town turns against the Finches. Scout fights classmates who insult her father, and Jem struggles to understand why adults he has always respected suddenly seem cruel.',
    "At the trial Atticus proves conclusively that Tom could not physically have inflicted Mayella's injuries and exposes her father Bob Ewell as the real abuser. The all-white jury nevertheless convicts Tom, and he is later shot trying to escape prison. Scout begins to see that justice and law are not the same thing, and that the town she loves is capable of great evil.",
    "Humiliated by the trial, Bob Ewell attacks the Finch children on their walk home from a school pageant. In the darkness Boo Radley saves them, killing Ewell in the struggle. Sheriff Heck Tate refuses to drag the shy Boo into the spotlight, insisting Ewell 'fell on his knife'. Scout walks Boo home and finally sees Maycomb from his porch, understanding Atticus's lesson that you never really know a person until you walk around in their skin.",
  ],
  characters: [
    {
      name: 'Scout Finch',
      role: 'Narrator and young protagonist',
      body: "The tomboy narrator whose perspective combines childlike innocence with the adult Jean Louise looking back. Her moral education is the novel's spine, and her outsider voice lets Lee critique Maycomb without sermonising.",
    },
    {
      name: 'Atticus Finch',
      role: 'Lawyer, widower, moral centre',
      body: 'Patient, principled and quietly radical for his time and place. Atticus teaches his children that courage is doing right even when you know you will lose, and he shows this by taking on the Robinson case.',
    },
    {
      name: 'Jem Finch',
      role: "Scout's older brother",
      body: 'Jem bridges childhood and adolescence. The trial shatters his trust in the adult world and forces him to grow up too quickly, and his disillusionment is one of the novel\u2019s quietest tragedies.',
    },
    {
      name: 'Tom Robinson',
      role: 'The accused',
      body: "A decent, gentle, physically disabled field hand. Lee uses him as the novel's literal 'mockingbird' — a harmless soul destroyed by prejudice despite his innocence.",
    },
    {
      name: 'Boo (Arthur) Radley',
      role: 'Reclusive neighbour',
      body: "Imagined as a boogeyman but revealed as a quiet protector. Boo is the other mockingbird, shielded at the end by the sheriff from the town's curiosity.",
    },
    {
      name: 'Bob Ewell',
      role: 'Villain',
      body: 'Poor, abusive and full of wounded pride. His public humiliation in court drives him to attack the Finch children, exposing the violence at the bottom of the social hierarchy.',
    },
  ],
  themes: [
    {
      title: 'Racial injustice',
      body: 'Lee exposes a legal system that processes injustice with terrifying politeness. The verdict is never in doubt, and that is the point: the white jury cannot acquit a Black man of assaulting a white woman, however overwhelming the evidence.',
    },
    {
      title: 'Moral courage',
      body: "Atticus defines courage not as a man with a gun but as taking on a hopeless cause 'because you see it through no matter what'. Mrs Dubose's struggle with addiction models the same lesson on a private scale.",
    },
    {
      title: 'Childhood innocence and its loss',
      body: 'Scout and Jem begin the novel treating Boo as a joke and end it seeing him as a human being. Their growing understanding of evil is gentle, painful and impossible to reverse.',
    },
    {
      title: 'Class and social hierarchy',
      body: 'Maycomb is ordered by rigid social ranks: old families, working farmers, the Ewells, and the Black community. Lee shows how people cling to hierarchy when they have little else, and how that clinging feeds racism.',
    },
    {
      title: 'The mockingbird symbol',
      body: "'It\u2019s a sin to kill a mockingbird' because they do nothing but sing. The symbol binds Tom and Boo together as harmless beings destroyed or threatened by the cruelty of others.",
    },
  ],
  historicalContext: [
    'The novel is set in the early 1930s but published in 1960, at the height of the American Civil Rights movement. Harper Lee wrote it as the Montgomery bus boycott and the desegregation of Little Rock were fresh in public memory. The book spoke directly to a country confronting its own history.',
    'The Jim Crow laws that governed the South from the 1870s onward mandated segregation in schools, courts, churches and public spaces. Black defendants faced all-white juries, often all-male, and convictions for alleged crimes against white women were almost automatic. The Scottsboro Boys trial of 1931 is frequently cited as an inspiration for Tom\u2019s case.',
    'The Great Depression shapes the economic backdrop. Farmers lose land, the Cunninghams pay debts in hickory nuts and the Ewells live on relief cheques. Poverty feeds resentment and makes racial hierarchy more, not less, rigid.',
    'Lee drew heavily on her own Alabama childhood. Her father was a lawyer, her childhood friend Truman Capote inspired Dill, and the small-town details — heat, porches, church suppers, gossip — give the novel its authority and enduring warmth.',
  ],
  quotations: [
    {
      quote: '"You never really understand a person until you consider things from his point of view."',
      who: 'Atticus — Chapter 3',
      analysis: "The novel's moral compass. Empathy is the lesson Scout has to learn.",
    },
    {
      quote: '"It\'s a sin to kill a mockingbird."',
      who: 'Miss Maudie — Chapter 10',
      analysis: 'The central symbol. Defines the innocence that Tom and Boo share.',
    },
    {
      quote: '"Simply because we were licked a hundred years before we started is no reason not to try."',
      who: 'Atticus — Chapter 9',
      analysis: "Atticus's definition of courage and his justification for defending Tom.",
    },
    {
      quote: '"The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
      who: 'Atticus — Chapter 11',
      analysis: 'Places private morality above social pressure.',
    },
    {
      quote: '"People generally see what they look for, and hear what they listen for."',
      who: 'Atticus — Chapter 17',
      analysis: 'Sums up the prejudice that will decide the verdict before evidence is heard.',
    },
    {
      quote: '"Atticus, he was real nice."',
      who: 'Scout — Chapter 31',
      analysis: "Scout's final line about Boo Radley — innocence recovered through empathy.",
    },
    {
      quote: '"I do my best to love everybody."',
      who: 'Atticus — Chapter 11',
      analysis: 'A deceptively simple statement of the ethical code Atticus lives by.',
    },
  ],
}

export default async function ToKillAMockingbirdPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <StudyTools textName="To Kill a Mockingbird" textType="novel" examBoard="AQA" />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </>
  )
}
