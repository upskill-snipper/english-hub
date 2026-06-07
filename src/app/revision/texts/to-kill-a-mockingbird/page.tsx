import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'
export const metadata: Metadata = {
  openGraph: {
    title:
      'To Kill a Mockingbird revision guide - themes, characters, key quotes - The English Hub',
    description: 'To Kill a Mockingbird IGCSE revision - Harper Lee',
  },
  title: 'To Kill a Mockingbird revision guide - themes, characters, key quotes',
  description:
    "To Kill a Mockingbird IGCSE revision - Harper Lee's novel with characters, themes, context and key quotes. Aligned to Pearson Edexcel IGCSE 4ET1 spec.",
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
      body: "A decent, gentle, physically disabled field hand. Lee uses him as the novel's literal 'mockingbird' - a harmless soul destroyed by prejudice despite his innocence.",
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
    'Lee drew heavily on her own Alabama childhood. Her father was a lawyer, her childhood friend Truman Capote inspired Dill, and the small-town details - heat, porches, church suppers, gossip - give the novel its authority and enduring warmth.',
  ],
  quotations: [
    {
      quote:
        '"You never really understand a person until you consider things from his point of view."',
      who: 'Atticus - Chapter 3',
      analysis: "The novel's moral compass. Empathy is the lesson Scout has to learn.",
    },
    {
      quote: '"It\'s a sin to kill a mockingbird."',
      who: 'Miss Maudie - Chapter 10',
      analysis: 'The central symbol. Defines the innocence that Tom and Boo share.',
    },
    {
      quote:
        '"Simply because we were licked a hundred years before we started is no reason not to try."',
      who: 'Atticus - Chapter 9',
      analysis: "Atticus's definition of courage and his justification for defending Tom.",
    },
    {
      quote: '"The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
      who: 'Atticus - Chapter 11',
      analysis: 'Places private morality above social pressure.',
    },
    {
      quote: '"People generally see what they look for, and hear what they listen for."',
      who: 'Atticus - Chapter 17',
      analysis: 'Sums up the prejudice that will decide the verdict before evidence is heard.',
    },
    {
      quote: '"Atticus, he was real nice."',
      who: 'Scout - Chapter 31',
      analysis: "Scout's final line about Boo Radley - innocence recovered through empathy.",
    },
    {
      quote: '"I do my best to love everybody."',
      who: 'Atticus - Chapter 11',
      analysis: 'A deceptively simple statement of the ethical code Atticus lives by.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'tkm-1',
    question: 'Who is the narrator of To Kill a Mockingbird?',
    type: 'multiple-choice',
    options: ['Atticus Finch', 'Jem Finch', 'Scout Finch', 'Boo Radley'],
    correctIndex: 2,
    explanation:
      'The novel is narrated by Jean Louise "Scout" Finch, looking back on the summers of her childhood. Her outsider perspective combines childlike innocence with adult retrospection.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tkm-2',
    question: "What is Atticus Finch's profession?",
    type: 'multiple-choice',
    options: ['Doctor', 'Farmer', 'Lawyer', 'Teacher'],
    correctIndex: 2,
    explanation:
      "Atticus is a widowed lawyer who is appointed to defend Tom Robinson. His decision to do so despite the town's hostility demonstrates the novel's theme of moral courage.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tkm-3',
    question: 'What is Tom Robinson accused of?',
    type: 'multiple-choice',
    options: ['Theft', 'Murder', 'Raping Mayella Ewell', 'Trespassing'],
    correctIndex: 2,
    explanation:
      'Tom Robinson, a Black field hand, is falsely accused of raping Mayella Ewell. Despite Atticus proving his innocence at trial, the all-white jury convicts him.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tkm-4',
    question: 'Who is Boo Radley?',
    type: 'multiple-choice',
    options: [
      'The town sheriff',
      'A reclusive neighbour the children imagine as a monster',
      "Scout's teacher",
      "Bob Ewell's brother",
    ],
    correctIndex: 1,
    explanation:
      'Arthur "Boo" Radley is the Finch children\'s reclusive neighbour. They imagine him as a boogeyman but he is revealed as a quiet, kind protector who saves them from Bob Ewell\'s attack.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tkm-5',
    question: 'What does "it\'s a sin to kill a mockingbird" symbolise?',
    type: 'multiple-choice',
    options: [
      'A law about hunting',
      'It is wrong to harm innocent, harmless beings who do nothing but good',
      'A superstition',
      'An old saying with no deeper meaning',
    ],
    correctIndex: 1,
    explanation:
      'The mockingbird symbolises innocence. Miss Maudie explains that mockingbirds "don\'t do one thing but sing their hearts out for us." Tom Robinson and Boo Radley are both mockingbirds - harmless souls destroyed or threatened by cruelty.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'tkm-6',
    question: "What does Atticus prove during the trial about Tom's physical ability?",
    type: 'multiple-choice',
    options: [
      'Tom is left-handed',
      "Tom's left arm is crippled and he could not have inflicted the injuries",
      'Tom was not in Maycomb at the time',
      'Tom has an alibi',
    ],
    correctIndex: 1,
    explanation:
      "Tom's left arm was damaged in a cotton gin accident as a child. Since Mayella's injuries were inflicted by a left-handed assailant and Tom cannot use his left hand, Atticus proves Tom physically could not have committed the assault. Bob Ewell, who is left-handed, is the real abuser.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tkm-7',
    question: 'When is the novel set?',
    type: 'multiple-choice',
    options: ['The 1960s', 'The 1950s', 'The 1930s (Depression era)', 'The 1910s'],
    correctIndex: 2,
    explanation:
      'The novel is set in the early 1930s during the Great Depression. Poverty shapes the economic backdrop: farmers lose land, the Cunninghams pay debts in hickory nuts, and the Ewells live on welfare.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'tkm-8',
    question: 'What happens to Tom Robinson after the trial?',
    type: 'multiple-choice',
    options: [
      'He is freed on appeal',
      'He is shot trying to escape prison',
      'He serves his sentence quietly',
      'He escapes and disappears',
    ],
    correctIndex: 1,
    explanation:
      'Tom is shot and killed trying to escape prison. The guards fire seventeen times, which Atticus calls "typical." Lee suggests that the system was always going to destroy Tom one way or another.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tkm-9',
    question:
      'What is the significance of Atticus\'s teaching that "you never really understand a person until you consider things from his point of view"?',
    type: 'multiple-choice',
    options: [
      'It is just good advice',
      "It is the novel's moral compass - empathy is the lesson Scout must learn throughout the book",
      'It applies only to the trial',
      'It is ironic because Atticus is prejudiced',
    ],
    correctIndex: 1,
    explanation:
      "This line is the novel's core moral philosophy. Scout's entire journey is learning to see the world through others' eyes - from Boo Radley to Tom Robinson to even Mrs Dubose. Empathy is presented as the antidote to prejudice.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tkm-10',
    question: 'Why does Scout say "Atticus, he was real nice" about Boo Radley at the end?',
    type: 'multiple-choice',
    options: [
      'She is being polite',
      'She has finally achieved the empathy Atticus taught her, seeing Boo as a human being rather than a monster',
      'She is surprised',
      'She feels sorry for him',
    ],
    correctIndex: 1,
    explanation:
      'Scout\'s simple line shows she has completed her moral education. She now sees Boo Radley as a human being rather than a boogeyman. Atticus responds: "Most people are, Scout, when you finally see them" - the novel\'s quiet conclusion.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'tkm-11',
    question: 'What role does Mrs Dubose play in the theme of courage?',
    type: 'multiple-choice',
    options: [
      'She is just a mean neighbour',
      "She models Atticus's definition of courage by battling her morphine addiction before death",
      'She supports the Finches',
      'She testifies at the trial',
    ],
    correctIndex: 1,
    explanation:
      'Mrs Dubose, despite being racist and unpleasant, models Atticus\'s definition of courage by fighting her morphine addiction before she dies. Atticus tells Jem she was "the bravest person I ever knew," demonstrating that courage means persisting even when you know you will lose.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tkm-12',
    question: 'Why does the sheriff insist that Bob Ewell "fell on his knife"?',
    type: 'multiple-choice',
    options: [
      'He is lying to protect himself',
      'He refuses to drag the shy Boo Radley into the spotlight, protecting another mockingbird',
      'He did not investigate properly',
      'He is covering up for Atticus',
    ],
    correctIndex: 1,
    explanation:
      "Sheriff Tate knows Boo Radley killed Ewell to save the children, but dragging Boo into the public eye would destroy him. Tate's lie protects another innocent mockingbird. Scout understands: \"it'd be sort of like shootin' a mockingbird.\"",
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'tkm-13',
    question: 'How does Harper Lee use the trial to expose the legal system?',
    type: 'multiple-choice',
    options: [
      'She shows the system works perfectly',
      'She reveals a legal system that processes injustice with terrifying politeness, where the verdict was never in doubt',
      'She argues for legal reform',
      'She shows the jury was bribed',
    ],
    correctIndex: 1,
    explanation:
      "The trial proves Tom's innocence beyond doubt, but the all-white jury convicts him anyway. Lee exposes a system where justice and law are not the same thing: the legal process functions perfectly while delivering a profoundly unjust outcome.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tkm-14',
    question: 'What is the effect of Scout narrating as both a child and an adult looking back?',
    type: 'multiple-choice',
    options: [
      'It is confusing',
      'The dual perspective combines innocent wonder with adult understanding, allowing critique without sermonising',
      'There is only one perspective',
      'The adult voice dominates',
    ],
    correctIndex: 1,
    explanation:
      "Scout's dual perspective - child experiencing events and adult Jean Louise reflecting - allows Lee to critique Maycomb's racism without sermonising. The child's innocent questions expose what adults take for granted, while the retrospective voice provides understanding.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'tkm-15',
    question: 'How does the Scottsboro Boys case connect to the novel?',
    type: 'multiple-choice',
    options: [
      'It is the same case',
      "The 1931 case of Black youths falsely accused of rape is frequently cited as an inspiration for Tom's trial",
      'It happened after the novel',
      'There is no connection',
    ],
    correctIndex: 1,
    explanation:
      "The Scottsboro Boys case (1931), in which nine Black youths were falsely accused of raping two white women, is widely seen as an inspiration for Tom Robinson's trial. Both cases expose the impossibility of justice for Black defendants in the Jim Crow South.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'tkm-16',
    question: "What does Jem's disillusionment after the trial represent?",
    type: 'multiple-choice',
    options: [
      'Normal teenage mood swings',
      "The shattering of youthful trust in adult fairness, which is the novel's quietest tragedy",
      'Jem is simply bored',
      'Jem wants to become a lawyer',
    ],
    correctIndex: 1,
    explanation:
      "Jem bridges childhood and adolescence, and the trial shatters his trust in the adult world. He believed justice would prevail because the evidence was clear. His forced, painful maturation is one of the novel's quietest tragedies.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'tkm-17',
    question:
      'How does Lee use the social hierarchy of Maycomb to reinforce the theme of prejudice?',
    type: 'multiple-choice',
    options: [
      'The hierarchy is fair',
      'She shows rigid social ranks where people cling to hierarchy when they have little else, feeding racism',
      'The hierarchy does not matter',
      'Everyone is equal in Maycomb',
    ],
    correctIndex: 1,
    explanation:
      'Maycomb is ordered by rigid social ranks: old families, working farmers, the Ewells, and the Black community. Lee shows how people cling to hierarchy when they have little else (the Ewells despise Black people to feel superior), and how that clinging feeds racism.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'tkm-18',
    question: 'Why does Lee set the novel in the 1930s but publish it in 1960?',
    type: 'multiple-choice',
    options: [
      'She wrote slowly',
      'The historical setting allows her to address the Civil Rights era indirectly, making the critique more palatable',
      'The dates are a coincidence',
      'She was writing a period piece',
    ],
    correctIndex: 1,
    explanation:
      "Published at the height of the Civil Rights movement, the novel's 1930s setting allows Lee to address contemporary racial injustice through the lens of history. The historical distance makes the critique more palatable to white readers while the parallels are unmistakable.",
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'tkm-19',
    question: "What is the moral complexity of Atticus's position in Maycomb?",
    type: 'multiple-choice',
    options: [
      'He is simply heroic',
      'He works within a racist system he cannot change, doing his best while remaining part of the community that enables injustice',
      'He is hypocritical',
      'He opposes the system openly',
    ],
    correctIndex: 1,
    explanation:
      "Atticus is not a revolutionary - he works within Maycomb's institutions, socialises with its citizens, and holds office. His courage lies in doing right within a system he knows is unjust. This makes him both admirable and limited, reflecting the complexity of moral action within oppressive structures.",
    topic: 'Characters',
    difficulty: 'grade-9',
  },
  {
    id: 'tkm-20',
    question: 'How does Lee draw on her own childhood in the novel?',
    type: 'multiple-choice',
    options: [
      'She did not use personal experience',
      'Her father was a lawyer, her childhood friend Truman Capote inspired Dill, and Maycomb mirrors her Alabama hometown',
      'She grew up in New York',
      'She was a judge',
    ],
    correctIndex: 1,
    explanation:
      'Lee drew heavily on her Alabama childhood: her father was a lawyer, her friend Truman Capote inspired Dill, and the small-town details (heat, porches, church suppers, gossip) give the novel its authority and warmth.',
    topic: 'Context',
    difficulty: 'foundation',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Racial Injustice',
    summary: 'Lee exposes a legal system that processes injustice with terrifying politeness.',
    keyPoints: [
      "The verdict is never in doubt despite Atticus proving Tom's innocence",
      'All-white juries under Jim Crow laws made fair trials impossible',
      'The Scottsboro Boys case (1931) is a likely inspiration',
      'Tom is killed trying to escape - the system destroys him either way',
      'Lee connects the 1930s South to the 1960s Civil Rights movement',
    ],
  },
  {
    topic: 'Moral Courage',
    summary: 'Atticus defines courage as doing right even when you know you will lose.',
    keyPoints: [
      '"Simply because we were licked a hundred years before we started is no reason not to try"',
      'Mrs Dubose models courage by fighting her addiction before death',
      'Atticus takes the case knowing the town will turn against him',
      'Scout learns courage through fighting, then through restraint',
      'Courage is presented as a private moral choice, not a public display',
    ],
  },
  {
    topic: 'The Mockingbird Symbol',
    summary: 'Mockingbirds represent innocent beings destroyed by cruelty.',
    keyPoints: [
      '"It\'s a sin to kill a mockingbird" - they do nothing but sing',
      'Tom Robinson is the clearest mockingbird: innocent, destroyed',
      'Boo Radley is the other mockingbird: shielded by the sheriff',
      'The symbol binds Tom and Boo together across the race divide',
      "Scout's understanding of the symbol marks her moral growth",
    ],
  },
  {
    topic: 'Childhood Innocence and Its Loss',
    summary:
      "Scout and Jem begin treating Boo as a joke and end seeing the world's capacity for evil.",
    keyPoints: [
      'The Boo Radley game represents innocent childhood imagination',
      "The trial shatters Jem's trust in adult fairness",
      "Scout's moral education is the novel's spine",
      'The final walk home in the dark marks the end of childhood safety',
      'Lee shows growing understanding of evil as gentle, painful, and irreversible',
    ],
  },
  {
    topic: 'Class and Social Hierarchy',
    summary: "Maycomb's rigid social ranks feed racism and prejudice.",
    keyPoints: [
      'Old families, working farmers, the Ewells, Black community - a strict order',
      'The Ewells are poor but feel superior to Black people',
      'Poverty feeds resentment and makes racial hierarchy more rigid',
      "The Cunninghams represent honest poverty vs the Ewells' dysfunction",
      'Lee shows how class and race intersect to maintain injustice',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Harper Lee present the theme of racial injustice in To Kill a Mockingbird?',
  'How does Harper Lee use the character of Atticus to explore moral courage?',
  'How does Harper Lee present the loss of innocence through Scout and Jem?',
  'How does Harper Lee use the mockingbird symbol throughout the novel?',
  'How does Harper Lee explore the theme of class and social hierarchy in Maycomb?',
]

export default async function ToKillAMockingbirdPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }
  const userBoardLabel = board
    ? (getBoardConfig(board)?.shortName ?? 'Edexcel IGCSE')
    : 'Edexcel IGCSE'

  return (
    <>
      <CourseJsonLd
        name="To Kill a Mockingbird - Complete GCSE Study Guide"
        description="In-depth study guide for To Kill a Mockingbird covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <LearningResourceJsonLd
        name="To Kill a Mockingbird revision guide"
        description="IGCSE-aligned study guide for To Kill a Mockingbird covering plot, characters, themes, key quotations, historical context and exam essay plans."
        educationalLevel="IGCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/revision/texts/to-kill-a-mockingbird"
        about="To Kill a Mockingbird"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'To Kill a Mockingbird',
            url: 'https://theenglishhub.app/revision/texts/to-kill-a-mockingbird',
          },
        ]}
      />
      <TextStudyHub
        textName="To Kill a Mockingbird"
        textType="novel"
        examBoard={userBoardLabel}
        basePath="/revision/texts/to-kill-a-mockingbird"
        subPages={[
          {
            id: 'characters',
            href: '/revision/texts/to-kill-a-mockingbird/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/to-kill-a-mockingbird/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/to-kill-a-mockingbird/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/to-kill-a-mockingbird/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Harper Lee present the theme of racial injustice in To Kill a Mockingbird?',
          'How does Harper Lee use the character of Atticus to explore moral courage?',
          'How does Harper Lee present the loss of innocence through Scout and Jem?',
          'How does Harper Lee use the mockingbird symbol throughout the novel?',
          'How does Harper Lee explore the theme of class and social hierarchy in Maycomb?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="To Kill a Mockingbird"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {await t('rev.texts2.common.fair_dealing_notice')}
      </p>
    </>
  )
}
