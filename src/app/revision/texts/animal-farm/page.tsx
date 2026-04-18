import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import { DeepDiveSection } from '../_components/deep-dive-section'
import TextStudyHub from '@/components/study/TextStudyHub'

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
      analysis: 'The founding principle of the revolution. The novel\u2019s entire tragic movement is the betrayal of this line.',
    },
    {
      quote: '"All animals are equal, but some animals are more equal than others."',
      who: 'Final commandment — Chapter 10',
      analysis: 'The book\u2019s most famous line. The revolution has devoured itself.',
    },
    {
      quote: '"I will work harder."',
      who: 'Boxer — repeated',
      analysis: 'The working class\u2019s unshakeable faith, used against itself until Boxer is worked literally to death.',
    },
    {
      quote: '"Napoleon is always right."',
      who: 'Boxer — Chapter 5',
      analysis: 'The dangerous loyalty that allows a dictator to consolidate power without challenge.',
    },
    {
      quote: '"Four legs good, two legs bad."',
      who: 'The sheep — Chapter 3',
      analysis: 'The simplified slogan that replaces debate. Orwell\u2019s warning about the death of nuance.',
    },
    {
      quote: '"The creatures outside looked from pig to man, and from man to pig, and from pig to man again."',
      who: 'Narrator — final chapter',
      analysis: 'The shattering closing image. Revolution has produced a mirror of the regime it replaced.',
    },
    {
      quote: '"Comrade Napoleon... is a terrible and magnificent boar."',
      who: 'Minimus\'s poem — Chapter 8',
      analysis: 'Satirises the personality cults that real dictatorships build around their leaders.',
    },
  ],
}

export default async function AnimalFarmPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <TextStudyHub
        textName="Animal Farm"
        textType="novella"
        examBoard="AQA"
        basePath="/revision/texts/animal-farm"
        subPages={[
          { id: 'chapters', href: '/revision/texts/animal-farm/chapters', icon: 'acts' as const, title: 'Chapter-by-Chapter', description: 'Key moments & quotes' },
          { id: 'characters', href: '/revision/texts/animal-farm/characters', icon: 'characters' as const, title: 'Characters', description: 'Full character guide' },
          { id: 'themes', href: '/revision/texts/animal-farm/themes', icon: 'themes' as const, title: 'Themes', description: 'Theme analysis' },
          { id: 'quotes', href: '/revision/texts/animal-farm/key-quotes', icon: 'quotes' as const, title: 'Key Quotes', description: 'Quotes with analysis' },
          { id: 'context', href: '/revision/texts/animal-farm/context', icon: 'context' as const, title: 'Context', description: 'Historical context' },
          { id: 'essays', href: '/revision/texts/animal-farm/essay-plans', icon: 'essays' as const, title: 'Essay Plans', description: 'GCSE essay plans' },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map(q => ({
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
        flashcards={data.quotations.slice(0, 8).map(q => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <DeepDiveSection
        links={[
          {
            href: '/revision/texts/animal-farm/chapters',
            icon: 'acts',
            title: 'Chapter-by-Chapter Analysis',
            description: 'Detailed breakdown of each chapter with key moments, quotes and analysis.',
          },
          {
            href: '/revision/texts/animal-farm/characters',
            icon: 'characters',
            title: 'Character Studies',
            description: 'In-depth profiles of every major character with quotes and exam tips.',
          },
          {
            href: '/revision/texts/animal-farm/themes',
            icon: 'themes',
            title: 'Theme Explorer',
            description: 'Comprehensive analysis of every key theme with supporting evidence.',
          },
          {
            href: '/revision/texts/animal-farm/key-quotes',
            icon: 'quotes',
            title: 'Key Quotes Bank',
            description: 'Essential quotations organised by theme and character with analysis.',
          },
          {
            href: '/revision/texts/animal-farm/context',
            icon: 'context',
            title: 'Historical Context',
            description: 'The Russian Revolution, Stalin, and Orwell\'s democratic socialism.',
          },
          {
            href: '/revision/texts/animal-farm/essay-plans',
            icon: 'essays',
            title: 'Essay Plans',
            description: 'Ready-made GCSE essay plans with thesis statements, paragraphs and evidence.',
          },
        ]}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </>
  )
}
