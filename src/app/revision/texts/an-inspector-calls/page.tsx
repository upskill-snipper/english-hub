import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

export const metadata: Metadata = {
  title: 'An Inspector Calls — Study Guide | The English Hub',
  description:
    'In-depth study guide for An Inspector Calls by J.B. Priestley: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/an-inspector-calls',
  },
}

const data: TextGuideData = {
  title: 'An Inspector Calls',
  author: 'J.B. Priestley',
  year: '1945',
  category: 'Play',
  badge: 'AQA / Edexcel / OCR / Eduqas / Edexcel IGCSE',
  intro:
    'J.B. Priestley wrote An Inspector Calls in 1945 but deliberately set it in 1912 — before two world wars, the sinking of the Titanic and the creation of the welfare state. The play uses a mysterious police inspector to expose how every member of the wealthy Birling family has contributed to the death of a young working-class woman. It is at once a detective thriller, a morality play and a socialist argument for collective responsibility.',
  quickInfo: {
    genre: 'Well-made play / Morality play',
    setting: 'The Birlings\u2019 dining room, Brumley, 1912',
    length: 'Three-act play (single evening)',
    published: '1945 (premiered in Moscow)',
  },
  plotSummary: [
    'The play opens on the Birling family celebrating the engagement of Sheila Birling to Gerald Croft, the son of a rival industrialist. Arthur Birling delivers a confident after-dinner speech praising capitalism and dismissing the idea that people should look after one another. He predicts the Titanic is unsinkable and that war is impossible. The doorbell rings, and Inspector Goole arrives to investigate the death of a young woman named Eva Smith, who has killed herself by swallowing disinfectant.',
    'In Act One, the Inspector reveals that Arthur Birling sacked Eva from his factory for leading a strike over pay. Sheila then recognises Eva as a shop girl she had dismissed from Milwards out of jealous spite. Gerald admits he kept Eva — now calling herself Daisy Renton — as his mistress before ending the affair. Each revelation peels back the family\u2019s respectable surface to expose selfishness and exploitation underneath.',
    'In Act Two, the Inspector turns to Sybil Birling, who chaired a charity committee that refused Eva help when she was pregnant and desperate. Sybil insists the father of the child should bear full responsibility, not realising that the father is her own son Eric. When Eric is exposed in Act Three, the full chain of responsibility is laid bare: every Birling played a part in driving Eva to her death.',
    'After the Inspector leaves with a final speech about shared responsibility, the family fractures. Gerald and Arthur discover that no inspector by that name exists on the police force and that no girl has died at the infirmary. The older Birlings celebrate their apparent escape, but Sheila and Eric remain shaken. The telephone rings: a real inspector is on his way to investigate a suicide. The cycle begins again.',
  ],
  characters: [
    {
      name: 'Arthur Birling',
      role: 'Prosperous factory owner and family patriarch',
      body: 'Birling is a self-made businessman obsessed with profit, reputation and his upcoming knighthood. His speeches about progress and individual responsibility are deliberately undercut by dramatic irony — the audience knows his predictions about the Titanic and war are catastrophically wrong. He represents the capitalist ruling class that Priestley wanted post-war Britain to reject.',
    },
    {
      name: 'Sybil Birling',
      role: 'Arthur\u2019s wife and charity committee chair',
      body: 'Cold, snobbish and rigidly class-conscious, Sybil is the most resistant to the Inspector\u2019s message. She refuses to believe that her actions at the charity had consequences and consistently blames the lower classes for their own suffering. Priestley uses her to expose how charitable institutions could be instruments of class prejudice rather than genuine aid.',
    },
    {
      name: 'Sheila Birling',
      role: 'The Birlings\u2019 daughter',
      body: 'Sheila begins the play as a naive, sheltered young woman but undergoes the most complete moral transformation. She quickly accepts her guilt, sees through Gerald\u2019s deception and challenges her parents\u2019 refusal to change. By the end she functions almost as the Inspector\u2019s ally, representing the younger generation that Priestley believed could build a better society.',
    },
    {
      name: 'Eric Birling',
      role: 'The Birlings\u2019 son',
      body: 'Awkward, heavy-drinking and initially overshadowed, Eric is revealed to have forced himself on Eva and stolen money from his father\u2019s firm to support her. Like Sheila, he accepts responsibility and is appalled by his parents\u2019 attempt to cover things up. His alcoholism hints at deeper dysfunction beneath the Birling family\u2019s polished exterior.',
    },
    {
      name: 'Gerald Croft',
      role: 'Sheila\u2019s fianc\u00e9, son of Sir George Croft',
      body: 'Gerald occupies a complex middle ground. His affair with Daisy Renton contained genuine feeling, but he ultimately abandoned her when it suited him. After the Inspector leaves, he leads the effort to discredit the investigation, aligning himself with the older generation rather than with Sheila and Eric.',
    },
    {
      name: 'Inspector Goole',
      role: 'The investigating inspector',
      body: 'Authoritative, morally relentless and possibly supernatural, the Inspector controls the pace and direction of the evening. His name puns on "ghoul" and his origins are never explained. Priestley uses him as a dramatic device to voice the play\u2019s socialist argument: that we are all responsible for one another.',
    },
    {
      name: 'Eva Smith / Daisy Renton',
      role: 'The unseen working-class victim',
      body: 'Eva never appears on stage but is the moral centre of the play. She represents every exploited worker, every abandoned woman, every person failed by the class system. Whether she is one girl or several is deliberately ambiguous — Priestley\u2019s point is that countless Evas exist and that their suffering is collective, not individual.',
    },
    {
      name: 'Edna',
      role: 'The Birlings\u2019 maid',
      body: 'Edna has very few lines, but her silent presence throughout the evening is a constant reminder of the class divide inside the Birling household. She serves the family who treat people like Eva as disposable, and her quiet deference underlines the power imbalance that the play exposes.',
    },
  ],
  themes: [
    {
      title: 'Social responsibility',
      body: 'The Inspector\u2019s central message is that society is not made up of isolated individuals but of interconnected people who owe duties to one another. Priestley wrote the play as an argument for the welfare state then being built in Britain: if we ignore the vulnerable, the consequences will eventually reach us all.',
    },
    {
      title: 'Class',
      body: 'The Birlings sit at the top of an Edwardian class hierarchy and treat those beneath them as expendable. Eva is sacked, exploited and rejected at every turn because she lacks money, status and connections. Priestley exposes how class privilege insulates the wealthy from accountability while crushing those without power.',
    },
    {
      title: 'Gender',
      body: 'Eva\u2019s experiences highlight the double oppression of being both working-class and female in 1912. She is sacked from a factory, dismissed from a shop, used as a mistress, and denied charitable help when pregnant. Priestley shows how patriarchal power allows men like Gerald, Eric and Alderman Meggarty to exploit women with impunity.',
    },
    {
      title: 'Age versus youth',
      body: 'The generational divide is central to the play\u2019s optimism. Arthur and Sybil refuse to accept responsibility and learn nothing; Sheila and Eric are genuinely changed by the evening. Priestley, writing for a 1945 audience, was asking the younger generation to reject their parents\u2019 values and build a fairer post-war world.',
    },
    {
      title: 'Guilt and responsibility',
      body: 'Each character reacts differently to their guilt. Sheila is openly remorseful, Eric is anguished, Gerald is evasive, Sybil is defiant and Arthur is concerned only with public reputation. Priestley uses these contrasting responses to test his audience: which reaction do you recognise in yourself?',
    },
    {
      title: 'Power',
      body: 'Power operates through wealth, gender, age and social position throughout the play. Birling has the power to fire workers; Sybil has the power to deny charity; Gerald and Eric have the power to exploit a vulnerable woman. The Inspector temporarily inverts these hierarchies, subjecting the powerful to moral scrutiny they have never before faced.',
    },
  ],
  historicalContext: [
    'Priestley set the play in 1912, a year of imperial confidence before the First World War shattered the old European order. The Edwardian upper-middle class that the Birlings represent believed in progress, empire and the superiority of the free market. Priestley chose this date so the audience would recognise that every one of Birling\u2019s confident predictions — about peace, the Titanic, and the impossibility of strikes — turned out to be disastrously wrong.',
    'Priestley was a committed democratic socialist who had fought in the First World War and witnessed the unemployment and poverty of the 1930s. His wartime radio broadcasts, the Postscripts, reached millions and argued that Britain should never return to the inequality of the pre-war years. An Inspector Calls is the dramatic expression of the same argument: that unchecked capitalism destroys lives and that society must take collective responsibility for its weakest members.',
    'The play was written in 1945, the year the Labour government of Clement Attlee was elected with a landslide majority. Attlee\u2019s government created the National Health Service, expanded national insurance and built the modern welfare state. Priestley\u2019s audience would have understood the Inspector\u2019s closing speech as a direct endorsement of these reforms — a warning that the alternative was a return to the cruelty of 1912.',
    'Priestley uses dramatic irony extensively because the audience knows what the characters do not. When Birling calls the Titanic unsinkable and dismisses the threat of war, the audience recognises his arrogance and short-sightedness. This technique turns the play into an argument about hindsight and foresight: the audience is asked to learn from history in a way the Birlings refuse to.',
  ],
  quotations: [
    {
      quote: '"We are members of one body. We are responsible for each other."',
      who: 'Inspector Goole — Act 3',
      analysis: 'The play\u2019s thesis statement, delivered as the Inspector\u2019s final warning. It echoes the communal ethos of the 1945 welfare-state moment.',
    },
    {
      quote: '"Fire and blood and anguish."',
      who: 'Inspector Goole — Act 3',
      analysis: 'A prophetic reference to the two world wars the audience already knows about, lending the Inspector an almost supernatural authority.',
    },
    {
      quote: '"The Titanic \u2014 unsinkable, absolutely unsinkable."',
      who: 'Arthur Birling — Act 1',
      analysis: 'Dramatic irony at its sharpest. Birling\u2019s certainty immediately marks him as a man whose judgment cannot be trusted.',
    },
    {
      quote: '"If we were all responsible for everything that happened to everybody \u2026 it would be very awkward."',
      who: 'Arthur Birling — Act 3',
      analysis: 'Birling reduces a moral question to a practical inconvenience, revealing the hollowness of capitalist individualism.',
    },
    {
      quote: '"But these girls aren\u2019t cheap labour \u2014 they\u2019re people."',
      who: 'Sheila Birling — Act 1',
      analysis: 'Sheila\u2019s awakening to social responsibility, phrased simply but powerfully against her father\u2019s economic logic.',
    },
    {
      quote: '"I\u2019ll never, never do it again to anybody."',
      who: 'Sheila Birling — Act 1',
      analysis: 'Sheila is the first character to accept guilt fully, modelling the moral change Priestley wants from his audience.',
    },
    {
      quote: '"You\u2019re not the kind of father a chap could go to."',
      who: 'Eric Birling — Act 3',
      analysis: 'Eric\u2019s accusation exposes the emotional bankruptcy beneath Birling\u2019s patriarchal authority.',
    },
    {
      quote: '"We don\u2019t live alone. We are members of one body."',
      who: 'Inspector Goole — Act 3',
      analysis: 'A compressed restatement of the play\u2019s core socialist message, linking individual action to communal consequence.',
    },
    {
      quote: '"Public men, Mr Birling, have responsibilities as well as privileges."',
      who: 'Inspector Goole — Act 1',
      analysis: 'The Inspector directly challenges Birling\u2019s belief that wealth entitles him to immunity from scrutiny.',
    },
    {
      quote: '"It\u2019s what happened to the girl and what we all did to her that matters."',
      who: 'Sheila Birling — Act 3',
      analysis: 'Sheila cuts through her parents\u2019 evasion, insisting that the moral lesson matters regardless of the Inspector\u2019s identity.',
    },
    {
      quote: '"I was quite justified."',
      who: 'Sybil Birling — Act 2',
      analysis: 'Sybil\u2019s stubborn self-righteousness. She refuses to accept guilt even when the evidence is overwhelming.',
    },
    {
      quote: '"Girls of that class\u2014"',
      who: 'Sybil Birling — Act 2',
      analysis: 'An interrupted phrase that exposes Sybil\u2019s deep-rooted class prejudice as instinctive and unexamined.',
    },
    {
      quote: '"I didn\u2019t feel about her as she felt about me."',
      who: 'Gerald Croft — Act 2',
      analysis: 'Gerald\u2019s admission reveals the power imbalance in his relationship with Daisy: he could leave, she could not.',
    },
    {
      quote: '"The way some of these cranks talk and write now, you\u2019d think everybody has to look after everybody else."',
      who: 'Arthur Birling — Act 1',
      analysis: 'Birling dismisses socialism before the Inspector arrives, setting up the dramatic reversal that follows.',
    },
    {
      quote: '"One Eva Smith has gone \u2014 but there are millions of Eva Smiths and John Smiths still left with us."',
      who: 'Inspector Goole — Act 3',
      analysis: 'The Inspector universalises Eva\u2019s suffering, turning a single case into a political argument about systemic injustice.',
    },
    {
      quote: '"You began to learn something. And now you\u2019ve stopped."',
      who: 'Sheila Birling — Act 3',
      analysis: 'Sheila accuses Gerald and her parents of moral regression, sharpening the generational divide at the play\u2019s climax.',
    },
  ],
}

export default async function AnInspectorCallsPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations (&le;15 words each) reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism, review and educational study. <em>An Inspector Calls</em> &copy; J.B. Priestley Estate. Full text available from your school or local library.
      </p>
    </>
  )
}
