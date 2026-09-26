import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Significant Cigarettes (from The Road Home), Rose Tremain (2007). A complete
 * guide: the text had only a placeholder page.
 *
 * THE TEXT. Every quotation was copied from the extract as the student studies
 * it: pages 38-41 of the Pearson Edexcel International GCSE English Anthology,
 * Issue 8 (February 2026), Part 2, read from Pearson's own PDF (the local copy
 * was 781,803 bytes, the size Pearson's server reported for the live file on 25
 * September 2026). Each quotation, annotated phrase and quoted word in the prose
 * was then located in that text by script, and its line number taken from the
 * anthology's margin numbering: the extract runs to 150 numbered lines, and all
 * thirty margin numbers matched a sequential count. Page breaks in that printing
 * fall after lines 51, 94 and 145.
 *
 * The anthology's acknowledgements (Part 2, p. 72) say the text is from The Road
 * Home, Chatto & Windus, 2007, pp. 1-6: the novel's opening pages. The title
 * Significant Cigarettes is the one the anthology prints; the phrase does not
 * occur in the extract, and nothing here claims it is Tremain's chapter title,
 * because that could not be checked. The Issue 8 change list records no changes
 * to this text.
 *
 * The extract is in copyright and is 2,059 words long, so the whole page may
 * quote 205 of them (fair-dealing.ts). The guide works from a fixed set of short
 * phrases and reuses them; everything else is paraphrase and line reference.
 * An earlier draft of this file, written the same day, quoted 210 words and so
 * failed that limit; it also said the Orange Prize rather than the Orange
 * Broadband Prize, called the pages "the first edition", which the
 * acknowledgement does not say, set its exam questions in the Literature
 * paper's wording rather than English Language A's, and offered a two-text
 * comparison where the coursework option requires three texts. All corrected.
 *
 * The set-text registry row describes the journey as from rural Eastern Europe
 * to London. The extract never names Lev's country, and this guide does not
 * either.
 *
 * A fact-check on 26 September 2026, against a fresh download of the anthology
 * (same 781,803 bytes and checksum), the specification, the 4EA1/02 paper and
 * its examiners' report, found every quotation and line number exact and fixed
 * these. The guide said Lev "never smokes" in the extract: it never shows him
 * smoking, but the gas stops allow it and at line 123 he is waiting for the next
 * one, so it now says only what is shown. The coursework option is three Part 2
 * texts, not "three or more". Lev imagines the man on the note fearing only "a
 * little loss of capital"; he does not imagine him losing money. Lev and a
 * driver being the only two awake is his forecast for the next stop, not the
 * present. "Nicotine or oblivion" is not a metaphor, so the metaphor entry now
 * uses sleep painting pictures. The red buses are in an imagined England, not
 * London; Baryn is not called a town; and the examiners' report said the weakest
 * answers "often" stayed with the opening, not "rarely" left it. Readings that
 * were stated as Tremain's intentions are now framed as readings.
 */
