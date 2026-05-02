import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Lord of the Flies — Study Guide | The English Hub',
  description:
    'In-depth study guide for Lord of the Flies by William Golding: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/lord-of-the-flies',
  },
}

const data: TextGuideData = {
  title: 'Lord of the Flies',
  author: 'William Golding',
  year: 'published 1954',
  category: 'Novel',
  badge: 'AQA / OCR / Eduqas',
  intro:
    "William Golding's ferocious first novel strands a group of English schoolboys on a tropical island after their plane is shot down during a future war. What begins as an adventure quickly collapses into savagery as Golding tests — and rejects — the Victorian myth that civilisation is the natural state of well-bred boys.",
  quickInfo: {
    genre: 'Allegorical novel / Psychological fable',
    setting: 'An uninhabited Pacific island, near-future wartime',
    length: '~60,000 words, 12 chapters',
    published: '1954',
  },
  plotSummary: [
    'A plane carrying British schoolboys is shot down over a tropical island. The survivors, none older than about twelve, emerge to find no adults. Fair-haired Ralph finds a conch shell and, with the help of the plump, asthmatic Piggy, uses it to summon the others. The boys elect Ralph chief. Jack Merridew, leader of a group of choirboys, is made head of the hunters in a grudging compromise.',
    "Ralph builds shelters, insists on a signal fire and holds meetings where whoever holds the conch can speak. Jack becomes obsessed with hunting the island's pigs and gradually pulls his choir — painted, bare-chested and singing — away from Ralph's order. A rumour spreads among the younger children of a 'beast' on the mountain. What they have actually seen is the body of a dead parachutist tangled in his lines.",
    'At the centre of the novel, the group kills a sow and mounts her head on a stake. The visionary, epileptic Simon alone climbs the mountain, discovers the parachutist, and understands that the beast is nothing more than a man and that the real evil lives inside the boys themselves. As he returns in the dark to tell them, he is mistaken for the beast and beaten to death in a frenzied circle dance.',
    "Jack's tribe grows dominant. They raid Ralph's camp, steal Piggy's glasses (their only source of fire), and later roll a boulder that kills Piggy and shatters the conch. Ralph is hunted across the burning island by boys who now want him dead. He collapses on the beach at the feet of a naval officer, who has come ashore because of the smoke, and weeps for the end of innocence and 'the darkness of man's heart'.",
  ],
  characters: [
    {
      name: 'Ralph',
      role: 'Elected chief',
      body: 'Ralph stands for democratic order, fairness and common sense. Golding shows him as well-meaning but not particularly brilliant, and his gradual isolation is the measure of civilisation\u2019s collapse.',
    },
    {
      name: 'Piggy',
      role: 'Rational, asthmatic outsider',
      body: 'Piggy is the voice of science and adult rationality. The boys mock his body, his glasses and his accent, and in destroying him they destroy the last argument for reason. His death ends any hope of rescue from within.',
    },
    {
      name: 'Jack Merridew',
      role: 'Head hunter, eventual dictator',
      body: 'Jack is the novel\u2019s portrait of authoritarianism: charismatic, cruel, hungry for power. He understands that fear and spectacle are more useful than argument, and he uses both.',
    },
    {
      name: 'Simon',
      role: 'Visionary, prophetic outsider',
      body: "Simon is the closest thing the novel has to a saint. He grasps the novel's central truth — that the beast is the boys themselves — and is murdered for trying to share it, in a scene Golding stages with religious overtones.",
    },
    {
      name: 'Roger',
      role: "Jack's lieutenant, sadist",
      body: 'Roger drops stones at first but misses on purpose because the old world still restrains him. By the end, civilisation has fallen away and he tortures and kills without hesitation.',
    },
    {
      name: 'Sam and Eric (Samneric)',
      role: 'Inseparable twins',
      body: 'Treated almost as one person, the twins represent ordinary conformity. Their eventual betrayal of Ralph shows how fear turns decent people into accomplices.',
    },
  ],
  themes: [
    {
      title: 'Civilisation versus savagery',
      body: 'The novel\u2019s central conflict. Golding refuses the comforting idea that British schoolboys carry civilisation inside them; he shows it as a thin paint that washes off in the rain.',
    },
    {
      title: 'Innate evil and original sin',
      body: 'Golding was shaped by the Second World War and rejected the liberal optimism of his age. The Lord of the Flies — the pig\u2019s head on a stake — speaks to Simon with a voice that could belong to anyone on the island.',
    },
    {
      title: 'Order, democracy and dictatorship',
      body: 'The conch symbolises rules and turn-taking. Its shattering at Piggy\u2019s death is the moment democracy dies on the island, and Jack\u2019s rule is a sharp warning about how quickly fear produces strongmen.',
    },
    {
      title: 'Loss of innocence',
      body: 'The boys begin the novel in their school uniforms and end it naked, painted and murderous. The tears on the beach in the final chapter mourn not just the dead but the shared myth of childhood purity itself.',
    },
    {
      title: 'The beast',
      body: 'The boys keep searching for an external monster, but Simon alone understands that the beast is internal. Golding makes this the novel\u2019s moral hinge and its most chilling psychological claim.',
    },
  ],
  historicalContext: [
    'William Golding, a schoolteacher and naval officer, served in the Royal Navy during the Second World War and participated in the D-Day landings. He later said that watching what ordinary people were willing to do during the war made it impossible for him to believe humans were innately good, and Lord of the Flies grew directly out of that disillusionment.',
    'The novel is set during a vague future war, usually read as a nuclear conflict, and the parachutist\u2019s body is a reminder that the adult world the boys trust has also descended into violence. The island is less an escape from civilisation than a tiny mirror of it.',
    'Golding was consciously writing against the Victorian tradition of R.M. Ballantyne\u2019s The Coral Island, in which stranded English boys remain cheerful, inventive and Christian. Golding\u2019s reply was that those boys were a comforting lie, and the pig on a stake is his answer to the cheerful campfire.',
    'The novel was repeatedly rejected before it was published in 1954 and only slowly became a classroom staple. By the 1960s it was required reading in British and American schools, and it won Golding the Nobel Prize in Literature in 1983.',
  ],
  quotations: [
    {
      quote: '"Maybe there is a beast... maybe it\'s only us."',
      who: 'Simon — Chapter 5',
      analysis:
        'The novel\u2019s thesis in a sentence. Evil comes from within, not from the jungle.',
    },
    {
      quote: '"We\'ve got to have rules and obey them. After all, we\'re not savages."',
      who: 'Jack — Chapter 2',
      analysis:
        'The irony of Jack\u2019s early insistence on order. Within a hundred pages he will embody the opposite.',
    },
    {
      quote: '"Kill the pig. Cut her throat. Spill her blood."',
      who: 'Chant — Chapter 4',
      analysis:
        'The ritual chant Golding uses to track the boys\u2019 descent. It mutates into the chant that kills Simon.',
    },
    {
      quote: '"Ralph wept for the end of innocence, the darkness of man\'s heart."',
      who: 'Narrator — final chapter',
      analysis:
        'Golding\u2019s closing judgement. The loss is not just of boyhood but of a shared moral illusion.',
    },
    {
      quote: '"Sucks to your ass-mar!"',
      who: 'The boys to Piggy — Chapter 1',
      analysis:
        'Cruelty begins as playground teasing. Golding shows how easily it hardens into hunting.',
    },
    {
      quote: '"Fancy thinking the Beast was something you could hunt and kill!"',
      who: 'The Lord of the Flies — Chapter 8',
      analysis: "The pig's head taunts Simon with the truth the others refuse to see.",
    },
    {
      quote: '"The conch exploded into a thousand white fragments."',
      who: 'Narrator — Chapter 11',
      analysis:
        'Democracy on the island dies in a single sentence. Piggy\u2019s death follows immediately.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'lof-1',
    question: 'How do the boys end up on the island?',
    type: 'multiple-choice',
    options: [
      'A shipwreck',
      'Their plane is shot down during a war',
      'They go on a school trip',
      'They are marooned by pirates',
    ],
    correctIndex: 1,
    explanation:
      'A plane carrying British schoolboys is shot down over a tropical island during a future war. The adult world is already at war, and the island becomes a small-scale mirror of that violence.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'lof-2',
    question: 'What does Ralph use to summon the other boys?',
    type: 'multiple-choice',
    options: ['A whistle', 'A fire', 'A conch shell', 'His voice'],
    correctIndex: 2,
    explanation:
      'Ralph finds a conch shell and uses it to call the boys together. The conch becomes a symbol of democracy and orderly debate: whoever holds it has the right to speak.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'lof-3',
    question: 'Who is elected chief?',
    type: 'multiple-choice',
    options: ['Jack', 'Piggy', 'Ralph', 'Simon'],
    correctIndex: 2,
    explanation:
      'Ralph is democratically elected chief. Jack, the leader of the choirboys, grudgingly accepts the decision but is given control of the hunters, beginning the rivalry that drives the novel.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'lof-4',
    question: 'What does the "beast" on the mountain actually turn out to be?',
    type: 'multiple-choice',
    options: ['A wild animal', 'A dead parachutist tangled in his lines', 'A monster', 'A shadow'],
    correctIndex: 1,
    explanation:
      'The "beast" is the body of a dead parachutist, a literal reminder that the adult world has also descended into violence. But Golding\'s deeper point is that the real beast is inside the boys themselves.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'lof-5',
    question: 'Who says "Maybe there is a beast... maybe it\'s only us"?',
    type: 'multiple-choice',
    options: ['Ralph', 'Jack', 'Simon', 'Piggy'],
    correctIndex: 2,
    explanation:
      "Simon is the only boy who grasps the novel's central truth: the beast is not external but internal. Evil comes from within human nature, not from the jungle. He is murdered for trying to share this truth.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'lof-6',
    question: 'How does Simon die?',
    type: 'multiple-choice',
    options: [
      'He falls off a cliff',
      'He is beaten to death by the boys in a frenzied ritual dance',
      'He drowns',
      'He is killed by the beast',
    ],
    correctIndex: 1,
    explanation:
      'Simon returns from the mountain to tell the boys the beast is just a dead man. But in the darkness, caught up in a frenzied circle dance, the boys mistake him for the beast and beat him to death. Golding stages the scene with religious overtones.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'lof-7',
    question: 'What happens to Piggy?',
    type: 'multiple-choice',
    options: [
      "He joins Jack's tribe",
      'Roger rolls a boulder that kills him and shatters the conch',
      'He escapes the island',
      'He becomes chief',
    ],
    correctIndex: 1,
    explanation:
      'Roger deliberately rolls a boulder that kills Piggy and shatters the conch in a single moment. The voice of reason and the symbol of democracy are destroyed simultaneously.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'lof-8',
    question: 'What does the conch symbolise?',
    type: 'multiple-choice',
    options: [
      'Hunting',
      'Power and strength',
      'Democracy, order, and civilised debate',
      'The beast',
    ],
    correctIndex: 2,
    explanation:
      "The conch represents rules, turn-taking, and democratic order. Whoever holds it has the right to speak. Its destruction at Piggy's death is the moment democracy dies on the island.",
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'lof-9',
    question: 'What does the Lord of the Flies represent?',
    type: 'multiple-choice',
    options: [
      'A giant fly',
      "The pig's head on a stake, representing the evil within the boys themselves",
      'The beast from the mountain',
      'A hunting trophy',
    ],
    correctIndex: 1,
    explanation:
      'The Lord of the Flies is the pig\'s head mounted on a stake as an offering. It "speaks" to Simon, taunting him: "Fancy thinking the Beast was something you could hunt and kill!" It represents the innate evil within humanity that cannot be externalised or destroyed.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'lof-10',
    question:
      'What is ironic about Jack saying "We\'ve got to have rules and obey them. After all, we\'re not savages"?',
    type: 'multiple-choice',
    options: [
      'Nothing — he means it sincerely',
      'Jack himself becomes the most savage character on the island, violating every rule he initially supported',
      'He is quoting someone else',
      'He never says this',
    ],
    correctIndex: 1,
    explanation:
      "The dramatic irony is devastating: Jack, who insists on rules in Chapter 2, becomes the embodiment of savagery by the novel's end, painting his face, leading ritual chants, and hunting Ralph to kill him.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'lof-11',
    question: 'What does Ralph weep for at the end of the novel?',
    type: 'multiple-choice',
    options: [
      'His parents',
      'Rescue',
      '"The end of innocence, the darkness of man\'s heart"',
      'His friend Jack',
    ],
    correctIndex: 2,
    explanation:
      'Ralph weeps for "the end of innocence, the darkness of man\'s heart, and the fall through the air of the true, wise friend called Piggy." Golding\'s closing judgement mourns not just the dead but the shared myth of childhood purity itself.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'lof-12',
    question: "How does Roger's character develop throughout the novel?",
    type: 'multiple-choice',
    options: [
      'He stays the same',
      'He begins by missing with stones on purpose (old-world restraint) but ends as a torturer and killer once civilisation falls away',
      'He becomes more kind',
      'He opposes Jack',
    ],
    correctIndex: 1,
    explanation:
      'Roger initially throws stones but misses on purpose because "the old world\'s" rules still restrain him. By the end, with civilisation gone, he tortures and kills without hesitation. He represents the removal of social constraints on innate cruelty.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'lof-13',
    question: "Why does Golding deliberately write against R.M. Ballantyne's The Coral Island?",
    type: 'multiple-choice',
    options: [
      'He disliked the writing style',
      'He rejects the Victorian myth that well-bred English boys are naturally civilised, arguing it is a comforting lie',
      'He wanted to write a sequel',
      'He had never read it',
    ],
    correctIndex: 1,
    explanation:
      "Ballantyne's The Coral Island (1857) showed stranded boys as cheerful, inventive, and Christian. Golding's reply is that those boys were a comforting lie. Lord of the Flies insists that civilisation is a thin paint that washes off, not an innate quality of the British upper class.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'lof-14',
    question: "What is the significance of Jack's face paint?",
    type: 'multiple-choice',
    options: [
      'It is camouflage for hunting',
      'It serves as a mask that liberates the boys from civilised identity and moral responsibility',
      'It is war paint for fun',
      'It protects against sunburn',
    ],
    correctIndex: 1,
    explanation:
      "The face paint functions as a mask that hides the boys' civilised identities. Behind the paint, they are freed from the moral accountability that comes with being known. It enables the descent into savagery by allowing the boys to act without personal responsibility.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'lof-15',
    question: 'What is the effect of the naval officer appearing at the end?',
    type: 'multiple-choice',
    options: [
      'It provides a happy ending',
      'It creates devastating irony: the adult who rescues them from savagery is himself part of a war, suggesting the adult world is no better',
      'It shows civilisation has returned',
      'It punishes the boys',
    ],
    correctIndex: 1,
    explanation:
      'The naval officer represents the "civilised" adult world, but he is fighting a war. His rescue is deeply ironic: the boys are saved from small-scale savagery by men engaged in large-scale savagery. Golding suggests the adult world is merely a bigger version of the island.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'lof-16',
    question: 'How does Golding use Simon as a Christ-like figure?',
    type: 'multiple-choice',
    options: [
      'Simon is religious',
      'He discovers the truth, tries to share it, and is killed by those he tries to save, mirroring the Passion',
      'He prays regularly',
      'He performs miracles',
    ],
    correctIndex: 1,
    explanation:
      "Simon alone discovers the truth about the beast, climbs the mountain (like a spiritual journey), and returns to share his revelation. He is killed by a frenzied mob — those he was trying to save. Golding stages the scene with religious imagery, and Simon's body drifts out to sea in a halo of light.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'lof-17',
    question: 'What does Golding suggest about the relationship between fear and power?',
    type: 'multiple-choice',
    options: [
      'Fear has no role',
      "Jack exploits the boys' fear of the beast to build his own power, showing that fear produces strongmen and destroys democracy",
      'Fear makes everyone equal',
      'Fear is always rational',
    ],
    correctIndex: 1,
    explanation:
      "Jack understands that fear and spectacle are more useful than argument. He exploits the boys' terror of the beast to position himself as their protector, destroying Ralph's democratic leadership. Golding warns that fear is the tool of authoritarianism.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'lof-18',
    question: "What is the significance of Piggy's glasses?",
    type: 'multiple-choice',
    options: [
      'They correct his vision',
      'They represent intellect, science, and the power to create fire (civilisation), and their theft marks the theft of reason',
      'They are a fashion accessory',
      'They represent weakness',
    ],
    correctIndex: 1,
    explanation:
      "Piggy's glasses are the only means of making fire, representing both intellectual power and civilised technology. When Jack's tribe steals them, they steal the power of reason and science from the democratic side, leaving Ralph's group literally and metaphorically in the dark.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'lof-19',
    question: "How did William Golding's wartime experience shape the novel?",
    type: 'multiple-choice',
    options: [
      'It did not affect him',
      'Serving in the Royal Navy during World War II convinced him that humans are not innately good, directly inspiring the novel',
      'He wrote it before the war',
      'The war made him optimistic',
    ],
    correctIndex: 1,
    explanation:
      'Golding served in the Royal Navy and participated in D-Day. He later said the war made it "impossible to believe that humans were innately good." Lord of the Flies grew directly from that disillusionment — it rejects liberal optimism about human nature.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'lof-20',
    question: 'Why do Sam and Eric (Samneric) eventually betray Ralph?',
    type: 'multiple-choice',
    options: [
      'They dislike him',
      'Fear turns decent, ordinary people into accomplices — they represent conformity under pressure',
      'They are bribed',
      'They agree with Jack',
    ],
    correctIndex: 1,
    explanation:
      'Sam and Eric, treated almost as one person, represent ordinary conformity. Their eventual betrayal of Ralph shows how fear turns decent people into accomplices. They do not want to join Jack but are too frightened to resist, reflecting how totalitarian regimes secure compliance.',
    topic: 'Characters',
    difficulty: 'higher',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Civilisation vs Savagery',
    summary:
      'Golding rejects the idea that civilisation is innate; he shows it as a thin veneer that washes away.',
    keyPoints: [
      "The conch represents democratic order; its shattering marks democracy's death",
      "Jack's face paint liberates the boys from civilised identity",
      'Rules and structures collapse quickly without enforcement',
      "The naval officer's rescue is ironic: adults are also at war",
      "Golding wrote against The Coral Island's optimistic Victorian view",
    ],
  },
  {
    topic: 'Innate Evil',
    summary: 'Golding argues that evil is part of human nature, not an external force.',
    keyPoints: [
      '"Maybe there is a beast... maybe it\'s only us" — Simon\'s insight',
      'The Lord of the Flies tells Simon the beast cannot be hunted or killed',
      'The "beast" on the mountain is just a dead man — the real beast is within',
      'Shaped by WWII: Golding lost faith in human goodness',
      "Roger's descent shows what happens when civilised restraints are removed",
    ],
  },
  {
    topic: 'Power and Leadership',
    summary: 'Ralph represents democracy; Jack represents authoritarianism fuelled by fear.',
    keyPoints: [
      'Ralph is elected democratically; Jack seizes power through force',
      'Jack exploits fear of the beast to build his authority',
      "Piggy's intelligence is dismissed because he lacks physical presence",
      'The conch gives way to the spear',
      'Fear produces strongmen and destroys democratic debate',
    ],
  },
  {
    topic: 'Loss of Innocence',
    summary: 'The boys begin in school uniforms and end naked, painted, and murderous.',
    keyPoints: [
      'The progression from games to hunting to murder',
      "Simon's death destroys the possibility of moral truth on the island",
      "Piggy's death destroys reason",
      "Ralph's tears mourn lost innocence itself",
      'The novel rejects the myth of childhood purity',
    ],
  },
  {
    topic: 'The Beast as Symbol',
    summary: 'The boys search for an external monster, but the beast is internal.',
    keyPoints: [
      'The littluns first report the beast',
      'The dead parachutist provides a false external explanation',
      'Simon alone understands the beast is within',
      'Jack uses the beast to consolidate power',
      "Golding makes this the novel's moral hinge",
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Golding present the conflict between civilisation and savagery in Lord of the Flies?',
  'How does Golding use the character of Simon to explore the nature of evil?',
  'How does Golding present the loss of innocence in Lord of the Flies?',
  'How does Golding use symbolism (the conch, the beast, the glasses) to convey meaning?',
  'How does Golding explore the theme of power and leadership?',
]

export default async function LordOfTheFliesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }
  const userBoardLabel = board ? (getBoardConfig(board)?.shortName ?? 'AQA') : 'AQA'

  return (
    <>
      <CourseJsonLd
        name="Lord of the Flies — Complete GCSE Study Guide"
        description="In-depth study guide for Lord of the Flies covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Lord of the Flies',
            url: 'https://theenglishhub.app/revision/texts/lord-of-the-flies',
          },
        ]}
      />
      <TextStudyHub
        textName="Lord of the Flies"
        textType="novel"
        examBoard={userBoardLabel}
        basePath="/revision/texts/lord-of-the-flies"
        subPages={[
          {
            id: 'chapters',
            href: '/revision/texts/lord-of-the-flies/chapters',
            icon: 'acts' as const,
            title: 'Chapter-by-Chapter',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/lord-of-the-flies/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/lord-of-the-flies/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/lord-of-the-flies/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/lord-of-the-flies/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/lord-of-the-flies/essay-plans',
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
          'How does Golding present the conflict between civilisation and savagery?',
          'How does Golding use the character of Simon to explore the nature of evil?',
          'How does Golding present the loss of innocence in Lord of the Flies?',
          'How does Golding use symbolism to convey his message about human nature?',
          'How does Golding explore the theme of power and leadership?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Lord of the Flies"
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
