// @ts-nocheck
// ─── OCR GCSE English Language Mock Exam Papers ─────────────────────────────
// 34 papers: 17 Paper 1 (J351/01) and 17 Paper 2 (J351/02). Nothing imports
// this file, so the site does not serve these papers; they are still in a
// public repository, which is reason enough for them to be what they say.

/**
 * WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs; corrected 27 September 2026).
 *
 * Paper 1 pairs a present-day source with a nineteenth-century one, and every
 * nineteenth-century Source B here was invented but labelled as a real
 * historical document. Seven named real writers: "The Children of the
 * Mills" (Elizabeth Gaskell, Household Words, 1851), a letter from Frederick
 * Law Olmsted to The Builder (1859), Arthur Mee's The King's England:
 * Yorkshire (1941), "Women's Work and Wages" (Clementina Black, The
 * Fortnightly Review, 1889), "Dust; or Ugliness Redeemed" (Household Words,
 * 1850, credited to Dickens as editor), an 1874 address by Joseph
 * Chamberlain and Andrew Ure's The Philosophy of Manufactures (1835). For
 * four of them not one sentence is in the writer's work on Project
 * Gutenberg; for Mee, Chamberlain and Ure no text could be checked at all.
 * Four more invented their sources outright: "James Whitfield, Rural Life in
 * England, 1897", "Thomas Ashworth, 'Our New Free Library', The Blackburn
 * Standard, 1862", an 1854 Liverpool Mercury editorial and "Reverend Charles
 * Saunders, The Principles of Sound Education, 1903". An audit note of 28
 * April 2026 (FC20) recorded that these texts were "paraphrased composition,
 * not verbatim" and left the labels printing, and the model answers analysed
 * the invented sentences as the named writers' own ("Gaskell constructs
 * sympathy through a systematic catalogue of absence").
 *
 * The other four Source Bs were credited to twentieth-century writers still
 * in UK copyright: a 1948 Commons speech by Aneurin Bevan (set 06), H. V.
 * Morton's In Search of England (set 11), Lord Denning's Freedom Under the
 * Law (set 13) and G. M. Trevelyan's English Social History (set 15). The
 * April note named the Bevan speech among its "paraphrased composition", and
 * all four read as words written for real people, not by them (Bevan was
 * made to recall, in the first person, scenes of poverty he had "watched");
 * their answers quoted them as those people's, and in sets 11, 13 and 15
 * misquoted them. Those four papers also
 * had no nineteenth-century source at all, which OCR's Paper 1 requires.
 *
 * Paper 2 set 03 printed an extract "adapted from" Great Expectations and
 * "reimagined from Estella's perspective". Fourteen of its sixteen sentences
 * are not in the novel, and three model answers quoted six of its lines as
 * Dickens's.
 *
 * Most present-day sources carried a real publication's name (The
 * Independent, The Times, The Guardian, the Financial Times, the London
 * Review of Books and others) over an invented byline, and one was credited
 * to an "Anishinaabe writer". A student was told that invented words had
 * appeared in those papers.
 *
 * Model answers the new extracts did not touch also quoted words their
 * extracts do not contain: Paper 1 set 16 quoted "listen to the wood" from
 * the Paper 2 woodwork extract and called a settlement older than the Romans
 * "medieval"; set 17 gave Source B's "ageing buildings" to the writer of
 * Source A; Paper 2 set 17 had its protester breathe tear gas the extract
 * never mentions and called past-tense sentences present-tense; Paper 1 set
 * 01 read "their Sunday roast" as "your Sunday roast", direct address the
 * source does not use; and "checking phones", "mask of studied
 * indifference", "no boat, no light" and "dissolving like sugar in water",
 * among others, were near the text but not it. Eight more quotations dropped
 * words with no ellipsis, one of them the "no" in "creates no tensions". The
 * array of papers also had two stray commas, so it held two empty slots.
 *
 * WHAT WAS DONE.
 *   - All fifteen Source B passages were replaced with genuine
 *     nineteenth-century writing on the same subject, cut by script in whole
 *     sentences from the Project Gutenberg texts named here (never retyped;
 *     italic, footnote and page marks removed, and Gutenberg's "--" printed
 *     as the dash it stands for). Each label names the work:
 *       01  Olmsted, Walks and Talks of an American Farmer in England (New
 *           York, 1852), ch. XXIX, a Shropshire farm; #77164
 *       02  Dickens, speech at the Manchester Athenaeum, 5 October 1843, from
 *           Speeches: Literary and Social (Chatto and Windus, 1880); #824
 *       03  Engels, The Condition of the Working-Class in England in 1844,
 *           Florence Kelley Wischnewetzky's translation (1892 London
 *           edition); #17306
 *       04  Olmsted, Walks and Talks, ch. VIII, the park at Birkenhead; #77164
 *       05  Cobbett, Rural Rides, the entry for 22 October 1826; #34238
 *       06  Dickens, speech at the festival dinner of the Hospital for Sick
 *           Children, 9 February 1858, from Speeches: Literary and Social;
 *           #824
 *       07  Mayhew, London Labour and the London Poor, vol. 1, "Of the
 *           Street-Irish"; #55998
 *       08  Clementina Black, Sweated Industry and the Minimum Wage (1907),
 *           ch. VII; #75467
 *       09  Mayhew, London Labour, vol. 2, "Of the Dustmen of London"; #60440
 *       10  The Bitter Cry of Outcast London (1883); #55316
 *       11  Richard Jefferies, "Notes on Landscape Painting", part II, from
 *           The Life of the Fields (1884); #6164
 *       12  Herbert Spencer, "Physical Education" (1859), from the Everyman
 *           Essays on Education and Kindred Subjects (1911); #16510
 *       13  Matthew Arnold, Culture and Anarchy (first edition, 1869),
 *           ch. II; #4212
 *       14  Babbage, On the Economy of Machinery and Manufactures, ch. 32.
 *           The book is of 1832, but this chapter first appeared in the
 *           second edition (preface dated 22 November 1832), and Gutenberg's
 *           text is of a later edition still (its tables run to 1833), so
 *           the label says so; #4238
 *       15  John Henry Newman, The Idea of a University, Discourse VIII,
 *           section 10, the "definition of a gentleman"; #24526
 *     Where the named writer had written on the subject, that writer's work
 *     was used (Olmsted on Birkenhead Park, Black on women's wages); where the
 *     named piece never existed, or its writer is still in copyright, the
 *     nearest genuine writing of the nineteenth century was chosen. In each
 *     of these papers every question on Source B was checked against the
 *     real text and reworded, or given a glossary, where it no longer fitted,
 *     and every model answer that discusses Source B was rewritten. Several
 *     questions could not be kept honestly and were changed in substance:
 *     set 05 asked why the market town was "positive and vibrant" (Cobbett
 *     describes its decline); set 12 asked how Source B argued "in favour of
 *     school uniforms" (no nineteenth-century defence of school uniform was
 *     found in the texts searched; Spencer attacks dressing children for
 *     conformity, and the paper's title changed with him); set 01's statement
 *     called Source B sentimental and nostalgic, and set 14's called it
 *     "historically informed", which neither Olmsted's report nor Babbage's
 *     economics is; set 06 asked about "the creation of the NHS" (now a
 *     charity hospital's appeal for money, under a new title), set 13 about
 *     "the value and the limits of protest" (Arnold writes of the threat, not
 *     the value) and set 15 about "emotional restraint" (Newman describes a
 *     gentleman's whole character, of which restraint is a part).
 *   - Paper 2 set 03 now prints Great Expectations, chapter 8, Pip's first
 *     sight of Miss Havisham (Gutenberg #1400); the Estella framing and every
 *     answer built on it are gone.
 *   - Every present-day label now says the source was specially written for
 *     this practice paper, calls the byline invented and names no
 *     publication. The invented names are kept because the answers use them.
 *   - Each quotation listed above was corrected to the extract's words and the
 *     claim around it reread against them; the answers' American spellings
 *     were made British, and the stray commas removed.
 *   - Two Paper 2 labels said "Adapted from" a source they did not name (set
 *     09, "a literary non-fiction account of Brixton Market, 2019"; set 12,
 *     "literary fiction set during the Battle of the Somme"). They were
 *     written in the same commit (60b79277, 22 March 2026) as every invented
 *     attribution above, including an "adapted from" Wallace label on Paper 2
 *     set 05 that a later audit found was not Wallace. They now say the pieces were
 *     written for this paper. Should a published source ever be found for
 *     either, it must be credited, and the extract checked against it.
 *   - Claims about the words that the words do not bear were corrected in
 *     papers whose extracts did not change: a boxer called "a young Black
 *     man" in an extract that never gives his race (Paper 2 set 14); a
 *     bereavement Kenji never suffers (set 10); "italicised" lines and
 *     "rhetorical questions" in an extract with neither (set 04); "Then she
 *     opened it" called the shortest sentence of an extract that opens with
 *     "Rain." (set 13); three closing sentences said to shorten when the last
 *     is the longest (set 02); a mother's fear of the police called "not
 *     physical" (set 17); unfinished designs said to wait for James when the
 *     text says the maker (set 16); set 11's language question confined to
 *     paragraphs 3 and 4 while its answers drew on paragraph 5; Paper 1 set
 *     07's question asking for four examples of immigrants' contributions
 *     when Source A gives three; set 04's Q1 answer offering a statistic as a
 *     consequence; and set 14's answers giving Source A's "dangerously
 *     misleading" to the optimists' claim rather than to their comparison.
 *
 * NOT FIXED, AND WHY. The present-day sources cite studies and figures (a
 * Lancet study, Ofcom, McKinsey, the ONS) that were written for them and have
 * not been checked. Paper 1 sets 16 and 17 pair two present-day sources, so,
 * like the four sets above before this change, they have no
 * nineteenth-century text; they are honestly labelled, and changing their
 * design is beyond a correction.
 */

import type { MockExamPaper } from './mock-exams'

// ─── OCR Paper 1 Extracts ───────────────────────────────────────────────────

const OCR_P1_01_SOURCE_A = `The modern factory farm is, by any honest reckoning, an engine of suffering on an industrial scale. I have visited three such facilities in the past year, and each time I have emerged shaken by the contrast between the clinical efficiency of the operation and the misery it inflicts on living creatures. In one poultry unit in Suffolk, I watched forty thousand chickens packed into a single windowless shed, their beaks trimmed to prevent the pecking that overcrowding inevitably provokes. The air was thick with ammonia. The birds could barely move. Many had sores on their legs from standing on wire mesh for the entirety of their six-week lives.

We are told that intensive farming is necessary to feed a growing population. This is a convenient fiction. Studies consistently show that plant-based agriculture can produce more calories per acre than animal farming, with a fraction of the environmental damage. What intensive farming is necessary for is profit - the profit of corporations that have transformed sentient creatures into units of production, and the cheap prices that allow consumers to avoid confronting the true cost of their Sunday roast.`

const OCR_P1_01_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Behind Closed Barn Doors", under the invented byline Amira Patel'

const OCR_P1_01_SOURCE_B = `He then led us into the farmery, which was close by the house, the rear door almost opening into a cattle yard. I mention this as it would be considered extraordinary for an American gentleman who could afford wines at his dinner, to be content with such an arrangement. There was not the least attempt at ornament anywhere to be seen, beyond the few trees and rose-bushes in the enclosure of a rod or two, in front of the house: not the least regard had been had to beauty except the beauty of fitness, but every thing was neat, useful, well ordered, and thoroughly made of the best material—the barns, stables, and out-buildings of hewn stone, with slated roofs, grout floors, and iron fixtures. The cattle stables were roomy, well ventilated and drained, their mangers of stone and iron; fastenings, sliding chains; food, fresh-cut vetches, and the cattle standing knee deep in straw.

The fatting cattle were the finest lot I ever saw, notwithstanding the forty finest cows that had been wintered had been sold within a fortnight. These forty had been fattened on ruta baga and oil-cake, and their average weight was over 10 cwt., some of them weighing over 12 cwt. They were mostly short-horns. Those remaining were mostly Hereford bullocks.`

const OCR_P1_01_SOURCE_B_REF =
  'Frederick Law Olmsted, Walks and Talks of an American Farmer in England (New York: George P. Putnam, 1852), Chapter XXIX, on a visit to a Shropshire farm'

const OCR_P1_02_SOURCE_A = `I am writing to express my dismay at the council's decision to close Greenfield Library. For twenty-three years, this building has been the intellectual heart of our community. It is where my daughter first discovered her love of reading; where elderly residents gather for warmth, company, and the simple dignity of a quiet space; where teenagers study for exams they cannot prepare for at home because their homes are overcrowded, noisy, or chaotic.

The council claims that digital services have made physical libraries obsolete. This argument is both factually wrong and morally bankrupt. Thirty-one percent of households in this borough lack reliable internet access. For those families, the library is not a luxury - it is a lifeline. A computer terminal at Greenfield Library is the only means by which many residents can apply for jobs, access benefits, or communicate with government services that have moved entirely online. To close it is not modernisation. It is abandonment.`

const OCR_P1_02_SOURCE_A_REF =
  'Specially written for this practice paper: a letter to a borough council, signed with the invented name Sarah Okonkwo'

const OCR_P1_02_SOURCE_B = `But, ladies and gentlemen, at all times, now in its most thriving, and in its least flourishing condition—here, with its cheerful rooms, its pleasant and instructive lectures, its improving library of 6,000 volumes, its classes for the study of the foreign languages, elocution, music; its opportunities of discussion and debate, of healthful bodily exercise, and, though last not least—for by this I set great store, as a very novel and excellent provision—its opportunities of blameless, rational enjoyment, here it is, open to every youth and man in this great town, accessible to every bee in this vast hive, who, for all these benefits, and the inestimable ends to which they lead, can set aside one sixpence weekly. I do look upon the reduction of the subscription, and upon the fact that the number of members has considerably more than doubled within the last twelve months, as strides in the path of the very best civilization, and chapters of rich promise in the history of mankind.`

const OCR_P1_02_SOURCE_B_REF =
  'Charles Dickens, speech at a soirée of the Manchester Athenæum, 5 October 1843, as printed in his Speeches: Literary and Social'

const OCR_P1_03_SOURCE_A = `The smartphone has colonised childhood. Walk past any school gate at three-thirty and you will see it: a generation with their heads bowed, thumbs moving, eyes glazed with the particular vacancy of someone who is physically present but mentally elsewhere. According to Ofcom's latest report, the average twelve-year-old in Britain spends four hours and twelve minutes per day on their phone. That is twenty-nine hours a week - more time than they spend in the classroom.

I am not nostalgic for some imagined golden age of childhood. Children have always been bored, restless, and desperate for distraction. But previous distractions - climbing trees, reading comics, even watching television - involved either physical activity, imagination, or at least passive absorption of narrative. The smartphone offers something qualitatively different: an infinite scroll of micro-stimulation designed by some of the most brilliant engineers on earth to be as addictive as possible. We would not give a twelve-year-old a slot machine. Why do we give them something that operates on exactly the same neurological principles?`

const OCR_P1_03_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "The Stolen Childhood", under the invented byline Daniel Hargreaves'

const OCR_P1_03_SOURCE_B = `A nine years old child of a factory operative that has grown up in want, privation, and changing conditions, in cold and damp, with insufficient clothing and unwholesome dwellings, is far from having the working force of a child brought up under healthier conditions. At nine years of age it is sent into the mill to work 6.5 hours (formerly 8, earlier still, 12 to 14, even 16 hours) daily, until the thirteenth year; then twelve hours until the eighteenth year. The old enfeebling influences continue, while the work is added to them. It is not to be denied that a child of nine years, even an operative's child, can hold out through 6.5 hours' daily work, without any one being able to trace visible bad results in its development directly to this cause; but in no case can its presence in the damp, heavy air of the factory, often at once warm and wet, contribute to good health; and, in any case, it is unpardonable to sacrifice to the greed of an unfeeling bourgeoisie the time of children which should be devoted solely to their physical and mental development, withdraw them from school and the fresh air, in order to wear them out for the benefit of the manufacturers.`

const OCR_P1_03_SOURCE_B_REF =
  'Friedrich Engels, The Condition of the Working-Class in England in 1844 (first published in German, 1845), in the translation by Florence Kelley Wischnewetzky, from the chapter "Single Branches of Industry. Factory Hands"'

const OCR_P1_04_SOURCE_A = `Urban green spaces are not a luxury. They are a public health necessity. A landmark study published in The Lancet last month found that people living within 300 metres of a park or green space had a 20% lower risk of depression, a 15% lower risk of cardiovascular disease, and reported significantly higher levels of life satisfaction than those without access to nature. In deprived areas, where private gardens are rare and housing is dense, public parks are often the only contact residents have with the natural world.

Yet councils across England continue to sell off green spaces to developers. Since 2010, over 1,200 hectares of public parkland have been lost to housing and commercial development. The justification is always the same: the land is "underused," the council needs revenue, housing targets must be met. But this accounting ignores the hidden costs of green space loss - the increased burden on mental health services, the rising rates of childhood obesity, the quiet erosion of something that cannot be measured in pounds and pence: the human need to stand beneath a tree and breathe.`

const OCR_P1_04_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "The Case for Urban Green", under the invented byline Dr Priya Sharma'

const OCR_P1_04_SOURCE_B = `But this is but a small part. Besides the cricket and an archery ground, large valleys were made verdant, extensive drives arranged—plantations, clumps, and avenues of trees formed, and a large park laid out. And all this magnificent pleasure-ground is entirely, unreservedly, and for ever the people’s own. The poorest British peasant is as free to enjoy it in all its parts as the British queen. More than that, the baker of Birkenhead has the pride of an OWNER in it.

Is it not a grand good thing? But you are inquiring who paid for it. The honest owners—the most wise and worthy townspeople of Birkenhead—in the same way that the New-Yorkers pay for “the Tombs,” and the Hospital, and the cleaning (as they amusingly say) of their streets.

Of the farm which was purchased, one hundred and twenty acres have been disposed of in the way I have described. The remaining sixty acres, encircling the park and garden, were reserved to be sold or rented, after being well graded, streeted, and planted, for private building lots. Several fine mansions are already built on these (having private entrances to the park), and the rest now sell at $1.25 a square yard. The whole concern cost the town between five and six hundred thousand dollars. It gives employment at present, to ten gardeners and labourers in summer, and to five in winter.`

const OCR_P1_04_SOURCE_B_REF =
  'Frederick Law Olmsted, Walks and Talks of an American Farmer in England (New York: George P. Putnam, 1852), Chapter VIII, on the new park at Birkenhead'

const OCR_P1_05_SOURCE_A = `The British high street is dying, and we are all complicit. Last year, over 17,000 shops closed their doors permanently across the UK. Walk through any town centre on a Wednesday afternoon and you will find a landscape of boarded-up windows, charity shops, and vaping stores - the last survivors of a commercial ecosystem that once defined community life. The butcher, the baker, the independent bookshop: these are not merely businesses. They are the places where neighbours meet, where news is exchanged, where a town discovers its identity.

Online shopping did not kill the high street single-handedly. Business rates that punish physical premises while allowing online giants to pay negligible tax, out-of-town retail parks that siphon footfall, and planning policies that prioritise housing over commercial space have all played their part. But the fundamental problem is one of collective choice: we have decided, one Amazon order at a time, that convenience matters more than community.`

const OCR_P1_05_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Death of the High Street", under the invented byline Rebecca Thornton'

const OCR_P1_05_SOURCE_B = `After quitting Soberton Down, we came up a hill leading to Hambledon, and turned off to our left to bring us down to Mr. Goldsmith's at West End, where we now are, at about a mile from the village of Hambledon. A village it now is; but it was formerly a considerable market-town, and it had three fairs in the year. There is now not even the name of market left, I believe; and the fairs amount to little more than a couple or three gingerbread-stalls, with dolls and whistles for children. If you go through the place, you see that it has been a considerable town. The church tells the same story; it is now a tumble-down rubbishy place; it is partaking in the fate of all those places which were formerly a sort of rendezvous for persons who had things to buy and things to sell. Wens have devoured market-towns and villages; and shops have devoured markets and fairs; and this, too, to the infinite injury of the most numerous classes of the people. Shop-keeping, merely as shop-keeping, is injurious to any community. What are the shop and the shop-keeper for? To receive and distribute the produce of the land. There are other articles, certainly; but the main part is the produce of the land. The shop must be paid for; the shop-keeper must be kept; and the one must be paid for and the other must be kept by the consumer of the produce; or, perhaps, partly by the consumer and partly by the producer.`

const OCR_P1_05_SOURCE_B_REF =
  'William Cobbett, Rural Rides (1830), from the entry dated "Hambledon, Sunday, 22nd Oct. 1826"'

const OCR_P1_06_SOURCE_A = `The NHS is in crisis. This is not hyperbole; it is a statement of measurable fact. Average waiting times for elective treatment have reached 14.7 months. Over 7.6 million people are on waiting lists. Ambulance response times for category two emergencies - strokes, heart attacks - have more than doubled since 2019. Behind these statistics are real people: the grandmother waiting eighteen months for a hip replacement who can no longer climb the stairs; the child with suspected autism whose parents are told the assessment wait is three years.

We spend less per capita on healthcare than France, Germany, or the Netherlands. We have fewer doctors per head than almost any comparable nation. We have built no new major hospitals since 2010. And yet, when any politician dares to suggest that the funding model needs fundamental reform, they are met with the peculiar British conviction that the NHS, alone among human institutions, can be sustained indefinitely on goodwill and underpaid staff.`

const OCR_P1_06_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Beyond Breaking Point", under the invented byline James Morton'

const OCR_P1_06_SOURCE_B = `In the printed papers of this same Hospital, you may read with what a generous earnestness the highest and wisest members of the medical profession testify to the great need of it; to the immense difficulty of treating children in the same hospitals with grown-up people, by reason of their different ailments and requirements, to the vast amount of pain that will be assuaged, and of life that will be saved, through this Hospital; not only among the poor, observe, but among the prosperous too, by reason of the increased knowledge of children’s illnesses, which cannot fail to arise from a more systematic mode of studying them. Lastly, gentlemen, and I am sorry to say, worst of all—(for I must present no rose-coloured picture of this place to you—I must not deceive you;) lastly, the visitor to this Children’s Hospital, reckoning up the number of its beds, will find himself perforce obliged to stop at very little over thirty; and will learn, with sorrow and surprise, that even that small number, so forlornly, so miserably diminutive, compared with this vast London, cannot possibly be maintained, unless the Hospital be made better known; I limit myself to saying better known, because I will not believe that in a Christian community of fathers and mothers, and brothers and sisters, it can fail, being better known, to be well and richly endowed.

Now, ladies and gentlemen, this, without a word of adornment—which I resolved when I got up not to allow myself—this is the simple case. This is the pathetic case which I have to put to you; not only on behalf of the thousands of children who annually die in this great city, but also on behalf of the thousands of children who live half developed, racked with preventible pain, shorn of their natural capacity for health and enjoyment. If these innocent creatures cannot move you for themselves, how can I possibly hope to move you in their name?`

const OCR_P1_06_SOURCE_B_REF =
  'Charles Dickens, speech at the anniversary festival dinner of the Hospital for Sick Children, London, 9 February 1858, as printed in his Speeches: Literary and Social'

const OCR_P1_07_SOURCE_A = `Immigration has transformed Britain beyond recognition in my lifetime, and largely for the better. The corner shop run by Mr Hussain that stays open until midnight when the supermarkets have long since closed. The Polish plumber who arrived within two hours on a Sunday when no British tradesman would answer the phone. The Filipino nurses who held my mother's hand through her final night in hospital when the ward was dangerously understaffed. These are not abstract economic arguments. They are the daily, lived reality of a multicultural society that works.

Yet it would be dishonest to pretend that rapid demographic change creates no tensions. In communities where housing is scarce, school places oversubscribed, and GP appointments impossible to obtain, it is not racist to observe that increased demand puts pressure on services that were already inadequate. The failure is not one of immigration but of infrastructure - a failure of successive governments to build the houses, schools, and hospitals that a growing population requires.`

const OCR_P1_07_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "The Immigration Conversation We Need", under the invented byline Michael O\'Brien'

const OCR_P1_07_SOURCE_B = `The number of Irish street-sellers in the metropolis has increased greatly of late years. One gentleman, who had every means of being well-informed, considered that it was not too much to conclude, that, within these five years, the numbers of the poor Irish people who gain a scanty maintenance, or what is rather a substitute for a maintenance, by trading, or begging, or by carrying on the two avocations simultaneously in the streets of London, had been doubled in number.

I found among the English costermongers a general dislike of the Irish. In fact, next to a policeman, a genuine London costermonger hates an Irishman, considering him an intruder. Whether there be any traditional or hereditary ill-feeling between them, originating from a clannish feeling, I cannot ascertain. The costermongers whom I questioned had no knowledge of the feelings or prejudices of their predecessors, but I am inclined to believe that the prejudice is modern, and has originated in the great influx of Irishmen and women, intermixing, more especially during the last five years, with the costermonger’s business. An Irish costermonger, however, is no novelty in the streets of London. “From the mention of the costardmonger,” says Mr. Charles Knight, “in the old dramatists, he appears to have been frequently an Irishman.”`

const OCR_P1_07_SOURCE_B_REF =
  'Henry Mayhew, "Of the Street-Irish", London Labour and the London Poor, Volume 1 (first published 1851; text of the enlarged edition of 1861-62)'

const OCR_P1_08_SOURCE_A = `The gender pay gap is not a myth. It is a measurable, documented, and persistent feature of the British economy. Women working full-time in the UK earn, on average, 14.3% less than men. For women over fifty, the gap widens to 20%. For women of colour, it is wider still. These are not contested figures; they are published annually by the Office for National Statistics, and they have barely shifted in a decade.

The explanations offered for this disparity are familiar and, individually, insufficient. Women choose lower-paid professions. Women take career breaks for childcare. Women are less likely to negotiate aggressively for pay rises. Each of these statements contains a grain of truth, but each begs a deeper question: why? Why are professions dominated by women - teaching, nursing, social care - valued less than those dominated by men? Why does the financial penalty for raising children fall almost entirely on mothers? Why is assertiveness rewarded in men and penalised in women? The pay gap is not the problem. It is the symptom.`

const OCR_P1_08_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Mind the Gap", under the invented byline Catherine Aldridge'

const OCR_P1_08_SOURCE_B = `Sometimes it is at the factory gate that the cheapening process goes on. Towards the end of those bitter weeks, “the slack time,” there will be scores of factory girls, pale and pinched under their shabby feathered hats, going from firm to firm and asking whether hands are wanted. At last word will go round that X.’s are “taking on” on Monday morning. Before the opening hour on Monday morning, the entrance to Mr X.’s factory will look like the pit door of a popular theatre. Often have I heard girls describe the dialogue that follows.

“The foreman says to a young girl in front of me: ‘What wages do you want?’ And she says: ‘Eight shillings.’ And he told her: ‘No, she could go.’ So when he come to me, I knew it was no good to say, ‘Eight’; so I said: ‘Seven and six.’”

At seven and sixpence, perhaps, she gets taken on; and when, presently, the slack time comes again, the girls weeded out, to be first discharged, are those who have been receiving eight shillings weekly ever since their engagement in the previous season. Seven shillings and sixpence a week (translated or not, according to the custom of the factory, into terms of piece work) now becomes the usual wage; and next season this descends by another sixpence or another shilling.

Below six shillings or five shillings, an employer or foreman seldom tries to drive the time wage, even of girls, unless, indeed, he can salve his conscience by regarding them as learners. Yet I have known a wealthy employer admit without any signs of compunction, both that certain girls in his employ were paid four shillings a week, and that they could not live on that sum.`

const OCR_P1_08_SOURCE_B_REF =
  'Clementina Black, Sweated Industry and the Minimum Wage (London: Duckworth, 1907), Chapter VII, "How Underpayment Comes"'

const OCR_P1_09_SOURCE_A = `Britain produces 222 million tonnes of waste per year. Of this, less than half is recycled. The rest goes to landfill, where it will sit for decades - in the case of plastic, for centuries - slowly leaching toxins into the soil and groundwater. We are, quite literally, burying our future.

The recycling system itself is a comforting illusion. Most of us dutifully separate our plastics, rinse our tins, and flatten our cardboard, believing that we are doing our part. But investigation after investigation has revealed that much of what we place in recycling bins is never recycled at all. It is shipped to developing countries, where it is burned or dumped, or it is classified as "contaminated" and sent to landfill anyway. The recycling logo on a plastic bottle is not a promise; it is a prayer - and an increasingly unanswered one. The solution is not better recycling but less waste: fewer single-use plastics, less packaging, a fundamental rethinking of our relationship with the things we buy and discard.`

const OCR_P1_09_SOURCE_A_REF =
  'Specially written for this practice paper: an investigative article, "The Recycling Myth", under the invented byline Hannah Brooks'

const OCR_P1_09_SOURCE_B = `But during the operation of sifting the dust, many things are found which are useless for either manure or brick-making, such as oyster shells, old bricks, old boots and shoes, old tin kettles, old rags and bones, &c. These are used for various purposes.

The bricks, &c., are sold for sinking beneath foundations, where a thick layer of concrete is spread over them. Many old bricks, too, are used in making new roads, especially where the land is low and marshy. The old tin goes to form the japanned fastenings for the corners of trunks, as well as to other persons, who re-manufacture it into a variety of articles. The old shoes are sold to the London shoemakers, who use them as stuffing between the in-sole and the outer one; but by far the greater quantity is sold to the manufacturers of Prussian blue, that substance being formed out of refuse animal matter. The rags and bones are of course disposed of at the usual places—the marine-store shops.`

const OCR_P1_09_SOURCE_B_REF =
  'Henry Mayhew, "Of the Dustmen of London", London Labour and the London Poor, Volume 2 (text of the enlarged edition of 1861-62)'

const OCR_P1_10_SOURCE_A = `The housing crisis is no longer a crisis for the future. It is a crisis of the present, affecting millions of people right now. The average house price in England is now twelve times the average salary - a ratio that would have been considered absurd a generation ago. Private rents consume over 40% of take-home pay in London and the South East. An entire generation of young people has been effectively locked out of home ownership, condemned to spend their working lives enriching landlords while building no equity of their own.

The consequences extend far beyond individual frustration. When young professionals cannot afford to live in the areas where they work, hospitals lose nurses, schools lose teachers, and businesses lose the talent they need to grow. When families are forced into temporary accommodation - and over 100,000 children in England currently live in temporary housing - the damage to education, mental health, and social development is incalculable. Housing is not a commodity. It is a human right. And we are failing to provide it.`

const OCR_P1_10_SOURCE_A_REF =
  'Specially written for this practice paper: an opinion article, "Generation Rent", under the invented byline Rachel Osei'

const OCR_P1_10_SOURCE_B = `We shall be pointed to the fact that without State interference nothing effectual can be accomplished upon any large scale. And it is a fact. These wretched people must live somewhere. They must live near the centres where their work lies. They cannot afford to go out by train or tram into the suburbs; and how, with their poor emaciated, starved bodies, can they be expected—in addition to working twelve hours or more, for a shilling, or less,—to walk three or four miles each way to take and fetch? It is notorious that the Artizans Dwellings Act has, in some respects, made matters worse for them. Large spaces have been cleared of fever-breeding rookeries, to make way for the building of decent habitations, but the rents of these are far beyond the means of the abject poor. They are driven to crowd more closely together in the few stifling places still left to them; and so Dives makes a richer harvest out of their misery, buying up property condemned as unfit for habitation, and turning it into a gold-mine because the poor must have shelter somewhere, even though it be the shelter of a living tomb.

The State must make short work of this iniquitous traffic, and secure for the poorest the rights of citizenship; the right to live in something better than fever dens; the right to live as something better than the uncleanest of brute beasts.`

const OCR_P1_10_SOURCE_B_REF =
  'The Bitter Cry of Outcast London: An Inquiry into the Condition of the Abject Poor (London: James Clarke, 1883), a pamphlet of the London Congregational Union usually credited to the Reverend Andrew Mearns'

const OCR_P1_11_SOURCE_A = `The British countryside is vanishing - not in a single dramatic act of destruction but through a thousand small surrenders. A hedgerow grubbed out here. A meadow ploughed up there. A stream straightened, a pond filled in, a copse felled to make way for one more acre of winter wheat. Individually, each loss seems trivial. Cumulatively, they amount to an ecological catastrophe. Since 1970, Britain has lost 97% of its wildflower meadows, 50% of its hedgerows, and populations of farmland birds have declined by 58%.

We have created a countryside that looks green but is biologically dead. The neatly mown verges, the monoculture fields stretching to the horizon, the lawns trimmed to putting-green perfection - these are not nature. They are nature's absence, dressed up to look presentable. Real nature is messy, tangled, and inconvenient. It is the bramble patch where the wren nests, the muddy pond where the newts breed, the uncut corner where the wildflowers bloom. And we are eliminating it, acre by silent acre.`

const OCR_P1_11_SOURCE_A_REF =
  'Specially written for this practice paper: a magazine article, "Silent Fields", under the invented byline Tom Barlow'

const OCR_P1_11_SOURCE_B = `Among the meadows the buttercups in spring are as innumerable as ever and as pleasant to look upon. The petal of the buttercup has an enamel of gold; with the nail you may scrape it off, leaving still a yellow ground, but not reflecting the sunlight like the outer layer. From the centre the golden pollen covers the fingers with dust like that from the wing of a butterfly. In the bunches of grass and by the gateways the germander speedwell looks like tiny specks of blue stolen, like Prometheus' fire, from the summer sky. When the mowing-grass is ripe the heads of sorrel are so thick and close that at a little distance the surface seems as if sunset were always shining red upon it. From the spotted orchis leaves in April to the honeysuckle-clover in June, and the rose and the honeysuckle itself, the meadow has changed in nothing that delights the eye. The draining, indeed, has made it more comfortable to walk about on, and some of the rougher grasses have gone from the furrows, diminishing at the same time the number of cardamine flowers; but of these there are hundreds by the side of every tiny rivulet of water, and the aquatic grasses flourish in every ditch. The meadow-farmers, dairymen, have not grubbed many hedges—only a few, to enlarge the fields, too small before, by throwing two into one. So that hawthorn and blackthorn, ash and willow, with their varied hues of green in spring, briar and bramble, with blackberries and hips later on, are still there as in the old, old time. Bluebells, violets, cowslips—the same old favourite flowers—may be found on the mounds or sheltered near by. The meadow-farmers have dealt mercifully with the hedges, because they know that for shade in heat and shelter in storm the cattle resort to them. The hedges—yes, the hedges, the very synonym of Merry England—are yet there, and long may they remain. Without hedges England would not be England. Hedges, thick and high, and full of flowers, birds, and living creatures, of shade and flecks of sunshine dancing up and down the bark of the trees—I love their very thorns. You do not know how much there is in the hedges.`

const OCR_P1_11_SOURCE_B_REF =
  'Richard Jefferies, "Notes on Landscape Painting", part II, first printed in The Magazine of Art and collected in his The Life of the Fields (1884)'

const OCR_P1_12_SOURCE_A = `School uniforms are an outdated instrument of conformity that belong in the Victorian era, not the twenty-first century. They suppress individuality, impose unnecessary financial burdens on struggling families, and serve no educational purpose whatsoever. The claim that uniforms prevent bullying is contradicted by every credible study: children find ways to distinguish status regardless of what they wear - through shoes, bags, phones, and the subtle hierarchies of brand and style that uniforms cannot erase.

The financial argument is equally hollow. A full school uniform - blazer, ties, branded PE kit, specific shoes - costs an average of £337 per child per year. For families with multiple children, this is a significant burden. And because uniforms must bear the school logo, parents cannot shop around for cheaper alternatives; they are forced to buy from approved suppliers at inflated prices. Schools claim uniforms promote equality. In practice, they penalise poverty.`

const OCR_P1_12_SOURCE_A_REF =
  'Specially written for this practice paper: a magazine article, "The Uniform Problem", under the invented byline Zara Hussain'

const OCR_P1_12_SOURCE_B = `Not only is it that for the sake of conformity, mothers thus punish and injure their little ones by scantiness of covering; but it is that from an allied motive they impose a style of dress which forbids healthful activity. To please the eye, colours and fabrics are chosen totally unfit to bear that rough usage which unrestrained play involves; and then to prevent damage the unrestrained play is interdicted. "Get up this moment: you will soil your clean frock," is the mandate issued to some urchin creeping about on the floor. "Come back: you will dirty your stockings," calls out the governess to one of her charges, who has left the footpath to scramble up a bank. Thus is the evil doubled. That they may come up to their mamma's standard of prettiness, and be admired by her visitors, children must have habiliments deficient in quantity and unfit in texture; and that these easily-damaged habiliments may be kept clean and uninjured, the restless activity so natural and needful for the young is restrained. The exercise which becomes doubly requisite when the clothing is insufficient, is cut short, lest it should deface the clothing.`

const OCR_P1_12_SOURCE_B_REF =
  'Herbert Spencer, "Physical Education" (1859), as printed in his Essays on Education and Kindred Subjects'

