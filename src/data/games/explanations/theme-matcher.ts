import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Theme Matcher: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/theme-matcher.ts). Written with AI on 16 October 2026
 * and checked against each theme and every text it is counted in, as the founder
 * decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Social inequality': {
    why: "A Christmas Carol sets the poor Cratchits beside rich, mean Scrooge. In An Inspector Calls the Birlings profit from workers like Eva Smith. Great Expectations judges people by class and money. London shows the poor crushed by church and palace. Animal Farm's pigs become a privileged ruling class, and Jane Eyre is a poor dependent despised by the rich Reeds.",
    more: 'An Inspector Calls and A Christmas Carol make a strong pair: in both, a strange visitor forces a rich man to face his duty to the poor.',
    tip: "Link inequality to each writer's context: Dickens and the harsh 1834 Poor Law, Priestley and hopes for a fairer Britain after 1945, Orwell and the Soviet Union.",
  },
  Ambition: {
    why: "Macbeth murders his way to the throne, driven by 'vaulting ambition'. In Ozymandias a king's boastful statue lies broken in the desert. In Great Expectations Pip's ambition to be a gentleman makes him ashamed of Joe. In Frankenstein Victor's ambition to create life destroys almost everyone he loves.",
    more: 'In each text ambition is punished: Macbeth dies, the statue crumbles, Pip loses his fortune and Victor dies pursuing his creature. Ambition turns dangerous when it overrides conscience and love.',
    tip: 'Compare how each writer judges ambition. Is it always wrong, or only when it hurts others? Frankenstein and Macbeth make a strong pair.',
  },
  Redemption: {
    why: 'In A Christmas Carol the three spirits turn Scrooge from a miser into a generous man. In Great Expectations Pip learns to value Joe and Magwitch, whom he once looked down on. In The Tempest Prospero forgives his enemies, Alonso repents, and even Caliban promises to seek grace.',
    more: 'Redemption usually follows suffering or a shock: Scrooge sees his own grave, Pip loses his expectations, and Alonso believes his son has drowned.',
    tip: "When writing about redemption, find the turning point and the evidence of change, such as Scrooge's generosity on Christmas morning.",
  },
  'Good vs Evil': {
    why: 'In Jekyll and Hyde a respected doctor sets free his own evil side as Hyde. Macbeth sets the witches and a murderous tyrant against good kings like Duncan. Lord of the Flies shows evil inside ordinary boys. In Frankenstein the creature begins good and turns to evil when he is rejected.',
    more: 'Each text asks where evil comes from: the supernatural, human nature or society. Golding and Stevenson suggest it lies within everyone; Mary Shelley suggests that cruelty creates it.',
    tip: 'Avoid treating characters as simply good or evil. Answers that show how the writers blur the line are the strongest.',
  },
  'Love and relationships': {
    why: "Romeo and Juliet's love defies their families' feud. Much Ado contrasts Claudio and Hero with the witty Beatrice and Benedick. Jane Eyre loves Rochester but leaves rather than lose her self-respect. In Great Expectations Pip loves the cold Estella. In The Tempest Ferdinand and Miranda fall in love at first sight.",
    more: 'Love is rarely easy in these texts. Feuds, lies, class and pride stand in the way, and the writers use those obstacles to explore what real love needs.',
    tip: "Compare different kinds of love: romantic, family and unreturned. Prospero and Miranda's bond as father and daughter works well beside Romeo and Juliet.",
  },
  'Power and control': {
    why: "Macbeth kills for the crown. Napoleon rules Animal Farm by terror. In An Inspector Calls Birling abuses an employer's power. Ozymandias mocks a fallen tyrant. Prospero rules The Tempest's island by magic. Jack seizes control in Lord of the Flies. London shows church and palace crushing the poor. In Much Ado, men decide Hero's fate. Tissue finds human power paper-thin.",
    more: 'Most of these texts show power corrupting the people who hold it, or crumbling with time. Ozymandias and Tissue make an especially good pair: both suggest that human power does not last.',
    tip: "Ask how each writer judges power: who holds it, how they use it and what it costs. Link it to context, such as Orwell's satire of Stalin.",
  },
  'Guilt and conscience': {
    why: "The Macbeths are tormented by guilt after Duncan's murder. An Inspector Calls makes each Birling face their part in Eva's death. The spirits awaken Scrooge's conscience in A Christmas Carol. War Photographer sets a troubled photographer against readers who soon forget. Pip feels guilty about the convict and Joe in Great Expectations, and Jane Eyre's conscience makes her leave Rochester.",
    more: "Guilt often shows itself in the body: Lady Macbeth sleepwalks and rubs her hands, and the photographer's hands seem to shake. Writers use guilt to show that a character still has a moral sense.",
    tip: 'Separate guilt from responsibility: some characters feel guilty and change, like Sheila and Scrooge, while others refuse to, like Mr and Mrs Birling.',
  },
  'The supernatural': {
    why: "Macbeth has witches, prophecies and Banquo's ghost. A Christmas Carol is a ghost story with Marley and three spirits. The Tempest runs on Prospero's magic and the spirit Ariel. Jekyll's potion transforms him beyond nature, and Frankenstein brings the dead to life, both told as Gothic horror. Jane Eyre has the red room and a voice calling across the moors.",
    more: 'In Jekyll and Hyde and Frankenstein the terrifying change comes from science, not magic, so the supernatural blurs into the Gothic. Ask whether each writer wants us to believe in it.',
    tip: 'Explain what the supernatural does in each text: creating fear, tempting a character, or teaching a moral lesson, as the spirits do for Scrooge.',
  },
  'Isolation and loneliness': {
    why: "Frankenstein's creature is rejected by everyone, and Victor cuts himself off to work. Jane Eyre is a lonely, unloved child at Gateshead. Jekyll shuts himself away to hide his secret. The war photographer works alone in his darkroom. Scrooge is 'solitary as an oyster' in A Christmas Carol.",
    more: "Isolation is sometimes chosen, like Victor's and Jekyll's, and sometimes forced, like the creature's. In A Christmas Carol it can be cured: Scrooge rejoins his family and his community.",
    tip: 'Compare chosen and forced isolation, and ask what each writer suggests people need from one another.',
  },
  'Conflict and violence': {
    why: "Romeo and Juliet opens with a brawl, and the feud kills Mercutio and Tybalt. Macbeth is full of battles and murders. In Lord of the Flies the boys kill Simon and Piggy. Animal Farm has the Battle of the Cowshed and Napoleon's executions. War Photographer records war's suffering, and in Jekyll and Hyde, Hyde tramples a child and murders Carew.",
    more: "Violence usually spreads, one act leading to the next, as in the feud, Macbeth's murders and the boys' hunts. The writers often show violence damaging the people who commit it.",
    tip: 'Explore causes as well as events: pride, fear, ambition or power. Analyse the language of violence, such as the blood imagery in Macbeth.',
  },
  'Appearance vs Reality': {
    why: "In Macbeth a loyal host is secretly a murderer. Respectable Dr Jekyll hides Hyde. Much Ado turns on tricks, disguises and Hero's false disgrace. In An Inspector Calls a respectable family hides its cruelty. Pip mistakes who his secret benefactor is in Great Expectations, and in The Tempest Prospero's magic creates illusions.",
    more: 'Many texts use disguise or deceptive words, and the truth often comes out late. Watch for dramatic irony, where the audience knows more than the characters.',
    tip: "Find a moment where the mask slips, such as Lady Macbeth's sleepwalking or Jekyll's final statement, and analyse what it reveals.",
  },
  'Family and duty': {
    why: 'In Romeo and Juliet, Juliet is expected to obey her father and marry Paris. An Inspector Calls exposes a family that fails each other and its duty to others. A Christmas Carol celebrates the loving Cratchits and Fred. In Great Expectations Joe is a loyal father figure, while Pip neglects his duty to him.',
    more: "Duty to family often clashes with personal desire, as Juliet's love clashes with her father's wishes. Some texts widen the idea: the Inspector argues that our duty reaches beyond our own family.",
    tip: 'Contrast families that care for each other, like the Cratchits, with families that fail, like the Birlings.',
  },
  'Justice and morality': {
    why: "The Inspector judges the Birlings' morals in An Inspector Calls. Animal Farm shows a revolution's ideals of fairness betrayed. A Christmas Carol teaches Scrooge his moral duty to the poor. Prospero chooses mercy over revenge in The Tempest. Great Expectations shows courts treating a gentleman criminal more kindly, and Jane Eyre tests Christian morality against hypocrisy.",
    more: "These texts ask whether justice comes from the law, from society or from a person's own conscience. Often the law fails, and the moral judgement is left to the reader.",
    tip: 'Decide what each writer thinks a just society or a good person looks like, and support your view with a quotation.',
  },
  'Identity and self-discovery': {
    why: "Jekyll discovers that his identity is divided between two selves. Jane Eyre grows from an unloved orphan into an independent woman. In Great Expectations Pip learns who he really is and who truly helped him. Frankenstein's creature asks who and what he is. Tissue shows identity written in fragile paper records, from maps to family names.",
    more: "Self-discovery usually comes through hardship: Pip's lost fortune, Jane's flight from Thornfield, Jekyll's loss of control. The texts ask whether identity is fixed or made by experience.",
    tip: "Track a character's change with one quotation from early in the text and one from late, and explain what they have discovered about themselves.",
  },
  'Nature and the environment': {
    why: "Frankenstein's sublime mountains comfort and dwarf Victor. The boys' island paradise in Lord of the Flies ends in flames. In The Tempest Prospero's magic raises a storm on a wild island. In London even the river is owned and controlled. Ozymandias's desert outlasts a king. In Macbeth nature rebels against Duncan's murder, and Tissue sets sunlight against human borders.",
    more: 'Nature is often stronger than people, or reflects what they do, as when darkness and storms follow the murder in Macbeth. Romantic writers such as Mary and Percy Shelley saw nature as sublime: greater than any human power.',
    tip: 'Use setting and pathetic fallacy as evidence: explain how the natural world reflects or judges human actions.',
  },
  'Corruption of innocence': {
    why: "In Lord of the Flies ordinary schoolboys become killers. Macbeth turns from loyal hero to murderer of innocents, including Macduff's children. A Christmas Carol shows young Scrooge hardened by greed. Estella is raised to break hearts in Great Expectations. London shows child chimney sweeps and a newborn baby already cursed, and Frankenstein's creature is innocent until rejection corrupts him.",
    more: "Innocence is usually lost through adults or society: the war that strands the boys, Miss Havisham's bitterness, the city's institutions. The writers suggest that innocence needs protecting.",
    tip: "Pick a moment where innocence is lost, such as Ralph's tears at the end of Lord of the Flies, and analyse its language.",
  },
  'Fate vs Free will': {
    why: "Romeo and Juliet are 'star-cross'd lovers', doomed by fate from the Prologue, yet their own hasty choices bring about their deaths. In Macbeth the witches prophesy that Macbeth will be king, but he chooses to commit murder to make it happen.",
    more: 'Both plays leave the balance open. Would Macbeth have killed Duncan without the witches? Would the lovers have died without the feud and some very bad luck?',
    tip: 'Weigh both sides in an answer: show what fate or prophecy sets up, and what the characters choose to do.',
  },
  'Revolution and rebellion': {
    why: "Animal Farm is a revolution against Mr Jones that ends in a new tyranny. An Inspector Calls shows Eva leading a strike, and Sheila and Eric rebelling against their parents' values. London protests against church, monarchy and state. In The Tempest Caliban rebels against Prospero, and Antonio once overthrew his own brother.",
    more: 'Rebellion can bring hope or disaster: Animal Farm shows a revolution betrayed, while Priestley hopes the young will build a fairer society. Blake wrote London in the years of the French Revolution.',
    tip: 'Link rebellion to context: the Russian Revolution for Animal Farm, the French Revolution for London, and 1945 for An Inspector Calls.',
  },
  'Memory and the past': {
    why: "In A Christmas Carol the Ghost of Christmas Past shows Scrooge his lonely childhood and lost love. The war photographer's pictures bring back what he saw. Ozymandias's broken statue is all that remains of a king's glory. Great Expectations is told by an older Pip looking back, and Miss Havisham's stopped clocks freeze the past. Tissue's paper holds family histories.",
    more: 'The past can haunt, as it does the photographer, or teach, as it teaches Scrooge. Ozymandias and Tissue suggest that time wears away human achievements, leaving only fragments.',
    tip: 'Notice how structure handles the past: the visions in A Christmas Carol, the older narrator in Great Expectations, the memories in War Photographer.',
  },
  'Science and responsibility': {
    why: "In Frankenstein Victor creates life and then abandons his creature, refusing responsibility for what he has made. In Jekyll and Hyde Jekyll's potion releases Hyde, and he cannot control the results of his own experiment.",
    more: 'Both are Gothic warnings about science pursued without conscience, written as science advanced quickly in the 1800s. Both scientists also hide their work from their friends.',
    tip: "Compare the two scientists' motives: Victor's ambition and Jekyll's wish to separate his good and evil sides. Link each to its century's fears about science.",
  },
}
