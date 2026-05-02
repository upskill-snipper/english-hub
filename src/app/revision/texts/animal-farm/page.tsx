import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Animal Farm — Study Guide | The English Hub',
  description:
    'In-depth study guide for Animal Farm by George Orwell: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/animal-farm',
  },
}

const data: TextGuideData = {
  title: 'Animal Farm',
  author: 'George Orwell',
  year: 'published 1945',
  category: 'Novella',
  badge: 'AQA / Edexcel / OCR',
  intro:
    "George Orwell's short, savage fable watches a group of farm animals overthrow their human owner and establish a free commune, only to see their revolution betrayed as one pig after another seizes power. A blistering allegory of the Russian Revolution that remains a universal warning about how ideals curdle into tyranny.",
  quickInfo: {
    genre: 'Allegorical novella / Political fable',
    setting: 'Manor Farm (later Animal Farm), England, 1940s',
    length: '~30,000 words, 10 chapters',
    published: '1945',
  },
  plotSummary: [
    "Old Major, the prize boar, gathers the animals of Manor Farm and teaches them a song, 'Beasts of England', that dreams of a world without human masters. Three nights later he dies, and three younger pigs — the idealistic Snowball, the cunning Napoleon and the smooth-talking propagandist Squealer — turn his vision into a practical doctrine they call Animalism.",
    "When the drunken farmer Mr Jones forgets to feed the animals one night, they rise up, drive him out, and rename the farm Animal Farm. They paint Seven Commandments on the barn wall, most importantly: 'All animals are equal.' The pigs assume leadership and the first harvest is a triumph. The cart-horse Boxer becomes the revolution\u2019s muscle, vowing 'I will work harder' and 'Napoleon is always right'.",
    "Tension grows between Snowball, who wants to build a windmill to modernise the farm, and Napoleon, who secretly raises a litter of puppies as his enforcers. Napoleon uses these dogs to drive Snowball from the farm and then claims the windmill plan as his own. He begins executing 'traitors', rewriting history with Squealer's help, and trading with neighbouring farmers.",
    "Over the years the pigs move into the farmhouse, walk on two legs and dress in human clothes. The commandments disappear one by one, until only a single amended line remains: 'All animals are equal, but some animals are more equal than others.' In the final scene the other animals peer through the window and cannot tell the pigs from the humans they once overthrew.",
  ],
  characters: [
    {
      name: 'Old Major',
      role: 'Prize boar, visionary',
      body: 'Old Major represents Karl Marx and Lenin: a theorist of revolution who dies before he sees how it will actually unfold. His speech is inspiring and his vision is decent; the animals\u2019 tragedy is how easily it is betrayed.',
    },
    {
      name: 'Napoleon',
      role: 'Berkshire boar, dictator',
      body: "Napoleon represents Stalin: patient, brutal, allergic to debate. Orwell dislikes him too much to give him charisma, which is part of the point — tyrants don't have to be glamorous to win.",
    },
    {
      name: 'Snowball',
      role: 'Passionate, intellectual pig',
      body: 'Snowball is Trotsky: energetic, idealistic and ultimately driven out and rewritten. Orwell refuses to romanticise him, but his exile marks the end of honest debate on the farm.',
    },
    {
      name: 'Squealer',
      role: 'The pig propagandist',
      body: "Squealer represents the Soviet propaganda apparatus (Pravda). He can 'turn black into white' and his smooth rewriting of history is what makes Napoleon's power durable.",
    },
    {
      name: 'Boxer',
      role: 'Devoted cart-horse',
      body: 'Strong, loyal and heart-breakingly uncritical, Boxer is Orwell\u2019s portrait of the exploited working class. His end — sold to the knacker to pay for a case of whisky — is the book\u2019s most ruthless moment.',
    },
    {
      name: 'Benjamin',
      role: 'Cynical donkey',
      body: 'Benjamin sees everything clearly and says almost nothing. He represents the weary intellectual who understands what is happening and refuses to believe anything can stop it.',
    },
  ],
  themes: [
    {
      title: 'Power and corruption',
      body: 'Orwell\u2019s central thesis: without checks, ideology is no protection against tyranny. Any group that monopolises decisions will eventually use them for its own benefit, and will produce the language to justify doing so.',
    },
    {
      title: 'Language as a tool of control',
      body: "Squealer's work — rewriting commandments, inventing enemies, 'adjusting' statistics — is the novel's deepest warning. Orwell saw clearly that dictatorships live and die by their grip on language.",
    },
    {
      title: 'Betrayal of revolution',
      body: 'The animals genuinely overthrow their oppressor. The tragedy is not that revolution fails to begin but that it is hijacked by people who learned only the mechanics and none of the principles.',
    },
    {
      title: 'Class and labour',
      body: 'The animals do the work; the pigs take the reward. Orwell insists that working-class loyalty cannot survive forever when it is exploited without limit, and the final chapters trace Boxer\u2019s slow, disposable death.',
    },
    {
      title: 'History and memory',
      body: 'Squealer keeps rewriting the past, and the animals slowly forget what life used to be. Orwell treats the control of memory as the deepest form of totalitarian power, an argument he would return to in 1984.',
    },
  ],
  historicalContext: [
    'Animal Farm was written between 1943 and 1944 and published in August 1945, three months after the end of the Second World War in Europe. Britain and the Soviet Union had been allies against Nazi Germany, and Orwell had enormous difficulty finding a publisher willing to risk offending Stalin. The novella was rejected by multiple publishers, including T.S. Eliot at Faber.',
    "Orwell was a committed democratic socialist who had fought with a left-wing militia against Franco in the Spanish Civil War. His first-hand experience of Communist betrayal during that war convinced him that Stalin's Soviet Union was a grotesque parody of socialist ideals, and Animal Farm was his attempt to say so in a form everyone could understand.",
    "The allegory tracks the Russian Revolution of 1917 in close detail: Old Major is Marx/Lenin, Napoleon is Stalin, Snowball is Trotsky, the Battle of the Cowshed is the Russian Civil War, the windmill controversy is industrialisation, and the executions after Snowball's expulsion are the Great Purges of the 1930s.",
    "Orwell wrote that his aim was 'to fuse political purpose and artistic purpose into one whole'. Animal Farm is sometimes treated as a children's book because of its fable form, but Orwell insisted on its seriousness and it remains one of the twentieth century's most influential political texts.",
  ],
  quotations: [
    {
      quote: '"All animals are equal."',
      who: 'Seven Commandments — Chapter 2',
      analysis:
        'The founding principle of the revolution. The novel\u2019s entire tragic movement is the betrayal of this line.',
    },
    {
      quote: '"All animals are equal, but some animals are more equal than others."',
      who: 'Final commandment — Chapter 10',
      analysis: 'The book\u2019s most famous line. The revolution has devoured itself.',
    },
    {
      quote: '"I will work harder."',
      who: 'Boxer — repeated',
      analysis:
        'The working class\u2019s unshakeable faith, used against itself until Boxer is worked literally to death.',
    },
    {
      quote: '"Napoleon is always right."',
      who: 'Boxer — Chapter 5',
      analysis:
        'The dangerous loyalty that allows a dictator to consolidate power without challenge.',
    },
    {
      quote: '"Four legs good, two legs bad."',
      who: 'The sheep — Chapter 3',
      analysis:
        'The simplified slogan that replaces debate. Orwell\u2019s warning about the death of nuance.',
    },
    {
      quote:
        '"The creatures outside looked from pig to man, and from man to pig, and from pig to man again."',
      who: 'Narrator — final chapter',
      analysis:
        'The shattering closing image. Revolution has produced a mirror of the regime it replaced.',
    },
    {
      quote: '"Comrade Napoleon... is a terrible and magnificent boar."',
      who: "Minimus's poem — Chapter 8",
      analysis:
        'Satirises the personality cults that real dictatorships build around their leaders.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'af-1',
    question: 'Who represents Karl Marx/Lenin in the allegory?',
    type: 'multiple-choice',
    options: ['Napoleon', 'Snowball', 'Old Major', 'Squealer'],
    correctIndex: 2,
    explanation:
      'Old Major is the prize boar whose vision of revolution inspires the animals. He represents Marx and Lenin: a visionary theorist who dies before seeing how the revolution actually unfolds.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'af-2',
    question: 'Which pig represents Stalin?',
    type: 'multiple-choice',
    options: ['Snowball', 'Old Major', 'Napoleon', 'Squealer'],
    correctIndex: 2,
    explanation:
      'Napoleon represents Stalin: patient, brutal, and allergic to debate. He uses force (the dogs) rather than argument to consolidate power.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'af-3',
    question: "What is Boxer's motto?",
    type: 'multiple-choice',
    options: [
      '"All animals are equal"',
      '"I will work harder"',
      '"Four legs good, two legs bad"',
      '"Long live Animal Farm"',
    ],
    correctIndex: 1,
    explanation:
      '"I will work harder" is Boxer\'s response to every problem. It represents the working class\'s unshakeable faith and loyalty, which the pigs exploit ruthlessly until Boxer is literally worked to death.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'af-4',
    question: 'What is the original Seventh Commandment?',
    type: 'multiple-choice',
    options: [
      '"All animals are free"',
      '"No animal shall kill"',
      '"All animals are equal"',
      '"Work is freedom"',
    ],
    correctIndex: 2,
    explanation:
      '"All animals are equal" is the founding principle of the revolution. The novel\'s entire tragic arc is the betrayal of this commandment, which is eventually changed to include "but some animals are more equal than others."',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'af-5',
    question: "What song inspires the animals' revolution?",
    type: 'multiple-choice',
    options: ['"The Internationale"', '"Beasts of England"', '"Animal Anthem"', '"Freedom Song"'],
    correctIndex: 1,
    explanation:
      '"Beasts of England" is the revolutionary song taught by Old Major. It represents the Internationale and the ideals of revolution. Later, Napoleon bans it once the revolution no longer serves its original purpose.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'af-6',
    question: 'What happens to Boxer at the end?',
    type: 'multiple-choice',
    options: [
      'He retires happily',
      'He is sold to the knacker (horse slaughterer) to pay for whisky',
      'He escapes the farm',
      'He becomes a leader',
    ],
    correctIndex: 1,
    explanation:
      'Boxer is sold to the knacker when he can no longer work. Squealer claims he was taken to a vet, but the van reads "Horse Slaughterer." Napoleon uses the money to buy whisky. This is Orwell\'s most ruthless moment in the book.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'af-7',
    question: 'What role does Squealer play?',
    type: 'multiple-choice',
    options: [
      "He is the farm's defender",
      'He is the propaganda apparatus who can "turn black into white"',
      "He is Napoleon's bodyguard",
      "He is the farm's historian",
    ],
    correctIndex: 1,
    explanation:
      'Squealer represents Pravda (Soviet state propaganda). He can "turn black into white" through smooth rhetoric, rewriting history and manipulating language to justify Napoleon\'s every action.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'af-8',
    question: 'What is the final commandment on the barn wall?',
    type: 'multiple-choice',
    options: [
      '"All animals are free"',
      '"Long live Napoleon"',
      '"All animals are equal, but some animals are more equal than others"',
      '"Work harder"',
    ],
    correctIndex: 2,
    explanation:
      "This is the novel's most famous line. The original commandments have all been erased and replaced with this single, devastating paradox that encapsulates the complete betrayal of the revolution.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'af-9',
    question: 'How does Napoleon drive Snowball from the farm?',
    type: 'multiple-choice',
    options: [
      'He wins a democratic vote',
      'He uses the dogs he secretly raised as enforcers to chase Snowball away',
      'He poisons Snowball',
      'Snowball leaves voluntarily',
    ],
    correctIndex: 1,
    explanation:
      "Napoleon secretly raises a litter of puppies as his personal enforcers (representing the secret police). He uses them to chase Snowball from the farm, ending all debate and establishing his dictatorship. This mirrors Stalin's purging of Trotsky.",
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'af-10',
    question: 'What does the sheep\'s chant "Four legs good, two legs bad" represent?',
    type: 'multiple-choice',
    options: [
      'A genuine political principle',
      'A simplified slogan that replaces independent thought and kills nuance',
      'A farm rule',
      'A counting game',
    ],
    correctIndex: 1,
    explanation:
      'The sheep\'s mindless chant represents how totalitarian regimes reduce complex ideas to simple slogans, drowning out independent thought. When it changes to "Four legs good, two legs better," the corruption is complete.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'af-11',
    question: 'What is the allegorical significance of the windmill?',
    type: 'multiple-choice',
    options: [
      'It represents renewable energy',
      "It represents Stalin's industrialisation programmes, which exploited workers for questionable benefit",
      'It is just a farm building',
      'It represents democracy',
    ],
    correctIndex: 1,
    explanation:
      "The windmill represents Soviet industrialisation under Stalin's Five Year Plans. The animals work themselves to exhaustion building it, yet the benefits go entirely to the pigs. The repeated destruction and rebuilding mirrors the waste and human cost of forced industrialisation.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'af-12',
    question: 'What does Benjamin the donkey represent?',
    type: 'multiple-choice',
    options: [
      'The loyal worker',
      'The weary intellectual who sees everything clearly but refuses to act',
      'The revolutionary leader',
      'The optimistic youth',
    ],
    correctIndex: 1,
    explanation:
      'Benjamin represents the cynical intellectual who understands exactly what is happening but believes nothing can stop it. His refusal to speak up makes him complicit in the tragedy, and Orwell uses him to critique political apathy.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'af-13',
    question: "How does Squealer rewrite history after Snowball's expulsion?",
    type: 'multiple-choice',
    options: [
      'He does not mention Snowball',
      'He gradually transforms Snowball from a hero of the Battle of the Cowshed into a traitor and scapegoat',
      'He tells the truth',
      'He praises Snowball',
    ],
    correctIndex: 1,
    explanation:
      "Squealer gradually rewrites history so that Snowball, once the hero of the Battle of the Cowshed, becomes a traitor who was secretly working for the farmer all along. This mirrors Stalin's erasure of Trotsky from Soviet history.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'af-14',
    question: 'What does the closing scene — pigs indistinguishable from humans — represent?',
    type: 'multiple-choice',
    options: [
      'The animals need glasses',
      'The revolution has produced a mirror image of the regime it overthrew',
      'The pigs have always been human',
      'It is a happy ending',
    ],
    correctIndex: 1,
    explanation:
      '"The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which." The revolutionaries have become indistinguishable from the oppressors they replaced.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'af-15',
    question: 'Why did Orwell have difficulty getting Animal Farm published?',
    type: 'multiple-choice',
    options: [
      'It was too long',
      "Publishers feared offending the Soviet Union, which was Britain's wartime ally",
      'It was poorly written',
      'The paper shortage',
    ],
    correctIndex: 1,
    explanation:
      'Orwell wrote Animal Farm in 1943-44 when Britain and the Soviet Union were allies against Nazi Germany. Publishers, including T.S. Eliot at Faber, rejected it because they feared offending Stalin during the war.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'af-16',
    question: 'What historical event does the Battle of the Cowshed represent?',
    type: 'multiple-choice',
    options: ['World War I', 'The Russian Civil War', 'World War II', 'The French Revolution'],
    correctIndex: 1,
    explanation:
      "The Battle of the Cowshed, where the animals repel Mr Jones's attempt to retake the farm, represents the Russian Civil War (1917-22), in which the Bolsheviks fought off counter-revolutionary forces and foreign intervention.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'af-17',
    question: 'How does Orwell use the fable form to make his political argument more effective?',
    type: 'multiple-choice',
    options: [
      'Fables are just for children',
      'The simplicity and accessibility of the animal fable makes the critique of totalitarianism universal and impossible to ignore',
      'The form weakens the argument',
      'Orwell chose it randomly',
    ],
    correctIndex: 1,
    explanation:
      'The fable form makes a devastating political argument accessible to everyone. The simplicity of animals on a farm strips away the complexity that regimes use to justify themselves, making the mechanisms of tyranny unmistakably clear.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'af-18',
    question: 'What does Orwell suggest about the relationship between language and power?',
    type: 'multiple-choice',
    options: [
      'Language is neutral',
      'Control of language is the deepest form of totalitarian power — whoever controls words controls reality',
      'Language does not affect politics',
      'Only physical force matters',
    ],
    correctIndex: 1,
    explanation:
      'Orwell\'s deepest warning: Squealer\'s rewriting of commandments, invention of enemies, and "adjustment" of statistics show that dictatorships live and die by their grip on language. Whoever controls language controls memory, and whoever controls memory controls power.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'af-19',
    question:
      'How does Boxer\'s second motto, "Napoleon is always right," function in the allegory?',
    type: 'multiple-choice',
    options: [
      'It shows Boxer is intelligent',
      'It represents the dangerous unquestioning loyalty that allows a dictator to consolidate power without challenge',
      'It is a joke',
      'It shows Napoleon is wise',
    ],
    correctIndex: 1,
    explanation:
      '"Napoleon is always right" represents the unquestioning loyalty that enables dictatorship. Boxer\'s immense physical strength, combined with his refusal to question authority, makes him the ideal subject for exploitation. His faith is his fatal flaw.',
    topic: 'Characters',
    difficulty: 'grade-9',
  },
  {
    id: 'af-20',
    question: "What was Orwell's own political position, and how does it shape the novel?",
    type: 'multiple-choice',
    options: [
      'He was a communist',
      'He was a committed democratic socialist who opposed Stalinism, not socialism itself',
      'He was a conservative',
      'He was apolitical',
    ],
    correctIndex: 1,
    explanation:
      "Orwell was a committed democratic socialist who had fought against Franco in Spain. His first-hand experience of Communist betrayal convinced him Stalin's Soviet Union was a grotesque parody of socialist ideals. Animal Farm attacks Stalinism, not socialism — it mourns the revolution's betrayal, not its original aims.",
    topic: 'Context',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Power and Corruption',
    summary:
      "Orwell's central thesis: without checks, any group that monopolises decisions will use them for its own benefit.",
    keyPoints: [
      'Napoleon gradually accumulates all power',
      'The dogs represent the secret police',
      "The commandments are rewritten to justify the pigs' privilege",
      'Power corrupts gradually — the pigs move into the farmhouse by degrees',
      '"All animals are equal, but some animals are more equal than others"',
    ],
  },
  {
    topic: 'Language as Control',
    summary: "Squealer's propaganda shows how language can be weaponised to control reality.",
    keyPoints: [
      'Squealer can "turn black into white"',
      'The commandments are altered overnight',
      'Snowball is rewritten from hero to traitor',
      '"Four legs good, two legs bad" replaces independent thought',
      'Orwell saw language control as the deepest form of totalitarian power',
    ],
  },
  {
    topic: 'Betrayal of Revolution',
    summary: 'The tragedy is not that revolution fails to begin but that it is hijacked.',
    keyPoints: [
      "Old Major's vision is decent and inspiring",
      'Napoleon learns only the mechanics, not the principles',
      'The original commandments are systematically betrayed',
      "Boxer's loyal labour is exploited and discarded",
      'The final scene shows pigs indistinguishable from the humans they overthrew',
    ],
  },
  {
    topic: 'The Russian Revolution Allegory',
    summary: 'The novella tracks Soviet history in close detail.',
    keyPoints: [
      'Old Major = Marx/Lenin; Napoleon = Stalin; Snowball = Trotsky',
      'Battle of the Cowshed = Russian Civil War',
      'The windmill = industrialisation (Five Year Plans)',
      'The executions = Great Purges of the 1930s',
      'The final card game = the Tehran Conference',
    ],
  },
  {
    topic: 'Class and Labour',
    summary: 'The animals do the work; the pigs take the reward.',
    keyPoints: [
      'Boxer represents the exploited working class',
      "His death — sold to the knacker — is the book's most ruthless moment",
      "The hens' rebellion is crushed (representing resistance to collectivisation)",
      "Benjamin's apathy represents intellectual passivity",
      'Orwell insists loyalty cannot survive unlimited exploitation',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Orwell present the theme of power and corruption in Animal Farm?',
  'How does Orwell use the character of Boxer to explore the exploitation of the working class?',
  'How does Orwell present language as a tool of control in Animal Farm?',
  'How does Orwell explore the betrayal of revolution in Animal Farm?',
  'How does Orwell use the fable form to convey his political message?',
]

export default async function AnimalFarmPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }
  const userBoardLabel = board ? (getBoardConfig(board)?.shortName ?? 'AQA') : 'AQA'

  return (
    <>
      <CourseJsonLd
        name="Animal Farm — Complete GCSE Study Guide"
        description="In-depth study guide for Animal Farm covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Animal Farm', url: 'https://theenglishhub.app/revision/texts/animal-farm' },
        ]}
      />
      <TextStudyHub
        textName="Animal Farm"
        textType="novella"
        examBoard={userBoardLabel}
        basePath="/revision/texts/animal-farm"
        subPages={[
          {
            id: 'chapters',
            href: '/revision/texts/animal-farm/chapters',
            icon: 'acts' as const,
            title: 'Chapter-by-Chapter',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/animal-farm/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/animal-farm/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/animal-farm/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/animal-farm/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/animal-farm/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'GCSE essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Orwell present the theme of power and corruption in Animal Farm?',
          'How does Orwell use the character of Boxer to explore exploitation of the working class?',
          'How does Orwell present language as a tool of control in Animal Farm?',
          'How does Orwell explore the betrayal of revolution in Animal Farm?',
          'How does Orwell use allegory to convey his political message?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Animal Farm"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>Rights notice:</strong> While <em>Animal Farm</em> entered UK public domain in 2021,
        the Orwell estate (AM Heath) actively manages educational use. Quotations on this page are
        short fair-dealing extracts; longer engagement should use a school-licensed edition. Short
        quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents
        Act 1988 (s.30) for criticism and review. Full text available from your school or local
        library.
      </p>
    </>
  )
}
