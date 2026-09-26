import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Whale Rider, Witi Ihimaera (1987). A complete guide: before this file the
 * text had only the IGCSE course page at /courses/igcse-lit-prose-whale-rider,
 * and nothing here is taken from it. That page is largely the 2002 film, not the
 * novel: a twin brother who dies at birth, Koro as grandfather, taiaha lessons,
 * a whale-tooth pendant, and quotations that no source for the novel prints
 * (src/data/edexcel-igcse-lit-prose-courses.ts). In the novel Koro is Kahu's
 * great-grandfather and throws a carved stone.
 *
 * HOW THE QUOTATIONS WERE CHECKED. The novel is in copyright and no licensed copy
 * is held in this repository. Every Prologue quotation was checked word for word
 * against the publisher's own sample of the Puffin edition (2024), which prints
 * the front matter and the whole of Chapter One. No full copy of the later
 * chapters could be read. A quotation from them is used only where a published
 * source prints it as a passage of the text with its chapter or page, and all but
 * three are printed alike by two or more of: LitCharts (whose quotations page
 * prints long passages with page numbers), GradeSaver, SaveMyExams, Taughtly,
 * Goodreads, Buried in Print, Brainscape and a teacher's chapter-by-chapter slide
 * summary on SlideShare that quotes the text with page numbers. The three that
 * rest on one such source are "we were all looking somewhere else" and "footholds
 * and handholds" (LitCharts, Chapters 6 and 17) and "Koro Apirana, however, was
 * not so amused, and now I understand why" (Rauwerda, Postcolonial Text, p. 36 of
 * her edition). Chapter numbers (1 to 21) are the novel's own continuous
 * numbering, which LitCharts, GradeSaver and SaveMyExams share. Page numbers are
 * not given: the sources use different editions, and the Heinemann edition
 * Pearson recommends could not be consulted.
 *
 * EDITIONS DIFFER. The SlideShare summary quotes an edition that uses Maori words
 * where LitCharts' edition uses English ones: in Koro's Chapter 16 speech the
 * whale is the "pito" joining past and present in one and the "birth cord" in the
 * other, and the Chapter 19 retelling has "mauri" for "spear". Every quotation
 * kept below is one the sources print alike, or one in the wording that
 * LitCharts, SaveMyExams and Taughtly (a 4ET1 resource) share. For Kahu's words
 * on the whale's back the sources split between "I am" and "I'm", so only the
 * words they agree on are quoted.
 *
 * WHAT EARLIER DRAFTS OF THIS FILE GOT WRONG, so the next editor does not put it
 * back:
 * - Koro singing "karanga mai" as the ancient whale rises in Chapter 16. LitCharts
 *   prints the passage with the whale as the singer, and his herd joins in; Kahu
 *   sings it to him in Chapter 17.
 * - The first stranding "at Whangara". About two hundred whales strand on Wainui
 *   beach, not far from Whangara (SlideShare; Koro later asks why the ancient
 *   whale stranded "here and not at Wainui"); the ancient whale strands at
 *   Whangara itself.
 * - The whale calves killed by radiation (seven died when tidal sound waves hit
 *   the herd) and Kahu's acceptance of death in Chapter 17 (it is Chapter 18).
 *
 * WHERE THE SOURCES DISAGREE, and so the guide commits to neither version.
 * A fact-check on 26 September 2026 read all 21 LitCharts chapter summaries and
 * found that an earlier note here had called several of these "errors" that one
 * source in fact supports. None of them is wrong; they are simply not settled:
 * - The stone dive: LitCharts has Kahu mount a dolphin and Nanny jump in after
 *   her; GradeSaver and SlideShare say only that dolphins help her. The guide says
 *   dolphins help her.
 * - The death on the road: LitCharts says one of the family's native workers;
 *   SlideShare and GradeSaver say a native man walking on the road home from a
 *   party. The guide says a local man.
 * - The first stranding: LitCharts has Rawiri take Koro's boys to the beach;
 *   GradeSaver his motorbike friends. Billy, one of the boys, is also his friend.
 * - Chapter 14: LitCharts has the Southern Lights show the bull whale the way;
 *   GradeSaver a vision of his rider. The guide says he thinks of his master and
 *   knows the way. LitCharts also has him turn the herd towards Antarctica as
 *   early as Chapter 9.
 * - Kahu's crying after the whaling story: "all day and night" (LitCharts) or
 *   still crying three hours later (GradeSaver). Left out.
 * - Koro's schools: LitCharts says his meeting was about preschools (Chapter 7)
 *   and that he is opening new schools (Chapter 11). Left out.
 * - Clara's "strays" remark: SlideShare quotes Clara saying it to another guest;
 *   LitCharts says family friends. The guide follows SlideShare and GradeSaver.
 * Nanny Flowers' line about what girls can do is not used, because no source
 * that prints it names its speaker.
 */
