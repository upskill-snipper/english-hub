import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Death and the King's Horseman, Wole Soyinka (1975). A complete guide: the
 * text had only the /courses/igcse-lit-drama-death-kings-horseman modules
 * before this file, and nothing from them was reused unchecked.
 *
 * HOW THE QUOTATIONS WERE CHECKED (26 September 2026). The play is in
 * copyright and no licensed copy is held in this repository. The whole play
 * was read, scene by scene, in a copy posted on a university teaching site, so
 * that every speaker and scene below was confirmed by reading and not by
 * matching a phrase alone. Every quotation, and every quoted phrase in the
 * prose, was then matched word for word against that copy and against a scan
 * of the Hill and Wang paperback (New York, 1987). Both agree on every word
 * quoted here. They are not fully independent: both print the same misprint
 * ("calllous") in Jane's outburst in Scene 4, so the teaching copy was probably
 * made from that American edition. Pearson prescribes Methuen (now Bloomsbury)
 * editions, which could not be read from here, hence the quoteNote.
 *
 * WHAT A CHECK AGAINST PEARSON'S OWN DOCUMENTS FOUND. Pearson's mark schemes
 * quote the play in a few places. Most agree with both copies (Amusa's
 * "uniform of death" line, "desecrate an ancestral mask", "We are already
 * parted, the world and I"), but two do not: the January 2022 mark scheme has
 * "weaken the weary" where both copies read "weaken the unwary", and Pilkings's
 * "I did my duty as I saw fit" where both read "as I saw it". Neither line is
 * quoted in this guide, so no student is asked to choose between them.
 *
 * WHAT THE OLDER COURSE MODULE (dkh-m6) GETS WRONG, so that nobody copies it
 * back in: it gives "The world is not a constant honey-pot" to Iyaloja, but it
 * is Elesin's line in Scene 1; and "Not I alone" and "We know you for a
 * vagabond" do not occur in the play (the women say "We know you for a man of
 * honour", and Elesin asks whether he must be "taken for a vagrant's").
 *
 * FACTS SOURCES DISAGREED ON, and what the guide does about them: the first
 * production at Ife is dated 1975 by one source and 1976 by three, so both are
 * given; Soyinka's detention from 1967 is 22 months in two sources and 27 in
 * one, so the guide says "around two years"; one source says the play had its
 * first reading at Churchill College, and none other checked does, so the
 * guide does not say it.
 *
 * COPYRIGHT. Quotations are held under the site's fair-dealing limits in
 * src/lib/study-guides/fair-dealing.ts: each under 15 words, every one followed
 * by analysis, and the page total under the long-work cap. Nothing the play
 * marks as sung, and none of the women's Yoruba songs or dirges, is quoted.
 * Longer passages are located by scene and summarised in the guide's own words.
 */
export const guide: StudyGuide = {
  slug: 'death-and-the-kings-horseman',
  title: "Death and the King's Horseman",
  author: 'Wole Soyinka',
  form: 'play',
  scope:
    "The whole play: five scenes, to be performed without an interval, with Soyinka's Author's Note. Set for Pearson Edexcel International GCSE English Literature (4ET1) as a modern drama text. In Paper 2 Section A it is a whole-play essay, answered with a clean, unmarked copy of a prescribed edition open in front of you; in the coursework alternative, Component 3, it is an assignment devised by your teacher or by you. The play has no act or line numbers and page numbers differ between editions, so every reference here is by scene and by the moment within it.",
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Wole Soyinka 1975. First published by Eyre Methuen, London, in 1975; published in the UK by Methuen Drama. Short quotations are used for criticism and review.',
  },
  workLength: {
    words: 22860,
    basis:
      "Counted from a complete copy of the play text: the dedication, Author's Note, cast list and five scenes, with that copy's editorial introduction, footnotes and page headers removed, come to 22,860 words (Scene 1 about 4,500, Scene 2 about 3,200, Scene 3 about 3,600, Scene 4 about 5,200, Scene 5 about 5,700). It is a long work, so the 400-word page cap applies.",
  },

  overview: {
    summary: [
      "On the night a dead King is to be buried, nearly a month after his death, Elesin Oba, the King's Horseman, comes dancing into a market as the stalls close. By custom he must follow the King into the world of the ancestors that night, and he tells the market women he is ready. But first he asks for one more thing: a beautiful young woman he has just seen, who is already promised to the son of Iyaloja, the “Mother” of the market. Iyaloja grants the wish and warns him. The marriage takes place, and in the market Elesin begins the trance-dance that should carry him across.",
      "Meanwhile the British District Officer, Simon Pilkings, and his wife Jane are dancing a tango at home in the costume they mean to wear to a fancy-dress ball: an egungun costume, the sacred masquerade of the ancestors, confiscated from its wearers. When Sergeant Amusa reports that Elesin is to “commit death”, Pilkings orders his arrest. The women drive Amusa out of the market, but at midnight, during the ball at the Residency, attended by a visiting British Prince, Pilkings goes to stop the ritual himself. At the ball Jane meets Olunde, Elesin's eldest son, whom Pilkings helped to escape to medical school in England and who has come home to bury his father. Elesin is brought in under arrest, alive and in handcuffs, and Olunde disowns him.",
      "In the last scene Elesin stands chained in a cell in the Residency, a cellar once used to hold slaves. Iyaloja comes to judge him, and the market women carry in a long bundle wrapped in cloth. It is the body of Olunde, who has died in his father's place. Elesin strangles himself with his chain. Iyaloja tells Pilkings that this is what he brought about, and tells the Bride to turn her mind only to the unborn.",
      "Soyinka insisted, in his Author's Note, that the play should not be reduced to a “clash of cultures”, and that the colonial intervention is “a catalytic incident merely”. The best essays take that seriously without simply repeating it. Pilkings is ignorant and arrogant, and Soyinka satirises him with real bite, but the question the play keeps returning to is why Elesin's will failed, and what that failure costs his world.",
    ],
  },

  context: [
    {
      heading: 'Wole Soyinka',
      body: 'Akinwande Oluwole Babatunde Soyinka was born on 13 July 1934 in Abeokuta, in what was then British-ruled Nigeria. He studied at University College Ibadan and then at the University of Leeds, where he read English literature, and in the late 1950s he worked in London with the Royal Court Theatre. In 1967, early in the Nigerian Civil War, he was arrested by the federal authorities and held in prison for around two years. In 1986 he was awarded the Nobel Prize in Literature, the first writer from sub-Saharan Africa to receive it, and he is widely described as the first African laureate. He writes in English but builds his plays from Yoruba myth, ritual, music and language, and this play is made of all four.',
    },
    {
      heading: 'Written in Cambridge, first staged in Nigeria',
      body: "Soyinka wrote the play while he was a visiting fellow at Churchill College, Cambridge, in 1973 to 1974, during a period of political exile from Nigeria. It was published in 1975, in London by Eyre Methuen and in New York by Norton, and first staged at the University of Ife in Nigeria (sources differ on whether that was in 1975 or 1976). The National Theatre in London staged it in 2009, directed by Rufus Norris, and it was adapted as a Yoruba-language film, Elesin Oba, The King's Horseman, directed by Biyi Bandele, which premiered at the Toronto International Film Festival in 2022. The play is dedicated to Soyinka's father, Ayodele, and the dedication speaks of him as having danced and joined the Ancestors: a son's farewell that treats death as a dance and a joining, which is the play's own view.",
    },
    {
      heading: 'The events of 1946',
      body: "In his Author's Note Soyinka says the play is based on events in Oyo, an ancient Yoruba city of Nigeria, in 1946, when the lives of the Elesin, his son and the colonial District Officer became entangled with the disastrous results the play shows. He says his changes were to details, to the order of events and to the characters, that the factual account still exists in the archives of the British colonial administration, and that the same events had already inspired a Yoruba-language play, Oba Waja, by Duro Ladipo. The play itself names no real people, and Oyo is named only in the Note. An exam answer needs nothing beyond this: the play is rooted in a real event, and Soyinka reshaped it.",
    },
    {
      heading: 'Moved back into the Second World War',
      body: "Soyinka set the action back two or three years, to a time “while the war was still on”, and calls his reasons minor matters of dramaturgy. The effect on the play is not minor. The war makes the Prince's tour of the colonies a risk, since he sails in a convoy, and Olunde uses that risk in his argument with Jane; it gives Olunde his experience in English hospitals among the wounded; and it gives Jane the story of the ship's captain who blew himself up with his ship to save the people round a harbour. Olunde uses these to argue that the British honour self-sacrifice when it is their own, and that a nation which calls defeats victories cannot lecture others about naming things truthfully. A costume ball in wartime also makes the Residency's gaiety look hollow, which is exactly how Olunde reads it.",
    },
    {
      heading: 'Yoruba belief: the living, the dead and the unborn',
      body: "Soyinka's Note describes the Yoruba world as three realms, “the living, the dead and the unborn”, joined by the passage he calls transition. In the play the King has died and, nearly a month later, is to be buried; his dog and his favourite horse are sacrificed to go before him, and Elesin, his Horseman, must follow so that the King does not travel alone and is not left to wander. The egungun, the masquerade in which costumed figures embody the ancestors, makes the dead present among the living, which is why wearing its costume as party dress is sacrilege. The Horseman's role is inherited: Olunde, as eldest son, is Elesin's heir, and as Jane works out, would be the Elesin to the next king. Olunde also explains that as heir he was forbidden to set eyes on his father from the moment of the King's death. Describe these beliefs as the play presents them, neither as quaint nor as simply barbaric.",
    },
    {
      heading: 'British rule in Nigeria',
      body: "Nigeria was then a British colony, run through officials like Pilkings, a District Officer, and his superior, the Resident, with local police such as the Native Administration force in which Amusa is a sergeant. Christian missions were part of the system: Joseph is a convert of two years, and Pilkings worries that the local minister will write another letter of complaint to the Resident about his language. The play shows British power as confident and ceremonial, from the confiscated egungun costume to the Prince's tour and the cellar where, Pilkings recalls, slaves were once stored before being taken to the coast. Its racism is shown plainly too: the Resident's aide-de-camp abuses Olunde with a racist slur. Nigeria became independent on 1 October 1960, so Soyinka was writing in the 1970s about a colonial order that had already ended.",
    },
    {
      heading: 'Not a “clash of cultures”',
      body: "The Author's Note attacks the “facile tag” of “clash of cultures”, which, Soyinka argues, assumes a potential equality between an alien culture and the indigenous one on the indigenous culture's own soil. He asks producers not to present the District Officer as the victim of a cruel dilemma, calls the colonial factor “a catalytic incident merely”, and says the confrontation is “largely metaphysical”, carried by Elesin and by the Yoruba understanding of the universe. For an essay this is both a gift and a test. Quote it to show you know the playwright's view, then test it against the play: Pilkings's interference does set everything in motion, and Soyinka satirises it thoroughly, but the question the play keeps asking, in Elesin's confessions and Iyaloja's judgement, is about the will of one man inside his own world.",
    },
  ],

  themes: [
    {
      title: 'Duty and the will',
      body: "Elesin's duty is inherited, not chosen: as one market woman tells Amusa, the title is his by blood, as it was his father's and will be his son's. It binds the King's journey, the community's safety and his own honour together, so the play's central question is why he fails to fulfil it. In Scene 5 Elesin gives two answers. To Pilkings he blames the intrusion; to his bride and to Iyaloja he admits “a weight of longing on my earth-held limbs” and, worse, “the awful treachery of relief” when he let himself think the gods might have sent the stranger. One reading makes Pilkings responsible: the arrest came at the moment of crossing, and Elesin says his foot had already begun to lift. The more convincing reading, and the one the Author's Note supports, is that the arrest exposes a weakness already there: the demand for a bride, the Praise-Singer's fear that evil minds may weigh down his sash, and Elesin's own confession. Strong essays argue both causes and then decide which matters more, as Iyaloja does when she calls his will “laggard”.",
    },
    {
      title: 'Honour and shame',
      body: "Honour is the word the market repeats to Elesin: “We know you for a man of honour.” Moments before, he has declared that “Life is honour” and that “It ends when honour ends”, which is why his survival is a disaster rather than a rescue. Soyinka tracks the word through the play. In Scene 5 Pilkings asks Elesin for his “word of honour”, and Elesin replies that his honour is already locked in the District Officer's desk with his report, as if the colonial state held it as property. Shame is almost physical: Elesin speaks of his “stench of shame”, so strong that no tracking dog is needed to find him, and says his “rag of shame” has nothing left to hide. Olunde restores the family's honour at the cost of his life, and Iyaloja names his body “the honour of your household” and of the whole people. One reading sees the play endorsing this code completely. Another, worth arguing, notices that honour here is public and communal: Elesin is condemned less for dying late than for failing the people who fed and robed him.",
    },
    {
      title: 'Colonial power and blindness',
      body: "Soyinka's colonial characters are not monsters. For the play's purposes they are something worse: people sure of their own kindness. Pilkings helped Olunde to medical school, and in Scene 5 he calls the loss of a night's sleep “a good bargain” for saving a man's life. Yet the play surrounds him with signs of what his rule rests on: a sacred costume taken from its wearers and worn to a dance, a ball graced by a visiting Prince, a Resident fretting about the police's lost sashes and fez hats, a Muslim sergeant threatened with pork, and a cell once used to hold slaves. Iyaloja sums up the result in a question: “To prevent one death you will actually make other deaths?” One reading treats the play as an attack on colonialism first. Soyinka warned against that, calling the colonial factor a catalyst, and a strong answer can agree with him while showing that the catalyst is drawn with sustained, precise satire.",
    },
    {
      title: 'Life, death and transition',
      body: "Everything in the ritual depends on the worlds of the living, the dead and the unborn staying connected. In Scene 1 Elesin speaks of an “Endless cord” tying every living person back to the great origin; in Scene 5 he accuses Pilkings of a plan to “sever the cord”. Death in this view is a journey with a message to carry, which is why the King's horse and dog go ahead and why Elesin's delay leaves the King, in Iyaloja's words, to wander in the void. The play sets this against Jane's conviction that a life must never be thrown away on purpose, and against the war, where Olunde sees young men sent by their generals to what he calls “mass suicide”. The ending looks forward rather than back: “Turn your mind only to the unborn.” A reading worth making is that the tragedy is not that people die, but that they die in the wrong order, the son before the father.",
    },
    {
      title: 'Community and the market',
      body: "The market is Elesin's “roost”, the place he chooses for his leave-taking, and it belongs to the women. Iyaloja presides; the women robe him, dirge for him and, in Scene 3, keep the police out, while the girls boast that not even Amusa's superiors would enter the market against the women's will. The community speaks in chorus, in call and response with Elesin and the Praise-Singer, so his death is never a private act. That is also why his failure is communal: in Scene 5 the Praise-Singer tells him they placed the reins of the world in his hands and he watched it plunge. One reading sees the market women as the play's moral centre. The most convincing version of it notices that they also indulge Elesin, and that Iyaloja's consent to the bride was the community's own choice: in Scene 5 Elesin reminds her that she helped in the binding of the cord that tied him to the earth.",
    },
    {
      title: 'Belief, respect and desecration',
      body: "Every character is tested by how they treat what others hold sacred. Amusa, a Muslim, has helped arrest egungun men but will not touch the mask itself; Joseph, a Christian convert, says the costume has no power over him but is shocked when Pilkings calls holy water nonsense. Pilkings mocks both faiths and wears the dead as fancy dress. Olunde, in the calmest voice in the play, names it: “you desecrate an ancestral mask”. Among Iyaloja's final charges against Pilkings is that he would “even usurp the vestments of our dead”. Soyinka makes the point through staging rather than sermon: the Pilkingses' tango in Scene 2 and their costume show at the ball are set against Elesin's dance into death. Respect here is not agreement. Amusa does not share Elesin's faith but honours it, and that is precisely what Pilkings cannot do.",
    },
  ],

  characters: [
    {
      name: 'Elesin',
      role: "Elesin Oba, the King's Horseman",
      body: "Elesin enters as “a man of enormous vitality”, in the stage direction's words, and Scene 1 shows why the market loves him: he jokes, dances, tells the story of the Not-I bird with a mimic's gift, and claims that where everyone else in his story hid from Death, he welcomed it. He is also a man of appetite, as his own images and the Praise-Singer's teasing make plain (the honey-pot, the iroko tree hiding a woman's beauty), and his request for a bride on his last night is where appetite and duty meet. After the arrest he is a different man: collapsing at his son's feet, chained in a cell, blaming Pilkings, then the gods, then his bride, and at last confessing. His self-strangling after he sees Olunde's body can be read as an act of shame rather than the transition he promised, though Iyaloja's verdict is more exact: he has gone into the passage at last, but too late. Ask whether Soyinka wants us to admire him, pity him or judge him. The best answers do all three, at different points, and say which wins.",
    },
    {
      name: 'Iyaloja',
      role: 'The “Mother” of the market',
      body: "Iyaloja holds real authority: the women look to her, Amusa appeals to her to control them, and even Pilkings has to decide whether to let her near the cell. She speaks largely in proverbs and images, which makes her the play's guardian of meaning. In Scene 1 she gives up her own son's bride because refusing a man on the threshold of the ancestors would be impious, but she then warns Elesin in proverb after proverb. In Scene 3 she defends his wedding night against Amusa with a mother's scorn and tries to restrain the girls. In Scene 5 she becomes his judge, mocking him with the plantain he boasted of, bringing the body of his son, and telling Pilkings, whom she addresses as “child”, that he caused what he sees. Pearson's November 2023 paper asked how she is presented as a character who wants the right thing to be done: argue that her rightness is severe rather than kind, and that it includes her own part in the tragedy.",
    },
    {
      name: 'Praise-Singer',
      role: "Elesin's praise-poet and companion, whom he calls Olohun-iyo",
      body: "The Praise-Singer's art is to sing a great man's deeds, and he opens the play teasing Elesin about his haste and praising him extravagantly. In Scene 3 he speaks in the voice of the dead King, reminding Elesin of their pact: if he cannot come, he must tell the King's horse or dog. His long lament as Elesin sinks into the trance is the emotional peak of the scene, and it contains a startling admission: he slid a lump of earth between Elesin's slippers to keep him longer. Love pulls against duty even in the ritual's own voice. In Scene 5 he calls Elesin by his title “only this last time” and tells him their world is now tumbling into an emptiness made by strangers. He works like a chorus, but a personal one, and his grief is part of what makes the failure matter.",
    },
    {
      name: 'Olunde',
      role: "Elesin's eldest son and heir, a medical student in England",
      body: "Olunde left for medical school in England three or four years before the play, with Pilkings's help and against his father's fierce opposition; Jane recalls that Elesin publicly disowned him. The Pilkingses think of him as the boy they rescued from his father's world, and Pilkings is shocked to find him home. A relative's cable told him only that the King was dead, and he understood at once that he must return to bury his father. He arrives at the ball in a sober western suit and calmly takes Jane's arguments apart: her costume desecrates an ancestral mask, the captain who blew up his ship shows that self-sacrifice can affirm life, and the war is a greater sacrifice dressed in false names. When he finds his father alive he disowns him in one line. His death, off stage and never described, fulfils the duty his father failed; Iyaloja says the chiefs asked him to speak the ritual words in his father's stead and he refused while his father lived. A strong answer argues that his education did not replace his culture: it gave him the means to defend it.",
    },
    {
      name: 'Simon Pilkings',
      role: 'The British District Officer',
      body: "Pilkings is energetic, sarcastic and sure of himself. He helped Olunde to England because he thought it right, and he stops the ritual because he thinks it barbaric, though Scene 2 shows he first wants to leave it alone rather than miss the ball, and acts partly because Jane presses him. His language gives him away: Elesin is “that old ram”, Amusa is praised for not believing in “mumbo-jumbo”, and Joseph's holy water is nonsense until he retracts it, for fear of a complaint from the minister and to make sure his note is delivered. Soyinka's Author's Note forbids a production that makes him the victim of a cruel dilemma, and the play keeps him limited: he never understands what he has done. In Scene 5 he wears a police officer's uniform, and his last question, “Was this what you wanted?”, pushes the blame outward. Iyaloja pushes it straight back.",
    },
    {
      name: 'Jane Pilkings',
      role: "Simon Pilkings's wife",
      body: "Jane is more curious and more tactful than her husband. She warns him about his language to Joseph, asks whether he should talk to Elesin before arresting him, and seems to want to understand Olunde. But the play exposes the limits of her sympathy. She calls the custom barbaric and “feudal”, defends the ball as “Therapy, British style”, and, when Olunde calmly announces his father's death, screams that he is callous and a savage. She apologises and asks him to explain, and in Scene 5 she urges her husband to let Iyaloja in. Pearson's alternative paper in May 2024 asked about the significance of Simon and Jane together: one reading makes her the gentler face of the same power, since her questions never lead her to doubt her husband's right to interfere.",
    },
    {
      name: 'Amusa',
      role: 'A sergeant in the Native Administration police',
      body: "Sergeant Amusa is a Muslim, as Pilkings reminds him, and a loyal servant of the colonial government. He is also the play's clearest picture of a man divided. He will arrest troublemakers but will not touch or insult the egungun, and he refuses to speak about death to people dressed in the uniform of the dead. His pidgin English is comedy to the Pilkingses, but his logic is often sharper than theirs. In the market he insists that “duty is duty”, and Iyaloja turns the word back on him; the women mock his manhood, and the girls parody him as a colonial officer's faithful ox. Pilkings rewards his loyalty with a threat to feed him pork and relieves him of duty. Pearson's May 2024 paper asked how Soyinka presents him: argue that he is comic but not contemptible, a man the colonial system uses and never respects.",
    },
    {
      name: 'Joseph',
      role: "The Pilkingses' houseboy, a Christian convert",
      body: "Joseph explains the custom plainly: the King died last month, tonight is his burial, and the Elesin must die to accompany him. He is also the first to say, correctly, that nobody is being murdered: Elesin “will simply die”. When Pilkings sneers that holy water has wiped out his tribal memory, Joseph is visibly shocked and turns stubborn, and Pilkings later takes the insult back. In a small part he shows that conversion does not make a man his employer's property, and his honest confusion at the drumming, which to him sounds like both a great chief's death and his wedding, tells the audience exactly what is happening in the market.",
    },
    {
      name: 'The Bride',
      role: 'The young woman Elesin marries on his last night',
      body: "The Bride never speaks. Promised to Iyaloja's son, she is given to Elesin on his last night, and in Scene 5 she sits outside his cell with her eyes on the ground. Elesin tells her she was “the final gift of the living” to their emissary to the ancestors, and then half blames her warmth and youth for turning his feet leaden. At the end she walks into the cell, closes his eyes and covers them with earth, the rite he asked for in Scene 1. Her silence is worth writing about. Iyaloja's questions about the “new shoot” suggest she may carry Elesin's child, and so the future the last line points to, yet the play gives her no voice at all.",
    },
    {
      name: 'The Resident',
      role: "Pilkings's superior, at whose Residency the ball is held",
      body: "The Resident is played for satire: flustered, fussy about the police's missing sashes and fez hats, desperate that His Highness should not hear of a riot two miles away, and full of advice to keep his “nose to the ground”. He shows the colonial order at its most self-regarding: what matters to him is the appearance of a secure colony, not what is happening in the town.",
    },
    {
      name: 'The women and girls of the market',
      role: 'The community, acting as a chorus',
      body: "The market women answer Elesin, robe him, dirge for him and, in Scene 5, carry the burden up the hill to the Residency. They are funny and formidable. In Scene 3 they turn Amusa's official business into bawdy mockery, and the schoolgirls stage a note-perfect parody of British club talk that ends with Amusa snapping to attention. The older women's delight, asking whether the girls learned all that at school, is a sharp joke about who is really learning from whom.",
    },
  ],

  quoteNote:
    'Every quotation here was checked, with its speaker and scene, against two copies of the published play, which agree on every word. Pearson prescribes Methuen (Bloomsbury) editions, and those could not be checked from here. Your clean copy is the one you take into the exam, so if a word in it ever differs from this page, quote your copy.',

  keyQuotes: [
    {
      text: 'My rein is loosened. / I am master of my Fate.',
      where: 'Elesin, Scene 1, after the story of the Not-I bird',
      analysis:
        'Elesin pictures himself given free rein, like the thoroughbred the Praise-Singer has just praised: unchecked, and choosing his own path. He claims to command fate itself rather than submit to it. It is the boast the whole play measures him against, and the horse imagery ties it to his title. By Scene 5 he is literally bound in chains, and mastery has become the thing he most obviously lacks.',
    },
    {
      text: 'The world is not a constant honey-pot.',
      where: 'Elesin, Scene 1, answering the women who ask whether anything will hold him back',
      analysis:
        "Elesin means that he has enjoyed the world's sweetness and can leave it, but the metaphor admits appetite even as it renounces it: he describes life as something to be eaten. The appetite resurfaces minutes later when he asks for a bride, and the honey returns when he answers Iyaloja's warning. This is Elesin's line, although some revision materials give it to Iyaloja.",
    },
    {
      text: 'Life is honour. / It ends when honour ends.',
      where: "Elesin, Scene 1, just before the women's “man of honour” praise",
      analysis:
        "Two short, balanced sentences state Elesin's code as a law: honour is not part of life but the whole of it. The line sets the terms of his tragedy with painful exactness. When he survives the night, the logic of his own words says he is already dead, which is how Olunde and Iyaloja treat him in Scenes 4 and 5.",
    },
    {
      text: 'This market is my roost.',
      where: 'Elesin, Scene 1, to the Praise-Singer, before the Not-I bird story',
      analysis:
        "The metaphor makes Elesin a cockerel, echoing the Praise-Singer's teasing about the cockerel who leaves his tail behind, and makes the market his home and his stage. He goes on to call himself a chicken with a hundred mothers. The image is affectionate and comic, but it also places him among the women who will judge him, and explains why he chooses the market for his leave-taking.",
    },
    {
      text: 'The sap of the plantain never dries.',
      where: 'Elesin, Scene 1, arguing for the bride',
      analysis:
        'A plantain grows a young shoot as the parent stalk withers, so Elesin presents his marriage as continuity: his seed will stay in the earth he leaves. It is a clever argument, and it wins. Soyinka then makes the same plant the instrument of judgement: in Scene 5 Iyaloja mocks the hollow parent stem, and the Praise-Singer says the young shoot, Olunde, has fed the old.',
    },
    {
      text: 'be sure the seed you leave in it attracts no curse',
      where: 'Iyaloja, Scene 1, near the end of the scene',
      analysis:
        "Iyaloja's blessing arrives with a condition. Her warning takes Elesin's own image of seed and earth and turns it into a threat, and the audience hears it as foreshadowing. In Scene 5 she reminds him that she warned him exactly this, and the Bride's silent presence outside his cell makes the curse visible.",
    },
    {
      text: 'How can man talk against death to person in uniform of death?',
      where: 'Amusa, Scene 2, refusing to report while the Pilkingses wear the egungun costume',
      analysis:
        'The pidgin grammar invites the Pilkingses to laugh, and Jane later mimics the line, but the logic is exact, and Amusa explains it himself: it would be like speaking against the government to a man in police uniform. He recognises the costume as the uniform of the dead. The man they patronise understands their dress better than they do.',
    },
    {
      text: "it's always lurking under the surface somewhere",
      where: "Pilkings, Scene 2, after reading Amusa's report",
      analysis:
        'Pilkings assumes at once that the report means ritual murder, and his image makes Yoruba custom a hidden danger waiting beneath a calm surface. The phrase reveals his settled view of the people he governs: they are to be watched, and their customs stamped out. Joseph soon corrects the fact, but not the attitude.',
    },
    {
      text: 'the eater of white left-overs',
      where: 'A girl, Scene 3, driving Amusa out of the market',
      analysis:
        "The insult makes Amusa a servant who lives on what his masters discard. It begins one of the play's central motifs: Olunde will call his own father an eater of left-overs in Scene 4, and in Scene 5 Iyaloja lists the left-overs Elesin chose. The word moves from the sergeant to the Horseman, and the audience sees Elesin fall into Amusa's place.",
    },
    {
      text: 'If you cannot come Elesin, tell my dog.',
      where: "Praise-Singer, Scene 3, speaking in the dead King's voice during the trance-dance",
      analysis:
        "The Praise-Singer recalls the King's own words, a pact that allows even failure a dignified way out: send word by the dog or the horse. Elesin proudly answers that he trusts no beast with messages between a king and his companion. In Scene 5 the dog and horse have indeed gone ahead of him, and the Praise-Singer's reminder of the pact becomes an accusation.",
    },
    {
      text: 'It takes an Elesin to die the death of death',
      where: 'Iyaloja, Scene 3, as Elesin sinks into his trance',
      analysis:
        "Iyaloja's line comes at the end of a list in which each person dies the death that fits them, the valiant in war, the swimmer in water. The repetition in “the death of death” makes Elesin's passage unique and almost impossible to describe. It is the height of the market's faith in him, spoken just before that faith is broken.",
    },
    {
      text: 'Life should never be thrown deliberately away.',
      where: 'Jane to Olunde, Scene 4, about the captain who blew up his ship',
      analysis:
        "Jane states the Western view as a rule without exceptions, and “deliberately” is the word that carries it. Yet she has just told the story of a captain who chose to die to save the people round a harbour, and Olunde's quiet question about those innocent people shows her rule cannot account for the sacrifice her own culture admires.",
    },
    {
      text: 'your greatest art is the art of survival',
      where: 'Olunde to Jane, Scene 4',
      analysis:
        "Olunde's praise is double-edged. He admires British endurance in the war, but the repeated “art” turns survival into a skill with no higher purpose, and he goes on to ask the British to let others survive in their own way. The irony deepens when Elesin's survival turns out to be the catastrophe.",
    },
    {
      text: 'I have no father, eater of left-overs.',
      where: 'Olunde to Elesin, the last line of Scene 4',
      analysis:
        "The son who calmly defended his father's duty now denies him, as his father once disowned him. The insult takes the girls' word for Amusa and turns it on the Horseman: Elesin has chosen scraps over the feast the ancestors prepared. Elesin later says the contempt rescued something of his shame, because it showed him he had a true son.",
    },
    {
      text: 'You did not save my life District Officer. You destroyed it.',
      where: 'Elesin to Pilkings, Scene 5, in the cell',
      analysis:
        'Two short sentences overturn the whole colonial logic of rescue. Pilkings believes he has done a good deed; Elesin tells him that saving a body has destroyed a life, because life for Elesin was honour. The formal address, “District Officer”, keeps him at the distance of his office.',
    },
    {
      text: 'a weight of longing on my earth-held limbs',
      where: 'Elesin to the Bride, Scene 5',
      analysis:
        "This is Elesin's confession. After blaming the white man and the gods, he admits that his weakness came not only from the intrusion but from desire for the world. The compound “earth-held” makes the ground itself cling to him, which recalls the Praise-Singer's lump of earth in his slippers. It is the strongest evidence that the failure was partly his.",
    },
    {
      text: 'You have betrayed us.',
      where: 'Iyaloja to Elesin, Scene 5',
      analysis:
        "Four blunt words, after a scene full of images, give the community's verdict. Iyaloja follows them with a long catalogue contrasting what the market gave Elesin with the scraps he chose, built on a repeated pattern of what they said and what he said. The shift from plain statement to accumulating contrast shows her anger building.",
    },
    {
      text: 'To prevent one death you will actually make other deaths?',
      where: 'Iyaloja to Pilkings, Scene 5, when he says his men will shoot',
      analysis:
        "Iyaloja exposes the contradiction at the heart of the rescue: Pilkings is ready to kill to prevent a death. She follows it with sarcastic praise of the wisdom of the white race. The question anticipates the ending, when Pilkings's intervention has produced two deaths instead of one.",
    },
    {
      text: 'The son has proved the father',
      where: "Iyaloja, Scene 5, uncovering Olunde's body",
      analysis:
        "In six words Iyaloja names the reversal the play has built towards. The son has proved his father's line true by doing what the father would not, and shamed him by doing it. The natural order of the plantain, old feeding young, has been turned upside down.",
    },
    {
      text: 'Turn your mind only to the unborn.',
      where: 'Iyaloja to the Bride, the last line of the play',
      analysis:
        "After two deaths, the play ends by turning from the dead and even the living to the third world of Yoruba belief. The command is spoken to the Bride, who may carry Elesin's child, so the hope is fragile and specific. The line can be read as consolation or as warning: the future must now repair what this night broke.",
    },
  ],

  extracts: [
    {
      title: 'Elesin chooses his bride',
      where: 'Scene 1, second half',
      pointer:
        'From the stage direction in which a beautiful young girl comes along the passage, through Elesin asking Iyaloja who she is, to the end of the scene, where the Bride kneels before Iyaloja and the lights fade.',
      summary:
        "In the middle of his farewell, Elesin is distracted by a young woman passing through the market and describes her beauty at length, until Iyaloja reminds him he is still among the living and tells him the girl is betrothed. Elesin argues, through the image of a plantain whose young shoot grows as the old stalk withers, that a departing man should leave his seed in the earth. Iyaloja decides that the wish of a man on the threshold of the ancestors cannot be refused. When a woman protests that the girl is promised to Iyaloja's own son, Iyaloja refuses to burden Elesin with that knowledge. She blesses the match, then warns him, in proverb after proverb, before the bride is led in.",
      annotations: [
        {
          phrase: "Has one step already in her husband's home",
          note: "Iyaloja answers with an image before she states the plain fact that the girl is betrothed. Elesin's irritated reply shows he does not want to hear it, the first sign that his desire will override the market's order.",
        },
        {
          phrase: 'Memory is Master of Death',
          note: 'Elesin reframes desire as a wish to be remembered. The capitals make Memory and Death sound like rival powers, and his argument turns an appetite into a claim about legacy.',
        },
        {
          phrase: 'The sap of the plantain never dries.',
          note: 'The key image: the young shoot grows as the old stalk withers. Elesin uses it to win the bride; Iyaloja will use the same plant to condemn him in Scene 5.',
        },
        {
          phrase: 'I dare not refuse.',
          note: 'Iyaloja consents out of reverence for a man already touched by the dead, not out of approval. The community’s generosity becomes the opening through which the tragedy enters.',
        },
        {
          phrase: 'Then these same hands will lay your shrouds.',
          note: "Iyaloja joins the wedding and the funeral in one breath. Elesin's exasperated reply, asking why she must be so blunt, suggests he would rather not hear his death named so plainly.",
        },
      ],
      question:
        "Using this passage as a starting point, explore how Soyinka presents Elesin's desire for the bride, and its consequences in the play as a whole.",
    },
    {
      title: 'Olunde and Jane at the ball',
      where: 'Scene 4, middle',
      pointer:
        'From Olunde stepping out of the shadows to speak to Jane, just after Pilkings has run off at the midnight chime, to his calm announcement, when the drums change, that his father is dead.',
      summary:
        "Olunde, just back from England, finds Jane in costume outside the ballroom. She is delighted to see him, then disappointed when he quietly objects to her wearing an ancestral mask. Their conversation moves through the war and a ship's captain who blew himself up to save the people round a harbour, then Olunde's reason for coming home, which is to bury his father, and his warning that Pilkings is wasting his time. Jane calls the custom barbaric and feudal; Olunde points to the guests bowing to the Prince. When the drumming rises, stops and gives way to a new slow beat, he tells her calmly that his father is dead.",
      annotations: [
        {
          phrase: 'you desecrate an ancestral mask',
          note: "Olunde's tone is mild but his verb is not. He names as sacrilege what the Pilkingses call fancy dress, and quietly reverses the question of who is civilised.",
        },
        {
          phrase: 'It is an affirmative commentary on life.',
          note: "Olunde reads the captain's self-sacrifice by the same logic as his father's duty. Jane cannot see the parallel, which exposes the double standard in her horror at the ritual.",
        },
        {
          phrase: 'Therapy, British style.',
          note: "Jane's defence of the ball is witty, but it concedes Olunde's point: the British have their own ceremonies for surviving chaos, and they are no less strange.",
        },
        {
          phrase: 'Is that worse than mass suicide?',
          note: 'Olunde turns the charge of barbarism back on the war, where young men are sent by their generals to die under reassuring names.',
        },
        {
          phrase: 'His will-power has always been enormous',
          note: "The play's sharpest dramatic irony. The audience has seen Pilkings run to stop the ritual, and Olunde's confidence in his father is about to be destroyed within the same scene.",
        },
      ],
      question:
        "How does Soyinka use this conversation to challenge the colonial characters' view of the ritual? Refer to the conversation and to the play as a whole.",
    },
    {
      title: 'The burden',
      where: 'Scene 5, final section',
      pointer:
        "From the women's entry with a long, cloth-covered bundle, after Pilkings agrees to let them in, to the end of the play.",
      summary:
        "The women enter intoning a dirge, carrying a long bundle wrapped in cloth, and set it down outside the cell. Pilkings refuses to let Elesin out to speak to it. The Praise-Singer reminds Elesin of his promises to the King and tells him to speak his message over the one who must now serve in his place. Iyaloja uncovers the bundle: it is Olunde's body. The Praise-Singer tells Elesin that the young shoot has fed the old. Elesin strangles himself with his chain before the guards can stop him. Iyaloja tells Pilkings that this is what he brought about, the Bride closes Elesin's eyes with earth, and Iyaloja's last words, to the Bride, turn to the unborn.",
      annotations: [
        {
          phrase: 'only this last time',
          note: "The Praise-Singer withdraws Elesin's title even as he speaks it. The naming that opened the play in celebration now closes it as a formal stripping of honour.",
        },
        {
          phrase: 'The son has proved the father',
          note: 'A reversal compressed into six words: the son proves the family line true by doing what the father would not, and shames him by doing it.',
        },
        {
          phrase: 'poured its sap into the parent stalk',
          note: 'The plantain image from Scene 1 is turned upside down, so the metaphor Elesin boasted with becomes the evidence of his failure.',
        },
        {
          phrase: 'how late it all is',
          note: "Iyaloja refuses to call Elesin's death a completion. The ritual required the right moment, not only the act, and that moment has passed.",
        },
        {
          phrase: 'who even usurp the vestments of our dead',
          note: 'The egungun costume from Scene 2 returns as an accusation, so the image that introduced the Pilkingses becomes part of the final judgement on them.',
        },
        {
          phrase: 'Turn your mind only to the unborn.',
          note: "The last line turns from grief to the future, and to the Bride's possible child, leaving the audience with the one world the night has not yet damaged.",
        },
      ],
      question:
        "Explore the significance of the ending of Death and the King's Horseman. You must consider language, form and structure in your answer.",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Proverb and counter-proverb',
      example:
        'Iyaloja warns that the awusa nut is easier to eat than the water that follows it; Elesin replies that the “waters of the bitter stream are honey” to a man who has tasted everything (Scene 1).',
      effect:
        "Argument in the market is conducted through inherited sayings, so a proverb carries the authority of the elders. Elesin answers Iyaloja's warning with a proverb of his own, which shows his wit and also his refusal to listen. He wins the exchange and loses the argument that matters, a pattern the audience learns to notice.",
    },
    {
      technique: 'Extended metaphor: the plantain',
      example:
        "Elesin's “The sap of the plantain never dries” (Scene 1); Iyaloja's scorn for the “self-vaunted stem of the plantain”, now proved hollow, and her riddle about which stem withers to feed the other (Scene 5).",
      effect:
        "Soyinka builds the tragedy into one natural image. The plantain's cycle, old stalk feeding new shoot, is the order of the generations. Elesin boasts of it to win his bride; Iyaloja turns it into a riddle he must answer against himself; and at the end she accuses Pilkings of having cut down the “sap-laden shoot”. The metaphor makes the reversal visible.",
    },
    {
      technique: 'Animal imagery: the horse and the hunter’s dog',
      example:
        "Elesin asks whether a horse that smells the stable does not strain at the bridle (Scene 1); in Scene 5 Iyaloja says he chose instead to be “the hunter's dog” feeding on the entrails of the game.",
      effect:
        "Elesin is the King's Horseman, and horse imagery follows him: the Praise-Singer praises a thoroughbred that will not falter, and the King's own horse and dog are sent ahead of him. By Scene 5 the horse has gone before its rider, and Iyaloja lowers Elesin from rider to scavenging dog. The descent of the animal images traces the descent of the man.",
    },
    {
      technique: 'Pidgin English',
      example:
        'Amusa: “How can man talk against death to person in uniform of death?” (Scene 2), and his insistence in the market that “duty is duty” (Scene 3).',
      effect:
        "Amusa's English marks his position, trained into the colonial service but never accepted by it. The Pilkingses laugh at his grammar and Jane mimics it, yet Soyinka gives his broken sentences the clearest logic in Scene 2. The audience learns to hear past the form to the sense, which is exactly what the colonial characters fail to do.",
    },
    {
      technique: 'Contrasting registers',
      example:
        "The Resident's advice to keep your “nose to the ground”, and his fussing over sashes and fez hats (Scene 4), against the Praise-Singer's ritual calls to the entranced Elesin, which he can hear only faintly (Scene 3).",
      effect:
        'The Yoruba characters move into verse, proverb and praise when the ritual matters; the British speak brisk prose full of slang and oaths. The contrast is not that one group is eloquent and the other stupid, since Olunde and Jane argue in the same polished English, but that one language is built to carry meaning between worlds and the other to manage a colony.',
    },
    {
      technique: 'Motif: food and left-overs',
      example:
        'The girls call Amusa “the eater of white left-overs” (Scene 3); Olunde calls his father “eater of left-overs” (Scene 4); Iyaloja says Elesin chose to fight for “the left-overs of the world” (Scene 5).',
      effect:
        "Food is honour in this play: in Scene 1 Elesin recalls eating from the same bowl as his King, and in Scene 5 Iyaloja says the market fed him sweetmeats like those they hoped awaited him on the other side. To eat left-overs is to live on what others discard. The insult passes from the colonial sergeant to the Horseman himself, so the audience sees that Elesin's survival has put him in Amusa's place.",
    },
    {
      technique: 'Parody and mimicry',
      example:
        'In Scene 3 the girls act out a colonial club conversation in which an officer boasts of “a rather faithful ox called Amusa”, and a shout of “Sergeant!” makes Amusa snap to attention.',
      effect:
        "A play within the play, the parody lets Soyinka satirise colonial small talk (the natives, the weather, whisky, golf) through the mouths of Yoruba schoolgirls, then prove the satire with Amusa's reflex. It also prepares Scene 4, where the Resident's real talk of empire, uniforms and keeping up appearances echoes what the girls invented.",
    },
    {
      technique: 'Dramatic irony',
      example:
        'When the drums change, Olunde tells Jane that “His will-power has always been enormous” and that his father is dead (Scene 4), shortly before Elesin is brought in alive.',
      effect:
        "The audience has watched Pilkings run to stop the ritual, so Olunde's certainty is painful to watch. The irony makes the confrontation that follows as devastating for the audience as it is for Olunde, and it deepens the question of what the change in the drums really meant.",
    },
    {
      technique: 'Stage directions as commentary',
      example:
        'Scene 4 opens on a Residency corridor that the stage direction says is redolent of “tawdry decadence”, the air of a far-flung outpost of empire, where the band plays Rule Britannia badly as the Prince arrives.',
      effect:
        "Soyinka's stage directions judge as well as describe, and an essay can treat them as the playwright's own voice. The tawdriness of the ball is written into the set before anyone speaks, which answers in advance Jane's claim that the Yoruba ritual is the barbaric one.",
    },
    {
      technique: 'Rhetorical questions',
      example:
        "The Praise-Singer's lament in Scene 3, a long chain of questions to Elesin, one of which asks whether the “lump of earth” he slid between Elesin's slippers to keep him longer is sifting away.",
      effect:
        "The questions go unanswered because Elesin has moved beyond hearing, and their accumulation marks the growing distance between the living and the man entering the passage. The Praise-Singer's admission inside one of them, that he tried to hold Elesin back, lets the audience feel the ritual's human cost before he breaks down.",
    },
  ],

  structureForm: [
    {
      heading: 'Five scenes, one night, no interval',
      body: "In a note printed with the cast list, Soyinka asks for the play to run without an interval and suggests an adjustable outline set so that the scenes can change fast. The five scenes follow a single night in order, from the market closing to the hours before dawn, so the tragedy has the pressure of a ritual with a fixed hour. The Residency clock striking midnight in Scene 4, and Elesin's claim in Scene 5 that the moment has already passed, make time itself the thing that runs out. Two ways of keeping time meet: the British clock, and the moon Elesin calls his messenger and guide.",
    },
    {
      heading: 'Two worlds, alternating, then colliding',
      body: "Scenes 1 and 3 are in the market; Scenes 2 and 4 are in colonial spaces; Scene 5 is where the two meet. The alternation invites comparison: dance against dance (the Pilkingses' tango and their costume show against Elesin's trance-dance), celebration against celebration (a Yoruba wedding and a British ball), and ceremony against ceremony (the Prince's arrival against the King's burial). In Scene 5 the worlds share one space, a cell, and the Yoruba world enters the colonial one on the shoulders of the market women.",
    },
    {
      heading: 'Settings that argue',
      body: "Pearson's May 2024 paper asked about the market and the Residency, and each setting carries meaning. The market is Elesin's chosen place of leave-taking, the “heart of life”, run by women and closed to the police. The District Officer's verandah, with its hand-cranked gramophone, makes the decision to arrest look domestic and casual. The bridal chamber is a converted cloth stall, the approach to it laid with rich velvets and woven cloth. The Residency is written in the stage directions as tawdry and decadent, and in its disused annex is a barred cellar where slaves were once stored. Imprisoning Elesin there puts the history of the colony into the architecture of the final scene.",
    },
    {
      heading: 'Tragedy as lament',
      body: "Soyinka asks producers to find the play's “threnodic essence”: a threnody is a song of mourning, so he frames the play as a lament rather than a debate. It still follows a tragic shape an examiner will recognise: a great man with a flaw of appetite and will, a fall that is partly his own doing, a reversal in which the son takes the father's place, and a moment of recognition in Elesin's confessions in Scene 5. Unlike many tragedies it ends not with order restored by the powerful but with the community's judgement and a turn towards the unborn.",
    },
    {
      heading: 'Music, drums and dance as action',
      body: "The Author's Note says the play can be fully realised only through an evocation of music from the “abyss of transition”. Drums are not background: they tell the characters, and the audience, where the ritual has reached. Joseph cannot tell whether they sound like a death or a wedding; Pilkings finds them unsettling; Olunde hears them change and stop and reads the change as his father's death. The women dirge in Scenes 3 and 5, and in Scene 5 the stage direction says the drum is not used at all. Its silence is part of the meaning of the ending.",
    },
    {
      heading: 'What happens off stage',
      body: "Three of the most important events are never shown: the consummation of the marriage, the arrest that interrupts the trance, and Olunde's death. The audience learns of them through a white cloth, Elesin's cries from off stage, and a body carried in by women. The choice keeps the play's attention on meaning rather than spectacle. How Olunde died is never described, only what his death means, so the audience's gaze stays on what it does to Elesin and to the world.",
    },
    {
      heading: 'Echoes that close the circle',
      body: "Much of Scene 5 answers Scene 1. Elesin asked that his bride should seal his eyelids with earth; at the end she does. He boasted of the plantain; Iyaloja turns it into a riddle and the Praise-Singer inverts it. He spoke of the cord that links the living to the great origin; he accuses Pilkings of cutting it. The women praised him as a man of honour; Pilkings asks for his word of honour and Elesin says it is already in the District Officer's desk. Even the cloth returns: the play opens with bolts of cloth being taken down in the market, and ends with Olunde's body carried in like a cloth-covered bolt.",
    },
    {
      heading: 'Costume and cloth',
      body: "Clothing tells the story. Elesin is robed in the market's richest cloth as a sign of honour; the Pilkingses wear the egungun costume, fitted with press-button controls, as a party joke; the Prince and his companions wear seventeenth-century European costume; Olunde arrives in a sober western suit; and in Scene 5 Pilkings has changed into a police officer's uniform, which recalls Amusa's complaint about talking to a man in the uniform of death. Iyaloja's accusations at the end return to dress too: strangers who take the clothing of the dead as their own.",
    },
    {
      heading: 'Comedy and satire',
      body: "The play is funny, and the comedy is structural, not decoration. Scene 1 opens in teasing and a staged mock quarrel; Scene 3 turns Amusa's raid into farce and the girls' parody; Scene 4 lets the Resident's fussing and the badly played Rule Britannia undercut the Empire's grandeur. Laughter at the colonial characters' expense makes their power look smaller than they think it is, and it makes the drop into tragedy in Scenes 4 and 5 feel steeper.",
    },
  ],

  vocabulary: [
    {
      term: 'Elesin Oba',
      definition:
        "The King's Horseman: the chief whose inherited duty is to follow the dead king into the world of the ancestors. Oba means king.",
    },
    {
      term: 'Alafin',
      definition:
        "The title of the king of Oyo, spelled this way in the play and usually Alaafin elsewhere. It is the dead King whom Elesin must accompany; the Praise-Singer calls him Elesin Alafin, the Alafin's Horseman.",
    },
    {
      term: 'Iyaloja',
      definition:
        "The title of the leader of the market women, described in Soyinka's cast list as the “Mother” of the market.",
    },
    {
      term: 'Praise-singer',
      definition:
        "A poet who performs the praises, deeds and lineage of a great person. In the play, Elesin's companion, whom he calls Olohun-iyo.",
    },
    {
      term: 'Egungun',
      definition:
        'A Yoruba masquerade in which masked, costumed figures are the visible presence of the ancestors returning to visit the living. The Pilkingses wear a confiscated egungun costume as fancy dress.',
    },
    {
      term: 'Transition',
      definition:
        "Soyinka's word, in the Author's Note, for the passage that links the worlds of the living, the dead and the unborn. Use it, and the play's own word passage, when you write about Elesin's ritual.",
    },
    {
      term: 'Alari',
      definition:
        'A prized, richly coloured cloth, usually deep red or purple. In Scene 1 Iyaloja names it the cloth of honour as the women robe Elesin, and his sash is made of it: bright red in Scene 1, deep purple in Scene 3.',
    },
    {
      term: 'Agbada',
      definition:
        'A large, wide-sleeved robe worn by men in West Africa. Elesin flicks its sleeves with renewed confidence as his bride is brought in.',
    },
    {
      term: 'Wrapper',
      definition:
        'A length of cloth wrapped around the body as a garment. Elesin comes out of the bridal chamber in his wrapper only.',
    },
    {
      term: 'Osugbo',
      definition:
        'A powerful Yoruba society with political, religious and judicial authority. In Scene 5 Elesin says that in the house of osugbo those who keep watch recognised the moment and sent word to him through the sacred drums.',
    },
    {
      term: 'Gbedu',
      definition:
        'A deep-toned drum associated with royalty. The Praise-Singer fears that its voice is covering his own as Elesin moves away from him.',
    },
    {
      term: 'Harmattan',
      definition:
        "The dry, dusty wind that blows across West Africa. The Praise-Singer says Elesin's limbs are drowsy as palm oil in its cold.",
    },
    {
      term: 'Dirge',
      definition:
        'A song of mourning. The women dirge as Elesin dances into his trance in Scene 3 and as they carry in the burden in Scene 5.',
    },
    {
      term: 'Threnody',
      definition:
        "A poem or song of lament for the dead. Soyinka's Author's Note asks producers to bring out the play's threnodic essence.",
    },
    {
      term: 'District Officer',
      definition:
        'A British colonial official in charge of a district: Simon Pilkings. His superior is the Resident.',
    },
    {
      term: 'Residency',
      definition:
        "The official residence of the Resident, the senior British official. The ball takes place there in Scene 4, and Elesin's cell is in its disused annex in Scene 5.",
    },
    {
      term: 'Masque',
      definition:
        'A courtly entertainment of masks, costume, music and dance, at its height in England in the early seventeenth century. The stage direction that opens Scene 4 begins with the words “A Masque”, and the Prince wears seventeenth-century dress.',
    },
    {
      term: 'Pidgin',
      definition:
        'A simplified, mixed form of a language used between speakers of different languages. Amusa speaks a West African pidgin English.',
    },
    {
      term: 'Catalyst',
      definition:
        "Something that sets off a change without being its deepest cause. Soyinka's Author's Note calls the colonial factor a catalytic incident.",
    },
    {
      term: 'Dramatic irony',
      definition:
        "When the audience knows more than a character. Olunde announces his father's death with confidence the audience has reason to doubt.",
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          "‘Key settings in the play include both the market and the Residency.’ Discuss the significance of different settings in Death and the King's Horseman. You must consider language, form and structure in your answer. (Pearson, May 2024)",
        skill: 'Whole-play essay on setting and structure',
        guidance: [
          "Open with an argument, not a list: for example, that Soyinka's settings stage a contest over whose ceremonies matter, and that the play ends by carrying the market's ritual into a colonial cell.",
          "The market, Scenes 1 and 3: the opening stage direction (a market closing for the day), Elesin's “roost”, his chosen “heart of life”, and the women's power to keep the police out.",
          "The District Officer's verandah, Scene 2: gramophone, tango and the egungun costume as fancy dress. Show how the domestic comfort makes the decision to arrest look casual.",
          "The Residency, Scene 4: the stage direction's “tawdry decadence”, the Prince, the badly played Rule Britannia and the bowing guests; set it against Scene 3's trance-dance, and use Olunde's gesture towards the guests when Jane calls the custom feudal.",
          'The cell, Scene 5: the barred cellar where slaves were once stored, and the market women and their ritual arriving inside it.',
          'Structure: the alternation of settings, then the collision. End by judging what the final setting says about where, and to whom, the tragedy happens.',
        ],
      },
      {
        question:
          "How does Soyinka present Amusa in Death and the King's Horseman? You must consider language, form and structure in your answer. (Pearson, May 2024)",
        skill: 'Whole-play essay on a minor character',
        guidance: [
          'Thesis: Amusa is comic but not contemptible, a man divided between two loyalties whom the colonial system uses and never respects.',
          'Scene 2: his refusal to report in front of the costume, the “uniform of death” question, and his line about arresting ring leaders but respecting egungun. Note Jane mimicking him.',
          "Language: his pidgin, its hidden logic, and how the Pilkingses laugh at it; compare with Pilkings's clipped orders and the market's proverbs.",
          "Scene 3: the women mock his manhood, Iyaloja turns his word “duty” back on him, and the girls' parody of the faithful ox ends with him snapping to attention and retreating.",
          'Scene 4: Pilkings threatens him with pork, he keeps his eyes on the ceiling, is relieved of duty, and leaves without looking at Jane.',
          "Whole-play link: the girls' insult, “the eater of white left-overs”, begins the motif that ends with Olunde and Iyaloja using it of Elesin. Conclude on what Amusa shows about colonial rule.",
        ],
      },
      {
        question:
          '‘Iyaloja is determined that things are carried out in accordance with Yoruba traditions.’ How is Iyaloja presented as a character who wants the right thing to be done in the play? You must consider language, form and structure in your answer. (Pearson, November 2023)',
        skill: 'Whole-play character essay built on a statement',
        guidance: [
          'Thesis: Iyaloja is the play’s keeper of what is right, but her sense of right is severe, and it includes her own share in the tragedy.',
          'Scene 1: she gives up her son’s bride because refusing a man on the threshold of the ancestors would be impious, then warns Elesin in proverb after proverb. Is her consent right, or the first mistake?',
          'Scene 3: she defends the wedding night against Amusa and tries to calm the girls. Show her authority working through scorn rather than force.',
          'Scene 5: her scorn, the plantain riddle, her demand that Elesin at least send his message to the King, and her charge that Pilkings brought the deaths about.',
          'Language: proverb, riddle, rhetorical question and the long catalogue of what the market gave and what Elesin chose. Explain why an indirect style suits a guardian of tradition.',
          'Judgement: weigh her rightness against Elesin’s reminder that she helped bind him to the earth, and against the cost the ending exacts.',
        ],
      },
      {
        question:
          'How does Soyinka present the character of Olunde in the play? You must consider language, form and structure in your answer. (Pearson, November 2024)',
        skill: 'Whole-play character essay',
        guidance: [
          'Structure first: Olunde is talked about in Scene 2, as the sensitive boy Pilkings rescued, long before he appears. Plan around the gap between that picture and the man who arrives.',
          "Scene 4 with Jane: the desecrated mask, the captain, the art of survival, the war, and the calm announcement of his father's death.",
          'Language: his English is controlled, ironic and precise, beating Jane at her own game. Show how the calm tone sharpens his arguments and makes her outburst more revealing.',
          "The turning point: “I have no father, eater of left-overs.” Explain the insult through the play's food imagery.",
          'Scene 5: his death is reported, not shown; Iyaloja says the chiefs asked him to speak the words and he refused while his father lived; the plantain image is reversed.',
          "Judgement: is he a hero, or the ritual's victim? Argue your view and give the alternative.",
        ],
      },
      {
        question:
          "Discuss the significance of Simon and Jane Pilkings in Death and the King's Horseman. You must consider language, form and structure in your answer. (Pearson, May 2024, alternative paper)",
        skill: 'Whole-play essay on a pair of characters',
        guidance: [
          "Thesis: the Pilkingses are catalysts, as the Author's Note insists, and Soyinka uses them to show the confidence of colonial rule and its blindness.",
          "Scene 2: the tango and costume, Pilkings's reluctant decision and his language about Elesin, Joseph and Amusa, and Jane's gentler questions.",
          "Scene 4: the costume show for the Prince, Jane's debate with Olunde and her outburst, and Pilkings arranging the slave cellar.",
          "Scene 5: Pilkings's “good bargain”, his proverb about the elder going unwillingly to heaven, the word of honour, and his attempt to revive Elesin; Iyaloja's replies.",
          "Compare them: does Jane's curiosity make her different in kind from her husband, or only in manner?",
          "Conclude on significance: what the tragedy would be without them, and why Soyinka refused to make Pilkings's dilemma its centre.",
        ],
      },
      {
        question:
          "‘There are very different views on upholding Yoruba traditions in the play.’ Discuss the importance of keeping Yoruba traditions in Death and the King's Horseman. You must consider language, form and structure in your answer. (Pearson, November 2024)",
        skill: 'Whole-play essay on a theme',
        guidance: [
          "Define the traditions the play shows: the Horseman's duty, the King's horse and dog, the egungun, the market, the rites of marriage and burial, the elders' proverbs.",
          'Voices that uphold them: Iyaloja, the Praise-Singer, the women and Olunde; and the partial respect of Amusa and Joseph.',
          "Voices that reject them: Pilkings, Jane (“feudal”, barbaric) and the Resident; then Elesin's failure as a crisis inside the tradition itself.",
          'Language: proverbs, the plantain image, and ritual verse as tradition in action on stage.',
          'Structure: the ending restores the tradition at a terrible cost, and the last line turns to the unborn.',
          "Judgement: does the play simply endorse tradition? Weigh the cost of Olunde's death and the Bride's silence.",
        ],
      },
      {
        question:
          'How far do you agree that Elesin is a weak man who deserves his fate? You must consider language, form and structure in your answer. (Practice question, modelled on a past Pearson question)',
        skill: 'Whole-play argument with a view to test',
        guidance: [
          'Define the key words before you start: weak and deserves are both judgements, and your answer should say by whose standards they are made.',
          'Evidence for weakness: the demand for the bride, the honey-pot and plantain arguments, and his Scene 5 confessions of longing and of relief.',
          'Evidence against: the arrest at the moment of crossing, the chains, a son removed by Pilkings years before, and a community that indulged him.',
          "Language and structure: the boasts of Scene 1 set up the fall; Iyaloja's scorn and the Praise-Singer's farewell in Scene 5 pass the community's verdict.",
          "Conclude with a balanced verdict that uses the Author's Note on the colonial factor as a catalyst, and says whether his final act changes your judgement.",
        ],
      },
    ],
    tips: [
      "Know what this question rewards. Pearson's modern drama question, in the exam and in the coursework assignment alike, assesses close knowledge with a personal response, and analysis of language, form and structure. Context is assessed in the literary heritage section, not here. So use the Yoruba and colonial background only where it explains a line or a choice, never as a paragraph of history.",
      "Use the play's own words for the ritual: transition, passage, leave-taking. The colonial characters say suicide; Olunde turns the word back on Jane by asking about the war. Showing who uses which word is sharper than avoiding it.",
      "Check attribution in your own copy. The honey-pot line is Elesin's, not Iyaloja's, although some revision materials give it to her.",
      'The paper is open book, but only with a prescribed edition that is completely unmarked: no notes, no highlighting. A clean copy is a tool, not a crutch: quote a short phrase, name the scene, and analyse. Copying long speeches wastes the time analysis needs.',
      "Treat stage directions as Soyinka's writing. The market closing at the start of Scene 1, the Residency's tawdry decadence in Scene 4 and the unused drum in Scene 5 are all quotable evidence.",
      "Use the Author's Note carefully: quote “a catalytic incident merely” to show you know Soyinka's view, then test it against the play rather than simply repeating it.",
      'Track one motif across all five scenes (the plantain, left-overs, cloth, honour or the cord to the great origin). It is the fastest way to turn a character answer into a whole-play argument.',
      'Write about form: this is a play for performance, with drums, dance and dirge. Say what an audience sees and hears, especially in the trance-dance and the final tableau.',
      'Avoid a simple essay in which the British are wrong and the Yoruba right. Soyinka holds Elesin responsible too, and the strongest answers show that the play is harder than a clash of cultures.',
      "Be precise about what the play does not tell you. It never shows Olunde's death or says how he died; write about what Iyaloja and the Praise-Singer say it means.",
    ],
  },

  modelAnswer: {
    question:
      "How does Soyinka present Amusa in Death and the King's Horseman? You must consider language, form and structure in your answer.",
    paragraph:
      "Soyinka presents Amusa as a man caught between two worlds, and the comedy that surrounds him makes his position painful rather than merely ridiculous. In Scene 2 he refuses to make his report while the Pilkingses wear the confiscated egungun costume, asking “How can man talk against death to person in uniform of death?” The pidgin grammar invites them to laugh, and Jane later repeats the line in a mock-deep voice, yet the question is exact, and Amusa explains it himself: it would be like speaking against the government to a man in police uniform. The man they patronise understands their dress better than they do. His loyalties are divided with the same precision: he will arrest the ring leaders, but “I treat egungun with respect”, a distinction Pilkings never grasps, since in Scene 4 he threatens to feed his Muslim sergeant pork. Structurally, Soyinka then sends Amusa into the market, the one place his authority cannot reach. The girls seize his constables' batons and act out a colonial club conversation in which an officer boasts of “a rather faithful ox called Amusa”; the metaphor turns him into a working animal owned by a master, and when a girl barks “Sergeant!” he snaps to attention, proving the joke with his own body. The girls' name for him, “the eater of white left-overs”, anticipates Olunde's “eater of left-overs” in Scene 4, which suggests that Amusa is not only comic relief but the play's first portrait of a man living on another's authority, a failure the play will later find in Elesin himself.",
    commentary: [
      'It opens with an argument about how Amusa is presented, comic but painful, rather than a description of who he is, so every later sentence has a job to do.',
      'Quotations are short and embedded, and each is analysed at word level: the pidgin grammar, the uniform comparison Amusa makes himself, the ox metaphor.',
      'It uses structure, following Amusa across Scenes 2, 3 and 4 and explaining why Soyinka places him in the market at all.',
      'Background is used only to explain meaning: his religion and his place in the colonial police explain the pork threat and the split loyalty, and the paragraph never stops for a history lesson.',
      'It connects a minor character to a whole-play motif, left-overs, which turns a character question into an argument about the play.',
      'It thinks about performance, noticing the moment he snaps to attention, which shows awareness that this is drama written for an audience.',
    ],
  },

  timeline: [
    {
      where: 'Scene 1, opening',
      title: 'The Horseman enters the market',
      summary:
        'As the market closes, Elesin sweeps in with his drummers and his Praise-Singer, jokes about his haste, and dances the story of the Not-I bird: everyone who hears Death approaching denies it, but Elesin claims he welcomed the bird.',
      setting: 'A passage through a market at closing time, stalls being emptied',
      who: ['Elesin', 'Praise-Singer', 'Iyaloja', 'The women and girls of the market'],
      quote: 'My rein is loosened. / I am master of my Fate.',
      themes: ['Duty and the will', 'Community and the market'],
      tension: 2,
      significance:
        "Elesin's boast of fearlessness is the measure the rest of the play holds him to.",
    },
    {
      where: 'Scene 1',
      title: 'A man of honour',
      summary:
        'When the women praise him as a man of honour, Elesin pretends to be bitterly offended until they kneel and beg forgiveness; then he laughs, points out that he is still in his everyday clothes, and they robe him in their richest cloth.',
      setting: 'The market, among the cloth stalls',
      who: ['Elesin', 'Iyaloja', 'Praise-Singer', 'The women and girls of the market'],
      quote: 'Life is honour. / It ends when honour ends.',
      themes: ['Honour and shame', 'Community and the market'],
      tension: 2,
      significance:
        'The joke is playful, but it shows how easily Elesin can make the community give him what he wants.',
    },
    {
      where: 'Scene 1, second half',
      title: 'The bride',
      summary:
        "Elesin sees a beautiful young woman and asks for her as his bride. She is betrothed to Iyaloja's son, but Iyaloja will not refuse a man so near the ancestors; she blesses the match and warns him that his seed must bring no curse.",
      setting: 'The market, on the evening of the burial',
      who: ['Elesin', 'Iyaloja', 'The Bride', 'The women and girls of the market'],
      quote: 'be sure the seed you leave in it attracts no curse',
      themes: ['Duty and the will', 'Life, death and transition'],
      tension: 3,
      significance:
        "The request plants the doubt the tragedy grows from: is Elesin's heart still in this world?",
    },
    {
      where: 'Scene 2',
      title: 'The costume of the dead',
      summary:
        'At their bungalow the Pilkingses tango in an egungun costume confiscated last month from masqueraders. Amusa is horrified and will not report to them while they wear it; his written note says Elesin is to commit death tonight.',
      setting: "The verandah of the District Officer's bungalow, a tango on the gramophone",
      who: ['Simon Pilkings', 'Jane Pilkings', 'Amusa'],
      quote: 'How can man talk against death to person in uniform of death?',
      themes: ['Belief, respect and desecration', 'Colonial power and blindness'],
      tension: 3,
      significance:
        "The sacred mask worn as fancy dress sets up the colonial world's blindness in one image.",
    },
    {
      where: 'Scene 2, later',
      title: 'Pilkings decides',
      summary:
        "Joseph explains that Elesin must die to accompany the King. Pilkings recalls helping Olunde escape to medical school against Elesin's will, insults Joseph's faith, and sends orders for Elesin's arrest so that he can still go to the ball.",
      setting: "The District Officer's bungalow, with drumming from the town",
      who: ['Simon Pilkings', 'Jane Pilkings', 'Joseph'],
      themes: ['Colonial power and blindness', 'Belief, respect and desecration'],
      tension: 3,
      significance:
        'The decision that breaks the ritual is made casually, between a quarrel about holy water and a dance.',
    },
    {
      where: 'Scene 3, opening',
      title: 'The women stand their ground',
      summary:
        'Amusa and two constables try to reach the bridal chamber. The women mock them, the girls seize their batons and hats and act out a colonial club conversation, and Amusa retreats with a warning.',
      setting: 'The market, outside a cloth stall turned into a bridal chamber',
      who: ['Amusa', 'Iyaloja', 'The women and girls of the market'],
      quote: 'the eater of white left-overs',
      themes: ['Community and the market', 'Colonial power and blindness'],
      tension: 3,
      significance:
        "Comedy at its sharpest: the women's power is real, and so is the threat they are laughing away.",
    },
    {
      where: 'Scene 3',
      title: 'The trance-dance',
      summary:
        "Elesin comes out of the chamber with a white cloth showing the marriage is consummated. As the drums tell him the King's dog has been killed and the horse will follow, he dances into a deepening trance while the Praise-Singer calls to him and the women dirge.",
      setting: 'The market at night, under the moon',
      who: ['Elesin', 'Praise-Singer', 'Iyaloja', 'The Bride', 'The women and girls of the market'],
      quote: 'It takes an Elesin to die the death of death',
      themes: ['Life, death and transition', 'Duty and the will'],
      tension: 4,
      significance:
        'The ritual is under way and seems to be working; everything after this is interruption.',
    },
    {
      where: 'Scene 4, opening',
      title: 'The ball at the Residency',
      summary:
        "The Prince arrives to a badly played Rule Britannia, and the Pilkingses win applause demonstrating their egungun costume. Amusa's urgent note reaches the Resident, and when the clock strikes midnight Pilkings runs to stop the ritual.",
      setting: 'A corridor around the great hall of the Residency, during a fancy-dress ball',
      who: ['Simon Pilkings', 'Jane Pilkings', 'The Resident', 'Amusa'],
      themes: ['Colonial power and blindness', 'Belief, respect and desecration'],
      tension: 3,
      significance:
        'The colonial ceremony, with its bowing and costumes, is placed right beside the Yoruba one.',
    },
    {
      where: 'Scene 4',
      title: 'Olunde and Jane',
      summary:
        "Olunde, back from England, finds Jane and quietly calls her costume a desecration. They argue about a ship's captain who died to save the people round a harbour, the war and the ritual; when the drums change, Olunde calmly tells her his father is dead.",
      setting: 'Outside the ballroom at the Residency',
      who: ['Olunde', 'Jane Pilkings'],
      quote: 'your greatest art is the art of survival',
      themes: [
        'Life, death and transition',
        'Belief, respect and desecration',
        'Colonial power and blindness',
      ],
      tension: 4,
      significance:
        "The play's fullest argument about sacrifice, held just before its assumption is overturned.",
    },
    {
      where: 'Scene 4, ending',
      title: 'Father and son',
      summary:
        "Pilkings arranges to hold Elesin in the old slave cellar. Elesin is brought in, breaks away in handcuffs and finds his son; he collapses at Olunde's feet, and Olunde disowns him and walks away.",
      setting: 'The Residency grounds, at night',
      who: ['Elesin', 'Olunde', 'Simon Pilkings', 'Jane Pilkings'],
      quote: 'I have no father, eater of left-overs.',
      themes: ['Honour and shame', 'Duty and the will'],
      tension: 5,
      significance:
        "The world reverses: the father kneels to the son, and the son's contempt is the play's turning point.",
    },
    {
      where: 'Scene 5, opening',
      title: 'In chains',
      summary:
        'Elesin stands chained in a barred cell with his silent bride outside. He tells Pilkings he has destroyed a life, not saved one, then confesses to his bride that longing, as well as the intrusion, weakened his will.',
      setting: 'A barred cell in the Residency, before dawn',
      who: ['Elesin', 'Simon Pilkings', 'The Bride'],
      quote: 'You did not save my life District Officer. You destroyed it.',
      themes: ['Duty and the will', 'Colonial power and blindness'],
      tension: 3,
      significance:
        "Elesin's two explanations, blame and confession, sit side by side for the audience to weigh.",
    },
    {
      where: 'Scene 5',
      title: "Iyaloja's judgement",
      summary:
        'Pilkings lets Iyaloja in. She pours scorn on Elesin, tells him he has betrayed the community, and asks him a riddle about which stem of the plantain withers to feed the other. A burden, she says, is on its way.',
      setting: 'Outside the cell, under guard',
      who: ['Iyaloja', 'Elesin', 'Simon Pilkings', 'Jane Pilkings'],
      quote: 'You have betrayed us.',
      themes: ['Honour and shame', 'Community and the market'],
      tension: 4,
      significance:
        'The community’s verdict is spoken by the woman who warned him and gave him his bride.',
    },
    {
      where: 'Scene 5, ending',
      title: 'The burden',
      summary:
        "The women carry in a cloth-wrapped bundle, and Iyaloja uncovers Olunde's body: he has died in his father's place. Elesin strangles himself with his chain; the Bride closes his eyes with earth, and Iyaloja tells her to think only of the unborn.",
      setting: 'The cell and the space before it, just before dawn',
      who: [
        'Iyaloja',
        'Elesin',
        'Praise-Singer',
        'Simon Pilkings',
        'Jane Pilkings',
        'The Bride',
        'The women and girls of the market',
      ],
      quote: 'The son has proved the father',
      themes: ['Life, death and transition', 'Honour and shame', 'Colonial power and blindness'],
      tension: 5,
      significance:
        'Two deaths instead of one, and the order of the generations reversed: the outcome Pilkings meant to prevent.',
    },
  ],

  relationships: [
    {
      from: 'Elesin',
      to: 'Iyaloja',
      kind: 'honoured guest and mother of the market',
      note: "She indulges him, gives him her son's bride and warns him in Scene 1; in Scene 5 she is his judge, and he reminds her that she helped bind him to the earth.",
    },
    {
      from: 'Elesin',
      to: 'Olunde',
      kind: 'father and eldest son',
      note: 'Elesin opposed his going to England and disowned him; Olunde comes home to honour him, disowns him when he finds him alive, and dies in his place.',
    },
    {
      from: 'Elesin',
      to: 'Praise-Singer',
      kind: 'master and praise-poet',
      note: 'Close companions who speak in call and response. The Praise-Singer celebrates him, tries secretly to hold him back, and in Scene 5 strips him of his title.',
    },
    {
      from: 'Elesin',
      to: 'Simon Pilkings',
      kind: 'chief and colonial officer',
      note: 'Old antagonists since Pilkings took Olunde abroad. The arrest makes Pilkings the jailer, and in Scene 5 Elesin calls him the ghostly one and tells him he has shattered the peace of the world.',
    },
    {
      from: 'Elesin',
      to: 'The Bride',
      kind: 'husband and bride of one night',
      note: 'Elesin calls her the final gift of the living and then half blames her for his weakness; she closes his eyes with earth at the end.',
    },
    {
      from: 'Simon Pilkings',
      to: 'Jane Pilkings',
      kind: 'husband and wife',
      note: "Affectionate and teasing; Jane pushes Simon to act, tempers his language and argues with Olunde, but does not question Britain's right to interfere.",
    },
    {
      from: 'Simon Pilkings',
      to: 'Amusa',
      kind: 'officer and sergeant',
      note: 'Pilkings relies on Amusa, praises him for not believing in what he calls mumbo-jumbo, mocks his fear of the costume and threatens him with pork.',
    },
    {
      from: 'Simon Pilkings',
      to: 'Joseph',
      kind: 'master and houseboy',
      note: 'Casual contempt: Pilkings calls Joseph his native guide and insults his faith, then apologises only for his own reasons.',
    },
    {
      from: 'Simon Pilkings',
      to: 'Olunde',
      kind: 'patron and protégé',
      note: 'Pilkings helped Olunde escape to medical school and thinks of him as rescued; Olunde thanks him and tells him his success would have been a calamity.',
    },
    {
      from: 'Jane Pilkings',
      to: 'Olunde',
      kind: 'old acquaintances',
      note: 'She likes him and wants to understand him; their argument in Scene 4 exposes the limits of her sympathy, and her outburst is followed by an apology.',
    },
    {
      from: 'Iyaloja',
      to: 'Simon Pilkings',
      kind: 'accuser and accused',
      note: 'She calls him child, refuses to explain herself to him, and at the end tells him the deaths are what he brought about.',
    },
    {
      from: 'Amusa',
      to: 'The women and girls of the market',
      kind: 'policeman and the market',
      note: "He comes to arrest Elesin; they mock his manhood, seize his constables' batons and hats, parody his masters and drive him out.",
    },
    {
      from: 'The Resident',
      to: 'Simon Pilkings',
      kind: 'superior and subordinate',
      note: 'The Resident scolds Pilkings for not keeping him informed and cares most that the Prince should not be troubled; Pilkings mutters back.',
    },
  ],

  compareWith: [
    {
      title: 'Things Fall Apart',
      href: '/revision/texts/things-fall-apart',
      reason:
        "Also on the 4ET1 list: Achebe's novel shows British missionaries and government arriving in an Igbo community, and another proud, forceful man brought down partly by his own nature and partly by colonial intrusion.",
    },
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'Another Section A modern drama in which a celebration is interrupted by an outsider, and the audience is asked to decide who is responsible for a death that happens off stage.',
    },
    {
      title: 'A View from the Bridge',
      href: '/revision/texts/a-view-from-the-bridge',
      reason:
        "On the same list: a proud man breaks the code of his community and dies at the end, and a man's name and honour sit at the centre of the tragedy, as they do for Elesin.",
    },
  ],

  contentGuidance: [
    'mortality',
    'mental_health',
    'violence',
    'colonialism',
    'discrimination',
    'crime_injustice',
    'mythological_religious',
    'intimate_relationships',
  ],

  quotesFromElsewhere: [
    'clash of cultures',
    'a catalytic incident merely',
    'largely metaphysical',
    'facile tag',
    'threnodic essence',
    'the living, the dead and the unborn',
    'while the war was still on',
    'abyss of transition',
  ],

  sources: [
    {
      label:
        "The play text: a complete copy posted on a university teaching site (with an American editor's introduction and footnotes, not used as the play's words), read in full to check every quotation, its speaker and its scene, and used to count the play's length. Used for verification only; students should use a prescribed Methuen edition.",
      url: "https://jpellegrino.com/teaching/ENGL2112/2112%20texts/016%20-%20Soyinka%20-%20Death%20and%20the%20King's%20Horseman.pdf",
    },
    {
      label:
        'The play text, second copy: a scan of the Hill and Wang paperback (New York, 1987, published by arrangement with W. W. Norton; copyright line 1975), found through a web search and used for verification only. Every quotation and quoted phrase in this guide was matched against it as well. Not linked here because it is not a licensed copy. Its cover also states the 1967 arrest, 22 months in prison and the 1986 Nobel Prize as the first African writer.',
    },
    {
      label:
        "Pearson Edexcel International GCSE English Literature specification, Issue 3, August 2025: Death and the King's Horseman on the modern drama list for Components 2 and 3; Component 2 is open book with a clean, completely unmarked prescribed edition; the modern drama section and Assignment A assess close knowledge with personal engagement and language, form and structure, with context assessed only in the literary heritage section; prescribed editions listed as Methuen and Bloomsbury Modern Classics.",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson 4ET1/02 question paper, 20 May 2024: Question 9 on settings and Question 10 on Amusa, wording checked, and the front-cover instruction that clean copies of set texts may be taken into the examination.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02-que-20240521.pdf',
    },
    {
      label:
        '4ET1/02R question paper, 20 May 2024 (the alternative paper): Question 9 on bravery and Question 10 on Simon and Jane Pilkings, wording checked.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02r-que-20240521.pdf',
    },
    {
      label:
        '4ET1/02 question paper, November 2023: Question 9 on Iyaloja as a character who wants the right thing to be done, and Question 10 on the death ritual, wording checked.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02-que-20231125.pdf',
    },
    {
      label:
        'Pearson Principal Examiner Feedback, 4ET1 Paper 02, November 2024: the Olunde question and the question on keeping Yoruba traditions, wording checked (no candidate responses were seen on this text that series).',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02-pef-20250123.pdf',
    },
    {
      label:
        "Pearson mark schemes, 4ET1/02 January 2022 and June 2022 (main and alternative papers): a second source for several lines, including Amusa's uniform-of-death question and Olunde's desecrated mask. The January 2022 scheme's versions of two other lines differ from both copies of the play, so neither line is quoted here (see the file header).",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/exam-materials/4ET1_02_rms_20220303.pdf',
    },
    {
      label:
        "Colour My Learning, list of past 4ET1 questions on the play: the January 2019 question on Elesin as a weak man who deserves his fate, on which the practice question is modelled, and the June 2023 question, which quotes the play's final line in full, a further source for it. Pearson's own papers were checked for every question dated in this guide.",
      url: 'https://www.colourmylearning.com/2023/03/edexcel-english-literature-igcse-4et1-01-paper-2-modern-drama-past-exam-questions-death-and-the-kings-horseman-wole-soyinka/',
    },
    {
      label:
        'GradeSaver quotations page and Act V summary: a further source for This market is my roost, the eater of white left-overs, the art of survival, I have no father, eater of left-overs, the sapping of my will, The son has proved the father, a weight of longing on my earth-held limbs, the final gift of the living, and To prevent one death you will actually make other deaths.',
      url: 'https://www.gradesaver.com/death-and-the-kings-horseman/study-guide/quotes',
    },
    {
      label:
        'Wikipedia, Wole Soyinka: birth name, date and place, University College Ibadan and Leeds (English literature), work for the Royal Court Theatre, arrest by the federal authorities in the civil war and 22 months in prison, the Churchill College fellowship of 1973 to 1974 during which he wrote the play, and the 1986 Nobel Prize as the first African laureate.',
      url: 'https://en.wikipedia.org/wiki/Wole_Soyinka',
    },
    {
      label:
        'Encyclopedia.com, Soyinka, Wole (13 July 1934- ): a second source for the birth date and place, Ibadan and Leeds, his time with the Royal Court in London in 1958 to 1959, detention from August 1967 (it gives 27 months, which is why the guide says around two years), the play written around 1973 at Cambridge, published 1975 and first staged at the University of Ife in 1976.',
      url: 'https://www.encyclopedia.com/arts/culture-magazines/soyinka-wole-13-july-1934',
    },
    {
      label:
        "Churchill College, Cambridge, fellow's page for Soyinka: a second source for describing him as the first African to be awarded the Nobel Prize in Literature, in 1986.",
      url: 'https://www.chu.cam.ac.uk/fellows/professor-wole-soyinka/',
    },
    {
      label:
        "Wikipedia, Death and the King's Horseman: written in Cambridge at Churchill College during political exile, five scenes performed without interruption, the University of Ife premiere (dated 1975 there, 1976 elsewhere), the April 2009 National Theatre production directed by Rufus Norris, and the 2022 film.",
      url: 'https://en.wikipedia.org/wiki/Death_and_the_King%27s_Horseman',
    },
    {
      label:
        'WJEC Eduqas A level Drama and Theatre resource on the play: published 1975, staged 1976 at Ife, five scenes in chronological order alternating between Yoruba and British contexts.',
      url: 'https://resource.download.wjec.co.uk/vtc/2024-25/edu/edu24-25_8a-10/pdf/death-and-the-kings-horseman.pdf',
    },
    {
      label:
        'London Theatre review of the 2009 National Theatre production in the Olivier, directed by Rufus Norris: a second source for that production.',
      url: 'https://www.londontheatre.co.uk/reviews/death-and-the-kings-horseman',
    },
    {
      label:
        "Brittle Paper, on Elesin Oba, The King's Horseman, the Yoruba-language film directed by Biyi Bandele, premiered at the Toronto International Film Festival in 2022: a second source for the film.",
      url: 'https://brittlepaper.com/2022/10/wole-soyinkas-film-adaptation-elesin-oba-the-kings-horseman-premiered-at-tiff-2022/',
    },
    {
      label:
        'Open Library edition records: first editions by Eyre Methuen, London, and Norton, New York, both 1975; later Methuen Drama editions (1993, 1998) and the Hill and Wang edition (1987).',
      url: 'https://openlibrary.org/works/OL15125398W',
    },
    {
      label:
        'Wikipedia, Aso oke fabric: alaari as a prized cloth usually deep red or purple. Sources differ on what it is made of (this article says woven cotton with shining threads; the teaching copy of the play glosses it as imported red silk), so the guide does not say.',
      url: 'https://en.wikipedia.org/wiki/Aso_oke_fabric',
    },
    {
      label: 'Wikipedia, Alaafin of Oyo: the title of the ruler of Oyo.',
      url: 'https://en.wikipedia.org/wiki/Alaafin_of_Oyo',
    },
    {
      label:
        'Wikipedia, Egungun: masked, costumed figures that are a visible manifestation of the spirits of departed ancestors revisiting the community.',
      url: 'https://en.wikipedia.org/wiki/Egungun',
    },
    {
      label:
        'Wikipedia, Masque: a courtly entertainment that flourished in the sixteenth and early seventeenth centuries, in England at the courts of James I and Charles I.',
      url: 'https://en.wikipedia.org/wiki/Masque',
    },
    {
      label: 'Wikipedia, Independence Day (Nigeria): independence on 1 October 1960.',
      url: 'https://en.wikipedia.org/wiki/Independence_Day_(Nigeria)',
    },
  ],
}
