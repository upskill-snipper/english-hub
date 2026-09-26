import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Empress, Tanika Gupta (first staged at the RSC's Swan Theatre, April
 * 2013). A complete guide: the text had only a placeholder page before this
 * file.
 *
 * NO EDITION IS HELD. The play is in copyright and there is no licensed copy in
 * the repository. Every quotation here was found in one or more of Pearson's
 * own documents for the play, each downloaded fresh on 26 September 2026 and
 * searched word for word:
 *
 * - the Paper 1 question papers of 2022, 2023, 2024 and 2025, whose stimulus
 *   lines Pearson prints from the set edition (Oberon Modern Plays, 2013, as
 *   each paper's list of editions says), and the 2019 sample assessment
 *   materials for the additional texts;
 * - the mark schemes of 2022 to 2025, whose indicative content quotes the play;
 * - Pearson's knowledge organiser, scheme of work (February 2021) and its
 *   resource sheets, the student-guide script and the exemplar booklet.
 *
 * Scene placement was cross-checked against LitCharts' scene-by-scene
 * summaries, whose act and scene numbering matches Pearson's scheme of work
 * scene for scene (including Act 1, Scene 4b).
 *
 * LITCHARTS IS USED FOR PLACEMENT, NOT WORDING. Gupta revised the script for
 * the RSC's 2023 revival (the RSC's "Inspiration for the play" page, in her own
 * words), and a revised edition was published on 7 July 2023 (128 pages, per
 * the National Theatre Bookshop). An earlier pass argued that LitCharts must be
 * using that later edition, because it cites Act 2, Scene 12 at page 114 and
 * Pearson's support pages list the Oberon edition at "96pp". That premise was
 * wrong: AbeBooks and Goodreads list the Oberon 2013 paperback (ISBN
 * 9781849434904) at 144 pages, and Pearson's own scheme of work places Act 1,
 * Scenes 9 and 10 at pages 70 to 71, which a 96-page book could not hold.
 * LitCharts also numbers an Act 1, Scene 4b, as Pearson's scheme of work does
 * and the 2023 revision (seventeen scenes in Act 1, no 4b) does not, so it is
 * most likely working from the 2013 text. Lines that only LitCharts prints are
 * still left out, because a study-guide site is not the published text and its
 * pages could not be re-read on the fact-check pass: Dadabhai's "Education is
 * the only path to freedom", Hari's "To me, you are an Empress", Lord Oakham's
 * "Every woman needs the protection..." speech, Firoza's "nation of slave
 * runners", Victoria's "We will have our Munshi", Dadabhai's "Empress of Famine"
 * speech and "such a small island" line, Rani's closing "I've chosen my
 * friends very carefully". Where sources disagree on a word, the guide quotes
 * only the part they share: Abdul's "the lands she ruled" (the scheme of work)
 * against "The land she ruled" (LitCharts) is quoted from "gravitated"; his
 * compass "will always take you" / "lead" is quoted only as "the right place";
 * Abdul's advice is quoted without its ending, because Pearson's student guide
 * prints "in the future" and its 2025 mark scheme and the RSC's 2013 "Empress
 * in 10 Scenes" resource print "in future"; and Abdul's final-scene "This is a
 * strange, intoxicating land" (the scheme of work) against "...island" (the
 * RSC's 2013 resource) is quoted only as "a strange, intoxicating".
 *
 * ALSO DROPPED, because the words are verified but the scene is not: Lascar
 * Sally's "If it wasn't for me, you'd have to sleep in the streets" (the SAMs;
 * which boarding-house scene is not certain), Victoria's "We are after all the
 * Empress of India" (2023 paper), Dadabhai's Lord Salisbury line (2023 paper),
 * Hari's "I wish I was a wealthy man" (2024 paper), Gandhi's "representatives
 * in the Imperial Parliament" (2024 paper), the lascars stage direction "from
 * all different corners of the Asian sub-continent" (2025 paper), Rani's
 * "evening classes" line (2022 paper) and Hari's "What would you want with a
 * brute like me?" (Pearson's student guide). Victoria's "to me it is a person's
 * character that is important" is in two Pearson documents, but neither gives
 * its scene, and no other source places it.
 *
 * PLOT FACTS where sources disagree are stated less precisely rather than
 * chosen. Whether Rani is still pregnant when Lord Oakham throws her out is one:
 * Pearson's knowledge organiser says "A pregnant Rani is thrown onto the
 * street", but LitCharts has her give birth first, and the 2019 sample mark
 * scheme, while saying "When she becomes pregnant with his baby, he has her
 * thrown out", also has him suggest she "take her child and drown her". An
 * earlier pass chose the pregnant reading on the ground that LitCharts used a
 * later edition, which is not established (see above), so the guide now says
 * only that he throws her out after she becomes pregnant, true on either
 * reading. Who threatens to have Victoria declared insane is another: the
 * Queen's staff (Pearson's 2022 mark scheme), the Prince of Wales and Lord
 * Salisbury (LitCharts), or Bertie (a review of the 2023 revival); the guide
 * says only that the threat is conveyed to her. Also
 * left vague: who sent Abdul (the Viceroy, in Gupta's 2013
 * article and the knowledge organiser; a provincial governor, in the mark
 * schemes); which honour the household blocks (Companion of the British Empire
 * in Pearson's documents, of the Indian Empire in Wikipedia). Pearson's own
 * documents contain slips (the scheme of work calls Rani's pregnancy Hari's in
 * lesson 16, and the knowledge organiser has Rani's letters stopping when it
 * means Hari's), so no plot fact rests on one Pearson document where another
 * source contradicts it.
 *
 * THE LASCARS' SONGS are not quoted, even a line: they are song lyrics.
 *
 * SECOND PASS (26 September 2026). Every quoted phrase on the page was searched
 * again, mechanically, against the Pearson documents above and found in them.
 * LitCharts was behind a bot challenge on this pass, so no placement was
 * re-read there; the RSC's own 2023 teacher pack (its scene list and five
 * script extracts) was used instead, and it showed two things. First, the
 * revised 2023 script numbers the scenes differently (seventeen in Act 1, no
 * Scene 4b), so a scene number here is right only for the 2013 text, and the
 * scope says so. Second, it changes events, the ending included (in the 2023
 * synopsis Rani nearly sails for India with Dadabhai before Hari reappears),
 * so no plot fact here was taken from it. Details that no source in hand
 * supports were cut rather than kept: Abdul asking for the photographs of him
 * at table to be destroyed (history, per Wikipedia, but not shown to be in the
 * play), Hari writing "by candlelight", a storm in Act 1, Scene 12, Georgina
 * being an Oakham servant (Pearson says only that she gives Rani the job), an
 * English nanny's uniform, Rani leaving Sally's "in the night" (the 2023
 * synopsis says the next morning), and Victoria "telling Abdul she loves him"
 * (Pearson's 2025 mark scheme and LitCharts both frame the Hindustani words as
 * a lesson). Rani's mother is described as having served Susan's family, not
 * as Susan's own ayah, which no source says. "The daily humiliation of abuse"
 * is placed in Act 2, Scene 4 on the first pass's LitCharts reading, which a
 * search summary of LitCharts' themes page supports; the Pearson documents
 * give its speaker but not its scene.
 *
 * FACT-CHECK PASS (26 September 2026, independent of the writer's downloads:
 * every Pearson paper, mark scheme, knowledge organiser, scheme of work and
 * resource sheet was fetched again and searched). All quotations were
 * re-confirmed word for word. The RSC's 2013 "The Empress in 10 Scenes"
 * resource (a 2013 production document, so the 2013 text) independently
 * confirms Abdul's advice on the ship, "English is one of several languages"
 * in the gift scene, "insane and therefore unfit for office" and "British
 * fairness". Changes made: the 96-page premise above corrected, with workLength
 * re-estimated from 144 pages; Scene 14 stated neutrally; the insanity threat
 * made neutral; "intoxicating land" cut back to the shared words; the Kipling
 * extract placed as opening Act 2, Scene 10 (the Diamond Jubilee is Scene 11,
 * per LitCharts and the scheme of work), not "the Jubilee scene"; the
 * Coleridge poem's title, two "at night" settings, "Dadabhai's study" (the
 * 2023 scene list's location) and "crowded with passengers" cut as unsourced;
 * the portrait-scene summary no longer fixes the order of Abdul's lines; the
 * Home Rule definition corrected (Naoroji's demand for swaraj came in 1906);
 * Gupta's remarks on the Ayahs' Home photograph and on Victoria's double
 * standards brought back to what she wrote; the Strangers' Home date softened
 * (founded 1856, opened 1857); the unsourced "Both RSC productions used Indian
 * music and dance" cut.
 */
export const guide: StudyGuide = {
  slug: 'the-empress',
  title: 'The Empress',
  author: 'Tanika Gupta',
  form: 'play',
  scope:
    "The whole play, in two acts, set between Queen Victoria's Golden Jubilee in 1887 and her death in 1901. Pearson's question papers list the Oberon Modern Plays edition (2013), and every act and scene number here follows that text, as Pearson's own scheme of work does (fifteen scenes in each act, with an extra Act 1, Scene 4b). The few page numbers come from that scheme of work, written in 2021. Gupta revised the script for the RSC's 2023 revival and a revised edition was published that year. The revised script numbers its scenes differently (the RSC's 2023 scene list gives Act 1 seventeen scenes) and changes some events, including parts of the ending. So check which text your copy is: if it is the 2023 revision, find each moment by what happens rather than by its scene number, and check every quotation against your own copy.",
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Tanika Gupta 2013. Published in Oberon Modern Plays (2013); a revised edition was published by Bloomsbury in 2023. Short quotations are used for criticism and review.',
  },
  workLength: {
    words: 22000,
    basis:
      "Estimated, not counted: no copy of the play is held. The Oberon 2013 paperback runs to 144 pages (AbeBooks and Goodreads; Pearson's support pages give 96, which cannot be right, since its own scheme of work places Act 1, Scenes 9 and 10 at pages 70 to 71). The scheme of work puts the opening of Act 1 at page 19, so the play text fills well over 100 pages of a full-length, two-act drama (the 2023 revival ran nearly three hours); at a conservative 180 words a page that is above 20,000 words. Any length above 3,000 words puts the play in the long-work band, where the page may quote at most 400 words in total, so the estimate cannot loosen the limit.",
  },

  overview: {
    summary: [
      "The Empress opens in 1887, the year of Queen Victoria's Golden Jubilee, on a ship sailing from India to England. On board are Rani Das, a sixteen-year-old ayah (nanny) travelling with the English family she works for; Hari Sharma, one of the lascars, the Asian sailors who do the ship's hardest work under a brutal overseer, the Serang; Abdul Karim, an educated young Indian being sent to the Queen as a Jubilee gift; and the politician Dadabhai Naoroji with the young Mohandas Gandhi, who talk about why India pays taxes to Britain yet has no voice in its Parliament. Hari falls for Rani, and Abdul warns her to choose her friends carefully.",
      "At Tilbury Docks the play divides into parallel stories. Rani's employer, Susan Matthews, dismisses her the moment they land, breaking a promise made to Rani's own mother. Abdul gives Rani his compass for luck, and Hari finds her a bed at Lascar Sally's boarding house for sailors, but when Hari, who has been drinking, pushes for more than she wants, Rani is frightened and leaves. On the docks an ayah called Firoza feeds her and tells her how to find work, and a woman called Georgina gives her a job with Lord and Lady Oakham. Lord Oakham abuses his power as her employer, and after she becomes pregnant by him he has her thrown out. Meanwhile, at Windsor, Victoria is enchanted by Abdul, keeps him against the wishes of her lady-in-waiting, Lady Sarah, and raises him from table servant to Munshi, her teacher. Act 1 ends with the two worlds side by side: Abdul teaching Victoria the Hindustani words for I love you, and Rani, alone at the docks, putting her baby on the ground and walking away.",
      "Act 2 moves through the 1890s. Lascar Sally and Firoza, who have seen Rani leave her baby, persuade her to take her daughter back; she names her Asha, which means hope, and finds shelter at a new Home for Ayahs, where Dadabhai recognises her and gives her work on his campaign to become an MP. He wins, in the face of open racism. Hari, who has learned to read and write, leads the lascars in demanding fair treatment and is beaten and put ashore at the Cape. At court Abdul grows bolder, telling Victoria that sympathy from a palace is not the same as suffering, until her son Bertie, the Prince of Wales, and the household force her to give way over the honours she wants for him. Dadabhai's speech about famine and poverty in India is staged against Victoria dressing for her Diamond Jubilee in 1897.",
      'By 1900 Dadabhai has lost faith in the “British fairness” he once believed in and prepares to go home to India, and Hari, now with his own furniture business, comes back to Rani after thirteen years apart. Victoria dies; the new king has Abdul sent back to India and the letters between them burned. The play ends at Tilbury, where Rani first stepped ashore: now a teacher, she says goodbye to Dadabhai, meets Abdul one last time and gives him back his compass.',
      'The title points two ways. Victoria had been Empress of India since 1876, but Gupta has said that “the real Empress of the play is 16 year old Rani”, whose own name means queen. The play keeps asking which of them truly has power: the old queen who rules an empire she has never seen, or the servant girl who crosses an ocean, is abandoned twice, and builds a life anyway.',
    ],
  },

  context: [
    {
      heading: 'Tanika Gupta and the making of the play',
      body: "Gupta was born in London in 1963. Her parents had come to Britain from Calcutta (now Kolkata) in 1961, graduates who spoke English well and still met poverty, racism and bad housing, and she grew up on her father's stories of India's struggle for independence from British rule, a struggle her own family was closely involved in: her great-uncle, Dinesh Gupta, was an Indian revolutionary. She studied Modern History at Oxford, then worked for an Asian women's refuge and as a community worker while she began to write. The spark for The Empress was Rozina Visram's history Ayahs, Lascars and Princes, and in particular a photograph in it of women at the Ayahs' Home; she wondered who they were and what they were doing in Victorian Britain, and the picture stayed with her for years. Michael Boyd, then artistic director of the Royal Shakespeare Company, commissioned the play, and it opened at the Swan Theatre in Stratford-upon-Avon in April 2013, directed by Emma Rice. In 2019 Pearson added it to its GCSE English Literature list as one of four texts chosen to widen the diversity of the post-1914 choices; Gupta has described that as part of a broader move to decolonise the curriculum. The RSC revived it in 2023, directed by Pooja Ghai, at the Swan and at the Lyric Hammersmith, with a script Gupta revised: she made Lady Sarah more combative, Rani and Hari's love story more painful, and Lord Oakham's grooming of Rani more manipulative.",
    },
    {
      heading: 'Queen Victoria, Empress of India',
      body: "Victoria came to the throne in 1837, so 1887 was her Golden Jubilee, celebrated on 20 and 21 June with a service at Westminster Abbey and a banquet for fifty European kings and princes. The British Crown took over the government of India from the East India Company in 1858, and in 1876, encouraged by Disraeli, Victoria took the title Empress of India, confirmed by the Royal Titles Act that year. The play's title comes from that title. She never visited India, but she was fascinated by it: she employed Indian servants from her Jubilee year, learned Hindustani and ate curry made by them. Gupta has written that she became increasingly interested in the real Victoria's double standards: championing the rights of her Indian servants, even accusing her court of racialism, while revelling in her title of Empress of India and in the exploitation of countries she never visited. The Diamond Jubilee of 1897 marked sixty years on the throne, and she died in 1901. The film Victoria & Abdul (2017) tells the same royal story, but The Empress sets it inside a much wider picture of Indians in Britain.",
    },
    {
      heading: 'Abdul Karim, the Munshi',
      body: "The real Mohammed Abdul Karim was born near Jhansi in 1863, the son of a hospital assistant, and worked as a clerk in Agra. In 1887 he was one of two Indians chosen to wait on the Queen for her Jubilee, and he first served her at breakfast at Frogmore House, on the Windsor estate, on 23 June that year. By the summer of 1888 he had complained that waiting at table was beneath a man who had been a clerk, and Victoria made him her Munshi, a word meaning clerk or teacher; photographs of him serving at table were destroyed. He taught her Hindustani, she showered him with honours and a grant of land near Agra, and her household, who felt themselves his superiors, resented him bitterly. After her death in 1901 her son, Edward VII, sent him back to India and had almost all their correspondence burned. He died in Agra in 1909. The play follows this outline closely: the Jubilee gift, the waiting at table, the promotion, the household's hostility and the burning of the letters are all history, which is why the ending lands so hard.",
    },
    {
      heading: 'Lascars: the sailors of the Empire',
      body: "Lascars were sailors from India and other parts of Asia and Africa employed on British ships, first by the East India Company and then by the great shipping lines. They were hired on separate Asiatic Articles, on lower pay than European sailors, and were often described by employers as docile and trouble-free because, unlike white seamen, they were not in unions. After steam replaced sail, many worked in the engine rooms, shovelling coal into furnaces in heat European crews refused. In Britain they could wait idle for months, especially in winter, before they found a ship home, and in the 1850s Christian philanthropists founded the Strangers' Home for Asiatics, Africans and South Sea Islanders on West India Dock Road in the East End to house them. Some settled in port cities and married English and Irish women, who were mocked with nicknames such as Lascar Sally: the name Gupta gives her kind-hearted landlady, a character she found in her research. By 1914 lascars made up more than a sixth of the crews of British ships, and without them, as the play's opening makes clear, the Empire's trade could not have moved.",
    },
    {
      heading: "Ayahs and the Ayahs' Home",
      body: "British families in India employed ayahs to care for their children, and many brought an ayah on the long voyage home to look after the children and the luggage. Once the ship docked, the ayah's work was often over. Many were discharged with no formal contract, no promised passage home honoured, and no money, and were left to find lodgings in the East End or to advertise for a family sailing back to India; an 1855 report found fifty or sixty ayahs crowded into one lodging house. Christian charities responded by founding the Ayahs' Home, first opened in 1891 at Jewry Street in Aldgate and moved to Hackney in 1900, which housed around a hundred ayahs a year and sheltered those abandoned by their employers. Rani's dismissal at Tilbury, her search for work on the docks and the Home for Ayahs of Act 2 are all drawn from this history. When you write about Rani, you are writing about one of the most typical and least recorded experiences of Indians in Victorian Britain.",
    },
    {
      heading: 'Dadabhai Naoroji and the road to independence',
      body: "Dadabhai Naoroji (1825 to 1917), a Parsi from a Zoroastrian family, was a mathematician, merchant and political leader, one of the founders of the Indian National Congress and three times its president. He argued that British rule was draining India of its wealth, a case he published in Poverty and Un-British Rule in India (1901). In 1888 the Prime Minister, Lord Salisbury, looking back on the Holborn election Naoroji had lost, said he doubted a British constituency was ready to elect a black man; the remark was criticised by Liberals and by the Queen herself. In 1892 Naoroji was elected Liberal MP for Finsbury Central, and he held the seat until 1895. He is usually called the first Indian MP, though strictly he was the second MP of Asian descent: an Anglo-Indian, David Ochterlony Dyce Sombre, had been elected before him. Opponents attacked his race and religion; Sir Lepel Griffin's description of him as an alien is quoted in the play. He mentored young Indians studying law in London, among them Gandhi, who later led the movement that won India's independence. In the play Dadabhai carries the political argument, and his growing disillusion is Gupta's question about whether an unjust system can be changed from inside.",
    },
    {
      heading: 'Empire at its height: Rhodes, Kipling and war',
      body: "The 1890s were the years of the scramble for Africa and of empire at its most confident. The play lets that confidence speak in its own voice: early in Act 2, Scene 4 the court hears from a letter to the Queen by Cecil Rhodes, the imperialist who claims that the British are “the first race in the world” and who, it is reported, would annexe the planets for her if he could; and Act 2, Scene 10, the scene before the Diamond Jubilee, opens with an extract from Rudyard Kipling's poem The White Man's Burden, long criticised as racist for presenting conquest as a civilising duty. Kipling did not publish it until February 1899, two years after the Diamond Jubilee, so it works less as an event in the story than as a voice of the age. By the end, the war in South Africa is drawing even the young Gandhi away from London. When you use this context, tie it to a moment: the play juxtaposes these voices of empire with the people who paid for it, and that juxtaposition is Gupta's argument.",
    },
    {
      heading: 'History and invention',
      body: "The Empress mixes real people with invented ones. Victoria, Abdul Karim, Dadabhai Naoroji and Gandhi were real, and the play uses real words from their opponents; Rani, Hari, Firoza, the Matthews family and the Oakhams are Gupta's inventions, built from what historians know of ayahs, lascars and the East End, and Lascar Sally is based on a Hindi-speaking landlady Gupta came across in her research. She also compresses fourteen years into two acts and arranges events for effect: one reviewer noted the small liberty of bringing the young Gandhi into the story. So use history as context, never as a substitute for the play's plot. In an essay, the distinction is itself a point to make: Gupta invents Rani precisely because women like her left almost no record. As she has said, the ayahs did not write diaries, so a dramatist had to imagine the life that history did not keep.",
    },
  ],

  themes: [
    {
      title: 'Empire and exploitation',
      body: "The play shows the British Empire from both ends at once. At the top is Victoria's splendour: breakfast from a golden egg cup, Jubilee crowds, jewels. At the bottom are the people who make it work, and Gupta shows them first. The opening stage direction presents the lascars on deck, “barefooted” and “undernourished and dirty”, and the Serang threatens to send Hari's “skinny little body down to hell” in the boiler room. Ayahs are used for the voyage and discarded on the quay. Abdul, describing the Taj Mahal that Victoria has never seen, speaks frankly about what British rule has done in India, and Dadabhai sees the Queen “like a greedy whale, she is swallowing entire countries”. One reading takes the play as a straightforward indictment of empire, and its speeches support that. The more interesting reading notices where the anger is strongest: not in the speeches but in intimate relationships, an employer and her ayah, a lord and his nanny, a queen and her friend, where imperial power becomes personal cruelty. That is why the play is more than a history lesson.",
    },
    {
      title: 'Race and prejudice',
      body: "Prejudice in the play has a vocabulary of bodies. Lady Sarah assumes Abdul cannot speak English and says that “Indian blood is thinner than the English”; Sir Lepel Griffin calls Dadabhai “an alien in race, in custom, in religion”; Lord Oakham calls Rani a “harlot”. Gupta also shows subtler forms. Lord Oakham's love of India looks like the opposite of racism, but his wish to see Rani “dressed as an Indian woman” turns her into an exotic possession. Victoria rebukes her court's prejudice and defends Abdul, yet values him first as someone who can “enlighten us on the habits and customs of our subjects so far away”. Most painfully, empire sets the colonised against one another: Hari sneers that Abdul, for all his fine clothes, is “still a lackee to the white man”, and the Serang, the lascars' own overseer, is their cruellest master. A strong answer does not stop at identifying racists. It shows how Gupta traces racism through a whole system, including the people who think themselves free of it.",
    },
    {
      title: 'Power, class and service',
      body: "Almost everyone in The Empress serves someone. The lascars serve the Serang, who serves the captain; Rani serves the Matthews family and then the Oakhams; Abdul serves the Queen, and Lady Sarah serves her too. Even Victoria turns out to be a servant of her own institution: when she is warned that she will be declared “insane and therefore unfit for office”, she gives way over Abdul's honours. Class cuts across race in revealing ways. Lascar Sally, a working-class Englishwoman, runs her own business and speaks Hindi to her lodgers, while Lady Sarah, a noblewoman, has influence only through the Queen. Abdul's story is a battle over rank: he refuses to remain a table servant, becomes Munshi, and after Victoria's death is sent home as if he had been nothing more. One reading sees Victoria as the play's most powerful figure. The more convincing reading, and the one the ending supports, is that power in the play belongs to systems, not persons: even the Empress cannot protect her friend.",
    },
    {
      title: 'Women, exploitation and survival',
      body: "Rani's story shows the double burden of being a colonised woman: she is exposed as a servant and as a young woman alone. She is dismissed by Susan Matthews, pressured by Hari when he has been drinking, and exploited by Lord Oakham, who uses his power as her employer and then throws her out, calling her a harlot as if the fault were hers. Gupta handles this without melodrama, and she refuses to let Rani be only a victim. Women save her: Firoza feeds and advises her, Lascar Sally and Firoza persuade her to take back the baby she has left on the quay, and the Home for Ayahs, founded by English women, shelters her. Victoria, meanwhile, is the most powerful woman in the world and still gives way to the men of her family. The contrast is pointed: the Queen's power is borrowed from an institution, while Rani's hard-won independence, as a mother, a worker and a teacher, is her own. You might find the rescues too convenient; the play's answer is that such networks of women really did exist, and the Ayahs' Home is the proof.",
    },
    {
      title: 'Friendship and community',
      body: "Abdul's first advice to Rani, that “you should choose your friends more carefully”, becomes the key to her survival. The people she is supposed to trust, her employers, betray her; the people she chooses save her. Around the docks Gupta builds a community of outsiders: Lascar Sally's boarding house, where sailors from across the Empire drink, sing and look out for one another; Firoza, who knows the ropes; Dadabhai, who gives Rani work and respect; and Hari, who keeps writing to her for years. Abdul's compass passes from him to Rani at Tilbury and back to him at Tilbury, a friendship bracketing the whole play. Victoria's friendship with Abdul is the palace's mirror of this, genuine but unequal, and in the end the court burns every trace of it. One reading is that Gupta sets community against empire: what the Empire breaks, friendship among its subjects repairs. That reading is persuasive, and it explains the ending, where the powerful are dead or gone and the friends are left standing on the quay.",
    },
    {
      title: 'Education and experience',
      body: "Reading and learning are how people rise in this play. Rani reads Coleridge to Hari on the voyage and promises to help him with his reading; years later his letters, and his written list of the lascars' demands, show that he has learned. Abdul wins his place because he is educated (“English is one of several languages I am fluent in”) and becomes the Queen's teacher; Rani goes to evening classes, works for Dadabhai and becomes a teacher herself. But Gupta sets book-learning against lived experience. Victoria knows India only at second hand, and Abdul tells her, in the play's central line, that “feeling is not the same as experiencing”. In the final scene he pictures the lands she ruled as having “gravitated around her, like planets circling the sun”: she was the fixed centre, while servants like him and Rani did the travelling. The play's argument is not against education but about whose knowledge counts: the empire's official knowledge, or the knowledge of the people who live under it.",
    },
    {
      title: 'Identity and belonging',
      body: "Everyone in The Empress is working out who they are allowed to be in Britain. Rani arrives thrilled to be in the Queen's country and is told she is “merely my servant’s offspring”; later, taken on by the Oakhams, she is told to cook curry and wear her sari to please Lord Oakham, dressed up to suit other people's wishes. Abdul fights to be seen as a teacher rather than a waiter. Dadabhai is elected to represent Londoners and is told he is an alien. Lascar Sally, an Englishwoman fluent in Hindi, belongs to a mixed dockside world that respectable London ignores. By the end, the question of belonging has turned over: Abdul and Dadabhai, the most eminent Indians, leave, while Rani and Hari, the servant and the sailor, stay and make a home. The final scene holds both feelings about Britain at once, calling it both magical and unforgiving. Gupta has said the play reflects a London where people from all over the colonies lived, struggled and thrived, and the ending insists that they were part of British history long before the migrations most people have heard of.",
    },
  ],

  characters: [
    {
      name: 'Rani Das',
      role: 'An ayah (nanny), sixteen when the play begins; its central figure',
      body: "Rani sails for England as ayah to the Matthews children, eager, well read and in awe of the Queen. Gupta puts her through almost everything the historical record says happened to ayahs: dismissed on arrival, alone on the docks, taken on by a new household and exploited by its master, thrown out after she becomes pregnant and, in despair, leaving her newborn daughter on the quay. What makes her the heart of the play is what follows. With Firoza and Lascar Sally's help she takes her daughter back and names her Asha, hope, goes to evening classes, works on Dadabhai's campaign and becomes a teacher, and when Hari does come back, with a business of his own, they meet as equals. One reading sees her as a symbol of the ayahs history forgot; the stronger one sees an individual who learns to find her own way, which is why she can hand Abdul's compass back at the end. Gupta regards her as the real Empress of the play, and her name means queen.",
    },
    {
      name: 'Hari Sharma',
      role: 'A lascar (sailor) in his twenties who falls in love with Rani',
      body: "Hari is charming, boastful and brave, and Gupta refuses to make him simply a hero. On the voyage he courts Rani, reads Coleridge with her and mocks Abdul as a lackee; in London he finds her a bed but, after drinking, pushes for more than she wants, and she leaves. His growth is the play's other great journey. Forced back to sea, he writes to Rani through Lascar Sally, learns to read and write as she urged, and uses that skill to lead the lascars' demands for equal treatment, for which he is beaten and put ashore at the Cape. He returns only when he feels he has something to offer, a furniture business in Whitechapel. Through him Gupta shows both the brutality of the lascars' lives and the dignity of a man who refuses to accept it.",
    },
    {
      name: 'Abdul Karim',
      role: "The Queen's Indian servant, then her Munshi (teacher); a historical figure",
      body: "Educated, multilingual and proud, Abdul is sent to Victoria as a Jubilee gift, a person treated as a present, and he refuses to stay a waiter: he presses for an official position and is made Munshi. With Victoria he is charming and attentive, but he is also the one person who tells her the truth about her empire, from what British rule has done in India to the suffering war brings. To Hari he is a lackee; to Lady Sarah an upstart; to Rani a protector who gives her his compass. One reviewer of the 2023 revival wondered how much of him is loyalty and how much calculation, and the play leaves room for both. It leaves no doubt about his fate: after Victoria's death he is dismissed, his letters are burned and he is sent back to India.",
    },
    {
      name: 'Queen Victoria',
      role: 'Queen of Britain and Empress of India; a historical figure',
      body: "Sixty-eight in 1887 and long widowed, Gupta's Victoria is funny, curious and lonely. She genuinely defends Abdul against her court's racism, insisting on keeping him and making him her Munshi, and she learns his language. Yet she has never seen India, knows it only from what others tell her, above all her Munshi, and speaks of her subjects as her children while enjoying the riches her empire sends her. When her family and household turn on her over Abdul and threaten her position, she gives way. Gupta has written of her fascination with the real Victoria's double standards, and the character is built on that contradiction. A strong answer holds both halves: a woman who could see past race in one man, and an Empress who could not see her empire.",
    },
    {
      name: 'Lady Sarah',
      role: "Victoria's lady-in-waiting",
      body: "The Queen's companion and secretary, and the play's most open voice of court prejudice. She assumes Abdul cannot speak English, explains him away with talk of Indian blood, insults his family by suggesting they live in a harem, passes on the court's gossip and suspicions, and brings the household's threats to the Queen. After Victoria's death she tells Abdul that his letters will be burned. She can be played for comedy, but Gupta gives her a motive beyond racism: Abdul threatens her own place at the Queen's side. She stands for an establishment that closes ranks against outsiders.",
    },
    {
      name: 'Dadabhai Naoroji',
      role: 'Indian politician and campaigner; a historical figure',
      body: "Dadabhai, already in his sixties in 1887, is the play's political conscience. On the voyage he talks with Gandhi about India's lack of representation; in London he helps open the Home for Ayahs, recognises Rani and gives her work on his campaign, and is elected to Parliament despite racist attacks. His speeches supply the play's fiercest images of empire, the greedy whale and the Jubilee set against famine, but his arc is one of disillusion: by 1900 he has lost his faith in British fairness and decides to return to India. Through him Gupta asks whether an unjust system can be changed from the inside.",
    },
    {
      name: 'Mohandas Gandhi',
      role: "A young Indian student, Dadabhai's protégé; a historical figure",
      body: "In the play the future leader of India's independence movement is a shy young man, travelling to England to become a lawyer and learning from Dadabhai, who urges him to have more confidence. By the end, as Pearson's mark scheme points out, he is leaving England to help those suffering in the war in South Africa. Gupta uses him as a quiet reminder of what is coming: the movement that will one day end British rule in India is already on the ship.",
    },
    {
      name: 'Lascar Sally',
      role: 'An Englishwoman who runs a boarding house and tavern for lascars at the docks',
      body: "Loud, bawdy and kind, Sally keeps a rowdy house of sailors in order, speaks Hindi with her lodgers, and takes Rani in on her first night. She keeps Hari's letters for Rani over the years, rescues Rani and her baby with Firoza, and helps bring Rani and Hari back together. Gupta found a Hindi-speaking English landlady of this kind in her research, and the nickname itself comes from history. Sally shows a working-class London where people of different races lived and loved together, and a woman with more independence than any lady at court.",
    },
    {
      name: 'Firoza',
      role: 'An experienced ayah who befriends Rani',
      body: "Firoza meets Rani on the docks after her first night, gives her food and tells her how to find work. Later, with Lascar Sally, she sees Rani leave her baby on the quay and persuades her to take her back, takes her and Asha in, and brings her to the Home for Ayahs, where she works alongside Rani for Dadabhai's cause. She stands for the solidarity among ayahs that the historical Ayahs' Home tried to organise: the knowledge of how to survive, passed from one woman to another.",
    },
    {
      name: 'Lord Oakham',
      role: "Rani's second employer, an aristocrat raised in India",
      body: 'Lord Oakham grew up in India until he was fourteen and misses it: he wants Rani to cook Indian food for him, says it brings back happy memories, and insists that she be dressed as an Indian woman. He then uses his power as her employer to pressure her into a sexual relationship, and after she becomes pregnant by him he has her thrown out with no support, calling her a harlot. Gupta makes his nostalgia the disguise of his exploitation: his love of India is a love of possessing it. When she revised the play in 2023, Gupta said she made his grooming of Rani more manipulative.',
    },
    {
      name: 'Susan Matthews',
      role: "Rani's first employer",
      body: "Rani's mother had served Susan's family in India, and Susan had promised her that she would look after Rani in England. She uses Rani for the voyage and dismisses her on the quay because the family already has an English nanny, brushing aside Rani's pleas with contempt. She shows the ayah system at its most ordinary, and the fact that two generations of loyalty count for nothing shows that loyalty was only ever expected to run one way.",
    },
    {
      name: 'The Serang',
      role: 'The overseer of the lascar crew on the ship',
      body: "The Serang drives the lascars with threats, kicks and a bamboo stick, and threatens to send Hari down to the boiler room. Gupta makes the lascars' tormentor one of their own: the Empire works through intermediaries who pass its brutality down the line, and the Serang's cruelty is the ship's hierarchy in human form.",
    },
    {
      name: 'Georgina',
      role: 'The woman who gives Rani a job with Lord and Lady Oakham',
      body: "Rani meets Georgina on the docks, desperate for work after her first night in London, and Georgina gives her a job as ayah to Lord and Lady Oakham. It looks like rescue, and the audience shares Rani's relief, which is exactly what makes the next scenes so painful: the job that saves her from the street takes her into Lord Oakham's house. Pearson's scheme of work asks students to predict what will happen when Rani goes with Georgina, and that is the right question: Gupta lets the audience fear the answer before Rani does. Georgina's part is small, but she marks the turning point of Rani's first act.",
    },
  ],

  keyQuotes: [
    {
      text: 'All of them are barefooted and look undernourished and dirty',
      where: 'Opening stage direction, Act 1, Scene 1 (the lascars on deck)',
      analysis:
        "Before a word of dialogue, Gupta shows the audience the people who make the Empire move. The flat list of physical facts reads like evidence, and the collective “All of them” matters: the lascars appear first as a group treated as interchangeable labour, not as individuals. Set against the golden egg cup at Windsor two scenes later, it establishes the play's central contrast between the wealth of empire and the bodies that pay for it.",
    },
    {
      text: 'I will send your skinny little body down to hell',
      where: 'The Serang to Hari, Act 1, Scene 1',
      analysis:
        "The Serang's threat turns the ship into a hierarchy with a hell at its bottom: the boiler room, where lascars shovelled coal to keep the fires burning. “Skinny little body” sneers at the very hunger the stage directions have shown, so the insult blames Hari for the condition his employers keep him in. That the threat comes from the lascars' own overseer, not an English officer, shows how the system recruits the colonised to police one another.",
    },
    {
      text: 'still a lackee to the white man',
      where:
        "Hari, about Abdul Karim, Act 1, Scene 1 (page 24 of the Oberon edition, according to Pearson's scheme of work)",
      analysis:
        "Abdul has just warned Rani off Hari, who calls him “very stuck up” and hits back with class and race together. “Lackee”, the play's spelling of lackey, is a servant's word, and “still” insists that no fine clothes change Abdul's rank in the Empire's eyes. The line is bitterly funny and partly true, yet it also shows how empire sets colonised people against one another, each measuring the other's closeness to white power. The rest of the play tests Hari's charge: Abdul does rise, and is dismissed as a servant in the end.",
    },
    {
      text: 'you should choose your friends more carefully',
      where: 'Abdul Karim to Rani, Act 1, Scene 1',
      analysis:
        "Abdul means it as a warning against Hari, and it sounds snobbish, but it becomes the principle of Rani's whole story. She is let down by the people she is supposed to trust, her employers, and saved by the friends she chooses: Lascar Sally, Firoza, Dadabhai and, in the end, Hari himself. Abdul soon gives her a compass to go with the advice, and when she hands it back to him on the same quay at the end, the circle closes.",
    },
    {
      text: 'merely my servant’s offspring',
      where: 'Susan Matthews to Rani, at Tilbury Docks, Act 1, Scene 4',
      analysis:
        "Rani's mother had served Susan's family in India, and Susan had promised her to look after Rani, so Susan is breaking a bond between two families, not just ending a job. “Merely” shrinks Rani to nothing, and “offspring”, a cold, clinical word, strips her of a name and even of childhood: she exists only as the product of someone who once served. The phrase exposes the logic of the ayah system, in which loyalty was expected to flow one way, and matches what historians record of ayahs discharged on arrival.",
    },
    {
      text: 'English is one of several languages I am fluent in',
      where: 'Abdul Karim, on his arrival at Windsor, Act 1, Scene 4b',
      analysis:
        "Lady Sarah assumes the Jubilee gift cannot even speak English; Abdul answers, in polished English, that he speaks several languages. The quiet correction reverses the expected hierarchy of knowledge, making the supposedly civilised court the ignorant party. It also shows how Abdul will rise, through language and learning, which is why he becomes the Queen's teacher. Pearson chose this line as the starting point of an exam question in 2022.",
    },
    {
      text: 'enlighten us on the habits and customs of our subjects so far away',
      where: 'Queen Victoria, welcoming Abdul, Act 1, Scene 4b',
      analysis:
        "Victoria welcomes Abdul warmly, but listen to her pronouns. The royal “us” and the possessive “our subjects” frame India as property she owns, and “so far away” admits that she has never seen it. Abdul is wanted first as a source of information, a living guidebook, so her curiosity, though far kinder than Lady Sarah's contempt, is still a form of imperial possession. The line sets the terms of the whole relationship: warm, curious, and unequal.",
    },
    {
      text: 'Indian blood is thinner than the English',
      where: 'Lady Sarah, Act 1, Scene 7',
      analysis:
        "Lady Sarah turns racism into a mock-scientific claim about blood. The line is absurd enough to be darkly comic in performance, but Gupta uses the comedy to expose how Victorian prejudice dressed itself up as fact about bodies. It is also a move in a power struggle: by making Abdul less than fully equal in body, Sarah defends her own place at the Queen's side against a man she sees as a rival.",
    },
    {
      text: 'equal pay with the white sailors',
      where: "Hari's list of the lascars' demands, Act 2, Scene 2",
      analysis:
        "The first demand is also the simplest, and its plainness is its force. “Equal” names exactly what the system denies, and “the white sailors” names the colour line the Empire's ships ran on, where lascars were hired on worse terms and paid less. Hari can now write his demands down because Rani taught him to value reading: Gupta links literacy directly to resistance, and his reward is to be beaten and put ashore at the Cape.",
    },
    {
      text: 'We may be Queen and Empress but we are not made of stone',
      where: 'Queen Victoria to Abdul, Act 2, Scene 4',
      analysis:
        'Victoria insists on her feelings, and the royal plural works against her: even while claiming a human heart she speaks as an institution. “Queen and Empress” piles up titles in the same breath as the denial, so the line sounds like the stone it rejects. She goes on to call her subjects her children, a parental image that softens rule into love. Gupta lets the audience hear both the sincerity and the self-deception.',
    },
    {
      text: 'feeling is not the same as experiencing',
      where: "Abdul Karim's reply, Act 2, Scene 4",
      analysis:
        "Perhaps the play's central idea, spoken by a servant to an empress. Abdul separates sympathy, which costs the sympathiser nothing, from suffering, which her subjects live; the calm, balanced sentence gives his correction a teacher's authority. The line shows the friendship at its most honest, since he can say what no courtier would, and it asks the audience whether honesty is enough when the listener holds all the power.",
    },
    {
      text: 'the daily humiliation of abuse',
      where: 'Abdul Karim to Victoria, Act 2, Scene 4',
      analysis:
        'Abdul reminds the Queen that she is spared what her subjects endure. “Daily” makes oppression a routine rather than an event, and “humiliation” names what the lascars and ayahs have already shown the audience: indignity, not just hardship. The phrase links the palace scenes to the docks, compressing everything Rani and Hari have suffered into words Victoria can hear but will never feel.',
    },
    {
      text: 'like a greedy whale, she is swallowing entire countries',
      where: 'Dadabhai Naoroji, Act 2, Scene 5',
      analysis:
        "Dadabhai turns the Empress into a sea monster. The simile, apt in a play full of ships and oceans, makes imperial expansion an act of appetite rather than civilisation, and “swallowing entire countries” captures its scale, with nations reduced to mouthfuls. It is the play's most direct political image, and it deliberately punctures the motherly picture Victoria paints of herself in the scene before.",
    },
    {
      text: 'an alien in race, in custom, in religion',
      where:
        "Sir Lepel Griffin's attack on Dadabhai, read aloud after his election, Act 2, Scene 7",
      analysis:
        "These are the words of a real opponent, and Gupta sets them inside the celebration of Dadabhai's victory. The triple structure, race, custom, religion, sounds like a legal verdict and leaves nothing of Dadabhai that could belong. Heard at his moment of triumph, it shows that winning the vote does not win acceptance, and it prepares for his later loss of faith in British fairness.",
    },
    {
      text: 'gravitated around her, like planets circling the sun',
      where: 'Abdul Karim, about Victoria, in the final scene, Act 2, Scene 15',
      analysis:
        "In the final scene Abdul pictures the lands Victoria ruled in orbit around her. The cosmic simile honours her power, but the image is also static: the sun stays put while everything circles it. Victoria, who in the play never set foot in India, is the fixed centre; Abdul and Rani are the travellers. The title's question is answered here: the Empress ruled everything and saw almost nothing, while her servants saw it all.",
    },
  ],

  extracts: [
    {
      title: 'Abandoned at Tilbury',
      where: 'Act 1, Scene 4',
      pointer:
        'The scene at Tilbury Docks, from the Matthews family telling Rani they no longer need her, through Abdul giving her his compass, to Hari offering to find her somewhere to stay.',
      summary:
        "The voyage is over and the ship has docked at Tilbury. The Matthews family tell Rani that they no longer need her, because they already have an English nanny. Rani protests that Susan Matthews promised her mother, who had served Susan's family in India, that she would look after her, but Susan brushes her off with contempt. Abdul comforts Rani, telling her to be brave, and gives her his compass as a good-luck charm to guide her, and Hari offers to find her somewhere to stay.",
      annotations: [
        {
          phrase: 'We have no need for you',
          note: 'The flat, collective “We” speaks for the whole family and leaves no room for argument: Rani becomes surplus luggage the moment the voyage ends. Historians of the ayahs record exactly this practice of dismissal on arrival.',
        },
        {
          phrase: 'merely my servant’s offspring',
          note: 'Susan turns a lifelong bond between two families into a line of ownership. The contempt of “merely” lets the audience feel the whole hierarchy of class and race in a single phrase.',
        },
        {
          phrase: 'the right place',
          note: "Abdul's compass is meant to guide Rani to the right place. The gift turns a practical instrument into a symbol of guidance and choice, answering his advice on the ship about choosing friends, and it returns in the final scene when Rani gives it back.",
        },
      ],
      question:
        'Using this scene as a starting point, explore how Gupta presents the ways Rani is treated in England. You must refer to the context of the play in your answer.',
    },
    {
      title: 'The portrait: Abdul speaks up',
      where: 'Act 2, Scene 4',
      pointer:
        "The portrait scene, from its opening, as Abdul poses and the court hears from a letter to the Queen by Cecil Rhodes, through Abdul's challenges to Victoria about the suffering of her subjects.",
      summary:
        'Abdul is having his portrait painted at court, and the talk turns to empire, beginning with a letter from the imperialist Cecil Rhodes. In the course of the scene Abdul presses the Queen hard. He reminds her that she is spared the humiliation her subjects endure, and when the talk turns to fighting in the Empire he points out that many innocent lives must have been lost and that war brings suffering she has never experienced. Victoria protests that she feels for her subjects, whom she calls her children. Abdul answers that feeling is not experiencing, and he makes a pointed wish that her agents abroad were as high-minded as she is.',
      annotations: [
        {
          phrase: 'not made of stone',
          note: "Victoria's denial of hardness borrows the image of a statue, which is what a monarch on coins and monuments already is: the metaphor she rejects fits her better than she knows.",
        },
        {
          phrase: 'feeling is not the same as experiencing',
          note: "Abdul's calm, balanced sentence separates sympathy from suffering. The teacher's role Victoria gave him now becomes a critic's, and the servant corrects the Empress.",
        },
        {
          phrase: 'the daily humiliation of abuse',
          note: "The abstract noun names what the docks scenes have shown, and “daily” makes it permanent: Abdul brings Rani's and Hari's world into the palace.",
        },
        {
          phrase: 'high-minded',
          note: "The closing compliment is double-edged. Praising the Queen's own principles while doubting her agents lets Abdul criticise the Empire without openly criticising her, which is how a courtier survives.",
        },
      ],
      question:
        'Using this scene as a starting point, explore how Gupta presents the relationship between Queen Victoria and Abdul Karim. You must refer to the context of the play in your answer.',
    },
    {
      title: 'Tilbury again: the final scene',
      where: 'Act 2, Scene 15',
      pointer:
        "The whole of the final scene, from Rani and Hari saying goodbye to Dadabhai at Tilbury Docks to Abdul's departure for India under royal escort.",
      summary:
        "Years after she first stepped ashore here, Rani is back at Tilbury with Hari, seeing Dadabhai off to India. They meet Abdul, who is being sent home after the Queen's death with nothing to remember her by. Rani tells him that she has become a teacher, like him, and gives him back the compass he gave her on this same quay, hoping it will bring him luck. Abdul and Rani look back on Victoria's power and on a country that has been both wonderful and harsh to them.",
      annotations: [
        {
          phrase: 'a strange, intoxicating',
          note: "Abdul's adjective suggests both delight and drunkenness: the country has dazzled him and, like a drink, left him unsteady. Spoken on the quay as he is sent away, it sums up his years at court, and “strange” keeps him an outsider to the end.",
        },
        {
          phrase: 'At once magical but at the same time unforgiving',
          note: "Rani's reply holds both halves of her experience in one balanced line. The possibilities of London and the cruelty of her employers are equally true, and the play refuses to cancel either.",
        },
        {
          phrase: 'gravitated around her, like planets circling the sun',
          note: 'The cosmic simile makes Victoria the still centre of a moving world. The servants who stand on the quay are the ones who have actually travelled it.',
        },
        {
          phrase: 'I have nothing to remember her by',
          note: "Plain, short words after so much ceremony. The burning of his letters has wiped the friendship from the record, just as history very nearly did, and Gupta's play is partly an act of putting it back.",
        },
      ],
      question:
        'Using the final scene as a starting point, explore how Rani changes over the course of the play. You must refer to the context of the play in your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Cross-cutting and split staging',
      example:
        'Act 1, Scene 15: on one side of the stage Abdul teaches Victoria the Hindustani words for I love you (“Me tum se pyar karti hui”); on the other, Rani stands at the docks with her baby, and the act ends with the stage direction “Rani places the baby on the ground and walks away”.',
      effect:
        "Gupta rarely lets the audience enjoy the palace without seeing its cost. Setting a tender lesson in love beside a destitute young mother makes a political argument without a speech: the Empress's affection is lavish and personal, while her empire's servants are left with nothing. She does the same in the Oakham scenes of Act 1, where Hari is writing to Rani at the same time as Lord Oakham exploits her, and in Act 2, Scene 11, where Dadabhai's speech about India's poverty is set against Victoria being dressed in diamonds. Pearson's examiners have praised candidates who noticed this staging.",
    },
    {
      technique: 'Stage directions as commentary',
      example:
        "“All of them are barefooted and look undernourished and dirty” (the opening, Act 1, Scene 1); “Lord Oakham looks at Rani and smiles secretly” and “Rani stands back at some distance” (the Oakham household, Act 1, Scenes 9 and 10, pages 70 to 71 of the Oberon edition, according to Pearson's scheme of work).",
      effect:
        "Much of Gupta's judgement sits in her stage directions, which readers easily skim. The first makes the lascars' hunger visible before anyone speaks; the second pair lets the audience see Lord Oakham's intentions, and Rani's wariness, before anything is said, creating dramatic irony and dread. When you write about a scene, quote the stage directions as well as the dialogue: they are Gupta's own voice.",
    },
    {
      technique: 'The royal plural',
      example:
        'Victoria: “We may be Queen and Empress but we are not made of stone” (Act 2, Scene 4).',
      effect:
        'Victoria constantly refers to herself as we, the historical royal plural. Gupta uses it to show the gap between the woman and the institution: even when Victoria claims personal feeling, the grammar makes her a crown speaking. It is a source of comedy in the palace scenes and of pathos later, when the woman behind the pronoun is old, ill and lonely.',
    },
    {
      technique: 'Animal imagery for empire',
      example:
        'Dadabhai: “like a greedy whale, she is swallowing entire countries” (Act 2, Scene 5).',
      effect:
        'The metaphor makes expansion a matter of appetite, not duty or civilisation, and the sea creature suits a play whose empire is held together by ships. Coming straight after Victoria has called her subjects her children, the image replaces the loving mother with a devouring monster, and the audience is left to judge which picture is truer.',
    },
    {
      technique: 'Cosmic simile',
      example:
        'Abdul on Victoria: the lands she ruled “gravitated around her, like planets circling the sun” (Act 2, Scene 15).',
      effect:
        "The simile gives Victoria the grandeur of a sun but also its stillness: everything moves around her while she stays put. It crystallises the play's contrast between the Empress, who never saw India, and the servants who crossed oceans, and it lets Abdul pay tribute and pass judgement in the same breath. It also answers an earlier image: in Act 2, Scene 4 the court hears that Cecil Rhodes would annexe the planets for the Queen if he could. Rhodes wants to own the heavens; Abdul simply notes that everything already circled her, and that she never moved.",
    },
    {
      technique: 'Multilingual dialogue',
      example:
        "Abdul's reply at Windsor that “English is one of several languages I am fluent in” (Act 1, Scene 4b); Lascar Sally speaking Hindi to her lodgers; the words of love Abdul teaches Victoria in Hindustani, “Me tum se pyar karti hui” (Act 1, Scene 15).",
      effect:
        'Language in the play is power. The English court assumes Indians cannot speak English, while the Indian characters, and the working-class Sally, move between languages with ease. When the Empress learns to say I love you in the language of her servant, with the servant as her teacher, the language of the colonised becomes the language of intimacy, and for a moment the hierarchy turns over.',
    },
    {
      technique: 'Dehumanising language',
      example:
        "Lady Sarah's “Indian blood is thinner than the English” (Act 1, Scene 7); the Serang's “skinny little body” (Act 1, Scene 1); Lord Oakham calling Rani a “harlot” (Act 1, Scene 14).",
      effect:
        "Gupta gives prejudice its own vocabulary of blood, bodies and sexual insult. Each speaker reduces a person to a body that can be dismissed, and each insult protects the speaker's power. Notice the irony of the last: the man who exploited Rani is the one who names her the sinner.",
    },
    {
      technique: 'Symbolism: the compass',
      example:
        'Abdul gives Rani his compass at Tilbury so that it will guide her to “the right place” (Act 1, Scene 4); she gives it back to him on the same quay in Act 2, Scene 15.',
      effect:
        "A compass is a sailor's instrument in a play about voyages, and a symbol of choosing a direction in a life others want to direct for you. That Rani can return it shows she no longer needs to borrow anyone's guidance, and the gift passing between two Indian travellers is a small, private exchange set against the Empire's grand ceremonies.",
    },
  ],

  structureForm: [
    {
      heading: 'An epic in two acts',
      body: "The Empress covers fourteen years, from 1887 to 1901, in two acts of many short scenes: fifteen in Act 1, with an extra Scene 4b, and fifteen in Act 2. Gupta called it a big, epic story with five major journeys, and the form suits the subject: a story about people travelling across an empire is told in a play that keeps moving, from ship to palace to docks to parliament. Time jumps between scenes (Act 2 opens in 1891, reaches the Diamond Jubilee of 1897 and 1900 before the Queen's death), which gives the play sweep but also speed; one reviewer of the 2023 revival felt there were an awful lot of stories to get through. In an essay you can argue either way: that the rush is a weakness, or that it deliberately mirrors lives shaped by forces moving too fast to control.",
    },
    {
      heading: 'Parallel stories and cross-cutting',
      body: "The play alternates between Victoria's palace and the world of the docks, and at key moments stages both at once. Rani and Abdul arrive on the same ship and their stories run side by side for the rest of the play, one rising at court, the other falling and rebuilding. Cross-cut scenes, which Pearson's scheme of work picks out in Act 1, Scene 15 and Act 2, Scenes 8, 9 and 11, make the connection visual, so that the audience draws the political conclusion for itself. Pearson's scheme of work asks why Gupta ends Act 1 on such a contrast: the answer is that the Empress's love and the ayah's despair are two sides of the same system.",
    },
    {
      heading: 'A circular journey',
      body: "The play begins at sea and at Tilbury Docks and ends at Tilbury Docks, and the first scene ends with the same lascar song that opened it. The circle is not a return to where things started but a reversal. In 1887 Rani stepped ashore alone and abandoned, and Abdul, the Queen's gift, was full of hope; at the end Abdul is being sent away under escort with nothing, while Rani, a mother, a teacher and no longer alone, stays. The compass given on the quay in Act 1 is given back on the quay in Act 2. The shape tells the audience who, in the end, belongs.",
    },
    {
      heading: 'History and invention',
      body: "Gupta blends a documented royal story with invented lives built from history, and she weaves real words into the dialogue, such as Sir Lepel Griffin's attack on Dadabhai. This is historical drama with a purpose: to put back into British history the Indians it left out. The invented characters are where Gupta has most freedom, and she uses them to show what the records did not keep, the inner lives of an ayah and a lascar. When you write about form, you can argue that the mixture makes the play persuasive, since the audience knows the frame is true, and also that it makes the play pointed, since Gupta chooses which truths to stage side by side.",
    },
    {
      heading: 'Music, song and spectacle',
      body: "The play opens with the lascars singing as they work, the same song closes the first scene, and songs fill Lascar Sally's boarding house and open the montage of Act 1, Scene 12. An extract from Kipling's The White Man's Burden opens Act 2, Scene 10, just before the Diamond Jubilee, placing the empire's own anthem beside the people it described as a burden. The effect is to give the voiceless a collective voice: the lascars have no say in Parliament, but on stage their songs set the terms of the play before the politicians speak.",
    },
    {
      heading: 'The title',
      body: "The Empress names Victoria, Empress of India since 1876, and for much of the play the title seems simply hers. But Rani's name means queen, and Gupta has said she sees Rani as the real Empress of the play. Read that way, the title is ironic: the woman with the crown never leaves her palaces and is ruled in the end by her family and court, while the servant crosses the world, loses everything and remakes her life. A strong conclusion can turn on this: who, by the final scene, deserves the title?",
    },
  ],

  vocabulary: [
    {
      term: 'Ayah',
      definition:
        'An Indian nanny or nursemaid employed by British families, in India and on voyages to Britain. Rani and Firoza are ayahs.',
    },
    {
      term: 'Lascar',
      definition:
        'A sailor from India or elsewhere in Asia or Africa employed on British and other European ships, usually on lower pay and worse terms than white sailors. Hari is a lascar.',
    },
    {
      term: 'Serang',
      definition:
        'The boss of a lascar crew, who organised and disciplined the men. In the play the Serang drives the lascars with threats and blows.',
    },
    {
      term: 'Munshi',
      definition:
        'A word meaning clerk, secretary or teacher, especially of languages. It is the title Victoria gives Abdul when she promotes him.',
    },
    {
      term: 'Khitmagar (khidmatgar)',
      definition:
        "A table servant. Abdul's first post at court, from which the Queen raises him to Munshi.",
    },
    {
      term: 'Empress of India',
      definition:
        "The title Victoria took in 1876, confirmed by the Royal Titles Act. The play's title plays on it.",
    },
    {
      term: 'Golden Jubilee and Diamond Jubilee',
      definition:
        "The fiftieth (1887) and sixtieth (1897) anniversaries of Victoria's accession, both celebrated with great ceremony across the Empire. The play opens in the first and stages the second.",
    },
    {
      term: 'Lady-in-waiting',
      definition:
        "A noblewoman who attends a queen as a companion and private secretary rather than as a servant. Lady Sarah's role.",
    },
    {
      term: 'Home Rule',
      definition:
        'Self-government within the Empire. In Naoroji’s years in Parliament it was chiefly the cause of Irish nationalists, which he spoke for; the demand for Indian self-rule (swaraj) came later, and Naoroji himself called for it as Congress president in 1906.',
    },
    {
      term: 'Indian National Congress',
      definition:
        'The Indian nationalist organisation that Dadabhai helped to found and led three times as president, and which later led the independence movement.',
    },
    {
      term: 'Raj',
      definition:
        'British rule over India, run directly by the Crown from 1858 after the East India Company lost its control.',
    },
    {
      term: 'Imperialism',
      definition:
        'The policy of extending a nation’s power by taking territory and ruling other peoples. The play shows its splendour at court and its cost at sea and on the docks.',
    },
    {
      term: 'Lackey (lackee in the play)',
      definition:
        'A servant, or someone who obeys a more powerful person without question. Hari’s insult for Abdul.',
    },
    {
      term: 'Harlot',
      definition:
        'An old, contemptuous word for a prostitute. Lord Oakham uses it of Rani to shift the blame for his own abuse of power onto her.',
    },
    {
      term: 'Parsi',
      definition:
        'A member of India’s Zoroastrian community. Dadabhai Naoroji was a Parsi, and his opponents used his religion against him.',
    },
    {
      term: 'Constituency',
      definition:
        'The area an MP is elected to represent. The real Naoroji won Finsbury Central, in London, in 1892.',
    },
    {
      term: 'Cross-cutting',
      definition:
        'Staging two scenes at once, or switching rapidly between them, so that each comments on the other. Gupta’s signature technique in this play.',
    },
    {
      term: 'Pseudo-science',
      definition:
        'False claims presented as scientific fact, like Lady Sarah’s idea that Indian blood is thinner than English blood, often used in the Victorian period to justify racism.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Abdul Karim: “feeling is not the same as experiencing” (Act 2, Scene 4). Explore how Gupta presents the relationship between Queen Victoria and Abdul Karim. You must refer to the context of the play in your answer.',
        skill: 'Whole-play essay: a relationship, with context',
        guidance: [
          '1. Open with a thesis, not a summary: for example, that the friendship is genuine but never equal, and that Gupta uses it to test how far even a well-meaning monarch can see past empire.',
          '2. Start where it starts, in Act 1, Scene 4b. Victoria keeps Abdul so that he can “enlighten us on the habits and customs of our subjects so far away”; comment on the royal plural and the possessive, and link to context: she had been Empress of India since 1876 and never visited it.',
          '3. Trace the growth: his promotion from table servant to Munshi (Act 1, Scene 11) and the language lessons, up to the Hindustani words of love he teaches her in Act 1, Scene 15, cross-cut with Rani abandoned at the docks. Ask what that staging adds.',
          '4. Use the stimulus in Act 2, Scene 4, where the friendship becomes critical: Abdul separates sympathy from suffering and speaks of the daily humiliation of abuse. Explain why only the Munshi could say this to her.',
          "5. Show its limits: Lady Sarah's prejudice, the threat to Victoria's throne in Act 2, Scene 8 and her giving way, and the burning of the letters after her death, which the real Edward VII ordered in 1901.",
          '6. Conclude with a judgement: is the relationship evidence that individuals can cross the lines empire draws, or proof that they cannot? Weigh both, then choose.',
        ],
      },
      {
        question:
          'Susan Matthews: “merely my servant’s offspring” (Act 1, Scene 4). Explore how Gupta presents the treatment of Indian servants and workers in The Empress. You must refer to the context of the play in your answer.',
        skill: 'Whole-play essay: a theme, with context',
        guidance: [
          '1. Thesis: Gupta shows servants treated as disposable, yet gives them the play’s moral authority and its happiest ending.',
          "2. Rani's dismissal at Tilbury (Act 1, Scene 4), linked to the historical practice of discharging ayahs on arrival and to the Ayahs' Home, founded in 1891.",
          "3. The lascars: the opening stage direction, the Serang's threats, and Hari's written demands in Act 2, Scene 2, linked to the lower pay and harsh conditions lascars faced on British ships.",
          '4. Lord Oakham (Act 1, Scenes 9, 10 and 14): his nostalgia for India and his wish to see Rani dressed as an Indian woman, then his abuse of his power as her employer and the insult he throws at her. Write about this precisely and without dwelling on it.',
          '5. Abdul: even the Queen’s servant remains a servant in the household’s eyes, from the royal family’s objections that Lady Sarah brings to Victoria in Act 2, Scene 8 to his dismissal after her death.',
          '6. The counterweight: the servants’ solidarity and rise, with Rani a teacher and Hari running his own business. Judge whether Gupta’s ending answers the injustice or only softens it.',
        ],
      },
      {
        question:
          'Dadabhai Naoroji: “like a greedy whale, she is swallowing entire countries” (Act 2, Scene 5). How does Gupta present the British Empire in The Empress? You must refer to the context of the play in your answer.',
        skill: 'Whole-play essay: a theme, with context',
        guidance: [
          '1. Thesis: Gupta shows the Empire from above and below at once, and her staging makes the audience see the contradiction for itself.',
          "2. The view from above: Victoria's golden egg cup, the Jubilees, and her motherly image of her subjects as her children (Act 2, Scene 4).",
          '3. The cost: the lascars in the opening stage direction, the ayahs discarded at Tilbury, and Abdul telling Victoria, as he describes the Taj Mahal, what British rule has done in India (Act 1, Scene 7).',
          "4. The political critique: Dadabhai's greedy whale, Sir Lepel Griffin's attack on him, and his speech on India's suffering cross-cut with the Diamond Jubilee (Act 2, Scene 11). Link to the real Naoroji's argument that British rule drained India's wealth.",
          '5. The language of empire: Cecil Rhodes’s letter claiming the British are “the first race in the world” (Act 2, Scene 4) and the Kipling extract that opens Act 2, Scene 10, and how the play frames them.',
          "6. Conclude with the ending: Dadabhai's lost faith in British fairness and Abdul's image of the lands circling Victoria like planets. What final verdict does Gupta invite?",
        ],
      },
      {
        question:
          'Abdul Karim: “you should choose your friends more carefully” (Act 1, Scene 1). Explore how Rani changes over the course of the play. You must refer to the context of the play in your answer.',
        skill: 'Whole-play essay: a character’s development, with context',
        guidance: [
          '1. Thesis: Rani moves from dependence to self-direction; the play is the story of a young woman learning to choose her own way, not simply of a victim.',
          '2. The beginning: sixteen, eager, well read, loyal to the Matthews family and in awe of the Queen. Link to the ayahs who travelled with British families.',
          "3. The fall: dismissal, the night at Lascar Sally's, Lord Oakham's exploitation, and the stage direction that ends Act 1. Explain how Gupta makes the audience feel her isolation.",
          "4. The rebuilding: Asha's name, the Home for Ayahs, evening classes, work on Dadabhai's campaign. Link to the real Ayahs' Home and to Naoroji's election in 1892.",
          '5. The end: a teacher, reunited with Hari now that they can meet as equals, handing back the compass she no longer needs. Show how the advice in the stimulus has been fulfilled by the friends she chose.',
          '6. Judgement: Gupta has said she sees Rani as the real Empress of the play. Is that claim earned by the ending?',
        ],
      },
    ],
    tips: [
      'The quotation printed with the question is a starting point, not an extract to analyse. Write about the whole play, and move quickly from the stimulus to the moments that best answer the question.',
      "Context should drive the argument, not decorate it. Pearson's examiners have criticised answers on this play where context is bolted on rather than integrated, and answers led by history rather than by the play: use history to explain why characters act as they do.",
      "Staging is your best evidence. The examiners' report on the 2023 exam singled out candidates who noticed how Victoria's Jubilee is interspersed with Dadabhai's lines. Cross-cut scenes (Act 1, Scene 15; Act 2, Scenes 8, 9 and 11) let you write about Gupta's methods as well as her ideas.",
      'Separate history from invention. Victoria, Abdul Karim, Dadabhai Naoroji and Gandhi were real; Rani, Hari, Firoza and the Oakhams are Gupta’s creations. Saying that Gupta invents Rani in order to show something, or comparing the play’s Abdul with the real Abdul Karim, makes you sound like a critic rather than a storyteller.',
      "Do not make Victoria simply a heroine or a villain. The 2023 examiners' report praised answers that saw both the positives and the negatives of her character: she defends Abdul against racism, yet enjoys an empire she has never seen and gives way when her own position is threatened.",
      "Precise reference counts as evidence. Pearson's own training for this play says your references need not all be quotations, as long as it is very clear which part of the play you mean, so learn a handful of short phrases and the act and scene of every key moment.",
      'Keep the story short. Pearson’s trainers warn that many students spend too long retelling the plot: one sentence on what happens, then several on why Gupta makes it happen and what it shows.',
      'Your spelling, punctuation and range of vocabulary are assessed on this question, so leave a few minutes to check, and use the play’s own terms correctly: ayah, lascar, Serang, Munshi.',
      "Write about Rani's exploitation by Lord Oakham with care and precision: describe it as an employer's abuse of power over a young servant far from home, and link it to the vulnerability of ayahs, rather than dwelling on it.",
    ],
  },

  modelAnswer: {
    question:
      'Abdul Karim: “feeling is not the same as experiencing” (Act 2, Scene 4). Explore how Gupta presents the relationship between Queen Victoria and Abdul Karim. You must refer to the context of the play in your answer.',
    paragraph:
      "Gupta builds the relationship between Victoria and Abdul on the gap between knowing about a place and knowing it, and she lets Abdul, the servant, name that gap to the Empress's face. When he first arrives at Windsor in Act 1, Scene 4b, Victoria welcomes him because he can “enlighten us on the habits and customs of our subjects so far away”: the royal plural and the possessive “our subjects” show that she values him first as a source of information about a country she owns but has never seen. Victoria had been Empress of India since 1876 without once visiting it, and Gupta turns that historical fact into the engine of the friendship. By Act 2, Scene 4 the teacher has become a critic. As his portrait is painted, Victoria insists that she is “not made of stone”, and Abdul replies that “feeling is not the same as experiencing”, a calm correction that exposes how little sympathy from a palace costs. An audience could read the friendship simply as genuine affection, and the play gives that reading real support, from the Hindustani lessons to the words of love he teaches her. The stronger reading, though, is that Gupta uses it to show the limits of even the most generous imperial power: Victoria, who defends Abdul against her court's prejudice, still gives way when her family and household threaten her position, and after her death his letters are burned, as the real Edward VII ordered. The friendship is warm, then, but never equal, and that inequality is Gupta's point about empire.",
    commentary: [
      'It opens with an argument about the relationship rather than a description of it, and every later sentence serves that argument.',
      'The quotations are short, embedded and analysed at word level (the royal plural, the possessive, the balance of Abdul’s reply), showing method even though the question is mainly about ideas.',
      'Context does real work: Victoria’s title and her never visiting India explain the imbalance, and the burning of the letters is used as evidence, not decoration.',
      'It moves across the whole play, from Act 1, Scene 4b to Act 2, Scene 4 and on to the Queen’s death, which is what a whole-play question needs.',
      'It weighs two readings and chooses the more convincing, giving the personal, critical voice the question rewards.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'The voyage to England',
      summary:
        'On board ship in 1887 the lascars scrub the deck under the Serang’s threats. Hari flirts with Rani, Abdul warns her to choose her friends carefully, and Hari mocks him. Dadabhai and the young Gandhi talk about India’s lack of a voice in Parliament.',
      setting: 'The deck of a steamship sailing from India to England',
      who: [
        'The Serang',
        'Hari Sharma',
        'Rani Das',
        'Abdul Karim',
        'Dadabhai Naoroji',
        'Mohandas Gandhi',
      ],
      quote: 'still a lackee to the white man',
      themes: ['Empire and exploitation', 'Race and prejudice', 'Power, class and service'],
      tension: 2,
      significance:
        'Every strand of the play starts on one ship, and its hierarchy, from the Serang down to the lascars, is the Empire in miniature.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Reading Coleridge',
      summary:
        'On deck Rani reads Coleridge with Hari and promises to help him with his reading when they reach London, so that he could find better work. Hari declares his love, and they kiss before Susan Matthews calls Rani away.',
      setting: 'The ship’s deck',
      who: ['Rani Das', 'Hari Sharma', 'Susan Matthews'],
      themes: ['Education and experience', 'Friendship and community'],
      tension: 1,
      significance:
        'The love story begins with a book, tying romance to literacy, the skill that will later let Hari write to Rani and fight for the lascars.',
    },
    {
      where: 'Act 1, Scene 3',
      title: 'Breakfast at Windsor',
      summary:
        'At Windsor Castle, in her Golden Jubilee year, Victoria breakfasts with her lady-in-waiting, Lady Sarah, eating from a golden egg cup. She learns that a gift has been sent to her from India.',
      setting: 'Windsor Castle',
      who: ['Queen Victoria', 'Lady Sarah'],
      quote: 'a golden egg cup',
      themes: ['Empire and exploitation', 'Power, class and service'],
      tension: 1,
      significance:
        'The first palace scene sets royal luxury directly against the hungry lascars the audience has just seen.',
    },
    {
      where: 'Act 1, Scene 4',
      title: 'Abandoned at Tilbury',
      summary:
        'The ship docks and Susan Matthews dismisses Rani, breaking her promise to Rani’s mother. Abdul gives Rani his compass for luck, and Hari offers to find her somewhere to stay.',
      setting: 'Tilbury Docks',
      who: ['Rani Das', 'Susan Matthews', 'Abdul Karim', 'Hari Sharma'],
      quote: 'merely my servant’s offspring',
      themes: [
        'Power, class and service',
        'Women, exploitation and survival',
        'Friendship and community',
      ],
      tension: 4,
      significance:
        'Rani’s fall begins the moment she lands, exactly as it did for many real ayahs, and the compass enters the play.',
    },
    {
      where: 'Act 1, Scene 4b',
      title: 'The Jubilee gift',
      summary:
        'Abdul is presented at Windsor as the Queen’s gift. Lady Sarah assumes he cannot speak English and expects him to be sent back, but he impresses Victoria, who wants him to stay and talk to her about India.',
      setting: 'Windsor Castle',
      who: ['Queen Victoria', 'Lady Sarah', 'Abdul Karim'],
      quote: 'English is one of several languages I am fluent in',
      themes: ['Race and prejudice', 'Education and experience', 'Power, class and service'],
      tension: 2,
      significance:
        'The relationship at the heart of the palace plot begins, and so does Lady Sarah’s hostility.',
    },
    {
      where: 'Act 1, Scenes 5 and 6',
      title: 'Lascar Sally’s boarding house',
      summary:
        'Hari takes Rani to Lascar Sally’s rowdy house for sailors, where she is frightened but Sally is kind to her and gives her a bed. Later Hari, who has been drinking, pushes for more than Rani wants, and she is frightened and leaves.',
      setting: 'A boarding house and tavern for lascars by the London docks',
      who: ['Hari Sharma', 'Rani Das', 'Lascar Sally'],
      themes: [
        'Friendship and community',
        'Women, exploitation and survival',
        'Identity and belonging',
      ],
      tension: 4,
      significance:
        'The dockside community appears, and Rani’s trust in Hari is broken, which is why the reunion must be earned.',
    },
    {
      where: 'Act 1, Scene 7',
      title: 'The Taj Mahal',
      summary:
        'Abdul is settling in at court, and Lady Sarah makes no secret of her prejudice. Victoria asks him about India, and he describes the Taj Mahal and speaks frankly about the consequences of British actions there.',
      setting: 'Windsor Castle',
      who: ['Queen Victoria', 'Abdul Karim', 'Lady Sarah'],
      quote: 'Indian blood is thinner than the English',
      themes: ['Race and prejudice', 'Empire and exploitation', 'Education and experience'],
      tension: 2,
      significance:
        'Abdul first shows Victoria the difference between admiring India from books and knowing what her empire does to it.',
    },
    {
      where: 'Act 1, Scene 8',
      title: 'Firoza on the docks',
      summary:
        'Back at the docks, the experienced ayah Firoza feeds Rani and tells her how to look for work. Georgina takes her on for the Oakhams. Hari arrives too late to find her and is forced back to sea.',
      setting: 'Tilbury Docks',
      who: ['Rani Das', 'Firoza', 'Georgina', 'Hari Sharma'],
      themes: ['Friendship and community', 'Women, exploitation and survival'],
      tension: 3,
      significance:
        'A missed meeting separates Rani and Hari for thirteen years, and Rani’s network of women begins with Firoza.',
    },
    {
      where: 'Act 1, Scenes 9 and 10',
      title: 'In Lord Oakham’s house',
      summary:
        'Rani now works for the Oakhams and cooks the Indian food Lord Oakham longs for, since it brings back his childhood in India, and he wants her dressed as an Indian woman. His looks at her, in the stage directions, warn the audience before she knows. He uses his power as her employer to pressure her into a sexual relationship, while at the same time Hari is writing to her from his ship.',
      setting: 'Lord Oakham’s house in London, with Hari at sea',
      who: ['Lord Oakham', 'Rani Das', 'Hari Sharma'],
      quote: 'Lord Oakham looks at Rani and smiles secretly',
      themes: [
        'Women, exploitation and survival',
        'Race and prejudice',
        'Power, class and service',
      ],
      tension: 4,
      significance:
        'Cross-cutting sets exploitation beside love, and shows nostalgia for India turning into possession of an Indian woman.',
    },
    {
      where: 'Act 1, Scene 11',
      title: 'The Munshi',
      summary:
        'Victoria raises Abdul from table servant to Munshi, her teacher, and he is overjoyed. The promotion is history: the real Abdul Karim was made Munshi in 1888, after complaining that waiting at table was beneath a man who had been a clerk.',
      setting: 'The royal court',
      who: ['Queen Victoria', 'Abdul Karim'],
      themes: ['Power, class and service', 'Identity and belonging', 'Education and experience'],
      tension: 2,
      significance:
        'Abdul claims a new identity at court, the rise that will make his fall so hard.',
    },
    {
      where: 'Act 1, Scene 12',
      title: 'Years pass',
      summary:
        'A short scene opened by a lascar song shows time passing through two contrasting images: Hari at sea, and Rani, now pregnant, still in the Oakham household.',
      setting: 'Two places at once: a ship at sea and the Oakham house',
      who: ['Hari Sharma', 'Rani Das'],
      themes: ['Women, exploitation and survival', 'Empire and exploitation'],
      tension: 3,
      significance:
        'The montage compresses years into moments and keeps the separated stories visibly connected.',
    },
    {
      where: 'Act 1, Scene 13',
      title: 'Lady Sarah’s warnings',
      summary:
        'Lady Sarah and the court make their resentment of the Munshi plain, and the scene shows how much of it is racism. Victoria stands by Abdul, and the scene ends with Sarah bowing to the Queen’s will, upset.',
      setting: 'The royal court',
      who: ['Queen Victoria', 'Lady Sarah'],
      quote: 'Lady Sarah bows in deference but she is upset',
      themes: ['Race and prejudice', 'Power, class and service'],
      tension: 3,
      significance: 'The court’s resentment of Abdul hardens, preparing the crisis of Act 2.',
    },
    {
      where: 'Act 1, Scene 14',
      title: 'Thrown out',
      summary:
        'After Rani becomes pregnant with Lord Oakham’s child, he has her thrown out of his house with no money and no support. He calls her a harlot, putting the blame on her, and she is left with nowhere to go.',
      setting: 'Lord Oakham’s house in London',
      who: ['Lord Oakham', 'Rani Das'],
      quote: 'harlot',
      themes: ['Women, exploitation and survival', 'Power, class and service'],
      tension: 5,
      significance:
        'Rani reaches her lowest point, abandoned for the second time by an English household.',
    },
    {
      where: 'Act 1, Scene 15',
      title: 'Love and despair',
      summary:
        'On one side of the stage Abdul teaches Victoria Hindustani, including the words for I love you. On the other, Rani stands alone at the docks with her newborn baby, then puts her on the ground and walks away.',
      setting: 'Split staging: the royal court and Tilbury Docks',
      who: ['Queen Victoria', 'Abdul Karim', 'Rani Das'],
      quote: 'Rani places the baby on the ground and walks away',
      themes: [
        'Empire and exploitation',
        'Women, exploitation and survival',
        'Friendship and community',
      ],
      tension: 5,
      significance:
        'Act 1 ends on its sharpest contrast: the Empress’s love and the ayah’s despair, staged as two sides of one system.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Asha',
      summary:
        'At Tilbury Docks in 1891, Lascar Sally and Firoza see Rani leave her baby and persuade her to take her back and come to live with Firoza. Rani names her daughter Asha, meaning hope, and Sally tells her there are letters from Hari waiting for her.',
      setting: 'Tilbury Docks',
      who: ['Lascar Sally', 'Firoza', 'Rani Das'],
      themes: ['Friendship and community', 'Women, exploitation and survival'],
      tension: 4,
      significance: 'The second act begins with rescue and a name that promises recovery.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'The lascars’ demands',
      summary:
        'On his ship, Hari leads the lascars in a protest and sets out their demands in writing: equal pay and rations with white sailors, no more beatings, rest from heavy labour, and respect.',
      setting: 'The deck of a merchant ship',
      who: ['Hari Sharma'],
      quote: 'equal pay with the white sailors',
      themes: ['Empire and exploitation', 'Education and experience', 'Race and prejudice'],
      tension: 3,
      significance: 'Hari’s new literacy becomes a weapon, and the lascars find a political voice.',
    },
    {
      where: 'Act 2, Scene 3',
      title: 'The Home for Ayahs',
      summary:
        'Mary and Charlotte open a Home for Ayahs, with Dadabhai’s support, and Rani, Firoza and baby Asha are there. Dadabhai recognises Rani from the voyage, a meeting that leads to work on his campaign for Parliament.',
      setting: 'The new Home for Ayahs in Aldgate, London, 1891',
      who: ['Dadabhai Naoroji', 'Rani Das', 'Firoza'],
      themes: [
        'Friendship and community',
        'Women, exploitation and survival',
        'Education and experience',
      ],
      tension: 2,
      significance:
        'A real institution gives Rani shelter, and a real politician gives her purpose.',
    },
    {
      where: 'Act 2, Scene 4',
      title: 'The portrait',
      summary:
        'As Abdul poses for his portrait and a letter from Cecil Rhodes is read, Abdul challenges Victoria about the suffering of war and of her subjects, and she protests that she feels for them as her children.',
      setting: 'The royal court',
      who: ['Abdul Karim', 'Queen Victoria', 'Lady Sarah'],
      quote: 'feeling is not the same as experiencing',
      themes: ['Empire and exploitation', 'Education and experience', 'Power, class and service'],
      tension: 3,
      significance: 'The friendship turns critical, and the play states its central idea.',
    },
    {
      where: 'Act 2, Scene 5',
      title: 'The Cape, and the interview',
      summary:
        'Hari, beaten and bloodied for his protest, is put ashore at the Cape without work. In London, Dadabhai takes Rani on to help his campaign and explains why he is standing for Parliament.',
      setting: 'Split between Hari’s ship at the Cape and Dadabhai in London',
      who: ['Hari Sharma', 'The Serang', 'Dadabhai Naoroji', 'Rani Das'],
      quote: 'like a greedy whale, she is swallowing entire countries',
      themes: ['Empire and exploitation', 'Power, class and service', 'Education and experience'],
      tension: 4,
      significance:
        'Hari pays for resistance with his livelihood just as Rani finds work in politics: one door closes as another opens.',
    },
    {
      where: 'Act 2, Scene 7',
      title: 'Elected',
      summary:
        'Dadabhai celebrates his election to Parliament, but the celebration is soured when Gandhi reads out an attack on him by Sir Lepel Griffin. He and Gandhi discuss how to raise India’s cause.',
      setting: 'London, after Dadabhai’s election',
      who: ['Dadabhai Naoroji', 'Mohandas Gandhi'],
      quote: 'an alien in race, in custom, in religion',
      themes: ['Race and prejudice', 'Identity and belonging', 'Power, class and service'],
      tension: 3,
      significance:
        'Victory at the ballot box is met with racism, the first sign that working within the system will not be enough.',
    },
    {
      where: 'Act 2, Scene 8',
      title: 'The Queen gives way',
      summary:
        'Lady Sarah brings Victoria messages from her family and from the Prime Minister: they object to Abdul’s place in the royal household, and the Queen is warned that she will be declared unfit to rule if she gives him the honour she wants for him. By the end of the scene Victoria gives way.',
      setting: 'The royal court at Osborne House',
      who: ['Queen Victoria', 'Lady Sarah'],
      quote: 'insane and therefore unfit for office',
      themes: ['Power, class and service', 'Race and prejudice'],
      tension: 4,
      significance:
        'The Empress discovers the limits of her own power, and chooses her throne over her friend.',
    },
    {
      where: 'Act 2, Scenes 10 and 11',
      title: 'The Diamond Jubilee',
      summary:
        'An extract from Kipling’s The White Man’s Burden opens Scene 10. Then, in Scene 11, the stage splits: Dadabhai makes a speech about the poverty the Empire has left in India while Victoria is dressed in diamonds by her servants.',
      setting:
        'The Diamond Jubilee year, 1897: Dadabhai’s speech and the royal court, side by side',
      who: ['Dadabhai Naoroji', 'Queen Victoria'],
      themes: ['Empire and exploitation', 'Race and prejudice'],
      tension: 4,
      significance:
        'The play’s most direct cross-cutting sets imperial splendour against imperial suffering.',
    },
    {
      where: 'Act 2, Scene 12',
      title: 'Reunion',
      summary:
        'In 1900 Dadabhai, his faith in British fairness gone, prepares to return to India. Hari, back in London with a furniture business, meets Rani again after thirteen years apart, a meeting Lascar Sally arranges, and they are reunited.',
      setting: 'London, 1900',
      who: ['Dadabhai Naoroji', 'Rani Das', 'Hari Sharma', 'Lascar Sally'],
      themes: ['Friendship and community', 'Identity and belonging', 'Empire and exploitation'],
      tension: 3,
      significance:
        'Personal happiness arrives just as political hope fails, and Hari returns as Rani’s equal.',
    },
    {
      where: 'Act 2, Scenes 13 and 14',
      title: 'The death of the Queen',
      summary:
        'Scene 13 shows Victoria and her Munshi together near the end of her life, when, despite his opposition to how her Empire is built, he stays loyal to her. After her death, in Scene 14, Abdul is to be sent back to India under royal escort, and Lady Sarah tells him that his letters from the Queen will be burned.',
      setting: 'The royal court, before and after the Queen’s death',
      who: ['Queen Victoria', 'Abdul Karim', 'Lady Sarah'],
      themes: ['Power, class and service', 'Race and prejudice', 'Friendship and community'],
      tension: 4,
      significance: 'The friendship is erased from the record, exactly as history records it was.',
    },
    {
      where: 'Act 2, Scene 15',
      title: 'Tilbury again',
      summary:
        'At Tilbury, Rani and Hari say goodbye to Dadabhai and meet Abdul, who is being sent home. Rani tells him she is now a teacher and gives him back his compass, and they look back on the Queen’s power.',
      setting: 'Tilbury Docks',
      who: ['Rani Das', 'Hari Sharma', 'Dadabhai Naoroji', 'Abdul Karim'],
      quote: 'gravitated around her, like planets circling the sun',
      themes: ['Friendship and community', 'Identity and belonging', 'Education and experience'],
      tension: 2,
      significance:
        'The play ends on the quay where Rani first landed, with the story reversed: the eminent leave, and the servant girl stays and belongs.',
    },
  ],

  relationships: [
    {
      from: 'Rani Das',
      to: 'Hari Sharma',
      kind: 'sweethearts, separated and reunited',
      note: 'Their love begins over a book on the ship, breaks when Hari pushes too far, and is rebuilt through his letters over thirteen years. Hari comes back only when he feels good enough for her, with a business of his own, so they meet as equals.',
    },
    {
      from: 'Rani Das',
      to: 'Abdul Karim',
      kind: 'fellow travellers; protector and protégée',
      note: 'He warns her about her friends and gives her his compass on the quay; she gives it back on the same quay at the end, now a teacher like him.',
    },
    {
      from: 'Queen Victoria',
      to: 'Abdul Karim',
      kind: 'Empress and Munshi',
      note: 'A friendship that grows from curiosity into love and honest criticism, but is never equal: she gives way to her court, and after her death his letters are burned.',
    },
    {
      from: 'Queen Victoria',
      to: 'Lady Sarah',
      kind: 'queen and lady-in-waiting',
      note: 'Close and long-standing, but strained by Abdul. Sarah is the channel through which the household’s pressure reaches the Queen.',
    },
    {
      from: 'Lady Sarah',
      to: 'Abdul Karim',
      kind: 'rivals at court',
      note: 'Her prejudice and her fear for her own place make her his most persistent opponent, from his arrival to his dismissal.',
    },
    {
      from: 'Rani Das',
      to: 'Susan Matthews',
      kind: 'ayah and employer',
      note: 'Two generations of service count for nothing: Susan dismisses Rani the moment the ship docks.',
    },
    {
      from: 'Rani Das',
      to: 'Lord Oakham',
      kind: 'servant and exploiting employer',
      note: 'His nostalgia for India turns into an abuse of power over Rani, and after she becomes pregnant by him he throws her out and blames her.',
    },
    {
      from: 'Rani Das',
      to: 'Firoza',
      kind: 'friends and fellow ayahs',
      note: 'Firoza shows Rani how to survive on the docks, saves her and her baby, and shares her home and work.',
    },
    {
      from: 'Rani Das',
      to: 'Lascar Sally',
      kind: 'lodger and protector',
      note: 'Sally takes Rani in on her first night, keeps Hari’s letters for her, and helps rescue her and Asha.',
    },
    {
      from: 'Rani Das',
      to: 'Dadabhai Naoroji',
      kind: 'protégée and mentor; campaign worker and politician',
      note: 'He notices her curiosity on the ship, gives her work and respect in London, and at the end she sees him off to India, no longer in need of a mentor.',
    },
    {
      from: 'Dadabhai Naoroji',
      to: 'Mohandas Gandhi',
      kind: 'mentor and student',
      note: 'The older politician guides the shy young law student, a quiet link between the play’s politics and India’s future independence movement.',
    },
    {
      from: 'Hari Sharma',
      to: 'The Serang',
      kind: 'lascar and overseer',
      note: 'The Serang’s threats and blows show the ship’s hierarchy in action, and the cruelty of a system that uses the colonised to police each other.',
    },
    {
      from: 'Hari Sharma',
      to: 'Abdul Karim',
      kind: 'mutual suspicion',
      note: 'Hari thinks Abdul stuck up and a lackee; Abdul thinks Hari a danger to Rani. Both are measuring each other by the Empire’s scale.',
    },
    {
      from: 'Hari Sharma',
      to: 'Lascar Sally',
      kind: 'old friends',
      note: 'Hari knows Sally’s house and trusts her to look after Rani; she is the go-between who keeps his letters for years and arranges his meeting with Rani when he returns.',
    },
    {
      from: 'Rani Das',
      to: 'Georgina',
      kind: 'new ayah and the woman who hires her',
      note: 'Georgina gives Rani the job with the Oakhams on the docks: an apparent rescue from the street that leads her into Lord Oakham’s house.',
    },
  ],

  compareWith: [
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'Another Edexcel modern play about a young working woman used and discarded by a wealthy household, and about who takes responsibility for her.',
    },
    {
      title: 'Anita and Me',
      href: '/revision/texts/anita-and-me',
      reason:
        'Also on the Edexcel modern list: the British Asian experience a century later, with racism, belonging and a young woman finding her own identity.',
    },
    {
      title: 'Refugee Boy',
      href: '/revision/texts/refugee-boy',
      reason:
        'The other play Pearson added in 2019: arrival in Britain from abroad, official hostility, and the kindness of strangers who become a community.',
    },
  ],

  contentGuidance: [
    'colonialism',
    'discrimination',
    'violence',
    'intimate_relationships',
    'crime_injustice',
    'mortality',
    'mental_health',
    'political_ideology',
  ],

  quotesFromElsewhere: ['the real Empress of the play is 16 year old Rani'],

  sources: [
    {
      label:
        'Pearson Edexcel GCSE English Literature 1ET0, Paper 1 question paper, June 2022: Question 15 stimulus, Abdul’s “English is one of several languages I am fluent in”; Question 16 stimulus, Rani’s evening classes line (not used, scene unverified); list of set editions (The Empress, Oberon Modern Plays, 2013)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1et0-01-que-20220526.pdf',
    },
    {
      label:
        'Pearson 1ET0 Paper 1 mark scheme, June 2022: indicative content on Abdul (Hari’s “very stuck up”; Abdul’s advice to Rani on the ship; the compass leading her to “the right place”; promotion from Khitmagar to Munshi; the household’s threat to have Victoria declared “insane and therefore unfit for office”; Edward VII sending Abdul home and the burning of his correspondence) and on friendship (Rani and Hari parted for thirteen years)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1et0-01-rms-20220825.pdf',
    },
    {
      label:
        'Pearson 1ET0 Paper 1 question paper, June 2023: stimulus lines from Victoria and Dadabhai (neither used, scene unverified); list of set editions',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20230518.pdf',
    },
    {
      label:
        'Pearson 1ET0 Paper 1 mark scheme, June 2023: Victoria “eating an egg from a golden egg cup”; Sir Lepel Griffin’s “an alien in race, in custom, in religion”; Lady Sarah assuming Abdul cannot speak English; the Matthews family’s English nanny; Victoria’s Golden Jubilee and Diamond Jubilee context',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-rms-20230824.pdf',
    },
    {
      label:
        'Pearson 1ET0 Paper 1 question paper, June 2024: stimulus lines from Hari and Gandhi (neither used, scene unverified); Hari’s surname Sharma',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20240514.pdf',
    },
    {
      label:
        'Pearson 1ET0 Paper 1 mark scheme, June 2024: the opening stage direction “All of them are barefooted and look undernourished and dirty”; Hari’s “still a lackee to the white man”; “beaten and bloodied”; “the daily humiliation of abuse”; Victoria’s “I want him to talk to me”; Dadabhai’s belief in “British fairness”; Hari’s furniture business; Rani’s evening classes and teaching; Gandhi leaving to help in the war in South Africa; Mary and Charlotte and the Ayahs’ Home',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-rms-20240822.pdf',
    },
    {
      label:
        'Pearson 1ET0 Paper 1 question paper, June 2025: Question 16 stimulus, Victoria’s “enlighten us on the habits and customs of our subjects so far away”',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20250513.pdf',
    },
    {
      label:
        'Pearson 1ET0 Paper 1 mark scheme, June 2025: Lady Sarah’s “Indian blood is thinner than the English” and harem gossip; Lord Oakham raised in India until fourteen and wanting Rani “dressed as an Indian woman”; Victoria’s “Me tum se pyar karti hui”; the Serang’s threat; the lascars’ demand for “equal pay with the white sailors”; Lascar Sally speaking Hindi',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-rms-20250821.pdf',
    },
    {
      label:
        'Pearson 1ET0 examiners’ report, June 2023: The Empress entries rising; praise for answers seeing both the positives and negatives of Victoria, and for the few that noticed Victoria’s Jubilee interspersed with Dadabhai’s lines',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1et0-01-pef-20230824.pdf',
    },
    {
      label:
        'Pearson 1ET0 examiners’ report, June 2025: The Empress questions on the lascars and on cultural differences; context bolted on rather than integrated',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-pef-20250821.pdf',
    },
    {
      label:
        'Pearson, Sample Assessment Materials for the additional texts (June 2019): the Serang’s “...get back to work or I will send your skinny little body down to hell” and Lascar Sally’s stimulus line; indicative content with the Matthews family’s “We have no need for you”, Lord Oakham’s “harlot”, the bamboo stick, and Lady Sarah telling Abdul his letters will be burned',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/GCSE%20English%20Literature%20SAMs%20Booklet_new%20texts.pdf',
    },
    {
      label:
        'Pearson, The Empress support page (B0437): links to the knowledge organiser, scheme of work, drama activities, student guide and exemplar materials',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/B0437_DT_TheEmpress_support.pdf',
    },
    {
      label:
        'Pearson, The Empress knowledge organiser: act summaries, Rani aged sixteen, Coleridge on the voyage, Abdul’s compass, Susan Matthews’s “merely my servant’s offspring”, Victoria’s royal we, Rani told to cook curry and wear her sari to please Lord Oakham, the final meeting and returned compass',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/The%20Empress%20KOs.zip',
    },
    {
      label:
        'Pearson, The Empress scheme of work (February 2021) and resource sheets: scene structure of both acts including Act 1, Scene 4b; Oberon page numbers (19, 23, 24, 43 to 54, 66, 70 to 71); stage directions “Lord Oakham looks at Rani and smiles secretly”, “Rani stands back at some distance”, “Lady Sarah bows in deference but she is upset”, “Rani places the baby on the ground and walks away”; Dadabhai’s greedy whale (Act 2, Scene 5); Act 2, Scene 4 lines (“not made of stone”, “feeling is not the same as experiencing”, “high-minded”); Hari’s five demands; Sir Lepel Griffin’s words; final-scene lines from Abdul and Rani; Kipling extract opening Act 2, Scene 10',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/The-Empress-Scheme-of-Work.zip',
    },
    {
      label:
        'Pearson, 1ET0 student guide script, The Empress: preparing for exam questions: Abdul’s “A word of advice Miss Das – you should choose your friends more carefully in the future”; advice that references need not be quotations if precise, and that students retell too much plot',
      url: 'https://qualifications.pearson.com/content/dam/pdf/Support/Training/1ET0-20PSG05-downloadable-materials.zip',
    },
    {
      label:
        'Pearson, The Empress exemplar scripts and commentaries (March 2021), on the SAMs Lascar Sally question',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/The-Empress-Exemplar-Responses.pdf',
    },
    {
      label:
        'Pearson, letter introducing four new texts (first teaching September 2019), added to improve the diversity of the post-1914 list',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/GCSELit_Diverse_Texts_Letter_.pdf',
    },
    {
      label:
        'Pearson, support for the 2019 text additions (May 2021): lists The Empress at 96 pages, a figure the Oberon edition’s own length (144 pages) and the scheme of work’s page numbers contradict',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/A2347_Diversity_Support_pages.pdf',
    },
    {
      label:
        'LitCharts, The Empress summary and scene-by-scene pages, including Act 1, Scene 3 and Act 2, Scene 15 (used for scene placement only, not for wording; its scene numbering, with Act 1, Scene 4b, matches the 2013 text)',
      url: 'https://www.litcharts.com/lit/the-empress/summary',
    },
    {
      label:
        'AbeBooks, The Empress (Oberon Modern Plays), Oberon Books, 2013, ISBN 9781849434904: 144 pages',
      url: 'https://www.abebooks.co.uk/9781849434904/Empress-Oberon-Modern-Plays-Gupta-1849434905/plp',
    },
    {
      label:
        'Royal Shakespeare Company, “The Empress in 10 Scenes” resource for the 2013 production: scene outlines with short lines, placing Abdul’s advice on the ship, “English is one of several languages I am fluent in” and the egg cup in the gift scene, “insane and therefore unfit for office” in the scene where Lady Sarah pressures the Queen, and “British fairness” near the end',
      url: 'https://cdn2.rsc.org.uk/sitefinity/education-pdfs/resources/the-empress-in-10-scenes-resource.pdf',
    },
    {
      label:
        'Royal Shakespeare Company, The Empress past production page (Rani aged sixteen; spanning the golden era of Empire; 2023 revival directed by Pooja Ghai) and Gupta’s “Inspiration for the play” (her parents’ arrival from Calcutta in 1961, Visram’s book and the Ayahs’ Home photograph, Michael Boyd’s commission, the 2023 revisions)',
      url: 'https://www.rsc.org.uk/the-empress',
    },
    {
      label:
        'Tanika Gupta, official site: The Empress (premiere at the Swan in 2013, added to Pearson Edexcel GCSE in 2019, 2023 revival) and her page on the plays on the curriculum',
      url: 'http://www.tanikagupta.com/empress/',
    },
    {
      label:
        'Tanika Gupta, “Tanika on the National Curriculum”: the play added to Pearson’s GCSE in 2019 alongside Lit in Colour; her words on decolonising the curriculum; London in the play as a city where people from all over the colonies lived, struggled and thrived',
      url: 'http://www.tanikagupta.com/tanika-on-the-national-curriculum/',
    },
    {
      label:
        'Royal Shakespeare Company, The Empress teacher pack (2023 production) and its Resources A to G: the 2023 scene list (seventeen scenes in Act 1, no Scene 4b, so the revised script’s numbering differs from the 2013 text), the 2023 synopsis (a changed ending), and script extracts including Abdul’s Taj Mahal speech and the portrait scene’s opening stage direction, used to confirm the shape of scenes, not for any wording quoted here',
      url: 'https://www.rsc.org.uk/learn/schools-and-teachers/teacher-resources/the-empress-teacher-pack-2023',
    },
    {
      label:
        'Royal Shakespeare Company, The Empress programme (2013): the original cast list, including Georgina, Mary and Charlotte, and Lord Oakham named as Sir John Oakham',
      url: 'https://cdn2.rsc.org.uk/sitefinity/education-pdfs/resources/empress-programme.pdf',
    },
    {
      label:
        'Birmingham Mail, “Tanika Gupta’s new RSC play sheds light on a hidden royal history”, 19 April 2013: premiere at the Swan, directed by Emma Rice; Victoria aged 68; Gupta on the ayahs leaving no diaries and the play’s five major journeys',
      url: 'https://www.birminghammail.co.uk/whats-on/theatre-news/tanika-guptas-new-rsc-play-2821008',
    },
    {
      label:
        'Tanika Gupta, “Ayahs, lascars and munshis: staging The Empress”, The Arts Desk (2013): Abdul gifted for the Jubilee, Naoroji, her interest in Victoria’s double standards, Gandhi and Jinnah mentored by Naoroji',
      url: 'https://theartsdesk.com/theatre/ayahs-lascars-and-munshis-staging-empress',
    },
    {
      label:
        'Tanika Gupta, guest blog, BroadwayWorld (23 June 2023): “the real Empress of the play is 16 year old Rani”; Lascar Sally as a Hindi-speaking English landlady from her research',
      url: 'https://www.broadwayworld.com/westend/article/Guest-Blog-Representation-is-at-the-Heart-of-my-Play-Playwright-Tanika-Gupta-on-Hidden-Histories-Immigration-and-Cultural-Diversity-in-THE-EMPRESS-20230623',
    },
    {
      label:
        'British Theatre Guide, review of the 2023 RSC revival: the looting of the Taj Mahal; Abdul’s ambiguity; the threat to have Victoria declared insane; the liberty of inserting Gandhi',
      url: 'https://www.britishtheatreguide.info/reviews/the-empress-swan-theatre-s-22145',
    },
    {
      label:
        'The Guardian, review of the 2023 RSC revival (19 July 2023): a story spanning thirteen years from 1887; the number of stories in three hours',
      url: 'https://www.theguardian.com/stage/2023/jul/19/the-empress-review-royal-shakespeare-theatre-stratford-upon-avon-tanika-gupta',
    },
    {
      label:
        'National Theatre Bookshop, The Empress playtext: revised edition published 7 July 2023 to coincide with the RSC revival, 128 pages',
      url: 'https://shop.nationaltheatre.org.uk/products/the-empress-playtext',
    },
    {
      label:
        'Our Migration Story, “A home for the ayahs”: dismissal on arrival, the 1855 report, the Ayahs’ Home at Jewry Street, Aldgate (1891) and in Hackney (1900)',
      url: 'https://www.ourmigrationstory.org.uk/oms/a-home-for-the-ayahs-',
    },
    {
      label:
        'Our Migration Story, “The lascars: Britain’s colonial-era sailors”: Asiatic Articles, lower pay, engine-room work, the Strangers’ Home (1856), the nickname Lascar Sally, lascars as 17.5 per cent of British crews by 1914',
      url: 'https://www.ourmigrationstory.org.uk/oms/the-lascars-britains-colonial-era-sailors',
    },
    {
      label:
        'Wikipedia, Abdul Karim (the Munshi): born 1863 at Lalitpur near Jhansi, son of a hospital assistant, first served the Queen at breakfast at Frogmore House on 23 June 1887 (as her own journal for that day, reproduced in Pearson’s scheme-of-work resources, records), promoted to Munshi 1888, correspondence burned after 1901, died Agra 1909',
      url: 'https://en.wikipedia.org/wiki/Abdul_Karim_(the_Munshi)',
    },
    {
      label:
        'Wikipedia, Dadabhai Naoroji: Finsbury Central 1892 to 1895, Indian National Congress, drain theory, Lord Salisbury’s 1888 remark and the Queen’s criticism of it, Dyce Sombre',
      url: 'https://en.wikipedia.org/wiki/Dadabhai_Naoroji',
    },
    {
      label:
        'Wikipedia, Tanika Gupta (born 1963, Modern History at Oxford, Asian women’s refuge, great-uncle Dinesh Gupta) and The Empress (play)',
      url: 'https://en.wikipedia.org/wiki/Tanika_Gupta',
    },
    {
      label:
        'Wikipedia, Royal Titles Act 1876; Golden Jubilee of Queen Victoria (20 and 21 June 1887); The White Man’s Burden (published February 1899)',
      url: 'https://en.wikipedia.org/wiki/Royal_Titles_Act_1876',
    },
    {
      label:
        'LoveReading4Kids, The Empress Student Edition (Methuen Drama, 24 March 2022, 152 pages, commentary by Jane Garnett)',
      url: 'https://www.lovereading4kids.co.uk/book/22134/The-Empress-by-Tanika-Gupta.html',
    },
  ],
}
