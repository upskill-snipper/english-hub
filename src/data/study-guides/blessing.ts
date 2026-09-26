import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Blessing, Imtiaz Dharker. A COMPLETE guide: the text had no guide anywhere.
 *
 * THE TEXT. Every quotation was copied from the poem as printed on page 53 of
 * the Pearson Edexcel International GCSE English Anthology, Issue 8 (February
 * 2026), read from Pearson's own PDF on 25 September 2026, and its line number
 * checked against the anthology's margin numbering (5, 10, 15, 20). A second
 * printing of the poem, in Pearson's sample chapter of its International GCSE
 * English Literature student book, agrees with the anthology word for word. The
 * poem is 23 lines in four stanzas of 2, 4, 11 and 6 lines: 100 words.
 *
 * THE LIMIT. A 100-word poem in copyright may give up 15 per cent of itself on
 * one page: 15 words. The whole page quotes exactly these seven items and
 * nothing else in quotation marks: cracks like a pod (l.1), kindly god (l.6),
 * silver (l.9), roar of tongues (l.11), congregation (l.12), liquid sun
 * (l.19), small bones (l.23). That is 15 words, the whole allowance. Every
 * other quoted word on the page is a part of one of these, so it adds nothing.
 * Adding a quotation means removing one: run the test. Everything else in the
 * poem is described in the guide's own words with a line reference, so that a
 * student can find it in the anthology. The vocabulary list glosses a handful
 * of single words from the poem, as a glossary does, without quoting it.
 *
 * WHAT WAS FOUND WHILE WRITING THIS.
 * - Line 2 is widely misquoted with its adverb moved into the ordinary word
 *   order. Pearson's own student-book sample does it, in its commentary, just
 *   after printing the line correctly. The guide warns students without quoting
 *   the line, because the allowance is spent.
 * - Many revision sites say Dharker based the poem on Dharavi and quote an
 *   interview in which she compares water to money. No primary source for that
 *   interview could be found, so it is not quoted or relied on. The poem names
 *   no place. Pearson's student book says it is set in Bombay in the dry
 *   season, and the guide says that much and no more.
 * - The copyright line carries no year. The anthology reproduces the poem from
 *   the Bloodaxe edition of Postcards from God (1997), but the collection first
 *   appeared from Viking in India in 1994, and whether this poem was in that
 *   edition could not be confirmed. Saying less rather than choosing.
 *
 * FACT-CHECKED 26 September 2026 against a fresh download of the Issue 8 PDF:
 * all 23 lines and every line reference agree. Corrected then: the poem's god
 * is lower-case because it is "a god", so the no-single-faith reading now rests
 * on the indefinite article, not on the small g alone; Bloodaxe now gives her
 * home as London; War Photographer's Belfast is not a "poorer place"; the
 * mark-scheme summary now follows its actual level wording.
 */
