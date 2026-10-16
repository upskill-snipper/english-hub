import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Quote Detective: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/quote-detective.ts). Written with AI on 16 October
 * 2026 and checked against each quotation, its speaker and its place in the text,
 * as the founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Is this a dagger which I see before me, the handle toward my hand?': {
    why: 'Macbeth says this in Act 2 Scene 1, alone at night, moments before he murders King Duncan. He sees a dagger hanging in the air with its handle offered to him, as if inviting him to kill. A vision of a weapon before a royal murder points to Macbeth.',
    more: "Macbeth cannot tell whether the dagger is real or 'a dagger of the mind'. It may be a supernatural sign or his own guilty imagination, so the audience is left unsure how far he is driven and how far he chooses.",
    tip: 'Use it for the supernatural or for guilt. The question form shows his uncertainty: is the vision real, or is his mind already guilty before the murder?',
  },
  "Out, out, brief candle! Life's but a walking shadow.": {
    why: 'Macbeth says this in Act 5 Scene 5, just after hearing that Lady Macbeth is dead. The candle is a metaphor for a short human life that can be snuffed out at any moment. This despair about life itself belongs to Macbeth near his end.',
    more: "Life has become meaningless to the man who killed to gain everything. A shadow has no substance, and 'walking shadow' also suggests an actor, so life is only a hollow performance.",
    tip: 'Contrast this hopeless Macbeth with the brave warrior of Act 1 to show how far he has fallen, and link the change to the cost of his ambition.',
  },
  "Look like the innocent flower, but be the serpent under't.": {
    why: "Lady Macbeth says this to Macbeth in Act 1 Scene 5, as they plan Duncan's murder. She tells him to look welcoming while hiding his deadly purpose. The serpent recalls the Devil in the Garden of Eden, hiding beneath something beautiful.",
    more: "The line sums up appearance against reality, a key theme of Macbeth. Macbeth echoes the idea at the end of Act 1: 'False face must hide what the false heart doth know.'",
    tip: "Analyse the contrast between 'flower' and 'serpent': innocence on the surface, danger underneath. It also shows Lady Macbeth taking charge of the plan.",
  },
  "Will all great Neptune's ocean wash this blood clean from my hand?": {
    why: 'Macbeth says this in Act 2 Scene 2, straight after murdering Duncan. Neptune is the Roman god of the sea, so he asks whether a whole ocean could wash the blood, and the guilt, from his hands.',
    more: 'He answers that his hand would rather turn the green sea red. Lady Macbeth claims that a little water will clear them, yet in Act 5 she sleepwalks, trying to wash away blood that only she can see.',
    tip: "Use it for guilt, and link it to the blood imagery that runs through the play, especially Lady Macbeth's sleepwalking.",
  },
  'Fair is foul, and foul is fair.': {
    why: 'The three witches chant this together in Act 1 Scene 1, the very first scene of Macbeth. The paradox says that what seems good is bad and what seems bad is good: a warning that nothing in this play will be what it seems.',
    more: "Macbeth's first words in the play, 'So foul and fair a day I have not seen', echo the witches before he has even met them, hinting that he is already linked to them.",
    tip: 'Quote it for appearance and reality or the supernatural. The reversed word order (a chiasmus) creates a world turned upside down.',
  },
  'We are members of one body. We are responsible for each other.': {
    why: "The Inspector says this in his final speech in Act 3, just before he leaves the Birlings' house. It is the play's central message about social responsibility, the lesson Priestley wanted his audience to take home.",
    more: "'One body' compares society to a single body: if one part suffers, the whole body suffers. It answers Mr Birling's claim in Act 1 that a man need only look after himself and his family.",
    tip: "Use it as the clearest statement of Priestley's socialist message, and contrast it with Birling's selfish view of society.",
  },
  'They will be taught it in fire and blood and anguish.': {
    why: 'The Inspector says this near the end of his final speech in Act 3, just before he leaves. He warns that if people will not learn to care for one another, they will be taught that lesson through suffering.',
    more: 'The play is set in 1912 but was first staged in 1945, so its first audiences knew that two world wars had followed. The warning reads like a prophecy that came true.',
    tip: "Analyse the list 'fire and blood and anguish': the repeated 'and' (polysyndeton) piles up the suffering. Link it to the two world wars.",
  },
  "The young ones. They're more impressionable.": {
    why: 'The Inspector says this in Act 2, when Mrs Birling complains that he has had a strong effect on Sheila. He means that the younger generation are more open to his message than their parents.',
    more: "This is the divide between generations at the heart of the play. Sheila and Eric accept their part in Eva's death, while Mr and Mrs Birling refuse to change. Priestley puts his hope in the young.",
    tip: "Use it for the theme of age and youth. 'Impressionable' can sound like a criticism, but here it is praise: the young can still learn.",
  },
  'We are responsible for each other.': {
    why: "The Inspector says this in his final speech in Act 3. It is the play's central message: what each person does affects others, so everyone shares responsibility for how others are treated.",
    more: "Priestley was a socialist who wanted a fairer Britain after the Second World War. The Inspector's 'we' includes the audience as well as the Birlings.",
    tip: "Comment on the inclusive pronoun 'we' and the short, certain sentence. Contrast it with Birling's belief that a man should look after only himself.",
  },
  'Are there no prisons? ... And the Union workhouses?': {
    why: 'Scrooge asks this in Stave One, when two gentlemen collect money for the poor at Christmas. He means the poor can go to prisons and workhouses, which his taxes already pay for, instead of receiving charity.',
    more: 'In Stave Three the Ghost of Christmas Present throws these words back at Scrooge when he reveals the children Ignorance and Want. Dickens is attacking the 1834 Poor Law, which made workhouses harsh on purpose.',
    tip: "Use it for poverty and social responsibility. The questions show Scrooge's cold indifference, which makes his change in Stave Five more striking.",
  },
  'I wear the chain I forged in life... I made it link by link': {
    why: "Marley's Ghost says this to Scrooge in Stave One. His chain is made of cash-boxes, keys, padlocks, ledgers and purses, the tools of his greed. He forged it himself, link by link, through every selfish act in his life.",
    more: "Marley warns that Scrooge's own chain was just as heavy seven Christmas Eves ago and has grown since. The chain shows that choices made in life have consequences after death.",
    tip: "Use it for greed or redemption. 'Forged' suggests hard, deliberate work: Marley chose his fate, which warns Scrooge that he can still choose differently.",
  },
  'Mankind was my business. The common welfare was my business.': {
    why: "Marley's Ghost says this in Stave One, when Scrooge praises him for being a good man of business. Marley replies that his real business should have been caring for other people, not making money.",
    more: "Repeating 'business' turns Scrooge's favourite word against him. Dickens is telling his readers that everyone, and the rich above all, has a duty to the poor.",
    tip: "A strong quotation for social responsibility. Zoom in on 'mankind' and 'common welfare': a duty to everyone, not just to oneself.",
  },
  'Secret, and self-contained, and solitary as an oyster.': {
    why: "This is the narrator describing Scrooge in Stave One. Like an oyster inside its hard shell, Scrooge shuts himself away from other people. It is part of Dickens's opening portrait of a cold, lonely miser.",
    more: "An oyster can hide a pearl, which hints that something good is locked away inside Scrooge, waiting to be found. The list joined by 'and' stresses how closed off he is.",
    tip: "Use it for Scrooge's isolation at the start, and contrast it with the warm, open man of Stave Five.",
  },
  'I will honour Christmas in my heart, and try to keep it all the year.': {
    why: 'Scrooge says this in Stave Four, kneeling at his own neglected grave and begging the Ghost of Christmas Yet to Come for a second chance. It is the moment he promises to change.',
    more: "He goes on to promise to live in the Past, the Present and the Future, keeping the lessons of all three spirits. Keeping Christmas 'all the year' makes generosity a way of life, not one day.",
    tip: 'Use it for redemption. It marks the turning point between the old Scrooge of Stave One and the new man of Stave Five.',
  },
  'Man is not truly one, but truly two.': {
    why: 'Jekyll writes this in the final chapter, his full statement of the case. He explains his belief that every person has two natures, one good and one evil, which his potion was meant to separate.',
    more: 'This idea of the duality of human nature is the heart of the novella. Jekyll even guesses that people may turn out to be made of many selves, not just two.',
    tip: 'Use it for duality, and link it to Victorian respectability, which pushed men like Jekyll to hide their darker desires.',
  },
  'If he be Mr Hyde... I shall be Mr Seek.': {
    why: "Utterson, the lawyer, thinks this in Chapter 2, 'Search for Mr Hyde', as he begins watching the door that Hyde uses. He puns on the children's game hide and seek.",
    more: 'The playful pun hides real worry. Utterson is determined to find out who Hyde is and why Jekyll has named him as heir in his will.',
    tip: 'Use it to show Utterson as the detective figure who drives the mystery, and to discuss how Stevenson builds the story as an investigation.',
  },
  "Satan's signature upon a face.": {
    why: "Utterson says this in Chapter 2 after meeting Hyde for the first time, when he cannot explain why Hyde's face disgusts him. He feels that the Devil himself has marked it.",
    more: "Many Victorians believed a person's face showed their character, an idea called physiognomy. The religious language links Hyde with evil, yet nobody can say exactly what is wrong with him.",
    tip: "Use it for good and evil or for the Gothic. Comment on 'signature': Hyde's evil is written on him, as if Satan has signed his work.",
  },
  'I felt younger, lighter, happier in body.': {
    why: 'Jekyll describes his first transformation into Hyde in Chapter 10, his full statement. After the pain of the change he feels free and excited: the first sign of the pleasure that keeps drawing him back to being Hyde.',
    more: 'The list of comparatives, younger, lighter, happier, shows how tempting Hyde is. Jekyll admits that he also felt reckless and freed from his sense of duty.',
    tip: 'Use it to explain why Jekyll keeps returning to Hyde: being Hyde feels like escape from Victorian restraint.',
  },
  'But soft, what light through yonder window breaks?': {
    why: "Romeo says this in Act 2 Scene 2, the balcony scene, when he sees Juliet at her window from the Capulets' orchard. He compares her to light breaking through the darkness, and goes on to call her the sun.",
    more: 'Light and dark imagery runs through the play. The lovers meet at night, and their love shines out against the darkness of the feud.',
    tip: 'Use it for love and for light imagery. Comment on how Romeo makes Juliet the source of light in his world.',
  },
  "A plague o' both your houses!": {
    why: "Mercutio cries this in Act 3 Scene 1, after Tybalt stabs him under Romeo's arm. Dying, he curses both the Montagues and the Capulets, whose feud has killed him although he belongs to neither family.",
    more: "He repeats the curse three times, and it comes true: the feud goes on to destroy both families' children. His death turns the play from comedy towards tragedy.",
    tip: "Use it for conflict and violence. Mercutio's curse shows the feud's cost falling on the innocent, and marks the turning point of the play.",
  },
  'These violent delights have violent ends.': {
    why: 'Friar Lawrence says this in Act 2 Scene 6, just before he marries Romeo and Juliet in secret. He warns Romeo that a passion so sudden and intense may end as violently as it began.',
    more: 'The line foreshadows the tragedy: within a day of the wedding Mercutio and Tybalt are dead and Romeo is banished. The Friar compares such love to fire and gunpowder, which destroy each other as they meet.',
    tip: "Use it for love and conflict, or for fate. Repeating 'violent' ties the lovers' passion to the violence of the feud.",
  },
  'My only love sprung from my only hate!': {
    why: 'Juliet says this in Act 1 Scene 5, at the Capulet feast, when the Nurse tells her that Romeo is a Montague. The one man she loves belongs to the family she has been raised to hate.',
    more: "The antithesis of 'love' and 'hate' shows love and the feud tangled together from the start. Romeo has the same shock moments earlier, when he learns that Juliet is a Capulet.",
    tip: "Use it for love and conflict. The balanced halves, 'my only love' against 'my only hate', sum up the lovers' situation in one line.",
  },
  'Parting is such sweet sorrow.': {
    why: 'Juliet says this to Romeo at the end of the balcony scene, Act 2 Scene 2, as they keep saying goodnight. Leaving him is sad, but sweet too, because they will meet again tomorrow.',
    more: "'Sweet sorrow' is an oxymoron: two opposites joined to show mixed feelings. Later partings are far darker: after their wedding night Juliet imagines Romeo dead at the bottom of a tomb.",
    tip: 'Use it for love. Analyse how the oxymoron captures both the joy and the pain of young love.',
  },
  'All animals are equal, but some animals are more equal than others.': {
    why: "This is the single commandment painted on the barn wall in Chapter 10, replacing all Seven Commandments. The pigs have added to 'All animals are equal' to justify ruling over the other animals.",
    more: "The line is a paradox: nothing can be 'more equal'. Orwell's satire shows how those in power twist language to keep their privileges, as the Soviet leaders did after the Russian Revolution.",
    tip: 'Use it for power and corruption or for propaganda. Comment on how the added clause cancels the very principle it claims to keep.',
  },
  'Four legs good, two legs bad.': {
    why: 'Snowball sums up Animalism in this slogan in Chapter 3, for the animals who cannot learn the Seven Commandments. The sheep bleat it for hours at a time, often to drown out debate.',
    more: 'In Chapter 10, once the pigs walk on their hind legs, the sheep are taught a new version in which two legs are better. The slogan shows simple chants replacing thought.',
    tip: 'Use it for propaganda and language. A short, rhythmic slogan is easy to chant and impossible to argue with.',
  },
  'The creatures outside looked from pig to man, and from man to pig.': {
    why: 'This comes from the very last paragraph of Animal Farm, in Chapter 10. The animals look through the farmhouse window at the pigs and the human farmers and can no longer tell which is which.',
    more: "The revolution has come full circle: the pigs have become the tyrants they overthrew. The mirrored phrase 'from pig to man, and from man to pig' shows the two becoming the same.",
    tip: 'Use it for the ending and for corruption. It is a strong closing quotation to show the failure of the revolution.',
  },
  'Napoleon is always right.': {
    why: "Boxer takes up this maxim in Chapter 5, when Napoleon ends the Sunday debates after driving out Snowball. Alongside his motto 'I will work harder', his loyal trust lets Napoleon do whatever he likes.",
    more: "Boxer's blind loyalty is exploited to the end: the pigs sell him to the knacker when he can no longer work. Orwell shows how unquestioning obedience keeps tyrants in power.",
    tip: 'Use it for loyalty, ignorance or propaganda. Boxer stands for the hard-working people who believed their leaders.',
  },
  "Maybe there is a beast... maybe it's only us.": {
    why: 'Simon says this at the assembly in Chapter 5, when the boys argue about whether the beast is real. He suggests the beast might be inside the boys themselves, but the others mock him.',
    more: "Simon's idea is the novel's central truth: the evil the boys fear is their own. In Chapter 9 they kill him in a frenzy, believing that he is the beast.",
    tip: "Use it for innate evil or the beast. Simon's hesitant words show that the boy who sees the truth cannot make the others listen.",
  },
  "The thing is -- fear can't hurt you any more than a dream.": {
    why: 'Jack says this at the assembly in Chapter 5, telling the frightened littluns that there is no beast. He claims fear is no more harmful than a bad dream, then mocks the little ones for being afraid.',
    more: 'Jack is wrong: fear does great harm on the island. It drives the boys to hunt the beast and, in the end, to kill Simon. Golding shows that the real danger lies inside the boys.',
    tip: 'Use it for fear and the beast, and point out the dramatic irony: the reader soon sees how much damage fear does.',
  },
  "Ralph wept for the end of innocence, the darkness of man's heart.": {
    why: 'This comes from the last pages of the novel, in Chapter 12, when a naval officer arrives and the boys are rescued. Ralph weeps for everything the island has taught him about human evil.',
    more: "The line names the novel's two big ideas: the loss of innocence and the darkness inside every person. Ralph also weeps for the death of Piggy.",
    tip: "Use it to conclude an answer on innocence or evil. 'Darkness of man's heart' widens the meaning from these boys to all humanity.",
  },
  'Kill the beast! Cut his throat! Spill his blood!': {
    why: 'The boys chant this in Chapter 9 as they dance in a storm. When Simon crawls out of the forest to tell them the truth about the beast, they mistake him for it and kill him.',
    more: 'The chant began during the pig hunts. Now the victim is a boy, which shows how far the boys have fallen into savagery. Three short, violent commands make it sound like a ritual.',
    tip: "Use it for civilisation against savagery. The chant's rhythm sweeps everyone into the killing, even Ralph and Piggy, who join the dance.",
  },
  "A guy needs somebody ... A guy goes nuts if he ain't got nobody.": {
    why: 'Crooks says this to Lennie in Chapter 4, in his room by the barn. As the only black worker on the ranch, he is shut out of the bunk house and has nobody to talk to.',
    more: "Loneliness is the novel's great theme. Crooks speaks for the ranch's outsiders: Candy, Curley's wife and Crooks himself all long for company.",
    tip: "Use it for loneliness. The dialect and double negative make his pain sound real, and 'nuts' shows that isolation damages the mind.",
  },
  'I got you to look after me, ... you got me to look after you.': {
    why: "Lennie says this in Chapter 1, by the pool, finishing George's familiar speech about their dream. It sums up their friendship: unlike other lonely ranch workers, they have each other.",
    more: "The mirrored structure shows a friendship of equals in Lennie's eyes, though George does most of the looking after. It makes the ending, when George shoots Lennie, even more painful.",
    tip: 'Use it for friendship and loneliness. The balanced sentence mirrors the bond between the two men.',
  },
  'Guys like us, that work on ranches, are the loneliest guys in the world.': {
    why: 'George says this in Chapter 1, by the pool, as he begins telling the story of their dream that Lennie loves to hear. Ranch workers drift from job to job, with no family and no home.',
    more: 'Steinbeck wrote about migrant workers in the Great Depression of the 1930s. George goes on to say that he and Lennie are different, because they have each other and something to look forward to.',
    tip: "Use it for loneliness or the American Dream. The superlative 'loneliest' makes loneliness the defining feature of a ranch worker's life.",
  },
  'I remember about the rabbits, George.': {
    why: 'Lennie says this in Chapter 1, when George is exasperated that he has forgotten where they are going. Lennie has forgotten nearly everything except the dream of tending rabbits on a farm of their own.',
    more: "The rabbits stand for the dream that keeps both men going. Lennie's love of soft things, like the rabbits, is also what leads to the tragedy that ends the dream.",
    tip: "Use it for the American Dream or for Lennie's character: his memory holds on to the dream when nothing else stays with him.",
  },
  'Stars, hide your fires; let not light see my black and deep desires.': {
    why: "Macbeth says this aside in Act 1 Scene 4, when Duncan names his son Malcolm as heir to the throne. Malcolm now stands in Macbeth's way, and he asks the stars to hide his murderous thoughts.",
    more: 'Macbeth calls on darkness to cover his crime, and Lady Macbeth makes a similar plea in the next scene. Light and dark imagery runs through the play, with darkness linked to evil.',
    tip: "Use it for ambition. The rhyme of 'fires' and 'desires' makes his ambition sound like a dark spell or prayer.",
  },
  'Come, you spirits that tend on mortal thoughts, unsex me here.': {
    why: 'Lady Macbeth says this alone in Act 1 Scene 5, after learning that Duncan will spend the night at her castle. She calls on evil spirits to take away her womanly gentleness so that she can help kill him.',
    more: 'To a Jacobean audience, calling on spirits was witchcraft, which links her with the witches. She asks to be filled from head to toe with cruelty.',
    tip: "Use it for gender or the supernatural. 'Unsex me' shows her belief that women are too gentle for murder.",
  },
  'I dare do all that may become a man; who dares do more is none.': {
    why: 'Macbeth says this to Lady Macbeth in Act 1 Scene 7, when he tries to back out of killing Duncan. A real man, he says, does only what is honourable; anyone who does more is not a man at all.',
    more: 'Lady Macbeth answers by attacking his manhood, and he gives in. The play questions what makes a man: later Macduff shows that a man can grieve and still be strong.',
    tip: "Use it for masculinity and ambition. It shows Macbeth's conscience at its strongest, just before he gives way.",
  },
  'By the pricking of my thumbs, something wicked this way comes.': {
    why: "The Second Witch says this in Act 4 Scene 1, as Macbeth approaches the witches to demand more prophecies. The 'something wicked' is Macbeth himself.",
    more: 'Even the witches now see Macbeth as wicked, which shows how far he has fallen since Act 1. A pricking in the thumbs was believed to warn that evil was near.',
    tip: "Use it for the supernatural and Macbeth's decline. The rhyme and chanting rhythm set the witches' speech apart from everyone else's.",
  },
  "Yet do I fear thy nature; ... too full o' th' milk of human kindness.": {
    why: "Lady Macbeth says this in Act 1 Scene 5, after reading Macbeth's letter about the witches' prophecies. She fears he is too kind and gentle to murder his way to the crown.",
    more: 'Milk suggests nurture, mothers and innocence. In the same scene she asks the spirits to turn her own milk to gall, rejecting kindness in herself.',
    tip: "Use it for Lady Macbeth's view of her husband. Ironically, it is the first sign that Macbeth has a conscience to overcome.",
  },
  "What's done cannot be undone.": {
    why: "Lady Macbeth says this while sleepwalking in Act 5 Scene 1, watched by a doctor and her gentlewoman. She relives the night of Duncan's murder and seems to speak to Macbeth, but she cannot escape what they did.",
    more: "In Act 3 Scene 2 she told Macbeth that what's done is done, meaning they should forget it. Now the same idea torments her: guilt has broken the woman who once seemed fearless.",
    tip: "Use it for guilt. Compare it with her earlier 'what's done is done' to show how her confidence has collapsed.",
  },
  'Double, double toil and trouble; fire burn and cauldron bubble.': {
    why: 'The three witches chant this together around their cauldron in Act 4 Scene 1, just before Macbeth arrives to ask about his future. It is the refrain of their spell.',
    more: 'The short lines, strong beat and rhymes sound like a magic incantation, which sets the witches apart from the human characters, who mostly speak in blank verse.',
    tip: 'Use it for the supernatural. The chanting rhythm and rhyme make the spell sound unnatural and menacing to a Jacobean audience that feared witchcraft.',
  },
  "There's daggers in men's smiles.": {
    why: "Donalbain, Duncan's younger son, says this to his brother Malcolm in Act 2 Scene 3, after their father's murder is discovered. He fears that the friendly faces around them hide murderers.",
    more: 'The brothers flee, Malcolm to England and Donalbain to Ireland, which makes them look guilty. The line returns to appearance against reality and to the dagger imagery of the murder.',
    tip: "Use it for appearance and reality. 'Daggers' links back to Macbeth's vision and to the murder weapon.",
  },
  'It is a tale told by an idiot, full of sound and fury, signifying nothing.': {
    why: "Macbeth says this in Act 5 Scene 5, at the end of his 'Tomorrow, and tomorrow' speech after hearing that Lady Macbeth has died. He concludes that life is meaningless, like a story told by a fool.",
    more: 'Everything Macbeth killed for now means nothing to him. The speech is often read as the lowest point of his despair, just before the final battle.',
    tip: "Use it for the consequences of ambition. 'Signifying nothing' is a blunt ending: all his noise and violence have achieved nothing.",
  },
  "I am in blood stepp'd in so far": {
    why: "Macbeth says this to Lady Macbeth in Act 3 Scene 4, after Banquo's ghost has ruined the banquet. He is like a man wading through a river of blood, so far in that going back would be as hard as going on.",
    more: "The image shows each murder leading to the next. In the same speech he resolves to visit the witches again, and he goes on to have Macduff's family killed.",
    tip: 'Use it for guilt or violence. The metaphor of wading in blood shows Macbeth trapped by his own crimes.',
  },
  'So foul and fair a day I have not seen.': {
    why: "These are Macbeth's first words in the play, in Act 1 Scene 3, spoken to Banquo on the heath after a battle. They echo the witches' 'Fair is foul, and foul is fair' before he has even met them.",
    more: 'The day is foul because of the storm and fair because of the victory. The echo hints that Macbeth is already linked to the witches, and to evil.',
    tip: 'Use it to show Shakespeare linking Macbeth to the witches from his very first line.',
  },
  "Screw your courage to the sticking place, and we'll not fail.": {
    why: 'Lady Macbeth says this to Macbeth in Act 1 Scene 7, after he asks what will happen if they fail. She tells him to tighten his courage as far as it will go, and then the murder will succeed.',
    more: 'The image may come from tightening a crossbow string, or a peg on a musical instrument, until it holds. She has just mocked his manhood; now she reassures him with a confident plan.',
    tip: "Use it for Lady Macbeth's power over her husband. Her command and her certain 'we'll not fail' show her controlling the plan.",
  },
  'All the perfumes of Arabia will not sweeten this little hand.': {
    why: "Lady Macbeth says this while sleepwalking in Act 5 Scene 1. She still smells Duncan's blood on her hand, and no perfume in the world can cover it.",
    more: "In Act 2 she said a little water would clear them of the murder. Now the woman who mocked her husband's guilt is broken by her own, and 'little hand' makes her seem small and fragile.",
    tip: 'Use it for guilt, contrasting it with her confidence in Act 2. The hyperbole shows that her guilt is beyond any cure.',
  },
  'Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day.': {
    why: "Macbeth says this in Act 5 Scene 5, moments after hearing that Lady Macbeth is dead. The repeated 'tomorrow' makes time feel like an endless, pointless crawl.",
    more: "'Creeps' and 'petty' make life small and slow. The speech goes on to compare life to a brief candle and to a poor actor, the words of a man who has lost everything that gave life meaning.",
    tip: 'Use it for despair and the consequences of ambition. Comment on how the repetition and slow rhythm imitate the dragging days.',
  },
  'Full of scorpions is my mind, dear wife!': {
    why: "Macbeth says this to Lady Macbeth in Act 3 Scene 2, when he has already arranged Banquo's murder. He is king, but his mind is tormented by fear and guilt, as if full of stinging scorpions.",
    more: "'Dear wife' still sounds loving, but he keeps his plan for Banquo from her. The couple are drifting apart as Macbeth begins to act alone.",
    tip: "Use it for guilt, or for how the Macbeths' relationship changes. The scorpion metaphor shows a mind poisoned by its own crimes.",
  },
  'Public men, Mr Birling, have responsibilities as well as privileges.': {
    why: 'The Inspector says this to Mr Birling in Act 2. Birling, angry at how his wife is being questioned, demands an apology and points to his own importance. The Inspector replies that power brings duties as well as rewards.',
    more: 'Birling cares more about his reputation, and his hopes of a knighthood, than about Eva. Priestley shows that wealth and status bring a duty to others.',
    tip: "Use it for social responsibility or power. The pairing of 'responsibilities' and 'privileges' sums up Priestley's argument in one line.",
  },
  "You're not the kind of father a chap could go to ...": {
    why: 'Eric says this to his father in Act 3, when Birling asks why Eric did not come to him for help instead of stealing money from the firm. It shows how distant their relationship is.',
    more: "Eric's reply exposes the cold family behind the respectable front. Priestley shows the younger generation beginning to challenge their parents.",
    tip: 'Use it for family, or for age against youth. Eric speaks as a son who has never felt able to trust his father.',
  },
  'If we were all responsible for everything ... it would be very awkward.': {
    why: "Mr Birling says this in Act 1, early in the Inspector's questions about Eva Smith. He mocks the idea that people are responsible for everyone they have dealt with, because it would be inconvenient for him.",
    more: "The Inspector's whole visit proves him wrong. 'Awkward' is a mild, comfortable word, which shows Birling caring more about his own ease than about a girl's death.",
    tip: "Use it to show Birling's selfishness, and contrast it with the Inspector's final speech about shared responsibility.",
  },
  "I'm ashamed of you as well - yes both of you.": {
    why: "Eric says this to his parents in Act 3, after the Inspector has gone and they turn on him for what he did. He answers that he is ashamed of them too, because they refuse to accept their part in Eva's death.",
    more: "The family splits by generation: Sheila and Eric accept the Inspector's lesson, while their parents try to carry on as before. Priestley pins his hope for change on the young.",
    tip: "Use it for age against youth. The pause before 'yes both of you' shows Eric deliberately blaming both parents, not just his father.",
  },
  "I didn't feel about her as she felt about me.": {
    why: 'Gerald says this in Act 2, describing his affair with Daisy Renton, the name Eva Smith was using by then. He admits that she loved him more than he loved her, and that he was the one who ended it.',
    more: 'Gerald is more honest than the Birling parents, but he still used a vulnerable young woman and then left her. The imbalance of feeling mirrors the imbalance of power between them.',
    tip: "Use it for gender and class, or for Gerald's character. It shows some regret, but also how easily a man of his class could walk away.",
  },
  'Just used her for the end of a stupid drunken evening.': {
    why: 'The Inspector says this to Eric in Act 3, as he sums up what each of them did to Eva Smith. Eric met her in a bar while drunk, took advantage of her, and later made her pregnant.',
    more: "The Inspector goes on to say that Eric treated her as if she were less than human. Priestley shows how men of Eric's class could use working-class women and walk away.",
    tip: "Use it for gender and class. 'Just used' is blunt: it strips Eric's actions of any excuse.",
  },
  "You began to learn something. And now you've stopped.": {
    why: 'Sheila says this to her parents in Act 3, after the family learn that the Inspector may not have been a real police inspector. Her parents are relieved and ready to forget, but Sheila insists that what they did has not changed.',
    more: 'The two short sentences mark the split between the generations. Sheila has changed for good, while her parents slip back into their old selves.',
    tip: "Use it for Sheila's development and for age against youth. Contrast this Sheila with the excited, spoilt girl of Act 1.",
  },
  'A man has to mind his own business and look after himself.': {
    why: 'Mr Birling says this in Act 1, lecturing Gerald and Eric after dinner, moments before the Inspector rings the doorbell. He believes in looking after only himself and his family, not the rest of society.',
    more: 'The doorbell cuts him off, as if in answer: the Inspector arrives to prove him wrong. Priestley uses Birling to stand for selfish capitalism.',
    tip: "Use it to set up Birling's views, then contrast it with the Inspector's message that everyone is connected.",
  },
  "We don't live alone. We are members of one body.": {
    why: 'The Inspector says this in his final speech in Act 3, before he leaves. He argues that nobody lives separately from others: like parts of one body, everyone is connected to, and affected by, everyone else.',
    more: "It answers Birling's claim in Act 1 that a man should mind his own business. The short sentences sound like a sermon, which suits the Inspector's role as the voice of conscience.",
    tip: "Use it for social responsibility. Comment on the plural 'we' and the body metaphor, which take in the audience too.",
  },
  'Each of you helped to kill her.': {
    why: "The Inspector says this to the Birlings in Act 3, just before his final speech. Each of them played a part in the chain of events that led to Eva Smith's death, although none caused it alone.",
    more: 'The play is built like that chain, with each part of the questioning revealing another link. Gerald, who has gone out by then, is part of it too.',
    tip: "Use it for responsibility and for the play's structure. 'Each' makes every character answer for their own part, so nobody can hide behind the others.",
  },
  'Oh! But he was a tight-fisted hand at the grind-stone, Scrooge!': {
    why: "This is the narrator in Stave One, introducing Scrooge just after telling us that Marley is dead. 'Tight-fisted' means mean with money, and a 'hand at the grind-stone' is someone who works without rest to make it.",
    more: 'The narrator follows it with a list of harsh words for Scrooge: squeezing, wrenching, grasping, scraping, clutching, covetous. The lively, almost comic voice makes the reader judge Scrooge at once.',
    tip: "Use it for Scrooge's greed at the start. The exclamations and the narrator's direct, mocking tone are typical of Dickens's style.",
  },
  'Bah! ... Humbug!': {
    why: "Scrooge says this in Stave One when his nephew Fred wishes him a merry Christmas. 'Humbug' means a fraud or nonsense: Scrooge dismisses Christmas as a sham.",
    more: 'The two sharp words, split by a speech tag, became his catchphrase. Fred answers with warmth and good humour, showing the Christmas spirit that Scrooge lacks.',
    tip: "Use it for Scrooge at the start. After Marley's visit he tries to say 'Humbug' again but stops at the first syllable: the first crack in his old self.",
  },
  'Old Marley was as dead as a door-nail.': {
    why: "This comes from the opening paragraph of A Christmas Carol, in Stave One. The narrator insists that Scrooge's partner Marley is completely dead, which matters because his ghost is about to appear.",
    more: 'The narrator jokes about the phrase, wondering what is especially dead about a door-nail. The chatty, humorous voice draws the reader in before the ghost story begins.',
    tip: "Use it to discuss the narrator's voice and the ghost-story genre. Stressing that Marley is dead makes his return more shocking.",
  },
  'I will live in the Past, the Present, and the Future.': {
    why: 'Scrooge makes this promise in Stave Four, at his own grave, to the Ghost of Christmas Yet to Come, and repeats it joyfully in Stave Five. He means he will keep the lessons of all three spirits.',
    more: "Each capitalised word stands for one of the spirits. The promise shows that Scrooge's change will last beyond one Christmas Day.",
    tip: 'Use it for redemption. The list of three mirrors the three spirits and the structure of the novella.',
  },
  'The cold within him froze his old features, nipped his pointed nose.': {
    why: 'This is the narrator describing Scrooge in Stave One. His coldness comes from inside him and shows on his face, as if his meanness freezes his whole body.',
    more: "Dickens uses cold and winter imagery for Scrooge's lack of feeling. By Stave Five the imagery has turned to warmth and light as he changes.",
    tip: "Use it for Scrooge's character and Dickens's cold imagery. Analyse how 'the cold within him' turns a feeling into a physical state.",
  },
  'God bless us, every one!': {
    why: "Tiny Tim says this in Stave Three, at the Cratchits' Christmas dinner, which Scrooge watches with the Ghost of Christmas Present. The narrator repeats it as the very last words of the book.",
    more: 'Tim is poor and ill, yet he blesses everyone. His kindness, and his likely death if nothing changes, move Scrooge to ask the Spirit whether Tiny Tim will live.',
    tip: "Use it for the Cratchits and the Christmas spirit. Ending the book with Tim's words makes his blessing Dickens's own message.",
  },
  'Darkness is cheap, and Scrooge liked it.': {
    why: "The narrator says this in Stave One as Scrooge climbs his dark stairs on Christmas Eve, just before Marley's ghost appears. He keeps the house dark because candles cost money.",
    more: "Darkness also suits his cold, lonely character. The short sentence is dry and witty: Scrooge's meanness stretches even to light.",
    tip: "Use it for greed and for light and dark imagery. Scrooge's change in Stave Five comes with a clear, bright, sunny morning.",
  },
  'No warmth could warm, no wintry weather chill him.': {
    why: 'The narrator describes Scrooge in Stave One. Neither heat nor cold affects him, because he is colder than any weather.',
    more: 'The paragraph goes on to say that no wind was bitterer than he, and no falling snow more intent on its purpose. Weather imagery makes him seem harsher than nature itself.',
    tip: "Use it for Scrooge at the start. The alliteration in 'warmth could warm' and 'wintry weather' gives the sentence a cold, hard sound.",
  },
  'He carried his own low temperature always about with him.': {
    why: 'The narrator describes Scrooge in Stave One. Scrooge brings coldness with him wherever he goes: it is part of who he is, not of the weather around him.',
    more: 'The narrator adds that he iced his office in the hottest days of summer and did not warm it one degree at Christmas. Coldness stands for his lack of warmth towards other people.',
    tip: "Use it for Scrooge's isolation. The temperature metaphor makes an emotional quality physical and easy to picture.",
  },
  'I am as light as a feather, ... I am as merry as a schoolboy.': {
    why: 'Scrooge says this on Christmas morning in Stave Five, waking in his own bed to find he still has time to make amends. The string of similes pours out of him in his joy at a second chance.',
    more: "The cold, heavy Scrooge of Stave One has become light and childlike. The repeated 'I am as' shows his happiness overflowing.",
    tip: 'Use it for redemption, and contrast it with the descriptions of Scrooge in Stave One.',
  },
  'I learned to recognise the thorough and primitive duality of man.': {
    why: 'Jekyll writes this in his full statement in Chapter 10. He explains how he came to see that every person is made of two opposite sides, good and evil, from the very beginning.',
    more: "'Primitive' suggests the duality is deep and ancient, part of human nature itself. Darwin's ideas made many Victorian readers fear the animal inside the gentleman.",
    tip: "Use it for duality. Link 'primitive' to Hyde, who is described as ape-like and troglodytic.",
  },
  'that man is not truly one, but truly two.': {
    why: 'Jekyll writes this in his full statement in Chapter 10, describing the truth his studies led him to. He believes every person has two natures, which his potion would try to split apart.',
    more: "Hyde is the evil side set free. Repeating 'truly' makes it sound like a scientific conclusion, though the story shows how disastrous the experiment is.",
    tip: "Use it for duality and science. It is the novella's key idea in its shortest form.",
  },
  'The pleasures which I made haste to seek in my disguise were... undignified.': {
    why: 'Jekyll writes this in his full statement in Chapter 10, about what he did as Hyde. He never says exactly what his pleasures were, only that they were undignified, and later that they turned monstrous.',
    more: "Stevenson keeps Hyde's crimes vague, so readers imagine the worst. The silence fits a Victorian society that hid its vices behind respectability.",
    tip: "Use it for secrecy and repression. 'Disguise' shows Jekyll treating Hyde as a mask he can wear without blame.",
  },
  'He had always been known for charities; he was now no less distinguished for religion.': {
    why: 'This is the narrator in Chapter 6, describing Jekyll after Hyde vanishes following the murder of Sir Danvers Carew. Jekyll comes out of his seclusion, sees his friends and does good works for about two months.',
    more: 'His goodness does not last: soon he shuts himself away again, and Lanyon dies of shock after learning the truth. Respectable charity and religion can hide a darker self.',
    tip: "Use it for appearance and reality, or Victorian respectability. Jekyll's public good deeds hide his private struggle.",
  },
  'All human beings, as we meet them, are commingled out of good and evil.': {
    why: 'Jekyll writes this in his full statement in Chapter 10. Everyone, he says, is a mixture of good and evil, but Hyde, alone among humans, is pure evil.',
    more: "Jekyll also explains why Hyde is smaller and younger than him: his evil side had been far less exercised than his good. 'Commingled' means mixed together.",
    tip: 'Use it for duality and good against evil. It explains why Jekyll stays mixed while Hyde is evil alone.',
  },
  'The moment I choose, I can be rid of Mr Hyde.': {
    why: "Jekyll says this to Utterson in Chapter 3, 'Dr Jekyll Was Quite at Ease', when Utterson raises the will that leaves everything to Hyde. Jekyll insists that he is in control.",
    more: 'It is dramatic irony: later Jekyll turns into Hyde without the potion and can no longer stop it. His confidence is the first hint of a habit he cannot break.',
    tip: "Use it for duality or for Jekyll's character. It shows him overconfident about controlling his darker side.",
  },
  'He is not easy to describe. There is something wrong with his appearance.': {
    why: "Mr Enfield says this to Utterson in Chapter 1, 'Story of the Door', after telling how Hyde trampled a young girl. He cannot say exactly what is wrong with Hyde, only that he gives a strong feeling of deformity.",
    more: 'Every witness struggles to describe Hyde. His evil is felt rather than seen, which makes him more frightening and fits the Gothic genre.',
    tip: "Use it for Hyde's mystery and the Gothic. The vague language makes the reader imagine something worse than any description.",
  },
  'That child of Hell had nothing human; nothing lived in him but fear and hatred.': {
    why: "Jekyll writes this about Hyde in his full statement in Chapter 10, describing a day when he was trapped as Hyde and hid in a hotel. He is so disgusted that he refuses to call Hyde 'I'.",
    more: "Calling Hyde a 'child of Hell' links him to the Devil. Yet Hyde is part of Jekyll, so Jekyll is describing his own worst self.",
    tip: 'Use it for good and evil, or duality. Note how Jekyll pushes the blame onto Hyde as if he were someone else.',
  },
  'I was slowly losing hold of my original and better self.': {
    why: 'Jekyll writes this in his full statement in Chapter 10, after he has begun turning into Hyde without the potion. He fears that he is becoming his worse self for good.',
    more: 'The balance has shifted: at first Jekyll chose to become Hyde, but now Hyde grows stronger while Jekyll weakens. The novella shows how giving in to evil can take over a person.',
    tip: "Use it for duality or addiction. 'Slowly' shows a gradual, frightening loss of control.",
  },
  'The fog still slept on the wing above the drowned city.': {
    why: "The narrator says this in Chapter 5, 'Incident of the Letter', as Utterson sits by his fire with his clerk, Mr Guest. Thick London fog hangs over the city like a sleeping bird.",
    more: "The fog hides London as secrecy hides the truth about Jekyll. 'Drowned city' makes London seem lost and buried, typical of Stevenson's Gothic setting.",
    tip: 'Use it for setting and the Gothic. Link the fog to secrecy: just as the city is hidden, so is the truth about Hyde.',
  },
  'O Romeo, Romeo! Wherefore art thou Romeo?': {
    why: "Juliet says this on her balcony in Act 2 Scene 2, not knowing that Romeo is listening below. 'Wherefore' means 'why', not 'where': she is asking why he has to be Romeo, a Montague.",
    more: 'She goes on to wish that he would give up his name, or that she could stop being a Capulet. The famous line is about family names standing between two lovers.',
    tip: "Use it for love and family conflict. Explaining that 'wherefore' means 'why' shows close knowledge of the language.",
  },
  'That which we call a rose by any other name would smell as sweet.': {
    why: 'Juliet says this on her balcony in Act 2 Scene 2. A rose would smell just as sweet with another name, so Romeo would be just as perfect if he were not called Montague.',
    more: 'Juliet argues that names are only labels, but the play proves her wrong: the names Montague and Capulet carry the feud that destroys them both.',
    tip: 'Use it for love against the feud, and point out the tragic irony: names matter far more than Juliet hopes.',
  },
  'For never was a story of more woe than this of Juliet and her Romeo.': {
    why: "Prince Escalus speaks these final lines of the play in Act 5 Scene 3, after the lovers' deaths have ended the feud. They form the rhyming couplet that closes the tragedy.",
    more: 'The Prologue promised a story of star-crossed lovers, and the ending answers it. The feuding fathers make peace, but only at the cost of their children.',
    tip: "Use it for the ending or for fate. The final couplet brings the play full circle to the Prologue's sonnet.",
  },
  'O, she doth teach the torches to burn bright!': {
    why: 'Romeo says this in Act 1 Scene 5, at the Capulet feast, the first time he sees Juliet. She is so beautiful that she seems brighter than the torches lighting the hall.',
    more: "Only minutes earlier Romeo was lovesick for Rosaline; now he forgets her at once. The light imagery begins here and runs through the lovers' scenes.",
    tip: "Use it for love at first sight and light imagery. Some readers question how deep Romeo's love is, given how quickly it changes.",
  },
  'Wisely and slow; they stumble that run fast.': {
    why: 'Friar Lawrence says this to Romeo in Act 2 Scene 3, when Romeo asks him to marry him to Juliet that very day. The Friar warns that people who rush are the ones who fall.',
    more: 'Nobody takes the advice, not even the Friar, who agrees to hold the wedding that afternoon. The whole play happens in a few days, and haste brings disaster.',
    tip: 'Use it for fate and haste. It is a proverb-like warning that the plot proves right.',
  },
  'Good night, good night! Parting is such sweet sorrow': {
    why: 'Juliet says this at the end of the balcony scene, Act 2 Scene 2, as she and Romeo struggle to say goodbye. She goes on to say she could keep saying good night until morning.',
    more: "The repeated 'good night' shows how hard it is for the lovers to part. 'Sweet sorrow' is an oxymoron that holds joy and pain together.",
    tip: 'Use it for love. The repetition and the oxymoron show the intensity of young love.',
  },
  'Do you bite your thumb at us, sir?': {
    why: "Abram, a Montague servant, asks this in Act 1 Scene 1, at the start of the opening street brawl. The Capulet servant Sampson has bitten his thumb at them, a rude insult in Shakespeare's time.",
    more: "The quarrel starts over a petty gesture and grows into a fight between both households. The play opens with the feud's violence before we meet the lovers.",
    tip: 'Use it for conflict. It shows the feud kept alive by pride, even among the servants.',
  },
  'Thus with a kiss I die.': {
    why: 'Romeo says this in Act 5 Scene 3, in the Capulet tomb, as he drinks poison beside Juliet, whom he believes to be dead. These are his last words.',
    more: 'Juliet wakes moments later, finds him dead and stabs herself with his dagger. Love and death are joined in a final kiss, as the Prologue foretold.',
    tip: 'Use it for love and death, or fate. The short, simple line gives a quiet ending to a passionate love.',
  },
  'Then I defy you, stars!': {
    why: 'Romeo cries this in Act 5 Scene 1, in Mantua, when Balthasar tells him that Juliet is dead. He decides to defy fate by going back to Verona to die beside her.',
    more: 'The stars stand for fate, which the Prologue says has crossed the lovers. By trying to defy fate, Romeo rushes into the very tragedy it foretold.',
    tip: "Use it for fate against free will. Romeo's defiance is a choice, yet it leads exactly where the stars pointed.",
  },
  'My bounty is as boundless as the sea, my love as deep.': {
    why: 'Juliet says this to Romeo in the balcony scene, Act 2 Scene 2. Her love and her generosity have no limit, like the endless sea.',
    more: "She adds that the more she gives, the more she has, for both are infinite. Juliet is often the more practical of the two, yet here her passion matches Romeo's.",
    tip: "Use it for love. The simile and the alliteration of 'bounty' and 'boundless' make her love sound limitless.",
  },
  'The only good human being is a dead one.': {
    why: 'Snowball says this in Chapter 4, after the Battle of the Cowshed, when Boxer is upset because he thinks he has killed a stable-lad. Snowball brushes his pity aside: war is war.',
    more: "Even the heroic Snowball has a ruthless side. The animals' revolution begins to copy the cruelty it set out to escape.",
    tip: "Use it for violence and revolution. It shows that cruelty is not Napoleon's alone: power and conflict harden every leader.",
  },
  'I will work harder!': {
    why: "This is Boxer's personal motto, which he adopts in Chapter 3 and repeats whenever things go wrong. The strong cart-horse believes that hard work will solve every problem.",
    more: "The pigs exploit Boxer's strength and loyalty, and when he collapses they sell him to the knacker. Orwell shows how leaders use honest workers.",
    tip: 'Use it for the working class and exploitation. Boxer stands for loyal, hard-working people betrayed by their leaders.',
  },
  'All animals are equal.': {
    why: "Old Major says this in his speech to the animals in Chapter 1, and it becomes the last of the Seven Commandments in Chapter 2. It is the founding idea of the animals' revolution.",
    more: "By Chapter 10 the pigs have changed it to say that some animals are more equal than others. Following this commandment shows how the revolution's ideals are betrayed.",
    tip: 'Use it alongside the Chapter 10 version to show how language is twisted to justify inequality.',
  },
  'Man serves the interests of no creature except himself.': {
    why: 'Old Major says this in his speech in the barn in Chapter 1, urging the animals to rebel. He argues that humans only ever exploit animals and give nothing back.',
    more: 'Ironically, the pigs end up serving only themselves, just like the humans. Old Major stands for Marx and Lenin, whose ideas inspired the Russian Revolution.',
    tip: 'Use it for power and revolution. Show the irony by comparing it with how the pigs behave by the end.',
  },
  'Donkeys live a long time. None of you has ever seen a dead donkey.': {
    why: 'Benjamin the donkey says this in Chapter 3 whenever he is asked if life is better since the rebellion. His cryptic answer suggests he has seen it all before and expects nothing to change.',
    more: 'Benjamin is cynical and wise, but he does nothing until it is too late to save Boxer. He can stand for people who see injustice but stay silent.',
    tip: 'Use it for Benjamin or for education and ignorance. His knowing silence helps the pigs take power.',
  },
  "The rules! ... You're breaking the rules!": {
    why: 'Ralph shouts this at Jack during the assembly in Chapter 5, when Jack ignores the conch and defies him. Jack answers that he does not care about the rules.',
    more: "The rules and the conch stand for order and democracy. When Jack rejects them, the boys' society begins to fall apart.",
    tip: "Use it for civilisation against savagery, or leadership. Ralph's desperate repetition shows his authority slipping away.",
  },
  'What are we? Humans? Or animals? Or savages?': {
    why: "Piggy asks this during the night-time assembly in Chapter 5, as it collapses into chaos. He worries how the boys' behaviour would look to adults.",
    more: 'The questions go to the heart of the novel: can the boys stay civilised without adults and rules? As the story unfolds, the answer is no.',
    tip: "Use it for civilisation against savagery. The questions move down from 'humans' to 'savages', mirroring the boys' decline.",
  },
  "We've got to have rules and obey them. After all, we're not savages.": {
    why: 'Jack says this in Chapter 2, at an early assembly, agreeing with Ralph that the boys need rules. He is proud to be English and believes that being English makes them civilised.',
    more: 'It is deeply ironic: Jack becomes the leader of the savage tribe that breaks every rule and kills. Golding shows that civilisation is only a thin layer.',
    tip: "Use it for civilisation against savagery and for Jack's change. Compare it with his later violence to bring out the irony.",
  },
  'Fancy thinking the Beast was something you could hunt and kill!': {
    why: "The Lord of the Flies, a pig's head on a stick, seems to say this to Simon in Chapter 8, in a vision in the forest. It mocks the boys' belief that the Beast is a creature outside themselves.",
    more: "The Beast is inside the boys: their own capacity for evil. 'Lord of the Flies' translates Beelzebub, a name for the Devil.",
    tip: 'Use it for innate evil or the beast. The mocking, schoolboy tone makes evil sound chillingly ordinary.',
  },
  'The world, that understandable and lawful world, was slipping away.': {
    why: "The narrator says this of Ralph during the night-time assembly in Chapter 5, as the boys' fear of the beast and of ghosts takes over. Ralph feels the ordered world of rules and adults slipping away.",
    more: "'Understandable and lawful' sums up everything the boys are losing: reason, order and law. The rest of the novel shows that world collapsing.",
    tip: "Use it for civilisation against savagery. The verb 'slipping' shows the loss happening gradually, almost unnoticed.",
  },
  "every damn one of 'em's got a little piece of land in his head.": {
    why: 'Crooks says this to Lennie in Chapter 4, in his room, when Lennie tells him about the dream farm, just before Candy arrives. He has watched hundreds of workers arrive with the same dream, and none of them ever got it.',
    more: "Crooks is bitter because life has taught him that the American Dream is an illusion for men like him. Yet he soon asks to join them, which shows how strong the dream's pull is.",
    tip: "Use it for the American Dream. 'In his head' suggests the dream exists only in the imagination.",
  },
  "A guy sets alone out here at night, maybe readin' books or thinkin'.": {
    why: 'Crooks says this to Lennie in Chapter 4, in his room by the barn. Kept apart from the other men because he is black, he spends his nights alone with his books and his thoughts.',
    more: 'Crooks explains that without company a man cannot be sure what is real and what he has imagined. Steinbeck shows racism adding to the loneliness that every worker feels.',
    tip: "Use it for loneliness and racial prejudice. The dialect, 'sets' and 'readin'', gives Crooks a real, distinctive voice.",
  },
  "I could get you strung up ... so easy it ain't even funny.": {
    why: "Curley's wife says this to Crooks in Chapter 4, when he tells her to leave his room. She threatens to have him lynched, reminding him that as a black man he has no power against a white woman's word.",
    more: "Crooks shrinks back into silence. Curley's wife is lonely and powerless herself, yet here she uses the one kind of power she has over him: race.",
    tip: "Use it for power, prejudice and loneliness. It shows the people at the bottom of the ranch's hierarchy turning on each other.",
  },
  "We could live offa the fatta the lan'.": {
    why: 'Lennie says this in Chapter 3, in the bunk house, as George describes their dream farm and old Candy listens. It means living off the richness of their own land.',
    more: 'Candy offers his savings, and for a moment the dream seems within reach. Steinbeck lets hope rise just before disaster: soon after, Curley attacks Lennie.',
    tip: "Use it for the American Dream. The dialect spelling shows Lennie's childlike voice repeating George's familiar words.",
  },
  "Ain't many guys travel around together ... I don't know why.": {
    why: "Slim says this to George in Chapter 2, in the bunk house, as he thinks about George and Lennie's friendship. On the ranches most men travel and work alone.",
    more: 'Slim goes on to wonder whether people everywhere are afraid of one another. His thoughtfulness marks him out as the wise man of the ranch.',
    tip: "Use it for friendship and loneliness. Slim's surprise shows how unusual George and Lennie's bond is.",
  },
  'You never really understand a person until you ... climb into his skin.': {
    why: "Atticus says this to Scout in Chapter 3, after her bad first day at school. He teaches her to see things from other people's point of view before judging them.",
    more: 'This lesson in empathy shapes the whole novel. At the end, standing on the Radley porch, Scout finally sees the world as Boo Radley sees it.',
    tip: "Use it for empathy and for Atticus as a teacher. Climbing into someone's skin makes understanding sound physical and complete.",
  },
  "Mockingbirds don't do one thing but make music for us to enjoy.": {
    why: 'Miss Maudie says this to Scout in Chapter 10, explaining why Atticus says it is a sin to kill a mockingbird. Mockingbirds harm nobody; they only give pleasure.',
    more: "The mockingbird becomes a symbol of innocence. Tom Robinson and Boo Radley are both innocent people harmed, or nearly harmed, by other people's cruelty.",
    tip: 'Use it to introduce the mockingbird symbol, then link it to Tom Robinson and Boo Radley.',
  },
  "The one thing that doesn't abide by majority rule is a person's conscience.": {
    why: 'Atticus says this to Scout in Chapter 11, when she asks why he defends Tom Robinson when most people think he is wrong. He must do what his own conscience tells him.',
    more: "Atticus respects his neighbours' right to disagree, but he could not face himself if he gave in. The line sums up his moral courage.",
    tip: "Use it for moral courage and justice. It shows Atticus standing almost alone against his town's racism.",
  },
  'I wanted you to see what real courage is.': {
    why: 'Atticus says this to Jem in Chapter 11, after the death of their neighbour Mrs Dubose. He made Jem read to her so that Jem would see real courage: her fight to free herself from morphine before she died.',
    more: "Atticus wants Jem to stop thinking that courage means holding a weapon. Real courage, he says, is fighting on when you know you are beaten from the start, as he does at Tom Robinson's trial.",
    tip: "Use it for moral courage. Link Mrs Dubose's private battle with Atticus's public one in the courtroom.",
  },
  'People generally see what they look for, and hear what they listen for.': {
    why: "Judge Taylor says this in Chapter 17, during Tom Robinson's trial, when he refuses to send the spectators, children included, out of the courtroom. He means that people notice only what they already expect to find.",
    more: 'Read more widely, the line predicts the verdict: the jury will see what they expect to see, whatever the evidence shows.',
    tip: 'Name the speaker correctly: it is Judge Taylor, not Atticus, and getting that right shows close knowledge. The line works well for prejudice and justice.',
  },
}
