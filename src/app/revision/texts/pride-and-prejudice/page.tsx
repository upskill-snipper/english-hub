import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import { DeepDiveSection } from '../_components/deep-dive-section'
import TextStudyHub from '@/components/study/TextStudyHub'

export const metadata: Metadata = {
  title: 'Pride and Prejudice — Study Guide | The English Hub',
  description:
    'In-depth study guide for Pride and Prejudice by Jane Austen: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/pride-and-prejudice',
  },
}

const data: TextGuideData = {
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  year: '1813',
  category: 'Novel',
  badge: 'AQA / OCR / Eduqas',
  intro:
    'Jane Austen\'s most celebrated novel follows Elizabeth Bennet as she navigates love, class and social expectation in Regency England. Through the spirited Elizabeth and the proud Mr Darcy, Austen explores how first impressions deceive, how pride blinds and how prejudice distorts judgement. At once a sharp social comedy and a deeply moral novel, Pride and Prejudice remains one of the most widely read works in the English language.',
  quickInfo: {
    genre: 'Novel of manners / Comedy of marriage',
    setting: 'Rural England (Hertfordshire, Derbyshire, Kent), early 19th century',
    length: '~122,000 words, 61 chapters in 3 volumes',
    published: '1813',
  },
  plotSummary: [
    'The Bennet family of Longbourn are thrown into excitement when the wealthy Mr Bingley arrives in the neighbourhood. At a local ball, Bingley is immediately attracted to the eldest Bennet daughter, Jane, while his proud friend Mr Darcy offends the second daughter, Elizabeth, by refusing to dance with her and calling her merely "tolerable." Elizabeth forms a strong prejudice against Darcy, while Darcy finds himself increasingly drawn to her intelligence and wit.',

    'The charming officer Mr Wickham tells Elizabeth that Darcy cheated him out of a living. Elizabeth believes him and her dislike of Darcy deepens. Meanwhile, Bingley abruptly leaves Netherfield, and Jane is heartbroken. At the parsonage of her friend Charlotte Lucas, Elizabeth encounters Darcy again. He proposes in a letter that is half declaration, half insult, telling her he loves her against his better judgement. Elizabeth furiously refuses him.',

    'Darcy writes Elizabeth a letter that overturns her assumptions: Wickham is a liar who attempted to elope with Darcy\'s fifteen-year-old sister for her fortune, and Darcy separated Bingley from Jane because he honestly believed Jane did not love him. Elizabeth is humiliated to realise that her own pride in her judgement led her astray. She begins to see Darcy differently.',

    'Visiting Darcy\'s estate at Pemberley, Elizabeth sees evidence of his genuine goodness through the praise of his housekeeper and tenants. Their relationship warms, but is interrupted when Elizabeth\'s youngest sister Lydia elopes with Wickham, threatening the family\'s reputation. Darcy secretly pays Wickham to marry Lydia, saving the Bennets from disgrace. When Lady Catherine de Bourgh arrogantly tries to prevent the match, her interference inadvertently encourages Darcy to propose again. This time Elizabeth accepts, and both have been changed by the process of overcoming their pride and prejudice.',
  ],
  characters: [
    {
      name: 'Elizabeth Bennet',
      role: 'Second Bennet daughter; the protagonist',
      body: 'Witty, intelligent and independent, Elizabeth is Austen\'s most beloved heroine. Her flaw is that she prides herself on her ability to judge character, which makes her slow to recognise her own prejudice against Darcy and her blindness to Wickham\'s charm.',
    },
    {
      name: 'Mr Darcy',
      role: 'Wealthy gentleman from Derbyshire',
      body: 'Darcy is genuinely good but socially awkward, proud of his rank, and initially dismissive of those he considers beneath him. His moral growth is as important as Elizabeth\'s: he learns that wealth and status are no substitute for kindness and humility.',
    },
    {
      name: 'Jane Bennet',
      role: 'Eldest Bennet daughter',
      body: 'Sweet-natured and trusting to a fault, Jane always sees the best in people. Her relationship with Bingley provides a gentler parallel to the Darcy-Elizabeth plot.',
    },
    {
      name: 'Mr Bennet',
      role: 'Father of the Bennet family',
      body: 'Intelligent and sardonic, Mr Bennet retreats into irony rather than governing his family. His failure to check Lydia\'s behaviour has real consequences, and Austen gently condemns his passivity.',
    },
    {
      name: 'Mrs Bennet',
      role: 'Mother of the Bennet family',
      body: 'Obsessed with marrying off her daughters, Mrs Bennet is comic but also a product of a system that leaves women with no financial security except marriage.',
    },
    {
      name: 'Mr Wickham',
      role: 'Militia officer',
      body: 'Handsome, charming and thoroughly dishonest, Wickham is the novel\'s test of judgement. Elizabeth\'s willingness to believe him exposes the danger of trusting appearances over evidence.',
    },
  ],
  themes: [
    {
      title: 'Pride and prejudice',
      body: 'The novel\'s title names its central concern. Darcy\'s pride in his social position and Elizabeth\'s prejudice against him are mirror flaws that both must overcome. Austen shows that self-knowledge is the foundation of moral growth.',
    },
    {
      title: 'Class and social status',
      body: 'Regency society is rigidly hierarchical, and Austen both observes and critiques its snobberies. Lady Catherine\'s outrage at Elizabeth\'s low connections and Darcy\'s initial contempt for the Bennets expose how class prejudice distorts human relationships.',
    },
    {
      title: 'Marriage',
      body: 'Austen presents marriage as the defining event in a woman\'s life, for better or worse. She contrasts marriages of love (Elizabeth and Darcy), convenience (Charlotte and Mr Collins), foolishness (Lydia and Wickham) and resigned unhappiness (the Bennets).',
    },
    {
      title: 'Reputation and appearances',
      body: 'The novel is full of people who are not what they seem. Wickham appears gentlemanly; Darcy appears rude. Austen insists that true character is revealed by actions over time, not by first impressions.',
    },
    {
      title: 'Women and independence',
      body: 'Without inheritance or profession, the Bennet sisters depend entirely on marriage for their future. Austen shows the injustice of this system while celebrating Elizabeth\'s refusal to marry without love or respect.',
    },
  ],
  historicalContext: [
    'Austen wrote Pride and Prejudice during the Regency period, when Britain was at war with Napoleonic France. The militia officers who appear in the novel reflect the military presence in English towns during this era. Austen\'s own brothers served in the Navy, and she was acutely aware of the social upheaval beneath the surface of country life.',

    'For women of the gentry class, marriage was the only route to financial security. Under the law of entail, the Bennet estate will pass to the nearest male relative, Mr Collins, leaving the five daughters with nothing. This legal reality is not merely a plot device but the engine of Mrs Bennet\'s desperation and Elizabeth\'s vulnerability.',

    'Austen published her novels anonymously, identified only as "a Lady." The literary establishment of the time did not take women novelists seriously, yet Austen\'s sharp social observation and psychological insight have made her one of the most enduring writers in the English canon.',

    'The novel was originally drafted as "First Impressions" in 1796-97 and substantially revised before publication in 1813. Its witty dialogue, free indirect discourse and ironic narrative voice were innovative for the period and influenced generations of novelists.',
  ],
  quotations: [
    {
      quote: '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
      who: 'Narrator — Chapter 1',
      analysis: 'The novel\'s famous opening sentence is pure irony. The "truth" is really the assumption of matchmaking mothers, not a universal law.',
    },
    {
      quote: '"She is tolerable, but not handsome enough to tempt me."',
      who: 'Mr Darcy — Chapter 3',
      analysis: 'Darcy\'s dismissive remark at the first ball establishes Elizabeth\'s prejudice against him and his pride in his own judgement.',
    },
    {
      quote: '"In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you."',
      who: 'Mr Darcy — Chapter 34',
      analysis: 'Darcy\'s first proposal is undermined by his emphasis on the social gulf between them. He confesses love while insulting her family.',
    },
    {
      quote: '"Till this moment I never knew myself."',
      who: 'Elizabeth — Chapter 36',
      analysis: 'Elizabeth\'s moment of self-recognition after reading Darcy\'s letter. She realises her pride in her own judgement has been her greatest flaw.',
    },
    {
      quote: '"I was given good principles, but left to follow them in pride and conceit."',
      who: 'Mr Darcy — Chapter 58',
      analysis: 'Darcy acknowledges that good values are not enough without humility. His growth mirrors Elizabeth\'s.',
    },
    {
      quote: '"You are too generous to trifle with me. If your feelings are still what they were last April, tell me so at once."',
      who: 'Mr Darcy — Chapter 58',
      analysis: 'Darcy\'s second proposal is vulnerable and honest, showing how far he has come from the arrogance of his first attempt.',
    },
    {
      quote: '"I am only resolved to act in that manner, which will, in my own opinion, constitute my happiness."',
      who: 'Elizabeth — Chapter 56',
      analysis: 'Elizabeth defies Lady Catherine with quiet dignity, asserting her right to choose her own future regardless of rank.',
    },
  ],
}