const OCR_P1_13_SOURCE_A = `The criminalisation of protest is the gravest threat to British democracy since the Second World War. The Public Order Act 2023 gave police powers to arrest people for being "too noisy," for carrying items that "could be used" to attach themselves to objects, and for causing "serious disruption" - a term so vaguely defined that it could encompass almost any form of public demonstration. The right to protest is not a gift from government. It is a fundamental democratic freedom, and it is being systematically dismantled.

History teaches us that every significant social advance - from the abolition of slavery to women's suffrage to civil rights - was achieved through protest that was, at the time, condemned as disruptive, dangerous, and illegal. The suffragettes smashed windows. The civil rights marchers blocked roads. The anti-apartheid campaigners broke the law. They were all told, as today's protesters are told, that there are "proper channels" for dissent. But proper channels are designed by those in power to contain and neutralise opposition.`

const OCR_P1_13_SOURCE_A_REF =
  'Specially written for this practice paper: an essay, "Democracy Under Threat", under the invented byline Professor Eleanor Shaw'

const OCR_P1_13_SOURCE_B = `For a long time, as I have said, the strong feudal habits of subordination and deference continued to tell upon the working-class. The modern spirit has now almost entirely dissolved those habits, and the anarchical tendency of our worship of freedom in and for itself, of our superstitious faith, as I say, in machinery, is becoming very manifest. More and more, because of this our blind faith in machinery, because of our want of light to enable us to look beyond machinery to the end for which machinery is valuable, this and that man, and this and that body of men, all over the country, are beginning to assert and put in practice an Englishman's right to do what he likes; his right to march where he likes, meet where he likes, enter where he likes, hoot as he likes, threaten as he likes, smash as he likes. All this, I say, tends to anarchy; and though a number of excellent people, and particularly my friends of the liberal or progressive party, as they call themselves, are kind enough to reassure us by saying that these are trifles, that a few transient outbreaks of rowdyism signify nothing, that our system of liberty is one which itself cures all the evils which it works, that the educated and intelligent classes stand in overwhelming strength and majestic repose, ready, like our military force in riots, to act at a moment's notice,—yet one finds that one's liberal friends generally say this because they have such faith in themselves and their nostrums, when they shall return, as the public welfare requires, to place and power.`

const OCR_P1_13_SOURCE_B_REF =
  'Matthew Arnold, Culture and Anarchy (first edition, 1869), from chapter II, later titled "Doing as One Likes"'

const OCR_P1_14_SOURCE_A = `Artificial intelligence will eliminate more jobs in the next decade than any technology in human history. This is not speculation. McKinsey estimates that by 2030, up to 375 million workers worldwide will need to switch occupational categories. Lawyers, radiologists, translators, accountants, journalists - no profession that involves the processing of information is safe. The question is not whether AI will transform the labour market but whether we are remotely prepared for the scale of disruption it will cause.

The optimists tell us that technology always creates more jobs than it destroys. They point to the Industrial Revolution, which displaced handloom weavers but created factory workers. But this comparison is dangerously misleading. The Industrial Revolution replaced physical labour with machines; AI replaces cognitive labour. When a machine can think, analyse, and create - what, exactly, is left for humans to do? We need answers to this question before the disruption arrives, not after. And we need them from governments, not from the technology companies whose profits depend on our complacency.`

const OCR_P1_14_SOURCE_A_REF =
  'Specially written for this practice paper: a magazine article, "The Coming Disruption", under the invented byline Dr Simon Ashworth'

const OCR_P1_14_SOURCE_B = `One of the objections most frequently urged against machinery is, that it has a tendency to supersede much of the hand labour which was previously employed; and in fact unless a machine diminished the labour necessary to make an article, it could never come into use. But if it have that effect, its owner, in order to extend the sale of his produce, will be obliged to undersell his competitors; this will induce them also to introduce the new machine, and the effect of this competition will soon cause the article to fall, until the profits on capital, under the new system, shall be reduced to the same rate as under the old. Although, therefore, the use of machinery has at first a tendency to throw labour out of employment, yet the increased demand consequent upon the reduced price, almost immediately absorbs a considerable portion of that labour, and perhaps, in some cases, the whole of what would otherwise have been displaced.`

const OCR_P1_14_SOURCE_B_REF =
  'Charles Babbage, On the Economy of Machinery and Manufactures (first published 1832; this chapter was added in the second edition of that year), Chapter 32, "On the Effect of Machinery in Reducing the Demand for Labour", in the text of a later edition'

const OCR_P1_15_SOURCE_A = `The mental health crisis among young men is the epidemic nobody wants to talk about. Three-quarters of all suicides in the UK are male. Men aged 45-49 have the highest suicide rate of any demographic group. Yet mental health campaigns, services, and public discourse remain overwhelmingly oriented towards women and girls - not because their suffering is greater, but because they are more willing to articulate it, and because a society that expects men to be stoic finds male vulnerability uncomfortable.

The phrase "man up" is a death sentence disguised as advice. It tells boys that sadness is weakness, that asking for help is failure, that the only acceptable male emotions are anger and indifference. By the time these boys become men - men who cannot cry, cannot talk, cannot admit that they are drowning - the damage is so deeply embedded that professional intervention feels like an admission of everything they have been taught to deny. We have built a culture that makes it easier for men to die than to ask for help. That is not strength. It is a catastrophe.`

const OCR_P1_15_SOURCE_A_REF =
  'Specially written for this practice paper: a magazine article, "The Silent Crisis", under the invented byline Chris Walker'

const OCR_P1_15_SOURCE_B = `Hence it is that it is almost a definition of a gentleman to say he is one who never inflicts pain. This description is both refined and, as far as it goes, accurate. He is mainly occupied in merely removing the obstacles which hinder the free and unembarrassed action of those about him; and he concurs with their movements rather than takes the initiative himself. His benefits may be considered as parallel to what are called comforts or conveniences in arrangements of a personal nature: like an easy chair or a good fire, which do their part in dispelling cold and fatigue, though nature provides both means of rest and animal heat without them. The true gentleman in like manner carefully avoids whatever may cause a jar or a jolt in the minds of those with whom he is cast;—all clashing of opinion, or collision of feeling, all restraint, or suspicion, or gloom, or resentment; his great concern being to make every one at their ease and at home. He has his eyes on all his company; he is tender towards the bashful, gentle towards the distant, and merciful towards the absurd; he can recollect to whom he is speaking; he guards against unseasonable allusions, or topics which may irritate; he is seldom prominent in conversation, and never wearisome. He makes light of favours while he does them, and seems to be receiving when he is conferring. He never speaks of himself except when compelled, never defends himself by a mere retort, he has no ears for slander or gossip, is scrupulous in imputing motives to those who interfere with him, and interprets every thing for the best. He is never mean or little in his disputes, never takes unfair advantage, never mistakes personalities or sharp sayings for arguments, or insinuates evil which he dare not say out. From a long-sighted prudence, he observes the maxim of the ancient sage, that we should ever conduct ourselves towards our enemy as if he were one day to be our friend. He has too much good sense to be affronted at insults, he is too well employed to remember injuries, and too indolent to bear malice. He is patient, forbearing, and resigned, on philosophical principles; he submits to pain, because it is inevitable, to bereavement, because it is irreparable, and to death, because it is his destiny.`

const OCR_P1_15_SOURCE_B_REF =
  'John Henry Newman, The Idea of a University (1873), Discourse VIII, "Knowledge Viewed in Relation to Religion", from section 10'

// ─── OCR Paper 2 Extracts ───────────────────────────────────────────────────

const OCR_P2_01_EXTRACT = `The house had been empty for eleven years, and it showed. Not in any single dramatic sign of decay - no collapsed roof, no shattered windows - but in the slow, patient accumulation of neglect that time inflicts on anything left unattended. The paint on the front door had faded from red to a dusty pink, and the brass letterbox was green with verdigris. Weeds had pushed through the path, cracking the concrete into a mosaic of grey and green. The garden, once Mrs Calderwood's particular pride, had reverted to wilderness: the roses strangled by bindweed, the lawn knee-high with grass gone to seed.

Eleanor stood at the gate and felt something shift inside her chest - not grief, exactly, but something adjacent to it. Recognition, perhaps. The understanding that this house, which had contained her entire childhood, had continued to exist without her, ageing in real time while her memories of it remained frozen at seventeen.

She pushed open the gate. It scraped against the path with a sound like a long-held breath finally released. The key was in her coat pocket, where it had been for eleven years - carried from flat to flat, city to city, dropped into drawers and fished out again, too heavy with meaning to discard. She fitted it into the lock. It turned with surprising ease, as though the house had been expecting her.

Inside, the hallway smelled of dust and something sweeter - the ghost of her mother's perfume, perhaps, or only the particular scent of old wood and closed rooms. The wallpaper was peeling at the seams. A pile of post lay behind the door, yellowed and curling. Eleanor stepped over it carefully, as though entering a church.`

const OCR_P2_01_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_02_EXTRACT = `The sea was angrier than Ravi had ever seen it. Waves reared up like grey horses and crashed against the harbour wall, sending plumes of spray twenty feet into the air. The fishing boats - his father's among them - strained at their moorings, rising and falling with a violence that made the ropes creak and the hulls groan. Above the harbour, the sky was a single unbroken sheet of iron, pressing down on the world with a weight that felt almost physical.

His father was out there. Somewhere beyond the headland, in a boat built for calm waters and moderate swells, his father was fighting this sea. The coastguard had lost radio contact two hours ago. That was the phrase they used - "lost contact" - as though the connection were a coin that had slipped between sofa cushions and might be found again with a bit of rummaging.

Ravi's mother stood beside him, her hand gripping his arm with a force that would leave bruises. She had not spoken since the coastguard's call. Her silence was not the silence of calm but of a person holding something in - a scream, perhaps, or a prayer, or simply the knowledge that words, in the face of this indifferent violence, were grotesquely inadequate.

The lighthouse beam swept across the water every four seconds. Ravi counted them. Four seconds of darkness, then a brief white flare that illuminated the chaos of the sea before abandoning it again. Each flash revealed the same empty expanse. No boat. No light. Nothing but water and the terrible energy of the storm.`

const OCR_P2_02_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_03_EXTRACT = `She was dressed in rich materials,—satins, and lace, and silks,—all of white. Her shoes were white. And she had a long white veil dependent from her hair, and she had bridal flowers in her hair, but her hair was white. Some bright jewels sparkled on her neck and on her hands, and some other jewels lay sparkling on the table. Dresses, less splendid than the dress she wore, and half-packed trunks, were scattered about. She had not quite finished dressing, for she had but one shoe on,—the other was on the table near her hand,—her veil was but half arranged, her watch and chain were not put on, and some lace for her bosom lay with those trinkets, and with her handkerchief, and gloves, and some flowers, and a Prayer-Book all confusedly heaped about the looking-glass.

It was not in the first few moments that I saw all these things, though I saw more of them in the first moments than might be supposed. But I saw that everything within my view which ought to be white, had been white long ago, and had lost its lustre and was faded and yellow. I saw that the bride within the bridal dress had withered like the dress, and like the flowers, and had no brightness left but the brightness of her sunken eyes. I saw that the dress had been put upon the rounded figure of a young woman, and that the figure upon which it now hung loose had shrunk to skin and bone. Once, I had been taken to see some ghastly waxwork at the Fair, representing I know not what impossible personage lying in state. Once, I had been taken to one of our old marsh churches to see a skeleton in the ashes of a rich dress that had been dug out of a vault under the church pavement. Now, waxwork and skeleton seemed to have dark eyes that moved and looked at me. I should have cried out, if I could.

“Who is it?” said the lady at the table.

“Pip, ma’am.”

“Pip?”

“Mr. Pumblechook’s boy, ma’am. Come—to play.”

“Come nearer; let me look at you. Come close.”

It was when I stood before her, avoiding her eyes, that I took note of the surrounding objects in detail, and saw that her watch had stopped at twenty minutes to nine, and that a clock in the room had stopped at twenty minutes to nine.`

const OCR_P2_03_EXTRACT_SOURCE =
  'Charles Dickens, Great Expectations (1861), Chapter 8. Pip, a village boy who tells the story, has been sent to play at Satis House and meets Miss Havisham for the first time'

const OCR_P2_04_EXTRACT = `The train journey north took seven hours, and with every mile the landscape grew starker, the colours leaching away until the world outside the window was reduced to a palette of grey and brown and the deep, almost black green of the pines. Lena pressed her forehead against the cold glass and watched Scotland unfold: the gentle Borders hills giving way to the harder angles of the Highlands, the lochs appearing and disappearing like dark mirrors laid flat between the mountains.

She had not been back in three years. Three years since the funeral, since the terrible week of arrangements and arguments and the discovery that her mother, who had seemed so capable, so organised, so entirely in control, had left no will, no instructions, and debts that none of them had suspected. Three years since Lena had stood in the kitchen of the house where she grew up and told her brother that she was leaving and would not be coming back.

She was coming back now. Not because she wanted to, but because Duncan had called at two in the morning - always the worst time for phone calls, the hour when bad news is delivered - and told her that the house was being sold and there were things she should collect if she wanted them.

Things. As though a childhood could be boxed up and carried away. As though memory had a physical weight that could be lifted from a shelf.

The train slowed. Through the rain-streaked window, Lena saw the platform, the familiar sign, the mountains beyond, unchanged and indifferent. She gathered her bag, stood, and stepped into the cold.`

const OCR_P2_04_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_05_EXTRACT = `The jungle closed around them like a fist. Within twenty paces of leaving the river, the light had dimmed to a greenish twilight, the canopy overhead so dense that the sky was reduced to occasional fragments of blue glimpsed through gaps in the foliage. The air was thick, wet, and warm, and it carried a smell that Henderson could only describe as the smell of growth itself - of things living and dying and decaying and growing again in an endless, accelerated cycle that had no beginning and no end.

Every surface was alive. Moss covered the tree trunks in a fur of emerald green. Vines hung from the branches like the rigging of abandoned ships. Fungi sprouted from the rotting logs in shapes that seemed almost architectural - shelves, brackets, cups, and spirals of orange, white, and violet. Insects were everywhere: ants marching in disciplined columns along the branches, beetles the size of a child's fist trundling through the leaf litter, and above them, always, the high electric whine of mosquitoes.

Gupta went first, his machete swinging in a steady rhythm, carving a path through the undergrowth that closed behind them almost as fast as it was cut. Henderson followed, his notebook already damp, his pencil slipping in his sweating fingers. He had read about the Amazon in books - academic papers, travel narratives, the dry prose of botanical surveys - but nothing had prepared him for the sheer overwhelming presence of it. The jungle did not merely surround you; it absorbed you. It reduced you to a minor detail in its own vast, indifferent narrative.`

const OCR_P2_05_EXTRACT_SOURCE =
  "Original travel-narrative composition in the style of 19th-century explorer journals (Wallace's Malay Archipelago referenced for genre only - text is not from Wallace)"

const OCR_P2_06_EXTRACT = `Grace was fourteen when she decided she would never speak again. Not because she could not - her vocal cords were perfectly functional, her jaw and tongue and lips all capable of forming the sounds that, strung together, constituted language - but because she had come to the conclusion that speaking was, on the whole, more trouble than it was worth. Words were unreliable. They said one thing and meant another. They made promises they could not keep. They flew out of your mouth before you could catch them and did damage that no amount of subsequent words could repair.

Her mother said it was a phase. Her father said it was attention-seeking. Her teachers said it was a safeguarding concern and convened a meeting. The educational psychologist, a kind woman with patient eyes and a cardigan the colour of porridge, said it was elective mutism and recommended therapy. None of them asked Grace why. Or rather, they all asked why, but they asked with words, and Grace had already decided that words were the problem, so she answered with silence, which they interpreted as defiance, which was itself a kind of proof that she was right.

The strange thing was that silence, once you committed to it, was not empty at all. It was extraordinarily full. Grace discovered that when you stopped talking, you started noticing things: the way people's faces changed when they thought no one was watching; the particular quality of light at four o'clock on a November afternoon; the sound of rain on a skylight, which was nothing like the sound of rain on a window, which was nothing like the sound of rain on leaves. The world, it turned out, was a much more interesting place when you stopped narrating it.`

const OCR_P2_06_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_07_EXTRACT = `It was the coldest winter in living memory, and the river had frozen solid for the first time in forty years. From the bridge, you could see the ice stretching from bank to bank, a pale grey sheet that creaked and groaned like something alive and in pain. Children had been forbidden from walking on it, which naturally meant that by the second day, every child in the village had done so.

Thomas was among them. He was twelve, and he possessed the particular fearlessness of boys who have not yet learned that the world can hurt them in ways that do not heal. He walked to the centre of the river, the ice flexing beneath his boots with a sound like distant thunder, and stood there, arms spread, face tilted to the white sky, and felt invincible. The village on either bank looked small and temporary, a collection of stone and slate huddled against the cold. The hills beyond were white. The sky was white. Everything was white, and Thomas stood at the centre of it all and understood, without being able to articulate it, that this moment - this precise arrangement of cold and light and silence - would never come again.

Then the ice cracked.

Not beneath him - twenty yards upstream, where the current was stronger and the freeze less deep. A sound like a gunshot, then a long, splintering groan that travelled through the ice and through the soles of his boots and up through his body until he felt it in his teeth. Thomas ran. The ice shifted beneath him, tilting, splitting, and he ran with the clumsy, desperate speed of pure terror, and the bank rushed towards him, and hands reached out - adult hands, strong hands - and pulled him to safety, and he lay on the frozen grass gasping and shaking and alive.`

const OCR_P2_07_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_08_EXTRACT = `The prison visiting room smelled of disinfectant and vending-machine coffee and the particular brand of despair that comes from being in a place where hope is rationed. Plastic chairs were bolted to the floor in rows of four, facing each other across tables barely wide enough for two cups and a silence. Strip lighting hummed overhead, casting everything in a flat, clinical white that erased shadows and made every face look slightly ill.

Maya sat in the third row and waited. Around her, other visitors fidgeted, checked phones that would soon be confiscated, rehearsed the things they would say and the things they would not. A woman two seats down was crying quietly, her tears running into the collar of her coat. A boy of perhaps eight sat perfectly still, staring at the door through which the prisoners would emerge, his face arranged in an expression of studied indifference that was, Maya knew, the mask children wear when they are trying very hard not to feel anything at all.

The door opened. They came in single file, wearing identical grey tracksuits, and for a moment they were all the same person - the same shuffling walk, the same downcast eyes, the same careful blankness. Then faces resolved into individuals, and the room reorganised itself around recognition: the woman who had been crying stood up; the boy's mask cracked into something raw and urgent; and Maya saw her brother.

He looked older. Not in years - it had only been four months - but in some deeper, less measurable way, as though the experience of incarceration had compressed time, forcing upon him a decade's worth of weariness in a single season.`

const OCR_P2_08_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_09_EXTRACT = `The market was a riot of colour and noise and the kind of organised chaos that, to the uninitiated, looked like pandemonium but was in fact a system of extraordinary sophistication. Mrs Adeyemi had occupied the same three feet of pavement outside Brixton station for twenty-seven years, and she ran her stall with the precision of a military operation and the warmth of a family kitchen.

Her plantains were legendary. People came from Peckham, from Camberwell, from as far as Lewisham, for Mrs Adeyemi's plantains, which she fried in palm oil until they were the colour of dark honey and the texture of silk. She also sold yams, okra, scotch bonnet peppers in jewel-bright reds and oranges, and bundles of thyme and bay leaves tied with cotton string. But the plantains were the thing. The reason people queued.

"Oya, come," she said to me, beckoning with a hand that was simultaneously peeling a yam with a speed that bordered on the supernatural. "You want to know about Brixton? I tell you about Brixton. Brixton is this market. This market is the people. We come from Jamaica, from Nigeria, from Ghana, from Portugal. We bring our food, our music, our trouble." She laughed - a laugh that started deep in her chest and worked its way outward until her whole body shook. "And the food is better than the trouble."

Behind her, a sound system was playing reggae at a volume that made conversation an act of faith. A man in a yellow hat was selling coconuts, splitting them with a machete and handing them over with a straw. Children weaved between the stalls. The air smelled of jerk chicken and exhaust fumes and, beneath everything, the sweet, starchy warmth of Mrs Adeyemi's plantains.`

const OCR_P2_09_EXTRACT_SOURCE =
  'Specially written for this practice paper: a first-person account of Brixton Market in the manner of literary non-fiction'

const OCR_P2_10_EXTRACT = `At the summit, the world fell away. There was no gradual transition, no gentle slope to prepare you; the mountain simply ended, and beyond it was sky - an immensity of blue that made thought seem trivial and language absurd. Kenji sat on a flat rock and let his breathing slow, feeling the altitude in the thin, sharp quality of the air and in the rapid percussion of his heart. Below him, the valley they had climbed from was already lost in cloud, and the other peaks of the range stood in a broken line to the north, their snowfields blazing white in the late afternoon sun.

He had been walking for six days. Six days of relentless upward motion, of burning thighs and aching shoulders and the particular misery of wet socks in cold boots. His guide, a man named Dorje who moved uphill with the casual ease of someone walking to the shops, had said little during the ascent, communicating mostly through gestures: this way, not that way, drink, eat, rest. It was a language stripped to its essentials, and Kenji had come to prefer it to the cluttered, over-furnished conversations of his life in London.

Up here, everything was simple. You walked because the path went upward. You ate because your body demanded fuel. You slept because exhaustion permitted no alternative. The concerns that had driven Kenji out of his flat and onto a plane - the job he had lost, the relationship that had ended with a conversation so quiet it was barely audible - felt not resolved but irrelevant, reduced to their proper insignificance by the scale of the landscape.`

const OCR_P2_10_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_11_EXTRACT = `The kitchen was the heart of the house, and Nana was the heart of the kitchen. She stood at the stove as she had stood every Saturday for as long as Amara could remember, stirring a pot of groundnut soup with a wooden spoon worn smooth by decades of use. The soup was the colour of burnt amber, and its smell - rich, earthy, faintly sweet - was, for Amara, the smell of childhood itself.

"Come," Nana said, without turning around. She always knew. Some sixth sense, honed by years of grandchildren trying to steal tastes when her back was turned, alerted her to every presence in her kitchen. "Come and learn."

Amara came. She was fifteen, and she had agreed to this lesson not because she wanted to cook - she had no interest in cooking, or in anything that required patience and the willingness to follow instructions - but because her mother had told her, with an urgency that was unusual and therefore alarming, that Nana would not always be here, and that some things, once lost, could not be recovered from the internet.

So she stood beside her grandmother and watched. Nana's hands moved with the unhurried confidence of someone who has performed the same actions ten thousand times: a handful of ground peanuts, a precise shake of cayenne, the tomatoes crushed between her palms rather than cut with a knife because, she explained, a knife makes them angry and angry tomatoes make bitter soup.

This was not a recipe. Recipes were written down, measured, reproducible. This was something else - an inheritance passed from hand to hand, calibrated by instinct and memory, adjusted for the weather, the season, and the number of grandchildren expected for lunch.`

const OCR_P2_11_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_12_EXTRACT = `The battlefield was quiet now. Not the comfortable silence of a winter evening or the expectant hush of a concert hall, but the terrible, ringing silence that follows catastrophe - a silence made louder by the memory of the noise that preceded it. Lieutenant Hargreaves walked through what had been, six hours ago, a wheat field, and was now a landscape that belonged to no category he possessed. The wheat was gone. The earth was gone, replaced by a churned, cratered moonscape of mud and metal and things he chose not to identify. The air smelled of cordite and something else, something sweet and wrong.

He was looking for Sergeant Ellis. This was not an order; Ellis was listed as missing, which in the careful euphemisms of the military meant either captured, lost, or dead. But Hargreaves had served with Ellis for two years, had shared a dugout with him through the worst winter of the war, had listened to him talk about his wife, his daughter, his allotment in Derbyshire where he grew runner beans and dahlias, and he could not bring himself to leave this field without knowing.

The stretcher-bearers were still working, moving through the wreckage with a calm efficiency that struck Hargreaves as either heroic or insane. They carried their burdens with extraordinary gentleness, as though the broken men on the stretchers were made of glass. One bearer, barely more than a boy, was singing - very softly, almost inaudibly - a hymn that Hargreaves recognised from school, and the sound of it in this place was so incongruous that it made him want to weep.`

const OCR_P2_12_EXTRACT_SOURCE =
  'Specially written for this practice paper: fiction set during the Battle of the Somme, 1916'

const OCR_P2_13_EXTRACT = `Rain. It had been raining for three weeks, and Sienna had begun to suspect it would never stop. The gutters overflowed. The drains backed up. The garden had become a lake from which the tops of her mother's rose bushes emerged like the masts of sunken ships. Inside the house, damp crept along the walls, painting maps of imaginary countries in shades of grey and yellow, and the windows ran with condensation that Sienna drew faces in when she thought no one was watching.

She was bored in the way that only a twelve-year-old trapped indoors during the summer holidays can be bored: comprehensively, existentially, with her whole body. She had read every book in the house. She had watched everything available on every streaming service. She had rearranged her bedroom twice, argued with her brother three times, and composed a long and passionate letter to the weather gods that she had posted through the letterbox and which was now dissolving in a puddle on the front step.

It was on the twenty-second day of rain that she found the door. Not a real door - or rather, a real door, but one she had never noticed before, set into the wall at the back of the cupboard under the stairs, behind the vacuum cleaner and the box of Christmas decorations and the ironing board that nobody used because nobody in this family ironed anything. The door was small, barely three feet high, made of dark wood with a round brass handle that was cold to the touch.

Sienna looked at it for a long time. Then she opened it.`

const OCR_P2_13_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_14_EXTRACT = `The boxing gym occupied the basement of a building that had been, at various points in its history, a warehouse, a dance hall, and a furniture showroom, and it carried the accumulated atmosphere of all these former lives in its damp walls and sagging ceiling. The ring, elevated on a wooden platform in the centre, was lit by four fluorescent tubes that buzzed and flickered and cast a light that made everyone look slightly jaundiced. The ropes were frayed. The canvas was stained with patterns that Marcus preferred not to think about. It was, by any reasonable standard, a terrible place. It was the best place Marcus had ever known.

Coach Reeves was seventy-three years old and built like a fire hydrant - short, wide, and apparently indestructible. He had been a middleweight in the 1970s, good enough for a British title shot but not quite good enough to win it, and he had been coaching in this basement for forty years, turning frightened boys into disciplined young men through a method that combined relentless physical training with a philosophical outlook that could be summarised in a single sentence: "Control yourself, and you control your world."

Marcus was sixteen. He had been coming to the gym for eight months, ever since the night he had been stopped by police for the third time in a week and had stood on the pavement, hands against the wall, legs spread, burning with a fury so intense that it frightened him - not because he might do something but because he wanted to. His mother had found the gym. Coach Reeves had taken one look at Marcus - at the anger in his jaw, the tension in his shoulders, the fists that clenched and unclenched at his sides - and said: "Good. I can work with angry."

And he had. Eight months of skipping, bag work, sparring, and the slow, patient education of a body that had known only two speeds - still and explosive - into something more nuanced, more controlled, more dangerous precisely because it was deliberate.`

const OCR_P2_14_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_15_EXTRACT = `The last day of school arrived with the particular cruelty of beautiful weather. The sky was flawless - a deep, singing blue that made the classroom feel like a punishment and the playing field like a promise. Year Eleven sat through their final assembly with the restless energy of creatures about to be released, and Mrs Patterson, who had been their head of year for five years and who was not, under any circumstances, going to cry, stood at the lectern and told them things they would not understand for another decade.

She told them that the friendships they had made here were more durable than they imagined, and more fragile. She told them that some of them would change beyond recognition in the next five years, and that this was not a betrayal of who they were but a discovery of who they could be. She told them that failure was not the opposite of success but its prerequisite, and that the people who never failed were the people who never tried anything difficult.

Lily sat in the third row and did not listen. She was too busy trying to memorise everything: the exact shade of light on the hall floor; the way Jack Mercer's hair fell across his forehead; the sound of two hundred people breathing in the same room; the particular smell of the school - floor polish, cheap deodorant, and the indefinable essence of a building that has contained the hopes and terrors of adolescence for fifty years. She was trying to fix it all in place because she understood, with the sudden clarity that sometimes visits the young at moments of transition, that this was the last time all of these people would be in the same room, and that the world she had inhabited for five years was about to dissolve, like sugar in water, into something that could be remembered but never reconstituted.`

const OCR_P2_15_EXTRACT_SOURCE = 'Original literary fiction composition'

// ─── OCR Paper 1 Additional Extracts (Papers 16-17) ────────────────────────

const OCR_P1_16_SOURCE_A = `The archaeological dig that has consumed the past three summers of my life began not with ambition but with accident. I was walking across a farmer's field near the village of Ashton, collecting soil samples for a study on medieval agricultural practices, when my boot caught on something hard. I pulled at it - thoughtlessly, archaeologically incorrectly - and out came a fragment of pottery, so small it could fit in a child's palm, yet unmistakably decorated with a pattern that suggested it was ancient. Not Roman. Older than that.

What followed were three seasons of meticulous work: surveying, mapping, excavating, photographing, documenting. My team and I worked in conditions that ranged from pleasantly sunny to absolutely miserable, in the middle of a wheat field owned by a farmer who was remarkably patient with our presence, even when we had to ask him to delay harvesting. We found a settlement. The remains of at least thirty structures, spanning several centuries. Pottery, tools, coins, a small iron brooch shaped like a bird. Most significantly, we found evidence of a sophisticated system of water management and storage that suggests the community was not merely surviving but thriving.

The temptation, when you make a discovery like this, is to rush to conclusions. To parade your findings and claim credit before the work is truly done. I have resisted this impulse. The pottery is still being analysed. The coins are being cleaned and identified. The structures are still in the earth, mostly, protected and waiting for future archaeologists with better techniques than we possess. I tell people it will take another ten years at least before we can claim to understand what we have found.`

const OCR_P1_16_SOURCE_A_REF =
  'Specially written for this practice paper: a magazine article, "Digging Deeper: An Accidental Discovery", under the invented byline Dr Marcus Webb'

const OCR_P1_16_SOURCE_B = `There is something deeply troubling about the modern obsession with archaeological discovery. We have created a culture in which the past is treated as a resource to be exploited, catalogued, and displayed in museums where it satisfies our curiosity before we move on to the next attraction. We dig up graves, remove artefacts from their contexts, and justify this violation by invoking the name of science and historical knowledge.

I do not dispute that we can learn from the past. But I question whether the learning justifies the desecration. Indigenous peoples have argued for generations that the removal of ancestral remains and sacred objects is a form of spiritual violence, yet it continues because the archaeological establishment has convinced itself that knowledge is a sufficient moral justification for any intrusion. I have walked through countless museums and felt the weight of this theft: these objects, removed from the earth where they rested for centuries or millennia, displayed behind glass for consumption by people who have no relationship to them, no responsibility for them, no spiritual connection.

What if, instead of excavating, we allowed the past to remain? What if we valued preservation and protection over discovery and knowledge? This is not a call for ignorance. It is a call for humility, and for a recognition that not everything that can be known should be learned.`

const OCR_P1_16_SOURCE_B_REF =
  'Specially written for this practice paper: an opinion article, "Whose Past Is It Anyway?", under the invented byline John Bighton'

const OCR_P1_17_SOURCE_A = `The silence of the library is not empty. It is populated with the whispered voices of authors long dead, readers who have come and gone, the ambient presence of all the ideas that have been written, preserved, and waited, sometimes for centuries, for someone to open them again. I have worked as a librarian for forty-three years, and I have never found the work boring, even when the tasks are repetitive - cataloguing, shelving, processing loans. Each book is a potential encounter with a person not yet met.

Our library serves a community of about twelve thousand people. The average person probably does not think of it as remarkable. It is a Victorian building with long windows, sagging bookshelves, a temperamental heating system that breaks down with remarkable regularity in winter, and a small staff working on a budget that seems to diminish year after year. But something happens in this library that does not happen in the flashy cultural spaces that have been erected in the city centre. People find what they need. Not always what they are looking for, but what they genuinely need. A child discovers that reading is a portal to other lives. An elderly man finds books that help him grieve his wife. A teenager discovers writers who speak to experiences she thought she was alone in having.

In three years, the local council has scheduled this building for closure. We are "underutilised," we are told. Better to sell the land, which has become valuable as the neighbourhood gentrifies. Better to offer people books through a digital platform that is more "cost-effective" and "accessible." But accessibility is not the same as community. A library is not primarily about the books. It is about the librarians - the people who know the patrons, who make recommendations, who notice when someone has not been in for months and become concerned. It is about the space itself, the permission it gives people to exist without purchasing, without performing, without justifying their presence.`

const OCR_P1_17_SOURCE_A_REF =
  'Specially written for this practice paper: a newspaper feature, "Forty-Three Years of Silence", under the invented byline Margaret Foster'

const OCR_P1_17_SOURCE_B = `Public libraries have had their day. In the age of the internet, the notion that we should maintain expensive, underutilised buildings as repositories of physical books is an anachronism. Digital technology has democratised access to information - a person with a smartphone now has access to more knowledge than the world's richest libraries could contain a century ago. The cost of maintaining these ageing buildings, with their ageing staffs, is a luxury that cash-strapped councils can no longer afford.

The argument that libraries serve a "community" function is sentimental. What is this community, precisely? Not the majority of the population, who have not entered a library in years. Not the students, who have access to university libraries. Not the readers, who increasingly purchase books online or access them digitally. The few people who do use public libraries are, frankly, often those without the means to access alternatives. Providing subsidised access to books for this minority is a worthy goal, but it is not the most efficient use of public resources. A library in 2024 is a solution to a problem that has largely been solved by technological progress.

Far from mourning the closure of libraries, we should celebrate it as a necessary evolution. The space can be better used. The budget can be redirected to services that more people actually use. And those who genuinely need books will find them through digital means, which are cheaper, more convenient, and accessible twenty-four hours a day.`

const OCR_P1_17_SOURCE_B_REF =
  'Specially written for this practice paper: an opinion article, "Time to Close the Books on Libraries", under the invented byline Kenneth Davies'

// ─── OCR Paper 2 Additional Extracts (Papers 16-17) ────────────────────────

const OCR_P2_16_EXTRACT = `The workshop had a smell unlike anywhere else in the world - equal parts machine oil, sawdust, rust, and something else, something like time itself, like all the decades of work condensed into the air. James stood in the doorway for a moment, not yet inside, hovering in that threshold between the street and the kingdom his grandfather had built over sixty-seven years.

The workbenches ran the length of the room, each one a landscape of tools - chisels arranged by size, hammers with worn wooden handles, planes of different grades, sandpaper sorted into paper bags marked in his grandfather's precise handwriting. Every tool had a place. Every place had been earned through years of use. The walls were covered with sketches - design plans for furniture pieces, some dating back to the sixties, some unfinished, waiting for the maker's hands to return and continue the work that had been abandoned when his health began its long decline.

His grandfather was not here. The hospital bed was here, in the back corner, where he had insisted it be placed so he could see the work continuing, could watch the younger generation - James, and his cousins - learning to translate intention into object. But this morning, for the first time in three weeks, Grandpa Jack had not come down. The workshop felt the absence like a missing floor joist, structurally compromised, dangerous.

James walked to the vice and clamped a piece of oak he had been working on. The wood was beautiful - quarter-sawn, with the grain running like water. He had chosen this wood because his grandfather had taught him that wood was not a neutral material waiting to be shaped into a designer's vision, but a substance with its own character, its own requirements. Listen to the wood, Grandpa Jack would say. Let it tell you what it wants to become.`

const OCR_P2_16_EXTRACT_SOURCE = 'Original literary fiction composition'

const OCR_P2_17_EXTRACT = `The protest had been planned for weeks, yet somehow Amara had not truly believed it would happen until she stood in the street with three thousand other people, their placards held high, their voices merged into a single roar that seemed to shake the buildings on either side of the avenue. She had never done this before - never stood in the street chanting, never risked arrest, never put her body between her beliefs and the machinery of the state.

Her mother had asked her not to come. "It's dangerous," she had said, not meaning danger from protesters or from accidents, but danger from police, from cameras, from the digital records that would now exist of Amara participating in this moment. In her mother's generation, you could protest and then disappear back into ordinary life. In Amara's generation, protest created data. Every face captured by surveillance, every name chanted into a phone recording, every placard photographed - all of it preserved, searchable, retrievable.

And yet here she was. The woman next to her was elderly, maybe sixty-five, holding a sign that said "Still Fighting After Fifty Years." To her other side was a boy who could not have been more than ten, sitting on his father's shoulders. There were teachers and nurses in their uniforms, office workers in business dress, students, elderly people, families with children. The demographic was unremarkable - it looked like the neighbourhood itself, if the neighbourhood had simply decided to stand up and speak at once.

A line of police in riot gear formed along the street ahead. Amara's heart accelerated. The crowd's chanting grew louder, a physical response to the sight of armed officers. The woman with the sign reached over and squeezed Amara's arm. "Breathe," she said. "I've seen worse than this. We'll be fine." But Amara knew that what she would breathe, in the hours ahead, would change the chemistry of her lungs, her blood, her sense of who she was and who she could become.`

const OCR_P2_17_EXTRACT_SOURCE = 'Original literary fiction composition'

