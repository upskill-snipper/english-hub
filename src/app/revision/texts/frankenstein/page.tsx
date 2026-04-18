import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import { DeepDiveSection } from '../_components/deep-dive-section'
import TextStudyHub from '@/components/study/TextStudyHub'

export const metadata: Metadata = {
  title: 'Frankenstein — Study Guide | The English Hub',
  description:
    'In-depth study guide for Frankenstein by Mary Shelley: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/frankenstein',
  },
}

const data: TextGuideData = {
  title: 'Frankenstein',
  author: 'Mary Shelley',
  year: '1818',
  category: 'Novel',
  badge: 'AQA / OCR / Eduqas / Edexcel iGCSE',
  intro:
    'Mary Shelley\'s Gothic masterpiece tells the story of Victor Frankenstein, an ambitious young scientist who creates a living creature from dead matter and then abandons it in horror. The novel explores the consequences of unchecked ambition, the dangers of playing God, and what it means to be human. Written when Shelley was just eighteen, Frankenstein remains one of the most influential novels in English literature and is widely considered the first work of science fiction.',
  quickInfo: {
    genre: 'Gothic novel / Science fiction',
    setting: 'Geneva, Ingolstadt, the Arctic, late 18th century',
    length: '~75,000 words, 3 volumes / 23 chapters',
    published: '1818 (revised 1831)',
  },
  plotSummary: [
    'The novel opens with Captain Robert Walton writing letters to his sister from a ship trapped in Arctic ice. He rescues a half-frozen stranger, Victor Frankenstein, who begins to tell his extraordinary story. Victor grew up in a loving Geneva family, developed a passion for natural philosophy, and at the University of Ingolstadt became obsessed with the secret of life itself. Working alone in his laboratory, he assembles a creature from body parts and brings it to life.',

    'The moment the Creature opens its eyes, Victor is revolted by what he has made and flees. The Creature disappears. Victor falls ill and is nursed back to health by his friend Henry Clerval. Months later, Victor learns that his younger brother William has been murdered. He sees the Creature near the scene and knows it is guilty, but an innocent family servant, Justine Moritz, is convicted and executed for the crime.',

    'Victor retreats to the Alps, where the Creature finds him and tells his own story. After being abandoned, the Creature wandered alone, learning to speak and read by secretly observing a cottager family, the De Laceys. When he finally revealed himself to them, they were horrified and drove him away. Rejected by everyone, the Creature turned to violence and murdered William. He demands that Victor create a female companion to end his loneliness.',

    'Victor reluctantly begins work on a second creature but, fearing a race of monsters, destroys it before the Creature\'s eyes. The Creature vows revenge: "I will be with you on your wedding night." He kills Clerval, and on Victor\'s wedding night he murders Elizabeth. Victor\'s father dies of grief. Victor pursues the Creature to the Arctic, where Walton finds him. Victor dies on Walton\'s ship. The Creature appears, mourns his creator, and vows to end his own life on a funeral pyre.',
  ],
  characters: [
    {
      name: 'Victor Frankenstein',
      role: 'Scientist and narrator',
      body: 'Victor is brilliant, ambitious and fatally irresponsible. He creates life but refuses to take responsibility for his creation, setting in motion a chain of tragedy. Shelley uses him to explore the dangers of science without ethics, ambition without compassion, and the human tendency to play God without accepting the consequences.',
    },
    {
      name: 'The Creature',
      role: 'Victor\'s creation',
      body: 'Born innocent, the Creature is driven to violence by rejection and isolation. He is articulate, emotional and deeply human in his desires for companionship and acceptance. Shelley makes the reader sympathise with him as much as fear him, challenging assumptions about who the real monster is.',
    },
    {
      name: 'Robert Walton',
      role: 'Arctic explorer and frame narrator',
      body: 'Walton mirrors Victor in his dangerous ambition and isolation. His letters frame the entire novel, and Victor\'s story serves as a warning that Walton ultimately heeds, turning his ship back from the ice.',
    },
    {
      name: 'Elizabeth Lavenza',
      role: 'Victor\'s adopted sister and wife',
      body: 'Elizabeth is gentle, loyal and ultimately a victim of Victor\'s obsession. Her murder on their wedding night is the culmination of Victor\'s failure to confront the consequences of his actions.',
    },
    {
      name: 'Henry Clerval',
      role: 'Victor\'s closest friend',
      body: 'Clerval represents the warmth, creativity and human connection that Victor sacrifices in pursuit of knowledge. His murder by the Creature strips Victor of his last meaningful friendship.',
    },
  ],
  themes: [
    {
      title: 'Ambition and hubris',
      body: 'Victor\'s relentless pursuit of forbidden knowledge leads to catastrophe. Shelley draws on the Prometheus myth to warn against human overreach: the desire to rival God is presented not as heroic but as reckless and ultimately destructive.',
    },
    {
      title: 'Creation and responsibility',
      body: 'The novel\'s central moral question is whether a creator owes duties to their creation. Victor abandons the Creature at birth, and every subsequent tragedy flows from that act of irresponsibility. Shelley argues that bringing something into existence carries an absolute obligation of care.',
    },
    {
      title: 'Isolation and loneliness',
      body: 'Both Victor and the Creature suffer from profound isolation. Victor cuts himself off from family and friends to pursue his work; the Creature is denied any human connection at all. Shelley shows that loneliness is not merely painful but morally corrosive, driving both characters toward destruction.',
    },
    {
      title: 'Nature versus nurture',
      body: 'The Creature is born innocent and becomes violent only after repeated rejection. Shelley\'s novel is a powerful argument that environment, not innate character, shapes moral development. The Creature\'s eloquent account of his education and subsequent brutalisation makes this case with devastating force.',
    },
    {
      title: 'Science and ethics',
      body: 'Written in the age of galvanism and rapid scientific progress, the novel asks what happens when knowledge outstrips moral responsibility. Victor never pauses to consider the ethical implications of creating life, and Shelley suggests that science without conscience is monstrous.',
    },
  ],
  historicalContext: [
    'Mary Shelley wrote Frankenstein in 1816 during the famous "ghost story" competition at the Villa Diodati near Lake Geneva, where she was staying with Percy Bysshe Shelley, Lord Byron and John Polidori. She was just eighteen years old. The novel was published anonymously in 1818 and attributed to a man by most reviewers; when Shelley was revealed as the author, many refused to believe a young woman could have written it.',

    'The novel was influenced by contemporary scientific experiments, particularly Luigi Galvani\'s work on "animal electricity" and the public demonstrations of Giovanni Aldini, who applied electrical current to the bodies of executed criminals, causing their limbs to twitch. These experiments raised genuine questions about the nature of life and whether science could reanimate the dead.',

    'Shelley was deeply influenced by the Romantic movement and its tensions with Enlightenment rationalism. The novel can be read as a critique of the Romantic ideal of the solitary genius and of the Enlightenment belief that knowledge is always beneficial. Victor embodies both traditions and is destroyed by their excesses.',

    'The novel\'s subtitle, "The Modern Prometheus," connects Victor to the Greek Titan who stole fire from the gods and was punished for eternity. Shelley uses this myth to frame scientific ambition as a form of divine transgression, suggesting that some knowledge carries a terrible price.',
  ],
  quotations: [
    {
      quote: '"I ought to be thy Adam, but I am rather the fallen angel."',
      who: 'The Creature — Chapter 10',
      analysis: 'The Creature uses Milton\'s Paradise Lost to articulate his abandonment. He should have been loved as a first creation but has been cast out like Satan.',
    },
    {
      quote: '"Beware; for I am fearless, and therefore powerful."',
      who: 'The Creature — Chapter 20',
      analysis: 'The Creature\'s warning reveals that his power comes from having nothing left to lose. Rejection has made him dangerous.',
    },
    {
      quote: '"I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body."',
      who: 'Victor — Chapter 5',
      analysis: 'Victor\'s single-minded obsession is laid bare. He has sacrificed health, relationships and moral reflection for one goal.',
    },
    {
      quote: '"I beheld the wretch — the miserable monster whom I had created."',
      who: 'Victor — Chapter 5',
      analysis: 'Victor\'s immediate revulsion at his creation. The word "wretch" shows he denies the Creature humanity from the very first moment.',
    },
    {
      quote: '"Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge."',
      who: 'Victor — Chapter 4',
      analysis: 'Victor warns Walton directly, making his story a cautionary tale about the pursuit of forbidden knowledge.',
    },
    {
      quote: '"I was benevolent and good; misery made me a fiend."',
      who: 'The Creature — Chapter 10',
      analysis: 'The Creature articulates the novel\'s nature-versus-nurture argument in a single sentence. He was born innocent.',
    },
    {
      quote: '"If I cannot inspire love, I will cause fear."',
      who: 'The Creature — Chapter 17',
      analysis: 'The Creature turns to terror as the only form of power available to someone denied all affection.',
    },
  ],
}