export const guide: StudyGuide = {
  slug: 'blessing',
  title: 'Blessing',
  author: 'Imtiaz Dharker',
  form: 'poem',
  scope:
    'The whole poem as printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3, page 53: 23 lines in four stanzas of 2, 4, 11 and 6 lines. Line numbers on this page follow the anthology’s own margin numbering, which marks every fifth line, so you can find every moment in your copy. Part 3 is examined in English Literature (4ET1), Paper 1, Section B.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Imtiaz Dharker. As printed in the Pearson Edexcel International GCSE English Anthology, which reproduces it from Postcards from God (Bloodaxe Books, 1997) by permission of Bloodaxe Books on behalf of the author. Short quotations for criticism and review.',
  },
  workLength: {
    words: 100,
    lines: 23,
    basis:
      'Counted from the poem as printed on page 53 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), read from Pearson’s PDF on 25 September 2026, using the site’s own word count. Title and poet’s name excluded; the poem has no footnotes. 23 lines by the anthology’s margin numbering. 15 per cent of 100 words allows 15 quoted words on the whole page.',
  },

  quoteNote:
    'Blessing is in copyright and only 100 words long, so this page quotes no more than 15 of its words in all, and every quotation is a short phrase. Everything else is described in our own words with a stanza and line number from the anthology, page 53, so you can read the surrounding lines in your own copy. Learn the other lines from the anthology itself, not from websites or other books: some print them wrongly.',

  overview: {
    summary: [
      'Blessing is a 23-line poem about water in a place that never has enough of it. It opens on drought: skin that splits open in the heat, and a flat statement that water is always scarce. In the second stanza the reader is asked only to imagine a single drop, falling and echoing in a metal cup, and even that tiny sound is treated as holy. Then, in the long third stanza, the city’s water main bursts. Water pours out with a crash and a roar, and the whole neighbourhood comes running out of its huts with every container it owns. The final stanza closes in on the children playing naked in the spray, their wet skin shining in the sunlight.',
      'The poem is about what it means for something ordinary to be precious. Dharker describes the water in the language of religion and of wealth, so that a burst pipe becomes a miracle and a stroke of luck at once. The title can be read as sincere, because for these people water really is a gift. It can also be read as quietly ironic, because the gift arrives by accident, through a broken pipe that belongs to the city, and it will stop.',
      'The poem names no place. Pearson’s own student book says it is set in Bombay, now Mumbai, during the dry season, and Dharker lived and worked in that city for many years. Many study guides link it with Dharavi, one of Mumbai’s largest informal settlements, but the poem itself does not say so, and neither should an exam answer as if it were a fact.',
      'The big question for an essay is whether Blessing is a celebration or a protest. It is joyful: the sound and the sentences speed up, the images glitter, and the ending has children delighting in the water. But the last words turn to the children’s “small bones”, and that phrase makes the joy fragile. The most convincing reading is that the poem is both: it honours the people’s joy while making the reader feel how little they have, and it trusts us to notice the difference between a blessing and a right.',
    ],
  },

  context: [
    {
      heading: 'Imtiaz Dharker',
      body: 'Dharker was born in Lahore, Pakistan, on 31 January 1954, and grew up in Glasgow, where her family moved before she was a year old. Her publisher, Bloodaxe, sums up her mixed inheritance with a playful label that joins Muslim and Calvinist: she grew up in a Lahori household in Glasgow, was adopted by India and married into Wales. She lived and worked in Bombay (Mumbai) for many years, and her publisher now gives her home as London. She is a poet, an artist who illustrates her own books, and a documentary film-maker who has scripted and directed films for non-governmental organisations in India working on shelter, education and health for women and children. She was awarded the Queen’s Gold Medal for Poetry for 2014, became Chancellor of Newcastle University in 2020, and was appointed OBE for services to the arts in the 2025 New Year Honours. Her attention to the lives of poor women and children in India, and her film-maker’s eye for a single vivid picture, are both visible in Blessing.',
    },
    {
      heading: 'Postcards from God',
      body: 'Blessing comes from Dharker’s second collection, Postcards from God. The collection was first published in India by Viking in 1994, and in Britain by Bloodaxe in 1997, in a single volume with her first collection, Purdah. The anthology reproduces the poem from the 1997 Bloodaxe edition. Bloodaxe prints the title with a small g. The poem, too, speaks in line 6 of a god, with the indefinite article and a small g, rather than of God, which is worth noticing: one reading is that this is not only the God of one faith. Poetry International describes the collection as more openly critical of society than her first book, and as a cry of anguish at a great city torn apart by religious extremism and intolerance. Blessing is not an angry poem, but it too looks hard at how the poorest people of a great city live.',
    },
    {
      heading: 'Bombay, now Mumbai, and the dry season',
      body: 'Bombay was officially renamed Mumbai in 1995, after the Shiv Sena party took control of the state government of Maharashtra; the new name comes from Mumbadevi, the city’s patron goddess. Mumbai has a monsoon climate. Almost all of its rain falls between June and September, and the months from October to May are largely dry. Pearson’s student book places the poem in that dry season, the long months without rain, which explains the harshness of the opening stanza. A reader in a country where water comes from a tap at any hour needs this context to feel the force of the first two lines.',
    },
    {
      heading: 'Water in the city’s informal settlements',
      body: 'Large numbers of Mumbai’s people live in informal settlements, often called slums, built without official planning. Dharavi, the settlement most often linked with this poem, is described in a 2021 study in the journal Cities as one of the densest in Asia, with around 850,000 people, and as a place where shared water taps are used by thousands of people every day. A 2015 study of another Mumbai settlement, Kaula Bandar, found that because it was not officially recognised its residents were denied legal access to most public services, that two-thirds of households bought water from informal vendors, and that water was available for about two hours a day. This is the world behind the poem’s central irony. The pipe belongs to the city authorities, so in principle the water belongs to the people; in the poem it reaches them only when the pipe breaks.',
    },
    {
      heading: 'Water and the sacred',
      body: 'Water has a sacred role in the major faiths practised in India. In Hinduism, rivers such as the Ganges are holy and bathing in them purifies; in Islam, believers wash before prayer; in Christianity, baptism with water is a central sacrament and holy water is used in worship. Dharker’s religious vocabulary draws on all of this without belonging to any one faith: a god with a small g, a word for worshippers that is most at home in a church, and a title that could come from any religion. Stanza 3 may also echo the Christian story of Pentecost in the Acts of the Apostles, in which a sudden sound like a rushing wind fills a house where believers are gathered and they begin to speak in other tongues. That echo is this guide’s suggestion, possible rather than certain, but it fits the poem’s picture of a crowd transformed by something that arrives from outside.',
    },
    {
      heading: 'Blessing in the exam',
      body: 'Blessing is one of the sixteen poems in Part 3 of the anthology, all of which are prescribed for English Literature (4ET1) and none of which is examined in English Language A. In Paper 1, Section B, the questions ask you to compare two poems. In the June 2024 paper one question named both poems, and the other named one poem and asked you to choose a second from the anthology. The published mark scheme for that paper says that summarising, paraphrasing or simply listing devices is not enough, that the strongest answers compare the poems across a wide range of similarities and differences with well-chosen examples, and that an answer which discusses only one poem cannot rise above a low level however good it is. So learn Blessing alongside two or three poems it compares with well: the suggestions at the foot of this page are a start.',
    },
  ],

  themes: [
    {
      title: 'Water as a precious gift',
      body: 'Everything in the poem measures the value of water. In stanza 1 there is none. In stanza 2 the reader is asked only to imagine a single drop, and even the echo it makes inside a metal cup is holy enough to belong to a “kindly god”. When the pipe bursts, the metaphors turn to wealth: the water is “silver”, and the word for its arrival at line 8 means both luck and riches. One reading is that the poem simply celebrates water, the most ordinary substance in the world, by showing it through the eyes of people who never have enough. A sharper reading notices that every image of value is also an image of scarcity, because a thing is precious only when it is rare. The title holds both ideas. For the people of the huts water really is a blessing, a gift from outside that they cannot command, and the reader who turns on a tap without thinking is quietly asked to see it the same way.',
    },
    {
      title: 'Poverty and inequality',
      body: 'Blessing never uses the word poverty, and it blames nobody, yet it is a political poem. The people live in huts; they collect water in whatever they have, from metal pots to plastic buckets; their children play without clothes; and the final image is of “small bones”, which suggests bodies that are young, thin and fragile. Above all, the water comes from a pipe that belongs to the city. Pearson’s student book makes the point sharply: water that should be theirs by right reaches these people only by accident. A reader might object that the poem makes poverty look beautiful, turning hardship into a glittering picture for an outsider to admire. The ending answers that objection. Just as the celebration peaks, the poem’s last word is bones, and the reader is left asking why a burst pipe should be the best thing that happens in a whole neighbourhood.',
    },
    {
      title: 'Faith and the sacred',
      body: 'The poem is full of the language of worship. The title is a religious word; the imagined drop becomes the speech of a “kindly god”; the crowd that rushes out of its huts is a “congregation”; and in line 22 the blessing itself becomes a kind of hymn above the children. The poem says a god, with a small g, not God, which suggests not only the God of one religion but any power that gives life, and in a place of drought that power is water. There are two ways to read this. One is that the religious words express real wonder: water feels miraculous to people who rarely have it. The other is ironic: the miracle is a burst pipe, and people who must treat an accident as a gift from heaven have been let down on earth. The strongest answers argue that the poem needs both readings, because the wonder is genuine and so is the neglect behind it.',
    },
    {
      title: 'Community',
      body: 'When the water comes, the whole neighbourhood comes with it. Dharker calls the crowd a “congregation”, a word for people gathered together with one purpose, and in lines 12 and 13 she lists the men, women and children of all the nearby streets without commas, so the community runs together as one body. The informal verb in line 14, meaning to push in, adds a touch of comedy and a hint of jostling: everyone wants their share. So is this unity or a scramble? The poem shows no fighting and no one left out, and the single long sentence that carries the crowd from line 11 to the end of the poem sweeps everyone along together. The more convincing reading is that shared need has made them a community, even though each person has come to fill a pot of their own.',
    },
    {
      title: 'Childhood and vulnerability',
      body: 'The poem ends not with the adults but with the children, and that choice shapes its meaning. The adults arrive with containers and desperate hands, thinking about what they can carry home. The children simply play, naked and shrieking in the spray, their wet skin catching the light. For them the water is pure joy. But the last phrase, “small bones”, reminds us how young and slight they are, and bones are also what is left of a body, so the blessing sung over them has a shadow of a prayer at a graveside. Dharker has made documentary films for organisations in India working with women and children, and the poem looks at these children with the same tenderness and the same clear sight. Pearson’s student book asks why she ends on the children rather than the adults. One answer is that they have the most to gain from water and the least protection without it.',
    },
    {
      title: 'Joy in hardship',
      body: 'The most joyful scene in the poem is caused by a failure: a pipe that bursts. Dharker does not pretend otherwise, and she does not let the failure spoil the joy either. The sounds grow louder, from a single imagined drop to a “roar of tongues”; the sentences lengthen and race; the images glitter with metal and sunlight, until the water becomes a “liquid sun”. The reader is carried along by the excitement. Yet the poem begins in drought, and its opening adverb in stanza 3 makes the burst an occasional event rather than a new beginning: the dry days will return. The poem holds joy and hardship together without resolving them. That balance is its honesty, and an essay that sees only celebration, or only suffering, has read half the poem.',
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The observing voice: never says I, and speaks to the reader directly only once, at the start of stanza 2',
      body: 'The speaker is almost invisible. There is no first person anywhere in the poem, so we never learn who is watching or whether they belong to the neighbourhood. What we have instead is an eye and an ear: the voice moves like a film camera from the close-up of cracked skin, to the sound of one drop, to a wide view of the streets, and back to a close-up of the children. The one direct address is the command at the start of stanza 2, which asks the reader to imagine the drop, drawing us into the thirst before the pipe bursts. It is tempting to identify the speaker with Dharker, who lived in Mumbai and made documentary films there, and Pearson’s student book sees her film-maker’s and painter’s eye in the poem’s vivid pictures. That is a fair link, but a careful answer writes about the speaker, or about what Dharker presents, rather than claiming the poem records her own experience. The tone is sympathetic and admiring, and the final phrase shows a watcher who sees the children’s frailty as clearly as their joy.',
    },
    {
      name: 'The community',
      role: 'The people of the huts, who rush to the burst pipe',
      body: 'The community is never individualised: no one is named, and the whole neighbourhood acts as one. Dharker calls them a “congregation”, which gives their rush to the water the feeling of people gathering to worship, and she lists the whole population, men, women and children, in one breath in lines 12 and 13. They come with pots of different metals and with plastic buckets, and the list ends with their hands, as if the people themselves have become containers. The informal verb in line 14 shows them pushing in, which is both comic and telling: need makes them urgent. The poem does not pity them from above. It shows their energy and resourcefulness, and lets the reader draw conclusions about why a whole neighbourhood must drop everything when a pipe breaks.',
    },
    {
      name: 'The children',
      role: 'The children playing naked in the spray; the poem’s final focus',
      body: 'The children fill the last stanza. They play naked in the water and shriek in it, and the verb Dharker uses for their noise at line 19 can mean delight or distress, although here delight seems likelier. The sunlight and water make their wet skin gleam, and line 20 uses a painter’s word for the brightest points of light in a picture, which suits a poet who is also an artist. The final phrase, “small bones”, is the most important thing said about them: it stresses their youth and thinness, and it ends the poem on the physical fact of their fragility. They are the poem’s image of what water means at its purest, which is life and joy, and of what its absence would cost.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The community',
      kind: 'observer and observed',
      note: 'The speaker watches the crowd from outside the action, never saying I or we, and describes them with admiration and some humour rather than pity. Calling them a congregation lends their scramble for water a kind of dignity.',
    },
    {
      from: 'The community',
      to: 'The children',
      kind: 'adults and children of the same neighbourhood',
      note: 'The adults come with pots and desperate hands, thinking of what they can carry away; the children simply play in the spray. The contrast shows two ways of meeting the same water: as a need to be met, and as a joy to be felt.',
    },
    {
      from: 'The speaker',
      to: 'The children',
      kind: 'watcher and watched',
      note: 'The poem’s last close-up. The speaker’s attention narrows from the whole crowd to the children’s shining skin and then to their bones, so the watching becomes tender and protective, and the joy of the scene is seen alongside its fragility.',
    },
  ],

  keyQuotes: [
    {
      text: 'cracks like a pod',
      where: 'Stanza 1, line 1',
      analysis:
        'The poem’s first image is a simile that makes drought physical. A pod is the case that holds a plant’s seeds, and when it dries out it splits. Dharker never says whose skin it is, which opens two readings: the cracked earth of a dry city, or the dry skin of the people who live there. The better answer is both, because in this poem the land and the bodies suffer together. The hard k sound in the verb makes the line sound brittle. And a pod holds seeds, so even this image of dryness carries a hint of life waiting for water, which the final stanza, full of children, answers.',
    },
    {
      text: 'kindly god',
      where: 'Stanza 2, line 6',
      analysis:
        'The imagined sound of a single drop echoing in a cup becomes a god speaking. The metaphor shows how precious water is: something as small as a drip is holy. The god is gentle and generous, a kindly one, not a god of power or judgement, and the poem says a god, not God, which suggests it belongs to no single faith. The phrase rhymes with pod in line 1, framing the first two stanzas between the cracked body and the god who could relieve it. But the god is only imagined: stanza 2 opens with a command to imagine, so this kindness exists only in the mind of someone who is thirsty.',
    },
    {
      text: 'silver',
      where: 'Stanza 3, line 9',
      analysis:
        'When the pipe bursts, the water is simply called silver, a metaphor that works through colour and through value. Spraying water in sunlight does look silver, but silver is also money and treasure, and the line follows a word for luck at line 8 that also means wealth. In places where many people have to buy their water from vendors, as the context section on this page shows, it is close to currency. The metaphor begins a pattern of metals running through the poem, from the metal cup of stanza 2 to the metal pots of lines 14-15 and the burnished skin of the children. The irony is plain: the only riches that ever reach this neighbourhood arrive by accident, and spill onto the street.',
    },
    {
      text: 'roar of tongues',
      where: 'Stanza 3, line 11',
      analysis:
        'The water finds a voice. Roar is a word for a lion or a crowd, so the water is personified as powerful, even wild, and the sound of the poem has grown from the tiny imagined drip of stanza 2 to this. Tongues works in several ways at once: the streams of water lick out of the pipe like tongues, and the phrase also suggests many voices shouting together as the crowd arrives. There may be a religious echo too, of the story of Pentecost, in which believers begin to speak in other tongues after a sudden rushing sound; that is a possibility rather than a certainty, but it fits the religious language around it. The phrase is loud, wet and full of life.',
    },
    {
      text: 'congregation',
      where: 'Stanza 3, line 12',
      analysis:
        'A congregation is a group of people gathered for worship, as Pearson’s own glossary notes, so one word turns the crowd rushing out of their huts into worshippers and the burst pipe into a place of prayer. It stresses unity: they are gathered together with one purpose. The colon after it opens a list of everyone who comes, adults and children alike, which shows the whole community drawn in. There is also irony, and even comedy, in the word, because this congregation has not come to pray quietly but to push forward carrying pots and buckets. Dharker lets the reader enjoy the energy while understanding the need behind it.',
    },
    {
      text: 'liquid sun',
      where: 'Stanza 4, line 19',
      analysis:
        'The children play in the spray, and the water and sunlight merge into a single image. The metaphor is almost a paradox, because the sun is what dried the land and cracked the skin in stanza 1, and water is its opposite. Here the two become one, and the heat that caused the suffering is turned into something the children can bathe in. The image is bright, warm and joyful, the high point of the poem’s celebration. It also shows the painter’s eye Pearson notices in Dharker’s work: the middle of the stanza is all light and shine on wet skin.',
    },
    {
      text: 'small bones',
      where: 'Stanza 4, line 23',
      analysis:
        'The final phrase undercuts the joy just before the poem ends. Small stresses how young and slight the children are, and it echoes line 4, where the same adjective described the imagined splash, so the children seem as fragile as the little water they usually have. Bones may suggest thinness, even hunger, and bones are also what is left of a body after death, so a blessing sung above bones sounds uncomfortably like a prayer at a burial. Not every reader will go that far, and the phrase can be read simply as tender. But ending on the body’s frailty stops the poem being only a celebration.',
    },
  ],

  extracts: [
    {
      title: 'The drought and the imagined drop',
      where: 'Stanzas 1-2, lines 1-6',
      pointer:
        'From the first line of the poem to the end of stanza 2 at line 6, anthology page 53: the two short stanzas before the pipe bursts.',
      summary:
        'The poem opens in drought. Skin splits open in the heat, and a short, flat sentence states that water is always scarce. The second stanza asks the reader to imagine a single drop falling into a metal cup, to hear the faint sound it makes and its echo, and to hear a gentle god speaking in that tiny sound.',
      annotations: [
        {
          phrase: 'cracks',
          note: 'A harsh, sudden verb with a hard k sound: the drought is violent to the body, and the line sounds brittle and dry.',
        },
        {
          phrase: 'pod',
          note: 'A seed case that splits when it dries. The simile makes skin seem like dry plant matter, but a pod holds seeds, so life is waiting for water.',
        },
        {
          phrase: 'kindly god',
          note: 'Even an imagined drop is holy: water is given a divine voice, gentle rather than powerful, which shows how precious a single drip is here.',
        },
        {
          phrase: 'god',
          note: 'A god, not God: the indefinite article and small g suggest a god of no single faith. It rhymes with pod in line 1, so the two stanzas are framed between the cracked body and the god.',
        },
      ],
      question:
        'How does Dharker use language and structure in lines 1-6 to present the effects of drought on the people of the poem?',
    },
    {
      title: 'The pipe bursts',
      where: 'Stanza 3, lines 7-17',
      pointer:
        'From the start of stanza 3 at line 7 to its last line, line 17: the burst pipe and the crowd that runs to it.',
      summary:
        'The long third stanza describes an occasional stroke of luck. The city’s water main bursts, and water smashes down onto the street with a roar. Out of their huts the whole neighbourhood rushes to it, men, women and children from all the nearby streets, pushing forward carrying pots and vessels of different metals, plastic buckets and desperate hands.',
      annotations: [
        {
          phrase: 'silver',
          note: 'Water as precious metal and as money, following a word for luck and wealth at line 8: the only riches here arrive by accident.',
        },
        {
          phrase: 'roar of tongues',
          note: 'Personification: the water becomes loud and wild, and tongues suggests both the streams of water and the many voices of the arriving crowd.',
        },
        {
          phrase: 'tongues',
          note: 'A possible echo of the Pentecost story, where believers speak in other tongues after a sudden rushing sound, which fits the stanza’s religious words.',
        },
        {
          phrase: 'congregation',
          note: 'The crowd becomes worshippers and the pipe a place of prayer; the colon that follows opens a breathless list of everyone who comes.',
        },
      ],
      question:
        'How does Dharker use language and structure in stanza 3 to convey the excitement and urgency of the moment the pipe bursts?',
    },
    {
      title: 'The children in the spray',
      where: 'Stanza 4, lines 18-23',
      pointer:
        'The final stanza, from line 18 to the last line of the poem, line 23. It continues the sentence begun at line 11.',
      summary:
        'The poem closes in on the children. They play naked in the spray, shrieking, their wet skin shining in the sunlight so that they seem to glitter. The stanza ends with the water, now called a blessing for the first and only time, singing above their slight bodies, and the poem stops on that image.',
      annotations: [
        {
          phrase: 'liquid sun',
          note: 'Water and light merge: the sun that caused the drought becomes something the children can bathe in, the peak of the poem’s joy.',
        },
        {
          phrase: 'small',
          note: 'The adjective returns from line 4, where it described the imagined splash, linking the children to the tiny amount of water they usually have.',
        },
        {
          phrase: 'bones',
          note: 'The last word of the poem: it suggests thinness and frailty, and faintly death, so the celebration ends on the body’s vulnerability.',
        },
      ],
      question:
        'How does Dharker use language and form in the final stanza to present the children, and how does the ending affect your response to the poem as a whole?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Simile',
      example: 'The opening simile, “cracks like a pod” (line 1), describing skin in the drought.',
      effect:
        'The comparison makes drought something the body suffers, not just a fact about the weather. Because the poem never says whose skin it is, it can be the earth’s or the people’s, and the image of a seed pod quietly carries the promise of life if water comes.',
    },
    {
      technique: 'Short declarative sentences',
      example:
        'Stanza 1 is two short, end-stopped sentences, the second a flat statement that water is always scarce, with its adverb placed unusually early.',
      effect:
        'The bluntness makes the drought feel permanent and unarguable. The unusual word order in line 2 puts the stress on the negative, as if scarcity were the one thing that never changes.',
    },
    {
      technique: 'Imperative',
      example: 'Stanza 2 opens at line 3 with a command telling the reader to imagine the drop.',
      effect:
        'The reader is drawn in and made to share the thirst. It also shows how rare water is: in stanza 2 it exists only in the imagination, which makes the flood of stanza 3 all the more overwhelming.',
    },
    {
      technique: 'Onomatopoeia and sibilance',
      example:
        'Lines 3-4 use words that imitate a single drop falling, splashing and echoing, and line 5 places the sound in a metal cup; the soft s sounds of line 4 make the splash audible.',
      effect:
        'The reader hears the drop in the silence of drought. The sounds are tiny and delicate, and they set up the poem’s pattern of growing noise, from this drip to the “roar of tongues” of line 11.',
    },
    {
      technique: 'Metaphor: water as divine',
      example: 'The drop’s imagined echo becomes a “kindly god” speaking (line 6).',
      effect:
        'Water is raised to something holy, which shows its value to people who lack it. The god is gentle, and it is a god rather than God, which suggests it belongs to no one religion; it is also only imagined, which hints that the kindness the people need is not yet real.',
    },
    {
      technique: 'Metaphor: water as wealth, and a semantic field of metal',
      example:
        'The water is “silver” (line 9), after a word for luck and riches at line 8; the containers in line 15 are of three different metals; the children’s skin shines like burnished metal in lines 20-21.',
      effect:
        'The metals make the water precious and the scene glitter, and they tie water to money, which is apt in a city where many of the poorest people have to buy their water. The irony is that the only wealth to reach the neighbourhood comes through a broken pipe.',
    },
    {
      technique: 'Personification',
      example:
        'The water finds a “roar of tongues” (line 11), and in line 22 the blessing is given a singing voice above the children.',
      effect:
        'The water becomes a living force, first wild and loud, then musical and gentle. Pearson’s student book calls this idea of water as a living force crucial to the poem, and it lets the water behave like the god of stanza 2.',
    },
    {
      technique: 'Religious lexis',
      example:
        'The title, the “kindly god” (line 6), the “congregation” (line 12) and the singing blessing of line 22.',
      effect:
        'The religious words turn a burst pipe into a miracle and a crowd into worshippers. They express real wonder, and they also carry irony, since people who must thank heaven for an accident have been failed on earth.',
    },
    {
      technique: 'Listing',
      example:
        'Lines 12-17 list the men, women and children of the neighbourhood without commas, then pots of three metals, plastic buckets, and finally hands.',
      effect:
        'The list is breathless and piles up as the crowd does. Running the people together shows the whole community as one body, and ending on hands rather than containers suggests the people have become vessels for the water they need.',
    },
    {
      technique: 'Plosive alliteration',
      example:
        'Line 20 repeats hard p sounds as the children’s wet skin shines in the light, using a painter’s word for its brightest points.',
      effect:
        'The plosives are bright and bursting, like droplets bouncing off skin, and they sound celebratory and admiring. The painter’s vocabulary reminds us that Dharker is also an artist, composing the children like figures in a picture.',
    },
    {
      technique: 'Juxtaposition',
      example:
        'The “liquid sun” of line 19 joins water and heat; the poem as a whole sets the dry stanzas 1-2 against the flood of stanzas 3-4.',
      effect:
        'Opposites meet, and the heat that caused the drought is transformed into joy. The larger contrast between scarcity and abundance makes each more intense, and the return to “small bones” at the end brings back the hardship the flood seemed to wash away.',
    },
    {
      technique: 'Irony',
      example:
        'The title names the water a blessing, a gift from above, but the poem shows it arriving through a city pipe that has burst.',
      effect:
        'The reader is asked to see two things at once: the genuine joy of the people, and the failure that makes an accident their best source of water. The irony is gentle rather than bitter, which makes it more persuasive.',
    },
  ],

  structureForm: [
    {
      heading: 'Free verse in four unequal stanzas',
      body: 'Blessing has no regular metre and no regular rhyme scheme, and its four stanzas are of very different lengths: 2, 4, 11 and 6 lines. The shape follows the water. The first two stanzas are short and sparse, like the drought and the imagined drip; the third is long and crowded, like the flood and the crowd; the fourth is shorter, as the spray settles on the children. Pearson’s student book suggests the uneven lengths reflect water dripping slowly, then bursting out, then falling away, and also that the apparently random breaks mirror water spilling freely. The first reading is more useful in an essay, because it links the form to the story the poem tells.',
    },
    {
      heading: 'Sentences that grow with the water',
      body: 'The poem has six sentences. Stanza 1 is two short ones; stanza 2 is one; stanza 3 has a fragment about sudden luck and a sentence about the pipe bursting. Then, at line 11, a single sentence begins that does not end until the last word of the poem, running through the list of people and containers and straight across the stanza break, because line 17 ends with a comma, not a full stop. The grammar floods as the water does, and the reader, like the crowd, is swept along without a pause until the poem stops on the children’s “small bones”.',
    },
    {
      heading: 'Enjambment',
      body: 'Lines often run on without a pause. The stroke of luck that opens stanza 3 spills from line 7 into line 8 before it is named, as water spills from the pipe; the list of men, women and children is split across lines 12 and 13; and the singing blessing of line 22 carries over into the final line. Enjambment gives the poem its sense of movement and overflow, which suits a poem about water that cannot be held back.',
    },
    {
      heading: 'Hidden rhyme',
      body: 'The poem does not rhyme regularly, but rhyme is there. Pod in line 1 rhymes with god in line 6, framing the first two stanzas between the cracked body and the god whose voice it longs for. In stanza 3 a cluster of lines ending on the same -ound sound, at lines 9, 10 and 13, gathers just as the water crashes and the crowd assembles. The effect is of echoes in the noise, like the echo of the drop in stanza 2, and of a pattern half hidden in a scene of apparent chaos.',
    },
    {
      heading: 'Present tense and the camera’s eye',
      body: 'The poem is in the present tense throughout, which makes the scene immediate, as if it is happening in front of us. There is no first person, so the viewpoint works like a documentary camera: close-up on cracked skin, a single sound inside a metal cup, a wide shot of the streets, then a close-up on the children. Dharker is a film-maker and an artist, and Pearson’s student book sees that influence in the poem’s striking visual pictures. Note also the adverb that opens stanza 3: the burst happens only now and then, so the present tense describes something that recurs, and the drought will come back.',
    },
    {
      heading: 'The title and the ending',
      body: 'The title is a single noun with no article, which makes it sound like a word said in prayer. The word itself appears only once in the poem, in line 22, where it is given a singing voice: the poem earns its title at the very end. Then it stops on bones, one of the plainest and most physical words in it. Ending on the children’s frailty rather than on the singing leaves the reader with a doubt as well as a joy, and it is the strongest evidence for reading Blessing as a protest as well as a celebration.',
    },
  ],

  vocabulary: [
    {
      term: 'blessing',
      definition:
        'A gift or favour believed to come from God; a prayer asking for that favour; and, more loosely, anything you are grateful for. The poem draws on all three senses.',
    },
    {
      term: 'pod',
      definition:
        'The long case in which a plant such as a pea or a bean grows its seeds. When a pod dries out, it splits open.',
    },
    {
      term: 'municipal',
      definition:
        'Belonging to or run by the government of a town or city. Pearson’s student book glosses it as owned and operated by the government. The pipe that bursts is a city pipe, which is why its water should belong to the people.',
    },
    {
      term: 'fortune',
      definition:
        'Luck, especially good luck; and also a large amount of money. Both senses are at work in line 8.',
    },
    {
      term: 'congregation',
      definition:
        'A group of people gathered for religious worship, especially in a church. Pearson’s glossary adds that it is often an audience attending a church service.',
    },
    {
      term: 'aluminium',
      definition:
        'A light, silvery metal used for cheap pots and pans. The anthology uses the British spelling; American English writes it without the second i.',
    },
    {
      term: 'highlights',
      definition:
        'In painting and photography, the brightest points of light in a picture, such as the shine on a wet surface. The word suits a poet who is also an artist.',
    },
    {
      term: 'drought',
      definition: 'A long period with little or no rain, causing a severe shortage of water.',
    },
    {
      term: 'monsoon',
      definition:
        'The seasonal wind that brings heavy rain to South Asia. In Mumbai the monsoon rains fall between June and September, and most of the rest of the year is dry.',
    },
    {
      term: 'informal settlement',
      definition:
        'A neighbourhood built without official planning or permission, often called a slum. Some are not officially recognised, and their residents may have no legal right to public services such as piped water.',
    },
    {
      term: 'imperative',
      definition:
        'A verb form that gives a command or instruction. Stanza 2 opens with one, addressed to the reader.',
    },
    {
      term: 'onomatopoeia',
      definition: 'A word that imitates the sound it names, such as splash or drip.',
    },
    {
      term: 'sibilance',
      definition:
        'The repetition of soft s and sh sounds, often to suggest softness, whispering or water.',
    },
    {
      term: 'plosive',
      definition:
        'A consonant sound made with a small burst of air, such as p, b, t, d, k and g. Repeated plosives can sound harsh, or bright and bursting.',
    },
    {
      term: 'semantic field',
      definition:
        'A group of words from the same area of meaning, such as religion or metal. Blessing uses both of those.',
    },
    {
      term: 'extended metaphor',
      definition:
        'A comparison developed across several lines or a whole poem, like Dharker’s treatment of water as precious metal and money.',
    },
    {
      term: 'lexis',
      definition: 'The vocabulary of a text; religious lexis means the words taken from religion.',
    },
    {
      term: 'enjambment',
      definition: 'Running a sentence on from one line of verse into the next without a pause.',
    },
    {
      term: 'free verse',
      definition: 'Poetry without a regular pattern of rhyme or metre, as here.',
    },
    {
      term: 'irony',
      definition:
        'A gap between what is said or expected and what is really the case. Here, water arriving as a blessing through a burst pipe.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Compare how the writers present suffering in Blessing and one other poem from Part 3 of the anthology.',
        skill: 'Comparison of language, form and structure across two poems',
        guidance: [
          'Choose a partner poem where suffering is seen by an observer, such as War Photographer, and open with a comparative argument: both poets show suffering far from the comfortable reader, but Dharker finds joy inside it while Duffy is angry at those who look away.',
          'Start with Blessing’s opening: the simile of skin that “cracks like a pod” and the blunt sentences of stanza 1 make drought physical. Set this against the way your partner poem first shows suffering.',
          'Analyse the irony of the burst pipe: the imagined drip speaks for a “kindly god” and the flood is “silver”, yet it arrives by accident. Compare how each poet hints at who is responsible.',
          'Compare the presentation of children: the joyful but fragile children of Blessing’s last stanza, and the children of your partner poem.',
          'Compare form: Blessing’s free verse and unequal stanzas against your partner poem’s structure. War Photographer, for instance, has four regular six-line stanzas, each ending in a rhymed couplet, as neatly arranged as the photographer’s film.',
          'End by weighing the two poems: which leaves the reader more disturbed, and why? The ending on “small bones” is a strong place to finish.',
        ],
      },
      {
        question: 'Compare how the writers present children in Blessing and Prayer Before Birth.',
        skill: 'Comparison of two named poems: language, form and structure',
        guidance: [
          'Open with the central difference: MacNeice gives the child a voice, as an unborn speaker praying for protection, while Dharker’s children never speak and are seen only from outside.',
          'Compare what the children need. MacNeice’s speaker asks to be given water first among the gifts of the natural world in stanza 3; Dharker’s children are given water, briefly, by accident.',
          'Analyse Blessing’s final stanza: the “liquid sun”, the painter’s word for light on their skin in line 20, and the fragile “small bones” of the last line.',
          'Compare the religious framing: a prayer against a blessing. Consider who is asked for help in each poem, and whether anyone answers.',
          'Compare structure: every stanza of MacNeice’s poem but the last begins with the same refrain about not yet being born, and the stanzas vary sharply in length; Dharker’s single long final sentence floods towards the children.',
          'Conclude on vulnerability: both poems end on what threatens a young life, but one ends in a desperate plea and the other in a quiet image. Say which you find more powerful.',
        ],
      },
      {
        question:
          'Compare how the writers use religious language and imagery in Blessing and one other poem from Part 3 of the anthology.',
        skill: 'Comparison: imagery, lexis and their effects',
        guidance: [
          'Pick a partner with strong religious imagery, such as The Tyger, which questions what kind of creator could make a tiger, or War Photographer, whose darkroom is lit like a church.',
          'Gather Blessing’s religious words: the title, the “kindly god”, the “congregation”, and the blessing that sings in line 22. Explain what each adds to the scene.',
          'Discuss why the poem says a god rather than God: perhaps a god of no single faith, perhaps water itself. Compare with how your partner poem imagines God or the sacred.',
          'Weigh sincerity against irony. Is the religious language in each poem wonder, criticism, or both? For Blessing, argue that a burst pipe treated as a miracle says something about how little the people are given.',
          'Compare how structure supports the imagery: Blessing’s sound rising from an imagined drip to a roar, against the pattern of your partner poem, such as Blake’s repeated questions.',
        ],
      },
      {
        question:
          'Practice for the Blessing half of an essay: how does Dharker use language, form and structure to present the importance of water?',
        skill: 'Language, form and structure analysis of one poem',
        guidance: [
          'Open with an argument: water is presented as holy, as wealth and as joy, and every one of those images also reminds us of how scarce it is.',
          'Stanzas 1-2: the drought simile, the blunt sentences, the command to imagine, and the drop that becomes a “kindly god”.',
          'Stanza 3: the burst, the metaphor of “silver”, the pun on luck and wealth at line 8, the “roar of tongues” and the “congregation”.',
          'Structure: the stanza lengths of 2, 4, 11 and 6 lines, the single sentence running from line 11 to the end, and the sound rising from drip to roar.',
          'Stanza 4 and the ending: the “liquid sun”, and the “small bones” that make the joy fragile. Finish on what the ending suggests about a blessing that depends on an accident.',
          'In the exam this becomes one half of a comparison, so practise ending each paragraph with a sentence that could link to a second poem.',
        ],
      },
    ],
    tips: [
      'Learn line 2 exactly as your anthology prints it. Its word order is unusual, and it is often misquoted in the ordinary order, even in a proof of one of Pearson’s own textbooks.',
      'Refer to stanzas and lines. The poem has four stanzas of 2, 4, 11 and 6 lines, and the anthology numbers every fifth line, so an examiner can find every reference.',
      'Do not state as fact that the poem is about Dharavi. The poem names no place. You can say it is set in a poor neighbourhood of a hot city, and that Pearson places it in Bombay in the dry season.',
      'Follow the shape. The strongest answers show how the poem moves from drought, to imagining, to flood, to the children, and how its stanzas, sentences and sounds grow with the water.',
      'Argue about the title. Say whether you read the religious language as sincere wonder, as irony, or as both, and say which you find more convincing and why.',
      'Do not stop at the joy. The last phrase, “small bones”, changes the whole poem, and an answer that ignores it has missed the turn.',
      'Keep both poems in every paragraph. The mark scheme holds back an answer that discusses only one poem, and it says that listing devices or retelling the poem is not enough.',
      'Learn short phrases, not whole lines. Two or three words embedded in your own sentence leave more room for analysis, and Blessing rewards close attention to single words.',
    ],
  },

  modelAnswer: {
    question:
      'Compare how the writers present suffering in Blessing and one other poem from Part 3 of the anthology (here, War Photographer).',
    paragraph:
      'Both poets present suffering through children, but where Duffy keeps her children at a distance, Dharker brings hers close enough to touch. Blessing ends with the children playing in the spray, and at first the mood is ecstatic: the metaphor of the “liquid sun” fuses water and light, so that the heat which caused the drought becomes something they can bathe in. Yet the final phrase, “small bones”, quietly undoes this joy. The adjective stresses how young and slight they are, and bones are what remains of a body, so the song of blessing above them sounds almost like a prayer at a burial. The relief, like the burst pipe that brings it, is an accident that will end. Duffy also sets children within her picture of suffering, recalling, by contrast with the safe English countryside, children fleeing across landmined fields in a war zone, but her anger is aimed at the people who watch, the Sunday readers whose tears last only from their bath to their lunchtime drink. Dharker judges no audience. Instead her structure, one long sentence running unbroken from line 11 to the last word, sweeps the reader into the children’s delight, so the reminder of their frailty arrives only at the very end, where it is hardest to forget.',
    commentary: [
      'It opens with a comparative argument, a precise difference between the two poets, so every point that follows serves a line of thought rather than a list of features.',
      'It analyses single words closely, the metaphor “liquid sun”, the adjective small and the noun bones, and says what each suggests instead of naming a device and moving on.',
      'It offers an interpretation with appropriate caution, that the ending sounds almost like a burial prayer, and grounds it in the text rather than asserting it as fact.',
      'It moves from language to structure, showing how the sentence running from line 11 to the end shapes the reader’s experience of the ending.',
      'It keeps both poems in the same paragraph and compares their purposes as well as their content, which is what separates developed comparison from two separate analyses.',
      'Every quotation is brief and embedded, and the partner poem is referred to through precise details, the landmined fields and the Sunday readers, which is how to use a poem you have learned without the text in front of you.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-2',
      title: 'The drought',
      summary:
        'The poem opens on drought. Skin splits open in the heat like a dry seed pod, and a second blunt sentence states that water is always scarce.',
      setting: 'A hot, dry neighbourhood of huts in a city, in the dry season',
      who: ['The community'],
      quote: 'cracks like a pod',
      themes: ['Poverty and inequality', 'Water as a precious gift'],
      tension: 3,
      significance:
        'Establishes the scarcity that gives every later image its force, and leaves open whether the cracked skin is the land’s or the people’s.',
    },
    {
      where: 'Stanza 2, lines 3-6',
      title: 'The imagined drop',
      summary:
        'The speaker tells the reader to imagine a single drop of water falling into a metal cup, the faint sound it makes and the echo that follows, and hears a gentle god speaking in it.',
      setting: 'Imagined: a single drop falling into a metal cup',
      who: ['The speaker'],
      quote: 'kindly god',
      themes: ['Water as a precious gift', 'Faith and the sacred'],
      tension: 2,
      significance:
        'The quietest moment in the poem: water is so rare it can only be imagined, and even a drip is holy.',
    },
    {
      where: 'Stanza 3, lines 7-11',
      title: 'The pipe bursts',
      summary:
        'Now and then, by sheer luck, the city’s water main bursts. Water smashes down onto the street, shining like precious metal, and the flood finds a loud, wild voice.',
      setting: 'A street where the city’s water main has burst',
      who: ['The speaker'],
      quote: 'roar of tongues',
      themes: ['Water as a precious gift', 'Poverty and inequality', 'Joy in hardship'],
      tension: 4,
      significance:
        'The turn from scarcity to abundance, and the source of the poem’s central irony: the blessing comes through a broken pipe.',
    },
    {
      where: 'Stanza 3, lines 11-17',
      title: 'The congregation',
      summary:
        'Out of their huts the whole neighbourhood comes running, people of every age from all the nearby streets, pushing forward with pots, buckets and desperate hands.',
      setting: 'The crowded lanes near the burst pipe',
      who: ['The community'],
      quote: 'congregation',
      themes: ['Community', 'Faith and the sacred', 'Poverty and inequality'],
      tension: 5,
      significance:
        'The poem’s most crowded and urgent moment, where need turns a crowd into a community and a scramble into something like worship.',
    },
    {
      where: 'Stanza 4, lines 18-23',
      title: 'The children in the spray',
      summary:
        'Children shriek and play naked in the water, their wet skin shining in the sunlight, and the water, now called a blessing, seems to sing above their slight bodies. The poem ends there.',
      setting: 'The sunlit spray of the burst pipe',
      who: ['The children', 'The speaker'],
      quote: 'small bones',
      themes: ['Childhood and vulnerability', 'Joy in hardship', 'Faith and the sacred'],
      tension: 4,
      significance:
        'The peak of the celebration and its undoing at once: the last words turn to the children’s fragility.',
    },
  ],

  compareWith: [
    {
      title: 'Prayer Before Birth',
      href: '/revision/texts/prayer-before-birth',
      reason:
        'Also in Part 3: both are built on religious speech, a prayer and a blessing, and both centre on the vulnerability of the young; MacNeice’s unborn speaker asks to be given water first among the gifts of the natural world.',
    },
    {
      title: 'War Photographer',
      href: '/igcse/edexcel/poetry/war-photographer',
      reason:
        'Also in Part 3: both show suffering far from the comfortable reader through an observer’s eye and both use religious imagery, but Duffy’s regular stanzas and anger at comfortable readers contrast with Dharker’s free verse and celebration.',
    },
    {
      title: 'The Tyger',
      href: '/igcse/edexcel/poetry/the-tyger',
      reason:
        'Also in Part 3: both imagine a god through one overwhelming force of nature, and both use the language of metal, Blake’s creator working at a forge and Dharker’s water shining like precious metal.',
    },
    {
      title: 'Search For My Tongue',
      href: '/revision/texts/search-for-my-tongue',
      reason:
        'Also in Part 3: both use plant imagery and the idea of moisture as life, Bhatt’s lost mother tongue growing back overnight like a moist shoot and Dharker’s dry skin splitting like a seed pod.',
    },
  ],

  contentGuidance: ['mythological_religious'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, ISBN 978 1 446 93108 0, page 53: the text of the poem and its line numbering; and the Part 3 acknowledgements (reproduced by permission of Bloodaxe Books on behalf of the author, from Postcards from God, Bloodaxe Books, 1997). Every quotation, line reference and word count on this page was checked against it, read from Pearson’s PDF on 25 September 2026. Also pages 52, 54-55, 63 and 64 for every reference to the comparison poems.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson, International GCSE English Literature student book, sample chapter (an uncorrected proof), Paper 1: Poetry and Modern Prose, pages 112-114 on Blessing: a second printing of the poem, identical to the anthology; the setting in Bombay in the dry season; Dharker as poet, artist and documentary film-maker; its glosses of municipal and congregation; its reading of the stanza lengths. Its commentary misquotes line 2, which is why the guide warns students about that line.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/English-lit-resources-sample-2.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature (4ET1) Paper 1R, Mark Scheme (Results), June 2024, Section B: the two question shapes (two named poems; one named poem and one of the candidate’s choice), the warning against summary and device-listing, and the limit on an answer that considers only one poem. Read from a local copy on 25 September 2026.',
    },
    {
      label:
        'Bloodaxe Books, author page for Imtiaz Dharker: upbringing, present home in London, Queen’s Gold Medal for 2014, Chancellor of Newcastle University 2020, OBE 2025, films for NGOs in India, and the Bloodaxe title Postcards from god (1997, with Purdah).',
      url: 'https://www.bloodaxebooks.com/ecs/category/imtiaz-dharker',
    },
    {
      label:
        'The Poetry Archive, Imtiaz Dharker: born in Pakistan in 1954, raised in Scotland; poet, artist and documentary film-maker; Queen’s Gold Medal for Poetry 2014; bibliography.',
      url: 'https://poetryarchive.org/poet/imtiaz-dharker/',
    },
    {
      label:
        'Wikipedia, Imtiaz Dharker: place of birth (its infobox gives 1955 for the year, against 1954 in its own text and in the other sources here), family’s move to Glasgow before her first birthday, Chancellor of Newcastle University from 1 January 2020.',
      url: 'https://en.wikipedia.org/wiki/Imtiaz_Dharker',
    },
    {
      label:
        'Poetry International, Imtiaz Dharker: Postcards from God published by Viking Penguin in 1994 and Bloodaxe in 1997; its account of the collection as openly socially critical, written in response to a city torn by extremism; and her birth in Lahore.',
      url: 'https://poetryinternationalweb.org/pi/site/poet/item/2720/27/Imtiaz-Dharker',
    },
    {
      label:
        'Encyclopedia.com, Dharker, Imtiaz: born 31 January 1954; Postcards from God, New Delhi and New York, Viking, 1994, and Newcastle upon Tyne, Bloodaxe, 1997. Agrees with Poetry International on the two editions.',
      url: 'https://www.encyclopedia.com/arts/culture-magazines/dharker-imtiaz',
    },
    {
      label:
        'Slate, How Bombay became Mumbai (2006): renamed in 1995 after the Shiv Sena won control of the Maharashtra state assembly; named after the goddess Mumbadevi.',
      url: 'https://slate.com/news-and-politics/2006/07/how-bombay-became-mumbai.html',
    },
    {
      label:
        'Wikipedia, Climate of Mumbai, from India Meteorological Department data: monsoon from June to September, dry season October to May.',
      url: 'https://en.wikipedia.org/wiki/Climate_of_Mumbai',
    },
    {
      label:
        'Jyotsna Kaushal and Pooja Mahajan, Asia’s largest urban slum, Dharavi: a global model for management of COVID-19, Cities, volume 111 (2021): around 850,000 residents, among the densest settlements in Asia, common water taps used by thousands daily.',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7832248/',
    },
    {
      label:
        'India Water Portal, Water poverty in Mumbai slum (27 August 2015; Subbaraman, Bloom, Patil Deshmukh and others): Kaula Bandar, a non-notified settlement denied legal access to most public services; two-thirds of households buying water from informal vendors; supply for about two hours a day.',
      url: 'https://www.indiawaterportal.org/articles/water-poverty-mumbai-slum',
    },
    {
      label:
        'Wikipedia, Water and religion: purification and the Ganges in Hinduism, washing before prayer in Islam, baptism and holy water in Christianity.',
      url: 'https://en.wikipedia.org/wiki/Water_and_religion',
    },
    {
      label:
        'Acts 2:1-4, King James Version, via Bible Gateway: the Pentecost narrative (a sudden sound as of a rushing mighty wind; the gathered believers speak with other tongues), for the possible echo in stanza 3, offered as a reading only.',
      url: 'https://www.biblegateway.com/passage/?search=Acts%202%3A1-4&version=KJV',
    },
    {
      label:
        'Consulted and NOT relied on: LitCharts, Blessing, and several revision sites, which say Dharker based the poem on Dharavi and quote an interview comparing water to money. No primary source for the interview was found, so neither claim is made here.',
      url: 'https://www.litcharts.com/poetry/imtiaz-dharker/blessing',
    },
  ],
}
