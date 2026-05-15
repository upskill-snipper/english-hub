// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'The Sign of the Four — Study Guide | The English Hub',
    description:
      'In-depth study guide for The Sign of the Four by Arthur Conan Doyle: plot, characters, themes, context and key quotations.',
  },
  title: 'The Sign of the Four — Study Guide | The English Hub',
  description:
    'In-depth study guide for The Sign of the Four by Arthur Conan Doyle: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/the-sign-of-four',
  },
}

const data: TextGuideData = {
  title: 'The Sign of the Four',
  author: 'Arthur Conan Doyle',
  year: '1890',
  category: 'Novella',
  badge: 'AQA',
  intro:
    'The Sign of the Four is the second novel featuring Sherlock Holmes and Dr John Watson, published in 1890 after the success of A Study in Scarlet (1887). The story begins when Mary Morstan arrives at 221B Baker Street seeking help with the mysterious disappearance of her father and the equally strange annual arrival of a pearl. What unfolds is a case involving the British Empire in India, a stolen treasure, a blood pact made in an Agra fortress, and a vengeful pursuit down the Thames. The novella blends detective puzzle-solving with sensational adventure, weaving together themes of imperialism, greed, and justice. It is also the story in which Watson falls in love with Mary Morstan, whom he marries at the end of the book. Conan Doyle uses the case to probe the moral legacies of empire while establishing many of the hallmarks of the detective genre: the brilliant eccentric investigator, the loyal narrator-companion, forensic method, and the criminal whose past returns to demand reckoning.',
  quickInfo: {
    genre: 'Detective fiction',
    setting: 'Victorian London; flashback to Agra and the Andaman Islands',
    length: '~43,000 words / 12 chapters',
    published: 'Lippincott\u2019s Monthly Magazine, February 1890; book 1890',
  },
  plotSummary: [
    'The novella opens at 221B Baker Street, where Watson watches Holmes inject himself with a seven-percent solution of cocaine and complains about the habit. Their conversation is interrupted by the arrival of Miss Mary Morstan, a young governess with a puzzling story. Her father, Captain Arthur Morstan of the Indian Army, vanished without trace in London in 1878. Six years later, Mary began receiving a large lustrous pearl in the post every year from an anonymous sender. Now she has received a letter asking her to meet the sender, and she wants Holmes and Watson to accompany her. The three travel to the Lyceum Theatre and are taken by coach to a house in Norwood belonging to Thaddeus Sholto, who reveals that his late father, Major John Sholto, served with Captain Morstan in India and that the two men quarrelled on the night of Morstan\u2019s disappearance over a vast hidden treasure. On his deathbed, Major Sholto was about to confess the treasure\u2019s location when he saw a bearded face at the window and died of fright.',
    'Thaddeus takes the party to Pondicherry Lodge, the Sholto family home, where his twin brother Bartholomew has been searching the house for the treasure. When they arrive they find Bartholomew murdered in his locked laboratory at the top of the house, a poisoned thorn lodged in his neck and the treasure chest gone. A note pinned nearby reads simply "The sign of the four." Holmes examines the scene and deduces that the crime was committed by two men: one with a wooden leg who climbed in at the window, and a tiny accomplice who entered through the roof. He calls in Inspector Athelney Jones of Scotland Yard, who promptly arrests the innocent Thaddeus. Holmes meanwhile uses the tracker dog Toby to follow a trail of creosote across London, eventually tracing the killers to a Thames-side wharf, where he learns they have escaped downriver in a steam launch called the Aurora.',
    'While the trail goes cold, Watson visits Mary repeatedly and finds himself in love with her, though he fears that if the treasure is recovered her new wealth will put her beyond his reach. Holmes, disguised as an old sailor, locates the Aurora and organises a police launch to chase it down the river. The pursuit ends in a dramatic night-time chase on the Thames. The wooden-legged fugitive is Jonathan Small, an English ex-soldier; his companion is Tonga, a small Andaman islander who shoots poisoned darts through a blowpipe. Tonga is shot and falls into the river; Small is captured when his wooden leg sinks into the mud of the riverbank. During the chase, Small throws the Agra treasure overboard, scattering it across the Thames so that no one will ever have it.',
    'In the final chapters, Small gives a long confession. As a young soldier in India, he lost his leg to a crocodile and took work as an overseer on a plantation. During the 1857 Sepoy Rebellion he fled to the Agra fortress, where three Sikh soldiers \u2014 Mahomet Singh, Abdullah Khan and Dost Akbar \u2014 offered him a share of a merchant\u2019s treasure if he helped them murder and rob the man. They sealed a pact under the "sign of the four." They were caught, tried and sent as convicts to the Andaman Islands. There Small made a second pact with Major Sholto and Captain Morstan, two officers in debt, agreeing they would recover the buried treasure in return for helping the four to escape. Sholto betrayed them all, stole the treasure alone, and sailed for England. Small eventually escaped with the help of Tonga, whom he had nursed back to health, and pursued Sholto to London to take his revenge. With the treasure lost beneath the Thames, Watson tells Mary he loves her; no longer kept apart by her fortune, they agree to marry. Holmes, denied the glory of the case, turns back to his cocaine bottle.',
  ],
  characters: [
    {
      name: 'Sherlock Holmes',
      role: 'Consulting detective of 221B Baker Street',
      body: 'Holmes is a brilliant but restless thinker who treats detection as "an exact science" and demands problems to occupy his mind. When bored he injects cocaine; when engaged, he becomes a formidable machine of observation and deduction. In this novella he displays the full range of his methods \u2014 footprint analysis, chemistry, disguise, tracker dogs \u2014 and insists that emotion clouds reason. Conan Doyle uses him to dramatise a new kind of heroism based on intellect rather than physical courage, though his drug use and moodiness complicate any simple reading of him as a rational ideal.',
    },
    {
      name: 'Dr John Watson',
      role: 'Holmes\u2019s companion, former army doctor and the story\u2019s narrator',
      body: 'Watson narrates the novella and represents the reader\u2019s ordinary perspective on Holmes\u2019s extraordinary mind. A former army surgeon wounded in the Second Afghan War, he embodies Victorian decency, loyalty and moral feeling. His romance with Mary Morstan gives the story its emotional heart: he falls in love at first sight but worries the treasure will separate them by class. His sensibility is the deliberate counterweight to Holmes\u2019s cold logic, and his marriage at the end signals a movement from adventure into domestic happiness.',
    },
    {
      name: 'Mary Morstan',
      role: 'Holmes\u2019s client and Watson\u2019s future wife',
      body: 'Mary arrives at Baker Street as a governess seeking help with her missing father and the mysterious pearls. Conan Doyle presents her as intelligent, courageous and composed \u2014 Holmes himself remarks on her clear judgement. She becomes the object of Watson\u2019s affections and the moral centre of the romantic plot. Her potential inheritance creates the central obstacle to the couple\u2019s happiness, and the treasure\u2019s loss paradoxically clears the way for their marriage, suggesting that true love is endangered rather than enabled by imperial wealth.',
    },
    {
      name: 'Jonathan Small',
      role: 'The wooden-legged fugitive and principal antagonist',
      body: 'Small is the engine of the novella\u2019s back story and, in his long confession, something close to its tragic figure. An English ex-soldier who lost his leg in India, he formed the original "sign of the four" pact with three Sikh soldiers to seize a merchant\u2019s treasure during the 1857 Rebellion. Betrayed by Major Sholto and imprisoned for twenty years on the Andaman Islands, he pursues revenge with Tonga. Conan Doyle allows him to explain himself at length, and his sense of having been cheated gives the villain a moral weight rarely granted to criminals in earlier detective writing.',
    },
    {
      name: 'Thaddeus Sholto',
      role: 'The nervous, eccentric son of Major Sholto',
      body: 'Thaddeus is presented as a hypochondriac aesthete living in Norwood amid hookahs, Oriental tapestries and imported art. He writes the letter that brings Mary to Baker Street and, guilt-ridden by his father\u2019s dishonesty, tries to make restitution by sending her the pearls. He is comic but also morally serious, one of the few characters who attempts to undo the injustice at the story\u2019s heart. Inspector Jones\u2019s wrongful arrest of him demonstrates the limits of official police method compared with Holmes\u2019s.',
    },
    {
      name: 'Bartholomew Sholto',
      role: 'Thaddeus\u2019s twin brother and the murder victim',
      body: 'Bartholomew is obsessed with recovering his father\u2019s hidden treasure, searching Pondicherry Lodge inch by inch until he finally locates it in a secret attic laboratory. His death \u2014 killed by one of Tonga\u2019s poisoned darts in a locked room \u2014 creates the central mystery for Holmes to solve. He represents greed without Thaddeus\u2019s conscience, and his fate suggests that the imperial treasure carries its own curse: those who pursue it most ruthlessly are destroyed by it.',
    },
    {
      name: 'Tonga',
      role: 'Small\u2019s companion from the Andaman Islands',
      body: 'Tonga is a small Andaman islander whom Small rescued and who follows him in loyalty. He is the actual killer of Bartholomew, firing a poisoned dart through the roof. Modern readers should recognise that Tonga is drawn through the dehumanising racial caricatures of late-Victorian imperial fiction \u2014 described in animalistic terms and denied inner life. His portrayal is one of the most uncomfortable aspects of the novella and a central topic for critical analysis of race, empire and the "Other" in Conan Doyle\u2019s work.',
    },
  ],
  themes: [
    {
      title: 'Colonialism and empire',
      body: 'The Agra treasure is the engine of the entire plot, and it is a colonial treasure: looted during the chaos of the 1857 Sepoy Rebellion and dragged back to Britain at terrible human cost. Every significant crime in the novella \u2014 murder, betrayal, imprisonment, revenge \u2014 radiates out from the acquisition of that imperial wealth. Conan Doyle suggests, perhaps despite himself, that the empire has imported violence, fear and moral corruption into the heart of Victorian London. Pondicherry Lodge is crammed with Indian artefacts; Thaddeus is surrounded by Oriental decor; the killers come from the Andamans. The story offers no clean separation between "respectable" England and the imperial periphery.',
    },
    {
      title: 'Greed and the Agra treasure',
      body: 'The treasure is a moral test that almost everyone fails. Major Sholto betrays his friend and his prisoners to keep it; Bartholomew hunts it so obsessively he forgets anything else; Jonathan Small murders for it twice. Even the minor characters are warped by its pull. Conan Doyle pointedly has the treasure lost at the bottom of the Thames: it cannot be enjoyed, only pursued. The novella suggests that greed for imperial wealth destroys the people who chase it, and that only when the treasure is gone can ordinary human happiness \u2014 represented by Watson and Mary\u2019s engagement \u2014 become possible.',
    },
    {
      title: 'Justice and law',
      body: 'The novella contrasts three kinds of justice. There is Inspector Jones\u2019s legal justice, which is loud, confident and wrong \u2014 he arrests innocent Thaddeus. There is Holmes\u2019s investigative justice, which is private, rational and usually correct. And there is Small\u2019s vigilante justice, a long revenge for real betrayal. Conan Doyle allows Small to speak at length and be partly believed, so the reader must consider whether legal punishment and moral justice coincide. The official system, by contrast, is mocked: Jones\u2019s errors are almost comic. Justice in this book is something individuals make, not something the state reliably delivers.',
    },
    {
      title: 'Reason versus emotion (Holmes and Watson)',
      body: 'Conan Doyle constructs his central pair as opposed but interdependent principles. Holmes insists that "detection is, or ought to be, an exact science" and warns that emotion is "destructive to the logical faculty." Watson, however, falls in love, feels pity, and responds to suffering with sympathy. The novella is largely his, not Holmes\u2019s: his engagement to Mary, not the solution of the crime, provides the emotional resolution. Conan Doyle seems to argue that pure reason, however thrilling, is not enough for a full human life, and that Watson\u2019s warmth is as necessary as Holmes\u2019s cold deduction.',
    },
    {
      title: 'Identity and trust',
      body: 'Almost every character in the novella hides something. Major Sholto buries the treasure and lies on his deathbed. Small lives as a convict under surveillance. Holmes disguises himself as a sailor. Thaddeus is hidden away in a suburban villa and uses an intermediary to write to Mary. Even the pearls are a trace of concealed guilt. Conan Doyle suggests that Victorian London is a world of false faces, where the detective is needed precisely because respectable surfaces cannot be trusted. Mary, by contrast, is presented as transparently honest \u2014 a quality that marks her as the story\u2019s moral centre.',
    },
    {
      title: 'The "Other" and racial representation',
      body: 'The novella\u2019s depiction of Tonga, the Andaman islander, is the clearest example of Victorian racist imagination in Conan Doyle\u2019s work. Tonga is described in animalistic and dehumanising terms and made to carry the story\u2019s most savage violence, while the English villain Small is given a full voice and a sympathetic hearing. The contrast maps fears about empire onto the colonised body: the "civilised" criminal can be understood, the "savage" one must simply be shot. A modern reading of the novella must engage with these representations directly and ask how the genre of detective fiction has inherited them.',
    },
  ],
  historicalContext: [
    'The Sign of the Four was published in 1890, near the high-water mark of the British Empire, when roughly a quarter of the world\u2019s land and population was under British rule. India was the most important imperial possession, and the figure of the returning "Anglo-Indian" \u2014 the former officer or official home from service abroad \u2014 was a familiar one in the London of Conan Doyle\u2019s readers. The novella\u2019s plot depends on Captain Morstan, Major Sholto and Jonathan Small all being products of this imperial system, and on the treasure being the kind of looted wealth that moved, at scale, from the colonised world into Britain.',
    'The key historical event behind the novella is the uprising of 1857, commonly called the Indian Mutiny or Sepoy Rebellion in British sources and the First War of Independence in Indian historiography. Jonathan Small\u2019s flight to the Agra fortress and the theft of the merchant\u2019s treasure are set during the collapse of order that followed the rebellion. For Conan Doyle\u2019s 1890 readership, this was living memory, and the rebellion was still used in Britain as justification for tightening imperial rule. The Andaman Islands, where Small is imprisoned, were a real British penal colony used for political prisoners after 1857.',
    'The novella was published at a moment when detective fiction was becoming a recognisable genre. Conan Doyle had drawn on Edgar Allan Poe\u2019s earlier Dupin stories and on his own teacher Joseph Bell, whose diagnostic methods inspired Holmes. The success of the Strand magazine short stories that followed (from 1891) would turn Holmes into a global phenomenon, but The Sign of the Four is the book in which many of the genre\u2019s conventions \u2014 the eccentric detective, the loyal narrator-sidekick, the forensic method, the locked-room puzzle \u2014 are consolidated for the first time.',
    'Holmes\u2019s cocaine use in Chapter 1 reflects the medical culture of 1890. Cocaine was legal, widely available, and sold in over-the-counter preparations; its addictive nature was only beginning to be understood. Watson\u2019s moral objections represent a growing medical concern rather than an established one. Modern readers should also be aware that the novella\u2019s treatment of Tonga, and of race more broadly, is shaped by late-Victorian pseudoscientific racism and imperial anxiety. These problematic depictions are not incidental to the text but central to its meaning, and engaging critically with them is part of studying the novella seriously.',
  ],
  quotations: [
    {
      quote:
        '"Sherlock Holmes took his bottle from the corner of the mantel-piece and his hypodermic syringe from its neat morocco case."',
      who: 'Watson \u2014 Chapter 1',
      analysis:
        'The novella\u2019s opening image establishes Holmes as both brilliant and troubled, using cocaine to escape boredom. The precision of the description contrasts with the moral unease the habit provokes in Watson.',
    },
    {
      quote:
        '"Detection is, or ought to be, an exact science, and should be treated in the same cold and unemotional manner."',
      who: 'Holmes \u2014 Chapter 1',
      analysis:
        'Holmes states his intellectual creed in the opening chapter. Detection is to be a rational discipline, and feeling is disqualified from it. The line frames the Holmes/Watson contrast that structures the novella.',
    },
    {
      quote: '"I never guess. It is a shocking habit \u2014 destructive to the logical faculty."',
      who: 'Holmes \u2014 Chapter 1',
      analysis:
        'A key statement of Holmes\u2019s method. Deduction, not intuition, is his principle. The hyperbolic "shocking" parodies Victorian moral vocabulary and applies it to logic rather than behaviour.',
    },
    {
      quote:
        '"How often have I said to you that when you have eliminated the impossible, whatever remains, however improbable, must be the truth?"',
      who: 'Holmes \u2014 Chapter 6',
      analysis:
        'The novella\u2019s most famous line of detective method. The logic is deliberately counter-intuitive: the "improbable" is the point. Conan Doyle\u2019s detective teaches the reader a new way of thinking about evidence.',
    },
    {
      quote: '"You know my methods. Apply them."',
      who: 'Holmes \u2014 spoken to Watson',
      analysis:
        'Holmes invites Watson \u2014 and through him the reader \u2014 to practise his form of analysis. The invitation makes detection participatory: the reader is not passive but trained in the method.',
    },
    {
      quote:
        '"My mind rebels at stagnation. Give me problems, give me work, give me the most abstruse cryptogram, or the most intricate analysis, and I am in my own proper atmosphere."',
      who: 'Holmes \u2014 Chapter 1',
      analysis:
        'Holmes explains his cocaine use as a response to intellectual boredom. Conan Doyle presents the detective\u2019s mind as requiring constant stimulation, which is both the source of his brilliance and of his vulnerability.',
    },
    {
      quote: '"The sign of the four."',
      who: 'Note pinned near Bartholomew\u2019s body \u2014 Chapter 6',
      analysis:
        'The phrase gives the novella its title and names the pact at its moral centre: Small, Mahomet Singh, Abdullah Khan and Dost Akbar. It is a sign of conspiracy, loyalty and, ultimately, betrayal.',
    },
    {
      quote:
        '"I am the last and most unworthy of the detectives. Yet I have had my little successes."',
      who: 'Holmes \u2014 Chapter 6',
      analysis:
        'Holmes\u2019s mock-modesty reveals his awareness of himself as a new kind of figure in a crowded field. Conan Doyle is also placing his detective within a literary tradition he is about to redefine.',
    },
    {
      quote:
        '"The main thing with people of that sort is never to let them think that their information can be of the slightest importance to you."',
      who: 'Holmes \u2014 Chapter 7',
      analysis:
        'Holmes explains his method of handling informants. The line exposes his psychological sharpness and his slightly cold manipulation of ordinary people, a complicating trait beneath the heroic exterior.',
    },
    {
      quote: '"Women are never to be entirely trusted \u2014 not the best of them."',
      who: 'Holmes \u2014 Chapter 2',
      analysis:
        'A striking piece of Holmesian misogyny, immediately qualified by Watson\u2019s love for Mary. The novella stages the limits of Holmes\u2019s reason by having his general principle fail against an individual case.',
    },
    {
      quote:
        '"It is of the first importance not to allow your judgment to be biased by personal qualities."',
      who: 'Holmes \u2014 Chapter 2',
      analysis:
        'Holmes warns Watson against liking Mary Morstan too much. The advice dramatises the reason/emotion contrast: Watson will ignore it, and the book will largely endorse his decision to do so.',
    },
    {
      quote:
        '"What is the use of having powers, doctor, when one has no field upon which to exert them?"',
      who: 'Holmes \u2014 Chapter 1',
      analysis:
        'Holmes\u2019s complaint in the opening pages frames the whole case as a rescue from boredom. The line makes clear that crime is, for him, an intellectual opportunity rather than a moral catastrophe.',
    },
    {
      quote:
        '"I had, it is true, the consolation of knowing that my absence would be felt by one person at least."',
      who: 'Watson \u2014 on leaving Mary',
      analysis:
        'Watson\u2019s narration quietly shifts from detection to romance. Conan Doyle interleaves Holmes\u2019s forensic thread with Watson\u2019s love plot, and the novella\u2019s emotional climax is marital, not criminal.',
    },
    {
      quote:
        '"It is a romance! An injured lady, half a million in treasure, a black cannibal, and a wooden-legged ruffian."',
      who: 'Inspector Athelney Jones \u2014 Chapter 10',
      analysis:
        'Jones\u2019s phrasing gathers the story\u2019s sensational elements and, uncomfortably for modern readers, its racial caricature of Tonga. The line exposes how the novella\u2019s imperial material is packaged as entertainment.',
    },
    {
      quote: '"No treasure could be too great a reward for the woman whose love I had won."',
      who: 'Watson \u2014 final chapters',
      analysis:
        'Watson\u2019s inner thought as he confronts the possibility of losing Mary to wealth. Conan Doyle makes the romance turn on a rejection of the treasure\u2019s value, realigning money against love.',
    },
    {
      quote: '"Thank God! \u2026 Thank God!"',
      who: 'Watson \u2014 on learning the treasure is lost',
      analysis:
        'Watson\u2019s relief at the treasure\u2019s loss is instantaneous and, for Mary, clarifying. The moment resolves the romantic plot and suggests that the imperial fortune was the obstacle to, not the condition of, their happiness.',
    },
    {
      quote: '"It is gone. The treasure is lost."',
      who: 'Jonathan Small \u2014 Chapter 10',
      analysis:
        'Small\u2019s announcement that he has scattered the Agra treasure across the Thames is the novella\u2019s material climax. The empire\u2019s loot is literally dissolved into the London river, refused to every claimant.',
    },
    {
      quote: '"You\u2019ll hang me if you can, but I don\u2019t care a plug for that."',
      who: 'Jonathan Small \u2014 Chapter 11',
      analysis:
        'Small\u2019s defiance introduces his long confession. Conan Doyle gives the villain an unusual amount of narrative space and moral standing, so that the reader is asked to weigh his betrayal against his own.',
    },
    {
      quote: '"I have had a long score to settle, and I have settled it."',
      who: 'Jonathan Small \u2014 Chapter 11',
      analysis:
        'Small frames his crimes as justice rather than criminality. The novella allows this framing seriously enough that official law, represented by Jones, looks shallow by comparison.',
    },
    {
      quote: '"For me \u2026 there still remains the cocaine-bottle."',
      who: 'Holmes \u2014 final chapter',
      analysis:
        'The novella ends where it began, with Holmes reaching for his drug. Watson gets Mary; Holmes is left with chemistry and boredom. The circularity is deliberate: emotion brings happiness, reason alone returns to the syringe.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'tsotf-1',
    question: 'Who is the client who brings the case to Sherlock Holmes?',
    type: 'multiple-choice',
    options: ['Mary Morstan', 'Irene Adler', 'Lady Sholto', 'Helen Stoner'],
    correctIndex: 0,
    explanation:
      'Mary Morstan arrives at 221B Baker Street seeking help. Her father disappeared in 1878, and she has received a mysterious pearl every year since. She later marries Watson.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tsotf-2',
    question: 'What drug does Holmes inject in the opening chapter?',
    type: 'multiple-choice',
    options: ['Morphine', 'A seven-percent solution of cocaine', 'Laudanum', 'Ether'],
    correctIndex: 1,
    explanation:
      'Chapter 1 opens with Holmes taking his bottle and hypodermic syringe from the mantelpiece. He injects a seven-percent solution of cocaine to relieve intellectual boredom, which Watson disapproves of.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tsotf-3',
    question: 'Who are the four members of the "sign of the four" pact?',
    type: 'multiple-choice',
    options: [
      'Holmes, Watson, Mary and Thaddeus',
      'Small, Mahomet Singh, Abdullah Khan and Dost Akbar',
      'Small, Sholto, Morstan and Tonga',
      'The four Sholto brothers',
    ],
    correctIndex: 1,
    explanation:
      'The original pact is between Jonathan Small and three Sikh soldiers \u2014 Mahomet Singh, Abdullah Khan and Dost Akbar \u2014 made in the Agra fortress during the 1857 Rebellion to seize a merchant\u2019s treasure.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'tsotf-4',
    question: 'Where is Jonathan Small imprisoned before the events of the novella?',
    type: 'multiple-choice',
    options: ['Newgate Prison', 'The Tower of London', 'The Andaman Islands', 'Dartmoor Prison'],
    correctIndex: 2,
    explanation:
      'After their arrest for the murder and robbery in Agra, Small and the three Sikhs are sent as convicts to the Andaman Islands, a British penal colony used for political prisoners after the 1857 Rebellion.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'tsotf-5',
    question: 'Who is Tonga?',
    type: 'multiple-choice',
    options: [
      'A Scotland Yard inspector',
      'Small\u2019s companion from the Andaman Islands who uses a blowpipe',
      'One of the Sholto twins',
      'Mary Morstan\u2019s father',
    ],
    correctIndex: 1,
    explanation:
      'Tonga is a small Andaman islander who travels with Small and kills Bartholomew Sholto with a poisoned dart. His portrayal uses the racist caricatures of late-Victorian imperial fiction, a key topic for critical analysis.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tsotf-6',
    question: 'How does Bartholomew Sholto die?',
    type: 'multiple-choice',
    options: [
      'He is stabbed by Jonathan Small',
      'He is shot with a poisoned dart fired by Tonga through the roof of his attic laboratory',
      'He dies of natural causes',
      'He falls into the Thames',
    ],
    correctIndex: 1,
    explanation:
      'Bartholomew is killed by Tonga, who fires a poisoned thorn through a roof opening. Holmes deduces two attackers: Small (wooden leg, in at the window) and a tiny accomplice (through the roof).',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'tsotf-7',
    question: 'What is the name of the steam launch the criminals use to escape?',
    type: 'multiple-choice',
    options: ['The Aurora', 'The Matilda Briggs', 'The Gloria Scott', 'The Argonaut'],
    correctIndex: 0,
    explanation:
      'The Aurora is the steam launch that Small and Tonga board to flee down the Thames. Holmes, disguised as an old sailor, locates it and organises the police chase.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'tsotf-8',
    question: 'What happens to the Agra treasure?',
    type: 'multiple-choice',
    options: [
      'Mary inherits it and marries Watson for his sake only',
      'Small scatters it into the Thames during the chase, and it is lost',
      'Holmes keeps a share as his fee',
      'It is returned to India by the British government',
    ],
    correctIndex: 1,
    explanation:
      'During the chase on the Thames, Small throws the contents of the treasure chest overboard so no one will have it. Its loss is symbolically important and clears the way for Watson and Mary to marry.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'tsotf-9',
    question:
      'What does Holmes mean by "when you have eliminated the impossible, whatever remains, however improbable, must be the truth"?',
    type: 'multiple-choice',
    options: [
      'The truth is always obvious',
      'A method of deduction that follows logic even when conclusions seem unlikely, by ruling out what cannot be so',
      'Detection is guesswork',
      'Witnesses are never reliable',
    ],
    correctIndex: 1,
    explanation:
      'Holmes\u2019s principle in Chapter 6 sets out his deductive method. The "improbable" is the key: by eliminating impossibilities, the investigator reaches surprising but necessary conclusions. It is Conan Doyle\u2019s most famous line on detective method.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'tsotf-10',
    question:
      'What is the significance of Conan Doyle letting Small speak at length in Chapter 11?',
    type: 'multiple-choice',
    options: [
      'It is padding with no narrative purpose',
      'It gives the villain a sympathetic voice, complicating official justice by presenting his crimes as a kind of revenge for real betrayal',
      'It shows Small is not really guilty',
      'It is a mistake in the novella\u2019s structure',
    ],
    correctIndex: 1,
    explanation:
      'Small\u2019s extended confession allows him to present his actions as justified revenge against Major Sholto\u2019s original theft. Conan Doyle\u2019s decision to dramatise his perspective is a central reason the novella asks serious questions about justice.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'tsotf-11',
    question: 'How does Conan Doyle use the Holmes/Watson contrast in the novella?',
    type: 'multiple-choice',
    options: [
      'They are identical characters',
      'Holmes represents cold rationality, Watson represents emotion and moral feeling; the novella ultimately endorses Watson\u2019s sensibility',
      'Holmes is emotional and Watson is rational',
      'They disagree about everything',
    ],
    correctIndex: 1,
    explanation:
      'Holmes\u2019s insistence that detection must be "cold and unemotional" is contrasted with Watson\u2019s love for Mary, pity for Small, and warmth towards Thaddeus. The novella\u2019s resolution is Watson\u2019s engagement, not Holmes\u2019s solution, quietly endorsing emotion.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tsotf-12',
    question: 'How is colonialism central to the plot of the novella?',
    type: 'multiple-choice',
    options: [
      'It is only background detail',
      'Every major crime radiates from the Agra treasure, which is colonial plunder; the empire imports violence and corruption into Victorian London',
      'The plot has nothing to do with empire',
      'The British Empire is shown only as benevolent',
    ],
    correctIndex: 1,
    explanation:
      'The treasure is looted during the 1857 Rebellion; Small, Sholto and Morstan are all imperial products; the Andamans supply the killers; and Pondicherry Lodge is crammed with Indian objects. The case itself is an imperial case.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'tsotf-13',
    question: 'What is problematic about the portrayal of Tonga?',
    type: 'multiple-choice',
    options: [
      'Nothing \u2014 it is a fair depiction',
      'He is drawn through dehumanising racial caricature and denied inner life, while the English villain Small is given a full voice and sympathetic hearing',
      'He talks too much',
      'He is too intelligent to be believable',
    ],
    correctIndex: 1,
    explanation:
      'Tonga is described in animalistic terms and made to carry the story\u2019s most savage violence, while Small is given a long confession. The contrast reflects Victorian racial imagination and is a central critical topic for modern readers.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'tsotf-14',
    question: 'Why does Watson "thank God" when he learns the treasure is lost?',
    type: 'multiple-choice',
    options: [
      'He hates gold',
      'He had feared that Mary\u2019s inheritance would put her beyond his reach; its loss clears the way for them to marry',
      'He wanted Holmes to have it',
      'He was afraid the treasure was cursed',
    ],
    correctIndex: 1,
    explanation:
      'Watson has fallen in love with Mary but worries her wealth will separate them by class. The treasure\u2019s loss resolves his moral dilemma and allows him to propose. Love replaces imperial wealth as the story\u2019s reward.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tsotf-15',
    question: 'How does Inspector Athelney Jones function in the novella?',
    type: 'multiple-choice',
    options: [
      'As a rival genius to Holmes',
      'As a parody of official police method: confident, loud and wrong, arresting the innocent Thaddeus while Holmes solves the case',
      'As Holmes\u2019s mentor',
      'As a secondary villain',
    ],
    correctIndex: 1,
    explanation:
      'Jones arrests Thaddeus almost immediately and is consistently mistaken. His role is to show that state-sanctioned legal justice is inadequate compared with Holmes\u2019s private investigative method, part of the novella\u2019s critique of official justice.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'tsotf-16',
    question:
      'What is the significance of the novella ending with Holmes reaching for the cocaine bottle?',
    type: 'multiple-choice',
    options: [
      'It is a throwaway joke',
      'It forms a deliberate circular structure: Watson gains Mary and a new life, Holmes is left alone with the drug, reinforcing the reason/emotion contrast',
      'It suggests Holmes has solved his addiction',
      'It sets up the next novel',
    ],
    correctIndex: 1,
    explanation:
      'The novella opens and closes with Holmes and the cocaine bottle. The circularity suggests emotional connection rewards Watson, while Holmes\u2019s purely rational life returns to the same boredom, quietly criticising reason as a complete philosophy.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'tsotf-17',
    question:
      'How does the 1857 Sepoy Rebellion function in the novella\u2019s historical context?',
    type: 'multiple-choice',
    options: [
      'It is invented by Conan Doyle',
      'It is the real historical backdrop for Small\u2019s crimes in Agra, and, for the 1890 reader, recent memory used to justify harsh imperial rule',
      'It is irrelevant to the plot',
      'It is presented as a British victory to be celebrated',
    ],
    correctIndex: 1,
    explanation:
      'The 1857 uprising (called the Sepoy Rebellion or the First War of Independence) is the chaos during which Small flees to the Agra fortress and the treasure is stolen. For Conan Doyle\u2019s original readers it was living memory and politically charged.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'tsotf-18',
    question: 'What does Watson\u2019s narration contribute to the novella\u2019s effect?',
    type: 'multiple-choice',
    options: [
      'Nothing \u2014 he just records events',
      'By filtering Holmes through an ordinary observer with feelings, Watson makes Holmes\u2019s brilliance striking and allows the romance plot to coexist with the detective plot',
      'He is an unreliable narrator who hides the truth',
      'He dislikes Holmes and undermines him',
    ],
    correctIndex: 1,
    explanation:
      'Watson\u2019s first-person narration makes the reader identify with ordinary human responses to Holmes, amplifying the detective\u2019s strangeness. It also gives the love plot room to develop, so the novella is as much a romance as a detective story.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'tsotf-19',
    question: 'What does Holmes mean by "You know my methods. Apply them"?',
    type: 'multiple-choice',
    options: [
      'He is refusing to help Watson',
      'He is inviting Watson \u2014 and, through him, the reader \u2014 to practise deductive reasoning, making the detective story participatory',
      'He wants Watson to take over the case',
      'He is teasing Watson for being slow',
    ],
    correctIndex: 1,
    explanation:
      'The line implicates the reader in the detective process. Conan Doyle designs the stories so that deduction can be learned and imitated, helping to establish the genre\u2019s appeal as intellectual play.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'tsotf-20',
    question: 'Why is The Sign of the Four important in the history of detective fiction?',
    type: 'multiple-choice',
    options: [
      'It is the first detective story ever written',
      'It consolidates genre conventions \u2014 eccentric detective, loyal narrator-companion, forensic method, locked-room puzzle \u2014 and precedes the Strand short stories that made Holmes a global phenomenon',
      'It invented forensic science',
      'It was rejected by readers',
    ],
    correctIndex: 1,
    explanation:
      'Published in 1890 after A Study in Scarlet (1887), it helps establish the template later stories would follow. The Strand short stories from 1891 built on its success and turned Holmes into a global cultural figure.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Colonialism and Empire',
    summary:
      'The Agra treasure is colonial plunder, and every major crime in the novella radiates from it. Conan Doyle dramatises empire importing violence into London.',
    keyPoints: [
      'The treasure is stolen during the 1857 Sepoy Rebellion',
      'Sholto, Morstan and Small are all products of the imperial system',
      'Pondicherry Lodge is crammed with Indian objects \u2014 the empire is at home',
      'The treasure is lost in the Thames, refused to every claimant',
      'Tonga and the Andamans represent the colonised body imported for violence',
    ],
  },
  {
    topic: 'Greed and the Agra Treasure',
    summary:
      'The treasure acts as a moral test that almost every character fails. Conan Doyle suggests imperial wealth corrupts everyone who pursues it.',
    keyPoints: [
      'Major Sholto betrays Morstan and Small for sole possession',
      'Bartholomew hunts the treasure obsessively and is killed',
      'Small kills twice to get and regain it',
      'Its loss in the Thames is the condition for ordinary happiness',
      'Watson\u2019s "Thank God!" when it is lost reveals Conan Doyle\u2019s moral',
    ],
  },
  {
    topic: 'Justice and Law',
    summary:
      'The novella contrasts legal, investigative and vigilante justice, and official law comes off worst.',
    keyPoints: [
      'Inspector Jones arrests the innocent Thaddeus',
      'Holmes\u2019s private investigation is more effective than the state\u2019s',
      'Small\u2019s vigilante revenge is given a hearing, not dismissed',
      'The novella asks whether law and moral justice coincide',
      'Conan Doyle is sceptical of institutional authority',
    ],
  },
  {
    topic: 'Reason vs Emotion (Holmes and Watson)',
    summary:
      'The central pair are opposed but interdependent. The novella quietly endorses Watson\u2019s sensibility over Holmes\u2019s cold logic.',
    keyPoints: [
      '"Detection is, or ought to be, an exact science" \u2014 Holmes\u2019s creed',
      '"I never guess. It is a shocking habit \u2014 destructive to the logical faculty"',
      'Watson falls in love, Holmes warns against it',
      'The emotional climax is Watson\u2019s engagement, not the solution',
      'The novella ends with Holmes alone with the cocaine \u2014 reason returns to boredom',
    ],
  },
  {
    topic: 'Race and the "Other"',
    summary:
      'The depiction of Tonga is a clear example of Victorian racist imagination and must be engaged with critically.',
    keyPoints: [
      'Tonga is described in dehumanising, animalistic terms',
      'Small, the English villain, gets a full confession; Tonga does not',
      'Jones\u2019s phrase "black cannibal" exposes the novella\u2019s racial framing',
      'The Andaman Islands were a real British penal colony',
      'Modern reading must recognise detective fiction\u2019s imperial inheritance',
    ],
  },
  {
    topic: 'Genre and Form',
    summary:
      'The Sign of the Four consolidates the conventions of detective fiction that the Strand short stories would popularise.',
    keyPoints: [
      'Eccentric detective, narrator-sidekick, forensic method, locked-room puzzle',
      'Watson\u2019s first-person narration filters Holmes through ordinary eyes',
      'The "improbable is true" principle invites the reader to deduce',
      'Second Holmes novel, after A Study in Scarlet (1887)',
      'Published 1890 in Lippincott\u2019s Monthly Magazine, then as a book',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Conan Doyle present the effects of the British Empire in The Sign of the Four?',
  'How does Conan Doyle use the character of Sherlock Holmes to explore the theme of reason?',
  'How does Conan Doyle present greed and the pursuit of wealth in The Sign of the Four?',
  'How does Conan Doyle present justice and the law in The Sign of the Four?',
  'How does Conan Doyle use the figure of Jonathan Small to complicate the idea of the "villain"?',
]

export default async function TheSignOfTheFourPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="The Sign of the Four — Complete GCSE Study Guide"
        description="In-depth study guide for The Sign of the Four covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'The Sign of the Four',
            url: 'https://theenglishhub.app/revision/texts/the-sign-of-four',
          },
        ]}
      />
      <TextStudyHub
        textName="The Sign of the Four"
        textType="novel"
        examBoard="AQA"
        basePath="/revision/texts/the-sign-of-four"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/the-sign-of-four/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'chapters',
            href: '/revision/texts/the-sign-of-four/chapters',
            icon: 'acts' as const,
            title: 'Chapter-by-Chapter Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/the-sign-of-four/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/the-sign-of-four/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/the-sign-of-four/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/the-sign-of-four/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/the-sign-of-four/essay-plans',
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
          'How does Conan Doyle present the effects of the British Empire in The Sign of the Four?',
          'How does Conan Doyle use the character of Sherlock Holmes to explore the theme of reason?',
          'How does Conan Doyle present greed and the pursuit of wealth in The Sign of the Four?',
          'How does Conan Doyle present justice and the law in The Sign of the Four?',
          'How does Conan Doyle use the figure of Jonathan Small to complicate the idea of the "villain"?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="The Sign of the Four"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>
          AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.
        </span>
      </div>
      <TextGuide data={data} />
    </>
  )
}
