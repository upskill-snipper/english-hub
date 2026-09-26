import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Hullabaloo in the Guava Orchard, Kiran Desai (1998). A COMPLETE guide: the
 * text had no guide anywhere before this file.
 *
 * THE TITLE. Cambridge's 0475 syllabuses for 2026 and 2027 print
 * "Hullaballoo", and the slug keeps that spelling so it matches the set-text
 * register. The publishers (Faber & Faber, Grove Press) and Cambridge's own
 * specimen paper for 2028 print "Hullabaloo", so the guide uses that and says
 * that the syllabus prints the other. Kiran Desai is not Anita Desai, her
 * mother, whose Fire on the Mountain is on the same prose list.
 *
 * THE NOVEL IS IN COPYRIGHT and no licensed copy is held here, so the guide
 * test cannot check these quotations. Every quotation below, and every phrase
 * quoted inside the prose, was checked on 26 September 2026 through Google
 * Books' search-within-volume (snippets only, nothing stored) in two editions:
 * the Grove Press paperback, 2009 reprint (ISBN 9780802144508, whose page
 * numbers the guide gives), and the Faber & Faber ebook of 2014 (ISBN
 * 9780571316151). Most were found word for word in both. Two were found
 * whole in one edition only, because the other's snippet stopped short or a
 * line-end hyphen broke the search, and nothing in the other contradicted
 * them: "I want my freedom" (Faber) and "they were a band together" (Grove).
 * "Gingerly, they approached the bubbling cauldron" is in both. Chapter numbers
 * were fixed from the chapter figures that appear in the Faber snippets and
 * from the Gale chapter summary, and cross-checked against the Grove pages.
 * Chapter One was also read in the publisher's own excerpt on BookBrowse.
 *
 * A SECOND PASS on the same day, checking the prose rather than the
 * quotations, corrected claims the first draft made from summaries: "found a
 * crack" happens on the bus, not in the orchard; Mr Chawla's first words are
 * read from a newspaper; the monkeys leave towards the mountains, not "into
 * the forest"; the Chief Medical Officer wants promotion out of Shahkot, and
 * it was Kulfi's family, not Mr Chawla, who offered the dowry.
 *
 * A THIRD PASS (an independent fact-check, same day, same two editions and
 * the publisher's Chapter One excerpt) found that the second pass had itself
 * introduced one error and left several standing:
 * - The second pass said the crate was "not labelled Red Cross". It is: "a
 *   crate of Red Cross supplies that had been dropped by a Swedish relief
 *   plane befuddled by the storm" (Chapter 1, p. 11). It crashes into the
 *   street and lodges in the branches of a tree.
 * - Mr Chawla's first comment of his own is "Why can't they think of serious
 *   solutions?", said just before the Hungarian musicians line, so that line
 *   is part of his first comment, not the whole of it. The rain-making
 *   schemes he mocks are ones he reads out from the newspaper, not the
 *   town's.
 * - The girl the heat burns too dark to marry is "the Malhotra's daughter",
 *   not a neighbour's.
 * - In "the dark heart of the monsoon" it is Kulfi, leaning out of the window
 *   into the rain, who is drawn into the storm, not the town.
 * - Nothing shows Mr Chawla climbing the tree at the end: he shouts up into
 *   it for Sampath and finds it empty.
 * - Rushdie co-edited Mirrorwork with Elizabeth West, and Faber prints his
 *   phrase on the novel's cover.
 * - Unconfirmed details were removed: Miss Jyotsna singing "hymns" and
 *   telling stories of Sampath's post-office days, Ammaji telling pilgrims of
 *   his "spiritual nature", cheering from the bazaar at the monsoon, and the
 *   Hungry Hop boy wanting to get away from his relatives. What replaces them
 *   was found in the text.
 * - The sentence with the birthmarked guava ends in an ellipsis, not a full
 *   stop, so the quotation now stops at "birthmark".
 *
 * WHAT WAS CHECKED AND DROPPED OR CORRECTED, so the next editor does not
 * reintroduce it:
 * - Cambridge's 2028 specimen mark scheme quotes the newspaper column in
 *   Chapter 7 as "child-like ways being uncoupled with unfathomable wisdom".
 *   Both editions read "coupled". The guide uses "coupled" and warns students.
 * - Gale's study guide quotes "he wished he could absorb all its coolness, all
 *   its quiet and stillness into him", a chikoo proverb, and Amitava Kumar
 *   quotes "where there was not a trace of civilization". None could be found
 *   in either edition, so none is used.
 * - Gale capitalises "Ping-Pong"; both editions print "ping-pong".
 * - The Grove paperback on BookBrowse is the 1998 US setting ("flavored",
 *   "Mr. Chawla"); the editions checked read "flavoured" and "Mr Chawla". No
 *   quotation here depends on a word spelt differently between them.
 * - The novel ends on sounds and an image, not a statement: from the orchard
 *   come a crack, a howl and a watery splash, a broken branch hangs over
 *   Kulfi's pot and there is "something else" in it. The guide says it is
 *   implied that the spy has fallen in, never that he has died. Gale's summary
 *   states it outright; the novel does not.
 */
export const guide: StudyGuide = {
  slug: 'hullaballoo-in-the-guava-orchard',
  title: 'Hullabaloo in the Guava Orchard',
  author: 'Kiran Desai',
  form: 'novel',
  scope:
    'The whole novel (1998), in 25 short chapters. It is set for Cambridge IGCSE Literature in English (0475), Paper 1 Section B (Prose), for examination in 2026 and 2027. The syllabus prints the title as “Hullaballoo”; the published title, used throughout this guide, is Hullabaloo. Paper 1 is closed-book: you may not take the novel into the exam room. For each text there is a choice of two questions, one on a passage printed in the paper and one essay on the novel as a whole. Any complete, unabridged edition may be used. Page numbers in this guide are to the Grove Press paperback (2009 reprint); chapter numbers are the same in the Faber edition.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Kiran Desai 1998. Published in the UK by Faber & Faber and in the US by Atlantic Monthly Press, now Grove Atlantic. Short quotations are used for the purposes of criticism and review.',
  },
  workLength: {
    words: 70000,
    basis:
      "Estimated, not counted: no licensed copy is held to count. The Grove Press paperback prints the novel on 209 pages, and the Internet Archive's text file for the Faber first edition (1998) is about 418,000 characters, which at roughly six characters a word is in the region of 70,000 words. Any length above 3,000 words puts the novel under the long-work limit, so the estimate cannot loosen the quotation limits.",
  },

  overview: {
    summary: [
      'In a summer of terrible drought in Shahkot, a small town in north India, a young wife called Kulfi grows enormous with pregnancy and with a hunger nothing can satisfy. She bribes the market sellers with pieces of her dowry and covers the walls of the house with drawings of food. On the night the monsoon finally breaks she gives birth to a boy with a brown birthmark on his cheek, and at the same moment a crate of Red Cross supplies, dropped by a Swedish relief plane confused by the storm, crashes into the street outside. The family name him Sampath, which they take to mean good fortune.',
      "Twenty years later Sampath is a thin, dreamy failure. He hates his job at the post office, where he reads other people's letters instead of sorting them, and at his boss's daughter's wedding he dresses up in the bride's family's finery, climbs the fountain and drops his trousers in front of the guests. Sacked and lectured, he runs away, leaps from a stalling bus and climbs a guava tree in an old orchard outside the town. When his family and the curious crowd try to coax him down, he calls out secrets he learned from their letters, and Shahkot decides he is a holy man with second sight.",
      "His father, Mr Chawla, turns the orchard into a business. Pilgrims pour in to hear the Baba's riddling answers, his mother Kulfi is at last free to cook the extraordinary dishes she has always imagined, his sister Pinky falls for the boy who sells ice cream, and a spy from the Atheist Society arrives to expose him as a fraud. Then a troupe of langur monkeys moves into the tree, discovers the pilgrims' alcohol and runs riot. The town splits into those who want the monkeys destroyed and those who want them protected, and a new District Collector from Delhi agrees to Mr Chawla's plan to catch them on 30 April and bring Sampath down. On that morning the tree is empty. All that is left is one large guava marked with something like a birthmark, which the Cinema Monkey, leader of the troupe, carries away towards the mountains.",
      "The novel is a comedy and a satire: of family life, of officialdom, of a town's appetite for holy men and of the money that follows them. It is also a fable about a young man's longing to escape into stillness and beauty. The best answers keep both in view. Desai never tells us whether Sampath is a fool, a fraud, a madman or something close to a saint, and a strong essay argues about that rather than settling it too quickly.",
    ],
  },

  context: [
    {
      heading: 'Kiran Desai',
      body: "Kiran Desai was born in New Delhi in 1971 and educated in India, England and the United States; she left India as a teenager when her mother, the novelist Anita Desai, took teaching posts abroad. She first meant to study science at Bennington College in Vermont, turned to writing there, and went on to writing programmes at Hollins University and Columbia University. She began Hullabaloo in the Guava Orchard at Hollins and finished it as her master's work at Columbia. It was published in 1998, when she was still in her twenties, and won the Betty Trask Award for a first novel. Her second, The Inheritance of Loss, won the Booker Prize in 2006, which made her at 35 the youngest woman to win it at that time, and her third, The Loneliness of Sonia and Sunny, was shortlisted for the Booker Prize in 2025. Do not confuse her with her mother: Anita Desai's Fire on the Mountain is on the same Cambridge prose list.",
    },
    {
      heading: 'Publication, and the spelling of the title',
      body: "The novel was published in 1998 by Faber & Faber in London and Atlantic Monthly Press in New York. Part of it appeared before publication in The New Yorker and in Mirrorwork (1997), the anthology of fifty years of Indian writing in English that Salman Rushdie edited with Elizabeth West. In his introduction Rushdie called the forthcoming book “lush and intensely imagined”, and Faber still prints the phrase on the novel's cover. A hullabaloo is an uproar, a noisy commotion, and the title promises exactly the chaos the second half delivers. Cambridge's syllabuses for 2026 and 2027 spell it “Hullaballoo”, but the published editions, and Cambridge's own specimen paper for the revised examination from 2028, print Hullabaloo. Use the published spelling in your essay.",
    },
    {
      heading: 'Holy men, trees and renunciation',
      body: "Indian religious tradition honours those who give up home, family and possessions to seek enlightenment, and holy men who live apart, under trees, by rivers or in forests, are a familiar sight. The Buddha is said to have reached enlightenment sitting beneath a tree. Sampath's flight to the orchard fits that pattern so neatly that the town soon reads it that way, though what he actually wants is to be left alone. Desai drew on reality as well as tradition. In a 1998 interview her mother recalled a real hermit in India who sat in a tree and was visited by crowds, and Kiran Desai insisted that some of the novel's most absurd episodes, including the drunken animals, were based on true stories. She also said she wanted to show the question of belief from as many angles as she could, and did not want to write a moral tale.",
    },
    {
      heading: 'Monkeys, Hanuman and the Ramayana',
      body: "In the Hindu epic the Ramayana, the monkey Hanuman is the devoted ally of the hero Rama and helps him win his war with an army of monkeys, and Hanuman is still widely worshipped. That is why the monkeys in the novel cannot simply be removed. The langurs are sacred to some and a menace to others: the Hanuman Temple protests at their treatment, a Monkey Protection Society is formed with the support of the Cow Protection Society, and officials are too frightened of offending anyone to act. Desai's comedy depends on this clash between reverence and practical nuisance, and on the way a religious argument quickly becomes a political one.",
    },
    {
      heading: 'A small town after the Raj',
      body: 'Shahkot is run by officials whose posts go back to British rule: a District Collector sent from Delhi, a Brigadier at the army post, a Chief Medical Officer, a police superintendent. Desai makes all of them absurd. They care more about ulcers, bird-watching, promotion and blame than about the town, and in Chapter 15 they spend a whole morning failing to reach one another by telephone. The colonial past surfaces in small jokes. When the new District Collector arrives, Mr Gupta tells him the cook is left over from the Raj and wanted to serve cutlets with caramel custard. Critics have read the novel as a satire on a country caught between inherited British institutions, traditional belief and a new appetite for money.',
    },
    {
      heading: 'When is it set?',
      body: "The novel never gives a date, but it drops clues. The local paper that first reports Sampath's tree also carries the rumour that Coca-Cola might soon be arriving in India. Coca-Cola had left India in 1977 and returned in 1993, when the country was opening its economy to foreign companies, so the story seems to take place some time before that. It is a world of televisions and refrigerators wanted as dowry, jeeps and scooters, newspapers and advertising hoardings, sitting alongside astrologers, arranged marriages and sacred monkeys. That mixture of old and new, and Mr Chawla's hunger to profit from it, is part of what Desai is satirising.",
    },
    {
      heading: 'The Indian novel in English, and comic tradition',
      body: "After Salman Rushdie's Midnight's Children won the Booker Prize in 1981, Indian novels in English found a large international readership, and Desai was quickly compared both with Rushdie and with R. K. Narayan, whose gentle comedies are set in the invented small town of Malgudi. Narayan's The Guide (1958) is also about a man mistaken for a holy man, and one of his earlier novels is even called Mr Sampath (1949). Many reviewers used the label magic realism for Desai's blend of the everyday and the impossible; she resisted it, saying that much of what seems surreal to Western readers is taken from Indian reality. These are comparisons critics made, not sources Desai named, and you should present them that way.",
    },
    {
      heading: 'How it was received',
      body: "Most reviewers praised the novel's comedy and the sensuous beauty of its prose, and several, including Zia Jaffrey in the New York Times, were disappointed by its plot and ending. The sharpest criticism came from the critic Amitava Kumar, who argued that the book was too gentle, its India too sanitised, its characters quaint and harmless, and he mocked what he called an “unlikely, pretty, empty India”. You do not have to agree, but the debate is useful: it asks whether the comedy exposes real problems, such as greed, gossip and the treatment of women, or turns them into charm.",
    },
  ],

  themes: [
    {
      title: 'Freedom and escape',
      body: "Sampath's whole story is a bid for freedom. After he loses his job he thinks of his life as “a prison he had been born into” (Chapter 5), and his answer to his mother's offer of an egg, that he wants his freedom, is both a joke and the novel's central desire. On the bus out of Shahkot in Chapter 6 he thinks of snakes leaving their old skins behind and insects breaking out of their shells, images of creatures escaping what enclosed them. Desai spreads the longing across the cast: Kulfi, married off young, has spent twenty years looking out of a window; Pinky wants excitement and plans to run away with the Hungry Hop boy, who is kept under guard by his relatives; the Chief Medical Officer hopes for a promotion that would take him out of Shahkot. The monkeys, who come and go as they please, are freedom in its purest and most destructive form. One reading is that the novel celebrates escape. A more convincing one, perhaps, is that it shows how hard escape is: everyone who reaches the orchard, from Mr Chawla to the officials, drags the town in behind them, until the orchard looks like the town itself. Only the ending, which is not realistic at all, gives Sampath the freedom he wants.",
    },
    {
      title: 'Faith and credulity',
      body: "Shahkot needs very little evidence to believe. Sampath reveals secrets he read in the post office and the crowd concludes he has second sight; he rejects a bride because he is horrified, and the crowd takes it as proof of holiness. His answers to spiritual questions are about fish curries and pickles, yet pilgrims nod and interpret them. Desai is clearly satirising the appetite for gurus, but she does not simply side with the sceptic. The spy from the Atheist Society is as ridiculous as the believers, and his search for proof of fraud leaves Sampath's sayings tangled up in his own thoughts. Desai said she wanted to show as many angles as she could and did not want to write a moral tale. The strongest essays notice that the novel mocks the believers and the debunkers alike, while leaving room for something real in Sampath's stillness, and that its ending refuses to tell us which view is right.",
    },
    {
      title: 'Money and the holy-man business',
      body: "Straight after the newspaper report Mr Chawla realises that “Sampath might make his family's fortune” (Chapter 8). He moves the family into the watchman's shed, opens a bank account for a temple that may never be built, sells advertising space, sells garlands and fruit to pilgrims and then collects the offerings from beneath the tree to sell again. Religion becomes a trade, and Desai's comedy lies in how sincerely Mr Chawla believes he is acting for everyone's good. The orchard, which first appears as untouched beauty, ends up full of advertisements, litter, slogans and crowds. One reading is that the novel is a warning about the commercialising of faith in a newly money-minded India. Another is gentler: Mr Chawla is a harassed father trying to make the best of a son who will not work, and his schemes are more foolish than wicked. Either can be argued, but a good answer shows how the money changes the orchard and pushes Sampath towards his disappearance.",
    },
    {
      title: 'Family, marriage and women',
      body: "The Chawlas are a comic family, but their comedy has a hard edge. Kulfi was married off young because her own family feared she would be left on their hands; they offered a dowry the Chawlas could not refuse, though Mr Chawla at first would have nothing to do with “That crazy family” (Chapter 7). At Sampath's birth the family celebrate that he is “triumphantly and indisputably male” (Chapter 1), a phrase that quietly shows how much less a daughter would have been worth. Desai mocks the town's prejudice about skin colour in the same deadpan way: the heat of Chapter 1 burns one family's daughter “far too dark for a decent marriage”, and in Chapter 7 the list of qualities wanted in Sampath's bride says that if she is dark, her dowry should include a television, a refrigerator or even a scooter. Pinky is told by her father how important it is for girls to learn useful skills, then that a typing course is silly, and when her romance becomes known she is lectured and chaperoned. Ammaji holds power in the household through the old roles of mother-in-law and grandmother. Against all this, the novel lets its women break out in wild ways: Kulfi's fearless foraging and cooking, Pinky's hairpin and her stalking of the Hungry Hop boy. Critics disagree whether Desai takes these women seriously or turns them into eccentrics, and that is a good question to argue with evidence.",
    },
    {
      title: 'Officialdom and modern India',
      body: "The second half of the novel turns into a satire of government. Faced with drunken monkeys, the Chief Medical Officer passes the problem to the university, the biologist Verma proposes killing the leading monkey as a warning, the Brigadier plans a show of military force and would rather find a green pigeon, and the police superintendent does as little as possible. The new District Collector, young and afraid of a black mark on his record, is overwhelmed by crowds and slogans. Desai uses a crowded, cross-cutting narrative to show a town where everyone argues and nobody listens, until “Sampath himself was forgotten in the fray” (Chapter 18). Critics link this to the post-colonial state, run on inherited British lines and pulled between religious groups, business and modernisers. You can argue that the satire is affectionate rather than angry: nobody is truly evil, and the town's chaos is as much human nature as politics.",
    },
    {
      title: 'Nature and the senses',
      body: "Desai writes the natural world with intense, sensuous detail: the heat and dust of the drought, the sudden darkening before the monsoon, the cool green of a guava, the insects and light of the orchard, the spices in Kulfi's pots. For Sampath and Kulfi, beauty is almost a hunger. He is transported by perfumes and silks at the wedding, then by a single guava; she is driven by the taste of food she has only imagined. The orchard is first a paradise of stillness and then, as the crowds arrive, a place spoiled by human noise. On his last night Sampath finds the darkness more comforting than people. One reading is that the novel prefers nature to society and ends by letting Sampath dissolve into it. Another notices that nature is also wild and dangerous here, in the drunken monkeys and in Kulfi's hunting, so the novel does not offer a simple escape into innocence.",
    },
  ],

  characters: [
    {
      name: 'Sampath Chawla',
      role: 'The central character: a post-office clerk who climbs a guava tree and is taken for a holy man',
      body: 'Born as the monsoon breaks, with a brown birthmark on his cheek, Sampath grows into a thin, sleepless, day-dreaming young man who fails at school and at work. He is drawn to beauty, to words, colours, scents and fruit, and feels suffocated by his family, his job and the town. In the orchard he is happy for the first time, and he protects his position with a trick, calling out secrets from the letters he read, and then with riddling answers the pilgrims take for wisdom. He loves the monkeys, forgives them everything, and feels that they, his mother and he are the only ones who understand each other. Critics call him a wise fool: foolish, lazy and a little dishonest, but wiser than the fools around him. Whether he is a fraud, a madman or a kind of saint is the question the novel leaves open, and his disappearance at the end keeps it open.',
    },
    {
      name: 'Kulfi',
      role: "Sampath's mother, a gifted and unconventional cook",
      body: "Married young into the Chawla family because her own feared she would be left on their hands for ever, Kulfi is regarded by everyone as strange. In pregnancy her hunger is ferocious and she draws food all over the walls; for twenty years afterwards she sits at the window while Ammaji runs the house. She alone understands why her son has climbed a tree and tells the family to let him be. In the orchard she is set free: she forages in the forest for rare ingredients and cooks astonishing dishes, and her imagination grows wilder until she dreams of cooking a monkey. She is comic, but also a portrait of a woman whose talent had no outlet, and a reader can argue that her cooking is Desai's image of the artist.",
    },
    {
      name: 'Mr Chawla',
      role: "Sampath's father, head clerk at the Reserve Bank of Shahkot",
      body: "A man of routines, yoga mats and lectures, Mr Chawla likes order and fears the “sticky humanness of things” (Chapter 1). He is baffled by his wife and son, and embarrassed by them, until he sees that a holy man in the family could make its fortune. He then manages the orchard like a business, and in the end proposes the plan to catch the monkeys and bring Sampath down. He is the novel's main comic engine: pompous, inconsistent (he tells Pinky to take a typing course and later calls it silly) and always sure he is right. He is not a villain, though. His panic when the tree is empty is real, and some readers find him more sad than ridiculous.",
    },
    {
      name: 'Ammaji',
      role: "Mr Chawla's mother, Sampath's grandmother",
      body: "Ammaji arranged Kulfi's marriage, partly because she liked the girl and partly for the dowry, and has run the household ever since. She believes in herbs, prayers and planetary configurations, fusses over her grandson and is proud of his success, which she feels she always foresaw. In the orchard she runs a tea stall, where she chats happily with the visitors. The Cinema Monkey's theft of her new dentures in Chapter 9 is one of the novel's great slapstick scenes. She represents the older, traditional India that Mr Chawla, the modern bank clerk, both depends on and scolds.",
    },
    {
      name: 'Pinky',
      role: "Sampath's younger sister",
      body: "Pinky is vain, dramatic and bored, and she resents being dragged out of town to live in an orchard. She carries a hairpin to stab men who harass her on the bus, and when the Hungry Hop boy rescues Ammaji's dentures she decides he is a hero. Her pursuit of him is fierce and funny, and at one point shocking: frustrated that he does not notice her, she bites his ear. She plans to elope with him on 30 April and is scornful when he fails her. She is a satirical portrait of a teenager raised on romantic films, but also of a girl whose father cannot decide what a modern Indian daughter should be.",
    },
    {
      name: 'The Hungry Hop boy',
      role: 'An ice-cream seller from the Kwality van',
      body: "Slow, good-natured and baffled, the Hungry Hop boy becomes Pinky's hero when he rescues Ammaji's dentures, and her victim when she bites his ear. Guarded at home by a large family of women who decide to marry him off, he agrees to run away with Pinky but hesitates, tempted by the pretty bride and the comforts his family promise. On the morning of 30 April he is caught up in the traffic heading for the orchard and ends the novel tied up in the back of the Brigadier's jeep. He is a comic contrast to Pinky: she wants a film romance, and he wants a quiet life.",
    },
    {
      name: 'The spy',
      role: 'A schoolteacher and member of the Atheist Society, sent to expose Sampath',
      body: "The spy belongs to the Atheist Society and its Branch to Uncover Fraudulent Holy Men, and Sampath is his first important mission. He hates his job teaching at the public school and dreams of fame as an intellectual. He hides behind trees making notes in a school notebook, tries to take a sample of Sampath's food to test it, and denounces the Chawla case to the Atheist Society's annual meeting. The joke is that he is changed by the very man he means to unmask: by Chapter 17 he finds more and more of Sampath's lines entangled with his own thoughts. At the end he climbs the tree above Kulfi's cooking pot to see exactly what goes into it, and a crack, a howl, a watery splash and a broken branch leave the reader to imagine where he has gone. He shows that Desai mocks certainty on both sides of the argument about faith.",
    },
    {
      name: 'Miss Jyotsna',
      role: "Sampath's former colleague at the post office",
      body: "Miss Jyotsna flirts with Mr Gupta at work while Sampath watches her and, when he gets the chance, looks through her purse. Once he is in the tree she becomes one of his most devoted followers: she declares that he must have gone through a complete transformation, sings beneath his tree, and when the monkeys cause trouble she defends them. Her quick conversion from colleague to devotee is one of the clearest examples of the town's eagerness to believe.",
    },
    {
      name: 'Mr Gupta',
      role: 'Another post-office colleague, later secretary to the District Collector',
      body: 'Mr Gupta cannot at first believe that the clerk he worked with is now a holy man, and his protest that it is only Sampath is the voice of common sense the crowd ignores. Later he is appointed secretary to the new District Collector, briefs him on the crisis and escorts him around the town. His remarks about the cook left over from the Raj bring the colonial past into the comedy.',
    },
    {
      name: 'Mr D. P. S.',
      role: 'Head of the post office and Sampath’s boss',
      body: "Mr D. P. S. orders his staff to help with his daughter's wedding, where Sampath dresses up, dances and ends by dropping his trousers on the fountain in front of the guests. The humiliation of the boss and the loss of the job set the whole plot in motion.",
    },
    {
      name: 'Dr Banerjee',
      role: 'The doctor from the bazaar clinic',
      body: "Called in to persuade Sampath down, Dr Banerjee climbs into the tree with his stethoscope and blood-pressure pump to examine his patient, one of several comic attempts to treat Sampath's choice as an illness. Later his newspaper article on monkey bites spreads panic through the town.",
    },
    {
      name: 'The Cinema Monkey',
      role: 'The leader of the langur troupe',
      body: "Known for harassing women outside the cinema for their peanut cones, the Cinema Monkey steals Ammaji's dentures in the bazaar, follows Pinky to the orchard and brings the troupe with him. The monkeys become Sampath's companions and then, once they discover alcohol, the town's crisis. In the final chapter it is the Cinema Monkey who picks up the marked guava, holds it close to his chest and bounds away with it, so the novel's last act of care for Sampath belongs to an animal.",
    },
    {
      name: 'The District Collector',
      role: 'The new senior official sent from Delhi',
      body: "Young, untried and anxious about a black mark on his record, the District Collector arrives expecting an easy first posting and finds a town in uproar. He meets Sampath and feels as exposed to the crowd as Sampath does, puzzles over the adages the crowd shouts, and agrees to Mr Chawla's plan to catch the monkeys. He is a satire on a bureaucracy more concerned with appearances than with the people it serves, but he is also treated with some sympathy.",
    },
    {
      name: 'The Brigadier',
      role: 'Head of the local army post',
      body: "The Brigadier is devoted to bird-watching and above all to spotting a green pigeon, which matters more to him than the crisis. He proposes a military operation against the monkeys and trains his men to catch them, and on the morning of the attack he breaks off to chase the pigeon with a monkey net. He shows how the officials' private obsessions outweigh their public duty.",
    },
    {
      name: 'The Chief Medical Officer',
      role: "Shahkot's senior health official",
      body: "The Chief Medical Officer lives in fear of his ulcers, drinks onion juice for them, and wants above all to avoid trouble; he hopes for a promotion that would take him out of Shahkot. He passes the monkey problem to the university and tries to leave town on the very morning of the attack. He is one of Desai's clearest satires of an official protecting himself rather than the public.",
    },
    {
      name: 'Verma',
      role: 'Head of biology at Lady Chatterjee University',
      body: "Vermaji first appears in Chapter 1 with his giant fan to draw in the monsoon, and returns as the town's expert on langurs. His plan is to kill the Cinema Monkey and put it on display so the rest of the troupe will scatter, a scheme his wife so dislikes that she leaves him. He stands for theory without sense: every problem has a solution in his head, and none of them works.",
    },
  ],

  keyQuotes: [
    {
      text: 'the heat had enveloped the whole of Shahkot in a murky yellow haze',
      where: 'The narrator, opening sentence of Chapter 1 (p. 1)',
      analysis:
        "The first image is of a town smothered. “Enveloped” makes the heat a wrapping that closes Shahkot in, and the “murky yellow haze” blurs everything, setting up a place where nothing is clear and people cannot see straight. It prepares for a story about suffocation and the longing to escape, and the drought's final breaking at Sampath's birth.",
    },
    {
      text: 'It is too hot to fool about with Hungarian musicians.',
      where: 'Mr Chawla, commenting on what he has read out from the newspaper, Chapter 1 (p. 1)',
      analysis:
        "Mr Chawla dismisses one absurd plan to bring rain while his own proposal, to cut and grow vegetation in elaborate patterns, is just as absurd. The joke is typical of Desai's satire: a town full of confident schemes, each person sure that everyone else is the fool. His first words in the novel are read out from the newspaper; this line ends his first comment of his own, straight after he asks why nobody can think of serious solutions, and it introduces his pompous certainty at once.",
    },
    {
      text: 'her hunger was so fierce, it was like a big, prowling animal',
      where: 'The narrator on Kulfi, Chapter 1 (p. 5)',
      analysis:
        "The simile turns Kulfi's craving into something wild and dangerous that stalks the house. It is comic, since she is pregnant in a famine and wants fish curries, but it also marks her as untamed, a force her husband and neighbours cannot control. The image looks forward to her fearless hunting in the forest and to the real animals that later invade the orchard.",
    },
    {
      text: 'triumphantly and indisputably male',
      where: 'The narrator on the newborn Sampath, end of Chapter 1 (p. 12)',
      analysis:
        "The family celebrate the baby because, though not especially plump or fair, he is a boy. The emphatic adverbs mimic their pride, and the irony is Desai's: she lets the phrase expose a preference for sons without comment. It is useful evidence for the theme of women and family, and it makes the celebration of this supposedly lucky boy look ironic when he grows up.",
    },
    {
      text: 'a prison he had been born into',
      where: "Sampath's thoughts after losing his job, Chapter 5 (p. 43)",
      analysis:
        "Sampath's metaphor makes his whole life, not just his job, a place of confinement, and “born into” suggests it was never his choice. It is self-pitying, since he has just been sacked for exposing himself at a wedding, and Desai lets us smile at that. But it states the novel's central desire plainly, and explains why the open orchard feels like salvation.",
    },
    {
      text: 'No, I do not want an egg ... I want my freedom.',
      where: 'Sampath to Kulfi, the last lines of Chapter 5 (p. 47)',
      analysis:
        "Kulfi offers comfort in the only form she knows, food, and Sampath answers with a grand abstract demand. The bathos of egg against freedom is funny, but the chapter's final line also has real force: it is the moment he decides to leave. Desai often makes her most serious points through comic juxtapositions like this one.",
    },
    {
      text: "This was the way of riches and this was a king's life",
      where: 'Sampath in the guava tree, Chapter 6 (p. 51)',
      analysis:
        "Sitting in the tree with nothing but fruit, leaves and quiet, Sampath calls it riches and a king's life. The repeated “this was” gives the line the rhythm of a vow. It redefines wealth as stillness and beauty, and so sets him against his father, for whom riches will soon mean bank accounts made out of this very tree.",
    },
    {
      text: 'Is your jewellery still safely buried beneath the tulsi plant?',
      where: 'Sampath to Mr Singh, from the tree, Chapter 7 (p. 66)',
      analysis:
        "Panicking under the crowd's pressure, Sampath shouts a secret he read in Mr Singh's letter. The domestic detail, jewels hidden under a sacred basil plant, makes it comic, and Mr Singh turning pale shows it lands. This is the turning point of the plot: a trick born of snooping at the post office is taken as clairvoyance, and the holy man is created.",
    },
    {
      text: "Sampath might make his family's fortune.",
      where: "Mr Chawla's sudden realisation, opening of Chapter 8 (p. 68)",
      analysis:
        "The short, plain sentence lands with comic abruptness after the long, breathless sentence that announces his sudden realisation, and it tells us everything about Mr Chawla's priorities. The son over whom he wailed “What am I to do with this boy?” in Chapter 7 becomes an asset overnight. The word “fortune” echoes the family's belief at his birth that Sampath means good fortune, and turns it into money.",
    },
    {
      text: 'Some people can only digest fish cooked in a light curry.',
      where: 'Sampath answering a pilgrim, The Sermon in the Guava Tree, Chapter 8 (p. 76)',
      analysis:
        'Asked whether God is to be realised by the way of devotion or the way of knowledge, Sampath answers with cookery. The reply sounds like a proverb, and the pilgrims can read it as saying that different souls need different paths, but it is really about his favourite food. Desai makes the joke cut both ways: Sampath is bluffing, yet the answer is no sillier than much solemn advice, and the crowd supplies the wisdom itself.',
    },
    {
      text: 'She felt she was on the brink of something enormous.',
      where: 'The narrator on Kulfi, newly free in the orchard, Chapter 8 (p. 78)',
      analysis:
        "In the orchard Kulfi finally feels her life opening. “Brink” suggests both a threshold and a dangerous edge, which suits a woman whose freedom will take her deeper and deeper into the wild and towards a monstrous final recipe. The line shows that Sampath's escape frees his mother too, and that her creativity has been waiting twenty years.",
    },
    {
      text: 'It was precisely people like Sampath who obstructed the progress of this nation',
      where:
        "The narrator, voicing the spy's tirade at the Atheist Society's annual meeting, Chapter 12 (p. 120)",
      analysis:
        "Desai slips into the spy's own pompous voice here, and the grand phrases, “precisely” and “the progress of this nation”, reveal his self-importance and wounded pride. His argument against superstition is not foolish in itself, which is the subtlety: Desai mocks the man more than the idea, and his fury soon becomes as irrational as the devotion he despises.",
    },
    {
      text: 'His mother, the monkeys and himself, he thought, they were a band together.',
      where: 'Sampath, as Kulfi brings his dinner, Chapter 14 (p. 128)',
      analysis:
        "Sampath's feeling of tenderness links the outsiders: a mother the town calls mad, a troupe of thieving monkeys and a runaway clerk. “A band” suggests loyalty and rebellion, almost a gang. It shows where his real bonds lie, not with his father or the pilgrims, and it explains why he will not abandon the monkeys when the town turns on them.",
    },
    {
      text: 'Sampath himself was forgotten in the fray',
      where: 'The narrator, as Shahkot divides over the monkeys, Chapter 18 (p. 158)',
      analysis:
        "The supposed centre of the story has become irrelevant to it. The sentence goes on to compare his name to a ping-pong ball knocked between the factions, an image of pointless back-and-forth. Desai is satirising public controversy: people fight over a symbol while ignoring the person, and Sampath's disappearance soon makes that literal.",
    },
    {
      text: 'What did we get rid of the British for?',
      where:
        'Mr Gupta to the new District Collector, reporting what he told the cook, Chapter 20 (p. 169)',
      analysis:
        "Mr Gupta has refused to let the cook serve cutlets with caramel custard. The rhetorical question inflates a menu into a statement about independence, and the comedy lies in the mismatch. It reminds the reader that Shahkot's officials sit inside a system inherited from the Raj, still arguing with its habits in small ways while keeping its structures.",
    },
    {
      text: 'This impersonal darkness could be comforting as no human attention ever was.',
      where: "The narrator on Sampath's last night in the tree, Chapter 25 (p. 203)",
      analysis:
        'On the eve of the monkey hunt Sampath finds peace in the dark, and the sentence sums up his whole journey: people, however loving, press on him, while the impersonal world does not. The line is quiet and serious, a pause before the farce of the final morning, and it prepares for an ending in which he seems to leave human life altogether.',
    },
    {
      text: 'On one side was a brown mark, rather like a birthmark',
      where: 'The narrator, on the guava left in the empty tree, Chapter 25 (p. 207)',
      analysis:
        "The mark links the novel's last page to its first, where Sampath was born with a brown birthmark on his cheek. “Rather like” is carefully tentative: Desai hints that Sampath has become the fruit he loved without ever saying so, and leaves the reader to decide whether this is a miracle, a disappearance or a joke on everyone who wanted him.",
    },
  ],

  extracts: [
    {
      title: 'The monsoon breaks and Sampath is born',
      where: 'Chapter 1',
      pointer:
        'From “as Kulfi was at the bedroom window” when a shadow falls across the sun (p. 8), to the family celebrating by the light of “a roomful of candles” at the end of the chapter (p. 13).',
      summary:
        'Kulfi, watching from her window, sees the afternoon darken as the long-awaited monsoon arrives. Children leap about in the streets in excitement, the rain pours down, and Kulfi leans out into it while the neighbours slam their windows. As the storm rises Sampath is born, with a brown birthmark on his cheek, and at that moment a crate of Red Cross supplies dropped by a Swedish relief plane, confused by the storm, crashes into the street outside. The delighted family name him for good fortune and celebrate by candlelight, because the electricity has, of course, gone.',
      annotations: [
        {
          phrase: 'the white-lit afternoon deepened into the colour of old parchment',
          note: 'The change of light is described in colours, from white to the brown of old paper, so the monsoon feels ancient and almost holy, as if a story is being written.',
        },
        {
          phrase: 'the dark heart of the monsoon',
          note: 'Personification gives the storm a heart. Kulfi stretches further and further out of the window into it until she feels she might turn to storm herself, and at that moment Sampath kicks inside her: he is born, in effect, from the centre of a natural force, which the town will read as a sign.',
        },
        {
          phrase: 'triumphantly and indisputably male',
          note: 'The comic climax of the chapter is a boy, celebrated for his sex above all. The phrase is funny and critical at once, and it sets up the family pride that Sampath will disappoint.',
        },
      ],
      question: 'How does Desai make the moment of Sampath’s birth both dramatic and comic?',
    },
    {
      title: 'The bride in the tree, and the secrets',
      where: 'Chapter 7',
      pointer:
        'From the bus full of singing pilgrims that “veered off the road like a crazy beetle” with the would-be bride (p. 59), to Sampath calling out Mr Singh’s and Mrs Chopra’s secrets (p. 66).',
      summary:
        "Taking a holy man's advice, the Chawlas have found Sampath a bride, and she arrives by bus with her family and a crowd of pilgrims. The pilgrims raise her, rigid and unwilling, into the guava tree in her layers of shiny cloth. When she touches his toe Sampath leaps up in horror, and she loses her balance and falls. The crowd presses in, and, desperate for them to leave him alone, Sampath shouts out secrets he once read in their letters, which they take as proof of supernatural powers.",
      annotations: [
        {
          phrase: 'She was encased in layers of shiny material, like a large, expensive toffee.',
          note: 'The simile turns the bride into a wrapped sweet, a comic image of how she is being presented to Sampath like a gift or a purchase in an arranged marriage.',
        },
        {
          phrase: 'she landed with a dull thump upon the ground',
          note: 'The flat, heavy sound of “dull thump” is pure slapstick, and it brings the romantic hopes of both families down to earth in one physical joke.',
        },
        {
          phrase: 'The signs for marriage were not auspicious.',
          note: 'Understatement: the narrator uses the solemn language of astrology for a woman who has just fallen out of a tree, mocking the families’ faith in signs.',
        },
        {
          phrase: 'Is your jewellery still safely buried beneath the tulsi plant?',
          note: 'The question is the hinge of the plot. Secrets gained by snooping are taken as second sight, and the frightened young man becomes a holy man.',
        },
      ],
      question: 'How does Desai make this such an entertaining and important moment in the novel?',
    },
    {
      title: 'The empty tree',
      where: 'Chapter 25, the novel’s final pages',
      pointer:
        'From Mr Chawla shouting up into the guava tree for his son, only to find that “The tree was empty.” (p. 207), to the last sentence of the novel (p. 209).',
      summary:
        'On the morning of the monkey hunt, with the army, the officials and the crowds converging on the orchard, Mr Chawla shouts up into the tree for Sampath and finds him gone. Where he sat there is only a single large guava, bigger than the rest and surrounded by the langurs, with a brown mark on one side like a birthmark. Before Ammaji can seize it the Cinema Monkey takes the fruit and bounds away, the troupe following, until the monkeys vanish towards the mountain top. In the stillness a crack, a howl and a watery splash are heard from the orchard, and attention turns to Kulfi’s bubbling pot, above which the spy had climbed, and the broken branch hanging over it.',
      annotations: [
        {
          phrase: 'The tree was empty.',
          note: 'A four-word sentence stops the farce dead. After chapters of noise and crowding, the plainest possible statement delivers the novel’s great surprise.',
        },
        {
          phrase: 'On one side was a brown mark, rather like a birthmark',
          note: 'The birthmark from Chapter 1 returns on the fruit, closing the circle of the novel while the cautious “rather like” refuses to confirm what has happened.',
        },
        {
          phrase: 'calm-eyed and wise',
          note: 'The words usually given to a holy man describe the Cinema Monkey, who carries the guava away. The animal, not the crowd, behaves like a true disciple.',
        },
        {
          phrase: 'Gingerly, they approached the bubbling cauldron.',
          note: 'The novel ends on suspense and dark comedy rather than explanation. The sounds and the broken branch imply the spy’s fate without stating it, and the reader is left to finish the story.',
        },
      ],
      question: 'Explore how Desai makes the ending of the novel so surprising and memorable.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Satirical juxtaposition and bathos',
      example:
        'The newspaper column that introduces Sampath to the world in Chapter 7 sits beside news of a scarcity of groundnuts, an epidemic of tree frogs and a rumour about Coca-Cola. Kulfi offers an egg and Sampath demands his freedom.',
      effect:
        'Placing the grand beside the trivial deflates both. Desai uses it to mock the town’s sense of proportion, and to smuggle serious ideas, such as Sampath’s longing for freedom, inside jokes, so the reader laughs first and thinks afterwards.',
    },
    {
      technique: 'Mock proverbs and aphorisms',
      example:
        'Sampath’s answers sound like ancient wisdom but are about food, and by Chapter 21 the crowd is chanting them as slogans: “Dab your mouth with honey and you will get plenty of flies” and “Many a pickle makes a mickle”.',
      effect:
        'The sayings have the rhythm of proverbs, so listeners hear depth in them. The second is a comic garbling of the old Scots proverb about a mickle making a muckle, and the critic Amitava Kumar noted that Desai took some of these sayings from Bhargava’s standard dictionary of Hindi. Either way, Desai shows how easily form is mistaken for meaning, and how words escape their speaker to serve crowds and causes.',
    },
    {
      technique: 'Free indirect discourse',
      example:
        'The narration slips into characters’ own voices: Mr Chawla’s thought that “unfathomable wisdom possessed unfathomable bank accounts” (Chapter 8), or the spy’s conviction that people like Sampath obstruct the nation’s progress (Chapter 12).',
      effect:
        'We hear each character’s logic from the inside without the narrator endorsing it, so their greed or pomposity condemns itself. The repetition of “unfathomable” turns spiritual awe into a bank balance in a single sentence.',
    },
    {
      technique: 'Sensory imagery and lists',
      example:
        'Kulfi’s pregnancy cravings in Chapter 1 pour out in lists of vegetables, spices and fruit, and her hunger is “like a big, prowling animal”. In Chapter 5 Sampath’s response to the guava his mother brings him is written as colour and taste at once: “a cool greenness” and “a mysterious wild sweetness”.',
      effect:
        'The abundance of taste, smell and colour makes hunger and beauty physical. It aligns the reader with Kulfi and Sampath, the two characters who experience the world most intensely, and makes their dull surroundings feel even more confining.',
    },
    {
      technique: 'Simile for comic deflation',
      example:
        'The bride in the tree is dressed “like a large, expensive toffee” (Chapter 7); Sampath scolds his hung-over monkeys “like a fond parent trying hard to be disapproving” (Chapter 15).',
      effect:
        'Homely comparisons pull solemn moments, a marriage, a holy man’s rebuke, down to everyday life. The second simile also reveals Sampath’s affection: he treats the monkeys as the family he actually wants.',
    },
    {
      technique: 'The storyteller’s voice and direct address',
      example:
        'When the family leave for another wedding in Chapter 6, the narrator adds an aside, “for it was the wedding season, you remember”; at the moment of the guava’s strange effect in Chapter 5 the narrator asks “How do such things happen?”',
      effect:
        'The narrator talks to the reader like a teller of folk tales, sharing the joke and inviting wonder. It gives the novel the feel of a fable and makes the impossible ending easier to accept, since the voice never claimed to be strictly realistic.',
    },
    {
      technique: 'Pathetic fallacy and symbolic weather',
      example:
        'Chapter 1 opens with heat that has “enveloped the whole of Shahkot in a murky yellow haze”, and the drought breaks in the storm of Sampath’s birth.',
      effect:
        'The weather mirrors the town’s state: stifled, then released. Linking the rain to Sampath’s birth lets the town, and the reader, see him as a sign from the start, which the rest of the novel both mocks and half believes.',
    },
    {
      technique: 'Recurring symbol: the guava',
      example:
        'Kulfi gives Sampath a guava at the end of Chapter 5, he climbs a guava tree in Chapter 6, and in Chapter 25 a single guava with a mark “rather like a birthmark” is all that remains of him.',
      effect:
        'The fruit gathers meanings as the novel goes on: comfort from his mother, sweetness and escape, the natural world, and finally transformation. Tracking it is an effective way to write about the whole novel’s structure.',
    },
  ],

  structureForm: [
    {
      heading: 'Twenty-five short chapters and a twenty-year leap',
      body: 'The novel is told in order in 25 short chapters. Chapter 1 covers the drought, Kulfi’s pregnancy and Sampath’s birth; Chapter 2 jumps twenty years, and from then on the action follows one unbroken stretch of time, from his sacking in the wedding season to the morning of 30 April. The short chapters suit comedy: each is a scene or a sketch, and many end on a punchline or a turn, such as the egg line that closes Chapter 5.',
    },
    {
      heading: 'An omniscient narrator and a crowded cast',
      body: 'The third-person narrator moves freely between minds: Sampath, Kulfi, Mr Chawla, Pinky, the spy, the Hungry Hop boy, the Brigadier, the Chief Medical Officer and the District Collector all get chapters or passages of their own. In the second half Desai cuts rapidly between them, most comically in Chapter 15, when the officials spend a morning failing to reach one another, and in Chapter 24, when their convoy is held up on the way to the orchard. The widening cast is part of the meaning: as the story spreads to more people, Sampath shrinks within it, until he is forgotten in the fray.',
    },
    {
      heading: 'A circular shape',
      body: 'The novel begins with a birth marked by a brown birthmark and ends with a guava marked in the same way. It begins with a town waiting desperately for the monsoon and ends with a town rushing towards an orchard. The echo gives the book the neat shape of a fable and invites you to read Sampath’s life as one complete cycle, from the “dark heart of the monsoon” to the stillness of the orchard.',
    },
    {
      heading: 'A countdown to farce',
      body: 'From Chapter 21, when the District Collector agrees to Mr Chawla’s plan, every thread is tied to a single date, 30 April: the monkey hunt, the plan to bring Sampath down, Kulfi’s great feast and Pinky’s elopement. The last chapters converge on the orchard like the climax of a stage farce, with characters colliding on the roads. Desai builds maximum noise so that the final silence of the empty tree lands with force.',
    },
    {
      heading: 'Fable, satire and magic realism',
      body: 'The novel mixes realistic social comedy with events that cannot happen: a guava that seems to send a strange force into Sampath, a man who becomes a fruit. Reviewers called this magic realism; Desai preferred to say it drew on Indian reality and tradition. Its folk-tale features, animal characters, a wise fool, a transformation, a storyteller’s asides, make it read like a fable, while its targets, officials, families, gurus and money, make it a satire. The best answers treat both sides of the form as deliberate.',
    },
    {
      heading: 'An open ending',
      body: 'The narrator refuses to explain. On Sampath’s last night the narrator wonders whether his calm comes “From exhaustion, or resignation, or faith in some new inspiration, who knows?”, and the novel’s final sentence leaves the onlookers edging towards Kulfi’s pot. Desai’s mother said the ending took her completely by surprise. Nothing is confirmed: Sampath simply is not there, and the spy’s fate is left to a crack, a howl, a splash and a broken branch. The ending asks you to decide what kind of story you have read.',
    },
  ],

  vocabulary: [
    {
      term: 'Monsoon',
      definition:
        'The seasonal wind that brings heavy summer rains to India. Its late arrival causes the drought of Chapter 1, and its breaking coincides with Sampath’s birth.',
    },
    {
      term: 'Guava',
      definition:
        'A tropical fruit with a knobbly green skin and pale, sweet flesh. It is the novel’s central symbol of sweetness, comfort and transformation.',
    },
    {
      term: 'Langur',
      definition:
        'A long-tailed monkey common in India, often linked with the god Hanuman. The monkeys that move into Sampath’s tree are langurs.',
    },
    {
      term: 'Baba',
      definition:
        'A respectful name for a holy man or elder. The pilgrims call Sampath the Monkey Baba or the Tree Baba.',
    },
    {
      term: 'Hermit',
      definition:
        'Someone who withdraws from society to live alone, often for religious reasons. The town decides Sampath is one because he lives in a tree and refuses a bride.',
    },
    {
      term: 'Hanuman',
      definition:
        'The monkey god of Hindu tradition, the loyal ally of Rama in the epic the Ramayana. His worship is why the town cannot agree on what to do with the monkeys.',
    },
    {
      term: 'Tulsi',
      definition:
        'Holy basil, a plant sacred in Hindu homes. Mr Singh hid his jewellery beneath one, and Sampath’s knowledge of it makes the crowd believe in him.',
    },
    {
      term: 'Dowry',
      definition:
        'Money or goods given by a bride’s family on her marriage. Kulfi bribes the market sellers with pieces of hers, and the list of qualities wanted in Sampath’s bride asks, if she is dark, for a television, a refrigerator or even a scooter.',
    },
    {
      term: 'Auspicious',
      definition:
        'Favourable, promising good fortune, especially according to signs or the stars. Used with comic solemnity when the bride falls from the tree.',
    },
    {
      term: 'District Collector',
      definition:
        'The senior government official in charge of an Indian district, a post dating from British rule. The new one arrives from Delhi in Chapter 20.',
    },
    {
      term: 'Cantonment',
      definition:
        'A permanent military station or army quarter. On the morning of the monkey hunt the Brigadier’s soldiers gather at the barracks in the cantonment area.',
    },
    {
      term: 'The Raj',
      definition:
        'British rule in India, which ended with independence in 1947. Its leftovers, from official posts to a cook who makes cutlets and custard, appear throughout the novel.',
    },
    {
      term: 'Adage',
      definition:
        'A traditional saying expressing a general truth. The crowd shouts Sampath’s adages as slogans, and the District Collector is puzzled by them.',
    },
    {
      term: 'Satire',
      definition:
        'Writing that uses humour, exaggeration and irony to expose foolishness or wrongdoing. Desai satirises families, officials, gurus and the money made from faith.',
    },
    {
      term: 'Bathos',
      definition:
        'A sudden drop from the serious or grand to the trivial, used for comic effect, as when Sampath’s demand for freedom answers an offer of an egg.',
    },
    {
      term: 'Wise fool',
      definition:
        'A character who seems foolish but reveals truths the sensible characters miss. Critics often describe Sampath this way.',
    },
    {
      term: 'Free indirect discourse',
      definition:
        'Third-person narration that takes on a character’s own words and attitudes without quotation marks, so we hear their thinking from inside. Desai uses it to let characters expose themselves.',
    },
    {
      term: 'Magic realism',
      definition:
        'Fiction in which impossible events are told in the same matter-of-fact way as ordinary ones. Reviewers applied the label to this novel; Desai herself resisted it.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read the passage in Chapter 7 from the arrival of the bus carrying the bride and the pilgrims to the moment Sampath calls out Mrs Chopra’s secret. How does Desai make this such an entertaining and important moment in the novel?',
        skill:
          'Close reading of a printed passage: language, structure and effect, with a personal response',
        guidance: [
          'Open with a clear line of argument: for example, that the passage is slapstick on the surface but is also the moment the town invents its holy man, so the comedy has consequences.',
          'Analyse the presentation of the bride: the toffee simile, the pilgrims pushing her into the tree, and her fall with “a dull thump”. Say what this suggests about arranged marriage as the families practise it.',
          'Look at Sampath’s panic and what he wants: to be left alone. Show how his shouted secrets come from desperation, not a plan.',
          'Analyse the crowd’s response, Mr Singh turning pale and Mrs Chopra gasping, and explain how belief grows from a trick.',
          'Comment on the narrator’s tone, for example the mock-solemn line about signs for marriage not being auspicious.',
          'End by linking the passage to the whole novel: the newspaper report that follows, Mr Chawla’s business, and the question of whether Sampath is a fraud.',
        ],
      },
      {
        question:
          'Read the final pages of the novel in Chapter 25, from the discovery that the tree is empty to the last sentence. Explore how Desai makes this such a surprising and memorable ending.',
        skill:
          'Close reading of a printed passage: language, structure and effect, with a personal response',
        guidance: [
          'Start with your view of what the ending does, for example that it gives Sampath the escape he wanted while refusing to explain it.',
          'Analyse the contrast between the noise of the crowds and soldiers and the short, flat sentence that reveals the empty tree.',
          'Explore the guava with its brown mark and link it to the birthmark in Chapter 1, explaining the circular structure.',
          'Discuss the Cinema Monkey taking the fruit “calm-eyed and wise”, and why Desai gives the last act of devotion to an animal.',
          'Consider the final sounds and image, the crack, the howl, the splash and the broken branch over the pot: implied rather than stated, comic and dark at once.',
          'Offer more than one reading: a miracle, a satire on everyone who wanted to use Sampath, or a fable of becoming one with nature, and say which you find most convincing.',
        ],
      },
      {
        question: 'How does Desai make Mr Chawla such a memorable character?',
        skill:
          'Whole-text essay: an argued personal response supported by knowledge of the whole novel',
        guidance: [
          'Give a direct answer in your first sentence, for example that he is memorable because he is both the novel’s biggest comic target and, at moments, its most human figure.',
          'Chapter 1 and Chapter 3: his lectures, his love of order, his fear of the “sticky humanness of things”, and his dismissal of other people’s silly schemes while offering his own.',
          'Chapter 7: his baffled attempts to get Sampath down, from doctors to a bride, and his complaint that Kulfi is the number one most strange mother in the world.',
          'Chapter 8 onwards: his realisation that Sampath might make the family’s fortune, and his management of the orchard as a business.',
          'His inconsistency with Pinky, and his plan to catch the monkeys and bring Sampath down on 30 April.',
          'End with his cry at the empty tree and decide whether the ending makes him more sympathetic or simply exposes him.',
        ],
      },
      {
        question: 'Explore the ways in which Desai presents faith and belief in the novel.',
        skill: 'Whole-text essay: themes, methods and an argued personal response',
        guidance: [
          'Set out your argument: for example, that Desai mocks both the believers and the sceptic, but leaves room for something genuine in Sampath.',
          'The making of the holy man in Chapter 7: secrets from letters taken as second sight, and the rejected bride taken as proof of holiness.',
          'The Sermon in the Guava Tree in Chapter 8: answers about fish curry interpreted as spiritual truth, and Miss Jyotsna’s conversion.',
          'The spy from the Atheist Society: his notebook, his furious speeches, and the way Sampath’s sayings take over his own thoughts.',
          'Religion and politics: the Hanuman Temple, the Monkey Protection Society and the town divided over sacred monkeys.',
          'Sampath’s own experience in the orchard and on his last night, and the unexplained ending. Conclude with your view of whether the novel is sceptical, sympathetic or deliberately undecided.',
        ],
      },
    ],
    tips: [
      'Use the published spelling, Hullabaloo, in your essay, even though the syllabus prints the title with a double L.',
      'The paper is closed-book, so learn a small number of short, flexible quotations that serve several themes: “a prison he had been born into”, “Sampath might make his family’s fortune”, “a band together” and the brown mark “rather like a birthmark” each work for three or four different questions.',
      'Write about the comedy as a method, not just a quality. Name what Desai is doing: bathos, slapstick, satire, mock proverbs, free indirect discourse. Then say what the joke reveals.',
      'Do not decide too quickly whether Sampath is a fraud. The strongest answers weigh the trick with the letters against the genuine peace he finds, and use the open ending as evidence that Desai wants the question left open.',
      'Remember the minor characters. Examiners reward answers that use the spy, the District Collector, the Brigadier or the Hungry Hop boy to show how the satire widens across the town.',
      'For a passage question, stay close to the printed words for most of the answer, then link outwards to the rest of the novel in two or three precise references, such as the birthmark in Chapter 1 or the business in Chapter 8.',
      'Check your quotations. Cambridge’s own specimen mark scheme prints the newspaper’s description of Sampath as “uncoupled” with unfathomable wisdom, but the novel says his “child-like ways” are “coupled with unfathomable wisdom”. And the monkeys in the tree are langurs.',
      'Keep context in its place: a sentence on holy men, on Hanuman or on officials inherited from the Raj is useful when it explains a scene, not as a separate history lesson.',
    ],
  },

  modelAnswer: {
    question: 'How does Desai make Mr Chawla such a memorable character?',
    paragraph:
      "Desai makes Mr Chawla memorable above all by letting him expose himself, since his confidence is always greater than his judgement. On the first page, after reading out the newspaper’s reports of rain-making schemes, he dismisses them, “It is too hot to fool about with Hungarian musicians”, yet he has himself proposed cutting and growing vegetation in elaborate patterns, so from the opening chapter we laugh at a man who cannot see that he is one of the fools. The same blindness drives the plot once Sampath is in the tree. The son over whom he wailed “What am I to do with this boy?” becomes, in one short, abrupt sentence, a business opportunity: “Sampath might make his family's fortune.” The word “fortune” is pointed, because at Sampath’s birth the family took his name to mean good fortune; Mr Chawla turns that blessing into bank accounts. Even his philosophy is a slogan, “Everybody can make something from nothing”, which sounds like wisdom but describes selling the same coconuts twice. Yet Desai does not make him a villain. His panic at the empty tree is real, and that mixture of greed, pomposity and helpless love is what makes him a character we recognise rather than a cartoon.",
    commentary: [
      'It answers the question in its first sentence with an argument (he is memorable because he exposes himself), not a description.',
      'Each quotation is short, exact and located, and each is followed by analysis of a specific word or technique, such as the irony of the Hungarian musicians and the echo of “fortune”.',
      'It moves across the whole novel, from Chapter 1 to Chapters 7, 8 and 10 and the ending, which shows secure knowledge of a text the student cannot take into the exam.',
      'It links character to structure and theme: the birth and the name, the business made of faith.',
      'It ends by qualifying its own argument, giving the alternative reading that he is also sympathetic, which is what turns a competent answer into a strong one.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1',
      title: 'A drought, a hunger and a birth',
      summary:
        'In a summer of drought Kulfi grows vast and ravenous, bribing the market sellers and drawing food on the walls. The monsoon breaks, Sampath is born with a birthmark, and a crate of relief supplies crashes into the street outside.',
      setting: 'The Chawlas’ small house in Shahkot, in drought and then storm',
      who: ['Kulfi', 'Mr Chawla', 'Ammaji', 'Sampath Chawla'],
      quote: 'her hunger was so fierce, it was like a big, prowling animal',
      themes: ['Nature and the senses', 'Family, marriage and women'],
      tension: 3,
      significance:
        'The town reads Sampath as lucky from the start, and the birthmark is planted for the final page.',
    },
    {
      where: 'Chapters 2 to 4',
      title: 'A clerk who reads the post',
      summary:
        'Twenty years later Sampath lies awake among his snoring family, is lectured by his father, and at the post office reads other people’s letters instead of sorting them.',
      setting: 'The crowded family room at night; the dusty post office',
      who: ['Sampath Chawla', 'Mr Chawla', 'Pinky', 'Miss Jyotsna', 'Mr Gupta', 'Mr D. P. S.'],
      themes: ['Freedom and escape', 'Officialdom and modern India'],
      tension: 2,
      significance:
        'The letters he reads here will later make him a holy man, and his misery explains the escape to come.',
    },
    {
      where: 'Chapter 5',
      title: 'The wedding, the fountain and the guava',
      summary:
        'At his boss’s daughter’s wedding Sampath dresses in finery, dances, climbs the fountain and drops his trousers. He is sacked, and his mother comforts him with a guava.',
      setting: 'Mr D. P. S.’s house during the wedding; the Chawlas’ rooftop',
      who: ['Sampath Chawla', 'Mr D. P. S.', 'Mr Chawla', 'Kulfi'],
      quote: 'a prison he had been born into',
      themes: ['Freedom and escape', 'Nature and the senses'],
      tension: 4,
      significance: 'Humiliation and the gift of a guava push Sampath to leave home.',
    },
    {
      where: 'Chapter 6',
      title: 'Escape to the orchard',
      summary:
        'While the family attend another wedding, Sampath catches the milk sellers’ bus out of town. Irritated by an old woman’s chatter, he leaps from the stalling bus and climbs a great guava tree in an old orchard, where he falls asleep, content.',
      setting: 'A crowded bus leaving Shahkot; an old guava orchard in the hills',
      who: ['Sampath Chawla'],
      quote: "This was the way of riches and this was a king's life",
      themes: ['Freedom and escape', 'Nature and the senses'],
      tension: 3,
      significance: 'The orchard begins as the paradise of stillness Sampath has always wanted.',
    },
    {
      where: 'Chapter 7',
      title: 'Come down: a doctor, a bride and secrets',
      summary:
        'The family try a doctor, remedies and a bride to get Sampath down. The bride falls from the tree, and Sampath shouts out secrets from people’s letters, which the crowd takes as second sight.',
      setting: 'Beneath the guava tree, surrounded by family and onlookers',
      who: ['Mr Chawla', 'Kulfi', 'Ammaji', 'Pinky', 'Dr Banerjee', 'Sampath Chawla'],
      quote: 'Is your jewellery still safely buried beneath the tulsi plant?',
      themes: ['Faith and credulity', 'Family, marriage and women'],
      tension: 4,
      significance:
        'A trick born of snooping creates the holy man, and the newspaper spreads the story.',
    },
    {
      where: 'Chapter 8',
      title: 'The Sermon in the Guava Tree',
      summary:
        'Mr Chawla sees a fortune, moves the family into the watchman’s shed and makes Sampath comfortable. Pilgrims gather for riddling answers, and Kulfi begins to cook in her new outdoor kitchen.',
      setting: 'The orchard, the watchman’s shed and Kulfi’s outdoor kitchen',
      who: ['Mr Chawla', 'Sampath Chawla', 'Miss Jyotsna', 'Mr Gupta', 'Kulfi'],
      quote: "Sampath might make his family's fortune.",
      themes: ['Money and the holy-man business', 'Faith and credulity'],
      tension: 2,
      significance:
        'Faith and money arrive in the orchard together, and Kulfi finds her own freedom.',
    },
    {
      where: 'Chapter 9',
      title: 'The Cinema Monkey and the dentures',
      summary:
        'On a trip to town, the Cinema Monkey snatches the ice cream in which Ammaji’s new dentures are stuck. The Hungry Hop boy rescues them, and Pinky falls for him.',
      setting: 'The bazaar outside the cinema, by the Kwality ice-cream van',
      who: ['Pinky', 'Ammaji', 'The Cinema Monkey', 'The Hungry Hop boy'],
      themes: ['Family, marriage and women'],
      tension: 2,
      significance:
        'Slapstick introduces both the monkey and the romance that will run to the final chapter.',
    },
    {
      where: 'Chapters 10 to 12',
      title: 'Business, a spy and the monkeys',
      summary:
        'Mr Chawla sells advertising and offerings, a spy from the Atheist Society starts taking notes, and the monkeys follow Pinky to the orchard and move into Sampath’s tree.',
      setting: 'The orchard, now a busy site of pilgrimage',
      who: [
        'Mr Chawla',
        'The spy',
        'Sampath Chawla',
        'The Cinema Monkey',
        'Pinky',
        'The Hungry Hop boy',
      ],
      quote: 'Everybody can make something from nothing',
      themes: ['Money and the holy-man business', 'Faith and credulity'],
      tension: 3,
      significance:
        'Every force that will overwhelm the orchard, money, scepticism and the monkeys, is now in place.',
    },
    {
      where: 'Chapters 13 to 15',
      title: 'Drunken monkeys and missing officials',
      summary:
        'The monkeys discover alcohol and run wild. Sampath forgives them, while the officials of Shahkot spend a morning failing to meet about the problem.',
      setting: 'The orchard and the offices of Shahkot’s officials',
      who: [
        'Sampath Chawla',
        'The Cinema Monkey',
        'Kulfi',
        'Mr Chawla',
        'The Chief Medical Officer',
        'Verma',
        'The Brigadier',
      ],
      quote: 'His mother, the monkeys and himself, he thought, they were a band together.',
      themes: ['Officialdom and modern India', 'Freedom and escape'],
      tension: 3,
      significance: 'The comedy widens from a family to a whole town and its government.',
    },
    {
      where: 'Chapters 16 to 19',
      title: 'A town split in two',
      summary:
        'Pinky pursues the Hungry Hop boy, Kulfi roams further for ingredients, and Shahkot divides between those who want the monkeys destroyed and those who want them protected.',
      setting: 'Shahkot’s streets and households, the forest and the orchard',
      who: [
        'Pinky',
        'The Hungry Hop boy',
        'Kulfi',
        'The spy',
        'Sampath Chawla',
        'Verma',
        'The Brigadier',
      ],
      quote: 'Sampath himself was forgotten in the fray',
      themes: ['Faith and credulity', 'Officialdom and modern India'],
      tension: 4,
      significance: 'The holy man becomes a mere symbol in other people’s argument.',
    },
    {
      where: 'Chapters 20 to 24',
      title: 'The District Collector’s plan',
      summary:
        'A young District Collector arrives from Delhi, and agrees to Mr Chawla’s plan to catch the monkeys and bring Sampath down on 30 April. Pinky plans to elope that morning.',
      setting: 'The District Collector’s office, the orchard and the crowded roads',
      who: [
        'The District Collector',
        'Mr Gupta',
        'Mr Chawla',
        'Sampath Chawla',
        'Pinky',
        'The Hungry Hop boy',
        'The Brigadier',
      ],
      quote: 'What did we get rid of the British for?',
      themes: ['Officialdom and modern India', 'Freedom and escape'],
      tension: 4,
      significance: 'Every plot is tied to a single date, and Sampath feels the trap closing.',
    },
    {
      where: 'Chapter 25',
      title: 'The empty tree',
      summary:
        'After a still night, the army and crowds reach the orchard and find the tree empty. A large marked guava remains, which the Cinema Monkey carries away, and a crack and a splash turn attention to Kulfi’s pot.',
      setting: 'The guava orchard at dawn on 30 April',
      who: ['Sampath Chawla', 'Mr Chawla', 'Ammaji', 'Kulfi', 'The Cinema Monkey', 'The spy'],
      quote: 'On one side was a brown mark, rather like a birthmark',
      themes: ['Nature and the senses', 'Freedom and escape'],
      tension: 5,
      significance:
        'The circle closes on the birthmark, and the novel refuses to explain what has happened.',
    },
  ],

  relationships: [
    {
      from: 'Kulfi',
      to: 'Sampath Chawla',
      kind: 'mother and son; kindred spirits',
      note: 'The only member of the family who understands why he climbs the tree, and who tells them to let him be. Both are drawn to beauty and feel trapped by ordinary life.',
    },
    {
      from: 'Mr Chawla',
      to: 'Sampath Chawla',
      kind: 'father and son',
      note: 'From lectures and despair to profit: the father who called his son a failure turns him into the family business, and panics when he vanishes.',
    },
    {
      from: 'Mr Chawla',
      to: 'Kulfi',
      kind: 'husband and wife',
      note: 'An arranged match between a man who loves order and a woman everyone calls strange. He can neither understand nor control her.',
    },
    {
      from: 'Ammaji',
      to: 'Kulfi',
      kind: 'mother-in-law and daughter-in-law',
      note: 'Ammaji arranged the marriage, persuading her reluctant son that Kulfi was a suitable bride, and then took over the household, keeping her own power in the home.',
    },
    {
      from: 'Pinky',
      to: 'Sampath Chawla',
      kind: 'sister and brother',
      note: 'First embarrassed by him and resentful at being dragged out to the orchard, she later, made generous by her own romance, offers to take him with her when she elopes. He will not climb down.',
    },
    {
      from: 'Pinky',
      to: 'The Hungry Hop boy',
      kind: 'pursuer and pursued; would-be lovers',
      note: 'She casts him as a film hero after the dentures rescue, bites his ear in frustration and plans to elope, then scorns him when he fails her.',
    },
    {
      from: 'The spy',
      to: 'Sampath Chawla',
      kind: 'debunker and holy man',
      note: 'He sets out to expose Sampath as a fraud and ends up with Sampath’s sayings running through his own head.',
    },
    {
      from: 'The spy',
      to: 'Kulfi',
      kind: 'watcher and watched',
      note: 'He follows her into the forest to discover what she cooks, and at the end is hiding in a tree above her pot.',
    },
    {
      from: 'Sampath Chawla',
      to: 'The Cinema Monkey',
      kind: 'companions',
      note: 'The monkeys are the friends Sampath chooses, and he forgives them everything. At the end the Cinema Monkey carries away the marked guava.',
    },
    {
      from: 'Miss Jyotsna',
      to: 'Sampath Chawla',
      kind: 'former colleague turned devotee',
      note: 'She knew him as a hopeless clerk and becomes one of his most faithful followers, a sign of how quickly the town believes.',
    },
    {
      from: 'Mr Gupta',
      to: 'The District Collector',
      kind: 'secretary and official',
      note: 'The former postal clerk becomes secretary to the new District Collector and guides him through the crisis.',
    },
    {
      from: 'Mr Chawla',
      to: 'The District Collector',
      kind: 'petitioner and official',
      note: 'Mr Chawla’s plan to catch the monkeys and bring Sampath down is the one the District Collector finally adopts.',
    },
  ],

  compareWith: [
    {
      title: 'Fire on the Mountain',
      href: '/resources/english-literature/caie/fire-on-the-mountain',
      reason:
        'By Kiran Desai’s mother, Anita Desai, and on the same Cambridge prose list: another novel about characters who long for solitude away from family life, and who are drawn to the wild hill country around them.',
    },
    {
      title: 'To Kill a Mockingbird',
      href: '/revision/texts/to-kill-a-mockingbird',
      reason:
        'Also on the Cambridge prose list: a small town whose gossip builds a legend around one unusual person, as Shahkot does around Sampath.',
    },
    {
      title: 'Things Fall Apart',
      href: '/revision/texts/things-fall-apart',
      reason:
        'Also on the Cambridge prose list: a community’s beliefs, and the institutions that arrive with change, shown through the fate of one man who does not fit.',
    },
  ],

  contentGuidance: [
    'mythological_religious',
    'supernatural',
    'mental_health',
    'addiction',
    'violence',
    'intimate_relationships',
    'discrimination',
  ],

  quotesFromElsewhere: [
    'Hullaballoo',
    'lush and intensely imagined',
    'unlikely, pretty, empty India',
    'uncoupled',
  ],

  sources: [
    {
      label:
        'Google Books search-within-volume, Grove Press paperback (2009 reprint, ISBN 9780802144508): quotations and prose details located word for word, with page numbers; re-checked in a second pass on 26 September 2026',
      url: 'https://books.google.com/books?id=VVV9qZiEDC0C',
    },
    {
      label:
        'Google Books search-within-volume, Faber & Faber ebook (2014, ISBN 9780571316151): quotations confirmed in a second edition, chapter numbers taken from the chapter figures in its snippets, 25 chapters from its contents list, and the Rushdie phrase from its front cover',
      url: 'https://books.google.com/books?id=bV5aAwAAQBAJ',
    },
    {
      label:
        'BookBrowse, publisher’s excerpt of Chapter One, pages 1 and 2 (“Copyright Kiran Desai 1998 ... Grove Atlantic”): the drought, the monsoon proposals, Kulfi’s hunger',
      url: 'https://www.bookbrowse.com/excerpts/index.cfm/book_number/317/hullabaloo-in-the-guava-orchard',
    },
    {
      label:
        'Curio.sg passage-based question papers 1 to 3 on Chapter 1: used only to corroborate the wording and order of Chapter 1',
      url: 'https://curio.sg/wp-content/uploads/2021/06/PBQ-Test-3_-Hullabaloo-in-the-Guava-Orchard-Chapter-1.pdf',
    },
    {
      label: 'Grove Atlantic publisher page: the premise, the Betty Trask Award, 1998 publication',
      url: 'https://groveatlantic.com/book/hullabaloo-in-the-guava-orchard/',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2026 (Version 2): the set-text list spelling "Hullaballoo", Paper 1 closed-book, a choice of two questions on each text, passages printed, any unabridged edition',
      url: 'https://www.cambridgeinternational.org/Images/697163-2026-syllabus.pdf',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2027 (Version 2): the same prose list and spelling',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
    },
    {
      label:
        'Cambridge 0475 specimen Paper 1 for examination from 2028 (open text): the published spelling, and two sample questions on the novel',
      url: 'https://www.cambridgeinternational.org/Images/742911-2028-specimen-paper-1.pdf',
    },
    {
      label:
        'Cambridge 0475 specimen Paper 1 mark scheme, 2028: indicative content for the two sample questions, including the misquotation "uncoupled" corrected in this guide',
      url: 'https://www.cambridgeinternational.org/Images/742907-2028-specimen-paper-1-mark-scheme.pdf',
    },
    {
      label:
        'Cambridge 0475 Paper 11, May/June 2025 (via PapaCambridge): the wording and layout of prose passage and essay questions, used as the model for the exam practice',
      url: 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0475_s25_qp_11.pdf',
    },
    {
      label:
        'Encyclopedia.com, Gale Novels for Students entry on the novel (2009): chapter-by-chapter summary, characters, context, critical overview, and extracts from interviews with Kiran and Anita Desai (Philip Marchand, Toronto Star, 10 June 1998; Elizabeth Renzetti) and from Amitava Kumar, "Louder Than Bombs", Transition 79 (1999)',
      url: 'https://www.encyclopedia.com/arts/educational-magazines/hullabaloo-guava-orchard',
    },
    {
      label:
        'The Booker Prizes, author page for Kiran Desai: born in New Delhi, educated in India, England and the US, The Inheritance of Loss (2006 winner), The Loneliness of Sonia and Sunny (2025 shortlist)',
      url: 'https://thebookerprizes.com/the-booker-library/authors/kiran-desai',
    },
    {
      label:
        'Al Jazeera, "Indian novelist Desai wins Booker", 11 October 2006: aged 35, the youngest woman to win at that time',
      url: 'https://www.aljazeera.com/news/2006/10/11/indian-novelist-desai-wins-booker',
    },
    {
      label:
        'Wikipedia, Hullabaloo in the Guava Orchard: 1998, Atlantic Monthly Press, Betty Trask Award',
      url: 'https://en.wikipedia.org/wiki/Hullabaloo_in_the_Guava_Orchard',
    },
    {
      label:
        'Internet Archive metadata for the Faber first edition (London, 1998, ISBN 0571194877): publisher, and the text-file size used for the word estimate',
      url: 'https://archive.org/details/hullabalooinguav0000desai',
    },
    {
      label:
        'Wikipedia, Coca-Cola India: withdrew in 1977, returned in October 1993 (for the dating clue in Chapter 7)',
      url: 'https://en.wikipedia.org/wiki/Coca-Cola_India',
    },
    {
      label:
        'EBSCO Research Starters, Fire on the Mountain: Nanda Kaul’s solitude in Kasauli and Raka (for the comparison line only)',
      url: 'https://www.ebsco.com/research-starters/literature-and-writing/fire-mountain-anita-desai',
    },
  ],
}
