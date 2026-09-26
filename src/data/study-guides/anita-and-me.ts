import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Anita and Me, Meera Syal (1996). A supplement: the page at
 * /revision/texts/anita-and-me keeps its overview, context, themes and
 * characters, and this file adds what it lacked (verified key quotations,
 * passages for close reading, language analysis, structure, vocabulary, exam
 * practice and a model answer) together with the timeline and character map
 * the visuals draw.
 *
 * SELF-AUDIT OF THE PAGE ABOVE (26 September 2026). Overview, context, themes
 * and characters are substantive in quantity, so they stay native, but see the
 * errors below. Key quotations were graded NOT substantive: of its eight, only
 * three could be found in the novel, so fewer than the six the bar requires are
 * real. Extracts, language analysis, structure and form, vocabulary, exam
 * practice and a model answer were absent: the TextGuide component that renders
 * the page has no fields for them.
 *
 * HOW THE WORDING WAS CHECKED. Every quotation and every quoted phrase in this
 * file was found, word for word, in two lending copies on the Internet Archive:
 * the Flamingo paperback (2002 printing of the 1997 edition) and the Harper
 * Perennial paperback (2007). The per-book search-inside endpoint returned 403
 * for every item on the day, so the archive's full-text search API
 * (be-api.us.archive.org/ia-pub-fts-api), restricted by identifier, was used
 * instead; it returns short verbatim snippets. The two printings share their
 * pagination (both end on p. 328), and York Notes (Steve Eddy, Pearson 2016)
 * cites the same pages from the Harper Perennial edition of 2004, which is how
 * the page numbers here were fixed. Where a page could not be fixed, a moment is
 * placed by chapter only. Chapter placement comes from the York Notes chapter
 * list and GradeSaver's chapter summaries, cross-checked against the text;
 * GradeSaver was wrong on two points (it says Anita writes the last letter, and
 * that Meena blames both cousins for the stolen tin) and is not followed on
 * either.
 *
 * ERRORS ON THE PAGE ABOVE, none repeated here:
 * - It sets the novel in 1972. The novel names no year; money is in shillings
 *   and pence and the adults are angry about Powell's 1968 speech, which York
 *   Notes and Wikipedia read as the late 1960s. Its Idi Amin paragraph follows
 *   from the wrong date.
 * - "shortlisted for the Guardian Fiction Prize": not found in any source
 *   checked; the novel won the Betty Trask Award.
 * - Syal "was born Meera Syal Chopra": Wikipedia gives her birth name as
 *   Feroza Syal, born in Wolverhampton, 27 June 1961.
 * - "335 pages": the Flamingo and Harper Perennial text ends on p. 328.
 * - Order of events: Mama goes into labour at the end of Chapter 5 and Sunil is
 *   born as Chapter 6 opens, before the fete (Chapter 7) and before Nanima
 *   arrives (Chapter 8); the page has Nanima first.
 * - The attack: Meena does not see Sam attack anyone at or after the fete. A
 *   newspaper reports the assault on Mr Rajesh Bhatra in Chapter 11, and Anita
 *   boasts about it; "elderly" is not in the text.
 * - Tracey's near-drowning is the climax of Chapter 13, after the hospital, at
 *   Hollow Pond by the Big House: Tracey goes for Sam, misses and falls in. The
 *   page places it before the horse accident, "after following Anita".
 * - Nanima does not nurse Meena through her convalescence: she goes back to
 *   India while Meena is in hospital (Chapter 12), and is not there at the end.
 * - "Sam Lowbridge stands trial for the assault": not in the novel. Meena
 *   refuses to incriminate him over Tracey's fall.
 * - "Meena confronts Anita one last time and refuses to forgive her": the novel
 *   ends with Meena writing Anita a goodbye note that is never answered.
 * - Key quotations not found in either copy: "I wanted to be everything she
 *   was", "The Tollington I knew was slowly being dismantled", Sam's "I'm not
 *   talking about those, I'm talking about them..." (his real outburst is
 *   different), "Lowbridge had meant me, he had meant my Papa...", "Being an
 *   Indian in England was not the same as being Indian in India", and, in the
 *   friendship theme, "I knew I could not forgive Anita". The "freak" quotation
 *   is real but is in Chapter 6 (pp. 149-50), not "early chapters".
 * - Unverified in the character notes: Sam "drinking in her mother's kitchen",
 *   Anita leaving Tracey alone at the pond, Papa as "a clerical worker".
 *
 * COPYRIGHT. The novel is in copyright. Quotations are held under 15 words and
 * the page total under the 400-word ceiling in fair-dealing.ts; longer passages
 * are pointed to by chapter and page and summarised. Racist slurs spoken in the
 * novel are described, never reproduced: this page is read by children.
 */