export default async function PrideAndPrejudicePage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <TextStudyHub
        textName="Pride and Prejudice"
        textType="novel"
        examBoard="AQA"
        basePath="/revision/texts/pride-and-prejudice"
        subPages={[
          { id: 'chapters', href: '/revision/texts/pride-and-prejudice/chapters', icon: 'acts' as const, title: 'Chapter-by-Chapter', description: 'Key moments & quotes' },
          { id: 'characters', href: '/revision/texts/pride-and-prejudice/characters', icon: 'characters' as const, title: 'Characters', description: 'Full character guide' },
          { id: 'themes', href: '/revision/texts/pride-and-prejudice/themes', icon: 'themes' as const, title: 'Themes', description: 'Theme analysis' },
          { id: 'quotes', href: '/revision/texts/pride-and-prejudice/key-quotes', icon: 'quotes' as const, title: 'Key Quotes', description: 'Quotes with analysis' },
          { id: 'essays', href: '/revision/texts/pride-and-prejudice/essay-plans', icon: 'essays' as const, title: 'Essay Plans', description: 'GCSE essay plans' },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map(q => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Austen present the theme of pride and prejudice in the novel?',
          'How does Austen explore the role of marriage in Regency society?',
          'How does Austen use the character of Elizabeth Bennet to challenge social expectations?',
          'How does Austen present the theme of class and social status?',
          'How does Austen explore the theme of reputation and appearances?',
        ]}
        flashcards={data.quotations.slice(0, 8).map(q => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <DeepDiveSection
        links={[
          {
            href: '/revision/texts/pride-and-prejudice/chapters',
            icon: 'acts',
            title: 'Chapter-by-Chapter Analysis',
            description: 'Detailed breakdown of each chapter with key moments, quotes and analysis.',
          },
          {
            href: '/revision/texts/pride-and-prejudice/characters',
            icon: 'characters',
            title: 'Character Studies',
            description: 'In-depth profiles of every major character with quotes and exam tips.',
          },
          {
            href: '/revision/texts/pride-and-prejudice/themes',
            icon: 'themes',
            title: 'Theme Explorer',
            description: 'Comprehensive analysis of every key theme with supporting evidence.',
          },
          {
            href: '/revision/texts/pride-and-prejudice/key-quotes',
            icon: 'quotes',
            title: 'Key Quotes Bank',
            description: 'Essential quotations organised by theme and character with analysis.',
          },
          {
            href: '/revision/texts/pride-and-prejudice/essay-plans',
            icon: 'essays',
            title: 'Essay Plans',
            description: 'Ready-made GCSE essay plans with thesis statements, paragraphs and evidence.',
          },
        ]}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Pride and Prejudice</em> (1813) by Jane Austen is in the public domain. Quotations are reproduced freely.
      </p>
    </>
  )
}
