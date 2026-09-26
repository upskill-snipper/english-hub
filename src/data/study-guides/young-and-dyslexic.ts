import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Young and dyslexic? You've got it going on, Benjamin Zephaniah (2015). A
 * supplement: the anthology page at /igcse/edexcel-lang/anthology/young-and-dyslexic
 * keeps its context, themes, structure and vocabulary, and this file adds the
 * overview, the people in the article, key quotations, passages, language
 * analysis, exam practice and a model answer.
 *
 * Every quotation was checked word for word against the prescribed text, the
 * Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026),
 * pages 12-13, read on 25 September 2026 from Pearson's own PDF. Line numbers are
 * the booklet's printed ones, which count from the first line of the article and
 * exclude the headnote. A second, independent copy of the article agreed on every
 * phrase checked.
 *
 * TWO FACTS ON THE PAGE ABOVE ARE WRONG, and this file does not repeat them. The
 * page says the article appeared in The Guardian in 2017 and that Zephaniah died
 * in January 2023. The anthology's headnote and acknowledgements give Friday
 * 2 October 2015; The Bookseller and Brunel University give his death as
 * 7 December 2023.
 *
 * FACT-CHECKED against the same PDF on 25 September 2026. Every quotation and
 * line number held; the corrections were to the prose around them. "Shut up,
 * stupid boy" is four words, not three, and "I just had self-belief" four, not
 * five. "Do I need an operation?" was a real question, answered by the teacher,
 * so it is no longer called rhetorical or a joke in his own words. The football
 * teacher suggests he go outside rather than sending him; the boy only thinks
 * "Oh great"; and the overview no longer blames the teachers for the want of
 * compassion the article lays on the system.
 *
 * SECOND FACT-CHECK, 26 September 2026, against a fresh download of the same
 * PDF. Quotations, line numbers and the 1,318-word count all held. Fixed: "We
 * are the architects" sits on line 2 alone, not lines 1-2; "Shut up, stupid
 * boy" was called "reported without comment" when lines 15-16 comment on it;
 * the "question" spelling is replaced by a question mark, not a gap (line 58);
 * the article calls "the way we read and write" unnatural, not "alphabets";
 * and "he uses questions for comedy, not debate" ignored the design-fault and
 * savages questions, which do argue.
 *
 * COPYRIGHT. The article is 1,318 words, so under fair-dealing.ts the page may
 * quote a tenth of it in total. Quotations are reused across sections so that
 * the distinct words quoted stay inside that share; longer passages are pointed
 * to by line number and summarised.
 */
