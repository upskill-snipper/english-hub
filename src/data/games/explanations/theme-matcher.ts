import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Theme Matcher: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/theme-matcher.ts). Written with AI on 16 October 2026
 * and checked against each theme and every text it is counted in, as the founder
 * decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: claims about how each theme is
 * presented and how each text works, each played on its own grid of four to
 * eight texts, and moments to place, beside the twenty themes; the themes'
 * explanations were rewritten to name the five texts added to their lists and
 * to leave each claim's evidence to the claim. Each claim's why names where
 * and how it holds in every right text, and its more why the nearest wrong
 * texts are out. Every quotation is the text's own words, placed by act,
 * scene, chapter, stave or line and checked against the held texts; the works
 * in UK copyright are quoted only as their study guides quote them. Written
 * with AI and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 24 October 2026, each against its grid and the
 * held texts (the bank's docblock lists every grid changed, and why). Sixty-six
 * entries were rewritten: every round whose grid lost a text a teacher could
 * argue was right, so that no explanation discusses a text no longer shown,
 * Ambition and Fate vs Free will for the texts they now count, the new claim
 * on a friend mocking a lover's language, and these corrections. Macbeth is
 * "nam'd" king (Act 2 Scene 4), not given a crown "passed down by birth".
 * Frankenstein and Jekyll and Hyde were said to have science "in place of the
 * supernatural", which the supernatural theme counts them for. One opening
 * round discussed a poem not in its grid. The Jekyll and Hyde clothes
 * quotation gained its chapter. Romeo's "effeminate" is now placed exactly,
 * once Mercutio is wounded. "No one is killed in An Inspector Calls"
 * became no revenge for Eva's death. Herbert does learn who paid for his
 * partnership (Chapter 58), and only Alonso repents. Prospero's "auspicious
 * star" no longer teaches that The Tempest is about fate, which its theme
 * round leaves out. Napoleon's food taster replaces his blaming Snowball as
 * the evidence of fear, and Prospero naming each enemy replaces the harpy's
 * speech to the three together. Written with AI and checked against each
 * question, as the founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Social inequality': {
    why: "A Christmas Carol sets a rich miser beside the families he could help. An Inspector Calls shows a wealthy family profiting from the workers it looks down on. Great Expectations judges people by class. London shows the city's poor ground down. Animal Farm's revolution produces a ruling class, and Jane Eyre is a poor dependent in a rich home.",
    more: 'Most of these writers present inequality as made by people, and so as something people could change. Orwell is the bleakest: his revolution ends with its rulers living as the old ones did.',
    tip: "Link inequality to each writer's context: Dickens and the 1834 Poor Law, Priestley's hopes for a fairer Britain after 1945, and Orwell's view of the Soviet Union.",
  },
  Ambition: {
    why: "Ambition drives Macbeth to murder, Pip in Great Expectations to gentility and Victor Frankenstein to create life. Ozymandias mocks a king's pride. In The Tempest Antonio 'entertain'd ambition' (Act 5 Scene 1) and seized a dukedom. Napoleon makes himself master of Animal Farm, and Jack in Lord of the Flies is desperate to be chief.",
    more: 'Ambition is rarely rewarded in these texts. They separate the wish to rise, which can be healthy, from ambition that overrides conscience and love, which destroys.',
    tip: 'Ask how each writer judges ambition: is it always wrong, or only when it hurts others? Frankenstein and Macbeth make a strong pair.',
  },
  Redemption: {
    why: "In A Christmas Carol three spirits turn Scrooge from a miser into a generous man. In Great Expectations Pip learns to value the people he once looked down on. In The Tempest Prospero forgives his enemies and some of them repent. In Jane Eyre, Rochester comes to feel 'remorse, repentance; the wish for reconcilement to my Maker' (Chapter 37).",
    more: 'Redemption usually follows suffering or a shock, and it is offered, not forced: some characters refuse it. The writers make a change believable by showing what it costs.',
    tip: 'Find the turning point and the evidence of change, and quote a line from before it and a line from after it.',
  },
  'Good vs Evil': {
    why: 'In Jekyll and Hyde a respected doctor sets free his own evil side. Macbeth sets a murderous tyrant against good kings and loyal thanes. Lord of the Flies shows evil growing in ordinary boys. In Frankenstein a creature who begins good turns to evil when he is rejected.',
    more: 'Each text asks where evil comes from: the supernatural, human nature or the way people are treated. They rarely give a simple answer, and the best essays do not either.',
    tip: 'Avoid treating characters as simply good or evil. Answers that show how the writers blur the line are the strongest.',
  },
  'Love and relationships': {
    why: "Romeo and Juliet's love defies a family feud. Much Ado sets two couples side by side, one brought together by others, one through its own quarrels. Jane Eyre loves Rochester but will not lose her self-respect for him. Pip in Great Expectations loves the cold Estella. In The Tempest Ferdinand and Miranda fall in love on Prospero's island.",
    more: 'Love is rarely easy in these texts. Feuds, lies, class and pride stand in its way, and the writers use those obstacles to explore what real love needs.',
    tip: 'Compare different kinds of love, romantic, family and unreturned, and ask what each writer suggests love needs in order to last.',
  },
  'Power and control': {
    why: "Macbeth kills for the crown. Napoleon seizes Animal Farm. Birling's money gives him power over his workers. Ozymandias mocks a fallen tyrant. Prospero rules his island by magic. Jack takes control in Lord of the Flies. London shows church and palace over the poor. In Much Ado men decide women's fates, and Tissue finds human power paper-thin.",
    more: 'Most of these texts show power corrupting the people who hold it, or crumbling with time. Who holds power, how they use it and how they lose it are the questions to ask.',
    tip: "Ask how each writer judges power and what it costs. Link it to context, such as Orwell's satire of Stalin or Blake's anger at the institutions of his day.",
  },
  'Guilt and conscience': {
    why: "The Macbeths are tormented after Duncan's murder. An Inspector Calls makes each Birling face their part in Eva's death. A Christmas Carol awakens Scrooge's conscience. The war photographer is troubled by what he has recorded. Pip feels guilt about Joe, Jane's conscience rules her choices, Alonso repents in The Tempest, and Victor Frankenstein is 'seized by remorse' (Chapter 9).",
    more: 'Guilt is often shown rather than stated: in sleep, in the body, in what a character sees. Writers use it to show that a character still has a moral sense.',
    tip: 'Separate guilt from responsibility: some characters feel guilty and change, while others refuse to.',
  },
  'The supernatural': {
    why: "Macbeth has witches, prophecies and a ghost. A Christmas Carol is a ghost story with Marley and three spirits. The Tempest runs on Prospero's magic and the spirit Ariel. Jekyll's potion and Frankenstein's creation go beyond nature, told as Gothic horror. Jane Eyre has the red-room and a voice calling across the moors.",
    more: 'In Jekyll and Hyde and Frankenstein the terror comes from science, so the supernatural blurs into the Gothic. Ask whether each writer wants us to believe in it.',
    tip: 'Explain what the supernatural does in each text: create fear, tempt a character or teach a lesson.',
  },
  'Isolation and loneliness': {
    why: "Frankenstein's creature is rejected by everyone, and Victor cuts himself off to work. Jane Eyre is an unloved child at Gateshead. Jekyll shuts himself away to hide his secret. The war photographer works alone in his darkroom. Scrooge is 'solitary as an oyster' in A Christmas Carol (Stave 1).",
    more: 'Isolation is sometimes chosen and sometimes forced. In some texts other people can cure it; in others it ends only in death.',
    tip: 'Compare chosen and forced isolation, and ask what each writer suggests people need from one another.',
  },
  'Conflict and violence': {
    why: "Romeo and Juliet's feud kills Mercutio and Tybalt. Macbeth is full of battles and murders. In Lord of the Flies the boys' hunting turns into killing. Animal Farm has battles and executions. War Photographer records war's suffering, and in Jekyll and Hyde, Hyde attacks a child and murders Carew.",
    more: 'Violence usually spreads, one act leading to the next, and it often damages the people who commit it as well as their victims.',
    tip: 'Explore causes as well as events: pride, fear, ambition or power. Analyse the language of violence, such as the blood imagery in Macbeth.',
  },
  'Appearance vs Reality': {
    why: "In Macbeth a loyal host is secretly a murderer. Respectable Dr Jekyll hides Hyde. Much Ado turns on tricks, masks and Hero's false disgrace. In An Inspector Calls a respectable family hides its cruelty. Pip mistakes who his benefactor is in Great Expectations, and in The Tempest Prospero's magic creates illusions.",
    more: 'Disguise, false faces and lies are everywhere, and the truth often comes out late. Watch for dramatic irony, where the audience knows more than the characters.',
    tip: 'Find a moment where the mask slips and analyse what it reveals.',
  },
  'Family and duty': {
    why: 'In Romeo and Juliet, Juliet is expected to obey her father. An Inspector Calls exposes a family that fails each other and its duty to others. A Christmas Carol celebrates the loving Cratchits and Fred. In Great Expectations Joe is a loyal father figure, while Pip neglects his duty to him.',
    more: 'Duty to family often clashes with personal desire. Some texts widen the idea: the Inspector argues that our duty reaches beyond our own family.',
    tip: 'Contrast families that care for each other with families that fail, and say what each writer thinks a family owes.',
  },
  'Justice and morality': {
    why: "In An Inspector Calls the Inspector judges the Birlings' morals. Animal Farm shows a revolution's ideals of fairness betrayed. A Christmas Carol teaches Scrooge his duty to others. Prospero must choose between justice and mercy in The Tempest. Great Expectations shows the law's harshness, and Jane Eyre tests Christian morality against hypocrisy.",
    more: "These texts ask whether justice comes from the law, from society or from a person's own conscience. Often the law fails, and the reader is left to judge.",
    tip: 'Decide what each writer thinks a just society or a good person looks like, and support your view with a quotation.',
  },
  'Identity and self-discovery': {
    why: "Jekyll discovers that his identity is divided. Jane Eyre grows from an unloved orphan into an independent woman. In Great Expectations Pip learns who he really is and who truly helped him. Frankenstein's creature asks who and what he is. Tissue shows identity written in fragile paper records.",
    more: 'Self-discovery usually comes through hardship, and the texts ask whether identity is fixed or made by experience.',
    tip: "Track a character's change with one quotation from early in the text and one from late.",
  },
  'Nature and the environment': {
    why: "Frankenstein's mountains and ice dwarf Victor. Lord of the Flies' island paradise ends in flames. The Tempest's island is ruled by magic and storms. In London even the river is owned. Ozymandias's desert outlasts a king. In Macbeth nature rebels against a murder, and Tissue lets light pass through human borders.",
    more: 'Nature is often stronger than people, or reflects what they do. Romantic writers such as Mary and Percy Shelley saw it as sublime: greater than any human power.',
    tip: 'Use setting and pathetic fallacy as evidence: explain how the natural world reflects or judges human actions.',
  },
  'Corruption of innocence': {
    why: "In Lord of the Flies ordinary schoolboys become killers. Macbeth turns from loyal hero to murderer of innocents. A Christmas Carol shows young Scrooge hardened by greed. Estella is raised to break hearts in Great Expectations. London shows children exploited by the city, and Frankenstein's creature is innocent until rejection corrupts him.",
    more: 'Innocence is usually lost through adults or society, and the writers suggest that innocence needs protecting.',
    tip: 'Pick a moment where innocence is lost and analyse its language closely.',
  },
  'Fate vs Free will': {
    why: "Romeo and Juliet are 'star-cross'd lovers' (Prologue), yet their own hasty choices kill them. The witches promise Macbeth the crown, but he chooses murder to take it. Victor Frankenstein blames destiny for ruin his choices caused. In A Christmas Carol Scrooge asks whether his future is fixed or 'shadows of things that May be, only' (Stave 4), and changes it.",
    more: 'Most of these texts leave the balance open: would Macbeth have killed Duncan without the witches, or the lovers have died without the feud and some very bad luck? Dickens alone answers clearly: the future can be changed.',
    tip: 'Weigh both sides in an answer: show what fate or prophecy sets up, and what the characters choose to do.',
  },
  'Revolution and rebellion': {
    why: "Animal Farm is a revolution against Mr Jones that ends in a new tyranny. In An Inspector Calls Eva leads a strike, and Sheila and Eric turn against their parents' values. London protests against church, monarchy and state. In The Tempest Caliban rebels against Prospero, and Antonio once overthrew his own brother.",
    more: 'Rebellion can bring hope or disaster: Animal Farm shows a revolution betrayed, while Priestley hopes the young will build a fairer society.',
    tip: 'Link rebellion to context: the Russian Revolution for Animal Farm, the French Revolution for London, and 1945 for An Inspector Calls.',
  },
  'Memory and the past': {
    why: "In A Christmas Carol a spirit shows Scrooge his own past. The war photographer's pictures bring back what he saw. Ozymandias's broken statue is all that remains of a king's glory. Great Expectations is told by an older Pip looking back, and Tissue's thin paper holds family histories.",
    more: 'The past can haunt, as it does the photographer, or teach, as it teaches Scrooge. Ozymandias and Tissue suggest that time wears away human achievements.',
    tip: 'Notice how structure handles the past: the visions in A Christmas Carol, the older narrator in Great Expectations, the memories in War Photographer.',
  },
  'Science and responsibility': {
    why: "In Frankenstein, Victor creates life and then abandons his creature, refusing responsibility for what he has made. In Jekyll and Hyde, Jekyll's potion releases Hyde, and he cannot control the results of his own experiment.",
    more: 'Both are Gothic warnings about science pursued without conscience, written as science advanced quickly in the 1800s. Both scientists also hide their work from their friends.',
    tip: "Compare the two scientists' motives: Victor's ambition, and Jekyll's wish to separate his good and evil sides.",
  },
  'Helping the poor is presented as a duty the better-off must be taught': {
    why: "In A Christmas Carol the spirits teach Scrooge, who once said the poor had better die and 'decrease the surplus population' (Stave 1), until he gives freely on Christmas morning. In An Inspector Calls the Inspector teaches the Birlings that 'We are members of one body' (Act 3), responsible for the millions like Eva.",
    more: "Animal Farm's pigs never learn to share: they keep the milk and apples. In Frankenstein the one who helps the poor De Laceys, gathering their firewood, is the creature, who has nothing himself. Macbeth and Romeo and Juliet teach no such lesson.",
    tip: 'Both writers aim the lesson at the audience too: Dickens through his warm, chatty narrator, Priestley through an Inspector who seems to speak past the Birlings to everyone watching.',
  },
  'Those in charge live in comfort while those beneath them go hungry': {
    why: "In Animal Farm the pigs take the milk and apples, sleep in beds and drink whisky, while every other ration is cut. In Jane Eyre Mr Brocklehurst lectures the half-starved Lowood girls on plainness while his wife and daughters arrive in 'velvet, silk, and furs' (Chapter 7).",
    more: 'In Macbeth, Much Ado and The Tempest no one is shown going hungry, and the tyrant of Ozymandias is remembered for his pride, not for how his people ate.',
    tip: "Quote a detail of comfort beside a detail of want, and analyse the gap between them: the gap is where the writer's anger shows.",
  },
  'Inequality is attacked through a story with a clear moral, like a fable or a morality play': {
    why: 'Animal Farm is a beast fable, subtitled A Fairy Story, about a revolution betrayed. A Christmas Carol is a moral tale in five staves, in which a miser is taught to change. An Inspector Calls works like a morality play, with the Inspector judging each sin in turn.',
    more: "Great Expectations and Jane Eyre are long realist novels that follow one life over many years, and London is a protest poem with no story at all. All three attack inequality, but none through a fable's plain moral.",
    tip: 'Name the form and say what it does: a fable or morality play simplifies, so the reader cannot miss the lesson the writer wants learnt.',
  },
  'A character looked down on for their class is shown to be worth more than that judgement': {
    why: "In Great Expectations Pip comes to see that Joe, the blacksmith he was ashamed of, is the best of men. Jane Eyre, 'poor, obscure, plain, and little' (Chapter 23), insists her soul is equal to Rochester's. In An Inspector Calls Mrs Birling dismisses Eva as a girl of a lower class, yet Eva refused stolen money.",
    more: "Frankenstein's creature is judged by his looks, not his class. Macbeth and Romeo and Juliet are about nobles: the feuding houses are 'alike in dignity' (Prologue), so class is not what divides them.",
    tip: "Track the gap between how a character is labelled and what they do: the writer's view of class lives in that gap.",
  },
  'The poor are shown with warmth and dignity, not only as victims': {
    why: "A Christmas Carol's Cratchits are poor, but their Christmas dinner is full of love, and Tiny Tim blesses everyone. In Great Expectations Joe Gargery, a village blacksmith, is gentle, loyal and wise, and Pip at last calls him 'this gentle Christian man' (Chapter 57).",
    more: "London shows the poor only as victims, with 'Marks of weakness, marks of woe' (line 4) in every face. War Photographer's sufferers appear only in pain, through a camera. Macbeth and Much Ado barely show the poor at all.",
    tip: 'Contrast how two writers show the poor: as people with lives of their own, or as symbols of suffering. Each choice serves a different purpose.',
  },
  'Inequality is felt through the memories of a narrator who was once a poor child': {
    why: "Great Expectations is told by the older Pip, remembering how Estella mocked his 'coarse hands' and 'thick boots' (Chapter 8). Jane Eyre is told by the adult Jane, remembering being called 'less than a servant' at Gateshead (Chapter 2). Each narrator was that poor child, so we feel the sting from inside.",
    more: "A Christmas Carol has a third-person narrator, and Scrooge's memories are shown to him by a spirit. An Inspector Calls is a play, Animal Farm's narrator stands outside the story, and London's speaker watches other people's suffering.",
    tip: "With a narrator looking back, separate the child's feelings from the adult's judgement: the double view is often where the writer's point lies.",
  },
  "A character's ambition is to climb into a higher social class": {
    why: "In Great Expectations Pip wants to be a gentleman 'on her account' (Chapter 17), to deserve Estella, and grows ashamed of the forge. In An Inspector Calls Birling, a self-made businessman, hopes for a knighthood and is proud that Sheila will marry Gerald, son of the grander Crofts.",
    more: "Victor Frankenstein and Ozymandias want glory and power, not a higher class. Jane wants independence, and refuses Rochester's jewels, and Jack in Lord of the Flies wants to rule, not to rise in rank.",
    tip: "Link social climbing to context: Dickens's Victorian idea of the gentleman, and Priestley's 1912 businessman whose new money still craves an old title.",
  },
  'Chains stand for what binds people, forged by themselves or by their society': {
    why: "In A Christmas Carol, Marley's ghost drags a chain of cash-boxes and ledgers: 'I wear the chain I forged in life... of my own free will' (Stave 1). Blake's London hears 'mind-forged manacles' (line 8) in every voice: chains made in people's minds by the society that keeps them down.",
    more: 'Ozymandias, War Photographer and Tissue use no chain imagery: their images are a ruined statue, rows of film and thin paper.',
    tip: "Who forged the chain matters: Marley made his own, while Blake suggests society made the people's. Compare where each image puts the blame.",
  },
  'Workers are used up and thrown away by those who profit from them': {
    why: 'In An Inspector Calls Birling sacks Eva for asking for a fair wage, to keep his labour costs down, and she is passed from job to job until her death. In Animal Farm Boxer works himself to collapse for the farm, and the pigs sell him to the knacker.',
    more: "Bob Cratchit in A Christmas Carol is badly paid but kept on, and finally given a raise. In Great Expectations Joe's work as a blacksmith is honoured, and Macbeth is not about workers at all.",
    tip: "Use the workers' fates as evidence for each writer's political argument: Priestley's socialism and Orwell's attack on Stalin.",
  },
  'A poor character is raised up by an unexpected fortune': {
    why: 'In Jane Eyre, Jane learns that her uncle in Madeira has left her twenty thousand pounds, which she shares with her cousins. In Great Expectations Pip is lifted from the forge by money from a secret benefactor, who turns out to be the convict Magwitch.',
    more: "In An Inspector Calls Eva refuses the money Eric stole for her. Animal Farm's workers never escape poverty, and London offers its poor no escape at all.",
    tip: 'A fortune plot raises a question: can a rise that depends on luck be trusted? Compare how each writer answers it.',
  },
  'A character works for a harsh master who pays or feeds them badly': {
    why: "In A Christmas Carol Bob Cratchit works in a freezing office for fifteen shillings a week, his fire 'so very much smaller that it looked like one coal' (Stave 1). In An Inspector Calls Eva works at Birling's factory until he sacks her for asking for more. Animal Farm's animals work 'like slaves' while their rations are cut.",
    more: 'In Great Expectations Pip is apprenticed to Joe, the kindest of men. War Photographer and Tissue are not about masters and workers.',
    tip: "Use the worker's conditions as evidence: one precise detail, such as Bob's single coal, shows the writer's anger better than a general statement.",
  },
  'Ambition for a throne leads to a plot to kill a king': {
    why: "Macbeth kills King Duncan to take the crown the witches promised him. In The Tempest Antonio, who seized his brother's dukedom, persuades Sebastian to take the crown of Naples, and they draw their swords over the sleeping King Alonso until Ariel wakes Gonzalo.",
    more: "Ozymandias was a king, but no one plots against him: time ruins him. Much Ado's Don John spoils a wedding, not a reign, and Romeo and Juliet has no throne at stake.",
    tip: "Compare how the two plots end: Macbeth succeeds and is destroyed by it, while The Tempest's plot is stopped and its plotters are forgiven.",
  },
  'Ambition ends in death and the loss of everything it gained': {
    why: "Macbeth dies with his queen dead and his thanes gone, and Macduff brings his head to Malcolm. Victor Frankenstein dies on Walton's ship, having lost everyone he loved to his own creation. In Ozymandias the king is long dead, and of his works 'Nothing beside remains' (line 12).",
    more: "Birling in An Inspector Calls fears for his knighthood but has lost nothing yet. Animal Farm's Napoleon ends the book in power, which is Orwell's point, and War Photographer and Tissue hold no ambitious figure.",
    tip: 'Ask why a writer punishes ambition with death: it turns a story into a warning, and naming that warning makes a strong point in an exam answer.',
  },
  'Ambition is looked back on with regret by the one who had it, telling their own story': {
    why: "Great Expectations is told by the older Pip, who judges his younger self's snobbery and his shame of Joe. In Frankenstein Victor tells Walton his story as a warning: 'Learn from me... how dangerous is the acquirement of knowledge' (Chapter 4).",
    more: "Jane Eyre tells her own story but never regrets wanting independence. Ozymandias's king speaks only in his boastful inscription. Scrooge's story is told by a narrator, and Birling in An Inspector Calls regrets nothing.",
    tip: "When a narrator judges their past self, quote both voices: the young character's wish and the older teller's verdict on it.",
  },
  'Ambition drives a character to break the laws of nature': {
    why: "Victor Frankenstein builds a living being from the dead in his 'workshop of filthy creation' (Chapter 4), chasing the glory of discovery. Macbeth's murder of a king is unnatural: Ross and an Old Man describe darkness by day and Duncan's horses turning wild, 'Even like the deed that's done' (Act 2 Scene 4).",
    more: "Pip's ambition in Great Expectations is to be a gentleman, which breaks no law of nature, and Birling's in An Inspector Calls is a knighthood. Romeo and Juliet and Much Ado are about love, not ambition.",
    tip: "Link this to context: for Shakespeare's audience a king's murder broke the natural order, and for Mary Shelley's readers making life was God's work, not a man's.",
  },
  'Ambition stays unsatisfied even when it reaches its goal': {
    why: "Crowned at last, Macbeth finds that 'To be thus is nothing, / But to be safely thus' (Act 3 Scene 1), and kills again. In Great Expectations Pip, a gentleman in London at last, admits 'We were always more or less miserable' (Chapter 34). Victor Frankenstein, the moment his creature lives, feels 'breathless horror and disgust' (Chapter 5).",
    more: 'Birling in An Inspector Calls has not reached his knighthood. Ozymandias shows only the ruin, not how the king felt, and War Photographer and Tissue hold no ambitious figure.',
    tip: 'Ask what the writer suggests ambition really wants: if no achievement satisfies it, the fault lies in the wanting, not in the goal.',
  },
  "An ambitious figure's story reaches us second-hand, through another teller": {
    why: "Frankenstein reaches us through Walton's letters to his sister, which retell what Victor told him. Ozymandias's speaker repeats what 'a traveller from an antique land' (line 1) said of the ruined statue. In both, the ambitious figure is at least one voice away from the reader.",
    more: "We watch Macbeth's ambition directly on stage, and London and Tissue hold no ambitious figure.",
    tip: "Frames create distance and judgement: ask what the framing teller adds, such as Walton's own ambition, which Victor's story is told to warn.",
  },
  'An ambitious character is spurred on by a promise of future greatness': {
    why: "The witches hail Macbeth as one 'that shalt be king hereafter' (Act 1 Scene 3). In Great Expectations Jaggers announces that Pip is 'a young fellow of great expectations' (Chapter 18). In The Tempest Antonio tells Sebastian 'My strong imagination sees a crown / Dropping upon thy head' (Act 2 Scene 1).",
    more: 'Ozymandias promises his own greatness in his inscription, but no one promises it to him, and Romeo and Juliet has no ambitious figure lured on by a promise.',
    tip: 'A promise of greatness tests a character: compare how quickly each one acts on it, and what they are willing to do.',
  },
  'A character who did wrong makes up for it with money or gifts': {
    why: "In A Christmas Carol Scrooge sends the Cratchits a prize turkey, promises a large gift to the charity collector he turned away and raises Bob's salary. In Great Expectations Miss Havisham, begging Pip's forgiveness, pays for Herbert's partnership, a kindness Pip had secretly begun himself.",
    more: 'In An Inspector Calls Birling offers money far too late, to save himself, and the Inspector says it comes at the wrong time. Jane Eyre shares her fortune out of love, not to repair a wrong, and Macbeth and Victor Frankenstein never try to repair theirs.',
    tip: "A gift can show change, but ask what it costs the giver: Scrooge's turkey costs him his old self, which is why it convinces.",
  },
  'Redemption comes only after losing sight, health or fortune': {
    why: "In Jane Eyre, Rochester loses his sight and a hand in the fire at Thornfield, and only then feels 'remorse, repentance; the wish for reconcilement to my Maker' (Chapter 37). In Great Expectations Pip loses his fortune and falls into a fever, and wakes humbled, with Joe nursing him.",
    more: 'Scrooge changes before he loses anything: the visions alone are enough. Macbeth loses everything and is never redeemed. In An Inspector Calls Sheila and Eric change through shame, not loss, and Romeo and Juliet ends in grief, not redemption.',
    tip: 'Ask whether suffering earns the change or only forces it. Brontë and Dickens both make their characters suffer first, which makes the change feel paid for.',
  },
  'A character is forgiven, or offered forgiveness, but shows no sign of changing': {
    why: "In The Tempest Prospero forgives his brother Antonio, who says nothing in reply and seems unchanged. In Jane Eyre the dying Mrs Reed confesses that she hid Jane's uncle's letter, but refuses Jane's forgiveness: 'You were born, I think, to be my torment' (Chapter 21).",
    more: 'Scrooge accepts the chance to change and takes it. In Great Expectations Miss Havisham begs forgiveness and repents. Macbeth and Frankenstein offer no forgiveness at all: the creature and Victor pursue each other to the end.',
    tip: 'Silence on stage can be a choice: the actor playing Antonio decides how unrepentant he looks. Mention staging when you write about a silent character.',
  },
  'Evil is presented as part of every human being, not an outside force': {
    why: "In Jekyll and Hyde, Jekyll concludes that 'man is not truly one, but truly two' (his statement, Chapter 10), and his drug frees an evil already in him. In Lord of the Flies Simon suggests 'maybe it's only us' (Chapter 5), and Ralph weeps for 'the darkness of man's heart' (Chapter 12).",
    more: "Frankenstein argues the opposite: the creature was 'benevolent and good' until misery made him a fiend (Chapter 10). Much Ado puts evil in one villain, Don John. A Christmas Carol and Jane Eyre show selfishness and cruelty, not an evil inside everyone.",
    tip: 'Use context: Stevenson wrote after Darwin had unsettled Victorian ideas of human nature, and Golding after a world war had shown what ordinary people could do.',
  },
  'Evil grows step by step: one wrong act leads to worse ones': {
    why: "Macbeth moves from Duncan to the grooms, to Banquo, to Macduff's wife and children. In Jekyll and Hyde, Hyde first tramples a child, then murders Carew. In Lord of the Flies the pig hunts become a game with Robert as the pig, then the killing of Simon, then Piggy's death.",
    more: "Ozymandias shows a tyrant's pride, not a crime growing, and War Photographer and Tissue tell no story of a wrongdoer at all.",
    tip: 'Track the escalation with a quotation from each stage, and comment on how the writer makes each act easier for the character than the last.',
  },
  'Goodness is shown to be helpless against evil': {
    why: 'In Lord of the Flies, Simon, who understands the beast, is killed, and Piggy, holding the conch and pleading for rules, is crushed by a rock. In Frankenstein innocent Justine is executed, Elizabeth is murdered on her wedding night, and Victor can protect no one.',
    more: "Good wins in A Christmas Carol and The Tempest. In Much Ado the Watch, however foolish, uncover Don John's plot and Hero is cleared, and Ozymandias sets no good against evil.",
    tip: "If good loses, ask what the writer wants us to feel: Golding's bleakness is a warning, not a wish.",
  },
  "Evil takes the shape of something that may exist only in the characters' minds": {
    why: "In Lord of the Flies the boys fear a beast that is really a dead parachutist and their own savagery. In Macbeth the dagger that leads him to Duncan is 'A dagger of the mind, a false creation' (Act 2 Scene 1), and only he sees Banquo's ghost at the banquet.",
    more: "Hyde is real: other people see him, and a maid watches him kill. Frankenstein's creature is real and seen by many, and The Tempest's spirits are real too, working for Prospero.",
    tip: "When evil may be imagined, say what that suggests: that the danger lies in the human mind, which is often the writer's point.",
  },
  'Love at first sight leads quickly to a promise of marriage': {
    why: "Romeo and Juliet meet at the feast, exchange vows on the balcony that night and marry the next day. In The Tempest Prospero sees that Ferdinand and Miranda 'have changed eyes' at first sight (Act 1 Scene 2), and in their next scene she tells him 'I am your wife if you will marry me' (Act 3 Scene 1).",
    more: "In Jane Eyre love grows slowly, over months of talk. In Great Expectations Pip loves Estella from their first meeting, but no promise follows. Macbeth's marriage is already made, and Ozymandias holds no lovers.",
    tip: 'Speed is a choice: ask whether each writer celebrates sudden love or warns against it, and find the line that shows which.',
  },
  'Love is expressed through a shared sonnet or poems the lovers write': {
    why: "Romeo and Juliet's first words to each other form a sonnet they share, beginning 'If I profane with my unworthiest hand' and ending in a kiss (Act 1 Scene 5). In Much Ado, Beatrice and Benedick deny their love until sonnets in their own handwriting are produced, and they agree to marry.",
    more: "Ferdinand and Miranda speak blank verse, not sonnets. Pip never writes poetry to Estella, and Macbeth's marriage is shown through plotting.",
    tip: 'Explain what the sonnet adds: it was the form of love poetry, so a shared sonnet shows two people perfectly in tune.',
  },
  'Love grows out of witty arguments between equals': {
    why: "In Much Ado, Leonato calls Beatrice and Benedick's insults 'a kind of merry war' (Act 1 Scene 1), and it turns into love. In Jane Eyre, Rochester asks 'do you think me handsome?' and Jane answers 'No, sir' (Chapter 14): their sparring talk, as equals, is how their love grows.",
    more: "Romeo and Juliet, and Ferdinand and Miranda, love at first sight without a battle of wits. Estella's coldness to Pip is cruelty, not play between equals, and in An Inspector Calls Sheila and Gerald's engagement is polite, then broken.",
    tip: 'Quote an exchange, not a single line: the back-and-forth itself shows the balance of power between the lovers.',
  },
  'A love affair crosses a divide of class or wealth': {
    why: "In Jane Eyre a poor governess loves her wealthy employer, sensing her kinship with Rochester 'though rank and wealth sever us widely' (Chapter 17). In Great Expectations a blacksmith's boy loves Estella, the ward of a rich lady, who mocks his 'coarse hands' (Chapter 8).",
    more: "Romeo and Juliet's families are 'alike in dignity' (Prologue): the divide is a feud, not class. Claudio and Hero are of the same rank, and so are Ferdinand, a prince, and Miranda, a duke's daughter.",
    tip: 'Ask whether the ending closes the gap: Jane returns to Rochester only when she has money of her own.',
  },
  'A character hides behind a mask or costume at a party': {
    why: "In Much Ado, masked dancers woo and deceive at Leonato's ball. In Romeo and Juliet, Romeo comes masked to the Capulet feast, where he meets Juliet. In Jane Eyre, Rochester dresses as an old gypsy woman during his house party to tell his guests' fortunes (Chapters 18 and 19).",
    more: 'Macbeth hides his guilt behind a false face at his banquet, but wears no costume. Scrooge watches parties unseen, and Frankenstein has no masked party at all.',
    tip: 'Disguise tests characters: ask what each mask lets someone say or learn that they could not barefaced.',
  },
  'A character is wrongly told that someone they love is dead': {
    why: 'In The Tempest, Alonso believes Ferdinand drowned, and Ferdinand believes the same of his father. In Much Ado, Claudio is told that Hero died of the shame he caused. In Romeo and Juliet, Balthasar tells Romeo that Juliet is dead, not knowing she has taken a sleeping potion.',
    more: "Macduff's news in Macbeth is terribly true: his wife and children have been killed. Frankenstein's deaths are real, and War Photographer's dead are real, remembered in a print.",
    tip: 'A false death lets a writer test the living: compare what Claudio and Romeo each do when they hear the news.',
  },
  'A wedding is interrupted or turned into a disaster': {
    why: "In Much Ado, Claudio shames Hero at the altar: 'Give not this rotten orange to your friend' (Act 4 Scene 1). In Jane Eyre, a solicitor stops the service, since Rochester is already married (Chapter 26). In Romeo and Juliet, Juliet's wedding day with Paris becomes a funeral when she is found apparently dead.",
    more: "In An Inspector Calls Sheila hands back Gerald's ring, but there is no wedding to ruin. Macbeth and Animal Farm have no weddings at all.",
    tip: 'Weddings are meant to end stories happily, so a ruined one is a powerful turning point. Say what the disaster reveals about the characters.',
  },
  'A near-tragedy turns into a happy ending': {
    why: 'Much Ado comes close to tragedy, with Hero shamed and thought dead and Benedick challenging his closest friend, then ends in two weddings and a dance. The Tempest opens with a shipwreck and plots to murder, then ends in forgiveness and a marriage planned in Naples.',
    more: 'Romeo and Juliet begins like a comedy, with jokes and a love match, then turns into tragedy: the reverse journey. Macbeth is a tragedy throughout, and An Inspector Calls ends with a new shock, not a happy resolution.',
    tip: 'Name the genre and its rules: a comedy can threaten disaster as long as it restores order in the end, often through marriage.',
  },
  'The story ends with a marriage that settles its conflicts': {
    why: "Much Ado ends with two marriages and a dance. Jane Eyre's last chapter opens 'Reader, I married him', after Jane returns to Rochester as an equal. The Tempest ends with Ferdinand and Miranda to be married in Naples, joining the families of Milan and Naples.",
    more: "Romeo and Juliet's secret marriage leads to their deaths, and peace comes only over their bodies. Great Expectations ends with Pip and Estella leaving the ruins together, but with no marriage. In An Inspector Calls the engagement is broken, and London ends on a 'marriage hearse'.",
    tip: 'Ask what the marriage settles: a family quarrel, a struggle for power or a question of equality. That turns a plot detail into an argument.',
  },
  "The speed of young love is checked by an older character's caution": {
    why: "In Romeo and Juliet, Friar Lawrence warns the hurrying Romeo, 'Wisely and slow; they stumble that run fast' (Act 2 Scene 3). In The Tempest Prospero, pleased that Ferdinand and Miranda love at once, decides 'this swift business / I must uneasy make' (Act 1 Scene 2), and sets Ferdinand to carry logs.",
    more: "In Great Expectations no elder slows Pip's hopeless love. Macbeth has no young lovers, and Ozymandias no love at all.",
    tip: 'Contrast the outcomes: Romeo ignores the warning and dies, while Ferdinand accepts the delay and wins. Shakespeare seems to reward patience.',
  },
  'Lovers are parted for a long time before they meet again, changed': {
    why: 'Jane Eyre flees Thornfield and is apart from Rochester for about a year, until a mysterious voice calls her back to him, blinded and humbled. In Great Expectations Pip and Estella meet again eleven years later, both changed by suffering, where Satis House once stood.',
    more: 'Romeo and Juliet are parted by banishment and meet again only in the tomb. Hero and Claudio are apart for days, not years, and Ferdinand and Miranda are never separated.',
    tip: 'Ask what the time apart changes: in both novels the lovers meet again on more equal terms, which is why the ending feels earned.',
  },
  "A lover's fancy language is mocked by a friend": {
    why: "Mercutio mocks Romeo's love poetry: 'Speak but one rhyme, and I am satisfied' (Romeo and Juliet, Act 2 Scene 1), and later 'Now is he for the numbers that Petrarch flowed in' (Act 2 Scene 4). Benedick says Claudio, once plain-spoken, is 'turned orthography; his words are a very fantastical banquet' (Much Ado, Act 2 Scene 3).",
    more: "Pip's devotion to Estella in Great Expectations and Jane's love for Rochester are never mocked for their style, and Ferdinand's courtly praise of Miranda goes unmocked. Ozymandias and Tissue hold no lovers.",
    tip: "A friend's mockery sets a standard for the audience: when the lover's style is laughed at, Shakespeare invites us to doubt the love, or to watch it grow up.",
  },
  'Power is held through fear of violence': {
    why: "Napoleon rules Animal Farm with his nine dogs and public executions. Macbeth keeps Scotland in fear with murders, even of Macduff's wife and children. In Lord of the Flies Jack rules Castle Rock by fear, and has a boy beaten without giving a reason.",
    more: "Birling's power in An Inspector Calls is money: he sacks workers rather than beating them. Much Ado's men control women through reputation, not threats, and Scrooge's power over Bob is only his wages.",
    tip: 'Compare how the tyrants keep power and how they lose it, if they do: Macbeth falls, Napoleon does not, and Jack is stopped only by an adult.',
  },
  'Human power is shown to be fragile and temporary': {
    why: "In Ozymandias a tyrant's 'shattered visage' (line 4) lies half sunk in the desert, his boast mocked by the empty sands. Tissue imagines buildings made of paper and borders as lines on old maps, and asks for daylight to break 'through capitals and monoliths'.",
    more: "London shows power as solid and inescapable: even minds wear 'mind-forged manacles' (line 8). War Photographer is about suffering and indifference, not rulers, and Much Ado's order stands firm at the end.",
    tip: 'Ozymandias and Tissue make a strong comparison: one shows power already fallen, the other imagines power built lightly enough to let the light through.',
  },
  'A circular ending suggests those in power will not change': {
    why: "Animal Farm ends as it began, the farm renamed The Manor Farm and the pigs impossible to tell from men: 'it was impossible to say which was which' (Chapter 10). An Inspector Calls ends with a phone call announcing another death and another inspector, so the unrepentant parents must face it all again.",
    more: 'A Christmas Carol moves forward: Scrooge really changes. Romeo and Juliet ends with the feuding families reconciled, and Jane Eyre ends with Jane in a new life she has chosen.',
    tip: 'Structure is a method: say what returning to the start makes the reader feel, and why the writer wants that.',
  },
  "A powerful man's boasts are undercut by irony the reader or audience can see": {
    why: "Ozymandias's inscription, 'Look on my works, ye Mighty, and despair' (line 11), stands in a desert where 'Nothing beside remains'. In An Inspector Calls Birling calls the Titanic unsinkable and war impossible, and the 1945 audience knows the ship sank and two world wars came.",
    more: "A Christmas Carol rebukes Scrooge's cruel words openly, through a spirit, and London and War Photographer have no powerful man whose boasts the text mocks.",
    tip: 'Name the irony: situational in Ozymandias, dramatic in An Inspector Calls. Then explain how it makes the powerful man look foolish.',
  },
  'Power over others comes from books, learning or knowledge': {
    why: "In The Tempest Prospero's magic comes from his books, and Caliban tells his fellow plotters to 'Remember / First to possess his books' (Act 3 Scene 2). In Animal Farm the pigs, who learn to read and write, use that knowledge to rewrite the Commandments and fool the other animals.",
    more: 'Ozymandias rules by command. In Much Ado power comes from rank and from being a man, and War Photographer is about suffering, not who holds power.',
    tip: "Note who is kept ignorant: Boxer 'could not get beyond the letter D' (Chapter 3), and that ignorance is part of Orwell's warning.",
  },
  "A system of votes and debate gives way to a tyrant's rule": {
    why: "In Lord of the Flies the boys vote Ralph chief and speak in turn holding the conch, until Jack's tribe takes over and the conch is smashed. In Animal Farm Napoleon's dogs chase Snowball away just as a vote goes his way, and Napoleon abolishes the Sunday debates.",
    more: "Macbeth takes Scotland's crown by murder, not by overturning votes or debates. The Tempest's island is ruled by Prospero's magic, and Ozymandias was a king, not an elected leader.",
    tip: 'Both are allegories of their century: compare what each writer suggests makes democracy fragile, fear in Golding and propaganda in Orwell.',
  },
  'A symbol of authority or order is broken or destroyed': {
    why: "In Lord of the Flies the conch, the boys' symbol of order and of the right to speak, is smashed when Piggy is killed. In Ozymandias the tyrant's statue lies broken, its 'shattered visage' half sunk in sand. In The Tempest Prospero promises to break his staff and drown his book (Act 5 Scene 1).",
    more: "London's church and palace still stand, blackened and bloodstained but unbroken. In An Inspector Calls the family's authority is shaken but nothing is destroyed, and Much Ado ends with order restored, not broken.",
    tip: 'Ask who breaks the symbol and why: destroyed by violence, worn away by time, or given up by choice. Each means something different.',
  },
  'Characters stand for wider groups or ideas, as in an allegory': {
    why: "Animal Farm's animals stand for figures and groups from the Russian Revolution: Napoleon for Stalin, Boxer for the workers. In Lord of the Flies Ralph, Jack and Piggy stand for order, savagery and reason. In An Inspector Calls the older Birlings stand for a selfish middle class, and Eva Smith for exploited workers.",
    more: 'Great Expectations is a realist novel whose characters are individuals with private lives. The lovers and villains of Much Ado and Romeo and Juliet are people in a story, not symbols of a wider idea.',
    tip: "Name what a character stands for, then show where the text makes it clear, such as Eva Smith's common name, chosen to stand for everyone.",
  },
  'The powerful are shown to fear losing what they have': {
    why: "Macbeth, once crowned, says 'To be thus is nothing, / But to be safely thus' (Act 3 Scene 1), and has Banquo murdered. In An Inspector Calls Birling fears a scandal that could cost him his knighthood. In Animal Farm Napoleon has four dogs guard his bed and a pig taste his food 'lest it should be poisoned' (Chapter 8).",
    more: "Ozymandias's inscription shows only confidence, never fear, though he had reason to fear time. Tissue is about how lightly power should be held.",
    tip: "Fear explains a tyrant's actions: link each act of cruelty to what the character is afraid of losing.",
  },
  'Brothers are divided by a struggle for power': {
    why: "In The Tempest Antonio overthrew his brother Prospero as Duke of Milan and set him adrift at sea. In Much Ado Conrade reminds Don John that he has 'of late stood out against your brother' (Act 1 Scene 3), and Don John wrecks Don Pedro's plans out of resentment.",
    more: "Macbeth kills his king and kinsman, not his brother. In An Inspector Calls Eric and Sheila draw closer as the play goes on, and Romeo and Juliet's feud is between families, not brothers.",
    tip: 'Both plays end with the wronged brother in power and the other defeated: say whether forgiveness or punishment follows, and why.',
  },
  'Words are twisted or rewritten to control or destroy others': {
    why: "In Animal Farm Squealer rewrites the past and the pigs alter the Commandments, until one reads 'No animal shall drink alcohol TO EXCESS' (Chapter 8). In Much Ado, Don John's lie and Claudio's public accusation destroy Hero's name, and her epitaph says she was 'Done to death by slanderous tongues' (Act 5 Scene 3).",
    more: "Ozymandias's words are carved and mocked, not twisted. War Photographer and Tissue show no one controlling others through words.",
    tip: "Analyse a single changed word, such as Orwell's added capitals, and explain its effect: small changes in language can carry great power.",
  },
  'Guilt shows itself in what a character sees or hears that others cannot': {
    why: "Macbeth sees a dagger leading him to Duncan, and Banquo's ghost in his own seat, invisible to his guests. In The Tempest Alonso hears his crime in the storm, 'the thunder... pronounc'd / The name of Prosper', while Gonzalo asks why he stands 'In this strange stare' (Act 3 Scene 3).",
    more: "The Birlings' guilt is drawn out by questions in a brightly lit room, not by visions. Simon's talking pig's head in Lord of the Flies is not guilt, for he has done nothing wrong, and neither Jekyll nor Napoleon is haunted by visions.",
    tip: 'Explain what a private vision does on stage: the audience sees the guilt that the other characters cannot, which builds dramatic irony.',
  },
  'Guilt shows itself in the body: in hands, sleep or health': {
    why: "Lady Macbeth walks in her sleep, rubbing her hands: 'Here's the smell of the blood still' (Act 5 Scene 1). The war photographer's hands, steady in war zones, seem to shake at home. In Frankenstein, Victor's fever makes him rave that he is 'the murderer of William, of Justine, and of Clerval' (Chapter 21).",
    more: "The Birlings' guilt comes out in words, under questioning. Jane Eyre's conscience speaks as reason and feeling, not as illness, and in Romeo and Juliet it is grief, not guilt, that drives the lovers. Ozymandias feels no guilt at all.",
    tip: 'Physical symptoms make guilt visible: quote the bodily detail and explain how it shows what the character will not say.',
  },
  'A character feels guilty for a death they did not directly cause': {
    why: "Victor Frankenstein did not kill William or Justine, but knows his creature did: 'now all was to be obliterated in an ignominious grave; and I the cause' (Chapter 8). In An Inspector Calls each Birling did one thing to Eva, and Sheila and Eric come to feel their share of her death.",
    more: "Jane Eyre feels no guilt for anyone's death, Ozymandias holds no guilt at all, and Tissue records deaths without blaming anyone for them.",
    tip: 'Separate guilt from responsibility: the Inspector argues that responsibility is shared, even when no single person struck the blow.',
  },
  'The audience or reader is made to share the guilt': {
    why: "In An Inspector Calls the Inspector's last speech, about the millions of Eva and John Smiths, is aimed past the Birlings at everyone watching. War Photographer ends with readers whose 'eyeballs prick' for a moment before their 'pre-lunch beers' (stanza 4): anyone reading the poem is one of them.",
    more: "Jane Eyre's conscience and Pip's guilt in Great Expectations are their own private struggles, and Ozymandias accuses only a long-dead king.",
    tip: 'Say how the writer reaches the audience: a speech that breaks out of the story, or a final line that takes in the reader.',
  },
  'Only some of the guilty accept their guilt by the end': {
    why: "In An Inspector Calls Sheila and Eric accept their part in Eva's death, while their parents, once the Inspector seems a fake, deny everything. In The Tempest Alonso repents and asks Prospero to 'pardon me my wrongs' (Act 5 Scene 1), but Antonio and Sebastian show no sign of remorse.",
    more: 'A Christmas Carol has one guilty man, and he accepts his guilt completely. In Ozymandias no one feels guilt at all.',
    tip: 'A split between those who change and those who will not lets a writer show the audience which side to take.',
  },
  'One setting and an unbroken stretch of time trap the guilty together': {
    why: 'An Inspector Calls takes place in one dining room in one continuous evening, so no Birling can escape the questions. The Tempest keeps to one island over a single afternoon, and Prospero holds Alonso, Antonio and Sebastian there until they face what they did.',
    more: 'Macbeth ranges over Scotland and England for months. A Christmas Carol happens in one night but travels across time and place, and Romeo and Juliet and Jekyll and Hyde move around their cities.',
    tip: 'Name the method, the unities of time and place, then explain its effect: pressure that builds because nobody can leave.',
  },
  "A character's guilt begins with a theft": {
    why: "In Great Expectations young Pip steals bread, brandy, a pork pie and a file for the convict, and is tormented by fear and guilt. In An Inspector Calls Eric admits he took about fifty pounds from his father's office to give to Eva, who refused it once she knew it was stolen.",
    more: 'Scrooge and Jane Eyre steal nothing, and Ozymandias and War Photographer hold no thief.',
    tip: "Small crimes can carry great guilt: say what the theft reveals about the character's conscience, and what follows from it.",
  },
  'A ghost of the dead appears to warn or accuse the living': {
    why: "In Macbeth, murdered Banquo's ghost takes Macbeth's own seat at the banquet, and Macbeth cries 'Thou canst not say I did it' (Act 3 Scene 4). In A Christmas Carol, Marley's ghost, wearing 'the chain I forged in life' (Stave 1), warns Scrooge to change before it is too late.",
    more: "The Tempest's Ariel is a spirit, not a dead person's ghost. Frankenstein's creature is made from the dead but is alive, and Jekyll and Hyde and Much Ado have no ghosts at all.",
    tip: "Compare the purpose of each ghost: Banquo's accuses a murderer who will not change, Marley's warns a sinner who still can.",
  },
  'Science, not magic, produces the horror': {
    why: "Victor Frankenstein makes his creature through chemistry and anatomy: 'The dissecting room and the slaughter-house furnished many of my materials' (Chapter 4). In Jekyll and Hyde the change comes from a drug made from salts, and Jekyll's statement explains it as a scientific experiment that went wrong.",
    more: "Macbeth's witches and The Tempest's spirits are magic, and Prospero calls his power 'rough magic' (Act 5 Scene 1). A Christmas Carol's spirits are ghosts, and the voice in Jane Eyre is never explained by science.",
    tip: 'Link to context: both novels respond to fast scientific change, so the horror becomes a warning about knowledge without conscience.',
  },
  'The supernatural leads a character towards good': {
    why: "A Christmas Carol's three spirits lead Scrooge to generosity. In Jane Eyre a moonlit figure in a dream tells Jane to flee temptation (Chapter 27), and a mysterious voice later calls her back to Rochester. In The Tempest Ariel's pity for the prisoners moves Prospero to forgive them.",
    more: "Macbeth's witches lead him towards murder. In Frankenstein and Jekyll and Hyde the power beyond nature comes from science, and it leads to ruin. Ozymandias and War Photographer hold nothing supernatural.",
    tip: 'Ask whether the supernatural tests a character or teaches them, and quote the moment the character responds.',
  },
  'The supernatural is there from the very first scene, before anything else happens': {
    why: "Macbeth opens with three witches in thunder and lightning, chanting 'Fair is foul, and foul is fair' (Act 1 Scene 1). The Tempest opens with a storm that, as the next scene reveals, Prospero raised by magic, so the supernatural drives the plot from the first line.",
    more: "Jane Eyre begins with a book and a blow; the red-room comes in Chapter 2. Frankenstein opens with Walton's letters about his voyage, and Jekyll and Hyde with a lawyer's Sunday walk.",
    tip: 'Openings set the tone: say what the first scene leads an audience to expect, and how the rest of the play fulfils or twists it.',
  },
  'Spirits show a character visions of what is to come': {
    why: "In Macbeth the witches' apparitions warn of Macduff and of Birnam Wood, then show a line of eight kings descended from Banquo (Act 4 Scene 1). In A Christmas Carol the silent Ghost of Christmas Yet to Come shows Scrooge his own unmourned death and his neglected grave.",
    more: 'Frankenstein and Jekyll and Hyde have no spirits at all, and Ozymandias and War Photographer look back at the past rather than forward.',
    tip: 'Visions of the future test free will: compare Macbeth, who rushes to make his vision happen, with Scrooge, who works to prevent his.',
  },
  'A character tries to explain the supernatural away': {
    why: "Scrooge tells Marley's ghost it may be 'an undigested bit of beef' (A Christmas Carol, Stave 1). Lady Macbeth tells her husband that Banquo's ghost is 'the very painting of your fear' (Macbeth, Act 3 Scene 4). In Jane Eyre the adult narrator decides the red-room light was 'in all likelihood, a gleam from a lantern' (Chapter 2).",
    more: "In The Tempest no one doubts Prospero's magic once they meet it. Ozymandias and War Photographer contain nothing supernatural to explain away.",
    tip: 'Doubt makes the supernatural more convincing, not less: when a sceptic is proved wrong, the reader believes.',
  },
  'A character chooses isolation to keep a secret': {
    why: "In Jekyll and Hyde, Jekyll shuts himself in his cabinet to hide that he has become Hyde. In Frankenstein Victor works alone for months in his 'workshop of filthy creation' (Chapter 4), telling no one, and later works on a second creature on a remote Orkney island.",
    more: "The war photographer works alone because the job needs a darkroom, not to hide anything, and Scrooge's isolation comes from meanness, not a secret.",
    tip: 'Distinguish chosen from forced isolation, and say what each text suggests a secret does to the person keeping it.',
  },
  'An outsider is rejected because of how they look': {
    why: "Frankenstein's creature is beaten away by Felix and stoned by villagers for his looks alone, before he has harmed anyone. In Jekyll and Hyde everyone who meets Hyde feels instant disgust at a deformity they cannot name: 'if ever I read Satan's signature upon a face', says Utterson (Chapter 2).",
    more: "Scrooge's loneliness comes from his own coldness, the war photographer is alone by choice, and Ozymandias is about a king, not an outsider.",
    tip: "Compare the two outsiders: the creature's looks hide a good heart at first, while Hyde's seem to show what he is.",
  },
  'Isolation ends in a return to family and community': {
    why: "A Christmas Carol ends with Scrooge welcomed at Fred's Christmas dinner and becoming 'a second father' to Tiny Tim (Stave 5). Jane Eyre finds cousins in the Rivers family, shares her fortune with them, and ends married to Rochester.",
    more: 'Jekyll ends locked in his cabinet, and War Photographer ends with the photographer on a plane, alone with his work.',
    tip: "Endings show a writer's judgement: decide whether each text treats isolation as curable, and use the final scene as evidence.",
  },
  "A lonely figure watches other people's warmth from outside": {
    why: "Frankenstein's creature watches the De Lacey family through a gap in the wall of his hovel. In A Christmas Carol Scrooge, unseen, watches the Cratchits' Christmas and Fred's party. Jane Eyre hides in a window-seat as a child at Gateshead, and later watches Rochester's guests from one at Thornfield.",
    more: 'Jekyll hides from company rather than watching it, and the war photographer looks at suffering, not warmth, through his lens.',
    tip: 'Watching from outside is a powerful image of loneliness: analyse what the watcher sees, and what they cannot share.',
  },
  'A character is driven out of a home that should have sheltered them': {
    why: "Frankenstein's creature, who has secretly helped the De Laceys, is beaten from their cottage by Felix when he reveals himself, after his own maker has already abandoned him. Jane Eyre is unwanted at Gateshead, where her aunt sends her away to Lowood.",
    more: 'Jekyll locks his own door, and the war photographer leaves home for his work. Ozymandias and Tissue are not about homes at all.',
    tip: "A lost home is a powerful image of isolation: quote the moment of rejection and the character's response to it.",
  },
  'A child is sent away to school and left lonely there': {
    why: "In A Christmas Carol young Scrooge is left at school over Christmas, 'A solitary child, neglected by his friends' (Stave 2), until his sister Fan comes to take him home. Jane Eyre is sent from Gateshead to Lowood, a charity school where she arrives knowing no one.",
    more: 'Victor Frankenstein leaves home for university at seventeen, not as a lonely child. Jekyll and the war photographer are grown men, alone by choice.',
    tip: "School scenes show a writer's view of childhood: compare how each child is treated, and what the adult carries from it.",
  },
  'Violence excites those who commit it': {
    why: "In Lord of the Flies the hunters come back chanting from their first kill, and Ralph is thrilled when he wounds a boar (Chapter 7). In Jekyll and Hyde, Jekyll admits that as Hyde, 'With a transport of glee, I mauled the unresisting body' (Chapter 10).",
    more: "War Photographer shows only suffering. The Tempest's plots end without bloodshed, and Much Ado's violence is only threatened.",
    tip: "When violence thrills a character, ask what the writer suggests about human nature, and link it to context such as Golding's war.",
  },
  'The central act of violence happens out of sight and is reported': {
    why: "Duncan is murdered offstage in Macbeth (Act 2 Scene 2): we see only the bloody daggers and Macbeth's horror. In Jekyll and Hyde the Carew murder reaches us through a maid's account, and the trampling through Enfield's story. In War Photographer a death abroad returns only as memory and a print.",
    more: "Animal Farm narrates the executions in the yard directly. Lord of the Flies shows Simon's and Piggy's deaths as they happen, and Romeo and Juliet's fights and deaths take place on stage.",
    tip: 'Ask what keeping violence out of sight does: it can make the reader imagine worse, and puts the focus on guilt and horror afterwards.',
  },
  'War in the background explains the violence': {
    why: "Lord of the Flies is set during a war: the boys' plane was evacuating them, and a dead parachutist from an air battle becomes their beast (Chapter 6). War Photographer names Belfast, Beirut and Phnom Penh, real wars whose suffering the photographer has recorded.",
    more: "Romeo and Juliet's violence comes from a family feud, not a war. Hyde's violence comes from within Jekyll, and A Christmas Carol has none.",
    tip: "Use the war as context for a choice: Golding sends an adult war into the boys' island to show the same savagery at every age.",
  },
  'Violence harms the person who commits it': {
    why: "Macbeth's murders leave him crying 'O, full of scorpions is my mind, dear wife' (Act 3 Scene 2). In Jekyll and Hyde, Jekyll loses control of the change and is destroyed by Hyde. In Romeo and Juliet, killing Tybalt gets Romeo banished and leads to his death: 'O, I am fortune's fool' (Act 3 Scene 1).",
    more: 'The war photographer witnesses violence rather than commits it, Ozymandias is ruined by time rather than by any act of violence, and Tissue is not about violence at all.',
    tip: "Ask whether the writer punishes violence or just shows it: the answer often reveals the text's moral view.",
  },
  "A battle is described with admiration for the fighters' courage": {
    why: "In Macbeth a wounded captain admires how Macbeth carved his way through the rebels, and Duncan calls him 'worthy gentleman' (Act 1 Scene 2). In Animal Farm the Battle of the Cowshed is celebrated, and Snowball and Boxer are made 'Animal Hero, First Class' (Chapter 4).",
    more: "Romeo and Juliet's fights are street brawls and duels, not battles. War Photographer shows war's victims, not its heroes, and Jekyll and Hyde's violence is one man's crime.",
    tip: "Early admiration can set up a fall: Macbeth's praised violence turns to murder, and the Cowshed heroes' story is later rewritten.",
  },
  'A peacemaker tries to stop the fighting and fails': {
    why: "In Romeo and Juliet, Benvolio says 'I do but keep the peace' as Tybalt attacks (Act 1 Scene 1), and later Romeo steps between Mercutio and Tybalt, and Mercutio is wounded under his arm. In Lord of the Flies Piggy holds up the conch at Castle Rock, asks the tribe to choose rules over killing, and is killed.",
    more: "No one in Macbeth tries to make peace in its battles. Animal Farm's animals do not try to stop Napoleon's executions, and War Photographer and Jekyll and Hyde have no one stepping between the fighters.",
    tip: 'A failed peacemaker shows how strong the violence is: quote their words and the reaction that defeats them.',
  },
  'The story opens in the middle of, or just after, a fight or battle': {
    why: "Romeo and Juliet's first scene is a street brawl between Capulet and Montague servants, which Tybalt joins and the Prince must stop. Macbeth opens with the witches waiting until 'the battle's lost and won' (Act 1 Scene 1), and a wounded captain then reports how Macbeth fought.",
    more: "Animal Farm opens with a meeting in a barn and Jekyll and Hyde with a Sunday walk. Ozymandias opens with a traveller's report, London with a walk through the streets, and Tissue with paper that lets the light through.",
    tip: "Openings set up a text's world: say what beginning with violence tells the audience about the conflict to come.",
  },
  'Its view of violence is shaped by the Second World War, which its writer lived through': {
    why: "William Golding, who served in the Royal Navy during the war, published Lord of the Flies in 1954 to show the savagery ordinary people are capable of. George Orwell wrote Animal Farm in 1943 and 1944, attacking Stalin's dictatorship while Britain was Stalin's ally.",
    more: 'Jekyll and Hyde, Macbeth and Romeo and Juliet were written long before. War Photographer was published in 1985, about later wars in places such as Belfast and Beirut.',
    tip: "Use context to explain a choice, not as a history lesson: link the war to one feature of the text, such as Golding's pessimism.",
  },
  'Evil hides behind a respectable or innocent face': {
    why: "Lady Macbeth tells her husband to 'look like the innocent flower, / But be the serpent under't' (Macbeth, Act 1 Scene 5). In Jekyll and Hyde, Jekyll's respectable name hides Hyde's crimes. In Great Expectations Compeyson, a swindler with a gentleman's manners, ruins Miss Havisham and receives a lighter sentence than Magwitch.",
    more: "Frankenstein reverses it: the creature's frightening face hides a good heart at first. Scrooge is openly mean, and War Photographer and Tissue show no hidden villain.",
    tip: 'Find the moment the mask slips and analyse it, such as Hyde trampling a child in the street.',
  },
  'A feast or celebration is ruined by a guilty secret coming out': {
    why: "Macbeth's banquet breaks up when Banquo's ghost appears and Macbeth gives himself away. An Inspector Calls begins with an engagement dinner that the Inspector turns into an interrogation. In The Tempest a magic banquet vanishes, and Ariel, as a harpy, calls the guilty men 'three men of sin' (Act 3 Scene 3).",
    more: 'The Capulet feast in Romeo and Juliet goes on once Capulet stops Tybalt, and the parties in A Christmas Carol are happy ones. Ozymandias and Tissue hold no celebration.',
    tip: 'A ruined celebration sets appearance against truth: quote the happy surface, then the moment it cracks.',
  },
  'A character lives two lives, one public and one hidden': {
    why: "In Jekyll and Hyde, Jekyll keeps a respectable life in his own house and Hyde's in rooms in Soho. In Great Expectations Wemmick is hard and businesslike at Jaggers's office, chasing 'portable property' (Chapter 24), and warm at home in Walworth, where he cares for his deaf father, the Aged.",
    more: "Prospero in The Tempest has one life, told in full to Miranda in the second scene. Much Ado's Don John is openly villainous, and Scrooge is the same man at home and at work.",
    tip: 'Double lives make a strong comparison: one hides vice, the other protects kindness. Ask what each says about the society around it.',
  },
  'Clothes that do not fit show a character in the wrong role': {
    why: "Macbeth's new title hangs 'like a giant's robe / Upon a dwarfish thief' (Act 5 Scene 2). In Jekyll and Hyde, Hyde is found 'dressed in clothes far too large for him' (Chapter 8). In Great Expectations Joe visits Pip stiff in his best clothes, and in The Tempest drunken plotters grab stolen finery.",
    more: "An Inspector Calls dresses its family for a celebration, but no one's clothes are made to fit badly, and nothing is made of the fit in Romeo and Juliet or Ozymandias.",
    tip: "Macbeth's image begins with 'why do you dress me / In borrow'd robes?' (Act 1 Scene 3): track an image from its first use to its last.",
  },
  'Reputation is protected by keeping silent about a scandal': {
    why: "In Jekyll and Hyde, Enfield and Utterson agree 'never to refer to this again' (Chapter 1), and Utterson protects his friend by asking no questions. In An Inspector Calls Birling's first worry is a public scandal, and once the Inspector seems a fake he wants the whole matter hushed up.",
    more: "Scrooge does not care what people think of him. The Tempest's wrongs are exposed, not hidden, and Ozymandias wants his works seen by all.",
    tip: 'Link silence to context: Victorian gentlemen and Edwardian businessmen both prized respectability, and both texts expose what it costs.',
  },
  'Characters judge others by their faces, and get it wrong': {
    why: "Duncan says 'There's no art / To find the mind's construction in the face' (Macbeth, Act 1 Scene 4), then trusts Macbeth. In Much Ado Claudio reads Hero's blush as guilt (Act 4 Scene 1). In The Tempest Miranda sees a 'brave new world' (Act 5 Scene 1) in men who include her father's enemies.",
    more: "In Ozymandias the sculptor read the king's face correctly: 'its sculptor well those passions read' (line 6). London's speaker reads 'Marks of weakness, marks of woe' (line 4) rightly, and War Photographer judges no one by their face.",
    tip: 'Dramatic irony makes this painful: the audience knows the truth behind the face, and watches the misjudgement happen.',
  },
  'A key truth is withheld until near the end to create mystery': {
    why: "Jekyll and Hyde reveals that Jekyll and Hyde are one man only in its last two chapters. In Great Expectations Pip learns in Chapter 39 that his benefactor is the convict, not Miss Havisham. An Inspector Calls holds back Eric's part until the end of Act 2, and whether the Inspector was real until the very end.",
    more: "Frankenstein's outcome is clear from Walton's first meeting with the dying Victor, and Romeo and Juliet's Prologue tells the ending first. In The Tempest and Much Ado the audience is let into every plot as it is laid.",
    tip: 'Say how withholding works on a reader: it builds suspense, and makes the reveal reshape everything that came before.',
  },
  'Life itself is compared to a play or a dream': {
    why: "Told that his wife is dead, Macbeth calls life 'a walking shadow; a poor player' who struts and frets his hour on the stage (Act 5 Scene 5). In The Tempest Prospero, ending his masque, says 'We are such stuff / As dreams are made on' (Act 4 Scene 1), and that the world itself will fade like his show.",
    more: 'Much Ado stages tricks and overhearings but never compares life itself to a play. An Inspector Calls, London and Great Expectations make no such comparison.',
    tip: "Theatre imagery inside a play is self-aware: say what it adds, such as Macbeth's despair or Prospero's farewell to his art.",
  },
  'Light threatens to expose what a character wants hidden': {
    why: "When the Inspector arrives in An Inspector Calls, the lighting becomes brighter and harder, exposing the family. In Macbeth, Macbeth begs 'Let not light see my black and deep desires' (Act 1 Scene 4), and Lady Macbeth calls on 'thick night' to hide the murder (Act 1 Scene 5).",
    more: "Much Ado's deceptions happen at night, but light plays no part in revealing them. The Tempest's truths come out through magic, and in Ozymandias and London light exposes no one.",
    tip: 'Stage lighting is a method too: in a play, comment on the stage directions as well as the words.',
  },
  'A family is shown to be loving, though it is poor': {
    why: "A Christmas Carol's Cratchits make a feast of a small goose and pudding, and Bob carries Tiny Tim home on his shoulder. In Great Expectations Joe, a village blacksmith, loves Pip like a father, and at the end Joe and Biddy's home, with their own little Pip, is full of warmth.",
    more: "The Birlings in An Inspector Calls are rich and fail each other. Romeo and Juliet's wealthy Capulets turn on their daughter, and Macbeth shows no poor families.",
    tip: 'Contrast a loving poor family with a cold rich one, and say what the writer suggests money cannot buy.',
  },
  'The younger generation is shown to be wiser than the older': {
    why: "In An Inspector Calls, Sheila and Eric learn the Inspector's lesson while their parents refuse it: 'You began to learn something. And now you've stopped' (Act 3). In A Christmas Carol young Fred understands Christmas and kindness long before his uncle does, and keeps inviting him.",
    more: "In Great Expectations young Pip is foolish and the older Joe wiser, and Lord of the Flies' children are no wiser than adults. In The Tempest it is Prospero, not the dazzled Miranda, who sees the newcomers truly.",
    tip: 'Generational conflict is a structure: show how the writer lines up the young against the old, and whose side the ending takes.',
  },
  "A parent's plans for a child's marriage are about money or status": {
    why: "In Romeo and Juliet, Capulet presses Juliet to marry Paris, a wealthy count and kinsman of the Prince. In An Inspector Calls Birling toasts Sheila's engagement by looking forward to Crofts Limited and Birling and Company working together, 'for lower costs and higher prices' (Act 1).",
    more: "Miss Havisham's plans for Estella in Great Expectations are about revenge on men, not money or status. A Christmas Carol has no arranged match, and War Photographer and Tissue none at all.",
    tip: "Link marriage to context: in both periods a marriage could be a family's business deal, and both writers expose that.",
  },
  "A family meal becomes the stage for the family's tensions": {
    why: "An Inspector Calls is set at the Birlings' celebration dinner, where Sheila's teasing of Gerald and Birling's speeches already show the cracks. In Great Expectations the Christmas dinner at the forge has Mrs Joe and Pumblechook lecturing Pip, while Joe quietly comforts him 'by giving me gravy' (Chapter 4).",
    more: "Macbeth's banquet is a public feast, not a family meal, and Much Ado has no family meal at its centre. Ozymandias and War Photographer seat no family at a table.",
    tip: 'Meals show family power: note who speaks, who is silenced and who is served.',
  },
  'Mercy is chosen over revenge': {
    why: "In The Tempest Prospero, with his enemies in his power, decides 'the rarer action is / In virtue than in vengeance' (Act 5 Scene 1). Jane Eyre forgives the dying Mrs Reed, who had treated her cruelly (Chapter 21). In Great Expectations Pip forgives Miss Havisham when she kneels and begs him to (Chapter 49).",
    more: 'Macduff takes his revenge on Macbeth, and Napoleon in Animal Farm punishes anyone he calls a traitor. Ozymandias and War Photographer offer no one a choice between mercy and revenge.',
    tip: 'Mercy is a choice: find the line where a character could take revenge and decides not to, and analyse that turning point.',
  },
  'A figure of religion or charity is exposed as a hypocrite': {
    why: "In Jane Eyre, Mr Brocklehurst, whose 'mission is to mortify in these girls the lusts of the flesh', starves the Lowood pupils while his family wears 'velvet, silk, and furs' (Chapter 7). In An Inspector Calls Mrs Birling chairs a women's charity, yet persuades it to turn Eva away.",
    more: "A Christmas Carol's charity collectors are sincere and kind. The Tempest and Macbeth have no religious or charitable hypocrites.",
    tip: 'Hypocrisy is a gap between words and actions: quote both sides of the gap, and explain what the writer is attacking.',
  },
  'A character speaks for the writer, delivering the moral lesson directly': {
    why: "In An Inspector Calls the Inspector voices Priestley's socialism, warning in his last speech that those who will not learn responsibility will be taught it through suffering. In A Christmas Carol Dickens speaks through his spirits: Marley's ghost cries 'Mankind was my business' (Stave 1), and the second spirit names two children Ignorance and Want.",
    more: 'Macbeth and Much Ado leave the audience to judge, with no character announcing the moral, and Ozymandias lets its irony speak for it.',
    tip: 'Calling a character a mouthpiece is a strong point if you also say how the writer keeps them believable, or fails to.',
  },
  "A speech of judgement names each wrongdoer's crime in turn": {
    why: "Before he leaves, the Inspector reminds each Birling in turn what they did to Eva (An Inspector Calls, Act 3). In The Tempest Prospero names his enemies one by one: 'Most cruelly / Didst thou, Alonso, use me and my daughter', then Sebastian, then his own brother (Act 5 Scene 1).",
    more: "A Christmas Carol's spirits show Scrooge scenes rather than charge him, and Jane Eyre judges only herself, 'Arraigned at my own bar' (Chapter 16). In Ozymandias the only words on the statue are the king's own boast.",
    tip: 'Listing is a technique: say what naming each wrongdoer does to the listeners on stage, and to the audience watching.',
  },
  'A court or committee treats people differently according to their class': {
    why: "In Great Expectations Compeyson, who looks and speaks like a gentleman, is given seven years, while Magwitch, the rough convict, gets fourteen. In An Inspector Calls Mrs Birling's charity committee turns Eva away, offended that a girl of her class used the Birling name.",
    more: 'Prospero judges people by what they did, not their rank. A Christmas Carol and Macbeth have no court or committee weighing people by class.',
    tip: "Courts and committees are society in miniature: use them as evidence of the writer's view of how justice really works.",
  },
  'A character takes a false name to hide who they are': {
    why: "In Great Expectations Magwitch, back illegally from transportation, lives in London as 'Mr. Provis' (Chapter 40). In Jane Eyre, after fleeing Thornfield, Jane tells the Rivers family 'My name is Jane Elliott', being 'Anxious as ever to avoid discovery' (Chapter 28).",
    more: "In Romeo and Juliet, Juliet wishes Romeo had another name, but he never takes one. Frankenstein's creature is never given a name at all, and Scrooge and Prospero keep their own.",
    tip: 'Names carry identity: ask what a character loses or protects by changing theirs.',
  },
  'A character discovers a family link or origin they never suspected': {
    why: "Jane Eyre learns that the Rivers, who took her in, are her cousins, and that her uncle has left her a fortune. In Great Expectations Pip works out that Estella's parents are Magwitch and Jaggers's housekeeper Molly. Frankenstein's creature reads Victor's journal and learns how he was made.",
    more: "Jekyll knows exactly what he has made of himself. Tissue's family histories are recorded, not discovered, and Scrooge's past is shown to him, not revealed as a surprise.",
    tip: "A discovered origin changes how a character sees themselves: quote the reaction, such as the creature's 'Hateful day when I received life' (Chapter 15).",
  },
  'Self-discovery comes through leaving home and travelling': {
    why: "Jane Eyre's story moves from Gateshead to Lowood, Thornfield, Moor House and Ferndean, and she learns who she is at each stage. In Great Expectations Pip leaves the forge for London, and only away from home learns what Joe was worth.",
    more: "Jekyll's discovery happens in his own house, in his laboratory, and Tissue finds identity in records, not a journey. Macbeth never leaves Scotland, and the Birlings' discoveries happen in their dining room.",
    tip: 'This is the shape of a Bildungsroman: name the form, and track the character through each place they live.',
  },
  "A character's sense of self is shaped by the names others call them": {
    why: "Frankenstein's creature, called 'fiend' and 'devil' by those who see him, comes to ask 'Was I then a monster' (Chapter 13). In Great Expectations, after Estella calls him 'a common labouring-boy' (Chapter 8), Pip is ashamed of his hands and boots for the first time.",
    more: 'Jekyll shapes his own identity with a drug, not through names. Tissue sees identity in records, not insults, and in A Christmas Carol the harsh names are mostly the ones Scrooge gives.',
    tip: 'Labels are evidence: quote what a character is called, then show how they come to see themselves.',
  },
  'A storm breaks at the moment of a killing': {
    why: "In Lord of the Flies a storm breaks over the beach as the boys dance and kill Simon (Chapter 9). In Macbeth the night of Duncan's murder is wild: Lennox reports chimneys blown down and 'Lamentings heard i' th' air, strange screams of death' (Act 2 Scene 3).",
    more: "Jane Eyre's storm follows a proposal, splitting the chestnut tree. The Tempest's storm kills no one. In Jekyll and Hyde, Carew is murdered under a clear moon, and in Great Expectations a storm brings Magwitch back, not a death.",
    tip: 'Pathetic fallacy links the natural world to human action: say whether the storm mirrors the violence or seems to protest against it.',
  },
  'Nature is shown as a healing, comforting force': {
    why: "In Frankenstein, after Justine's death, the Alps' 'sublime and magnificent scenes afforded me the greatest consolation' (Chapter 10). In The Tempest Caliban tells his companions not to fear: 'The isle is full of noises, / Sounds, and sweet airs, that give delight, and hurt not' (Act 3 Scene 2).",
    more: "In Jekyll and Hyde London's fog only darkens the streets, Ozymandias's desert is indifferent, and in London even the Thames is 'chartered'.",
    tip: 'Romantic writers such as Mary Shelley saw nature as sublime and restoring: use that context to explain a description.',
  },
  'Even land, rivers or streets are owned and controlled by the powerful': {
    why: "London's speaker walks 'each chartered street, / Near where the chartered Thames does flow' (lines 1 and 2). In The Tempest Caliban protests 'This island's mine, by Sycorax my mother, / Which thou tak'st from me' (Act 1 Scene 2). Tissue shows land divided on maps by borderlines that people drew.",
    more: "In Ozymandias the desert swallows a king's works rather than being owned, and nature in Macbeth rebels against a murder. War Photographer and Much Ado say nothing of who owns the land.",
    tip: "Ownership of nature is a political point: link it to context, such as Blake's anger at the power of the rich, or a newcomer claiming an island.",
  },
  'An island cut off from the world is the main setting': {
    why: 'Lord of the Flies is set on a tropical island where schoolboys are stranded after a plane crash. The Tempest is set on a remote island where Prospero and Miranda have lived for twelve years, since Antonio had them set adrift.',
    more: "Macbeth moves between Scottish castles and England. Ozymandias is set in a desert, London in the city's streets, and Tissue has no single setting.",
    tip: 'An island strips away society, so ask what each writer tests by removing it: human nature in Golding, power and forgiveness in Shakespeare.',
  },
  "A Romantic writer shows nature's vastness dwarfing human ambition": {
    why: "Mary Shelley's Frankenstein sets Victor among the Alps and the Arctic ice, where glaciers move by 'the silent working of immutable laws' (Chapter 10). Percy Shelley's Ozymandias ends with 'The lone and level sands' stretching far away from a fallen king (line 14). Both were published in 1818.",
    more: "Blake's London is Romantic too, but its subject is the city's suffering, not nature's vastness. Macbeth is two centuries older, and Tissue, from this century, shows light passing through human structures rather than nature dwarfing them.",
    tip: "Name the sublime: the awe and terror of nature's scale. It links Frankenstein and Ozymandias, written by a wife and husband.",
  },
  'Fire changes from a source of warmth or hope into a force of destruction': {
    why: "In Lord of the Flies the signal fire, the boys' hope of rescue, becomes the blaze Jack sets to hunt Ralph (Chapter 12). Frankenstein's creature finds fire warm, then burns his hand: 'How strange, I thought, that the same cause should produce such opposite effects' (Chapter 11). Later he burns the De Laceys' cottage.",
    more: "The Tempest's storm is wind and water, not fire, and Ozymandias, London and Tissue make no symbol of fire.",
    tip: "Symbols can change meaning: track a symbol's first and last appearance and explain the shift.",
  },
  'Cruelty is learned: a young or newly made being is taught it by others': {
    why: "In Great Expectations Miss Havisham raises Estella to break men's hearts, and Estella tells her 'I am what you have made me' (Chapter 38). In Frankenstein the creature, rejected by everyone, says 'I was benevolent and good; misery made me a fiend' (Chapter 10).",
    more: "Hyde's evil was always inside Jekyll, and Macbeth chooses murder as a grown man. Ozymandias and War Photographer show cruelty and suffering, but no one being taught it.",
    tip: 'Use this for a nature versus nurture argument: show what the character was before, and who changed them.',
  },
  'Children are shown as victims of adult society': {
    why: "London hears 'the chimney-sweeper's cry' and sees a 'new-born infant's tear' blasted (stanzas 3 and 4). In A Christmas Carol the second spirit reveals two starving children, Ignorance and Want: 'They are Man's' (Stave 3). In Great Expectations Magwitch began life as a child stealing turnips, 'In jail and out of jail' (Chapter 42).",
    more: 'Much Ado has no child victims, and Ozymandias and Tissue are about power and paper, not childhood.',
    tip: 'Writers use child victims to make readers feel responsible: say who, in each text, should have protected the child.',
  },
  'Corruption spreads from those in power down to the powerless': {
    why: "London begins in the 'chartered' streets, blames church and palace, and ends with 'the youthful harlot's curse' blighting a newborn (stanza 4): the sickness runs downwards. In Macbeth the tyrant's crimes spread through Scotland, until Macduff cries 'Bleed, bleed, poor country' (Act 4 Scene 3).",
    more: "Hyde's evil comes from within Jekyll, not from rulers above him. Ozymandias shows a ruler's pride but no one corrupted by it, and War Photographer and Tissue show no corruption spreading.",
    tip: 'Structure can show corruption spreading: follow how a poem or play moves from the powerful to the powerless.',
  },
  "Innocence is lost as in Adam and Eve's fall from paradise": {
    why: "Lord of the Flies begins on an island like Eden, where the first fear is of a 'snake-thing' (Chapter 2), and ends with Ralph weeping 'for the end of innocence' (Chapter 12). Frankenstein's creature reads Paradise Lost and tells Victor 'I ought to be thy Adam; but I am rather the fallen angel' (Chapter 10).",
    more: "Scrooge's past is lonely but no paradise, and Romeo and Juliet's lovers fall through haste and a feud, not a biblical pattern. Ozymandias shows a king's pride brought low by time, with no innocence to lose.",
    tip: 'Biblical allusion links a story to the oldest account of lost innocence: name the allusion and say what it adds.',
  },
  'Love of money pushes out love of people': {
    why: "In A Christmas Carol Belle releases Scrooge from their engagement because 'Another idol has displaced me' (Stave 2), a golden one. In Great Expectations Pip's money and new gentility make him ashamed of Joe and patronising to Biddy, the two people who love him most.",
    more: "Macbeth is corrupted by the crown, not money. Lord of the Flies' boys have no money at all, and Victor Frankenstein neglects his family for knowledge, not wealth.",
    tip: 'Find the moment the character chooses money over a person, and analyse the language of that choice.',
  },
  'A character blames fate for what their own choices caused': {
    why: "In Romeo and Juliet, having chosen to kill Tybalt, Romeo cries 'O, I am fortune's fool' (Act 3 Scene 1). Victor Frankenstein, who chose to make his creature and then abandon it, insists 'Destiny was too potent, and her immutable laws had decreed my utter and terrible destruction' (Chapter 2).",
    more: 'In An Inspector Calls the Inspector insists the Birlings chose what they did, and in the end Pip and Prospero take responsibility for their own choices.',
    tip: 'Weigh both sides: show what fate seems to arrange, then what the character chose. The best answers do not settle it too quickly.',
  },
  'The ending is made clear at the start, so we watch how, not what, happens': {
    why: "Romeo and Juliet's Prologue tells the audience that 'A pair of star-cross'd lovers take their life'. Frankenstein opens with Walton finding Victor dying on the ice, and Victor warns that 'nothing can alter my destiny' (Letter 4) before he tells his story.",
    more: "Macbeth's prophecies promise a crown, not his fall. Jekyll and Hyde and An Inspector Calls hide their endings until the last moment, and Great Expectations keeps its benefactor secret for most of the book.",
    tip: 'When the end is known, suspense comes from how we get there: comment on dramatic irony and the dread it builds.',
  },
  'A character dares fate to fight them': {
    why: "Told that Juliet is dead, Romeo answers 'Then I defy you, stars' and rides for Verona (Romeo and Juliet, Act 5 Scene 1). Macbeth, fearing that Banquo's sons will be kings, says 'come, fate, into the list, / And champion me to th' utterance' (Act 3 Scene 1), challenging fate to a fight to the death.",
    more: 'Victor Frankenstein submits to destiny instead of defying it. An Inspector Calls is about choices, not fate, Prospero takes on his enemies rather than the stars, and War Photographer and Tissue hold no one who challenges fate.',
    tip: 'Defiance of fate can be heroic or foolish: decide which each writer suggests, and use the ending as evidence.',
  },
  'A prophecy or threat comes true in a way the character did not expect': {
    why: "Macbeth trusts that 'none of woman born / Shall harm Macbeth' (Act 4 Scene 1), but Macduff was 'from his mother's womb / Untimely ripp'd' (Act 5 Scene 8). In Frankenstein the creature's threat, 'I shall be with you on your wedding-night' (Chapter 20), makes Victor fear for himself, but it is Elizabeth who is killed.",
    more: "A Christmas Carol's vision of Tiny Tim's death does not come true, because Scrooge changes. Nothing foretold in The Tempest or Great Expectations comes true in a twisted way.",
    tip: "Equivocation, a double meaning, is the key word for Macbeth: explain how the prophecy's wording traps him.",
  },
  'A rebellion against one master ends with a new master just as bad, or worse': {
    why: "Animal Farm's animals drive out Mr Jones, and end with pigs they cannot tell from men. In The Tempest Caliban rebels against Prospero by taking the drunken Stephano as his god, and later sees 'What a thrice-double ass / Was I, to take this drunkard for a god' (Act 5 Scene 1).",
    more: "In An Inspector Calls Eva's strike is crushed, and no one replaces Birling. London is a protest, not a rebellion, and Ozymandias shows a tyrant ended by time.",
    tip: 'Both texts doubt rebellions led by the wrong people: compare who leads each revolt and what they want.',
  },
  "A real revolution of the writer's time shapes the text": {
    why: "Animal Farm is an allegory of the Russian Revolution of 1917 and of Stalin's betrayal of it. Blake published London in 1794, during the French Revolution, when British radicals were being watched and arrested.",
    more: "The Tempest and Macbeth were written in Jacobean England, and Macbeth's echo of the Gunpowder Plot recalls a failed attack, not a revolution.",
    tip: 'Use dates precisely: 1794 for London, 1917 and the 1930s for Animal Farm. Context earns credit when it explains a choice in the text.',
  },
  'Workers who strike or protest are crushed': {
    why: "In An Inspector Calls Eva Smith helps lead a strike for twenty-five shillings a week instead of twenty-two and six, and Birling sacks her as a ringleader. In Animal Farm the hens resist the sale of their eggs, and Napoleon stops their rations until 'Nine hens had died' (Chapter 7).",
    more: "London protests against suffering, but no workers strike in it. Bob Cratchit in A Christmas Carol never protests, and Macbeth's rebels are nobles, not workers.",
    tip: "Link protest to context: the strikes of the years before the First World War, and Stalin's crushing of the peasants who resisted him.",
  },
  'A song spreads the spirit of rebellion': {
    why: "In Animal Farm Old Major's song, Beasts of England, spreads the Rebellion across the farm and beyond, until the pigs abolish it. In The Tempest Caliban, swapping Prospero for Stephano, sings that he 'Has a new master' and cries 'Freedom, high-day' (Act 2 Scene 2).",
    more: "An Inspector Calls has no rebel songs. Ozymandias's only words are a tyrant's boast, and Macbeth's rebels fight without singing.",
    tip: 'Songs unite and simplify: say what the words make the singers feel, and why a ruler would want them silenced.',
  },
  'Those in power mock or punish anyone who calls for change': {
    why: "In An Inspector Calls Birling mocks 'community and all that nonsense' (Act 1) and sacked Eva for striking. In Animal Farm the pigs who protested are dragged out to confess and are killed (Chapter 7). In The Tempest Prospero punishes Caliban with cramps and pinches, and his rebellion is hunted by spirit hounds.",
    more: 'London is itself a call for change, and no one in the poem answers it. In Ozymandias no rebel appears: time does the work.',
    tip: 'Note how the powerful use mockery as well as force: laughter can silence an argument without answering it.',
  },
  'The past is relived through images that bring it back': {
    why: "In War Photographer a stranger's face takes shape in the developing tray, a 'half-formed ghost' (stanza 3), and brings back the dying man and his wife's cries. In A Christmas Carol the Ghost of Christmas Past shows Scrooge scenes from his own life: the lonely schoolboy, Fezziwig's ball and Belle.",
    more: 'London shows suffering in the present, as the speaker walks the streets. Romeo and Juliet and Much Ado move forward through their stories, with no image that brings a past back.',
    tip: 'Images make memory vivid: analyse which detail of the image hurts most, and why the writer chose it.',
  },
  "The past reaches us second-hand, through someone else's account": {
    why: "Ozymandias's speaker knows the statue only from 'a traveller from an antique land' (line 1), who describes the sculptor's view of the king. In Great Expectations Pip learns the past from others: Herbert tells Miss Havisham's story, and Magwitch tells his own, 'In jail and out of jail' (Chapter 42).",
    more: "Scrooge sees his past for himself, with the Ghost, and London's speaker sees the city first-hand.",
    tip: 'Second-hand telling distances us from the past: comment on how many voices stand between the reader and the event.',
  },
  "Fragile records hold the memory of ordinary people's lives": {
    why: "Tissue's thin paper holds family histories in the back of the Koran, old maps and 'Fine slips from grocery shops'. War Photographer's prints, developed from 'spools of suffering' (stanza 1), hold the last moments of strangers in other countries, though readers look only briefly.",
    more: "Ozymandias's record is a stone statue of a king, not an ordinary life, and London records suffering it sees in the present.",
    tip: 'Compare how the two poems value records: one finds beauty in their fragility, the other anger at how quickly they are forgotten.',
  },
  'Childhood memories are shown to shape the adult': {
    why: "In A Christmas Carol the sight of his lonely boyhood makes Scrooge weep, and shows how neglect hardened him. In Great Expectations the adult Pip's guilt and loyalty towards Magwitch grow from their first terrifying meeting in the churchyard (Chapter 1).",
    more: "Tissue, War Photographer and Ozymandias are about memory, but not a childhood shaping an adult: the past they hold is a family's, a war's or a king's.",
    tip: "Trace one link from childhood to adulthood, with a quotation for each, to show the writer's view of how people are made.",
  },
  "A secret is pieced together from letters, statements and other people's accounts": {
    why: "Jekyll and Hyde ends with documents, Lanyon's narrative and Jekyll's full statement, which explain the mystery Utterson has been following. Frankenstein is Walton's letters to his sister, which hold Victor's story, which holds the creature's own.",
    more: 'Macbeth acts its events out on stage, A Christmas Carol has one storyteller, and Ozymandias holds no secret to uncover.',
    tip: 'Several narrators make the reader a detective: comment on whose account we trust, and what each one cannot see.',
  },
  'A maker refuses responsibility for what he has made, and others pay for it': {
    why: "Victor Frankenstein runs from his creature on the night it wakes and leaves it to fend for itself; William, Justine, Clerval and Elizabeth die. In Jekyll and Hyde, Jekyll writes of Hyde as 'That child of Hell' (Chapter 10) and cannot bring himself to say 'I'. Carew and Lanyon pay.",
    more: "In The Tempest Prospero says of Caliban 'this thing of darkness I / Acknowledge mine' (Act 5 Scene 1). Birling refuses responsibility for Eva, but did not make her, and in Great Expectations Magwitch is proud of the gentleman he 'made'.",
    tip: 'This is the heart of the science theme: say what each writer thinks a maker owes to what they make.',
  },
  'A woman challenges what her society expects of women': {
    why: "Jane Eyre insists that 'women feel just as men feel' (Chapter 12) and refuses to be kept by Rochester. In Much Ado Beatrice refuses a husband 'Not till God make men of some other metal than earth' (Act 2 Scene 1). In Macbeth, Lady Macbeth calls on spirits to 'unsex me here' (Act 1 Scene 5).",
    more: "A Christmas Carol's women, such as Belle and Mrs Cratchit, keep to their roles, and Animal Farm's mares and hens stand for workers, not women. Ozymandias and War Photographer have no woman at their centre.",
    tip: 'Ask whether each text rewards or punishes the challenge: Jane is rewarded, Beatrice marries, and Lady Macbeth is destroyed.',
  },
  'A woman at the heart of the plot never speaks for herself': {
    why: 'In An Inspector Calls Eva Smith never appears: we know her only from what the Inspector and the Birlings say. In Jane Eyre, Bertha Mason, whose existence stops the wedding, never speaks on the page: we hear her laugh and growl, and others speak for her.',
    more: "Lady Macbeth, Hero and Juliet all speak for themselves, Juliet some of the play's finest lines. In Frankenstein Elizabeth writes letters and Justine speaks at her trial.",
    tip: "Silence is the writer's choice: ask whose voice replaces the silent woman's, and what that suggests about power.",
  },
  "A woman questions a man's courage to push him into action": {
    why: "Lady Macbeth taunts her wavering husband, 'When you durst do it, then you were a man' (Act 1 Scene 7), until he agrees to kill Duncan. In Much Ado Beatrice tells Benedick to 'Kill Claudio', and scorns men whose 'manhood is melted into curtsies' (Act 4 Scene 1), until he agrees to challenge his friend.",
    more: "In An Inspector Calls Sheila challenges Gerald's honesty, not his courage. Jane Eyre never pushes Rochester to act, and Elizabeth never questions Victor's courage.",
    tip: "Compare the outcomes: Lady Macbeth's taunt leads to murder and ruin, Beatrice's to justice for Hero.",
  },
  'A man who shows feeling is mocked, or fears he is less of a man': {
    why: "In Macbeth, when Malcolm tells the grieving Macduff to 'Dispute it like a man', Macduff answers 'But I must also feel it as a man' (Act 4 Scene 3). In Romeo and Juliet, Romeo blames love for softening him once Mercutio is wounded: 'Thy beauty hath made me effeminate' (Act 3 Scene 1).",
    more: 'Rochester and Victor Frankenstein show strong feeling without anyone questioning their manhood, and Ozymandias, War Photographer and Tissue hold no such moment.',
    tip: "Link this to ideas of masculinity in Shakespeare's time, and ask whether the play agrees with them or questions them, as Macduff does.",
  },
  "A father tries to choose his daughter's husband": {
    why: "In Romeo and Juliet, Capulet promises Juliet to Paris and threatens to throw her out if she refuses. In The Tempest Prospero steers Ferdinand to Miranda: 'It goes on, I see, / As my soul prompts it' (Act 1 Scene 2). In Much Ado Leonato tells Hero if the Prince woos her, 'you know your answer' (Act 2 Scene 1).",
    more: 'Jane Eyre has no father, and chooses for herself. In Great Expectations Estella decides to marry Drummle on her own, and Macbeth has no daughter to marry off.',
    tip: "Link this to context, when a daughter's marriage was her father's decision, and ask how far each play questions that.",
  },
  'A powerful woman is presented as unnatural or monstrous': {
    why: "Lady Macbeth, who drives the murder, is remembered in the play's last speech as Macbeth's 'fiend-like queen' (Act 5 Scene 8). The Tempest's Sycorax, a powerful witch who imprisoned Ariel in a pine, is 'The foul witch Sycorax, who with age and envy / Was grown into a hoop' (Act 1 Scene 2).",
    more: "Romeo and Juliet's Lady Capulet and A Christmas Carol's women are not presented as monstrous, and Ozymandias holds no woman at all.",
    tip: 'Ask whose voice calls the woman monstrous: Malcolm and Prospero are enemies with reasons of their own.',
  },
  'A father would rather lose his daughter than his honour': {
    why: "When Hero is shamed in Much Ado, her father Leonato cries 'Do not live, Hero; do not ope thine eyes' (Act 4 Scene 1). When Juliet refuses Paris in Romeo and Juliet, Capulet tells her to 'hang, beg, starve, die in the streets', for he will never acknowledge her again (Act 3 Scene 5).",
    more: "Prospero in The Tempest tells Miranda 'I have done nothing but in care of thee' (Act 1 Scene 2). Birling in An Inspector Calls fears scandal but never turns on Sheila, and Jane Eyre has no father.",
    tip: "Link honour to context: a daughter's chastity and obedience were her family's public honour, so a father's rage shows what he valued most.",
  },
  'A woman refuses to marry a man she does not love, despite heavy pressure': {
    why: "In Romeo and Juliet, Juliet refuses to marry Paris, though her father threatens to throw her into the streets. In Jane Eyre, Jane refuses St John, though he presses her hard and insists 'God and nature intended you for a missionary's wife' (Chapter 34).",
    more: 'Miranda in The Tempest gladly accepts Ferdinand, and Elizabeth in Frankenstein happily marries Victor. Lady Macbeth is already married when the play begins.',
    tip: 'Refusal shows independence: quote the refusal and the pressure against it, and say what the woman risks.',
  },
  'Organised religion is shown as a tool of those in power': {
    why: "In Animal Farm the pigs let Moses the raven stay, preaching Sugarcandy Mountain, with 'a gill of beer a day' (Chapter 9). In London 'Every black'ning church appalls' among the suffering it does nothing to stop (stanza 3). In Jane Eyre Brocklehurst uses religion to starve and shame the charity girls.",
    more: 'War Photographer borrows the language of church and priest to give the dead dignity, not power to anyone, and Tissue finds family history in the pages of the Koran.',
    tip: 'Separate faith from the institutions that use it: most of these writers attack the second, not the first.',
  },
  'Religious words give dignity to someone who has died': {
    why: "War Photographer turns the darkroom into a church and quotes the Bible: 'All flesh is grass' (stanza 1). Helen Burns's grave in Jane Eyre bears the Latin word 'Resurgam' (Chapter 9), meaning she will rise again. In Great Expectations, as Magwitch dies, Pip prays 'O Lord, be merciful to him a sinner' (Chapter 56).",
    more: "In Animal Farm Squealer's lies about Boxer's death are no tribute, and the pigs' memorial banquet is a fraud. London names the church, but gives no one dignity in death.",
    tip: 'Religious language can comfort or protest: ask whether the words honour the dead or accuse the living who let them die.',
  },
  'Love is presented as a kind of worship': {
    why: "In Romeo and Juliet's shared sonnet, Juliet's hand is a 'holy shrine' and Romeo's lips 'two blushing pilgrims' (Act 1 Scene 5). In Jane Eyre, as the wedding nears, Jane admits 'I could not, in those days, see God for His creature: of whom I had made an idol' (Chapter 24).",
    more: "Much Ado's lovers fight with wit rather than worship. In An Inspector Calls love is a matter of engagement rings and affairs, and Macbeth's marriage is a partnership in murder.",
    tip: "Religious imagery raises love's stakes: in Jane Eyre it is a warning, since putting a person in God's place is a danger Jane must escape.",
  },
  'A character pushes the blame for a death onto someone else': {
    why: "In Macbeth, Lady Macbeth smears the sleeping grooms with Duncan's blood so that they will be blamed (Act 2 Scene 2). In An Inspector Calls Mrs Birling blames the child's father: 'Go and look for the father of the child' (Act 2). In Frankenstein the creature plants the portrait on Justine, who is executed for William's murder.",
    more: 'Ozymandias, London and War Photographer show suffering and death, but no one in them shifts the blame for a death onto another.',
    tip: 'Shifting blame is a sign of guilt, not innocence: say what the attempt reveals about the character, and how the text exposes it.',
  },
  'Guilt comes to light when a character is questioned or overheard': {
    why: "In Macbeth a doctor and a gentlewoman overhear Lady Macbeth, walking in her sleep, relive the murders: 'Yet who would have thought the old man to have had so much blood in him?' (Act 5 Scene 1). In An Inspector Calls the Inspector's questions draw a confession from each Birling in turn.",
    more: "Ozymandias, London and War Photographer contain no confession at all: their speakers accuse a tyrant, a city and a newspaper's readers.",
    tip: 'Ask who hears the confession and why it matters: a doctor in Macbeth, the whole family and the audience in An Inspector Calls.',
  },
  'A father fails to understand his own child': {
    why: "In An Inspector Calls Eric tells Birling 'you're not the kind of father a chap could go to' (Act 3). In Romeo and Juliet Capulet, who does not know that Juliet is already married, calls her 'young baggage, disobedient wretch' for refusing Paris (Act 3 Scene 5).",
    more: "In Macbeth, Banquo dies saving his son, 'Fly, good Fleance' (Act 3 Scene 3), and Macduff mourns 'All my pretty ones' (Act 4 Scene 3). Ozymandias and War Photographer have no father and child at their centre.",
    tip: 'Look at what the father says, and what he never asks: both plays expose a parent who talks at a child instead of listening.',
  },
  'A character is killed in revenge for a killing': {
    why: "In Romeo and Juliet, Romeo kills Tybalt to avenge Mercutio: 'fire-ey'd fury be my conduct now' (Act 3 Scene 1). In Macbeth, Macduff hunts Macbeth to avenge his murdered wife and children, and kills him in the final battle (Act 5 Scene 8).",
    more: "An Inspector Calls holds no revenge for Eva's death, and Ozymandias, London and War Photographer show no act of revenge.",
    tip: "Revenge keeps violence moving: ask whether the writer presents it as justice, as in Macduff's case, or as a trap, as in Romeo's.",
  },
  'Innocence is destroyed by those who should protect it': {
    why: "In Macbeth a host murders the sleeping king who is his guest and kinsman, and later has Macduff's children killed. In Great Expectations Miss Havisham, who adopted Estella, raises her to break men's hearts. In London church and palace look on while 'the chimney-sweeper's cry' rises and a newborn is blighted (stanzas 3 and 4).",
    more: "Ozymandias is about a tyrant's pride and Tissue about the fragility of what people make: neither is about innocence betrayed.",
    tip: "Name the betrayed duty, a host's, a mother's, a church's, and say why the betrayal makes the cruelty worse.",
  },
  "A character's goodness is worn away step by step": {
    why: "In Macbeth a brave soldier becomes, murder by murder, the 'dead butcher' of the last scene (Act 5 Scene 8). In A Christmas Carol the first spirit shows young Scrooge hardening until Belle says 'Another idol has displaced me' (Stave 2). In Lord of the Flies Jack, who at first cannot bring himself to kill a piglet, ends hunting Ralph.",
    more: "Much Ado's characters are tricked, not slowly corrupted, and the trick is undone within days. Romeo acts rashly but is never slowly corrupted, and Ozymandias shows only a ruin, not a decline.",
    tip: 'Track the decline with three quotations, early, middle and late, and comment on how gradual each writer makes it.',
  },
  'Haste is shown to be dangerous: characters act before they think': {
    why: "In Romeo and Juliet, Juliet fears their vows are 'too rash, too unadvis'd, too sudden' (Act 2 Scene 2), and the lovers marry the next day. In Macbeth, Macbeth decides that 'The very firstlings of my heart shall be / The firstlings of my hand' (Act 4 Scene 1), and has Macduff's family killed at once.",
    more: 'Great Expectations shows mistakes made slowly, over years, and Ozymandias and War Photographer are not about hasty choices.',
    tip: 'Show how the writer speeds things up, short scenes or a sudden decision, and say what the speed costs the characters.',
  },
  'A writer warns that injustice will end in bloodshed if nothing changes': {
    why: "In An Inspector Calls the Inspector warns that people who will not learn responsibility will be taught it through suffering, and the 1945 audience knew that two world wars had followed 1912. In London 'the hapless soldier's sigh / Runs in blood down palace walls' (stanza 3), written as revolution shook France.",
    more: 'Great Expectations criticises the law but warns of no uprising. Ozymandias shows a tyrant already fallen to time, and War Photographer shows wars that have already happened.',
    tip: 'Read a warning through its date: 1912 seen from 1945, and London published in 1794. The context shows what the warning means.',
  },
  'Love is presented as painful and destructive': {
    why: "In Romeo and Juliet Friar Lawrence warns that 'These violent delights have violent ends' (Act 2 Scene 6), and the lovers' passion ends in death. In Great Expectations Pip loves Estella 'against reason, against promise, against peace, against hope, against happiness' (Chapter 29).",
    more: 'Ozymandias, War Photographer and Tissue are not love poems: they deal with power, war and the fragility of what people make.',
    tip: "Analyse the language of pain in love, such as Dickens's repeated 'against', and say what it suggests about the lover.",
  },
  'Love is tested by a deliberate trick before it is allowed to succeed': {
    why: "In Jane Eyre, Rochester admits 'I feigned courtship of Miss Ingram', knowing 'jealousy would be the best ally' (Chapter 24), and he questions Jane disguised as a gypsy. In The Tempest Prospero treats Ferdinand harshly so that 'too light winning' does not 'Make the prize light' (Act 1 Scene 2).",
    more: "Romeo and Juliet's love is never tested by a trick: it is rushed. Pip's love for Estella is tested only by her coldness, and Ozymandias and War Photographer are not about love.",
    tip: "Ask whether the test is fair: Prospero's seems kindly meant, while Rochester's toys with Jane's feelings.",
  },
  'A wedding takes place quietly or in secret, with hardly any witnesses': {
    why: "In Romeo and Juliet the lovers marry in secret in Friar Lawrence's cell, with only the Friar there (Act 2 Scene 6). Jane Eyre's last chapter begins 'Reader, I married him. A quiet wedding we had: he and I, the parson and clerk, were alone present' (Chapter 38).",
    more: "Much Ado's weddings are held in church before the whole household. The Tempest's marriage is still to come in Naples, and Macbeth has no wedding.",
    tip: 'A quiet wedding contrasts with a public one: compare what each couple is escaping, a family feud or a public disgrace.',
  },
  "A character's loneliness is eased by an unexpected friendship": {
    why: "In Jane Eyre, Helen Burns befriends the lonely new girl at Lowood, and comforts her after Brocklehurst shames her before the school (Chapter 8). In Frankenstein, Walton, who writes 'I have no friend, Margaret' (Letter 2), finds in the half-frozen stranger Victor one he would have loved 'as the brother of my heart' (Letter 4).",
    more: "Ozymandias's king stands alone in the desert, London's speaker walks alone among strangers, and the war photographer ends the poem alone on a plane.",
    tip: 'Friendship shows what isolation lacked: quote the moment it begins, and say what it gives the lonely character.',
  },
  'Faith gives a character the courage to face death calmly': {
    why: "In Jane Eyre the dying Helen Burns tells Jane 'I believe; I have faith: I am going to God' (Chapter 9). In Frankenstein Justine, condemned for a murder she did not commit, says 'God raises my weakness, and gives me courage to endure the worst' (Chapter 8).",
    more: 'Romeo and Juliet die in despair, not faith, and Ozymandias and Tissue show no one facing death at all.',
    tip: 'Contrast calm faith with terror or despair elsewhere in the text, and ask whether the writer admires the calm or questions it.',
  },
  'A character proves they have changed by caring for someone they once wronged': {
    why: "In A Christmas Carol Scrooge raises the salary of the clerk he bullied and becomes 'a second father' to Tiny Tim (Stave 5). In Great Expectations Pip, once disgusted by Magwitch, visits him daily in the prison infirmary and holds his hand as he dies (Chapter 56).",
    more: 'In An Inspector Calls it is too late to care for Eva, and the older Birlings would not anyway. In Jane Eyre it is Jane who cares for Rochester, and Macbeth never changes.',
    tip: 'Actions prove change better than words: quote what the character does for the person, not only what they say.',
  },
  'Goodness is shown in kindness to those who cannot repay it': {
    why: 'In Lord of the Flies Simon helps the littluns reach fruit they cannot pick for themselves (Chapter 3). In Frankenstein the creature secretly gathers firewood for the poor De Laceys, and saves a girl from a river, only to be shot for it (Chapter 16).',
    more: 'Ozymandias, War Photographer and Tissue show no act of kindness at all.',
    tip: "Kindness that is never rewarded shows a writer's view of the world: ask why Golding and Shelley let their kindest characters suffer.",
  },
  'A character tries to become someone else and loses who they were': {
    why: "In Jekyll and Hyde, Jekyll admits 'I was slowly losing hold of my original and better self' (Chapter 10). In Great Expectations Pip, turning himself into a London gentleman, loses the honest boy of the forge until hardship gives him back his old loyalties.",
    more: "Jane Eyre holds on to herself under every pressure: 'I care for myself' (Chapter 27). Tissue and War Photographer are not about a character remaking themselves.",
    tip: 'Compare the before and after with a quotation for each, and say whether the lost self can be recovered.',
  },
  'A child stands for a whole class of suffering people': {
    why: "In A Christmas Carol the spirit shows two wretched children, Ignorance and Want, and tells Scrooge 'They are Man's' (Stave 3): they stand for all neglected poor children. In London one 'chimney-sweeper' and one 'new-born infant' stand for every child the city fails (stanzas 3 and 4).",
    more: "Eva Smith in An Inspector Calls stands for exploited workers, but she is a young woman, not a child. Animal Farm's sufferers are animals, and Jane Eyre's childhood is her own story, not a symbol.",
    tip: 'When one figure stands for many, say so, and explain why a child makes the point so hard to ignore.',
  },
  'A dead ruler is remembered with contempt': {
    why: "In Macbeth the dead king's last description is Malcolm's 'this dead butcher, and his fiend-like queen' (Act 5 Scene 8). In Ozymandias the sculptor carved the king's 'sneer of cold command' (line 5), and 'The hand that mocked them' (line 8) outlasts him.",
    more: "No ruler's memory is judged in An Inspector Calls or Romeo and Juliet, and London and War Photographer judge institutions and readers, not a dead ruler.",
    tip: "How a ruler is remembered is the writer's verdict: quote the final judgement and say whose voice gives it.",
  },
  'Sleep is presented as an image of death': {
    why: "In Macbeth, Lady Macbeth says 'The sleeping and the dead / Are but as pictures' (Act 2 Scene 2). In Romeo and Juliet the Friar's potion gives Juliet a 'borrow'd likeness of shrunk death' (Act 4 Scene 1). In The Tempest Prospero says 'our little life / Is rounded with a sleep' (Act 4 Scene 1).",
    more: "Jekyll and Hyde, An Inspector Calls and Much Ado use no such image: even Hero's pretended death in Much Ado is a plot, not a picture of sleep.",
    tip: "One image can carry different moods: Lady Macbeth's is chilling, the Friar's hopeful, Prospero's calm. Compare the tone of each.",
  },
  'A character glimpses their own death before it comes': {
    why: "In A Christmas Carol the last spirit points Scrooge to a neglected grave, and he reads his own name on the stone (Stave 4). In Romeo and Juliet, Romeo dreams 'my lady came and found me dead' (Act 5 Scene 1), just before he hears the news that sends him to the tomb.",
    more: "Juliet foresees Romeo's death, not her own. Jane Eyre and the characters of An Inspector Calls and Much Ado have no such vision of their own end.",
    tip: "A glimpse of death can warn or doom: Scrooge uses his to change, while Romeo's comes true.",
  },
  'A character falls in love with someone from an enemy family': {
    why: "In Romeo and Juliet, Juliet learns at the feast that Romeo is a Montague: 'My only love sprung from my only hate' (Act 1 Scene 5). In The Tempest Miranda falls in love with Ferdinand, son of King Alonso, who helped to overthrow her father, and Prospero uses their love to reconcile the two families.",
    more: "Much Ado's couples come from friendly households, and Jane and Rochester, or Pip and Estella, are not divided by a feud. An Inspector Calls has no lovers from enemy families.",
    tip: 'Love across a divide raises the stakes: say what each writer suggests love can heal, and what it cannot.',
  },
  "Guilt shows in a character's fear of being found out": {
    why: "After the murder Macbeth starts at the knocking: 'How is't with me, when every noise appals me?' (Act 2 Scene 2). In Great Expectations young Pip, who has stolen food for the convict, 'ran for my life' from the Christmas table and straight into soldiers holding out handcuffs, sure they had come for him (Chapter 4).",
    more: 'Scrooge has nothing to hide, only things to change, and the war photographer fears no discovery. Ozymandias holds no guilty secret.',
    tip: 'Fear of discovery shows a working conscience: quote the moment of panic and say what it reveals the character knows.',
  },
  'The law is shown to be harsh on the poor': {
    why: "In Great Expectations Magwitch, who spent his childhood 'In jail and out of jail' (Chapter 42), is sentenced to death among 'two-and-thirty men and women' at once (Chapter 56). In A Christmas Carol Scrooge answers a plea for the poor with 'Are there no prisons?' (Stave 1), words a spirit later throws back at him.",
    more: "Jane Eyre suffers from cruel people, not from the law. The Tempest's justice is Prospero's mercy, and Macbeth's tyranny is ended by soldiers, not courts.",
    tip: 'Link this to context: Victorian readers knew the workhouse and the gallows, and Dickens wanted them to see the poor behind the law.',
  },
  "Words from the Bible give a writer's protest its authority": {
    why: "War Photographer ends its first stanza with Isaiah's 'All flesh is grass' (stanza 1), setting the dead of three wars inside the Bible's warning that every life withers. In An Inspector Calls the Inspector's 'We are members of one body' (Act 3) echoes St Paul, giving his lesson a preacher's authority.",
    more: "Tissue mentions the Koran's pages but quotes nothing from them, and Macbeth and Romeo and Juliet are tragedies, not protests.",
    tip: "Name the allusion and its source, then explain why a writer would borrow scripture's authority for a modern argument.",
  },
  'A character dies of grief': {
    why: "In Romeo and Juliet, Montague tells the Prince that his wife has died: 'Grief of my son's exile hath stopp'd her breath' (Act 5 Scene 3). In Frankenstein Victor's father, broken by the deaths of William, Justine and Elizabeth, takes to his bed, 'and in a few days he died in my arms' (Chapter 23).",
    more: 'No one in A Christmas Carol dies of grief, and Tiny Tim lives. In Great Expectations Miss Havisham dies of her burns and Magwitch of his injuries, and no one dies in The Tempest.',
    tip: 'Deaths from grief widen a tragedy: say how they show the harm spreading beyond the main characters.',
  },
  'A character makes a promise to a supernatural being': {
    why: "In The Tempest Prospero promises Ariel freedom: 'after two days / I will discharge thee' (Act 1 Scene 2), and keeps his word. In A Christmas Carol Scrooge kneels before the last spirit and promises 'I will honour Christmas in my heart, and try to keep it all the year' (Stave 4).",
    more: 'Macbeth makes no bargain with the witches: he simply acts on what they say. Jekyll and Hyde and Much Ado have no supernatural beings to promise anything to.',
    tip: 'A promise binds the future: check whether the character keeps it, and what keeping it shows about them.',
  },
  'A spirit is presented as gentle or childlike, not frightening': {
    why: "In A Christmas Carol the Ghost of Christmas Past is 'like a child: yet not so like a child as like an old man' (Stave 2), and the Ghost of Christmas Present is a jolly giant. In The Tempest the spirit Ariel asks Prospero 'Do you love me, master? no?' (Act 4 Scene 1).",
    more: 'Jekyll and Hyde, Frankenstein, Much Ado and Ozymandias have no spirits at all.',
    tip: 'A gentle spirit changes what the supernatural is for: it teaches or serves, rather than terrifies. Say which it does.',
  },
  'A scene is staged on purpose to fool or move the characters watching it': {
    why: "In Much Ado friends stage overheard conversations so that Benedick and Beatrice will each believe the other is in love, and Borachio stages a scene at Hero's window to fool Claudio. In The Tempest Prospero's spirits stage a vanishing banquet for his enemies (Act 3 Scene 3) and a masque of goddesses for the lovers (Act 4 Scene 1).",
    more: 'Ozymandias, London and Tissue tell of what their speakers see or imagine, and stage no scene for anyone.',
    tip: 'A play within a play makes the audience think about watching: say what the staged scene reveals about the people watching it.',
  },
  'Important events take place on Christmas Eve or Christmas Day': {
    why: "In A Christmas Carol the spirits come on Christmas Eve, and Scrooge wakes a changed man on Christmas morning (Stave 5). In Great Expectations Pip steals food for the convict at dawn on Christmas Day, and soldiers interrupt the forge's Christmas dinner to hunt the escaped men (Chapters 2 to 5).",
    more: 'An Inspector Calls is set on a spring evening in 1912, and Romeo and Juliet in a hot Verona summer. Macbeth and Frankenstein give Christmas no part in their stories.',
    tip: 'Ask why Dickens chooses Christmas: a feast of family and charity makes selfishness and cruelty stand out.',
  },
  'A deception is used for a good purpose': {
    why: "In The Tempest Prospero's illusions bring Alonso to repentance and his daughter a husband. In Much Ado the Friar has Hero reported dead to restore her name, and friends trick Beatrice and Benedick into love. In Great Expectations Pip secretly pays for Herbert's partnership, and Herbert learns who helped him only years later (Chapter 58).",
    more: "In Jekyll and Hyde deception hides Hyde's crimes, and Ozymandias and War Photographer deceive no one.",
    tip: 'Judge each deception by its purpose and result: a writer can show a lie healing as well as harming.',
  },
  'A woman speaks out against how men treat women': {
    why: "Jane Eyre tells the reader that 'women feel just as men feel' and should not be confined to 'making puddings and knitting stockings' (Chapter 12). In Much Ado Beatrice, furious at Hero's treatment, cries that 'manhood is melted into curtsies, valour into compliment' (Act 4 Scene 1).",
    more: 'Miranda in The Tempest never speaks about how men treat women, and Ozymandias, War Photographer and Tissue hold no woman who speaks out.',
    tip: "Set the speech in its time: a woman's protest in 1599 or 1847 was daring. Say what it risks and whether anyone listens.",
  },
  'A detective figure pieces the truth together from clues': {
    why: "In An Inspector Calls Inspector Goole questions each Birling in turn, with a photograph and a diary, to piece together Eva's last two years. In Jekyll and Hyde, Utterson resolves 'If he be Mr. Hyde... I shall be Mr. Seek' (Chapter 2), and follows the clues from the door to the will and the broken cane.",
    more: "In Macbeth the thanes suspect the truth, but no one investigates it. The Tempest's truths come out through magic, and Ozymandias holds no mystery to solve.",
    tip: 'The detective form controls what the audience knows: say how the investigation builds suspense, one clue at a time.',
  },
}
