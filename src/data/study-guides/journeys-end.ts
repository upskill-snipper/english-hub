import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Journey's End, R C Sherriff (first performed 9 December 1928; published by
 * Victor Gollancz in January 1929). A complete guide: the text had no guide
 * anywhere on the site, so every section is written here.
 *
 * HOW THE QUOTATIONS WERE CHECKED. The play is in UK copyright (Sherriff died
 * in 1975), so no edition is held in src/data/full-texts. Instead the whole
 * play was read in the Gollancz first edition of 1929, whose OCR text the
 * Internet Archive makes public, and every quotation, annotated phrase and
 * quoted phrase in this file was matched letter for letter against four
 * separate 1929 scans (two Gollancz copies, Brentano's and Coward-McCann). Each
 * was then searched in the Penguin text through Google Books: the Penguin Modern
 * Classics edition of 2000, the edition most students hold, and the Penguin
 * edition of 1983. Every line used here is in the Penguin text; where the 2000
 * preview returned nothing, the line was confirmed in the 1983 edition.
 *
 * WHAT THE CHECK FOUND, so the next editor does not undo it:
 * - The 1929 printings spell "whiskey"; Penguin spells "whisky". The quotations
 *   follow Penguin.
 * - The two American printings of 1929 differ from the British text in places:
 *   they read "Better die of pain" where Gollancz and Penguin read "Better die
 *   of the pain", and "calsularia" for "calceolaria". The British wording is used.
 * - Trotter's flower list: 1929 reads "geraniums, lobelia, and calceolaria –
 *   you know, red, white, and blue". The writer reported that Penguin 2000
 *   prints the three names in another order. The fact-check could not open the
 *   2000 text to confirm that, so the page no longer tells students editions
 *   differ; it quotes only "you know, red, white, and blue", which is safe
 *   either way.
 * - Pearson's question papers for 2022 to 2025 print six passages as stimulus
 *   quotations, and all six match the British text. Pearson cites Penguin
 *   Classics 2000 as its edition, and its June 2022 mark scheme quotes "a
 *   bottle of whisky", which supports the Penguin spelling used here.
 *
 * FACT-CHECK, SEPTEMBER 2026. Every quotation was re-read in its scene in the
 * 1929 OCR. Corrections made then: Hibbert strikes AT Stanhope with his stick,
 * who catches it, so the page no longer says the blow lands; Stanhope has his
 * revolver out before Hibbert returns with his pack; Trotter calls an earlier
 * raid "murder", not this one; AQA's mark scheme says Sherriff took the title
 * "from a novel", not "at the end of a chapter"; the Pearson mark-scheme point
 * about public school is attributed to Stanhope and Raleigh by name; and
 * "taken by surprise" for 21 March 1918 is replaced, because the play itself
 * shows the British expecting the attack that day.
 *
 * Speakers and acts were checked by reading each line in its scene, not from
 * the search results. Three lines that are easily half-remembered failed the
 * check and are not used: "He looked as if I'd hit him" (the text has "looked
 * at me as if"), "a sort of freak show exhibit" (the text has "a kind of"), and
 * "We're all going west" (Stanhope says "Then we all go west").
 *
 * NO PAGE NUMBERS. Pearson's 1ET0 papers are closed book, and the specification
 * says there are therefore no prescribed editions; AQA's Paper 2A is open book
 * with any clean copy. So passages are located by act, scene and moment.
 *
 * SONG LYRICS. Hardy half-sings a popular song in Act One and Trotter sings
 * another in Act Three, Scene 3. Neither is quoted, by the site's rule.
 */
export const guide: StudyGuide = {
  slug: 'journeys-end',
  title: 'Journey’s End',
  author: 'R C Sherriff',
  form: 'play',
  scope:
    'The whole play, in three acts (first performed in 1928, published in 1929). For Pearson Edexcel GCSE English Literature (1ET0) it is one of the post-1914 British plays and novels in Paper 1, Section B: you answer one essay question from a choice of two, each of which opens with a short quotation from the play, and you must write about the context of the play. The paper is closed book, so there is no prescribed edition and every quotation you use has to be learned; your spelling, punctuation, vocabulary and sentence structures are also assessed on this question. For AQA A-level English Literature A (7712) it is one of the six core set texts for Paper 2A, Texts in shared contexts: WW1 and its aftermath. You may write about it on its own in Section A, or use it as one of the two texts you compare in Section B, but not in both. That paper is open book: you may take in a clean copy with no notes in it. This guide refers to acts, scenes and moments rather than page numbers, so it works with any edition.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© R C Sherriff 1929. First published by Victor Gollancz, London, in January 1929. Quotations follow the Penguin Modern Classics edition (Penguin Books, 2000) and were checked against the 1929 first edition. Quoted for criticism and review.',
  },
  workLength: {
    words: 28000,
    basis:
      'Counted by machine, not estimated: the play text from the opening stage direction of Act One to the final stage direction, in OCR scans of four 1929 printings on the Internet Archive (two Gollancz copies, Brentano’s and Coward-McCann), comes to between 27,600 and 28,300 words with page numbers removed. Rounded to 28,000. Any length over 3,000 words sets the same 400-word page total, so the rounding cannot loosen the limit.',
  },

  overview: {
    summary: [
      'Journey’s End takes place in one room: the officers’ dugout of a British infantry company in the trenches before St Quentin in northern France. It runs from the evening of Monday 18 March 1918 to the dawn of Thursday 21 March, the morning on which the German army launched its great spring offensive. Everyone in the play knows the attack is coming, and so did its first audiences in 1928. The play is about how men behave while they wait for it.',
      'A new officer, Second Lieutenant Raleigh, arrives straight from school. He is about eighteen, and he has asked his uncle, a general who posts officers at the base, to get him into the battalion of Captain Dennis Stanhope, who was his hero at school and who is close to Raleigh’s sister, Madge. Stanhope is now about twenty-one and has been at the front for nearly three years. He is an excellent commander and he drinks heavily to keep going. He is horrified that Raleigh has come, because he is sure Raleigh will write home and tell Madge what he has become.',
      'Around them are Osborne, a middle-aged schoolmaster and Stanhope’s second-in-command, whom everyone calls Uncle; Trotter, a cheerful, stout officer who once served in the ranks; Hibbert, who claims to have neuralgia and is trying to be sent home; and Mason, the cook. On Tuesday the Colonel orders a daylight raid to capture a German prisoner, and chooses Osborne and Raleigh to lead it. On Wednesday afternoon the raid brings back one frightened German boy, at the cost of Osborne and six men. That night Stanhope drinks champagne and quarrels bitterly with Raleigh, who cannot understand how he can eat and joke with Osborne dead.',
      'At dawn on Thursday the bombardment begins. Raleigh is hit in the back by a shell fragment, which the Sergeant-Major fears has broken his spine, and Stanhope has him carried down into the dugout. The two are reconciled, and Raleigh dies on Osborne’s bed. Stanhope goes up the steps into the attack, a shell hits the dugout, and the play ends in darkness with the sound of machine-guns. Almost all of the fighting happens off stage. What Sherriff puts in front of us is waiting, fear, food, jokes and friendship, and the play’s argument about courage is made through them.',
    ],
  },

  context: [
    {
      heading: 'Sherriff’s own war',
      body: 'Robert Cedric Sherriff was born in Hampton Wick on 6 June 1896, went to Kingston Grammar School and worked as a clerk for an insurance company. He enlisted in November 1915, and from 1 October 1916 he served as an officer with the 9th Battalion of the East Surrey Regiment in France. He was wounded on 2 August 1917 during the Battle of Passchendaele (the Third Battle of Ypres) and sent back to England. The Surrey History Centre, which holds his papers, records two details that matter for the play: his letters home mention bouts of neuralgia, the complaint Hibbert gives as his reason to leave, and a letter he wrote in 1929 to his former commanding officer says the raid in the play was based on a battalion raid at Hulluch in January 1917. Journey’s End is not autobiography, but its routines, meals, rats and conversations come from someone who had lived them.',
    },
    {
      heading: 'March 1918: what the audience knew',
      body: 'In Act Two, Scene 1, Stanhope reports that a German prisoner has given the day of attack as the 21st, which is Thursday. On 21 March 1918 the German army did launch its spring offensive, Operation Michael, in the St Quentin sector, and the British Third and Fifth Armies were overwhelmed and driven back. Sherriff sets his dugout in exactly that place and on exactly those days. His audience in 1928 knew what that Thursday morning brought, so the whole play works through dramatic irony: when Trotter draws circles to count the hours, or the Colonel says the raid may win the war, the audience already knows how little time is left.',
    },
    {
      heading: 'A play nobody wanted, then everybody did',
      body: 'War plays by other writers had not yet proved popular with audiences, and theatre managers turned Journey’s End down as too risky or too harsh. It was first staged by the Incorporated Stage Society for two performances at the Apollo Theatre in London on 9 and 10 December 1928, with the young Laurence Olivier as Stanhope and James Whale as director. Maurice Browne then presented it at the Savoy Theatre from 21 January 1929, it became a critical and commercial success in Britain and abroad, and it was filmed in 1930. It arrived ten years after the Armistice, when many in the audience had served or lost someone. One reading of its success is that it let veterans see their experience treated honestly without being told what to think about it.',
    },
    {
      heading: 'Officers, public schools and class',
      body: 'The officers are divided by class, and Sherriff marks it through speech. Stanhope and Raleigh went to the same public school, Barford, where Stanhope was captain of rugby; Osborne is a schoolmaster who once played rugby for England; Trotter says he served in the ranks before he was made an officer, and he drops his aitches. Mason, the cook, is a private soldier who can be sent back to his platoon. Pearson’s mark scheme presents Stanhope and Raleigh as educated middle-class young men whose public schooling qualified them for officer rank. The school code of games, team spirit and not letting the side down shapes how these men talk about the war: Osborne measures No Man’s Land as “the breadth of a Rugger field”.',
    },
    {
      heading: 'Nerves, desertion and the firing squad',
      body: 'Breakdown under strain could get a man sent away from the front: Stanhope sneers that Hibbert wants to spend the war in “comfortable nerve hospitals”. But leaving the line without being passed as ill could be treated as desertion. British soldiers could be court-martialled and shot for offences including desertion, cowardice and striking a superior officer; in 2006 Parliament pardoned all who had been executed for such offences committed between 1914 and 1918 (Armed Forces Act 2006, section 359). Both the threat Stanhope makes to Hibbert in Act Two, Scene 2 and the blow Hibbert aims at him with his stick touch those offences. Sherriff’s treatment of Hibbert is best read against that background: he shows a frightened man, not a villain.',
    },
    {
      heading: 'Letters and censorship',
      body: 'Letters from the front were censored. Stanhope tells Raleigh he has to censor all letters, and tells Osborne that officially he is supposed to read his officers’ letters too. The Surrey History Centre notes that censorship, and a wish not to worry his parents, kept Sherriff himself from telling the whole truth in his letters. That makes Raleigh’s letter in Act Two, Scene 1 more than a plot device. Stanhope fears it will tell Madge the truth; in fact it praises him and says nothing of the drinking Raleigh has seen. One reading is that the play shows how letters, whether from innocence or kindness, kept the worst of the front line from the people at home.',
    },
    {
      heading: 'The title',
      body: 'AQA’s own mark scheme notes that Sherriff tried other titles in draft, including Suspense and Waiting, and that he claimed to have taken the title from a novel. The critic Paul Fussell heard an echo of Othello, who says “Here is my journey’s end” near the close of the tragedy, as he faces his own death. You do not need to settle where it came from. What matters is what it means by the end: the end of the four days, the end of Raleigh’s journey from school to the front, and the end of the rift between Raleigh and Stanhope, reached only as Raleigh dies.',
    },
  ],

  themes: [
    {
      title: 'Fear and courage',
      body: 'Everyone in the dugout is afraid, and the play’s question is what courage means once that has been admitted. Stanhope confesses that without whisky he would “go mad with fright”; Hibbert pleads neuralgia; before the raid Osborne and Raleigh both admit to “a sort of empty feeling inside”; even Trotter, whom Stanhope thinks untouched by anything, answers “Little you know”. Sherriff separates courage from fearlessness. In Act Two, Scene 2 Stanhope defines it for Hibbert as going on because it is “the only thing a decent man can do”. One reading sees this as the officer’s code at its most admirable: courage as endurance for other people’s sake. A harder reading notices what the code costs. Stanhope survives by drink, Hibbert is kept in the line at gunpoint, and the bravery we are shown is never rewarded. Both readings are in the text, and the second explains why the courage feels tragic rather than glorious.',
    },
    {
      title: 'Ways of coping',
      body: 'Each character has a way of not looking at what waits at the top of the steps. Stanhope drinks. Trotter eats, talks about his garden and draws a hundred and forty-four circles to black out the hours. Osborne reads Alice’s Adventures in Wonderland and tells Raleigh to think of it all as romantic because “It helps”. Mason’s cooking disasters and Hardy’s earwig races turn the war into a domestic comedy, and Hibbert’s neuralgia is his way of escape. Sherriff treats almost all of these with sympathy, and much of the play’s humour comes from them. Look at what happens when coping fails. At the champagne dinner in Act Three, Scene 2 every device is running at once, and Raleigh’s refusal to join in breaks it open: Stanhope’s answer, “To forget, you little fool – to forget!”, is the play’s clearest statement that the jokes and the drink are a defence, not a lack of feeling.',
    },
    {
      title: 'Hero-worship and friendship',
      body: 'Raleigh arrives as a hero-worshipper, and Stanhope knows it: “Yes, I’m his hero”, he tells Osborne, and when Osborne says such worship often goes on, Stanhope finishes the sentence for him: “as long as the hero’s a hero”. Stanhope’s fear is that the hero has gone and Raleigh will see it. Osborne argues the opposite, that there is something “very deep, and rather fine” about hero-worship, and the play proves him right in an unexpected way: Raleigh’s letter, read aloud in Act Two, Scene 1, is still full of admiration after he has seen Stanhope drunk. The friendships between men are the warmest thing in the play. Osborne tucks Stanhope into bed, Stanhope remembers the dead Osborne as “the one man I could trust”, and in the final scene Stanhope calls Raleigh Jimmy for the first time. One reading is that hero-worship has to die for friendship to begin, and that this happens only at Raleigh’s death.',
    },
    {
      title: 'Duty, leadership and class',
      body: 'Stanhope is a demanding and effective leader: he wires the flanks, refuses to let any man go sick before the attack so that all take “an equal chance”, and tells the Sergeant-Major that orders to hold mean no plans to retreat. His authority is personal and exhausting. Above him the chain of command becomes more distant with every step. The Colonel sympathises but cannot disobey orders; headquarters wants his report by seven for a conference, and Stanhope’s bitter guess is that it cannot be later “because of dinner”. Class runs through all of it. The officers eat chicken and drink champagne, and when Raleigh shares tea and bread and cheese with the men, Stanhope tells him that his officers are there to be respected, not laughed at. Sherriff admires the officers he served with, but the play lets us see a system in which the men at the top of the chain, the brigadier and the general, are never seen at all.',
    },
    {
      title: 'Waiting and time',
      body: 'Sherriff once thought of calling the play Waiting, and waiting is its real action. In Act One Raleigh says it feels as if they are “all just waiting for something”, and Osborne replies that when anything happens it happens quickly, and then they just start waiting again. Time is counted on stage: Trotter’s circles, one for each hour of six days; Stanhope’s forty-five circles to the dawn of the 21st; the Colonel and Stanhope comparing watches before the raid; Osborne leaving his watch on the table. Each counting device tightens the dramatic irony, because the audience knows the date the men are counting towards. The waiting is shown as worse than the fighting. Osborne says he is glad the attack is coming at last because he is sick of waiting, and Trotter would rather have a bang or two than the quiet. The structure of the play is itself a countdown.',
    },
    {
      title: 'The waste of war',
      body: 'The raid in Act Three, Scene 1 is the play’s case against waste. Stanhope, Trotter and even the Colonel think it a bad idea, and the Germans are known to be waiting for it; it goes ahead because the brigadier says the arrangements must stand. It costs Osborne and six men and brings back one sobbing boy, and the Colonel’s first response is that the brigadier will be pleased. Earlier, Osborne tells the story of a German officer who let British soldiers carry a wounded man back, and Raleigh’s response, that it all seems “rather – silly”, is the play’s quietest verdict on the war. Is Journey’s End an anti-war play? It never questions why the war is being fought, and it honours the men who endure it. A convincing reading is that its anger falls on the waste of lives and on distant command rather than on the war’s cause: it is an elegy with a bitter edge rather than a protest.',
    },
  ],

  characters: [
    {
      name: 'Stanhope',
      role: 'Captain, commanding C Company; about twenty-one',
      body: 'Stanhope came to France straight from school at eighteen, has been out nearly three years and has commanded the company for a year without a rest. Osborne calls him the best company commander they have; Hardy calls him a hard drinker. Both are right. The stage direction at his first entrance insists he is “no more than a boy”, with dark shadows under his eyes. His drinking, his temper and his cruelty to Raleigh and Hibbert all come from the same place: he is terrified, and he believes that showing it would break him and the company. The play gives him moments of great tenderness, putting his arm round Hibbert, sitting with the dying Raleigh, and moments of ugliness, as when he threatens to shoot Hibbert. Whether he is a hero or a casualty is the central question an examiner will ask you to argue. The strongest answers say he is both, and that Sherriff’s point is that the two cannot be separated.',
    },
    {
      name: 'Osborne',
      role: 'Second-in-command; a schoolmaster of about forty-five, called Uncle',
      body: 'Osborne is the play’s calm centre. He is gentle with Raleigh, loyal to Stanhope and honest with both, and he quietly tells Raleigh to expect Stanhope to have changed. He has a wife and two young sons, gardens, reads Alice’s Adventures in Wonderland, and once played rugby for England, which he refuses to boast about. His loyalty is complete: he says he would “go to hell with” Stanhope. Before the raid he leaves his watch, a letter and his ring with Stanhope, to be sent to his wife if he is killed, then talks to Raleigh about the New Forest and a Roman road to keep his mind off it. He is killed by a hand grenade while waiting for Raleigh, and his death, reported in a few words, removes the one person who could hold Stanhope together.',
    },
    {
      name: 'Raleigh',
      role: 'Second lieutenant, about eighteen, just out of school',
      body: 'Raleigh arrives eager, polite and full of school slang: things are “topping” and “frightfully” exciting. He worships Stanhope and is bewildered by the man he finds. He grows fast. He is humiliated over the letter, sent on the raid because his nerves are sound, and returns from it silent and dazed, with bleeding hands, while Osborne lies dead out where he fell. By Act Three, Scene 2 he can stand up to Stanhope: he refuses to eat while Osborne is lying out there, and accuses Stanhope of drinking champagne and smoking cigars. He is the audience’s way in: we learn the dugout as he does. His death on the first morning of the attack, in Osborne’s bed, in the dark, is the play’s final statement about the cost of the war to the young.',
    },
    {
      name: 'Trotter',
      role: 'Second lieutenant, middle-aged, formerly in the ranks',
      body: 'Trotter is the play’s main source of comedy: stout, hungry, obsessed with pepper and bacon, proud of his hollyhocks. He speaks with dropped aitches, and he tells Osborne that he was once in the ranks, so he is an officer without the public-school background of the others. Stanhope envies him because he thinks Trotter has no imagination and nothing upsets him. Sherriff hints that this is wrong: Trotter says quietly “Little you know”, is disturbed by the silence before the attack and agrees not to tell Raleigh that the raid is likely to be murder. After Osborne dies Stanhope makes him second-in-command, and he answers that he will not let Stanhope down. He represents the ordinary man who copes by attending to ordinary things.',
    },
    {
      name: 'Hibbert',
      role: 'Officer in his early twenties, claiming neuralgia',
      body: 'Hibbert is small, pale and frightened, and he complains of a pain right inside his eye. Stanhope calls it “Pure bloody funk” and makes sure the doctor will send him back. In Act Two, Scene 2 Hibbert tries to leave, strikes at Stanhope with his stick, and is held by the threat of a revolver until he breaks down; Stanhope then admits he feels exactly the same, and Hibbert agrees to try. At the dinner he tells boastful stories about women and shows his postcards, which makes him harder to like, and at dawn on Thursday he delays going up for as long as he can. But he does go up the steps. Sherriff, who wrote home about his own neuralgia, refuses to make him a simple coward. One reading is that Hibbert is what Stanhope fears becoming, which helps to explain why Stanhope is so harsh with him.',
    },
    {
      name: 'Mason',
      role: 'The officers’ cook, a private soldier',
      body: 'Mason’s running jokes, the tin of pineapple chunks that turns out to be apricots, the forgotten pepper, the yellow soup and the tea that tastes of onions, give the play its domestic comedy. He is anxious, polite and deadpan, and he stands for the ordinary soldiers who serve the officers and are mostly unseen. His place is always in the tunnel to the kitchen, but at dawn on Thursday he puts on his equipment and follows Hibbert up into the line with his rifle. That moment matters: when the attack comes, the cook is a soldier like everyone else.',
    },
    {
      name: 'The Colonel',
      role: 'Commanding the battalion',
      body: 'The Colonel is not a villain. He argues with the brigade for a later raid, tells Stanhope he would give anything to cancel it and will not let Stanhope lead it himself. But he passes the order on, and he picks Raleigh because his nerves are sound. After the raid his first thought is the information and the brigadier’s pleasure; he has to be prompted to ask about the men. Sherriff uses him to show how a decent man can be made callous by the chain of command, and his cheerful talk of fresh fish for supper, just after ordering the raid, is one of the play’s sharpest pieces of bathos.',
    },
    {
      name: 'The Sergeant-Major',
      role: 'The company sergeant-major',
      body: 'A huge, practical man who takes notes with a stub of pencil. In Act Two, Scene 2 he asks Stanhope what happens if the Germans get round the back of them, and receives the ironic answer that they will then advance and win the war. His questions voice what an ordinary soldier would want to know. In Act Three he handles the German prisoner kindly and carries the wounded Raleigh down the steps like a child, then wipes the blood from his hands on his trousers. He is a figure of steady, unshowy care.',
    },
    {
      name: 'Hardy',
      role: 'Captain Hardy, an officer of another regiment, whose company is relieved',
      body: 'Hardy appears only at the start, drying his sock over a candle and handing over the trench. His chatter about earwig races and rats sets the tone of cheerful understatement, and his gossip introduces Stanhope before we meet him, as a hard drinker. Osborne’s defence of Stanhope against him is the first sign of the loyalty the play will test.',
    },
    {
      name: 'The German soldier',
      role: 'A young German soldier captured in the raid',
      body: 'Brought down the steps sobbing, he falls to his knees and begs for mercy in broken English, and he tries to keep a pocket-book that the Colonel finds contains letters. He is a boy, like Raleigh. His presence makes the enemy human at the exact moment the British have paid seven lives to capture him.',
    },
    {
      name: 'Madge',
      role: 'Raleigh’s sister, never seen',
      body: 'Madge never appears, but she shapes Stanhope’s behaviour. He keeps her photograph, has not gone home on leave in case she sees what he has become, and dreads Raleigh writing to her. Raleigh says the two are not officially engaged. She stands for home and for the person Stanhope was, and his fear of her judgement drives the letter scene.',
    },
  ],

  keyQuotes: [
    {
      text: 'Drinking like a fish, as usual?',
      where: 'Hardy, Act One (the handover, before Stanhope appears)',
      analysis:
        'Stanhope’s reputation reaches us before he does, and it arrives as gossip. Hardy’s tone is cheerful, as if heavy drinking were an entertaining trick, and the cliché “like a fish” makes it comic. Osborne’s reply, that Stanhope has stuck it until “his nerves have got battered to bits”, reframes the drinking as a symptom of strain rather than a vice. Sherriff builds the exposition so that the audience holds both images before Stanhope enters, and the rest of the play asks which one is true.',
    },
    {
      text: 'I love that fellow. I’d go to hell with him.',
      where: 'Osborne to Hardy, Act One',
      analysis:
        'Osborne speaks with a directness the other officers avoid, and the plain monosyllables make the declaration sound certain. The phrase “go to hell” is a common idiom, but in the trenches it is also close to literal, and by Act Three Osborne has gone up the steps for Stanhope and not come back. The line establishes loyalty between men as the play’s strongest bond, stronger than rank, and Hardy’s teasing reply shows how unusual it was to say so aloud.',
    },
    {
      text: 'Think of it all as – as romantic. It helps.',
      where: 'Osborne to Raleigh, Act One',
      analysis:
        'Osborne is gently teaching Raleigh a way to cope, not describing the war. The hesitation before “romantic” shows he is choosing the word with care, and the short final sentence admits it is a strategy: the romance is useful, not true. The line quietly exposes the idealised picture of war that sent young men like Raleigh to France, while showing sympathy for anyone who needs it. The rest of the play strips that picture away scene by scene.',
    },
    {
      text: 'Despite his stars of rank he is no more than a boy',
      where: 'Stage direction, Act One (Stanhope’s first entrance)',
      analysis:
        'Sherriff’s stage directions read like a novelist’s, and this one tells the reader what to feel. The contrast between the “stars of rank”, the badges of a captain, and “no more than a boy” sets out the tragedy of Stanhope in a single sentence: a young man carrying a load meant for someone older. The direction goes on to describe the pallor and dark shadows under his eyes, so that before he says a word we see the strain.',
    },
    {
      text: 'Damn the soup! Bring some whisky!',
      where: 'Stanhope, Act One (calling to Mason just after he comes down into the dugout)',
      analysis:
        'Two short exclamations, one dismissing food and one demanding drink, and the audience learns at once what Hardy’s gossip meant. The imperatives show a man used to command and running on nerves. Placed straight after the comic business about pineapple chunks and apricots, the line jolts the tone, and it also shows whisky as something Stanhope needs before he can face anything, including the boy standing in the corner whom he has not yet seen.',
    },
    {
      text: 'Another little worm trying to wriggle home.',
      where: 'Stanhope to Osborne, Act One (after Hibbert goes to bed)',
      analysis:
        'Stanhope reduces Hibbert to a worm, the lowest creature in the earth, and the verb “wriggle” suggests escape that is both cowardly and undignified. The contempt is so sharp that it invites suspicion, and a few minutes later Stanhope confesses his own terror, which suggests he despises in Hibbert the escape he refuses himself. Worms return in Act Two, when Stanhope wonders how a worm knows whether it is going up or down, an image of his own disorientation.',
    },
    {
      text: 'without being doped with whisky – I’d go mad with fright.',
      where: 'Stanhope to Osborne, Act One (after supper)',
      analysis:
        'This is the play’s central confession. The verb “doped” is medical: whisky is an anaesthetic, taken to survive, not for pleasure. The dash creates a pause before the admission, and “go mad with fright” is stark after so much understatement. Stanhope points up the steps into the line as he says it, tying the steps to fear for the rest of the play. The line explains his drinking, his fear of Raleigh’s letter and his harshness to Hibbert all at once.',
    },
    {
      text: 'you know, red, white, and blue.',
      where: 'Trotter to Osborne, Act Two, Scene 1 (breakfast)',
      analysis:
        'Trotter is describing the flower borders of his front garden, geraniums, lobelia and calceolaria, and this proud aside turns them into a patriotic flag. The list of flower names is lovingly exact, a suburban Englishman’s pleasure, and the colours tie that ordinary home to the nation. Sherriff lets the audience see what the war is being fought for, as Trotter would understand it: not an idea but a garden. The comedy is affectionate, and the image is quietly moving in the mouth of a man waiting for an attack. The casual “you know” also shows Trotter assuming Osborne shares his picture of home, a small sign of the bond between the officers.',
    },
    {
      text: 'And we shall be in the front row of the stalls.',
      where: 'Stanhope to Osborne, Act Two, Scene 1 (after learning the date of the attack)',
      analysis:
        'Stanhope turns the coming attack into a theatre show, and the joke is full of dread: the front row is where you see everything and cannot leave. The image also points at the real audience in the real stalls, who are watching these men and know what will happen on the 21st. It is typical of the play’s understatement, where the worst news is carried by a light phrase, and of its awareness of itself as theatre.',
    },
    {
      text: 'Don’t ‘Dennis’ me! Stanhope’s my name! You’re not at school!',
      where: 'Stanhope to Raleigh, Act Two, Scene 1 (the letter)',
      analysis:
        'Raleigh uses Stanhope’s first name, as he did at home, and Stanhope rejects it in three furious exclamations. Using his surname is a way of insisting on rank and distance, and “You’re not at school” tries to cut Raleigh off from the past they share. The irony is that Stanhope is the one clinging to the school image, the one Madge holds, and he is attacking Raleigh because of it. When he calls Raleigh Jimmy in the last scene, the naming reverses.',
    },
    {
      text: 'I’m awfully proud to think he’s my friend.',
      where: 'Raleigh’s letter, read aloud by Osborne, Act Two, Scene 1',
      analysis:
        'The letter Stanhope feared says the opposite of what he expected. Raleigh has seen him drunk and been snubbed, yet he writes that Stanhope is tired only because he works so hard, and ends on pride. The schoolboy adverb “awfully” shows how young he is. Dramatically, the moment is a reversal: Stanhope has snatched the letter to protect himself and is shamed by its kindness. It also shows how letters shielded home from the truth.',
    },
    {
      text: 'Better die of the pain than be shot for deserting.',
      where: 'Stanhope to Hibbert, Act Two, Scene 2',
      analysis:
        'Stanhope turns Hibbert’s excuse against him with a cold comparison between two deaths. The line makes plain the real stakes of going sick without cause: desertion could end in a firing squad. It leads to the most frightening moment in the play, when Stanhope, revolver in hand, gives Hibbert half a minute to decide. Sherriff lets the scene look like bullying before turning it, which makes the change that follows all the more striking.',
    },
    {
      text: 'Shall we see if we can stick it together?',
      where: 'Stanhope to Hibbert, Act Two, Scene 2',
      analysis:
        'After admitting he feels exactly as Hibbert does, Stanhope changes from threat to partnership. The question form invites instead of commanding, and the repeated “we” includes Stanhope in the weakness he has just confessed. “Stick it” is the soldiers’ word for endurance, and here courage means going on alongside someone else. Pearson used this line as a stimulus for a question on support for others, which shows how central the moment is to the play’s idea of comradeship.',
    },
    {
      text: 'Exactly. That’s just the point.',
      where:
        'Osborne to Trotter, Act Two, Scene 2 (after reading from Alice’s Adventures in Wonderland)',
      analysis:
        'Trotter says he sees no point in Lewis Carroll’s nonsense poem about the crocodile, and Osborne’s weary reply makes that pointlessness the attraction. Nonsense is an escape from the logic of the war, and it also mirrors it: Osborne reads the poem minutes after telling Trotter that he and Raleigh must lead a raid, and just after Trotter has described a similar raid, made when the Germans were ready for it, as murder. Osborne uses Carroll again in Act Three, quoting the Walrus to stop Raleigh talking about the raid.',
    },
    {
      text: 'How awfully nice – if the brigadier’s pleased.',
      where: 'Stanhope to the Colonel, Act Three, Scene 1 (after the raid)',
      analysis:
        'The Colonel has just called the capture “a feather in our cap” without asking about the men. Stanhope echoes the Colonel’s words back to him in what the stage direction calls a dead voice, and the polite adverb “awfully” becomes savage irony. The dash isolates the conditional, as if the brigadier’s pleasure were the only measure of success. This is the play’s sharpest criticism of command, and it lands because the Colonel has already been shown to be a decent man.',
    },
    {
      text: 'Must you sit on Osborne’s bed?',
      where: 'Stanhope to Raleigh, Act Three, Scene 1 (the end of the scene)',
      analysis:
        'Six words, spoken, the stage direction says, in a voice “still expressionless and dead”, and they carry all of Stanhope’s grief. He cannot speak of Osborne’s death, so he displaces it onto a piece of furniture. The bed has become a relic. It matters structurally too: in the final scene Stanhope himself has Raleigh laid on Osborne’s bed, where he dies, so the line prepares the reconciliation that closes the play.',
    },
    {
      text: 'To forget, you little fool – to forget!',
      where: 'Stanhope to Raleigh, Act Three, Scene 2',
      analysis:
        'Raleigh has accused Stanhope of not caring about Osborne, and Stanhope’s answer is the key to the whole play. The repetition of “to forget” shows he has been asked the one question he cannot bear, and the insult “little fool” is really despair. The champagne, cigars and jokes are shown to be a defence. He goes on to ask whether Raleigh thinks there is no limit to what a man can bear, which is the play’s most direct statement about strain.',
    },
    {
      text: 'You’ve got a Blighty one, Jimmy.',
      where: 'Stanhope to Raleigh, Act Three, Scene 3',
      analysis:
        'A “Blighty one” was a wound serious enough to send a man home, and soldiers hoped for one. Stanhope has just been told that Raleigh’s spine is probably broken, so the cheerful slang is a loving lie that lets Raleigh believe he is going home. The first name “Jimmy”, which Stanhope uses only in this final scene, reverses the scene with the letter and marks the end of the distance between them. The understatement is almost unbearable because the audience knows the truth.',
    },
    {
      text: 'the red dawn glows through the jagged holes of the broken doorway',
      where: 'Final stage direction, Act Three, Scene 3',
      analysis:
        'The play ends with no speech, only an image. Dawn usually promises a new day, but this dawn is red, the colour of blood and of the bombardment, and it can be seen only through “jagged holes” after a shell has collapsed the entrance. The dugout that has been the whole world of the play is broken open, and Raleigh’s body lies in the darkness inside. The final sound, the rattle of machine-guns, tells us that the attack the men waited for has arrived.',
    },
  ],

  extracts: [
    {
      title: 'Stanhope’s confession to Osborne',
      where: 'Act One, the second half',
      pointer:
        'From Stanhope’s remark after Hibbert goes to bed, “Another little worm trying to wriggle home.”, to the end of the act, when Osborne winds his watch and the distant guns are heard.',
      summary:
        'Alone with Osborne after supper, Stanhope sneers at Hibbert, then works out how many companies there are in France to show how unlucky it is that Raleigh came to his. He shows Osborne a photograph of Raleigh’s sister and admits that without whisky he could not face the front line. He explains that drink was his way of breaking the strain, dreads that Raleigh will write home about him and threatens to censor his letters. Drunk and exhausted, he lets Osborne put him to bed like a child.',
      annotations: [
        {
          phrase: 'There were only two ways of breaking the strain.',
          note: 'Stanhope presents his drinking as a reasoned choice between two evils: pretending to be ill and going home, or drink. The calm, logical sentence makes the choice sound almost honourable, and it sets up the contrast with Hibbert, who has chosen the other way. The audience is being asked to judge both men by the same standard.',
        },
        {
          phrase: 'Cheero, and long live the men who go home with neuralgia.',
          note: 'A toast turned inside out. The cheerful officers’ word “Cheero” is used with bitter sarcasm, and the mock salute to men who go home ill is aimed at Hibbert but also at Stanhope himself, who has refused that way out. The line shows how humour in the play often carries contempt and pain at once.',
        },
        {
          phrase: 'for ever – and ever – and ever',
          note: 'Stanhope imagines everyone killed in the attack and Madge thinking him a fine fellow for ever. The repetition, broken by dashes, has the rhythm of a prayer or a child’s story ending, and he murmurs it again as he pours another drink. It reveals that he half expects to die, and that his reputation at home matters more to him than survival.',
        },
        {
          phrase: 'Dear old Uncle. Tuck me up.',
          note: 'The company commander becomes a child being put to bed. Osborne’s nickname, Uncle, is suddenly literal, and the request to be tucked up shows how young Stanhope really is under the rank. Sherriff ends the act on tenderness rather than on the threat about the letters, which makes Stanhope sympathetic just when he has been at his worst.',
        },
      ],
      question:
        'How does Sherriff present Stanhope’s state of mind in this part of Act One, and how does it prepare the audience for the rest of the play?',
    },
    {
      title: 'Stanhope and Hibbert',
      where: 'Act Two, Scene 2, after the Colonel leaves',
      pointer:
        'From Hibbert coming quietly out of his dugout, just after the Colonel leaves, to his exit when he thanks Stanhope, who then pours himself a whisky.',
      summary:
        'Hibbert tells Stanhope his neuralgia is unbearable and that he is going to see the doctor. Stanhope says the doctor has promised to send him back. When Hibbert tries to leave with his pack, Stanhope, who has already taken out his revolver, blocks the steps; Hibbert strikes at him with his stick, and Stanhope catches it and breaks it. Holding the revolver, Stanhope gives him half a minute to choose between staying and being shot. Hibbert dares him to shoot. Stanhope puts the revolver away, praises him, admits that he feels the same fear, and persuades him to go on duty with him.',
      annotations: [
        {
          phrase: 'Better die of the pain than be shot for deserting.',
          note: 'The scene’s first turn. Stanhope’s cold comparison makes the stakes explicit: going sick without cause could be treated as desertion, and deserters could be shot. The line moves the conflict from an argument about illness to a question of life and death, and prepares the revolver that follows.',
        },
        {
          phrase: 'Striking a superior officer!',
          note: 'When Hibbert hits out with his stick, Stanhope names the offence as if reading from military law, which in a sense he is: it was one of the offences for which men were executed. He then says he will not have Hibbert shot for it. The moment shows Stanhope controlling the scene by knowing exactly how much power he holds.',
        },
        {
          phrase: 'Because I feel the same – exactly the same!',
          note: 'The emotional heart of the scene. After mocking Hibbert all through Act One, Stanhope admits the fear they share, and the repetition of “the same” insists on it. The confession changes the balance of power between them: Stanhope gives up his secret in order to keep Hibbert, and the company, together.',
        },
        {
          phrase: 'It can’t be very lonely there',
          note: 'Stanhope comforts Hibbert by imagining death as joining all the men who have already been killed, and adds that sometimes he thinks it is lonelier here. It is a gentle, almost religious thought, and it reveals how much he has lost: the dead are now better company than the living.',
        },
        {
          phrase: 'the only thing a decent man can do',
          note: 'Stanhope’s definition of courage: others feel as Hibbert does and go on anyway, because it is the only decent thing to do. The simple, moral vocabulary of decency belongs to the public-school code, and the argument works on Hibbert because it appeals to his self-respect rather than to fear.',
        },
      ],
      question:
        'Explore how Sherriff presents fear and courage in this scene, and how the scene changes the way the audience sees both Stanhope and Hibbert.',
    },
    {
      title: 'Raleigh’s death and the end of the play',
      where: 'Act Three, Scene 3, the last section',
      pointer:
        'From the Sergeant-Major’s return with the news that Raleigh has been hit, to the final stage direction.',
      summary:
        'Told that a shell fragment has hit Raleigh in the back and that he cannot move his legs, Stanhope orders him brought down and has him laid on Osborne’s bed. He bathes Raleigh’s face and calls him Jimmy. Raleigh thinks he has only been winded; Stanhope tells him he will be sent home. Raleigh asks for a light and says it is dark and cold, and when Stanhope returns with a candle and blanket he has died. Summoned by Trotter, Stanhope touches Raleigh’s hair and goes up the steps. A shell collapses the dugout.',
      annotations: [
        {
          phrase: 'you got one quickly.',
          note: 'Stanhope’s first words to the wounded Raleigh use the soldiers’ understatement, with “one” meaning a wound. The stage direction says he smiles. He is trying to make it sound ordinary, even lucky, and the audience, which heard the Sergeant-Major say he fears the spine is broken, sees the effort it costs him.',
        },
        {
          phrase: 'You’ve got a Blighty one, Jimmy.',
          note: 'The loving lie at the centre of the scene. By promising that the wound will take him home, Stanhope gives Raleigh the hope of the school holidays and the New Forest, and the first name marks full reconciliation. The gap between what he says and what he knows makes this one of the most painful lines in the play.',
        },
        {
          phrase: 'It’s – it’s so frightfully dark and cold.',
          note: 'Raleigh’s last request uses his schoolboy intensifier “frightfully” for the last time, and here it sounds close to its literal meaning. Darkness and cold are signs of dying that he does not recognise and the audience does. The broken rhythm, with its repeated “it’s”, shows his strength going.',
        },
        {
          phrase: 'lightly runs his fingers over Raleigh’s tousled hair',
          note: 'Stanhope’s farewell is a gesture, not words, written into the stage directions. The lightness and the boyish “tousled hair” make Raleigh a child again, and the moment is private, with no one to see it. Sherriff trusts the actor’s silence to say what Stanhope could never say aloud.',
        },
        {
          phrase: 'the red dawn glows through the jagged holes of the broken doorway',
          note: 'The dawn of 21 March, the attack the play has counted towards, arrives as a red glow through wreckage. The doorway caves in and seals the room with Raleigh’s body inside, so the place that sheltered the whole play becomes a tomb. There is no curtain speech; the play ends in darkness and the rattle of machine-guns.',
        },
      ],
      question:
        'How does Sherriff make the ending of Journey’s End powerful for an audience? Refer to the dialogue, the stage directions and the staging in your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Stage directions written like prose fiction',
      example:
        'The opening direction: “The earth walls deaden the sounds of war”; and Stanhope’s entrance: “no more than a boy”.',
      effect:
        'Sherriff’s directions describe mood and character as a novelist would, not just positions on stage. They tell a reader, and a director, how to see each man, and they set up the play’s central contrast between the muffled, domestic room and the war just above it. At GCSE and A-level alike you can quote the directions as Sherriff’s own voice: they are part of the text, and many of the play’s strongest effects are found in them rather than in dialogue.',
    },
    {
      technique: 'Understatement and euphemism',
      example:
        'Stanhope imagining that they will all “go west” in the attack; and to the dying Raleigh: “You’ve got a Blighty one, Jimmy.”',
      effect:
        'The officers speak of death in slang and understatement: to “go west” is to die, and a “Blighty one” is a wound that sends you home. The habit belongs to the stiff upper lip of their class and their time, and it lets them talk about what they cannot bear to name. For the audience the effect is double: the lightness makes the characters likeable and brave, and the gap between words and reality makes the tragedy sharper.',
    },
    {
      technique: 'Comic bathos',
      example:
        'Trotter: “war without pepper – it’s – it’s bloody awful!”; the Colonel, just after ordering the raid, telling Stanhope about fresh fish for supper: “Whiting, I think it is.”',
      effect:
        'Bathos is a sudden drop from the serious to the trivial. Trotter’s outrage about pepper is funny because war itself is too big to complain about, so the complaint lands on the soup. The Colonel’s fish is darker: a man who has just ordered two officers and ten men on a dangerous raid chats about his supper. Sherriff uses the same device for comfort and for criticism, and the humour keeps the audience close to the men while the danger grows.',
    },
    {
      technique: 'Broken syntax: dashes and unfinished sentences',
      example:
        'Raleigh: “when Osborne’s – lying – out there”; Stanhope: “without being doped with whisky – I’d go mad with fright.”',
      effect:
        'The dashes mark pauses, hesitations and words that cannot be said. Raleigh’s voice breaks on the fact of Osborne’s body, and Stanhope pauses before his confession. Sherriff writes natural speech, full of interruptions and trailing sentences, and uses the gaps to show emotion that the characters’ code will not let them express directly. When you quote, keep the dashes: they are part of the meaning.',
    },
    {
      technique: 'Repetition',
      example:
        'Stanhope: “for ever – and ever – and ever”; “To forget, you little fool – to forget!”',
      effect:
        'At moments of greatest strain Stanhope repeats himself, as if the words were a refrain he cannot stop. In Act One the repetition sounds like a prayer and reveals his fear of death and of Madge’s judgement; in Act Three it is an outburst that finally explains his behaviour. The device marks the points where his control slips, which makes it a good way into questions on his character.',
    },
    {
      technique: 'Recurring imagery: worms and the earth',
      example:
        'Stanhope on Hibbert: “Another little worm trying to wriggle home.”; and in Act Two, Stanhope wondering aloud how a worm can tell whether it is going up or down.',
      effect:
        'The men live underground, and Stanhope’s imagination keeps going into the earth: he says that Trotter, looking at the dugout wall, would see only a brown surface, not the worms wandering round the stones and roots beyond it, as Stanhope does. The worm starts as an insult and becomes an image of his own confusion, a creature that cannot tell which way it is going. The imagery suggests burial long before the dugout falls in, and it shows that the man who mocks Hibbert shares his condition.',
    },
    {
      technique: 'Dramatic irony',
      example:
        'The Colonel telling the raiders that a prisoner may mean “the winning of the whole war”; Raleigh on the raid: “I say – it’s most frightfully exciting!”',
      effect:
        'The audience knows more than the characters: that the German attack of 21 March 1918 overwhelmed the British in this sector and drove them back, and, on a second viewing, that the raid will kill Osborne. So every hopeful line becomes painful. Raleigh’s excitement at the end of Act Two, and the Colonel’s talk of winning the war, are heard by an audience that knows better. Dramatic irony is the play’s main way of using its historical context.',
    },
    {
      technique: 'Idiolect and class',
      example:
        'Raleigh finding it “topping” that Osborne played rugby for England; Trotter, whose grammar marks him out: “I don’t see no point”.',
      effect:
        'Each man’s way of speaking places him socially. Raleigh’s “topping”, “frightfully” and “Rugger” are public-school slang; Trotter’s dropped aitches and double negatives mark a man from a different class who has risen from the ranks; Mason’s constant deference is a servant’s. Sherriff uses speech to show class without commenting on it, and to show that class matters less as the danger grows.',
    },
    {
      technique: 'Sound and silence as dramatic language',
      example:
        'The raid heard, not seen: smoke bombs, machine-guns and shells through the dugout door; at dawn the call passed from man to man, “Stretcher bear-ers!”',
      effect:
        'The war is almost entirely off stage, reaching the dugout as sound. Sherriff makes the audience imagine the raid from noises and then from the few words that report its result, which makes it more frightening than showing it. Silences matter too: Sherriff repeatedly writes pauses into the directions, and the quiet before the attack is what unsettles Trotter and Raleigh most.',
    },
    {
      technique: 'Allusion',
      example:
        'Osborne reads aloud Lewis Carroll’s poem “How doth the little crocodile” in Act Two, Scene 2, and quotes the Walrus in Act Three, Scene 1.',
      effect:
        'Alice’s Adventures in Wonderland and Through the Looking-Glass are children’s books of nonsense, and Osborne, a schoolmaster, carries one to the front. The allusion suggests that the war is as absurd as Wonderland, and it links Osborne to the childhood that the young officers have only just left. Carroll’s smiling crocodile, welcoming little fishes into its jaws, is also an ominous image to read aloud just after learning that you must lead a raid.',
    },
  ],

  structureForm: [
    {
      heading: 'One room, four days',
      body: 'The whole play takes place in the dugout, from Monday evening to Thursday dawn. Sherriff keeps to one place and a short span of time, and the effect is claustrophobic: the audience is shut in with the men, sees what they see and hears the war as they hear it, as sound through the earth walls. Everything important that happens elsewhere, the raid, Osborne’s death, the start of the attack, reaches the dugout down the steps. The single set also makes small changes in it meaningful: the pale sunlight of Act Two, the festive candles of the dinner, Osborne’s empty bed.',
    },
    {
      heading: 'The steps',
      body: 'The narrow steps up to the trench are the most important part of the set. Every exit up them is towards danger, and characters are defined by how they climb them: Stanhope says he could not go up them without whisky; Hibbert swears he will never go up them again; Osborne and Raleigh go up together into the evening sun for the raid, and only Raleigh comes back. In the final scene Stanhope climbs them alone, black against the dawn sky, and the shell then blocks the doorway. The staging turns a flight of steps into a threshold between life and death.',
    },
    {
      heading: 'A countdown',
      body: 'The play is built as a countdown to a date the audience knows. Trotter draws a hundred and forty-four circles for the hours of six days; Stanhope counts forty-five of them to the dawn of the 21st and threatens to draw Trotter being blown up at the end; the Colonel and Stanhope compare watches before the raid; Osborne leaves his watch on the table when he goes. Each act moves closer to the attack, and the tension rises in steps: Act One exposition and the arrival of Raleigh, Act Two the letter, the order for the raid and Hibbert’s crisis, Act Three the raid, the dinner and the attack itself.',
    },
    {
      heading: 'Violence off stage',
      body: 'Sherriff never shows fighting. The raid, which the whole second half builds towards, happens while the stage is empty, and the audience hears it through the door. Osborne’s death is reported in half a line, “A hand grenade – while he was waiting for Raleigh.” This restraint is deliberate. It keeps attention on what war does to the men who wait and survive, and it makes the audience experience the raid as the people in the dugout do: as noise, fear and then a brief report. Ask yourself why the play’s greatest loss happens where we cannot see it.',
    },
    {
      heading: 'Meals as structure',
      body: 'The play is marked out by meals: supper on the first night, with the apricots and missing pepper; bacon for breakfast; tea tasting of onions; the special dinner of chicken and champagne after the raid; sandwiches at dawn. The meals give the play its naturalism and much of its comedy, and they show how routine holds the men together. They also change meaning. The celebration dinner, planned before the raid, becomes a grotesque wake after it, and Raleigh’s refusal to eat is the trigger for the play’s fiercest quarrel.',
    },
    {
      heading: 'Light and darkness',
      body: 'Sherriff’s directions track the light closely: candles that burn day and night in bottles, Very lights rising and falling over No Man’s Land, sunlight on the dugout floor on Tuesday morning, a room lit festively for the dinner, and at the end a single candle beside the dying Raleigh. Light is comfort and life; the candle Raleigh asks for arrives too late, and the shell that ends the play blows out the last flame. The final image is of darkness broken only by the red dawn through the wreckage.',
    },
    {
      heading: 'Naturalism and tragedy',
      body: 'Journey’s End is naturalistic: realistic dialogue, domestic detail, no soliloquies, a set that could be a real dugout. Yet its shape is tragic. Its hero is a great leader destroyed by strain; its catastrophe is foreseen by the audience; its ending brings death and a reconciliation. At A-level it is worth arguing about whether Stanhope is a tragic hero in the classical sense, whose downfall comes from within, or a man destroyed by circumstances outside his control. The play leaves his own fate unknown: he walks up the steps into the attack, and we do not see what happens to him.',
    },
  ],

  vocabulary: [
    {
      term: 'Dugout',
      definition:
        'An underground shelter dug into the side of a trench, roofed with timber and earth. In the play it is the company headquarters, where the officers eat, sleep and plan.',
    },
    {
      term: 'Front line and support line',
      definition:
        'The front line is the trench nearest the enemy. The dugout opens onto the support line; Osborne tells Raleigh the front line is about fifty yards farther on.',
    },
    {
      term: 'No Man’s Land',
      definition:
        'The ground between the British and German trenches. Here it is only sixty or seventy yards wide, so the enemy is very close.',
    },
    {
      term: 'Very lights',
      definition:
        'Flares fired into the air to light up No Man’s Land at night, so that each side could watch for raids and patrols. They rise and fall outside the dugout throughout the play.',
    },
    {
      term: 'Minnie (Minenwerfer)',
      definition:
        'A German trench mortar and its large shell, which could be seen coming high through the air. Trotter explains to Raleigh that you have to judge its fall and run.',
    },
    {
      term: 'Whizz-bang',
      definition:
        'Soldiers’ slang for a small, fast shell that arrived with a whizz just before the bang, too quickly to take cover.',
    },
    {
      term: 'Stand-to',
      definition:
        'The times, at dawn and dusk, when every man went on duty in the trench. Osborne explains it to Raleigh on his first night.',
    },
    {
      term: 'Sap',
      definition:
        'A short trench dug out from the front line towards the enemy. The raid in Act Three starts from the sap on the company’s left.',
    },
    {
      term: 'Relief',
      definition:
        'The changeover when one unit takes over a trench from another, as Stanhope’s company takes over from Hardy’s in Act One. To relieve someone is also to take over his turn on duty.',
    },
    {
      term: 'Company, battalion, brigade',
      definition:
        'Army units, each part of the next. Stanhope commands a company; the Colonel commands the battalion; the brigadier commands a brigade. Stanhope’s arithmetic in Act One gives three battalions to a brigade and four companies to a battalion.',
    },
    {
      term: 'Blighty',
      definition:
        'Soldiers’ slang for Britain and home. A Blighty one was a wound bad enough to get a man sent home, but not expected to kill him.',
    },
    {
      term: 'Go west',
      definition:
        'Slang for to die, used by Stanhope when he imagines everyone killed in the attack.',
    },
    {
      term: 'Funk; wind up',
      definition:
        'Slang for fear. Funk suggests cowardice, as when Stanhope says Hibbert’s neuralgia is pure funk; to have the wind up is simply to be nervous, as Osborne and Raleigh admit before the raid.',
    },
    {
      term: 'Neuralgia',
      definition:
        'Sharp nerve pain, usually in the face or head. Hibbert gives it as his reason for going sick; Stanhope does not believe him.',
    },
    {
      term: 'M.C. (Military Cross)',
      definition:
        'A medal for gallantry awarded to officers. Stanhope has one; the Colonel promises to recommend Osborne and Raleigh for it if the raid succeeds.',
    },
    {
      term: 'Boche; Jerry',
      definition:
        'British slang for the Germans. Toch-emmas, in Stanhope’s mouth, are the trench mortars, from the signallers’ way of saying the letters T M.',
    },
    {
      term: 'Censor',
      definition:
        'To read letters before they are sent and cut anything that might help the enemy. Stanhope uses his right to censor as an excuse to read Raleigh’s letter.',
    },
    {
      term: 'Prig',
      definition:
        'Someone who behaves as if he were morally better than others. Stanhope calls Raleigh a prig when he fears the boy will judge him.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Osborne: “I love that fellow. I’d go to hell with him.” How is loyalty presented in Journey’s End? You must refer to the context of the play in your answer.',
        skill:
          'Whole-play essay from a stimulus quotation, with context (Pearson Edexcel 1ET0 style, closed book)',
        guidance: [
          'Start from the stimulus but move on quickly: say in a sentence what Osborne’s line shows, loyalty that survives knowing the worst about Stanhope, then range across the play.',
          'Build three or four points in play order: Osborne defending Stanhope to Hardy in Act One; Raleigh’s letter in Act Two, Scene 1, still loyal after Stanhope has humiliated him; Stanhope keeping Hibbert in the line in Act Two, Scene 2, loyalty to the company over the individual; Stanhope staying with the dying Raleigh in Act Three, Scene 3.',
          'For each point name one method: a prop (the letter, Osborne’s watch and ring), a stage direction, a name (Uncle, Dennis, Jimmy), or dramatic irony.',
          'Bring context in where it explains the loyalty: the public-school code the officers share, Stanhope’s rule that no man of his goes sick before the attack, and the knowledge that the attack of 21 March 1918 was coming.',
          'Argue a line: in this play loyalty is to each other rather than to the war, which is why it survives the Colonel’s raid while trust in command does not.',
          'End on the last scene, where loyalty to one man and duty to all meet: Stanhope stays with Raleigh until he dies, then goes up the steps when Trotter sends for him. Leave time to check your spelling and punctuation, which are assessed on this question.',
        ],
      },
      {
        question:
          'Stanhope: “How awfully nice – if the brigadier’s pleased.” In what ways is the relationship between the men in the dugout and those who command them presented in the play? You must refer to the context of the play in your answer.',
        skill: 'Whole-play essay on a relationship, with context (Pearson Edexcel 1ET0 style)',
        guidance: [
          'Define the chain of command briefly: Stanhope commands the company, the Colonel the battalion, and above them the brigadier and the general, whom we never see.',
          'Show the Colonel as a decent man under pressure: he argues for a later raid and says he would give anything to cancel it, but he passes the order on and picks Raleigh.',
          'Analyse the bathos after the order, when the Colonel talks about fish for supper, and Stanhope’s bitter guess that headquarters cannot wait because of its dinner.',
          'Treat the aftermath closely: the Colonel’s delight at the information, his failure to ask about the men, Stanhope’s repeated “How awfully nice” and the question whether he expected them all back.',
          'Contrast this with command inside the dugout: Stanhope’s leadership is personal, demanding and shared, and he insists that his men take an equal chance.',
          'Use context to explain the distance: the report deadline and the lives it costs, and the audience’s knowledge of how the attack of March 1918 went, which makes the brigade’s priorities look worse.',
        ],
      },
      {
        question:
          'Trotter: “war without pepper – it’s – it’s bloody awful!” In what ways is Trotter significant in Journey’s End? You must refer to the context of the play in your answer.',
        skill: 'Character significance, with context (Pearson Edexcel 1ET0 style)',
        guidance: [
          'Open with his dramatic function: the main source of comedy, whose jokes about food relieve tension and show one way of coping.',
          'Show his background: he says he was once in the ranks, he drops his aitches, and he is older and stouter than Stanhope and Raleigh, so he widens the play’s picture of class.',
          'Use the garden and the red, white and blue flower borders in Act Two, Scene 1 to show what home and England mean to him.',
          'Complicate the comic surface: his dislike of the quiet, his agreement not to tell Raleigh that the raid is murder, his quiet “Little you know” when Stanhope envies him.',
          'Explain his promotion to second-in-command after Osborne’s death, and his promise not to let Stanhope down, as a sign of how the company holds together.',
          'Conclude on what he represents: the ordinary man who survives by attending to ordinary things, and whose steadiness Stanhope mistakes for lack of imagination.',
        ],
      },
      {
        question:
          '‘Stanhope, not Raleigh, is the real casualty of Journey’s End.’ Examine this view of the play.',
        skill:
          'Critical debate: weighing a view of the whole play (AQA A-level 7712 Paper 2A, Section A style, open book)',
        guidance: [
          'Decide what ‘casualty’ means before you argue: killed or wounded in body, or damaged in mind? The view depends on the second meaning.',
          'Make the case for the view: Stanhope’s three years at the front, his drinking, his breakdown at bridge that Hardy reports, his fear of going mad, his loss of Osborne, and the ending, where he walks up the steps into the attack alone.',
          'Make the case against: Raleigh is the one who dies, on the first morning of the attack, and his death is the play’s climax; Osborne and six men die in the raid; the play’s sympathy is spread across the whole company.',
          'Bring in interpretations: one reading sees the play as an elegy for a whole generation, in which singling out a real casualty misses the point; another sees Stanhope as a tragic hero whose strength is also his ruin.',
          'Use context of reception: an audience of 1928 containing many veterans who, like Stanhope, had survived, and for whom the damage to survivors was a live question.',
          'Reach a judgement and say why: for example, that the play makes Raleigh’s death the event and Stanhope’s endurance the tragedy.',
        ],
      },
      {
        question:
          'Compare the significance of waiting in two texts you have studied, one of which is Journey’s End.',
        skill: 'Comparative essay across texts (AQA A-level 7712 Paper 2A, Section B style)',
        guidance: [
          'Check the rubric on the day: Section B tells you which forms to use and which text must be written after 2000, and Journey’s End (1928) cannot be your post-2000 text. If you wrote on the play in Section A, you cannot use it here.',
          'Establish waiting in the play: the opening talk of waiting for something, Trotter’s circles, the count to the 21st, the working title Waiting, and the attack arriving only in the last scene.',
          'Find a real point of comparison in your other text, for example waiting in the trenches, waiting at home for news, or waiting for the end of the war, and compare methods as well as ideas.',
          'Compare how each writer shapes time: a play that keeps to one room and four days against a novel that can move between time periods, or a poem that can hold a single moment.',
          'Compare contexts: Sherriff wrote ten years after the war, for an audience that knew what the waiting led to; a post-2000 writer looks back across a century.',
          'Keep the comparison running through every paragraph rather than writing about one text and then the other.',
        ],
      },
    ],
    tips: [
      'Quote short. At Edexcel the paper is closed book, so learn phrases of three to eight words that you can analyse, such as “no more than a boy” or “stick it together”, rather than whole speeches.',
      'Write ‘Sherriff presents’ and treat the stage directions, sound effects and props as his choices. In this play much of the meaning is in the directions, and examiners reward answers that notice them.',
      'Use the date. The play ends on the dawn of 21 March 1918, and the audience knew what that morning brought. Dramatic irony is the most natural way to bring context into almost any answer.',
      'Do not call Hibbert a coward and stop there. The strongest answers point out that Stanhope says he feels exactly the same, and ask what separates them.',
      'Do not retell the raid. It happens off stage, so write about how Sherriff makes us hear it and about what the Colonel and Stanhope say afterwards.',
      'Make context explain, not decorate: tie each context point to a moment, such as censorship and the letter, the penalty for desertion and Hibbert, or class and Trotter.',
      'At A-level, weigh readings openly: is this an anti-war play or an elegy that honours endurance? Say which you find more convincing and why, and use your clean copy to check exact words.',
      'Spell the names correctly: Sherriff (two r’s, two f’s), Stanhope, Raleigh, Osborne, Hibbert.',
    ],
  },

  modelAnswer: {
    question:
      'Stanhope: “without being doped with whisky – I’d go mad with fright.” Explore the ways Sherriff presents fear in Journey’s End. You must refer to the context of the play in your answer.',
    paragraph:
      'Sherriff presents fear not as the opposite of courage but as the condition every officer shares and must hide, and Stanhope is his clearest case. In Act One Stanhope admits to Osborne that without being “doped with whisky” he would “go mad with fright”. The medical verb “doped” turns whisky into an anaesthetic, something taken to survive rather than to enjoy, and the confession comes only minutes after he has sneered at Hibbert as “another little worm trying to wriggle home”. Placing the two so close together suggests that Stanhope’s contempt is really fear of himself: he despises in Hibbert the escape he will not allow himself. Sherriff tests this in Act Two, Scene 2, when Stanhope tells Hibbert he feels “exactly the same”, and the scene turns from a threat into a partnership: “Shall we see if we can stick it together?” The repeated “we” and the soldiers’ idiom “stick it” redefine courage as endurance shared with others. The context sharpens this. A soldier who left the line without being passed as ill could be court-martialled for desertion and shot, as Stanhope reminds Hibbert, and Sherriff, who had written home from France about his own neuralgia, refuses to make Hibbert a simple coward. One reading is that the play excuses Stanhope’s drinking; a more convincing one is that it shows drink, illness and even jokes as the only defences these men have against a fear they are never allowed to admit.',
    commentary: [
      'It opens with an argument, not a summary: fear is shared and hidden, and courage is redefined. Every later sentence supports that claim.',
      'It analyses individual words (“doped”, “we”, “stick it”) and says what each does, rather than just quoting them.',
      'It uses structure as evidence: the juxtaposition of the sneer at Hibbert and the confession in Act One, and the turn of the scene in Act Two, Scene 2.',
      'Context is tied to a moment in the play (the penalty for desertion and Stanhope’s threat; Sherriff’s own neuralgia and Hibbert), so it explains the drama instead of decorating it.',
      'It ends by weighing two readings and choosing the more convincing one, with a reason, which is the kind of personal, critical judgement the top bands describe.',
      'All the quotations are short enough to learn for a closed-book paper, and they come from three different scenes, showing knowledge of the whole play.',
    ],
  },

  timeline: [
    {
      where: 'Act One, the handover',
      title: 'Hardy hands over the dugout',
      summary:
        'On Monday evening, 18 March 1918, Captain Hardy, whose company is leaving, dries his sock over a candle and hands the trench over to Osborne. He gossips about Stanhope’s drinking, and Osborne defends him as the best company commander they have and a man whose nerves have been worn down by strain.',
      setting: 'The officers’ dugout before St Quentin, by candlelight and moonlight',
      who: ['Hardy', 'Osborne'],
      quote: 'Drinking like a fish, as usual?',
      themes: ['Ways of coping', 'Hero-worship and friendship'],
      tension: 1,
      significance:
        'Stanhope’s reputation arrives before he does, and the audience holds two versions of him.',
    },
    {
      where: 'Act One, Raleigh arrives',
      title: 'The new officer',
      summary:
        'Raleigh, eighteen and just out of school, arrives and tells Osborne that he was at school with Stanhope, admires him, and that Stanhope is close to his sister. Osborne gently warns him that Stanhope may have changed, and explains the quiet, the Very lights and the waiting.',
      setting: 'The dugout, with the moonlit trench visible up the steps',
      who: ['Raleigh', 'Osborne', 'Mason'],
      quote: 'Think of it all as – as romantic. It helps.',
      themes: ['Hero-worship and friendship', 'Waiting and time'],
      tension: 2,
      significance:
        'Raleigh is the audience’s guide, seeing the dugout for the first time as we do.',
    },
    {
      where: 'Act One, supper',
      title: 'Stanhope’s entrance',
      summary:
        'Stanhope comes down the steps with Trotter, calls for whisky before soup and is stunned to see Raleigh. Over supper, with its missing pepper and disguised apricots, he barely speaks to the boy and sends him on duty with Trotter.',
      setting: 'The dugout at supper, crowded with officers and plates',
      who: ['Stanhope', 'Trotter', 'Osborne', 'Raleigh', 'Mason'],
      quote: 'Damn the soup! Bring some whisky!',
      themes: ['Ways of coping', 'Duty, leadership and class'],
      tension: 3,
      significance:
        'The comedy of the meal is undercut by Stanhope’s coldness and his need for drink.',
    },
    {
      where: 'Act One, after supper',
      title: 'Stanhope’s confession',
      summary:
        'After sneering at Hibbert’s neuralgia, Stanhope admits to Osborne that without whisky he could not face the front line, that he dreads Raleigh telling Madge, and that he will censor Raleigh’s letters. Drunk and exhausted, he lets Osborne put him to bed.',
      setting: 'The dugout later that evening, one candle blown out',
      who: ['Stanhope', 'Osborne', 'Hibbert'],
      quote: 'without being doped with whisky – I’d go mad with fright.',
      themes: ['Fear and courage', 'Ways of coping', 'Hero-worship and friendship'],
      tension: 4,
      significance:
        'The play’s central confession explains Stanhope’s drinking and his fear of Raleigh.',
    },
    {
      where: 'Act Two, Scene 1',
      title: 'Bacon, gardens and a date',
      summary:
        'On Tuesday morning Trotter talks about his garden and a may tree mistaken for gas, and Osborne reveals he once played rugby for England. Stanhope brings news that the attack is expected on Thursday, the 21st, and counts the hours on Trotter’s chart.',
      setting: 'The dugout at breakfast, sunlight on the floor',
      who: ['Trotter', 'Osborne', 'Raleigh', 'Stanhope', 'Mason'],
      quote: 'And we shall be in the front row of the stalls.',
      themes: ['Waiting and time', 'Ways of coping'],
      tension: 2,
      significance: 'Talk of home and sport is set against a countdown the audience knows is real.',
    },
    {
      where: 'Act Two, Scene 1',
      title: 'The letter',
      summary:
        'Stanhope orders Raleigh to leave his letter open, then tears it from him when he hesitates. Unable to read it himself, he has Osborne read it aloud, and finds that it praises him as the finest officer in the battalion.',
      setting: 'The dugout in morning sunlight',
      who: ['Stanhope', 'Raleigh', 'Osborne'],
      quote: 'Don’t ‘Dennis’ me! Stanhope’s my name! You’re not at school!',
      themes: ['Hero-worship and friendship', 'Fear and courage'],
      tension: 4,
      significance: 'Stanhope’s worst fear proves false, and he is shamed by the boy’s loyalty.',
    },
    {
      where: 'Act Two, Scene 2',
      title: 'The raid is ordered',
      summary:
        'Stanhope tells the Sergeant-Major that the company will hold its ground whatever happens. The Colonel arrives with orders for a daylight raid to capture a German, picks Osborne to direct it and Raleigh to lead the dash, and talks about fish for supper.',
      setting: 'The dugout on Tuesday afternoon',
      who: ['Stanhope', 'The Sergeant-Major', 'The Colonel'],
      quote: 'Whiting, I think it is.',
      themes: ['Duty, leadership and class', 'The waste of war'],
      tension: 3,
      significance:
        'The chain of command sets the tragedy in motion, and its distance is shown through bathos.',
    },
    {
      where: 'Act Two, Scene 2',
      title: 'Hibbert’s breakdown',
      summary:
        'Hibbert tries to go sick and strikes at Stanhope with his stick. Stanhope threatens to shoot him for desertion, then puts his revolver away, admits he feels the same fear, and persuades Hibbert to go on duty with him.',
      setting: 'The dugout, Stanhope blocking the steps',
      who: ['Stanhope', 'Hibbert'],
      quote: 'Better die of the pain than be shot for deserting.',
      themes: ['Fear and courage', 'Duty, leadership and class'],
      tension: 5,
      significance:
        'The play’s definition of courage, endurance shared with others, is spoken here.',
    },
    {
      where: 'Act Three, Scene 1',
      title: 'Before the raid',
      summary:
        'On Wednesday, near sunset, Osborne leaves his watch, a letter and his ring with Stanhope for his wife. Waiting with Raleigh, he talks about the New Forest and a Roman road to keep their minds off the raid, and they go up the steps together.',
      setting: 'The dugout at sunset, the earth wall outside glowing',
      who: ['Osborne', 'Raleigh', 'Stanhope', 'The Colonel', 'Mason'],
      themes: ['Hero-worship and friendship', 'Ways of coping', 'Waiting and time'],
      tension: 4,
      significance: 'The gentlest scene in the play, placed just before its greatest loss.',
    },
    {
      where: 'Act Three, Scene 1',
      title: 'The raid and its cost',
      summary:
        'The raid is heard through the doorway. A sobbing German boy is brought down and questioned, and the Colonel is delighted with the information. Stanhope tells him Osborne and six men were killed, and Raleigh comes down in a daze.',
      setting: 'The empty dugout, then crowded with soldiers and a prisoner',
      who: ['Stanhope', 'The Colonel', 'The Sergeant-Major', 'The German soldier', 'Raleigh'],
      quote: 'How awfully nice – if the brigadier’s pleased.',
      themes: ['The waste of war', 'Duty, leadership and class'],
      tension: 5,
      significance: 'Seven lives for one frightened boy: the play’s clearest case against waste.',
    },
    {
      where: 'Act Three, Scene 2',
      title: 'The dinner and the quarrel',
      summary:
        'That night Stanhope, Trotter and Hibbert eat the special dinner and drink champagne. Stanhope turns on Hibbert and sends him to bed, makes Trotter his second-in-command, and then rages at Raleigh for eating with the men, until Raleigh says Osborne is lying dead out there.',
      setting: 'The dugout lit by many candles, champagne bottles on the table',
      who: ['Stanhope', 'Trotter', 'Hibbert', 'Raleigh', 'Mason'],
      quote: 'To forget, you little fool – to forget!',
      themes: ['Ways of coping', 'Fear and courage', 'Hero-worship and friendship'],
      tension: 5,
      significance: 'The defences of drink and jokes break, and Stanhope finally explains himself.',
    },
    {
      where: 'Act Three, Scene 3',
      title: 'Raleigh’s death',
      summary:
        'Towards dawn on Thursday the bombardment begins and the officers go up to their platoons. Raleigh is hit in the back, carried down by the Sergeant-Major and laid on Osborne’s bed. Stanhope calls him Jimmy and stays with him until he dies.',
      setting: 'The dark dugout at dawn, one candle, shells falling',
      who: ['Stanhope', 'Raleigh', 'The Sergeant-Major', 'Hibbert', 'Trotter', 'Mason'],
      quote: 'You’ve got a Blighty one, Jimmy.',
      themes: ['Hero-worship and friendship', 'The waste of war'],
      tension: 5,
      significance: 'Hero-worship ends in friendship, and the rift is healed only as Raleigh dies.',
    },
    {
      where: 'Act Three, Scene 3',
      title: 'The dugout falls',
      summary:
        'Called by Trotter, Stanhope touches Raleigh’s hair and goes up the steps into the attack. A shell bursts on the dugout, the candle goes out and the doorway collapses, leaving darkness, the red dawn and machine-gun fire.',
      setting: 'The collapsing dugout, red dawn through the broken doorway',
      who: ['Stanhope', 'Raleigh'],
      quote: 'the red dawn glows through the jagged holes of the broken doorway',
      themes: ['The waste of war', 'Waiting and time'],
      tension: 5,
      significance:
        'The long wait ends in the attack itself, and the play’s one room becomes a grave.',
    },
  ],

  relationships: [
    {
      from: 'Stanhope',
      to: 'Raleigh',
      kind: 'hero and hero-worshipper; school friends',
      note: 'Raleigh worships the Stanhope he knew at school; Stanhope dreads being seen as he is now. Their conflict runs from his cold greeting through the letter and the quarrel over dinner to reconciliation as Raleigh dies, when Stanhope calls him Jimmy.',
    },
    {
      from: 'Stanhope',
      to: 'Osborne',
      kind: 'commander and trusted second-in-command',
      note: 'Osborne is the one man Stanhope can talk to, calls Uncle and lets put him to bed. Osborne’s death after the raid leaves Stanhope without the support that held him together.',
    },
    {
      from: 'Osborne',
      to: 'Raleigh',
      kind: 'mentor and new officer',
      note: 'Osborne welcomes Raleigh, warns him that Stanhope has changed, and keeps him calm before the raid with talk of the New Forest. He is killed by a hand grenade while waiting for Raleigh during the raid.',
    },
    {
      from: 'Stanhope',
      to: 'Hibbert',
      kind: 'commander and frightened officer',
      note: 'Stanhope despises Hibbert’s neuralgia as funk, threatens to shoot him when he tries to leave, then admits he feels the same fear. The relationship slips back into contempt at the dinner.',
    },
    {
      from: 'Stanhope',
      to: 'Trotter',
      kind: 'commander and steady officer',
      note: 'Stanhope envies Trotter for seeming untouched by imagination, and makes him second-in-command after Osborne dies. Trotter promises not to let him down.',
    },
    {
      from: 'The Colonel',
      to: 'Stanhope',
      kind: 'battalion commander and company commander',
      note: 'The Colonel relies on Stanhope and cannot spare him for a rest. His orders for the raid, and his delight at its result, provoke Stanhope’s bitterest irony.',
    },
    {
      from: 'Stanhope',
      to: 'Madge',
      kind: 'close attachment, not officially engaged',
      note: 'Stanhope keeps Madge’s photograph and has avoided her on leave for fear she will see what he has become. His dread of her judgement drives the letter scene.',
    },
    {
      from: 'Raleigh',
      to: 'Madge',
      kind: 'brother and sister',
      note: 'Raleigh brings a message from his sister and means to write to her about Stanhope, which is exactly what Stanhope fears.',
    },
    {
      from: 'Mason',
      to: 'Stanhope',
      kind: 'servant and officer',
      note: 'Mason serves the officers anxiously and comically, and Stanhope can threaten to send him back to his platoon. At dawn on Thursday Mason joins his platoon in the line.',
    },
    {
      from: 'The Sergeant-Major',
      to: 'Raleigh',
      kind: 'senior soldier and young officer',
      note: 'The Sergeant-Major carries the wounded Raleigh down the steps like a child, an act of practical care that crosses rank.',
    },
  ],

  compareWith: [
    {
      title: 'An Inspector Calls (J B Priestley)',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'Another play on the same Edexcel 1ET0 list that depends on dramatic irony: Priestley sets it in 1912 for an audience that knew about the wars to come, as Sherriff’s audience knew what 21 March 1918 would bring.',
    },
    {
      title: 'Lord of the Flies (William Golding)',
      href: '/revision/texts/lord-of-the-flies',
      reason:
        'Also on the Edexcel 1ET0 list: schoolboys under extreme pressure, where public-school codes of order and leadership are tested and, in Golding’s case, collapse.',
    },
    {
      title: 'Exposure (Wilfred Owen)',
      href: '/revision/poetry/power-and-conflict/exposure',
      reason:
        'In the Conflict cluster of the Edexcel GCSE poetry anthology: Owen’s soldiers, like Sherriff’s, suffer most from waiting in the cold while nothing happens.',
    },
  ],

  contentGuidance: ['violence', 'mortality', 'mental_health', 'addiction'],

  quotesFromElsewhere: ['Here is my journey’s end'],

  sources: [
    {
      label:
        'R C Sherriff, Journey’s End (London: Victor Gollancz, 1929), first edition, thirteenth impression: OCR full text read in full and used to check every quotation and speaker',
      url: 'https://archive.org/details/journeysend0000rcsh',
    },
    {
      label:
        'Journey’s End (Victor Gollancz, 1929), a second scan of the first edition, used as an independent check',
      url: 'https://archive.org/details/bwb_KR-385-535',
    },
    {
      label: 'Journey’s End (New York: Brentano’s, 1929), scan used as an independent check',
      url: 'https://archive.org/details/bwb_W7-BOR-313',
    },
    {
      label: 'Journey’s End (New York: Coward-McCann, 1929), scan used as an independent check',
      url: 'https://archive.org/details/journeysendplayi0000rcsh',
    },
    {
      label:
        'Journey’s End, Penguin Modern Classics (Penguin Books, 2000), searched through Google Books to confirm each quotation in the edition students use, including its spelling “whisky”',
      url: 'https://books.google.com/books?id=1_lEXE9RqDQC',
    },
    {
      label:
        'Journey’s End (Penguin Books, 1983), searched through Google Books as a second modern check',
      url: 'https://books.google.com/books?id=H5yN0La6sdcC',
    },
    {
      label:
        'Pearson Edexcel GCSE (9-1) English Literature (1ET0) specification, Issue 2 (June 2019): Paper 1 Section B, closed book, no prescribed editions',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/specification-and-sample-assesment/9781446914359_GCSE_2015_L12_Englit.pdf',
    },
    {
      label:
        'Pearson 1ET0 Paper 1 question paper, June 2022 (stimulus quotations checked against the play)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1et0-01-que-20220526.pdf',
    },
    {
      label: 'Pearson 1ET0 Paper 1 question paper, June 2023',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20230518.pdf',
    },
    {
      label: 'Pearson 1ET0 Paper 1 question paper, June 2024',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20240514.pdf',
    },
    {
      label: 'Pearson 1ET0 Paper 1 question paper, June 2025',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20250513.pdf',
    },
    {
      label:
        'Pearson 1ET0 Paper 1 mark scheme, June 2022 (indicative content on the play, including public school and officer rank)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1et0-01-rms-20220825.pdf',
    },
    {
      label:
        'AQA AS and A-level English Literature A (7711/7712) specification, version 1.6: Option 2A core set texts, open book',
      url: 'https://filestore.aqa.org.uk/resources/english/specifications/AQA-7711-7712-SP-2015.PDF',
    },
    {
      label: 'AQA 7712 specification web page, Texts in shared contexts',
      url: 'https://www.aqa.org.uk/subjects/english/a-level/english-7712/specification/subject-content/texts-in-shared-contexts',
    },
    {
      label: 'AQA 7712/2A question paper, June 2021 series (structure of Sections A and B)',
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-77122A-QP-NOV21.PDF',
    },
    {
      label:
        'AQA 7712/2A mark scheme, June 2021 series: indicative content on the play, the working titles Suspense and Waiting, Sherriff’s account of the title and Fussell’s Othello echo',
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-77122A-MS-NOV21.PDF',
    },
    {
      label:
        'Surrey History Centre, Exploring Surrey’s Past: R C Sherriff (1896 to 1975): birth, war service, wounding at Passchendaele, neuralgia letters, first production',
      url: 'https://www.exploringsurreyspast.org.uk/themes/people/writers/sherriff/',
    },
    {
      label:
        'Surrey History Centre, Exploring Surrey’s Past: RC Sherriff, the man behind the play: rejection by managers, the Hulluch raid of January 1917, censorship of his letters',
      url: 'https://www.exploringsurreyspast.org.uk/themes/people/writers/sherriff/play/',
    },
    {
      label:
        'Australian War Memorial: Operation Michael, the German offensive of 21 March 1918, St Quentin sector',
      url: 'https://www.awm.gov.au/visit/exhibitions/1918/battles/michael',
    },
    {
      label:
        'Armed Forces Act 2006, section 359: pardons for those executed for disciplinary offences in 1914 to 1918',
      url: 'https://www.legislation.gov.uk/ukpga/2006/52/section/359',
    },
    {
      label:
        'Wikipedia, Journey’s End: premiere, Savoy transfer date, working titles (used only where it agrees with the sources above)',
      url: 'https://en.wikipedia.org/wiki/Journey%27s_End',
    },
    {
      label:
        'Othello, Act 5 Scene 2, held edition in src/data/full-texts/othello.ts, for the line the title may echo',
    },
  ],
}
