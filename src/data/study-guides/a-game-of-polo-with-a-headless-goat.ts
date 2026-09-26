import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * From A Game of Polo with a Headless Goat, Emma Levine. A complete guide that
 * REPLACES the page at /igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat.
 *
 * WHAT WAS WRONG (25 September 2026). The earlier page analysed buzkashi, the
 * horseback game in the book's title. The anthology does not print that
 * chapter. The prescribed extract is Levine filming a donkey-cart race on a
 * main road in Karachi, and a student revising goats and horsemen was revising
 * a passage the examiner will never print. Nothing from that page is reused.
 *
 * HOW THE QUOTATIONS WERE CHECKED. Every quotation, annotated phrase and
 * quoted phrase in the prose was checked word for word against the extract as
 * printed in the Pearson Edexcel International GCSE English Anthology, Issue 8
 * (February 2026), pages 14-15, read from Pearson's own PDF. That is the
 * prescribed wording, and the line numbers here are the anthology's. The
 * copyright line comes from the anthology's acknowledgements page.
 *
 * FACT-CHECKED 26 September 2026 against a fresh download of that PDF. The
 * quotations and line numbers held. What changed: a note called a 20-word
 * sentence short, a structure note credited all the opening dialogue to the
 * lads, the Karachi note read the city-centre comparison as describing the
 * setting, and a few unquoted six-word runs of Levine's wording were
 * paraphrased so that the quotation budget counts everything taken.
 *
 * WHY SO FEW WORDS ARE QUOTED. The extract is 870 words, a short work under
 * fair-dealing.ts, so the whole page may quote a tenth of it. The quotations
 * were chosen as one set and every analysis reuses them, so each key phrase is
 * counted once. Anything else is referred to by line number, which works
 * because the extract is printed, with those numbers, in the examination.
 */