export const guide: StudyGuide = {
  slug: 'young-and-dyslexic',
  title: "Young and dyslexic? You've got it going on",
  author: 'Benjamin Zephaniah',
  form: 'non-fiction',
  scope:
    'The article as printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 1, pages 12-13: a short headnote, then twenty paragraphs across 88 numbered lines. Every line reference on this page is to that printing, so check that your copy is the same issue.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Benjamin Zephaniah 2015, as author; the anthology itself prints no copyright line for this text. Published in The Guardian online on 2 October 2015, adapted from his contribution to Creative, Successful, Dyslexic: 23 High Achievers Share Their Stories, edited by Margaret Rooke (Jessica Kingsley Publishers, 2015); as printed in the Pearson Edexcel International GCSE English Anthology, where it is reproduced by permission of Jessica Kingsley Publishers. Quoted in short phrases for criticism and review.',
  },
  workLength: {
    words: 1318,
    basis:
      'Counted from the anthology text itself (Issue 8, pages 12-13, lines 1-88), excluding the title and the headnote, with each hyphenated word counted once. The validator’s own counter, which splits hyphenated words, gives 1,323; the lower figure is recorded.',
  },

  native: {
    context: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
    themes: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
    structureForm: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
    vocabulary: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
  },

  overview: {
    summary: [
      'Benjamin Zephaniah, the poet, novelist and university professor, writes in the first person about growing up dyslexic at a time when teachers did not know what dyslexia was. The anthology’s headnote says the article was published in The Guardian online on Friday 2 October 2015, and that it is adapted from his contribution to Creative, Successful, Dyslexic (Jessica Kingsley, 2015), a collection edited by Margaret Rooke in which twenty-three high achievers tell their stories. It is a personal essay written in a speaking voice, and in its final paragraphs it turns to address young dyslexic readers and their parents directly.',
      'It moves broadly through his life. After a two-sentence opening that states the argument before any story is told, he describes schools that lacked compassion and a run of teachers: one who calls him stupid for asking whether sleep is a design fault, one who speaks about Africa in racist terms and is outraged when he challenges her, and one who tells him kindly that not everyone can be intelligent and suggests he go outside and play football. He is expelled from his last school at 13, admits taking revenge on a teacher, and spends time in borstal. The statistics, he says, predicted prison for someone like him, yet he insists he never thought he was stupid. His girlfriend writes down the poems for his first book, and at 21 an adult education teacher tells him he is dyslexic.',
      'The second half moves into the present. He still has to stop and think, and sometimes draw something, when he writes a word like knot, and by the time of writing he is professor of poetry and creative writing at Brunel University, teaching students who are officially more educated than he is. Then he speaks to the reader: anyone who cannot understand dyslexia is the one with the problem, being dyslexic is natural and it is the way we read and write that is unnatural, and dyslexia is not a measure of intelligence. He ends with the children who come up to him to say that they are dyslexic too.',
      'The obvious reading is that this is an inspirational story: a boy written off by school becomes a professor. That is true, but it undersells the article. The more convincing reading is that it is an argument about where the problem lies. Again and again Zephaniah moves the fault away from himself: to an education system without compassion, to teachers who took difficulty with writing for a lack of intelligence, to people who cannot understand dyslexia, and finally to written language itself. His success is the evidence, not the point. A less comfortable reading notices what he chooses to leave in, the revenge, the borstal and the prisoners he regards as no less able than himself. He does not pretend that the labels did no harm; he argues that they were wrong.',
    ],
  },

  characters: [
    {
      name: 'Benjamin Zephaniah',
      role: 'The writer and first-person voice: performance poet, novelist and professor (1958-2023)',
      body: 'Born in Birmingham in 1958, he grew up in Handsworth. His first book of poems, Pen Rhythm, came out in 1980, and he later wrote novels for teenagers, among them Face (1999) and Refugee Boy (2001). He refused an OBE in 2003, took up his first academic post at Brunel University in 2011, and died on 7 December 2023, aged 65. In the article he presents two selves: the boy who argued with teachers and was expelled, and the adult who can now name what was done to him. The gap between them is his method. As a boy he could only think a sarcastic “Oh great” at the football teacher’s advice; only the adult calls it “stereotyping”. He is also candid about weakness, admitting revenge, borstal and the spelling that still stops him, which makes his confidence easier to believe.',
    },
    {
      name: 'The teachers',
      role: 'The adults who taught him as a child (lines 3-31)',
      body: 'He is careful to say that he does not look back in anger, and that teachers who wanted to treat pupils as individuals were not allowed to. Then he lets several of them speak. One calls him stupid for a question about sleep; one talks about Africa in terms he challenges; one tells him not everyone can be intelligent and suggests he go outside and play football; and one, the teacher whose car he took in revenge, told the class that the Nazis were not that bad. Quoting them is his sharpest tactic: he rarely condemns them in his own words, because their words do it for him. One reading is that the opening forgiveness is sincere; another is that it makes the portraits that follow harder to dismiss as a grudge. Both can be true.',
    },
    {
      name: 'His sister',
      role: 'Wrote down some of his poems when he was 10 or 11 (lines 24-25)',
      body: 'She appears in a single sentence, but she matters. Before any school recognised his ability, his sister was writing down the poems he already had in his head. She is the first of the people in the article who act as his scribe, and the first sign that his difficulty was with the mechanics of writing, not with language or ideas.',
    },
    {
      name: 'His girlfriend',
      role: 'Wrote down the poems for his first book (lines 48-50)',
      body: 'He told her his poems and she wrote them down, and the book took off, especially within the black community. With her, the help his sister gave becomes a career. The same paragraph records his phonetic spellings, such as “wid luv”: readers did not see dyslexic poems, they assumed he was writing phonetically. The same spelling a school would have marked wrong is received by an audience as a voice.',
    },
    {
      name: 'The adult education teacher',
      role: 'Tells him at 21 that he is dyslexic (lines 51-54)',
      body: 'The only teacher in the article who explains rather than judges. She names his dyslexia, then explains what it means, and his response moves from asking whether he needs an operation to relief that there is a reason for his difficulty. She is the structural opposite of the teachers of his childhood: their labels closed things down, and hers opens them up. It is worth noticing that he meets her as an adult who has chosen to go and learn, not as a child sent to school.',
    },
    {
      name: 'People in prison',
      role: 'The people he watched in borstal and the prisoners he later visits (lines 32-44)',
      body: 'In borstal he watched people he did not want to be like, and seeing one man who was always hunched over, he taught himself to sit up straight. Later, visiting prisons, he meets men and women he regards as every bit as intelligent and capable as he is. The difference, he says, is that opportunities opened for him while they missed theirs, did not notice them or did not take them. This is the most serious part of the article. It refuses the comfortable idea that prisoners are a different kind of person, and it holds two explanations side by side: luck, in the opportunities that came to him, and effort, in the fears he says must be conquered.',
    },
    {
      name: 'His students at Brunel',
      role: 'The university students he teaches as professor of poetry and creative writing (lines 61-65)',
      body: 'They have more formal education than he has, as he points out, and that reversal is the point: the boy told that not everyone can be intelligent now teaches people with better qualifications. What he tells them is his theory of education in small. A good memory can earn the right grade, but without “passion, creativity, individuality” the course is pointless. Those three nouns name exactly what his own teachers failed to value.',
    },
    {
      name: 'Young dyslexic readers',
      role: 'The reader addressed as “you” from line 73, the parents addressed at line 79, and the children who tell him they are dyslexic too (lines 84-88)',
      body: 'They are the article’s real audience. He speaks to them in the second person from line 73, and to the parent of a dyslexic child at line 79. In the last paragraph they become characters, children who come up to him and say that they are dyslexic, whom he encourages to treat it as an advantage. He admits that he had no such example when he was a child, which quietly explains why he is writing at all.',
    },
  ],

  keyQuotes: [
    {
      text: 'We are the architects, we are the designers.',
      where: 'Zephaniah, line 2 (page 12); repeated to children at lines 85-86 (page 13)',
      analysis:
        'The opening claims a shared identity with the pronoun “we”, and picks two professions that plan and build rather than read and write. The metaphor answers the school’s narrow idea of intelligence before the article has even described it: dyslexic people are cast as the makers of the world, not failures within it. Because he repeats the words to children in the final paragraph, the article ends where it began, and the opening turns out to be advice he now hands on.',
    },
    {
      text: 'no compassion, no understanding and no humanity',
      where: 'Zephaniah on the education system of his childhood, lines 4-5 (page 12)',
      analysis:
        'A tricolon built on the repeated “no”, and arguably each noun is larger than the last: a feeling, then knowledge, then what makes us human at all. The rhythm is a performer’s, made to land when heard aloud. The criticism is aimed at the system of that time rather than at individuals, and he says straight afterwards that he is not angry with his teachers, which makes the judgement sound considered rather than bitter.',
    },
    {
      text: 'the past is a different kind of country',
      where: 'Zephaniah, lines 7-8 (page 12)',
      analysis:
        'A metaphor that seems to echo the opening of L. P. Hartley’s novel The Go-Between (1953), which calls the past a foreign country where people behave differently. Whether or not the echo is intended, the effect is generous: the cruelty of his schools is placed in another time, with other rules. That generosity is strategic. A reader who sees him being fair is more likely to trust the harsh examples that follow.',
    },
    {
      text: 'Shut up, stupid boy.',
      where: 'A teacher, line 14 (page 12)',
      analysis:
        'Four blunt words of command and insult, given as direct speech, so the reader hears them before any comment from Zephaniah. The teacher does answer his question about sleep, with the counter-argument that bad people would do more bad, but she leads with a label. Zephaniah even concedes that her point was fair, which leaves the insult as the only thing to object to. The problem was never her answer but the word “stupid”, used on a child for thinking.',
    },
    {
      text: 'We can’t all be intelligent',
      where: 'A teacher, line 21 (page 12)',
      analysis:
        'Said to a boy who had asked for help with writing, it sounds like kindness and works as dismissal. The inclusive “we” pretends to share the burden while placing him outside the intelligent group, and the offer of a future in sport is, he later sees, “stereotyping”. One reading is that it is a racial stereotype of a black boy as an athlete rather than a thinker, though he does not say which kind he means. It is useful in an exam because it shows prejudice in polite language.',
    },
    {
      text: 'If you look at the statistics, I should be in prison',
      where: 'Zephaniah, line 37 (page 12)',
      analysis:
        'The conditional opens a list of everything that counted against him: his race, the part of town he grew up in, a family that fell apart, trouble with the police, being unable to read and write, no qualifications, and dyslexia added last as the final weight. He invokes statistics without giving a single number, because the point is not the figures but the prediction they make about a person. The sentence before pairs prisons with architects, the two futures the article keeps in view, and the next sentence answers the prediction: staying out of prison, he says, is about conquering your fears and finding your path.',
    },
    {
      text: 'I’m not stupid – you’re the one who’s stupid.',
      where: 'Zephaniah, line 47 (page 13)',
      analysis:
        'The word the teachers used on him is turned round and handed back. The context matters: he imagines someone who reads and writes easily telling him that black people are “savages”, so the reversal links literacy and racism, and shows that being able to read is no protection against ignorance. The mirrored structure gives the retort the neatness of a punchline, and he follows it with one of the plainest sentences in the article, “I just had self-belief”.',
    },
    {
      text: 'Do I need an operation?',
      where: 'Zephaniah, on being told he is dyslexic, line 52 (page 13)',
      analysis:
        'At 21, told he is dyslexic, he asks whether he needs surgery, as if the word named an illness. Retold by the adult writer, the question is comic, and the humour is at his own expense, but it makes a serious point: the word seems never to have been explained to him, so the label arrived sounding like a disease. The teacher’s explanation, and his relief that there is a reason, show how much a diagnosis given with understanding can change.',
    },
    {
      text: 'If someone can’t understand dyslexia it’s their problem.',
      where: 'Zephaniah, line 70 (page 13)',
      analysis:
        'The article’s argument in one sentence: the burden of adjusting moves from the dyslexic person to everyone else. He makes the comparison with racism at once, saying that when someone oppresses him because of his race he does not sit down and think “How can I become white?” The parallel is bold. It treats dyslexia like race, as part of who a person is rather than a fault to be fixed, and it places the problem with whoever cannot accept it.',
    },
    {
      text: 'Dyslexia is not a measure of intelligence',
      where: 'Zephaniah, addressing parents, line 80 (page 13)',
      analysis:
        'One of the most formal sentences in a chatty article, flat and declarative, like a fact from a leaflet. After nearly eighty lines of evidence from his own life he states the conclusion as a general truth, and addresses it to parents, the adults who might otherwise repeat what his teachers did. It reads as a direct answer to the football teacher, and it is followed at once by the bolder claim that a parent may be raising a genius.',
    },
    {
      text: 'Us dyslexic people, we’ve got it going on',
      where: 'Zephaniah, speaking to children, line 85 (page 13)',
      analysis:
        'The words that give the article its title, and they are informal: nonstandard “Us” where formal grammar wants “We”, and an idiom that means, roughly, to have real appeal and an air of success. Putting this in the mouth of a professor is deliberate. It speaks to young readers in their own register, and it shows the confidence he is recommending, since he does not tidy his grammar for anyone.',
    },
    {
      text: 'Bloody non-dyslexics … who do they think they are?',
      where:
        'Zephaniah, speaking to children, lines 87-88 (page 13), the last words of the article',
      analysis:
        'A joke, a mild swear word and a rhetorical question, and together they flip the whole hierarchy: now the non-dyslexic majority are the odd ones out, spoken of the way his teachers spoke of him. It is not a serious insult, and a strong answer says so. The humour lets him end on pride rather than pity, and the ellipsis marks the pause of a performer timing a punchline.',
    },
  ],

  extracts: [
    {
      title: 'Three teachers, three verdicts',
      where: 'Paragraphs 3-6, lines 9-23 (page 12)',
      pointer:
        'Lines 9-23 on page 12: from the paragraph that begins with his ideas contradicting the teachers, to the sentence in which he realises, as an adult, that he was being stereotyped.',
      summary:
        'Zephaniah tells three short anecdotes across four paragraphs. He asks a teacher whether sleep is a design fault, since good people could do more good if they stayed awake, and she calls him stupid. He challenges a teacher who talks about Africa in racist terms, and is told off for daring to question her. When he asks for help with writing, a third teacher tells him gently that not everyone can be intelligent and suggests he go outside and play football. Each time an adult dismisses the child, twice for thinking and once for asking for help.',
      annotations: [
        {
          phrase: 'Shut up, stupid boy.',
          note: 'The reply is given as direct speech, so the reader hears the insult as a child heard it. Its bluntness contrasts with the long, curious question he asked, which makes the adult seem the less thoughtful of the two.',
        },
        {
          phrase: 'I was just being creative',
          note: 'The adult narrator names what the teacher could not see. The word “just” is quietly defensive, as if he still has to insist that his question was innocent.',
        },
        {
          phrase: 'We can’t all be intelligent',
          note: 'Politeness hides the judgement. The sentence sounds sympathetic but settles in five words that he is not one of the intelligent ones, and the boy’s sarcastic “Oh great” shows he felt it.',
        },
        {
          phrase: 'stereotyping me',
          note: 'The one point in the passage where the adult gives the wrong its name. The shift into the present tense shows the adult looking back and understanding what the boy only felt.',
        },
      ],
      question:
        'How does Zephaniah use the teachers’ own words to present his experience of school in lines 9-23?',
    },
    {
      title: 'The statistics and the choice',
      where: 'Paragraphs 8-11, lines 28-47 (pages 12-13)',
      pointer:
        'From line 28 on page 12, where he is thrown out of his last school at 13, to line 47 on page 13, where he says that he simply had self-belief.',
      summary:
        'He describes being expelled at 13, partly for arguing with teachers and partly for fighting, and admits taking revenge on a teacher who, he remembers, told the class the Nazis were not that bad. In borstal he learned by watching people he did not want to become. He then lists every factor that should have sent him to prison, reflects that the prisoners he meets are no less able than he is, and insists that he never believed he was stupid.',
      annotations: [
        {
          phrase: 'If you look at the statistics, I should be in prison',
          note: 'A conditional that sets up a list of disadvantages with dyslexia placed last, so the reader feels the weight build before the next sentence answers the prediction with what kept him out of prison.',
        },
        {
          phrase: 'I’m not stupid – you’re the one who’s stupid.',
          note: 'A reversal built as antithesis: the teachers’ insult is turned on a new target, someone who reads well yet holds racist views, which separates being literate from being intelligent.',
        },
        {
          phrase: 'I just had self-belief',
          note: 'Four plain words close the paragraph. The short sentence makes self-belief sound like something he simply had, rather than an achievement, and so something a reader might have too.',
        },
      ],
      question:
        'How does Zephaniah structure lines 28-47 to move from his worst moments to a statement of self-belief?',
    },
    {
      title: 'Whose problem is it?',
      where: 'Paragraphs 16-20, lines 70-88 (page 13)',
      pointer:
        'Lines 70-88 on page 13: the last five paragraphs, from the sentence that calls dyslexia other people’s problem to the joke about non-dyslexics that ends the article.',
      summary:
        'The article turns from his life to the reader. He says that anyone who cannot understand dyslexia is the one with the problem, compares this with racism, and tells a dyslexic reader that if something is holding them back, it is not them. He argues that being dyslexic is natural and that the way we read and write is what is unnatural, contrasting pictorial Chinese characters with letters that stand for sounds. He tells parents that dyslexia can make a child creative, and ends with the children who tell him proudly that they are dyslexic too.',
      annotations: [
        {
          phrase: 'it’s their problem',
          note: 'A short, flat clause that lifts responsibility off the dyslexic reader. The possessive “their” is emphatic, as if he is handing the problem back across a table.',
        },
        {
          phrase: 'a squiggle that represents a sound',
          note: 'The informal noun “squiggle” makes alphabetic writing sound arbitrary and childish, deliberately belittling the skill his schools treated as the measure of intelligence.',
        },
        {
          phrase: 'creativity muscle',
          note: 'A metaphor from exercise: finding a way round a missing word is training, so the difficulty becomes what builds strength. The text puts the phrase in quotation marks, showing he knows it is a coinage.',
        },
        {
          phrase: 'Us dyslexic people, we’ve got it going on',
          note: 'Slang in the mouth of a professor. The nonstandard grammar and the idiom speak to young readers directly, and the phrase supplies the article’s title.',
        },
        {
          phrase: 'Bloody non-dyslexics',
          note: 'The mild swear word and the joke reverse the hierarchy, making the majority the outsiders, and let the article close on laughter and pride rather than pity.',
        },
      ],
      question:
        'How does Zephaniah use language in lines 70-88 to persuade young dyslexic readers to see themselves differently?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Reported direct speech',
      example:
        'The teacher’s “Shut up, stupid boy.” (line 14) and the football teacher’s “We can’t all be intelligent” (line 21)',
      effect:
        'Zephaniah lets the adults speak for themselves and keeps his own verdicts short: that the first teacher called him stupid for even thinking, and that the football teacher was stereotyping him. The reader judges them, which is more persuasive than being told what to think, and the gap between their confident words and his curious questions makes the adults look small. It also suits a performance poet: the article is full of voices, like a story told aloud.',
    },
    {
      technique: 'Tricolon',
      example:
        '“no compassion, no understanding and no humanity” (lines 4-5), and “passion, creativity, individuality” (lines 64-65)',
      effect:
        'Two lists of three frame his view of education. The first names what his schools lacked; the second names what he now asks of his own students. Set side by side, they show the argument moving from complaint to a positive alternative, and the rhythm of three makes each list memorable when spoken.',
    },
    {
      technique: 'Conditional sentence and cumulative list',
      example:
        '“If you look at the statistics, I should be in prison” (line 37), followed by a list of disadvantages that ends with dyslexia (lines 37-40)',
      effect:
        'The list piles up so that the reader feels the pressure of the prediction, and placing dyslexia last, as one burden too many, makes it the final weight. Then the next sentence turns from the prediction to what he thinks keeps a person out of prison. The structure of the sentence mirrors his life: every factor pointed one way, and he went another.',
    },
    {
      technique: 'Reversal of a label (antithesis)',
      example:
        '“I’m not stupid – you’re the one who’s stupid.” (line 47) and “If someone can’t understand dyslexia it’s their problem.” (line 70)',
      effect:
        'The article’s key move is to take the words used against him and turn them round. “Stupid”, the teachers’ word, is handed back to a person with racist views; “problem”, the word usually attached to the dyslexic child, is handed to the people who cannot understand dyslexia. The balanced sentences make each reversal feel like logic rather than anger.',
    },
    {
      technique: 'Questions and humour',
      example:
        '“Do I need an operation?” (line 52), a real question retold with hindsight, and the rhetorical “Bloody non-dyslexics … who do they think they are?” (lines 87-88)',
      effect:
        'Elsewhere his questions argue, as when the boy asks whether sleep is a design fault or challenges the teacher who talks of savages, but these two work as comedy rather than debate. The first, retold by the adult, laughs at his younger self’s confusion; the second laughs at the majority. Humour keeps the article clear of self-pity, and it models the confidence he wants readers to feel: someone who can joke about dyslexia is no longer ashamed of it.',
    },
    {
      technique: 'Metaphor',
      example:
        '“We are the architects, we are the designers.” (line 2) and the “creativity muscle” (line 83)',
      effect:
        'Both metaphors recast dyslexia as a strength. Architects and designers shape the world, and a muscle grows with effort, so the struggle to find a word becomes exercise. Neither metaphor is about reading, which is exactly the point: he moves the measure of ability away from the page.',
    },
    {
      technique: 'Direct address and gentle imperatives',
      example:
        'From line 73 the article speaks to “you”: a dyslexic reader is told to remember “it’s not you”, and a parent is told not to think of dyslexia as a defect (lines 79-80)',
      effect:
        'The shift from I to you turns memoir into advice. The imperatives are closer to reassurance than to command, and they come only after he has earned the right to advise by telling his own story. A reader who has followed his life is now placed inside it.',
    },
    {
      technique: 'Informal and nonstandard register',
      example:
        'The sarcastic “Oh great” (line 22), the phonetic spelling “wid luv” (line 49) and the slang of “Us dyslexic people, we’ve got it going on” (line 85)',
      effect:
        'The informal voice is a choice, not a lapse. It sounds like a person talking, which suits a writer who performed his poetry and who says he never reads his own novels aloud in public. It also carries the argument: nonstandard English, like phonetic spelling, is shown to communicate perfectly well, and to be enjoyed by readers.',
    },
    {
      technique: 'Analogy',
      example:
        'Chinese characters that look like what they mean, set against the alphabet’s “a squiggle that represents a sound” (lines 75-78)',
      effect:
        'He argues that dyslexia is natural and that alphabetic writing is the strange invention. The comparison makes the reader see reading as a learned technique rather than a measure of intelligence. Whether or not it is a full account of how Chinese writing works, the analogy persuades because it is concrete and visual: a picture of a house against a squiggle.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Zephaniah present his experiences of school in lines 3-35 of Young and dyslexic? You should refer closely to the text, using brief quotations, and comment on his use of language and structure.',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          'Open with an argument, not a summary: for example, that he presents school as a place where curiosity was punished, and that he lets the teachers condemn themselves.',
          'Start with his even-handed opening (lines 3-8). He blames the system of that time rather than individuals and says he is not angry. Explain why this makes what follows more believable.',
          'Analyse the reported speech at lines 14 and 21. Quote a few words, name the technique, and explain how letting the teachers speak does his criticising for him.',
          'Show the double perspective: the boy who reacts at the time and the adult who understands later, marked by the move into the present tense at line 23.',
          'Discuss the Africa anecdote (lines 17-19) and what it shows about racism in his schooling, keeping your comments factual and precise.',
          'Deal honestly with the expulsion and revenge (lines 28-31). Consider why he includes them, and what placing the revenge beside the teacher’s remark about the Nazis invites the reader to weigh.',
          'Finish on structure: the school section is a run of short anecdotes, each a small scene ending in a verdict, and it closes in borstal (lines 32-35) with a lesson he taught himself by watching, not one a teacher gave him.',
        ],
      },
      {
        question:
          'Compare how the writers of Young and dyslexic? and Chinese Cinderella present young people being judged by the adults around them. In the exam your second text will be an unseen passage, so use this pairing to practise the method.',
        skill: 'Comparison of two texts: ideas, perspectives and methods',
        guidance: [
          'Open with a comparative argument: both writers show a young person’s worth being judged by an adult, but Zephaniah rejects the verdicts, while Adeline Yen Mah, in the anthology extract, stays silent in front of her father.',
          'Compare the judgements. His teachers call him stupid and steer him towards sport; her father is proud of her writing prize but scoffs at her wish to be a writer and decides that she will study medicine.',
          'Compare the methods. Both use reported direct speech to let the adults reveal themselves. Zephaniah looks back from adulthood with humour; Mah narrates her hopes and fears as she felt them in the moment.',
          'Compare the responses. His ideas contradicted his teachers’, while she chooses not to contradict her father. Consider what each writer wants the reader to feel about that response.',
          'Compare the endings and purposes. He closes with advice to young readers; the extract ends with her accepting her father’s plan. Keep every paragraph about both texts, and use comparative connectives.',
        ],
      },
      {
        question:
          'How does Zephaniah present himself in Young and dyslexic? You should consider his use of language and structure across the whole article.',
        skill: 'Whole-text analysis: the writer’s presentation of himself',
        guidance: [
          'Identify the persona: confident, funny and plain-spoken, and honest about a difficult youth. A strong line of argument is that he presents himself as evidence, not as a hero.',
          'Analyse his candour. He admits revenge, borstal and his present-day difficulty with words like knot and question (lines 28-35, 55-59). Explain how admitting weakness builds the reader’s trust.',
          'Analyse his self-belief: the reversal at line 47 and the short sentence that follows. Evaluate whether it is convincing that he never thought he was stupid, after all he was told.',
          'Explore his status now: a professor whose students have more formal education than he has (lines 61-65), and a performer who asks an actor to read his novels at festivals (lines 66-69).',
          'End with his role for young readers (lines 84-88). He becomes the adult he says he did not have as a child; link this to the purpose of the whole article.',
        ],
      },
    ],
    tips: [
      'Use the line numbers. The anthology numbers every fifth line, and locating a moment precisely, such as the diagnosis at lines 51-54, shows control of the whole text.',
      'Keep the two Zephaniahs apart: the boy who reacted and the adult who explains. Many of his best effects come from that gap, and naming it lifts an answer above paraphrase.',
      'Do not treat the humour as decoration. The retold question about an operation and the closing swipe at non-dyslexics are part of the argument, because laughing at a label takes away its power.',
      'Handle race directly and factually. The Africa lesson, the retort at line 47 and the comparison with racism at lines 70-72 are central, not a side issue: an answer that leaves them out misses half his argument about labels.',
      'Quote little and analyse a lot. His sentences are short, so a word or two is often enough: “stupid”, “squiggle” and “architects” each carry an argument.',
      'Remember the form. It is a personal article in a speaking voice, adapted from his contribution to a book and published online by a newspaper, so comment on how it is built to reach a general reader and to be heard as a voice.',
      'Be precise about his claim. He does not say dyslexia is easy: he still stops at words and never reads his novels in public. He says it is not a measure of intelligence, and the difference matters.',
      'For comparison with an unseen text, have three flexible points ready: being labelled by others, turning a judgement round, and turning personal experience into advice.',
    ],
  },

  modelAnswer: {
    question:
      'How does Zephaniah present his experiences of school in lines 3-35 of Young and dyslexic? You should refer closely to the text, using brief quotations, and comment on his use of language and structure.',
    paragraph:
      'Zephaniah presents his schooling as a place where curiosity was punished, and his main method is to let the teachers condemn themselves. When he asks whether sleep is a design fault, the reply is reported as direct speech: “Shut up, stupid boy.” The four clipped words contrast sharply with the long, eager question that provoked them, so the adult sounds less thoughtful than the child. His own comment is brief and restrained, “I was just being creative”, and “just” suggests he still has to defend an innocent question. The football teacher is more polite but no kinder. “We can’t all be intelligent” uses an inclusive “we” to soften what is really an exclusion, and the boy’s sarcastic “Oh great” shows that he felt the insult before he could name it. Only at line 23 does the adult voice supply the name, “stereotyping”, and the shift into the present tense marks the distance between the boy who suffered and the man who understands. The structure matters too. Zephaniah has already said that he is not angry with his teachers, and that restraint makes the anecdotes more damning, because he appears to be reporting rather than settling scores. It could be argued that the portraits are selective, but the effect survives that objection: the reader is left to reach the verdict he declines to state.',
    commentary: [
      'It opens with an argument about how school is presented, not a summary, and every later sentence supports that argument.',
      'Quotations are short and embedded, and each is followed by analysis of particular words, such as “just” and “we”, rather than general comment.',
      'Techniques are named only where they explain an effect: reported speech, contrast, the inclusive pronoun and the change of tense.',
      'It deals with structure as well as language, linking the anecdotes back to his earlier refusal to blame the teachers.',
      'It raises an alternative view and shows why the effect survives it, which is what separates an argued answer from a list of features.',
    ],
  },

  timeline: [
    {
      where: 'Paragraph 1, lines 1-2 (page 12)',
      title: 'The verdict first',
      summary:
        'Before telling any story, Zephaniah states his conclusion: he suffered as a child, but learned to use dyslexia to see the world more creatively. The article begins where his life has ended up.',
      setting: 'The present, in the writer’s own voice',
      who: ['Benjamin Zephaniah'],
      quote: 'We are the architects, we are the designers.',
      themes: ['Reframing dyslexia', 'Creativity and alternative ability'],
      tension: 2,
      significance:
        'It works like a newspaper standfirst, and the final paragraph repeats its second sentence, so the whole article is framed by this claim.',
    },
    {
      where: 'Paragraph 2, lines 3-8 (page 12)',
      title: 'A generation that did not know',
      summary:
        'He describes an education system of that time without compassion or understanding, but says he is not angry, because teachers who wanted to treat pupils as individuals were not allowed to.',
      setting: 'His schools, looked back on from adulthood',
      who: ['Benjamin Zephaniah', 'The teachers'],
      quote: 'no compassion, no understanding and no humanity',
      themes: ['School and the education system'],
      tension: 2,
      significance:
        'His fairness here earns the reader’s trust for the harsh portraits that follow.',
    },
    {
      where: 'Paragraphs 3-4, lines 9-16 (page 12)',
      title: 'The design fault',
      summary:
        'He asks a teacher whether sleep is a design fault, since good people could do more good if they stayed awake. She replies that bad people would do more bad, and calls him stupid.',
      setting: 'A classroom',
      who: ['Benjamin Zephaniah', 'The teachers'],
      quote: 'Shut up, stupid boy.',
      themes: [
        'School and the education system',
        'Identity and self-worth',
        'Creativity and alternative ability',
      ],
      tension: 4,
      significance:
        'The first label, “stupid”, is the word the whole article sets out to take back.',
    },
    {
      where: 'Paragraph 5, lines 17-19 (page 12)',
      title: 'Challenging a racist lesson',
      summary:
        'A teacher talking about Africa refers to the “local savages”. The boy challenges her right to call anyone that, she is outraged that he dares to question her, and he gets into trouble.',
      setting: 'A classroom',
      who: ['Benjamin Zephaniah', 'The teachers'],
      themes: ['Race and prejudice', 'School and the education system'],
      tension: 4,
      significance:
        'It shows racism as part of what he was taught, and his challenge to it as the thing he was punished for.',
    },
    {
      where: 'Paragraph 6, lines 20-23 (page 12)',
      title: 'Go and play football',
      summary:
        'When he asks for help with writing, a teacher tells him that not everyone can be intelligent and that he will make a good sportsperson instead. Only as an adult does he see this as stereotyping.',
      setting: 'A classroom',
      who: ['Benjamin Zephaniah', 'The teachers'],
      quote: 'We can’t all be intelligent',
      themes: ['School and the education system', 'Identity and self-worth'],
      tension: 3,
      significance:
        'The move into the present tense shows the adult narrator understanding what the child could only feel.',
    },
    {
      where: 'Paragraph 7, lines 24-27 (page 12)',
      title: 'Poems in his head',
      summary:
        'At 10 or 11 he already had poems in his head, and his sister wrote some of them down. At 13 reading was still such hard work that he gave up, thinking that reading the value of a banknote was enough.',
      setting: 'His childhood, between about 10 and 13',
      who: ['Benjamin Zephaniah', 'His sister'],
      themes: ['Creativity and alternative ability', 'Identity and self-worth'],
      tension: 2,
      significance:
        'It separates his gift for language from his difficulty with the mechanics of writing, the distinction the whole article depends on.',
    },
    {
      where: 'Paragraph 8, lines 28-35 (page 12)',
      title: 'Expelled, and borstal',
      summary:
        'Thrown out of his last school at 13 for arguing and fighting, he admits taking revenge on a teacher who, he remembers, told the class the Nazis were not that bad. In borstal he learned by watching people he did not want to become.',
      setting: 'His last school, then borstal',
      who: ['Benjamin Zephaniah', 'The teachers', 'People in prison'],
      themes: ['School and the education system', 'Identity and self-worth'],
      tension: 5,
      significance:
        'His honesty about his worst moments makes the success that follows more credible, not less.',
    },
    {
      where: 'Paragraphs 9-10, lines 36-44 (pages 12-13)',
      title: 'The statistics say prison',
      summary:
        'He notes that many prisoners and many architects are dyslexic, lists everything that should have led him to prison, and reflects that the prisoners he meets are as able as he is.',
      setting: 'His adult reflections, and the prisons he visits',
      who: ['Benjamin Zephaniah', 'People in prison'],
      quote: 'If you look at the statistics, I should be in prison',
      themes: ['Identity and self-worth', 'Race and prejudice', 'Reframing dyslexia'],
      tension: 4,
      significance:
        'The turning point: he names the future the labels predicted, and begins to explain why it did not happen.',
    },
    {
      where: 'Paragraphs 11-12, lines 45-50 (page 13)',
      title: 'Self-belief and a first book',
      summary:
        'He says he never thought he was stupid, and turns the word back on a racist who reads well. His girlfriend writes down the poems for his first book, which takes off, and readers take his spelling as phonetic style.',
      setting: 'The start of his career as a poet',
      who: ['Benjamin Zephaniah', 'His girlfriend'],
      quote: 'I’m not stupid – you’re the one who’s stupid.',
      themes: [
        'Identity and self-worth',
        'Race and prejudice',
        'Creativity and alternative ability',
      ],
      tension: 3,
      significance:
        'The label is reversed, and the difficulty that schools punished becomes a voice that readers enjoy.',
    },
    {
      where: 'Paragraph 13, lines 51-54 (page 13)',
      title: 'The diagnosis at 21',
      summary:
        'At an adult education class in London a teacher tells him he is dyslexic. He asks whether he needs an operation, and when she explains what it means, he is relieved that there is a reason.',
      setting: 'An adult education class in London',
      who: ['Benjamin Zephaniah', 'The adult education teacher'],
      quote: 'Do I need an operation?',
      themes: ['Reframing dyslexia', 'School and the education system'],
      tension: 3,
      significance:
        'The first teacher who explains rather than labels, and the first time his difficulty has a name.',
    },
    {
      where: 'Paragraphs 14-15, lines 55-69 (page 13)',
      title: 'The professor who still stops at a word',
      summary:
        'He lists his poetry, novels, plays and music, but admits he still has to stop and think how to write a word such as knot, and puts a question mark in its place when he cannot spell question. As a Brunel professor he tells students that a good memory without passion is pointless.',
      setting: 'His working life: the university, festivals and the page',
      who: ['Benjamin Zephaniah', 'His students at Brunel'],
      quote: 'passion, creativity, individuality',
      themes: ['Creativity and alternative ability', 'Reframing dyslexia'],
      tension: 2,
      significance:
        'Success and difficulty sit side by side, which is his evidence that dyslexia is not a measure of intelligence.',
    },
    {
      where: 'Paragraphs 16-18, lines 70-78 (page 13)',
      title: 'Their problem, not yours',
      summary:
        'He argues that people who cannot understand dyslexia are the ones with the problem, compares this with racism, and claims that being dyslexic is natural and that it is the way we read and write that is unnatural.',
      setting: 'Addressed directly to the reader',
      who: ['Benjamin Zephaniah', 'Young dyslexic readers'],
      quote: 'If someone can’t understand dyslexia it’s their problem.',
      themes: ['Reframing dyslexia', 'Race and prejudice', 'Encouragement of young readers'],
      tension: 3,
      significance:
        'The argument is stated outright, and the burden of change moves from the dyslexic person to everyone else.',
    },
    {
      where: 'Paragraphs 19-20, lines 79-88 (page 13)',
      title: 'Handing it on',
      summary:
        'He tells readers not to be hard on themselves, tells parents that dyslexia is no measure of intelligence and can build creativity, and ends with children who tell him proudly that they are dyslexic too.',
      setting: 'Speaking to parents, and to the children who come up to him',
      who: ['Benjamin Zephaniah', 'Young dyslexic readers'],
      quote: 'Us dyslexic people, we’ve got it going on',
      themes: ['Encouragement of young readers', 'Reframing dyslexia', 'Identity and self-worth'],
      tension: 4,
      significance:
        'The opening words return, spoken to children, so the article ends as advice handed on to the next generation.',
    },
  ],

  relationships: [
    {
      from: 'Benjamin Zephaniah',
      to: 'The teachers',
      kind: 'pupil and teachers',
      note: 'Conflict from the start: his ideas contradicted theirs, and their verdict was that he was stupid. By the end the roles have reversed and he is the one teaching.',
    },
    {
      from: 'Benjamin Zephaniah',
      to: 'His sister',
      kind: 'brother and sister; his first scribe',
      note: 'She writes down the poems he cannot yet write himself, the first sign that his gift and his difficulty are different things.',
    },
    {
      from: 'Benjamin Zephaniah',
      to: 'His girlfriend',
      kind: 'poet and scribe',
      note: 'She writes down the poems for his first book, turning the help his sister gave into a published career.',
    },
    {
      from: 'Benjamin Zephaniah',
      to: 'The adult education teacher',
      kind: 'learner and teacher',
      note: 'The first teacher who explains rather than labels. Her diagnosis brings relief, not shame.',
    },
    {
      from: 'Benjamin Zephaniah',
      to: 'People in prison',
      kind: 'the life the statistics predicted',
      note: 'He sees himself in them, and puts the difference down to opportunities taken or missed, not to intelligence.',
    },
    {
      from: 'Benjamin Zephaniah',
      to: 'His students at Brunel',
      kind: 'professor and students',
      note: 'The reversal of his schooling: the boy told that not everyone can be intelligent now teaches students with more qualifications than he has.',
    },
    {
      from: 'Benjamin Zephaniah',
      to: 'Young dyslexic readers',
      kind: 'role model and audience',
      note: 'He becomes the adult he lacked as a child, and he notices that the children take pride in sharing his dyslexia.',
    },
    {
      from: 'The teachers',
      to: 'The adult education teacher',
      kind: 'two kinds of teaching',
      note: 'Set against each other, they are the article’s argument about education: labelling a child, or explaining to a learner.',
    },
  ],

  compareWith: [
    {
      title: 'Chinese Cinderella',
      href: '/igcse/edexcel-lang/anthology/chinese-cinderella',
      reason:
        'Another adult judges a young person’s ability: Adeline Yen Mah’s father mocks her wish to be a writer and she stays silent, while Zephaniah’s ideas contradicted his teachers’, so the two responses make a sharp contrast.',
    },
    {
      title: 'The Danger of a Single Story',
      href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
      reason:
        'Adichie shows how people are reduced to one thing; Zephaniah’s football teacher does exactly that to him, and both writers answer a stereotype with personal anecdote.',
    },
    {
      title: 'Explorers or boys messing about? Either way, taxpayer gets rescue bill',
      href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
      reason:
        'The anthology’s other Guardian piece is a third-person news report built from other people’s quotations, which throws Zephaniah’s first-person voice and direct address into sharp relief.',
    },
  ],

  contentGuidance: ['discrimination', 'crime_injustice'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pages 12-13: the prescribed text, its headnote (The Guardian online, Friday 2 October 2015, adapted from Creative, Successful, Dyslexic) and the printed line numbers. Every quotation on this page was checked against it on 25 September 2026, and again, with every line number, against a fresh download on 26 September 2026.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'The same anthology, page 71 (Acknowledgements): The Guardian, 02/10/2015, as adapted from Creative, Successful, Dyslexic: 23 High Achievers Share Their Stories, edited by Margaret Rooke, 2015, reproduced by permission of Jessica Kingsley Publishers. Pages 2-3, 8-9 and 21-23 were read for the three comparison texts.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Classicalia interactive text of the article (dated The Guardian, 2 October 2015): an independent second copy, against which fourteen of the quoted phrases were checked and all agreed.',
      url: 'https://classicalia.co.uk/english/interactive/zephaniah/index.html',
    },
    {
      label: 'The Bookseller: Zephaniah died in the early hours of 7 December 2023, aged 65.',
      url: 'https://www.thebookseller.com/news/benjamin-zephaniah-dies-aged-65',
    },
    {
      label:
        'Brunel University London: death announced on 7 December 2023, aged 65; joined Brunel in 2011.',
      url: 'https://www.brunel.ac.uk/news-and-events/news/articles/Professor-Benjamin-Zephaniah-Brunel-Professor-of-Creative-Writing-dies-aged-65',
    },
    {
      label:
        'Bloodaxe Books author page: born in Birmingham in 1958, grew up in Handsworth; Pen Rhythm (1980); Face (1999) and Refugee Boy (2001); refused an OBE in 2003; first academic post at Brunel in 2011.',
      url: 'https://www.bloodaxebooks.com/ecs/category/benjamin-zephaniah',
    },
    {
      label:
        'Wikipedia, Benjamin Zephaniah: cross-check of 1958, Pen Rhythm (1980), Face and Refugee Boy, the OBE refusal (2003) and death on 7 December 2023. Its account of the year he moved to London conflicts with the article’s own age of 21, so the guide gives neither.',
      url: 'https://en.wikipedia.org/wiki/Benjamin_Zephaniah',
    },
    {
      label:
        'Wikipedia, The Go-Between: the novel’s opening sentence and its 1953 publication, for the echo suggested at lines 7-8.',
      url: 'https://en.wikipedia.org/wiki/The_Go-Between',
    },
    {
      label:
        'Wiktionary, have it going on: an informal idiom meaning to be attractive or socially successful, or to have an aura of success.',
      url: 'https://en.wiktionary.org/wiki/have_it_going_on',
    },
  ],
}