export default async function FrankensteinPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'ocr', 'eduqas', 'edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <TextStudyHub
        textName="Frankenstein"
        textType="novel"
        examBoard="AQA"
        basePath="/revision/texts/frankenstein"
        subPages={[
          { id: 'read', href: '/revision/texts/frankenstein/read', icon: 'read' as const, title: 'Read Full Text', description: 'With annotations' },
          { id: 'chapters', href: '/revision/texts/frankenstein/chapters', icon: 'acts' as const, title: 'Chapter-by-Chapter', description: 'Key moments & quotes' },
          { id: 'characters', href: '/revision/texts/frankenstein/characters', icon: 'characters' as const, title: 'Characters', description: 'Full character guide' },
          { id: 'themes', href: '/revision/texts/frankenstein/themes', icon: 'themes' as const, title: 'Themes', description: 'Theme analysis' },
          { id: 'quotes', href: '/revision/texts/frankenstein/key-quotes', icon: 'quotes' as const, title: 'Key Quotes', description: 'Quotes with analysis' },
          { id: 'essays', href: '/revision/texts/frankenstein/essay-plans', icon: 'essays' as const, title: 'Essay Plans', description: 'GCSE essay plans' },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map(q => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Shelley present the theme of ambition and hubris in Frankenstein?',
          'How does Shelley explore the Creature as both victim and villain?',
          'How does Shelley present the theme of isolation in Frankenstein?',
          'How does Shelley use the novel to explore the dangers of science without ethics?',
          'How does Shelley present the relationship between creator and creation?',
        ]}
        flashcards={data.quotations.slice(0, 8).map(q => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <DeepDiveSection
        links={[
          {
            href: '/revision/texts/frankenstein/read',
            icon: 'read',
            title: 'Read the Full Novel',
            description: 'Read Shelley\'s original text with interactive annotations and theme overlays.',
          },
          {
            href: '/revision/texts/frankenstein/chapters',
            icon: 'acts',
            title: 'Chapter-by-Chapter Analysis',
            description: 'Detailed breakdown of each chapter with key moments, quotes and analysis.',
          },
          {
            href: '/revision/texts/frankenstein/characters',
            icon: 'characters',
            title: 'Character Studies',
            description: 'In-depth profiles of every major character with quotes and exam tips.',
          },
          {
            href: '/revision/texts/frankenstein/themes',
            icon: 'themes',
            title: 'Theme Explorer',
            description: 'Comprehensive analysis of every key theme with supporting evidence.',
          },
          {
            href: '/revision/texts/frankenstein/key-quotes',
            icon: 'quotes',
            title: 'Key Quotes Bank',
            description: 'Essential quotations organised by theme and character with analysis.',
          },
          {
            href: '/revision/texts/frankenstein/essay-plans',
            icon: 'essays',
            title: 'Essay Plans',
            description: 'Ready-made GCSE essay plans with thesis statements, paragraphs and evidence.',
          },
        ]}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Frankenstein</em> (1818) by Mary Shelley is in the public domain. Quotations are reproduced freely.
      </p>
    </>
  )
}
