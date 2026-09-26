import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Klara and the Sun, Kazuo Ishiguro (2021). A complete guide: the text had only
 * the course at /courses/igcse-lit-prose-klara-and-the-sun before this file.
 *
 * THE NOVEL IS IN COPYRIGHT and no licensed copy is held here, so nothing below
 * could be checked against the book itself. Every quotation was instead found,
 * word for word, in at least one published source: the publisher's own excerpts
 * of Part One (NPR, Bookreporter, CBS), national reviews that quote the text
 * (the Guardian, NPR, the New Republic, the Washington Independent Review of
 * Books), and GradeSaver's part-by-part study guide, whose quotations agree with
 * the reviews wherever the two overlap. Goodreads was used only to corroborate.
 * A quotation found in one secondary source that other sources contradicted was
 * dropped: an academic review quoted Mr Capaldi as saying "carries" where three
 * other sources print "carry", so nothing that rested on that review alone was
 * used. Quotations avoid words spelt differently in the Faber and Knopf editions.
 *
 * DO NOT COPY QUOTATIONS FROM THE OLD COURSE PAGE. It prints six "quotations"
 * that no source contains (Klara saying she was "programmed to observe and to
 * serve Josie", Miss Helen saying "Klara is right", and others) and places the
 * portrait revelation and the bargain with the Sun in the wrong parts.
 *
 * Plot facts follow Pearson's own Knowledge Organiser and Getting Started Guide
 * (both November 2024), checked against GradeSaver and The Bibliofile. Where
 * those disagreed (whether the Mother's name is spelt Chrissie or Chrissy, what
 * exactly the Cootings Machine is), the guide follows the text's own quoted
 * words or says less.
 *
 * SECOND PASS, 25 September 2026. Every quoted phrase was re-checked, and a
 * reader's Kindle highlights published on Goodreads (verbatim copies from the
 * ebook, with locations) were added as a source. Three things changed as a
 * result. "Please make Josie better" was dropped: every source paraphrases the
 * prayer in the barn and none prints those words. "the Sun and his nourishment"
 * was replaced by "the Sun and his kindness to us", which the publisher's
 * excerpt does print. And several details stated from summaries were corrected
 * or softened: the Guardian gives the father's name as Shizu and the Nobel
 * biography as Shizuo, so the guide names neither; only one summary gives
 * Atlas Brookings' two per cent, so the guide says a small number; Josie
 * agrees with a guest about the B3 rather than making the joke herself.
 *
 * THIRD PASS, 26 September 2026. Every quoted phrase was searched for again,
 * word for word, in raw copies of the sources rather than in summaries of them,
 * and each was read in context to confirm the speaker and the part. All of them
 * stand; the barn passage, "I have my memories ..." and "The Sun was very kind
 * to me." now each rest on two independent sources (Dappled Things, the Booker
 * Prizes reading guide and the St Albert kit were added). What changed was the
 * prose around them:
 * - The first barn visit is the SAME evening Klara takes Josie's picture to
 *   Rick, not "the evening after", which a student would read as the next day.
 * - Sources disagree on blinds or curtains in Josie's room in Part Five, so the
 *   guide names neither.
 * - Nothing printed says Melania calls Mr Capaldi "a creep", or that Klara
 *   weakens while the Cootings Machine smokes; both were removed.
 * - The novel does not state that lifting killed Sal. Josie's illness is caused
 *   by it (Pearson, and the Mother's own words); for Sal the guide says only
 *   that she was lifted too, and died, and that Paul then saw the risk.
 * - "Three years after" the 2018 gene-edited babies was wrong for a 2021 novel.
 * - Exam questions now use Pearson's own closing instruction, checked against
 *   the May 2024 4ET1 paper: "You must consider the context of the novel".
 *
 * FOURTH PASS, 26 September 2026, an adversarial check. Every quotation stands,
 * with its speaker and part confirmed in context; the bargain in the barn and
 * "The interior was filled with orange light." now have second verbatim sources
 * (Holistic English; the Mookse and the Gripes and Fathom). What changed:
 * - "segments of irregular shapes" was taken out of quotation marks. Its only
 *   source was a GradeSaver analysis paragraph, and GradeSaver's analysis
 *   paragraphs misquote elsewhere ("present a side" for the novel's "prepare a
 *   side"), so one such source is not enough.
 * - Order: Paul confesses his fear about Capaldi at the lot, after they find
 *   the Cootings Machine, not before; the timeline had it the other way round.
 * - The bull is on the walk up to Morgan's Falls, not on the drive.
 * - The Mother's words are "After Sal, he said we shouldn't risk it"; the guide
 *   no longer adds "because they knew the risk", which is a summary's gloss.
 * - "the Mother's certainty" was wrong: in the studio she says "Maybe Paul's
 *   right", so the relationship note now says she half admits his doubts.
 * - Smaller corrections: Josie sends a picture, not a note; the Mother's stare
 *   lasts "one second"; Atlas Brookings takes "a small number", as the second
 *   pass decided, not "a tiny share"; Pearson recommends the March 2022 Faber
 *   edition without calling it a paperback.
 */
export const guide: StudyGuide = {
  slug: 'klara-and-the-sun',
  title: 'Klara and the Sun',
  author: 'Kazuo Ishiguro',
  form: 'novel',
  scope:
    'The whole novel (2021), in six parts. It is set for the modern prose section of Pearson Edexcel International GCSE English Literature, which is a closed-book examination: you answer one essay question from a choice of two, without the novel in front of you.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Kazuo Ishiguro 2021. Published in the UK by Faber & Faber and in the US by Alfred A. Knopf. Short quotations are used for the purposes of criticism and review.',
  },
  workLength: {
    words: 85000,
    basis:
      'Estimated, not counted: no licensed copy is held to count. The Faber first edition runs to 307 pages, and at roughly 280 words a page the novel is in the region of 85,000 words. Any length above 3,000 words puts it under the long-work limit, so the estimate cannot loosen the quotation limits.',
  },

  overview: {
    summary: [
      "Klara is an AF, an Artificial Friend: a solar-powered companion built for children. In Part One she waits in a city store with another AF, Rosa, and, unlike Rosa, watches everything outside the window: taxis, office workers, Beggar Man and his dog, and above all the Sun, whom she calls “he” and who gives her “nourishment”. A pale, thin girl called Josie talks to her through the glass and promises to come back. After a long wait she finally does, and her mother tests Klara by asking her to copy Josie's walk before buying her.",
      "In the family's house in the countryside Klara slowly learns what the reader learns with her. Josie has been “lifted”, genetically edited to do well academically, and it has made her seriously ill; her older sister, Sal, who was lifted too, has died. Rick, the boy next door and Josie's closest friend, has not been lifted and faces a narrower future. The Mother's plan is darker still: the “portrait” Mr Capaldi is making of Josie is an AF body, and Klara is meant to continue Josie if she dies. Klara, sure that the Sun once revived Beggar Man, goes to Mr McBain's barn, where she believes the Sun rests, to ask for help. She offers a bargain, destroys a polluting Cootings Machine with the help of Josie's father at a cost to herself, and pleads again. On a dark morning the Sun breaks through into Josie's room, and Josie recovers.",
      'Years pass quickly in Part Six. Josie grows up and leaves for college, Rick follows his own path, and Klara is placed in the Yard for her “slow fade”, where the Manager from the store finds her. The novel is a quiet dystopia about gene editing, automation and inequality, but it is also a fable about love and loneliness, told by a narrator who sees more than she understands. The strongest answers keep two things in view at once: what Klara tells us, and what we can see around her. Ishiguro never confirms whether the Sun healed Josie, and a good essay argues about that rather than settling it.',
    ],
  },

  context: [
    {
      heading: 'Kazuo Ishiguro',
      body: 'Kazuo Ishiguro was born in Nagasaki, Japan, on 8 November 1954. When he was five the family moved to Guildford in Surrey, where his father, a research oceanographer, had been invited to work for the British government; they expected to stay two years at most and never went back. He studied English and philosophy at the University of Kent and creative writing at the University of East Anglia. The Remains of the Day won the Booker Prize in 1989, Never Let Me Go followed in 2005, and in 2017 he was awarded the Nobel Prize in Literature for “novels of great emotional force”. Klara and the Sun is his eighth novel and his first since the Nobel. He told the Guardian that he drew on his father, a man of scientific brilliance who could be childlike about other things, in creating Klara.',
    },
    {
      heading: 'Publication, and its place on the specification',
      body: "The novel was published on 2 March 2021 by Faber & Faber in the UK and Alfred A. Knopf in the US, and was longlisted for the 2021 Booker Prize. It is dedicated to Ishiguro's mother, Shizuko, who had died two years earlier; he has said she had a huge amount to do with his becoming a writer, and the Guardian's interviewer described the novel as in part about maternal devotion. Pearson added it to the International GCSE modern prose list for first teaching in September 2024, with first assessment in May 2026. Because the paper is closed-book, no edition is prescribed; Pearson recommends the Faber edition of March 2022, but students use many editions, so this guide locates every moment by part and scene rather than by page number.",
    },
    {
      heading: 'A children’s story that grew up',
      body: 'Ishiguro told the Guardian that the novel began as a story he made up for his daughter, Naomi, when she was small, and that he first imagined it as an illustrated book for children. When he ran the idea past her, she told him that young children would be traumatised by it, so he wrote it for adults instead. He described the novel as a visit to “children’s storyland”, and the shape shows: a faithful companion, a Sun who can be prayed to, a quest across the fields, a bargain and a sacrifice. He has said he hopes it will be read as “a cheerful, optimistic novel”. Reading it as a fairy tale set inside a frightening world explains both its warmth and its chill.',
    },
    {
      heading: 'Gene editing and artificial intelligence',
      body: "The novel's two technologies were real questions in the years it was written. In November 2018 the Chinese scientist He Jiankui announced that he had created the first genetically edited babies, twin girls, and Chinese authorities suspended his research; in 2020 Emmanuelle Charpentier and Jennifer Doudna won the Nobel Prize in Chemistry for the CRISPR/Cas9 gene-editing tool. Ishiguro told the Washington Post he had been immersed in reading and talking about artificial intelligence and gene technology for years, and that he saw both great promise, particularly in health care, and great danger. The novel never explains how lifting works. It shows instead what the choice does: to Josie's body, to the Mother's conscience, and to children like Rick who were not lifted.",
    },
    {
      heading: 'Work, class and substitution',
      body: "In Klara's world machines have replaced many workers. Josie's father, Paul, was an engineer until he was “substituted”, and he now lives in a community of former professionals in the city, which Miss Helen accuses of fascism because its members are all white and are arming themselves against other groups. Atlas Brookings, the college Rick hopes for, does not require its students to be lifted, but it takes only a small number who are not. Pearson's own guidance links this to societies today in which access to education and opportunity is unequal. The divisions are mostly glimpsed in the background, in a party, a lunch, a crowd outside a theatre, which is exactly how a narrator who is not looking for them would see them.",
    },
    {
      heading: 'Loneliness, screens and 2021',
      body: 'Lifted children in the novel are taught at home by tutors on a screen device the novel calls an “oblong”, and meet other children mainly at organised gatherings, such as the “interaction meeting” Josie has to host. Parents who can afford it buy them AFs. The novel appeared in March 2021, during the Covid-19 pandemic, when many children were being taught at home by screen; Ishiguro told the Washington Post that year that, like everybody, he had been missing company. The novel does not refer to the pandemic, but Pearson’s Getting Started Guide notes the parallels with home-schooling and with the isolation many characters feel. Loneliness is the problem the AFs exist to solve, which makes it the novel’s central subject.',
    },
    {
      heading: "Ishiguro's narrators, and Never Let Me Go",
      body: "Ishiguro is known for first-person narrators who serve others, speak with restraint and do not fully understand their own situation: the butler Stevens in The Remains of the Day and Kathy, a clone, in Never Let Me Go. Reviewers placed Klara in that line. Anne Enright in the Guardian noted that the novel shares Never Let Me Go's themes of replication and authenticity, and The Economist called it a cross between the two earlier books. Knowing this helps with one of the novel's key methods: the gap between what the narrator says and what the reader can work out.",
    },
    {
      heading: 'Science fiction, dystopia and fable',
      body: "Pearson describes the novel as both dystopian and science fiction, and as a Bildungsroman, a novel of growing up, tracing the moral growth of both Klara and Josie. It is unusual science fiction, though. There is no robot rebellion, no great reveal, and the technology is described through the eyes of someone who takes it for granted. Pearson describes the setting as an unknown future in an unknown place, though reviewers such as Rumaan Alam in the New Republic noted clues that it is the United States, and Ishiguro gives only the detail Klara would notice. Many critics found that restraint the book's power; others, such as the reviewer in Cherwell, found its treatment of gene editing too vague. Either view can be argued, provided it is supported.",
    },
  ],

  themes: [
    {
      title: 'Loneliness',
      body: "AFs exist to keep children from loneliness, and almost everyone in the novel is lonely: Josie, schooled on a screen; the Mother, working and grieving; Miss Helen, alone with Rick; Paul, cut off by his lost work; even the Manager, who visits the Yard years later. Klara first reads human behaviour through this lens, telling Rick of the cruel lifted children that “They fear loneliness and that's why they behave as they do.” Then Miss Helen, who wants Rick to leave her for college, teaches her that humans can choose loneliness for someone else's sake. The ending asks the hardest version of the question: Klara, alone in the Yard, seems content, and the reader must decide whether that is peace or the saddest loneliness in the book.",
    },
    {
      title: 'What makes a person unique',
      body: "This is the novel's central argument, and Ishiguro stages it as a debate. Mr Capaldi says the belief in “something unreachable inside each of us” is an old-fashioned feeling that science has disproved. Paul fears he may be right but asks Klara whether she believes in the human heart. Klara, who could in theory become Josie, is the test case. Her final verdict in the Yard, that what was special “wasn't inside Josie. It was inside those who loved her”, moves uniqueness from inside the individual to the relationships around them. The most convincing reading is that Ishiguro refuses Capaldi's view without simply taking Paul's. A strong answer also asks what that answer means for Klara herself, and whether anyone loves her in that way.",
    },
    {
      title: 'Faith, hope and the Sun',
      body: "Klara is solar-powered, so for her the Sun really is the source of life, and she builds a religion on it: he is “he”, he gives “special nourishment”, and he can be asked for help. She prays to him in Mr McBain's barn, makes a bargain, makes a sacrifice and pleads again. When the Sun pours into Josie's room in Part Five and Josie recovers, the novel lets both explanations stand: a miracle, or coincidence noticed by a machine that sees patterns. One reading is that Ishiguro gently mocks faith as a misunderstanding; the more convincing one is that he honours it, since Klara's hope keeps her acting when the adults have given up, and hope itself is presented as something that, in Paul's words, never leaves people alone.",
    },
    {
      title: 'A divided society',
      body: "Lifting divides children into winners and losers before they can choose. At Josie's interaction meeting the adults pity Rick because his mother did not go ahead, and the children question him until he withdraws. Atlas Brookings admits only a small number of unlifted students, and Vance, who chairs its Founders' Committee, turns Rick's interview into a settling of old scores with his mother. Adults are divided too: Paul's community of substituted professionals is arming itself, and a woman outside a theatre resents AFs, beginning “First they take the jobs.” Ishiguro keeps these divisions at the edge of Klara's vision, which suggests that the comfortable can live beside injustice without seeing it.",
    },
    {
      title: 'Technology and the disposable',
      body: "The novel's machines are not threats but servants, and that is what makes them troubling. AFs are sold, upgraded and replaced: the newer B3s arrive while Klara is still in the store, and AFs out on the street hurry past its window without looking, afraid, Klara guesses, of being thrown away and replaced. Klara is loved, then moved to a utility room, then to the Yard among other discarded machines. Miss Helen's joke about whether to treat her as a guest or a vacuum cleaner names the problem exactly. Ishiguro suggests that a society which treats a being capable of devotion as an appliance has confused usefulness with worth, and the substitution of workers like Paul shows the same logic applied to people.",
    },
    {
      title: 'Parents, children and sacrifice',
      body: "Every parent in the novel makes a gamble on a child's behalf. The Mother lifted both daughters for the chance of a full life and lost one; her plan to continue Josie is love and grief turned into something frightening. Miss Helen did not lift Rick, and admits she regrets it, yet works to send him away from her. Paul opposed lifting Josie after Sal and lives apart from his family. Klara's own sacrifice, giving up part of herself to destroy the Cootings Machine, mirrors theirs, and Josie's message to her mother, passed on by Rick in Part Five, is the novel's answer to parental guilt. Ishiguro is not asking whether the parents were right, but whether love can forgive a choice that cannot be undone.",
    },
    {
      title: 'Growing up and letting go',
      body: "Pearson calls the novel a Bildungsroman, and it tracks two kinds of growing up. Josie moves from a sick fourteen-year-old to a young woman leaving for college, and she and Rick let go of their childhood plan to be together. Rick insists their love was real at the time, even though their lives now separate. Klara grows too, learning in stages that people change, perform, choose loneliness and mix pain with happiness. The ending is the letting go of Klara herself. What might have been tragic is narrated calmly, which invites the question of whether Klara's acceptance is wisdom or simply what she was built for.",
    },
  ],

  characters: [
    {
      name: 'Klara',
      role: 'The narrator: a solar-powered Artificial Friend, a B2 model, bought as a companion for Josie',
      body: "Klara is unusually observant, and the Manager praises her “appetite for observing and learning” to Josie's mother. She is curious, polite, precise and devoted, and she reasons from what she sees, which makes her both perceptive and naive: she concludes from the sunsets she watches from Josie's window that the Sun rests in Mr McBain's barn. She is also capable of action. She makes a bargain with the Sun, gives up some of her own P-E-G Nine fluid to destroy a Cootings Machine, and refuses to be discouraged when the adults despair. One reading sees her as the most humane character in the book; another sees a perfect servant whose goodness shows how little the humans give back. The best answers hold both, and notice that the novel never settles whether her feelings are real.",
    },
    {
      name: 'Josie',
      role: 'The girl Klara is bought for; lifted, gifted and seriously ill',
      body: 'Klara estimates her age at fourteen and a half when she first appears at the store window, pale, thin and walking with care. She is warm and funny, and honest with Klara about being ill, but she can also be cruel under pressure: at the interaction meeting, when a guest says she should have chosen a newer B3, she agrees, and she needles Rick about his mother until he stops visiting. She draws constantly and plays the bubble game with Rick. One night in Part Three Klara sees her crying to her mother that she does not want to die. After her recovery she grows up quickly and leaves for college, gently telling Klara she may not be there when she returns. She is the centre everyone circles, yet the novel shows her mostly from outside.',
    },
    {
      name: 'The Mother',
      role: 'Josie’s mother, Chrissie Arthur; a busy professional who works long hours',
      body: "Klara first sees in her face “a kind of angry exhaustion”, and the novel slowly explains it. She chose to have both her daughters lifted; her older daughter, Sal, died, and Josie is now seriously ill, which the Mother admits in Part Four was caused by the lifting. Terrified of losing Josie, she has commissioned Mr Capaldi's “portrait”, and she tests Klara from the start, asking her to copy Josie's walk in the store and to be Josie at Morgan's Falls. In Part Four she asks Klara to continue Josie; in Part Five she lashes out at Rick. Yet it is she who, in Part Six, stops Mr Capaldi taking Klara away for research. She is the novel's most divided character, and whether she is sympathetic or frightening depends on which of her choices a reader weighs most.",
    },
    {
      name: 'The Father',
      role: 'Paul, Josie’s father; an engineer who has been “substituted”',
      body: "Separated from the Mother, he lives in the city among other former professionals, a community Miss Helen accuses of fascism. He loves Josie openly, is cold to Klara at first, dislikes the portrait project, and, the Mother tells Klara, argued after Sal that they should not risk lifting Josie. In Part Four he asks Klara whether she believes in the human heart, confesses that he hates Mr Capaldi because he suspects he may be right, and helps Klara destroy the Cootings Machine without understanding why. His rational engineer's mind and his love for his daughter pull in different directions, and that tension is the novel's own.",
    },
    {
      name: 'Rick',
      role: 'The boy next door; Josie’s closest friend; not lifted',
      body: "Clever and practical, he builds and flies drone birds, but because his mother did not have him lifted his chances are narrow, and the lifted children and their parents make that plain at the interaction meeting, where he steps in to protect Klara. He and Josie share a childhood “plan” to spend their lives together. He carries Klara across the fields to the barn, meets Vance to try for Atlas Brookings, and in Part Five answers the Mother's cruelty by passing on Josie's message of love. In Part Six he has his own plans and tells Klara their love was real at the time. He is kind and loyal, and a good case can be made that he is the novel's moral centre among the humans: Pearson's guidance singles out the compassion he shows both his own mother and Josie's.",
    },
    {
      name: 'Miss Helen',
      role: 'Rick’s mother; English, unwell and isolated',
      body: "She lives in a smaller, shabbier house than Josie's, no longer drives, and is unsure how to treat Klara, wondering aloud whether to treat her as a guest or a vacuum cleaner. She tells Klara she once saw Chrissie in the field holding the arm of a girl who looked like Sal, two years after Sal died, a detail explained in Part Four. She did not have Rick lifted and admits to the Mother that she regrets it, yet she works to send him away to Atlas Brookings, even humbling herself before Vance. She teaches Klara that humans can choose loneliness out of love.",
    },
    {
      name: 'Mr Capaldi',
      role: 'The “portrait” artist; in fact the maker of an AF copy of Josie',
      body: "Behind the Purple Door of his city studio is not a painting but an AF body shaped like Josie. The Mother calls him Henry. He and the Mother had made what he calls a bereavement doll after Sal died, and he insists this time will be different: Klara will not train a new Josie but become her. He is the novel's voice of scientific certainty, dismissing the belief in “something unreachable inside each of us” as sentiment. In Part Six he returns, amid a backlash against AFs, wanting to study Klara's workings, and the Mother refuses. He is not a cartoon villain; he believes he is helping, which is what makes him unsettling.",
    },
    {
      name: 'Melania Housekeeper',
      role: 'The family’s housekeeper',
      body: "Klara names her, as she names many people, by her role. At first Melania is suspicious of Klara, finds her constant presence puzzling and irritating, and in Part Three sends her outside. Before the trip to the city she takes Klara aside, tells her to watch Mr Capaldi closely and keep Josie safe, says that Sal's death changed the Mother, and makes it plain, with a threat, that she will hold Klara to it. Her hostility turns out to be fierce protectiveness, and once she sees they are on the same side she trusts Klara. She shows loyalty expressed through suspicion rather than warmth.",
    },
    {
      name: 'Manager',
      role: 'The woman who runs the AF store',
      body: 'Klara calls her simply Manager. She is kind, observant and businesslike, and she gives Klara her first lessons in human feeling: that at special moments people feel pain alongside happiness, and that children make promises they do not keep. She also reprimands Klara for putting off a customer while she waits for Josie. Years later she visits the Yard, finds Klara, and hears her final conclusions, so she frames the novel at both ends.',
    },
    {
      name: 'Rosa',
      role: 'Another AF in the store; Klara’s companion in the window',
      body: "Rosa shares the window with Klara but misses most of what Klara notices, which makes her a foil: through the contrast Ishiguro shows that Klara's gift is attention. She is bought before Klara, too excited to listen to Klara's parting advice. On the difficult walk to the barn in Part Three, a sudden picture of Rosa sitting damaged on rough ground flashes into Klara's mind, and in the Yard the Manager says that things did not go as well for Rosa as for Klara. Ishiguro leaves the reader to imagine what happened to her, which is part of the novel's quiet argument about how AFs are treated.",
    },
    {
      name: 'Vance',
      role: 'Miss Helen’s old flame; chair of the Founders’ Committee at Atlas Brookings',
      body: "Rich and influential, he agrees to meet Rick in Part Four and is impressed by his drone designs, but the interview turns into a reckoning with Miss Helen, who once treated him badly and now needs his help. He also questions Rick about his drones' surveillance capabilities, a detail Pearson links to modern worries about privacy, and he tells them that favours work best when no one admits to them. He shows how the unlifted depend on the goodwill of the powerful, and how personal history decides public chances.",
    },
    {
      name: 'The Sun',
      role: 'Not a character to anyone but Klara: her source of life, and her god',
      body: "Klara always gives the Sun a capital letter and calls him “he”. He gives “nourishment” to AFs and, she believes, special nourishment that revived Beggar Man and his dog. He dislikes Pollution, can be asked for help in his resting place, and seems to reward love, as when he poured his light on the reunion Klara watched from the window. Whether he answers her in Part Five is the novel's great open question. Writing about the Sun as a character in Klara's story, while remembering that he is only the sun to everyone else, is a way to write about her whole view of the world.",
    },
  ],

  keyQuotes: [
    {
      text: "I'd always longed to see more of the outside",
      where: 'Klara, Part One, her first morning in the store window',
      analysis:
        'This sets Klara apart from Rosa and the other AFs at once. “Longed” is an emotional verb for a machine to use of itself, and the wish to see is the start of her role as observer: the novel is built from what she sees, and the reader learns to watch for what she does not.',
    },
    {
      text: 'the Sun had ways of reaching us wherever we were',
      where: 'Klara, reporting what Boy AF Rex told her, the opening pages of Part One',
      analysis:
        "The novel's first idea about the Sun is a comfort passed between AFs, and it already sounds like faith: a promise of grace that reaches the believer anywhere. When Klara touches the Sun's pattern on the floor it fades, and Rex teases her for greed, so belief and anxiety arrive together. The line looks forward to Part Five, when the Sun reaches Josie's darkened room.",
    },
    {
      text: 'a kind of angry exhaustion in her eyes',
      where: "Klara describing Josie's mother, Part One, on Josie's first visit to the window",
      analysis:
        "Klara's hedged precision (“a kind of”) catches grief before the reader knows its cause. Anger has energy and exhaustion has none, so the pairing suggests a woman worn out by fighting something she cannot beat. It is our first clue to Sal's death, Josie's illness and the Mother's plan.",
    },
    {
      text: 'people feel a pain alongside their happiness',
      where:
        'Manager to Klara, Part One, after Klara sees the Coffee Cup Lady and Raincoat Man reunited',
      analysis:
        'The Manager teaches Klara that human feeling is mixed rather than single. The lesson returns twice: Klara offers this reunion to the Sun in Part Five as proof that he rewards love, and the ending, with Josie and Rick loving each other but parting, is itself pain alongside happiness.',
    },
    {
      text: 'The more I observe, the more feelings become available to me.',
      where: "Klara to the Mother, Part Two, driving to Morgan's Falls",
      analysis:
        "Klara is answering the Mother's remark that she envies her for having no feelings. The parallel “The more ... the more” makes feeling grow with attention, like learning. “Available” is a machine's word, as if emotions were unlocked, so the sentence is touching and unsettling at once, and it leaves open whether her feelings are real.",
    },
    {
      text: "They fear loneliness and that's why they behave as they do.",
      where: 'Klara to Rick, Part Two, after the interaction meeting',
      analysis:
        "Klara explains the lifted children's cruelty as fear, which shows both her design, since she was made to understand loneliness, and her charity. One reading takes her generosity as the novel's moral example; another finds it too simple, a lens that excuses them. Part Three tests the theory when Miss Helen chooses loneliness.",
    },
    {
      text: "Until recently, I didn't think that humans could choose loneliness.",
      where: 'Klara to Miss Helen, Part Three, at Rick’s house',
      analysis:
        "Klara revises her own theory of people. Miss Helen wants Rick to go to college even though it will leave her alone, and “choose” is the key word: a companion built to prevent loneliness meets a love that accepts it for someone else's good. The idea returns when Klara accepts her own solitude in the Yard.",
    },
    {
      text: 'Supposing I could do something special to please you.',
      where: "Klara, speaking to the Sun inside her mind in Mr McBain's barn, Part Three",
      analysis:
        "Klara's first request, that the Sun heal Josie as he healed Beggar Man, seems to fail, so she bargains. “Supposing” is the language of negotiation, and “please you” treats the Sun as a person with moods to be won over. Offering a deed for a favour is how prayer turns into a vow, and it gives the plot its task: destroy the Cootings Machine.",
    },
    {
      text: 'Or do I treat you like a vacuum cleaner?',
      where: 'Miss Helen to Klara, Part Three, meeting her for the first time',
      analysis:
        'The joke asks the question the whole society has not answered about AFs: guest or appliance. Miss Helen apologises for her manners, which shows that politeness breaks down when categories do. The line looks forward grimly to the ending, when Klara is stored in the Yard among discarded machines.',
    },
    {
      text: 'Do you believe in the human heart?',
      where: 'The Father (Paul) to Klara, Part Four, driving her through the city',
      analysis:
        "Paul asks, in what he calls the poetic sense, whether each person has something that could never be copied. Coming soon after the studio, it turns the plot into philosophy. The short, direct question also exposes Paul's own fear, since he is an engineer who half believes the answer is no.",
    },
    {
      text: 'It might be like a house with many rooms.',
      where: 'Klara to Paul, Part Four, answering his question about the heart',
      analysis:
        "Klara's metaphor is confident: a house may be large, but it is finite and can be walked through and learned, as she once had to learn the layout of Josie's house. Paul extends it into “Rooms within rooms within rooms”, an endless regress. The exchange stages the novel's argument about whether a person is a complicated but limited system.",
    },
    {
      text: 'something unreachable inside each of us',
      where: 'Mr Capaldi to the Mother, Part Four, in his studio',
      analysis:
        'Capaldi names the belief only to dismiss it: “Our generation still carry the old feelings”, he says, as if faith in the self were nostalgia. “Unreachable” is the key word, because he means science can now reach everything. The novel tests his claim to the end, and Klara finally moves the unreachable thing rather than denying it.',
    },
    {
      text: "Nothing inside Josie that's beyond the Klaras of this world to continue.",
      where: 'Mr Capaldi to the Mother, Part Four, in his studio',
      analysis:
        "“The Klaras of this world” turns Klara into a product line at the very moment Capaldi claims she can become a unique girl. “Continue” is the novel's most chilling euphemism, since it disguises replacement as survival. The sentence's blunt negative leaves no room for mystery, which is exactly what Paul and Klara go on to question.",
    },
    {
      text: 'I think I hate Capaldi because deep down I suspect he may be right.',
      where: 'The Father (Paul) to Klara, Part Four, before they destroy the Cootings Machine',
      analysis:
        'Paul hates Capaldi not for being wrong but for possibly being right, so the line is fear rather than conviction. As a man replaced at work by machines, he has personal reasons to dread the idea that people are replaceable too. His honesty makes him the most self-aware adult in the novel.',
    },
    {
      text: 'she loves you and will always love you',
      where: "Rick, passing on Josie's message to the Mother, Part Five",
      analysis:
        "Rick answers the Mother's taunt with the forgiveness Josie asked him to carry. “Always” defies the fear of death, and the message releases the Mother from her guilt about lifting. Moments later the Sun breaks through, so the novel places love and light side by side, and the reader must decide whether that is cause or coincidence.",
    },
    {
      text: 'proved as effective for Josie as it had for Beggar Man',
      where: "Klara, at the start of Part Six, on the Sun's special nourishment",
      analysis:
        "Klara states the miracle as plain fact, in the calm past tense of a report. That certainty is hers, not the novel's: the novel never confirms it, and Rick later admits he had thought the whole business was “AF superstition”, though he is no longer sure. The line is the best evidence that the reader, not the narrator, has to decide what healed Josie.",
    },
    {
      text: 'deserves her slow fade',
      where: 'The Mother to Mr Capaldi, Part Six',
      analysis:
        'The Mother refuses to let Capaldi take Klara away to be studied. “Slow fade” is a gentle phrase for a machine running down, and “deserves” makes it sound like a reward for service. It is a kindness, but a limited one: after all Klara has done for Josie, her reward is a quiet end among scrap.',
    },
    {
      text: "it wasn't inside Josie. It was inside those who loved her",
      where: 'Klara to the Manager, Part Six, in the Yard',
      analysis:
        "This is Klara's answer to Capaldi and to Paul. The repeated “inside” moves uniqueness from the individual to the people who love her, which is why Klara now believes she could never have continued Josie. One critical reading finds it doubly sad, because the moral leaves Klara herself outside the circle of love she describes.",
    },
    {
      text: 'I have my memories to go through and place in the right order',
      where: 'Klara, Part Six, in the Yard',
      analysis:
        "The line reveals what the whole narration may be: Klara in the Yard, ordering her memories. “The right order” suggests she is shaping a story, not simply recording one, so her account may be kinder than events were. It is the novel's last reminder to read around its narrator as well as through her.",
    },
  ],

  extracts: [
    {
      title: 'Josie at the window',
      where: 'Part One, Klara and Rosa’s fourth morning in the store window',
      pointer:
        'From “It was almost midway through our fourth morning in the window” to the moment Josie, walking away with her mother, “gave me one last wave”.',
      summary:
        'A taxi pulls up, and a pale, thin girl walks carefully to the glass while two adults go on talking in the back seat. Josie talks to Klara through the window: she saw her yesterday from a passing taxi, and that is why she asked her mother to stop here today. She tells Klara that from her bedroom you can see exactly where the Sun goes down. When the adults climb out, the Mother turns towards the window and, for a second, turns her piercing stare on Klara. Josie promises to come back soon, the Mother comes to stand behind her and leads her away, and Josie looks back to wave once more.',
      annotations: [
        {
          phrase: 'I estimated her age as fourteen and a half',
          note: "Klara measures before she feels. The oddly exact estimate is a machine's habit, and it makes her first sight of Josie tender and slightly comic at once.",
        },
        {
          phrase: 'The exact place he goes to at night.',
          note: "Josie plants the idea that grows into Klara's religion. Klara will look for the Sun's resting place from Josie's window and find it in Mr McBain's barn, so a child's casual remark shapes the whole plot.",
        },
        {
          phrase: 'a kind of angry exhaustion in her eyes',
          note: 'The first description of the Mother holds her grief and fear in a single phrase, long before the reader learns about Sal or the portrait.',
        },
        {
          phrase: 'the outstretched arm hesitated in the air, almost retracting',
          note: 'Klara notices a gesture no one else would. The Mother nearly withdraws from touching her own daughter, a hint of a love already braced for loss. Klara records it without interpreting it, and the reader does the work.',
        },
        {
          phrase: "You won't go away, right?",
          note: "Josie's anxious question reverses the usual power of buyer and product: the child fears being left. It also prepares for the Manager's warning that children make promises all the time.",
        },
      ],
      question:
        'How does Ishiguro introduce Josie and the Mother in this scene, and how does it prepare for their relationship with Klara in the rest of the novel?',
    },
    {
      title: "Klara's first visit to Mr McBain's barn",
      where: 'Part Three, the same evening Klara takes Josie’s picture to Rick',
      pointer:
        'From Klara setting out alone across the fields towards the barn at sunset to her walking back out into the dark, where Rick has waited for her.',
      summary:
        'Klara sets out across the fields alone at sunset and soon struggles; Rick, who has seen her from his house, carries her the rest of the way, then leaves her to go in alone. The barn is only half built, and Klara realises the Sun does not literally sleep there, though she decides it is the last place he visits each evening. Sitting on a folding chair, she speaks to the Sun inside her mind, asking him to heal Josie as she believes he healed Beggar Man, while her view of the barn breaks into irregular segments. When she senses that he cannot yet see Josie separately from the humans whose Pollution has angered him, she offers a bargain: she will find and destroy the Cootings Machine. Rick is waiting for her in the dark.',
      annotations: [
        {
          phrase: 'The interior was filled with orange light.',
          note: 'The barn becomes a sacred space, lit like a church at sunset. Ishiguro gives Klara the setting of a religious vision without ever saying the word.',
        },
        {
          phrase: 'particles of hay drifting in the air',
          note: 'Ordinary farm dust is made beautiful by Klara’s attention, and the sentence goes on to compare it to evening insects. The calm detail slows the scene into a moment of prayer, in contrast with her difficult journey through the fields.',
        },
        {
          phrase: 'I suddenly felt foolish to have come to this place',
          note: 'Faith meets doubt at once. Klara imagines the Sun refusing her, and her response is not to give up but to bargain, which is the turning point of the plot.',
        },
        {
          phrase: 'Supposing I could do something special to please you.',
          note: 'The prayer becomes a bargain. Klara speaks to the Sun silently, as a believer might, but reasons like a trader, offering a deed in exchange for a cure.',
        },
      ],
      question:
        "How does Ishiguro present Klara's faith in the Sun in this scene and elsewhere in the novel?",
    },
    {
      title: "Paul's question about the human heart",
      where: 'Part Four, in Paul’s car, after the visit to Mr Capaldi’s studio',
      pointer:
        'Paul offers to drive Klara to see her old store; the passage runs from his question “Do you believe in the human heart?” to Klara’s reply that a heart, however complex, “must be limited”.',
      summary:
        'Driving through the city, Paul asks Klara whether she believes in the human heart in the poetic sense: something that makes each person special, which she would have to learn fully to become Josie. Klara answers that it might be the hardest part of Josie to learn, but that a devoted AF could learn it in time. Paul imagines a heart in which every room opens onto another without end. Klara replies that a heart may be complex but cannot be infinite.',
      annotations: [
        {
          phrase: 'Do you believe in the human heart?',
          note: "Paul's question uses the language of faith, “believe”, for something science claims to have explained. It turns the argument at Capaldi's studio into a personal test for Klara.",
        },
        {
          phrase: 'It might be like a house with many rooms.',
          note: 'Klara thinks in spaces she has learned: the store, the Open Plan, the house. Her metaphor makes a person large but knowable, which is exactly what Capaldi has promised the Mother.',
        },
        {
          phrase: 'Rooms within rooms within rooms.',
          note: "Paul's triple repetition turns Klara's house into an endless regress. The rhythm itself enacts the idea that you could search a person for ever and never reach the end.",
        },
        {
          phrase: 'But it must be limited.',
          note: "Klara's short, logical reply shows her machine confidence, and it is the belief she abandons by the end, when she admits something would always have stayed beyond her reach.",
        },
      ],
      question:
        'How does Ishiguro use Paul and Mr Capaldi to explore whether one person could ever replace another?',
    },
    {
      title: 'The Manager in the Yard',
      where: 'Part Six, the final scene of the novel',
      pointer:
        "From the Manager's arrival in the Yard, where Klara sits among discarded machines, to the novel's close, as the Manager walks away.",
      summary:
        "Years after the store, the Manager comes to the Yard, where old machines are kept, and finds Klara. They talk about Klara's life with Josie and about Rosa, whose life the Manager suggests went less well. Klara explains that she had been ready to continue Josie, but now believes she could never have reached what the people who loved Josie felt for her. She adds that the Sun was always kind to her. Then the Manager walks away across the Yard.",
      annotations: [
        {
          phrase: 'something beyond my reach',
          note: "Klara admits a limit. The phrase answers Capaldi's claim that nothing in Josie was unreachable, and quietly reverses her own confidence in Paul's car.",
        },
        {
          phrase: "it wasn't inside Josie. It was inside those who loved her",
          note: "The novel's answer to its central question, given by the one character who could have tested it. The parallel sentences move what is special from the person to the love around her.",
        },
        {
          phrase: 'The Sun was very kind to me.',
          note: 'Klara ends not with complaint but with gratitude. Some readers find that moving, others troubling, because a being thrown away still thanks the world that used her.',
        },
      ],
      question:
        'How does Ishiguro use the ending of the novel to answer the questions it has raised about love and what makes a person unique?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'A naive first-person narrator and dramatic irony',
      example:
        'Klara concludes from Josie’s window that the Sun sleeps in Mr McBain’s barn, and from one morning in Part One that he revived Beggar Man and his dog with special nourishment.',
      effect:
        'The reader sees more than the narrator does, so her mistakes are both comic and moving. Anne Enright called this distance the opposite of irony: compassion. It also makes the reader an active investigator, piecing together lifting, the portrait and Sal from details Klara reports without understanding.',
    },
    {
      technique: 'Personification of the Sun',
      example:
        'From the first pages Klara writes of “the Sun on his journey” and “the Sun and his kindness to us”, always with a capital letter and a masculine pronoun.',
      effect:
        'Personification turns a star into a character and a god, and it shows how Klara builds meaning from what keeps her alive. The capital letter is a small, constant signal of worship, so the reader absorbs her faith long before she prays.',
    },
    {
      technique: 'Naming by role and capitalised common nouns',
      example:
        'Klara calls people Melania Housekeeper, Beggar Man, Coffee Cup Lady and Manager, and names the Cootings Machine after the letters on its side; she writes Pollution with a capital.',
      effect:
        'The names show a mind that sorts the world into categories, like labels on a shelf. They are touching, because they make strangers into characters, and slightly eerie, because they remind us Klara is not human. Capitalising Pollution turns a condition into an enemy, which helps explain why she believes destroying one machine could please the Sun.',
    },
    {
      technique: 'Fragmented perception: the boxes',
      example:
        'At the interaction meeting the crowded room divides, in Klara’s sight, into separate boxes, and three boys sitting apart on the sofa have their heads placed together inside a single box; in the barn in Part Three her view breaks up again, not into the usual boxes but into irregular segments.',
      effect:
        "Klara's vision breaks up under social or emotional strain, so Ishiguro shows her stress through form rather than feeling words. The effect defamiliarises ordinary scenes, making a teenage party look as strange and threatening as it feels to an outsider.",
    },
    {
      technique: 'Euphemism and invented vocabulary',
      example:
        'The novel’s society speaks of children being “lifted”, workers being “substituted”, an AF’s decline as a “slow fade”, and a replacement body as a “portrait” in which Klara would “continue Josie”.',
      effect:
        "Each soft word hides a hard reality: gene editing, unemployment, obsolescence, a copy of a dying child. Ishiguro never explains them, so the reader meets them as Klara does, and the gradual discovery of what they mean is one of the novel's chills. It is also a comment on how a society talks itself into accepting what it does.",
    },
    {
      technique: 'Extended metaphor',
      example:
        'In Part Four Klara compares the heart to “a house with many rooms”, and Paul extends it to “Rooms within rooms within rooms”.',
      effect:
        "A single image carries the novel's philosophical argument in concrete form, so the question of whether a person is finite becomes a question of whether a house has an end. Students can use it to show how Ishiguro makes abstract ideas physical.",
    },
    {
      technique: 'Similes drawn from the store',
      example:
        'After the interaction meeting Klara decides that people prepare a side of themselves to show others, “as they might in a store window”.',
      effect:
        "Klara understands people through the only world she knew first, the store. The simile is revealing both ways: it shows her limited frame of reference, and it suggests that humans, too, display themselves like goods, which is a quiet criticism of the lifted children's performance.",
    },
    {
      technique: 'Formal, precise and understated diction',
      example:
        'Klara estimates ages to the half-year, speaks politely even to those who mistreat her, and at times addresses people in the third person: in the car in Part Four she speaks to Paul as “Mr Paul” even while answering him directly.',
      effect:
        "The restraint is Ishiguro's signature, and here it also fits a machine. Because Klara rarely names an emotion, the reader feels the emotions she does not name: the understatement of her last conversation with the Manager is more painful than open grief would be.",
    },
    {
      technique: 'Light, weather and pathetic fallacy',
      example:
        "The Cootings Machine's smoke blots out the Sun for days in Part One; in Part Five an unusually dark morning gives way to sunlight flooding Josie's room.",
      effect:
        "Weather follows the moral drama, so darkness accompanies despair and light arrives with Rick's message of love. Because the narrator believes the Sun acts deliberately, pathetic fallacy becomes plot, and the reader must decide whether the light means anything beyond itself.",
    },
  ],

  structureForm: [
    {
      heading: 'Six parts, and a circle from store to Yard',
      body: 'The novel is divided into six parts, each made of many unnamed sections. Pearson notes its slightly circular shape: Part One is set in the store, where Klara is new and learning from the Manager, and Part Six ends in the Yard, where she is fading and the Manager finds her again. The middle four parts move between the country house and the city. The shape follows a life from new to discarded, and the return of the Manager makes the ending feel like a closing of accounts.',
    },
    {
      heading: 'A retrospective narration, ordered by memory',
      body: "Klara tells the story afterwards: in the opening pages she comments on what she understands “Today, of course”, and in Part Six she says she has her memories to go through and place in the right order. So the whole novel may be that act of ordering, told from the Yard. This matters for interpretation. Critics such as Yiqun Xiao argue that Klara arranges her memories to see herself as a successful AF, which means her calm account of the adults' kindness may be kinder than the events were.",
    },
    {
      heading: 'Withheld information and gradual revelation',
      body: "Ishiguro reveals the world only as Klara meets it. What “lifted” means, why Josie is ill, who Sal was, why the Mother tests Klara, and what the portrait really is all arrive late and indirectly, through overheard conversations and Miss Helen's odd memory of a girl who looked like Sal. The structure makes the reader a detective, and each revelation recasts earlier scenes: the walk in the store and the day at Morgan's Falls can be reread as rehearsals.",
    },
    {
      heading: 'The spine of the plot: three appeals to the Sun',
      body: 'The story is organised around Klara’s bargain. In Part Three she prays in the barn and promises to destroy the Cootings Machine; in Part Four she does so, giving up part of herself, and then sees a new machine on the drive home; in Part Five she returns to the barn to plead for Rick and Josie’s love, and the Sun breaks through. This is the structure of a quest or a fairy tale, with its promise, sacrifice, apparent failure and reward, laid over a realistic story of illness. It is how the novel keeps both explanations of Josie’s recovery open.',
    },
    {
      heading: 'Pace and time',
      body: "The pace is uneven by design. Part Four covers only a day, a night and a drive home, but holds the novel's greatest revelations, while Part Six passes over years in a few pages as Josie grows up and away. The compression of the ending mirrors Klara's diminishing place in the family: when she matters less, less is told.",
    },
    {
      heading: 'Genre: dystopia, science fiction, Bildungsroman and fable',
      body: 'Pearson describes the novel as dystopian science fiction and as a Bildungsroman. It also works as a fable, which fits Ishiguro’s account of its origin as a children’s story. The genres pull against each other: the dystopia is bleak, with pollution, inequality and armed communities, while the fable promises that faith and love will be rewarded. The ending gives the fable its reward, Josie lives, and the dystopia its truth, Klara is discarded, which is why the novel can be read as both hopeful and sad.',
    },
  ],

  vocabulary: [
    {
      term: 'AF',
      definition:
        'Artificial Friend: a solar-powered humanoid companion bought for children, especially lonely ones.',
    },
    {
      term: 'B2 and B3',
      definition:
        'Models of AF. Klara is a B2; the newer B3s arrive while she is still in the store, and several customers, including at first the Mother, would rather have one.',
    },
    {
      term: 'Lifted',
      definition:
        'Genetically edited as a child to boost academic ability. Lifting gives children a path to college but carries a serious risk: it has made Josie ill, and her sister Sal, who was lifted too, died.',
    },
    {
      term: 'Unlifted',
      definition:
        'Not genetically edited, like Rick. Unlifted children have far fewer chances; Atlas Brookings admits only a small number of them.',
    },
    {
      term: 'Substituted',
      definition:
        'Replaced at work by machines. Josie’s father, Paul, an engineer, has been substituted.',
    },
    {
      term: 'Oblong',
      definition:
        'The novel’s word for the screen device on which Josie and other lifted children take lessons from tutors.',
    },
    {
      term: 'Interaction meeting',
      definition:
        'An organised gathering where home-schooled lifted children practise socialising. Josie hosts one in Part Two.',
    },
    {
      term: 'High-rank',
      definition:
        'Klara’s word for people whose clothes and manner show wealth and status: the Mother first arrives in high-rank office clothes.',
    },
    {
      term: 'The Cootings Machine',
      definition:
        'A construction machine, named by Klara after the letters on its side, whose smoke blots out the Sun. Klara sees it as Pollution itself.',
    },
    {
      term: 'P-E-G Nine',
      definition:
        'A fluid inside Klara that can damage machines. Paul believes she can spare some of it, and she gives it up so that he can disable the Cootings Machine.',
    },
    {
      term: 'The portrait',
      definition:
        'What the family calls Mr Capaldi’s work on Josie. It is in fact an AF body built to look like her.',
    },
    {
      term: 'Continue',
      definition:
        'The novel’s euphemism for Klara taking Josie’s place: inhabiting the new body and becoming Josie if Josie dies.',
    },
    {
      term: 'Bereavement doll',
      definition:
        'Mr Capaldi’s term for the copy of Sal he and the Mother made after her death. The Mother says it did not work.',
    },
    {
      term: 'Slow fade',
      definition:
        'The gradual running down of an old AF. The Mother insists Klara deserves one rather than being taken apart for research.',
    },
    {
      term: 'The Yard',
      definition:
        'The place where discarded machines, including old AFs, are kept. Klara narrates from there.',
    },
    {
      term: 'The plan',
      definition:
        'Josie and Rick’s childhood idea of spending their lives together, which fades as their paths divide.',
    },
    {
      term: 'The bubble game',
      definition:
        'Josie draws figures with empty speech bubbles and Rick fills in their words. In Part Three it turns from play into a weapon.',
    },
    {
      term: 'Naive narrator',
      definition:
        'A narrator who reports events accurately but does not fully understand them, so the reader grasps more than the narrator does.',
    },
    {
      term: 'Bildungsroman',
      definition:
        'A novel of growing up and moral development. Pearson reads the novel as one for both Klara and Josie.',
    },
    {
      term: 'Dystopia',
      definition:
        'An imagined society that is worse than our own, often as a warning. Here the warning is quiet: gene editing, automation, pollution and inequality.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Explore how Ishiguro presents loneliness in Klara and the Sun. You must consider the context of the novel in your answer.',
        skill:
          'Whole-text essay: close knowledge of the novel, informed personal response and context',
        guidance: [
          'Open with a clear argument, for example: Ishiguro presents loneliness as the problem his whole society is organised around, and one that its technology cannot solve.',
          'Start with the premise: AFs exist to prevent loneliness, and lifted children learn on screens and meet only at interaction meetings. Link this to the context of screen schooling and isolation in 2021, which Pearson itself notes.',
          'Use the interaction meeting in Part Two and Klara’s view of the cruel children: “They fear loneliness and that’s why they behave as they do.” Say whether you find her explanation convincing.',
          'Show the theme developing through Miss Helen in Part Three, who teaches Klara that humans can choose loneliness for someone else’s sake.',
          'Widen to the adults: the Mother’s grief and fear, Paul living apart, Miss Helen alone, the Manager visiting the Yard.',
          'End with Klara in the Yard. Is her contentment peace, or the loneliest image in the book? Give your own judgement and a reason.',
        ],
      },
      {
        question:
          '“It was inside those who loved her.” (Klara) Discuss the idea that one person could be replaced by another in the novel. You must consider the context of the novel in your answer.',
        skill:
          'Whole-text essay: close knowledge of the novel, informed personal response and context',
        guidance: [
          'State your view early: for example, that the novel sets up the idea of replacement in order to reject it, but places what cannot be replaced somewhere surprising.',
          'Trace the build-up: the Mother’s tests in the store and at Morgan’s Falls, Miss Helen’s memory of a girl who looked like Sal, and the Purple Door in Part Four.',
          'Analyse Mr Capaldi’s certainty, his dismissal of “something unreachable inside each of us”, and the euphemism of “continue”.',
          'Set Paul against him: his question about the human heart, the rooms within rooms, and his fear that Capaldi may be right.',
          'Bring in context: real gene editing (He Jiankui in 2018, CRISPR’s Nobel Prize in 2020) and artificial intelligence, which Ishiguro said he had been reading and talking about for years.',
          'Use the ending: Klara’s verdict in the Yard that what was special “wasn’t inside Josie. It was inside those who loved her.” Decide whether that is the novel’s answer or only Klara’s.',
        ],
      },
      {
        question:
          'How is the Sun important in Klara and the Sun? You must consider the context of the novel in your answer.',
        skill:
          'Whole-text essay: close knowledge of the novel, informed personal response and context',
        guidance: [
          'Begin with Klara’s nature: she is solar-powered, so the Sun is literally her source of life, and from the first page she gives him a capital letter and calls him “he”.',
          'Explain how her faith forms in Part One: Rex’s reassurance, the revival of Beggar Man and his dog, and the Sun pouring his light on the reunited couple.',
          'Analyse the three appeals: the first visit to the barn in Part Three, the destruction of the Cootings Machine in Part Four, and the second visit in Part Five.',
          'Discuss the recovery in Part Five: the dark morning, Rick’s message, and the light in Josie’s room. Weigh the miracle reading against coincidence.',
          'Consider what the Sun represents beyond Klara: hope, goodness, nature damaged by Pollution, and the religious instinct itself.',
          'Bring in context at that point: Pearson reads the Sun and the Cootings Machine as a comment on how technology and city life damage the environment, and a newer machine replaces the one Klara destroys.',
          'Conclude on what Klara tells the Manager about the Sun in the Yard, and say whether Ishiguro wants us to share her faith or pity it.',
        ],
      },
      {
        question:
          'Explore how Ishiguro presents parents and the choices they make for their children. You must consider the context of the novel in your answer.',
        skill:
          'Whole-text essay: close knowledge of the novel, informed personal response and context',
        guidance: [
          'Frame the essay around gambles: every parent in the novel makes a choice on a child’s behalf that cannot be undone.',
          'Analyse the Mother: lifting both daughters, losing Sal, the portrait, and her attack on Rick in Part Five.',
          'Compare Miss Helen, who did not lift Rick, regrets it, and yet works to send him away, and Paul, who opposed lifting Josie and lives apart.',
          'Use Rick’s message from Josie in Part Five as the novel’s response to parental guilt, and comment on its timing.',
          'Link to context: parents today competing for their children’s advantage, and the ethics of gene editing.',
          'Consider Klara as a parent figure too, and end with a judgement about whether the novel condemns or forgives these parents.',
        ],
      },
    ],
    tips: [
      'The modern prose paper is closed-book, so learn a bank of short quotations, five to ten words each, for every major character and theme. Quoting a phrase exactly is worth more than paraphrasing a long speech.',
      'Anchor evidence by part and scene rather than page, because editions differ: a reference to Part Four, in Paul’s car, is precise and checkable in any copy.',
      'Keep Klara’s view and the reader’s view apart. The strongest answers point out what Klara reports but misreads, such as the barn, the Beggar Man, or the Mother’s tests.',
      'Context has to be used, not listed. Tie gene editing to lifting, automation to Paul’s substitution, and screen schooling to the interaction meeting, at the moment each appears in your argument.',
      'Do not settle whether the Sun healed Josie. The strongest answers weigh the miracle reading against coincidence and explain why Ishiguro leaves it open.',
      'Use the minor adults. Miss Helen, Paul, Vance and Melania carry most of the novel’s social context, and answers that mention only Klara and Josie miss it.',
      'Use the ending. Klara’s conclusions in the Yard answer the arguments of Part Four, so almost any essay on identity, love or technology can finish there.',
      'Use the novel’s own words. Klara is an AF, not a robot, and children are lifted, not engineered; writing in the novel’s vocabulary is a small, constant sign of close reading.',
      'Know what this section rewards. The modern prose essay is marked for knowledge of the whole novel, a personal argument and context, not for naming techniques, so mention a technique only when it moves your argument forward.',
      'In the closed-book exam no passage is printed, though a question may open with a short quotation for you to discuss. Learn the key passages below as moments you can describe precisely, with two or three short phrases from each, rather than as extracts to annotate.',
      'Plan your time. Recent papers advise spending 45 minutes on the modern prose section, which leaves room for five minutes of planning: an argument, four or five moments from across the six parts, and where context fits into each.',
    ],
  },

  modelAnswer: {
    question:
      '“It was inside those who loved her.” (Klara) Discuss the idea that one person could be replaced by another in the novel. You must consider the context of the novel in your answer.',
    paragraph:
      "Ishiguro builds this question into an argument between the adults, and he gives the final word to the one character who could have tested it. Mr Capaldi is certain: he dismisses the belief in “something unreachable inside each of us” as a feeling his generation cannot let go of, and insists there is “Nothing inside Josie that's beyond the Klaras of this world to continue.” The phrase “the Klaras of this world” gives him away, because it turns Klara into a product line at the very moment he claims she can become a unique girl. Paul, an engineer who has himself been “substituted” by machines, puts the question in human terms, “Do you believe in the human heart?”, and his image of “Rooms within rooms within rooms” suggests a person cannot be mapped the way a house can. Published in 2021, not long after the first gene-edited babies were announced in 2018, the novel makes the debate urgent rather than abstract. Yet the answer comes from Klara in the Yard: what was special “wasn't inside Josie. It was inside those who loved her.” The most convincing reading is that Ishiguro rejects Capaldi without simply agreeing with Paul, since he places uniqueness not in a hidden part of the self but in relationships, which no copy could inherit.",
    commentary: [
      'It opens with an argument about method, the debate between the adults and the final word given to Klara, rather than a plot summary.',
      'Every quotation is short, exact and analysed: the paragraph picks out “the Klaras of this world” and explains what the phrase reveals about Capaldi.',
      'It moves across the whole novel, from Part Four in the studio and the car to Part Six in the Yard, which shows the close knowledge a whole-text essay needs.',
      'Context is woven into the argument at the point it matters, through Paul’s substitution and the real gene-editing controversy of 2018, not bolted on at the end.',
      'The final sentence makes a personal judgement between readings and gives a reason, which is what lifts an answer from competent to strong.',
    ],
  },

  timeline: [
    {
      where: 'Part One, the store window',
      title: 'Waiting in the window',
      summary:
        'Klara and Rosa take their turn in the store window. Klara soaks up the Sun’s nourishment and, unlike Rosa, studies everything outside: the RPO Building, the taxis, office workers, and Beggar Man and his dog.',
      setting: 'An AF store on a busy city street, opposite the RPO Building',
      who: ['Klara', 'Rosa', 'Manager', 'The Sun'],
      quote: "I'd always longed to see more of the outside",
      themes: ['Faith, hope and the Sun', 'Loneliness'],
      tension: 1,
      significance:
        'Klara is established as an observer, and her faith in the Sun is born in the first pages.',
    },
    {
      where: 'Part One, Josie at the glass',
      title: 'Josie chooses Klara',
      summary:
        'On the fourth morning a pale, thin girl called Josie talks to Klara through the window, tells her you can see exactly where the Sun goes down from her room, and promises to return. Her mother gives Klara a piercing stare.',
      setting: 'The pavement in front of the store window, beside a waiting taxi',
      who: ['Josie', 'Klara', 'The Mother'],
      quote: 'The exact place he goes to at night.',
      themes: ['Loneliness', 'Faith, hope and the Sun'],
      tension: 2,
      significance:
        'Josie plants the idea of the Sun’s resting place, and the Mother’s look is the first hint of her plan.',
    },
    {
      where: 'Part One, the Cootings Machine and Beggar Man',
      title: 'Pollution and a revival',
      summary:
        'A Cootings Machine pours out smoke for four days, darkening the street and unsettling the AFs. The Manager reprimands Klara for putting off a customer and warns her about children’s promises. Later Klara sees Beggar Man and his dog lying still all day, and next morning finds them alive in the sunlight.',
      setting: 'The store and the street outside, darkened and then bright',
      who: ['Klara', 'Manager', 'The Sun'],
      quote: 'Children make promises all the time.',
      themes: ['Faith, hope and the Sun', 'Technology and the disposable'],
      tension: 3,
      significance:
        'Klara concludes that the Sun heals and that Pollution is his enemy, the two beliefs that drive the plot.',
    },
    {
      where: 'Part One, the rear alcove',
      title: 'Bought, and tested',
      summary:
        'Josie returns and searches the store for Klara. The Mother is wary of an older model, but the Manager praises Klara’s powers of observation. The Mother questions Klara about Josie and asks her to copy Josie’s walk, then buys her.',
      setting: 'The rear alcove of the store, where Klara has been moved',
      who: ['Josie', 'The Mother', 'Klara', 'Manager'],
      quote: 'appetite for observing and learning',
      themes: ['What makes a person unique', 'Parents, children and sacrifice'],
      tension: 2,
      significance:
        'The walking test looks odd now and chilling later: the Mother is already assessing whether Klara could become Josie.',
    },
    {
      where: 'Part Two, the interaction meeting',
      title: 'The interaction meeting',
      summary:
        'Lifted children gather at Josie’s house. The adults pity Rick, two boys want to throw Klara to test her, and when someone says Josie should have chosen a B3, Josie agrees. Rick intervenes, and afterwards Klara tells him the children act out of fear.',
      setting: 'The Open Plan of Josie’s house in the countryside',
      who: ['Josie', 'Rick', 'Klara', 'The Mother'],
      quote: "Now I'm starting to think I should have",
      themes: ['A divided society', 'Loneliness', 'Growing up and letting go'],
      tension: 3,
      significance:
        'The social divide between lifted and unlifted becomes visible, and Klara learns that people change in company.',
    },
    {
      where: "Part Two, Morgan's Falls",
      title: "Morgan's Falls",
      summary:
        'Josie is too ill to go on the promised trip, so the Mother takes Klara alone. In the car she says she envies Klara for having no feelings; at the waterfall she asks Klara to sit and speak as Josie, then abruptly stops her.',
      setting:
        'A drive through the countryside, then a walk up to a waterfall past a bull in a field',
      who: ['The Mother', 'Klara'],
      quote: 'The more I observe, the more feelings become available to me.',
      themes: ['What makes a person unique', 'Parents, children and sacrifice'],
      tension: 4,
      significance:
        'The Mother’s rehearsal of Josie’s replacement, though the reader does not yet know it, and the start of a coldness from Josie.',
    },
    {
      where: "Part Three, Rick's house",
      title: 'A picture for Rick, and Miss Helen',
      summary:
        'After the bubble game turns bitter and Rick stops visiting, Klara carries Josie’s peace-making picture to him. Miss Helen tells her she once saw Chrissie in the field holding the arm of a girl who looked like Sal, two years after Sal died.',
      setting: 'Rick and Miss Helen’s smaller, shabbier house across the field',
      who: ['Klara', 'Rick', 'Miss Helen', 'Josie'],
      quote: 'Or do I treat you like a vacuum cleaner?',
      themes: ['Loneliness', 'A divided society', 'Technology and the disposable'],
      tension: 3,
      significance:
        'Miss Helen teaches Klara that humans can choose loneliness, and drops a clue to the portrait.',
    },
    {
      where: "Part Three, Mr McBain's barn",
      title: 'The bargain with the Sun',
      summary:
        'Klara sets out across the fields at sunset, and Rick carries her the last part of the way. Alone in the half-built barn, she silently begs the Sun to heal Josie as he healed Beggar Man, and offers in return to find and destroy the Cootings Machine.',
      setting: 'A half-built barn at the edge of the fields, lit orange by the setting Sun',
      who: ['Klara', 'Rick', 'The Sun'],
      quote: 'The interior was filled with orange light.',
      themes: ['Faith, hope and the Sun', 'Parents, children and sacrifice'],
      tension: 4,
      significance:
        'Klara becomes an actor in the story rather than an observer, and makes the promise that shapes Part Four.',
    },
    {
      where: "Part Four, Mr Capaldi's studio",
      title: 'Behind the Purple Door',
      summary:
        'In the city, Klara slips behind the Purple Door and finds an AF body made to look like Josie. Mr Capaldi and the Mother explain that Klara is not to train a new Josie but to become her if Josie dies.',
      setting: 'Mr Capaldi’s bright, white studio in the city',
      who: ['Klara', 'The Mother', 'Mr Capaldi', 'The Father', 'Josie'],
      quote: "The second Josie won't be a copy.",
      themes: [
        'What makes a person unique',
        'Parents, children and sacrifice',
        'Technology and the disposable',
      ],
      tension: 5,
      significance:
        'The novel’s central secret is revealed, and every earlier test of Klara makes sense.',
    },
    {
      where: 'Part Four, the Cootings Machine',
      title: 'The heart, and the sacrifice',
      summary:
        'Paul drives Klara through the city and asks whether she believes in the human heart. When they find the Cootings Machine in a lot, he admits he fears Capaldi is right, and Klara gives up some of her P-E-G Nine solution so Paul can disable it.',
      setting: 'Paul’s car, the city streets, and the lot where the machine stands',
      who: ['Klara', 'The Father'],
      quote: 'Damn thing never leaves you alone.',
      themes: [
        'What makes a person unique',
        'Faith, hope and the Sun',
        'Parents, children and sacrifice',
      ],
      tension: 4,
      significance:
        'Klara keeps her promise to the Sun at a cost to herself, and the novel’s philosophical debate is voiced.',
    },
    {
      where: 'Part Four, the theatre and the diner',
      title: 'Vance',
      summary:
        'Outside a theatre a woman resents Klara’s presence. In a diner Vance admires Rick’s drone designs, then turns on Miss Helen over their past. Driving home, Klara sees a new Cootings Machine at work and feels she has failed.',
      setting: 'A crowded street outside a theatre, a diner, and the road home',
      who: ['Rick', 'Miss Helen', 'Vance', 'Klara'],
      quote: 'First they take the jobs.',
      themes: ['A divided society', 'Technology and the disposable'],
      tension: 3,
      significance:
        'The social divisions come into the open, and Klara’s bargain seems to have failed.',
    },
    {
      where: "Part Five, Mr McBain's barn again",
      title: 'A second plea',
      summary:
        'Josie grows weaker. Klara asks Rick whether his love for Josie is real, and he says it is. At the barn she apologises to the Sun, reminds him of the reunion he once lit, and pleads for Rick and Josie’s love.',
      setting: 'The barn at sunset, its light reflected in sheets of glass in a corner',
      who: ['Klara', 'Rick', 'The Sun'],
      themes: ['Faith, hope and the Sun', 'Growing up and letting go'],
      tension: 4,
      significance:
        'Klara bargains now with love rather than with a deed, and sees the Sun multiplied in the glass into several images with different expressions, which readers interpret in different ways.',
    },
    {
      where: 'Part Five, the dark morning',
      title: 'The Sun comes out',
      summary:
        'On a very dark day the Mother turns on Rick, telling him that, because he was not lifted, he played for low stakes and won something small. He answers with a message from Josie. Then Klara cries that the Sun is coming out and hurries everyone upstairs, where she stops Melania shutting out the light and, with Rick’s help, lets it pour in. Josie wakes feeling better.',
      setting: 'The kitchen and then Josie’s bedroom, suddenly full of light',
      who: ['The Mother', 'Rick', 'Klara', 'Josie', 'Melania Housekeeper', 'The Sun'],
      quote: 'she loves you and will always love you',
      themes: ['Faith, hope and the Sun', 'Parents, children and sacrifice'],
      tension: 5,
      significance:
        'The climax: Josie begins to recover, and the novel leaves open whether the Sun answered Klara.',
    },
    {
      where: 'Part Six, growing apart',
      title: 'Growing up and away',
      summary:
        'Josie recovers, grows up and prepares for college; Rick follows his own plans. Klara spends more time in the utility room. Mr Capaldi asks to study her, and the Mother refuses, saying Klara deserves better.',
      setting: 'The country house over several years, and its utility room',
      who: ['Josie', 'Rick', 'Klara', 'The Mother', 'Mr Capaldi'],
      quote: 'deserves her slow fade',
      themes: ['Growing up and letting go', 'Technology and the disposable'],
      tension: 2,
      significance:
        'The family no longer needs Klara, and the kindness it shows her is a kind of dismissal.',
    },
    {
      where: 'Part Six, the Yard',
      title: 'The Manager in the Yard',
      summary:
        'Klara sits among discarded machines, ordering her memories. The Manager from the store finds her, and Klara explains why she could never have continued Josie and that the Sun was always kind to her.',
      setting: 'The Yard, an orderly field of discarded machines, open to the sky',
      who: ['Klara', 'Manager'],
      quote: "it wasn't inside Josie. It was inside those who loved her",
      themes: ['What makes a person unique', 'Loneliness', 'Technology and the disposable'],
      tension: 1,
      significance:
        'The ending answers the novel’s central question and leaves Klara alone, content or abandoned depending on the reader.',
    },
  ],

  relationships: [
    {
      from: 'Klara',
      to: 'Josie',
      kind: 'companion and child',
      note: 'Klara is devoted to Josie from the window onwards. Josie loves her but can hurt her, and in the end outgrows her: a love in which only one of them is free to leave.',
    },
    {
      from: 'Klara',
      to: 'The Sun',
      kind: 'believer and god',
      note: 'Klara depends on the Sun for life and builds a faith on him, praying, bargaining and sacrificing. Whether he answers is the novel’s open question.',
    },
    {
      from: 'Josie',
      to: 'Rick',
      kind: 'childhood sweethearts',
      note: 'Their shared plan to be together is tested by lifting, by Josie’s illness and by cruelty on both sides. They part as adults, and Rick insists their love was real at the time.',
    },
    {
      from: 'The Mother',
      to: 'Josie',
      kind: 'mother and daughter',
      note: 'The Mother’s love is fierce, guilty and frightening: she lifted Josie, fears losing her as she lost Sal, and plans her replacement. Josie’s message in Part Five forgives her.',
    },
    {
      from: 'The Mother',
      to: 'Klara',
      kind: 'owner and would-be replacement daughter',
      note: 'The Mother tests Klara, confides in her, calls her honey for the first time as they arrive at Capaldi’s studio, and asks her to become Josie. In the end she protects Klara from Capaldi, yet Klara still ends her days in the Yard.',
    },
    {
      from: 'The Mother',
      to: 'The Father',
      kind: 'separated parents',
      note: 'They disagree about lifting and about the portrait, but share their love for Josie. Paul voices openly the doubts the Mother only half admits, and in Mr Capaldi’s studio she wonders aloud whether he is right.',
    },
    {
      from: 'The Mother',
      to: 'Mr Capaldi',
      kind: 'client and maker',
      note: 'Together they made Sal’s bereavement doll and are now making a new Josie. He reassures her; she cannot quite believe him, and in Part Six she turns him away.',
    },
    {
      from: 'Rick',
      to: 'Miss Helen',
      kind: 'son and mother',
      note: 'Rick will not leave his unwell mother alone, and she works to send him away to college. Their love is protective in both directions.',
    },
    {
      from: 'Miss Helen',
      to: 'Vance',
      kind: 'former partners',
      note: 'She treated him badly years ago and now must ask him to help her son. Their meeting shows how the unlifted depend on the goodwill of the powerful.',
    },
    {
      from: 'Klara',
      to: 'Rick',
      kind: 'allies',
      note: 'Rick defends Klara at the interaction meeting and carries her to the barn; Klara encourages his hopes for college. They are the two outsiders who care most about Josie.',
    },
    {
      from: 'Klara',
      to: 'The Father',
      kind: 'unlikely partners',
      note: 'Paul is cold to Klara at first, then helps her destroy the Cootings Machine without understanding why, and confides his deepest fear to her: that Capaldi may be right about his daughter.',
    },
    {
      from: 'Klara',
      to: 'Melania Housekeeper',
      kind: 'rivals, then allies',
      note: 'Melania distrusts Klara at first, then trusts her to protect Josie from Mr Capaldi, once she sees they are on the same side.',
    },
    {
      from: 'Klara',
      to: 'Manager',
      kind: 'AF and store manager',
      note: 'The Manager gives Klara her first lessons about people, and returns at the end to hear what she learned. She frames the novel.',
    },
    {
      from: 'Klara',
      to: 'Rosa',
      kind: 'fellow AFs',
      note: 'Rosa shares the window but not Klara’s curiosity, so she shows by contrast what makes Klara exceptional.',
    },
  ],

  compareWith: [
    {
      title: 'Of Mice and Men',
      href: '/revision/texts/of-mice-and-men',
      reason:
        'On the same International GCSE modern prose list: another novel about loneliness and a shared dream of the future, like Rick and Josie’s plan, that circumstances will not allow.',
    },
    {
      title: 'To Kill a Mockingbird',
      href: '/revision/texts/to-kill-a-mockingbird',
      reason:
        'Also on the modern prose list: a narrator who sees more than she understands, and a society divided by prejudice that the narrator only gradually grasps.',
    },
    {
      title: 'The Curious Incident of the Dog in the Night-time',
      href: '/revision/texts/curious-incident',
      reason:
        'A 4ET1 modern drama text, set in Simon Stephens’s stage adaptation, whose central figure reads the world literally and in patterns, as Klara does, which raises the same questions about how we judge an unusual mind.',
    },
  ],

  contentGuidance: [
    'mortality',
    'discrimination',
    'political_ideology',
    'mythological_religious',
    'intimate_relationships',
  ],

  quotesFromElsewhere: [
    'novels of great emotional force',
    'children’s storyland',
    'a cheerful, optimistic novel',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Literature, Klara and the Sun Knowledge Organiser, Issue 1, November 2024: plot by part, characters, themes and contexts',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/klara-and-the-sun-knowledge-organiser.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature (4ET1) Getting Started Guide, Issue 2, November 2024: context, themes, structure (six parts, circular shape, Bildungsroman) and part-by-part summary',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/international-gcse-english-literature-getting-started-guide.pdf',
    },
    {
      label:
        "Pearson, 'Klara and the Sun (2021) - Some links for teachers', Issue 1, November 2024",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/klara-links-for-teachers.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE in English Literature (4ET1) Specification, Issue 3, August 2025: modern prose is a closed-book essay, one question from a choice of two; recommended edition Faber & Faber, March 2022, ISBN 9780571364909',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        "NPR, 'Exclusive First Read', 20 February 2021: the publisher's excerpt of Josie's first visit to the window (Part One), source of the extract pointer and its annotated phrases",
      url: 'https://www.npr.org/2021/02/20/969109591/exclusive-1st-read-klara-and-the-sun-by-kazuo-ishiguro',
    },
    {
      label:
        "Bookreporter, excerpt from the opening of Part One (Knopf): the Sun's nourishment, Boy AF Rex, the window",
      url: 'https://www.bookreporter.com/reviews/klara-and-the-sun/excerpt',
    },
    {
      label: 'CBS News, book excerpt from Part One (Knopf): the first morning in the window',
      url: 'https://www.cbsnews.com/news/book-excerpt-klara-and-the-sun-by-kazuo-ishiguro/',
    },
    {
      label:
        "Anne Enright, 'Klara and the Sun by Kazuo Ishiguro review - what it is to be human', the Guardian, 25 February 2021: quotations on feelings, the Manager's lesson, special nourishment",
      url: 'https://www.theguardian.com/books/2021/feb/25/klara-and-the-sun-by-kazuo-ishiguro-review-what-it-is-to-be-human',
    },
    {
      label:
        "Lisa Allardice, 'Kazuo Ishiguro: AI, gene-editing, big data ... I worry we are not in control of these things any more', the Guardian, 20 February 2021: the novel's origin as a children's story, the dedication, his father, children's storyland",
      url: 'https://www.theguardian.com/books/2021/feb/20/kazuo-ishiguro-klara-and-the-sun-interview',
    },
    {
      label:
        'St Albert Public Library book club kit (recommended in Pearson’s teacher links), reprinting Rumaan Alam (New Republic), Maureen Corrigan (NPR) and a Washington Post interview with Ishiguro: quotations from Parts Two to Six, the barn’s orange light and hay, “The Sun was very kind to me.”, clues that the setting is the United States, and Ishiguro on AI, gene technology, health care and missing company in the pandemic',
      url: 'https://www.sapl.ca/book-club-kits/kit-manuals/Klara-and-the-Sun.pdf',
    },
    {
      label:
        'Washington Independent Review of Books review: the human-heart conversation takes place in the Father’s car as they search for the machine; Klara addresses characters in the third person',
      url: 'https://www.washingtonindependentreviewofbooks.com/bookreview/klara-and-the-sun-a-novel',
    },
    {
      label: 'The Spearhead Magazine review: Paul’s rooms-within-rooms speech',
      url: 'https://thespearheadmagazine.com/a-dazzling-dystopian-novel-klara-and-the-sun-review/',
    },
    {
      label:
        'GradeSaver study guide, part-by-part summaries, quotations with page references, imagery and metaphor pages: used to check plot and quotations, and agreeing with the reviews wherever they overlap',
      url: 'https://www.gradesaver.com/klara-and-the-sun/study-guide/summary',
    },
    {
      label:
        'The Bibliofile, Klara and the Sun chapter-by-chapter summary (recommended in Pearson’s teacher links): plot checks, and the woman in the theatre crowd who says “First they take the jobs”',
      url: 'https://the-bibliofile.com/klara-and-the-sun-analysis-chapter-summary/',
    },
    {
      label:
        'Digital Gloss, “The Impact of Humanoid Robots on Work and Class Divisions in Kazuo Ishiguro’s Klara and the Sun”, July 2021: a second source for the theatre remark and its speaker, a woman standing nearby',
      url: 'https://digitalgloss.wordpress.com/2021/07/04/the-impact-of-humanoid-robots-on-work-and-class-divisions-in-kazuo-ishiguros-klara-and-the-sun/',
    },
    {
      label:
        'B.J. Lewis, “The Faith of Androids: Kazuo Ishiguro’s Klara and the Sun”, Dappled Things: third pass, a second source for “The Sun was very kind to me.” and “I have my memories to go through and place in the right order”, both spoken in the Yard',
      url: 'https://www.dappledthings.org/reviews/the-faith-of-androids-kazuo-ishiguros-klara-and-the-sun',
    },
    {
      label:
        'The Booker Prizes, reading guide to Klara and the Sun: reprints Radhika Jones’s New York Times review quoting “I have my memories to go through and place in the right order”',
      url: 'https://thebookerprizes.com/the-booker-library/features/reading-guide-klara-and-the-sun-by-kazuo-ishiguro',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature 4ET1/01 question paper, May 2024: the wording of modern prose questions (“You must consider the context of the novel in your answer”, sometimes after a short quotation) and the advice to spend 45 minutes on the section',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20240514.pdf',
    },
    {
      label:
        'Rie Kido Askew, review essay on Klara and the Sun (Faber, 2021), Ritsumeikan: used for plot only, because its quotation of Mr Capaldi differs from three other sources',
      url: 'https://www.ritsumei.ac.jp/acd/re/ssrc/result/memoirs/kiyou43/43-05.pdf',
    },
    {
      label:
        'Goodreads quotations pages for the novel (pages 1 to 3): used to corroborate wording found elsewhere, and the only printed source for “something beyond my reach”',
      url: 'https://www.goodreads.com/work/quotes/84460796-klara-and-the-sun',
    },
    {
      label:
        'Luke Smith, Kindle Notes & Highlights for Klara and the Sun on Goodreads, pages 1 to 6: verbatim highlights exported from the ebook with locations, used in the second pass to confirm wording and order in Parts Two, Four, Five and Six (the heart conversation, Capaldi’s speech, Rick’s message, “deserves her slow fade”, the Sun’s special nourishment, the Yard)',
      url: 'https://www.goodreads.com/notes/61251919-klara-and-the-sun/163429311-luke-smith',
    },
    {
      label:
        'Jo Rawlins, Kindle Notes & Highlights for Klara and the Sun on Goodreads: the Morgan’s Falls exchange and the heart question',
      url: 'https://www.goodreads.com/notes/61251919-klara-and-the-sun/97006652-jo-rawlins/7239ec42-640e-41e7-a724-62c97e44ee92',
    },
    {
      label:
        'GradeSaver, Part One to Parts Five and Six summaries, Imagery and Character List: the barn passage with page references (orange light, hay, feeling foolish, the bargain), Sal as the older daughter, and critics Yiqun Xiao and Katie Fitzpatrick on the ending',
      url: 'https://www.gradesaver.com/klara-and-the-sun/study-guide/summary-part-three',
    },
    {
      label:
        'Holistic English, “Klara and the Sun”, quotations with page references: used only as a second source for the wording of Klara’s bargain in the barn (“Supposing I could do something special to please you.”); its plot summary is unreliable and was not used',
      url: 'https://www.holistic-english.com/post/klara-and-the-sun',
    },
    {
      label:
        'The Mookse and the Gripes review (March 2021) and Fathom Magazine, “Robot’s Progress”: both quote the opening of the first barn scene, confirming “The interior was filled with orange light.” and the hay',
      url: 'https://mookseandgripes.com/reviews/2021/03/11/kazuo-ishiguro-klara-and-the-sun/',
    },
    {
      label:
        'Diary of an Autodidact, review of Klara and the Sun, December 2021: corroborates the heart conversation and Capaldi’s speech',
      url: 'http://fiddlrts.blogspot.com/2021/12/klara-and-sun-by-kazuo-ishiguro.html',
    },
    {
      label:
        'Wikipedia, Klara and the Sun: publication date, publishers, the 307-page hardback used for the length estimate, Booker longlist, Sal as the older sister, the Economist’s comparison, Cherwell’s criticism of the vague gene editing, and the NYT review quotation of Klara ordering her memories (corroborated by Yiqun Xiao’s quotation of “in the right order”, via GradeSaver)',
      url: 'https://en.wikipedia.org/wiki/Klara_and_the_Sun',
    },
    {
      label:
        'NobelPrize.org, Kazuo Ishiguro facts and biographical pages: birth, move to Guildford at five, father, education, prize motivation',
      url: 'https://www.nobelprize.org/prizes/literature/2017/ishiguro/facts/',
    },
    {
      label:
        'NobelPrize.org, Kazuo Ishiguro biographical: the family settled in Guildford expecting to stay in England two years at most, and never returned; English and philosophy at Kent, creative writing at UEA; the 1989 Booker',
      url: 'https://www.nobelprize.org/prizes/literature/2017/ishiguro/biographical/',
    },
    {
      label:
        'The Booker Prizes, Klara and the Sun: longlisted 2021, published by Faber & Faber on 2 March 2021',
      url: 'https://thebookerprizes.com/the-booker-library/books/klara-and-the-sun',
    },
    {
      label: 'NobelPrize.org, press release for the 2020 Nobel Prize in Chemistry (CRISPR/Cas9)',
      url: 'https://www.nobelprize.org/prizes/chemistry/2020/press-release/',
    },
    {
      label:
        'Wikipedia, He Jiankui affair: the November 2018 announcement of genetically edited twin girls',
      url: 'https://en.wikipedia.org/wiki/He_Jiankui_affair',
    },
  ],
}
