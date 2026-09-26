import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * From Beyond the Sky and the Earth: A Journey into Bhutan, Jamie Zeppa. A
 * supplement: the anthology page at /igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth
 * keeps its context and themes, and this file adds everything else.
 *
 * The text is in copyright. The guide was first written from transcriptions of
 * the extract, which disagree over punctuation, spelling and paragraphing.
 * Pearson publishes the anthology itself as a free PDF (Issue 8, February 2026:
 * see sources), and every quotation and every quoted phrase in this file has
 * since been checked word for word against that PDF. The extract runs over
 * pages 16 to 18 as lines 1 to 98, and `where` fields cite those line numbers,
 * which are printed in the anthology, rather than paragraph numbers, which are
 * not. The anthology keeps Zeppa's American spellings (flavorless, demeanor,
 * traveled, colored, humor) and footnotes them.
 *
 * Biography: Kirkus and the publisher agree on 1988, the World University
 * Service of Canada and the two-year contract. Her age on leaving is given as
 * 24 by the publisher and by the anthology's own introductory note, and as 23
 * by Wikipedia, so the guide gives the age only as the anthology's statement.
 *
 * Fact-check, 26 September 2026, against the Pearson PDF. The quotations were
 * all exact. What changed: several sentences said the geology was beyond her
 * or that she rejected the scientific explanation, when the extract says she
 * knows it but cannot imagine it; a summary put her at a hotel window the
 * extract does not mention; a portrait called the hotel visit the three
 * teachers' when the extract says only "we"; Ashley Eden was called the one
 * figure she does not admire (Gordon is not admired either); a tip said the
 * Western signs are few without saying she found more than she expected; the
 * timeline gave "a handful" of British missions where the extract says six;
 * the memoir was called a diary in places where form matters; a structure note
 * said the extract rarely leaves the moment, though its last two paragraphs are
 * centuries of history; and two readings were stated as fact. The
 * acknowledgement now follows the anthology's own (page 71), and the length is
 * recounted from the anthology.
 *
 * Fact-check, 25 September 2026: every quotation was re-confirmed in at least
 * two sources. What changed was prose that went beyond the extract. It placed
 * Zeppa "beside" Tashichho Dzong when she answers Gordon (the extract only
 * describes the fortress and then gives her thought), called her old question
 * about mountains a childhood one, set her fellow teachers beside her on the
 * sleepless first night (that is the next morning), called the jeans
 * "fashionable" (the extract says acid washed), and stated readings of the New
 * York line as fact. Those are now located accurately or offered as readings.
 */