export const guide: StudyGuide = {
  slug: 'a-game-of-polo-with-a-headless-goat',
  title: 'From A Game of Polo with a Headless Goat',
  author: 'Emma Levine',
  form: 'non-fiction',
  scope:
    'The extract printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 1, pages 14-15: 59 numbered lines in eleven paragraphs, from the drive to a viewing spot on the crest of a hill to Levine’s reflection after the race. It is one episode from the book, a donkey-cart race in Karachi, not the book as a whole, and not the goat game in its title.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Emma Levine 2000. From A Game of Polo with a Headless Goat, published by André Deutsch; as printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), pages 14-15.',
  },
  workLength: {
    words: 870,
    basis:
      'Counted from the Issue 8 anthology PDF, pages 14-15, lines 1-59 (first sentence to last), excluding Pearson’s introductory note and the footnote, and counting hyphenated words as separate words, as validate.ts does.',
  },

  overview: {
    summary: [
      'In this extract from her travel book A Game of Polo with a Headless Goat (2000), the British writer and photographer Emma Levine sets out to film a donkey-cart race in Karachi, Pakistan. Two young men, Yaqoob and Iqbal, drive her to the crest of a hill where they can see the race approaching, and she climbs into the open boot of the car with her camera so that they can join the chase when the race goes past. For nearly an hour almost nothing happens. Then two donkey-carts appear, racing side by side, with about fifty vehicles full of shouting spectators roaring along behind them.',
      'Yaqoob swerves into the convoy and holds a place near the front while oncoming traffic is forced into the ditch. As they reach the finishing line, which is a hospital gate, the leading donkey swerves and falls with its cart. The race is over, but the trouble is not: more than a hundred punters have bet on the result, and an angry argument breaks out about who has won. The lads leave Levine in the car, disappear into the crowd to find out what is happening, decide it is turning nasty and drive her away. Only then does Yaqoob reveal that he is too young to hold a driving licence.',
      'The piece is short, fast and funny, and most of its effects come from contrast: long waiting against sudden speed, two small donkeys against a roaring convoy, and what Levine expects against what actually happens. It is travel writing, so it informs as well as entertains, explaining how fast the donkeys can run and what the spectators’ rattles are. A strong answer treats it as more than a comic anecdote. It is a writer’s account of being thrilled by danger, and of realising, only afterwards, how much danger she was in.',
      'The extract is printed for you in the examination. The line numbers in this guide follow the anthology, Issue 8; check them against the copy printed with your paper, and use them to find each moment quickly in your own text.',
    ],
  },

  context: [
    {
      heading: 'Emma Levine',
      body: 'Emma Levine comes from Bradford, in Yorkshire. After graduating in 1991 she set off to travel in Asia, planning to stay a few months, and stayed eight years. Her first two books were about grassroots cricket in the Indian subcontinent; A Game of Polo with a Headless Goat followed, published by André Deutsch in 2000, after a thirteen-month journey across Asia researching its traditional sports. That journey also became a six-part series for the National Geographic Channel, A Different Ball Game, which she wrote and presented and which included donkey racing in Pakistan. She is now a London-based writer and photographer.',
    },
    {
      heading: 'A title about a different sport',
      body: 'The book’s title refers to a game played on horseback across Central Asia in which riders fight to carry a goat or calf carcass to a goal. It is known as buzkashi in Afghanistan, where it is the national sport, and as kok boru in Kyrgyzstan; Levine’s own website describes kok boru as headless goat polo. That game is not in this extract. The book moves across Asia from sport to sport, and the television series drawn from it covered, among others, oil wrestling in Turkey, martial arts in Kerala, camel racing in Iran and the donkey racing in Pakistan. If a revision source describes goats and horsemen, it is describing a different part of the book from the one you will be examined on.',
    },
    {
      heading: 'Karachi',
      body: 'Karachi is Pakistan’s largest city, with a population of over 20 million, and the capital of the province of Sindh. It stands on the Arabian Sea coast at the country’s southern tip, holds Pakistan’s two largest seaports, and was the federal capital from 1947 to 1959. The extract shows only one stretch of it: a main road on which, for the length of a race, ordinary traffic gives way to a sporting event. Its details (a hill, a lay-by, a ditch, a passing villager) suggest the edge of the city rather than its centre, so Levine’s comparison with a city-centre rush hour (line 28) borrows the chaos of the busiest streets to describe a road that is not one of them.',
    },
    {
      heading: 'Donkey-cart racing in Pakistan',
      body: 'Donkey-cart racing is a popular sport in parts of Pakistan. At an organised race in Karachi in June 2024, the city’s mayor called it part of Karachi’s cultural heritage and praised the people of Lyari for keeping the tradition alive. Betting on the races can also bring trouble with the law: in 2020, police in Rahim Yar Khan, in Punjab, raided a donkey-cart race, seized the stake money and arrested eight people under a gambling law. Levine’s race shows both sides. It has jockeys, officials and real skill, but it is run on a main road with bookmakers and over a hundred punters, and it ends in a row about money. Note that the extract never uses the word illegal; what it shows is a race whose followers ignore the rules of the road.',
    },
    {
      heading: 'Travel writing',
      body: 'The specification names travel writing among the literary non-fiction forms students should read, and this is a clear example. Travel writing is usually first-person and written after the journey, so the writer can shape events for effect: build suspense, withhold information and add reflection. Levine does all three. The form also informs. She passes on the claim that the Kibla donkey can reach 40 kph (lines 18-19) and explains the spectators’ rattles in brackets (line 22), as a reader who has never seen such a race would need. Travel writing always raises the question examiners reward: whose eyes is the reader seeing a place through, and how does the visitor present the people she meets?',
    },
    {
      heading: 'The comparisons Levine borrows',
      body: 'Levine explains the race through references her English-speaking readers would know. Wacky Races (line 2) was a Hanna-Barbera cartoon shown on the American network CBS from September 1968 to January 1969, in which eleven cars raced across North America and the villain Dick Dastardly laid traps that usually backfired. Formula One (line 28) is the top class of international single-seater motor racing, governed by the FIA, with a world championship held since 1950. The phrase “survival of the fittest” (line 30) was coined by the philosopher Herbert Spencer in 1864 as another name for natural selection; Charles Darwin took it up from 1868, including in the fifth edition of On the Origin of Species in 1869. Each reference makes the unfamiliar familiar, and each is a joke: a cartoon about cheating, the top class of motor sport, and a phrase from the theory of evolution, all applied to two donkeys on a main road.',
    },
    {
      heading: 'The text on the page',
      body: 'The anthology prints the extract on pages 14 and 15 beneath a short introductory note, with line numbers in the margin: 59 lines in eleven paragraphs, about 870 words. A footnote explains the word entourage (line 17). Page 14 ends with the donkey’s fall at line 42, and page 15 opens with the argument. The three dots at the end of line 38 may mark a cut, since the anthology prints an extract rather than a whole chapter, so do not build an argument on what they mean. Issue 8 of the anthology (February 2026) corrected one word in line 53 (sometime became some time); if you revise from an old photocopy, check it against the current issue.',
    },
  ],

  themes: [
    {
      title: 'Chaos as spectacle',
      body: 'The donkeys are the reason for the race, but the spectacle Levine describes is the chaos around them. The two animals are “almost dwarfed by their entourage”, the air fills with horns, bells and rattles, and men cheer from the roofs of cars, vans and lorries. Her own label for it, “Formula One without rules, or a city-centre rush hour gone anarchic”, makes disorder sound thrilling rather than frightening, and her long, list-filled sentences carry the reader along at the same speed. One reading is that she simply celebrates the chaos. Another is that she is quietly alarmed by it, since she stresses that traffic rules and common sense are being ignored and that oncoming cars are forced into the ditch. The more convincing view combines the two: while the race lasts she writes as someone swept up in the excitement, and the alarm arrives only in the final paragraph, once she has learned how young her driver was.',
    },
    {
      title: 'Anticipation and anticlimax',
      body: 'The extract is built as a series of build-ups and let-downs. The long wait of the first three paragraphs produces not action but “a villager on a wobbly bicycle”. The race finally arrives, builds to its climax at the finishing line, and stops when the leading donkey falls, in the four words “The race was over”. Even the result is an anticlimax, because nobody can agree who has won, and the final revelation about the driver deflates the triumph of the drive. The pattern keeps the reader off balance, which is where both the comedy and the suspense come from. It also suggests something about travel itself: what Levine came to film is never quite what she gets, and the best story turns out to be the unplanned one.',
    },
    {
      title: 'Rules broken and rules disputed',
      body: 'On the road there seem to be no rules at all. Levine calls the driving “Formula One without rules” and says the drivers are ignoring every rule of the road, and common sense with it. Yet the race does have rules, just not the ones she expected. There are jockeys, and officials who, she admits in brackets, really were monitoring it (line 45). Some of the punters claim that the fallen donkey went down because its rival was ridden too near it, which is an accusation of a foul, and the bookmakers want the race run again. Levine had assumed the winner was simply the one who finished. The most interesting reading is that the extract moves from lawlessness to law: the chaos is on the road, but the regulation, and the real danger, lies in the money. The final joke, that the driver was underage, adds one more broken rule to the list.',
    },
    {
      title: 'The outsider’s view',
      body: 'Levine is a visitor, and the whole extract is seen through her eyes. She explains the rattles and the speed of the Kibla donkey for readers who have never seen such a race, and reaches for reference points her English-speaking readers would know (Wacky Races, Formula One, a rush hour) to make the scene familiar. A critical reading is that this frames a local tradition as a comic spectacle for foreign readers. A stronger reading notices where the jokes land: on Levine herself, perched in a car boot, feeling silly, too quick to assume who had won, ordered to stay in the car and unaware that her driver was too young for a licence. She admires Yaqoob’s skill and does not mock the sport or its followers; her inverted commas round officials are the nearest she comes, and she withdraws that doubt at once. The perspective is an outsider’s, but a self-aware and affectionate one.',
    },
    {
      title: 'Youth, risk and thrill',
      body: 'The two lads have never been interested in donkey racing, but the chance to join the chase fires them up at once, and Yaqoob treats the convoy as a test of driving that he relishes. Levine’s list of what the road demands, ending in “nerves of steel, and an effective horn”, and her phrase “survival of the fittest” make the drive a contest that the young driver wins. The reveal at the end changes the meaning of that victory. The lads find the confession hilarious; Levine is glad she did not know. Arguably the contrast between their laughter and her relief is the extract’s quiet moral centre: the same risk is fun to the young and frightening to the adult looking back.',
    },
  ],

  characters: [
    {
      name: 'Emma Levine',
      role: 'The writer and first-person narrator: a British travel writer and photographer filming the race from the boot of a car',
      body: 'She is both narrator and participant, and the extract is built on the gap between the two. As a participant she is game for anything, asking to join the chase and climbing into a car boot with a camera. As a narrator, writing afterwards, she can laugh at herself: at her impatience, at her assumption that the donkey that finished had won, and at the risk she ran without knowing it. She is a professional observer who explains details for readers who were not there, yet she depends on her companions, who decide when to join the race, when to leave and what she should do. One reading is that she presents herself as a naive visitor. A stronger one is that the naivety is partly a comic persona, which lets her admire the chaos without seeming to judge it.',
    },
    {
      name: 'Yaqoob',
      role: 'The young driver, one of the two lads; revealed at the end to be underage and without a licence',
      body: 'He is the extract’s hero until its last lines. Levine introduces him through action (revving the engine, inching out of the lay-by, picking his moment to cut in) and her verbs make him skilful, bold and delighted: he relishes the test, loves the chaos, and swears more each time another car pushes in. The confession that he is underage and has no licence reframes all of it. His pride in his driving, and the lads’ laughter at the confession, show a young man for whom danger is fun; Levine’s relief that he told her only afterwards shows an adult for whom it is not.',
    },
    {
      name: 'Iqbal',
      role: 'The second of the two lads; the go-between who reports back from the crowd',
      body: 'He is named only in the last section (lines 51 and 54). Yaqoob, not Iqbal, is at the wheel, and when the two come back from the crowd it is Iqbal who reports that nothing is settled and that it is time to go, so he acts as Levine’s go-between and the voice of caution. Like Yaqoob he is wary of the angry crowd, yet he laughs at the confession, which suggests that the lads’ caution is about the punters rather than the road.',
    },
    {
      name: 'The crowd',
      role: 'Spectators, jockeys, officials, punters and bookmakers',
      body: 'Levine names no one in it, and that is the point: the crowd acts as one body. On the road it is a noisy, cheering convoy of men standing on roofs and leaning out of taxis; after the fall it becomes a threatening mass with money at stake. Levine is careful with the jockeys, noting that they use their whips with vigour but without cruelty (line 20), and she puts the word officials in inverted commas before admitting, in brackets, that they really were keeping watch over the race (lines 44-45). It is a small sign of a writer correcting her own assumptions as she goes.',
    },
  ],

  keyQuotes: [
    {
      text: 'We waited for eternity',
      where: 'Paragraph 2, line 7 (page 14)',
      analysis:
        'Hyperbole. By Levine’s own count a line later, nearly an hour had passed, so “eternity” tells us how it felt rather than how long it lasted. The short, flat clause slows the pace at exactly the point the reader wants action, and the self-mockery (she is sitting in a car boot, camera ready, watching a road on which almost nothing happens) makes her a narrator we trust, because she does not take herself too seriously.',
    },
    {
      text: 'a villager on a wobbly bicycle',
      where: 'Paragraph 2, line 9 (page 14)',
      analysis:
        'Bathos. After all the build-up, the only thing that passes is a man on a bike who nearly falls off. The adjective “wobbly” is comic in sound as well as sense, and the detail that he gazes round at them turns the camera round: for a moment it is Levine and the lads who are the odd spectacle. The anticlimax also makes the eventual arrival of the race feel all the more sudden.',
    },
    {
      text: 'almost dwarfed by their entourage',
      where: 'Paragraph 4, line 17 (page 14); the anthology footnotes entourage',
      analysis:
        'A contrast of scale. An entourage is the group of followers who surround a celebrity or a ruler, so the two small donkeys become stars with a vast, noisy crowd in tow, about fifty vehicles by Levine’s estimate. “Dwarfed” makes them look tiny, but “almost” holds back, and the next clause insists on their speed. The effect is affectionate comedy: the animals are the reason for the event, and yet the event has nearly swallowed them.',
    },
    {
      text: 'horns tooting, bells ringing',
      where: 'Paragraph 5, line 21 (page 14)',
      analysis:
        'A list of sounds, each a noun followed by a present participle, with onomatopoeia in “tooting”. There is no main verb, so the phrase reads like a rush of impressions arriving at once, and the -ing forms make every noise continuous. Levine then adds the rattles, with a bracketed explanation for readers who have never heard them, so the sentence both immerses and informs, which is exactly the double job of travel writing.',
    },
    {
      text: 'Formula One without rules, or a city-centre rush hour gone anarchic',
      where: 'Paragraph 6, line 28 (page 14)',
      analysis:
        'Two metaphors, offered as alternatives, each built on a contradiction. Formula One is the top class of single-seater motor racing, run by a governing body, so “without rules” removes the one thing that makes it a sport. A rush hour is ordinary and tedious, so “gone anarchic” turns boredom into riot. The pair tells her readers what the scene feels like in terms they know, and the humour lies in how far both comparisons fall short. The words after the semi-colon drop the jokes and say it plainly: traffic rules and common sense are being ignored.',
    },
    {
      text: 'survival of the fittest',
      where: 'Paragraph 7, line 30 (page 14)',
      analysis:
        'An idiom from evolutionary theory, Herbert Spencer’s phrase for natural selection, which Darwin later adopted, applied to traffic. It makes the road a jungle where only the quickest and boldest get through, and it introduces the list of skills that follows. The scientific grandeur of the phrase set against the business of cutting up other cars is comic, but it also carries a real warning, since on a main road the price of losing is a crash.',
    },
    {
      text: 'nerves of steel, and an effective horn',
      where: 'Paragraph 7, line 33 (page 14)',
      analysis:
        'The end of a list of driving skills, and a deliberate anticlimax. The first items, about steering, reflexes and nerve, sound heroic; then the list closes on a car horn. The deflation mocks the idea of a noble contest while admitting that, on this road, noise is as useful as courage. The semi-colons that separate the items keep the sentence moving at the speed of the driving it describes.',
    },
    {
      text: 'And then the trouble began',
      where: 'Paragraph 9, line 43 (page 15)',
      analysis:
        'A short sentence that opens a new paragraph, and a new page of the anthology, and turns the extract. “And then” is the language of oral storytelling, promising a sequel just when the race has ended, and “trouble” is a deliberately vague, understated word for what becomes an angry crowd. Structurally it tells the reader that the real contest of the extract is not the race but the argument about who won it.',
    },
    {
      text: 'Voices were raised, fists were out and tempers rising',
      where: 'Paragraph 9, line 48 (page 15)',
      analysis:
        'A tricolon in which each short clause takes the crowd a step closer to violence. The passive first clause and the dropped verb of the last mean that no one is named as raising a voice or a fist, so the anger seems to belong to the crowd as a whole, which is how a frightening crowd feels from outside. The quickening rhythm enacts the escalation, and it explains why the lads decide it is time to leave.',
    },
    {
      text: 'I don’t even have my licence yet because I’m underage',
      where: 'Yaqoob, paragraph 10, line 56 (page 15)',
      analysis:
        'The punchline, held back until the danger is over. Yaqoob delivers it casually, in direct speech, as a joke, and it forces the reader to rethink everything before it: the skilful driving we admired was the work of someone too young to hold a licence. Levine withholds the fact partly because she learned it only then, and partly because the structure depends on it. It turns a story about a race into a story about a risk the writer did not know she was taking.',
    },
  ],

  extracts: [
    {
      title: 'Waiting for the race',
      where: 'Paragraphs 1-3, lines 1-13, anthology page 14',
      pointer:
        'Lines 1-13: from the search for the best viewing spot on the crest of the hill to the end of paragraph 3, where the lads are still sure the race is coming.',
      summary:
        'Levine and the lads choose a spot on the crest of the hill, where they can see the race approaching, and agree a plan: she will film from the open boot, and they will join the chase when the donkeys pass. Then nothing happens for nearly an hour. A villager cycles unsteadily past, carts of spectators go by, and the only news from them is that the race is on its way. Levine starts to feel foolish and to doubt that the race will happen at all.',
      annotations: [
        {
          phrase: 'We waited for eternity',
          note: 'Hyperbole that makes the wait feel endless. The short main clause stalls the pace just when the reader expects action, so the delay itself becomes the suspense.',
        },
        {
          phrase: 'a villager on a wobbly bicycle',
          note: 'Bathos. The only action is a man who nearly falls off his bike and gazes round at them, which makes the watchers the spectacle and keeps the tone light.',
        },
        {
          phrase: 'Coming, coming',
          note: 'The repeated reply from the passing spectators is vague enough to extend the delay rather than end it. The doubling sounds cheerful, and the reader shares Levine’s growing doubt about whether to believe it.',
        },
      ],
      question:
        'How does Levine use language and structure in lines 1-13 to build anticipation before the race arrives?',
    },
    {
      title: 'Inside the convoy',
      where: 'Paragraphs 4-7, lines 14-38, anthology page 14',
      pointer:
        'Lines 14-38: from the moment the two donkey-carts come into view to the end of paragraph 7, which closes with three dots after Yaqoob’s language grows more heated.',
      summary:
        'The race arrives in a haze of exhaust and dust, the two donkeys running side by side ahead of about fifty vehicles full of cheering men. The noise grows. Yaqoob swerves into the convoy and holds a place at its head, while oncoming traffic is forced into the ditch. Levine describes two races at once, the donkeys in front and the vehicles fighting for position behind, and stresses both the danger and Yaqoob’s delight in it.',
      annotations: [
        {
          phrase: 'almost dwarfed by their entourage',
          note: 'The donkeys are the stars of the show, yet the vehicles following them are so many and so loud that the animals nearly disappear from view.',
        },
        {
          phrase: 'horns tooting, bells ringing',
          note: 'A verbless list with onomatopoeia. The present participles make each sound continuous, so the reader hears everything at once, as Levine did from the boot.',
        },
        {
          phrase: 'gone anarchic',
          note: 'Anarchic means without government or order, so an everyday traffic jam becomes a riot. It prepares the plain statement about common sense that ends the sentence.',
        },
        {
          phrase: 'nerves of steel, and an effective horn',
          note: 'A list of heroic driving qualities that ends on a car horn: anticlimax that mocks the idea of noble sport while admitting what actually works on this road.',
        },
        {
          phrase: 'his language growing more colourful',
          note: 'A euphemism, since colourful language means swearing. Levine hints at it with a smile rather than printing it, which keeps the tone comic and the driver likeable.',
        },
      ],
      question:
        'How does Levine use language to make the race seem both exciting and chaotic in lines 14-38?',
    },
    {
      title: 'The fall, the argument and the reveal',
      where: 'Paragraphs 8-11, lines 39-59, anthology pages 14-15',
      pointer:
        'Lines 39-59: from the point where the road straightens for the finish to the last line of the extract.',
      summary:
        'As they reach the finishing line, a hospital gate, the leading donkey swerves and falls with its cart, and the race ends. Then the betting crowd starts to argue about who has won, and the bookmakers want a re-run. The lads leave Levine in the car, find that the mood is turning nasty and drive her away, and Yaqoob reveals that he is too young to hold a licence. Levine closes by reflecting on what could have gone wrong.',
      annotations: [
        {
          phrase: 'The race was over',
          note: 'Four flat words end the paragraph and the page. After the long, crowded sentences of the race, the brevity mimics a sudden stop.',
        },
        {
          phrase: 'And then the trouble began',
          note: 'A storyteller’s turn at the top of the next page: the race is finished but the extract is not, and trouble understates what is coming.',
        },
        {
          phrase: 'tempers rising',
          note: 'The last step of a three-part escalation, with its verb dropped, so the sentence ends on a feeling that is still climbing rather than on a finished action.',
        },
        {
          phrase: 'high-stakes donkey race',
          note: 'Arguably a pun. The stakes are literally high because money has been bet, and the phrase also names the danger Levine was in; setting it beside the word donkey keeps it comic.',
        },
        {
          phrase: 'could have caused problems',
          note: 'Understatement closes the extract. A crash caused by an unlicensed driver in a betting crowd would have been serious, and the mildness of problems is a dry joke at her own expense.',
        },
      ],
      question:
        'How does Levine use structure in lines 39-59 to change the mood of the extract after the race is over?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Hyperbole',
      example:
        '“We waited for eternity” (line 7), when by her own count nearly an hour had passed.',
      effect:
        'The exaggeration is comic and self-mocking, and it puts the reader inside Levine’s impatience. Because the reader, too, is waiting for the race promised in the first line, the hyperbole turns a dull stretch of time into suspense.',
    },
    {
      technique: 'Bathos and anticlimax',
      example:
        '“a villager on a wobbly bicycle” (line 9) as the only action on the road; the list of driving skills that ends on “an effective horn” (line 33).',
      effect:
        'A build-up that collapses into something trivial. Levine uses it repeatedly to keep the tone light and to undercut any sense that the event is grand or heroic, which also stops the danger from feeling heavy until the end.',
    },
    {
      technique: 'Metaphor built on contradiction',
      example: '“Formula One without rules, or a city-centre rush hour gone anarchic” (line 28).',
      effect:
        'Each metaphor takes something familiar and removes the thing that defines it: the rules of top-class motor racing, the dull order of a traffic jam. The reader gets a vivid picture and a joke at once, and the joke carries a serious point about how dangerous the road has become.',
    },
    {
      technique: 'Listing and onomatopoeia',
      example:
        '“horns tooting, bells ringing” (line 21), then the rattles, then men on cars, vans and lorries and leaning out of taxis (lines 23-24).',
      effect:
        'The lists pile sound on sound and vehicle on vehicle, so the sentences themselves feel crowded. The onomatopoeia and the present participles make the noise immediate and continuous, and the reader experiences the approach of the convoy as Levine did.',
    },
    {
      technique: 'Allusion and idiom',
      example:
        'Wacky Races (line 2), Formula One (line 28) and “survival of the fittest” (line 30).',
      effect:
        'Levine translates a Karachi street race into references her readers know: a cartoon about cheating drivers, elite motor racing and evolutionary theory. The borrowed frames make the scene easy to picture and add irony, because none of them quite fits two donkeys on a main road.',
    },
    {
      technique: 'Tricolon and escalating syntax',
      example: '“Voices were raised, fists were out and tempers rising” (line 48).',
      effect:
        'Three short, parallel clauses climb towards violence, and the missing verb in the last makes the anger feel unfinished and still growing. Leaving the crowd unnamed makes it feel like one frightening body, which prepares the lads’ decision to leave.',
    },
    {
      technique: 'Euphemism and understatement',
      example:
        'Yaqoob’s “language growing more colourful” (line 38); the final judgement that it all “could have caused problems” (line 59).',
      effect:
        'Levine plays things down with a straight face. The euphemism keeps the swearing off the page and the driver likeable; the closing understatement is a dry joke that invites the reader to imagine how much worse things might have been.',
    },
    {
      technique: 'Direct speech and the delayed punchline',
      example:
        'Yaqoob’s confession, “I don’t even have my licence yet because I’m underage” (line 56).',
      effect:
        'Direct speech gives the key revelation in Yaqoob’s own casual voice, which makes it funnier and more shocking. Placing it after the danger has passed lets Levine surprise the reader as she was surprised, and makes the reader reread the whole drive.',
    },
    {
      technique: 'Parenthesis',
      example:
        'Bracketed asides explain the rattles (line 22), note that nobody keeps to a lane (line 32) and admit that the officials were genuine (line 45).',
      effect:
        'The brackets are the travel writer’s voice stepping in to inform or correct, as if talking directly to the reader. They also slow the racing sentences for a moment, and the last one shows Levine revising her own assumption in front of us.',
    },
  ],

  structureForm: [
    {
      heading: 'A long fuse',
      body: 'The race does not appear until line 14. The first thirteen lines, almost a quarter of the extract, are waiting: a plan, an hour of nothing, a villager on a bicycle, passing carts, a promise that the race is coming. The delay builds suspense and puts the reader in Levine’s position, so that the arrival of the race in paragraph 4 feels sudden, and the humour of the wait makes the later excitement feel earned.',
    },
    {
      heading: 'Acceleration',
      body: 'Once the race arrives, the paragraphs fill with lists, semi-colons and clauses added one after another. The longest paragraph in the extract, lines 30-38, is the one describing the wildest driving, and apart from one three-word sentence about Yaqoob’s delight (line 37), its sentences hardly pause. Sentence structure imitates speed: the reader has no more time to stop than the driver does.',
    },
    {
      heading: 'The sudden stop',
      body: 'The fall at the finishing line is told in one sentence, and then comes the four-word sentence “The race was over” at line 42, which ends the paragraph and page 14 of the anthology. The contrast between the long sentences of the race and this flat statement mimics an abrupt halt, and for a moment it seems that the story has ended.',
    },
    {
      heading: 'A second contest',
      body: 'It has not. “And then the trouble began” (line 43) opens a new section in which the real contest is about money: who has won, whether the fall was a foul, whether the race should be run again. This twist shifts the mood from comic excitement to threat, and it changes Levine’s position from participant to someone kept safely in the car. Read this way, the race is the prologue to the story rather than the story itself.',
    },
    {
      heading: 'Speech at the edges',
      body: 'Direct speech appears only at the beginning (the plan in lines 3-5, the question to the passing spectators and their reply in lines 11-12) and at the end (lines 53-56). Everything from the arrival of the race to the end of the argument (lines 14-50) is narration, with no direct speech at all. The dialogue frames the chaos: the lads’ confident planning before it, a cautious exit and a joke after it. The last piece of speech, Yaqoob’s confession, is also the extract’s biggest surprise.',
    },
    {
      heading: 'The reveal and the reflection',
      body: 'Levine narrates in the past tense, looking back, so she knows from the start what she withholds until line 56. The final paragraph (lines 57-59) steps out of the action altogether into reflection: the lads laugh, and Levine weighs what might have happened. Ending on reflection rather than event is typical of travel writing, and it gives the extract its shape: excitement first, understanding afterwards.',
    },
    {
      heading: 'Form: travel writing that informs and entertains',
      body: 'The extract is first-person travel writing, and it does two jobs at once. It entertains, through comedy, suspense and a twist, and it informs, through details a distant reader needs: the donkeys’ speed, what the rattles are, who has money on the result. Examiners reward answers that notice both purposes and show how a single sentence can serve them together, as the bracketed explanation of the rattles does.',
    },
    {
      heading: 'What the extract does not tell you',
      body: 'The anthology gives no account of how Levine came to be with Yaqoob and Iqbal, what happened before the drive to the hill, or whether the dispute was settled. Do not invent it. The title of the book refers to a different sport altogether, and the three dots at line 38 may mark a cut. Write about what the printed extract does, which is always what the question asks.',
    },
  ],

  vocabulary: [
    {
      term: 'entourage',
      definition:
        'A group of people who travel with or surround an important person. The anthology footnotes it at line 17, where the entourage is about fifty vehicles following two donkeys, which is the joke.',
    },
    {
      term: 'convoy',
      definition:
        'A group of vehicles travelling together. The spectators’ vehicles form one behind the race.',
    },
    {
      term: 'lay-by',
      definition:
        'An area at the side of a road where vehicles can pull in and stop. Yaqoob edges out of one to join the race.',
    },
    {
      term: 'boot',
      definition:
        'The luggage space at the back of a car (British English; trunk in American English). Levine films from inside it with the lid open.',
    },
    {
      term: 'kph',
      definition:
        'Kilometres per hour. Levine passes on the claim that the Kibla donkey can reach up to 40 kph, about 25 miles per hour.',
    },
    {
      term: 'crest, brow',
      definition:
        'The top of a hill. Levine uses both words (lines 1 and 7) for the same viewing point, a lay-by at the top of the hill on the race route.',
    },
    {
      term: 'jockey',
      definition:
        'A person who rides in a race; here the riders perched on top of the small donkey-carts.',
    },
    {
      term: 'punter',
      definition:
        'An informal British word for someone who places a bet. More than a hundred of them have money on this race.',
    },
    {
      term: 'bookmaker',
      definition:
        'A person or business that takes bets and pays out winnings. In the extract the bookmakers want the race run again.',
    },
    {
      term: 'anarchic',
      definition:
        'Without order or control, from anarchy, the absence of government. Used of a rush hour, it suggests traffic in revolt.',
    },
    {
      term: 'flouting',
      definition:
        'Openly ignoring a rule as if it did not matter. Not to be confused with flaunting, which means showing off.',
    },
    {
      term: 'relished',
      definition:
        'Enjoyed greatly and with obvious pleasure, as Yaqoob enjoys the test of his driving.',
    },
    {
      term: 'maracas',
      definition:
        'A pair of shaken rattles used in music. Levine uses them as a comparison to explain the special rattles heard in the convoy.',
    },
    {
      term: 'volatile',
      definition:
        'Liable to change suddenly and violently. A volatile situation is one that could explode at any moment.',
    },
    {
      term: 'sedate',
      definition:
        'Calm, slow and unhurried. The lads drive away at a more sedate pace, the opposite of the race.',
    },
    {
      term: 'bathos',
      definition:
        'A sudden drop from the grand or serious to the trivial, often for comic effect, as when a list of heroic driving skills ends with a car horn.',
    },
    {
      term: 'hyperbole',
      definition: 'Deliberate exaggeration for effect, such as calling an hour’s wait an eternity.',
    },
    {
      term: 'euphemism',
      definition:
        'A mild or indirect expression used in place of a blunt one, such as colourful language for swearing.',
    },
    {
      term: 'understatement',
      definition:
        'Presenting something as less serious than it is, often for dry humour, as in the extract’s last line.',
    },
    {
      term: 'anticlimax',
      definition:
        'A disappointing or deflating end to a build-up. The extract has several, from the villager on a bicycle to the disputed result.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Emma Levine use language and structure to present the donkey race as both exciting and dangerous? Support your answer with examples from the text.',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          'Open with an overview: Levine presents the race as a thrilling spectacle whose danger she fully understands only afterwards.',
          'Language: analyse the paired metaphors in line 28, taking apart “without rules” and “gone anarchic”, and the sound-list in line 21.',
          'Language: show how bathos and humour, such as the list ending in “an effective horn” and the euphemism in line 38, keep the tone light while the danger grows.',
          'Structure: the long wait in lines 1-13 as suspense, the longest paragraph (lines 30-38) for the wildest driving, and the four-word stop at line 42.',
          'Structure: the second contest in lines 43-50 and the delayed reveal at line 56, which recasts the whole drive as more dangerous than it seemed.',
          'Conclude on the writer’s purpose: to entertain and inform, and to make the reader share both her thrill and her relief looking back.',
        ],
      },
      {
        question:
          'In lines 43-59, how does Levine show that the mood changes once the race is over?',
        skill: 'Language and structure analysis of one section',
        guidance: [
          'Identify the turning point: “And then the trouble began” at the top of page 15, a short sentence that opens a new stage.',
          'Track the escalation in lines 43-50, from Levine’s mild assumption about the winner to the tricolon in line 48 and the demand for a re-run.',
          'Show how Levine’s position changes, from participant to someone kept in the car while the lads go into the crowd.',
          'Analyse the reveal in direct speech (line 56) and the contrast between the lads’ laughter and Levine’s relief.',
          'End on the understatement of the final line and how it combines humour with a sober judgement.',
        ],
      },
      {
        question:
          'Compare how Emma Levine and Kari Herbert, in From The Explorer’s Daughter, present their experiences of watching a local event as visitors. Practise with this pairing; in the examination the second text will be an unseen passage.',
        skill: 'Comparison of ideas, perspectives and methods',
        guidance: [
          'Establish what each writer watches and what each feels about it, and state the main similarity and the main difference in one sentence.',
          'Compare purpose and tone: Levine chiefly entertains, through comedy and self-mockery, while also informing; decide how far the other writer does the same.',
          'Compare methods point by point rather than text by text: description, the writer’s own feelings, explanation for the reader, and how each extract ends.',
          'Use comparative connectives (whereas, similarly, in contrast) inside every paragraph, not only at the start.',
          'Support each point with short quotations from both texts, and in the examination take the second text’s evidence from the unseen passage in front of you.',
        ],
      },
      {
        question:
          'How does Levine present her own feelings and attitudes during the race and afterwards?',
        skill: 'Writer’s perspective, through language and structure',
        guidance: [
          'Before the race: impatience and self-mockery, in the hyperbole of line 7, feeling foolish and losing faith (lines 8 and 12-13).',
          'During the race: excitement shown indirectly, through the energy of her lists and metaphors rather than any statement that she is thrilled.',
          'After the fall: her assumption about who won, which not everyone shares, and her dependence on the lads once the mood turns.',
          'At the end: the reveal, and her relief expressed through understatement in lines 57-59.',
          'Argue a line through the answer: her attitude moves from amused observer to relieved survivor, and humour is how she holds both.',
        ],
      },
    ],
    tips: [
      'The anthology text is printed in the examination, so do not spend revision memorising long quotations. Learn where things are, by paragraph and line, so you can find and quote the right words in seconds.',
      'Keep quotations short and embedded. A phrase such as “gone anarchic” analysed word by word earns more than a whole sentence copied out and paraphrased.',
      'Structure is where many answers on this text are thin. Say what the long wait, the short sentence at line 42, the second contest and the delayed reveal each do to the reader.',
      'Write about the writer, not just the events. Use verbs such as presents, suggests, undercuts and withholds, and avoid retelling the story.',
      'Handle perspective carefully. Levine is a visitor, and a strong answer can discuss how she presents a local tradition, but claiming that she mocks Pakistan or its people ignores that most of the jokes are at her own expense.',
      'Do not bring in the sport in the book’s title. There is no goat and no horseback game in this extract.',
      'Link comedy to danger. The best answers show that the humour is how Levine makes a risky experience readable, not a sign that the risk was unimportant.',
    ],
  },

  modelAnswer: {
    question:
      'How does Emma Levine use language and structure to present the donkey race as both exciting and dangerous?',
    paragraph:
      'Levine makes the race exciting by making the reader feel its speed, and she makes it dangerous by letting her jokes slip. Her central comparison, “Formula One without rules, or a city-centre rush hour gone anarchic”, is funny because each metaphor contains a contradiction: Formula One is the top class of single-seater motor racing, with a governing body to enforce its rules, and a rush hour is normally tedious, so “without rules” and “gone anarchic” turn the familiar into riot. The humour is also a warning, since the words after the semi-colon state plainly that traffic rules and common sense are being ignored. Structurally, the longest paragraph in the extract (lines 30-38) is the one describing the wildest driving, and it piles items into lists separated by semi-colons, so that the reader, like the driver, has no time to pause; even the list of driving skills accelerates until it collapses into bathos with “an effective horn”. Then the four-word sentence “The race was over” stops the prose as abruptly as the leading donkey stops. The excitement is real, but once Yaqoob reveals that he is underage, the reader realises that Levine’s thrill rested on a risk she did not know she was running, which is why her final understatement, “could have caused problems”, reads as relief disguised as a joke.',
    commentary: [
      'Its first sentence answers the question directly, naming both halves (exciting and dangerous) and suggesting how they connect.',
      'Quotations are short and embedded, then taken apart word by word (“without rules”, “gone anarchic”) rather than paraphrased.',
      'Context is used lightly and for a purpose: knowing what Formula One is explains why the metaphor is a joke.',
      'It analyses structure as well as language, with precise references (the longest paragraph, the four-word sentence at line 42), and says what each does to the reader.',
      'It ends on a whole-text argument, reading the ending back into the race, which is what lifts an answer above a list of techniques.',
    ],
  },

  timeline: [
    {
      where: 'Paragraph 1, lines 1-5 (page 14)',
      title: 'The plan in the car boot',
      summary:
        'Levine and the two lads find a viewing spot on the crest of a hill, where they can see the race approaching. She asks to follow the race, and they plan to put her in the open boot with her camera and join the chase.',
      setting: 'The crest of a hill on the race route in Karachi',
      who: ['Emma Levine', 'Yaqoob', 'Iqbal'],
      themes: ['The outsider’s view', 'Youth, risk and thrill'],
      tension: 2,
      significance:
        'It sets up the comic image of the writer in a car boot, and the lads’ confidence that they can reach the front.',
    },
    {
      where: 'Paragraphs 2-3, lines 6-13 (page 14)',
      title: 'The long wait',
      summary:
        'The lads are suddenly keen on a sport they had never cared about. Nearly an hour passes; a villager wobbles past on a bicycle, carts of spectators go by, and Levine starts to lose faith while the lads stay confident.',
      setting: 'The brow of the hill, with Levine perched in the boot',
      who: ['Emma Levine', 'Yaqoob', 'Iqbal'],
      quote: 'We waited for eternity',
      themes: ['Anticipation and anticlimax'],
      tension: 1,
      significance: 'The delay builds suspense and establishes Levine’s self-mocking voice.',
    },
    {
      where: 'Paragraph 4, lines 14-20 (page 14)',
      title: 'The race appears',
      summary:
        'Just as Levine decides the race has been cancelled, two donkey-carts come into view ahead of a haze of exhaust and dust thrown up by about fifty vehicles. Yaqoob revs the engine and begins to inch out of the lay-by as the two carts race side by side.',
      setting: 'The road at the brow of the hill, as the race approaches',
      who: ['Emma Levine', 'Yaqoob', 'The crowd'],
      quote: 'almost dwarfed by their entourage',
      themes: ['Chaos as spectacle', 'Anticipation and anticlimax'],
      tension: 3,
      significance:
        'The contrast between two small donkeys and a huge following sets up the comedy of scale.',
    },
    {
      where: 'Paragraphs 5-6, lines 21-29 (page 14)',
      title: 'Into the convoy',
      summary:
        'The noise builds: horns, bells and rattles, and men cheering from the tops of cars, vans and lorries or leaning out of taxis. Yaqoob picks his moment, cuts in ahead of the closest car and wins a place at the head of the convoy with a clear view of the donkeys.',
      setting: 'The main road, inside the convoy of spectators',
      who: ['Emma Levine', 'Yaqoob', 'The crowd'],
      quote: 'Formula One without rules, or a city-centre rush hour gone anarchic',
      themes: ['Chaos as spectacle', 'Rules broken and rules disputed'],
      tension: 4,
      significance: 'Levine’s central metaphors make the chaos thrilling and hint at its danger.',
    },
    {
      where: 'Paragraph 7, lines 30-38 (page 14)',
      title: 'Two races at once',
      summary:
        'Yaqoob relishes the test of his driving. Levine describes two races, the vehicles fighting for position behind and the donkeys running close together in front, while oncoming traffic on the main road has to pull into the ditch.',
      setting: 'A main road with oncoming traffic',
      who: ['Emma Levine', 'Yaqoob', 'The crowd'],
      quote: 'nerves of steel, and an effective horn',
      themes: ['Youth, risk and thrill', 'Rules broken and rules disputed'],
      tension: 4,
      significance:
        'The longest paragraph carries the wildest driving, and Yaqoob’s skill is at its most admired.',
    },
    {
      where: 'Paragraph 8, lines 39-42 (page 14)',
      title: 'The fall at the hospital gate',
      summary:
        'The road straightens and everyone speeds up for the finish. As they reach the finishing line, a hospital gate, the leading donkey swerves and loses its footing, and donkey and cart tumble over in a near pile-up.',
      setting: 'The finishing line at a hospital gate',
      who: ['Emma Levine', 'Yaqoob', 'The crowd'],
      quote: 'The race was over',
      themes: ['Anticipation and anticlimax', 'Chaos as spectacle'],
      tension: 5,
      significance: 'The climax is a fall, not a victory, and it ends in a four-word sentence.',
    },
    {
      where: 'Paragraph 9, lines 43-50 (page 15)',
      title: 'The argument over the winner',
      summary:
        'Levine assumes the donkey that finished has won, but over a hundred punters have bet on the race. Some claim the fall happened because the other donkey was ridden too close; a crowd gathers round a jockey and an official, and the bookmakers want a re-run.',
      setting: 'The roadside by the finishing line',
      who: ['The crowd', 'Emma Levine'],
      quote: 'Voices were raised, fists were out and tempers rising',
      themes: ['Rules broken and rules disputed', 'Chaos as spectacle'],
      tension: 4,
      significance:
        'The real contest turns out to be about money, and the mood turns from comedy to threat.',
    },
    {
      where: 'Paragraphs 10-11, lines 51-59 (page 15)',
      title: 'The retreat and the reveal',
      summary:
        'Wary of the mood, the lads leave Levine in the car, go into the crowd, come back to say it is turning nasty and drive her away. On the way Yaqoob admits he has no licence because he is underage; the lads laugh, and Levine reflects on what might have happened.',
      setting: 'The car, driving away at a calmer pace',
      who: ['Yaqoob', 'Iqbal', 'Emma Levine'],
      quote: 'I don’t even have my licence yet because I’m underage',
      themes: ['Youth, risk and thrill', 'The outsider’s view'],
      tension: 3,
      significance:
        'The withheld fact forces a rereading of the whole drive, and the extract ends in reflection.',
    },
  ],

  relationships: [
    {
      from: 'Emma Levine',
      to: 'Yaqoob',
      kind: 'passenger and driver',
      note: 'She trusts his driving and admires his skill throughout the race, and learns only afterwards that he is underage; the reveal turns her admiration into relief.',
    },
    {
      from: 'Emma Levine',
      to: 'Iqbal',
      kind: 'writer and go-between',
      note: 'When the crowd turns angry, he and Yaqoob keep her in the car and go to find out what is happening for her; Iqbal brings back the news and the advice to leave.',
    },
    {
      from: 'Yaqoob',
      to: 'Iqbal',
      kind: 'the two lads, companions',
      note: 'They share a sudden enthusiasm for a sport neither had cared about, the same caution about the crowd, and the same laughter at the confession.',
    },
    {
      from: 'Emma Levine',
      to: 'The crowd',
      kind: 'observer and observed',
      note: 'She films the cheering convoy as a spectacle, then is kept away from the crowd once money and tempers take over.',
    },
  ],

  compareWith: [
    {
      title: 'From The Explorer’s Daughter, Kari Herbert',
      href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
      reason:
        'Another visitor watching a local tradition, a narwhal hunt, from a vantage point above the action; its lyrical description and explanation of why the hunt matters make a useful contrast with Levine’s comedy.',
    },
    {
      title: 'From 127 Hours: Between a Rock and a Hard Place, Aron Ralston',
      href: '/igcse/edexcel-lang/anthology/127-hours',
      reason:
        'A first-hand account of physical danger told in the present tense, for comparing how two writers control pace and tension.',
    },
    {
      title: 'From Beyond the Sky and the Earth, Jamie Zeppa',
      href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
      reason:
        'A newcomer’s first-person account of her early days in an Asian country, for comparing how travel writers present a place and their own place in it.',
    },
  ],

  contentGuidance: ['crime_injustice', 'violence'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pages 14-15 (the prescribed text, from which every quotation and line number was checked), page 71 (acknowledgements: André Deutsch, © Emma Levine 2000) and the Issue 8 summary of changes (line 53)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Language A (4EA1) specification, Issue 7, August 2025: Paper 1 Section A, the anthology text provided in the examination, travel writing among the non-fiction forms',
      url: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-language-a-2016.coursematerials.html',
    },
    {
      label:
        'hidden europe, author page for Emma Levine: Bradford, graduated 1991, eight years in Asia, cricket books, A Different Ball Game',
      url: 'https://www.hiddeneurope.eu/the-magazine/hidden-europe-authors/emma-levine/',
    },
    {
      label:
        'Emma Levine, official website: home page (Yorkshire, London-based writer and photographer)',
      url: 'https://www.emma-levine.com/',
    },
    {
      label:
        'Emma Levine, official website: A Different Ball Game (six-part National Geographic Channel series from the 13-month research journey for the book; kok boru as headless goat polo; donkey racing in Pakistan)',
      url: 'https://www.emma-levine.com/emma-levine/tvdocumentaries.asp?page_id=37',
    },
    {
      label:
        'Rothwell & Dunworth, bibliographic listing of the first edition (André Deutsch, 2000, ISBN 0233994165)',
      url: 'https://www.rdbooks.co.uk/pages/books/141593/levine-emma/a-game-of-polo-with-a-headless-goat-in-search-of-the-ancient-sports-of-asia',
    },
    {
      label:
        'Dawn, 24 June 2024: Commissioner Karachi donkey cart race; the mayor on cultural heritage and Lyari',
      url: 'https://www.dawn.com/news/1841564',
    },
    {
      label:
        'Dawn, 12 June 2020: police raid on a donkey-cart race in Rahim Yar Khan under the Punjab Prevention of Gambling Ordinance 1978',
      url: 'https://www.dawn.com/news/1562927',
    },
    {
      label: 'Wikipedia: Karachi (largest city, capital of Sindh, federal capital 1947-1959)',
      url: 'https://en.wikipedia.org/wiki/Karachi',
    },
    {
      label: 'Wikipedia: Buzkashi (national sport of Afghanistan; kok boru in Kyrgyzstan)',
      url: 'https://en.wikipedia.org/wiki/Buzkashi',
    },
    {
      label:
        'Wikipedia: Wacky Races (Hanna-Barbera, CBS, 14 September 1968 to 4 January 1969, eleven cars, Dick Dastardly)',
      url: 'https://en.wikipedia.org/wiki/Wacky_Races_(1968_TV_series)',
    },
    {
      label:
        'Wikipedia: Survival of the fittest (Herbert Spencer, Principles of Biology, 1864; Darwin, The Variation of Animals and Plants under Domestication, 1868, and the fifth edition of the Origin, 1869)',
      url: 'https://en.wikipedia.org/wiki/Survival_of_the_fittest',
    },
    {
      label:
        'Wikipedia: Formula One (highest class of open-wheel, single-seater racing, sanctioned by the FIA, championship since 1950)',
      url: 'https://en.wikipedia.org/wiki/Formula_One',
    },
  ],
}
