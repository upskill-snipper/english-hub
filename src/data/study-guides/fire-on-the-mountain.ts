import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Fire on the Mountain, Anita Desai (1977). A COMPLETE guide: this file becomes
 * the text's whole page, replacing the old hand-built page at
 * /resources/english-literature/caie/fire-on-the-mountain.
 *
 * THE NOVEL IS IN COPYRIGHT and no licensed copy is held here, so the guide test
 * cannot check these quotations. Every quotation below was checked on
 * 26 September 2026 through Google Books' search-within-volume (snippets only,
 * nothing stored) in two scans that share the same pagination: the Penguin
 * paperback (King Penguin, ISBN 014011906X, 145 pages), whose page numbers the
 * guide gives, and the Allied Publishers edition (ISBN 8177648993). Each
 * quotation was searched as an exact phrase and found; the one a line-end
 * hyphen splits in the scan (mathema-tics, p. 145) was read in the snippet
 * text instead. Because the two scans
 * are of one typesetting they are not fully independent witnesses, so a third
 * check was used where possible: the passages Cambridge itself printed in
 * 0475 Paper 1 in 2025 and 2026, whose opening and closing lines survive in
 * the published papers, and the Kirkus review, which quotes Raka's last words.
 * Part and chapter numbers follow Cambridge's labels ("Part 2, Chapter 18"),
 * cross-checked against chapter headings found in the snippets.
 *
 * WHAT WAS CHECKED AND DROPPED OR CORRECTED, so the next editor does not
 * reintroduce it. The old page here quoted, among others:
 * - "She wanted nothing. She wanted no one." Not in the novel. The line is
 *   "She wanted no one and nothing else" (Part 1, Chapter 1, p. 3).
 * - "Look, Nana, I have set the forest on fire." The novel reads "Nani". And
 *   Raka's words are NOT the last line: the novel ends on the flames in the
 *   ravine and the black smoke over the mountain (a sentence that begins at the
 *   foot of p. 145 and ends on the unnumbered final page).
 *
 * FACT-CHECK, 26 September 2026 (second pass). Every quotation was searched
 * again, independently, in the Internet Archive full-text index of three scans
 * (Penguin 1981, Allied 1977, Harper & Row 1977) and in Google Books, with page
 * and chapter placed from the chapter headings found in the snippets. Fixed:
 * the ending pointer's page, the telephone scene (Nanda Kaul thinks the caller
 * CANNOT be Ila Das), "grasshopper child" (the text says Raka is "no longer"
 * it), the Chapter 17 letter scene, Kirkus's verdict, and several paraphrases.
 * - "She had spent a lifetime, exposed, to eyes that cared nothing for her",
 *   "one of those people who would be an observer all her life", "the droning
 *   ... of Ila Das" and "Don't you remember how he humiliated you?" None could
 *   be found in either scan. None is used.
 * - The old page described a "Part 4". There are three parts.
 * - The Vice-Chancellor's affair with Miss David is not something Ila Das
 *   "exposes" at tea. Ila mentions Miss David only as a badminton player; the
 *   affair is revealed in Nanda Kaul's own thoughts on the final page.
 * - The songs Ila Das sings at tea (Part 3, Chapter 4) are song lyrics and are
 *   not quoted, by the site's rule. They are described instead.
 * - Whether Nanda Kaul dies at the end is not stated in the text. The guide
 *   gives it as the common reading, never as fact.
 */