export const guide: StudyGuide = {
  slug: 'significant-cigarettes',
  title: 'Significant Cigarettes (from The Road Home)',
  author: 'Rose Tremain',
  form: 'novel',
  scope:
    'The extract from the opening of Rose Tremain’s novel The Road Home, printed under the title Significant Cigarettes on pages 38-41 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 2, for English Language A. It runs to 150 numbered lines. Line and page references in this guide follow that printing, and the student is examined on the extract, not on the rest of the novel.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Rose Tremain 2007. From The Road Home, Chatto & Windus, 2007, pp. 1-6, as printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), where it is reproduced by permission of The Random House Group Limited and Little, Brown and Company. Quoted here in short extracts for criticism and review.',
  },
  workLength: {
    words: 2059,
    basis:
      'Counted from the extract as printed in the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pp. 38-41, extracted from Pearson’s PDF with the title, running heads, page footers, author line and margin line numbers removed and the two words broken across lines (forty-three, hard-boiled) rejoined: 150 lines, 2,059 words split on spaces. Counting each part of a hyphenated word separately, as the quotation counter does, gives 2,080; the lower figure is recorded so the limit errs tight.',
  },

  overview: {
    summary: [
      'Significant Cigarettes is the opening of Rose Tremain’s novel The Road Home (2007), printed in the anthology as an extract of 150 numbered lines. Lev, a widower from the village of Auror who will soon be forty-three, is travelling by coach to London, a journey of fifty hours or more, to look for work. The sawmill at Baryn where he worked closed two years earlier, and since then he, his mother and his five-year-old daughter have lived on the money his mother makes selling jewellery made from tin.',
      'Almost nothing happens outwardly. Across a single day and night Lev is told he cannot smoke, meets the woman in the next seat, Lydia, a former English teacher going to interviews for jobs as a translator, practises his English with her, drinks vodka from a flask in his boot, fails to sleep, and studies a British twenty-pound note by his reading light. The real events happen inside his head: memories of his father at the sawmill, of his wife Marina dying in hospital, of her wish at the sulphur springs that they were storks, and pictures of the England he imagines.',
      'The anthology’s title points at the extract’s central object. Lev never lights a cigarette in these pages. He puts one unlit between his lips at sunrise, and by night his craving is physical and acute. The cigarettes are significant because of what they signify: comfort, companionship, self-control, a habit from home, and a way of standing apart from other people. The phrase itself does not appear in the text, so treat it as the anthology’s framing and ask what it makes you notice.',
      'Tremain tells the story in the third person but stays very close to Lev’s mind, so the reader shares his tiredness, his grief and his stubborn hope. The extract moves between three times, the present of the coach, the past he is leaving and the future he imagines, and ends with Lev’s own voice declaring that his time is coming. Whether that ending is triumphant or naive is the question most good answers will argue about.',
    ],
  },

  context: [
    {
      heading: 'Rose Tremain',
      body: 'Rose Tremain was born in London on 2 August 1943. She studied at the Sorbonne in Paris and at the University of East Anglia, where she later taught creative writing from 1988 to 1995 and became Chancellor in 2013. Her novel Restoration (1989) was shortlisted for the Booker Prize, and Music and Silence (1999) won the Whitbread Award. She was made a Dame in the 2020 New Year Honours for services to writing. In this extract she enters the mind of an outsider with sympathy and some dry humour, and that closeness is what the questions on it ask you to explore.',
    },
    {
      heading: 'The Road Home (2007)',
      body: 'The novel was published by Chatto & Windus in 2007 and won the 2008 Orange Broadband Prize for Fiction, the award now called the Women’s Prize for Fiction. The anthology’s acknowledgements give the extract as pages 1-6 of the Chatto & Windus edition, and its first sentence is the novel’s first sentence, so this is how the book begins. Later in the novel Lev finds work in London washing dishes in an expensive restaurant, and meets people such as Christy, an Irishman whose wife has left him, and Sophie, a young chef. None of that is in the extract, and in the exam you should write only about what the extract shows. The novel’s title is still worth knowing: a book called The Road Home that opens with a man leaving home raises the question of where home is, and whether the road leads back.',
    },
    {
      heading: 'An unnamed country',
      body: 'Tremain never names Lev’s country. The extract gives only its places: his village, Auror; Baryn, where the sawmill was and where he also took English classes; Yarbl, where Lydia taught at School 237; and the sulphur springs at Jor. A few details place it loosely. Lev carries Russian cigarettes, his English class taught him that the British have never been occupied, and he thinks of Hitler and Stalin as names a lucky man would never have needed to fear. Summaries of the novel describe the country only as somewhere in Eastern Europe. One effect of leaving it unnamed is that Lev can stand for many migrants rather than one nationality, and the reader has no particular country to attach stereotypes to.',
    },
    {
      heading: 'Migration to Britain after 2004',
      body: 'On 1 May 2004 ten countries joined the European Union: Cyprus, the Czech Republic, Estonia, Hungary, Latvia, Lithuania, Malta, Poland, Slovakia and Slovenia. The United Kingdom was one of the few existing members, with Ireland and Sweden, to let workers from the new states take jobs straight away, though Britain asked them to register and limited their access to benefits. The Road Home appeared three years later. The extract does not say whether Lev’s country is in the EU, and it is safer not to claim that it is. What it does show is a man who expects his right to be in England to be questioned: among the phrases he practises is “I am legal”.',
    },
    {
      heading: 'The man on the twenty-pound note',
      body: 'Lev cannot read the name under the portrait, but the dates he sees, 1857 to 1934, are those of the composer Sir Edward Elgar. From 22 June 1999 until it was withdrawn on 30 June 2010, the back of the Bank of England £20 note showed Elgar with Worcester Cathedral, and its design included an angel playing a trumpet, which matches what Lev sees. Elgar was not a banker. His father was a piano tuner who ran a shop selling sheet music and instruments, and Elgar had little formal musical training; the first of his Pomp and Circumstance Marches supplied the tune of Land of Hope and Glory, often called an unofficial British anthem. Tremain never names him, so this is knowledge the reader may bring rather than something the text states. If you do bring it, Lev’s guess that the man looks like a banker becomes dramatic irony: he reads the portrait through his own idea of England as a country of money and luck.',
    },
    {
      heading: 'The Power and the Glory',
      body: 'The faded English paperback Lydia reads under her light is The Power and the Glory (1940) by Graham Greene, about an unnamed Catholic priest on the run in 1930s Mexico, when the government was trying to suppress the Church. Its title alludes to the words often said at the end of the Lord’s Prayer. Tremain makes no comment on the choice, so any link is a reading, but it is a suggestive one: a novel about a hunted, flawed outsider, with a title about power and glory, is read in English by a woman heading for a country Lev thinks of as lucky. It also shows how much further Lydia’s English goes than his.',
    },
    {
      heading: 'History in Lev’s head',
      body: 'Near the end Lev imagines the life of the man on the note: he would have known no system but capitalism, heard of Hitler and Stalin without fearing them, had nothing to fear but a little loss of capital in what Americans called the Crash, meaning the Wall Street Crash of October 1929 that led into the Great Depression and that the text recalls through men in New York jumping from windows and roofs, and died before London was bombed and Europe torn apart in the Second World War. The history is compressed into a few lines and seen from outside. Lev’s English class taught him that the British revere their past because they have never been occupied. Yet his own thoughts include London in ruins, so one reading is that the belief that the English were simply lucky is Lev’s, built from what he has been told, and that the text lets the reader see its gaps.',
    },
    {
      heading: 'How the text is examined',
      body: 'In English Language A the text is set for Paper 2, Section A, which has one essay question on a poem or prose text from Part 2 of the anthology; the specification advises 45 minutes, and the text is printed in the extract booklet in the exam. Past questions ask how the writer presents something and list what to write about, ending with the use of language and structure. Pearson has already set a question on the character of Lev, with bullet points on his feelings about home and about the future: its examiners’ report for the November 2020 series discusses the answers. Students taking the coursework option instead write one assignment on three texts from Part 2, including at least one poem and one prose text, so this extract may also be written about alongside a poem.',
    },
  ],

  themes: [
    {
      title: 'Leaving home and belonging',
      body: 'The extract opens with Lev looking back, “staring out at the land he was leaving”, and closes with him calling that leaving “hard and bitter”. In between, his mind keeps returning to Auror. He plans to keep himself apart in England to show that “his heart remained in his own country”, and when darkness falls he thinks that the way it came to his village is how, in his heart, it will always fall. One reading is that Lev is not so much emigrating as enduring an exile: his body travels while his heart stays behind. The alternative is that the ending, with its insistence that his time is coming, points towards a new life in England. The first reading is the more convincing on the evidence of the extract, because even his hope is phrased as taking something from the English, making them share their luck, rather than becoming one of them. The novel’s title, The Road Home, keeps the question open.',
    },
    {
      title: 'Grief, memory and guilt',
      body: 'Lev is a widower, and Marina’s death shapes everything he sees. Grief arrives through the senses rather than by choice: trying to sleep upright recalls five nights on the hospital floor beside her bed, and the smell of Lydia’s hard-boiled egg carries him to the sulphur springs at Jor, where he took her in the hope that nature might cure her. Those nights left “strange pictures” in his mind that have never completely vanished, which suggests trauma as well as sadness. Most painful of all, he avoids his reflection in the coach window because it shows him “his own guilt at still being alive”. The survivor’s guilt is striking because nothing suggests Lev is to blame for her death. One reading is that the journey is partly a flight from the place where she died; the stronger reading is that the grief travels with him, since the very window he looks out of throws his guilty face back at him.',
    },
    {
      title: 'Hope and the dream of England',
      body: 'Lev tells Lydia simply “England is my hope.” The England he pictures is made of clichés: immigrants by a coal fire in a tall house, rain at the window, “red buses” going past, a television flickering in a corner. Almost all of it is second-hand. Someone told him vodka is too expensive there; his English class told him the British venerate their history. The hope is real and driven by need, because his daughter needs clothes, shoes, books and toys. But the reader is invited to suspect that the country will not match the picture, and a condition shadows it from the start: he expects to “break his back working”, “if” the work can be found at all. The ending, “my time is coming”, can be read as defiant strength or as a man talking himself into courage in the dark. The best answers hold both, and notice that the extract gives no evidence either way about what England will really be like.',
    },
    {
      title: 'Loneliness and connection',
      body: 'Lev means to be alone. He imagines the fifty hours beside a stranger as a kind of forced intimacy, “like a married couple”, and expects that in London they will part with barely a word, each beginning a new life alone. Yet the extract quietly contradicts his plan. He introduces himself, they shake hands, and after Lydia explains why she is leaving she looks very seriously into his eyes before he tells her he understands. She corrects his English patiently. The two are more alike than he expected: both are leaving a life at home that had stopped being enough, and her fear of dying while staring at the same view from her window mirrors his own staring from the coach. By night, though, she is absorbed in her book and he is awake and alone, keeping a vigil with one of the drivers. Connection, on this reading, is possible but brief, and Lev has not yet let himself accept it.',
    },
    {
      title: 'Cigarettes, comfort and craving',
      body: 'The title makes cigarettes significant, and the extract shows why. Lev carries “a dented pack of Russian cigarettes”, a habit from home, and even unlit a cigarette is “a companion”, something with promise in it. The first rule of the journey, no smoking, takes that comfort away, and he accepts it with a nod. By night the craving has become physical, felt in his lungs and blood, in fidgety hands and a tremor in his legs, and he aches for “the comfort of nicotine or oblivion” and gets neither. Smoking is also how he plans to stand apart in England, in corners and shadows. One reading is that the cigarettes are ironic: significant precisely because we never see one smoked, a comfort always put off until the next stop. Another is that the craving is displaced grief, a need for something to hold that he cannot name. Both help explain why the extract ends with him reaching, in desperation, for a banknote instead.',
    },
    {
      title: 'Work, poverty and migration',
      body: 'Lev is an economic migrant, and the extract is honest about why. The sawmill closed because, in his flat phrase, “They ran out of trees”; his skills belong to an industry that has used up its own resource. His mother’s tin jewellery keeps the family, and it is not enough. He expects to break his back working in England and says he will do any work at all. Tremain sets him beside Lydia, a professional with interviews already arranged, to show that migrants are not one type: she has language, he has labour. The journey itself hints at how migrants are treated, with the passengers “herded back onto the coach” like livestock at each stop, and Lev’s practice phrase “I am legal” shows the anxiety of someone expecting to be questioned. The extract treats migration not as adventure but as necessity: Lev thinks the whole arrangement strange, but unavoidable.',
    },
    {
      title: 'Luck, history and Britain',
      body: 'The final section turns Lev’s hope into a theory of Britain. His English class taught him that “The British venerate their history” because they have never been occupied, and that they only now and then see that some of their past deeds were not good. Studying the man on the banknote, he imagines a life lived safely under capitalism, never needing to fear Hitler or Stalin, ending before London was bombed. His conclusion is that “the English were lucky”, and he resolves to “make them share it with me: their infernal luck”. One reading is that this is envy and oversimplification: if the reader recognises the man as the composer Edward Elgar, he was no banker, and Lev’s own thoughts include London in ruins. Another, more generous reading is that Lev sees what insiders cannot, that British confidence about its past rests on having escaped the occupation that, the lesson implies, other countries suffered. The adjective “infernal” holds both, admiring and resentful at once.',
    },
  ],

  characters: [
    {
      name: 'Lev',
      role: 'The protagonist: a widower travelling to London to find work',
      body: 'Lev is forty-two, soon to be forty-three, from the village of Auror. He wears a leather jacket, jeans and a leather cap pulled low, his handsome face is grey-toned from smoking, and he clutches an old red handkerchief and “a dented pack of Russian cigarettes”. He worked at the Baryn sawmill until it closed two years ago. He has a five-year-old daughter, Maya, and a mother whose tin jewellery keeps the family. His wife Marina has died, and he carries guilt at having survived her. He is proud and wary, determined to keep himself apart, yet he is courteous and curious with Lydia, and his flat answers have a dry humour. His English is limited but he works at it. His defining quality in the extract is endurance: he puts up with the craving, the sleeplessness and the grief, and ends by turning them into resolve. The narration stays so close to him that the reader sees the world, including Lydia and England, largely through his eyes.',
    },
    {
      name: 'Lydia',
      role: 'The woman in the next seat, a former English teacher',
      body: 'Lydia is first seen through Lev’s eyes as a plump, contained woman with moles on her face, and she is the first to speak, to tell him that smoking is not allowed. She taught English at School 237 in Yarbl and is going to London for interviews for jobs as a translator. She is precise and orderly: she smooths a clean napkin on her knee, peels her egg in silence and corrects Lev’s English. Her claim, in careful textbook English, that her English is very colloquial is gently comic. But she is not merely prim. She left a good job because she began to imagine dying while looking at the same view from her window, a restlessness as deep as Lev’s, and she looks very seriously into his eyes before he tells her he understands. Her mishearing of his word for a cheap family hotel as Hamlet’s famous question about being shows the gap between classroom English and real need. She is a foil to Lev: also leaving, also hoping, but equipped with the language he lacks.',
    },
    {
      name: 'Marina',
      role: 'Lev’s wife, who has died',
      body: 'Marina is dead before the extract begins but present throughout it. Lev spent five nights on the floor beside her hospital bed while she was dying, and took her to the sulphur springs at Jor in the hope that nature might cure what human medicine could not. There she lay obediently in the water, watched a female stork return to its high nest and wished that they were storks, because you never see a stork dying. For many readers that remembered wish is the most moving line in the extract, and its repetition on a line of its own suggests it has become Lev’s thought as well as hers. The extract does not name her illness, and neither should an answer.',
    },
    {
      name: 'Maya',
      role: 'Lev’s five-year-old daughter',
      body: 'Maya never appears, but she is the reason for the journey. Lev remembers sleeping on a rag rug beside her bed when she was ill or afraid, a detail that shows his tenderness, and he tells Lydia that she needs clothes, shoes, books and toys, everything. She is named only at line 114, late in the extract, at the moment Lev says that England is his hope. Holding her name back until then makes it land with the weight of a motive.',
    },
    {
      name: 'Stefan',
      role: 'Lev’s father',
      body: 'Stefan appears in a single memory. He used to sleep upright on a hard wooden chair in his summer lunch breaks at the Baryn sawmill, with slices of sausage wrapped in paper on his knee and a flask of tea in the hot sun. The memory is warm and precisely observed, and it suggests that father and son worked at the same mill, so its closure has ended a way of life across generations. Stefan also gives the extract a small contrast: the old seem able to sleep upright, Lev notes, but forty-two is not yet old.',
    },
    {
      name: 'Lev’s mother',
      role: 'The family’s breadwinner since the sawmill closed',
      body: 'Lev’s mother is not named in the extract. Since the sawmill closed, the household of Lev, his mother and Maya has lived on the money she makes selling jewellery manufactured from tin. Lydia calls this resourceful, and Lev agrees but says it is not enough. The detail shows the ingenuity of people with little, and perhaps, for a proud man, the discomfort of depending on his mother. One reading is that his journey is an attempt to take that burden back from her.',
    },
  ],

  keyQuotes: [
    {
      text: 'staring out at the land he was leaving',
      where: 'Narration, line 2 (p. 38)',
      analysis:
        'The extract opens with a look backwards. The verb “staring” suggests fixed, almost numb attention rather than casual looking, and the progressive “was leaving” keeps the departure in motion, so the parting is drawn out rather than completed. A colon then opens a list of sunflowers, pig farms, quarries, rivers and wild garlic: a farewell inventory of home.',
    },
    {
      text: 'even an unlit cigarette was a companion',
      where: 'Narration close to Lev’s thoughts, line 14 (p. 38)',
      analysis:
        'A metaphor that reveals Lev’s loneliness before the reader knows its cause: an object he is not even allowed to use becomes a friend. The word “even” implies how much more a lit one would mean. The dashes that follow add that it is something to hold on to, something with promise in it, the first hint of why the anthology calls these cigarettes significant.',
    },
    {
      text: 'side by side with their separate aches and dreams, like a married couple',
      where: 'Narration close to Lev’s thoughts, lines 17-18 (p. 38)',
      analysis:
        'The simile is wry and sad. Two strangers are pushed into the intimacy of marriage, hearing each other’s snores and smelling each other’s food, yet their “separate aches and dreams” stay private. For a widower the comparison has a painful edge, because the extract later reveals the nights he spent on a hospital floor beside his dying wife. It also foreshadows a real, if limited, companionship with Lydia.',
    },
    {
      text: 'his heart remained in his own country',
      where: 'Narration close to Lev’s thoughts, line 27 (p. 38)',
      analysis:
        'Lev’s plan for England is to hold himself apart, smoking in corners and shadows, to demonstrate this. The verb “remained” suggests that only his body is travelling. It is loyal but also defensive: he has decided not to belong before he arrives, which makes the hopeful ending harder to take at face value.',
    },
    {
      text: 'herded back onto the coach',
      where: 'Narration, lines 33-34 (p. 38)',
      analysis:
        'The verb “herded” turns the passengers into livestock, driven back on board after a few paces on the verge, a stretch and a look at the wild flowers. The brief freedom of the roadside is set against the coach as a pen. One reading is that it previews how migrants may be handled in the new country: counted, moved and managed rather than welcomed.',
    },
    {
      text: 'painting strange pictures in Lev’s brain that had never completely vanished',
      where: 'Narration, lines 47-48 (p. 38)',
      analysis:
        'The five nights on the hospital floor are remembered through their effect on Lev’s mind. Sleep is given agency, coming and going and painting images he did not choose and cannot erase. The phrase “never completely vanished” suggests grief lodged as something close to trauma, still with him long afterwards on a coach far from the ward.',
    },
    {
      text: 'If only we were storks.',
      where: 'Marina, remembered by Lev, lines 53-54, repeated on its own at line 57 (p. 39)',
      analysis:
        'Marina’s wish, made as she lies in the sulphur water watching a female stork return to its high nest, is a longing to escape death: she explains that you never see a stork dying. Repeated as a one-line paragraph without speech marks, it seems to have become Lev’s own thought. Storks are migrating birds whose nests are typically used year after year, so the image also quietly fits a novel called The Road Home.',
    },
    {
      text: 'I became very tired of the view from my window.',
      where: 'Lydia, line 71 (p. 39)',
      analysis:
        'Lydia’s reason for leaving a good job sounds modest, almost comic, until she explains that she began to imagine dying while looking at the same school yard, high fence and apartment block. The understatement of “very tired” hides a real fear of a life that never changes. It mirrors Lev, who spends the extract staring through a window, and it earns his serious reply that he understands.',
    },
    {
      text: 'Lovely. Sorry. I am legal. How much please.',
      where: 'Lev, practising his English, line 82 (p. 39)',
      analysis:
        'Lev’s practice phrases are funny and revealing. Each fragment is a situation he expects to face: politeness, apology, proving his right to be there, and paying. “I am legal” stands out because it answers an accusation nobody has made yet. The short, disconnected sentences mimic phrase-book English and show how small his toolkit is for the world he is entering.',
    },
    {
      text: 'how, in Lev’s heart, darkness would always fall',
      where: 'Narration close to Lev’s thoughts, line 94 (p. 39)',
      analysis:
        'As night comes on, Lev thinks of how darkness always arrived in Auror in the same way, from the same direction, above the same trees, all his life. The modal “would always” makes home the permanent pattern for every future night, wherever he is. The commas around “in Lev’s heart” slow the sentence and place the feeling at its centre, as home sits at the centre of him.',
    },
    {
      text: 'his own guilt at still being alive',
      where: 'Narration, line 105 (p. 40)',
      analysis:
        'Since Marina’s death Lev avoids his reflection, because this is what he always sees in it. The word “still” makes survival sound like something he has failed to stop doing. It is survivor’s guilt, irrational and powerful, and it is revealed in the very coach window through which he has been watching his old life disappear.',
    },
    {
      text: 'They ran out of trees',
      where: 'Lev, line 107 (p. 40)',
      analysis:
        'Lev answers Lydia’s question about why the Baryn sawmill closed in five blunt words. The understatement is darkly comic, and her reply, very bad, is just as flat. Beneath the humour is a bleak picture of a local economy that used up its own resource, leaving men like Lev with skills nobody needs. One student quoted in Pearson’s examiners’ report read the line as a sign that even nature had given up on Lev.',
    },
    {
      text: 'England is my hope.',
      where: 'Lev, lines 114-115 (p. 40)',
      analysis:
        'One of the plainest sentences Lev speaks, placed straight after a list of everything his daughter Maya needs. Its simplicity makes it moving, but it can also sound desperate, as if England were the only hope left. It comes just after Lev’s cosy picture of immigrants by a coal fire, so the reader may wonder how much of the hope is built on imagination.',
    },
    {
      text: 'aching for the comfort of nicotine or oblivion',
      where: 'Narration, line 126 (p. 40)',
      analysis:
        'The craving reaches its peak. Pairing “nicotine” with “oblivion” shows what the cigarette really stands for: not pleasure but escape, a way to stop feeling. After a dash the sentence ends on his getting neither, a flat and final denial. By the next stop, Lev expects, he and one of the drivers will be the only two awake, keeping a lonely vigil, one alert to the road, one aching.',
    },
    {
      text: 'The British venerate their history',
      where: 'Lev’s English class, remembered, line 134 (p. 40)',
      analysis:
        'A remembered lesson in the formal register of a textbook, claiming that the British revere their past chiefly because they have never been occupied, and only now and then see that some past deeds were not good. It is an outsider’s generalisation, and it shows where Lev’s picture of Britain comes from: not experience, but things he has been told.',
    },
    {
      text: 'make them share it with me: their infernal luck',
      where: 'Lev’s thoughts in the first person, lines 148-149 (p. 41)',
      analysis:
        'The narration drops into Lev’s own voice. The colon delays naming what “it” is, so “luck” lands at the end with force. The adjective “infernal” means hellish and is used almost as a curse, which makes the tone grudging and envious as well as determined. He does not plan to become English, only to take a share of what the English have.',
    },
    {
      text: 'but my time is coming',
      where: 'Lev’s thoughts, the final words, lines 149-150 (p. 41)',
      analysis:
        'The extract ends on a statement of faith in the future, straight after Lev admits that the leaving was hard and bitter. The conjunction “but” turns grief into resolve. The present progressive “is coming” is confident yet unfinished: the time has not arrived. Whether this is strength or self-persuasion in the dark is the central question of the ending.',
    },
  ],

  extracts: [
    {
      title: 'The unlit cigarette',
      where: 'Lines 9-27 (p. 38)',
      pointer:
        'Lines 9-27: from the sunrise, when Lev puts an unlit cigarette between his lips, to the end of that paragraph, where he imagines keeping apart from people in England.',
      summary:
        'As the sun rises Lev puts an unlit cigarette between his lips, and the woman beside him tells him quickly that smoking is not allowed. He already knew, and only nods. His thoughts then run ahead: fifty hours or more side by side with this stranger, hearing and smelling each other, before parting in London with barely a word. He decides that in England he will work hard if work can be found, keep apart from people and smoke alone, to show where his heart belongs.',
      annotations: [
        {
          phrase: 'moles like splashes of mud',
          note: 'An earthy, unflattering simile that shows the woman first through Lev’s tired, unsentimental eyes, as a stranger to be put up with rather than a person.',
        },
        {
          phrase: 'the long agony of it',
          note: 'Hyperbole with a comic edge: a coach journey without cigarettes described as agony. It also begins a vocabulary of pain, aches and aching that runs through the extract.',
        },
        {
          phrase: 'even an unlit cigarette was a companion',
          note: 'The metaphor reveals loneliness before we know its cause. An object he cannot even use is company, which prepares the reader for the grief that later explains it.',
        },
        {
          phrase: 'like a married couple',
          note: 'The simile makes forced closeness sound like marriage, which is poignant for a widower and hints that this stranger will matter more than he expects.',
        },
        {
          phrase: 'his heart remained in his own country',
          note: 'The paragraph ends on Lev’s defensive plan to belong nowhere new. Placed at the close of a sentence that stacks up what he would do, it sounds like a vow.',
        },
      ],
      question:
        'How does the writer present Lev’s feelings at the start of his journey in lines 9-27? You should write about what he does and thinks on the coach, what he expects of England, and the use of language and structure.',
    },
    {
      title: 'Marina and the storks',
      where: 'Lines 38-57 (pp. 38-39)',
      pointer:
        'Lines 38-57: from the paragraph about sleeping upright to the one-line paragraph at line 57 that repeats Marina’s wish.',
      summary:
        'Unable to sleep sitting up, Lev remembers the places he has slept: his father dozing on a chair at the sawmill, himself on a rug beside his daughter’s bed, and five nights on a hospital floor while his wife Marina was dying. Towards evening the smell of the woman’s hard-boiled egg recalls the sulphur springs at Jor, where Marina, lying in the water and watching a stork return to its nest, wished they were storks.',
      annotations: [
        {
          phrase: 'no wider than his outstretched arm',
          note: 'The measurement is precise and physical, as if Lev’s body still remembers the narrow strip of floor, and it shows how completely he gave himself to staying beside her.',
        },
        {
          phrase: 'painting strange pictures in Lev’s brain',
          note: 'Sleep becomes a painter working without his consent, which suggests the lasting, involuntary images of trauma rather than memories he can choose to revisit.',
        },
        {
          phrase: 'you never see a stork dying',
          note: 'Marina’s reasoning is childlike and heartbreaking: she wants to be a creature that seems exempt from death, while lying in water that Lev hoped might cure her.',
        },
        {
          phrase: 'If only we were storks.',
          note: 'Set alone on line 57, without speech marks, the wish seems to pass from Marina’s voice into Lev’s mind, and the white space around it gives it the weight of grief.',
        },
      ],
      question:
        'How does the writer use Lev’s memories in lines 38-57 to present his grief? You should write about what he remembers, what brings the memories back, and the use of language and structure.',
    },
    {
      title: 'The twenty-pound note',
      where: 'Lines 128-150 (pp. 40-41)',
      pointer:
        'Lines 128-150: from Lev envying Lydia her English book to the final words of the extract.',
      summary:
        'Craving a cigarette and unable to sleep, Lev switches on his reading light and studies a brand new British twenty-pound note: the Queen on one side, and on the other a moustached man beneath an angel blowing a trumpet. He remembers his English class’s lesson about the British and their history, imagines the man living a safe and lucky life, spared, as Lev pictures it, the terrors of the twentieth century, and resolves that he will make the English share their luck.',
      annotations: [
        {
          phrase: 'the frumpy Queen',
          note: 'The irreverent adjective shows Lev looking at British symbols without awe. The monarch on the banknote is just a dowdy figure to a man who needs the money, not the majesty.',
        },
        {
          phrase: 'all the angel’s radiance falling on him',
          note: 'Religious imagery of blessing: light falls on the man as if luck were a gift from heaven. Lev reads the design literally, as a picture of English good fortune.',
        },
        {
          phrase: 'He looked like a banker',
          note: 'Lev’s guess projects his idea of England as a country of money. The dates on the note fit the composer Edward Elgar, so a reader who knows this may see dramatic irony.',
        },
        {
          phrase: 'their infernal luck',
          note: 'The adjective means hellish, almost a curse, so the tone mixes envy and resentment with admiration. Luck is something to be claimed from the English, not earned.',
        },
        {
          phrase: 'but my time is coming',
          note: 'The shift into Lev’s own first-person voice and the turn on but make the ending a declaration. It is hopeful, but the time is still only coming.',
        },
      ],
      question:
        'How does the writer present Lev’s hopes for his new life in lines 128-150? You should write about what Lev sees on the note, what he believes about the English, and the use of language and structure.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Listing and repetition',
      example:
        'The first sentence (lines 1-4) is built on a list introduced by a repeated at: sunflower fields “scorched” by the dry wind, pig farms, quarries and rivers, wild garlic at the edge of the road.',
      effect:
        'The list slows the reader to the pace of the view sliding past the window, so the opening feels like a long look back. It mixes beauty with ordinary working landscape, which suggests Lev loves his country as it really is. Later lists work differently: Maya needs clothes, shoes, books, toys, everything, and the list grows until it overwhelms.',
    },
    {
      technique: 'Metaphor and personification',
      example:
        'At line 14 an unlit cigarette “was a companion”; at line 47 sleep is pictured “painting strange pictures” in Lev’s brain.',
      effect:
        'Things are given human roles. A cigarette becomes a friend, and sleep becomes a painter working without Lev’s consent, so both his comfort and his grief seem to act on him rather than be chosen. The first is how the anthology’s title works: the cigarette signifies the loneliness and need for comfort that Lev will not put into words, and when he later aches for nicotine or oblivion (line 126), the pairing shows that what he wants from it is escape.',
    },
    {
      technique: 'Simile',
      example:
        'The woman’s face has “moles like splashes of mud” (lines 10-11); the two passengers will sit “like a married couple” (line 18).',
      effect:
        'The similes are homely and down to earth, drawn from mud and marriage rather than poetry, which fits Lev’s plain, practical mind. The first keeps Lydia at a distance; the second draws her close. Together they trace the movement of the whole extract, from stranger to companion.',
    },
    {
      technique: 'Modal verbs and the future seen from the past',
      example:
        'Lines 17-37 are built almost entirely on would: Lev and his neighbour would hear each other’s snores, the only stops the bus would make would be for fuel, and there would be times when the journey would seem to have no end.',
      effect:
        'The chain of would clauses shows Lev imagining the journey before it has happened, which makes him seem braced and resigned. It also turns single events into routine, so the reader feels the monotony of fifty hours without living through them.',
    },
    {
      technique: 'Verb choice and animal imagery',
      example: 'At each fuel stop the passengers are “herded back onto the coach” (lines 33-34).',
      effect:
        'The verb makes people into livestock and the coach into a pen. Set against the small freedoms of the verge, stretching and looking for a clover leaf, it suggests that migration strips people of control over their own movement.',
    },
    {
      technique: 'Symbolism',
      example:
        'Marina watches a female stork return to its high nest and wishes “If only we were storks.” (lines 53-54, repeated at line 57).',
      effect:
        'The stork symbolises a life that seems to escape death, which is what the dying Marina longs for. Storks are also migrating birds that return to a nest used year after year, so the symbol links grief with journeying and return, apt for a novel called The Road Home.',
    },
    {
      technique: 'Dialogue and fractured English',
      example:
        'Lev’s practice phrases at line 82, and at lines 86-89 his “Bee-and-bee”, which Lydia first takes for Hamlet’s famous question about being before she recognises a B & B.',
      effect:
        'The broken, phrase-book sentences are comic, but they also reveal what Lev fears: being lost, needing an interpreter, having to prove he is legal. The Hamlet mix-up is gently funny, and one reading finds it quietly apt, since that speech weighs whether to go on living and Lev feels guilty at still being alive. Humour lightens a grief-heavy extract and makes both characters more human.',
    },
    {
      technique: 'Understatement and bathos',
      example:
        'Asked why the sawmill closed, Lev says “They ran out of trees” (line 107); Lydia replies that it is very bad.',
      effect:
        'The flatness is darkly funny, a whole economic collapse in five words. The understatement suggests a man too tired, or too proud, to make a drama of his troubles, and the reader feels their weight all the more for the plainness.',
    },
    {
      technique: 'Sentence length and pace',
      example:
        'The sentence beginning at line 14 runs on through dashes, commas and a semicolon to line 18, while in the conversation many replies are a few words long: that sounds promising, sure, very bad.',
      effect:
        'The long, accumulating sentences of the opening imitate Lev’s thoughts running ahead over fifty hours, so the reader feels both his weariness and his restlessness. The clipped replies in the middle speed the pace and show two strangers feeling their way, each saying no more than they have to.',
    },
    {
      technique: 'Colour imagery',
      example:
        'Red recurs in Lev’s handkerchief (lines 6 and 102), the coach blankets (line 116) and the “red buses” of the England he imagines (line 112); grey marks his face (line 6), his hair (line 75) and the Queen’s face on the note (line 131).',
      effect:
        'One reading is that red carries warmth and life through the extract, linking the small comforts of the journey to the England he dreams of, while grey marks age, smoke and weariness. It is striking that Lev and the Queen on the banknote share the same grey: the symbol of the lucky country looks as tired as he does.',
    },
    {
      technique: 'Free indirect style and a final shift of voice',
      example:
        'The narration is third person but close to Lev throughout, and at lines 147-150 it moves into his own first-person thought, introduced by “Well, thought Lev”.',
      effect:
        'For most of the extract we see through Lev without hearing him directly, which creates intimacy and restraint. The switch to I at the very end lets his resolve speak in his own voice, making the final lines feel like a vow made to himself.',
    },
  ],

  structureForm: [
    {
      heading: 'An opening that withholds',
      body: 'Because this is the opening of a novel, it begins with Lev already on the coach and releases information slowly. We learn his age at lines 7-8, that his wife has died only at line 44, the full reason for leaving at lines 95-98, and his daughter’s name only at line 114. Each delay makes the reader piece Lev together, as Lydia does, and it means that early details, such as the lonely comfort of an unlit cigarette, are explained backwards by what comes later. When you write about structure, track what the reader knows and when.',
    },
    {
      heading: 'One day, from sunrise to night',
      body: 'The extract follows a single day through clear time markers: the sun comes up at line 9, the egg is peeled towards evening at line 49, darkness falls at line 90, blankets are handed out towards ten o’clock at line 116, and the extract ends late at night under a reading light. The fading light mirrors the deepening of Lev’s grief and craving. One reading is that the structure takes Lev through his darkest hours so that the final lines can turn, in the dark, towards a future. The journey itself is not finished: the extract ends mid-route, with London still ahead.',
    },
    {
      heading: 'Three times at once',
      body: 'The coach moves forward, but Lev’s mind moves in every direction. Flashbacks take him to the sawmill and the hospital (lines 38-48), the springs at Jor (lines 50-57) and the nights of Auror (lines 90-94). Imagined scenes take him to the arrival in London (lines 21-27), the immigrants by their coal fire (lines 109-113) and the life of the man on the note (lines 140-147). This interweaving shows a man physically travelling forward while emotionally facing back, and it lets a story in which almost nothing happens cover a whole life. Pearson’s examiners noted flashbacks and this intertwining of time frames among the features that stronger answers explored.',
    },
    {
      heading: 'Solitude, conversation, solitude',
      body: 'Nearly all the dialogue sits in the middle of the extract, from Lev’s introduction at line 60 to his plea at lines 113-115 that he will do any work at all. Before it are long passages of Lev alone with his thoughts; after it, from line 116, he is alone again as the coach sleeps. The shape mirrors his experience: isolation, a brief and surprising connection, and a return to being alone. The short speeches in the middle section also speed up the pace after the long, slow sentences of the opening.',
    },
    {
      heading: 'One-line paragraphs for weight',
      body: 'Tremain isolates a few lines to make them land. Marina’s wish is repeated as a paragraph on its own at line 57, outside speech marks, which no convention of dialogue required. Lev’s answer about the sawmill, at line 107, is a line of dialogue and so stands alone by convention, but its brevity makes the white space around it part of the joke. The first is given silence, like a thought that stops everything; the second is left bare, so its flatness becomes the point.',
    },
    {
      heading: 'A framed ending that stays open',
      body: 'The extract begins with Lev watching the land he is leaving and ends with him naming what he has left, Auror, and calling the leaving hard and bitter, so the opening and close frame each other. But the frame is not closed. The final words look forward to a time that is only coming, not arrived, and because this is a novel’s opening the reader is left in suspense. The cigarettes frame the extract too: unlit at sunrise, craved at night, and never once shown alight. The need is never met, and the banknote takes its place as the thing Lev holds on to.',
    },
  ],

  vocabulary: [
    {
      term: 'huddled (line 1)',
      definition: 'Pressed close into a small space, often for warmth, protection or comfort.',
    },
    {
      term: 'contained (line 10)',
      definition: 'Self-controlled and reserved; keeping feelings and behaviour in check.',
    },
    {
      term: 'forays (line 20)',
      definition:
        'Short, tentative attempts at something unfamiliar. Originally a sudden raid into enemy territory.',
    },
    {
      term: 'clamber (line 30)',
      definition:
        'To climb or move awkwardly, using hands and feet, as stiff passengers do getting off a coach.',
    },
    {
      term: 'verge (line 31)',
      definition: 'The strip of grass or ground along the edge of a road.',
    },
    {
      term: 'linoleum (line 45)',
      definition: 'A hard, smooth, washable floor covering, common in hospitals and kitchens.',
    },
    { term: 'mystifying (line 47)', definition: 'Puzzling and hard to understand or explain.' },
    {
      term: 'sulphur springs (lines 50-51)',
      definition:
        'Natural springs whose mineral water smells of sulphur, like bad eggs. People have long bathed in them in the hope of healing.',
    },
    {
      term: 'immersed (lines 52 and 128)',
      definition:
        'Fully covered in liquid; figuratively, completely absorbed in something, as Lydia is in her book.',
    },
    { term: 'scummy (line 52)', definition: 'Covered with a dirty film or froth on the surface.' },
    {
      term: 'colloquial (line 67)',
      definition:
        'Informal and conversational, the English of everyday speech rather than the textbook. Lydia’s careful, formal English makes her claim gently comic.',
    },
    {
      term: 'B & B (line 89)',
      definition:
        'Bed and breakfast: a small, usually family-run guest house offering a room and breakfast.',
    },
    {
      term: 'resourceful (line 99)',
      definition: 'Good at finding clever ways to manage with limited means.',
    },
    { term: 'industrious (line 111)', definition: 'Hard-working and diligent.' },
    {
      term: 'remnants (line 117)',
      definition: 'The small parts left over, as with what remains of Lydia’s meal.',
    },
    {
      term: 'acute (line 121)',
      definition: 'Severe and intense, used of a feeling or pain that has become sharp.',
    },
    { term: 'yearning (line 121)', definition: 'An intense longing for something.' },
    {
      term: 'vigil (line 125)',
      definition:
        'A period of staying awake through the night to keep watch, often with a sense of duty or prayer.',
    },
    {
      term: 'oblivion (line 126)',
      definition:
        'The state of being unaware of what is happening; forgetting everything, as in sleep or unconsciousness.',
    },
    { term: 'frumpy (line 131)', definition: 'Dowdy and old-fashioned in appearance.' },
    {
      term: 'E II R (line 131)',
      definition:
        'The royal cypher of Queen Elizabeth II: Elizabeth II Regina, Regina being Latin for queen.',
    },
    {
      term: 'diadem (line 131)',
      definition: 'A jewelled crown or band worn on the head as a sign of royalty.',
    },
    { term: 'personage (line 132)', definition: 'An important or distinguished person.' },
    {
      term: 'venerate (line 134)',
      definition: 'To regard with deep respect, close to reverence or worship.',
    },
    {
      term: 'Occupation (line 135)',
      definition:
        'The control of a country by a foreign army. The capital letter makes it sound like a specific historical experience.',
    },
    { term: 'intermittently (line 136)', definition: 'From time to time, not continuously.' },
    {
      term: 'Capitalism (line 141)',
      definition:
        'An economic system in which businesses are privately owned and run for profit. The capital letter may suggest a system Lev has been taught about rather than one he grew up inside.',
    },
    { term: 'fusty (line 146)', definition: 'Stale-smelling, or old-fashioned and out of date.' },
    {
      term: 'infernal (line 149)',
      definition:
        'Literally, of hell; in everyday use, annoying or dreadful, said with irritation.',
    },
    {
      term: 'free indirect style',
      definition:
        'Third-person narration that takes on a character’s thoughts and way of speaking without quotation marks, as the narration here takes on Lev’s.',
    },
    {
      term: 'flashback',
      definition:
        'A scene from earlier in a character’s life placed inside the present narrative, as with the hospital and the springs at Jor.',
    },
    {
      term: 'bathos',
      definition:
        'A sudden drop from the serious to the ordinary or comic, as in Lev’s answer about the sawmill.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does the writer present the character of Lev in Significant Cigarettes? You should write about: what Lev thinks and feels about the home he is leaving; what he thinks and feels about his future in England; the use of language and structure. Support your answer with close reference to the extract, including brief quotations.',
        skill:
          'Language and structure analysis of character across the whole extract. A question on Lev’s character, with bullet points on home and the future, has already appeared on Paper 2.',
        guidance: [
          'Open with an overview that answers the question: Lev leaves out of necessity, not choice, and his heart stays behind even as his hopes run ahead.',
          'Home: analyse the opening look back at the land he is leaving and the list of landscape that follows as a farewell inventory.',
          'Home: explore his plan to keep apart in England, and what his heart remaining in his own country says about belonging.',
          'Home and grief together: the darkness over Auror at lines 90-94, the reflection in the window and the guilt at being alive.',
          'The future: the need behind it (the closed sawmill, the tin jewellery, Maya), then England is my hope and the second-hand picture of England before it.',
          'The future: the banknote, the theory of English luck, and the shift into first person for the final words.',
          'Structure throughout: the movement between present, past and imagined future, and the contrast with Lydia, who is leaving too but with the language he lacks.',
          'End with a judgement: is the final line defiant, naive, or both?',
        ],
      },
      {
        question:
          'How does the writer present the relationship between Lev and Lydia? You should write about: how they first see and speak to each other; how they are alike and how they differ; the use of language and structure. Support your answer with close reference to the extract, including brief quotations.',
        skill: 'Language and structure analysis of character and relationship',
        guidance: [
          'Begin with first impressions: the woman seen through Lev’s eyes, the mud simile, and her first words enforcing a rule.',
          'Analyse the married-couple simile and what it predicts about forced closeness between strangers.',
          'Examine the turning point: names, a handshake, her very serious look and his reply that he understands.',
          'Explore the English lesson as comedy and connection: the corrections, the repetitions and the Hamlet misunderstanding.',
          'Show how Tremain uses Lydia as a foil: both leaving, both hoping, both tired of a view, but she has interviews and fluent English and he has labour and a phrase book.',
          'Consider structure: the dialogue clusters in the middle, and by night she is absorbed in her book while he is alone again.',
        ],
      },
      {
        question:
          'How does the writer present grief and memory in Significant Cigarettes? You should write about: what Lev remembers; what brings the memories back to him; the use of language and structure. Support your answer with close reference to the extract, including brief quotations.',
        skill: 'Language and structure analysis of theme',
        guidance: [
          'Explain how memories are triggered by the senses and by small problems: sleeping upright, the smell of an egg, nightfall.',
          'Analyse the hospital memory: the precise measurement of the floor, the daisy curtain, and the strange pictures that never vanished.',
          'Explore the storks: Marina’s wish, her reasoning, and the repetition at line 57 as a line of its own.',
          'Examine the reflection in the window and the word still in his guilt at being alive.',
          'Consider structure: how the flashbacks interrupt the journey, and how late the reader learns of Marina’s death.',
          'Offer an interpretation: is the journey a flight from grief, or proof that grief travels with him?',
        ],
      },
      {
        question:
          'How does the writer present Lev’s hopes and fears about his new life in England? You should write about: what Lev imagines England will be like; what he needs and what he fears; the use of language and structure. Support your answer with close reference to the extract, including brief quotations.',
        skill: 'Language and structure analysis, with a focus on the ending',
        guidance: [
          'Set up the need: the closed sawmill, the tin jewellery that is not enough, and the list of Maya’s needs.',
          'Analyse England is my hope as one of the plainest things Lev says, and the cosy, second-hand picture of immigrants that comes before it.',
          'Show the fears inside the hope: I am legal among his practice phrases, breaking his back, work that may not be found, being lost and needing an interpreter.',
          'Explore the banknote: the frumpy Queen, the angel’s radiance, the guess that the man was a banker, the belief in English luck.',
          'Analyse the final shift into first person and the words infernal and coming.',
          'Reach a judgement about the ending: defiance, naivety, or both.',
        ],
      },
      {
        question:
          'Coursework option: discuss how the writers use language and structure to present people imagining a different life in Significant Cigarettes, The Story of an Hour and An Unknown Girl.',
        skill:
          'Non-examined assessment: one assignment on three anthology texts, including at least one poem and one prose text',
        guidance: [
          'Define the focus in your introduction: each central figure looks out at a world and imagines a life other than the one they have.',
          'Significant Cigarettes: a life imagined out of need, built from second-hand pictures of England and shadowed by grief and guilt.',
          'The Story of an Hour: Mrs Mallard at her open window after news of her husband’s death, imagining years that will belong to her alone.',
          'An Unknown Girl: the speaker in an evening bazaar in India, holding on to a culture she can touch only briefly, knowing the henna will fade.',
          'Compare the language each writer uses for the imagined life: Lev’s clichés, Chopin’s imagery of spring and open sky, Alvi’s bright details that will not last.',
          'Compare structure: Tremain’s single day ending in an open resolve, Chopin’s hour ending in a sudden reversal, Alvi’s short lines and closing image of longing.',
          'Conclude on which imagined life seems most fragile, and why, moving between the texts in each paragraph where you can.',
        ],
      },
    ],
    tips: [
      'In the exam the text is printed in the extract booklet, so you do not need to memorise quotations. Pearson’s examiners advise using the time to remind yourself of the text rather than rereading it, which only works if you know it well before you go in.',
      'Cover the whole extract, from the coach at sunrise to the banknote at night. Pearson’s examiners noted that the weakest answers on Lev often did not get past the opening and the smoking, while stronger answers used the full extract.',
      'Keep quotations short and embedded in your sentences. The examiners’ report on this text observed that long quotations slowed students down on the way to their analysis.',
      'Name a technique only to explain it. Stronger answers, the examiners noted, explored the tone, the flashbacks, the descriptions of home, the parallel with Lydia and the significance of the few English words Lev can say, rather than listing devices.',
      'Use Lydia as a contrast and take the ending seriously: the examiners singled out Lev’s almost defiant attitude in the final lines as a point that higher-level answers made.',
      'Do not name Lev’s country. Tremain deliberately leaves it unnamed, and a guess presented as fact will not help you. Say what the details suggest instead.',
      'Write about the extract, not the rest of the novel. Knowing where Lev goes later can help your understanding, but the question is about these 150 lines.',
      'The title is the anthology’s framing: the phrase does not appear in the text. Remember that the extract never shows Lev smoking: the one cigarette we see stays unlit, and by night the next chance is hours away at the next gas stop. The comfort is always put off, and that is a precise, arguable point about both character and structure.',
      'The humour matters. Notice the comedy of the English lesson and the flatness of the sawmill answer, and explain how humour makes the grief bearable for Lev and for the reader.',
      'If you bring in the identity of the man on the banknote, make clear that it is your knowledge, not the text’s: Tremain never names him, and Lev cannot read his name.',
    ],
  },

  modelAnswer: {
    question:
      'How does the writer present the character of Lev in Significant Cigarettes? (One paragraph, on the first bullet point: what Lev thinks and feels about the home he is leaving.)',
    paragraph:
      'Tremain presents Lev as a man who cannot stop looking at the home he is losing. The extract opens with him “staring out at the land he was leaving”, and the two -ing forms keep both actions in progress at once, so the parting is drawn out rather than completed. The list that follows, from sunflower fields to pig farms to wild garlic, reads like a farewell inventory, and because it mixes beauty with ordinary working land it suggests that Lev loves his country as it really is, not as a postcard. His plan for England sharpens this: he will keep apart from people to show that “his heart remained in his own country”. The noun “heart” makes loyalty physical, and the verb “remained” implies that only his body is travelling. Tremain reinforces the idea structurally when night falls at line 90, because Lev’s mind turns straight back to Auror, and the phrase “how, in Lev’s heart, darkness would always fall” uses the modal “would always” to make his village the pattern for every future night, wherever he is. The effect is of a man moving forward in space while facing backwards in feeling, which is why the final claim that “my time is coming” reads less like confidence than like a promise he is making to himself in the dark.',
    commentary: [
      'It opens with a clear, arguable point about Lev rather than a description of the opening, so every quotation that follows is evidence for a claim.',
      'It analyses individual word classes precisely, the -ing forms, the noun heart, the verb remained and the modal would always, and says what each one does, not just what it means.',
      'It uses a line reference to link language with structure, showing how the return to Auror at nightfall repeats the pull of home in a new form.',
      'Quotations are short and embedded in the sentences, which keeps the focus on analysis, as Pearson’s examiners advise for this text.',
      'It ends by connecting the opening to the ending and offering an interpretation of the final line, a judgement a reader could disagree with, which is what separates a strong answer from a competent one.',
    ],
  },

  timeline: [
    {
      where: 'Lines 1-8 (p. 38)',
      title: 'Leaving the land',
      summary:
        'Lev sits near the back of the coach, huddled against the window, watching the countryside of his home slide past: sunflower fields, pig farms, quarries, rivers and wild garlic. We learn what he wears and that he will soon be forty-three.',
      setting: 'A coach bound for London, early in the journey',
      who: ['Lev'],
      quote: 'staring out at the land he was leaving',
      themes: ['Leaving home and belonging'],
      tension: 2,
      significance:
        'The first image is a look back, setting up the pull between the home Lev loses and the future he travels towards.',
    },
    {
      where: 'Lines 9-27 (p. 38)',
      title: 'The unlit cigarette',
      summary:
        'As the sun rises Lev puts an unlit cigarette between his lips, and the woman beside him says smoking is not allowed. He nods, and imagines the fifty hours or more they will spend side by side before parting in London.',
      setting: 'On the coach, at sunrise',
      who: ['Lev', 'Lydia'],
      quote: 'even an unlit cigarette was a companion',
      themes: ['Cigarettes, comfort and craving', 'Loneliness and connection'],
      tension: 3,
      significance:
        'The title’s cigarettes first appear as a comfort Lev is denied, and he states his resolve to keep apart from people.',
    },
    {
      where: 'Lines 28-37 (p. 38)',
      title: 'The rhythm of the road',
      summary:
        'The narration sets out the routine of the journey: two drivers taking turns, stops only for fuel, passengers stretching at the roadside before being herded back on board. At times the journey will seem to have no end.',
      setting: 'Fuel stops and roadside verges along the route',
      who: ['Lev'],
      quote: 'herded back onto the coach',
      themes: ['Work, poverty and migration'],
      tension: 2,
      significance:
        'The passengers are handled almost like livestock, one hint of how migrants may be treated in the new country.',
    },
    {
      where: 'Lines 38-48 (p. 38)',
      title: 'Sleeping upright',
      summary:
        'Unable to sleep sitting up, Lev remembers where he has slept before: his father dozing on a chair at the sawmill, nights on a rug beside his sick or frightened daughter, and five nights on a hospital floor while Marina was dying.',
      setting: 'Lev’s memories: the sawmill, his daughter’s bedside, a hospital ward',
      who: ['Lev', 'Stefan', 'Maya', 'Marina'],
      quote: 'painting strange pictures in Lev’s brain that had never completely vanished',
      themes: ['Grief, memory and guilt'],
      tension: 4,
      significance:
        'A small practical problem opens the first flashback and reveals, almost in passing, that Lev is a widower.',
    },
    {
      where: 'Lines 49-57 (pp. 38-39)',
      title: 'The egg and the storks',
      summary:
        'Towards evening the woman peels a hard-boiled egg, and its smell takes Lev back to the sulphur springs at Jor, where he took Marina hoping for a cure. Watching a stork return to its nest, she wished they were storks, because storks never seem to die.',
      setting: 'The coach at evening; in memory, the sulphur springs at Jor',
      who: ['Lev', 'Lydia', 'Marina'],
      quote: 'If only we were storks.',
      themes: ['Grief, memory and guilt'],
      tension: 4,
      significance:
        'Marina’s wish, repeated on a line of its own, is the emotional centre of the extract.',
    },
    {
      where: 'Lines 58-89 (p. 39)',
      title: 'Names and an English lesson',
      summary:
        'Lev and the woman introduce themselves. She is Lydia, who taught English at a school in Yarbl and is travelling to interviews for jobs as a translator; she left because she grew tired of the view from her window. She then helps Lev practise his English, correcting his phrases and puzzling over his word for a cheap family hotel.',
      setting: 'The coach, towards nightfall',
      who: ['Lev', 'Lydia'],
      quote: 'I became very tired of the view from my window.',
      themes: ['Loneliness and connection', 'Hope and the dream of England'],
      tension: 2,
      significance:
        'The first real conversation turns strangers into companions and brings warmth and gentle comedy into a heavy extract.',
    },
    {
      where: 'Lines 90-108 (pp. 39-40)',
      title: 'Darkness over Auror',
      summary:
        'As darkness falls Lev thinks of how night always came to his village. He tells Lydia the sawmill closed two years ago and his family has lived on his mother’s tin jewellery. He drinks vodka and avoids his reflection, which shows him his guilt at being alive.',
      setting: 'The coach after dark; in memory, the village of Auror',
      who: ['Lev', 'Lydia', 'Lev’s mother', 'Marina'],
      quote: 'his own guilt at still being alive',
      themes: [
        'Grief, memory and guilt',
        'Work, poverty and migration',
        'Leaving home and belonging',
      ],
      tension: 4,
      significance:
        'The two reasons for the journey, poverty and grief, are finally spelled out, side by side.',
    },
    {
      where: 'Lines 109-115 (p. 40)',
      title: 'England is my hope',
      summary:
        'Lev has been told that immigrants in England make their own alcohol, and pictures them sitting by a coal fire in a tall house, with rain, red buses and a flickering television. He tells Lydia he will do any work at all, because his daughter Maya needs everything.',
      setting: 'The coach at night; in Lev’s imagination, a house in England',
      who: ['Lev', 'Lydia', 'Maya'],
      quote: 'England is my hope.',
      themes: ['Hope and the dream of England', 'Work, poverty and migration'],
      tension: 3,
      significance:
        'Lev’s picture of England is a cosy postcard, and the reader may suspect the real country will not match it.',
    },
    {
      where: 'Lines 116-127 (p. 40)',
      title: 'The night vigil',
      summary:
        'Towards ten o’clock blankets are handed out and Lydia reads an English paperback, The Power and the Glory, under her light. Lev’s craving for a cigarette becomes acute, and he faces hours awake with only one of the drivers, and no comfort.',
      setting: 'The dark coach at night, most passengers asleep',
      who: ['Lev', 'Lydia'],
      quote: 'aching for the comfort of nicotine or oblivion',
      themes: ['Cigarettes, comfort and craving', 'Loneliness and connection'],
      tension: 4,
      significance: 'The craving reaches its peak, the physical crisis of the extract.',
    },
    {
      where: 'Lines 128-150 (pp. 40-41)',
      title: 'The twenty-pound note',
      summary:
        'To distract himself Lev studies a brand new British twenty-pound note: the Queen on one side, and on the other a moustached man beneath an angel blowing a trumpet. Unable to read the name, he imagines a safe, lucky life that ended before London was bombed, and resolves to make the English share their luck.',
      setting: 'Under Lev’s reading light, late at night',
      who: ['Lev'],
      quote: 'but my time is coming',
      themes: ['Luck, history and Britain', 'Hope and the dream of England'],
      tension: 4,
      significance:
        'The extract ends not in arrival but in resolve, as grief and craving are turned into determination.',
    },
  ],

  relationships: [
    {
      from: 'Lev',
      to: 'Lydia',
      kind: 'strangers and travelling companions',
      note: 'Thrown together for fifty hours, they move from a rule about smoking to names, a handshake and an English lesson. Lev compares them to a married couple before they have even exchanged names. He means to keep apart, but her serious look and her help with his English suggest the start of something like friendship.',
    },
    {
      from: 'Lev',
      to: 'Marina',
      kind: 'husband and wife; Lev is widowed',
      note: 'Marina is dead before the extract begins but present in Lev’s memories and his guilt. He stayed beside her to the end, sleeping on the hospital floor, and her wish about the storks stays with him.',
    },
    {
      from: 'Lev',
      to: 'Maya',
      kind: 'father and five-year-old daughter',
      note: 'Maya is the reason for the journey: she needs clothes, shoes, books and toys. The memory of sleeping beside her bed when she was ill or afraid shows his tenderness.',
    },
    {
      from: 'Lev',
      to: 'Stefan',
      kind: 'son and father',
      note: 'Lev remembers his father sleeping upright in his lunch breaks at the Baryn sawmill, where Lev also worked. The memory links two generations of working life in one place, a life that has now ended.',
    },
    {
      from: 'Lev',
      to: 'Lev’s mother',
      kind: 'son and mother',
      note: 'Since the sawmill closed her tin jewellery has kept the family, which Lev says is not enough. One reading is that his journey is an attempt to take that burden back from her.',
    },
  ],

  compareWith: [
    {
      title: 'The Story of an Hour, Kate Chopin',
      href: '/revision/texts/the-story-of-an-hour',
      reason:
        'Both place a character at a window after the death of a spouse, imagining the life ahead: Mrs Mallard feels release, where Lev feels grief, guilt and need.',
    },
    {
      title: 'An Unknown Girl, Moniza Alvi',
      href: '/igcse/edexcel/poetry/an-unknown-girl',
      reason:
        'Both explore belonging between two countries: Alvi’s speaker longs to hold on to a culture she can touch only briefly, while Lev leaves a home he belongs to completely for a country he knows only from hearsay.',
    },
    {
      title: 'The Bright Lights of Sarajevo, Tony Harrison',
      href: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
      reason:
        'Both show ordinary people enduring hardship and give a cigarette unexpected weight: in Harrison, a match or lighter held to one in the dark lets a boy see a girl’s eyes in the unlit streets of wartime Sarajevo; in Tremain, an unlit one is Lev’s companion.',
    },
  ],

  contentGuidance: ['mortality', 'addiction', 'mental_health'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pp. 38-41: the extract as prescribed, 150 numbered lines. Every quotation, annotated phrase and quoted word, and every line number, was checked against this printing by script. The contents list it at p. 38; the Part 2 acknowledgements (p. 72) give The Road Home, Chatto & Windus, 2007, pp. 1-6, copyright Rose Tremain 2007, reproduced by permission of The Random House Group Limited and Little, Brown and Company; the Issue 8 change list records no changes to this text. Local copy 781,803 bytes, matching the Content-Length Pearson’s server reported on 25 September 2026',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Language A (4EA1) specification, Issue 7, August 2025 (served at this address, which still carries the Issue 6 filename): Paper 2 Section A is one essay question on a Part 2 text, made available in the examination, with 45 minutes advised; coursework Assignment A is one response on three Part 2 texts, at least one poem and one prose text, with a suggested task format',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Specification%20and%20sample%20assessments/9781446954379-int-gcse-englang-a-iss6-02-02-2023.pdf',
    },
    {
      label:
        'Pearson, 4EA1/02 question paper (cover dated Friday 5 June 2020; file dated 5 November 2020): Question 1 on the character of Lev in Significant Cigarettes, with bullet points on his thoughts and feelings about home and about the future, and the use of language and structure. The question here is modelled on it, not copied',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/exam-materials/4EA1_02_que_20201105.pdf',
    },
    {
      label:
        'Pearson, Examiners’ Report, Principal Examiner Feedback, November 2020, 4EA1 Paper 2: weaker answers rarely moved past the opening and the smoking; stronger answers covered the full extract, the contrast with Lydia, the almost defiant ending, flashbacks and intertwined time frames, tone, the descriptions of home and the English words Lev can speak; advice to use short embedded quotations and to use exam time to remind rather than reread; a candidate’s point that the sawmill line shows even nature gave up on Lev. Paraphrased, not quoted',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/exam-materials/4EA1_02_pef_20210211.pdf',
    },
    {
      label:
        'Wikipedia, Rose Tremain: born 2 August 1943, London; the Sorbonne (1961-1962) and the University of East Anglia; taught creative writing at UEA 1988-1995; Chancellor of UEA from 2013; DBE in the 2020 New Year Honours for services to writing; Restoration (1989) Booker shortlist; Music and Silence (1999) Whitbread Award; Orange Prize 2008 for The Road Home',
      url: 'https://en.wikipedia.org/wiki/Rose_Tremain',
    },
    {
      label:
        'Wikipedia, The Road Home (novel): published 2007 by Chatto & Windus; Orange Broadband Prize; Lev a recently widowed man from Auror in an unspecified eastern European country; daughter Maya, five; later washing dishes at the restaurant GK Ashe; Lydia, Christy (a divorced Irish plumber), Sophie (a young chef)',
      url: 'https://en.wikipedia.org/wiki/The_Road_Home_(novel)',
    },
    {
      label:
        'Bookreporter review of The Road Home: Auror a fictional village somewhere in Eastern Europe; Lev finds a job washing dishes in a chic restaurant; Christy an Irishman whose wife has left; Sophie; Lydia his companion on the bus. A second, independent source for the later plot',
      url: 'https://www.bookreporter.com/reviews/the-road-home',
    },
    {
      label:
        'A web search on 25 September 2026 for the anthology’s first sentence returned listings of the novel (Google Books, Goodreads, AbeBooks and others) and gave that sentence, identical to lines 1-4 of the anthology printing, as the novel’s opening. With the acknowledgement’s pp. 1-6, this is the basis for calling the extract the opening of the novel',
      url: 'https://books.google.com/books/about/The_Road_Home.html?id=mUJfr555UgkC',
    },
    {
      label:
        'Wikipedia, Women’s Prize for Fiction: called the Orange Broadband Prize for Fiction in 2008, when The Road Home won',
      url: 'https://en.wikipedia.org/wiki/Women%27s_Prize_for_Fiction',
    },
    {
      label:
        'Wikipedia, Edward Elgar: 2 June 1857 to 23 February 1934, matching the dates Lev reads on the note; father a piano tuner who set up a shop selling sheet music and instruments; little formal musical training; the first Pomp and Circumstance March and Land of Hope and Glory, considered an unofficial British national anthem',
      url: 'https://en.wikipedia.org/wiki/Edward_Elgar',
    },
    {
      label:
        'Wikipedia, Bank of England note issues: Series E variant £20, the composer Sir Edward Elgar and Worcester Cathedral on the reverse, issued 22 June 1999, withdrawn 30 June 2010',
      url: 'https://en.wikipedia.org/wiki/Bank_of_England_note_issues',
    },
    {
      label:
        'World Banknotes and Coins, England 20 pounds 1999, Sir Edward Elgar: reverse shows Elgar, the west face of Worcester Cathedral, Saint Cecilia, and an angel playing a trumpet; issued 22 June 1999, withdrawn 30 June 2010',
      url: 'https://www.worldbanknotescoins.com/2015/05/england-20-pound-sterling-note-1999-sir-edward-elgar.html',
    },
    {
      label:
        'Wikipedia, The Power and the Glory: Graham Greene, 1940; an unnamed whisky priest in 1930s Tabasco, Mexico, while the government tried to suppress the Catholic Church; title an allusion to the doxology often recited at the end of the Lord’s Prayer',
      url: 'https://en.wikipedia.org/wiki/The_Power_and_the_Glory',
    },
    {
      label:
        'Wikipedia, 2004 enlargement of the European Union: 1 May 2004, the ten new members; Ireland and the United Kingdom the most open existing members in 2004, the UK with a registration requirement',
      url: 'https://en.wikipedia.org/wiki/2004_enlargement_of_the_European_Union',
    },
    {
      label:
        'Wikipedia, White stork: migratory, breeding in Europe and wintering in Africa; the nest is typically used year after year',
      url: 'https://en.wikipedia.org/wiki/White_stork',
    },
    {
      label: 'Wikipedia, Wall Street crash of 1929: October 1929; led into the Great Depression',
      url: 'https://en.wikipedia.org/wiki/Wall_Street_crash_of_1929',
    },
    {
      label: 'Wikipedia, Royal cypher: EIIR, Elizabeth II Regina, Regina being Latin for queen',
      url: 'https://en.wikipedia.org/wiki/Royal_cypher',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8: The Story of an Hour (pp. 30-31), where Mrs Mallard sits facing the open window after news of her husband’s death; An Unknown Girl (p. 27), set in an evening bazaar in India with henna that will fade; The Bright Lights of Sarajevo (p. 28), where a match or lighter held to a cigarette lets a boy check a girl’s eyes. Checked for the comparison notes and the coursework question',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
  ],
}
