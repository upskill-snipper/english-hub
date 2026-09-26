import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * From Chinese Cinderella, Adeline Yen Mah. A supplement: the anthology page at
 * /igcse/edexcel-lang/anthology/chinese-cinderella keeps its context and themes,
 * and this file adds every other section below it.
 *
 * WHAT WAS CHECKED, AND AGAINST WHAT. Every quotation, line number and page
 * reference was checked against the prescribed text itself: the Pearson Edexcel
 * International GCSE English Anthology, Issue 8 (February 2026), pages 21 to 23,
 * read in full from Pearson's own PDF on 25 September 2026. The anthology numbers
 * the extract's lines 1 to 86, and those are the numbers used here. The italics
 * this guide comments on (the stressed "you" at line 59 and the Wordsworth line
 * at line 84) were read from the PDF's font data, not assumed. Biographical facts
 * come from the sources listed at the foot, and where they disagreed (the year of
 * the first edition of Chinese Cinderella) the guide follows the anthology's own
 * acknowledgement and says no more.
 *
 * HOW MUCH IS QUOTED. The extract is 1,107 words, counted from the anthology text
 * without its introduction, so under fair-dealing.ts the whole page may quote a
 * tenth of it: 110 words. Every annotation phrase, scene-card quotation and
 * quoted phrase in the prose below is either one of the key quotations or a
 * word or two budgeted separately, so the total stays inside that share. Add a
 * quotation and something else has to go.
 *
 * SECOND CHECK, 26 September 2026. Every quotation, line number and italic was
 * re-read against the same anthology PDF and all held. What was corrected: an
 * annotation called "relentlessly" the extract's first adverb, which "went by"
 * makes untrue; the model answer said the line-49 questions showed disbelief at
 * praise from her family, when she is reacting to the newspaper; the Zephaniah
 * guidance had several teachers call him stupid, when one does; scene cards
 * listed the stepmother, the siblings and C.Y. Tung as present in Father's room,
 * where they are only mentioned; and several readings stated as fact are now
 * offered as readings. Absent people stay out of `who` unless the scene quotes
 * their words, because the animation draws everyone listed there.
 */
