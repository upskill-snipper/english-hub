import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Joy Luck Club, Amy Tan (1989). A complete guide: before this file the text
 * had only the course at /courses/igcse-lit-prose-joy-luck-club, and nothing here
 * is taken from it.
 *
 * THE NOVEL IS IN COPYRIGHT and no licensed copy is held here. Every quotation
 * was instead checked word for word against the Penguin Books edition (the one
 * with Tan's preface, 2019) through Google Books' search-inside, which returns
 * the printed sentence around each phrase with its page number. Where that index
 * does not cover a page, the wording was taken only if two other sources agreed:
 * "I am becoming Chinese" (the opening of A Pair of Tickets) rests on the NEA Big
 * Read teacher's guide and on several printed anthologies of the story found
 * through the Internet Archive's full-text search (among them the Longman
 * Anthology of Short Fiction, 2001), and the close of Two Kinds ("Perfectly
 * Contented", "two halves of the same song") on the NEA guide and on school
 * anthology printings found the same way. The first sentence of Two Kinds falls
 * across a page break in the Penguin edition, so it was confirmed from school
 * copies as well. The detail that Suyuan told a fifteen-year-old Jing-mei her
 * Chinese self was in her blood, waiting to be let go, is confirmed by the same
 * anthology printings; it is paraphrased, not quoted.
 *
 * SECOND CHECK (fact-check pass, September 2026). Every quotation was searched
 * again independently and held. Corrected: the overview had the aunties ask
 * Jing-mei to take her mother's seat (her father asks, first sentence of the
 * novel); Lena was said to believe she caused Arnold's death at eight (she is
 * eight when the rice warning starts; he dies of measles years later); Jing-mei
 * was said to open and close both mothers' sections (she opens the first and
 * closes the last); the model answer said she once played both piano pieces
 * (she played only Pleading Child); nengkan was glossed as a belief (the novel
 * calls it an ability); Ying-ying "cannot speak" her first husband's name, not
 * "will not"; Lindo runs, not creeps, to the candle; and the Mrs Jordan scene is
 * now told as the novel tells it rather than as "took her for Vietnamese".
 *
 * Beware anthology and school copies of single stories: the one checked for Two
 * Kinds prints a version whose wording differs in small ways from the novel (it
 * has "planted myself more squarely" where the Penguin text has "wedged myself
 * more tightly"). Check any new quotation against the novel, not those.
 *
 * TRAPS FOUND WHILE CHECKING, so the next editor does not walk into them:
 * - The NEA teacher's guide gives "How could I know these two things do not
 *   mix?" to Ying-ying. It is Lindo's, in Double Face.
 * - The Gale study questions call the companion piece in Two Kinds "Contented
 *   Child". Its own essay, the NEA and the story say "Perfectly Contented".
 * - The NEA says eight narrators and the old course page says sixteen. There are
 *   seven: Suyuan is dead, and Jing-mei tells her stories.
 * - Pearson's guide spells the twins Chun Hwa and Chun Yu, and says Tan met the
 *   two daughters her mother had left behind. The novel spells them Chwun Yu and
 *   Chwun Hwa, and Tan's preface and the NEA both say her mother left three, so
 *   the guide gives no number for the half-sisters Tan met.
 * - In The Red Candle it is Lindo herself who blows out her husband's end of the
 *   marriage candle, not the matchmaker's servant, who only confesses later that
 *   it went out.
 *
 * DROPPED because they could not be verified: An-mei learning "to shout" at the
 * end of Magpies, and the outcome of her mother's death for the household (the
 * index skips those pages); the details of Waverly's put-down at the crab
 * dinner in Best Quality. "Together we look like our mother" was checked late
 * and is on the last page; it is paraphrased rather than quoted.
 */
