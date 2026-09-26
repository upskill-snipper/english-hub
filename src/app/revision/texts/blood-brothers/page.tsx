import type { Metadata } from 'next'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide as studyGuide } from '@/data/study-guides/blood-brothers'
export const metadata: Metadata = {
  openGraph: {
    title: 'Blood Brothers GCSE revision - themes, characters, quotes',
    description: 'Blood Brothers GCSE revision - Willy Russell',
    images: [
      {
        url: '/api/og?title=Blood+Brothers+GCSE+revision+-+themes%2C+characters%2C+quotes',
        width: 1200,
        height: 630,
        alt: 'Blood Brothers GCSE revision - themes, characters, quotes',
      },
    ],
  },
  title: 'Blood Brothers GCSE revision - themes, characters, quotes',
  description:
    "Blood Brothers GCSE revision - Willy Russell's musical play act-by-act with characters, themes, key quotes and essay plans. Aligned to Edexcel and Eduqas.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/blood-brothers',
  },
}

/*
 * Corrected 26 September 2026 against the verified guide (src/data/study-guides/blood-brothers.ts)
 * and an exact-phrase search of three printings (Methuen Student Edition, Methuen 1986 collection,
 * Samuel French 1985). What was wrong, so it is not reintroduced here or on the subpages:
 * - this page (five places) and the themes subpage said that Russell names Margaret Thatcher in
 *   the play; a full-text search finds the name in none of the three printings;
 * - quoted lines from the Narrator's song Madman and from Easy Terms were presented as speech (no
 *   lyric is quoted on the site), and the Narrator's sung shoes line was credited to Mrs Johnstone;
 * - a four-word line to Linda was placed after prison, with Mickey on antidepressants; a full-text
 *   search found it in neither Methuen printing, and in the 1985 printing no mention of tablets
 *   or a councillor comes within 200 words of it (the first writer places it with the teenage
 *   Mickey, early in Act 2);
 * - Mickey's recited speech about Sammy was called a song, and quiz bb-9 cited it as one;
 * - the badge left out AQA, which prescribes the play (see src/lib/board/set-texts.ts);
 * - "published 1983" was the year of the first performance; the Samuel French edition is 1985;
 * - the copyright is Willy Russell's own, not Methuen's on his behalf.
 */
