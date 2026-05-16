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
    title: 'Jane Eyre revision guide — themes, characters, key quotes — The English Hub',
    description: 'Jane Eyre GCSE revision — Charlotte Brontë',
  },
  title: 'Jane Eyre revision guide — themes, characters, key quotes',
  description:
    "Jane Eyre GCSE revision — Charlotte Brontë's Gothic bildungsroman by chapter with key quotes. Aligned to AQA, OCR and Edexcel International A Level.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/jane-eyre',
  },
}

const data: TextGuideData = {
  title: 'Jane Eyre',
  author: 'Charlotte Bront\u00eb',
  year: '1847',
  category: 'Novel',
  badge: 'AQA / OCR / Eduqas',
  intro:
    "Charlotte Bront\u00eb's groundbreaking novel follows the orphan Jane Eyre from a cruel childhood through her education at the harsh Lowood school to her position as governess at Thornfield Hall, where she falls in love with the brooding Mr Rochester. A passionate exploration of independence, morality, class and gender, Jane Eyre shocked Victorian readers with its fierce first-person voice and its insistence that a plain, poor woman could be the equal of any man.",
  quickInfo: {
    genre: 'Gothic romance / Bildungsroman',
    setting: 'Northern England, early 19th century',
    length: '~188,000 words, 38 chapters',
    published: '1847 (as "Currer Bell")',
  },
  plotSummary: [
    'Jane Eyre is an orphan raised by her cruel aunt, Mrs Reed, at Gateshead Hall. Bullied by her cousin John and locked in the terrifying Red Room, Jane is sent away to Lowood Institution, a charity school. There she endures cold, hunger and the tyranny of Mr Brocklehurst, but also finds friendship with Helen Burns and the mentorship of Miss Temple. Helen dies of consumption, and Jane stays at Lowood for eight years before advertising for a position as governess.',

    'Jane is hired to teach Ad\u00e8le Varens at Thornfield Hall, the estate of the mysterious Mr Rochester. She and Rochester develop an intense intellectual and emotional bond, despite the vast differences in their age, wealth and social position. Jane hears strange laughter echoing from the third floor but is told it comes from a servant, Grace Poole. Rochester proposes marriage, and Jane accepts with joy.',

    'On the wedding day, the ceremony is halted by the revelation that Rochester is already married. His wife, Bertha Mason, is alive and imprisoned in the attic of Thornfield, driven mad. Rochester begs Jane to stay with him, but she refuses to compromise her principles and flees in the night with nothing.',

    'Jane nearly dies of starvation before being taken in by the Rivers family. She discovers they are her cousins and inherits a fortune from a shared uncle, which she divides equally among them. St John Rivers proposes a loveless marriage to take her to India as a missionary. Jane almost agrees but hears Rochester\'s voice calling her across the moors. She returns to find Thornfield burned down by Bertha, who died in the fire. Rochester, now blind and maimed, is humbled but free. They marry as equals, and Jane declares: "Reader, I married him."',
  ],
  characters: [
    {
      name: 'Jane Eyre',
      role: 'Protagonist and narrator',
      body: 'Plain, poor and fiercely independent, Jane insists on her moral and emotional equality with everyone she meets. She refuses to be defined by her class, her appearance or her gender, making her one of the most revolutionary heroines in Victorian fiction.',
    },
    {
      name: 'Mr Rochester',
      role: 'Master of Thornfield Hall',
      body: "Dark, brooding and morally flawed, Rochester is trapped by a secret marriage and drawn to Jane's honesty and spirit. His attempted bigamy is a grave sin, but Bront\u00eb allows him redemption through suffering and genuine transformation.",
    },
    {
      name: 'Bertha Mason',
      role: "Rochester's first wife, imprisoned in the attic",
      body: "Bertha is the novel's most controversial figure. She is depicted as mad and violent, but modern readings see her as a victim of patriarchy and colonialism, locked away by a husband who married her for money and then refused to acknowledge her humanity.",
    },
    {
      name: 'St John Rivers',
      role: "Clergyman and Jane's cousin",
      body: "Handsome, cold and relentlessly dutiful, St John represents a form of religious devotion that suppresses human feeling. His proposal to Jane is the opposite of Rochester's: where Rochester offered passion without principle, St John offers principle without love.",
    },
    {
      name: 'Helen Burns',
      role: "Jane's friend at Lowood",
      body: 'Patient, spiritual and resigned to suffering, Helen teaches Jane the value of endurance and forgiveness. Her death from illness embodies the injustice of the Victorian treatment of the poor.',
    },
  ],
  themes: [
    {
      title: 'Independence and self-respect',
      body: "Jane's defining quality is her refusal to sacrifice her dignity for comfort or love. She leaves Rochester rather than become his mistress and refuses St John rather than enter a loveless marriage. Bront\u00eb insists that moral independence is more important than happiness.",
    },
    {
      title: 'Class and social position',
      body: "Jane occupies an awkward position between the servants and the gentry. She is educated but poor, genteel but dependent. The novel challenges class boundaries by insisting that moral worth, not birth or wealth, determines a person's value.",
    },
    {
      title: 'Gender and equality',
      body: 'Jane\'s famous declaration that women "feel just as men feel" was radical in 1847. The novel consistently challenges the Victorian expectation that women should be passive, submissive and decorative, presenting Jane\'s anger and desire as legitimate and powerful.',
    },
    {
      title: 'Religion and morality',
      body: "Bront\u00eb contrasts several models of Christianity: Brocklehurst's cruel hypocrisy, Helen's patient submission, St John's cold duty, and Jane's personal faith that balances conscience with compassion.",
    },
    {
      title: 'The Gothic and the supernatural',
      body: "Bront\u00eb uses Gothic conventions, including the Red Room, the madwoman in the attic, mysterious fires and the disembodied voice across the moors, to externalise Jane's inner emotional life and to challenge the boundaries of realism.",
    },
  ],
  historicalContext: [
    "Charlotte Bront\u00eb published Jane Eyre in 1847 under the male pseudonym Currer Bell. Women writers faced significant prejudice, and the Bront\u00eb sisters all used androgynous pen names to ensure their work was judged on its merits. When the novel's authorship was revealed, critics were scandalised by its passionate tone and its heroine's insistence on emotional equality.",

    "The novel draws on Bront\u00eb's own experiences. She and her sisters attended the Clergy Daughters\u2019 School at Cowan Bridge, where conditions were harsh and two of her older sisters died of illness, reflected in the Lowood sections. Bront\u00eb also worked as a governess, experiencing the ambiguous social position that Jane occupies.",

    'Victorian England offered women few options beyond marriage, governessing or dependence on relatives. The novel\'s exploration of female independence was revolutionary. Jane\'s declaration, "I am no bird; and no net ensnares me," became a touchstone for feminist thought.',

    "The treatment of Bertha Mason reflects Victorian attitudes toward race, colonialism and mental illness. Rochester's Jamaican wife has been the subject of extensive postcolonial criticism, most notably in Jean Rhys's novel Wide Sargasso Sea (1966), which retells the story from Bertha's perspective.",
  ],
  quotations: [
    {
      quote:
        '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
      who: 'Jane — Chapter 23',
      analysis:
        "Jane's most famous declaration of independence. She asserts her freedom and equality at the moment Rochester first proposes.",
    },
    {
      quote: '"Reader, I married him."',
      who: 'Jane — Chapter 38',
      analysis:
        "The novel's iconic closing line. Jane addresses the reader directly, asserting her agency: she married him, not the other way around.",
    },
    {
      quote:
        '"Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?"',
      who: 'Jane — Chapter 23',
      analysis:
        'Jane challenges Rochester and the class system in a single breath, insisting that inner worth has nothing to do with outward appearance or social rank.',
    },
    {
      quote:
        '"Women feel just as men feel; they need exercise for their faculties, and a field for their efforts."',
      who: 'Jane — Chapter 12',
      analysis:
        'A direct challenge to Victorian gender ideology. Bront\u00eb insists that women have the same intellectual and emotional needs as men.',
    },
    {
      quote:
        '"I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself."',
      who: 'Jane — Chapter 27',
      analysis:
        "Jane's resolution when she leaves Rochester. Self-respect trumps love, comfort and security.",
    },
    {
      quote: '"Laws and principles are not for the times when there is no temptation."',
      who: 'Jane — Chapter 27',
      analysis:
        "Jane recognises that morality is only meaningful when it costs something. This is her answer to Rochester's plea that she stay.",
    },
    {
      quote: '"I would always rather be happy than dignified."',
      who: 'Jane — Chapter 24',
      analysis:
        "A quieter declaration of Jane's values. She prizes genuine feeling over social propriety.",
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'je-1',
    question: 'Where does Jane grow up as a child?',
    type: 'multiple-choice',
    options: [
      'Thornfield Hall',
      'Lowood Institution',
      'Gateshead Hall with her cruel aunt Mrs Reed',
      'Moor House',
    ],
    correctIndex: 2,
    explanation:
      'Jane is an orphan raised by her cruel aunt Mrs Reed at Gateshead Hall. Bullied by her cousin John and locked in the terrifying Red Room, her early suffering shapes her fierce independence.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'je-2',
    question: "What is Jane's position at Thornfield Hall?",
    type: 'multiple-choice',
    options: ['Housekeeper', 'Governess', 'Cook', "Lady's maid"],
    correctIndex: 1,
    explanation:
      'Jane is hired as governess to Adele Varens at Thornfield Hall. This position places her in an ambiguous social class — educated but dependent, genteel but a servant.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'je-3',
    question: 'Who is the master of Thornfield Hall?',
    type: 'multiple-choice',
    options: ['St John Rivers', 'Mr Brocklehurst', 'Mr Rochester', 'Mr Reed'],
    correctIndex: 2,
    explanation:
      'Mr Rochester is the brooding, morally complex master of Thornfield Hall. He and Jane develop an intense intellectual and emotional bond despite vast differences in age, wealth, and social position.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'je-4',
    question: 'Why is the wedding between Jane and Rochester halted?',
    type: 'multiple-choice',
    options: [
      'Jane changes her mind',
      'Rochester is already married to Bertha Mason, who is alive in the attic',
      'Mrs Reed forbids it',
      'St John objects',
    ],
    correctIndex: 1,
    explanation:
      'The ceremony is halted by the revelation that Rochester is already married. His wife Bertha Mason is alive and imprisoned in the third floor of Thornfield, driven mad.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'je-5',
    question: "What is Jane's famous declaration of independence?",
    type: 'multiple-choice',
    options: [
      '"Reader, I married him"',
      '"I am no bird; and no net ensnares me"',
      '"I care for myself"',
      '"Women feel just as men feel"',
    ],
    correctIndex: 1,
    explanation:
      '"I am no bird; and no net ensnares me: I am a free human being with an independent will." Jane asserts her freedom and equality at the moment Rochester first proposes, establishing her refusal to be defined by class, appearance, or gender.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'je-6',
    question: 'What happens to Thornfield Hall?',
    type: 'multiple-choice',
    options: [
      'It is sold',
      'Bertha sets it on fire, dying in the blaze, and Rochester is blinded and maimed',
      'It is inherited by Jane',
      'Nothing',
    ],
    correctIndex: 1,
    explanation:
      'Bertha burns down Thornfield Hall and dies in the fire. Rochester, who tried to rescue her, is left blind and maimed. This humbles him and makes possible his marriage to Jane as equals.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'je-7',
    question: 'Who proposes a loveless marriage to Jane after she leaves Thornfield?',
    type: 'multiple-choice',
    options: ['Mr Brocklehurst', 'St John Rivers', 'Mr Rochester again', 'John Reed'],
    correctIndex: 1,
    explanation:
      "St John Rivers, a clergyman and Jane's cousin, proposes a loveless marriage to take her to India as a missionary. He represents principle without passion — the opposite of Rochester's offer of passion without principle.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'je-8',
    question: 'What is the significance of "Reader, I married him"?',
    type: 'multiple-choice',
    options: [
      'It is a simple statement',
      'Jane addresses the reader directly, asserting her agency: she married him, not the other way around',
      'It shows she is passive',
      'Rochester proposed again',
    ],
    correctIndex: 1,
    explanation:
      'The novel\'s iconic closing line has Jane addressing the reader directly and placing herself as the active agent: "I married him" — not "he married me." This asserts her agency and independence to the very last line.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'je-9',
    question: 'How does the Red Room function symbolically?',
    type: 'multiple-choice',
    options: [
      'It is just a room',
      "It represents Jane's entrapment, rage, and the patriarchal oppression she will spend her life resisting",
      'It represents safety',
      'It foreshadows Thornfield',
    ],
    correctIndex: 1,
    explanation:
      "The Red Room at Gateshead, where Jane is locked as punishment, represents her entrapment by a patriarchal system that denies her voice and freedom. It also introduces the Gothic supernatural (she imagines her uncle's ghost) that recurs throughout the novel.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'je-10',
    question: 'What does Helen Burns teach Jane?',
    type: 'multiple-choice',
    options: [
      'Mathematics',
      'The value of endurance, forgiveness, and spiritual faith',
      'How to escape Lowood',
      'How to be assertive',
    ],
    correctIndex: 1,
    explanation:
      "Helen Burns, patient and spiritual, teaches Jane the value of endurance and forgiveness. Her death from consumption embodies the injustice of Victorian treatment of the poor and tempers Jane's rage with a capacity for restraint.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'je-11',
    question: "Why does Jane refuse to stay as Rochester's mistress?",
    type: 'multiple-choice',
    options: [
      'She does not love him',
      'She refuses to compromise her self-respect and moral principles, even for love',
      'She fears Bertha',
      'She wants more money',
    ],
    correctIndex: 1,
    explanation:
      '"I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself." Jane refuses to sacrifice her principles for comfort or love, insisting that self-respect is more important than happiness.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'je-12',
    question: 'How does Bronte present Bertha Mason?',
    type: 'multiple-choice',
    options: [
      'As a fully sympathetic character',
      'As mad and violent, but modern readings see her as a victim of patriarchy and colonialism',
      'As a minor character',
      "As Rochester's true love",
    ],
    correctIndex: 1,
    explanation:
      "Bertha is depicted as mad and violent, but modern postcolonial readings (notably Jean Rhys's Wide Sargasso Sea) reinterpret her as a victim locked away by a husband who married her for money. She is the novel's most contested figure.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'je-13',
    question: 'What was radical about Jane\'s declaration that "women feel just as men feel"?',
    type: 'multiple-choice',
    options: [
      'Nothing — it was common',
      'It directly challenged Victorian gender ideology that expected women to be passive and submissive',
      'It was about medicine',
      'It was sarcastic',
    ],
    correctIndex: 1,
    explanation:
      'In 1847, this was a revolutionary statement. Victorian ideology expected women to be passive, submissive, and decorative. Jane\'s insistence that women "need exercise for their faculties, and a field for their efforts" challenged the entire gender order.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'je-14',
    question: 'How does Bronte contrast different models of religion in the novel?',
    type: 'multiple-choice',
    options: [
      'All religion is presented positively',
      "She contrasts Brocklehurst's hypocrisy, Helen's patient submission, St John's cold duty, and Jane's personal faith",
      'Religion is not important',
      'Only one type of religion appears',
    ],
    correctIndex: 1,
    explanation:
      "Bronte presents four models: Brocklehurst's cruel, hypocritical Christianity; Helen Burns's patient, self-sacrificing faith; St John's cold, rigid duty; and Jane's personal faith that balances conscience with compassion. Jane's is the only one the novel endorses.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'je-15',
    question: 'Why did Charlotte Bronte publish under the pseudonym "Currer Bell"?',
    type: 'multiple-choice',
    options: [
      'She preferred a pen name',
      'Women writers faced severe prejudice and used androgynous names to ensure their work was judged on its merits',
      'It was required by her publisher',
      'She was hiding from her family',
    ],
    correctIndex: 1,
    explanation:
      "All three Bronte sisters used androgynous pen names (Currer, Ellis, Acton Bell) because women writers faced significant prejudice. When Jane Eyre's authorship was revealed, critics were scandalised by its passionate tone and its heroine's insistence on equality.",
    topic: 'Context',
    difficulty: 'higher',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Independence and Self-Respect',
    summary: "Jane's defining quality is her refusal to sacrifice dignity for comfort or love.",
    keyPoints: [
      '"I am no bird; and no net ensnares me"',
      'She leaves Rochester rather than become his mistress',
      'She refuses St John rather than enter a loveless marriage',
      '"I care for myself" — self-respect trumps everything',
      'Bronte insists moral independence is more important than happiness',
    ],
  },
  {
    topic: 'Class and Social Position',
    summary: 'Jane occupies an ambiguous position between servants and gentry.',
    keyPoints: [
      'Educated but poor, genteel but dependent',
      '"Do you think, because I am poor, obscure, plain, and little, I am soulless?"',
      'The governess role places Jane between two worlds',
      'The novel insists moral worth determines value, not birth or wealth',
      "Jane's inheritance levels the playing field with Rochester",
    ],
  },
  {
    topic: 'Gender and Equality',
    summary: "Jane's insistence that women feel and need as men do was radical in 1847.",
    keyPoints: [
      '"Women feel just as men feel; they need exercise for their faculties"',
      "Jane's anger and desire are presented as legitimate",
      '"Reader, I married him" — Jane as active agent',
      'The Red Room represents patriarchal entrapment',
      "St John's proposal would suppress Jane's identity in service to duty",
    ],
  },
  {
    topic: 'Religion and Morality',
    summary:
      "Bronte contrasts four models of Christianity and endorses only Jane's personal faith.",
    keyPoints: [
      'Brocklehurst: cruel hypocrisy',
      'Helen Burns: patient submission',
      'St John Rivers: cold, rigid duty',
      'Jane: conscience balanced with compassion',
      '"Laws and principles are not for the times when there is no temptation"',
    ],
  },
  {
    topic: 'The Gothic and Supernatural',
    summary: "Bronte uses Gothic conventions to externalise Jane's inner emotional life.",
    keyPoints: [
      'The Red Room: confinement and childhood terror',
      'Bertha in the attic: the madwoman as Gothic archetype',
      'Strange laughter, mysterious fires',
      "Rochester's voice calling across the moors",
      'The Gothic challenges realism and expresses what polite society cannot',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Bronte present the theme of independence and self-respect in Jane Eyre?',
  'How does Bronte explore the theme of class and social position?',
  'How does Bronte present Jane as a feminist heroine?',
  'How does Bronte use Gothic elements to enhance the narrative?',
  'How does Bronte contrast different models of religion in the novel?',
]

export default async function JaneEyrePage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }
  const userBoardLabel = board ? (getBoardConfig(board)?.shortName ?? 'AQA') : 'AQA'

  return (
    <>
      <LearningResourceJsonLd
        name="Jane Eyre — Complete GCSE Study Guide"
        description="In-depth study guide for Jane Eyre covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        about="Jane Eyre"
        url="https://theenglishhub.app/revision/texts/jane-eyre"
      />
      <CourseJsonLd
        name="Jane Eyre — Complete GCSE Study Guide"
        description="In-depth study guide for Jane Eyre covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Jane Eyre', url: 'https://theenglishhub.app/revision/texts/jane-eyre' },
        ]}
      />
      <TextStudyHub
        textName="Jane Eyre"
        textType="novel"
        examBoard={userBoardLabel}
        basePath="/revision/texts/jane-eyre"
        subPages={[
          {
            id: 'chapters',
            href: '/revision/texts/jane-eyre/chapters',
            icon: 'acts' as const,
            title: 'Chapter-by-Chapter',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/jane-eyre/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/jane-eyre/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/jane-eyre/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'essays',
            href: '/revision/texts/jane-eyre/essay-plans',
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
          'How does Bront\u00eb present the theme of independence and self-respect in Jane Eyre?',
          'How does Bront\u00eb explore the theme of class and social position?',
          'How does Bront\u00eb present Jane as a feminist heroine?',
          'How does Bront\u00eb use Gothic elements to enhance the narrative?',
          'How does Bront\u00eb contrast different models of religion in the novel?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Jane Eyre"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Jane Eyre</em> (1847) by Charlotte Bront&euml; is in the public domain. Quotations are
        reproduced freely.
      </p>
    </>
  )
}