export const guide: StudyGuide = {
  slug: 'beyond-the-sky-and-the-earth',
  title: 'From Beyond the Sky and the Earth: A Journey into Bhutan',
  author: 'Jamie Zeppa',
  form: 'non-fiction',
  scope:
    "The extract from Jamie Zeppa's memoir Beyond the Sky and the Earth: A Journey into Bhutan (1999) printed in Part 1 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), on pages 16 to 18. It covers her first night and first week in Thimphu, the capital of Bhutan, before she travels east to her teaching post. It is not the whole book.",
  rights: {
    status: 'copyright',
    acknowledgement:
      'Text from Beyond the Sky and the Earth: A Journey into Bhutan by Jamie Zeppa, Riverhead Books, 2000, copyright © Jamie Zeppa 1999. As printed in the Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026.',
  },
  workLength: {
    words: 1333,
    basis:
      "Counted from the extract as printed in Pearson's published PDF of the anthology (Issue 8, February 2026), pages 16 to 18, lines 1 to 98, leaving out the introductory note and the spelling footnotes: 1,333 words with hyphenated words counted once, 1,355 with them split. The lower figure is used.",
  },
  native: {
    context: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    themes: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
  },

  overview: {
    summary: [
      "This extract comes from early in Jamie Zeppa's memoir Beyond the Sky and the Earth: A Journey into Bhutan, published in 1999. In 1988 Zeppa, a young Canadian graduate student, took a two-year teaching contract in Bhutan through the World University Service of Canada (WUSC), a Canadian non-profit organisation that the extract refers to by its initials. The anthology's introductory note says she was 24 when she left Canada. The extract covers her first night and her first week in Thimphu, the capital, before she travels east to her posting. Almost nothing dramatic happens. What changes is her understanding: she arrives exhausted and unsure of herself, and by the last sentence she is full of admiration for the country.",
      "The extract moves in widening circles. It opens on the mountains, whose geological origin she says she cannot imagine, then narrows to her hotel room on the first night and to breakfast the next morning with two fellow Canadians, Lorna and Sasha. A walk along the main road shows her a small capital with policemen directing traffic by hand, buildings in one traditional style and a few startling signs of Western pop culture. Gordon, the programme's field director, tells them the ancient-looking town is only a few decades old. She turns to the Bhutanese people, whose qualities she cannot sum up in a single word, and finally to the history taught at her orientation course: the coming of Buddhism, the unification of the valleys in the seventeenth century, and the handful of Western visitors, one of whom, the British envoy Ashley Eden, was humiliated in 1864.",
      "The extract is travel writing with an argument. Its central tension is between Bhutan's own traditions and the outside world that is beginning to arrive, and Zeppa leaves little doubt about which she prefers. She privately decides that Thimphu will never seem like New York to her, whatever Gordon predicts, and she ends by praising the country for keeping its independence while European empires took over much of Asia.",
      "One reading takes her at her word: this is a respectful, self-aware outsider, humble about what she cannot understand. A sharper reading notices that she describes a whole people's faces and build, supports her view with the verdict of an eighteenth-century British envoy, and may admire Bhutan partly for staying as she found it. The strongest answers hold both. Zeppa is admiring and honest about her doubts, but her admiration is still an outsider's, and noticing that is what turns explanation into evaluation.",
    ],
  },

  characters: [
    {
      name: 'Jamie Zeppa',
      role: 'The writer and narrator: a young Canadian teacher, newly arrived',
      body: "Zeppa narrates her own arrival in the first person, mostly in the present tense, so the reader discovers Bhutan at her pace. She is an unusually honest narrator. She admits that she cannot imagine the geology she knows about, that she is exhausted but cannot sleep, and that she stays close to her more experienced companions in the hope of catching their enthusiasm. That self-doubt makes her later judgements more persuasive, because they seem earned rather than assumed. By the end her voice is confident: she quietly disagrees with Gordon, describes the people with warmth, and delivers a verdict on the country's history. Beyond the extract, she was posted to the village of Pema Gatshel in eastern Bhutan, later taught at Sherubtse College, and stayed on after her two-year contract ended.",
    },
    {
      name: 'Lorna',
      role: 'A fellow Canadian teacher, from Saskatchewan',
      body: 'One of two other Canadians who, like Zeppa, have signed up to teach in Bhutan for two years. She is sketched in a few quick details: freckles, a practical, down-to-earth manner that Zeppa links with farm life and that keeps breaking into loud laughter, and stories about the characters back home. She has trekked across Europe and northern Africa. Her confidence matters mainly as a contrast. Beside Lorna and Sasha, Zeppa looks inexperienced, and she says so.',
    },
    {
      name: 'Sasha',
      role: 'A fellow Canadian teacher, from British Columbia',
      body: 'Slight and dark, with a mischievous smile, Sasha has spent a year working in an orphanage in Bombay (now Mumbai). Like Lorna she is delighted with Bhutan from the start. The two women are drawn briefly and warmly, and they work as a pair: seasoned travellers who show, by contrast, how unsure the narrator feels in her first days.',
    },
    {
      name: 'Gordon',
      role: 'Field director of the WUSC programme in Bhutan',
      body: 'Gordon is the insider who explains Bhutan to the newcomers. He tells them that Thimphu, which looks old, was rice fields, a few farmhouses and a fortress until the third king decided to make it the capital, and he predicts that when they come back after a year in the east the little capital will look like New York to them. He is the only person in the extract whose own words are quoted as speech. His prediction gives Zeppa something to push against, and her silent reply, which comes straight after her description of the great fortress, is one of the first signs of her forming her own view of the country.',
    },
    {
      name: 'The Bhutanese people',
      role: 'The people Zeppa observes in Thimphu',
      body: "Zeppa describes them collectively: their looks, their national dress (the kira for women, the gho for men), their curiosity about foreigners without surprise, and the courtesy of a young man who walks the newcomers to the street to point the way. She also notes that Bhutanese of Nepali origin look different and wear the same dress. The description is admiring throughout and ends with her failing to find one word for their qualities. A reader today may notice that she generalises about a whole nation's appearance, a habit of older travel writing, and that no Bhutanese person is quoted. Her failure to sum them up, though, concedes that they cannot be reduced to one impression.",
    },
    {
      name: 'The young man at the hotel',
      role: 'A hotel worker who gives the newcomers directions',
      body: "When Zeppa and her companions stop at a hotel to ask the way, he leaves the counter, walks with them to the street and explains the route politely in excellent English. It is a tiny moment, but he is the one Bhutanese person the newcomers are shown dealing with, and his courtesy is what sets off Zeppa's search for the right word to describe the people. Her remark on the quality of his English may also hint that her expectations are being overturned.",
    },
    {
      name: 'George Bogle',
      role: 'Eighteenth-century British envoy, quoted by Zeppa',
      body: 'A Scottish envoy sent to Tibet in 1774 by Warren Hastings of the East India Company, who travelled through Bhutan on the way. Zeppa quotes his praise of the Bhutanese physique and adds that she agrees. Borrowing an older witness gives her first impression the weight of history. It also places her in a line of Western visitors who looked at Bhutan from outside, which is worth questioning in an answer: Bogle was on a trade mission for an imperial company, and his compliment is about bodies rather than character.',
    },
    {
      name: 'Ashley Eden',
      role: 'British envoy whose 1864 visit ended in humiliation',
      body: 'Sent to deal with Bhutanese raids on British-ruled territory, Eden was mocked and roughly handled and forced to sign a treaty, and a short war followed. Historians call it the Duar War (1864 to 1865); it ended with the Treaty of Sinchula in 1865, under which Bhutan gave up its southern border lands, the Duars, in return for an annual payment. Zeppa tells the episode almost as comedy and does not mention the lost land. Eden is the one figure in the extract she makes ridiculous, and his story serves her final point: that Bhutan kept its independence beside a powerful empire.',
    },
  ],

  quoteNote:
    "Every quotation below was checked word for word against the extract as Pearson publishes it in the anthology (Issue 8, February 2026), and the line numbers are the anthology's. The anthology keeps Zeppa's American spellings, such as “flavorless” and “humor”, and explains them in footnotes: when you quote, copy the spelling your anthology prints.",

  keyQuotes: [
    {
      text: 'Bhutan is all and only mountains',
      where: 'Zeppa, opening paragraph, lines 1 to 2 (anthology p.16)',
      analysis:
        'A short, absolute declarative sentence. “All and only” is a doubled emphasis: the mountains are not a feature of Bhutan but the whole of it. The hyperbole prepares for an idea the extract builds on, that the landscape seems to shape everything, from how hard the country is to reach to the isolated valleys of its history.',
    },
    {
      text: 'It is easier to picture a giant child gathering earth in great armfuls',
      where: 'Zeppa, opening paragraph, lines 4 to 5',
      analysis:
        'Zeppa sets aside the scientific explanation of colliding landmasses, which she knows but says she cannot imagine, and chooses a metaphor instead, like a creation myth or a picture book. The “giant child” makes the vast landscape playful and handmade, and the verbs that follow turn geology into sculpture. Calling the image “easier” shows a narrator for whom knowing a fact is not the same as being able to picture it.',
    },
    {
      text: 'on the other side of mountains are mountains',
      where: 'Zeppa, her first night in Thimphu, remembering the flight in, lines 13 to 14',
      analysis:
        'The question she used to wonder about, what lies beyond the mountains, gets a flat and almost comic answer, and the sentence goes on repeating the word. The repetition traps the reader as the landscape traps the traveller. It stresses remoteness: the plains of India are behind her, and ahead there is only more of the same.',
    },
    {
      text: 'hoping to pick up some of their enthusiasm',
      where: 'Zeppa, walking with Lorna and Sasha after breakfast, line 29',
      analysis:
        'An admission that she does not yet share their delight. “Pick up” makes enthusiasm sound catching, like an accent, something she hopes to absorb simply by staying close to them. The honesty matters structurally: a narrator who confesses doubt here is more believable when she later declares her admiration.',
    },
    {
      text: 'startling against the Bhutanese-ness of everything else',
      where: 'Zeppa, on the signs of the outside world in Thimphu, lines 41 to 42',
      analysis:
        'The coined noun “Bhutanese-ness” suggests a quality so complete that ordinary English has no word for it. There are more Western signs than she expected, yet she calls them few overall, and “startling” shows how out of place they look. Her name for them, “cultural infiltration”, borrows the language of spies and armies, implying something unwelcome slipping in.',
    },
    {
      text: 'Thimphu will never look like New York to me, I think',
      where:
        'Zeppa, straight after describing Tashichho Dzong, answering Gordon, lines 52 to 53 (p.17)',
      analysis:
        "The sentence echoes Gordon's prediction almost word for word and reverses it. Placed straight after the description of the great fortress and the terraced fields, it can be read as a quiet act of loyalty to the traditional town. The tag “I think” keeps it private and tentative: she is forming her own view, not yet announcing it.",
    },
    {
      text: 'the best built race of men I ever saw',
      where:
        'George Bogle (1774), quoted by Zeppa when she describes the Bhutanese people, line 54',
      analysis:
        "These are an eighteenth-century envoy's words, not Zeppa's, and she adds that she agrees with them. The quotation lends her first impression historical authority, but it is worth questioning: “race” and “best built” judge a people by their bodies, in the language of an imperial age. A strong answer notices both the admiration and the outsider's gaze it comes from.",
    },
    {
      text: 'can find no single word to hold all of my impressions',
      where: 'Zeppa, after the young man at the hotel gives directions, lines 68 to 69',
      analysis:
        'After listing four qualities, among them “dignity” and “grace”, she admits that language fails her. The metaphor of a word that can “hold” impressions, like a container, suggests her feelings are too full to fit. Admitting defeat is itself a compliment, and it quietly concedes that a people cannot be summed up by a visitor.',
    },
    {
      text: 'his face rubbed with wet dough',
      where: "Zeppa, final paragraph, on Ashley Eden's visit of 1864, line 93 (p.18)",
      analysis:
        "The three physical indignities suffered by the British envoy build to this absurd last one, before the forced treaty. Zeppa tells a diplomatic disaster as farce, and the bathos takes Bhutan's side: the representative of a vast empire is made ridiculous. The comic tone also softens a story that ended in war.",
    },
    {
      text: 'I am full of admiration for this small country',
      where: 'Zeppa, the final sentence of the extract, line 97',
      analysis:
        "The extract ends on a judgement rather than an event, and after the history lesson it returns to the present tense and to Zeppa's own voice. “Small” is the key word: set against the empires around it, Bhutan's survival becomes a story of the weak outlasting the strong. The exhausted, doubtful newcomer of the opening has become a confident admirer.",
    },
  ],

  extracts: [
    {
      title: 'The mountains and the first night',
      where: 'Lines 1 to 18, the opening of the extract (anthology p.16)',
      pointer:
        "From the extract's first sentence, a panorama of mountains, to the end of the description of the view from her hotel room, which closes on Thimphu's thin, cold winter air (line 18), just before the next morning's breakfast.",
      summary:
        'Zeppa opens with the mountains that surround her, admits that she knows the geology but cannot imagine it, and pictures a giant child making them instead. She then fixes the moment, her first sleepless night in Thimphu after four days of flights from Toronto, and from her hotel room recalls flying in that morning from the plains of India, past Everest, with a glimpse of the Tibetan plateau.',
      annotations: [
        {
          phrase: 'all and only',
          note: 'Two small words do the work of a whole description: the doubled emphasis is hyperbole, telling the reader that in Bhutan the landscape is everything.',
        },
        {
          phrase: 'a giant child',
          note: 'A metaphor from myth or a picture book replaces the science she cannot imagine, making the mountains playful, handmade and strangely alive.',
        },
        {
          phrase: 'a convulsion of crests and gorges',
          note: 'Seen from the aeroplane, the earth seems to be in spasm. “Convulsion” is violent and bodily, and the hard c sounds make the landscape feel rough and restless.',
        },
        {
          phrase: 'rise to meet the moon',
          note: 'Personification: the mountains move upward as if on purpose, and the repeated soft m sounds make the moment calm and dreamlike after the exhausting journey.',
        },
      ],
      question:
        'How does Zeppa use language to present the landscape of Bhutan in the opening of the extract?',
    },
    {
      title: "Thimphu's main road",
      where: 'Lines 30 to 53, from the size of Thimphu to Tashichho Dzong (anthology pp.16 to 17)',
      pointer:
        "From the sentence giving Thimphu's official population of 20,000 (line 30) to the end of the description of Tashichho Dzong and the fields beyond it, where Zeppa privately disagrees with Gordon about New York (line 53).",
      summary:
        "Walking the main road, Zeppa finds a capital smaller than its population suggests, with no traffic lights, buildings in one traditional style and shops selling the same basic goods. There are more Western signs than she expected, though few overall, and they stand out. Gordon's history reveals that the old-looking town is new, and after describing the great fortress at the end of the road she privately answers his prediction.",
      annotations: [
        {
          phrase: 'incomprehensible but graceful',
          note: "The pairing captures the outsider's position exactly: she cannot read the policemen's signals, yet she admires them, so confusion and appreciation arrive together.",
        },
        {
          phrase: 'cultural infiltration',
          note: 'Infiltration is a word from espionage and warfare. It implies that Western pop culture is slipping in uninvited, and it shows which side Zeppa is on.',
        },
        {
          phrase: 'without blueprints or nails',
          note: 'After a string of admiring adjectives for the fortress, this detail stresses traditional skill and continuity: the seat of the modern government was built the old way.',
        },
        {
          phrase: 'never look like New York',
          note: "Her private answer reverses Gordon's prediction. Coming straight after the fortress and the terraced fields, it can be read as a choice of the traditional over the modern.",
        },
      ],
      question:
        'How does the writer present the contrast between tradition and the modern world in this part of the extract?',
    },
    {
      title: 'History and the final verdict',
      where: 'Lines 70 to 98, the last two paragraphs of the extract (anthology pp.17 to 18)',
      pointer:
        "From the start of the week-long orientation course for new teachers (line 70) to the extract's final sentence, in which Zeppa gives her verdict on the country (lines 97 to 98).",
      summary:
        "At orientation, the history lessons interest Zeppa most. She traces early Tibetan settlement, the coming of Buddhism and the unification of the valleys after 1616, lingering over the beauty of Bhutan's older names. She then describes how few Westerners came, how Ashley Eden's mission of 1864 ended in humiliation and a short war, and closes with her admiration for Bhutan's independence.",
      annotations: [
        {
          phrase: 'Land of the Thunder Dragon',
          note: 'The translation of Druk Yul gives the country a name out of legend. Zeppa follows it with other beautiful old names, and the lists show her enchantment with the language of the place.',
        },
        {
          phrase: 'a nasty turn',
          note: 'A casual, conversational idiom in the middle of a history lesson. The understatement prepares for the comedy of the Eden episode and keeps the tone light.',
        },
        {
          phrase: 'his face rubbed with wet dough',
          note: "The last of three physical indignities is the most absurd. The bathos makes the British envoy ridiculous and places the reader firmly on Bhutan's side.",
        },
        {
          phrase: 'remarkable',
          note: "The key judgement word of the history section. After the empire to the south and the Great Game to the north, it frames Bhutan's survival as an achievement rather than luck.",
        },
      ],
      question:
        "How does Zeppa use the history of Bhutan to shape the reader's view of the country by the end of the extract?",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Metaphor drawn from creation myth',
      example:
        'The mountains are pictured as the work of “a giant child”, who gathers up earth and rock and shapes it by hand into ridges, peaks, valleys and gorges.',
      effect:
        'Zeppa knows the textbook explanation but sets it aside for an image a child could understand. The image makes the landscape feel handmade and alive rather than geological, and its playfulness shows her wonder. It may also hint that Bhutan is a place where older ways of explaining the world still make sense, a reading the history lessons at the end, with their saint and their legendary names, can support.',
    },
    {
      technique: 'Hyperbole and repetition',
      example:
        '“Bhutan is all and only mountains”; the word mountains then returns again and again in the opening paragraphs, most insistently in “on the other side of mountains are mountains”.',
      effect:
        'The repetition does what the landscape does: it closes in on every side. The reader feels the remoteness rather than being told about it, and the insistence on one word makes the country seem single-minded and self-contained, which prepares for the final praise of its independence.',
    },
    {
      technique: 'Listing to convey distance',
      example:
        'The journey is given city by city, from Toronto through Montreal, Amsterdam, New Delhi and Calcutta to Paro: five flights over four days, each place joined to the next by the same small word.',
      effect:
        'The chain of place names is long and monotonous on purpose. It measures how far she has come from home, makes the reader share some of the tiredness, and accounts for her exhaustion. The list also moves from familiar Western cities to unfamiliar Asian ones, a journey into the unknown in a single sentence.',
    },
    {
      technique: 'Juxtaposition of tradition and the modern world',
      example:
        'Buildings with pitched roofs and beams painted with traditional motifs stand beside teenagers in acid-washed jeans, American country music on the Bhutan Broadcasting Service and a Rambo poster in a bar, signs she calls “cultural infiltration”.',
      effect:
        "The contrast is the extract's central tension in miniature. There are more modern details than she expected, but they are few overall and “startling”, which makes the traditional town feel whole and the Western imports feel like intruders. It shows the reader where Zeppa's sympathies lie before she states them.",
    },
    {
      technique: 'Coined word',
      example:
        '“Bhutanese-ness”, used for the quality of everything around her that is not imported.',
      effect:
        'Inventing a noun suggests that no existing English word will do, which is a quiet compliment to the country. It also anticipates her later failure to find a single word for the people: throughout the extract, Bhutan exceeds the vocabulary the visitor has brought with her.',
    },
    {
      technique: 'Contrasting pairs of adjectives',
      example:
        'The traffic policemen direct the few trucks with “incomprehensible but graceful” hand gestures.',
      effect:
        "The two adjectives hold the outsider's position in balance: she cannot understand, yet she admires. The conjunction “but” turns confusion into appreciation, a small version of the whole extract's movement from bewilderment to respect.",
    },
    {
      technique: 'Humour, understatement and bathos',
      example:
        "Relations with the British take “a nasty turn”, and the envoy Ashley Eden's ordeal ends with “his face rubbed with wet dough”.",
      effect:
        "A casual idiom and an absurd detail turn an episode of imperial history into farce. The humour keeps a potentially dry history lesson lively, and it takes sides: the British envoy is laughed at, and the reader's sympathy goes to Bhutan, the small country, even though the episode led to war.",
    },
    {
      technique: 'Present tense and first person',
      example:
        "Her own experience is told as it happens (her first night, the next morning's breakfast, the walk along the main road, the orientation week), while the flight in that morning, Gordon's explanations and the centuries of history are told in the past tense.",
      effect:
        'The present tense puts the reader beside her, discovering Bhutan at the same pace, so the growth of her admiration feels lived rather than remembered. The switch to the past for history marks the change of register from personal record to lesson, and the final sentence returns to the present to give her verdict.',
    },
  ],

  structureForm: [
    {
      heading: 'Memoir told as it happens',
      body: 'The book was published in 1999, about a decade after the events, but the extract is written without hindsight: nothing in it looks back from what she later knew. Zeppa uses the first person and, for most of her own experience, the present tense, so the reader arrives with her: tired, disoriented and unsure. This matters for the exam because the changes in her attitude are shown happening rather than explained afterwards, and an answer can trace them sentence by sentence.',
    },
    {
      heading: 'Narrowing, then widening',
      body: 'The extract opens as wide as it can, on a landscape of mountains, then narrows sharply: her hotel room on the first night, the breakfast table, two companions. From there it widens again in stages, to the main road, the fortress at its end, the people of the town and finally the history of the whole nation. The shape mirrors her growing understanding. She begins with a landscape she cannot imagine and ends with a judgement about the country as a whole.',
    },
    {
      heading: 'Time speeds up',
      body: "The first moments are slow and close: one night, then the next morning. The pace then quickens to a week-long orientation course, and in the final two paragraphs whole centuries pass, from Tibetan settlement before the tenth century to the war that followed Ashley Eden's visit in 1864. The acceleration lets a short extract move from one woman's arrival to a nation's story, and it gives the ending the weight of history.",
    },
    {
      heading: 'A turning point in the middle',
      body: "Gordon's prediction that Thimphu will one day seem like New York, and Zeppa's silent reply after she describes Tashichho Dzong, form a small exchange that can be read as a pivot. Before it she mostly observes and hopes to borrow others' enthusiasm, though her judgements are already showing in words such as “startling”; after it her judgements come more openly, as she admires, generalises and concludes. Placing her reply straight after the description of the traditional fortress invites the reader to see it as a choice between old and new.",
    },
    {
      heading: 'From personal record to history lesson',
      body: 'The last two paragraphs change register. Personal detail gives way to dates, names and summarised events, as if the reader were sitting in the orientation course. Zeppa keeps it from becoming a textbook by lingering over the beauty of the old names and telling the Eden episode as comedy. The final sentence steps back into her own voice, so the history is framed by her feelings about it.',
    },
    {
      heading: 'An ending that answers the opening',
      body: 'The extract begins with something she cannot imagine and ends with something she admires, and both concern the country as a whole. It does not end with Zeppa feeling at home or settled: she is still in her first week, in the capital, and her posting in the east lies beyond the extract. The resolution is a change of attitude, from bewilderment to respect, not a change of circumstances.',
    },
  ],

  vocabulary: [
    {
      term: 'dzong',
      definition:
        'A fortress. In Bhutan a dzong usually houses both government offices and a community of monks; the extract glosses it simply as one of the fortresses found across the country.',
    },
    {
      term: 'Tashichho Dzong',
      definition:
        "The great fortress at the end of Thimphu's main road, the seat of the Royal Government of Bhutan and a monastic centre. Its name is usually translated as Fortress of the Glorious Religion.",
    },
    {
      term: 'kira',
      definition: 'The ankle-length, brightly striped dress worn by Bhutanese women.',
    },
    {
      term: 'gho',
      definition:
        'The knee-length robe worn by Bhutanese men, which Zeppa compares to a kimono with a very full upper part.',
    },
    {
      term: 'Druk Yul',
      definition:
        "Bhutan's own name for itself, which the extract translates as Land of the Thunder Dragon.",
    },
    {
      term: 'trefoil',
      definition:
        'A three-lobed shape like a clover leaf. Trefoil windows have a top made of three rounded curves.',
    },
    {
      term: 'emissary',
      definition:
        'A person sent on a special mission to represent a government or another power. George Bogle was an emissary of the East India Company, which then ruled Bengal.',
    },
    {
      term: 'lama',
      definition: 'A spiritual teacher in Tibetan Buddhism.',
    },
    {
      term: 'Ngawang Namgyel',
      definition:
        'The Tibetan lama who arrived in Bhutan in 1616 and united its separate valleys under one authority. He is known in Bhutan as the Zhabdrung, and his name is also transliterated Namgyal.',
    },
    {
      term: 'Padmasambhava',
      definition:
        'The Buddhist master, called an Indian saint in the extract, whom Bhutanese tradition credits with spreading Buddhism there in the eighth century. Bhutanese people know him as Guru Rinpoche.',
    },
    {
      term: 'Bon and shamanist',
      definition:
        'Bon is the religion of the region before Buddhism, parts of which Buddhism absorbed, according to the extract. Shamanist describes religion centred on a shaman, a person believed to communicate with spirits.',
    },
    {
      term: 'Jesuits',
      definition:
        'Members of the Society of Jesus, a Roman Catholic order known for missionary work. Two Portuguese Jesuits visited Bhutan in 1627.',
    },
    {
      term: 'the Great Game',
      definition:
        'The nineteenth-century rivalry between the British and Russian empires for power and influence in Central Asia and, later, Tibet, to the north of Bhutan.',
    },
    {
      term: 'cordial',
      definition:
        'Warm and friendly, often in a formal way, as in the brief British visits before 1864.',
    },
    {
      term: 'consolidated',
      definition:
        'Made stronger and more unified. The consolidated British empire to the south of Bhutan was firmly established and powerful.',
    },
    {
      term: 'infiltration',
      definition:
        'Getting in secretly or gradually, a word usually used of spies or enemy soldiers, which is why it sounds hostile when Zeppa uses it of Western culture.',
    },
    {
      term: 'convulsion',
      definition:
        'A violent, uncontrollable shaking of the body, used by Zeppa for the jagged folds of the land seen from the air.',
    },
    {
      term: 'impish',
      definition: "Mischievous in a playful, likeable way, as in Sasha's smile.",
    },
    {
      term: 'demeanour',
      definition:
        "A person's outward manner and behaviour, as in Lorna's practical manner. The anthology prints the American spelling, “demeanor”, and explains it in a footnote.",
    },
    {
      term: 'orientation session',
      definition: 'A course that introduces newcomers to a job or a place.',
    },
    {
      term: 'terraced fields',
      definition:
        'Fields cut into a hillside as a series of flat steps so that steep land can be farmed.',
    },
    {
      term: 'ex-pat (expatriate)',
      definition: 'Someone living outside their own country, often for work.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does the writer present her first experiences of Bhutan in From Beyond the Sky and the Earth? You should support your answer with close reference to the text, including brief quotations.',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          '1. Open with an overview that answers the question: Zeppa moves from exhausted uncertainty to confident admiration, and presents Bhutan as a traditional country she respects.',
          '2. Start with the opening: the hyperbole and the giant-child metaphor present a landscape she can explain in scientific terms but cannot imagine, which establishes her awe.',
          "3. Analyse how she presents herself on the first night and the next morning: sleeplessness, and hoping to catch her companions' enthusiasm, show honest doubt.",
          '4. Move to the town: the juxtaposition of traditional buildings with a few Western signs, and the coined word “Bhutanese-ness”, show what she values.',
          '5. Use the exchange with Gordon as a structural turning point: her private reply shows her forming her own view.',
          '6. Treat the history section as structure as well as content: the shift into a factual register, the comic account of Ashley Eden, and the return to her own voice in the final sentence.',
          "7. Finish on the ending: explain how the final judgement answers the opening, and evaluate how far her admiration is also an outsider's.",
        ],
      },
      {
        question:
          "Practice pairing (in the exam the comparison is with an unseen text): compare how the writers of From Beyond the Sky and the Earth and The Explorer's Daughter present their responses to a remote place and the people who live there.",
        skill: 'Comparison of ideas, perspectives and methods across two texts',
        guidance: [
          '1. Establish the shared ground in one sentence: both are first-person accounts by outsiders watching a traditional community in a harsh landscape.',
          "2. Compare attitudes first: Zeppa's admiration grows steadily and ends in praise, whereas Herbert is divided between sympathy for the narwhal and understanding of the hunters' need to survive.",
          '3. Compare how each writer presents the landscape and why it matters to the people who live in it.',
          "4. Compare methods, always pairing a point about one writer with a point about the other: Zeppa's present-tense, diary-like narration and her history lesson, set against the methods Herbert uses to show her mixed feelings.",
          '5. Use comparative connectives such as ‘whereas’, ‘similarly’ and ‘in contrast’ inside paragraphs, not only between them.',
          '6. Conclude with a judgement: which writer is more troubled by what she sees, and what that shows about her perspective as a visitor.',
        ],
      },
      {
        question:
          'How does the writer present the people and the history of Bhutan in the second half of the extract? You should support your answer with close reference to the text, including brief quotations.',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          '1. Begin with the people: the admiring vocabulary, the national dress explained for a reader who has never seen it, and the curiosity without surprise.',
          "2. Analyse the George Bogle quotation: why she borrows an eighteenth-century voice, and what its language about bodies suggests about an outsider's gaze.",
          '3. Use the young man at the hotel, and her admission that she can find “no single word” for the people, as evidence that she presents them as beyond easy description.',
          '4. Show how the history section changes register, and how the beautiful old names, such as the Land of the Thunder Dragon, keep it vivid.',
          '5. Analyse the Eden episode as farce, and explain whose side the humour takes.',
          '6. End on the final sentence: how “small” and “admiration” turn history into a verdict.',
        ],
      },
      {
        question:
          'How does the writer use the landscape to convey her feelings at the start of the extract?',
        skill: 'Language analysis of a short section',
        guidance: [
          '1. Identify the feeling first: awe mixed with bewilderment and tiredness.',
          '2. Analyse the hyperbole and the metaphor of the giant child, and what her admission that she cannot imagine the geology shows.',
          '3. Explore the repetition of mountains and the sense of being enclosed and far from home.',
          '4. Analyse the personification of mountains rising to meet the moon, and the calm it brings after the long journey.',
        ],
      },
    ],
    tips: [
      'Quote in short phrases and analyse single words: “all and only”, “Bhutanese-ness”, “startling”, “small”. Precise comment on a word earns more than a long quotation.',
      'Treat structure as part of the argument. The movement from the mountains to the town, the people, the history and finally a verdict is how Zeppa persuades the reader.',
      'Do not write that she has settled in or feels at home by the end. The extract covers her first week in Thimphu, before she reaches her posting in the east.',
      "Use context lightly and accurately: 1988, a two-year teaching contract, a Canadian organisation. One sentence is enough, because the question is about the writer's methods.",
      "Evaluate her perspective. The best answers notice both the respect and the outsider's gaze: the Bogle quotation, the generalisations about appearance, and what can be read as a wish that Thimphu stay as it is.",
      'Be precise about the Western influence. She finds more signs of the outside world than she expected, but calls them few overall; their power lies in how startling they look, not in how many there are.',
      'In the comparison question, compare methods as well as ideas, and keep both texts in every paragraph.',
    ],
  },

  modelAnswer: {
    question:
      'How does the writer present her first experiences of Bhutan in From Beyond the Sky and the Earth?',
    paragraph:
      "Zeppa presents her first experience of Bhutan as a gradual movement from bewilderment to admiration, and she begins by making the landscape too large to grasp. The hyperbole of “Bhutan is all and only mountains” leaves room for nothing else, and when she admits that she knows the scientific explanation but cannot imagine it, she turns instead to the metaphor of “a giant child” shaping the earth. The image is playful and almost mythical, suggesting that Bhutan asks to be felt rather than explained. Yet this wonder sits beside real uncertainty. After a sleepless first night, she stays close to her fellow teachers the next morning, “hoping to pick up some of their enthusiasm”, a confession that makes enthusiasm sound like something catching which she has not yet caught. The structure then tracks her growing confidence. When Gordon predicts that the capital will one day seem like New York, she answers him silently: “Thimphu will never look like New York to me, I think.” The tentative “I think” shows a view still forming, but it is her own. By the final sentence, after a history lesson in which a British envoy is made ridiculous, the doubtful newcomer has become a judge, “full of admiration for this small country”. The adjective “small” turns Bhutan's survival beside far larger powers into an achievement, and suggests that what Zeppa admires most is a country that has stayed itself.",
    commentary: [
      'It opens with an overview that answers the question, the movement from bewilderment to admiration, so every later point supports an argument rather than standing alone.',
      'The quotations are short and embedded in the sentences, and each is followed by comment on a specific technique or word: hyperbole, metaphor, the tag “I think”, the adjective “small”.',
      'It analyses structure as well as language, tracing how her confidence grows from the opening, through the exchange with Gordon, to the final sentence.',
      'It covers the whole extract without retelling it: each reference is chosen because it marks a stage in her changing response.',
      'The last sentence evaluates, offering an interpretation of what Zeppa values, which is what lifts an answer from explanation to analysis.',
    ],
  },

  timeline: [
    {
      where: 'Opening paragraph, lines 1 to 6 (anthology p.16)',
      title: 'All and only mountains',
      summary:
        'Zeppa begins with the landscape rather than herself: mountains in every direction. She knows the geological explanation, the Indian subcontinent colliding with Asia tens of millions of years ago, but cannot imagine it, and pictures a giant child shaping the land by hand instead.',
      setting: 'The mountains of Bhutan',
      who: ['Jamie Zeppa'],
      quote: 'Bhutan is all and only mountains',
      themes: ['Beauty and landscape'],
      tension: 2,
      significance:
        'The landscape is introduced as something she can explain but not imagine, which sets the tone of wonder for the whole extract.',
    },
    {
      where: 'The first night: the journey, lines 7 to 9',
      title: 'Four days, five flights',
      summary:
        'The time and place are fixed: her first night in Thimphu, the capital, ninety minutes by road from the airport at Paro. A list of cities traces five flights over four days from Toronto, and she is exhausted but unable to sleep.',
      setting: 'Thimphu, at night',
      who: ['Jamie Zeppa'],
      themes: ['Culture shock'],
      tension: 3,
      significance:
        'The long list of flights measures how far she is from home, and her sleeplessness suggests nerves as well as tiredness.',
    },
    {
      where: 'The first night: the view from the hotel, lines 10 to 18',
      title: 'Mountains beyond mountains',
      summary:
        'From her wood-panelled room at the Druk Sherig hotel she watches the mountains under the moon and remembers flying in that morning from the plains of India, past Everest, with a glimpse of the Tibetan plateau. Her old question about what lies beyond mountains has a simple answer: more mountains.',
      setting: 'Her room at the Druk Sherig hotel, Thimphu',
      who: ['Jamie Zeppa'],
      quote: 'on the other side of mountains are mountains',
      themes: ['Beauty and landscape'],
      tension: 2,
      significance:
        'Repetition turns geography into a feeling of being enclosed, far from anywhere she knows.',
    },
    {
      where: 'The next morning: breakfast, lines 19 to 29',
      title: 'Breakfast with Lorna and Sasha',
      summary:
        'She eats a disappointing breakfast of processed food with two other Canadians who have signed up to teach for two years. Lorna and Sasha are experienced travellers and already delighted with Bhutan. After a meeting with Gordon, the field director, the three walk along the main road, and Zeppa keeps close to the others.',
      setting: "The hotel, then Thimphu's main road",
      who: ['Jamie Zeppa', 'Lorna', 'Sasha', 'Gordon'],
      quote: 'hoping to pick up some of their enthusiasm',
      themes: ['Culture shock'],
      tension: 3,
      significance:
        'Her admission that she lacks their enthusiasm makes her an honest, unheroic narrator whose later admiration will seem earned.',
    },
    {
      where: 'The walk along the main road, lines 30 to 42',
      title: 'A capital without traffic lights',
      summary:
        'Thimphu seems smaller than its official population of 20,000. Policemen direct the few vehicles by hand, the buildings share one traditional style and the shops sell the same basic goods. Signs of the outside world, such as acid-washed jeans, American country music and a Rambo poster, are more than she expected, though few overall, and they stand out sharply.',
      setting: "Thimphu's main street",
      who: ['Jamie Zeppa', 'The Bhutanese people'],
      quote: 'startling against the Bhutanese-ness of everything else',
      themes: ['Tradition and the outside world'],
      tension: 2,
      significance:
        "The first sign of the extract's argument: Bhutan's own culture is strong, but the modern world is already arriving.",
    },
    {
      where: "Gordon's history of the town; Tashichho Dzong, lines 43 to 53 (p.17)",
      title: 'Old-looking, actually new',
      summary:
        'Gordon has told them that the ancient-looking town did not exist a few decades ago: before the sixties, when the third king made it the capital, it was rice fields, farmhouses and a fortress. He predicts it will seem like New York after a year in the east. After describing Tashichho Dzong, the seat of government at the end of the main road, Zeppa privately disagrees.',
      setting: "The end of Thimphu's main road, where Tashichho Dzong stands",
      who: ['Jamie Zeppa', 'Gordon'],
      quote: 'Thimphu will never look like New York to me, I think',
      themes: ['Tradition and the outside world'],
      tension: 3,
      significance:
        'Her quiet contradiction of Gordon marks a shift: she is beginning to judge Bhutan for herself, and her reply can be read as choosing the traditional over the modern.',
    },
    {
      where: 'The Bhutanese people, lines 54 to 69',
      title: 'No single word',
      summary:
        'Zeppa describes the Bhutanese as handsome, borrowing the verdict of the eighteenth-century envoy George Bogle, and explains the kira and the gho. People are curious about the foreigners but not surprised. A young man at a hotel walks them to the street to give directions in excellent English, and she searches in vain for one word for the quality that impresses her.',
      setting: 'The streets of Thimphu',
      who: ['Jamie Zeppa', 'The Bhutanese people', 'George Bogle', 'The young man at the hotel'],
      quote: 'can find no single word to hold all of my impressions',
      themes: ['Admiration and respect'],
      tension: 2,
      significance:
        'Admiration spreads from the landscape to the people, and her failure to find a word is itself a kind of praise.',
    },
    {
      where: 'Orientation week: the history lessons, lines 70 to 86',
      title: 'The Land of the Thunder Dragon',
      summary:
        "At a week-long orientation with teachers from Ireland, Britain, Australia and New Zealand, the history lessons interest her most. She summarises Tibetan settlement, the coming of Buddhism with the Indian saint Padmasambhava in the eighth century, and the unification of the valleys by Ngawang Namgyel after 1616, then lingers over the beauty of the country's older names.",
      setting: 'An orientation course for new teachers in Thimphu',
      who: ['Jamie Zeppa'],
      themes: ['History and independence'],
      tension: 1,
      significance:
        "The shift from personal record to history lesson widens the extract from one woman's arrival to a nation's story.",
    },
    {
      where: 'Final paragraph, lines 87 to 98 (pp.17 to 18)',
      title: 'A small country that looked after itself',
      summary:
        'Few Westerners reached Bhutan while Europeans took over much of Asia: two Portuguese Jesuits in 1627, then six brief British missions. The visit of the British envoy Ashley Eden in 1864 went badly: he was humiliated, forced to sign a treaty, and a short war followed. Zeppa ends by praising Bhutan for keeping its independence.',
      setting: "Bhutan's past, as taught at orientation",
      who: ['Jamie Zeppa', 'Ashley Eden', 'The Bhutanese people'],
      quote: 'I am full of admiration for this small country',
      themes: ['History and independence', 'Admiration and respect'],
      tension: 4,
      significance:
        'The extract ends on a judgement, not an event: her journey into Bhutan has become admiration for it.',
    },
  ],

  relationships: [
    {
      from: 'Jamie Zeppa',
      to: 'Lorna',
      kind: 'fellow recruits',
      note: "Lorna's confidence and laughter show up Zeppa's nerves. Zeppa stays close to her and Sasha hoping their enthusiasm will rub off, which makes Lorna a measure of how far Zeppa has to travel inwardly.",
    },
    {
      from: 'Jamie Zeppa',
      to: 'Sasha',
      kind: 'fellow recruits',
      note: 'Like Lorna, Sasha is a seasoned traveller delighted with Bhutan from the start. The two work together as a contrast: two confident travellers beside one uncertain narrator.',
    },
    {
      from: 'Jamie Zeppa',
      to: 'Gordon',
      kind: 'newcomer and field director',
      note: 'Gordon explains the country and predicts how it will look after a year in the east. Zeppa accepts his facts but quietly rejects his prediction, an early sign of her own judgement.',
    },
    {
      from: 'Jamie Zeppa',
      to: 'The Bhutanese people',
      kind: 'observer and observed',
      note: 'She watches, describes and admires; they look at the newcomers with curiosity but no surprise. The relationship is one-way in the extract: the Bhutanese are seen, but never quoted.',
    },
    {
      from: 'Jamie Zeppa',
      to: 'The young man at the hotel',
      kind: 'stranger and helper',
      note: 'A single act of courtesy, walking the newcomers to the street, becomes the evidence for her praise of a whole people and sends her searching for the right word.',
    },
    {
      from: 'Jamie Zeppa',
      to: 'George Bogle',
      kind: 'writer and earlier witness',
      note: 'She quotes his verdict of 1774 and agrees with it, borrowing his authority. The link across two centuries places her among Western visitors judging Bhutan from outside.',
    },
    {
      from: 'Ashley Eden',
      to: 'The Bhutanese people',
      kind: 'imperial envoy and hosts',
      note: "His mission of 1864 ended in humiliation and war. In Zeppa's telling the powerful visitor is made ridiculous, which serves her praise of a small country that kept its independence.",
    },
  ],

  compareWith: [
    {
      title: 'The Danger of a Single Story',
      href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
      reason:
        "Adichie warns against reducing a people to one story, a useful test for Zeppa's generalisations about the Bhutanese and for her admission that she cannot sum them up.",
    },
    {
      title: "The Explorer's Daughter",
      href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
      reason:
        'Both writers are outsiders watching a traditional community in a harsh, remote landscape, but Herbert is divided about the narwhal hunt where Zeppa is wholehearted in her admiration.',
    },
    {
      title: 'A Game of Polo with a Headless Goat',
      href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
      reason:
        "Two women writing as visitors about an unfamiliar culture: set Zeppa's reverent tone and history lesson against Levine's account of waiting for, and then chasing, a donkey-cart race in Karachi.",
    },
  ],

  contentGuidance: ['colonialism', 'mythological_religious'],

  sources: [
    {
      label:
        "Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, Pearson's own published PDF: the extract on pages 16 to 18 (lines 1 to 98), its introductory note (age 24), its spelling footnotes, and the acknowledgement on page 71 (Riverhead Books, 2000, copyright Jamie Zeppa 1999). Every quotation and quoted phrase checked word for word against it, and the length counted from it, 26 September 2026",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'The same anthology, title, author, Part 1 and page 16, as recorded in src/lib/board/edexcel-igcse-anthology.ts',
    },
    {
      label:
        'Classicalia interactive analysis (Lawrence McNally): a transcription of the extract, used for the first draft before the Pearson PDF was found. It differs from the anthology in small ways (for example "pitched roofs" for "pitched roof"), so it is not the reference',
      url: 'https://classicalia.co.uk/english/interactive/zeppa/index.html',
    },
    {
      label:
        'Oxbridge GCSE Tutor, Beyond Sky and Earth Edexcel IGCSE 2026 analysis: second check of wording (vocabulary examples quote whole sentences)',
      url: 'https://oxbridgegcsetutor.com/beyond-sky-and-earth-a-journey-into-bhutan-zeppa-edexcel-igcse-analysis/',
    },
    {
      label:
        'Awaken English, Beyond the Sky and Earth analysis breakdown (2020): second check of wording',
      url: 'https://awakenenglish.com/2020/09/23/beyond-the-sky-and-earth-a-journey-into-bhutan/',
    },
    {
      label: 'The Online Governess, Beyond the Sky and the Earth: second check of wording',
      url: 'https://www.theonlinegoverness.com/beyond-the-sky-and-the-earth',
    },
    {
      label: 'Get Revising revision cards (two sets): second check of short phrases',
      url: 'https://getrevising.co.uk/revision-cards/journey-into-bhutan-jamie-zeppa',
    },
    {
      label:
        'Kirkus Reviews, Beyond the Sky and the Earth: 1988, World University Service of Canada, two-year job, Pema Gatshel, Sherubtse College, a third year; Riverhead, 7 June 1999',
      url: 'https://www.kirkusreviews.com/book-reviews/jamie-zeppa/beyond-the-sky-and-the-earth/',
    },
    {
      label:
        'Penguin Random House, book page and author biography: two-year contract, born in Sault Ste. Marie, Ontario (gives her age as 24; Wikipedia says 23, so the guide gives neither)',
      url: 'https://www.penguinrandomhouse.com/books/348348/beyond-the-sky-and-the-earth-by-jamie-zeppa/',
    },
    {
      label:
        'Internet Archive catalogue records: UK editions by Macmillan, London (1999) and Pan (2000)',
      url: 'https://archive.org/details/beyondskyearthjo0000zepp',
    },
    { label: 'Wikipedia, Jamie Zeppa', url: 'https://en.wikipedia.org/wiki/Jamie_Zeppa' },
    {
      label: 'Wikipedia, Beyond the Sky and Earth: publication 1999, Sherubtse College, WUSC',
      url: 'https://en.wikipedia.org/wiki/Beyond_the_Sky_and_Earth',
    },
    {
      label: 'WUSC home page: a Canadian non-profit organisation working in education',
      url: 'https://wusc.ca/',
    },
    {
      label:
        'Wikipedia, Duar War: Ashley Eden, 1864 to 1865, Treaty of Sinchula, loss of the Duars',
      url: 'https://en.wikipedia.org/wiki/Duar_War',
    },
    {
      label:
        'Wikipedia, George Bogle: Scottish, sent by Warren Hastings to Tibet in 1774 through Bhutan',
      url: 'https://en.wikipedia.org/wiki/George_Bogle_(diplomat)',
    },
    {
      label:
        'Wikipedia, Thimphu: capital from 1955, formally 1961 under the third king; traffic police; Tashichho Dzong',
      url: 'https://en.wikipedia.org/wiki/Thimphu',
    },
    {
      label: 'Wikipedia, Padmasambhava: eighth century, known as Guru Rinpoche',
      url: 'https://en.wikipedia.org/wiki/Padmasambhava',
    },
    {
      label: 'Wikipedia, Ngawang Namgyal: arrived 1616, the Zhabdrung, unified Bhutan',
      url: 'https://en.wikipedia.org/wiki/Ngawang_Namgyal',
    },
  ],
}