const data: TextGuideData = {
  slug: 'blood-brothers',
  title: 'Blood Brothers',
  author: 'Willy Russell',
  year: 'first staged 1983',
  category: 'Play',
  badge: 'AQA / Edexcel / Eduqas',
  intro:
    "Willy Russell's musical play tells the story of twin brothers separated at birth - one raised in poverty by their biological mother Mrs Johnstone, the other in wealth by Mrs Lyons. Framed by a Narrator who speaks of superstition and fate, Blood Brothers is a ballad about class, love and the predictable ending of a society that refuses to care for everyone equally.",
  quickInfo: {
    genre: 'Musical play / Social tragedy',
    setting: 'Liverpool, 1960s to early 1980s',
    length: 'Two-act play with songs',
    published: '1985 (the musical was first staged in 1983)',
  },
  plotSummary: [
    'Mrs Johnstone, a working-class Liverpool mother already raising seven children, discovers she is pregnant with twins. Her employer Mrs Lyons, childless and desperate, persuades her to give up one of the babies. They swear on a Bible, and Mrs Lyons invents a superstition that twins separated at birth must die the moment they learn the truth. Mrs Lyons keeps Edward; Mrs Johnstone raises Mickey.',
    'Seven years later, Mickey and Edward meet by chance, become instant best friends and, not knowing the truth, declare themselves blood brothers. Their friendship crosses the class line that their mothers have drawn, and Russell uses their innocence to expose how absurd and brutal that line really is. The Lyons family moves to the countryside to keep Edward away from Mickey.',
    'In a middle section built on songs and montages, the boys grow up. Mickey works in a factory and marries his childhood sweetheart Linda; Edward goes to university. When Mickey loses his job, gets drawn into a robbery with his older brother Sammy, and is sent to prison, his world collapses. Released depressed and on medication, he struggles to rebuild his life.',
    'Edward, now a local councillor, tries to help Mickey and Linda. When Mickey learns that Edward and Linda have been spending time together, he takes a gun to the town hall. Mrs Johnstone arrives and tells both sons the truth: they are twins. Mickey, shattered by the revelation that everything could have been different, accidentally shoots Edward, and the police shoot Mickey. Mrs Lyons\u2019s superstition is fulfilled.',
  ],
  characters: [
    {
      name: 'Mrs Johnstone',
      role: 'Biological mother of both boys',
      body: 'Warm, funny, exhausted and trapped, Mrs Johnstone is Russell\u2019s portrait of working-class motherhood under Thatcherism. Her opening and closing songs frame the entire play as her testimony.',
    },
    {
      name: 'Mrs Lyons',
      role: 'Middle-class adoptive mother',
      body: 'Lonely, infertile and increasingly unhinged, Mrs Lyons uses class privilege to claim a child she did not bear. Russell refuses simple villainy: her grief is real, and her descent into paranoia is tragic in its own right.',
    },
    {
      name: 'Mickey Johnstone',
      role: 'The twin raised in poverty',
      body: 'Cheeky and bright as a child, ground down by unemployment and prison as an adult, Mickey embodies the play\u2019s argument that environment, not character, decides outcomes.',
    },
    {
      name: 'Edward Lyons',
      role: 'The twin raised in wealth',
      body: 'Edward is kind and bookish, but his privilege is unmistakable. Russell carefully shows how the same warmth is read as naive in Edward and stupid in Mickey, simply because of accent and address.',
    },
    {
      name: 'Linda',
      role: 'Mickey\u2019s wife',
      body: 'Feisty and loyal, Linda grows up alongside the boys and marries Mickey. Her slow despair as Mickey disappears into depression is one of the play\u2019s most quietly devastating arcs.',
    },
    {
      name: 'The Narrator',
      role: 'Choric commentator',
      body: 'A brooding, almost supernatural figure who threads the play together with songs and warnings about the Devil. He embodies the play\u2019s sense of class-driven fate.',
    },
  ],
  themes: [
    {
      title: 'Class and inequality',
      body: 'Russell\u2019s core argument is that the same child will have a radically different life depending on which side of the class line they land on. The play dramatises this as a controlled experiment with two boys who are literally identical.',
    },
    {
      title: 'Fate and superstition',
      body: 'The Narrator and Mrs Lyons both invoke superstition, but Russell uses it to critique a society that prefers to blame fate for problems of its own making. The real curse is unemployment and prejudice.',
    },
    {
      title: 'Friendship and identity',
      body: 'Mickey and Edward\u2019s bond is genuine and unselfconscious. Russell uses their friendship to show that the differences our society treats as essential are almost entirely learned.',
    },
    {
      title: 'Motherhood',
      body: 'Both mothers love both boys in different ways, and Russell refuses to simply condemn either. Mrs Johnstone\u2019s sacrificial love and Mrs Lyons\u2019s possessive love both produce catastrophe.',
    },
    {
      title: 'Thatcher\u2019s Britain',
      body: 'The musical opened in Liverpool in 1983, a year after UK unemployment passed three million, with Margaret Thatcher as Prime Minister. The play never names Thatcher, but it makes the economic collapse of Mickey\u2019s world explicit and political.',
    },
  ],
  historicalContext: [
    'Willy Russell grew up in working-class Liverpool and wrote Blood Brothers first as a school play in 1981, then as a musical in 1983. The play draws directly on his own city: its streets, its speech, its humour and the slow economic disaster that engulfed it in the decade after his own childhood.',
    'Liverpool in the 1970s and 1980s was devastated by industrial decline and mass unemployment. Factories closed, docks shrank, and the Toxteth riots of 1981 marked a flashpoint in national anger. Mickey\u2019s trajectory - young worker to unemployed to depressed and imprisoned - tracks the experience of many real families.',
    'The play never names Margaret Thatcher, but it opened in 1983 under her government, whose monetarist policies were widely blamed for accelerating deindustrialisation in cities like Liverpool, and the tone of Blood Brothers is one of controlled political fury dressed up as a pop musical.',
    'The play belongs to a tradition of British social-realist drama that includes Shelagh Delaney\u2019s A Taste of Honey and Alan Bleasdale\u2019s Boys from the Blackstuff. Russell\u2019s innovation is marrying that tradition to the accessibility of popular musical theatre.',
  ],
  quotations: [
    {
      quote:
        "[Mrs Johnstone's closing song, Tell Me It's Not True: the lyric is not reproduced here]",
      who: 'Mrs Johnstone - final song',
      analysis:
        "The haunting refrain that closes the play, asking the audience to refuse the tragedy's inevitability.",
    },
    {
      quote: '"So did y’ hear the story of the Johnstone twins?"',
      who: 'Narrator - opening',
      analysis: 'Frames the whole play as a ballad foretold, priming the audience for tragedy.',
    },
    {
      quote: '"And do we blame superstition for what came to pass?"',
      who: 'Narrator - final speech',
      analysis:
        'The Narrator\u2019s closing question hands the verdict to the audience and asks them to look past fate for the real cause.',
    },
    {
      quote: '"I could have been... I could have been him!"',
      who: 'Mickey - final scene',
      analysis:
        'Mickey\u2019s cry of class-rage at the climax, spoken just before the accidental shooting. The play\u2019s thesis in ordinary speech.',
    },
    {
      quote: '"I wish I was our Sammy."',
      who: 'Mickey - Act 1',
      analysis:
        'A childhood speech, marked in the script as recited, about wanting to be older. Russell uses it to track how innocence is stolen.',
    },
    {
      quote:
        "[The Narrator's refrain warning that the devil has come to collect: the lyric is not reproduced here]",
      who: 'Narrator - refrain',
      analysis:
        'The play\u2019s superstitious language, which Russell repurposes to critique a fatalistic society.',
    },
    {
      quote: '"You sorted it out. You an’ Councillor Eddie Lyons."',
      who: 'Mickey to Linda - Act 2',
      analysis:
        'Mickey has learned that the house and his job came through Edward, now a councillor. The favour humiliates him, and his bitterness drives the marriage towards the ending.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'bb-1',
    question: 'Who is the biological mother of both Mickey and Edward?',
    type: 'multiple-choice',
    options: ['Mrs Lyons', 'Mrs Johnstone', 'Linda', 'The Narrator'],
    correctIndex: 1,
    explanation:
      'Mrs Johnstone is the biological mother of both twins. She gives Edward away to her employer Mrs Lyons because she already has seven children and cannot afford to raise twins.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'bb-2',
    question: 'Where is the play set?',
    type: 'multiple-choice',
    options: ['London', 'Manchester', 'Liverpool', 'Birmingham'],
    correctIndex: 2,
    explanation:
      "Blood Brothers is set in Liverpool, which was devastated by industrial decline and mass unemployment in the 1970s and 1980s. Russell grew up in working-class Liverpool and draws directly on the city's experience.",
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'bb-3',
    question: 'What superstition does Mrs Lyons invent?',
    type: 'multiple-choice',
    options: [
      'Twins bring bad luck',
      'Separated twins must die the moment they learn the truth',
      'Twins should never marry',
      'Twins cannot be friends',
    ],
    correctIndex: 1,
    explanation:
      'Mrs Lyons invents the superstition that if separated twins learn the truth, "they shall both immediately die". She uses this to control Mrs Johnstone and prevent her from revealing the secret. Russell uses this superstition to critique a society that blames fate for problems of its own making.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'bb-4',
    question: 'How do Mickey and Edward first meet?',
    type: 'multiple-choice',
    options: [
      'At school',
      'By chance at age seven, becoming instant best friends',
      'At a football match',
      'Through their mothers',
    ],
    correctIndex: 1,
    explanation:
      'Mickey and Edward meet by chance at age seven and become instant best friends. Their innocent friendship crosses the class line their mothers have drawn, exposing how absurd and artificial that line really is.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'bb-5',
    question: "What is the Narrator's role in the play?",
    type: 'multiple-choice',
    options: [
      "He is Mickey's friend",
      'He is a brooding, almost supernatural figure who threads the play together with warnings',
      'He is a teacher',
      "He is Edward's father",
    ],
    correctIndex: 1,
    explanation:
      "The Narrator is a choric commentator who drives the rising sense of doom with songs and warnings about the Devil. He embodies the play's sense of class-driven fate and asks whether the tragedy was inevitable.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'bb-6',
    question: 'What happens to Mickey as an adult?',
    type: 'multiple-choice',
    options: [
      'He becomes wealthy',
      'He goes to university',
      'He loses his job, gets involved in a robbery, and is sent to prison',
      'He moves to London',
    ],
    correctIndex: 2,
    explanation:
      "Mickey works in a factory, loses his job, gets drawn into a robbery with his brother Sammy, and is sent to prison. Released depressed and on medication, he embodies Russell's argument that class determines life outcomes.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'bb-7',
    question: 'What has Edward done by the time Mickey comes out of prison?',
    type: 'multiple-choice',
    options: [
      'He has been to prison too',
      'He has been to university and become a local councillor',
      'He has moved abroad',
      'He has joined the army',
    ],
    correctIndex: 1,
    explanation:
      "Edward was already at university when Mickey lost his job, and by the time Mickey is released he is a local councillor. The contrast with Mickey's trajectory is the play's core argument: identical twins with identical potential have radically different lives because of class.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'bb-8',
    question: 'What is Mickey expressing when he says "I could have been him" at the climax?',
    type: 'multiple-choice',
    options: [
      'He is comparing their heights',
      'He is expressing rage at the class system that gave Edward everything and him nothing',
      'He is talking about their different haircuts',
      'He wants to be younger',
    ],
    correctIndex: 1,
    explanation:
      "Mickey's anguished line 'I could have been... I could have been him!' distils the play's thesis at the climax. He is expressing the unbearable realisation that an identical twin was given wealth, education, and opportunity simply because of which mother raised him. It is pure class-rage.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'bb-9',
    question: 'How does Russell use the structure of a musical to convey his political message?',
    type: 'multiple-choice',
    options: [
      'The songs are purely entertainment',
      'Songs and montages compress time and make the political argument accessible and emotionally powerful',
      'The music is incidental',
      'The songs replace dialogue',
    ],
    correctIndex: 1,
    explanation:
      'Russell marries social-realist drama to the accessibility of musical theatre. Songs such as Marilyn Monroe, which returns as the years pass, and the closing Tell Me It\u2019s Not True compress time, build emotional investment, and make the political argument about class accessible to a wide audience.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'bb-10',
    question: 'What is the significance of Sammy in the play?',
    type: 'multiple-choice',
    options: [
      'He is a positive role model',
      'He represents the criminal path that poverty and lack of opportunity push young men towards',
      "He is Edward's friend",
      'He has no significance',
    ],
    correctIndex: 1,
    explanation:
      "Sammy, Mickey's older brother, represents the criminal path that poverty creates. When Mickey is desperate and unemployed, Sammy draws him into robbery. Russell shows how lack of opportunity and social neglect produce crime.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'bb-11',
    question: 'Why does Mrs Lyons become increasingly paranoid throughout the play?',
    type: 'multiple-choice',
    options: [
      'She is naturally anxious',
      'Her guilt over taking Edward and fear of the truth being revealed drive her to paranoia',
      'She has a medical condition',
      'She dislikes Mrs Johnstone',
    ],
    correctIndex: 1,
    explanation:
      "Mrs Lyons's guilt over taking Edward and her terror that the truth will emerge drive her to move house and eventually try to attack Mrs Johnstone. Russell shows that her descent into paranoia is tragic, refusing simple villainy.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'bb-12',
    question: 'Who was Prime Minister when the musical opened in Liverpool in 1983?',
    type: 'multiple-choice',
    options: ['Tony Blair', 'Margaret Thatcher', 'Winston Churchill', 'Harold Wilson'],
    correctIndex: 1,
    explanation:
      "Margaret Thatcher was Prime Minister from 1979 to 1990. The play never names her, but her government's monetarist policies were widely blamed for accelerating deindustrialisation in cities like Liverpool. Mickey's trajectory mirrors the experience of thousands of families under Thatcherism.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'bb-13',
    question: 'How does Russell present the friendship between Mickey and Edward as children?',
    type: 'multiple-choice',
    options: [
      'As competitive and hostile',
      'As genuine, innocent, and unselfconscious - proving that class differences are learned, not innate',
      'As formal and distant',
      'As one-sided',
    ],
    correctIndex: 1,
    explanation:
      'As children, Mickey and Edward\'s bond is genuine and unselfconscious. They become "blood brothers" without knowing they are biological brothers. Russell uses their innocent friendship to show that the differences society treats as essential are almost entirely learned.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'bb-14',
    question: 'What happens in the final scene of the play?',
    type: 'multiple-choice',
    options: [
      'The twins reconcile',
      'Mickey accidentally shoots Edward after learning the truth, then police shoot Mickey',
      'Mrs Johnstone saves both boys',
      'Edward shoots Mickey',
    ],
    correctIndex: 1,
    explanation:
      'When Mrs Johnstone reveals the truth, Mickey is shattered by the revelation that everything could have been different. He accidentally shoots Edward, and police shoot Mickey, fulfilling the superstition Mrs Lyons invented. The cycle of class violence is complete.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'bb-15',
    question: "What does the closing song, Tell Me It's Not True, express about the ending?",
    type: 'multiple-choice',
    options: [
      'Mrs Johnstone is in denial',
      "It asks the audience to refuse the tragedy's inevitability and question whether this outcome was truly fated",
      'It is just a sad song',
      'Mrs Johnstone is confused',
    ],
    correctIndex: 1,
    explanation:
      "The haunting refrain asks the audience to refuse the tragedy. But Russell's point is that the audience cannot: the system produced this outcome as surely as any curse. The song transforms grief into political argument.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'bb-16',
    question: 'How does Russell use the play as a "controlled experiment" about class?',
    type: 'multiple-choice',
    options: [
      'He uses scientific language',
      'By separating identical twins into different classes, he isolates class as the single variable determining their radically different outcomes',
      'He includes a scientist character',
      'The play takes place in a laboratory',
    ],
    correctIndex: 1,
    explanation:
      'The twin conceit creates a controlled experiment: two genetically identical boys raised in different classes have completely different lives. By isolating class as the single variable, Russell makes his argument about inequality undeniable and emotionally devastating.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'bb-17',
    question: "What is the effect of the Narrator's repeated references to the Devil?",
    type: 'multiple-choice',
    options: [
      'The play is about religion',
      'Russell repurposes superstitious language to critique a fatalistic society that blames fate rather than addressing inequality',
      'The Devil is a real character',
      'It is purely atmospheric',
    ],
    correctIndex: 1,
    explanation:
      "The Narrator's refrain about the devil coming for his due: his supernatural language creates a sense of doom, but Russell uses it to expose a society that prefers to blame fate for problems of its own making. The real curse is unemployment and prejudice, not the Devil.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'bb-18',
    question: "How does Linda's arc reflect the play's themes?",
    type: 'multiple-choice',
    options: [
      'She remains happy throughout',
      'Her slow despair as Mickey falls into depression mirrors how poverty destroys relationships and hope',
      'She is unaffected by events',
      'She becomes wealthy',
    ],
    correctIndex: 1,
    explanation:
      "Linda is feisty and loyal, but her slow despair as Mickey disappears into depression is one of the play's most devastating arcs. Her turning to Edward reflects not betrayal but the crushing effect of poverty on relationships.",
    topic: 'Characters',
    difficulty: 'grade-9',
  },
  {
    id: 'bb-19',
    question: 'What tradition of British drama does Blood Brothers belong to?',
    type: 'multiple-choice',
    options: [
      'Musical comedy',
      'Social-realist drama, including works like A Taste of Honey and Boys from the Blackstuff',
      'Restoration comedy',
      'Victorian melodrama',
    ],
    correctIndex: 1,
    explanation:
      "Blood Brothers belongs to the tradition of British social-realist drama that includes Shelagh Delaney and Alan Bleasdale. Russell's innovation is marrying that political tradition to the accessibility of popular musical theatre.",
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'bb-20',
    question: 'Why does Russell refuse to make Mrs Lyons a simple villain?',
    type: 'multiple-choice',
    options: [
      'She is based on a real person',
      'Her grief, loneliness, and descent into paranoia are shown as tragic, complicating the class argument',
      'Russell forgot to develop her character',
      'She is the hero',
    ],
    correctIndex: 1,
    explanation:
      'Mrs Lyons is lonely, infertile, and increasingly unhinged, but Russell shows her grief as genuine and her descent into paranoia as tragic. This complexity prevents the play from becoming a simple morality tale and makes the class argument more nuanced.',
    topic: 'Characters',
    difficulty: 'higher',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Class and Inequality',
    summary:
      "Russell's core argument: the same child will have a radically different life depending on class.",
    keyPoints: [
      'The twin conceit creates a controlled experiment about class',
      'Mickey: factory, unemployment, prison, depression',
      'Edward: private school, university, councillor',
      '"I could have been... I could have been him!" - the play\'s thesis at the climax',
      'The play never names Thatcher, but it makes the economic collapse explicit',
    ],
  },
  {
    topic: 'Fate and Superstition',
    summary:
      'The Narrator invokes fate, but Russell critiques a society that blames destiny for man-made problems.',
    keyPoints: [
      'Mrs Lyons invents the twin superstition to control Mrs Johnstone',
      "The Narrator's warnings create a sense of doom",
      "The Narrator's refrain about the devil coming for his due",
      'The real curse is unemployment and prejudice, not fate',
      'The ending fulfils the superstition but exposes its true cause: class',
    ],
  },
  {
    topic: 'Friendship and Identity',
    summary: "Mickey and Edward's bond proves that class differences are learned, not innate.",
    keyPoints: [
      'As children, their friendship is genuine and unselfconscious',
      'They become "blood brothers" without knowing they are biological brothers',
      'As adults, class pulls them apart',
      "Edward's attempts to help Mickey feel patronising because of power imbalance",
      'The friendship cannot survive the economic and social pressures of class',
    ],
  },
  {
    topic: 'Motherhood',
    summary: 'Both mothers love both boys, but neither can protect them from the system.',
    keyPoints: [
      'Mrs Johnstone: warm, sacrificial, trapped by poverty',
      'Mrs Lyons: possessive, paranoid, trapped by guilt',
      'Neither mother is a simple villain',
      "Both mothers' love produces catastrophe in different ways",
      'Russell shows motherhood under capitalism as an impossible task',
    ],
  },
  {
    topic: "Thatcher's Britain",
    summary:
      'The musical opened in 1983, when unemployment in Liverpool had reached devastating levels.',
    keyPoints: [
      'Factories closed, docks shrank, the Toxteth riots of 1981',
      "Mickey's trajectory tracks thousands of real families",
      'The play never names Thatcher: the politics are carried by Mickey’s story',
      'The tone is one of controlled political fury',
      'The musical form makes the political message accessible',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Russell present the theme of class and inequality in Blood Brothers?',
  'How does Russell use the character of Mickey to explore the effects of poverty?',
  'How does Russell present the role of fate and superstition in Blood Brothers?',
  'How does Russell explore the theme of motherhood in the play?',
  'How does Russell use the Narrator to create tension and convey his political message?',
]

export default async function BloodBrothersPage() {
  const board = await getServerBoard()
  const userBoardLabel = board ? (getBoardConfig(board)?.shortName ?? 'Edexcel') : 'Edexcel'

  return (
    <>
      <LearningResourceJsonLd
        name="Blood Brothers - Complete GCSE Study Guide"
        description="In-depth study guide for Blood Brothers covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        about="Blood Brothers"
        url="https://theenglishhub.app/revision/texts/blood-brothers"
      />
      <CourseJsonLd
        name="Blood Brothers - Complete GCSE Study Guide"
        description="In-depth study guide for Blood Brothers covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />

      <TextStudyHub
        textName="Blood Brothers"
        textType="play"
        examBoard={userBoardLabel}
        basePath="/revision/texts/blood-brothers"
        subPages={[
          {
            id: 'acts',
            href: '/revision/texts/blood-brothers/acts',
            icon: 'acts' as const,
            title: await t('rev.texts.bloodbrothers.subpage.acts.title'),
            description: await t('rev.texts.bloodbrothers.subpage.acts.desc'),
          },
          {
            id: 'characters',
            href: '/revision/texts/blood-brothers/characters',
            icon: 'characters' as const,
            title: await t('rev.texts.bloodbrothers.subpage.characters.title'),
            description: await t('rev.texts.bloodbrothers.subpage.characters.desc'),
          },
          {
            id: 'themes',
            href: '/revision/texts/blood-brothers/themes',
            icon: 'themes' as const,
            title: await t('rev.texts.bloodbrothers.subpage.themes.title'),
            description: await t('rev.texts.bloodbrothers.subpage.themes.desc'),
          },
          {
            id: 'quotes',
            href: '/revision/texts/blood-brothers/key-quotes',
            icon: 'quotes' as const,
            title: await t('rev.texts.bloodbrothers.subpage.quotes.title'),
            description: await t('rev.texts.bloodbrothers.subpage.quotes.desc'),
          },
          {
            id: 'essays',
            href: '/revision/texts/blood-brothers/essay-plans',
            icon: 'essays' as const,
            title: await t('rev.texts.bloodbrothers.subpage.essays.title'),
            description: await t('rev.texts.bloodbrothers.subpage.essays.desc'),
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          // The labels read 'Name - Act n' with a spaced hyphen; splitting
          // on the em dash alone left the act in every option of the quiz.
          character: q.who.split(/ [-\u2014] /)[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Russell present the theme of class and inequality in Blood Brothers?',
          'How does Russell use the character of Mickey to explore the effects of poverty?',
          'How does Russell present the role of fate and superstition in Blood Brothers?',
          'How does Russell explore the theme of motherhood in the play?',
          'How does Russell use the Narrator to create tension and convey his message?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Blood Brothers"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>{await t('rev.texts.bloodbrothers.rights_notice_label')}</strong> &copy; Willy
        Russell (b. 1947), published by Methuen Drama / Bloomsbury. Quotations are short
        fair-dealing extracts under CDPA 1988 &sect;30 (criticism, review, quotation). For full
        text, students should consult the licensed school edition.
      </p>
      {/* The sections this page did not have, and its story visuals.
          See scripts/mount-study-guide-supplement.mjs. */}
      <GuideSupplement guide={studyGuide} />
    </>
  )
}
