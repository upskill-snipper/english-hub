import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Quote Detective: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/quote-detective.ts). Written with AI on 16 October
 * 2026 and checked against each quotation, its speaker and its place in the text,
 * as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: the bank grew from 110 "which text"
 * questions on nine texts to 772 questions of four kinds on 100 set texts,
 * every one a board sets that has a study guide except Do not go gentle into
 * that good night (which text; who says it and when; which line supports a
 * point; which word does the work). Every new question carries an explanation
 * of why its answer is right and, where it has fixed options, why each wrong
 * option is wrong here. Written with AI and checked against each question, as
 * the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 24 October 2026, as the founder decided: every
 * explanation was read against its question and its source. Three were
 * corrected (Juliet's stars speech, where the held edition reads "when I shall
 * die"; and two An Inspector Calls explanations that quoted or paraphrased
 * another question's answer), and those of every question that changed were
 * checked again or rewritten to match (src/data/games/banks/quote-detective.ts
 * lists each change). Eight older "which text" questions whose lines named
 * their title or a character were removed with their explanations, so the
 * bank now holds 764.
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
  'If a man were porter of hell gate, he should have old turning the key.': {
    why: "The Porter speaks this in Act 2 Scene 3, woken by the knocking at the castle gate on the morning after Duncan's murder. Still drunk from the night's feast, he pretends to be the gatekeeper of hell, letting in sinners one at a time.",
    more: "The joke is darker than he knows: since the murder, the castle really has become a kind of hell. 'Old' means plenty of. One of his imagined sinners is an equivocator, a word Jacobean audiences linked to the Gunpowder Plot trials of 1606.",
    tip: 'Use the Porter when you write about structure: comic prose placed between the murder and its discovery, while the knocking keeps the tension high, and an image of the castle as hell.',
  },
  "speaker: The instruments of darkness tell us truths; / Win us with honest trifles, to betray's / In deepest consequence.":
    {
      why: "Banquo says this in Act 1 Scene 3, moments after Ross greets Macbeth as Thane of Cawdor. One of the witches' promises has come true, and Banquo warns that evil powers win our trust with small truths so that they can betray us in something far worse.",
      not: {
        'Macbeth, just after the Cawdor prophecy comes true':
          'Macbeth is beside him, but he takes the two truths as hopeful signs, the opening of a story that ends with him as king. He hears no warning in them.',
        'Banquo, telling Macbeth he has dreamt of the witches':
          'On the night of the murder Banquo does mention the witches, but only to say he dreamt of them. The warning about betrayal comes here, as a promise first comes true.',
        'Ross, bringing news that Macbeth is Thane of Cawdor':
          'Ross brings the news of Cawdor, but he was not there when the witches spoke, so he cannot know why it matters. Only Banquo and Macbeth know what has just come true.',
      },
      more: 'Banquo sees the trap that Macbeth walks into: the witches tell the truth about small things so that he will trust them about the crown. The audience hears the warning that Macbeth ignores.',
      tip: 'Use this line to contrast the two men from their first meeting with the witches: Banquo is wary, Macbeth is tempted. It strengthens any answer on the supernatural or on free will.',
    },
  'speaker: When you durst do it, then you were a man': {
    why: "Lady Macbeth says this in Act 1 Scene 7, after Macbeth tells her he will go no further with the murder. 'Durst' means dared: she reminds him that he first proposed the plan, and claims he was only a man while he dared to act on it.",
    not: {
      'Lady Macbeth, walking in her sleep':
        'Asleep in Act 5 she does replay her taunts about his courage, but in broken fragments of prose. This complete, controlled argument belongs to the night she talks him into murder.',
      'Macbeth, persuading the murderers to kill Banquo':
        "Macbeth does attack the murderers' manhood, saying they are men only in name. But this line is aimed at Macbeth himself, not spoken by him.",
      'Lady Macbeth, as her husband sees the ghost at the banquet':
        "At the banquet she does question his manhood again, in short, sharp questions as he stares at the ghost. This argument about what a man dares comes before Duncan's murder.",
    },
    more: 'She attacks the quality Macbeth values most, his courage as a soldier, and redefines being a man as daring to murder. The argument works: by the end of the scene he has agreed.',
    tip: "Use it for Lady Macbeth's manipulation and for the theme of masculinity: she makes murder a test of manhood. A strong answer asks whether the play agrees with her definition.",
  },
  "speaker: Had I but died an hour before this chance, / I had liv'd a blessed time": {
    why: "Macbeth says this in Act 2 Scene 3, in front of everyone, after returning from the room where Duncan lies dead. He is acting the grief of a loyal host, wishing he had died an hour before this 'chance', or event, though he is the murderer.",
    not: {
      "Macduff, as Duncan's murder is discovered":
        "Macduff found the body and is the first to cry out in horror, but his grief is sincere and he speaks of the killing as sacrilege. This polished wish is Macbeth's.",
      "Banquo, as Duncan's murder is discovered":
        'Banquo is there and begs Macduff to say it is not so, but he says little. He keeps his suspicions of Macbeth to himself until he is alone.',
      'Macbeth, told that his wife is dead':
        "Told of his wife's death, Macbeth answers with weary despair about time, not with a wish that he had died first. The line here is a public performance of grief.",
    },
    more: 'The speech is dramatic irony. Macbeth means it as a show, yet it is true: before the murder he did live a blessed time, honoured by all. The audience hears a truth the speaker does not intend.',
    tip: "Use it to show Macbeth's skill at deception straight after the murder, and the irony that his lie describes his real loss. It works well in answers on appearance and reality.",
  },
  'speaker: It will have blood, they say, blood will have blood.': {
    why: "Macbeth says this in Act 3 Scene 4, once the lords have gone, after Banquo's ghost has twice appeared at the feast. He fears the old belief that murder always brings more bloodshed in return, and that even stones and trees have revealed hidden killers.",
    not: {
      'Lady Macbeth, after the guests leave the banquet':
        'Lady Macbeth is with him, but she is exhausted and answers only briefly, telling him he lacks sleep. The fear that blood demands blood is his.',
      "Macbeth, returning from Duncan's chamber":
        "After Duncan's murder Macbeth's horror is fixed on the blood on his own hands. The idea that blood calls for more blood comes later, once a second murder has been done.",
      'Lady Macbeth, walking in her sleep':
        'Asleep, she remembers how much blood there was and tries to wash it away. She does not predict revenge; she is living with what has already been done.',
    },
    more: "Repeating 'blood' makes violence a cycle that feeds itself. By now Macbeth has killed Duncan and had Banquo murdered, and he goes straight on to plan more killing, so the line also foreshadows his own end.",
    tip: "Use it to track Macbeth's change: once he agonised over one murder, now he accepts a chain of them. It also links to the theme of natural justice, as guilt cannot stay hidden.",
  },
  'speaker: I shall do so; / But I must also feel it as a man': {
    why: 'Macduff says this in Act 4 Scene 3, in England, after Ross tells him that his wife and children have been murdered. Malcolm has urged him to fight back like a man; Macduff agrees, but insists that a real man also feels his loss.',
    not: {
      'Malcolm, as Macduff hears his family has been killed':
        'Malcolm is the one giving advice: he urges Macduff to turn his grief into revenge. This line answers him; it is not his own.',
      'Ross, as Macduff hears his family has been killed':
        "Ross brought the terrible news and is there as Macduff takes it in, but the reply to Malcolm's advice is Macduff's own.",
      'Macbeth, on hearing that his wife is dead':
        "When Macbeth hears of his wife's death he answers with weariness, not open grief. The play sets that numbness against Macduff, who insists on feeling his loss.",
    },
    more: "The line redefines manhood: a man can be brave and still feel deeply. Macduff's open grief makes him a moral contrast to Macbeth, and gives him a personal reason to face the tyrant.",
    tip: "Use it in answers on masculinity: Macduff offers a different model of manhood from the one that drives Macbeth to murder. Pair it with a moment where Macbeth's feelings have gone numb.",
  },
  'speaker: ... this dead butcher, and his fiend-like queen': {
    why: "Malcolm says this in Act 5 Scene 8, the play's closing speech, as the new king thanks his thanes and promises to call home the exiles. He calls Macbeth a mere butcher and his wife a fiend, and reports that she is thought to have killed herself.",
    not: {
      "Macduff, holding up Macbeth's head":
        "Macduff does bring in Macbeth's head and hails Malcolm as king, declaring that the time is free. The final judgement on the couple is left to the new king.",
      'Ross, telling Siward that his son has died':
        "Ross is in the scene and breaks the news of young Siward's death to his father, but the summing up of Macbeth and his queen falls to Malcolm.",
      'Malcolm, testing Macduff in England':
        "In England Malcolm does pile insults on the tyrant while testing Macduff. But Macbeth is alive then; the word 'dead' places this line after the final fight.",
    },
    more: "The insult tells only part of the story. 'Butcher' ignores the brave soldier of Act 1 and the guilt that tormented him; 'fiend-like' ignores Lady Macbeth's breakdown. The audience knows more than the new king.",
    tip: "Quote it when you evaluate how far Macbeth is a butcher. A strong answer weighs Malcolm's verdict against what the soliloquies have shown, and decides how fair it is.",
  },
  'point: Macbeth: Which line shows Macbeth hoping the throne might come to him with no action on his part?':
    {
      why: "In an aside in Act 1 Scene 3, just after learning he is Thane of Cawdor, Macbeth hopes that if fate means him to be king, chance will crown him without his 'stir', any action of his own. For a moment he imagines becoming king innocently.",
      not: {
        'This supernatural soliciting / Cannot be ill; cannot be good.':
          "Here Macbeth weighs whether the witches' prompting is good or evil. He is unsure about the prophecy itself, not hoping that it will come true without his help.",
        'I have no spur / To prick the sides of my intent, but only / Vaulting ambition':
          'Alone before the murder, Macbeth admits he has no reason to kill Duncan except ambition. He is thinking about acting, not waiting for chance.',
        'I am settled, and bend up / Each corporal agent to this terrible feat.':
          'This is Macbeth committing himself to the murder, every part of his body bent to the deed. It is the opposite of waiting for fate.',
      },
      more: 'The hope does not last: by the end of Act 1 he has agreed to the murder. The line matters because it shows Macbeth had another path open to him, and chose not to take it.',
      tip: "Use it in answers on fate and free will: Macbeth could have waited for chance, so the murder is his choice, not simply the witches' doing.",
    },
  'point: Macbeth: Which line shows Lady Macbeth realising that what they have gained has not made her happy?':
    {
      why: 'Alone in Act 3 Scene 2, Lady Macbeth admits that they have spent everything and gained nothing, because getting what they wanted has brought no contentment. She is queen, yet she says it would be safer to be the one murdered than to live in such uneasy joy.',
      not: {
        'Infirm of purpose! / Give me the daggers.':
          'This is her scorn on the night of the murder, when Macbeth will not take the daggers back. She is in full control, with no sign yet of regret.',
        "Things without all remedy / Should be without regard: what's done is done.":
          'Moments later she tells her husband to stop brooding on what cannot be changed. She is putting on a brave face for him, not admitting her own unhappiness.',
        'Leave all the rest to me.':
          'In Act 1 she takes charge of the plan with total confidence. Nothing has been gained yet, so there is nothing to be disappointed by.',
      },
      more: "The couplet rhymes 'spent' with 'content', a neat sound for a bleak thought. It is the first crack in her control, spoken only to herself, and it prepares for her breakdown in Act 5.",
      tip: "Contrast what she says alone with what she says to Macbeth a moment later: private despair, public reassurance. That gap is strong evidence for an answer on Lady Macbeth's decline.",
    },
  'point: Macbeth: Which line shows Macbeth vowing to act on every impulse the moment he feels it?':
    {
      why: "Macbeth says this in Act 4 Scene 1, the moment he hears that Macduff has fled to England. Firstlings are the first-born: from now on, his first thought will become his first deed. At once he resolves to attack Macduff's castle and kill his family.",
      not: {
        'We will proceed no further in this business':
          'In Act 1 Macbeth thinks carefully and decides not to kill Duncan at all. It shows the conscience he still had then, the opposite of acting without thought.',
        'To be thus is nothing, / But to be safely thus.':
          "Here he reasons that being king is worthless unless he is safe. It leads to Banquo's murder, but it is careful calculation, not a vow to act on impulse.",
        'Be innocent of the knowledge, dearest chuck, / Till thou applaud the deed.':
          'Macbeth keeps his plan against Banquo secret from his wife. It shows him plotting alone, not giving up thought altogether.',
      },
      more: "This is a turning point in his tyranny. The man who once argued with himself through a whole soliloquy now refuses to think at all, and the murder of Macduff's wife and children, who threaten no one, is the result.",
      tip: 'Use it to chart how Macbeth changes: from a man held back by conscience in Act 1 to one who kills without pausing. It is strong evidence for his decline into tyranny.',
    },
  "point: Macbeth: Which line shows Macbeth admitting that his subjects' loyalty is gone for good?":
    {
      why: 'In Act 5 Scene 3, as his thanes desert him, Macbeth lists what a man should have in old age, honour, love, obedience and friends, and admits he cannot expect any of it. Instead he will have quiet curses and respect that is only words.',
      not: {
        "I have supp'd full with horrors; / Direness, familiar to my slaughterous thoughts, / Cannot once start me.":
          'Hearing a cry of women, Macbeth says horrors no longer startle him. It shows how numb he has become, not what he has lost from his people.',
        "Throw physic to the dogs, I'll none of it.":
          'Macbeth rejects medicine when the Doctor cannot cure his wife. It shows impatience and contempt, not a recognition that his people no longer love him.',
        "I 'gin to be aweary of the sun, / And wish th' estate o' th' world were now undone.":
          'Near the end Macbeth says he is weary of life itself and wishes the whole world undone. It is despair, but it says nothing about loyalty.',
      },
      more: "The list shows that Macbeth still knows what a good king's life should be; he has destroyed it himself. 'Mouth-honour', respect that is spoken but not meant, is what tyranny earns.",
      tip: 'Use it in answers on kingship: compare the loyalty Duncan earned with the fear Macbeth commands. It also shows a flicker of self-knowledge, useful if you argue he stays partly sympathetic.',
    },
  'word: Come, thick night, / And pall thee in the dunnest smoke of hell | Which word wraps the night like the cloth laid over a coffin?':
    {
      why: 'A pall is the heavy cloth spread over a coffin at a funeral, and to pall is to wrap in one. In Act 1 Scene 5, just after hearing that Duncan will stay the night, Lady Macbeth asks the night to dress itself for a death.',
      not: {
        thick:
          'Thick makes the night dense enough to hide the murder, but it describes how dark the night is, not what it is wrapped in.',
        dunnest:
          'Dunnest means the murkiest, darkest dull brown. It colours the smoke of hell; it does not dress the night for a funeral.',
        smoke:
          'The smoke comes from hell and blots out the light, but it is the material, not the act of wrapping. The funeral idea is in the verb.',
      },
      more: "The image is chilling because the murder has not happened yet: she is already preparing the king's shroud. Darkness is to hide the deed even from heaven, so the cover-up is planned before the crime.",
      tip: "Zoom in on one verb like this to show close reading: 'pall' links darkness, death and secrecy in a single word, and shows how decided Lady Macbeth already is.",
    },
  'word: No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red. | Which word means to stain something the deep red of blood?':
    {
      why: 'Incarnadine is a verb meaning to dye something blood red. Just after the murder, in Act 2 Scene 2, Macbeth says that instead of the sea washing his hand clean, his bloody hand would turn all the oceans red.',
      not: {
        multitudinous:
          'Multitudinous means countless or vast. It makes the seas seem endless, which stresses how huge his guilt feels, but it does not do the staining.',
        seas: 'The seas are what would be stained. They are the thing changed, not the word that changes them.',
        green:
          'Green is the colour of the sea before the stain. The change to red comes from the verb, not from this word.',
      },
      more: "Two long Latin words fill the line with grandeur, then the plain words 'green one red' land like a blow. Hyperbole turns one bloody hand into a stain on the whole world.",
      tip: "Contrast his horror with his wife's calm in the same scene: he believes nothing can clean him, while she treats the blood as easily washed away.",
    },
  "word: Come, seeling night, / Scarf up the tender eye of pitiful day | What does 'seeling' suggest here?":
    {
      why: "To seel was a falconer's word: a young hawk's eyelids were stitched shut to tame it. In Act 3 Scene 2 Macbeth asks night to blind the eye of day, so that Banquo's murder goes unseen. He keeps the plan from his wife.",
      not: {
        'stamping it closed with wax, like a letter':
          'Seeling sounds like sealing, but the image is not of a letter or wax. It comes from training hawks, whose eyes were sewn shut.',
        'building a ceiling over the sky like a roof':
          'It may sound like ceiling, but Macbeth is not picturing a roof. He wants the eye of day itself blinded.',
        'seeing everything clearly, like an owl at night':
          'The word does the opposite: it takes sight away. Macbeth wants no one, not even day, to see what he is planning.',
      },
      more: 'The image is cruel and intimate: day is a tender eye to be stitched shut. Macbeth now calls on darkness just as his wife did in Act 1, and his language has become as violent as his deeds.',
      tip: "Pair it with Lady Macbeth's call for darkness in Act 1 to show how the couple swap roles: now he plans alone and keeps her in the dark.",
    },
  'word: Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day. | Which word makes each passing day seem small and worthless?':
    {
      why: 'Petty means small, trivial, of no importance. Told in Act 5 Scene 5 that his wife is dead, Macbeth sees the days ahead shuffling forward in tiny, meaningless steps until death.',
      not: {
        Tomorrow:
          'The threefold tomorrow makes time feel endless and the same, but the word itself does not make the days small or worthless.',
        creeps:
          'Creeps makes time crawl slowly, like an insect. It slows the days down; the sense of worthlessness comes from petty.',
        pace: 'Pace is only the speed or step of the days. It needs petty in front of it to become trivial.',
      },
      more: 'The speech comes at the moment he should grieve, yet he feels nothing but the emptiness of time. The slow, repeated rhythm acts out the dragging days he describes.',
      tip: "Use it to show how far Macbeth has fallen: the ambitious man of Act 1 now finds life without meaning. Comment on the repetition and on 'creeps' as well as 'petty'.",
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
  'That which we call a rose by any other name would smell as sweet.': {
    why: 'Juliet says this on her balcony in Act 2 Scene 2. A rose would smell just as sweet with another name, so Romeo would be just as perfect if he were not called Montague.',
    more: 'Juliet argues that names are only labels, but the play proves her wrong: the names Montague and Capulet carry the feud that destroys them both.',
    tip: 'Use it for love against the feud, and point out the tragic irony: names matter far more than Juliet hopes.',
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
  'Take him and cut him out in little stars': {
    why: 'Juliet says this in Act 3 Scene 2, waiting impatiently for night and for her new husband, not yet knowing that he has just killed Tybalt. She asks night to give her Romeo and, when she herself dies, to cut him into stars so bright that the whole world will fall in love with night.',
    more: "The image is loving and ominous at once: Juliet's joy is full of death. Light against dark runs through the whole play, and her speech is about to be broken by the Nurse's terrible news.",
    tip: "Use it for Juliet's passion and for light and dark imagery, and point out the dramatic irony: the audience knows what has just happened in the street.",
  },
  'Death is my son-in-law, death is my heir.': {
    why: "Capulet says this in Act 4 Scene 5, on what should be Juliet's wedding morning, when she is found apparently dead. He grieves that Death has married his daughter and will inherit everything he owns.",
    more: 'Death pictured as a bridegroom runs through the play, and here it turns the wedding into a funeral. The audience knows Juliet is only drugged, so the grief is real for Capulet and ironic for us.',
    tip: 'Use it for the theme of love and death, and for Capulet himself: compare this grief with his rage at Juliet in Act 3.',
  },
  'speaker: What, drawn, and talk of peace? I hate the word / As I hate hell, all Montagues, and thee':
    {
      why: 'Tybalt says this in Act 1 Scene 1 to Benvolio, who has drawn his sword only to part the fighting servants and says he is keeping the peace. Tybalt mocks the idea and attacks him, showing his hatred within moments of his first entrance.',
      not: {
        'Tybalt, recognising a Montague at the feast':
          "At the feast Tybalt does want to fight when he hears a Montague's voice, but Capulet stops him. Nobody there is talking of peace with a drawn sword.",
        'Tybalt, just before he kills Mercutio':
          "Before the fatal fight Tybalt's quarrel is with Romeo, whom he calls a villain. This speech answers Benvolio's plea for peace at the start of the play.",
        'Capulet, in the street brawl that opens the play':
          "Capulet does call for his sword in the opening brawl, and his wife mocks him as too old to fight. The hatred of peace itself is Tybalt's.",
      },
      more: "Benvolio's name suggests goodwill, and Tybalt answers his peacemaking with the language of hell. Their meeting sets the pattern of the feud: hatred always shouts down peace.",
      tip: 'Use it as early evidence of how deep the feud runs, and of Tybalt as a fighter who chooses violence. It links straight to his return in Act 3.',
    },
  'speaker: my mind misgives / Some consequence yet hanging in the stars': {
    why: 'Romeo says this in Act 1 Scene 4, as the masked friends set off for the Capulet feast. He fears that some consequence hanging in the stars will begin that night and end with his own early death.',
    not: {
      'Benvolio, on his way to the Capulet feast':
        "Benvolio is with him, but he is the one hurrying everyone along, worried they will arrive too late. The dark premonition is Romeo's.",
      'Romeo, just after he has killed Tybalt':
        "After killing Tybalt, Romeo's danger is immediate and he must flee the Prince. This line looks ahead to something that has not happened yet.",
      'Juliet, in the orchard on the night they meet':
        'Juliet has not even met Romeo when he says this. The sense of something hanging over him comes as the friends walk to the feast.',
    },
    more: 'This is foreshadowing: the audience, already told in the Prologue that the lovers will die, hears Romeo sense it before he has even seen Juliet.',
    tip: "Use it in answers on fate: Romeo feels doomed even before he meets Juliet. Then ask whether the play blames fate or the characters' own haste.",
  },
  'speaker: Wisely and slow; they stumble that run fast.': {
    why: 'Friar Lawrence says this in Act 2 Scene 3, the last line of the scene, after agreeing to marry Romeo and Juliet in the hope of ending the feud. Romeo wants it done at once; the Friar warns that those who rush will fall.',
    not: {
      'Friar Lawrence, just before the wedding':
        'Before the wedding the Friar warns Romeo again, but this rhyming proverb closes the earlier scene, where he first agrees to help.',
      'Juliet, in the orchard on the night they meet':
        "Juliet speaks her own thoughts in the orchard, alone and then with Romeo; she is not handing out proverbs. This is an older man's advice to the young.",
      'Capulet, asking Paris to wait two years':
        "Capulet does ask Paris to wait before marrying Juliet, but because of her age. This proverb answers Romeo's haste, not Paris's.",
    },
    more: "The Friar's advice is wise, yet he marries them the same day, so he ignores it himself. The image of stumbling foreshadows the haste that ruins everyone: a secret marriage, quick revenge, a rushed plan with a potion.",
    tip: "Use it for the theme of haste and for the Friar's responsibility: he sees the danger and still helps. A strong answer asks why.",
  },
  "speaker: O, I am fortune's fool!": {
    why: 'Romeo cries this in Act 3 Scene 1, the moment after killing Tybalt in revenge for Mercutio. Benvolio urges him to run before the Prince arrives; Romeo sees himself as a plaything of fortune, mocked by fate.',
    not: {
      'Romeo, told in Mantua that Juliet is dead':
        "In Mantua Romeo reacts to the news by deciding at once to return and die beside Juliet. This cry belongs to the moment after Tybalt's death.",
      'Mercutio, as he dies of his wound':
        'Mercutio, dying, curses both families and jokes about his wound. He blames the feud, not fortune, for his death.',
      'Juliet, hearing that Romeo is banished':
        'Juliet is distraught at the news, but she is in her room, not the street, and her grief is about the word banished.',
    },
    more: 'A fool was a jester, someone others play with. Romeo feels that fortune is toying with him, yet he chose to fight. The line asks the audience to decide how far he is to blame.',
    tip: 'Quote it in answers on fate and responsibility: Romeo blames fortune at the exact moment his own choice has changed everything.',
  },
  "speaker: It was the nightingale, and not the lark, / That pierc'd the fearful hollow of thine ear":
    {
      why: "Juliet says this in Act 3 Scene 5, at dawn after the lovers' one night together. Romeo must leave for Mantua or be put to death, and Juliet pretends the birdsong was the nightingale, which sings at night, so that he can stay.",
      not: {
        'Romeo, as he must leave at dawn':
          'Romeo knows the truth: it was the lark, the bird of morning, and he must go or die. He is the one insisting that day has come.',
        'Juliet, in the orchard on the night they meet':
          'In the orchard Juliet does want to keep Romeo near, but they have only just met and he is not under sentence of death. This parting is sharper.',
        'The Nurse, warning the lovers that day has come':
          'The Nurse does come to warn them that Lady Capulet is on her way and day has broken. She brings the truth, not this loving denial of it.',
      },
      more: "The lark and the nightingale make this an aubade, a dawn song of lovers who must part. Juliet's refusal to accept daylight shows that love now matters more to her than safety.",
      tip: 'Use it to show how Juliet has grown bolder, and for light and dark: daylight, usually hopeful, now means separation and danger.',
    },
  'speaker: Eyes, look your last. / Arms, take your last embrace!': {
    why: 'Romeo says this in Act 5 Scene 3, in the Capulet tomb, believing Juliet is dead. He tells his eyes and arms to take their last look and embrace, then drinks the poison he bought in Mantua, moments before she wakes.',
    not: {
      'Juliet, waking to find Romeo dead':
        'When Juliet wakes, Romeo is already dead and the Friar urges her to flee. She speaks only briefly before she takes his dagger.',
      'Romeo, leaving Juliet at dawn for Mantua':
        'Parting at dawn, Romeo expects to see Juliet again and promises to send word. These are words of a final farewell, spoken over what he thinks is her body.',
      'Paris, dying beside the Capulet tomb':
        "Paris, wounded by Romeo, asks only to be laid in the tomb with Juliet. The farewell to his own eyes and arms is Romeo's.",
    },
    more: 'Each part of the body is told to say goodbye, as if Romeo were sealing a contract with death; the speech goes on to call the kiss a bargain. The audience knows Juliet is about to wake, which makes the moment agonising.',
    tip: "Use it for dramatic irony and for the theme of haste: a few minutes' patience would have saved both lovers.",
  },
  'point: Romeo and Juliet: Which line shows Capulet at first refusing to force a husband on Juliet?':
    {
      why: "In Act 1 Scene 2 Capulet tells Paris to win Juliet's heart, because his own wishes are only part of the decision: if she agrees, he will consent. Early in the play he sounds like a protective, reasonable father.",
      not: {
        "I think she will be rul'd / In all respects by me":
          'By Act 3 Scene 4 Capulet promises Juliet to Paris without asking her, sure that she will obey him. It shows the opposite of waiting for her consent.',
        'And you be not, hang, beg, starve, die in the streets':
          'When Juliet refuses Paris, Capulet threatens to throw her out to beg and starve in the streets. This is force, not respect for her choice.',
        "I'll have this knot knit up tomorrow morning.":
          'When Juliet pretends to obey, Capulet moves the wedding forward a day. He is rushing the marriage, not leaving the choice to her.',
      },
      more: "The change in Capulet is one of the play's sharpest. After Tybalt's death he wants a quick marriage, and a daughter's refusal becomes, as a father of his time would see it, defiance of his authority.",
      tip: 'Set this line against his fury in Act 3 Scene 5 to show how Capulet changes, and ask what has changed: Juliet, or his circumstances?',
    },
  'point: Romeo and Juliet: Which line shows Juliet herself fearing that their love has come on too quickly?':
    {
      why: 'In the orchard in Act 2 Scene 2, Juliet stops Romeo from swearing his love: their vows tonight are too rash and too sudden, like lightning that is gone before you can name it. She wants the love to grow, like a bud in summer.',
      not: {
        "'Tis but thy name that is my enemy":
          'Here Juliet separates Romeo from his family name: only the name is her enemy, not the man. It is about the feud, not speed.',
        'Thou knowest the mask of night is on my face':
          'Juliet is glad of the dark because it hides her blushes, now that he has overheard her. It shows embarrassment, not fear of haste.',
        "Young men's love then lies / Not truly in their hearts, but in their eyes.":
          "This is Friar Lawrence the next morning, mocking how fast Romeo has forgotten Rosaline. It is about haste, but it is not Juliet's fear.",
      },
      more: 'The lightning simile is itself a flash of foreshadowing: bright, sudden and quickly gone, like the love. Juliet is often the more practical of the two, yet she ends the scene by planning the wedding.',
      tip: 'Use this when you argue that the play warns against haste: even Juliet, deeply in love, can see the danger, and goes ahead anyway.',
    },
  'point: Romeo and Juliet: Which line shows Romeo feeling that love has weakened his courage as a man?':
    {
      why: "After Mercutio is wounded in Act 3 Scene 1, fighting in his place, Romeo blames himself: Juliet's beauty has made him soft, melting the steel of his courage. Moments later he fights Tybalt.",
      not: {
        'Did my heart love till now? Forswear it, sight!':
          'At the feast Romeo forgets Rosaline at the first sight of Juliet. It shows how quickly he falls in love, not that love has weakened him.',
        'There is no world without Verona walls':
          'Banished, Romeo says the world outside the city walls is only torture. It shows despair at exile, not a loss of manliness.',
        "With love's light wings did I o'erperch these walls":
          'In the orchard love makes Romeo bold enough to climb the Capulet walls. It shows love giving him courage, the opposite of this claim.',
      },
      more: 'The line shows the pressure of a male code of honour: Romeo feels that refusing to fight was weakness. His decision to prove his manhood by killing Tybalt is what gets him banished.',
      tip: "Use it in answers on masculinity and violence: the play suggests that the young men's idea of honour, not love, drives the tragedy.",
    },
  "point: Romeo and Juliet: Which line shows the Prince blaming the deaths on the fathers' feud?": {
    why: "Near the end of Act 5 Scene 3 the Prince turns on Capulet and Montague: their hatred has been punished by heaven, which used their children's love to destroy their joys. He adds that he too is punished, for ignoring their quarrels.",
    not: {
      'If ever you disturb our streets again, / Your lives shall pay the forfeit of the peace.':
        'In the opening scene the Prince threatens death if the families fight again. It is a warning before any deaths, not a verdict on them.',
      'O brother Montague, give me thy hand.':
        "This is Capulet offering Montague his hand at the end, closing the feud. It is reconciliation, not the Prince's judgement.",
      'Part, fools! put up your swords, you know not what you do.':
        'Benvolio says this in the first brawl, trying to stop the servants. It condemns fighting, but he is not the Prince and no one has died yet.',
    },
    more: 'A scourge is a whip used for punishment. The Prince makes the tragedy a judgement on the parents, while the feud ends only because of the deaths it caused.',
    tip: 'Use it when you argue who is to blame: the Prince, with authority, puts the blame on the feud and on himself, not on fate or the young lovers.',
  },
  "word: Prodigious birth of love it is to me, / That I must love a loathed enemy. | What does 'prodigious' suggest here?":
    {
      why: "In Act 1 Scene 5, moments after learning that Romeo is a Montague, Juliet calls her love a prodigious birth. In Shakespeare's time a prodigy was an unnatural, ill-omened event, so the word makes her love a monstrous warning sign.",
      not: {
        'huge and joyful, a wonderful surprise':
          "Today prodigious often means huge or amazing, but Juliet is dismayed, not delighted: she must love her family's enemy.",
        'gifted, like a talented young child':
          'A child prodigy is a modern idea. Here the word is about an unnatural birth, a bad omen, not talent.',
        'sudden and unplanned, but harmless':
          'The love is sudden, but prodigious does not mean harmless. It warns of disaster, which is why Juliet sounds so troubled.',
      },
      more: 'Love is pictured as a birth, but a monstrous one. The rhyming couplet, the form the lovers have just shared in their sonnet, now carries foreboding, and the audience already knows how this love will end.',
      tip: "Pick out one word like this to show close reading, and explain its Elizabethan sense: it turns Juliet's first reaction into foreshadowing.",
    },
  "word: These violent delights have violent ends, / And in their triumph die; like fire and powder, / Which as they kiss consume. | What does 'powder' suggest here?":
    {
      why: 'Powder here means gunpowder. In Act 2 Scene 6, just before the wedding, Friar Lawrence warns Romeo that passions this violent burn out like fire meeting gunpowder: the moment they kiss, they destroy each other.',
      not: {
        'face powder, the make-up of a young bride':
          "A wedding is about to happen, but the image is of an explosion, not a bride's make-up. Fire and powder destroy each other.",
        'a medicine the Friar grinds from herbs':
          'The Friar does make potions from plants, which matters later in the play, but here powder is paired with fire to suggest an explosion.',
        'dust, which is all that is left after death':
          "Dust after death fits the play's ending, but the simile is about a sudden blast where fire and powder meet, not what remains.",
      },
      more: "The kiss of fire and powder mirrors the lovers' own kisses, so the Friar's warning ties their love directly to destruction. A single spark is enough to destroy both, which makes the image sudden and violent.",
      tip: 'Use the simile to argue that the play links passion with danger, and note that the Friar sees the risk yet goes ahead with the wedding.',
    },
  "word: My dismal scene I needs must act alone. | What does 'scene' suggest here?": {
    why: "In Act 4 Scene 3, alone in her room, Juliet is about to drink the Friar's potion. She almost calls the Nurse back, then sees that she must play this dreadful part by herself, like an actor in a tragic scene.",
    not: {
      'an angry quarrel she must have with her parents':
        'Today making a scene means a public row, but Juliet has just pretended to obey her parents. The word pairs with act: she is performing a part.',
      'the view from her window over the city':
        'A scene can be a view, but Juliet is not describing anything she sees. She is thinking about what she must do.',
      'a dream she has had of what is to come':
        'Juliet does imagine waking in the vault, but scene, with act, comes from the theatre. She is talking about a part to play.',
    },
    more: 'Shakespeare lets Juliet see herself as an actor in a tragedy, a reminder that we are watching one. Sending the Nurse away shows how alone she is: the adults have all failed her.',
    tip: "Use it to show Juliet's courage and isolation, and as a moment of metatheatre, where a character talks as if she were in a play.",
  },
  "word: A glooming peace this morning with it brings | What does 'glooming' suggest here?": {
    why: "Glooming means dark and gloomy, like an overcast sky. In the play's final speech, in Act 5 Scene 3, the Prince says the morning brings peace between the families, but a peace clouded by grief: even the sun, he adds, will not show itself for sorrow.",
    not: {
      'glowing with new hope for the city':
        'Glooming may sound like glowing, but the peace is shadowed by the deaths. Nothing about this morning is bright.',
      'fading gently, like the end of a day':
        'It is morning, not dusk, and the word is about gloom, not fading light. The peace has only just begun.',
      'calm and restful, like a deep sleep':
        'The peace is real, but the word stresses sorrow, not rest. The families have lost their children.',
    },
    more: "The play ends with light and dark once more: the lovers' bright love has brought a dark peace. The feud is over, but the price is the deaths of the young.",
    tip: 'Use the final lines in answers on the ending: ask whether the peace is a hopeful resolution or a hollow one, bought too late.',
  },
  'I had rather hear my dog bark at a crow than a man swear he loves me.': {
    why: "Beatrice says this in Act 1 Scene 1, in her first exchange with Benedick after the soldiers return. Claiming she is glad no man loves her, she says a dog barking at a crow would please her more than a lover's vows.",
    more: 'The comic hyperbole shows her scorn for the language of courtship and sets up the joke of the play: the woman who mocks love most loudly will fall for the man she spars with.',
    tip: "Use it to show Beatrice's wit and independence at the start, then trace how the trick in the garden and the church scene change how she speaks of love.",
  },
  'When I said I would die a bachelor, I did not think I should live till I were married.': {
    why: 'Benedick says this in Act 2 Scene 3, alone in the garden after overhearing his friends say that Beatrice loves him. He laughs at his own old vow never to marry, and talks himself round to loving her.',
    more: 'The joke is at his own expense: he invents a reason why his promise does not count. His readiness to change his mind makes him likeable, and the audience enjoys watching the trick work.',
    tip: 'Use it for the theme of deception and self-deception: the trick works partly because Benedick seems half ready to believe it.',
  },
  'speaker: Speak low, if you speak love.': {
    why: "Don Pedro says this to Hero in Act 2 Scene 1, at the masked dance, as he takes her aside. He is wooing her on Claudio's behalf, as he promised, and asks her to whisper if her answer is love.",
    not: {
      'Claudio, wooing Hero at the masked dance':
        'Claudio does not woo Hero himself: the Prince does it for him, in disguise. That is why Claudio is so easily persuaded that he has been betrayed.',
      'Benedick, dancing with Beatrice at the masked dance':
        "Benedick does dance masked with Beatrice, but she insults him as the Prince's jester. Nobody whispers love in that conversation.",
      'Balthasar, dancing with Margaret at the masked dance':
        'Balthasar does dance with Margaret, who teases him. But this soft line belongs to the Prince, speaking for his friend.',
    },
    more: "Wooing by proxy, through a mask, is the first of the play's many deceptions. Don John soon uses it to persuade Claudio that the Prince is courting Hero for himself.",
    tip: 'Use it for the theme of appearance and disguise: even a kind deception, like this one, is easily misread in Messina.',
  },
  "speaker: I have drunk poison whiles he utter'd it.": {
    why: "Claudio says this in Act 5 Scene 1, as Borachio confesses that Don John paid him to deceive the Prince and Claudio at Hero's window. Each word of the confession is like poison, because it proves Hero innocent and shows what Claudio has done to her.",
    not: {
      'Don Pedro, as Borachio confesses to the plot':
        "Don Pedro is there too, and asks whether the speech runs through Claudio like iron. The answer about poison is Claudio's.",
      'Claudio, as Don John first accuses Hero':
        'When Don John first accuses Hero, Claudio vows to shame her in church if the charge proves true. He feels no poison then, only suspicion and wounded pride.',
      "Claudio, mourning at Hero's tomb":
        'At the tomb Claudio performs his mourning with music and an epitaph. By then he already knows the truth; this line is the moment he learns it.',
    },
    more: "The image turns Borachio's words into a poisonous drink, the same power of words that destroyed Hero's name. Claudio's grief is sudden, which leads some readers to doubt how deep it goes.",
    tip: "Use it to discuss Claudio's responsibility: he feels the poison of words, so ask whether he ever fully blames himself.",
  },
  'point: Much Ado About Nothing: Which line shows Beatrice raging that she cannot avenge her cousin herself?':
    {
      why: 'In the church in Act 4 Scene 1, after Hero has been shamed, Beatrice wishes she were a man so that she could take revenge on Claudio herself, in public. As a woman she cannot fight a duel, so she must ask Benedick to act for her.',
      not: {
        'He that hath a beard is more than a youth, and he that hath no beard is less than a man':
          'This is Beatrice joking that no man suits her, bearded or not. It is witty teasing about husbands, not rage at being unable to act.',
        'Contempt, farewell! and maiden pride, adieu!':
          'Alone after overhearing Hero, Beatrice gives up her scorn and decides to love Benedick. It is about pride, not revenge.',
        'I love you with so much of my heart that none is left to protest.':
          "This is Beatrice's tender confession to Benedick, moments before her demand. It declares love, not frustration at what a woman may do.",
      },
      more: 'The violent image of eating a heart in the market place shocks a comedy audience. Beatrice exposes a world where men control honour and women must suffer slander in silence.',
      tip: "Use it in answers on gender: Beatrice's anger shows the limits placed on women in Messina, and makes her one of Shakespeare's boldest heroines.",
    },
  "word: I am a plain-dealing villain. | What does 'plain-dealing' suggest here?": {
    why: 'Plain-dealing means frank and open. In Act 1 Scene 3 Don John tells Conrade he will not pretend to be cheerful or flatter anyone: he may not be an honest man, but he is an honest villain.',
    not: {
      'ordinary, with nothing special about him':
        'Plain can mean ordinary, but here it means open, the opposite of disguised. Don John is proud of not hiding his malice.',
      'a card cheat who deals from the bottom':
        'Dealing can be about cards, but plain dealing was an everyday phrase for honest, open behaviour. He is describing his character, not a game.',
      'a merchant who trades in simple goods':
        "Dealing can mean trading, but Don John is the Prince's brother, not a merchant. The phrase is about honesty.",
    },
    more: 'The paradox of an honest villain is unsettling: Don John states his malice openly, yet the other characters never suspect him, and his plot succeeds through lies.',
    tip: "Use it to contrast Don John with the play's kinder deceivers, and to show how dramatic irony works: we know his nature from the start.",
  },
  "word: Comparisons are odorous. | What does 'odorous' suggest here?": {
    why: 'Dogberry is reaching for the proverb that comparisons are odious, meaning hateful, and grabs a word that sounds similar. In Act 3 Scene 5 he is trying to sound dignified in front of Leonato, and the slip, a malapropism, makes him ridiculous.',
    not: {
      'He means comparisons smell sweet':
        'Odorous does mean having a smell, but Dogberry is not praising comparisons. He has simply reached for the wrong grand word.',
      'He means comparisons are clever':
        'Dogberry thinks he is speaking cleverly, but the word is a mistake. The comedy is that he sounds foolish while trying to sound wise.',
      'He means comparisons are old-fashioned':
        "Nothing in the word suggests age. It is a mix-up of two similar-sounding words, which is Dogberry's trademark.",
    },
    more: "Dogberry's muddled words make him the play's clown, yet his Watch is what uncovers Don John's plot. Shakespeare lets the fools find the truth while the clever lords believe a lie.",
    tip: 'Use Dogberry to discuss how language works in the play: the cleverest talkers are deceived, while the man who cannot say what he means helps expose the truth.',
  },
  'In sooth I know not why I am so sad.': {
    why: "Antonio speaks this, the play's first line, in Act 1 Scene 1, on a street in Venice. 'In sooth' means in truth: the merchant cannot explain his sadness, and his friends guess at worry about his ships at sea, or love.",
    more: "The mystery of Antonio's sadness hangs over the play. Some readers link it to his deep attachment to Bassanio, who is about to leave him to court Portia; others to the risks of trade.",
    tip: 'Use the opening line to show the play beginning in melancholy, unusual for a comedy, and to discuss Antonio as a lonely figure at the end as well.',
  },
  "Mislike me not for my complexion, / The shadowed livery of the burnish'd sun": {
    why: 'The Prince of Morocco says this in Act 2 Scene 1, his first words to Portia. He asks her not to dislike him for his dark skin, which he calls the uniform, or livery, given him by the blazing sun.',
    more: 'Portia has already joked about his complexion before meeting him, so his dignified plea exposes her prejudice. The play is full of judgements made on outward appearance, from skin to caskets.',
    tip: 'Use Morocco in answers on prejudice and on appearance and reality: his speech invites the audience to judge Portia, not him.',
  },
  'speaker: The devil can cite Scripture for his purpose.': {
    why: "Antonio says this to Bassanio in Act 1 Scene 3, after Shylock defends lending at interest with a story from the Bible about Jacob's sheep. Antonio sneers that the devil, too, can quote holy words to suit himself.",
    not: {
      'Bassanio, as the loan is arranged':
        "Bassanio is there and distrusts Shylock's friendly offer, but this remark is said to him by Antonio, not by him.",
      'Shylock, as the loan is arranged':
        "Shylock is the one who has told the Bible story. Antonio's remark attacks him for it, comparing him to the devil.",
      'Gratiano, jeering at Shylock at the trial':
        'At the trial Gratiano mocks Shylock cruelly, but this insult comes much earlier, while the loan is being arranged.',
    },
    more: "The insult shows Antonio's contempt even while he asks Shylock for money. Moments later Shylock recalls being spat on by Antonio, who replies that he would do it again.",
    tip: "Use it to show that the Christians' hostility comes first: Shylock's grudge has causes, which matters in any answer on whether he is a villain or a victim.",
  },
  "speaker: So may the outward shows be least themselves. / The world is still deceiv'd with ornament.":
    {
      why: "Bassanio says this in Act 3 Scene 2, as he weighs the three caskets. 'Still' means always: fine outsides often hide something worse, he reasons, so he rejects gold and silver and chooses lead, finding Portia's portrait inside.",
      not: {
        'The Prince of Morocco, choosing between the caskets':
          'Morocco trusts appearances: he decides only gold is worthy of Portia, chooses it, and finds a skull. He reaches the opposite conclusion.',
        'The Prince of Arragon, choosing between the caskets':
          'Arragon does scorn the foolish crowd who choose by show, but he trusts his own merit and picks silver. He never says the world is deceived by ornament.',
        'Portia, as she watches Bassanio choose':
          "Portia watches anxiously and longs for Bassanio to choose rightly, but her father's will forbids her to help. The reasoning is his.",
      },
      more: 'The idea runs through the play: in law, religion and love, a fair surface can hide corruption. The irony is that Bassanio himself borrowed money to look rich enough to court Portia.',
      tip: "Use it in answers on appearance and reality, linking the caskets to the trial, where Portia's disguise and Shylock's bond both turn on what lies beneath the surface.",
    },
  'point: The Merchant of Venice: Which line shows Shylock claiming that his cruelty is learned from Christians themselves?':
    {
      why: 'At the end of his great speech in Act 3 Scene 1, Shylock tells Salarino and Solanio that revenge is what Christian example has taught him. He will put their lesson into practice, and outdo his teachers.',
      not: {
        'I will feed fat the ancient grudge I bear him.':
          'In Act 1 Shylock admits an old grudge against Antonio and wants to feed it. It shows his hatred, but says nothing of learning cruelty from Christians.',
        "I'll have my bond, speak not against my bond.":
          "Shylock refuses to listen to Antonio's pleas and insists on his bond. It shows his determination, not a claim about who taught him.",
        'You take my life / When you do take the means whereby I live.':
          'At the trial Shylock protests that taking his wealth takes his life. It shows his loss, not a claim that his revenge was learned.',
      },
      more: "The argument turns the Christians' contempt back on them: if they take revenge when wronged, why should a Jew not? An audience may be disturbed both by his cruelty and by the truth in his charge.",
      tip: 'Use it in answers on whether Shylock is villain or victim: he plans cruelty, yet he blames a society that treated him cruelly first.',
    },
  "word: The quality of mercy is not strain'd, / It droppeth as the gentle rain from heaven / Upon the place beneath. | What does 'strain'd' suggest here?":
    {
      why: 'Strained means forced or constrained. In Act 4 Scene 1 Shylock asks why he must be merciful, and Portia, disguised as a young lawyer, answers that mercy cannot be forced: it falls freely, like gentle rain from heaven.',
      not: {
        'tired out and weakened by great effort':
          "Today strained can mean tired or tense, but Portia is answering Shylock's question about being compelled. Her point is that mercy cannot be forced.",
        'measured out carefully in small amounts':
          'Mercy, she says, falls like rain on everything below, so it is not rationed. But strained here means forced, not measured out.',
        'spoiled by being mixed with anger':
          "Nothing in the word suggests anger. Portia's point is about compulsion: true mercy is given willingly, never squeezed out.",
      },
      more: "The rain image makes mercy a gift from heaven, given without being earned, a Christian idea Portia sets against Shylock's demand for the letter of the law. The irony is that the court shows him little mercy afterwards.",
      tip: "Use it in answers on justice and mercy, and test Portia's words against how the court treats Shylock at the end of the scene.",
    },
  "word: How far that little candle throws his beams! / So shines a good deed in a naughty world. | What does 'naughty' suggest here?":
    {
      why: "In Shakespeare's time naughty meant wicked or worthless, a much stronger word than today. Returning to Belmont at night in Act 5 Scene 1, Portia sees a candle burning in her hall and compares it to a good deed shining in a wicked world.",
      not: {
        'mischievous, like a badly behaved child':
          "Today naughty describes a child's mischief, but then it was a serious word. Shylock uses it too, as an angry insult to the gaoler.",
        'dark, because night has fallen':
          "It is night, and the candle shines in the dark, but naughty describes the world's moral state, not the time of day.",
        'noisy and full of foolish fun':
          'Nothing suggests fun. Portia is contrasting goodness with a world she sees as morally bad.',
      },
      more: "The candle comes just after the trial, so the good deed may be the rescue of Antonio. Yet many readers find that the court's treatment of Shylock makes the line uncomfortable.",
      tip: "Use it in an answer on the ending: light and harmony return to Belmont, but ask whether the play's world is as good as Portia implies.",
    },
  'Hell is empty, / And all the devils are here.': {
    why: "Ariel reports these words in Act 1 Scene 2, telling Prospero how Ferdinand, the King's son, was the first to leap from the ship during the storm, crying that every devil in hell had come aboard.",
    more: "The storm is Prospero's magic and no one is harmed, but the terror is real for those on board. The line also hints that the real devils are among the passengers: the men who once betrayed Prospero.",
    tip: 'Use it to discuss how the play opens in a chaos that Prospero controls, and the question of who the true villains are.',
  },
  '... misery acquaints a man with strange bed-fellows.': {
    why: "Trinculo, the King's jester, says this in Act 2 Scene 2 as a storm threatens. Finding Caliban lying hidden under his cloak, he decides to creep under it too for shelter: hard times force people into odd company.",
    more: 'The line is comic and has become a proverb, but it also describes the island: kings, servants, spirits and Caliban are all thrown together. The drunken plotters soon parody the noble ones.',
    tip: 'Use it to show how the comic subplot mirrors the main plot, and how the play brings unlikely people together.',
  },
  'speaker: My strong imagination sees a crown / Dropping upon thy head.': {
    why: "Antonio says this to Sebastian in Act 2 Scene 1, when Ariel's music has sent the King and Gonzalo to sleep. He tempts Sebastian to kill his brother Alonso and take the crown of Naples, as Antonio once took Prospero's dukedom.",
    not: {
      'Sebastian, as the King and Gonzalo sleep':
        'Sebastian is the one being tempted. He is slow to understand at first, then agrees to the plot.',
      'Gonzalo, imagining how he would rule the island':
        'Gonzalo does imagine ruling the island, but as an ideal commonwealth with no sovereignty at all. His dream is innocent; this one is murderous.',
      'Caliban, urging Stephano to kill Prospero':
        "Caliban's plot with Stephano copies this one, but he offers Stephano the island and Miranda. The crown speech belongs to the nobles' plot.",
    },
    more: "The word imagination is telling: Antonio paints the crime as destiny to make it attractive. The scene shows that the man who usurped Prospero has not changed, and Caliban's comic plot will mirror it.",
    tip: "Use it to show the parallel plots of usurpation and Antonio's lack of remorse, which matters when you discuss whether the forgiveness at the end is earned.",
  },
  'speaker: Be not afeard. The isle is full of noises, / Sounds, and sweet airs, that give delight, and hurt not.':
    {
      why: "Caliban says this in Act 3 Scene 2, when Ariel's invisible music frightens Stephano and Trinculo. In the middle of plotting murder, the so-called monster calms them with a speech about the island's lovely sounds and his dreams.",
      not: {
        'Ariel, playing invisible music to the plotters':
          'Ariel is playing the music, invisibly, but he does not speak these lines. The description of its beauty comes from Caliban.',
        'Prospero, calming Miranda during the storm':
          "Prospero does calm Miranda during the storm, telling her no harm is done. But he goes on to speak of the past, not the island's music.",
        'Gonzalo, comforting the King after the shipwreck':
          "Gonzalo tries to cheer the grieving King with talk of their luck in surviving. This lyrical speech is Caliban's.",
      },
      more: "Some of the most beautiful verse in the play is given to the character Prospero calls a monster, which makes the audience question that label. Caliban's dream of riches dropping from the clouds is full of longing.",
      tip: "Use it to challenge Prospero's view of Caliban: his feeling for the island suggests he is more than a brute, which helps answers on colonisation and nature.",
    },
  'point: The Tempest: Which line shows Prospero believing that no education could ever change Caliban?':
    {
      why: "Alone in Act 4 Scene 1, remembering Caliban's plot, Prospero calls him a born devil whose nature nurture can never improve. All the care he took to teach him, he says, has been wasted.",
      not: {
        "This island's mine, by Sycorax my mother, / Which thou tak'st from me.":
          "This is Caliban himself, claiming the island from his mother. It shows his grievance against Prospero, not Prospero's view of him.",
        "When thou cam'st first, / Thou strok'st me and made much of me":
          "Caliban remembers Prospero's kindness when he first arrived. It suggests the relationship once worked, the opposite of this claim.",
        "I'll be wise hereafter, / And seek for grace.":
          "At the end Caliban promises to be wise and seek pardon. It suggests he can change, which challenges Prospero's verdict.",
      },
      more: "Nature against nurture was a live question as Europeans met the peoples of the Americas, a context many readers see in the play. Caliban's final promise complicates Prospero's harsh judgement.",
      tip: "Use it in answers on colonialism and on Prospero's power: weigh his verdict against Caliban's own words, and ask whose side the play takes.",
    },
  "word: O brave new world / That has such people in 't! | What does 'brave' suggest here?": {
    why: 'In Act 5 Scene 1 Miranda, who has seen almost no one but her father, sees the King and his lords for the first time. Brave meant splendid or fine, so she is marvelling at how wonderful mankind looks.',
    not: {
      'full of courage, ready to fight':
        'Today brave means courageous, but Miranda is admiring how the people look, not judging their courage in danger.',
      'wild, strange and dangerous':
        'Miranda is amazed, not afraid. She finds the newcomers wonderful, though some of them once plotted against her father.',
      'cruel and frightening to a child':
        "Miranda shows no fear at all. Her word is full of delight, which is why her father's reply sounds so dry.",
    },
    more: 'Prospero answers that it is new to her, a gentle irony: among these splendid people are the men who usurped him and plotted murder. Her innocent wonder sits beside his experience.',
    tip: "Use it to discuss innocence and experience, and the idea of a new world: Miranda's hope set against Prospero's knowledge of what people can do.",
  },
  "word: We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep. | What does 'rounded' suggest here?":
    {
      why: 'In Act 4 Scene 1 Prospero breaks off the wedding masque and tells Ferdinand that everything, even the world, will fade like the vanished show. Rounded means encircled and completed: our short life is ringed by sleep, the sleep of death.',
      not: {
        'made plump and healthy by plenty of rest':
          "Rounded can describe a well-fed shape, but Prospero is speaking of life's limits, not comfort. Sleep here is close to death.",
        'repeated in circles, over and over for ever':
          'A circle might suggest repetition, but Prospero imagines life ending, not returning. The sleep closes it off.',
        'worn smooth, like a pebble, by the years':
          'Nothing suggests wearing down by time. The image is of a small life surrounded by sleep.',
      },
      more: 'The speech links theatre, dreams and life itself: all are insubstantial, and all end. Many readers hear Shakespeare, near the end of his career, reflecting on his own art.',
      tip: "Use it in answers on illusion and on Prospero's power: his magic, like the play, is a show that must end, which prepares for his giving up of magic.",
    },
  'Cowards die many times before their deaths; / The valiant never taste of death but once.': {
    why: 'Caesar says this in Act 2 Scene 2, on the morning of the Ides of March, when Calpurnia begs him to stay at home after a night of storms and terrible omens. He claims that fear is worse than death itself.',
    more: 'The courage is real, but so is the pride: Caesar refuses to be seen as afraid, which is exactly how Decius persuades him to go to the Senate, and to his death.',
    tip: "Use it for Caesar's character: brave or arrogant? His refusal to heed the omens makes him a tragic figure as well as a target.",
  },
  'There is a tide in the affairs of men, / Which, taken at the flood, leads on to fortune': {
    why: 'Brutus says this in Act 4 Scene 3, in his tent, arguing that the army should march to meet the enemy at Philippi rather than wait. Opportunity, he says, is like a tide: catch it at the full or be stranded.',
    more: 'Once again Brutus overrules Cassius, who wanted to wait, and once again he is wrong: the decision leads to defeat. The image of a voyage stuck in shallows hints at what is coming.',
    tip: "Use it to show Brutus's idealism and his poor judgement as a leader, a pattern that begins when he spares Antony.",
  },
  'speaker: The fault ... is not in our stars, / But in ourselves, that we are underlings.': {
    why: 'Cassius says this to Brutus in Act 1 Scene 2, while the crowd cheers Caesar offstage. He argues that they are inferior to Caesar not because fate decrees it, but because they allow it: they could act.',
    not: {
      'Brutus, alone in his orchard before dawn':
        'In the orchard Brutus argues with himself about what Caesar might become. He does not blame the stars or call himself an underling.',
      'Cassius, before the battle at Philippi':
        'Before Philippi Cassius says he now partly believes in omens, having seen birds of ill omen over the army. He has come to fear fate, the opposite of this.',
      'Casca, terrified by the night of storms':
        'During the storm Casca is terrified by the portents and reads them as warnings from the gods. He blames the heavens, not men.',
    },
    more: "Cassius flatters Brutus's pride while appealing to Roman ideals of freedom. The line rejects fate in favour of human choice, though the play keeps testing it with omens, dreams and a ghost.",
    tip: 'Use it in answers on fate and free will, and on Cassius as a manipulator who knows exactly which argument will move Brutus.',
  },
  'speaker: This was the noblest Roman of them all.': {
    why: "Antony says this over Brutus's body in Act 5 Scene 5, after Brutus has run on his own sword. Of all the conspirators, he says, only Brutus acted from honest concern for the common good, not envy of Caesar.",
    not: {
      "Octavius, standing over Brutus's body":
        'Octavius is there and orders that Brutus be buried with honour, but the famous tribute is spoken by Antony, his enemy.',
      "Brutus, standing over Cassius's body":
        "Over Cassius's body Brutus mourns him as a Roman without equal. This tribute is spoken later, over Brutus himself.",
      "Antony, standing over Caesar's body":
        "Over Caesar's body Antony mourns the noblest man that ever lived, but in private grief and fury. This calmer verdict is for one of the men who killed him.",
    },
    more: 'Coming from Antony, who turned Rome against Brutus, the praise carries weight. It invites the audience to see Brutus as a tragic hero whose good intentions led to disaster.',
    tip: "Use it to evaluate Brutus: an enemy's verdict that he was noble, set against the harm his choices caused.",
  },
  'point: Julius Caesar: Which line shows Antony turning the crowd against the conspirators while seeming to praise them?':
    {
      why: 'In his funeral speech in Act 3 Scene 2, Antony keeps calling Brutus and the others honourable, but places the word beside facts that prove Caesar was not ambitious. Repeated, the praise turns into sarcasm, and the crowd turns with it.',
      not: {
        'Friends am I with you all, and love you all':
          'Antony says this to the conspirators themselves after the murder, shaking their bloody hands. He seems friendly, but there is no crowd to turn yet.',
        'O, pardon me, thou bleeding piece of earth, / That I am meek and gentle with these butchers.':
          "Alone with Caesar's body, Antony openly calls the conspirators butchers. It is honest anger in private, not disguised attack in public.",
        'Mischief, thou art afoot, / Take thou what course thou wilt!':
          'Antony says this once the crowd has run riot. It shows his satisfaction that the speech has worked, not the method he used.',
      },
      more: 'Verbal irony drives the speech: Antony never openly accuses anyone, so he keeps his promise not to blame the conspirators while destroying them.',
      tip: "Quote it to analyse persuasion: repetition, irony and evidence. Compare it with Brutus's speech in prose, which appeals to reason rather than feeling.",
    },
  "word: Cry havoc and let slip the dogs of war | What does 'havoc' suggest here?": {
    why: "To cry havoc was to give an army the order to plunder and kill without restraint. Alone with Caesar's body in Act 3 Scene 1, Antony imagines Caesar's spirit giving that order, and prophesies civil war across Italy.",
    not: {
      "a cry of mourning for a great man's death":
        'Antony is mourning, but havoc is not a lament. It is the command that turns soldiers loose on a city.',
      'a call for the people to keep the peace':
        'The opposite: havoc unleashes violence. Antony foresees war, not peace.',
      'a warning for citizens to flee the city':
        'Havoc does threaten citizens, but it is an order to attack, not a warning to escape.',
    },
    more: "The dogs of war are hunting dogs let off the leash, an image of violence that cannot be called back. The soliloquy reveals Antony's true feelings straight after he has shaken the killers' hands.",
    tip: 'Use it to contrast Antony in private and in public: his calm with the conspirators hides this fury, which drives the second half of the play.',
  },
  "word: O judgement, thou art fled to brutish beasts, / And men have lost their reason. | Which word can be heard as a pun on a conspirator's name?":
    {
      why: 'In his funeral speech in Act 3 Scene 2, Antony laments that good judgement has fled to the beasts. Brutish, meaning like a brute, can also be heard as a jab at Brutus, slipping an insult into what sounds like grief.',
      not: {
        judgement:
          'Judgement is addressed as if it were a person who has run away. It carries no pun on a name.',
        fled: "Fled pictures reason running off, but it does not echo any character's name.",
        beasts:
          'Beasts insults those who have lost their reason, but it is a plain word. The hidden play on a name is in the adjective before it.',
      },
      more: 'Antony accuses the crowd of losing their reason while he works on their feelings. The pun, if heard, is typical of his method: attacks that can always be denied.',
      tip: 'Pick out wordplay like this to show how Antony undermines Brutus without ever openly accusing him.',
    },
  "O, beware, my lord, of jealousy; / It is the green-ey'd monster which doth mock / The meat it feeds on.":
    {
      why: 'Iago says this to Othello in Act 3 Scene 3, warning him against jealousy at the very moment he is planting it. Jealousy, he says, is a monster that mocks the person it feeds on.',
      more: "The warning is a trick: by naming jealousy, Iago puts the idea into Othello's mind while seeming loyal. The image of a monster feeding on its victim foreshadows how jealousy will destroy Othello.",
      tip: "Use it to analyse Iago's method, false honesty, and the theme of jealousy as something that consumes from within.",
    },
  'Keep up your bright swords, for the dew will rust them.': {
    why: 'Othello says this in Act 1 Scene 2, when Brabantio arrives at night with armed men to seize him for marrying Desdemona. Calmly, he tells them to sheathe their swords, and stops the fight with a few words.',
    more: 'The line shows the Othello of Act 1: dignified, self-controlled and secure in his record. The audience will later watch that calm destroyed, which makes his fall more painful.',
    tip: "Use it as evidence for Othello's nobility at the start, then contrast it with his loss of control in Act 4.",
  },
  'speaker: Reputation, reputation, reputation! O, I have lost my reputation!': {
    why: 'Cassio cries this in Act 2 Scene 3, after Iago has got him drunk and Othello has stripped him of his post for brawling. He says he has lost the immortal part of himself, and what is left is like a beast.',
    not: {
      'Iago, comforting Cassio after the brawl':
        'Iago is with him, but he tells Cassio that reputation is a false idea, often won and lost without any merit. He mocks the idea here.',
      'Iago, speaking to Othello of the worth of a good name':
        'Later Iago tells Othello that a good name is the jewel of the soul. He praises reputation then because it suits that lie, but he is not mourning his own.',
      'Othello, believing that Desdemona has betrayed him':
        "Othello does mourn his lost peace and career when he believes Desdemona false, in a farewell to war and glory. This cry is Cassio's.",
    },
    more: "Iago's two speeches on reputation say opposite things, each shaped for its listener, which suggests he believes in nothing. Cassio's grief also shows how much honour mattered to a soldier.",
    tip: "Use it with Iago's later speech on good name to show how Iago adapts his words to manipulate each victim.",
  },
  'speaker: Let husbands know / Their wives have sense like them': {
    why: 'Emilia says this in Act 4 Scene 3, helping Desdemona prepare for bed on the night of the murder. She argues that wives feel and desire just as husbands do, and that husbands who mistreat them teach them to do wrong.',
    not: {
      'Desdemona, as Emilia helps her undress':
        "Desdemona cannot believe that any wife would wrong her husband, even for the whole world. The challenge to husbands is Emilia's.",
      'Bianca, angry that Cassio has a new lover':
        "Bianca is jealous when Cassio gives her another woman's handkerchief, but she quarrels with him directly. This argument about all husbands is Emilia's.",
      'Emilia, accusing Othello of murder':
        'In the final scene Emilia does defy Othello and her own husband. But this speech comes earlier, in private, to Desdemona.',
    },
    more: 'The speech is remarkably bold for its time, a demand that husbands see their wives as equals in feeling. Emilia, long silent, is finding the voice she will use to expose Iago.',
    tip: "Use it in answers on women and marriage, contrasting Emilia's realism with Desdemona's innocent loyalty.",
  },
  'point: Othello: Which line shows Iago admitting he will act on a rumour he has not checked?': {
    why: 'Alone at the end of Act 1 Scene 3, Iago repeats a rumour that Othello has slept with his wife, admits he does not know if it is true, and says he will act on mere suspicion as if it were certain.',
    not: {
      'I will wear my heart upon my sleeve / For daws to peck at':
        'This is Iago telling Roderigo that he will never show his real heart. It is about hiding himself, not acting on gossip.',
      'Put money in thy purse.':
        'Iago repeats this to Roderigo to get his money. It shows him exploiting a fool, not acting on an unchecked rumour.',
      'Demand me nothing. What you know, you know.':
        'At the end Iago refuses to explain himself. It shows that his motives stay hidden, not that he acts on suspicion.',
    },
    more: 'Iago gives several motives in the play, the lost promotion, this rumour and others, and none fully explains his hatred. Many readers think the motives are excuses for a malice that needs none.',
    tip: "Use it in answers on Iago's motives, and point out the irony: he condemns on suspicion alone, then teaches Othello to do the same.",
  },
  "word: Put out the light, and then put out the light | What does the second 'light' suggest here?":
    {
      why: 'In Act 5 Scene 2 Othello stands over the sleeping Desdemona with a light. He will put out the flame first, then her life: a flame can be lit again, he reflects, but once her light is out he cannot restore it.',
      not: {
        'the torch he carries into the bedroom':
          'That is the first light. The repeated phrase shifts from the torch to Desdemona, which is what makes the line so chilling.',
        'the trust he once had in Iago':
          "Othello still trusts Iago completely at this point. The light he means to put out is Desdemona's.",
        'the dawn that will soon break outside':
          'Nothing in the speech is about morning. He compares his torch with her life, both of them lights that he can end.',
      },
      more: 'The repetition turns an ordinary action into murder. Othello sees himself as carrying out justice even as he is moved by her beauty, which makes the scene painful to watch.',
      tip: "Use it in answers on Othello's state of mind: calm, poetic and terribly wrong, he believes he is doing justice, not committing murder.",
    },
  "word: Trifles light as air / Are to the jealous confirmations strong / As proofs of holy writ. | What does 'holy writ' suggest here?":
    {
      why: "Holy writ means Scripture, the Bible. Alone in Act 3 Scene 3, holding the dropped handkerchief, Iago says that to a jealous man the smallest trifle seems as certain as the word of God. He plans to leave it in Cassio's lodging.",
      not: {
        'a legal order that the courts must enforce':
          'A writ can be a legal document, but holy writ meant the Bible. Iago is saying trifles seem like sacred truth, not legal orders.',
        'a love letter sealed with a solemn oath':
          'Letters and oaths matter in the play, but the phrase refers to Scripture, the highest proof a believer could have.',
        'a prayer said over someone who has died':
          'Holy writ is not a prayer. It is the written word of God, which no believer would question.',
      },
      more: "The image explains the whole tragedy: a handkerchief, a trifle light as air, becomes Othello's proof. Iago understands jealousy perfectly and uses it as a weapon.",
      tip: "Use it to show Iago's insight into human weakness, and to discuss how the handkerchief, a small object, drives the plot.",
    },
  'If music be the food of love, play on': {
    why: "Orsino, Duke of Illyria, speaks this, the play's opening line, in Act 1 Scene 1. Lovesick for Olivia, he asks his musicians for so much music that his appetite for love will sicken and die.",
    more: 'The image of love as hunger shows Orsino indulging his feelings more than pursuing a real woman. Within a few lines he tires of the music, a hint of how changeable his moods are.',
    tip: "Use the opening to discuss Orsino's self-indulgent love, and compare it with Viola's quieter, more patient love later in the play.",
  },
  'If this were played upon a stage now, I could condemn it as an improbable fiction.': {
    why: 'Fabian says this in Act 3 Scene 4, after Malvolio, cross-gartered and convinced that Olivia loves him, has stormed off insulting Sir Toby and the others. The trick has worked so well that it seems too unlikely to believe.',
    more: "The joke is that it is being played on a stage: Shakespeare winks at the audience about the play's own unlikely plot of twins, disguises and coincidences. This is metatheatre.",
    tip: 'Use it in answers on comedy and structure, and to discuss how the audience is drawn into the trick on Malvolio.',
  },
  "speaker: O time, thou must untangle this, not I, / It is too hard a knot for me t'untie!": {
    why: "Viola says this alone in Act 2 Scene 2, after Malvolio has thrown down Olivia's ring. She realises that Olivia loves her disguise, while she loves Orsino, who loves Olivia: a knot she cannot untie, so she leaves it to time.",
    not: {
      'Olivia, after falling in love with Cesario':
        'Olivia, falling for Cesario, does leave things to fate, but she acts at once by sending the ring. The tangle of all three loves is seen only by Viola.',
      "Sebastian, bewildered by Olivia's love":
        "Sebastian is puzzled by Olivia's love later, but he decides to accept his luck. He does not know enough to see a knot.",
      'Viola, newly shipwrecked on the coast of Illyria':
        'Newly shipwrecked, Viola is planning her disguise and fears for her brother. The love triangle has not yet begun.',
    },
    more: "The knot image suits a comedy built on confusion: only time, which brings Sebastian, can untangle it. Viola's patience contrasts with the impatient passions of Orsino and Olivia.",
    tip: "Use it for structure and for Viola's role: she sees the whole tangle, which makes her the audience's guide, yet she is powerless to fix it.",
  },
  "speaker: I'll be revenged on the whole pack of you.": {
    why: 'Malvolio says this in Act 5 Scene 1, his last line, after learning that Maria forged the letter and that he was made a fool for sport. Feste has just mocked him with his own words, and he storms out.',
    not: {
      'Malvolio, shut up in the dark room':
        'In the dark room Malvolio insists he is not mad and begs for light, paper and ink. He wants to be heard, not yet revenged.',
      'Antonio, believing his friend has betrayed him':
        'Antonio does feel betrayed when Cesario denies knowing him, and says so bitterly. But he never threatens the whole household.',
      'Sir Andrew, after Sebastian has beaten him':
        'Sir Andrew talks of taking the youth who beat him to law, but this threat against everyone belongs to Malvolio.',
    },
    more: 'Olivia says he has been most notoriously abused, and Orsino sends someone after him to make peace. The comedy ends with an outsider unreconciled, an uncomfortable note under the weddings.',
    tip: 'Use it in answers on whether the treatment of Malvolio is fair, and on the darker edges of the comedy.',
  },
  "point: Twelfth Night: Which line shows Orsino conceding that men's love is the less constant?": {
    why: "Talking with Cesario in Act 2 Scene 4, Orsino admits that men's fancies, their loves, are more giddy and wavering than women's, and sooner worn out. Within minutes he claims the opposite: that no woman could love as deeply as he does.",
    not: {
      "There is no woman's sides / Can bide the beating of so strong a passion / As love doth give my heart":
        "This is Orsino's opposite claim, made later in the same scene: that no woman could hold so strong a passion. He contradicts himself.",
      "I'll sacrifice the lamb that I do love":
        'In the final scene Orsino threatens to kill Cesario to spite Olivia. It shows his love turning violent, not an admission about men.',
      "O, when mine eyes did see Olivia first, / Methought she purg'd the air of pestilence":
        "In the opening scene Orsino remembers first seeing Olivia. It describes love at first sight, not men's fickleness.",
    },
    more: "The audience knows that Cesario is a woman who loves Orsino, so his lecture on women's love is full of irony. His contradictions suggest he loves the idea of love more than any person.",
    tip: "Use the two speeches together to show Orsino's changeable, self-absorbed love, and Viola's quiet challenge to it.",
  },
  "word: Make me a willow cabin at your gate | What does 'willow' suggest here?": {
    why: "The willow was the traditional emblem of rejected love. Wooing Olivia for Orsino in Act 1 Scene 5, Viola says that if she loved as he does, she would build a willow hut at Olivia's gate and cry out her name all night.",
    not: {
      'a cheap and simple kind of shelter':
        'A willow cabin would be simple, but the tree is chosen for what it meant: sorrowful, unanswered love.',
      'a tree that bends but never breaks':
        'Willows do bend, but Elizabethans knew the tree as the sign of a disappointed lover, not of toughness.',
      'a hiding place where songbirds nest':
        "Nothing in the speech is about birds. The cabin is a lover's shelter of sorrow, built at the beloved's gate.",
    },
    more: "Viola's speech is passionate because she is describing her own hidden love for Orsino. Olivia, moved by it, falls in love with the speaker instead, so the speech tightens the play's knot.",
    tip: "Use it to show dramatic irony and Viola's sincerity: she woos for her master with feelings that are really her own.",
  },
  "word: Disguise, I see thou art a wickedness / Wherein the pregnant enemy does much. | What does 'pregnant' suggest here?":
    {
      why: 'Pregnant here means quick-witted and resourceful, and the pregnant enemy is the devil, always ready to seize a chance. Alone in Act 2 Scene 2, Viola sees that her disguise has made Olivia fall in love with her.',
      not: {
        'expecting a child, as a young wife might be':
          'Today pregnant means expecting a child, but here it describes a mind full of ideas, ready to seize an opportunity.',
        'slow and easily fooled by tricks':
          'The opposite: the enemy is clever and quick, which is why disguise gives him so much room to work.',
        'full of sorrow and heavy with guilt':
          "Nothing suggests sorrow. The word describes the enemy's cunning, not Viola's feelings.",
      },
      more: "Viola calls her own disguise a wickedness, a rare moment where a comic heroine judges her own trick. The play's disguises bring love and pain together.",
      tip: 'Use it in answers on disguise and identity: Viola sees that deception, even well meant, causes harm she never intended.',
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
  'He has the power to render us happy or unhappy; to make our service light or burdensome; a pleasure or a toil.':
    {
      why: "Scrooge says this in Stave 2 of A Christmas Carol, watching Fezziwig's Christmas Eve ball with the Ghost of Christmas Past. When the Ghost suggests the party cost only a few pounds, Scrooge defends his old master, speaking like his younger self: an employer's small kindnesses decide whether work is a pleasure or a misery.",
      more: 'The balanced pairs set out a choice every employer makes. Scrooge has just described exactly the power he holds over Bob Cratchit, and moments later he admits he would like to say a word to his clerk: the first sign that the lesson is reaching his own life.',
      tip: 'Use it to show that Dickens presents social responsibility through employers. Contrast Fezziwig with the Scrooge of Stave 1, who grudges Bob his coal and his day off, and with the Scrooge of Stave 5, who raises his salary.',
    },
  'This boy is Ignorance. This girl is Want.': {
    why: 'The Ghost of Christmas Present says this near the end of Stave 3 of A Christmas Carol, as its one-day life runs out. From the folds of its robe it brings two wretched, starving children and names them. The Spirit says they belong to Man, meaning all humanity, and cling to it for help.',
    more: 'The short, flat sentences make the naming sound like a verdict. They are allegorical figures, named after what they stand for. The Spirit warns Scrooge to fear the boy most, because ignorance leads to doom unless it is erased: Dickens, who cared deeply about schooling for poor children, makes ignorance the greater danger.',
    tip: "Name the device, allegory, when you quote it. Then link the scene to the hard words Scrooge spoke about the poor in Stave 1, which the Spirit throws back at him straight afterwards, to show Dickens turning Scrooge's views against him.",
  },
  'The case of this unhappy man might be my own. My life tends that way, now.': {
    why: "Scrooge says this in Stave 4 of A Christmas Carol. The Ghost of Christmas Yet to Come has shown him a charwoman, a laundress and an undertaker's man selling a dead man's belongings to old Joe. Scrooge begins to connect the unmourned man with himself, though he does not yet know whose death it is.",
    more: 'The word tends is careful: his life is heading that way but has not arrived, so there is still time. The reader has probably guessed whose death this is, and the dramatic irony builds until Scrooge reads his own name on the gravestone.',
    tip: "Use it to trace Scrooge's growing self-awareness in Stave 4. It marks the turn from watching others to judging himself, so it works well in answers on redemption or on the structure of the visions.",
  },
  'speaker: A solitary child, neglected by his friends, is left there still.': {
    why: 'The Ghost of Christmas Past says it in Stave 2, as it leads Scrooge along the road towards his old school, where one boy has been left behind for Christmas. Scrooge says he knows it, and sobs: the child is his younger self, and his loneliness began long before his greed.',
    not: {
      'Scrooge, watching his younger self read alone':
        'Scrooge does later call the boy a solitary child, laughing and crying over the stories he read, but this line comes first, from the Ghost, before they even reach the school.',
      'The narrator, describing the empty schoolroom':
        'The narrator does describe the boy reading alone by a weak fire, but these words are spoken aloud as dialogue, and Scrooge answers them.',
      'Fan, when she arrives at the school to take her brother home':
        'Fan comes at a later Christmas to take him home for good. She speaks of bringing him home, not of his being left: her visit ends this loneliness.',
    },
    more: 'The present tense of left there still is haunting: the neglected boy still exists inside the old man. Dickens explains Scrooge without excusing him, and the pity the reader feels here is what makes his change believable.',
    tip: 'Use it to argue that Scrooge was made cold rather than born cold. Link it to his tears in this scene and to his wish, soon after, that he had given something to the boy who sang a carol at his door.',
  },
  'speaker: There is nothing on which it is so hard as poverty; and there is nothing it professes to condemn with such severity as the pursuit of wealth!':
    {
      why: 'Scrooge, now a man in the prime of life, says it to Belle in Stave 2, after she tells him that money has taken her place in his heart. He answers bitterly that the world punishes poverty, then condemns anyone who tries to escape it: a defence of the life he has chosen.',
      not: {
        'Belle, as she ends their engagement':
          'Belle is in the scene, but she takes the other side: she says his fear of poverty has swallowed all his nobler hopes, until gain rules him.',
        'Old Scrooge, refusing the charity collectors on Christmas Eve':
          'In Stave 1 the old Scrooge turns the collectors away coldly and briefly. Here he argues with feeling, still young enough to care what the world thinks.',
        'Fred, when his uncle calls him poor':
          'Fred laughs off being called poor in Stave 1. He never defends the pursuit of wealth: he says Christmas has done him good, though it has never made him richer.',
      },
      more: 'The point is not foolish, and Dickens lets it stand: Victorian society did despise the poor. Yet the exclamation sounds defensive, and Belle answers the fear beneath it rather than the argument. The reader watches the younger man justifying the choice that makes the old one.',
      tip: "Quote it to show that Scrooge's greed has a cause, a fear of poverty, which makes him more complex than a simple miser. It pairs well with Belle's reply that his love of gain has driven out every nobler hope.",
    },
  'speaker: Will you decide what men shall live, what men shall die?': {
    why: "The Ghost of Christmas Present says it at the Cratchits' hearth in Stave 3. Scrooge has begged to hear that Tiny Tim will be spared, and the Ghost first repeats Scrooge's own words about the surplus population, then rebukes him: no man has the right to judge which of the poor deserve to live.",
    not: {
      'The Ghost of Christmas Present, as it shows him the children Ignorance and Want':
        "At the end of Stave 3 the Spirit does turn Scrooge's words against him again, but then it repeats his questions about where the poor should go, not this rebuke.",
      "Marley's Ghost, warning Scrooge on Christmas Eve":
        'Marley warns Scrooge of the fate that awaits him and of the duty to others he neglected in life. He never speaks of who should live or die.',
      'A charity collector, when Scrooge refuses to give':
        'The collector hears Scrooge speak of the surplus population in Stave 1, but he answers only mildly. The fierce rebuke comes two staves later, from the Ghost.',
    },
    more: "The rhetorical question turns Scrooge's cold economics into a choice about real lives. The Ghost goes on to compare him to an insect on a leaf passing judgement on the hungry, and Scrooge, who now cares about one particular child, hangs his head in shame.",
    tip: 'Use it to show how Dickens attacks the idea of a surplus population. Track the phrase from Stave 1 to Stave 3: the same words sound monstrous once they are attached to Tiny Tim.',
  },
  "speaker: His wealth is of no use to him. He don't do any good with it.": {
    why: 'Fred says it at his Christmas party in Stave 3, which Scrooge watches unseen with the Ghost of Christmas Present. His wife has just remarked that his uncle is very rich. Fred answers that the money does Scrooge no good and makes him no happier: he pities his uncle rather than envying him.',
    not: {
      "Fred's wife, at the same party":
        "Fred's wife is there, and she is the one who mentions Scrooge's riches, but only as a hint. Fred answers that the money is useless to its owner.",
      'Mrs Cratchit, at the Christmas dinner':
        'Mrs Cratchit attacks Scrooge as stingy and unfeeling when Bob drinks his health, but she speaks of his meanness to others, not of what his money does for him.',
      'A businessman at the Exchange, joking about the dead man':
        "The businessmen in Stave 4 wonder what the dead man did with his money, but they joke about it without pity. Fred's tone is affectionate.",
    },
    more: "Fred's casual grammar keeps him warm and unpompous, and his point is Dickens's own: hoarded money is wasted money. He goes on to say he will invite his uncle every year, so his pity becomes a kind of hope for the man listening unseen.",
    tip: "Use Fred as Scrooge's foil: poorer but happier, and generous with forgiveness. This line lets you argue that Dickens values wealth only for the good it does.",
  },
  'speaker: He frightened every one away from him when he was alive, to profit us when he was dead!':
    {
      why: "The charwoman says it in Stave 4, laughing, as old Joe pays out for the dead man's belongings in his filthy shop. She has taken even the curtains from round his bed. Her point is that a man who drove everyone away left nobody to guard his things: his meanness paid for her profit.",
      not: {
        "Mrs Dilber, the laundress, in old Joe's shop":
          "Mrs Dilber is there and agrees that the dead man only ever looked after himself, but she follows the charwoman's lead. This mocking verdict is the charwoman's own.",
        'Old Joe, as he counts out their money':
          "Old Joe pays for the goods and jokes that the charwoman was born to make her fortune. This laughing summary of the dead man's life is not his.",
        'A businessman at the Exchange, joking about the funeral':
          'The businessmen joke that nobody will attend the funeral unless lunch is provided, but they say nothing of profiting from the death. That boast belongs to the charwoman.',
      },
      more: 'The grasping that Dickens condemned in Stave 1 comes back on the dead man: others now grasp at what he leaves. Scrooge watches in horror, seeing them as demons selling a corpse, and the scene pushes him to see a likeness between the dead man and himself.',
      tip: 'Use it to show how Dickens makes the punishment fit the crime: a life spent grasping ends with others grasping at the bed-curtains. It works well in answers on greed or on death.',
    },
  'speaker: Not a farthing less. A great many back-payments are included in it, I assure you.': {
    why: "Scrooge says it in Stave 5, on Christmas morning, to the portly gentleman who asked him for money for the poor the day before. Scrooge has whispered a sum so large it takes the man's breath away, and the back-payments make up for every year he gave nothing.",
    not: {
      'Scrooge, to the boy he sends to buy the prize turkey':
        'Scrooge does bargain happily with the boy, offering a shilling or half a crown for speed, but those are small rewards, not a gift that pays off years of arrears.',
      "Scrooge, raising Bob Cratchit's salary":
        "Scrooge raises Bob's salary the next morning, after pretending to be angry. That speech looks to the future, helping the struggling family, not to paying back the past.",
      "Old Joe, paying for the dead man's things":
        'Old Joe haggles over sixpences for stolen goods in Stave 4 and boasts of being too generous. He never pays more than he must.',
    },
    more: "Back-payments is the language of accounts, and Dickens lets Scrooge use his old business vocabulary for a new purpose: he treats his years of meanness as a debt to be settled. The gentleman's amazement measures how far he has changed since Stave 1.",
    tip: "Use it to show that Scrooge's redemption is practical, not just a change of mood. Link it to the collectors' visit in Stave 1 to show Dickens's circular structure.",
  },
  'point: A Christmas Carol: Which line shows that Scrooge chose his isolation?': {
    why: 'In Stave 1 the narrator says that keeping people away was exactly what Scrooge liked: he edged along the crowded paths of life, warning sympathy off. The verb warning makes his isolation something he actively chooses and enforces, not something done to him.',
    not: {
      'A solitary child, neglected by his friends, is left there still.':
        'The Ghost of Christmas Past says this of the boy left at school in Stave 2. He is neglected by others, so this isolation was forced on him.',
      'Quite alone in the world, I do believe.':
        "Belle's husband says this after seeing Scrooge alone in his office. It describes his isolation from outside, but says nothing about choice.",
      "No beggars implored him to bestow a trifle, no children asked him what it was o'clock":
        'This shows other people avoiding Scrooge, so it presents his isolation as the way others treat him. It does not show that he wanted it.',
    },
    more: 'Dickens holds both truths: Scrooge was abandoned as a child and chose isolation as a man. The choice matters, because a man who chose to shut people out can choose to let them in, and Stave 5 shows exactly that.',
    tip: 'In an answer on isolation, separate what was done to Scrooge in Stave 2 from what he does himself in Stave 1. The contrast lets you argue that he is responsible for his own change.',
  },
  "point: A Christmas Carol: Which line suggests that Scrooge's greed had developed slowly, like a living thing?":
    {
      why: 'As the Ghost of Christmas Past shows Scrooge in the prime of life, the narrator describes the greed in his eye as a passion that has taken root: a tree still growing, whose shadow will darken his later years. The plant metaphor makes greed a slow, natural growth rather than a single decision.',
      not: {
        'the master-passion, Gain, engrosses you':
          'Belle says that gain now absorbs Scrooge completely. The line shows greed ruling him like a master at this moment, not how slowly it grew.',
        'You fear the world too much':
          "Belle gives the cause of his greed here: fear of poverty and of the world's contempt. It explains why he changed, not how the greed grew.",
        'Avarice, hard-dealing, griping cares? They have brought him to a rich end, truly!':
          "This comes in Stave 4, beside the dead man's bed. It shows where greed ends, in a lonely, unmourned death, not how it grew.",
      },
      more: 'A tree still growing can still be cut down, which is what the Spirits attempt. The image also catches Scrooge halfway: his face is not yet as hard as it will become, so the reader watches the miser of Stave 1 being made.',
      tip: "Use this metaphor to argue that greed in the novella is a process with stages, not a fixed nature. That makes Scrooge's reversal in Stave 5 believable: what grew over years can be pulled up.",
    },
  "point: A Christmas Carol: Which line shows the Ghost of Christmas Present warning that Tiny Tim's death can still be prevented?":
    {
      why: 'The conditional is the key. The child will die only if these shadows remain unaltered, so what the Ghost foresees is a warning, not a fixed fate. If the causes change, Tiny Tim can live, and in Stave 5 he does.',
      not: {
        'I see a vacant seat ... in the poor chimney-corner, and a crutch without an owner, carefully preserved.':
          "This is the Ghost's vision of the empty seat and the unused crutch. It foresees the death plainly, with no condition, so it offers no hope of stopping it.",
        'If he be like to die, he had better do it, and decrease the surplus population.':
          "This begins with if, but the Ghost is quoting Scrooge's own cruel words back at him. It mocks his view; it does not say the death can be prevented.",
        'Will you decide what men shall live, what men shall die?':
          'This rebukes Scrooge for judging which of the poor deserve to live. It attacks his attitude rather than saying the future can change.',
      },
      more: "One small word, if, carries the novella's whole moral: the future depends on present choices. Dickens hands the same responsibility to his first readers, who could act for the real poor children of 1843.",
      tip: "Comment on the conditional whenever you quote this line: it turns prophecy into warning. Link it to Scrooge's plea at his own grave in Stave 4 that the future might still be changed.",
    },
  'point: A Christmas Carol: Which line shows Scrooge assuming that the future he is shown cannot be changed?':
    {
      why: 'At the start of Stave 4 Scrooge greets the silent Phantom by saying it will show him things that will happen. He takes the future as fixed. The Spirit only seems to bow its head, and Scrooge does not question his assumption until he stands beside the grave.',
      not: {
        'Are these the shadows of the things that Will be, or are they shadows of things that May be, only?':
          'At the grave Scrooge asks the opposite question: whether the future is certain or only possible. He now hopes it can be changed.',
        'But if the courses be departed from, the ends will change.':
          'Here, at the grave, Scrooge argues that if people leave their old course, the end it led to will change. That is hope, not certainty.',
        'Assure me that I yet may change these shadows you have shown me, by an altered life!':
          'Scrooge begs to be told that he can still change what he has seen by living differently. He believes change is possible and pleads for it.',
      },
      more: "Stave 4 moves from will to may. Scrooge begins by assuming fate and ends begging for free will, and the novella's hope depends on the answer. The silent Spirit never gives it in words: Scrooge has to prove it by how he lives.",
      tip: "Compare the modal verbs across the stave: will in this opening line, may at the grave. Tracking that shift is a precise way to write about how Scrooge's understanding changes.",
    },
  "word: Another idol has displaced me | What does 'idol' suggest here?": {
    why: 'An idol is a false god, an image worshipped in place of the true one. Belle means that Scrooge now worships money: when he asks which idol, she says it is made of gold. Love has been pushed out of his heart by wealth.',
    not: {
      'he has fallen in love with someone else':
        'Another sounds as if there were a rival, but there is no other woman. The rival Belle means is money.',
      'he has grown lazy and stopped working':
        'Idol sounds like idle, but Scrooge is the opposite of lazy. He works constantly; his work has become his religion.',
      'he admires a famous man of business':
        'In modern English an idol can be a celebrity, but Dickens uses the older, religious sense: something worshipped that should not be.',
    },
    more: 'The Ten Commandments forbid the worship of idols, so the word presents greed as a sin against God, not just a weakness. Belle speaks softly and without anger, which makes the judgement sadder: she seems to be grieving for the man he was.',
    tip: 'Explore the religious connotation of idol in an answer on greed. It lets you argue that Dickens presents money-worship as a false religion that the true spirit of Christmas must replace.',
  },
  'word: Yellow, meagre, ragged, scowling, wolfish; but prostrate, too, in their humility. | Which word suggests that hunger has made the children dangerous as well as pitiful?':
    {
      why: 'Wolfish compares the children to wolves, which are starving and dangerous at once. Hunger has given them the look of predators. Dickens hints that a society which neglects its children breeds a threat to itself, a warning the Ghost makes plain moments later.',
      not: {
        Yellow: 'Yellow suggests sickness and poor health. It invites pity, but carries no threat.',
        meagre: 'Meagre means thin and underfed. It shows their hunger, not any danger they pose.',
        prostrate:
          "Prostrate means lying face down, here in humility at the Spirit's feet. It makes the children helpless, the opposite of dangerous.",
      },
      more: 'The list swings from pity to fear and back again with prostrate. That swing is the point: the poor are victims now, but neglect could turn them into something society should fear.',
      tip: 'Analyse the asyndetic list word by word, then single out wolfish. It lets you link the scene to the 1840s, a decade of hunger and unrest among the poor.',
    },
  'word: Oh cold, cold, rigid, dreadful Death, set up thine altar here | Which word turns Death into a god who demands worship?':
    {
      why: "An altar is where a god is worshipped and offered sacrifices. By telling Death to set up its altar beside the dead man's bed, the narrator makes Death a god whose power is complete in this room, over a man who left no good deeds behind him.",
      not: {
        cold: 'Cold describes the feel of death and of the body. It is repeated for emphasis, but it does not make Death a god.',
        rigid: 'Rigid suggests the stiffness of a corpse. It is physical description, not worship.',
        dreadful:
          'Dreadful shows that Death causes terror. It makes Death frightening, but gives it no temple or worshippers.',
      },
      more: "The narrator speaks to Death directly, an apostrophe, then argues that Death cannot make a good man's memory hateful, because his good deeds live on. This man has none, so Death has full dominion over him: the lesson Scrooge must learn.",
      tip: 'Name the apostrophe and the religious image when you quote this. It shows Dickens raising the scene into a sermon about how a life should be judged.',
    },
  'word: I am as light as a feather, ... I am as merry as a schoolboy. | Which word gives back the childhood the first Spirit showed him?':
    {
      why: 'Schoolboy recalls the lonely boy left at school in Stave 2. On Christmas morning Scrooge compares himself to a merry schoolboy, so the childhood that was neglected is given back to him as joy. The man who wept over his younger self now has the happiness that boy was denied.',
      not: {
        light:
          "Light reverses the heaviness of Scrooge's old gloom, but it does not point back to his childhood.",
        feather:
          'Feather completes the first simile about lightness. It is an image of weightlessness, not of the past.',
        merry:
          'Merry answers his old scorn for Christmas cheer, but it is schoolboy that links the joy to the boy he once was.',
      },
      more: 'The similes tumble out in a breathless list, and a fourth, comparing him to a drunken man, follows at once, so comedy is part of the joy. Dickens presents redemption as a return to the openness of childhood.',
      tip: 'Use this to show the structure coming full circle: the neglected child of Stave 2 becomes the merry schoolboy of Stave 5. It is a precise link for an answer on change or on memory.',
    },
  'Man is not truly one, but truly two.': {
    why: 'Jekyll writes this in the final chapter, his full statement of the case. He explains his belief that every person has two natures, one good and one evil, which his potion was meant to separate.',
    more: 'This idea of the duality of human nature is the heart of the novella. Jekyll even guesses that people may turn out to be made of many selves, not just two.',
    tip: 'Use it for duality, and link it to Victorian respectability, which pushed men like Jekyll to hide their darker desires.',
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
  'I learned to recognise the thorough and primitive duality of man.': {
    why: 'Jekyll writes this in his full statement in Chapter 10. He explains how he came to see that every person is made of two opposite sides, good and evil, from the very beginning.',
    more: "'Primitive' suggests the duality is deep and ancient, part of human nature itself. Darwin's ideas made many Victorian readers fear the animal inside the gentleman.",
    tip: "Use it for duality. Link 'primitive' to Hyde, who is described as ape-like and troglodytic.",
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
  'with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows': {
    why: 'This is the murder of Sir Danvers Carew in Chapter 4 of Jekyll and Hyde, as a maid saw it from her moonlit window. Hyde, suddenly enraged as the old gentleman politely addresses him, clubs him to the ground and tramples him, and the maid faints at what she sees and hears.',
    more: "Ape-like links Hyde to Darwin's argument that humans and apes share ancestors, so the violence suggests the beast surviving inside civilised man. The trampling echoes Chapter 1, where Hyde tramples a child: his violence has grown from cruelty to murder.",
    tip: "Use it to trace how Hyde's violence escalates. Comment on the animal imagery and on the storm of blows, a weather metaphor that makes him a force of nature rather than a person.",
  },
  'the smile was struck out of his face and succeeded by an expression of such abject terror and despair, as froze the very blood of the two gentlemen below':
    {
      why: 'This is Chapter 7 of Jekyll and Hyde, Incident at the Window. Utterson and Enfield, on a Sunday walk, talk to Jekyll at his half-open window. Suddenly his smile vanishes, the window is thrust down, and the two men leave in silence: they have glimpsed something they cannot explain.',
      more: 'Struck out makes the change violent, as if a blow had wiped away the smile. Stevenson shows the horror only through its effect on the watchers, and the chapter, the shortest in the book, ends with Utterson asking God to forgive them while Enfield only nods.',
      tip: "Use it to show Stevenson's method of withholding: the climax happens off the page, glimpsed for a moment. It works in answers on secrecy or on how the novella builds fear.",
    },
  'that masked thing like a monkey jumped from among the chemicals and whipped into the cabinet': {
    why: "Poole, Jekyll's butler, says this in Chapter 8 of Jekyll and Hyde, the last night, explaining why he believes the figure locked in his master's cabinet is Hyde, not his master. He glimpsed a small masked creature among the crates, which cried out and fled upstairs, and the memory chilled him to the spine.",
    more: 'Thing and monkey strip the figure of humanity, and the mask adds concealment to horror. Poole admits his evidence is a feeling, not proof, but the reader trusts his instinct, and it is right.',
    tip: "Use it with the other animal images witnesses use for Hyde, to show that people can only describe him as less than human. Poole's plain speech makes the horror feel real.",
  },
  'My life is shaken to its roots; sleep has left me; the deadliest terror sits by me at all hours of the day and night':
    {
      why: 'Dr Lanyon writes this near the end of his narrative in Chapter 9 of Jekyll and Hyde, after watching Hyde drink the potion and change into Henry Jekyll before his eyes. The sight has broken him: he cannot sleep, he lives in terror, and he expects to die soon.',
      more: 'The metaphor makes Lanyon a tree torn up by the roots, and terror sits beside him like a companion. A rational man of science cannot survive what he has seen. He dies in Chapter 6, long before the reader opens his account.',
      tip: "Use it in answers on science and religion: Lanyon's materialism is defeated by what he witnesses. Link it to his sudden decline in Chapter 6, which this narrative finally explains.",
    },
  "speaker: It wasn't like a man; it was like some damned Juggernaut.": {
    why: 'Enfield says it in Chapter 1, telling Utterson on their Sunday walk how, at three one winter morning, a small man ran into a girl at a corner and trampled calmly over her. A juggernaut is an unstoppable crushing force: to Enfield the act hardly looked human.',
    not: {
      'Utterson, after first meeting Hyde in the by-street':
        'Utterson feels Hyde is hardly human after meeting him in Chapter 2, but he gropes for words to explain a disgust he cannot name. He never saw the trampling.',
      'The police officer, reporting what the maid saw':
        "The officer in Chapter 4 passes on the maid's account of the Carew murder. He describes the murderer as small and wicked-looking, and never saw the child trampled.",
      'Lanyon, describing his midnight visitor':
        "Lanyon describes his visitor's shocking face and oversized clothes in Chapter 9, in a doctor's careful language. The swearing belongs to Enfield, a man about town.",
    },
    more: 'Juggernaut comes from Jagannath, a form of the Hindu god Krishna whose huge chariot is drawn in procession; European travellers claimed worshippers were crushed beneath it. The simile makes Hyde a machine of destruction, and the swearing shows how badly the story shook its teller.',
    tip: "Use it as the first of many descriptions that fail to make Hyde fully human. Note that Enfield's horror comes from the calmness of the act as much as from the violence.",
  },
  'speaker: I thought it was madness, ... and now I begin to fear it is disgrace.': {
    why: "Utterson says it in Chapter 2, after hearing Enfield's story. Rereading Jekyll's will, which leaves everything to Edward Hyde, he had thought it simply mad. Now that he knows Hyde trampled a child, he fears it hides something shameful, perhaps some old sin of Jekyll's.",
    not: {
      'Lanyon, explaining why he now sees so little of Jekyll':
        "Lanyon, later in Chapter 2, says Jekyll's science turned into fanciful nonsense. He blames wrong-headed ideas, not disgrace.",
      'Utterson, after Guest compares the handwriting':
        "After Guest's comparison in Chapter 5, Utterson fears Jekyll has forged a letter for a murderer. These words come much earlier, over the will.",
      'Poole, as he fetches Utterson on the last night':
        "Poole fears foul play on the last night. He is afraid for his master's life, not for his reputation.",
    },
    more: "The shift from madness to disgrace shows Utterson's priorities: a lawyer and a gentleman, he fears scandal as much as crime. The will itself is a clue, since it plans for Jekyll's disappearance, and the reader is invited to suspect more than Utterson can.",
    tip: "Use it to show how reputation drives the respectable men of the novella. Utterson's first instinct is to fear for Jekyll's good name, which explains the secrets he keeps later.",
  },
  'speaker: I swear to God I will never set eyes on him again. I bind my honour to you that I am done with him in this world.':
    {
      why: 'Jekyll swears it in Chapter 5, sitting deathly sick in his cabinet after the murder of Sir Danvers Carew. Utterson has asked whether he is hiding Hyde. Jekyll insists he has finished with Hyde for ever, and hands over a letter that Hyde has supposedly sent him.',
      not: {
        'Jekyll, after his dinner party a year earlier':
          "After the dinner party in Chapter 3 Jekyll is relaxed and claims to be in control. He even asks Utterson to protect Hyde's rights, rather than swearing to break with him.",
        'Lanyon, refusing to speak of Jekyll':
          "Lanyon, in Chapter 6, refuses to hear Jekyll's name and calls him as good as dead. He is breaking with Jekyll, not with Hyde.",
        'Enfield, on a later Sunday walk with Utterson':
          'Enfield, in Chapter 7, says they will never see more of Hyde, but he is guessing, not swearing. Only Jekyll could bind his honour to it.',
      },
      more: 'The oath is sincere, and the irony is cruel: Jekyll keeps it for two months, but Hyde later returns unbidden. Jekyll admits that his real worry is his own character, and Utterson is surprised by his selfishness.',
      tip: "Use it to show Jekyll's mistaken belief that he can control Hyde by willpower alone. The later chapters, and his own statement, show how wrong he is.",
    },
  'speaker: I have had a shock, ... and I shall never recover. It is a question of weeks.': {
    why: 'Lanyon says it in Chapter 6, when Utterson visits and finds him visibly dying, with a look of deep terror. He calls himself a doomed man but refuses to explain. Only in Chapter 9 does the reader learn that the shock was seeing Hyde turn into Jekyll.',
    not: {
      'Jekyll, talking to Utterson from his window':
        'Jekyll, at the window in Chapter 7, says he is very low and it will not last long, which sounds similar. But he speaks of low spirits, not a shock.',
      'Jekyll, in his letter about his new seclusion':
        "Jekyll's letter in Chapter 6 speaks of a punishment and a danger he cannot name. He asks Utterson to respect his silence, not to expect his death.",
      'Poole, when he fetches Utterson on the last night':
        'Poole tells Utterson he has been afraid for a week and can bear it no more. He fears for his master; he does not expect to die.',
    },
    more: "Lanyon's fragments model the novella's method: the truth is hinted at, then withheld. He hints that full knowledge would make anyone glad to leave life, so knowledge itself sounds fatal. The reader is left with a dying witness and a sealed envelope.",
    tip: "Use Lanyon as evidence of how dangerous Jekyll's discovery is. His decline, unexplained here, is a structural clue that his own narrative in Chapter 9 resolves.",
  },
  'speaker: has the greed of curiosity too much command of you?': {
    why: "Hyde asks it in Chapter 9, after mixing the potion in Lanyon's consulting room at midnight. He offers a choice: let him leave with the glass, or stay and see a marvel. Lanyon's curiosity wins, and he watches Hyde turn into Henry Jekyll.",
    not: {
      'Jekyll, mocking Lanyon after a dinner party':
        "Jekyll does mock Lanyon in Chapter 3 as a narrow-minded pedant, but behind his back, to Utterson. This challenge is made to Lanyon's face.",
      'Enfield, explaining why he never asks questions':
        'Enfield, in Chapter 1, avoids questions because one leads to another like a rolling stone. He warns against curiosity; he does not tempt anyone with it.',
      "Utterson, before breaking Lanyon's seal":
        "Utterson is tempted to open Lanyon's inner envelope in Chapter 6, but resists out of loyalty to his dead friend. Nobody taunts him.",
    },
    more: "Greed of curiosity turns curiosity into an appetite, almost a sin, and Hyde's mocking tone makes him sound like a tempter. Lanyon, the materialist who scorned Jekyll's ideas, is lured into knowledge that will kill him.",
    tip: "Use it in answers on science and the limits of knowledge. Hyde's offer presents curiosity as a temptation with a terrible price, like forbidden knowledge in older stories.",
  },
  "point: Jekyll and Hyde: Which line shows Utterson choosing to tolerate other men's sins rather than condemn them?":
    {
      why: "The narrator gives this as one of Utterson's sayings in Chapter 1, beside his joke about Cain's heresy. Like Cain refusing to be his brother's keeper, he lets other men go to ruin in their own way, and prefers to help them rather than to reprove them.",
      not: {
        'I thought it was madness, ... and now I begin to fear it is disgrace.':
          "Over Jekyll's will in Chapter 2, Utterson fears disgrace. He is judging his friend's link with Hyde, not tolerating it.",
        'Well, let our name be vengeance.':
          'On the last night, in Chapter 8, Utterson resolves to break into the cabinet and avenge his friend. That is pursuit and punishment, the opposite of looking away.',
        'This Master Hyde, if he were studied, ... must have secrets of his own; black secrets, by the look of him':
          'In Chapter 2 Utterson judges Hyde by his looks and assumes he hides black secrets. He is condemning Hyde, not tolerating him.',
      },
      more: "Utterson's tolerance is kind, but it is also a habit of not asking, and the novella tests it. A man who lets his brother go to the devil may be loyal, yet his silence helps the secret survive until it is too late.",
      tip: "Use it to discuss the gentlemen's code of silence. Pair Utterson's tolerance with Enfield's rule of asking no questions, and argue that their discretion lets Hyde operate unchallenged.",
    },
  "point: Jekyll and Hyde: Which line suggests that Hyde's evil cannot be pinned down in words?": {
    why: "After meeting Hyde in Chapter 2, Utterson lists everything against him, yet none of it explains his disgust: Hyde gives an impression of deformity, but has no defect anyone could name. Even a lawyer who lives by evidence cannot put Hyde's evil into words.",
    not: {
      "the man trampled calmly over the child's body and left her screaming on the ground":
        'Enfield describes exactly what Hyde did to the child in Chapter 1. The cruelty is put into plain, precise words.',
      'Particularly small and particularly wicked-looking, is what the maid calls him':
        "The police officer passes on the maid's description in Chapter 4. Small and wicked-looking are definite words, not a failure to describe.",
      'He was small, as I have said; I was struck besides with the shocking expression of his face':
        "Lanyon, a doctor, describes his visitor's size and shocking expression in Chapter 9. He can name what he sees.",
    },
    more: "Stevenson keeps Hyde vague on purpose, so each reader supplies the horror from imagination. Utterson's legal mind wants evidence, and his failure to find any suggests that Hyde's evil is spiritual rather than physical.",
    tip: 'Use this in answers on how Hyde is presented. Arguing that he is defined by what cannot be said is more precise than simply calling him evil.',
  },
  "point: Jekyll and Hyde: Which line shows Utterson putting his friend's reputation before the truth?":
    {
      why: "On the last night, in Chapter 8, Utterson pockets Jekyll's papers and tells Poole to say nothing: if Jekyll has fled or died, they can at least protect his reputation. Even with Hyde's body on the floor, his first thought is his friend's good name.",
      not: {
        'I shall consider it my duty to break in that door.':
          "Here Utterson decides to force the cabinet door, even though he wishes to spare Jekyll's feelings. For once, duty to find the truth wins.",
        'If you will come with me in my cab, ... I think I can take you to his house.':
          "In Chapter 4 Utterson offers to lead the police officer to Hyde's house in Soho. He is helping the law find the murderer.",
        'I want to ask the name of that man who walked over the child.':
          'In Chapter 1 Utterson presses Enfield for the name of the man who trampled the child. He is seeking the truth, not hiding it.',
      },
      more: "Credit here means reputation, and Utterson's habit of protecting it runs through the novella: he locks the suspicious note in his safe in Chapter 5 and keeps Lanyon's envelope sealed. Stevenson suggests that respectable discretion is part of what lets Hyde survive.",
      tip: 'Use it in answers on reputation and Victorian respectability. Even at the climax Utterson thinks first of scandal, which shows how deep the code of silence runs.',
    },
  'point: Jekyll and Hyde: Which line shows Jekyll excusing himself by blaming his other self?': {
    why: "In his statement in Chapter 10, Jekyll describes how he excused Hyde's acts in the early days: the situation seemed outside ordinary laws, so he told himself that Hyde alone was guilty, and his conscience slept. He writes of himself in the third person, as if from a distance.",
    not: {
      'I have brought on myself a punishment and a danger that I cannot name.':
        'In his letter in Chapter 6, Jekyll says he has brought punishment and danger on himself. He accepts the blame rather than shifting it.',
      'I stood already committed to a profound duplicity of life.':
        'Jekyll admits here that he hid his pleasures and lived a double life long before Hyde existed. That confesses his own fault.',
      'Many a man would have even blazoned such irregularities as I was guilty of':
        'Jekyll admits his irregularities and his shame here, before the experiment. Hyde does not yet exist, so there is nobody else to blame.',
    },
    more: 'The repetition of Hyde, and Hyde alone, sounds like a man convincing himself. The excuse becomes the trap: by refusing responsibility for Hyde, Jekyll lets that side of him grow stronger.',
    tip: 'Use it to argue that Jekyll is not simply a victim of his drug. His self-deception is a moral choice, which makes the novella a study of responsibility as well as of science.',
  },
  "word: Something troglodytic, shall we say? | What does 'troglodytic' suggest here?": {
    why: 'Utterson gropes for this word in Chapter 2, just after meeting Hyde. A troglodyte is a cave-dweller, so the word pushes Hyde back to a primitive, early stage of humanity: Utterson senses something in him that is not fully evolved.',
    not: {
      'deformed, like a hunchback':
        'Hyde does give an impression of deformity, but that is a separate idea. Troglodytic is about being primitive, not misshapen.',
      'cunning, like a hidden thief':
        'Troglodytes lived in caves, but the word does not mean sly or criminal. It describes an early, uncivilised kind of human.',
      'diseased, like a plague victim':
        'Nothing in the word suggests illness. Utterson is reaching for something primitive, not sick.',
    },
    more: 'The hesitant question, shall we say, shows Utterson searching for a word that will not quite come. Many readers link the idea to Victorian fears, after Darwin, that civilised people might slide back towards the animal.',
    tip: 'Use it with other primitive and animal images of Hyde to argue that Stevenson presents evil as a throwback. Link it to late-Victorian anxiety about evolution and degeneration.',
  },
  "word: a large, well-made, smooth-faced man of fifty, with something of a slyish cast perhaps, but every mark of capacity and kindness | Which word quietly hints at the secret behind Jekyll's respectable face?":
    {
      why: 'Stevenson introduces Jekyll in Chapter 3 as handsome, well built and kind-looking. Only slyish, softened by perhaps, hints that something sly lies behind the respectable face. On a second reading the word is a clue to his secret life.',
      not: {
        large:
          "Large describes Jekyll's build, which contrasts with Hyde's small size. It suggests nothing hidden.",
        'well-made':
          'Well-made praises his body and bearing. It adds to the picture of a respectable gentleman.',
        kindness: 'Kindness is what his face shows openly. The clue is the slyness behind it.',
      },
      more: "The sentence buries the hint among praise, between capacity and kindness, just as Jekyll's vices are buried in a good reputation. Readers who know the ending notice it; first readers easily miss it.",
      tip: 'Use it to show how Stevenson plants clues about duality early. One small word in a flattering description lets you argue that the double life is visible to a careful reader.',
    },
  "word: A great chocolate-coloured pall lowered over heaven | What does 'pall' suggest here?": {
    why: "A pall is the heavy cloth laid over a coffin. On the morning after the Carew murder in Chapter 4, the season's first fog hangs over London like one as Utterson drives the police to Hyde's house: the city itself seems dressed for a funeral.",
    not: {
      'a pale, thin mist lifting from London':
        'Pall sounds like pale, but this fog is thick and chocolate-coloured, and it lowers rather than lifts.',
      'a sense that London has grown dull':
        'As a verb, to pall means to become boring, but here it is a noun: a dark covering lowered over the sky.',
      'a theatre curtain rising on London':
        'The fog does shift like stage lighting, but a pall lowers like a shroud. It suggests death, not a performance beginning.',
    },
    more: 'The colour is oddly homely, chocolate, but the image is of death and concealment. The fog hides the city as Hyde hides inside Jekyll, and its shifting gloom makes Soho look like a place in a bad dream.',
    tip: 'Use the fog as a symbol of secrecy in answers on setting. The funeral image of the pall ties the weather to the murder that has just happened.',
  },
  "word: This familiar that I called out of my own soul | What does 'familiar' suggest here?": {
    why: 'In Chapter 10 Jekyll calls Hyde a familiar that he called out of his own soul. In folklore a familiar is a spirit, often a demon, that serves a witch or sorcerer. Jekyll casts himself as a magician summoning an evil servant, not a scientist running an experiment.',
    not: {
      'a close friend he knows very well':
        'Familiar can mean well known, but here it is a noun with its old supernatural sense. Hyde is no friend.',
      'a habit he has slowly grown used to':
        'Something familiar can be a habit, but Jekyll means a being he summoned and sent out alone to do as it pleased.',
      'a relative with the same family features':
        "Familiar shares a root with family, but Hyde is not a relative. He is Jekyll's own evil side, made into a servant.",
    },
    more: "The supernatural word sits strangely in a scientist's statement, and suggests that his science has become something close to black magic. It also makes Hyde a servant who will turn on his master, as such spirits do in old stories.",
    tip: "Use the word to discuss the novella's blend of science and the Gothic. It shows Jekyll describing his experiment in the language of sin and sorcery.",
  },
  'It is a most miserable thing to feel ashamed of home.': {
    why: "The adult Pip, narrating Great Expectations, says this at the start of Chapter 14. Newly bound apprentice to Joe at the forge, he now sees his home through Estella's eyes and finds it coarse and common. The older narrator judges his younger self, and calls the shame miserable.",
    more: 'The present tense turns a memory into a general truth, which is how the older Pip passes judgement. He admits there may be black ingratitude in the feeling, so the novel is honest about snobbery while showing how it hurts the snob.',
    tip: "Use it to show the double voice of retrospective narration: the boy who felt the shame, and the man who condemns it. It anchors an answer on class or on Pip's relationship with Joe.",
  },
  'In jail and out of jail, in jail and out of jail, in jail and out of jail.': {
    why: 'Magwitch says this in Chapter 42 of Great Expectations, beginning the story of his life for Pip and Herbert. He sums up his whole past in one repeated phrase: from a child stealing turnips to a grown man, he has been in and out of prison all his life.',
    more: "The threefold repetition makes the cycle feel endless, and his plain, rough speech refuses to make a song of it. His story shows how a boy with nobody to care for him was pushed into crime, which deepens the reader's sympathy for the convict Pip first feared.",
    tip: "Use it in answers on crime and justice. Magwitch's life, set beside Compeyson's lighter sentence for the same crime, shows Dickens attacking a system that judged men by their class.",
  },
  'speaker: Do you want to be a gentleman, to spite her or to gain her over?': {
    why: "Biddy asks it in Chapter 17, on a Sunday walk by the river on the marshes, after Pip confesses that he wants to be a gentleman because of the beautiful young lady at Miss Havisham's. Her quiet question exposes his motive: either way, his ambition depends on Estella.",
    not: {
      'Herbert, when Pip says he adores Estella':
        "Herbert hears of Pip's love for Estella in London in Chapter 30, and thinks him lucky to be meant for her. He does not question why Pip wants to be a gentleman.",
      'Joe, after Pip confesses his lies about Satis House':
        'Joe, in Chapter 9, tells Pip that lies are no way to stop being common. He talks about honesty, not about Estella.',
      "Miss Havisham, on Pip's first visit to Satis House":
        'Miss Havisham asks Pip what he thinks of Estella on his first visit, but she encourages his admiration rather than questioning it.',
    },
    more: 'Biddy is wise in a plain way, and she adds that if he means to spite Estella he might do better not to care at all. Pip half knows she is right and resents it. Dickens uses Biddy to show the reader what Pip refuses to see.',
    tip: 'Use Biddy as a foil to Estella: she offers honest affection and good sense, which Pip overlooks. This question pinpoints the false motive behind his great expectations.',
  },
  'speaker: I am what you have made me.': {
    why: 'Estella says it in Chapter 38 at Satis House, when Miss Havisham, fiercely possessive, accuses her of coldness. Estella answers that she is exactly what Miss Havisham trained her to be, proud and hard, and tells her to take all the praise and all the blame.',
    not: {
      'Pip, when Magwitch reveals he paid for everything':
        'Pip is horrified when Magwitch claims to have made him a gentleman in Chapter 39. He never accepts it so calmly, and this line is spoken to Miss Havisham.',
      'Estella, meeting Pip in the ruins at the end':
        'In the ruins in Chapter 59 Estella says suffering has changed her for the better. She speaks of being reshaped, not of being what someone made her.',
      'Miss Havisham, begging Pip to forgive her':
        'Miss Havisham, kneeling in Chapter 49, grieves over what she has done to Estella. The accusation in this line is aimed at her, not spoken by her.',
    },
    more: "The short sentence turns Miss Havisham's plan against her: she raised Estella to break men's hearts, and the girl has no warmth left for her either. It is one of the novel's clearest statements that people are shaped by how they are brought up.",
    tip: "Pair it with Magwitch's making of Pip to argue that both benefactors treat a child as a project. The novel asks whether either child can become free of what was made of them.",
  },
  "speaker: Take nothing on its looks; take everything on evidence. There's no better rule.": {
    why: 'Jaggers says it in Chapter 40. Pip, having learned that the convict Magwitch is his benefactor, admits he always supposed it was Miss Havisham, because it looked so like it. Jaggers answers that there was never a particle of evidence: Pip believed what he wished to believe.',
    not: {
      "Jaggers, announcing Pip's great expectations":
        'When Jaggers announces the expectations in Chapter 18, he forbids Pip to ask who the benefactor is. He gives no rule about evidence then.',
      'Wemmick, giving Pip advice at the office in Little Britain':
        "Wemmick's office advice is about getting hold of portable property, a practical, money-minded motto. Rules of evidence belong to Jaggers the lawyer.",
      'Joe, after Pip confesses his lies':
        "Joe, in Chapter 9, warns Pip against telling lies, but he speaks from the heart, not from the law. Evidence is Jaggers's language.",
    },
    more: "The lawyer's rule passes judgement on the first two stages of the novel. Pip read Miss Havisham's interest as proof that she was his patron and built his hopes on appearances. The reader, misled along with him, learns the same lesson.",
    tip: "Use it in answers on appearance and reality, or on Pip's mistakes. Jaggers's cold legal language contrasts with Joe's warmth, but here it states a truth Pip needed to hear.",
  },
  'point: Great Expectations: Which line shows Estella warning Pip that she is unable to love him?':
    {
      why: 'In Chapter 29, grown up and home from France, Estella walks with Pip in the garden at Satis House and tells him plainly that she has no heart: no softness, no sympathy. She is warning him not to hope for love from her.',
      not: {
        'And what coarse hands he has! And what thick boots!':
          "On his first visit in Chapter 8 Estella mocks Pip's hands and boots. It is contempt for a common boy, not a warning about love.",
        'I am what you have made me.':
          'In Chapter 38 Estella says this to Miss Havisham, not to Pip. It explains her coldness, but it is not a warning to him.',
        'I have been bent and broken, but ... into a better shape.':
          'In the ruins in Chapter 59 Estella says suffering has made her better. It suggests she may now be capable of feeling, the reverse of this claim.',
      },
      more: "Estella is honest with Pip, which makes her strangely fair even when she is cruel. Pip ignores the warning, as he ignores Biddy's good sense, and goes on loving her against reason. Miss Havisham's training has worked all too well.",
      tip: 'Use it to argue that Estella is a victim of her upbringing rather than a simple villain. She warns Pip honestly; much of his suffering comes from not listening.',
    },
  "word: life is made of ever so many partings welded together | What does 'welded' suggest here?":
    {
      why: "Welding joins pieces of metal into one by heat and hammering, the blacksmith's craft. Joe, leaving Pip's London rooms in Chapter 27, uses his own trade to say that partings are part of life: joined together, they make it whole rather than destroying what came before.",
      not: {
        'partings break people apart for ever':
          'Welding joins things; it does not break them. Joe sees a parting as part of a life, not the end of a bond.',
        'partings melt away in time and are soon forgotten':
          'Welding uses heat, but the metal is joined, not melted away. Joe does not expect this parting to be forgotten.',
        'partings are forced on people by others':
          'Joe blames nobody and takes any fault on himself. He does not suggest that anyone forces the parting on them.',
      },
      more: "Joe's speech is plain and rhythmic, and its dignity shames Pip, who has been cold and embarrassed by him. Joe goes on to say he belongs at the forge: he knows who he is, while the young gentleman does not.",
      tip: "Use Joe's craft metaphor to show how Dickens gives wisdom to his least educated characters. It also fits the novel's pattern of iron and chains, from the convict's leg-iron onwards.",
    },
  'word: Heaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts. | Which word presents tears as something that clears and refreshes?':
    {
      why: 'Rain washes away dust and brings dry ground back to life. Pip, crying at the finger-post as he leaves the village for London in Chapter 19, says his tears are rain on the dust that had blinded him: crying clears his sight and softens his hard heart.',
      not: {
        ashamed:
          'Ashamed is the feeling the line rejects. It names what we need not feel, not what tears do.',
        blinding:
          'Blinding describes the dust that tears wash away. It is the problem, not the cure.',
        hard: 'Hard describes the hearts the dust lies over. It shows what needs softening, not what softens it.',
      },
      more: 'Pip says he was better after crying, more aware of his own ingratitude. The older narrator values feeling over the pride that made him a snob, and the mists rising as the coach leaves give the first stage a hopeful, uncertain end.',
      tip: "Use the metaphor to show that the novel treats emotion as a moral strength. It is a strong moment for an answer on Pip's guilt about Joe and the forge.",
    },
  'women feel just as men feel; they need exercise for their faculties, and a field for their efforts, as much as their brothers do':
    {
      why: 'Jane says this in Chapter 12 of Jane Eyre, now governess to Adèle at Thornfield. Pacing the third-storey corridor and longing for a wider life, she turns to the reader: women are restless too, and need work and purpose as much as men do.',
      more: 'The plain, balanced comparison makes a radical claim calmly, and some early reviewers attacked the novel as rebellious. In the same passage Jane hears the strange laugh on the third storey, a hint of another woman who is far more confined.',
      tip: "Use it in answers on gender and equality. It is Jane's clearest statement that women's frustration comes from restraint, not from their nature, and it links her own story to millions of others.",
    },
  'I am no bird; and no net ensnares me; I am a free human being with an independent will': {
    why: 'Jane says this to Rochester in the orchard in Chapter 23 of Jane Eyre. Believing he will marry Blanche Ingram, she struggles to leave him, and he tells her not to struggle like a frantic bird. She answers that she is a free person, with a will of her own.',
    more: "She turns his metaphor against him: birds are caged and netted, and she refuses both. Bird imagery runs through the novel from Bewick's book of birds in Chapter 1, and here Jane claims the freedom the caged birds lack. Moments later, Rochester proposes.",
    tip: 'Use it to show Jane asserting equality before she has money or status. It works in answers on independence, on gender, or on imprisonment and escape.',
  },
  'speaker: I am not deceitful: if I were, I should say I loved you; but I declare I do not love you':
    {
      why: 'Ten-year-old Jane says it to her aunt in Chapter 4, just after Mr Brocklehurst has left. Mrs Reed has told him that Jane is deceitful. Jane turns on her and speaks the truth: she dislikes her aunt and will not pretend to love her. Afterwards she feels a strange sense of freedom and triumph.',
      not: {
        'Jane, to Mrs Reed as her aunt lies dying':
          "At Mrs Reed's deathbed in Chapter 21, Jane offers forgiveness and asks for kindness. She no longer attacks; it is her aunt who stays bitter.",
        'Jane, to St John when he asks her to marry him':
          'Jane refuses to marry St John in Chapter 34, but she offers to go with him as his sister. This blunt outburst against her guardian belongs to the girl of ten.',
        'Rochester, to Blanche Ingram at the house party':
          'Rochester pretends to court Blanche at the house party but never speaks to her like this. He is the deceiver there, trying to make Jane jealous.',
      },
      more: "Jane's first open rebellion is a speech of plain truth. She feels an invisible bond burst, then soon tastes the bitter aftertaste of revenge. Brontë makes honesty Jane's defining quality from childhood, and passion the force she must learn to govern.",
      tip: "Use it to show Jane's passion and her refusal to be falsely labelled. Compare this outburst with the self-control she learns from Helen Burns at Lowood.",
    },
  'speaker: I believe; I have faith: I am going to God.': {
    why: 'Helen Burns says it in Chapter 9, when Jane creeps into her room at Lowood on the night she dies of consumption. Jane asks where she is going, and Helen answers calmly with her faith. The two girls fall asleep together, and Helen dies in the night.',
    not: {
      'St John, in his last letter from India':
        "St John's last letter, at the very end of the novel, also faces death with faith, but he writes of his Master calling him, from India.",
      'Jane, collapsing at the door of Moor House':
        "At Moor House in Chapter 28 the starving Jane does say she believes in God and must wait His will. But she is about to be rescued; these words are Helen's.",
      'Mrs Reed, on her deathbed at Gateshead':
        'Mrs Reed dies in Chapter 21 still bitter towards Jane, unable to accept forgiveness. She speaks of her guilt over a hidden letter, not of faith.',
    },
    more: "Helen's calm faith contrasts with Brocklehurst's harsh religion and with Jane's own fiery nature. Years later her grave is marked with one Latin word meaning I shall rise again, which echoes her certainty.",
    tip: "Use Helen as one of the novel's models of religion, set beside Brocklehurst's hypocrisy and St John's cold ambition. Her faith teaches Jane endurance, though Jane never shares her meekness.",
  },
  "speaker: God and nature intended you for a missionary's wife.": {
    why: 'St John Rivers says it in Chapter 34, as he presses Jane to marry him and join his mission in India. He tells her she is formed for labour, not for love: he wants a useful wife for his work, not a woman he loves. Jane offers to go as his sister instead.',
    not: {
      'St John, offering Jane the village school':
        'When St John offers Jane the school at Morton in Chapter 30, he warns her the work is humble. He does not yet speak of marriage.',
      'Mr Brocklehurst, interviewing Jane at Gateshead':
        "Brocklehurst questions young Jane about hell and the Psalms in Chapter 4, and promises to correct her at Lowood. He never imagines her as anyone's wife.",
      'Diana Rivers, when Jane tells her of the proposal':
        'Diana is appalled when Jane tells her of the plan in Chapter 35, and says Jane would not survive three months in India. She opposes the marriage.',
    },
    more: "St John's certainty is chilling: he claims God's authority for his own wishes, and Jane feels the pressure as almost irresistible. The novel sets his cold, ambitious faith against Rochester's passion, and Jane must find her way between them.",
    tip: "Use it in answers on religion or on love and marriage. St John's proposal offers a marriage of duty without love, the opposite of the equal partnership Jane demands.",
  },
  'point: Jane Eyre: Which line shows Jane refusing to give up her principles for the man she loves?':
    {
      why: 'In Chapter 27 Rochester begs Jane to live with him abroad as his wife in all but law. Her feelings plead for him, but she answers that she will keep the law of God and man. She loves him, yet refuses to become his mistress, and leaves Thornfield that night.',
      not: {
        'I am an independent woman now.':
          'At Ferndean in Chapter 37 Jane tells Rochester she now has money of her own. She is returning to him, free and equal, not refusing him.',
        'Reader, I married him.':
          "The last chapter opens with Jane's marriage to Rochester. By then he is free to marry, so love and principle no longer conflict.",
        'I scorn your idea of love':
          'Jane says this to St John in Chapter 34. She is refusing a loveless proposal from a man she does not love as a husband.',
      },
      more: "Brontë personifies Feeling pleading with Jane, and her reply holds to rules made for exactly such moments of temptation. The novel presents self-respect as a kind of faith, and Jane's choice costs her everything she has.",
      tip: "Use it to argue that Jane's independence is moral, not only financial. This choice, made penniless, contrasts with her return in Chapter 37, made with money and on equal terms.",
    },
  "word: I was a discord in Gateshead Hall: I was like nobody there | What does 'discord' suggest here?":
    {
      why: 'A discord is a clash of notes that do not sound well together. Looking back on the red-room in Chapter 2, the adult Jane says she had nothing in harmony with the Reeds: she was too different from them to fit, through no plan or fault of her own.',
      not: {
        'she starts quarrels with the family on purpose':
          'Jane does fight John Reed, but only after he attacks her. Discord describes a natural clash between her and the family, not quarrels she starts.',
        'she is the loudest, noisiest child in the house':
          'Discord can mean harsh noise, but Jane is a quiet child who hides in a window-seat with a book. The clash is in temperament, not volume.',
        'she is too young to understand the adults around her':
          "Jane is young, but she understands the Reeds well enough. The word is about difference, not about a child's confusion.",
      },
      more: 'The musical metaphor continues with harmony in the next clause, so the family becomes a tune Jane cannot join. The older narrator understands what the child could not: the Reeds disliked her because she was unlike them, not because she was wicked.',
      tip: "Use it in answers on isolation or class. It shows the adult narrator explaining the child's suffering through a calm image, a good example of the novel's double perspective.",
    },
  "word: A Christmas frost had come at midsummer; a white December storm had whirled over June | What does 'frost' suggest here?":
    {
      why: 'Frost kills young plants, and a frost at midsummer comes when nothing is ready for it. Alone in her room after the wedding is stopped in Chapter 26, Jane uses it for her hopes: at their height, on the day she should have married, they have been killed at a stroke.',
      not: {
        'her sorrow will soon pass, as winters always do':
          'Jane says her cherished wishes are like corpses that can never revive. She expects no spring to follow this winter.',
        'the weather on her wedding day was bitter':
          'The wedding was on a quiet summer morning. The winter here is in her mind, not in the weather.',
        'she longs to be back at the Christmases of her childhood':
          'Christmas marks the depth of winter here, not happy memories. Her childhood Christmases at Gateshead were lonely, and she was shut out of the celebrations.',
      },
      more: 'The weather has turned inside her mind: Brontë makes summer winter to show the shock. Jane goes on to compare her dead hopes to the first-born struck down in Egypt, so the image of sudden, total loss keeps growing.',
      tip: "Use it in answers on seasons and feeling. The proposal came on Midsummer-eve, so this frost shows how carefully Brontë ties weather to Jane's hopes.",
    },
  'I desire the company of a man who could sympathise with me; whose eyes would reply to mine.': {
    why: 'Robert Walton writes this to his sister, Margaret Saville, in Letter 2, from Archangel. He has hired a ship and is gathering a crew for his voyage towards the Pole, but he has no friend who shares his mind, and he longs for someone whose look would answer his own.',
    more: "The novel opens on loneliness, and the Creature's story will turn on the same want of a companion. Walton's wish is granted in the most dangerous way: the friend he finds is Victor, a man ruined by the ambition Walton shares.",
    tip: "Use Walton as a mirror: link his wish for a friend to the Creature's demand for a companion in Chapter 17, and argue that loneliness, not evil, drives the novel.",
  },
  'I am malicious because I am miserable. Am I not shunned and hated by all mankind?': {
    why: 'The Creature says this in Chapter 17, in the hut on the mountain, after Victor refuses to make him a female companion. Instead of threatening, he reasons with his maker: his cruelty is the result of his suffering, because every human being he meets shuns and hates him.',
    more: "The short, balanced sentence states the novel's argument from nurture: misery comes first, and malice follows from it. The Creature does not deny his crimes; he explains them by the way mankind has treated him, and the question that follows makes the reader answer it.",
    tip: "Quote it in an answer on nature and nurture, then test it against his confession over Victor's body in Chapter 24, where he admits that evil became his good: does misery excuse everything he did?",
  },
  'speaker: I almost began to think that I was the monster that he said I was.': {
    why: "Justine Moritz says it in Chapter 8, when Elizabeth and Victor visit her in prison after she is condemned for William's murder. She explains that she confessed to a crime she did not commit because her confessor threatened her with excommunication and hell until she half believed him.",
    not: {
      'The Creature, after Felix beats him away':
        "The Creature is called a monster all his life, so the words seem to fit him, but no confessor ever bullies him into a false confession. Justine's line anticipates his story.",
      'Elizabeth, visiting Justine in prison':
        'Elizabeth is there and is the one spoken to, but she defended Justine at the trial and never doubts her innocence. The speaker is the woman being called a monster.',
      'Victor, held in prison in Ireland':
        "Victor is accused of Clerval's murder in Chapter 21, but the magistrate, Mr Kirwin, treats him kindly. When Victor calls himself a murderer, the judgement is his own, not a confessor's.",
    },
    more: "The line shows how words make monsters: an innocent woman, told often enough that she is wicked, begins to believe it. It anticipates the Creature, who is treated as a monster until he acts like one, and it shows Victor's silence costing a life.",
    tip: "Use it in an answer on injustice or on nature and nurture: Justine is an innocent condemned by other people's judgement, and Victor, who knows the truth, lets her die rather than speak.",
  },
  'speaker: Seek happiness in tranquillity, and avoid ambition, even if it be only the apparently innocent one of distinguishing yourself in science and discoveries.':
    {
      why: 'Victor says this to Walton in Chapter 24, in his last words before he dies on the ship. He bids Walton farewell and warns him against ambition, even the innocent-seeming ambition of making a name in science, which is the very ambition that ruined him.',
      not: {
        'Victor, as he begins his story to Walton':
          'In Letter 4 Victor does warn Walton, but as a preface, hoping his disasters will teach him something. This advice is his farewell, given in the last hour of his life.',
        'Walton, as he agrees to turn back':
          'Walton does give up his voyage, but bitterly, calling his hopes blasted. He is the one receiving this advice, not giving it.',
        "The Creature, over Victor's body":
          "The Creature speaks to Walton after Victor's death, but of his own crimes, his remorse and his coming death. He gives Walton no advice about science or ambition.",
      },
      more: "The warning undoes itself at once: in the next breath Victor asks why he says this, since another man may succeed where he failed. Even dying, he cannot give up the dream, so the novel's lesson about ambition stays divided.",
      tip: "Contrast Victor's divided advice with Walton's decision to turn back. An answer can argue that Walton, not Victor, is the one who acts on the lesson, and that Shelley leaves the reader to judge whether turning back is wisdom or failure.",
    },
  'point: Frankenstein: Which line shows the Creature blaming Victor for the way he looks, rather than for giving him life?':
    {
      why: "The Creature says this in Chapter 15, recalling the day he read Victor's journal of the months before his creation. What he condemns is his form: Victor made him so ugly that even his maker turned away in disgust. He goes on to contrast himself with man, whom God made beautiful in his own image.",
      not: {
        'Cursed, cursed creator! Why did I live?':
          'Chapter 16 opens with this, the night after Felix beats him away. Here he curses Victor for giving him life at all, wishing the spark of his existence had been put out.',
        'I was benevolent and good; misery made me a fiend.':
          'His plea on the glacier in Chapter 10 blames misery, the way he has been treated, for making him a fiend. It is about what was done to him, not about his looks.',
        'I ought to be thy Adam; but I am rather the fallen angel, whom thou drivest from joy for no misdeed.':
          'On the glacier he charges Victor with rejecting him unjustly, for no misdeed. It is a complaint about being cast out, with no word about his appearance.',
      },
      more: "The complaint is precise: the Creature is hated not for anything he has done but for how he looks, and the one being who should have accepted him rejected him first. Reading Victor's own words, he learns that his maker's horror began at the moment of his birth.",
      tip: "Use it to argue that Victor's failure is partly about looks: he flees the Creature in Chapter 5 because of its appearance, and the Creature has read the proof in Victor's own journal.",
    },
  "word: I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man. | Which word turns Walton's desire to know into a hunger he means to feed?":
    {
      why: 'To satiate is to satisfy an appetite completely, as a meal satisfies hunger. Writing to his sister in Letter 1, Walton makes his curiosity a hunger that only the unknown Arctic can feed, so knowledge becomes something to consume.',
      not: {
        ardent:
          'Ardent means burning with passion. It makes his curiosity hot and eager, but the image is of fire, not of hunger being fed.',
        tread:
          'To tread is to walk on new ground. It makes the voyage a physical conquest of the land, not an appetite.',
        imprinted:
          'Imprinted means marked, here by a footprint. It stresses the pride of being the first to leave a mark on the land, rather than hunger.',
      },
      more: "Walton's language of appetite and conquest is Victor's before his fall, so the novel opens with the same hunger for knowledge that will destroy Victor. The reader meets the warning before the story that proves it.",
      tip: "Link it to Victor's warning in Letter 4 that Walton's wishes, once granted, may harm him as his own did: appetite satisfied becomes punishment.",
    },
  'word: I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart. | Which word shows that Victor had been in love with an idea rather than a living being?':
    {
      why: "The beauty belonged to the dream, the imagined creature in Victor's head. When the real being opens its eye, the dream vanishes: Victor had loved his idea of success, not the creature he has just brought to life after nearly two years of work.",
      not: {
        ardour:
          'Ardour is the burning passion with which he worked. It shows how much he wanted success, not that the thing he wanted was imagined.',
        beauty:
          'Beauty is what Victor saw, but the sentence gives it to the dream. On its own the word tells us he found something lovely, not that it existed only in his mind.',
        disgust:
          'Disgust is his reaction to the real Creature. It shows revulsion at what he sees, not that what he loved was only an idea.',
      },
      more: 'The sentence turns on its semicolon: before it, two years of desire; after it, horror. Victor reacts to how the Creature looks, not to anything it has done, which makes this the first rejection in a novel full of them.',
      tip: 'Use it to show that Victor rejects the Creature at birth: pair the vanishing dream with his flight from the room, and argue that abandonment, not creation, is his real crime.',
    },
  'I am not romantic you know. I never was. I ask only a comfortable home': {
    why: 'Charlotte Lucas says this to Elizabeth in Chapter 22, just after accepting Mr Collins, only days after Elizabeth refused him. Charlotte is twenty-seven and has little money of her own, and she explains plainly that a secure home matters more to her than love.',
    more: 'Austen lets Charlotte explain herself calmly, and the short sentences sound honest rather than cold. Elizabeth condemns the choice, but the novel has already shown why a woman without money might make it: marriage was the only respectable security open to her.',
    tip: "Use Charlotte to complicate Elizabeth's judgement: argue that Austen understands the choice even while her heroine condemns it, and link it to the entail that leaves the Bennet sisters with the same problem.",
  },
  "He is a gentleman; I am a gentleman's daughter; so far we are equal.": {
    why: 'Elizabeth says this to Lady Catherine de Bourgh in Chapter 56, in the copse at Longbourn. Lady Catherine has told her that marrying Darcy would mean leaving the sphere she was brought up in, and Elizabeth answers that she and Darcy share the same rank.',
    more: 'Three short clauses balanced by semicolons make the reply as neat as a proof. The words so far are careful: Elizabeth claims equality of rank, not of fortune or family, and family is exactly where Lady Catherine attacks next.',
    tip: 'Use it in an answer on class: Elizabeth does not reject rank, she claims her place within it, so the novel can be read as mocking snobbery without overturning the social order.',
  },
  'speaker: Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.':
    {
      why: "Mary Bennet says it in Chapter 5, when the Lucases come to Longbourn the morning after the assembly to talk over the ball and Darcy's pride. Mary, who prides herself on the solidity of her reflections, offers a solemn definition nobody asked for, until a young Lucas interrupts her.",
      not: {
        'Charlotte, as the neighbours discuss the Meryton ball':
          'Charlotte is in the room and speaks first, but she excuses Darcy: a man with family and fortune has a right to be proud. She draws no line between pride and vanity.',
        'Darcy, debating with Elizabeth at Netherfield':
          "Darcy does discuss vanity and pride with Elizabeth in Chapter 11, but he defends pride in a superior mind. This bookish definition is Mary's.",
        "Elizabeth, after reading Darcy's letter":
          'After the letter Elizabeth does name vanity as her folly, but she is judging herself in distress, not offering a general rule. Austen gives the textbook version to Mary.',
      },
      more: "The definition matters more than its speaker knows. By Mary's measure Darcy is proud and Elizabeth, stung by his remark at the ball, is vain, which is exactly what Elizabeth discovers about herself in Chapter 36. Austen hides a key to the novel in the mouth of its bore.",
      tip: "Use Mary's distinction to argue that both lovers share both faults: apply it to Darcy at the assembly and to Elizabeth's wounded vanity, and you are answering the title itself.",
    },
  'speaker: There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises with every attempt to intimidate me.':
    {
      why: 'Elizabeth says it in Chapter 31, at Rosings, when Darcy walks over to stand by the pianoforte and watch her play. She turns to him with an arch smile and teases him for trying to frighten her, and he answers that she cannot really believe it.',
      not: {
        'Elizabeth, refusing Lady Catherine at Longbourn':
          "Elizabeth does refuse to be intimidated by Lady Catherine in Chapter 56, but in cold earnest. This playful boast comes months earlier, in Lady Catherine's own house.",
        "Elizabeth, refusing Mr Collins's proposal":
          'Refusing Mr Collins, she begs to be believed as a rational creature telling the truth. She is pleading to be taken seriously, not boasting that threats make her braver.',
        'Elizabeth, rejecting Darcy at Hunsford':
          'At Hunsford she is angry and wounded, and nobody is trying to frighten her: Darcy fully expects her to accept him.',
      },
      more: "The line is flirtation dressed as defiance: Elizabeth turns Darcy's silent stare into a challenge and answers it with wit. A reader who knows the ending hears more, since this is the courage that will later face down Lady Catherine.",
      tip: "Use it to show Elizabeth's spirit, then complicate it: her confidence in her own judgement is also what makes her so sure about Wickham and so wrong about Darcy.",
    },
  'speaker: You are too generous to trifle with me.': {
    why: 'Darcy says it in Chapter 58, walking with Elizabeth near Longbourn, after she thanks him for what he did for Lydia. Unsure of her, he asks her to say at once if her feelings are what they were in April, and promises that one word will silence him for ever.',
    not: {
      'Darcy, at his first proposal':
        'At Hunsford Darcy expected to be accepted, and the narrator says he was sure of a favourable answer. Humility like this, trusting her honesty and fearing her reply, belongs to the second proposal.',
      'Bingley, proposing to Jane':
        "Bingley's proposal in Chapter 55 happens out of sight: Elizabeth simply finds the couple standing together by the hearth. Austen never gives his words.",
      'Mr Collins, proposing to Elizabeth':
        'Mr Collins thinks the opposite: he takes her refusal for the usual game of elegant females who mean yes. He never imagines that she means exactly what she says.',
    },
    more: 'The line measures how far Darcy has changed. At Hunsford he dwelt on her inferiority; here he praises her generosity, trusts her honesty and leaves the choice entirely to her.',
    tip: "Pair the two proposals in an answer on pride: the confident man of Chapter 34 and the uncertain one of Chapter 58 show that Darcy has learned the lesson Elizabeth's refusal taught him.",
  },
  "point: Pride and Prejudice: Which line shows Mr Bennet recognising that his own neglect caused his family's trouble?":
    {
      why: 'Mr Bennet says this to Elizabeth in Chapter 48, home from London after searching in vain for Lydia and Wickham. He admits it has been his own doing: he let Lydia go to Brighton although Elizabeth warned him. For once his irony is turned on himself.',
      not: {
        'For what do we live, but to make sport for our neighbours, and laugh at them in our turn?':
          'Later, in Chapter 57, laughing at a rumour that Elizabeth will marry Darcy, he states his philosophy of life as amusement. It shows his remorse has faded, not that he accepts blame.',
        'I have a high respect for your nerves. They are my old friends.':
          'In Chapter 1 he teases his wife about her nerves. It shows the ironic detachment that leads to his neglect, but he admits no fault.',
        'Your mother will never see you again if you do not marry Mr. Collins, and I will never see you again if you do.':
          "In Chapter 20 he backs Elizabeth's refusal of Mr Collins with a joke. It is a father's decision, cleverly put, and it admits no fault.",
      },
      more: 'He adds at once that the feeling will pass soon enough, and the novel proves him right. Austen lets his wit charm the reader, then shows its cost: a father who treats his family as entertainment leaves a daughter unprotected.',
      tip: 'Use this line in an answer on family and responsibility: it is the one moment Mr Bennet sees himself clearly, and how quickly it passes is the point.',
    },
  "word: She was a woman of mean understanding, little information, and uncertain temper. | What does 'mean' suggest here?":
    {
      why: "In Austen's English mean often had the sense of poor or inferior, as in mean lodgings. The narrator's verdict on Mrs Bennet at the end of Chapter 1 is that her understanding is limited: she has little intelligence, knows little and is easily upset.",
      not: {
        'that she is spiteful to others':
          'Spiteful is the usual modern sense, and a common misreading. The sentence is listing what her mind lacks, as the next item, little information, confirms.',
        'that she is careful with money':
          'Mean can mean stingy today, but Mrs Bennet is the opposite: the narrator later says she had no talent for saving. Here the word measures her mind, not her spending.',
        'that she hides her true thoughts':
          'Mrs Bennet hides nothing and says whatever she thinks. Her husband is the reserved one; her mind, the narrator says, is the easier to read.',
      },
      more: "The list of three is brutally economical, each item naming something she lacks, and it comes after a whole chapter of her talk, as the narrator's verdict on what we have just heard. Austen's narrator judges openly and invites us to laugh.",
      tip: "Quote it when you write about the narrator's voice, then test the verdict: Mrs Bennet's anxiety to marry off her daughters has a real cause in the entail.",
    },
  'word: In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you. | Which word shows Darcy giving an order even as he declares his love?':
    {
      why: 'You must allow me sounds polite, but must is still a command: Elizabeth is not asked whether she wishes to hear him. Even as he proposes at Hunsford in Chapter 34, Darcy speaks as a man used to being obeyed and sure of his answer.',
      not: {
        struggled:
          'Struggled presents his love as a battle he has fought and lost. It shows a conflict inside him, not an order given to Elizabeth.',
        repressed:
          'Repressed shows the feelings he tried to hold down. It describes his self-control failing, not a demand made of her.',
        ardently:
          'Ardently means with burning passion. It measures the strength of his love, not the way he expects her to receive it.',
      },
      more: 'The proposal begins as a confession of defeat and ends as an instruction. The narrator soon adds that his face showed he expected to be accepted, so the man declaring love is still the proud man of the first ball.',
      tip: 'Use the modal verb to show pride inside a declaration of love, then contrast the second proposal, where Darcy leaves the choice entirely to Elizabeth.',
    },
  'Mud-coloured clouds drooped sadly over the muddy streets.': {
    why: "Watson describes London in Chapter 3, as he, Holmes and Mary Morstan drive through a September fog towards the Lyceum Theatre to meet the writer of her mysterious letter. Sky and street are the same dirty colour, and the clouds seem to share the travellers' gloom.",
    more: 'Pathetic fallacy makes the weather mirror the mystery: nothing in the fog can be seen clearly, just as nothing in the case can yet be explained. Watson admits the evening makes him nervous and depressed, while Holmes alone seems untouched by it.',
    tip: 'Use the fog paragraph when you write about setting: London as a dark, crowded city where anyone could be watching, and Holmes as the one mind its gloom cannot reach.',
  },
  'Whoever had lost a treasure, I knew that night that I had gained one.': {
    why: 'Watson writes this at the end of Chapter 11. He has forced open the iron box to find it empty, Mary has said calmly that the treasure is lost, and, freed from the fear of seeming a fortune-hunter, he has told her that he loves her.',
    more: 'The antithesis of lost and gained makes Mary the true treasure. It is a romantic idea that keeps the language of ownership: love replaces wealth, but the vocabulary of possession stays.',
    tip: 'Use the line to argue that the novel sets love against greed: every man who wants the treasure is ruined by it, and the one who is glad to lose it wins Mary.',
  },
  'speaker: Detection is, or ought to be, an exact science, and should be treated in the same cold and unemotional manner.':
    {
      why: 'Holmes says it in Chapter 1, at Baker Street, when Watson mentions the small brochure he wrote about their first case, A Study in Scarlet. Holmes cannot congratulate him: detection should be cold and exact, and Watson has spoiled it with romance.',
      not: {
        'Holmes, refusing to congratulate Watson on his engagement':
          'At the end Holmes does say love is opposed to the cold reason he values, but there he is talking about marriage. This complaint is about how Watson writes up a case.',
        'Athelney Jones, at the scene of the murder':
          "Jones boasts of stern facts and no theories at Pondicherry Lodge, but he is no scientist: he arrests the wrong man. The ideal of an exact science is Holmes's.",
        'Holmes, apologising after reading the watch':
          'After reading the watch, Holmes apologises for forgetting how painful his deductions were to Watson. That is a rare moment of feeling, not a lecture on method.',
      },
      more: "The line sets out Holmes's creed in the first chapter, and the novel tests it at once: the man writing it down is Watson, who will fall in love with the client. We are reading exactly the kind of romantic account Holmes disapproves of.",
      tip: 'Use it to frame the contrast between reason and feeling, then show that the novel needs both: the case is solved by Holmes, but it is told, and felt, by Watson.',
    },
  'speaker: We only ask you to do that which your countrymen come to this land for. We ask you to be rich.':
    {
      why: 'Abdullah Khan says it in Chapter 12, as Small tells the story. During the uprising of 1857 he and Mahomet Singh seize Small at the gate he guards in the old fort at Agra, promise that the plot is nothing against the fort, and offer him a quarter of a treasure.',
      not: {
        'Mahomet Singh, at the gate of the fort at Agra':
          'Mahomet Singh helps to seize Small, but Small names the speaker as the taller and fiercer of the pair, Abdullah Khan, who does all the talking.',
        'Small, bargaining with the officers in the Andamans':
          'Small does later sell the secret to two officers for his freedom, but he is English, like them. He would never speak of their countrymen coming to this land.',
        'Thaddeus Sholto, offering Mary her share':
          'Thaddeus does want Mary to have her share, but he speaks as an English gentleman in South London. The words your countrymen and this land place the speaker in India.',
      },
      more: "The line turns the novel's view of empire round: an Indian soldier tells an Englishman that wealth is what the British came to India for. It is a sharp comment on imperial greed, and the offer draws Small into the murder of the merchant Achmet.",
      tip: 'Use it for context on empire: the treasure is loot from India, and everyone who wants it, from Small to Major Sholto, is corrupted by it, while Mary, who never wants it, is not.',
    },
  "point: The Sign of Four: Which line shows a dying man confessing that love of money made him wrong his friend's child?":
    {
      why: "Major Sholto speaks these words on his deathbed, and in Chapter 4 his son Thaddeus repeats them to Mary, Holmes and Watson. He confesses that greed made him keep from Captain Morstan's orphan the half of the treasure that was hers, though he never used it himself.",
      not: {
        'It was an evil day for me when first I clapped eyes upon the merchant Achmet and had to do with the Agra treasure, which never brought anything but a curse yet upon the man who owned it.':
          'Small, captured in Chapter 11, calls the treasure a curse on whoever owns it. He blames the treasure for his ruin rather than confessing his own greed, and he is not dying.',
        'It is my treasure; and if I can’t have the loot I’ll take darned good care that no one else does.':
          'In Chapter 12 Small gloats that he has thrown the treasure where nobody can have it. It is possessive defiance, not a confession that he has wronged anyone.',
        'I have a natural shrinking from all forms of rough materialism.':
          'Thaddeus claims this in Chapter 4 while sitting among costly Eastern treasures. It is comic self-description, and he is the brother who wanted Mary to have her share.',
      },
      more: "Sholto's confession shows greed working even without use: he hoarded the treasure for the mere feeling of owning it. Conan Doyle makes the respectable officer, not the convict, the first man in the novel exposed as corrupted by it.",
      tip: 'Use it to argue that the treasure corrupts everyone who wants it, from the gentleman Sholto to the convict Small, while Mary, who never wants it, stays untouched.',
    },
  'word: This Agra treasure intervened like an impassable barrier between us. | Which word tells us that Watson believes the obstacle cannot be crossed?':
    {
      why: 'Impassable means impossible to get past. In Chapter 7, driving Mary home, Watson feels that her expected fortune makes it dishonourable for a poor half-pay surgeon to speak of love: she might think him a fortune-seeker. The treasure seems to block him for good.',
      not: {
        intervened:
          'Intervened means came between them. It shows the treasure separating them, but not that the separation is permanent.',
        barrier:
          'Barrier names the obstacle itself, the wall between them. Barriers can be climbed or broken, so the word alone does not say this one cannot be crossed.',
        treasure:
          "Treasure names the cause of the problem, Mary's expected fortune, not the hopelessness Watson feels about it.",
      },
      more: "The metaphor returns in Chapter 11, when the empty box makes the barrier vanish. Watson's scruple is about class and honour: a man without money must not seem to court an heiress, so the loss of the treasure frees him.",
      tip: 'Track the barrier image from Chapter 7 to Chapter 11 to show how Conan Doyle sets love against wealth: the treasure keeps Watson silent, and its loss lets him speak.',
    },
  'He seemed to weave, like the spider, from pure impulse, without reflection.': {
    why: "The narrator describes Silas's first years in Raveloe in Chapter 2. Cut off from faith and friendship after Lantern Yard, he weaves far into the night without even thinking of the money, working as a spider spins: by instinct, not by choice.",
    more: 'The simile strips Silas of thought and feeling, the qualities that make a person. Eliot shows what isolation and endless repetitive labour do to a human being, until loom and man seem to merge. The rest of the novel undoes the image.',
    tip: 'Pair it with the later Silas, out in the fields and the village with Eppie, to show his change from a creature of habit back into a man with ties to other people.',
  },
  'Formerly, his heart had been as a locked casket with its treasure inside; but now the casket was empty, and the lock was broken.':
    {
      why: 'The narrator describes Silas in Chapter 10, after the robbery, when Dolly Winthrop and her son Aaron call on him. Once his heart was shut around his gold; now the gold is gone and the lock is broken, so for the first time he shows no impatience at a visit.',
      more: 'The image is hopeful under its sadness: a broken lock means a heart that can be opened. The narrator adds that Silas half senses that help, if it comes, must come from outside himself, which prepares for the child who walks through his door.',
      tip: "Use it to show that the robbery begins Silas's recovery rather than only ruining him: losing the gold opens him to his neighbours and, soon, to Eppie.",
    },
  'speaker: ... there is no just God that governs the earth righteously, but a God of lies, that bears witness against the innocent.':
    {
      why: 'Silas says it in Chapter 1, at Lantern Yard, after the lots drawn to discover who stole the church money declare him guilty. He accuses his friend William Dane of the theft and cries out that God himself has borne false witness against him. The brethren shudder at the blasphemy.',
      not: {
        'Silas, when he finds his gold stolen':
          'After the robbery Silas screams and runs to the Rainbow for help, where he accuses the poacher Jem Rodney and then takes it back. He blames a man, not God.',
        'Silas, when Godfrey claims Eppie':
          'By Chapter 19 his faith has returned in a new form: he tells Godfrey that God gave Eppie to him. That is the opposite of the Silas of Chapter 1.',
        'Silas, when he finds Lantern Yard gone':
          'Finding a factory where the chapel stood, Silas is puzzled, not bitter. He tells Dolly it is dark to him, but that since the child came he has had light enough to trust by.',
      },
      more: 'The blasphemy marks the moment Silas loses his faith in God and in man together, and the novel spends the rest of its length restoring both. His later belief that God gave him Eppie measures how far he travels.',
      tip: "Use it with his words to Godfrey in Chapter 19 to trace Silas's journey from faith betrayed to faith restored, and say what restores it: human love, not a miracle.",
    },
  'speaker: When a man turns a blessing from his door, it falls to them as take it in.': {
    why: 'Silas says it in Chapter 19, when Godfrey reveals that Eppie is his daughter and claims her. Silas answers with a bitterness unheard in him since Lantern Yard: God gave her to him because Godfrey turned his back on her, so the blessing belongs to the man who took it in.',
    not: {
      "Godfrey, talking to Nancy after Eppie's refusal":
        'In Chapter 20 Godfrey admits to Nancy that Marner was right about turning a blessing from your door, but in his own standard English. The dialect of them as take it in marks the weaver.',
      'Dolly Winthrop, comforting Silas after the robbery':
        'Dolly does offer Silas plain wisdom when she visits after the robbery, but about going to church and trusting in Them, as she calls God. This is an answer to the man who abandoned Eppie.',
      'Mr Macey, holding forth at the Rainbow':
        'Mr Macey holds forth at the Rainbow about ghosts and old weddings. He takes no part in the argument over Eppie.',
    },
    more: "The sentence sounds like a proverb, and with it the uneducated weaver wins the argument: Godfrey repeats its idea himself that same night. Eliot gives the novel's moral, that care and love make a parent, not blood, to a working man in dialect.",
    tip: 'Quote it exactly, dialect and all, in an answer on parenthood: blood gives Godfrey a claim, but the novel gives the right to the man who opened his door.',
  },
  'point: Silas Marner: Which line shows the narrator criticising Godfrey for hoping luck will save him from doing right?':
    {
      why: 'The narrator steps in during Chapter 9, after Godfrey has admitted giving Dunstan the rent money but hidden his secret marriage from the Squire. He hopes some lucky turn will save him from the consequences, and the narrator calls such Chance the god of everyone who will not obey the law they believe in.',
      not: {
        'That was a father’s duty.':
          "Chapter 15 gives Godfrey's own thought as he decides to pay for the child rather than own her. The irony judges his idea of duty, but it says nothing about luck.",
        'Everything comes to light, Nancy, sooner or later.':
          'In Chapter 18 Godfrey sees that secrets come out in the end and confesses to Nancy. It is the moment he stops trusting to luck, not an example of it.',
        'I’ve a natural claim on her that must stand before every other.':
          'In Chapter 19 Godfrey claims Eppie by right of blood. It shows him treating fatherhood as a kind of property, not hoping for luck.',
      },
      more: "The maxim widens the judgement beyond Godfrey: the narrator adds that a polished man of the reader's own day would do the same. Eliot makes cowardice familiar, so we recognise it in ourselves, and the plot then shows chance failing him.",
      tip: "Use the narrator's maxims as evidence of Eliot's method: she judges through general truths, so quote one and show how the plot proves it, here through the drained Stone-pit and Eppie's refusal.",
    },
  'word: O father ... what a pretty home ours is! I think nobody could be happier than we are. | Which word shows Eppie thinking of the cottage as belonging to all of them?':
    {
      why: "Eppie says this in the last line of the novel, on her wedding day, as she, Aaron, Silas and Dolly come in sight of the cottage and its new garden. The possessive ours makes the home belong to all of them: Silas's household has grown instead of losing her.",
      not: {
        pretty:
          'Pretty praises how the cottage looks, with its flowers and its new garden. It says nothing about whose home it is.',
        home: 'Home names the place where they belong, but on its own it does not say whose it is. The possessive does that work.',
        happier:
          'Happier measures their joy, which is shared, but it is a feeling, not a claim that the home belongs to them all.',
      },
      more: "The novel began with a man counting gold that was his alone, hidden under the floor. It ends with a shared possessive: what Silas treasures now is a family, and Eppie's marriage adds Aaron to it rather than taking her away.",
      tip: 'Use the last line to show the shape of the novel: from Silas alone with his gold to Silas at the centre of a family, his true wealth the people his door let in.',
    },
  'It was the beginning of the rout of civilisation, of the massacre of mankind.': {
    why: "The narrator writes this in Book 1 Chapter 17, imagining the view from a balloon over London as six million people flee from the Martians and the Black Smoke. The stampede, without order or goal, looks to him like the start of humanity's defeat.",
    more: "Rout is a military word for an army fleeing in disorder, so civilisation itself becomes a beaten army. The balanced phrases give the sentence the weight of a historian's judgement, written by a narrator who knows, years later, how close it came.",
    tip: 'Use the line to show how Wells turns an invasion of the Home Counties into a crisis for all humanity, and link it to the breakdown of order on the roads out of London, where people fight one another to escape.',
  },
  'slain, after all man’s devices had failed, by the humblest things that God, in his wisdom, has put upon this earth':
    {
      why: 'The narrator realises this in Book 2 Chapter 8, on Primrose Hill, when he finds the Martians lying dead in their great pit. Guns, ironclads and every human weapon had failed; they were killed by bacteria, against which their bodies had no defence.',
      more: 'The anticlimax is the point: the Martians are beaten not by human courage or cleverness but by germs. A religious phrase sits beside a scientific explanation, so the ending can be read as providence or as natural selection, and Wells leaves both open.',
      tip: 'Use the ending to argue that the novel humbles human pride from start to finish: the complacent humans of the opening and this defeat of the Martians by the smallest living things frame the whole story.',
    },
  'speaker: What good is religion if it collapses under calamity?': {
    why: 'The narrator says it in Book 1 Chapter 13, after he wakes on the riverbank beside a curate whose church at Weybridge has been destroyed. The curate asks what sins have brought this on them, and the narrator angrily tells him to be a man: God never promised to protect Weybridge.',
    not: {
      'The curate, raving in the ruined house':
        "The curate is the one whose faith has collapsed: in the ruined house he raves that the invasion is God's punishment. He is the target of this question, not the one asking it.",
      'The artilleryman, on Putney Hill':
        'The artilleryman sneers at clerks who feared the hereafter on Sundays, but he has no wish to defend faith. This challenge is aimed at a clergyman.',
      'The narrator, as he finds the Martians dead':
        'On Primrose Hill the narrator wonders for a moment whether God has struck the Martians down, as in the Bible. There faith is a source of awe, not something he scolds.',
    },
    more: 'The narrator does not attack faith itself, only a faith that expected God to keep Weybridge safe. The curate becomes a foil: the man of religion falls apart, while the man of science keeps his head, at least for now.',
    tip: "Use the exchange in an answer on religion and science: set the curate's despair against the narrator's reasoning, then show that the ending mixes the two.",
  },
  'speaker: It never was a war, any more than there’s war between man and ants.': {
    why: 'The artilleryman says it in Book 2 Chapter 7, when the narrator meets him again on Putney Hill after escaping the ruined house. He argues that humanity is beaten: people trouble the Martians no more than ants trouble a man, so the only hope is to hide underground.',
    not: {
      "The artilleryman, sheltering in the narrator's house":
        "When he first shelters in the narrator's house, the artilleryman is a shaken survivor describing his battery's destruction. The worked-out theory of humans as ants comes later, on Putney Hill.",
      'The curate, in the ruined house':
        "The curate sees the invasion as God's judgement on sinners, not as a contest between unequal species. His despair is religious; this is a soldier's cold reckoning.",
      'The narrator, in the Epilogue':
        'The Epilogue is calm and scientific, and treats the invasion as a lesson and a warning. It does not argue that humans were never a match for anything.',
    },
    more: "The line denies the novel's own title: a war needs two sides that can hurt each other. It makes readers picture their own careless destruction of smaller creatures, the same reversal the novel performs on empire.",
    tip: "Link it to the narrator's discovery, among the red weed, that he is no longer a master: both show humanity losing its place at the top, and both turn the reader's view of power upside down.",
  },
  "point: The War of the Worlds: Which line asks readers whether they have any right to condemn the invaders, given their own empire's record?":
    {
      why: 'The narrator asks this in Book 1 Chapter 1, straight after reminding readers that European settlers swept the Tasmanians out of existence in fifty years. Before we condemn the Martians, he says, we must remember what our own species has done to peoples weaker than itself.',
      not: {
        'a sense of dethronement, a persuasion that I was no longer a master, but an animal among the animals, under the Martian heel':
          'In Book 2 Chapter 6 the narrator feels like an animal under a master. It reverses the image of empire through his own experience, but it asks readers nothing about their record.',
        'So some respectable dodo in the Mauritius might have lorded it in his nest':
          'In Book 1 Chapter 7 the narrator mocks his own confidence at dinner, comparing himself to a doomed dodo. It exposes complacency, not the conduct of an empire.',
        'With infinite complacency men went to and fro over this globe about their little affairs, serene in their assurance of their empire over matter':
          'This sentence, also from Chapter 1, uses empire to mean mastery over the material world. It mocks human self-satisfaction but does not ask how we treat other peoples.',
      },
      more: "The rhetorical question is the novel's most direct argument against empire. The invasion of Surrey becomes a mirror: readers are asked to feel what colonised peoples felt, and to admit that the Martians are doing only what Europeans had done.",
      tip: 'Quote it early in any answer on empire, then show how the rest of the novel makes the comparison felt: refugees on the roads, a ruined countryside, humans treated as animals.',
    },
  'word: It was sweeping round swiftly and steadily, this flaming death, this invisible, inevitable sword of heat. | Which word presents the Heat-Ray as certain to reach its victims, whatever they do?':
    {
      why: 'Inevitable means certain to happen, impossible to avoid. In Book 1 Chapter 5, as the Heat-Ray sweeps across Horsell Common after destroying the Deputation, the narrator watches it set bushes and trees alight one after another as it comes towards him, and he is too stunned to move.',
      not: {
        swiftly:
          'Swiftly shows the speed of the sweep. Speed makes the ray frightening, but a fast thing can still be dodged; the word does not say escape is impossible.',
        invisible:
          'Invisible means it cannot be seen, which makes it uncanny and modern. The narrator still sees it coming by the bushes it ignites, so the word does not make it certain.',
        sword:
          'Sword turns the ray into a weapon swung by a hand, giving it purpose and an old, warlike feel. It does not say that nothing can escape it.',
      },
      more: "Invisible and inevitable chime in sound, and the alliteration of swiftly and steadily makes the sweep feel mechanical and patient. Wells's readers had never imagined such a weapon: it turns confidence in guns and armies into helplessness.",
      tip: "Use the phrase when writing about technology and fear: the Martians' weapons make human military power look primitive, reversing the advantage the British Empire enjoyed over the peoples it conquered.",
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
  'Each of you helped to kill her.': {
    why: "The Inspector says this to the Birlings in Act 3, just before his final speech. Each of them played a part in the chain of events that led to Eva Smith's death, although none caused it alone.",
    more: 'The play is built like that chain, with each part of the questioning revealing another link. Gerald, who has gone out by then, is part of it too.',
    tip: "Use it for responsibility and for the play's structure. 'Each' makes every character answer for their own part, so nobody can hide behind the others.",
  },
  "cranks talk and write now, you'd think everybody has to look after everybody else.": {
    why: 'Arthur Birling says this in Act 1 of An Inspector Calls, lecturing Gerald and Eric over port after the engagement dinner. He sneers at the socialist idea that people should look after one another. Within moments the doorbell rings and the Inspector arrives, as if in answer.',
    more: "Priestley sets out the play's central debate before the Inspector appears. Birling dismisses believers in shared responsibility as cranks, and then a man who believes exactly that is shown in. The audience soon learns which side the play is on.",
    tip: "Use it to show Birling's selfish creed in Act 1, then set it against the Inspector's final speech in Act 3: the structure of the play answers him.",
  },
  "speaker: she'd had a lot to say - far too much - so she had to go.": {
    why: 'Birling tells the Inspector in Act 1 how he dealt with a strike at his works in 1910. When the workers came back, he sacked the ringleaders, and Eva was one of them. Her offence was speaking up: having a lot to say is, to him, reason enough to dismiss her.',
    not: {
      'Sheila Birling, confessing what happened at Milwards':
        'Sheila also had Eva sacked, from Milwards, but out of jealousy over a smile, not for anything she said. Her confession is full of shame, not this flat certainty.',
      "Sybil Birling, describing the girl's appeal to her committee":
        'Mrs Birling turned Eva away from her charity, offended that the girl had called herself Mrs Birling. She objected to the use of her name, not to a worker speaking up.',
      'Gerald Croft, explaining why he ended the affair':
        'Gerald ended the affair when he had to go away on business, and gave Daisy money to see her through. He speaks of her with feeling, never as a troublemaker.',
    },
    more: "The dashes act out Birling's irritation that a worker dared to argue. In Act 3 the Inspector reminds him that this sacking began the chain of events that ended in the girl's death.",
    tip: "Link it to the play's chain structure, with Birling's sacking as the first link. Analyse 'far too much' as his verdict on a working-class woman who spoke up.",
  },
  "speaker: But these girls aren't cheap labour - they're people.": {
    why: 'Sheila says this in Act 1, soon after she comes in from the drawing-room and hears how her father sacked Eva. The Inspector has just remarked that factories rely on girls like Eva for cheap labour, and Sheila rejects the phrase. It is the first sign that she will change.',
    not: {
      'Eric Birling, arguing with his father about the strike':
        "Eric does take the strikers' side in Act 1, asking why workers should not try for higher wages. But this reply to the Inspector, rejecting his phrase, is his sister's.",
      'The Inspector, in his final speech':
        "The Inspector agrees, drily, in his reply, but the words are Sheila's. His final speech in Act 3 is about millions of people like Eva, not about the cost of labour.",
      'Sheila Birling, as her parents laugh off the evening':
        "In Act 3 Sheila argues with her parents about what the evening has meant, not about wages. This line belongs to Act 1, when she first hears what happened at her father's works.",
    },
    more: "The dash marks a turn: Sheila swaps an economic term for a human one, and the contrast sums up the play's argument. Priestley gives it to the daughter who began the evening delighted with her engagement ring.",
    tip: "Use it to start tracing Sheila's change from Act 1 to Act 3. Analyse the contrast between 'cheap labour' and 'people': a cost on a balance sheet against human beings.",
  },
  'speaker: In the circumstances I think I was justified.': {
    why: 'Mrs Birling says this in Act 2, once the Inspector has made her admit that her charity committee refused the girl help. She sees no fault in herself: the measured phrase makes a prejudiced decision sound like careful judgement.',
    not: {
      'Sybil Birling, denying she knows the girl in the photograph':
        'At first Mrs Birling claims not to recognise the girl at all. She cannot defend a decision until the Inspector forces her to admit that there was one.',
      'Arthur Birling, defending the sacking of the strikers':
        "Birling also insists he was right, in Act 1, and in similar words. But this careful, qualified phrasing is his wife's, about her committee, not his about the strike.",
      'Gerald Croft, defending how he treated Daisy':
        'Gerald tells his story in Act 2 and is clearly moved; he goes out to walk alone. He explains what happened rather than claiming he was in the right.',
    },
    more: 'Mrs Birling turned away a desperate young woman, yet she speaks as calmly as if approving the minutes of a meeting. Priestley shows prejudice dressed up as good judgement, and the Inspector refuses to accept it.',
    tip: "Contrast her refusal of blame with Sheila's immediate remorse. Analyse 'justified': she measures right and wrong by her own standards, not by the harm her decision did.",
  },
  'speaker: She was young and pretty and warm-hearted - and intensely grateful.': {
    why: "Gerald says this in Act 2. After rescuing Daisy Renton from Alderman Meggarty in the Palace bar, he let her stay in a friend's empty rooms, and she became his mistress. The delayed final phrase gives him away: he valued her gratitude, and her dependence on him.",
    not: {
      'Eric Birling, confessing how he met her':
        'Eric also met her in the Palace bar, months later, but she refused the stolen money he offered and would not marry him. She had no cause to be grateful to him.',
      'Arthur Birling, remembering her as a worker':
        'Birling remembers her as a lively, good-looking girl and a good worker, and then explains why he sacked her. Gratitude has no place in his account.',
      'Sheila Birling, confessing what she did at Milwards':
        'Sheila admits the girl was very pretty, and that this made her jealous at Milwards. She had her dismissed, so gratitude is the last thing she would mention.',
    },
    more: "The list builds with 'and', then a dash delays the last quality, the one that mattered to Gerald. He did help her, but the line shows the power a rich man held over a girl with nothing.",
    tip: "Use it to show Gerald as kinder than Birling yet still exploiting his class power. Analyse the dash before 'intensely grateful' and what the delay reveals.",
  },
  'speaker: she treated me - as if I were a kid.': {
    why: 'Eric says this in Act 3, confessing his part in the story. When Eva found she was pregnant, she would not let him marry her, knowing he did not love her, and she refused his money once she knew it was stolen. Even she saw how immature he was.',
    not: {
      'Eric Birling, turning on his mother':
        'Eric does turn on his mother later in Act 3, but in fury, once he learns she turned Eva away. He is accusing her, not complaining about being babied.',
      'Gerald Croft, explaining how the affair ended':
        'Daisy was grateful to Gerald and accepted that the affair could not last. He was older and in control, and nothing suggests she saw him as a boy.',
      'Sheila Birling, after her mother calls her childish':
        'Mrs Birling does call Sheila childish at the end of Act 2, but this line looks back on a past relationship, and the woman meant is the girl Eric knew.',
    },
    more: "The dash suggests Eric's embarrassment as he admits it. Priestley gives Eva, who never appears on stage, more maturity and integrity than the privileged young man she refused.",
    tip: "Use it to show Eva's dignity and Eric's growth: by Act 3 he can admit his own immaturity, something his father never manages.",
  },
  'speaker: I remember what he said, how he looked, and what he made me feel.': {
    why: 'Sheila says this near the end of Act 3. The family has learnt that there is no Inspector Goole and no recent suicide at the Infirmary, and her parents are celebrating. Sheila refuses to join in: whoever he was, his effect on her was real.',
    not: {
      'Eric Birling, as his parents laugh off the evening':
        "Eric is on Sheila's side here, but these words are hers. His own protest is about the harm the family did, not about how the Inspector made him feel.",
      'Sheila Birling, handing Gerald back the ring':
        'In Act 2 Sheila returns the ring calmly and says she respects Gerald more for his honesty. This line looks back on the Inspector himself, after he has gone.',
      'Gerald Croft, after learning there is no Inspector Goole':
        'Gerald brings the news that no Inspector Goole is on the force, and he wants the evening forgotten. He would never admit that the Inspector made him feel anything.',
    },
    more: 'The three-part list moves from words to appearance to feeling, showing the lesson reached her on every level. Priestley suggests that real moral change cannot be undone by a technicality.',
    tip: "Use it to show Sheila as the character who has truly changed, set against her parents and Gerald. Whether the Inspector was real does not matter to her, and that is Priestley's point.",
  },
  "point: An Inspector Calls: Which line makes a factual prediction that the play's first audiences knew had already failed?":
    {
      why: 'Birling tells the young people in Act 1 that the new liner, due to sail next week, cannot sink. The Titanic sank on her first voyage in April 1912, days after the evening of the play, and every audience from 1945 on knew it. Dramatic irony discredits him before the Inspector arrives.',
      not: {
        'a man has to ... look after himself and his own':
          "This is Birling's creed, said over port in Act 1. The play argues against it, but it is an opinion about how to live, not a forecast that events could disprove.",
        "It's a free country, I told them.":
          "Birling's excuse for refusing the strikers is an opinion, and Eric challenges it at once. It says nothing about the future, so no event could prove it false.",
        'If we were all responsible for everything ... it would be very awkward.':
          'Birling waves away shared responsibility as inconvenient. The play shows him wrong morally, but this is a hypothetical, not a forecast the audience had seen fail.',
      },
      more: "Priestley stacks up Birling's confident forecasts in Act 1, about war, progress and labour, so that the audience learns to distrust him. Once he is wrong about the ship, his views on society look just as unreliable.",
      tip: 'Use it to explain dramatic irony, then link it to his other certainties. If he is this wrong about the facts, why trust his view that a man should look after only himself?',
    },
  "point: An Inspector Calls: Which line shows Mrs Birling sneering at the girl's sense of right and wrong?":
    {
      why: "Mrs Birling says this in Act 2, describing the girl's appeal to her committee. The girl would not take more money from the young man because it was stolen, and Mrs Birling calls such principles absurd in someone of her class. To her, morality belongs to people like herself.",
      not: {
        'Girls of that class -':
          "Mrs Birling starts to dismiss the girl by her class early in Act 2, but Sheila cuts in before she can finish. The unfinished sentence never reaches the girl's principles.",
        'he ought to be dealt with very severely':
          "Here Mrs Birling turns on the young man who fathered the child, not knowing he is Eric. She is demanding punishment for him, not judging the girl's morals.",
        'She was very pretty - soft brown hair and big dark eyes.':
          "This is Gerald, in Act 2, remembering how Daisy looked. It describes her appearance, not her principles, and it is not Mrs Birling's line at all.",
      },
      more: 'Mrs Birling cannot imagine a poor girl with principles, so she treats honesty as play-acting. The irony is that the girl, refusing stolen money, behaves more honourably than the family judging her.',
      tip: "Use it for class prejudice: analyse 'in her position', which ties a person's worth to her rank. Then contrast the girl's integrity with Mrs Birling's.",
    },
  "point: An Inspector Calls: Which line insists that the family's guilt stands even if the Inspector was a fake?":
    {
      why: "Eric says this in Act 3, once the family has learnt there is no Inspector Goole on the local force. Whoever the Inspector was, Eric insists, the girl was still treated as she was, by all of them. The inclusive 'we all' shares the guilt across the family.",
      not: {
        "Everything's all right now, Sheila. What about this ring?":
          'Gerald says this once the hoax seems proved, wanting the engagement back as if nothing had happened. It shows the opposite: for him, no real inspector means no real guilt.',
        "You're not the kind of father a chap could go to.":
          "Eric says this earlier in Act 3, when his father asks why he did not come to him for help. It blames Birling's coldness; it does not answer the hoax.",
        'One Eva Smith has gone - but there are millions and millions and millions':
          "This is the Inspector's final speech, before anyone suspects a hoax. It widens one death into the fate of millions; it does not answer doubts about who he was.",
      },
      more: 'Priestley splits the family here: the young accept that what they did is real whatever the Inspector was, while the older Birlings and Gerald treat a technicality as an escape. The final telephone call removes the escape.',
      tip: "Use it to show Eric's growth and the divide between generations. His 'we all' answers his father's Act 1 belief that a man need look after only himself and his family.",
    },
  "word: the famous younger generation who know it all | What does 'famous' suggest here?": {
    why: "Birling says this near the end of Act 3, mocking Sheila and Eric for refusing to laugh off the evening. 'Famous' is sarcastic: he means the opposite, sneering at young people who think they know better than their elders. It is his last speech before the telephone rings.",
    not: {
      'Pride: his children are admired in Brumley':
        'Birling is anything but proud of his children here. He is irritated that they will not share his relief, so the word works against them, not for them.',
      'Respect: he grants that they have learnt something':
        'Birling refuses to grant that his children have learnt anything. The point of the sneer is that their new seriousness is, to him, a pose.',
      'Surprise: he had not expected them to defy him':
        'His children have been standing up to him since Act 1, so this is no surprise. The word is a jeer, not an expression of astonishment.',
    },
    more: "The irony turns on Birling at once: as he jeers that the young know it all, the telephone announces a girl's death and an inspector on his way. The man who claimed in Act 1 to know best is proved wrong again.",
    tip: "Use it for the theme of age and youth. Priestley places his hope in the younger generation, so Birling's sneer makes the audience side with the young.",
  },
  "word: I'll never, never do it again to anybody. | What does 'anybody' suggest here?": {
    why: "Sheila says this in Act 1, after admitting that she had Eva sacked from Milwards in a fit of jealousy. 'Anybody' widens her promise from one girl to all people: she has grasped the Inspector's lesson that how we treat anyone matters.",
    not: {
      'She means only shop girls like the one she had sacked':
        "'Anybody' does the opposite of narrowing: it reaches past shop girls to every person Sheila might ever have power over.",
      'She is pointing out that others did worse things':
        "Sheila accepts her own blame here without pointing at anyone else. 'Anybody' is about whom she might hurt, not about who else is guilty.",
      'She cannot remember exactly whom she has hurt':
        "Sheila remembers the girl at Milwards all too clearly, which is why she is so upset. 'Anybody' widens the promise; it does not show confusion.",
    },
    more: "Sheila's promise is immediate and unconditional, the response Priestley hopes for from his audience. It contrasts with her parents, who spend the evening refusing any blame at all.",
    tip: "Use it as the starting point of Sheila's change. Pair it with Act 3, where she refuses to let her parents forget what happened.",
  },
  "word: You began to learn something. And now you've stopped. | Which word suggests that turning away from the lesson was a choice?":
    {
      why: "Sheila says this in Act 3 to her parents and Gerald, who are relaxing now that the Inspector seems a fake. 'Stopped' is active: they were learning and have chosen to give it up. The short second sentence cancels the first.",
      not: {
        began:
          "'Began' admits that her parents did start to learn, which is generous. It describes the start of the change, not the decision to abandon it.",
        learn:
          "'Learn' casts Sheila as the teacher and her parents as pupils, a reversal of Act 1. It names the process, not the choice to quit it.",
        something:
          "'Something' is vague and modest, suggesting they learnt only a little. It does not show a decision to turn back.",
      },
      more: 'Sheila now speaks to her parents as a teacher speaks to pupils, reversing the order of Act 1, when Birling lectured the young. Priestley shows the generations moving apart.',
      tip: "Use it for the theme of age and youth: the young change, the old refuse. Analyse the two short sentences and the turn on 'And now'.",
    },
  "word: Then he'd be entirely responsible | What does 'entirely' suggest here?": {
    why: "Mrs Birling says this in Act 2, about the unknown father of the girl's child. 'Entirely' puts all the blame on him and leaves none for herself or her committee: if he had not caused the trouble, she argues, the girl would never have needed their help.",
    not: {
      'She admits she must share part of the blame':
        "Mrs Birling admits no blame at any point in Act 2. 'Entirely' does the opposite of sharing: it hands every bit of the blame to someone else.",
      'She blames the girl more than the young man':
        "Earlier she blamed the girl first, but at this moment her target is the young man. 'Entirely' shifts the whole weight onto him.",
      'She suspects that the young man is her own son':
        "She does not yet suspect that the father is Eric; Sheila, and the audience, begin to see it before she does. That is the dramatic irony that makes 'entirely' rebound on her.",
    },
    more: 'The absolute word traps her. Within minutes Eric walks in, and the man she has made entirely responsible is her own son. Priestley lets her build the case against her family herself.',
    tip: "Use it for dramatic irony and Mrs Birling's refusal of responsibility. Analyse how an absolute word like 'entirely' leaves her no way back.",
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
  'The conch exploded into a thousand white fragments and ceased to exist.': {
    why: 'The narrator describes this in Chapter 11 of Lord of the Flies, at Castle Rock. The boulder Roger levers down kills Piggy, who is holding the shell, so the symbol of order and of the right to speak is destroyed at the same moment as the boy who believed in it most.',
    more: "The conch has stood for democracy and order since Chapter 1, when it first called the boys together. 'Ceased to exist' is final: Golding shows reason and civilisation destroyed together.",
    tip: 'Use it in an essay on symbols. Trace the conch from the first assembly to this moment, when its destruction marks the end of order on the island.',
  },
  'speaker: They looked at each other, baffled, in love and hate.': {
    why: 'The narrator says this in Chapter 3, after Ralph, who has been building shelters with little help, argues with Jack, who thinks only of hunting. Neither can understand the other, yet the friendship of their first exploration still holds. The oxymoron captures both pulls at once.',
    not: {
      'As Ralph and Jack fight at Castle Rock':
        "By Chapter 11 there is no love left: Ralph and Jack fight with spears at Castle Rock after Jack's tribe has stolen Piggy's glasses. Hate has won.",
      'As Jack leaves to start his own tribe':
        'When Jack leaves in Chapter 8 he is humiliated and furious after failing to have Ralph voted out. The mixed feeling of this line has already hardened.',
      'As Ralph confronts Jack over the dead fire':
        "After the fire goes out in Chapter 4, the quarrel turns violent when Jack hits Piggy. The 'love' in this line belongs to an earlier, gentler stage.",
    },
    more: 'Golding presents Ralph and Jack as two sides of human nature, the urge to build and the urge to dominate, drawn together and pulling apart. The rest of the novel shows the hate winning.',
    tip: "Use it early in an essay on Ralph and Jack, then trace how 'love and hate' hardens into open hatred by Chapter 11.",
  },
  'speaker: Kill the pig. Cut her throat. Spill her blood.': {
    why: "Jack's hunters chant this in Chapter 4 as they come out of the forest carrying their first pig, the hunt that let the signal fire go out as a ship passed. The short commands turn killing into a ritual. The chant will return, wilder, later in the novel.",
    not: {
      'The boys, acting out the hunt with Robert':
        'When the boys act out a hunt in Chapter 7, Robert plays the pig and the game turns rough. The words of the chant have changed, and a boy is now the target.',
      'The boys, dancing on the beach in the storm':
        'In the storm in Chapter 9 the chant names the beast, not the pig, and the boys kill Simon as he stumbles out of the forest. This is the chant before it reaches that point.',
      "Jack's tribe, hunting Ralph across the island":
        'When the tribe hunts Ralph in Chapter 12, they cry out to one another across the island and set the forest alight. The chant began here, with a pig, long before.',
    },
    more: "Golding tracks the chant as a measure of the boys' fall: first a pig, then a boy playing a pig, then a boy taken for the beast. The steady rhythm makes violence feel like a game.",
    tip: 'Quote the versions of the chant in order to show how the violence escalates. Notice which word changes each time, and what the change reveals.',
  },
  "speaker: Maybe there is a beast... maybe it's only us.": {
    why: 'Simon says this in Chapter 5, at the assembly Ralph calls after dark, when fear of the beast has taken hold. He struggles for words and suggests that the beast may be the boys themselves. The others jeer, and even Piggy dismisses the idea.',
    not: {
      'Piggy, at the assembly about the beast':
        "Piggy is there and even admits they might be frightened of people, but he insists there is no beast and scoffs at Simon's idea.",
      'Ralph, at the assembly about the beast':
        'Ralph calls the assembly to talk the fear away and says it is nonsense. He wants the beast dismissed, not explained as part of the boys.',
      'Sam and Eric, after seeing the shape on the mountain':
        'The twins rush back in terror in Chapter 6, sure they have seen a real monster on the mountain. They believe in a beast outside, the opposite of this idea.',
    },
    more: "Simon's hesitant words hold the novel's central idea: evil lies in human nature, not in a creature in the forest. Golding gives the truth to the quietest boy and lets the group reject it.",
    tip: 'Use it as the key to the beast as a symbol. Analyse the hesitation in the line: the truth is too disturbing to state confidently.',
  },
  'speaker: The desire to squeeze and hurt was over-mastering.': {
    why: "The narrator describes Ralph's feelings in Chapter 7, when the boys act out a pig hunt with Robert as the pig and the game turns rough. Ralph, the novel's voice of order, pushes in to get his hands on Robert. No one is free of the darkness.",
    not: {
      'As Simon is killed on the beach':
        'In the storm in Chapter 9 Ralph and Piggy are drawn to the edge of the dance, but these words belong to the earlier mock hunt, when the violence is still a game.',
      'As the hunters kill the sow for the beast':
        "Ralph is not with the hunters when they kill the sow in Chapter 8; he is on the beach with Piggy and the others. The urge described here is Ralph's.",
      'As Ralph fights Jack at Castle Rock':
        "At Castle Rock in Chapter 11 Ralph fights Jack in open anger over Piggy's glasses. This line describes something different: a sudden thrill of cruelty during a game.",
    },
    more: "This is one of the novel's most disturbing moments because it happens to Ralph. 'Over-mastering' suggests the urge is stronger than his will, and Golding refuses to exempt anyone from it.",
    tip: 'Use it to argue that Golding sees savagery in everyone, even the civilised Ralph. It undercuts any simple reading of Ralph as good and Jack as evil.',
  },
  'speaker: Fancy thinking the Beast was something you could hunt and kill!': {
    why: "The pig's head on its stick, the Lord of the Flies, seems to say this to Simon in Chapter 8, in his hidden clearing. It mocks the boys' belief that the beast is a creature outside them that spears can reach. Simon, faint and alone, hears what he already suspected.",
    not: {
      'Piggy, at the assembly about the beast':
        'Piggy scoffs at the beast in Chapter 5, but because he does not believe it exists at all. This voice knows the beast is real, and inside the boys.',
      "Jack, mocking the littluns' fear of the beast":
        "Jack does mock the littluns' fears in Chapter 5, but he later hunts the beast and leaves it gifts. Hunting it is his idea, the very thing this voice laughs at.",
      'Simon, finding the dead parachutist on the mountain':
        'Simon discovers in Chapter 9 that the shape on the mountain is a dead man, but he says nothing there; he frees the body and hurries down to tell the others.',
    },
    more: "Golding gives the novel's darkest truth to a rotting head swarming with flies. Beelzebub, a name for the Devil, is often translated as Lord of the Flies, so evil itself seems to speak.",
    tip: 'Use it to show the beast as a symbol of human evil. Analyse the mocking tone: the beast laughs at the boys for looking outside themselves.',
  },
  'point: Lord of the Flies: Which line comes from a moment when the rules of the old life still hold a boy back?':
    {
      why: "The narrator describes Roger in Chapter 4 throwing stones at Henry, a littlun playing by the water, but aiming to miss. Round Henry, the narrator explains, is the invisible protection of parents, school, policemen and the law. The old taboo still holds Roger's arm, for now.",
      not: {
        'He began to dance and his laughter became a bloodthirsty snarling.':
          'This is Jack, who has just painted his face and sees a stranger in the water. Nothing holds him back here: the paint has removed his restraint.',
        'imposed their will upon it, taken away its life like a long satisfying drink.':
          "This is Jack's memory of the first kill, later in Chapter 4. The hunters have overpowered a living thing, and the thrill of power is the opposite of restraint.",
        'The mask was a thing on its own, ... liberated from shame and self-consciousness.':
          'The mask frees Jack from shame, the very feeling that restraint depends on. It shows the old rules dissolving, not holding.',
      },
      more: 'Golding shows how thin civilisation is: Roger is held back only by a habit taught by a world that, the narrator adds, is now in ruins. By Chapter 11 nothing holds him back at all.',
      tip: "Use it to trace Roger from throwing to miss in Chapter 4 to killing in Chapter 11, as a measure of the island's decline.",
    },
  'point: Lord of the Flies: Which line shows Ralph feeling the daily strain of a life with no routine?':
    {
      why: "The narrator gives Ralph's thoughts at the start of Chapter 5, as he walks along the beach before the assembly. He suddenly sees how tiring their life is: nothing is planned, so every path must be worked out as he goes, with his eyes on his feet.",
      not: {
        'The world, that understandable and lawful world, was slipping away.':
          'This is Ralph later in the same chapter, as the assembly turns chaotic. It is about a world of law and sense disappearing, not the daily tiredness of an unplanned life.',
        'What are we? Humans? Or animals? Or savages?':
          "Piggy asks this at the assembly, appealing to the boys to remember how civilised people behave. It is a challenge to the group, not Ralph's private weariness.",
        "Maybe there is a beast... maybe it's only us.":
          'Simon offers this idea about the beast at the assembly. It concerns the evil in human nature, not the strain of everyday life.',
      },
      more: "Golding shows decline beginning in small, physical ways, such as long hair, dirty clothes and bitten nails, before it turns violent. Ralph's new awareness makes him the reader's guide to what is being lost.",
      tip: "Use it to show Ralph maturing as a leader: he begins to think, and to notice what the others ignore. 'Improvisation' is a precise word to analyse.",
    },
  'point: Lord of the Flies: Which line suggests that even the rescuing adult cannot take in what he has found?':
    {
      why: "The narrator describes the naval officer in Chapter 12, who has landed because he saw the smoke of the burning island. Faced with a crowd of painted, filthy boys, he looks at Ralph warily, puzzled and cautious. At first he takes the scene for boys' games.",
      not: {
        "Ralph wept for the end of innocence, the darkness of man's heart":
          'This is Ralph, not the officer, a few moments later. Ralph understands only too well what has happened, which is why he weeps.',
        'What are we? Humans? Or animals? Or savages?':
          'Piggy asks this at the assembly in Chapter 5, as order collapses. It questions what the boys have become; it says nothing about the adult who arrives at the end.',
        'He began to dance and his laughter became a bloodthirsty snarling.':
          'This is Jack in Chapter 4, newly hidden behind his painted face. It shows a boy changing, not an adult failing to understand.',
      },
      more: 'Golding denies the reader a comforting rescue. The officer belongs to a navy at war, so he takes the boys from one battle to another, and his caution suggests that the adult world has no answers either.',
      tip: "Use it in a conclusion on the ending. Point out the irony of a warship rescuing boys from violence, and contrast the officer's puzzlement with Ralph's tears.",
    },
  'word: imposed their will upon it, taken away its life like a long satisfying drink. | Which word shows that the kill was about power rather than food?':
    {
      why: "The narrator gives Jack's memory of the first kill in Chapter 4. 'Imposed' is the language of domination: the hunters forced their will on a living thing. What thrills Jack is power over another creature, not the meat.",
      not: {
        life: "'Life' names what was taken, and its loss is the cost of the hunt. It does not show why the kill thrilled the hunters.",
        satisfying:
          "'Satisfying' turns the kill into pleasure, which is disturbing, but pleasure is not the same as power. It describes how the killing felt.",
        drink:
          "'Drink' completes the simile, making killing a bodily craving like thirst. It suggests appetite rather than control over another creature.",
      },
      more: 'The simile of a long drink makes violence feel natural and addictive. Golding suggests that once the hunters have tasted this power, they will look for bigger prey.',
      tip: "Use it to argue that hunting in the novel is about control. Analyse 'imposed their will' alongside the simile of the drink to show power and pleasure combined.",
    },
  'word: stood on the sand, looking down at Ralph in wary astonishment. | Which word suggests the adult is on his guard about what he has found?':
    {
      why: "The narrator describes the naval officer in Chapter 12. 'Wary' means cautious and on guard: faced with a crowd of painted, armed boys on a burning island, even the adult is uneasy and not quite sure what he has found.",
      not: {
        stood:
          "'Stood' simply places the officer on the beach. It gives his position, not his feelings.",
        looking:
          "'Looking' sets up the officer's gaze down at Ralph, a sign of his height and authority over the boy rather than of caution.",
        astonishment:
          "'Astonishment' shows surprise, which is close, but surprise is not caution. It is 'wary' that shows him on his guard.",
      },
      more: 'The rescue is uneasy rather than triumphant. The adult who should restore order is himself part of a war, and his caution hints that he senses something he cannot explain.',
      tip: "Use 'wary' to show that Golding's ending refuses simple comfort. Pair it with the officer's warship to show that the adult world is no safer than the island.",
    },
  'word: The world, that understandable and lawful world, was slipping away. | Which word suggests the loss is gradual and hard to stop?':
    {
      why: "The narrator gives Ralph's feelings in Chapter 5, as he struggles to keep order at the assembly about the beast. 'Slipping' suggests a slow, steady loss that he cannot grip, like something sliding out of his hands.",
      not: {
        world:
          "'World' names what is being lost, and its repetition gives it weight, but it does not describe how the loss happens.",
        understandable:
          "'Understandable' defines civilisation as a world that makes sense. It describes what Ralph values, not the way it is disappearing.",
        lawful:
          "'Lawful' links civilisation with rules, the order Ralph clings to. It names a quality of the world, not the process of losing it.",
      },
      more: "Golding shows civilisation ending not in one dramatic moment but through a slow erosion that is almost impossible to resist. Ralph's view lets the reader feel the loss as it happens.",
      tip: "Use it in an essay on civilisation and savagery. Analyse the repeated 'world' and the verb 'slipping' to show the loss felt before it is understood.",
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
  'Man is the only real enemy we have.': {
    why: 'Old Major says this in Chapter 1 of Animal Farm, in his speech to the animals in the big barn. He argues that their hunger and overwork come from Man, who takes almost everything they produce, and that removing him will end their misery.',
    more: "The simplicity of Major's idea is its strength and its danger. By naming a single enemy, he never warns the animals that a tyrant could rise from among themselves, which is exactly what happens.",
    tip: 'Use it to show the ideals behind the Rebellion, then compare the final chapter, where the animals can no longer tell the pigs from the men.',
  },
  'If you have your lower animals to contend with ... we have our lower classes!': {
    why: 'Mr Pilkington makes this joke in Chapter 10 of Animal Farm, at the dinner where the pigs entertain the neighbouring farmers. He has just congratulated the pigs on working their animals hard and feeding them little: pig and human rulers now share the same interests.',
    more: "The joke sets the table roaring, and it is the novella's bitterest satire: the rulers laugh together at the ruled. Orwell suggests that class, not species, was always the real division.",
    tip: "Use it in an essay on power or class to show how far the pigs have travelled from Old Major's dream. The dinner is often linked to the Tehran Conference of 1943.",
  },
  'speaker: Never mind the milk, comrades!': {
    why: "Napoleon cries this in Chapter 2, on the day after the Rebellion, placing himself in front of five buckets of fresh milk and sending the others off to the hay harvest. When they come back that evening, the milk has gone. It is the first sign of the pigs' privilege.",
    not: {
      'Squealer, explaining where the milk went':
        "In Chapter 3 Squealer explains that the milk goes into the pigs' mash because pigs are brainworkers. By then the milk is gone; this line comes before, from Napoleon.",
      'Snowball, leading the animals down to the hayfield':
        'Snowball is sent to lead the way to the hayfield, but he does not guard the milk. It is Napoleon who plants himself in front of the buckets.',
      'Napoleon, announcing that the farm will trade':
        "Napoleon does brush aside the animals' doubts about trade in Chapter 6, but this line is about the milk, in the very first days of the farm.",
    },
    more: 'The milk is a small detail with a large meaning: as soon as the humans are gone, a pig takes what the others produce. Orwell plants the betrayal of the Rebellion on its first full day.',
    tip: "Use it as early evidence of Napoleon's greed and cunning. Notice how he uses 'comrades' and the urgent harvest to distract the animals while he keeps the milk.",
  },
  'speaker: I have no wish to take life, not even human life': {
    why: 'Boxer says this in Chapter 4, after the Battle of the Cowshed, believing he has killed a stable-lad with a kick from his iron shoes. Snowball has just dismissed his grief as sentimental, but Boxer, in tears, repeats that he never wanted to kill. The boy turns out to be only stunned.',
    not: {
      'Snowball, after the Battle of the Cowshed':
        'Snowball is there, still bleeding from his wounds, but he takes the opposite view: he tells Boxer there is no room for sentiment in war.',
      'Boxer, after the confessions and executions':
        "After the executions in Chapter 7 the dead are animals, killed by Napoleon's dogs, so 'not even human life' would make no sense there.",
      'Clover, as the survivors gather on the knoll':
        "Clover grieves on the knoll after the executions in Chapter 7, but the victims are animals and her thoughts are never spoken aloud. The words 'human life' point to the battle.",
    },
    more: "Boxer's gentleness makes him the moral heart of the novella. The irony is cruel: the horse who would not take even a human life is later sold to the knacker by the pigs he serves.",
    tip: "Use it to show Boxer's goodness alongside his lack of political awareness. Contrast his tears with Snowball's hard line on violence.",
  },
  'speaker: Snowball has done this thing!': {
    why: 'Napoleon roars this in Chapter 6, after pacing among the ruins of the half-built windmill, which a November gale has blown down. Instead of facing the real causes, the storm and walls too thin, he blames an absent enemy and pronounces a death sentence on Snowball.',
    not: {
      'Napoleon, as his dogs chase Snowball off the farm':
        'When his dogs chase Snowball off the farm in Chapter 5, Napoleon only whimpers to call them, then ends the Sunday debates. Blaming Snowball for every disaster begins later, with the fallen windmill.',
      "Squealer, warning of Snowball's secret agents":
        "Squealer warns in Chapter 7 that Snowball's agents are hiding among the animals. He spreads suspicion, but this roar over a single disaster is Napoleon's.",
      'Napoleon, after the Battle of the Windmill':
        "In Chapter 8 Frederick's men blow up the windmill in full view of the animals, so there is no blaming Snowball. Squealer calls the fight a victory instead.",
    },
    more: "From this moment Snowball becomes the farm's scapegoat, blamed for every failure. An enemy who has gone can never answer back, so Napoleon can use him for ever.",
    tip: "Use it for scapegoating and propaganda. Link it to Stalin, who blamed the exiled Trotsky for the Soviet Union's failures.",
  },
  'speaker: It must be due to some fault in ourselves. The solution, as I see it, is to work harder.':
    {
      why: 'Boxer says this in Chapter 7, after the dogs have killed the animals who confessed to plotting with Snowball. Shaken, he cannot understand how such things could happen on their farm, so he blames the animals themselves and goes straight to the quarry to work.',
      not: {
        'Boxer, after the windmill falls in the storm':
          'When the windmill falls in Chapter 6, Napoleon blames Snowball at once, so Boxer has no reason to look for a fault in the animals. The rebuilding simply begins.',
        'Clover, as the survivors gather on the knoll':
          'Clover is on the knoll soon afterwards, but she says nothing aloud; the narrator gives her thoughts. She senses that the dream has been betrayed rather than blaming the animals.',
        'Boxer, after the Battle of the Windmill':
          "After the Battle of the Windmill Boxer is wounded and dreads the rebuilding, but the destruction was plainly the work of Frederick's men, not a fault in the animals.",
      },
      more: "Boxer's loyalty turns terror into self-blame. Earlier that day he pinned one of the dogs to the ground and let it go at Napoleon's order: his strength could have changed everything, but his trust keeps him working.",
      tip: 'Use it to analyse Boxer as the loyal working class. Orwell shows a regime surviving because its strongest supporter cannot imagine that the leader is to blame.',
    },
  'speaker: Fools! Do you not see what is written on the side of that van?': {
    why: 'Benjamin shouts this in Chapter 9, as the animals cheerfully say goodbye to Boxer. The old donkey, never before seen to gallop, has raced to fetch them. He pushes Muriel aside and reads the lettering: the van belongs to a horse slaughterer.',
    not: {
      'Clover, as the van comes for Boxer':
        'Clover does cry out, running after the van to warn Boxer, but only once Benjamin has read the words. She cannot read them herself.',
      "Benjamin, as Frederick's men drill into the windmill":
        'In Chapter 8 Benjamin calmly warns that the men are about to use blasting powder. That is about what the men are doing, not words written on a van.',
      'Benjamin, reading the barn wall to Clover':
        'In Chapter 10 Benjamin agrees to read the wall for Clover, breaking his rule. He reads quietly to a friend; he does not shout at a crowd.',
    },
    more: 'Reading is power on the farm, and Benjamin, who could always read as well as any pig, has chosen silence until now. His anger comes too late, and Orwell suggests that those who see the truth must speak sooner.',
    tip: "Use it to discuss Benjamin's cynicism and its cost. His silence for most of the novella makes this outburst more powerful, and more tragic.",
  },
  'point: Animal Farm: Which line shows the pigs set above the other animals even before Snowball was driven out?':
    {
      why: 'This is the narrator in Chapter 3, describing the first harvest, when Snowball and Napoleon still lead together. The pigs already give orders while the others labour, and the narrator presents it as natural. Inequality is there from the start, long before Napoleon rules alone.',
      not: {
        'A bed merely means a place to sleep in.':
          "Squealer defends the pigs' farmhouse beds in Chapter 6, after Snowball's expulsion. It shows privilege, but under Napoleon's sole rule, not before it.",
        'No animal shall drink alcohol TO EXCESS.':
          "The altered Fifth Commandment appears in Chapter 8, after the pigs find the whisky. It belongs to Napoleon's rule, long after Snowball has gone.",
        'it was announced that from now onwards all barley would be reserved for the pigs.':
          "This comes in Chapter 9, in a hungry winter when every ration but the pigs' and dogs' is cut. It shows the pigs' privilege at its height, not at its start.",
      },
      more: "The narrator's calm tone, as if it were natural for the clever to lead, is the irony: Orwell lets the reader watch a ruling class forming while the animals accept it. The milk and apples go to the pigs in the same chapter.",
      tip: "Use it to argue that the Rebellion was flawed from the beginning, not only betrayed by Napoleon. Pair it with the final scene to show the pigs' privilege growing step by step.",
    },
  "point: Animal Farm: Which line shows Squealer presenting Napoleon's change of mind as clever planning?":
    {
      why: 'Squealer says this in Chapter 5, after Napoleon, who had opposed the windmill, announces that it will be built after all. Squealer claims the opposition was only a trick to get rid of Snowball. The word turns a reversal into proof of genius, and the growling dogs stop any questions.',
      not: {
        'Surely, comrades, you do not want Jones back?':
          "Earlier in Chapter 5 Squealer defends the end of the Sunday debates by threatening the animals with Jones's return. That is fear, not a claim of clever planning.",
        "'Beasts of England' was the song of the Rebellion.":
          'In Chapter 7 Squealer abolishes the song by declaring the Rebellion complete. He rewrites the purpose of a song, not a change of policy by Napoleon.',
        'Those were his very last words, comrades.':
          "In Chapter 9 Squealer invents Boxer's dying words to cover up his sale to the knacker. It is a lie about Boxer, not a defence of Napoleon's change of mind.",
      },
      more: 'Orwell shows propaganda that can explain anything: if Napoleon was against the windmill, he was clever, and if he is for it, he is clever too. The animals do not know what the word means, which is exactly why it works.',
      tip: "Use it to analyse Squealer's methods: an impressive word the animals cannot challenge, repeated for effect. Link it to Stalin, who opposed Trotsky's plans for rapid industrialisation and then adopted them.",
    },
  'point: Animal Farm: Which line, from a loyal animal, quietly exposes a claimed victory as empty?':
    {
      why: "Boxer says this in Chapter 8, after the Battle of the Windmill, when Squealer hails the fight as a great victory. Frederick's men have blown up the windmill, and animals have been killed and wounded. Boxer's simple words reveal the truth: they have only regained the ground they already had.",
      not: {
        'If Comrade Napoleon says it, it must be right.':
          "Boxer's answer to Squealer, first given in Chapter 5, hands his judgement over to Napoleon. It is blind loyalty, the opposite of seeing through a claim.",
        'I will work harder!':
          "Boxer's personal motto from Chapter 3 answers every problem with more effort. It accepts whatever happens rather than questioning what the leaders say.",
        'That is our victory':
          "This is Squealer's reply to Boxer, insisting that regaining lost ground is a triumph. It is the propaganda being exposed, not the line that exposes it.",
      },
      more: 'Orwell gives the plainest truth to the animal least able to act on it. Boxer notices, but he draws no conclusion and braces himself to rebuild. The reader sees what he cannot.',
      tip: "Use it to show how Orwell creates irony through simple speech. Contrast Boxer's plain words with Squealer's spin, which redefines a loss as a victory.",
    },
  'word: A bed merely means a place to sleep in. | Which word plays the change down, as if it hardly matters?':
    {
      why: "Squealer says this in Chapter 6, when the animals learn that the pigs are sleeping in the farmhouse beds. 'Merely' shrinks the question to a quibble about words: if a bed is just any place to sleep, the pigs have done nothing worth objecting to.",
      not: {
        bed: "'Bed' is the word being redefined, the subject of the argument. It carries no dismissive tone of its own; the words around it act on it.",
        means:
          "'Means' introduces the new definition, but it is neutral on its own. The belittling comes from the word just before it.",
        place:
          "'Place' is vague, which lets a pile of straw count as a bed. It widens the meaning, but it does not make the change sound unimportant.",
      },
      more: 'Squealer does not deny the facts; he changes what the words mean. Orwell warns that whoever controls language can break a rule without seeming to break it, as the altered Commandment on the wall then shows.',
      tip: 'Use it for propaganda and euphemism. Analyse how one small adverb makes any objection seem petty, and link it to the Commandment that now forbids beds only with sheets.',
    },
  "word: These scenes of terror and slaughter were not what they had looked forward to | Which word echoes Old Major's warning about how Man treated farm animals?":
    {
      why: "The narrator gives Clover's thoughts in Chapter 7, as she looks down at the farm after the executions. 'Slaughter' is the word for killing animals for meat, and in Chapter 1 Major warned that Man slaughters them cruelly. Now the animals are killed at their own leader's command.",
      not: {
        scenes:
          "'Scenes' makes the killings sound like a show staged for the animals to watch, which fits the forced confessions. It does not recall Major's warning.",
        terror:
          "'Terror' names the fear the regime now rules by. Major spoke of misery, hunger and cruelty, never of terror: this is a new word for a new kind of power.",
        looked:
          "'Looked forward' recalls the hopes of Major's night in the barn, but 'looked' itself carries no echo of his warning about Man's cruelty.",
      },
      more: "The sentence is Clover's sorrow put into words she cannot find herself. Orwell lets the reader feel that the Rebellion has brought back the very evil it was meant to end.",
      tip: "Use it to show the betrayal of Major's dream. Quoting 'slaughter' lets you link Chapter 7 straight back to his speech in Chapter 1.",
    },
  "word: Four legs good, two legs BETTER! | What does 'BETTER' suggest here?": {
    why: 'The sheep bleat this in Chapter 10 as the pigs walk out on their hind legs, Napoleon carrying a whip. One changed word reverses the first principle of Animalism: walking on two legs, once the mark of the enemy, now marks the rulers as superior.',
    not: {
      'The sheep have at last learnt to think for themselves':
        'Squealer has taught the sheep the new slogan during a week away from the farm. They bleat it on cue to drown any protest, which shows obedience, not thought.',
      'Life has improved for every animal on the farm':
        "The other animals are still generally hungry and hard-worked. 'BETTER' ranks the two-legged above the four-legged; it says nothing about living conditions.",
      'Animals and men are now to be treated as equals':
        'The slogan makes the opposite claim, setting the two-legged above the rest. Equality has gone, as the single Commandment left on the barn wall soon confirms.',
    },
    more: 'The slogan was first made so that animals who could not read could grasp Animalism. Because they never understood it, one word can turn it inside out, and the sheep bleat the new version just as happily.',
    tip: 'Use it to show how propaganda replaces thought. Compare it with the Chapter 3 version to measure how far the revolution has travelled.',
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
  "Now what the hell ya suppose is eatin' them two guys?": {
    why: 'Carlson says this in the last line of Of Mice and Men, in Chapter 6, as Slim leads George away from the river after George has shot Lennie. Carlson cannot understand why the two men are upset: to him, a problem has simply been dealt with.',
    more: "Steinbeck ends not on George's grief but on a man who cannot see it. Carlson stands for the ranch's hard indifference, and he is given the final word.",
    tip: 'Use it to discuss the ending and the theme of loneliness: the friendship that made George and Lennie different is something Carlson cannot even recognise.',
  },
  "speaker: I could get along so easy ... if I didn't have you on my tail.": {
    why: "George says this in Chapter 1, at the clearing by the pool, when Lennie complains that there is no ketchup for the beans. George explodes, imagining an easy life of work and nights in town without Lennie to look after. Then he sees Lennie's face and is ashamed.",
    not: {
      'George, telling Slim about life with Lennie':
        'When George talks to Slim in Chapter 3 he admits Lennie is a nuisance, but he defends him and says that going around alone is no good.',
      "George, after Curley's wife is found dead":
        'In Chapter 5 George does picture a lonely life of wages and nights in town, but in bitter grief, not anger, and Lennie is not there to hear it.',
      "George, after Lennie's fight with Curley":
        'After the fight in Chapter 3 George reassures Lennie that he has done nothing wrong; it was George who told him to fight back.',
    },
    more: "Steinbeck shows that George's care for Lennie is a choice he keeps making, whatever it costs him. The carefree life George imagines is the lonely life the novel shows to be empty.",
    tip: "Use it to show the tension in their friendship: George's anger is real, but so is his shame. Contrast it with his loyalty later in the novel.",
  },
  'speaker: What stake you got in this guy?': {
    why: "The boss asks George this in Chapter 2, when the new men arrive at the ranch. George keeps answering for Lennie, and the boss suspects he is taking Lennie's pay. He cannot imagine one man taking so much trouble over another for nothing.",
    not: {
      'Curley, sizing up the new men':
        'Curley does look the new men over in Chapter 2 and picks on Lennie for keeping quiet. He wants a fight, not an explanation of their friendship.',
      'Slim, getting to know George':
        "Slim is curious about the pair, but he is kind and trusting and never suspects George of using Lennie. The suspicion here is the boss's.",
      'Crooks, questioning Lennie about George':
        "Crooks does question Lennie in Chapter 4, cruelly suggesting George may not come back. He is testing Lennie's fear of being alone, not asking what George gains.",
    },
    more: "The boss's suspicion shows how strange friendship looks in a world of lonely, rootless workers. Steinbeck makes the reader see George and Lennie's bond as rare and precious.",
    tip: 'Use it in an essay on friendship or loneliness: on the ranch, the only reason anyone can imagine for one man helping another is money.',
  },
  "speaker: Maybe ever'body in the whole damn world is scared of each other.": {
    why: 'Slim says this to George in Chapter 3, in the bunkhouse, musing on how few men travel around together. Slim is the wisest man on the ranch, and his quiet remark suggests that loneliness comes from fear and mistrust, not choice.',
    not: {
      'George, talking with Slim in the bunkhouse':
        "George is in the conversation and explains his friendship with Lennie, but this reflection on why so few men travel together is Slim's.",
      'Crooks, talking with Lennie in his room':
        'Crooks talks about loneliness to Lennie in Chapter 4, but bitterly, from his own exclusion. This calm, general reflection belongs to Slim.',
      "Curley's wife, talking with Lennie in the barn":
        "Curley's wife pours out her loneliness to Lennie in Chapter 5, but she talks about herself and her lost dreams, not about everybody's fear.",
    },
    more: "'Scared of each other' turns loneliness into a social problem: the men keep apart because they distrust one another. Steinbeck, writing in the Depression, suggests a whole society short of trust.",
    tip: "Use it to widen an essay on loneliness from individuals to society. Slim's authority on the ranch gives the remark extra weight.",
  },
  "speaker: I think I knowed we'd never do her.": {
    why: "George says this in Chapter 5, in the barn, after Candy has shown him the body of Curley's wife. With Lennie gone, George admits to Candy that he always half knew the farm would never happen: he kept telling the dream because Lennie loved to hear it.",
    not: {
      "Candy, after finding Curley's wife dead":
        'Candy is there and is devastated too, but he pleads with George that the two of them could still get the place. It is George who admits the dream was always doomed.',
      'George, just before he shoots Lennie':
        'At the river in Chapter 6 George tells the dream one last time, so that Lennie is happy at the end. He does not voice his doubts there.',
      'Crooks, when he hears about the farm plan':
        'Crooks scoffs at the plan in Chapter 4, having seen hundreds of men chase land and never get it. This line is the regret of someone who believed in the dream.',
    },
    more: "The admission is heartbreaking: the dream was kept alive for Lennie's sake. Steinbeck suggests that for men like these, the American Dream was a story to get through the day, not a plan.",
    tip: "Use it to show the dream's fragility. Pair it with Crooks's scepticism in Chapter 4 to argue that Steinbeck saw such dreams as doomed for men like George.",
  },
  "point: Of Mice and Men: Which line shows Curley's wife threatening a man with less power than she has?":
    {
      why: "Curley's wife says this to Crooks in Chapter 4, when he tells her to leave his room. As a white woman in 1930s California, she reminds him that a word from her could get a black man lynched. Her own powerlessness makes her cruel to someone with even less.",
      not: {
        'They left all the weak ones here.':
          "Curley's wife sneers at Crooks, Candy and Lennie when she finds them together. It is contempt, not a threat, and the irony is that she has been left behind too.",
        "Coulda been in the movies, an' had nice clothes.":
          "Curley's wife tells Lennie about her lost dream in Chapter 5. It shows her loneliness and disappointment, not a threat to anyone.",
        "You can talk to people, but I can't talk to nobody but Curley.":
          "Curley's wife confides in Lennie in Chapter 5 that her husband controls whom she talks to. It shows her as trapped, not threatening.",
      },
      more: "The scene exposes the ranch's ladder of power: race, gender, age and disability. Crooks shrinks into himself at once, which shows how complete her power over him is.",
      tip: "Use it to analyse power and prejudice. Show how Steinbeck makes the reader pity Curley's wife elsewhere, yet refuses to excuse her cruelty here.",
    },
  'point: Of Mice and Men: Which line shows a life being judged only by whether it is still useful?':
    {
      why: "Carlson says this about Candy's old dog in Chapter 3, in the bunkhouse. The dog is old, smelly and stiff, so to Carlson it should simply be shot. Candy, old and missing a hand, hears in it his own future on the ranch.",
      not: {
        'I ought to of shot that dog myself, George.':
          'Candy says this to George later in Chapter 3, regretting that he let a stranger shoot his dog. It is grief and guilt, not a judgement about usefulness.',
        "S'pose I went in with you guys.":
          'Candy offers his savings to join the dream in Chapter 3. It shows his hope of security, not a life being judged.',
        "Maybe ever'body in the whole damn world is scared of each other.":
          "Slim's remark in Chapter 3 is about why men keep apart from one another. It concerns fear and loneliness, not usefulness.",
      },
      more: "Candy's dog foreshadows Candy's fear of being thrown out when he can no longer work, and George's decision at the end. On the ranch, a life is worth only the work it can do.",
      tip: "Use it in an essay on the weak and vulnerable. Link the dog's death to Candy's fear of being thrown out, and to how George later chooses to act himself.",
    },
  'word: A guy needs somebody - to be near him. | Which word makes company a basic necessity rather than a wish?':
    {
      why: "Crooks says this to Lennie in Chapter 4, in his room off the barn, where he lives apart because he is black. 'Needs' makes companionship as essential as food or shelter: without it, a person suffers. Crooks speaks from his own isolation.",
      not: {
        guy: "'Guy' makes the statement general, true of any man, which widens it. It does not say how vital company is.",
        somebody:
          "'Somebody' suggests that any companion would do, which is moving, but it does not make company a necessity.",
        near: "'Near' shows that physical presence matters, someone close by. The sense of necessity comes from the verb before it.",
      },
      more: "Steinbeck lets the most isolated man on the ranch speak the novel's deepest truth about loneliness. The dash suggests Crooks struggling to put a painful feeling into words.",
      tip: "Use it to analyse loneliness and prejudice together. Crooks's general statement grows out of his own exclusion as the only black man on the ranch.",
    },
  "word: You hadda, George. I swear you hadda. | What does 'swear' suggest here?": {
    why: "Slim says this in Chapter 6, just after George has shot Lennie by the river to spare him a crueller death at Curley's hands. 'Swear' adds force to his reassurance: Slim insists, as strongly as he can, that George did the only thing he could.",
    not: {
      'Slim is cursing at George in anger':
        'Slim does not swear in the sense of cursing: he speaks quietly and kindly, and leads George away. Here the word means he solemnly insists.',
      'Slim is shocked by what George has done':
        'Slim is the one man who understands at once what George has done and why. He is calm, not shocked, and he comforts George.',
      'Slim doubts that George had any choice':
        'Slim has no doubt at all; that is why he repeats the words. He understands that George spared Lennie a worse death.',
    },
    more: 'Slim is the only man who understands what George has done and why. Steinbeck ends the friendship with a rare moment of understanding between two men.',
    tip: "Use it to argue that George's act is presented as mercy. Slim's authority on the ranch makes his verdict the one the reader trusts.",
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
  '...licked a hundred years ... no reason for us not to try to win.': {
    why: "Atticus says this to Scout in Chapter 9 of To Kill a Mockingbird, when she asks whether he will win Tom Robinson's case and he admits he will not. The fight against prejudice in the South was lost long before he began, he suggests, but that is no excuse for not trying.",
    more: "Atticus's quiet determination defines courage in the novel: doing right when defeat is certain. The hundred years reach back to the Civil War and the racism that outlasted it.",
    tip: "Use it in an essay on Atticus or on courage. Link it to the way he later explains Mrs Dubose's bravery to Jem in Chapter 11.",
  },
  "I think there's just one kind of folks. Folks.": {
    why: 'Scout says this to Jem in Chapter 23 of To Kill a Mockingbird, after the trial. Jem has sorted their town into four kinds of folks, each looking down on the next, but Scout rejects the whole idea: people are simply people.',
    more: "The repetition of 'folks' answers a complicated hierarchy with one plain word. Lee gives the novel's simplest statement of equality to its youngest voice.",
    tip: "Use it to show Scout's growing understanding of prejudice and class. Contrast her simple answer with the divisions the trial has exposed.",
  },
  "speaker: Shoot all the bluejays you want, ... remember it's a sin to kill a mockingbird.": {
    why: 'Atticus says this to Jem at the start of Chapter 10, after giving the children air rifles. He will not teach them to shoot, but he lays down one rule. It is the only time Scout hears him call something a sin, so she asks Miss Maudie what he meant.',
    not: {
      "Miss Maudie, explaining Atticus's rule to Scout":
        'Miss Maudie explains the rule to Scout afterwards: mockingbirds only make music and do no harm. She agrees with Atticus, but the warning about the rifle is his.',
      'Atticus, before he shoots the mad dog':
        "Before he shoots the mad dog later in Chapter 10, Atticus says very little and reluctantly takes Heck Tate's rifle. He is not giving advice about birds.",
      'Uncle Jack, teaching the children to shoot':
        'Uncle Jack does teach the children the basics of shooting, since Atticus will not. But the rule about mockingbirds comes from Atticus himself.',
    },
    more: "The mockingbird becomes the novel's symbol of innocence: harmless people, such as Tom Robinson and Boo Radley, whom it is wrong to destroy. A father's quiet rule carries the moral of the whole book.",
    tip: 'Use it to introduce the mockingbird symbol, then apply it to Tom and Boo. Notice that Lee gives the title its meaning through a simple instruction to a child.',
  },
  "speaker: It's not necessary to tell all you know.": {
    why: 'Calpurnia says this to Scout in Chapter 12, after taking the children to First Purchase church. Scout asks why she talks differently among her own people. Calpurnia explains that showing off what you know is unladylike and makes others uncomfortable, so she fits her speech to her company.',
    not: {
      'Aunt Alexandra, teaching Scout to be a lady':
        'Aunt Alexandra arrives at the end of Chapter 12 determined to make Scout a lady, but her lessons are about dresses and family pride, not about keeping knowledge to herself.',
      'Miss Maudie, talking to Scout on her porch':
        'Miss Maudie talks frankly with Scout about Atticus and the neighbours. She shares what she knows; this advice about fitting in comes from Calpurnia.',
      'Atticus, after Scout fights at school':
        'Atticus tells Scout in Chapter 9 to hold her head high and not fight, whatever the other children say. That is about restraint with fists, not about what to reveal.',
    },
    more: "Calpurnia lives between two worlds, the Finch household and the black community of Maycomb. Her advice shows how much she must manage every day, and it widens Scout's sense of the town.",
    tip: "Use it to discuss Calpurnia and the novel's picture of race: she is more than the Finches' cook, and her double life shows how divided Maycomb is.",
  },
  'speaker: I felt right sorry for her.': {
    why: "Tom Robinson says this in Chapter 19, under cross-examination, explaining why he helped Mayella Ewell with her chores for nothing. The all-white courtroom hears a black man pitying a white woman, and Tom's honesty counts against him in the jury's eyes.",
    not: {
      'Mr Gilmer, cross-examining Tom':
        "Mr Gilmer seizes on Tom's words and throws them back at him with contempt. He repeats the idea; he did not first say it.",
      'Atticus, in his closing speech':
        "In his closing speech Atticus does say he pities Mayella, but in formal language, as a victim of poverty and ignorance. These plain words are Tom's.",
      'Scout, watching the trial from the balcony':
        'Scout does come to think that Mayella must be the loneliest person in the world, but she is a watcher in the balcony and never speaks in court.',
    },
    more: "Lee shows how a racist society hears an act of kindness as a crime. Tom's pity breaks an unwritten rule, and Mr Gilmer uses it to turn the jury against him.",
    tip: "Use it to show that the trial turns on race, not evidence. Tom's simple, sincere words contrast with the contempt with which they are received.",
  },
  'speaker: Most people are, Scout, when you finally see them.': {
    why: "Atticus says this in Chapter 31, the last chapter, sitting by Scout after Bob Ewell's attack. Half asleep, she tells him that the boy in the story he was reading turned out to be real nice once people finally saw him. Atticus agrees, and the reader thinks of Boo Radley.",
    not: {
      'Atticus, after the mob leaves the jail':
        'After the mob leaves in Chapter 16 Atticus tells the children that Mr Cunningham is basically a good man with blind spots. The idea is similar, but this line closes the novel.',
      'Atticus, after Mrs Dubose dies':
        'After Mrs Dubose dies in Chapter 11 Atticus tells Jem she was the bravest person he knew. He is praising her courage, not saying that people are good once truly seen.',
      'Miss Maudie, after the verdict':
        'Miss Maudie comforts the children after the verdict, pointing out that some people in Maycomb tried to help Tom. That is about the town, not about seeing someone truly.',
    },
    more: 'The last words of dialogue in the novel sum up its moral education: prejudice comes from not really seeing people. Boo, feared by the children for years, turns out to be gentle and brave.',
    tip: "Use it in a conclusion on empathy. Link it to Atticus's advice in Chapter 3 about seeing things from another person's point of view.",
  },
  'point: To Kill a Mockingbird: Which line shows a man of the law choosing to keep a truth hidden to protect someone?':
    {
      why: 'Sheriff Heck Tate says this in Chapter 30, insisting that Bob Ewell fell on his own knife. He knows Boo Radley killed Ewell to save the children, but dragging so shy a man into public view would, he says, be a sin. He bends the law to protect a good man.',
      not: {
        'In our courts all men are created equal.':
          'Atticus says this in his closing speech in Chapter 20, urging the jury to treat Tom fairly. It is about equal justice for all, not about hiding the truth.',
        "The one thing that doesn't abide by majority rule is a person's conscience.":
          'Atticus tells Scout in Chapter 11 that conscience is not decided by a vote. It explains why he defends Tom, but it is not about keeping a secret to protect anyone.',
        'People in their right minds never take pride in their talents.':
          'Miss Maudie says this in Chapter 10 about Atticus never boasting of his marksmanship. It is about modesty, and it is not said by a man of the law.',
      },
      more: 'The novel ends its legal story with a lie told for a good reason. Atticus at first resists, thinking Tate is shielding Jem, but accepts it once he understands. Lee suggests that justice and the law are not always the same.',
      tip: 'Use it in an essay on justice or on Boo. Connect it to the mockingbird: as Scout herself sees, exposing Boo would be like killing one.',
    },
  'point: To Kill a Mockingbird: Which line shows a child admitting he used to think better of his neighbours?':
    {
      why: "Jem says this to Miss Maudie in Chapter 22, the morning after the jury convicts Tom Robinson. He had believed his neighbours were good, and the verdict has shattered that faith. The past tense of 'always thought' marks the loss.",
      not: {
        'Atticus, he was real nice.':
          'Scout says this sleepily at the end of the novel, about the boy in a story who turns out to be good. She is thinking better of someone, not worse.',
        'Hey, Mr Cunningham.':
          'Scout greets Mr Cunningham outside the jail in Chapter 15, innocently reminding him that he is a father and a neighbour. It shames the mob, but it admits no lost faith.',
        'Atticus was right. ... never really know a man until you stand in his shoes.':
          'Scout reflects on the Radley porch at the end that Atticus was right about understanding people. She is learning to see someone truly, not losing faith in her town.',
      },
      more: "Jem's disillusion is part of growing up: the trial shows him that respectable neighbours can be unjust. Miss Maudie answers by reminding him of the few who tried to help.",
      tip: "Use it to trace Jem's loss of innocence. Compare his view of Maycomb before the trial with his view after it.",
    },
  "word: I do my best to love everybody. | What does 'best' suggest here?": {
    why: "Atticus says this to Scout in Chapter 11, after she asks him about the insult people throw at him for defending Tom. 'Do my best' admits effort and limits: loving everybody is hard, and he goes on to say that he is hard put to it sometimes.",
    not: {
      'He is boasting that he is the best man in Maycomb':
        "Atticus never boasts; he even hides his gift for shooting. 'Best' here means his best effort, not that he is the best.",
      'He loves his own family best of all':
        "He is not ranking whom he loves. 'Do my best' is about effort: he tries to love everyone, including people who insult him.",
      'He thinks he is better than the people who insult him and his children':
        "Atticus does not claim to be better than his critics. 'Do my best' measures his effort to love even them, not his own worth.",
    },
    more: "Atticus's modest phrasing makes his goodness believable: he is a man trying, not a saint. Lee presents tolerance as a daily effort rather than a feeling.",
    tip: "Use it to show Atticus's moral strength through understatement. 'Do my best' is more convincing than a grand claim to love everyone.",
  },
  "word: With him, life was routine; without him, life was unbearable. | What does 'routine' suggest here?":
    {
      why: "Scout says this in Chapter 12, when she learns that Dill will not be coming to Maycomb that summer. Here 'routine' is a good thing: with Dill, life follows its happy, ordinary pattern. Set against 'unbearable', it shows how much his company means to her.",
      not: {
        'Dill makes life dull and predictable':
          "'Routine' can mean dull, but not here: the balance with 'unbearable' makes it the comfortable, normal life that Dill's absence takes away.",
        'Scout keeps to a timetable when Dill visits':
          "Scout is not describing a schedule. 'Routine' means life as it should be, the ordinary summer pattern she has lost.",
        "Dill organises the children's games every day":
          "Dill does invent many of the children's games, but the word describes how life feels with him, not who plans it.",
      },
      more: "The balanced sentence, with 'with' set against 'without', lets Scout's adult narrating voice capture a child's feeling exactly. Dill's absence also marks a summer in which the children begin to grow apart.",
      tip: "Use it to analyse Lee's narrative voice: an adult's polished sentence holding a child's feeling. Look at the antithesis and the semicolon at its centre.",
    },
  'When did you become a shivering old woman?': {
    why: 'Okonkwo asks himself this in Part 1, Chapter 8 of Things Fall Apart, in the days after he has killed Ikemefuna, the boy who called him father. He cannot eat or sleep, and he scolds himself for grieving, which he sees as womanly weakness.',
    more: 'Okonkwo equates feeling with femininity and femininity with weakness, so he cannot allow himself to mourn. Achebe shows that his fear of seeming weak is itself his greatest weakness.',
    tip: "Use it to analyse Okonkwo's masculinity. Link it to the narrator's statement in Chapter 2 that his whole life was ruled by fear of failure and weakness.",
  },
  'The white man is very clever... our clan can no longer act like one.': {
    why: 'Obierika says this to Okonkwo in Part 3, Chapter 20 of Things Fall Apart, after Okonkwo returns from exile. The missionaries came peacefully, he explains, and won over members of the clan, so it can no longer unite to drive them out.',
    more: "Obierika is the novel's thoughtful observer, and his analysis is sharper than Okonkwo's anger. Colonial power wins here not by force but by dividing the people it rules.",
    tip: "Use it in an essay on colonialism. It shows that the clan falls apart from within, which is why Okonkwo's call to fight fails.",
  },
  'speaker: I would neither dispute it nor be the one to do it.': {
    why: "Obierika says this in Part 1, Chapter 8, when Okonkwo visits him after killing Ikemefuna. Obierika chose not to go with the men to the forest: if the Oracle ordered his own son's death, he says, he would not argue, but he would not do the killing himself.",
    not: {
      'Ogbuefi Ezeudu, warning Okonkwo before the boy is taken':
        'Ogbuefi Ezeudu does warn Okonkwo not to take part, because the boy calls him father. But he speaks before the killing; this is said after it.',
      'Okonkwo, defending to Obierika what he has done':
        "Okonkwo is there, but he argues the opposite: that the Oracle's decree had to be carried out, and that Obierika seems to question its authority.",
      'Obierika, after Okonkwo is sent into exile':
        "After the exile Obierika does question the clan's customs, but he joins the men who destroy Okonkwo's compound, as the law requires. This refusal belongs to the earlier killing.",
    },
    more: 'Obierika stands for a respect for tradition that keeps its conscience. Achebe uses him to show that Igbo society had its own questioning voices long before the missionaries arrived.',
    tip: 'Use Obierika as a foil to Okonkwo: both respect custom, but only Obierika thinks about it. This undermines any idea that the clan was one unquestioning mind.',
  },
  'speaker: what is good among one people is an abomination with others.': {
    why: "Uchendu says this in Part 2, Chapter 15, after Obierika has told how white men destroyed the village of Abame. Uchendu, Okonkwo's old uncle in Mbanta, reflects that customs differ between peoples: what one people values, another finds hateful.",
    not: {
      'Obierika, telling Okonkwo about Abame':
        "Obierika brings the news of Abame's destruction to Mbanta and tells the story, but this reflection on how customs differ is Uchendu's response to it.",
      'Mr Brown, talking with Akunna about religion':
        "Mr Brown does discuss religion respectfully with Akunna in Part 3, and each learns about the other's beliefs. But this saying comes from Uchendu, an Igbo elder.",
      'Uchendu, telling Okonkwo why mother is supreme':
        "Earlier in his exile Uchendu explains to Okonkwo why a man's motherland is his refuge in sorrow. That speech is about family and exile, not about how peoples judge each other.",
    },
    more: "Uchendu's words express a tolerance that the colonisers lack: Achebe lets an Igbo elder voice the idea of cultural difference. The irony is that the newcomers will judge everything Igbo by their own standards.",
    tip: 'Use it to argue that Achebe presents Igbo culture as open-minded and complex. Contrast it with the intolerance of some of the missionaries in Part 3.',
  },
  'point: Things Fall Apart: Which line shows how highly the Igbo prize skilful speech?': {
    why: 'The narrator says this in Part 1, Chapter 1, when Okoye visits Unoka to ask for the money he is owed. Their talk circles politely through proverbs before reaching the point. Conversation is an art, and proverbs make words easy to take, as palm-oil helps food go down.',
    not: {
      'When the moon is shining the cripple becomes hungry for a walk.':
        'This saying describes the urge to go out on a moonlit night. It is an example of proverbs in use, but it says nothing about how much they are prized.',
      'When a man says yes his chi says yes also.':
        "This saying is about fate and will: Okonkwo's success comes from his own determination. It is wisdom put into words, not a comment on valuing words.",
      'One could almost write a whole chapter on him. ... but a reasonable paragraph.':
        "The District Commissioner thinks this at the very end, planning his book on the region. It shows a coloniser shrinking Okonkwo's story, not the Igbo love of language.",
    },
    more: 'Achebe opens by presenting a sophisticated culture with its own rules of speech, answering European writing that portrayed Africa as silent or savage. The proverbs throughout the novel prove the point.',
    tip: 'Use it to show Achebe writing back against colonial stereotypes. Analyse the metaphor: proverbs are a seasoning that makes difficult things easier to say.',
  },
  'point: Things Fall Apart: Which line shows the clan replacing a man who has left it?': {
    why: "The narrator says this at the start of Part 3, as Okonkwo returns from seven years of exile. A man's place does not wait for him: like a lizard growing a new tail, the clan has filled the gap he left, and he has lost years in which he might have risen highest.",
    not: {
      'He has put a knife on the things that held us together ... fallen apart.':
        'Obierika says this later in the same chapter about the white man. It describes the clan being broken apart, not quietly replacing one of its members.',
      'Does the white man understand our custom about land?':
        "Okonkwo asks Obierika this about the white man's court. It is about the newcomers' ignorance of Igbo law, not about the clan filling Okonkwo's place.",
      'one of the greatest men in Umuofia. You drove him to kill himself.':
        "Obierika says this to the District Commissioner after Okonkwo's death at the end. It mourns a great man; it does not show the clan replacing him.",
    },
    more: "The lizard image is double-edged. It shows the clan's strength, but also its indifference to any single man, which Okonkwo never accepts. Achebe prepares the reader for his isolation in Part 3.",
    tip: "Use it to analyse Okonkwo's return. The image suggests the clan can survive without Okonkwo, but, as the rest of Part 3 shows, not without its unity.",
  },
  "word: Living fire begets cold, impotent ash. | Which word shows Okonkwo's contempt for what he sees as his son's lack of manly strength?":
    {
      why: "This is Okonkwo's bitter thought in Part 2, Chapter 17, after his son Nwoye joins the Christians. He sees himself as fire and Nwoye as the ash it leaves. 'Impotent' means powerless: to Okonkwo, a son who turns from the clan's ways has no manly strength at all.",
      not: {
        Living:
          "'Living' describes the fire, Okonkwo's view of himself as full of energy. It praises the father; it does not attack the son.",
        fire: "'Fire' is Okonkwo's image of himself, and he was known as the Roaring Flame. It sets up the contrast but carries no contempt of its own.",
        cold: "'Cold' shows the ash as lifeless, the opposite of fire, which is close. But 'impotent' adds the charge of powerlessness that Okonkwo fears most.",
      },
      more: "The metaphor turns a family break into a law of nature: fire ends in ash. Okonkwo cannot see that Nwoye's gentleness, and his grief at Ikemefuna's death, drove him away.",
      tip: "Use it to analyse the father and son relationship. Link Nwoye's conversion to Ikemefuna's death, which first broke something inside him.",
    },
  'word: He saw things as black and white. And black was evil. | Which word does the narrator turn from a moral image into a racial judgement?':
    {
      why: "The narrator describes Reverend Smith in Part 3, Chapter 22, the missionary who replaces the gentle Mr Brown. 'Black and white' first means seeing only good and bad, but the second sentence turns 'black' into a verdict on black people: Smith condemns the Igbo and their ways.",
      not: {
        saw: "'Saw' introduces Smith's way of seeing, but it is neutral. The judgement lies in what he sees, not in the verb.",
        white:
          "'White' completes the familiar phrase for seeing in absolutes, but the narrator does not return to it. The second sentence picks up the other word.",
        evil: "'Evil' states the judgement, but it is the repeated word before it that slides from a figure of speech to a racial meaning.",
      },
      more: "Achebe uses dry irony to expose Smith's intolerance. Unlike Mr Brown, who learned from Akunna, Smith sees nothing to understand, and his zeal leads to the conflict that ends in Okonkwo's death.",
      tip: "Use it to analyse the presentation of the missionaries. Contrast Smith with Mr Brown to show that Achebe's criticism is precise, not a blanket attack.",
    },
  'Now we settle for half, and I like it better.': {
    why: 'Alfieri, the lawyer who narrates A View from the Bridge, says this in his opening speech. In the old days justice meant blood for blood; now, he says, people settle for half, and he prefers it: civilised life means compromise.',
    more: 'The line states the test the whole play sets. Eddie Carbone cannot settle for half of anything, least of all Catherine, and that refusal destroys him.',
    tip: 'Use this line in an introduction to frame Eddie as a tragic hero who cannot accept the compromise Alfieri values.',
  },
  'The law is only a word for what has a right to happen.': {
    why: "Alfieri says this in Act 2. To him the law is only a name for what ought, by nature, to happen, and it cannot reach every wrong. The line is the play's way of asking whether justice lies in the law or beyond it.",
    more: "Miller sets the written law, which cannot touch Eddie's feelings or Marco's grief, against an older idea of natural justice. Alfieri understands both and can stop neither.",
    tip: "Use the line on justice and the law: compare Alfieri's careful view with Marco's loyalty to the old code of honour.",
  },
  'speaker: In my country he would be dead now.': {
    why: 'Marco says this to Alfieri in Act 2, while he is held after his arrest. Eddie has betrayed him to the Immigration Bureau, and in Sicily, Marco says, such a man would already have been killed: justice there is immediate.',
    not: {
      'Alfieri, to Marco in prison':
        "Alfieri is there, but he argues for the law and asks Marco to promise not to harm Eddie. The appeal to the old country's justice is Marco's.",
      'Marco, after lifting the chair at the end of Act 1':
        "At the end of Act 1 Marco lifts the chair over Eddie's head in silence, a warning without words. This spoken threat comes after the betrayal.",
      'Eddie, telling the story of the boy who informed':
        "That story, of a boy punished by his own family for informing, comes in Act 1. It shows the code, but these words are Marco's, after Eddie breaks it.",
    },
    more: "Marco speaks for an old, unwritten code of honour and revenge. Set against Alfieri's law, it shows two ideas of justice that the play cannot reconcile.",
    tip: "Use the line to explain Marco's motive for the final fight, and link it to Alfieri's opening speech about the old days of blood for blood.",
  },
  'speaker: I want my name!': {
    why: 'In the final scene Eddie waits for Marco, who has publicly called him an informer. He demands that Marco give him back his name, his reputation in the neighbourhood, which he himself destroyed by betraying the cousins.',
    not: {
      'Eddie, as the Immigration officers take the cousins away':
        "When the officers come, Marco spits in Eddie's face and accuses him in front of the street. Eddie's demand for his name follows that public shame.",
      'Marco, as he is led away by the Immigration officers':
        "Marco is the one who has taken Eddie's name by accusing him. He wants vengeance, not a name.",
      'Rodolpho, trying to make peace with Eddie at the end':
        "Rodolpho does try to make peace before the fight, but he asks for nothing for himself. The obsession with reputation is Eddie's.",
    },
    more: 'Reputation is everything to Eddie, and the four short words show how little else he has left. It is a tragic irony: he lost his name the moment he made the phone call.',
    tip: "Use the line on honour and pride to show why Eddie cannot back down, and link it to the community's hatred of informers.",
  },
  'point: A View from the Bridge: Which line shows Alfieri knowing from the beginning how the story will end?':
    {
      why: 'Alfieri tells the audience that he could see every step coming as Eddie moved towards disaster, yet he was powerless to stop it. The line makes the tragedy feel inevitable: the tension comes from watching it happen, not from surprise.',
      not: {
        'His eyes were like tunnels.':
          "This describes Eddie's narrowed, obsessive look when he visits Alfieri. It shows what Alfieri saw in Eddie, not his sense of where the story would end.",
        'he allowed himself to be wholly known':
          "This comes in Alfieri's closing speech, after Eddie's death, looking back. It judges Eddie; it does not foresee the ending.",
        'Now we settle for half, and I like it better.':
          "The opening speech sets out Alfieri's belief in compromise. It frames the play, but it does not predict what will happen.",
      },
      more: 'Alfieri works like the chorus of a Greek tragedy: he knows the end and cannot change it. Miller gives the play the shape of an ancient tragedy set in modern Brooklyn.',
      tip: "Use Alfieri's foreknowledge when you write about the play's structure and its links to Greek tragedy.",
    },
  "word: His eyes were like tunnels. | What does 'tunnels' suggest here?": {
    why: "A tunnel lets you see only straight ahead, to one point of light. Alfieri sees that Eddie's vision has narrowed to a single obsession, Catherine, and that he can no longer see anything else, including where it will lead him.",
    not: {
      'his eyes are dark and sunken from lack of sleep':
        'The simile is about where Eddie is looking, not how tired he is. A tunnel narrows vision to one direction.',
      'he is hiding something deep inside himself':
        'Eddie does hide his feelings, but a tunnel here describes his narrowed sight, not a secret buried inside him.',
      'he can see a long way into the future':
        "It is Alfieri who can see what is coming. Eddie's tunnel vision means he cannot see beyond his obsession.",
    },
    more: 'The simile gives the audience a picture of obsession. It also prepares for the ending, since a tunnel leads in only one direction.',
    tip: "Analyse the simile to show how Miller signals Eddie's tragic flaw through Alfieri's narration.",
  },
  "word: Paper Doll they call him. Blondie now. | What does the nickname 'Paper Doll' suggest about how Eddie sees Rodolpho?":
    {
      why: "A paper doll is a flimsy toy for a girl, pretty and easily torn. By repeating the nickname, Eddie belittles Rodolpho as weak and unmanly, disguising his jealousy over Catherine as concern about the young man's character.",
      not: {
        'as a skilled tailor who makes fine dresses':
          'Rodolpho can sew, which Eddie mocks, but the nickname is about weakness and prettiness, not skill. It is meant to wound.',
        'as a forger who sells false papers to immigrants':
          "Papers matter to the illegal immigrants, but the nickname says nothing of forgery. A paper doll is a girl's toy.",
        'as a cheerful joker who makes everyone laugh':
          'Rodolpho is lively and sings, but the nickname is not praise for his humour. Eddie uses it to sneer.',
      },
      more: 'Eddie uses gendered insults because he cannot name his real objection. Miller shows prejudice filling the space where self-knowledge should be.',
      tip: "Use the nicknames to explore masculinity in the play: Eddie's idea of a real man, and how it hides his own feelings.",
    },
  'I see everything. Most other people are lazy.': {
    why: 'Christopher says this on the train to London in Part Two of The Curious Incident of the Dog in the Night-Time. He turns the usual view of him upside down: he is not missing information, everyone else is, which is why a new place overwhelms him.',
    more: 'As the company build the inside of the train around him, the Voices speak the few simple thoughts an ordinary passenger might have. The line invites the audience to see his difference as a way of perceiving, even a gift, as well as a difficulty.',
    tip: "Use it to argue that the play makes the audience share Christopher's perception, through the ensemble and the staging, rather than only watching him from outside.",
  },
  "speaker: I love you very much, Christopher. Don't ever forget that.": {
    why: 'Ed says it in Part One, minutes after hitting Christopher on the side of the head in the fight over the book. The imperative sounds almost like a plea, and the stage direction has everyone else on stage watching, so the audience is asked to weigh love against violence.',
    not: {
      'Judy, in one of the letters Christopher finds':
        "Judy's letters are full of love and guilt, but they are written words read aloud. This is spoken to Christopher's face, by the parent who has just hit him.",
      'Judy, when Christopher arrives at her flat':
        "Judy howls when Christopher tells her that Father said she was dead. Her reaction is shock and grief; the plea never to forget is Ed's.",
      'Ed, after confessing that he killed Wellington':
        'Ed promises the truth and then confesses, and Christopher, terrified, decides that his father could kill him too. The plea to remember his love comes earlier, after the blow.',
    },
    more: "Christopher's only answer is to ask where his book is, which shows how differently the two of them measure what has happened. The fan of touching fingers that follows shows how love can reach Christopher: on his terms, not his father's.",
    tip: 'Use the moment to argue that Ed is neither villain nor hero: love and violence sit in the same scene, and the audience has to hold both at once.',
  },
  "speaker: It's a book and it's for me and not everybody, just for me": {
    why: 'Christopher says it at the start of Part Two, when Siobhan asks whether the class can make a play out of his book. He insists that the story is private. The irony is that the audience is watching the very play he says he does not want.',
    not: {
      'Christopher, when Father finds his book':
        'When Ed finds the book in Part One, the scene becomes a fight: Ed reads from it, grabs him and hits him. The calm argument about who it is for comes later.',
      'Christopher, telling Siobhan his book has no ending':
        'In Part One Christopher tells Siobhan that his book is finished but unsatisfying. He is worried about its shape, not about who will see it.',
      'Christopher, in the final scene with Siobhan':
        'In the final scene Siobhan tells him they turned the book into a play, and he agrees, which suggests his view has changed. The refusal comes at the start of Part Two.',
    },
    more: 'Part Two opens by admitting that it is a performance. The line raises the question of who owns a story about someone like Christopher, and whether telling it in public is an act of respect or of exposure.',
    tip: "Use it to write about the play's metatheatre: Stephens keeps the audience aware that they are watching Christopher's book being staged, against his first wishes.",
  },
  'point: The Curious Incident of the Dog in the Night-Time: Which line shows Christopher reasoning his way, step by step, to terror?':
    {
      why: "Siobhan reads this from Christopher's book near the end of Part One, after Ed's confession, while Christopher, curled into a ball, counts in powers of two. Two short sentences, the second following from the first as in a proof, turn a confession into a reason to run.",
      not: {
        "I don't always do what I'm told.":
          "Christopher's disobedience grows out of logic, since instructions are usually unclear, but the line is calm. It explains his investigation, not his fear.",
        'Does that mean I can do anything, do you think?':
          'This is the last line before the curtain call, a hopeful question to Siobhan. It reasons towards possibility, not terror.',
        "It doesn't have a proper ending.":
          "Christopher says this to Siobhan in Part One about his unfinished book. It is a complaint about a story's shape, not a chain of reasoning about danger.",
      },
      more: "It is not what Ed meant by confessing, but it is how Christopher processes it, and it drives the whole of Part Two. Siobhan's calm voice over his panicked counting lets the audience hear his logic and see his terror at once.",
      tip: 'Use it to show how Stephens splits Christopher between voice and body, with Siobhan speaking his thoughts while he acts out his fear, and say what that staging lets an audience understand.',
    },
  "word: I can because I went to London on my own. | Which word turns Christopher's journey into proof, like a step in a mathematical argument?":
    {
      why: 'Christopher says it to Siobhan in the final scene, answering her cautious hope with evidence. Because links what he did to what he can do, so the journey becomes proof of the future he has just listed: more A-levels, university, a flat with a garden.',
      not: {
        can: 'Can states his claim about the future, but on its own it is only an assertion. The word that makes it a proof, by giving a reason, comes next.',
        London:
          'London names where he went, the destination of his journey. It is the evidence, not the link that turns evidence into proof.',
        own: 'On my own stresses that he did it alone, which is part of the achievement. But it is not the word that makes the sentence an argument.',
      },
      more: 'Many audiences find the moment moving and hard-won; others hear a boy talking himself into confidence. Both readings can be argued, because Siobhan only looks at him and does not answer.',
      tip: 'Link the sentence to the Postscript, where Christopher works through a maths problem step by step: the same habit of reasoning shapes how he understands his own life.',
    },
  'you never put new shoes on the table': {
    why: "Mrs Johnstone says this in Act 1 while cleaning for Mrs Lyons, horrified when a new pair of shoes is put on the table. It is the play's first superstition, sincere and a little comic, and it comes just before the pact over the twins.",
    more: 'Mrs Lyons laughs at the belief, but she sees how strongly Mrs Johnstone holds it, and soon turns superstition into a weapon by inventing a curse. The Narrator keeps returning to shoes on the table, so an everyday object becomes a sign of doom.',
    tip: "Use the line to show superstition as part of working-class home life, then set it against Mrs Lyons's invented curse: one woman believes, the other exploits belief.",
  },
  'speaker: You do know what they say about twins, secretly parted, don’t you?': {
    why: 'Mrs Lyons says this in Act 1, once she has dismissed Mrs Johnstone for fussing over the baby. To frighten her into keeping the secret, she invents a superstition on the spot, and the tag question pushes Mrs Johnstone to agree with a belief that did not exist a moment before.',
    not: {
      'Mrs Lyons, as she makes the pact over the twins':
        'At the pact Mrs Lyons makes Mrs Johnstone swear on the Bible to keep the secret. The curse comes later, once she has the baby and wants his mother gone.',
      'The Narrator, in the prologue':
        'The prologue tells the audience how the twins die and invites them to judge the mother, but the Narrator does not invent the curse. That comes from Mrs Lyons, inside the story.',
      'Mrs Lyons, telling Edward there is no bogey man':
        'In the bogey man scene she tells Edward that superstition is nonsense. She scorns there the very kind of belief she invents and uses here.',
    },
    more: "The audience watches the lie being built, so when the prophecy seems to come true at the end, we know its author was a frightened woman, not fate. The vague 'they say' borrows the authority of folk wisdom for something brand new.",
    tip: 'Use this line to argue that superstition in the play is a tool of the powerful: an employer invents it to control the cleaner whose child she has taken.',
  },
  'speaker: An’ what about what I need? I need you.': {
    why: 'Linda says this to Mickey in Act 2, after his early release from prison, when he insists that he needs his tablets. She turns his own word back on him, setting her love against his dependence, and the plain one-syllable words make the plea painfully direct.',
    not: {
      'Mickey, after he comes home from prison':
        "Mickey is in the scene, but he is the one being pleaded with. He says he needs his tablets, and Linda's reply turns that need back on him.",
      'Edward, when he tells Linda that he loves her':
        "Edward declares his love at Christmas, before the prison sentence, and he speaks standard English. The dropped letter in the first word belongs to a Liverpool voice like Linda's.",
      'Linda, when Edward tells her that he loves her':
        'At Christmas Linda tells Edward that she has married Mickey and is expecting a baby. This plea comes years later, to Mickey himself, once prison and tablets have changed him.',
    },
    more: "Russell does not present Linda's later turn to Edward as simple betrayal. This line shows a woman asking for her husband back and being refused, which makes the affair that follows tragic rather than wicked.",
    tip: "Use this line in an answer on Linda or on women's choices: it shows her loyalty tested by what prison and depression do to Mickey, before she turns to Edward.",
  },
  'speaker: I could have been... I could have been him!': {
    why: 'Mickey says this in the final scene, moments after Mrs Johnstone tells the twins the truth. His rage is at the chance that decided which baby was given away: the comfortable life could have been his. The broken first attempt shows him struggling to take in what he has lost.',
    not: {
      'Mickey, at Christmas, out of work for months':
        'At Christmas Mickey resents the gap between them, but he does not yet know they are twins. The line depends on learning that he and Edward were born the same.',
      'Edward, at the town hall in the final scene':
        'Edward hears the truth at the same moment, but he is the twin who was given the comfortable life. The rage at what was lost belongs to the brother who got nothing.',
      'Mickey, when Mrs Lyons shows him Linda with Edward':
        'When Mrs Lyons shows him Linda with Edward, Mickey is driven by jealousy. He does not learn that they are twins until his mother tells them at the town hall.',
    },
    more: "A stage direction then has him wave at Edward with his gun hand, and the gun goes off. The play's argument and its catastrophe arrive together: birth made the twins equal, and money made one of them the loser.",
    tip: 'Use this line as the clearest statement of the nature and nurture argument: the twins were born equal, so only their upbringing explains the difference Mickey rages at.',
  },
  'point: Blood Brothers: Which line shows the law going easier on one family than on another for the same offence?':
    {
      why: 'The policeman says this to Mr Lyons in Act 1, after the children are caught throwing stones. Moments earlier he warned Mrs Johnstone that her family could end up in court; to the comfortable father the same act is a prank, softened further by a respectful title.',
      not: {
        'Give one of them to me.':
          "Mrs Lyons's request at the pact shows class power, an employer asking her cleaner for a baby, but no law or policeman is involved.",
        'And do we blame superstition for what came to pass?':
          "The Narrator's final question points the audience towards class as the cause of the deaths, but it says nothing about how the police treat each family.",
        'I couldn’t afford to keep both of you.':
          "Mrs Johnstone's confession names poverty as the reason she gave a twin away. It is about money, not about the law treating two families differently.",
      },
      more: "Russell stages the two conversations back to back, so the audience judges the double standard without a word from the Narrator. It is one of the play's parallel scenes: with twins, the only thing that changes is class.",
      tip: "Set this beside the policeman's warning to Mrs Johnstone and analyse the shift in tone. Juxtaposing parallel scenes is Russell's method for proving his argument about class.",
    },
  'point: Blood Brothers: Which line suggests that society neglected Mickey as hardship forced him into adulthood?':
    {
      why: 'Mickey says this to Edward at Christmas in Act 2, explaining why he can no longer believe in the blood-brother promise. Nobody, not school, employer or state, noticed him being pushed into adult life. Edward has insisted that they are the same age, so growing up here comes from hardship, not time.',
      not: {
        'I don’t wear a hat that I could tilt at the world.':
          "Also from the Christmas scene, this line contrasts Mickey's lack of money and confidence with Edward's carefree attitude. It shows the gap between them, not a society failing to notice him.",
        'You sorted it out. You an’ Councillor Eddie Lyons.':
          'After prison Mickey resents that Linda and Edward arranged his house and job. Someone has looked after him here, and the line shows wounded pride rather than neglect.',
        'I could have been... I could have been him!':
          'In the final scene Mickey rages at the chance that decided which twin was given away. It is about birth and luck, not about growing up unnoticed.',
      },
      more: "The same actors play the twins at every age, so when Mickey says this the audience has watched it happen. Russell's point is that childhood ends at different ages for different classes.",
      tip: "Pair this line with Edward's insistence that they are the same age: the dramatic irony of twins arguing about age makes the class argument hard to miss.",
    },
  "word: I couldn’t afford to keep both of you. | Which word turns a mother's choice between her sons into a matter of budget?":
    {
      why: "'Afford' is the language of shopping and bills. Telling the twins the truth in the final scene, Mrs Johnstone makes giving away a child sound like a decision about what the household could stretch to, which names money as the cause of the whole tragedy.",
      not: {
        'couldn’t':
          "'Couldn't' shows that she had no real choice, but on its own it does not say why. It is the verb after it that names money.",
        keep: "'Keep' is about holding on to a child, the love and the loss, rather than about cost. The money lies in the verb before it.",
        both: "'Both' reminds the audience that there were two babies, but it carries no sense of money or budget.",
      },
      more: 'Coming just before the shooting, the confession answers the prologue, which invited the audience to judge her as cruel. Russell gives her no excuse beyond poverty, and leaves the audience to decide whether that excuses her or condemns the society that forced the choice.',
      tip: "Zoom in on 'afford' to link her choice to context: in a play first staged as unemployment soared, money, not wickedness, separates the twins.",
    },
  "word: There’s a stone in place of her heart? | What does 'stone' suggest here?": {
    why: 'In the prologue the Narrator invites the audience to judge Mrs Johnstone as a mother without feeling, her heart turned to stone because she gave a child away. The question form asks us to judge her, and the rest of the play sets out to prove that judgement wrong.',
    not: {
      'that she is tough enough to survive anything':
        'A stone can suggest toughness, but the Narrator is accusing her here, not admiring her. The image is of a heart that cannot feel.',
      'that she is numb with grief for her lost son':
        'The play later shows how much she suffers, but this line comes before we know her. It accuses her of feeling nothing rather than pitying her pain.',
      'that her heart is heavy with a guilty secret':
        'The secret does weigh on her through the play, but here the stone replaces her heart altogether. The accusation is coldness, not guilt.',
    },
    more: 'Russell is testing the audience: the quick judgement of the poor mother is exactly the prejudice the play attacks. Two acts of a warm, funny, desperate woman disprove the metaphor, and the Narrator turns out to be an unreliable judge.',
    tip: "Set this line against Mrs Johnstone's final confession about money: the play opens by calling her cruel and closes by showing that poverty made her choice.",
  },
  'I was ten feet tall, I had a hundred arms, like the goddess': {
    why: 'Meena says this in Chapter 8. Walking home from the shop with Nanima and baby Sunil, she meets Sam and his gang and silences them with a look. The many-armed figure is a Hindu goddess, drawn from the heritage she once wanted to escape.',
    more: "The comic hyperbole has a serious root. With Nanima beside her, Meena's body grows instead of shrinking, the reverse of her wish in Chapter 6 to slip out of her own skin. Her strength against prejudice comes from owning where she comes from.",
    tip: "Use this line on Meena's changing attitude to her heritage: set the goddess against her earlier wish to shed her body, and argue that Nanima's arrival is the turning point.",
  },
  'speaker: I felt as if I had been punched in the stomach.': {
    why: "Meena feels this at the Spring Fete in Chapter 7, standing beside Papa, as Sam Lowbridge's complaint about the church roof turns into open racism. Sam has not touched her, yet the simile makes his words a physical blow, and because she thought him friendly the shock is personal.",
    not: {
      'as Anita boasts about the attack at the bus stop':
        "Anita's boast at Sherrie's farm in Chapter 11 does shock Meena, but this line belongs to the fete, where racism she had treated as background is suddenly aimed at her family.",
      'as a letter tells her that Robert has died':
        "Robert's death, reported in a letter in Chapter 12 after Meena goes home, is a grief rather than an attack. The punch image fits words thrown at her in public, as Sam's are.",
      'as Tracey falls into the water at Hollow Pond':
        'At Hollow Pond in Chapter 13 Meena acts at once, running to the Big House for help. This winded reaction to words, not to danger, comes at the fete.',
    },
    more: "The narration does not comment or explain. It records a child's body reacting before her mind can catch up, her legs weakening and panic rising, and that restraint is more powerful than an adult's judgement would be.",
    tip: "Use this simile in any answer on racism: it shows prejudice through Meena's body rather than through argument, and marks the fete as the novel's turning point.",
  },
  'speaker: You mean the others like the Bank Manager?': {
    why: "Meena says this to Sam at Hollow Pond in Chapter 13, after he insists that his racist words were never meant for her. The Bank Manager is her private name for an Indian man in a suit. By naming one person, she turns Sam's faceless others back into a human being.",
    not: {
      'Anita, answering Sam at Hollow Pond':
        "Anita is with Sam at Hollow Pond, but she is his girlfriend and has boasted about his gang's violence. The challenge to his excuse comes from Meena.",
      'Tracey, answering Sam at Hollow Pond':
        "Tracey is at Hollow Pond, but she answers Sam with action, going for him when he raises his fist to Anita. The nickname is Meena's own.",
      'Meena, as Anita boasts about the bus-stop attack':
        "When Anita boasts in Chapter 11, Meena rides off on Trixie and falls. This question answers Sam's claim that he meant only the others, which he makes at Hollow Pond.",
    },
    more: 'The question form puts Sam on the spot, and he can only look confused: the girl has out-argued the bully. She refuses the logic of exceptions, in which the people you know are acceptable and the category stays intact.',
    tip: "Use this exchange to show how far Meena has come: the girl who once longed to be one of the gang now refuses to be the exception that lets Sam's prejudice survive.",
  },
  'point: Anita and Me: Which line shows prejudice hidden inside a compliment that is kindly meant?':
    {
      why: "Sandy, a neighbour, says this to Mama in Chapter 2 after Mama has looked after her son. She means it kindly, but 'just like' measures Mama against an English standard, and 'us' draws a circle that Mama is let into as a favour.",
      not: {
        'This is our patch.':
          "Sam's words at the fete are open hostility, not kindness. His 'our' shuts the Kumars out of the village they live in.",
        'worse than they already think we are. You prove you are better. Always.':
          'This is the rule drummed into Meena at home: her family expects suspicion from the English. It describes prejudice, but nobody is paying a compliment.',
        'I wanted to shed my body like a snake slithering out of its skin':
          "Meena's wish in Chapter 6 shows prejudice turned inward, a girl wanting to escape her own skin. It is a private longing, not a compliment from anyone.",
      },
      more: "Mama accepts the compliment graciously in public, then gently mocks her English friends among the Aunties. Syal shows belonging in Tollington as conditional, granted by the English, and the Kumars' private laughter as the way they keep their dignity.",
      tip: "Pair this with Sam's claim at Hollow Pond that he never meant Meena: both make her acceptable by separating her from her own people, so prejudice can wear a friendly face.",
    },
  "word: living in the grey area between all categories felt increasingly like home | Which word shows that Meena's peace with her in-between identity is a process, not a settled conclusion?":
    {
      why: "'Increasingly' makes this a change still under way. The grey area she was ashamed of is starting to feel like home, but she has not arrived, and the fete a chapter later will test her hard.",
      not: {
        grey: "'Grey' names the in-between space itself, neither Indian nor Tollington, which Meena has felt ashamed of. It shows where she is, not how her feeling is changing.",
        categories:
          "'Categories' are the boxes she fits none of. The word sets up the problem the sentence answers, but carries no sense of a process.",
        home: "'Home' gives the grey area warmth and belonging. It is where the feeling is heading; the word that shows she is still on the way is another one.",
      },
      more: "Just before this, Meena calls herself a freak who fits neither idea of a girl. Then the sentence turns, and the space she was ashamed of becomes a place. Syal offers this in-between identity as the novel's answer, but makes Meena earn it.",
      tip: "Quote this line on identity, then track whether the feeling holds: the fete in Chapter 7 shakes it, and Nanima's arrival in Chapter 8 strengthens it.",
    },
  "My flat is on floor 9 out of 14. It's not even hutious": {
    why: "Harri says this in March, introducing his new home on the ninth floor of a London tower block. The precise numbers are a child's way of showing pride, and hutious, a Ghanaian word for frightening, is used to reassure.",
    more: 'The denial plants the fear it denies. A reader who knows what tower blocks mean in British news hears an irony Harri cannot, and the whole novel works in that gap between his confidence and our unease.',
    tip: "Use this line on Harri's voice: his mix of Ghanaian words, playground slang and exact detail makes the reader learn his language as he learns London's.",
  },
  'speaker: In England nobody helps you if you fall over.': {
    why: 'Harri says this in May, after Mr Frimpong, hurt in the robbery, complains at church that nobody in England helps a stranger. Harri agrees and explains it his own way: people cannot tell a real fall from a trick. The irony is that he was part of the robbery, and ran.',
    not: {
      'as Killa falls off his bike':
        "Killa falls off his bike beside the funeral procession in March, while Harri is watching the mourners for suspects. This verdict on England answers Mr Frimpong's complaint in May.",
      'as he runs from the robbery of Mr Frimpong':
        'Harri runs as the old man is knocked down, but he passes this verdict later, at church. That is the irony: his judgement on England also convicts him.',
      'as the neighbours watch the playground burn':
        'In July the neighbours do stand and watch the playground burn, a sign of the same silence. But this line comes earlier, in answer to Mr Frimpong.',
    },
    more: "The flat, generalising sentence anticipates the novel's wider silence, in which a police appeal for witnesses to the killing meets nothing. Harri condemns England without seeing that he is part of what he condemns.",
    tip: "Use this line on responsibility and community: Harri's verdict on England is also a verdict on himself, and it links to the estate's silence about the dead boy.",
  },
  "speaker: Don't worry, you'll be going home soon.": {
    why: "The pigeon says this in the final pages, as Harri lies wounded near home. Home has meant two places all novel, the flat and Ghana; here the bird uses the word for death, as Harri's Christian upbringing would understand heaven. Harri's reply asks to stay.",
    not: {
      "The pigeon, in a dream about Agnes's fever":
        'In June the pigeon does comfort Harri in a dream, telling him Agnes will be well. This promise of going home is darker: it comes as Harri is dying.',
      'Harri, cheering Lydia up on her birthday':
        "On her birthday Lydia is homesick for Ghana and Harri cheers her with footprints in wet cement. But this gentle voice is the pigeon's, speaking to Harri at the end.",
      'The pigeon, after Harri runs from the robbery':
        'After the robbery the pigeon tells Harri it was trying to steer him out of trouble. The promise of going home comes at the end, as he lies wounded.',
    },
    more: 'The gentleness of the voice makes the scene bearable to read and harder to forget. One reading makes the bird a guardian angel; another is that it can only comfort, not protect, which is exactly what the ending shows.',
    tip: "Use this line on the pigeon's role and on the double meaning of home: track the word from the flat and Ghana to this final, gentle use.",
  },
  'point: Pigeon English: Which line shows Harri learning that he was left out for not knowing a code, not for being disliked?':
    {
      why: 'Harri says this in April about football at his new school. Nobody passed to him, and he had assumed the other boys hated him; in fact he was calling for the ball with the wrong words. Belonging in London is a matter of codes, and an outsider is shut out without anyone meaning it.',
      not: {
        "In England there's a hell of different words for everything.":
          'Harri says this in March with delight: English is a treasure chest of words. It celebrates language rather than showing him shut out by it.',
        "Some of them are so your friends know what side you're on.":
          "This comes from Harri's list of school rules, about rules that show loyalty. It shows the estate teaching sides, not Harri discovering why he was left out.",
        "Fingerprints are just for feeling with ... They don't really mean anything.":
          'In July Harri learns what fingerprints are really for, which strips them of their meaning as evidence. It is about identity, not about fitting in at school.',
      },
      more: 'It is a small comic moment with a large point. Kelman makes this exclusion a language problem that Harri can solve, unlike the dangers of the estate, which no right word can fix.',
      tip: "Use this line on belonging and language: fitting in depends on knowing the codes, which links Harri's school life to the title's pun on pidgin English.",
    },
  "word: If Agnes dies I'll just swap places with her. She can have my life. | Which word turns Harri's bargain with God into a playground trade?":
    {
      why: "'Swap' is the language of children trading cards. Hearing that his baby sister has a fever in Ghana, Harri offers God his own life in the plain terms of a playground deal, as if a life could be exchanged like a toy.",
      not: {
        dies: "'Dies' names the danger Harri fears for Agnes. It sets up the bargain, but the trade itself lies in another word.",
        just: "'Just' makes the offer sound easy and casual, which matters, but it is the verb after it that turns the bargain into an exchange.",
        life: "'Life' is what Harri offers, the stakes of the bargain. The word that makes it a child's trade is the verb in the first sentence.",
      },
      more: 'Agnes recovers, and a month later Harri dies. The novel never says the bargain was kept, but the foreshadowing invites the reader to feel that it was, and to ask what kind of world makes a child think in these terms.',
      tip: "Use this line on innocence and foreshadowing: a child's casual trade becomes, by the ending, a terrible prophecy that the reader cannot forget.",
    },
  'the spot where everything I’d ever lost since my childhood had washed up': {
    why: 'Kathy thinks this on the final page, standing by a fence in Norfolk where rubbish has blown against the wire, a couple of weeks after hearing that Tommy has completed. The childhood joke that Norfolk is where lost things end up becomes a real place of mourning.',
    more: 'The sea imagery turns the rubbish on the fence into a shoreline of memory. Kathy lets herself believe it only for a moment, with her eyes half closed, and then returns to her car and her work.',
    tip: 'Use this line to end an essay on memory or loss, and link it to the lost tape and the Norfolk joke from the Hailsham chapters.',
  },
  'speaker: None of you will go to America, none of you will be film stars.': {
    why: 'Miss Lucy says this in Chapter 7, when the class shelter from the rain in the pavilion and she overhears two boys daydreaming about acting in America. The repeated phrase shuts one door after another: she tells them plainly that they will begin donating their organs before middle age.',
    not: {
      'Madame, explaining why she cried at the dance':
        "Madame's explanation in Chapter 22 is about the dance she watched and the world she saw ending. The blunt warning about the students' futures comes from Miss Lucy, years before.",
      'Ruth, after seeing her possible in Cromer':
        "Ruth's bitter outburst after Cromer is about where the students are copied from, and she speaks as one of them. This warning comes from a guardian.",
      "Miss Emily, at Madame's house years later":
        "Miss Emily does explain the truth to Kathy and Tommy in Chapter 22, but by then they know their future. This blunt warning, given to fifteen-year-olds, is Miss Lucy's.",
    },
    more: "Her plainness is the exception at Hailsham, where the truth has been hinted at but never said. That almost nothing changes afterwards can be read as the novel's bleakest comment on how little the truth alone can do.",
    tip: "Use this line on the education the students receive: Miss Lucy's honesty is set against a school that keeps its pupils half-informed, and soon afterwards she leaves Hailsham.",
  },
  'speaker: That was the worst thing I did.': {
    why: "Ruth says this in Chapter 19, in the car after the trip to the stranded boat. Out of everything she has done, she names keeping Kathy and Tommy apart as her worst act, so the novel measures a life by love given or withheld. She then gives them Madame's address.",
    not: {
      'Kathy, looking back on the churchyard':
        'Kathy does fail Tommy in the churchyard, staying silent when Ruth mocks his animals. But the confession of keeping the two of them apart belongs to Ruth.',
      'Ruth, after seeing her possible in Cromer':
        'After Cromer Ruth is bitter and wounded, not repentant. Her apology comes years later, after her first donation has gone badly, when she tries to put things right.',
      'Miss Lucy, before she leaves Hailsham':
        'Before she leaves, Miss Lucy tells Tommy she was wrong to say creativity did not matter. She is correcting advice, not confessing to keeping two people apart.',
    },
    more: 'The sentence is flat and unadorned, like most speech in the book, which makes it more moving. Her apology comes with a practical gift, turning regret into action: arguably the nearest thing to redemption the novel allows.',
    tip: "Use this line on Ruth's development: set her jealousy at the Cottages against this confession, and ask whether a late apology can undo what was lost.",
  },
  'point: Never Let Me Go: Which line shows Kathy protesting, quietly, to the people who ran Hailsham?':
    {
      why: "Kathy says this to Miss Emily in Chapter 22, after Miss Emily has explained Hailsham's fall as a change in the climate of opinion. Kathy concedes it might be just a passing trend, then adds these six words: what was a cause for the guardians was everything the students had.",
      not: {
        'Something in me just gave up.':
          "In the churchyard in Chapter 16 Kathy fails to deny Ruth's lie about Tommy's animals. It shows her passivity, the opposite of a protest.",
        'We’re modelled from trash.':
          "Ruth says this after the gallery in Cromer, turning her hurt into contempt for the students' origins. It is despair spoken to her friends, not a protest to the guardians.",
        'the same way someone might be afraid of spiders':
          "Kathy uses this simile in Chapter 3 to name Madame's fear of the students. It records how the adults see them, but Kathy challenges nobody here.",
      },
      more: 'The pronouns carry the argument. Her protest is real, but it is spoken quietly, to people who cannot change anything, and nothing follows from it, which is exactly what the reader is left to question.',
      tip: 'Use this line to challenge the idea that Kathy never protests: quote it, then ask why Ishiguro makes her resistance so quiet and so late.',
    },
  'word: powerful tides tugging us apart | Which word turns the break-up of the friends into a force of nature that nobody chose?':
    {
      why: "'Tides' makes the break-up of Kathy, Ruth and Tommy a force of nature rather than a choice. Looking back in Chapter 17, Kathy explains why the friends drifted apart at the Cottages with an image that excuses everyone, herself included.",
      not: {
        powerful:
          "'Powerful' stresses the strength of the force, but on its own it does not make the force natural. It is the noun that turns choice into nature.",
        tugging:
          "'Tugging' gives the pull a physical action. It describes how the force works on them, not what kind of force it is.",
        apart:
          "'Apart' names the result, the friends separated. It says where they end up, not what drove them there.",
      },
      more: "A sharp answer notices the evasion as well as the sadness: Kathy did decide to leave, as she admits a few pages later, and the metaphor spreads that responsibility thinly. The image returns in Tommy's river in the last chapter.",
      tip: "Use this line on passivity and choice, and pair it with Tommy's river in Chapter 23: separation in this novel is always a current nobody can swim against.",
    },
  'There’s a divinity that shapes our ends, / Rough-hew them how we will.': {
    why: "Hamlet says this to Horatio in Act 5 Scene 2, explaining how, sleepless on the voyage to England, he acted on a rash impulse, opened the King's letters and found the order for his own death. Rashness, he says, sometimes serves us better than careful plans, because a higher power shapes our lives.",
    more: "The image comes from carpentry: we hew the rough shape, and providence finishes the work. It marks Hamlet's change from the agonised thinker of the soliloquies to a man who trusts that events will come when they must.",
    tip: "Use it to track Hamlet's development: set it against his early despair, and ask whether his new calm is wisdom, resignation or fatalism.",
  },
  'speaker: Something is rotten in the state of Denmark.': {
    why: 'Marcellus says it in Act 1 Scene 4, on the castle platform at midnight, just after Hamlet breaks free from his friends to follow the Ghost. Horatio asks what this will come to; Marcellus answers that something is badly wrong in Denmark, and Horatio replies that heaven will direct it.',
    not: {
      'Hamlet, as he breaks free to follow the Ghost':
        'Hamlet has just gone off after the Ghost, threatening to make a ghost of anyone who stops him. The line is spoken behind him, by a sentry left on the platform.',
      'Horatio, as Hamlet follows the Ghost':
        "Horatio stands beside Marcellus and asks where this will end, then answers that heaven will direct it. The diagnosis of rot is Marcellus's.",
      'Hamlet, alone after the court leaves':
        "In his first soliloquy Hamlet does see the world as an unweeded garden full of rank things, but he speaks of the whole world, alone. This line is a sentry's, outside at night.",
    },
    more: "Images of rot and disease run through the play, from the unweeded garden of Hamlet's first soliloquy to the graveyard. Giving this line to a minor character shows that the corruption is felt even by ordinary soldiers, not only by the grieving prince.",
    tip: "Use it to introduce the imagery of corruption: link the rotten state to Claudius's hidden crime, and show how the play connects a king's sin with the health of his whole country.",
  },
  'point: Hamlet: Which line shows Claudius admitting that his attempt to pray has failed?': {
    why: "Claudius says this alone at the end of Act 3 Scene 3, as he rises from his knees. He has confessed his brother's murder and tried to pray, but he still holds the crown and the queen he gained by it, so his words rose with no true repentance behind them.",
    not: {
      'How smart a lash that speech doth give my conscience!':
        'Claudius says this aside in Act 3 Scene 1, when Polonius remarks that people sugar over the devil with a show of devotion. His conscience is stung, but there is no attempt at prayer.',
      'The present death of Hamlet. Do it, England;':
        'In Act 4 Scene 3 Claudius reveals that his letters order England to kill Hamlet. It shows him planning a new crime, not failing to repent the old one.',
      'Though yet of Hamlet our dear brother’s death / The memory be green,':
        'Claudius opens his first court with this public mourning for his brother. It is grief smoothly performed for the court, not a private admission about prayer.',
    },
    more: "The couplet ends the scene with a sting: Hamlet has just spared Claudius because he seemed to be praying and might go to heaven. The audience learns the prayer was empty, so Hamlet's reason for delay rested on a false appearance.",
    tip: 'Use the prayer scene to discuss appearance and reality: Claudius looks penitent but is not, and Hamlet, who distrusts every surface, is deceived by this one.',
  },
  "word: Frailty, thy name is woman! | What does 'Frailty' suggest here?": {
    why: "Hamlet says this in his first soliloquy, in Act 1 Scene 2, alone after the court leaves. His mother, he says, married his uncle within a month of his father's death, and he turns her weakness into a verdict on all women: frailty here is moral weakness, an inability to stay constant.",
    not: {
      'sickness of the body in old age':
        'Frailty can mean bodily weakness, but Gertrude is not ill. Hamlet is attacking how quickly she remarried, a failure of loyalty, not of health.',
      'a gentleness that needs protecting':
        "Some writers praised women's delicacy, but Hamlet is not praising anything. His word condemns: women, he claims, cannot stay true.",
      'beauty that will soon fade away':
        "Fading beauty is a theme of other poems about women. Hamlet's complaint is about faithfulness: his mother's love for his father did not last.",
    },
    more: "The line turns one woman's choice into a law about all women, which tells us as much about Hamlet's disgust as about Gertrude. It resurfaces in his treatment of Ophelia, and a modern audience may question whether the play endorses it.",
    tip: "Use it in an answer on gender: quote it to show Hamlet's misogyny, then ask whether Gertrude's own actions, and her silences, give the audience reason to judge her differently.",
  },
  'Nothing will come of nothing: speak again.': {
    why: 'Lear says this in Act 1 Scene 1, at the love test. Goneril and Regan have flattered him with extravagant speeches and been rewarded, but when he asks Cordelia what she can say to win a richer third of the kingdom, she answers nothing. Lear warns her that nothing will earn her nothing.',
    more: 'The word nothing echoes through the play: Lear will lose everything, the Fool tells him he has become a nothing, and Edgar, taking on his disguise, says he is nothing. The king who measures love by words learns what it is to have nothing at all.',
    tip: "Track the word nothing through the play to show Lear's journey: from a king who demands to be told he is loved to a man left with nothing but his daughter's love.",
  },
  'speaker: The wheel is come full circle; I am here.': {
    why: "Edmund says it in Act 5 Scene 3, after Edgar, fighting as an unknown challenger, has wounded him mortally and revealed his name. Edgar says the gods are just and that their father's sin cost him his eyes; Edmund agrees that Fortune's wheel has turned, bringing him back down to where he began.",
    not: {
      'Edgar, revealing himself after the duel':
        "Edgar has just spoken of the gods' justice and their father's punishment. This line is Edmund's reply, accepting the verdict on himself.",
      'Albany, as the plots against him are exposed':
        'Albany has arrested Edmund for treason and will soon embrace Edgar, but the image of the wheel bringing a man back down belongs to the one who has fallen.',
      'Kent, arriving to bid his master farewell':
        'Kent does arrive later in the scene to say goodnight to his master. He is a loyal servant at the end of his journey, not a schemer whose rise has been reversed.',
    },
    more: "The wheel is Fortune's wheel, the medieval image of a goddess turning it so that those at the top fall to the bottom. Edmund began the play as the illegitimate son, despised for his birth, rose by deceit, and now ends where he started, accepting the turn with a strange calm.",
    tip: "Use it in an answer on justice: Edmund and Edgar both see order in the ending, but Lear and Cordelia's deaths, still to come in the same scene, make the audience question whether the gods are just at all.",
  },
  'point: King Lear: Which line shows Lear thinking, for the first time, of the homeless in his kingdom?':
    {
      why: 'Lear says this in Act 3 Scene 4, outside the hovel on the heath. He sends the Fool in first and stays out in the storm to pray for the poor who have no shelter, then admits that as king he took too little care of them. Suffering has taught him pity.',
      not: {
        'I am a man / More sinn’d against than sinning.':
          'In the storm in Act 3 Scene 2 Lear insists that he has suffered more wrong than he has done. It is still self-pity, centred on his own injuries.',
        'How sharper than a serpent’s tooth it is / To have a thankless child!':
          'In Act 1 Scene 4 Lear curses Goneril, wishing on her a child as ungrateful as he thinks she is. It is about his own wound, not the suffering of others.',
        'Blow, winds, and crack your cheeks! Rage! blow!':
          'Lear commands the storm in Act 3 Scene 2 to destroy the world. It is rage at his daughters and the heavens, not pity for anyone else.',
      },
      more: 'The king who once measured love in land now imagines bodies with no roof and no food. His own loss teaches him what his poorest subjects have always endured, and he resolves to share what they feel.',
      tip: "Use the prayer to trace Lear's change from a king demanding love to a man learning compassion, and link it to Gloucester's similar lesson about sharing wealth in Act 4.",
    },
  "word: As flies to wanton boys are we to the gods, / They kill us for their sport. | What does 'wanton' suggest here?":
    {
      why: 'Gloucester says this in Act 4 Scene 1, newly blinded, to the old tenant leading him, while his son Edgar stands by disguised as Poor Tom. Wanton means playful and unruly: boys kill flies for fun, without reason, and Gloucester sees the gods treating human beings the same way.',
      not: {
        'lustful and greedy for pleasure':
          'Wanton can mean lustful in other contexts, but here it describes boys at play. Their cruelty is careless fun, not desire.',
        'angry and bent on revenge':
          "Revenge needs a reason, and the point of the simile is that there is none. In Gloucester's despair the gods punish without cause, as boys kill flies.",
        'poor, hungry and desperate':
          'Gloucester has just met a beggar, but wanton describes the boys, not the poor. They kill for sport, not out of need.',
      },
      more: 'The simile is the bleakest statement in the play: the universe is not just but careless. Yet it is spoken in front of Edgar, the son Gloucester wronged, whose secret care will save him from despair, so the play sets this view against human kindness.',
      tip: "Contrast Gloucester's view of the gods with Edgar's claim in Act 5 that the gods are just, and argue which view the play's ending supports.",
    },
  'Age cannot wither her, nor custom stale / Her infinite variety.': {
    why: "Enobarbus says this in Act 2 Scene 2, in Rome, after describing Cleopatra's first meeting with Antony on the river Cydnus. Maecenas has just said that Antony must now leave her, since he is to marry Octavia. Never, Enobarbus replies: neither time nor habit can make her dull.",
    more: "The praise comes from the play's blunt, cynical soldier, which makes it more persuasive. He goes on to say that other women satisfy and so grow dull, while she leaves people hungrier the more she satisfies them, which explains why Antony will go back.",
    tip: "Use it to show that Cleopatra is often presented through other people's words: Enobarbus's admiration, Philo's contempt, Caesar's disgust. Then ask how far the audience is allowed to judge her for itself.",
  },
  'Give me my robe. Put on my crown. I have / Immortal longings in me.': {
    why: "Cleopatra says this in Act 5 Scene 2, in her monument, after a countryman brings the basket of figs that hides the asps. Rather than be led through Rome in Caesar's triumph, she dresses in her royal robes to die, as if going again to meet Antony.",
    more: "The short commands are calm after the clown's rambling prose, and immortal longings imagines death as a passage to Antony rather than an ending. She stages her death as a final performance that Caesar cannot control.",
    tip: "Use it to argue that she wins the play's last contest: Caesar conquers the world, but she chooses the manner of her ending, and he is left to admire it.",
  },
  'speaker: These strong Egyptian fetters I must break, / Or lose myself in dotage.': {
    why: "Antony says it to himself in Act 1 Scene 2, in Alexandria, after a messenger reports that Fulvia has made war on Caesar and that the Parthians are overrunning Asia. Stung by what Rome says of him, he resolves to break Egypt's hold on him, moments before he learns that Fulvia is dead.",
    not: {
      'Antony, refusing to hear the messengers at all':
        'In the opening scene Antony refuses even to hear the messengers and says the nobleness of life is love. One scene later the news breaks through, and he speaks of fetters.',
      'Antony, ashamed after fleeing at Actium':
        'After Actium Antony is ashamed, but he no longer talks of breaking free: he tells her his heart was tied to her rudder, and forgives her for a kiss.',
      'Antony, after agreeing to marry Octavia':
        "Once the match with Octavia is made, Antony decides the opposite: after the Soothsayer's warning about Caesar, he resolves to return to Egypt for his pleasure.",
    },
    more: "The metaphor makes Egypt a prison, and dotage, foolish fondness, is the very word Philo used of him in the first scene. Antony now speaks of himself in Rome's language, and the play swings between his two selves for the rest of its length.",
    tip: 'Use it to show Antony torn between Rome and Egypt: set it beside his defiance in the first scene, and trace how often he resolves to leave and then returns.',
  },
  'speaker: I am alone the villain of the earth,': {
    why: "Enobarbus says it in Act 4 Scene 6, in Caesar's camp, after deserting Antony. A soldier tells him that Antony has sent all his treasure after him, with gifts and gentle greetings of his own. Overwhelmed by such generosity in return for treachery, he calls himself the worst villain alive.",
    not: {
      'Enobarbus, dying under the moon':
        "In Act 4 Scene 9 Enobarbus does repent again, asking Antony's forgiveness as he dies. But this outburst comes first, the moment he hears of the treasure.",
      'Antony, ashamed after fleeing at Actium':
        'After Actium Antony is ashamed of his own flight, but he blames his weakness for Cleopatra, not treachery to a friend. The villain here is a deserter.',
      'Canidius, surrendering his legions to Caesar':
        'Canidius does go over to Caesar after Actium, taking his legions, but as a practical choice, following kings who have already yielded. He shows no remorse.',
    },
    more: "Antony's generosity wounds Enobarbus more than any punishment could. The play's most clear-eyed Roman, who judged Antony's decline with cold reason, finds that loyalty is not a matter of reason at all, and he dies of grief.",
    tip: "Use Enobarbus as a measure of Antony: his desertion shows Antony's judgement failing, and his remorse shows the generosity that made men love him.",
  },
  'speaker: The breaking of so great a thing should make / A greater crack.': {
    why: "Caesar says it in Act 5 Scene 1, when Dercetus brings him Antony's bloodstained sword and the news that Antony is dead. Such a death should have shaken the whole world, Caesar says, since half the world lay in Antony's name. The conqueror pauses to mourn his rival.",
    not: {
      'Cleopatra, as Antony dies in the monument':
        "As Antony dies, she too mourns him in images of the whole world diminished, but as a lover in grief. This measured judgement of a great man's fall comes from his rival.",
      'Agrippa, hearing that Antony is dead':
        "Agrippa is present and remarks that nature makes them lament their own deeds. The image of the world cracking is Caesar's.",
      "Dercetus, bringing the news of Antony's death":
        'Dercetus brings the sword and the news, and offers Caesar his service. He reports the death; he does not reflect on what it means.',
    },
    more: "The hyperbole of a world that should have shaken lions into the streets shows that even Rome grants Antony greatness. Yet Caesar's grief is brief and political: within moments he is planning how to keep Cleopatra alive for his triumph.",
    tip: 'Use it to weigh Caesar: an answer can argue that he mourns sincerely or that he performs grief for an audience, and the speed of his turn back to policy supports either reading.',
  },
  'point: Antony and Cleopatra: Which line shows Antony feeling his command over others slipping away?':
    {
      why: "Antony says it in Act 3 Scene 13, after Actium, when he calls for servants to seize Caesar's messenger Thidias and they are slow to come. Once, he says, kings would rush to his call; now his power is dissolving, though he insists that he is Antony yet.",
      not: {
        'Melt Egypt into Nile, and kindly creatures / Turn all to serpents!':
          'Cleopatra cries this in Act 2 Scene 5 when told that Antony has married Octavia. It is fury calling on her country to melt, not a sense of power slipping away.',
        'The crown o’ th’ earth doth melt.':
          'She says this in Act 4 Scene 15 as Antony dies in her monument. The greatest man in the world melts away, but it is her grief, not his own sense of lost command.',
        'Let Rome in Tiber melt, and the wide arch / Of the ranged empire fall!':
          'In the opening scene Antony wishes Rome itself to melt rather than leave Egypt. He is at the height of his power, defying the empire, not losing his hold on it.',
      },
      more: 'The verb melt runs through the play and changes direction: at first the lovers call on whole countries to melt, then Antony feels his own power melting away, and finally Cleopatra watches him dissolve. His fall is a slow loss of solid shape.',
      tip: "Trace the melting imagery across the play to show Antony's decline as a dissolving of the self, and link it to his speech about clouds in Act 4 Scene 14.",
    },
  "word: That which is now a horse, even with a thought / The rack dislimns and makes it indistinct / As water is in water. | What does 'dislimns' suggest here?":
    {
      why: 'To limn is to paint or draw, so to dislimn is to unpaint. In Act 4 Scene 14 Antony tells Eros that a cloud shaped like a horse is blurred by the driving rack until its outline vanishes, as water disappears in water. He feels his own shape dissolving the same way.',
      not: {
        'tears it apart, limb from limb, like prey':
          'The word sounds like limbs, so violent tearing is a natural guess, but the cloud is not torn: its outline fades. The image is of gentle, total disappearance.',
        'carries it higher into the sky':
          "The rack does drive the clouds across the sky, but dislimns describes what happens to the horse's shape, not where it goes.",
        'darkens it into a thundercloud':
          'Evening is falling, but dislimns says the outline is wiped out, not that the cloud grows dark or stormy.',
      },
      more: 'Antony believes Cleopatra has betrayed him to Caesar, and the cloud speech turns defeat into a loss of identity: he still bears the name Antony but feels he cannot keep his form. The slow, calm list of cloud shapes makes the dissolving feel inevitable.',
      tip: "Use the speech to discuss Antony's sense of who he is: link it to the melting imagery elsewhere, and to his angry insistence after Actium that he is still Antony.",
    },
  "word: There’s beggary in the love that can be reckoned. | What does 'reckoned' suggest here?": {
    why: 'In Act 1 Scene 1 Cleopatra asks Antony to tell her how much he loves her. He answers that love which can be reckoned, counted or measured like money, is poor: real love cannot be totalled. Beggary makes measured love a kind of poverty.',
    not: {
      'remembered later with regret':
        'A day of reckoning can mean a judgement, but Antony is answering how much he loves her. The word means counting, not remembering.',
      'judged harshly by onlookers in Rome':
        "Philo has just judged the love harshly, calling Antony a fool in love, but Antony's word is about measuring love, not about what onlookers think of it.",
      'paid back in equal measure':
        'Antony does not speak of love being returned. His point is that true love is beyond any sum, so to count it at all is to make it poor.',
    },
    more: "The opening exchange sets the play's terms: Rome measures, counts and judges, while Antony claims a love too great for numbers. When she says she will set a limit to it, he replies that she must then find a new heaven and a new earth.",
    tip: "Use the line to open an argument on love and excess: the lovers' hyperbole defies Roman measurement, and the play asks whether that is grandeur or self-deception.",
  },
  'I will show you fear in a handful of dust.': {
    why: "This comes in Part I, The Burial of the Dead, where a prophetic voice offers shelter in the shadow of a rock and then turns the offer into a threat. The promise, I will show you, reveals only dust, the traditional image of the body's end.",
    more: "Readers who know the epigraph can go further: the Sibyl in it, who longs to die, had asked for as many years as the grains in a handful of sand. Long life without renewal is the waste land's condition.",
    tip: "Use this line when you write about death and fear in Part I: show how Eliot turns a prophet's promise into a reminder of mortality.",
  },
  'speaker: You ought to be ashamed, I said, to look so antique.': {
    why: "Lil's friend says this in Part II, A Game of Chess, retelling in the pub how she warned Lil to smarten herself up for Albert, back from the army. Lil is only thirty-one, but childbirth and poverty have aged her, and the friend's repeated I said shows her self-importance.",
    not: {
      'The woman in the chair, to her silent partner':
        'The woman in the chair sits in a room crowded with old, rich things, and she does plead with her partner, but this blunt judgement is spoken in the pub scene that follows.',
      'Madame Sosostris, reading the cards for her client':
        'Madame Sosostris reads the Tarot for her client in Part I and warns of death by water. She prophesies rather than scolds; this is gossip, retold in a pub.',
      'The speaker, hailing Stetson':
        "The speaker does hail Stetson in the City crowd in Part I, but he asks him about a corpse planted in a garden. This judgement on someone's looks belongs to the pub.",
    },
    more: "Antique links the two halves of Part II: a rich woman's room is full of old, precious things, and here a working-class woman is called antique because of what her life has done to her. The pressure on Lil comes as much from other women as from Albert.",
    tip: 'Use this line to compare the two halves of A Game of Chess: rich and poor, the scenes show the same loneliness and the same pressure on women.',
  },
  'word: These fragments I have shored against my ruins | Which word means propping up something that might otherwise collapse?':
    {
      why: 'This comes near the end of Part V, What the Thunder Said, as fragments in five languages crowd the final lines. To shore is to prop up a structure that might fall, so the poem names its own method: the pieces are not mourned but used as supports.',
      not: {
        fragments:
          'Fragments names the pieces themselves, the quotations piled up at the end. It says what is used, not what is done with it.',
        against:
          'Against shows what the props are set against, the threat of collapse. It gives the direction of the effort, not the effort itself.',
        ruins:
          "Ruins names what is collapsing, the speaker's self and his culture. It is the danger, not the act of holding it up.",
      },
      more: "The line answers the prophet's picture, in Part I, of a culture left in broken pieces: fragments once mourned are now used as supports. Whether this is defiance or desperation is the central question of the ending.",
      tip: "Use this line on the poem's form: argue that the collage of quotations is not chaos but a deliberate act of building from what survives.",
    },
  "I can't stand a naked light bulb, ... a rude remark or a vulgar action.": {
    why: 'Blanche says this to Mitch on the poker night in Scene 3, as she has him cover the bare bulb with a paper lantern. She equates harsh light with coarse words and behaviour: exposure of any kind is an offence to her.',
    more: "The line sets up one of the play's central images. Light means exposure, of her age and of her past, so when the lantern is torn away later, the audience feels the cruelty of being made to look.",
    tip: 'Use this line on illusion and truth: the bare bulb and the paper lantern let you write about staging as well as language.',
  },
  'speaker: The opposite is desire.': {
    why: "Blanche says this to Mitch in Scene 9, after he has come to confront her with Stanley's story of her past. As a blind street seller calls out flowers for the dead, she remembers the deaths she nursed at Belle Reve and names the one force she has found to set against them.",
    not: {
      'Stella, defending her marriage to Blanche':
        "Stella does defend desire in Scene 4, the morning after the poker night, but she speaks of what happens between her and Stanley in the dark, not of death. This bare statement is Blanche's.",
      'Blanche, to the young man collecting for the paper':
        "Blanche does give way to desire with the young collector in Scene 5, kissing him and sending him away. But she names desire as death's opposite only in Scene 9, to Mitch.",
      'Blanche, telling Mitch about Allan Grey':
        "Blanche does speak of death to Mitch in Scene 6, telling him how her young husband died. But this line comes in Scene 9, when the flower seller's cry brings death into the room.",
    },
    more: "The line states the play's structuring opposition, the one Blanche's journey in Scene 1 already maps: desire leads on to death. Desire is the force she has set against mortality, and it is also what has destroyed her.",
    tip: "Use this line to connect Scene 9 to the route Blanche describes in Scene 1: an essay on desire and death can trace the play's symbolism from first scene to last.",
  },
  "point: A Streetcar Named Desire: Which line is Stella's own admission that she has chosen her marriage over her sister?":
    {
      why: "Stella says this to Eunice in Scene 11, as Blanche is about to be taken away. Not I don't believe, but I couldn't believe: she admits that disbelief is a choice she must make in order to go on living with Stanley. Her complicity is conscious.",
      not: {
        'He acts like an animal, ... Eats like one, moves like one, talks like one!':
          "Blanche says this to Stella in Scene 4, urging her to leave Stanley. It is a sister's attack on the marriage, not Stella's choice between them.",
        'I have always depended on the kindness of strangers.':
          "Blanche's last line, to the doctor, shows her depending on strangers once her own family has failed her. It is spoken by the sister who has been sacrificed, not the one who chose.",
        "Don't ever believe it. Life has got to go on.":
          "Eunice says this to Stella in Scene 11. It urges the choice on her, but it is a neighbour's advice, not Stella's own admission.",
      },
      more: "Williams puts the moral burden on the audience: Stella's choice is understandable and terrible at once. The line suggests how women survive in this world by refusing to believe what other women tell them.",
      tip: 'Use this line when you discuss whether Stella is a victim or complicit: its exact grammar lets you argue that she knows what she is doing.',
    },
  'word: Poems a dead boy wrote. | Which word, in place of a name, stresses how young her husband was?':
    {
      why: "Blanche says this in Scene 2, snatching back the bundle of her dead husband's papers as Stanley goes through her trunk. Boy refuses him the dignity of a name and stresses how young he was, yet the word carries the whole weight of her grief.",
      not: {
        Poems:
          'Poems shows that her husband was a writer, someone with an inner life. It says what he left behind, not how young he was.',
        dead: 'Dead names the loss that haunts Blanche, but it says nothing of his age. It is the word for what happened to him, not for who he was.',
        wrote:
          'Wrote puts his life in the past tense. It records the poems as finished, but it does not stress how young their author was.',
      },
      more: "The scene establishes early that Blanche's past is mourned rather than boasted of, and that Stanley's hands violate the inner life he will keep tearing into. Her husband's story is told in full only in Scene 6.",
      tip: "Use this moment to show sympathy for Blanche early in the play: her grief is real, and Stanley's search of her trunk is the first invasion of it.",
    },
  "We are two-legged wombs, that's all: sacred vessels, ambulatory chalices.": {
    why: "Offred thinks this in Chapter 23, in the Commander's study. She sums up what the Handmaids are to Gilead, setting clinical anatomy beside the elevated language of the church, and the bitter that's all shows how little of her the regime values.",
    more: "The religious words, vessels and chalices, mimic Gilead's own euphemistic register and turn it back on itself. Biological reduction is dressed up as sacred honour.",
    tip: "Use this line in essays on the body and power: analyse how the shift from wombs to chalices exposes Gilead's disguise.",
  },
  "speaker: Don't let the bastards grind you down.": {
    why: 'The Commander says this in Chapter 29, in his study, when Offred writes out the words she found scratched in her cupboard. He laughs and explains that the mock Latin is an old schoolboy joke. Offred realises that her predecessor must have learned it in this very room.',
    not: {
      'Moira, before her escape from the Red Centre':
        "Moira is the novel's great rebel, and she does escape the Red Centre for a time, but these words come from the man the motto defies, translating it for Offred.",
      'Ofglen, as she risks speaking openly at Soul Scrolls':
        'Outside Soul Scrolls Ofglen risks an honest question, and the two women learn to trust each other. But this translation comes from the Commander, in his study.',
      "Offred's mother, at the bonfire of magazines":
        "Offred's mother was an activist who took her to a bonfire of magazines as a child, but these words come later, from the Commander, explaining the Latin in the cupboard.",
    },
    more: "The irony is sharp: the resistance motto is explained by one of the regime's powerful men, who finds it amusing. He also admits that the woman before Offred hanged herself, so the joke and the death sit side by side.",
    tip: 'Use this moment to discuss language as resistance: the phrase survives in a private space, but its meaning has to come from the man who controls the words.',
  },
  "point: The Handmaid's Tale: Which line shows that, for Offred, treating her life as a story is a matter of survival?":
    {
      why: 'Offred says this in Chapter 7, alone at night, wishing that what she lives through were a story she is telling, because then she would control the ending. The verbs rise from would like to need to must, so believing becomes a necessity: storytelling is how she survives.',
      not: {
        'the blank white spaces ... We lived in the gaps between the stories.':
          'Offred says this in Chapter 10 about life before Gilead, when being unnoticed felt like freedom. It looks back at the past rather than at her need to tell.',
        'Are there any questions?':
          "Professor Pieixoto ends the Historical Notes with this. It belongs to the academic who studies her tapes in 2195, not to Offred's need to tell them.",
        'And so I step up, into the darkness within; or else the light.':
          "Offred's last line, as she climbs into the black van in Chapter 46, refuses to say how her story ends. It shows uncertainty, not her need to keep telling.",
      },
      more: 'Atwood makes the act of narration part of the subject. Offred tells her story to an imagined listener, and the Historical Notes reveal that her tapes survived, though the people who hear them laugh.',
      tip: "Use this line on narrative form: argue that Offred's storytelling is resistance, a way of keeping a self alive in a state that wants her silent.",
    },
  'word: your name is like your telephone number, ... what I tell myself is wrong | Which word overturns the comfort Offred has just offered herself?':
    {
      why: 'Offred thinks this in Chapter 14, about the name she is no longer allowed to use. She tells herself that a name is only like a telephone number, then rejects her own comfort: wrong turns rationalising the loss into refusing to accept it.',
      not: {
        name: 'Name is the subject of the thought, the identity Gilead has taken. It names what is lost, not the refusal to accept that loss.',
        telephone:
          'Telephone belongs to the comforting simile, comic in its banality: a name is just a number. It is the comfort, not the word that overturns it.',
        tell: 'Tell shows that Offred is talking to herself, managing her own feelings. It introduces the self-correction but does not make it.',
      },
      more: 'The self-correction models the constant inner negotiation of resistance. Offred will not let herself be comforted into accepting the loss of her name, which is why she keeps it secret, and why it matters when she hears it spoken at the end.',
      tip: "Use this line in essays on identity and naming: the name Offred marks her as a man's property, and her refusal to accept that is quiet resistance.",
    },
  'In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars.':
    {
      why: "Nick describes his neighbour's summer parties at the start of Chapter 3. Every weekend crowds come to Gatsby's house in West Egg, most of them uninvited and knowing nothing of their host, and Nick watches them drift through the blue gardens among the music and the champagne.",
      more: "The simile of moths suggests creatures drawn helplessly to a light, and short-lived: the guests are attracted by Gatsby's glamour but care nothing for him. When he dies, almost none of them come to his funeral.",
      tip: 'Use the line in an answer on the Jazz Age: Fitzgerald makes the parties dazzling and empty at once, a world of pleasure without connection.',
    },
  'speaker: Her voice is full of money': {
    why: "Gatsby says it in Chapter 7, at the Buchanans' house on the hottest day of the summer, while Tom has gone for whiskey. Nick remarks that Daisy has an indiscreet voice, full of something, and hesitates; Gatsby finishes the sentence, and Nick realises he is right: her charm is the sound of wealth.",
    not: {
      "Nick, describing Daisy's voice at the first dinner":
        "In Chapter 1 Nick describes Daisy's voice at length, its music and its promise of excitement, but he cannot name its secret. Here he hesitates, and Gatsby supplies the word.",
      'Tom, quarrelling with Gatsby at the Plaza':
        "At the Plaza Tom attacks Gatsby as a bootlegger and a nobody. He never comments on what Daisy's voice is made of.",
      'Jordan, telling Nick about Daisy in Louisville':
        "Jordan tells Nick how Daisy and Gatsby fell in love in Louisville and how Daisy married Tom. She describes events, not the sound of Daisy's voice.",
    },
    more: "The line is Gatsby's sharpest insight, and his blindest: he loves Daisy partly for the wealth her voice carries, and Nick hears in it the ring of coins. In this novel the dream of love and the dream of money cannot be separated.",
    tip: 'Use it in an answer on the American Dream: Gatsby wants Daisy as the prize of a world he was born outside, so his love is also a hunger for class and money.',
  },
  'point: The Great Gatsby: Which line shows the green light losing its magic for Gatsby once Daisy is beside him?':
    {
      why: "Nick writes this in Chapter 5, after Gatsby and Daisy's reunion. Looking out across the bay with her, Gatsby tells Daisy about the green light at the end of her dock, and Nick reflects that, now she is beside him, it is only a light on a dock again. A dream object has become an ordinary thing.",
      not: {
        'he stretched out his arms toward the dark water in a curious way':
          'In Chapter 1 Gatsby reaches towards the light across the water, alone and trembling. It shows the light at its most magical, not losing its power.',
        'Can’t repeat the past? ... Why of course you can!':
          'In Chapter 6, after the party Daisy disliked, Gatsby insists that the past can be repeated. It shows his dream refusing to fade, not one enchantment ending.',
        'So we beat on, boats against the current, borne back ceaselessly into the past.':
          "The novel's last sentence widens Gatsby's longing into everyone's: we struggle forward while the past pulls us back. It is not about the light losing its magic for him.",
      },
      more: 'The line is quietly devastating: getting what you dreamed of can destroy the dream. Once the distance is gone, the light is only a light, and Daisy, Nick soon suggests, cannot match the illusion Gatsby has built around her.',
      tip: 'Use it to argue that Gatsby loves a dream more than a woman: the moment he is with Daisy, something he has worshipped for five years becomes ordinary.',
    },
  "word: a single green light, minute and far away, that might have been the end of a dock | What does 'minute' suggest here?":
    {
      why: 'Minute, said my-newt, means tiny. On his first night in West Egg, in Chapter 1, Nick sees Gatsby alone on his lawn stretching his arms towards the water, and looks to see what he is reaching for: only a small green light far across the bay, perhaps at the end of a dock.',
      not: {
        'lasting only for a moment':
          'Read as the unit of time, minute would make the light brief, but it shines steadily. Nick is describing its size across the dark water, not how long it lasts.',
        'exact and carefully detailed':
          'Minute can mean precise, as in minute detail, but a light seen across a bay at night shows no detail. Here the word measures how small it looks.',
        'flashing on and off in turn':
          "Nothing in the word suggests flashing. Minute tells us how small the light looks from Gatsby's lawn, which is why Nick can barely make it out.",
      },
      more: "The light is tiny and far away, yet it draws a grown man's arms towards it: the gap between its size and its meaning is the gap between what Gatsby has and what he dreams of. Later we learn it marks the end of Daisy's dock.",
      tip: "Use the light's first appearance to begin an argument about Gatsby's dream, then trace it to Chapter 5, where it loses its enchantment, and to the novel's final page.",
    },
  'From below is heard the reverberation of a heavy door closing.': {
    why: "This is the final stage direction of A Doll's House, in William Archer's translation. Nora has left her husband and children, and Helmer, alone, clings to a last hope before a door is heard shutting below: the most famous ending in modern drama.",
    more: 'Ibsen ends not with speech but with a sound, refusing Helmer, and society, the last word. The door slam was said to be heard around the world, and it caused a scandal in European theatres in the 1880s.',
    tip: "Translations word this differently, so learn the moment rather than the words. Discuss what it means that the play's last word is an action rather than a line, and that it cannot be undone.",
  },
  'speaker: No man sacrifices his honour, even for one he loves.': {
    why: "Helmer says it in the final conversation of Act 3, after Nora has told him she is leaving. He puts his honour above love: no man, he says, would give it up. Nora's reply turns the principle against him: women make that sacrifice all the time.",
    not: {
      'Krogstad, demanding a higher post at the bank':
        'Krogstad is fighting to win back his reputation and his post in Act 2. The words about love and honour belong to the husband, not the blackmailer.',
      "Helmer, on reading Krogstad's first letter":
        'Reading the first letter, Helmer rages about saving appearances and calls Nora a criminal. His honour is at stake, but this calm principle comes later, in the last conversation.',
      'Dr Rank, declaring his love for Nora':
        "Dr Rank's declaration in Act 2 is tender and despairing, and Nora refuses to ask him for anything after it. He makes no speech about honour.",
    },
    more: 'Honour here is a public, masculine value. Ibsen exposes it as an ideology that excuses men from the very sacrifices women are expected to make, which Nora made when she forged a signature to save his life.',
    tip: "Use it in an essay on gender and marriage. Quote Helmer's principle, then explain how Nora's reply turns it against him, so that his own words condemn him.",
  },
  'word: Henceforward there can be no question of happiness, but merely of saving the ruins, the shreds, the show | Which word admits that what Helmer wants to save is his reputation?':
    {
      why: "Helmer says this in Act 3 on reading Krogstad's first letter. The three nouns move from inside to outside: the ruins and shreds of the marriage, then the show, its outward appearance. By the third noun he has admitted that what he wants to save is how things look.",
      not: {
        happiness:
          'Happiness is what he says is gone for good. It is what he gives up, not what he means to save.',
        ruins:
          'Ruins is what is left of the marriage itself. It describes damage, not the public face he cares about.',
        shreds:
          'Shreds goes further than ruins, but it still describes what remains of the home. Only the last noun turns outwards, to appearances.',
      },
      more: "Ibsen's realism lets Helmer expose himself in his own words more devastatingly than a narrator could. Moments later a second letter arrives and his fury vanishes, which shows what he really feared.",
      tip: 'Translations vary here, and another public-domain version ends the list on appearance, but the pattern is the same: a list that ends on outward show. Analyse the order of a list, not only its items.',
    },
  'they ate apples … we ate mangoes': {
    why: 'Adichie remembers the stories she wrote at about seven, whose characters played in the snow and ate apples, although she had never left Nigeria, where there was no snow and people ate mangoes. Books from Britain and America had replaced her own life.',
    more: "The parallel phrases, the same verb with a different fruit, make a comic antithesis between the world of the books and the world of the child. The humour carries a serious point: stories from elsewhere can crowd out a child's own experience.",
    tip: 'Use it to show how Adichie argues: a funny, specific anecdote first, then the general lesson drawn from it. Name the antithesis and the shift from they to we.',
  },
  'we regain a kind of paradise': {
    why: "These are the last words of the extract from Chimamanda Ngozi Adichie's talk. When we reject the single story, she says, and see that there is never only one story about any place, we regain a kind of paradise.",
    more: "Regain implies a paradise once possessed and then lost, as if a fuller view of people were our natural state. The hopeful ending answers the talk's warnings about the damage single stories do.",
    tip: 'Use the ending to show how Adichie moves from personal anecdote to a hopeful, universal conclusion, a typical shape for persuasive speech.',
  },
  "speaker: People like Fide's family have nothing": {
    why: "Adichie's mother says it whenever the eight-year-old leaves food on her plate. It is the only direct speech in the extract that shows a single story being passed on, and it comes from a loving parent who also sends the family yams, rice and old clothes.",
    not: {
      "Adichie's mother, as Fide joins the household":
        'When Fide arrives, her mother tells the children only that his family is very poor. The text reports that in passing; these words are quoted later, as a rebuke over an unfinished dinner.',
      'Adichie, startled by the raffia basket':
        "The basket made by Fide's brother proves the opposite: the family can make something beautiful. The visit to his village breaks this single story rather than repeating it.",
      'Adichie, imagining how outsiders see Africa':
        "Adichie does name Fide's family again here, but only as a comparison: she would see Africans as she once saw them. The words themselves are her mother's, spoken years before.",
    },
    more: "The generalising 'People like' turns a family into a category, and the absolute 'nothing' erases everything they have, including the skill the basket later reveals. Because the speaker means no harm, the line shows single stories being taught at home, not only by the media.",
    tip: "Use it to show where single stories begin: analyse 'People like' and 'nothing', then link the child's pity to the roommate's pity for Adichie, which repeats the same mistake.",
  },
  'speaker: I was overwhelmed with shame': {
    why: 'Walking around Guadalajara on her first day in Mexico, Adichie watches people going to work, making tortillas, smoking and laughing. First she is mildly surprised, then this: she realises that American news coverage of immigration had given her a single story of Mexicans.',
    not: {
      "On the Saturday visit to Fide's village":
        'At the village the child is startled, not ashamed: she had never imagined that his family could make anything. The shame belongs to the adult, who has absorbed a media story without noticing.',
      'As her roommate pities her before they meet':
        "Here Adichie is the one misjudged, and she tells the story with humour, not shame: the roommate's surprise at her English and her assumptions about Africa are gently mocked.",
      'As she admits she too would believe the popular images':
        'Here she only imagines what she would think without a Nigerian childhood. The shame comes later, when she finds that she really has believed a single story, about Mexicans.',
    },
    more: "'Overwhelmed' suggests being flooded by a feeling too large to resist, and what causes it is ordinary life. The peak of feeling in the extract is not the pain of being misjudged but shame at misjudging others.",
    tip: 'Pair it with her confession of guilt that opens the Mexico story: by admitting her own single story, Adichie earns the right to ask her audience to examine theirs.',
  },
  'speaker: skin the colour of chocolate': {
    why: 'After discovering African writers, Adichie realises that people like her can exist in books, and she starts writing about girls with skin the colour of chocolate. The affectionate description marks her escape from stories in which everyone looked foreign to her.',
    not: {
      'as she describes the stories she wrote as a small child':
        'Her earliest stories were full of white, blue-eyed children from the books she read. This description comes after she has found books about people like herself.',
      "as she recalls her American roommate's assumptions":
        'The roommate comes later, in her student years in America. This moment belongs to her childhood reading and writing in Nigeria.',
      "as she describes visiting Fide's village":
        "The visit to Fide's village is about poverty and a basket. This phrase is about the girls she began to write about.",
    },
    more: 'The phrase shows the power of stories to include as well as exclude: once she has seen herself in literature, she can write herself into it.',
    tip: 'Use this moment to show how Adichie structures the talk as a journey, from a child shaped by a single story to a writer who resists it.',
  },
  "point: The Danger of a Single Story: Which line shows that the young Adichie's rescue came from African writers?":
    {
      why: 'Adichie sums up what reading Chinua Achebe and Camara Laye did for her: it freed her from believing that books had to be about foreigners, and showed her that girls like her could exist in literature. The rescuers in her own life are African writers.',
      not: {
        'waiting to be saved by a kind, white foreigner':
          'This is a rescue too, but one Adichie mocks: in the popular image of Africa, Africans wait while a foreigner acts. The only rescue she actually describes runs the other way.',
        'impressionable and vulnerable we are in the face of a story':
          'This is the danger before any rescue: the lesson she draws from the stories she wrote as a child, full of foreign characters and foreign weather.',
        'Their poverty was my single story of them':
          "This is a later single story, about Fide's family, and what breaks it is a basket made by Fide's brother, not a book by an African writer.",
      },
      more: 'Saved is the language of rescue, and it returns in the list of popular images of Africa. One reading is that the only rescue the talk describes is done by Africans, which reverses the saviour story before she has even named it.',
      tip: 'Track the verb across the talk. Comparing its two uses is a precise structural point: it shows Adichie answering the single story of helpless Africans with her own experience.',
    },
  'point: The Danger of a Single Story: Which line states how a single story is made?': {
    why: 'This is the thesis phrased as a recipe: show a people as only one thing, over and over again, and that is what they become. Repetition is the method, and the result is that the story replaces the people themselves.',
    not: {
      'Stories can break the dignity of a people':
        'This describes what stories can do once they are told, their power to harm. It is a consequence, not the method of making a single story.',
      'a single story of catastrophe':
        'This names one example, Africa seen only as disaster. It is a single story, not an account of how such stories are made.',
      'the abject immigrant':
        'This sums up the story she had absorbed about Mexicans. It is an example of the result, not the process that produces it.',
    },
    more: 'The self-correction from one thing to only one thing narrows the idea as it is spoken. Becoming suggests the story changes how people are seen, and perhaps how they see themselves.',
    tip: "Quote the thesis in an answer on the writer's purpose, and show how the anecdotes before it act as evidence for this general claim.",
  },
  "word: a kind of patronizing, well-meaning pity | Which word grants that the roommate's intentions were good?":
    {
      why: 'Well-meaning admits that the roommate meant no harm. Placed straight after an accusation, it makes a near oxymoron: Adichie names a prejudice that feels like kindness to the person who holds it, the subtlest harm in the talk.',
      not: {
        kind: "Here kind means sort: 'a kind of' is a hedge, Adichie choosing her words carefully. It does not call the roommate kind, which is a common misreading.",
        patronizing:
          'This is the accusation, not the defence: to patronise someone is to treat them as inferior while seeming to help. Well-meaning is the word that pulls against it.',
        pity: 'Pity is the feeling Adichie criticises. In the talk it is a way of looking down, the feeling a single story produces, and it leaves no room for a connection between equals.',
      },
      more: "The pairing shows Adichie being fair while she criticises: the roommate is uninformed, not cruel. Her pity also mirrors the young Adichie's pity for Fide's family, so the speaker who is misjudged here once misjudged others.",
      tip: "Analyse the two adjectives together: name the near oxymoron, then explain that the harm hides inside kindness. Copy the anthology's American spelling when you quote it.",
    },
  "word: I too am just as guilty | What does 'too' suggest here?": {
    why: 'Too means also. Having described how others held a single story of Africa, Adichie admits that she is just as guilty: she too has seen people through one story. The admission makes her argument fairer and harder to dismiss.',
    not: {
      'that she feels too much guilt to go on speaking':
        'Here too means also, not excessively. She goes straight on to give her own examples, so guilt does not silence her.',
      'that she blames others more than she blames herself':
        'The word does the opposite: it places her alongside those she has criticised, sharing the blame equally.',
      'that she alone is to blame for every single story told':
        'Too means as well as others, not instead of them. She shares the fault; she does not take all of it.',
    },
    more: "This is the turning point of the extract. A speaker who admits her own prejudice earns the audience's trust before asking them to examine theirs.",
    tip: "When you analyse persuasive methods, show how self-criticism builds the speaker's credibility and invites the audience to change.",
  },
  'between the rich world and the poor world': {
    why: "In A Passage to Africa, a starving man's smile silently asks Alagiah a question about the relationship between the two of them, then between two groups, and finally between the rich world and the poor world. One meeting in a Somali hamlet becomes a question about global inequality.",
    more: 'This is the last of three phrases beginning with between, each wider than the one before. The repeated world makes the divide total, and the reader is drawn in too: which side of it are we standing on?',
    tip: 'Use it to show how Alagiah widens a personal encounter into an argument. Name the triple structure and the blunt adjectives, and link the line to the viewers he says watch such pictures in comfort at home.',
  },
  'The search for the shocking is like the craving for a drug': {
    why: 'George Alagiah writes this early in A Passage to Africa, about journalists in Somalia hunting for the most terrible scenes. The simile presents news-gathering as an addiction that needs ever stronger doses.',
    more: 'He includes himself in the criticism. The honesty about his own trade prepares the reader for the moment that changes him later in the extract.',
    tip: "Use the simile to show Alagiah's critical view of the media, and how his self-awareness shapes the reader's trust in him.",
  },
  'speaker: like a ghost village': {
    why: 'The words end the directions Alagiah had jotted in his notebook on how to reach the hamlet outside Gufgaduud: a road, a dirt track, approximate timings. He copies them into the memoir, so we hear the reporter on the ground before the writer looking back.',
    not: {
      'Alagiah, quoting the dispatch he sent home':
        "Alagiah does quote his dispatch, but later, after Habiba's death, describing a quiet famine the headlines ignored. The ghost village comes from the directions in his notebook.",
      "Alagiah, at the old woman's doorway":
        "At her doorway he describes the smell of her wound, in the memoir's own voice. The ghost village comes earlier, at the end of the notebook directions that open the extract.",
      "The translator, explaining the man's smile":
        "The translator speaks only once, to explain that the man was embarrassed to be seen in this state. He describes the man's feeling, never the village.",
    },
    more: "The notebook's brisk register, a road, a track and approximate timings, clashes with what it describes: a community so hungry that the living already seem like the dead. The simile shocks because it is jotted down like a travel note.",
    tip: 'Use it to show the two voices of the memoir: the reporter on the ground, quoted from his notebook, and the older writer judging him. Then analyse the simile: a living place already haunted.',
  },
  'speaker: it was a smile nonetheless': {
    why: "Alagiah meets the man's eyes for only a few seconds before he withdraws into another hut, and in that moment the man smiles. Alagiah first says what the smile was not, neither a greeting nor a sign of joy, then insists that it was a smile all the same.",
    not: {
      'After the translator explains the smile':
        "The translator's answer comes in the next paragraph and gives the smile a meaning, an apology. Here Alagiah does not yet understand it; he can only insist that it happened.",
      'As he admits to pity and revulsion':
        'That confession comes earlier and concerns all the other people he saw that day. The smile arrives later as the thing that moved him beyond both feelings.',
      'As he resolves to write the story of Gufgaduud':
        'His resolution comes after the smile has been explained and its silent question understood. It is his answer to the smile, not the moment he describes it.',
    },
    more: "The pattern of denial and then affirmation mirrors Alagiah's confusion. 'Nonetheless' concedes everything against the smile, the hunger, the darkness, the brevity of the moment, and still holds on to it, so its power lies in how unlikely it is.",
    tip: 'Use it to show structure: Alagiah delays the face, then defines the smile by what it is not, building suspense before the translator explains it. Comment on how the plain insistence lands after two denials.',
  },
  'speaker: And then there was the face I will never forget.': {
    why: 'This single-sentence paragraph is the pivot of the extract. After the scenes of suffering, it introduces the one face Alagiah will never forget, the man whose smile changes his understanding of his work.',
    not: {
      "as he admits the journalists' ghoulish hunt for pictures":
        'That admission comes near the start, before the scenes in the village. This sentence turns the extract towards the smile.',
      'as he reflects on the power a journalist holds':
        'The reflection on power follows the smile, as he works out what it meant. This line comes just before the man appears.',
      'as he addresses his nameless friend at the end':
        'The address to his friend closes the extract. This line opens the encounter that leads to it.',
    },
    more: "The sentence echoes the opening's promise of one face among thousands, so the reader realises the whole extract has been building to this man.",
    tip: 'Use this line to discuss structure: a one-sentence paragraph slows the reader and marks the turning point of the piece.',
  },
  'point: A Passage to Africa: Which line confesses a reaction that, Alagiah says, television reports never admit?':
    {
      why: 'Alagiah admits that his response to all the other people he saw that day was pity mixed with disgust, and repeats the second word as if forcing it out. He then says that TV reports never say so: it is a taboo, and he breaks it in print.',
      not: {
        'In the ghoulish manner of journalists':
          'This is self-criticism too, but of the hunt for striking pictures, a way of behaving. It is not the feeling he says television never admits.',
        'the feeble smile that goes with apology':
          "This is the man's gesture, as Alagiah reads it after the translator's answer: an apology from the starving man. It is not Alagiah's own reaction.",
        'my nameless friend':
          "This closing address admits a failure, that he never learned the man's name. It is a regret about his own notes, not a feeling that TV reports keep hidden.",
      },
      more: 'The minor sentence sounds like a man insisting on a truth he would rather not tell. His honesty makes him credible, and it prepares the turn: the smile later moves him beyond both feelings, so these two measure its force.',
      tip: 'Quote the repetition and explain its effect: a description becomes a confession. Linking it to the smile, which goes beyond both feelings, turns a language point into a structural one.',
    },
  'point: A Passage to Africa: Which line exposes the unequal power between reporter and reported?':
    {
      why: 'The sentence is built as a mirror: the same verb in the active voice for the journalist and the passive for the subject. The grammar acts out the power it describes, one side looking and the other only looked at.',
      not: {
        'In the ghoulish manner of journalists':
          "This criticises journalists' morbid appetite for terrible pictures. It is about their hunger for horror, not the balance of power between watcher and watched.",
        'my nameless friend':
          'This closing address claims closeness with the man who smiled. It reaches across the gap rather than describing it.',
        'like a ghost village':
          'This comes from his notebook, describing the empty, silent village. It is about the place, not about journalists and their subjects.',
      },
      more: "The smile breaks this rule for a moment: the man's apology reaches back across the line between observer and observed, which is why it moves Alagiah so much.",
      tip: 'Comment on active and passive voice when you analyse this line; grammar used as meaning impresses examiners.',
    },
  'word: a thousand hungry, lean, scared and betrayed faces | Which word implies that someone is to blame for the suffering?':
    {
      why: 'To be betrayed, someone must have broken faith with you, so the last adjective implies a culprit. The list moves from the body to feeling to politics, and in a famine made worse by civil war, someone was to blame.',
      not: {
        thousand:
          'The round number turns people into a crowd, the wide shot before the close-up of one face. It says how many suffered, not who caused it.',
        hungry:
          'Hungry names a physical need, the first stage of a list that starts with the body. It describes suffering without implying that anyone caused it.',
        scared:
          'Scared names a feeling, the middle of the list. Fear can come from hunger, war or uncertainty; on its own it does not accuse anyone.',
      },
      more: 'Placing the surprise last gives it weight. The extract then narrows from this crowd to a hamlet, to named people, and finally to one face, undoing the anonymity of a thousand.',
      tip: 'When you analyse a list, track its direction and comment on the last item. Here the move from body to politics lets you link language to the war and famine in Somalia.',
    },
  "word: I owe you one | What does 'owe' suggest here?": {
    why: 'The extract ends on an everyday idiom for a small favour between friends. Alagiah feels indebted to the man whose smile taught him about dignity, though the casual phrase is almost too small for so large a debt.',
    not: {
      'that he still owes the man money for his help':
        'The debt is not financial. The man gave him an insight into dignity and shame, which money could not repay.',
      'that the man owes him thanks for the coverage':
        'The direction is the reverse: Alagiah is the one in debt. He does not see his reporting as a gift to the man.',
      'that he means to return to the village one day to repay him':
        'Nothing suggests a planned return. The idiom expresses a feeling of debt, not a promise of a journey.',
    },
    more: 'The casual register is double-edged: warm and modest, but also a reminder of how little a journalist can give back to the people whose suffering he reports.',
    tip: 'Analyse how the shift to direct address and a colloquial idiom gives the ending its emotional force.',
  },
  'mischievous tricks of the shifting light': {
    why: "In The Explorer's Daughter, Herbert watches from the lookout as the hunters sit motionless near the narwhal in the evening light. Distances in the Arctic deceive, and she wonders whether the whales exist at all or are only tricks played by the light.",
    more: 'The personification makes the light a playful trickster, and the effect is dreamlike and slightly unsettling. The first paragraph ends on uncertainty rather than action, which may hint that judging from a distance can mislead.',
    tip: 'Use it to show how the opening builds wonder before argument, then trace the shift from this uncertainty to the facts that follow. Be exact: the tricks, not the light, are called mischievous.',
  },
  'butter-gold, glinting off man and whale': {
    why: "Kari Herbert describes the evening light over the Arctic fjord in the opening of The Explorer's Daughter. The compound adjective makes the cold scene feel warm and rich, as the light glints off hunters and narwhal alike.",
    more: "Man and whale share the same light, which quietly sets up the extract's divided sympathies: Herbert will feel for both the hunters and the hunted.",
    tip: 'Use the description to show how Herbert creates a beautiful setting that makes the later hunt more troubling.',
  },
  'speaker: spread like a net': {
    why: 'The women are watching from the knoll, and every hunter is now out on the water. Herbert compares the scene to a vast game played on the water, with the hunters spread around the sound like a net, closing in.',
    not: {
      'As she first gazes across the evening fjord':
        'In the opening the hunters are only dotted around the fjord, lit by the evening sun and never moving. The net comes later, once all of them are out and the hunt has a shape.',
      'As she explains why the hunters keep still':
        "That paragraph explains the narwhal's keen hearing, which is why the hunters must sit so still. It is about silence, not about how the hunters are arranged.",
      'As one hunter raises his harpoon':
        'By then the focus has narrowed to a single hunter and two huge narwhal. The net image belongs to the wider view, when the whole group surrounds the sound.',
    },
    more: 'A net is patient and collective: no single strand catches anything alone. The simile presents the hunt as organised, skilled work rather than a reckless free-for-all, and it hints at how little escape the narwhal have.',
    tip: 'Use it to show how Herbert presents the hunters as a group, never named and never heard. Comment on the tension the simile builds just before the focus narrows to one hunter.',
  },
  'speaker: my heart leapt for both hunter and narwhal': {
    why: "One hunter is almost on top of two huge narwhal. At the instant he gently lifts his harpoon and aims, Herbert's heart leaps for both of them: she urges the man on and, at the same time, wills the whales to escape.",
    not: {
      'As the narwhal are spotted, very close':
        'When the narwhal are first spotted, Herbert is caught up in the beauty of the scene, describing light and spray. The divided feeling only comes when a kill is about to happen.',
      'As a woman gasps on the knoll':
        "The women's gasps show what a catch means to their families: food and income. Their hopes are all with their husbands, while Herbert's heart is split.",
      'As she names the dilemma that stayed with her':
        'She names the dilemma in the next paragraph, looking back on it. This line is the instinctive moment itself, faster than thought, which the dilemma then puts into words.',
    },
    more: 'The key word is both: placing hunter and narwhal side by side gives them equal weight. It is sympathy for two lives at risk, since the hunter is far from land in a fragile kayak, at real risk of drowning.',
    tip: 'Use it as the turning point of the extract. Many answers call it sympathy for the whale alone; be more precise, and show how Herbert refuses to choose between the two lives.',
  },
  'speaker: to dive, to leave, to survive': {
    why: "As a hunter takes aim, Herbert finds herself on the narwhal's side, wanting it to dive, to leave, to survive. The list of verbs builds to the one that matters most, as if she were urging the whale on.",
    not: {
      'as she first gazes across the evening fjord':
        'The opening describes the light and the stillness, before the hunt begins. Her wish for the narwhal comes at the tensest moment.',
      'as the hunters spread out across the water':
        'The spreading out of the kayaks comes earlier, as the hunt is organised. This wish comes when the harpoon is about to be thrown.',
      'as she defends the hunt to her critics at the end':
        'At the end she argues that hunting is a necessity. Here, in the moment, her feelings pull the other way.',
    },
    more: 'The quickening rhythm sounds like a racing heart. Herbert does not hide her conflict: she respects the hunters and still wants the whale to live.',
    tip: "Use the tricolon to show Herbert's divided feelings, and contrast it with the calm, factual tone of her defence of hunting.",
  },
  "point: The Explorer's Daughter: Which line shows Herbert pausing the scene to write like a textbook?":
    {
      why: 'After the lyrical opening, Herbert stops the story to give facts about the narwhal, and here the register is at its most formal: abstract, Latin-derived words, then minerals, vitamins and scurvy. Having made the reader feel the beauty, she makes them understand the need.',
      not: {
        'glittering kingdom':
          'This is the language of wonder, not of a textbook: a metaphor from the descriptive opening that turns the fjord into a royal realm of jewels and light.',
        'foolhardy exercise and one that could only inspire respect':
          'This is a personal judgement in the middle of the action, holding criticism and admiration together. It does not pause the scene to inform.',
        'How can you possibly eat seal?':
          "This is a colloquial question that others have put to Herbert, quoted in her closing argument. Its disbelief is the opposite of a textbook's neutral register.",
      },
      more: 'The noun survival anticipates the final paragraph: this hunt is not sport but life. The extract moves through four kinds of writing, description, information, narrative and argument, and each shift between them is a structural point.',
      tip: 'Name the shift in register and say why it is placed here: facts after feeling give her later defence of hunting an authority that description alone could not.',
    },
  'word: one cannot afford to be sentimental | Which word treats feeling as a luxury too costly for Arctic life?':
    {
      why: 'To afford something is to have enough money for it, so the verb presents sentiment as a luxury the harsh Arctic cannot pay for. Herbert is not saying she has no feelings, only that feeling cannot decide how people live there.',
      not: {
        one: 'One is the impersonal pronoun that turns her private feeling into a general rule. It widens the point; it does not carry the idea of cost.',
        cannot:
          'Cannot makes the statement absolute, but on its own it only forbids. The sense of a price too high to pay comes from the verb that follows it.',
        sentimental:
          'Sentimental names the feeling being ruled out, the soft-hearted reaction she has just had. It is what cannot be paid for, not the word that sets a price.',
      },
      more: 'The line comes soon after the emotional climax, as if she were correcting herself. A better reading than rejection is balance: she admits she still feels the pull, but says feeling cannot be the test of a way of life in such a place.',
      tip: 'Use it to show the shift from feeling to argument in the final paragraph. Analyse the money metaphor and the impersonal pronoun together: both make a personal reaction answer to a harsher rule.',
    },
  'word: Hunting is still an absolute necessity in Thule | Which word suggests that hunting goes on whatever the modern world thinks?':
    {
      why: 'Still means even now. It concedes that the world has changed and that many people think hunting belongs to the past, yet insists that in Thule it continues and must continue.',
      not: {
        Hunting:
          'Hunting is the subject of the sentence, the thing being defended. It does not say anything about time or change.',
        absolute:
          'Absolute makes the necessity total, allowing no exception. It strengthens the claim, but the sense of continuing despite change is in another word.',
        necessity:
          'Necessity says hunting is required to survive. It explains why it goes on, but not that it goes on in spite of the modern world.',
      },
      more: 'The extract ends on this flat statement of fact. After her emotional response to the hunt, Herbert closes with the practical reality of life in the Arctic.',
      tip: "Small adverbs carry big arguments: explain how 'still' answers the critics' question about eating seal without arguing with them directly.",
    },
  'plucked from the icy water': {
    why: 'In Explorers, or boys messing about?, Morris reports that the two men were lifted from the sea by a Chilean naval ship after a nine-hour rescue, which began with a satellite-phone call from Brooks to his wife.',
    more: 'The verb plucked suggests something small and helpless lifted out easily, and the passive voice makes the men the ones acted upon. The heroic role an adventure story would give the explorers passes to their rescuers.',
    tip: 'Use it to show how voice shapes judgement: compare the passive men here with the energetic active verbs given to HMS Endurance. The adjective icy keeps the real danger in view.',
  },
  'speaker: boys messing about with a helicopter': {
    why: "Brooks's wife, who claimed not to know what the two men were doing, describes them this way. On the day of a frightening rescue it probably sounds like affectionate exasperation, but Morris lifts her words into the headline, and a private tease becomes a public verdict.",
    not: {
      'Jo Vestey, joking about the punishment awaiting them':
        'Vestey does have the last word, joking that the men will probably be punished like naughty children. That echoes this phrase, but the phrase itself comes earlier, when she claims not to know their plans.',
      'Günter Endres, questioning the choice of helicopter':
        "Endres criticises the choice of the R44 near the end, in an expert's terms. Calling the men boys is a personal, teasing judgement, the kind only someone close to them could make so lightly.",
      'Steve Brooks, phoning from the liferaft':
        'Brooks is never quoted directly: his words from the liferaft reach us only through his wife, asking her to call the emergency services. Neither he nor Smith judges the expedition anywhere in the article.',
    },
    more: "'Messing about' suggests aimless play rather than exploration, and 'boys' denies the men adult judgement. Because the words come from the person closest to Brooks, they cannot be dismissed as an outsider's prejudice, which is what makes the headline so damaging.",
    tip: "Use it to show selective quotation: Morris rarely judges in his own voice, but he chooses whose words to promote. Name the source and explain why a loving wife's tease carries more weight than a critic's.",
  },
  'speaker: nothing short of a miracle': {
    why: "Morris concedes that the men had survival suits on and clear weather where they came down, then reports an unnamed Antarctic explorer telling Brooks's wife that their survival was a miracle.",
    not: {
      "Jo Vestey, passing on her husband's call for help":
        "Vestey reports Brooks's call from the liferaft: they were both all right, and could she contact the emergency services. She describes the situation; the verdict of a miracle comes from an explorer speaking to her.",
      'Günter Endres, questioning the R44':
        "Endres is the article's one named expert, but his criticism is of the choice of helicopter for a long flight over the sea, not of how lucky the men were to survive.",
      "The pair's spokesman, defending the flight":
        'The spokesman defends the men, saying nobody knows what went wrong and that flying conditions were good. Calling their survival a miracle would undercut his own case.',
    },
    more: 'Hyperbole from an unnamed authority credits survival to luck, not skill. Placed straight after the concession about their suits and the weather, it suggests that sensible preparation was not enough, and it casts doubt over the paragraphs on their experience that follow.',
    tip: "Use it to show how Morris lets others judge: an unnamed source, a strong word, and a careful position just before the men's record. Comment on the source as well as the hyperbole.",
  },
  'speaker: almost led to tragedy': {
    why: "In the second sentence of the article, Steven Morris moves from the earlier attempt, which ended in farce, to this one, which almost led to tragedy. Placing the two words side by side captures the article's uncertain attitude to the men.",
    not: {
      'as Jo Vestey describes what she knew of their plans':
        "Jo Vestey's comments come later, after the rescue has been described. This phrase belongs to the opening summary.",
      'as an expert questions their choice of helicopter':
        "The expert's criticism comes near the end. This phrase sets the scene at the start.",
      'in the last words, as Jo Vestey jokes about punishment':
        'The joke about punishment closes the article. This phrase opens it, straight after the earlier failure.',
    },
    more: 'Farce and tragedy are opposite kinds of drama, comic absurdity and serious disaster. Morris lets the reader decide which this expedition was.',
    tip: "Use the opening juxtaposition to show how the writer shapes the reader's view of the men from the very first lines.",
  },
  'point: Explorers, or boys messing about?: Which of these is Morris commenting in his own voice, not quoting someone else?':
    {
      why: "The adverb is Morris's most open comment. An expedition partly meant to show how far relations between east and west had improved was halted by a Russian threat, and instead of leaving the reader to notice the irony, he names it.",
      not: {
        'trusty helicopter':
          'These are the words of a website promoting the Bering Strait expedition. Morris quotes them just after the crash, so they sound hollow, but the judgement is implied by placing, not stated.',
        'pushing it to the maximum':
          "This is Günter Endres, editor of a specialist aviation publication and the article's one named expert. Morris lets him deliver the clearest criticism of the men's judgement.",
        'bottoms kicked and be sent home the long way':
          "This is Jo Vestey's joke, the article's final words. Morris chooses to end on it, but the words, with their picture of naughty children, are hers.",
      },
      more: "Most of the article's judgement is implied through the voices Morris chooses and where he places them. That is why this single adverb stands out, and why it confirms the pattern of the opening: this pair's plans have a habit of turning into their opposite.",
      tip: "In an answer on this article, separate Morris's own words from the words he quotes. Showing that the criticism comes from others, while he arranges it, is the key structural point.",
    },
  'point: Explorers, or boys messing about?: Which phrase leaves it unclear who exactly is angry about the rescue?':
    {
      why: 'Resentment is a strong, bitter feeling, but some quarters never says whose. The vague phrase is a classic journalistic hedge: it reports criticism of the men without naming anyone who made it.',
      not: {
        'ended in farce':
          "This judges the earlier attempt as absurd. It is Morris's own verdict, not an unnamed group's anger.",
        'almost led to tragedy':
          "This describes how close the men came to dying. It says nothing about anyone's anger.",
        'plucked from the icy water':
          'This describes the rescue itself, the men lifted from the sea. It reports an event, not a reaction to it.',
      },
      more: 'Hedges like this let a writer suggest that many people are critical without having to prove it. The reader is nudged towards disapproval.',
      tip: 'Watch for vague attributions in non-fiction and explain their effect: they spread a view while avoiding responsibility for it.',
    },
  'word: claims to have been flying since the age of five | Which word casts doubt on what follows, though nothing contradicts it?':
    {
      why: "To claim something suggests it may not be true, although Morris offers nothing to contradict Smith. The same verb is used for the website and, as claimed, for Jo Vestey, so the adventurers' side is presented as assertion, while the experts simply say or question.",
      not: {
        flying:
          "Flying is the fact being reported, Smith's skill as a pilot. The doubt hangs over it from the verb before it rather than coming from this word.",
        age: 'Age belongs to the childhood detail itself. It points to how young Smith was, not to any doubt about whether the detail is true.',
        five: 'Five makes the detail striking, a small child at the controls, which fits the picture of boys at play. It is the content of the claim, not the word that questions it.',
      },
      more: "The detail itself, a five-year-old at the controls, feeds the article's image of men who never stopped playing. A neutral verb such as says would have made it a plain fact about a highly experienced pilot.",
      tip: 'Track the reporting verbs in a news article. Here the pattern, claims for one side and neutral verbs for the other, shows bias without a single open statement of opinion.',
    },
  "word: ended in farce | What does 'farce' suggest here?": {
    why: 'A farce is a comedy built on absurd mishaps. Calling the earlier attempt a farce makes the men look ridiculous before the reader learns anything else about them, shaping the whole article.',
    not: {
      'that the earlier attempt ended in serious disaster':
        'Disaster is the opposite kind of drama, tragedy. The very next sentence brings in tragedy to describe this attempt, not the earlier one.',
      'that the men cheated in their record attempt':
        'Nothing suggests cheating. Farce mocks the attempt as absurd, not dishonest.',
      'that the newspaper refuses to report the story':
        'The paper reports the story in detail. Farce is a judgement on what happened, not on the reporting.',
    },
    more: "Starting with a previous failure frames the men as repeat offenders. The headline's question is already half answered by the first sentence.",
    tip: "Comment on the writer's choice of genre words, farce and tragedy, to show how tone is set in the opening.",
  },
  'the claustrophobic feel of a short tunnel': {
    why: 'In Between a Rock and a Hard Place, Ralston reaches another drop-off in a narrow slot canyon, with a fridge-sized boulder wedged between the walls ahead. The space below feels like a short tunnel, and the canyon narrows rather than opening out.',
    more: 'Claustrophobic names a fear of enclosed spaces, so the setting arrives through an emotion rather than a measurement. Read with hindsight, a tunnel, with one way in and one way out, foreshadows the trap before anything has gone wrong.',
    tip: 'Use it to show foreshadowing in an opening full of heights and distances, where a single feeling word stands out. Link it to the moment the canyon becomes a trap.',
  },
  "Time dilates, as if I'm dreaming, and my reactions decelerate.": {
    why: 'Aron Ralston writes this in Between a Rock and a Hard Place, at the moment the boulder falls. He slows the narrative just as events speed up, using scientific verbs to show time stretching in a crisis.',
    more: "The present tense puts the reader inside the moment. The engineer's precise vocabulary contrasts with the dreamlike experience it describes.",
    tip: 'Use the line to show how Ralston manipulates pace: slowing time at the climax builds tension and makes the reader feel the shock.',
  },
  'speaker: It supports me but teeters slightly.': {
    why: 'Ralston kicks the wedged boulder to test it, decides it is fixed firmly enough to hold him, and steps onto it. It holds his weight but rocks a little. He notices the warning, judges the risk small, and goes on to lower himself over its edge.',
    not: {
      'As he hangs from it at full stretch':
        'He hangs from the boulder after this, lowering himself over its front edge. That is when his shifting grip makes it move, so the warning comes before the hanging, not during it.',
      'As he plans his route down from the ledge':
        'From the ledge he only picks out the boulder and plans to step onto it and drop the last few feet. He has not yet touched it, so he cannot feel it rock.',
      'As his grip makes the stone shift':
        'When the stone shifts, it is no longer teetering slightly: it moves with a harsh scraping and begins to fall. This line is the quiet warning that comes before.',
    },
    more: 'The whole accident is foreshadowed here. The first clause reassures, but lets doubt in, teeters suggests something balanced on the edge of falling, and slightly shows him deciding the risk is small. A careful climber judging a warning acceptable is more unsettling than carelessness.',
    tip: 'Use it to argue that Ralston is careful, not reckless: he tests, notices and decides. That care makes the accident more disturbing, since skill could not prevent it.',
  },
  'speaker: Then silence.': {
    why: 'The boulder smashes his left hand, which he snatches back, then crushes his right hand and pins his arm at the wrist against the wall, sliding down and tearing his skin. After the long, crowded sentence of the impact, two words close the paragraph.',
    not: {
      'After his three yanks at his arm fail':
        'When his three yanks fail, the paragraph ends on a flat, three-word statement of his situation instead. By then the silence has given way to pain and panic.',
      'After his final heave against the rock':
        'His final heave ends the extract with a one-word answer from the rock. That word is about failure; this one is the stillness straight after the impact.',
      'As the stone first shifts under his adjusting grip':
        'When the stone first shifts there is noise, not silence: a harsh scraping as his weight disturbs it. The silence comes only after the rock has fallen and stopped.',
    },
    more: 'After the smashing, ricocheting and tearing, the sudden silence is a structural full stop: the movement is over and his situation is fixed. It also marks the gap between the accident and his understanding of it, the moment before the pain arrives.',
    tip: 'Use it to analyse pace. Contrast the long sentence of the impact with this minor sentence, and explain how the change in length makes the reader feel the stillness.',
  },
  'speaker: This technique is known as stemming or chimneying': {
    why: 'Early in the extract Ralston pauses to name and explain his technique for moving through the narrow slot canyon, pressing against both walls. The instructional register shows his expertise before anything goes wrong.',
    not: {
      'as he hangs from the chockstone at full stretch':
        'Hanging from the chockstone comes later, as he lowers himself over it. This explanation belongs to the earlier descent.',
      'as the falling boulder traps his right hand':
        'The fall comes after the technical passages. By then there is no room for calm explanation.',
      'as he heaves again and again at the boulder in the last paragraph':
        'The final paragraph is all effort and failure. This line comes while he is still in control.',
    },
    more: 'Sounding like a guidebook makes him seem competent and safe, which makes the accident more shocking when it comes.',
    tip: "Show how Ralston shifts register, from instruction to crisis, to control the reader's sense of safety and danger.",
  },
  'point: Between a Rock and a Hard Place: Which line shows the writer, looking back, judging the man in the canyon?':
    {
      why: 'In the moment, yanking his arm three times felt necessary. Writing afterwards, Ralston calls it naive, meaning innocent and unrealistic. The judgement tells the reader, without revealing the ending, that pulling will never work, and its self-criticism makes him seem honest rather than heroic.',
      not: {
        "But I'm stuck.":
          'This is the man in the canyon stating his situation plainly, for the first time, in the present tense. It reports a fact; it does not judge what he has just tried.',
        'Good God, my hand.':
          'This is an instinctive thought at the moment pain breaks through, the controlled voice cracking. It belongs to the man in the canyon, not to the writer reflecting later.',
        'raging at full flood':
          'This describes the adrenaline he hopes will free him, part of his reasoning in the moment. It explains a plan; it passes no verdict on one.',
      },
      more: 'There are two Ralstons in the extract: the man in the canyon, living each moment in the present tense, and the writer composing the account afterwards. This rare judgement lets the second briefly step in front of the first.',
      tip: 'Use it to discuss narrative voice. Showing the gap between the man who acts and the writer who judges is a strong structural point, especially when you compare perspectives.',
    },
  'point: Between a Rock and a Hard Place: Which line shows Ralston treating his own body as something under orders?':
    {
      why: 'Ralston describes himself as two separate beings, a mind giving orders and a body carrying them out. Splitting himself this way shows the detached control he tries to keep in the first moments of the crisis.',
      not: {
        'Come on...move!':
          'These words are addressed to the rock, not to his body. He is urging the boulder to shift, as if it could hear him.',
        'Nothing.':
          "This one-word sentence is the boulder's answer to all his effort. It records failure, not a command to his body.",
        'the claustrophobic feel of a short tunnel':
          'This describes the narrow canyon early in the extract. It is about the place, not about how he controls himself.',
      },
      more: "The order that follows is set out step by step. Ralston's training makes him think like a machine, which may be what keeps him alive.",
      tip: 'Use the line to show how Ralston presents his own mind under extreme pressure: rational and detached, almost outside himself.',
    },
  'word: the backlit chockstone falling toward my head consumes the sky | Which word turns the rock into something that devours?':
    {
      why: 'To consume is to eat or use up, so the verb makes the falling boulder a monster swallowing his whole view. The rock is the grammatical subject, and Ralston is reduced to the head it falls towards: for a moment the landscape is monstrous, not indifferent.',
      not: {
        backlit:
          'Backlit means the light is behind the rock, so he sees it as a dark shape against the bright sky. It shapes the picture but does not make the rock devour anything.',
        chockstone:
          "Chockstone is the climber's technical name for a boulder wedged between walls. It keeps his precise vocabulary even here; the monstrous effect comes from the verb.",
        falling:
          'Falling states what the rock is doing, plainly and physically. It gives the movement, not the sense of an appetite that swallows the sky.',
      },
      more: 'Elsewhere Ralston describes the canyon in the language of physics: heights, friction and turning force. This image is the one exception, seen from below through fear, and it passes, which makes it all the more striking.',
      tip: 'Analyse the verb and the grammar together: the rock acts, and Ralston is only its target. Link it to the reversal of control that runs through the whole extract.',
    },
  "word: a scraping quake | What does 'quake' suggest here?": {
    why: "The first sign of disaster arrives as sound and vibration. Quake suggests an earthquake, so the boulder's movement feels as huge and uncontrollable as the ground itself moving.",
    not: {
      'his body shakes with fear as he slips':
        'The quake comes from the rock, not from him. Fear follows, but the word describes what he hears and feels in the stone.',
      'the canyon floor is covered in loose stones':
        'The phrase describes a sudden movement, not the state of the floor. One huge rock is shifting.',
      'a storm is breaking over the canyon':
        'There is no storm. The noise and shaking come from the boulder giving way above him.',
    },
    more: 'Scraping is harsh and onomatopoeic, so the reader almost hears the stone grind. The two words turn a single rock into a natural disaster.',
    tip: 'Pair sound and meaning when you analyse a phrase like this: explain what each word makes the reader hear and feel.',
  },
  'If you look at the statistics, I should be in prison': {
    why: "In Young and dyslexic? You've got it going on, Zephaniah lists everything that counted against him: his race, the part of town he grew up in, a family that fell apart, trouble with the police, no reading, writing or qualifications, and, on top of all that, dyslexia.",
    more: 'He invokes statistics without giving a single number, because the point is the prediction they make about a person. The next sentence answers it: staying out of prison, he says, is about facing your fears and finding your way in life.',
    tip: 'Use it to show how Zephaniah argues against labels: the conditional sets up a prediction so that his own life can disprove it. Link it to the two futures he keeps in view, prison and architecture.',
  },
  'no compassion, no understanding and no humanity': {
    why: 'Benjamin Zephaniah uses this list to describe the education system of his childhood. The repeated no builds a tricolon in which each lack seems larger than the last, ending with humanity itself.',
    more: 'The anger is controlled: three plain nouns do the work. The article goes on to explain how a system with none of these failed dyslexic children like him.',
    tip: "Use the tricolon to show how Zephaniah's anger is shaped into rhetoric, and link it to his purpose of changing how dyslexia is seen.",
  },
  'speaker: We can’t all be intelligent': {
    why: 'When the young Zephaniah finds writing hard and asks for help, a teacher says this, adds that he will end up a sportsperson, and suggests he go outside and play football. It sounds kind; only as an adult does Zephaniah see that he was being stereotyped.',
    not: {
      'The teacher who answers his question about sleep':
        'That teacher answers his question about sleep with a counter-argument, and leads with a direct insult. Her dismissal is blunt; this one is polite, which makes it harder to spot as prejudice.',
      'A teacher, when he challenges a lesson on Africa':
        "When he challenges a teacher's racist description of Africans, she is outraged that he dares to question her. That is anger at being challenged, not a verdict on his intelligence.",
      'Zephaniah, giving up on reading at 13':
        'At 13 he gives up on reading because it is such hard work, but he never calls himself unintelligent: he says later that he never thought he was stupid.',
    },
    more: 'The inclusive we pretends to share the burden while placing him outside the intelligent group. One reading is that the offer of sport rests on a racial stereotype of a black boy as an athlete rather than a thinker, though Zephaniah does not say which kind he means.',
    tip: 'Use it to show prejudice in polite language: analyse the false we, then link it to the advice he gives parents at the end of the article about what dyslexia does not measure.',
  },
  'speaker: Do I need an operation?': {
    why: 'At 21, at an adult education class in London, a teacher tells Zephaniah he is dyslexic, and he asks this, as if the word named an illness. When she explains what it means, he is relieved: there is a reason, and he had feared he was going crazy.',
    not: {
      'Zephaniah, as a boy questioning a teacher about sleep':
        'As a boy he asks whether sleep is a design fault, a bold and creative question. Nobody then could have told him he was dyslexic: his teachers did not know what dyslexia was.',
      'A child who tells him they are dyslexic too':
        'The children who tell him proudly that they are dyslexic too already know the word and are pleased with it. The fear of an illness belongs to Zephaniah, hearing it for the first time.',
      'Zephaniah, asking a teacher for help with writing':
        'When he asks for help with writing as a boy, nobody gives him the word dyslexic at all. It reaches him years later, which is partly why it sounds so alarming.',
    },
    more: 'Retold by the adult writer, the question is comic, and the joke is at his own expense. But it makes a serious point: the label seems never to have been explained to him, so it arrived sounding like a disease.',
    tip: "Use it to show Zephaniah's humour working for his argument. Contrast this teacher's explanation with the dismissals of his schooldays: understanding, not a label, is what changes things.",
  },
  'speaker: Shut up, stupid boy.': {
    why: 'When the young Zephaniah asks a question about sleep, a teacher answers it, with a fair point, but opens with an insult: shut up, stupid boy. The direct speech lets the reader hear the label before he comments on it.',
    not: {
      'A teacher, when he asks for help with writing':
        "That teacher's reply sounds kindly but dismisses him in a different way, steering him away from learning. The insult here comes in answer to his question about sleep.",
      'A teacher, when he challenges a lesson on Africa':
        'That is another of his memories of school. These blunt words answer his question about sleep.',
      'Zephaniah, giving up on reading at 13':
        "These are not his words about himself. They are a teacher's label, spoken to him.",
    },
    more: "Zephaniah even concedes that the teacher's answer made sense, which leaves the insult as the only thing to object to. The problem was the label, not the lesson.",
    tip: 'Use the line to show how the article uses remembered direct speech as evidence of how dyslexic pupils were treated.',
  },
  "point: Young and dyslexic? You've got it going on: Which line moves the burden of adjusting from the dyslexic person to everyone else?":
    {
      why: "This is the article's argument in one sentence: whoever cannot understand dyslexia is the one with the problem. Zephaniah compares it at once with racism: when he is oppressed because of his race, he does not ask himself how he could become white.",
      not: {
        'Dyslexia is not a measure of intelligence':
          'This tells parents not to treat dyslexia as a defect, a claim about intelligence. It reassures them; it does not say who must change.',
        'We are the architects, we are the designers.':
          'This celebrates what dyslexic people make, a statement of pride. It recasts them as builders of the world rather than placing the problem with anyone else.',
        'the past is a different kind of country':
          'This excuses his teachers by placing their cruelty in another time with other rules. It is generous to them, the opposite of handing them the problem.',
      },
      more: 'The parallel with race is bold: it treats dyslexia as part of who a person is rather than a fault to fix. Coming after nearly seventy lines of his own experience, the short, flat sentence has the force of a conclusion.',
      tip: 'Use it to show the turn from story to argument in the second half. Explain how the comparison with racism changes where the reader sees the problem.',
    },
  "point: Young and dyslexic? You've got it going on: Which line flips the hierarchy, making the majority the odd ones out?":
    {
      why: "The article's last words are a joke Zephaniah shares with children: now the non-dyslexic majority are the strange group, mocked with a mild swear word and a rhetorical question. The usual order is turned upside down.",
      not: {
        'Shut up, stupid boy.':
          'This is the old order at work: a teacher labelling the dyslexic child as stupid. It shows the hierarchy, not its reversal.',
        'no compassion, no understanding and no humanity':
          "This attacks the education system of his childhood. It criticises the majority's system, but it does not turn them into the odd ones out.",
        'We can’t all be intelligent':
          "A teacher's dismissive words, placing him outside the intelligent group. It is the hierarchy the ending reverses.",
      },
      more: 'Ending on laughter rather than anger suits his purpose: he wants dyslexic young people to feel proud, not pitied.',
      tip: "Comment on how the ending reverses the article's opening experiences, a structural choice that leaves the reader with confidence, not grievance.",
    },
  'word: Us dyslexic people, we’ve got it going on | Which word breaks a rule of standard English grammar?':
    {
      why: 'Standard grammar wants We as the subject of a sentence, so Us dyslexic people is nonstandard. Putting it in the mouth of a professor is deliberate: he speaks to young readers in their own register and shows the confidence he recommends, refusing to tidy his grammar for anyone.',
      not: {
        dyslexic:
          'Dyslexic is a standard adjective describing the people. Its pride comes from the context, not from any break with grammar.',
        'we’ve':
          'The contraction is informal but perfectly grammatical. The slip from standard grammar comes earlier, in the pronoun that opens the sentence.',
        going:
          "Going belongs to the idiom 'got it going on', slang for having real appeal and success. Slang is an informal register, not a broken rule of grammar.",
      },
      more: 'The words give the article its title, and they come in its final paragraph, spoken to children who tell him proudly that they are dyslexic too. The article ends on pride rather than pity.',
      tip: 'When a writer breaks a rule, ask why. Here nonstandard grammar from a professor is an argument in itself: intelligence and formal correctness are not the same thing.',
    },
  'word: I’m not stupid - you’re the one who’s stupid. | Which word does Zephaniah hand back to the people who used it on him?':
    {
      why: 'Stupid is the word his teachers used on him. Here he hands it back to an imagined person who reads and writes easily yet holds ignorant, racist views: being able to read, the retort shows, is no protection against stupidity.',
      not: {
        not: 'Not denies the label for himself, but the word being returned to its owners is the label itself.',
        'you’re':
          "You're points the charge at someone else, but it is the repeated adjective that is handed back.",
        one: 'One singles out the person accused. The word that has travelled from the classroom to this sentence is stupid.',
      },
      more: 'The mirrored structure gives the line the neatness of a punchline. Turning the insult round takes away its power and shows that a label depends on who is doing the labelling.',
      tip: 'Explain how repetition with a reversal, saying the same word about someone else, works as a rhetorical weapon.',
    },
  'Formula One without rules, or a city-centre rush hour gone anarchic': {
    why: 'In A Game of Polo with a Headless Goat, Yaqoob swerves in front of the nearest car and wins a place at the front of the convoy chasing two racing donkey-carts. Levine reaches for two comparisons her readers would know, then says plainly that every traffic rule, and common sense, is being ignored.',
    more: 'Each metaphor is built on a contradiction. Formula One without rules removes the one thing that makes it a sport, and a rush hour gone anarchic turns boredom into riot. The humour lies in how far both comparisons fall short of the scene.',
    tip: 'Use it to show how travel writing makes the unfamiliar familiar. Analyse both halves, then comment on the plain statement after the semicolon, where the jokes stop.',
  },
  'speaker: I don’t even have my licence yet because I’m underage': {
    why: 'Driving away at a calmer pace, Yaqoob says how much he enjoyed the chase, then adds this as a joke. The lads find it hilarious; Levine is glad he did not tell her before. The skilful driving she admired was the work of someone too young to hold a licence.',
    not: {
      'Yaqoob, as he swerves into the convoy':
        'As he cuts into the convoy, Yaqoob is relishing the test of his skill and leaning on the horn. Levine learns his age afterwards, which is why the drive reads as a triumph until then.',
      'Iqbal, reporting back from the crowd':
        "Iqbal comes back from the crowd to report that nothing is settled and that it is turning nasty, so they should leave. He is the voice of caution; the confession is Yaqoob's.",
      'Yaqoob, as they wait on the crest of the hill':
        'On the hill the lads only plan the chase and promise to reach the front. Levine says she was glad he had not told her before, so the confession cannot come before the race.',
    },
    more: 'The punchline is held back until the danger is over, and it makes the reader rethink everything before it. Delivered casually in direct speech, it turns a story about a race into a story about a risk the writer did not know she was taking.',
    tip: "Use it to show structure: Levine withholds the fact until the end, partly because she only learned it then. Contrast the lads' laughter with her relief to show two attitudes to risk.",
  },
  'speaker: We waited for eternity': {
    why: 'Perched in the open boot with a zoom lens, Levine waits on the brow of the hill for the race. By her own count nearly an hour passes, so eternity tells us how the wait felt rather than how long it lasted, and almost nothing goes by.',
    not: {
      'In the car, while the lads go into the crowd':
        'Waiting in the car while the lads disappear into the crowd is tense, not tedious: the argument is turning nasty. Levine does not exaggerate that wait; she simply says they came back later.',
      'In the lay-by, as the convoy roars closer':
        'In the lay-by the race is already roaring towards them and Yaqoob is revving the engine. The waiting is over; this is the moment it ends.',
      'After the fall, as the punters argue':
        'After the fall the problem is a dispute, not a delay: the crowd grows angry as the punters argue about the winner. Levine reports the anger, not the time it takes.',
    },
    more: 'The short, flat clause slows the pace at exactly the point the reader wants action. The self-mockery, a writer sitting in a car boot watching an empty road, makes her a narrator we trust, because she does not take herself too seriously.',
    tip: "Use it to show how Levine builds anticipation: hyperbole, a long wait and a comic let-down, so that the race's sudden arrival feels all the faster.",
  },
  'point: A Game of Polo with a Headless Goat: Which line ends a heroic-sounding list on an anticlimax?':
    {
      why: 'Levine lists the skills the road demands of a driver, from sharp steering and quick reflexes to courage. Then the list closes on a car horn. The deflation mocks the idea of a noble contest, while admitting that on this road noise is as useful as courage.',
      not: {
        'horns tooting, bells ringing':
          'This is a list of sounds, each noun with a present participle, rushing at the reader as impressions. It builds noise and energy; nothing in it deflates.',
        'Voices were raised, fists were out and tempers rising':
          'This tricolon builds towards violence, each clause a step closer. It is a climax, not an anticlimax: the anger grows rather than collapses.',
        'survival of the fittest':
          'This grand idiom from evolutionary theory introduces the list of skills. Its grandeur is comic, but it opens the list rather than ending it with a let-down.',
      },
      more: 'The semicolons that separate the items keep the sentence moving at the speed of the driving it describes, so the comic last item lands at full tilt.',
      tip: "When you analyse a list, look at its last item. Here the bathos lets you show Levine's humour and her admiration for the young driver in a single point.",
    },
  'word: almost dwarfed by their entourage | Which word makes the two donkeys sound like celebrities?':
    {
      why: 'An entourage is the group of followers who surround a celebrity or a ruler, so the two small donkeys become stars with a vast, noisy crowd of about fifty vehicles in tow. The animals are the reason for the event, and yet the event has nearly swallowed them.',
      not: {
        almost:
          'Almost holds back from saying the donkeys vanish completely, and the next clause insists on their speed. It qualifies the picture; it does not make them stars.',
        dwarfed:
          'Dwarfed makes the donkeys look tiny beside the convoy, a contrast of scale. Size alone does not make them celebrities; their followers do.',
        their:
          "Their tells us that the crowd belongs to the donkeys, but the idea of a star's following is carried by the noun it introduces.",
      },
      more: 'The effect is affectionate comedy: two small animals with a roaring convoy behind them. The anthology footnotes the word, but its connotation of fame is what gives the line its humour.',
      tip: "Look beyond a footnote's definition to a word's connotations. Here entourage brings celebrity and royalty to a dusty main road, which is the joke.",
    },
  'word: a villager on a wobbly bicycle | Which word suggests the rider can barely stay upright?': {
    why: 'Wobbly means unsteady, rocking from side to side. After all the waiting for a race, the only thing to pass is a villager who looks as if he might fall off his bike.',
    not: {
      villager: 'Villager tells us who the rider is, an ordinary local, not how he rides.',
      on: 'On simply links the rider to his bike. It carries no sense of unsteadiness.',
      bicycle:
        'The bicycle is comic in itself after the build-up, but it is the adjective that shows him struggling to stay upright.',
    },
    more: 'This is bathos: grand expectation followed by something small and silly. Emma Levine uses it to make the long wait funny.',
    tip: 'Name bathos when you find it and explain its effect: humour that comes from a sudden drop in tone.',
  },
  'on the other side of mountains are mountains': {
    why: 'In Beyond the Sky and the Earth, Zeppa remembers flying into Bhutan that morning from the plains of India. She used to wonder what lay beyond mountains; now she knows, and the sentence goes on repeating the word as if the landscape had no end.',
    more: 'The flat, almost comic answer, and the repetition that follows, trap the reader as the landscape traps the traveller. It stresses remoteness: the plains are behind her, and ahead there is only more of the same.',
    tip: "Use it to show how repetition makes the reader feel remoteness rather than being told about it. Link it to the opening's hyperbole about a country made entirely of mountains.",
  },
  'his face rubbed with wet dough': {
    why: "This comes from the final paragraph of Jamie Zeppa's Beyond the Sky and the Earth, where she tells the history of the British envoy Ashley Eden's visit of 1864. The last of the indignities he suffers is to have wet dough rubbed in his face, before he is made to sign a treaty.",
    more: "Zeppa tells a diplomatic disaster as farce: the representative of a vast empire is made ridiculous, and the comedy takes Bhutan's side. The history lesson comes at the end of the extract, just before her closing verdict on the country.",
    tip: "Use it to show how Zeppa mixes history and humour: name the bathos of the list of indignities, and say what the comedy suggests about the British in Bhutan's story.",
  },
  'speaker: the best built race of men I ever saw': {
    why: 'Zeppa borrows these words from George Bogle, a British envoy who passed through Bhutan on his way to Tibet in 1774, and adds that she agrees. Her own first impression of the Bhutanese gains the weight of an older witness.',
    not: {
      'Ashley Eden, on his visit of 1864':
        'Eden is the envoy whose visit went disastrously: he was roughly handled and forced to sign a treaty, and a brief war followed. Zeppa tells his story as farce; he offers no praise.',
      'Gordon, briefing the new teachers':
        "Gordon explains the town's history and predicts how it will look to them after a year in the east. He comments on places, not on the people's looks.",
      'Zeppa, retelling the history lessons':
        "The history lessons cover Tibetan settlers, Buddhism and the unifying of the valleys, in Zeppa's own summarising voice. These words about the people come earlier, borrowed from an eighteenth-century writer.",
    },
    more: "The quotation lends her impression historical authority, but it is worth questioning: race and best built judge a people by their bodies, in the language of an imperial age, from an envoy on a trade mission. A strong answer notices both the admiration and the outsider's gaze.",
    tip: "Use it to evaluate Zeppa's perspective: she is admiring and honest, but she sees Bhutan from outside, and here she leans on another outsider. Say who is speaking, and when.",
  },
  'speaker: hoping to pick up some of their enthusiasm': {
    why: "After breakfast and a meeting with Gordon, Zeppa walks Thimphu's main road with Lorna and Sasha, two experienced travellers already delighted with Bhutan. She stays close to them, admitting that she does not yet share their delight.",
    not: {
      'On her first night, unable to sleep':
        'On the first night she is alone in her hotel room, exhausted but sleepless, watching mountains under the moon. Her companions appear only the next morning, at breakfast.',
      'At the orientation week with other teachers':
        "At the orientation week her interest is already caught by the history lessons, which she finds the most interesting part. By then she is learning eagerly, not borrowing anyone's enthusiasm.",
      'As a young man at a hotel gives directions':
        "The young man's courtesy sets off her search for a word to describe the people's qualities. That is admiration of the Bhutanese, not a wish to catch a companion's mood.",
    },
    more: 'Pick up makes enthusiasm sound catching, like an accent, something she hopes to absorb by staying close. The honesty matters structurally: a narrator who confesses doubt here is more believable when she declares her admiration at the end.',
    tip: "Use it to trace how Zeppa's attitude changes across the extract, from borrowed enthusiasm to her own confident verdict. Quote the start and the end to show the journey.",
  },
  'point: Beyond the Sky and the Earth: Which line can be read as Zeppa siding with the traditional town against the modern world?':
    {
      why: "Gordon has predicted that after a year in the east, little Thimphu will seem like New York. Zeppa's silent reply comes straight after her description of the great traditional fortress and the terraced fields, so it can be read as loyalty to the old town over the modern city.",
      not: {
        'can find no single word to hold all of my impressions':
          "This admits that language fails her when she tries to sum up the people's qualities. It is admiration for the Bhutanese, not a choice between old and new.",
        'his face rubbed with wet dough':
          "This is the last indignity suffered by the British envoy Ashley Eden in 1864, told as farce. It takes Bhutan's side against an empire, not against modern life.",
        'Bhutan is all and only mountains':
          'This opening hyperbole makes the mountains the whole of the country. It sets the scene of a remote land; it passes no judgement on modern influences.',
      },
      more: 'The tag I think keeps the reply private and tentative: she is forming her own view, not announcing it. Before this point she mostly observes; after it, her judgements come more openly.',
      tip: "Use it as the pivot of the extract's structure. Explain how its placing, straight after the fortress, invites the reader to see a choice between old and new.",
    },
  'word: I am full of admiration for this small country | Which word sets the country against the empires around it?':
    {
      why: "Small is the key word: set against the British empire to the south and the colonial powers competing to the north, Bhutan's survival becomes a story of the weak outlasting the strong. Zeppa ends on a judgement, not an event.",
      not: {
        full: "Full measures the strength of her feeling, the confident voice of the ending. It says how much she admires, not why the country's story is remarkable.",
        admiration:
          'Admiration names her feeling, the verdict she reaches by the end. It is her response; the contrast with the empires comes from the adjective.',
        country:
          'Country simply names Bhutan as a nation. The sense of a small power outlasting large ones comes from the word that describes it.',
      },
      more: "After the history lesson the extract returns to the present tense and to Zeppa's own voice. The exhausted, doubtful newcomer of the opening has become a confident admirer, though still an outsider in her first week.",
      tip: "Use the final sentence to show how far Zeppa's attitude has moved. Quote it beside an early admission of doubt, and comment on the single adjective that carries the argument.",
    },
  'word: startling against the Bhutanese-ness of everything else | Which word is coined to name a quality that English has no ready word for?':
    {
      why: 'Bhutanese-ness is a word Zeppa makes up, turning the adjective into a noun for a whole quality. Signs of the Western world look startling against it, because everything else in Thimphu is so completely Bhutanese.',
      not: {
        startling:
          'Startling describes the effect of the Western signs. It is an ordinary word, not one invented for the occasion.',
        against: 'Against sets up the contrast, but it is a common preposition, not a new word.',
        everything:
          'Everything widens the contrast to the whole town. It is ordinary English, not coined.',
      },
      more: 'Inventing a word suggests that the place cannot be described in borrowed terms: Bhutan needs its own vocabulary.',
      tip: 'When a writer coins a word, explain why existing words were not enough: it often shows how new an experience feels.',
    },
  'a sort of madwoman in the attack': {
    why: "In H is for Hawk, the second, larger goshawk, the one officially Macdonald's, comes out of her box like a Victorian melodrama. She is darker and much bigger, and instead of twittering she wails, a sound Macdonald finds unbearable.",
    more: "The phrase puns on the madwoman in the attic, Bertha Mason, kept locked away in Charlotte Brontë's Jane Eyre. The hedge a sort of shows Macdonald half mocking her own reaction, but the image of female madness and confinement may be one she fears in herself.",
    tip: 'Use it to show how Macdonald mixes comedy and literary allusion with real fear. Explain the pun, then link it to the self-portrait at the end of the extract.',
  },
  'speaker: as if someone had punched it, hard, from within': {
    why: "On the quayside the breeder kneels, loosens the first of the string hinges on the smaller box and peers inside. The bird's shoulders strike the box so hard that it shakes: the hawk inside has worked her hood off. She is heard before she is seen.",
    not: {
      'As the breeder pulls the hawk out into the sunlight':
        'When the hawk is pulled out, the writing floods with light and movement in the present tense. The punch comes earlier, while she is still hidden in the dark box.',
      'As the box holding the larger hawk is opened':
        'The larger hawk wails rather than thumps, a sound Macdonald finds unbearable. The blow from within belongs to the first box, opened earlier.',
      "As she tucks the hood over the first hawk's head":
        'By the hooding, the breeder holds the hawk calmly against his chest. Macdonald senses a thin skull and a brain alive with terror, but there is no violent blow.',
    },
    more: 'The simile gives the unseen hawk the force of a human fist, and the commas around hard make the reader feel the blow land. One reading is that the box works like Macdonald herself: calm on the outside, with something violent pushing to get out.',
    tip: 'Use it to show how Macdonald builds suspense: the hawk is a sound and a force before she is an image. Comment on the placing of hard between commas.',
  },
  'speaker: This was not my hawk.': {
    why: 'After hooding the first hawk, Macdonald and the breeder check the ring numbers against the form. It is the wrong bird: the younger, smaller one, meant for another falconer. A short, flat sentence of plain fact follows the excited paragraphs before it.',
    not: {
      "As she looks into the larger hawk's eyes":
        "Looking into the larger hawk's eyes, she hears a similar refrain in her head, in the present tense and in italics. This line is plain past-tense fact, read off the paperwork.",
      'As the first hawk bursts from her box':
        'When the first hawk bursts out, Macdonald is overwhelmed with wonder, and nobody has yet checked whose bird she is. The disappointment comes only after the paperwork.',
      'As she asks to swap the birds':
        'Her plea to swap comes later, after she has failed to recognise the second hawk as hers. By then the plain fact of this line has become a desperate feeling.',
    },
    more: 'The phrase my hawk then becomes the refrain of the second half. Here it is a fact on a form; later it is the voice in her head. The gap between what the paperwork says and what she feels drives everything that follows.',
    tip: 'Use it to show structure: a short paragraph of clipped sentences, then a one-word paragraph, mark the fall from wonder to disappointment. Track the refrain from fact to feeling.',
  },
  'point: H is for Hawk: Which line comes from Macdonald imagining how the breeder sees her?': {
    why: 'In the final paragraph Macdonald pictures herself from outside: a tall, pale, exhausted woman with wild hair, begging with outstretched arms by the sea, as if in an amateur seaside staging of a Greek tragedy. It is the only description of her looks in the extract.',
    not: {
      'All at once I loved this man, and fiercely.':
        "This is Macdonald's own sudden feeling for the breeder, after picturing how he fed the newly hatched chick by hand. She looks at him here, not at herself through his eyes.",
      'everything is brilliance and fury':
        'This is the moment the first hawk is pulled into the sunlight, told in the present tense. It is pure experience of the bird, with no observer left outside it.',
      'like a turkey in a butcher’s shop':
        'This is how the first hawk looks hanging upside down from her jesses, a deliberately ugly image. It describes the bird, not how Macdonald appears to anyone.',
    },
    more: "Medea is the heroine of Euripides' tragedy, whose grief and rage drive her to terrible revenge. Placing her in a seaside production makes the tragedy small and absurd: the bathos is self-mocking, but it names an overwhelming emotion the extract has avoided naming.",
    tip: 'Use it to discuss perspective and grief. The extract never mentions her father, but this self-portrait, seen from outside, lets you argue how the language hints at what the introduction tells us.',
  },
  'word: She is a conjuring trick. A reptile. A fallen angel. | Which word makes the hawk cold-blooded and ancient?':
    {
      why: 'A reptile is a cold-blooded creature from an ancient line, so the second metaphor contradicts the first, a magic trick, and is contradicted in turn by the third. No single image can hold the hawk, so Macdonald throws one after another.',
      not: {
        conjuring:
          'Conjuring makes the hawk an illusion, a trick of the eye that might not be real. It suggests magic and wonder, not something cold and ancient.',
        fallen:
          'Fallen suggests a being cast down from heaven, damned as well as beautiful. It is about a loss of grace, not about coldness or age.',
        angel:
          'Angel makes the hawk holy and beautiful, a heavenly being. Paired with fallen it becomes dangerous too, but it carries no sense of cold blood.',
      },
      more: 'The fragments show language failing under pressure: each metaphor cancels the last. The fallen angel is the richest image, beautiful and damned at once, hinting that Macdonald is drawn to something not wholly safe.',
      tip: 'When a writer piles up contradictory metaphors, analyse the contradiction itself: here it shows a mind overwhelmed. Name at least two images and explain how they clash.',
    },
  'throbbed at the back of my mind like a persistent toothache': {
    why: 'In Chinese Cinderella, Adeline is playing Monopoly with three friends at boarding school, and losing. Eight weeks from the end of term, which may be the end of her schooling altogether, the thought of leaving nags at her like this.',
    more: 'The simile turns an abstract worry into a physical, nagging pain: not a disaster, but impossible to ignore. For a girl whose family has sent her away, school may be the one safe place, so the cheerful game around her makes the private pain feel lonelier.',
    tip: "Use it to show how the opening establishes Adeline's anxiety before the summons home. Analyse the verb throbbed and the ordinary, persistent pain of the comparison.",
  },
  'speaker: How come you won?': {
    why: 'After showing Adeline the newspaper and telling her how his colleague C.Y. Tung spotted it in the lift, Father asks how she did it, then this. The anthology prints you in italics, so the stress falls on her: surprise, even doubt, that this daughter could have won.',
    not: {
      'C.Y. Tung, in the lift that morning':
        "C.Y. Tung's question, reported by Father, is whether the winner is related to him, since they share an uncommon surname. He asks about the family, not about how she won.",
      'Father, when she says she will be a writer':
        'When she says she will be a writer, Father scoffs and attacks her languages instead. By then the praise is over; this question comes while his good mood lasts.',
      'Father, as he hands her the newspaper':
        'As he hands her the newspaper, Father only tells her to look and hints that it concerns someone they both know. He asks how she won after she has read it.',
    },
    more: 'The question sounds like praise but carries surprise. Adeline answers with a joke about the complicated rules, and he laughs: her modest wit keeps his good mood alive just long enough for her to ask for what she really wants.',
    tip: "Use it to show how Yen Mah presents Father's approval as conditional. Comment on the italicised you, and on how her joke works as a tactic.",
  },
  'speaker: as in a nightmare, wondering who had died this time': {
    why: "Called away from a game of Monopoly because Father's chauffeur has come to take her home, Adeline runs downstairs filled with dread. A call home ought to be good news for a boarder, but she reads it as catastrophe.",
    not: {
      'As the car stops at a villa she does not know':
        "When the car stops at the villa she is bewildered, not afraid of a death: she does not even know it is her family's new home. The chauffeur has already said everyone is healthy.",
      "As she knocks timidly on Father's door":
        "At Father's door she knocks timidly, and when he smiles she suspects a trick. Her fear is now of him, not of a death in the family.",
      'As she reads her name in the newspaper':
        'Reading her name in the newspaper, she wonders whether she is dreaming. That good dream answers this nightmare thirty-five lines later, turning fear into wonder.',
    },
    more: 'The two words this time imply that calls from home have brought news of death before. Without stating anything about her past, Yen Mah makes the reader infer a childhood in which home means loss.',
    tip: 'Use it with the questions she asks when she reads the newspaper: a nightmare early, a dream later. Tracking the echo is a structural point that shows how the extract turns fear into joy.',
  },
  'speaker: Is it possible? Am I dreaming? Me, the winner?': {
    why: 'Adeline reads in the newspaper Father shows her that she has won an international play-writing competition. Three short questions break into the narration, taking the reader inside her disbelief at that moment.',
    not: {
      'as she runs down to the waiting chauffeur':
        'When the chauffeur comes she fears that someone has died. Joyful disbelief comes later, at the newspaper.',
      'as Father orders her to study medicine':
        'By then her joy has turned to disappointment. These questions come at the moment she learns she has won.',
      "as she knocks timidly on Father's door, fearing a trick":
        'At his door she is nervous and suspects a trick. She does not yet know about the prize.',
    },
    more: 'The switch to the present tense in her thoughts makes the moment vivid. Her surprise also shows how rarely she has been told she is good at anything.',
    tip: "Use the questions to analyse how Yen Mah shows the reader a character's feelings directly, through her inner voice.",
  },
  'speaker: You are going to starve!': {
    why: 'Father has agreed that she may go to England, and asks what she will study. When she says she will be a writer, he answers with this blunt forecast of poverty, turning her dream into a joke.',
    not: {
      'Father, as he hands her the newspaper':
        'As he hands her the newspaper, Father is pleased and proud. The scorn comes later, at her choice of career.',
      'Father, when she asks to study in England like her brothers':
        'He agrees to England. It is what she wants to study there that he mocks.',
      'Ah Gum, telling her that Father wants her':
        "Ah Gum only tells her where the family are and that Father wants her. The verdict on her ambition is Father's.",
    },
    more: 'He goes on to order her to study medicine. The scene shows his approval as conditional: pride in a prize, contempt for her own plans.',
    tip: "Use the line to show how quickly Father's mood turns, and how the extract ends with Adeline's future decided for her.",
  },
  "point: Chinese Cinderella: Which line suggests that Father's approval of Adeline has been rare until now?":
    {
      why: 'The two words For once imply that his pride is rare. The next sentence explains it: in front of his respected colleague C.Y. Tung she has given him face, so the pride may be as much about his own standing as about her talent.',
      not: {
        'I only had to stretch out my hand to reach the stars.':
          "This is Adeline's joy at the moment of his pride, hyperbole at the emotional peak. It shows how high she rises, not how rare his approval has been.",
        'summoned by Father to enter the Holy of Holies':
          'This makes Father god-like and his room a forbidden shrine, as she is called in to see him. It shows his distance and power, not his past pride.',
        'Bliss was it in that dawn to be alive.':
          "This is Wordsworth's line, recalled at the end once Father agrees that she may go to England. It expresses her happiness, not anything about his feelings.",
      },
      more: 'Mary uses the same two words about winning at Monopoly at the start, which links two rare victories. Because the reader has seen how changeable Father is, his pride also feels fragile.',
      tip: 'Use it to show how much meaning a short phrase can carry. Explain the implication of For once, then link his pride to face and his own standing, not only to love.',
    },
  'word: I did not wish to contradict him. | Which word presents her silence as her own choice?': {
    why: "To wish is to want, so the verb makes the silence something Adeline chooses rather than something Father's power forces on her. She is ready to study anything so long as she reaches England, so saying nothing may be strategy, not defeat.",
    not: {
      did: 'Did is only the auxiliary that forms the negative. It carries tense, not any sense of whose choice the silence is.',
      not: 'Not makes the statement negative, ruling out an answer. It tells us that she stays silent, not why.',
      contradict:
        'Contradict names what she avoids, arguing against Father. It is the action ruled out; the sense of choice comes from the verb before it.',
    },
    more: 'The girl who asked boldly a few lines earlier now says nothing, and the shape of the dialogue shows where the power lies. One reading is that she has learned never to answer back; another, better supported by what follows, is that she is being strategic.',
    tip: "Analyse a single verb to open up a character's motives. Here wish lets you argue that Adeline's silence is tactical, which links to her bargain at the end.",
  },
  'Some cheered him home, but not as crowds cheer Goal.': {
    why: "This opens the short sixth stanza, the soldier's homecoming. Some people cheered his return from the war, but fewer and more quietly than a crowd cheers a goal at a football match. The wounded volunteer matters less to the public than a game.",
    more: 'The capital G makes the goal grander than the man, and the comparison stings because football runs through his memories as his measure of glory. The welcome he imagined when he enlisted has shrunk to a thin, polite noise.',
    tip: 'Use it in a paragraph on how society treats the returning soldier: link the half-hearted cheering to the only person who thanks him, and to the institutions waiting in the final stanza.',
  },
  'Voices of boys rang saddening like a hymn,': {
    why: "This comes in the first stanza of Wilfred Owen's Disabled, as the wounded soldier sits in his wheelchair in a park at dusk. The voices of boys at play sound to him like a hymn, sad and solemn, because he can never join them again.",
    more: "A hymn suggests church and funerals, so even children's play sounds like mourning to him. The simile shows how his injuries have changed the way he hears the world.",
    tip: "Use the line to show how Owen creates sympathy through the soldier's isolation, and how sound imagery sets the poem's tone.",
  },
  'speaker: And leap of purple spurted from his thigh.': {
    why: 'Stanza 3 moves from an artist who admired his young face last year to the present: now he is old. The cause comes at the end of the stanza, the wound itself, as blood leaps from his thigh and drains away the colour of his youth.',
    not: {
      'as he remembers liking blood on his leg after matches':
        'That memory opens the very next stanza: after football, blood on his leg was a badge of effort. Owen sets the real wound and the game side by side.',
      'as he remembers his send-off with drums and cheers':
        'The send-off ends stanza 5, the story of his joining up. At that point no fear had come to him yet, and he had no wound.',
      "as he notices the women's eyes pass over him":
        "The women's eyes pass over him this evening, in the final stanza, long after the wound. That moment is about how others see him, not about how he was hurt.",
    },
    more: 'The stanza seems to borrow the language of athletics, with a lifetime lost in a hot race and blood that leaps. A wound becomes a sporting movement, so the vocabulary of glory collapses against real injury.',
    tip: 'Use the stanza to show how Owen compresses time: young last year, old now, with the moment of wounding at the hinge. Comment on how purple blood drains the colour of his youth.',
  },
  "speaker: Tonight he noticed how the women's eyes / Passed from him to the strong men that were whole.":
    {
      why: 'In the last stanza the poem comes back to the present evening, and the soldier notices that women look past him to the men whose bodies are whole. It is the bleakest moment: he has become invisible to them.',
      not: {
        'as he remembers the girls of the town before the war':
          'The girls of the town belong to his memories, when they glanced at him. Here, in the present, they look away.',
        'as he recalls his send-off with drums and cheers':
          'The send-off is part of the memory of enlisting. This line is set tonight, after his return.',
        'as he remembers the artist who wanted to paint him':
          'The artist belongs to the past, when his face was admired. This line shows how he is seen now.',
      },
      more: 'Whole is the cruel word: it defines him by what he has lost. The contrast with his remembered popularity makes his loneliness sharper.',
      tip: "Use the line to show the poem's structure, moving between past and present to contrast what war promised with what it gave.",
    },
  'point: Disabled: Which line shares the blame for his enlisting with the men who signed him up?':
    {
      why: 'The recruiters accepted a false age, and the poem implies they knew it: they were smiling as they wrote it down. Placing Smiling first makes their pleasure the first thing we see, and the semicolon lets the lie stand alone like an entry on a form.',
      not: {
        "It was after football, when he'd drunk a peg,":
          'This shows how careless his decision was: he joined after a match and a drink. It puts the weight on his own whim, not on the men who accepted him.',
        'Aye, that was it, to please the giddy jilts':
          "This is his own explanation, in his own voice: he joined to impress the girls. It is about his vanity, not the recruiters' part.",
        'Germans he scarcely thought of; all their guilt,':
          "The guilt here is the enemy's, the official case for the war, and it did not move him at all. The line shows how little the cause mattered to him.",
      },
      more: 'The grammar divides the blame carefully: he asked to join, but they wrote his lie. An estimated quarter of a million under-age boys volunteered for the British Army in the First World War, so the moment is typical rather than rare.',
      tip: 'Use this line to argue that Owen blames a system as well as a foolish boy: the cheerful, ordinary recruiters are complicit, which makes the poem a protest as well as a lament.',
    },
  'word: In the old times, before he threw away his knees. | Which word puts the blame for his injury on the soldier himself?':
    {
      why: "He did not lose his knees: he threw them away. The verb gives him the agency, as if he had discarded something cheap, which reveals bitterness about his own naivety in enlisting. It ends the stanza's lamplit memories of the town and its girls, just before the present returns.",
      not: {
        old: 'Old times sets the memory in a lost past, almost like a fairy tale, but it does not say who is to blame.',
        before:
          'Before marks the line between his two lives, then and now. It divides time; it does not judge him.',
        knees:
          'Knees names what he has lost, and the oddly specific body part makes the loss physical. It is the verb earlier in the line that blames him.',
      },
      more: 'Throw away is a casual idiom for getting rid of something worthless, so the line is bitter as well as sad. Later stanzas show that others played a part too, so the poem does not let the blame rest on him alone.',
      tip: "Close analysis of one verb can carry a whole paragraph: say whom the verb makes responsible, what the idiom suggests, and how that fits Owen's anger about the war.",
    },
  'word: And take whatever pity they may dole. | Which word makes pity sound like charity handed out in small portions?':
    {
      why: 'To dole something out is to hand it out sparingly, as charity or rations are given. In the final stanza his future is a few sick years in institutions, and even sympathy will be issued in portions by unnamed people who manage him.',
      not: {
        take: 'Take shows that he must accept what he is given, which stresses his helplessness. It says nothing about how the pity is handed out.',
        whatever:
          'Whatever shows resignation: he will have no say in how much he gets. It is the verb at the end that makes the pity sound rationed.',
        pity: 'Pity names what he will receive. It is the word at the end of the line that turns it into a ration rather than real feeling.',
      },
      more: "The preface to Owen's posthumous poems says that his subject is the pity of war, yet this line is scathing about pity handed out by institutions. The reader is asked for something closer to recognition.",
      tip: 'Notice who acts on him in this stanza: institutions, rules and unnamed people who hand out pity. Writing about that shows how Owen presents a life now arranged entirely by others.',
    },
  "word: He's lost his colour very far from here, | What does 'colour' suggest here?": {
    why: 'The next line shows the colour poured down shell-holes, so it is his blood, lost in France. With it goes the healthy colour of youth: once his face was young enough for an artist to want to paint it, and now he is pale and old.',
    not: {
      'the bright uniform he once wore with pride':
        'The poem does mention smart uniforms, but here the colour is poured out until the veins run dry. It is his blood, not his clothes.',
      'his skin, burned in the heat of battle':
        'Nothing suggests burns. The colour drains away; it is lost, not scorched.',
      'his cheerful mood, now turned to bitterness and despair':
        'Colour can describe mood, but the following line makes it physical: blood running out of his body.',
    },
    more: 'Very far from here reminds us that he lost it in a foreign war, for causes he barely understood. The understatement makes the loss more shocking.',
    tip: 'Explain how a single word can carry a double meaning, physical and symbolic, and how Owen uses it to show the cost of war.',
  },
  'Were not the one dead, turned to their affairs': {
    why: "This is the last line of Frost's poem. Once the boy's heartbeat has faded to nothing, the people around him simply go back to their business, for no better reason than that they are still alive. There is no funeral, no prayer and no word of grief.",
    more: "The plain words and level rhythm can be read as condemning the onlookers' coldness, or as recording the hard necessity of a working household that cannot stop for grief. The mountains described at the start are never mentioned again, as if nothing in the yard could touch them.",
    tip: "This ending is the poem's most debated line, so take a side: argue whether the survivors are callous or bound by necessity, and support your view with the word since and the flat tone.",
  },
  'speaker: Neither refused the meeting': {
    why: 'This comes at the moment of the accident. The saw springs towards the boy, or only appears to, and the speaker then suggests the boy himself gave the hand. The polite phrase concludes that neither boy nor saw held back, as if they had kept an appointment.',
    not: {
      'as his sister comes out to call them to supper':
        "The sister's call to supper comes just before, and it is the cue for the accident. The meeting is between the boy's hand and the saw, not between the boy and his sister.",
      'as the boy pleads with his sister to save his hand':
        "The boy's plea comes after he has seen that everything is spoiled, and it is in his own frightened words. This phrase belongs to the speaker's calm account of the accident.",
      'as the watchers listen for his failing heartbeat':
        'Listening at his heart comes near the end, after the ether. By then the meeting has long happened and the poem is counting down to his death.',
    },
    more: "The understatement is chilling: a terrible injury described like an appointment kept. Meeting gives the machine and the boy equal will, so the blame is shared rather than placed, and the speaker's calm breaks only with the exclamation about the hand that follows.",
    tip: "Use the line to show how Frost refuses to settle blame: track the speaker's corrections, from the saw leaping, to the boy giving his hand, to this, and say what the uncertainty makes the reader feel.",
  },
  "word: snarled and rattled | What does 'snarled' suggest here?": {
    why: 'Snarled is the sound of an animal baring its teeth, so from the first line the machine has a dangerous voice. The harsh consonants make the yard noisy and threatening, and the warning sits inside an otherwise calm scene of sunset and mountains.',
    not: {
      'the saw is tangled and stuck in the wood':
        'Snarl can mean tangle, as with a knotted rope, but here the saw is running freely, cutting firewood to length. The word describes a noise, not a jam.',
      'the boy is angry at being kept at work':
        'The boy has not yet appeared; the verb belongs to the saw. His feelings come later, in a laugh and a plea, not in a snarl.',
      'the wood is knotted and hard to cut':
        'The wood is pleasant here, sweet-smelling sawdust drifting in the breeze. The threatening word is given to the machine, not to what it cuts.',
    },
    more: 'Repeated twice more a few lines later, the phrase becomes a rhythm running under the scenery, as if the danger is always there, waiting. It prepares the personification that follows, when the saw seems to have an appetite of its own.',
    tip: "When you analyse onomatopoeia, say what the sound suggests as well as what it imitates: here an animal's warning, which turns a working machine into something like a predator.",
  },
  'studded with neon': {
    why: "This is the second line of Alvi's poem, describing the evening bazaar where a girl the speaker does not know decorates her hand with henna. Studded is a word from jewellery, so the electric signs are set into the market like gems in a ring.",
    more: 'The image is dazzling and modern: this bazaar is lit by neon signs, not lamps or candles, so from the start Alvi refuses a timeless, picture-book India. The neon returns in the final line, where the bazaar has become a memory the speaker yearns for.',
    tip: 'Use the opening and closing neon to write about structure: the same bright market frames the poem, but by the end it is seen from far away, with yearning rather than wonder.',
  },
  'speaker: fade in a week': {
    why: 'Near the end the noisy streets fall silent, and the speaker looks ahead to the night, when she will scrape off the dried paste and reveal the orange stain beneath. Then comes this flat admission: the pattern, and the moment, will not last.',
    not: {
      'as the girl begins to pipe the henna onto her hand':
        'At the start the henna is still being applied, and the present tense keeps the action in progress. The speaker is absorbed in the moment, not yet thinking of its end.',
      'as dummies in the shop windows seem to watch her':
        'The shop dummies belong to the middle of the poem, when the street seems to rise around her. That is a moment of wonder, before any thought of loss.',
      'as she pictures herself far away, reaching across a country':
        'The final lines move to a future far from India, where she reaches for the girl and the bazaar. By then the fading has happened; this line predicts it.',
    },
    more: 'Henna does fade within weeks, so the line is accurate, but it applies to more than the stain: to the visit, to the girl, and perhaps to the sense of belonging the pattern gave her. The future tense has replaced the present of the refrain.',
    tip: "Use the line as the poem's turning point: show how the tense shifts from present to future, and argue what the fading stain suggests about the speaker's connection to her heritage.",
  },
  'word: I have new brown veins | Which word suggests this belonging has only just been acquired, and could be lost?':
    {
      why: 'New tells us that this belonging has only just arrived. It was not inherited from birth but given in the bazaar moments ago, and what is new is not yet secure. The confident sentence is the point at which she is most carried away.',
      not: {
        have: 'Have claims possession: the veins are hers. It makes the sentence sound certain, but it says nothing about how recent the change is.',
        brown:
          'Brown is the colour of the paste, and it may suggest skin and heritage. It describes what she now has, not how long she has had it.',
        veins:
          'Veins turn the henna lines into part of her bloodstream, as if her heritage now runs inside her. Another word in the sentence tells us this is recent.',
      },
      more: 'The short sentence is the climax of the first part of the poem, as the pattern seems to enter her blood. Its certainty is worth questioning, since henna decorates the skin; it does not change the body.',
      tip: "Pick out a single adjective like this to show close reading, then link it to the poem's central question: can a visitor gain a heritage in an afternoon, or only glimpse it?",
    },
  'AID flour sacks refilled with sand': {
    why: "This is the last line of Harrison's poem. After a coffee by candlelight, a boy holds a girl's hand in the besieged city, sheltering behind sacks that once brought flour as aid and are now filled with sand against the shells.",
    more: 'The line compresses the whole siege: food sent to keep the city alive now protects it from bombardment, and the capitals probably copy the lettering stamped on the sacks. The final rhyme joins the held hand to the sand, so love ends sheltered but not safe.',
    tip: "Endings carry weight in an exam answer: say how this image fuses tenderness and war, and link it back to the bread queues of the opening to show how the poem's structure comes full circle.",
  },
  'speaker: that’s just not the case': {
    why: "Stanza 1 lists a day of queues for gas and bread, snipers and water carried up long flights of stairs, so you would expect the city's streets to be empty at night. Then, at the end of the stanza, this plain, conversational phrase dismisses that expectation: tonight the young are out walking.",
    not: {
      'as the boy leads the girl to a café before the curfew':
        'The café comes at the very end, when the boy leads the girl away to share a coffee by candlelight. By then the evening walk has long been under way.',
      'as the speaker recalls the mortar attack on the bread queue':
        'The mortar attack is recalled in stanza 4, where the couple stand on its shell scars. The speaker does not brush that horror aside; he states it plainly.',
      'as the boy sees stars reflected in the shell-holes':
        'The broken stars in the rain-filled shell-holes come late in stanza 4. The turn from day to night has happened long before.',
    },
    more: "After ten lines of one long sentence of hardship, the turning point arrives in the plainest words, almost a shrug. The flat tone makes the young people's defiance sound natural rather than heroic, and the dash throws the reader forward into the evening.",
    tip: "Use the line to discuss structure: one long sentence of daytime struggle, then a sudden turn. The contrast sets up the poem's argument that ordinary life and love persist inside war.",
  },
  "word: tender radar | What does 'radar' suggest here?": {
    why: "Radar is military technology, used to detect aircraft and guide weapons, so in a city under bombardment it belongs to the language of war. Softened by tender, it becomes the signal in the girl's tone of voice that tells the boy she approves of him.",
    not: {
      "the city's air defences are scanning the night sky":
        'Read literally, radar would mean military equipment, but here it belongs to the tone of a voice in the dark. Harrison borrows a word of war for courtship.',
      'the snipers are tracking the young walkers through the dark':
        'The snipers belong to the daytime list of dangers in stanza 1. This radar seeks a partner, not a target.',
      'the girl stays watchful for danger as they walk':
        'The girl is not scanning for danger: her voice is sending a signal, not looking for one. The couples here move through the dark by attraction, not fear.',
    },
    more: "War has entered even the vocabulary of love, but here it is turned to a gentle use. The unexpected pairing captures the poem's whole argument: in the besieged city, romance has to speak the language of the siege.",
    tip: "When you find an unexpected pairing like this, explain each word's associations separately, then what happens when they meet. That method turns a two-word quotation into a full paragraph.",
  },
  'the dream and the hope of the slave': {
    why: "Near the end of Angelou's poem the speaker brings the gifts her ancestors gave and declares that she is what the enslaved could only dream of and hope for. Her rising is collective as well as personal: she is the answer to their longing.",
    more: "It is one of the few lines in which she says what she is rather than what she does. For readers in 1978, the word dream may also recall Martin Luther King's famous speech, an echo that fits the poem's move from past suffering to future promise.",
    tip: "Use this line to show how the poem widens from one woman's defiance to a people's history: link it to the slavery recalled in the stanza before and to the repeated rising that follows.",
  },
  'speaker: oil wells': {
    why: 'In stanza 2 she asks whether her confidence upsets her opponent, then explains it with a comic simile: she walks as though oil were being pumped up in her own living room. The hyperbole is knowingly over the top, which is part of the provocation.',
    not: {
      'as she answers the wish to see her broken with a laugh':
        'In stanza 5 she does answer with a laugh, but that simile is of gold being mined behind her house. Oil comes earlier, in the first of three similes of hidden wealth.',
      'as she allows that words and looks may wound her':
        'Stanza 6 imagines attacks made with words, looks and hatred. Its answer is a simile of rising air, not of wealth.',
      'as she places herself in the history of slavery':
        'From stanza 8 she rises out of a painful past and names her ancestors. By then the playful similes of riches are over and the tone is solemn.',
    },
    more: 'The three similes of wealth place the riches in her own space, first her home, then her garden, finally her body, so her worth is presented as natural and hers, not something granted by anyone else.',
    tip: 'Trace the three wealth similes across the poem as a pattern: it lets you write about structure and show how her confidence grows more daring each time.',
  },
  'word: You may write me down in history | Which word sounds like permission from someone who does not fear the result?':
    {
      why: 'May is a modal verb of permission. It sounds like a concession, but it reads as a grant from someone sure that nothing written about her can keep her down. She allows her opponent to do their worst before she has even said what she will do.',
      not: {
        write:
          "Write shows that the opponent's first weapon is a pen, not a whip. It names the attack, not her attitude to it.",
        down: 'Write down means to record, and it can also suggest belittling someone in writing. It is part of the attack, not her fearlessness.',
        history:
          'History is the record being fought over, and the next line reveals it is full of lies. It names what is at stake, not how she feels.',
      },
      more: "The first battle in the poem is over who tells the story. By answering a written history with a poem, Angelou makes her own counter-record, and the speaker's calm permission shows she expects to win.",
      tip: "Start an answer with the opening line's direct address and modal verb: together they set up the confident, defiant voice that the rest of the poem builds on.",
    },
  'spools of suffering': {
    why: "This phrase from the first stanza of Carol Ann Duffy's War Photographer names the rolls of film the photographer develops in his darkroom. Each spool holds pictures of real people's pain, so the objects themselves become suffering.",
    more: "The soft sibilance suits the hushed darkroom, as if the photographer works in reverent silence. The metaphor sets up the poem's question of what happens to those images once they leave his hands.",
    tip: 'Use the phrase to open an answer on how the poem presents suffering and the way the media handle it.',
  },
  'speaker: half-formed ghost': {
    why: "In the third stanza a photograph develops in the tray, and a stranger's features appear only partly at first. The half-formed image becomes a ghost, because the man in it is dead, and the photographer remembers the scene.",
    not: {
      'as he lays out the rolls of film in the darkroom':
        'That is the opening stanza, before any picture develops. The ghost appears later, as one print slowly forms.',
      'as he prepares to fly back to his work abroad':
        'The flight comes in the last stanza, looking down on the place where he works. The ghost belongs to the darkroom.',
      'as the readers at home glance at his pictures':
        'The readers appear in the final stanza, moved only briefly by the pictures in a Sunday supplement. The ghost is something only the photographer sees develop.',
    },
    more: 'Half-formed describes the image still developing, but it also suggests a life cut short before it was complete. The photographer is haunted by what his camera recorded.',
    tip: "Use the phrase to show the photographer's personal involvement, and contrast it with the readers' brief reaction later in the poem.",
  },
  "word: stares impassively | What does 'impassively' suggest here?": {
    why: 'Impassively means without showing emotion. The poem has shown that he does care: his hands seem to tremble and the dead return to him in the tray. His blank stare is the mask of a professional who must go back to work.',
    not: {
      'he cannot see the land below for cloud':
        'He looks straight at the place where he earns his living. Impassively describes his expression, not what he can or cannot see.',
      'he is bored on the long flight out':
        'Boredom is not the point. The word hides feelings the poem has already shown him having.',
      'he is quietly angry with the readers back at home':
        "The final judgement on the readers is the poem's, and he shows no anger. Impassively means his face shows nothing at all.",
    },
    more: 'The word is easy to misread as not caring. Set against his trembling hands, it suggests a man who has learned to switch his feelings off in order to do his job.',
    tip: "Contrast the photographer's controlled face with the readers' brief tears: the poem asks which of them really cares.",
  },
  'Or walk with Kings--nor lose the common touch,': {
    why: "In the last stanza of If-, the speaker, a father advising his son, asks him to mix with the powerful without losing touch with ordinary people. It is one link in a long chain of conditions that builds to the poem's final promise.",
    more: "Balance is the poem's method: every quality is paired with its limit, so confidence must not become arrogance, and company with kings must not become snobbery. The break in the middle of the line holds the two halves apart like weights on a scale.",
    tip: "Use this line on the poem's ideal of balance and self-control, and on its Victorian picture of manliness: steady, modest and at home in any company.",
  },
  'speaker: And never breathe a word about your loss;': {
    why: 'In the third stanza the father imagines his son risking all his winnings on one turn of pitch-and-toss, losing, and starting again from the beginning. The line asks him to bear that loss in silence, without complaint or self-pity.',
    not: {
      'as the father pictures his son keeping calm while others blame him':
        'That is the opening, where the son keeps his head while those around him lose theirs. The silence about a loss belongs to the gambling passage later.',
      'as the father names Triumph and Disaster as impostors':
        'Treating success and failure alike is close in spirit, but that comes in the second stanza. This line follows the image of a gambler who loses everything.',
      'as the father imagines his son talking with crowds and Kings':
        'That is the last stanza, about keeping his virtue in any company. The silent loss comes earlier, in the stanza about starting again.',
    },
    more: 'Stoicism, bearing hardship without showing it, runs through the poem. Here it is tested by money and chance: the son must accept a total loss as calmly as he would accept a win.',
    tip: 'When you write about structure, show how each stanza tests the son in a new area: other people, his own mind, fortune and the body, then company and time.',
  },
  'point: If-: Which line warns against being ruled by your own ideals?': {
    why: 'The father wants his son to have dreams but not to serve them. Making dreams your master would let ambitions or fantasies rule your life; the line asks for imagination kept under the control of judgement.',
    not: {
      'If you can keep your head when all about you / Are losing theirs and blaming it on you;':
        'This asks for calm when other people panic and blame you. It is about keeping your head, not about controlling your own ideals.',
      'If you can trust yourself when all men doubt you, / But make allowance for their doubting too;':
        "This is self-belief balanced by fairness to doubters. It concerns other people's opinions of you, not dreams that might take you over.",
      'And yet don’t look too good, nor talk too wise;':
        'This warns against seeming too virtuous or too clever, a lesson in modesty. It is about how you appear to others, not about being ruled by ideals.',
    },
    more: 'The next line makes the same point about thinking: think, but do not make thought your aim. Kipling values action and judgement over pure imagination, a very Victorian ideal of the practical man.',
    tip: 'This line works well when you compare If- with poems about ambition: the son may dream, but he must stay the master.',
  },
  'word: If you can meet with Triumph and Disaster / And treat those two impostors just the same; | Which word accuses success and failure of pretending to be more than they are?':
    {
      why: 'An impostor pretends to be someone they are not. Calling Triumph and Disaster impostors means that neither success nor failure is as important as it seems, so a wise man gives neither of them power over him.',
      not: {
        Triumph:
          'Triumph names success itself, personified with a capital letter. It is one of the two things accused, not the word that accuses them.',
        Disaster:
          'Disaster names failure, the other personified force. The charge of false pretences is made by the noun that describes both of them.',
        treat:
          'Treat tells the son how to respond, with the same calm to both. It gives the advice, but the accusation of pretending lies in another word.',
      },
      more: "The capital letters turn success and failure into visitors who arrive and must be met. The two lines are inscribed above the players' entrance to the Centre Court at Wimbledon, a sign of how widely their idea of composure is admired.",
      tip: 'Pick out the personification to show how Kipling makes an abstract lesson vivid, then explain the stoic attitude it recommends.',
    },
  "word: If you can fill the unforgiving minute / With sixty seconds’ worth of distance run, | What does 'unforgiving' suggest here?":
    {
      why: 'A minute cannot be lived again, so it does not forgive waste. The father asks his son to fill every one of its sixty seconds with effort, as a runner covers ground, because a minute lost is lost for good.',
      not: {
        'that time punishes people who have done wrong':
          'Unforgiving here is not about sin or punishment. Time does not judge wrongdoing; it simply never returns a moment that has not been used.',
        'that a race is cruel to those who run slowly':
          'Distance run is a metaphor for making use of time, not a real race. The minute is unforgiving because it passes once, not because it is cruel to the slow.',
        'that waiting makes each minute feel longer':
          'The line is about using a minute fully, not about how long it feels. Earlier the poem asks for patience; here it asks for effort.',
      },
      more: "The image turns time into a stretch of track to be covered. It belongs to the poem's ideal of disciplined energy: patience in one stanza, urgent effort in the last.",
      tip: "Use the line on the poem's view of self-discipline, and explain how the personified minute makes time feel strict and unforgiving of waste.",
    },
  'club-footed ghoul': {
    why: "In the first stanza of Louis MacNeice's Prayer Before Birth, the unborn child begs to be protected from nightmare creatures: a bat that drinks blood, a rat, a stoat and a club-footed ghoul, a demon of folklore said to feed on corpses.",
    more: "The poem was written during the Second World War. The child's first fears are the monsters of a frightened imagination; later stanzas fear something worse, the cruelty of human beings.",
    tip: 'Use the first stanza to show how the poem moves from childish fears to adult horrors, a structure that makes the human threats more shocking.',
  },
  'speaker: a cog in a machine': {
    why: "In the seventh stanza the child fears being forced by others to become a machine that kills, nothing more than a cog in a machine. The fear is of losing all individuality and being used, like a part, for other people's purposes, perhaps as a soldier.",
    not: {
      'as the child asks for water, grass and trees':
        'That is the third stanza, the only one that asks for good things. This fear belongs to the seventh, near the end.',
      'as the child asks forgiveness for sins it will commit':
        'Forgiveness in advance comes in the fourth stanza. The fear of becoming a part in a machine comes later.',
      'as the child fears the monsters of a nightmare':
        'The nightmare creatures fill the first stanza. By the seventh the threat is human and political.',
    },
    more: 'The stanza can be read against the armies and dictatorships of the war years: a person reduced to a small, replaceable part of a system.',
    tip: "Use the metaphor when you write about identity and the loss of free will, and link it to the poem's wartime context.",
  },
  "word: wise lies | What does 'wise' suggest here?": {
    why: 'Wisdom is usually linked with truth, so wise lies is an oxymoron. These are lies told cleverly, perhaps by people who seem wise, and that makes them more dangerous, because they are easier to believe.',
    not: {
      "the lies are harmless, told to spare someone's feelings":
        'The second stanza lists threats the child fears. These lies are among the dangers, not kindly white lies.',
      'the lies are spoken by foolish people':
        'Foolish liars would be easy to spot. Wise suggests the opposite: skilful, convincing deceivers.',
      'the lies will make the child wise in time':
        'Nothing suggests the lies teach anything good. The child fears being lured and deceived by them.',
    },
    more: 'The oxymoron captures propaganda, a central fear of the war years: lies made to sound like wisdom, told by people in authority.',
    tip: "Name the oxymoron and explain the tension between its two words, then link it to the poem's fear of a world that manipulates the young.",
  },
  'Softly, in the dusk, a woman is singing to me;': {
    why: "These are the first words of D. H. Lawrence's Piano. A woman's song in the evening carries the speaker back to his childhood, sitting under the piano at his mother's feet while she played and sang.",
    more: 'The soft sibilance and gentle rhythm of the opening match the quiet song. The calm will not last: by the end the music has overwhelmed the adult and he weeps.',
    tip: "Use the opening to show how the poem begins in the present before memory takes over, and track how the speaker's control slips across the three stanzas.",
  },
  'speaker: Betrays me back, till the heart of me weeps to belong': {
    why: 'In the second stanza the song draws the speaker, against his will, back to the Sunday evenings of his childhood, with winter outside and hymns in the cosy parlour. His heart longs to belong to that lost time again.',
    not: {
      'as he first sees, in memory, a child under the piano':
        "The child under the piano appears in the first stanza, the memory's opening picture. This line comes next, as the memory takes hold of his feelings.",
      'as the singer bursts into loud, passionate music':
        'The loud singing comes in the last stanza, when it is too late to matter. Here the song is still quietly pulling him back.',
      'as he gives way and weeps like a child for the past':
        'The weeping closes the poem. Here his heart only longs to belong; the full surrender comes in the final line.',
    },
    more: 'Betrays is a striking verb: the speaker feels the song has tricked him into a nostalgia he did not choose. The poem is torn between resisting sentimental memory and giving in to it.',
    tip: "Trace the verbs of the speaker's resistance and defeat across the stanzas to show how the structure mirrors the loss of adult control.",
  },
  "point: Piano: Which line shows the speaker's adult self being swept away by memory?": {
    why: "In the final stanza the speaker's manhood, his adult self, is thrown down and drowned in a flood of memory. The flood shows how complete the defeat is: he can no longer hold out, and he weeps like a child.",
    not: {
      'And pressing the small, poised feet of a mother who smiles as she sings.':
        'This is the memory itself, a tender picture of the child and his mother. It shows what he remembers, not his adult self being overwhelmed by it.',
      'To the old Sunday evenings at home, with winter outside':
        'This sets the scene of the remembered Sundays, warm inside and cold outside. It describes the past he longs for, not the moment his adulthood gives way.',
      'With the great black piano appassionato.':
        "This is the present-day singer's loud performance, which the speaker says is now in vain. It describes the music, not memory sweeping him away.",
    },
    more: 'Cast down suggests defeat in a fight, and a flood is a force nobody could resist. The adult who began by resisting the song ends with no defences at all.',
    tip: "Quote this line when you write about the ending: the speaker's control finally breaks, and the poem closes on the child's tears, not the man's.",
  },
  "word: In spite of myself, the insidious mastery of song | What does 'insidious' suggest here?": {
    why: "Something insidious harms you gradually and unnoticed. The song steals into the speaker's feelings before he can resist, so its mastery over him is quiet, creeping and unwanted, as the phrase in spite of myself confirms.",
    not: {
      'that the song is loud and forceful, impossible to ignore':
        'The loud, forceful music comes later, in the last stanza. Insidious means the opposite of loud: a power that creeps up on you.',
      'that the song is skilfully performed by a trained singer':
        "Mastery might suggest skill, but the mastery here is the song's power over the speaker. Insidious describes how that power works, not how well she sings.",
      'that the song is sad and makes him think of death':
        'Nothing in the line is about death. The song makes him think of his childhood, and insidious describes the sly way it does so.',
    },
    more: 'Lawrence is suspicious of nostalgia: he knows sentimental music can manipulate feeling. The poem both resists that power and gives in to it, which is why its ending is so moving.',
    tip: "Explore 'insidious' beside the other verbs of being tricked and overpowered to show the speaker's mixed feelings about his memories: he loves them, yet resents their hold.",
  },
  "word: So now it is vain for the singer to burst into clamour | What does 'vain' suggest here?": {
    why: "Here vain means in vain, useless. The singer's loud, passionate performance cannot hold the speaker's attention now, because the memory of his mother's quiet hymns has already taken him over.",
    not: {
      'that the singer is proud and wants to be admired':
        "Vain can mean conceited, but here it means in vain, without effect. The line is about the music failing to reach him, not about the singer's pride.",
      "that the singer's voice is weak and thin":
        'Her singing is the opposite of weak: she bursts into clamour, loud and forceful. It is in vain because he is lost in memory, not because she sings badly.',
      'that the singer is rude to break in on his private thoughts':
        'The speaker does not blame her. Vain says only that her effort is wasted, since his mind is already back in the parlour.',
    },
    more: 'The clamour of the concert piano is set against the tinkling parlour piano of the past. Loudness loses to tenderness, which tells us what the speaker values.',
    tip: "Words that shift meaning with context are worth naming in an exam: explain the two senses of 'vain' and why only one fits this line.",
  },
  'The darkening garden watches': {
    why: "This comes near the end of Vernon Scannell's Hide and Seek. The child finally leaves his hiding place, sure he has won, to find the game over and nobody there; only the darkening garden watches him.",
    more: "The personified garden gives the boy an audience, but a silent and indifferent one. The fading light suggests time passing and the end of a child's simple certainties.",
    tip: "Use the line to show the poem's shift from excitement to isolation, and how the setting reflects the boy's feelings.",
  },
  "word: Hide in your blindness | What does 'blindness' suggest here?": {
    why: 'In the dark of the shed the child cannot see, and the command makes that blindness his hiding place. It also points to what he misses: he is so busy not being found that he cannot see the seekers giving up and going away.',
    not: {
      'he has hurt his eyes in the dark of the shed':
        'Nothing suggests an injury. The blindness is the dark of the shed, and his ignorance of what is happening outside.',
      'he is too frightened of the seekers to open his eyes':
        'He is excited, not terrified, and his eyes are open in the dark. The point is that he can see nothing, and knows nothing.',
      'he refuses to look at the other children':
        'He cannot see them at all; they are outside. The blindness is forced on him by hiding, not chosen as a snub.',
    },
    more: 'The poem speaks to the child as you, so the voice giving orders may be his own excited thoughts. The clipped commands make the game feel urgent and secret.',
    tip: "Explain both meanings of 'blindness', literal and figurative, to show how the ending is hinted at in the middle of the poem.",
  },
  'clockless land for ever': {
    why: "This phrase from U. A. Fanthorpe's Half-past Two describes where the boy escapes to while he waits, forgotten, in detention: a timeless world outside the clock, where he could stay for ever.",
    more: "Clockless is an unusual word, typical of the poem's childlike compounds. The punishment backfires: kept in to learn a lesson, the boy discovers a place beyond time.",
    tip: 'Use the phrase to show how the poem presents childhood as a different way of experiencing time.',
  },
  "word: Timeformykisstime | What does running the words together in 'Timeformykisstime' suggest?":
    {
      why: 'The boy cannot read a clock, so he knows times by what happens in them, run together as one word: the time for his goodnight kiss. The compound shows a child measuring the day by events and feelings, not hours.',
      not: {
        'the boy is speaking too fast because he is upset':
          'The compounds are how the boy always thinks about time, not a sign of panic. They list the familiar moments of his day.',
        "the teacher's instructions are rushed and very hard to follow":
          "These are the boy's own names for times, not the teacher's words. The teacher's world is clock time, which he does not know.",
        'the boy is making up words to tease his teacher':
          'He is not being cheeky; the words are sincere. Run together, they show how a young child understands the day.',
      },
      more: "Fanthorpe builds the poem on these homemade compounds. They make adult clock time seem strange and cold beside a child's warm, lived time.",
      tip: "Comment on the invented compound words as a technique, and explain what they show about the child's point of view.",
    },
  'I gave commands; / Then all smiles stopped together.': {
    why: "The Duke says this to the envoy near the end of My Last Duchess. His wife's smiles, which he resented, stopped because he gave commands: a chillingly brief hint that he had her killed or shut away.",
    more: 'The two short clauses are cold and businesslike. Browning never says what the commands were, so the reader must fill the silence, and the Duke goes straight on to talk about the portrait as if nothing had happened.',
    tip: 'Use the line for power and control: the Duke silences his wife as completely as the curtain he draws over her portrait. Comment on how much the brief sentence leaves unsaid.',
  },
  'speaker: Notice Neptune, though, / Taming a sea-horse, thought a rarity,': {
    why: 'As he leads the envoy down to meet the company, the Duke points out a bronze of Neptune taming a sea-horse. He has just discussed his next marriage, and he moves straight on to another prized object in his collection.',
    not: {
      'The Duke, drawing back the curtain from the portrait':
        "At the start the Duke shows the envoy his late wife's portrait. Neptune is the last thing he mentions, on the way downstairs.",
      'The envoy, admiring a bronze statue on the stairs':
        "The envoy never speaks: this is a dramatic monologue, and every word is the Duke's. He is the one directing his guest's attention.",
      "Fra Pandolf, painting the Duchess's portrait":
        "The Duke reports some of the painter's compliments to his wife, but Fra Pandolf says nothing about Neptune. The statue is the Duke's final boast.",
    },
    more: "The statue is a symbol of the Duke's mastery: a god taming a wild creature, as he tamed his wife. Ending on it suggests that the next Duchess will be one more possession.",
    tip: 'Use the ending to argue that the Duke sees people and art alike as things to own and control. The calm change of subject is part of what makes him frightening.',
  },
  'point: My Last Duchess: Which line shows the Duke refusing even to tell his wife what displeased him?':
    {
      why: 'The Duke says that even if he had the skill to explain what annoyed him, explaining would be stooping, and he chooses never to stoop. His pride will not let him talk to his wife, so he gives commands instead.',
      not: {
        'She had / A heart--how shall I say?--too soon made glad,':
          'Here the Duke tells the envoy what was wrong with her: she was pleased too easily. It is his complaint, not his refusal to tell her.',
        "as if she ranked / My gift of a nine-hundred-years-old name / With anybody's gift.":
          "This shows what offended him: she valued his ancient name no more than anyone's gift. It names his grievance, not his refusal to discuss it.",
        "That's my last Duchess painted on the wall, / Looking as if she were alive.":
          'These are the opening words, as he shows off the portrait. They introduce her; they say nothing about whether he spoke to her.',
      },
      more: "Stoop is the poem's key verb for the Duke's pride: to talk things through with his wife would lower him. Instead of words there are commands, and then silence.",
      tip: "Link 'stoop' to his pride in his ancient name to show how status shapes everything he does, even his marriage.",
    },
  "word: That's my last Duchess painted on the wall, | What does 'last' suggest here?": {
    why: "Last means latest, not final. The Duke speaks of her as one in a series, and the end of the poem confirms it: he is arranging his next marriage with the envoy, whose master's daughter is to be the new Duchess.",
    not: {
      'that she was the last person Fra Pandolf ever painted':
        "Nothing suggests this was the painter's final work. Last describes her place among the Duke's wives, not in Fra Pandolf's career.",
      'that she lived longer than the rest of his family':
        'The poem says nothing of her outliving anyone; she is dead. Last places her in a line of Duchesses, with another about to follow.',
      'that she is the final portrait he will hang in his gallery':
        "The Duke's collection is not finished, and nor are his marriages. Last means most recent, as the talk of a new bride shows.",
    },
    more: 'One word in the first line tells us a great deal: the Duke collects wives as he collects art, and this one has already been replaced in his mind.',
    tip: "Start an answer on the Duke's character with this word. It shows his possessiveness and coldness before he has said anything else.",
  },
  "word: Sir, 'twas not / Her husband's presence only, called that spot / Of joy into the Duchess' cheek; | What does 'only' suggest here?":
    {
      why: "The Duke admits that his presence was not the only thing that brought a blush of joy to her cheek. The word only reveals his jealousy: he resents that other people, even a painter's compliments, could please her too.",
      not: {
        'that he was rarely at home to keep his wife company':
          'The line is not about his absence. Only compares him with other people who made her happy, which is what he resents.',
        'that she seldom smiled at anyone at all':
          'His complaint is the reverse: she smiled at everyone. Only shows that he was one of many who pleased her.',
        'that he alone could make her happy':
          'This is what he wanted to be true, and the word only shows it was not. Others could call up that spot of joy.',
      },
      more: 'The phrase spot of joy returns several times, as if the Duke cannot stop thinking about it. His obsession with her blush tells us more about him than about her.',
      tip: "Use 'only' with his complaint that she liked whatever she looked on, to show jealousy driving the whole monologue.",
    },
  'It is the star to every wandering bark,': {
    why: "In Sonnet 116 Shakespeare compares true love to the star that guides every lost ship. A sailor cannot know a star's true worth, but he can steer by it, as lovers can steer by a love that never changes.",
    more: 'The image follows the sea-mark of line 5, which storms cannot shake. Love is defined by what it does: it stays fixed while everything else moves.',
    tip: 'Use the star image when you write about love as constancy, and compare it with poems where love changes or fades.',
  },
  'speaker: If this be error and upon me prov’d,': {
    why: 'The sonnet ends with a couplet that dares anyone to prove him wrong: if what he has said about love is mistaken, then he never wrote and no man ever loved. Since both are plainly untrue, his argument must stand.',
    not: {
      'in the opening, as he refuses to admit impediments':
        'The sonnet opens with the marriage of true minds, echoing the marriage service. This line closes the argument rather than starting it.',
      'as he pictures love as a mark that storms cannot shake':
        'The fixed sea-mark comes in the second quatrain, one of the images of constancy. This line comes after all the images, as the final challenge.',
      'as he describes the curved sickle of Time':
        "Time's sickle belongs to the third quatrain. The couplet follows it, summing up the whole poem.",
    },
    more: "The final couplet of a Shakespearean sonnet often clinches the argument. Here it is a legal challenge, with error and prov'd sounding like a case in court.",
    tip: "Explain how the confident challenge rounds off the sonnet's definition of love, then question whether such certainty is convincing.",
  },
  'point: Sonnet 116: Which line insists that true love outlasts the fading of youthful beauty?': {
    why: "Rosy lips and cheeks, the beauty of youth, fall within the reach of Time's curved blade and are cut down. But love is not Time's fool: it does not depend on beauty, so it does not fade when beauty does.",
    not: {
      'Let me not to the marriage of true minds / Admit impediments.':
        'This opening refuses to accept any obstacle to true love. It is about barriers to a union, not about love surviving the loss of beauty.',
      'O, no! it is an ever-fixed mark, / That looks on tempests and is never shaken;':
        "Here love survives storms, the troubles of life. That shows constancy, but the claim about fading beauty belongs to the image of Time's blade.",
      'If this be error and upon me prov’d, / I never writ, nor no man ever lov’d.':
        "The final couplet stakes the poet's word on his claims about love. It challenges the reader; it does not mention beauty or age.",
    },
    more: 'Time is personified as a reaper. The poem admits that bodies age while insisting that true love does not, which is one reason it is read at so many weddings.',
    tip: 'When you compare this sonnet with other love poems, use this image to show how Shakespeare separates love from physical beauty.',
  },
  "word: It is the star to every wandering bark, | What does 'bark' suggest here?": {
    why: "A bark, or barque, is a sailing ship. Love is the star that every wandering ship steers by, so a lover lost in life's confusion can find his way by a love that stays fixed in the sky.",
    not: {
      "a dog's warning cry heard in the dark night":
        'That is the everyday meaning today, but it makes no sense beside wandering and a guiding star. Here bark means a ship.',
      'the rough outer skin of a tree':
        'The bark of a tree is a different word that sounds the same. The storms of the line before show that a ship is meant.',
      'a harsh voice raised in anger':
        'Nothing in the line is about speech. The wandering bark is a ship, and the star is what it navigates by.',
    },
    more: 'The whole second quatrain is a sea voyage: a sea-mark that storms cannot shake, a ship, a star. Love becomes a fixed point for navigation in a moving world.',
    tip: 'Check old words in context before you analyse them. Explaining that a bark is a ship, and why it is wandering, sets up strong analysis of the image.',
  },
  "word: Love’s not Time’s fool, though rosy lips and cheeks / Within his bending sickle’s compass come; | What does 'sickle' suggest here?":
    {
      why: "Time is pictured as a reaper with a curved sickle, the blade used to cut corn. Youthful beauty falls within its sweep and is cut down, but love is not Time's fool and survives the harvest.",
      not: {
        'the thin curve of a new moon at night':
          'A crescent moon is sometimes called sickle-shaped, but here the sickle belongs to Time, and rosy lips fall within its reach. It is a blade, not a moon.',
        'a farmer bringing in a rich harvest':
          'The image comes from harvesting, but there is nothing rich or welcome about it. Time cuts beauty down; the poem is about loss, not plenty.',
        'a curved weapon carried by a soldier into battle':
          "Time is not at war with anyone here. The sickle is a reaper's tool, linking time to the harvest and to death.",
      },
      more: "The reaper with a sickle became the familiar figure of Death. Bending describes the blade's curve, and compass its sweep: nothing beautiful escapes it except love.",
      tip: 'Name the personification of Time and explain the sickle as a symbol of death, then show how the poem sets love outside its power.',
    },
  'There’s nothing so humiliating as to look poor': {
    why: 'Mathilde says this when her husband suggests she wear roses to the Ministry reception instead of jewellery. Fresh flowers would cost ten francs, but beside rich women they would give her away. She does not dread being poor so much as being seen to be poor.',
    more: 'The superlative turns a social embarrassment into the worst thing she can imagine, and makes appearance the value that rules her life. It also prepares the irony of the second half, when ten years of debt make her poor and make her look it.',
    tip: 'Use it as evidence for appearance and reality, then link it to the ending, where Madame Forestier fails to recognise her: what Mathilde feared most is exactly what she becomes.',
  },
  'How little is needed to make or break us!': {
    why: "Late in Guy de Maupassant's The Necklace, the narrator steps in to comment as Mathilde thinks back to the ball. One small chance, a lost necklace, has made her briefly glorious and then ruined ten years of her life.",
    more: 'The inclusive us turns her story into a general lesson about chance. Coming just before the final twist, it sharpens the irony of what she is about to learn.',
    tip: "Use the narrator's comment to discuss the story's moral and its view of fate, and question whether chance or Mathilde herself is to blame.",
  },
  'speaker: What earthly use is that to me?': {
    why: 'Mathilde mutters this as she tosses aside the invitation to the Ministry reception, which her husband was proud to bring home. They are her first words in the story: a sulky rhetorical question, in which earthly makes the evening sound beneath her.',
    not: {
      'Mathilde, when her husband suggests her theatre dress':
        'When he suggests the dress she wears to the theatre, she does not scoff: she starts to cry and says she has nothing to wear. The scornful question came first, at the invitation.',
      'Mathilde, when her husband suggests wearing roses':
        'When he suggests roses she turns the idea down, and he sends her to borrow jewellery from Madame Forestier instead. This line comes earlier, as she dismisses the invitation itself.',
      'Madame Forestier, when the replacement necklace is returned':
        'Madame Forestier is put out when the necklace comes back late, but her complaint is the opposite of this: she grumbles that she could have wanted to wear it.',
    },
    more: "Her ingratitude is plain, but so is her fear: she already knows the invitation will expose that she has nothing to wear. Her husband's eager reply, chatty and slangy in Coward's translation, sets his warmth against her dissatisfaction.",
    tip: 'Use it to show how the story builds judgement and sympathy at once: the reader sees her rudeness to a kind husband, yet understands the shame behind it.',
  },
  'speaker: But it was only an imitation necklace.': {
    why: "Madame Forestier says it on the Champs-Élysées, after Mathilde proudly tells her about the replacement. It comes in the story's last two lines. The word only carries the irony: ten years of labour and thirty-six thousand francs were spent replacing something of little value.",
    not: {
      'Madame Forestier, when the replacement is returned to her':
        'When the replacement comes back she complains that it is late but never opens the case. She notices nothing, so the truth stays hidden for ten years.',
      'The jeweller, when the Loisels bring him the empty case':
        'The jeweller named inside the case tells them only that the case, not the necklace, came from his shop. It is a clue on a second reading, but he never says what it was worth.',
      'The narrator, as the story closes':
        'The narrator, who comments on almost everything, never reveals the truth. The last words belong to Madame Forestier, which is what lets the ending surprise.',
    },
    more: "The revelation comes in a plain sentence and no reaction follows: the story stops. The reader is left to imagine Mathilde's face, and Loisel's, who is not even there, and to reread everything before it as a tragedy of appearances.",
    tip: "Treat the ending as the story's key rather than its trick: show how it changes the meaning of the dreams, the decision to hide the loss and the ten years of debt.",
  },
  'speaker: They lived like this for ten years.': {
    why: 'After the Loisels borrow to replace the lost necklace, they work and economise to pay back the debt. This short sentence compresses a whole decade of hardship into seven words.',
    not: {
      'as Mathilde dreams of luxury in her shabby flat':
        'Her daydreams fill the opening, before the ball. These ten years come after the loss of the necklace.',
      'as she dances, the success of the ball':
        'The ball is a single night of triumph. This sentence covers the ten years that follow.',
      'as she meets Madame Forestier again on a Sunday walk at the end':
        'The meeting comes after the ten years are over. This sentence is what leads up to it.',
    },
    more: 'After many lines on one night, Maupassant gives ten years a single sentence. The contrast in pace shows how a moment of glory is paid for by a decade of grind.',
    tip: "Comment on how the story's structure speeds up and slows down, and what the changes in pace emphasise.",
  },
  "point: The Necklace: Which line shows that Mathilde's husband pays as heavily as she does for the lost necklace?":
    {
      why: 'The narrator uses a financial metaphor for a human cost: Loisel pledges not a house but his future years. It follows a list of ever smaller loans, and it reminds the reader that the husband, who wanted nothing for himself, pays as much as his wife.',
      not: {
        'Then began for Madame Loisel the grindingly horrible life of the very poor.':
          'This opens the ten years of poverty, but it is about Madame Loisel alone. It shows her price, not that her husband shares it.',
        'Ah! Stew! Splendid!':
          "This is Loisel's delight at a plain dinner in the opening. It shows how little he needs to be content, long before there is any debt to pay.",
        'And she smiled a proud, innocent smile.':
          "This is Mathilde's pride at the end, once the debt is repaid. It is about her feelings, and her husband is not even in the scene.",
      },
      more: 'Readers often overlook Loisel because the story follows his wife. Yet he gives up his gun money, searches Paris, borrows at ruinous rates and works evenings for ten years, and the story ends before he learns the truth.',
      tip: 'Use Loisel to test the moral reading: if vanity is punished, why does the man who wanted nothing pay as much as anyone? That question makes a strong paragraph on class and sacrifice.',
    },
  'point: The Necklace: Which line shows Mathilde believing she was born for a richer life?': {
    why: 'The verb felt and the passive was intended show a belief, not a fact: Mathilde thinks a life of luxury is her destiny, owed to her by her beauty and charm. This sense of entitlement drives everything that follows.',
    not: {
      'a commonplace coat violently at odds with the elegance of her dress':
        'This describes her shabby coat clashing with her ball gown. It shows her real status breaking through, not her belief about her destiny.',
      'as if ashamed to parade their poverty in the full light of day':
        'This personifies the old cabs that only come out at night. It is about shame at poverty, not her belief that she deserves riches.',
      'They lived like this for ten years.':
        'This sums up the years of hard work after the loss. It records what happened, not what she believed she was born for.',
    },
    more: 'The story tests her belief. By the end, ten years of work have shown a different kind of strength in her, and the necklace she wanted so badly turns out to be imitation.',
    tip: "Use this early line to explain Mathilde's motivation, and track how the ending punishes her desire for a life she thinks she is owed.",
  },
  "word: her heart began to beat with immoderate desire | Which word slips the narrator's own judgement into the description?":
    {
      why: 'Immoderate means beyond reasonable limits. While describing her racing heart, the narrator adds a verdict: her longing for the necklace is excessive. It is the moment she chooses the object that will ruin her, and the word quietly warns the reader.',
      not: {
        heart:
          'The heart makes her longing physical, almost a romantic passion, but it describes what she feels rather than judging it.',
        beat: 'The beating heart shows excitement in her body. It reports a sensation; it does not tell the reader what to think of it.',
        desire:
          'Desire names her feeling plainly, and on its own it could be innocent. It is the word in front of it that measures the desire and finds it too much.',
      },
      more: 'The narrator is omniscient and unusually free with opinions. Here one adjective tells the reader how to see a moment of delight, and the plot that follows bears the warning out.',
      tip: "Look for the judging word inside a description. Naming it, and saying whose judgement it is, shows an examiner you can separate the narrator's view from the character's.",
    },
  'word: wearing down her pink nails on the greasy pots and saucepans | Which word echoes a detail from her daydreams in the opening?':
    {
      why: 'In the opening Mathilde dreams of dining on pink trout from fine china. Now the same colour belongs to her nails, ground down on dirty pans. The delicate colour of luxury has become the colour of labour.',
      not: {
        wearing:
          'Wearing down shows the slow damage of hard work, but it looks forward to her ruined hands, not back to her dreams.',
        greasy:
          'Greasy gives the dirt of the kitchen. It contrasts with luxury, but it repeats nothing from her daydreams.',
        saucepans:
          'Saucepans are the tools of the housework the maid once did. They mark how far she has fallen, but they recall no earlier image.',
      },
      more: 'Ten years pass in a few paragraphs, but her body keeps count: pink nails worn down here, and by the end her hands are red. The change of colour measures the fall more vividly than any summary of the years.',
      tip: 'Tracking a repeated detail is an efficient way to write about structure: pair the two pinks to show how the second half of the story mirrors and reverses the first.',
    },
  "word: She danced ecstatically, wildly, intoxicated with pleasure | What does 'intoxicated' suggest here?":
    {
      why: 'Intoxicated is a metaphor: Mathilde is drunk not on wine but on pleasure and admiration. At the height of her triumph she loses all sense of time and caution, which leads to the loss of the necklace.',
      not: {
        'she has drunk too much wine at the ball':
          'The intoxication is figurative. It is pleasure, not wine, that has gone to her head.',
        'she feels ill and dizzy from dancing':
          'Nothing suggests illness. She is overjoyed, carried away by her success.',
        'she is poisoned by her jealousy of the other women at the ball':
          'At the ball the other women envy her, not the reverse. She is the one admired.',
      },
      more: 'The adverbs pile up without a conjunction, so the sentence itself seems to whirl like the dance. Pleasure is presented as something dangerous.',
      tip: 'Explain how the metaphor foreshadows the consequences of her vanity: intoxication leads to a careless fall.',
    },
  'make them share it with me: their infernal luck': {
    why: 'Lev thinks this at the very end of the extract, after studying a twenty-pound note under his reading light. He has decided that luck is what the English have, and he means to claim a share of it. The narration has moved into his own first-person voice.',
    more: 'Infernal means hellish, almost a curse, so the tone mixes envy and resentment with determination. He does not plan to become English, only to take what they have, which suggests his heart is still at home.',
    tip: "Use it in a paragraph on the ending: ask whether Lev's resolve is strength or self-persuasion in the dark, and support both readings from the final lines.",
  },
  'side by side with their separate aches and dreams, like a married couple': {
    why: "This comes early in Significant Cigarettes, Rose Tremain's extract from The Road Home, as Lev travels by coach towards England. He and the stranger beside him are pushed into the closeness of a married couple, each with private pains and hopes.",
    more: "The simile is wry and sad: strangers forced into intimacy. It also hints at Lev's own lost marriage, which the reader learns about later.",
    tip: "Use the simile to show how Tremain builds a picture of loneliness among crowds, and how small details hint at a character's past.",
  },
  'speaker: If only we were storks.': {
    why: 'Marina says it at the sulphur springs at Jor, where Lev took her in the hope that nature might heal her. Lying in the water, she watches a stork return to its nest and wishes they were storks, because storks never seem to die.',
    not: {
      'Marina, dying in her hospital bed':
        'Lev remembers five nights on the floor beside her hospital bed, but no words of hers are reported there. The wish belongs to the trip to the springs, made in hope of a cure.',
      'Lev, as he practises English with Lydia':
        'Lev does say the word stork among his practice words, which shows his wife is still in his mind. But the wish itself was first spoken by Marina.',
      'Lydia, as she peels her hard-boiled egg':
        "Lydia peels her egg in silence. Its smell is what carries Lev's mind back to the sulphur springs, where his wife spoke these words.",
    },
    more: "A few lines later the wish is repeated as a paragraph of its own, without speech marks, as if it has become Lev's thought. Storks are migrating birds that return to the same nest, an apt image for a novel called The Road Home.",
    tip: 'Use the storks to show how the extract presents grief through memory: a smell on the coach brings back the past, and the repeated one-line paragraph gives the wish its weight.',
  },
  'speaker: I became very tired of the view from my window.': {
    why: 'Lydia says this when Lev asks why she has given up her teaching post at School 237 in Yarbl. Day after day she saw the same school yard and fence from her window, and she began to imagine dying there. The understatement hides a real fear of a life that never changes.',
    not: {
      "Lydia, as she corrects Lev's pronunciation":
        'During the English lesson she gives short corrections and puzzles over his word for a cheap hotel. Her reason for leaving comes before the lesson begins.',
      'Lev, explaining why he left his village':
        "Lev's reason is work: the sawmill closed and his family lives on his mother's tin jewellery. The window that troubles him is the coach window, which shows him his reflection.",
      'Lydia, when she first speaks to Lev on the coach':
        'Her first words are a polite rule: smoking is not allowed on the bus. She explains why she is leaving only later, after they have exchanged names.',
    },
    more: "Her restlessness mirrors Lev's, who spends the extract staring through a window, and she gives him a long, serious look before he says he understands. The two strangers are more alike than he expected.",
    tip: 'Use Lydia as a foil: she is leaving and hoping too, but she has the language Lev lacks. Comparing them shows that migrants are not all one type.',
  },
  'speaker: They ran out of trees': {
    why: 'When Lydia asks why the sawmill at Baryn closed, Lev answers in five blunt words. The understatement is darkly comic: an industry that cut down every tree has destroyed its own future, and his job with it.',
    not: {
      'Lydia, explaining why she left her teaching job':
        "Lydia talks about her own reasons for leaving, but these words answer her question; they are Lev's.",
      'Lev, remembering Marina at the sulphur springs':
        'His memory of Marina is tender and private. This is a flat answer about his work.',
      'Lev, listing everything his daughter Maya needs':
        "His list of Maya's needs leads to his hope in England. This line explains why he lost his job.",
    },
    more: 'The short sentence sums up an economic collapse that pushes Lev to leave his country. The humour hides real loss.',
    tip: "Use the line to explain Lev's reasons for migrating, and comment on how understatement can carry serious meaning.",
  },
  'point: Significant Cigarettes: Which line suggests that the journey strips the passengers of control over their own movement?':
    {
      why: 'At the gas stops the passengers would stretch, look at wild flowers and smoke, and then be herded back on board. The verb turns people into livestock and the coach into a pen. One reading is that it previews how migrants may be handled: counted, moved and managed.',
      not: {
        'staring out at the land he was leaving':
          'This opens the extract with Lev looking back at home. It shows his feelings about leaving, not the way the journey controls him.',
        'his heart remained in his own country':
          "This ends Lev's plan to hold himself apart in England. It is a choice he makes, the opposite of being driven where others decide.",
        'aching for the comfort of nicotine or oblivion':
          "This is Lev's night-time craving for a cigarette, or for escape. It shows his need, not the way the passengers are moved about.",
      },
      more: 'The roadside freedoms are small and brief, and one verb snatches them back. The routine is imagined in advance in a chain of would clauses, so the reader feels fifty hours of monotony without living through them.',
      tip: 'Verb choice is a quick win in an exam answer: quote the verb, name the animal image it creates, and say what it suggests about how migrants are treated.',
    },
  "point: Significant Cigarettes: Which line reveals Lev's loneliness before the reader learns its cause?":
    {
      why: 'Lev is not even allowed to smoke, yet the cigarette in his hand keeps him company. Treating an object as a companion shows how lonely he is, long before the reader learns of his grief for his wife.',
      not: {
        'The British venerate their history':
          'This is a remembered line from his English lessons, about the British and their past. It shows his expectations, not his loneliness.',
        'but my time is coming':
          'These final words express hope for the future. They look forward rather than revealing a hidden sorrow.',
        'England is my hope.':
          'This states his reason for travelling, hope for his family. It is about the future, not his loneliness.',
      },
      more: 'The cigarettes of the title become a symbol of comfort and of connection with others, offered and shared on the journey.',
      tip: 'Show how Tremain reveals character indirectly, through objects and small actions, before she explains anything.',
    },
  'word: Lovely. Sorry. I am legal. How much please. | Which word shows Lev expecting his right to be in England to be questioned?':
    {
      why: 'Lev practises this phrase-book English with Lydia. Nobody has accused him of anything, yet he has an answer ready: he expects to have to prove he is allowed to be in England before he has even arrived.',
      not: {
        Lovely:
          'Lovely is the polite small talk he hopes to need. It shows him trying to please, not expecting suspicion.',
        Sorry:
          'Sorry is an apology, ready for small mistakes in a strange country. It is about manners, not about his right to be there.',
        much: 'How much is the phrase for paying. It shows that money will shape his days in England, not that his presence will be challenged.',
      },
      more: 'The short, disconnected sentences mimic phrase-book English and show how small his toolkit is. They are funny, but each one is a situation he expects to face, from paying for things to being asked for his papers.',
      tip: "In an answer on Lev's feelings about the future, pair this line with his hope: the anxious, broken English shows how much courage the journey takes.",
    },
  'word: his own guilt at still being alive | Which word makes surviving sound like something he has failed to stop?':
    {
      why: "Still means even now, after Marina's death. It makes his going on living sound like a failure he cannot correct. This is survivor's guilt, irrational and powerful, and it is what Lev sees whenever he catches his reflection, as he does here in the coach window.",
      not: {
        own: "Own makes the guilt personal, his and nobody else's, but it says nothing about time or about going on living.",
        guilt:
          'Guilt names the feeling, but on its own it could be guilt about anything. Another word ties it to his surviving her.',
        alive:
          'Alive states the plain fact of his survival. It is another word in the phrase that turns that fact into something he should have stopped.',
      },
      more: 'Nothing in the extract suggests he is to blame for her death, which makes the guilt more painful. It surfaces in the very window through which he has been watching his old life disappear.',
      tip: 'Analysing one small word shows close reading: explain what still adds, then link it to the theme of grief and to the window as a motif that runs through the extract.',
    },
  "word: how, in Lev’s heart, darkness would always fall | What does 'always' suggest here?": {
    why: 'As night falls on the journey, Lev thinks of how darkness always came to his home in the same way. In his heart it always falls too: his grief returns as reliably as nightfall, something he cannot escape.',
    not: {
      'that it is always dark in his home town':
        'The darkness in his heart is grief, not a dark town. Night comes and goes; his sorrow keeps coming back.',
      'that he has always been afraid of the dark since childhood':
        'Fear of the dark is not the point. The darkness is a metaphor for sorrow.',
      'that the coach travels only at night':
        'The journey goes on through day and night. Always describes the return of his sadness, not the timetable.',
    },
    more: 'Linking inner feeling to the falling of night is a kind of pathetic fallacy, making grief part of the natural rhythm of his days.',
    tip: "Explain how Tremain turns a description of nightfall into a window on Lev's state of mind.",
  },
  'so firmly locked and then, inexplicably, opened': {
    why: 'The narrator is describing the nursery at the end of a short corridor in Eel Marsh House. He is certain that an unseen presence has just passed him on the landing and gone towards that room, although he saw, felt and heard nothing.',
    more: 'The sentence moves from certainty to mystery. Firmly insists the door really was locked, and the commas around inexplicably force a pause before the last word lands, like the door swinging open. The reader never enters the nursery, which makes it more frightening.',
    tip: "Use it to show how Hill builds fear from the unexplained: a narrator used to evidence admits he has none, and the reader's imagination fills the gap.",
  },
  'speaker: steady as a lighthouse': {
    why: 'Soon after the gale wakes him, the narrator steadies himself by reflecting that Eel Marsh House has stood alone through many winters of storms. The lighthouse replaces his first image of the house as a storm-tossed boat: now it is a building that endures storms and guides others to safety.',
    not: {
      'as he gropes across the dark room for his torch':
        'By then the lights have failed and his calm has gone. Groping for the torch, he trips over the dog and breaks it, the opposite of steady.',
      'as he sits on the floor with Spider at the end':
        'At the end Spider calms him, but his comfort there comes from warmth and touch, not from the thought of a building standing firm.',
      "as the child's cry breaks into his memories":
        'The cry shatters his calm rather than building it. The steadying thought comes earlier, before he drifts into memories of his nursery.',
    },
    more: 'The image is ironic: a lighthouse is a light in the darkness, and in this extract every light fails, first the house lights and then his torch. The comfort he builds here is exactly what the rest of the extract takes away.',
    tip: 'Track how the narrator pictures the house: first a storm-tossed boat, then a lighthouse. The shift lets you write about structure and his state of mind at once.',
  },
  'speaker: I began to doubt my own reality': {
    why: 'After the presence passes him on the landing, the narrator tries one explanation after another, a person hiding in the nursery, the woman in black, a secret relative of Mrs Drablow, and rejects them all. Deciding that whatever passed him was not real, he then asks what real means.',
    not: {
      'when the torch breaks and will not light':
        'The broken torch comes just after this, and it brings rage rather than doubt. By then the threat has already moved into his mind.',
      "just after the child's cry comes a second time":
        'When the cry comes again he insists flatly that there is no child, a show of certainty. His reasoning has not yet been tested by the presence on the landing.',
      'as he drifts into memories of his childhood':
        'Drifting half asleep, he feels safe, like a small boy in his nursery. Reality blurs pleasantly there; it is not yet something he doubts.',
    },
    more: 'This is the climax of his reasoning and the moment it fails. The threat has moved from the house into his own head, and a man who doubts his own reality has nothing left to hold on to.',
    tip: 'Use it as the turning point in an argument about reason and doubt: show the stages by which his explanations collapse, and how the extract refuses to settle what really happened.',
  },
  'speaker: like a ship at sea': {
    why: 'In the opening lines the narrator is woken by a storm, and the house seems to rock like a ship at sea. The simile makes the solid house feel fragile and turns the marsh around it into an ocean.',
    not: {
      'as he gropes across the dark room for his torch':
        'The search for the torch comes after he has heard the cry. This simile belongs to the moment the storm wakes him.',
      'as he sits on the floor with Spider at the end':
        'The extract ends with the narrator and the dog. The ship image opens it.',
      "as the child's cry breaks into his memories":
        'The cry comes later, after the storm has woken him. This image sets the scene first.',
    },
    more: "A ship at sea is at the mercy of the weather, so the image prepares the reader to feel the narrator's helplessness as the night goes on.",
    tip: 'Use the opening simile to show how Hill builds a Gothic atmosphere of isolation and danger from the first lines.',
  },
  "point: Whistle and I'll Come to You (from The Woman in Black): Which line shows the narrator pitying the child rather than fearing it?":
    {
      why: 'The narrator silently thinks the words said over the dead, then corrects them: this child has found no rest. Poor shows compassion, and the shift from did not to could not suggests the spirit is trapped. His first response to the ghost is pity.',
      not: {
        'catapulting me back into the present':
          'This is the shock of the cry breaking into his memories. The violent verb shows how suddenly his calm is shattered, not how he feels about the child.',
        'in a burst of violent rage':
          'This is his outburst after the torch breaks, when fear and frustration overwhelm him in the dark. It is not feeling for the child.',
        'thoroughly ashamed of myself':
          'This is how he feels once Spider has calmed him. The shame is about his own loss of control, not about the child.',
      },
      more: "Pity deepens the horror. He wants to block out a voice he can do nothing for, and the extract ends with the cry still coming, so the child's suffering outlasts the narrator's recovery.",
      tip: 'An answer that notices pity as well as fear stands out: argue that the real horror here is helplessness, an adult unable to help a suffering child.',
    },
  "word: like a banshee | What does 'banshee' suggest here?": {
    why: 'A banshee is a female spirit of Irish folklore whose wailing warns a family that one of them is about to die. Comparing the wind to one gives the storm a voice of mourning and quietly foreshadows death.',
    not: {
      'the wind attacks the house like an evil spirit':
        'A banshee does not attack anyone: she mourns and warns. The simile gives the wind a grieving voice, not a violent purpose.',
      'the wind howls like a wild animal on the hunt':
        'The wild animal belongs to his childhood memory of the nursery, where he pictured the raging wind as a big cat. Here he reaches for a ghost instead.',
      "the cry from the marsh is a woman's rather than a child's":
        "The simile describes the wind, not the cry. The cry, heard just before and again just after, is clearly a child's, calling for help from the marsh.",
    },
    more: 'The sound he describes is natural, but the image he reaches for is supernatural, so the line between weather and ghost begins to blur. Foreboding builds without anything being seen.',
    tip: 'When you analyse a simile, explain what the comparison brings with it: here folklore and a warning of death, which prepares the reader for the cry that follows.',
  },
  'word: that child’s terrible cry | Which word tells the reader he has heard this cry before?': {
    why: "The demonstrative that points to one particular, familiar cry: the same one that broke into his memories and came again from the marsh. In the extract's last sentence it marks the cry as unfinished business, still carried to him by the wind.",
    not: {
      'child’s':
        "Child's tells us whose cry it is, which the reader has known since it first came. It does not show that he recognises it.",
      terrible:
        'Terrible shows how distressing the cry is, but it would describe any dreadful sound, whether heard once or many times.',
      cry: 'Cry names the sound. On its own it could be any cry; the word that opens the phrase is what makes it one he knows.',
    },
    more: 'The extract ends on the sound that first broke his calm. Spider has comforted the narrator, but the child is still suffering, so the ending offers comfort to the living and none to the dead.',
    tip: 'Endings deserve a paragraph of their own: say what is resolved, his panic, and what is not, the cry. Even one small word can carry that contrast.',
  },
  'word: There was no child. I knew that. | Which word shows him claiming a certainty he may not feel?':
    {
      why: 'Knew claims certainty. But the blunt short sentences sound like a man talking himself into it: the more firmly he says he knows there was no child, the more the reader suspects he is afraid that there was.',
      not: {
        There: 'There only opens the sentence. It carries no claim of certainty.',
        no: "No denies the child's existence, but the claim to be certain lies in the verb of the next sentence.",
        child:
          'Child names what he denies hearing. It is the subject of the denial, not the word that asserts certainty.',
      },
      more: "Insisting on certainty is a common move in ghost stories: a rational narrator's confidence is set up to be broken.",
      tip: "Comment on short declarative sentences and what they reveal about a narrator's state of mind when he protests too firmly.",
    },
  'The more I chased the thought away, the more it came back.': {
    why: 'The narrator is remembering her sleepless nights at fourteen, when a terrible thought arrives without any motive and will not leave her. The balanced structure, the more followed by the more, traps the sentence in a loop, just as the thought traps her.',
    more: 'The verb chased makes the thought an animal that returns however often it is driven off. It is psychologically exact: trying not to think of something keeps it in mind, so fighting the thought only seems to strengthen it.',
    tip: 'Use it when writing about the mind as a source of fear: the horror of the story is not violence but the discovery that a mind can produce a thought its owner hates.',
  },
  'wandering about like a visitor': {
    why: "This comes in Alice Munro's Night, as the narrator recovers from her operation one summer and is excused from the usual jobs at home. Wandering about like a visitor, she becomes an outsider in her own house.",
    more: 'A visitor has no work and no place. In a busy family the simile shows how idle and unsettled she feels, the state in which her strange night thoughts begin.',
    tip: "Use the simile to show how Munro links the narrator's feeling of not belonging to the darker thoughts that follow.",
  },
  'speaker: But don’t worry, ... it’s all over now.': {
    why: 'The mother says it on a Saturday, alone with her daughter in the kitchen, straight after explaining that the doctor removed a growth as well as the appendix. Set as a paragraph of its own, the reassurance closes the subject as soon as it opens, and the family never speaks of it again.',
    not: {
      'The father, when she confesses her fear at dawn':
        'The father does tell her not to worry, but much later in the story and about something quite different. His few calm words work where this reassurance does not.',
      'The doctor, after he removes her appendix':
        'The doctor takes out the growth, but he never speaks to her in the story. She hears about it from her mother, not from him.',
      'The narrator, looking back on the growth in old age':
        "Looking back, the old narrator can only suppose the growth was harmless, since she is still alive. She never claims to know; the confident reassurance was her mother's.",
    },
    more: "Its comfort is double-edged: all over sounds final, but the summer that follows shows that nothing is over. With no speech marks, the mother's voice blurs into the narrator's memory.",
    tip: 'Use it in a paragraph on silence: a frightening fact is reported and closed in two short paragraphs, and the story then shows what happens to things nobody talks about.',
  },
  'speaker: People have those kinds of thoughts sometimes.': {
    why: 'Her father says it on the kitchen stoop at dawn, just after she has told him she is afraid she will hurt her sister. After a single word and an instruction not to worry, he answers gravely and calmly. The general noun people turns her private horror into something shared.',
    not: {
      'The father, when he first finds her on the stoop':
        'When he first finds her he only says good morning and asks about her sleep, offering an ordinary reason she can accept. She has not yet told him anything.',
      'The doctor, as she recovers from her operation':
        'The doctor never speaks in the story, and the thoughts begin months after the winter operation, in June. It is her father who later blames them on the ether the hospital gave her.',
      'The narrator, to herself as the thought returns':
        'Alone in the dark she fights the thought but cannot calm herself. The steady, ordinary explanation has to come from someone else.',
    },
    more: 'The narrator judges that his response worked, setting her back in ordinary life without laughing at her or treating her as dangerous. Yet the story does not make him a saint: soon after, she remembers his razor strap and belt.',
    tip: 'Use the father to argue about silence in the story: his few plain words free her, but the ending reminds the reader how much he himself never says.',
  },
  'speaker: Having trouble sleeping?': {
    why: 'Her father, up early, finds her sitting on the stoop at dawn. His first question after good morning is short, practical and deliberately mild, though he must know she has been up on many nights.',
    not: {
      'The father, after she says she might hurt her sister':
        'His calm reply to her confession comes later in the same conversation. This is how he opens it.',
      'The doctor, as she recovers from her operation':
        'The doctor plays no part in the night scenes. This is her father, meeting her outside at dawn.',
      'The mother, after telling her about the growth':
        "Her mother's news about the growth comes earlier, after the operation. This gentle question is her father's.",
    },
    more: 'His mildness makes it possible for her to tell him the truth. Munro shows care through restraint rather than fuss.',
    tip: "Use the line to show how the father's understated manner is what helps the narrator, an example of character revealed through dialogue.",
  },
  'point: Night: Which line suggests the father carries troubles of his own that he never speaks of?':
    {
      why: "In the last paragraph the old narrator wonders why her father was up before dawn in his better clothes: a refused bank loan, news about her mother's illness, or this, the most startling guess. It is never answered, and it turns the father from rescuer into a man with troubles of his own.",
      not: {
        'People have those kinds of thoughts sometimes.':
          "These are the father's calm words to his frightened daughter. They show how he helps her, not what is troubling him.",
        'without either mockery or alarm, in the world we were living in':
          "This is the narrator's verdict on how her father responded. It praises what he did for her and says nothing of his own life.",
        'Never mind. From then on I could sleep.':
          'This closes the story by brushing her guesses aside. It shows her setting the questions down, not what was weighing on him.',
      },
      more: "The ending turns the story round: a daughter helped by her father realises, decades later, that he may have needed help too. The guesses stay guesses, so the family's habit of silence lasts to the final line.",
      tip: 'An ending that opens new questions is worth analysing: explain how the final paragraph changes your view of the father, then link it to the theme of things left unsaid.',
    },
  'word: there must have been a cloud around that word | Which word shows the older narrator working out the past rather than remembering it?':
    {
      why: 'Must have is how we reason about something we cannot recall directly. The old narrator is explaining, decades later, why nobody asked whether the growth was cancer: she can only infer that the word was surrounded by something nobody wanted to look at.',
      not: {
        cloud:
          "Cloud is the metaphor: something dark and hiding that surrounds the word. It describes the family's silence, not how the narrator knows about it.",
        around:
          'Around places the cloud about the word, keeping it out of sight. It shapes the image but does not show her reasoning.',
        word: 'The word is cancer, which nobody in the family says. Leaving it unnamed here adds to the silence, but it does not show her working anything out.',
      },
      more: 'The story is full of must have, maybe and perhaps, because it is told by an old woman who never pretends to remember perfectly. Showing the joins in her memory makes the few things she is sure of more trustworthy.',
      tip: "Notice the narrator's hedging words and comment on them: they let you write about the gap between the girl who lived that summer and the old woman telling it.",
    },
  "word: maybe just to inhale the sanity of it | What does 'inhale' suggest here?": {
    why: 'At the kitchen stoop she looks towards the town, imagining its people soon starting their busy day. Inhale makes that ordinary, sensible life something physical she can breathe in, as if sanity were fresh air after the strange nights inside the house.',
    not: {
      'she is smoking on the stoop, as her father later does':
        'Her father has a hand-rolled cigarette when she finds him on the stoop, but nothing suggests she smokes. Inhale is a metaphor here: what she breathes in is sanity.',
      'she is gasping for breath after a bad dream':
        'She has no bad dreams: when her father asks, she says no. What drives her out is a waking thought, and the stoop eases her rather than leaving her breathless.',
      'she breathes in the smell of the clean washing':
        'The stoop is where the family hangs out the washing, which smells fresh when dry, but what she draws in at night comes from the direction of the town.',
    },
    more: "Maybe shows the older narrator guessing at her younger self's motive. The town stands for the ordinary working world, and it is at this same stoop, looking the same way, that she will one night find her father.",
    tip: 'When you analyse a metaphor, say what it makes concrete: here an abstract idea, sanity, becomes something to breathe. Then link it to the contrast between the strange night house and the sensible day.',
  },
  "word: I was not myself. | What does 'not myself' suggest here?": {
    why: 'Not myself is an everyday phrase for feeling unwell or out of sorts, but here it is given a paragraph of its own. It suggests something deeper: her own thoughts had begun to feel strange and out of her control.',
    not: {
      'that she was pretending to be someone else':
        'She is not acting a part. The phrase describes a self she no longer recognises, not a disguise.',
      'that she was ill with a fever after the operation':
        'Her body is recovering; it is her mind that feels strange. The illness here is not physical.',
      'that she was copying her older friends':
        'Nothing suggests imitation. The change comes from inside her, in her thoughts at night.',
    },
    more: "Setting four plain words apart gives them weight. Munro's older narrator looks back calmly on a frightening time, which makes the account more convincing.",
    tip: 'Comment on how a familiar phrase can take on new meaning in context, and on the effect of a one-line paragraph.',
  },
  'And yet she had loved him--sometimes. Often she had not.': {
    why: "Alone in her room after hearing of her husband's death, Mrs Mallard admits the truth about her marriage. The dash makes a hesitation, as if the thought is honestly corrected mid-sentence, and the blunt short sentence that follows is shocking in its frankness.",
    more: 'Chopin refuses to pretend the marriage was a romance, but she does not make the husband cruel either. The next sentences treat love as a mystery that counts for less than her new sense of owning herself.',
    tip: 'Quote it when you argue that the story criticises marriage itself rather than one bad husband: love is real but occasional, and it matters less to her than self-possession.',
  },
  'a little travel-stained, composedly carrying his grip-sack and umbrella': {
    why: "This describes Brently Mallard walking in through the front door at the end of Kate Chopin's The Story of an Hour, alive and unaware that he was reported killed. His ordinariness is devastating after his wife's hour of freedom.",
    more: 'After the language of goddesses and elixirs, Brently arrives with luggage and an umbrella. The bathos makes the twist land harder.',
    tip: 'Use the description to show how Chopin builds the ending through contrast, from soaring hope to an everyday, crushing reality.',
  },
  'speaker: free, free, free!': {
    why: 'Alone in her room, Mrs Mallard tries to beat back a feeling creeping towards her, and fails. When she gives in, the word escapes her in a whisper, over and over. At once the terror leaves her eyes, and her pulse and blood quicken.',
    not: {
      "Mrs Mallard, in her sister's arms after the news":
        "Hearing the news, she weeps at once with wild abandon in her sister's arms. The word free comes only later, when she is alone and the storm of grief has passed.",
      'Mrs Mallard, through the closed door to Josephine':
        'Through the door she speaks aloud only to send her sister away, insisting she is not making herself ill. Her joy stays secret: free is only ever whispered to herself.',
      'Mrs Mallard, as she walks downstairs with Josephine':
        'On the stairs her triumph shows in her eyes and bearing, but she says nothing. Moments later her husband walks in through the front door.',
    },
    more: 'The tripled word releases all the tension built since the feeling began to approach. Even alone she only whispers it, as if half afraid to say it, and its effect is physical: her blood seems to warm her whole body.',
    tip: "Use it as the story's turning point: name the repetition, explain the whisper, and show how the word changes her from exhausted widow to a woman who feels fully alive.",
  },
  'speaker: veiled hints that revealed in half concealing': {
    why: "In the second paragraph Josephine tells her sister of Brently's death in broken sentences, taking great care because Louise has heart trouble. The paradox of revealing by concealing describes her gentle method, and it is also a clue to how Chopin tells the whole story.",
    not: {
      'as Louise hides her joy behind her closed door':
        'Louise does conceal her joy behind the closed door, but the narrator never describes it in these words. They belong to the opening, when the news is broken to her.',
      'as Richards tries to screen Brently from his wife':
        "Richards' quick movement to hide Brently comes at the very end, and it is too late. The phrase describes words, not a gesture.",
      'as the doctors give their verdict on her death':
        "The doctors' verdict hides the truth, but they speak plainly and confidently, in one short sentence. The careful, broken hints belong to Josephine at the start.",
    },
    more: 'The story hides its real subject, her joy, until the middle, and the reader has to look beneath polite surfaces to find it. The phrase teaches that skill in the opening paragraphs.',
    tip: "Open an answer on structure with this phrase: show how the story, like Josephine, reveals its meaning by hiding it, then trace that pattern to the doctors' misreading at the end.",
  },
  'speaker: There was something coming to her and she was waiting for it, fearfully.': {
    why: 'Alone in her room after the news, Mrs Mallard feels something approaching that she cannot yet name. Chopin withholds the feeling, calling it only something, so the reader waits with her.',
    not: {
      'as Josephine breaks the news of the accident':
        'The news is broken gently at the start, downstairs. This waiting comes later, alone in her room.',
      'as she whispers the word free over and over to herself':
        'The whispered word comes after the feeling arrives and is named. Here it is still on its way.',
      'as she walks downstairs with her sister':
        'By the time she goes downstairs she is triumphant. This line comes before she understands what she feels.',
    },
    more: 'Fearfully, placed last, shows that the coming joy frightens her at first: it is a feeling a wife was not supposed to have.',
    tip: 'Show how Chopin builds suspense by delaying the name of the feeling, and how the adverb hints at social pressure.',
  },
  "point: The Story of an Hour: Which line widens the story's criticism from one husband to anyone who controls another person?":
    {
      why: "It comes as she imagines a future in which nobody's will is forced on hers. The words men and women, and fellow-creature, make the claim general: anyone who imposes their will on another person denies that person's equal humanity, whatever the intention behind it.",
      not: {
        'a long procession of years to come that would belong to her absolutely':
          'This is her vision of the years ahead belonging to her alone. It shows what freedom means to her personally, not a claim about everyone.',
        'There would be no one to live for during those coming years; she would live for herself.':
          'This turns from living for someone else to living for herself. It is about her own future, not about how men and women treat each other.',
        'It was only yesterday she had thought with a shudder that life might be long.':
          'This reveals how bleak her own life had been: a long life was something to dread. It is a hint about her marriage, not a general argument.',
      },
      more: 'Chopin gives Mrs Mallard a kind husband, so the criticism falls on the act of control itself. The narrator adds that whether the intention is kind or cruel, the act still seems a crime to her.',
      tip: 'Use this line for context: in the 1890s a wife was expected to live for her husband, and Chopin suggests that even a loving marriage can be felt as a loss of self.',
    },
  'point: The Story of an Hour: Which line shows the world outside echoing the new life stirring in her?':
    {
      why: 'Through the window she sees treetops trembling with the new life of spring. The world outside shows what is beginning inside her, a kind of pathetic fallacy that prepares for her sense of freedom.',
      not: {
        'whose lines bespoke repression and even a certain strength':
          'This describes her face, marked by years of holding herself in. It looks back at her past, not out at the spring.',
        'pressed down by a physical exhaustion that haunted her body and seemed to reach into her soul':
          'This shows her weariness as she sinks into the chair. It is the opposite of new life.',
        'a little travel-stained, composedly carrying his grip-sack and umbrella':
          "This describes Brently's return at the end, which ends her new life rather than echoing it.",
      },
      more: 'Spring is the season of rebirth, and aquiver suggests energy waiting to be released. Chopin uses the setting to tell us her secret before she knows it herself.',
      tip: "Name pathetic fallacy and explain what it reveals, then link the spring imagery to the story's theme of freedom.",
    },
  'word: she carried herself unwittingly like a goddess of Victory | Which word shows her triumph appearing in her body without her meaning it to?':
    {
      why: 'Unwittingly means without knowing or intending it. As she finally opens the door to her sister, the freedom she has felt alone shows in the way she holds herself, though she does not choose it. Her secret is no longer quite hidden.',
      not: {
        carried:
          'Carried herself describes her posture and bearing, but it says nothing about whether she means it. Another word tells us she is unaware.',
        goddess:
          'Goddess gives her grandeur and power, the height of her triumph. It describes how she appears, not whether she knows it.',
        Victory:
          'Victory, with its capital letter, makes her triumph a figure from classical myth. It names what she embodies, not how aware she is of it.',
      },
      more: 'The image lifts her to her greatest height just before the fall: she descends the stairs like a goddess, and moments later her husband opens the front door. The higher the image, the harder the ending lands.',
      tip: "Link the simile to structure: it is the story's high point, placed just before the reversal, so analysing it lets you explain how Chopin makes the ending a fall.",
    },
  'word: When the doctors came they said she had died of heart disease--of the joy that kills. | Which word does the reader know the doctors have misunderstood?':
    {
      why: 'The doctors assume she died of joy at seeing her husband alive. The reader, who has been inside her room, knows her joy came from his death and ended with his return. They have mistaken what the joy was for.',
      not: {
        doctors:
          'The doctors are the confident voice of authority, and nobody in the house would doubt them. The misunderstanding lies in what they say, not in who they are.',
        heart:
          'She really did have heart trouble, as the first line says, so heart disease is a reasonable verdict. The two hearts frame the story.',
        kills:
          'She does die, so kills is literally true. What the doctors get wrong is the feeling they blame.',
      },
      more: "This final dramatic irony is the story's last word on misreading. The phrase they said distances the narrator from the verdict, and the public world explains a woman's death, like her life, by what a wife was expected to feel.",
      tip: "End an answer with this line: explain the dramatic irony, then show how it completes a pattern of misreadings, from the mistaken list of the dead to the doctors' verdict.",
    },
  "word: she was drinking in a very elixir of life through that open window | What does 'elixir' suggest here?":
    {
      why: 'An elixir of life is a magical potion believed to give long life. Far from making herself ill, as her sister fears, Mrs Mallard is drinking in new life and freedom through the open window.',
      not: {
        'a poison that slowly weakens her':
          'Her sister fears she is harming herself, but the metaphor says the opposite: she is being made more alive.',
        'fresh air that cools a fever':
          'The window lets in air, but elixir is a magical potion, not mere fresh air. It stands for her new freedom.',
        'a medicine the doctor has given her':
          'The doctors only appear at the end. The elixir is figurative, the joy of freedom.',
      },
      more: 'The image is full of irony: the doctors at the end will say she died of joy, when the joy was her life and its loss her death.',
      tip: 'Trace the imagery of life and freedom through the story to show how Chopin prepares the ironic ending.',
    },
  'cracks like a pod': {
    why: "These words come from the first line of Imtiaz Dharker's Blessing, about a poor community in a time of drought. The simile makes the dryness physical: skin, or the earth itself, splits like a dried-out seed pod.",
    more: 'Dharker does not say whose skin it is, so the image can belong to the people or to the parched land. Either way the poem opens on a body that needs water to live.',
    tip: 'Use the simile to establish the hardship that makes the burst pipe later in the poem feel like a miracle.',
  },
  'speaker: roar of tongues': {
    why: 'In the third stanza a town water pipe bursts and water rushes out with a roar of tongues. The tiny imagined drip of the second stanza has grown into a loud, wild voice, as the whole community hurries to catch it.',
    not: {
      'as the drought makes the skin crack':
        'The cracking skin opens the poem, in the drought before any water comes. The roar belongs to the moment the water arrives.',
      'as the imagined drip echoes in a cup':
        'The single drip in the second stanza is quiet and imagined. The roar comes when real water floods out.',
      'as the children play in the spray':
        'The children come in the last stanza, after the rush. The roar is the sound of the water first bursting out.',
    },
    more: "Roar is a word for a lion or a crowd, so the water is personified as powerful and alive. The tongues may also be the people's voices crying out as they rush to it.",
    tip: 'Trace the sound of water across the poem, from silence to a drip to a roar, to show how Dharker builds to the climax.',
  },
  "word: kindly god | What does 'kindly' suggest here?": {
    why: 'The imagined sound of a drop of water becomes the voice of a god, and a kindly one: gentle and generous. Water is so precious to these people that even one drop feels like a blessing from a loving deity.',
    not: {
      'the god is old and tired of the people':
        "Kindly can describe an old person's manner, but here it means gentle and generous. Nothing suggests the god is weary.",
      'the people are kind to one another':
        'The adjective describes the god, not the people. It is about how the water is received, as a gift from above.',
      'the god will punish anyone who wastes water':
        'A punishing god is the opposite of kindly. The sound of water is welcomed as mercy, not feared as judgement.',
    },
    more: 'The religious language builds through the poem towards its title. A kindly god is the first step; later the crowd at the pipe gathers like worshippers.',
    tip: 'Track the religious imagery from this god to the title to show how the poem turns a burst pipe into a sacred event.',
  },
  'stump of a shoot': {
    why: "This phrase from Sujata Bhatt's Search For My Tongue comes just after the lines in Gujarati. The lost mother tongue returns in a dream as a plant: what was cut down to a stump begins to shoot again.",
    more: 'A stump recalls the tongue that was lost and spat out earlier; a shoot is new growth. The image turns the language into something living that cannot be killed off.',
    tip: "Use the phrase to show the poem's turning point, from the fear of losing a language to its surprising regrowth.",
  },
  'speaker: spit it out': {
    why: 'In the first section the speaker fears that, living in a foreign land among speakers of another language, she would have to spit out her mother tongue. The phrase makes losing a language a physical, violent act.',
    not: {
      'as the mother tongue grows back in her dreams':
        'The regrowth comes after the lines in Gujarati, when the tongue returns. Here she is still afraid of losing it.',
      'as she asks the listener to picture a mouth with two languages':
        'That comes at the start, setting up the problem. This line follows, imagining the cost of keeping only one.',
      'as the mother tongue flowers again at the end':
        'The flowering ends the section, the opposite of spitting it out. This is the low point before the dream.',
    },
    more: 'The phrase appears twice, first as a fear and then as something she thinks she has done. The repetition marks the moment the fear seems to come true.',
    tip: "Contrast the violent verb with the plant imagery of the second half to show the poem's movement from loss to renewal.",
  },
  "word: rot and die | What does 'rot' suggest here?": {
    why: 'Rot is what happens to living things when they die and decay. The mother tongue is imagined as a body part that will rot in her mouth if she never uses it: a language needs speaking to stay alive.',
    not: {
      'the language is spoilt by being mixed with English words':
        'The fear is not of mixing but of disuse. The tongue rots because it is not spoken, not because another language spoils it.',
      'the speaker is ashamed of her mother tongue':
        'Shame is not the feeling here. She fears losing a language she values, which is why the image is so distressing.',
      'the speaker forgets her English abroad':
        'It is the mother tongue that is at risk, living among speakers of another language. English is the language that crowds it out.',
    },
    more: "The decay here is answered later by growth and flowering, so the poem's two key images frame the whole: rot at the start, blossom at the end.",
    tip: "Use the extended metaphor of the tongue as a living thing to explain the poem's argument about identity and language.",
  },
  'The sedge is withered from the lake, / And no birds sing!': {
    why: "In the first stanza of Keats's La Belle Dame sans Merci, a questioner finds a knight wandering by a lake where the reeds have withered and no birds sing. The dead landscape mirrors the knight's sick, drained state.",
    more: 'The short fourth line, cut to four syllables, makes the silence felt. The same lines return almost unchanged at the end, so the poem closes where it began, trapping the knight in the empty scene.',
    tip: 'Use the setting to show how Keats makes nature reflect feeling, and comment on the circular structure that brings these lines back in the last stanza.',
  },
  "speaker: I met a lady in the meads / Full beautiful, a faery's child;": {
    why: "After three stanzas of questions, the knight starts to answer at stanza 4, telling how he met a beautiful lady in the meadows, a fairy's child with long hair and wild eyes. From here the poem is his story.",
    not: {
      'The questioner, on finding the knight by the lake':
        "The questioner speaks the first three stanzas, asking what ails the knight. This is the knight's reply, the beginning of his own story.",
      'The pale kings, warning the knight in his dream':
        'The kings appear near the end, crying that the lady has him in her power. They warn; they do not describe meeting her.',
      'The knight, waking alone on the cold hill side':
        'The knight does wake on the cold hill side, but that ends his story. This line begins it, with the meeting in the meadows.',
    },
    more: 'The poem is a ballad in two voices: the questioner, then the knight. Hearing the enchantment only from the knight leaves us unsure what really happened.',
    tip: "Comment on the change of speaker at stanza 4 when you write about structure, and on how the knight's story answers the opening question.",
  },
  "point: La Belle Dame sans Merci: Which line suggests that the knight's sickness is a slow dying?":
    {
      why: "The questioner sees a rose fading on the knight's cheek, its colour fast withering. A dying flower stands for his health and life draining away, and with the lily on his brow it makes him look close to death.",
      not: {
        'She looked at me as she did love, / And made sweet moan--':
          "This is the knight remembering the lady's apparent love. It describes the enchantment, not the sickness it leaves behind.",
        "The squirrel's granary is full, / And the harvest's done.":
          "This shows nature's autumn plenty, a contrast with the knight's emptiness. It is about the season, not his body.",
        'I set her on my pacing steed, / And nothing else saw all day long;':
          'This shows how completely she absorbed him, so that he saw nothing else. It describes his infatuation, not his fading health.',
      },
      more: 'Lily and rose are traditional emblems of beauty, here turned into signs of illness: pale skin and fading colour. Keats, who had trained in medicine, knew the look of a wasting fever.',
      tip: "Link the flower imagery to the poem's theme of destructive love, and to the withered sedge outside: the knight and the landscape decay together.",
    },
  "word: And sure in language strange she said, / I love thee true-- | What does 'strange' suggest here?":
    {
      why: 'The lady speaks a language the knight does not understand, yet he is sure she said that she loved him truly. The word strange makes the reader doubt him: her words of love may be his own hopeful guess.',
      not: {
        'that she speaks to him coldly and unkindly':
          'Nothing suggests coldness: she sighs, sings and finds him sweet foods. Strange is about the language being unknown, not unkind.',
        'that she is a traveller from a foreign land':
          "She is a faery's child, not a foreigner. Her strange language marks her as otherworldly, which makes her words impossible to check.",
        'that she is lying and he knows it already':
          'The knight believes her completely; that is his tragedy. Strange lets the reader suspect what he does not.',
      },
      more: "The word sure is ironic beside strange. Keats lets us hear the knight's certainty and our own doubt at once, one reason the lady stays a mystery.",
      tip: 'In an essay on the lady, use this line to show the knight as an unreliable narrator: we have only his word, and he could not understand hers.',
    },
  "word: Alone and palely loitering? | What does 'loitering' suggest here?": {
    why: 'To loiter is to hang about with no purpose. A knight should be riding on a quest, but this one lingers aimlessly by the lake, pale and alone, as if he has lost the will to go anywhere.',
    not: {
      'hiding from enemies, waiting to attack':
        'Nothing in the poem suggests a fight. He is not lying in wait; he is drifting, weak and lost.',
      'keeping watch as a knight on guard duty':
        "A guard has a purpose, but loitering means the opposite. The knight's duty and energy have drained away.",
      'resting for a while after a long journey on horseback':
        'Resting suggests he will recover and ride on. Loitering, with palely, suggests he cannot leave.',
    },
    more: 'Loitering is an unknightly word, which is the point: the hero of a romance has been reduced to an idle, sickly figure. The phrase returns unchanged in the last stanza.',
    tip: 'Contrast the noble title knight-at-arms with this drifting, pale figure to show how the lady has drained his strength and status.',
  },
  'seasoning none of my life': {
    why: "This phrase from Alice Walker's Poem at Thirty-Nine comes as the speaker, who now cooks as her father did, turns cooking into a way of living: she flavours her life differently each time, never following a fixed recipe.",
    more: 'Cooking links father and daughter: he loved to share food, and she has inherited his relish. The metaphor makes the inheritance creative, not a copy.',
    tip: 'Use the cooking imagery to show how the poem moves from grief to a sense of the father living on in his daughter.',
  },
  'speaker: a beating': {
    why: 'The third stanza recalls how her father taught her that being honest would not always bring a beating. The blunt two-word line lands hard after the build-up, hinting at the physical punishment that was part of the world he grew up in.',
    not: {
      'as she recalls him teaching her to manage money':
        'The money lessons come in the second stanza, about the paperwork of banking. The beating belongs to the lesson on honesty that follows.',
      'as she remembers how he relished cooking for others':
        'Cooking comes in the fourth stanza, after this. The beating belongs to the stanza about learning to tell the truth.',
      'as she imagines his admiration for the woman she is now':
        'That is the last stanza, imagining what he would have thought of her. The beating is a memory of her childhood.',
    },
    more: "The father's lessons are practical and moral at once. The poem honours him without hiding the harshness of his times, which makes her love more believable.",
    tip: 'Use the line to show how Walker presents her father honestly: loving and wise, but shaped by a hard world.',
  },
  "word: voluptuous | In Poem at Thirty-Nine, what does 'voluptuous' suggest about her father?": {
    why: "Voluptuous suggests rich, bodily pleasure. Attached to her father's love of cooking and sharing food, it makes a hard-working man sound sensuous and full of joy, delighting in feeding others.",
    not: {
      'he was a large man who ate too much':
        'Voluptuous can describe a full figure, but here it describes pleasure, not size. The poem celebrates his enjoyment, not overeating.',
      'he cooked carefully and always followed recipes':
        'Careful, recipe-bound cooking is the opposite of voluptuous delight. The word suggests abandon and relish.',
      'he ate greedily and would not share':
        'The pleasure attaches to sharing food, not hoarding it. Voluptuous is generous here, not selfish.',
    },
    more: 'The word is surprising for a working man, which is why it stands out. It shows the daughter seeing her father as a whole person, with appetites and joys.',
    tip: "Single surprising words are worth zooming in on: explain the usual meaning of 'voluptuous' and what it adds here.",
  },
  'When the stars threw down their spears, / And watered heaven with their tears,': {
    why: "This comes in the fifth stanza of Blake's The Tyger, as the speaker imagines the moment of creation. The stars throwing down their spears and weeping may suggest rebel angels defeated, or heaven's grief at what has been made.",
    more: 'The image is famously hard to pin down, which suits a poem made almost entirely of unanswered questions. It leads straight into the question of how its maker felt about his work.',
    tip: "Use the line when you write about the poem's religious questions: Blake makes creation sound like a cosmic event that even the stars react to.",
  },
  'speaker: What the hammer? what the chain?': {
    why: 'In the fourth stanza the creator becomes a blacksmith, with hammer, chain, furnace and anvil. The speaker imagines the tiger hammered into shape in a forge, a creation of fierce heat, strength and danger.',
    not: {
      'as the speaker asks whether the maker smiled at his work':
        'That question comes in the fifth stanza, with the stars and the lamb. The forge belongs to the stanza before.',
      'as the speaker wonders where the fire of its eyes burned':
        "The fire of the eyes comes in the second stanza, asking where it burned. The blacksmith's tools come later.",
      'as the opening question returns with one word changed':
        "The repeated first stanza closes the poem. This line is in the middle, among the blacksmith's tools.",
    },
    more: 'The rapid, unanswered questions in short lines sound like hammer blows. Blake makes the act of creation physical, violent and industrial.',
    tip: 'When you write about the creator, use the forge imagery to show a god of power and danger, quite unlike the gentle maker of a lamb.',
  },
  'point: The Tyger: Which line asks whether one creator could make both gentleness and terror?': {
    why: "The lamb stands for gentleness and innocence, and in Blake's companion poem The Lamb its maker is Christ. Asking whether the same God made the tiger raises the problem of how a good creator could also make something fierce and terrible.",
    not: {
      'What immortal hand or eye / Could frame thy fearful symmetry?':
        "This asks what kind of maker could create the tiger at all. It wonders at the creator's power, not at the lamb and the tiger together.",
      'On what wings dare he aspire? / What the hand dare seize the fire?':
        'This asks how daring the creator must have been to seize the fire. It is about his boldness, not about making opposites.',
      'And what shoulder and what art / Could twist the sinews of thy heart?':
        "This imagines the strength and skill needed to shape the tiger's heart. It does not set the tiger beside anything gentle.",
    },
    more: 'The question links Songs of Innocence and Songs of Experience. Blake does not answer it: the poem leaves the reader holding both creatures, and both sides of creation, at once.',
    tip: "Mention The Lamb as context, then explain how this single question sums up the poem's wonder and fear about God.",
  },
  'word: What immortal hand or eye / Dare frame thy fearful symmetry? | Which word changes from the first stanza, so that the question asks about courage rather than ability?':
    {
      why: "The first stanza asks what hand could frame the tiger's fearful symmetry; the last asks what hand dare. Could asks about ability; dare suggests that making the tiger needed courage, as if creation itself were risky.",
      not: {
        immortal:
          "Immortal appears in both stanzas unchanged, describing the creator's hand. It is not the word that alters.",
        frame:
          'Frame, meaning shape or build, is the same in both versions. The change lies in the verb that comes before it.',
        symmetry:
          'Fearful symmetry ends both stanzas. The repetition frames the poem, and only one word in it is different.',
      },
      more: 'Ending on a near repetition of the opening gives the poem a circular shape, but the single change shows the speaker moving from wonder to awe and something like fear.',
      tip: "When you write about structure, point out the one-word change between the first and last stanzas: small changes in a repeated stanza are often where a poem's meaning shifts.",
    },
  "word: In what furnace was thy brain? | What does 'furnace' suggest here?": {
    why: "A furnace is where a blacksmith heats metal to shape it. Asking in what furnace the tiger's brain was made pictures its mind as forged in intense heat, which explains its fierce, burning energy.",
    not: {
      "that the tiger's anger burns inside it like a high fever":
        'The tiger burns bright, but the furnace is about how it was made, not an illness. The question is where its brain was forged.',
      'that the tiger lives in a hot, dry land':
        "The tiger lives in the forests of the night, not a desert. The furnace belongs to the creator's workshop.",
      "that the tiger's brain was damaged by heat":
        'The heat makes the brain; it does not harm it. Like metal in a forge, the mind is shaped by fire into something strong.',
    },
    more: 'Fire runs through the poem, from the tiger burning bright to the fire of its eyes. The furnace makes that fire the very material the tiger is made from.',
    tip: "Group the blacksmith's words as a semantic field and explain what they suggest about the creator and the creature.",
  },
  'wid de whole of yu eye': {
    why: "This line comes near the end of John Agard's Half-caste. After a poem of halves, the speaker asks the listener to come back and look at him with the whole of their eye, turning the insult's own logic against the person using it.",
    more: "The word whole arrives after a stanza full of halves, and it repeats in the lines that follow. Agard's Caribbean dialect is itself a statement: the speaker uses his own voice, not standard English.",
    tip: 'Use the line to show the turn of the poem, where the speaker stops mocking the label and demands to be seen whole.',
  },
  'speaker: Excuse me / standing on one leg': {
    why: 'Half-caste opens with the polite phrase used to interrupt a stranger, at once undercut by slapstick: the speaker stands on one leg, acting out the idea of being half a person. The comedy hooks the listener before the challenge begins.',
    not: {
      'in the analogy about the English weather':
        "The English weather comes in the middle, after the painting. The poem's first words are this mock-polite interruption.",
      'as he mocks the idea of a composer mixing black and white keys':
        'The music analogy comes later, one of several examples. This is the opening, before any of them.',
      'at the end, promising the other half of his story':
        'The promise of the other half closes the poem. This line opens it, with the speaker acting out half a person.',
    },
    more: 'Excuse me is ironic: he is not really apologising, he is asking the listener to explain themselves. The physical comedy exposes how absurd the label is.',
    tip: "Show how the opening sets the tone of mocking politeness, and how the poem's humour becomes a weapon against prejudice.",
  },
  'word: half-caste till dem overcast | Which word puns on the label, turning it into a description of the weather?':
    {
      why: "Overcast, a sky covered by cloud, echoes the sound of half-caste. Applying the label to the mixed light and shadow of English weather, the speaker pushes it until it becomes a joke, and the joke exposes the label's absurdity.",
      not: {
        'half-caste':
          'Half-caste is the label itself, the word being mocked. The pun lies in the word that echoes it.',
        till: 'Till is a plain word of time, meaning until. It carries no echo of the label.',
        dem: "Dem is the dialect form of them, the clouds. It gives the speaker's voice, but it is not the pun.",
      },
      more: "Agard's comic analogies, a painting, the weather, a piece of music, all apply the label to things nobody would call half-caste, showing that it makes no sense for people either.",
      tip: 'Explain the pun and then its purpose: humour lets the speaker ridicule prejudice without anger, which can be more persuasive.',
    },
  'Gone far away into the silent land;': {
    why: "This is the second line of Christina Rossetti's sonnet Remember. The speaker imagines her own death as going far away into a silent land, a gentle image of the grave, where no voice is heard.",
    more: 'Death is never named in the first eight lines. Rossetti softens it into a journey and a quiet country, so the poem can speak to the beloved tenderly rather than with horror.',
    tip: 'Use the euphemism to show the tone of the opening, calm and loving, before the turn brings a more surprising wish.',
  },
  'speaker: Yet if you should forget me for a while': {
    why: 'Line 9 is the volta, the turn of the sonnet. After eight lines asking to be remembered, Yet brings a change of heart: if he forgets her for a while and remembers later, he should not grieve.',
    not: {
      'in the opening plea to be remembered when she is gone':
        'The opening repeats the plea to be remembered, the subject of the first eight lines. This line begins to soften that demand rather than repeating it.',
      'as she recalls the future he planned for them':
        'The planned future comes in the second quatrain, still asking to be remembered. The word Yet marks the shift away from it.',
      'in the last two lines, choosing his happiness over memory':
        'The last two lines complete the thought that starts here, but they come four lines later. This is where the change of mind begins.',
    },
    more: "Rossetti uses the sonnet's structure for the argument itself: eight lines of remembering, six that release the beloved. The turn on Yet is the hinge.",
    tip: "When you write about form, quote the volta and explain how the sonnet's structure carries the speaker from asking for memory to giving it up.",
  },
  "point: Remember: Which line shows the speaker putting her loved one's happiness before being remembered?":
    {
      why: "The last two lines choose the beloved's happiness: it is far better that he forget her and smile than remember her and be sad. Love, for this speaker, finally means letting go rather than holding on.",
      not: {
        'Remember me when I am gone away,':
          'This is the opening plea, asking to be remembered. It puts her own memory first, the wish the poem later gives up.',
        'When you can no more hold me by the hand, / Nor I half turn to go yet turning stay.':
          'These lines picture parting itself, and her reluctance to leave. They show their closeness, not her putting his happiness first.',
        'It will be late to counsel then or pray.':
          'This warns that after death there will be no time for advice or prayer. It is about time running out, not about his happiness.',
      },
      more: "The balance of forget and smile against remember and be sad works like a pair of scales. Rossetti's devout faith may lie behind the calm: death is a rest, not a horror.",
      tip: 'Use this ending to argue that the poem moves from need to selflessness, and compare it with poems in which the dead ask to be remembered.',
    },
  "word: For if the darkness and corruption leave / A vestige of the thoughts that once I had, | What does 'vestige' suggest here?":
    {
      why: 'A vestige is a small trace left of something that has almost disappeared. The speaker imagines the darkness and decay of death leaving only a trace of her thoughts, which she fears would make her loved one sad.',
      not: {
        'a garment worn by a priest at a funeral':
          'That is a vestment, a different word. Vestige means a remaining trace, which fits a thought surviving the darkness of the grave.',
        'a clear and lasting memory of a person':
          'A vestige is the opposite of clear and lasting: it is faint and partial. The speaker imagines only a trace remaining.',
        'a ghost that haunts the living':
          'Nothing in the line suggests haunting. A vestige is only a faint trace of her thoughts, not her spirit walking.',
      },
      more: 'Darkness and corruption are blunt words for death and decay, a sudden harshness in a gentle poem. Against them, a vestige is fragile and small.',
      tip: "Explain 'vestige' precisely, then show how Rossetti uses it to justify her final wish: a faint memory that brought sadness would be worse than forgetting.",
    },
  "word: Gone far away into the silent land; | What does 'silent land' suggest here?": {
    why: 'The silent land is death, from which nobody speaks again. Calling it a land she has gone far away into turns dying into a quiet journey, softening the subject for the beloved she is addressing.',
    not: {
      'a distant country she is travelling to':
        'The poem uses the language of travel, gone away, but the journey is death, not a real trip. She will not come back from this land.',
      'a quiet village far from the city':
        'Nothing in the poem is about country life. The silence is the silence of the dead, who can no longer speak.',
      'a convent where nuns keep silence':
        'Rossetti was deeply religious, but the poem is about dying, not entering a convent. The silent land is the grave, as the later darkness makes clear.',
    },
    more: 'The euphemism is typical of the first eight lines, which never name death directly. The later words for death and decay are far starker.',
    tip: 'Analyse the euphemism and its effect on tone, then contrast it with the harsher words of the last six lines to show the poem changing.',
  },
  'the land and sea felt a great emptiness, a yearning': {
    why: "This is the opening sentence of The Whale Rider, in the storyteller's voice of the Prologue. Before any people arrive, land and sea are personified as lonely, waiting for someone to complete them. Everything that follows is measured against this picture of people and nature belonging together.",
    more: 'Yearning is a word of desire, not just need, so nature is given feelings before any human appears. Later harm, from the poisoned trench to the stranded herd, then reads as harm done to someone with an inner life.',
    tip: 'Use the opening in any answer on people and the natural world: it sets the ideal of belonging that Koro mourns and that Kahu, in the end, restores.',
  },
  'speaker: No matter where you may go, you will always return': {
    why: 'Nanny Flowers says this in Summer, Chapter 6. Rehua has died, and her mother has asked to raise the baby. Nanny objects to the parting, and as Kahu is taken away she promises her that the birth cord buried at Whangara will always draw her home.',
    not: {
      "Nanny Flowers, as she buries Kahu's birth cord":
        'The burial in Spring is what gives the promise its power, but the words come later, spoken to the baby herself at the moment she is taken away.',
      "Koro Apirana, at Kahu's bedside in hospital":
        'The whales do bring Kahu back, which fulfils the promise, but Koro never makes it. When the baby is taken away, it is Nanny Flowers who objects and who makes the promise.',
      'Nanny Flowers, in the boat after Kahu dives for the stone':
        'Nanny is in the boat when Kahu brings back the stone, but what concerns her then is Koro: she decides that he is not ready to be told.',
    },
    more: 'The balanced clauses sound like a blessing, and the future tense turns a custom into a prophecy. It comes true twice: when Kahu returns to live in Whangara at six, and when the whales bring her back from the sea.',
    tip: 'Use the line to link tradition and destiny: the birth cord ritual that Koro refused to help with is the very thing that brings his heir home.',
  },
  "speaker: Boy or girl, it doesn't matter": {
    why: 'Koro says this in the Epilogue, Chapter 21. Kahu wakes in hospital and apologises, saying a boy would have held on to the whale. Weeping, Koro tells her she is the best great-grandchild in the world. The rule he has held since her birth is given up in the plainest words.',
    not: {
      'Nanny Flowers, on the day Kahu is born':
        "Nanny takes Kahu's side from the start, chasing Koro round the bay on the day she is born. But this reversal matters because it comes from the man who held the rule.",
      'Kahu, after her school ceremony':
        'After the ceremony Kahu says the opposite: she blames herself for being a girl, to protect Koro. She has absorbed his rule, which is why his reversal here matters so much.',
      'Koro Apirana, when Nanny gives him the stone':
        'On the shore, Nanny gives Koro the stone and points out to sea, and he understands who brought it back. He says these words later, to Kahu herself, when she wakes.',
    },
    more: 'After a novel of chants, prophecies and whale song, the reconciliation comes in the simplest words a great-grandfather could use. Their plainness is what makes them moving, and they complete a change the bull whale has already made by letting go of the past.',
    tip: "Use it as the end point of Koro's arc: open with his fury at Kahu's birth and close with this line to show how far he travels.",
  },
  "point: The Whale Rider: Which line shows that Kahu's destiny is also something she chooses?": {
    why: "Kahu whispers these words to herself on the whale's back in Winter, Chapter 18, before the longest dive, knowing it may last forever. Her destiny was foretold, but here she accepts its cost for herself, which makes her the self-sacrificing leader Koro was looking for among the boys.",
    not: {
      'where the afterbirth of a female child would be placed':
        "This retelling of the legend in the Epilogue shows the myth choosing Kahu. It supports destiny, not her own choice, and it is the bull whale's memory rather than her decision.",
      'the girl would need to be carefully taught':
        "The whales sing this in the Epilogue. It looks ahead to what others must give Kahu, Koro's teaching, rather than to anything she decides for herself.",
      'Let this be the one to flower when the people are troubled':
        "The whale rider's prayer over the last spear sets out the prophecy in the Prologue. It is destiny in its purest form, chosen by an ancestor centuries before Kahu is born.",
    },
    more: "The words are as plain as a child's, after a novel of chants and prophecy, and that plainness gives Kahu a courage of her own. The novel lets her be both the fulfilment of a legend and a girl who decides.",
    tip: 'When you write about destiny, balance the prophecy with this line: argue that Kahu is chosen by the myth and also chooses it.',
  },
  'word: if we have forgotten the communion then we have ceased to be Maori | Which word makes the bond between people and whales sound holy?':
    {
      why: 'Communion is a religious word, for sharing in something sacred. Koro uses it in the meeting house in Winter, Chapter 16, when the men argue over whether the stranded whale is natural or supernatural. He insists it is both, and the word makes the bond between people and whales holy rather than sentimental.',
      not: {
        forgotten:
          'Forgotten is about memory: it warns that the bond can be lost. It sets up the danger, but it does not make the bond itself sacred.',
        ceased:
          'Ceased means stopped. It raises the stakes, since losing the bond means ceasing to be something, but it names the loss, not the bond.',
        Maori:
          'Maori names the identity at stake, and the sentence ties that identity to the bond. The word gives the bond its importance, not its holiness.',
      },
      more: 'The conditional structure (if this, then that) turns a belief about whales into a test of identity. Here Koro is right, and the novel lets his wisdom stand, even while it shows how blind he is about Kahu.',
      tip: "Quote this when you argue that Koro is not simply wrong: his understanding of the bond with nature is the novel's own.",
    },
  "word: Our Koro was like an old whale stranded in an alien present | What does 'stranded' suggest here?":
    {
      why: 'A stranded whale cannot get back to the water and cannot save itself. Rawiri, thinking of home in Autumn, Chapter 11, uses the simile to show Koro as helpless rather than wicked: the world has moved on and left him behind. The image also foreshadows the real strandings of Winter.',
      not: {
        'that he has chosen to cut himself off from his family':
          "Nobody chooses to be stranded. The word takes choice away from Koro, which is why the simile softens the reader's judgement of him.",
        'that he is lost because he has travelled far from home':
          'It is Rawiri who is far from home, abroad in Autumn, when he thinks this. Koro has not moved: the present has changed around him.',
        'that he is to blame for the harm he does his family':
          'Koro does hurt Kahu, but this word points away from blame. Stranding happens to a whale; it is not something the whale does.',
      },
      more: 'The simile ties Koro to the ancient bull whale, another old leader held back by the past, and alien makes the modern world the strange place, not Koro. The comparison prepares for the Epilogue, where the whale changes first.',
      tip: 'This is the line to use when you argue that the novel judges Koro with sympathy. Analyse stranded, then link it to the bull whale.',
    },
  'it comes from afar and carries with it all my good intentions': {
    why: "This is from the parable that opens The Joy Luck Club. An old woman's swan was taken by immigration officials when she reached America, leaving her one feather. She imagines giving it to her daughter one day, with these words, once she can explain it in perfect American English.",
    more: "The feather is the book's first symbol: a story that means nothing to a daughter until it is told. The irony is that the waiting is the loss, since by the time the mother can explain, her daughter has grown up out of reach.",
    tip: 'Use the parable to open any essay on mothers and daughters or on language: every mother in the novel is holding a feather of this kind.',
  },
  'speaker: A girl can never ask, only listen.': {
    why: "Amah, Ying-ying's nursemaid, says this in The Moon Lady, on the day of the Moon Festival. She explains that a wish spoken aloud becomes a selfish desire, so a proper girl keeps quiet. The four-year-old learns the lesson far too well.",
    not: {
      'Popo, as she forbids An-mei to speak of her mother':
        "Popo does silence An-mei in Scar, forbidding her to mention her mother, but that is one forbidden subject, not a rule about wishes. This lesson belongs to Ying-ying's nursemaid.",
      "An-mei's mother, as she tells the story of the turtle":
        "The turtle in Magpies teaches a related silence, that grief should be swallowed rather than shown. That lesson is about tears, not wishes, and it belongs to An-mei's story, not Ying-ying's.",
      'Huang Taitai, as she trains Lindo to be a wife':
        'Huang Taitai does train Lindo in obedience in The Red Candle, but this rule is about wishes, and it is taught with love, by a nursemaid to a small child.',
    },
    more: 'The rule works too well. As an old woman Ying-ying says she kept her mouth closed so long that her daughter no longer hears her, and only in Waiting between the Trees does she decide to break her silence and tell Lena everything.',
    tip: 'Use this line in an essay on silence: it shows girls taught never to ask for what they want, which helps explain why the mothers struggle to tell their daughters anything.',
  },
  'speaker: In her hands, I always became the pawn.': {
    why: 'The adult Waverly says this in Four Directions, terrified that her mother will destroy her engagement to Rich. The chess champion of Rules of the Game now feels like the weakest piece on the board, with her mother in control of every move.',
    not: {
      'Waverly, as a child, after the quarrel in the market':
        'After the market quarrel the young Waverly does imagine her mother as her opponent at chess. But this sense of always losing belongs to the adult, years later, in Four Directions.',
      'Jing-mei, after the New Year crab dinner':
        "Jing-mei is humiliated at the crab dinner in Best Quality, outsmarted by Waverly once again, but chess is Waverly's world, and the pawn is her image for herself.",
      "An-mei, in Wu Tsing's house in Tientsin":
        'Second Wife does use An-mei in Magpies, winning her over with a pearl necklace, but the chess image belongs to Waverly, the champion, describing her own mother.',
    },
    more: 'The chess metaphor of Rules of the Game returns inverted: the champion is now the pawn and her mother the queen. Yet Four Directions ends with Waverly seeing her mother as a small old woman, which suggests the battle was partly in her own mind.',
    tip: "Trace the chess metaphor across Waverly's two stories to show how a daughter's view of her mother changes, from all-powerful opponent to ordinary old woman.",
  },
  'point: The Joy Luck Club: Which line shows a girl keeping both duty and independence at once?': {
    why: "Lindo makes this promise on her wedding day in The Red Candle, as she covers her face with the red marriage scarf. She will keep her parents' promise on the outside while keeping a self that no one can take, and that double strategy is how she later escapes the marriage.",
    not: {
      'This is how a daughter honors her mother.':
        "An-mei says this in Scar of her mother's sacrifice for the dying Popo. It is duty at its most complete, with no private self held back.",
      'Those who are obedient and those who follow their own mind!':
        "Suyuan shouts this in Two Kinds, and it says the opposite: a daughter must be one kind or the other. Lindo's promise shows that a girl can be both.",
      "You can't just pull me out of your life and throw me away.":
        'Rose says this to Ted in Without Wood. It is open independence, a refusal to be pushed aside, with no duty kept alongside it.',
    },
    more: 'The balanced sentence turns on the word but: duty in the first half, self in the second. Lindo hopes to pass the same double strength on to Waverly, and Double Face suggests that she could not.',
    tip: "Set this against Suyuan's two kinds of daughter: Lindo's promise shows that obedience and independence need not be a choice, only a matter of what is kept hidden.",
  },
  "word: My mother believed you could be anything you wanted to be in America. | Which word marks this as the mother's view rather than the narrator's?":
    {
      why: "The first sentence of Two Kinds is told by the adult Jing-mei, looking back. Believed frames the American Dream as her mother's faith, in the past tense, and hints with gentle irony that the narrator no longer shares it. The story goes on to test that belief on a nine-year-old.",
      not: {
        anything:
          "Anything shows how big the dream is, which is part of what will be tested, but it belongs to the mother's belief. It does not tell us whose view this is.",
        wanted:
          'Wanted is part of the dream itself, the idea that wishing is enough in America. It reports what the mother thought rather than distancing the narrator from it.',
        America:
          'America is where the dream is placed, the land of opportunity the mothers crossed an ocean to reach. It names the setting of the belief, not who holds it.',
      },
      more: 'The dream soon turns into pressure: prodigy lessons, a talent show, a quarrel at the piano. Later in the story Jing-mei turns it round: she did not believe she could be anything, only herself.',
      tip: "Use this opening line in essays on the American Dream, and comment on believed: the adult narrator's distance from her mother's faith is where the irony lies.",
    },
  'word: I wanted my children to have the best combination: American circumstances and Chinese character. | Which word stands for the inner self, the values Lindo hoped to hand on?':
    {
      why: "Lindo sets out the mothers' shared dream in Double Face. Character is the inside of a person, the values and nature she wanted her children to keep from China. It is the half of her recipe that, she admits, did not survive an American upbringing.",
      not: {
        best: "Best shows how high Lindo's hopes were, but it describes the mixture as a whole. It does not name either part of it.",
        combination:
          'Combination names the mixture itself, with the colon setting out a recipe. It joins the two parts rather than standing for the inner one.',
        circumstances:
          "Circumstances are the outside of a life: the chances, schools and freedoms of America. The novel shows them shaping character, which is exactly why Lindo's plan failed.",
      },
      more: "Lindo's next thought admits that the two do not mix. Circumstances make character, so an American childhood made an American daughter, and Lindo blames herself for it.",
      tip: 'This is the key sentence for any question on identity or the American Dream. Analyse the contrast between circumstances and character, outside and inside.',
    },
  'Or do I treat you like a vacuum cleaner?': {
    why: "Miss Helen says this in Part Three, the first time she meets Klara, when Klara brings Josie's picture to Rick's house. Unsure how to behave, she jokes about whether to treat Klara as a guest or as an appliance, then apologises for her manners.",
    more: 'The joke asks the question the whole society has not answered about AFs: are they guests or machines? It looks forward grimly to the ending, when Klara is stored in the Yard among discarded machines.',
    tip: 'Use this line in an essay on technology and the disposable: it names the confusion between usefulness and worth that the ending makes painfully real.',
  },
  'speaker: The more I observe, the more feelings become available to me.': {
    why: "Klara says this in Part Two, in the car on the way to Morgan's Falls, after the Mother says she envies her for having no feelings. The parallel structure makes feeling grow with attention, as if Klara learns emotions by watching people.",
    not: {
      "Klara, to Rick after the interaction meeting at Josie's house":
        'After the meeting Klara explains the lifted children to Rick, but she talks about their fear of loneliness, not her own feelings. This line answers the Mother, who envies her.',
      'Rosa, beside Klara in the store window':
        "Rosa shares the window but misses most of what Klara notices. The line ties feeling to observation, which is Klara's gift and the reason the Manager praises her.",
      'Klara, to the Manager in the Yard':
        "In the Yard Klara talks to the Manager about Josie and the Sun, looking back on all she has learned. This line comes much earlier, in answer to the Mother's envy.",
    },
    more: "Available is a machine's word, as if emotions were features being unlocked, so the sentence is touching and unsettling at once. The novel never settles whether Klara's feelings are real, and this line keeps the question open.",
    tip: 'Use this line on whether Klara has a human inner life: analyse available and the repeated the more, and argue both ways before you decide.',
  },
  'speaker: something unreachable inside each of us': {
    why: 'Mr Capaldi says this to the Mother in Part Four, in the studio where the AF copy of Josie waits behind the Purple Door. He names the belief only to dismiss it as old-fashioned sentiment, because he thinks science can now reach everything in a person.',
    not: {
      'The Mother, to Mr Capaldi in his studio':
        "The Mother is in the studio and half admits Paul's doubts, but she does not speak these words. Capaldi does, and only to wave the belief away as old-fashioned.",
      'The Father, driving Klara through the city':
        'Paul does share the belief, asking Klara soon afterwards whether she believes in the human heart. But it is the sceptic, Capaldi, who puts it into these words, in order to reject it.',
      'Klara, to the Manager in the Yard':
        'In the Yard Klara does decide what made Josie special, but she places it in the people who loved her, not inside each person. These words belong to the man who would copy Josie.',
    },
    more: "Unreachable is the key word: Capaldi means that nothing in a person is beyond science, so Klara could carry Josie on. The rest of the novel tests his claim, through Paul's fear and finally through Klara's own answer in the Yard.",
    tip: "Quote this when you write about what makes a person unique: set Capaldi's dismissal against Paul's question and Klara's conclusion, and argue which view the novel favours.",
  },
  'point: Klara and the Sun: Which line suggests that Klara may be shaping her story as she tells it?':
    {
      why: 'Klara says this in the Yard in Part Six, among discarded machines. It reveals what the whole narration may be: Klara at the end, sorting her memories. Putting them in the right order suggests she is arranging a story, not simply recording one, so her account may be kinder than events were.',
      not: {
        "I'd always longed to see more of the outside":
          'Klara says this of her first morning in the store window. It shows her wish to observe, which makes her a careful witness, but it says nothing about arranging what she saw.',
        'It might be like a house with many rooms.':
          "This is Klara's answer to Paul's question about the heart in Part Four. It is a metaphor for a person, not a comment on how she tells her story.",
        "it wasn't inside Josie. It was inside those who loved her":
          'Klara also says this in the Yard, to the Manager, but it is her verdict on what made Josie unique. It concerns love, not the way she orders her own account.',
      },
      more: "Ishiguro's narrators often understand less than the reader, or tell events more kindly than they deserve. Knowing that Klara is sorting her memories in the Yard sends the reader back to read around her as well as through her.",
      tip: "Use this line when you discuss Klara as a narrator: argue that the gap between what she reports and what we can see is one of Ishiguro's key methods.",
    },
  'word: a kind of angry exhaustion in her eyes | Which word shows Klara hedging, careful not to claim more than she can know?':
    {
      why: "Klara describes Josie's mother this way in Part One, on Josie's first visit to the window. The phrase a kind of is a hedge: Klara admits that her label only comes close to what she sees. That careful precision catches grief before the reader knows its cause.",
      not: {
        angry:
          "Angry names one of the feelings Klara reads in the Mother's face. It is part of the description, not a sign of Klara's caution about it.",
        exhaustion:
          "Exhaustion is the other half of the pairing: anger has energy and exhaustion has none. It describes the Mother; it does not qualify Klara's claim.",
        eyes: 'Eyes is where Klara looks for feeling, a sign of how closely she observes. It places the emotion rather than softening her claim about it.',
      },
      more: "The pairing of anger and exhaustion suggests a woman worn out by fighting something she cannot beat. It is the first clue to Sal's death, Josie's illness and the Mother's plan.",
      tip: "Comment on Klara's careful phrasing when you write about her as a narrator: she is precise about what she sees and cautious about what it means.",
    },
  "word: Supposing I could do something special to please you. | Which word turns Klara's plea to the Sun into the opening of a deal?":
    {
      why: "Klara speaks to the Sun inside her mind in Mr McBain's barn, in Part Three. Her first request, that he heal Josie as he healed Beggar Man, seems to fail, so she bargains. Supposing introduces an offer, a deed in exchange for a favour, which is how a prayer becomes a deal.",
      not: {
        something:
          'Something is the deed she offers, still unnamed. It is the content of the deal, not the word that turns her plea into a proposal.',
        special:
          'Special raises the value of the offer, so that the Sun will think it worth accepting. It describes what she will give rather than making the plea a bargain.',
        please:
          'Please, meaning to satisfy here, treats the Sun as a person with moods to be won over. It shows how she sees him, but it names the aim of the deal, not its terms.',
      },
      more: 'The bargain gives the plot its task: Klara must find and destroy the Cootings Machine, whose Pollution she believes has angered the Sun. Prayer has turned into a vow, and later into sacrifice.',
      tip: 'Use this line on faith and the Sun: Klara reasons like a trader as well as a believer, which makes her faith both touching and strange.',
    },
  'No one spat on us from a height or told us to go home.': {
    why: "Gopi says this of the fort near the family's home, a place where no other children went. By listing what did not happen there, she reveals what usually happened elsewhere: the racist abuse many South Asian families met in 1980s Britain.",
    more: "The flat, matter-of-fact tone is more disturbing than a dramatic scene would be, because it implies the girls are used to such treatment. It is one of the novel's few direct glimpses of the hostility outside the family's community.",
    tip: 'Use this line for context: link it to racist violence against South Asians in 1970s and 1980s Britain, and comment on how understatement makes it more powerful.',
  },
  'speaker: it is not too late for your girls': {
    why: "Aunt Ranjan says this to Pa in the Edinburgh kitchen, at the meal that ends the family's mourning, days after the funeral. Having told him the girls are wild, she adds that she warned Ma, and turns the daughters into a problem to be solved.",
    not: {
      'Uncle Pavan, in the Edinburgh kitchen after the funeral':
        "Uncle Pavan is in the kitchen, but he is the gentler of the two: he tries to tell a happy story about Pa's marriage and cannot finish it. The warning is his wife's.",
      "Ged's mother, as Pa confides in her at Western Lane":
        "Pa does confide in Ged's mother, outside the watching circle of relatives. This formal warning, made while bringing up Ma, belongs to the relative who thinks the girls are wild.",
      'Aunt Ranjan, when she comes to stay near the end':
        'Aunt Ranjan and Uncle Pavan do come to stay near the end, and the Edinburgh offer follows. But this warning comes in the first chapter, days after the funeral.',
    },
    more: "Her formal, uncontracted English sounds like a verdict. In the same breath she claims not to blame Ma while doing exactly that, and Mona answers by banging the pressure cooker down. The line sets up the threat that someone else may decide the girls' future.",
    tip: "Use this line on community and control: it foreshadows the Edinburgh offer, but argue that fear, not only a wish to control, lies behind Aunt Ranjan's words.",
  },
  'speaker: in one day we had exposed him, left him behind': {
    why: 'Gopi thinks this as Pa looks at the new racket she and her sisters have brought back from London. He runs a thumb round its frame and says they did well, but his shoulders and throat say the opposite: in a single day his daughters have left him behind.',
    not: {
      'after Gopi hits Pa in the face with the ball':
        'That blow, on the day she overhears Pa at Western Lane, comes later and is never explained. This line belongs to a day out, which is why its strong verbs are so striking.',
      'as Pa tells Gopi she may go to Edinburgh':
        'That moment, near the end, concerns Gopi alone, and she senses that agreeing will bring them close again. This line belongs to a day all three sisters spent away.',
      'after Gopi phones Uncle Pavan about Pa':
        "Gopi's call does reveal Pa's state to the relatives, but it comes later, after the girls hear him talking to Ma at night. This line belongs to the racket scene.",
    },
    more: "Exposed and left him behind are strong verbs for a shopping trip, and that is the point: small events carry the weight of the loss. Gopi reads her father's body because his words say the opposite.",
    tip: "Use this moment to show Maroo's method: feeling is shown through gesture and the body, and the reader, like Gopi, has to interpret it.",
  },
  "point: Western Lane: Which line shows Pa's grief as physical pain?": {
    why: "Gopi notices this about Pa in the months after Ma's death. Speech itself has become painful for him: his grief shows as a bodily symptom, not in anything he says. It explains the silences around the girls, since Pa is less refusing to talk than unable to.",
    not: {
      "I knew from his silence that he wasn't going to move first":
        "In the first paragraph Pa's silence is a kind of instruction on court, as he waits for Gopi to serve. It shows how he communicates, not grief causing him pain.",
      'the mental and physical burden of being something she was not':
        "The cost here is physical too, but it is Mona's, as she takes over the house at fifteen. The line is about her, not Pa.",
      'there was a coolness in them that we were used to':
        "This is Pa's look at Aunt Ranjan in the Edinburgh kitchen, a cool resistance to being managed. It shows distance, not pain.",
    },
    more: 'Seven words make a whole state of mind visible. Maroo gives grief to the body throughout, from Uncle Pavan choking on his story in Edinburgh to Mona banging down the pressure cooker, so the reader learns to read the family as Gopi does.',
    tip: 'Use this when you write about silence: argue that Pa cannot talk rather than will not, and that his daughters have to read his body instead.',
  },
  'word: I knew that if I said yes, then we would be close again | Which word reveals that Gopi and Pa have grown apart?':
    {
      why: 'Gopi thinks this at Western Lane, near the end, as Pa struggles to tell her she may go to live in Edinburgh. Again implies a closeness they once had and have lost. The painful paradox is that agreeing to leave him is her way back to him.',
      not: {
        knew: "Knew shows Gopi's certainty, and that she reads Pa before he finishes speaking. It tells us how sure she is, not that they have drifted apart.",
        yes: 'Yes is the answer she is already giving, before Pa can tell her the choice is hers. It shows her readiness to agree, not the distance between them.',
        close:
          'Close names what she hopes for, the bond with Pa. On its own it does not tell us the bond has been lost; the word after it does.',
      },
      more: "She answers before Pa can say the choice is hers, sparing him the burden of choosing. In the end she does go, and the novel asks what the family's silence has cost her.",
      tip: "Use this line for the novel's central question, whether Pa can let a daughter go: analyse the paradox that leaving is the way to be close again.",
    },
  "word: with a feeling of having been rescued that I raised my racket and served | What does 'rescued' suggest here?":
    {
      why: 'In the first paragraph Gopi, exhausted in the year after Ma died, cannot go on with a drill while Pa waits in silence. The steady sound of a player on the next court revives her, and rescued makes the game itself her saviour, giving back what grief has drained.',
      not: {
        'that Pa takes pity and lets her stop the drill':
          'Pa does not move: he waits in silence at the back of the court for her to serve. Nothing he does rescues her here.',
        'that another player arrives to take her place':
          'The player she hears is drilling on the next court. It is the sound of that game, not a substitute, that revives her.',
        'that she is relieved the session is over at last':
          'The session is not over. Rescued is the feeling with which she raises her racket and serves again, so the rescue lets her keep going.',
      },
      more: 'It is a surprising word in a scene of exhaustion and pressure. One reading is that squash holds Gopi as nothing else can after her loss; a darker one notes that she is rescued only in order to keep serving.',
      tip: "Open an essay on squash and grief with this word: weigh whether the court is Gopi's refuge, Pa's regime, or both at once.",
    },
  'A chipped glass is ruined forever.': {
    why: 'Evelyn says this in her first scene, polishing glasses for the flat her daughter is about to move into. The blunt verdict reveals her way of thinking: damage cannot be repaired, only put out of sight.',
    more: 'Read against what the audience learns later, the glass becomes an image of Evelyn herself, damaged in childhood and convinced the damage is permanent. The absolute forever leaves no room for healing.',
    tip: 'Use the glass as an image of Evelyn when you write about memory and the buried past: she polishes and orders things to keep the damage out of sight.',
  },
  'speaker: If you don’t know it you might forget who you are.': {
    why: "The Nazi Border Official says this on the train out of Germany, as he searches Eva's case and orders her to know her label number. He means that without it she is lost, but Samuels makes the line a prophecy: Eva will forget who she is in another way, by becoming Evelyn.",
    not: {
      'Helga, as she teaches Eva to sew on her buttons':
        'Helga does drill Eva before she leaves, making her sew on her own buttons, but the demand that Eva know her number comes from the official who has reduced her to it.',
      "Lil, as she takes off Eva's label":
        'Lil does the opposite: within minutes of meeting Eva she takes the numbered label off. The order to know the number comes from the man searching her case.',
      'The English Organiser, as Eva arrives at the station in England':
        'The English Organiser meets Eva in England, stumbling over her name and losing patience with her tears. The order to learn her number comes from the official on the train out of Germany.',
    },
    more: 'One of the most frightening men in the play speaks one of its truest lines. The same actor plays the Ratcatcher, so the warning about losing herself comes from the figure who takes children away.',
    tip: "Use this line on identity: set it against Lil removing the label and Evelyn's new name, and argue that Eva does forget who she is, though not as the official meant.",
  },
  'speaker: Stay my little girl forever.': {
    why: 'Evelyn says this in the last scene, when Faith finds her crying and asks how she can help. After pressing Faith to go and live in her new flat, she reveals the wish underneath: like Helga and Lil before her, she wants to keep the daughter she is sending away.',
    not: {
      'Helga, begging Eva to board the boat':
        'At the quayside Helga begs Eva to come with her to New York. That is a plea to start again together; this wish to stop time comes from Evelyn, to her own daughter.',
      'Lil, as Eva leaves to be evacuated with her gas mask box':
        'Lil does admit she did not want Eva to go when she sent her away as an evacuee, but this wish is spoken decades later, by Eva herself, now a mother.',
      "Helga, as Eva's train leaves Hamburg":
        'Helga sends Eva away to protect her and has taught her to manage on her own, not to stay little. These words belong to the adult Evelyn.',
    },
    more: "The imperative reveals what Evelyn has hidden behind her briskness. The play's three mothers each send a daughter away while wanting to keep her, and Evelyn, who was sent away herself, ends by asking for the impossible.",
    tip: 'Use this line in an essay on mothers and daughters: compare Evelyn with Helga and Lil, and show that love and letting go are knotted together in all three.',
  },
  "point: Kindertransport: Which line turns Helga's charge of betrayal into a story of survival?": {
    why: "Evelyn says this to Helga at the quayside, picturing herself thrown into the sea with her mother's baggage on her shoulders. Letting go is the crime Helga accuses her of, and also the only way she could stay alive, so the metaphor makes betrayal into survival.",
    not: {
      'Part of me is dead because of you.':
        "Evelyn says this to Lil, not Helga, in Act Two, Scene One. It is an accusation of her own, blaming her foster mother, rather than a defence against her mother's charge.",
      'Germany spat me out. England took me in.':
        'Evelyn tells Faith this in the last scene, before the quayside is played. It is her neat, often-told version of her life, and it answers no charge from Helga.',
      'The whitewash has been stripped away and underneath is pure filth.':
        'Here Evelyn describes her uncovered past as dirt. It shows her shame, not a defence of her choice to let go.',
    },
    more: "It is the play's clearest defence of Evelyn. Helga has argued that she lost her husband but not herself; Evelyn answers that a drowning child had to drop the weight to survive, and the audience must weigh both.",
    tip: 'Use this line when you weigh whether Eva betrayed her mother: the metaphor lets you argue that survival, not disloyalty, explains her choice.',
  },
  "word: Over. Finished. Done. Goodbye. | Which word turns Lil's comfort into a farewell to Eva's whole past?":
    {
      why: 'Lil says this as she takes the numbered label off Eva at the station. The first three words, simplified for a child with no English, mean that the persecution is over. Goodbye goes further: it is a farewell to everything the label connected her to, her family and her home included.',
      not: {
        Over: 'Over tells Eva that the frightening journey is behind her. It comforts her rather than bidding anything farewell.',
        Finished:
          "Finished, like over, means the ordeal has ended. It is reassurance, part of Lil's kindness, not the word that says goodbye to Eva's past.",
        Done: 'Done closes the list of reassurances: the job is complete. It ends the ordeal, but only the last word turns the moment into a parting.',
      },
      more: 'The four minor sentences sound like kindness, and they are meant kindly. But they capture Lil exactly: warm and well meant, but careless of what she is erasing. It is the first step in turning Eva into Evelyn.',
      tip: "Use this line to show that Eva's Englishness is built piece by piece, each piece a loss, and that kindness can erase as well as rescue.",
    },
  'word: Through our children we live. That’s how we cheat death. | Which word suggests that death can be outwitted, though not defeated?':
    {
      why: "Helga says this at the start of Act Two, returning to her idea of children as the family's treasure. Cheat makes survival a trick: death cannot be beaten, but it can be got round if the children live on. The line hands Eva an enormous responsibility.",
      not: {
        children:
          'Children names the means of survival, the next generation. It says how the family lives on, not that death is outwitted.',
        live: 'Live is the outcome, the family surviving through its daughters. It states the hope but carries no sense of a trick.',
        death:
          'Death is the opponent here. The word names what must be got round, not the way of getting round it.',
      },
      more: "The line explains why Helga will later treat her daughter's refusal as a second death: if children are how the family survives, losing Eva means losing everything. Love becomes a burden placed on a child.",
      tip: "Use this line to explain the quayside quarrel: Helga has staked her survival on Eva, which makes her daughter's refusal feel to her like a death.",
    },
  'the eater of white left-overs': {
    why: 'A girl in the market flings this insult at Sergeant Amusa in Scene 3, as the women and girls drive him and his constables out. It makes him a servant who lives on what his colonial masters throw away.',
    more: "The insult starts one of the play's key motifs. The idea of left-overs later passes from the sergeant to the Horseman himself, and the audience watches Elesin fall into Amusa's place.",
    tip: 'Track the left-overs motif from Amusa to Elesin in an essay on honour and shame: the word measures who has chosen scraps over the feast.',
  },
  'speaker: The world is not a constant honey-pot.': {
    why: "Elesin says this in Scene 1, when the market women ask whether anything will hold him back. He means he has tasted the world's sweetness and can leave it, but the metaphor admits his appetite even as it renounces it: life is something to be eaten.",
    not: {
      'Iyaloja, as she warns Elesin about the bride':
        "Some revision materials give this line to Iyaloja, but it is Elesin's. Iyaloja's own warning comes later in the scene, when she gives him the bride on a condition.",
      'The Praise-Singer, teasing Elesin as he hurries through the market':
        "The Praise-Singer does tease Elesin as he sweeps into the market, and praises him extravagantly, but the claim that the world's sweetness can be left behind is Elesin's own.",
      'Elesin, chained in his cell at the end':
        "In his cell Elesin's boasts are over and his world is in ruins. This confident line comes from the start, in the market, when he still claims he can leave the world behind.",
    },
    more: 'The appetite surfaces again minutes later, when Elesin sees a beautiful young woman and asks for her as his bride. Renunciation and desire sit side by side in one image, which is why the line matters to the question of his failure.',
    tip: 'Use this line when you discuss why Elesin fails: argue that his love of the world is visible from the first scene, long before Pilkings intervenes.',
  },
  'speaker: Life should never be thrown deliberately away.': {
    why: "Jane says this to Olunde at the ball in Scene 4, about the ship's captain who blew up his ship to save the people round a harbour. She states the Western view as a rule without exceptions, yet her own story is of a man who chose to die for others.",
    not: {
      'Olunde, arguing with Jane at the ball':
        'Olunde is in the argument, but he takes the other side: he asks quietly about the innocent people the captain saved, showing that self-sacrifice can affirm life.',
      'Pilkings, to Elesin in the cell':
        "In the cell Pilkings believes he has saved Elesin's life, but this rule is spoken earlier, at the ball, by Jane, as she argues with Elesin's son.",
      'Pilkings, deciding to stop the ritual':
        "Pilkings does order the arrest in Scene 2, assuming at first that the report means a ritual murder. This rule about life is his wife's, spoken at the ball.",
    },
    more: "Deliberately is the word that carries the rule. Olunde's replies expose its limit: Britain honours self-sacrifice when it is its own, as in the war, but cannot see the same meaning in Elesin's duty.",
    tip: "Use this exchange to show the play testing Western values on their own terms: Jane's rule cannot account for the sacrifice her own culture admires.",
  },
  "point: Death and the King's Horseman: Which line admits that the failure came partly from Elesin himself?":
    {
      why: 'Elesin says this to his bride in his cell in Scene 5. After blaming the white man and the gods, he admits that his will was weakened not only by the intrusion but by his own desire for the world. Earth-held makes the ground itself cling to his limbs.',
      not: {
        'You did not save my life District Officer. You destroyed it.':
          'Elesin says this to Pilkings in the same scene, but it puts the blame on the District Officer: the rescue destroyed a life of honour. It is an accusation, not a confession.',
        'My rein is loosened. / I am master of my Fate.':
          "This is Elesin's boast in Scene 1, claiming to command his own fate. It is the claim the play measures him against, made before any failure.",
        'Life is honour. / It ends when honour ends.':
          'Elesin states his code in Scene 1. It explains why his survival is a disaster, but it admits nothing about his own weakness.',
      },
      more: "It is the strongest evidence that the failure was partly his. The image recalls the Praise-Singer's admission in Scene 3 that he slid a lump of earth between Elesin's slippers to keep him longer.",
      tip: "Weigh this confession against Elesin's blame of Pilkings when you argue why he fails: the Author's Note calls the colonial factor only a catalyst.",
    },
  "word: it's always lurking under the surface somewhere | Which word makes Yoruba custom sound like a predator waiting to strike?":
    {
      why: "Pilkings says this in Scene 2, after reading Amusa's report. He assumes at once that it means ritual murder, and lurking makes the people's custom a hidden menace, waiting beneath a calm surface. It reveals his settled view of the people he governs.",
      not: {
        always:
          'Always makes the danger permanent, part of his assumption that the custom never changes. It says how constant the threat is, not what kind of threat.',
        surface:
          'Surface suggests that calm is only skin-deep. It places the danger out of sight, but it is lurking that gives it the menace of something waiting to strike.',
        somewhere:
          'Somewhere makes the danger vague and everywhere at once. It shows how little Pilkings actually knows, not that the custom is waiting to attack.',
      },
      more: "Joseph soon corrects the fact: no one is being murdered, since Elesin's death is a duty, not a killing. The correction changes nothing in Pilkings's attitude, which is the point: his image comes from fear, not knowledge.",
      tip: 'Use this line on colonial blindness: analyse lurking to show Pilkings treating a whole culture as a threat to be watched and stamped out.',
    },
  "word: be sure the seed you leave in it attracts no curse | Which word picks up Elesin's own image for the child his marriage may bring?":
    {
      why: "Iyaloja says this near the end of Scene 1, as she blesses Elesin's marriage to the young woman promised to her son. Seed takes up Elesin's own image of new life left in the earth he is leaving, and makes it a condition: that life must bring no curse.",
      not: {
        sure: "Be sure makes the blessing a command with a condition. It shapes the warning, but it is not Elesin's image.",
        leave:
          'Leave reminds Elesin that he is departing this world tonight. It refers to his going, not to the new life he hopes will continue after him.',
        curse:
          "Curse is the threat Iyaloja attaches, the danger the audience hears as foreshadowing. It is her word, not Elesin's image of continuity.",
      },
      more: "In Scene 5 Iyaloja reminds Elesin that she warned him exactly this, and the Bride's silent presence outside his cell makes the curse visible.",
      tip: "Use this line to show Iyaloja's authority: her blessing carries a warning, and she turns Elesin's own images into judgements on him.",
    },
  'the black flower of civilised society, a prison': {
    why: 'The narrator writes this in Chapter 1, describing the Boston prison and the weeds that grow around it. Every new colony, he observes, soon sets aside ground for a cemetery and a prison, and the prison is pictured as a dark flower that society itself grows. Beside its door grows a wild rose-bush.',
    more: "The metaphor makes punishment something that grows naturally out of civilisation, a bleak claim about every society, not only the Puritans'. The wild rose answers it at once with a hint of nature's kindness, and the black flower returns later in the novel.",
    tip: 'Use the opening image to argue that the novel is about how communities create outcasts: the prison and the rose set judgement against mercy before Hester has even appeared.',
  },
  'No man, for any considerable period, can wear one face to himself and another to the multitude, without finally getting bewildered as to which may be the true.':
    {
      why: 'The narrator writes this in Chapter 20, as Dimmesdale returns from the forest after agreeing to flee with Hester, pleased that the ship will sail after his Election Sermon so that he will seem to have done his duty. After seven years of hiding his guilt he can no longer tell which self is real.',
      more: 'The metaphor of two faces turns hypocrisy into a loss of identity, not just a lie told to others. It explains the wild impulses that seize the minister on his walk home, when he is tempted to say shocking things to his own parishioners.',
      tip: "Use it as the key quotation on Dimmesdale's hidden guilt: link it to the narrator's closing moral about being true, and argue that secrecy harms the one who keeps it most.",
    },
  'speaker: He bears no letter of infamy wrought into his garment, as thou dost, but I shall read it on his heart.':
    {
      why: "Roger Chillingworth says it in Chapter 4, when he visits Hester in her cell as a physician on the day she stood on the scaffold. She will not tell him her lover's name, so he vows to find the man himself: the lover wears no letter, but his guilt will show in his heart.",
      not: {
        'Chillingworth, confronting Hester on the shore':
          'On the shore in Chapter 14 Chillingworth has long since found the man and tormented him for years. This vow to search for the lover belongs to their first meeting.',
        'Mr Wilson, urging Hester on the scaffold':
          'Mr Wilson does urge Hester to name the father, but he hopes for her confession and repentance. He never threatens to hunt the man down himself.',
        'Mistress Hibbins, talking to Hester on Election Day':
          "On Election Day Mistress Hibbins hints that she knows the minister's secret, but she talks of witchcraft and the Black Man, and she already knows the man. This is a vow to discover him.",
      },
      more: "The contrast between garment and heart states the novel's whole structure: Hester's sin is worn outside, her lover's hidden within. Read shows how Chillingworth thinks, as a scholar treating a man as a text, and the line is a prophecy the last chapters fulfil.",
      tip: "Use it to introduce Chillingworth's revenge: it begins as an intellectual search and becomes a slow violation of another man's heart, so quote it beside the narrator's later judgement of what he has become.",
    },
  'speaker: ... behold me here, the one sinner of the world!': {
    why: 'Dimmesdale cries this in Chapter 23, on Election Day, when he leaves the procession after his greatest sermon and climbs the scaffold with Hester and Pearl. Before the whole town he confesses at last, tears open his band to show his breast, and dies.',
    not: {
      'Dimmesdale, on the scaffold at midnight':
        "At midnight in Chapter 12 he does stand on the scaffold, but in the dark, with no one to see him, and he refuses Pearl's plea to stand there with them by daylight.",
      'Dimmesdale, preaching from his pulpit':
        'In the pulpit he often calls himself the worst of sinners, but only in general terms, so his congregation reveres him more. Here at last he says it plainly, and shows them why.',
      'Hester, on the scaffold in the opening scene':
        'In the opening scenes Hester stands on the same scaffold before the town, but she endures it in silence, and when pressed she refuses to name her lover. She makes no speech to the crowd.',
    },
    more: "The confession completes the novel's three scaffold scenes: Hester alone at the start, the secret family at midnight in the middle, the public revelation at the end. The man who hid his guilt for seven years finally does what Pearl asked of him.",
    tip: "Use the three scaffold scenes to show structure: each marks a stage in Dimmesdale's struggle between hiding and confessing, and the last resolves it at the cost of his life.",
  },
  'point: The Scarlet Letter: Which line presents becoming evil as a matter of practice, open to anyone, rather than a fixed nature?':
    {
      why: "The narrator says this of Chillingworth in Chapter 14, when Hester meets him on the shore and sees how he has changed in seven years. He was a calm, kindly scholar; by giving himself to tormenting Dimmesdale, doing a devil's work, he has become a devil.",
      not: {
        'It is our fate. Let the black flower blossom as it may!':
          'Chillingworth says this on the same shore, but he claims the opposite: that evil is fate, a dark necessity he cannot help. The reader, who has watched him choose, can see through him.',
        'He has violated, in cold blood, the sanctity of a human heart.':
          "Dimmesdale says this in the forest to rank Chillingworth's sin above his own. It condemns the deed but does not explain how a man becomes evil.",
        'He had spoken the very truth, and transformed it into the veriest falsehood.':
          "The narrator says this of Dimmesdale's sermons: confessing in vague terms makes his true words deceive. It is about hypocrisy, not about how a man turns into a devil.",
      },
      more: "The calm, almost scientific phrasing makes the idea more frightening: anyone can become a devil by doing a devil's work for long enough. Hawthorne presents evil as chosen and practised, not inherited, which is the novel's sharpest point about revenge.",
      tip: "Use it to argue that Chillingworth commits the novel's worst sin, and pair it with his own excuse of fate to show a man refusing responsibility for what he has made of himself.",
    },
  "word: He now dug into the poor clergyman’s heart, like a miner searching for gold; or, rather, like a sexton delving into a grave | What does 'sexton' suggest here?":
    {
      why: 'A sexton was the church officer who dug graves. The narrator corrects his own simile in Chapter 10: Chillingworth, probing the sick minister, is less a miner seeking gold than a gravedigger, likely, the sentence goes on, to find nothing but death and corruption.',
      not: {
        "a priest, who hears a sinner's confession":
          'A sexton worked for the church but was not a priest. The image is of digging, not of hearing confession, and Dimmesdale confesses nothing to Chillingworth.',
        'a thief, who robs a buried treasure':
          "The miner of the first simile seeks treasure, and the sentence does mention a buried jewel, but the sexton's work is with the dead. The correction moves from riches to decay.",
        'a surgeon, who cuts out a disease':
          'Chillingworth is a physician, so a surgeon seems apt, but a sexton heals no one. The image says he digs into a grave, not that he cures.',
      },
      more: "The self-correction is the point: the narrator replaces a hopeful image with a deathly one. Digging makes the investigation physical and violating, as if the minister's heart were ground to be broken open.",
      tip: 'Use the corrected simile to show the narrator steering our judgement of Chillingworth: each image of him grows darker, from scholar to miner to gravedigger, and at last to fiend.',
    },
  'It’s pouring into the school, grief, grief is making them happy.': {
    why: 'Leah says this to Phil in Section Two, Scene 2, noticing that since Adam disappeared everyone at school is getting along. Grief pours like water, flooding and cleansing, and the repeated word shows her stumbling over the paradox.',
    more: "It is one of the play's darkest ironies: the lie has made the group kinder, which is exactly why nobody wants to end it. The cover-up works, and that is what makes it so hard to undo.",
    tip: "Use this line on the play's central question about groups: does one person matter more than everyone's happiness? Kelly makes the cover-up succeed, so the audience has to face the argument.",
  },
  'speaker: How do you think they’re living?': {
    why: "Richard asks Phil this in the final scene, alone in the field, after describing a cloud of fluff on the hill that convinced him there is life on other planets. It is the play's last attempt at wonder, and Phil's silence leaves it unanswered.",
    not: {
      'Leah, telling Phil about bonobos and chimps':
        "Leah's talk of bonobos and chimps in Section One is about how creatures treat each other, and it ends in a blunt judgement, not a question about other worlds.",
      'Adam, describing how he survived in the hedge':
        'Adam explains how he has survived in the hedge, living on insects and leaves. He is describing his own life, not asking about other living things.',
      'Leah, as she arrives with her suitcase':
        "Leah's suitcase speech does reach out to the universe, but by the final scene she has left. Richard has taken her place, talking to a silent Phil.",
    },
    more: "Richard repeats the question, as Leah once repeated hers, so the final scene echoes the field scenes between Leah and Phil. Phil's silence suggests that nobody left in the group can imagine a different way of living.",
    tip: "Use this line on structure: the final scene mirrors the Leah and Phil scenes with a new talker, which suggests the group's pattern repeats whoever fills the roles.",
  },
  'speaker: You told us to get DNA evidence. We got DNA evidence.': {
    why: "Cathy says this in Section Two, Scene 3, defending her decision to find a real postman who fits Phil's invented description. Her two short sentences, repeating the same phrase, make her sound like a pupil who has followed instructions perfectly, and she cannot see why framing an innocent man is a problem.",
    not: {
      'Richard, reporting that the police matched the DNA':
        "Richard brings the news that the police have matched DNA on Adam's jumper to the arrested man. He reports the result; Cathy explains, proudly, where the DNA came from.",
      'Leah, protesting that the kidnapper does not exist':
        "Leah protests in the same scene that the kidnapper does not exist. She is horrified by the framing; the pleased defence of it is Cathy's.",
      'Phil, laying out the cover-up in the wood':
        "In Section One, Scene 3 Phil lays out the plan, including a stranger's DNA on the jumper. He gave the instruction, so he could not say that someone else told them.",
    },
    more: "The others stare at her in silence. The horror is that Cathy has done what she was told, only more so: the lie has met reality, and an innocent man's DNA now gives it evidence.",
    tip: "Use this line to trace Cathy's rise: from enjoying the crisis, to showing initiative in a crime, to running the group by the end.",
  },
  "point: DNA: Which line shows the group's first leader trying to manage a death by controlling language rather than facts?":
    {
      why: 'John Tate says this in Section One, Scene 3, when Lou keeps saying that Adam is dead. He forbids the word itself. It is funny because it is so childish, but it sets the pattern: the group will handle everything by controlling what is said, not by facing what has happened.',
      not: {
        'You crying little piece of filth.':
          "John Tate says this in the same scene, but here he punishes Brian's tears rather than a word. It shows rule by contempt, not control of language.",
        'I’m crying because I’m lying and I feel terrible inside.':
          "Brian's line is the opposite of control: he says plainly what guilt feels like, while the rest of the group hides behind the lie.",
        'nothing dead, that’s the rule':
          "Adam's rule is about what he will eat while living wild. It is a code for surviving, not a way of hiding from the facts.",
      },
      more: "The confident semicolon and the word 'rule' make a leader's voice out of panic. But controlling language cannot change what has happened, and when the problem needs a plan rather than a threat, Phil quietly takes over.",
      tip: "Use this line in an answer on power or responsibility: it shows the group's first strategy, avoidance, which the cover-up then turns into a crime.",
    },
  "word: He’s dead, everyone thinks he’s dead. What difference will it make? | Which word gives away that Adam's death is only a belief, not a fact?":
    {
      why: "'Thinks' admits what Phil's first clause denies. Adam is alive and in the wood in Section Three, Scene 3; only everyone's belief makes him dead. Phil turns that belief into a fact, as if Adam may as well be dead because people think he is.",
      not: {
        dead: "'Dead' is the claim Phil states as fact, twice. The word that exposes it as only a belief comes between the two.",
        everyone:
          "'Everyone' shows whose belief counts, the whole group and the town, but it is the verb after it that turns the death into a belief.",
        difference:
          "'Difference' belongs to Phil's rhetorical question, which makes a killing sound like a small correction. It does not reveal that the death is only believed.",
      },
      more: "Leah begs Phil to stop as Cathy and Brian prepare to go after Adam. The calm question makes a killing sound like an administrative correction, and Leah's answer, that Adam is alive, is the simplest truth in the play, and changes nothing.",
      tip: "Quote this to show Phil's logic: once the lie is believed, the truth becomes the problem. Set it beside Leah's plain insistence that Adam is alive.",
    },
  'there’s a lovely view of the gasworks': {
    why: 'Helen says this in Act 1, Scene 1 as she and Jo move into a shabby rented flat. She lists its attractions like an estate agent, but every item is a joke, and the industrial view is the punchline.',
    more: 'The irony lets Helen admit how grim the place is without having to feel it. From the first scene, humour is how these characters survive poverty, and the play never asks the audience for pity.',
    tip: "Use this line on poverty and on Helen's wit: she mocks the flat rather than complaining about it, which is both a defence and a kind of dignity.",
  },
  'I really do live at the same time as myself, don’t I?': {
    why: 'Jo says this to Geof in Act 2, Scene 2, teasing him as he mops the floor, after calling him an old-fashioned Edwardian and herself contemporary. The odd, delighted phrasing means she is fully present in her own life and her own moment.',
    more: 'The line is often singled out as a motto for the play itself, which put the lives of young people of the 1950s on stage as they were being lived, in a play written by a nineteen-year-old.',
    tip: "Use this line on Jo's independence and modernity, and link it to context: Delaney's play put a working-class teenage girl at the centre of the stage.",
  },
  'speaker: You’ve certainly never been affectionate with me.': {
    why: "Jo says this to Helen in Act 1, Scene 1, when Peter has walked in and Helen, flirting, calls her jealous. Helen means to embarrass her, but Jo's flat reply cuts through the jokes: for once she is not being clever, and the grievance under all her sarcasm shows.",
    not: {
      'Geof, after Jo turns down his offer of marriage':
        "Jo does refuse Geof's proposal in Act 2, Scene 1, but Geof answers with devotion, not complaint: he tells her he could not bear to be away from her.",
      'Helen, when Jo mocks her offer of money':
        "Jo mocks Helen's offer of money in Act 2, Scene 1, calling it an act. Helen claims she has lost sleep over her; the complaint of never being shown affection is Jo's.",
      "Jo, holding Geof's hands in the last scene":
        "In Act 2, Scene 2 Jo remembers Helen pulling her hands away, but she speaks about her mother to Geof. This line is said to Helen's face, in front of Peter.",
    },
    more: "The adverb 'certainly' makes the statement absolute. It explains why Peter's arrival feels to Jo like a threat, and it sets up the play's central wound: a daughter who wants the love her mother gives to men.",
    tip: "Set this line beside Jo's memory in Act 2 of Helen pulling her hands away: the same grievance, first as a retort to her mother, then as a confession to Geof.",
  },
  'speaker: It’s a funny thing, I never have done when I’ve been happy.': {
    why: 'Helen says this in Act 2, Scene 2, back at the flat with her luggage after Peter has thrown her out. She admits, almost casually, that she never thought about Jo when she was happy: she remembers her daughter only when things go wrong.',
    not: {
      'Helen, getting ready for her wedding to Peter':
        'On her wedding day Helen is happy and about to leave Jo alone. The admission belongs to the end, when her marriage has failed and she has come back.',
      'Jo, telling Geof about Jimmie':
        "Jo jokes about Jimmie's brief stay, but this line is about a parent who forgets her child while life is going well. It is Helen's, about Jo.",
      'Helen, when Geof fetches her to see Jo':
        'When Geof fetches her in Act 2, Scene 1, Helen fights Jo and offers money. The confession comes later, once Peter has thrown her out.',
    },
    more: 'The chatty opening makes the admission more shocking, yet it is honest in a way few parents would be. Delaney lets the audience feel both the neglect and the candour, which is why Helen is never simply a villain.',
    tip: 'Use this line to show how complex Helen is: shocking in its neglect, but honest. A strong answer judges her without reducing her to a stereotype.',
  },
  "point: A Taste of Honey: Which line does Helen's reaction to Jo's news about the baby prove wrong?":
    {
      why: "Jo says this to Jimmie in Act 1, Scene 2, when he asks what Helen will think of him. In the final minutes, told that the baby will be Black, Helen reaches for a drink and goes out, proving Jo wrong. The concession shows Jo knows her mother's faults, but not all of them.",
      not: {
        'Have I ever laid claim to being a proper mother?':
          "Helen's question in Act 1, Scene 2 admits she has never tried to be a proper mother. Nothing in the ending contradicts it; if anything, the ending confirms it.",
        'That’s where we all end up sooner or later.':
          "Helen's joke about the bulbs and the grave is borne out when Geof finds them dead. It is foreshadowing that comes true, not a claim the ending disproves.",
        'Why don’t you learn from my mistakes?':
          "Helen's plea on her wedding day is about Jo repeating her life. The ending shows that Jo has, so the warning is borne out rather than proved wrong.",
      },
      more: "This is dramatic irony planted in Act 1 and paid off in the last scene. The play opened in 1958, months before racist violence broke out in Nottingham and Notting Hill, and Delaney makes the audience watch prejudice break through a mother's affection.",
      tip: "Use this line in an answer on race or on Helen: quote Jo's confidence in Act 1, then describe Helen's reaction at the end, and analyse the dramatic irony.",
    },
  "word: bearing a child doesn’t place one under an obligation to it | Which word lets Helen avoid saying 'I', as if she were stating a rule for anybody?":
    {
      why: "'One' is the impersonal pronoun of rules and etiquette. Instead of saying that she owes Jo nothing, Helen states it as a general principle, so her own neglect becomes a rule she seems to have worked out to excuse herself.",
      not: {
        bearing:
          "'Bearing' is a formal word for giving birth, part of the cold, legal tone, but it is not where Helen removes herself from the sentence.",
        child:
          "'A child' is general rather than naming Jo, which adds to the coldness. But the word that stands in for Helen herself is the pronoun.",
        obligation:
          "'Obligation' names the duty she denies, in the language of contracts. It is what she refuses, not the word that keeps her own self out of the sentence.",
      },
      more: "Helen says this to Geof, who has fetched her to the pregnant Jo, and his quiet reply, that he would have thought it did, speaks for the audience. The line explains Jo's mistrust of every promise of care.",
      tip: "Quote this in an answer on motherhood and analyse its grammar: the impersonal pronoun and the legal noun turn a mother's neglect into a principle.",
    },
  "word: There’s two w’s in your future. Work or want | What does 'want' suggest here?": {
    why: "Helen is dismissing a magazine mystic, and 'want' here means need or lack, not desire. Her blunt working-class wisdom is that you either work or go without, and the alliteration makes it stick.",
    not: {
      'always wishing for more than you already have':
        "In modern English 'want' usually means desire, but Helen sets it against work: the choice is between earning and doing without, not between having and wishing.",
      'being wanted and admired by the men around you':
        "Helen does live on men's money, which is the irony, but the saying offers only two futures, labour or lack. Being admired by men is how she dodges both.",
      'longing for a love that never quite arrives':
        'Love is not part of this saying. Helen is talking about money: the hard choice between working and doing without.',
    },
    more: 'The irony is that Helen herself avoids both work and want by marrying money, and she announces her marriage to Peter moments later. Her advice and her example point in opposite directions.',
    tip: "Use this line on poverty and class: quote it, explain the older meaning of 'want', and show how Helen escapes her own rule through Peter.",
  },
  'Her eyes investigated, quick as mice.': {
    why: 'This describes Mrs Rutter in The Darkness Out There, as she welcomes Sandra and Kerry to her cottage. Everything soft about her is contradicted by her eyes, which watch and assess her young visitors.',
    more: 'The simile is small, darting and faintly unpleasant, suggesting something that scurries in the dark. Read a second time, the story is full of warnings like this that Sandra misses, until Mrs Rutter tells them about the German airman.',
    tip: 'Use this line on appearance and reality, and pair the story with A Family Supper, where a calm surface also hides what a character intends.',
  },
  'speaker: For some moments my sister did not move.': {
    why: 'The narrator records this in the kitchen, when his father orders Kikuko to help with the supper. Her pause before obeying is a tiny act of resistance, saying what she cannot say aloud about his authority. Ishiguro gives it a plain sentence of its own and no explanation.',
    not: {
      'when the father lifts the lid of the pot of fish':
        "When the father lifts the lid at supper, the tension is the narrator's, unable to tell what the fish is. The stillness here is Kikuko's, in answer to an order.",
      'when her brother frightens her with a ghost story':
        'In the garden her brother does frighten Kikuko with his old ghost story, but this stillness is not fear. It is a pause of resistance before she obeys her father.',
      'when their father has her put the photograph back':
        "At supper Kikuko puts the photograph back at her father's gesture. The pause before obeying comes earlier, when he orders her to help in the kitchen.",
    },
    more: 'Conflict in this family is all tiny acts: silences, short formal replies, a pause that lasts only moments. Ishiguro trusts the reader to feel a tension the narrator never explains.',
    tip: "Use this moment in an answer on conflict: show how Ishiguro makes a silence speak, then compare a louder one, such as Ralph shouting at the Grandfather over a meal in 'Chemistry'.",
  },
  'speaker: He’ll come home when they carry him.': {
    why: "Elizabeth says this in Part II, when she calls at the Rigleys' to ask after Walter. She means he will be carried home drunk, and says it bitterly to save face in front of the neighbours. The reader hears the meaning she does not intend: he will be carried home dead.",
    not: {
      "Walter's mother, arriving with news of an accident":
        "Walter's mother arrives later in Part II, frightened by news of an accident. Her grief is for the boy she remembers; the bitter joke about a drunken husband is his wife's.",
      "Elizabeth's father, stopping his engine for tea":
        "Her father does tell her in Part I that Walter has been drinking again, but this bitter prediction is Elizabeth's own, made later to the neighbours.",
      'Elizabeth, to Annie, as tea waits and spoils':
        'In the kitchen in Part I Elizabeth is angry with Walter in front of the children, but this sharp remark is made to the neighbours, as she searches for him after eight.',
    },
    more: 'It is dramatic irony at its sharpest. Her anger works as a shield against the fear already growing underneath it, and Lawrence lets the reader feel the truth arriving before any character knows it.',
    tip: 'Use this line in an answer on grief or on a marriage in conflict, and pair the story with A Family Supper, where grief is also hidden behind ordinary talk.',
  },
  "point: Telling Tales: Which line marks the moment a son understands what his father's plan would mean for him?":
    {
      why: "The son in 'Korea' thinks this in the dark of the lavatory, having overheard his father tell a cattle-dealer about the money paid for Luke Moran's death in Korea. He works out what his father's plan for America would mean, and the end of his childhood arrives as quiet knowledge.",
      not: {
        'Perhaps I should have been a more attentive father.':
          "In A Family Supper the father speaks this, not the son: it is his hedged regret, said over a model battleship. It gives a father's view, not a son's discovery.",
        'The darkness was out there and it was a part of you':
          "Sandra's realisation in The Darkness Out There is about the cruelty people are capable of. It is a loss of innocence, but it has nothing to do with a father's plan.",
        'though things change they aren’t destroyed':
          "The boy in 'Chemistry' turns his Grandfather's chemistry into comfort at the end. He is consoling himself, not uncovering a parent's plan.",
      },
      more: "The setting of dirt, clay, worms and darkness turns the moment into a kind of burial. There is no shouting: McGahern's plain sentence lets the knowledge land, and the son never says aloud what he has heard.",
      tip: "Pair 'Korea' with A Family Supper for questions on parents and children who misunderstand each other: in both, a son must read a father who will not say what he means.",
    },
  "word: It was a terribly hopeful tie. | What does 'terribly' suggest here?": {
    why: "Carla sees Stefan in the staffroom for the first time. 'Terribly' pulls two ways: it means very, and it means painfully, because she can see how exposed his hope is in a room that is laughing at him.",
    not: {
      'that the tie is ugly and a poor choice for the visit':
        "The teachers do laugh at his ties, but 'terribly' strengthens 'hopeful'; it does not judge the tie's looks. Carla is moved by it, not embarrassed.",
      'that the teachers think the tie is awful to look at':
        "The staffroom's mockery is the background, but 'terribly' is Carla's word, full of tenderness. It shows that she has already chosen his side.",
      'that Carla is frightened of being found out at last':
        'Carla has dreaded being exposed as a catering assistant, but this sentence is about Stefan, not about her fear. The word measures his hope.',
    },
    more: "Giving a tie an emotion is a transferred epithet: the tie carries Stefan's openness. Carla's tenderness towards it prepares for her decision to leave the counter, cross the staffroom and introduce herself.",
    tip: "Use this line on status and recognition: compare Carla's view of Stefan with the staffroom's, and pair the story with another about people who are overlooked.",
  },
  'Ar soldier. Fight far King an’ country.': {
    why: 'Wendell says this to Junior in Act 1, Scene 7, explaining what happened to him and why he left. He tells his son that he had been a soldier who fought for King and country, and that his service earned him no respect.',
    more: 'King and country is the language of wartime recruitment, and Wendell uses it bitterly. Written in Jamaican patois, the line reminds the audience that the country he fought for still hears his voice as foreign.',
    tip: "Use this line on racism and the Windrush generation: link Wendell's service to the fall from officer to clerk that Mavis describes in Act 2, and to the colour bar.",
  },
  'Wi take on de system an’ it look like wi might beat dem.': {
    why: "Wendell says this in Act 3, Scene 4, back after two days away and jubilant about the bus boycott. The collective we shows how far he has come from the solitary hustler, and the system is the play's sharpest phrase for institutional racism.",
    more: "The cautious 'look like' and 'might' keep the victory uncertain even as he celebrates. Mavis, who has heard his promises before, is harder to convince, and the radio confirms the end of the colour bar only later that day.",
    tip: 'Use this line on protest and change: the private hustler becomes part of a public campaign, which shows Odimba linking personal change to political change.',
  },
  'speaker: You’ve come back just so you can leave again.': {
    why: 'Junior says this to Wendell at the docks in Act 1, Scene 6, after finding his sisters left waiting while their father played cards. He compresses a childhood of disappointment into one sentence: he sees the return as the start of another abandonment.',
    not: {
      'Mavis, ordering Wendell out on Christmas Day':
        'Mavis does order Wendell out on Christmas Day, even threatening him with a knife, but she wants him gone. This bitter complaint that he will leave again belongs to his son.',
      "Mavis, answering Wendell's proposal":
        'In the proposal scene Mavis answers with conditions: any future depends on his being a better father. She tests whether he will stay rather than accusing him of planning to go.',
      'Junior, handing Wendell his savings to leave':
        'When Junior hands over his savings in Act 2, Scene 5, he is asking his father to leave, not complaining that he will. By then he has chosen his mother and sisters.',
    },
    more: "The contrast of 'come back' and 'leave again' turns hope into a trap. Junior became the man of the house when his father left, and his hostility protects his mother and sisters as much as himself.",
    tip: "Use this line to trace Junior's arc: from anger at the docks, to paying his father to leave, to taking the family photograph that includes Wendell at the end.",
  },
  'speaker: we are everything that is beautiful on this earth': {
    why: 'Mavis says this to Princess in Act 3, Scene 5, on the day the colour bar falls, as the family dress up to go out. The pronoun gathers Princess into a community of Black girls and women, so beauty stops being a prize one girl might win and becomes something they share.',
    not: {
      'Margot, finding Princess hiding in her bedsit':
        "Margot finds Princess and lets her sleep in an old ballgown, a real kindness, but she is white and could not say this 'we'. The speech belongs to Mavis.",
      'Wendell, crowning Princess in the final scene':
        'Wendell does crown Princess in the final scene, in make-up and a headdress. The speech that names Black women beautiful comes in the scene before, from Mavis.',
      "Mavis, as she plaits Princess's hair":
        "When Mavis plaits Princess's hair in Act 2, Lorna is repeating Margot's praise of her own doll-like hair. The answer to that hurt comes only in Act 3, on the day of the victory.",
    },
    more: "'Everything' and 'this earth' make the claim as large as it can be, answering the school voices that told Princess she could not be pretty. The final scene then makes the speech visible, filling the stage with Black women.",
    tip: 'Use this line on beauty and self-worth: set it against what Princess hears at school, and show how the play moves approval from a contest to her family.',
  },
  "point: Princess & The Hustler: Which line shows Princess's belief in her dream breaking under what other children tell her?":
    {
      why: "Princess says this alone in her cupboard room in Act 2, Scene 2, rehearsing her winner's speech again, when doubt breaks in. 'Everyone' shows how total the pressure feels to a ten-year-old, and the unfinished sentence trails off as if she cannot bear to end it.",
      not: {
        'I’m not Black like you. I’m only half. Half of everything.':
          "Lorna's words after Junior is attacked do wound Princess, but they come from her frightened half-sister, separating herself, not from children at school.",
        'You free to be anything':
          "Mavis says this in Act 3, on the day the colour bar falls. It restores Princess's belief rather than showing it breaking.",
        'A line of the most beautiful Black women of all sizes and nations':
          'The final stage direction shows the dream restored, a pageant full of Black women. It answers the doubt rather than showing it.',
      },
      more: "The same stage that crowned her on Christmas morning now hears her begin to give up. Odimba measures racism not only in laws and jobs but in what it does to a child's sense of her own worth.",
      tip: "Use this line to track Princess's cupboard world as a barometer of her confidence: crowned in Act 1, subdued here, destroyed at the end of Act 2, restored in Act 3.",
    },
  'word: doing their best to be tolerating of youse | Which word shows that Margot imagines Black Bristolians as something to be put up with?':
    {
      why: "'Tolerating' gives Margot away. Arguing with Wendell about the boycott, she imagines the Black community as something white Bristol puts up with, not a part of it, and she believes she is being fair.",
      not: {
        doing:
          "'Doing' only sets up the effort she says white people are making. It carries none of the judgement about who belongs.",
        best: "'Best' makes white Bristol sound generous and hard-working. It flatters her own side, but it is a later word that shows how she sees her Black neighbours.",
        youse:
          "'Youse', a dialect plural, lumps Mavis and Wendell in with everyone she thinks of as newcomers. It sets them apart, but does not say they are merely put up with.",
      },
      more: 'Margot is a friend who loves the family, which makes the line so revealing: Odimba shows how hard casual racism is to see from the inside. In the same scene Wendell celebrates the mixed, joyful city that the colour bar denies.',
      tip: "Use this line in an answer on racism: separate Margot's well-meaning prejudice from the colour bar and the street violence, and show how Odimba makes each feed the others.",
    },
  "word: If a whole city can try to change, why not one simple man? | Which word keeps Mavis's claim careful, a hope rather than a boast?":
    {
      why: "'Try' is careful. Defending Wendell to Margot in Act 2, Scene 4, Mavis does not claim that the city has changed, only that it is attempting to. If a city can attempt it, so can one man: she is hoping, not promising.",
      not: {
        whole:
          "'Whole' makes the city's effort as large as possible, which shrinks Wendell's change by comparison. It adds scale, not caution.",
        city: "'City' joins the public story of Bristol and its boycott to the private story of the family. It sets up the comparison, not the caution.",
        simple:
          "'Simple' makes Wendell's change look small and possible beside the city's. It is part of her argument, but it does not hedge her claim.",
      },
      more: 'Mavis joins the private story to the public one in a single rhetorical question. The line invites the audience to judge both changes by the end of the play, when the colour bar falls and Wendell proposes again.',
      tip: 'Use this line on protest and change, and on Mavis: she defends Wendell without trusting him blindly, which keeps the power in her own hands.',
    },
  "I search for myself in them books, I'm never there": {
    why: 'Viv says this to Del in Scene 5, explaining why her academic success feels hollow. The metaphor of searching for herself inside books makes the curriculum a mirror that shows her nothing, and the short final clause is bleak and absolute.',
    more: 'Pinnock criticises a Eurocentric education that leaves Black British students invisible. In the same scene Viv admits walking out of an English exam, and she later chooses Black Studies.',
    tip: 'Use this line on identity and education, and compare Viv with Del: the sister who succeeds at school feels as invisible there as the sister whose difficulties school ignored.',
  },
  'speaker: These girls got Caribbean souls.': {
    why: "Brod says this in Scene 2, answering Enid's pride in her English girls as she prepares for the Pastor's visit. Where Enid talks about nationality, he talks about the soul, something inherited rather than chosen and beyond the reach of any Home Office.",
    not: {
      'Mai, reading for Enid and the girls':
        'Mai sees deeply into her clients in Scene 1, but this is a reply in an argument about England, made to Enid at home by her oldest friend.',
      "Brod, waking at Mai's after a night of drinking":
        "In Scene 7 Brod tells Del the truth about her father's violence. The claim about the girls' souls belongs to his argument with Enid in Scene 2.",
      "Enid, grieving after her mother's death":
        "Grief in Scene 4 does turn Enid towards Jamaica, but she speaks of her own longing for home, not her daughters' souls. In Scene 2 she insists they are English.",
    },
    more: 'Pinnock gives both of them part of the truth: the girls are English by birth and Caribbean by inheritance, and the play follows each daughter as she discovers what that means.',
    tip: "Pair this with Enid's pride in her English girls in the same scene: the clash between nationality and inheritance is the play's argument in miniature.",
  },
  'speaker: Nobody see you, nobody hear you': {
    why: 'Enid says this to Del in Scene 8, when Mai sends Del to see her next client alone and the client is her mother. In the most honest speech she makes, Enid describes life as a Black woman in England in two parallel clauses, each beginning with the same word.',
    not: {
      'Viv, explaining why she walked out of her exam':
        "Viv feels invisible in her school books in Scene 5, but she speaks of herself and the curriculum. This speech is Enid's account of a Black woman's life in England.",
      "Enid, refusing Mai's suggestion of a doctor":
        'When Enid refuses a doctor in Scene 6, she doubts that one could understand her grief. The fuller account of being unseen comes in Scene 8, spoken to Del.',
      'Mai, telling Del about her restless son':
        'Mai tells Del about her son, born in England but never at home there. The parallel clauses about being unseen come from Enid, at last talking to her daughter.',
    },
    more: "She speaks of 'you' rather than 'I', keeping her pain at a slight distance even now. The line answers Del's accusation in Scene 2 that Enid does not see racism: she has always seen it, and been unseen by it.",
    tip: "Use this line on the mother and daughter: it is the moment Del begins to understand Enid, shortly before she takes her mother's hand to begin the reading.",
  },
  'point: Leave Taking: Which line defines home as a state of mind rather than a country?': {
    why: "Mai says this to Del in Scene 6, describing her restless son, born in England but never at home there. Her two matching clauses sound like a proverb and give the play's most hopeful definition of home: not a country but a state of mind.",
    not: {
      'I want... I want to go home.':
        "Enid's line at the end of Scene 4 does name home, but for her, in grief, home is a country: Jamaica. It reverses her pride in England rather than redefining home.",
      'England been good to me. I proud a my English girls.':
        "Enid's defence of England in Scene 2 claims a country as home for her daughters. It is about nationality, not a peace found inside yourself.",
      'In a way we poorer than them.':
        "In Scene 8 Enid compares her life in England with her family's in Jamaica and finds England poorer in company. It weighs two countries rather than looking within.",
    },
    more: 'The more challenging reading is that this inner peace is needed precisely because the outer world refuses these characters a home. Mai is really speaking to Del, and she urges her to go home to her mother.',
    tip: "Use this line in any essay on belonging: set it against Enid's two homes, England in Scene 2 and Jamaica in Scene 4, and argue which definition the ending supports.",
  },
  "word: condemn our people to wander the earth like ghosts who can't find rest | Which word makes the people's restlessness a punishment, like a sentence passed in court?":
    {
      why: "'Condemn' is the language of a court passing sentence. Mai, tracing her family's journeys back to an ancestor in the hold of a slave ship, wonders whether their restlessness is a curse, a punishment laid on a whole people for no crime of their own.",
      not: {
        wander:
          "'Wander' describes the restlessness itself, moving from place to place. It names what happens, not the sense of a sentence imposed.",
        ghosts:
          "'Ghosts' is the simile's image, restless spirits who cannot settle. It makes the restlessness haunting, but the punishment lies in the verb that opens the line.",
        rest: "'Rest' names what the ghosts cannot find, peace or a home. It is the thing denied, not the word that does the denying.",
      },
      more: "It is the play's widest view of dislocation, linking Del's restlessness to centuries of history, from slavery to Mai's mother's migration to Cuba and Mai's own to England.",
      tip: 'Use this line to bring historical context into an essay on belonging: Pinnock links the restlessness of the Windrush generation to the legacy of slavery.',
    },
  'Social workers have two pretend faces, Pretend Happy and Pretend Sad.': {
    why: "This comes from Chapter 5, after Carol's breakdown, when social workers arrive to take charge of Leon and Jake. Leon's capitalised names turn the professionals' expressions into masks, and the line shows how clearly he sees through performance.",
    more: "The line is funny, but it shows how little Leon trusts the adults who now control his life. It sets up the care system as a world of faces rather than feelings, seen through a nine-year-old's eyes.",
    tip: "Use this line on the care system and on point of view: the close third-person narration lets the reader share Leon's suspicion while seeing more than he does.",
  },
  'speaker: Just me and you and him. Always.': {
    why: 'Carol says this to Leon in Chapter 1, on the day his half-brother Jake is born, promising a family of three. The simple one-syllable words and the one-word final sentence sound certain, which makes the loss more painful: the novel breaks the promise almost at once.',
    not: {
      'Carol, saying goodbye to Leon in Bristol':
        'In Bristol in Chapter 41 Carol tells Leon herself that she cannot look after him, though she still loves him and Jake. By then the promise of three together has long been broken.',
      'Maureen, telling Leon he will live with her':
        'Maureen does tell Leon in Chapter 41 that he will live with her. This earlier promise of three together comes from his mother, on the day his brother is born.',
      'Carol, at the Family Centre':
        'At the Family Centre in Chapter 24 Jake has already been adopted, and talk of him makes Carol sad. The promise of the three of them belongs to the day he was born.',
    },
    more: 'Because the novel breaks the promise so quickly, the line works as dramatic irony. Carol means it, and that is the point: her love is sincere but cannot keep the family together.',
    tip: 'Open an essay on family with this line: the novel begins with a promise of three and ends with a family built from people Leon was not born to.',
  },
  'speaker: Because he’s a baby, a white baby. And you’re not.': {
    why: 'Maureen says this in Chapter 9, after the social workers have told Leon that Jake will be adopted and he will not. When Leon asks why, she names the racism plainly: the repeated noun, now qualified by white, isolates the reason in one adjective, and the blunt short sentence lands on Leon.',
    not: {
      'Maureen, as Jake leaves for his new family':
        'In Chapter 10 Maureen tells Leon that Jake is being adopted that day. The reason, and her anger at it, she has already given him in Chapter 9.',
      'Sylvia, after Leon wrecks her bathroom':
        'Sylvia is blunt, but when Leon wrecks her bathroom in Chapter 28 she makes him clear up and tells him she likes him. The reason for the adoption came long before, from Maureen.',
      'Tufty, when Leon first finds the allotments':
        'Tufty talks to Leon about the sun when they meet at the allotments. By then Jake has gone; this explanation of the adoption came from Maureen, months earlier.',
    },
    more: 'Her honesty is a kind of respect no other adult has shown Leon, which is why he trusts her. She makes it clear that she thinks the decision is wrong, so the novel names the racism in the care system through the one adult Leon believes.',
    tip: "Use this line on race and the care system: it shows racism inside an institution meant to protect children, and Maureen as the novel's moral centre.",
  },
  "point: My Name is Leon: Which line shows that Leon believes his mother's love has to be earned?":
    {
      why: "Leon says this to Carol at the Family Centre in Chapter 24. When talk of Jake makes her sad, he imitates his brother and offers to be him. The modal could makes it a child's bargain: he believes he must become the white baby who was wanted.",
      not: {
        'a dark star of pain in his throat':
          'This image comes as Carol leaves after her visit in Chapter 14. It shows how much Leon aches for her, not that he thinks he must earn her love.',
        'If you hadn’t been sneaking around':
          "Carol screams this at Leon in Chapter 4, blaming him for Tony's rejection. It shows her turning her hurt on him, not his belief that love must be won.",
        'She gives a little curtsy like he’s a king and she’s a servant.':
          "Carol's playful farewell in Bristol reverses their roles for a moment. It is tender and evasive, but it is her gesture, not Leon's bargain.",
      },
      more: 'Set against the title, many readers find it one of the saddest lines in the novel: the boy who announced his own name to his baby brother now offers to be someone else.',
      tip: 'Use this line on identity and family: link it to the adoption of the white baby in Chapter 9, and to Leon spelling out his own name to Jake in Chapter 2.',
    },
  "word: This isn’t the whole of your life, love. | Which word does Maureen use to shrink Leon's suffering to one part of his story?":
    {
      why: "Maureen says this on the way home from Bristol in Chapter 41, after Carol has told Leon she cannot look after him. 'Whole' changes the scale: she does not deny the pain or pretend it is over, but makes it one part of his life rather than all of it.",
      not: {
        This: "'This' points to the hard time Leon is living through now. It names the pain, but the word that shrinks it to a part of his life comes later.",
        life: "'Life' is the larger story Maureen asks Leon to imagine. It matters, but on its own it does not measure how much of that life the pain fills.",
        love: "'Love' is the endearment that comforts here, where Carol's use of it in Chapter 1 handed him a job. It soothes, but it does not change the scale.",
      },
      more: "On the same journey Maureen tells Leon that he will live with her. The novel's hope is slow and partial, like Tufty's sun: not a reunion with Jake, but a life larger than its worst years.",
      tip: "Use this line to end an essay on hope or growth, and contrast the two uses of 'love': Carol's in Chapter 1 hands Leon a job, Maureen's here gives comfort.",
    },
  "They're putting chains upon themselves and I have thrown the shackles off.": {
    why: "Hobson says this late in Act Three, on the cellar stairs as he leaves Maggie's wedding supper, having just been made to pay the money that lets Alice and Vickey marry. He pictures marriage as a prison and himself as a man set free from his daughters.",
    more: 'The metaphor is self-pitying and comic, and Act Four answers it: free of his daughters, Hobson drinks himself close to the grave and has to accept their help. The man who calls marriage chains is the one who most needs looking after.',
    tip: "Use it in an essay on marriage: set Hobson's prison image against Maggie's working partnership with Will, then show how Act Four proves him wrong.",
  },
  'speaker: So does the fly when the spider catches him.': {
    why: 'Maggie says it in Act One, in the middle of her proposal. When Will says he wishes she would leave him alone, she casts herself as the spider and him as the fly. It is a joke at her own expense, and it admits how completely she has him caught.',
    not: {
      'Maggie, leading Will to bed on their wedding night':
        'Maggie is in control on the wedding night too, but Act Three closes in a long wordless sequence as she leads him to bed by the ear. The joke belongs to the proposal.',
      'Hobson, as he takes his belt to Will':
        'Hobson wants Will away from Maggie, not caught. His threat is a blunt, physical beating, and the witty trapping image is not his style.',
      'Mrs Hepworth, asking to see the man who made her boots':
        'Mrs Hepworth does compare the nervous Will to a timid animal, but she wants only his boots. The predator joke comes from the woman who means to marry him.',
    },
    more: "The image lets the audience enjoy Maggie's ruthlessness while wondering, for a moment, whether Will is being trapped rather than rescued. By Act Four the doctor turns animal insults on Hobson instead, so even the imagery records the reversal of power.",
    tip: "Use it to complicate a reading of Maggie as a simple heroine: her methods are a predator's, even though the result is good for Will.",
  },
  "speaker: When folks can't afford the best they have to do without.": {
    why: "Maggie says it to Vickey in Act Two, on her wedding day, after buying a brass ring from the shop's stock for fourpence. Her sisters are ashamed of so cheap a ring. Maggie turns poverty into plain good sense with a proverb, because she knows what things cost and what they are worth.",
    not: {
      'Hobson, when Jim Heeler mentions marriage settlements':
        "Hobson is mean enough to say it, but with Jim he simply drops the idea of husbands once settlements are mentioned. The proverb defends Maggie's thrift, not her father's meanness.",
      'Will, as he and Maggie set off for church':
        'Will is in the shop that day, but he is shy and resigned, facing the wedding as an ordeal. The line belongs to the woman who manages every penny of their start.',
      'Alice, at the wedding supper in the cellar':
        'Alice is a snob who looks down on the cellar and its second-hand furniture. She cares about appearances, so a proverb in praise of doing without is the opposite of her values.',
    },
    more: "The brass ring becomes the play's central symbol of thrift and honest beginnings. Against her sisters' concern for show, Maggie values use, the same judgement she made of courtship in Act One.",
    tip: "Link the line to the ring's return in Act Four to show how Brighouse uses one cheap object to trace Maggie's values across the whole play.",
  },
  "point: Hobson's Choice: Which line shows Maggie determined to remember their humble start now that they are prospering?":
    {
      why: 'Maggie says this in Act Four, when Will tries to take off her fourpenny brass ring to buy her a gold one. She will wear gold for show, but the brass stays, so that if they grow rich and proud it will remind them of the truth about themselves.',
      not: {
        'Great things grow from small.':
          "Maggie writes this on Will's slate on their wedding night in the cellar. It looks forward from their humble start; it is not a look back from success.",
        "You're the man I've made you and I'm proud.":
          'This also comes in Act Four, but it celebrates what Will has become, not where they began. It is about the present, not a vow to remember.',
        "Courting's like that, my lass. All glitter and no use to nobody.":
          'Maggie says this to Alice in Act One, mocking courtship. It shows the same preference for use over show, but long before there is any success to be humble about.',
      },
      more: 'Brighouse lets the love story end on a cheap ring. Beneath all the business talk, Maggie values what it stands for: a marriage built on work, and a start made with almost nothing.',
      tip: 'Track the ring from Act Two to Act Four to write about structure: one object measures how far the couple have risen and what Maggie refuses to forget.',
    },
  "word: Aye, thirty and shelved. | What does 'shelved' suggest here?": {
    why: 'Hobson takes the metaphor from his own shop. When Maggie asks where she comes in, he laughs that she is stock left on the shelf because nobody will buy it: at thirty, no man will marry her. The insult sets the plot moving, since she proposes to Will later in the same act.',
    not: {
      'that her marriage is only put off until later':
        'Today a shelved plan is postponed, but Hobson means the old idea of a woman left on the shelf: past marrying for good, not waiting her turn.',
      'that she is too proud to accept a suitor':
        'Hobson does not say Maggie refuses men; he says no man will want her. His point is her age, not her pride.',
      'that she is being punished for answering back':
        'Hobson is lecturing his daughters on uppishness, but the word is no penalty. He is laughing at her age, not punishing her for anything she has said.',
    },
    more: 'The metaphor shows how Hobson values his eldest daughter: as a useful fixture of the business rather than a woman with a future. The audience enjoys watching the shelved daughter prove him wrong.',
    tip: 'In an essay on women, link the word to 1880 attitudes to an unmarried woman of thirty, and to the unpaid work the daughters do in the shop.',
  },
  'the red dawn glows through the jagged holes of the broken doorway': {
    why: "This is the final stage direction of Journey's End. At dawn on Thursday 21 March, after Raleigh has died, Stanhope goes up the steps into the attack and a shell collapses the dugout. The play ends not with a speech but with this image of light through wreckage.",
    more: "Dawn usually promises a new day, but this one is red, the colour of blood and bombardment, and it shows only through holes in a broken doorway. The room that sheltered the whole play becomes a tomb, with Raleigh's body inside.",
    tip: 'Use it to show Sherriff writing through his stage directions: an essay on the ending should treat the set, the light and the sound as part of the text, not just the dialogue.',
  },
  'speaker: Shall we see if we can stick it together?': {
    why: 'Stanhope says it in Act Two, Scene 2. Hibbert has tried to leave the line, and Stanhope has held him at gunpoint. Then he puts the revolver away, admits that he feels the same fear, and turns from threat to partnership. The question invites rather than commands, and the repeated we includes Stanhope in the weakness.',
    not: {
      'Osborne, to Raleigh as they wait to go on the raid':
        'Osborne keeps Raleigh steady before the raid by talking of the New Forest and a Roman road, not of sticking it out. This offer follows a threat, and that is Stanhope with Hibbert.',
      'Stanhope, to Trotter after making him second-in-command':
        "Stanhope leans on Trotter after Osborne's death, but Trotter needs no persuading: he promises not to let Stanhope down. This invitation is made to a man trying to escape.",
      'Osborne, to Stanhope as he puts him to bed':
        'Osborne cares for the drunken Stanhope at the end of Act One, but he tucks him up like a child rather than asking him to endure. Shared endurance belongs to the scene with Hibbert.',
    },
    more: "Stick it was the soldiers' phrase for endurance, and here courage means going on alongside someone else rather than feeling no fear. The scene looks like bullying before it turns, which makes the change all the more striking for an audience.",
    tip: "Use it to argue that the play defines courage as shared endurance, not fearlessness, and set it against Stanhope's contempt for Hibbert in Act One.",
  },
  'speaker: Must you sit on Osborne’s bed?': {
    why: "Stanhope says it at the end of Act Three, Scene 1, when Raleigh, dazed after the raid, sits on the bed of the man who has just been killed. Stanhope cannot speak of Osborne's death, so his grief comes out as a cold rebuke about furniture, in a voice the stage direction calls dead.",
    not: {
      'Stanhope, as the wounded Raleigh is laid down':
        'In the final scene Stanhope does the opposite: he has the dying Raleigh laid on that very bed. The rebuke comes earlier, and the reversal marks their reconciliation.',
      'Stanhope, to Hibbert at the champagne dinner':
        'Stanhope is harsh with Hibbert at the dinner and sends him to bed, but this rebuke is aimed at Raleigh, who has just come back from the raid in which Osborne died.',
      'The Colonel, as Raleigh comes down from the raid':
        "The Colonel is in the dugout as Raleigh comes down, but his mind is on the prisoner's information and the brigadier. He has to be prompted even to ask about the men.",
    },
    more: "The bed has become a relic, and six plain words carry all of Stanhope's grief. Structurally the line prepares the ending: in the last scene Stanhope himself has Raleigh laid there, and he dies in it.",
    tip: "Use it to show Sherriff's understatement: the deepest feeling in the play is carried by a small, practical line, so write about what the characters cannot say.",
  },
  "point: Journey's End: Which line shows Raleigh still loyal to Stanhope after seeing him at his worst?":
    {
      why: "This comes from Raleigh's letter home, which Stanhope snatches in Act Two, Scene 1 and has Osborne read aloud. Raleigh has seen Stanhope drunk and been snubbed by him, yet he writes that Stanhope is tired only because he works so hard, and ends on pride.",
      not: {
        'I love that fellow. I’d go to hell with him.':
          'This is Osborne, telling Hardy in Act One before Stanhope even appears. It is the same loyalty, but from the older friend who knows him best, not from Raleigh.',
        'Drinking like a fish, as usual?':
          "Hardy's cheerful gossip at the handover gives Stanhope's reputation before he arrives. It shows how others talk about his drinking, not anyone's loyalty after seeing it.",
        'Despite his stars of rank he is no more than a boy':
          "This stage direction asks the audience to pity Stanhope as he first enters. It is Sherriff's voice, not Raleigh's, and it comes before Raleigh has seen anything.",
      },
      more: 'The letter reverses what Stanhope expected. He snatched it to protect himself and is shamed by its kindness, and the schoolboy adverb shows how young Raleigh is. It also shows how letters kept the worst of the front from the people at home.',
      tip: 'Link the letter to censorship: Stanhope fears what Raleigh will tell Madge, yet the letter softens the truth, which is how home was kept from the reality of the front.',
    },
  "word: Think of it all as - as romantic. It helps. | What does 'romantic' suggest here?": {
    why: 'Osborne says it to Raleigh on his first night, gently teaching him a way to cope. The hesitation before the word shows him choosing it with care, and the short sentence after it admits that this is a strategy: seeing the war as romantic is useful, not true.',
    not: {
      'that Osborne himself believes the war is noble and glorious':
        'Osborne has seen too much to believe that. His plain admission that it helps shows he is offering a way to cope, not stating his own view of the war.',
      'that Raleigh was foolish to come out to France':
        'Osborne is kind to Raleigh throughout and never mocks his eagerness. The word offers Raleigh a way through the war, not a judgement on him for coming.',
      'that Raleigh should hide his fear from the men':
        'Officers did hide their fear, but this word is about how Raleigh should picture the war to himself, not about how he should behave in front of his men.',
    },
    more: 'The line quietly exposes the idealised picture of war that sent young men like Raleigh to France, while showing sympathy for anyone who needs it. The rest of the play strips that picture away, scene by scene.',
    tip: "Use it in an essay on coping: Osborne's romance sits beside Stanhope's whisky and Trotter's garden as ways of not looking at what waits at the top of the steps.",
  },
  'the mist played tricks with sound as well as sight': {
    why: "Arthur narrates this in Chapter 6 of The Woman in Black. Walking back across the causeway, he is caught in a sudden mist and hears a pony and trap, a horse in panic and a child's cries as they sink into the marsh, but he can see nothing at all.",
    more: "This is where the novel's fear becomes something heard. Robbed of sight, Arthur must trust his hearing, and the mist deceives that too, as if on purpose. Hill makes the reader listen with him and imagine what the text withholds.",
    tip: 'Use it to analyse aural imagery: say how sound without sight creates disorientation and helplessness, and link it to the bumping and rocking behind the nursery door later in the novel.',
  },
  'speaker: Those who have suffered worst say least': {
    why: "Samuel Daily says it in Chapter 11, when he finally tells Arthur the story behind the haunting, and he names Mr Jerome and Keckwick among those who have suffered most. The town's silence, which so irritated Arthur, was never superstition: it was grief too painful to speak of.",
    not: {
      'Samuel Daily, warning Arthur not to go back to the house':
        "Daily warns Arthur off in Chapter 8, but he does not yet tell him the story. He explains the town's silence only in Chapter 11, after rescuing Arthur from the house.",
      'Mr Jerome, refusing to go out to Eel Marsh House':
        'Mr Jerome is one of the people the line is about. He is afraid and says almost nothing, which is exactly the silence Daily explains; he does not explain it himself.',
      'Arthur, refusing to tell a ghost story on Christmas Eve':
        "The line fits Arthur, who has kept his own suffering secret for years, but he does not say it. It is Daily's, and its truth about Arthur is for the reader to notice.",
    },
    more: 'The line changes how the reader sees every earlier refusal in the town. It also applies to Arthur, who has said nothing of his own suffering for years until the Christmas Eve game drives him to write.',
    tip: "Use it in an essay on silence or isolation: link the evasive men at the funeral lunch to Arthur's own refusal on Christmas Eve, and show that both silences come from pain.",
  },
  'speaker: It pierced me through.': {
    why: 'Arthur writes this in Chapter 12, at the fair outside London. The woman in black looks at him, and four short words make her gaze a weapon. Moments later the pony bolts and the cart carrying Stella and the baby crashes into a tree.',
    not: {
      'in the graveyard beside Eel Marsh House':
        'In the graveyard he struggles for words to name the hatred in her face and is paralysed with fear. The four-word shock belongs to the last sighting, just before the accident.',
      "in the church during Mrs Drablow's funeral":
        'At the funeral Arthur feels pity, not fear. He thinks she is gravely ill and means to offer her help, so her look has not yet become a weapon.',
      'as he sees her at the nursery window':
        'Seeing her at the nursery window after he has saved Spider, Arthur collapses. The piercing look comes later, at the fair, where the accident follows at once.',
    },
    more: 'The short sentence, after a long description of her malevolence, mimics a sudden physical shock. Because the reader already knows the curse, the line turns a happy day out into pure dread.',
    tip: 'Trace the four sightings in order, funeral, graveyard, nursery window and fair, to show how Hill moves the woman from an object of pity to a killer.',
  },
  "point: The Woman in Black: Which line shows that the ghost's hatred began as a mother's love?": {
    why: "Jennet writes this to her sister Alice in a letter Arthur reads in Chapter 9, as she is made to give up her son. The repeated possessive is love, grief and a refusal to let go at once: the best evidence that the ghost's hatred began as a mother's love.",
    not: {
      'her pent-up hatred and desire for revenge permeated the air all around':
        'Arthur senses this in Chapter 11 as he pieces her story together. It shows the hatred after her loss, soaking into everything, not the love it grew from.',
      'some terrible wasting disease':
        "This is Arthur's guess at the funeral about why the woman looks so ill. It invites pity, but it says nothing of her love for her son.",
      'In some violent or dreadful circumstance, a child has died.':
        'Samuel Daily states the curse in Chapter 11: what follows each sighting. It shows what her hatred does, not where it came from.',
    },
    more: "Hill lets the reader hear Jennet's own voice before learning what she does, so we pity her before we fear her. The absolute never looks forward to a claim on her son that even death does not end.",
    tip: 'Use the letter to argue that Jennet is victim as well as villain, and link it to the pressure on unmarried mothers of her time to give up their children.',
  },
  "word: desperate, yearning malevolence | What does 'yearning' suggest here?": {
    why: 'In the graveyard in Chapter 5 Arthur struggles for words and settles on a paradox. Yearning is longing, a feeling of lack, so before he knows her story he senses that the woman wants something that was taken from her, as well as wanting to do harm.',
    not: {
      'a wish to harm whoever comes near her':
        'That is what malevolence means, the next word. Hill pairs the two so that longing and hatred pull against each other.',
      'a fear of being seen by the living':
        'Nothing suggests that she is afraid. She stares at Arthur, and it is he who is paralysed with fear in the graveyard.',
      'a sickness slowly wasting her body away':
        "That was Arthur's first explanation at the funeral, when he pitied her. In the graveyard he is reading feeling in her face, not illness.",
    },
    more: "The paradox holds Jennet's whole story in two words: a mother who longs for what she lost and hates whoever took it. The adjective desperate adds that the feeling is beyond her control.",
    tip: 'Use the pairing to argue that Jennet is both victim and villain, and link it to her letters in Chapter 9, where the longing is in her own words.',
  },
  'word: a story of haunting and evil, fear and confusion, horror and tragedy | Which word warns that the story will end in loss, not just in fright?':
    {
      why: 'On Christmas Eve, in Chapter 1, Arthur announces his story in three pairs of nouns, and the list grows heavier until it ends on tragedy. The word promises loss, not just fright, so the reader knows from the start that this story ends in grief.',
      not: {
        evil: 'Evil names the wickedness of the haunting, a supernatural threat. It says nothing about the human loss the story ends with.',
        confusion:
          'Confusion belongs to the psychological middle of the list, what Arthur will feel. It warns of bewilderment, not of death.',
        horror:
          'Horror is intense fear, the effect any ghost story aims at, including the silly ones told on Christmas Eve. It promises fright; it does not promise loss.',
      },
      more: 'Because the reader knows from the first chapter that the story ends in loss, the suspense is not whether something terrible happens but how. The three pairs also map the novel: the supernatural, the mind and the human cost.',
      tip: 'Use it in an essay on structure: the frame tells us how the story will end, so Hill builds dread rather than surprise, and every hopeful moment becomes ominous.',
    },
  'Indian blood is thinner than the English': {
    why: "Lady Sarah says this in Act 1, Scene 7 of The Empress, as Abdul settles in at court. She turns racism into a mock-scientific claim about bodies, to defend her own place at the Queen's side against a man she sees as a rival.",
    more: 'The line is absurd enough to be darkly comic in performance, and Gupta uses the comedy to expose how Victorian prejudice dressed itself up as fact. The audience laughs, then notices what the laugh is at.',
    tip: "Use it in an essay on racism at court: set Lady Sarah's pseudo-science against Abdul's learning and languages to show who in the palace is really ignorant.",
  },
  'speaker: feeling is not the same as experiencing': {
    why: 'Abdul says it in Act 2, Scene 4, as he sits for his portrait. Victoria has protested that she feels for her subjects as if they were her children. Abdul, a servant correcting an empress, separates sympathy, which costs her nothing, from the suffering her subjects actually live through.',
    not: {
      'Victoria, as Abdul presses her about her subjects':
        "Victoria is in the scene, but she is the one being corrected. She claims to feel for her subjects; the reply that feeling is not enough is Abdul's.",
      'Dadabhai, explaining to Rani why he is standing for Parliament':
        "Dadabhai does argue about India's suffering, but with Rani he reaches for fierce images of greed. This calm, balanced correction is spoken to the Queen's face.",
      'Rani, when she meets Hari again after thirteen years':
        'Rani has lived through what others only feel, but her reunion with Hari is about love found again. The line is a lesson for someone who rules and has never suffered.',
    },
    more: "Perhaps the play's central idea, spoken by a servant to an empress. The friendship is at its most honest here, since Abdul can say what no courtier would, and the audience is left asking whether honesty is enough when the listener holds all the power.",
    tip: "Use it to argue that Gupta presents imperial sympathy as limited: set the Queen's warmth against what the audience has already seen of the lascars and ayahs.",
  },
  'speaker: gravitated around her, like planets circling the sun': {
    why: "Abdul says it in the final scene, at Tilbury, as he is being sent home to India after Victoria's death. He pictures the lands she ruled in orbit around her. The cosmic simile honours her power, but the sun stays put while everything else circles it.",
    not: {
      'Dadabhai, celebrating his election to Parliament':
        "Dadabhai's images of the Queen's power are hostile, not admiring, and his election night is soured by an attack on him. The respectful picture comes from the Queen's loyal friend.",
      'Abdul, teaching the Queen Hindustani':
        'Abdul is close to the Queen in that scene, teaching her words of love, but she is alive and beside him. This line looks back on her reign once it is over.',
      'Lady Sarah, warning the Queen against the Munshi':
        "Lady Sarah reveres the Queen's position, but she speaks to a Victoria who is alive and ruling. The line looks back on a reign that has ended.",
    },
    more: 'The image is static: Victoria, who in the play never sets foot in India, is the fixed centre, while Abdul and Rani are the travellers. The Empress ruled everything and saw almost nothing, while her servants saw it all.',
    tip: "Use the ending, on the quay where the travellers first landed, to write about structure, and argue that the play's movement belongs to the colonised, not to the crown.",
  },
  "point: The Empress: Which line shows the Queen's curiosity about India mixed with a sense of ownership?":
    {
      why: "Victoria says it in Act 1, Scene 4b, welcoming Abdul to Windsor. Her curiosity is real and far kinder than Lady Sarah's contempt, but listen to the pronouns: the royal us and our subjects frame India as property, and so far away admits she has never seen it.",
      not: {
        'English is one of several languages I am fluent in':
          "Abdul says this in the same scene, quietly correcting Lady Sarah's assumption that he cannot speak English. It shows his learning, not the Queen's curiosity.",
        'merely my servant’s offspring':
          "Susan Matthews says this as she abandons Rani at Tilbury. It is cold contempt for a servant's child, with no curiosity about India at all.",
        'an alien in race, in custom, in religion':
          "These are Sir Lepel Griffin's words against Dadabhai, read out after his election. They deny an Indian any place in Britain rather than asking to learn about India.",
      },
      more: "Abdul is wanted first as a living guidebook. The line sets the terms of the whole relationship, warm, curious and unequal, and the audience can enjoy the Queen's interest while noticing what it assumes.",
      tip: "Use it to show how Gupta makes even the kindest imperial attitude possessive: compare Victoria's curiosity with Lady Sarah's prejudice as two faces of the same power.",
    },
  'word: still a lackee to the white man | Which word insists that, however fine Abdul looks, nothing has changed?':
    {
      why: "Hari says it on the voyage in Act 1, Scene 1, after Abdul warns Rani off him. The word still insists that no fine clothes or manners change Abdul's place in the Empire's eyes: whatever he looks like, he remains a servant to white power.",
      not: {
        lackee:
          "Lackee, the play's spelling of lackey, names what Hari thinks Abdul is: a servant. It is the insult itself, but it does not say that nothing has changed.",
        white:
          'White names the colour line the Empire runs on, the power Abdul is accused of serving. It says nothing about time or change.',
        man: 'The white man means the rulers as a group. The word points to who holds power, not to Abdul staying the same.',
      },
      more: "The line is bitterly funny and partly true, but it also shows how empire sets colonised people against one another. The rest of the play tests the charge: Abdul rises to be the Queen's teacher, yet is dismissed like a servant in the end.",
      tip: "Use it to discuss how the colonised judge one another by their closeness to white power, and track Abdul's rise and fall against Hari's accusation.",
    },
  'In England the stars have to sleep. They take it in turns to shine.': {
    why: 'Mr Kelo says this to Alem in Scene 1 of Refugee Boy, in a memory from before the main action, as he shows his son the North Star. He turns a strange country into a bedtime story: a place where everyone gets a turn to shine.',
    more: 'The personification makes England sound orderly, fair and gentle, which is dramatic irony: the audience will soon see how unfairly England shares its light. The stars return in later memory scenes, tying Alem to his father across distance and death.',
    tip: 'Use the stars as a motif in an essay on structure: the play begins and ends under them, so its last scene looks back to a hope that the plot has tested.',
  },
  "speaker: I'm not going to hurt you. I'm not going to hurt you.": {
    why: 'Mr Hardwick says it in Scene 2. Alem has woken in the hotel to find the door locked and his father gone, and he is screaming in Amharic. The repetition shows a man trying to calm himself as much as the boy: fear runs both ways, and neither can understand the other.',
    not: {
      "Sweeney, as he stops Alem's knife fight":
        'Sweeney does step in when Alem draws a knife in Scene 15, but he warns him off violence rather than soothing a terrified newcomer. The frightened repetition belongs to an earlier, stranger meeting.',
      "Mustapha, meeting Alem in the children's home":
        'Mustapha greets Alem with nonstop chatter and wants to know whether Alem knows who he is. He is curious and brash, not trying to calm a screaming boy.',
      'Mr Fitzgerald, as he welcomes Alem to the house':
        "Mr Fitzgerald's welcome in Scene 6 is cheerful and confident: Alem will be at home with them. There is no fear in it; he is welcoming a boy into a family, not calming a stranger.",
    },
    more: "Mr Hardwick's words are kind in intention and helpless in effect, a sign of the misunderstandings ahead. Pearson set this line for its specimen question on fear.",
    tip: 'Use it to show that fear in the play belongs to the British characters too, and to introduce the people and systems that take charge of Alem: well meaning, but out of their depth.',
  },
  'speaker: We are here because Mother was a fighter and would not stay quiet': {
    why: 'Alem says it to his father in Scene 20, after the asylum refusal. Mr Kelo wants to appeal quietly and fears drawing attention, and Alem answers by invoking his dead mother. Calling her Mother keeps the formal respect his father expects, even as the son overrules him.',
    not: {
      'Alem, speaking to the crowd at the rally':
        'Alem does speak at the rally, but there he turns his story outwards to everyone listening. This line is private: an argument with his father about whether to protest at all.',
      'Mr Kelo, explaining why he has applied for asylum':
        'Mr Kelo is the cautious one. He puts his faith in the law and in a quiet appeal, so he would never argue that the family must refuse to stay quiet.',
      'Alem, telling the court about his family':
        "In court Alem states plain facts about himself, as if facts could protect him. The appeal to his mother's fighting spirit comes after the court has refused them.",
    },
    more: 'The phrase would not stay quiet turns silence into a choice and protest into an inheritance. The boy who was protected now leads. The ending gives the argument a terrible weight: Mr Kelo keeps quiet, and violence reaches him anyway.',
    tip: "Use it to trace the reversal of the father and son relationship, and to argue whether the play sides with Alem's protest or with his father's caution.",
  },
  "point: Refugee Boy: Which line shows a foster carer's grief breaking through her self-control?":
    {
      why: 'Mrs Fitzgerald says it to Ruth in Scene 13, when Ruth insists that they must talk about Themba, an earlier foster child who died. The repetition builds to every God-forsaken day, so her grief breaks through the control she has kept by not speaking of him.',
      not: {
        "Every car I see I think it's him driving his way back":
          "Mustapha says this in Scene 15 about his father, who was driven away. It is a child's grief kept alive as hope, not a carer's grief breaking out.",
        "You don't want to be like us, Alem. Messed with. Messed up.":
          "Sweeney says this in Scene 15 as he stops Alem's knife fight. It is about damage passed on through violence, and he is a boy in care, not a carer.",
        "Whatever happens, whatever, you can trust me. Like I'm your sister, right?":
          'Ruth says this in Scene 14, after telling Alem about Themba. She has faced her grief and is offering comfort, not losing control of it.',
      },
      more: "The line shows that suffering in the play is not only a refugee's: the people who care for others are wounded too, and have their own reasons for silence. Pearson set it for a question on suffering.",
      tip: "Use Mrs Fitzgerald to argue that kindness in the play is never easy, and pair her with Ruth to show a family whose buried grief Alem's arrival brings to the surface.",
    },
  "word: this great country of Dickens and Shakespeare | What does 'great' suggest here?": {
    why: 'Mr Kelo uses the phrase in Scene 17, explaining that he has applied for asylum for himself and Alem. His Britain is the Britain of its greatest writers, noble and just, and the adjective is sincere. That makes it painful, because in the next scene the court refuses them.',
    not: {
      'sarcasm about the way Britain really treats refugees':
        'Mr Kelo is not being ironic: he trusts the law and wants to appeal quietly. The irony belongs to the play, which lets the audience see what he cannot yet see.',
      "pride in Britain's size and its military power":
        'He praises Britain through its writers, Dickens and Shakespeare, not through its army or empire. His idea of the country is literary and moral.',
      'relief that the fighting cannot follow him here':
        "He does believe Britain is safe, but the word praises the country's culture and fairness. The ending, when violence reaches him in London, tests that belief cruelly.",
    },
    more: "The phrase shows his faith and his naivety at once, and lets the play measure a literary idea of Britain against what Alem actually meets: a children's home, a court that will not listen, a knife.",
    tip: "Use it in an essay on justice: set Mr Kelo's book-learned Britain against the adjudicator's ruling to show the gap between a country's best idea of itself and what it does.",
  },
  'he looked as if he had been put together all wrong': {
    why: 'The narrator says this of Meshak in Part One of Coram Boy. The passive had been put together makes him sound like an object badly assembled by someone else, and all wrong is how the world judges him. Pearson printed the line above its 2022 question.',
    more: "Gavin gives us other people's view of Meshak first, so that his tenderness and courage later overturn it. The boy everyone mocks is the one who saves a baby and watches over him for years.",
    tip: "Use it to link Meshak to his society's fear of disability, then show how the plot proves that judgement wrong.",
  },
  'speaker: He must accept his status and birth': {
    why: 'Lady Ashbrook says it in Part One, when her daughter begs her to stop what is being done to Alexander. The modal must allows no argument, and status and birth fixes who he is at the moment he was born: the house outranks the son.',
    not: {
      'Sir William, as he takes Alexander out of the school':
        "It sounds like Sir William, and it is easy to credit it to him, but in the novel his wife says it. The expectation belongs to the whole family, not one man's temper.",
      'Admiral Bailey, thumping the table at the orphanage committee':
        "Admiral Bailey does sneer at where the orphans come from, but he is talking about other parishes' children. This line is about the heir of Ashbrook.",
      "Mrs Milcote, as she fears for Melissa's good name":
        "Mrs Milcote's fear is of shame and ruin, not of a son leaving his place. The line insists that an heir must accept the life he was born to.",
    },
    more: 'Coming from the mother, a reformer who works to improve the parish orphanage, the line shows that rigid ideas of rank belonged to a whole class. She can pity poor children and still refuse her own son a choice.',
    tip: "Use it in an essay on class or parents: set Lady Ashbrook's charity beside this line to show a reformer defending the order that makes reform necessary.",
  },
  'speaker: In their eyes, I’m nothing but an animal': {
    why: "Toby says it to Aaron in Part Two, describing his life as a servant in Mr Gaddarn's house, where he is dressed up and shown off to guests. He adds that he is no different from one of Gaddarn's poodles: petted as a novelty, owned as property.",
    not: {
      'Thomas, after his first day at Ashbrook House':
        "Thomas's first day at Ashbrook is an ordeal that shows the gap between rich and poor, but he is a guest there, not property. Being owned and shown off is Toby's experience.",
      'Meshak, travelling the roads with his father':
        "Otis does use Meshak as labour, and others mock him, but Meshak believes his father a good man. The clear-eyed judgement of how he is seen is Toby's.",
      'Toby, as he climbs onto the side of the slave ship':
        "On the ship Toby shivers with dread at the thought of chains, but this line is about his life as a servant, and he says it to Aaron about Gaddarn's house.",
    },
    more: 'In their eyes separates what Toby is from how he is seen, so he keeps his dignity even as he names the insult. Gavin links him to the black servants shown off as status symbols in wealthy eighteenth-century houses.',
    tip: "Use Toby in an essay on race or freedom: show that he understands his position exactly, which makes him far more than a victim of his century's attitudes.",
  },
  'point: Coram Boy: Which line shows a father disowning his son to protect his new name?': {
    why: "Mr Gaddarn says it in Part Two, when Meshak recognises him in his London house. Gaddarn is Otis Gardiner, Meshak's father, rebuilt as a rich benefactor. He uses the world's contempt for Meshak as a weapon, so that nobody will listen to what his son knows, and has him locked up.",
    not: {
      'I’ve enough songbirds on this estate':
        "Sir William dismisses his son's gift in Part One, but he is hiding from nobody. He wants Alexander to become a sensible heir, not to vanish.",
      'pots man, Jack-of-all-trades and smooth-tongued entrepreneur':
        'This is the narrator introducing Otis in Part One, long before his new name. It shows his charm and self-promotion, not him disowning his son.',
      'the only way I know to get that music madness out of your system':
        "Sir William says this as he canes Alexander. It is a father's cruelty, but it aims to keep his son as heir, not to deny that he is his son.",
    },
    more: "Otis disowns his son to protect his new name, repeating in a grand London house the cruelty of the country roads. The insult lunatic turns other people's prejudice against Meshak into a tool.",
    tip: "Use the line to show how Gavin connects Otis's two lives: the respectable Gaddarn of Part Two is the same man, and his charity hides the same trade in children.",
  },
  'word: If I abandon it, it will surely die | Which word keeps the baby, her own grandchild, at a distance?':
    {
      why: "Mrs Milcote thinks this late in Part One, as she weighs what to do with Melissa's baby. Calling her own grandchild it keeps the baby at a distance, as if it were a problem to be solved rather than a member of her family.",
      not: {
        abandon:
          'Abandon names the terrible choice in front of her, leaving the baby to its fate. It describes an action, not the way she thinks of the child.',
        surely:
          'Surely makes death certain if she abandons the baby. It shows that she knows the stakes, not that she keeps the child at a distance.',
        die: 'Die is the outcome she fears. It shows what is at stake, not how she pictures the baby.',
      },
      more: "The sentence goes on to set her own and her daughter's ruin against the baby's life, as though the two were equal. It is the novel's sharpest picture of what the shame of an illegitimate birth did to decent people.",
      tip: 'Use it in an essay on reputation or secrets: Mrs Milcote is not cruel, so her dilemma shows how society, not only villains like Otis, put babies in danger.',
    },
  'I’m your uncle ... and I love you': {
    why: "Adam says this when he first meets his baby niece, Emma, in Boys Don't Cry, giving himself a name, a relationship and a declaration of love in one breath. The ease of it contrasts sharply with Dante, who at this point wonders why he feels nothing for his daughter.",
    more: "Adam is the Bridgeman who says what he feels, which is what the rest of the family must learn. His instant love shows that care is possible straight away, and it makes Dante's slower change easier to measure.",
    tip: "Use Adam's openness in an essay on masculinity: the brother who says what he feels is the one the world of the novel punishes, which sharpens its criticism of the rule in the title.",
  },
  'speaker: no way I was going to let Melanie and some baby ruin my plans': {
    why: 'Dante thinks this at the very start, soon after Melanie leaves Emma with him, with university less than a month away. The possessive my plans puts him at the centre of his own story, and some baby refuses Emma a name or any tie to him.',
    not: {
      'as he researches fostering and orders a DNA test':
        'Dante is still looking for a way out here, but he is already acting on his doubts. The flat refusal to let a baby ruin his plans is his first reaction, in the opening chapters.',
      'as he confirms his university place':
        'Confirming his place shows he still clings to his plans, but by then he has been caring for Emma for weeks. The blunt refusal belongs to the opening chapters.',
      'as he posts off his DNA swabs':
        'Sending the swabs is another escape route, but he does it feeling guilty, which shows how far he has moved. The careless some baby comes before any guilt at all.',
    },
    more: 'It is the attitude the whole novel exists to change. By the end the same possessive attaches to his daughter rather than to his plans, which makes the line a strong starting point for an essay on his development.',
    tip: "Open an essay on Dante's development with this line, then trace the words he uses for Emma, from an impersonal baby to his own daughter.",
  },
  'speaker: I brought myself up, Dante. I don’t know how to bring up anyone else': {
    why: 'Melanie says it on the day she leaves Emma with Dante, the only time she appears in the novel. Her father left and her mother worked two jobs, so she brought herself up, and the repeated bring up links her childhood to her motherhood: she cannot give what she was never given.',
    not: {
      'Aunt Jackie, telling Dante why she has no children':
        'Aunt Jackie explains that she could not have children, which is why her husband left her. Hers is a story of longing for a child, not of being unable to raise one.',
      'Dad, when he learns that Emma exists':
        'Dad is angry and tells Dante to take responsibility, and he has brought up two boys alone. He would never say he cannot bring anyone up.',
      'Collette, making it clear she is going to university':
        "Collette chooses her own future, but she is not Emma's mother and says nothing about her own upbringing. The plea about being raised alone is Melanie's.",
    },
    more: "Addressing Dante by name makes the line a plea rather than an excuse. Blackman asks readers to understand a mother who leaves rather than simply condemn her, and sets society's judgement of her beside the praise Dante receives for staying.",
    tip: 'Use it in an essay on parents or women to question the double standard: Melanie is judged for leaving, while Dante is praised for doing what mothers are simply expected to do.',
  },
  "point: Boys Don't Cry: Which line shows Dad deciding to say aloud the praise he has always held back?":
    {
      why: 'Dad says it to Dante at the hospital, while Adam is in surgery. For most of the novel he has given orders instead of praise, and Dante has long resented it. I want you to know is the sound of a man deciding to say it aloud rather than assume it is understood.',
      not: {
        'You walked away':
          "Aunt Jackie praises Dante with these words when he has stopped himself in anger. It is praise, but from his aunt, and for a choice, not a father's held-back pride.",
        'no way I was going to let Melanie and some baby ruin my plans':
          "These are Dante's own words, putting his plans first. They are not Dad's, and they praise nobody.",
        'grow up, man up. You have a daughter':
          'Dad says this when he first learns about Emma. It is an order, not praise: he tells Dante to take responsibility, the opposite of the pride he later says aloud.',
      },
      more: "Pearson's 2023 mark scheme uses the line to show Dante's growing maturity bringing father and son closer. Coming at the family's lowest point, it suggests that a crisis can break the rule the title names.",
      tip: "Pair Dad's change with Dante's: an essay on fathers and sons can show praise and love being passed down, and coming more easily to the son than they did to the father.",
    },
  'word: I brought myself up, Dante. I don’t know how to bring up anyone else | Which word shows that no adult raised Melanie?':
    {
      why: 'Melanie tells Dante that she brought herself up: myself makes her both the child and the only adult in her own childhood. Her father left and her mother worked two jobs, so nobody else did it.',
      not: {
        brought:
          'Brought is the verb she repeats as bring up, linking her childhood to her motherhood. It names the job, not who did it.',
        know: 'Know is part of her admission that she does not know how to be a mother. It shows her fear, not her missing parents.',
        anyone:
          "Anyone points forward, to the child she cannot raise. It is about Emma's future, not Melanie's own past.",
      },
      more: "Blackman gives Melanie a history of neglect in a single pronoun. Thrown out by her mother and living in one room of an aunt's flat, she has no model of being cared for to follow.",
      tip: 'Use the word to show how Blackman builds sympathy for Melanie, then weigh it against a society that condemns mothers who leave far more than it condemns fathers.',
    },
  'She had never heard of mixed feelings. There were friends and there were enemies.': {
    why: "Jeanette says this of her mother on the opening pages of Oranges are not the Only Fruit, in Genesis. Two short, flat sentences give the mother's whole view of the world in the rhythm of a rule: everyone is either for her or against her.",
    more: "The comedy is in the deadpan, but the line plants the novel's central problem: a mother with no room for mixed feelings will one day have a daughter she cannot sort into either list.",
    tip: "Open an essay on the mother with this line, then show how Jeanette's love for Melanie forces her mother to put her own daughter among the enemies.",
  },
  'speaker: I’m not havin’ demons here.': {
    why: "Jeanette's mother says it in Judges, when Jeanette tells her and the pastor that she is leaving the church and will not repent. The dropped g gives her northern voice at its most final, and demons shows that she still sees her daughter as possessed rather than as a person.",
    not: {
      "Jeanette's mother, locking Jeanette in the parlour":
        "Her mother does lock her in the parlour in Joshua, on the pastor's instructions, but that is to keep her in until she repents. This line puts her out for good.",
      'Pastor Finch, preaching on how easily demons possess':
        "Pastor Finch's sermon in Genesis is full of demons, but it is a warning, not an eviction. The mother is the one who finally acts on such fears, against her own daughter.",
      'the pastor, when Jeanette says she will not repent':
        'The pastor is there when Jeanette refuses to repent, but the house is not his to clear. The blunt here belongs to the mother on her own doorstep.',
    },
    more: "The line is almost comic in its bluntness, which the 2024 examiners' report noted, and that makes it harder to bear. A mother's home is closed to her daughter in five words.",
    tip: "Trace the language of demons across the novel, from Pastor Finch's sermon to the exorcism in Joshua, to show how the church's fears are turned against Jeanette.",
  },
  'speaker: These children of God have fallen foul of their lusts.': {
    why: "The pastor says it in Joshua, calling Jeanette and Melanie to the front of the church with Jeanette's mother weeping beside him. He calls them children of God and in the same breath accuses them of lust, so the phrase condemns while pretending to pity. The girls are accused before they are asked anything.",
    not: {
      'Pastor Finch, preaching on demons and possession':
        "Pastor Finch's sermon in Genesis warns that the best can become the worst, but it names no sinners. This public accusation of two girls comes later, from the church's own pastor.",
      'the pastor, after Jeanette and Katy are found at Morecambe':
        "After Morecambe the church decides that Jeanette's trouble comes from doing a man's work. Jeanette takes all the blame there to protect Katy, so only one girl stands accused.",
      "Jeanette's mother, as she burns the letters from Melanie":
        "The mother burns the letters while Jeanette lies ill, and something between them breaks. The public, scriptural denunciation is the pastor's, in front of the congregation.",
    },
    more: "The repetition of the phrase in his speech works like a hammer, and the public setting turns the congregation into judges. Jeanette's answer, turning scripture back on him, is one of her most defiant moments.",
    tip: "Use the scene to show how the church controls through public shame, and contrast the pastor's use of scripture with Jeanette's own use of the Bible in reply.",
  },
  "point: Oranges are not the Only Fruit: Which line shows the mother's principles giving way as soon as they cost her something?":
    {
      why: "Jeanette says this in Numbers about her mother and the butcher who was once her sweetheart. The balanced sentence turns on but: the moral verdict comes first and the cheap mince second. Her principles are real until they cost her something, and the 2025 examiners' report singles the line out.",
      not: {
        'My mother said he looked like Errol Flynn, but holy.':
          'This is about Pastor Spratt, who converted the mother, in Genesis. It exposes the romance in her faith, not principles dropped for a bargain.',
        'they called her the Jesus Belle':
          "This nickname from the church's early days, when she sang in pubs to win converts, gives the mother a glamorous past. It is about her zeal, not her hypocrisy.",
        'it’s an Abomination, it’s like saying we come from monkeys':
          "Here the mother's principles are on full, absurd display as she turns a nature programme into an attack on faith. Nothing is given up; she is at her most rigid.",
      },
      more: "It is the novel's hypocrisy in miniature, told in a deadpan voice that lets the reader laugh and judge at once. Winterson's comedy makes the mother absurd without making her a monster.",
      tip: "In an extract answer, use the sentence's structure: point to the turn on but, and show how Winterson builds comedy from the gap between what the mother says and what she does.",
    },
  'word: The Heathen were a daily household preoccupation. | Which word turns the neighbours into a biblical category?':
    {
      why: "This is the opening sentence of Leviticus. The capital H makes Heathen a biblical category, so the neighbours become enemies of the faithful rather than people next door. It sets up the chapter's comic battle with Next Door, fought with a hymn played loudly through the wall.",
      not: {
        daily:
          'Daily makes the crusade a routine, as regular as meals. It adds to the comedy, but it is not a biblical label.',
        household:
          'Household makes the war on the neighbours a domestic matter, something the family does at home. It domesticates rather than condemns.',
        preoccupation:
          'Preoccupation is a dry, almost clinical word that makes the crusade sound like a hobby. It mocks the obsession; it does not name the enemy.',
      },
      more: "The sentence shows a household that defines itself by who it is against. The mixture of grand biblical labels and ordinary domestic life is the source of much of the novel's humour.",
      tip: "Notice Winterson's capital letters: commenting on how the mother turns neighbours and nature programmes into biblical categories is a precise way into her character.",
    },
  'Breaking bread with the dead, sir. That’s what we do.': {
    why: "Akthar says this to Irwin in Act 1 of The History Boys, as the boys describe Hector's lessons to the new teacher. The phrase makes reading a shared meal with dead writers, with a hint of religious communion in breaking bread.",
    more: "It is one of the loveliest descriptions of Hector's teaching in the play, and also part of a teasing performance: the boys enjoy unsettling Irwin, and the polite, repeated sir shows that they, not he, control the conversation.",
    tip: "Use it in an essay on education to show what Hector's lessons mean to the boys, and notice that they use his ideas to test the new teacher.",
  },
  'speaker: Whatever I do in this room is a token of my trust.': {
    why: 'Hector says it in his first lesson of the term, as a joke about his own classroom slapstick, just after the boys complain that he hits them. But it is also a claim about power: whatever he does, the boys must accept it because he is their teacher.',
    not: {
      'Irwin, in his first lesson with the boys':
        "Irwin's first lesson is about exams and rivals, and he has no shared history with the boys to call on. The claim to a room built on trust is Hector's.",
      'Hector, when the Headmaster says he has been seen':
        'When the Headmaster confronts him, Hector does not defend himself in plain words at all: he answers with lines of poetry.',
      'Hector, after he breaks down in front of the class':
        'When Hector breaks down in Act 2 he shouts and then weeps. It is a moment of collapse, not of confident claims about his classroom.',
    },
    more: "Once the audience learns what Hector has been doing to boys on his motorbike, the line becomes one of the play's darkest pieces of dramatic irony: a token of trust that he is already abusing.",
    tip: "Use it to show how Bennett's dramatic irony works: a line heard as a joke in the first scene is heard quite differently once the audience knows more.",
  },
  'speaker: Plainly stated and properly organised facts need no presentation, surely.': {
    why: "Mrs Lintott says it to the Headmaster in the staff room, when he praises the boys' results but asks for charm and presentation. It is her whole method in one sentence, plain, orderly and confident, and the final surely is both polite and a challenge.",
    not: {
      'Hector, when Irwin asks to use his material':
        'Hector despises exam technique, but he values knowledge for its own sake, not plain facts. He would never reduce his teaching to properly organised facts.',
      "Posner, objecting to Irwin's Holocaust lesson":
        "Posner objects that Irwin's detached approach makes the suffering smaller, which is about truth and feeling. This sentence defends a teaching method to a boss.",
      'Rudge, answering questions at his mock interview':
        'Rudge is plain-spoken, but this is a teacher defending her method. The staff-room setting and the challenging surely belong to Mrs Lintott.',
    },
    more: 'When the Headmaster presses her, she mocks the idea of facts as a garnish. The play is not sure she is right, but it clearly likes her for saying it.',
    tip: "Use Mrs Lintott as the third position in an essay on education: plain facts, set against Hector's knowledge for its own sake and Irwin's clever presentation.",
  },
  "point: The History Boys: Which line suggests that the past is told as men's story, with others left to clean up after them?":
    {
      why: 'Mrs Lintott says it in Act 2, during the mock interviews, at the end of a sharp speech about why history is written by and about men. The bucket is a brilliantly unglamorous image: men make the wars and the headlines, while women clean up after them and are left out of the record.',
      not: {
        'It’s not so much lest we forget, as lest we remember.':
          "Irwin's paradox is about how a nation remembers its wars: public mourning, he argues, hides Britain's share of the blame. It says nothing about who is left out.",
        'All knowledge is precious whether or not it serves the slightest human use':
          "This is Hector's creed, borrowed from Housman, about learning for its own sake. It concerns the value of knowledge, not whose story history tells.",
        'Think charm. Think polish. Think Renaissance Man.':
          "The Headmaster wants the boys polished for their interviews. Man here names an ideal of the well-rounded scholar, not history's neglect of women.",
      },
      more: "The line turns the play's argument about history outwards, and it reminds the audience that the play itself has one woman teacher and a secretary who never appears on stage.",
      tip: 'Use the line to widen an essay on history beyond Hector and Irwin: Mrs Lintott asks not how history should be taught, but whose history gets told at all.',
    },
  "word: call them what you like, but do not call them gobbets | What does 'gobbets' suggest here?":
    {
      why: "Hector says it to Irwin in Act 1, when Irwin asks to let the boys use Hector's quotations in the exam. A gobbet is an examiner's word for a short extract, but also a lump of raw meat, and Hector hears the insult: poetry hacked into chunks to be used.",
      not: {
        'rare jewels, to be treasured for life':
          'That is how Hector himself sees the quotations, which is exactly why the word offends him. Gobbets suggests the opposite: something crude and chopped up.',
        'jokes to wake up a bored examiner':
          "Waking up a bored examiner is Irwin's aim, but the word is not about jokes. Hector objects to it because it turns living words into raw lumps.",
        'spells with a hidden, magical power':
          'Hector reaches for words of magic and hidden meaning as alternatives, precisely because gobbets has no magic in it at all.',
      },
      more: 'The clash of vocabulary is the clash of the two teachers: quotation as a tool to be deployed in an exam, or quotation as something closer to a spell, carried for life.',
      tip: "Quote this exchange to show how Bennett dramatises an argument about education through single words, then link it to Hector's contempt for exams in the same scene.",
    },
  'White women teaching colored women how to stop having children.': {
    why: "Sam says this to Delia in Act 1, Scene 3, as he helps her rehearse the speech that must win the church's support for her family planning clinic. He is voicing the hostile case she will face, what he thinks many Black men in Harlem believe, not his own view.",
    more: 'The blunt fragment, with no main verb, turns a kindly project into a story of racial power. Cleage lets both sides of a real argument speak: in 1930 Margaret Sanger opened a Harlem clinic, and followers of Marcus Garvey feared white-led birth control aimed to shrink the Black population.',
    tip: 'Use it to show that Cleage refuses to make the clinic debate simple. Say clearly that Sam supports the clinic: quoting this as his own belief is a common mistake.',
  },
  'I plan to walk where I please, wearing what I please, whenever I please.': {
    why: 'Guy says this to Angel in Act 2, Scene 1, after a confrontation with young men near the store. Rather than hide, he claims three freedoms at once: where he goes, what he wears and when. It is his answer to homophobic threats in 1930 Harlem.',
    more: "The tricolon, each clause ending on 'please', gives his defiance the rhythm of a manifesto. Sex between men was a crime in every American state in 1930, so his refusal to hide takes real courage, and Guy lives the freedom the others only talk about.",
    tip: "Set it beside Leland's condemnation at the tea party later in the same scene: two men, two views of freedom. Name the technique, then say what each of the three clauses claims.",
  },
  'speaker: Everybody in Harlem is singing the blues.': {
    why: "Angel says it in the first scene, at three in the morning, after Guy and a stranger, Leland, have helped her home drunk. In one night she has lost her job at the Cotton Club, her gangster lover and her flat, and she turns Guy's encouragement into a verdict on the whole city.",
    not: {
      'Guy, helping Angel home after she is sacked':
        "Guy is there and starts the exchange by telling her she can still sing the blues. The bleak reply is Angel's: she turns his hope into a joke.",
      'Angel, back from her false audition':
        'After the false audition in Act 1, Scene 5 Angel does give up on dreams, but there she turns to Leland for security. This line belongs to the night she is sacked.',
      'Sam, explaining why he stays out late in the clubs':
        'Sam loves the clubs because the music keeps him human after long days at the hospital. He hears hope in that music, and he is not in the first scene at all.',
    },
    more: "The line works two ways: blues singers are ten a penny, so Angel cannot stand out, and everyone in Depression Harlem has reason to be sad. It announces the music of the title as the play's mood, and shows Angel's habit of cutting hope down with a joke.",
    tip: 'Use it early in an essay on the Depression: wit is how Angel survives. Link it to the title, since the blues is Southern music sung in Harlem, so the pain the characters fled has followed them north.',
  },
  'speaker: This is my chance to live free, Doc, and I’m taking it.': {
    why: 'Angel says it to Sam, whom she calls Doc, in Act 2, Scene 3. Guy has arrived with passage to Paris and a ticket for her, and Angel, engaged to Leland and pregnant, decides to go. She asks Sam to end the pregnancy, and he reluctantly agrees.',
    not: {
      "Guy, with Josephine Baker's invitation to Paris":
        "Guy's dream of freedom in Paris comes true in this scene, and the line sounds like him. But it is Angel who borrows his language of freedom, to explain a choice about her own body.",
      'Delia, after the church backs her clinic':
        'Delia and Sam do return in triumph when the church backs the clinic, but that is in Act 1, Scene 4. This line is about leaving Harlem, not building something in it.',
      "Angel, accepting Leland's proposal":
        'At the proposal Angel chooses security: she accepts Leland and tells him about the baby. Only the next day does the ticket to Paris change her mind.',
    },
    more: 'The simple, decisive sentence and the affectionate Doc make the choice sound reasonable, even brave. But she has just agreed to marry Leland, so the audience hears freedom and selfishness in the same breath, which is the judgement the play asks us to weigh.',
    tip: 'Use it in an essay on how far Cleage makes us sympathise with Angel. Show both readings: a woman claiming her freedom, and a choice that costs others dearly, since Sam is shot for helping her.',
  },
  'speaker: Tawdry and tainted and running for our natural lives!': {
    why: "Guy says it to Delia in the final scene, two weeks after the shooting. The papers have turned Sam's death into a scandal, and Delia says the story sounds tawdry. Guy agrees and includes everyone in it, owning the scandal instead of denying it.",
    not: {
      "Delia, as the papers make a scandal of Sam's death":
        'Delia is the one who calls the newspaper story tawdry, but she is grieving and ashamed. Guy picks up her word and turns it into a defiant description of them all.',
      'Guy, the day the clinic is set on fire':
        "On the day of the clinic fire, in Act 2, Scene 3, Guy arrives with Josephine Baker's invitation, his dream come true. There is no scandal yet, and Sam is still alive.",
      "Angel, slipping back after Sam's death":
        'Angel slips back near the end, but she and Delia part with barely a word. She makes no speech about the scandal.',
    },
    more: "The alliteration of 'Tawdry and tainted' admits the shame, and 'running for our natural lives' turns shame into survival. It is close to the play's own attitude: nobody here is pure, and nobody deserves to be judged by the headlines.",
    tip: "Use it on the ending or on chosen family. About to sail, Guy still says 'our': he will not abandon his friends to the headlines, and he has paid Angel's rent ahead before he goes.",
  },
  'point: Blues for an Alabama Sky: Which line makes a prediction that the end of the play proves wrong?':
    {
      why: "Angel says it to Delia in Act 1, Scene 3, dismissing her oldest friend as someone who will never change. The ending proves her wrong: Josephine Baker sends for Guy and he sails for Paris, while Angel's practical plan to rely on a man ends in disaster.",
      not: {
        'For prospects, you gotta look past 125th Street.':
          "Guy's advice to look beyond Harlem is borne out, not overturned: his prospects really do lie in Paris. The ending rewards it.",
        'Is that your dream? Singing for gangsters?':
          "Guy's scornful question is proved right, if anything: the audition Nick arranged turns out to be a proposition, not a singing job.",
        'for a red-hot minute, we did':
          'Guy says this in the final scene, looking back on what Harlem was meant to be. It is a verdict on the past, not a prediction.',
      },
      more: "The balanced repetition of 'always was' and 'always will be' fixes Guy as a man who cannot change, which is what makes the line dramatic irony. For most of the play the audience may share Angel's realism, because Paris looks like a fantasy.",
      tip: "Use it in an essay on dreams and reality. Strong answers show how the ending reverses the audience's sympathies: the dreamer is rewarded, and the realist's choices break the group apart.",
    },
  'point: Blues for an Alabama Sky: Which line first reveals that Leland is drawn to Angel because of the wife he lost?':
    {
      why: 'Leland says it to Angel in Act 1, Scene 4, alone with her on their first date. The vague somebody turns out to be his wife, who died in childbirth, and the baby too, so from the start his love is for a likeness.',
      not: {
        'Hot enough for you?':
          'Angel calls this from her window in Act 1, Scene 2, flirting with a passer-by she does not remember meeting. Nothing about his wife has been said yet.',
        'that Alabama sky where the stars are so thick it’s bright as day':
          "Leland's memory of the starry night comes in his proposal in Act 2, Scene 2. It shows his longing for home, but the likeness to his wife was revealed long before.",
        'Pretend I’m Anna. Pretend I love you.':
          'This names what Leland wanted, but Angel says it in Act 2, Scene 4, at their last meeting. It is her accusation at the end, not his first admission.',
      },
      more: "A hesitation before the line, marked in the stage directions, shows grief he can hardly speak, and 'back home' ties the likeness to Alabama. He wants Angel to restore the life he lost, which she can never do.",
      tip: 'Use it in an essay on Leland: it lets you argue that he is grieving rather than simply villainous, while showing that what he loves is an idea of Angel, not Angel herself.',
    },
  "word: in Alabama, there’s still such a thing as abomination! | What does 'still' suggest here?":
    {
      why: "Leland says it at Guy's tea party in Act 2, Scene 1, after Guy's story about men flirting at a party. Still means even now: in Alabama the old standard survives, which implies that up North, in Harlem, it has collapsed. He sees the South as a place of order and the North as a place of sin.",
      not: {
        'that Leland is speaking quietly, holding back his anger':
          'Still here means even now, not calm. The line ends in an outburst, and Guy, standing, orders him out.',
        'that Leland grants Guy a point before objecting':
          'Leland grants Guy nothing. Still could mean nevertheless only at the start of a sentence; here it says the standard continues to exist.',
        'that Leland expects the South to change its views soon':
          'Leland is proud that Alabama has not changed. He sees Harlem as the place that has fallen, and does not expect his home to give way.',
      },
      more: 'Abomination is a word from the Old Testament condemnation of sex between men, so Leland uses the Bible as a weapon. The clash is regional and religious as well as personal, and it is the first open crack in the group.',
      tip: 'Analyse a single word like this in an essay on prejudice: say what it implies about how Leland sees the North and the South, then link his rigid beliefs to the violence of Act 2, Scene 4.',
    },
  "word: Pretend I’m Anna. Pretend I love you. | What does the repeated 'Pretend' suggest here?": {
    why: 'Angel says it to Leland in Act 2, Scene 4, after he arrives with a rocking chair and a ring. The two imperatives expose the relationship: he wanted a copy of Anna, his dead wife, and she acted a love she did not feel. Both have been pretending.',
    not: {
      "that Angel is offering to take Anna's place":
        'Read alone the words could sound like an offer, but they are bitter. Angel is naming what their relationship has been, not promising to go on with it.',
      'that Angel is playfully teasing Leland':
        'There is nothing playful here. It is her most honest moment, and it tips Leland into violence.',
      'that Angel hopes she may come to love him':
        'She is about to leave for Paris. The line ends the pretence; it does not hope to make it real.',
    },
    more: "Honesty and catastrophe arrive together: soon afterwards Leland guesses that Sam helped her, leaves, and shoots him in the street. Naming Anna is Angel's cruellest act and her most truthful one.",
    tip: 'Analyse the repetition: two short sentences opening with the same imperative strip the romance away. Use it to show how Cleage makes the audience hold two judgements of Angel at once.',
  },
  'I know a bank where the wild thyme blows, / Where oxlips and the nodding violet grows,': {
    why: 'Oberon says this in Act 2 Scene 1, when Puck returns with the love-in-idleness flower. He describes the flowery bank where Titania sleeps at night, and plans to squeeze the juice on her eyes there so that she will love the first creature she sees.',
    more: "The lush list of flowers makes the wood a place of beauty and enchantment, and the verse settles into rhyming couplets. Yet the speech is a plan to humiliate his wife: Oberon's poetry hides a cruel trick, so the fairy world is never simply innocent.",
    tip: "Use it when writing about setting and the supernatural: the wood is beautiful and dangerous at once, a place where one person's desire can be controlled by another's magic.",
  },
  'And yet, to say the truth, reason and love keep little company together nowadays.': {
    why: "Bottom says this in Act 3 Scene 1, wearing an ass's head, when Titania wakes under the charm and swears she loves him at first sight. He observes, quite rightly, that she has little reason to, since reason and love rarely go together these days.",
    more: "The play's wisest remark about love comes from the man with an ass's head. The dramatic irony is double: Bottom is right without knowing why, and Titania praises him as wise and beautiful, which is true in a way she cannot see.",
    tip: "Use it to connect the lovers' plot to the fairy plot: from Helena in Act 1 to Titania in Act 3, love in this play ignores reason, and the fool is the one who says so.",
  },
  'speaker: The course of true love never did run smooth.': {
    why: 'Lysander says it in Act 1 Scene 1, comforting Hermia moments after Theseus has told her to marry Demetrius, die or become a nun. He lists what has always wrecked love, differences of rank or age, the choice of friends, war, death or sickness, and Hermia cries out at each of the first three.',
    not: {
      'Hermia, as she and Lysander plan their escape':
        "Hermia is with him, but she answers his list rather than starting it, crying out against the obstacles he names. The general truth is Lysander's.",
      'Helena, alone after Hermia and Lysander tell her their plan':
        'Left alone, Helena does speak about love, but about how it judges with the mind rather than the eyes. She makes no claim that love has always been obstructed.',
      "Puck, watching the lovers' confusion in the wood":
        'Puck laughs at the lovers in the wood and treats their troubles as a show. This sad general truth comes from a lover himself, in Athens.',
    },
    more: 'The line sounds like a proverb, and the play tests it: the lovers are blocked by a father, then by magic, and finally freed by the same Duke who threatened them. In a comedy, the rough course is what makes the smooth ending possible.',
    tip: 'Use it as a thesis for an answer on love: quote it, trace each obstacle in turn, and note that the obstacles come from parents, law and fairies rather than from the lovers.',
  },
  'speaker: I have had a most rare vision.': {
    why: 'Bottom says it in Act 4 Scene 1, waking alone in the wood after the charm is lifted and his own head restored. He tries to describe what happened, keeps breaking off, and decides it was a dream too deep to explain, which Peter Quince must make into a ballad.',
    not: {
      'Titania, waking from the charm':
        'Titania wakes in the same scene and also speaks of visions, but she is disgusted to think she loved an ass. She speaks in verse to Oberon, not in wondering prose to herself.',
      'Hermia, waking with the other lovers':
        'Waking with the others, Hermia says she sees with parted eye, so that everything seems double. Her confusion is shared with the lovers; Bottom wakes alone.',
      'Demetrius, waking beside Helena':
        "Demetrius wonders whether they are still asleep, but he wakes to a new love for Helena, not to a memory of fairies. The rare vision is the weaver's.",
    },
    more: "Bottom's speech is absurd and genuinely awed: he muddles the senses and garbles a passage from St Paul about wonders no eye has seen. The one mortal who met the fairy queen cannot put it into words, which makes him an unlikely poet of the play's magic.",
    tip: "Contrast Bottom's wonder with Theseus's rational dismissal of the lovers' story in Act 5: the play lets the fool, not the Duke, glimpse the truth.",
  },
  'speaker: This is the silliest stuff that ever I heard.': {
    why: "Hippolyta says it in Act 5 Scene 1, during the craftsmen's Pyramus and Thisbe, just after Wall leaves the stage. Theseus answers that the best plays are only shadows, and the worst no worse if imagination mends them; she replies that it must be his imagination, then, not theirs.",
    not: {
      "Theseus, watching the craftsmen's play":
        "Theseus is the kinder judge here: he answers her that even the best actors are only shadows, and imagination can mend the worst. The scorn is Hippolyta's.",
      'Philostrate, describing the play to Theseus':
        'Philostrate does warn Theseus that the play is tedious, but before it begins, having seen it rehearsed. This verdict comes during the performance.',
      "Demetrius, mocking the craftsmen's Wall":
        'Demetrius mocks the play with puns, including one about the wall just before this line. He jokes rather than giving a plain verdict.',
    },
    more: "The exchange turns the craftsmen's play into a lesson on the whole comedy: it works only if the audience's imagination helps. Hippolyta, who earlier gave the lovers' strange story more credit than Theseus did, is the sharper critic here, and both are partly right.",
    tip: "Use it to write about the play within the play: the courtly audience laughing at bad actors mirrors the real audience watching Shakespeare's shadows, so Theseus's reply works as a request for our own imagination.",
  },
  "point: A Midsummer Night's Dream: Which line recalls the childhood closeness of two friends whom the night's quarrel drives apart?":
    {
      why: 'Helena says this in Act 3 Scene 2, when she believes Hermia has joined the two men in mocking her. She reminds Hermia how they grew up sewing one flower on one sampler, like two cherries on a single stem, and asks whether she will now tear their old love apart.',
      not: {
        'And though she be but little, she is fierce.':
          'Helena says this in the same quarrel, but it is an insult with a little grudging respect: Hermia was a vixen at school. It shows the friendship breaking, not its old closeness.',
        'I am your spaniel; and, Demetrius, / The more you beat me, I will fawn on you.':
          'Helena says this to Demetrius in Act 2 Scene 1, begging to follow him. It is about her humiliating love for a man, not about her friend.',
        'And for her sake do I rear up her boy, / And for her sake I will not part with him.':
          "Titania remembers a friend, the Indian boy's mother, who died giving birth to him. She keeps the boy out of loyalty, but they were not childhood friends, and no quarrel parted them.",
      },
      more: "The image of two cherries that look separate but share one stem makes friendship a single living thing. Coming just as the charm turns the four lovers against each other, it shows what the night's confusion costs, and what the ending must repair.",
      tip: 'Use the speech to argue that the play is not only about romantic love: the bond between Hermia and Helena, which came before any man, is the first casualty of the wood.',
    },
  "word: As she is mine I may dispose of her; | What does 'dispose' suggest here?": {
    why: 'Egeus asks the Duke in Act 1 Scene 1 for the ancient privilege of Athens. Because Hermia is his, he may dispose of her, which can mean give away or get rid of: either to Demetrius in marriage, or to her death. The verb treats a daughter as property.',
    not: {
      'arrange her future kindly for her good':
        "Egeus may claim to act for Hermia's good, but his next words offer only marriage to his choice or death. Nothing in the word, or the speech, is kind.",
      'persuade her gently to change her mind':
        'Egeus is not persuading at all: he asks the law to enforce his will. To dispose of something is to deal with it as you choose, not to win it round.',
      'protect her from an unworthy young suitor':
        'Egeus does accuse Lysander of bewitching Hermia, but dispose says nothing about protecting her. It describes his right over her, not her safety.',
    },
    more: "The possessive mine and the cold verb turn Hermia into an object, and Theseus backs Egeus, telling her that her father should be to her as a god. The comedy begins with a father's power at its most extreme, so the ending has something real to overcome.",
    tip: "Use it in an answer on patriarchy and control: Egeus's language of ownership sets up a conflict that only the Duke resolves, so the happy ending depends on the same power that threatened it.",
  },
  'word: And this same progeny of evils comes / From our debate, from our dissension; / We are their parents and original. | Which word turns the disasters in nature into the offspring of the fairy quarrel?':
    {
      why: "Progeny means children or offspring. In Act 2 Scene 1 Titania describes floods, rotting crops and seasons out of order, then says this whole progeny of evils comes from her quarrel with Oberon: the fairy rulers are the parents of nature's disorder.",
      not: {
        debate:
          "Debate here means quarrel, the fairy rulers' argument. It names the cause of the evils, not the idea of them as children.",
        dissension:
          'Dissension means disagreement. Like debate, it names the quarrel itself; the image of offspring belongs to progeny.',
        original:
          'Original means origin or source. It says the fairies began the evils, but only progeny pictures the evils as their children.',
      },
      more: "The metaphor of evils as children is pointed, because the quarrel is about a child, the Indian boy. Titania's we shares the blame, while Oberon answers that it lies in her alone; the speech gives her a seriousness that makes her later humiliation harder to laugh at.",
      tip: "Use the speech for the link between the fairy world and nature: the rulers' quarrel disorders the seasons, so Oberon and Titania must be reconciled before the human marriages can be blessed.",
    },
  "what nonsense to name a child after a country that doesn't exist": {
    why: "This is from The Future Looks Good, the collection's first story. Ezinma's mother names her first daughter Biafra out of spite, and the narrative voice takes on the scornful tone of the relatives who shorten it to Bibi. Biafra, the breakaway republic of 1967 to 1970, no longer exists.",
    more: 'The line is funny, but it carries the grief of a lost war: a country for which so many died has become an embarrassing name. Arimah compresses national history into a family detail.',
    tip: "Use it to show the Biafran war shadowing the collection. Link it to War Stories, where a veteran's last story ends in silence, and to the title story, where Biafra exists again in the future.",
  },
  'you do not take small things from small men': {
    why: "This is from What Is a Volcano?, the myth near the end of the collection. The storyteller is warning about Ant, the most minor of the gods, whose grievance against River is laughed off. The rest of the myth shows what a small man's revenge can cost.",
    more: "It sounds like a proverb, and the repeated small is comic, but it carries the story's argument: the powerless can be most dangerous when their grievances are mocked. The teasing storyteller's voice recreates a traditional origin tale told to a child.",
    tip: "Arimah tests her proverbs against events. Quote one and ask whether its story proves it true: this one does, terribly, when Ant steals River's twins. Compare the proverbs in Glory and Who Will Greet You at Home.",
  },
  'speaker: What you are is disappointing.': {
    why: 'In Second Chances these are the last words Uche heard from her mother, in a row eight years before the story, shortly before her mother died. The mother repeats the word until, to Uche, it stops sounding like anger and starts sounding like the truth.',
    not: {
      "Uche's mother, after she returns from the photograph":
        'When she steps out of the 1982 photograph, the mother cooks, charms a salesman and asks Uche what she wants from her. The return is a second chance, not the wound again.',
      'Udoma, when their mother comes back':
        "Udoma welcomes their mother at once and wants to be allowed to enjoy it. Her easy acceptance shows up Uche's guilt; she accuses no one.",
      "Uche's father, when his wife comes back":
        "Uche's father simply welcomes his wife home. The harsh verdict was spoken years earlier, by the mother herself.",
    },
    more: "This flat sentence is the wound the whole story tries to heal, which is why Uche cannot simply enjoy her mother's return and hunts for the photograph instead. In the morning her mother is gone, and Uche finally says sorry.",
    tip: 'Use it in an essay on mothers and daughters: Arimah refuses to sentimentalise the bond. Show that the story is built round words that cannot be unsaid, and one chance to answer them.',
  },
  'speaker: My daughter needs help, not to be help': {
    why: "Buchi says it when her friend Ijeoma offers to take Louisa to South Africa, to live under the name of Ijeoma's dead daughter and to help around the house. Buchi hears that the rescue would turn her daughter into a house girl.",
    not: {
      'Buchi, asking Dickson to help with school fees':
        'Buchi does ask Dickson for help with the fees, and he humiliates her. But nobody there proposes making Louisa a servant, which is what the second help means.',
      'Ijeoma, remembering her own daughter, Soma':
        "Ijeoma lost Soma after a desperate journey between hospitals, but the wordplay is Buchi's reply to Ijeoma's offer, not Ijeoma's memory.",
      'Buchi, on the day the pet chicken is killed':
        'On the day the chicken is killed Buchi decides to accept the offer. This line is her first resistance to it.',
    },
    more: "The wordplay turns on one small word: help as support and help as a servant. The story asks what a poor mother may accept for her child, and Buchi, widowed and living on her sister's charity, has few choices.",
    tip: 'Use it in an essay on bargains and debts. Strong answers notice that Buchi later accepts the very offer this line rejects, and ask whether that is betrayal or love.',
  },
  "speaker: If you can't please the gods, trick them.": {
    why: 'In Glory, the grandfather gives this moral after his fable of a porcupine who tricks a spirit, and the porcupine kills to escape. He is the one relative who accepts Glory as she is, and she takes his advice as permission to lie her way into the family she hopes will save her.',
    not: {
      "Glory's grandfather, the first time he sees her":
        'The first time he saw Glory, her grandfather declared that her chi, her personal spirit, was not well. That was a verdict on her luck, not advice about the gods.',
      'Glory, as she hides her village trips from Thomas':
        "Glory does follow the advice, hiding the truth from Thomas, but the words are her grandfather's, the moral of his story.",
      "Thomas's mother, revealing the plans already made for Glory":
        "Thomas's mother has her own plans for Glory, which makes the family as scheming as Glory. But this proverb is the grandfather's moral.",
    },
    more: "The moral shocks because the porcupine kills to escape, and it leaves the story's question open: is Glory's engagement luck at last, or another trick? At the end she looks at a ring and makes a decision we are never told.",
    tip: "Use it with Arimah's other proverbs: she tests them against events rather than endorsing them. Here the irony is that Glory tricks the gods to join a family that has been scheming too.",
  },
  "point: What it Means When a Man Falls from the Sky: Which line, from a story's first sentence, warns of the loss to come?":
    {
      why: 'Light ends its first sentence with this clause, and its opening lines tell us the girl will come back to her father emptied of her old self before we have even met her. This flash-forward, called prolepsis, turns the story into a slow wait for loss.',
      not: {
        'she is his brightest ember and he would not have her dimmed':
          "This comes later, after the headmaster's complaint, when Enebeli will not punish his daughter. It hints at the dimming to come, but it is not the opening.",
        'there is a little less light to her':
          "This is the first dimming itself, after her mother's disapproval of the boy, near the end of the story. It records loss rather than warning of it.",
        'a well of correction till the flames die out':
          'This is from Redemption, the last story, as Mayowa is sent home in disgrace. It sums up the fate of bold girls, but at an ending, not in a first sentence.',
      },
      more: "Arimah often tells us the ending first, swapping suspense about what happens for dread about how. The vague world is deliberate: no single person dims the girl, many small pressures do, and the father's ignorance becomes painful because we already know.",
      tip: 'Name the technique, prolepsis, and say what it does to the reader. Then trace the light metaphor through the story and across the collection, from Light to the bold girls of Redemption.',
    },
  "point: What it Means When a Man Falls from the Sky: Which line gives Ogechi's mother's reason for destroying the babies Ogechi makes?":
    {
      why: "Ogechi's mother mocks and destroys the soft babies her daughter brings her, pulling a cotton one in half, because she believes a soft child cannot survive a hard, poor life. She wants a child that can plough and scrub. Spoken like a proverb, the line explains both her cruelty and her love.",
      not: {
        'A child that cost much brought much.':
          "This is Ogechi's own hope, on the hair baby's first morning: a costly child must be a better one. It is heavily ironic, since the hair baby brings hunger and harm.",
        'Let this child be born in sorrow':
          "Ogechi says this in the last paragraph, wishing sorrow on her new clay child so it will never have joy to trade. It is her protection, not her mother's reason.",
        "This was the closest she would get to drawing my mother's blood.":
          "This is from Wild: Ada sees that a hostile woman at a fund-raiser is attacking her over an old quarrel with Ada's mother. It belongs to another story entirely.",
      },
      more: "The balanced contrast of soft and hard gives the line the weight of folk wisdom, and the rest of the story tests it. Ogechi runs from her mother, yet ends by giving her new child her mother's face.",
      tip: "Use it to argue that Arimah's mothers are rarely simply good or bad: they harm because the world is hard. Pair it with the story's last line, which can be read as reconciliation or as repetition.",
    },
  "word: Five hundred thousand dollars, baby. That's my girl. | What does 'baby' suggest here?": {
    why: "In Windfalls, Amara's mother whispers this over the hospital bed. Amara, fifteen, has slipped on melted ice cream in a real accident and lost the baby she was quietly hoping for. Her mother's endearment is for the payout, so baby becomes a chilling echo of her daughter's loss.",
    not: {
      'that her mother is gently comforting her daughter':
        'Her mother is not consoling her. The endearments are for the money, and the praise that follows becomes a claim of ownership.',
      'that her mother hopes Amara will keep the baby':
        'The baby is already lost: the last fall was real, and it cost Amara the pregnancy. Her mother speaks after the loss, not before it.',
      'that her mother is grieving for her grandchild':
        'Her mother is celebrating the settlement, not grieving. The whisper over the bed is one of the coldest moments in the book.',
    },
    more: 'The story ends moments later, leaving the reader with the full coldness of the bargain. The irony is situational: after a childhood of staged falls, the only real one pays most and costs most.',
    tip: "Use it in an essay on mothers and daughters or on bargains. The second-person narration has kept Amara's feelings at a distance, so her silence here becomes the story's accusation.",
  },
  'word: drawing them from living bodies like poison from a wound | Which word is grief compared to in this simile?':
    {
      why: "In the title story the narration describes the work of Mathematicians like Nneoma, who use Furcal's Formula to take grief out of people. Them means the griefs, so grief is the poison, the grieving body is the wound, and the Mathematicians are cast as healers.",
      not: {
        drawing:
          "Drawing is the action, the Mathematicians' work of extracting grief. It is what is done to the grief, not what grief is compared to.",
        bodies:
          'The living bodies are where the grief is drawn from, matching the wound. They are the grieving people, not the grief.',
        wound:
          'We often call grief a wound, which is why this tempts. But here the wound is the body the grief is drawn from; the grief itself is the poison.',
      },
      more: 'The medical image hints at danger: poison drawn out has to go somewhere, and the story shows that it goes into the workers. Nneoma needs pills to sleep off the memories of a girl whose grief she takes, a clue to the ending.',
      tip: 'Map a simile part by part before analysing it: what is compared to what. Then ask what the comparison hides: here, that removing grief may only move the harm somewhere else.',
    },
  'rolled a fat ball of irritation into the cool cave of her day': {
    why: "This is from the opening of Anita Desai's novel, as Nanda Kaul watches the postman climb the road towards Carignano and wills him not to stop. Desai turns a feeling into an object: her day is a cool, sealed cave, and irritation is a heavy ball rolled into it.",
    more: 'The metaphor is almost comic, and it shows how little it takes to disturb her calm. From the first page, Desai hints that a peace this easily broken is more fragile than Nanda Kaul admits.',
    tip: "Use it to show how fragile Nanda Kaul's chosen solitude is from the start. Analyse the extended metaphor: the cave for her sealed peace, the ball for the weight of the smallest interruption.",
  },
  'Commotion preceded her like a band of langurs.': {
    why: "This is from the start of Part 3 of Anita Desai's novel, as Ila Das arrives at Carignano for tea, pursued by jeering schoolboys until Ram Lal rescues her stuck umbrella. The comic simile compares the swarming boys to a troop of monkeys.",
    more: 'It sets the tone of the tea party, farce with an edge. The town treats Ila Das as a figure of fun long before it treats her with violence, and Desai makes us laugh with it before making that laughter uncomfortable.',
    tip: "Use it when asked how Ila Das's arrival is both comic and sad. Langurs are monkeys, so the simile turns the jeering boys into a noisy troop around her, and makes her the creature out of place.",
  },
  'speaker: I want no more. I want nothing. Can I not be left with nothing?': {
    why: "Nanda Kaul thinks this in Part 1, Chapter 5, after Asha's letter announces that Raka, still weak after typhoid, is being sent to Carignano for the summer. A woman who has spent her life running a crowded household wants to give no more.",
    not: {
      'Nanda Kaul, as the telephone rings on the last evening':
        "On the last evening she does resent the telephone, in a question that echoes this one. But that echo comes just before the news of Ila Das's death; this is the first cry.",
      'Raka, exploring the ravine alone':
        "Raka does want only to be left alone, but she makes no demands and voices no complaint. This is her great-grandmother's protest at her coming.",
      'Ila Das, chattering about the old days at tea':
        "At tea Ila Das happily relives the old days at the Vice-Chancellor's house. Far from wanting nothing, she clings to the past.",
    },
    more: "Three short sentences, the repeated 'I want', then a question that sounds like a plea. The paradox of asking to be left with nothing suggests exhaustion more than pride, which invites sympathy even when she is coldest.",
    tip: 'Use it in an essay on how far Desai makes us sympathise with Nanda Kaul. Link it to the last page, where she admits that her solitude was forced on her, not chosen.',
  },
  'speaker: There had never been anyone more doomed, more menaced than she': {
    why: "Nanda Kaul thinks this in Part 3, Chapter 10, watching Ila Das set off for home after tea. She sees her friend's danger with the force of prophecy, and yet she does nothing: soon afterwards she feels relief that the danger of the visit has passed.",
    not: {
      'Ila Das, as the grainseller warns her in the bazaar':
        'The grainseller warns Ila that it is not safe to walk alone in the dark, but she insists she is never afraid. She does not see herself as doomed.',
      'Nanda Kaul, as Raka first comes up the path':
        'When Raka arrives, Nanda Kaul sees a thin, silent child and resents the intrusion. Fear for someone comes much later, and about someone else.',
      'Raka, fleeing the club in the dark':
        "Raka is terrified as she runs from the club, and her fear turns into memories of home. This verdict is an old woman's, watching a friend leave.",
    },
    more: 'The absolute never and the paired comparatives make the thought sound like prophecy, and it is: on the path home Preet Singh attacks and kills Ila Das. The reader is left with the gap between seeing and helping.',
    tip: "Use it in an essay on Nanda Kaul's responsibility. Say what she sees, then what she does, which is nothing, and pair it with her relief soon afterwards as dramatic irony.",
  },
  'speaker: A forest fire is more than even a Government welfare officer can tackle': {
    why: 'Ila Das says it at tea in Part 3, Chapter 9, laughing, after telling Nanda Kaul about her fight against a child marriage in her village. Unnoticed, Raka is about to take a box of matches and slip into the ravine.',
    not: {
      'Ila Das, telephoning before Raka arrives':
        "Ila Das's shrill telephone call in Part 1 is about Raka's coming, and the talk falls silent. The joke about forest fires belongs to the tea party, near the end.",
      'Ram Lal, fretting during the dust storm':
        "Ram Lal does fret that his bath-fire could set the hill alight in the dust storm. But the joke is about a welfare officer, and that is Ila's own job.",
      'Nanda Kaul, as a fire burns on the far hills':
        'Nanda Kaul tells Raka that a fire that big can burn houses, even whole villages. She says it seriously, and she is no welfare officer.',
    },
    more: 'The line is heavy with dramatic irony: Raka is about to take the matches, and Ila is about to walk into a danger no welfare officer can tackle. Desai brings the fire and the attack together in a joke.',
    tip: "Use it to show how Desai builds the ending from small foreshadowings. List the fire references through the novel, then show how this one ties the burning mountain to Ila Das's fate.",
  },
  "point: Fire on the Mountain: Which line gives the novel's first image of fire, long before the ending?":
    {
      why: "In Part 1, Chapter 3 the postman passes three pines by the gate of Carignano, already charred, that look like burning men with their arms thrown out. It is the novel's first fire image, an image of agony at the very entrance to Nanda Kaul's haven.",
      not: {
        'she would be a charred tree trunk in the forest':
          'This is a fire image too, but it comes later, in Chapter 7, as Nanda Kaul lies still and imagines becoming dead things. The pines come first.',
        'It was the ravaged, destroyed and barren spaces in Kasauli that drew her':
          "This explains Raka's attraction to the ravine and the burnt house in Part 2, and prepares for her fire. It is about ruin rather than flames, and it comes much later.",
        'Look, Nani, I have set the forest on fire.':
          "This is Raka's announcement on the last page. It is the fire itself, not a foreshadowing of it.",
      },
      more: 'Each fire reference is small and passing, but together they build dread, so that when Raka takes the matches the fire feels inevitable. Placing agony at the gate hints that the house is not the haven it seems.',
      tip: 'Trace the fire imagery in order: the pines, the charred trunk, the burnt house, the fire on the far hills, a joke at tea, the matches. An answer on the ending is stronger when it shows the ending was prepared.',
    },
  'point: Fire on the Mountain: Which line, well before the ending, has Nanda Kaul admit that she cannot face reality?':
    {
      why: "Nanda Kaul thinks this in Part 2, Chapter 17, after telling Raka the truth about her mother and failing to comfort her. She justifies evasion with rhetorical questions, and the last fragment, 'Not even herself', admits that she too cannot stand the truth.",
      not: {
        'It was all a lie, all. She had lied to Raka, lied about everything.':
          'This is the confession on the last page, after the police telephone. It is the moment she is forced to face the truth, not an earlier admission that she avoids it.',
        'She wanted no one and nothing else':
          "The narrator's flat statement of her desire, on the first page. It describes her wish for solitude; it admits nothing.",
        'You are exactly like me, Raka.':
          'Her open claim of kinship with Raka, which the child rejects at once. It shows her growing need, not her evasions.',
      },
      more: 'The bursts of questions and blunt fragments sound like a mind under pressure. The reader remembers this admission on the final page, when the truth she cannot stand arrives all at once: her stories were lies and her marriage was loveless.',
      tip: "Use it in an essay on truth and self-deception. It shows Desai planting the ending in Nanda Kaul's own thoughts, so the last page reads as the collapse of a defence we have watched her build.",
    },
  "word: The care of others was a habit Nanda Kaul had mislaid. | What does 'mislaid' suggest here?":
    {
      why: 'The narrator uses an everyday verb for a lifetime of mothering: you mislay keys or spectacles, putting them down absent-mindedly. The word also implies the thing can turn up again, and it does, because once Raka arrives the habit of care returns, whether Nanda Kaul wants it or not.',
      not: {
        'that she threw her duties away in bitter anger':
          'Her withdrawal is fierce, but mislaid makes it sound careless and accidental. That gap between the word and the reality is the irony.',
        'that someone else has taken the habit away from her':
          'Nobody takes it from her. Mislaying is something you do yourself, without noticing.',
        'that the habit is gone for ever, beyond recovery':
          'Gone for ever would need a stronger word, such as lost. Something mislaid can be found, and in Part 2 the habit does return.',
      },
      more: "The narrator adds that the care had felt like a religious calling until she found it false. The irony prepares us for Part 2, where she comes to want Raka's attention and wins it with invented stories.",
      tip: "Single verbs like this reward close analysis. Explain the word's everyday use, then the effect of applying it to something as large as motherhood, then the irony that follows.",
    },
  "word: This was no vision of kings and queens in a rosy court. | What does 'rosy' suggest here?":
    {
      why: 'Raka has crept to the club at night, expecting the glamour Ram Lal described, and through the window sees a wild fancy-dress party instead. Rosy means idealised, as in seeing through rose-tinted glasses: the fairy-tale court she imagined, which the sentence denies.',
      not: {
        'that the court is decorated with roses and flowers':
          'Rosy is not literal decoration. It describes the kind of picture Raka had in her head, soft and glowing.',
        "that the dancers' faces are flushed and red":
          "The costumed figures do leap and jig wildly, but rosy describes the imagined court, not anyone's face.",
        'that the room is lit by a warm fire':
          'There is no fire in the room. Rosy belongs to the vision of kings and queens, which the scene destroys.',
      },
      more: "The negative sentence records a fantasy collapsing, a small version of what happens to Nanda Kaul at the end. The scene leads into Raka's memories of her father coming home from parties and abusing her mother.",
      tip: "Use it to argue that Raka's solitude is a response to damage as well as nature. Analyse how a negative sentence describes what is absent, and why the absence shocks.",
    },
  'It is too hot to fool about with Hungarian musicians.': {
    why: "This is Mr Chawla on the first page of Kiran Desai's novel, in a summer of drought in Shahkot. He reads out rain-making schemes from the newspaper and dismisses this one, though his own plan, to cut and grow vegetation in elaborate patterns, is just as absurd.",
    more: "The joke is typical of Desai's satire: a town full of confident schemes, each person sure that everyone else is the fool. It introduces Mr Chawla's pompous certainty at once, the quality that later turns his son's escape into a business.",
    tip: "Use it to open an essay on satire or on Mr Chawla. Point out that Desai lets characters mock other people's foolishness while showing their own, so the comedy works on two levels.",
  },
  'His mother, the monkeys and himself, he thought, they were a band together.': {
    why: "This is from Chapter 14 of Kiran Desai's novel, as Kulfi brings Sampath his dinner in the guava tree. He feels a tenderness that links the outsiders: a mother the town calls mad, a troupe of thieving monkeys and a runaway clerk.",
    more: "A band suggests loyalty and rebellion, almost a gang. It shows where Sampath's real bonds lie, not with his father or the pilgrims, and explains why he will not abandon the monkeys when the town turns on them.",
    tip: "Use it in an essay on family: Sampath's chosen family is his mother and the langurs. Remember that some revere the monkeys through Hanuman, which is why the town cannot simply be rid of them.",
  },
  'speaker: No, I do not want an egg ... I want my freedom.': {
    why: "Sampath says it to his mother at the end of Chapter 5. He has just been sacked after dropping his trousers at his boss's daughter's wedding, and Kulfi offers comfort in the only form she knows, food. He answers with a grand demand, and it is the moment he decides to leave.",
    not: {
      'Sampath, refusing to come down from the tree':
        'Once in the tree, Sampath has the freedom he wanted and resists every attempt to bring him down. This line comes earlier, just before his escape.',
      'Pinky, as she plans to elope with the Hungry Hop boy':
        "Pinky does plan to run away with the Hungry Hop boy, but much later, on 30 April. The egg and the demand are her brother's, on the day he loses his job.",
      'The Hungry Hop boy, guarded by his relatives':
        'The Hungry Hop boy is kept under guard by his family, but he wants a quiet life, not freedom, and he hesitates even when Pinky offers escape.',
    },
    more: "The bathos of egg against freedom is funny, but the chapter's last line has real force. Desai often makes her most serious points through comic juxtapositions like this, so the reader laughs first and thinks afterwards.",
    tip: 'Use it in an essay on freedom and escape. Name the technique, bathos, and explain how the comedy carries a serious desire that drives the whole plot.',
  },
  'speaker: It was precisely people like Sampath who obstructed the progress of this nation': {
    why: "Desai slips into the spy's own voice in Chapter 12, as he rages at the Atheist Society's annual meeting. A schoolteacher sent to expose fraudulent holy men, he dreams of fame as an intellectual, and grand phrases like 'the progress of this nation' reveal his self-importance.",
    not: {
      'Mr Chawla, lecturing Sampath before he runs away':
        'Mr Chawla does lecture his son, but once Sampath is in the tree he sees a fortune in him, not an obstacle to the nation.',
      'Mr Gupta, refusing to believe his old colleague is holy':
        'Mr Gupta cannot at first believe the clerk he worked with is a holy man, but his protest is plain common sense, not a speech about the nation.',
      'The District Collector, overwhelmed by the crowds':
        'The young District Collector fears a black mark on his record and feels as exposed to the crowd as Sampath does. He does not denounce him.',
    },
    more: "The spy's case against superstition is not foolish in itself, which is the subtlety: Desai mocks the man more than the idea. His fury becomes as irrational as the devotion he despises, and later Sampath's sayings tangle with his own thoughts.",
    tip: 'Use it to show that Desai mocks believers and sceptics alike. Free indirect discourse lets the spy condemn himself in his own words, without the narrator saying a thing.',
  },
  'speaker: What did we get rid of the British for?': {
    why: 'Mr Gupta, now secretary to the new District Collector, tells him in Chapter 20 what he said to the cook, a leftover from the Raj, who wanted to serve cutlets with caramel custard. The rhetorical question inflates a menu into a statement about independence.',
    not: {
      'The District Collector, on his arrival from Delhi':
        'The District Collector is the listener here, newly arrived from Delhi and anxious. Mr Gupta is the one briefing him and telling the story.',
      'The Brigadier, planning a military operation':
        "The Brigadier cares more about spotting a green pigeon than about the crisis. The joke about the British is Mr Gupta's, about a cook.",
      'Mr Chawla, turning the orchard into a business':
        "Mr Chawla runs the orchard like a business and lectures everyone, but he is no official. The joke about the British and the cook is Mr Gupta's.",
    },
    more: "The comedy lies in the mismatch between a pudding and a nation's freedom. It reminds the reader that Shahkot's officials sit inside a system inherited from British rule, arguing with its habits in small ways while keeping its structures.",
    tip: 'Use it in an essay on officialdom and modern India. A short quotation like this lets you bring in post-colonial context without bolting it on.',
  },
  'point: Hullaballoo in the Guava Orchard: Which line redefines wealth as stillness and beauty?': {
    why: "Sampath thinks this in Chapter 6, sitting in the guava tree with nothing but fruit, leaves and quiet. He calls it riches and a king's life, so wealth becomes stillness and beauty. The repeated 'this was' gives the line the rhythm of a vow.",
    not: {
      "Sampath might make his family's fortune.":
        "This is Mr Chawla's realisation in Chapter 8, and his idea of riches is money: he soon opens a bank account and sells advertising in the orchard.",
      'Is your jewellery still safely buried beneath the tulsi plant?':
        "Panicking under the crowd's pressure in Chapter 7, Sampath shouts this secret from Mr Singh's letter. Buried jewellery is ordinary wealth, and the trick makes him a holy man.",
      'a prison he had been born into':
        "Sampath's thought after losing his job: his whole life feels like confinement. It explains why the orchard feels like salvation, but says nothing about wealth.",
    },
    more: 'The line sets Sampath against his father, for whom riches will soon mean money made out of this very tree. Desai makes the orchard first a paradise of quiet, then a place spoiled by crowds, litter and slogans.',
    tip: "Use it in an essay on money and the holy-man business. Contrast it with Mr Chawla's schemes to show two opposite ideas of what is valuable.",
  },
  "point: Hullaballoo in the Guava Orchard: Which line shows Kulfi's life opening up once the family move to the orchard?":
    {
      why: "In Chapter 8, once Mr Chawla moves the family into the orchard, Kulfi cooks in her new outdoor kitchen and feels her life opening. Brink suggests both a threshold and a dangerous edge, which suits a woman whose freedom will take her deeper into the wild. Sampath's escape frees his mother too.",
      not: {
        'her hunger was so fierce, it was like a big, prowling animal':
          'This is Kulfi in Chapter 1, pregnant and ravenous in the drought, twenty years before the orchard. It marks her as untamed, but it is hunger, not the freedom she finds later.',
        'Some people can only digest fish cooked in a light curry.':
          "This is Sampath's answer to a pilgrim's question about God, given as cookery. It is about his favourite food, not his mother's freedom.",
        'This impersonal darkness could be comforting as no human attention ever was.':
          "This is Sampath on his last night in the tree, finding peace in the dark. It sums up his journey, not Kulfi's.",
      },
      more: 'For twenty years Kulfi sat at a window while Ammaji ran the house. In the orchard she forages for rare ingredients and cooks astonishing dishes, and her imagination grows wilder until she dreams of a monstrous final recipe.',
      tip: "Use it in an essay on women and family. You can argue that Kulfi's cooking is Desai's image of the artist, a talent with no outlet until the family left the town.",
    },
  "word: triumphantly and indisputably male | What does 'triumphantly' suggest here?": {
    why: "At the end of Chapter 1 the family celebrate the newborn Sampath because, though not especially plump or fair, he is a boy. The emphatic adverb mimics their pride, as if a son's birth were a victory, and Desai lets the phrase expose a preference for sons without comment.",
    not: {
      'that the baby has fought hard to survive':
        "The birth comes as the monsoon breaks, but nothing suggests a struggle to survive. The triumph is the family's, at having a boy.",
      'that the baby is unusually big, plump and healthy':
        'The novel says he was not especially plump or fair. The family celebrate his sex, not his size.',
      'that the town has beaten the long drought':
        'The rain does break the drought at his birth, but this adverb describes how male he is, not the weather.',
    },
    more: 'The celebration of this supposedly lucky boy looks ironic when he grows up into a dreamy failure. The phrase also shows, quietly, how much less a daughter would have been worth to this family.',
    tip: "Use it as evidence on women and family. Explain how the narrator voices the family's values in their own emphatic words, so the satire works without comment.",
  },
  'word: On one side was a brown mark, rather like a birthmark | Which word keeps the link between the guava and Sampath uncertain?':
    {
      why: 'On the last page the tree is empty, and a large guava remains with a brown mark on one side. Rather hedges the comparison: Desai hints that Sampath, born with a brown birthmark on his cheek, has become the fruit he loved, without ever saying so.',
      not: {
        side: 'Side only places the mark on the fruit. It does nothing to make the link to Sampath tentative.',
        brown:
          "Brown makes the link, recalling the colour of Sampath's birthmark. It strengthens the hint rather than softening it.",
        birthmark:
          'Birthmark is the word that points to Sampath. The hedge that keeps the link uncertain comes just before it.',
      },
      more: "The mark links the novel's last page to its first, where Sampath is born. The reader must decide whether this is a miracle, a disappearance or a joke on everyone who wanted him, and the novel never says.",
      tip: 'Do not state as fact that Sampath turns into a guava. Say what the ending implies and how its tentative language leaves the question open.',
    },
  'It was the largest crow he had ever seen.': {
    why: "This is from Chapter 3 of Susan Hill's novel. Walking alone in the fields, Kingshaw is attacked by a huge crow in the corn, and the simple sentence, told through his eyes, makes an ordinary bird monstrous.",
    more: "The crow becomes the first of the novel's symbols of fear. Hooper mocks Kingshaw for it, and in the night leaves a stuffed crow from the house on his bed, turning the fear into a weapon.",
    tip: 'Use it in an essay on fear or on how Hooper bullies: he learns what frightens Kingshaw and then supplies it. Notice how sound and touch in the attack make the fear physical.',
  },
  'I DIDN’T WANT YOU TO COME HERE': {
    why: "This is the note Hooper sends down in Chapter 2 of Susan Hill's novel, on the day Kingshaw and his mother arrive at Warings, while he stays upstairs behind a locked door. Printed in capitals, it shouts without a voice.",
    more: 'It is a declaration of war, and it teaches Kingshaw at once that cruelty in this house will be private and the adults will not see it. Hooper refers back to the note later, so it hangs over the novel.',
    tip: "Use it to show that Hooper's power is psychological from the start. Comment on the form: a written note, not spoken words, so there is nothing for an adult to overhear.",
  },
  'speaker: Oh, how right I was to come here!': {
    why: "Mrs Kingshaw thinks this in the last line of Chapter 4, delighted with her decision to come to Warings. The reader has just watched her son's miserable first week there, while she saw nothing of it. It is dramatic irony at its sharpest.",
    not: {
      'Mr Hooper, as he becomes master of Warings':
        'Mr Hooper is glad to be master of the house at last, but the delighted thought that ends Chapter 4 belongs to Mrs Kingshaw.',
      'Kingshaw, watching a rabbit in Hang Wood before Hooper comes':
        'Kingshaw is briefly at peace in Hang Wood until Hooper follows him there. He never thinks he was right to come to Warings.',
      'Mrs Kingshaw, as the wedding is planned':
        'By the time of the wedding talk Mrs Kingshaw is happier still, but this line ends Chapter 4, about a week after their arrival.',
    },
    more: "Placing her joy at the end of the chapter makes the reader feel the distance between mother and son, which the whole novel widens. Hill lets us into the adults' heads so that we see exactly how much they miss.",
    tip: "Use it in an essay on adults who do not see. Pair it with the final page, where her tenderness goes to the wrong boy, to show the irony growing into the novel's last judgement.",
  },
  'speaker: I’m not being by myself in thunder.': {
    why: 'Hooper says it to Kingshaw in Hang Wood in Chapter 7, terrified by the thunderstorm. For the first time he begs rather than orders, his voice rising in panic, and Kingshaw has to take charge. Their roles are reversed.',
    not: {
      'Kingshaw, as the storm breaks in Hang Wood':
        'Kingshaw is usually the frightened one, which is why this tempts. In the storm, though, he is calm and capable, and it is Hooper who panics.',
      'Hooper, stranded on the ledge at Leydell Castle':
        'Hooper is terrified on the castle ledge too, but there is no thunder there, and the danger is a fall, not a storm.',
      'Kingshaw, locked in the shed by Hooper':
        'Kingshaw is locked in the shed in Chapter 11 and weeps silently while Hooper torments him from outside. There is no storm, and Kingshaw does not beg.',
    },
    more: "The moment matters because it shows Hooper's fear, and because it does not last. Once they are found he takes his revenge with a lie, so his weakness in the wood becomes a debt that Kingshaw pays.",
    tip: 'Use it to argue that power in the novel moves: Kingshaw is stronger in the wood, yet Hooper wins because he knows how to make adults believe him.',
  },
  'speaker: Are you afraid of Edmund Hooper?': {
    why: "Fielding, the farm boy who becomes Kingshaw's only friend, asks this in Chapter 14, just after Kingshaw is told that Hooper is coming home from hospital. For once somebody asks him directly, and Kingshaw answers yes, not ashamed to admit it to Fielding.",
    not: {
      'Mr Hooper, after the fall at Leydell Castle':
        "Mr Hooper treats the boys' quarrels as a matter of good manners, and his attention goes to his injured son. He never asks Kingshaw what he fears.",
      'Fielding, on his visit to Warings':
        'When Fielding visits Warings he is as happy with Hooper as with Kingshaw. He cannot see the danger, so the question is asked only once, at the farm.',
      'Mrs Kingshaw, after the boys are found in Hang Wood':
        "After the rescue Mrs Kingshaw believes Hooper's lie and scolds her own son. She never thinks to ask whether he is afraid.",
    },
    more: "Fielding's plain question uses Hooper's full name, as if he were a person rather than a threat. But Fielding, who fears nothing, cannot really understand, and his liking for Hooper later takes away Kingshaw's last hope.",
    tip: 'Use it to show how isolated Kingshaw is: the only person who asks the right question is another child. Contrast it with the adults, who are sure they understand and never ask.',
  },
  "point: I'm the King of the Castle: Which line shows Hooper turning the adult language of ownership into a weapon?":
    {
      why: "Hooper thinks this in Kingshaw's room on the first day, beside his trunk and suitcase. Short clauses build like a chant of ownership, then the flat final sentence makes Kingshaw homeless as well as fatherless. A boy not yet eleven has learned the adult logic of property.",
      not: {
        'Warings was ugly. It was entirely graceless':
          "The narrator's description of the house in Chapter 1, before the Kingshaws arrive. It judges Warings; it is not Hooper using it against anyone.",
        'now you will have a companion':
          "Mr Hooper's cheerful words to his son at the start of Chapter 2. They show the adults' blindness, not Hooper's cruelty.",
        'It was Kingshaw, it was Kingshaw, he pushed me in the water.':
          "Hooper's lie after the rescue is a weapon, but it uses the adults' readiness to believe him, not ownership of the house.",
      },
      more: "Throughout the novel Hooper polices what belongs to whom: the house, his room, the Red Room and its key. Kingshaw's brave reply, dismissing Warings as just an old building, cannot win, because the adults share Hooper's values.",
      tip: "Use it in an essay on property, class and belonging. Analyse the rhythm of the short clauses, then argue that Kingshaw is powerless because he and his mother are guests in someone else's house.",
    },
  "point: I'm the King of the Castle: Which line shows that Hooper feels no remorse at the end?": {
    why: "In the last chapter Hooper leads the searchers to the stream in Hang Wood, where Kingshaw has drowned himself. Seeing the body, Hooper thinks it was because of him, and feels a spurt of triumph. The novel's last view inside his mind is pride, not guilt.",
    not: {
      'now you will have a companion':
        "Mr Hooper's cheerful words to his son at the start of Chapter 2, announcing a companion. They come at the very beginning, and they are the father's, not Hooper's.",
      'I’m the King of the Castle!':
        "Kingshaw shouts this from the wall at Leydell Castle, the one moment he stands above Hooper. It is Kingshaw's triumph, and it lasts only minutes.",
      'It was Kingshaw, it was Kingshaw, he pushed me in the water.':
        "Hooper's lie after the rescue shows no remorse either, but it comes in Chapter 10, long before the end.",
    },
    more: 'Spurt is sudden and physical, and triumph is the word for a victory. Hill denies the reader any remorse, which makes the ending more disturbing than the death itself and leaves open whether Hooper is evil or made.',
    tip: "Use it in an essay on childhood and evil. Hill's Afterword speaks of evil that can possess a young child; this line is the strongest evidence for that reading, so weigh it against Hooper's loneliness and fear.",
  },
  "word: We cannot fathom the minds of young children. | What does 'We' suggest here?": {
    why: 'Mr Hooper thinks this about his son in Chapter 4. The pompous we speaks for all adults at once, turning his own failure to understand Edmund into a general law of nature, and once it is a law, he can stop trying.',
    not: {
      'that he and Mrs Kingshaw have talked about the boys':
        "This is Mr Hooper's private thought, and the we is general: it claims all grown-ups, not two people who have compared notes.",
      'that he means the whole Hooper family':
        'The family is not the point. We here is the voice of grown-ups in general, which makes his excuse sound like wisdom.',
      'that he is saying it aloud to his son':
        "It is a thought in Mr Hooper's head, not words spoken to Edmund. Hill lets us hear what the adults never say aloud.",
    },
    more: "The verb fathom, used for measuring the depth of water, makes a child's mind sound unknowably deep. Mr Hooper sounds wise, but the sentence is an excuse, and Hill shows the adults choosing not to see.",
    tip: 'Pronouns are worth analysing. Say who a we includes and what it lets the speaker avoid, then link it to the theme of adults who do not see.',
  },
  'word: In terror, Hooper flinched and took a step backwards, swayed and fell. | Which word suggests a recoil, as if from an expected blow?':
    {
      why: 'At Leydell Castle, Hooper is stranded on a ledge, and Kingshaw, resolved not to frighten him, reaches out a hand to help him down. To flinch is to jerk away as if expecting to be hurt, so the word leaves open whether Hooper thought Kingshaw meant to push him.',
      not: {
        terror:
          "Terror names Hooper's feeling, of the height and perhaps of Kingshaw. It does not show the movement of shrinking away.",
        backwards:
          'Backwards gives the direction of the step, and on its own suggests no expected blow. The flinch comes first and causes it.',
        swayed:
          'Swayed shows Hooper losing his balance after the step. It is the start of the fall, not the recoil.',
      },
      more: "The sentence ends Chapter 12, giving Hooper's terror first and the fall as quick verbs. The adults will never know what Kingshaw meant by the gesture, and Hooper, taken to hospital, takes all their attention.",
      tip: 'Summaries that say Kingshaw pushes Hooper here are wrong: he is reaching out to help. Show how the verbs leave his intention open to misreading.',
    },
}
