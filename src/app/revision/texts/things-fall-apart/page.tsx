import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Things Fall Apart — Study Guide | The English Hub',
  description:
    'In-depth study guide for Things Fall Apart by Chinua Achebe: plot, characters, themes, context and key quotations for Edexcel IGCSE.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/things-fall-apart',
  },
}

const data: TextGuideData = {
  title: 'Things Fall Apart',
  author: 'Chinua Achebe',
  year: 'published 1958',
  category: 'Novel',
  badge: 'Edexcel IGCSE',
  intro:
    "Chinua Achebe's landmark novel follows Okonkwo, a proud Igbo warrior in pre-colonial Nigeria, whose rigid masculinity and world are shattered by the arrival of European missionaries and colonial administrators. It is a foundational text of postcolonial literature and a direct reply to European narratives of Africa.",
  quickInfo: {
    genre: 'Postcolonial tragedy',
    setting: 'Umuofia, Igboland (Nigeria), late 1890s',
    length: '~50,000 words, 25 chapters',
    published: '1958',
  },
  plotSummary: [
    "The novel opens in the nine Igbo villages of Umuofia, where Okonkwo is a celebrated wrestler and yam farmer. Determined not to resemble his lazy, debt-ridden father Unoka, Okonkwo builds wealth, takes three wives and earns titles. Achebe devotes the first third of the book to the rich fabric of Igbo daily life: festivals, proverbs, egwugwu ceremonies and the Oracle of the Hills and Caves.",
    "Okonkwo's world begins to fracture when a neighbouring village offers a young boy, Ikemefuna, as reparation for a killing. Ikemefuna lives with Okonkwo's family for three years and becomes like a son to him. When the Oracle decrees that Ikemefuna must be killed, Okonkwo takes part in the execution, cutting the boy down with his machete to avoid appearing weak. The act haunts him and marks the first step in his decline.",
    'During a funeral, Okonkwo\u2019s gun accidentally kills a clansman and he is exiled to his mother\u2019s village of Mbanta for seven years. While he is away, Christian missionaries arrive, bringing with them a new religion and, soon, a colonial court. His son Nwoye, alienated by the killing of Ikemefuna and the rigidity of his father, converts to Christianity.',
    "When Okonkwo returns to Umuofia he finds the village changed beyond recognition. After a clash between the clan and the church, a colonial officer summons the elders and has them beaten. Okonkwo kills a messenger sent to disperse a meeting, realises the clan will not fight, and hangs himself. The novel ends with the District Commissioner reducing Okonkwo's life to a single paragraph in a book tentatively titled 'The Pacification of the Primitive Tribes of the Lower Niger'.",
  ],
  characters: [
    {
      name: 'Okonkwo',
      role: 'Proud warrior and tragic hero',
      body: "Okonkwo's strength and ambition mask a deep fear of weakness inherited from his father. Achebe uses him to show that rigidity — not colonialism alone — is what breaks a man who cannot adapt.",
    },
    {
      name: 'Unoka',
      role: "Okonkwo's father",
      body: "A gentle, music-loving debtor who shames his son. Unoka represents the 'unmanly' tenderness that Okonkwo spends his life rejecting.",
    },
    {
      name: 'Nwoye',
      role: "Okonkwo's eldest son",
      body: 'Sensitive, thoughtful and alienated by his father\u2019s violence, Nwoye converts to Christianity and takes the name Isaac, symbolising the generational rupture that colonialism exploits.',
    },
    {
      name: 'Ikemefuna',
      role: 'Adopted ward',
      body: "The boy who becomes the son Okonkwo wishes Nwoye were. His killing is the moral hinge of the novel and exposes the cost of Okonkwo's fear.",
    },
    {
      name: 'Obierika',
      role: "Okonkwo's closest friend",
      body: "Thoughtful and questioning where Okonkwo is rigid, Obierika articulates the reader's doubts and delivers the novel's most moving closing eulogy.",
    },
    {
      name: 'Mr Brown / Reverend Smith',
      role: 'Missionaries',
      body: 'Brown is patient and respectful; Smith is zealous and provocative. Achebe contrasts them to show the range of colonial intrusion and to complicate any simple good-versus-evil reading.',
    },
  ],
  themes: [
    {
      title: 'Colonialism and cultural collision',
      body: 'Achebe refuses the colonial fantasy of empty Africa. The first half of the novel establishes a complex, functioning society; the second half shows a foreign power dismantling it. The tragedy is not that the Igbo were simple but that they were recognisable, and destroyed anyway.',
    },
    {
      title: 'Masculinity and fear',
      body: 'Okonkwo equates manhood with violence and dominance. His terror of being like Unoka makes him cruel to his family and blind to his own suffering. Achebe suggests that toxic masculinity is itself a kind of colonised consciousness.',
    },
    {
      title: 'Tradition and change',
      body: 'Igbo culture is not static in the novel — it has debates, reformers and internal dissenters. Achebe shows that change is possible from within, but that colonialism forecloses the slower, kinder alternative.',
    },
    {
      title: 'Language and storytelling',
      body: "The novel weaves in Igbo proverbs and songs, what Achebe calls 'the palm-oil with which words are eaten'. The final paragraph, which reduces Okonkwo to an anecdote, dramatises the violence of colonial narrative.",
    },
    {
      title: 'Fate and personal chi',
      body: 'The Igbo concept of chi — personal spirit — runs throughout. Okonkwo believes a man can shape his chi, but Achebe repeatedly suggests that no amount of willpower can save a man fighting on two fronts.',
    },
  ],
  historicalContext: [
    'Chinua Achebe published Things Fall Apart in 1958, two years before Nigerian independence. The novel is set sixty years earlier, at the moment British colonial power was consolidating its grip on the Lower Niger. Achebe wrote it in English specifically to answer European novels, especially Joseph Conrad\u2019s Heart of Darkness, that depicted Africa as a blank and savage backdrop.',
    "The Igbo people of southeastern Nigeria had decentralised villages, democratic councils and sophisticated religious and legal systems. Achebe's own grandparents lived through the imposition of British rule, and the oral histories of that generation shape the novel's texture and dialogue.",
    "British colonialism in the region used missionary work as its opening wedge: schools and churches were followed by district commissioners, prisons and native courts. By the time Okonkwo's generation realises what has happened, the institutions of daily life are already controlled from outside.",
    "Achebe's title is taken from W.B. Yeats's poem 'The Second Coming' ('Things fall apart; the centre cannot hold'), planting his Igbo tragedy inside the European literary canon and quietly insisting that it belongs there.",
  ],
  quotations: [
    {
      quote: '"Among the Igbo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten."',
      who: 'Narrator — Chapter 1',
      analysis: 'Establishes the sophistication of Igbo culture before any colonial contact.',
    },
    {
      quote: '"Okonkwo was clearly cut out for great things."',
      who: 'Narrator — Chapter 1',
      analysis: 'The early promise that the rest of the novel systematically dismantles.',
    },
    {
      quote: '"He was afraid of being thought weak."',
      who: 'Narrator on Okonkwo — Chapter 2',
      analysis: 'Identifies fear as the engine of his rigidity and eventual destruction.',
    },
    {
      quote: '"The white man is very clever... Now he has won our brothers, and our clan can no longer act like one."',
      who: 'Obierika — Chapter 20',
      analysis: 'A precise diagnosis of colonial strategy: divide, convert, rule.',
    },
    {
      quote: '"Living fire begets cold, impotent ash."',
      who: 'Narrator — Chapter 17',
      analysis: "Okonkwo's bitter view of his son Nwoye — foreshadows his own solitary end.",
    },
    {
      quote: '"That man was one of the greatest men in Umuofia. You drove him to kill himself."',
      who: 'Obierika — Chapter 25',
      analysis: "Reclaims Okonkwo's death from the colonial record and lays the blame where it belongs.",
    },
    {
      quote: '"The Pacification of the Primitive Tribes of the Lower Niger."',
      who: 'District Commissioner — Chapter 25',
      analysis: "The colonial book title that turns a human tragedy into a footnote — the novel's sharpest irony.",
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'tfa-1', question: 'Who is the protagonist of Things Fall Apart?', type: 'multiple-choice', options: ['Obierika', 'Nwoye', 'Okonkwo', 'Mr Brown'], correctIndex: 2, explanation: 'Okonkwo is a proud Igbo warrior whose rigid masculinity and world are shattered by colonialism. He is both a tragic hero and a deeply flawed man.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'tfa-2', question: 'Where is the novel set?', type: 'multiple-choice', options: ['Kenya', 'South Africa', 'Umuofia, Igboland (Nigeria)', 'Ghana'], correctIndex: 2, explanation: 'The novel is set in the nine Igbo villages of Umuofia in pre-colonial Nigeria. Achebe devotes the first part to showing the rich fabric of Igbo daily life before colonial contact.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'tfa-3', question: 'Why is Okonkwo so determined to be different from his father Unoka?', type: 'multiple-choice', options: ['Unoka was cruel', 'Unoka was a gentle, lazy debtor who shamed Okonkwo', 'Unoka was wealthy', 'Unoka was a warrior'], correctIndex: 1, explanation: 'Unoka was a gentle, music-loving debtor who never took a title. Okonkwo is terrified of resembling him and overcompensates with aggression and relentless hard work. This fear of weakness drives his entire character.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'tfa-4', question: 'Who is Ikemefuna?', type: 'multiple-choice', options: ['Okonkwo\'s brother', 'A boy given to Umuofia as reparation who becomes like a son to Okonkwo', 'A missionary', 'Okonkwo\'s rival'], correctIndex: 1, explanation: 'Ikemefuna is a young boy given to Umuofia by a neighbouring village. He lives with Okonkwo\'s family for three years, becoming like a son. When the Oracle decrees his death, Okonkwo participates in the killing to avoid appearing weak.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'tfa-5', question: 'Why is Okonkwo exiled from Umuofia?', type: 'multiple-choice', options: ['He committed murder intentionally', 'His gun accidentally kills a clansman during a funeral', 'He insulted the Oracle', 'He refused to fight'], correctIndex: 1, explanation: 'Okonkwo\'s gun accidentally explodes and kills a young clansman during a funeral. He is exiled to his mother\'s village of Mbanta for seven years. While he is away, missionaries and colonial administrators arrive.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'tfa-6', question: 'What does Okonkwo\'s son Nwoye do that shocks his father?', type: 'multiple-choice', options: ['He becomes a warrior', 'He converts to Christianity and takes the name Isaac', 'He runs away from home', 'He challenges Okonkwo to a fight'], correctIndex: 1, explanation: 'Nwoye, alienated by his father\'s violence and the killing of Ikemefuna, converts to Christianity. His new name Isaac echoes the biblical story of Abraham and Isaac, symbolising the generational rupture colonialism exploits.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'tfa-7', question: 'How does Okonkwo die?', type: 'multiple-choice', options: ['He is killed by the colonists', 'He dies in battle', 'He hangs himself', 'He dies of illness'], correctIndex: 2, explanation: 'After killing a colonial messenger and realising his clan will not fight, Okonkwo hangs himself. Suicide is an abomination in Igbo culture, meaning his clansmen cannot even bury him. His death represents the total destruction of his world.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'tfa-8', question: 'When was the novel published?', type: 'multiple-choice', options: ['1945', '1958', '1965', '1970'], correctIndex: 1, explanation: 'Published in 1958, two years before Nigerian independence. Achebe wrote it specifically to answer European novels like Conrad\'s Heart of Darkness that depicted Africa as a blank, savage backdrop.', topic: 'Context', difficulty: 'foundation' },
  { id: 'tfa-9', question: 'What does the proverb "proverbs are the palm-oil with which words are eaten" reveal about Igbo culture?', type: 'multiple-choice', options: ['The Igbo eat palm oil', 'It establishes the sophistication and richness of Igbo oral culture before any colonial contact', 'It is a cooking reference', 'It has no deeper meaning'], correctIndex: 1, explanation: 'This narrator\'s observation in Chapter 1 immediately establishes the Igbo as a people who value eloquence, wisdom, and artful speech. Achebe deliberately counters the colonial narrative of "primitive" Africa by showing a complex, articulate society.', topic: 'Writer\'s Methods', difficulty: 'higher' },
  { id: 'tfa-10', question: 'What is the significance of the novel\'s title, taken from Yeats\'s poem?', type: 'multiple-choice', options: ['It is just a title', 'It places an Igbo tragedy inside the European literary canon, insisting it belongs there', 'Yeats wrote about Nigeria', 'It describes the weather'], correctIndex: 1, explanation: 'The title comes from W.B. Yeats\'s "The Second Coming" ("Things fall apart; the centre cannot hold"). Achebe deliberately plants his Igbo tragedy inside the European literary canon, quietly insisting that it belongs there and demanding equal recognition.', topic: 'Context', difficulty: 'higher' },
  { id: 'tfa-11', question: 'How does Achebe present the killing of Ikemefuna as a moral turning point?', type: 'multiple-choice', options: ['It is a minor event', 'Okonkwo participates despite being warned not to, revealing that his fear of weakness overrides his love', 'Okonkwo refuses to participate', 'It brings the clan together'], correctIndex: 1, explanation: 'Okonkwo is advised by Ogbuefi Ezeudu not to take part in Ikemefuna\'s killing, but he does so anyway because he is afraid of appearing weak. This act haunts him and marks the first step in his decline, exposing the cost of his rigid code.', topic: 'Plot', difficulty: 'higher' },
  { id: 'tfa-12', question: 'What is the difference between Mr Brown and Reverend Smith?', type: 'multiple-choice', options: ['They are the same', 'Brown is patient and respectful while Smith is zealous and provocative, showing the range of colonial intrusion', 'Smith is kind and Brown is cruel', 'They represent the same approach'], correctIndex: 1, explanation: 'Achebe contrasts the two missionaries: Mr Brown builds relationships and respects Igbo culture, while Reverend Smith is rigid, zealous, and provocative. This prevents a simple good-versus-evil reading and shows the range of colonial behaviour.', topic: 'Characters', difficulty: 'higher' },
  { id: 'tfa-13', question: 'What does the District Commissioner\'s planned book title reveal about colonialism?', type: 'multiple-choice', options: ['He is a good writer', 'Calling it "The Pacification of the Primitive Tribes of the Lower Niger" reduces Okonkwo\'s life to a colonial footnote, showing the violence of colonial narrative', 'He is sympathetic', 'He wants to help'], correctIndex: 1, explanation: 'The novel ends with the Commissioner reducing Okonkwo\'s entire tragedy to "a paragraph" in a book called "The Pacification of the Primitive Tribes of the Lower Niger." This is the novel\'s sharpest irony: the violence of colonial storytelling, which erases real human lives.', topic: 'Writer\'s Methods', difficulty: 'higher' },
  { id: 'tfa-14', question: 'How does Obierika function in the novel?', type: 'multiple-choice', options: ['He is a villain', 'He is thoughtful and questioning where Okonkwo is rigid, articulating the reader\'s doubts', 'He is Okonkwo\'s enemy', 'He is unimportant'], correctIndex: 1, explanation: 'Obierika is Okonkwo\'s closest friend but his opposite: thoughtful, willing to question traditions, and emotionally flexible. He articulates the reader\'s doubts about customs like abandoning twins and delivers the novel\'s most moving closing eulogy.', topic: 'Characters', difficulty: 'higher' },
  { id: 'tfa-15', question: 'What does "He was afraid of being thought weak" tell us about Okonkwo\'s psychology?', type: 'multiple-choice', options: ['He is a coward', 'Fear, not strength, is the engine of his rigidity — his terror of resembling Unoka makes him cruel', 'He is simply describing a fear', 'He is strong'], correctIndex: 1, explanation: 'This narrator\'s insight identifies fear as the engine of Okonkwo\'s entire character. His terror of being thought weak — of resembling his father — makes him cruel to his family, drives him to kill Ikemefuna, and ultimately leads to his destruction.', topic: 'Characters', difficulty: 'higher' },
  { id: 'tfa-16', question: 'How does colonialism exploit existing divisions within Igbo society?', type: 'multiple-choice', options: ['It does not', 'Missionaries target the outcasts, twins, and those dissatisfied with traditions, converting them and splitting the community', 'Everyone converts willingly', 'Only the leaders convert'], correctIndex: 1, explanation: 'The missionaries first attract the osu (outcasts), mothers of abandoned twins, and dissatisfied youth like Nwoye. As Obierika observes: "He has won our brothers, and our clan can no longer act like one." Achebe shows colonial strategy as divide, convert, rule.', topic: 'Themes', difficulty: 'higher' },
  { id: 'tfa-17', question: 'How does Achebe use the novel to counter European narratives about Africa?', type: 'multiple-choice', options: ['He ignores European narratives', 'By spending the first half establishing a complex, functioning Igbo society before colonialism destroys it, he directly answers Conrad\'s Heart of Darkness', 'He praises European colonialism', 'He writes from a European perspective'], correctIndex: 1, explanation: 'Achebe devotes the first part of the novel to the rich, complex life of Umuofia — festivals, proverbs, debates, ceremonies. By establishing this functioning society before colonialism arrives, he directly answers European novels (especially Conrad) that depicted Africa as a blank, savage backdrop.', topic: 'Context', difficulty: 'grade-9' },
  { id: 'tfa-18', question: 'What does the concept of chi (personal spirit) add to the novel?', type: 'multiple-choice', options: ['It is just a superstition', 'Okonkwo believes a man can shape his chi, but the novel suggests willpower cannot overcome fighting on two fronts — internal rigidity and external colonialism', 'Chi is irrelevant to the plot', 'It means good luck'], correctIndex: 1, explanation: 'The Igbo concept of chi — personal spirit or destiny — runs throughout. Okonkwo believes a man can bend his chi through sheer will, but Achebe repeatedly suggests that no amount of willpower can save a man fighting both his own rigidity and the forces of colonialism.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'tfa-19', question: 'Why does Achebe write the novel in English rather than Igbo?', type: 'multiple-choice', options: ['He could not write in Igbo', 'He deliberately uses the coloniser\'s language to reach the widest audience and prove African literature belongs in the world canon', 'It was required by publishers', 'He preferred English'], correctIndex: 1, explanation: 'Achebe chose English deliberately, using the coloniser\'s own language to challenge colonial narratives. By weaving in Igbo proverbs and untranslated words, he creates a distinctly African English that insists African stories belong in the world literary canon.', topic: 'Writer\'s Methods', difficulty: 'grade-9' },
  { id: 'tfa-20', question: 'How does Achebe suggest that toxic masculinity is itself a form of vulnerability?', type: 'multiple-choice', options: ['He does not address masculinity', 'Okonkwo\'s rigid insistence on strength makes him unable to adapt, love openly, or accept change — his "strength" is actually his greatest weakness', 'Masculinity is presented positively', 'Only women are vulnerable'], correctIndex: 1, explanation: 'Okonkwo equates manhood with violence and dominance, but this rigidity makes him unable to adapt to change, express love, or accept his son\'s different path. Achebe suggests that toxic masculinity is itself a colonised consciousness — a trap that destroys from within.', topic: 'Themes', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Colonialism and Cultural Collision', summary: 'Achebe shows a complex, functioning society destroyed by colonial power.', keyPoints: ['The first half establishes rich Igbo culture before colonial contact', 'Missionaries target outcasts and dissatisfied youth', '"He has won our brothers, and our clan can no longer act like one"', 'The District Commissioner reduces Okonkwo\'s life to a paragraph', 'Achebe directly answers Conrad\'s Heart of Darkness'] },
  { topic: 'Masculinity and Fear', summary: 'Okonkwo\'s rigid definition of manhood, driven by fear, leads to his destruction.', keyPoints: ['"He was afraid of being thought weak" — fear drives his rigidity', 'He kills Ikemefuna to avoid appearing weak', 'His relationship with Nwoye is destroyed by his harshness', 'Unoka represents the tenderness Okonkwo rejects', 'Achebe suggests toxic masculinity is itself a vulnerability'] },
  { topic: 'Tradition and Change', summary: 'Igbo culture is not static — it has debates and internal dissenters.', keyPoints: ['Obierika questions customs like abandoning twins', 'Change is possible from within, but colonialism forecloses this', 'Nwoye\'s conversion reflects genuine dissatisfaction with some traditions', 'Mr Brown vs Reverend Smith: different colonial approaches', 'The novel refuses to idealise pre-colonial society completely'] },
  { topic: 'Language and Storytelling', summary: 'Achebe uses language itself as a weapon against colonial narrative.', keyPoints: ['"Proverbs are the palm-oil with which words are eaten"', 'Igbo proverbs and songs woven throughout the text', 'Written in English to reach the widest audience', 'The title from Yeats insists the novel belongs in the world canon', 'The District Commissioner\'s book title shows the violence of colonial storytelling'] },
  { topic: 'Fate and Personal Chi', summary: 'The Igbo concept of chi runs throughout, questioning whether Okonkwo could have escaped his fate.', keyPoints: ['Chi = personal spirit or destiny', 'Okonkwo believes willpower can shape destiny', 'But he fights on two fronts: internal rigidity and external colonialism', 'His accidental killing of the clansman seems fated', 'His suicide is an abomination — even in death, his culture cannot save him'] },
]

