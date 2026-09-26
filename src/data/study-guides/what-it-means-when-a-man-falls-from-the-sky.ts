import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * What It Means When a Man Falls from the Sky, Lesley Nneka Arimah (2017). A
 * COMPLETE guide: the text had no guide anywhere before this file. Cambridge's
 * 0475 syllabus for 2027 prints the title "What it Means When a Man Falls from
 * the Sky"; the book prints "What It Means...", and the guide uses that.
 *
 * THE COLLECTION IS IN COPYRIGHT and no licensed copy is held here, so the
 * guide test cannot check these quotations. Every quotation below was checked
 * on 26 September 2026 in the book itself, not in reviews, through two routes:
 * - Google Books search-within-volume on the publisher's ebook (Penguin /
 *   Riverhead, 2017, volume H-DODAAAQBAJ), whose snippets carry the printed
 *   page numbers used in this guide; and
 * - the Internet Archive's full-text search over two separate scans (items
 *   whatitmeanswhenm0000arim_u9m2, the Riverhead hardback, New York, 2017, 230
 *   pages; and whatitmeanswhenm0000arim_o5m4, which is catalogued under
 *   Riverhead but whose scanned copyright page is the Tinder Press one, ISBN
 *   9781472239617). The Tinder printing's page breaks mostly match
 *   Riverhead's but occasionally fall a page earlier (it ends a page at
 *   "scheming" in 'Glory', p. 197, and at "Ant is" in 'What Is a Volcano?', p.
 *   211), so UK readers may find a reference one page out.
 * A SECOND, INDEPENDENT CHECK on 26 September 2026 re-ran every quotation,
 * annotated phrase and quoted prose phrase through Google Books
 * search-within-volume and the Internet Archive full-text search service, and
 * re-checked the plot of every story against the book's own sentences (and,
 * for 'Light', 'Who Will Greet You at Home' and 'Glory', against the magazine
 * texts for plot only). It corrected a page number ("what nonsense...", p. 5),
 * the start of the first extract (p. 6), and removed two quoted words that are
 * not the book's: "undone" (used of the yarn baby, p. 93, not of Nneoma's
 * father) and "for her own protection" ('Redemption' says only that Mayowa is
 * "sent back to her mother in disgrace", p. 230).
 * Every key quotation, scene-card quotation and annotated phrase was found in
 * the ebook and in at least one scan, and so were the short phrases quoted in
 * the prose. Two are confirmed in the ebook and only partly in the scans,
 * because of typesetting: the first line of 'Windfalls' (its drop capital
 * defeats the OCR) and "Math is constant and absolute" (hyphenated across a
 * line break in both scans).
 * DROPPED: "When the fall begins, think of it as a dance" ('Windfalls', p. 79)
 * is in the ebook but could not be matched in either scan, so it is not used.
 * 'The Future Looks Good' was also read whole in the publisher's own excerpt on
 * penguinrandomhouse.com.
 *
 * THE RUNNING ORDER comes from the book's contents page (ebook, page PP9).
 * Wikipedia's list of the stories, which the set-text register repeated, has
 * 'Light' ninth and 'Glory' eighth and calls the title story "When a Man Falls
 * from the Sky". The book has 'Light' fourth, 'Glory' tenth, and the full title.
 *
 * MAGAZINE VERSIONS WERE READ FOR PLOT ONLY, never quoted. 'Who Will Greet You
 * at Home' (The New Yorker, 2015), 'Light' (Granta, 2015) and 'Glory'
 * (Harper's, 2016) are online, and the book revises all three: Granta's 'Light'
 * reads "something different than she is" where the book reads "something
 * other than what she is", and the New Yorker's "unravelled" is the book's
 * "unraveled". Quote the book.
 *
 * DETAILS THAT SUMMARIES ONLINE GET WRONG, so the next editor does not
 * reintroduce them:
 * - Shiny New Books names the daughter in 'Windfalls' Graceline. That is one of
 *   the false names her mother uses (p. 85); the story says her real name is
 *   Amara (p. 82).
 * - Nneoma lives in the Biafra-Britannia Alliance (p. 153); New Kenya is where
 *   Kioni worked.
 * - Nneoma's mother has already died when the title story opens (p. 167).
 * - The final fall in 'Windfalls' is a real accident (a puddle of melting ice
 *   cream "one boy left behind", p. 90), not one of the staged falls.
 *
 * PAGE NUMBERS are to the Riverhead edition. The Tinder Press (UK) edition
 * was not seen and may be paginated differently, so every reference also names
 * the story and the moment.
 */
export const guide: StudyGuide = {
  slug: 'what-it-means-when-a-man-falls-from-the-sky',
  title: 'What It Means When a Man Falls from the Sky',
  author: 'Lesley Nneka Arimah',
  form: 'short-story-collection',
  scope:
    "The whole collection: twelve short stories, first published together in 2017. It is set for Cambridge IGCSE Literature in English (0475), Paper 1 Section B (Prose), in the syllabus for examination in 2027, where the title is printed ‘What it Means When a Man Falls from the Sky’; the book itself capitalises ‘It’. In the book's order the stories are ‘The Future Looks Good’, ‘War Stories’, ‘Wild’, ‘Light’, ‘Second Chances’, ‘Windfalls’, ‘Who Will Greet You at Home’, ‘Buchi's Girls’, ‘What It Means When a Man Falls from the Sky’, ‘Glory’, ‘What Is a Volcano?’ and ‘Redemption’. Paper 1 is closed-book: you may not take the book into the exam room, the relevant passage is printed on the paper, and there is a choice of two questions on each text. A passage can come from any of the twelve stories, so this guide covers all of them, with most depth on the title story, ‘Who Will Greet You at Home’, ‘Light’, ‘The Future Looks Good’ and ‘Glory’. Page numbers are to the Riverhead edition (New York, 2017); the Tinder Press edition published in the UK may be paginated differently, so each reference also names the story and the moment.",
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Lesley Nneka Arimah 2017. Published by Riverhead Books (New York) and Tinder Press (London). Short quotations are used for the purposes of criticism and review.',
  },
  workLength: {
    words: 45000,
    basis:
      "Estimated, not counted: no licensed copy is held to count. The stories fill pages 1 to 230 of the Riverhead edition. Four stories were counted in full from the publisher's excerpt and the magazine versions: 'The Future Looks Good' (about 1,600 words over pages 1-8), 'Light' (about 2,000 words, pages 55-63), 'Glory' (about 5,000 words, pages 175-199) and 'Who Will Greet You at Home' (about 5,600 words, pages 93-121). That is roughly 200 words a page, or about 45,000 words for the collection. Any figure above 3,000 words puts the book under the long-work limit, so the estimate cannot loosen the quotation limits. The guide also keeps what it quotes from any single story small, because each story is a complete work: 'The Future Looks Good' is only about 1,600 words long.",
  },

  overview: {
    summary: [
      'Twelve stories, set in Nigeria, in the United States and in two worlds that do not exist: a future Africa where refugees from a drowned Europe and North America have arrived, and a mythic time when gods quarrel over anthills. They range from close family realism to magical realism, science fiction and fable, sometimes within a single story, but almost all of them turn on the same relationships: mothers and daughters, fathers and daughters, sisters, and the people who hold power over girls. Several carry the long shadow of the Nigerian Civil War of 1967 to 1970, the war over Biafra.',
      "The collection opens with ‘The Future Looks Good’, eight pages that trace three generations of a family back through the war before ending with a shock. ‘War Stories’ sets a schoolgirl's bid for playground power beside the stories her father, a Biafran veteran, tells over chess. ‘Wild’ sends an American teenager to stay with her aunt and cousin in Lagos. ‘Light’ follows a father in Port Harcourt who cannot bear to see his bold daughter dimmed. In ‘Second Chances’ a dead mother steps out of a photograph, and in ‘Windfalls’ a mother trains her daughter to fake falls in supermarkets for compensation.",
      "At the centre are the stories most often discussed. In ‘Who Will Greet You at Home’, women make babies out of materials and have them blessed into life by their mothers, and a poor young hairdresser's assistant, Ogechi, secretly makes one from other women's hair. ‘Buchi's Girls’ follows a widow living on her sister's charity. In the title story, a mathematical formula has made it possible to remove grief from a person, and a grief worker, Nneoma, begins to see what that costs. ‘Glory’ follows an unlucky young woman in a Minneapolis call centre who meets the perfect Nigerian man. ‘What Is a Volcano?’ is a myth about a feud between the goddess of rivers and the god of ants, and ‘Redemption’ ends the book with a girl who throws things.",
      'Arimah rarely tells the reader what to think, and many endings are open or abrupt. The strongest answers treat the collection as a set of variations on a theme rather than twelve separate plots: notice how often a girl is punished for being bold, how often love is paid for in some other currency, and how the fantastic stories make ordinary pressures visible by making them literal.',
    ],
  },

  context: [
    {
      heading: 'Lesley Nneka Arimah',
      body: "The author note in the book says Arimah was born in the UK and grew up in Nigeria, and her publisher adds that she moved from Nigeria to Louisiana at the age of thirteen. She later took a master's degree in creative writing at Minnesota State University, Mankato, and was living in Minneapolis when the collection came out, which is where ‘Glory’ is set. Several of the stories appeared in magazines first, and they won her attention quickly: ‘Light’ won the Africa region of the Commonwealth Short Story Prize in 2015, the title story was shortlisted for the Caine Prize for African Writing in 2016 and ‘Who Will Greet You at Home’ in 2017, and ‘Glory’ won an O. Henry Prize in 2017. In 2019 she won the Caine Prize itself, for a story called ‘Skinned’, which is not in this collection. Do not confuse the stories: only the twelve listed in the scope are set.",
    },
    {
      heading: 'The collection and how it was received',
      body: "What It Means When a Man Falls from the Sky was Arimah's first book, published in April 2017 by Riverhead Books in the United States and Tinder Press in the UK. Seven of the twelve stories had appeared in magazines first: the book's copyright page lists the Mid-American Review, Granta, The Butter, The New Yorker, Five Points and Catapult, and ‘Glory’ appeared in Harper's Magazine in March 2016. In 2017 the book won the Kirkus Prize for Fiction and the National Book Foundation named Arimah one of its ‘5 Under 35’ writers; in 2018 the book won the New York Public Library's Young Lions Fiction Award and was shortlisted for the Aspen Words Literary Prize. Reviewers praised its range and its control. The New York Times Book Review praised her as a witty and mischievous storyteller, and NPR's reviewer noted that the stories reward rereading. It is dedicated to her father, with thanks for the stories he told her, which is worth remembering when you read ‘War Stories’, though nothing in the book says that story is autobiography.",
    },
    {
      heading: 'Biafra and the Nigerian Civil War',
      body: "In 1966 Nigeria, independent from Britain since 1960, went through two military coups and a wave of killings of Igbo people in the north; many survivors fled to the Igbo-majority east. On 30 May 1967 the military governor of the Eastern Region, Lieutenant Colonel Chukwuemeka Odumegwu Ojukwu, declared it the independent Republic of Biafra. The war that followed lasted from July 1967 to January 1970 and ended in Biafra's defeat. The federal government blockaded the region, and estimates of the civilians who died, most of them from starvation, range from half a million to two million. Arimah's stories are set long after, but the war has not finished with her characters. ‘The Future Looks Good’ reaches back to 1966 and has a girl named Biafra “out of spite”; the father in ‘War Stories’ is a veteran whose last story ends in silence; and in the title story, set in the future, a revived Biafra has made an uneasy alliance with Britain.",
    },
    {
      heading: 'Nigerian families on two continents',
      body: "Half the stories cross between Nigeria and America. Ada in ‘Wild’ is an American teenager sent back to Lagos; the mother in ‘Light’ studies for an MBA in the States and later sends for her daughter; Glory's parents moved to the US when she was a small child and still measure her against the life they imagined for her. Arimah is interested in what does not travel well: expectations about how a girl should sit, speak, dress and marry, and the way distance turns family members into near-strangers. She is equally sharp about class. Ogechi is too poor to afford the materials richer women use for their babies, Buchi depends on her sister's charity, and in the title story's future, class decides who can pay to have their grief removed as surely as the floods decided who lost their country.",
    },
    {
      heading: 'Magical realism, speculative fiction and myth',
      body: 'Several stories introduce something impossible and then treat it as ordinary: babies woven from wool or hair, a dead woman stepping out of a photograph, a formula that can take grief out of a body. Critics call this magical realism when the impossible sits inside a recognisable world, and speculative fiction when, as in the title story, a whole future society is imagined. Arimah told The New Yorker that the idea behind ‘Who Will Greet You at Home’ was “a myth of my own invention”, and that she was drawn to magical realism because she could put a very human desire into a supernatural world and “watch humanity become grotesque”. She also said she did not aim for allegory. So read the fantastic elements as a way of putting pressure on characters, not as a code with one correct answer. ‘What Is a Volcano?’ goes further back, into the form of a traditional origin tale that explains how something in nature came to be.',
    },
    {
      heading: 'Girls, marriage and motherhood',
      body: "Arimah said in the same interview that one concern that seeped into ‘Who Will Greet You at Home’ was the insistence, which she called zealous, that young Nigerian women must marry and have children as soon as possible to give their lives purpose. As The New Yorker's fiction editor pointed out to her, no man appears in the story at all, yet the pressure on women is fully there; Arimah replied that this shows how systematic, not individual, such pressure is. The same pressure runs through the collection: Glory is valued by her parents only once she has a Nigerian boyfriend with a bright future, Enebeli's daughter hears her mother say sadly that she did not think she had raised “that kind of girl”, and Buchi, widowed, has no income of her own. Arimah also said she dislikes the idea of the “mother as martyr”. Her mothers are rarely simply good or bad: they protect, bargain, fail and harm, often all at once.",
    },
    {
      heading: 'Climate, refugees and a reversed map',
      body: "The title story imagines a future in which most of North America is under water, a sea has replaced Europe, and people from those regions have become refugees, the Britons in Nigeria, the French in Senegal and the Americans in Mexico. Britons have settled in the east of Nigeria and, backed by a threat of biological weapons, forced a shared government, the Biafra-Britannia Alliance. In Senegal, French evacuees have carried out an atrocity the story calls the Elimination. Arimah reverses the usual direction of history, so that Europeans are the displaced people and Africans the hosts. The reversal lets the story ask old questions about empire, borders and who is treated as fully human, in a future that sounds like a news bulletin. It is worth saying in an essay that this is not a simple revenge fantasy: Nneoma's father is contemptuous of the Britons, and Nneoma admits that some of his attitude has rubbed off on her.",
    },
  ],

  themes: [
    {
      title: 'Mothers and daughters',
      body: "Nearly every story turns on this bond, and Arimah refuses to sentimentalise it. Ogechi's mother pulls her cotton baby in half and tells her that soft children with hard lives do not survive; Ogechi runs away, and yet the story ends with her giving her new child her mother's face. The mother in ‘Windfalls’ has made her daughter the instrument of her scams and whispers her pleasure at the payout over a hospital bed. In ‘Second Chances’ Uche's last words with her mother were an argument, and the story is her chance, eight years later, to say what she did not. ‘The Future Looks Good’ shows the bond passing down generations: a mother who resents her first daughter from the womb, a daughter who defies her, a younger sister who keeps them connected. One reading is that the collection shows mothers passing on their own damage. A more convincing one, perhaps, is that it shows mothers trying to prepare daughters for a hard world, and doing harm precisely because the world is hard: Ogechi's mother wants a child “with edges” because edges survive. The best answers hold both views and point to the few moments of repair, like Bibi and Ezinma discovering their shared smile.",
    },
    {
      title: 'War and inherited history',
      body: "The Biafran war sits behind the collection like a family secret. In ‘The Future Looks Good’ it decides who marries whom, who steals yams to eat, and what a child is called, and Arimah's refrain insists that Ezinma cannot see the history walking behind her. In ‘War Stories’ Nwando's father tells war stories over chess, turning them into lessons, until the last one runs out of lesson and the “veil” comes over him; his friend Emmanuel, who fought beside him, has taken his own life. The title story projects the war forward, into a Biafra that exists again, allied to its old colonial ruler. What connects them is the idea that violence does not end when the fighting does. It is passed on through silence, bitterness and habits of mind, and it lands on people who were not born when it happened. You could argue that Arimah is pessimistic here. You could also argue that telling the stories, as Nwando's father tries to, is the only way the damage is ever faced.",
    },
    {
      title: 'Girls and the cost of boldness',
      body: "Arimah's most memorable girls are loud, rude, brave or defiant, and the world keeps trying to correct them. Enebeli's daughter crows “In your face” when she wins a game, writes love notes to a boy, and is slowly quietened by her mother's disappointment and a new country. Mayowa in ‘Redemption’ throws excrement at the neighbours' house and fights off a predatory youth minister, and is sent home in disgrace. Nwando exposes another girl and briefly commands a “Girl Army” before it deserts her. Glory's contrariness wrecks her studies and nearly her life. The narrator of ‘Redemption’ puts the pattern into words: girls with fire in them will be forced to drink from a well of correction. But the collection does not end with the flames out. Its very last sentence has that narrator stepping out and throwing something of her own. A strong essay will notice that boldness is not always admirable here (Nwando's cruelty to Anita, Glory's spite) but that Arimah plainly finds the forces that crush it worse.",
    },
    {
      title: 'Bargains and debts',
      body: "Love and survival in these stories are almost always paid for. Ogechi pays Mama for each blessing with parts of her own feelings, first empathy and then joy, until she spits in the palms of beggars. The mother in ‘Windfalls’ turns her daughter's body into a source of money. Buchi's friend Ijeoma offers her daughter a future in South Africa, but only if Louisa takes on a dead girl's name and helps around the house. The grief workers of the title story take other people's pain for a fee, and the rich can pay for it while refugees cannot. Even romance is a transaction: in ‘The Future Looks Good’ a hungry girl decides she is worth three yams, and Glory, who hears “we” and “us” from Thomas, finds his family has made plans for her. Arimah uses these bargains to show how poverty and power turn feelings into currency. One reading sees the stories as angry about that. Another notices that the characters often choose their bargains with open eyes, which makes them harder to judge.",
    },
    {
      title: 'Grief',
      body: "Death has already happened at the start of many of these stories, and what interests Arimah is the grief that remains. The title story makes grief literally removable, and then asks what is lost when it is: Nneoma learns that she cannot calculate her own father's grief, because it is also hers. In ‘Second Chances’ a mother dead for eight years returns, and the family's instant delight suggests how little their mourning has healed. Buchi and her daughter Damaris both saw Nnamdi killed on the road; Damaris has not spoken since. ‘What Is a Volcano?’ turns a goddess's grief for her lost daughters into the shape of the landscape itself, so that the hills themselves are grieving women. Across the collection grief is physical, heavy, contagious and impossible to hand over cleanly, which is why the title story's promise to make it vanish is so troubling. An essay could argue that Arimah shows grief as a form of love that cannot be subtracted without subtracting the person.",
    },
    {
      title: 'Home and belonging',
      body: "The publisher describes the collection as being about the ties that bind people to one another and to home, and its characters are often in the wrong place. Ada is too American for Lagos and too Nigerian to be simply American; Enebeli's daughter is sent from Port Harcourt to a country that greets her boldness with a fascination that makes her hide it; Glory hides her trips to her grandfather's village from Thomas, who assumes she needs Nigeria explained to her. Buchi lives in her sister's house on sufferance, forbidden to let her girls touch their cousins' toys, and Ogechi lives in a room she can cross in three steps, rented from the woman who owns her debts. In the title story whole peoples have lost their countries. Home, for Arimah, is rarely a place of safety; it is where you are judged by the people whose approval you most want. The story titles keep asking the question: ‘Who Will Greet You at Home’ is a question with no comfortable answer.",
    },
  ],

  characters: [
    {
      name: 'Ezinma',
      role: "‘The Future Looks Good’: the younger daughter, unlocking her sister's door",
      body: "The story is built around one moment: Ezinma fumbling with keys at her sister Bibi's flat. Everything else, her grandparents' and parents' lives in the war and her sister's history, is what she “doesn't see” coming behind her. She is described as a paler, gentler version of Bibi, who spent her childhood being pushed away by her sister and wanting her love anyway, and who acted as go-between when Bibi and their mother stopped speaking. When Bibi comes home beaten, Ezinma cleans her bruises and offers to fetch her things. Her kindness, which she calls “Habit”, is what puts her at the door.",
    },
    {
      name: 'Bibi',
      role: "‘The Future Looks Good’: Ezinma's older sister, christened Biafra",
      body: 'Named Biafra by her mother out of spite, Bibi is beautiful, stubborn and at war with her mother from the womb onwards. She falls for Godwin, a rich and controlling man her mother warns her against, and learns too late that everything he gave her, the flat and the car, was in his name. When he attacks her she goes home. Her reunion with her mother is silent and stiff, but in the bathroom mirror she and Ezinma notice for the first time that they share the same smile, and she thanks her sister for the first time.',
    },
    {
      name: 'Godwin',
      role: "‘The Future Looks Good’: Bibi's violent lover",
      body: "The story presents him through what came before him too: indulged by his father until the word no feels like acid to him, a boy who broke his cello when he found that his younger brother could play it better. The story gives him his father's pale skin and square jaw, and uses the same words for the wealthy man Bibi's mother nearly married before he fled the country when the war began. The echo, and the mother's warning that Bibi does not know what “his people” are like, invite the reader to wonder whether Godwin is that man's son; the story never says so. He shoots Ezinma, mistaking her for Bibi.",
    },
    {
      name: "Ezinma's mother",
      role: '‘The Future Looks Good’: a brash girl in 1966, a hard mother afterwards',
      body: 'Young, well fed and used to getting her way, she wins the most eligible man at a party months before the war, only to be abandoned by him when her family back Biafra and his do not. Hungry and displaced, she meets a young thief stealing yams on a farm at night and marries him. She names her first daughter Biafra to defy her own mother and warns Bibi against Godwin, claiming to know his family as Bibi does not. Arimah lets the reader see how her history of loss and pride shapes the coldness her daughters receive.',
    },
    {
      name: 'Nwando',
      role: "‘War Stories’: the narrator, a schoolgirl and her father's chess partner",
      body: "Nwando exposes a classmate, Anita Okechukwu, who claims to own a bra, and inherits a following of girls she calls her Girl Army. She soon finds that being the judge of other girls' lies is joyless, and when the Army brings her a girl who lied about her brother, something in the girl's voice reminds her of Emmanuel, her father's friend who has recently died, and she punches the girl. Her followers desert her. At home she plays chess with her father and listens to his war stories. She is sharp, funny and not always kind, and the story ends with her mother taking her to bed and telling her a story of her own.",
    },
    {
      name: 'Azike',
      role: "‘War Stories’: Nwando's father, a veteran of the Biafran war",
      body: 'A quiet man who does not make friends easily, Azike tells war stories as lessons while he plays chess with his daughter, and he tends to exaggerate: he claims to have joined the army at twelve. His stories are about a hard lieutenant, a lost gun and a punishment, and finally about Emmanuel and the snakes. The last story has no lesson in it. Asked why he survived when the others died, he says that he ran, and then he freezes over the board, unable to make an obvious move.',
    },
    {
      name: 'Emmanuel',
      role: "‘War Stories’: Azike's friend from the army",
      body: "In Nwando's childhood Emmanuel visited every week, laughing, pulling her braids and teasing her father's exaggerations, though sometimes he was not “right” and her mother did not want him in the house. He has taken his own life before the story begins. In the war story, he shot the snakes the villagers near the camp regarded as their gods, until the lieutenant threatened to hand him over to them. His death is the silent centre of the story: proof that the war is still claiming its soldiers.",
    },
    {
      name: 'Ada',
      role: '‘Wild’: the narrator, an American teenager sent to Lagos',
      body: 'Two months before starting at Emory University, Ada is packed off by her mother to stay with her aunt in Lagos, as punishment for a run of teenage misbehaviour. She arrives in loose jeans and a flannel shirt, every inch the American cousin, and finds that Chinyere, held up to her for years as the model daughter even after having a baby, is living a lie. At a fund-raiser, a little drunk and wanting to strike back at a hostile woman, Ada answers a question about the boy and so confirms the gossip the family has worked to hide. The story ends with Ada awkwardly trying to make amends.',
    },
    {
      name: 'Chinyere',
      role: "‘Wild’: Ada's cousin, the model daughter",
      body: "Chinyere has a young son by a married man, and her mother insists the household pretend he is not hers. She takes Ada to a fund-raiser as a way of getting out of the house, is humiliated there when her secret is confirmed, and leaves Ada behind. When she comes home she is punished by her mother. She is more complicated than the saint Ada was told about and more hurt than the rebel Ada first assumes, and the story's quiet ending, the two cousins with the boy between them, suggests an uneasy new closeness, though Ada warns that happy moments would be scarce for some time after.",
    },
    {
      name: 'Auntie Ugo',
      role: "‘Wild’: Chinyere's mother, sister of Ada's mother",
      body: "Warm to Ada and hard on her own daughter, Auntie Ugo polices appearances: the child's parentage, her daughter's movements, the family's standing. She is quick with casual cruelty and, when she discovers Chinyere's lie, with her hand. She is a portrait of respectability as a form of control.",
    },
    {
      name: 'Enebeli Okwara',
      role: '‘Light’: a father in Port Harcourt raising his daughter alone',
      body: 'While his wife studies in America, Enebeli brings up their daughter from eleven to fourteen, surviving a market stampede, a first period and a sex talk. He loves her boldness and refuses to have it trained out of her, so that he and his wife disagree more and more over her upbringing. When his wife takes a job in the States and asks for the girl, he fights with words he did not know he had, and loses. The last paragraph moves through his grief, at the airport and in her empty room, and ends with a memory of the girl at eleven. His love is real, but a critical reader might notice that he also enjoys having his daughter take his side against her mother.',
    },
    {
      name: "Enebeli's daughter",
      role: '‘Light’: the girl, fourteen for most of the story',
      body: "The story calls her only “the girl”, which makes her feel like any daughter. She is loud, cheeky and fearless: she writes love notes to a boy, promising him many sons, crows when she wins, and tells her mother about the boy in an effort to be close to her. Her mother's sad disapproval is the first time she learns that the world wants her to be different. In America she comes back on screen subdued, and asks her father not to talk to her the old way.",
    },
    {
      name: "Enebeli's wife",
      role: "‘Light’: the girl's mother, studying in America",
      body: 'Separated from her family by study and visa trouble, she tries to mother her daughter over Skype, correcting how she sits, eats, laughs and wears her hair. She is not a villain: the story says she is trying to prepare her daughter for the world, and distance has made her a stranger. But her corrections, and her eventual decision to bring the girl to America, are what dim the light Enebeli wanted to protect.',
    },
    {
      name: 'Uche',
      role: '‘Second Chances’: the narrator, whose dead mother comes back',
      body: "Uche was a child prone to hysterics who grew into a self-centred young woman, and her last conversation with her mother, eight years ago, was a row in which her mother called her disappointing. After her mother's death she ran away to Alabama, where her father found her after she had taken a handful of pills. When her mother reappears, stepped out of an old photograph, her father and sister simply welcome her; Uche cannot, and hunts for the photograph instead. Only at the end does she say the words she has carried for eight years.",
    },
    {
      name: "Uche's mother",
      role: '‘Second Chances’: dead for eight years, and back',
      body: 'She appears exactly as she was in a photograph taken in 1982, in a green ankara-print caftan, looking for her red sunglasses. She cooks, charms a mattress salesman, lets her family love her, and asks Uche what she wants from her. She is gone in the morning, leaving the smell of okra in the kitchen and a crumpled photograph. Arimah never explains her return; she is less a ghost than a second chance.',
    },
    {
      name: 'Udoma',
      role: "‘Second Chances’: Uche's sister",
      body: "Neat where Uche is chaotic, Udoma accepts their mother's return at once and wants to be allowed to enjoy it. Her easy acceptance throws Uche's guilt into relief.",
    },
    {
      name: 'Amara',
      role: '‘Windfalls’: the daughter, addressed throughout as ‘you’',
      body: "Since early childhood Amara has been trained by her mother to fall in shops and supermarkets so that the family can sue. They move from town to town under false names; she whispers her real one as she falls asleep so as not to forget it. Her mother has also let men exploit her, and at fifteen she is pregnant and quietly hoping for the baby. The final fall, on a puddle of melted ice cream, is a real accident, and it costs her the baby. Arimah gives her almost no chance to speak, which makes her silence the story's accusation.",
    },
    {
      name: "Amara's mother",
      role: '‘Windfalls’: a con artist who uses her daughter',
      body: "She craves money and the attention of men, and the settlements from her daughter's falls buy both until they run out. She is theatrical, calculating and, the story suggests, capable of any exploitation. Her final whisper over the hospital bed, celebrating the size of the payout, is one of the coldest moments in the book.",
    },
    {
      name: 'Ogechi',
      role: '‘Who Will Greet You at Home’: an assistant hairdresser who wants a child worth loving',
      body: 'Made by her own mother from mud and twigs, Ogechi wants a child who is soft, pretty and admired, not practical. She has made babies from cotton, paper, yarn and sugar, and all have failed. Poor and indebted, she pays Mama for each blessing with parts of her feelings. When she secretly makes a baby from the hair swept up in the salon, it feeds on hair, then on her, and then, the story implies, on the people around her. She burns it to save herself, and then makes a new child of clay and ash. She is envious, proud and lonely, and also a mother who keeps loving a monstrous child long after she should stop.',
    },
    {
      name: 'Mama',
      role: '‘Who Will Greet You at Home’: salon owner, landlord and paid blesser of babies',
      body: "Mama owns the salon, the eatery next door and the building where Ogechi rents her room, and for a fee she blesses the babies of girls who have no mother to do it. When the girls cannot pay she takes feelings instead, empathy and joy, which keep her own power going. She is a comic and frightening portrait of someone who profits from other people's hope. When she reaches for more of Ogechi's happiness and touches the hair baby instead, she collapses.",
    },
    {
      name: "Ogechi's mother",
      role: '‘Who Will Greet You at Home’: practical, harsh, absent',
      body: "She mocks and destroys the soft babies her daughter brings her and wants a child that can plough and scrub, because she believes soft children with hard lives go mad or die young. Ogechi has not seen her since they came to blows. She is not in the present action at all, but she shapes every choice Ogechi makes, and the story's last line gives the new clay baby her face.",
    },
    {
      name: 'Buchi',
      role: "‘Buchi's Girls’: a widow keeping house for her sister",
      body: "Since her husband Nnamdi was killed on the road, Buchi has lived with her daughters in the house of her sister Precious and Precious's husband Dickson, doing the housework in return for their keep. She shares tea and jokes with Lawrence, the household's servant, and tries to teach her girls what school she can. When she asks Dickson for help with school fees he humiliates her, and on the day the chicken her younger daughter loves is killed, she decides to accept her friend Ijeoma's offer for her elder daughter. She thinks of it as something a mother should not be able to do, and resolves to do it anyway.",
    },
    {
      name: 'Louisa',
      role: "‘Buchi's Girls’: the elder daughter",
      body: "Louisa was once greedy, noisy and demanding; since her father's death, living in her aunt's house, she has become careful and good, “a jumpy mouse” in her mother's words. She protects her sister, stands up to her uncle when he threatens the chicken, and is the daughter Buchi decides to send away.",
    },
    {
      name: 'Damaris',
      role: "‘Buchi's Girls’: the younger daughter",
      body: "Damaris saw her father killed and has not spoken since. She wets the bed and loves Kano, a runt of a chicken that never grew and has become the household's pet. Her problems, the story's last page says, are ones her mother can still solve.",
    },
    {
      name: 'Dickson',
      role: "‘Buchi's Girls’: Buchi's brother-in-law",
      body: "A loud, sprawling businessman whom Nnamdi disliked, Dickson enjoys Buchi's dependence. When she finally asks for help with the girls' school fees he makes her spell out her poverty in front of her daughter, threatens to kill the chicken, and explodes when Louisa answers back. He is the face of charity that humiliates.",
    },
    {
      name: 'Ijeoma',
      role: "‘Buchi's Girls’: Buchi's oldest friend, now in South Africa",
      body: "Ijeoma lost her only daughter, Soma, to complications of sickle cell disease after a desperate journey between hospitals, and moved to South Africa. She offers to take Louisa, to live with her under Soma's identity, since the death certificate was never processed, and to help around the house. The offer is both a rescue and a use of the girl, which is why it hurts Buchi.",
    },
    {
      name: 'Nneoma',
      role: '‘What It Means When a Man Falls from the Sky’: a Mathematician who removes grief',
      body: "Nneoma discovered at school that she could see a person's sadness, and she became one of fifty-seven registered Mathematicians who calculate grief and take it away, mostly for rich clients. She lives comfortably in the Biafra-Britannia Alliance, is on uneasy terms with her grieving father, and misses her former lover Kioni. After a man dies trying to fly using the same formula, and after she breaks the rules to take the grief of a refugee girl, she begins to see the limits of what she does. The story ends with her overwhelmed by what she sees in Kioni.",
    },
    {
      name: 'Kioni Mutahi',
      role: "‘What It Means When a Man Falls from the Sky’: Nneoma's former lover",
      body: "Kioni gave her time to the displaced, working with refugees where Nneoma worked for the wealthy; Nneoma called her “Mother Kioni”, first fondly and then with malice. After Nneoma asked her to work on her father's grief, against the rules, the relationship broke down and Kioni asked her to leave. She has disappeared from New Kenya when the story begins. She returns at the end barefoot, wounded, half her dreadlocks torn out, begging Nneoma to come with her, and what Nneoma sees in her is the Formula going wrong.",
    },
    {
      name: "Nneoma's father",
      role: '‘What It Means When a Man Falls from the Sky’: a bitter, grieving widower',
      body: "He was a boy when the Alliance was formed and still holds to the idea of Biafran independence, calling the Britons refugees rather than allies. Since his wife's death he has been consumed by grief. When Nneoma tried to take his grief, the attempt failed because it was also her own, and he turned his anger on her. He sends her a driver as a peace offering, and her last clear thought is of him.",
    },
    {
      name: 'The Senegalese girl',
      role: '‘What It Means When a Man Falls from the Sky’: a pupil at the school where Nneoma gives a talk',
      body: "A pupil who survived the Elimination, the atrocity carried out in Senegal by French evacuees, and whose sorrow Nneoma can see at once. Nneoma breaks the rules and takes her grief without the regulated process, and the girl's memories stay with her afterwards. She is the story's reminder that the people who most need what Nneoma does are those least able to pay.",
    },
    {
      name: 'Glory',
      role: '‘Glory’: Glorybetogod Ngozi Akunyili, nearly thirty and unlucky',
      body: 'The first time her grandfather saw her, he declared that her chi, her personal spirit, was not well, and her life seems to prove it: a dropped-out law student working in a Minneapolis call centre, broke, alone, hiding the truth from her friends on Facebook. After one terrible night when she comes close to ending her life, she meets Thomas, and everything she does suddenly looks right to her parents. She is funny, bitter and self-destructive, and she is also clear-sighted about the family plans being made for her. The story ends as she looks at an engagement ring and makes “another decision”, without telling us which.',
    },
    {
      name: 'Thomas',
      role: '‘Glory’: Thomas Okongwu, the perfect Nigerian suitor',
      body: "Thomas is studying for an MBA and means to go on to law school, his parents are both doctors, and he is effortlessly lucky and charms everyone. He assumes that Glory will one day move back to Nigeria with him, and in fact he and his mother have already planned for her to go ahead of him and live in his mother's house. His good nature is real, but so is his certainty that his plans are everyone's.",
    },
    {
      name: "Glory's grandfather",
      role: '‘Glory’: the old man in the village who understands her',
      body: 'He was the first to see misfortune in Glory, and yet he is the one relative who accepts her as she is, letting her stay with him on her visits to Nigeria. His fable of a porcupine who tricks a spirit ends with the advice that if you cannot please the gods you should trick them, which Glory tries to follow.',
    },
    {
      name: "Thomas's mother",
      role: '‘Glory’: warm, formal and in charge',
      body: "She welcomes Glory into the family before they have properly met, praises her cooking, and then, alone with her, reveals the plans already made for Glory's future in Nigeria. Her warmth cools to politeness once Glory admits the truth about her job and answers her questions in monosyllables.",
    },
    {
      name: 'River',
      role: '‘What Is a Volcano?’: the goddess of rivers',
      body: 'Generous, indulgent and a little careless, River laughs off the grievance of the god of ants when her stream destroys his favourite anthill. She gives birth to rare god-twins and leaves them with her sister. When they are stolen, her grief floods and shakes the world, and in the end she lies down and becomes part of the landscape.',
    },
    {
      name: 'Ant',
      role: '‘What Is a Volcano?’: the most minor of the gods',
      body: "Mocked by the other gods, Ant nurses his resentment into revenge: he builds a dam of stones held together by ants, steals River's daughters and lets one be eaten. He hides the knowledge of where the other is in a blue stone, then hides among humans, killing his own children so that they cannot lead River to him. He is a study in how small grudges become monstrous.",
    },
    {
      name: 'Bereaver',
      role: "‘What Is a Volcano?’: River's sister, who was sleeping when the twins were taken",
      body: 'Blamed by everyone and consumed by guilt, she loses her name: She Who Betrayed River becomes Betrayed River, then Bereaver, until she forgets she was ever anyone else. She is still wandering at the end of the story.',
    },
    {
      name: 'The narrator (Redemption)',
      role: '‘Redemption’: a girl living with her bitter mother',
      body: "Years before the story, she told her mother that a youth minister, Brother Benni, had abused her. She was called a liar, her father left, and she started wetting the bed. Timid now, she is fascinated by Mayowa's boldness and wants to learn it. When Mayowa ignores her, she betrays her with lies to Mrs Ajayi, and so helps send her to Brother Benni. When Mayowa fights him off, the narrator's own story is, in effect, proved true. Her last act, stepping out to throw something of her own, ends the collection.",
    },
    {
      name: 'Mayowa',
      role: '‘Redemption’: the new house girl next door',
      body: "A poor relation of the neighbours, taken on as their servant, Mayowa announces herself by throwing excrement at the narrator's house. She is rude, clever, spiteful and brave, torments the neighbours' dogs and once attacked a schoolmate with a razor. Sent to Brother Benni for “deliverance”, she fights him off with a razor blade, and is sent back to her mother in disgrace anyway. At the end the narrator sees that Mayowa was just as powerless as she is: another daughter sent home in disgrace.",
    },
    {
      name: 'Brother Benni',
      role: '‘Redemption’: a youth minister at the church',
      body: "Popular with the children and trusted by the adults, he abused the narrator when she was small and was believed over her. When he attempts to assault Mayowa, she injures him. Even then the adults hurry to settle things: he goes to hospital, and it is Mayowa who is sent away. He is the story's picture of an institution that protects its powerful men.",
    },
    {
      name: 'Mrs Ajayi',
      role: '‘Redemption’: the neighbour who employs Mayowa',
      body: "A kindly, gossiping neighbour who listens to the narrator's visits and, persuaded by her lies, sends Mayowa for prayer with Brother Benni. It is Mrs Ajayi who hears Mayowa's account and points out the evidence against him, yet the matter is still settled with Mayowa sent back to her mother in disgrace.",
    },
  ],

  keyQuotes: [
    {
      text: "doesn't see what came behind her",
      where: '‘The Future Looks Good’, the refrain, pp. 1-8',
      analysis:
        'The phrase returns every time the story steps back a generation, so the whole family history is framed as something walking up behind Ezinma while she fumbles with a lock. It turns the past into a physical presence and builds dread: the reader sees what she cannot. At the end the phrase changes to “who comes behind her”, and the abstract “what” of history becomes a person with a gun.',
    },
    {
      text: "what nonsense to name a child after a country that doesn't exist",
      where: '‘The Future Looks Good’, the naming of Bibi, p. 5',
      analysis:
        'The narrative voice takes on the scornful tone of the relatives who shorten Biafra to Bibi. The line is funny, but it also carries the grief of a lost war: a country for which so many died has become an embarrassing name. It shows how Arimah compresses national history into a family detail.',
    },
    {
      text: 'when the time came, I ran',
      where: "‘War Stories’, Nwando's father, at the end of his last story, p. 21",
      analysis:
        'Every earlier war story had a moral; this answer has none. Asked why he survived when his lieutenant and comrades died, Azike admits to running, the least heroic truth a veteran could tell. The plainness of the six words, after all his exaggeration, is what makes them devastating, and it is followed by the “veil” coming over him.',
    },
    {
      text: "vigilante schoolyard justice, but I'd lost my taste for truth",
      where: '‘War Stories’, Nwando, on her Girl Army, p. 16',
      analysis:
        "Nwando calls herself the purveyor of this justice. The grand, legal vocabulary is comic in a playground, but the second half turns serious. Exposing Anita was about truth; judging other girls turns out to be about power, and Nwando no longer enjoys it. The line quietly links her small war to her father's real one.",
    },
    {
      text: "This was the closest she would get to drawing my mother's blood.",
      where: '‘Wild’, Ada, on the hostile woman at the fund-raiser, p. 41',
      analysis:
        "Ada realises she is being attacked for an old quarrel with her mother. The violent idiom of drawing blood exposes the savagery under polite society talk, and it shows Ada as a stand-in for someone else, a theme of the whole story, in which daughters pay for their mothers' histories.",
    },
    {
      text: 'he did not know what the world did to daughters',
      where: '‘Light’, the opening sentence, p. 55',
      analysis:
        'The story begins with its ending: we know from the opening lines that the girl will be returned “hollowed out”. This is prolepsis, a flash-forward, and it turns everything that follows into a slow wait for loss. “The world” is vague on purpose: no single person dims the girl; many small pressures do.',
    },
    {
      text: 'she is his brightest ember and he would not have her dimmed',
      where: "‘Light’, Enebeli, after the headmaster's complaint, p. 57",
      analysis:
        "The story's central metaphor makes the daughter a glowing coal: precious, warm and easily put out. “Ember” is also what remains of a fire, which hints at fragility. Enebeli knows he should punish her and will not, and the line explains why, while quietly setting up the dimming the title promises.",
    },
    {
      text: 'there is a little less light to her',
      where: "‘Light’, after her mother's disapproval of the boy, p. 62",
      analysis:
        "The understatement is the point. Arimah does not describe a breakdown, only a small subtraction, the first of many. The light metaphor turns the girl's personality into something measurable, and “a little less” warns that it can be dimmed by degrees until it goes out.",
    },
    {
      text: 'What you are is disappointing.',
      where: "‘Second Chances’, Uche's mother, in their last conversation, p. 75",
      analysis:
        'The mother repeats the word until it stops being anger and becomes, as Uche says, sad and true. These are the last words Uche heard from her mother before she died, which is why the returned mother cannot simply be enjoyed. The flat sentence is the wound the whole story is trying to heal.',
    },
    {
      text: "Five hundred thousand dollars, baby. That's my girl.",
      where: "‘Windfalls’, Amara's mother, at the hospital bedside, p. 92",
      analysis:
        "“Baby” is chilling because Amara has just lost hers. The mother's endearments are for the payout, not the daughter, and “That's my girl”, normally praise, becomes a claim of ownership. The story ends moments later, so the reader is left with the full coldness of the bargain.",
    },
    {
      text: 'Soft children with hard lives go mad or die young.',
      where: "‘Who Will Greet You at Home’, Ogechi's mother, p. 96",
      analysis:
        "Spoken like a proverb, the sentence explains both the mother's cruelty and her love: she destroys the soft babies because she thinks they cannot survive poverty. The balanced contrast of “soft” and “hard” gives it the weight of folk wisdom, and the rest of the story tests it.",
    },
    {
      text: 'A child that cost much brought much.',
      where: "‘Who Will Greet You at Home’, the hair baby's first morning, p. 105",
      analysis:
        "Another proverb-like line, but this time it is Ogechi's hope, and it is heavily ironic. The expensive baby does bring much: hunger, pain and, it seems, death. The phrase sums up the story's link between class and motherhood, and the dangerous belief that a costly child must be a better one.",
    },
    {
      text: 'Let this child be born in sorrow',
      where: '‘Who Will Greet You at Home’, the final paragraph, p. 121',
      analysis:
        "The repeated “Let this child” sounds like a blessing and a curse at once. Ogechi mixes the hair child's ashes into clay and wishes sorrow on the new baby so that it will never have joy to trade. It is a bleak ending, but also an act of protection, and it brings her back to the mud of her own making.",
    },
    {
      text: 'My daughter needs help, not to be help',
      where: "‘Buchi's Girls’, Buchi, on Ijeoma's offer, p. 131",
      analysis:
        "The wordplay turns on one small word: “help” as support and “help” as a servant. Buchi hears that her friend's rescue would make Louisa a house girl under a dead child's name. The line captures the story's painful question of what a poor mother may accept for her child.",
    },
    {
      text: 'drawing them from living bodies like poison from a wound',
      where: "‘What It Means When a Man Falls from the Sky’, on the Mathematicians' work, p. 153",
      analysis:
        'The simile makes grief a poison and the Mathematicians healers, which is how their society sees them. But the medical image also hints at danger: poison drawn out has to go somewhere, and the story shows that it goes into the workers. It is a clue to the ending.',
    },
    {
      text: 'A thousand falling men landing on you.',
      where: '‘What It Means When a Man Falls from the Sky’, the final page, p. 174',
      analysis:
        "The story's title image returns multiplied. One man's fall began the story; now Nneoma sees what it would mean if the Formula failed far down the line, and the weight of it falls on her. The short fragment, with no main verb, mimics impact and makes the title's question finally answerable.",
    },
    {
      text: "If you can't please the gods, trick them.",
      where: '‘Glory’, her grandfather, after his fable, p. 188',
      analysis:
        "The grandfather's moral is shocking because the porcupine in his fable kills to escape. Glory takes it as permission to lie her way into the family she thinks will save her. The line asks whether her engagement is luck at last or another trick, and the open ending never answers.",
    },
    {
      text: 'you do not take small things from small men',
      where: "‘What Is a Volcano?’, the storyteller, on Ant's grudge, p. 202",
      analysis:
        "The line sounds like a proverb and works as a warning. The repetition of “small” is comic, but it also carries the story's argument: the powerless can be the most dangerous when their grievances are laughed at. The rest of the myth shows exactly what a small man's revenge can cost.",
    },
    {
      text: 'a well of correction till the flames die out',
      where: '‘Redemption’, the narrator, on Mayowa being sent home, p. 230',
      analysis:
        "The narrator says that “Girls with fire in their bellies” will be forced to drink from this well, joining the collection's image of girls as fire, from the “ember” of ‘Light’ onwards, to water that puts it out. “Correction” sounds kindly and is not. It is almost the last word on the book's bold girls, but not quite.",
    },
    {
      text: 'I stepped into view and threw something of my own.',
      where: '‘Redemption’, the last sentence of the collection, p. 230',
      analysis:
        "The ending echoes the story's first image, Mayowa's thrown missile, so the timid narrator finally does what she wanted Mayowa to teach her. We are not told what she throws; her “tongue stirred”, so perhaps words. After a book of dimmed girls, the collection ends on an act of defiance.",
    },
  ],

  extracts: [
    {
      title: 'The ending of ‘The Future Looks Good’',
      where: '‘The Future Looks Good’, pp. 6-8',
      pointer:
        "From the reunion in the family home, “The reunion isn't tender” (p. 6), to the end of the story on p. 8.",
      summary:
        "Bibi comes home with a swollen eye. She and her mother neither look at nor speak to each other, her father squeezes her shoulder and leaves, and Bibi breaks down. Ezinma takes her to the bathroom they fought over as children and cleans her bruises. In the mirror the sisters laugh and notice that they have the same smile. When Bibi worries about her things in the flat, Ezinma says she will fetch them; Bibi asks why Ezinma is still kind to her and thanks her for the first time. The refrain returns one last time, now tracing Godwin's history, and the story ends as he mistakes Ezinma for her sister and shoots her from behind.",
      annotations: [
        {
          phrase: "The reunion isn't tender",
          note: 'A blunt four-word sentence after the long, flowing history paragraphs. Arimah refuses the reader the tearful homecoming we might expect, and the silence between mother and daughter is shown through what they do not do.',
        },
        {
          phrase: 'they have the exact same smile',
          note: 'The one moment of repair in the story. For the first time the sisters see themselves as alike rather than rivals, and the mirror image suggests that Ezinma could be taken for Bibi, which is exactly what happens next. Tenderness sets up tragedy.',
        },
        {
          phrase: 'Habit, Ezinma says',
          note: "A one-word answer to why she is still kind. It is modest and funny, but it also explains her fate: the habit of kindness, of running her sister's errands, is what puts her at the door with Bibi's keys.",
        },
        {
          phrase: "grew up under his father's corrosive indulgence",
          note: "The refrain now traces the gunman's history as carefully as the victim's. “Corrosive” makes spoiling a child a slow chemical damage, and it links to the “acid” image that follows. Arimah explains Godwin without excusing him.",
        },
        {
          phrase: 'hits him like a wave of acid',
          note: 'The simile for how he hears the word no. It turns a small refusal into physical agony and shows how entitlement makes rejection unbearable, the root of the violence the paragraph is building towards.',
        },
        {
          phrase: "so she doesn't see who comes behind her",
          note: 'The refrain changes at the last moment from “what came” to “who comes”: past tense becomes present, history becomes a man. The shift in a single phrase is how the ending lands, and the final clause states the shooting with brutal plainness.',
        },
      ],
      question:
        'How does Arimah make this ending to ‘The Future Looks Good’ so shocking? Refer closely to the language of the passage and to what the story has shown before it.',
    },
    {
      title: 'Fire, and a child of clay',
      where: '‘Who Will Greet You at Home’, pp. 119-121',
      pointer:
        "From the night Ogechi wakes to find the hair child standing over her (p. 119) to the end of the story, “She gave it her mother's face” (p. 121).",
      summary:
        "Ogechi wakes in the night to find the hair baby, which should not be able to stand, gripping her hair and stifling her scream. It hides in the dark and then leaps on her. She sets it alight with a candle and holds it down under a pot until it stops moving, burning her own fingers. Outside on her step she weeps with relief and with a last sliver of feeling Mama could not take. Then she mixes dirt, water and the child's ashes into clay, wishes sorrow on the new child so that it will never have joy to barter, and shapes it, giving it her mother's face.",
      annotations: [
        {
          phrase: 'what noise does hair make',
          note: "A question in Ogechi's frightened mind as she listens in the dark. The absurd, almost comic detail makes the horror stranger, because the monster is made of the most ordinary stuff, swept off a salon floor.",
        },
        {
          phrase: 'follow her all her days',
          note: 'The narrator steps back and tells us the act will haunt her before we see it. The foreshadowing slows the moment down and makes the killing a moral event, not just a victory over a monster: this was, after all, her child.',
        },
        {
          phrase: 'a sliver of empathy',
          note: "Her tears are partly relief and partly this. The image of feelings as property that can be stolen connects the ending to Mama's trade, and the tiny “sliver” that survives is the story's small hope.",
        },
        {
          phrase: 'something she was born to do',
          note: 'Making clay returns Ogechi to her own origins: her mother formed her from mud. What she despised as pedestrian becomes a skill and a kind of belonging, which reverses her earlier longing for whimsy.',
        },
        {
          phrase: 'a foolish, hopeful girl with joy to barter',
          note: 'This is what Ogechi wishes the child will not become, and it is a portrait of herself. The word “barter” recalls every trade with Mama, so the wish for sorrow is really a wish that her child will never be exploited as she was.',
        },
        {
          phrase: "She gave it her mother's face",
          note: 'The last line is ambiguous. It can be read as reconciliation, Ogechi finally honouring her practical mother, or as a bleak repetition, the hard mother remade in the next generation. The best answers argue for one reading and admit the other.',
        },
      ],
      question:
        'How does Arimah make this such a powerful and disturbing ending to ‘Who Will Greet You at Home’?',
    },
    {
      title: 'The opening of the title story',
      where: '‘What It Means When a Man Falls from the Sky’, pp. 151-153',
      pointer:
        "From the first sentence, “It means twenty-four-hour news coverage” (p. 151), to the description of the Mathematicians' work on p. 153.",
      summary:
        "The story opens by answering its own title: a man falling from the sky means round-the-clock news, politicians covering themselves and protests. The granddaughter of the Formula's discoverer insists at a press conference that the maths is sound and that the Mathematicians must have miscalculated. The newscast replays the fall and the flight ceremony months earlier, when a man levitated and then shot into the air. Nneoma, watching, knows the blame will reach Mathematicians like her, who use the same Formula to take grief out of people.",
      annotations: [
        {
          phrase: 'It means twenty-four-hour news coverage',
          note: 'The first sentence answers the title directly, and “It means” becomes a repeated pattern (anaphora). The deadpan list of media reactions is satire: a man has died, and what it “means” first is television.',
        },
        {
          phrase: 'Math is constant and absolute',
          note: "Martina Furcal's defence of her grandfather's formula. Its certainty is exactly what the story will test. A sentence this absolute in a story's opening pages is a warning to the reader that it will not survive the ending.",
        },
        {
          phrase: 'Bad move, lady',
          note: "The narration slips into Nneoma's sarcastic inner voice. The informality makes the future world feel lived in and establishes her as knowing and self-interested, since the blame will fall on people like her.",
        },
        {
          phrase: 'the windmill panic of flailing arms',
          note: "The only vivid image of the fall itself. The metaphor of a windmill gives a grim comedy to the man's arms, and the calm “spread of his body” that follows shows how the news has made his death into repeated footage.",
        },
        {
          phrase: 'levitating like a monk',
          note: 'The simile links science to religion, a theme the story develops, since for many people the Formula is God. The same sentence calls the wait “fifteen boring minutes”, which is bathos: a miracle has become ordinary, and that is how quickly this society accepts the impossible.',
        },
      ],
      question:
        'How does Arimah make the opening of ‘What It Means When a Man Falls from the Sky’ such a gripping introduction to her imagined world?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Refrain',
      example:
        "‘The Future Looks Good’ repeats “doesn't see what came behind her” each time it steps back into the family's past, and ends with “so she doesn't see who comes behind her”.",
      effect:
        'The refrain holds an eight-page story that spans three generations together, and every return builds dread. The final variation, from “what came” to “who comes”, turns history into a present danger. When you write about it, comment on the change of tense and pronoun, not just the repetition.',
    },
    {
      technique: 'Anaphora (repeated openings)',
      example:
        'The last paragraph of ‘Light’ is a chain of clauses beginning “Before”, through his breakdown at the airport and the evenings in her empty room, until it reaches “Before all that, she is eleven”. The title story opens with a chain of sentences beginning “It means”.',
      effect:
        "In ‘Light’ the repetition runs time backwards, piling up the losses still to come before returning to a happy memory, so the ending is both comforting and unbearable. In the title story the list sounds like a news report and makes a man's death into a series of consequences.",
    },
    {
      technique: 'Prolepsis (flash-forward)',
      example:
        "‘Light’ ends its first sentence with “he did not know what the world did to daughters”, and tells us the girl will be returned “hollowed out” before we have met her. ‘Who Will Greet You at Home’ warns that Ogechi's act will “follow her all her days”.",
      effect:
        'Arimah often tells us the ending first. This removes suspense about what happens and replaces it with dread about how, so the reader watches each small moment for the damage. It also gives her narrators a sad, retrospective authority.',
    },
    {
      technique: 'Extended metaphor of light and fire',
      example:
        "In ‘Light’ the girl is “his brightest ember”, her spirit a “streak of fire”, and after her mother's disapproval “there is a little less light to her”. ‘Redemption’ speaks of “Girls with fire in their bellies”.",
      effect:
        "The image makes a girl's personality something that can be measured, fed or put out, and it links stories across the collection. Water is the opposing image: the “well of correction” that douses the flames. Tracing a metaphor across two stories is an efficient way to reach whole-text argument.",
    },
    {
      technique: 'Second-person narration and instruction',
      example:
        '‘Windfalls’ addresses Amara as ‘you’ from its first line, “The first time you fell, you were six”, and its opening pages read like a training manual for staging a fall.',
      effect:
        "The reader is placed inside the daughter's body and made complicit in the scam. The cool, instructional tone mimics the mother's training and shows how completely it has shaped the girl. It also keeps Amara's own feelings at a distance, which makes the few moments when they break through, such as her hope for the baby, more painful.",
    },
    {
      technique: 'Proverb and aphorism',
      example:
        "“Soft children with hard lives go mad or die young” (‘Who Will Greet You at Home’); “If you can't please the gods, trick them” (‘Glory’); “you do not take small things from small men” (‘What Is a Volcano?’).",
      effect:
        'These short, balanced sentences sound like inherited wisdom, drawing on oral storytelling. Arimah then tests them against events: the proverbs are rarely simply right. Quoting one and asking whether the story proves it true is a strong way to open an argument.',
    },
    {
      technique: "The storyteller's voice and direct address",
      example:
        '‘What Is a Volcano?’ interrupts itself with teasing questions to the listener, such as “did you?”, and ends “and that, since you asked, is a volcano”.',
      effect:
        'The teasing asides recreate a teller speaking to a child who has asked a question, the form of a traditional origin tale. The comedy sits beside terrible events (a child eaten, babies killed), and the tone makes the horror bearable while the final line turns grief into geology.',
    },
    {
      technique: 'The impossible told as ordinary',
      example:
        'In ‘Who Will Greet You at Home’ babies are made of yarn, paper or hair and blessed into life, and the narration treats this as everyday custom, with bus passengers singing the call-and-response that gives the story its title.',
      effect:
        "Because no one in the story is surprised, the reader accepts the rules quickly and pays attention to the human feelings instead: envy, shame, class snobbery, a mother's hunger to be admired. This matter-of-fact tone is the heart of magical realism, and Arimah uses it to make ordinary social pressures literal.",
    },
    {
      technique: 'Irony',
      example:
        'In ‘Windfalls’ the only fall that is real is the one that pays most and costs Amara her baby. ‘The Future Looks Good’ is titled with a hope the last sentence destroys. Glory is “tricking the gods” to join a family that has been scheming too.',
      effect:
        "Arimah's endings often turn on irony, which lets her be devastating without being sentimental. Name the kind of irony: situational in ‘Windfalls’, where events contradict expectation; dramatic in ‘The Future Looks Good’, where the reader knows more than Ezinma.",
    },
    {
      technique: 'Dark humour and bathos',
      example:
        'The market stampede in ‘Light’, which separates father and daughter for hours, turns out to have been caused by two traders quarrelling over tomatoes; in the title story the miracle of levitation takes “fifteen boring minutes”.',
      effect:
        "Reviewers repeatedly praised Arimah's humour. Bathos, the sudden drop from the grand to the trivial, keeps the stories from solemnity and makes the painful moments hit harder when they come. Mentioning the comedy of a sad story shows an examiner that you have read closely.",
    },
  ],

  structureForm: [
    {
      heading: 'A collection, not a novel',
      body: 'The twelve stories share no characters, but they are arranged with care. The book opens with ‘The Future Looks Good’, whose family history and war set the key, and closes with ‘Redemption’, whose last line is an act of defiance. The first four stories are realist; after that the fantastic stories are spaced between realist ones, so that ‘Windfalls’, grimly real, sits next to the magical ‘Who Will Greet You at Home’, and the futuristic title story is followed by ‘Glory’, set in a Minneapolis call centre. When you write about one story, a sentence connecting it to another, a shared image or a mirrored situation, shows an understanding of the whole text.',
    },
    {
      heading: 'Many genres in one book',
      body: "Arimah moves between family realism (‘Wild’, ‘Buchi's Girls’, ‘Glory’, ‘Redemption’), magical realism (‘Who Will Greet You at Home’, ‘Second Chances’), speculative or science fiction (the title story) and myth (‘What Is a Volcano?’). Some stories mix modes: ‘Glory’ is realist but has a folk fable at its heart, and ‘War Stories’ sets children's politics against war. The New York Times Book Review compared her science-fiction parables to Margaret Atwood's. Say which mode a story uses and why it suits the subject: a formula for grief makes the question of whether pain should be removed impossible to avoid.",
    },
    {
      heading: 'Who tells the story',
      body: "Narrative voice changes from story to story, and it matters. First-person narrators who look back on their youth tell ‘War Stories’, ‘Wild’ and ‘Redemption’; Uche narrates ‘Second Chances’ in the present tense, which traps us with her. ‘Windfalls’ is in the second person. ‘The Future Looks Good’ and most of ‘Light’ use a third-person present tense that roams across time. ‘Who Will Greet You at Home’, ‘Buchi's Girls’, the title story and ‘Glory’ use a close third person, in the characters' idiom. ‘What Is a Volcano?’ is told by a storyteller who talks to the listener. An examiner will reward a comment on why a story uses its particular voice.",
    },
    {
      heading: 'Openings that hook',
      body: "Arimah's first lines are designed to disorientate or intrigue. ‘Redemption’ opens with a parcel of excrement thrown at a house the day after two girls meet; ‘Windfalls’ opens “The first time you fell, you were six”; ‘Light’ opens with the end of its story; the title story opens by answering its own title. Several begin in the middle of an action, a lock being fumbled, a mattress being bought, so that we must work out the situation as we read. When a passage question prints an opening, discuss what the first sentences withhold as well as what they tell.",
    },
    {
      heading: 'Endings that stop short',
      body: "Many stories end abruptly or openly. We do not learn Glory's decision, what the narrator of ‘Redemption’ throws, or what becomes of Nneoma after her “last clear thought”. ‘The Future Looks Good’ ends mid-refrain, on a gunshot; ‘Buchi's Girls’ ends on a question Buchi knows is only a formality. The effect is to hand the judgement to the reader. In an essay, do not fill in the gap as if it were fact. Say what the ending leaves open and argue for the most likely reading from the evidence, as you would for any interpretation.",
    },
    {
      heading: 'Time out of order',
      body: "Arimah rarely tells a story from beginning to end. ‘The Future Looks Good’ takes one moment and fills it with decades of family history; ‘Light’ starts at the end, moves through the girl's years with her father, then runs forward through the losses and finishes years earlier, when she is eleven; ‘Second Chances’ and ‘Buchi's Girls’ keep returning to a death before the story began. This structure matters for meaning: it shows the past as present in every moment, which is the argument of the whole collection.",
    },
    {
      heading: 'The short story as compression',
      body: 'A short story has no room for everything, and Arimah uses the gaps. Whole relationships are drawn in a few lines of dialogue; backstory is dropped into a single clause (a childhood incident with a dog, in ‘Glory’, given one sentence on the first page and returned to only on the last); violence often happens off the page or in a sentence. In ‘Who Will Greet You at Home’ Arimah said she kept much of what the hair babies do off-screen, because the aftermath was more interesting than the act. When you analyse a passage, look for what is compressed, implied or left out, and say what the reader has to supply.',
    },
  ],

  vocabulary: [
    {
      term: 'Biafra',
      definition:
        "The Republic of Biafra, declared in eastern Nigeria in May 1967 and defeated in January 1970 after a civil war and a famine caused by blockade. In ‘The Future Looks Good’ it is a girl's name; in the title story it exists again, allied with Britain.",
    },
    {
      term: 'Igbo',
      definition:
        "The people and language of south-eastern Nigeria, the majority in Biafra. Most of Arimah's Nigerian characters are Igbo, and names such as Ezinma, Nneoma, Chinyere and Ngozi are Igbo names.",
    },
    {
      term: 'Magical realism',
      definition:
        'Fiction in which impossible events happen in an otherwise realistic world and are treated as normal by the characters, as with the babies made of hair in ‘Who Will Greet You at Home’ or the returned mother in ‘Second Chances’.',
    },
    {
      term: 'Speculative fiction',
      definition:
        'A broad term for fiction that imagines worlds different from our own, including science fiction and dystopia. The title story, set in a flooded future where grief can be calculated, is speculative fiction.',
    },
    {
      term: 'Origin tale (pourquoi story)',
      definition:
        'A traditional kind of story that explains how something in the world came to be, often through the actions of gods or animals. ‘What Is a Volcano?’ uses the form to explain volcanoes as grieving mothers.',
    },
    {
      term: 'Refrain',
      definition:
        'A phrase repeated at intervals in a text, like a chorus. The refrain of ‘The Future Looks Good’ structures the whole story.',
    },
    {
      term: 'Anaphora',
      definition:
        'Repetition of the same word or phrase at the start of successive clauses or sentences, such as the “Before...” clauses at the end of ‘Light’.',
    },
    {
      term: 'Prolepsis',
      definition:
        'A flash-forward: telling the reader about a later event before it happens in the story, as ‘Light’ does in its first sentence.',
    },
    {
      term: 'Second-person narration',
      definition:
        "Narration that addresses the main character as ‘you’, as in ‘Windfalls’. It places the reader uncomfortably inside the character's experience.",
    },
    {
      term: 'Call-and-response',
      definition:
        'A pattern of song or speech in which one voice asks and others answer, common in West African oral tradition. The blessing song in ‘Who Will Greet You at Home’, which gives the story its title, is a call-and-response.',
    },
    {
      term: 'Danfo',
      definition:
        'A minibus used as public transport in Lagos. Ogechi takes one to work when she can afford it, a detail that shows her poverty.',
    },
    {
      term: 'House girl',
      definition:
        "A live-in domestic servant, often a girl from a poorer relative's family, working in exchange for keep and sometimes schooling. Mayowa in ‘Redemption’ is one, and Ijeoma's offer would make Louisa one in ‘Buchi's Girls’.",
    },
    {
      term: 'Deliverance',
      definition:
        'In some Christian churches, prayer to drive evil spirits out of a person thought to be troubled or possessed. In ‘Redemption’ Mayowa is sent to Brother Benni for deliverance, with terrible irony.',
    },
    {
      term: 'Grief worker',
      definition:
        "In the title story, a Mathematician licensed to calculate a person's grief and remove it. Nneoma is one of fifty-seven.",
    },
    {
      term: 'Diaspora',
      definition:
        'People who live outside the country their family came from, and their communities. Glory and Ada belong to the Nigerian diaspora in the United States.',
    },
    {
      term: 'Bathos',
      definition:
        'A sudden, often comic, drop from the serious or grand to the trivial, as when a miracle of levitation lasts “fifteen boring minutes”.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          "Read the ending of ‘The Future Looks Good’, from the family reunion (“The reunion isn't tender”) to the end of the story. How does Arimah make this such a shocking ending?",
        skill: 'Passage-based question: language analysis with knowledge of the whole story',
        guidance: [
          'Begin with the big idea in a sentence: the ending is shocking because it follows the only tender moment in the story, and because the refrain we have learned to trust changes.',
          "Analyse the reunion: the blunt short sentences, the silence between mother and daughter, the father's gentle pressure on Bibi's shoulder.",
          'Analyse the bathroom scene: the shared smile in the mirror and “Habit”. Show how this tenderness sets up the mistaken identity.',
          "Analyse the final refrain: Godwin's history told as carefully as Ezinma's, the images of corrosion and acid, and the shift from “what came” to “who comes”.",
          "Link to the whole story: the war, the naming of Biafra, the mother's warning about Godwin's people, and the irony of the title.",
          'End with a personal response: is the ending too cruel, or is its cruelty the point about inherited violence?',
        ],
      },
      {
        question:
          'Read the final paragraph of ‘Light’ (pp. 62-63), which lists what is still to happen to Enebeli and his daughter before returning to her at eleven. How does Arimah make this such a moving ending?',
        skill: 'Passage-based question: structure and language',
        guidance: [
          'Explain what the paragraph does to time: it lists the losses still to come, then returns to the girl at eleven.',
          'Analyse the anaphora of “Before” and how the long, piling sentence builds grief: the airport, the empty room, the subdued girl on screen.',
          'Pick out the moment when the girl asks her father not to talk to her like that, and what it shows about the change in her.',
          'Analyse the final memory: the game, “In your face”, the “streak of fire” and the “wolves of the world”. Why end happily when we know it does not last?',
          'Connect to the opening sentence and the title, and give your own response to Enebeli.',
        ],
      },
      {
        question:
          'How far does Arimah make you sympathise with Ogechi in ‘Who Will Greet You at Home’?',
        skill: 'Essay: character and personal response',
        guidance: [
          "Take a clear position, for example that Arimah makes us sympathise with Ogechi's longing while judging her choices.",
          "Reasons for sympathy: her poverty, her mother's cruelty, the snickering assistants, and Mama's theft of her empathy and joy.",
          'Reasons for judgement: her envy (she wishes the basket weavers death by drowning), her pride, the way she frightens the second assistant, and her secrecy about the forbidden baby.',
          'Show how the magical elements make her feelings literal: the baby feeding on her, the cost of the blessing.',
          "Analyse the ending: the burning, the clay child, the wish for sorrow and her mother's face. Does it complete our sympathy?",
          "Conclude with a nuanced judgement, supported by the story's wider concerns about class and motherhood.",
        ],
      },
      {
        question:
          'Explore the ways in which Arimah presents the cost of removing grief in ‘What It Means When a Man Falls from the Sky’.',
        skill: "Essay: themes and the writer's methods",
        guidance: [
          'Outline the world briefly: the Formula, the Mathematicians, the Biafra-Britannia Alliance and the flooded North. Do not retell the plot.',
          "Show the cost to the grieving: the process is tightly regulated and costly, so only the rich are helped, and Nneoma's father cannot be.",
          "Show the cost to the workers: the medical simile of poison drawn from a wound, the pills Nneoma needs after the Senegalese girl, and Kioni's state.",
          'Show the cost to belief: the fallen man, the rumours that the Formula is finite, and the final image of a thousand falling men.',
          "Consider the ending: what Nneoma's last clear thought, of her father, suggests about grief that should not be removed.",
          "Conclude on what the title's question comes to mean.",
        ],
      },
      {
        question:
          "In what ways does Arimah make the relationship between Buchi and her daughters so moving in ‘Buchi's Girls’?",
        skill: "Essay: relationships and the writer's methods",
        guidance: [
          "Establish the situation: a widow and two grieving girls living on her sister's charity.",
          "Show how each daughter's grief is different: Louisa's anxious goodness, Damaris's silence and bedwetting and love for Kano.",
          "Analyse the offer from Ijeoma and Buchi's thought that her daughter needs help, not to be help.",
          'Analyse the humiliation by Dickson, the killing of Kano and what it costs Buchi to order it.',
          'Analyse the ending: the problems Buchi can still solve for Damaris, and the question to Louisa that is only a formality.',
          "Give your own view on whether Buchi's decision is love, defeat or both.",
        ],
      },
    ],
    tips: [
      'Know all twelve stories. The printed passage can come from any of them, and you cannot take the book into the exam. A one-page summary per story, with two or three short quotations, is the most useful revision you can do.',
      "Name the story and the moment when you quote, because examiners know the collection by story. Writing that a line comes from ‘Light’, just after Enebeli decides not to punish his daughter's note, is far more useful than writing that it comes from the book.",
      "Arimah's endings are often open. Do not state as fact what the story leaves unsaid, such as what Glory decides. Say what the ending leaves open and argue for a reading.",
      'Comment on the fantastic elements as methods, not puzzles. Ask what the hair baby or the grief formula lets Arimah show that realism could not, and use her own words on magical realism as context if they help your argument.',
      'Use the war carefully. The Biafran war is real history and matters in ‘The Future Looks Good’, ‘War Stories’ and the title story, but only mention it where it illuminates the passage in front of you.',
      'Notice the humour. Almost every story is funny somewhere, and saying how comedy works beside pain is a mark of close reading.',
      'Make one connection across stories in an essay, such as fire and light in ‘Light’ and ‘Redemption’, or mothers in ‘Who Will Greet You at Home’ and ‘Windfalls’, but keep your focus on the story the question names.',
      'Several stories deal with abuse, suicide and violence. Write about them factually and focus on what the writing does, as an examiner expects.',
    ],
  },

  modelAnswer: {
    question: 'How does Arimah make this ending to ‘The Future Looks Good’ so shocking?',
    paragraph:
      "Arimah makes the ending shocking by placing it straight after the story's only moment of tenderness, and by breaking a pattern the reader has learned to trust. In the bathroom mirror the sisters notice for the first time that “they have the exact same smile”, and Ezinma explains her kindness with one word, “Habit”. These details feel like the beginning of repair, yet they are exactly what doom her: the likeness makes her Bibi's double, and the habit of running errands puts her at Bibi's door. Arimah then returns to the refrain that has framed the whole story, but this time it traces the history of the man who is about to shoot her, Godwin, “who grew up under his father's corrosive indulgence”. The chemical imagery of corrosion and acid makes his entitlement a slow poison, so the violence feels both sudden and long prepared. Most shocking of all is the smallest change: the refrain's “what came behind her” becomes “who comes behind her”. The move from past to present tense, and from “what” to “who”, turns the abstract weight of history into a single man with a gun, and the flat final clause gives the reader no time to recover. The title, with its hopeful future, becomes bitterly ironic.",
    commentary: [
      'It answers the question in its first sentence and names two methods, so the whole paragraph has a clear argument rather than a list of features.',
      "Quotations are short and embedded in the student's own sentences, and each one is analysed for what it does, not just identified.",
      'It notices structure, the placing of the tender scene before the violence and the changed refrain, which is often what separates the strongest answers.',
      'It zooms in on single words (“what” and “who”, “corrosive”) and on tense, which shows precise close reading.',
      'It links the passage to the whole story through the refrain and the ironic title, without drifting into plot summary.',
      'The violence is described factually and briefly, with the focus kept on the writing.',
    ],
  },

  timeline: [
    {
      where: 'The Future Looks Good, pp. 1-8',
      title: 'What came behind her',
      summary:
        "As Ezinma fumbles with the keys to her sister's flat, the story tells what she cannot see behind her: her father's hard boyhood, her parents meeting over stolen yams in the war, her sister Bibi's love affair with a violent man. It ends when that man, Godwin, mistakes her for Bibi and shoots her.",
      setting: "The door of Bibi's flat in Nigeria, and decades of family history",
      who: ['Ezinma', 'Bibi', 'Godwin', "Ezinma's mother"],
      quote: "doesn't see what came behind her",
      themes: ['War and inherited history', 'Mothers and daughters'],
      tension: 5,
      significance:
        'The opening story sets the key for the collection: the past is always present, and the danger to girls comes from the men and history around them.',
    },
    {
      where: 'War Stories, pp. 9-22',
      title: "The Girl Army and a father's last story",
      summary:
        'Nwando exposes a classmate, briefly rules a playground army and loses it when she punches a girl. At home her father Azike, a Biafran veteran, tells war stories over chess, until the last one, about his friend Emmanuel and the snakes, ends with the admission that he ran.',
      setting: 'A school playground, and the family home over a chessboard',
      who: ['Nwando', 'Azike', 'Emmanuel'],
      quote: 'when the time came, I ran',
      themes: ['War and inherited history', 'Girls and the cost of boldness'],
      tension: 4,
      significance:
        "A child's small war is set beside a real one, and the father's broken story shows how the war still claims its survivors.",
    },
    {
      where: 'Wild, pp. 23-54',
      title: 'The fund-raiser',
      summary:
        "Ada, sent from America to Lagos, goes to a society fund-raiser with her cousin Chinyere. Needled by a woman with a grudge against her mother, she carelessly confirms the family secret about Chinyere's son. Chinyere abandons her, is punished at home, and the cousins end the night together with the boy.",
      setting: "A convention centre in Lagos, and Auntie Ugo's house",
      who: ['Ada', 'Chinyere', 'Auntie Ugo'],
      quote: "This was the closest she would get to drawing my mother's blood.",
      themes: ['Home and belonging', 'Mothers and daughters'],
      tension: 4,
      significance:
        "Shows respectability as a form of control, and daughters paying for their mothers' histories.",
    },
    {
      where: 'Light, pp. 55-63',
      title: 'The girl is sent to America',
      summary:
        "Enebeli raises his fourteen-year-old daughter in Port Harcourt while his wife studies abroad, refusing to dim her boldness. Her mother's disapproval over Skype begins to quieten her, and when her mother takes a job in the States the girl is sent there, and comes back on screen subdued.",
      setting: 'A bungalow in Port Harcourt, a school office, and a Skype screen',
      who: ['Enebeli Okwara', "Enebeli's daughter", "Enebeli's wife"],
      quote: 'there is a little less light to her',
      themes: ['Girls and the cost of boldness', 'Home and belonging'],
      tension: 3,
      significance:
        "The collection's clearest picture of a bold girl being corrected, and its central image of girls as light and fire.",
    },
    {
      where: 'Second Chances, pp. 65-78',
      title: 'The mother who stepped out of a photograph',
      summary:
        "Eight years after her death, Uche's mother appears as she was in a 1982 photograph. Her father and sister Udoma welcome her; Uche, haunted by their last argument, hunts for the photograph. In the morning her mother is gone, the photograph is crumpled, and Uche finally says sorry.",
      setting: 'A mattress shop and the family home',
      who: ['Uche', "Uche's mother", 'Udoma'],
      quote: 'What you are is disappointing.',
      themes: ['Grief', 'Mothers and daughters'],
      tension: 4,
      significance:
        'A magical return makes guilt and unfinished grief visible, and gives a daughter the chance real life did not.',
    },
    {
      where: 'Windfalls, pp. 79-92',
      title: 'The last fall',
      summary:
        'Amara has been trained by her mother to fake falls for compensation since she was a small child. Pregnant at fifteen, she slips on melted ice cream in a supermarket, a real accident this time, and loses the baby, while her mother celebrates the settlement.',
      setting: 'Supermarkets, motels and a hospital across the United States',
      who: ['Amara', "Amara's mother"],
      quote: "Five hundred thousand dollars, baby. That's my girl.",
      themes: ['Bargains and debts', 'Mothers and daughters'],
      tension: 5,
      significance:
        "The collection's darkest picture of a mother's bargain, and its bitterest irony: the only real fall pays most.",
    },
    {
      where: 'Who Will Greet You at Home, pp. 93-111',
      title: "A child made of other women's hair",
      summary:
        "After her yarn baby unravels, Ogechi secretly makes a baby from hair swept up in Mama's salon, and pays for its blessing with more of her joy. The child is glossy and sturdy but hungry, sucking at the hair on the back of her neck and then at every scrap of hair she can gather.",
      setting: 'A hair salon, an eatery, a bus and a single rented room in a Nigerian city',
      who: ['Ogechi', 'Mama'],
      quote: 'A child that cost much brought much.',
      themes: ['Bargains and debts', 'Mothers and daughters'],
      tension: 3,
      significance:
        'The magical premise makes class and the pressure to mother literal: a child bought with joy, made from forbidden material.',
    },
    {
      where: 'Who Will Greet You at Home, pp. 112-121',
      title: 'Fire, and a child of clay',
      summary:
        "An assistant sent to fetch a wig from beside the hidden baby disappears; the child begins to laugh with her snicker. When Mama touches it she collapses. At night the child attacks Ogechi, who burns it, then mixes its ashes into clay and makes a new child with her mother's face.",
      setting: "Mama's salon and Ogechi's room at night",
      who: ['Ogechi', 'Mama', "Ogechi's mother"],
      quote: 'Let this child be born in sorrow',
      themes: ['Mothers and daughters', 'Bargains and debts'],
      tension: 5,
      significance:
        'An ending that can be read as reconciliation with her mother or as the repetition of hardness in a new generation.',
    },
    {
      where: "Buchi's Girls, pp. 123-149",
      title: 'Kano, and the call to Ijeoma',
      summary:
        "Widowed Buchi keeps house for her sister while her daughters grieve. Her friend Ijeoma offers to take Louisa to South Africa under her own dead daughter's name. On the day Dickson humiliates her and Damaris's pet chicken is killed, Buchi decides to send Louisa away.",
      setting: "Precious and Dickson's house, its kitchen and yard",
      who: ['Buchi', 'Louisa', 'Damaris', 'Dickson', 'Ijeoma'],
      quote: "do something a mother just couldn't do",
      themes: ['Grief', 'Bargains and debts', 'Mothers and daughters'],
      tension: 4,
      significance:
        "A realist study of poverty and charity, in which a mother's love takes the form of giving a child up.",
    },
    {
      where: 'What It Means When a Man Falls from the Sky, pp. 151-161',
      title: 'A man falls from the sky',
      summary:
        "A man dies trying to fly using Furcal's Formula, the equation that has also let Mathematicians remove grief. Nneoma, a grief worker in the Biafra-Britannia Alliance, watches the blame gather, misses her former lover Kioni, and avoids her grieving father.",
      setting: 'Enugu, in a flooded future world, through news broadcasts and a chauffeured car',
      who: ['Nneoma', "Nneoma's father"],
      quote: 'drawing them from living bodies like poison from a wound',
      themes: ['Grief', 'Home and belonging'],
      tension: 3,
      significance:
        'Sets up the speculative world and the question in the title: what does it mean when the formula fails?',
    },
    {
      where: 'What It Means When a Man Falls from the Sky, pp. 162-169',
      title: 'The Senegalese girl',
      summary:
        "Lecturing at an elite school, Nneoma sees overwhelming grief in a refugee girl who survived the Elimination in Senegal. Breaking the rules, she takes the girl's grief without the regulated process, and needs pills to sleep off the girl's memories.",
      setting: 'A classroom and a school bathroom',
      who: ['Nneoma', 'The Senegalese girl'],
      themes: ['Grief', 'Home and belonging'],
      tension: 3,
      significance:
        'Shows who is usually denied help and what taking grief costs the one who takes it.',
    },
    {
      where: 'What It Means When a Man Falls from the Sky, pp. 170-174',
      title: 'Kioni comes back',
      summary:
        "Kioni appears at Nneoma's gate, barefoot, wounded and frantic. Looking into her, Nneoma sees what happens when the Formula goes wrong far down the line, and tries to calculate it all. It is too vast; her last clear thought is of her father.",
      setting: "The gate of Nneoma's compound",
      who: ['Nneoma', 'Kioni Mutahi', "Nneoma's father"],
      quote: 'A thousand falling men landing on you.',
      themes: ['Grief'],
      tension: 5,
      significance:
        'The title image returns, multiplied, and the story ends with the collapse of the certainty its society was built on.',
    },
    {
      where: 'Glory, pp. 175-199',
      title: 'The ring',
      summary:
        "Unlucky Glory meets Thomas, the ideal Nigerian man, at her call centre, and follows her grandfather's advice to trick the gods. His mother reveals plans for Glory to move to Nigeria ahead of him. Offered a ring, Glory makes a decision the story does not reveal.",
      setting: 'A Minneapolis call centre and apartment, and a village in Nigeria',
      who: ['Glory', 'Thomas', "Thomas's mother", "Glory's grandfather"],
      quote: "If you can't please the gods, trick them.",
      themes: ['Girls and the cost of boldness', 'Home and belonging'],
      tension: 3,
      significance:
        "A comic, realist story about luck, family expectation and a woman's control over her own life, with an open ending.",
    },
    {
      where: 'What Is a Volcano?, pp. 201-212',
      title: 'How a volcano was made',
      summary:
        "Mocked by the gods, Ant takes revenge on River by stealing her newborn twins; one is eaten and the other hidden, her location sealed in a stone. River's grief floods and shakes the world, and her grieving women become the land, weeping whenever the lost child cries.",
      setting: 'The world of the gods, and then the human world',
      who: ['River', 'Ant', 'Bereaver'],
      quote: 'and that, since you asked, is a volcano',
      themes: ['Grief', 'Mothers and daughters'],
      tension: 4,
      significance:
        "A myth that turns a mother's grief into landscape, and a warning about the revenge of those who are laughed at.",
    },
    {
      where: 'Redemption, pp. 213-230',
      title: 'The girl who threw things',
      summary:
        'The narrator is fascinated by Mayowa, the bold new house girl next door, then betrays her. Sent to Brother Benni for prayer, Mayowa fights off his assault, proving true what the narrator once said about him, and is sent home in disgrace. The narrator steps out and throws something of her own.',
      setting: 'Two neighbouring houses on a Nigerian housing estate, and a church',
      who: ['The narrator (Redemption)', 'Mayowa', 'Brother Benni', 'Mrs Ajayi'],
      quote: 'I stepped into view and threw something of my own.',
      themes: ['Girls and the cost of boldness', 'Mothers and daughters'],
      tension: 4,
      significance:
        'The collection ends on defiance: after so many dimmed girls, one finally acts.',
    },
  ],

  relationships: [
    {
      from: 'Ezinma',
      to: 'Bibi',
      kind: 'sisters',
      note: "Rejected by her sister all her life, Ezinma keeps loving her; they find their shared smile just before Godwin shoots Ezinma in Bibi's place.",
    },
    {
      from: 'Bibi',
      to: 'Godwin',
      kind: 'lovers, then victim and abuser',
      note: 'His gifts are all in his own name; when she leaves, his violence follows her family.',
    },
    {
      from: "Ezinma's mother",
      to: 'Bibi',
      kind: 'mother and daughter',
      note: 'A rivalry that begins in the womb; their reunion is silent and stone-faced.',
    },
    {
      from: 'Nwando',
      to: 'Azike',
      kind: 'daughter and father',
      note: 'Chess and stories bind them; his last story, with no lesson, shows her the damage the war left.',
    },
    {
      from: 'Azike',
      to: 'Emmanuel',
      kind: 'comrades from the war',
      note: "Friends who share memories no one else can; Emmanuel's death leaves Azike more alone with them.",
    },
    {
      from: 'Ada',
      to: 'Chinyere',
      kind: 'cousins',
      note: "Rivals by their mothers' comparison, then briefly allies, then betrayer and betrayed, and at last closer.",
    },
    {
      from: 'Chinyere',
      to: 'Auntie Ugo',
      kind: 'daughter and mother',
      note: "Controlled by her mother's need for respectability, Chinyere lies to get out of the house and is punished.",
    },
    {
      from: 'Enebeli Okwara',
      to: "Enebeli's daughter",
      kind: 'father and daughter',
      note: 'He treasures her fire and cannot protect it once she leaves.',
    },
    {
      from: "Enebeli's wife",
      to: "Enebeli's daughter",
      kind: 'mother and daughter, at a distance',
      note: 'Long absence and correction over Skype turn a mother into a stranger the girl is wary of.',
    },
    {
      from: 'Uche',
      to: "Uche's mother",
      kind: 'daughter and dead mother',
      note: 'An argument never repaired in life is finally answered with an apology.',
    },
    {
      from: 'Amara',
      to: "Amara's mother",
      kind: 'daughter and exploiting mother',
      note: "The mother treats her daughter as a source of money; Amara's tie to her is total and damaging.",
    },
    {
      from: 'Ogechi',
      to: 'Mama',
      kind: 'debtor and creditor',
      note: "Mama blesses Ogechi's babies and takes her feelings as payment, until the hair child turns the trade on her.",
    },
    {
      from: 'Ogechi',
      to: "Ogechi's mother",
      kind: 'daughter and estranged mother',
      note: 'Ogechi defines herself against her practical mother, and ends by making a child in her image.',
    },
    {
      from: 'Buchi',
      to: 'Louisa',
      kind: 'mother and elder daughter',
      note: 'Buchi decides that loving Louisa means sending her away.',
    },
    {
      from: 'Buchi',
      to: 'Dickson',
      kind: 'dependent and brother-in-law',
      note: 'His charity is a form of power, and he makes her ask for it in front of her child.',
    },
    {
      from: 'Buchi',
      to: 'Ijeoma',
      kind: 'oldest friends',
      note: "Bound by the loss of a husband and a daughter; Ijeoma's offer is both help and a hard bargain.",
    },
    {
      from: 'Nneoma',
      to: 'Kioni Mutahi',
      kind: 'former lovers',
      note: "Divided by whom they served, and by Nneoma's request that Kioni work on her father; reunited only at the end.",
    },
    {
      from: 'Nneoma',
      to: "Nneoma's father",
      kind: 'daughter and father',
      note: 'Her failure to take his grief estranged them; her last clear thought is of him.',
    },
    {
      from: 'Glory',
      to: 'Thomas',
      kind: 'girlfriend and suitor',
      note: 'She sees his luck as something taken from her; he and his mother have already planned her future.',
    },
    {
      from: 'Glory',
      to: "Glory's grandfather",
      kind: 'granddaughter and grandfather',
      note: 'The man who called her unlucky is the one who accepts her, and advises her to trick the gods.',
    },
    {
      from: 'River',
      to: 'Ant',
      kind: 'enemies',
      note: 'A joke to her and a grievance to him becomes a revenge that reshapes the world.',
    },
    {
      from: 'River',
      to: 'Bereaver',
      kind: 'sisters',
      note: 'The sister who slept while the twins were taken loses even her name to guilt.',
    },
    {
      from: 'The narrator (Redemption)',
      to: 'Mayowa',
      kind: 'admirer, then betrayer',
      note: "Infatuation turns to spite, and Mayowa's resistance vindicates the narrator.",
    },
    {
      from: 'Mayowa',
      to: 'Mrs Ajayi',
      kind: 'house girl and employer',
      note: 'Mrs Ajayi sends her to Brother Benni and then believes her account, yet Mayowa is still sent back to her mother in disgrace.',
    },
  ],

  compareWith: [
    {
      title: 'Things Fall Apart',
      href: '/revision/texts/things-fall-apart',
      reason:
        "On the same Cambridge prose list: Achebe's novel shows the Igbo world before colonial rule, and Arimah's stories show Igbo families living with what came after, including the Biafran war.",
    },
    {
      title: 'Hullabaloo in the Guava Orchard',
      href: '/revision/texts/hullaballoo-in-the-guava-orchard',
      reason:
        "Also on the list: another comic, sometimes magical story about family pressure and a young person's escape, useful for comparing how two writers mix the impossible with the everyday.",
    },
    {
      title: 'To Kill a Mockingbird',
      href: '/revision/texts/to-kill-a-mockingbird',
      reason:
        'Also on the list: like ‘War Stories’ and ‘Redemption’, it is narrated by a girl looking back on how adults and institutions failed to protect the vulnerable.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'mental_health',
    'intimate_relationships',
    'discrimination',
    'colonialism',
    'mythological_religious',
    'supernatural',
  ],

  quotesFromElsewhere: [
    'a myth of my own invention',
    'watch humanity become grotesque',
    'mother as martyr',
  ],

  sources: [
    {
      label:
        "Google Books search-within-volume on the Penguin / Riverhead ebook (2017), volume H-DODAAAQBAJ: every quotation, the contents page, the copyright page's list of earlier publications, and page numbers",
      url: 'https://books.google.com/books?id=H-DODAAAQBAJ',
    },
    {
      label:
        'Internet Archive full-text search over a scan of the Riverhead hardback (New York, 2017, 230 pages): second check of every quotation',
      url: 'https://archive.org/details/whatitmeanswhenm0000arim_u9m2',
    },
    {
      label:
        'Internet Archive, a second scan, catalogued under Riverhead but printed by Tinder Press (its copyright page is the UK one); its page breaks occasionally fall a page earlier',
      url: 'https://archive.org/details/whatitmeanswhenm0000arim_o5m4',
    },
    {
      label:
        "Penguin Random House publisher's page: description, awards, praise (including the New York Times Book Review and NPR), the author's move from Nigeria to Louisiana at thirteen, and the full excerpt of 'The Future Looks Good'",
      url: 'https://www.penguinrandomhouse.com/books/540701/what-it-means-when-a-man-falls-from-the-sky-by-lesley-nneka-arimah/',
    },
    {
      label:
        "The New Yorker, 'Who Will Greet You at Home' (26 October 2015), read for plot; not quoted, because the book revises it",
      url: 'https://www.newyorker.com/magazine/2015/10/26/who-will-greet-you-at-home',
    },
    {
      label:
        "The New Yorker, 'This Week in Fiction' interview with Arimah by Deborah Treisman (2015): her comments on myth, magical realism and motherhood",
      url: 'https://www.newyorker.com/books/page-turner/fiction-this-week-lesley-nneka-arimah-2015-10-26',
    },
    {
      label:
        "Granta, 'Light' (28 April 2015), 2015 Commonwealth Short Story Prize regional winner for Africa; read for plot, not quoted",
      url: 'https://granta.com/light/',
    },
    {
      label:
        "Harper's Magazine, 'Glory' (March 2016), read for plot via The Short Story Project; not quoted",
      url: 'https://harpers.org/archive/2016/03/glory-3/',
    },
    {
      label: "Brittle Paper, 'Lesley Nneka Arimah Wins a 2017 O. Henry Prize' (for 'Glory')",
      url: 'https://brittlepaper.com/2017/06/lesley-arimah-wins-ohenry-award/',
    },
    {
      label: 'Kirkus Reviews, review of the collection (2017 Kirkus Prize winner)',
      url: 'https://www.kirkusreviews.com/book-reviews/lesley-nneka-arimah/what-it-means-when-a-man-falls-from-the-sky/',
    },
    {
      label: "Brittle Paper, Precious Arinze's review (2018)",
      url: 'https://brittlepaper.com/2018/03/review-man-falls-sky-precious-arinze/',
    },
    {
      label: "NPR, Michael Schaub's review (5 April 2017)",
      url: 'https://www.npr.org/2017/04/05/521959681/what-it-means-when-a-man-falls-from-the-sky-is-defiantly-electrically-original',
    },
    {
      label: 'Shiny New Books review: UK publisher (Tinder Press, London, 2017, 240 pages)',
      url: 'https://shinynewbooks.co.uk/what-it-means-when-a-man-falls-from-the-sky-by-lesley-nneka-arimah',
    },
    {
      label: 'Caine Prize shortlists 2016 (title story) and 2017 (Who Will Greet You at Home)',
      url: 'http://www.caineprize.com/previously-shortlisted',
    },
    {
      label: 'Africa in Words, review of the title story on the 2016 Caine Prize shortlist',
      url: 'https://africainwords.com/2016/06/21/2016-caine-prize-shortlist-review-of-lesley-nneka-arimahs-what-it-means-when-a-man-falls-from-the-sky/',
    },
    {
      label:
        "Wikipedia, Lesley Nneka Arimah and What It Means When a Man Falls from the Sky: awards and their years, publication dates and her master's degree at Minnesota State University, Mankato; its running order of the stories is wrong",
      url: 'https://en.wikipedia.org/wiki/What_It_Means_When_a_Man_Falls_from_the_Sky',
    },
    {
      label:
        'Wikipedia, Nigerian Civil War: dates, Ojukwu, the 1966 killings, the blockade and estimates of the dead',
      url: 'https://en.wikipedia.org/wiki/Nigerian_Civil_War',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475 syllabus for 2027 (Version 2): set text list and Paper 1 format',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
    },
  ],
}
