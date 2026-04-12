import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

export const metadata: Metadata = {
  title: 'Of Mice and Men — Study Guide | The English Hub',
  description:
    'In-depth study guide for Of Mice and Men by John Steinbeck: plot summary, characters, themes, historical context and key quotations for Edexcel IGCSE.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/of-mice-and-men',
  },
}

const data: TextGuideData = {
  title: 'Of Mice and Men',
  author: 'John Steinbeck',
  year: 'published 1937',
  category: 'Novella',
  badge: 'Edexcel IGCSE 4ET1',
  intro:
    "A Depression-era novella about two displaced ranch workers chasing an impossible dream of owning their own piece of land. Steinbeck strips the American Dream bare and exposes the loneliness, prejudice and powerlessness at the heart of 1930s rural California.",
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
      body: "George is small, clever and quick to anger, but his loyalty to Lennie defines him. He carries the dream as much for Lennie as for himself, and Steinbeck uses his final, unbearable choice to show how the Depression destroys even the most fiercely held friendships.",
    },
    {
      name: 'Lennie Small',
      role: 'Gentle, physically powerful, learning disabled',
      body: "Lennie embodies innocence and vulnerability. His love of soft things foreshadows every tragedy in the book. Steinbeck presents him sympathetically to challenge the casual prejudice of 1930s America toward disability and to make his death genuinely devastating.",
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
      who: 'George — Chapter 1',
      analysis:
        'Introduces the theme of isolation and immediately sets George and Lennie apart because they have each other.',
    },
    {
      quote: '"I got you to look after me, and you got me to look after you."',
      who: 'Lennie — Chapter 1',
      analysis:
        'Captures the childlike clarity of their bond. The mutual dependence is the emotional core of the book.',
    },
    {
      quote: '"A guy needs somebody — to be near him."',
      who: 'Crooks — Chapter 4',
      analysis:
        'Reveals the devastating loneliness of segregation and universalises it to all workers under capitalism.',
    },
    {
      quote: '"I could get along so easy if I didn\'t have you on my tail."',
      who: 'George — Chapter 1',
      analysis:
        'Shows the strain of caring for Lennie. Makes the final act even more heartbreaking because it is freely chosen.',
    },
    {
      quote: '"I get lonely. You can talk to people, but I can\'t talk to nobody."',
      who: "Curley's wife — Chapter 5",
      analysis:
        'Humanises her just before her death and reframes her as a victim rather than a threat.',
    },
    {
      quote: '"I ought to of shot that dog myself, George."',
      who: 'Candy — Chapter 3',
      analysis:
        'Foreshadows the ending and teaches George the lesson he will act on at the pool.',
    },
    {
      quote: '"Tell about the rabbits, George."',
      who: 'Lennie — Chapter 6',
      analysis:
        "The repeated refrain of the dream. Its last appearance, seconds before Lennie's death, is the book's most devastating line.",
    },
    {
      quote: '"You hadda, George. I swear you hadda."',
      who: 'Slim — Chapter 6',
      analysis:
        "The respected moral voice of the ranch validates George's impossible choice and closes the novella with painful compassion.",
    },
  ],
}

export default async function OfMiceAndMenPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
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
