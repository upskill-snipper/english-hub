import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'A View from the Bridge revision guide — themes, characters, key quotes — The English Hub',
  description:
    "A View from the Bridge IGCSE revision — Miller's tragedy with characters, themes, context and key quotes. Aligned to Pearson Edexcel IGCSE Literature 4ET1.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/a-view-from-the-bridge',
  },
}

const data: TextGuideData = {
  title: 'A View from the Bridge',
  author: 'Arthur Miller',
  year: 'first staged 1955',
  category: 'Play',
  badge: 'Edexcel IGCSE',
  intro:
    "Arthur Miller's tight two-act tragedy follows Eddie Carbone, a Brooklyn longshoreman whose world collapses when he takes in his wife's Italian cousins as illegal immigrants and begins to suspect his niece has fallen in love with one of them. Narrated by the lawyer Alfieri, the play bends classical tragedy into the rhythms of 1950s New York dockyard life.",
  quickInfo: {
    genre: 'Modern tragedy',
    setting: 'Red Hook, Brooklyn, early 1950s',
    length: 'Two-act play',
    published: '1955 (one-act), 1956 (revised two-act)',
  },
  plotSummary: [
    'Eddie Carbone, a longshoreman on the Brooklyn waterfront, lives with his wife Beatrice and his orphaned seventeen-year-old niece Catherine, whom he has raised like a daughter. Eddie is preparing the apartment to hide two of Beatrice\u2019s cousins, Marco and Rodolpho, who are arriving illegally from Italy. Alfieri, a local lawyer, steps forward as the play\u2019s narrator and warns the audience that he already knows how the story will end.',
    "The cousins arrive. Marco is serious, powerfully built, and determined to earn money to send home to his starving wife and children in Sicily. Rodolpho is blond, charming, sings beautifully and cooks. He and Catherine fall quickly in love. Eddie, watching them, reacts with growing unease. He tells Beatrice that Rodolpho is effeminate and 'ain\u2019t right', and he insists that Catherine is too young to be thinking of marriage.",
    "Eddie seeks out Alfieri in private to ask whether there is any legal way to stop the relationship. Alfieri tells him plainly that there is none, and warns him that his feelings for Catherine are not what a man should feel for a niece. Eddie refuses to hear it. Later, after drinking, Eddie kisses Catherine on the lips and then forces a kiss on Rodolpho to 'prove' him gay. The family is fractured.",
    "Eddie makes a final, unthinkable choice: he phones the Immigration Bureau and reports the cousins. Marco and Rodolpho are arrested, and in front of the whole community Marco spits in Eddie\u2019s face and publicly accuses him. Eddie demands his 'name' back. In the play\u2019s final minutes he confronts Marco with a knife; Marco turns the blade on him and kills him. Alfieri closes the play with a troubled, reluctant admiration for a man who 'allowed himself to be wholly known'.",
  ],
  characters: [
    {
      name: 'Eddie Carbone',
      role: 'Longshoreman and tragic protagonist',
      body: 'Hardworking, proud, and unable to name his own feelings, Eddie destroys himself by refusing to see what Alfieri sees. Miller treats him with both pity and moral clarity, and the play\u2019s power comes from that doubled gaze.',
    },
    {
      name: 'Beatrice',
      role: "Eddie's wife",
      body: "The play's most clear-eyed voice. Beatrice quietly names Eddie's obsession with Catherine aloud and pleads with him to let the girl grow up. Her loyalty is tested almost beyond endurance.",
    },
    {
      name: 'Catherine',
      role: "Eddie's niece",
      body: "Seventeen, bright and emerging from girlhood, Catherine's growing independence is the catalyst for Eddie's collapse. Miller is careful to let her mature across the play without either sentimentalising or blaming her.",
    },
    {
      name: 'Marco',
      role: 'Elder Italian cousin',
      body: 'Quiet, proud, devoted to his starving family. Marco embodies the Sicilian code of honour that Alfieri invokes, and his public accusation of Eddie drives the final tragedy.',
    },
    {
      name: 'Rodolpho',
      role: 'Younger Italian cousin',
      body: 'Charismatic, artistic and genuinely in love with Catherine. Rodolpho is the catalyst Miller uses to test Eddie\u2019s narrow vision of masculinity.',
    },
    {
      name: 'Alfieri',
      role: 'Lawyer and narrator',
      body: 'Alfieri stands between the audience and the action, part chorus and part reluctant witness. He represents the law, the limits of reason, and the modern audience\u2019s inability to stop a tragedy it can already see coming.',
    },
  ],
  themes: [
    {
      title: 'Tragedy and inevitability',
      body: 'Miller consciously shapes the play as modern Greek tragedy. Alfieri\u2019s choric warnings make the ending feel foretold, and Eddie\u2019s refusal to swerve is the tragic flaw that seals him.',
    },
    {
      title: 'Masculinity and honour',
      body: 'Eddie clings to a narrow code of manhood and reads Rodolpho\u2019s cooking and singing as emasculating. Miller uses this to expose how fragile masculine identity becomes when it has nothing but contempt to defend it.',
    },
    {
      title: 'Desire, taboo and self-deception',
      body: 'Eddie\u2019s feelings for Catherine are the unspeakable centre of the play. Alfieri knows, Beatrice knows, and Eddie refuses to know. The tragedy is powered by the gap between what is true and what can be said.',
    },
    {
      title: 'Justice: law versus community code',
      body: 'Alfieri represents formal American law. Marco represents the older Sicilian honour code. Miller places Eddie between them and shows how betraying the community code is a crime the law cannot prosecute but the community will.',
    },
    {
      title: 'Immigration and the American Dream',
      body: 'Set among illegal Italian immigrants on the Brooklyn waterfront, the play is also about what America offers and what it takes. Marco\u2019s hope is brutally snapped in half by the system Eddie invokes against him.',
    },
  ],
  historicalContext: [
    'Arthur Miller wrote the first one-act version of A View from the Bridge in 1955, drawing on a story he had heard from a lawyer in the Red Hook docks a few years earlier. He revised it into the two-act version we now study in 1956, adding depth to Beatrice and Catherine in particular.',
    'The play is set in the early 1950s among the Italian-American longshoremen of Red Hook, Brooklyn. Many families in the area had arrived from southern Italy and Sicily, and illegal migration was common. The community operated by unwritten codes that prized loyalty and silence, and the worst possible sin was to inform on a fellow immigrant.',
    'Miller was writing during the McCarthy era, when the House Un-American Activities Committee was pressuring artists and public figures to name former friends and colleagues as Communists. Miller himself refused to do so and was later found in contempt of Congress. The theme of naming names is personal, and Eddie\u2019s phone call to Immigration is the play\u2019s sharpest autobiographical reflection.',
    'The play draws explicitly on Greek tragedy. Alfieri\u2019s opening monologue reaches back to Rome and invokes a classical sense of fate, and Miller deliberately models the plot on the tight inevitability of Sophocles and Euripides. The result is a modern working-class tragedy that insists on the dignity of its characters.',
  ],
  quotations: [
    {
      quote:
        '"You can quicker get back a million dollars that was stole than a word that you gave away."',
      who: 'Eddie — Act 1',
      analysis: "Eddie's own warning about the value of reputation, which he will later betray.",
    },
    {
      quote: '"Most of the time now we settle for half, and I like it better."',
      who: 'Alfieri — opening',
      analysis:
        "The play's thesis on compromise versus tragic absolutism. Eddie is incapable of settling for half.",
    },
    {
      quote: '"She\'s a baby."',
      who: 'Eddie — Act 1',
      analysis:
        "Eddie's repeated refusal to see Catherine as an adult. The refusal is the tragedy.",
    },
    {
      quote: '"I want my name!"',
      who: 'Eddie — Act 2',
      analysis:
        "Eddie's final demand before his death. Reputation is the only currency he truly values.",
    },
    {
      quote: '"He allowed himself to be wholly known."',
      who: 'Alfieri — closing monologue',
      analysis:
        'The play\u2019s reluctant final praise. Terrible and admirable in the same breath.',
    },
    {
      quote: '"You don\'t know anything."',
      who: 'Catherine to Eddie — Act 2',
      analysis: 'Catherine\u2019s coming of age, telling the truth Beatrice has long hinted at.',
    },
    {
      quote: '"In my country he would be dead now."',
      who: 'Marco — Act 2',
      analysis: 'Marco invokes the Sicilian honour code the American legal system cannot replace.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'vb-1',
    question: "What is Eddie Carbone's occupation?",
    type: 'multiple-choice',
    options: ['Lawyer', 'Factory worker', 'Longshoreman (dock worker)', 'Shopkeeper'],
    correctIndex: 2,
    explanation:
      "Eddie is a longshoreman on the Brooklyn waterfront. His working-class identity and the dockyard community's codes of loyalty are central to the play's tragedy.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'vb-2',
    question: 'Who are Marco and Rodolpho?',
    type: 'multiple-choice',
    options: [
      "Eddie's sons",
      "Beatrice's Italian cousins who arrive as illegal immigrants",
      "Catherine's boyfriends",
      "Alfieri's clients",
    ],
    correctIndex: 1,
    explanation:
      "Marco and Rodolpho are Beatrice's cousins who arrive illegally from Italy. Eddie agrees to shelter them, but their presence triggers the catastrophe.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'vb-3',
    question: "What is Eddie's relationship to Catherine?",
    type: 'multiple-choice',
    options: ['Father', 'Uncle (he raised his orphaned niece)', 'Brother', 'Cousin'],
    correctIndex: 1,
    explanation:
      "Catherine is Eddie's orphaned niece whom he has raised like a daughter. His overprotective attachment to her is the play's central and most disturbing element.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'vb-4',
    question: 'Who is Alfieri?',
    type: 'multiple-choice',
    options: [
      'A priest',
      "A lawyer who serves as the play's narrator and chorus",
      'A police officer',
      'A doctor',
    ],
    correctIndex: 1,
    explanation:
      'Alfieri is the local lawyer who narrates the play, standing between the audience and the action as part chorus and part reluctant witness. He represents the law and reason.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'vb-5',
    question: 'Why does Catherine fall in love with Rodolpho?',
    type: 'multiple-choice',
    options: [
      'He is wealthy',
      "He is blond, charming, sings beautifully and represents freedom from Eddie's control",
      'Eddie introduces them',
      'She has no choice',
    ],
    correctIndex: 1,
    explanation:
      "Rodolpho is charismatic, artistic, and genuinely affectionate. He represents the independence Catherine craves and an escape from Eddie's suffocating control.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'vb-6',
    question: 'What does Eddie do that is considered the worst possible betrayal in his community?',
    type: 'multiple-choice',
    options: [
      'He insults Marco',
      'He phones Immigration and reports the cousins',
      'He hits Catherine',
      'He leaves Beatrice',
    ],
    correctIndex: 1,
    explanation:
      'Eddie phones the Immigration Bureau and reports Marco and Rodolpho. In the Italian-American dockyard community, informing on a fellow immigrant is the ultimate betrayal — worse than murder.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'vb-7',
    question: 'How does Eddie die?',
    type: 'multiple-choice',
    options: [
      'He falls from a building',
      "Marco turns Eddie's own knife on him",
      'He is shot by police',
      'He drowns',
    ],
    correctIndex: 1,
    explanation:
      'In the final confrontation, Eddie pulls a knife on Marco, but Marco turns the blade on him and kills him. Eddie dies demanding his "name" back — the reputation he destroyed by informing.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'vb-8',
    question: 'What does Eddie mean when he repeatedly says Catherine is "a baby"?',
    type: 'multiple-choice',
    options: [
      'She is very young',
      'He refuses to acknowledge she is growing into an independent adult, masking his inappropriate attachment',
      'She acts childishly',
      'He is being affectionate',
    ],
    correctIndex: 1,
    explanation:
      'Eddie\'s repeated insistence that Catherine is "a baby" reveals his refusal to let her grow up. Alfieri and Beatrice both recognise that his protectiveness masks deeper, inappropriate feelings he cannot name.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'vb-9',
    question:
      'What does Alfieri mean by "Most of the time now we settle for half, and I like it better"?',
    type: 'multiple-choice',
    options: [
      'He likes his job half the time',
      'He values compromise over the tragic absolutism that destroys Eddie',
      'He is talking about money',
      'He wants to retire',
    ],
    correctIndex: 1,
    explanation:
      'Alfieri\'s opening line establishes the play\'s thesis on compromise versus absolutism. "Settling for half" means accepting imperfect reality. Eddie is incapable of this: his absolute demands for Catherine, honour, and name lead to his destruction.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'vb-10',
    question: 'Why does Eddie kiss Rodolpho?',
    type: 'multiple-choice',
    options: [
      'As a greeting',
      'To "prove" Rodolpho is gay and therefore unworthy of Catherine',
      'Out of affection',
      'It is an accident',
    ],
    correctIndex: 1,
    explanation:
      'After drinking, Eddie forces a kiss on Rodolpho to "prove" he is gay, attempting to discredit the relationship. This act of aggression reveals Eddie\'s desperation and his confused, possessive feelings.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'vb-11',
    question: 'How does Miller use the McCarthy era as context for the play?',
    type: 'multiple-choice',
    options: [
      'McCarthy is a character',
      "Miller refused to name names before HUAC; Eddie's phone call to Immigration mirrors the act of informing that Miller personally opposed",
      'The play is about communism',
      'McCarthy banned the play',
    ],
    correctIndex: 1,
    explanation:
      "Miller was writing during the McCarthy era, when artists were pressured to name former friends as Communists. Miller refused and was found in contempt. Eddie's act of informing is the play's sharpest autobiographical reflection — naming names destroys community.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'vb-12',
    question: 'What does "I want my name!" reveal about Eddie?',
    type: 'multiple-choice',
    options: [
      'He has forgotten his name',
      'Reputation is the only currency he truly values, and he has destroyed it himself',
      'He wants to change his name',
      'He is confused',
    ],
    correctIndex: 1,
    explanation:
      'Eddie\'s final demand before his death reveals that honour and reputation are everything to him. The devastating irony is that he destroyed his own name by informing — the very act he warned against ("You can quicker get back a million dollars that was stole than a word that you gave away").',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'vb-13',
    question: "How does Miller use the play's structure to echo Greek tragedy?",
    type: 'multiple-choice',
    options: [
      'It has a Greek setting',
      "Alfieri functions as a Greek chorus, the plot follows classical inevitability, and Eddie's refusal to compromise is a tragic flaw",
      'It uses ancient Greek language',
      'The characters worship Greek gods',
    ],
    correctIndex: 1,
    explanation:
      "Miller consciously shapes the play as modern Greek tragedy. Alfieri's choric warnings invoke Rome and fate; the tight plot follows classical inevitability; and Eddie's fatal flaw — his refusal to compromise or know himself — is directly modelled on Sophocles and Euripides.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'vb-14',
    question: 'What does Marco\'s line "In my country he would be dead now" signify?',
    type: 'multiple-choice',
    options: [
      'He is threatening randomly',
      'He invokes the Sicilian honour code that demands blood vengeance for betrayal — a code American law cannot replace',
      'He is nostalgic',
      'He is joking',
    ],
    correctIndex: 1,
    explanation:
      'Marco invokes the older Sicilian honour code where informing is punishable by death. Miller places Eddie between two justice systems — American law and Sicilian honour — showing that betraying the community code is a crime the law cannot prosecute but the community will.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'vb-15',
    question: "What is Beatrice's role in the play?",
    type: 'multiple-choice',
    options: [
      'She is passive and silent',
      "She is the play's most clear-eyed voice, quietly naming Eddie's obsession and pleading with him to let Catherine grow up",
      "She supports Eddie's actions",
      'She betrays Eddie',
    ],
    correctIndex: 1,
    explanation:
      "Beatrice quietly names what everyone else avoids: Eddie's inappropriate attachment to Catherine. She pleads with him to let the girl grow up and confronts him about their own deteriorating marriage. She is the play's most perceptive and brave voice.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'vb-16',
    question: "How does Eddie's view of masculinity drive the tragedy?",
    type: 'multiple-choice',
    options: [
      'He has a healthy view of masculinity',
      "His narrow definition reads Rodolpho's cooking and singing as effeminate, revealing how fragile masculine identity becomes a destructive force",
      'He celebrates artistic expression',
      'Masculinity is not a theme',
    ],
    correctIndex: 1,
    explanation:
      'Eddie clings to a narrow code of manhood where cooking and singing are unacceptable for a man. He reads Rodolpho as "ain\'t right" based on these prejudices. Miller exposes how fragile masculine identity becomes when it has nothing but contempt to defend it.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'vb-17',
    question: 'What does Alfieri mean when he says Eddie "allowed himself to be wholly known"?',
    type: 'multiple-choice',
    options: [
      'Eddie was famous',
      "Eddie's tragedy exposed his deepest, most forbidden desires publicly, which is both terrible and somehow admirable",
      'Eddie told his life story',
      'Eddie was honest about his feelings',
    ],
    correctIndex: 1,
    explanation:
      "Alfieri's closing line offers reluctant, troubled admiration. Eddie allowed his hidden desires and flaws to become fully visible — he did not hide behind compromise. This is terrible (it destroyed him) but also, Alfieri suggests, strangely admirable in its absolute refusal of self-deception.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'vb-18',
    question: "How does Catherine's coming of age contribute to the tragedy?",
    type: 'multiple-choice',
    options: [
      'She does not change',
      "Her growing independence — getting a job, falling in love — is the catalyst for Eddie's collapse",
      'She becomes more dependent',
      'She sides with Eddie',
    ],
    correctIndex: 1,
    explanation:
      "Catherine's emerging independence — wanting to work, falling in love with Rodolpho — is the catalyst for Eddie's collapse. Miller lets her mature without either sentimentalising or blaming her. Her growth is natural; Eddie's reaction to it is not.",
    topic: 'Characters',
    difficulty: 'grade-9',
  },
  {
    id: 'vb-19',
    question: "What is the significance of Marco spitting in Eddie's face after the arrest?",
    type: 'multiple-choice',
    options: [
      'It is a random act',
      'It publicly brands Eddie as an informer before the entire community, stripping him of his name and honour',
      'It is a greeting',
      'It shows disrespect for America',
    ],
    correctIndex: 1,
    explanation:
      "Marco's public act brands Eddie as an informer before the whole community. In the Italian-American honour code, this public accusation is worse than the arrest itself. Eddie spends the rest of the play desperately trying to recover the reputation this moment destroyed.",
    topic: 'Plot',
    difficulty: 'grade-9',
  },
  {
    id: 'vb-20',
    question: 'Where is the play set?',
    type: 'multiple-choice',
    options: ['Manhattan', 'Red Hook, Brooklyn', 'Little Italy, Manhattan', 'Queens'],
    correctIndex: 1,
    explanation:
      'The play is set in Red Hook, Brooklyn, among the Italian-American longshoremen of the waterfront. Many families had arrived from southern Italy and Sicily, and the community operated by unwritten codes of loyalty and silence.',
    topic: 'Context',
    difficulty: 'foundation',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Tragedy and Inevitability',
    summary:
      "Miller shapes the play as modern Greek tragedy, with Eddie's destruction feeling foretold.",
    keyPoints: [
      "Alfieri's choric warnings make the ending feel inevitable",
      "Eddie's refusal to compromise is a classical tragic flaw",
      'The tight two-act structure mirrors Greek dramatic unity',
      'Eddie is both pitied and condemned',
      'The play insists on the dignity of working-class tragedy',
    ],
  },
  {
    topic: 'Masculinity and Honour',
    summary: "Eddie's narrow definition of manhood drives the play's central conflicts.",
    keyPoints: [
      "Rodolpho's cooking and singing are read as emasculating",
      'Eddie forces a kiss on Rodolpho to "prove" him gay',
      '"I want my name!" — reputation is everything to Eddie',
      'Miller exposes how fragile masculine identity can become destructive',
      'Eddie dies defending a name he destroyed himself',
    ],
  },
  {
    topic: 'Justice: Law vs Community Code',
    summary: 'The play places Eddie between American law and Sicilian honour.',
    keyPoints: [
      'Alfieri represents formal law — rational but limited',
      'Marco represents the Sicilian honour code — "In my country he would be dead now"',
      'Informing is the worst possible sin in the community',
      'The law cannot address the betrayal Eddie commits',
      'Miller shows two incompatible systems of justice in conflict',
    ],
  },
  {
    topic: 'Desire and Self-Deception',
    summary: "Eddie's feelings for Catherine are the unspeakable centre of the play.",
    keyPoints: [
      'Alfieri sees it, Beatrice sees it — Eddie refuses to see it',
      '"She\'s a baby" — Eddie denies Catherine\'s adulthood',
      'The tragedy is powered by what cannot be said',
      "Eddie's aggression towards Rodolpho masks his own desires",
      '"He allowed himself to be wholly known" — the truth emerges in destruction',
    ],
  },
  {
    topic: 'Immigration and the American Dream',
    summary: 'The play explores what America offers and what it takes from Italian immigrants.',
    keyPoints: [
      'Marco hopes to send money home to his starving family',
      'Rodolpho sees America as freedom and opportunity',
      'The community shelters illegal immigrants through codes of silence',
      'Eddie weaponises the immigration system against the people he promised to protect',
      'Miller connects the play to McCarthyism and the act of naming names',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Miller present Eddie Carbone as a tragic hero?',
  'How does Miller explore the theme of masculinity and honour in A View from the Bridge?',
  'How does Miller present the conflict between law and community justice?',
  "How does Miller use the character of Alfieri to shape the audience's response?",
  'How does Miller explore the theme of immigration and the American Dream?',
]

export default async function AViewFromTheBridgePage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="A View from the Bridge — Complete GCSE Study Guide"
        description="In-depth study guide for A View from the Bridge covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'A View from the Bridge',
            url: 'https://theenglishhub.app/revision/texts/a-view-from-the-bridge',
          },
        ]}
      />
      <TextStudyHub
        textName="A View from the Bridge"
        textType="play"
        examBoard="Edexcel IGCSE"
        basePath="/revision/texts/a-view-from-the-bridge"
        subPages={[
          {
            id: 'characters',
            href: '/revision/texts/a-view-from-the-bridge/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/a-view-from-the-bridge/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/a-view-from-the-bridge/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/a-view-from-the-bridge/context',
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
          'How does Miller present Eddie Carbone as a tragic hero?',
          'How does Miller explore the theme of masculinity and honour in A View from the Bridge?',
          'How does Miller present the conflict between law and community justice?',
          "How does Miller use the character of Alfieri to shape the audience's response?",
          'How does Miller explore the theme of immigration and the American Dream?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="A View from the Bridge"
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
