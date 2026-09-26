import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Telling Tales, AQA's anthology of seven short stories, set as one text for
 * GCSE English Literature (8702). A complete guide: the text had no guide of its
 * own before this file.
 *
 * WHICH SEVEN STORIES. Confirmed by the contents page of Cambridge University
 * Press's free teacher's resource for the anthology (2015) and by the stories
 * AQA's own question papers name. The order used here is Cambridge's.
 *
 * HOW THE QUOTATIONS WERE CHECKED, story by story. Nothing here is from memory.
 * - 'Odour of Chrysanthemums' is out of copyright. Every quotation was matched
 *   against two transcriptions of Lawrence's 1914 text in The Prussian Officer:
 *   Project Gutenberg eBook 22480 and the University of Nottingham's online
 *   edition. The 1914 text is the right one: Cambridge's resource quotes "He was
 *   a happy lad at home", which is not in the 1911 English Review version, and
 *   reads the ending as the 1914 one.
 * - 'My Polish Teacher's Tie': checked against a copy of the AQA anthology's own
 *   printing (pages marked Copyright 2010 AQA and its licensors).
 * - 'Korea': checked against two texts that differ in small ways, the one at
 *   shortsonline and the Vintage Collected Stories wording quoted in a Journal of
 *   the Short Story in English article. Only wording shared by both is quoted.
 *   They disagree in the last sentence ("prepare myself to murder" and "prepare
 *   myself for murder"), so that sentence is quoted only up to "prepare myself".
 * - 'A Family Supper': checked against a British-spelling text and an
 *   American-edited one; only wording shared by both is quoted.
 * - 'The Darkness Out There': checked against a full copy of the story in a
 *   school home-learning pack, which agreed with every phrase Cambridge prints.
 * - 'Chemistry' and 'Invisible Mass of the Back Row': no full text was found.
 *   'Chemistry' quotations are phrases printed by Cambridge University Press's
 *   student book sample unit, each agreeing with Universal Teacher, the Victorian
 *   Web or Shalom Education. 'Invisible Mass' quotations each appear in two of
 *   Cambridge's teacher's resource, Shalom Education and Get Revising.
 *   REVIEW FIX: an earlier draft keyed "Miss Henderson reads challenge in my
 *   face", which only the Cambridge resource prints; it was replaced with "Words
 *   gush out of my mouth" (Cambridge and Get Revising agree). The Columbus
 *   question and "the culture of the back row" come from Shalom and Get
 *   Revising, not from Cambridge.
 *
 * PLOT FACTS for 'Invisible Mass of the Back Row' are the least secure in this
 * file, because no copy of the story was found. What the guide says about its
 * ending (the back row finding its voice) rests on two revision sources that
 * agree; a reviewer with the anthology should check that first.
 *
 * No page numbers are given: the anthology's pagination was not checked.
 */
export const guide: StudyGuide = {
  slug: 'telling-tales',
  title: 'Telling Tales',
  author: 'AQA anthology, various writers',
  form: 'short-story-collection',
  scope:
    "All seven stories in Telling Tales, AQA's short story anthology, which is set as a single text for AQA GCSE English Literature (8702): ‘Chemistry’ (Graham Swift), ‘Odour of Chrysanthemums’ (D. H. Lawrence), ‘My Polish Teacher's Tie’ (Helen Dunmore), ‘Korea’ (John McGahern), ‘A Family Supper’ (Kazuo Ishiguro), ‘Invisible Mass of the Back Row’ (Claudette Williams) and ‘The Darkness Out There’ (Penelope Lively), taken here in the order Cambridge University Press's companion books use. Every exam question names one story and asks you to write about it and one other of your choice, so all seven matter. References are to moments in each story rather than page numbers, because the anthology's pagination was not checked. Lawrence divided his story into two numbered parts: Part II begins when the clock strikes eight.",
  rights: {
    status: 'copyright',
    acknowledgement:
      "‘Chemistry’ © Graham Swift, from Learning to Swim and Other Stories (1982). ‘My Polish Teacher's Tie’ © Helen Dunmore, from Ice Cream (2000). ‘Korea’ © John McGahern 1969. ‘A Family Supper’ © Kazuo Ishiguro. ‘Invisible Mass of the Back Row’ © Claudette Williams. ‘The Darkness Out There’ © Penelope Lively, from Pack of Cards (1986). All as printed in Telling Tales, AQA's anthology. ‘Odour of Chrysanthemums’ by D. H. Lawrence is in the public domain; quotations from it follow The Prussian Officer and Other Stories (Duckworth, 1914). Short quotations from the copyrighted stories are used for criticism and review.",
  },
  workLength: {
    words: 19700,
    basis:
      "A floor for the whole anthology, not a total. Five of the seven stories were counted from full copies: ‘Odour of Chrysanthemums’ about 7,500 words (Project Gutenberg's 1914 text), ‘The Darkness Out There’ about 4,700, ‘A Family Supper’ about 3,300, ‘My Polish Teacher's Tie’ about 2,300 (the AQA printing) and ‘Korea’ about 1,900. ‘Chemistry’ and ‘Invisible Mass of the Back Row’ could not be counted, so the anthology is longer than this. Any length over 3,000 words puts it in the long-work band, where the page may quote at most 400 words in all, so this floor cannot loosen the limit. Each copyrighted story is also held, separately, to a few short phrases, far below a tenth of its own length.",
  },

  quoteNote:
    "Each story has only a few quotations here, because every one was checked: against the AQA anthology's own printing for ‘My Polish Teacher's Tie’, against two published versions for ‘Korea’ and ‘A Family Supper’, against two transcriptions of Lawrence's 1914 text, against a full copy for ‘The Darkness Out There’, against Cambridge University Press's student book and a second study guide for ‘Chemistry’, and against at least two published study guides for ‘Invisible Mass of the Back Row’. Published versions of ‘Korea’ differ by one small word in its last sentence, so that sentence is quoted only in part. If a word here ever differs from your anthology, trust your anthology.",

  overview: {
    summary: [
      "Telling Tales is AQA's anthology of seven short stories, set as a single text for GCSE English Literature. The oldest, D. H. Lawrence's ‘Odour of Chrysanthemums’, was written in 1909 about a Nottinghamshire mining family; the other six are modern stories, and they move from an Irish river to a Japanese family home, an English school staffroom, a Jamaican classroom and a cottage at the edge of an English wood. What joins them is a moment of seeing. In almost every story someone looks at a person they thought they knew - a husband, a father, a kind old lady, a teacher, even themselves - and sees them clearly for the first time. The stories are about what that knowledge costs.",
      "In ‘Chemistry’ (Graham Swift), a boy, his widowed mother and his Grandfather hold together after two deaths until his mother's new partner, Ralph, moves into their lives. The model boat the boy and his Grandfather sail on the park pond sinks, the Grandfather retreats to his shed and his chemicals, and he dies after drinking the prussic acid he keeps there. In ‘Odour of Chrysanthemums’, Elizabeth Bates waits through a winter evening for her husband Walter to come home from the pit, sure he is drinking. He has been suffocated underground, and as she washes his body she realises that she never knew him. In ‘My Polish Teacher's Tie’ (Helen Dunmore), Carla Carter, a half-Polish catering assistant whom the teachers barely see, starts writing to a Polish teacher, Stefan, who takes her for a teacher, and then has to face him when he visits her school.",
      'In ‘Korea’ (John McGahern), a young Irishman spends a last summer fishing with his father, hears him describe an execution he witnessed in 1919, and then overhears him talking about the money an Irish family was paid when their son was killed fighting for America in Korea. In ‘A Family Supper’ (Kazuo Ishiguro), a son comes home to Japan two years after his mother died from eating fugu, a poisonous fish, and his father cooks a meal of fish he will not name. In ‘Invisible Mass of the Back Row’ (Claudette Williams), Hortense is punished in her Jamaican classroom for questioning the lesson on Columbus, then moves to England to join her parents and finds herself in another back row. In ‘The Darkness Out There’ (Penelope Lively), Sandra and Kerry, two teenagers helping an elderly widow, hear her describe how she left an injured German airman to die in the war.',
      "The exam names one story and asks you to write about it and one other, so learn three or four stories in depth and the rest well enough to pair with them. The pairings that work best share a question rather than a plot: two stories about a parent and child who misunderstand each other (‘Korea’ and ‘A Family Supper’), two about a young person learning something about an adult (‘The Darkness Out There’ and ‘Chemistry’), two about grief (‘Odour of Chrysanthemums’ and ‘A Family Supper’), and two about people who are overlooked (‘My Polish Teacher's Tie’ and ‘Invisible Mass of the Back Row’). This guide gives every story a place in each section so that any pairing is covered.",
    ],
  },

  context: [
    {
      heading: 'How Telling Tales is examined',
      body: "Telling Tales is one of the set texts in Section A (modern prose or drama) of Paper 2, Modern texts and poetry. You answer one question on your chosen text, and for Telling Tales you choose between two. Each names one story and asks about an idea in it and in one other story of your choice. AQA's specimen paper asked about characters losing their innocence, naming ‘The Darkness Out There’, and about conflict, naming ‘A Family Supper’. Its 2020 paper asked about misunderstandings between parents and children, naming ‘Korea’, and the difficulties of growing up, naming ‘Chemistry’. The June 2023 paper asked about suffering and grief, naming ‘Odour of Chrysanthemums’, and a family in conflict, naming ‘A Family Supper’. No extract is printed and you cannot take the anthology in, so everything comes from memory. The mark schemes say that a comparative structure is allowed but comparison itself is not what is rewarded, and that a whole-text answer here means the two full stories. Section A also rewards accurate spelling and punctuation and a range of vocabulary. AQA's report on the 2023 exam adds that direct quotation is not required: a precise reference to a moment, or a paraphrase of what a character says, counts as evidence.",
    },
    {
      heading: 'D. H. Lawrence and the Nottinghamshire coalfield',
      body: "David Herbert Lawrence was born on 11 September 1885 in Eastwood, Nottinghamshire, the son of a miner at Brinsley Colliery, the pit whose headstocks rise over the opening of the story. ‘Odour of Chrysanthemums’ comes out of his own family. His uncle James Lawrence was killed by a fall of coal at Brinsley Colliery on 17 February 1880, leaving his wife Polly with two small children and a third who was born that July. The University of Nottingham's Lawrence archive records that James and Polly were the basis for Walter and Elizabeth Bates, and that they lived in a cottage very like the one in the story. Lawrence wrote the story in 1909, published it in the English Review in 1911, and later turned the same material into a play, The Widowing of Mrs Holroyd. The world of the story is exact: the miners come up at the end of a shift and talk of finishing a stint (a set piece of work) and of their butties (their workmates); Walter gives Elizabeth twenty-three shillings, and her father has heard him boast of spending half a sovereign in the pub; if he dies, she calculates, she will have to manage on a little pension and what she can earn. Lawrence died in France in 1930.",
    },
    {
      heading: "Lawrence's two endings",
      body: "The ending you study is not the one Lawrence first published. In the 1911 English Review version, which the University of Nottingham has put online, Elizabeth's grief over the body becomes a passion, and death seems to restore her husband to her, fair and unmarked, free of the drink that had disfigured him. In July 1914, preparing the story for The Prussian Officer and Other Stories, Lawrence divided it into two numbered parts and rewrote the ending again. Now the body shows Elizabeth that Walter was always a stranger to her, and that neither of them was more to blame than the other; her grief is mixed with fear and shame. Cambridge's teacher's resource quotes a line found only in the 1914 text and reads the ending as Elizabeth's recognition that both of them were to blame, so that is the version to know. The revision is good evidence about intention. One reading is that Lawrence chose a harder, more honest ending over a consoling one, so that the story you study is about the failure of a marriage rather than its restoration.",
    },
    {
      heading: 'Graham Swift and ‘Chemistry’',
      body: "Graham Swift was born in London in 1949. ‘Chemistry’ is collected in his first book of stories, Learning to Swim and Other Stories (1982), and he won the Booker Prize in 1996 with Last Orders. The title is the key to the story. Chemistry is the Grandfather's hobby, carried on in his garden shed, and it is also the everyday word for how people react to one another. His belief that substances change but the elements do not is the story's argument in miniature: the family changes when Ralph arrives, but the boy insists at the end that what he loved has not been destroyed. Cambridge's student book notes that the narrator is an adult, possibly an old man, looking back on events from when he was ten, so the story is told twice at once, by a child who feels everything and a man who is still trying to explain it.",
    },
    {
      heading: 'Helen Dunmore and the staffroom ladder',
      body: "Helen Dunmore (1952 to 2017) was born in Beverley, Yorkshire, studied English at the University of York and worked as a teacher in Finland for two years before becoming a poet and novelist. She won the Orange Prize for Fiction in 1996 with A Spell of Winter, and ‘My Polish Teacher's Tie’ is collected in Ice Cream (2000). The story depends on something every student recognises: the unwritten ranking of the adults in a school. Carla serves tea and buns in a blue overall and white cap with the school logo on it, for £3.89 an hour, and the teachers step out of her way without looking at her. Her Polish mother came to England after the war, and her father stopped her speaking Polish when she started school, so her lost language is a family history in miniature. Stefan comes from Katowice, a city in Silesia in southern Poland that grew up on coal, so his first poem, about a bird lost in a coal mine, may draw on his own world.",
    },
    {
      heading: 'John McGahern, Ireland and two wars',
      body: "John McGahern (1934 to 2006) was born in Dublin and raised in County Leitrim, the son of a police sergeant who was physically abusive to his children. His novel The Dark (1965) was banned in Ireland and he was dismissed from his teaching post. ‘Korea’ was first published in The Atlantic in October 1969, collected in Nightlines (1970) and filmed in 1995. Two wars meet in it. The father fought in the Irish War of Independence: captured in an ambush in 1919, he was held in Mountjoy prison in Dublin, where he saw two prisoners shot as reprisals. The son's future lies in the shadow of the Korean War (1950 to 1953), in which the United States fought. A young Irishman who emigrated to America could be conscripted, and a local family, the Morans, was paid ten thousand dollars when their son Luke was killed there. The story also records a way of life ending: the father's eel fishing may lose its licence, because the tourist board says it spoils the coarse fishing for the summer visitors from Liverpool and Birmingham.",
    },
    {
      heading: 'Kazuo Ishiguro, Japan and fugu',
      body: "Kazuo Ishiguro was born in Nagasaki in 1954. His family moved to Guildford in Surrey in 1960, when he was five, and he did not visit Japan again until 1989. He won the Booker Prize in 1989 with The Remains of the Day and the Nobel Prize in Literature in 2017, and his novel Never Let Me Go is also an AQA set text. ‘A Family Supper’ is one of his early stories. It opens with fugu, the pufferfish eaten as a delicacy in Japan, whose poison, the narrator explains, makes a clumsy preparation fatal. The father's values belong to an older Japan. He is proud of the samurai blood in the family, served on a ship in the war though his ambition was the air force, and admires his business partner Watanabe, who killed himself when their firm collapsed and, Kikuko reveals, took his wife and two young daughters with him. The son, by contrast, went to live in California, and his leaving opened a rift with his parents that the story never fully explains.",
    },
    {
      heading: 'Claudette Williams, Jamaica and a colonial classroom',
      body: "‘Invisible Mass of the Back Row’ draws on Claudette Williams's own childhood: revision sources record that, like Hortense, she grew up in Jamaica with an aunt while her parents were in England, and joined them later. The history behind its Columbus lesson matters. Columbus landed on Jamaica in May 1494, on his second voyage; the Spanish enslaved the Taíno people, most of whom died from disease and overwork, and enslaved Africans were then brought to work the island. England captured Jamaica in 1655, slavery formally ended there in 1834 and the last apprentices were freed in 1838, and Jamaica became independent in 1962. A lesson that expects a Black Jamaican girl to celebrate Columbus asks her to tell her own history from the conquerors' side, which is why her question about why he came at all is so dangerous in that room. The story also shows colourism: Lorna Phillips, the teacher's favourite, is ‘red’, which Cambridge glosses as lighter-skinned, and better off than Hortense. Hortense's journey to join her parents in England is one that many Caribbean children made in the decades after 1948, the years of the people now called the Windrush generation.",
    },
    {
      heading: 'Penelope Lively and the memory of the war',
      body: "Penelope Lively was born in Cairo in 1933. She won the Carnegie Medal in 1973 for The Ghost of Thomas Kempe and the Booker Prize in 1987 for Moon Tiger, and her fiction often turns on memory and the way the past presses on the present. ‘The Darkness Out There’ is collected in Pack of Cards (1986). It is set decades after the Second World War, but for Mrs Rutter the war is still close: her husband Bill, in the Ox and Bucks (the Oxfordshire and Buckinghamshire Light Infantry), was killed in Belgium at the very start, and in November 1942 a German plane came down in Packer's End, the wood beside her cottage. By Sandra's day the crash has become a local ghost story, and people say they have heard the dead crew talking in German among the trees. Lively tests that comfortable legend against what one widow actually did. Mrs Rutter's sister Dot had been a VAD, a wartime volunteer nurse, which makes their decision to leave the airman more chilling still.",
    },
  ],

  themes: [
    {
      title: 'Families in conflict',
      body: "Almost every story here is about a family under strain, and what the anthology shows is how quietly conflict can work. In ‘Odour of Chrysanthemums’ a marriage has become a long cold war; in ‘Chemistry’ a new partner splits a grieving household into two camps; in ‘Korea’ and ‘A Family Supper’ fathers and sons face each other across a gap of generations and values. The conflict is rarely shouted. It lives in a pause - “For some moments my sister did not move” - in a look that seems calculating, in a dinner kept waiting for a man who does not come. One reading is that these families fail through cruelty. The more convincing one is that they fail through not seeing each other: Elizabeth realises that she and Walter “had met in the dark and had fought in the dark”, the son in ‘Korea’ understands his father only by overhearing him, and the boy in ‘Chemistry’ never hears his mother's side. For a question on families in conflict, pair a story where the conflict is open, such as ‘Chemistry’, with one where it is buried, such as ‘A Family Supper’, and ask what each writer suggests the family lacks.",
    },
    {
      title: 'Growing up and loss of innocence',
      body: "Four of the stories are told by, or through, young people who learn something about an adult that ends their childhood. Sandra walks into Mrs Rutter's cottage believing that evil lives in the wood and walks out knowing that it can live in a kind old lady. The son in ‘Korea’ says it outright, “I knew my youth had ended”, after he overhears his father. The boy in ‘Chemistry’ loses his Grandfather and his trust in his mother at once, and Hortense grows up by refusing the version of history her classroom teaches, which is told from the conquerors' side. The pattern is that innocence is lost through knowledge rather than experience. Nobody here grows up gradually; they are told something, or overhear it, and cannot go back. AQA's specimen paper asked exactly this question about ‘The Darkness Out There’. A strong answer also notices that adults lose illusions too. Elizabeth Bates, the oldest learner in the anthology, loses hers over her husband's body, which suggests that in these stories growing up is not an age but an event.",
    },
    {
      title: 'Grief and death',
      body: "Death is at the centre of five of the seven stories, and they are most interesting when grief goes wrong. Walter's mother grieves loudly for the boy she remembers, while Elizabeth's grief is tangled with fear and shame, and she is even “grateful to death, which restored the truth”. In ‘Chemistry’ the mother's recovery from her husband's death looks to her son like betrayal, and the Grandfather, who would not let his dead wife's memory change, takes his own life. In ‘A Family Supper’ the mother's death from fugu, which the father hints was no accident, hangs over a meal of fish; in ‘Korea’ a father's memory of an execution sits beside a family paid for a son's death; in ‘The Darkness Out There’ a widow's grief for her husband became her reason for letting a young man die. The strongest argument across these stories is that grief does not simply make people sad. It changes what they see and what they are capable of. AQA's June 2023 paper asked how writers present suffering and grief, naming Lawrence's story.",
    },
    {
      title: 'Appearance and reality',
      body: "The anthology is full of people who are not what they seem, and of places that hide what they contain. Mrs Rutter looks like the dear old thing Pat described, with china kittens and a flowered tin of chocolates, and she left a trapped airman to die. Kerry Stevens, whom Sandra dismisses at first sight, turns out to be the moral centre of the story. Stefan's hopeful tie makes the teachers laugh at him, and it is the truest thing in the staffroom. In ‘A Family Supper’ the surface is so calm that the reader cannot tell whether the fish is poisonous, whether the father has Watanabe's example in mind, or whether the ghost the narrator saw as a child was his mother. The Grandfather in ‘Chemistry’ even states the theme, when he shows the boy how changed gold can be spread over something that is not gold at all. The most convincing reading is that the anthology is less interested in unmasking villains than in teaching its characters, and its readers, to look twice. As Sandra realises at the end, “You could get people all wrong”.",
    },
    {
      title: 'Identity and belonging',
      body: "Several stories ask who a person is allowed to be, and who decides. Carla is half-Polish, but nobody at the school knows it, and her father took the language from her at six. Stefan's poem gives her loss words - “Mother, I've lost the words you gave me” - and when he sings a Polish song in the staffroom she finds she can sing it too. Hortense moves between Jamaican speech and the Standard English her teachers expect, and between two countries, and each school puts her at the back. The narrator of ‘A Family Supper’ has left Japan for California and comes home to a father who blames outside influences for his son's behaviour. One reading of these stories is that identity is taken from people by institutions: the school, the classroom, the family. The more hopeful reading, which the endings of ‘My Polish Teacher's Tie’ and ‘Invisible Mass of the Back Row’ support, is that it can be reclaimed, in a song, in a question, in a voice raised from the back row.",
    },
    {
      title: 'Power and status',
      body: "Who is listened to, and who is invisible, runs right through the anthology. Carla earns £3.89 an hour, and the teachers are used to stepping aside for catering staff “without really seeing them”. Hortense sits in a back row that the title calls an invisible mass; Miss Henderson can silence her with a ruler in front of the Inspector, and her uncle believes the powerful collude to humiliate poor Black people like her. In ‘Chemistry’ Ralph takes command of a house that belongs to the Grandfather, and in ‘A Family Supper’ the father decides who speaks, who serves and who fetches the tea. In ‘Odour of Chrysanthemums’ a widow's future depends on a small pension, and in ‘Korea’ a son's life is weighed in dollars. The anthology's argument, if it has one, is that status is a way of not seeing people. Its moments of real contact, such as Carla crossing the staffroom to Stefan, happen when someone steps out from behind the role they have been given.",
    },
  ],

  characters: [
    {
      name: 'The boy',
      role: 'Narrator of ‘Chemistry’, looking back as an adult on events from when he was ten',
      body: "His father has died and he lives with his mother in his Grandfather's house, where the three of them share what he calls a sad symmetry. He loves his Grandfather, sails their model launch with him, and hates Ralph for taking his father's place. He steals acid from the shed meaning to throw it in Ralph's face, but the plan is overtaken by his Grandfather's death. He is sympathetic but not reliable about his mother: we never hear her side, only his judgement of it. At the end, at the pond, he holds on to the belief that things change but are not destroyed.",
    },
    {
      name: 'Grandfather',
      role: "The boy's grandfather in ‘Chemistry’, a widower whose house it is",
      body: "He grieves for his wife, Vera, and keeps her memory alive through the boy and his daughter, the curry she taught, and a watch chain he will not put into the beaker. He is gentle with the boy and dominant with the family, and when Ralph challenges him he does not fight for the house but withdraws to his shed and his chemistry. His lesson that you do not make things in chemistry but change them is the story's central idea. He dies after drinking the prussic acid he had named for the boy, and the boy sees him once more at the pond at the end.",
    },
    {
      name: "The boy's mother",
      role: "Alec's widow in ‘Chemistry’, and Ralph's partner",
      body: "At first she depends on her father and lives quietly in the family's shared grief. Then she changes: she stops making the curry Vera taught her, which her father misses, gives Ralph one of her dead husband's sweaters, and at one meal tells her father to take his food out to his shed. After his death she promises the boy an explanation and never gives it. The boy sees betrayal. A fairer reading is that she is a young widow trying to live again, trapped between a father and a partner who both want her loyalty, and the story lets us see that even while its narrator cannot.",
    },
    {
      name: 'Ralph',
      role: "The mother's new partner in ‘Chemistry’",
      body: "A big man who likes his food and his whisky, he arrives in a bracket, is soon a weekend fixture, and takes over. He offers the boy a new boat, shouts at the Grandfather to leave the mother alone, refuses at one meal to wait for the old man to finish, and on the morning of the death seems to be supervising the ambulance men. By the end he and the mother are planning to move house. Cambridge's teacher's resource asks a good question about him: who is the bully, Ralph or the Grandfather? Seen only through the boy's hatred, he may be less a villain than a man defending the woman he loves.",
    },
    {
      name: 'Elizabeth Bates',
      role: "Walter's wife in ‘Odour of Chrysanthemums’, pregnant with their third child",
      body: "A tall, handsome woman of imperious mien, proud of her standards and bitter about her husband's drinking. She spends Part I angry that Walter has gone to the pub, and her anger turns slowly to fear. When his body is brought home she is practical, clearing the parlour and heating water, and then, over his washed body, she has the anthology's deepest moment of recognition: that she never knew him, that they were two strangers, and that she had refused him as himself. The story ends with her submitting to life, and wincing from death, her ultimate master.",
    },
    {
      name: 'Walter Bates',
      role: 'A miner at Brinsley Colliery in ‘Odour of Chrysanthemums’',
      body: "He is absent for almost the whole story and present only as a body. Everything we learn of him comes second-hand: from Elizabeth's anger, from her father's gossip about his drinking, from his mother's memories of a happy boy, from Rigley's account of leaving him finishing a stint. He was shut in by a fall underground and suffocated. Washed, he is handsome and his face shows no traces of drink, and to Elizabeth he is utterly alien. Lawrence keeps him silent on purpose, one reading suggests, because the story is about how little of another person anyone ever sees.",
    },
    {
      name: "Walter's mother",
      role: "Elizabeth's mother-in-law in ‘Odour of Chrysanthemums’",
      body: "She brings the news of the accident and grieves in the traditional way, weeping, rocking, calling him her lamb and remembering the boy he was. She insists he was a good lad in his way and that Elizabeth, not being his mother, cannot make allowances for him. At the body she is jealous for a share in the washing. Her grief is sincere, but the story sets it against Elizabeth's: the mother mourns the child she remembers, the wife confronts the stranger she married. Her dialect speech, full of repetition, gives the scene its sound of a community's mourning.",
    },
    {
      name: 'Annie and John',
      role: "Elizabeth and Walter's children in ‘Odour of Chrysanthemums’",
      body: "John, aged five, is sullen and silent, and his mother sees his father in him; he tears the chrysanthemum petals and drops them on the path. Annie is warmer and full of wonder: she loves the fire, begs to keep the flowers in her mother's apron, and from upstairs asks whether her father is drunk. Elizabeth lies to protect them and keeps them away from the parlour. They matter because the ending turns on them: Elizabeth realises the children belong to life, and that they did not unite their parents.",
    },
    {
      name: 'Carla Carter',
      role: "Narrator of ‘My Polish Teacher's Tie’, a part-time catering assistant",
      body: 'She serves tea and buns in a school staffroom, likes the children, and is used to being unseen by the teachers. She is half-Polish, though nobody there knows it, and has lost the language her mother taught her. She asks the Head for the address of a Polish teacher and lets her penfriend think she is a teacher too, not lying but not correcting him. Terrified of being exposed when he visits, she instead walks out from behind the counter to meet him. She is dry, funny and quietly defiant, and her last words, praising his tie, side openly with what it stands for.',
    },
    {
      name: 'Stefan Jeziorny',
      role: 'A Polish teacher from Katowice, who signs his letters Steve',
      body: "He writes poetry, runs a small literary magazine and is always very polite. His poems, one about a bird lost in a coal mine and one about Carla's half-Polish childhood, give her back something she had lost. At the school he is mocked for his accent, his talk of poetry and his ties, and the Head speaks to him as if he were deaf. Carla sees him as he is: sweaty-handed, tense, hopeful, with a face much too open. His response to finding that his penfriend is a catering assistant is pleasure, and a song, which makes him the least snobbish adult in the story.",
    },
    {
      name: 'Valerie Kenward',
      role: "A teacher at Carla's school, who hosts Stefan",
      body: "She makes a great fuss about having him to stay, then complains to Susie Douglas that he is hard work, that her children cannot keep a straight face at his accent and that his ties are ridiculous. Carla has never liked her: she claims to be on a diet and then takes the biggest bun. She stands for the staffroom's snobbery, and Dunmore uses her as a foil for Carla, who is the one person who treats Stefan as an equal.",
    },
    {
      name: 'The Head',
      role: "The headteacher of Carla's school",
      body: "He runs the weekly staff briefing, announces the penfriend scheme and the Polish visit, and cannot remember Carla's name. He turns conversations into public announcements, beams at nobody, and talks loudly to Stefan as if he were deaf. At the end he is baffled to learn that Carla is Polish. He is not cruel, just blind to anyone outside the hierarchy he sits at the top of, which is exactly the blindness the story exposes.",
    },
    {
      name: 'The son (Korea)',
      role: 'Narrator of ‘Korea’, spending his last summer on the river before his exam results',
      body: "He works his father's eel lines, asks about the execution, and is wary of his father's sudden talk of America. When he overhears his father telling a cattle-dealer about the ten thousand dollars the Morans were paid for Luke's death, he works out what the plan means for him and knows his youth has ended. He refuses to go, with a quiet echo of his father's own words, and never tells him what he heard. Narrating years later, he still does not accuse; he records, which makes the ending more painful.",
    },
    {
      name: 'The father (Korea)',
      role: 'An eel fisherman and small farmer in ‘Korea’, who fought in the War of Independence',
      body: "He was captured in 1919 and watched two prisoners shot in Mountjoy, a memory that still spoils his days. He is aggressive when his son sounds too educated, proud of having fought for his country, and bitter that the country he fought for may take away his fishing licence. He urges his son towards America in borrowed words, and his excited talk with Farrell about the Morans' money convinces his son that he is thinking of what a son in the American army would be worth. Whether he is a monster or a desperate, damaged man is the story's hardest question, and McGahern refuses to answer it for us.",
    },
    {
      name: 'The narrator (A Family Supper)',
      role: 'The son in ‘A Family Supper’, home in Japan after years in California',
      body: "He returns two years after his mother's death, and learns how she died only on the drive from the airport. He is polite, guarded and evasive, answering his father in short phrases and admitting nothing about why he left or what happened with Vicki, his girlfriend in California. He frightens Kikuko with the ghost story he told as a child and then fails to recognise his own mother in a photograph. His narration is so controlled that its gaps become the story: he never says what he fears when the fish is served.",
    },
    {
      name: 'The father (A Family Supper)',
      role: 'A retired businessman in ‘A Family Supper’, widowed two years before the story',
      body: "A formidable man with a stony jaw and furious eyebrows, proud of his samurai ancestry, who once struck his son for chattering. His firm has collapsed, his partner Watanabe has killed himself and his family, and he lives alone in a large, empty house, building a plastic model battleship. He hints that his wife's death was no accident and admits he should perhaps have been a more attentive father. Then he cooks the supper. One reading is that he is planning to follow Watanabe; the other is that he is a lonely man trying, in the only formal way he knows, to bring his children home.",
    },
    {
      name: 'Kikuko',
      role: "The narrator's younger sister in ‘A Family Supper’, a student in Osaka",
      body: "Nervous and formal with her father, relaxed and giggly with her brother, she smokes secretly in the garden and is weighing up going to America with her boyfriend. She is the one who tells the narrator the full truth about Watanabe, and calls it sick. When her father orders her to help in the kitchen she hesitates before obeying, and later she silently fetches and returns their mother's photograph. She shows the cost of the father's authority, and a younger generation already half out of the door.",
    },
    {
      name: 'Watanabe',
      role: "The father's business partner in ‘A Family Supper’, dead before the story begins",
      body: "The two men were partners for seventeen years, and the father calls him a man of principle and honour. After their firm collapsed he killed himself and, as Kikuko reveals, his wife and two young daughters too. He never appears, but he haunts the meal: his example is the reason readers wonder what the father intends. When his son presses him, the father finally says Watanabe's act was a mistake, and that there are other things besides work.",
    },
    {
      name: 'Hortense',
      role: 'Narrator of ‘Invisible Mass of the Back Row’, a girl in a Jamaican school and then an English one',
      body: 'She sits in the back row, where the poorer, darker-skinned children sit, and when she is asked about Columbus in front of the Inspector she answers with a question of her own and is punished for it. Angry and humiliated, she turns her fury on Lorna Phillips, the favoured girl at the front, and the story lets us question that too. Then she leaves her aunt and her home to join her parents in England, where she meets cold, a new language and another back row. She is proud, sharp and hurt, and the story is about her finding a voice that the classroom tried to take away.',
    },
    {
      name: 'Miss Henderson',
      role: "Hortense's teacher in Jamaica",
      body: "She is as nervous of the Inspector as her pupils are, which may explain why she reacts so violently when Hortense challenges the lesson, rapping her knuckles with a ruler. Through Hortense's eyes she is an enemy, but the story lets us see the system above her too: she is responsible for her class's behaviour and answerable to the Inspector for teaching the approved version of history.",
    },
    {
      name: 'The Inspector',
      role: "A school inspector visiting Hortense's Jamaican classroom",
      body: "Cambridge's teacher's resource compares him to an Ofsted inspector, checking both the teaching and that the correct curriculum is taught. He is a forceful figure who expects respect and obedience, and the question about Columbus is a test of whether the children have learned the colonial story. For Hortense, the humiliation he inflicts hurts more than the ruler.",
    },
    {
      name: 'Lorna Phillips',
      role: 'A classmate of Hortense in Jamaica',
      body: "The teacher's favourite, she sits at the front, is better off than Hortense and is ‘red’, lighter-skinned, in the story's Jamaican usage. Hortense resents her for having everything she lacks and means to make her pay for the humiliation in class. Lorna is not really the cause of Hortense's anger, and the story's honesty lies in showing how injustice from above gets passed sideways.",
    },
    {
      name: 'Sandra',
      role: "A teenage volunteer in the Good Neighbours' Club in ‘The Darkness Out There’",
      body: "Pretty, a little vain, nervy and full of daydreams of travel, love, a good job and a sewing machine, she walks to Nether Cottage past a wood she has feared since childhood. She looks down on Kerry and warms to Mrs Rutter, who flatters her. The story is told in the third person but from her point of view, so the reader shares her misjudgements. After Mrs Rutter's story she realises that she could get people all wrong, and that the darkness she feared in the wood is in people, and now in her own head.",
    },
    {
      name: 'Kerry Stevens',
      role: 'A teenage volunteer in ‘The Darkness Out There’',
      body: "Sandra's set do not rate him, and she judges him by his licked-down hair, his acne and his grubby jeans. He is leaving school in July to work at the Blue Star garage, knows about aircraft, and does the heavy jobs without complaint. He takes against Mrs Rutter early, and when he hears what she did he walks out, shaking with anger and pity for the dead airman. He is the story's moral centre, and Sandra's final sight of him, older and larger in his anger, is the proof that she had got him wrong.",
    },
    {
      name: 'Mrs Rutter',
      role: "A widow living at Nether Cottage, beside Packer's End",
      body: 'She seems composed of soft circles, calls the teenagers her ducks and keeps chocolates for visitors, and claims a sympathy with young people. But her eyes are always watching, and her talk is laced with small judgements. Widowed at thirty-nine when her husband was killed in Belgium, she tells how in 1942 she and her sister Dot found a crashed German plane with one young airman still alive, trapped, and left him, and how she went back and still did nothing until he died. She tells it as a good story, which is the most frightening thing about her.',
    },
  ],

  keyQuotes: [
    {
      text: 'You must accept it – you can’t get it back – it’s the only way',
      where: '‘Chemistry’, Grandfather, after the launch sinks',
      analysis:
        'On the surface he is talking about a toy boat, but the dashes break the sentence into short, effortful pieces, as if each one costs him something. He seems to be speaking about death too, and about his wife. The irony, which the rest of the story develops, is that the man who tells the family to accept loss is the one who cannot accept change.',
    },
    {
      text: 'within the scope of this sad symmetry',
      where:
        '‘Chemistry’, the boy, on the year the three of them lived together after the two deaths',
      analysis:
        "Symmetry means balance: a widower, a widow and a boy, each missing someone, holding each other level. The soft repeated s sounds make the arrangement sound hushed and fragile, and the word sad admits that this is not happiness but an equilibrium of grief. Ralph's arrival is what breaks it, which is why the boy resents him so fiercely.",
    },
    {
      text: 'You don’t make things in chemistry – you change them. Anything can change.',
      where: '‘Chemistry’, Grandfather in his shed',
      analysis:
        "This is the story's thesis, delivered as a science lesson. The Grandfather means substances, but the boy, and the reader, hear it as a statement about people: his daughter has changed, the household has changed. It also prepares for the ending, where the boy turns the idea into comfort, insisting that what changes is not lost.",
    },
    {
      text: 'Laurel water. Prussic acid. Not for drinking.',
      where: '‘Chemistry’, Grandfather, naming the last bottle on his shelf',
      analysis:
        'Three clipped phrases, like a label read aloud, and the last is a warning. It is the clearest piece of foreshadowing in the anthology: the poison is shown to the boy, named, and forbidden, and it is what the Grandfather later drinks. Swift lets the calm, factual tone carry the horror, so that the reader understands before the boy does.',
    },
    {
      text: 'though things change they aren’t destroyed',
      where: '‘Chemistry’, the boy, in the final paragraph',
      analysis:
        "The boy takes his Grandfather's chemistry and turns it into consolation: people are like elements, changed but not destroyed. Standing at the pond where the boat and the acid lie, he sees his Grandfather on the far side, the launch still coming towards him. One reading is that this is healing; another is that the boy has refused to let go, just as his Grandfather did.",
    },
    {
      text: 'Her face was calm and set, her mouth was closed with disillusionment.',
      where: '‘Odour of Chrysanthemums’, Part I, the first description of Elizabeth',
      analysis:
        'Lawrence tells us almost at once what the marriage has done to her. Calm and set suggests control that has hardened into habit, and a mouth closed with disillusionment makes her silence a result of experience rather than temperament. The long abstract noun at the end weighs the sentence down, as disappointment weighs on her, before we have seen her husband at all.',
    },
    {
      text: 'It was chrysanthemums when I married him, and chrysanthemums when you were born',
      where: '‘Odour of Chrysanthemums’, Part I, Elizabeth to Annie',
      analysis:
        "The repeated flower ties every stage of the marriage together: wedding, birth and, in the rest of the sentence, the first time Walter was brought home drunk. To Annie the flowers smell beautiful; to Elizabeth they smell of a life gone wrong. By the end they will also mean death, so the title's odour gathers the whole marriage into one scent.",
    },
    {
      text: 'He’ll come home when they carry him.',
      where: '‘Odour of Chrysanthemums’, Part II, Elizabeth to the Rigleys',
      analysis:
        'She means that he will be carried home drunk, and says it bitterly, to save face in front of the neighbours. The reader hears the second meaning she does not intend: he will be carried home dead. It is dramatic irony at its sharpest, and it shows how her anger has become a shield against the fear already growing underneath it.',
    },
    {
      text: 'There was a cold, deathly smell of chrysanthemums in the room.',
      where: '‘Odour of Chrysanthemums’, Part II, the parlour, before the body arrives',
      analysis:
        'The fire-lit kitchen of Part I has given way to a cold room with no fireplace, and the chrysanthemums are now deathly. Lawrence places the flowers in the room where Walter will be laid before we see his body, so the symbol arrives before the fact. When a miner knocks over a vase of them, the image is complete.',
    },
    {
      text: 'they had met in the dark and had fought in the dark',
      where: "‘Odour of Chrysanthemums’, Part II, Elizabeth over Walter's body",
      analysis:
        "The heart of the story. The repeated phrase in the dark makes their marriage a blind struggle in which neither saw whom they were fighting, and the verb fought admits her part as well as his. It links the literal darkness of the pit and the unlit cottage to a darkness between two people, which is the story's real tragedy.",
    },
    {
      text: 'She was grateful to death, which restored the truth.',
      where: '‘Odour of Chrysanthemums’, Part II, over the washed body',
      analysis:
        "Gratitude is the last thing we expect a new widow to feel, and that is Lawrence's point. Death does not give Walter back to her, as the 1911 ending suggested; it shows her the truth that he was always separate. The sentence is short and plain amid long, troubled paragraphs, so it lands like a verdict.",
    },
    {
      text: 'The Head beamed at nobody.',
      where: "‘My Polish Teacher's Tie’, the staffroom, as the Head announces Stefan's visit",
      analysis:
        "Five words that sum up the Head. Beamed suggests warm, generous pleasure, but it is aimed at nobody, so the warmth is performance for an audience rather than contact with a person. Dunmore's comic precision makes the point without comment: in this building, the people at the top smile at the room and see no one in it.",
    },
    {
      text: 'Mother, I’ve lost the words you gave me.',
      where: "‘My Polish Teacher's Tie’, a line of Stefan's poem, as Carla quotes it",
      analysis:
        "Stefan turns what Carla told him about forgetting her Polish into a poem, and this line gives her loss a voice. Words here means both language and a mother's gifts, so losing them is losing part of herself. It shows what their letters are really about: not status but recognition, the thing nobody at her school offers her.",
    },
    {
      text: 'It was a terribly hopeful tie.',
      where: "‘My Polish Teacher's Tie’, the staffroom, when Carla first sees Stefan",
      analysis:
        "The adverb terribly pulls two ways, meaning both very and painfully, because Carla can see how exposed his hope is in a room that is laughing at him. Giving a tie an emotion is a small transferred epithet: the tie carries Stefan's openness, and Carla's tenderness towards it tells us she has already chosen his side.",
    },
    {
      text: 'It was a flag from another country',
      where: "‘My Polish Teacher's Tie’, the final paragraph",
      analysis:
        'The tie becomes a flag, a symbol of belonging, and the country it stands for is not simply Poland: the sentence goes on to call it better than the countries either of them lives in. One reading is that the country is friendship itself, a place where a catering assistant and a teacher meet as equals. Her last words, liking the tie, claim that country.',
    },
    {
      text: 'there was something calculating in the face',
      where: "‘Korea’, on the river, as the father asks about his son's future",
      analysis:
        "The first warning. Calculating means both shrewd and working out sums, which the story will make literal when the father's plan turns out to be about money. The vague word something shows the son sensing danger he cannot yet name, and the detached phrase the face, rather than his face, already sets a distance between them.",
    },
    {
      text: 'I was wary of the big words.',
      where: '‘Korea’, the son, when his father praises America',
      analysis:
        "The father calls America the land of opportunity, and the son hears that the phrases are borrowed; the next sentence says they were not in his own voice. McGahern shows the son's intelligence, and the father's evasiveness, in one plain sentence. It prepares us for the overheard conversation, where the father's real voice is excited and counting.",
    },
    {
      text: 'I knew my youth had ended',
      where: '‘Korea’, in the dark of the lavatory, after the son overhears his father',
      analysis:
        'The climax is stated with brutal plainness at the end of a long sentence that places the son among boxes of crawling worms in the dark. The setting of dirt, clay and darkness turns the moment into a kind of burial. There is no shouting: the end of his childhood is a piece of knowledge, quietly acquired and never spoken aloud.',
    },
    {
      text: 'It’ll be my own funeral',
      where: "‘Korea’, the son, repeating his father's words that evening",
      analysis:
        "When the son refuses to go to America, his father says it will be his own funeral, and the son simply repeats it. The echo is loaded: the son knows that in America the funeral his father imagined might have been literal, like Luke Moran's. Repetition lets him answer his father's plan without ever admitting that he overheard it.",
    },
    {
      text: 'The proof is, as it were, in the eating.',
      where: '‘A Family Supper’, the opening paragraph, on fugu',
      analysis:
        "A cosy proverb made sinister: you only know whether the fish was prepared safely when you have eaten it and survived, or not. The dry, almost joking tone is typical of the narrator's control. The opening plants the fear that governs the whole story, so that when the father serves fish the reader, not the narrator, is the one who panics.",
    },
    {
      text: 'For some moments my sister did not move.',
      where: '‘A Family Supper’, the kitchen, when the father orders Kikuko to help',
      analysis:
        "A tiny act of resistance, and the conflict in this family is all tiny acts. Kikuko's pause before obeying says what she cannot say aloud about her father's authority. Ishiguro gives the moment its own plain sentence and no explanation, trusting the reader to feel the tension in a silence that lasts only moments.",
    },
    {
      text: 'Perhaps I should have been a more attentive father.',
      where: '‘A Family Supper’, the room with the model battleship',
      analysis:
        "The nearest the father comes to an apology, and it is hedged with perhaps and spoken over a child's plastic toy. It shows regret, and loneliness, in a man who has lost his firm, his partner and his wife. Straight afterwards he says his wife's death was no accident, which turns the regret into something darker and makes the supper more frightening.",
    },
    {
      text: 'One side of his face had fallen into shadow.',
      where: '‘A Family Supper’, the supper, as the father lifts the lid of the pot',
      analysis:
        "The single lantern leaves half the father's face lit and half dark, a visual image of his divided nature and of how little his son can read him. It comes at the moment he pushes the fish towards his son, so it works as suspense: we cannot see his intentions, literally or figuratively, and neither can the narrator.",
    },
    {
      text: 'Is what Columbus did want? Who invite him here?',
      where: '‘Invisible Mass of the Back Row’, Hortense, answering in front of the Inspector',
      analysis:
        'Hortense switches from the Standard English the classroom demands into Jamaican speech, and with the switch comes the real question: not what Columbus did, but by what right he came. Her own language carries her own history. It is the most dangerous thing a child can say in a colonial classroom, and she is punished for it.',
    },
    {
      text: 'Words gush out of my mouth',
      where: '‘Invisible Mass of the Back Row’, Hortense, just before her question about Columbus',
      analysis:
        'The present tense puts us inside the moment, and the verb gush makes her words a flood she can no longer hold back, as if they have been building up for a long time. What pours out is her challenge about Columbus, so the sentence marks the instant when a silent girl in the back row becomes a speaker.',
    },
    {
      text: 'the culture of the back row',
      where: "‘Invisible Mass of the Back Row’, Hortense's school in England",
      analysis:
        'In England she is placed in a low stream full of other Caribbean children, and calls what they learn there, hair plaiting, make-up and swearing rather than lessons, a culture. The phrase is ironic, but not only: the back row also becomes a community, with its own language and loyalties, and by the end a place from which voices are raised.',
    },
    {
      text: 'She would fall in love',
      where: "‘The Darkness Out There’, Sandra's thoughts as she walks to the cottage",
      analysis:
        'One of a run of daydreams, all in the same would pattern: blue seas, love, a good job, a new sewing machine. The repeated would makes her future sound certain and simple, which is exactly the innocence the story will end. Lively lets us like her dreams while seeing how little she yet knows about people.',
    },
    {
      text: 'Her eyes investigated, quick as mice.',
      where: "‘The Darkness Out There’, Mrs Rutter, on the teenagers' arrival",
      analysis:
        'Everything soft about Mrs Rutter is contradicted by her eyes. The verb investigated makes her a watcher who assesses her visitors, and the simile quick as mice is small, darting and faintly unpleasant, suggesting something that scurries in the dark. Read a second time, the story is full of these warnings that Sandra misses.',
    },
    {
      text: 'Tit for tat, I said to Dot.',
      where: '‘The Darkness Out There’, Mrs Rutter, explaining why she left the airman',
      analysis:
        'A childish playground phrase, made worse by the jingling rhyme with Dot, used to justify leaving a trapped young man to die. It shows that her grief for her husband became simple revenge on the enemy, and that decades later she still thinks of it as a fair exchange. The lightness of the language is what makes it horrifying.',
    },
    {
      text: 'The darkness was out there and it was a part of you',
      where: "‘The Darkness Out There’, Sandra's realisation at the gate, at the end of the story",
      analysis:
        "The title returns with its meaning changed. The darkness is no longer the wood, the ghosts or the imagined men in Packer's End; it is the knowledge of what people can do, and once known it cannot be shut out. The shift to you makes the realisation universal, drawing the reader into Sandra's loss of innocence.",
    },
  ],

  extracts: [
    {
      title: 'Elizabeth sees her husband',
      where: '‘Odour of Chrysanthemums’, Part II, near the end',
      pointer:
        "From the paragraph beginning “Elizabeth looked up. The man's mouth was fallen back” to the words “which restored the truth”, after the two women have washed the body.",
      summary:
        "As Walter's mother praises his beauty and remembers his laugh, Elizabeth looks at his face and realises that he was always a stranger to her. She sees that she fought a husband who did not exist, that they were two isolated people who never truly met, that she refused him as himself, and she is grateful to death for showing her the truth.",
      annotations: [
        {
          phrase: 'utterly alien to her',
          note: 'Death has removed his warmth and left him apart; alien is a strong word for a husband, and prepares for the recognition that follows.',
        },
        {
          phrase: 'And she knew what a stranger he was to her.',
          note: 'The simple sentence states the discovery flatly; the verb knew marks a moment of certainty after hours of anger, guessing and fear.',
        },
        {
          phrase: 'I have been fighting a husband who did not exist.',
          note: 'Her own thoughts, given as direct speech in her head; she admits that her quarrel was with an idea of Walter she had made herself.',
        },
        {
          phrase: 'they had met in the dark and had fought in the dark',
          note: 'The repetition makes the marriage a blind struggle, and fought shares the blame between them rather than resting it on his drinking.',
        },
        {
          phrase: 'She was grateful to death, which restored the truth.',
          note: 'The paradox of a widow grateful to death closes the passage: recognition matters more to her, in the end, than comfort.',
        },
      ],
      question:
        "Starting with this moment, how does Lawrence present Elizabeth's feelings about her marriage, and how does he present grief in the story as a whole?",
    },
    {
      title: 'The supper',
      where: '‘A Family Supper’, the final section',
      pointer:
        'From “Supper was waiting in a dimly lit room next to the kitchen” to the moment the narrator gives his father the last piece of fish.',
      summary:
        'The three eat almost in silence under a single lantern. The narrator notices a photograph of an old woman in a white kimono and fails to recognise it as his mother; Kikuko fetches it for him, and at a gesture from their father, whose voice has turned hard, she puts it back. Then the father lifts the lid of a pot of fish, pushes it towards his son, says only that it is fish, and they all eat.',
      annotations: [
        {
          phrase: 'a dimly lit room',
          note: 'The single lantern throws most of the room into shadow, so the setting itself makes it hard to see faces, motives or the truth.',
        },
        {
          phrase: 'The old woman in the white kimono.',
          note: "It echoes the ghost the narrator saw as a child, so the dead mother seems to watch the meal, and the son's failure to recognise her shows his distance.",
        },
        {
          phrase: 'One side of his face had fallen into shadow.',
          note: "Half-lit and half-dark, the father cannot be read; the image arrives just as he offers the fish, which sharpens the reader's fear.",
        },
        {
          phrase: 'You must be hungry',
          note: 'The father repeats this ordinary courtesy several times during the story; repetition turns hospitality into something insistent and faintly ominous.',
        },
      ],
      question:
        'How does Ishiguro create tension in this passage, and how does he present the relationship between the father and his children in ‘A Family Supper’ as a whole?',
    },
    {
      title: "Mrs Rutter's story",
      where: '‘The Darkness Out There’, near the end',
      pointer:
        "From Kerry's question about whether this is the wood where the German plane came down to Mrs Rutter's words “Tit for tat, I said to Dot.”",
      summary:
        "Pressed by Kerry, Mrs Rutter describes the night in 1942 when she and her sister Dot found the crashed plane in the wood, cheered when they saw it was German, then found one airman still alive and trapped. They went back to the warm cottage and left him. She tells it chattily, between requests for more tea, and justifies it by her husband's death.",
      annotations: [
        {
          phrase: 'We cheered, I can tell you.',
          note: 'The chatty phrase I can tell you makes the memory sound like a funny anecdote, which exposes how little she has ever felt for the dead crew.',
        },
        {
          phrase: 'her eyes darting',
          note: 'The watchful eyes return at the key moment, as she checks the effect of her story on the two teenagers, enjoying their shock.',
        },
        {
          phrase: 'blank-faced',
          note: "Kerry's stare shows his horror before he speaks; Lively lets reactions, not narration, carry the moral judgement of Mrs Rutter's story.",
        },
        {
          phrase: 'Tit for tat, I said to Dot.',
          note: "A playground phrase with a jingling rhyme reduces a man's death to a fair swap, and shows her grief turned into revenge.",
        },
      ],
      question:
        'How does Lively present Mrs Rutter in this passage, and how does she present the loss of innocence in ‘The Darkness Out There’ as a whole?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Symbolism',
      example:
        "The chrysanthemums in ‘Odour of Chrysanthemums’: Elizabeth tucks some into her apron, tells Annie they marked her wedding and her children's births, and finds “a cold, deathly smell of chrysanthemums” in the parlour where Walter will be laid.",
      effect:
        "A single object carries the whole history of a marriage, from love to disappointment to death, so Lawrence can show change without explaining it. Other stories do the same: the model launch in ‘Chemistry’ stands for the family's broken balance, and Stefan's tie for openness and belonging.",
    },
    {
      technique: 'Dialect and direct speech',
      example:
        "The miner who brings the news in ‘Odour of Chrysanthemums’ says “It seems ’e wor smothered.”, and Walter's mother's lament is full of Nottinghamshire speech and repetition.",
      effect:
        "Dialect roots the story in a real mining community and gives its people voices of their own. It also sets off Elizabeth, whose speech is mostly standard English, slipping into dialect only when she talks to neighbours such as the Rigleys, which fits the story's picture of a proud woman who holds herself apart from the people around her.",
    },
    {
      technique: 'Setting that mirrors feeling',
      example:
        'The opening of ‘Odour of Chrysanthemums’ shows an unnamed woman walking up the line who stands “insignificantly trapped” between the passing wagons and the hedge; in ‘Chemistry’ rain dashes against the window as the ambulance comes for the Grandfather.',
      effect:
        'The landscape does emotional work before any character speaks: the woman on the line is not Elizabeth, but her plight prepares us for a heroine trapped by the colliery world, and the weather in ‘Chemistry’ turns the house into a place of storm and loss.',
    },
    {
      technique: 'Retrospective first-person narration',
      example:
        'The son in ‘Korea’ narrates from years later, comparing the shock of what he overheard to the shock he would feel later after a social blunder; the narrator of ‘Chemistry’ is an adult remembering being ten.',
      effect:
        "The gap between the older narrator and his younger self lets the writer show both the child's feelings and an adult's understanding. It also creates a quiet, controlled tone, which makes the painful discoveries more affecting because they are not dramatised.",
    },
    {
      technique: 'Simile',
      example:
        "In ‘My Polish Teacher's Tie’, Stefan “was tense as a guitar string” when Carla takes his hand; in ‘The Darkness Out There’, Mrs Rutter's eyes move “quick as mice”.",
      effect:
        "Both similes are small, precise and physical. The guitar string shows Stefan's nerves stretched to breaking point, and links him to music just before he sings; the mice make Mrs Rutter's watching eyes seem furtive and vermin-like long before we learn what she did.",
    },
    {
      technique: 'Dialogue, repetition and silence',
      example:
        "In ‘A Family Supper’ the father repeats “You must be hungry”, conversations stall in short formal replies, and Kikuko's resistance is a sentence of stillness before she obeys.",
      effect:
        "Ishiguro builds tension from what is not said. The polite repetitions become ominous, and the silences show a family that cannot speak about the mother's death, Watanabe, or the son's absence. The reader has to read the gaps, as the characters do.",
    },
    {
      technique: 'Foreshadowing',
      example:
        '‘A Family Supper’ opens by explaining that fugu kills if badly prepared; ‘Chemistry’ has the Grandfather name the prussic acid on his shelf “Not for drinking”.',
      effect:
        "Planting the danger early makes the reader anxious long before the characters are. In Ishiguro's story the suspense is never resolved, so the foreshadowing does all the work; in Swift's it is fulfilled, which makes the ending feel tragic and inevitable.",
    },
    {
      technique: 'Code-switching and present tense',
      example:
        'Hortense narrates in the present tense - “Words gush out of my mouth” - and moves from Standard English into Jamaican speech when she asks who invited Columbus.',
      effect:
        "The present tense places us inside the classroom as it happens, so we feel her fear and her surge of anger. The switch of language marks the moment she stops performing the answer the school wants and speaks as herself, which is the story's whole subject.",
    },
    {
      technique: 'Irony and dramatic irony',
      example:
        'Mrs Rutter tells the teenagers she has a sympathy with young people, and says it again as they leave, after telling them how she left a young man to die; Elizabeth says Walter will come home when they carry him.',
      effect:
        "The reader hears meanings the speaker does not intend. In Lively's story the repeated phrase becomes bitterly ironic, exposing a woman whose kindly words hide cruelty; in Lawrence's, dramatic irony turns Elizabeth's bitter joke into an unconscious prophecy, deepening the pity of what follows.",
    },
    {
      technique: 'Free indirect style',
      example:
        "The opening of ‘The Darkness Out There’ slips into Pat's gushing voice without speech marks, and Sandra's judgements of Kerry are given as if they were facts about him.",
      effect:
        "Lively tells the story in the third person but through Sandra's attitudes, so the reader shares her snobbery and her misjudgements. When her view collapses at the end, ours does too, which is how the story makes its reader experience the loss of innocence rather than just watch it.",
    },
  ],

  structureForm: [
    {
      heading: 'The short story and the single moment',
      body: 'A short story has room for few characters, one main setting and one decisive change, and every story in Telling Tales builds towards a single moment of recognition: Elizabeth over the body, the son in the lavatory, Sandra at the gate, Carla crossing the staffroom. Because there is no room to explain, the endings carry great weight and often leave questions open. When you write about structure, focus on where that moment falls and what the story does before and after it.',
    },
    {
      heading: 'Openings that plant the ending',
      body: "Many of these stories announce their danger in the first paragraph. ‘A Family Supper’ begins with how fugu kills; ‘Odour of Chrysanthemums’ begins with the pit, the wagons and the chrysanthemums; ‘The Darkness Out There’ tells the legend of the German plane in Packer's End on its first page; ‘Chemistry’ begins with the boat that will sink. Readers who return to an opening after finishing a story find the ending already there, which is worth saying in an exam.",
    },
    {
      heading: 'Circular structures',
      body: "‘Chemistry’ begins and ends at the pond, first with the family sailing the launch and finally with the boy alone, the launch and the acid under the water. ‘Korea’ begins with the father rowing while the son works the line and ends with the son rowing while the father sets it, and, as Cambridge's resource notes, the son asks the questions at the start while the father asks them at the end. These returns measure change: the place is the same, the people are not.",
    },
    {
      heading: 'Time and suspense in ‘Odour of Chrysanthemums’',
      body: 'Lawrence structures Part I by the clock - half-past four, a quarter to five, twenty minutes to six - so the reader waits with Elizabeth as fewer and fewer miners pass. Part II begins when the clock strikes eight and she goes out to look for him, and the times continue until the men arrive with the body. The two numbered parts, added in 1914, divide the story into waiting and knowing, and the slow pace of Part I makes the speed of the news in Part II more shocking.',
    },
    {
      heading: 'Delayed and withheld revelation',
      body: "Lively delays Mrs Rutter's story until the chores are done, so it bursts into an ordinary afternoon. McGahern lets the son overhear the truth instead of being told it, and never lets him confront his father. Ishiguro withholds the answer altogether: we never learn whether the fish is fugu, and the story ends with the family waiting for tea. Comparing a story that reveals everything with one that reveals nothing is a strong way to write about structure.",
    },
    {
      heading: 'Two halves and two places',
      body: "‘Invisible Mass of the Back Row’ moves from a classroom in Jamaica to a school in England, so the reader shares Hortense's disorientation. The parallel matters more than the contrast: she finds another back row. ‘Odour of Chrysanthemums’ moves from the warm kitchen of Part I to the cold parlour of Part II, from the room of living to the room of the dead.",
    },
    {
      heading: 'Who tells the story',
      body: "Five stories are first-person narratives, told by the boy in ‘Chemistry’, Carla, the son in ‘Korea’, the son in ‘A Family Supper’ and Hortense, so we see only what the narrator sees and must judge how far to trust them. ‘Odour of Chrysanthemums’ and ‘The Darkness Out There’ are told in the third person, but Lawrence moves into Elizabeth's mind and Lively stays close to Sandra's. Asking what we would not know without the narrator's viewpoint, such as the mother's side in ‘Chemistry’, is a mark of a strong answer.",
    },
  ],

  vocabulary: [
    {
      term: 'Fugu',
      definition:
        "A pufferfish eaten as a delicacy in Japan; parts of it contain a poison, so a badly prepared fish can kill, as it killed the narrator's mother in ‘A Family Supper’.",
    },
    {
      term: 'Tatami',
      definition:
        'Traditional Japanese straw floor matting; the narrator and his father sit on the tatami floor of the tea-room.',
    },
    {
      term: 'Samurai',
      definition:
        'The warrior class of old Japan, associated with honour and loyalty; the father is proud of the pure samurai blood in his family.',
    },
    {
      term: 'Prussic acid',
      definition:
        'A deadly poison, also called hydrogen cyanide; in ‘Chemistry’ the Grandfather keeps it as laurel water on his shelf and later drinks it.',
    },
    {
      term: 'Headstocks',
      definition:
        "The tall frame over a mine shaft carrying the winding wheels; Lawrence's opening shows the headstocks of Brinsley Colliery.",
    },
    {
      term: 'Butty',
      definition:
        "A miner's workmate or partner; Rigley, who left Walter finishing his work, is called his butty.",
    },
    {
      term: 'Stint',
      definition:
        'A set piece of work to be finished; Walter stayed behind to finish his stint when the others went up.',
    },
    {
      term: 'Reprisal',
      definition:
        "Punishment inflicted in revenge for an enemy's action; the prisoners in ‘Korea’ were shot in Mountjoy as reprisals.",
    },
    {
      term: 'Night line',
      definition:
        'A long fishing line with many baited hooks, set in the evening and lifted in the morning; the father and son in ‘Korea’ fish for eels this way.',
    },
    {
      term: 'Billingsgate',
      definition:
        "London's great fish market; the family in ‘Korea’ send live eels there each week, a sign of how far the trade reaches.",
    },
    {
      term: 'Staffroom',
      definition:
        "The teachers' room in a school, where Carla serves tea and buns and where the story's hierarchy is on show.",
    },
    {
      term: 'Penfriend',
      definition:
        "Someone you exchange letters with, often abroad; the Head's scheme pairs English school staff with Polish teachers.",
    },
    {
      term: 'Inspector',
      definition:
        "An official who visits schools to check teaching and the curriculum; his visit sets off the crisis in Hortense's classroom.",
    },
    {
      term: 'Stream',
      definition:
        'A class grouping by ability; in England Hortense is placed in a low stream with other Caribbean children.',
    },
    {
      term: 'Pickney',
      definition:
        "Jamaican English for a child; Cambridge's resource points to it among the story's words about class and colour.",
    },
    {
      term: 'VAD',
      definition:
        "A member of a Voluntary Aid Detachment, a wartime volunteer nurse; Mrs Rutter's sister Dot had been one.",
    },
    {
      term: 'Spinney',
      definition:
        "A small wood or thicket; Packer's End is the dark spinney beside Mrs Rutter's cottage.",
    },
    {
      term: 'Epiphany',
      definition:
        "A sudden moment of insight that changes how a character sees things; Elizabeth's recognition over Walter's body is the anthology's clearest example.",
    },
    {
      term: 'Retrospective narrator',
      definition:
        "A narrator telling the story from a later point in life, as in ‘Chemistry’ and ‘Korea’, so the telling mixes a child's experience with an adult's understanding.",
    },
    {
      term: 'Code-switching',
      definition:
        'Moving between two languages or ways of speaking depending on the situation, as Hortense moves between Standard English and Jamaican speech.',
    },
    {
      term: 'Foil',
      definition:
        "A character who shows up another's qualities by contrast, as Valerie Kenward's snobbery shows up Carla's warmth towards Stefan.",
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How do writers present parents who misunderstand their children in ‘A Family Supper’ and in one other story from Telling Tales? Write about: parents and children who misunderstand each other in the two stories; how the writers present these misunderstandings.',
        skill: 'Whole-text essay on two stories',
        guidance: [
          'Open with a thesis: in both stories the misunderstanding comes from what is not said, and from a gap between generations and values.',
          "‘A Family Supper’: the father's formal speech, the silences, his hint that the mother's death was no accident, his admission that he might have been a more attentive father.",
          "Analyse one or two short quotations closely, such as the father's face half in shadow, and say what the writer makes the reader feel.",
          "Choose a second story that contrasts: ‘Korea’ (the son understands only by overhearing) or ‘Chemistry’ (the boy never hears his mother's side).",
          "Bring in context where it explains the misunderstanding: the father's pride in Japanese tradition and the son's years in California; the Irish father's wars and poverty.",
          'End by weighing the two: which writer suggests the gap can be crossed, and which leaves it fixed for ever?',
        ],
      },
      {
        question:
          "How do writers present characters who are treated as invisible in ‘My Polish Teacher's Tie’ and in one other story from Telling Tales? Write about: characters who are treated as invisible in the two stories; how the writers present them.",
        skill: 'Whole-text essay on two stories',
        guidance: [
          'Define the idea: being unseen because of your job, your class, your colour or your age.',
          "‘My Polish Teacher's Tie’: the uniform, the teachers who step aside without seeing her, the Head who cannot remember her name, and the ending where she chooses to be seen.",
          'Pair it with ‘Invisible Mass of the Back Row’ (the title itself, the back row, the ruler) or ‘Odour of Chrysanthemums’ (Walter, unseen by his wife until he is dead).',
          "Write about methods: Dunmore's comic first-person voice, Williams's present tense and code-switching, and how each ending turns invisibility into a voice.",
          'Use context lightly: staffroom hierarchy in an English school; a colonial curriculum in Jamaica.',
        ],
      },
      {
        question:
          'How do writers present the effect of the past on the present in ‘Korea’ and in one other story from Telling Tales? Write about: how the past affects the present in the two stories; how the writers present these effects.',
        skill: 'Whole-text essay on two stories',
        guidance: [
          'Thesis: in both stories an old war shapes a present-day choice.',
          "‘Korea’: the execution in 1919, the furze pods on the honeymoon, the father's bitterness that the country he fought for may take his fishing licence, the Morans' dollars from Korea.",
          "Second story: ‘The Darkness Out There’, where 1942 erupts into a summer afternoon, or ‘A Family Supper’, where the father's war and Watanabe's example hang over the meal.",
          "Analyse structure: the circular rowing in ‘Korea’, the delayed revelation in Lively's story.",
          'Conclude with a judgement: which story suggests the past can be escaped, and which says it becomes part of you?',
        ],
      },
      {
        question:
          'How do writers present the loss of innocence in ‘The Darkness Out There’ and in one other story from Telling Tales? Write about: characters who lose their innocence in the two stories; how the writers present this loss.',
        skill: 'Whole-text essay on two stories',
        guidance: [
          "Start with Sandra's innocence: her daydreams, her fear of the wood, her snap judgement of Kerry and her trust in Mrs Rutter.",
          "Track the turning point: Mrs Rutter's story, Kerry's reaction, Sandra's realisation at the gate.",
          "Analyse the change in the meaning of darkness from the wood to the mind, and the use of Sandra's point of view.",
          'Pair it with ‘Korea’ or ‘Chemistry’: innocence lost through something overheard or witnessed.',
          'Include the idea that adults can lose innocence too: Elizabeth Bates is a strong third example if you have time.',
        ],
      },
      {
        question:
          'How do writers present grief in ‘Odour of Chrysanthemums’ and in one other story from Telling Tales? Write about: grief in the two stories; how the writers present grief.',
        skill: 'Whole-text essay on two stories',
        guidance: [
          "Contrast the two griefs in Lawrence's story: the mother's traditional mourning and Elizabeth's shocked recognition.",
          'Analyse the chrysanthemums as a symbol that moves from marriage to death, and the cold parlour against the warm kitchen.',
          "Use the ending, and if it helps your argument, Lawrence's 1914 revision of it.",
          'Second story: ‘A Family Supper’ (grief hidden behind formality) or ‘Chemistry’ (the Grandfather and the mother grieving in opposite ways).',
          'End by asking what each writer suggests grief reveals about the living.',
        ],
      },
      {
        question:
          'How do writers present change within a family in ‘Chemistry’ and in one other story from Telling Tales? Write about: changes in the families in the two stories; how the writers present these changes.',
        skill: 'Whole-text essay on two stories',
        guidance: [
          "Begin with the sad symmetry and how Ralph breaks it, then the Grandfather's retreat to the shed.",
          'Explain the title: chemistry as the science of change and as the chemistry between people.',
          'Analyse symbols: the launch, the curry and the sweater, the acid, the pond at the start and the end.',
          'Pair with ‘Odour of Chrysanthemums’ or ‘A Family Supper’, where a death also changes what a family can say to each other.',
          "Weigh the endings: is the boy's belief that things are changed but not destroyed a comfort or a refusal?",
        ],
      },
    ],
    tips: [
      'Know all seven stories well enough to choose your second one. The named story is fixed; the second is your choice, so pick the one that gives you most to say about the question, not your favourite.',
      'A comparative structure is allowed but not required, and comparison is not what is marked. Two well-developed halves with a linking sentence or two can score as highly as a woven comparison.',
      'Quotations are not compulsory in this closed-book exam. A precise reference, such as the moment Kikuko hesitates before obeying her father, counts as evidence. Learn a few short phrases per story rather than long sentences.',
      "Treat each story as something a writer made. Say Lawrence presents, Ishiguro withholds, Lively lets us share Sandra's view, and explain why.",
      'Write about the endings. Almost every story turns in its last pages, and examiners reward answers that show how the ending changes what came before.',
      "Use context only when it explains something in the story: the 1914 revision of Lawrence's ending, the two wars behind ‘Korea’, the Columbus lesson in a colonial classroom.",
      'Offer a reading and its alternative when a story is genuinely open, as ‘A Family Supper’ is, but say which you find more convincing and why. Do not invent alternatives where the story is clear.',
      'Keep technical accuracy in mind: spelling, punctuation and varied sentences are rewarded in this section, so leave a few minutes to check your work.',
    ],
  },

  modelAnswer: {
    question:
      'How do writers present grief in ‘Odour of Chrysanthemums’ and in one other story from Telling Tales?',
    paragraph:
      "Lawrence presents grief not as the loss of a husband but as the discovery that Elizabeth never really had one. Before the body arrives, the parlour holds “a cold, deathly smell of chrysanthemums”, and the flowers that once marked her wedding and her children's births now mark a death, so the symbol gathers the whole marriage into one scent. Walter's mother grieves as tradition expects, for the lad she remembers, but Elizabeth's grief is stranger and more honest: over the washed body, she realises that “they had met in the dark and had fought in the dark”. The repetition of “in the dark” makes their marriage sound like a blind struggle in which neither saw whom they were fighting, and the verb “fought” admits her part in it as much as his drinking. Most strikingly, Lawrence has her feel “grateful to death, which restored the truth”. Gratitude is the last emotion we expect from a widow, and that is the point. Lawrence replaced a gentler, reconciling ending with this one in 1914, which suggests he valued recognition above consolation. Ishiguro's father in ‘A Family Supper’ grieves in the opposite way, hiding his loss behind formality and a meal, which suggests that both writers see grief as the thing families find hardest to share.",
    commentary: [
      'It opens with an argument that answers the question, not with a summary of the plot.',
      'Quotations are short and embedded, and single words (dark, fought, grateful) are analysed for their effect rather than simply labelled.',
      "It contrasts two kinds of grief within the same story, the mother's and the wife's, which shows whole-story knowledge.",
      "Context, the 1914 revision, is used to support a point about Lawrence's intention instead of being added on at the end.",
      'The final sentence sets up the second story with a clear contrast, so the essay can move on without losing its line of argument.',
    ],
  },

  timeline: [
    {
      where: 'Chemistry, the pond',
      title: 'The launch sinks',
      summary:
        'The boy, his mother and his Grandfather sail the model motor-launch across the park pond, the Grandfather receiving it on the far side. It sinks, and the Grandfather tells them they must accept the loss. Ralph is first mentioned here, in brackets, only to date the day it sank.',
      setting: 'The pond in the park where they sail the launch',
      who: ['The boy', 'Grandfather', "The boy's mother"],
      quote: 'You must accept it – you can’t get it back – it’s the only way',
      themes: ['Grief and death', 'Families in conflict'],
      tension: 2,
      significance:
        "The lost boat is the first sign that the family's fragile balance is about to break.",
    },
    {
      where: 'Chemistry, the house and the shed',
      title: 'Ralph takes over',
      summary:
        'Ralph becomes a regular visitor and then a fixture. At a meal he shouts that they will not wait all night for the Grandfather to finish, and the mother asks her father if he wants to take his food out to his shed. The Grandfather withdraws there to his chemicals, and shows the boy that anything, even gold, can change.',
      setting: "The dining table, then the Grandfather's garden shed",
      who: ['Ralph', 'Grandfather', "The boy's mother", 'The boy'],
      quote: 'You don’t make things in chemistry – you change them. Anything can change.',
      themes: ['Families in conflict', 'Power and status', 'Appearance and reality'],
      tension: 4,
      significance:
        "Power in the house passes to Ralph, and the Grandfather's lesson becomes the story's central idea.",
    },
    {
      where: 'Chemistry, the night',
      title: 'The acid and the dream',
      summary:
        "The boy takes acid from the shed, meaning to throw it in Ralph's face. That night his dead father appears to him, dripping with sea water, and blames his mother for the boat. By morning the Grandfather is dead after drinking prussic acid, and Ralph is directing the ambulance men.",
      setting: 'The house at night and at dawn, in heavy rain',
      who: ['The boy', 'Grandfather', 'Ralph', "The boy's mother"],
      quote: 'Laurel water. Prussic acid. Not for drinking.',
      themes: ['Grief and death', 'Growing up and loss of innocence'],
      tension: 5,
      significance:
        "The boy's plan for revenge is overtaken by a death he cannot prevent and will never have explained.",
    },
    {
      where: 'Chemistry, the pond again',
      title: 'Changed, not destroyed',
      summary:
        'With the family preparing to move house, the boy goes back to the pond, where the acid and the wreck of the launch lie under the water. He sees his Grandfather on the far side, and the launch still travelling towards him, unstoppable and unsinkable.',
      setting: 'The park pond in autumn, dead leaves on the water',
      who: ['The boy', 'Grandfather'],
      quote: 'though things change they aren’t destroyed',
      themes: ['Grief and death', 'Growing up and loss of innocence'],
      tension: 3,
      significance:
        "The circular ending turns the Grandfather's chemistry into the boy's consolation, or his refusal to let go.",
    },
    {
      where: 'Odour of Chrysanthemums, Part I, the railway and the garden',
      title: 'Waiting at dusk',
      summary:
        'Elizabeth watches the miners trudge home past her cottage, calls her son in from the garden and tucks a sprig of chrysanthemums into her apron. Her father stops his engine for tea, talks of remarrying and tells her that Walter has been drinking again.',
      setting: 'A cottage beside the colliery railway, on a winter afternoon',
      who: ['Elizabeth Bates', 'Annie and John'],
      quote: 'Her face was calm and set, her mouth was closed with disillusionment.',
      themes: ['Families in conflict', 'Power and status'],
      tension: 2,
      significance:
        'The colliery, the flowers and the absent husband are all established before the real story begins.',
    },
    {
      where: 'Odour of Chrysanthemums, Part I, the kitchen',
      title: 'The flowers in her apron',
      summary:
        'Tea waits and spoils. Annie finds the flowers and loves their smell; Elizabeth tells her what chrysanthemums have meant in her marriage. She puts the children to bed, and her anger at Walter slowly turns to fear.',
      setting: 'The small fire-lit kitchen of the cottage',
      who: ['Elizabeth Bates', 'Annie and John'],
      quote: 'It was chrysanthemums when I married him, and chrysanthemums when you were born',
      themes: ['Families in conflict', 'Appearance and reality'],
      tension: 3,
      significance:
        'The symbol is explained, and the long wait builds the suspense on which Part II depends.',
    },
    {
      where: 'Odour of Chrysanthemums, Part II, the search',
      title: "At the Rigleys'",
      summary:
        "At eight she goes out, too proud to look in the pub, and asks at the Rigleys'. Rigley left Walter finishing his work. Back home, Walter's mother arrives with news of an accident, and a miner comes to say that Walter was shut in by a fall and smothered.",
      setting: "Neighbours' houses along the dark road, then the cottage",
      who: ['Elizabeth Bates', "Walter's mother"],
      quote: 'He’ll come home when they carry him.',
      themes: ['Grief and death', 'Power and status'],
      tension: 4,
      significance:
        'Her bitter joke becomes a prophecy, and the waiting ends in the worst possible news.',
    },
    {
      where: 'Odour of Chrysanthemums, Part II, the parlour',
      title: 'Washing the body',
      summary:
        'The men lay Walter in the cold parlour and knock over a vase of chrysanthemums. Elizabeth and his mother undress and wash him together. His mother praises his beauty, while Elizabeth realises that he was always a stranger, and that she had denied him what he was.',
      setting: 'The cold parlour, by the light of one candle',
      who: ['Elizabeth Bates', "Walter's mother", 'Walter Bates'],
      quote: 'they had met in the dark and had fought in the dark',
      themes: ['Grief and death', 'Appearance and reality', 'Growing up and loss of innocence'],
      tension: 5,
      significance:
        "The story's recognition: grief becomes the discovery of how little she knew her husband.",
    },
    {
      where: "My Polish Teacher's Tie, the staffroom and the letters",
      title: 'Asking for the address',
      summary:
        'Serving tea at the weekly staff briefing, Carla hears the Head mention a Polish teacher who wants an English penfriend, and asks for the address. Steve assumes she is a teacher and she lets him. They write about poetry, and he sends her poems.',
      setting:
        "A school staffroom, and Carla's home, where she writes letters after her daughter is in bed",
      who: ['Carla Carter', 'The Head', 'Stefan Jeziorny'],
      quote: 'Mother, I’ve lost the words you gave me.',
      themes: ['Identity and belonging', 'Power and status'],
      tension: 2,
      significance: 'The letters give Carla a voice and an identity that her job denies her.',
    },
    {
      where: "My Polish Teacher's Tie, Stefan's visit",
      title: 'The tie and the song',
      summary:
        'The Head announces that Stefan will visit and stay with Valerie Kenward. Carla stops writing, dreading exposure, while Valerie mocks her guest. When Carla sees him, she leaves the counter and introduces herself; delighted, he sings a Polish song her mother used to sing, and she joins in.',
      setting: 'The staffroom at morning break',
      who: ['Carla Carter', 'Stefan Jeziorny', 'Valerie Kenward', 'The Head'],
      quote: 'It was a terribly hopeful tie.',
      themes: ['Identity and belonging', 'Appearance and reality', 'Power and status'],
      tension: 4,
      significance:
        'Carla chooses to be seen, and the hierarchy of the staffroom is briefly turned upside down.',
    },
    {
      where: 'Korea, on the river',
      title: 'The execution story',
      summary:
        "Asked by his son, the father, rowing, describes the execution of two prisoners he saw in Mountjoy in 1919, and how bursting furze pods spoiled his honeymoon. As they lift the eel line he asks about his son's exam results and presses him to think of America.",
      setting: 'An eel-fishing boat on an Irish river, lifting the lines',
      who: ['The father (Korea)', 'The son (Korea)'],
      quote: 'there was something calculating in the face',
      themes: ['Families in conflict', 'Grief and death'],
      tension: 3,
      significance:
        "The past war and the son's future are placed side by side, and the son begins to distrust his father.",
    },
    {
      where: 'Korea, the lavatory',
      title: 'Overheard',
      summary:
        "Storing worms in the dark lavatory, the son overhears his father telling a cattle-dealer about the ten thousand dollars paid for Luke Moran's death in Korea. He remembers the funeral and works out what his father's plan would mean for him.",
      setting: 'The dark lavatory where the bait worms are kept in boxes of clay',
      who: ['The son (Korea)', 'The father (Korea)'],
      quote: 'I knew my youth had ended',
      themes: ['Growing up and loss of innocence', 'Power and status'],
      tension: 5,
      significance: 'The climax: a son learns what his life may be worth to his father.',
    },
    {
      where: 'Korea, the night line',
      title: 'My own funeral',
      summary:
        'That evening, rowing while his father sets the night line, the son says he will not go to America. His father says it will be his own funeral, the son repeats the words, and a silence settles that he knows is permanent.',
      setting: 'The river at dusk, bats overhead',
      who: ['The son (Korea)', 'The father (Korea)'],
      quote: 'It’ll be my own funeral',
      themes: ['Families in conflict', 'Growing up and loss of innocence'],
      tension: 4,
      significance:
        'The roles in the boat are reversed, and the son now watches his father as if preparing himself.',
    },
    {
      where: 'A Family Supper, the opening and the garden',
      title: 'Fugu, Watanabe and the well',
      summary:
        "The narrator explains how fugu kills and that his mother died from eating it. At his father's house, the father tells him that his partner Watanabe killed himself after their firm collapsed, and calls him a man of principle. In the garden Kikuko smokes in secret and reveals that Watanabe killed his family too, and by the old well the narrator recalls the ghost he saw as a child.",
      setting: "The father's house in Kamakura; the darkening garden",
      who: ['The father (A Family Supper)', 'The narrator (A Family Supper)', 'Kikuko'],
      quote: 'The proof is, as it were, in the eating.',
      themes: ['Families in conflict', 'Grief and death', 'Identity and belonging'],
      tension: 3,
      significance: 'Death, honour and a ghost are all in place before the meal is served.',
    },
    {
      where: 'A Family Supper, the supper',
      title: 'The fish',
      summary:
        "Showing his son a plastic battleship, the father hints that his wife's death was no accident. At supper the narrator fails to recognise his mother's photograph. The father serves a pot of fish, calls it only fish, and they eat; the story ends with them waiting for tea.",
      setting: 'A dim room lit by a single lantern',
      who: ['The father (A Family Supper)', 'The narrator (A Family Supper)', 'Kikuko'],
      quote: 'One side of his face had fallen into shadow.',
      themes: ['Appearance and reality', 'Families in conflict', 'Grief and death'],
      tension: 5,
      significance: 'The suspense is never resolved, leaving the reader to judge the father.',
    },
    {
      where: 'Invisible Mass of the Back Row, the Jamaican classroom',
      title: 'Who invite him here?',
      summary:
        'With the Inspector watching, Hortense is asked about Columbus. Instead of the expected answer she questions why he came at all, and Miss Henderson raps her knuckles with a ruler. Humiliated, she turns her anger on Lorna Phillips, the favoured girl at the front.',
      setting: 'A classroom in Jamaica during an inspection',
      who: ['Hortense', 'Miss Henderson', 'The Inspector', 'Lorna Phillips'],
      quote: 'Is what Columbus did want? Who invite him here?',
      themes: ['Power and status', 'Identity and belonging'],
      tension: 5,
      significance:
        'The colonial classroom punishes a child for asking whose history she is being taught.',
    },
    {
      where: 'Invisible Mass of the Back Row, leaving Jamaica',
      title: 'Leaving',
      summary:
        "Hortense learns that she and her brothers are to join their parents in England. She thinks of Cousy's grave and who will look after it, and dresses in new clothes for the journey that feel like a stranger's.",
      setting: 'Jamaica, before the journey to England',
      who: ['Hortense'],
      themes: ['Identity and belonging', 'Grief and death'],
      tension: 2,
      significance: 'The move promises escape from the back row, and costs her the home she knows.',
    },
    {
      where: 'Invisible Mass of the Back Row, the school in England',
      title: 'Another back row',
      summary:
        'England is cold and demands a new kind of English. Tested on her reading, Hortense is placed in a low stream with other Caribbean children, and settles into the culture of the back row. By the end the back row finds its voice and claims a victory.',
      setting: 'A secondary school in England',
      who: ['Hortense'],
      quote: 'the culture of the back row',
      themes: ['Identity and belonging', 'Power and status', 'Growing up and loss of innocence'],
      tension: 3,
      significance: 'The same injustice follows her across the ocean, but so does her defiance.',
    },
    {
      where: 'The Darkness Out There, the field',
      title: "Past Packer's End",
      summary:
        'Sandra walks through summer flowers to Nether Cottage, past the wood she has feared since childhood, dreaming about her future. Kerry Stevens rises from behind a hedge and gives her a fright; she is disappointed to be paired with him.',
      setting: "A summer field beside the dark wood called Packer's End",
      who: ['Sandra', 'Kerry Stevens'],
      quote: 'She would fall in love',
      themes: ['Growing up and loss of innocence', 'Appearance and reality'],
      tension: 2,
      significance:
        "Sandra's innocence and her misjudgements are both established before she meets Mrs Rutter.",
    },
    {
      where: 'The Darkness Out There, the cottage',
      title: 'Good neighbours',
      summary:
        'Mrs Rutter welcomes them with tea and flattery, sets Kerry to mow and Sandra to clean, and talks of her husband, killed at the start of the war. She offers chocolates from a pretty tin. Kerry tells Sandra he does not like the way she talks.',
      setting: 'Nether Cottage: a stuffy kitchen crowded with china ornaments',
      who: ['Mrs Rutter', 'Sandra', 'Kerry Stevens'],
      quote: 'Her eyes investigated, quick as mice.',
      themes: ['Appearance and reality', 'Growing up and loss of innocence'],
      tension: 2,
      significance: 'The kindly surface is built up, with small warnings that Sandra misses.',
    },
    {
      where: "The Darkness Out There, Mrs Rutter's story",
      title: 'The plane in the wood',
      summary:
        'Kerry asks about the German plane. Mrs Rutter describes finding it with her sister Dot in 1942, cheering, then finding a trapped airman still alive and leaving him. She went back the next morning and still did nothing, and he died after two nights.',
      setting: 'The cottage kitchen over cups of tea',
      who: ['Mrs Rutter', 'Kerry Stevens', 'Sandra'],
      quote: 'Tit for tat, I said to Dot.',
      themes: ['Grief and death', 'Appearance and reality', 'Growing up and loss of innocence'],
      tension: 5,
      significance:
        'The revelation: the real darkness is not in the wood but in the kind old lady.',
    },
    {
      where: 'The Darkness Out There, the gate',
      title: 'The darkness in your head',
      summary:
        'Kerry walks out and Sandra follows. At the gate he shakes with anger and pity for the airman. Sandra sees that he has grown in her eyes, that she could get people all wrong, and that the darkness she feared is inside people and now inside her.',
      setting: 'The gateway into the cornfield, in afternoon sun',
      who: ['Sandra', 'Kerry Stevens'],
      quote: 'The darkness was out there and it was a part of you',
      themes: ['Growing up and loss of innocence', 'Appearance and reality'],
      tension: 4,
      significance: "Sandra's innocence ends, and the story's title takes on its full meaning.",
    },
  ],

  relationships: [
    {
      from: 'Grandfather',
      to: 'The boy',
      kind: 'grandfather and grandson',
      note: 'They share the launch and the shed; the boy stays loyal to him to the end and sees him again at the pond.',
    },
    {
      from: "The boy's mother",
      to: 'Ralph',
      kind: 'new partners',
      note: "Her new relationship ends the family's shared grief; by the end they are planning to move house together.",
    },
    {
      from: 'Ralph',
      to: 'Grandfather',
      kind: 'rivals',
      note: "Ralph challenges the Grandfather's authority in his own house, and the Grandfather withdraws to his shed rather than fight.",
    },
    {
      from: 'The boy',
      to: 'Ralph',
      kind: 'hostility',
      note: 'The boy refuses his offers, hates him for replacing his father, and plans to throw acid in his face.',
    },
    {
      from: "The boy's mother",
      to: 'Grandfather',
      kind: 'daughter and father',
      note: 'Once dependent on him, she sides with Ralph at the meal, and never explains his death to her son.',
    },
    {
      from: 'Elizabeth Bates',
      to: 'Walter Bates',
      kind: 'wife and husband',
      note: 'A bitter marriage that she understands only over his body: they were strangers who met and fought in the dark.',
    },
    {
      from: "Walter's mother",
      to: 'Elizabeth Bates',
      kind: 'mother-in-law and daughter-in-law',
      note: 'United in the washing of the body but divided in grief: one mourns the boy, the other the stranger.',
    },
    {
      from: 'Elizabeth Bates',
      to: 'Annie and John',
      kind: 'mother and children',
      note: 'She protects them from the truth, and realises at the end that they belong to life, not to the marriage.',
    },
    {
      from: 'Carla Carter',
      to: 'Stefan Jeziorny',
      kind: 'penfriends',
      note: 'A friendship built on poetry and a misunderstanding, which survives the truth and ends in a shared song.',
    },
    {
      from: 'Valerie Kenward',
      to: 'Stefan Jeziorny',
      kind: 'host and guest',
      note: 'She makes a great fuss about having him to stay, then mocks him behind his back.',
    },
    {
      from: 'The Head',
      to: 'Carla Carter',
      kind: 'headteacher and catering assistant',
      note: 'He cannot remember her name, and is astonished to learn at the end who she is.',
    },
    {
      from: 'The father (Korea)',
      to: 'The son (Korea)',
      kind: 'father and son',
      note: 'Close through shared work, divided for ever by what the son overhears; the son rows as the power passes to him.',
    },
    {
      from: 'The father (A Family Supper)',
      to: 'The narrator (A Family Supper)',
      kind: 'father and son',
      note: 'Estranged and formal, speaking in pauses; the father invites him to stay, and the son will not commit himself.',
    },
    {
      from: 'Kikuko',
      to: 'The narrator (A Family Supper)',
      kind: 'sister and brother',
      note: 'Relaxed and teasing together, she tells him the truth about Watanabe that their father leaves out.',
    },
    {
      from: 'The father (A Family Supper)',
      to: 'Watanabe',
      kind: 'business partners',
      note: 'Partners for seventeen years; the father first honours Watanabe, then calls what he did a mistake.',
    },
    {
      from: 'Miss Henderson',
      to: 'Hortense',
      kind: 'teacher and pupil',
      note: 'The teacher punishes her question with the ruler, answerable herself to the Inspector.',
    },
    {
      from: 'Hortense',
      to: 'Lorna Phillips',
      kind: 'resentful classmates',
      note: 'Hortense turns the humiliation she suffers from above onto the favoured girl at the front of the class.',
    },
    {
      from: 'The Inspector',
      to: 'Miss Henderson',
      kind: 'inspector and teacher',
      note: 'His visit makes the teacher as anxious as her pupils, and helps explain her harshness.',
    },
    {
      from: 'Sandra',
      to: 'Kerry Stevens',
      kind: 'reluctant partners',
      note: 'She looks down on him at first and ends seeing him as older and larger in his anger.',
    },
    {
      from: 'Mrs Rutter',
      to: 'Sandra',
      kind: 'flatterer and helper',
      note: 'Mrs Rutter praises her looks and her sewing; Sandra trusts her until the story of the plane.',
    },
    {
      from: 'Kerry Stevens',
      to: 'Mrs Rutter',
      kind: 'helper who turns against her',
      note: 'He distrusts her early on, and walks out in disgust when he hears what she did.',
    },
  ],

  compareWith: [
    {
      title: 'Never Let Me Go',
      href: '/revision/texts/never-let-me-go',
      reason:
        "Also by Kazuo Ishiguro and also on AQA's list, with a restrained first-person narrator who, like the son in ‘A Family Supper’, leaves the most painful things unsaid.",
    },
    {
      title: 'Lord of the Flies',
      href: '/revision/texts/lord-of-the-flies',
      reason:
        'Like ‘The Darkness Out There’, it finds the darkness in people rather than in the woods, and its boys lose their innocence through what they learn about human nature.',
    },
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'A family whose comfortable surface hides conflict and guilt, useful beside ‘A Family Supper’ and ‘Chemistry’ for families that fail to see each other.',
    },
  ],

  contentGuidance: [
    'mortality',
    'violence',
    'crime_injustice',
    'mental_health',
    'addiction',
    'discrimination',
    'colonialism',
    'intimate_relationships',
    'supernatural',
  ],

  sources: [
    {
      label:
        'AQA GCSE English Literature 8702/2, specimen question paper (Telling Tales questions)',
      url: 'https://filestore.aqa.org.uk/resources/english/AQA-87022-SQP.PDF',
    },
    {
      label: 'AQA 8702/2, specimen mark scheme (indicative content for Telling Tales)',
      url: 'https://filestore.aqa.org.uk/resources/english/AQA-87022-SMS.PDF',
    },
    {
      label: 'AQA 8702/2, 2020 question paper (Korea and Chemistry questions)',
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-87022-QP-NOV20-CR.PDF',
    },
    {
      label:
        'AQA 8702/2, June 2023 question paper (paper structure; Odour of Chrysanthemums and A Family Supper questions)',
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-87022-QP-JUN23-CR.PDF',
    },
    {
      label: 'AQA 8702/2, June 2023 mark scheme',
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-87022-MS-JUN23.PDF',
    },
    {
      label: 'AQA 8702/2, June 2023 report on the examination (direct quotation not required)',
      url: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-87022-WRE-JUN23.PDF',
    },
    {
      label:
        "Cambridge University Press, GCSE English Literature for AQA: Short Story Anthology Teacher's Resource (2015), free online edition: contents, plot points and short quotations from all seven stories (archived copy)",
      url: 'http://web.archive.org/web/20240712003441/https://www.cambridge.org/us/files/4514/5501/8621/GCSE_English_Literature_for_AQA_Short_Story_Anthology_Teachers_Resource_Free_Online.pdf',
    },
    {
      label:
        'Cambridge University Press, Short Story Anthology Student Book (Chris Sutcliffe, ed. Peter Thomas), sample unit on Chemistry: quotations and plot summary',
      url: 'https://assets.cambridge.org/97811074/54408/excerpt/9781107454408_excerpt.pdf',
    },
    {
      label:
        'Project Gutenberg eBook 22480, The Prussian Officer and Other Stories (1914 text of Odour of Chrysanthemums)',
      url: 'https://www.gutenberg.org/ebooks/22480',
    },
    {
      label:
        'University of Nottingham, Odour of Chrysanthemums: a text in process (1914 and 1911 texts; about the text; James and Polly Lawrence)',
      url: 'http://odour.nottingham.ac.uk/',
    },
    {
      label:
        "A copy of the AQA anthology printing of 'My Polish Teacher's Tie' (pages marked Copyright 2010 AQA and its licensors), used only to check wording; an unlicensed upload, not to be linked from the site",
      url: 'https://www.scribd.com/document/132314403/63yhj',
    },
    {
      label:
        "Ysgol Rhiwabon Year 9 short stories home-learning pack, containing the text of 'The Darkness Out There', used only to check wording; not to be linked from the site",
      url: 'https://www.ysgolrhiwabon.co.uk/wp-content/uploads/2020/03/Year-9-short-stories-home-learning-tasks.pdf',
    },
    {
      label: "Text of 'A Family Supper', British spelling (used only to check wording)",
      url: 'https://magicbarrel.wordpress.com/wp-content/uploads/2010/12/family-supper_ishiguro.pdf',
    },
    {
      label: "Text of 'A Family Supper', American-edited (used only to check wording)",
      url: 'https://andrewuser.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/Lesson-1-Download-Family-Supper-and-Stones.pdf',
    },
    {
      label: "shortsonline (xpressenglish.com), text of 'Korea' (used to check wording)",
      url: 'https://xpressenglish.com/our-stories/korea/',
    },
    {
      label:
        'Journal of the Short Story in English, \'"Korea" by John McGahern\', quoting the Vintage Collected Stories text',
      url: 'https://journals.openedition.org/jsse/1021',
    },
    {
      label:
        "A Personal Anthology, 'Korea' by John McGahern (first publication in The Atlantic, October 1969; Nightlines, 1970)",
      url: 'https://apersonalanthology.com/2023/06/30/korea-by-john-mcgahern/',
    },
    {
      label: "Universal Teacher (Andrew Moore, 2002), study guide to 'Chemistry'",
      url: 'http://www.universalteacher.org.uk/anthology/chemistry.htm',
    },
    {
      label: 'Victorian Web, Barry J. Fishman, The Image of Water in Chemistry',
      url: 'https://victorianweb.org/neovictorian/gswift/swim/chem.html',
    },
    {
      label:
        'Shalom Education, Telling Tales analysis pages (used only where another source agreed)',
      url: 'https://www.shalom-education.com/courses/gcse-english-literature/lessons/prose/topic/invisible-mass-of-the-back-row-telling-tales-analysis-aqa-anthology/',
    },
    {
      label:
        "Get Revising, mind map for 'Invisible Mass of the Back Row' (used only where another source agreed)",
      url: 'https://getrevising.co.uk/diagrams/invisible-mass-of-the-back-row',
    },
    {
      label:
        'Internet Archive catalogue records: Pack of Cards (Heinemann, 1986) contents; Learning to Swim (first published 1982); Ice Cream (2000) description',
      url: 'https://archive.org/details/packofcardsstori0000live',
    },
    {
      label:
        'Wikipedia: Odour of Chrysanthemums (written 1909; English Review 1911; The Prussian Officer, Duckworth, 1914)',
      url: 'https://en.wikipedia.org/wiki/Odour_of_Chrysanthemums',
    },
    { label: 'Wikipedia: D. H. Lawrence', url: 'https://en.wikipedia.org/wiki/D._H._Lawrence' },
    { label: 'Wikipedia: John McGahern', url: 'https://en.wikipedia.org/wiki/John_McGahern' },
    { label: 'Wikipedia: Kazuo Ishiguro', url: 'https://en.wikipedia.org/wiki/Kazuo_Ishiguro' },
    { label: 'Wikipedia: Helen Dunmore', url: 'https://en.wikipedia.org/wiki/Helen_Dunmore' },
    { label: 'Wikipedia: Penelope Lively', url: 'https://en.wikipedia.org/wiki/Penelope_Lively' },
    {
      label: 'Wikipedia: History of Jamaica',
      url: 'https://en.wikipedia.org/wiki/History_of_Jamaica',
    },
    {
      label: 'Wikipedia: Windrush generation',
      url: 'https://en.wikipedia.org/wiki/Windrush_generation',
    },
    { label: 'Wikipedia: Katowice', url: 'https://en.wikipedia.org/wiki/Katowice' },
  ],
}