function buildOcrP1(
  num: string,
  subtitle: string,
  sourceA: string,
  sourceARef: string,
  sourceB: string,
  sourceBRef: string,
  topicLabel: string,
  q1Text: string,
  q1Answer: string,
  q2Text: string,
  q2Answers: Record<string, string>,
  q3Text: string,
  q3Answers: Record<string, string>,
  q4Text: string,
  q4Answers: Record<string, string>,
  q5Text: string,
): MockExamPaper {
  return {
    id: `ocr-p1-${num}`,
    board: 'OCR',
    paperNumber: 1,
    title: 'OCR Paper 1',
    subtitle,
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: `ocr-p1-${num}-reading`,
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${sourceARef}\nSource B: ${sourceBRef}`,
        totalMarks: 40,
        suggestedTimeMinutes: 70,
        questions: [
          {
            id: `ocr-p1-${num}-q1`,
            questionNumber: 1,
            questionText: q1Text,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${sourceA}\n\nSource B:\n${sourceB}`,
            extractSource: `Source A: ${sourceARef} | Source B: ${sourceBRef}`,
            modelAnswers: { 'Grade 4-5': q1Answer },
            markScheme: [
              '1 mark per valid point identified',
              'Maximum 4 marks',
              'Must be from the specified source/section',
            ],
          },
          {
            id: `ocr-p1-${num}-q2`,
            questionNumber: 2,
            questionText: q2Text,
            marks: 6,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: `Source A:\n${sourceA}\n\nSource B:\n${sourceB}`,
            extractSource: `Source A: ${sourceARef} | Source B: ${sourceBRef}`,
            modelAnswers: q2Answers,
            markScheme: [
              'Explains how language is used to create effects',
              'Uses evidence from the specified text',
              'Analyses techniques with supporting quotations',
              'Top band: perceptive, detailed analysis',
            ],
          },
          {
            id: `ocr-p1-${num}-q3`,
            questionNumber: 3,
            questionText: q3Text,
            marks: 14,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${sourceA}\n\nSource B:\n${sourceB}`,
            extractSource: `Source A: ${sourceARef} | Source B: ${sourceBRef}`,
            modelAnswers: q3Answers,
            markScheme: [
              'Compares language used in both sources',
              'Analyses specific techniques and their effects',
              'Uses well-selected evidence from both texts',
              'Shows understanding of how context shapes language',
              'Top band: perceptive, sustained comparative analysis',
            ],
          },
          {
            id: `ocr-p1-${num}-q4`,
            questionNumber: 4,
            questionText: q4Text,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'evaluation',
            extract: `Source A:\n${sourceA}\n\nSource B:\n${sourceB}`,
            extractSource: `Source A: ${sourceARef} | Source B: ${sourceBRef}`,
            modelAnswers: q4Answers,
            markScheme: [
              'Evaluates with a clear and sustained personal response',
              'Analyses methods used by both writers',
              'Supports evaluation with well-chosen evidence',
              'Considers how context influences writing',
              'Top band: critical, evaluative, conceptualised response',
            ],
          },
        ],
      },
      {
        id: `ocr-p1-${num}-writing`,
        title: 'Section B: Writing',
        description:
          'Answer ONE of the following questions. You are advised to spend about 45 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: `ocr-p1-${num}-q5`,
            questionNumber: 5,
            questionText: q5Text,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, purposeful piece in the appropriate form with: a sustained viewpoint; some persuasive techniques (rhetorical questions, direct address, evidence); generally accurate spelling and punctuation; paragraphed structure.',
              'Grade 6-7':
                'A well-crafted piece with: sophisticated rhetorical techniques deployed fluently; appropriate register matched to audience and purpose; well-organised argument with effective paragraphing; consistent technical accuracy with ambitious vocabulary and varied sentence structures.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Clear communication matched to purpose, form, audience',
              'AO5: Structured argument with coherent paragraphing and discourse markers',
              'AO6 Technical Accuracy (16 marks): Accurate sentence demarcation and punctuation range',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms used for effect',
            ],
          },
        ],
      },
    ],
  }
}

// ─── Helper to build an OCR Paper 2 ─────────────────────────────────────────

function buildOcrP2(
  num: string,
  subtitle: string,
  extract: string,
  extractSource: string,
  q1Text: string,
  q1Answer: string,
  q2Text: string,
  q2Answers: Record<string, string>,
  q3Text: string,
  q3Answers: Record<string, string>,
  q4Text: string,
  q4Answers: Record<string, string>,
  q5Text: string,
): MockExamPaper {
  return {
    id: `ocr-p2-${num}`,
    board: 'OCR',
    paperNumber: 2,
    title: 'OCR Paper 2',
    subtitle,
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: `ocr-p2-${num}-reading`,
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${extractSource}`,
        totalMarks: 40,
        suggestedTimeMinutes: 70,
        questions: [
          {
            id: `ocr-p2-${num}-q1`,
            questionNumber: 1,
            questionText: q1Text,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract,
            extractSource,
            modelAnswers: { 'Grade 4-5': q1Answer },
            markScheme: [
              '1 mark per valid point identified',
              'Maximum 4 marks',
              'Must use evidence from the specified section',
            ],
          },
          {
            id: `ocr-p2-${num}-q2`,
            questionNumber: 2,
            questionText: q2Text,
            marks: 6,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract,
            extractSource,
            modelAnswers: q2Answers,
            markScheme: [
              'Analyses specific language choices and their effects',
              'Comments on how language creates mood, atmosphere, or character',
              'Uses embedded quotations and subject terminology',
              'Top band: perceptive, detailed analysis',
            ],
          },
          {
            id: `ocr-p2-${num}-q3`,
            questionNumber: 3,
            questionText: q3Text,
            marks: 14,
            suggestedTimeMinutes: 20,
            questionType: 'analysis',
            extract,
            extractSource,
            modelAnswers: q3Answers,
            markScheme: [
              'Analyses how the writer uses structure to shape meaning',
              'Comments on sentence-level and whole-text structural choices',
              'Considers the effect of structure on the reader',
              'Uses structural terminology accurately',
              'Top band: perceptive, sustained structural analysis',
            ],
          },
          {
            id: `ocr-p2-${num}-q4`,
            questionNumber: 4,
            questionText: q4Text,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'evaluation',
            extract,
            extractSource,
            modelAnswers: q4Answers,
            markScheme: [
              'Evaluates critically with a clear personal response',
              "Analyses writer's methods (language, structure, form)",
              'Uses well-selected textual evidence',
              "Shows nuanced understanding of writer's craft",
              'Top band: evaluative, critical, conceptualised response',
            ],
          },
        ],
      },
      {
        id: `ocr-p2-${num}-writing`,
        title: 'Section B: Writing',
        description:
          'Answer ONE of the following questions. You are advised to spend about 45 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: `ocr-p2-${num}-q5`,
            questionNumber: 5,
            questionText: q5Text,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative writing with: a recognisable narrative or descriptive structure; use of some literary techniques (simile, metaphor, sensory detail); varied vocabulary; generally accurate spelling and punctuation with some variety in sentence forms.',
              'Grade 6-7':
                'A compelling piece with: controlled atmosphere, pace, and tone; crafted use of imagery and sensory detail; conscious structural choices for effect; consistent technical accuracy with ambitious vocabulary and sophisticated sentence constructions.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Engaging communication with controlled register',
              'AO5: Effective organisation with structural and grammatical features used to create effects',
              'AO6 Technical Accuracy (16 marks): Accurate sentence demarcation and punctuation range',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for deliberate effect',
            ],
          },
        ],
      },
    ],
  }
}

// ─── Build all 34 papers ────────────────────────────────────────────────────

