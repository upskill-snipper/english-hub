// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  title: 'The Curious Incident revision guide — themes, characters, key quotes — The English Hub',
  description:
    "The Curious Incident IGCSE revision — Mark Haddon's 2003 novel with plot, characters, themes, context and key quotes. Pearson Edexcel IGCSE 4ET1-aligned.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/curious-incident',
  },
}

const data: TextGuideData = {
  title: 'The Curious Incident of the Dog in the Night-Time',
  author: 'Mark Haddon',
  year: '2003',
  category: 'Novel',
  badge: 'Edexcel IGCSE',
  intro:
    'Mark Haddon\u2019s 2003 novel is narrated by Christopher John Francis Boone, a fifteen-year-old from Swindon who is brilliant at mathematics, finds other people baffling, and experiences the world in unusually vivid sensory detail. When Christopher finds his neighbour\u2019s dog Wellington killed with a garden fork, he decides to write a \u2018murder mystery novel\u2019 about the investigation, and the book we read is the book he produces. What begins as a Sherlock Holmes-style puzzle quickly becomes a much larger story about truth, family and independence, as Christopher uncovers the carefully managed lies his father has told him about his mother. The novel is famous for its first-person voice, its prime-numbered chapters and its use of diagrams, maps and lists, all of which place the reader inside Christopher\u2019s way of thinking. It won the Whitbread Book of the Year in 2003 and was longlisted for the Booker, and has since become one of the most widely taught modern novels at GCSE and IGCSE level.',
  quickInfo: {
    genre: 'Contemporary novel / mystery / coming-of-age',
    setting: 'Swindon and London, early 2000s',
    length: '226 pages, 226 prime-numbered chapters',
    published: '2003 (Jonathan Cape / David Fickling Books)',
  },
  plotSummary: [
    'The novel opens at seven minutes past midnight, when Christopher Boone, a fifteen-year-old narrator who lives with his father Ed in Swindon, finds his neighbour Mrs Shears\u2019s black poodle Wellington lying dead on the lawn, killed with a garden fork. Christopher is very fond of animals and very bad at reading people, and he is distressed by the death. Mrs Shears calls the police; Christopher, frightened when a policeman touches him, hits the officer and is arrested, though he is soon released with a caution. His teacher Siobhan, at the special school he attends, suggests he write about what happened, and Christopher decides to write a \u2018murder mystery novel\u2019 in which he himself is the detective. The book we are reading is that novel, and Christopher explains that he is numbering his chapters with prime numbers because prime numbers are what is left when you take all the patterns away.',
    'Against his father\u2019s instructions, Christopher starts investigating. He interviews neighbours, including the elderly Mrs Alexander, who inadvertently tells him that his mother once had an affair with Mrs Shears\u2019s ex-husband, Mr Shears. Christopher has been told by his father that his mother Judy died of a heart attack two years earlier. When Ed discovers that Christopher has been asking questions, the two argue, and Christopher\u2019s book is temporarily confiscated. Searching his father\u2019s bedroom for the manuscript, Christopher finds a shirt box containing dozens of letters addressed to him in his mother\u2019s handwriting, all postmarked from London and all after the date his mother was supposed to have died. Reading them carefully, he realises that his mother did not die; she left, moved to London with Mr Shears, and has been writing to him for nearly two years.',
    'The shock makes Christopher physically ill, and when Ed comes home and finds him he confesses: Judy is alive, and in a moment of fury he killed Wellington after an argument with Mrs Shears. Christopher, who cannot tell lies and cannot bear people who do, decides that his father is now dangerous and that he must run away. Taking his pet rat Toby, his bank card and his school rucksack, he sets off alone to find his mother in London. The journey is the heart of the novel. Christopher navigates Swindon station, buys a ticket, endures the crowded train, loses Toby briefly on the Underground and almost falls onto the tracks, but uses his logical method \u2014 following signs, counting, asking precise questions \u2014 to reach his mother\u2019s flat in Willesden. Haddon stages the journey as a sustained act of courage rather than a set-piece crisis, and the prose slows down to match Christopher\u2019s careful pattern-matching.',
    'Judy and Mr Shears are stunned to find Christopher on the doorstep. Judy realises that Ed has been lying to Christopher and that Ed has also been withholding her letters, and she resolves to look after her son. Ed follows them to London and tries to explain himself; Judy\u2019s relationship with Mr Shears breaks down partly because Mr Shears cannot cope with Christopher\u2019s needs. Judy takes Christopher back to Swindon so he can sit his A Level Mathematics exam, which he had been promised he could take early and which his father had almost cancelled. Mother and son move into a rented room near Ed\u2019s house; Ed works slowly and cautiously to rebuild trust, buying Christopher a golden retriever puppy called Sandy. Christopher takes the exam and gets an A. The novel ends with him planning to take Further Maths and then Physics, and asking himself whether his achievement \u2014 the investigation, the solo journey, the exam \u2014 means that he can now do \u2018anything\u2019. The ending is hopeful but conditional: Haddon lets Christopher ask the question without answering it for him.',
  ],
  characters: [
    {
      name: 'Christopher John Francis Boone',
      role: 'Fifteen-year-old narrator and amateur detective',
      body: 'Christopher is the novel\u2019s first-person narrator and the author of the book we are reading. He is exceptional at mathematics and logic, has an almost photographic memory, and loves dogs, rats and outer space. He struggles to understand facial expressions, metaphors and lies, and he cannot bear being touched or hearing too many sounds at once. He calms himself by listing prime numbers, doing quadratic equations or picturing a long red train running through an imaginary countryside. Haddon deliberately avoids naming any diagnosis in the text itself \u2014 the word \u2018autism\u2019 or \u2018Asperger\u2019s\u2019 does not appear in the novel \u2014 and has said since publication that he did not set out to write a book \u2018about autism\u2019. Christopher is strictly honest, morally serious and unexpectedly brave, and the novel\u2019s greatest achievement is letting us see the world entirely through his eyes without patronising him.',
    },
    {
      name: 'Ed Boone',
      role: "Christopher's father; a heating engineer",
      body: 'Ed is raising Christopher alone in Swindon and has been for two years. He is tired, short-tempered and obviously loves his son, but he has also built Christopher\u2019s world on a lie \u2014 telling him that his mother is dead rather than admitting that she left. Ed\u2019s killing of Wellington, revealed roughly halfway through the novel, is a moment of real violence that Haddon refuses to soften; at the same time Haddon keeps showing Ed\u2019s patience, his guilt and his slow, practical attempts to earn Christopher\u2019s trust back. He is one of the most carefully drawn fathers in modern British fiction.',
    },
    {
      name: 'Judy Boone',
      role: "Christopher's mother",
      body: 'Christopher has been told Judy died of a heart attack; the letters he finds reveal she is alive and living in London with Mr Shears. Through her letters and her later scenes we learn that she found Christopher\u2019s needs overwhelming, lost her temper with him, and came to feel she was a worse mother than Ed. She is not idealised: Haddon lets her be exhausted, regretful and sometimes clumsy, and her decision to leave is presented as understandable rather than excusable. When Christopher arrives in Willesden she takes responsibility for him immediately and gives up her London life to do so.',
    },
    {
      name: 'Siobhan',
      role: "Christopher's teacher at his special school",
      body: 'Siobhan is the adult Christopher trusts most. She is calm, specific and attentive; she teaches him to read faces from diagrams, encourages him to write the murder-mystery novel, and gives him the practical advice he cites throughout the book (\u2018if you don\u2019t know what someone is thinking, ask them\u2019). She is not his mother, and the novel is careful about that distinction \u2014 but she is the voice of the stable, literate world Christopher hopes to enter.',
    },
    {
      name: 'Mrs Shears',
      role: 'Neighbour; owner of the murdered dog Wellington',
      body: 'Mrs Shears lives across the road from the Boones and finds Wellington dead at the start of the book. Her brief relationship with Ed after her husband left \u2014 she \u2018cooked us meals\u2019 and stayed over \u2014 has already ended badly by the time the novel begins, and the quarrel that led Ed to kill Wellington grew out of that breakdown. She is a minor character in terms of dialogue but the whole plot spools out of her grief.',
    },
    {
      name: 'Mr Shears',
      role: "Mrs Shears's ex-husband; Judy's partner in London",
      body: 'Mr Shears does not appear in person until Christopher reaches Willesden. Judy left Ed to live with him, and the two of them have been in London for nearly two years. When Christopher turns up on the doorstep Mr Shears is visibly unable to cope \u2014 he resents the disruption, is sharp with Christopher, and the relationship with Judy collapses. He stands for the kind of adult self-interest that Haddon, quietly, will not forgive.',
    },
    {
      name: 'Mrs Alexander',
      role: 'Elderly neighbour who inadvertently reveals the affair',
      body: 'A widow who lives a few doors down and who tries to befriend Christopher during his investigation. She is the one who, believing Christopher already knows the truth, tells him about his mother\u2019s affair with Mr Shears \u2014 and who tries, kindly and unsuccessfully, to call him back when she sees how upset he is. She is one of the rare adults in the novel who treats Christopher as a competent person rather than a puzzle.',
    },
    {
      name: 'Toby',
      role: "Christopher's pet rat",
      body: 'Toby goes everywhere with Christopher and travels with him to London in his rucksack. Christopher loves animals because, he says, they cannot lie and their faces are easy to read. Toby\u2019s brief escape on the Underground \u2014 Christopher lies on the edge of the platform to retrieve him \u2014 is one of the novel\u2019s most frightening scenes and a crisp emblem of the risks Christopher is willing to take for the creatures he trusts.',
    },
  ],
  themes: [
    {
      title: 'Difference and neurodivergence',
      body: 'The novel\u2019s central achievement is a first-person voice that presents Christopher\u2019s way of thinking from the inside, without explanation or apology. He cannot read facial expressions easily, hates the colours yellow and brown, cannot bear being touched and calms himself with prime numbers and quadratic equations. Haddon deliberately keeps any clinical label out of the text itself, and has said repeatedly since publication that the book is not \u2018about autism\u2019 but about a specific boy. Some autistic readers and writers have praised that refusal and the empathy of the voice; others have criticised the novel for trading on a stereotype and for being written by a non-autistic author. The theme is therefore worth discussing as both Haddon\u2019s subject and the novel\u2019s contested legacy.',
    },
    {
      title: 'Truth and lies',
      body: 'Christopher cannot tell lies and cannot bear people who do; the adults around him lie, with varying motives, almost constantly. Ed\u2019s central deception \u2014 that Judy is dead \u2014 is told to protect Christopher from something he thinks Christopher cannot handle, and the novel measures the cost of that lie against the cost of the truth. Haddon sets up a clear structural pattern: each time Christopher is told a lie, something breaks; each time he is told the truth, even a painful one, something is repaired. The book\u2019s moral argument is that lies told out of love are still corrosive and that honesty, even when brutal, is a form of respect.',
    },
    {
      title: 'Family and betrayal',
      body: 'The Boones are a family held together by failure \u2014 of communication, of patience, of marriage \u2014 and the novel tracks what happens when the lies that patch them together are pulled out. Ed\u2019s killing of Wellington, Judy\u2019s leaving, Mr Shears\u2019s coldness and Mrs Shears\u2019s grief all form a web of small betrayals from which Christopher has to find his own way. Haddon refuses the consolation of a reunited family at the end: Ed and Judy do not get back together, and trust between Christopher and his father is rebuilt very slowly and very conditionally, through the puppy, the allotment, daily practice.',
    },
    {
      title: 'Order versus chaos',
      body: 'Christopher experiences the world as a flood of sensory information that threatens, at any moment, to become unmanageable. His coping strategies \u2014 prime numbers, maps, lists, timetables, mathematical proofs, the imagined red train \u2014 are ways of making order visible. Haddon mirrors this in the form of the book itself: chapter numbers are primes, information arrives in diagrams and footnotes, and digressions on Pythagoras or the Monty Hall problem sit beside the plot. The novel\u2019s argument is that pattern-making is not a quirk but a form of survival, and its most stressful sequences (the police interview, the train station, the Underground) are the ones in which pattern breaks down.',
    },
    {
      title: 'Independence and growing up',
      body: 'The second half of the novel is a coming-of-age journey in the most literal sense: Christopher leaves home alone, navigates a hostile public world and finds his mother. Haddon treats the journey with great seriousness \u2014 Christopher is genuinely frightened, genuinely endangered, and genuinely competent \u2014 and refuses to let the reader either pity him or cheer him on. The final exam and Christopher\u2019s plan to go to university read as the next steps in an independence he has earned by the end of the book, but Haddon leaves the ending open: Christopher asks whether he can \u2018do anything\u2019 and the novel declines to answer on his behalf.',
    },
    {
      title: 'Trust and animal bonds',
      body: 'Christopher loves dogs and rats because, he says, animals cannot lie and their faces are easy to read. Wellington\u2019s death is painful partly because an animal is one of the very few creatures Christopher trusts without reservation; Toby goes with him on his journey as a pocketable source of calm; and Ed\u2019s gift of the puppy Sandy at the end is the most serious gesture of reparation he knows how to offer. The motif lets Haddon make a quiet argument about trust: it is easier between species than within Christopher\u2019s own family, and rebuilding human trust takes longer and costs more.',
    },
  ],
  historicalContext: [
    'The Curious Incident of the Dog in the Night-Time was published in 2003 and is firmly set in early-2000s Britain: a Swindon of cul-de-sacs, Tesco deliveries, commuter trains and 1571 answerphone messages, with London at the other end of a First Great Western line. The novel captures a very specific texture of suburban English life \u2014 school runs, allotments, shift-work fathers \u2014 and its realism is one reason it travels so well into the classroom. Students often respond to it as one of the first books on the syllabus whose world looks and sounds like the one they actually live in.',
    'The book sits inside an ongoing change in how autism and neurodivergence are understood and represented in fiction. In the 1990s and early 2000s, autistic characters in mainstream British fiction were rare and often written as puzzles to be solved by neurotypical protagonists. Haddon places an autistic-coded narrator at the centre of his own story and gives him full authority over the reader\u2019s access to the plot. Since publication, however, the book has been debated seriously within autistic communities: some readers value its empathy and its refusal of a medical-tragedy framing, while others have argued that it recycles stereotypes (savant maths ability, literal-mindedness, lack of empathy) and that Haddon, who is not autistic, should not have been the voice telling the story. Haddon has acknowledged the debate publicly and has said he would write some of it differently now; crucially, he has also said the words \u2018autism\u2019 and \u2018Asperger\u2019s\u2019 were deliberately kept out of the novel itself and that any labelling on book blurbs was a publisher decision rather than his.',
    'The book\u2019s form is as important as its subject. Chapters are numbered with prime numbers (2, 3, 5, 7, 11 \u2026) rather than in the usual sequence; the text includes hand-drawn maps, emoticons, timetables, mathematical proofs, a Monty Hall problem diagram and an appendix containing Christopher\u2019s A Level Maths question. These features place the reader inside Christopher\u2019s head and have become part of what the book is \u2018about\u2019 when it is taught. The novel won the Whitbread Book of the Year in 2003, was longlisted for the Man Booker Prize, and was adapted for the stage by playwright Simon Stephens for the National Theatre in 2012, directed by Marianne Elliott; that adaptation won Olivier and Tony Awards and has shaped the way many readers encounter the book in the classroom.',
  ],
  quotations: [
    {
      quote:
        '"It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears\u2019 house."',
      who: 'Christopher — Chapter 2 (opening)',
      analysis:
        'The novel\u2019s opening sentence establishes Christopher\u2019s precision with time, his noticing of exact detail and the flat, affectless tone that the book will sustain. It is also a sly opening for a detective novel: a body on a lawn.',
    },
    {
      quote: '"I find people confusing."',
      who: 'Christopher — early chapters',
      analysis:
        'A quietly devastating thesis statement. Christopher states his central difficulty in one sentence and the novel then spends 226 chapters showing what living that difficulty actually means.',
    },
    {
      quote: '"I do not tell lies."',
      who: 'Christopher',
      analysis:
        'Christopher\u2019s absolute honesty is both a moral stance and a plot device: it means every lie he uncovers in other people will count. It also makes his running away from his father an unusually serious decision.',
    },
    {
      quote:
        '"Prime numbers are what is left when you have taken all the patterns away. I think prime numbers are like life. They are very logical but you could never work out the rules, even if you spent all your time thinking about them."',
      who: 'Christopher',
      analysis:
        'Christopher\u2019s defence of the prime-numbered chapters and of his own way of thinking. The sentence explains both a formal feature of the book and the theme of order-within-chaos.',
    },
    {
      quote: '"Mother had died 2 years ago."',
      who: 'Christopher',
      analysis:
        'A flat, declarative line whose later falsification is the hinge of the novel. Haddon uses Christopher\u2019s plain style to deliver the central lie without commentary.',
    },
    {
      quote: '"I like dogs. You always know what a dog is thinking."',
      who: 'Christopher',
      analysis:
        'Sets up the moral logic behind Christopher\u2019s preference for animals over people and foreshadows the grief of Wellington\u2019s death.',
    },
    {
      quote: '"I see everything."',
      who: 'Christopher',
      analysis:
        'Christopher\u2019s claim that he notices more than other people do, illustrated by a long list of details from a field. The novel reframes difference as a kind of perceptual power rather than a deficit.',
    },
    {
      quote:
        '"This will not be a funny book. I cannot tell jokes because I do not understand them."',
      who: 'Christopher',
      analysis:
        'A meta-comment on the book\u2019s own tone and on Christopher\u2019s relationship to language. In practice the novel is often funny, but only because Christopher\u2019s literal readings of the adult world keep exposing its absurdities.',
    },
    {
      quote: '"Your mother was not a very good mother, Christopher."',
      who: 'Ed',
      analysis:
        'Part of Ed\u2019s attempt to justify the years of silence about Judy. The line is both a lie (by omission) and a symptom of the hurt that produced the larger lie that she was dead.',
    },
    {
      quote: '"I killed Wellington, Christopher."',
      who: 'Ed',
      analysis:
        'The confession that breaks the novel in half. Everything after this point is about what Christopher does with a truth he cannot accept.',
    },
    {
      quote: '"Dad had murdered Wellington. That meant he could murder me."',
      who: 'Christopher',
      analysis:
        'Christopher\u2019s logic is watertight and terrifying. Haddon uses this line to show that strict honesty, applied without nuance, can lead to decisions that an adult would soften \u2014 but also that Christopher\u2019s fear is not irrational.',
    },
    {
      quote: '"I was going to have to go and live with Mother."',
      who: 'Christopher',
      analysis:
        'The decision to run to London, stated with the same flatness as every other fact in the book. Haddon lets the emotional weight come from the reader rather than from Christopher\u2019s prose.',
    },
    {
      quote:
        '"Being frightened is like when you suddenly wake up in the dark and you think that there is someone in the room with you."',
      who: 'Christopher — during the London journey',
      analysis:
        'One of the rare moments when Christopher attempts a simile for an emotion. Its clumsiness is moving, and it marks how hard he is working to describe his own fear on the train.',
    },
    {
      quote: '"I hadn\u2019t been on the underground before."',
      who: 'Christopher',
      analysis:
        'Understatement doing a lot of work. The Underground sequence \u2014 sensory overload, lost rat, near-fall onto the tracks \u2014 is one of the most tense passages in the book, and Haddon introduces it with a sentence a child might write.',
    },
    {
      quote:
        '"She put her arms round me and said, \u2018Christopher, Christopher, Christopher\u2019."',
      who: 'Judy — arrival in Willesden',
      analysis:
        'The repetition of the name carries the reunion; Christopher, who cannot bear being touched, accepts the embrace. Haddon trusts the scene without sentimentalising it.',
    },
    {
      quote: '"I got an A grade."',
      who: 'Christopher — A Level Maths result',
      analysis:
        'The short, declarative sentence lands with extraordinary force. Christopher has wanted to prove that he is not stupid, and he has done it. The book\u2019s quietest triumph.',
    },
    {
      quote:
        '"And I know I can do this because I went to London on my own, and because I solved the mystery of Who Killed Wellington? and I found my mother and I was brave and I wrote a book and that means I can do anything."',
      who: 'Christopher — final page',
      analysis:
        'The novel\u2019s last sentence. Haddon ends on a conditional triumph: Christopher states what his achievements mean to him without the narrative confirming or denying the claim. The conditional hope is part of the book\u2019s honesty.',
    },
    {
      quote: '"Dad said, \u2018Christopher, do you understand that I love you?\u2019"',
      who: 'Ed — late in the novel',
      analysis:
        'A sentence that would be unremarkable in another novel is extraordinary here, because it is a direct question from a father who is trying to rebuild trust through language Christopher can parse.',
    },
  ],
}

export default async function CuriousIncidentPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>
          AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.
        </span>
      </div>
      <StudyTools
        textName="The Curious Incident of the Dog in the Night-Time"
        textType="novel"
        examBoard="Edexcel IGCSE"
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