const ESSAY_PROMPTS = [
  'How does Achebe present the impact of colonialism on Igbo society in Things Fall Apart?',
  'How does Achebe use the character of Okonkwo to explore the theme of masculinity?',
  'How does Achebe present the tension between tradition and change?',
  'How does Achebe use language and storytelling to convey the richness of Igbo culture?',
  'How does Achebe explore the theme of fate and personal responsibility?',
]

export default async function ThingsFallApartPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="Things Fall Apart — Complete GCSE Study Guide"
        description="In-depth study guide for Things Fall Apart covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Things Fall Apart", url: "https://theenglishhub.app/revision/texts/things-fall-apart" },
        ]}
      />
      <TextStudyHub
        textName="Things Fall Apart"
        textType="novel"
        examBoard="Edexcel IGCSE"
        basePath="/revision/texts/things-fall-apart"
        subPages={[
          { id: 'characters', href: '/revision/texts/things-fall-apart/characters', icon: 'characters' as const, title: 'Characters', description: 'Full character guide' },
          { id: 'themes', href: '/revision/texts/things-fall-apart/themes', icon: 'themes' as const, title: 'Themes', description: 'Theme analysis' },
          { id: 'quotes', href: '/revision/texts/things-fall-apart/key-quotes', icon: 'quotes' as const, title: 'Key Quotes', description: 'Quotes with analysis' },
          { id: 'context', href: '/revision/texts/things-fall-apart/context', icon: 'context' as const, title: 'Context', description: 'Historical context' },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map(q => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Achebe present the impact of colonialism on Igbo society?',
          'How does Achebe use the character of Okonkwo to explore the theme of masculinity?',
          'How does Achebe present the tension between tradition and change?',
          'How does Achebe use language and storytelling to convey the richness of Igbo culture?',
          'How does Achebe explore the theme of fate and personal chi?',
        ]}
        flashcards={data.quotations.slice(0, 8).map(q => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Things Fall Apart"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </>
  )
}