export const ocrMockExams: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // OCR PAPER 1 - papers 01 to 15 (16 and 17 follow Paper 2)
  // ═══════════════════════════════════════════════════════════════════════════

  buildOcrP1(
    '01',
    'Animal Welfare and Farming',
    OCR_P1_01_SOURCE_A,
    OCR_P1_01_SOURCE_A_REF,
    OCR_P1_01_SOURCE_B,
    OCR_P1_01_SOURCE_B_REF,
    'animal welfare',
    'Read Source A. Identify four criticisms the writer makes of factory farming.',
    '1. Factory farms cause suffering on an industrial scale. 2. Forty thousand chickens are packed into a single windowless shed. 3. The air is thick with ammonia. 4. Birds have sores from standing on wire mesh their whole lives.',
    'How does the writer of Source A use language to persuade the reader that factory farming is wrong?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'The writer uses emotive language such as "engine of suffering" to make factory farming sound mechanical and cruel. The description of chickens with "beaks trimmed" is disturbing because it shows the birds are physically altered. The phrase "convenient fiction" accuses supporters of lying. The metaphor of animals as "units of production" suggests they are treated as objects rather than living creatures. The reference to "their Sunday roast" at the very end brings the argument home to an ordinary family meal, so the reader feels personally involved.',
      'Grade 6-7':
        'Patel constructs her argument through a deliberate escalation from abstract accusation to visceral, observed detail. The opening metaphor, "engine of suffering on an industrial scale", yokes together the mechanical ("engine") and the emotional ("suffering"), encapsulating the paradox of industrialised cruelty. The eyewitness account that follows functions as evidence: the specificity of "forty thousand chickens", "a single windowless shed" and "six-week lives" turns abstract statistics into concrete horror. The phrase "convenient fiction" is rhetorically sophisticated: "convenient" implies wilful self-deception, while "fiction" directly accuses the industry of dishonesty. The final sentence ends on "their Sunday roast", collapsing the distance between the industrial process and the family table: the "consumers" who "avoid confronting the true cost" are implicated as accomplices.',
    },
    'Compare how the writers of Source A and Source B use language to present their views on the relationship between humans and animals.\n\nIn your answer you should:\n- compare the different attitudes expressed\n- compare the methods used to convey these attitudes\n- use evidence from both texts.',
    {
      'Grade 4-5':
        'Both writers describe visiting places where animals are kept, but their attitudes are very different. Source A is angry: the writer calls the factory farm "an engine of suffering" and describes chickens in "a single windowless shed" with "sores on their legs". Source B is admiring: Olmsted says the cattle stables were "roomy, well ventilated and drained" and the cattle were "standing knee deep in straw". Source A focuses on how the animals suffer, while Source B focuses on the buildings, the food and the size of the cattle, which he calls "the finest lot I ever saw". Source A uses emotive language and ends with the consumer\'s "Sunday roast", while Source B uses plain, precise description, like a report written by one farmer for others.',
      'Grade 6-7':
        'Patel and Olmsted both write as eyewitnesses who have walked through the buildings where animals are kept, but they look for different things. Patel looks at the animals: the chickens are "packed" into "a single windowless shed", their "beaks trimmed", and her phrase "units of production" accuses the industry of turning "sentient creatures" into objects. Olmsted, an American farmer whose account of his walking tour of England was published in 1852, looks at the farm as a working system. His praise is for "the beauty of fitness": everything is "neat, useful, well ordered", and the list of materials ("hewn stone, with slated roofs, grout floors, and iron fixtures") shows that he judges a farm by how well it is built. The animals\' comfort matters to him ("roomy, well ventilated and drained", "knee deep in straw"), but he measures their success in weight: "over 10 cwt., some of them weighing over 12 cwt." The two texts therefore present the relationship between humans and animals in opposite terms. For Patel it is a moral relationship that industry has betrayed; for Olmsted it is a practical one, in which good housing and good food produce good beef. Ironically, the things Olmsted admires (space, air and deep straw) are exactly what Patel\'s chickens lack, so Source B can be read as a picture of the standard that Source A says has been lost.',
    },
    '"Source A is more persuasive than Source B because it makes the reader think about the animals as living creatures, while Source B sees them only as livestock to be fattened."\n\nTo what extent do you agree with this view? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I mostly agree. Source A is more persuasive because it makes us picture the chickens\' suffering: they "could barely move" and "Many had sores on their legs". This makes the reader feel guilty. Source B is not trying to persuade us about animal welfare at all; Olmsted is describing a farm he admired to other farmers. He does show that the animals were well kept, with "fresh-cut vetches" to eat and straw to stand in, but he is most interested in how big they grew and what they weighed. However, Source B is effective in a different way, because its calm, exact detail makes it believable, and it shows that farm animals can be kept in good conditions.',
      'Grade 6-7':
        'I agree that Source A is the more persuasive text, but not that Source B sees the animals "only" as livestock, and the difference in purpose matters. Patel\'s article is written to change the reader\'s behaviour: the eyewitness detail ("forty thousand chickens", "The air was thick with ammonia") builds a case, and the claim that intensive farming exists for "profit" leaves the reader no comfortable position. Olmsted is not arguing a case about animals at all. He is reporting a model farm to American readers, and his interest is openly practical: the stables\' "mangers of stone and iron" and "sliding chains", the feed of "ruta baga and oil-cake", the breeds ("short-horns", "Hereford bullocks"). Within that practical frame, though, the animals\' comfort is part of what he praises: the stables are "roomy, well ventilated and drained", and the image of cattle "knee deep in straw" is the most vivid in the passage. The phrase "the beauty of fitness" sums up his values: a well-kept animal is part of a well-made farm. So Source B is less persuasive about animal welfare because it is not trying to be, but it is evidence of a different kind: it shows, without any sentiment, that good housing and good farming could go together, which quietly supports Patel\'s point that the "windowless shed" is a choice rather than a necessity.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a magazine aimed at young people arguing that we should all eat less meat.\n\nOr:\n(b) Write a letter to a food company arguing that they should improve the welfare standards of the animals in their supply chain.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '02',
    'Libraries and Access to Knowledge',
    OCR_P1_02_SOURCE_A,
    OCR_P1_02_SOURCE_A_REF,
    OCR_P1_02_SOURCE_B,
    OCR_P1_02_SOURCE_B_REF,
    'libraries',
    'Read Source A. Identify four reasons the writer gives for opposing the closure of Greenfield Library.',
    '1. The library has been the intellectual heart of the community for twenty-three years. 2. Her daughter discovered her love of reading there. 3. Elderly residents gather there for warmth and company. 4. Thirty-one percent of households lack reliable internet access, making the library a lifeline.',
    'How does the writer of Source B use language to present the Athenæum and its library as a positive and transformative place?\n\n(Source B is part of a speech Charles Dickens gave in 1843 in support of the Manchester Athenæum, an institution with a library, lectures and classes, which members joined for a weekly subscription.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Dickens uses a long list to show how much the Athenæum offers: "cheerful rooms", "pleasant and instructive lectures", an "improving library of 6,000 volumes", and classes in languages and music. The list makes the place sound full of opportunities. The word "improving" suggests the library makes its readers better people. He stresses that it is "open to every youth and man in this great town", which shows it is for everyone, not just the rich, and the cost of "one sixpence weekly" makes it sound affordable. The metaphor "every bee in this vast hive" presents Manchester as a busy hive of workers, all of whom can use the Athenæum. At the end he calls the growth in members "strides in the path of the very best civilization", which makes the institution sound important for the whole of society.',
      'Grade 6-7':
        'Dickens builds his first sentence as a periodic sentence: the main clause, "here it is", is held back behind a long catalogue of what the Athenæum offers, so that by the time it arrives the listener has been made to feel the institution\'s abundance. The catalogue moves from the intellectual ("instructive lectures", the "improving library of 6,000 volumes", "foreign languages, elocution, music") to the physical ("healthful bodily exercise") and finally to pleasure, "blameless, rational enjoyment", which Dickens singles out with an aside ("for by this I set great store"). The adjectives "blameless" and "rational" seem designed to reassure anyone who doubted that leisure could be good for young working men: this is enjoyment that improves rather than corrupts. The metaphor "every bee in this vast hive" presents the town\'s workers as industrious and collective, and the Athenæum as the place where that industry is rewarded with knowledge. The price, "one sixpence weekly", comes at the end of the sentence, making access sound almost effortless after such a list of "benefits". The final sentence widens the frame from the town to humanity: the rise in members is described as "strides in the path of the very best civilization", and the book metaphor "chapters of rich promise in the history of mankind" suits a speech about reading, suggesting that each new member adds to a story still being written.',
    },
    'Compare how the writers of Source A and Source B present their views on the importance of libraries and places of learning.\n\nIn your answer you should compare the different attitudes and methods used.',
    {
      'Grade 4-5':
        'Both writers believe that places of learning matter, especially to people without much money. Source A defends a library that is about to close, and describes it as "the intellectual heart of our community" and "a lifeline". Source B celebrates an institution that is growing: Dickens is pleased that the number of members "has considerably more than doubled". Source A focuses on practical needs, such as internet access and applying for jobs, while Source B focuses on self-improvement through lectures, classes and an "improving library". Source A is angry and uses strong words like "morally bankrupt" and "abandonment"; Source B is proud and celebratory. Both stress that access must be open to all: Source A\'s library serves families without internet, and Source B\'s Athenæum is "open to every youth and man" for a small weekly payment.',
      'Grade 6-7':
        'Okonkwo and Dickens both treat a place of learning as a measure of how a community values its poorer members, but they write at opposite moments. Okonkwo writes at the point of loss, so her language is combative: the council\'s reasoning is "factually wrong and morally bankrupt", and the closing antithesis, "To close it is not modernisation. It is abandonment.", turns a budget decision into a moral failure. Dickens speaks at a moment of growth, so his language is celebratory and expansive: one long, accumulating sentence lists everything the Athenæum offers before the delayed main clause, "here it is", presents it almost as a gift. Both writers list the people and activities a library serves. Okonkwo\'s lists are human and specific (her daughter, "elderly residents", teenagers from homes that are "overcrowded, noisy, or chaotic"); Dickens\'s are institutional (lectures, classes, "discussion and debate"), because he is praising the institution to its supporters. Both also make cost central. For Okonkwo, the library is free and necessary, a "lifeline" for the "Thirty-one percent" of households without reliable internet; for Dickens, the key point is that the subscription has been reduced to "one sixpence weekly", and he treats the resulting rise in members as "strides in the path of the very best civilization". The comparison suggests that the argument has changed little since 1843: a place of learning is only as valuable as it is open, which is why Dickens celebrates a cheaper subscription and Okonkwo protests a closure.',
    },
    '"Source A makes a stronger case than Source B because it addresses the real, practical needs of today, whereas Source B is too idealistic about the power of books."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I partly agree. Source A is very persuasive because it uses a specific statistic ("Thirty-one percent of households") and practical examples, such as applying for jobs and benefits online. This shows that closing the library would hurt real people. Source B is more idealistic: Dickens talks about "the very best civilization" and "the history of mankind", which are big, grand ideas. However, Source B is practical too. It lists what the Athenæum actually provides, and it points out that the cost has been reduced to "one sixpence weekly" and that membership has "more than doubled". Both texts are effective, but in different ways: Source A shows what people would lose, and Source B shows what people gain.',
      'Grade 6-7':
        'I disagree with the implied hierarchy. Okonkwo\'s practical arguments are undeniably urgent: the statistic that "Thirty-one percent of households in this borough lack reliable internet access" turns closure into exclusion. But her text draws much of its force from moral language ("lifeline", "morally bankrupt", "abandonment"), which is an ethical argument rather than a practical one. Dickens\'s speech is certainly idealistic in its conclusion, where a rise in membership becomes "chapters of rich promise in the history of mankind". Yet the idealism rests on concrete evidence of the kind a practical reader would want: a library of "6,000 volumes", a list of classes, a reduced subscription of "one sixpence weekly", and a membership that "has considerably more than doubled within the last twelve months". Dickens is, in effect, making Okonkwo\'s argument from the other side, that price decides who can use a place of learning: he shows what happens when access is made cheaper. The statement also overlooks Dickens\'s purpose. A speech to an institution\'s supporters is meant to inspire, and its grand language suits that audience, just as Okonkwo\'s anger suits a letter meant to shame a council. Each text is effective for its purpose; together they suggest that the strongest case for libraries needs both practical evidence and a belief in what reading can do.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a local newspaper arguing that your local library should remain open.\n\nOr:\n(b) Write a blog post aimed at young people about why reading matters in the digital age.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '03',
    'Childhood and Technology',
    OCR_P1_03_SOURCE_A,
    OCR_P1_03_SOURCE_A_REF,
    OCR_P1_03_SOURCE_B,
    OCR_P1_03_SOURCE_B_REF,
    'childhood and technology',
    'Read Source A. Identify four concerns the writer expresses about children and smartphones.',
    '1. Children spend four hours and twelve minutes per day on their phones. 2. That is more time than they spend in the classroom. 3. Smartphones offer infinite micro-stimulation designed to be addictive. 4. They operate on the same neurological principles as a slot machine.',
    'How does the writer of Source B use language to create sympathy for the children who work in the mills?\n\n(An "operative" is a factory worker. The "bourgeoisie" are the property-owning middle class: here, the factory owners.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Engels describes the children\'s lives with lists of hardship: they grow up "in want, privation, and changing conditions, in cold and damp, with insufficient clothing and unwholesome dwellings". Piling up these problems makes the reader feel how much they suffer even before they start work. The numbers of hours ("12 to 14, even 16 hours") are shocking, and the word "even" shows how extreme the hours had been. He says the work is "added to" the old problems, so things only get worse. The word "unpardonable" is very strong and shows his anger. The phrase "wear them out" makes the children sound like tools or machines being used up for "the benefit of the manufacturers".',
      'Grade 6-7':
        'Engels builds sympathy by showing the child as damaged before the factory has even begun its work. The opening sentence accumulates hardship through a list of prepositional phrases ("in want, privation, and changing conditions, in cold and damp, with insufficient clothing and unwholesome dwellings"), so that the child\'s body is presented as the product of poverty. The bracketed history of working hours ("formerly 8, earlier still, 12 to 14, even 16 hours") works as a compressed record of cruelty: each step back in time is worse, and "even" signals the writer\'s own disbelief. The short sentence "The old enfeebling influences continue, while the work is added to them" makes the harm cumulative. Engels then makes a surprising concession: "It is not to be denied" that a nine-year-old can survive six and a half hours a day with no visible damage. This apparent fairness strengthens the attack that follows in the same sentence, where the language shifts from the medical to the moral. "Unpardonable" is the vocabulary of sin, and "sacrifice" suggests children offered up to an idol, "the greed of an unfeeling bourgeoisie". The contrast between what childhood time "should be devoted solely to" (physical and mental development, "school and the fresh air") and what it is used for ("to wear them out") makes the reader see the children as consumed, like fuel, "for the benefit of the manufacturers".',
    },
    'Compare how the writers of Source A and Source B present their concerns about the loss of childhood.\n\nCompare the attitudes expressed and the methods used to convey them.',
    {
      'Grade 4-5':
        'Both writers are worried that children are losing their childhood, but for very different reasons. Source A blames smartphones, while Source B blames factory work. Source A uses a modern statistic ("four hours and twelve minutes per day") and Source B gives the hours children worked in the mills ("twelve hours until the eighteenth year"). Both writers say what children should be doing instead: Source A mentions "climbing trees, reading comics", and Source B says children\'s time should be spent on "physical and mental development", in "school and the fresh air". Source A compares phones to "a slot machine" to show they are addictive, while Source B blames "the greed of an unfeeling bourgeoisie". Source A\'s tone is worried and frustrated; Source B\'s tone is angry and accusing.',
      'Grade 6-7':
        'Hargreaves and Engels share a fundamental concern, that the dominant economic force of their time is taking something children are owed, but they differ in where they place the blame and how they argue. Hargreaves writes as a columnist: his opening metaphor "The smartphone has colonised childhood" frames technology as an occupying power, and his closing rhetorical question compares a phone to "a slot machine" to provoke the reader. Engels writes as an analyst building a case: he gives ages, hours and a history of the working day, and even concedes that a child "can hold out through 6.5 hours\' daily work" without visible harm before turning to the charge. Both writers define childhood by what it should contain. Hargreaves lists "climbing trees, reading comics, even watching television"; Engels says children\'s time "should be devoted solely to their physical and mental development", in "school and the fresh air". The crucial difference is agency. Engels names a class of people responsible, "an unfeeling bourgeoisie", and a motive, "greed"; Hargreaves blames "some of the most brilliant engineers on earth" who design phones to be "as addictive as possible", but his children are consumers rather than workers, and the loss he describes is of attention rather than of health. Read together, the texts suggest that the argument about childhood has moved from the body to the mind.',
    },
    '"Both writers exaggerate the threat to childhood in order to make their arguments more persuasive."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I partly agree. Source A might exaggerate when it compares phones to a slot machine, because phones have many uses that are not addictive. Source B, however, is careful not to exaggerate. Engels admits that a child can work 6.5 hours a day "without any one being able to trace visible bad results", which shows he is being fair. His strongest words, such as "unpardonable", come after this admission, so they feel earned. Source A\'s statistics are facts rather than exaggeration, and Source B\'s details about hours and conditions are specific. Overall, I think Source A exaggerates a little for effect, but Source B mostly argues from evidence.',
      'Grade 6-7':
        'The statement fits Source A better than Source B. Hargreaves\'s comparison of a smartphone to "a slot machine" is deliberately simplified, although he signals awareness of the charge with his concession "I am not nostalgic for some imagined golden age of childhood", which makes the exaggeration feel knowing rather than careless. Engels\'s passage is more interesting, because it contains a concession that works against exaggeration: "It is not to be denied that a child of nine years, even an operative\'s child, can hold out through 6.5 hours\' daily work, without any one being able to trace visible bad results". A writer determined to exaggerate would not admit this. Instead Engels moves the argument to ground where exaggeration is not needed: even if the work does no visible harm, the "damp, heavy air of the factory" cannot "contribute to good health", and taking children from "school and the fresh air" is wrong in itself. Where Engels\'s language does intensify, in "unpardonable", "sacrifice" and "the greed of an unfeeling bourgeoisie", it is political rather than factual: it assigns blame rather than inflating the harm. A reader may think that charge one-sided, since the passage gives the manufacturers no voice, but that is partisanship, not exaggeration. Both texts use emotive language, but only Source A\'s central image overstates its case.',
    },
    "Choose ONE of the following:\n\nEither:\n(a) Write a speech to be delivered at a school assembly arguing that phones should be banned for under-16s.\n\nOr:\n(b) Write a letter to parents advising them on how to manage their children's screen time.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)",
  ),

  buildOcrP1(
    '04',
    'Green Spaces and Public Health',
    OCR_P1_04_SOURCE_A,
    OCR_P1_04_SOURCE_A_REF,
    OCR_P1_04_SOURCE_B,
    OCR_P1_04_SOURCE_B_REF,
    'green spaces',
    'Read Source A. Identify four negative consequences the writer associates with the loss of green spaces.',
    '1. Increased burden on mental health services. 2. Rising rates of childhood obesity. 3. A higher risk of depression and heart disease for people who do not live near a park (the study found a lower risk for those who do). 4. Loss of something unmeasurable: the human need to stand beneath a tree and breathe.',
    'How does the writer of Source B use language to present the public park as a place of value and importance?\n\n(Olmsted was an American farmer writing for readers in the United States. "The Tombs" was a prison in New York; "verdant" means green with grass and plants.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Olmsted uses a list of improvements ("large valleys were made verdant, extensive drives arranged", "avenues of trees") to show how much work went into the park. The three-part phrase "entirely, unreservedly, and for ever" stresses that the park is "the people\'s own", completely and permanently. The comparison between "The poorest British peasant" and "the British queen" is powerful because it puts the poorest and the richest person on the same level. Writing "OWNER" in capital letters shows how proud the ordinary baker is. The rhetorical question "Is it not a grand good thing?" invites the reader to agree. The final paragraph gives exact figures for the cost and the jobs, which shows the park is a real, practical achievement.',
      'Grade 6-7':
        'Olmsted presents the park as a democratic institution, with an American visitor\'s delight in an English surprise. The opening, "But this is but a small part", treats what he has already described as only the beginning, and the list that follows ("valleys were made verdant", "plantations, clumps, and avenues of trees formed") uses passive verbs that make the transformation sound grand and complete. The key sentence turns on three adverbs, "entirely, unreservedly, and for ever the people\'s own", each one closing a possible exception: the park is not partly theirs, not theirs on conditions, not theirs for now. The antithesis of "The poorest British peasant" and "the British queen" makes equality concrete, and the capitalised "OWNER" turns a local tradesman, "the baker of Birkenhead", into a symbol of civic pride. The rhetorical question "Is it not a grand good thing?" is conversational, as if Olmsted were talking to a neighbour, and his answer to the question of cost is gently comic: the townspeople pay for their park just as New Yorkers pay for "the Tombs", a prison, and for "the cleaning (as they amusingly say) of their streets". The joke makes the point that public money is always spent on something, and a park is a better thing to spend it on. The final paragraph\'s figures ("between five and six hundred thousand dollars", "ten gardeners and labourers in summer") give the enthusiasm a practical base, and the detail that the building plots around the park "now sell at $1.25 a square yard" suggests that the town has gained from its generosity.',
    },
    'Compare how the writers of Source A and Source B use language to argue for the value of green spaces.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'Both writers strongly support public green spaces but use different approaches. Source A uses modern scientific evidence, a study showing "a 20% lower risk of depression", while Source B describes a new park with enthusiasm. Source A is worried and critical, complaining that councils "continue to sell off green spaces"; Source B is celebratory, calling the park "a grand good thing". Both writers say parks matter most for poorer people: Source A mentions "deprived areas", and Source B says "The poorest British peasant" can enjoy the park as freely as the queen. Both also discuss money. Source A says the councils\' "accounting ignores the hidden costs" of losing parks, and Source B explains who paid for the park and how much it cost. Source A focuses on what we are losing, while Source B focuses on what a town gained.',
      'Grade 6-7':
        'Sharma and Olmsted reach the same conclusion from opposite directions. Sharma writes as a policy advocate facing loss: the study she cites, the "1,200 hectares" sold since 2010 and her attack on accounting that ignores "hidden costs" are the language of evidence-based argument. Olmsted writes as a visitor who has just discovered something he admires: his vocabulary is enthusiastic ("magnificent pleasure-ground", "a grand good thing") and his main evidence is the principle of ownership. Both make the political argument that green space matters most to the poor. Sharma\'s "deprived areas, where private gardens are rare" correspond to Olmsted\'s "poorest British peasant", but Sharma presents access as a matter of health, while Olmsted presents it as a matter of equality and pride ("the pride of an OWNER"). Both also address cost, and here they are strikingly close. Sharma accuses councils of treating parks as land to be sold for "revenue"; Olmsted describes a town that did the reverse, buying a farm, making most of it a park and selling the edges as "private building lots". The texts are most powerful read together: Olmsted shows what the public park was created to be, "for ever the people\'s own", and Sharma shows that "for ever" has not lasted.',
    },
    '"Source A is more relevant than Source B because it uses modern evidence to support its argument, while Source B is simply nostalgic."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I partly agree that Source A feels more relevant, because it uses current statistics and discusses modern problems such as childhood obesity. However, calling Source B "simply nostalgic" is unfair. Olmsted was describing a park that was new when he saw it, and he was excited about it, not looking back. His point that the park is "for ever the people\'s own" is still relevant today, when parks are being sold. Source A is strengthened by its evidence, but Source B is effective because it makes the reader feel the pride ordinary people took in their park.',
      'Grade 6-7':
        'The accusation of nostalgia misreads Source B. Olmsted is not looking backward but reporting an innovation: the park he describes was newly made, and his rhetorical question "Is it not a grand good thing?" is the language of discovery, not regret. He even writes with a practical eye, explaining that the town paid for it and giving the cost ("between five and six hundred thousand dollars") and the number of gardeners it employs. Source A\'s evidence is certainly more modern and more scientific, and its figures for depression and heart disease give it the kind of authority modern policy-making expects. But Sharma\'s text also relies on emotional appeal: its final image, "the human need to stand beneath a tree and breathe", is not statistical at all. In fact, Source B arguably becomes more relevant because of Source A. Olmsted\'s claim that the park is "entirely, unreservedly, and for ever the people\'s own" is exactly the promise that Sharma says councils are now breaking when they sell parkland. Source A is the more urgent text, but Source B supplies the principle that makes the urgency matter.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for your school magazine arguing that more green spaces should be created in urban areas.\n\nOr:\n(b) Write a letter to your local council opposing a plan to build on a green space in your area.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '05',
    'The High Street and Community',
    OCR_P1_05_SOURCE_A,
    OCR_P1_05_SOURCE_A_REF,
    OCR_P1_05_SOURCE_B,
    OCR_P1_05_SOURCE_B_REF,
    'the high street',
    'Read Source A. Identify four reasons the writer gives for the decline of the high street.',
    '1. Over 17,000 shops closed permanently last year. 2. Business rates punish physical premises while online giants pay negligible tax. 3. Out-of-town retail parks siphon footfall. 4. Consumers choose convenience over community through online shopping.',
    'How does the writer of Source B use language to present the decline of the market town?\n\n(Cobbett calls large, growing towns such as London "wens": a wen is a swelling or growth on the skin. Hambledon is a village in Hampshire.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Cobbett contrasts the past and the present to show the decline: Hambledon "was formerly a considerable market-town" with "three fairs in the year", but "A village it now is". The fairs have shrunk to "a couple or three gingerbread-stalls, with dolls and whistles for children", which makes them sound small and trivial. He describes the church as "a tumble-down rubbishy place", which shows the whole town is falling apart. The verb "devoured" is used twice ("shops have devoured markets and fairs"), which makes shops sound like greedy animals eating up the old way of life. His rhetorical question "What are the shop and the shop-keeper for?" makes the reader think about whether shops are really needed.',
      'Grade 6-7':
        'Cobbett presents Hambledon\'s decline through a sustained contrast of then and now, compressed into the inverted sentence "A village it now is". The inversion puts the reduced status first, like a verdict. The detail of the fairs, shrunk to "a couple or three gingerbread-stalls, with dolls and whistles for children", is quietly devastating: occasions that once served "persons who had things to buy and things to sell" have become toys. The church, which "tells the same story", is personified as a witness, and the colloquial "tumble-down rubbishy" shows Cobbett\'s plain, spoken style. The central sentence is built on parallel clauses with the same verb: "Wens have devoured market-towns and villages; and shops have devoured markets and fairs". "Devoured" makes both the great towns and the shops predators, and the balanced structure presents the two processes as one. Cobbett then moves from description to argument. The blunt generalisation "Shop-keeping, merely as shop-keeping, is injurious to any community" is followed by a question he answers himself ("To receive and distribute the produce of the land") and by short, repeated clauses ("The shop must be paid for; the shop-keeper must be kept") whose repetition makes the cost of the middleman feel like a weight the customer must carry.',
    },
    'Compare how the writers of Source A and Source B present their views on the decline of the places where people buy and sell.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'Both writers describe the decline of a place where people used to shop and meet. Source A says the high street is "dying", with "boarded-up windows"; Source B says Hambledon has shrunk from a market town to "A village". Surprisingly, they blame opposite things. Source A blames online shopping and wants to save shops, calling them "the places where neighbours meet". Source B blames shops themselves, saying "shops have devoured markets and fairs". Both writers are unhappy about what is being lost. Source A uses statistics ("over 17,000 shops") and blames the reader ("we are all complicit"); Source B uses what he saw on his journey and asks a rhetorical question about what shops are "for". Both believe that the way we buy things affects the whole community.',
      'Grade 6-7':
        'Thornton and Cobbett both write about a declining place of trade, and the irony of reading them together is that the villain of one is the victim of the other. Cobbett, riding through Hampshire in 1826, sees shops destroying the market town: "shops have devoured markets and fairs". Thornton, two centuries later, sees online shopping destroying the shops, which she now defends as "the places where neighbours meet, where news is exchanged, where a town discovers its identity". Both writers treat buying and selling as social as well as economic: Cobbett\'s market was "a sort of rendezvous for persons who had things to buy and things to sell", and his objection to shops is that they add a cost between "the consumer" and "the producer". Their methods differ with their situations. Thornton writes for a national readership and uses statistics ("over 17,000 shops") and a collective accusation ("we are all complicit"), ending with an antithesis in which convenience defeats community. Cobbett writes as a traveller: his evidence is what he sees in one place (the "gingerbread-stalls", the "tumble-down" church), and his argument moves from that scene to a sweeping general claim, "Shop-keeping, merely as shop-keeping, is injurious to any community". Both use a vivid word for destruction, Thornton\'s "dying" and Cobbett\'s "devoured". The difference is where they place responsibility: Cobbett presents the change as an injury to "the most numerous classes of the people", while Thornton, more uncomfortably, makes the ordinary shopper part of the cause.',
    },
    '"Both writers want to turn back the clock, and neither is realistic about why the places they describe have changed."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I partly agree. Both writers are sad about what has been lost and seem to want things to go back to how they were. Cobbett wants the old markets and fairs back, and Source A wants people to use high-street shops instead of ordering online. However, Source A is quite realistic about the causes: it lists "Business rates", "out-of-town retail parks" and planning policies, not just online shopping. Cobbett is less realistic. He blames shops for everything and says "Shop-keeping, merely as shop-keeping, is injurious to any community", which is a very sweeping claim. But his description of Hambledon, with its "tumble-down rubbishy" church, is effective because it shows the decline clearly.',
      'Grade 6-7':
        'The statement is fairer to Cobbett than to Thornton. Thornton does not simply want to turn back the clock: she accepts that "Online shopping did not kill the high street single-handedly" and names structural causes ("Business rates", "out-of-town retail parks" and planning policy) before arriving at her real target, a "collective choice" that she believes readers can still change. Her conclusion is a call to act in the present, not a lament for the past. Cobbett is more openly backward-looking: the market and the fair are, for him, the natural way to trade, and his claim that "Shop-keeping, merely as shop-keeping, is injurious to any community" ignores the reasons people might prefer a shop, which is open every day, not only on market days and at "three fairs in the year". Yet his argument is not simply nostalgic either. His economic point, that the shop and the shop-keeper must be paid for "by the consumer of the produce", is a real argument about middlemen, and it anticipates the case made today for buying directly from producers. The effectiveness of each text depends on this balance. Thornton persuades by making the reader feel responsible; Cobbett persuades by making the reader see a place in decay, although his sweeping conclusions weaken his authority. Neither is wholly unrealistic, but Cobbett\'s certainty is harder to trust than Thornton\'s self-accusation.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write a speech to your local community arguing that people should shop locally instead of online.\n\nOr:\n(b) Write an article for a national newspaper about what is being lost as high streets decline.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '06',
    'Hospitals, Health and Who Pays',
    OCR_P1_06_SOURCE_A,
    OCR_P1_06_SOURCE_A_REF,
    OCR_P1_06_SOURCE_B,
    OCR_P1_06_SOURCE_B_REF,
    'healthcare',
    'Read Source A. Identify four problems with the NHS that the writer describes.',
    '1. Average waiting times for elective treatment have reached 14.7 months. 2. Over 7.6 million people are on waiting lists. 3. Ambulance response times for emergencies have more than doubled since 2019. 4. We spend less per capita on healthcare than France, Germany, or the Netherlands.',
    'How does the writer of Source B use language to persuade his listeners to support the Hospital for Sick Children?\n\n(Source B is from a speech Charles Dickens made in 1858 at a dinner held to raise money for the Hospital for Sick Children in London. The hospital had opened in 1852 and was a charity: it depended on gifts of money. "Assuaged" means eased; "perforce" means necessarily; "endowed" means given enough money to keep it going; "pathetic" here means moving, arousing pity.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Dickens uses the authority of doctors to show that the hospital is needed: "the highest and wisest members of the medical profession testify to the great need of it". He then shows what the money will achieve, in a balanced phrase about "the vast amount of pain that will be assuaged, and of life that will be saved", which makes giving money sound like saving lives. He reminds his wealthy listeners that the hospital will help "not only among the poor, observe, but among the prosperous too", so their own children could benefit. He sounds honest when he says "I must present no rose-coloured picture" and "I must not deceive you", which makes the audience trust him. The hospital has "very little over thirty" beds, and the words "so forlornly, so miserably diminutive, compared with this vast London" make it sound pitifully small for such a huge city. At the end he describes children "racked with preventible pain", and his final rhetorical question, "how can I possibly hope to move you in their name?", makes the audience feel that refusing to help would be heartless.',
      'Grade 6-7':
        'Dickens persuades by combining evidence, flattery and pressure on his listeners\' consciences. He begins with other people\'s authority rather than his own: "the highest and wisest members of the medical profession testify to the great need of it". The parallel phrases "the vast amount of pain that will be assuaged, and of life that will be saved" turn a donation into a rescue, and the aside "not only among the poor, observe, but among the prosperous too" gives the prosperous diners a reason of their own to give, since the hospital will increase knowledge of "children\'s illnesses" for every family. The speech then performs honesty. The bracketed interruption, "for I must present no rose-coloured picture of this place to you", followed by "I must not deceive you", delays the bad news, so that when it arrives, "very little over thirty" beds, it lands with more force, and the repeated "so" in "so forlornly, so miserably diminutive" makes the hospital itself seem pitiful beside "this vast London". The sentence ends tactfully: he will say only that the hospital must be "better known", because he "will not believe" that "a Christian community of fathers and mothers, and brothers and sisters" could fail to support it. This is flattery with an edge, since a listener who does not give is no longer part of that community. In the last paragraph Dickens claims to speak "without a word of adornment", although his sentences are carefully built, and the harshest words are kept for the children: "racked with preventible pain, shorn of their natural capacity for health and enjoyment". "Racked" suggests torture, and "preventible" makes the suffering a matter of choice. The closing rhetorical question leaves the audience nothing to answer: if the children "cannot move you for themselves", no speaker can.',
    },
    'Compare how the writers of Source A and Source B present the need for hospital care and who should pay for it.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'Both writers argue that there is not enough hospital care for the people who need it. Source A uses statistics, such as "Over 7.6 million people are on waiting lists", while Source B points out that a hospital for the children of the whole of London has only "very little over thirty" beds. Both writers show the people behind the numbers: Source A describes "the grandmother waiting eighteen months for a hip replacement", and Source B describes "thousands of children who live half developed, racked with preventible pain". They differ about who should pay. Source A compares what Britain spends with "France, Germany, or the Netherlands" and says the funding model needs "fundamental reform", so it treats healthcare as something the nation pays for. Source B asks the wealthy people at the dinner to give money, hoping the hospital will be "well and richly endowed". Source A\'s tone is frustrated and critical, while Source B\'s is emotional and pleading.',
      'Grade 6-7':
        'Morton and Dickens both measure need against capacity, but they stand on opposite sides of a great change in who pays for care. Dickens\'s hospital was a charity: it "cannot possibly be maintained, unless the Hospital be made better known", and his speech asks rich individuals to make it "well and richly endowed". Morton writes about a service paid for by the nation, and his complaint is that it is expected to survive "on goodwill and underpaid staff". Read together, this is ironic, because goodwill was all that Dickens\'s hospital had. Both writers turn numbers into people. Morton\'s statistics ("14.7 months", "Over 7.6 million people") are followed by "real people", the grandmother and "the child with suspected autism"; Dickens sets one figure, "very little over thirty" beds, against "this vast London" and then against "the thousands of children who annually die in this great city". Both claim to be telling the plain truth, Morton with "This is not hyperbole" and Dickens with "I must not deceive you" and "without a word of adornment", and in each case the claim prepares the reader for bad news. Their methods follow from their audiences. Morton writes for newspaper readers, so he compares Britain with "France, Germany, or the Netherlands" and is ironic about "the peculiar British conviction" that the service can be kept going on goodwill for ever. Dickens speaks to diners who can give that evening, so he flatters them as "a Christian community of fathers and mothers", appeals to their self-interest ("among the prosperous too") and ends with a question they cannot comfortably answer. Morton argues about a whole system; Dickens has to move the people in front of him.',
    },
    '"Source B is more powerful than Source A because it speaks with genuine passion, while Source A merely presents statistics."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I partly agree that Source B is powerful. Dickens\'s description of children "racked with preventible pain" is upsetting, and his final question, "how can I possibly hope to move you in their name?", makes the audience feel responsible. However, Source B is not only passion: it also gives facts, such as the hospital having "very little over thirty" beds, and it reports the opinion of doctors. It is also unfair to say that Source A "merely presents statistics". Morton describes real people, such as the grandmother "who can no longer climb the stairs", and his frustration shows in the phrase "the peculiar British conviction". Both texts mix feelings and facts, so both are powerful in different ways.',
      'Grade 6-7':
        'The statement sets up a false choice, because each text uses both passion and evidence, and each uses them for its own purpose. Dickens\'s passion is carefully managed: he tells his audience that he speaks "without a word of adornment" in a speech full of carefully built sentences, and his harshest language ("racked with preventible pain, shorn of their natural capacity for health and enjoyment") is saved for his final appeal. His case also rests on evidence: the testimony of "the highest and wisest members of the medical profession", the practical point about "the immense difficulty of treating children in the same hospitals with grown-up people", and the figure of "very little over thirty" beds. Morton\'s article, meanwhile, does not "merely" present statistics. It gives them a human face ("the grandmother waiting eighteen months for a hip replacement") and ends with an ironic attack on "the peculiar British conviction" that the NHS can run "on goodwill and underpaid staff". The real difference is the job each text has to do. Dickens needs his listeners to give that evening, so he makes them feel the children\'s suffering and their own responsibility; Morton needs readers to rethink how a national service is paid for, so he builds a case from figures and comparisons. Source B is the more moving text, but Source A is the one that argues about a whole system, and for that purpose its statistics are a strength rather than a weakness.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a news website arguing for how the NHS should be reformed.\n\nOr:\n(b) Write a letter to your MP expressing your views on the current state of healthcare in Britain.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '07',
    'Immigration and National Identity',
    OCR_P1_07_SOURCE_A,
    OCR_P1_07_SOURCE_A_REF,
    OCR_P1_07_SOURCE_B,
    OCR_P1_07_SOURCE_B_REF,
    'immigration',
    'Read Source A. Identify four things the writer says about the positive effects of immigration on Britain.',
    '1. Immigration has transformed Britain "largely for the better". 2. Mr Hussain\'s corner shop stays open until midnight. 3. A Polish plumber arrived within two hours on a Sunday. 4. Filipino nurses held his mother\'s hand through her final night when the ward was understaffed. (Also acceptable: these are the lived reality of a multicultural society that works.)',
    'How does the writer of Source B use language to present the growing number of Irish street-sellers in London and the way English street-sellers reacted to them?\n\n(A "costermonger" is a street-seller of fruit, vegetables or fish; "the metropolis" is London. Mayhew was writing around 1850, a few years after the start of the Great Famine in Ireland.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Mayhew uses precise words to show that the number of Irish sellers has grown quickly: it "has increased greatly" and has "been doubled in number" in five years. He shows how poor the Irish are with the phrase "a scanty maintenance, or what is rather a substitute for a maintenance", which suggests they barely earn enough to live on. He reports the English sellers\' feelings strongly: a costermonger "hates an Irishman, considering him an intruder". The comparison "next to a policeman" is humorous, because it suggests the costermongers disliked only the police more. Mayhew is careful and fair. He says "I cannot ascertain" where the dislike came from, and "I am inclined to believe that the prejudice is modern". Calling it "prejudice" shows he does not share it.',
      'Grade 6-7':
        'Mayhew writes as a social investigator, and his language balances report and judgement. The first paragraph is built on cautious, second-hand evidence: "One gentleman, who had every means of being well-informed, considered that it was not too much to conclude" is hedged several times, so that the striking claim at the end, that the number had "been doubled in number" in five years, arrives with authority. The self-correction "a scanty maintenance, or what is rather a substitute for a maintenance" conveys poverty precisely: these people do not even earn a living, only something in its place, by "trading, or begging", or both at once. The second paragraph shifts to hostility, stated with unusual bluntness: "a genuine London costermonger hates an Irishman, considering him an intruder". The comic comparison "next to a policeman" lightens the tone while showing how deep the dislike runs. Mayhew then examines the feeling as an investigator would. He sets aside an easy explanation ("traditional or hereditary ill-feeling") because he "cannot ascertain" it, and offers his own: the prejudice is "modern" and caused by "the great influx" of newcomers into the costermongers\' trade. The word "prejudice" is itself a judgement. He ends by undermining the idea of the Irish as intruders at all, quoting Charles Knight to show that an Irish costermonger "is no novelty in the streets of London".',
    },
    'Compare how the writers of Source A and Source B present their views on immigration and its effects.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'Both writers try to be fair about immigration. Source A is mainly positive, giving personal examples of immigrants who have helped the writer, such as "The Filipino nurses who held my mother\'s hand". Source B is more like a report: Mayhew describes the growing number of Irish street-sellers and the English sellers\' dislike of them. Both writers admit that newcomers can cause tension. Source A says it would be "dishonest to pretend that rapid demographic change creates no tensions", and Source B says English costermongers saw the Irishman as "an intruder". Both writers explain the tension rather than blaming the immigrants: Source A blames governments for not building enough "houses, schools, and hospitals", and Source B says the dislike comes from "the great influx" into the same trade. Source A\'s tone is warm and personal; Source B\'s is careful and investigative.',
      'Grade 6-7':
        'O\'Brien and Mayhew both treat hostility to newcomers as something to be explained rather than simply condemned or excused, but they begin from different places. O\'Brien writes as a participant: his three anecdotes (the corner shop, the plumber, the nurses) are personal and grateful, and his second paragraph concedes, with a carefully built double negative, that it would be "dishonest to pretend that rapid demographic change creates no tensions". Mayhew writes as an outside observer of other people\'s feelings: he reports that a costermonger "hates an Irishman, considering him an intruder", without adopting that view. Both then locate the cause of tension in circumstances. O\'Brien blames "a failure of successive governments to build the houses, schools, and hospitals that a growing population requires"; Mayhew suggests that the prejudice "is modern" and arises from competition, "the great influx" of Irish sellers into "the costermonger\'s business". They also use evidence differently. O\'Brien\'s is anecdotal and emotional; Mayhew\'s is gathered and weighed ("One gentleman, who had every means of being well-informed"). The most striking difference is in how the immigrants appear. O\'Brien\'s are givers, people who help; Mayhew\'s are poor people earning "a scanty maintenance", seen mostly through others\' eyes. Taken together, the texts show that arguments about immigration have long turned on the same question: whether the newcomer is competing for something scarce.',
    },
    '"Both writers avoid the difficult truths about immigration by trying too hard to seem balanced."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I disagree. Both writers are honest about the problems. Source A admits that immigration puts "pressure on services", and Source B reports openly that English street-sellers hated the Irish. Mayhew does not hide this; he says it plainly, then tries to find out why. Being balanced does not mean avoiding the truth. Source A\'s balance makes the reader trust the writer more, and Source B\'s careful investigation makes its explanation, that the prejudice is "modern", more believable.',
      'Grade 6-7':
        'The statement assumes that balance is a way of hiding, but in both texts it is a way of explaining. O\'Brien\'s admission that it would be dishonest to pretend "rapid demographic change creates no tensions" is the strongest moment in his argument, because it forces him to name a cause: not immigration but "a failure of successive governments". That is a difficult truth for governments rather than for immigrants, but it is not an evasion. Mayhew\'s balance is that of an investigator, and he does not avoid the most uncomfortable fact in his material, the costermongers\' hatred, which he states in its bluntest form: a costermonger "hates an Irishman, considering him an intruder". What he refuses to do is accept the costermongers\' feeling as its own explanation. He tests one account ("Whether there be any traditional or hereditary ill-feeling ... I cannot ascertain"), offers his own, and calls the feeling by its name, "prejudice". If either text can be criticised, it is for what it leaves out. O\'Brien\'s anecdotes are all of immigrants who serve him, and Mayhew\'s Irish sellers do not speak for themselves in this passage. But neither writer is avoiding difficult truths; both are trying to find where the difficulty really lies.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a broadsheet newspaper presenting your views on immigration and what it means for Britain today.\n\nOr:\n(b) Write the text of a speech for a school debate on the motion: "Immigration has been good for Britain."\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '08',
    'Gender Equality and the Pay Gap',
    OCR_P1_08_SOURCE_A,
    OCR_P1_08_SOURCE_A_REF,
    OCR_P1_08_SOURCE_B,
    OCR_P1_08_SOURCE_B_REF,
    'gender equality',
    'Read Source A. Identify four facts or statistics the writer presents about the gender pay gap.',
    '1. Women earn on average 14.3% less than men. 2. For women over fifty, the gap widens to 20%. 3. The figures are published annually by the Office for National Statistics. 4. The gap has barely shifted in a decade.',
    'How does the writer of Source B use language to show how the wages of factory girls are driven down?\n\n(In "the slack time" factories had little work and laid workers off. "Seven and six" means seven shillings and sixpence a week.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Black describes the girls looking for work as "pale and pinched under their shabby feathered hats", which makes them seem poor, hungry and pitiful. The simile comparing the factory entrance to "the pit door of a popular theatre" shows how many girls are desperate for work. She includes a girl\'s own words, "I knew it was no good to say, \'Eight\'", which lets us hear how the girls are forced to accept less. The phrase "weeded out" compares the girls to weeds, which shows how little the employers value them. Each season the wage "descends by another sixpence or another shilling", so the pay keeps going down. The final sentence is shocking: a "wealthy employer" admits the girls "could not live on that sum", and he says it "without any signs of compunction", which means without any guilt.',
      'Grade 6-7':
        'Black shows the fall in wages as a process, and her language makes it feel both mechanical and cruel. She calls it "the cheapening process", a phrase from trade applied to human labour, and sets it at "the factory gate". The girls are introduced as a crowd, "scores of factory girls", then in close-up, "pale and pinched under their shabby feathered hats": the alliteration of "pale and pinched" stresses hunger, and the "shabby feathered hats" show an attempt at respectability that poverty has worn down. The simile of "the pit door of a popular theatre" is ironic, since the crowd is queuing not for pleasure but for work. At the centre of the passage is reported speech in a girl\'s own grammar ("So when he come to me"), which gives the reader direct testimony: having just heard another girl turned away for asking "Eight shillings", she asks for less herself, "Seven and six". Black then generalises in the present tense ("now becomes the usual wage"), and the verb "descends" makes the fall sound steady and inevitable. The metaphor "weeded out" reveals that the better-paid girls are treated as a nuisance to be removed. The last sentence turns from the system to one man: the "wealthy employer" admits that the girls "could not live on that sum", and the phrase "without any signs of compunction" makes his calm the most damning detail in the passage.',
    },
    "Compare how the writers of Source A and Source B present the issue of women's low pay.\n\nCompare the attitudes and methods used.",
    {
      'Grade 4-5':
        'Both writers are angry that women are paid too little, but they write in different ways. Source A uses modern statistics ("14.3% less than men") to show the pay gap, while Source B tells the story of factory girls whose wages fall each season. Source A asks a series of questions beginning with "why", while Source B includes the girls\' own words, such as "Seven and six". Source A says the pay gap is "the symptom" of deeper problems in how society values women\'s work; Source B shows the cause as competition for jobs, which lets employers keep lowering wages. Both writers show that the problem is not the women\'s fault: Source A questions why women\'s jobs are "valued less", and Source B shows girls forced to accept less because others will.',
      'Grade 6-7':
        'Aldridge and Black both argue that women\'s low pay is not a natural result of what their work is worth, but they explain it in different ways. Aldridge works through statistics and questions: the figures ("14.3% less than men", "20%" for women over fifty) establish the fact, and the run of questions beginning "why" challenges the reader to look beneath explanations she calls "individually, insufficient". Her conclusion is cultural: the pay gap is "not the problem. It is the symptom" of how society values women. Black works through narrative and testimony. She describes the queue at "the factory gate", lets a girl describe the bargaining in her own words, and follows the wage as it "descends by another sixpence or another shilling" each season. Her explanation is economic: where too many girls compete for too few places, employers can drive wages below what anyone can live on. Both writers, though, reach a moral charge. Aldridge asks "Why is assertiveness rewarded in men and penalised in women?"; Black ends with an employer who admits "without any signs of compunction" that his workers "could not live on that sum". Black\'s passage is about girls in low-paid factory work, not a comparison with men\'s pay, so it shows a different side of the issue: not a gap between men and women, but girls\' work paid too little to live on. That is close to Aldridge\'s question of why "professions dominated by women" are "valued less".',
    },
    '"Source A makes a stronger argument because it uses data and logic, while Source B is merely an anecdote."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I disagree that Source B is "merely" an anecdote. Black says that "Often" she has heard girls describe the scene, so it is a pattern, not a single story. The girl\'s own words and the falling wages show how low pay happens in real life. Source A\'s statistics are important because they show the problem is widespread and has "barely shifted in a decade". But Source B\'s final detail, the employer who admits the girls "could not live on that sum", is more shocking than any statistic. The best argument uses both data and real experiences.',
      'Grade 6-7':
        'The distinction between "data and logic" and "anecdote" is too neat for either text. Aldridge\'s article does use data, but its most persuasive moves are rhetorical: the anaphoric "why?" questions and the medical metaphor of the "symptom" are not proofs. Black\'s passage, meanwhile, is not "merely" an anecdote. It generalises from repeated experience ("Often have I heard girls describe the dialogue that follows"), it describes a process that recurs season after season, and it contains its own figures, the wage falling from eight shillings to "Seven shillings and sixpence" and then "by another sixpence or another shilling". It also contains logic: Black explains that the girls "who have been receiving eight shillings" are the first to be "weeded out", so that competition itself drives the wage down. What the story adds that data cannot is the reader\'s sense of how it feels, from the "pale and pinched" faces to the girl who knew "it was no good to say, \'Eight\'". The two texts are strongest in combination. Aldridge shows that the problem is measurable and persistent; Black shows the mechanism by which it happens and the human cost. If Source A is the stronger argument for a modern reader, it is because its evidence is national, not because Source B lacks logic.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write a blog post aimed at young people about why gender equality matters in the workplace.\n\nOr:\n(b) Write a letter to an employer arguing that they should review their pay practices to ensure equality.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '09',
    'Waste, Recycling and Consumption',
    OCR_P1_09_SOURCE_A,
    OCR_P1_09_SOURCE_A_REF,
    OCR_P1_09_SOURCE_B,
    OCR_P1_09_SOURCE_B_REF,
    'waste and recycling',
    'Read Source A. Identify four problems with the current recycling system that the writer describes.',
    '1. Less than half of Britain\'s 222 million tonnes of waste is recycled. 2. Much recycled material is shipped to developing countries where it is burned or dumped. 3. Material classified as "contaminated" is sent to landfill anyway. 4. The recycling logo is described as "a prayer" rather than a promise - it offers false reassurance.',
    'How does the writer of Source B use language to show that the rubbish found in London\'s dust-heaps was put to use?\n\n(In Victorian London "dust" was mainly ash and cinders from coal fires, collected from houses and sifted in dust-yards. "Japanned" means coated with a hard black varnish; Prussian blue is a dye; marine-store shops bought rags, bones and scrap.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Mayhew lists the things found in the dust: "oyster shells, old bricks, old boots and shoes, old tin kettles, old rags and bones". The repetition of "old" makes them sound worthless, but the rest of the passage shows that every one of them has a use. He explains each use in turn: bricks go "beneath foundations" and into "new roads", tin becomes fastenings for trunks, and old shoes become "stuffing" or are sold to make Prussian blue. The calm, factual tone makes this recycling sound normal and organised. The phrase "of course" at the end suggests that selling rags and bones was so ordinary that everyone knew about it.',
      'Grade 6-7':
        'Mayhew\'s language is that of a survey rather than a celebration, and that is what makes it persuasive. The first sentence defines the items by what they are not, "useless for either manure or brick-making", and then lists them with a repeated adjective, "old bricks, old boots and shoes, old tin kettles, old rags and bones", as if they were plainly rubbish. The short sentence that follows, "These are used for various purposes.", overturns that impression, and the second paragraph proves it item by item. Its sentences follow the same pattern of object and destination ("The old tin goes to", "The old shoes are sold to"), so that the passage enacts the sorting it describes. The verbs of trade ("sold", "re-manufacture", "disposed of") present the dust-heap as a market rather than a tip. Some uses are surprising: old shoes become "stuffing between the in-sole and the outer one", and "refuse animal matter" is turned into a dye. The phrase "of course" in the last sentence, and the unexplained "&c.", show how ordinary this system was to Mayhew\'s readers. Nothing in the passage is called waste; the idea of waste is the reader\'s assumption, which the passage quietly corrects.',
    },
    'Compare how the writers of Source A and Source B present their views on waste and what we do with it.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'Source A is pessimistic about recycling, calling the system "a comforting illusion". Source B describes a Victorian system in which almost everything found in the rubbish was reused. Source A uses a large statistic ("222 million tonnes of waste per year") while Source B lists specific objects and what they became. Source A is angry and uses strong images, such as the recycling logo being "a prayer". Source B is calm and factual, like a report. Source A says much of our recycling is "shipped to developing countries" or sent to landfill, whereas in Source B old bricks, tin, shoes, rags and bones were all sold on. Both writers make us think about what happens to the things we throw away.',
      'Grade 6-7':
        'Brooks and Mayhew present two systems for dealing with waste, and reading them together produces an irony: the Victorian system Mayhew records, local and thorough, looks like the circular economy modern campaigners want, while the modern recycling Brooks attacks is, in her account, "a comforting illusion". Brooks writes as an investigator exposing a failure. Her language is emotive and accusatory ("We are, quite literally, burying our future"), and the recycling logo is "not a promise; it is a prayer - and an increasingly unanswered one". Mayhew writes as an investigator recording a system that works, and his language is neutral and exact. His evidence is not statistics but a sequence of objects and their destinations: bricks "for sinking beneath foundations", tin re-made into "a variety of articles", shoes sold "to the London shoemakers". Where Brooks shows material shipped far away to be "burned or dumped", Mayhew shows it finding a new use close at hand. There is a difference in motive, though. Mayhew\'s system worked because each item could be sold, not because anyone was trying to protect the environment, whereas Brooks\'s solution is "less waste", a change in how much we buy. The texts share a lesson from opposite directions: waste depends on what a society chooses to value.',
    },
    '"Source A is the more effective argument because it tells uncomfortable truths, while Source B presents an unrealistically positive picture of waste management."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I partly agree. Source A is very effective because it exposes the truth that much of what we recycle is "never recycled at all", which is shocking and makes the reader want to change. However, Source B is not unrealistically positive. Mayhew is not trying to make the system sound wonderful; he simply explains what happened to each kind of rubbish. The system was real, and the details, such as old shoes being used as "stuffing", make it believable. Source A is more useful for today\'s problems, but Source B shows that reusing waste was once normal.',
      'Grade 6-7':
        'Source A\'s effectiveness lies in disillusionment: it dismantles the reader\'s belief that sorting bottles and tins is enough, and the image of the logo as "a prayer" targets the reader\'s sense of virtue. Its weakness is that it offers little detail beyond "less waste", "fewer single-use plastics" and "less packaging". The charge that Source B is "unrealistically positive" does not fit, because Source B is not trying to be positive at all. Mayhew\'s passage is a factual account in a flat, informative tone, with no praise of the dust-heap and no argument about waste. Its picture is positive only because of what it describes: bricks, tin, shoes, rags and bones each have a buyer. If anything, the passage is realistic about why: the items were reused because they could be "sold", not from any concern for the environment. For a modern reader, that is both its value and its limit. It shows that a society can find a use for nearly everything it throws away, but it also suggests that such systems depend on the things having value to someone. Source A is the more effective argument, because it is the only one of the two that is arguing; Source B is effective evidence for a different point, that waste is not a fixed category.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a magazine aimed at young people arguing that we need to fundamentally change our relationship with consumption and waste.\n\nOr:\n(b) Write a letter to a supermarket chain arguing that they should reduce their use of plastic packaging.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '10',
    'Housing and Home',
    OCR_P1_10_SOURCE_A,
    OCR_P1_10_SOURCE_A_REF,
    OCR_P1_10_SOURCE_B,
    OCR_P1_10_SOURCE_B_REF,
    'housing',
    'Read Source A. Identify four consequences of the housing crisis that the writer describes.',
    '1. Average house prices are twelve times the average salary. 2. Private rents consume over 40% of take-home pay in London. 3. Hospitals lose nurses and schools lose teachers who cannot afford to live nearby. 4. Over 100,000 children in England live in temporary housing.',
    'How does the writer of Source B use language to convey the severity of the housing conditions for the poor?\n\n(The Artizans Dwellings Act of 1875 allowed councils to clear slums; "rookeries" were crowded slum buildings. "Dives" is the rich man in a story told by Jesus, who ignores the beggar Lazarus lying at his gate.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'The writer describes the poor as having "poor emaciated, starved bodies", which makes them sound weak and pitiful. The phrase "working twelve hours or more, for a shilling, or less" shows how hard they work for very little money. The old slums are called "fever-breeding rookeries", which suggests they spread disease. The poor are "driven to crowd more closely together in the few stifling places still left to them", and the word "stifling" suggests they can hardly breathe. The metaphor "the shelter of a living tomb" is very powerful, because it suggests the poor are buried alive in their homes. At the end, the writer says the poor deserve "something better than fever dens", which shows how terrible their homes are.',
      'Grade 6-7':
        'The writer conveys severity by turning a policy argument into a picture of bodies and buildings. The poor are introduced in blunt short sentences ("These wretched people must live somewhere. They must live near the centres where their work lies."), whose repeated "must" shows that they have no choices. A long rhetorical question then piles up their hardships ("poor emaciated, starved bodies", "working twelve hours or more, for a shilling, or less") so that the idea of walking "three or four miles each way" becomes absurd. The central irony is that a law meant to help has "made matters worse": the slums have been cleared, but the new "decent habitations" have rents "far beyond the means of the abject poor", so people are "driven to crowd more closely together". The biblical allusion to "Dives", the rich man who ignored the beggar at his gate, turns those who profit into a type of cruelty, and the metaphors of profit ("a richer harvest out of their misery", "a gold-mine") show someone growing rich from suffering. The paragraph ends on the oxymoron "the shelter of a living tomb". The final sentence moves from description to demand, and its three-part claim of rights ends by comparing the poor\'s condition with that of "the uncleanest of brute beasts", the harshest image in the passage.',
    },
    'Compare how the writers of Source A and Source B present the problem of inadequate housing.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'Both writers are angry about housing and say the poorest people suffer most. Source A focuses on cost: house prices are "twelve times the average salary" and rents take "over 40% of take-home pay". Source B also talks about cost, saying the rents of new homes are "far beyond the means of the abject poor", but it describes much worse conditions, such as "fever dens". Both mention people who work but struggle to live near their work: in Source A, "hospitals lose nurses, schools lose teachers", and in Source B the poor "must live near the centres where their work lies". Source A uses statistics and economic language; Source B uses vivid images like "a living tomb". Both writers see housing as a right: Source A says "It is a human right", and Source B demands for the poorest "the rights of citizenship".',
      'Grade 6-7':
        'Osei and the writer of The Bitter Cry address housing crises some 140 years apart, and the most striking thing about reading them together is how similar the problem of cost is. Osei\'s statistics ("twelve times the average salary", "over 40% of take-home pay") describe people priced out of decent homes; the 1883 pamphlet describes slum clearance that replaced "fever-breeding rookeries" with "decent habitations" whose rents were "far beyond the means of the abject poor". Both also make the link between housing and work. Osei\'s nurses and teachers cannot afford to live where they work; the Victorian poor "must live near the centres where their work lies" and cannot afford the train. The difference lies in the conditions described and the language used to describe them. Osei writes about exclusion and insecurity, in economic language, and her strongest image is of a generation "condemned to spend their working lives enriching landlords". The pamphlet writes about physical degradation in religious and moral language: "Dives makes a richer harvest out of their misery", the traffic is "iniquitous", and the poor live in "the shelter of a living tomb". Both writers treat housing as a right, Osei\'s "human right" and the pamphlet\'s "rights of citizenship", but the pamphlet goes further, naming who must act: "The State must make short work of this iniquitous traffic".',
    },
    '"Both writers rely too heavily on emotion and not enough on practical solutions."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I partly agree about Source A, which describes the problem but does not offer specific solutions. However, Source B does suggest a solution. It argues that "without State interference nothing effectual can be accomplished" and ends by saying "The State must make short work of this iniquitous traffic". It also explains why an earlier law, the Artizans Dwellings Act, "made matters worse". Both writers use emotional language, such as Source A\'s "condemned" and Source B\'s "living tomb", because they want readers to care. People need to care before they will support a solution.',
      'Grade 6-7':
        'The statement is fair to Source A in part but not to Source B. Osei\'s article is mostly diagnosis: its statistics and its closing claim, "Housing is not a commodity. It is a human right.", create moral pressure but propose no policy. That may be a fair choice for a journalist, whose job is to make readers care, but it leaves the question of what to do open. Source B is both more emotional and more practical. Its emotion is extreme: "poor emaciated, starved bodies", "Dives makes a richer harvest out of their misery", "the shelter of a living tomb". But the passage opens with an argument about means ("without State interference nothing effectual can be accomplished upon any large scale"), and it analyses why a practical solution already tried, the Artizans Dwellings Act, has "in some respects, made matters worse": clearance without affordable rents only drives the poor "to crowd more closely together". That is an insight housing policy still has to reckon with. Its final demand, that "The State must make short work of this iniquitous traffic", names a remedy, even if it does not say how. The emotion in both texts is not a substitute for solutions but the means of making readers want one.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a news website arguing that the government must do more to solve the housing crisis.\n\nOr:\n(b) Write a letter to your local council about the impact of housing costs on young people in your area.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '11',
    'The British Countryside and Nature',
    OCR_P1_11_SOURCE_A,
    OCR_P1_11_SOURCE_A_REF,
    OCR_P1_11_SOURCE_B,
    OCR_P1_11_SOURCE_B_REF,
    'the countryside',
    'Read Source A. Identify four ways the writer says the British countryside has been damaged.',
    '1. Hedgerows grubbed out and meadows ploughed up. 2. 97% of wildflower meadows lost since 1970. 3. 50% of hedgerows lost. 4. Farmland bird populations have declined by 58%.',
    'How does the writer of Source B use language to celebrate the English countryside?\n\n(Richard Jefferies wrote about the farmland of southern England. Earlier in this essay he describes a field being ploughed by steam engines. "Germander speedwell", "sorrel", "orchis" and "cardamine" are wild flowers; "grubbed" means dug up by the roots; in Greek myth Prometheus stole fire from the gods.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Jefferies describes the flowers as if they were treasure: the buttercup has "an enamel of gold" and its "golden pollen" covers your fingers. The simile "like that from the wing of a butterfly" makes the pollen sound delicate. He says the blue speedwell is "like tiny specks of blue stolen, like Prometheus\' fire, from the summer sky", which makes a tiny flower seem magical. He lists many plants, "hawthorn and blackthorn, ash and willow" and "Bluebells, violets, cowslips", to show how rich the countryside is. He repeats "the hedges" with excitement and calls them "the very synonym of Merry England", and the short sentence "Without hedges England would not be England" shows that they are part of what England is. He even says "I love their very thorns", which shows that he loves every part of the countryside, even the prickly parts. The last sentence, "You do not know how much there is in the hedges", speaks to the reader directly and makes us want to look more closely.',
      'Grade 6-7':
        'Jefferies celebrates the countryside through close, loving observation, and his opening words set the tone: the buttercups are "as innumerable as ever". The detail is almost scientific and invites the reader to touch ("with the nail you may scrape it off"), yet the vocabulary is of precious things, "an enamel of gold" and "golden pollen", so that an ordinary meadow becomes a treasure-house. The simile for the speedwell, "tiny specks of blue stolen, like Prometheus\' fire, from the summer sky", raises the smallest flower to the level of myth, and the sorrel makes the field look "as if sunset were always shining red upon it". The phrase "From the spotted orchis leaves in April to the honeysuckle-clover in June" turns the meadow into a calendar of flowers, all leading to the reassurance that it "has changed in nothing that delights the eye". Jefferies is honest about change: the draining has reduced "the number of cardamine flowers", and the farmers have grubbed "only a few" hedges. But he presents the farmers as judges who have "dealt mercifully with the hedges", which admits that the hedges could have been condemned. The passage then rises to its climax. The interrupted, repeated "yes, the hedges" sounds like speech, "the very synonym of Merry England" ties hedges to national identity, and the blunt "Without hedges England would not be England" states it as a fact. The last sentences move from a list ("full of flowers, birds, and living creatures") to personification ("flecks of sunshine dancing") to a personal confession, "I love their very thorns", which values even the unlovely parts of nature. The final direct address, "You do not know how much there is in the hedges", turns celebration into a challenge to the reader to look.',
    },
    'Compare how the writers of Source A and Source B present the English countryside.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'Both writers love the countryside, and both write about hedges and wild flowers, but their attitudes are very different. Source A says the countryside is "vanishing" and "biologically dead", and gives alarming statistics: Britain has lost "97% of its wildflower meadows" and "50% of its hedgerows". Source B is reassuring: the buttercups are "as innumerable as ever" and the hedges "are yet there". Both writers use the word "grubbed". Source A says "A hedgerow grubbed out here", while Jefferies says the farmers "have not grubbed many hedges". Source A uses short, broken sentences and numbers, while Source B uses long sentences full of colours, similes and lists of flowers. Both writers like nature that is wild and untidy: Source A praises "the bramble patch where the wren nests", and Source B loves "briar and bramble" and even the hedges\' "very thorns". Source A\'s tone is angry and urgent; Source B\'s is joyful and affectionate.',
      'Grade 6-7':
        'Barlow and Jefferies look at the same things, hedges, meadows and wild flowers, about a hundred and forty years apart, and the gap between them gives the pair its force. Jefferies records the first small changes that Barlow later counts as a catastrophe. His farmers have grubbed "only a few" hedges, "to enlarge the fields", and draining has reduced "the number of cardamine flowers"; Barlow\'s list of "small surrenders" begins with exactly this: "A hedgerow grubbed out here. A meadow ploughed up there." Both even use the same verb. Their attitudes differ because their moments differ. Jefferies can still be reassured: the meadow "has changed in nothing that delights the eye" and the hedges "are yet there", although his wish "long may they remain" admits that they might not. Barlow has only loss to report, and his statistics ("97%", "50%", "58%") measure the countryside as Jefferies\'s catalogue of flowers does, but by what has gone rather than by what is there. Their methods match their attitudes. Barlow uses fragments and a paradox, a countryside that "looks green but is biologically dead", and the image of "nature\'s absence, dressed up to look presentable". Jefferies uses colour, myth and feeling: "an enamel of gold", "Prometheus\' fire", "I love their very thorns". Both value untidy nature over neatness: Barlow\'s "Real nature is messy, tangled, and inconvenient" and his "bramble patch where the wren nests" agree with Jefferies\'s "briar and bramble" and hedges "thick and high". There is a final irony. Jefferies says the farmers spared the hedges because they were useful to the cattle, "for shade in heat and shelter in storm", and he shows fields already being enlarged; when larger fields became more useful than hedges, the hedges went, as Barlow records.',
    },
    '"Source A is more important than Source B because it tells us what we need to hear, while Source B only tells us what we want to hear."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I partly agree. Source A tells us something we need to hear: its statistics about lost meadows and hedgerows are shocking and make the reader want to act. Source B is more comforting, because Jefferies says the meadow "has changed in nothing that delights the eye", which is what a reader who loves the countryside wants to hear. However, Source B is not only comforting. Jefferies admits that some hedges have been grubbed up and that the draining has reduced some flowers, and "long may they remain" is a hope, not a promise. His detailed descriptions also show us what is worth saving, so that Source A\'s numbers mean more. Both texts are important, and they work best together.',
      'Grade 6-7':
        'The statement is fair to the surface of Source B but not to its detail. Jefferies does offer comfort: the buttercups are "as innumerable as ever", the meadow "has changed in nothing that delights the eye", and the farmers have "dealt mercifully with the hedges". Yet the passage records the start of the process Barlow describes. Hedges have been grubbed "to enlarge the fields", draining has thinned the cardamine, and the hedges that remain were spared because the cattle need them, so their survival depends on their usefulness. "Long may they remain" is a wish that implies a threat. Source A certainly tells readers what they need to hear, and its method, fragments followed by figures ("97%", "50%", "58%"), makes loss measurable and hard to dismiss. But it is not only unwelcome truth: Source A\'s closing picture of "the bramble patch where the wren nests" and "the uncut corner where the wildflowers bloom" is itself a celebration, and it is exactly the kind of close looking Jefferies teaches when he says "You do not know how much there is in the hedges". A reader who has never looked at a hedge will not grieve for "50% of its hedgerows". Source A is the more urgent text for today, but Source B supplies the knowledge and the love that give the statistics their meaning.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a nature magazine arguing that more must be done to protect British wildlife.\n\nOr:\n(b) Write a speech to be delivered at a local council meeting opposing a development that would destroy green belt land.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '12',
    'Children, Clothing and Conformity',
    OCR_P1_12_SOURCE_A,
    OCR_P1_12_SOURCE_A_REF,
    OCR_P1_12_SOURCE_B,
    OCR_P1_12_SOURCE_B_REF,
    "children's clothing",
    'Read Source A. Identify four arguments the writer makes against school uniforms.',
    '1. Uniforms suppress individuality. 2. They impose unnecessary financial burdens on families. 3. The claim that uniforms prevent bullying is contradicted by credible studies. 4. Parents are forced to buy from approved suppliers at inflated prices.',
    'How does the writer of Source B use language to criticise the way children were dressed?\n\n("Habiliments" means clothes; "interdicted" means forbidden; "requisite" means necessary.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Spencer uses strong verbs to show that parents harm their children: mothers "punish and injure their little ones". He quotes the orders adults give, "Get up this moment: you will soil your clean frock", which shows how children are stopped from playing just to keep their clothes clean. The sentence "Thus is the evil doubled" shows he thinks the problem is serious: the children suffer twice, from thin clothes and from being stopped from playing. He mocks the reason for it, which is "their mamma\'s standard of prettiness" and being "admired by her visitors", so children are dressed for show. He says activity is "natural and needful for the young", which shows he believes children need to move about freely.',
      'Grade 6-7':
        'Spencer attacks fashionable children\'s clothing through a structure of accusation, evidence and verdict. The opening sentence names the motive, "for the sake of conformity", and gives mothers the harsh verbs "punish and injure", which turn a matter of dress into one of cruelty. His evidence is dramatic: two quoted commands, "Get up this moment: you will soil your clean frock" and "Come back: you will dirty your stockings", let the reader hear adults putting clothes before children, and the images of an "urchin creeping about on the floor" and a child who wants to "scramble up a bank" show ordinary, healthy play being stopped. The short sentence "Thus is the evil doubled" is the verdict, and the word "evil" raises the stakes from foolishness to wrongdoing. The long sentence that follows sets out the double harm in parallel clauses ("That they may come up to their mamma\'s standard of prettiness ... and that these easily-damaged habiliments may be kept clean"), and lands on the key word "restrained". The ending is almost paradoxical: exercise is cut short "lest it should deface the clothing", as if the clothes mattered more than the child wearing them. Spencer\'s formal, Latinate vocabulary ("interdicted", "habiliments", "requisite") gives the attack a scientific authority, but his sarcasm about "prettiness" shows real anger.',
    },
    'Compare how the writers of Source A and Source B present their views on what children are made to wear.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'Both writers criticise the clothes adults make children wear. Source A says school uniforms "suppress individuality" and cost too much, "an average of £337 per child per year". Source B says fashionable clothes stop children playing and harm their health. Both writers attack conformity: Source A calls uniforms "an outdated instrument of conformity", and Source B says mothers dress children "for the sake of conformity". However, they want different things. Source A wants children to be free to express themselves, while Source B wants them to be free to run and play. Source A uses statistics and facts; Source B uses examples of adults scolding children, such as "you will dirty your stockings". Both writers are critical and sure of their views.',
      'Grade 6-7':
        'Hussain and Spencer, writing more than 160 years apart, both attack clothing imposed on children in the name of conformity, and both use the word: uniforms are "an outdated instrument of conformity"; fashionable dress is chosen "for the sake of conformity". Their reasons differ, and so do their villains. Hussain\'s argument is about identity and money: uniforms "suppress individuality", cost families "£337 per child per year", and force parents to buy "from approved suppliers at inflated prices". Her villain is the institution, the school. Spencer\'s argument is about health and freedom of movement: children\'s clothes are "unfit to bear that rough usage which unrestrained play involves", so play itself is "interdicted". His villain is fashion and the parent who follows it, "their mamma\'s standard of prettiness". Their methods reflect this. Hussain argues like a journalist, with statistics, an appeal to "credible" studies and a closing antithesis ("Schools claim uniforms promote equality. In practice, they penalise poverty."). Spencer argues like a scientist with a moralist\'s anger, dramatising the problem through quoted scolding and calling it "evil". Interestingly, sturdy, practical clothing might satisfy Spencer, who objects to fabrics that cannot survive play, while a compulsory uniform is exactly what Hussain opposes.',
    },
    '"Source B makes a stronger case than Source A, because it is concerned with children\'s health and freedom rather than with cost and self-expression."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I partly agree. Source B\'s argument is powerful because it is about children being stopped from playing, which seems more important than how they look. The scolding voices ("Come back: you will dirty your stockings") make the reader feel sorry for the children. However, Source A is also convincing. The cost of "£337 per child per year" is a real problem for families, and the point that uniforms "penalise poverty" is about fairness, which also matters. Source B is more emotional and Source A is more factual, so they are effective in different ways.',
      'Grade 6-7':
        'Spencer\'s case is more vivid, but it is not clearly stronger. Its strength is that it grounds a question of dress in the body: clothes "unfit" for play lead to play being "interdicted", and the activity "so natural and needful for the young" is "restrained". The quoted commands and the image of a child told not to "scramble up a bank" make the harm immediate. Yet the passage asserts more than it proves. It offers no evidence beyond typical scenes, and it lays the blame on mothers\' vanity ("their mamma\'s standard of prettiness") in a way that reflects its time as much as its science. Hussain\'s case is narrower but better supported: a specific cost, "£337 per child per year", a specific mechanism, parents "forced to buy from approved suppliers at inflated prices", and a claim about equality that turns the schools\' own argument against them. The statement also sets up a false choice. Cost is not trivial next to health for a family that cannot afford both, and Hussain\'s concern with "individuality" is about children\'s freedom too. Each text is effective for its purpose: Spencer\'s to shock parents into changing their habits, Hussain\'s to persuade schools to change their policy.',
    },
    "Choose ONE of the following:\n\nEither:\n(a) Write an article for your school magazine arguing for or against school uniforms.\n\nOr:\n(b) Write a letter to your headteacher proposing changes to your school's uniform policy.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)",
  ),

  buildOcrP1(
    '13',
    'Protest and Democracy',
    OCR_P1_13_SOURCE_A,
    OCR_P1_13_SOURCE_A_REF,
    OCR_P1_13_SOURCE_B,
    OCR_P1_13_SOURCE_B_REF,
    'protest',
    'Read Source A. Identify four concerns the writer expresses about recent laws affecting protest.',
    '1. Police can arrest people for being "too noisy." 2. People can be arrested for carrying items that "could be used" for attachment. 3. "Serious disruption" is so vaguely defined it could cover almost any demonstration. 4. The right to protest is being "systematically dismantled."',
    'How does the writer of Source B use language to present the protests and disturbances of his time as a threat?\n\n(Arnold was writing in the late 1860s. In July 1866 a crowd who had come to a meeting in Hyde Park, London, to demand the vote for working men found the gates shut against them and pulled down the park railings. "Deference" means respect for people of higher rank; by "machinery" Arnold means things, such as freedom, that are only a means to an end but are valued for their own sake; "rowdyism" is rough, noisy behaviour; "nostrums" are quack remedies.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Arnold uses a list with repetition to show protest turning into disorder: "march where he likes, meet where he likes, enter where he likes, hoot as he likes, threaten as he likes, smash as he likes". The list gets worse as it goes on, from marching to threatening and smashing, and the repeated "as he likes" makes the protesters sound selfish, as if they simply do whatever they want. He then gives his warning, "All this, I say, tends to anarchy", and "anarchy" means a complete breakdown of order. He describes "our worship of freedom in and for itself" and "our blind faith in machinery", which suggests that people follow freedom like a religion, without thinking. He mocks those who say the disturbances are only "trifles" and "a few transient outbreaks of rowdyism", and he calls his opponents\' ideas "nostrums", which means fake cures. At the start he links the disorder to the loss of "the strong feudal habits of subordination and deference", which shows that he thinks working people should obey those above them.',
      'Grade 6-7':
        'Arnold presents disorder as the product of a mistaken belief rather than of real grievances. His metaphors are religious: "our worship of freedom in and for itself", "our superstitious faith ... in machinery", "our blind faith in machinery". Freedom becomes an idol, worshipped for itself rather than for what it is for, and the pronoun "our" makes the whole nation, not only the crowd, responsible. The key sentence builds to a list whose structure does the arguing: "march where he likes, meet where he likes, enter where he likes, hoot as he likes, threaten as he likes, smash as he likes". The repeated endings make every action sound the same, a matter of doing as one "likes", and the list slides from lawful acts (marching, meeting) through intimidation (hooting, threatening) to violence ("smash"), so that the right to march seems to lead naturally to smashing. The verdict is short and insistent: "All this, I say, tends to anarchy". Arnold then turns on his opponents with sarcasm. They are "my friends of the liberal or progressive party, as they call themselves", and he reports their reassurances at length, that the disturbances are "trifles" and "a few transient outbreaks of rowdyism", so that the sheer length of the sentence makes their calm look complacent. Even their picture of "the educated and intelligent classes" standing in "overwhelming strength and majestic repose" is reported with irony, since "repose" sounds idle as well as grand, and the sentence ends by suggesting that the liberals\' confidence is self-interest: faith in "their nostrums" and in their own return "to place and power". The opening shows what order means to Arnold: "habits of subordination and deference" among the working class. The threat he fears is not only violence but the end of that deference.',
    },
    'Compare how the writers of Source A and Source B present their views on the right to protest.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'The two writers disagree strongly. Source A says the right to protest is "a fundamental democratic freedom" and is worried that new laws are taking it away. Source B worries that people are claiming "an Englishman\'s right to do what he likes", and says that this "tends to anarchy". Both writers mention smashing. Source A points out that "The suffragettes smashed windows" and are now admired, while Source B lists "smash as he likes" as the worst example of disorder. Both use lists. Source A lists movements that succeeded through protest, from "the abolition of slavery" to "civil rights", and Source B lists protesters\' actions, from marching to smashing. Source A is angry with the government, while Source B is scornful of the protesters and of the liberals who say the disturbances do not matter. Source A\'s sentences are short and direct; Source B\'s are long and sarcastic.',
      'Grade 6-7':
        'Shaw and Arnold both believe that liberty is in danger, but they see the danger coming from opposite directions. For Shaw it comes from the state, which is "systematically" dismantling the right to protest; for Arnold it comes from the crowd, whose "worship of freedom in and for itself" is leading to "anarchy". The clearest contrast is over smashing. Shaw\'s "The suffragettes smashed windows" is one item in a history of disruption later vindicated; Arnold\'s "smash as he likes" is the last step of a list that begins with marching and meeting, implying that all protest slides towards violence. Both writers use lists, Shaw\'s of movements and Arnold\'s of actions, and both attack comfortable reassurance: Shaw dismisses the "proper channels" as designed "to contain and neutralise opposition", while Arnold mocks the liberals who say the disturbances are "trifles". Their tones differ. Shaw is direct and declarative ("The right to protest is not a gift from government."). Arnold is ironic and deliberately long-winded, reporting his opponents\' views at such length that they sound complacent. History adds an irony that supports Shaw. The Hyde Park crowd of 1866 was demanding the vote, and a year later the Reform Act of 1867 gave it to many working men in the towns: a disruption condemned at the time, followed by the change it demanded, which is the pattern Shaw describes. And the way Arnold links the passing of "habits of subordination and deference" with anarchy shows that the order he wanted to protect was one in which working people knew their place.',
    },
    '"Source A is dangerously irresponsible because it encourages law-breaking, while Source B offers a more responsible view of protest."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I disagree. Source A does not tell people to break the law. It points out that people who broke the law in the past, such as the suffragettes, are now admired, and it asks readers to question the "proper channels". Source B does warn about real dangers, since threatening people and smashing things can hurt them. However, Arnold puts marching and meeting in the same list as smashing, as if all protest were dangerous. He also seems to want working people to show "subordination and deference", which is not a fair view in a democracy. So Source B is not simply more responsible. Both writers are effective, but I find Source A more convincing because its examples show that protest has changed things for the better.',
      'Grade 6-7':
        'The statement flatters Source B. Arnold\'s case has real force: "threaten" and "smash" name genuine harms, and his point that freedom can be worshipped "in and for itself", without asking what it is for, is a serious one. But his method undermines his claim to responsibility. By putting "march" and "meet", the lawful heart of protest, in the same breath as "threaten" and "smash", he treats the whole list as "anarchy", which is the kind of vagueness Source A objects to in the phrase "serious disruption". His sarcasm about "my friends of the liberal or progressive party, as they call themselves" is entertaining but does not answer their argument, and the way he links the passing of "habits of subordination and deference" with disorder shows that the order he defends depends on working people knowing their place. Source A, for its part, does not encourage law-breaking. It observes a pattern, that advances were achieved by protest condemned "at the time" as "disruptive, dangerous, and illegal", and asks readers to distrust "proper channels" that are "designed by those in power". Its weakness is that it assumes future vindication, as if every disruptive protest will one day be seen as the suffragettes are. Each text is effective in its own way, Arnold through irony and rhythm and Shaw through historical example, but neither has a monopoly on responsibility, and Arnold\'s own decade shows how quickly a disruption condemned as anarchy can be followed by accepted reform.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a broadsheet newspaper presenting your views on whether protest should be allowed to cause disruption.\n\nOr:\n(b) Write the text of a speech for a debate on the motion: "The right to protest must include the right to disrupt."\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '14',
    'Technology, Work and the Future',
    OCR_P1_14_SOURCE_A,
    OCR_P1_14_SOURCE_A_REF,
    OCR_P1_14_SOURCE_B,
    OCR_P1_14_SOURCE_B_REF,
    'technology and work',
    'Read Source A. Identify four claims the writer makes about the impact of artificial intelligence on jobs.',
    '1. AI will eliminate more jobs than any technology in human history. 2. McKinsey estimates 375 million workers will need to switch occupational categories by 2030. 3. No profession involving information processing is safe. 4. AI replaces cognitive labour, unlike the Industrial Revolution which replaced physical labour.',
    'How does the writer of Source B use language to argue that machinery need not destroy jobs?\n\n("Supersede" means replace; "undersell" means sell more cheaply than.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Babbage begins by admitting the objection to machinery, that it can "supersede much of the hand labour", which makes him seem fair. He even agrees that a machine would never be used unless it "diminished the labour necessary to make an article". He then explains, step by step, what happens next: owners "undersell" their competitors, other owners buy the machine too, and prices fall. The connective "therefore" shows that his conclusion follows logically. He admits machinery "at first" throws people out of work, but says that cheaper goods create "increased demand", which "almost immediately absorbs" many of the workers. The careful words "perhaps, in some cases" show that he does not want to exaggerate.',
      'Grade 6-7':
        'Babbage argues like a mathematician setting out a proof. He opens by stating the opposing case, "One of the objections most frequently urged against machinery", and then concedes more than an opponent might expect: "in fact unless a machine diminished the labour necessary to make an article, it could never come into use". Saving labour, in other words, is the whole point of a machine. The concession sets up a chain of cause and effect in the second sentence, marked by verbs of necessity ("will be obliged to undersell", "will induce them", "will soon cause"), so that competition appears to work like a natural law. The third sentence is the conclusion, signalled by "therefore" and built on a concessive structure ("Although ... yet") that admits the short-term harm, that machinery "has at first a tendency to throw labour out of employment", before outweighing it with the long-term gain. The language is impersonal throughout: workers appear as "labour" and "hand labour", never as people, which makes the argument sound objective but also keeps their hardship at a distance. The final qualification, "perhaps, in some cases, the whole", is carefully hedged, which makes Babbage seem trustworthy, but it also admits that in most cases some workers will not be absorbed.',
    },
    'Compare how the writers of Source A and Source B present their views on technological change and its impact on workers.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'Source A is worried that artificial intelligence will destroy jobs; Source B argues that machines create enough new demand to employ most of the workers they replace. Source A uses a modern statistic ("375 million workers") while Source B uses a logical explanation of prices and competition. Source A directly challenges the kind of argument Source B makes: it reports the optimists\' claim that "technology always creates more jobs than it destroys" and calls their comparison with the Industrial Revolution "dangerously misleading". Source A\'s tone is urgent and alarmed; Source B\'s tone is calm and reasonable. Both writers admit that new technology throws people out of work at first, but Source A thinks this time will be different.',
      'Grade 6-7':
        'Ashworth and Babbage conduct a debate across nearly two centuries. Babbage, writing in 1832, sets out the optimistic case in its classic form: machinery displaces workers "at first", but cheaper goods create "increased demand", which "almost immediately absorbs a considerable portion of that labour". Ashworth names exactly this argument, "technology always creates more jobs than it destroys", and calls the comparison with the Industrial Revolution on which it rests "dangerously misleading". Both writers acknowledge the other side, but to opposite ends. Babbage concedes the objection in order to answer it; Ashworth concedes the history ("the Industrial Revolution, which displaced handloom weavers but created factory workers") in order to deny that it applies now, because "AI replaces cognitive labour". Their language reflects their purposes. Babbage\'s is impersonal and logical: long sentences, chains of cause and effect, the abstract noun "labour" for people. Ashworth\'s is urgent and direct: short declaratives ("This is not speculation."), a list of threatened professions, and a closing question, "what, exactly, is left for humans to do?". Babbage\'s careful hedge, "perhaps, in some cases, the whole", is worth noticing: even the optimist does not claim that every displaced worker is re-employed, which is the gap Ashworth\'s anxiety fills.',
    },
    '"Source A is unnecessarily alarmist, while Source B offers a calmer and more reasonable view of technological change."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I disagree that Source A is "unnecessarily" alarmist. The estimate it quotes of "375 million workers" needing to change jobs is serious, and Source A makes a good point that AI replaces thinking, not just physical work. Source B is calm and reasonable, and its explanation of how cheaper goods create more demand is logical. But Babbage only says machines absorb "a considerable portion" of the workers, and "perhaps, in some cases, the whole", so even he admits some people lose out. Both writers have a point, but I find Source A more convincing because AI affects many kinds of work at once.',
      'Grade 6-7':
        'The accusation of alarmism assumes that AI is just another machine, which is precisely what Ashworth disputes: his distinction between physical and "cognitive labour" is a serious argument, not panic, and his demand for answers "before the disruption arrives, not after" is a call for planning. Babbage\'s passage is certainly calmer, and its reasoning is clear: machines lower costs, lower prices raise demand, and demand re-employs workers. Economists would say that reasoning has often been borne out since. But the passage is reasonable partly because it is abstract. Workers appear only as "labour", and the cost to people who lose their jobs "at first" is not described at all. Its own hedging, "a considerable portion of that labour, and perhaps, in some cases, the whole", admits that some workers will not be re-employed, and it says nothing about how long "almost immediately" might be for them. So Source B\'s calm is not the same as greater accuracy. The most balanced judgement is that the two texts answer different questions: Babbage explains why an economy adjusts to new machines over time, and Ashworth asks what happens to the people who must live through the adjustment when it may be faster and wider than ever before.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a broadsheet newspaper presenting your views on whether AI is a threat or an opportunity for young people entering the workforce.\n\nOr:\n(b) Write a blog post aimed at students arguing that schools need to prepare pupils for a world transformed by artificial intelligence.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '15',
    'Mental Health and Masculinity',
    OCR_P1_15_SOURCE_A,
    OCR_P1_15_SOURCE_A_REF,
    OCR_P1_15_SOURCE_B,
    OCR_P1_15_SOURCE_B_REF,
    'mental health and masculinity',
    'Read Source A. Identify four facts or claims the writer makes about mental health among men.',
    '1. Three-quarters of all suicides in the UK are male. 2. Men aged 45-49 have the highest suicide rate. 3. Mental health campaigns remain overwhelmingly oriented towards women and girls. 4. The phrase "man up" tells boys that asking for help is failure.',
    'How does the writer of Source B use language to present his idea of a gentleman?\n\n(John Henry Newman, a priest, wrote these discourses on university education in the 1850s. Here he describes the kind of man he believed a good education produces; he admired this character, but argued that it was not the same as religious goodness. "Unembarrassed" here means free and unhindered; "forbearing" means patient and slow to take offence; "resigned" means accepting what cannot be changed; "indolent" means lazy.)\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Newman begins with a simple definition: a gentleman is "one who never inflicts pain", so the first thing we learn is that he is gentle. The three-part phrase "tender towards the bashful, gentle towards the distant, and merciful towards the absurd" shows that he is kind to everyone, especially people who are shy or awkward. The repeated "never" ("never wearisome", "never takes unfair advantage") builds a picture of perfect manners and self-control. He compares the gentleman to "an easy chair or a good fire", which makes him sound comforting to be with. The gentleman keeps his feelings to himself: he "never speaks of himself except when compelled" and has "too much good sense to be affronted at insults". The last sentence, "he submits to pain, because it is inevitable, to bereavement, because it is irreparable, and to death, because it is his destiny", uses a pattern of three to show that he accepts even the worst suffering calmly.',
      'Grade 6-7':
        'Newman builds his gentleman sentence by sentence, most of them beginning "He", so that the passage reads like a portrait assembled from parts, and many of those parts are negatives: "never wearisome", "never speaks of himself except when compelled", "never defends himself by a mere retort", "never takes unfair advantage". The gentleman is defined as much by what he holds back as by what he does. The opening definition is hedged ("almost a definition", "as far as it goes, accurate"), which hints that Newman sees its limits, and the simile of "an easy chair or a good fire" is gently double-edged: comforts are pleasant, but "nature provides" rest and warmth "without them". Most of the gentleman\'s attention goes outward, to other people\'s feelings. He avoids "whatever may cause a jar or a jolt in the minds of those with whom he is cast", and the triad "tender towards the bashful, gentle towards the distant, and merciful towards the absurd" pairs each kind of awkwardness with a matching kindness. The antithesis "seems to be receiving when he is conferring" shows a courtesy so complete that it hides itself. About his own feelings he is silent. The pattern "too much good sense to be affronted at insults, ... too well employed to remember injuries, and too indolent to bear malice" ends on a sly word, "indolent", which suggests that his calm may be partly laziness. The closing triad, "he submits to pain, because it is inevitable, to bereavement, because it is irreparable, and to death, because it is his destiny", rises from pain to death in the calm rhythm it describes, and "on philosophical principles" shows that this acceptance is reasoned rather than felt. The effect is admiring but cool: the gentleman is considerate to everyone except, perhaps, himself.',
    },
    'Compare how the writers of Source A and Source B present their views on men, emotions, and how men should behave.\n\nCompare the attitudes and methods used.',
    {
      'Grade 4-5':
        'The two writers have very different views. Source A says that expecting men to hide their feelings is dangerous: "man up" is "a death sentence disguised as advice", and men end up unable to "cry" or "talk". Source B admires a gentleman who "never speaks of himself except when compelled" and who "submits to pain" and to "bereavement" calmly, which is the kind of silence Source A criticises. However, Newman\'s gentleman is not hard or angry. He is "tender", "gentle" and "merciful" towards other people, whereas Source A says that the only emotions boys are taught to accept are "anger and indifference". Source A uses statistics, such as "Three-quarters of all suicides in the UK are male", while Source B uses long lists of the gentleman\'s qualities. Source A\'s tone is urgent and angry; Source B\'s is calm and admiring.',
      'Grade 6-7':
        'Walker and Newman both describe an ideal of male restraint, Walker to attack it and Newman to admire it, and where their descriptions overlap the comparison is revealing. Newman\'s gentleman "never speaks of himself except when compelled" and "submits to pain, because it is inevitable, to bereavement, because it is irreparable"; this is close to the silence Walker blames for producing men "who cannot cry, cannot talk, cannot admit that they are drowning". But the ideals are not the same. Walker says that boys are taught that "the only acceptable male emotions are anger and indifference". Newman\'s gentleman shows neither: he has "too much good sense to be affronted at insults", and, far from being indifferent, he "has his eyes on all his company", is "tender", "gentle" and "merciful", and spends his attention making "every one at their ease and at home". His restraint is a form of consideration for others, and its cost falls on himself, which is exactly the cost Walker counts. The writers\' methods suit their aims. Walker uses statistics ("Three-quarters of all suicides in the UK are male"), a legal metaphor ("a death sentence disguised as advice") and a collective accusation ("We have built a culture"). Newman writes long, balanced sentences built on repetition and triads, a style that performs the calm it describes. Newman is also less simple than he seems: "as far as it goes" and "too indolent to bear malice" show him keeping some distance from his ideal. Read together, the texts suggest that the Victorian ideal combined real virtues, such as courtesy and not taking offence, with a silence about one\'s own suffering that Walker argues can kill.',
    },
    '"Source A makes a stronger case because it uses evidence, while Source B is based on outdated and harmful attitudes."\n\nTo what extent do you agree? Evaluate the effectiveness of both texts.',
    {
      'Grade 4-5':
        'I mostly agree that Source A makes the stronger case. Its statistics, such as "Three-quarters of all suicides in the UK are male", are strong evidence that something is wrong, and the phrase "easier for men to die than to ask for help" is shocking. Some of Source B\'s ideas do seem outdated and harmful: a man who "never speaks of himself" and simply "submits" to pain and bereavement might not ask for help when he needs it. However, not everything in Source B is harmful. Being kind to shy people, not taking offence at insults and never taking "unfair advantage" in an argument are still good qualities. So Source B is partly outdated, but it also describes things worth keeping.',
      'Grade 6-7':
        'Source A makes the stronger case about men\'s mental health, but both halves of the statement are too simple. Walker\'s evidence shows the scale of the problem ("Three-quarters of all suicides in the UK are male"), but the link between those figures and the phrase "man up" is argued rather than proved, and its power lies as much in metaphor ("a death sentence disguised as advice") as in data. Newman offers no evidence at all, because he is not arguing a case but drawing a portrait of an ideal, so the two texts are not competing on the same ground. Is that ideal "outdated and harmful"? Parts of it are. A man who "never speaks of himself except when compelled" and meets "pain" and "bereavement" with resignation "on philosophical principles" is the man Walker fears will not ask for help. But much of the portrait is neither outdated nor harmful: the gentleman is "tender towards the bashful", "never takes unfair advantage" and "interprets every thing for the best", qualities that would improve most modern arguments. Newman himself keeps some distance from his ideal, calling his definition accurate only "as far as it goes" and slipping in "too indolent to bear malice". The fairest judgement is that Source A is more persuasive for a modern reader, while Source B shows why the ideal of silent endurance was attractive, which helps to explain why it has lasted so long.',
    },
    'Choose ONE of the following:\n\nEither:\n(a) Write an article for a magazine aimed at young men about why it is important to talk about mental health.\n\nOr:\n(b) Write a speech to be delivered at a school assembly about changing attitudes to mental health and masculinity.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  // ═══════════════════════════════════════════════════════════════════════════
  // OCR PAPER 2 - papers 01 to 15 (16 and 17 come last)
  // ═══════════════════════════════════════════════════════════════════════════

  buildOcrP2(
    '01',
    'Returning Home',
    OCR_P2_01_EXTRACT,
    OCR_P2_01_EXTRACT_SOURCE,
    'Read the first paragraph. List four things you learn about the condition of the house.',
    '1. The house had been empty for eleven years. 2. The paint on the front door had faded from red to dusty pink. 3. Weeds had pushed through the path, cracking the concrete. 4. The garden had reverted to wilderness with roses strangled by bindweed.',
    "How does the writer use language in the second and third paragraphs to convey Eleanor's feelings about returning to the house?\n\nAnalyse the effects of the language used.",
    {
      'Grade 4-5':
        'The writer says Eleanor felt "something shift inside her chest" which shows a physical reaction to emotion. The word "recognition" suggests she is reconnecting with her past. The key, carried "from flat to flat, city to city" for eleven years, shows she has never been able to let go of the house. The phrase "too heavy with meaning to discard" uses the metaphor of weight to describe emotional attachment. The door turning "with surprising ease, as though the house had been expecting her" personifies the house and makes it seem welcoming.',
      'Grade 6-7':
        'The writer constructs Eleanor\'s emotional state through a rhetoric of physical sensation and metaphorical displacement. The phrase "something shift inside her chest" refuses to name the emotion, using physical description instead - this imprecision mirrors Eleanor\'s own inability to categorise her feelings. The parenthetical "not grief, exactly, but something adjacent to it" performs a semantic search for the right word, the qualifying "exactly" and "adjacent" suggesting that language itself is inadequate to the experience. The key is the paragraph\'s central symbol: its eleven-year journey "from flat to flat, city to city" compresses Eleanor\'s entire adult life into a prepositional pattern of restless movement, while "too heavy with meaning to discard" transforms a physical object into an emotional burden. The personification of the house - "as though the house had been expecting her" - shifts agency from Eleanor to the building, suggesting that the return was inevitable rather than chosen.',
    },
    "How does the writer structure the extract to build a sense of significance around Eleanor's return to the house?\n\nYou could write about:\n- how the writer's focus shifts as the extract develops\n- how particular structural choices create effects\n- any other structural features that interest you.",
    {
      'Grade 4-5':
        'The extract begins outside the house, describing its decay, then moves closer as Eleanor approaches the gate, opens it, unlocks the door, and finally enters. This physical movement mirrors an emotional journey from distance to intimacy. The pace slows as Eleanor gets closer - the description of the key and its history pauses the action to add emotional depth. The final paragraph inside the house uses sensory details (smell of dust and perfume) to make the return feel real and immediate. The comparison of entering the house to "entering a church" shows how sacred and important this moment is to her.',
      'Grade 6-7':
        'The extract is structured as a progressive narrowing of focus: from the house\'s exterior (paragraph 1) to Eleanor\'s emotional state (paragraph 2) to the physical act of entry (paragraph 3) to the interior (paragraph 4). This spatial contraction mirrors an emotional intensification - each movement closer to the house brings Eleanor closer to the past it contains. The first paragraph\'s detailed description of decay functions as a temporal record: the faded paint, the cracked path, the strangled roses each represent eleven years of absence made visible. Paragraph two introduces interiority, and the structural pivot occurs at the gate: "She pushed open the gate" is the extract\'s moment of commitment, after which retreat is psychologically impossible. The simile of the gate scraping "like a long-held breath finally released" projects Eleanor\'s emotional state onto the physical environment. The key\'s history - compressed into a single sentence spanning eleven years and multiple cities - creates a narrative-within-a-narrative that contextualises the present moment. The final paragraph\'s shift from visual to olfactory detail ("dust and something sweeter") signals a transition from observation to immersion, while "as though entering a church" reframes the domestic space as sacred, conferring ritual significance on the act of return.',
    },
    '"The writer creates a powerful sense of loss and longing through the description of the abandoned house."\n\nTo what extent do you agree? Evaluate how the writer achieves these effects.',
    {
      'Grade 4-5':
        'I agree that the extract creates a strong sense of loss. The description of the decaying house - faded paint, cracked paths, overgrown garden - shows how time has changed everything. Eleanor clearly feels longing because she has kept the key for eleven years and cannot bring herself to throw it away. The smell of "her mother\'s perfume" inside the house is emotional because it suggests her mother has died. However, I think the extract also creates a sense of hope because the house seems to welcome Eleanor - the key turns "with surprising ease" and the house was "expecting her."',
      'Grade 6-7':
        'I substantially agree, though I would argue the writer creates something more nuanced than straightforward loss - a layered emotional state in which grief, nostalgia, and tentative reconnection coexist. The description of decay is not merely sad but temporally complex: the house has "continued to exist without her, ageing in real time while her memories of it remained frozen at seventeen." This insight - that memory preserves what reality does not - is the extract\'s emotional core. The key functions as the primary symbol of longing: carried for eleven years, it represents an attachment Eleanor cannot rationalise or relinquish. The phrase "too heavy with meaning to discard" is brilliantly ambiguous - "heavy" suggests both emotional weight and physical burden, implying that the past is simultaneously precious and exhausting. The personification of the house - "expecting her" - introduces a reciprocity that complicates simple loss: this is not merely a woman returning to an empty building but a relationship being renewed. The final detail of the mother\'s perfume is the most devastating because it exists at the threshold of perception: "perhaps" acknowledges that the scent may be imagined, that Eleanor may be constructing the comfort she needs from the materials of memory.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a character who returns to a place they have not visited for a long time.\n\nOr:\n(b) Write a description of an abandoned or neglected building.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '02',
    'The Storm',
    OCR_P2_02_EXTRACT,
    OCR_P2_02_EXTRACT_SOURCE,
    'Read the first paragraph. List four things you learn about the storm and the harbour.',
    '1. Waves reared up like grey horses and crashed against the harbour wall. 2. Spray was sent twenty feet into the air. 3. The fishing boats strained at their moorings. 4. The sky was a single unbroken sheet of iron pressing down on the world.',
    'How does the writer use language in paragraphs 2 and 3 to convey the anxiety of Ravi and his mother as they wait for news?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'The writer shows anxiety through physical details. Ravi\'s mother grips his arm "with a force that would leave bruises," showing how frightened she is. Her silence is described as holding something in - "a scream, perhaps, or a prayer" - which suggests she is barely controlling her emotions. The coastguard phrase "lost contact" is criticised by the narrator as being too casual, comparing it to losing a coin between sofa cushions, which shows how inadequate official language is for the reality of the situation.',
      'Grade 6-7':
        'The writer conveys anxiety through a tension between suppression and eruption. Ravi\'s mother\'s grip - strong enough to "leave bruises" - externalises internal terror through involuntary physical force. Her silence is the paragraph\'s most powerful technique: it is defined not as absence but as containment - "not the silence of calm but of a person holding something in." The tricolon of what she might be holding ("a scream, perhaps, or a prayer, or simply the knowledge") escalates from emotional release through spiritual appeal to intellectual acceptance, each option more devastating than the last. The aside about "lost contact" performs a crucial tonal shift: the comparison to "a coin that had slipped between sofa cushions" introduces dark humour that exposes the inadequacy of official language in the face of genuine crisis. The mundanity of the image - sofa cushions - creates a grotesque mismatch with the life-and-death reality, forcing the reader to feel the gap between bureaucratic euphemism and human terror.',
    },
    "How does the writer structure the whole extract to create and sustain tension?\n\nConsider how the writer's focus shifts and how structural choices create effects.",
    {
      'Grade 4-5':
        "The extract starts with a dramatic description of the storm, establishing danger. It then reveals that Ravi's father is out in the storm, which makes it personal. The third paragraph focuses on the mother's silent fear, slowing the pace. The final paragraph uses the lighthouse beam - four seconds of darkness, then light - to create a rhythm that mirrors the family's alternating hope and despair. The ending, with \"no boat. No light. Nothing but water,\" uses a three-part structure of negation to create a devastating sense of emptiness.",
      'Grade 6-7':
        'The extract is structured through a progressive contraction of scale - from the vast storm to the individual heartbeat - that simultaneously expands emotional intensity. Paragraph one establishes the physical threat through scale and force: waves "twenty feet," sky as "iron." Paragraph two introduces the human stakes: the father\'s absence transforms the storm from spectacle to danger. The structural pivot is the coastguard\'s "lost contact" - the phrase introduces informational void into the narrative, and the remaining two paragraphs exist within that void. Paragraph three narrows further to the mother\'s body - her grip, her silence - making the vast storm intimate. The final paragraph introduces the lighthouse as a structural device: the four-second rhythm (darkness, flash, darkness) creates a temporal pattern that organises both the narrative and the reader\'s experience. Each flash "revealed the same empty expanse," the repetition of negation performing the absence it describes. The final tricolon - "No boat. No light. Nothing but water" - strips away elements until only the destructive force remains: two clipped fragments of two words each, then a longer one that gives the sea the last word.',
    },
    '"The writer makes the reader feel the family\'s fear as intensely as if they were standing on the harbour themselves."\n\nTo what extent do you agree? Evaluate how the writer achieves this effect.',
    {
      'Grade 4-5':
        'I strongly agree. The writer uses sensory details - the sound of waves, the spray, the cold - to put the reader in the scene. The physical description of the mother gripping Ravi\'s arm makes her fear tangible. The lighthouse counting creates a rhythm that makes us feel like we are waiting too. The empty sea at the end ("No boat. No light.") gives us the same disappointment the family feels with each flash of the lighthouse.',
      'Grade 6-7':
        'I agree substantially, though I would argue the writer achieves this effect through identification rather than simulation - we feel with the characters rather than as them. The key technique is the translation of abstract emotion into physical sensation: fear becomes the mother\'s bruising grip; anxiety becomes Ravi\'s counting of lighthouse flashes. The reader does not experience the storm directly but through the mediation of characters whose responses are described with sufficient specificity to generate empathetic engagement. The lighthouse rhythm is particularly effective: by counting - "every four seconds" - the reader is drawn into Ravi\'s temporal experience, each cycle of darkness and revelation becoming a unit of hope and disappointment. The final paragraph\'s negations - "No boat. No light. Nothing" - work because the preceding description has created the expectation of revelation; each flash of light is a narrative promise that the final lines break. The reader feels not the physical fear of the storm but the psychological torture of waiting, which the writer conveys through structural repetition (the lighthouse cycle) and cumulative negation.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a time when someone waited anxiously for news.\n\nOr:\n(b) Write a description of a powerful storm.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '03',
    'Miss Havisham at Satis House',
    OCR_P2_03_EXTRACT,
    OCR_P2_03_EXTRACT_SOURCE,
    "Read the first paragraph. List four details the writer gives about Miss Havisham's appearance.",
    '1. She is dressed in satins, lace and silks, all of white. 2. Her shoes are white, although she has only one on. 3. She has a long white veil and bridal flowers in her hair. 4. Her hair is white. (Also acceptable: bright jewels sparkle on her neck and hands; her veil is only half arranged.)',
    'How does the writer use language in the second paragraph (from "It was not in the first few moments") to describe Miss Havisham?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'The writer uses the repeated phrase "I saw that" to show Pip slowly noticing more and more. The colours change: things that "ought to be white" have become "faded and yellow", which shows how old and decayed everything is. The simile "withered like the dress, and like the flowers" compares Miss Havisham to dead flowers, suggesting her life has dried up. The phrase "shrunk to skin and bone" shows she has become very thin. Pip compares her to "some ghastly waxwork" and "a skeleton", which makes her seem like a dead body. The idea that they "seemed to have dark eyes that moved and looked at me" is frightening, like a horror story.',
      'Grade 6-7':
        'Dickens builds the paragraph as a sequence of realisations, marked by the anaphora "I saw that", and each one replaces the first impression of whiteness with decay. What "ought to be white, had been white long ago" and is now "faded and yellow": the sentence moves through time, from what should be, to what was, to what is. The simile "withered like the dress, and like the flowers" makes the bride part of her own costume, one decaying object among others, and the only thing still bright in her is "the brightness of her sunken eyes", a paradox that makes her eyes the one living and unsettling feature. The contrast between "the rounded figure of a young woman" and a figure "shrunk to skin and bone" tells the reader, without explanation, that she has worn this dress since she was young. Pip then reaches for comparisons from his own childhood, introduced by the repeated "Once", and both are images of death on display: "some ghastly waxwork ... lying in state" and "a skeleton in the ashes of a rich dress". The paragraph turns on the word "Now", when these dead images come alive ("dark eyes that moved and looked at me"), and the short final sentence, "I should have cried out, if I could.", shows a child so frightened that he cannot make a sound.',
    },
    'How does the writer structure the extract to present Miss Havisham and her effect on Pip?\n\nConsider how the focus shifts and how structural choices create effects.',
    {
      'Grade 4-5':
        'The extract begins with a long list of what Miss Havisham is wearing and the objects around her, which makes the reader see the room through Pip\'s eyes. The second paragraph shifts from what Pip sees at first to what he realises: everything white has turned "faded and yellow". This change of focus shows that the first impression was misleading. The paragraph ends with Pip so frightened that he "should have cried out". Then the pace changes to short lines of dialogue, which makes the scene feel tense and sudden. Miss Havisham\'s command, "Come nearer; let me look at you. Come close.", brings Pip physically closer to her. The extract ends with the detail that her watch and the clock had "stopped at twenty minutes to nine", which suggests that time has stopped for her.',
      'Grade 6-7':
        'The extract is structured as a gradual approach, in which Pip moves closer to Miss Havisham while understanding more about her. The first paragraph is a still inventory: a list of white things ("satins, and lace, and silks") and scattered objects, ending with a long, loose sentence in which gloves, flowers and "a Prayer-Book" are "all confusedly heaped". The syntax itself is heaped, like the objects, suggesting a moment interrupted. The second paragraph reinterprets the first. The admission that Pip did not see everything "in the first few moments" signals a shift from sight to understanding, and the white of the first paragraph becomes "faded and yellow". The focus narrows from clothes to body to eyes, then widens into memory before snapping back with "Now". The dialogue that follows changes the pace completely. Its short lines, including Pip\'s hesitant "Come—to play.", contrast with the long descriptive sentences, and Miss Havisham\'s commands, "Come nearer; let me look at you. Come close.", draw him physically towards her. The final paragraph is structurally telling: only when Pip is closest, "avoiding her eyes", does he notice the stopped watch and clock. Dickens delays this detail to the end, and the repetition of "stopped at twenty minutes to nine" makes frozen time the last and most memorable image, one that hints at an explanation for everything the reader has seen.',
    },
    '"The writer makes Miss Havisham both terrifying and pitiable, and this combination is what makes the extract so powerful."\n\nTo what extent do you agree? Evaluate how the writer achieves these effects.',
    {
      'Grade 4-5':
        'I agree. Miss Havisham is terrifying because Pip compares her to "some ghastly waxwork" and "a skeleton", and because her "dark eyes" seem to watch him. Pip is so scared that he "should have cried out". But she is also pitiable. She is still wearing her wedding dress, which has "withered", and the stopped clocks suggest her life stopped at one terrible moment. The fact that the dress was made for "the rounded figure of a young woman" but she has "shrunk to skin and bone" makes the reader feel sorry for her. The mixture of fear and pity makes her a memorable character.',
      'Grade 6-7':
        'I largely agree, although the extract gives more room to terror than to pity, and the pity is something the reader feels more than Pip does. The terror comes through Pip\'s childish imagination. His comparisons are drawn from things he has been "taken to see", a "ghastly waxwork" and "a skeleton in the ashes of a rich dress", and the moment they seem to have "dark eyes that moved and looked at me" turns description into something close to a ghost story. Miss Havisham\'s commands, "Come nearer; let me look at you. Come close.", make her the one in control, and Pip\'s response is to avoid "her eyes". The pity comes through details Pip records without understanding. The dress was put on "the rounded figure of a young woman", so she has worn it for years; she has "but one shoe on" and her veil is "but half arranged", as if she was interrupted while dressing and never finished; and the clocks "stopped at twenty minutes to nine". An adult reader may piece together a wedding that never happened and a life that stopped with it. That gap between what the child sees and what the reader understands is what makes the combination so powerful: Pip is frightened of her, while the reader comes to be frightened for her.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a character who is trapped in the past.\n\nOr:\n(b) Write a description of a room that reveals something important about the person who lives in it.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '04',
    'The Journey North',
    OCR_P2_04_EXTRACT,
    OCR_P2_04_EXTRACT_SOURCE,
    'Read the first paragraph. List four things you learn about the landscape as the train travels north.',
    '1. The landscape grew starker with every mile. 2. Colours leached away to grey, brown, and deep black-green pines. 3. The gentle Borders hills gave way to harder angles of the Highlands. 4. Lochs appeared and disappeared like dark mirrors between the mountains.',
    "How does the writer use language in paragraphs 2 and 3 to convey Lena's feelings about returning home?\n\nAnalyse the effects of the language used.",
    {
      'Grade 4-5':
        'The writer shows complicated feelings through specific memories. The mother is described as having "seemed so capable, so organised, so entirely in control" - the repetition of "so" builds up an image that then collapses when debts are discovered. Lena telling her brother she was "leaving and would not be coming back" shows she left angrily. The phone call at "two in the morning" - described as "always the worst time for phone calls" - immediately creates dread. The word "things" in the final line of paragraph 3 is dismissive and shows how Lena resents reducing memories to objects.',
      'Grade 6-7':
        'The writer conveys Lena\'s emotional state through a tension between surface control and underlying grief. The second paragraph compresses three years of family trauma into a single sentence of escalating revelations: "the terrible week of arrangements and arguments" (practicalities), then "no will, no instructions" (abandonment), then "debts that none of them had suspected" (betrayal). The tricolon of the mother\'s apparent qualities - "so capable, so organised, so entirely in control" - uses anaphoric "so" to build an edifice of competence that the subsequent revelations demolish. The third paragraph\'s parenthetical - "always the worst time for phone calls, the hour when bad news is delivered" - performs a knowing, weary generalisation that reveals Lena\'s experience of crisis as pattern rather than exception. The word "things" in Duncan\'s reported speech is the paragraph\'s most loaded term: its deliberate inadequacy is challenged at once by the reflection that opens the next paragraph - "As though a childhood could be boxed up and carried away" - which rejects the material reduction of memory.',
    },
    "How does the writer structure the whole extract to convey the significance of Lena's journey?\n\nConsider how the focus shifts, the use of time, and any other structural features.",
    {
      'Grade 4-5':
        'The extract moves between the present (the train journey) and the past (memories of the funeral and family conflict). This structure shows that the physical journey is also an emotional one. The landscape getting "starker" mirrors Lena\'s mood as she approaches difficult memories. The extract begins with the journey, then moves into backstory, then returns to the present as the train arrives. The final paragraph - stepping into the cold - is both a physical arrival and an emotional one. The mountains being "unchanged and indifferent" contrasts with Lena\'s turmoil.',
      'Grade 6-7':
        'The extract operates through two intercut timelines - the present journey and the three-year backstory - whose convergence at the platform constitutes the narrative\'s structural climax. Paragraph one establishes the journey as both spatial and emotional: the landscape\'s progression from "gentle Borders hills" to "harder angles of the Highlands" provides a geographical correlative for Lena\'s progression towards confrontation. The second paragraph\'s temporal compression - three years in a single paragraph - creates narrative velocity that contrasts with the train\'s physical slowness. The third paragraph introduces the phone call, the proximate cause of the journey, and the word "things" triggers the extract\'s only moment of explicit interiority: the two fragments beginning "As though" expose the inadequacy of material solutions to emotional problems. The final paragraph returns to the present tense of sensation: "rain-streaked window," "the familiar sign," "the cold." The mountains\' indifference - "unchanged" - structurally counterpoints Lena\'s internal transformation, suggesting that the landscape will outlast whatever human drama she brings to it. The closing verb sequence - "gathered," "stood," "stepped" - is stripped to its minimum, prose itself becoming as spare as the landscape.',
    },
    '"The writer successfully creates a character whose emotions are complex and believable, even though the reader knows very little about her."\n\nTo what extent do you agree? Evaluate how the writer achieves this.',
    {
      'Grade 4-5':
        'I agree. We learn very little concrete information about Lena - her job, her personality, her life - but we understand her feelings deeply. The key detail is the way she left: telling her brother she "would not be coming back" suggests guilt and stubbornness. The way she resents the word "things" shows sensitivity. Her reluctance to return - "not because she wanted to" - shows the visit is painful. The fact that she pressed her forehead against the glass at the start suggests weariness and sadness. These small details build a convincing emotional portrait.',
      'Grade 6-7':
        'I agree emphatically, and I would argue that the complexity is achieved precisely through restraint - the writer reveals Lena\'s emotions through implication rather than statement. We are never told Lena feels guilty, but the detail of pressing her forehead against "the cold glass" in the opening - a gesture of exhaustion, self-punishment, or sensory grounding - allows the reader to infer it. The backstory is delivered without commentary: "told her brother that she was leaving and would not be coming back" is reported as fact, but the flat declarative tone conceals (and thereby reveals) the emotional violence of the act. The reflections on "things" - "As though a childhood could be boxed up and carried away. As though memory had a physical weight" - are the extract\'s most direct access to Lena\'s interiority, and they reveal a mind that processes experience through metaphor, that thinks in images rather than assertions. The final paragraph\'s physical actions - gathering, standing, stepping - replace interiority with behaviour, trusting the reader to understand that what Lena does not say is as significant as what she does.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a difficult journey.\n\nOr:\n(b) Write a description of a landscape seen from a moving train.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '05',
    'The Amazon Jungle',
    OCR_P2_05_EXTRACT,
    OCR_P2_05_EXTRACT_SOURCE,
    'Read the first paragraph. List four things you learn about the jungle environment.',
    '1. Light dimmed to a greenish twilight within twenty paces of leaving the river. 2. The canopy was so dense the sky was reduced to fragments of blue. 3. The air was thick, wet, and warm. 4. It carried a smell described as the smell of growth itself - things living, dying, decaying, and growing again.',
    'How does the writer use language in the second paragraph to convey the overwhelming nature of the jungle?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'The writer opens the paragraph with the short statement "Every surface was alive" to emphasise how much life surrounds them. The comparisons are vivid - vines hang "like the rigging of abandoned ships" which makes the jungle feel ancient and wild. Fungi are described in "almost architectural" shapes which is surprising because it compares nature to buildings. The insects are described in detail - ants "in disciplined columns," beetles "the size of a child\'s fist" - which makes the reader feel overwhelmed. The "high electric whine of mosquitoes" uses the word "electric" to suggest constant, irritating energy.',
      'Grade 6-7':
        'The writer constructs the jungle as a space of sensory excess through a catalogue technique that mirrors the environment\'s own overwhelming abundance. The declarative "Every surface was alive" establishes the principle of total saturation, and the subsequent inventory - moss, vines, fungi, ants, beetles, mosquitoes - demonstrates it across multiple kingdoms and scales. The simile "like the rigging of abandoned ships" introduces a maritime register that positions the explorers as sailors in an alien ocean, while "abandoned" suggests nature has reclaimed human structures. The description of fungi as "almost architectural" reverses the expected metaphorical direction - instead of nature resembling human construction, natural forms rival it, implying the jungle possesses its own sophisticated design. The insect catalogue escalates from orderly (ants in "disciplined columns") through monstrous (beetles "the size of a child\'s fist") to omnipresent (the mosquitoes\' "high electric whine"), creating a progression from admiration through unease to persistent discomfort. The adjective "electric" is precisely chosen: it connotes both energy and threat, the mosquitoes as live wires in the humid air.',
    },
    "How does the writer structure the extract to convey Henderson's experience of entering the jungle?\n\nConsider shifts in focus, pace, and perspective.",
    {
      'Grade 4-5':
        'The extract starts with the immediate physical experience of entering the jungle - the light dimming, the air changing. It then catalogues what Henderson sees around him in the second paragraph, building up detail. The third paragraph introduces the other character, Gupta, and shows them moving through the jungle. The structure moves from arrival to observation to reflection, with Henderson realising at the end that "nothing had prepared him." The final sentences slow the pace with the philosophical idea that the jungle "absorbed you" and "reduced you to a minor detail."',
      'Grade 6-7':
        'The extract is structured as a progressive surrender of human perspective to environmental dominance. Paragraph one establishes the jungle\'s terms of engagement: the spatial contraction ("within twenty paces"), the sensory transformation (light to twilight, clear air to thick humidity), and the temporal concept of "endless, accelerated cycle" signal that human scales of measurement are inadequate. Paragraph two expands the catalogue, moving from surfaces to organisms to the auditory omnipresence of mosquitoes - each sensory channel is successively overwhelmed. Paragraph three introduces human agency (Gupta cutting a path) only to demonstrate its futility: the undergrowth "closed behind them almost as fast as it was cut." Henderson\'s notebook - "already damp," his pencil "slipping" - provides a physical metaphor for the impossibility of imposing intellectual order on this environment. The structural climax comes in the final two sentences: the shift from external description to abstract reflection ("The jungle did not merely surround you; it absorbed you") performs the extract\'s central movement from observation to submission. The second-person "you" draws the reader into this surrender, and the final clause - "a minor detail in its own vast, indifferent narrative" - completes the structural reversal: Henderson, the nominal subject, becomes an object in the jungle\'s story.',
    },
    '"The writer powerfully conveys the sense that nature is far more powerful than human beings."\n\nTo what extent do you agree? Evaluate how the writer achieves this effect.',
    {
      'Grade 4-5':
        'I strongly agree. The jungle is presented as overwhelming in every way - the light, the smell, the heat, the insects. Humans seem small and helpless: Gupta\'s path closes behind them immediately, and Henderson\'s notebook gets wet. The final statement that the jungle "reduced you to a minor detail" directly says that humans are insignificant here. The phrase "vast, indifferent narrative" suggests the jungle has its own story that does not include humans.',
      'Grade 6-7':
        'I agree, and I would argue the writer achieves this effect through a systematic inversion of the exploration narrative. Traditionally, travel writing positions the explorer as subject and the landscape as object - something to be mapped, catalogued, described. This extract progressively reverses that relationship. Henderson arrives with his notebook and pencil - the tools of observation and recording - but the jungle resists documentation: the notebook dampens, the pencil slips. Gupta\'s machete carves a path that the jungle immediately reclaims. The verb "absorbed" in the final paragraph is the extract\'s key word: it implies not merely surrounding but incorporating, dissolving the boundary between observer and environment. The closing phrase "a minor detail in its own vast, indifferent narrative" completes the power inversion by assigning narrative agency to the jungle - it is the jungle that tells the story; humans merely appear in it briefly. The word "indifferent" is crucial: the jungle is not hostile but simply unconcerned, which is more devastating to human self-importance than hostility would be.',
    },
    "Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about an encounter with the natural world that changes a character's perspective.\n\nOr:\n(b) Write a description of a wild or untamed natural place.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)",
  ),

  buildOcrP2(
    '06',
    'The Girl Who Stopped Speaking',
    OCR_P2_06_EXTRACT,
    OCR_P2_06_EXTRACT_SOURCE,
    'Read the first paragraph. List four reasons Grace decided to stop speaking.',
    '1. She concluded that speaking was more trouble than it was worth. 2. Words were unreliable - they said one thing and meant another. 3. Words made promises they could not keep. 4. Words flew out of your mouth before you could catch them and did damage that could not be repaired.',
    "How does the writer use language in the second paragraph to present the adults' reactions to Grace's silence?\n\nAnalyse the effects of the language used.",
    {
      'Grade 4-5':
        'The writer lists different adults and their different reactions, which shows that nobody understands Grace. The mother says "a phase," the father says "attention-seeking," and the teachers say "a safeguarding concern" - each label is too simple. The psychologist is described kindly - "patient eyes and a cardigan the colour of porridge" - which is a warm, gentle image. The key point is that "none of them asked Grace why" - or rather they did, but "with words," which Grace sees as "the problem." This creates a circular logic that is both funny and sad.',
      'Grade 6-7':
        'The writer presents the adult responses as a satirical taxonomy of institutional failure. Each adult applies their professional framework to Grace\'s silence: the mother\'s "phase" is parental denial; the father\'s "attention-seeking" is patriarchal dismissal; the teachers\' "safeguarding concern" is bureaucratic protocol; the psychologist\'s "elective mutism" is clinical classification. The pattern reveals that each adult translates Grace\'s behaviour into their own language, which is precisely the problem Grace has identified. The psychologist is rendered with affectionate specificity - "a cardigan the colour of porridge" - the warm detail suggesting genuine kindness while the comparison to porridge connotes institutional blandness. The paragraph\'s most brilliant moment is the logical trap: adults asked why "with words, and Grace had already decided that words were the problem, so she answered with silence, which they interpreted as defiance." This circular reasoning is simultaneously comic and tragic - comic in its ironic logic, tragic in demonstrating the impossibility of communication when the medium itself has been rejected.',
    },
    "How does the writer structure the extract to develop the reader's understanding of Grace and her silence?\n\nConsider how the focus shifts across the three paragraphs.",
    {
      'Grade 4-5':
        "The three paragraphs each show a different aspect of Grace's silence. Paragraph one gives her reasons - she thinks words are unreliable and dangerous. Paragraph two shows how others react - adults try to label and fix her. Paragraph three shows the surprising result - silence turns out to be rich and revealing. This structure moves from negative (rejecting words) through conflict (adults' reactions) to positive (discovering what silence offers). The reader's understanding deepens with each paragraph, and by the end we are almost on Grace's side.",
      'Grade 6-7':
        'The extract is structured through a three-stage argument for silence that mirrors the form of a philosophical proof. Paragraph one presents the thesis: words are unreliable, destructive, and uncontrollable. The language is deliberately abstract, establishing Grace\'s reasoning without providing specific events - the reader must accept the principle before encountering its application. Paragraph two presents the antithesis: the institutional world of words responds to Grace\'s wordlessness with labels, diagnoses, and demands for explanation - all verbal interventions that inadvertently prove her point. The structural irony here is profound: the adults\' failure to understand Grace through language validates her rejection of language. Paragraph three presents the synthesis: silence is "not empty at all" but "extraordinarily full." This reversal is the extract\'s structural climax, and the subsequent catalogue of discoveries - faces changing when unobserved, the quality of four-o\'clock light, the distinct sounds of rain on different surfaces - provides the sensory evidence for what has been, until now, an abstract argument. The final sentence - "The world, it turned out, was a much more interesting place when you stopped narrating it." - functions as both conclusion and meta-commentary: the extract itself is a narrative about the limits of narrative.',
    },
    '"The writer makes the reader sympathise with Grace\'s decision to stop speaking and even admire it."\n\nTo what extent do you agree? Evaluate how the writer achieves this.',
    {
      'Grade 4-5':
        "I agree. At first, stopping speaking seems extreme, but the writer makes us understand Grace's reasoning. The description of words as unreliable and damaging rings true - everyone has said something they regret. The adults' reactions actually make us sympathise more with Grace because their labels seem inadequate and unfair. By the third paragraph, we admire Grace because she has discovered something beautiful in silence - the \"particular quality of light at four o'clock\" and the different sounds of rain. The extract makes us question our own relationship with words.",
      'Grade 6-7':
        'I agree that the extract creates sympathy and, more significantly, a form of intellectual respect for Grace\'s position. The writer achieves this through a careful rhetorical strategy that moves the reader from scepticism to understanding to near-agreement. Paragraph one\'s abstract reasoning invites doubt - the decision seems adolescent, dramatic. But paragraph two\'s catalogue of adult responses inadvertently validates Grace: every label applied to her silence ("phase," "attention-seeking," "safeguarding concern," "elective mutism") demonstrates the reductive inadequacy of institutional language, proving her point that words simplify and distort. By paragraph three, the reader has been prepared to receive Grace\'s discovery - that silence enables perception - as revelation rather than eccentricity. The sensory catalogue is crucial: the differentiation of rain sounds (skylight/window/leaves) is so specific and evocative that it constitutes proof of silence\'s value. The extract\'s most admirable achievement is that it uses language - its own medium - to argue for language\'s limitations, a paradox it acknowledges in the closing line: "The world, it turned out, was a much more interesting place when you stopped narrating it." is itself narration, and its self-awareness is what saves it from hypocrisy.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a character who makes an unusual or unexpected decision.\n\nOr:\n(b) Write a description inspired by this title: "Silence."\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '07',
    'The Frozen River',
    OCR_P2_07_EXTRACT,
    OCR_P2_07_EXTRACT_SOURCE,
    'Read the first two paragraphs. List four things you learn about the frozen river and the setting.',
    '1. The river had frozen solid for the first time in forty years. 2. The ice stretched from bank to bank. 3. It creaked and groaned like something alive and in pain. 4. Children had been forbidden from walking on it but all had done so anyway.',
    "How does the writer use language in the second paragraph to present Thomas's experience of standing on the ice?\n\nAnalyse the effects of the language used.",
    {
      'Grade 4-5':
        'Thomas is described as having "the particular fearlessness of boys who have not yet learned that the world can hurt them," which shows his innocence and vulnerability. Standing with "arms spread, face tilted to the white sky," he looks like he is embracing the world. The village is described as "small and temporary" from the ice, which makes Thomas feel bigger and more important. The understanding that "this moment ... would never come again" shows a surprising depth of feeling for a twelve-year-old. The repeated word "white" creates a sense of empty, pure beauty.',
      'Grade 6-7':
        'The writer constructs Thomas\'s experience as a moment of transcendence through language that elevates the physical into the philosophical. The opening description of his "particular fearlessness" is loaded with dramatic irony: the qualification "who have not yet learned that the world can hurt them in ways that do not heal" foreshadows the danger to come while establishing Thomas\'s current invulnerability as fragile and temporary. His posture - "arms spread, face tilted" - suggests both crucifixion and ecstasy, vulnerability and exaltation simultaneously. The view from the ice defamiliarises the familiar: the village is "small and temporary," the adjective "temporary" striking because villages are normally permanent. This perspective shift - seeing the solid world as impermanent - is the kind of insight that usually comes with maturity, but Thomas accesses it through sensation rather than thought. The repeated "white" (sky, hills, everything) creates a blankness that is both aesthetic and symbolic - a world emptied of detail, reduced to essential form. The final clause, "this moment - this precise arrangement of cold and light and silence - would never come again", attributes to Thomas an understanding of impermanence that the prose celebrates as wisdom even as the narrative is about to demonstrate its cost.',
    },
    'How does the writer structure the extract to create and then release tension?\n\nConsider how pace, focus, and structural choices contribute to the effect.',
    {
      'Grade 4-5':
        'The extract builds tension gradually: paragraph one describes the frozen river and the danger (children forbidden). Paragraph two slows down as Thomas walks to the centre and experiences the beauty of the moment. The short sentence "Then the ice cracked" suddenly changes everything. The final paragraph is fast-paced, describing Thomas running to safety. The structure moves from calm beauty to sudden danger to desperate escape. The contrast between the peaceful second paragraph and the violent third makes the crack feel even more shocking.',
      'Grade 6-7':
        'The extract is structured through a classical tension arc that depends on pace modulation for its effect. The first paragraph establishes context with narrative efficiency: setting, historical rarity, prohibition, transgression - four elements delivered in quick succession. The second paragraph radically decelerates: Thomas walks, stands, looks, understands - each verb a stage in a meditative experience. The prose itself slows, the long, clause-laden sentences mirroring the expansive, timeless quality of the moment. The structural pivot - "Then the ice cracked" - is devastating precisely because of this deceleration: the short sentence shatters the long ones as the crack shatters the silence. The specification "not beneath him" creates a momentary, false relief before the "splintering groan" restores and intensifies the danger. The final paragraph accelerates to match Thomas\'s panic: clauses pile up without periods, "and" connecting action to action in a breathless rush. The "adult hands, strong hands" that pull him to safety are syntactically anonymous - the urgency of the rescue leaves no time for identification. The final sequence - "gasping and shaking and alive" - uses the polysyndetic "and" to accumulate physical states, the last word, "alive," carrying the full weight of the alternative that has been narrowly avoided.',
    },
    '"The writer creates a memorable scene because it captures both the beauty and the danger of the natural world."\n\nTo what extent do you agree? Evaluate how the writer achieves these effects.',
    {
      'Grade 4-5':
        'I strongly agree. The beauty is in the description of the frozen landscape - white sky, white hills, everything white - and Thomas\'s feeling of invincibility. The danger is in the cracking ice and the terrifying run. What makes the scene memorable is how quickly beauty turns to danger - one moment Thomas feels invincible, the next he is running for his life. The short sentence "Then the ice cracked" is the most memorable part because it changes everything in four words.',
      'Grade 6-7':
        'I agree, and I would argue that the scene\'s power derives from the inseparability of beauty and danger - they are not contrasting elements but the same element experienced from different perspectives. The frozen river is beautiful because it is dangerous: its rarity (first time in forty years) is what makes it magical, and its fragility is what makes it lethal. Thomas\'s transcendent moment - feeling invincible, seeing the world as "small and temporary" - is made possible by the same ice that nearly kills him. The writer structures this duality through the figure of Thomas himself: his "fearlessness" is simultaneously his finest quality (it allows him to experience beauty) and his greatest vulnerability (it blinds him to risk). The phrase "who have not yet learned that the world can hurt them in ways that do not heal" is the extract\'s thematic key: it defines the moment as a threshold between innocence and experience, beauty and knowledge, standing on ice and knowing it can break. The scene is memorable because it captures not just an event but a universal human truth: that the most beautiful moments are often the most precarious.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story in which a character has a narrow escape.\n\nOr:\n(b) Write a description of a winter landscape.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '08',
    'The Prison Visit',
    OCR_P2_08_EXTRACT,
    OCR_P2_08_EXTRACT_SOURCE,
    'Read the first paragraph. List four details the writer provides about the prison visiting room.',
    '1. It smelled of disinfectant and vending-machine coffee. 2. Plastic chairs were bolted to the floor in rows of four. 3. Tables were barely wide enough for two cups. 4. Strip lighting cast a flat, clinical white that made every face look slightly ill.',
    'How does the writer use language in the second paragraph to convey the emotional atmosphere of the waiting room?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'The visitors "fidgeted, checked phones that would soon be confiscated", which shows anxiety. They "rehearsed the things they would say and the things they would not," which reveals the difficulty of these visits. The crying woman is described simply but powerfully. The boy\'s face has "an expression of studied indifference" - the word "studied" shows he is deliberately trying not to show his feelings. The phrase "the mask children wear when they are trying very hard not to feel anything at all" is moving because it shows how children protect themselves from pain.',
      'Grade 6-7':
        'The writer constructs the emotional atmosphere through a technique of observed particularity that reveals universal suffering through individual detail. The visitors\' collective actions - fidgeting, checking phones, rehearsing - create a choreography of anxiety, each gesture a different manifestation of the same dread. The phrase "the things they would say and the things they would not" uses parallelism to establish the prison visit as an exercise in careful selection - a conversation defined as much by its omissions as its content. The crying woman receives minimal narration - "tears running into the collar of her coat" - the physical specificity of the collar conveying grief without commentary. The boy is the paragraph\'s most powerful figure: "studied indifference" is an oxymoron that reveals the effort required to appear effortless, while the explanatory clause - "the mask children wear when they are trying very hard not to feel anything at all" - generalises from this boy to all children in this situation, creating a class of suffering. The word "mask" implies both concealment and performance, suggesting the boy is acting a role he has been forced to learn.',
    },
    "How does the writer structure the extract to build towards the moment when Maya sees her brother?\n\nConsider how focus shifts and how structural choices shape the reader's experience.",
    {
      'Grade 4-5':
        'The extract delays the meeting by first describing the room (paragraph 1), then the other visitors (paragraph 2), building anticipation. Paragraph 3 describes the prisoners entering as a group where they all look the same, which is dehumanising. Then "faces resolved into individuals" and the room transforms through recognition. Maya seeing her brother is held to the very end of paragraph 3. The final paragraph is about what Maya sees in her brother - he looks "older" - which shifts from physical description to emotional observation.',
      'Grade 6-7':
        'The extract is structured through a technique of progressive delay that mirrors the experience of waiting itself. Paragraph one describes the environment - empty of the people who matter. Paragraph two populates it with other visitors, each representing a facet of the experience Maya is undergoing. The crying woman and the boy are structural surrogates for Maya\'s own unseen emotions. Paragraph three introduces the prisoners through a deliberately dehumanising filter: "identical grey tracksuits," "the same shuffling walk," "the same downcast eyes" - the repetition of "same" enacts the institutional erasure of individuality. The structural turn - "Then faces resolved into individuals" - reverses the dehumanisation, the verb "resolved" operating like a camera finding focus. The room\'s reorganisation "around recognition" is a spatial metaphor for the emotional transformation that occurs when anonymous inmates become known people. Maya\'s recognition of her brother is held to the paragraph\'s final clause, a structural choice that forces the reader through the same process of waiting and searching. The final paragraph\'s observation - "older" not in years but "in some deeper, less measurable way" - shifts the register from external to internal, concluding with the devastating metaphor of incarceration as compressed time.',
    },
    '"The writer creates sympathy for people on both sides of the prison visit - the visitors and the prisoners alike."\n\nTo what extent do you agree? Evaluate how the writer achieves this.',
    {
      'Grade 4-5':
        'I agree. The visitors are shown suffering in different ways - the crying woman, the boy hiding his feelings, Maya\'s anxiety. The prisoners are shown as dehumanised by their identical clothing and forced to walk with "downcast eyes," which makes them seem powerless. Maya\'s brother has aged beyond his months, suggesting prison is destroying him. The writer never judges anyone - there is no mention of what the brother did, only the human cost of imprisonment on everyone involved.',
      'Grade 6-7':
        'I agree strongly, and I would argue the writer achieves this dual sympathy through a deliberate refusal to distinguish between the suffering of visitors and visited. The visiting room is itself the site of shared punishment: the disinfectant and strip lighting dehumanise everyone equally; the chairs bolted to the floor constrain visitors and prisoners alike. The boy\'s "expression of studied indifference", which Maya recognises as "the mask children wear", mirrors the prisoners\' "careful blankness" - both groups are performing emotional concealment, separated by a locked door but united by the same survival strategy. The prisoners\' entrance - "single file, wearing identical grey tracksuits" - creates sympathy through the depiction of enforced anonymity, the loss of individual identity that is incarceration\'s most intimate violence. The moment of recognition - when faces "resolved into individuals" and the room "reorganised itself" - is the extract\'s emotional climax because it simultaneously restores humanity and reveals its cost: Maya\'s brother has aged "a decade\'s worth of weariness in a single season." The writer achieves sympathy by refusing to moralise: no crime is mentioned, no judgement offered. The extract presents imprisonment as a human experience, not a moral category.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a meeting between two people who have been apart.\n\nOr:\n(b) Write a description of a waiting room.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '09',
    'Brixton Market',
    OCR_P2_09_EXTRACT,
    OCR_P2_09_EXTRACT_SOURCE,
    'Read the first two paragraphs. List four things you learn about Mrs Adeyemi and her stall.',
    '1. She has occupied the same three feet of pavement for twenty-seven years. 2. She runs her stall with the precision of a military operation. 3. Her plantains are legendary and fried in palm oil until the colour of dark honey. 4. People come from Peckham, Camberwell, and as far as Lewisham for her plantains.',
    'How does the writer use language in paragraphs 3 and 4 to create a vivid sense of place and character?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Mrs Adeyemi speaks in a warm, direct voice - "Oya, come" - which feels authentic and welcoming. The detail of her peeling a yam while talking, at "supernatural" speed, shows she is incredibly skilled and can multitask. Her description of Brixton\'s multicultural character - "We come from Jamaica, from Nigeria, from Ghana, from Portugal." - creates a sense of diversity. Her joke about food being "better than the trouble" shows her humour. The final paragraph uses sensory details - reggae, coconut, jerk chicken - to make the market feel alive and real.',
      'Grade 6-7':
        'The writer creates vivid place through a technique of layered sensory immersion combined with character voice. Mrs Adeyemi\'s direct speech - "Oya, come" - introduces a West African register that immediately establishes cultural specificity, while the parenthetical description of simultaneous yam-peeling at "supernatural" speed characterises her through physical skill rather than abstract adjectives. Her speech about Brixton is a compressed oral history: "We come from Jamaica, from Nigeria, from Ghana, from Portugal" uses anaphoric "from" to create a rhythm of migration, while "We bring our food, our music, our trouble" echoes the pattern with objects, the final "trouble" breaking the expected pattern of positives with knowing honesty. Her laugh - starting "deep in her chest" and working outward "until her whole body shook" - is described with the same sensory precision as the food, making character and commodity equally vivid. Paragraph four expands the frame to the market as totality: the sound system, the coconut seller with his machete, the weaving children - each detail adding a thread to a tapestry of multicultural commerce. The closing olfactory synthesis - "jerk chicken and exhaust fumes and, beneath everything, the sweet, starchy warmth of Mrs Adeyemi\'s plantains" - layers urban grit with culinary warmth, the plantains emerging as the sensory baseline of the entire place.',
    },
    'How does the writer structure the extract to build a portrait of Brixton Market and the people who make it?\n\nConsider how focus moves and how different elements are introduced.',
    {
      'Grade 4-5':
        'The extract starts broad - describing the market as a whole - then focuses on one person, Mrs Adeyemi. Paragraphs one and two establish her stall and reputation. Paragraph three introduces her voice and personality through dialogue. Paragraph four pulls back out to show the wider market around her. This zoom-in, zoom-out structure centres Mrs Adeyemi as the heart of the market while showing she is part of a larger, diverse community.',
      'Grade 6-7':
        'The extract is structured through a cinematographic technique: wide shot (the market as "riot of colour and noise"), close-up (Mrs Adeyemi\'s stall and methods), dialogue scene (her oral account of Brixton), and pull-back (the surrounding market). This focus modulation creates a portrait that is simultaneously individual and communal. The opening oxymoron - "organised chaos" - establishes the market\'s central paradox: apparent disorder concealing sophisticated systems. Mrs Adeyemi embodies this paradox: "the precision of a military operation and the warmth of a family kitchen" combines institutional efficiency with domestic intimacy. The transition from description to dialogue in paragraph three shifts the authority from narrator to subject - Mrs Adeyemi becomes the market\'s interpreter. Her speech is structurally placed at the extract\'s centre, making her voice the axis around which the portrait revolves. The final paragraph\'s return to environmental description completes the structure symmetrically - we began with the market and end with the market - but now the sensory details carry the human meaning that Mrs Adeyemi has supplied. The plantains, introduced in the second paragraph and named again in the final words, provide structural circularity.',
    },
    '"The writer brings Brixton Market to life so vividly that the reader feels they are standing there among the stalls."\n\nTo what extent do you agree? Evaluate how the writer achieves this effect.',
    {
      'Grade 4-5':
        'I strongly agree. The writer uses all five senses: the sight of bright peppers, the sound of reggae, the smell of jerk chicken, the texture of plantains ("the texture of silk"), and the taste is implied by the descriptions of food. Mrs Adeyemi\'s direct speech makes us feel we are hearing a real person. The specific details - a man in a yellow hat, coconuts split with a machete, children weaving between stalls - make the scene feel observed rather than invented.',
      'Grade 6-7':
        "I agree substantially, though the experience created is less literal presence than immersive characterisation - the reader does not merely perceive the market but understands it as a community with history, personality, and meaning. The writer achieves this through three integrated techniques. First, multi-sensory saturation: sound (reggae, Mrs Adeyemi's voice and laugh), sight (jewel-bright peppers, the man's yellow hat), smell (jerk chicken, exhaust fumes, plantains), and implied taste create a synaesthetic environment. Second, human specificity: Mrs Adeyemi's twenty-seven years, her peeling speed, her laugh - these are not generic market details but observed particularities that authenticate the scene. Third, cultural voice: Mrs Adeyemi's speech patterns (\"Oya, come\"), her humour, her pride - these give the market an identity that transcends physical description. The extract's deepest achievement is making the reader understand Brixton Market not as a place to visit but as a place to belong to.",
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story set in a busy, crowded place.\n\nOr:\n(b) Write a description of a place that is full of life and energy.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '10',
    'The Mountain Summit',
    OCR_P2_10_EXTRACT,
    OCR_P2_10_EXTRACT_SOURCE,
    'Read the first paragraph. List four things you learn about the experience at the summit.',
    '1. The mountain simply ended - there was no gradual transition. 2. Beyond it was an immensity of blue sky. 3. The altitude affected the air, making it thin and sharp. 4. The valley below was already lost in cloud.',
    'How does the writer use language in the third paragraph to convey the effect of the mountain experience on Kenji?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'The writer uses short, simple sentences - "You walked because the path went upward" - to show how simple life has become. This contrasts with Kenji\'s complicated life in London. The phrase "the concerns that had driven Kenji out of his flat" tells us he was running away from problems. The job loss and relationship ending are described very quietly - "a conversation so quiet it was barely audible" - which makes the pain feel understated and real. The word "irrelevant" shows the mountains have changed his perspective.',
      'Grade 6-7':
        'The writer presents the mountain\'s therapeutic effect through a rhetoric of reduction. The three declarative sentences - "You walked because... You ate because... You slept because" - strip human experience to its biological essentials, the anaphoric "You... because" creating a catechism of simplicity. The shift from third person ("Kenji") to second person ("you") is significant: it generalises his experience into a universal principle, suggesting that the mountain offers this clarity to anyone who seeks it. The parenthetical revelation of Kenji\'s motives - "the job he had lost, the relationship that had ended" - is structurally delayed, appearing only after the mountain has been established as a place of healing. The description of the break-up as "a conversation so quiet it was barely audible" is devastatingly understated: the quietness suggests not peace but the kind of controlled, exhausted despair that has moved beyond raised voices. The final assessment - "not resolved but irrelevant" - refuses the comfort of a healing narrative: the mountain has not fixed Kenji\'s problems but has demonstrated their insignificance, which is a more honest and therefore more powerful form of consolation.',
    },
    "How does the writer structure the extract to convey Kenji's experience of the mountain and its effect on him?\n\nConsider shifts in time, focus, and perspective.",
    {
      'Grade 4-5':
        "The extract starts at the summit - the destination - then looks back at the six-day journey, and finally reflects on what Kenji has left behind. This reverse structure starts with achievement and works backwards to explain why it matters. The focus moves from the physical landscape (paragraph 1) to the guide and the journey (paragraph 2) to Kenji's inner life (paragraph 3). This shift from external to internal mirrors how the mountain experience has turned Kenji's attention inward.",
      'Grade 6-7':
        'The extract is structured as a progressive interiority, moving from landscape to body to mind. Paragraph one presents the external world with almost overwhelming sensory force: the "immensity of blue," the "blazing white" snowfields, the valley "lost in cloud." This visual grandeur establishes the scale against which Kenji will measure himself. Paragraph two introduces the body\'s experience: "burning thighs," "aching shoulders," "wet socks in cold boots" - the descent from sublime landscape to physical discomfort is structurally deliberate, grounding transcendence in suffering. Dorje\'s minimal communication - "this way, not that way, drink, eat, rest" - models the linguistic reduction that Kenji will articulate in paragraph three. The final paragraph performs the extract\'s deepest structural movement: from the mountain to London, from the present to the past, from external landscape to internal landscape. The revelation of Kenji\'s motives - the lost job and the ended relationship - arrives only after the mountain has been established as a counter-reality, so that the reader encounters these urban sufferings from the altitude of the summit, already diminished by perspective.',
    },
    '"The writer suggests that being in nature can heal emotional pain, and the reader is convinced by this argument."\n\nTo what extent do you agree? Evaluate how the writer presents this idea.',
    {
      'Grade 4-5':
        'I mostly agree. The description of Kenji finding peace at the summit is convincing because the beautiful landscape and simple routines feel genuinely healing. The phrase "not resolved but irrelevant" is honest - the writer does not claim the mountain fixed everything, just that it changed Kenji\'s perspective. However, I notice that Kenji\'s problems are still waiting for him - the extract does not show what happens when he goes home.',
      'Grade 6-7':
        'I would qualify the statement significantly. The writer presents nature not as a healer but as a context for altered perspective - a distinction the text makes explicit in the phrase "not resolved but irrelevant, reduced to their proper insignificance by the scale of the landscape." The key word is "scale": the mountain does not address Kenji\'s suffering but demonstrates its relative smallness. This is not healing but displacement - and the writer seems aware of the difference. The therapeutic effect is conveyed through formal means: the shift from complex, clause-laden sentences (describing London life) to stripped, declarative ones (describing mountain life) enacts the simplification the mountain offers. Dorje\'s gestural communication - "this way, not that way, drink, eat, rest" - models a way of being that bypasses the linguistic complexity in which urban emotional life is entangled. Whether this constitutes genuine healing or temporary escape the extract does not resolve - the word "irrelevant" hovers between liberation and denial. The reader is convinced not that nature heals but that scale matters: that seeing one\'s problems from sufficient distance can transform their apparent significance, even if it cannot change their reality.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a character who travels to a remote place to escape from their problems.\n\nOr:\n(b) Write a description of a view from a high place.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '11',
    "Nana's Kitchen",
    OCR_P2_11_EXTRACT,
    OCR_P2_11_EXTRACT_SOURCE,
    "Read the first two paragraphs. List four things you learn about the kitchen and Nana's cooking.",
    '1. The kitchen was the heart of the house. 2. Nana stirred groundnut soup with a wooden spoon worn smooth by decades of use. 3. The soup was the colour of burnt amber. 4. Nana always knew when someone entered the kitchen without turning around.',
    'How does the writer use language in paragraphs 3 to 5 to present the relationship between Amara and her grandmother?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Amara is described as having "no interest in cooking, or in anything that required patience" which shows she is a typical impatient teenager. Her mother\'s warning that "Nana would not always be here" is emotional because it suggests Nana is old and will die. Nana\'s cooking method is described lovingly - crushing tomatoes with her palms because "a knife makes them angry" - which is funny and shows her personal, almost magical approach. The phrase "an inheritance passed from hand to hand" makes cooking sound like something precious being given from one generation to the next.',
      'Grade 6-7':
        'The writer presents the intergenerational relationship through a tension between Amara\'s adolescent resistance and the deeper significance she does not yet recognise. Amara\'s parenthetical self-description - "no interest in cooking, or in anything that required patience and the willingness to follow instructions" - is self-aware and slightly humorous, characterising adolescence as a general impatience with transmission. The mother\'s urgency - "Nana would not always be here, and that some things, once lost, could not be recovered from the internet" - introduces mortality and the limits of digital knowledge: the phrase "recovered from the internet" is poignant because it defines the boundary between information (reproducible, digital) and knowledge (embodied, mortal). Nana\'s method - crushing tomatoes by hand because "a knife makes them angry and angry tomatoes make bitter soup" - operates on multiple levels: as culinary instruction, as animistic philosophy, and as characterisation. The personification of tomatoes is whimsical but reveals a worldview in which cooking is relationship, not process. The final paragraph\'s distinction between "recipe" and "inheritance" is the passage\'s thematic climax: recipes are "written down, measured, reproducible," while what Nana transmits is "calibrated by instinct and memory" - knowledge that lives in the body and dies with the person.',
    },
    'How does the writer structure the extract to present the significance of the cooking lesson?\n\nConsider how focus develops and how structural choices convey meaning.',
    {
      'Grade 4-5':
        "The extract moves from the kitchen setting (paragraph 1) to Nana's awareness of Amara (paragraph 2) to Amara's reluctance (paragraph 3) to the actual cooking (paragraph 4) to a reflection on what is being passed on (paragraph 5). This structure builds slowly, delaying the actual cooking to establish context and emotion first. The final paragraph steps back from the action to reflect on its deeper meaning, making the reader understand this is about more than soup.",
      'Grade 6-7':
        'The extract is structured through a progressive deepening from the domestic to the cultural to the existential. The opening metaphor - "the kitchen was the heart of the house, and Nana was the heart of the kitchen" - establishes a concentric structure (house/kitchen/Nana) that the extract replicates: each paragraph moves closer to the centre of meaning. Paragraphs one and two establish the sensory and relational world of the kitchen. Paragraph three introduces the tension: Amara\'s reluctance versus the mother\'s urgency - and the mother\'s warning introduces death into a scene of nourishment, creating an emotional complexity that elevates the cooking lesson from domestic routine to cultural preservation. Paragraph four, the cooking itself, is structured as a catalogue of gestures: "a handful of ground peanuts, a precise shake of cayenne, the tomatoes crushed between her palms." The absence of measurements is structurally significant - what cannot be quantified cannot be written down. The final paragraph performs the extract\'s interpretive turn, moving from action to meaning: the distinction between "recipe" and "inheritance" reframes everything the reader has witnessed. The closing detail - "adjusted for the weather, the season, and the number of grandchildren expected for lunch" - domesticates the philosophical, reminding us that this inheritance is not abstract but lived.',
    },
    '"The writer makes the reader feel both the warmth of the kitchen and the sadness of knowing this knowledge could be lost."\n\nTo what extent do you agree? Evaluate how the writer achieves these effects.',
    {
      'Grade 4-5':
        "I strongly agree. The warmth comes from the detailed description of cooking - the smell of the soup, Nana's confidence, the funny idea of angry tomatoes. The sadness comes from the mother's warning and the final reflection that this knowledge cannot be written down or found online. The combination of warmth and sadness makes the extract very moving. We enjoy Nana's kitchen while knowing it will one day be empty.",
      'Grade 6-7':
        'I agree emphatically, and I would argue that the two emotions - warmth and anticipated loss - are structurally inseparable. Every detail that creates warmth simultaneously creates sadness because the reader knows, from the mother\'s warning, that this world is mortal. The worn wooden spoon is warm (evidence of decades of use) and sad (evidence of a practice approaching its end). Nana\'s unerring spatial awareness ("She always knew") is charming and poignant - a skill so refined it seems supernatural, and therefore irreplaceable. The tomato-crushing is the extract\'s most concentrated example: it is funny, tender, and culturally specific, and it is precisely the kind of knowledge that cannot survive Nana\'s death because it exists in her hands, not in any text. The final paragraph makes this explicit: the distinction between recipe and inheritance defines the loss the extract anticipates. The word "inheritance" carries legal connotations - something transferred from the dead to the living - and the impossibility of this transfer (because "instinct and memory" cannot be bequeathed) is the extract\'s deepest sadness. The reader is moved not by grief but by preemptive grief - the recognition that what is beautiful is also temporary.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a skill or tradition being passed from one generation to another.\n\nOr:\n(b) Write a description of a kitchen during a family gathering.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '12',
    'The Battlefield',
    OCR_P2_12_EXTRACT,
    OCR_P2_12_EXTRACT_SOURCE,
    'Read the first paragraph. List four things you learn about the battlefield after the fighting.',
    '1. It was quiet - a terrible, ringing silence that follows catastrophe. 2. What had been a wheat field was now a churned, cratered moonscape. 3. The earth was replaced by mud, metal, and unidentifiable remains. 4. The air smelled of cordite and something sweet and wrong.',
    "How does the writer use language in the second paragraph to convey Hargreaves's feelings as he searches for Ellis?\n\nAnalyse the effects of the language used.",
    {
      'Grade 4-5':
        'The writer says the search is "not an order," showing Hargreaves chooses to look for Ellis out of loyalty. The military word "missing" is explained as meaning "either captured, lost, or dead" - the writer calls these "careful euphemisms," criticising the army for avoiding the truth. The details about Ellis - his wife, daughter, allotment, runner beans, and dahlias - make him seem like a real, gentle person, which makes his possible death more painful. The phrase "he could not bring himself to leave this field without knowing" shows deep friendship.',
      'Grade 6-7':
        'The writer conveys Hargreaves\'s emotional state through a contrast between military language and personal memory. The parenthetical definition of "missing" - "which in the careful euphemisms of the military meant either captured, lost, or dead" - exposes institutional language as a mechanism of emotional avoidance, "careful" operating ironically (careful in its precision of concealment). Against this impersonal register, the writer sets the specificity of personal knowledge: Ellis\'s "wife, his daughter, his allotment in Derbyshire where he grew runner beans and dahlias." The descent from family (wife, daughter) to domesticity (allotment) to botanical detail (runner beans and dahlias) is structurally significant - it moves from the universal to the particular, from what any soldier might have to what makes Ellis irreplaceably himself. The dahlias are the passage\'s most devastating detail: a flower of no military relevance, mentioned in the middle of a battlefield, precisely because it represents the world that war interrupts. Hargreaves\'s refusal to leave "without knowing" is expressed through the negative - "could not bring himself" - suggesting the impulse is not heroic but involuntary, something deeper than duty.',
    },
    'How does the writer structure the extract to convey the experience of the aftermath of battle?\n\nConsider shifts in focus, contrasts, and the use of sensory detail.',
    {
      'Grade 4-5':
        "The extract starts with silence, which is unexpected for a battlefield. Then it describes the destroyed landscape. The second paragraph shifts from the battlefield to Hargreaves's personal mission, making the scene feel human rather than just military. The third paragraph introduces the stretcher-bearers and the singing boy, which provides a contrast to the destruction. The structure moves from emptiness (silence) to destruction (the landscape) to humanity (the search for Ellis) to tenderness (the singing boy), creating a complex emotional journey.",
      'Grade 6-7':
        'The extract is structured through a series of sensory and emotional contrasts that refuse to simplify the experience of war. The opening sentence defines the silence not as peace but as aftermath - "the terrible, ringing silence that follows catastrophe" - distinguishing it from other silences through the adjective "ringing," which suggests the noise of battle persists as phantom sensation. The first paragraph\'s landscape description uses defamiliarisation: a wheat field has become a "moonscape," the agricultural transformed into the extraterrestrial. The second paragraph shifts from landscape to human purpose, and the structure narrows from the vast destroyed field to the intimate details of one man\'s life - Ellis\'s dahlias. The third paragraph introduces the stretcher-bearers, whose "calm efficiency" offers a behavioural response to the sensory chaos of paragraph one. The singing boy is the extract\'s structural and emotional climax: a hymn on a battlefield, recognised "from school," collapsing the distance between innocence and experience, between the chapel and the crater. The word "incongruous" names the effect the writer has been building throughout: the extract is structured around incongruity - silence amid violence, flowers amid destruction, song amid death.',
    },
    '"The writer creates a powerful anti-war message without ever directly criticising war."\n\nTo what extent do you agree? Evaluate how the writer achieves this effect.',
    {
      'Grade 4-5':
        "I agree. The writer never says that war is wrong, but the description of the destroyed battlefield and the search for a missing friend make the reader feel the waste and sadness of war. The detail about Ellis's allotment and dahlias shows what war destroys - ordinary, peaceful lives. The singing boy is the most powerful anti-war image because it shows innocence in the middle of horror. The writer lets the reader reach their own conclusion rather than telling them what to think.",
      'Grade 6-7':
        'I agree emphatically. The writer achieves an anti-war effect through accumulation of detail rather than argument - the technique of showing rather than telling. The wheat field become moonscape is a silent indictment: agriculture (life) has been replaced by devastation (death), and the transformation requires no commentary. Ellis\'s dahlias function as synecdoche: they represent the entire world of domestic peace that war suspends and may permanently destroy. The stretcher-bearers\' "extraordinary gentleness" with "broken men" creates a devastating image of care within destruction - the human impulse to tend to each other surviving amid the institutional impulse to destroy each other. The singing boy is the extract\'s most powerful anti-war element: a hymn from school - from the institution that prepared these men for the world - sung on a battlefield that has destroyed the world school prepared them for. The word "incongruous" is the writer\'s only direct interpretive intervention, and it is precisely positioned: by naming the disjunction rather than moralising about it, the writer gives the reader the tools to construct the anti-war argument themselves. This technique is more effective than explicit criticism because it recruits the reader as co-author of the meaning.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a character searching for someone in a difficult or dangerous place.\n\nOr:\n(b) Write a description of a place that has been transformed by a dramatic event.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '13',
    'The Hidden Door',
    OCR_P2_13_EXTRACT,
    OCR_P2_13_EXTRACT_SOURCE,
    'Read the first two paragraphs. List four things you learn about the rain and its effects.',
    '1. It had been raining for three weeks without stopping. 2. The garden had become a lake with rose bushes emerging like masts of sunken ships. 3. Damp crept along the walls inside the house, painting maps of imaginary countries. 4. The windows ran with condensation that Sienna drew faces in.',
    "How does the writer use language in the second paragraph to convey Sienna's boredom?\n\nAnalyse the effects of the language used.",
    {
      'Grade 4-5':
        'The writer says Sienna was bored "comprehensively, existentially, with her whole body," which makes boredom sound like a serious physical condition. The listing of everything she has done - read every book, watched everything on streaming services, rearranged her room, argued with her brother - shows she has exhausted every option. The letter to the "weather gods" is funny and shows her frustration and creativity. The fact it is "dissolving in a puddle" is ironic because even her complaint is destroyed by rain.',
      'Grade 6-7':
        'The writer elevates boredom to a comic art form through hyperbolic accumulation and philosophical language. The adverbial sequence "comprehensively, existentially, with her whole body" escalates from scope (comprehensively - all-encompassing) through philosophy (existentially - touching the meaning of existence) to physicality (whole body), suggesting that boredom at this intensity transcends mental state and becomes embodied experience. The catalogue of exhausted activities - reading, streaming, rearranging, arguing, letter-writing - is structured as diminishing returns, each attempt more desperate than the last. The letter to the "weather gods" is the paragraph\'s comic centrepiece: it characterises Sienna as someone who responds to frustration with creative action rather than passive suffering. The closing detail - the letter "dissolving in a puddle on the front step" - operates as both comic bathos (the universe ignoring her appeal) and structural foreshadowing (dissolving boundaries between inside and outside, possible and impossible, that the door will literalise).',
    },
    'How does the writer structure the whole extract to build towards the discovery of the hidden door?\n\nConsider how pace, detail, and focus shift across the extract.',
    {
      'Grade 4-5':
        'The extract delays the discovery of the door by spending two paragraphs on the rain and boredom, which makes the discovery feel more surprising and important. The third paragraph slows down further with the long list of items in the cupboard - vacuum cleaner, Christmas decorations, ironing board - building suspense. The door itself is described carefully: small, dark wood, round brass handle, cold to the touch. The final two sentences are very short - "Sienna looked at it for a long time. Then she opened it." - which creates a dramatic pause before the moment of action.',
      'Grade 6-7':
        'The extract is structured as a funnel: wide context (three weeks of rain), narrowing circumstances (comprehensive boredom), specific discovery (the door), singular action (opening it). The first two paragraphs establish the conditions that make the discovery both necessary and meaningful - without the rain, there would be no boredom; without the boredom, there would be no exploration of the cupboard. The third paragraph performs the most sophisticated structural work: the accumulation of mundane objects (vacuum cleaner, Christmas decorations, ironing board) creates a deliberately prosaic context against which the door\'s appearance is startling. The door is described through a carefully ordered sensory sequence: size ("barely three feet high"), material ("dark wood"), detail ("round brass handle"), and sensation ("cold to the touch") - each specification increasing the reader\'s sense of the door\'s reality and strangeness. The final two sentences deploy pace as a structural tool: "Sienna looked at it for a long time" creates a temporal pause within the text that mirrors the character\'s hesitation, while "Then she opened it" - four words, echoing the one-word sentence "Rain." that opens the extract - performs the decisive act with a brevity that refuses to describe what lies beyond, leaving the reader suspended at the threshold of the unknown.',
    },
    '"The writer creates a convincing sense of magic emerging from the ordinary, everyday world."\n\nTo what extent do you agree? Evaluate how the writer achieves this.',
    {
      'Grade 4-5':
        'I strongly agree. The extract starts with very ordinary things - rain, boredom, vacuum cleaners - and gradually introduces something magical. The door appears in the most ordinary place possible: behind the ironing board in the cupboard under the stairs. This makes the magic feel more real because it is hidden within the familiar. The description of the damp painting "maps of imaginary countries" on the walls hints at magic before the door appears. The extract convinces the reader that wonder can be found in everyday places.',
      'Grade 6-7':
        'I agree, and I would argue the writer\'s technique is to prepare the reader for the fantastic through a progressive destabilisation of the ordinary. The rain itself operates as a liminal agent: it turns the garden into a "lake" (domestic space becoming aquatic), makes rose bushes resemble "masts of sunken ships" (garden becoming ocean), and brings the damp that paints "maps of imaginary countries" on walls (architecture becoming cartography). Each of these transformations is natural - rain genuinely causes flooding, damp genuinely creates patterns - but the figurative language infuses the natural with the fantastical. By the time the door appears, the boundary between ordinary and extraordinary has already been eroded. The door\'s location - behind a vacuum cleaner and an unused ironing board - grounds it in the mundane, but its physical properties (dark wood, round brass handle, cold to the touch) belong to a different register: fairy tale, Gothic, adventure. The final sentence\'s refusal to reveal what lies beyond the door is the extract\'s most important structural choice: it preserves the threshold between ordinary and magical as a space of pure possibility, which is where the power of the fantastic resides.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a character who discovers something unexpected in a familiar place.\n\nOr:\n(b) Write a description inspired by the title: "The Door."\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '14',
    'The Boxing Gym',
    OCR_P2_14_EXTRACT,
    OCR_P2_14_EXTRACT_SOURCE,
    'Read the first paragraph. List four things you learn about the boxing gym.',
    '1. It occupied the basement of a building that had been a warehouse, dance hall, and furniture showroom. 2. The ring was lit by four fluorescent tubes that buzzed and flickered. 3. The ropes were frayed and the canvas was stained. 4. Despite being terrible by any reasonable standard, it was the best place Marcus had ever known.',
    'How does the writer use language in paragraphs 2 and 3 to present the relationship between Coach Reeves and Marcus?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Coach Reeves is described as "built like a fire hydrant - short, wide, and apparently indestructible," which makes him sound tough and reliable. His philosophy - "Control yourself, and you control your world" - is simple but powerful. Marcus\'s anger is shown physically: "the anger in his jaw, the tension in his shoulders, the fists that clenched and unclenched." Coach Reeves\'s response - "Good. I can work with angry" - is short and confident, showing he is not frightened by Marcus\'s anger but sees it as material to shape.',
      'Grade 6-7':
        'The writer constructs the relationship through a rhetoric of transformation: raw material meeting skilled craftsman. Reeves is characterised through a simile of functional endurance - "built like a fire hydrant" - the comparison emphasising not beauty but utility and indestructibility. His biography is compressed into a single arc: "good enough for a British title shot but not quite good enough to win it" - the balanced clause captures a career defined by narrowly missed greatness, which paradoxically qualifies him as a teacher (those who almost succeeded understand both excellence and its absence). Marcus\'s anger is rendered as physical topography: "the anger in his jaw, the tension in his shoulders, the fists that clenched and unclenched at his sides." The movement from jaw to shoulders to fists traces anger\'s progression through the body, while "clenched and unclenched" captures the oscillation between containment and explosion. Reeves\'s response - "Good. I can work with angry" - is the text\'s most economical and revealing moment. The single-word sentence "Good" revalues anger from pathology to resource. "I can work with angry" uses the adjective as if it were a noun, an object to be shaped - the grammatical transformation mirroring the physical one that the gym will perform.',
    },
    "How does the writer structure the extract to present Marcus's transformation?\n\nConsider how time, focus, and description are organised.",
    {
      'Grade 4-5':
        "The extract starts with the gym (paragraph 1), then introduces Coach Reeves (paragraph 2), then tells Marcus's backstory (paragraph 3), and ends with his training (paragraph 4). This structure surrounds Marcus with his environment and mentor before explaining who he is. The backstory - being stopped by police three times - explains why Marcus is angry, and the training described in paragraph 4 shows how that anger is being channelled. The eight months of training are compressed into a list of activities, showing steady, patient progress.",
      'Grade 6-7':
        'The extract is structured as a narrative of conversion, moving from place (the gym) through mentor (Reeves) through crisis (Marcus\'s anger) to process (training). The opening paragraph establishes the gym as a space of paradox: "terrible" yet "the best" - a tension that prefigures Marcus\'s own transformation from destructive to disciplined force. Reeves\'s introduction in paragraph two provides the model of transformation: his own career arc (aspiration, near-success, coaching) demonstrates that failure can become vocation. Marcus\'s backstory in paragraph three introduces the proximate cause - the police encounter - through a specific, visceral detail: "hands against the wall, legs spread." This image of enforced submission is structurally inverted in paragraph four, where Marcus\'s body learns voluntary control. The temporal compression of paragraph four - "eight months of skipping, bag work, sparring" - accelerates through the process to arrive at its result: a body educated from "two speeds - still and explosive" to "something more nuanced, more controlled, more dangerous precisely because it was deliberate." The concluding paradox - more dangerous because controlled - completes the structural argument: discipline does not diminish power but refines it.',
    },
    '"The writer presents the boxing gym as a place of healing and transformation."\n\nTo what extent do you agree? Evaluate how the writer achieves this.',
    {
      'Grade 4-5':
        'I agree. Marcus arrives angry and dangerous, and the gym gives him a way to channel that anger. Coach Reeves does not try to remove Marcus\'s anger - he says "I can work with angry" - which means the gym accepts Marcus as he is. The training turns uncontrolled energy into disciplined skill. The gym itself, despite being physically unattractive, is "the best place Marcus had ever known," which shows it provides something money cannot buy. The extract presents boxing not as violence but as self-improvement.',
      'Grade 6-7':
        'I agree, though I would nuance the claim: the gym heals not by eliminating anger but by educating it. The crucial distinction is in paragraph four\'s description of a body that knew "only two speeds - still and explosive" learning to become "more nuanced, more controlled, more dangerous precisely because it was deliberate." "Dangerous" is not eliminated but refined - the gym does not produce pacifism but disciplined force. Coach Reeves\'s philosophy - "Control yourself, and you control your world" - redefines power as self-mastery rather than domination, and the physical training enacts this philosophy: skipping teaches rhythm, bag work teaches technique, sparring teaches restraint. The gym space itself is symbolically important: its multiple former identities (warehouse, dance hall, furniture showroom) make it a place of transformation, and its physical decrepitude (frayed ropes, stained canvas) suggests that healing does not require beautiful environments - only purpose. The police encounter that drives Marcus to the gym is the extract\'s darkest detail: a sixteen-year-old stopped by police "for the third time in a week", his anger both legitimate (response to injustice) and dangerous (might provoke worse consequences). The gym offers not escape from this reality but a means of surviving it with dignity.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a character who finds discipline or purpose through a challenging activity.\n\nOr:\n(b) Write a description of a place that is physically unattractive but emotionally important.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '15',
    'The Last Day of School',
    OCR_P2_15_EXTRACT,
    OCR_P2_15_EXTRACT_SOURCE,
    'Read the first paragraph. List four things you learn about the last day of school.',
    '1. The weather was beautiful, described as having a particular cruelty. 2. The sky was a deep, singing blue. 3. Year Eleven sat through their final assembly with restless energy. 4. Mrs Patterson was determined not to cry at the lectern.',
    "How does the writer use language in the second paragraph to convey the significance of Mrs Patterson's speech?\n\nAnalyse the effects of the language used.",
    {
      'Grade 4-5':
        'Mrs Patterson tells the students things "they would not understand for another decade," which suggests her wisdom comes from experience. Her advice about friendships being "more durable than they imagined, and more fragile" is a paradox that sounds wise and true. The statement that "failure was not the opposite of success but its prerequisite" turns a common assumption upside down. The phrase "people who never failed were the people who never tried anything difficult" challenges the idea that failure is bad. Her speech feels like a farewell gift of wisdom.',
      'Grade 6-7':
        'The writer presents the speech as a temporal paradox: wisdom delivered before its audience is equipped to receive it. The phrase "things they would not understand for another decade" establishes the speech as a time capsule, words whose meaning will only activate with experience. The paradox of friendships being simultaneously "more durable" and "more fragile" than imagined captures the genuine complexity of post-school relationships with precision. The redefinition of failure - "not the opposite of success but its prerequisite" - performs a rhetorical inversion that challenges the educational system\'s own values: a school\'s final message undermining the success metrics that school itself has imposed. The closing generalisation - "the people who never failed were the people who never tried anything difficult" - implicitly critiques a culture of risk-aversion, and its placement at the end of the school career gives it particular resonance. The cumulative effect is of a teacher using her last address to say what the institution would not normally permit: that the certainties school provides are provisional, and that what matters lies beyond its walls.',
    },
    'How does the writer structure the extract to convey the emotional significance of this moment of transition?\n\nConsider how different perspectives are used and how time functions in the text.',
    {
      'Grade 4-5':
        'The extract is structured around two perspectives: Mrs Patterson (the teacher) and Lily (the student). Mrs Patterson speaks about the future; Lily tries to hold onto the present. This contrast between looking forward and looking back creates emotional depth. The extract also plays with time - the beautiful weather suggests endings, the speech talks about a future decade, and Lily tries to memorise the present moment. The final simile, in which Lily\'s world is "about to dissolve, like sugar in water", makes ending feel both gentle and irreversible.',
      'Grade 6-7':
        'The extract is structured through a counterpoint of two temporal orientations: Mrs Patterson\'s future-facing speech and Lily\'s effort to preserve the present. This dual structure captures the fundamental tension of transition: the simultaneous pull of what lies ahead and what is being left behind. Mrs Patterson\'s paragraphs (1 and 2) address the future through generalised wisdom; Lily\'s paragraph (3) addresses the present through sensory specificity. The shift from abstract ("failure was not the opposite of success but its prerequisite") to concrete ("the exact shade of light on the hall floor") is structurally significant: it argues that meaning resides not in the teacher\'s wisdom but in the student\'s attention to what is being lost. Lily\'s catalogue of sensory details - light, hair, breathing, smell - constitutes an attempt to arrest time through observation, but the final simile - "dissolve, like sugar in water, into something that could be remembered but never reconstituted" - acknowledges the impossibility of this project. The word "reconstituted" is precisely chosen: sugar dissolved in water still exists (as memory exists) but cannot be recovered in its original form. The extract\'s deepest structural irony is that Mrs Patterson speaks of the future without visible emotion, while Lily, who "did not listen," understands the moment\'s significance more deeply than anyone present.',
    },
    '"The writer captures perfectly the bittersweet feeling of an ending that is also a beginning."\n\nTo what extent do you agree? Evaluate how the writer achieves this.',
    {
      'Grade 4-5':
        'I strongly agree. The extract is bittersweet because it combines sadness (the last time everyone will be together) with hope (Mrs Patterson\'s encouraging words about the future). The beautiful weather arrives with "particular cruelty" because it makes leaving harder. Lily\'s attempt to memorise everything shows how precious the moment feels. The simile of sugar dissolving captures the feeling perfectly - the sweetness remains but the form is gone forever. The extract makes the reader feel nostalgic even though these are not our memories.',
      'Grade 6-7':
        'I agree, and I would argue the writer achieves this through a formal strategy that enacts the experience it describes: the text itself is an attempt to preserve what it knows to be impermanent. Mrs Patterson\'s speech provides the "beginning" element - advice for the future, reframing failure as growth - while Lily\'s interior monologue provides the "ending" element - the sensory specificity of loss. The bittersweet quality emerges from their intersection: Mrs Patterson\'s wisdom is valuable because the world it prepares students for is genuinely exciting; Lily\'s grief is valid because what is ending is genuinely unrepeatable. The final simile - "dissolve, like sugar in water, into something that could be remembered but never reconstituted" - is the extract\'s most accomplished sentence. "Sugar in water" is a domestic, familiar image that captures dissolution as a gentle process rather than a violent one; the distinction between "remembered" and "reconstituted" identifies precisely where the loss occurs. The moment is not forgotten - it is transformed into a different state of matter. This is what the bittersweet quality means: the sweetness is preserved (in memory) but the form is lost (in time). The extract achieves universality because every reader has experienced this particular quality of loss - the ending that is sad precisely because what it ends was good.',
    },
    "Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a story about a character's last day in a place that has been important to them.\n\nOr:\n(b) Write a description of a moment of change or transition.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)",
  ),

  buildOcrP1(
    '16',
    'Archaeological Discovery and Cultural Heritage',
    OCR_P1_16_SOURCE_A,
    OCR_P1_16_SOURCE_A_REF,
    OCR_P1_16_SOURCE_B,
    OCR_P1_16_SOURCE_B_REF,
    'archaeology',
    'Read Source A. Identify four things the writer describes about the archaeological findings.',
    '1. The pottery was very old, older than Roman artefacts. 2. The settlement contained the remains of at least thirty structures spanning several centuries. 3. There was evidence of a sophisticated water management and storage system. 4. The team also found tools, coins, and a small iron brooch shaped like a bird.',
    'How does the writer use language in Source A to convey the significance of the discovery?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'The writer says the discovery began "not with ambition but with accident," which makes it seem like luck rather than planning. The pottery fragment is described as "so small it could fit in a child\'s palm," showing how something tiny became important. The word "meticulous" shows the careful scientific work. The writer emphasises patience by saying the analysis will take "another ten years," showing that real archaeological work is slow and careful.',
      'Grade 6-7':
        'Webb establishes the discovery\'s significance through a narrative of accident transformed into meaning. The opening paradox - "not with ambition but with accident" - positions the discovery as one that escapes the motivational frameworks of professional ambition. The pottery fragment, though "so small it could fit in a child\'s palm," is the text\'s activating object; its smallness is precisely the inverse of its importance. The move from material scale to historical significance is enacted through language: a "fragment" becomes evidence of "a settlement," which becomes evidence of a community "not merely surviving but thriving." The term "meticulous" applies not just to the method but to the ethical stance: three seasons of scrupulous work stands against the "temptation...to rush to conclusions." Webb\'s insistence on restraint - "I have resisted this impulse" - revalues patience as a virtue in an era of rapid discovery and rapid publication. The closing observation that understanding will take "another ten years at least" performs a form of professional humility.',
      'Grade 8-9':
        'Webb constructs an epistemology of restraint that privileges the object\'s temporal logic over the subject\'s. The discovery is framed as a rupture in expectation - the accidental encounter that disrupts methodological planning - yet the narrative\'s trajectory enacts a restoration of order through procedural patience. The pottery fragment functions as both metonymy (standing for the entire settlement) and paradox (its insignificance is its significance). The passage\'s central movement is from the subject\'s desire for discovery (the "temptation...to rush to conclusions") to the object\'s requirement for time ("another ten years at least before we can claim to understand"). This subordination of human temporality to archaeological necessity is linguistically enacted through the accumulation of future-directed conditions: "still being analysed," "still in the earth," "waiting for future archaeologists." The text performs epistemological humility not as a limitation but as a virtue; restraint becomes the marker of genuine scholarly practice.',
    },
    'Compare how the two writers view the relationship between human knowledge and the past.\n\nAnalyse and evaluate the arguments presented.',
    {
      'Grade 4-5':
        'Webb wants to understand the past through careful study. Bighton questions whether this is right. Webb sees archaeology as a way to learn history, but Bighton sees it as harming Indigenous peoples by taking sacred objects from the ground. Webb respects the slowness of his work, but Bighton argues that slow or fast, the act of removal is wrong. Webb treats the past as something to discover; Bighton treats it as something to protect and leave alone. Both writers are passionate but disagree fundamentally about whether knowledge is more important than respect.',
      'Grade 6-7':
        'Webb and Bighton present incommensurable epistemologies. Webb constructs knowledge as emerging through a process of careful extraction and analysis - the past as a text to be read through material remains. His narrative positions the archaeologist as servant to the object, a figure who waits for what the past reveals when given sufficient time. Bighton, by contrast, constructs knowledge gained through extraction as a form of theft: "these objects, removed from the earth where they rested for centuries or millennia, displayed behind glass for consumption by people who have no relationship to them." For Bighton, the ethical relationship to the past is one of preservation rather than extraction. The key rhetorical divergence is in how they frame the past itself: Webb treats it as epistemologically rich but materially available; Bighton treats it as spiritually sovereign and materially inviolable. Webb\'s closing statement - "I tell people it will take another ten years at least" - expresses confidence in the future yield of knowledge. Bighton\'s closing statement - "not everything that can be known should be learned" - is a fundamental challenge to the epistemological assumption underlying archaeology itself.',
      'Grade 8-9':
        'Webb and Bighton operate from opposed metaphysical foundations regarding the nature of temporality, ownership, and knowledge. Webb\'s text enacts a phenomenology of discovery: the past exists as a presence to be revealed through disciplined attention. His use of present and future tenses ("The pottery is still being analysed," "waiting for future archaeologists") constructs the past as existing in a state of temporal suspension, available for knowledge in perpetuity. Bighton\'s text enacts a phenomenology of violation: the past is not suspended but living, not available but sacred. His key rhetorical move is the transformation of epistemological language into language of theft: "these objects, removed from the earth where they rested for centuries or millennia, displayed behind glass for consumption by people who have no relationship to them." He then names it outright: "the weight of this theft". The crux of the disagreement concerns the metaphysical status of the extracted object: for Webb, a pottery shard is a text waiting to be read; for Bighton, it is an ancestral presence that cannot be alienated without violence. Bighton\'s closing conditional - "What if we valued preservation and protection over discovery and knowledge?" - is not a rhetorical question but a genuine interrogation of modernity\'s epistemological foundations. His final paradox - "This is not a call for ignorance. It is a call for humility" - revalues humility from a limitation of knowledge to a virtue of restraint.',
    },
    '"Archaeological knowledge is always worth the cost of excavation." How far do you agree? Evaluate this statement using both sources and your own understanding.',
    {
      'Grade 4-5':
        "I do not agree. Webb shows that archaeology requires patient work and respect for the objects being studied. But Bighton makes a powerful point: if the objects are sacred to Indigenous peoples, then removing them to a museum is not respectful - it is theft. Webb's careful work does not fix the problem that the objects should not have been removed in the first place. Bighton is right that some things should be left in the ground. Knowledge is not always worth the cost if the cost is spiritual harm to living people.",
      'Grade 6-7':
        'I partially agree, but with significant qualification. Webb demonstrates that archaeological knowledge is rigorous and valuable - an ancient settlement "not merely surviving but thriving", with "a sophisticated system of water management and storage" - this knowledge genuinely enriches our understanding of human history. However, Bighton\'s argument cannot be dismissed as merely sentimental. He identifies a real asymmetry: the knowledge that archaeology produces benefits archaeologists and museum-goers, while the cost - the removal of ancestral remains and sacred objects - falls on Indigenous communities. Webb\'s three-year excavation is justified by the promise of future knowledge, but nothing in his account asks who else might have a claim on what he digs up, which is exactly the question Bighton raises. The statement "Archaeological knowledge is always worth the cost" depends on who bears the cost and who reaps the benefit. For Webb, the calculation is clear: knowledge is worth patience and care. For Bighton, the calculation is not economic but ethical: some things are not negotiable, not available for trade-off against knowledge or profit.',
      'Grade 8-9':
        'The statement assumes a unified framework for evaluating "worth" that both sources fundamentally challenge. Webb constructs worth through the lens of epistemological productivity - the knowledge that emerges from careful analysis justifies the act of excavation and the temporal investment. His rhetoric of "meticulous" work and future understanding performs a familiar justification: the present cost yields future benefit. Bighton constructs worth through an ethical framework that challenges the commensurability implied by cost-benefit analysis. His key move is to reframe the "cost" not as an externality but as a direct harm: "spiritual violence," "theft." By doing so, he makes the calculation impossible - one cannot weigh knowledge against spiritual harm in a single calculus. The statement assumes its own conclusion by nominalising knowledge as something that has "worth" in a universal sense. Bighton asks the more fundamental question: worth to whom, and at what price? A genuine evaluation requires acknowledging that Webb and Bighton are not disagreeing about facts but about the frame in which facts acquire meaning. Webb\'s final restraint - "another ten years" - positions patience as a virtue within archaeological practice. Bighton\'s final paradox - "not a call for ignorance" - distinguishes between knowledge (which is valuable) and the extraction required to obtain it (which may not be). The most honest evaluation concludes that archaeological knowledge may be epistemologically valuable while remaining ethically problematic.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a piece presenting both sides of a controversial issue (similar to Sources A and B).\n\nOr:\n(b) Write an essay answering this question: "What do we owe to the past?"\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP1(
    '17',
    'The Value and Future of Public Libraries',
    OCR_P1_17_SOURCE_A,
    OCR_P1_17_SOURCE_A_REF,
    OCR_P1_17_SOURCE_B,
    OCR_P1_17_SOURCE_B_REF,
    'libraries',
    'Read Source A. Identify four reasons the writer gives for valuing the library.',
    '1. The library helps people find what they genuinely need, not always what they are looking for. 2. It provides children with the discovery that reading is a portal to other lives. 3. It offers elderly people resources to help them grieve. 4. It gives teenagers access to writers who speak to their experiences. (Also acceptable: It provides a space where people can exist without purchasing or justifying their presence.)',
    'How does the writer use language in Source A to convey her affection for the library?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'Foster uses poetic language to describe the library. She calls the silence "populated" by voices, which is a paradox - silence is usually empty, not full. She describes books as "a potential encounter with a person not yet met," making reading sound like a romantic adventure. She says people find "what they genuinely need" rather than "what they are looking for," suggesting the library provides something deeper than information. The physical description - "sagging bookshelves," "temperamental heating system" - is honest about the building\'s flaws but shows these flaws don\'t matter because what the library provides is not comfort but meaning.',
      'Grade 6-7':
        'Foster employs a rhetoric of paradox and spiritual presence to convey affection that transcends the building\'s material reality. The opening paradox - "The silence of the library is not empty" - establishes silence not as absence but as presence: "populated with the whispered voices of authors long dead." This personification of silence as inhabited space is the text\'s governing device; it converts a potentially negative feature (quiet) into a positive one (communion). The phrase "potential encounter with a person not yet met" transforms the reader\'s encounter with a book into an intimate human encounter; the book becomes a surrogate for connection. Foster\'s distinction between "what they are looking for" and "what they genuinely need" performs a kind of pastoral move, positioning the librarian as someone with deeper knowledge than the patron themselves. The cataloguing of patron experiences - "A child discovers...An elderly man finds...A teenager discovers" - is a form of lyrical inventory that converts functional service into transformative experience. Remarkably, the description of the building\'s material flaws - "sagging bookshelves," "temperamental heating system," "a budget that seems to diminish year after year" - does not undermine but strengthen Foster\'s affection. These details establish that the library\'s value is not aesthetic or economic but existential: it provides "the permission...to exist without purchasing, without performing, without justifying their presence."',
      'Grade 8-9':
        'Foster constructs affection through a systematic inversion of the very terms the opposition uses to dismiss libraries. Where Davies (Source B) emphasises cost-effectiveness, Foster privileges what cannot be quantified: permission, presence, encounter. Where Davies treats books as information (available digitally), Foster treats them as mediation (available only through the librarian\'s labour of care). The opening paradox - "The silence of the library is not empty" - sets up the text\'s central argument: that absence in one register (material abundance, contemporary sound, digital convenience) is presence in another (historical depth, contemplative space, human attention). The double gesture of Foster\'s affection is crucial: she acknowledges material limitations ("sagging bookshelves," "a temperamental heating system," "a budget that seems to diminish year after year") while arguing these limitations are irrelevant to the library\'s function. This refusal to meet Davies on economic ground - to argue that libraries are cost-effective or should be retained for efficiency - is strategically powerful. Instead, Foster relocates value to a domain Davies cannot penetrate: the existential permission to exist without economic justification ("without purchasing, without performing"). The phrase "encounter with a person not yet met" deserves particular attention; it constructs reading as an encounter with alterity (with a consciousness other than one\'s own) that is irreducible to information transfer. Foster\'s affection is not sentimental but structural: it emerges from a refusal of the economic rationality that measures value in efficiency.',
    },
    "Compare the two writers' arguments about the value of public libraries and their future.\n\nAnalyse and evaluate the arguments presented.",
    {
      'Grade 4-5':
        "Foster believes libraries are valuable because they provide community and human connection. Davies believes they are outdated because digital alternatives are cheaper and more accessible. Foster emphasises what libraries do for people (providing permission to exist, connecting them with books and librarians). Davies emphasises cost and efficiency. Foster argues that community cannot be replaced by digital platforms. Davies argues that digital platforms are actually better because they are available 24/7 and free from the cost of maintaining buildings and staff. They fundamentally disagree about what a library is: Foster sees it as a social space, Davies sees it as a service that can be delivered more efficiently digitally. Foster's argument is stronger because it recognises something Davies ignores: that not all value can be measured in money.",
      'Grade 6-7':
        'Foster and Davies operate from opposed axiologies - different systems for valuing social goods. Davies constructs value through market efficiency: libraries are "underutilised," with "ageing buildings" and "ageing staffs" that "cash-strapped councils can no longer afford." His argument is rigorously consistent within its own frame: if the goal is to deliver books to people at minimal cost, digital platforms are superior. Foster challenges the frame itself. By distinguishing between "accessibility" (which digital platforms provide) and "community" (which they cannot), she identifies what Davies misses: that a library is not primarily a distribution mechanism but a social space. Davies writes, "A library in 2024 is a solution to a problem that has largely been solved by technological progress," treating the library as functionally reducible to book distribution. Foster asks: what problem was a library ever solving? Not information access (which digital provides) but existential need: "the permission...to exist without purchasing, without performing, without justifying their presence." This is a profound reframing. Davies cannot argue against it within his own terms because he has already conceded that digital platforms are better at information delivery. Foster\'s challenge is to the entire concept of value as efficiency. She is perhaps weaker in addressing Davies\'s economic argument directly - she does not explain how councils should fund libraries if resources are genuinely scarce.',
      'Grade 8-9':
        'The disagreement between Foster and Davies is fundamentally about the nature of social value and whether some goods are intrinsically valuable beyond their functional utility. Davies employs a logic of substitution: if X (digital books) can do what Y (physical libraries) did, at lower cost, then Y is obsolete. This logic assumes that the function of a library is information delivery. Foster\'s entire argument is a refutation of this assumption. She argues that the library\'s primary function is not information delivery but the provision of a social space structured by care ("the librarians - the people who know the patrons, who make recommendations, who notice when someone has not been in for months and become concerned"). Davies dismisses the "community" argument as "sentimental". Foster doesn\'t deny the sentimentality; instead, she argues that the social space libraries provide is not dispensable. The crux is the question of substitutability. Can digital platforms substitute for the permission to exist without economic justification? Davies assumes yes; Foster assumes no. Here, Foster\'s rhetoric of paradox becomes strategically crucial: "accessibility is not the same as community." Davies cannot refute this because he has already conceded what accessibility means (24/7 digital access). Foster has redefined what libraries mean (not access but presence). There is a deep tension in Davies\'s position: he celebrates "technological progress" as if it were an unambiguous good, yet progress itself is a value judgment. Foster more honestly acknowledges that something genuine is lost when libraries close, even if something (information access) is gained. The strongest evaluation recognises that both writers identify real goods - efficiency and care, accessibility and presence - that may be genuinely in tension. Davies underestimates the cost of what is lost; Foster underestimates the cost of maintaining what cannot be justified economically.',
    },
    '"In a digital age, public libraries are a luxury we can no longer afford." How far do you agree? Evaluate this statement using both sources and your own understanding.',
    {
      'Grade 4-5':
        'I disagree. While Davies makes a good point about digital efficiency, Foster shows that libraries provide something digital cannot: human connection and community. A library is not just a service - it is a place where people feel they belong. If we measure value only in money, we lose something essential about what it means to be human. Libraries may seem expensive compared to digital platforms, but they are not a luxury in the sense of something unnecessary. They are a necessity for social wellbeing.',
      'Grade 6-7':
        'I partially disagree, though I acknowledge the genuine economic pressure that councils face. The statement assumes that "afford" is purely a question of money, but Foster challenges this: libraries provide something that cannot be provided digitally - the embodied experience of care and community. An elderly person might be able to access books digitally, but digital platforms cannot replicate the moment when a librarian notices they have not been in for months and becomes concerned. Davies is right that digital platforms are more cost-efficient, but he is wrong to assume that cost-efficiency is the only metric that matters. However, Foster is less convincing when she refuses to engage with the economic argument directly. If councils genuinely lack resources, Foster cannot simply assert that libraries matter; she needs to explain what should be cut instead. The honest position might be: libraries are valuable in ways Davies ignores, but they are also genuinely expensive, and society must make real choices about resource allocation.',
      'Grade 8-9':
        'The statement encodes a false equivalence: it assumes that affordability and value are commensurable, and that economic scarcity automatically resolves priority disputes. Both assumptions require scrutiny. Davies argues that digital platforms provide equivalent functionality at lower cost, ergo libraries are unaffordable luxuries. This logic is sound only if libraries and digital platforms truly are equivalent - if they do the same thing. Foster contends they do not: libraries provide an existential permission that digital platforms cannot replicate. If Foster is right, then the question of whether we can afford libraries is not fundamentally an economic question but a political one: given scarce resources, what do we value? Davies frames the question as technological substitution (digital replaces physical); Foster frames it as existential necessity (presence cannot be substituted). The strongest evaluation acknowledges that both frame-settings reveal something true: digital platforms genuinely do provide information access more efficiently, and libraries genuinely do provide something beyond information access. The statement is false if it assumes these things are equivalent; it is partially true if it recognises that economic pressure is real and that choices must be made. What is misleading is the claim that they are unaffordable luxuries - which implies they are dispensable. Foster is right that this framing is tendentious. But she is also naive if she imagines that making an existential argument exempts one from engaging with economic reality. The most rigorous position would be: libraries provide genuine social value that digital platforms do not, but they are also genuinely expensive, and society must consciously choose to fund them as a public good, not as an economic efficiency.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a persuasive piece arguing for or against the closure of a public service or institution.\n\nOr:\n(b) Write an article presenting a balanced view of a contemporary issue.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '16',
    'The Woodcraft Legacy',
    OCR_P2_16_EXTRACT,
    OCR_P2_16_EXTRACT_SOURCE,
    'Read the extract. List four things you learn about the workshop and its contents.',
    "1. The workshop had multiple distinctive smells: machine oil, sawdust, rust, and time. 2. The workbenches held tools arranged with precise order - chisels by size, hammers with worn handles, planes of different grades. 3. The walls were covered with sketches and design plans dating back to the sixties, some unfinished. 4. A hospital bed occupied the back corner so James's grandfather could watch the younger generation learn.",
    'How does the writer use language and imagery in the extract to convey the emotional significance of the workshop?\n\nAnalyse the effects of the language used.',
    {
      'Grade 4-5':
        'The opening describes the workshop smell as "unlike anywhere else in the world," which makes it sound precious and unique. The phrase "something like time itself, like all the decades of work condensed into the air" is poetic and presents time as something you can smell. The description of tools being arranged by system - "chisels arranged by size" - shows organisation and care. The hospital bed in the corner is emotionally powerful: it shows the grandfather wants to stay connected to the work even when ill. The simile of the grain "running like water" makes the wood seem alive. The phrase "Listen to the wood" suggests the grandfather teaches respect for materials.',
      'Grade 6-7':
        'The writer establishes the workshop as a space saturated with temporal depth. The opening paradox - smell "unlike anywhere else in the world" is "something like time itself, like all the decades of work condensed into the air" - transforms the workshop from a physical space into an archive of temporality. The workshop becomes a sensory museum of accumulated labour. The inventory of tools - "chisels arranged by size, hammers with worn wooden handles, planes of different grades" - functions as both practical catalogue and cultural artefact; the worn wooden handles carry the literal touch of past makers. The sketches on the walls, "some dating back to the sixties, some unfinished," enact a temporal layering: past designs coexist with future work. The detail that designs are "waiting for the maker\'s hands to return" positions the objects themselves as patient, anticipatory. Most significantly, the hospital bed in the back corner is not a defeat of the workshop space but an integration of it: the grandfather positions himself to "see the work continuing," making the workshop simultaneously a place of production and of witnessing, of life and of mortality. The phrase "Listen to the wood" is the text\'s ethical instruction: wood is not inert material but a substance with "its own character, its own requirements." The simile - grain "running like water" - invokes fluidity and natural force; the wood is not shaped by the maker but negotiated with.',
      'Grade 8-9':
        'The writer constructs the workshop through a phenomenology of inheritance: a space where temporal depth, material agency, and embodied practice converge. The opening olfactory catalogue - "machine oil, sawdust, rust, and something else, something like time itself" - performs a synesthetic translation: time becomes smell, abstraction becomes sensory. This move is crucial because it grounds the metaphysical (time) in the somatic (sensation), making time not something that passes but something you inhabit. The inventory of tools operates on multiple registers: practical (they are functional objects), archaeological (they are artefacts of practice), and educational (they are models for learning). The specification that tools have "earned" their places through use ("Every place had been earned through years of use") activates an ethic of labour: place is not assigned but acquired through persistent engagement. The sketches - some "unfinished, waiting for the maker\'s hands" - performatively enact the grandfather\'s absence: the waiting sketches wait specifically for him. The hospital bed detail deserves particular attention: rather than marking the grandfather\'s removal from the workshop, it positions him as still active in it, his body now part of the space\'s architecture. His insistence on placement where he can "see the work continuing" constructs the workshop as a relay of transmission: he will not make, but he will witness. The final instruction - "Listen to the wood, Grandpa Jack would say" - is the text\'s epistemological crux. It rejects a maker-centred phenomenology (the maker imposing vision on matter) for a relational one (the maker attending to material particularity). The simile of grain "running like water" invokes fluidity and natural force, positioning the wood as having its own direction, its own temporality.',
    },
    "How does the writer structure the extract to establish the emotional significance of James's arrival at the workshop?\n\nConsider how perspective, focus, and time are managed.",
    {
      'Grade 4-5':
        'The extract begins with James, who "stood in the doorway for a moment, not yet inside," which shows his hesitation and the threshold he is crossing. The first paragraph describes the smell of the workshop, which shows how strongly James feels its history. The second paragraph lists the contents of the workbenches and walls, gradually building detail. The third paragraph shifts to the emotional moment: for the first time in three weeks, the grandfather has not come down, and the workshop "felt the absence like a missing floor joist." This is when the reader understands why this moment matters. The final paragraph shows James returning to work, clamping the oak wood. The structure moves from external description (what the workshop is) to internal understanding (what it means that grandfather is absent). The final instruction - "Listen to the wood" - echoes what the grandfather taught, showing the teaching continues even in absence.',
      'Grade 6-7':
        'The extract employs a structure of deferred revelation that enacts the emotional significance of absence. The opening spatial positioning - "James stood in the doorway for a moment, not yet inside, hovering in that threshold" - establishes liminal space as emotionally charged. The threshold is not merely physical but existential: entry into the workshop is entry into relationship with the grandfather. The first two paragraphs are dominated by spatial and material detail: the "smell unlike anywhere else," the ordered tools, the sketches covering walls. This accumulation of sensory specificity and historical layering creates what might be called a charged space. The structure then performs a temporal rupture: "But this morning, for the first time in three weeks, Grandpa Jack had not come down." The word "But" marks the shift from description to crisis. The simile "felt the absence like a missing floor joist, structurally compromised, dangerous" activates architectural vocabulary that inverts presence and absence: absence is not void but presence of void, a structural problem that destabilises the whole. The final paragraph\'s return to work - clamping the oak, considering its grain - enacts a form of continuity-in-absence: James does the work the grandfather taught him. The closing phrase "Grandpa Jack would say" linguistically resurrects the absent teacher, making him present through speech. The structure thus moves from spatial threshold, through material inventory, through emotional rupture (absence), to embodied practice (woodworking as transmission of absence).',
      'Grade 8-9':
        'The writer orchestrates temporal and spatial structures to collapse the distance between presence and absence. The opening threshold - "not yet inside, hovering in that threshold between the street and the kingdom his grandfather had built" - frames entry into the workshop as entry into inherited territory, a space whose authority derives from the grandfather\'s decades of work. The indefinite temporality of the opening ("had built over sixty-seven years") establishes the workshop as a temporal accumulation, a space where past and present coexist. The first two paragraphs are exercises in detailed inventory: the structure is paratactic (item follows item) with minimal subordination, enacting a form of cataloguing that resembles meditation or prayer - a ritualistic dwelling on material particulars. This meditative accumulation is the structure\'s way of expressing presence: being in the workshop, as the writer experiences it through James, is an encounter with temporal density. The third paragraph performs a rupture that is simultaneously structural and existential: "But this morning, for the first time in three weeks, Grandpa Jack had not come down." The word "But" operates as a full caesura; everything before has been presence (the smell, the tools, the sketches), and everything after is framed by absence. The architectural metaphor - "felt the absence like a missing floor joist, structurally compromised, dangerous" - is profoundly significant: absence is not empty space but structural weakness, it destabilises the entire system. The final paragraph enacts a return to practice ("James walked to the vice") that is simultaneously a form of inheritance: he does the work the grandfather taught him. The closing image - "Listen to the wood, Grandpa Jack would say" - linguistically materialises the absent teacher through quoted speech, making absence itself a teaching tool. The structural movement is not from presence to absence but from presence-in-absence: the grandfather is most powerfully present when physically absent, present in the teaching that persists in James\'s hands.',
    },
    '"The writer presents the workshop as a space of connection across generations." To what extent do you agree? Evaluate how the writer achieves this effect.',
    {
      'Grade 4-5':
        'I strongly agree. The workshop is clearly a place where the grandfather teaches James woodcraft and values. The physical space - with the hospital bed in the corner - shows how the grandfather remains part of the work even when he is ill. The tools with their worn handles show generations of makers using them. The instruction "Listen to the wood" is passed from grandfather to James. The extract shows the workshop as a place where knowledge and care are transmitted from one generation to the next. Even when the grandfather is absent, his presence remains in the tools, the sketches, and the lessons James has learned.',
      'Grade 6-7':
        'I agree substantially. The writer establishes intergenerational connection through multiple devices. Materially, the tools function as bridges: "Every tool had a place. Every place had been earned through years of use." The tools carry the literal touch and practice of past makers. Temporally, the sketches - some "dating back to the sixties, some unfinished" - create a visual chronology spanning decades; unfinished designs wait "for the maker\'s hands to return", and with the grandfather absent the reader wonders whether James\'s hands will be the ones to finish them. The hospital bed is structurally significant: rather than removing the grandfather from the workshop, it positions him as witness to transmission, as the embodied presence of continuity. The dialogue - "Listen to the wood, Grandpa Jack would say" - shows knowledge as lived instruction, not abstract principle. However, the opening hesitation - James "not yet inside, hovering in that threshold" - hints at a tension: transmission is not automatic; James must choose to cross the threshold into the inherited space. The absent grandfather in the final moment complicates simple ideas of connection: the relationship persists despite physical absence, suggesting that connection is maintained not through proximity but through practice, through James continuing to do the work the grandfather taught him.',
      'Grade 8-9':
        'I agree, and I would argue the writer achieves this effect through a sophisticated understanding of how intergenerational connection operates not through sentiment but through material practice and temporal inscription. The tools are crucial: they are not merely metaphors for tradition but literal vessels of accumulated knowledge. The specification that they have "earned" their places signals that inheritance is not passive reception but active practice - each tool\'s location is earned through repeated use, generation after generation. The sketches on the walls function as a visual archive of interrupted desire: some unfinished designs "waiting for the maker\'s hands to return" create temporal bridges between past intention and future completion. The grandfather\'s positioning in the hospital bed - insisting on placement where he can "see the work continuing" - enacts a model of intergenerational relation where the elder witnesses but does not direct. His absence in the final moment is structurally significant: connection persists not through physical proximity but through internalised instruction ("Listen to the wood, Grandpa Jack would say"). The writer implies that the deepest form of intergenerational connection occurs precisely through the transmission of a way of attending to material - not rules but a sensibility, a habit of listening. The opening hesitation - James "hovering in that threshold" - marks the intergenerational connection as something that must be chosen, affirmed through practice. The final image of James working the oak, guided by his memory of his grandfather\'s instruction, enacts connection as ongoing practice, as the temporal relay of a way of being in the world. The writer\'s deepest achievement is the recognition that intergenerational connection is not something that exists; it is something that must be continually enacted through the work of the younger generation. The grandfather\'s illness, rather than severing connection, makes this enactment more visible, more necessary, more profound.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write a narrative or descriptive piece about a space where you have learned something important.\n\nOr:\n(b) Write about a moment when you understood the importance of something an older person had taught you.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),

  buildOcrP2(
    '17',
    'The Weight of Witness',
    OCR_P2_17_EXTRACT,
    OCR_P2_17_EXTRACT_SOURCE,
    "Read the extract. List four things you learn about Amara's thoughts or feelings at the start of the protest.",
    '1. She had never done this before - never stood in a street chanting or risked arrest. 2. She had never put her body between her beliefs and the machinery of the state. 3. Her mother had asked her not to come because of the danger - not from protesters or accidents but from police, cameras, and digital records. 4. She knew that participating would create data: surveillance footage, phone recordings, photographs, all searchable and retrievable.',
    "How does the writer use language to convey Amara's internal conflict as she stands at the start of the protest?\n\nAnalyse the effects of the language used.",
    {
      'Grade 4-5':
        'The writer shows Amara\'s nervousness through her heart: "Amara\'s heart accelerated" when the police appeared. The phrase "not truly believed it would happen" suggests she was in denial, or hoping it wouldn\'t come to this. Her mother\'s concern about "danger" is not about protesters or accidents but about "police", "cameras" and "the digital records" that will exist of her daughter, which is a modern kind of threat. The phrase "her body between her beliefs and the machinery of the state" is powerful; it shows she is putting herself in a dangerous position for what she believes in. The final sentence - "Amara knew that what she would breathe, in the hours ahead, would change the chemistry of her lungs, her blood, her sense of who she was" - is very dramatic and suggests this moment will transform her fundamentally.',
      'Grade 6-7':
        'The writer conveys internal conflict through a structure of temporal disjunction and escalating bodily awareness. The opening clause - "The protest had been planned for weeks, yet somehow Amara had not truly believed it would happen" - establishes a split between intellectual planning and emotional readiness. The word "somehow" signals a form of denial or disassociation. The enumerative structure of what Amara "had never done" - "never stood in the street chanting, never risked arrest, never put her body between her beliefs and the machinery of the state" - accumulates a sense of boundary-crossing, each act marking a threshold she has not yet crossed. The mother\'s concern, importantly, is not danger "from protesters or from accidents" but danger "from police, from cameras, from the digital records" - contemporary anxieties that turn protest into data, making the political act simultaneously an act of self-documentation. The contrast between her mother\'s generation ("you could protest and then disappear back into ordinary life") and Amara\'s ("protest created data") establishes a generational rupture in what protest means. The bodily language intensifies as the police appear: "Amara\'s heart accelerated," the "crowd\'s chanting grew louder," the "woman with the sign reached over and squeezed Amara\'s arm." These are not introspective moments but moments of increasing somatic intensity. The final image - "what she would breathe...would change the chemistry of her lungs, her blood, her sense of who she was" - performs a kind of bodily transformation; to participate is to be chemically altered, to become someone different.',
      'Grade 8-9':
        'The writer constructs Amara\'s internal conflict through a sophisticated play of temporal registers and bodily consciousness. The opening establishes a split between planning (temporal, future-oriented) and embodied presence (temporal, now): weeks of planning have not prepared her for the moment of actual standing. The phrase "not truly believed it would happen" is psychologically astute: it captures a form of protective disbelief, the mind\'s way of deferring the reality of the commitment. The tripled structure - "never stood...never risked...never put her body between her beliefs and the machinery of the state" - enacts a series of thresholds, each one progressively more dangerous. The final clause moves from action (standing, risking) to ontology (putting her body between beliefs and machinery): protest is framed as an act of bodily interposition, the body as barrier. The mother\'s warning introduces what might be called a post-modern anxiety: the danger is not physical violence but datification - the transformation of an act into record. The generational distinction - previous generations could protest and "disappear back into ordinary life," Amara\'s generation cannot escape the archive - identifies a fundamental change in the phenomenology of political action. The police appearance triggers an intensification of bodily awareness: "Amara\'s heart accelerated," which is involuntary, somatic, uncontrollable. The woman\'s touch and instruction - "Breathe," she said - is simultaneously practical and philosophical: one breathes in the present moment, cannot breathe in the past or future. The final image is the extract\'s most accomplished moment: "what she would breathe, in the hours ahead, would change the chemistry of her lungs, her blood, her sense of who she was and who she could become." This sentence performs a temporal and metaphysical transformation: breathing (the most basic, involuntary act) becomes the vehicle of self-transformation. To breathe the air of the protest, whatever it may carry in the hours ahead, is to internalise the event, to make it chemical, embodied, irreversible. The phrase "who she was and who she could become" enacts a split identity: participation is not a discrete action but a becoming, an ontological shift.',
    },
    'How does the writer structure the extract to build tension and convey the significance of this moment for Amara?\n\nConsider how description, perspective, and pacing create effect.',
    {
      'Grade 4-5':
        "The structure starts with Amara arriving at the protest and includes other protesters around her. This shows she is not alone, which is important to the meaning. The extract then moves through different perspectives: Amara's internal thoughts (her mother's warning), then external observation (the woman next to her, the boy on his father's shoulders), then the crowd's collective action (chanting growing louder), then the police appearing. This movement from inside Amara's head to outside observation to the broader crowd creates a sense of increasing scope and increasing danger. The pacing accelerates: the first paragraphs are longer and reflective, but as the police appear, sentences get shorter and more urgent. The final sentence is very long and complex, which slows down pacing again and suggests this moment has weight and consequence.",
      'Grade 6-7':
        'The writer structures the extract through a progressive widening of perspective that paradoxically intensifies focus on Amara. The opening establishes a subjective moment - Amara\'s disbelief that she is actually here - and the narrative perspective remains close to her consciousness. The second paragraph narrows further: "Her mother had asked her not to come," introducing an internal dialogue, a voice from elsewhere that haunts Amara\'s participation. The third paragraph shifts outward: "And yet here she was. The woman next to her ... a boy ... teachers and nurses ... families with children." This catalogue of other protesters moves from specific individuals to categorical types, suggesting the crowd is not homogeneous but diverse. Importantly, the catalogue is not from omniscient perspective but from what Amara observes, making the widening perspective still anchored in her consciousness. The pacing then accelerates: "A line of police in riot gear formed along the street ahead. Amara\'s heart accelerated. The crowd\'s chanting grew louder." Short declarative sentences create urgency. The woman\'s touch - "reached over and squeezed Amara\'s arm" - brings perspective back to intimate scale. The final sentence performs a temporal shift: from the immediate moment ("Amara knew") to a projected future ("would change the chemistry of her lungs"). This shift from present to future, from specific act to existential consequence, elevates the moment from discrete event to transformative threshold.',
      'Grade 8-9':
        'The writer orchestrates perspective, pace, and temporal register to construct the protest moment as simultaneously immediate and laden with historical consequence. The structure moves through a series of nested scales: individual (Amara\'s disbelief), familial (her mother\'s warning), collective (the crowd as diverse social cross-section), state (police), and finally back to individual (but transformed by the encounter with the collective and the state). This movement is not random but structurally significant: it enacts the way individual subjectivity is embedded in and traversed by larger social and political structures. The pacing strategy is sophisticated: the first three paragraphs maintain reflective, discursive pacing, with longer syntactical units and temporal depth ("for weeks," "in her mother\'s generation," "after fifty years"). This establishes what might be called historical consciousness: Amara\'s present act is contextualised within generational history. When the police appear, pacing accelerates: "A line of police in riot gear formed along the street ahead" is short and declarative. "Amara\'s heart accelerated" mirrors the syntactical pattern of the police formation - short, a subject and a verb - and the verb "accelerated" performs a kind of mimesis between external event and somatic response. The woman\'s instruction to "Breathe" introduces a countercurrent to the acceleration: breath as the most basic, life-sustaining act, paradoxically positioned as resistance to panic. The final image performs a kind of temporal collapse: the future ("in the hours ahead") is pulled into the present of the breath. The phrase "change the chemistry of her lungs, her blood, her sense of who she was and who she could become" moves from physiology (lungs, blood) to identity (who she was) to ontological possibility (who she could become). The structure thus achieves its deepest effect by suggesting that the historical moment - the protest, the police, the collective action - enters the body, alters the chemistry of selfhood, makes transformation inevitable and embodied.',
    },
    '"The writer conveys how political action transforms those who participate in it." To what extent do you agree? Evaluate how the writer achieves this effect.',
    {
      'Grade 4-5':
        'I agree strongly. The extract shows Amara before the protest (uncertain, influenced by her mother\'s fear) and at the protest (discovering her own courage and commitment). The other protesters - the woman whose sign says "Still Fighting After Fifty Years," the families with children - show that political action connects people across generations and backgrounds. The final sentence emphasises transformation: "what she would breathe...would change the chemistry of her lungs, her blood, her sense of who she was." This makes clear that participating in the protest will fundamentally change who Amara is. The writer shows political action as not just a political statement but as something that changes you as a person.',
      'Grade 6-7':
        'I agree substantially, though the transformation is portrayed as potential rather than completed. The opening establishes Amara as someone who "had never done this before," marking her as a novice to political action. Her mother\'s warning about "danger" is specifically about the permanent record that digital technologies create - this is not a risk Amara\'s mother\'s generation faced. This generational difference suggests that Amara\'s participation is not a simple repetition of her mother\'s politics but something qualitatively new. The other protesters she observes - the woman with fifty years of activism, the families, the workers in their uniforms - offer her a vision of a political community. However, the transformation the writer portrays is not straightforward empowerment. Rather, it is an increase in vulnerability and awareness: Amara understands, as she stands in the crowd, that "what she would breathe, in the hours ahead, would change the chemistry of her lungs, her blood, her sense of who she was and who she could become." This is not described as liberation but as alteration, a chemical and existential change. The woman\'s touch and instruction to "Breathe" suggests that this transformation occurs through embodied experience, not ideological conviction. The writer\'s deepest claim is that political action transforms you at the level of the body, the chemistry, the being - a transformation that is irreversible, that opens up "who she could become."',
      'Grade 8-9':
        'I agree, and I would argue the writer presents political transformation as a fundamentally somatic and ontological phenomenon, not merely a shift in consciousness or commitment. The extract establishes Amara as existing in what might be called a liminal state before the protest: planning has occurred intellectually ("for weeks"), but she "had not truly believed it would happen." This disjunction between intellectual commitment and embodied readiness positions her as not-yet-transformed. The mother\'s warning introduces what might be called a post-modern dimension to political transformation: the danger is not primarily physical but archival - the creation of permanent records that transform the political act into data. This digital permanence contrasts with the mother\'s generation, who could "protest and then disappear back into ordinary life." For Amara, there is no disappearing; the act leaves traces. The catalogue of other protesters - the woman, the boy, the various types of workers - presents what might be called a political imaginary: a vision of the political community Amara is joining. Importantly, these are not described as activists but as ordinary people - teachers, nurses, families - for whom political action is an expression of existing commitments, not a special identity. The crucial structural move comes with the police appearance: the transition from internal reflection to external confrontation marks the point where Amara\'s transformation accelerates from potential to inevitable. The woman\'s touch and instruction to "Breathe" is not sentimental comfort but an initiation into presence: to breathe the air of the protest is to internalise whatever it holds, to make it chemical, embodied, permanent. The final image - "what she would breathe...would change the chemistry of her lungs, her blood, her sense of who she was and who she could become" - performs what might be called a phenomenology of transformation. To participate is not to have an opinion but to be altered at the level of bodily chemistry, to become someone who has breathed this air, carried this experience. The phrase "who she could become" suggests that transformation is not completion but opening, the beginning of a different possible self. The writer\'s most radical insight is that political action transforms not at the level of ideology or identity but at the level of the body, the breath, the chemistry of existence.',
    },
    'Choose ONE of the following writing tasks:\n\nEither:\n(a) Write about a moment when you witnessed or experienced something that changed your understanding of the world.\n\nOr:\n(b) Write a narrative exploring the theme: "What it means to stand for something."\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
  ),
]
