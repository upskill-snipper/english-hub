import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Boys Don't Cry, Malorie Blackman (2010). A complete guide: the text had no
 * guide anywhere before this file, only the catch-all set-text page, and the
 * registry named the wrong book (Fiona Scarlett's 2021 novel of the same title)
 * until 25 September 2026.
 *
 * IN COPYRIGHT, AND NO EDITION IS HELD, so nothing here could be checked against
 * the novel itself. Every quotation was therefore taken from an exam-board
 * document that prints the novel's words, each read as extracted text on 26
 * September 2026, not through a summary:
 * - Pearson's 1ET0/01 question papers for June 2022, 2023, 2024 and 2025, which
 *   print a short quotation with its speaker above each Boys Don't Cry question;
 * - Pearson's mark schemes for the same four series, whose indicative content
 *   quotes the novel throughout and says who speaks or what the moment is;
 * - Pearson's Scheme of Work for Boys Don't Cry, which quotes the novel with page
 *   and chapter references to the Corgi paperback;
 * - the Eduqas Summer 2025 examiners' report, the first series the novel was set.
 *
 * WORDING PRINTED BY MORE THAN ONE BOARD DOCUMENT: "no way I was going to let
 * Melanie and some baby ruin my plans" (2023 paper and mark scheme); "Of course I
 * know Adam is gay. I've come to terms with that" (2023 paper and mark scheme);
 * "I'm your uncle Adam and I love you" (2022 mark scheme, twice); "Scab-face"
 * (2022 and 2023); "having a hole shot through" (2022 and 2025); "pulling
 * everyone's strings" (2023 and 2024); "not working and living off benefits"
 * (2023 and 2024); "Immunizations, work, a place at a state nursery" (2024 and
 * 2025); "nothing I ever did was good enough" (2023 and 2025); "I don't sleep
 * around" (2023 and 2025); "You make my skin crawl" (2023 and 2024; the 2022
 * mark scheme has only the bracketed paraphrase "makes [his] skin crawl").
 *
 * SINGLE-SOURCE WORDING, kept because an exam board prints it as the novel's
 * words: the rest, each from one Pearson paper or mark scheme; "plaintive
 * mewing", "grizzling", "She was... beautiful" (page 111), "I'd been lumbered
 * with a kid that was supposedly mine" and "Some get to walk away, some don't"
 * (Chapter 26), from the Scheme of Work; "fence which needed to be knocked
 * down", from the Eduqas report. The Scheme of Work prints "She was... beautiful"
 * once with three dots and twice with four, and one of its headings attaches the
 * line to Adam, but the task beneath it tracks Dante's attitude to Emma to it and
 * its model question on it is about Dante, so it is attributed to Dante here.
 *
 * ATTRIBUTION. A quotation is attributed only as far as its source goes. Chapter
 * placings follow the WJEC knowledge organiser's plot summary, which groups the
 * chapters in fives, and are given as ranges; where no source places a line, the
 * guide describes the moment instead of giving a chapter. Three placings are
 * single chapters, from LitCharts' chapter summaries: the newspaper shop
 * (Chapter 23), Dante's clenched fists (Chapter 46) and his call to Aunt Jackie
 * (Chapter 47). LitCharts' numbering matches the Scheme of Work's, which is to the
 * Corgi paperback: both put Adam's injuries, the two policewomen and the truth
 * about Dante's conception in Chapter 38. The plot facts of the opening (the
 * postman, the doorbell) are from the blurb on Blackman's own website. The blurb
 * says Dante agrees to mind the baby "for an hour or two", while LitCharts has
 * Melanie ask for a few minutes, so the guide gives no length of time.
 *
 * CORRECTED FROM AN EARLIER, UNCHECKED DRAFT of this file (25 September), which
 * this file replaces:
 * - it said Dante twice stopped "before violence"; the knowledge organiser and
 *   the 2024 mark scheme say he attacks Josh, then stops himself going too far;
 * - it said the woman in the shop accuses Dante after he has given up
 *   university; the shop is in Chapters 21-25 and he cancels his place in 26-30;
 * - it placed the revelation of Dante's conception "in hospital". The board
 *   sources place it only in Chapter 38, the chapter of Adam's injuries, but
 *   LitCharts' Chapter 38 does set it in the hospital waiting area, where Dante
 *   overhears Aunt Jackie and Dad, so that placing was right and is used again;
 * - it put Emma's kiss on Adam's cheek at the end; the organiser puts it in
 *   Chapters 41-45;
 * - it annotated two phrases as part of the opening passage that no source
 *   places there ("It's your daughter", "you whip out the old nappy");
 * - it credited Pearson's 2023 and 2025 examiners' reports with several
 *   observations. Those reports are over the size this session could fetch, so
 *   nothing was checked against them, and every claim resting on them alone was
 *   removed: the observations kept are the Eduqas report's.
 *
 * WHERE SOURCES DISAGREED, the guide says less:
 * - Pearson dates the novel 2011 (the Corgi paperback its papers cite); the first
 *   edition is Doubleday, 2010 (Wikipedia, WJEC). 2010 is used.
 * - WJEC counts fifty chapters; the Scheme of Work mentions a tension graph for
 *   "chapters 1-49". The guide follows WJEC and says fifty.
 * - Melanie had Emma at 17 (2025 mark scheme) and is a parent at 18 (2024 mark
 *   scheme; the 2024 paper has Dante say she is not yet nineteen). The guide
 *   gives her age as eighteen and does not give Emma's.
 *
 * RE-CHECKED ON 26 SEPTEMBER 2026, after the session writing this file was
 * interrupted: every quoted phrase was searched again in the extracted text of
 * the board documents above, and its speaker and moment read in context. Two
 * changes followed. The theme on fatherhood no longer says Dante says "It's your
 * daughter" to Melanie's face, since the 2025 mark scheme gives the words but not
 * the listener. And the extract on walking away is placed by LitCharts' chapter
 * summaries, which put Dante's call to Aunt Jackie in Chapter 47, after Adam's
 * overdose; the plea "Aunt Jackie, I ... I need your help" is Pearson's (2025
 * mark scheme), the placing is LitCharts' and the knowledge organiser's. The
 * Wikipedia reviews and the Blackman facts were fetched again and agree.
 *
 * INDEPENDENT FACT-CHECK, 26 SEPTEMBER 2026. Every board document above was
 * downloaded again and its text extracted afresh, and every quoted phrase in
 * this file was searched in it: all are there word for word, including "I'd
 * been lumbered..." and the Telegraph review in the Scheme of Work's columns.
 * The plot was then read against LitCharts' full summary and its chapter
 * summaries. What that changed:
 * - Adam's kiss of Josh comes on the night of the attack, after the break-up,
 *   not before it (LitCharts, and the 2023 mark scheme's "despite knowing what
 *   the consequences will be"). The character entry had the order reversed.
 * - Dad tells Dante he is proud of him and loves him together, at the hospital
 *   while Adam is in surgery (LitCharts Chapter 39, the 2022 mark scheme), not
 *   in two stages as the entry on Dad had it.
 * - The organiser gives Adam a black eye after the night at the Bar Belle;
 *   LitCharts, twice, a split lip. The timeline now says only that he is hurt.
 * - Emma's kiss comes after Veronica's second visit and the night before Adam's
 *   overdose (LitCharts Chapters 44 to 46). The relationship note said the kiss
 *   helped him through his depression; it now gives that as Pearson's reading
 *   and sets the overdose against it.
 * - The "party" is a night out at the Bar Belle (LitCharts Chapter 20), with
 *   Collette and Adam there. And "She was... beautiful" fits Dante there: in
 *   Chapter 20, when Logan calls Emma ugly, Dante realises how beautiful she is.
 *   Adam also calls her beautiful, in Chapter 12, which may explain the Scheme
 *   of Work heading, but page 111 falls in Chapters 19 to 23, not 12.
 * - Just Sayin' was first published in 2022 (Penguin, Wikipedia); Blackman's
 *   own site gives the 2023 paperback date. Blackman was made a dame in the
 *   King's Birthday Honours of June 2026, which the guide had not recorded.
 * - Section 28 bound local authorities, not schools directly; reworded.
 * Kept after checking: "I turned round and walked away" is attached by the 2023
 * mark scheme to Dante's revenge on Josh ("to make him [Josh] suffer"). LitCharts
 * Chapter 40 also has Dante turn away after roughing up Paul, so the line could
 * conceivably come from that scene; the guide follows the board.
 *
 * DELIBERATELY NOT QUOTED: the homophobic slurs Josh and Logan use, which the
 * novel contains and which this guide's readers do not need reproduced.
 */
export const guide: StudyGuide = {
  slug: 'boys-dont-cry',
  title: 'Boys Don’t Cry',
  author: 'Malorie Blackman',
  form: 'novel',
  scope:
    'The whole novel (2010). Pearson Edexcel GCSE English Literature (1ET0) sets it in Paper 1, Section B, where you answer one of two essay questions on the whole novel; each question prints a short quotation with its speaker as a starting point and asks you to refer to the novel’s context, and no extract is printed. Eduqas GCSE English Literature sets it in Component 2, Section A, as one source-based question with an extract printed, first examined in summer 2025. Both exams are closed book. Chapter references follow the WJEC knowledge organiser; page numbers, where given, are to the Corgi paperback used in Pearson’s scheme of work, and other printings are paginated differently, so find moments by chapter. The Penguin Readers Level 5 edition is an abridged adaptation for learners of English, not the set text.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Malorie Blackman 2010. First published by Doubleday; the paperback is published by Corgi Childrens, Penguin Random House. Short quotations are used for criticism and review.',
  },
  workLength: {
    words: 80000,
    basis:
      'An estimate, not a count: no copy of the novel is held here. Penguin lists the Corgi Childrens paperback at 320 pages, and Pearson’s support booklet gives the same figure. At roughly 230 to 280 words on a page of young adult fiction with a great deal of dialogue, that is between about 70,000 and 90,000 words. Any length over 3,000 words puts the novel under the long-work limit of 400 quoted words, so the estimate does not loosen anything.',
  },

  overview: {
    summary: [
      'Seventeen-year-old Dante Bridgeman is waiting for the postman to bring his A-level results. He is clever and ambitious, with a place at university to study history and a plan to become a journalist. Then the doorbell rings. It is Melanie, his ex-girlfriend, and she has a baby with her. The baby is Emma, and Melanie says she is his. Dante is left looking after her while Melanie goes out, supposedly not for long, and Melanie does not come back. His results, when they come, are four A* grades, and the future they were meant to unlock has already changed.',
      'The novel follows the months that come next, in the semi-detached house Dante shares with his father, Tyler, a widower who has brought up his two sons alone, and his younger brother Adam, who is sixteen and wants to be an actor. Dad is angry, then practical. Dante looks for a way out: he researches fostering, orders a DNA test and confirms his university place. Around him the world gives its verdict, from friends who joke about the baby at a party to a stranger in a newspaper shop who assumes he is living off benefits. Slowly, and not in a straight line, Dante learns to care for his daughter. He cancels his university place, the DNA test confirms that Emma is his, and he breaks up with a girlfriend whose sister, a social worker, has been drawn in to have Emma taken into care.',
      'Alongside Dante’s story runs Adam’s. Adam is gay and does not hide it at home; Dante calls it a phase and Dad hopes it will fade away. In secret, Adam has been in a relationship with Josh, Dante’s best friend, who abuses him in public. After Dante’s eighteenth birthday meal, the brothers are attacked on the way home and Josh beats Adam severely. The crisis breaks the family’s silences: in the same chapter Dante learns that his parents married because his mother was pregnant with him, and at the hospital father and son tell each other they love each other. Dante goes after Josh, attacks him, then stops himself and walks away. In the final chapters Adam, withdrawn and depressed, takes an overdose and survives; Dante, under strain, comes close to hitting Emma, walks away and asks his Aunt Jackie for help. By the end the family is closer than it has ever been.',
      'The title is a popular saying about how boys should behave, and the novel puts it on trial. Its men find it hard to say what they feel: a father who gives orders instead, a son who hides in his bedroom, a best friend who turns his fear of himself into violence. The strongest answers follow both brothers and show how Blackman makes each story explain the other: Dante learning to care for someone, and Adam paying the price of other people’s fear. One reading calls the novel a warning about silence. A more convincing one sees it as a portrait of a family learning, late and painfully, to speak.',
    ],
  },

  context: [
    {
      heading: 'Malorie Blackman',
      body: 'Blackman was born in London in 1962 to parents who had come to Britain from Barbados, and worked as a systems programmer before she became a writer. Her first book was published in 1990, and she has since written more than seventy books for children and young adults, among them Pig-Heart Boy (1997) and the Noughts & Crosses series, which began in 2001. She received the Eleanor Farjeon Award in 2005 and an OBE for services to children’s literature in 2008, was the UK Children’s Laureate from 2013 to 2015, won the PEN Pinter Prize in 2022, and was made a dame for services to literature in the King’s Birthday Honours of 2026. She co-wrote the Doctor Who episode Rosa and published an autobiography, Just Sayin’, in 2022. She has said that she wanted to show Black children in fiction simply getting on with their lives and having adventures, as the characters in the books she read as a child did. The WJEC knowledge organiser makes the same point about this novel: the Bridgemans are a Black family, and racism is not its focus; its subject is prejudice about teenage parenthood and sexuality, seen from a Black male perspective.',
    },
    {
      heading: 'Publication and reception',
      body: 'Boys Don’t Cry was first published by Doubleday in 2010 and came out in paperback from Corgi, the edition Pearson’s question papers cite, in 2011. Its blurb presents it as a novel about teenage fatherhood, and calls that territory new. Reviewers were mostly warm. In The Guardian Mary Hoffman called it “a good book and a great story” and found Dante’s journey to fatherhood “genuinely moving”; in The Daily Telegraph Toby Clements called it an “adroit investigation of family relations, very clearly portrayed”; in The Independent Nicholas Tucker admired its characters but felt that “too much plot manipulation” had crept in. That disagreement is worth having in an exam: whether the novel’s crises feel earned or engineered is a real question, and the guide takes it up under structure. There is also a Penguin Readers version, abridged in simpler English for language learners; it is not the text you are examined on.',
    },
    {
      heading: 'The title and ideas of masculinity',
      body: 'The title borrows a popular saying: that boys should not show hurt or fear, and should keep their feelings to themselves. The WJEC knowledge organiser says the novel raises questions about what society expects of males, which is why it takes that phrase for its title, and Pearson’s scheme of work opens its teaching with the question of whether boys should cry. Almost every man in the novel is tested against the saying. Dad struggles to talk about anything personal. Dante hides in his bedroom rather than admit he is out of his depth. Josh hides who he is so completely that the strain turns into violence. Adam, the one male character who does not hide, is the one who is punished for it. In the first Eduqas series, in summer 2025, examiners reported much relevant discussion of toxic masculinity, and remarked that the novel seemed to resonate with candidates on this point.',
    },
    {
      heading: 'Teenage parents and single-parent families',
      body: 'Dante is an unusual figure in fiction and in public debate: a teenage father who stays. Pearson’s mark schemes point to the context behind him. Single-parent families make up nearly a quarter of families with dependent children in the UK, most of them headed by women, and bringing up a baby is still stereotypically thought of as a woman’s role, which is why Dante’s first instinct is that Emma is Melanie’s problem. Blackman sets out the stereotypes of young parents through other people’s mouths: a stranger in a newspaper shop assumes Dante has had a child to claim benefits, while another woman defends him because he has not run off. The welfare state appears in the person of Veronica, a social worker, whose power to act frightens Dante and whose advice he later finds useful. Melanie’s story shows the other side: a young mother with no family support, a father who left, a mother who threw her out, and one bedroom in an aunt’s tiny flat.',
    },
    {
      heading: 'Being gay in Britain around 2010',
      body: 'Adam grows up in a country whose laws had changed quickly. Section 28 of the Local Government Act 1988, which banned local authorities from promoting homosexuality, or from promoting the teaching of its acceptability as a family relationship in the schools they maintained, was repealed in England and Wales only in 2003. Civil partnerships began in December 2005, and the Equality Act 2010, passed in the year the novel was published, extended protection from discrimination because of sexual orientation to all areas of life. The first same-sex marriages in England and Wales took place in March 2014, after the novel was written. The law had moved faster than some attitudes, and the novel shows the gap: Adam is confident, but he is dismissed at home, abused in public and finally attacked. Pearson’s 2023 mark scheme adds that in almost all Western countries violence against LGBTQ+ people is classed as a hate crime. Pearson’s scheme of work notes that Adam is well read, with literary references around pages 115 and 117 of the Corgi paperback, among them a reference to “Dorian Gray”, the hero of Oscar Wilde’s novel of 1890. Wilde was sent to prison in 1895 for gross indecency with other men, so one reading is that Blackman gives Adam a literary history of gay men punished for who they were.',
    },
    {
      heading: 'On the syllabus',
      body: 'Pearson added the novel to Edexcel GCSE English Literature (1ET0) in 2019, one of two novels and two plays added, with a poetry collection, in response to student and teacher feedback about the lack of diversity of British texts at GCSE; it was taught from September 2019. Pearson describes it as “a hard-hitting novel that revolves around two brothers and their widowed father”, exploring family relationships and especially those between father and son. Its questions from 2022 to 2025 give a sense of what the board values: love and Adam (2022), Dante and attitudes to sexuality (2023), teenage parenthood and Josh (2024), women and growing up (2025). Every question asks you to refer to the novel’s context. Eduqas added it for assessment from 2025, replacing Kazuo Ishiguro’s Never Let Me Go, and set it for the first time in summer 2025 with an extract and a question on growing up; its examiners reported that the text worked well across the whole ability range. The two boards reward different things in this section, so check your own paper: Edexcel wants context woven into an argument, Eduqas wants the extract used as a springboard into the whole novel, with analysis of the writer’s methods.',
    },
    {
      heading: 'Young adult realist fiction',
      body: 'The WJEC knowledge organiser calls the novel young adult realist fiction: a contemporary setting, teenage narrators, ordinary places (a family home, a newspaper shop, a party, a restaurant, a hospital) and problems that real teenagers face. It can also be called a bildungsroman, a novel of growing up, and both the organiser and Pearson’s 2025 mark scheme describe it as one. Realism matters to Blackman’s purpose: because the Bridgemans are recognisable, the prejudices they meet are recognisable too, and readers are invited to notice the same attitudes in themselves.',
    },
  ],

  themes: [
    {
      title: 'Fatherhood and responsibility',
      body: 'The novel’s central question is what Dante owes a child he did not choose. At first his answer is nothing. He thinks of Emma as a threat to “my plans”, considers adoption and fostering, orders a DNA test and insists, in effect, that the baby is Melanie’s to raise: “It’s your daughter”. By the later chapters he says of Emma “She’s my world”, has given up university and is planning for work and nursery. One reading finds a single turning point, perhaps the party where Dante defends Emma against Logan, or the moment on page 111 of the Corgi paperback, picked out by Pearson’s scheme of work, when he finds her beautiful. The more convincing reading is that responsibility here is learned through practice: nappies, a near-fall on the stairs, and a hundred small choices to stay. Blackman also puts fathers side by side. Dad, it turns out, married Dante’s mother because she was pregnant with Dante, so the son is repeating the father’s story, and the question becomes whether he can do it better.',
    },
    {
      title: 'Masculinity and showing emotion',
      body: 'The title states a rule, and the novel counts its cost. Dad’s advice to his son, “grow up, man up”, treats being a man as hardness, and his difficulty with personal and emotional subjects has shaped the family. Josh is the rule taken to its end: he hides who he is behind hostility, and the pressure turns into violence against the boy he has been secretly seeing. Against them Blackman sets moments of open feeling that are hard-won and awkward: Dad’s “I love you son. Very much” at the hospital, Dante’s stumbling reply, and Dante asking Aunt Jackie for help. The novel also redefines strength. Dante attacks Josh and then stops himself before he goes too far; later he stops before he hits Emma. Both times he walks away, and Aunt Jackie praises exactly that. A sceptical reader might say the book is more interested in teaching than in its characters. The better reading notices that its men do not change because they are told to; they change because silence has nearly cost them someone they love.',
    },
    {
      title: 'Family and love',
      body: 'Pearson’s mark schemes describe the Bridgemans as a modern single-parent family who cope with everyday pressures by supporting each other. Love here is rarely said and often done: Dad buys what the baby needs and builds the cot with Adam, the brothers trade insults like “Scab-face” and defend each other when it matters, and Adam loves Emma from the moment he meets her. Emma acts as a catalyst. Her arrival forces the family to talk, and when Adam is at his lowest she kisses his scarred cheek. The novel extends family beyond the house: Aunt Jackie, who could not have children of her own, becomes the adult Dante can confide in. Blackman’s point seems to be that a family is not a fixed thing but something its members keep choosing, which is why Dante’s choice to stay with Emma mirrors his father’s choice, years before, to bring up two boys alone.',
    },
    {
      title: 'Sexuality and homophobia',
      body: 'Blackman shows a range of attitudes to Adam’s sexuality, and a strong answer separates them. Adam is confident and open. Dante is dismissive, saying he will grow out of it, until Adam turns the logic back on him by asking whether Dante will grow out of his own “heterosexual phase”. Dad hopes it will fade away, but later says plainly that he has come to terms with it, and is contemptuous of the people who attacked his son. Logan is openly hateful and manipulates others. Josh is the most complicated: he is in a secret relationship with Adam, abuses him in front of others, and in the end attacks him. When Dante goes after him, Josh admits he is gay, and what he says makes Dante question his own attitudes. One reading treats Josh as the villain; a more convincing one sees him as a warning about what fear and shame can do, without excusing the harm. The novel contains homophobic slurs, which this guide does not reproduce; in an essay, describe them as abuse rather than quoting them.',
    },
    {
      title: 'Growing up',
      body: 'Both boards set this theme in 2025, Eduqas in its first question on the novel and Pearson in one of its two. Dante is the obvious focus, forced to grow up in a single summer, but Blackman shows growing up as uneven and sometimes reluctant. Melanie had to grow up too early, with a father who left and a mother who worked two jobs, which is why she says she brought herself up. Adam grows up through pain: his mother’s death, the attack, and a crisis that nearly kills him. Even Dad grows, learning at last to say what he feels. Eduqas’s examiners noticed that while many answers focused on Dante, many more widened the focus to Adam, Emma, Josh and Tyler, which is the way to treat this theme. A strong answer also asks what growing up means in this novel. It is not independence, which is what Dante wanted from university. It is the opposite: accepting that other people depend on you, and learning to depend on others.',
    },
    {
      title: 'Prejudice and judgement',
      body: 'Dante spends much of the novel being judged, and Blackman lets the judges speak. His friends joke about the baby, Logan calls her ugly, a stranger in a newspaper shop assumes he is out of work and living off benefits, and Collette draws in her sister, a social worker, to try to have Emma taken into care. The same novel shows prejudice against Adam, so two kinds of judgement run side by side: one about young parents, one about sexuality. Blackman is careful to show that prejudice is not the whole of society. In the shop a second woman defends Dante, Veronica the social worker turns out to be fair, and Dad condemns the people who attacked his son. One reading is that the novel is simply exposing bigots. The more interesting reading is that it asks readers to check their own first reactions, since Dante himself judges Melanie and Adam before he learns better.',
    },
    {
      title: 'Grief and loss',
      body: 'Dante and Adam’s mother died when they were younger, and her absence shapes the novel. Adam says losing her was like “having a hole shot through” his heart, and his terror of doctors and hospitals comes from watching her waste away in hospital. Dad has brought the boys up alone and struggles to talk about anything emotional, which helps explain why the family communicates so badly. Dante compares Aunt Jackie with his mother, vinegar against honey, and part of his story is learning to accept care from a woman who is not her. Aunt Jackie has her own loss: she could not have children, and her husband left her because of it. The WJEC knowledge organiser lists grief among the novel’s themes, and a strong answer can argue that much of the novel’s silence is grief that nobody has been allowed to express.',
    },
  ],

  characters: [
    {
      name: 'Dante',
      role: 'Dante Bridgeman, aged seventeen at the start; the novel’s main narrator and protagonist',
      body: 'Dante is intelligent, driven and, at first, self-centred. He achieves four A* grades and plans to study history at university and become a journalist; university is his way to leave home and be independent. His relationship with his father is strained, and after his results he says that nothing he did was ever good enough. His first reactions to Emma are the reactions the novel wants us to question: he implies that Melanie has slept with other boys, asks how any of this is his problem, calls Emma “it” and thinks of adoption. But Blackman lets us watch him change through small, concrete acts: defending Emma at a party, being badly shaken after she nearly falls down the stairs, cancelling his university place, breaking up with Collette. His treatment of Adam changes too, from calling his sexuality a phase to defending him and seeking revenge for the attack. His revenge is the last test. He attacks Josh, then stops himself before he goes too far and walks away, and when he later comes close to hitting Emma he stops again and asks for help. Dante’s arc is the novel’s argument: maturity is not the absence of anger but what you do with it.',
    },
    {
      name: 'Adam',
      role: 'Adam Bridgeman, aged sixteen; Dante’s younger brother, and narrator of many chapters',
      body: 'Adam is warm, witty and an optimist, a contrast with a brother who finds it hard to see the best in people, and he dreams of being a famous actor. He is well read, and his literary references set him apart from his brother. He was deeply marked by his mother’s death and is terrified of doctors, so a head injury from sport at school, and the headaches that follow, force him to face his fear. He loves Emma instantly. He is gay and confident about it. His secret relationship with Josh ends when Adam refuses to be with “someone who was living a lie”. On the night of the attack, when Josh abuses him, he does not hit back but kisses him on the lips, knowing what the consequences will be. He is left with serious injuries, including a broken jaw, and needs surgery; afterwards he shuts himself in his bedroom and becomes depressed, and in the final chapters he takes an overdose. He survives, talks honestly with Dante about his fears, and rejoins his family. Adam is easy to treat as a sub-plot, but his chapters carry much of the novel’s feeling, and he is the character who never pretends to be what he is not.',
    },
    {
      name: 'Dad (Tyler)',
      role: 'Tyler Bridgeman, the boys’ father; a widower who has brought them up alone',
      body: 'Dad is loving but finds it very hard to show it. His first response to Emma is anger, and he tells Dante he must take responsibility; then he becomes practical, buying what the baby needs and putting the cot together with Adam. When he finds out about the DNA test he is angry again, because he sees it as Dante trying to escape his responsibilities. He struggles with Adam’s sexuality, hoping it will fade away, but later says he has come to terms with it and condemns the people who attacked his son. The crisis reveals his own past: he and Dante’s mother married because she was pregnant with Dante. At the hospital, while Adam is in surgery, he tells Dante how proud of him he is and that he loves him. Dad is the novel’s clearest picture of the title’s rule and of its cost, and his change matters because it gives his sons permission to change too.',
    },
    {
      name: 'Emma',
      role: 'Dante and Melanie’s baby daughter',
      body: 'Emma is a baby, with no voice of her own, but she drives the whole novel. She arrives on the first day and changes every plan; she nearly falls down the stairs; she takes her first steps; she loves her father unconditionally; and when Adam, after the attack, will see no one, she kisses his scarred cheek. Dante’s changing words for her, from “it” to “her”, are one of the clearest ways to show his development, and Eduqas’s examiners singled out candidates who traced them. A strong answer treats Emma as a catalyst: she does not change, but everyone around her does.',
    },
    {
      name: 'Melanie',
      role: 'Dante’s ex-girlfriend, aged eighteen; Emma’s mother',
      body: 'Melanie appears only at the start of the novel, but she casts a long shadow. She had Emma at seventeen, left school before finishing her A-levels, was thrown out by her mother and lives in one bedroom of her aunt’s tiny flat. Her father left, and her mother worked two jobs, so, as she tells Dante, she brought herself up. She clearly loves Emma, knows how to care for her, and says she would die for her, yet she leaves her, because she needs time to get her head together and, as she puts it, “the thoughts in my head scare me”. Blackman does not ask us to condemn her. Instead the novel sets society’s strong condemnation of mothers who leave beside the praise Dante receives for staying, and a strong answer can ask whether that double standard is fair.',
    },
    {
      name: 'Aunt Jackie',
      role: 'The boys’ aunt, a source of support and plain speaking',
      body: 'Dante first describes Aunt Jackie as vinegar next to his mother’s honey, but she becomes the adult he can talk to. When he admits he is scared of failing, she tells him that she could not have children and that this is why her husband left her. She tells Dante she is proud of him, challenges Dad over why he did not tell Dante the truth, and, when Dante nearly hits Emma, reminds him that he walked away. Pearson’s 2025 question on women in the novel shows how much she matters: she is the bridge between father and son, and the person who teaches both of them that feelings have to be said.',
    },
    {
      name: 'Josh',
      role: 'Dante’s best friend since secondary school',
      body: 'Josh and Dante have been mates since they started secondary school, and they share years of jokes. But the friendship drifts after Logan attaches himself to their group, which also includes Paul, and Josh turns out to be easily manipulated. Josh is gay and terrified that he will lose his friends and family if he comes out. He is in a secret relationship with Adam while abusing him in front of others, and after Dante’s eighteenth birthday meal at the Bar Belle he beats Adam badly. When Dante attacks him in revenge, Josh admits he is gay. Later he writes a letter of apology, admitting he had been pretending to be something he was not. Josh is not excused, and his violence is shown as a serious crime; but Blackman makes him understandable, which is harder and more useful than making him a monster.',
    },
    {
      name: 'Logan',
      role: 'A member of Dante and Josh’s group',
      body: 'Logan joins the group and gradually pulls it apart. He mocks Emma at the party, is openly homophobic and, Dante comes to realise, has been manipulating the others all along, including encouraging Josh against Adam; Dante concludes that they had all been played, even Josh. He joins in the verbal abuse but does not physically assault Adam himself, which is Blackman’s point: prejudice can do its damage through other people.',
    },
    {
      name: 'Collette',
      role: 'Dante’s girlfriend during the novel',
      body: 'Collette has three A* grades and an A, and a place at university to study Computer Science: she is the path Dante was meant to take. She makes it clear she will go to university whatever happens, is intolerant of Emma, and deliberately involves her sister Veronica, a social worker, in an attempt to have Emma taken into care. Dante breaks up with her. She represents the life Dante has lost and the judgement of his own peers.',
    },
    {
      name: 'Veronica',
      role: 'A social worker; Collette’s sister',
      body: 'Veronica represents the welfare system, with the power to take Emma away. Her first call worries Dante, who feels threatened and judged. On her second visit she can see how loved Emma is, and Dante later admits that a lot of what she told him was useful. She shows the novel’s fairness: an institution Dante fears turns out to be on the child’s side, and so, in the end, on his.',
    },
  ],

  keyQuotes: [
    {
      text: 'no way I was going to let Melanie and some baby ruin my plans',
      where: 'Dante, early in the novel, with university less than a month away',
      analysis:
        'Pearson printed this line above its 2023 question on Dante. The possessive “my plans” puts Dante at the centre of his own story, and “some baby” refuses Emma a name or a relationship to him. It is the attitude the whole novel exists to change, so it makes a strong starting point for any essay on his development.',
    },
    {
      text: 'I’d been lumbered with a kid that was supposedly mine',
      where: 'Dante, while he still doubts that Emma is his',
      analysis:
        'Pearson’s scheme of work uses this line for an exam-style question on responsibility. “Lumbered” makes Emma a burden dumped on him, and “supposedly” clings to the hope that she is not his at all, the hope that sends him to order a DNA test. Both words dodge the fact the novel will make him face.',
    },
    {
      text: 'Maybe I could put it up for adoption',
      where: 'Dante, early in the novel',
      analysis:
        'The pronoun “it” turns Emma into an object, something to be disposed of. “Maybe” makes the thought tentative rather than cruel, a frightened boy looking for an exit. Eduqas’s examiners noted candidates tracing Dante’s later shift from “it” to “her”, so this is the line to set against it.',
    },
    {
      text: 'like she was a ticking time bomb',
      where: 'Dante, describing how he holds Emma early in the novel',
      analysis:
        'The simile makes a baby into a danger that could go off at any moment, which is comic and revealing at once. It captures Dante’s fear of getting things wrong, and the idea of time running out hints at the pressure on his own plans. Notice that the pronoun here is already “she”: his language wobbles before it settles.',
    },
    {
      text: 'No manual, no briefing, no crash course',
      where: 'Dante, on becoming a parent',
      analysis:
        'A tricolon of three negatives, each borrowed from the worlds of work and training, stresses how unprepared Dante is. The missing verb gives the line the clipped rhythm of complaint. It speaks for every new parent, which is part of Blackman’s point: Dante is not uniquely hopeless, just young.',
    },
    {
      text: 'grow up, man up. You have a daughter',
      where: 'Dad (Tyler) to Dante, once he knows about Emma',
      analysis:
        'Dad’s advice comes as short imperatives, the language of orders rather than comfort. “Man up” ties responsibility to a hard idea of masculinity, the very idea the title names. Yet the final sentence is simple and true, and Dante does in time rise to it, so the line holds both the problem and the answer.',
    },
    {
      text: 'nothing I ever did was good enough',
      where: 'Dante, about his father, after his A-level results',
      analysis:
        'The absolute words “nothing” and “ever” show how deep Dante’s resentment runs, even on the day of four A* grades. It reveals a father who cannot praise and a son who needs to hear it. Set it against Dad’s later “I want you to know how proud I am of you” to show how far both have come.',
    },
    {
      text: 'I want you to know how proud I am of you',
      where: 'Dad to Dante, as the two grow closer',
      analysis:
        'Pearson’s 2023 mark scheme uses this line to show Dante’s growing maturity bringing him and his father closer. “I want you to know” is the sound of a man deciding to say something aloud rather than assume it is understood, which is exactly what this father has failed to do for most of the novel.',
    },
    {
      text: 'How could she have been stupid enough to have a kid at our age?',
      where: 'Dante, on Melanie',
      analysis:
        'Pearson printed this above its 2024 question on teenage parenthood. The question is meant to be rhetorical, but it condemns Dante himself: “our age” admits they are the same age, yet the blame lands only on “she”. It is a sharp example of the double standard the novel exposes.',
    },
    {
      text: 'I brought myself up, Dante. I don’t know how to bring up anyone else',
      where: 'Melanie to Dante, at the start of the novel',
      analysis:
        'The repeated phrase “bring up” links Melanie’s childhood to her motherhood: she cannot give what she was never given. Addressing Dante by name makes it a plea rather than an excuse. The line asks readers to understand a mother who leaves, rather than simply condemn her, and it shapes the novel’s theme of growing up too soon.',
    },
    {
      text: 'I’m your uncle Adam and I love you',
      where: 'Adam, on meeting Emma (Chapters 11–15)',
      analysis:
        'Adam introduces himself to a baby with a name, a relationship and a declaration, all in one breath. The ease of it contrasts sharply with Dante’s fear, and shows that love in this family is possible straight away. It also marks Adam as the Bridgeman who says what he feels, which is what the rest of the family must learn.',
    },
    {
      text: 'I live, eat, breathe and dream of being an actor',
      where: 'Adam, on his ambition',
      analysis:
        'Pearson printed this above its 2022 question on Adam. The list of four verbs, the basic acts of staying alive plus “dream”, makes acting as necessary to him as breathing. It shows a boy who knows exactly who he is, which makes the later injuries to his face, and to his confidence, all the more painful.',
    },
    {
      text: 'having a hole shot through',
      where: 'Adam, on losing his mother, which was like having one shot through his heart',
      analysis:
        'A violent image for grief: loss as a wound made by a bullet, sudden and permanent. It explains Adam’s terror of hospitals and shows that his cheerfulness sits on top of real pain. The image also foreshadows the physical violence he will suffer later, when grief and injury come together.',
    },
    {
      text: 'heterosexual phase',
      where: 'Adam to Dante, answering Dante’s claim that he will grow out of being gay',
      analysis:
        'Adam turns Dante’s own logic back on him with sarcasm. If being gay is a phase, then so is being straight, and the absurdity of that exposes the assumption behind Dante’s dismissal. The two words show Adam’s wit and his confidence, and they make Dante, for once, the one who has not thought things through.',
    },
    {
      text: 'Of course I know Adam is gay. I’ve come to terms with that.',
      where: 'Dad (Tyler Bridgeman)',
      analysis:
        'Pearson chose this line for its 2023 question on attitudes to sexuality. “Of course” sounds impatient, as if the matter were obvious, yet “come to terms” admits a struggle. The phrase describes a process, not instant acceptance, which makes Dad a more honest portrait of change than a father who had never needed to change.',
    },
    {
      text: 'You make my skin crawl',
      where: 'Josh to Adam, in front of others',
      analysis:
        'Josh’s public insult is physical disgust, as if Adam were something to recoil from. Read with hindsight, once we know Josh is in a secret relationship with Adam, the line becomes a projection: the revulsion he performs for others is fear of himself. It shows how hiding can turn into cruelty.',
    },
    {
      text: 'pulling everyone’s strings like some malevolent puppet master',
      where: 'Dante, realising Logan’s part in what has happened',
      analysis:
        'The metaphor turns the group into puppets and Logan into the hidden hand behind them. “Malevolent” is a strong, formal adjective in a teenager’s mouth, a sign of Dante’s anger. The image partly shifts blame from Josh to Logan, and a good answer can ask whether that is fair or whether it lets Josh off too lightly.',
    },
    {
      text: 'I love you son. Very much',
      where: 'Dad to Dante, at the hospital after the attack on Adam (Chapters 36–40)',
      analysis:
        'After a novel of orders and silences, Dad says the words at last. The short second sentence, “Very much”, sounds like a man adding to a sentence he has never finished before. Coming at the family’s lowest point, it suggests that crisis breaks the rule the title names, and Dante’s stumbling reply shows how new this is.',
    },
    {
      text: 'I turned round and walked away',
      where: 'Dante, after going after Josh (Chapters 41–45)',
      analysis:
        'Plain words for the hardest thing Dante does. Having sworn revenge and attacked Josh, he stops himself before he goes too far, and the simple actions of the sentence make restraint sound like strength. Walking away has meant abandonment until now; here it becomes a choice, and Aunt Jackie will later praise him for doing it again.',
    },
    {
      text: 'You walked away',
      where: 'Aunt Jackie to Dante, after he nearly hits Emma (Chapters 46–50)',
      analysis:
        'Three words that redefine what Dante has done. Instead of condemning the anger, Aunt Jackie praises the choice he made about it. The line echoes his earlier walking away from Josh, and it answers Melanie’s leaving at the start: walking away can be desertion or protection, and Dante has learned the difference.',
    },
    {
      text: 'I am so proud of you',
      where: 'Aunt Jackie to Dante, taking his chin in her hand',
      analysis:
        'Pearson printed this above its 2025 question on women. The intensifier “so” and the direct “you” give Dante the praise he felt his father never gave him. That it comes from Aunt Jackie shows the role women play in the novel, supplying the words the men cannot yet say.',
    },
    {
      text: 'She was... beautiful',
      where:
        'Dante, looking at Emma (page 111 of the Corgi paperback, as Pearson’s scheme of work gives it)',
      analysis:
        'The pause before “beautiful” makes the word feel like a discovery, as if Dante is surprised by his own feeling. It is the opposite of “it”. Pearson’s scheme of work traces Dante’s attitude to Emma to this line, so it works well as the turning point in an essay on his development.',
    },
    {
      text: 'I love you, Emma. I love you very, very much.',
      where: 'Dante, to Emma',
      analysis:
        'Pearson printed this above its 2022 question on love. The repetition of “I love you” and the doubled “very” make the feeling overflow, the reverse of the family’s usual silence. Set beside Dad’s “Very much”, it suggests that the words of love are being passed on and are coming more easily to Dante than to his father.',
    },
    {
      text: 'She’s my world',
      where: 'Dante, on Emma, later in the novel',
      analysis:
        'Three words that reverse the opening. The girl who was “some baby” and “it” is now the whole of his world, and the possessive “my”, once attached to his plans, now attaches to her. The metaphor is simple, even a cliché, which suits a narrator who has stopped performing and started meaning what he says.',
    },
  ],

  extracts: [
    {
      title: 'Melanie brings Emma to Dante',
      where: 'Chapters 1–5, the opening of the novel',
      pointer:
        'The opening chapters, from Dante waiting for his A-level results to Melanie leaving the baby with him. Pearson’s scheme of work reads Chapters 1 to 5 as the first 28 pages of the Corgi paperback.',
      summary:
        'Dante is waiting for the postman to bring his A-level results when the doorbell rings. It is Melanie, his ex-girlfriend, carrying a baby, and she tells him that the baby, Emma, is his daughter. His first reaction is disbelief and hostility: he suggests she has slept with other boys, which she firmly denies, and he cannot see why any of this should be his problem. He is left looking after the baby while Melanie goes out, supposedly not for long, and Melanie does not come back.',
      annotations: [
        {
          phrase: 'Emma is your daughter',
          note: 'Four plain words that give the baby a name and a relationship before Dante can refuse either. Melanie states it as fact, and the rest of the novel is Dante catching up with the sentence.',
        },
        {
          phrase: 'I don’t sleep around',
          note: 'Melanie’s denial tells us what Dante has implied: his first instinct is to question her rather than himself. Pearson’s mark schemes use it to show how self-centred he is at the start, and it pushes readers to side with Melanie here.',
        },
        {
          phrase: 'How exactly was that my problem?',
          note: 'A rhetorical question that shuts the conversation down. “Exactly” adds a sneer, and “my problem” shows Dante treating a child as a nuisance to be handed back, which reflects the assumption that bringing up a baby is a mother’s job.',
        },
      ],
      question:
        'Starting with this opening, write about how Blackman presents Dante’s attitude to fatherhood at different points in the novel.',
    },
    {
      title: 'The women in the newspaper shop',
      where: 'Chapter 23',
      pointer:
        'The scene in the newspaper shop, where Dante stops for drinks while out with Emma and Collette, in which a stranger turns on him for having a child so young: read from the blonde woman’s accusations to the brunette woman’s defence of him.',
      summary:
        'In a newspaper shop, a blonde woman turns on Dante for having a child so young. She assumes he is not working, is living on benefits and has had a baby in order to claim them. A second woman, a brunette, defends him: unlike a lot of men, she says, he has not run off. Two strangers argue about what kind of young man he is, and neither knows anything about him.',
      annotations: [
        {
          phrase: 'not working and living off benefits',
          note: 'The woman’s charge is a ready-made stereotype of young parents, not a response to Dante. “Living off” suggests a parasite, and the irony is that he has just finished his A-levels and has a university place, which he will soon give up to look after his daughter.',
        },
        {
          phrase: 'child benefit and Jobseekers Allowance',
          note: 'Naming the actual payments makes the accusation sound informed, as prejudice often does. Blackman lets the stereotype speak in its own vocabulary so that readers recognise a real attitude, not a cartoon villain.',
        },
        {
          phrase: 'done a runner like a lot of men do',
          note: 'The brunette’s defence is also a judgement: it praises Dante by condemning men in general. Blackman shows that even support can rest on a stereotype, and that a father who stays is treated as remarkable.',
        },
      ],
      question:
        'Starting with this scene, write about how Blackman presents attitudes to young parents in Boys Don’t Cry.',
    },
    {
      title: 'Walking away',
      where: 'Chapters 46–47',
      pointer:
        'The episode near the end of the novel, on the morning of Adam’s overdose, in which Dante, under strain, feels his anger rising at Emma, stops himself and turns to Aunt Jackie: read from his clenching fists to her words to him afterwards. The moment with Emma comes in Chapter 46, and his call to Aunt Jackie in Chapter 47.',
      summary:
        'Near the end of the novel, on the morning Adam is taken to hospital after his overdose, Dante is left at home with Emma, loses his temper with her and comes close to hitting her. He stops himself, moves away from her and phones Aunt Jackie to ask for help, and she comes over. Rather than condemning him, she points to what he got right: he walked away. The episode recalls his earlier decision to stop and walk away from Josh, and it shows what the novel means by strength.',
      annotations: [
        {
          phrase: 'my fists slowly clenching',
          note: 'The adverb “slowly” stretches the moment, so the reader watches anger build in Dante’s body before he acts on it. Fists have been the language of Josh’s attack, and Dante sees for a moment that he is capable of violence too.',
        },
        {
          phrase: 'Aunt Jackie, I … I need your help',
          note: 'The broken, repeated “I” shows how hard these words are for Dante to say. Asking for help is the opposite of the rule in the title, and it is a sign of maturity rather than weakness.',
        },
        {
          phrase: 'You walked away',
          note: 'Aunt Jackie praises the choice rather than dwelling on the anger. The phrase echoes “I turned round and walked away” and turns walking away, which began the novel as Melanie’s leaving, into an act of protection.',
        },
      ],
      question:
        'Starting with this moment, write about how Blackman presents Dante’s development as a father.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Pronouns: from “it” to “her”',
      example:
        'Early on Dante thinks, “Maybe I could put it up for adoption”; later he says of Emma, “She’s my world”.',
      effect:
        'The shift from an object pronoun to a person is one of the clearest ways to show Dante’s development, and Eduqas’s examiners noted many candidates using it in 2025. The best answers notice that it is not a clean switch: he already holds Emma “like she was a ticking time bomb”, so his pronouns wobble, as his feelings do, before they settle.',
    },
    {
      technique: 'Simile and metaphor: Emma as danger and obstacle',
      example:
        'Dante holds Emma “like she was a ticking time bomb” and sees her as “a strait jacket of anxiety”; Eduqas’s examiners reported much discussion of a simile likening her to a “fence which needed to be knocked down”.',
      effect:
        'The images treat a baby as a threat, a restraint and a barrier, which tells us far more about Dante than about Emma. A strait jacket restrains a person for their own safety, so one reading is that the metaphor hints, perhaps without Dante meaning it, that responsibility might hold him together as well as hold him back.',
    },
    {
      technique: 'Lists and tricolon',
      example:
        '“No manual, no briefing, no crash course”, and Dante’s later list of “Immunizations, work, a place at a state nursery”.',
      effect:
        'The first list, all negatives, shows how unprepared he is; the second, all practical tasks, shows him planning for someone else. Putting the two side by side is a neat way to show his growth in his own language.',
    },
    {
      technique: 'Imperatives and the language of masculinity',
      example: 'Dad’s “grow up, man up. You have a daughter”.',
      effect:
        'Commands replace conversation. “Man up” links responsibility to toughness, which is the idea the title names, and Dad’s habit of ordering rather than explaining is part of what the family has to unlearn.',
    },
    {
      technique: 'Hesitation and broken speech',
      example:
        'Dante’s reply to his father at the hospital, “I … I love you too. Dad.”, and his “Aunt Jackie, I … I need your help”.',
      effect:
        'The repeated, interrupted “I” shows words of love and need catching in Dante’s throat. Blackman writes emotional difficulty into the punctuation, so the reader hears how rarely such sentences have been spoken in this house.',
    },
    {
      technique: 'Repetition and echo',
      example:
        'Dad’s “I love you son. Very much” and Dante’s “I love you, Emma. I love you very, very much.”',
      effect:
        'The two declarations use the same words, and Dante’s doubles the intensifier. The echo suggests that openness is being handed down from father to son to granddaughter, and each generation says more than the last.',
    },
    {
      technique: 'Sarcasm and reversal',
      example: 'Adam asks whether Dante will grow out of his “heterosexual phase”.',
      effect:
        'Adam’s humour is a weapon and a defence. By reversing Dante’s argument he exposes its absurdity without shouting, which shows his intelligence and confidence, and invites the reader to laugh with him rather than at him.',
    },
    {
      technique: 'Animal imagery and its reversal',
      example:
        'Pearson’s scheme of work traces Dante’s descriptions of Emma from “plaintive mewing” and “grizzling” to “She was... beautiful” on page 111 of the Corgi paperback.',
      effect:
        'Mewing likens the baby to a kitten, something small and faintly irritating rather than a person. The later adjective gives her beauty and personhood. Tracking a character’s words for Emma is a precise way to measure change.',
    },
    {
      technique: 'Metaphor of manipulation',
      example: 'Dante on Logan: “pulling everyone’s strings like some malevolent puppet master”.',
      effect:
        'The metaphor makes the friendship group into a puppet show and exposes how prejudice spreads through people who do not question it. It also raises a moral question worth arguing: how far are Josh’s actions his own?',
    },
    {
      technique: 'A colloquial first-person voice',
      example:
        'The brothers’ banter, such as “Scab-face”, and Dante’s blunt “Well hell no” at the idea that his daughter is his concern.',
      effect:
        'The informal register makes the narrators sound like real teenagers, which draws young readers in and makes the novel’s serious issues feel close to home. It also lets Blackman show affection hidden in insults, which is how these brothers love each other.',
    },
  ],

  structureForm: [
    {
      heading: 'Two narrators, two brothers',
      body: 'The chapters are narrated in the first person by Dante and by Adam. Dante is the main protagonist, but Adam narrates many chapters, and the dual narrative lets Blackman do two things. It gives the reader access to what each brother hides from the other, so that we know more about Adam’s secret life than Dante does, which creates dramatic irony and dread. And it lets the two stories comment on each other: one brother learning to accept a child, the other struggling to be accepted himself. Pearson’s scheme of work even suggests reading only Dante’s or only Adam’s chapters to see how differently the story looks from each side.',
    },
    {
      heading: 'A linear story in short chapters',
      body: 'The WJEC knowledge organiser counts fifty chapters, in a paperback of about three hundred pages, so most are short, and the story is told in order, from one summer morning through the following months. The short chapters and frequent switches of narrator keep the pace quick, which suits a young adult readership. The organiser notes that the two narratives sometimes run on slightly different timescales, which creates a flashback effect, and that there is a jump in time between Adam being in hospital and his coming home.',
    },
    {
      heading: 'An opening that starts with the crisis',
      body: 'The novel begins not with background but with the event that changes everything: the wait for results, the doorbell, Melanie and the baby. The effect is to throw the reader, like Dante, straight into the problem. Pearson’s scheme of work draws attention to the contrast the first chapter sets up between Dante, awaiting his results at home among family pictures, and Melanie, smoking and alone with a baby. The rest of the novel gradually closes that gap.',
    },
    {
      heading: 'Main plot and sub-plot',
      body: 'Pearson’s scheme of work treats Adam’s story as a sub-plot that complicates Dante’s, and the two lines converge at the attack. The scheme notes that the crisis of Adam’s injuries and the revelation of Dante’s own conception come in the same chapter, Chapter 38, so the family’s worst moment is also the moment its oldest secret comes out. The structural point is that crisis forces truth: only when the family nearly loses Adam does it start to speak honestly.',
    },
    {
      heading: 'History repeating',
      body: 'The revelation that Dad and Dante’s mother married because she was pregnant with Dante reframes the whole novel. Dante is not the first Bridgeman to face unexpected parenthood; he is repeating his father’s story. Pearson’s scheme of work frames it as a question of history repeating itself, and asks whether there is any reason to suppose Dante will repeat all his father’s mistakes. A strong answer can argue either way: the silences and the orders, or an ending that suggests he has learned to do it differently.',
    },
    {
      heading: 'The motif of walking away',
      body: 'Leaving runs through the novel. Melanie walks away from Emma at the start; Melanie’s own father left; Aunt Jackie’s husband left her. Pearson’s scheme of work picks out a line from Chapter 26, “Some get to walk away, some don’t”, and the novel spends its second half redefining the phrase. When Dante walks away from Josh, and later from Emma in anger, walking away becomes an act of self-control rather than desertion, and Aunt Jackie’s “You walked away” makes the change explicit. Following a single motif like this across the novel is an efficient way to show whole-text knowledge.',
    },
    {
      heading: 'A bildungsroman with two heroes',
      body: 'A bildungsroman follows a young person’s growth into adulthood. Here the form is doubled. Dante grows into responsibility, and Adam into survival and self-acceptance, and both arcs end with a return to the family rather than escape from it. That reverses the usual shape of the form, in which the young hero leaves home: Dante’s growth is measured by staying.',
    },
    {
      heading: 'Earned or engineered?',
      body: 'Blackman piles crisis on crisis in the later chapters: the attack, the revelation, the revenge, an overdose and Dante’s near loss of control with Emma. Reviewers disagreed about whether this works. Nicholas Tucker felt there was “too much plot manipulation”; Mary Hoffman found the novel moving without being sentimental. A strong answer can take a side. One argument is that the crises are needed to break a family that would otherwise never speak; another is that they arrive too conveniently to teach lessons. Either is rewardable if you support it from the text.',
    },
  ],

  vocabulary: [
    {
      term: 'Bildungsroman',
      definition:
        'A novel that follows a young person’s growth into adulthood. Pearson’s 2025 mark scheme and the WJEC knowledge organiser both call Boys Don’t Cry one.',
    },
    {
      term: 'Young adult realist fiction',
      definition:
        'Fiction written mainly for teenagers, set in the recognisable present and dealing with problems real young people face.',
    },
    {
      term: 'Dual narrative',
      definition:
        'A story told by two narrators. Here Dante and Adam each narrate chapters in the first person.',
    },
    {
      term: 'First-person narrator',
      definition:
        'A narrator who tells the story as “I”, so the reader sees events through that character’s eyes and feelings.',
    },
    {
      term: 'Protagonist',
      definition: 'The main character of a story. Dante is the protagonist of Boys Don’t Cry.',
    },
    {
      term: 'Sub-plot',
      definition:
        'A secondary storyline that runs alongside the main plot. Pearson’s scheme of work treats Adam’s story as the novel’s sub-plot.',
    },
    {
      term: 'Paternity test',
      definition:
        'A DNA test showing whether a man is a child’s biological father. Dante orders one in the hope of an escape route, and his father is angry when he finds out.',
    },
    {
      term: 'Fostering and adoption',
      definition:
        'Fostering places a child with carers for a time; adoption makes new parents the child’s legal parents permanently. Dante considers both early on.',
    },
    {
      term: 'Taken into care',
      definition:
        'When a local authority becomes responsible for a child and places them with foster carers or in a children’s home. Collette tries to bring this about.',
    },
    {
      term: 'Social worker',
      definition:
        'A professional employed to protect and support children and families. Veronica is the social worker in the novel.',
    },
    {
      term: 'Welfare state',
      definition:
        'The system by which the state supports its citizens through health, education, employment and social security.',
    },
    {
      term: 'Child benefit and Jobseeker’s Allowance',
      definition:
        'State payments: the first to people bringing up children, the second to unemployed people looking for work. The woman in the shop accuses Dante of having a child to claim them.',
    },
    {
      term: 'Stereotype',
      definition:
        'A fixed, oversimplified idea about a type of person, such as the assumption that young parents live on benefits.',
    },
    {
      term: 'Homophobia',
      definition:
        'Prejudice, hostility or violence against people who are gay, lesbian or bisexual.',
    },
    {
      term: 'Hate crime',
      definition:
        'A crime motivated by hostility to who the victim is, for example because of their sexual orientation, race or religion.',
    },
    {
      term: 'Toxic masculinity',
      definition:
        'A term for harmful ideas of manhood, such as that men must never show vulnerability or must prove themselves through aggression. Eduqas examiners noted candidates discussing it in 2025.',
    },
    {
      term: 'Catalyst',
      definition:
        'Something that causes change in others without changing itself. Emma can be read as the novel’s catalyst.',
    },
    {
      term: 'Motif',
      definition:
        'An image, idea or phrase that recurs through a text and gathers meaning, such as walking away in this novel.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the reader knows something a character does not. Adam’s chapters let us know more about his secret life than Dante does.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          '“grow up, man up. You have a daughter” (Dad). Explore how fatherhood is presented in Boys Don’t Cry. You must refer to the context of the novel in your answer.',
        skill: 'Whole-text essay with context, in the Edexcel style',
        guidance: [
          'Open with a thesis that covers more than Dante: for example, that Blackman presents fatherhood as something learned through practice, and that the novel compares two fathers who faced the same situation.',
          'Dante at the start: “no way I was going to let Melanie and some baby ruin my plans”, “it”, adoption, the DNA test. Link to the context of teenage fatherhood and the stereotype that childcare is a mother’s job.',
          'Dante’s change: the party, the near-fall on the stairs, cancelling university, “She’s my world”, planning for work and nursery. Show the change as gradual.',
          'Dad as a father: the orders, the silence, the practical love (the cot), the revelation that he too became a father unexpectedly, and “I love you son. Very much”.',
          'The crisis near the end: Dante nearly hits Emma, walks away and asks for help. Argue that this, not perfection, is what good fatherhood looks like in the novel.',
          'Conclude on context: a single-parent family, headed by a man, coping by supporting each other, and what that says about modern fatherhood.',
        ],
      },
      {
        question:
          '“pulling everyone’s strings like some malevolent puppet master” (Dante, about Logan). How is friendship presented in Boys Don’t Cry? You must refer to the context of the novel in your answer.',
        skill: 'Whole-text essay with context, in the Edexcel style',
        guidance: [
          'Thesis: friendship in the novel is fragile and tested by peer pressure, and the most important relationships turn out to be within the family.',
          'Dante and Josh: mates since secondary school, drifting apart after Logan joins; the party and the jokes about Emma.',
          'Logan’s influence: mocking Emma, homophobia, manipulation; Dante’s realisation that they had all been played. Ask how far that excuses Josh.',
          'Josh and Adam: a secret relationship hidden behind public abuse; Adam refusing to be with “someone who was living a lie”. Link to the context of young people afraid to come out.',
          'The breakdown: the attack, Dante’s revenge and his choice to stop and walk away; Josh’s later letter of apology.',
          'Conclude by contrasting failed friendships with the support Dante finds in Aunt Jackie, Adam and even Veronica.',
        ],
      },
      {
        question:
          'Read the scene in Chapter 23 in which two women in a newspaper shop argue about Dante. Starting with this scene, write about how Blackman presents attitudes to young parents in the novel. In your response, refer to the scene and to the novel as a whole, and show your understanding of characters and events.',
        skill: 'Source-based essay on an extract and the whole novel, in the Eduqas style',
        guidance: [
          'Start with two or three precise details from the extract: “not working and living off benefits” as a ready-made stereotype, and the brunette’s defence, which praises Dante by condemning other men.',
          'Analyse a word or two closely, such as the verb phrase “living off”, then move out into the novel rather than working through the extract line by line.',
          'Dante’s own attitudes at the start: he judges Melanie before anyone judges him. Show the irony.',
          'Other attitudes: the friends’ jokes at the party, Collette’s attempt to have Emma taken into care, Veronica’s fairness, Dad’s anger and support.',
          'Melanie: a young mother judged more harshly than a young father. Ask whether the novel shares that double standard or exposes it.',
          'Conclude with what Blackman wants readers to take away: to question their first reactions.',
        ],
      },
      {
        question:
          'Starting with the episode in Chapters 46–47 in which Dante nearly loses his temper with Emma, write about how Dante changes over the course of the novel. In your response, refer to the episode and to the novel as a whole, and show your understanding of characters and events.',
        skill: 'Source-based essay on an extract and the whole novel, in the Eduqas style',
        guidance: [
          'Use the extract as a springboard: “my fists slowly clenching” and Aunt Jackie’s “You walked away”. Explain why this moment of near-failure shows how far he has come.',
          'Go back to the beginning: the self-centred Dante of the opening, “some baby”, “it”, adoption and the DNA test.',
          'The middle of the novel: the pronoun shift, the party, the stairs, cancelling university, breaking up with Collette.',
          'His relationship with Adam: from calling his sexuality a phase to defending him, and from revenge to walking away from Josh.',
          'His relationship with Dad: from “nothing I ever did was good enough” to “I love you son. Very much” and Dante’s broken reply.',
          'Conclude: Dante’s change is real but incomplete, and the novel shows maturity as a series of choices rather than a finished state.',
        ],
      },
      {
        question:
          '“I brought myself up, Dante. I don’t know how to bring up anyone else” (Melanie). How far does Blackman encourage the reader to sympathise with Melanie? You must refer to the context of the novel in your answer.',
        skill: 'Whole-text essay with context, in the Edexcel style',
        guidance: [
          'Thesis: Melanie appears only at the start, but Blackman gives her enough of a voice to make condemning her difficult.',
          'Her background: a father who left, a mother who worked two jobs and later threw her out, a single bedroom in an aunt’s tiny flat, school left unfinished.',
          'Her love for Emma and her competence (“you whip out the old nappy”) against her fear of her own thoughts. Treat the subject of her mental health with care.',
          'Dante’s judgement of her (“How could she have been stupid enough to have a kid at our age?”), and society’s harsher judgement of mothers who leave; contrast the praise Dante receives for staying.',
          'Weigh the other side: she leaves a baby without warning, and the novel does not hide the cost.',
          'Conclude with a clear judgement, supported by context on young single mothers without family support.',
        ],
      },
    ],
    tips: [
      'Know your board. Edexcel prints a short quotation and asks you to refer to context; it prints no extract, and its mark scheme rewards interpretation of the novel and its links to context, so spend your time on argument, references across the novel and context. Eduqas prints an extract and rewards analysis of the writer’s methods; context is not assessed in its Section A, and its examiners say it should appear only where it is relevant to the question and tied closely to the characters and events.',
      'Track Dante’s pronouns for Emma. Eduqas’s examiners noticed candidates who traced the shift from “it” to “her”, and it is the quickest way to show his development in his own words.',
      'Cover the beginning, middle and end. Eduqas’s examiners list references spanning the beginning, middle and ending of the story among the marks of a good answer, and advise using the extract as a springboard rather than analysing it line by line.',
      'Widen your focus. Eduqas’s examiners reported that many of the 2025 answers went beyond Dante to Adam, Emma herself, Josh and even Tyler. Aunt Jackie and Melanie are just as rewarding, as Pearson’s 2025 question on women showed.',
      'Use the term bildungsroman, and use it precisely: a novel of growing up. Pearson’s mark scheme for its 2025 paper uses it for this novel.',
      'Make context specific. Write about teenage fatherhood, single-parent families, the stereotype of young parents on benefits, or the law on sexuality around 2010, and tie each point to a moment in the novel. Eduqas’s examiners warn against context that is confused and very general.',
      'Learn a dozen short quotations exactly. Both exams are closed book. Pearson’s mark schemes reward relevant references and relevant paraphrase as well as short quotations, but a precise short quotation you can analyse is worth more than a long one you half remember.',
      'Handle the difficult material maturely. Write about the attack and Adam’s overdose factually, and describe homophobic abuse rather than quoting slurs.',
      'Spell the names correctly: Dante, Bridgeman, Melanie, Collette, Veronica. Eduqas’s examiners ask candidates to learn the spellings of character names.',
    ],
  },

  modelAnswer: {
    question:
      '“I … I love you too. Dad.” (Dante). How does Blackman challenge the idea in the novel’s title? You must refer to the context of the novel in your answer.',
    paragraph:
      'Blackman suggests that the rule in her title is learned, and can be unlearned, by showing the men of one family slowly finding words for love. Once Dad knows about Emma, his advice to Dante is a string of commands: “grow up, man up. You have a daughter”. The phrase “man up” treats manhood as hardness, and the full stop cuts the orders off from the plain fact that follows, as if responsibility were something to be obeyed rather than felt. Yet at the hospital after Josh’s attack on Adam, the same father tells Dante “I love you son. Very much”, and Dante’s reply, “I … I love you too. Dad.”, catches on its first word, as though the sentence has never been spoken aloud in that house. Set beside Dante’s words to his daughter, “I love you, Emma. I love you very, very much.”, the echo is striking: the same declaration, with the intensifier doubled, as if each generation can say a little more than the last. The title borrows a popular saying about how boys should behave, and Blackman answers it not with a lecture but with a family in which silence has nearly cost a son, and openness is what finally holds everyone together.',
    commentary: [
      'It opens with an argument about the whole novel rather than a description, so every sentence that follows is evidence for a claim.',
      'The quotations are short, accurate and analysed at word level (“man up”, the full stop, the stumbling “I … I”, the doubled “very”), which keeps the focus on how Blackman creates meaning.',
      'It links moments from different points in the novel, the advice after Emma’s arrival, the hospital and Dante with his daughter, which shows whole-text knowledge without retelling the plot.',
      'Context is woven into the argument through the title’s saying about how boys should behave, rather than bolted on as a separate paragraph.',
      'It interprets rather than asserts, using “suggests”, “as though” and “as if”, and it ends by returning to the question.',
    ],
  },

  timeline: [
    {
      where: 'Chapters 1–5',
      title: 'Results day and the baby',
      summary:
        'Dante is nervously waiting for his A-level results when Melanie arrives with a baby she says is his daughter, Emma, leaves her with him and does not return. Adam has been having headaches after a sporting head injury, and Dad insists he sees a doctor. Dante’s results arrive: four A* grades.',
      setting: 'The Bridgemans’ semi-detached house, as Dante waits for his results',
      who: ['Dante', 'Melanie', 'Emma', 'Adam', 'Dad (Tyler)'],
      quote: 'no way I was going to let Melanie and some baby ruin my plans',
      themes: ['Fatherhood and responsibility', 'Growing up'],
      tension: 4,
      significance:
        'The crisis comes first: the novel opens on the event that overturns Dante’s plans, and everything after is his response to it.',
    },
    {
      where: 'Chapters 6–10',
      title: 'Dad comes home',
      summary:
        'Out of his depth, Dante hides away in his bedroom with the baby. Adam’s hospital visit brings back memories of their mother dying when he was younger. When Dad and Adam come home and learn that Emma exists, Dad is angry and tells Dante he must take responsibility.',
      setting: 'The family home and the hospital',
      who: ['Dante', 'Dad (Tyler)', 'Adam', 'Emma'],
      themes: ['Fatherhood and responsibility', 'Grief and loss', 'Family and love'],
      tension: 3,
      significance:
        'The family’s old wound, the mother’s death, is opened in the same stretch of chapters as its new crisis, linking grief and responsibility from the start.',
    },
    {
      where: 'Chapters 11–15',
      title: 'Adam meets his niece',
      summary:
        'Adam meets Emma and they bond at once, which leaves Dante wondering why he feels nothing. Dante researches fostering and orders a DNA test. Adam tries to talk to him about being gay, and Dante refuses to accept it. Dad buys what the baby needs, and he and Adam put the cot together.',
      setting: 'The family home',
      who: ['Adam', 'Emma', 'Dante', 'Dad (Tyler)'],
      quote: 'I’m your uncle Adam and I love you',
      themes: ['Family and love', 'Sexuality and homophobia', 'Fatherhood and responsibility'],
      tension: 2,
      significance:
        'The two brothers’ stories are set side by side: one brother loves instantly while the other looks for a way out, and the sub-plot about Adam begins.',
    },
    {
      where: 'Chapters 16–20',
      title: 'The party',
      summary:
        'Dante struggles with Emma, argues with Dad and confirms his university place. He goes to a party with his friends at the Bar Belle but has to take Emma with him. Josh and Logan are rude about her, and when Logan calls the baby ugly, Dante defends her and declares that Emma is his daughter, then takes her home.',
      setting: 'A party with Dante’s friends at the Bar Belle',
      who: ['Dante', 'Emma', 'Josh', 'Logan', 'Collette', 'Adam'],
      quote: 'God, she’s kinda ugly, isn’t she?',
      themes: ['Fatherhood and responsibility', 'Prejudice and judgement'],
      tension: 3,
      significance:
        'Under attack from his friends, Dante claims Emma in public for the first time, an early sign of the father he will become.',
    },
    {
      where: 'Chapters 21–25',
      title: 'The shop and the stairs',
      summary:
        'Josh buys Adam a drink when they are alone, and the next morning Adam has been hurt in the face and is secretive about how it happened. A woman in a shop attacks Dante for having a child so young. Collette makes it clear she is going to university. Emma nearly falls down the stairs, Dante is badly shaken, and he posts off his DNA swabs despite feeling guilty.',
      setting: 'A newspaper shop and the family home',
      who: ['Dante', 'Emma', 'Adam', 'Josh', 'Collette'],
      quote: 'not working and living off benefits',
      themes: [
        'Prejudice and judgement',
        'Fatherhood and responsibility',
        'Sexuality and homophobia',
      ],
      tension: 3,
      significance:
        'Strangers judge Dante while he begins, through fear for Emma, to feel like her father; meanwhile hints of Adam’s secret life build dramatic irony.',
    },
    {
      where: 'Chapters 26–30',
      title: 'Aunt Jackie and the DNA result',
      summary:
        'Aunt Jackie arrives, and Dante tells her he is scared of failing; she tells him she could not have children, which is why her husband left her. Emma takes her first steps. Dad finds out about the DNA test and is angry that Dante is trying to escape his responsibilities. Dante reveals he has cancelled his university place, and the test confirms Emma is his.',
      setting: 'The family home',
      who: ['Dante', 'Aunt Jackie', 'Emma', 'Dad (Tyler)'],
      themes: ['Fatherhood and responsibility', 'Growing up', 'Family and love'],
      tension: 3,
      significance:
        'Dante gives up the future he wanted, and a new adult, Aunt Jackie, gives him the honesty his father cannot.',
    },
    {
      where: 'Chapters 31–35',
      title: 'Veronica, and two endings',
      summary:
        'Veronica, a social worker, calls and worries Dante. He breaks up with Collette, Veronica’s sister, and takes more responsibility for Emma. Adam ends his secret and abusive relationship, and the other person does not take it well.',
      setting: 'The family home',
      who: ['Veronica', 'Dante', 'Collette', 'Adam'],
      quote: 'someone who was living a lie',
      themes: [
        'Prejudice and judgement',
        'Sexuality and homophobia',
        'Fatherhood and responsibility',
      ],
      tension: 3,
      significance:
        'Both brothers end relationships that deny who they are becoming, and the reaction to Adam’s decision prepares for the violence to come.',
    },
    {
      where: 'Chapters 36–40',
      title: 'The attack',
      summary:
        'Out for Dante’s eighteenth birthday at the Bar Belle, Josh is abusive to Adam. On the way home the brothers are attacked, and Josh severely beats Adam, who is badly injured and later needs surgery. At the hospital Dante overhears the truth that his parents married because his mother was pregnant with him, and in the days that follow he and Dad say they love each other. Dante goes after Josh.',
      setting: 'The Bar Belle, the way home and the hospital',
      who: ['Dante', 'Adam', 'Josh', 'Dad (Tyler)', 'Aunt Jackie'],
      quote: 'I love you son. Very much',
      themes: ['Sexuality and homophobia', 'Masculinity and showing emotion', 'Family and love'],
      tension: 5,
      significance:
        'The main plot and the sub-plot collide, and the crisis breaks the family’s silences: the oldest secret and the words never said both come out.',
    },
    {
      where: 'Chapters 41–45',
      title: 'Dante walks away',
      summary:
        'Dante attacks Josh, who confesses that he is gay, and what Josh says makes Dante question his own attitudes. Dante stops himself and walks away. For months Adam is depressed and withdrawn. Veronica visits again and can see how loved Emma is, and Emma, whom Adam has been refusing to see, kisses his face.',
      setting: 'The confrontation with Josh, then the family home',
      who: ['Dante', 'Josh', 'Adam', 'Emma', 'Veronica'],
      quote: 'I turned round and walked away',
      themes: ['Masculinity and showing emotion', 'Sexuality and homophobia', 'Growing up'],
      tension: 4,
      significance:
        'Dante chooses restraint over revenge, the first time walking away becomes an act of strength rather than desertion.',
    },
    {
      where: 'Chapters 46–50',
      title: 'Two crises',
      summary:
        'Adam, struggling with his injuries and his loneliness, takes an overdose; he survives. Under great strain, Dante comes close to hitting Emma. He stops himself, walks away and asks Aunt Jackie for help, and she praises him for walking away.',
      setting: 'The family home and the hospital',
      who: ['Adam', 'Dante', 'Emma', 'Aunt Jackie'],
      quote: 'You walked away',
      themes: ['Masculinity and showing emotion', 'Fatherhood and responsibility', 'Growing up'],
      tension: 5,
      significance:
        'The novel’s darkest moments test both brothers at once, and in each case asking for help, not hiding, is what saves them.',
    },
    {
      where: 'Chapters 46–50',
      title: 'Closer than ever',
      summary:
        'After Adam comes home from hospital, he and Dante talk properly about their fears. Adam is able to rejoin his family, and by the end of the novel the Bridgemans, with Emma, are closer than they have ever been.',
      setting: 'The family home',
      who: ['Adam', 'Dante', 'Dad (Tyler)', 'Emma'],
      themes: ['Family and love', 'Growing up', 'Masculinity and showing emotion'],
      tension: 2,
      significance:
        'The resolution rests on talk rather than action: the family is mended by saying what the title says boys should not.',
    },
  ],

  relationships: [
    {
      from: 'Dante',
      to: 'Emma',
      kind: 'father and daughter',
      note: 'The novel’s central arc: from “some baby” and “it” to the daughter he calls his world. The near-loss of control near the end shows the love is real but still being learned.',
    },
    {
      from: 'Dante',
      to: 'Adam',
      kind: 'brothers',
      note: 'They mock and defend each other. Dante dismisses Adam’s sexuality as a phase, then seeks revenge for the attack, and finally the two talk honestly about their fears.',
    },
    {
      from: 'Dad (Tyler)',
      to: 'Dante',
      kind: 'father and son',
      note: 'Resentment and orders at the start give way to honesty at the hospital, and to Dante learning that his father once faced unexpected parenthood too.',
    },
    {
      from: 'Dad (Tyler)',
      to: 'Adam',
      kind: 'father and son',
      note: 'Dad hopes Adam’s sexuality will fade away, then comes to terms with it and condemns the people who attacked his son.',
    },
    {
      from: 'Dante',
      to: 'Melanie',
      kind: 'ex-partners; Emma’s parents',
      note: 'Dante blames and doubts Melanie at the start. Her brief appearance shapes the whole novel, and her story exposes the different judgements made of mothers and fathers.',
    },
    {
      from: 'Adam',
      to: 'Josh',
      kind: 'secret relationship',
      note: 'Private affection hidden behind public abuse. Adam ends it because he will not be with someone living a lie, and Josh’s fear turns into violence.',
    },
    {
      from: 'Dante',
      to: 'Josh',
      kind: 'best friends turned enemies',
      note: 'Mates since secondary school, they drift apart under Logan’s influence. After the attack Dante goes after Josh, learns he is gay, and walks away.',
    },
    {
      from: 'Logan',
      to: 'Josh',
      kind: 'manipulator and follower',
      note: 'Logan’s homophobia and malice work through Josh, which is why Dante concludes that they had all been played.',
    },
    {
      from: 'Aunt Jackie',
      to: 'Dante',
      kind: 'aunt and nephew',
      note: 'The adult Dante can confide in. She shares her own loss, tells him she is proud of him, and helps him in the crisis near the end.',
    },
    {
      from: 'Adam',
      to: 'Emma',
      kind: 'uncle and niece',
      note: 'Adam loves Emma at once. After the attack he refuses to let her see him, until she kisses his scarred cheek. Pearson’s 2022 mark scheme reads the kiss as helping him cope, but his overdose follows the next morning, so a strong answer can ask how much one moment of acceptance can do.',
    },
    {
      from: 'Dante',
      to: 'Collette',
      kind: 'girlfriend and boyfriend',
      note: 'Collette represents the path Dante has lost and the judgement of his peers. He breaks up with her after she draws in her sister to try to have Emma taken into care.',
    },
    {
      from: 'Collette',
      to: 'Veronica',
      kind: 'sisters',
      note: 'Collette involves her sister the social worker against Dante, but Veronica turns out to be fair and sees how loved Emma is.',
    },
  ],

  compareWith: [
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        'On both the Edexcel and Eduqas lists beside it: two brothers, a mother struggling to bring up her children, and male violence, with social class where Blackman puts sexuality.',
    },
    {
      title: 'Anita and Me',
      href: '/revision/texts/anita-and-me',
      reason:
        'On both lists as well: a first-person coming-of-age novel about a British family of colour, in which growing up means learning to judge other people’s prejudices and your own.',
    },
    {
      title: 'Lord of the Flies',
      href: '/revision/texts/lord-of-the-flies',
      reason:
        'Another text on both lists about boys, peer pressure and manipulation, where a group’s need to belong turns into violence against the ones who are different.',
    },
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'The most popular text on the Eduqas list and set by Edexcel too, and a useful contrast on responsibility: the Birlings refuse it for a pregnant young woman, while Dante learns to accept it.',
    },
  ],

  contentGuidance: [
    'intimate_relationships',
    'violence',
    'discrimination',
    'mental_health',
    'mortality',
    'crime_injustice',
  ],

  quotesFromElsewhere: [
    'a good book and a great story',
    'genuinely moving',
    'adroit investigation of family relations, very clearly portrayed',
    'too much plot manipulation',
    'a hard-hitting novel that revolves around two brothers and their widowed father',
    'Dorian Gray',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel GCSE (9-1) English Literature (1ET0) specification, Issue 2, June 2019: Boys Don’t Cry among the 2019 additions for first teaching from September 2019; Paper 1 Section B is one essay question on a post-1914 British play or novel, closed book; the Section B text list',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/specification-and-sample-assesment/9781446914359_GCSE_2015_L12_Englit.pdf',
    },
    {
      label:
        'Pearson, GCSE (9-1) English Literature 2019 text additions (B0436, Version 1.1, May 2021): the reason for the additions, and the one-line description of Boys Don’t Cry',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/A2347_Diversity_Support_pages.pdf',
    },
    {
      label: 'Pearson, new diverse texts page, with the same description of Boys Don’t Cry',
      url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015/teaching-support/new-diverse-texts.html',
    },
    {
      label:
        'Pearson, Scheme of Work for Boys Don’t Cry: chapter and page ranges of the Corgi paperback, “plaintive mewing”, “grizzling” and “She was... beautiful” (page 111), “I’d been lumbered with a kid that was supposedly mine”, the Chapter 26 line, the Chapter 38 crisis and revelation, Adam’s literary references (pages 115 and 117), the sub-plot, the opening contrast, and the Daily Telegraph review',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/Scheme-of-Work-for-Boys-Dont-Cry-by-Malorie-Blackman.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 question paper, June 2022: the stems “I love you, Emma. I love you very, very much.” (Dante) and “I live, eat, breathe and dream of being an actor” (Adam)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1et0-01-que-20220526.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 mark scheme, June 2022: indicative content on love and on Adam, including the declarations at the hospital, “I’m your uncle Adam and I love you”, “Scab-face”, Adam’s mother, his injuries, and Emma’s kiss',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1et0-01-rms-20220825.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 question paper, June 2023: the stems about Dante’s university plans (Dante) and Adam’s sexuality (Dad/Tyler Bridgeman)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20230518.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 mark scheme, June 2023: indicative content on Dante and on attitudes to sexuality, including “I don’t sleep around”, “How exactly was that my problem?”, “heterosexual phase”, “I turned round and walked away” and Dad’s pride in Dante',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-rms-20230824.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 question paper, June 2024: the stems about Melanie (Dante) and about Josh (Dante); Corgi, 2011 cited as the source edition',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20240514.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 mark scheme, June 2024: indicative content on teenage parenthood and Josh, including the party, the newspaper shop, Logan, the Bar Belle, Josh’s letter and “my fists slowly clenching”',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-rms-20240822.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 question paper, June 2025: the stems “I am so proud of you” (Aunt Jackie talking to Dante) and Melanie’s question about bringing up a kid',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20250513.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 mark scheme, June 2025: women and growing up, including Aunt Jackie, Melanie’s background, Collette, Veronica, the two women in the newspaper shop, and the bildungsroman',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-rms-20250821.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature specification, Version 4, August 2024: Boys Don’t Cry replaces Never Let Me Go for assessment from 2025; Component 2 Section A is one source-based question assessing knowledge, analysis of language, structure and form, and written accuracy; texts not permitted in the examination',
      url: 'https://www.eduqas.co.uk/media/42ldm0wa/eduqas-gcse-english-literature-spec-from-2015.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature examiners’ report, Summer 2025, Component 2 Section A: first examination of the novel, the growing-up question, the “fence which needed to be knocked down” simile, the pronoun shift, toxic masculinity, and the general advice on the extract, coverage, context and spelling',
      url: 'https://www.eduqas.co.uk/media/tbdhukmq/eduqas-gcse-english-literature-s25-e.pdf',
    },
    {
      label:
        'WJEC Eduqas knowledge organiser for Boys Don’t Cry: plot summary by chapter groups, fifty chapters, the dual narrative, young adult realist fiction, bildungsroman, the 2010 publication date and the background note on Blackman',
      url: 'https://resource.download.wjec.co.uk/vtc/2022-23/ko22-23_3-4/eduqas/boys-don%27t-cry.pdf',
    },
    {
      label:
        'LitCharts, Boys Don’t Cry plot summary: the order of the last chapters (Adam’s overdose, then Dante nearly losing his temper with Emma and phoning Aunt Jackie, then her arrival). Used for sequence only; no quotation is taken from it',
      url: 'https://www.litcharts.com/lit/boys-don-t-cry/summary',
    },
    {
      label:
        'LitCharts, Boys Don’t Cry Chapter 47: Dante, afraid of losing his temper with Emma, phones Aunt Jackie and says he needs help; she comes over and tells him she is proud of him. This places the call in the extract on walking away',
      url: 'https://www.litcharts.com/lit/boys-don-t-cry/chapter-47',
    },
    {
      label:
        'LitCharts chapter summaries used for placing only, no quotation taken: Chapter 12 (Adam introduces himself to Emma as her uncle), Chapter 20 (the party at the Bar Belle, where Logan calls Emma ugly), Chapter 23 (the newspaper shop), Chapter 38 (the hospital, where Dante overhears the truth about his parents’ marriage), Chapter 39 (Adam’s surgery, Dad’s pride and love), Chapter 41 (Dante attacks Josh, who kisses him and says he is gay), Chapters 44 and 45 (Veronica’s second visit, then Emma’s kiss) and Chapter 46 (the overdose, then Dante’s clenched fists)',
      url: 'https://www.litcharts.com/lit/boys-don-t-cry',
    },
    {
      label:
        'Wikipedia, Boys Don’t Cry (novel): Doubleday, 2010, and the Guardian (Mary Hoffman) and Independent (Nicholas Tucker) reviews as quoted there; the reviews themselves could not be fetched from here',
      url: 'https://en.wikipedia.org/wiki/Boys_Don%27t_Cry_(novel)',
    },
    {
      label:
        'Wikipedia, Malorie Blackman: born in London in 1962, parents from Barbados, systems programmer, first book 1990, Pig-Heart Boy, Noughts & Crosses, PEN Pinter Prize 2022, and her remark on writing Black children’s lives',
      url: 'https://en.wikipedia.org/wiki/Malorie_Blackman',
    },
    {
      label:
        'Malorie Blackman’s website, About page: over seventy books, Eleanor Farjeon Award 2005, OBE 2008, Children’s Laureate 2013 to 2015, Rosa. It dates Just Sayin’ to summer 2023, which is the paperback; the book first appeared in 2022',
      url: 'https://malorieblackman.co.uk/about',
    },
    {
      label:
        'Penguin, Just Sayin’: My Life in Words: the paperback of May 2023, with the ebook and audio editions listed as 2022',
      url: 'https://www.penguin.co.uk/books/441213/just-sayin-by-blackman-malorie/9781529118698',
    },
    {
      label:
        'The Agency (Blackman’s literary agents), on her damehood in the King’s Birthday Honours, June 2026, for services to literature; Wikipedia’s article on her agrees',
      url: 'https://theagency.co.uk/childrens-books/malorie-blackman-receives-damehood-in-the-kings-birthday-honours-list-2026/',
    },
    {
      label:
        'Malorie Blackman’s website, Boys Don’t Cry page: the blurb (the postman and the results, the doorbell, the baby, an hour or two, teenage fatherhood)',
      url: 'https://malorieblackman.co.uk/books/boys-dont-cry',
    },
    {
      label: 'Penguin, Boys Don’t Cry (Corgi Childrens paperback, 320 pages, ISBN 9780552548625)',
      url: 'https://www.penguin.co.uk/books/327175/boys-dont-cry-by-malorie-blackman/9780552548625',
    },
    {
      label: 'Penguin, Penguin Readers Level 5: Boys Don’t Cry, an abridged ELT graded reader',
      url: 'https://www.penguin.co.uk/books/447334/penguin-readers-level-5-boys-dont-cry-elt-graded-reader-by-blackman-malorie/9780241553381',
    },
    {
      label:
        'Wikipedia, Section 28: in force from May 1988, repealed in England and Wales in November 2003',
      url: 'https://en.wikipedia.org/wiki/Section_28',
    },
    {
      label:
        'Wikipedia, LGBTQ rights in the United Kingdom: civil partnerships from 5 December 2005, the Equality Act 2010, first same-sex marriages on 29 March 2014',
      url: 'https://en.wikipedia.org/wiki/LGBTQ_rights_in_the_United_Kingdom',
    },
    {
      label:
        'Wikipedia, Oscar Wilde: The Picture of Dorian Gray (1890) and his imprisonment from 1895',
      url: 'https://en.wikipedia.org/wiki/Oscar_Wilde',
    },
  ],
}