export const guide: StudyGuide = {
  slug: 'chinese-cinderella',
  title: 'From Chinese Cinderella',
  author: 'Adeline Yen Mah',
  form: 'non-fiction',
  scope:
    'The extract From Chinese Cinderella as printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 1, pages 21 to 23: 86 numbered lines, introduced by a short note from the anthology. It is one episode from Adeline Yen Mah’s autobiography, not the whole book, and every line number in this guide is the anthology’s.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Adeline Yen Mah 1999. From Chinese Cinderella: The True Story of an Unwanted Daughter, Penguin, 1999, as printed in the Pearson Edexcel International GCSE English Anthology.',
  },
  workLength: {
    words: 1107,
    basis:
      'Counted on 25 September 2026 from the text of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pages 21 to 23, lines 1 to 86, excluding the anthology’s introductory note, with the word count used by src/lib/study-guides/validate.ts.',
  },

  native: {
    context: '/igcse/edexcel-lang/anthology/chinese-cinderella',
    themes: '/igcse/edexcel-lang/anthology/chinese-cinderella',
  },

  overview: {
    summary: [
      'From Chinese Cinderella is taken from Adeline Yen Mah’s autobiography of her childhood, published by Penguin in 1999. The anthology prints a single episode, 86 numbered lines on pages 21 to 23, set in Hong Kong in the 1951-1952 school year. Adeline is fourteen and a boarder at Sacred Heart Canossian School. Her family is wealthy, but, as the anthology’s introduction explains, her stepmother has rejected her and her brothers and sisters look down on her, and she has been sent away to school and more or less left there.',
      'On an ordinary Saturday, while she loses at Monopoly and dreads the end of her schooling, Adeline is told that her father’s chauffeur has come to take her home. She fears that someone has died. When the car stops, she does not even know where she is: her family moved to this house months before. At the new villa she is called to her father’s room, where she has never been invited, and he shows her a newspaper: she has won first prize in an international play-writing competition held in London, the first local Chinese student in Hong Kong to win it. Father is proud, not least because a respected colleague noticed the article, and he agrees that she may go to university in England. When she says she wants to be a writer he mocks the idea and decides instead that she will study medicine and specialise in obstetrics. She agrees and thanks him.',
      'The extract moves fast, from dread through disbelief and joy to a quiet surrender, all in one afternoon. What rewards close study is the gap between the girl and the woman telling the story. The fourteen-year-old feels she need only stretch out her hand to “reach the stars”; the adult writer, who did qualify as a doctor and did become a published author, lets the reader see how conditional her father’s approval was and what the bargain cost. The strongest answers treat the ending as double-edged rather than simply happy, and show how the structure of the extract makes it so.',
    ],
  },

  characters: [
    {
      name: 'Adeline',
      role: 'The narrator: the writer herself at fourteen, a boarder at Sacred Heart Canossian School, Hong Kong',
      body: 'The extract shows two versions of her. The fourteen-year-old is anxious, watchful and quick to expect the worst: a call home means someone has died, and her father’s smile might be a trap. Yet she is also clever and brave. She turns aside his question about how she won with a joke about the rules, sees her chance, and asks “boldly” to go to England. The adult writer, looking back from the 1990s, frames all of this with hindsight, choosing what to show and occasionally judging her younger self. Outside the text, Yen Mah was born in Tianjin in 1937, and her mother died two weeks after her birth. She did go to England, qualified in medicine at the London Hospital Medical College in 1960 and worked as an anaesthesiologist in California. She also became the published writer whose ambition Father had mocked, with Falling Leaves (1997) and Chinese Cinderella (1999).',
    },
    {
      name: 'Father',
      role: 'Adeline’s father, a wealthy businessman; never named in the extract',
      body: 'He is never given a name, and the capital letter turns the word into a title. He is powerful and unpredictable: Adeline cannot tell whether his good mood is real. His pride is prompted from outside, by the newspaper and by a colleague’s question in the lift, and Adeline explains it as face. He can be warm, laughing at her joke and telling her he believes she has potential, but he decides her future in a speech of commands and closes it with a question that allows only one answer. A fair reading allows that, by his own lights, he is choosing a secure career for a daughter. The more convincing reading, because the extract is built to show it, is that his approval is conditional and his care takes the form of control. Outside the text, sources name him as Joseph Yen, a businessman.',
    },
    {
      name: 'The stepmother',
      role: 'Adeline’s stepmother; mentioned but never seen',
      body: 'She never appears. Ah Gum reports that she is out playing bridge, referring to her simply as Adeline’s mother; the anthology’s introduction describes her as dominating. Her absence tells its own story. The adults and the favoured children are at leisure in a new house with a swimming pool, a home so unfamiliar to Adeline that she had to ask where she was, and at the moment of Adeline’s success the stepmother is simply not there. Outside the text, sources name her as Jeanne Prosperi, whom the children called Niang.',
    },
    {
      name: 'The siblings',
      role: 'The two brothers and the sister called Little Sister who are at home when Adeline arrives; Third Brother is to travel with her to England',
      body: 'When Adeline arrives, her brothers and Little Sister are out lying in the sun beside the pool, not at the door to meet her. Her request to go to university in England like her brothers shows that she measures her treatment against theirs, and Father’s plan sends her with Third Brother, who is named only by his position in the family. The siblings stay in the background, but their leisure set against her anxiety is one of the extract’s quiet contrasts.',
    },
    {
      name: 'The chauffeur',
      role: 'Father’s driver, who collects Adeline from school',
      body: 'He meets Adeline’s frightened questions with shrugs and rudeness, says he only carries out the orders he is given, and mocks her for not knowing where her own family now lives. His behaviour matters because of what it may reveal: an employee would hardly speak like this to a daughter the household valued, so the way he treats her suggests her low standing at home. His remark about orders also hints at who gives them.',
    },
    {
      name: 'Mother Valentino',
      role: 'A figure of authority at the boarding school; the narration calls her Ma-mien Valentino',
      body: 'She calls Adeline away from the game, and the girls stand to greet her, a small sign of the ordered, respectful world of the school. She tells Adeline to hurry downstairs, where Father’s chauffeur is waiting. She belongs to the school, the one place in the extract where Adeline seems at home, which helps to explain why the summons away from it feels like a threat.',
    },
    {
      name: 'Mary',
      role: 'A friend at the boarding school, winning at Monopoly',
      body: 'Mary protests when Adeline is called away, because for once she is winning, and cheerfully demands rent when Adeline lands on her property. Her ordinary chatter contrasts with Adeline’s private dread. The phrase “For once” returns later, when Adeline describes her father’s pride, so Mary’s small victory anticipates Adeline’s own rare one.',
    },
    {
      name: 'Ah Gum',
      role: 'A member of the household who opens the door of the new house',
      body: 'Ah Gum tells Adeline where everyone is and that Father wants to see her at once. It may be a small but telling detail that someone in the household can say where every member of the family is, when the family’s own daughter did not even know where they now lived.',
    },
    {
      name: 'C.Y. Tung',
      role: 'Father’s friend and colleague, a prominent businessman who, like Father, came from Shanghai',
      body: 'He spots the newspaper article and asks Father whether the winner is related to him, because they share an unusual surname. His question is what makes Father proud: Adeline has given Father face in front of a man he admires, and whose own children, Father notes, have won no such prize. The extract’s description fits the real shipping magnate C. Y. Tung (1912-1982), founder of the Orient Overseas line, whose early business years were spent in Tianjin and Shanghai and whose son, Tung Chee-hwa, became Hong Kong’s first Chief Executive in 1997.',
    },
  ],

  keyQuotes: [
    {
      text: 'throbbed at the back of my mind like a persistent toothache',
      where: 'Adeline, narrating; page 21, line 6',
      analysis:
        'The simile turns an abstract worry into a physical, nagging pain. A toothache is not a disaster, but it cannot be ignored, and the verb “throbbed” gives the fear a pulse that beats under everything she does, even a board game. What she fears is leaving school, which the opening lines suggest may be “the end of school forever”; for a girl whose family has sent her away, school may be the one safe place. The cheerful game going on around her makes the private pain feel lonelier.',
    },
    {
      text: 'as in a nightmare, wondering who had died this time',
      where: 'Adeline, narrating; page 21, line 14',
      analysis:
        'A call home ought to be good news for a boarder, but Adeline reads it as catastrophe. The simile captures the helpless, unreal feeling of running towards something dreadful, and the two words “this time” imply that calls from her family have brought news of death before. Without stating anything about her past, Yen Mah makes the reader infer a childhood in which home means loss. The nightmare also sets up a structural echo: thirty-five lines later, she asks whether she is dreaming.',
    },
    {
      text: 'summoned by Father to enter the Holy of Holies',
      where: 'Adeline, narrating; page 21, lines 31-32',
      analysis:
        'The Holy of Holies was the innermost sanctuary of the Temple in Jerusalem, which only the High Priest could enter, and only once a year. Comparing her father’s private room to it makes Father a god-like figure and his room a forbidden place, and the verb “summoned” belongs to kings and courts rather than parents. She adds that she had never been invited in. One reading is that this is the child’s genuine awe; another is that the adult writer is being gently ironic about an ordinary room treated as a shrine. Both can be true, and saying so is the mark of a strong answer.',
    },
    {
      text: 'Is it possible? Am I dreaming? Me, the winner?',
      where: 'Adeline, her thoughts as she reads the newspaper; page 22, line 49',
      analysis:
        'Three short questions, the first two in the present tense, break into the past-tense narration and take the reader inside the moment of reading. The final fragment, “Me, the winner?”, is the most revealing: she cannot connect herself with success, which shows how thoroughly she has learned to expect nothing. The questions also answer the “nightmare” of line 14 with a dream, so the structure turns fear into wonder just past the halfway point of the extract.',
    },
    {
      text: 'For once, he was proud of me.',
      where: 'Adeline, narrating; page 22, line 55',
      analysis:
        'A short, plain sentence carries one of the saddest implications in the extract: “For once” suggests that he has seldom, if ever, been proud of her before. The next sentence explains the pride. She has “given him face” in front of C.Y. Tung, the respected colleague who noticed the article first, so the pride may be less about her talent than about his own standing. Mary uses the same two words about winning at Monopoly at the start, which links two rare victories.',
    },
    {
      text: 'I only had to stretch out my hand to reach the stars.',
      where: 'Adeline, narrating; page 22, line 58',
      analysis:
        'Hyperbole marks the emotional peak of the extract. The stars are a traditional image of the highest ambition, and “only” makes reaching them seem effortless, as if one moment of approval has removed every obstacle. The sentence follows her description of her whole being vibrating with joy, so the language climbs higher and higher. Because the reader has seen how changeable Father is, the image also creates unease: the higher she rises here, the further she has to fall when he mocks her ambition fifteen lines later.',
    },
    {
      text: 'How come you won?',
      where: 'Father; page 22, line 59',
      analysis:
        'The anthology prints the word you in italics, so the stress falls on her rather than on the achievement. The question sounds like praise but carries surprise, even doubt, that this daughter could have won. Adeline answers with a joke, suggesting that the rules were so complicated she may have been the only entrant, and he laughs. Her humour can be read as a tactic: modest and witty, it keeps his good mood alive just long enough for her to ask for what she really wants.',
    },
    {
      text: 'You are going to starve!',
      where: 'Father; page 22, line 73',
      analysis:
        'Father answers her ambition with a blunt exclamation that turns a dream into a forecast of poverty. He follows it with questions about which language she could write in and who would read her, and dismisses her Chinese as basic and her English as inferior to a native speaker’s. The stars of line 58 have become starvation in fifteen lines. For readers who know that Yen Mah did become a published author, his certainty is ironic: the book this extract comes from can be read as her answer to his question about who would read her.',
    },
    {
      text: 'I did not wish to contradict him.',
      where: 'Adeline, narrating; page 22, line 77',
      analysis:
        'After Father’s attack her only reply is silence, and this short sentence explains it. The verb “wish” presents the silence as her choice rather than his power. One reading is that she has learned never to answer back; another, better supported by what follows, is that she is being strategic, since she is ready to study anything so long as she reaches England. Either way, the girl who asked “boldly” a few lines earlier now says nothing, and the shape of the dialogue shows where the power lies.',
    },
    {
      text: 'Bliss was it in that dawn to be alive.',
      where: 'Adeline, quoting William Wordsworth; page 23, line 84',
      analysis:
        'Adeline reaches for a line of Wordsworth, printed in italics in the anthology, to express her happiness. The allusion shows how deeply English literature has shaped her, which can be read as a quiet reply to Father’s suggestion that native English speakers can write better than she can. Wordsworth was remembering the early hopes of the French Revolution, and in his next line youth itself becomes heaven, echoing her own picture of England as heaven. A reader who knows that those hopes were later disappointed may sense the same fragility here. Structurally, an extract that began with an ending closes on a dawn.',
    },
  ],

  extracts: [
    {
      title: 'Called home: from the Monopoly game to Father’s door',
      where: 'Page 21, lines 1-37',
      pointer:
        'From the opening line, a Saturday at boarding school, to line 37, where Adeline stands in Father’s room unsure whether to trust his smile.',
      summary:
        'On a hot Saturday at boarding school, Adeline plays Monopoly with three friends while the thought of leaving school at the end of term nags at her. Mother Valentino calls her down: Father’s chauffeur has come to take her home. Terrified that someone has died, she is driven to a villa she does not know, and learns from the rude chauffeur that it is her family’s new home. Inside, the house is quiet and cool. Her stepmother is out at bridge, her brothers and sister are by the pool, and Father wants to see her in his room, where she has never been invited. He is relaxed and smiling, and she does not trust it.',
      annotations: [
        {
          phrase: 'relentlessly',
          note: 'The adverb in the very first sentence makes time an enemy that cannot be held back. It sets an anxious tone before anything has happened and prepares for her fear of the end of term.',
        },
        {
          phrase: 'throbbed at the back of my mind like a persistent toothache',
          note: 'A homely simile for a constant, low-level pain. Set beside a cheerful board game, it shows that Adeline’s inner life is cut off from the world around her.',
        },
        {
          phrase: 'foolishly',
          note: 'The adult narrator judges her younger self for asking where they are. Her reply that she had forgotten the move may be true or may save face, but either way this is a home she has had no part in.',
        },
        {
          phrase: 'summoned by Father to enter the Holy of Holies',
          note: 'Religious hyperbole that turns a private room into a sanctuary and a father into a remote, god-like figure whose attention frightens rather than comforts.',
        },
        {
          phrase: 'giant ruse',
          note: 'Even Father’s smile is read as a possible trap. The phrase shows a child so used to coldness at home that kindness itself looks like a trick.',
        },
      ],
      question:
        'How does the writer use language and structure in lines 1-37 to show Adeline’s fear and uncertainty?',
    },
    {
      title: 'The newspaper and the prize',
      where: 'Page 22, lines 38-65',
      pointer:
        'From Father inviting her to sit down and look at the newspaper (line 38) to her request, at lines 64-65, to go to university in England like her brothers.',
      summary:
        'Father shows Adeline a newspaper announcing that she has won first prize in an international play-writing competition held in London, with a medal and a cash prize, the first such win by a local Chinese student in Hong Kong. He heard about it from his colleague C.Y. Tung, who noticed their shared surname. Father is openly proud and Adeline is overjoyed. When he asks how she won, she jokes that the rules were so complicated that she may have been the only entrant. Seizing the moment, she asks whether she may go to university in England too.',
      annotations: [
        {
          phrase: 'Is it possible? Am I dreaming? Me, the winner?',
          note: 'The shift into present-tense questions shows her disbelief from the inside, and the final fragment reveals how little she expects to be praised.',
        },
        {
          phrase: 'given him face',
          note: 'A Chinese idea of social standing: her success raises Father’s reputation in front of a respected colleague, which suggests that his pride is partly about himself.',
        },
        {
          phrase: 'I only had to stretch out my hand to reach the stars.',
          note: 'Hyperbole at the emotional peak of the extract. Its very effortlessness is what makes a careful reader uneasy about what will follow.',
        },
        {
          phrase: 'How come you won?',
          note: 'The anthology’s italics stress the word you, so the question mixes praise with surprise that this particular daughter has succeeded.',
        },
        {
          phrase: 'boldly',
          note: 'The adverb marks a turning point in her confidence, set against her timid knock on Father’s door about thirty lines earlier.',
        },
      ],
      question:
        'How does the writer use language and structure in lines 38-65 to present the changes in Adeline’s feelings?',
    },
    {
      title: 'Father’s plan',
      where: 'Pages 22-23, lines 66-86',
      pointer:
        'From Father asking what she would study (line 66) to the end of the extract, where Adeline promises to become a doctor and thanks him.',
      summary:
        'Father agrees that Adeline may go to England and asks what she will study. Overjoyed, she tells him she will study literature and become a writer. He mocks the idea, questions whether she could write well in either Chinese or English, and announces that she will go to medical school, travelling with Third Brother that summer, and specialise in obstetrics. Adeline says nothing, then agrees at once, remembers a line of Wordsworth about the bliss of being alive, and thanks him warmly.',
      annotations: [
        {
          phrase: 'entering heaven',
          note: 'Religious imagery returns: England is paradise, and in heaven the choice of subject hardly seems to matter. The image explains why she will accept any condition.',
        },
        {
          phrase: 'You are going to starve!',
          note: 'A blunt exclamation that replaces her dream with a threat of poverty. Father measures a career by money and security, not by talent.',
        },
        {
          phrase: 'You will',
          note: 'Father’s plan is built from repeated statements using these words, a future tense of command that leaves no room at all for her voice.',
        },
        {
          phrase: 'foolproof profession',
          note: 'The phrase shows that he values safety above everything, and by calling it foolproof for her in particular he may imply that he does not trust her to succeed at anything risky.',
        },
        {
          phrase: 'Of course I agreed',
          note: 'She answers his question as if only one answer were possible, and the extract suggests that it was. The adult narrator’s tone here may be wry rather than simply grateful.',
        },
        {
          phrase: 'Bliss was it in that dawn to be alive.',
          note: 'Wordsworth’s line gives her joy a literary voice, and in doing so displays the command of English that Father has just dismissed.',
        },
      ],
      question:
        'How does the writer use language and structure in lines 66-86 to present the relationship between Adeline and her father?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Simile',
      example:
        'Her fear of leaving school “throbbed at the back of my mind like a persistent toothache” (line 6); she runs downstairs “as in a nightmare” (line 14).',
      effect:
        'Both similes make an inner state physical and familiar. The toothache is small but constant, the nightmare helpless and unreal, and together they establish a narrator who lives with fear as a normal condition. Because the similes come before anything bad has happened, the reader learns what home means to her without being told.',
    },
    {
      technique: 'Religious imagery and hyperbole',
      example:
        'Father’s room is the “Holy of Holies” (lines 31-32); going to England is like “entering heaven” (lines 68-69).',
      effect:
        'The two images mark the extract’s two poles of power. Father is placed at the sacred centre of the household, unapproachable and god-like, and England becomes paradise, the reward he can grant or withhold. The exaggeration shows the child’s feelings at full size, while the adult writer’s choice of such grand images can also be read as gently ironic.',
    },
    {
      technique: 'Adverbs of manner that chart her confidence',
      example:
        'She asks “foolishly” where they are (line 22), knocks “Timidly” on Father’s door (line 33), asks “boldly” to go to England (line 64), and then waits in silence (line 77).',
      effect:
        'Read in sequence, the adverbs form a small story of their own: humiliation, fear, a sudden rise in courage and then retreat. They let the reader track Adeline’s changing confidence without any explanation, and the fall back into silence after “boldly” is the clearest sign of how quickly Father regains control.',
    },
    {
      technique: 'Self-questioning in free direct thought',
      example:
        'She suspects a “giant ruse” (line 36), and on reading the newspaper thinks, “Is it possible? Am I dreaming? Me, the winner?” (line 49).',
      effect:
        'Her thoughts are given directly, without quotation marks and often in the present tense, so the reader hears her mind at work in the moment. The questions show a girl who distrusts kindness and cannot believe in her own success, which makes her joy more moving and her vulnerability clearer.',
    },
    {
      technique: 'A change of register: the embedded newspaper report',
      example:
        'Lines 42-48 reproduce the announcement: her full name and her school, the competition held in London, the medal and cash prize, and the claim that no local Chinese student in Hong Kong had won before.',
      effect:
        'The formal, public voice of journalism interrupts the private family scene. Capital letters and official detail make her success objective and undeniable, and the report does what her family has rarely done: it names her, praises her and says it is proud of her. It is the outside world, not the family, that recognises her first.',
    },
    {
      technique: 'Hyperbole set against blunt exaggeration',
      example:
        'Adeline feels she has only to “reach the stars” (line 58); fifteen lines later Father declares, “You are going to starve!” (line 73).',
      effect:
        'The two exaggerations form an antithesis, the highest ambition against the lowest outcome. Placing them so close together makes the collapse of her hopes sudden and painful, and shows that the same moment means opposite things to daughter and father.',
    },
    {
      technique: 'Commands in the future tense',
      example:
        'Father’s plan is a run of statements built on “You will” (lines 78-80), justified by generalisations about women patients and closed by a question that expects only agreement (line 81).',
      effect:
        'The future tense turns his wishes into facts, as though her life were already decided. The generalisations sound like reasons but leave no space for argument, and the closing question is not a real question at all. His speech enacts the control it describes.',
    },
    {
      technique: 'Short sentences at moments of feeling',
      example:
        '“For once, he was proud of me.” (line 55) and “I did not wish to contradict him.” (line 77).',
      effect:
        'Each short sentence stands out from the longer narration around it and carries more than it says. The first implies years without his pride; the second hides a great deal of feeling behind a polite surface. Their plainness makes the reader supply the emotion.',
    },
    {
      technique: 'Italics for emphasis',
      example:
        'Father asks “How come you won?” with the word you in italics (line 59); the Wordsworth line is also italicised (line 84).',
      effect:
        'The italic stress lets the reader hear Father’s tone, surprise rather than simple admiration, and so suggests his low opinion of her even in praise. Italicising the Wordsworth line marks it as borrowed words, a moment when Adeline speaks through literature.',
    },
    {
      technique: 'Literary allusion',
      example:
        '“Bliss was it in that dawn to be alive.” (line 84), from William Wordsworth’s lines on the early days of the French Revolution.',
      effect:
        'The allusion gives her joy the scale of a historic new beginning and proves her command of English literature at the very moment Father has dismissed it. For a reader who knows that Wordsworth’s hopes were disappointed, it also casts a shadow over her happiness.',
    },
  ],

  structureForm: [
    {
      heading: 'Autobiography: the girl and the woman',
      body: 'The extract is written in the first person and mostly in the past tense by a writer looking back nearly half a century, from 1999 to 1951-1952. That gap creates two perspectives. The fourteen-year-old’s feelings are recreated vividly, often through present-tense thoughts such as the questions at line 49, while the adult shapes and sometimes judges them, as in the adverb “foolishly” at line 22. The reader is allowed to see what the girl could not, above all how conditional Father’s approval is. Many of the most rewarding points in an answer come from that gap.',
    },
    {
      heading: 'One afternoon, told in order',
      body: 'The extract is a single, continuous episode in chronological order, from a Saturday game at school to the end of one conversation. That gives it the shape of a short story: a calm opening shadowed by worry, rising tension on the journey, a turning point with the newspaper, an emotional peak, a conflict and a quiet resolution. Because so much happens in so little time, the reversals feel sudden, which is exactly how Adeline experiences them.',
    },
    {
      heading: 'A journey inward',
      body: 'The setting moves steadily closer to the centre of power: the boarding school, the car, the hillside villa, the quiet house and finally Father’s private room, to which she has never been invited. Each step takes her further from the place where she belongs and nearer to the person who decides her fate. The physical journey mirrors the emotional one, and by the time she knocks on his door the reader’s tension matches hers.',
    },
    {
      heading: 'The newspaper at the turning point',
      body: 'The newspaper report (lines 42-48) sits almost exactly at the centre of the 86 lines, and it is where the extract turns. A text within the text, written in a formal public voice, it recognises Adeline before her family does, and Father learns of it not from his daughter but from a colleague in a lift. Structurally, praise enters from outside, and only then does the family, briefly, follow.',
    },
    {
      heading: 'Dialogue and the balance of power',
      body: 'Much of the extract is direct speech, and its proportions tell a story. At first Adeline asks the questions and the chauffeur brushes her off. In Father’s room she jokes and even makes a request, but after line 72 his speeches turn into mockery and then a run of commands, while hers shrink to silence and a brief reply of agreement. The final line has her repeating his plan back to him, medical school in England and a career as a doctor, so the extract ends with his words in her mouth.',
    },
    {
      heading: 'Echoes that bind the extract together',
      body: 'Yen Mah links distant moments through repeated ideas. The nightmare of line 14 becomes the dream of line 49. Mary’s delight that for once she is winning (line 8) returns in “For once, he was proud of me” (line 55). The stars of line 58 turn into starvation at line 73. England as heaven (lines 68-69) prepares for the Wordsworth line (line 84), and an extract that opens with thoughts of the end of school closes on a dawn. Noticing these links is one of the surest ways to write about structure rather than simply retelling.',
    },
    {
      heading: 'Setting and weather',
      body: 'The opening is hot and windy, and the radio forecasts that a typhoon may come the following day (lines 4-5); inside the new house it is quiet and cool (line 26). One reading is that the typhoon warning foreshadows a storm that breaks, not in the weather, but in Father’s room. Another is that these are simply the details of a remembered day. The first is worth making in an exam, because the warning comes only a few lines before the summons, but it should be offered as an interpretation, since the storm never arrives in the extract.',
    },
    {
      heading: 'An ending that closes and opens',
      body: 'The extract ends politely and happily on the surface: she has her place in England and her father’s approval, and she thanks him with emphatic gratitude. Underneath, she has given up the ambition she named only a few lines earlier. Yen Mah offers no direct judgement on this, and the silence is a structural choice that leaves the reader to weigh the bargain. The anthology’s introduction adds that this was one of the few times she went home, which makes the rare warmth of the scene more poignant.',
    },
  ],

  vocabulary: [
    {
      term: 'relentlessly',
      definition:
        'Without stopping or easing, in a way that feels harsh. Used of time itself in line 1.',
    },
    {
      term: 'foreboding',
      definition: 'A strong feeling that something bad is about to happen (line 14).',
    },
    {
      term: 'chauffeur',
      definition:
        'A person employed to drive a private car (first used at line 12). Father’s chauffeur is one of several signs of the family’s wealth.',
    },
    {
      term: 'mid-level',
      definition:
        'Line 20. Refers to Mid-Levels, a wealthy residential area on the hillside of Hong Kong Island, between Victoria Peak and Central, the business district by the harbour.',
    },
    {
      term: 'villa',
      definition: 'A large, elegant house (line 20). The family’s new villa has a swimming pool.',
    },
    {
      term: 'bridge',
      definition:
        'A card game for four players, often played socially (line 28). The stepmother is out playing it.',
    },
    {
      term: 'Holy of Holies',
      definition:
        'The innermost sanctuary of the Tabernacle and later the Temple in Jerusalem, which only the High Priest could enter, once a year on Yom Kippur. Used figuratively for a place almost nobody is allowed to enter (line 32).',
    },
    {
      term: 'ruse',
      definition: 'A trick intended to deceive someone (line 36).',
    },
    {
      term: 'Canossian',
      definition:
        'Line 43. The school takes its name from the Canossians, a Catholic religious order of sisters named after their founder, Magdalene of Canossa. Canossian sisters founded the school in Hong Kong in 1860, and it is known today as Sacred Heart Canossian College.',
    },
    {
      term: 'prestigious',
      definition:
        'Admired and highly respected (line 46). The newspaper uses it of the competition.',
    },
    {
      term: 'face',
      definition:
        'In Chinese culture, a person’s reputation, dignity and standing in the eyes of others, which can be lost, kept or increased. To give someone face is to raise their standing in public (line 56).',
    },
    {
      term: 'scoffed',
      definition: 'Spoke mockingly, showing contempt for an idea (line 73).',
    },
    {
      term: 'elementary',
      definition:
        'Basic; at the level of a beginner (line 75). This is Father’s judgement of her Chinese.',
    },
    {
      term: 'obstetrics',
      definition: 'The branch of medicine concerned with pregnancy and childbirth (line 79).',
    },
    {
      term: 'foolproof',
      definition: 'So simple or safe that it cannot go wrong (line 81).',
    },
    {
      term: 'typhoon',
      definition:
        'A violent tropical storm with very strong winds, of the kind that strikes Hong Kong and the western Pacific (line 5).',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Remind yourself of the extract From Chinese Cinderella. How does the writer, Adeline Yen Mah, use language and structure to convey her thoughts and feelings about being called home to see her father? You should support your answer with close reference to the extract, including brief quotations.',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          'Open with a one-sentence overview of the emotional journey: dread (lines 1-37), disbelief and joy (lines 38-65), then a quiet surrender (lines 66-86).',
          'Analyse the fear of the opening: the toothache simile (line 6), the nightmare and the words “this time” (line 14), and the adverb “foolishly” (line 22).',
          'Show how setting and imagery build Father’s power: the journey inward to his room and the “Holy of Holies” (lines 31-32).',
          'Treat the newspaper report (lines 42-48) as the structural turning point, and analyse the present-tense questions at line 49.',
          'Explore the peak and the fall: “reach the stars” (line 58) against “You are going to starve!” (line 73), and her silence at line 77.',
          'End on the double-edged ending: the Wordsworth allusion (line 84), her thanks, and what the adult writer lets the reader see that the girl could not.',
        ],
      },
      {
        question:
          'How does the writer use language and structure to present her father in From Chinese Cinderella? You should support your answer with close reference to the extract, including brief quotations.',
        skill: 'Language and structure analysis: the presentation of a person',
        guidance: [
          'Start before he appears: the chauffeur’s remark about orders and Ah Gum’s message build Father as a distant authority, and the capital letter makes Father a title rather than a name.',
          'Analyse the religious imagery of his room (lines 31-32) and Adeline’s suspicion of a “giant ruse” (line 36).',
          'Show his warmth and its limits: his smile and laughter, his pride “For once” (line 55), and the idea of face (line 56).',
          'Analyse his speech: the italic stress in “How come you won?” (line 59), the exclamation at line 73 and the commands beginning “You will” (lines 78-80).',
          'Offer two readings, a controlling father whose approval is conditional or a practical one choosing security, and say which the structure of the extract supports and why.',
          'Conclude with the final line, where Adeline repeats his plan back to him (line 85), and what it shows about whose voice has won.',
        ],
      },
      {
        question:
          'Compare how the writers of From Chinese Cinderella and Young and dyslexic? You’ve got it going on present their ideas and perspectives about being judged by adults. Support your answer with detailed examples from both texts, including brief quotations.',
        skill:
          'Comparison of ideas and perspectives (a practice pairing: in the examination the second text is unseen)',
        guidance: [
          'Name the shared idea: an adult decides what a young person can become. Father dismisses Adeline’s wish to be a writer (lines 73-76); one of Zephaniah’s teachers calls him stupid, and another steers him towards football when he asks for help with writing (lines 14-23 of his article).',
          'Contrast the perspectives: Yen Mah recreates her feelings at fourteen and leaves the judgement to the reader, while Zephaniah argues openly as an adult and says that, looking back, he does not feel angry with his teachers.',
          'Contrast forms and purposes: an autobiographical scene built on dialogue, against a newspaper article, adapted from his contribution to a book, that in its closing paragraphs speaks directly to dyslexic readers and their parents.',
          'Compare the responses: Adeline’s silence and agreement (lines 77-86) against Zephaniah’s open arguments with his teachers and his self-belief.',
          'Compare what the writers’ later lives add: both became published writers, which turns the adults’ judgements into irony, and each text uses that irony differently.',
          'Write every paragraph about both texts, linking them with comparative phrases, rather than writing about one text and then the other.',
        ],
      },
      {
        question:
          'Compare how the writers of From Chinese Cinderella and From 127 Hours: Between a Rock and a Hard Place present their thoughts and feelings during a short period of time that changed their lives. Support your answer with detailed examples from both texts, including brief quotations.',
        skill: 'Comparison of ideas and perspectives (a practice pairing)',
        guidance: [
          'Identify the common ground: both are first-person accounts that slow down a short span of time in which a life turns, one emotionally and one physically.',
          'Compare tense and viewpoint: Ralston narrates in the present tense, while Yen Mah writes in the past tense with hindsight but slips into present-tense thought at line 49.',
          'Compare how each builds tension before the crisis: Adeline’s dread on the way home (lines 14-37) and Ralston’s careful, technical account of the climb before the boulder moves.',
          'Compare the moment itself: both writers reach for the idea of a dream, Ralston as time seems to slow and Yen Mah as she reads the newspaper, but one moment brings disaster and the other joy.',
          'Compare the aftermath: Ralston’s panic and struggle against the rock, and Adeline’s silence and agreement, and what each writer wants the reader to feel.',
          'Balance the two texts in every paragraph and keep the focus on thoughts and feelings rather than on retelling events.',
        ],
      },
    ],
    tips: [
      'The anthology text is printed for you in the examination, so there is no need to memorise quotations. Revise the shape of the extract instead, so that you can find the moment you need in seconds; the line numbers in this guide are the anthology’s own.',
      'Cover structure as fully as language. For this text the strongest structural points are the journey inward to Father’s room, the newspaper report at the centre, the echoes across the extract (nightmare and dream, stars and starving, an ending and a dawn) and the way Adeline’s share of the dialogue shrinks.',
      'Keep the writer and the girl apart. Use Yen Mah for choices made in the writing and Adeline, or the young Adeline, for what she feels at fourteen. Much of the best analysis sits in the gap between them.',
      'Do not call the ending simply happy. A strong answer weighs what Adeline gains, England, university and her father’s approval, against what she gives up, her wish to write, and says which the writing makes the reader feel more.',
      'Use the idea of face only where it explains something in the text, such as why Father’s pride depends on C.Y. Tung. Context that is not attached to a quotation adds little.',
      'Name a technique only when you can say what it does. The label simile earns nothing on its own; what the toothache suggests about a fear that will not go away is worth a great deal.',
      'In a comparison, compare perspectives as well as methods: what each writer thinks and feels about the experience, and how each wants the reader to respond.',
    ],
  },

  modelAnswer: {
    question:
      'How does the writer, Adeline Yen Mah, use language and structure to convey her thoughts and feelings about being called home to see her father?',
    paragraph:
      'Yen Mah structures the extract as a movement from dread to a joy that is almost immediately taken back, and her language makes the reader feel both halves. When she is called home, she runs downstairs “as in a nightmare, wondering who had died this time”: the simile captures a child’s helplessness, while the words “this time” quietly imply that calls from home have brought news of death before, so the family is linked with loss before it even appears. The newspaper report reverses this, and the echo seems deliberate, as the nightmare becomes “Am I dreaming?”, a short present-tense question that shows how impossible success had seemed to her. Father’s praise, when it follows, is qualified, since “For once, he was proud of me” rests on two small words that imply a childhood almost entirely without it. The hyperbole of reaching “the stars” then places her at the height of the extract, which is exactly why Father’s blunt “You are going to starve!” falls so hard: within fifteen lines the stars have become starvation. Her reply is silence, and the plain sentence “I did not wish to contradict him” suggests less a change of heart than a calculation, since she will accept any course that takes her to England. The reader shares her happiness while seeing, more clearly than the fourteen-year-old could, how little of it is her own choice.',
    commentary: [
      'It opens with an overview that answers both halves of the question, language and structure, in one sentence, so every point that follows has a place in an argument.',
      'Quotations are short and embedded, and the analysis goes down to single words, “this time” and “For once”, which is where the most precise comment lies.',
      'It writes about structure through connections across the extract, the nightmare that becomes a dream and the stars that become starvation, rather than simply describing the order of events.',
      'It offers an interpretation and weighs it against an alternative, calculation rather than a change of heart, instead of presenting one reading as fact.',
      'It ends on the effect on the reader and on the gap between the girl and the adult writer, which is the insight that separates a strong answer on this text from a competent one.',
    ],
  },

  timeline: [
    {
      where: 'Page 21, lines 1-6',
      title: 'A Saturday at school',
      summary:
        'Eight weeks before the end of term, which may be the end of her schooling altogether, Adeline is losing at Monopoly with three friends. It is hot, and the radio forecasts that a typhoon may be coming.',
      setting: 'The boarding school in Hong Kong on a hot Saturday',
      who: ['Adeline', 'Mary'],
      quote: 'throbbed at the back of my mind like a persistent toothache',
      themes: ['Childhood memory', 'Family rejection'],
      tension: 2,
      significance:
        'Establishes school as Adeline’s refuge and her fear of losing it, so everything that follows is shadowed by what she stands to lose.',
    },
    {
      where: 'Page 21, lines 7-25',
      title: 'The summons home',
      summary:
        'Mother Valentino calls Adeline down to Father’s waiting chauffeur. Fearing that someone has died, she questions the driver, who is rude and unhelpful, and arrives at a villa she does not know is her family’s new home.',
      setting: 'The school stairs, the car and a villa on the hillside at mid-level',
      who: ['Adeline', 'Mother Valentino', 'Mary', 'The chauffeur'],
      quote: 'as in a nightmare, wondering who had died this time',
      themes: ['Family rejection'],
      tension: 3,
      significance:
        'Shows how excluded Adeline is: a call from home means disaster, and she does not even know the house her family now lives in.',
    },
    {
      where: 'Page 21, lines 26-37',
      title: 'Father’s room',
      summary:
        'Ah Gum tells Adeline that her stepmother is at bridge, her siblings are by the pool and Father wants her in his room. She knocks timidly, finds him relaxed and smiling, and suspects a trick.',
      setting: 'The quiet, cool new house and Father’s private room',
      who: ['Adeline', 'Ah Gum', 'Father'],
      quote: 'summoned by Father to enter the Holy of Holies',
      themes: ['Family rejection', 'Identity and worth'],
      tension: 4,
      significance:
        'The height of her dread: the setting and the religious imagery make Father a remote, god-like figure.',
    },
    {
      where: 'Page 22, lines 38-54',
      title: 'The newspaper',
      summary:
        'Father shows her a newspaper report: she has won first prize in an international play-writing competition held in London. He explains that his colleague C.Y. Tung noticed the article and asked whether the winner was related.',
      setting: 'Father’s room',
      who: ['Adeline', 'Father', 'C.Y. Tung'],
      quote: 'Is it possible? Am I dreaming? Me, the winner?',
      themes: ['Recognition and validation', 'Identity and worth'],
      tension: 4,
      significance:
        'The turning point: recognition from outside the family changes how Father sees her, at least for now.',
    },
    {
      where: 'Page 22, lines 55-65',
      title: 'Father’s pride',
      summary:
        'Father is radiant because she has given him face. Overjoyed, Adeline answers his question about how she won with a joke, then asks boldly whether she may go to university in England like her brothers.',
      setting: 'Father’s room',
      who: ['Adeline', 'Father'],
      quote: 'I only had to stretch out my hand to reach the stars.',
      themes: ['Recognition and validation', 'Resilience'],
      tension: 4,
      significance:
        'The emotional peak, and the moment Adeline turns rare approval into a request for her future.',
    },
    {
      where: 'Page 22, lines 66-81',
      title: 'Writer or doctor',
      summary:
        'Father agrees that she may go to England and asks what she will study. When she says she will be a writer he mocks her, doubts her Chinese and English, and orders her to study medicine and specialise in obstetrics.',
      setting: 'Father’s room',
      who: ['Adeline', 'Father'],
      quote: 'You are going to starve!',
      themes: ['Identity and worth', 'Family rejection'],
      tension: 5,
      significance:
        'Her own ambition is dismissed in moments, which shows that Father’s approval comes with control.',
    },
    {
      where: 'Page 23, lines 82-86',
      title: 'Bliss, and a bargain',
      summary:
        'Adeline agrees at once, reflecting that she would study anything to reach England. She recalls a line of Wordsworth about the bliss of being alive, then thanks Father, promising to train as a doctor in England.',
      setting: 'Father’s room',
      who: ['Adeline', 'Father'],
      quote: 'Bliss was it in that dawn to be alive.',
      themes: ['Resilience', 'Childhood memory'],
      tension: 3,
      significance: 'An ending of joy and surrender at once, which the reader is left to weigh.',
    },
  ],

  relationships: [
    {
      from: 'Adeline',
      to: 'Father',
      kind: 'daughter and father',
      note: 'Fear and distance turn, for a few minutes, into pride and joy, and then into obedience. The extract suggests that his approval depends on her bringing him honour and doing as she is told.',
    },
    {
      from: 'Adeline',
      to: 'The stepmother',
      kind: 'stepdaughter and stepmother',
      note: 'Absent throughout: she is out playing bridge while her stepdaughter’s success is discussed, which shows how little Adeline counts in the household.',
    },
    {
      from: 'Adeline',
      to: 'The siblings',
      kind: 'the excluded child and the favoured ones',
      note: 'They enjoy the new house and its pool, a home Adeline did not even know. Her request to be treated like her brothers shows she knows the difference.',
    },
    {
      from: 'Father',
      to: 'C.Y. Tung',
      kind: 'business colleagues',
      note: 'Tung’s question in the lift sets off Father’s pride, which suggests that Father sees his daughter partly through the eyes of men he respects.',
    },
    {
      from: 'Adeline',
      to: 'The chauffeur',
      kind: 'employer’s daughter and employee',
      note: 'His rudeness may mirror the family’s attitude to her, and his remark about only following orders hints at who gives them.',
    },
    {
      from: 'Adeline',
      to: 'Mary',
      kind: 'schoolfriends',
      note: 'Mary belongs to the ordinary, friendly world of school that Adeline dreads leaving.',
    },
    {
      from: 'Adeline',
      to: 'Mother Valentino',
      kind: 'pupil and school authority',
      note: 'The respectful order of the school, where the girls stand to greet her, contrasts with the coldness Adeline meets at home.',
    },
  ],

  compareWith: [
    {
      title: 'From H is for Hawk, Helen Macdonald',
      href: '/igcse/edexcel-lang/anthology/h-is-for-hawk',
      reason:
        'Both are autobiographical accounts of a single charged encounter written in the shadow of a father: Yen Mah’s with a living father whose approval she craves, Macdonald’s, as she meets her hawk for the first time, shaped by grief for a father who has died.',
    },
    {
      title: 'From 127 Hours: Between a Rock and a Hard Place, Aron Ralston',
      href: '/igcse/edexcel-lang/anthology/127-hours',
      reason:
        'Both slow down a short span of time in which a life changes, and both reach for the idea of a dream, but Ralston narrates in the present tense and his crisis is physical where Adeline’s is emotional.',
    },
  ],

  contentGuidance: ['mortality', 'discrimination'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pages 21-23: the prescribed text, read in full. Every quotation, line number and page reference was checked against it, as were the introductory note, the italics at lines 59 and 84 (from the PDF font data) and the acknowledgement naming Penguin, 1999, copyright Adeline Yen Mah 1999',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Language A (4EA1) specification, Issue 7 (August 2025), although the file name says Issue 6: Paper 1 Section A pairs a Part 1 anthology text with an unseen extract, and students are provided with the anthology text in the examination',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Specification%20and%20sample%20assessments/9781446954379-int-gcse-englang-a-iss6-02-02-2023.pdf',
    },
    {
      label:
        'Pearson 4EA1/01 question paper, November 2023: the wording of the anthology language-and-structure question and the comparison question, followed in the exam practice here (tariffs deliberately omitted)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Language-A/2016/Exam-materials/4ea1-01-que-20231108.pdf',
    },
    {
      label:
        'Wikipedia, Adeline Yen Mah: born 30 November 1937 in Tianjin; mother died two weeks after her birth; father Joseph Yen, a businessman; stepmother Jeanne Prosperi, called Niang; London Hospital Medical College, MB BS 1960; anaesthesiologist in California; Falling Leaves (1997); Chinese Cinderella (1999)',
      url: 'https://en.wikipedia.org/wiki/Adeline_Yen_Mah',
    },
    {
      label:
        'Encyclopedia.com, Mah, Adeline Yen 1937-: London Hospital Medical School MB BS 1960; anaesthesiologist in Anaheim, California, 1968-94; Falling Leaves first published in England. It dates the American edition of Chinese Cinderella to 1998, so the guide gives only the anthology’s 1999 Penguin date',
      url: 'https://www.encyclopedia.com/arts/educational-magazines/mah-adeline-yen-1937',
    },
    {
      label:
        'Penguin, Chinese Cinderella (Puffin Clothbound Classics, 25th anniversary edition, 2024): consistent with first publication in 1999',
      url: 'https://www.penguin.co.uk/books/59865/chinese-cinderella-by-mah-adeline-yen/9780241688236',
    },
    {
      label:
        'Wikisource, The Prelude, Book XI: the line Bliss was it in that dawn to be alive, followed by the line on youth as very Heaven',
      url: 'https://en.wikisource.org/wiki/The_Prelude_(Wordsworth)/Book_XI',
    },
    {
      label:
        'Wikisource, Poems by William Wordsworth (1815), Volume 2: French Revolution, as it Appeared to Enthusiasts at its Commencement, which prints the same lines',
      url: 'https://en.wikisource.org/wiki/Page:Poems_by_William_Wordsworth_(1815)_Volume_2.djvu/77',
    },
    {
      label:
        'Wikipedia, The Prelude: published in 1850, after Wordsworth’s death; Books IX to XI on his residence in France; Coleridge’s 1799 letter on those who had lost hope after the failure of the Revolution',
      url: 'https://en.wikipedia.org/wiki/The_Prelude',
    },
    {
      label:
        'Wikipedia, Tung Chao-yung: C. Y. Tung (1912-1982), shipping magnate and founder of the Orient Overseas line, early business years in Tianjin and Shanghai; father of Tung Chee-hwa, Hong Kong’s first Chief Executive',
      url: 'https://en.wikipedia.org/wiki/Tung_Chao-yung',
    },
    {
      label:
        'Wikipedia, Face (sociological concept): mianzi and lian, face as something lost, maintained or enhanced',
      url: 'https://en.wikipedia.org/wiki/Face_(sociological_concept)',
    },
    {
      label:
        'Wikipedia, Mid-Levels: an affluent residential area of Hong Kong Island between Victoria Peak and Central',
      url: 'https://en.wikipedia.org/wiki/Mid-Levels',
    },
    {
      label:
        'Wikipedia, Holy of Holies: the inner sanctuary, entered only by the High Priest, once a year on Yom Kippur',
      url: 'https://en.wikipedia.org/wiki/Holy_of_Holies',
    },
    {
      label:
        'Wikipedia, Sacred Heart Canossian College: a Catholic girls’ school in Hong Kong founded in 1860 by the Canossian sisters; lists Adeline Yen Mah among its alumnae',
      url: 'https://en.wikipedia.org/wiki/Sacred_Heart_Canossian_College',
    },
  ],
}
