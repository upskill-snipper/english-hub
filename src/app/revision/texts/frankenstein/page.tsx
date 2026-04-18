import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

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

const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'fr-1', question: 'Who is the frame narrator of Frankenstein?', type: 'multiple-choice', options: ['Victor Frankenstein', 'The Creature', 'Robert Walton', 'Henry Clerval'], correctIndex: 2, explanation: 'Captain Robert Walton writes letters to his sister from a ship trapped in Arctic ice. He rescues Victor and records his story, providing the frame narrative that contains the entire novel.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'fr-2', question: 'Where does Victor create the Creature?', type: 'multiple-choice', options: ['Geneva', 'London', 'The University of Ingolstadt', 'The Arctic'], correctIndex: 2, explanation: 'Victor creates the Creature while studying at the University of Ingolstadt in Germany, working alone in his laboratory, isolating himself from family and friends.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'fr-3', question: 'What is Victor\'s immediate reaction when the Creature opens its eyes?', type: 'multiple-choice', options: ['Joy and wonder', 'He embraces it', 'Horror and revulsion — he flees', 'He names it'], correctIndex: 2, explanation: 'Victor is revolted by what he has made and abandons the Creature immediately. This act of irresponsibility is the origin of all the tragedy that follows — a creator who refuses to care for his creation.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'fr-4', question: 'Who is the first person the Creature kills?', type: 'multiple-choice', options: ['Henry Clerval', 'Elizabeth', 'William Frankenstein', 'Justine Moritz'], correctIndex: 2, explanation: 'The Creature murders Victor\'s younger brother William. The innocent servant Justine Moritz is then wrongly convicted and executed for the crime, doubling the injustice.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'fr-5', question: 'What does the Creature demand that Victor create for him?', type: 'multiple-choice', options: ['A castle', 'A female companion', 'A cure for his appearance', 'A new identity'], correctIndex: 1, explanation: 'The Creature demands that Victor create a female companion to end his terrible loneliness. Victor reluctantly begins but then destroys the female creature, fearing a "race of monsters."', topic: 'Plot', difficulty: 'foundation' },
  { id: 'fr-6', question: 'What is the novel\'s subtitle?', type: 'multiple-choice', options: ['The Gothic Horror', 'The Modern Prometheus', 'The Last Man', 'The Fallen Angel'], correctIndex: 1, explanation: 'The subtitle "The Modern Prometheus" connects Victor to the Greek Titan who stole fire from the gods and was punished for eternity. It frames scientific ambition as divine transgression with terrible consequences.', topic: 'Context', difficulty: 'foundation' },
  { id: 'fr-7', question: 'How old was Mary Shelley when she wrote Frankenstein?', type: 'multiple-choice', options: ['Fifteen', 'Eighteen', 'Twenty-five', 'Thirty'], correctIndex: 1, explanation: 'Shelley was just eighteen when she wrote Frankenstein during the famous 1816 "ghost story" competition at the Villa Diodati near Lake Geneva. It was published anonymously in 1818.', topic: 'Context', difficulty: 'foundation' },
  { id: 'fr-8', question: 'Who says "I ought to be thy Adam, but I am rather the fallen angel"?', type: 'multiple-choice', options: ['Victor', 'The Creature', 'Walton', 'Clerval'], correctIndex: 1, explanation: 'The Creature uses Milton\'s Paradise Lost to articulate his abandonment. He should have been loved as a first creation (like Adam) but has been cast out and rejected like Satan.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'fr-9', question: 'What is the Creature\'s key argument in "I was benevolent and good; misery made me a fiend"?', type: 'multiple-choice', options: ['He was always evil', 'He was born innocent and driven to violence only by rejection — supporting nature vs nurture', 'He enjoys being a fiend', 'He blames the weather'], correctIndex: 1, explanation: 'This single sentence articulates the novel\'s nature-versus-nurture argument. The Creature was born innocent and became violent only after repeated rejection, arguing that environment, not innate character, shapes moral development.', topic: 'Themes', difficulty: 'higher' },
  { id: 'fr-10', question: 'How does Victor mirror Robert Walton?', type: 'multiple-choice', options: ['They look similar', 'Both are driven by dangerous ambition and isolation — Victor\'s story serves as a warning Walton heeds', 'They are from the same city', 'They share the same profession'], correctIndex: 1, explanation: 'Walton mirrors Victor in his dangerous ambition and isolation, pursuing glory in the Arctic. Victor\'s story serves as a cautionary tale, and Walton ultimately heeds the warning by turning his ship back from the ice.', topic: 'Characters', difficulty: 'higher' },
  { id: 'fr-11', question: 'What role do the De Lacey family play in the Creature\'s story?', type: 'multiple-choice', options: ['They adopt the Creature', 'He secretly observes them, learning language and humanity, but they reject him when he reveals himself', 'They help him find Victor', 'They are villains'], correctIndex: 1, explanation: 'The Creature educates himself by observing the De Laceys, learning to speak and read. When he reveals himself to the blind father, the sighted family members are horrified and drive him away, crushing his last hope for acceptance.', topic: 'Plot', difficulty: 'higher' },
  { id: 'fr-12', question: 'What happens on Victor\'s wedding night?', type: 'multiple-choice', options: ['Victor and Elizabeth escape', 'The Creature murders Elizabeth, fulfilling his threat', 'The Creature forgives Victor', 'Victor kills the Creature'], correctIndex: 1, explanation: 'The Creature murders Elizabeth on their wedding night, fulfilling his vow "I will be with you on your wedding night." Victor failed to understand the threat was directed at Elizabeth, showing his fatal self-absorption.', topic: 'Plot', difficulty: 'higher' },
  { id: 'fr-13', question: 'How does Shelley use the novel\'s nested narrative structure?', type: 'multiple-choice', options: ['It is confusing and unnecessary', 'Three narrators (Walton, Victor, Creature) create layers that force the reader to judge reliability and empathy', 'There is only one narrator', 'Each narrator tells the same story'], correctIndex: 1, explanation: 'The nested structure (Walton frames Victor\'s story, which contains the Creature\'s story) creates layers of perspective. The reader must judge each narrator\'s reliability, and placing the Creature\'s sympathetic account at the centre forces engagement with his humanity.', topic: 'Writer\'s Methods', difficulty: 'higher' },
  { id: 'fr-14', question: 'What scientific context influenced Shelley\'s novel?', type: 'multiple-choice', options: ['Space exploration', 'Luigi Galvani\'s experiments with electricity on dead tissue and debates about reanimation', 'Nuclear physics', 'The telephone'], correctIndex: 1, explanation: 'The novel was influenced by Galvani\'s work on "animal electricity" and public demonstrations of applying electrical current to corpses. These experiments raised genuine questions about the nature of life and whether science could reanimate the dead.', topic: 'Context', difficulty: 'higher' },
  { id: 'fr-15', question: 'Why does Victor refuse to complete the female creature?', type: 'multiple-choice', options: ['He runs out of materials', 'He fears creating a "race of monsters" that could threaten humanity', 'The Creature tells him to stop', 'He is arrested'], correctIndex: 1, explanation: 'Victor fears the female creature might breed, creating a race of monsters, or that she might reject the male Creature. His decision to destroy her triggers the Creature\'s final vengeance, but also reflects genuine ethical concern about uncontrolled creation.', topic: 'Plot', difficulty: 'higher' },
  { id: 'fr-16', question: 'What does the Creature mean by "If I cannot inspire love, I will cause fear"?', type: 'multiple-choice', options: ['He wants to be a leader', 'Denied all affection, he turns to terror as the only form of power available to him', 'He is joking', 'He wants to act in horror plays'], correctIndex: 1, explanation: 'The Creature turns to terror as the only form of power available to someone denied all affection. This line captures the tragic trajectory from innocent being to vengeful monster, showing how rejection creates the very monster society feared.', topic: 'Themes', difficulty: 'higher' },
  { id: 'fr-17', question: 'How does Frankenstein critique the Romantic ideal of the solitary genius?', type: 'multiple-choice', options: ['It celebrates it', 'Victor\'s isolation in pursuit of knowledge leads to catastrophe, showing that the solitary genius is reckless, not heroic', 'It does not address Romanticism', 'It presents solitude as ideal'], correctIndex: 1, explanation: 'Victor embodies the Romantic ideal of the solitary genius pursuing sublime knowledge, but Shelley shows this isolation as reckless and destructive. By cutting himself off from family and ethical guidance, Victor creates a disaster. The novel critiques both Romantic individualism and Enlightenment faith in pure reason.', topic: 'Context', difficulty: 'grade-9' },
  { id: 'fr-18', question: 'How does Shelley use the Arctic setting to reinforce the novel\'s themes?', type: 'multiple-choice', options: ['It is just a backdrop', 'The frozen, desolate landscape mirrors both Victor\'s and Walton\'s dangerous isolation and ambition pushed to its extremes', 'It provides a warm setting', 'It represents hope'], correctIndex: 1, explanation: 'The Arctic represents ambition pushed to its furthest extreme — beautiful but deadly. Both Victor and Walton pursue glory into the frozen waste. The desolation mirrors Victor\'s destroyed life and the Creature\'s isolation from all human warmth.', topic: 'Writer\'s Methods', difficulty: 'grade-9' },
  { id: 'fr-19', question: 'Who is the true "monster" in the novel?', type: 'multiple-choice', options: ['The Creature alone', 'Victor alone', 'The question is deliberately ambiguous — Shelley challenges the reader to reconsider who the real monster is', 'Neither'], correctIndex: 2, explanation: 'Shelley deliberately blurs the line between creator and creation. Victor calls the Creature a "wretch" and "monster," but Victor\'s own abandonment, irresponsibility, and obsession are arguably more monstrous. The novel forces the reader to question assumptions about who deserves the label.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'fr-20', question: 'What is the significance of the Creature reading Paradise Lost?', type: 'multiple-choice', options: ['It shows he can read', 'It provides a framework for understanding his relationship with Victor as a failed God-Adam relationship', 'It is just a detail', 'It inspires him to be good'], correctIndex: 1, explanation: 'Milton\'s Paradise Lost gives the Creature a framework for his existence. He identifies with Adam (abandoned by his creator) and Satan (cast out and driven to evil). This literary allusion elevates the Creature\'s suffering to a mythic, theological level and deepens the novel\'s exploration of creation and responsibility.', topic: 'Writer\'s Methods', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Ambition and Hubris', summary: 'Victor\'s relentless pursuit of forbidden knowledge leads to catastrophe, echoing the Prometheus myth.', keyPoints: ['Victor sacrifices health, relationships, and morality for his goal', '"Learn from me... how dangerous is the acquirement of knowledge"', 'Walton mirrors Victor\'s ambition but heeds the warning', 'The subtitle "The Modern Prometheus" frames ambition as divine transgression', 'Shelley critiques the Romantic ideal of the solitary genius'] },
  { topic: 'Creation and Responsibility', summary: 'The central moral question: does a creator owe duties to their creation?', keyPoints: ['Victor abandons the Creature at birth', 'Every subsequent tragedy flows from that act of irresponsibility', 'The Creature\'s plea for a companion is a request for basic care', 'Victor destroys the female creature, breaking his promise', 'Shelley argues that creating life carries absolute obligation'] },
  { topic: 'Isolation and Loneliness', summary: 'Both Victor and the Creature suffer from profound isolation that drives them towards destruction.', keyPoints: ['Victor cuts himself off from family to pursue his work', 'The Creature is denied any human connection at all', 'Loneliness is shown as morally corrosive', 'The De Laceys\' rejection is the Creature\'s last hope', 'The Arctic setting mirrors their emotional desolation'] },
  { topic: 'Nature vs Nurture', summary: 'The Creature is born innocent and becomes violent only after repeated rejection.', keyPoints: ['"I was benevolent and good; misery made me a fiend"', 'The Creature educates himself through observation', 'His eloquence challenges the idea that he is a mere brute', 'Society\'s rejection creates the monster it fears', 'Shelley argues environment shapes moral development'] },
  { topic: 'Science and Ethics', summary: 'The novel asks what happens when scientific knowledge outstrips moral responsibility.', keyPoints: ['Influenced by Galvani\'s experiments with electricity', 'Victor never pauses to consider ethical implications', 'Science without conscience is presented as monstrous', 'The novel anticipates modern debates about genetic engineering and AI', 'Shelley wrote during the Romantic critique of pure Enlightenment rationalism'] },
]

const ESSAY_PROMPTS = [
  'How does Shelley present the theme of ambition and its consequences in Frankenstein?',
  'How does Shelley explore the Creature as both victim and villain?',
  'How does Shelley present the theme of isolation and its effects?',
  'How does Shelley use the novel to explore the dangers of science without ethics?',
  'How does Shelley present the relationship between creator and creation?',
]

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

      <InlineStudyEngine
        textName="Frankenstein"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Frankenstein</em> (1818) by Mary Shelley is in the public domain. Quotations are reproduced freely.
      </p>
    </>
  )
}
