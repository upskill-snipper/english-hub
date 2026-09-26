import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Oranges are not the Only Fruit, Jeanette Winterson (1985). A complete guide:
 * the text had no guide anywhere before this file, only the catch-all set-text
 * page.
 *
 * IN COPYRIGHT, AND NO EDITION IS HELD, so nothing here could be checked against
 * a full copy of the novel. Google Books could not be searched from here (the
 * API quota was exhausted) and the Internet Archive copies are lending-only.
 * Every quotation was therefore taken from a document that prints the novel's
 * own words:
 * - the publisher's extract of the opening of Genesis on penguin.co.uk;
 * - the Eduqas Component 2 question papers for June 2017, 2018, 2019, 2023, 2024
 *   and 2025 and the specimen paper, each of which prints a passage of about a
 *   page;
 * - AQA's A-level unseen-extract resource, which prints the opening of
 *   Leviticus;
 * - John Mullan's two Guardian Book Club essays (October 2007), for two lines.
 *
 * CHAPTER PLACINGS. The exam papers do not say where their passages come from.
 * Each was placed by matching it against two independent chapter-by-chapter
 * summaries, LitCharts (archived copies) and SparkNotes (archived copies), which
 * agree on every placing used here: the specimen passage and the 2017 and 2018
 * passages are in Exodus; the AQA passage opens Leviticus; the 2025 passage is
 * in Numbers; the 2019 and 2023 passages are in Joshua; the 2024 passage ends
 * Judges. The Penguin extract is the opening of Genesis.
 *
 * TWO-SOURCE CHECKS. "She was a carrying case" (2023 paper, LitCharts,
 * SparkNotes); "To the pure all things are pure" and "fallen under Satan's
 * spell" (2019 paper and Mullan); "a waxwork" (2019 paper and examiners'
 * report); the mince, the 'H' and "I hated her" (2025 paper and examiners'
 * report); "hard and white", "another morning" and "havin' demons" (2024 paper
 * and report); "That walls should fall..." (Mullan and LitCharts, both Joshua);
 * "very few human relationships will match up to it" (LitCharts, Ruth, and Jay
 * Ruud); "She had never heard of mixed feelings..." (Penguin and SparkNotes).
 *
 * THE 2024 EXAMINERS' REPORT MISQUOTES ITS OWN PAPER: it gives "I breezed in
 * with more bravado than courage" and "I knew I had to be hard and white". The
 * paper prints "I breezed in to my mother with more bravado than courage" and
 * "For now, I had to be hard and white." The paper's wording is used.
 *
 * WHERE SOURCES DISAGREED, the guide says less: whether women in general or
 * Jeanette alone are barred from preaching in Judges (LitCharts says all
 * women); whether the mental-hospital job is in the town or the city; whether
 * Melanie was pregnant or pushing a pram when Jeanette last sees her; whether
 * the mother at the end is broadcasting or listening on her radio; and whether
 * Winterson herself was fifteen or sixteen when she fell in love with a girl
 * from her church (Wikipedia gives both), so only "left home at sixteen",
 * which SparkNotes' context page confirms, is stated.
 *
 * AUDIT, 26 September 2026. Every quoted phrase was re-matched against the
 * saved source texts and every plot fact against two summaries. Changed as a
 * result: the Exodus moments were out of reading order (the album scene comes
 * before the school sampler in both LitCharts and SparkNotes), so the opening
 * snail scene is now its own moment; "three months" of deafness (Wikipedia
 * only) was dropped; Melanie's fiancé is no longer called a soldier (LitCharts
 * only) and she is no longer said to marry, only to announce it; Mrs White at
 * Christmas "can barely breathe" (both sources) rather than being taken home
 * (LitCharts only); "some readers" was removed from the photograph reading,
 * which no source makes, and it is now offered as the guide's own possible
 * reading.
 *
 * SECOND AUDIT, 26 September 2026 (adversarial fact-check). The first audit had
 * swapped Leave Taking out of compareWith for A Taste of Honey, calling Honey
 * "on the same Eduqas list". That was backwards: the Eduqas Summer 2025
 * examiners' report says Leave Taking was assessed that year for the first
 * time, "having replaced A Taste of Honey". The older Version 4 specification
 * predates the change. Leave Taking is restored, Honey removed, and the
 * set-text registry (leave-taking with eduqas, a-taste-of-honey without) was
 * right all along. Also corrected: the AQA question's guidance, which implied
 * the drama text might have been used in Section A (a drama-and-prose
 * contextual-linking question is set only when poetry is the Section A text,
 * per the June 2022 7712/2B paper); the snail scene, where Jeanette answers her
 * mother aloud ("it's not like that at all") rather than disagreeing silently;
 * the Awful Occasion, which Joshua recalls rather than narrates in sequence;
 * the BAFTA category (drama series or serial) and "first shown" (a version was
 * screened at the London Film Festival in November 1989); the Daniel felt
 * picture, which Jeanette calls a mix-up rather than a disagreement; and the
 * page-count arithmetic in workLength. Opinions stated as fact ("the funniest
 * scene", "the cruellest line", "most defiant moment") are now framed as
 * judgements.
 *
 * AGES. "Fourteen" in Numbers rests on LitCharts and Mullan; "about seven to
 * about sixteen" on Mullan ("from the age of seven to that of 16 or so") and
 * on Pastor Finch's question in Genesis.
 *
 * NOT QUOTED, for want of a second source or a verified chapter: the mother's
 * own words about oranges at the end (SparkNotes and a review agree she says
 * oranges are not the only fruit, in a conversation about pineapple, so the
 * guide reports it without quoting); the orange demon's speech; "I miss God"
 * and the lines around it; "Time is a great deadener"; "I love you almost as
 * much as I love the Lord"; "men were something you had around the place";
 * the Judges epigraph; and Winterson's later preface on whether the novel is
 * autobiographical. The hymn in the Leviticus passage is not quoted: song
 * lyrics are never reproduced here.
 */
export const guide: StudyGuide = {
  slug: 'oranges-are-not-the-only-fruit',
  title: 'Oranges are not the Only Fruit',
  author: 'Jeanette Winterson',
  form: 'novel',
  scope:
    'The whole novel (1985). Eduqas GCSE English Literature sets it in Component 2, Section A (post-1914 prose and drama): one source-based question with a passage of about a page printed, which you answer by referring to the extract and the novel as a whole. The exam is closed book, context is not assessed in this section, and the accuracy of your spelling, punctuation and vocabulary is assessed on this question. AQA A-level English Literature A (7712) lists it as a comparative prose text for Paper 2, Option B, Texts in shared contexts: Modern times, literature from 1945 to the present day, where you compare two texts in the contextual linking section; that paper is open book, with clean copies. OCR A-level English Literature (H472) lists it for Component 02, Comparative and contextual study, under Women in Literature, where your comparative essay must include Sense and Sensibility or Mrs Dalloway. References here are to the eight named chapters, Genesis to Ruth, which are the same in every edition; page numbers differ between printings, so none are given.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Jeanette Winterson 1985. First published by Pandora Press; the current UK paperback is published by Vintage, Penguin Random House. Short quotations are used for criticism and review.',
  },
  workLength: {
    words: 50000,
    basis:
      'An estimate, not a count: no copy of the novel is held here. Penguin lists the 2014 Vintage paperback at 240 pages, and the Internet Archive scan of the 1985 Pandora first edition runs to 198 page images, covers and front matter included. At roughly 200 to 250 words a page, that is between about 40,000 and 60,000 words. Any length over 3,000 words puts the novel under the long-work limit of 400 quoted words, so the estimate does not loosen anything.',
  },

  overview: {
    summary: [
      'Jeanette has been adopted as a baby by a fiercely evangelical mother in a northern mill town on the edge of the Pennines, and brought up to be a missionary. The early chapters are comic: a mother who divides the world into friends and enemies, a father who barely speaks, a church full of forceful women, Bible quizzes, and a missionary report on the radio that decides what the family eats on Sunday. At seven Jeanette goes deaf, and the church decides she is in a state of rapture until Miss Jewsbury takes her to hospital, where her mother brings oranges and Elsie Norris brings poetry. School, forced on her by law, is where she frightens the other children with Hell.',
      'At fourteen, walking to the fish stall in a humiliating pink raincoat, she sees Melanie. Melanie joins the church, and their friendship becomes a love affair. Then, one Sunday, the two girls are denounced in front of the congregation, with Jeanette’s mother weeping beside the pastor. Melanie repents at once. Jeanette refuses: the elders pray over her all day, her mother locks her in the parlour for thirty-six hours without food, and in the dark an orange demon tells her that demons are difficult rather than evil. She pretends to repent so that she can eat, and keeps the demon.',
      'For a while she is back in the fold, preaching and teaching, until a relationship with Katy is discovered. Jeanette takes the blame, the church decides her trouble began when she was given a man’s work, and she is ordered to stop preaching. She leaves the church, and her mother puts her out of the house. The last chapter moves between a fable, Winnet Stonejar, the story of a girl brought up by a sorcerer and cast out for falling in love, and Jeanette’s life afterwards: odd jobs, Elsie’s death, a new life in a city. At Christmas she goes home, and her mother behaves as if nothing had happened.',
      'The chapters are named after the first eight books of the Bible, and fairy tales and myths keep breaking into the story, so this is not a plain life story. It is a comedy about a frightening childhood, and the comedy is how the narrator survives it. One reading makes it an attack on religion. The more convincing reading, and the one the ending supports, is that its target is the use of religion to control people: Jeanette leaves the church but never stops missing God, and her mother remains, to the last page, infuriating, absurd and hard not to love.',
    ],
  },

  context: [
    {
      heading: 'Jeanette Winterson and where the novel came from',
      body: 'Winterson was born in Manchester on 27 August 1959 and adopted in January 1960 by Constance and John William Winterson, who brought her up in Accrington, Lancashire. They were Pentecostal evangelical Christians, and she was raised in the Elim Pentecostal Church to become a missionary, writing sermons and preaching while still a child. As a teenager she fell in love with a girl from her church and was found out, and at sixteen she left home. She read English at St Catherine’s College, Oxford, from 1978 to 1981, and after theatre work in London applied for a job as an editorial assistant at Pandora Press, a feminist imprint founded in 1983, which published Oranges in 1985, when she was twenty-five. It won the Whitbread Award for a First Novel that year.',
    },
    {
      heading: 'A novel, not a memoir',
      body: 'The heroine shares the author’s first name and much of her history, and that tempts students to write about the novel as if it were Winterson’s diary. It is not. John Mullan points out that the family surname is never used and that the father hardly ever speaks, and argues that the book is a Künstlerroman: the story of an artist growing up against the beliefs of an older generation, like Joyce’s A Portrait of the Artist as a Young Man. In 2011 Winterson published a memoir of the same childhood, Why Be Happy When You Could Be Normal? It is a different book. Write about the Jeanette of the novel, who is a character shaped by choices the author made.',
    },
    {
      heading: 'Pentecostal Christianity',
      body: 'Pentecostalism is a movement within evangelical Protestant Christianity that stresses a direct, personal experience of God through baptism in the Holy Spirit, the literal truth of the Bible and the need to be born again. The Elim Pentecostal Church, the denomination Winterson grew up in, was founded in Ireland in 1915 by George Jeffreys. In the novel the church is a whole world: a tent revival where the mother was converted, visiting preachers, testimonies, healing, a Missionary Map studied every Sunday while the World Service plays on the radiogram, and a firm belief that demons are real and can live inside a person. Once you see that the congregation genuinely believes this, the exorcism in Joshua can be read as cruelty done in good faith, which is arguably more disturbing than villainy.',
    },
    {
      heading: 'A northern mill town',
      body: 'The novel’s town is never glamorous: chimneys, little shops, back-to-back houses without gardens, and, on the first page, a Labour mill town where, at election time, the mother puts a picture of the Conservative candidate in her window. Accrington, where Winterson grew up, was a centre of the cotton industry. The working-class detail is precise and funny: catalogue seconds, black peas at the fair, the market, the tripe works. It also explains the mother’s snobbery. She scorns the world but badly wants its respect, which is why she is so easily embarrassed in front of Mrs Clifton in Numbers.',
    },
    {
      heading: 'The Bible as the novel’s skeleton',
      body: 'The eight chapters take the names of the first eight books of the Bible, and each echoes its book. Genesis is Jeanette’s beginning. In Exodus she leaves her mother’s house for school. Leviticus, the book of laws, shows the mother’s rules at work. Deuteronomy, the last book of the law, becomes an essay on whether any history can be trusted. In Joshua, the book in which the walls of Jericho fall at the sound of trumpets, the wall between Jeanette and her mother falls. Judges is judgement. Ruth, in the Bible a story of a woman living loyally in a land not her own, fits Jeanette’s exile. As Mullan argues, the book the mother uses to control her daughter is the book the daughter uses to tell her story.',
    },
    {
      heading: 'Books inside the book',
      body: 'The mother’s favourite novel is Jane Eyre, which she reads aloud to Jeanette with the ending changed so that Jane marries the missionary St John Rivers instead of Rochester; Jeanette only later discovers the truth. Elsie reads her poetry in hospital, including Christina Rossetti’s Goblin Market and Yeats. The fables borrow from fairy tale and from Malory’s Arthurian legends, especially Sir Perceval and the quest for the Holy Grail. The title comes from an epigraph the novel ascribes to Nell Gwyn, the Restoration actress who began as an orange-seller in the theatre. All of this makes one point: there are more stories in the world than the mother allows.',
    },
    {
      heading: 'Being gay in late twentieth-century Britain',
      body: 'Winterson grew up in the 1960s and 1970s, and the novel was published three years before Section 28 of the Local Government Act 1988 barred local authorities in England, Scotland and Wales from promoting homosexuality, a rule that left many teachers avoiding the subject altogether. It was repealed in England and Wales only in 2003. The BBC adaptation was screened in 1990, while Section 28 was in force, and drew controversy for its lesbian scenes and its portrayal of Pentecostal faith. Winterson has objected to the novel being filed as a lesbian novel, arguing that gay experience is not only for gay readers. The novel itself never argues about the law: it simply shows love and lets the church’s reaction speak for itself.',
    },
    {
      heading: 'The 1990 television adaptation',
      body: 'Winterson adapted the novel herself as a three-part BBC Two drama, broadcast between 10 and 24 January 1990, directed by Beeban Kidron, with Charlotte Coleman as the heroine and Geraldine McEwan as her mother. It won the BAFTA for best drama series or serial. It is worth watching, but it is not the set text: the heroine is renamed Jess, the fables are left out altogether, and some episodes of the novel are cut. In the exam, write about the novel.',
    },
  ],

  themes: [
    {
      title: 'Religion and control',
      body: 'The church gives the mother a script for everything: enemies are the Devil and Next Door, school is a danger, deafness is rapture, and a daughter in love with a girl is full of demons. Religion here is a system of control, run through the family, the pulpit and the congregation, and it reaches its logical end when a teenager is locked in a dark room without food. Yet the novel is not simply anti-religious. Jeanette defends herself with scripture, “To the pure all things are pure”, insists she loves the Lord as well as Melanie, and still misses God on the last pages. The more convincing reading is that Winterson attacks the servants of God, those who use faith to police other people, rather than faith itself. An alternative reading, that the ending shows religion as something Jeanette has to outgrow completely, has to explain why she never stops missing it.',
    },
    {
      title: 'Mothers and daughters',
      body: 'The mother adopted a child to train as a missionary, and Genesis says so plainly: Jeanette was brought in as an ally in a tag match against the Rest of the World. The relationship is a mix of devotion, comedy and violence. The mother teaches her to read, tells her stories on the hill and brings oranges to her hospital bed; she also strikes her, calls her birth mother “a carrying case”, locks her in the parlour and puts her out of the house. The ending refuses a neat reconciliation: the mother greets her as if nothing had happened, and they never discuss it. The 2025 examiners’ report calls it a partial reconciliation, and the word partial matters. One reading sees the mother as the novel’s villain. The fairer one sees her as its most vivid creation, the person Jeanette must escape and the storyteller she learned from.',
    },
    {
      title: 'Love and sexuality',
      body: 'Jeanette’s love for Melanie and later for Katy is told without shame and without graphic detail: it is happiness, and for her it sits naturally beside her faith. The church names it Unnatural Passion and a demon. The novel sets up the clash early, with the two unmarried women at the paper shop, whom Jeanette is suddenly forbidden to see, and the gypsy’s prophecy that she will never marry. What makes the treatment powerful is that Jeanette is not fighting for permission to leave God; she wants both, and it is the church that insists she cannot have them. Melanie shows the other path, repenting at once and later announcing that she is to be married. The orange demon, which Jeanette chooses to keep, is the novel’s image for accepting who she is, though it warns her that the choice will be hard.',
    },
    {
      title: 'Storytelling and truth',
      body: 'Everyone in the novel tells stories: the mother’s conversion tale, Pastor Finch’s sermons, the rewritten Jane Eyre, and Jeanette’s fables of princes, sorcerers and knights. Deuteronomy turns this into an argument, claiming that every history is shaped by whoever tells it. The fables are not decoration. Each one reflects the story around it: the prince who beheads the woman who tells him the truth about perfection, the sorcerer who cannot let go of the girl he brought up. The point is subversive. If the mother’s Bible is also a story, then Jeanette has as much right as anyone to tell her own, and the whole novel is her doing it. An examiner will reward you for linking a fable to the plot beside it rather than retelling it.',
    },
    {
      title: 'Home, exile and return',
      body: 'The novel follows the shape of its Bible chapters, from a beginning, through an exodus and a conquest, to judgement and exile. Jeanette leaves the house for school, is shut out of the church, is put out of her home, is shut out of mourning Elsie, and finally leaves the town. Ruth, the last chapter, returns her home for Christmas. That return is the novel’s most interesting idea: Winnet leaves the sorcerer with an invisible thread still tied to her button, and Jeanette, too, is pulled back. Leaving home does not free you from it. One reading finds the ending bleak, because nothing has been resolved. Another, better supported by the wry, affectionate tone, is that Jeanette can now go home as a visitor who sees clearly.',
    },
    {
      title: 'Women and men',
      body: 'This is a world of women. The church is run day to day by forceful women like Jeanette’s mother, Elsie and Mrs White, while the father barely speaks and Jeanette’s dreams and overheard gossip in Numbers turn husbands into beasts. The power, though, belongs to men in the pulpit. When Jeanette is caught with Katy, the church’s explanation is that she has been doing a man’s job, and its answer is to stop her preaching; her mother agrees. The irony is sharp: the women who hold the church together accept a ruling that limits their own power. This theme is especially useful for the OCR Women in Literature topic, where it connects the novel to Austen and Woolf.',
    },
  ],

  characters: [
    {
      name: 'Jeanette',
      role: 'The narrator and heroine, followed from about seven to about sixteen',
      body: 'Clever, literal-minded and very funny, Jeanette begins as her mother’s perfect disciple, certain she is special and destined to be a missionary. She is not a natural rebel: she disagrees with the church only in small ways, as over the sermon on perfection in Leviticus, until it forces her to choose between love and God, and she refuses the choice. Her voice matters as much as her actions. The adult narrator looks back with irony but lets us hear the child’s certainty, and the fables show an imagination that is her way out. The strongest answers track her change across the novel: from obedience, through the defiance of Joshua, to the calm of the ending, where she can see her mother clearly without needing her approval.',
    },
    {
      name: 'Jeanette’s mother',
      role: 'Adoptive mother, Missionary Secretary and the novel’s dominant force; Eduqas calls her Mrs Winterson',
      body: 'The novel never uses the family surname, so the name Mrs Winterson comes from the exam board, and you can use either as long as you are consistent. She is formidable, snobbish, comic and sincere. She adopted Jeanette to raise a missionary, fights Next Door with hymns and runs her house by the missionary news. She also has a hidden past: a teaching job in Paris, her romance with Pierre, the Old Flames pages of the photograph album, and on them a picture of a woman that quietly disappears. One possible reading is that she has buried a love of her own, though the novel never says so. When threatened she uses force, striking Jeanette on the Awful Occasion, locking her in the parlour and putting her out of the house. By Ruth she is softer but unchanged. Examiners reward answers that see both the hypocrisy and the humour.',
    },
    {
      name: 'Jeanette’s father',
      role: 'A reformed gambler who hardly speaks',
      body: 'Jeanette calls him meek and says he was nice, though he did not say much. He watches the wrestling while his wife wrestles with the world, cleans the shoes on Sundays and comes down in his pyjama bottoms when Next Door gets noisy. The mother married him, reformed him and, in her own telling, converted him. Mullan notes that he never really speaks in the novel, and that silence is a choice: in this family the men are on the edge of the story, which is part of the novel’s picture of a world run by women and ruled by men.',
    },
    {
      name: 'Elsie Norris',
      role: 'An elderly church member, known as Testifying Elsie; Jeanette’s friend and mentor',
      body: 'Elsie is devout but eccentric: she chooses her Bible readings with dice, plays the organ while Jeanette works the pedals, and keeps a collage of Noah’s Ark in her house. She visits Jeanette every day in hospital with jokes, stories and poetry, and tells her there is more to the world than meets the eye. Many candidates, the 2018 examiners’ report notes, see her as a grandmother figure. She offers a faith with room for imagination, and she stands by Jeanette when the rest of the congregation turns against her. Her death in Ruth, and Jeanette’s exclusion from mourning her, cut Jeanette’s last tie to the town.',
    },
    {
      name: 'Melanie',
      role: 'Jeanette’s first love, who works on a fish stall',
      body: 'Jeanette first sees her at the fish stall in Numbers, brings her to church, where she is saved, and visits her for Bible study until their friendship becomes a love affair. When the pastor denounces them, Melanie promises at once to repent and is sent away. She goes on to university, and later comes back to announce that she is getting married. Melanie is not a villain; she is the path of conformity, showing what it costs to give in, and her easy forgetting of the past hurts Jeanette more than anger would.',
    },
    {
      name: 'Katy',
      role: 'Jeanette’s second love, met at a church mission in Blackpool',
      body: 'Katy is a convert who joins Jeanette’s Bible class, and their relationship lasts in secret until they are discovered at the church’s guest house in Morecambe. Jeanette protects her by taking all the blame, claiming she had been with Melanie. Katy matters because the relationship seems more equal and more knowing than the first, and because Jeanette’s decision to shield her shows how much she has grown: she is now the one making sacrifices, not the one being judged.',
    },
    {
      name: 'Miss Jewsbury',
      role: 'A church member, herself gay, whom the congregation quietly distrusts',
      body: 'She is the one adult who sees that the deaf seven-year-old is ill, not in rapture, and takes her to hospital. In Genesis she tells Jeanette she is being fanciful; in Joshua she warns her to keep calm before the denunciation and takes her home afterwards. That night the older woman has a sexual encounter with her, which Jeanette hates. However the novel frames it, an adult taking advantage of a distressed teenager is abuse, and the 1990 television adaptation left the episode out. Miss Jewsbury shows the cost of hiding who you are inside a hostile church.',
    },
    {
      name: 'The pastor',
      role: 'The unnamed minister who denounces, exorcises and finally judges Jeanette',
      body: 'The pastor who leads the church in Joshua and Judges is never given a name (LitCharts notes that he is not identified as Spratt or Finch), which makes him less a person than the voice of the institution. He speaks in scripture and repetition, lays a hot, heavy hand on Jeanette’s neck in front of the congregation, orders her confinement and later decides that her trouble comes from doing a man’s work. His power is total because everyone, including Jeanette’s mother, accepts it.',
    },
    {
      name: 'Pastor Finch',
      role: 'A visiting preacher obsessed with demons',
      body: 'In Genesis he preaches a terrifying sermon on possession and warns the mother that seven is a holy number but also a dangerous one, and that the best can become the worst. He is still preaching when Melanie first comes to church in Numbers. His warning comes back in Joshua, when the pastor denouncing Jeanette calls her the best become the worst, so he works as the novel’s ominous prophet.',
    },
    {
      name: 'Pastor Spratt',
      role: 'The travelling missionary who converted Jeanette’s mother',
      body: 'The mother walked into his Glory Crusade by mistake and was converted; he gave new converts pot plants, a trick from his days in advertising, and later went abroad to convert the Heathen. The mother keeps his picture by her bed. Winterson’s comic portrait of him, handsome, salesmanlike and revered, shows how much of the mother’s faith is romance.',
    },
    {
      name: 'Mrs White',
      role: 'The mother’s friend and ally in the church',
      body: 'She presses her ear to the wall when Next Door gets noisy, sings the hymn aimed at the neighbours, takes Melanie to the vestry after the denunciation and, in Ruth, is so upset by Jeanette’s presence on Christmas Eve that she can barely breathe. She is the congregation in miniature: comic, nosy and quick to judge.',
    },
    {
      name: 'Winnet Stonejar',
      role: 'The heroine of the fable that runs through Ruth',
      body: 'Winnet falls under the power of a sorcerer, lives with him so long that she believes he is her father, and is ordered to leave when she falls in love. Her name plays on the author’s, and her story is Jeanette’s retold as myth, with the genders changed: Winnet loves a boy, and her tyrant is a man. Retelling her life this way lets Jeanette say things the realistic story cannot, above all that the parent’s hold survives the parting.',
    },
    {
      name: 'The sorcerer',
      role: 'Winnet’s captor and adoptive father in the fable',
      body: 'He takes Winnet in and trains her, and when she loves someone else he orders her to leave or stay on as a goatherd. As she prepares to go he ties an invisible thread to her button so that he can always pull her back. He is the mother translated into myth, and the thread is one of the novel’s most useful images for the ending.',
    },
  ],

  keyQuotes: [
    {
      text: 'She had never heard of mixed feelings. There were friends and there were enemies.',
      where: 'Jeanette, about her mother, Genesis (the opening pages)',
      analysis:
        'Two short, flat sentences give the mother’s whole worldview in the rhythm of a rule. The comedy is in the deadpan, but it plants the novel’s central problem: a mother with no room for mixed feelings will one day have a daughter she cannot sort into either list.',
    },
    {
      text: 'I cannot recall a time when I did not know that I was special.',
      where: 'Jeanette, Genesis',
      analysis:
        'Specialness is the gift the mother gives, and it is double-edged. It means chosen for the Lord, and it sets Jeanette apart from other children. By the end she is special in a way her mother never intended, and the certainty this sentence describes is what lets her stand up to the church.',
    },
    {
      text: 'My mother said he looked like Errol Flynn, but holy.',
      where: 'Jeanette, about Pastor Spratt, Genesis',
      analysis:
        'Comparing a preacher to a Hollywood heart-throb, then adding “but holy”, exposes how much romance there is in the mother’s conversion. The afterthought is bathos, and it lets the reader see what the mother cannot: her faith began as something close to falling in love.',
    },
    {
      text: 'it’s an Abomination, it’s like saying we come from monkeys',
      where: 'Jeanette’s mother, about a radio programme on snails, the opening of Exodus',
      analysis:
        'A harmless nature programme becomes an Abomination with a capital letter, and the leap to evolution shows how the mother reads everything as an attack on faith. The capital is typical of her: she turns ordinary things into biblical categories, and Jeanette, imagining a snail family, tells her it is not like that at all, though her mother is not listening.',
    },
    {
      text: 'they called her the Jesus Belle',
      where: 'Jeanette, about her mother’s early days in the church, Exodus',
      analysis:
        'The nickname seems to play on Jezebel, the Old Testament’s most notorious wicked woman, while praising the young mother who sang in pubs to win converts. It gives her a glamorous past, and the ambiguity suits a woman who is both a saint in her own story and something more worldly.',
    },
    {
      text: 'One dice for the chapter, and one dice for the verse',
      where: 'Elsie Norris’s motto, Exodus',
      analysis:
        'Elsie chooses her Bible readings by chance, which is gently absurd and quietly radical: her faith has room for play and numbers and luck. The contrast with the mother’s rigid certainty is the point, and it explains why Elsie is the adult who can share Jeanette’s imagination.',
    },
    {
      text: 'The Heathen were a daily household preoccupation.',
      where: 'Jeanette, the opening sentence of Leviticus',
      analysis:
        'The capital H turns the neighbours into a biblical category, and the dry word preoccupation makes the mother’s crusade sound like a hobby. The sentence sets the comic tone of the chapter’s battle with Next Door, while showing a household that defines itself by who it is against.',
    },
    {
      text: 'Most sins you did quietly so as not to get caught.',
      where: 'Jeanette, as a child, Leviticus',
      analysis:
        'The child’s logic is innocent and devastating at once. She knows a word from Deuteronomy but not what it means, and her practical observation about sin exposes the adults’ secrecy. Winterson uses the young narrator’s literal mind to create dramatic irony: the reader understands more than she does.',
    },
    {
      text: 'She said he was a devil, but she still took the mince.',
      where: 'Jeanette, about her mother and the butcher who was once her sweetheart, Numbers',
      analysis:
        'A balanced sentence that turns on “but”: the moral verdict comes first and the cheap mince second. It is the novel’s hypocrisy in miniature, and the 2025 examiners’ report singles it out. The mother’s principles are real until they cost her something.',
    },
    {
      text: 'I hated her.',
      where: 'Jeanette, the end of the pink raincoat episode, Numbers',
      analysis:
        'Three words, set as their own paragraph after a page of comedy, land like a slap. Winterson lets the humour of the market run on and then stops it dead, showing the resentment under the laughter. Moments later Jeanette sees Melanie, so hatred of her mother and first love arrive together.',
    },
    {
      text: 'She was a carrying case.',
      where: 'Jeanette’s mother, about Jeanette’s birth mother, Joshua (That Awful Occasion)',
      analysis:
        'The metaphor reduces a woman to luggage, and it follows a blow. The mother’s possessiveness has no room for another mother: Jeanette was hers from the Lord, and the body that bore her was only packaging. It is arguably the cruellest line in the novel, and mother and daughter never speak of that day again.',
    },
    {
      text: 'These children of God have fallen foul of their lusts.',
      where: 'The pastor, denouncing Jeanette and Melanie in church, Joshua',
      analysis:
        'He calls them children of God and in the same breath accuses them of lust, so the phrase condemns while pretending to pity. Its repetition in his speech works like a hammer, and the public setting turns the congregation into judges. The girls are accused before they are asked anything.',
    },
    {
      text: 'To the pure all things are pure',
      where: 'Jeanette, answering the pastor, Joshua',
      analysis:
        'Jeanette answers scripture with scripture, quoting St Paul’s letter to Titus. It is one of her most defiant moments, and a clever one: she shows that she knows the Bible as well as her accusers and can read it in her own favour. The line returns later, with Katy.',
    },
    {
      text: 'That walls should fall is the consequence of blowing your own trumpet.',
      where: 'Jeanette, after her mother burns her letters, Joshua',
      analysis:
        'The chapter is named after the book in which the walls of Jericho fall at trumpet blasts, and Jeanette turns that miracle into a proverb about pride. The wall that falls is the trust between mother and daughter, and she blames it on her mother’s self-righteousness. It is biblical allusion used as a weapon.',
    },
    {
      text: 'I’m not havin’ demons here.',
      where: 'Jeanette’s mother, putting Jeanette out of the house, Judges',
      analysis:
        'The dropped g gives the mother her northern voice at her most final, and demons shows that she still sees her daughter as possessed rather than as a person. The line is almost comic in its bluntness, which the 2024 examiners’ report noted, and that makes it harder to bear.',
    },
    {
      text: 'It was not judgement day, but another morning.',
      where: 'Jeanette, on her last morning at home, the end of Judges',
      analysis:
        'Brought up to expect the end of the world, Jeanette finds that the end of her childhood feels ordinary. The sentence rejects her mother’s apocalyptic way of seeing and replaces it with something calmer and more adult. It is quietly brave: her life is not ending, only changing.',
    },
    {
      text: 'very few human relationships will match up to it',
      where: 'Jeanette, thinking about God on the hill above the town, Ruth',
      analysis:
        'Near the end Jeanette reflects that if God is your emotional model, human love will always fall short. It is the clearest sign that she has not rejected faith so much as lost its company, and it gives the novel a sad, honest ending: the church hurt her, but the longing it taught remains.',
    },
  ],

  extracts: [
    {
      title: 'The Heathen Next Door',
      where: 'Leviticus, the opening of the chapter',
      pointer:
        'The first pages of Leviticus, from “The Heathen were a daily household preoccupation” to the mother’s “who’s for a bit of dinner?” AQA prints this passage as a practice unseen extract.',
      summary:
        'One Sunday after communion, strange noises from the neighbours send Jeanette’s mother and Mrs White into a panic. Mrs White presses her ear to the wall with a wine glass, the mother declares that the neighbours are sinning, and Jeanette is sent out for ice creams. The women then play and sing a hymn so loudly that Next Door bang on the wall and shout over the yard. The mother rushes into the yard to quote scripture, finds herself facing the neighbours’ spotty eldest son, recalls a verse from Deuteronomy about boils, and runs back in to cheerfully offer everyone dinner.',
      annotations: [
        {
          phrase: 'They tormented her as only the godless can, but she had her methods.',
          note: 'The mock-heroic style casts the mother as a general in a holy war, and her methods promises comic battle. Winterson makes the religious conflict funny by giving it the language of melodrama.',
        },
        {
          phrase: 'For medicinal purposes, I mean',
          note: 'Mrs White’s hurried correction gives the game away: in a house where drink belongs to the Devil, a wine glass needs explaining, and yet the mother has wine glasses put away in her War Cupboard. The hypocrisy is shown, never stated, which is how Winterson’s satire usually works.',
        },
        {
          phrase: 'I never use these',
          note: 'The mother says it meaningfully, and Mrs White instantly agrees that neither does she. The quick denials are comic because they are unnecessary, and they show two believers keeping up appearances for each other.',
        },
        {
          phrase: 'driven mad by the Word',
          note: 'The narrator adopts her mother’s triumphant view of the hymn as a weapon, with the Word capitalised as scripture. The irony is that the neighbours are driven mad by noise, not by God.',
        },
        {
          phrase: 'her foot furious on the hard pedal',
          note: 'The piano becomes a battering ram, and furious gives the hymn the energy of an attack. Faith, in this house, is loud, physical and aimed at other people.',
        },
      ],
      question:
        'Starting with this extract, write about how Winterson uses humour to present Jeanette’s mother and her religion at different points in the novel.',
    },
    {
      title: 'Denounced in church',
      where: 'Joshua',
      pointer:
        'From “By the time we got to church, the first hymn was under way” to “I ran out on to the street, wild with distress.” Eduqas printed this passage in the June 2019 paper.',
      summary:
        'Jeanette and Melanie slip into church late and sit by Miss Jewsbury, who mysteriously tells Jeanette to keep calm. After the hymn the church falls silent: the pastor stands at the front with Jeanette’s mother weeping beside him, and the girls are brought forward. He announces that they have fallen under Satan’s spell and are full of demons. Melanie, trembling, promises to repent and is sent to the vestry. Jeanette insists that she loves both Melanie and the Lord, is told that this is impossible, and runs from the church.',
      annotations: [
        {
          phrase: 'Keep calm, keep calm',
          note: 'Miss Jewsbury’s repeated warning builds dread, because she knows what is coming and Jeanette does not. It also shows that others in the church knew in advance, which makes the ambush more calculated.',
        },
        {
          phrase: 'Everyone in the congregation looked like a waxwork.',
          note: 'The simile freezes the people who were smiling at her minutes earlier into lifeless figures. The 2019 examiners’ report noted that many candidates discussed this image: her church family has become an audience of strangers.',
        },
        {
          phrase: 'His hand was hot and heavy on my neck.',
          note: 'The alliteration of hot and heavy makes the pastor’s touch oppressive rather than pastoral. Physical control on the body mirrors the spiritual control he claims over her soul.',
        },
        {
          phrase: 'a love reserved for man and wife',
          note: 'The pastor’s phrase defines love by marriage between a man and a woman, so Jeanette’s feeling can only be a trespass. Her confused reply shows a girl who has never thought her love needed a category.',
        },
        {
          phrase: 'Then you do not love the Lord.',
          note: 'Short, quick exchanges of dialogue like this one build the sense of relentless interrogation and pressure that, the 2019 examiners’ report says, candidates often picked up. He offers a choice she refuses to accept, which is the conflict of the whole novel.',
        },
      ],
      question:
        'Using this extract as a starting point, write about how Winterson presents the church’s treatment of Jeanette at different points in the novel.',
    },
    {
      title: 'Leaving home',
      where: 'Judges, the end of the chapter',
      pointer:
        'From the mother’s “You’ll have to leave,” to the chapter’s last words, “It was not judgement day, but another morning.” Eduqas printed this passage in the June 2024 paper.',
      summary:
        'Jeanette’s mother tells her to leave because she will not have demons in the house, and pushes her out when Jeanette says she has nowhere to go. Jeanette decides to hide her feelings until it is safe, announces with forced confidence that she is moving out, and arranges to lodge with a sympathetic teacher and pay her way by driving an ice-cream van. She packs her books and Bible, dreads being made to work on a fruit stall, and on her last morning makes her bed and takes the dog for a walk.',
      annotations: [
        {
          phrase: 'all my relatives, like most relatives, were revolting',
          note: 'Even at the worst moment the narrator’s dry humour survives; the aside turns a lonely fact into a joke the reader shares. The examiners’ report picked it out as an example of the novel’s humour under pressure.',
        },
        {
          phrase: 'For now, I had to be hard and white.',
          note: 'The image of frost, hard and white, shows Jeanette freezing her feelings in order to survive, and the narrator immediately imagines the sun melting it. It is a self-portrait of a girl deliberately making herself cold.',
        },
        {
          phrase: 'with more bravado than courage',
          note: 'The adult narrator looks back honestly: the confident announcement was an act. Admitting the gap between how she sounded and how she felt makes her more sympathetic, not less.',
        },
        {
          phrase: 'Spanish Navels, Juicy Jaffas, Ripe Sevilles.',
          note: 'A list of oranges, like a market-trader’s cry, sums up everything she is escaping. Oranges have stood for her mother’s comfort all through the novel, so working on a fruit stall would mean never leaving that world.',
        },
        {
          phrase: 'I’ll go in the tripe works first.',
          note: 'Her comic resolve to take the worst job in town rather than sell oranges shows that she is choosing her own life, however humble, over a symbol of her mother’s.',
        },
      ],
      question:
        'Starting with this extract, write about how Winterson presents Jeanette’s growing independence at different points in the novel.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Bathos',
      example:
        'In Leviticus the mother rushes out to quote scripture at the neighbours, a verse from Deuteronomy about boils flashes into her mind, and she runs back in to ask “who’s for a bit of dinner?”',
      effect:
        'A sudden drop from the grand to the everyday makes the religious battle ridiculous without making the mother a monster. Winterson uses bathos again and again, and it is how she gets the reader to laugh at a childhood that was also frightening.',
    },
    {
      technique: 'Deadpan irony exposing hypocrisy',
      example:
        '“She said he was a devil, but she still took the mince” (Numbers); Mrs White’s “For medicinal purposes, I mean” (Leviticus).',
      effect:
        'The narrator never says her mother is a hypocrite; she places the principle and the practice side by side and lets the reader draw the conclusion. That restraint is sharper than an accusation and keeps the tone affectionate.',
    },
    {
      technique: 'The naive child narrator and dramatic irony',
      example:
        'In Genesis, overhearing her mother say that the paper-shop women deal in unnatural passions, Jeanette thinks “they put chemicals in their sweets”; in Leviticus, “Most sins you did quietly so as not to get caught.”',
      effect:
        'The reader understands what the child does not, so the adults’ prejudice and secrecy are exposed through her innocence. It also builds sympathy: we see how little she was told about the things she will later be punished for.',
    },
    {
      technique: 'Capitalised labels',
      example:
        'The Heathen, Next Door, the War Cupboard, That Awful Occasion, and an Abomination for a programme about snails.',
      effect:
        'Capitals turn ordinary people and events into fixed categories, the way scripture names things. They show the mother’s habit of sorting the world, and the narrator’s mock-solemn use of them keeps that habit at an ironic distance.',
    },
    {
      technique: 'Biblical allusion and register',
      example:
        '“To the pure all things are pure” (Joshua), and “That walls should fall is the consequence of blowing your own trumpet”, which turns the fall of Jericho into a proverb.',
      effect:
        'Jeanette was raised on the Bible, so it is her native language, and she uses it both to defend herself and to mock. The chapter titles do the same on a larger scale, reclaiming the mother’s book for the daughter’s story.',
    },
    {
      technique: 'Simile',
      example:
        'Her mother’s slap is “a blow that wrapped round my head like a bandage” (Joshua); boxes marked SURPLUS sit “like branded sheep” (Numbers); the congregation “looked like a waxwork” (Joshua).',
      effect:
        'The similes are homely and exact, and often unsettling. A blow compared to a bandage fuses hurt and care, which is the mother’s love in one image; the waxwork turns a church family into a frozen crowd.',
    },
    {
      technique: 'Short sentences and one-line paragraphs',
      example:
        'In the raincoat scene: “It was bright pink.” Then, after the walk to the fish stall, “I hated her.”',
      effect:
        'After long comic passages, a blunt short sentence stops the laughter and shows the feeling underneath. The rhythm of the prose, as much as its words, tells you when the novel turns serious.',
    },
    {
      technique: 'Repetition in speech',
      example:
        'Three of the pastor’s accusations begin “These children”, and he answers “I love her” with “Then you do not love the Lord.”',
      effect:
        'Repetition makes his speech sound like ritual and like an interrogation, building the pressure on the girls. Set against Jeanette’s broken replies, it shows who controls the language in that room.',
    },
    {
      technique: 'Symbolism: oranges',
      example:
        'Her mother brings a carrier bag of oranges to the hospital in Exodus; leaving home in Judges, Jeanette dreads a fruit stall of “Spanish Navels, Juicy Jaffas, Ripe Sevilles.”',
      effect:
        'Oranges are the mother’s all-purpose comfort, offered instead of attention, and they come to stand for her whole narrow world. The title answers them: there are other fruits, other lives, other ways of loving.',
    },
  ],

  structureForm: [
    {
      heading: 'Eight books of the Bible',
      body: 'Each chapter takes its name from one of the first eight books of the Bible, from Genesis to Ruth, and each echoes its book: beginnings, a departure, laws, a numbering of loves, a book of law turned into an essay, walls falling, judgement, exile. The structure is itself an argument. The book the mother uses to control her daughter becomes the frame of the daughter’s own story, so the form enacts Jeanette taking authority over the story of her life.',
    },
    {
      heading: 'A retrospective first-person narrator',
      body: 'An adult narrator tells the story of her childhood, and the novel keeps two voices in play: the child’s literal certainty and the adult’s irony. That double perspective creates much of the humour, because we see both what the child believed and what the adult now knows, and it lets Winterson show pain without self-pity. Remember that the narrator selects: we hear only her side, and the mother never gets to tell hers.',
    },
    {
      heading: 'Fables, myths and dreams',
      body: 'The realistic story is repeatedly interrupted: the princess and the hunchback in Genesis, the emperor Tetrahedron in Exodus, the prince and the perfect woman in Leviticus, a walled garden in Joshua, Sir Perceval in Judges and Ruth, and Winnet Stonejar in Ruth. Each mirrors what is happening to Jeanette. The Eduqas examiners’ reports for 2019, 2023, 2024 and 2025 all note that purposeful references to these mythic, allegorical elements marked the best answers. Use them as evidence: say what a fable shows that the realistic story does not.',
    },
    {
      heading: 'Deuteronomy: the essay in the middle',
      body: 'The fifth chapter has no plot. The narrator speaks directly to the reader about history and storytelling, arguing that every account of the past is shaped by the person telling it. Mullan finds it wordy and detached; you can argue instead that its position is deliberate. It comes just before Joshua, the novel’s crisis, and warns the reader that the painful events to come are also a story, told by one side.',
    },
    {
      heading: 'Comedy and pain side by side',
      body: 'The tone moves constantly between farce and hurt, often within a page, as in the raincoat scene, where the comedy of the market ends in hatred. The examiners’ reports praise candidates who recognise the humour, but the stronger point is what the humour does: it gives the narrator control over experiences that once controlled her. Laughing at the mother is a way of surviving her.',
    },
    {
      heading: 'A circular ending',
      body: 'The novel begins with mother and daughter by the radiogram listening to the missionary report, and ends with Jeanette at home again, watching her mother at a new radio set. The circle is not a return to the start: Jeanette now watches as a visitor, not a disciple. Winnet’s invisible thread explains the shape. You can leave, but the tie remains, and the novel ends without the reconciliation scene a reader might want.',
    },
    {
      heading: 'Coming-of-age novel and Künstlerroman',
      body: 'The novel is a bildungsroman, a story of growing up, and more precisely what Mullan calls a Künstlerroman, the growth of an artist against the beliefs of her elders. Read that way, the fables are not interruptions but the evidence of the writer Jeanette is becoming. It is also a coming-out story, and the best essays hold all three readings together rather than choosing one.',
    },
  ],

  vocabulary: [
    {
      term: 'Pentecostal',
      definition:
        'Belonging to a movement in evangelical Protestant Christianity that stresses direct experience of the Holy Spirit, healing and the literal truth of the Bible. Jeanette’s church is Pentecostal.',
    },
    {
      term: 'Evangelical',
      definition:
        'Describes Christians who stress personal conversion, being born again, the authority of the Bible and spreading the faith. The mother’s missionary work is evangelical.',
    },
    {
      term: 'Missionary',
      definition:
        'A person sent to convert others to a religion, often abroad. The mother adopts Jeanette to raise one, and follows the missionaries’ progress on the radio.',
    },
    {
      term: 'Heathen',
      definition:
        'A person who does not believe in the God of the Bible. The mother uses it, with a capital, for anyone outside the church, especially the neighbours.',
    },
    {
      term: 'Testimony',
      definition:
        'A public account in church of what God has done for you. Elsie is known as Testifying Elsie, and after the exorcism Jeanette is expected to testify to her repentance.',
    },
    {
      term: 'Repentance',
      definition:
        'Sincere regret for sin and a promise to turn away from it. Melanie repents at once; Jeanette only pretends to, so that she can eat.',
    },
    {
      term: 'Exorcism',
      definition:
        'A ritual to drive out a demon believed to possess a person. The elders pray over Jeanette to cast out what they call her demon.',
    },
    {
      term: 'Rapture',
      definition:
        'A state of intense religious ecstasy. The church mistakes Jeanette’s deafness for rapture.',
    },
    {
      term: 'Fundamentalist',
      definition:
        'Holding to a strict, literal reading of a religion’s scripture and rules. Useful for describing the mother and the pastor, though the novel itself prefers to show rather than label.',
    },
    {
      term: 'Congregation and elders',
      definition:
        'The congregation is the members of a church; the elders are its senior members, who lead and discipline it. It is the elders who pray over Jeanette in Joshua.',
    },
    {
      term: 'Bildungsroman',
      definition:
        'A novel that follows a young person’s growth into adulthood. The novel follows Jeanette from about seven to about sixteen.',
    },
    {
      term: 'Künstlerroman',
      definition:
        'A kind of bildungsroman about the growth of an artist or writer, usually against the disapproval of an older generation. John Mullan argues the novel is one.',
    },
    {
      term: 'Interpolated tale',
      definition:
        'A separate story inserted into the main narrative, like the fables of the prince, Winnet Stonejar and Sir Perceval.',
    },
    {
      term: 'Allegory',
      definition:
        'A story whose characters and events stand for something else. The Winnet Stonejar fable is an allegory of Jeanette’s life, with the sorcerer standing for her mother.',
    },
    {
      term: 'Bathos',
      definition:
        'A sudden, comic drop from the serious or grand to the trivial, as when a scriptural curse is followed by an offer of dinner.',
    },
    {
      term: 'Epigraph',
      definition:
        'A short quotation at the start of a book or chapter. The title comes from an epigraph the novel ascribes to Nell Gwyn.',
    },
    {
      term: 'Allusion',
      definition:
        'A brief reference to another text or story. The novel alludes constantly to the Bible, and also to Jane Eyre and the legends of King Arthur.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Eduqas GCSE style. Using the extract The Heathen Next Door (the opening of Leviticus) and your knowledge of the whole novel, write about the ways Winterson uses humour in Oranges are not the Only Fruit and how it is presented at different points in the novel. In your response you should refer to the extract and the novel as a whole, and show your understanding of characters and events in the novel.',
        skill:
          'Extract and whole-novel response: language analysis and knowledge of the whole text',
        guidance: [
          'Open with an argument, not a definition: humour is how the narrator takes control of a childhood that controlled her, and it is never only for fun.',
          'Analyse the extract closely: the mock-heroic opening, Mrs White’s hurried correction about the wine glass, the mother’s “who’s for a bit of dinner?” as bathos. Name the technique and say what it reveals.',
          'Move to Genesis and Exodus: the mother’s friends-and-enemies list, Errol Flynn but holy, the snail programme. Show that the humour exposes her certainties.',
          'Show humour turning to pain in Numbers: the raincoat scene ends “I hated her.” Explain how the short sentence stops the laughter.',
          'Show humour surviving the crisis in Judges: “all my relatives, like most relatives, were revolting.” Argue that it is now a sign of resilience.',
          'Bring in one fable, such as the prince and the perfect woman, and say how its comic fairy-tale style carries a serious point about truth.',
          'Conclude with a judgement: the humour makes the mother lovable and the church absurd, so the cruelty, when it comes, is all the more shocking.',
        ],
      },
      {
        question:
          'Eduqas GCSE style. Using the extract Denounced in church (Joshua) and your knowledge of the whole novel, write about Jeanette’s relationships with Melanie and Katy and how they are presented at different points in the novel.',
        skill: 'Extract and whole-novel response: characters, relationships and language',
        guidance: [
          'Start with the extract: how the ambush is built through Miss Jewsbury’s warning, the silence and the waxwork congregation. Analyse the pastor’s “fallen foul of their lusts” and Jeanette’s “To the pure all things are pure”.',
          'Go back to Numbers: Jeanette first sees Melanie at the fish stall straight after the pink raincoat, and brings her to church. Show that for Jeanette love and faith begin together.',
          'Contrast the two girls’ responses in the extract: Melanie repents at once; Jeanette refuses to choose. Explain what this shows about each.',
          'Trace Melanie afterwards: sent away, then back from university at Christmas, then returning to announce that she is getting married. Argue that she shows the price of conformity.',
          'Turn to Katy in Joshua and Judges: a more equal relationship, and Jeanette’s decision to take the blame in Morecambe to protect her. Show how Jeanette has changed.',
          'Conclude on the orange demon: keeping it is the choice these relationships lead to, and the novel treats that choice as painful but right.',
        ],
      },
      {
        question:
          'AQA A-level style (Paper 2, Option B, contextual linking). Compare the significance of rebellion in two texts you have studied. Remember to include in your answer reference to how meanings are shaped in the texts you are comparing. You must use one drama text and one prose text in your response.',
        skill: 'Comparative essay: connections across texts, context and how meanings are shaped',
        guidance: [
          'This form of the question, one drama and one prose text, is set when poetry is your Section A set text; if drama is your Section A text, the question asks instead for one prose and one poetry text, at least one written after 2000. Pair Oranges with the drama text you have studied, such as A Streetcar Named Desire or All My Sons, and define rebellion so that it fits both: against family, faith, class or gender.',
          'Build a thesis that compares from the start, for example that both texts show rebellion as costly, but Winterson makes it survivable through comedy and storytelling.',
          'Use the structure of Oranges: the Bible chapter titles and the move from Genesis to Ruth trace a rebellion that is also a coming of age.',
          'Analyse key moments of defiance: “To the pure all things are pure” in Joshua, refusing to repent in Judges, and “It was not judgement day, but another morning.”',
          'Bring in Modern times contexts that genuinely shape meaning: changing attitudes to sexuality and religion in late twentieth-century Britain, and the controversy over the 1990 television adaptation, screened while Section 28 was in force.',
          'Include a critical perspective, such as Mullan’s reading of the novel as a Künstlerroman, and test it against your drama text.',
          'Conclude comparatively: which text makes rebellion more hopeful, and how do the writers’ methods, narrative voice against dramatic form, shape that difference?',
        ],
      },
      {
        question:
          'OCR A-level style (Component 02, Women in Literature). ‘The most powerful enemies of women in literature are other women.’ By comparing Sense and Sensibility or Mrs Dalloway with Oranges are not the Only Fruit, discuss how far you agree with this view.',
        skill: 'Comparative essay: argument, comparison, context and critical views',
        guidance: [
          'Take a clear position on the statement and qualify it: in Oranges women do much of the damage, but the power they serve belongs to men.',
          'Analyse the women who police Jeanette: her mother, Mrs White and the congregation, from the Leviticus comedy to the denunciation in Joshua and the funeral in Ruth.',
          'Then complicate it: Elsie and Miss Jewsbury help Jeanette, and the unnamed male pastor makes the decisive rulings, including the order to stop her preaching.',
          'Compare throughout with your core text, looking at how women judge, protect or constrain one another there.',
          'Use context from both periods: a Pentecostal church in late twentieth-century England, and the society of your core text.',
          'Consider form: Winterson’s fables and comic first-person voice against the narrative method of your core text.',
          'Conclude with a nuanced judgement about where power really lies in each text.',
        ],
      },
    ],
    tips: [
      'Eduqas calls her Mrs Winterson, but the novel never uses the surname. Either is fine; be consistent, and never confuse the character with the author.',
      'Do not write about the 1990 television version. It renames the heroine Jess, cuts every fable and changes events. Eduqas examiners’ reports repeatedly warn about answers that draw on film versions rather than the text, and say that moments taken from a film cannot be credited as textual support.',
      'Use the fables. The Eduqas examiners’ reports for 2019, 2023, 2024 and 2025 all say that purposeful references to the novel’s mythic elements marked the best answers: link one fable to the plot beside it and say what it adds.',
      'Show you see the humour, then explain what it does. The reports praise candidates who recognise it; the strongest answers show how comedy turns into pain within a scene.',
      'Know the ending. Many candidates mention the partial reconciliation; the best judge how partial it is, since the mother behaves as if nothing happened and they never discuss it.',
      'Learn short quotations with their chapter names: Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth. At GCSE the exam is closed book.',
      'At Eduqas GCSE, context is not assessed on this question, so historical background earns credit only when it explains something in the novel. Spend your time on the extract and the whole text.',
      'Spell the names correctly: Jewsbury, Elsie Norris, Pentecostal, Leviticus, Deuteronomy, Perceval, Winnet Stonejar. Accuracy of writing is assessed on this question.',
      'At A-level, AQA lets you take in a clean copy, so precision matters even more; OCR requires Sense and Sensibility or Mrs Dalloway in your comparative essay, so never write about Oranges alone.',
    ],
  },

  modelAnswer: {
    question:
      'Eduqas GCSE style: using the pink raincoat extract from Numbers and your knowledge of the whole novel, write about Jeanette’s mother and how she is presented at different points in the novel.',
    paragraph:
      'In the market scene in Numbers, Winterson presents Jeanette’s mother as a woman whose faith is sincere but whose pride is stronger. The narrator’s deadpan “She said he was a devil, but she still took the mince” exposes the hypocrisy in one balanced sentence: the moral verdict comes first, the cheap mince second, and the conjunction “but” marks the moment principle gives way to thrift. Her snobbery works in the same way: the phrase “keeping her ‘H’ as best she could” shows her straining to sound respectable in front of Mrs Clifton, and as soon as she is embarrassed she overrules Jeanette and buys a raincoat that is “bright pink”. The comedy is real, but so is the cost, and Winterson ends the scene with the flat, three-word paragraph “I hated her.” That pattern, laughter followed by damage, runs through the novel. In Joshua, Jeanette remembers the same mother striking her and dismissing her birth mother as “a carrying case”; in Judges she puts her out with “I’m not havin’ demons here.” Yet Winterson never lets us simply condemn her. When Jeanette comes home for Christmas in Ruth, she can watch her mother with amusement rather than fear, and the storyteller who taught her to read from the Book of Deuteronomy is, in the end, the voice this whole novel learned from.',
    commentary: [
      'It opens with an argument about the character, faith against pride, rather than a description, and every later point serves that argument.',
      'It analyses a single word, the conjunction “but”, and the shape of a sentence, which is the close language analysis the question rewards.',
      'It moves from the extract to the whole novel with chapter names and short quotations a student can remember in a closed-book exam.',
      'It recognises the humour, which examiners’ reports praise, and then explains how the humour turns into damage.',
      'It ends with an evaluative judgement that complicates the easy reading of the mother as a villain, so the answer weighs her rather than just listing her faults.',
    ],
  },

  timeline: [
    {
      where: 'Genesis',
      title: 'A mother at war with the world',
      summary:
        'Jeanette introduces the mother who adopted her: a woman who wrestles with everything, keeps lists of friends and enemies, prays standing up and cooks according to the missionary news on the radio. Jeanette has been raised to believe she is special and destined to be a missionary.',
      setting:
        'The family’s house near the top of a long street in a northern mill town, by the radiogram on a Sunday',
      who: ['Jeanette', 'Jeanette’s mother', 'Jeanette’s father'],
      quote: 'She had never heard of mixed feelings. There were friends and there were enemies.',
      themes: ['Mothers and daughters', 'Religion and control'],
      tension: 1,
      significance:
        'The first pages set up the central clash: a mother who sees only friends and enemies, and a daughter who will turn out to be neither.',
    },
    {
      where: 'Genesis',
      title: 'The prophecy at the fair',
      summary:
        'Collecting black peas at the fair, Jeanette has her palm read by an old woman who tells her she will never marry and never be still. The prophecy makes her think of the two unmarried women who run the paper shop: her mother had stopped her going to the seaside with them, moved her comic to another shop, and told Mrs White that they dealt in unnatural passions.',
      setting: 'The fairground behind the viaduct, and the paper shop',
      who: ['Jeanette', 'Jeanette’s mother', 'Mrs White'],
      themes: ['Love and sexuality', 'Home, exile and return'],
      tension: 2,
      significance:
        'Both halves of the prophecy come true, and the paper-shop women are the first sign of the life Jeanette will choose and of the prejudice she will meet.',
    },
    {
      where: 'Genesis',
      title: 'Pastor Finch and the demons',
      summary:
        'A visiting preacher, Pastor Finch, gives a terrifying sermon on how easily a person can be possessed by demons, and warns Jeanette’s mother that seven is a holy number but also a dangerous one. At the end of the chapter a letter arrives saying Jeanette must go to school.',
      setting: 'The church, the banquet afterwards and the Sunday school room',
      who: ['Jeanette', 'Jeanette’s mother', 'Pastor Finch'],
      themes: ['Religion and control'],
      tension: 2,
      significance:
        'The idea that a demon can live inside even a holy child is planted here, and the church returns to it when Jeanette falls in love.',
    },
    {
      where: 'Exodus, the opening',
      title: 'The night before school',
      summary:
        'The night before her first day at school, Jeanette asks why she has to go, and her mother answers that otherwise she herself will be sent to prison. When the radio announces a programme about the family life of snails, her mother shrieks that it is an Abomination. Jeanette imagines a snail family at home and tells her mother it is not like that at all, but her mother is not listening.',
      setting: 'The kitchen and the living room, the night before school',
      who: ['Jeanette', 'Jeanette’s mother'],
      quote: 'it’s an Abomination, it’s like saying we come from monkeys',
      themes: ['Religion and control', 'Mothers and daughters'],
      tension: 2,
      significance:
        'School is Jeanette’s first exodus from her mother’s world, and the snails are an early sign that she sees things differently, even when her mother does not hear her.',
    },
    {
      where: 'Exodus',
      title: 'Deaf, and full of the spirit',
      summary:
        'Jeanette remembers going deaf at seven, when her mother and the church decided she was in a state of rapture. Miss Jewsbury realised she simply could not hear and took her to hospital. Her mother brought a carrier bag of oranges but could not visit until the weekend; Elsie Norris came every day with jokes, stories and poetry.',
      setting: 'The hospital ward',
      who: ['Jeanette', 'Jeanette’s mother', 'Miss Jewsbury', 'Elsie Norris'],
      themes: ['Mothers and daughters', 'Religion and control', 'Storytelling and truth'],
      tension: 3,
      significance:
        'The first time the church is wrong about Jeanette, and the first time oranges stand in for comfort. Elsie offers a second kind of faith, full of books.',
    },
    {
      where: 'Exodus',
      title: 'The Jesus Belle',
      summary:
        'As the summer crusade approaches, Jeanette’s mother tells stories of the church’s early days, when she sang in pubs and clubs to win converts. Looking through the photograph album with Jeanette, she stops as always at the Old Flames pages. A picture of a woman there, said to be an old boyfriend’s sister, has gone the next time they look.',
      setting: 'At home, over the family photograph album',
      who: ['Jeanette’s mother', 'Jeanette', 'Jeanette’s father'],
      quote: 'they called her the Jesus Belle',
      themes: ['Mothers and daughters', 'Love and sexuality', 'Storytelling and truth'],
      tension: 1,
      significance:
        'The mother has a past, and the vanished photograph suggests she edits it. One possible reading is that she once loved a woman herself; the novel leaves it unsaid.',
    },
    {
      where: 'Exodus',
      title: 'An outsider at school',
      summary:
        'At school Jeanette cannot fit in. Her essay about her summer with the church makes the class laugh, she frightens the other children with talk of Hell, and she embroiders a sampler of the damned. The head teacher writes to her mother about her obsession with God, and her mother is so delighted that she takes her to see The Ten Commandments.',
      setting: 'The classroom and the head teacher’s office',
      who: ['Jeanette', 'Jeanette’s mother'],
      themes: ['Religion and control', 'Mothers and daughters'],
      tension: 2,
      significance:
        'School shows how completely her mother’s world has shaped her, and how little it has prepared her for any other.',
    },
    {
      where: 'Leviticus',
      title: 'The Heathen Next Door',
      summary:
        'One Sunday, noises from the neighbours send Jeanette’s mother and Mrs White into a panic. Jeanette is sent for ice creams, and the women answer Next Door with a hymn played so loudly that the neighbours bang on the wall. Her mother runs out to quote scripture at them, then comes back in to offer everyone dinner.',
      setting: 'The front room, against the shared wall',
      who: ['Jeanette’s mother', 'Mrs White', 'Jeanette', 'Jeanette’s father'],
      quote: 'The Heathen were a daily household preoccupation.',
      themes: ['Religion and control'],
      tension: 2,
      significance:
        'One of the funniest scenes in the novel is also a portrait of faith as warfare, and of the hypocrisy examiners reward students for noticing.',
    },
    {
      where: 'Leviticus',
      title: 'A sermon on perfection',
      summary:
        'At a Society for the Lost meeting, Jeanette hears a preacher say that perfection means being without flaw, and for the first time she disagrees. The story breaks into a fable: a prince searches for a flawless bride and has a wise woman beheaded when she tells him perfection is balance, not flawlessness.',
      setting: 'A crowded Society meeting, then a fairy-tale kingdom',
      who: ['Jeanette'],
      themes: ['Storytelling and truth', 'Religion and control'],
      tension: 2,
      significance:
        'Jeanette’s first doubt comes out as a story, and the story is about a man who kills the truth rather than admit he was wrong.',
    },
    {
      where: 'Numbers',
      title: 'The pink raincoat and the fish stall',
      summary:
        'Fourteen now, Jeanette tears her raincoat on a meat hook at the market. Embarrassed in front of a snobbish acquaintance, her mother buys her an enormous bright pink one from a shop selling seconds, and they walk to the fish stall in silence. There Jeanette sees Melanie for the first time.',
      setting: 'The town market on a rainy day',
      who: ['Jeanette', 'Jeanette’s mother', 'Melanie'],
      quote: 'She said he was a devil, but she still took the mince.',
      themes: ['Mothers and daughters', 'Love and sexuality'],
      tension: 3,
      significance:
        'Comedy, snobbery and resentment in one scene, ending in “I hated her.” Then, at the fish stall, the story turns.',
    },
    {
      where: 'Numbers',
      title: 'Melanie',
      summary:
        'Jeanette brings Melanie to church, where she is saved, and visits her every week for Bible study. When Jeanette talks about her constantly, her mother tells her the cautionary story of Pierre, whose effect on her turned out to be a stomach ulcer. The girls’ friendship becomes a love affair, and at the Harvest Festival they feel entirely at home in the church.',
      setting: 'Melanie’s house, and the church at the Harvest Festival',
      who: ['Jeanette', 'Melanie', 'Jeanette’s mother'],
      themes: ['Love and sexuality', 'Religion and control'],
      tension: 3,
      significance:
        'For Jeanette, love and faith are the same happiness. The novel lets the reader see the danger she cannot.',
    },
    {
      where: 'Deuteronomy',
      title: 'An essay on history',
      summary:
        'The story stops. In a short chapter with no plot, the narrator speaks directly to the reader about history and storytelling, arguing that every account of the past is shaped by the person who tells it.',
      setting: 'Outside the story: the narrator addresses the reader',
      who: ['Jeanette'],
      themes: ['Storytelling and truth'],
      tension: 1,
      significance:
        'Placed just before the crisis, it warns the reader that the version of events that follows is a story too.',
    },
    {
      where: 'Joshua',
      title: 'That Awful Occasion',
      summary:
        'Unsure what is happening between her and Melanie, Jeanette remembers the day her birth mother came to the door. Shut out of the room, she listened through the wall with a wine glass, and when she protested that the woman was her mother, her adoptive mother struck her.',
      setting: 'The family home, some years earlier',
      who: ['Jeanette', 'Jeanette’s mother'],
      quote: 'She was a carrying case.',
      themes: ['Mothers and daughters'],
      tension: 4,
      significance:
        'The most painful memory in the book is told in about a page and a half, and mother and daughter never speak of it again. It shows how the mother meets a threat: with force and denial.',
    },
    {
      where: 'Joshua',
      title: 'Denounced in church',
      summary:
        'The pastor calls Jeanette and Melanie to the front, with Jeanette’s mother weeping beside him, and announces that they are full of demons. Melanie promises to repent and is taken to the vestry. Jeanette insists she loves both Melanie and the Lord, is told she cannot, and runs out of the church.',
      setting: 'The church, in front of the whole congregation',
      who: ['The pastor', 'Jeanette', 'Melanie', 'Jeanette’s mother', 'Miss Jewsbury', 'Mrs White'],
      quote: 'These children of God have fallen foul of their lusts.',
      themes: ['Religion and control', 'Love and sexuality'],
      tension: 5,
      significance:
        'The community that raised Jeanette turns on her in public. It is the turning point of the novel, and the passage Eduqas set in June 2019.',
    },
    {
      where: 'Joshua',
      title: 'The orange demon',
      summary:
        'The elders pray over Jeanette all day. When she still will not repent, her mother, on the pastor’s instructions, locks her in the parlour for thirty-six hours without food. In the dark an orange demon appears and tells her that demons are difficult, not evil. She pretends to repent so that she can eat, and keeps the demon.',
      setting: 'The darkened parlour',
      who: ['Jeanette', 'The pastor', 'Jeanette’s mother'],
      themes: ['Religion and control', 'Love and sexuality', 'Storytelling and truth'],
      tension: 5,
      significance:
        'The church’s attempt to drive out who Jeanette is becomes the moment she decides to keep it.',
    },
    {
      where: 'Joshua',
      title: 'Letters burned, walls fallen',
      summary:
        'Ill with a fever, Jeanette lies in the parlour while her mother burns her letters from Melanie, and she knows that something between them has broken. By the summer she is preaching again, and on a church mission to Blackpool she meets Katy.',
      setting: 'The parlour at home, then the seaside mission',
      who: ['Jeanette', 'Jeanette’s mother', 'Katy'],
      quote: 'That walls should fall is the consequence of blowing your own trumpet.',
      themes: ['Mothers and daughters', 'Religion and control', 'Love and sexuality'],
      tension: 3,
      significance:
        'Joshua’s walls fall here: the trust between mother and daughter goes, even though life outwardly returns to normal.',
    },
    {
      where: 'Judges',
      title: 'Caught again',
      summary:
        'Jeanette and Katy are discovered together at the church’s guest house in Morecambe. Jeanette takes all the blame, claiming she had been with Melanie, to keep Katy out of it. The church decides her trouble began when she was given a man’s work, and orders her to give up preaching and teaching.',
      setting: 'A guest house in Morecambe, then the church at home',
      who: ['Jeanette', 'Katy', 'The pastor', 'Jeanette’s mother'],
      themes: ['Women and men', 'Religion and control', 'Love and sexuality'],
      tension: 4,
      significance:
        'The church answers a girl who loves women by taking power away from her as a woman, and her mother agrees.',
    },
    {
      where: 'Judges',
      title: 'Leaving home',
      summary:
        'Jeanette tells the pastor and her mother that she is leaving the church and will not repent. Her mother tells her to leave the house. Frightened but defiant, she arranges to lodge with a teacher, earns money driving an ice-cream van and walks the dog one last time.',
      setting: 'The family home on her last morning',
      who: ['Jeanette', 'Jeanette’s mother', 'The pastor'],
      quote: 'It was not judgement day, but another morning.',
      themes: ['Home, exile and return', 'Mothers and daughters', 'Religion and control'],
      tension: 4,
      significance:
        'The end of her childhood arrives without thunder, and that is the point: Jeanette refuses to see her life in her mother’s apocalyptic terms.',
    },
    {
      where: 'Ruth',
      title: 'Winnet Stonejar',
      summary:
        'A fable takes over. Winnet is taken in by a sorcerer, lives with him so long that she believes he is her father, and is ordered to leave when she falls in love. Before she goes, he ties an invisible thread to her button so that he can always pull her back.',
      setting: 'A forest and a sorcerer’s castle',
      who: ['Winnet Stonejar', 'The sorcerer'],
      themes: ['Storytelling and truth', 'Home, exile and return', 'Mothers and daughters'],
      tension: 3,
      significance:
        'Jeanette’s own story retold as myth. The thread explains the ending: leaving home does not cut the tie.',
    },
    {
      where: 'Ruth',
      title: 'Elsie’s funeral',
      summary:
        'Driving her ice-cream van past Elsie’s house, Jeanette finds that Elsie has died and that her old church will not let her near. She sits up with Elsie’s coffin and has to serve the food at the funeral, where the congregation, her mother among them, walk out. Soon afterwards she takes a job in a mental hospital, and later she leaves for a new life in a city.',
      setting: 'The funeral parlour',
      who: ['Jeanette', 'Elsie Norris', 'Jeanette’s mother', 'Miss Jewsbury'],
      themes: ['Home, exile and return', 'Religion and control'],
      tension: 4,
      significance:
        'Elsie was the one adult who stood by her. Shut out from mourning her, Jeanette has no reason left to stay.',
    },
    {
      where: 'Ruth',
      title: 'Home for Christmas',
      summary:
        'Some time later Jeanette travels home through the snow. Her mother greets her as if nothing had happened and admits that the Society for the Lost has been shaken by scandal. On the hill above the town Jeanette thinks about the God she still misses, and at home she watches her mother at a new radio set.',
      setting: 'The family home at Christmas, and the hill above the town',
      who: ['Jeanette', 'Jeanette’s mother'],
      quote: 'very few human relationships will match up to it',
      themes: ['Home, exile and return', 'Mothers and daughters', 'Religion and control'],
      tension: 2,
      significance:
        'An ending without a reconciliation scene: mother and daughter are back by a radio as in Genesis, closer and no less different.',
    },
  ],

  relationships: [
    {
      from: 'Jeanette',
      to: 'Jeanette’s mother',
      kind: 'adopted daughter and mother',
      note: 'From disciple to exile: devotion and comedy in Genesis, violence and rejection in Joshua and Judges, and at the end an uneasy closeness in which nothing is discussed.',
    },
    {
      from: 'Jeanette',
      to: 'Elsie Norris',
      kind: 'friend and mentor',
      note: 'Elsie gives Jeanette poetry, imagination and loyalty, a gentler faith than her mother’s. Her death removes Jeanette’s last reason to stay.',
    },
    {
      from: 'Jeanette',
      to: 'Melanie',
      kind: 'first love',
      note: 'A love that for Jeanette is part of her faith. Melanie repents at once when they are exposed, and later announces that she is getting married, showing the path of conformity.',
    },
    {
      from: 'Jeanette',
      to: 'Katy',
      kind: 'second love',
      note: 'A more equal relationship, kept secret until Morecambe, where Jeanette takes the blame to protect her.',
    },
    {
      from: 'Jeanette',
      to: 'Miss Jewsbury',
      kind: 'rescuer who also exploits her',
      note: 'She saves the deaf child and shelters the exposed teenager, then takes advantage of her that same night. Help and harm come from the same adult.',
    },
    {
      from: 'Jeanette',
      to: 'The pastor',
      kind: 'accused and judge',
      note: 'He denounces her, orders her confinement and ends her preaching. Her refusal to repent in front of him is her final break with the church.',
    },
    {
      from: 'Jeanette’s mother',
      to: 'The pastor',
      kind: 'loyal follower and minister',
      note: 'She stands weeping beside him at the denunciation and carries out his orders at home, choosing the church’s judgement over her daughter.',
    },
    {
      from: 'Jeanette’s mother',
      to: 'Jeanette’s father',
      kind: 'wife and husband',
      note: 'She married him, reformed him and runs the house; he barely speaks, which shows who holds power in this family.',
    },
    {
      from: 'Jeanette’s mother',
      to: 'Pastor Spratt',
      kind: 'convert and hero',
      note: 'He converted her at his Glory Crusade and she keeps his picture by her bed, which reveals the romance at the root of her faith.',
    },
    {
      from: 'Jeanette’s mother',
      to: 'Mrs White',
      kind: 'friends and fellow believers',
      note: 'Allies in the war on Next Door and in the judgement of Jeanette; Mrs White is the congregation in miniature.',
    },
    {
      from: 'Winnet Stonejar',
      to: 'The sorcerer',
      kind: 'apprentice and adoptive father in the fable',
      note: 'He takes her in, sends her away for loving someone and ties an invisible thread to her: the mother and daughter story told as myth.',
    },
  ],

  compareWith: [
    {
      title: 'Leave Taking',
      href: '/revision/texts/leave-taking',
      reason:
        'On the same Eduqas post-1914 list, where it replaced A Taste of Honey from 2025: Enid and her daughters Del and Viv, a daughter who leaves home, and, as the 2025 examiners’ report notes, a partial reconciliation at the end.',
    },
    {
      title: 'Anita and Me',
      href: '/revision/texts/anita-and-me',
      reason:
        'Another Eduqas novel narrated by a woman looking back on a girlhood in a small community, where growing up means seeing the adults clearly.',
    },
    {
      title: 'Jane Eyre',
      href: '/revision/texts/jane-eyre',
      reason:
        'On the OCR Women in Literature list, and the mother’s favourite novel, which she retells with the ending changed so that Jane marries the missionary.',
    },
    {
      title: 'A Streetcar Named Desire',
      href: '/revision/texts/a-streetcar-named-desire',
      reason:
        'A core drama text for AQA Paper 2, Option B, and a strong pairing for desire, respectability and a woman cast out by the people around her.',
    },
  ],

  contentGuidance: [
    'mythological_religious',
    'intimate_relationships',
    'discrimination',
    'violence',
    'crime_injustice',
    'mortality',
    'supernatural',
  ],

  sources: [
    {
      label:
        'Eduqas GCSE English Literature specification (from 2015, Version 4): Oranges are not the Only Fruit in Component 2, Section A; one source-based question; set texts may not be taken into the exam',
      url: 'https://www.eduqas.co.uk/media/42ldm0wa/eduqas-gcse-english-literature-spec-from-2015.pdf',
    },
    {
      label:
        'Eduqas Component 2 specimen assessment material: the extract from the opening of Exodus (the night before school, the snail programme) and its indicative content on mother and daughter, the first-person narrator and the humour',
      url: 'https://susansenglish.wordpress.com/wp-content/uploads/2016/11/17-eduqas-gcse-english-literature-sams.pdf',
    },
    {
      label:
        'Eduqas C720U20-1 question paper, June 2017: the Exodus extract on the church’s early days, the Jesus Belle, the Old Flames album and the mother’s marriage',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202017%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'Eduqas C720U20-1 question paper, June 2018: the Exodus extract introducing Testifying Elsie Norris',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202018%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'Eduqas C720U20-1 question paper, June 2019: the Joshua extract in which Jeanette and Melanie are denounced in church',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202019%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'Eduqas C720U20-1 question paper, June 2023: the Joshua extract recalling That Awful Occasion, the birth mother’s visit',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202023%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'Eduqas C720U20-1 question paper, June 2024: the extract ending Judges, in which Jeanette is put out of the house',
      url: 'https://pastpapers.download.wjec.co.uk/S24/S24-C720U20-1.pdf',
    },
    {
      label:
        'Eduqas C720U20-1 question paper, June 2025: the Numbers extract of the market, the butcher’s mince, the pink raincoat and the walk to the fish stall',
      url: 'https://pastpapers.download.wjec.co.uk/S25/S25-C720U20-1.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature examiners’ report, Summer 2018: Elsie as a grandmother figure, the hospital, Mrs Winterson’s version of Jane Eyre, Elsie’s funeral',
      url: 'https://www.eduqas.co.uk/media/z11fkvtl/eduqas-gcse-english-literature-report-summer-2018-e.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature examiners’ report, Summer 2019: the waxwork image, the dialogue as interrogation, the mythic elements',
      url: 'https://www.eduqas.co.uk/media/fccdocnf/eduqas-gcse-english-literature-examiners-report-summer-2019.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature examiners’ report, Summer 2023: humour, the War Cupboard, the reconciliation at the end, the mythic elements',
      url: 'https://www.eduqas.co.uk/media/1ljp10r1/eduqas-gcse-english-literature-report-s23-e.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature examiners’ report, Summer 2024: quotations from the leaving-home extract (two of them misquoted in the report; the paper’s wording is used), humour, the mythic elements',
      url: 'https://www.eduqas.co.uk/media/d32phgch/eduqas-gcse-eng-lit-final-report-s24.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature examiners’ report, Summer 2025: Mrs Winterson’s hypocrisy and snobbery, the mince, the H, I hated her, the partial reconciliation, humour and the mythic elements; context assessed in Section B only; Leave Taking assessed for the first time, having replaced A Taste of Honey on the Section A list',
      url: 'https://www.eduqas.co.uk/media/tbdhukmq/eduqas-gcse-english-literature-s25-e.pdf',
    },
    {
      label:
        'AQA A-level English Literature A, unseen extract 2: the opening of Leviticus, the Heathen Next Door, with AQA’s acknowledgement to Peters Fraser and Dunlop',
      url: 'https://filestore.aqa.org.uk/resources/english/AQA-7712-UE-2-ORANGES.PDF',
    },
    {
      label:
        'AQA AS and A-level English Literature A specification (7711/7712), Version 1.6: Oranges on the Option B Modern times comparative prose list; Paper 2 open book with clean copies; the contextual linking section',
      url: 'https://filestore.aqa.org.uk/resources/english/specifications/AQA-7711-7712-SP-2015.PDF',
    },
    {
      label:
        'AQA 7712/2B question paper, June 2022: the form of the contextual linking questions (compare the significance of a theme in two other texts); one drama and one prose text when poetry is the Section A set text, one prose and one poetry text, at least one post-2000, when drama is',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/A-level/Past-Papers/AQA-A/Paper-2B/QP/June%202022%20QP.pdf',
    },
    {
      label:
        'OCR H472/02 question paper, June 2018: Women in Literature text list including Oranges; the comparative question must include Sense and Sensibility or Mrs Dalloway; the question form',
      url: 'https://cdn.savemyexams.com/uploads/2022/02/h472-june-2018-paper-2-qp-ocr-a-level-english-literature.pdf',
    },
    {
      label:
        'Penguin, extract from Oranges Are Not The Only Fruit: the opening of Genesis (the wrestling, mixed feelings, the friends and enemies list, special, the Missionary Report, Maxi Ball’s, the gypsy’s prophecy, the paper shop, Pastor Spratt)',
      url: 'https://www.penguin.co.uk/discover/articles/oranges-are-not-the-only-fruit-by-jeanette-winterson',
    },
    {
      label: 'Penguin, the Vintage paperback (2014, 240 pages): imprint and length',
      url: 'https://www.penguin.co.uk/books/357466/oranges-are-not-the-only-fruit-by-jeanette-winterson/9780099598183',
    },
    {
      label:
        'John Mullan, True stories, The Guardian, 27 October 2007: the surname never used, the silent father, the Awful Occasion, Deuteronomy, the Künstlerroman reading, the TV heroine renamed Jess',
      url: 'https://www.theguardian.com/books/2007/oct/27/jeanettewinterson',
    },
    {
      label:
        'John Mullan, Oranges Are Not the Only Fruit: The Bible, The Guardian, 20 October 2007: the Bible structure, the walls of Joshua, To the pure all things are pure (Titus), Vengeance is mine (Romans)',
      url: 'https://www.theguardian.com/books/2007/oct/20/jeanettewinterson',
    },
    {
      label:
        'LitCharts chapter summaries, archived copies (Genesis, Exodus, Leviticus, Numbers, Joshua, Judges, Ruth): used to place each exam passage in its chapter and for the order of events',
      url: 'https://web.archive.org/web/2025/https://www.litcharts.com/lit/oranges-are-not-the-only-fruit/6-joshua',
    },
    {
      label:
        'SparkNotes chapter summaries and Important Quotations Explained, archived copies: the second, independent check on chapter placings and on the Genesis opening',
      url: 'https://web.archive.org/web/2004/http://www.sparknotes.com/lit/oranges/section6.rhtml',
    },
    {
      label:
        'Wikipedia, Oranges Are Not the Only Fruit: publication by Pandora Press, 21 March 1985; Whitbread First Novel Award; plot; literary allusions including Jane Eyre, Goblin Market and the Nell Gwyn epigraph',
      url: 'https://en.wikipedia.org/wiki/Oranges_Are_Not_the_Only_Fruit',
    },
    {
      label:
        'Wikipedia, Jeanette Winterson: birth, adoption, Accrington, the Elim Pentecostal Church, leaving home at sixteen, Oxford 1978 to 1981, Pandora Press, the 1990 adaptation, the 2011 memoir',
      url: 'https://en.wikipedia.org/wiki/Jeanette_Winterson',
    },
    {
      label:
        'Wikipedia, Oranges Are Not the Only Fruit (TV serial): BBC Two, 10 to 24 January 1990, three episodes, Beeban Kidron, Jess, the fables omitted, the BAFTA, the controversy',
      url: 'https://en.wikipedia.org/wiki/Oranges_Are_Not_the_Only_Fruit_(TV_serial)',
    },
    {
      label:
        'Wikipedia, Section 28: the provision, its effect on schools, and its repeal in England and Wales in 2003',
      url: 'https://en.wikipedia.org/wiki/Section_28',
    },
    {
      label:
        'Wikipedia, Pentecostalism and Elim Pentecostal Church: beliefs, and Elim’s founding in Ireland in 1915 by George Jeffreys',
      url: 'https://en.wikipedia.org/wiki/Elim_Pentecostal_Church',
    },
    {
      label:
        'Wikipedia, Nell Gwyn: her start as an orange-seller in the theatre, and the epigraph ascribed to her in the novel',
      url: 'https://en.wikipedia.org/wiki/Nell_Gwyn',
    },
    {
      label:
        'Jay Ruud, Jeanette Winterson’s Oranges Are Not the Only Fruit: the second source for the lines about God on the hill in Ruth',
      url: 'http://jayruud.com/jeanette-wintersons-oranges-are-not-the-only-fruit/',
    },
    {
      label:
        'Whispering Gums, review of the novel: with SparkNotes, the source for the mother’s remark about oranges and pineapple near the end, reported here without quotation',
      url: 'https://whisperinggums.com/2010/04/20/jeanette-winterson-oranges-are-not-the-only-fruit/',
    },
  ],
}