export const guide: StudyGuide = {
  slug: 'fire-on-the-mountain',
  title: 'Fire on the Mountain',
  author: 'Anita Desai',
  form: 'novella',
  scope:
    'The whole novel (1977), a short novel in three parts: Part 1, Nanda Kaul at Carignano (ten chapters); Part 2, Raka comes to Carignano; and Part 3, Ila Das leaves Carignano (thirteen chapters). The chapters are numbered afresh in each part. It is set for Cambridge IGCSE Literature in English (0475), Paper 1 Section B (Prose), for examination in 2026 and 2027. Paper 1 is closed-book: you may not take the novel into the exam room. There is a choice of two questions on each text, and in every 2025 and 2026 paper checked for this guide one was on a passage printed in the paper and the other an essay on the whole novel. Cambridge labels its passages by part and chapter, for example (from Part 2, Chapter 18), and this guide does the same. Page numbers are to the Penguin paperback (145 numbered pages), which the Allied Publishers edition sold in India matches page for page; other editions may be paginated differently, so use the part and chapter to find a moment in your own copy.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Anita Desai 1977. First published in Great Britain by William Heinemann Ltd and in the United States by Harper & Row, 1977; published in Penguin Books from 1981. Short quotations are used for the purposes of criticism and review.',
  },
  workLength: {
    words: 45000,
    basis:
      'Estimated, not counted: no licensed copy is held to count. The Penguin paperback prints the novel on pages 1 to 145 and one unnumbered final page, with three part-title pages, so about 140 pages of text, and a full page of that setting carries roughly 300 to 350 words, which puts the novel in the region of 45,000 words. Any length above 3,000 words puts it under the long-work limit, so the estimate cannot loosen the quotation limits.',
  },

  overview: {
    summary: [
      "Nanda Kaul, the widow of a university Vice-Chancellor, spent her married life running a large, crowded household in a university town in Punjab. Now old, she lives alone with her cook, Ram Lal, at Carignano, a house built for a British colonel's family in 1843 on a ridge above the hill town of Kasauli, looking down a gorge to the plains. She wants nothing more from anyone. The novel opens with her watching the postman climb the road towards her house and willing him not to stop.",
      "He brings a letter. Her great-granddaughter Raka, still weak after typhoid, is being sent to Carignano for the summer while Raka's mother Tara, whose marriage to a diplomat has broken her health, follows him to a new posting in Geneva. Raka turns out to be as solitary as Nanda Kaul pretends to be. She wants nothing from her great-grandmother and spends her days alone in the ravine, among burnt trees, rubbish and the smoke of the Pasteur Institute. Against every intention, Nanda Kaul begins to want the child's attention, and she wins it with stories of an adventurous childhood in Kashmir.",
      "In Part 3 Nanda Kaul's childhood friend Ila Das, poor, shrill and mocked in the street, comes to tea. She is now a government welfare officer in a village below Kasauli, trying to stop a villager, Preet Singh, marrying his seven-year-old daughter to an old man. On her way home at dusk Preet Singh attacks her and kills her. When the police telephone Carignano with the news, Nanda Kaul admits to herself everything the novel has kept hidden: her stories were lies, her husband loved another woman all his life, and she lives alone not by choice but because she was forced to. At that moment Raka comes to the window to tell her Nani that she has set the forest on fire.",
      'It is a short novel, and slow until its last pages, when everything happens at once. Desai is less interested in events than in minds: what Nanda Kaul tells herself, what Raka sees, what Ila Das will not admit. The best answers treat the quiet surface and the violent ending as one design. From the opening chapters Desai fills the landscape with fire, ruin and threat, so that the catastrophe, when it comes, feels both shocking and inevitable.',
    ],
  },

  context: [
    {
      heading: 'Anita Desai',
      body: 'Anita Desai was born in 1937 in Mussoorie, a hill town in northern India, to a Bengali father and a German mother, and grew up in Delhi, where she graduated in English from Miranda House, University of Delhi, in 1957. Fire on the Mountain was her fifth novel. Three later novels, Clear Light of Day (1980), In Custody (1984) and Fasting, Feasting (1999), were shortlisted for the Booker Prize. She went on to teach in the United States and is emerita John E. Burchard Professor of Humanities at the Massachusetts Institute of Technology. Her daughter Kiran Desai is also a novelist, and her Hullabaloo in the Guava Orchard is on the same Cambridge prose list: take care not to confuse the two writers in an essay.',
    },
    {
      heading: 'Publication, prizes and first reviews',
      body: "The novel was first published in 1977, in London by William Heinemann and in New York by Harper & Row, and came out in Penguin in 1981. It won the Royal Society of Literature's Winifred Holtby Memorial Prize and the 1978 award of India's National Academy of Letters, the Sahitya Akademi. Kirkus Reviews admired the writing more readily than the story. It called Desai an “arresting narrator” and Ila Das a “grotesque, Indian Blanche DuBois”, but judged that she could not draw full-sized feeling from so brief a book, which it read as two overlapping short stories, and that the final surprise could not give them a single dramatic shape. That complaint is worth answering in an essay, because the two stories, Nanda Kaul's and Ila Das's, are designed to meet on the final page.",
    },
    {
      heading: 'Kasauli, Carignano and the end of the Raj',
      body: "Kasauli is a small hill town in the Simla Hills, in what is now the Solan district of Himachal Pradesh, about 1,800 metres up. The British set up a military cantonment there in 1842, and like Simla it became a summer refuge from the heat of the plains. Desai builds that history into the house. In Part 1, Chapter 2 we learn that Carignano was built in 1843 by a Colonel Macdougall for a wife who could not bear the heat of the cantonment at Ambala, that seven children were buried one by one, and that a later occupant's ghost, or at least the smell of his pipe, was said to haunt the house. At Independence in 1947 the English residents leave, and the narrator mimics their own view of it: they were shipped home “virginity intact, honour saved, natives kept at bay”. Then comes a colonial cliché turned back on its users: “The little town went native.” Nanda Kaul lives in a relic of empire, below which the club still holds fancy-dress dances.",
    },
    {
      heading: 'The Pasteur Institute',
      body: "Kasauli is also home to a real research institute that began under British rule as the Pasteur Institute of India and makes vaccines. Desai sets it at the edge of Nanda Kaul's view. Its chimneys pierce the sky, whipped about by black smoke, and Ram Lal tells Raka that anyone bitten by a mad dog is taken there for injections, “fourteen, in the stomach” (Part 2, Chapter 3); from the ravine Raka imagines she can smell serum and dogs' brains boiling in vats. For Nanda Kaul the smoke spoils the view; Raka is fascinated by it. The institute brings disease, death and burning into the bare, quiet landscape Nanda Kaul values, and that is how Desai uses it: as a reminder, always in sight, that the mountain is not a refuge from the world.",
    },
    {
      heading: 'Women, marriage and the law',
      body: 'Every woman in the novel is defined by marriage and service. Nanda Kaul spent her married life as a hostess, and her husband wanted her dressed in silk, presiding over his long dining table and his guests. Her granddaughter Tara married a diplomat whose ill treatment of her, his affairs, “his drinking and brutality”, have reduced her to breakdown, yet her mother Asha urges her to give him another chance. Ila Das, educated with governesses and piano lessons, was left penniless when her brothers squandered the family fortune. In her village she fights child marriage, which Indian law had restricted since the Child Marriage Restraint Act of 1929; the minimum age for a girl was raised to eighteen in 1978, the year after the novel appeared. As Ila says, the law is on her side, yet the village priest undoes her work. Desai does not write a campaigning novel, but the pattern across three generations is hard to miss.',
    },
    {
      heading: 'Sei Shonagon, Hopkins and the literature of retreat',
      body: "Nanda Kaul's reading shows how she wants to see herself. In Part 1, Chapter 8 she reads The Pillow Book of Sei Shonagon, the notebook of a Japanese court lady written around the year 1000, in Ivan Morris's translation, and smiles at its advice on how the house of a woman who lives alone should look. In Part 2, Chapter 7, walking with Raka, she recites Gerard Manley Hopkins's short poem Heaven-Haven, spoken by a nun longing for a place “Where no storms come”. Both give her a literary model for retreat, one worldly and ironic, one religious. Desai lets us notice what Nanda Kaul does not: a storm does come, in Part 2, Chapter 15, and her haven is not proof against the world.",
    },
    {
      heading: 'When the story happens',
      body: "Desai gives no year. The story takes place over one hot, dry summer before the monsoon, some decades after Independence: Nanda Kaul came to live at Carignano only after her husband's death, and her granddaughter's husband is a diplomat with postings abroad. The drought matters to the plot. In Part 2, Chapter 12 Raka is told that there is not a drop of water to spare in the Simla Hills in June, and in Part 3 Ila Das wonders aloud when the monsoon will come. The whole mountain is waiting to burn.",
    },
  ],

  themes: [
    {
      title: 'Solitude and withdrawal',
      body: "The novel begins with a woman who wants to be left alone, and Desai at once asks what kind of solitude it is. Nanda Kaul insists that “Everything she wanted was here, at Carignano, in Kasauli” (Part 1, Chapter 1), but her stillness is practised, almost theatrical: in the afternoon she lies motionless and decides she will “imitate death, like a lizard” (Part 1, Chapter 7). Raka is the true solitary. The narrator draws the contrast exactly: Nanda Kaul is a recluse “out of vengeance for a long life of duty and obligation”, while Raka is one “by nature, by instinct” (Part 2, Chapter 4). One reading is that the novel honours Nanda Kaul's withdrawal as a hard-won escape from a life of service. A more convincing one, because the ending confirms it, is that her solitude is a wound dressed up as a choice: on the last page she admits that “She did not live here alone by choice”. Yet Raka's solitude is not simply natural either. The club scene in Part 2, Chapter 11 shows that she, too, is fleeing something.",
    },
    {
      title: 'Truth, lies and self-deception',
      body: "Almost everyone in the novel is protecting a story. Nanda Kaul performs dignity; Ila Das performs cheerfulness about a life of poverty and ridicule; Asha's letters perform concern. The central lies are Nanda Kaul's tales to Raka of an explorer father who went to Tibet and a childhood home full of animals, among them a caged bear and leopard cats. Desai lets us half-believe them, because Raka does: during the storm she listens to them rapt and silent (Part 2, Chapter 15). The novel also states its own suspicion of truth, in Nanda Kaul's thoughts: “Who wanted truth? Who could stand it? Nobody. Not even herself.” (Part 2, Chapter 17). The final page tears every story down at once: “It was all a lie, all.” Her father had never been to Tibet, and her husband had loved Miss David all his life. A strong essay notices that the lies are not simply condemned. They were, Nanda Kaul thinks, what helped her sleep at night, and Desai makes us feel their loss as a kind of death.",
    },
    {
      title: 'Women, duty and violence',
      body: "Desai shows three generations of women damaged by men and by the roles offered to them. Nanda Kaul served as a hostess in a house that was “his house, never hers” (Part 1, Chapter 5) while her husband kept up a lifelong affair. Tara has been broken by a husband's drinking and brutality, and Raka has watched it. Ila Das, the one woman who fights back in public, is jeered at in the street, undermined by the village priest, and finally attacked and killed by Preet Singh, the father whose seven-year-old daughter she tried to protect. Some readers see a feminist argument here; others warn that Desai is writing about temperament and loneliness, and that Ila is also a comic, even grotesque figure. The stronger reading holds both: the comedy of Ila Das is real, and it is exactly what makes the world laugh at her instead of protecting her. The violence that the quiet surface has hidden all along falls on the most defenceless woman in the book.",
    },
    {
      title: 'Fire and the ravaged landscape',
      body: 'Fire is in the novel long before the ending. The three pines at the gate stand “as of men going up in flames with their arms outstretched” (Part 1, Chapter 3); Ram Lal warns during a dust storm that “This is how forest fires do start” (Part 2, Chapter 6); a burnt house stands on the hill, its English owner said to have gone mad; a fire burns across the far hills at night (Part 2, Chapter 12); Ila Das jokes about forest fires at tea; and Raka pockets a box of matches. Raka is drawn to exactly these places: “It was the ravaged, destroyed and barren spaces in Kasauli that drew her” (Part 2, Chapter 18). Readings of her final fire differ. It can be read as destruction, the child repeating the violence she has seen; as purification, burning away a world of lies; or as a cry for attention, since she runs to her Nani to tell her. The first two are common. The third is worth arguing, because the text has her whispering, shivering, at the window, and for once reaching out to her great-grandmother.',
    },
    {
      title: 'Old age and the past',
      body: "Both old women live partly in the past, in opposite ways. Nanda Kaul has closed the door on hers, and tells Raka that one does not go back; Ila Das cannot stop reliving hers, and tells Nanda Kaul that visiting Carignano has brought the past back to life (Part 3, Chapter 10). Desai makes old age physical and unsentimental: the embrace of Nanda Kaul and Raka is “a sound of bones colliding” (Part 2, Chapter 1), Ila Das's dentures and top-knot are comic, and her walk home is slow and frightened. The town itself is old, full of Raj buildings and memories of dances and sherry parties. One reading is that the novel is simply melancholy about age. A sharper one is that it shows how the old are left to fend for themselves: Ila Das has no family to shelter her, and Nanda Kaul, for all her grandchildren, has chosen, or been driven, to have no one.",
    },
  ],

  characters: [
    {
      name: 'Nanda Kaul',
      role: 'Protagonist: an elderly widow living alone at Carignano',
      body: 'The widow of Mr Kaul, a Vice-Chancellor, and mother, grandmother and great-grandmother of a large family. She is “grey, tall and thin”, proud and severe, and wants only to be left alone. Desai lets us see her from inside through free indirect discourse, so we share her irritation at every intrusion, then gradually see through it. She resents Raka, then wants to possess her, and tells her glamorous lies about her childhood to hold her attention. Her treatment of Ila Das mixes loyalty with dread: she once found Ila a job through her husband, but lets pass the moment when she might have invited her to stay. The final page reveals her marriage was loveless and her solitude forced. The text does not say outright that she dies, but her hanging head and silence lead most readers to conclude that the shock has killed her. Cambridge has asked how far Desai makes us sympathise with her: the best answers argue both ways.',
    },
    {
      name: 'Raka',
      role: "Nanda Kaul's great-granddaughter, sent to Carignano to recover from typhoid",
      body: "A thin, silent child whose name means the moon, though she is “not round-faced, calm or radiant” (Part 2, Chapter 1). She never makes demands, wants only to be left alone, and spends her days in the ravine, the burnt house and other ruined places. She seeks out only Ram Lal, and his stories of ghosts and grander days. Desai links her strangeness to her family: her mother is often ill in bed, and at the club in Part 2, Chapter 11 a fancy-dress party brings back memories of her father coming home from parties and abusing her mother. She is captivated by Nanda Kaul's stories during the storm, but recoils from any open claim on her. At the end she takes a box of matches and sets the forest on fire. Whether she is likeable is a question Cambridge has asked; she is certainly sympathetic, and the novel suggests her detachment is as much damage as nature.",
    },
    {
      name: 'Ila Das',
      role: "Nanda Kaul's childhood friend, now a poor welfare officer",
      body: "Once the daughter of a wealthy, anglicised family, with governesses, a piano and a silver bicycle, Ila Das was left penniless when her brothers wasted the family fortune. Nanda Kaul had her husband create a post for her as a lecturer in Home Science, which kept her secure for a while; now she is a government welfare officer in a village below Kasauli, living alone in a hut. Her voice is shrill and screeching, and the narrator says Nanda Kaul knew “this voice was Ila Das's tragedy in life” (Part 1, Chapter 6). Schoolboys jeer at her, and at tea she is both hilarious and painful. She is also brave: she campaigns against child marriage and tells the grainseller who warns her about the dark, “I am always alone. I am never afraid.” (Part 3, Chapter 11). She is attacked and killed by Preet Singh on the way home. Her death is the novel's turning point, and it destroys Nanda Kaul's last illusions.",
    },
    {
      name: 'Ram Lal',
      role: 'The cook at Carignano',
      body: "Nanda Kaul's old cook and only companion, in tennis shoes a size too large, smoking biris by the kitchen door. He is the one adult Raka seeks out. He tells her about the Pasteur Institute and its injections, the burnt house, the club's grand past and the churails, ghosts whose feet are turned backwards. He frets about fire during the dust storm, chases the langurs and marches down to rescue Ila Das from the schoolboys. He answers the telephone on the last evening. Quietly, he is the novel's link between the house and the world outside it, and his ghost stories and warnings feed Raka's imagination.",
    },
    {
      name: 'Mr Kaul',
      role: "Nanda Kaul's late husband, the Vice-Chancellor",
      body: "Dead before the novel begins, and seen only in Nanda Kaul's memories and Ila Das's chatter. He ran a large university household in a town in Punjab and wanted his wife dressed in silk, entertaining his guests at the head of his table. Ila Das remembers him fondly: he gave her a job and hosted badminton parties. Only the final page tells the truth, in Nanda Kaul's thoughts: he did only enough to keep her quiet while he carried on “a lifelong affair with Miss David, the mathematics mistress”. His absence shapes the whole book.",
    },
    {
      name: 'Miss David',
      role: 'The mathematics mistress Mr Kaul loved',
      body: "Never seen. At tea Ila Das mentions her only as an ace badminton player who partnered the Vice-Chancellor. The final page reveals that he loved her all his life and did not marry her because she was a Christian. The reader learns about her at the same moment Nanda Kaul admits it, which is one of Desai's sharpest structural choices.",
    },
    {
      name: 'Asha',
      role: "Nanda Kaul's daughter, Raka's grandmother",
      body: "Introduced as “Asha, the beauty” (Part 1, Chapter 4), devoted to her long, glossy hair and smooth skin, and author of the meddling letters Nanda Kaul detests. She arranges Raka's stay at Carignano without really asking, and persuades her daughter Tara to go back to her husband. She is present only through letters, but her meddling sets the plot moving.",
    },
    {
      name: 'Tara',
      role: "Asha's daughter, Raka's mother",
      body: 'Married to a diplomat whose ill treatment, affairs and drinking have broken her health. She has had breakdowns, and in Part 2 a letter reports that she is in a nursing home in Geneva. Raka has known her mother ill for most of her life, often in bed. Tara never appears, but her suffering is the hidden reason Raka is at Carignano at all.',
    },
    {
      name: 'Rakesh',
      role: "Tara's husband, Raka's father",
      body: "A diplomat posted to Geneva. Asha's letter excuses him; the narrator does not, and Raka's nightmare in Part 2, Chapter 11 shows him coming home from a party and abusing her mother while Raka cowers in bed. He never appears in person, which makes his influence on Raka more disturbing, not less.",
    },
    {
      name: 'Preet Singh',
      role: "A villager in Ila Das's village",
      body: 'He plans to marry his daughter, who is only just seven, to an old widower with six children in exchange for a bit of land and two goats. Ila Das has argued with him in the potato fields, and that morning he cursed her in obscene words to the grainseller. On her walk home he attacks her, rapes her and kills her. Desai gives him almost no inner life; he is the brutality the rest of the novel has kept at a distance.',
    },
  ],

  keyQuotes: [
    {
      text: 'She wanted no one and nothing else',
      where: 'The narrator, of Nanda Kaul, Part 1, Chapter 1 (Penguin p. 3)',
      analysis:
        "The flat, absolute statement sets out Nanda Kaul's whole desire in the opening pages. The paired negatives “no one” and “nothing” sweep away people and possessions alike, but the rest of the novel tests whether such total refusal is strength or damage.",
    },
    {
      text: 'rolled a fat ball of irritation into the cool cave of her day',
      where: 'Part 1, Chapter 1 (Penguin p. 3): the postman approaching',
      analysis:
        "Desai turns a feeling into a physical object. Nanda Kaul's day is a “cool cave”, sealed and dark, and irritation is a heavy ball rolled into it. The metaphor shows how small an intrusion it takes to disturb her, and hints that her calm is fragile.",
    },
    {
      text: 'as of men going up in flames with their arms outstretched',
      where: 'Part 1, Chapter 3 (Penguin p. 12): the three pines by the gate',
      analysis:
        "The first fire image, seen through the postman's eyes. The pines are already charred and look like burning men with their arms thrown out, an image of agony placed at the entrance to Carignano. It foreshadows the final fire and hints that the house is not the haven it seems.",
    },
    {
      text: 'I want no more. I want nothing. Can I not be left with nothing?',
      where:
        "Nanda Kaul's thoughts, Part 1, Chapter 5 (Penguin p. 17), after reading Asha's letter",
      analysis:
        'Three short sentences, the repeated “I want”, then a question that sounds like a plea. The paradox of asking to be “left with nothing” suggests exhaustion rather than pride: a woman who has given everything and wants to give no more. It invites sympathy even at her coldest.',
    },
    {
      text: 'she would be a charred tree trunk in the forest',
      where: "Part 1, Chapter 7 (Penguin p. 23): Nanda Kaul's afternoon rest",
      analysis:
        "Lying still, Nanda Kaul imagines turning into dead things so that nothing can reach her. The chosen image is a burnt tree, which links her withdrawal to the novel's fire imagery and suggests that her peace is a kind of death, not life.",
    },
    {
      text: 'The care of others was a habit Nanda Kaul had mislaid.',
      where: 'Part 1, Chapter 9 (Penguin p. 30)',
      analysis:
        "The understated verb “mislaid” makes a lifetime of mothering sound like something dropped absent-mindedly. The narrator goes on to say it had felt like a religious calling until she found it fake. The irony prepares us for Raka's arrival: the habit will return whether she wants it or not.",
    },
    {
      text: 'a recluse by nature, by instinct',
      where: 'The narrator, of Raka, Part 2, Chapter 4 (Penguin p. 48)',
      analysis:
        "This completes the novel's key comparison: Nanda Kaul is a recluse out of vengeance for a life of duty, Raka one by nature. The balanced sentence makes the two mirror images, and makes Nanda Kaul's solitude look chosen and fragile beside the child's.",
    },
    {
      text: 'You are exactly like me, Raka.',
      where: 'Nanda Kaul to Raka, Part 2, Chapter 9 (Penguin p. 64)',
      analysis:
        "A rare open claim of love and kinship, and it fails at once: Raka retreats from it in distaste. The line shows Nanda Kaul's growing need, and the irony that the child most like her is the one who least wants her.",
    },
    {
      text: 'This was no vision of kings and queens in a rosy court.',
      where: 'Part 2, Chapter 11 (Penguin p. 68): Raka at the club window',
      analysis:
        "Raka has expected the glamour Ram Lal described, and sees instead a frenzied fancy-dress party. The negative sentence marks the collapse of a fantasy, a small version of what happens to Nanda Kaul at the end, and leads into Raka's memories of violence at home.",
    },
    {
      text: 'Who wanted truth? Who could stand it? Nobody. Not even herself.',
      where: "Nanda Kaul's thoughts, Part 2, Chapter 17 (Penguin p. 89)",
      analysis:
        'After failing to comfort Raka about her mother, Nanda Kaul justifies evasion with a burst of rhetorical questions and blunt fragments. “Not even herself” is an admission the reader will remember on the final page, when the truth she cannot stand arrives.',
    },
    {
      text: 'It was the ravaged, destroyed and barren spaces in Kasauli that drew her',
      where: 'The narrator, of Raka, Part 2, Chapter 18 (Penguin p. 91)',
      analysis:
        'The list of three harsh adjectives piles up damage, and the cleft sentence puts the ruined places first, before Raka herself. It explains her attraction to the ravine and the burnt house, and prepares the reader for her fire.',
    },
    {
      text: 'Commotion preceded her like a band of langurs.',
      where: 'Part 3, Chapter 1 (Penguin p. 107): Ila Das arrives',
      analysis:
        'The comic simile compares the jeering schoolboys who swarm around Ila Das to a troop of monkeys. It sets the tone of the tea party, farce with an edge, and shows how the world treats her as a figure of fun long before it treats her with violence.',
    },
    {
      text: 'A forest fire is more than even a Government welfare officer can tackle',
      where: 'Ila Das, Part 3, Chapter 9 (Penguin p. 130)',
      analysis:
        'Ila laughs as she says it, but the line is heavy with dramatic irony. Unnoticed, Raka is at that moment about to take the matches, and Ila is about to walk into a danger no welfare officer can tackle. Desai brings the fire and the attack together in a joke.',
    },
    {
      text: 'There had never been anyone more doomed, more menaced than she',
      where: "Nanda Kaul's thoughts, watching Ila Das leave, Part 3, Chapter 10 (Penguin p. 133)",
      analysis:
        "The absolute “never” and the paired comparatives make this sound like prophecy. Nanda Kaul sees Ila Das's danger clearly, and yet does not act; a page later she is relieved that the danger of the visit has passed. The reader is left with the gap between seeing and helping.",
    },
    {
      text: 'It was all a lie, all. She had lied to Raka, lied about everything.',
      where: "Nanda Kaul's thoughts after the phone call, Part 3, Chapter 13 (Penguin p. 145)",
      analysis:
        "The repeated “all” and “lied” give the confession the rhythm of collapse. Desai keeps the third person, but the voice is Nanda Kaul's own, speaking to herself. Every story of Parts 1 and 2 is undone in two sentences.",
    },
    {
      text: 'Look, Nani, I have set the forest on fire.',
      where: 'Raka, at the window, Part 3, Chapter 13 (Penguin p. 145)',
      analysis:
        "Raka's announcement is plain and almost proud, but she whispers it, shivering, and calls for her Nani. The simplicity after pages of dense prose makes it shocking. It is not the last sentence of the novel: that belongs to the flames and smoke in the ravine.",
    },
  ],

  extracts: [
    {
      title: 'The opening: Nanda Kaul and the postman',
      where: 'Part 1, Chapter 1 (Penguin pp. 3-4)',
      pointer:
        "From the novel's first sentence (Penguin p. 3) to the moment she turns away and climbs the knoll at the top of her garden (p. 4).",
      summary:
        'Standing among the pines, Nanda Kaul sees the postman winding along the Upper Mall towards her house and hopes he will not stop. Desai describes her, tall and grey, and sets out her wish to have Carignano and its silence to herself. Rather than stay to watch nestlings being fed, she turns and climbs the knoll, the highest point of her garden.',
      annotations: [
        {
          phrase: 'scented sibilance',
          note: 'The repeated s sounds imitate the hiss of wind in the pines, so the first thing we share with Nanda Kaul is a sensation, not a thought. Desai establishes a character who lives through her senses and her solitude.',
        },
        {
          phrase: 'had no wish for letters',
          note: 'Letters are the first intrusion the novel names. The phrase sets up the plot, because the postman is in fact bringing the letter that sends Raka to her.',
        },
        {
          phrase: 'rolled a fat ball of irritation into the cool cave of her day',
          note: 'The extended metaphor makes her peace a sealed cave and her anger a heavy object rolled inside it. It is almost comic, and shows how thin her calm really is.',
        },
        {
          phrase: 'She was grey, tall and thin',
          note: 'A plain list of three adjectives. In Part 2 Nanda Kaul in her grey sari is seen as part of the bareness and stillness of the garden, which is exactly the effect she wants.',
        },
      ],
      question:
        'How does Desai make this opening such a revealing introduction to Nanda Kaul and the life she has chosen?',
    },
    {
      title: 'Raka at the club',
      where: 'Part 2, Chapter 11 (Penguin pp. 68-72)',
      pointer:
        'From the start of Part 2, Chapter 11, where Raka falls to her knees in shock at the club window (Penguin p. 68), to the end of her nightmare about her parents (p. 72).',
      summary:
        'Drawn by the band, Raka has crept to the club at night and looks through a window at a fancy-dress party. It is nothing like the glamour Ram Lal described: costumed figures leap and jig wildly, and one, headless, seems to come straight towards her. She runs, sobbing, through the thorns, and the monsters in her mind turn into memories of her father coming home from a party and abusing her mother while she cowered in bed.',
      annotations: [
        {
          phrase: 'This was no vision of kings and queens in a rosy court.',
          note: "The negative sentence records a fantasy collapsing. Raka expected the fairy-tale glamour of Ram Lal's stories, and the gap between expectation and reality is the shock of the scene.",
        },
        {
          phrase: 'It was lunacy rampant.',
          note: "Four words, blunt after the long descriptions of costumes and noise. The narrator adopts the child's verdict: adult pleasure looks to her like madness.",
        },
        {
          phrase: 'fled like an animal chased',
          note: 'The simile links Raka to the wild creatures of the hillside. She is prey here, not explorer, and her solitude becomes flight rather than freedom.',
        },
        {
          phrase: 'beating at her mother with hammers and fists of abuse',
          note: "Desai turns her father's words into weapons, so that abuse becomes physical. The memory explains Raka's silence and her horror of parties, and it reframes her solitude as a response to damage.",
        },
      ],
      question:
        "How does Desai make this such a disturbing moment in the novel? Think about the scene at the window, Raka's flight and her memories.",
    },
    {
      title: 'The telephone and the fire: the ending',
      where: 'Part 3, Chapter 13 (Penguin pp. 143-145)',
      pointer:
        "From the opening of Part 3, Chapter 13, when the telephone rings at dusk (Penguin p. 143), to the novel's last words, “black smoke spiralled up over the mountain” (a sentence that begins at the foot of p. 145 and ends on the unnumbered final page).",
      summary:
        'Walking in the garden at dusk, Nanda Kaul is angered by the telephone. It cannot be Ila Das, she tells herself, who left only an hour ago, so she lets it ring until Ram Lal answers it and she must come in to take the call. A police officer tells her that Ila Das has been raped and killed, and asks her to come and identify the body. Nanda Kaul drops the receiver and admits to herself that her stories to Raka, her marriage and her solitude were all lies. Raka appears at the window to say she has set the forest on fire, and sees Nanda Kaul slumped on the stool as the ravine burns.',
      annotations: [
        {
          phrase: "the sharp, long sliver of the telephone's call",
          note: 'The sound is described as a sliver, a splinter of glass or wood, so the call wounds before its message is heard. The telephone has been an intruder since Part 1, and this is its last and worst intrusion.',
        },
        {
          phrase: 'Could she not be left alone?',
          note: 'Her first reaction, a moment before the news, echoes her cry in Part 1 about being left with nothing. The dramatic irony is cruel: she is about to be more alone than ever.',
        },
        {
          phrase: 'She did not live here alone by choice',
          note: "The confession contradicts the first page's insistence that everything she wanted was here. Desai reverses the whole story of Part 1 in one plain sentence.",
        },
        {
          phrase: 'the black telephone hanging, the long wire dangling',
          note: "Raka sees the scene as a still picture. The repeated hanging links the receiver to Nanda Kaul's drooping head and suggests, without stating it, that she is dead.",
        },
      ],
      question: 'How does Desai make the ending of the novel so shocking and so memorable?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Free indirect discourse',
      example:
        '“Everything she wanted was here, at Carignano, in Kasauli.” (Part 1, Chapter 1); “Who wanted truth? Who could stand it? Nobody.” (Part 2, Chapter 17)',
      effect:
        "The third-person narration slips into Nanda Kaul's own voice without quotation marks, so we hear her convictions from inside. That closeness lets Desai expose them: the insistence of “Everything” sounds like someone persuading herself, and the same technique delivers the confession on the last page.",
    },
    {
      technique: 'Metaphor that makes feeling physical',
      example:
        'The sight of the postman “rolled a fat ball of irritation into the cool cave of her day” (Part 1, Chapter 1); the midday sunlight that, no longer lacquer, “turned to glue” (Part 1, Chapter 7)',
      effect:
        'Emotions and weather become weighty, sticky things. The heat that turns to glue traps everyone in it, like the flies in the same paragraph, and makes the summer feel oppressive and dangerous rather than idyllic.',
    },
    {
      technique: 'Animal and insect imagery',
      example:
        'Nanda Kaul first sees Raka as a tiny mosquito on thin legs (Part 2, Chapter 1); after the night at the club she is “no longer the insect, the grasshopper child” but suddenly still (Penguin p. 72); later, to Nanda Kaul, she is “wild, wild, wild” (p. 103); in the bazaar Ila Das is compared to a little owl out at the wrong time of day (Part 3, Chapter 11).',
      effect:
        'Raka is repeatedly made small, watchful and wild, belonging to the hillside rather than the house, and when the insect image is withdrawn after the club it marks the shock she has suffered. Ila Das is made comic and vulnerable, a creature out of place. The images prepare us for a world where the weak are prey.',
    },
    {
      technique: 'Foreshadowing through fire',
      example:
        "The pines “as of men going up in flames with their arms outstretched” (Part 1, Chapter 3); Ram Lal's “This is how forest fires do start” (Part 2, Chapter 6); Ila Das's joke about forest fires (Part 3, Chapter 9)",
      effect:
        "Each reference is small and passing, but together they build dread. By the time Raka takes the matches, the fire feels inevitable. Desai also links fire to suffering people, which ties the burning mountain to Ila Das's death.",
    },
    {
      technique: 'Repetition and short sentences',
      example:
        '“I want no more. I want nothing. Can I not be left with nothing?” (Part 1, Chapter 5); “wild, wild, wild” (Penguin p. 103); “It was all a lie, all.” (Part 3, Chapter 13)',
      effect:
        "Against Desai's long, descriptive sentences, these clipped repetitions sound like the mind under pressure: exhaustion in Part 1, alarm in Part 2, collapse in Part 3. Tracking them is a good way to chart Nanda Kaul's changing state.",
    },
    {
      technique: 'Grotesque comic simile',
      example:
        'Ila Das arrives “like a bit of crumpled paper” (Part 3, Chapter 2) and, laughing at her own helplessness, is compared to a cracked old egg (Part 3, Penguin p. 127)',
      effect:
        'The comparisons are funny and cruel at once: discarded paper, a cracked old egg. Desai invites the reader to laugh at Ila Das as the town does, then makes that laughter uncomfortable. Cambridge has asked how the arrival scene is both comical and sad; this is the method.',
    },
    {
      technique: 'Dramatic irony',
      example:
        'As Ila Das leaves, Nanda Kaul feels the danger is over, “a mere cloud sailing over the hills” (Part 3, Chapter 10)',
      effect:
        "The reader has just heard about Preet Singh's threats and seen Raka pocket the matches, so Nanda Kaul's relief rings false. The light image, a passing cloud, makes the coming violence all the more shocking.",
    },
    {
      technique: 'Satirical narrative voice',
      example:
        'On the British leaving in 1947: “virginity intact, honour saved, natives kept at bay” and “The little town went native.” (Part 1, Chapter 2)',
      effect:
        "The narrator borrows the colonials' own phrases to mock them. The tone is dry and ironic, quite unlike the lyrical passages about the landscape, and it places Carignano firmly as a leftover of empire.",
    },
    {
      technique: 'Antithesis',
      example:
        'Nanda Kaul is a recluse “out of vengeance for a long life of duty and obligation”; Raka is one “by nature, by instinct” (Part 2, Chapter 4)',
      effect:
        "The balanced opposition is the hinge of the novel's design. It lets Desai compare the two without a scene of confrontation, and gives students a precise way to frame any essay on the pair.",
    },
  ],

  structureForm: [
    {
      heading: 'Three parts, three women, one house',
      body: "Each part is named for a woman and her relation to Carignano: Nanda Kaul at Carignano, Raka comes to Carignano, Ila Das leaves Carignano. The house stays fixed while people arrive and leave. The last title carries a grim irony: Ila Das leaves Carignano and never reaches home. The parts also change pace. Part 1 is almost entirely still, set mostly in Nanda Kaul's mind; Part 2 moves through a summer of walks, storms and stories; Part 3 covers a single afternoon and evening, and the last three chapters bring death, confession and fire within a dozen pages.",
    },
    {
      heading: 'Short chapters and a moving point of view',
      body: "The chapters are short and numbered afresh in each part, and the viewpoint moves. We see the pines through the postman's eyes (Part 1, Chapter 3); a chapter ends at the other end of Ila Das's telephone line (Part 1, Chapter 6); the club is seen through Raka's terror (Part 2, Chapter 11); and in Part 3, Chapters 11 and 12 we walk home with Ila Das, alone, after she has left Nanda Kaul behind. That last shift matters: Desai takes the reader away from Carignano so that we know what Nanda Kaul cannot, and the phone call arrives with its full weight.",
    },
    {
      heading: 'The telephone and the letter',
      body: "Intrusions reach Carignano by post and by telephone. A letter starts the plot in Part 1; Ila Das's voice arrives by telephone in Part 1, Chapter 6; at the end of Part 2 Nanda Kaul longs to clear out the telephone, with “its looped black wires and unforgivable shrieks”; and the telephone brings the news in Part 3, Chapter 13. The pattern gives the novel a circular shape, from an unwanted message at the beginning to an unbearable one at the end.",
    },
    {
      heading: 'A revelation held back',
      body: "Desai withholds the truth about Nanda Kaul's marriage and childhood until the final page, and the reader, like Raka, has largely believed her. Only in Part 3, Chapter 13 do we learn that her father never went to Tibet, that the Buddha was bought from a pedlar, and that her husband loved Miss David. The effect is to make us reread: the stately widow of Part 1 turns out to have been performing all along. Clues were there, in the contempt of her memories and the “false note” Raka hears in her stories, and a strong answer points to them.",
    },
    {
      heading: 'Two stories that meet',
      body: 'Kirkus read the book as two overlapping stories, Nanda Kaul and Raka, then Ila Das. The structure argues otherwise. Ila Das is introduced in Part 1, Chapter 6, invited at the end of Part 2, and her death is what breaks Nanda Kaul in Part 3. She is the version of old age Nanda Kaul has refused to become, a woman alone who cannot hide, and her fate makes Nanda Kaul face her own.',
    },
    {
      heading: 'An ending on an image',
      body: "The novel does not end with Raka's words or with a verdict on Nanda Kaul. Its last sentence describes the flames crackling through the dry grass of the ravine and black smoke rising over the mountain. The title arrives at last as a literal event. Desai leaves the meaning to the reader: whether Nanda Kaul has died, what Raka intended, and what, if anything, has been purified by the fire.",
    },
    {
      heading: 'A short novel, or novella',
      body: "At about 145 pages it is short enough to be called a novella, and it has a novella's concentration: a handful of characters, one house, one summer, and imagery that returns again and again. Cambridge calls it a novel, and either word is acceptable. What matters is to show how its compression works: almost nothing is wasted, so a passing detail, a charred pine, a box of matches, usually pays off. Even the burnt house on the hill, whose owner is said to have been an old woman living alone who went mad after the fire, reads on a second look like Nanda Kaul's story in miniature.",
    },
  ],

  vocabulary: [
    {
      term: 'Carignano',
      definition:
        "The house on the ridge above Kasauli where Nanda Kaul lives, built in 1843, according to the novel, for a British colonel's wife.",
    },
    {
      term: 'Hill station',
      definition:
        'A town in the hills where the British, and later wealthy Indians, went to escape the summer heat of the plains. Kasauli and Simla are examples.',
    },
    {
      term: 'Cantonment',
      definition:
        'A permanent military station. Kasauli began as a British cantonment in 1842; the novel mentions others at Ambala and Sabathu.',
    },
    {
      term: 'The Upper Mall and Lower Mall',
      definition:
        'The main roads of the hill town. In the first sentence the postman is winding along the Upper Mall towards Carignano.',
    },
    {
      term: 'Knoll',
      definition:
        "A small rounded hill. The knoll is the highest point of Nanda Kaul's garden, where the wind is keenest and the view widest.",
    },
    {
      term: 'Ravine (gorge)',
      definition:
        'The steep valley behind Carignano, full of rocks, agaves, kilns and rubbish, where Raka spends her days.',
    },
    {
      term: 'Agave',
      definition:
        'A spiky plant with sword-shaped leaves. The narrator calls them, besides the pines, the only vegetation of the gorge.',
    },
    {
      term: 'Langur',
      definition:
        'A long-tailed, black-faced monkey. A troop raids the garden in Part 2, and the jeering schoolboys around Ila Das are compared to a band of them.',
    },
    {
      term: 'Churail',
      definition:
        'In north Indian folklore, a female ghost. Ram Lal tells Raka that the surest way to recognise one is that its feet are turned backwards.',
    },
    {
      term: 'Hamam',
      definition:
        "Here, the brass water-heater that Ram Lal fires with wood to heat Raka's bath water, and the source of his fear of sparks in the dust storm.",
    },
    {
      term: 'Biri',
      definition: 'A thin, hand-rolled cigarette. Ram Lal smokes them by the kitchen door.',
    },
    {
      term: 'Thana',
      definition:
        'A police station. The officer who telephones Nanda Kaul is in charge of the Garkhal thana.',
    },
    {
      term: 'Memsahib',
      definition:
        'A term of respect for a woman of rank, originally a European woman. Ram Lal calls Nanda Kaul Memsahib.',
    },
    {
      term: 'Nani',
      definition:
        'Hindi for a maternal grandmother. Raka calls her great-grandmother Nani, and it is the word she whispers at the end.',
    },
    {
      term: 'Vice-Chancellor',
      definition:
        "The head of a university. Nanda Kaul's husband held this post, and she ran his large household.",
    },
    {
      term: 'Welfare officer',
      definition:
        "A government official responsible for the well-being of a district's poor. Ila Das is welfare officer of the Garkhal division.",
    },
    {
      term: 'Misnomer',
      definition:
        "A wrong or unsuitable name. Nanda Kaul thinks Raka's name, which means the moon, a misnomer.",
    },
    {
      term: 'Recluse',
      definition:
        'Someone who lives apart from other people. The novel contrasts two kinds: by vengeance and by instinct.',
    },
    {
      term: 'Free indirect discourse',
      definition:
        "Third-person narration that takes on a character's own thoughts and voice without quotation marks. Desai uses it constantly for Nanda Kaul.",
    },
    {
      term: 'Dramatic irony',
      definition:
        "When the reader understands more than a character does, as when Nanda Kaul feels relief that Ila Das's visit is safely over.",
    },
    {
      term: 'Foreshadowing',
      definition:
        "Hints of what is to come. The novel's fire images, from the pines to the matches, are the clearest example.",
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read Part 2, Chapter 11, from Raka falling to her knees at the club window to the end of her nightmare about her parents. How does Desai make this such a disturbing moment in the novel?',
        skill:
          'Close reading of a printed passage: language, structure and effect, with a personal response',
        guidance: [
          "Open with an argument, not a summary: for example, that the scene is disturbing because a child's adventure turns into a memory of violence she cannot escape.",
          'Analyse the collapse of expectation: “no vision of kings and queens in a rosy court” against what Ram Lal promised.',
          "Look at how the party is described: the frenzied verbs, the costumes, the blunt verdict “It was lunacy rampant.” Say how the child's viewpoint makes adult pleasure look mad.",
          "Explore the headless figure and Raka's flight, “like an animal chased”: she becomes prey.",
          'Analyse the shift into memory: her father, her mother, abuse turned into “hammers and fists”. Explain how structure blurs present terror and past trauma.',
          "Link outwards in two or three precise references: Raka's solitude in Part 2, Chapter 4, her attraction to ruined places in Chapter 18, and the fire at the end.",
        ],
      },
      {
        question:
          'Read Part 3, Chapter 13, from the moment the telephone rings at dusk to the end of the novel. How does Desai make this ending so powerful?',
        skill:
          'Close reading of a printed passage: language, structure and effect, with a personal response',
        guidance: [
          'State your view of what the ending does: for example, that it destroys every illusion in the novel in a few lines and leaves the meaning to the reader.',
          'Analyse the telephone as intruder: the “sliver” of sound, her irritation, and “Could she not be left alone?” as dramatic irony.',
          "Comment on the restraint of the police officer's message and on how Desai keeps the violence factual and brief.",
          'Analyse the confession: repetition of “lie” and “all”, the list of what was false, and “She did not live here alone by choice”. Link back to the opening chapter.',
          'Explore Raka at the window: whispering, shivering, calling for her Nani, and the stillness of what she sees.',
          'End on the final image of the flames and the smoke. Offer more than one reading of the fire and of whether Nanda Kaul has died, and say which you find most convincing.',
        ],
      },
      {
        question: 'How far does Desai make you sympathise with Nanda Kaul?',
        skill:
          'Whole-text essay: an argued personal response supported by knowledge of the whole novel',
        guidance: [
          'Answer directly in your first sentence: for example, that Desai makes us resist her at first and pity her by the end, without ever excusing her.',
          "The case against sympathy: her hostility to the postman and to Asha's letter in Part 1, and her cold welcome to Raka in Part 2, Chapter 1; her coldness to Ila Das; the moment she lets pass without inviting Ila to stay (Part 3, Chapter 10).",
          'The case for sympathy: her exhaustion in “Can I not be left with nothing?”, her memories of a household where she served, and a house that was “his house, never hers”.',
          'Her need for Raka in Part 2: the storm stories, “You are exactly like me, Raka”, and how the lies come from loneliness.',
          "The final page: the husband's lifelong affair, the admission that she lives alone because she was forced to, and her collapse.",
          'Conclude with a qualified judgement, and explain how free indirect discourse lets Desai make us both judge her and feel with her.',
        ],
      },
      {
        question: 'Explore the ways in which Desai makes fire so important in the novel.',
        skill: 'Whole-text essay: imagery, structure and theme',
        guidance: [
          'Set out your argument: fire is foreshadowed throughout, so the ending feels inevitable, and it carries more than one meaning.',
          'The early images: the charred pines “as of men going up in flames” (Part 1, Chapter 3) and Nanda Kaul imagining herself a charred tree trunk (Part 1, Chapter 7).',
          "Part 2: the dust storm and Ram Lal's warning, the burnt house and its mad owner, the distant fire watched at night, Raka drawn to “ravaged, destroyed and barren spaces”.",
          "Part 3: Ila Das's joke about forest fires and the box of matches, and how Desai ties fire to the violence against Ila.",
          "The ending: Raka's fire and the last sentence. Weigh readings: destruction, purification, a cry for attention.",
          'Show how the dry summer and the monsoon that never comes make the whole landscape ready to burn.',
        ],
      },
      {
        question: 'How does Desai make the contrast between Raka and Nanda Kaul so striking?',
        skill: 'Whole-text essay: characterisation and comparison',
        guidance: [
          "Begin with the novel's own formula: a recluse “out of vengeance” and a recluse “by nature, by instinct”, and say what you will argue about it.",
          'Their first meeting in Part 2, Chapter 1: the misnomer, the mosquito image, the collision of bones.',
          "Their different solitudes: Nanda Kaul's stillness on the veranda, Raka's wandering in the ravine and the burnt house.",
          'How the balance shifts: Nanda Kaul begins to need Raka, tells stories to win her, and is rejected when she claims her too openly.',
          "The hidden likeness: both are damaged by family and by men; the club scene shows Raka's solitude has causes too.",
          'The ending: the old woman broken by truth, the child who acts. Decide whether they are opposites or two stages of the same life.',
        ],
      },
      {
        question: 'In what ways does Desai make Ila Das such a moving character?',
        skill: 'Whole-text essay: characterisation, tone and an argued personal response',
        guidance: [
          'Give a direct answer: for example, that she moves us because Desai makes her ridiculous and brave at the same time.',
          "Her voice, first heard on the telephone in Part 1, Chapter 6, and “this voice was Ila Das's tragedy in life”.",
          'The arrival in Part 3, Chapter 1: the jeering boys, the umbrella, the comic similes, and whether we laugh with the town or feel for her.',
          "Her history and poverty: the lost fortune, the job Mr Kaul gave her, and her horror at the grainseller's prices in the bazaar.",
          'Her work against child marriage, and her courage in “I am always alone. I am never afraid.”',
          'Her death and what it does to Nanda Kaul. Handle it briefly and precisely, and focus on how Desai presents it.',
        ],
      },
    ],
    tips: [
      'Paper 1 is closed-book, so learn a small number of short, flexible quotations. “She wanted no one and nothing else”, “Can I not be left with nothing?”, “a recluse by nature, by instinct”, “It was all a lie, all.” and “Look, Nani, I have set the forest on fire.” between them serve almost any question.',
      'Check the two misquotations in circulation. The novel does not contain “She wanted nothing. She wanted no one.”; it says she wanted no one and nothing else. And Raka says “Nani”, not “Look, Nana”. Her words are also not the last line: the novel ends on the flames in the ravine and the smoke over the mountain.',
      "Use Cambridge's labels for references: Part 2, Chapter 18, not a page number, because examiners may be using a different edition.",
      "Do not treat Nanda Kaul's stories as facts. The explorer father, Tibet, the bear and the leopard cats are lies, admitted on the last page. Write about them as evidence of her loneliness and need.",
      'Be careful with what the text does not say. Whether Nanda Kaul dies is implied, not stated: write that most readers take it she has died, and why.',
      "Treat the violence as the novel does: briefly, factually and in terms of method. Examiners reward analysis of how Desai presents Ila Das's death, not description of it.",
      'Remember Ila Das is comic as well as tragic. The strongest answers explain how Desai makes us laugh and then makes the laughter uncomfortable, rather than choosing one.',
      'In a passage question, spend most of the answer on the printed words, then make two or three precise links outwards. In the March 2026 paper the essay question on this novel told candidates not to use the passage printed for the other question, so read the instructions.',
      "In the 2025 and 2026 papers Cambridge set essays on fire, on Nanda Kaul's changing feelings towards Raka, on Raka's desire to be alone, on Ila Das's suffering and her poverty, on the contrast between Nanda Kaul and Ila Das and their long friendship, on whether Raka is likeable, on Nanda Kaul's life before her husband died, on attitudes to women, and on sympathy for Nanda Kaul. Plan an answer to each.",
      'Keep context in its place: a sentence on the Raj, the hill station or child marriage is useful when it explains a scene, not as a history lesson.',
    ],
  },

  modelAnswer: {
    question: 'How far does Desai make you sympathise with Nanda Kaul?',
    paragraph:
      "Desai makes us resist Nanda Kaul at first and pity her by the end, because she lets us see the wound beneath the pose. In the opening chapter her hostility is almost comic: the sight of the postman “rolled a fat ball of irritation into the cool cave of her day”, a metaphor that makes her solitude a sealed, cool cave and every visitor an object rolled into it. Yet when Asha's letter arrives, the narration slips into her own voice: “I want no more. I want nothing. Can I not be left with nothing?” The short, repeated sentences sound less like pride than exhaustion, and the paradox of asking to be “left with nothing” suggests a woman who has already given away everything. The final page confirms this reading and deepens it. When she admits that “She did not live here alone by choice”, Desai turns the novel's opening inside out, since the solitude she seemed to have won was only what she had been reduced to. So I do sympathise with her, but not simply: the moment in Part 3 when she might have invited Ila Das to stay, and lets it pass, is real. Desai asks us to pity a woman whose defences have hurt others as well as herself.",
    commentary: [
      'It answers the question in its first sentence with an argument about how our response changes, not a description of the character.',
      'Every quotation is short, exact and located, and each is followed by analysis of a specific method: the metaphor of the cave, the repetition and paradox of the plea.',
      'It moves across the whole novel, from Part 1, Chapter 1 to Part 1, Chapter 5 and the final page, which shows secure knowledge of a text the student cannot take into the exam.',
      'It links character to structure, showing how the last page reverses the first, which is the kind of whole-text point that lifts an answer.',
      'It ends by qualifying its own judgement with evidence from Part 3, so the personal response is argued rather than asserted.',
    ],
  },

  timeline: [
    {
      where: 'Part 1, Chapters 1 to 3 (Penguin pp. 3-12)',
      title: 'The postman on the Upper Mall',
      summary:
        "Alone at Carignano with her cook, Nanda Kaul watches the postman climb towards the house and wills him not to stop. The narrator tells the house's history under the British, then follows the postman up the hill to meet Ram Lal.",
      setting: 'Carignano, a house on a ridge above Kasauli, in the heavy summer light',
      who: ['Nanda Kaul', 'Ram Lal'],
      quote: 'Everything she wanted was here, at Carignano, in Kasauli',
      themes: ['Solitude and withdrawal', 'Old age and the past'],
      tension: 1,
      significance:
        'The novel opens on what Nanda Kaul wants most, and on the first intrusion into it.',
    },
    {
      where: 'Part 1, Chapters 4 and 5 (Penguin pp. 13-19)',
      title: "Asha's letter",
      summary:
        "A letter from her daughter Asha says that Raka, still weak after typhoid, is being sent to Carignano for the summer while Tara joins her husband in Geneva. Nanda Kaul is furious and looks back on her crowded life as the Vice-Chancellor's wife.",
      setting: 'The veranda, and the railing at the back of the house above the gorge',
      who: ['Nanda Kaul', 'Asha', 'Tara', 'Raka', 'Mr Kaul'],
      quote: 'Can I not be left with nothing?',
      themes: ['Solitude and withdrawal', 'Women, duty and violence'],
      tension: 2,
      significance:
        "The plot begins to move, and we glimpse the resentment beneath Nanda Kaul's calm.",
    },
    {
      where: 'Part 1, Chapter 6 (Penguin pp. 20-22)',
      title: 'Ila Das telephones',
      summary:
        "The telephone rings, and it is Ila Das, whose shrill voice Nanda Kaul holds away from her ear. Nanda Kaul tells her Raka is coming; the talk falls silent, and at the other end Ila wonders whether there was any joy in her friend's voice.",
      setting:
        'The telephone in the house at Carignano, with Ila Das calling from the sanatorium, where she is lunching with the matron',
      who: ['Nanda Kaul', 'Ila Das'],
      quote: "She knew this voice was Ila Das's tragedy in life",
      themes: ['Old age and the past', 'Women, duty and violence'],
      tension: 2,
      significance:
        "Ila Das enters as a voice, and the telephone becomes the novel's instrument of intrusion.",
    },
    {
      where: 'Part 1, Chapters 7 to 10 (Penguin pp. 22-36)',
      title: 'Waiting for Raka',
      summary:
        "Through a stifling afternoon Nanda Kaul lies still and remembers the noise of the Vice-Chancellor's house. She reads Sei Shonagon on women who live alone, and on the day Raka arrives she sends Ram Lal to meet her rather than go herself.",
      setting: "Nanda Kaul's bedroom and veranda through a hot day and evening",
      who: ['Nanda Kaul', 'Ram Lal', 'Mr Kaul'],
      quote: 'she would be a charred tree trunk in the forest',
      themes: ['Solitude and withdrawal', 'Old age and the past'],
      tension: 2,
      significance:
        'Desai fills in the past Nanda Kaul has fled, and shows her choosing distance at the moment of meeting.',
    },
    {
      where: 'Part 2, Chapter 1 (Penguin pp. 39-40)',
      title: 'Raka arrives',
      summary:
        'Raka comes up the garden path behind Ram Lal, thin, silent and nothing like the moon her name means. The two embrace because they feel they must, and separate quickly.',
      setting:
        'The garden of Carignano under the apricot trees, with the pines bending in the wind',
      who: ['Nanda Kaul', 'Raka', 'Ram Lal'],
      quote: 'There was a sound of bones colliding.',
      themes: ['Solitude and withdrawal', 'Old age and the past'],
      tension: 2,
      significance:
        'The first meeting defines the relationship: two solitaries, neither wanting the other.',
    },
    {
      where: 'Part 2, Chapters 2 to 6 (Penguin pp. 40-55)',
      title: 'The ravine and the Pasteur Institute',
      summary:
        'Raka explores alone, down into the ravine of kilns, agaves and rubbish, and questions Ram Lal about the smoking Pasteur Institute. Nanda Kaul sees that the child wants only to be left alone. In a dust storm Ram Lal frets that his bath-fire could set the hill alight.',
      setting:
        'The ravine below Carignano, and the kitchen yard where Ram Lal heats the bath water',
      who: ['Raka', 'Ram Lal', 'Nanda Kaul'],
      quote: 'This is how forest fires do start',
      themes: ['Fire and the ravaged landscape', 'Solitude and withdrawal'],
      tension: 2,
      significance:
        "Raka's attraction to ruined places is set up, and fire is planted as a danger.",
    },
    {
      where: 'Part 2, Chapters 7 to 9 (Penguin pp. 55-65)',
      title: 'The walk to Monkey Point',
      summary:
        'Nanda Kaul walks Raka to Monkey Point, shows her a house burnt in a forest fire and recites Hopkins on a haven. She suggests boarding school at Sanawar, and later tells Raka she is exactly like her. Raka recoils, and they turn their faces away.',
      setting: 'The road and the path to Monkey Point, with the plains below hidden in dust',
      who: ['Nanda Kaul', 'Raka'],
      quote: 'You are exactly like me, Raka.',
      themes: ['Solitude and withdrawal', 'Truth, lies and self-deception'],
      tension: 3,
      significance:
        'Nanda Kaul begins to want Raka, and her wanting drives the child further away.',
    },
    {
      where: 'Part 2, Chapters 10 and 11 (Penguin pp. 66-72)',
      title: 'The fancy-dress night at the club',
      summary:
        'Hearing the band, Raka creeps to the club at night and watches a fancy-dress party through a window. Terrified, she runs, and the monsters in her mind merge with memories of her father coming home from parties and abusing her mother.',
      setting: 'The Kasauli club at night, and the dark hillside',
      who: ['Raka', 'Rakesh', 'Tara'],
      quote: 'This was no vision of kings and queens in a rosy court.',
      themes: ['Women, duty and violence', 'Solitude and withdrawal'],
      tension: 4,
      significance:
        "The night explains Raka's solitude: it is flight from what she has seen at home.",
    },
    {
      where: 'Part 2, Chapter 12 (Penguin p. 75)',
      title: 'A fire on the far hills',
      summary:
        'A forest fire burns across the hills at night. Raka keeps getting out of bed to watch it through the window, and Nanda Kaul tells her that houses, even whole villages, may burn in a fire that big.',
      setting: 'The drawing-room window at Carignano, at night',
      who: ['Raka', 'Nanda Kaul'],
      themes: ['Fire and the ravaged landscape'],
      tension: 3,
      significance: "Fire moves from story to sight, and Raka's fascination with it grows.",
    },
    {
      where: 'Part 2, Chapters 15 and 16 (Penguin pp. 80-87)',
      title: 'Stories in the storm',
      summary:
        "A storm from the north breaks over the hills. Shut indoors, Nanda Kaul holds Raka's attention for the first time with tales of her father, an explorer who went to Tibet and brought back the bronze Buddha on her table.",
      setting: 'The drawing-room at Carignano in a storm of wind and rain',
      who: ['Nanda Kaul', 'Raka'],
      themes: ['Truth, lies and self-deception', 'Old age and the past'],
      tension: 3,
      significance:
        'Nanda Kaul finds she can win Raka with stories, and the stories, we will learn, are untrue.',
    },
    {
      where: 'Part 2, Chapters 17 and 18 (Penguin pp. 87-91)',
      title: 'A letter and the burnt house',
      summary:
        "The morning after the storm, with the letter about Tara's latest breakdown on her mind, Nanda Kaul tells Raka the truth about her mother, then bitterly curses her own failure to comfort children. Raka runs off alone to the burnt house on the hill.",
      setting:
        'Carignano the morning after the storm, then the burnt shell of a house on a hilltop',
      who: ['Nanda Kaul', 'Raka', 'Tara'],
      quote: 'It was the ravaged, destroyed and barren spaces in Kasauli that drew her',
      themes: ['Fire and the ravaged landscape', 'Truth, lies and self-deception'],
      tension: 3,
      significance: "Raka's feeling for ruin is set beside the family damage that feeds it.",
    },
    {
      where: 'The last chapters of Part 2 (Penguin pp. 93-104)',
      title: 'Kashmir, bears and a telephone call',
      summary:
        'Nanda Kaul tells wilder stories of a childhood home in Kashmir with a caged bear and leopard cats, and cannot let Raka go. Ila Das telephones, and Nanda cuts her short by inviting her to tea, then longs to strip the house of its telephone.',
      setting: 'The lunch table, the twilit garden and the telephone at Carignano',
      who: ['Nanda Kaul', 'Raka', 'Ila Das'],
      quote: 'its looped black wires and unforgivable shrieks',
      themes: ['Truth, lies and self-deception', 'Solitude and withdrawal'],
      tension: 3,
      significance:
        'The lies grow with the need, and the invitation that brings Ila Das to Carignano is made.',
    },
    {
      where: 'Part 3, Chapters 1 to 5 (Penguin pp. 105-122)',
      title: 'Ila Das comes to tea',
      summary:
        "Ila Das arrives pursued by jeering schoolboys until Ram Lal rescues her stuck umbrella. At tea she chatters about the old days at the Vice-Chancellor's house and mimes playing an imaginary piano while she sings, as Nanda Kaul freezes and Raka stares.",
      setting: 'The road below Carignano, and the tea-table on the veranda',
      who: ['Ila Das', 'Nanda Kaul', 'Raka', 'Ram Lal'],
      quote: 'Commotion preceded her like a band of langurs.',
      themes: ['Old age and the past', 'Women, duty and violence'],
      tension: 3,
      significance:
        'The comedy of the tea party is also cruel, and it sets up the pity of what follows.',
    },
    {
      where: 'Part 3, Chapters 6 to 10 (Penguin pp. 122-134)',
      title: 'Child marriage and a box of matches',
      summary:
        'Ila Das admits her poverty and describes her fight to stop Preet Singh marrying his seven-year-old daughter to an old widower. She jokes about forest fires; unnoticed, Raka pockets a box of matches and slips into the ravine. Ila leaves, and Nanda Kaul feels relief.',
      setting: 'The veranda at Carignano in the late afternoon',
      who: ['Ila Das', 'Nanda Kaul', 'Raka', 'Ram Lal', 'Preet Singh'],
      quote: 'A forest fire is more than even a Government welfare officer can tackle',
      themes: ['Women, duty and violence', 'Fire and the ravaged landscape'],
      tension: 4,
      significance:
        "Every thread is drawn tight: the danger to Ila, the dry hills and the matches in Raka's pocket.",
    },
    {
      where: 'Part 3, Chapters 11 and 12 (Penguin pp. 134-143)',
      title: 'The walk home',
      summary:
        'Ila Das walks down through the bazaar, where a grainseller warns her that it is not safe to walk alone in the dark, then takes the footpath to her village as night falls. On the path Preet Singh attacks her; he rapes and kills her.',
      setting: "The Kasauli bazaar and the steep hillside path to Ila Das's village at dusk",
      who: ['Ila Das', 'Preet Singh'],
      themes: ['Women, duty and violence', 'Old age and the past'],
      tension: 5,
      significance:
        'The violence the novel has held at a distance arrives, and it falls on the most defenceless character.',
    },
    {
      where: 'Part 3, Chapter 13 (Penguin pp. 143-145)',
      title: 'The telephone and the fire',
      summary:
        'The telephone rings again. A police officer tells Nanda Kaul that Ila Das has been killed. She drops the receiver and admits to herself that everything she told Raka was a lie. At the window Raka whispers that she has set the forest on fire.',
      setting: 'The telephone stool at Carignano at dusk, and the burning ravine below',
      who: ['Nanda Kaul', 'Ram Lal', 'Raka', 'Ila Das'],
      quote: 'Look, Nani, I have set the forest on fire.',
      themes: ['Truth, lies and self-deception', 'Fire and the ravaged landscape'],
      tension: 5,
      significance:
        'Every illusion in the novel burns at once, and Desai ends not on a verdict but on smoke over the mountain.',
    },
  ],

  relationships: [
    {
      from: 'Nanda Kaul',
      to: 'Raka',
      kind: 'great-grandmother and great-granddaughter',
      note: 'Nanda Kaul resents the child, then wants to possess her and lies to hold her attention. Raka resists every open advance, until at the end she runs to her Nani with the news of the fire.',
    },
    {
      from: 'Nanda Kaul',
      to: 'Ila Das',
      kind: 'childhood friends',
      note: "They were at school and college together, and Nanda Kaul found Ila a job through her husband. Yet she treats Ila's visit as a danger to be survived, and lets pass the moment when she might have invited her to stay.",
    },
    {
      from: 'Mr Kaul',
      to: 'Nanda Kaul',
      kind: 'husband and wife',
      note: 'He wanted her as a hostess in silk at the head of his table. The final page reveals he did only enough to keep her quiet while he loved another woman all his life.',
    },
    {
      from: 'Mr Kaul',
      to: 'Miss David',
      kind: 'lifelong lovers',
      note: "He did not marry her because she was a Christian. Ila Das mentions her innocently as a badminton partner; only Nanda Kaul's last thoughts reveal the truth.",
    },
    {
      from: 'Asha',
      to: 'Nanda Kaul',
      kind: 'daughter and mother',
      note: "Asha's confident letters disgust Nanda Kaul, and she arranges Raka's visit without really asking. Trying to remember which small child once promised to look after her in old age, Nanda Kaul wonders whether it could have been Asha, the writer of those terrible letters.",
    },
    {
      from: 'Asha',
      to: 'Tara',
      kind: 'mother and daughter',
      note: 'Asha persuades Tara to go back to her husband in Geneva and give him another chance, excusing his behaviour.',
    },
    {
      from: 'Rakesh',
      to: 'Tara',
      kind: 'husband and wife',
      note: "A diplomat whose ill treatment, affairs and drinking have reduced Tara to breakdown. Raka's memories show him abusing her mother after parties.",
    },
    {
      from: 'Tara',
      to: 'Raka',
      kind: 'mother and daughter',
      note: "Tara has been ill for most of Raka's life, mostly in bed. Raka carries her mother's suffering with her, silently, to Carignano.",
    },
    {
      from: 'Raka',
      to: 'Ram Lal',
      kind: 'child and cook, companions',
      note: 'The only person Raka seeks out. His stories of the club, the Pasteur Institute and the churails feed her imagination.',
    },
    {
      from: 'Nanda Kaul',
      to: 'Ram Lal',
      kind: 'mistress and servant',
      note: 'Two old people sharing a quiet house. He carries out her orders, and on the last evening he answers the telephone that brings the news.',
    },
    {
      from: 'Ila Das',
      to: 'Preet Singh',
      kind: 'welfare officer and villager',
      note: 'She tries to stop him marrying off his seven-year-old daughter; he curses her and, on her way home, kills her.',
    },
  ],

  compareWith: [
    {
      title: 'Hullabaloo in the Guava Orchard',
      href: '/revision/texts/hullaballoo-in-the-guava-orchard',
      reason:
        "By Anita Desai's daughter, Kiran Desai, and on the same Cambridge prose list: another character escapes family life for a solitary refuge among trees, in a comic key rather than a tragic one.",
    },
    {
      title: 'A Streetcar Named Desire',
      href: '/revision/texts/a-streetcar-named-desire',
      reason:
        "On Cambridge's drama list for 2026, and the play Kirkus had in mind when it compared Ila Das to Blanche DuBois: a woman of genteel upbringing, fallen on hard times, who clings to the manners of a lost past in a brutal world.",
    },
    {
      title: 'Things Fall Apart',
      href: '/revision/texts/things-fall-apart',
      reason:
        'Also on the Cambridge prose list: Achebe shows colonial power arriving, while Desai shows what it leaves behind, in the houses, clubs and institutions of a hill town after Independence.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'mental_health',
    'discrimination',
    'colonialism',
    'intimate_relationships',
    'addiction',
  ],

  quotesFromElsewhere: [
    'arresting narrator',
    'grotesque, Indian Blanche DuBois',
    'Where no storms come',
    'Look, Nana',
    'She wanted nothing. She wanted no one.',
  ],

  sources: [
    {
      label:
        "Google Books search-within-volume, Penguin paperback (King Penguin, ISBN 014011906X, 145 pages): every quotation located as an exact phrase, with page numbers; copyright page (Heinemann and Harper & Row 1977, Penguin 1981, Copyright Anita Desai 1977); author note (Winifred Holtby Memorial Prize, 1978 National Academy of Letters Award); contents (the three part titles); acknowledgement of Ivan Morris's 1967 translation of The Pillow Book",
      url: 'https://books.google.com/books?id=O_Kz9iTG3bMC',
    },
    {
      label:
        'Google Books search-within-volume, Allied Publishers edition (ISBN 8177648993), the same pagination: quotations confirmed in a second scan, and chapter headings located to fix part and chapter numbers',
      url: 'https://books.google.com/books?id=TgGGmDro0lsC',
    },
    {
      label:
        'Internet Archive full-text search (snippets only) across three scans, Penguin 1981 (fireonmountain00anit), Allied 1977 (fireonmountain0000desa) and Harper & Row 1977 (fireonmountain00desa): every quotation re-found in a second pass on 26 September 2026, with the words either side used to fix who speaks and in which scene',
      url: 'https://archive.org/details/fireonmountain00desa',
    },
    {
      label:
        "Cambridge 0475 Paper 12, February/March 2025: passage from Part 1, Chapter 1 (the opening, to the knoll), and the essay on Raka's desire to be alone",
      url: 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0475_m25_qp_12.pdf',
    },
    {
      label:
        "Cambridge 0475 Paper 11, May/June 2025: passage from Part 3, Chapter 1 (Ila Das's arrival, the band of langurs, the umbrella), comical and sad; essay on Nanda Kaul's changing feelings towards Raka",
      url: 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0475_s25_qp_11.pdf',
    },
    {
      label:
        "Cambridge 0475 Paper 12, May/June 2025: passage from Part 1, Chapter 6 (Ila Das's telephone call); essay on the importance of fire",
      url: 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0475_s25_qp_12.pdf',
    },
    {
      label:
        "Cambridge 0475 Paper 13, May/June 2025: passage from Part 2, Chapter 1 (Raka's arrival, the misnomer); essay on Ila Das's suffering",
      url: 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0475_s25_qp_13.pdf',
    },
    {
      label:
        "Cambridge 0475 Papers 11, 12 and 13, October/November 2025: passages from Part 2, Chapter 20, Part 2, Chapter 18 (the ravaged, destroyed and barren spaces, printed in full) and Part 3, Chapter 11; essays on Nanda Kaul and Ila Das, Nanda Kaul's life before her husband died, and whether Raka is likeable",
      url: 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0475_w25_qp_12.pdf',
    },
    {
      label:
        "Cambridge 0475 Papers 11, 12 and 13, May/June 2026, and Paper 12, February/March 2026: passages from Part 1, Chapter 10, Part 1, Chapter 8, Part 2, Chapter 9 and Part 2, Chapter 12; essays on attitudes to women, Ila Das's poverty, the long friendship, and sympathy for Nanda Kaul; the instruction not to use the printed passage in the essay",
      url: 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0475_s26_qp_13.pdf',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2026: Fire on the Mountain on the Paper 1 Section B prose list; Paper 1 rules (a choice of two questions on each text, passages printed, candidates may not take set texts into the exam room)',
      url: 'https://www.cambridgeinternational.org/Images/697163-2026-syllabus.pdf',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2027: the same prose list and rules',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
    },
    {
      label:
        "Kirkus Reviews: Harper & Row, 1977; Raka's words at the end quoted as “Look, Nani”; “arresting narrator”; Ila Das as a “grotesque, Indian Blanche DuBois”; the two overlapping stories",
      url: 'https://www.kirkusreviews.com/book-reviews/a/anita-desai-2/fire-on-the-mountain-6/',
    },
    {
      label:
        'EBSCO Research Starters: the three-part structure, the setting and the principal characters, used for orientation only',
      url: 'https://www.ebsco.com/research-starters/literature-and-writing/fire-mountain-anita-desai',
    },
    {
      label:
        "Scroll.in review: Nanda Kaul's detachment, Ila Das's voice; used for orientation only",
      url: 'https://scroll.in/article/1084253',
    },
    {
      label:
        'Wikipedia, Anita Desai: birth in Mussoorie in 1937, parents, Miranda House 1957, list of novels, the three Booker shortlistings, MIT professorship, Kiran Desai',
      url: 'https://en.wikipedia.org/wiki/Anita_Desai',
    },
    {
      label:
        'Wikipedia, Kasauli: Solan district, Himachal Pradesh, about 1,800 metres, cantonment established in 1842, the research institute that began as the Pasteur Institute of India',
      url: 'https://en.wikipedia.org/wiki/Kasauli',
    },
    {
      label:
        'Wikipedia, Child Marriage Restraint Act 1929: the Act, and the 1978 amendment raising the minimum age for girls to eighteen',
      url: 'https://en.wikipedia.org/wiki/Child_Marriage_Restraint_Act',
    },
    {
      label:
        'Wikisource, Poems of Gerard Manley Hopkins, Heaven-Haven: the title and subtitle of the poem Nanda Kaul recites',
      url: 'https://en.wikisource.org/wiki/Poems_of_Gerard_Manley_Hopkins/Heaven%E2%80%94Haven',
    },
    {
      label:
        'Wikipedia, The Pillow Book: Sei Shonagon, court lady in Heian Japan in the 990s and early 1000s',
      url: 'https://en.wikipedia.org/wiki/The_Pillow_Book',
    },
  ],
}