export const guide: StudyGuide = {
  slug: 'the-joy-luck-club',
  title: 'The Joy Luck Club',
  author: 'Amy Tan',
  form: 'short-story-collection',
  scope:
    'The whole novel (1989): sixteen stories in four sections, each section opened by a short parable. It is set for the modern prose section of Pearson Edexcel International GCSE English Literature, which is a closed-book examination: you answer one essay question from a choice of two, without the novel in front of you.',
  rights: {
    status: 'copyright',
    acknowledgement:
      "© Amy Tan 1989. First published in 1989 by G. P. Putnam's Sons, New York. Short quotations are used for the purposes of criticism and review.",
  },
  workLength: {
    words: 90000,
    basis:
      'Estimated, not counted: no licensed copy is held to count. In the Penguin edition used for checking, the stories run from page 1 to page 329, and at roughly 280 words a page the novel is in the region of 90,000 words. Any length above 3,000 words puts it under the long-work limit, so the estimate cannot loosen the quotation limits.',
  },

  overview: {
    summary: [
      'The Joy Luck Club is a novel built from sixteen linked stories, arranged in four sections of four. Each section opens with a short Chinese parable, and every story is told in the first person by one of seven narrators: four daughters born in America and three of their mothers, born in China. The fourth mother, Suyuan Woo, has died two months before the book begins, so her daughter Jing-mei, who also goes by June, tells her stories for her. The title is the name of the mah jong club Suyuan founded in San Francisco in 1949, a copy of the one she had started during the war in Kweilin, where four young women met to feast, play and tell good stories in a city crowded with people fleeing the Japanese.',
      "In the first story Jing-mei, at her father's request, takes her mother's place at the mah jong table beside the three surviving aunties, An-mei Hsu, Lindo Jong and Ying-ying St. Clair. Then they tell her the news Suyuan did not live to share: the twin baby daughters she was forced to leave by a road in 1944, as she fled Kweilin for Chungking, are alive, and a letter from them arrived after her death. The aunties want Jing-mei to go to China and tell her half-sisters about their mother. When she admits she does not know what she would say, they are frightened, because they see their own daughters in her. That fear is the novel's question: can a mother's story reach a daughter who barely speaks her language?",
      "The stories that follow answer it from both sides. In the first section the mothers remember girlhoods in China: An-mei's mother returning in disgrace, Lindo's arranged marriage, Ying-ying lost at the Moon Festival. In the second the daughters remember American childhoods and their battles with their mothers over chess, piano and obedience. In the third the daughters, now adults, struggle with marriages and careers and still hear their mothers' voices. In the fourth the mothers speak again, deciding what to tell. The book ends with Jing-mei and her father, Canning Woo, travelling to China, where she meets her sisters for the first time.",
      'It is easy to read the book as a story about a gap between generations, and it is one. But the most rewarding answers notice how much of that gap is translation rather than a lack of love. The mothers speak a broken English that makes them sound foolish to their daughters, while in Chinese they are sharp, funny and wise; the daughters hear warnings as criticism and pride as control. Tan gives each side its own voice and lets the reader see what neither side can, which is why the book feels hopeful even when its stories are painful. A strong essay argues about how far that hope is earned, and for whom.',
    ],
  },

  context: [
    {
      heading: 'Amy Tan',
      body: "Amy Tan was born on 19 February 1952 in Oakland, California. Both her parents had come from China. Her father, John, was a Baptist minister and electrical engineer; her mother, Daisy, had left Shanghai and a disastrous first marriage just before the Communist takeover in 1949. When Tan was a teenager her father and her older brother Peter died of brain tumours within months of each other, and her mother moved the family to Switzerland. Tan studied literature rather than the medicine her mother wanted for her, took a master's degree in linguistics, and worked with children as a language development consultant and then as a business writer before she began writing fiction. The Joy Luck Club, published in 1989, was her first book.",
    },
    {
      heading: "Her mother's stories",
      body: "Pearson calls the novel semi-autobiographical, and the history behind it is as dark as anything in it. Tan's mother left three daughters from her first marriage in China, and Tan did not know her half-sisters existed until her mother let it slip during an argument. Tan's grandmother, a widow, became a rich man's concubine and died of an overdose of opium, which Tan's mother saw as a small child. The novel is not a family history, and in the preface to a later edition Tan is clear that she changed and invented freely: she had no little brother who was lost to the sea, although ‘Half and Half’ grew from her mother's determination to fight fate as illness took Tan's brother and father. She did have a disastrous piano recital, like Jing-mei. And she records that her mother came to believe she had been helped by a ghostwriter, the grandmother herself, because some details Tan had invented turned out to be true.",
    },
    {
      heading: 'A promise and a journey',
      body: "In the same preface Tan describes the moment that set the book going. In 1986, on holiday in Hawaii, she heard that her mother was in intensive care after a heart attack, and she made a promise: if her mother lived, she would really listen to her stories and take her to China to get to know her. It turned out that her mother had bruised her ribs leaning over a counter to shout at a fishmonger, and Tan kept the promise anyway. In 1987 she went to China with her mother and met her half-sisters, which Pearson's guide describes as the experience that gave her a new understanding of her mother's life. The novel's last story, in which Jing-mei meets the sisters her mother lost, is the book's version of that journey.",
    },
    {
      heading: 'War in China',
      body: "The mothers' stories are set against decades of upheaval. After the end of the imperial system China was torn between the Nationalists, the Kuomintang led by Chiang Kai-shek, and the Communists led by Mao Zedong. In 1937 Japan launched a full-scale war on China, and Nanking fell that December; Nationalists and Communists fought the invaders in an uneasy alliance. Pearson's guide puts the number of Chinese people killed or made refugees at more than twenty million. Suyuan's Kweilin story belongs to the last years of that war: the Kuomintang insist until the last day that the city is safe, and in 1944 she flees on foot towards Chungking. In the final story Tan even makes the reader doubt the official record, when Canning Woo recalls that the Kuomintang told the news bureau he worked for what it could say. In 1949 the Communists founded the People's Republic, and many who could leave, Tan's mother among them, did.",
    },
    {
      heading: 'Women in old China',
      body: "The mothers' girlhoods, between the 1910s and the 1930s, show how little a Chinese girl was allowed to choose. Lindo is promised in marriage through a matchmaker when she is two and sent to live with her future husband's family at twelve. An-mei's widowed mother loses her place in her family by becoming a rich man's concubine, and her own mother, Popo, calls her a ghost. Ying-ying is taught by her nursemaid that a girl should never ask for what she wants. Filial duty runs through all of it: the respect a child owes her parents and ancestors, which An-mei calls shou. Against this background the stories measure their heroines by cunning and endurance. Lindo escapes her marriage by a trick; An-mei learns from her mother what it costs a woman to have no voice. Tan never presents these women only as victims, and a good answer does not either.",
    },
    {
      heading: 'Chinese America',
      body: "A great wave of Chinese immigrants came through San Francisco at the start of the Gold Rush, and for decades the Chinese Exclusion Act of 1882 and other laws kept Chinese people out or made citizenship hard to gain. The wartime alliance between China and the United States helped to repeal them, but, as the NEA guide notes, racial bias persisted in immigration law until at least 1965. In the novel the mothers arrive with almost nothing: Suyuan is given two hand-me-down dresses by the Refugee Welcome Society, missionary ladies from the First Chinese Baptist Church, and it is through the church that she meets the Hsus, the Jongs and the St. Clairs. Lindo pays a girl in Peking to coach her in what to tell American officials, and Lena keeps a photograph of her mother taken, her father said, just after she was released from the Angel Island Immigration Station. Their daughters grow up speaking English first and meet a quieter prejudice, as when Ted Jordan's mother, assuring Rose she has nothing against minorities, warns her off her son and brings up the unpopular Vietnam War, so that Rose has to tell her she is not Vietnamese. China and the United States restored diplomatic ties in 1979, and in the novel, as soon as letters could be openly exchanged between the two countries, Suyuan wrote to old friends in Shanghai and Kweilin about her daughters.",
    },
    {
      heading: 'Publication, and the specification',
      body: "The Joy Luck Club was published in 1989 by G. P. Putnam's Sons in New York. Several of its stories had appeared first in magazines, among them The Atlantic, and the NEA's Big Read guide says Tan believed she was writing a collection of short stories. It became an international best seller, was filmed in 1993 from a screenplay Tan wrote with Ronald Bass, and Pearson's guide credits its success with making room for other Asian-American writers. It is set for the modern prose section of Pearson Edexcel International GCSE English Literature. Because that paper is closed book, no edition is prescribed; Pearson recommends the Vintage paperback of 1991. Page numbers differ between editions, so this guide locates every moment by section and story title, which every edition shares.",
    },
  ],

  themes: [
    {
      title: 'Mothers and daughters',
      body: "Every story belongs to one of four mother-daughter pairs, and each pair fails to understand the other in its own way. Suyuan pushes Jing-mei to be a prodigy; Lindo shows Waverly off; An-mei wants Rose to fight for herself; Ying-ying says she has watched Lena “as though from another shore”. The daughters experience their mothers as critical, controlling or embarrassing. The mothers' own stories, told to the reader rather than to the daughters, show where the pressure comes from: each mother lost a mother, a child or a self in China, and wants her daughter to have what she could not. The most convincing reading is that the book takes neither side but the side of telling. The pairs who move closer, Jing-mei playing her mother's piano at the end of Two Kinds, Ying-ying resolving to tell Lena everything, do so because a story is finally passed on. A sharper reading, worth weighing, is that reconciliation in this book usually arrives after a mother has died, or in words the daughter never hears.",
    },
    {
      title: 'Language, silence and translation',
      body: "The third section is called American Translation, and translation is the novel's great problem. The mothers' English makes their daughters wince, and the daughters' Chinese is too thin to reach their mothers' meaning: Jing-mei says her mother's explanations made her feel they spoke two different languages, which, she adds, they did. Lena admits she often lied when she translated for her mother, and when her mother's baby dies she invents a comforting message for her father rather than repeat what her mother said. Silence is taught on purpose. Amah tells Ying-ying that “A girl can never ask, only listen”, and the turtle in An-mei's mother's story teaches that tears only feed someone else's joy. Against this, speaking becomes strength: Rose at last tells Ted what she wants, and Ying-ying decides to break a lifetime's silence. The NEA guide notes that Tan's own style draws on the several kinds of English she grew up hearing, so the book performs the translation it describes.",
    },
    {
      title: 'Chinese and American identity',
      body: "The daughters want to be American and are embarrassed by what is Chinese in them; the mothers want their daughters to be both. Lindo puts the mothers' dream into one phrase, “American circumstances and Chinese character”, and admits it failed, because circumstances shape character: Waverly, she says, is Chinese only in her skin and her hair. Identity here is less a fixed thing than a set of faces. Lindo, who learned to hide her true self to get into America, now sees herself with two faces, one Chinese and one American, and believes you must sacrifice one to show the other; Waverly laughs that they are two-faced, which she says is good if you get what you want. The last story offers another answer. Crossing into China, Jing-mei feels she is “becoming Chinese”, and meeting her sisters she finds it not in her face but in her family. One reading is that the novel settles the question by blood. A more careful one is that it settles it by knowledge: what makes Jing-mei feel Chinese at last is knowing her mother's story.",
    },
    {
      title: 'Hope and the American Dream',
      body: "Pearson names hope as a key theme, and it is built into the title: in wartime Kweilin, Suyuan explains, hope was the women's only joy, and so they named their parties Joy Luck. Every mother carries the American Dream across the ocean, from the swan parable's wish for a daughter nobody will look down on to Suyuan's belief, at the start of Two Kinds, that in America you could be anything you wanted to be. The novel is honest about the dream's cost. It turns into pressure, as in Jing-mei's prodigy lessons and Waverly's parade through the market, and it can defeat itself, as when Lindo's daughter grows up with American freedoms and without the Chinese character her mother meant her to keep. Yet the ending keeps the hope and changes its shape. Suyuan's name, her husband explains, means “Long-Cherished Wish”, and the final line presents her daughters together as that wish fulfilled. Hope survives here as something handed on rather than something achieved.",
    },
    {
      title: 'Friendship and rivalry',
      body: 'The club itself is a friendship that has lasted for decades. The aunties play mah jong, cook for each other, boast and gossip; when Suyuan dies they take on her unfinished business as their own, even writing back to her daughters in China and signing the letter with her name. But the friendship runs alongside rivalry, fought through the daughters. Suyuan and Lindo compared Jing-mei and Waverly from babyhood, down to the creases in their belly buttons, and the girls inherit the contest: chess against piano, and later Waverly outsmarting Jing-mei again at the New Year crab dinner. Waverly says the two mothers were so close that they tormented each other with boasts and secrets, and one convincing reading is that the rivalry is a form of love, a way of boasting about daughters the mothers could not praise to their faces. It is worth noticing that the friendships between women are the most lasting relationships in the book; the marriages, by comparison, are fragile.',
    },
    {
      title: 'Fate, faith and choice',
      body: "Tan's characters argue constantly about how much of life they control. An-mei believed she had nengkan, the ability to do anything she put her mind to, and a faith in God that she would find her drowned son Bing; when that failed, the family Bible went under a table leg that was too short, “to correct the imbalances of life”. Rose, looking back, decides that “fate is shaped half by expectation, half by inattention”. Lena, like her mother, sees disaster coming and does nothing, which is why the falling vase in Rice Husband, and Ying-ying's question to her daughter, matter so much. Lindo, by contrast, makes her own fate by inventing a story the Huangs believe. The novel leaves the question open, but its pattern suggests that choice is possible for those who speak and act: Lindo with her candle, Rose with Ted, Jing-mei with her ticket to China all change their stories.",
    },
    {
      title: 'Storytelling and memory',
      body: "The club was founded to feast and to tell stories, and the novel is stories within stories: the parables that open each section, Suyuan's Kweilin tale with its ending changed at every telling, Popo's warnings, the turtle, the Moon Lady's play. Stories here are an inheritance. The aunties' fear, as Jing-mei understands it, is that their daughters will raise children with none of their hope passed down. Stories are also a form of power and of protection. Suyuan tells the Kweilin story as a fairy tale until one night she gives it its true, terrible ending; Lindo's escape is a story she tells the Huangs; Ying-ying decides that only by telling her past can she reach Lena. Tan's structure lets the reader hear what the daughters mostly do not, which makes the reader the listener the mothers wanted. That is the strongest argument for why the novel is built as it is.",
    },
  ],

  characters: [
    {
      name: 'Jing-mei Woo',
      role: "Also called June. Suyuan's daughter; narrator of the first and last stories and one in every section.",
      body: "Jing-mei is thirty-six when she goes to China: a copywriter for a small advertising agency who finished neither of the degrees she started, and the daughter who feels she has most disappointed her mother. She is the book's bridge. She tells her mother's stories as well as her own, and at the end of the first story she sits in her mother's place at the mah jong table, “on the East, where things begin”. As a child in Two Kinds she refuses to become the prodigy Suyuan wants; as an adult in Best Quality she is still outshone by Waverly. Her arc is the clearest in the novel, from not knowing what she could tell her sisters about her mother to recognising what part of her is Chinese. Her name, her father tells her, joins a word for pure essence with a word for younger sister.",
    },
    {
      name: 'Suyuan Woo',
      role: "Jing-mei's mother and founder of the Joy Luck Club; dead before the novel opens.",
      body: 'Suyuan is everywhere in the book and narrates none of it. We learn her life from Jing-mei, the aunties and finally her husband: a first marriage to a Kuomintang officer, the flight from Kweilin in 1944 with twin babies she was forced to leave by the road, and a lifelong search for them. In America she is proud, demanding and funny, and her pressure on Jing-mei looks like vanity until the last story shows its source. Her name, Canning explains, means Long-Cherished Wish; written another way it sounds the same but means something harsher, and when she was angry with him he told her it should be Grudge. The reader, unlike her daughter, is allowed to see how much she lost.',
    },
    {
      name: 'Canning Woo',
      role: "Jing-mei's father, Suyuan's second husband.",
      body: "Canning met Suyuan in Chungking. It is he who asks Jing-mei to take her mother's seat at the club, and at seventy-two he travels with her to China, visiting an aunt he has not seen since he was ten. In their hotel in Guangzhou he tells Jing-mei, in Chinese at her request, the whole story of how the twins were lost and found, which makes him the novel's last storyteller and the one who gives Suyuan's story its true ending.",
    },
    {
      name: 'Chwun Yu and Chwun Hwa',
      role: "Suyuan's twin daughters by her first marriage, Jing-mei's half-sisters.",
      body: 'Their names mean Spring Rain and Spring Flower. Left by the roadside as babies in 1944 with money, jewellery and a note, they were found and raised by a Muslim couple, Mei Ching and Mei Han, and after years of searching Suyuan traced an address for them shortly before she died. They are mostly absent and imagined, until the final scene in Shanghai gives them faces.',
    },
    {
      name: 'An-mei Hsu',
      role: "Rose's mother; narrator of Scar and Magpies.",
      body: 'An-mei is raised by her grandmother, Popo, who tells her that her mother is a ghost. At nine she follows her mother to Tientsin, into the household of the rich Wu Tsing, where her mother lives as one of his concubines and where An-mei learns how her mother was trapped into that life. Her stories are about swallowing pain and learning not to. In America she has seven children and a fierce faith that fails when her four-year-old son, Bing, is lost to the sea. She fears that Rose, like her own younger self, will not stand up for herself, and she is also the friend who, years earlier, introduced Lindo to her husband.',
    },
    {
      name: 'Rose Hsu Jordan',
      role: "An-mei's daughter; narrator of Half and Half and Without Wood.",
      body: 'Rose was fourteen and supposed to be watching her little brother Bing on the day he was lost, and she has never stopped feeling responsible. She marries Ted Jordan, lets him make every decision, and is left unable to decide anything when he asks for a divorce. Her stories show a woman who cannot choose because she can see too many sides, the danger An-mei warned her of with the image of a young tree that bends to listen to others. In Without Wood she finally refuses to be pushed out of her own life and tells Ted she is staying in the house.',
    },
    {
      name: 'Lindo Jong',
      role: "Waverly's mother; narrator of The Red Candle and Double Face.",
      body: "Lindo is promised in marriage at two, sent to her future husband's family at twelve after a flood drives her own family south, and married at sixteen to Tyan-yu, a spoilt boy. She survives by obedience on the outside and cunning within, and escapes by persuading her mother-in-law that the ancestors have condemned the match. She is proud, sharp and strategic, the source of Waverly's invisible strength, and in America she shows her daughter off in the market. In Double Face, having her hair done before Waverly's wedding, she wonders what she has lost and what she has gained by keeping two faces.",
    },
    {
      name: 'Waverly Jong',
      role: "Lindo's daughter; narrator of Rules of the Game and Four Directions.",
      body: "Named after the street her family lived on, and called Meimei, Little Sister, at home, Waverly is a national chess champion by her ninth birthday. She learns her mother's art of invisible strength and turns it against her, and a quarrel about being shown off makes chess a contest with her mother. As an adult she is a successful tax attorney, divorced from Marvin Chen, with a daughter, Shoshana, and engaged to Rich Schields, and she dreads that her mother will poison this marriage as she suspects she poisoned the first. She is Jing-mei's rival from babyhood and the character students most often misjudge: she can be cruel, but Four Directions shows her fear from the inside.",
    },
    {
      name: 'Ying-ying St. Clair',
      role: "Lena's mother; narrator of The Moon Lady and Waiting between the Trees.",
      body: 'Born in the year of the Tiger into a rich family in Wushi, Ying-ying was a wild, stubborn, vain girl: lihai, in her own word. At four she fell from a boat on Tai Lake during the Moon Festival and was separated from her family. As a young woman she married a man so bad that even now she cannot bring herself to say his name. He left her, and she ended a pregnancy because she had come to hate him. Years later she married an American she calls Saint and came to America, where she lived like a ghost, having given up her spirit, her chi. She sees trouble before it comes, but for most of her life she has been too lost to act on what she sees. Her last story is her decision to tell Lena everything.',
    },
    {
      name: 'Lena St. Clair',
      role: "Ying-ying's daughter; narrator of The Voice from the Wall and Rice Husband.",
      body: "Lena grows up with an English-Irish American father and a Chinese mother who speaks little English and sees danger everywhere. She learns to see terrible things with her Chinese eyes and to lie when she translates. When she is eight her mother tells her that every grain of rice left in her bowl means a pockmark on her future husband, and she thinks at once of Arnold, a cruel neighbour boy with pitted cheeks. When he dies of measles years later, she believes she caused his death. As an adult she is married to Harold Livotny, whose restaurant design firm she encouraged him to start, and they divide every expense on a list on the refrigerator. She is the daughter who most needs her mother's story and is least able to ask for it.",
    },
    {
      name: "An-mei's mother",
      role: "Unnamed in the novel; a widow who becomes Wu Tsing's concubine.",
      body: "Rejected by her own family as a ghost for becoming a concubine, she returns to nurse her dying mother, Popo, and cuts flesh from her arm for her soup, an act of devotion An-mei never forgets. In Wu Tsing's house she is powerless: tricked into his bed by Second Wife, she has lost her son to Second Wife as well. Two days before the lunar new year she takes her own life with opium. She is the novel's clearest picture of what having no voice costs a woman.",
    },
    {
      name: 'Popo',
      role: "An-mei's grandmother.",
      body: "Popo raises An-mei on frightening stories and forbids her to mention her mother. Her illness brings An-mei's mother home, and her death sets An-mei's new life in motion.",
    },
    {
      name: 'Wu Tsing',
      role: 'A rich man in Tientsin with a wife, concubines and many children.',
      body: "Wu Tsing conspires with Second Wife to trap An-mei's mother. He is afraid of ghosts, and Second Wife manages him with pretended attempts on her own life, which is part of why An-mei's mother has no power in his house.",
    },
    {
      name: 'Second Wife',
      role: "Wu Tsing's most powerful concubine.",
      body: "Second Wife controls the household by charm and trickery. She arranges the trap that forces An-mei's mother to become a concubine, claims her baby son, and gives An-mei a pearl necklace that her mother crushes to prove it is glass.",
    },
    {
      name: 'Tyan-yu',
      role: "Lindo's first husband.",
      body: 'A spoilt boy who orders Lindo about at meals and never even looks at her at their wedding. The Huangs need him to have a son, which is the fear Lindo uses to escape.',
    },
    {
      name: 'Huang Taitai',
      role: "Tyan-yu's mother, Lindo's mother-in-law.",
      body: 'A domineering woman who wants a grandson. Lindo defeats her by playing on her fear of the ancestors, and the Huangs pay Lindo to leave and keep quiet.',
    },
    {
      name: 'Amah',
      role: "Ying-ying's nursemaid.",
      body: 'Amah loves Ying-ying more than her own son and teaches her the rules of a proper girl, including that a wish spoken aloud becomes a selfish desire.',
    },
    {
      name: 'Saint',
      role: "Ying-ying's American husband, Lena's father, now dead.",
      body: 'An English-Irish American who marries Ying-ying after she has given up her spirit and takes her to America. He speaks only a few Chinese phrases, and she has never told him or Lena about her past. By the time she tells her story he has died.',
    },
    {
      name: 'Bing Hsu',
      role: "An-mei's youngest son, Rose's brother.",
      body: 'A lively four-year-old who wanders along the reef on a family beach trip and is lost to the sea while Rose is meant to be watching him.',
    },
    {
      name: 'Ted Jordan',
      role: "Rose's husband.",
      body: 'A confident man who becomes a dermatologist and makes every decision in the marriage, from holidays to furniture, until he wants a quick divorce so that he can marry someone else. When Rose first meets his mother, Mrs Jordan warns her off Ted and talks about the unpopular Vietnam War, and Rose has to tell her she is not Vietnamese.',
    },
    {
      name: 'Harold Livotny',
      role: "Lena's husband and business partner.",
      body: 'Harold runs Livotny & Associates, a firm specialising in themed restaurant design, where Lena works as a project coordinator. His insistence that everything be split equally, down to the ice cream Lena never eats, is the sign of a marriage in which nothing is truly shared.',
    },
    {
      name: 'Rich Schields',
      role: "Waverly's fiancé.",
      body: 'A red-haired tax attorney, like Waverly, who is devoted to her and to her daughter. At dinner with the Jongs he gets the customs wrong, refusing second helpings out of politeness, and Waverly is sure her mother hates him.',
    },
    {
      name: 'Old Chong',
      role: "Jing-mei's deaf piano teacher.",
      body: "A retired piano teacher who lives in the Woos' building and cannot hear the wrong notes his pupil plays, so she learns she can get away with mistakes.",
    },
  ],

  keyQuotes: [
    {
      text: 'it comes from afar and carries with it all my good intentions',
      where:
        'Feathers from a Thousand Li Away, the opening parable: the old woman imagines telling her daughter about the swan feather',
      analysis:
        "The feather is the book's first symbol and its first statement of the problem. The immigration officials took the swan; what is left looks “worthless” and stands for intentions, and the woman waits year after year to explain it in perfect American English. The irony is that the waiting is the loss: by the time she can explain, her daughter has grown up out of reach. Every mother in the novel is holding a feather of this kind, a story that means nothing to a daughter until it is told.",
    },
    {
      text: 'died just like a rabbit: quickly and with unfinished business left behind',
      where:
        "Jing-mei Woo, The Joy Luck Club (the first story), reporting what the aunties said of her mother's death",
      analysis:
        "The simile is homely and almost comic, typical of the aunties' blunt way of talking, and it lets Tan announce a death without self-pity. But “unfinished business” carries the plot. The business is Suyuan's search for her twin daughters, and the rest of the novel is the story of how it passes to Jing-mei, who at first does not even know it exists.",
    },
    {
      text: 'That hope was our only joy.',
      where: "Suyuan Woo, remembered by Jing-mei in The Joy Luck Club, explaining the club's name",
      analysis:
        'In wartime Kweilin, with thousands of people pouring into the city every day, four young women feast and play every week, and Suyuan insists they chose their own happiness rather than wait for death. The short sentence defines the title: joy is not luck arriving but hope held on to. It also makes the club an act of will, which is why the aunties are so frightened later that to their daughters joy luck means nothing.',
    },
    {
      text: 'They see daughters who grow impatient when their mothers talk in Chinese',
      where:
        'Jing-mei Woo, near the end of The Joy Luck Club, realising why the aunties are frightened',
      analysis:
        "The repeated “They see” puts Jing-mei inside the aunties' eyes: in her they see their own daughters, impatient, embarrassed and deaf to what their mothers mean. The sentence states the fear that the whole book tests, that a mother's hope will die with her because her daughter cannot, or will not, hear it in her own language.",
    },
    {
      text: 'This is how a daughter honors her mother.',
      where: "An-mei Hsu, Scar, after her mother cuts flesh from her own arm for Popo's soup",
      analysis:
        'An-mei states this as a rule, in the present tense, not as a memory, and does not flinch at the act. It is shou, filial respect so deep it is in the bones. A modern reader may find it disturbing, and Tan wants that friction: she asks us to judge it by the values of its world, and to see the love An-mei inherits along with the pain.',
    },
    {
      text: "I would always remember my parents' wishes, but I would never forget myself.",
      where:
        'Lindo Jong, The Red Candle, on her wedding day, as she covers her face with the red marriage scarf',
      analysis:
        "The balanced sentence holds duty and self in a single breath, with “but” as the hinge. Lindo keeps her parents' promise outwardly while preserving an inner self no one can take, and that double strategy is how she escapes. It is also what she later hopes to give Waverly, and what Double Face suggests she could not.",
    },
    {
      text: 'A girl can never ask, only listen.',
      where: 'Amah to Ying-ying, The Moon Lady, on the day of the Moon Festival',
      analysis:
        'Amah explains that a wish spoken aloud becomes a selfish desire. The rule is meant to make Ying-ying a proper girl, and it works too well: as an old woman she says she kept her mouth closed so long that her daughter no longer hears her. The Moon Lady ends with the wish she has only just remembered, which is to be found.',
    },
    {
      text: 'I was six when my mother taught me the art of invisible strength.',
      where: 'Waverly Jong, the first sentence of Rules of the Game',
      analysis:
        "The paradox of “invisible strength” sums up Lindo: power through restraint, strategy and knowing when to be silent. Calling it an “art” makes it a skill to be taught and learned, and the adult narrator's phrase about neither of them knowing it would lead to chess hints that the daughter will turn the lesson on her teacher. By the end of the story the mother has become the opponent across the board.",
    },
    {
      text: 'My mother believed you could be anything you wanted to be in America.',
      where: 'Jing-mei Woo, the first sentence of Two Kinds',
      analysis:
        'The American Dream in a single sentence, told with the gentle irony of an adult looking back. “Believed” already hints that the belief will be tested, and the story that follows shows the dream turning into pressure on a nine-year-old. Later in the story Jing-mei turns it round: she did not believe she could be anything, only herself.',
    },
    {
      text: 'Those who are obedient and those who follow their own mind!',
      where: 'Suyuan Woo to Jing-mei, Two Kinds, in the argument after the talent show',
      analysis:
        "This is the story's title made into an ultimatum, a choice with no middle. Tan tells us Suyuan shouts it in Chinese, so for once she is fluent and forceful rather than broken. One irony is that Suyuan survived Kweilin by following her own mind; another is that the story's ending, where two pieces of music prove to be two halves of one song, undoes her neat division into two kinds.",
    },
    {
      text: 'I wish I were dead! Like them.',
      where: 'Jing-mei Woo to her mother, Two Kinds',
      analysis:
        'Perhaps the cruellest line in the novel. “Like them” is a two-word fragment aimed at the one subject the family never mentions, the babies lost in China, and Jing-mei knows exactly where the wound is. The effect on Suyuan, who backs out of the room like a blown leaf, shows that for a moment the child has all the power, and the guilt of it shapes the adult Jing-mei.',
    },
    {
      text: 'two halves of the same song',
      where: 'Jing-mei Woo, the last sentence of Two Kinds',
      analysis:
        "Years later, after Suyuan's death, Jing-mei plays the piece she once murdered, Pleading Child, and notices the one opposite it, Perfectly Contented. Realising they belong together reconciles the two kinds of daughter, the child and the adult, and perhaps the two cultures. A darker reading is that the insight comes only when her mother can no longer hear it.",
    },
    {
      text: 'In her hands, I always became the pawn.',
      where: 'Waverly Jong, Four Directions',
      analysis:
        'The chess metaphor of Rules of the Game returns inverted: the champion has become the weakest piece and her mother the queen. But the story ends with Waverly seeing her mother as an old woman armed only with a wok and a knitting needle. The most convincing reading is that Waverly has been fighting her own fear as much as her mother, and the board was partly of her own making.',
    },
    {
      text: "You can't just pull me out of your life and throw me away.",
      where: 'Rose Hsu Jordan to Ted, near the end of Without Wood',
      analysis:
        "Rose turns her mother's warning into her own words. An-mei had said that a girl who bends to every voice becomes a weed that someone pulls out and throws away; now Rose refuses to be that weed. The plain, mostly one-syllable words are the point: after years of saying Ted should decide, she decides.",
    },
    {
      text: "Your tears do not wash away your sorrows. They feed someone else's joy.",
      where: "The turtle, in the story An-mei's mother tells her, Magpies",
      analysis:
        "A parable inside a story: the turtle eats a child's tears and the magpies drink them, so grief is swallowed instead of spoken. The lesson is taught as wisdom, but Magpies exposes it as a trap for women, and An-mei wants Rose to unlearn it. The bitter echo of “joy” makes the club's name ironic: here joy is what other people take from you.",
    },
    {
      text: "penetrate my daughter's tough skin and cut her tiger spirit loose",
      where: 'Ying-ying St. Clair, the end of Waiting between the Trees',
      analysis:
        'The violent verbs make love sound like an attack, which is how Ying-ying, born in the year of the Tiger, understands it: two tigers must fight. She has decided to tell Lena her past, and the pain of it is her gift. One reading finds this frightening; a better one sees a mother who has been a ghost choosing, at last, to act.',
    },
    {
      text: 'Only her skin and her hair are Chinese.',
      where: 'Lindo Jong, the opening of Double Face, about Waverly',
      analysis:
        "Lindo reduces her daughter's Chinese identity to the surface, the part anyone can see, and in the next breath says the inside is American-made and that this is her own fault. It is a harsh judgement and a confession at once, and it sets up the story's question of whether identity is a face you wear or something deeper.",
    },
    {
      text: 'I wanted my children to have the best combination: American circumstances and Chinese character.',
      where: 'Lindo Jong, Double Face',
      analysis:
        "The mothers' shared dream in one sentence, with the colon setting out the recipe. “Circumstances” are the outside, the opportunities; “character” is the inside, the values. Lindo's next question admits that the two do not mix, and the story shows why: circumstances make character, so an American childhood made an American daughter. It is the key sentence for any question on identity or the American Dream.",
    },
    {
      text: 'If you show one, you must always sacrifice the other.',
      where: 'Lindo Jong, Double Face, thinking about her Chinese and American faces',
      analysis:
        'Lindo has worn a Chinese face and an American face since she learned to hide her true self to get into America. The absolute “always” makes identity a loss whichever way you turn. Yet the story ends with her asking what she lost and what she got back, which suggests the trade is still being counted, not settled.',
    },
    {
      text: 'I am becoming Chinese.',
      where: 'Jing-mei Woo, the opening of A Pair of Tickets, as the train crosses into China',
      analysis:
        'The present continuous tense makes identity a process, not an arrival, and Jing-mei feels it in her body before she understands it. It fulfils what her mother told her as a teenager, when she denied having anything Chinese in her. Placed at the start of the final story, it tells the reader that the journey will be inward as much as across a border.',
    },
    {
      text: 'It is so obvious. It is my family. It is in our blood.',
      where: 'Jing-mei Woo, the final scene of A Pair of Tickets, meeting her sisters',
      analysis:
        'Three short sentences built on the same opening, “It is”, give the discovery the force of something simple and final. The shift from “my family” to “our blood” moves Jing-mei from herself to her sisters. Chinese identity is located not in a face or a language but in kinship and a shared mother, which answers the question the aunties feared she could not.',
    },
  ],

  extracts: [
    {
      title: 'The quarrel at the piano',
      where: 'The Twenty-Six Malignant Gates, Two Kinds',
      pointer:
        "Two days after the disastrous talent show, from Suyuan calling Jing-mei to practise at four o'clock to the moment Suyuan backs out of the room in silence, a little before the end of the story.",
      summary:
        'Jing-mei assumes the humiliation of the talent show has ended her piano lessons, but her mother orders her to practise as usual. Jing-mei refuses; Suyuan pulls her up from the floor and onto the piano bench, and Jing-mei sobs that her mother wants her to be someone she is not. Suyuan shouts, in Chinese, that there are only two kinds of daughters and only the obedient kind can live in her house. Jing-mei, reaching for the one thing she knows will hurt, says she wishes she were dead like the babies her mother lost in China, and Suyuan falls silent and leaves.',
      annotations: [
        {
          phrase: "You want me to be someone that I'm not!",
          note: 'The central complaint of every daughter in the book, sobbed rather than argued. It turns a quarrel about practice into a quarrel about who Jing-mei is.',
        },
        {
          phrase: 'Those who are obedient and those who follow their own mind!',
          note: "Spoken in Chinese, so Suyuan is fluent and commanding. A choice between two kinds with no middle, which the story's ending will quietly undo.",
        },
        {
          phrase: 'I wish I were dead! Like them.',
          note: "The fragment “Like them” names the twins without naming them. Jing-mei uses her mother's deepest grief as a weapon, and wins the battle at a terrible price.",
        },
        {
          phrase: 'blowing away like a small brown leaf, thin, brittle, lifeless',
          note: 'The simile turns the formidable mother into something dry and weightless. The list of three adjectives slows the sentence, as if Jing-mei is only now seeing what she has done.',
        },
      ],
      question:
        'How does Tan present the conflict between Jing-mei and her mother in this part of Two Kinds, and how does it shape their relationship in the rest of the novel?',
    },
    {
      title: "Lindo's wedding night and the red candle",
      where: 'Feathers from a Thousand Li Away, The Red Candle',
      pointer:
        "From Lindo at the window on her wedding day, watching the rain over the river, to the matchmaker's announcement the next morning; the centre of the story.",
      summary:
        "Waiting to be married, Lindo sits by the window watching the wind and the rain, asks herself what is true about a person, then looks in the mirror and realises she has thoughts no one can take from her. She hides her face under the red marriage scarf and makes a private promise. At the ceremony the matchmaker lights a candle with a name at each end, which must burn all night to seal the marriage. That night a clap of thunder sends the servant set to watch it running off down the road in fright, and Lindo, without stopping to think, runs across the courtyard to the candle and blows out her husband's end. In the morning the matchmaker announces that the marriage is sealed; only Lindo knows who put the candle out.",
      annotations: [
        {
          phrase: 'I was strong. I was pure.',
          note: 'Short declarative sentences give Lindo a new certainty. Purity here means being wholly herself, not the obedient wife the Huangs have been training.',
        },
        {
          phrase: 'I was like the wind.',
          note: "The wind is invisible and cannot be held, like Lindo's inner self. The image connects to Waverly's invisible strength, passed down as a family inheritance.",
        },
        {
          phrase: "blew out my husband's end of the candle",
          note: 'The single act that makes escape possible, and it is her hope, not a plan, that does it: her throat is so full of hope that it bursts. Lindo does not fight the tradition openly; she breaks it where no one can see, the method she will teach her daughter.',
        },
        {
          phrase: 'I would never forget myself',
          note: 'The promise made under the scarf, kept inside obedience. It anticipates Two Kinds, where Jing-mei vows not to be changed, but Lindo keeps her promise secretly.',
        },
      ],
      question: 'How does Tan present Lindo as a woman who shapes her own fate in The Red Candle?',
    },
    {
      title: 'Meeting the sisters',
      where: 'Queen Mother of the Western Skies, A Pair of Tickets',
      pointer:
        'The last two pages of the novel: from the plane landing in Shanghai to the last line, as the Polaroid photograph develops.',
      summary:
        'Jing-mei and her father arrive in Shanghai, and she sees a woman who looks like her mother waiting beyond the gate, then a second. The three sisters run to each other, embrace and murmur Mama as though their mother were with them. One sister says proudly that Little Sister has grown up. Jing-mei sees no trace of her mother in their faces at first, and then sees what part of her is Chinese. Her father takes a Polaroid, and as it develops the three of them together look like the woman they have lost.',
      annotations: [
        {
          phrase: 'Mama, Mama',
          note: 'The daughters call to a dead woman as though she is present. The repetition makes Suyuan the invisible fourth figure in the embrace, still at the centre.',
        },
        {
          phrase: 'Little Sister has grown up.',
          note: "Jing-mei, the youngest, is welcomed by a name, not a nationality. The phrase recalls her own name, meaning younger sister, and so her place in her mother's plan.",
        },
        {
          phrase: 'It is in our blood',
          note: 'The resolution of the opening of the story, where her mother insisted the Chinese part was waiting inside her. It is claimed here not as a stereotype but as kinship.',
        },
        {
          phrase: 'open in surprise to see, at last, her long-cherished wish',
          note: "The final words play on the meaning of Suyuan's name. The novel ends on a mother's wish fulfilled, but seen only through her daughters, which keeps it bittersweet.",
        },
      ],
      question:
        'How does Tan use the ending of A Pair of Tickets to bring together the themes of the novel?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Seven first-person voices',
      example:
        'Every story is told as a monologue by one narrator. The mothers sometimes speak directly to a daughter who is not there to hear, as Lindo does in the opening lines of The Red Candle, telling her daughter that promises mean nothing to her; the daughters speak to us in fluent, ironic American English.',
      effect:
        "The reader hears each side in its own voice and is trusted to see what neither can. It creates dramatic irony, since we know the mothers' histories that the daughters do not, and it makes the reader the listener the mothers wanted.",
    },
    {
      technique: "The mothers' English",
      example:
        "Lindo at dinner, when Waverly comes home after the market quarrel and nobody will look at her: “We not concerning this girl. This girl not have concerning for us.” Ying-ying, when Lena says she knew the vase would fall: “Then why you don't stop it?”",
      effect:
        "The non-standard grammar is how the daughters hear their mothers, and it can make them sound comic or harsh. Tan balances it by giving the mothers' own stories in fluent, rich English, as if translated, so the reader learns that the broken speech hides a sharp mind.",
    },
    {
      technique: 'Extended metaphor of chess and war',
      example:
        "Lindo's lesson “Strongest wind cannot be seen” in Rules of the Game; Waverly in Four Directions: “In her hands, I always became the pawn.”",
      effect:
        "The metaphor frames the mother-daughter relationship as a contest of strategy and makes Lindo formidable. When Waverly finally sees her mother as a small old woman, the metaphor collapses, and the reader sees that the battle was partly in Waverly's mind.",
    },
    {
      technique: 'Simile drawn from home and nature',
      example:
        "An-mei on her aunt: “a tongue like hungry scissors eating silk cloth”. Ying-ying on Lena's birth: “she sprang from me like a slippery fish”.",
      effect:
        "The comparisons come from the kitchen, the sewing basket and the market, the mothers' world, which gives their voices a concrete, earthy wit. Ying-ying's fish captures a daughter who has been swimming away since birth.",
    },
    {
      technique: 'Symbolic objects',
      example:
        "The swan feather in the first parable; the red candle in The Red Candle; the Bible wedged under the table leg in Half and Half; the jade pendant Suyuan calls Jing-mei's “life's importance” in Best Quality.",
      effect:
        "Each object holds a meaning the characters cannot put into words, often across languages. The pendant is the clearest case: a mother's love given in a form the daughter cannot read, which is the novel's whole problem in a single object.",
    },
    {
      technique: 'Parable and fable',
      example:
        "Each section opens with a short tale in the third person. The last shows a grandmother who hails her laughing baby granddaughter as the Queen Mother of the Western Skies and asks her to teach the grandmother's own daughter “How to lose your innocence but not your hope.”",
      effect:
        "The parables lift the particular stories into something like folk wisdom and tell the reader what each section is about. The shift to an impersonal, timeless voice also shows the mothers' cultural inheritance, the stories they wish they could pass on.",
    },
    {
      technique: 'Untranslated Chinese words',
      example:
        'shou (filial respect) in Scar, nengkan (the ability to do anything) in Half and Half, lihai (wild and stubborn) in Waiting between the Trees, and Meimei, Little Sister.',
      effect:
        'Tan keeps words that have no exact English match and glosses them in the narration, so the reader experiences the translation gap the characters live with, and sees that some ideas cannot be carried across without loss.',
    },
    {
      technique: 'Repetition and short sentences at moments of recognition',
      example: 'The final scene: “It is so obvious. It is my family. It is in our blood.”',
      effect:
        "The repeated “It is” and the falling rhythm of short sentences give Jing-mei's discovery the weight of certainty, after a novel full of doubt about what she could possibly know about her mother.",
    },
  ],

  structureForm: [
    {
      heading: 'A novel made of stories',
      body: "The Joy Luck Club sits between a short-story collection and a novel. Several stories were published separately in magazines, and the NEA guide says Tan thought she was writing a collection. But the stories share a cast, cross-refer and build to a single ending, so most readers, and Pearson, treat it as a novel. This is worth using in an essay: each story has its own shape, tension and resolution, as Pearson's guide notes, but meanings only complete themselves across stories. You understand Two Kinds differently once you have heard, in the first story, about the twins.",
    },
    {
      heading: 'Four sections, a mirror pattern',
      body: "The four sections follow a pattern: the mothers' childhoods in China, the daughters' American childhoods, the daughters' adult troubles, and the mothers again, deciding what to tell. Mothers enclose daughters: the first and last sections belong to the older generation, so the daughters' stories are framed, literally, by what their mothers have lived through, although Jing-mei, speaking for Suyuan, opens the first of those sections and closes the last. Pearson describes four time frames, from the 1920s and 1930s to the 1980s. Each section title and parable points to its theme: Feathers from a Thousand Li Away, The Twenty-Six Malignant Gates, American Translation, Queen Mother of the Western Skies.",
    },
    {
      heading: 'Seven narrators, one frame',
      body: "Jing-mei is the only narrator who appears in every section, and she opens and closes the book, so her story is the frame that holds the others together; Pearson's guide calls hers the story that binds the book into a whole. She is also the only daughter who narrates in the mothers' sections, because she speaks for Suyuan. The absence at the centre looks deliberate: the one mother who never tells her own story is the one whose story drives the plot, and it is finally told in full, by her husband, to her daughter, in the novel's last story.",
    },
    {
      heading: 'One event, two points of view',
      body: "Tan sometimes shows the same moment from both sides. Rice Husband and Waiting between the Trees describe the same evening at Lena's house: Lena sees a wobbling table; Ying-ying sees a house full of signs of an unhappy marriage, and the falling vase ends both stories. Four Directions and Double Face both circle Waverly's wedding. These pairings make the reader the only person who hears both halves of the conversation, which is the novel's structural answer to the failure of communication it describes.",
    },
    {
      heading: 'Flashback and the present tense',
      body: "Most stories move between a present situation and a remembered past, so the past is always pressing on the present. The mothers' China stories are told in the past tense; the two stories that frame the book, The Joy Luck Club and A Pair of Tickets, are told largely in the present tense, which makes Jing-mei's journey feel immediate and unfinished as it happens. The effect is that memory and experience seem to happen at once, as they do for someone discovering where she comes from.",
    },
    {
      heading: 'A circular ending',
      body: "The novel ends where the first parable began. The old woman crossed an ocean hoping to give her daughter a feather and its meaning; Jing-mei crosses the ocean the other way and brings her mother's meaning to her sisters. The last words, about a long-cherished wish, echo both Suyuan's name and the woman's wish in the first parable. Pearson calls the ending a happy one, and it is, but it is worth noticing that the mother at its centre is absent, which is why many readers find it bittersweet.",
    },
  ],

  vocabulary: [
    {
      term: 'mah jong',
      definition:
        "A Chinese game for four players using tiles, played at a square table where each player takes a seat named after a wind or direction. Jing-mei takes her mother's seat on the East.",
    },
    {
      term: 'li',
      definition:
        'A traditional Chinese measure of distance. A thousand li away means from very far away, which is where the swan feather in the first parable comes from.',
    },
    {
      term: 'Kweilin and Chungking',
      definition:
        'The older English spellings of Guilin, the city Suyuan flees in 1944, and Chongqing, the city she walks towards. The novel uses the spellings of its time.',
    },
    {
      term: 'Kuomintang',
      definition:
        "The Chinese Nationalist Party, led by Chiang Kai-shek, which fought both the Japanese and the Communists. Suyuan's first husband is a Kuomintang officer.",
    },
    {
      term: 'concubine',
      definition:
        "A woman living with a man as a lower-ranking wife. An-mei's mother becomes Wu Tsing's concubine, which costs her the respect of her family.",
    },
    {
      term: 'Taitai',
      definition:
        'A respectful Chinese title for a married woman, like Mrs or Madam, as in Huang Taitai.',
    },
    {
      term: 'shou',
      definition:
        'Respect for parents and ancestors, which An-mei describes as going so deep it is in the bones. In English this is often called filial piety.',
    },
    {
      term: 'nengkan',
      definition:
        'The ability to do anything you put your mind to. Rose says it brought her parents to America and gave An-mei the confidence to believe she could find Bing.',
    },
    {
      term: 'lihai',
      definition: "Ying-ying's word for herself as a girl: wild and stubborn.",
    },
    {
      term: 'chi',
      definition:
        'Spirit or life energy. Ying-ying says she gave up her chi and became a ghost, and that Lena, as the daughter of a ghost, has none.',
    },
    {
      term: 'Meimei',
      definition:
        "Little Sister: Waverly's childhood name at home. Jing-mei's sisters use a form of it when they greet her in Shanghai.",
    },
    {
      term: 'The Twenty-Six Malignant Gates',
      definition:
        "In the novel, a little Chinese book describing the dangers that await children according to their birthdate. Rose's mother uses it, and it gives the second section its title.",
    },
    {
      term: 'parable',
      definition: 'A short story that teaches a lesson. Each of the four sections opens with one.',
    },
    {
      term: 'frame narrative',
      definition:
        "A story that contains other stories. The club meeting and Jing-mei's journey frame the other narrators' tales.",
    },
    {
      term: 'polyphonic narrative',
      definition:
        'A novel told in many voices, none of which has the final authority. Tan uses seven narrators.',
    },
    {
      term: 'second generation',
      definition:
        'The children of immigrants, born in the new country. The four daughters are second-generation Chinese Americans.',
    },
    {
      term: 'filial piety',
      definition:
        "The duty of children to respect, obey and care for their parents, central to the mothers' upbringing in China.",
    },
    {
      term: 'yin and yang',
      definition:
        'In Chinese thought, the two opposing but complementary forces that make a whole. Rose uses the idea to describe how she and Ted once fitted together, with her as victim and him as hero.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Explore the ways in which Tan presents the relationships between mothers and daughters in The Joy Luck Club. You must consider the context of the novel in your answer.',
        skill: 'Whole-text essay: character, theme and context',
        guidance: [
          "Open with an argument, not a summary: for example, that Tan presents these relationships as full of love that is blocked by what goes unsaid, and that the novel's structure is designed to unblock it.",
          'Choose two or three pairs rather than all four. Jing-mei and Suyuan give you the fullest arc; Waverly and Lindo, or Lena and Ying-ying, give you contrast.',
          "For each pair, pair a daughter's story with a mother's: Two Kinds with the Kweilin story, Rules of the Game or Four Directions with The Red Candle or Double Face, Rice Husband with Waiting between the Trees.",
          'Tie context to the text: what the mothers lost in China (war, arranged marriage, concubinage) explains the pressure they put on their daughters in America.',
          "Analyse language in short quotations: the mothers' English, the chess metaphors, the two kinds of daughters.",
          'Discuss structure: how the order of the stories, and the pairing of voices, lets the reader understand both sides.',
          'End by judging how far the relationships are resolved. Consider that most reconciliations come late, or after a mother has died.',
        ],
      },
      {
        question:
          '‘The daughters in The Joy Luck Club never truly understand their mothers.’ How far do you agree with this view? You must consider the context of the novel in your answer.',
        skill: 'Argument essay: weighing a view against the whole text',
        guidance: [
          'Take a clear position early: for example, that the view is largely true of the daughters as children and much less true by the end.',
          'Agree first: Jing-mei says she knows nothing about her mother, Lena mistranslates, Waverly sees her mother only as an opponent.',
          'Then challenge: Jing-mei understands through the piano pieces and the journey; Waverly finally sees her mother as vulnerable; Rose at last acts as An-mei hoped she would.',
          "Use context to explain the misunderstanding: language, the mothers' unspoken trauma, the pressure to assimilate.",
          'Point out that the reader understands the mothers better than any daughter does, because of the structure.',
          'Conclude with a nuanced judgement about which daughter comes closest to understanding and why.',
        ],
      },
      {
        question:
          'Discuss the importance of storytelling in The Joy Luck Club. You must consider the context of the novel in your answer.',
        skill: 'Whole-text essay: theme and structure',
        guidance: [
          'Define what storytelling does in the novel: it preserves the past, protects, teaches and controls.',
          'Use the club itself: founded in wartime to feast and tell good stories, a way of choosing hope.',
          "Explore Suyuan's Kweilin story, told with a different ending each time, and the parables that open each section.",
          "Show stories as power: Lindo's invented dream frees her; Ying-ying decides to tell Lena her past.",
          'Link to context: stories as the inheritance immigrant mothers can carry when they have lost everything else.',
          'Discuss the structure: the reader hears the stories the daughters do not, until the final story is told to Jing-mei.',
        ],
      },
      {
        question:
          'How does Tan present the experience of living between two cultures in The Joy Luck Club? You must consider the context of the novel in your answer.',
        skill: 'Whole-text essay: identity and context',
        guidance: [
          "Begin with Lindo's dream of American circumstances and Chinese character, and her admission that the two do not mix.",
          "Explore the daughters' embarrassment and the mothers' fears, through Rules of the Game, Two Kinds and Four Directions.",
          'Use Double Face to discuss identity as a set of faces, and what is sacrificed by showing one.',
          'Bring in the prejudice the daughters meet in America, such as Mrs Jordan warning Rose off her son, which ends with Rose having to tell her she is not Vietnamese.',
          'End with A Pair of Tickets: is the answer blood, family or knowledge of the past?',
        ],
      },
    ],
    tips: [
      'The paper is closed book, so learn short quotations and precise references to story titles and sections. A three-word quotation you can analyse is worth more than a long one you misremember.',
      'Name the story you are writing about each time. Examiners know the novel by its story titles, and it shows control of a complex structure.',
      'Remember that Suyuan never narrates. Jing-mei speaks for her, and the final version of her story comes from Canning. Getting the seven narrators right avoids an easy mistake.',
      'Context must come from the text: link the war, arranged marriage or immigration directly to a moment and a character, not a general paragraph about Chinese history.',
      "Pair mothers' and daughters' stories in the same paragraph. The strongest answers show how one explains the other.",
      'Friendship was the subject of one of the two questions on this novel in the May 2024 paper; revise the aunties as a group, not only as mothers.',
      'Offer an alternative reading before you conclude. Is Suyuan a tyrant or a grieving mother? Is the ending triumphant or bittersweet? Argue, and show you have weighed the other view.',
    ],
  },

  modelAnswer: {
    question:
      'How does Tan present the relationship between Jing-mei and her mother? You must consider the context of the novel in your answer.',
    paragraph:
      "Tan presents Jing-mei and Suyuan as locked in a struggle in which each wounds the other with the thing she knows best. In Two Kinds Suyuan's ultimatum, shouted in Chinese, allows no middle ground: daughters are either “obedient” or they “follow their own mind”. The fact that she speaks in Chinese matters, because here Suyuan is not the comic figure her broken English makes her elsewhere; she is a woman who survived a war by force of will and expects the same of her child. Jing-mei's reply, “I wish I were dead! Like them.”, is devastating because it is so short. The fragment “Like them” reaches for the twin daughters Suyuan left on the road from Kweilin in 1944, the one subject the family never discusses, and the simile for Suyuan's reaction, “blowing away like a small brown leaf”, shows power passing, for a moment, from mother to child. A reader might see Suyuan as a tyrant driven by pride. But Tan has already told us, in the first story, what Suyuan lost in China, so her pressure reads instead as the hope of a mother who lost two daughters and has staked everything on the third. That is why the story ends not with the quarrel but with Jing-mei, after her mother's death, discovering that the piece she once played and the one printed beside it were “two halves of the same song”.",
    commentary: [
      'It opens with an argument about the relationship, not a description of the plot, and every sentence after it serves that argument.',
      'Quotations are short and embedded, and each is analysed for a precise effect: the binary choice, the fragment, the simile.',
      'Context is tied to a specific moment, the twins left on the road in 1944, rather than given as a general history lesson.',
      'It weighs an alternative reading of Suyuan and says why the other is more convincing, using the structure of the novel as evidence.',
      "It ends by linking the quarrel to the story's last line, showing knowledge of the whole story and its shape.",
    ],
  },

  timeline: [
    {
      where: 'Feathers from a Thousand Li Away, The Joy Luck Club',
      title: "Jing-mei takes her mother's seat",
      summary:
        "Two months after Suyuan's death, Jing-mei goes to the Joy Luck Club in her place. The aunties tell her that her mother's lost twin daughters are alive and ask her to go to China and tell them about their mother, and they are frightened when she says she does not know what to tell.",
      setting: "The Hsus' house in San Francisco, at the mah jong table",
      who: ['Jing-mei Woo', 'Canning Woo', 'An-mei Hsu', 'Lindo Jong', 'Ying-ying St. Clair'],
      quote: 'That hope was our only joy.',
      themes: ['Storytelling and memory', 'Friendship and rivalry', 'Mothers and daughters'],
      tension: 3,
      significance:
        "Sets up the whole book: a mother's unfinished story that a daughter must learn to tell.",
    },
    {
      where: 'Feathers from a Thousand Li Away, Scar',
      title: "An-mei's mother comes home",
      summary:
        "An-mei remembers the day, when she was four, that her disgraced mother came to take her away and boiling soup spilled on her neck; and the day, years later, when her mother returned to nurse the dying Popo and cut flesh from her own arm to cook into Popo's soup.",
      setting: "Popo's house in China, in the 1910s and 1923",
      who: ['An-mei Hsu', "An-mei's mother", 'Popo'],
      quote: 'This is how a daughter honors her mother.',
      themes: ['Mothers and daughters', 'Storytelling and memory'],
      tension: 4,
      significance:
        'Introduces the inheritance of pain and duty, the shou, that binds daughters to mothers.',
    },
    {
      where: 'Feathers from a Thousand Li Away, The Red Candle',
      title: "Lindo's wedding and escape",
      summary:
        "Promised in marriage at two, Lindo is married at sixteen to Tyan-yu. On her wedding night she blows out her husband's end of the marriage candle, and months later she frees herself by convincing Huang Taitai that the ancestors have warned against the match.",
      setting: "The Huang family's house near Taiyuan, northern China",
      who: ['Lindo Jong', 'Tyan-yu', 'Huang Taitai'],
      quote: "I would always remember my parents' wishes, but I would never forget myself.",
      themes: ['Fate, faith and choice', 'Mothers and daughters'],
      tension: 4,
      significance:
        'The first mother to change her fate: obedient on the outside, with a self kept safe within.',
    },
    {
      where: 'Feathers from a Thousand Li Away, The Moon Lady',
      title: 'Ying-ying falls into Tai Lake',
      summary:
        "At the Moon Festival of 1918, four-year-old Ying-ying falls from her family's boat, is fished out by strangers and left on a dock. She watches a play about the Moon Lady and runs to tell her secret wish, only to see the Moon Lady turn into a man.",
      setting: 'Tai Lake, near Wushi, on the night of the Moon Festival',
      who: ['Ying-ying St. Clair', 'Amah'],
      quote: 'I wished to be found.',
      themes: ['Language, silence and translation', 'Fate, faith and choice'],
      tension: 4,
      significance:
        'Ying-ying loses herself as a child; the story ends with a wish she has only just remembered.',
    },
    {
      where: 'The Twenty-Six Malignant Gates, Rules of the Game',
      title: 'Waverly becomes a chess champion',
      summary:
        "Waverly learns chess from her brothers and an old man in the park, and her mother's lessons in invisible strength, and is a national champion by nine. When she tells her mother to stop showing her off in the market, she runs away, and comes home to find her mother has decided to ignore her.",
      setting: "Waverly Place and the streets of San Francisco's Chinatown",
      who: ['Waverly Jong', 'Lindo Jong'],
      quote: 'Strongest wind cannot be seen.',
      themes: ['Mothers and daughters', 'Hope and the American Dream'],
      tension: 4,
      significance:
        "The first battle of wills between a daughter and her mother, fought with the mother's own weapons.",
    },
    {
      where: 'The Twenty-Six Malignant Gates, The Voice from the Wall',
      title: 'Lena hears the family next door',
      summary:
        "Lena watches her mother fall apart after a baby dies, and lies to her father when she translates her mother's words. Through the wall she hears the girl next door, Teresa, fighting with her mother, and imagines the worst, until she sees that their noise is a kind of love her own silent family lacks.",
      setting: "The St. Clairs' apartment",
      who: ['Lena St. Clair', 'Ying-ying St. Clair', 'Saint'],
      quote: 'the part of me I got from my mother',
      themes: ['Language, silence and translation', 'Mothers and daughters'],
      tension: 3,
      significance:
        'A daughter translating, and mistranslating, between parents who cannot speak to each other.',
    },
    {
      where: 'The Twenty-Six Malignant Gates, Half and Half',
      title: 'Bing is lost to the sea',
      summary:
        "Rose, about to tell her mother that her marriage is ending, remembers the beach trip when she was fourteen and her four-year-old brother Bing was lost while she was meant to watch him. Her mother's faith that she could get him back lasted until it failed.",
      setting: "A rocky cove by the sea, and Rose's present-day marriage",
      who: ['Rose Hsu Jordan', 'An-mei Hsu', 'Bing Hsu', 'Ted Jordan'],
      quote: 'fate is shaped half by expectation, half by inattention',
      themes: ['Fate, faith and choice', 'Mothers and daughters'],
      tension: 5,
      significance:
        'Loss teaches Rose that she cannot control fate, and leaves her unable to choose anything.',
    },
    {
      where: 'The Twenty-Six Malignant Gates, Two Kinds',
      title: 'The recital and the quarrel',
      summary:
        'Suyuan tries to make Jing-mei a prodigy and arranges piano lessons with Old Chong, who is deaf. Jing-mei, who has not practised properly, plays disastrously at a talent show, then refuses to practise any more and tells her mother she wishes she were dead like the babies lost in China. Years later she plays the piece again.',
      setting: "The Woos' flat and the church hall, San Francisco",
      who: ['Jing-mei Woo', 'Suyuan Woo', 'Old Chong'],
      quote: 'I wish I were dead! Like them.',
      themes: ['Mothers and daughters', 'Hope and the American Dream'],
      tension: 5,
      significance:
        "The novel's most famous confrontation, whose meaning changes once the twins' story is known.",
    },
    {
      where: 'American Translation, Rice Husband',
      title: 'The table gives way',
      summary:
        "Ying-ying visits Lena and Harold's new house, where everything is shared on a list. Lena remembers her childhood terror that leaving rice in her bowl would mean marrying a cruel, pockmarked boy. When a vase falls from the flimsy table Harold made, Lena says she knew it would happen.",
      setting: "Lena and Harold's house in Woodside, California",
      who: ['Lena St. Clair', 'Harold Livotny', 'Ying-ying St. Clair'],
      quote: "Then why you don't stop it?",
      themes: ['Fate, faith and choice', 'Language, silence and translation'],
      tension: 3,
      significance:
        'A daughter who, like her mother, sees disaster coming and does nothing to prevent it.',
    },
    {
      where: 'American Translation, Four Directions',
      title: 'Waverly tells her mother she will marry Rich',
      summary:
        'Waverly is terrified that her mother will destroy her engagement to Rich Schields. She finds her mother asleep and for a moment thinks she is dead, and later sees her not as a chess queen but as an old woman armed only with a wok and a knitting needle.',
      setting: "The Jongs' flat in San Francisco",
      who: ['Waverly Jong', 'Lindo Jong', 'Rich Schields'],
      quote: 'In her hands, I always became the pawn.',
      themes: ['Mothers and daughters', 'Chinese and American identity'],
      tension: 4,
      significance:
        'The chess metaphor turns inward: the opponent Waverly feared was partly of her own making.',
    },
    {
      where: 'American Translation, Without Wood',
      title: 'Rose refuses to be thrown away',
      summary:
        "As Ted presses for a quick divorce, Rose sees a psychiatrist, lets the garden go to weeds and listens to everyone's advice. She remembers her mother's warning that a girl who bends to every voice grows crooked and weak. When Ted wants the house, she tells him she is staying.",
      setting: "Rose's house and overgrown garden in San Francisco",
      who: ['Rose Hsu Jordan', 'Ted Jordan', 'An-mei Hsu'],
      quote: "You can't just pull me out of your life and throw me away.",
      themes: ['Language, silence and translation', 'Mothers and daughters'],
      tension: 4,
      significance:
        "The first daughter to find her own voice, answering her mother's image of the weed pulled up and thrown away.",
    },
    {
      where: 'American Translation, Best Quality',
      title: 'The crab dinner and the jade pendant',
      summary:
        "At a Chinese New Year crab dinner, Waverly outsmarts Jing-mei once again and Suyuan seems to side with Waverly, leaving Jing-mei humiliated. Afterwards Suyuan gives her a jade pendant on a gold chain. Three months after her mother's death, Jing-mei is still trying to understand it.",
      setting: "The Woos' flat on Leavenworth Street, San Francisco",
      who: ['Jing-mei Woo', 'Suyuan Woo', 'Waverly Jong'],
      quote: "life's importance",
      themes: ['Mothers and daughters', 'Friendship and rivalry'],
      tension: 3,
      significance:
        "A mother's approval arrives in an object and a phrase the daughter cannot translate.",
    },
    {
      where: 'Queen Mother of the Western Skies, Magpies',
      title: "An-mei learns her mother's story",
      summary:
        "Worried that Rose will not fight for her marriage, An-mei tells how she followed her mother to Wu Tsing's house in Tientsin, where Second Wife ruled by trickery. She learns her mother was trapped into becoming a concubine and her baby brother taken as Second Wife's son. Two days before the lunar new year, her mother takes her own life with opium.",
      setting: "Wu Tsing's house in Tientsin, in the 1920s",
      who: ['An-mei Hsu', "An-mei's mother", 'Wu Tsing', 'Second Wife'],
      quote: "Your tears do not wash away your sorrows. They feed someone else's joy.",
      themes: ['Language, silence and translation', 'Mothers and daughters'],
      tension: 5,
      significance:
        "The darkest story in the book, and the root of An-mei's refusal to let Rose swallow her tears.",
    },
    {
      where: 'Queen Mother of the Western Skies, Waiting between the Trees',
      title: 'Ying-ying decides to speak',
      summary:
        "Staying in the tiny guest room of Lena's house, Ying-ying sees the signs of an unhappy marriage and tells what she has never told her daughter: her wild girlhood, her first husband's cruelty and desertion, and how she gave up her spirit. She resolves to tell Lena everything, and the story ends as she waits in the dark for the vase and table in her room to crash to the floor and bring her daughter up the stairs.",
      setting: "The guest room of Lena's house in Woodside",
      who: ['Ying-ying St. Clair', 'Lena St. Clair'],
      quote: 'cut her tiger spirit loose',
      themes: ['Storytelling and memory', 'Mothers and daughters'],
      tension: 4,
      significance:
        "Tells the evening of Rice Husband from the mother's side, and turns silence into a decision to speak.",
    },
    {
      where: 'Queen Mother of the Western Skies, Double Face',
      title: 'Lindo at the beauty parlour',
      summary:
        "Before Waverly's wedding, Lindo has her hair done by Waverly's hairdresser, Mr Rory, and sees their two faces side by side in the mirror. She remembers coming to America, learning to hide her true self, meeting An-mei in a fortune cookie factory and, through her, Tin Jong.",
      setting: 'A beauty parlour in San Francisco',
      who: ['Lindo Jong', 'Waverly Jong', 'An-mei Hsu'],
      quote: 'If you show one, you must always sacrifice the other.',
      themes: ['Chinese and American identity', 'Hope and the American Dream'],
      tension: 2,
      significance:
        "Lindo names the mothers' dream and its failure, and the argument about identity comes into focus.",
    },
    {
      where: 'Queen Mother of the Western Skies, A Pair of Tickets',
      title: 'Jing-mei meets her sisters',
      summary:
        'Jing-mei crosses into China with her father and, in Guangzhou, hears at last how Suyuan left the twins by the road with money and jewellery, and how a Muslim couple found and raised them. In Shanghai she meets Chwun Yu and Chwun Hwa, and in a photograph the three sisters together look like their mother.',
      setting: 'Guangzhou, and the airport at Shanghai',
      who: ['Jing-mei Woo', 'Canning Woo', 'Chwun Yu and Chwun Hwa'],
      quote: 'It is so obvious. It is my family. It is in our blood.',
      themes: ['Chinese and American identity', 'Storytelling and memory', 'Mothers and daughters'],
      tension: 5,
      significance:
        "Suyuan's long-cherished wish is fulfilled through the daughter who doubted she could tell her story.",
    },
  ],

  relationships: [
    {
      from: 'Suyuan Woo',
      to: 'Jing-mei Woo',
      kind: 'mother and daughter',
      note: "A battle over who Jing-mei should be, resolved only after Suyuan's death, through a piano, a pendant and a journey.",
    },
    {
      from: 'Lindo Jong',
      to: 'Waverly Jong',
      kind: 'mother and daughter',
      note: 'Two strategists: the daughter learns invisible strength from her mother and turns it on her, until she sees her mother as old and frightened.',
    },
    {
      from: 'An-mei Hsu',
      to: 'Rose Hsu Jordan',
      kind: 'mother and daughter',
      note: 'An-mei wants Rose to speak for herself, as her own mother never could; Rose finally does in Without Wood.',
    },
    {
      from: 'Ying-ying St. Clair',
      to: 'Lena St. Clair',
      kind: 'mother and daughter',
      note: 'Both see trouble coming and stay silent. Ying-ying ends by deciding to tell Lena everything.',
    },
    {
      from: 'Suyuan Woo',
      to: 'Chwun Yu and Chwun Hwa',
      kind: 'mother and lost daughters',
      note: 'Left by the road in 1944 and searched for all her life; found too late for her, but not for Jing-mei.',
    },
    {
      from: 'Canning Woo',
      to: 'Suyuan Woo',
      kind: 'husband and wife',
      note: 'He met her in Chungking and tells her story at last, which makes him the keeper of her memory.',
    },
    {
      from: 'Jing-mei Woo',
      to: 'Waverly Jong',
      kind: 'rivals since childhood',
      note: 'Compared by their mothers from babyhood; Waverly outshines Jing-mei at every stage, from chess to the crab dinner.',
    },
    {
      from: 'Suyuan Woo',
      to: 'Lindo Jong',
      kind: 'friends and rivals',
      note: 'Friends in the club since Suyuan started it in San Francisco, who compete through their daughters: a friendship expressed through boasting.',
    },
    {
      from: 'An-mei Hsu',
      to: 'Lindo Jong',
      kind: 'old friends',
      note: 'They met at a fortune cookie factory, and An-mei introduced Lindo to her husband, Tin Jong.',
    },
    {
      from: 'An-mei Hsu',
      to: "An-mei's mother",
      kind: 'daughter and mother',
      note: 'Separated as a child and reunited, An-mei learns from her mother both devotion and the cost of silence.',
    },
    {
      from: "An-mei's mother",
      to: 'Second Wife',
      kind: 'concubines of the same man',
      note: 'Second Wife traps her, takes her son and rules the household; her death is the only power left to her.',
    },
    {
      from: 'Lindo Jong',
      to: 'Tyan-yu',
      kind: 'arranged marriage',
      note: 'A marriage with no love on either side, which Lindo ends by a trick that lets them both go.',
    },
    {
      from: 'Lindo Jong',
      to: 'Huang Taitai',
      kind: 'daughter-in-law and mother-in-law',
      note: 'Huang Taitai trains Lindo to serve; Lindo defeats her by playing on her fear of the ancestors.',
    },
    {
      from: 'Rose Hsu Jordan',
      to: 'Ted Jordan',
      kind: 'husband and wife',
      note: 'He decides everything until he wants a divorce, and Rose finally stands up to him.',
    },
    {
      from: 'Lena St. Clair',
      to: 'Harold Livotny',
      kind: 'husband and wife, and colleagues',
      note: 'Everything split equally and nothing truly shared; Ying-ying sees the imbalance at once.',
    },
    {
      from: 'Waverly Jong',
      to: 'Rich Schields',
      kind: 'engaged',
      note: 'Waverly fears her mother will poison this marriage as she believes she poisoned the first.',
    },
    {
      from: 'Rose Hsu Jordan',
      to: 'Bing Hsu',
      kind: 'sister and brother',
      note: 'Rose was meant to be watching Bing when he was lost, and the guilt shapes her life.',
    },
    {
      from: 'Ying-ying St. Clair',
      to: 'Saint',
      kind: 'wife and husband',
      note: 'He loves her but never knows her past; she married him when she had given up her spirit.',
    },
  ],

  compareWith: [
    {
      title: 'Things Fall Apart',
      href: '/revision/texts/things-fall-apart',
      reason:
        'On the same International GCSE modern prose list: another novel about a culture under pressure from outside, and about a parent and child who can no longer understand each other.',
    },
    {
      title: 'Search For My Tongue',
      href: '/revision/texts/search-for-my-tongue',
      reason:
        "A Part 3 poem from the Pearson anthology studied for the same Literature paper, about the fear of losing a mother tongue while living in a second language, the anxiety behind the aunties' fear for their daughters.",
    },
    {
      title: 'Chinese Cinderella',
      href: '/revision/texts/chinese-cinderella',
      reason:
        "From Part 1 of the Pearson Edexcel International GCSE English Anthology, the part set for English Language A: a memoir of a Chinese girlhood and a daughter's longing for a parent's approval, useful context for Jing-mei and Waverly.",
    },
  ],

  contentGuidance: [
    'mortality',
    'mental_health',
    'violence',
    'discrimination',
    'intimate_relationships',
    'mythological_religious',
    'supernatural',
    'addiction',
  ],

  quotesFromElsewhere: [],

  sources: [
    {
      label:
        "The Joy Luck Club, Penguin Books edition with a preface by Amy Tan (2019), searched inside through Google Books: every quotation in this guide that the index covers was checked against the printed sentence and page there (the few it skips are named in the file's header and were confirmed elsewhere), as were the plot facts (contents, names, ages, dates, places) and the preface's account of the novel's sources",
      url: 'https://books.google.com/books?id=Dzk9c9nWYeYC',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature (4ET1) Getting Started Guide, Issue 2, November 2024: context, themes (attitudes to America, friendship, identity, hope), structure (four sections, seven narrators, four time frames) and plot summary',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/international-gcse-english-literature-getting-started-guide.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature specification, Issue 3, August 2025: closed book, one essay question from a choice of two, recommended Vintage edition of 1991',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson 4ET1 Paper 1 question paper, May 2024: the style of the modern prose questions on this novel, including the question on friendship',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20240514.pdf',
    },
    {
      label:
        "NEA Big Read Reader's Guide to The Joy Luck Club: Tan's life (birth, parents, family deaths, Switzerland, linguistics, 1987 trip to China), historical context (the war, Exclusion Act, 1965, 1979), the grandmother's story, the 1993 film",
      url: 'https://www.arts.gov/sites/default/files/Reader-Resources-JoyLuckClub.pdf',
    },
    {
      label:
        'NEA Big Read Teacher\'s Guide (2014): corroborates "I am becoming Chinese" and the titles "Perfectly Contented" and "Pleading Child". Its attribution of "How could I know these two things do not mix?" to Ying-ying is wrong; the line is Lindo\'s',
      url: 'https://www.arts.gov/sites/default/files/Tan_TG2014.pdf',
    },
    {
      label:
        'Encyclopedia.com (Gale), entry on Two Kinds: the story\'s closing line and its first publication in The Atlantic, February 1989. Its study question\'s "Contented Child" is wrong; its own essay says "Perfectly Contented"',
      url: 'https://www.encyclopedia.com/education/news-wires-white-papers-and-books/two-kinds',
    },
    {
      label:
        "Internet Archive catalogue record of the first edition: New York, G. P. Putnam's Sons, 1989",
      url: 'https://archive.org/details/joyluckclub00tanarich',
    },
    {
      label:
        "Also used to corroborate wording only, not linked because their rights status is unclear: a school's teaching copy of Two Kinds (its final paragraph) and an online copy of the opening of A Pair of Tickets",
    },
    {
      label:
        'Internet Archive full-text search of printed anthologies that reprint single stories (among them The Longman Anthology of Short Fiction, 2001; Short Fiction: Classic and Contemporary, 1994 to 2002; Glencoe Literature, 2002; Making Literature Matter, 2015): corroborates the opening of A Pair of Tickets, including Suyuan telling the fifteen-year-old Jing-mei that it is in her blood, and the closing lines of Two Kinds. Used in the fact-check pass of September 2026',
      url: 'https://archive.org/details/longmananthology0000unse_w8h5',
    },
  ],
}