export const guide: StudyGuide = {
  slug: 'anita-and-me',
  title: 'Anita and Me',
  author: 'Meera Syal',
  form: 'novel',
  scope:
    'The whole novel: a short Preface in the adult Meena’s voice, then thirteen chapters. Anita and Me is a modern prose set text for AQA GCSE English Literature (8702), Pearson Edexcel GCSE English Literature (1ET0), OCR GCSE English Literature (J352) and Eduqas GCSE English Literature. The boards examine it in different ways, so check the format of your own paper with your teacher. Page numbers in this guide are those of the Flamingo and Harper Perennial paperbacks, which share the same pages (the novel ends on page 328, and York Notes uses the same pagination). If your copy is paged differently, use the chapter, which does not change.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Meera Syal 1996. First published in Great Britain by Flamingo, an imprint of HarperCollins Publishers, and later in paperback by Harper Perennial; quotations and page numbers follow those paperbacks. Quoted for criticism and review.',
  },
  workLength: {
    words: 95000,
    basis:
      'Estimated, not counted: the text runs to page 328 of the Flamingo and Harper Perennial paperbacks (the last page number was confirmed in both copies by the full-text search), at roughly 300 words a page. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  native: {
    overview: '/revision/texts/anita-and-me',
    context: '/revision/texts/anita-and-me',
    themes: '/revision/texts/anita-and-me',
    characters: '/revision/texts/anita-and-me',
  },

  keyQuotes: [
    {
      text: 'You’re just like one of us.',
      where: 'Sandy, a neighbour, to Mama, Chapter 2',
      analysis:
        'Sandy means it kindly: she says it after Mama has looked after her son when Sandy missed her bus home from work. But the compliment gives itself away. “just like” measures Mama against an English standard, and “us” draws a circle that Mama is let into as a favour; in the same breath Sandy says she never thinks of Mama as “foreign”, which shows the word is still in her head. Mama will “graciously accept” it in public and then, among the Aunties, poke gentle fun at her English friends until they cry with laughter. One reading is that Syal shows belonging in Tollington as conditional, granted by the English and revocable, and the Kumars’ private laughter as the way they keep their dignity.',
    },
    {
      text: 'worse than they already think we are. You prove you are better. Always.',
      where: 'The rule Meena says was continually drummed into her, recalled in Chapter 3',
      analysis:
        'Meena remembers this rule as Mr Christmas threatens to tell their mothers about her and Anita. “they” is the English, and “already” admits that the family starts from suspicion: any mistake Meena makes counts against all of them. The one-word sentence “Always” is a burden with no end date. This is why Anita’s shrug dazzles her. Anita lives free of a rule Meena can never put down, and the friendship is partly Meena’s longing for that freedom. It also explains why a small lie in Chapter 1 hurts Papa so much.',
    },
    {
      text: 'Tell me mom. I don’t care.',
      where: 'Anita, to Mr Christmas, Chapter 3',
      analysis:
        'Anita says it in a flat, bored voice, and Meena gasps and calls it “treason”, then asks herself “Why hadn’t I said that?” The defiance is what makes Anita glamorous to a girl who has been taught that every mistake counts. A careful reader may hear something sadder. A child who does not care whether her mother is told may have a mother who does not care, and Syal plants here the neglect that the novel later makes plain when Anita’s mother leaves.',
    },
    {
      text: 'I wanted to shed my body like a snake slithering out of its skin',
      where: 'Meena, Chapter 6 (p. 146)',
      analysis:
        'The simile makes the wish to fit in physical and painful. The sentence goes on to say that she wants to emerge “pink and unrecognisable”, and pink is the colour of white skin, so what she imagines shedding is her own brownness. It comes on the same page as a teenage magazine’s reply to her letter, recommending a little foundation. A snake sheds its skin naturally; a girl cannot, so the image is of a wish that can only hurt. Set it beside Chapter 13, where her body at last fits her “to perfection”: that is the whole arc of the novel in two images.',
    },
    {
      text: 'living in the grey area between all categories felt increasingly like home',
      where: 'Meena, Chapter 6 (p. 150)',
      analysis:
        'Just before this, Meena calls herself a “freak” who fits neither the Indian nor the Tollington idea of a girl. Then the sentence turns. The “grey area” she was ashamed of becomes a place, and the word “home” gives it warmth. “increasingly” matters: this is a process, not a conclusion, and the fete a chapter later will test it hard. The more convincing reading is that Syal offers this in-between identity as the novel’s answer, not its problem, but makes Meena earn it.',
    },
    {
      text: 'This is our patch.',
      where: 'Sam Lowbridge, at the Spring Fete, Chapter 7',
      analysis:
        'Sam starts with a grievance about where the fete money goes, and “our” at first sounds like the whole of Tollington. By the end of his outburst it plainly means white Tollington, and the Kumars, who live there, are outside it. “patch” is a homely, gardening word, which makes a claim about who belongs sound like common sense. One reading is that Syal shows a young man’s anger at a village whose pit has closed, with a motorway coming, being turned against his neighbours, and she does it in four short words.',
    },
    {
      text: 'I felt as if I had been punched in the stomach.',
      where: 'Meena, at the Spring Fete, Chapter 7 (p. 193)',
      analysis:
        'Sam has not touched her, yet the simile makes his words a blow. Until now Meena has thought of Sam as someone who was friendly to her, so the shock is personal as well as political. The narration does not comment or explain; it records a child’s body reacting before her mind can catch up, with her legs going watery and a hot panic softening her insides. That restraint is more powerful than an adult’s judgement would be.',
    },
    {
      text: 'I was ten feet tall, I had a hundred arms, like the goddess',
      where: 'Meena, facing Sam and his gang, Chapter 8',
      analysis:
        'Walking back from the shop with Nanima and Sunil, Meena meets Sam and his gang and silences them with a look. The comic hyperbole has a serious root: the many-armed figure is a Hindu goddess, pictured on top of a fridge, and so comes from the heritage she wanted to shed in Chapter 6. With Nanima beside her, her body grows instead of shrinking. Syal suggests that Meena’s strength against prejudice comes not from becoming more English but from owning where she comes from.',
    },
    {
      text: 'What is there to fear when you have already lived two whole lives?',
      where: 'Nanima, to Meena, Chapter 8 (p. 231)',
      analysis:
        'Nanima has just described the family losing everything and being “reborn in Delhi” after Partition. The rhetorical question turns migration from a story of loss into a story of survival: each move is a death and a new life, and the next line asks how many more are to come. For Meena, who in the Preface described herself as “deprived of history”, this is the history she lacked, and it comes from inside the family rather than from a book.',
    },
    {
      text: 'my childhood would begin ebbing away with the fall of the autumn leaves',
      where: 'Meena, the opening of Chapter 11',
      analysis:
        'The adult narrator looks ahead at the start of a summer of good news, and her foreshadowing hangs over it. “ebbing” is a tidal image, so the loss is gradual rather than sudden, and the falling leaves tie it to the turning of the year. The reader now knows that the chapters to come will end something. It is one of the few moments where the older Meena steps openly in front of her younger self.',
    },
    {
      text: 'I never meant you, Meena! It was all the others, not yow!',
      where: 'Sam Lowbridge, at Hollow Pond, Chapter 13 (p. 313)',
      analysis:
        'Sam’s defence is the logic of prejudice: the people he knows are exceptions, and the category stays intact. It echoes Sandy’s “just like one of us” from Chapter 2, since both make Meena acceptable by separating her from her own people. The dialect “yow” keeps Sam a Tollington lad rather than a cartoon villain, which is exactly what makes him frightening. Meena’s reply refuses to be the exception.',
    },
    {
      text: 'You mean the others like the Bank Manager?',
      where: 'Meena, to Sam, Chapter 13 (p. 313)',
      analysis:
        'The Bank Manager is Meena’s name for an Indian man in a suit whom she watched walk away while Sam’s gang stopped to stare after him. Ever since Anita boasted about the gang attacking a man in a suit at a bus stop, Meena has pictured it happening to him. By naming one person she turns Sam’s faceless “others” back into a human being. The question form puts Sam on the spot, and the text records only that he looked confused: the girl has out-argued the bully.',
    },
    {
      text: 'It was an accident. I saw it. Tracey’s lying if she says anything else.',
      where: 'Meena, to the police, Chapter 13 (p. 326)',
      analysis:
        'Three short declaratives, and each is certain. Meena could have punished Sam and Anita with a lie; instead the girl who opened the novel whispering “I was lying” insists on what she saw. It is not simply forgiveness. The narration says she has already “had my revenge” and is leaving them to themselves, so the truth is a choice to be done with them. The last clause even shields them from Tracey. One reading is that honesty, not loyalty, is what finally makes Meena grown up.',
    },
    {
      text: 'She never replied, of course.',
      where: 'The last line of the novel, Chapter 13 (p. 328)',
      analysis:
        'Before leaving Tollington, Meena writes Anita a cheerful note, joking that Anita will not be around to tease her about her grammar-school hat. Anita never answers. There is no showdown: the friendship that drove the book ends in silence. “of course” is the adult narrator’s rueful certainty, looking back, that it could not have ended any other way. The flatness is the point, and it is more painful than a quarrel would have been.',
    },
  ],

  extracts: [
    {
      title: 'The Preface: an alternative history',
      where: 'Preface (the short opening section, ending on p. 10)',
      pointer:
        'The whole Preface, from Meena’s list of stock immigrant memories to its final words, “to feel complete, to belong.” Chapter 1 begins on the next page, with Meena insisting to Papa that she is not lying.',
      summary:
        'The adult Meena opens by offering the kind of immigrant childhood a reader might expect, a Punjabi girl suffering from culture shock in Wolverhampton, and then takes it away: this, she admits, is the version she tells at job interviews. Her real first memory, she says, is of understanding a joke, and she confesses a lifelong love of double meanings and of the gap between what people say and what they mean. She ends by insisting that she is not a liar: people without a history sometimes have to make up stories in order to belong.',
      annotations: [
        {
          phrase: 'marooned and misplaced in Wolverhampton',
          note: 'The alliteration makes the cliché sound polished and ready-made, the migrant as a castaway. Syal offers the stereotype a reader expects of a British Asian childhood and then mocks it, so the novel begins by refusing to be the story people want.',
        },
        {
          phrase: 'the alternative history I trot out in job interview situations',
          note: 'This is the adult narrator’s voice, wry and self-aware. “trot out” suggests a routine performance. We learn that Meena grew up to know exactly which story an audience wants, which warns us to read her carefully from the first page.',
        },
        {
          phrase: 'the gap between what is said and what is thought',
          note: 'A key to the whole novel. Syal’s irony lives in this gap: Sandy’s kind compliment that is not quite kind, Sam’s claim that he never meant Meena, and the child’s account that the adult narrator quietly corrects. Meena says it is the place she has always found herself.',
        },
        {
          phrase: 'those of us deprived of history',
          note: 'The plural “us” makes Meena speak for a group, not just herself. “deprived” implies something taken away rather than simply missing, which points to the history of Empire and Partition that English schooling left out. Her lies are presented as a response to that loss.',
        },
        {
          phrase: 'to feel complete, to belong',
          note: 'The Preface ends on the novel’s central need. Storytelling is not a vice here but a way of surviving, and the paired phrases make belonging sound like a kind of wholeness. The rest of the novel asks where, and to whom, Meena can belong.',
        },
      ],
      question:
        'How does Syal use the Preface to introduce Meena as a narrator? Refer closely to the language of the opening and to the way it prepares for the rest of the novel.',
    },
    {
      title: 'Sam Lowbridge at the Spring Fete',
      where: 'Chapter 7 (Meena’s reaction is on p. 193)',
      pointer:
        'From the Reverend Ince taking the megaphone from Mr Pembridge to announce where the fete money will go, through Sam’s shouted interruption, to Meena’s sense that the whole crowd has turned into “one huge eyeball” watching her and Papa.',
      summary:
        'The Spring Fete, Tollington’s only communal, organised event, is held in the grounds of Mr Pembridge’s Tudor mansion, the grandest house in the village. The Reverend Ince explains that last year most of the money went to a missionary project in Africa and that this year it will pay for a new church roof. Sam Lowbridge, now a skinhead with his gang around him, shouts that a church roof will do nothing for people like him. Voices across the grounds shout at him and Uncle Alan tries to reason with him, and Sam’s grievance turns into open racism aimed at people like the Kumars. Meena, standing with Papa, feels his words as a physical blow and senses every eye turning towards them.',
      annotations: [
        {
          phrase: 'Bloody church roof? What’s that gonna do for us, eh?',
          note: 'Sam’s first words are an economic grievance, and the rhetorical question sounds almost reasonable in a village whose pit has closed. Syal lets the reader feel the pull of the complaint before showing where it leads, which is more disturbing than a villain who is racist from the start.',
        },
        {
          phrase: 'Yow shuttit, yow bloody skinhead idiot!',
          note: 'Catcalls come at Sam from all over the grounds, in broad local dialect. Syal refuses to make Tollington simply racist: the village is divided, and the voices shouting at him are as much Tollington as he is.',
        },
        {
          phrase: 'a hot panic softened my insides to mush',
          note: 'Meena’s reaction is written through her body, not her thoughts. “softened” and “mush” turn a confident child into something shapeless in a moment, which shows how racism undoes her sense of being an ordinary Tollington girl.',
        },
        {
          phrase: 'one huge eyeball which swivelled slowly between me and papa',
          note: 'The grotesque hyperbole captures sudden, total self-consciousness. The crowd becomes a single staring organ, and Meena and Papa, who a minute ago were part of the crowd, are now what it looks at. The slow swivel makes the moment feel endless.',
        },
      ],
      question:
        'How does Syal present Meena’s feelings during Sam Lowbridge’s outburst at the fete, and how does this moment change the way she sees Tollington in the rest of the novel?',
    },
    {
      title: 'Meena’s statement to the police',
      where: 'Chapter 13 (pp. 324 to 326)',
      pointer:
        'From the false version Meena is tempted to give, in which Anita and Sam chase Tracey and push her into the water, to her statement to the young policeman: “It was an accident. I saw it.”',
      summary:
        'After Tracey has been pulled from the pond and revived, a young policeman questions Meena with Papa present. Meena first runs through a story that would get Sam and Anita into serious trouble, in which they chase Tracey and push her in. She can tell the policeman would welcome it, because Sam already has a record and the officer clearly looks down on the Rutters. Instead she settles back into herself and tells the truth: Tracey went for Sam, missed him and fell into the water, and anyone who says otherwise is lying.',
      annotations: [
        {
          phrase: 'I did not see who dealt the final shove',
          note: 'The detail belongs to the lie Meena is composing, and it is a clever one: pretending to be unsure makes a false story more believable. The storyteller of the Preface shows how dangerous her gift could be if she used it as a weapon.',
        },
        {
          phrase: 'fitted me to perfection and was all mine',
          note: 'Meena floats back into a body that, for the first time, fits. This answers the snake image of Chapter 6, when she wanted to shed her skin. Choosing the truth is presented as coming home to herself.',
        },
        {
          phrase: 'a previous record as long as his arm',
          note: 'The cliché is the policeman’s way of thinking, filtered through Meena. Syal lets us hear his prejudice against Sam and the Rutters without a word of comment, and shows that Meena could exploit it. Class prejudice here sits beside the racial prejudice the novel has shown.',
        },
        {
          phrase: 'I believed utterly now in the possibilities of change',
          note: 'The novel’s moral conclusion, stated with unusual certainty. “utterly” is absolute and “possibilities” is plural and open. In a book full of unwanted change, from the motorway to the demolished school, Meena decides that change can also be chosen and good.',
        },
      ],
      question:
        'How does Syal present Meena’s decision in this passage as a turning point in her growing up? Refer to the passage and to the novel as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Retrospective first-person narration',
      example:
        'The adult voice breaks in only rarely, as when the child Meena cannot bring herself to apologise and the narrator adds, “I have still never been able to say sorry”.',
      effect:
        'Two Meenas share the narration: the child who lives through the events and the adult who tells them. Syal usually lets the child see only what a child would see, so the reader understands more than she does, and the rare adult comments feel like a hand on the shoulder. Ask of any passage whether you are hearing the girl or the woman.',
    },
    {
      technique: 'Black Country dialect in dialogue',
      example:
        'Sam at Hollow Pond: “I never meant you, Meena! It was all the others, not yow!” (Chapter 13); Anita using “bosting”, brilliant, for the gang’s attack at the bus stop (Chapter 11).',
      effect:
        'The local speech makes Tollington real and working class, and it marks who belongs: Meena speaks it to fit in, and it annoys her parents. Syal gives the dialect to warm characters and cruel ones alike, so it is never a shorthand for villainy, and hearing a cheerful local word used for an assault is chilling. Sam’s “yow” makes him a neighbour, not a monster, which makes his racism more troubling.',
    },
    {
      technique: 'Code-switching',
      example:
        'When Meena talks tough in Tollington dialect to her cousin, Pinky asks, “Meena didi, why are you speaking so strangely?” (Chapter 6, p. 152).',
      effect:
        'Meena moves between registers depending on who is listening. Pinky’s innocent question, using the respectful Punjabi “didi”, exposes the performance: the voice Meena uses to impress Anita sounds foreign to her own family. The moment shows identity as something performed, and the cost of performing it.',
    },
    {
      technique: 'Personification of place',
      example:
        'At the start of Chapter 5, Tollington in autumn is “prancing around in its ostentatious autumnal cloak” (p. 88).',
      effect:
        'The run-down mining village is suddenly a show-off in fine clothes, which is funny and affectionate. Syal’s comic personification lets the reader love Tollington as Meena does, so that its later ugliness at the fete, and its demolition by the diggers, feel like losses.',
    },
    {
      technique: 'Body imagery and simile',
      example:
        'In Chapter 6 Meena wants to “shed my body like a snake slithering out of its skin”; in Chapter 13 her body “fitted me to perfection and was all mine”.',
      effect:
        'Syal tracks Meena’s sense of identity through how she feels in her own skin. The first image is of disgust and escape; the second, placed at the moment she tells the truth, is of belonging. The pairing turns an abstract theme into something a reader can feel.',
    },
    {
      technique: 'Hindu imagery',
      example:
        'Meena finds an image of Ganesha in the grounds of the Big House (Chapter 5), and faces down Sam feeling she had “a hundred arms, like the goddess” (Chapter 8).',
      effect:
        'Images from the Kumars’ religious culture appear at moments of danger and courage. Ganesha, hidden under ivy in the most English of places, hints at the Indian presence the last chapter reveals in the Big House. The goddess gives Meena a heroic picture of herself drawn from her own heritage.',
    },
    {
      technique: 'Comic hyperbole',
      example:
        'Sunil is “the tallest baby ever born at New End Hospital in Wolverhampton” (Chapter 6); at the fete the crowd becomes “one huge eyeball” (Chapter 7).',
      effect:
        'Exaggeration is the child’s way of seeing and much of the novel’s humour. The same technique serves fear at the fete, which shows how quickly comedy can turn. Strong answers notice that the humour is not decoration: it is what makes the painful moments land.',
    },
    {
      technique: 'Foreshadowing and repetition',
      example:
        'Chapter 11 opens with childhood “ebbing away”; in Chapter 13 Meena runs through the dark repeating, with every word capitalised, “I Have An Exam Tomorrow”.',
      effect:
        'The adult narrator’s foreshadowing tells us that the end of childhood is coming before the child knows. The capitalised refrain in Chapter 13 shows a girl clinging to an ordinary future while running towards a life-or-death emergency, and the contrast makes the night more frightening.',
    },
  ],

  structureForm: [
    {
      heading: 'A Preface and thirteen chapters',
      body: 'The novel opens with a short Preface in the voice of the adult Meena, then follows her in thirteen chapters from the age of nine to the eleven-plus exam and the family’s preparations to leave Tollington. The calendar gives it shape: Diwali and the fair in the autumn of Chapter 5, the Spring Fete in Chapter 7, a summer of good news at the start of Chapter 11, a long stay in hospital in Chapter 12, and the exam in Chapter 13. It is the classic shape of a bildungsroman: a short stretch of childhood in which a child becomes someone else.',
    },
    {
      heading: 'From a lie to the truth',
      body: 'The novel is built as an arc from one confession to another. Chapter 1 ends with Meena whispering “I was lying” to Papa outside Mr Ormerod’s shop. Chapter 13 ends her story with the truth told to a policeman, with Papa beside her, when a lie would have been easier and more satisfying. Arguably her worst lie falls in between, in Chapter 6, when she lets Baby, Auntie Shaila’s daughter, take the blame for the charity tin she stole. Tracing that arc is an easy way to write about structure in any essay on Meena’s growing up.',
    },
    {
      heading: 'The Big House: a mystery the ending solves',
      body: 'The Big House is feared from the start. In Chapter 5 its grounds are imagined to hide a “child-eating monster”, and the village children remember Jodie Bagshot, a four-year-old who drowned in the ponds beside it. In Chapter 13, when Meena bangs on its door for help, the owner answers in Punjabi. He is Harinder P. Singh, a Sikh, and his wife Mireille tells Meena that he was “tired of being the only local colour” and glad when her family arrived. He returns Mama’s lost necklace. Papa’s response, “All this time we have had a brother around the corner”, gives the structure its meaning: the stranger the village feared was one of the Kumars’ own, hidden in plain sight.',
    },
    {
      heading: 'Two Meenas: the child and the narrator',
      body: 'The story is told in the first person by the adult Meena looking back, but after the Preface the adult rarely steps forward. Most of the time we see what a nine- or ten-year-old sees and understand more than she does, which is the source of much of the humour and much of the dramatic irony. When the adult voice does appear, in the foreshadowing at the start of Chapter 11 or the rueful “of course” of the last line, it shows how the story looks from the other side of growing up.',
    },
    {
      heading: 'A landscape that changes with Meena',
      body: 'The motorway, the diggers and the demolished school are the outside version of what happens inside Meena. By the time she comes home from hospital in Chapter 12 she decides that “The whole village had aged behind my back”. Syal makes the place and the girl change together, so that leaving Tollington at the end is both a loss and an escape. Tollington itself is based on Essington, the Staffordshire mining village near Wolverhampton where Syal grew up, but the novel is fiction, and it is safest to write about Meena, not Syal.',
    },
    {
      heading: 'Many voices inside one narrator',
      body: 'A first-person narrator can only report what she sees, so Syal widens the novel by letting Meena overhear: the grown-ups’ stories of Partition at the mehfils, her parents’ private conversations, a newspaper headline, MAN ATTACKED IN TOLLINGTON, the notes Meena and Robert hold up to the glass of his hospital room, and Meena’s own goodbye note at the end. These other voices let the novel reach history and politics that a child could not explain, while keeping us inside her head.',
    },
  ],

  vocabulary: [
    {
      term: 'Bildungsroman',
      definition:
        'A novel about a young person growing up and forming an identity. Anita and Me follows Meena from nine to the eleven-plus, through a series of moral recognitions rather than one single event.',
    },
    {
      term: 'Retrospective narrator',
      definition:
        'A narrator telling the story from a later point in life. Here the adult Meena looks back on her childhood, which lets Syal combine a child’s view with an adult’s irony.',
    },
    {
      term: 'Semi-autobiographical',
      definition:
        'Drawn from the author’s own life but reshaped as fiction. Syal grew up in Essington, near Wolverhampton, on which Tollington is based, but Meena is a character, not Syal herself.',
    },
    {
      term: 'Black Country dialect',
      definition:
        'The local speech of the industrial West Midlands around Wolverhampton, which the Tollington characters speak. Examples in the novel include “yow” for you and “bosting” or “bostin” for brilliant.',
    },
    {
      term: 'Wench',
      definition:
        'In Black Country speech, a girl or young woman, used affectionately rather than as an insult. Meena calls herself too Indian to be a real Tollington wench, and the girls’ gang is the Wenches Brigade.',
    },
    {
      term: 'Piece',
      definition:
        'Tollington dialect for a sandwich. The novel explains the word itself: a “peculiar Tollington word for sandwich”.',
    },
    {
      term: 'Code-switching',
      definition:
        'Moving between languages, dialects or registers depending on who is listening. Meena switches between Tollington dialect, standard English and the Punjabi words of home.',
    },
    {
      term: 'Junglee',
      definition:
        'A Hindi and Punjabi word Nanima uses for Meena. Papa translates it as “a wild girl, uncivilised”, but Nanima says it with affection.',
    },
    {
      term: 'Didi',
      definition:
        'A respectful word for an elder sister or an older girl in Hindi and Punjabi. Pinky calls Meena “Meena didi”.',
    },
    {
      term: 'Nanima and Dadima',
      definition:
        'Grandmother on the mother’s side (Nanima) and on the father’s side (Dadima). Nanima is Mama’s mother, who comes from India in Chapter 8.',
    },
    {
      term: 'Mehfil',
      definition:
        'A gathering of friends for music, song, poetry and talk. The Kumars hold mehfils at home, where Papa sings and the Aunties and Uncles tell stories of India and Partition.',
    },
    {
      term: 'Gurudwara',
      definition:
        'A Sikh place of worship, spelled this way in the novel. The one Meena is taken to is in Birmingham, in a converted church.',
    },
    {
      term: 'Goras',
      definition:
        'A Hindi and Punjabi word for white people, which the novel also spells “gores”. The Aunties and Uncles use it when they talk among themselves about the English.',
    },
    {
      term: 'Partition',
      definition:
        'The division of British India into India and Pakistan in 1947, when the Punjab was split in two and violence forced millions from their homes. Meena’s family carry memories of it, and Nanima describes them being reborn in Delhi.',
    },
    {
      term: 'Eleven-plus',
      definition:
        'An exam taken at the end of primary school that decided whether a child went to a selective grammar school. In the novel no one from Tollington has passed it for a decade.',
    },
    {
      term: 'Tam-o’-shanter',
      definition:
        'A soft, flat woollen cap. In the novel it is part of the girls’ grammar-school uniform, and Meena jokes about it in her last note to Anita.',
    },
    {
      term: 'Skinhead',
      definition:
        'A youth style that began in late-1960s Britain, known for cropped hair and heavy boots. At the fete someone in the crowd shouts at Sam as a skinhead.',
    },
    {
      term: 'Diwali',
      definition:
        'The festival of lights, celebrated by Hindus and Sikhs. In Chapter 5 the Kumars mark it with a mehfil at home, the night Meena slips out to the fair.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Syal present the friendship between Meena and Anita in Anita and Me? Write about: how the friendship begins, develops and ends; how Syal presents the friendship by the ways she writes.',
        skill: 'Whole-text essay: character, relationships and methods',
        guidance: [
          'Open with an argument, not a summary: for example, that Syal shows the friendship as Meena’s longing to be someone else, and its end as the moment she accepts who she is.',
          'Begin with the attraction in Chapter 3: Anita’s “Tell me mom. I don’t care.” set against the rule Meena was taught, that she must prove she is better, always. Explain why that freedom dazzles her.',
          'Show the friendship at its height and its cost in Chapter 6: the Wenches Brigade, the stolen charity tin, and the lie that blames Baby.',
          'Give Anita her due: her mother leaves in Chapter 10, and Syal lets us see the neglect behind the swagger. Argue whether this makes Anita a victim, a bully, or both.',
          'Use the break in Chapter 11: Anita’s boast about the attack at the bus stop and her news about Sam, followed by Meena’s wild ride and fall.',
          'End with the ending: no showdown, only a note that is never answered, “She never replied, of course.” Comment on the adult narrator’s “of course”.',
        ],
      },
      {
        question:
          'Explore how Syal presents prejudice in Anita and Me. You must refer to the context of the novel in your answer.',
        skill: 'Whole-text essay with context',
        guidance: [
          'Separate kinds of prejudice: the kindly condescension of Sandy’s “just like one of us”, Sam’s open racism at the fete, the violence reported in Chapter 11, and the policeman’s class prejudice against the Rutters in Chapter 13.',
          'Analyse the fete closely: “This is our patch”, and Meena’s response, “as if I had been punched in the stomach”.',
          'Bring in context as part of the argument: Enoch Powell’s 1968 speech, which the adults in the novel are angry about; the closed pit and the motorway, which feed Sam’s grievance; Syal writing in the 1990s about a childhood in the Midlands.',
          'Show that Tollington is not simply racist: the crowd shouting Sam down, and the revelation of the Big House in Chapter 13.',
          'Finish with Sam’s “I never meant you, Meena” and Meena’s answer about the Bank Manager, and argue what Syal suggests about exceptions and categories.',
        ],
      },
      {
        question:
          'Read the passage in Chapter 7 in which Sam Lowbridge interrupts the Spring Fete. How does Syal present Meena’s reactions in this passage, and how is the fete important in the novel as a whole?',
        skill: 'Extract analysis leading into whole-text argument',
        guidance: [
          'Start with the passage: how Sam’s complaint about the church roof turns into racism, and the crowd’s divided response.',
          'Analyse the language of Meena’s reaction: the simile of the punch, the watery legs, the panic softening her insides, and the crowd as “one huge eyeball”.',
          'Explain what changes: Sam was someone Meena liked, so racism stops being background noise and becomes personal.',
          'Move outward: Meena facing down Sam in Chapter 8, Anita’s news about Sam in Chapter 11, and the confrontation at Hollow Pond in Chapter 13.',
          'Conclude on the fete as the turning point of the novel’s structure, between the comedy of the early chapters and the danger of the later ones.',
        ],
      },
      {
        question:
          'How does Syal present the importance of family and heritage in Anita and Me? Write about: Meena’s family, including Nanima; how Syal presents Meena’s changing attitude to her heritage.',
        skill: 'Whole-text essay: theme and development',
        guidance: [
          'Begin with rejection: in Chapter 6 Meena wants to emerge “pink and unrecognisable” and refuses to wear the Indian suits her mother lays out.',
          'Show the family’s own experience of prejudice and how they handle it, including Mama’s public grace and private laughter in Chapter 2.',
          'Make Nanima the turning point in Chapter 8: the play of “junglee”, her Punjabi with the silent Mr Worrall, and her question about having lived two whole lives.',
          'Use the goddess image of Chapter 8 and the Big House revelation of Chapter 13 to argue that heritage becomes Meena’s strength.',
          'Consider the losses too: Nanima’s return to India in Chapter 12 and the family leaving Tollington.',
        ],
      },
      {
        question:
          'How does Syal present Meena as a character who changes? Write about: what Meena is like at the start and at the end; how Syal presents these changes by the ways she writes.',
        skill: 'Whole-text essay: character and structure',
        guidance: [
          'Decide your view first. One strong line is that Meena changes from a girl who lies to belong into one who tells the truth because she already belongs to herself.',
          'Use the Preface and Chapter 1 for the starting point: the storyteller “deprived of history”, and the whispered “I was lying”.',
          'Track the body imagery from Chapter 6 to Chapter 13 as evidence of change.',
          'Use the hospital in Chapter 12: a friendship with Robert that has nothing to do with Anita, and the grief of losing him.',
          'End on Chapter 13: the truth to the police, the “possibilities of change”, and the goodbye note. Ask how complete the change is, since the adult narrator still cannot easily say sorry.',
        ],
      },
    ],
    tips: [
      'The novel never names its year. Money is counted in shillings and pence, which Britain replaced with decimal currency in February 1971; the adults are angry about Powell and “his bloody rivers”, which points to Enoch Powell’s speech of 1968; and the adult narrator calls Tollington “a footnote in the book of the Sixties”. Write the late 1960s rather than a single confident year.',
      'Know the ending exactly. Meena does not have a final confrontation with Anita. Her confrontation at Hollow Pond is with Sam; then she tells the police the truth and writes Anita a goodbye note that is never answered.',
      'Keep the child and the adult narrator apart. The strongest answers can say when Syal lets us see more than young Meena does, and when the older Meena steps in.',
      'You do not need to write out the racist slurs Sam and Anita use. Name them as racist slurs and analyse what they do; the analysis is what earns credit, not repeating the words.',
      'Do not present Tollington as simply racist. Use the villagers who shout Sam down, the Worralls, and the Big House revelation to show that Syal draws a divided place, which is more convincing than a village of villains.',
      'Learn two or three short quotations for each stage of the novel: the Preface and Chapters 1 to 3, Chapter 6, the fete in Chapter 7, Nanima in Chapter 8, and Chapters 11 to 13. That covers any question.',
      'Use the humour. Weaker answers treat the novel as simply sad; stronger ones show how Syal’s comedy makes the reader love Tollington and so feel what it does at the fete.',
    ],
  },

  modelAnswer: {
    question: 'How does Syal present racism in Anita and Me?',
    paragraph:
      'Syal presents racism not as something that arrives in Tollington from outside but as something that grows out of the village’s own grievances, and the Spring Fete in Chapter 7 is where Meena first sees this. Sam Lowbridge begins with a complaint many villagers might share, “What’s that gonna do for us, eh?”, and Syal lets it sound almost reasonable in a village whose pit has closed and which a motorway is about to cut through. Within moments, though, the possessive in “This is our patch” has narrowed: “our” no longer means the village but white Tollington, and the Kumars, who are Tollington neighbours, are suddenly outside it. Syal makes the reader feel the cost through Meena’s body rather than through argument. The simile “as if I had been punched in the stomach” turns words into a blow, and the hyperbole of the crowd becoming “one huge eyeball” shows a child realising that she and Papa are visible as different. One reading is that Syal, writing in the 1990s, wants her readers to see that the politics of Enoch Powell’s 1968 speech took root in ordinary places among people who were not monsters. The ending supports this. When Sam insists “I never meant you, Meena”, he still believes in “the others”, and Meena’s reply, naming the Bank Manager, refuses to be the exception that lets his prejudice survive.',
    commentary: [
      'It opens with an argument about the whole novel, not with plot, and the rest of the paragraph proves it.',
      'It follows a single word, “our”, and shows how its meaning narrows. That is precise language analysis, and it is more persuasive than labelling techniques.',
      'It links each method to its effect on Meena and on the reader: the simile makes words physical, and the hyperbole captures sudden self-consciousness.',
      'It uses context inside the argument, Powell’s speech and the date of writing, and marks the interpretation as a reading rather than a fact.',
      'It ends by connecting the fete to Chapter 13, which turns an analysis of one scene into a whole-text point.',
    ],
  },

  timeline: [
    {
      where: 'Preface',
      title: 'Not a liar',
      summary:
        'The adult Meena offers a stock immigrant childhood, a Punjabi girl stranded in Wolverhampton, then admits it is a story she tells at job interviews. She is not a liar, she says: people without a history sometimes make up stories in order to belong.',
      setting: 'The adult narrator, looking back',
      who: ['Meena Kumar'],
      quote: 'I’m really not a liar',
      themes: ['Identity and biculturalism', 'Belonging and exclusion'],
      tension: 1,
      significance:
        'It warns the reader that this narrator knows how to shape a story, and names the need that drives the novel: to belong.',
    },
    {
      where: 'Chapter 1',
      title: 'The walk to Mr Ormerod’s shop',
      summary:
        'Papa does not believe Meena’s account of where her sweets came from, and walks her through Tollington to Mr Ormerod’s shop to check it. On the way she describes the village and remembers meeting Anita. Outside the shop she finally whispers that she was lying.',
      setting: 'The lanes of Tollington and Mr Ormerod’s shop',
      who: ['Meena Kumar', 'Papa (Shyam Kumar)'],
      quote: 'I was lying',
      themes: ['Family and generational conflict', 'Growing up and loss of innocence'],
      tension: 2,
      significance:
        'The novel opens with a lie confessed to Papa; it closes with the truth told to the police while he stands beside her.',
    },
    {
      where: 'Chapter 2',
      title: 'Aunties, Uncles and neighbours',
      summary:
        'Meena describes the Punjabi friends her family call Aunties and Uncles, and the evenings of song and stories at home. The English neighbours are friendly, and Sandy tells Mama she never thinks of her as foreign.',
      setting: 'The Kumars’ cottage and the street outside',
      who: ['Meena Kumar', 'Mama (Daljit Kumar)', 'Sandy'],
      quote: 'You’re just like one of us.',
      themes: ['Belonging and exclusion', 'Family and generational conflict'],
      tension: 1,
      significance:
        'Belonging in Tollington is offered as a favour; Mama’s laughter with the Aunties afterwards is her private answer.',
    },
    {
      where: 'Chapter 3',
      title: 'Anita notices Meena',
      summary:
        'Anita Rutter, older and the leader of the yard, takes Meena’s sweets and lets her tag along. When Mr Christmas threatens to tell their mothers about them, Meena begs him not to, while Anita shrugs.',
      setting: 'The entries and back yards behind the cottages',
      who: ['Meena Kumar', 'Anita Rutter', 'Mr Christmas'],
      quote: 'Tell me mom. I don’t care.',
      themes: ['Female friendship and betrayal', 'Belonging and exclusion'],
      tension: 2,
      significance:
        'Anita’s freedom from consequences is what dazzles Meena, who has been taught that every mistake counts against her family.',
    },
    {
      where: 'Chapter 5',
      title: 'Diwali night and the Big House',
      summary:
        'On the night of the family’s Diwali party Meena slips out to the fair and follows Anita through a gap into the forbidden grounds of the Big House, where she uncovers an image of Ganesha. Fleeing, she loses Mama’s diamond necklace, and gets home to find Mama has gone into labour.',
      setting: 'The fairground, then the overgrown grounds of the Big House at night',
      who: ['Meena Kumar', 'Anita Rutter', 'Mama (Daljit Kumar)'],
      quote: 'somewhere housed a child-eating monster',
      themes: [
        'Identity and biculturalism',
        'Growing up and loss of innocence',
        'Family and generational conflict',
      ],
      tension: 4,
      significance:
        'The lost necklace and the mysterious Big House are threads the last chapter ties together.',
    },
    {
      where: 'Chapter 6',
      title: 'The tenth birthday and the stolen tin',
      summary:
        'With baby Sunil taking Mama’s attention, Meena spends her days with Anita in their gang, the Wenches Brigade. On her tenth birthday, on a trip to Mr Ormerod’s shop with Anita and her cousins, Meena steals the charity collection tin and hides it inside Baby’s jumper. When the theft comes to light she bursts into tears and blames Baby, Auntie Shaila’s daughter.',
      setting: 'Mr Ormerod’s shop and the Kumars’ house',
      who: ['Meena Kumar', 'Anita Rutter', 'Sunil', 'Mr Ormerod', 'Baby'],
      quote: 'I wanted to shed my body like a snake slithering out of its skin',
      themes: [
        'Identity and biculturalism',
        'Growing up and loss of innocence',
        'Female friendship and betrayal',
      ],
      tension: 3,
      significance:
        'Meena’s wish to be someone else reaches its lowest point in a lie that lets an innocent child take the blame.',
    },
    {
      where: 'Chapter 7',
      title: 'The Spring Fete',
      summary:
        'When the Reverend Ince announces that the fete money will pay for a new church roof, Sam Lowbridge shouts that it will do nothing for people like him. Voices across the grounds shout at him, his complaint turns into open racism, and Meena, standing beside Papa, feels every eye turn to them.',
      setting: 'The grounds of Mr Pembridge’s mansion, open to the village for the fete',
      who: ['Meena Kumar', 'Sam Lowbridge', 'Papa (Shyam Kumar)', 'Uncle Alan', 'Reverend Ince'],
      quote: 'This is our patch.',
      themes: ['Racism and prejudice', 'Belonging and exclusion'],
      tension: 4,
      significance:
        'Racism stops being background noise for Meena and becomes something aimed at her own family.',
    },
    {
      where: 'Chapter 8',
      title: 'Nanima arrives',
      summary:
        'Nanima comes from India to help Mama with the new baby, and the house fills with visitors. She soothes Sunil, talks in Punjabi to the silent Mr Worrall and tells Meena about the family’s past. Walking home from the shop, Meena silences Sam and his gang with a look.',
      setting: 'The Kumars’ house, the Worralls’ front room and the village street',
      who: ['Nanima', 'Meena Kumar', 'Sunil', 'Mama (Daljit Kumar)', 'Sam Lowbridge'],
      quote: 'I was ten feet tall, I had a hundred arms, like the goddess',
      themes: ['Family and generational conflict', 'Identity and biculturalism'],
      tension: 2,
      significance:
        'Nanima gives Meena a history of her own, and with it the confidence to face Sam.',
    },
    {
      where: 'Chapter 10',
      title: 'Anita’s mother leaves',
      summary:
        'Anita tells Meena flatly that her mother has gone. The Kumars have Anita round for dinner, but the evening is uneasy, and afterwards Mama is careful about asking her again.',
      setting: 'Tollington, then the Kumars’ house at dinner',
      who: ['Anita Rutter', 'Meena Kumar', 'Mama (Daljit Kumar)', 'Nanima'],
      themes: ['Female friendship and betrayal', 'Family and generational conflict'],
      tension: 3,
      significance:
        'Syal shows the damage in Anita’s home, which makes her cruelty harder to judge simply.',
    },
    {
      where: 'Chapter 11',
      title: 'The headline and the fall',
      summary:
        'The diggers arrive, and a newspaper reports that a Mr Rajesh Bhatra has been attacked and robbed in Tollington. At Sherrie’s farm Anita reveals that Sam is her boyfriend and boasts about going with his gang to attack a man at a bus stop. Meena rides off on Trixie at a gallop and falls.',
      setting: 'A village torn up for the motorway, then Sherrie’s farm',
      who: ['Meena Kumar', 'Anita Rutter', 'Sherrie', 'Sam Lowbridge'],
      quote: 'my childhood would begin ebbing away with the fall of the autumn leaves',
      themes: [
        'Racism and prejudice',
        'Female friendship and betrayal',
        'Growing up and loss of innocence',
      ],
      tension: 5,
      significance:
        'Anita’s boast ends the friendship in all but name, and the fall ends Meena’s summer.',
    },
    {
      where: 'Chapter 12',
      title: 'Robert',
      summary:
        'In hospital with her leg in plaster, Meena befriends Robert, a boy in a glass-walled isolation room, and they talk through the glass with written notes. While she is there Nanima decides to go back to India. After Meena goes home, a letter from Robert’s parents tells her that he has died.',
      setting: 'A hospital ward, then home to a changed Tollington',
      who: ['Meena Kumar', 'Robert', 'Nanima'],
      quote: 'The whole village had aged behind my back',
      themes: ['Growing up and loss of innocence', 'Family and generational conflict'],
      tension: 3,
      significance:
        'Meena’s first friendship without Anita, and the first death of a friend, happen away from Tollington.',
    },
    {
      where: 'Chapter 13',
      title: 'Hollow Pond',
      summary:
        'On the night before the eleven-plus, Tracey begs Meena to come to Hollow Pond, where Anita is with Sam. Sam insists his racist words were never meant for Meena. When he raises his fist to Anita, Tracey goes for him, misses and falls into the deep water, and Meena runs to the Big House for help.',
      setting: 'Hollow Pond, a flooded old mine working by the Big House, at night',
      who: ['Tracey Rutter', 'Meena Kumar', 'Anita Rutter', 'Sam Lowbridge'],
      quote: 'I never meant you, Meena! It was all the others, not yow!',
      themes: [
        'Racism and prejudice',
        'Female friendship and betrayal',
        'Growing up and loss of innocence',
      ],
      tension: 5,
      significance:
        'The novel’s climax brings its threads together: Sam’s racism, Anita’s choices and Tracey’s neglect.',
    },
    {
      where: 'Chapter 13',
      title: 'Inside the Big House',
      summary:
        'The owner of the Big House, whom the village children imagined as a monster, answers Meena in Punjabi and hurries out to help. He is Harinder P. Singh, a Sikh, and his wife Mireille tells Meena he was glad when her family came to the village.',
      setting: 'The Big House',
      who: ['Meena Kumar', 'Harinder P. Singh', 'Mireille'],
      quote: 'tired of being the only local colour',
      themes: ['Belonging and exclusion', 'Identity and biculturalism'],
      tension: 4,
      significance:
        'The feared stranger at the heart of the English village turns out to be one of the Kumars’ own.',
    },
    {
      where: 'Chapter 13',
      title: 'The truth, and goodbye',
      summary:
        'Tracey is revived. Questioned by a young policeman who plainly wants to blame Sam and Anita, Meena tells the truth: Tracey fell by accident. She passes the eleven-plus, Mr Singh returns Mama’s lost necklace, and the Kumars prepare to leave. Meena writes Anita a goodbye note.',
      setting: 'The Kumars’ house and a changing Tollington',
      who: ['Meena Kumar', 'Papa (Shyam Kumar)', 'Harinder P. Singh', 'Anita Rutter'],
      quote: 'She never replied, of course.',
      themes: ['Growing up and loss of innocence', 'Female friendship and betrayal'],
      tension: 2,
      significance:
        'Meena ends her childhood by choosing the truth, and the friendship ends not in a quarrel but in silence.',
    },
  ],

  relationships: [
    {
      from: 'Meena Kumar',
      to: 'Anita Rutter',
      kind: 'best friends, then strangers',
      note: 'Meena is dazzled by the older girl’s freedom in Chapter 3 and joins her gang, the Wenches Brigade. The friendship draws her into theft and lies, breaks when Anita boasts about the attack and reveals Sam as her boyfriend, and ends with a note Anita never answers.',
    },
    {
      from: 'Anita Rutter',
      to: 'Sam Lowbridge',
      kind: 'girlfriend and boyfriend',
      note: 'Revealed in Chapter 11. Anita takes on Sam’s racism as a kind of glamour, but at Hollow Pond, after she hits him with a rock, he races at her with his fist raised, which sets off Tracey’s fall.',
    },
    {
      from: 'Meena Kumar',
      to: 'Sam Lowbridge',
      kind: 'neighbours; a liked older boy turned enemy',
      note: 'Sam had always been friendly to Meena, which is why the fete hurts so much. She faces him down in Chapter 8, answers him with the Bank Manager in Chapter 13, and then refuses to lie to get him into trouble.',
    },
    {
      from: 'Anita Rutter',
      to: 'Tracey Rutter',
      kind: 'sisters',
      note: 'Tracey is the anxious younger sister who trails after Anita. At the climax she fetches Meena to help and flies at Sam to protect Anita, which is how she falls into the pond.',
    },
    {
      from: 'Anita Rutter',
      to: 'Deirdre Rutter',
      kind: 'daughter and mother',
      note: 'Deirdre is a remote figure in Anita’s life, and she leaves the family in Chapter 10. Syal uses her to explain, without excusing, the hardness in Anita.',
    },
    {
      from: 'Meena Kumar',
      to: 'Nanima',
      kind: 'granddaughter and grandmother',
      note: 'Nanima teases Meena as a “junglee” and gives her the family’s history. Her arrival in Chapter 8 turns Meena’s shame about her heritage into pride, and her return to India in Chapter 12 is a loss Meena bears in silence.',
    },
    {
      from: 'Meena Kumar',
      to: 'Papa (Shyam Kumar)',
      kind: 'daughter and father',
      note: 'Their relationship is measured in honesty. It opens with Meena confessing a lie to him and ends with her telling the truth to the police while he is beside her.',
    },
    {
      from: 'Mama (Daljit Kumar)',
      to: 'Nanima',
      kind: 'daughter and mother',
      note: 'Nanima comes from India to help Mama, who is struggling with a new baby far from her own family. Her presence rebalances the household.',
    },
    {
      from: 'Meena Kumar',
      to: 'Sunil',
      kind: 'sister and baby brother',
      note: 'Mama goes into labour at the end of Chapter 5, and Sunil’s birth as Chapter 6 opens takes her attention and gives Meena the freedom to run with Anita; with Nanima’s help she grows closer to him.',
    },
    {
      from: 'Meena Kumar',
      to: 'Robert',
      kind: 'friends in hospital',
      note: 'Their friendship, carried on through notes held up to the glass, is Meena’s first that owes nothing to Anita. His death is the first time she loses a friend.',
    },
    {
      from: 'Papa (Shyam Kumar)',
      to: 'Harinder P. Singh',
      kind: 'neighbours who never met',
      note: 'The Sikh owner of the Big House lived near the Kumars for years unseen. Papa’s words, “All this time we have had a brother around the corner”, sum up the novel’s last surprise.',
    },
  ],

  compareWith: [
    {
      title: 'My Name is Leon (Kit de Waal)',
      href: '/revision/texts/my-name-is-leon',
      reason:
        'Another story of race and belonging in the West Midlands seen through a child, set in Birmingham in 1980 and 1981: compare how each writer lets a child notice what the adults around them do not say.',
    },
    {
      title: 'Pigeon English (Stephen Kelman)',
      href: '/revision/texts/pigeon-english',
      reason:
        'A child narrator from a migrant family, Harri from Ghana on a London estate, whose hybrid English and innocence the reader sees more clearly than he does, as with Meena.',
    },
    {
      title: 'Leave Taking (Winsome Pinnock)',
      href: '/revision/texts/leave-taking',
      reason:
        'A play about a mother who came to London from Jamaica and her British-born daughters, which sets a second generation’s struggle over heritage and belonging beside the Kumars’.',
    },
  ],

  contentGuidance: [
    'discrimination',
    'violence',
    'crime_injustice',
    'mortality',
    'intimate_relationships',
    'colonialism',
    'mythological_religious',
  ],

  quotesFromElsewhere: [],

  sources: [
    {
      label:
        'Anita and Me, Flamingo paperback (1997 edition, 2002 printing), Internet Archive lending copy, searched with the archive’s full-text search restricted to this item: exact wording of every quotation and quoted phrase, the copyright page (first published by Flamingo 1996, © Meera Syal 1996, Flamingo an imprint of HarperCollins), and page numbers where a printed page number (a footer, so the words before it are on that page) falls inside a returned snippet (pp. 10, 23, 145, 149, 231, 309, 313, 318, 324, 328).',
      url: 'https://archive.org/details/anitame0000syal_o4c1',
    },
    {
      label:
        'Anita and Me, Harper Perennial paperback (2007), Internet Archive lending copy, searched the same way: the second copy every quotation was checked against, with identical wording and pagination (the novel ends on p. 328 in both).',
      url: 'https://archive.org/details/anitame0000syal_u7u0',
    },
    {
      label:
        'Internet Archive full-text search API, used because the per-book search-inside endpoint returned 403 for every item on 26 September 2026.',
      url: 'https://be-api.us.archive.org/ia-pub-fts-api',
    },
    {
      label:
        'York Notes for GCSE: Anita and Me, Steve Eddy (Pearson, 2016), Internet Archive copy, searched the same way: the Preface and thirteen-chapter structure, chapter titles, page references to the Harper Perennial edition of 2004 (pp. 88, 124, 146, 152, 193, 313, 326), the sequence of events at Hollow Ponds, Meena blaming Baby for the tin, and the dating argument (Powell and pre-decimal money).',
      url: 'https://archive.org/details/anitame0000stev',
    },
    {
      label:
        'York Notes online, Anita and Me plot and action pages: the list of chapter summaries, Preface and Chapters 1 to 13.',
      url: 'https://www.yorknotes.com/gcse/english-literature/anita-and-me-2017/study/plot-and-action/00090000_chapter-7-the-spring-fete',
    },
    {
      label:
        'GradeSaver chapter summaries, Chapters 1 to 13: used only to locate events for checking against the text. Two of its claims were contradicted by the text and York Notes and are not followed.',
      url: 'https://www.gradesaver.com/anita-and-me/study-guide/summary-chapter-13',
    },
    {
      label:
        'Wikipedia, Anita and Me (novel): published 1996 by Flamingo; won the Betty Trask Award; set in the late 1960s in a village based on Essington; film 2002 with a screenplay by Syal; stage adaptation by Tanika Gupta, 2015.',
      url: 'https://en.wikipedia.org/wiki/Anita_and_Me_(novel)',
    },
    {
      label:
        'Wikipedia, Meera Syal: born Feroza Syal in Wolverhampton, 27 June 1961; grew up in Essington, Staffordshire; parents Punjabi, from New Delhi.',
      url: 'https://en.wikipedia.org/wiki/Meera_Syal',
    },
    {
      label: 'The Royal Mint, the story of decimalisation: Decimal Day, 15 February 1971.',
      url: 'https://www.royalmint.com/collect/decimalisation/the-story-of-decimalisation/',
    },
  ],
}
