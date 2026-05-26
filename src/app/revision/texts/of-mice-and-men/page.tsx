import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Of Mice and Men revision guide - themes, characters, key quotes - The English Hub',
    description: 'Of Mice and Men IGCSE revision - Steinbeck',
  },
  title: 'Of Mice and Men revision guide - themes, characters, key quotes',
  description:
    "Of Mice and Men IGCSE revision - Steinbeck's novella with characters, themes, context and key quotes. Aligned to Pearson Edexcel IGCSE Literature 4ET1.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/of-mice-and-men',
  },
}

const data: TextGuideData = {
  title: 'Of Mice and Men',
  author: 'John Steinbeck',
  year: 'published 1937',
  category: 'Novella',
  badge: 'Edexcel IGCSE',
  intro:
    'A Depression-era novella about two displaced ranch workers chasing an impossible dream of owning their own piece of land. Steinbeck strips the American Dream bare and exposes the loneliness, prejudice and powerlessness at the heart of 1930s rural California.',
  quickInfo: {
    genre: 'Novella / Social realism',
    setting: 'Soledad, California, 1930s',
    length: '~30,000 words, 6 chapters',
    published: '1937',
  },
  plotSummary: [
    "The novella opens with George Milton and Lennie Small resting by a pool of the Salinas River. George is small, quick and sharp-featured; Lennie is a huge man with the mental age of a child and a compulsion to stroke soft things. They are migrant ranch workers on the way to a new job at a ranch near Soledad, having fled the town of Weed after Lennie was accused of attempted rape for touching a woman's dress. George makes Lennie rehearse their dream: one day they will own a small farm where Lennie can tend rabbits.",
    "At the ranch they meet the old swamper Candy and his ancient dog, the black stable hand Crooks, the aggressive son of the boss Curley, and Curley's flirtatious and isolated wife. Lennie attracts Curley's hostility almost immediately. Slim, the calm and respected mule driver, gives Lennie one of his new puppies. When Candy overhears George and Lennie discussing their dream, he offers his life savings to join them, and for the first time the dream feels genuinely within reach.",
    "Tension rises when Curley picks a fight with Lennie and Lennie, on George's order, crushes his hand. Later, in the stable, Lennie accidentally kills his puppy by stroking it too hard. Curley's wife finds him and invites him to stroke her soft hair. When she tries to pull away, Lennie panics and breaks her neck. Terrified, he flees back to the pool where the novella began.",
    "A lynch mob forms, led by the vengeful Curley. George reaches Lennie first, retells the dream of the farm one last time, and shoots him in the back of the head with Carlson's Luger to spare him a brutal death. The novella ends with George numbly walking away with Slim, the dream dead and his companion gone.",
  ],
  characters: [
    {
      name: 'George Milton',
      role: 'Protective, sharp-tongued migrant worker',
      body: 'George is small, clever and quick to anger, but his loyalty to Lennie defines him. He carries the dream as much for Lennie as for himself, and Steinbeck uses his final, unbearable choice to show how the Depression destroys even the most fiercely held friendships.',
    },
    {
      name: 'Lennie Small',
      role: 'Gentle, physically powerful, learning disabled',
      body: 'Lennie embodies innocence and vulnerability. His love of soft things foreshadows every tragedy in the book. Steinbeck presents him sympathetically to challenge the casual prejudice of 1930s America toward disability and to make his death genuinely devastating.',
    },
    {
      name: 'Candy',
      role: 'Aging one-handed swamper',
      body: "Candy fears becoming as disposable as his old dog. His desperation to buy into the dream exposes how ruthlessly capitalism discards those who can no longer work. His grief at the end mirrors George's and the reader's.",
    },
    {
      name: 'Crooks',
      role: 'Isolated black stable hand',
      body: 'Crooks is segregated from the other workers because of his race. Steinbeck uses him to expose the entrenched racism of the period and to show how prejudice corrodes the soul: Crooks briefly allows himself to hope, then crushes the hope when he is reminded of his place.',
    },
    {
      name: "Curley's Wife",
      role: 'Unnamed, lonely, trapped',
      body: "The only significant female character is never given a name, reducing her to her husband's property. At first she seems flirtatious and dangerous, but Steinbeck reveals her as a lost young woman whose dreams have also been crushed. Her death becomes the hinge of the tragedy.",
    },
    {
      name: 'Slim',
      role: "The ranch's moral compass",
      body: "Slim is described with almost religious authority. His approval matters on the ranch and his compassion at the close of the book ('You hadda, George') validates the terrible choice George makes and gives the reader somewhere to rest.",
    },
  ],
  themes: [
    {
      title: 'The American Dream',
      body: "Steinbeck systematically dismantles the myth of the self-made man. The dream of owning 'a little house and a couple of acres' is repeated like a prayer, but is crushed at the exact moment it seems achievable. The title itself, taken from Burns, warns that the plans of mice and men alike go awry.",
    },
    {
      title: 'Loneliness and isolation',
      body: "Nearly every character is alone in some way: Candy clings to his dog, Crooks clings to his books, Curley's wife clings to faded dreams of Hollywood. Soledad, the name of the nearest town, means 'solitude' in Spanish, turning the very landscape into a metaphor for the workers' isolation.",
    },
    {
      title: 'Power, prejudice and discrimination',
      body: "The novella is a catalogue of prejudice: racism against Crooks, sexism toward Curley's wife, ableism toward Lennie and ageism toward Candy. Steinbeck shows how a rigid social hierarchy turns vulnerable people into targets and how the powerless sometimes turn on each other to feel strong.",
    },
    {
      title: 'Friendship and companionship',
      body: "George and Lennie's bond is what sets them apart from 'the loneliest guys in the world'. Steinbeck treats their friendship as both sacred and fragile, showing that it cannot survive the economic and social pressures of the age. The last words of the book reduce that bond to a shared silence.",
    },
    {
      title: 'Nature and circularity',
      body: "The novella opens and closes at the same pool by the Salinas River, creating a circular structure. Nature is indifferent: a heron kills a water snake in both the opening and the closing chapter, foreshadowing and then sealing Lennie's fate.",
    },
  ],
  historicalContext: [
    'Steinbeck wrote Of Mice and Men in 1937, at the height of the Great Depression that began with the 1929 Wall Street Crash. Millions of Americans lost their jobs, homes and farms. In rural California, where Steinbeck grew up, tens of thousands of displaced workers drifted from ranch to ranch in search of any work that would feed them.',
    "The Dust Bowl of the 1930s drove waves of 'Okies' westward to California, creating a brutal surplus of cheap labour. Wages were low, workers were disposable and the promise of upward mobility that had defined American identity for a century felt like a cruel joke. Steinbeck, influenced by the socialist thinking of his day, used fiction to bear witness to these people.",
    "Segregation was still legal and widespread: Crooks sleeps in the harness room not by choice but by law and custom. Women had limited legal rights and even more limited economic ones, which helps explain why Curley's wife is trapped in a marriage she did not want. Attitudes to learning disability were harsh and uninformed, and people like Lennie were often institutionalised or exploited.",
    "Steinbeck's title quotes Robert Burns's poem 'To a Mouse', a fitting literary anchor for a book about small dreams crushed by enormous forces. The novella was adapted for the stage almost immediately and has been taught in schools across the English-speaking world ever since.",
  ],
  quotations: [
    {
      quote: '"Guys like us, that work on ranches, are the loneliest guys in the world."',
      who: 'George - Chapter 1',
      analysis:
        'Introduces the theme of isolation and immediately sets George and Lennie apart because they have each other.',
    },
    {
      quote: '"I got you to look after me, and you got me to look after you."',
      who: 'Lennie - Chapter 1',
      analysis:
        'Captures the childlike clarity of their bond. The mutual dependence is the emotional core of the book.',
    },
    {
      quote: '"A guy needs somebody - to be near him."',
      who: 'Crooks - Chapter 4',
      analysis:
        'Reveals the devastating loneliness of segregation and universalises it to all workers under capitalism.',
    },
    {
      quote: '"I could get along so easy if I didn\'t have you on my tail."',
      who: 'George - Chapter 1',
      analysis:
        'Shows the strain of caring for Lennie. Makes the final act even more heartbreaking because it is freely chosen.',
    },
    {
      quote: '"I get lonely. You can talk to people, but I can\'t talk to nobody."',
      who: "Curley's wife - Chapter 5",
      analysis:
        'Humanises her just before her death and reframes her as a victim rather than a threat.',
    },
    {
      quote: '"I ought to of shot that dog myself, George."',
      who: 'Candy - Chapter 3',
      analysis: 'Foreshadows the ending and teaches George the lesson he will act on at the pool.',
    },
    {
      quote: '"Tell about the rabbits, George."',
      who: 'Lennie - Chapter 6',
      analysis:
        "The repeated refrain of the dream. Its last appearance, seconds before Lennie's death, is the book's most devastating line.",
    },
    {
      quote: '"You hadda, George. I swear you hadda."',
      who: 'Slim - Chapter 6',
      analysis:
        "The respected moral voice of the ranch validates George's impossible choice and closes the novella with painful compassion.",
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'omm-1',
    question: "What is George and Lennie's shared dream?",
    type: 'multiple-choice',
    options: [
      'To become famous',
      'To own a small farm where Lennie can tend rabbits',
      'To move to the city',
      'To start a business',
    ],
    correctIndex: 1,
    explanation:
      'George and Lennie dream of owning "a little house and a couple of acres" where Lennie can tend rabbits. This dream represents the American Dream of independence, but Steinbeck shows it is ultimately unattainable.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'omm-2',
    question: 'Why did George and Lennie flee the town of Weed?',
    type: 'multiple-choice',
    options: [
      'They stole money',
      "Lennie was accused of assault for touching a woman's dress",
      'They were fired',
      'George got into a fight',
    ],
    correctIndex: 1,
    explanation:
      "Lennie was accused of attempted rape for touching a woman's dress in Weed. He was simply stroking the soft fabric, but his inability to let go terrified the woman. This foreshadows the tragic events at the ranch.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'omm-3',
    question: "What is Lennie's defining characteristic?",
    type: 'multiple-choice',
    options: [
      'He is very intelligent',
      'He is physically powerful but mentally childlike, with a compulsion to stroke soft things',
      'He is small and quick',
      'He is an experienced worker',
    ],
    correctIndex: 1,
    explanation:
      "Lennie is huge and physically powerful but has the mental age of a child. His compulsion to stroke soft things foreshadows every tragedy in the book - from the mouse to the puppy to Curley's wife's hair.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'omm-4',
    question: "What does Candy's dog symbolise?",
    type: 'multiple-choice',
    options: [
      'Loyalty',
      'The way capitalism discards those who are old or useless',
      'Friendship between humans and animals',
      'The beauty of nature',
    ],
    correctIndex: 1,
    explanation:
      "Candy's old, sick dog is shot by Carlson because it is no longer useful. This mirrors Candy's own fear of becoming disposable and foreshadows George's final act with Lennie - it is better to be killed by a friend than by a stranger.",
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'omm-5',
    question: 'Why is Crooks segregated from the other ranch workers?',
    type: 'multiple-choice',
    options: [
      'He prefers to be alone',
      'Because of his race - he is Black and segregation was enforced',
      'He has a contagious illness',
      'He is a troublemaker',
    ],
    correctIndex: 1,
    explanation:
      'Crooks sleeps in the harness room because of racial segregation. Steinbeck uses him to expose the entrenched racism of 1930s America and to show how prejudice corrodes the soul.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'omm-6',
    question: "How does Curley's wife die?",
    type: 'multiple-choice',
    options: [
      'She drowns',
      'She falls from a horse',
      'Lennie accidentally breaks her neck while stroking her hair',
      'She is killed by Curley',
    ],
    correctIndex: 2,
    explanation:
      "Curley's wife invites Lennie to stroke her soft hair. When she tries to pull away, Lennie panics and breaks her neck. The tragedy is that both characters are victims: she of isolation, he of his own uncontrollable strength.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'omm-7',
    question: 'Who shoots Lennie at the end of the novella?',
    type: 'multiple-choice',
    options: ['Curley', 'Slim', 'Carlson', 'George'],
    correctIndex: 3,
    explanation:
      'George shoots Lennie himself, retelling the dream of the farm one last time, to spare him a brutal death at the hands of the lynch mob. It is an act of mercy that destroys George.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'omm-8',
    question: 'What does "Soledad" (the nearby town) mean in Spanish?',
    type: 'multiple-choice',
    options: ['Happiness', 'Freedom', 'Solitude', 'Strength'],
    correctIndex: 2,
    explanation:
      'Soledad means "solitude" in Spanish. Steinbeck turns the very landscape into a metaphor for the workers\' isolation, reinforcing the theme that loneliness pervades every character\'s life.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'omm-9',
    question:
      'What is the significance of the novella opening and closing at the same pool by the Salinas River?',
    type: 'multiple-choice',
    options: [
      'It is a coincidence',
      'The circular structure suggests the dream was always doomed and the cycle of migrant poverty continues',
      'Steinbeck ran out of settings',
      'It symbolises hope',
    ],
    correctIndex: 1,
    explanation:
      "The circular structure creates a sense of inevitability. Nature is indifferent: a heron kills a water snake in both the opening and closing chapters, foreshadowing and then sealing Lennie's fate. The dream returns to where it started - nowhere.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'omm-10',
    question: 'What does Candy mean when he says "I ought to of shot that dog myself"?',
    type: 'multiple-choice',
    options: [
      'He regrets not taking responsibility himself',
      "He foreshadows George's decision to shoot Lennie rather than let strangers do it",
      'He is angry at Carlson',
      'He wants a new dog',
    ],
    correctIndex: 1,
    explanation:
      "Candy's regret about letting a stranger kill his dog directly foreshadows and teaches George the lesson he will act on at the pool. It is better to end a loved one's suffering yourself than to let a hostile world do it cruelly.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'omm-11',
    question: "Why is Curley's wife never given a name?",
    type: 'multiple-choice',
    options: [
      'Steinbeck forgot',
      "It reduces her to her husband's property, reflecting the sexism of the period",
      'She is not important to the plot',
      'She refuses to share her name',
    ],
    correctIndex: 1,
    explanation:
      'The only significant female character is never given a name, reducing her to "Curley\'s wife" - his property. This reflects the sexism of 1930s America. Steinbeck later reveals her as a lost young woman whose own dreams have been crushed.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'omm-12',
    question: "What is Slim's role in the novella?",
    type: 'multiple-choice',
    options: [
      'He is the villain',
      "He is the ranch's moral compass, described with almost religious authority",
      'He is a minor character',
      "He is George's enemy",
    ],
    correctIndex: 1,
    explanation:
      'Slim is described with almost religious authority - the "prince of the ranch." His approval matters, and his final compassion ("You hadda, George. I swear you hadda.") validates George\'s impossible choice and gives the reader somewhere to rest.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'omm-13',
    question: "How does Crooks's brief moment of hope reflect the novella's themes?",
    type: 'multiple-choice',
    options: [
      'He remains hopeful throughout',
      'He briefly allows himself to dream of joining the farm but crushes the hope when reminded of his place by racism',
      'He never shows any emotion',
      'He is consistently optimistic',
    ],
    correctIndex: 1,
    explanation:
      "Crooks briefly imagines joining George and Lennie's dream, but when Curley's wife threatens him with racist violence, he withdraws immediately: \"I didn' mean it. Jus' foolin'.\" Steinbeck shows how prejudice corrodes hope itself.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'omm-14',
    question: 'What is the significance of the title Of Mice and Men?',
    type: 'multiple-choice',
    options: [
      'It is about mice on a farm',
      "It quotes Robert Burns's poem about how the best-laid plans go wrong, framing the novella's theme",
      'It was chosen randomly',
      'It refers to George and Lennie specifically',
    ],
    correctIndex: 1,
    explanation:
      'The title quotes Robert Burns\'s poem "To a Mouse": "The best laid schemes o\' mice an\' men / Gang aft agley." It warns that even the most carefully held dreams can be destroyed by forces beyond our control.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'omm-15',
    question: 'How does Steinbeck present the American Dream in the novella?',
    type: 'multiple-choice',
    options: [
      'As achievable for everyone',
      'As a cruel illusion that is systematically dismantled at the exact moment it seems achievable',
      'As irrelevant to the characters',
      'As already achieved',
    ],
    correctIndex: 1,
    explanation:
      'Steinbeck systematically dismantles the myth of the self-made man. The dream of the farm is repeated like a prayer but is crushed at the exact moment it seems achievable (when Candy offers his savings). The novella argues the American Dream is an illusion for the powerless.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'omm-16',
    question:
      'What does "A guy needs somebody - to be near him" reveal about the novella\'s world?',
    type: 'multiple-choice',
    options: [
      'Crooks is clingy',
      'It reveals the devastating loneliness of segregation and universalises it to all workers under capitalism',
      'It is a casual remark',
      'Crooks wants a pet',
    ],
    correctIndex: 1,
    explanation:
      "Crooks's desperate statement reveals the devastating loneliness of racial segregation and extends it to all workers under capitalism. Nearly every character in the novella is alone - Steinbeck shows loneliness as a systemic condition, not a personal failing.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'omm-17',
    question: 'How does Steinbeck use the natural world in the novella?',
    type: 'multiple-choice',
    options: [
      'Nature is always beautiful',
      'Nature is indifferent to human suffering - herons eat snakes, the cycle continues regardless',
      'Nature helps the characters',
      'Nature is not mentioned',
    ],
    correctIndex: 1,
    explanation:
      "Nature is portrayed as indifferent: a heron kills a water snake in both the opening and closing scenes. The natural cycle continues regardless of human tragedy, suggesting the workers' suffering is invisible to the larger world.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'omm-18',
    question:
      "What is the effect of Steinbeck writing Curley's wife's death scene with gentleness?",
    type: 'multiple-choice',
    options: [
      'It is sloppy writing',
      'In death she finally appears peaceful and beautiful, humanising her and making the reader mourn both her and the dream simultaneously',
      'It undermines the tragedy',
      'It shows she deserved sympathy',
    ],
    correctIndex: 1,
    explanation:
      'After her death, Steinbeck describes Curley\'s wife as finally peaceful and pretty, the "meanness and the plannings and the discontent" gone from her face. This tender treatment humanises her at the last moment and makes the reader mourn both her wasted life and the death of the dream.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'omm-19',
    question: 'What does Slim\'s final line "You hadda, George" do for the reader?',
    type: 'multiple-choice',
    options: [
      'It is a throwaway remark',
      "The moral authority of the ranch validates George's impossible choice and allows the reader to accept it",
      'It condemns George',
      'It changes the subject',
    ],
    correctIndex: 1,
    explanation:
      "Slim, the respected moral voice of the ranch, validates George's terrible choice with compassion. His approval allows both George and the reader to believe the act was merciful rather than murderous, providing the novella's painful but necessary closure.",
    topic: 'Characters',
    difficulty: 'grade-9',
  },
  {
    id: 'omm-20',
    question: 'What was the Great Depression, and how does it shape the novella?',
    type: 'multiple-choice',
    options: [
      'A period of artistic decline',
      'An economic catastrophe that began in 1929, causing mass unemployment, displacement, and the collapse of the American Dream',
      'A European war',
      'A natural disaster',
    ],
    correctIndex: 1,
    explanation:
      "The Great Depression began with the 1929 Wall Street Crash and caused millions to lose their jobs and homes. In rural California, displaced workers drifted from ranch to ranch. This economic devastation shapes every aspect of the novella's world.",
    topic: 'Context',
    difficulty: 'foundation',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'The American Dream',
    summary: 'Steinbeck systematically dismantles the myth that hard work guarantees success.',
    keyPoints: [
      "George and Lennie's farm dream is repeated like a prayer",
      'The dream is crushed at the moment it seems achievable',
      'The title (from Burns) warns that plans go awry',
      "Every character has a broken dream: Curley's wife wanted Hollywood, Crooks wanted equality",
      'Steinbeck argues the Dream is an illusion for the powerless',
    ],
  },
  {
    topic: 'Loneliness and Isolation',
    summary:
      'Nearly every character is alone in some way, and Steinbeck shows loneliness as systemic, not personal.',
    keyPoints: [
      '"Guys like us, that work on ranches, are the loneliest guys in the world"',
      'Crooks: segregated by race',
      "Curley's wife: isolated by gender and marriage",
      'Candy: clinging to his dog, then to the dream',
      'Soledad means "solitude" - the landscape itself is lonely',
    ],
  },
  {
    topic: 'Power, Prejudice and Discrimination',
    summary: 'The novella catalogues racism, sexism, ableism, and ageism in 1930s America.',
    keyPoints: [
      'Crooks is segregated because of his race',
      "Curley's wife is never given a name",
      'Lennie is exploited and feared because of his disability',
      'Candy fears being discarded like his old dog',
      'The powerless sometimes turn on each other to feel strong',
    ],
  },
  {
    topic: 'Friendship and Companionship',
    summary: "George and Lennie's bond is what makes them different from every other worker.",
    keyPoints: [
      '"I got you to look after me, and you got me to look after you"',
      'Their friendship is both sacred and fragile',
      'It cannot survive the economic and social pressures',
      "Candy's dog foreshadows: it is better to be killed by a friend",
      'Slim\'s validation: "You hadda, George"',
    ],
  },
  {
    topic: 'Circular Structure and Nature',
    summary:
      'The novella opens and closes at the same pool, suggesting the dream was always doomed.',
    keyPoints: [
      'The heron killing the water snake appears in both opening and closing',
      'Nature is indifferent to human suffering',
      'The circular structure creates a sense of inevitability',
      'Steinbeck uses the natural world to comment on human futility',
      "The last words reduce George and Lennie's bond to silence",
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Steinbeck present the theme of loneliness in Of Mice and Men?',
  'How does Steinbeck use the character of Crooks to explore racial prejudice?',
  'How does Steinbeck present the American Dream as an illusion?',
  'How does Steinbeck present the relationship between George and Lennie?',
  "How does Steinbeck use Curley's wife to explore the themes of gender and isolation?",
]

export default async function OfMiceAndMenPage() {
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
      <LearningResourceJsonLd
        name="Of Mice and Men - Complete GCSE Study Guide"
        description="In-depth study guide for Of Mice and Men covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
        educationalLevel="IGCSE"
        learningResourceType="Study guide"
        about="Of Mice and Men"
        url="https://theenglishhub.app/revision/texts/of-mice-and-men"
      />
      <CourseJsonLd
        name="Of Mice and Men - Complete GCSE Study Guide"
        description="In-depth study guide for Of Mice and Men covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Of Mice and Men',
            url: 'https://theenglishhub.app/revision/texts/of-mice-and-men',
          },
        ]}
      />
      <TextStudyHub
        textName="Of Mice and Men"
        textType="novella"
        examBoard={userBoardLabel}
        basePath="/revision/texts/of-mice-and-men"
        subPages={[
          {
            id: 'characters',
            href: '/revision/texts/of-mice-and-men/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/of-mice-and-men/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/of-mice-and-men/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/of-mice-and-men/context',
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
          'How does Steinbeck present the theme of loneliness in Of Mice and Men?',
          'How does Steinbeck use the character of Crooks to explore racial prejudice?',
          'How does Steinbeck present the American Dream as an illusion?',
          'How does Steinbeck present the relationship between George and Lennie?',
          "How does Steinbeck use Curley's wife to explore the theme of gender?",
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Of Mice and Men"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and
        Patents Act 1988 for criticism and review. Full text available from your school or local
        library.
      </p>
    </>
  )
}