export const guide: StudyGuide = {
  slug: 'the-whale-rider',
  title: 'The Whale Rider',
  author: 'Witi Ihimaera',
  form: 'novel',
  scope:
    'The whole novel (1987): a Prologue, four parts named for the seasons (Spring, Summer, Autumn, Winter) and an Epilogue, twenty-one chapters numbered continuously. It is set for Pearson Edexcel International GCSE English Literature (4ET1) as a modern prose text and examined closed book, so you will not have the novel with you; you answer one of two essay questions on it. Pearson recommends, but does not require, the Heinemann 1st edition of February 2005 (ISBN 9780435131081). Moments are located here by part and chapter, because page numbers differ between editions. The 2002 film Whale Rider is a different work and is not covered here.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Witi Ihimaera 1987. First published in New Zealand in 1987. Prologue quotations follow the Puffin edition (2024); the edition Pearson recommends for 4ET1 is the Heinemann 1st edition of February 2005 (ISBN 9780435131081). Short quotations are used here for criticism and review.',
  },
  workLength: {
    words: 30000,
    basis:
      "An estimate, not a count. In the publisher's sample of the Puffin edition (2024) the Prologue runs to about 980 words over pages 3 to 7, roughly 200 words a page; that edition has 176 pages including front and back matter, and its Epilogue begins on page 145. That puts the novel at around 30,000 words. Any length over 3,000 words gives the same quotation limits, so the estimate cannot loosen them.",
  },

  overview: {
    summary: [
      "The Whale Rider begins with a legend. Long ago the land and sea of Aotearoa wait for people, until a gigantic whale with a moko pattern on its forehead bursts out of the ocean carrying a man, the whale rider. As he nears the land he throws spears that turn into pigeons and eels, but the last spear will not leave his hand, so he prays over it and sends it into the future, to flower when his people are in trouble. Then the narrator, Rawiri, begins a modern story in the same place, the village of Whangara on the East Coast of New Zealand's North Island, with the birth of his niece Kahu.",
      "Kahu's great-grandfather, Koro Apirana, is the chief, and he wants a boy to inherit the leadership. Kahu is a girl, and she is named after the ancestor Kahutia Te Rangi, which Koro takes as an insult. He will have nothing to do with the traditional burial of her birth cord, so his wife, Nanny Flowers, buries it herself with Rawiri's help. Kahu's mother, Rehua, dies when Kahu is three months old, and the baby is raised by her mother's family, visiting Whangara in the holidays and loving a great-grandfather who keeps pushing her away. Meanwhile, in chapters that open each season, an ancient bull whale, the very whale who carried Kahutia Te Rangi, leads his herd through oceans that people have made dangerous and longs for his lost rider.",
      'As the seasons pass, Kahu grows from a baby to an eight-year-old. Rawiri leaves for Australia and Papua New Guinea and comes home changed, and Kahu keeps showing the gifts Koro is searching for in the village boys. When he throws a carved stone into the sea and none of the boys can bring it back, Kahu dives for it, helped by dolphins, and Nanny Flowers keeps her success from him. Then, in Winter, about two hundred whales strand themselves on a nearby beach and die, and the next night the ancient bull whale throws himself ashore at Whangara, ready to die. Koro believes that if the whale dies, his people will die with it. When the men and then the women have failed to move him, Kahu swims out, tells the whale her name, climbs onto his back and rides him out to sea.',
      "In the Epilogue the whales carry Kahu into the deep, until the old mother whale leads the bull whale to see that the child is not his old master but a descendant: the last spear of the legend. The herd returns her, and three days after she vanished she is found floating in the sea. In hospital Koro admits he was wrong and tells her he loves her. The novel is short, funny and mythic at once, and its argument is subtle. Ihimaera does not have Kahu reject tradition but fulfil it, so that a girl becoming leader is presented as the ancestors' own plan rather than a break with them. The strongest answers explore how the realistic story and the myth work together to make that case.",
    ],
  },

  context: [
    {
      heading: 'Witi Ihimaera, a Māori writer',
      body: "Witi Ihimaera was born on 7 February 1944 in Gisborne, on the East Coast of New Zealand's North Island, and grew up in the small town of Waituhi. His iwi (tribe) is Te Aitanga-a-Māhaki, and he has affiliations to several others, including Ngāti Porou, the iwi of the novel's Whangara. He decided as a teenager to become a writer because Māori did not feature in the books he read, or were misrepresented in them, and in his memoir Māori Boy (2014) he describes the need to “unpoison” the stories already written about Māori. He was the first Māori writer to publish a collection of short stories, Pounamu, Pounamu (1972), and the first to publish a novel, Tangi (1973). From 1973 he worked for New Zealand's Ministry of Foreign Affairs, later as a diplomat with posts in Canberra, New York and Washington, and he did not leave that work until 1989, so he was still a diplomat when The Whale Rider appeared in 1987. He wrote it in about three weeks.",
    },
    {
      heading: 'Whangara and the legend of Paikea',
      body: "Whangara (in modern spelling Whāngārā) is a small community on the coast between Gisborne and Tolaga Bay. It is closely associated with Ngāti Konohi, a hapū (sub-tribe) of Ngāti Porou, and tradition says that the whale which carried the ancestor Paikea turned to stone as the island just offshore. In the wider tradition, Paikea is the name taken by Kahutia-te-rangi after a whale saved him when his half-brother Ruatapu tried to drown him at sea. Ngāti Porou itself takes its name from the ancestor Porourangi, whom the novel places a few generations after Paikea, so Kahu's father carries the name of the iwi's founding ancestor. A note at the front of the novel says the story is set where Paikea is the ancestor, but that its people and events are entirely fictional. Ihimaera keeps the ancestor's two names and gives the legend something new: the whale's own memory of loving his rider.",
    },
    {
      heading: 'The Māori renaissance and the language',
      body: "From about 1970, Māori led a movement often called the Māori renaissance to reverse the decline of their language and culture. The decline had clear causes: English had been made compulsory in schools, and as Māori moved to the towns and cities, children grew up apart from the extended families who had passed the language on. By the 1980s fewer than one in five Māori spoke te reo Māori well enough to count as native speakers. Kōhanga reo (language nests), which immerse young children in Māori, began in 1982, and in 1987, the year The Whale Rider was published, the Māori Language Act made te reo Māori an official language of New Zealand. Koro Apirana's classes for the village boys belong to this moment, and so does the speech in Māori that Kahu gives at her school.",
    },
    {
      heading: 'A nuclear-free Pacific',
      body: 'France tested nuclear weapons at Moruroa and Fangataufa atolls in French Polynesia between 1966 and 1996, drawing protest across the Pacific. On 10 July 1985 French agents sank the Greenpeace ship Rainbow Warrior in the Port of Auckland, as it prepared to sail in protest against a test at Moruroa, and the photographer Fernando Pereira drowned. In 1987 New Zealand passed the Nuclear Free Zone, Disarmament, and Arms Control Act, which made its territory a nuclear-free zone and banned nuclear-powered ships from its waters. In the novel the whale herd finds that a deep-sea trench which had once been a place of safety is now poisoned with radiation, and a reviewer of the novel in the journal Postcolonial Text links that radiation directly to the weapons testing at Moruroa. The whale chapters turn a political issue into grief.',
    },
    {
      heading: 'Leaving home',
      body: "In the twentieth century many younger Māori left their villages for the towns and cities, and Pearson's guide for teachers links this to the novel: Rawiri's experiences away from home and Koro's attempts to hold on to the old ways reflect the pressure on Māori culture, which has since seen a renewal. Rawiri goes first to Sydney, where he stays with a cousin and meets relatives who have remade themselves, and then to Papua New Guinea, which had become independent of Australian rule in 1975, to work on the coffee plantation run by his friend Jeff's family. There he meets open racism. His return to Whangara is one of the novel's arguments about where identity is kept.",
    },
    {
      heading: 'Women, leadership and tradition',
      body: "In Koro's understanding, leadership passes from eldest son to eldest son, and Pearson's guide notes that by putting a girl at the centre of the story Ihimaera gives a twist to a tradition in which the boys are usually the heroes. The novel argues that Koro's version of tradition is narrower than the real one. Nanny Flowers keeps reminding him of her ancestor Muriwai, a woman who saved her people when their canoe was in danger at sea, and she compares Kahu to Mihi Kotukutuku, a real leader: Mihi Kōtukutuku Stirling (1870-1956), of Ngāti Porou and Te Whānau-ā-Apanui, who defended her right to speak on the marae. The book is dedicated to Jessica Kiri and Olivia Ata, “the best girls in the whole wide world”, and in an author's note printed in some editions Ihimaera says the story began when his two young daughters asked him why boys were always the heroes.",
    },
    {
      heading: 'Myth and realism',
      body: "The Whale Rider sets a realistic modern world of motorbikes, cinemas, school ceremonies and hospital wards beside talking whales, a spear that flies across a thousand years and a girl whom dolphins help. It is often called magic realism, fiction in which the supernatural is told as calmly as the everyday. Another way to see it is that Ihimaera writes from inside a tradition in which stories of ancestors and whales are genealogy and history as well as myth. Kirkus Reviews called the book a “luminous joining of myth and contemporary culture”. It won the Nielsen BookData New Zealand Booksellers' Choice Award in 2003, it was translated into Māori as Te Kaieke Tohorā (1995) by Tīmoti Kāretu, and it is the most translated work by a New Zealand author.",
    },
    {
      heading: 'The novel, not the film',
      body: "Niki Caro's film Whale Rider (2002) was shot at Whangara and made the story famous around the world, but it changes a great deal, and film details written into an answer on the novel are simply wrong. In the film the girl is called Paikea, or Pai; Koro is her grandfather; her twin brother and her mother die at her birth; her father goes to Germany to work as an artist; she secretly learns to fight with a taiaha; and the object Koro throws into the sea is a whale tooth. In the novel she is Kahu, the story follows her from birth to eight, Koro is her great-grandfather, her mother dies when she is three months old, and the object is a carved stone. Base every answer on the book, including its whale chapters, Rawiri's travels and the old mother whale's decision.",
    },
  ],

  themes: [
    {
      title: 'Gender and leadership',
      body: "Koro Apirana's belief is simple: the chief must be a first-born male, so Kahu's birth breaks the line. The novel tests that belief against evidence. Kahu shows every quality Koro is looking for in the village boys: she learns the lore by creeping into his classes, bites his toe as a toddler at the very moment he is describing how he bit his own teacher's toe to receive his knowledge, gives her school speech in Māori, and brings back the stone that none of the boys can reach. Nanny Flowers is the counter-voice throughout, and the female whales mirror her. The most convincing reading is that Ihimaera does not attack tradition but reclaims it. The whale accepts Kahu, and the Epilogue retells the legend so that the last spear comes to rest where a girl's afterbirth would be buried. Leadership, the novel suggests, belongs to the person who serves the people, and Koro's rule was a mistake about what his own tradition means. A sharper reading notes that Kahu still has to risk her life before she is accepted, that on waking she apologises for not being a boy, and that the whales know she will need to be “carefully taught” before she can lead: the novel shows how high a price its heroine pays, and it does not pretend the change is complete.",
    },
    {
      title: 'Tradition and change',
      body: "Koro fights to keep Māori culture alive in a changing world, with language classes for the village boys and a test of their courage at sea, and the novel respects that fight. Rawiri's image of him as “an old whale stranded in an alien present” is affectionate as well as critical. The problem is that Koro protects the form of tradition at the cost of its purpose: he is so certain that the heir must be a boy that he cannot see the heir in front of him. The bull whale makes the same mistake, clinging to his memory of Kahutia Te Rangi until the old mother whale leads him to look forward, and he begins “to lose his nostalgia for the past”. Ihimaera's argument is that a tradition survives by adapting, not by freezing. The balance matters, though. The novel never suggests that Koro's knowledge is worthless, and Kahu's triumph depends on everything she overheard him teach.",
    },
    {
      title: 'People and the natural world',
      body: 'The Prologue imagines a world in which land and sea long for people. They feel “a great emptiness, a yearning” until the whale rider arrives, and the two belong together. Everything since, the novel suggests, has been a falling away: Koro remembers going whaling with his uncle as a boy, the herd hides from humans, it loses seven calves and finds its old refuge poisoned by radiation, and at the first stranding television cameras film men cutting up a living whale with a chainsaw. Koro explains the damage as a split in the “original oneness of the world”. Yet the novel is hopeful rather than simply angry. The people of the district fight to save the stranded herd, Kahu can speak to whales, and in the Epilogue the bull whale declares that the partnership between land and sea should remain. One reading is ecological, a protest shaped by the anti-nuclear Pacific of the 1980s; another is spiritual, a claim that the modern world has lost a Māori knowledge of kinship with nature. The strongest answers argue that Ihimaera means both.',
    },
    {
      title: 'Māori identity and belonging',
      body: "The novel asks what it means to be Māori in the modern world. Koro answers with strict rules; Rawiri answers by leaving. In Sydney he finds Māori relatives who have remade themselves, and in Papua New Guinea he learns that to Jeff's mother, Clara, he is simply a dark-skinned outsider: “I was still too dark”. When Jeff runs over and kills a local man on the way home from a party, and the family treat the death as unimportant, Rawiri understands where he belongs, and a letter from Kahu helps bring him home. His journey is not a detour from Kahu's story but a second version of it: both are sent away, both return, and both find that identity is something you choose to keep. Nanny Flowers says as much to the baby Kahu as she is taken away, telling her that her buried birth cord will bring her back: “No matter where you may go, you will always return”. The Māori language is the other thread. Koro's classes, Kahu's speech and the Māori words and chants set inside the novel's English all insist that the language is alive, which in 1987 was a political claim.",
    },
    {
      title: 'Love and family',
      body: "Love drives almost everyone in the novel. Kahu loves Koro without being loved back for most of the book, saving a seat for him at her school ceremony and giving her speech about him while it stays empty; afterwards she even defends him, telling Nanny that it is not his fault that she is a girl. Koro's love is for his people and their culture, which is exactly what blinds him to her. Nanny Flowers loves her husband while fighting him, threatening divorce and calling him “you old paka”, a name the narrator tells us she used when she wanted him to know she loved him. Pearson's guide points out that even the bull whale returns Kahu out of love for Kahutia Te Rangi. The family is shaped by loss too, from Rehua's death to Kahu's years away. When Kahu wakes in hospital and says that Koro and Nanny's bickering is just like that of the bull whale and the old mother whale, the novel ties its two families together and suggests that a love which argues is still love.",
    },
    {
      title: 'Myth, destiny and the supernatural',
      body: "From its first chapter the novel tells us that Kahu's life is foretold. The whale rider's last spear is sent to flower when the people are troubled, and Rawiri, telling the story after it has ended, fills the early chapters with signs: at her birth cord's burial he sees a flying spear and hears a whale's song, Kahu weeps when a whale dies on a cinema screen, calls out to a passing pod of killer whales, and is helped by dolphins to find the stone. The Epilogue confirms the prophecy, retelling the legend so that the spear lands “where the afterbirth of a female child would be placed”. Destiny could make Kahu passive, but the novel avoids that: she chooses to swim out, and on the whale's back she tells herself that she is “not afraid to die”. The supernatural also tests the community. When the men argue over whether the whale is natural or supernatural, Koro tells them it is both, and that forgetting this would mean ceasing to be Māori. Readers can take the magic as symbol or as truth; the novel asks only that they take it seriously.",
    },
  ],

  characters: [
    {
      name: 'Kahu',
      role: "The protagonist; Koro Apirana's great-granddaughter",
      body: "Kahu, in full Kahutia Te Rangi, is named after the ancestor who rode the whale to Whangara, and the novel follows her from birth to the age of eight. After her mother's death she is raised by her mother's family and visits Whangara in the holidays, until at six she comes back to live there with her father and his new wife, Ana. She is loving, stubborn and quick to forgive, and her love for the great-grandfather who keeps rejecting her is the emotional centre of the book. She calls him Paka, Nanny's name for him, and never stops. Her gifts show early: she bites Koro's toe as he describes the ritual of biting his teacher's toe, calls to whales, weeps at a film that ends with a whale's death and at Koro's story of whaling, and brings the stone back from the seabed. Ihimaera keeps her a real child rather than a saint. She is lonely, she tells Rawiri that she sometimes wishes she were a boy so that Koro would like her, and on the whale's back she weeps before she finds her courage. At the climax she takes the ancestor's place, and the bull whale, guided by the old mother whale, comes to see her as the last spear of the legend.",
    },
    {
      name: 'Koro Apirana',
      role: "Chief of Whangara; Kahu's great-grandfather",
      body: "Koro Apirana is the chief of Whangara, Kahu's great-grandfather and the husband of Nanny Flowers. He is devoted to keeping Māori knowledge alive, running classes in language and lore for the village boys and searching for a future leader, and the novel treats that devotion with respect. His flaw is rigidity. Because he believes the heir must be male, he refuses to help bury Kahu's birth cord, sends her away when she creeps into his classes, and does not come to her school ceremony. He weeps when the boys fail his test with the stone. Rawiri compares him to an old whale out of his time, and the comparison runs through the book: like the bull whale, he is a leader held back by the past. When Nanny Flowers gives him the stone and points out to sea, he understands at last who brought it back. In hospital he blames himself, admitting he should have known she was the one when she bit his toe, and when Kahu wakes he tells her that boy or girl does not matter, and that he loves her. He is best read as a flawed, often comic leader rather than a villain.",
    },
    {
      name: 'Nanny Flowers',
      role: "Koro's wife; Kahu's great-grandmother",
      body: "Nanny Flowers is Koro's wife and Kahu's great-grandmother (some study guides spell her name Nani). She is funny, fierce and practical: on the day of Kahu's birth she chases Koro round the bay in Rawiri's motor dinghy, she threatens to divorce him whenever they quarrel, and she reminds him that her ancestor Muriwai was a woman who led her people. She buries Kahu's birth cord when Koro will not, is in the boat when Kahu dives for the stone, and decides that Koro is not ready to be told. Nanny is the novel's evidence that strong women are already part of Māori tradition, and her partnership with Koro, bickering but loyal, is mirrored by the old mother whale and the bull whale. She collapses after Kahu is carried out to sea, wakes in hospital five days later to find Kahu in the same room, and, as the old couple bicker at the bedside, insists as ever that she is always right.",
    },
    {
      name: 'Rawiri',
      role: "The narrator; Kahu's uncle",
      body: "Rawiri is the narrator, Porourangi's younger brother and so Kahu's uncle, a sixteen-year-old with a motorbike when she is born. He tells the story in the first person, looking back, and his voice is chatty, self-mocking and warm. He is a witness rather than a hero: he helps Nanny fetch and bury the birth cord, sneaks the small Kahu into the cinema, sees her call to whales and ride one. His own story, told in Autumn, is a journey away, first to Sydney, where he stays with a cousin and meets Māori relatives living new lives, then to Papua New Guinea, where his friend Jeff's mother treats him with racist contempt, although he likes and respects Jeff's father. He comes home surer of who he is. At the first stranding he races to the beach with his motorbike-riding friends to protect the whales, and on the night of the ancient whale he and his friend Billy tie the rope round its tail. Because he is not a candidate for the leadership and not especially mystical, his account makes the supernatural events easier to believe.",
    },
    {
      name: 'Porourangi',
      role: "Kahu's father; Koro's grandson and heir",
      body: "Porourangi is Kahu's father, Koro's eldest grandson and his heir, and he shares his name with the ancestor from whom Ngāti Porou take theirs. After Rehua's death he and Koro agree that Kahu should be raised by her mother's family; later he marries Ana, and they bring Kahu home to live in Whangara. He is gentle and dutiful, caught between his grandfather's expectations and his love for his daughter, and his calls and letters keep Rawiri in touch with home while he is away, including his worry about whether the next generation will still be Māori. His second child is also a daughter, which leaves Koro still searching for a boy.",
    },
    {
      name: 'Rehua',
      role: "Kahu's mother",
      body: "Rehua is Kahu's mother. Koro blames Nanny Flowers for the name Kahu, but Rawiri learns that Rehua wanted it, to tie her daughter to her husband's people, and it was Rehua who wanted the birth cord buried at Whangara. She dies when Kahu is three months old, and her family ask to raise the child, which takes Kahu away from Whangara for most of her early years. Her death gives Kahu a hero's beginning, motherless and sent away, and it is echoed in the bull whale's story, since he too lost his mother when he was young.",
    },
    {
      name: 'Ana',
      role: "Porourangi's second wife",
      body: "Ana is Porourangi's second wife. Her baby, born while Rawiri is in Papua New Guinea, is also a girl, a second disappointment to Koro. She is a minor figure, but her arrival shows that Porourangi's family is moving forward while Koro is still waiting for a boy.",
    },
    {
      name: 'Kahutia Te Rangi',
      role: 'The ancestor, also called Paikea; the first whale rider',
      body: "Kahutia Te Rangi, also called Paikea, is the ancestor who rides the whale to Aotearoa in the Prologue and throws the spears that bring life to land and sea. He appears in the novel as legend and as the bull whale's memory: the flute-playing man who befriended the young whale after sharks killed its mother, rode him across the ocean from Hawaiki, and in the end chose to stay on land with his wife and their coming children, saying a last farewell to the whale. His last spear, sent into the future, is the image through which the novel explains Kahu, and Kahu claims his name when she swims out to the stranded whale.",
    },
    {
      name: 'The ancient bull whale',
      role: 'The whale who carried Kahutia Te Rangi; leader of the herd',
      body: "The ancient bull whale is the whale who carried Kahutia Te Rangi to Aotearoa, still alive after many centuries and leading his herd. His chapters, told in the third person, open each season. Orphaned when sharks killed his mother, he was befriended by the man who became his rider, and he has never stopped longing for him. That nostalgia is his weakness, as the past is Koro's: it makes him hesitate as a leader and draws the herd towards the waters he once shared with his master, and at Whangara he throws himself ashore, ready to die. On his head is the moko pattern described in the Prologue, the sacred sign that tells Koro this is no ordinary whale. When Kahu names herself and climbs onto his back he believes his lord has returned.",
    },
    {
      name: 'The old mother whale',
      role: "The bull whale's wife",
      body: "The old mother whale is the bull whale's wife, the eldest of the female whales who swim beside him. She loves him but sees his faults clearly, and she understands that his long sadness comes from his longing for Paikea. In the Epilogue she notices the small figure on his back and, choosing her words with care while the warrior whales grow restless, tells him that his rider is not Paikea and suggests that she may be a descendant. That leads the bull whale to remember the last spear and to decide that the girl must be returned to the land. Her role mirrors Nanny Flowers', and it is a female whale, not a male one, whose wisdom saves Kahu.",
    },
    {
      name: 'Jeff',
      role: "Rawiri's friend and flatmate in Sydney",
      body: "Jeff, whose family runs a coffee plantation in Papua New Guinea, shares a flat with Rawiri in Sydney. When his parents call him home to run the plantation, Rawiri goes with him, and discovers that the friendship cannot protect him from Jeff's mother's attitudes. When Jeff runs over and kills a local man on the drive home from a party, and the family drive on, Rawiri stays with the dying man; he tells Jeff he does not blame him, but the night is one of the reasons he goes home.",
    },
    {
      name: 'Clara',
      role: "Jeff's mother",
      body: "Clara is Jeff's mother. She is embarrassed by Rawiri from the moment he arrives: although Jeff has told her he is Māori, to her he is too dark to be one of them, and at a party Rawiri overhears her describing him to another guest as one of the strays her son brings home. Through her, Ihimaera shows the colonial racism Rawiri meets outside New Zealand, and why he comes to value what Whangara gives him.",
    },
  ],

  quoteNote:
    "The Prologue quotations below are checked word for word against the publisher's own sample of the Puffin edition (2024). No complete copy of the later chapters could be consulted for this guide, so a quotation from them is included only where a published source prints it as part of a passage from the novel, and nearly all of them are printed the same way by two or more sources. Editions of the novel differ in places: some use Maori words where others use English ones, so in Koro's Chapter 16 speech one edition calls the whale the pito joining past and present, and another the birth cord. Where the sources disagree, only the words they share are quoted. The novel prints Maori without the macron, and the quotations keep its spelling; this guide uses Māori in its own words. Page numbers differ between editions, so find each line in your own copy by its part and chapter before you learn it.",

  keyQuotes: [
    {
      text: 'the land and sea felt a great emptiness, a yearning',
      where: 'The storyteller, Prologue, Chapter 1 (the opening sentence)',
      analysis:
        "The novel's first image personifies land and sea as lonely, waiting for people to complete them. “Yearning” is a word of desire rather than need, so the natural world is given feelings before any human appears. That sets the ideal the whole novel measures itself against: people and nature belonging to each other. Everything Koro later mourns, and everything Kahu restores, is defined by this opening.",
    },
    {
      text: 'You have called and I have come',
      where: 'The song that fills the sea as the whale rises, Prologue, Chapter 1',
      analysis:
        "The whale's arrival is framed as an answer to the land's yearning, and call and response becomes a pattern of the novel. The rider then cries “Karanga mai” to the land; in Winter the ancient whale rises singing the same call, and Kahu answers by singing it back to him as she swims out. The simple, balanced clause sounds like ritual, which tells the reader that the bond between people and whales is a covenant, not an accident.",
    },
    {
      text: 'a swirling moko pattern imprinted on the forehead',
      where: 'The storyteller, describing the whale, Prologue, Chapter 1',
      analysis:
        'A moko is a Māori tattoo design, so the whale carries the same sacred marking as a person of rank. The detail is also planted for later: when the ancient whale rises off Whangara in Winter, it is the sacred sign on his head that tells Koro this is no ordinary whale. The mark joins the legend to the present and makes the whale an ancestor as well as an animal.',
    },
    {
      text: 'Let this be the one to flower when the people are troubled',
      where: "The whale rider's prayer over the last spear, Prologue, Chapter 1",
      analysis:
        "The last spear will not leave the rider's hand, so he sends it into the future with a prayer. The metaphor of a spear that will “flower” turns a weapon into a seed, which is exactly what Kahu becomes. The whole plot is a working-out of this prophecy, and in the Epilogue the bull whale understands that she is the last spear. Readers know from the first chapter that rescue is coming; the question is who will carry it.",
    },
    {
      text: 'you old paka',
      where: 'Nanny Flowers, calling to Koro Apirana, Spring, Chapter 3',
      analysis:
        'Rawiri explains that this was the affectionate name Nanny used when she wanted Koro to know she loved him, even in the middle of a row. The comic insult captures their marriage: argument on the surface, loyalty underneath. Kahu takes up the name and calls him Paka throughout, and Nanny is still using it at his expense in the hospital in the Epilogue, so the phrase frames the whole family story.',
    },
    {
      text: 'No matter where you may go, you will always return',
      where: 'Nanny Flowers, to the baby Kahu, Summer, Chapter 6',
      analysis:
        "As Kahu is taken away to be raised by her mother's family, Nanny promises that the buried birth cord will bring her back. The balanced clauses sound like a blessing, and the future tense turns a custom into a prophecy. It links the tradition Koro refused to honour to Kahu's destiny, and it is fulfilled twice: when she comes to live in Whangara, and when the whales return her from the sea.",
    },
    {
      text: 'Our Koro was like an old whale stranded in an alien present',
      where: "Rawiri, reflecting on Porourangi's worries about the future, Autumn, Chapter 11",
      analysis:
        'Rawiri, far from home, uses a simile that ties Koro to the ancient bull whale. “Stranded” suggests helplessness rather than villainy, and “alien present” makes the modern world the strange place, not Koro. The image also foreshadows the literal strandings of Winter. It is a key quotation for any question on Koro, because it lets you argue that the novel judges him with sympathy.',
    },
    {
      text: 'I was still too dark',
      where: "Rawiri, of Jeff's mother Clara, Autumn, Chapter 11",
      analysis:
        "The short, flat sentence carries a great deal: although Jeff has told his mother that Rawiri is Māori, she sees only his skin. The word “still” shows that no explanation can change her mind. Ihimaera widens the novel here from one family's prejudice about gender to colonial racism, and the humiliation helps send Rawiri home to the identity that Whangara offers him.",
    },
    {
      text: "It's not Paka's fault, Nanny",
      where: 'Kahu, to Nanny Flowers, after her school ceremony, Autumn, Chapter 12',
      analysis:
        "Koro has left his reserved seat empty, and Kahu goes on to say that it is not his fault “that I'm a girl”. A small child blames herself to protect the man who has hurt her, which makes the reader angrier with Koro than any accusation could. The affectionate “Paka” shows that her love has not changed, and the line exposes how completely she has absorbed his view of girls.",
    },
    {
      text: 'This is a sign to us',
      where: 'Koro Apirana, after seeing the dead whales on the beach, Winter, Chapter 16',
      analysis:
        "Home from the South Island, Koro stops to see the dead herd and then says, again, that the stranding is a message rather than an accident. The plain declarative sentence shows his certainty, and “us” makes the whole people responsible. It prepares for his claim that the ancient whale's fate and the tribe's are one: if the whale lives, the people live. The novel invites readers to share his reading, not to smile at it.",
    },
    {
      text: 'drive a wedge through the original oneness of the world',
      where: 'Koro Apirana, to the men in the meeting house, Winter, Chapter 16',
      analysis:
        "Addressing the men before they try to save the ancient whale, Koro says that man, growing arrogant, split the world apart. The metaphor of a wedge is violent and deliberate, forcing a crack into something whole. “Original oneness” looks back to the Prologue's picture of land, sea and people belonging together. Ironically, Koro's own rule about male heirs is another wedge, dividing his family, and the novel's resolution mends both.",
    },
    {
      text: 'if we have forgotten the communion then we have ceased to be Maori',
      where:
        'Koro Apirana, to the men arguing over whether the whale is natural or supernatural, Winter, Chapter 16',
      analysis:
        'When the men argue over whether the whale is natural or supernatural, Koro insists it is both. “Communion” is a religious word, making the bond between people and whales sacred rather than sentimental. The conditional structure raises the stakes to identity itself: to lose the bond is to stop being Māori. Here Koro is right, and the novel lets his wisdom stand even while it shows his blindness about Kahu.',
    },
    {
      text: 'The rain was like spears',
      where: "Rawiri, in the storm of the ancient whale's night, Winter, Chapter 17",
      analysis:
        "The simile makes the storm violent, but it also links the scene to the legend of the whale rider's spears. In the chapter in which Kahu goes out to the whale, the weather itself seems to be throwing spears, and the reader is reminded that she is the last one. A small image does structural work, turning a realistic storm into the fulfilment of a myth told in Chapter 1.",
    },
    {
      text: 'not afraid to die',
      where:
        "Kahu, whispering to herself on the whale's back before the longest dive, Winter, Chapter 18",
      analysis:
        'After dives that grow deeper each time, Kahu realises the next may last forever and tells herself she is not afraid. Study sources print the start of her sentence differently, so learn these words. They show that her destiny is also her choice, and they give her, in the plainest language, the self-sacrifice Koro wanted from a leader, in the one person he refused to consider.',
    },
    {
      text: 'the bull whale began to lose his nostalgia for the past',
      where: 'The whale narrative, Epilogue, Chapter 19',
      analysis:
        'Persuaded by the old mother whale, the bull whale stops clinging to his memory of Kahutia Te Rangi and turns his thoughts to the present and the future. “Nostalgia” names the fault he shares with Koro: love for the past that endangers the living. Because the whale changes first, and saves Kahu by doing so, the novel shows Koro the change he still has to make.',
    },
    {
      text: 'where the afterbirth of a female child would be placed',
      where: "The bull whale's memory of the last spear, Epilogue, Chapter 19",
      analysis:
        "The Epilogue retells the Prologue's legend with one new detail: the spear came to rest where a girl's afterbirth would one day be buried. The buried birth cord of Spring becomes the landing place of the ancestor's gift. “Female child” is placed exactly where Koro expected a male heir, so the myth itself is shown to have chosen Kahu, and his rule is proved wrong by his own tradition.",
    },
    {
      text: 'the girl would need to be carefully taught',
      where: 'The whale herd, rejoicing that the tribe will live, Epilogue, Chapter 20',
      analysis:
        "The whales sing their gladness that the tribe will live, because they know Kahu must be taught before she can take her place. The line keeps the novel's ending honest: Kahu's gift does not make Koro's knowledge unnecessary, it makes him her teacher. It supports the reading that Ihimaera reconciles tradition and change rather than choosing between them, and it looks beyond the last page.",
    },
    {
      text: "Boy or girl, it doesn't matter",
      where: 'Koro Apirana, to Kahu in hospital, Epilogue, Chapter 21',
      analysis:
        'Kahu wakes and apologises for falling off the whale, saying a boy would have held on. Koro, crying, tells her she is the best great-grandchild in the world and that boy or girl does not matter. The short, balanced phrase undoes the rule he has held since Chapter 3, and its plainness matters: after a novel of chants and prophecies, the reconciliation is spoken in the simplest words.',
    },
    {
      text: 'the whales are still singing',
      where: 'Kahu, to Koro Apirana, just before the closing chant, Epilogue, Chapter 21',
      analysis:
        "In the novel's last words of dialogue, Kahu asks whether Koro can hear the whales and tells him she has been listening to them for ages. The present continuous “are still singing” makes the bond between people and whales ongoing rather than a memory. It also invites a rereading: every time the child called out to the sea, she may have been hearing the herd whose chapters we have been reading.",
    },
  ],

  extracts: [
    {
      title: 'The coming of the whale rider',
      where: 'Prologue, Chapter 1 (the whole chapter)',
      pointer:
        'The whole of Chapter 1, from “In the old days, in the years that have gone before us” to “Let it be done.” It is just under a thousand words long.',
      summary:
        'Before people arrive, land and sea wait, full of life but incomplete. Canoes come from the east and go back again, and then a gigantic whale bursts out of the ocean carrying a small tattooed man, the whale rider. As he approaches land he throws spears that become pigeons and eels, but the last spear refuses to fly. He prays that it will be planted in the future, and it flies across a thousand years and then waits a hundred and fifty more until it is needed. The chapter ends with a Māori chant and its English sense.',
      annotations: [
        {
          phrase: 'Waiting. Waiting for the seeding. Waiting for the gifting.',
          note: "Repetition of a single word in minor sentences creates the rhythm of a chant and stretches time, so the reader feels the land's long expectation. “Seeding” and “gifting” present people's arrival as a blessing for nature, not a conquest of it.",
        },
        {
          phrase: 'a swirling moko pattern imprinted on the forehead',
          note: "The sacred tattoo marks the whale as special and is planted for later: it is the sign on the ancient whale's head that tells Koro, in Winter, that this is no ordinary whale, joining legend to present.",
        },
        {
          phrase: 'His body dazzled with diamond spray.',
          note: "Light, water and the rider's body blur into one glittering image, so man and whale look like a single creature. The elevated, rhythmic sentence belongs to the storyteller's mythic voice, which the reader will soon hear alongside Rawiri's chatty modern one.",
        },
        {
          phrase: 'Let this be the one to flower when the people are troubled',
          note: 'The prayer turns a spear into a seed and sets out the prophecy the plot will fulfil. Its formal, ceremonial wording belongs to spoken tradition rather than to the conversational voice Rawiri uses later.',
        },
        {
          phrase: 'Hui e, haumi e, taiki e.',
          note: 'A traditional Māori chant that closes ritual speech, followed here by a short English line. It returns at the end of several later chapters, marking each as a ritual telling and reminding the reader that this story belongs to a living oral tradition.',
        },
      ],
      question:
        'Explore how Ihimaera presents the relationship between people and the natural world in the Prologue and elsewhere in The Whale Rider. (The 4ET1 exam prints no extract, so practise writing about this chapter from memory.)',
    },
    {
      title: 'Kahu goes to the whale',
      where: 'Winter, Chapter 17 (the whole chapter)',
      pointer:
        'Winter, Chapter 17: from Kahu slipping into the stormy sea unnoticed, after the men and then the women have failed to turn the whale, to Rawiri watching her disappear with the herd and the chant that closes the chapter.',
      summary:
        'Nobody sees Kahu slip into the sea until she is halfway through the waves, and Rawiri plunges in after her. Choking on the surf, she swims to the stranded whale, sings to him and tells him that she is Kahutia Te Rangi. The whale believes his lord has come back; footholds appear in his skin and she climbs onto his back, while Rawiri fights the sea and Nanny Flowers weeps on the shore. Kahu weeps too, from fear, loneliness and love for her family, before the whale carries her away with the herd.',
      annotations: [
        {
          phrase: 'karanga mai',
          note: 'Kahu sings the call the whale rider cried to the land in the Prologue and the ancient whale sang as he rose in Chapter 16. The whale called, and this time a child of the tribe answers, which shows that the ancestral bond has passed to her.',
        },
        {
          phrase: 'Kahutia Te Rangi',
          note: "Kahu gives the whale her full name, the ancestor's name that Koro thought wasted on a girl. Naming herself is her claim to leadership, and the whale's joy shows that the ancestors accept it.",
        },
        {
          phrase: 'footholds and handholds',
          note: 'The whale shapes his own skin to carry her, as the whale chapters say he once did for his first rider. The detail tells the reader that Kahu is not forcing her way onto the whale but being welcomed.',
        },
        {
          phrase: 'The rain was like spears',
          note: "Rawiri's simile makes the storm violent and also recalls the legend's spears, so the weather seems to announce that the last spear, Kahu herself, has finally been thrown.",
        },
      ],
      question:
        "Explore how Ihimaera presents Kahu's courage in this part of the novel and elsewhere in The Whale Rider. You must consider the context of the novel in your answer.",
    },
    {
      title: "The old mother whale's decision",
      where: 'Epilogue, Chapter 19 (the whole chapter)',
      pointer:
        'Epilogue, Chapter 19, the whale chapter that opens the Epilogue: from the bull whale leading the herd down into the deep with the girl on his back, to his decision that the herd must take her back to the land.',
      summary:
        'The bull whale leads the herd deeper and deeper, flanked by the female whales, who sing with happiness that he has rejoined them. The old mother whale, his wife, notices the small figure on his back, and he tells her it is his lord, Paikea. Thinking about his long sadness, she calls the herd to a halt and, gently and warily, tells him that the rider is not Paikea and may be a descendant. Remembering the last spear, the bull whale understands that the girl is that spear, puts aside his longing for the past and tells the herd to take her home.',
      annotations: [
        {
          phrase: 'the seed of Paikea',
          note: "The spear from the Prologue is now called a seed, completing the metaphor of the rider's prayer. Kahu is presented as the growth of the ancestor, a new life, not a copy of the old one.",
        },
        {
          phrase: 'the bull whale began to lose his nostalgia for the past',
          note: "The whale's change is the model for Koro's. A leader held back by memory learns to think about the future, and he does so because a wise female voice leads him to it.",
        },
        {
          phrase: 'where the afterbirth of a female child would be placed',
          note: "The legend, retold, now includes the burial of Kahu's birth cord from Spring. The ancestor's gift was always meant to land where a girl was born, so Koro's rule about male heirs is overturned by tradition itself.",
        },
      ],
      question:
        'Explore the importance of the whales in The Whale Rider, referring to this chapter and to the novel as a whole. You must consider the context of the novel in your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Personification of the natural world',
      example: '“the land and sea felt a great emptiness, a yearning” (Prologue, Chapter 1)',
      effect:
        "Land and sea are given human feelings before any person appears, so the reader meets nature as a character with needs. That makes the later damage, from the poisoned trench to the whale cut up on the beach, feel like harm done to someone, and it grounds the novel's claim that people and nature belong to each other.",
    },
    {
      technique: 'Repetition and minor sentences',
      example: '“Waiting. Waiting for the seeding. Waiting for the gifting.” (Prologue, Chapter 1)',
      effect:
        "The one-word sentence and its repeats create the rhythm of a chant, which suits a legend told in the style of oral storytelling. They also slow time, so the reader shares the land's long expectation. The Prologue's style tells the reader to treat what follows as sacred history, not fantasy.",
    },
    {
      technique: 'Extended comparison between Koro and the bull whale',
      example:
        '“Our Koro was like an old whale stranded in an alien present” (Rawiri, Autumn, Chapter 11)',
      effect:
        "The simile makes explicit a parallel the structure has been building: both are old leaders in love with the past. Because the whale is presented with such sympathy, the comparison softens the reader's judgement of Koro, and it prepares us for the whale's change in the Epilogue, which shows the change Koro must make.",
    },
    {
      technique: 'The spear as a recurring symbol',
      example:
        'The last spear, sent to “flower” in the future (Prologue); the flying spear Rawiri sees at the birth cord burial (Spring, Chapter 4); “The rain was like spears” (Winter, Chapter 17); the spear coming to rest “where the afterbirth of a female child would be placed” (Epilogue, Chapter 19)',
      effect:
        "A single image carries the plot across a thousand years. A reviewer in Postcolonial Text notes that many things in the novel are described as spearing, a storyteller's tag that keeps the ancestor's spear in the reader's mind. Each return tightens the link between Kahu and the legend, so that by the Epilogue the reader accepts its logic: she was the gift all along.",
    },
    {
      technique: 'Māori words and code-switching',
      example:
        "“Hui e, haumi e, taiki e.” closing the Prologue; the rider's cry “Karanga mai, karanga mai, karanga mai.”; Nanny's “you old paka” (Spring, Chapter 3)",
      effect:
        'Ihimaera writes in English but sets Māori words, chants and names inside it, often with no gloss, so the language is presented as normal and alive rather than exotic. In a book published in the year te reo Māori became an official language, that choice is itself a statement, and it makes the reader do a little of the work Koro asks of his pupils.',
    },
    {
      technique: 'Contrasting narrative voices',
      example:
        "The legend's elevated register, “His body dazzled with diamond spray.” (Prologue), against Rawiri's plain, conversational first person, “I was still too dark” (Autumn, Chapter 11)",
      effect:
        "The mythic voice and the chatty modern one seem to belong to different books, and that contrast mirrors the novel's subject, the meeting of old and new. Rawiri's ordinariness makes the magic believable, and the whale chapters' grandeur gives the modern story its scale.",
    },
    {
      technique: 'Metaphor of division',
      example:
        '“drive a wedge through the original oneness of the world” (Koro Apirana, Winter, Chapter 16)',
      effect:
        'The violent image of a wedge forced into something whole explains, in one phrase, the ecological and spiritual crisis the whale chapters have dramatised. It also turns back on Koro, whose own rule has split his family, which lets an essay argue that the novel repairs both kinds of division at once.',
    },
    {
      technique: 'Call and response',
      example:
        "The whale's song, “You have called and I have come”, and the rider's cry of “Karanga mai” (Prologue); the ancient whale singing “Karanga mai” as he rises, his herd joining in (Winter, Chapter 16); Kahu singing it to him as she swims out (Winter, Chapter 17)",
      effect:
        'The pattern, taken from ritual, structures the relationship between people and whales as an exchange of promises. In the Prologue a man calls to the land; in Winter a whale calls, and the one who answers with the same words is a girl. The ancestral bond has passed to her, whatever Koro believes.',
    },
    {
      technique: 'Anthropomorphism in the whale chapters',
      example: '“the bull whale began to lose his nostalgia for the past” (Epilogue, Chapter 19)',
      effect:
        "The whales remember, grieve, argue and change their minds. Giving them an inner life, as Pearson's guide notes, engages the reader in their plight, and it lets the whale herd act out, at a mythic level, the same conflict between memory and the future that divides the family in Whangara.",
    },
  ],

  structureForm: [
    {
      heading: 'A story told in seasons',
      body: "The novel is divided into a Prologue, four parts named for the seasons, and an Epilogue: the Prologue is Chapter 1, Spring runs from Chapter 2 to 4, Summer from 5 to 8, Autumn from 9 to 13, Winter from 14 to 18, and the Epilogue from 19 to 21. The Puffin edition gives each part a title, from “The Coming of Kahutia Te Rangi” to “The Girl from the Sea”. The seasons do not mark a single year in the human story, which spans Kahu's first eight years, but they give the novel a natural cycle: birth in Spring, growth and travel in Summer and Autumn, crisis in Winter, and renewal after it. Winter's title, “Whale Song, Whale Rider”, names the climax.",
    },
    {
      heading: 'Two stories in two voices',
      body: "The human story is told by Rawiri in the first person, looking back, although at the climax the narration leaves him in the surf and follows Kahu onto the whale in the third person. The whale story is told in the third person, and a whale chapter opens each season and the Epilogue (Chapters 2, 5, 9, 14 and 19). The two strands run in parallel for most of the book: while Kahu grows up, the herd migrates, mourns its lost calves, abandons its poisoned trench, and is driven by collapsing Antarctic ice towards Whangara. In Winter, as Pearson's guide puts it, the two narratives are interwoven, and in the Epilogue the bull whale's decision to return Kahu meets Rawiri's narrative, which mirrors the reunion of people and whales the novel is working towards.",
    },
    {
      heading: 'A legend at each end',
      body: "The Prologue tells the legend of the whale rider and the last spear; the Epilogue retells it through the bull whale's memory with a new detail, in which the spear comes to rest “where the afterbirth of a female child would be placed”. This frame turns the realistic story in between into the fulfilment of a prophecy. It also answers Koro structurally: he appeals to tradition, and the novel's own tradition, told at the beginning and the end, chooses Kahu.",
    },
    {
      heading: 'A refrain that closes chapters',
      body: 'The chant “Hui e, haumi e, taiki e.”, followed by “Let it be done.”, closes the Prologue and returns at the end of Chapter 4, where Nanny Flowers buries the birth cord; Chapter 7, where Kahu calls to the killer whales; Chapter 11, where Rawiri decides to come home; Chapter 13, where Kahu brings back the stone; and Chapter 17, where the whale carries her out to sea. A version of it ends the novel. Each time it marks a moment as a ritual completed, part of the larger pattern the Prologue set in motion, and it gives a novel written in English the shape of a Māori telling. One reading is that the chant picks out the moments at which Kahu, or Rawiri, moves a step closer to the destiny the Prologue promised.',
    },
    {
      heading: 'A narrator who knows the ending',
      body: "Rawiri tells the story after it has happened, and Pearson's guide notes that foreshadowing is used to suggest that Kahu will triumph. He admits the family missed the signs, “we were all looking somewhere else” (Summer, Chapter 6), and his asides, such as “Koro Apirana, however, was not so amused, and now I understand why”, hint at her importance from early on. So the tension comes less from whether she will be accepted than from how long it will take Koro to see what the reader already sees. That gap creates dramatic irony, and much of the novel's sadness. In the Epilogue Koro himself admits that he should have known from the day she bit his toe.",
    },
    {
      heading: 'The journey away',
      body: "In Autumn the novel follows Rawiri out of Whangara, to Sydney and Papua New Guinea, for two chapters in which Kahu appears only in Porourangi's calls and letters and in one letter of her own. This can look like a digression, but it widens the novel's questions. Rawiri tests what being Māori means away from the marae, meets the racism that colonial history has left in the Pacific, and returns choosing Whangara. His return prepares for the climax: he is home, and a witness, when the whales come.",
    },
    {
      heading: 'Parallel couples',
      body: "The structure pairs characters across the two strands. Koro and the bull whale are old leaders held back by the past; Nanny Flowers and the old mother whale are the wise, affectionate wives who lead them to change; Kahu is both the great-granddaughter and the last spear. In the final chapter Kahu herself says that Koro and Nanny's bickering is just like the two whales', so the parallel the reader has been tracing is spoken aloud.",
    },
    {
      heading: 'Myth and realism in one form',
      body: 'The novel combines a realistic family story, with its humour, school ceremonies and hospital beds, and a myth with talking whales and a prophecy. It can be described as a bildungsroman, a coming-of-age story, for Kahu and in a different way for Rawiri, and as magic realism. The most useful point for an essay is that the form is itself the argument: a novel that makes myth and modern life share one story is showing, not just saying, that the old and the new can belong together.',
    },
  ],

  vocabulary: [
    {
      term: 'Aotearoa',
      definition:
        'Originally the Māori name for the North Island; now the Māori name for New Zealand.',
    },
    {
      term: 'Hawaiki',
      definition:
        "The ancient homeland from which, in Māori tradition, the ancestors migrated to Aotearoa. Kahutia Te Rangi travels from there on the whale's back.",
    },
    {
      term: 'iwi',
      definition:
        'A Māori tribe or people descended from a common ancestor, such as Ngāti Porou, the iwi of Whangara.',
    },
    {
      term: 'hapū',
      definition:
        'A sub-tribe within an iwi. Whangara is associated with Ngāti Konohi, a hapū of Ngāti Porou.',
    },
    {
      term: 'marae',
      definition:
        'The open courtyard in front of the meeting house, where formal greetings and discussions take place; often used for the whole complex of buildings.',
    },
    {
      term: 'moko',
      definition:
        'Traditional Māori tattoo designs on the face or body. The ancient whale carries a moko pattern on his forehead.',
    },
    {
      term: 'karanga',
      definition:
        'To call, call out or summon; also the ceremonial call of welcome on a marae. The whale rider cries “Karanga mai” to the land in the Prologue, the ancient whale sings it as he rises in Chapter 16, and Kahu sings it to him in Chapter 17.',
    },
    {
      term: 'pito',
      definition:
        "The navel, or the part of the umbilical cord nearest the baby. Burying a baby's birth cord in tribal land ties the child to that place; some editions of the novel use the Māori word where others say birth cord.",
    },
    {
      term: 'tangata',
      definition:
        'A person, human being or man. The Prologue calls the whale rider “the gift long waited for: tangata, man”.',
    },
    {
      term: 'tipuna',
      definition:
        'An ancestor or grandparent (the eastern dialect form of tupuna). The note at the front of the novel calls Paikea the tipuna of Whangara.',
    },
    {
      term: 'koro',
      definition:
        'An elderly man or grandfather, also used as a respectful way of addressing an older man, which is why Rawiri speaks of “our Koro”.',
    },
    {
      term: 'paka',
      definition:
        'The name Nanny Flowers calls Koro. Rawiri says it was the affectionate name she used when she wanted him to know she loved him, though study guides also read it as a mild insult. Kahu takes it up and calls her great-grandfather Paka throughout the novel.',
    },
    {
      term: 'Hui e, haumi e, taiki e',
      definition:
        'A traditional Māori chant used to close ritual speech such as prayers and stories. It ends Chapter 1 and several later chapters, followed by the English words “Let it be done.”',
    },
    {
      term: 'leviathan',
      definition:
        'A huge sea monster, from the Bible; the Prologue uses the word for the whale as it breaches, and it returns when the ancient whale rises in Chapter 16, giving it epic scale.',
    },
    {
      term: 'halcyon',
      definition:
        "Calm and happy, often of a remembered time; originally a mythical bird said to calm the sea, later identified with the kingfisher. The Puffin edition titles the Summer part “Halcyon's Flight”.",
    },
    {
      term: 'nostalgia',
      definition:
        "A longing for the past. It is the bull whale's weakness and, the novel implies, Koro's too.",
    },
    {
      term: 'patrilineal',
      definition:
        'Passed down through the male line, from father to son. Koro believes the chieftainship must be inherited this way.',
    },
    {
      term: 'anthropomorphism',
      definition:
        'Giving human thoughts and feelings to animals or things, as the whale chapters do with the herd.',
    },
    {
      term: 'magic realism',
      definition:
        'Fiction in which supernatural events are told as calmly as everyday ones, as when Kahu talks to whales in an otherwise realistic modern village.',
    },
    {
      term: 'bildungsroman',
      definition: 'A novel about a young person growing up and finding their place in the world.',
    },
    {
      term: 'foreshadowing',
      definition:
        "Hints of what is to come. The last spear, the moko on the whale and Kahu's early gifts all foreshadow the climax.",
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          '‘Koro Apirana is wrong about almost everything.’ How far do you agree with this view? You must consider the context of the novel in your answer.',
        skill: 'Whole-text essay: character, argument and context',
        guidance: [
          'Decide your answer before you plan. A strong line is that Koro is wrong about Kahu but right about most of what he fears for his people, so the statement goes too far.',
          'Show what he gets right: his classes for the village boys, his regret over the whaling he saw as a boy, and his speech about the “original oneness of the world”, which the whale chapters prove true.',
          'Use context to explain his fears: the decline of te reo Māori, the Māori renaissance, and the Māori Language Act of 1987, the year the novel was published.',
          "Show what he gets wrong: refusing to help bury Kahu's birth cord, sending her away from his classes, missing her school ceremony, and weeping over the boys' failure while the answer is in his own family.",
          "Analyse Rawiri's simile comparing Koro to an old whale stranded in an alien present, and the parallel with the bull whale, to show that the novel judges him with sympathy.",
          'Finish with his change: Nanny Flowers giving him the stone, and his apology in hospital. Argue that the ending forgives him because his fault was loving the past too narrowly.',
        ],
      },
      {
        question:
          'Explore the ways Ihimaera presents the relationship between people and the natural world in The Whale Rider. You must consider the context of the novel in your answer.',
        skill: 'Whole-text essay: theme, methods and context',
        guidance: [
          "Start with the Prologue: land and sea personified as waiting for people, the whale rider's spears becoming pigeons and eels, and the ideal of belonging together.",
          "Trace the falling away: Koro's memory of whaling with his uncle, the herd hiding from humans, the calves it has lost, the trench poisoned by radiation, and the chainsaw at the first stranding.",
          "Use context: French nuclear testing at Moruroa, the sinking of the Rainbow Warrior in 1985, and New Zealand's nuclear-free law of 1987.",
          "Analyse Koro's speech to the men in Chapter 16, and his claim that forgetting the bond with the whales would mean ceasing to be Māori.",
          "Show the repair: the community's efforts to save the whales, Kahu's gift, and the bull whale's wish in the Epilogue that the partnership between land and sea should remain.",
          'Comment on form: the whale chapters that open every season make the natural world a character with its own story, not a backdrop.',
        ],
      },
      {
        question:
          'Explore the importance of Nanny Flowers in The Whale Rider. You must consider the context of the novel in your answer.',
        skill: 'Whole-text essay: character, relationships and context',
        guidance: [
          "Open with her function: she is the novel's strongest adult woman, the voice that answers Koro, and Kahu's protector.",
          'Use key moments in order: chasing Koro round the bay, burying the birth cord, her promise that Kahu will always return, keeping the secret of the stone until Koro is ready, and her collapse after Kahu is carried out to sea.',
          'Analyse her comedy: the threats of divorce and the affectionate insult “you old paka” show a marriage that argues but holds.',
          'Link her to context: her ancestor Muriwai and her comparison of Kahu to Mihi Kotukutuku show female leadership inside Māori tradition, not imported from outside.',
          'Explain the parallel with the old mother whale, who, like Nanny, leads a stubborn male leader to change.',
          'Judge her importance: without her the novel would have no one to challenge Koro before the whales do.',
        ],
      },
      {
        question:
          "Explore the significance of Rawiri's journey away from Whangara in The Whale Rider. You must consider the context of the novel in your answer.",
        skill: 'Whole-text essay: structure, character and context',
        guidance: [
          'Place the journey: it fills Chapters 10 and 11, in the middle of Autumn, while Kahu is growing up without him.',
          'Discuss Sydney: Rawiri stays with a cousin and meets Māori relatives who have remade themselves, which raises the question of what can be kept when people leave.',
          "Discuss Papua New Guinea: Clara's racism, summed up in “I was still too dark”, the contrast with Jeff's father, whom Rawiri respects, and the man Jeff kills on the road.",
          'Use context: the movement of younger Māori from the villages to the cities, and the colonial histories of New Zealand and Papua New Guinea.',
          "Argue that the journey mirrors Kahu's: both are sent away and return, and both show that identity must be chosen and kept.",
          "Explain the structural payoff: Rawiri comes home in time to protect the whales at the first stranding and to witness the ancient whale and Kahu's ride.",
        ],
      },
    ],
    tips: [
      'The 4ET1 exam is closed book, and you choose one of two essay questions on the novel. Learn ten or twelve short quotations with their part and chapter, and practise using them, because you will have no copy to check.',
      'Past questions on the novel tell you to consider its context, so build context into your argument rather than adding a paragraph of history at the end. The Māori renaissance, the Māori Language Act of 1987, the Paikea tradition and the nuclear-free Pacific are the most useful.',
      "Write about both narrative strands. Answers that ignore the whale chapters miss half the novel's method and most of its structure.",
      'Never use the film. There is no Pai, no twin brother, no whale tooth and no taiaha training in the book, and an examiner will spot them at once.',
      "Get the family right: Koro is Kahu's great-grandfather, Nanny Flowers her great-grandmother, Porourangi her father and Rawiri her uncle and the narrator.",
      'Argue about Koro rather than simply condemning him. The top answers explain why the novel forgives him, using the parallel with the bull whale.',
      "Use Ihimaera's name and name his methods: the seasonal structure, the frame of the legend, the recurring spear, similes and Māori words set in English.",
      'Check any quotation you learn against your own copy. Editions differ in places, and a line learned from a website may not match the book you studied.',
      'Spell the names correctly, especially Kahutia Te Rangi, Porourangi and Whangara.',
    ],
  },

  modelAnswer: {
    question:
      '‘Koro Apirana is wrong about almost everything.’ How far do you agree with this view? You must consider the context of the novel in your answer.',
    paragraph:
      "Ihimaera presents Koro as wrong about Kahu but right about almost everything else, and the novel's tension lies in that gap. His fear for his culture is justified by its context: the novel appeared in 1987, the year te reo Māori became an official language, after decades in which English had been compulsory in schools and young Māori had drifted to the cities, so his classes for the village boys are an act of resistance. Even his most mystical claim is borne out when he tells the men that man, in his arrogance, began to “drive a wedge through the original oneness of the world”, because the whale chapters have already shown the herd driven from a trench poisoned by radiation, and the first stranding has shown men cutting up a living whale with a chainsaw. Rawiri's simile, that Koro is “like an old whale stranded in an alien present”, catches both sides of him: “stranded” suggests helplessness rather than villainy, and the parallel with the bull whale implies that his fault is nostalgia, not cruelty. His one great error is to confuse the form of tradition with its purpose, insisting on a male heir while the heir the ancestors have chosen has been beside him since she bit his toe as a toddler. When the bull whale, too, must “lose his nostalgia for the past” before Kahu can be saved, Ihimaera suggests that Koro's mistake is a leader's mistake, and a forgivable one.",
    commentary: [
      'It answers the question in its first sentence, and qualifies the statement rather than simply agreeing or disagreeing, which gives the paragraph an argument to prove.',
      'Context is part of the argument, not decoration: the Māori Language Act and the decline of te reo explain why Koro is afraid, and so why the statement is unfair.',
      "Quotations are short, embedded and exact, and the single word “stranded” is analysed for what it implies about the novel's judgement.",
      'It moves across the whole text, from the toe-biting in Summer to Chapter 16 and the Epilogue, and uses the whale strand as evidence alongside the human one.',
      'The final sentence evaluates, linking Koro to the bull whale to explain why the novel forgives him, which is the kind of whole-text judgement that marks out the strongest answers.',
    ],
  },

  timeline: [
    {
      where: 'Prologue, Chapter 1',
      title: 'The coming of the whale rider',
      summary:
        'Land and sea wait for people. A gigantic whale with a moko on its forehead bursts from the ocean carrying Kahutia Te Rangi, who throws spears that become pigeons and eels. The last spear will not fly, so he prays over it and sends it into the future.',
      setting: 'The ocean and the coast of Aotearoa, long ago',
      who: ['Kahutia Te Rangi', 'The ancient bull whale'],
      quote: 'Let this be the one to flower when the people are troubled',
      themes: ['Myth, destiny and the supernatural', 'People and the natural world'],
      tension: 3,
      significance: 'The prophecy of the last spear is the promise the whole novel fulfils.',
    },
    {
      where: 'Spring, Chapter 2',
      title: 'The whale remembers',
      summary:
        'Far out at sea, the ancient bull whale, now leading his own herd, remembers how sharks killed his mother and how a flute-playing man befriended him and became his rider. His cry of longing frightens the female whales, who fear he is thinking of returning.',
      setting: "The herd's breeding grounds, reached across the Southern Ocean",
      who: ['The ancient bull whale', 'Kahutia Te Rangi'],
      themes: ['People and the natural world', 'Tradition and change'],
      tension: 2,
      significance:
        "The whale's nostalgia sets up his parallel with Koro and the herd's journey towards Whangara.",
    },
    {
      where: 'Spring, Chapters 3 and 4',
      title: 'A girl is born',
      summary:
        "Kahu is born, and Koro Apirana is furious that his heir is a girl, all the more when she is named after Kahutia Te Rangi. Nanny Flowers chases him round the bay. When he refuses to help, Nanny, with Rawiri, buries Kahu's birth cord near the carving of the ancestor on his whale, and Rawiri sees a spear flying in the moonlight.",
      setting: 'Whangara: the bay, the family home and the carving of Kahutia Te Rangi',
      who: ['Kahu', 'Koro Apirana', 'Nanny Flowers', 'Rawiri', 'Porourangi', 'Rehua'],
      quote: 'you old paka',
      themes: ['Gender and leadership', 'Tradition and change', 'Love and family'],
      tension: 3,
      significance:
        "The central conflict is set: a chief who wants a boy, and a girl carrying the ancestor's name.",
    },
    {
      where: 'Summer, Chapter 5',
      title: 'The herd hides',
      summary:
        "The herd crosses the Pacific with young males on watch for humans, now the whales' main predator. The bull whale remembers the day his master first rode him, and when people are sighted the herd goes into hiding.",
      setting: 'The open Pacific, on migration',
      who: ['The ancient bull whale', 'Kahutia Te Rangi'],
      themes: ['People and the natural world'],
      tension: 2,
      significance:
        'Whales who once worked with people now hide from them, the falling away the novel mourns.',
    },
    {
      where: 'Summer, Chapter 6',
      title: 'Rehua dies',
      summary:
        "Kahu's mother, Rehua, dies when Kahu is three months old. Rehua's mother asks to raise her, and although Nanny Flowers objects, the baby leaves Whangara; Nanny tells her that her birth cord will always bring her back. Rawiri explains the genealogy that links the family to Kahutia Te Rangi.",
      setting: 'Whangara',
      who: ['Rehua', 'Kahu', 'Nanny Flowers', 'Porourangi', 'Koro Apirana', 'Rawiri'],
      quote: 'No matter where you may go, you will always return',
      themes: ['Love and family', 'Māori identity and belonging'],
      tension: 3,
      significance:
        'Kahu begins life motherless and sent away, the pattern of a hero and of the bull whale himself.',
    },
    {
      where: 'Summer, Chapter 6',
      title: 'The bitten toe',
      summary:
        "On a holiday visit, when she is almost two, Kahu creeps under the table at Koro's meeting. As he describes biting the toe of his own teacher to receive his knowledge, she bites his toe. Rawiri and his friends laugh; Koro does not.",
      setting: 'A tribal meeting called by Koro Apirana at Whangara',
      who: ['Kahu', 'Koro Apirana', 'Rawiri'],
      themes: [
        'Gender and leadership',
        'Tradition and change',
        'Myth, destiny and the supernatural',
      ],
      tension: 2,
      significance:
        'Without knowing it, Kahu performs the ritual of inheritance; Koro admits in the Epilogue that he should have known then.',
    },
    {
      where: 'Summer, Chapters 7 and 8',
      title: 'Signs Koro will not read',
      summary:
        'On visits home Kahu adores Koro, who stays cold. Taken to the cinema by Rawiri, she weeps as a whale dies on screen, and that night she calls out to a pod of killer whales, which dive as if warned. When she overhears Koro telling the boys about whaling with his uncle, she cannot stop crying, and he is angry at her for listening.',
      setting: 'Whangara: the family home, the cinema, the shore and the meeting house',
      who: ['Kahu', 'Koro Apirana', 'Rawiri', 'Nanny Flowers'],
      themes: [
        'Myth, destiny and the supernatural',
        'People and the natural world',
        'Love and family',
      ],
      tension: 3,
      significance: "Kahu's bond with the whales is shown to the reader, and missed by Koro.",
    },
    {
      where: 'Autumn, Chapter 9',
      title: 'The poisoned trench',
      summary:
        "The herd waits above a deep-sea trench that was once a place of safety. The bull whale is still mourning seven calves killed when tidal sound waves hit the herd, and he finds the trench now full of radiation, so for the first time in his long life he changes the herd's route.",
      setting: 'The deep Pacific, above an ocean trench',
      who: ['The ancient bull whale'],
      themes: ['People and the natural world', 'Tradition and change'],
      tension: 3,
      significance: "The novel links the whales' suffering to the nuclear testing of the Pacific.",
    },
    {
      where: 'Autumn, Chapters 10 and 11',
      title: 'Rawiri abroad',
      summary:
        "Rawiri leaves for Sydney, stays with a cousin and then shares a flat with a friend, Jeff, before going with him to his family's coffee plantation in Papua New Guinea. There Jeff's mother treats him as too dark to belong, Jeff runs over and kills a local man on the road home from a party, and a letter from Kahu helps draw Rawiri home.",
      setting: 'Sydney, then a coffee plantation in Papua New Guinea',
      who: ['Rawiri', 'Jeff', 'Clara', 'Porourangi', 'Kahu'],
      quote: 'I was still too dark',
      themes: ['Māori identity and belonging', 'Tradition and change'],
      tension: 3,
      significance: 'Rawiri learns abroad what Koro fears losing at home, and chooses Whangara.',
    },
    {
      where: 'Autumn, Chapter 12',
      title: 'The empty seat',
      summary:
        "Kahu, now living in Whangara, leads her group at her school's end-of-year ceremony and gives a speech in Māori about her love for Koro. She has reserved a seat for him, but he never comes. Afterwards she tells Nanny that it is not his fault that she is a girl.",
      setting: "Kahu's school, and afterwards",
      who: ['Kahu', 'Nanny Flowers', 'Rawiri', 'Porourangi', 'Ana'],
      quote: "It's not Paka's fault, Nanny",
      themes: ['Love and family', 'Gender and leadership'],
      tension: 3,
      significance: "Kahu's devotion and Koro's rejection reach their saddest point.",
    },
    {
      where: 'Autumn, Chapter 13',
      title: 'The stone',
      summary:
        'Koro throws a carved stone into the sea and tells the boys that one of them must bring it back. None can, and at home he weeps. Later, out at sea with Nanny and Rawiri, Kahu dives without warning and, helped by dolphins, returns with the stone. Nanny tells Rawiri that Koro is not ready to be told.',
      setting: 'Out at sea off Whangara',
      who: ['Kahu', 'Koro Apirana', 'Nanny Flowers', 'Rawiri'],
      themes: ['Gender and leadership', 'Myth, destiny and the supernatural'],
      tension: 3,
      significance:
        'Kahu passes the test meant for the boys, but the proof is kept secret until it matters most.',
    },
    {
      where: 'Winter, Chapter 14',
      title: 'The ice breaks',
      summary:
        'The bull whale remembers his last ride with his master before the man chose the land. Now, under the Antarctic ice, the herd meets a wall of ice and ice crashes down around them; thinking of his old master, the bull whale suddenly knows the way, and he leads the herd towards the waters he once shared with his rider.',
      setting: 'Beneath the Antarctic ice',
      who: ['The ancient bull whale', 'Kahutia Te Rangi'],
      themes: ['People and the natural world', 'Tradition and change'],
      tension: 4,
      significance:
        "The herd's last journey begins, driven by the bull whale's longing for the past.",
    },
    {
      where: 'Winter, Chapter 15',
      title: 'The first stranding',
      summary:
        'About two hundred whales strand themselves on Wainui beach, not far from Whangara. With Koro and Porourangi away, Rawiri and his friends race to protect them from men butchering them, the navy tries to return them to the sea, but the whales come back, and by evening all of them are dead.',
      setting: 'Wainui beach, near Whangara',
      who: ['Rawiri', 'Nanny Flowers', 'Kahu'],
      themes: ['People and the natural world', 'Tradition and change'],
      tension: 4,
      significance:
        "The whales' crisis arrives on the family's own coast, and Kahu's cries to the sea show she feels it.",
    },
    {
      where: 'Winter, Chapter 16',
      title: 'The ancient whale comes home',
      summary:
        'The next night the ancient whale, with the sacred moko on his head, rises from the sea and throws himself ashore at Whangara. In the meeting house Koro tells the men that the whale is a sign: if it lives, they live. The men, and then the women, try to turn him back to sea, but he wants to die.',
      setting: 'The beach and the meeting house at Whangara, in a storm',
      who: [
        'Koro Apirana',
        'Nanny Flowers',
        'Porourangi',
        'Rawiri',
        'Kahu',
        'The ancient bull whale',
      ],
      quote: 'drive a wedge through the original oneness of the world',
      themes: [
        'People and the natural world',
        'Myth, destiny and the supernatural',
        'Tradition and change',
      ],
      tension: 4,
      significance: "Koro's wisdom and his blindness are shown side by side at the novel's crisis.",
    },
    {
      where: 'Winter, Chapter 17',
      title: 'Kahu goes to the whale',
      summary:
        'Kahu slips into the sea, swims to the whale, sings to him and tells him she is Kahutia Te Rangi. The whale believes his lord has returned and lets her climb onto his back while Rawiri struggles in the surf. Weeping for her family and her people, she goes with the whales into the sea and the rain.',
      setting: 'The stormy sea off Whangara',
      who: ['Kahu', 'The ancient bull whale', 'Rawiri', 'Nanny Flowers'],
      quote: 'The rain was like spears',
      themes: [
        'Gender and leadership',
        'Myth, destiny and the supernatural',
        'People and the natural world',
      ],
      tension: 5,
      significance: "The climax: Kahu takes the ancestor's place and fulfils the legend.",
    },
    {
      where: 'Winter, Chapter 18',
      title: 'The last dive',
      summary:
        'Kahu rides the whale into the open ocean. The herd dives deeper each time, and before the longest dive she says goodbye to her people. On the shore, Nanny Flowers gives Koro the stone; when he asks which of the boys brought it back, she points out to sea, and he understands.',
      setting: 'The open sea, and the shore at Whangara',
      who: ['Kahu', 'The ancient bull whale', 'Nanny Flowers', 'Koro Apirana'],
      quote: 'not afraid to die',
      themes: ['Gender and leadership', 'Myth, destiny and the supernatural', 'Love and family'],
      tension: 5,
      significance: 'Kahu chooses her fate, and Koro sees the truth too late to stop her.',
    },
    {
      where: 'Epilogue, Chapter 19',
      title: "The old mother whale's decision",
      summary:
        'Deep below, the old mother whale tells the bull whale that his rider is not Paikea but perhaps a descendant. Remembering the last spear, he understands that the girl is that spear and must be returned to land, puts aside his longing for the past and tells the herd to take her home.',
      setting: 'The deep ocean, with the herd',
      who: ['The old mother whale', 'The ancient bull whale', 'Kahu'],
      quote: 'the bull whale began to lose his nostalgia for the past',
      themes: [
        'Myth, destiny and the supernatural',
        'Tradition and change',
        'Gender and leadership',
      ],
      tension: 4,
      significance: 'A female voice saves Kahu, and the whale makes the change Koro must now make.',
    },
    {
      where: 'Epilogue, Chapter 20',
      title: 'The hospital',
      summary:
        'Nanny Flowers wakes in hospital five days after collapsing. Kahu was found floating in the sea three days after she vanished and lies unconscious in the same room. Koro blames himself, and as the old couple bicker, Kahu stirs; far away, the whales rejoice that the tribe will live.',
      setting: 'A hospital room, and the sea where the herd sings',
      who: ['Kahu', 'Koro Apirana', 'Nanny Flowers', 'Rawiri', 'The ancient bull whale'],
      quote: 'the girl would need to be carefully taught',
      themes: ['Love and family', 'Gender and leadership', 'People and the natural world'],
      tension: 3,
      significance:
        'Koro admits his fault, and the whales look forward to the future Kahu will lead.',
    },
    {
      where: 'Epilogue, Chapter 21',
      title: 'The girl from the sea',
      summary:
        'Kahu wakes, says that Koro and Nanny argue just like the two old whales, and apologises for not being a boy. Koro, weeping, tells her she is the best great-grandchild in the world and that he loves her. Just before the closing chant, Kahu asks if he can hear the whales and tells him they are still singing.',
      setting: 'The hospital',
      who: [
        'Kahu',
        'Koro Apirana',
        'Nanny Flowers',
        'The ancient bull whale',
        'The old mother whale',
      ],
      quote: 'the whales are still singing',
      themes: ['Love and family', 'Gender and leadership', 'People and the natural world'],
      tension: 2,
      significance:
        'Family and tradition are reconciled, and the bond between people and whales is renewed.',
    },
  ],

  relationships: [
    {
      from: 'Koro Apirana',
      to: 'Kahu',
      kind: 'great-grandfather and great-granddaughter',
      note: "The novel's central relationship: her love and his rejection, until her ride on the whale and his apology in hospital.",
    },
    {
      from: 'Nanny Flowers',
      to: 'Koro Apirana',
      kind: 'wife and husband',
      note: 'A marriage of constant argument and deep loyalty; she challenges him, threatens divorce, and keeps the secret of the stone until he is ready.',
    },
    {
      from: 'Nanny Flowers',
      to: 'Kahu',
      kind: 'great-grandmother and ally',
      note: "Nanny buries Kahu's birth cord, promises she will always return, and protects her from Koro's coldness.",
    },
    {
      from: 'Rawiri',
      to: 'Kahu',
      kind: 'uncle and niece',
      note: "Rawiri is Kahu's devoted uncle and the narrator of her story; her letter helps bring him home from Papua New Guinea.",
    },
    {
      from: 'Porourangi',
      to: 'Rawiri',
      kind: 'brothers',
      note: "Porourangi is the elder brother and Koro's heir; his calls and letters keep Rawiri connected to home.",
    },
    {
      from: 'Porourangi',
      to: 'Kahu',
      kind: 'father and daughter',
      note: "He lets her be raised by her mother's family after Rehua's death, later brings her home to Whangara, but cannot make his grandfather accept her.",
    },
    {
      from: 'Rehua',
      to: 'Kahu',
      kind: 'mother and daughter',
      note: "Rehua wanted her daughter's name to tie her to her husband's people; she dies when Kahu is three months old, and Kahu is raised by her mother's family.",
    },
    {
      from: 'Porourangi',
      to: 'Ana',
      kind: 'husband and second wife',
      note: "Porourangi remarries after Rehua's death, and Ana's baby is another girl.",
    },
    {
      from: 'Rawiri',
      to: 'Jeff',
      kind: 'friends',
      note: "A friendship begun in Sydney that Jeff's family pull apart in Papua New Guinea; after the death on the road Rawiri tells Jeff he does not blame him, but knows he must leave.",
    },
    {
      from: 'Clara',
      to: 'Rawiri',
      kind: 'hostile hostess and guest',
      note: 'Clara treats Rawiri as too dark to belong, the racism that helps send him home.',
    },
    {
      from: 'The ancient bull whale',
      to: 'Kahutia Te Rangi',
      kind: 'whale and rider',
      note: "A friendship begun when the rider befriended the orphaned whale; the whale's longing for him lasts for centuries.",
    },
    {
      from: 'The ancient bull whale',
      to: 'Kahu',
      kind: 'whale and new rider',
      note: 'He accepts her as his lord when she names herself, and returns her to land once he understands who she is.',
    },
    {
      from: 'The old mother whale',
      to: 'The ancient bull whale',
      kind: 'wife and husband',
      note: 'She sees his faults and leads him gently to the right decision, mirroring Nanny Flowers and Koro.',
    },
    {
      from: 'Kahu',
      to: 'Kahutia Te Rangi',
      kind: 'descendant and namesake',
      note: "Kahu carries the ancestor's name and becomes the last spear of his legend.",
    },
    {
      from: 'Koro Apirana',
      to: 'The ancient bull whale',
      kind: 'parallel old leaders',
      note: 'Both love the past too much to see the future; Rawiri compares Koro to an old whale, and the whale changes first.',
    },
  ],

  compareWith: [
    {
      title: 'Things Fall Apart',
      href: '/revision/texts/things-fall-apart',
      reason:
        'Also on the 4ET1 modern prose list: Okonkwo, like Koro, holds so hard to a masculine idea of tradition that he harms what he wants to protect, but Achebe ends in tragedy where Ihimaera ends in reconciliation.',
    },
    {
      title: 'To Kill a Mockingbird',
      href: '/revision/texts/to-kill-a-mockingbird',
      reason:
        "Another 4ET1 modern prose text about a child growing up inside a community's prejudices, told by a narrator looking back on events they have already lived through.",
    },
    {
      title: 'The Joy Luck Club',
      href: '/courses/igcse-lit-prose-joy-luck-club',
      reason:
        'Also on the 4ET1 list: generations of one family, a culture carried across countries, and the love between elders and children who struggle to understand each other.',
    },
  ],

  contentGuidance: [
    'mortality',
    'violence',
    'discrimination',
    'colonialism',
    'mythological_religious',
    'supernatural',
  ],

  quotesFromElsewhere: [
    'unpoison',
    'the best girls in the whole wide world',
    'luminous joining of myth and contemporary culture',
  ],

  sources: [
    {
      label:
        "Puffin edition (2024), publisher's sample: copyright page, contents with part titles, dedication, the note on Whangara, and the whole Prologue (Chapter 1), used to verify every Prologue quotation and the Prologue's length",
      url: 'https://cdn.penguin.co.uk/dam-assets/books/9780241669983/9780241669983-sample.pdf',
    },
    {
      label:
        'Penguin UK, The Whale Rider (Puffin Classics, published 4 July 2024): edition details, 176 pages',
      url: 'https://www.penguin.co.uk/books/457738/the-whale-rider-by-ihimaera-witi/9780241669983',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature (4ET1) Specification, Issue 3, August 2025: modern prose list, Section C as one essay question from a choice of two, closed-book Component 1, recommended Heinemann edition (February 2005, ISBN 9780435131081) in Appendix 3',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature Getting Started Guide, Issue 2, November 2024: context, themes, structure (pp. 15-16) and synopsis (pp. 83-84) of The Whale Rider; the source for Kahu being eight, the poisoned trench, the saved seat, the navy at the stranding and the older females doubting the journey',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/international-gcse-english-literature-getting-started-guide.pdf',
    },
    {
      label:
        'Pearson 4ET1 Paper 1, January 2022, Questions 6 and 7 (question wording and the context instruction)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/exam-materials/4ET1_01_que_20220112.pdf',
    },
    {
      label:
        'LitCharts, The Whale Rider: quotations page, printing passages of the novel with chapter labels and page numbers; the main source for the Chapter 6, 11, 16, 17, 18, 20 and 21 quotations',
      url: 'https://www.litcharts.com/lit/the-whale-rider/quotes',
    },
    {
      label:
        'LitCharts, The Whale Rider: summaries of all 21 chapters, read in full for the order of events, who is present, and which chapters end with the chant',
      url: 'https://www.litcharts.com/lit/the-whale-rider',
    },
    {
      label:
        'LitCharts, The Ancient Bull Whale: character timeline by chapter (the whale sings karanga mai in Chapter 16, Kahu sings it in Chapter 17, Chapter 21 quotations)',
      url: 'https://www.litcharts.com/lit/the-whale-rider/characters/the-ancient-bull-whale',
    },
    {
      label:
        "SlideShare, Literacy01, The Whale Rider Chapters 10 till end summary: a teacher resource quoting the text with page numbers; second source for Chapters 11, 12, 16, 18, 19 and 21, and the source for the Wainui stranding, Clara's remark to another guest, the death on the road, Nanny weeping on the shore and Nanny giving Koro the stone",
      url: 'https://www.slideshare.net/slideshow/chapters-10-till-end-summary/24759452',
    },
    {
      label:
        'SaveMyExams, The Whale Rider: key quotations with chapter and speaker (Chapters 3, 11, 16, 17 and 19)',
      url: 'https://www.savemyexams.com/igcse/english-literature/edexcel/16/revision-notes/modern-prose/the-whale-rider/the-whale-rider-key-quotations/',
    },
    {
      label: 'GradeSaver, The Whale Rider: quotes and analysis (Chapters 6, 11, 12, 16, 20 and 21)',
      url: 'https://www.gradesaver.com/the-whale-rider/study-guide/quotes',
    },
    {
      label:
        "GradeSaver, The Whale Rider: section summaries, Prologue to Epilogue (the calves and the tidal sound waves, the stranding and Koro's return, the stone given to Koro, the hospital, the author's note on his daughters)",
      url: 'https://www.gradesaver.com/the-whale-rider/study-guide/summary',
    },
    {
      label:
        'Taughtly, The Whale Rider IGCSE revision for Edexcel 4ET1 (quotations with page numbers; second source for Chapters 3, 11, 17, 18 and 19)',
      url: 'https://www.taughtly.co.uk/the-whale-rider-igcse-revision-for-edexcel-english-literature-4et1/',
    },
    {
      label:
        'Goodreads, quotations from The Whale Rider (second source for the Chapter 16 debate and the seed of Paikea)',
      url: 'https://www.goodreads.com/work/quotes/1244508-the-whale-rider',
    },
    {
      label:
        "Buried in Print, review of The Whale Rider (1987): second source for Kahu's words after the school ceremony",
      url: 'http://www.buriedinprint.com/witi-ihimaeras-the-whale-rider-1987/',
    },
    {
      label:
        "Brainscape, Whale Rider quotes flashcards (further source for Koro's sign and the bull whale's nostalgia)",
      url: 'https://www.brainscape.com/flashcards/whale-rider-quotes-all-18806631/packs/22670064',
    },
    {
      label:
        "Rauwerda, review of The Whale Rider, Postcolonial Text 1.1 (2004): the author's note, the spearing tags, Rawiri's retrospective aside, and the radiation linked to Moruroa",
      url: 'https://www.postcolonial.org/index.php/pct/article/view/292/779',
    },
    {
      label: 'Wikipedia, Witi Ihimaera (life, career, Māori Boy, Kirkus, award)',
      url: 'https://en.wikipedia.org/wiki/Witi_Ihimaera',
    },
    {
      label: 'Wikipedia, The Whale Rider (1987, Māori translation, most translated)',
      url: 'https://en.wikipedia.org/wiki/The_Whale_Rider',
    },
    {
      label: 'Wikipedia, Whale Rider (2002 film): plot, for the differences from the novel',
      url: 'https://en.wikipedia.org/wiki/Whale_Rider',
    },
    {
      label: 'Wikipedia, Paikea (Ruatapu, Whāngārā island, Ngāti Konohi)',
      url: 'https://en.wikipedia.org/wiki/Paikea',
    },
    { label: 'Wikipedia, Whangara', url: 'https://en.wikipedia.org/wiki/Whangara' },
    {
      label: 'Wikipedia, Ngāti Porou (Porourangi)',
      url: 'https://en.wikipedia.org/wiki/Ng%C4%81ti_Porou',
    },
    {
      label: 'Wikipedia, Māori renaissance',
      url: 'https://en.wikipedia.org/wiki/M%C4%81ori_renaissance',
    },
    {
      label: 'Wikipedia, Māori language revival',
      url: 'https://en.wikipedia.org/wiki/M%C4%81ori_language_revival',
    },
    { label: 'Wikipedia, Moruroa', url: 'https://en.wikipedia.org/wiki/Moruroa' },
    {
      label: 'Wikipedia, Sinking of the Rainbow Warrior',
      url: 'https://en.wikipedia.org/wiki/Sinking_of_the_Rainbow_Warrior',
    },
    {
      label: 'Wikipedia, New Zealand Nuclear Free Zone, Disarmament, and Arms Control Act 1987',
      url: 'https://en.wikipedia.org/wiki/New_Zealand_Nuclear_Free_Zone,_Disarmament,_and_Arms_Control_Act_1987',
    },
    {
      label: 'Wikipedia, Papua New Guinea (independence, 1975)',
      url: 'https://en.wikipedia.org/wiki/Papua_New_Guinea',
    },
    {
      label: 'Wikipedia, Mihi Kōtukutuku Stirling',
      url: 'https://en.wikipedia.org/wiki/Mihi_K%C5%8Dtukutuku_Stirling',
    },
    {
      label:
        'Te Aka Māori Dictionary: Aotearoa, Hawaiki, iwi, hapū, marae, moko, karanga, pito, tangata, tipuna, koro',
      url: 'https://maoridictionary.co.nz',
    },
  ],
}
