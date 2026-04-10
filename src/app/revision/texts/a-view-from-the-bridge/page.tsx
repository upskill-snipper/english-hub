import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

export const metadata: Metadata = {
  title: 'A View from the Bridge — Study Guide | The English Hub',
  description:
    'In-depth study guide for A View from the Bridge by Arthur Miller: plot, characters, themes, context and key quotations for Edexcel IGCSE.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/a-view-from-the-bridge',
  },
}

const data: TextGuideData = {
  title: 'A View from the Bridge',
  author: 'Arthur Miller',
  year: 'first staged 1955',
  category: 'Play',
  badge: 'Edexcel IGCSE 4ET1',
  intro:
    "Arthur Miller's tight two-act tragedy follows Eddie Carbone, a Brooklyn longshoreman whose world collapses when he takes in his wife's Italian cousins as illegal immigrants and begins to suspect his niece has fallen in love with one of them. Narrated by the lawyer Alfieri, the play bends classical tragedy into the rhythms of 1950s New York dockyard life.",
  quickInfo: {
    genre: 'Modern tragedy',
    setting: 'Red Hook, Brooklyn, early 1950s',
    length: 'Two-act play',
    published: '1955 (one-act), 1956 (revised two-act)',
  },
  plotSummary: [
    "Eddie Carbone, a longshoreman on the Brooklyn waterfront, lives with his wife Beatrice and his orphaned seventeen-year-old niece Catherine, whom he has raised like a daughter. Eddie is preparing the apartment to hide two of Beatrice\u2019s cousins, Marco and Rodolpho, who are arriving illegally from Italy. Alfieri, a local lawyer, steps forward as the play\u2019s narrator and warns the audience that he already knows how the story will end.",
    "The cousins arrive. Marco is serious, powerfully built, and determined to earn money to send home to his starving wife and children in Sicily. Rodolpho is blond, charming, sings beautifully and cooks. He and Catherine fall quickly in love. Eddie, watching them, reacts with growing unease. He tells Beatrice that Rodolpho is effeminate and 'ain\u2019t right', and he insists that Catherine is too young to be thinking of marriage.",
    "Eddie seeks out Alfieri in private to ask whether there is any legal way to stop the relationship. Alfieri tells him plainly that there is none, and warns him that his feelings for Catherine are not what a man should feel for a niece. Eddie refuses to hear it. Later, after drinking, Eddie kisses Catherine on the lips and then forces a kiss on Rodolpho to 'prove' him gay. The family is fractured.",
    "Eddie makes a final, unthinkable choice: he phones the Immigration Bureau and reports the cousins. Marco and Rodolpho are arrested, and in front of the whole community Marco spits in Eddie\u2019s face and publicly accuses him. Eddie demands his 'name' back. In the play\u2019s final minutes he confronts Marco with a knife; Marco turns the blade on him and kills him. Alfieri closes the play with a troubled, reluctant admiration for a man who 'allowed himself to be wholly known'.",
  ],
  characters: [
    {
      name: 'Eddie Carbone',
      role: 'Longshoreman and tragic protagonist',
      body: "Hardworking, proud, and unable to name his own feelings, Eddie destroys himself by refusing to see what Alfieri sees. Miller treats him with both pity and moral clarity, and the play\u2019s power comes from that doubled gaze.",
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
      body: "Set among illegal Italian immigrants on the Brooklyn waterfront, the play is also about what America offers and what it takes. Marco\u2019s hope is brutally snapped in half by the system Eddie invokes against him.",
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
      quote: '"You can quicker get back a million dollars that was stole than a word that you gave away."',
      who: 'Eddie — Act 1',
      analysis: "Eddie's own warning about the value of reputation, which he will later betray.",
    },
    {
      quote: '"Most of the time now we settle for half, and I like it better."',
      who: 'Alfieri — opening',
      analysis: "The play's thesis on compromise versus tragic absolutism. Eddie is incapable of settling for half.",
    },
    {
      quote: '"She\'s a baby."',
      who: 'Eddie — Act 1',
      analysis: "Eddie's repeated refusal to see Catherine as an adult. The refusal is the tragedy.",
    },
    {
      quote: '"I want my name!"',
      who: 'Eddie — Act 2',
      analysis: "Eddie's final demand before his death. Reputation is the only currency he truly values.",
    },
    {
      quote: '"He allowed himself to be wholly known."',
      who: 'Alfieri — closing monologue',
      analysis: 'The play\u2019s reluctant final praise. Terrible and admirable in the same breath.',
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

export default async function AViewFromTheBridgePage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return <TextGuide data={data} />
}
