import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * An Inspector Calls, J.B. Priestley (first performed 1945; first published by
 * Heinemann, 1947). A supplement: the page at /revision/texts/an-inspector-calls
 * keeps its overview, context, themes, characters, quotations, language,
 * structure, exam practice and model answer, and this file adds the two
 * sections it lacked, close-reading passages and a glossary, together with the
 * scene timeline and character map the animations are drawn from.
 *
 * WORDING. There is no licensed copy of the play in this repository. Every
 * quotation here was checked against at least two independent sources:
 * - the publisher's opening extract of the Penguin text (Act 1 to Sheila's
 *   first entrance), a scan of the printed pages;
 * - exam papers that print the published text: OCR J352/01 June 2023 (the
 *   photograph and Milwards), June 2024 (Birling's toast) and the 2026 sample
 *   assessment material (the Act 3 ending, to Mrs Birling's line about the
 *   morning); Eduqas Component 2 June 2017 (Act 3 ending to the curtain), June
 *   2018 (Mrs Birling and the committee), June 2019 (the Inspector's last
 *   speech) and June 2023 (the end of Act 2, from "And if her story is true");
 * - an abridged school acting text and quotation banks published by schools
 *   and teachers, which agree with the above on every line used.
 * A typed classroom transcript of the whole play was used ONLY to fix the
 * speaker and the order of events, never as a source of wording. It is not
 * independent evidence: a school "text guide" that reprints the play shares
 * its typing errors ("taking nonsense" for "talking nonsense"), so the two are
 * one source. Neither is linked below, because both are unauthorised copies of
 * a play in copyright. Fact-check of 26 September 2026: the transcript's
 * "socialist" and "By jingo" are capitalised in the printed text ("Socialist",
 * "By Jingo"), and the quotations now follow the print.
 * Where editions differ in a word, the passage was not quoted. The OCR sample
 * paper, for example, prints "Eric: I agree with Sheila." where the transcript
 * has "And I agree", so that line is not used.
 *
 * PAGE NUMBERS are deliberately not given. The schools' quotation banks cite
 * pages 1 to 72 and agree with each other, but none names its edition, and the
 * three editions Pearson prescribes for 4ET1 are paginated differently. The
 * passages are located by act and by their opening and closing words instead,
 * which work in every edition.
 *
 * NAMES. `who`, `relationships` and the theme chips on the timeline use the
 * character and theme names of the page above, exactly, so the two agree.
 *
 * THE PAGE ABOVE, checked while this was written, misattributes several lines,
 * and the corrections are reported rather than silently contradicted:
 * - "It's what happened to the girl and what we all did to her that matters"
 *   is ERIC's line in Act 3 (every source agrees), not Sheila's, as page.tsx
 *   and key-quotes/page.tsx have it. extract-walkthrough/page.tsx is right.
 * - "Public men, Mr Birling, have responsibilities as well as privileges" is
 *   Act 2, after Mrs Birling denies recognising the photograph, not Act 1.
 * - "If we were all responsible for everything ... it would be very awkward"
 *   is Act 1, early in Birling's interview, not Act 3.
 * - "I was quite justified." is Arthur Birling's, Act 1. Mrs Birling says "In
 *   the circumstances I think I was justified" and "perfectly justified".
 * - "the father of the child ... is entirely responsible" is not a line: Mrs
 *   Birling says "then he'd be entirely responsible".
 * - context/page.tsx gives the Conservatives 164 seats in 1945; they won 197.
 *
 * COPYRIGHT. The play is in copyright. Quotations are held under 15 words and
 * the page total under the 400-word ceiling in fair-dealing.ts; the passages
 * are pointed to and summarised, not printed.
 */
export const guide: StudyGuide = {
  slug: 'an-inspector-calls',
  title: 'An Inspector Calls',
  author: 'J.B. Priestley',
  form: 'play',
  scope:
    'The whole play: three acts, continuous in time, all set in the dining-room of the Birlings’ house in Brumley, “an industrial city in the north Midlands”, on an evening in spring 1912. Set for AQA GCSE English Literature (8702), Pearson Edexcel GCSE English Literature (1ET0), OCR GCSE English Literature (J352), Eduqas GCSE English Literature and Pearson Edexcel International GCSE English Literature (4ET1). For 4ET1 it is a modern drama text, examined open book in Component 2, where you may take a clean copy of a prescribed edition (Penguin Modern Classics, Heinemann or Firestone Books), or studied for the coursework option in Component 3. Editions are paginated differently, so the passages below are located by act and by their opening and closing words, which you can find in any copy.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© J.B. Priestley 1947. First published by Heinemann, London. Quoted briefly for criticism and review.',
  },
  workLength: {
    words: 21000,
    basis:
      'Counted on 25 September 2026 from a complete typed classroom transcript of the play (see sources): 20,963 words by the validator’s word count, from the heading Act One to the end of the play, stage directions included. The transcript has some typing errors, so the figure is close rather than exact. Any length over 3,000 words sets the same 400-word page total, so the rounding cannot loosen the limit.',
  },

  native: {
    overview: '/revision/texts/an-inspector-calls',
    context: '/revision/texts/an-inspector-calls',
    themes: '/revision/texts/an-inspector-calls',
    characters: '/revision/texts/an-inspector-calls',
    keyQuotes: '/revision/texts/an-inspector-calls',
    languageAnalysis: '/revision/texts/an-inspector-calls',
    structureForm: '/revision/texts/an-inspector-calls',
    examPractice: '/revision/texts/an-inspector-calls',
    modelAnswer: '/revision/texts/an-inspector-calls',
  },

  extracts: [
    {
      title: 'Birling on war, progress and the Titanic',
      where: 'Act 1, before the Inspector arrives',
      pointer:
        'From Eric’s question “What about war?”, a few moments after the toast, the ring and Birling’s remarks on the miners’ strike, to Birling’s claim that practical men “know”, as Mrs Birling rises and leaves with Sheila and Eric.',
      summary:
        'Eric asks whether war is coming, and Birling answers with a long, confident speech to the three young people. He dismisses talk of war as nonsense stirred up by a few German officers and scaremongers, praises aeroplanes, motor cars and the new liner Titanic, and predicts that by 1940 the world will be peaceful and prosperous and will have forgotten the conflict between employers and workers. He waves away writers such as Shaw and Wells. Mrs Birling tries to stop him; he admits he is talking too much but insists that practical businessmen know best.',
      annotations: [
        {
          phrase: 'What about war?',
          note: 'The question the whole audience is waiting for is given to Eric, the member of the family Birling least respects. When Eric tries to come back, Birling tells him he has a lot to learn yet, so the most important question of 1912 is treated as a boy’s interruption.',
        },
        {
          phrase: 'fiddlesticks',
          note: 'An old-fashioned exclamation meaning nonsense, mild enough to use in front of children. Birling brushes aside the threat of war with a dismissive little word, and the smallness of the word measures how badly he has misjudged the size of what is coming.',
        },
        {
          phrase: 'The Germans don’t want war.',
          note: 'A flat declarative, stated as fact with no hedge at all. The play’s first audiences, in 1945 and 1946, had lived through two wars with Germany, so the confidence that should make Birling sound authoritative makes him sound foolish.',
        },
        {
          phrase: 'unsinkable, absolutely unsinkable',
          note: 'Repetition with an intensifier, the rhetoric of a man certain of his facts. Birling says the Titanic sails next week; she left Southampton on 10 April 1912 and sank five days later, so his most confident claim is days from disaster.',
        },
        {
          phrase: 'let’s say, in 1940',
          note: 'Birling picks a date twenty-eight years ahead to prove his point, and picks a disastrous one: by 1940 Britain had been at war with Germany for months. Priestley leaves the audience’s own memory to finish the joke.',
        },
        {
          phrase: 'except of course in Russia, which will always be behindhand',
          note: 'A throwaway sneer that aged badly within five years, when revolution came in 1917. The play itself was first staged in Moscow and Leningrad in 1945, so its very first audience was the one Birling dismisses.',
        },
        {
          phrase: 'these Bernard Shaws and H. G. Wellses',
          note: 'Turning two names into plurals makes two writers into a type to be waved away. Both men had belonged to the Fabian Society, a socialist group, so Birling is mocking exactly the ideas the Inspector is about to bring into the room.',
        },
        {
          phrase: 'we don’t guess - we’ve had experience - and we know',
          note: 'A rising three-part claim, broken by dashes into separate assertions of certainty. In Act 3 Birling sneers at “the famous younger generation who know it all”; the play shows that the one who claims to know everything is the father.',
        },
      ],
      question:
        'Starting with this extract, how does Priestley present Mr Birling as a man whose confidence cannot be trusted? Write about how Birling speaks in this extract and how Priestley presents him in the play as a whole.',
    },
    {
      title: 'Mrs Birling blames the father',
      where: 'Act 2, the closing pages',
      pointer:
        'From the Inspector’s question “Who is to blame then?” to the stage direction that ends the act, as Eric comes in and the curtain falls quickly. OCR printed the first part of this passage, as far as Mrs Birling calling Sheila hysterical, in its 2025 paper.',
      summary:
        'Having admitted that she persuaded her committee to refuse the girl help, Mrs Birling is asked who is to blame for her death. She names the girl first, then the young man who fathered her child, and demands that he be made to confess in public and punished. Sheila, who has guessed the truth, begs her to stop and is told she is hysterical. The Inspector says he is waiting to do his duty, and Mr and Mrs Birling realise, with growing terror, that he means their son. The front door opens, Eric walks in, pale and distressed, and the curtain falls.',
      annotations: [
        {
          phrase: 'first, the girl herself',
          note: 'Mrs Birling ranks the guilty like a prosecutor reading out charges, and puts the dead girl at the top of the list. Blaming the victim first lets her keep her own name off the list altogether.',
        },
        {
          phrase: 'He should be made an example of.',
          note: 'The language of public punishment and shame. Every word she says about the unknown young man is dramatic irony, because Sheila, and very likely the audience, have begun to see that she is sentencing her own son.',
        },
        {
          phrase: 'And he ought to be dealt with very severely',
          note: 'Her certainty grows as the danger to her family grows. Priestley lets her build the trap for Eric herself, clause by clause, so the Inspector hardly needs to speak while she condemns him.',
        },
        {
          phrase: 'You’re behaving like an hysterical child tonight.',
          note: 'Mrs Birling silences the one person who can see what is happening by calling her childish and hysterical. The older generation treats understanding as a symptom to be dismissed, a pattern that returns at the end of Act 3.',
        },
        {
          phrase: 'No hushing up, eh? Make an example of the young man, eh?',
          note: 'The Inspector hands her own words back to her as questions. The repeated eh makes them sound almost friendly, which makes the trap closing on her more chilling, not less.',
        },
        {
          phrase: 'To do my duty.',
          note: 'Mrs Birling has insisted that she did her duty in refusing the girl help. The Inspector takes the word from her and gives it its real meaning: finding the young man, who is about to walk through the door.',
        },
        {
          phrase: 'Eric enters, looking extremely pale and distressed.',
          note: 'Priestley ends the act on an entrance, not a line. The audience reads in Eric’s face what his parents are only beginning to understand, and the quick curtain holds that shock until Act 3 begins exactly where Act 2 stopped.',
        },
      ],
      question:
        'How does Priestley use dramatic irony to create tension in this extract? Then explore another moment in the play where Mrs Birling refuses to accept responsibility.',
    },
    {
      title: 'The Birlings celebrate too soon',
      where: 'Act 3, the final pages',
      pointer:
        'From Birling’s jovial “But the whole thing’s different now”, shortly after Gerald’s telephone call to the Infirmary, to the final stage direction. OCR’s sample paper for J352 prints the first half, as far as Mrs Birling’s prediction about the morning.',
      summary:
        'Gerald’s call has found no suicide at the Infirmary, and the older Birlings relax. Birling mocks the Inspector’s final speech and laughs at the look on his children’s faces. Sheila, frightened, accuses her parents of pretending nothing has happened, and Eric agrees with her. Mrs Birling puts their distress down to tiredness and predicts they will see the joke by morning, Gerald offers Sheila the ring again and she refuses for now. Birling sneers at the younger generation, and then the telephone rings: a girl has just died on her way to the Infirmary, and a police inspector is coming to ask questions.',
      annotations: [
        {
          phrase: 'Imitating Inspector in his final speech',
          note: 'The stage direction asks the actor playing Birling to parody the most serious speech in the play. What the audience heard as a warning, Birling turns into a party turn, and his laughter shows how little of it he has taken in.',
        },
        {
          phrase: 'It frightens me the way you talk',
          note: 'Sheila is frightened now by her parents, not by the Inspector. The fear has moved from the stranger at the door to the family at the table, and the audience may well be meant to feel the same shift in themselves.',
        },
        {
          phrase: 'You began to learn something. And now you’ve stopped.',
          note: 'Two short sentences, the second cancelling the first. Sheila speaks about her parents as a teacher speaks about pupils, reversing the family order of Act 1, when Birling lectured the young people on how the world works.',
        },
        {
          phrase: 'In the morning they’ll be as amused as we are.',
          note: 'Mrs Birling explains her children’s horror away as tiredness. Her confident prediction about the future is as wrong as her husband’s were in Act 1, and the telephone proves it within moments.',
        },
        {
          phrase: 'What about this ring?',
          note: 'Gerald treats the engagement as a deal that can simply be resumed now the danger seems to have passed. Sheila’s refusal, for now, suggests the evening has changed her in a way it has not changed him.',
        },
        {
          phrase: 'the famous younger generation who know it all',
          note: 'Heavy sarcasm, in the last speech Birling makes before the telephone rings. His mockery of the young echoes his Act 1 boast that practical men know, and this time the answer arrives at once.',
        },
        {
          phrase: 'The telephone rings sharply.',
          note: 'A structural echo of the sharp ring of the front door bell in Act 1. Both times a sound cuts Birling off at his most complacent, and both times it announces an inspector, so the play ends by starting again.',
        },
        {
          phrase: 'As they stare guiltily and dumbfounded, the curtain falls.',
          note: 'The word guiltily covers everyone on stage, Sheila and Eric included. Priestley ends on a silent picture rather than an answer, leaving the family, and the audience, to decide what they will do with what they have learnt.',
        },
      ],
      question:
        'How does Priestley present the differences between the older and younger generations in this extract? Then explore another moment in the play where Sheila shows that she has changed.',
    },
  ],

  vocabulary: [
    {
      term: 'Brumley',
      definition:
        'The fictional city where the whole play takes place, described in the opening note as “an industrial city in the north Midlands”. It has factories, a smart shop, a music hall, a council and a police force, and the Birlings sit near the top of all of it: Birling has been its Lord Mayor and still sits as a magistrate.',
    },
    {
      term: 'Port',
      definition:
        'A strong, sweet fortified wine from Portugal, traditionally drunk after dinner. The play opens with Edna setting out the decanter, and Birling boasts that it is the same port Gerald’s father buys: even the wine is a way of measuring himself against the Crofts.',
    },
    {
      term: 'The governor',
      definition:
        'Old-fashioned informal slang for father. Gerald uses it of Sir George Croft in the play’s opening lines, the easy language of a well-off young man about town.',
    },
    {
      term: 'Squiffy',
      definition:
        'Informal British word for slightly drunk. Sheila teases Eric with it at dinner in Act 1, and Eric uses it of himself in Act 3 when he describes the night he met Eva in the Palace bar, so a family joke from the opening returns inside a confession.',
    },
    {
      term: 'Cable',
      definition:
        'A telegram, especially one sent overseas by telegraph cable. Sir George and Lady Croft are abroad and send Birling a cable instead of coming to the dinner. One reading sees a first hint of distance there, since Birling later tells Gerald, in confidence, that Lady Croft feels her son might have done better for himself socially.',
    },
    {
      term: 'Knighthood and the Honours List',
      definition:
        'A knighthood gives a man the title Sir, and knighthoods are announced in honours lists published in the monarch’s name. Birling tells Gerald he has a good chance of one in the next list as long as the family keep out of scandal, which is why, in Act 3, the scandal seems to worry him more than the death.',
    },
    {
      term: 'Alderman',
      definition:
        'A senior member of a town or city council, chosen by the council itself rather than directly by voters; aldermen with voting rights were abolished outside London in 1974, and in London in 1978. Birling “was an alderman for years”, and in Act 2 Gerald exposes Alderman Meggarty, a figure of civic respectability, as a drunk who preys on young women.',
    },
    {
      term: 'Lord Mayor',
      definition:
        'The title of the mayor of some large cities. Birling was Lord Mayor two years before the play, when royalty visited Brumley, and both he and Mrs Birling mention it to remind the Inspector whom he is questioning.',
    },
    {
      term: 'On the Bench',
      definition:
        'Serving as a magistrate, an unpaid local judge who hears minor cases and can sign warrants. Birling is “still on the Bench”, which is why he first assumes the Inspector has come about a warrant: he expects the law to be something he administers, not something that questions him.',
    },
    {
      term: 'Chief Constable',
      definition:
        'The officer in charge of a local police force. Birling tells the Inspector that the Chief Constable, Colonel Roberts, is an old friend he plays golf with, a veiled threat, and in Act 3 he telephones him to check whether any Inspector Goole exists.',
    },
    {
      term: 'Capital versus Labour',
      definition:
        'Capital means the owners of money and businesses, Labour the workers they employ. Birling predicts a world that has forgotten “all these Capital versus Labour agitations”, and mentions that the miners came out on strike last month: the first national coal strike, for a minimum wage, began at the end of February 1912 and ended on 6 April.',
    },
    {
      term: 'Cranks',
      definition:
        'People with odd or extreme ideas. Birling uses the word for anyone who thinks “everybody has to look after everybody else”, and after the Inspector leaves he calls him “Probably a Socialist or some sort of crank”. Eric points out that one of those cranks walked in just as his father was mocking them.',
    },
    {
      term: 'Shaws and Wellses',
      definition:
        'George Bernard Shaw and H.G. Wells, famous writers of Birling’s day who had both been members of the Fabian Society, a socialist group. By turning their names into plurals, Birling sneers at a whole kind of thinker instead of answering an argument.',
    },
    {
      term: 'Twenty-two and six',
      definition:
        'Twenty-two shillings and sixpence a week, written 22s 6d. Before decimal currency there were 12 pence in a shilling and 20 shillings in a pound. The girls at Birling’s works asked for about 25 shillings; Birling says the rise would have added about twelve per cent to his labour costs. The Inspector names the two wages in Act 1 and again in Act 3, when he tells Birling that this is where the chain began, so the gap of half a crown a week is kept in front of the audience.',
    },
    {
      term: 'Leading operator',
      definition:
        'The head of a small group of girls in one of Birling’s machine shops. Birling says the foreman was ready to promote Eva to it because she was a good worker, so Priestley has him praise her work just before he explains why he sacked her.',
    },
    {
      term: 'Infirmary',
      definition:
        'A hospital. The Inspector says Eva died in the Infirmary two hours before he called; in Act 3 Gerald telephones it and is told no suicide has been brought in for months, and the final call reports a girl dying on her way there.',
    },
    {
      term: 'Milwards',
      definition:
        'The big Brumley shop where Eva worked from December 1910, when an outbreak of influenza left it short of staff, until the end of January 1911. Sheila is a customer, and she has Eva dismissed by telling the manager she will never go there again, and will persuade her mother to close their account, unless the girl is got rid of.',
    },
    {
      term: 'The Palace bar',
      definition:
        'The stalls bar of the Palace, Brumley’s music hall or variety theatre. Gerald calls it “a favourite haunt of women of the town”, a polite phrase of the time for women who sold sex. Gerald first meets Eva there in March 1911, and Eric the following November.',
    },
    {
      term: 'Brumley Women’s Charity Organisation',
      definition:
        'The charity that gives help to women in trouble. Mrs Birling is a prominent member, and she was in the chair at the meeting of its interviewing committee that heard Eva’s case two weeks before the play. She tells the Inspector it helps “deserving cases”: the committee judges whether the poor are worthy of help, and in Eva’s case it was Mrs Birling’s prejudice that decided she was not.',
    },
    {
      term: 'Varsity',
      definition:
        'An old-fashioned informal word for university. Birling tells Eric that his “public-school-and-Varsity life” has not taught him to face responsibilities, a jibe at the privileges Eric has been given without, in his father’s eyes, earning them.',
    },
    {
      term: 'Hoax and sell',
      definition:
        'A hoax is a trick meant to fool people, and a sell, in old slang, is the same thing. Gerald asks whether the evening was a hoax, and once the Infirmary has reported no suicide Birling, relieved, calls it “an elaborate sell”, words that let him treat the Inspector’s questions as a prank played on the family rather than a judgement of it.',
    },
    {
      term: 'Parlourmaid',
      definition:
        'A servant who waits at table and answers the door. Edna, the Birlings’ parlourmaid, opens the door to the Inspector and later to Gerald, and each time she comes in she is a reminder of the working people the family depend on.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something the characters do not. Every audience of the play, from 1945 on, knows that the Titanic sank on her first voyage in April 1912 and that war with Germany came in 1914 and again in 1939, so each of Birling’s certainties exposes him.',
    },
    {
      term: 'Morality play',
      definition:
        'A kind of medieval and early Tudor drama in which characters stand for virtues and vices and struggle over an everyman figure who could be anyone. An Inspector Calls is often called a modern morality play: each Birling is tested in turn, and the audience is invited to judge them and then itself.',
    },
    {
      term: 'Well-made play',
      definition:
        'A nineteenth-century French form associated with Eugène Scribe, built on a tight plot and a secret known only to some of the characters, revealed step by step. Priestley borrows its machinery, one revelation per character and a shock at each curtain, to carry a political argument.',
    },
  ],

  timeline: [
    {
      where: 'Act 1, opening',
      title: 'The engagement dinner',
      summary:
        'The Birlings and Gerald Croft finish a dinner celebrating Sheila and Gerald’s engagement. Birling’s toast looks forward to the day Crofts Limited and Birling and Company stop competing and work together, and Gerald gives Sheila her ring.',
      setting: 'The Birlings’ dining-room in Brumley, after dinner, the lighting pink and intimate',
      who: [
        'Arthur Birling',
        'Sybil Birling',
        'Sheila Birling',
        'Eric Birling',
        'Gerald Croft',
        'Edna',
      ],
      quote: 'for lower costs and higher prices',
      themes: ['Class', 'Power'],
      tension: 1,
      significance:
        'The toast turns a marriage into a merger, so the family’s happiness is tied to profit from the first scene.',
    },
    {
      where: 'Act 1',
      title: 'Birling’s advice',
      summary:
        'Birling tells the young people that war is impossible and the Titanic unsinkable. When the women and Eric have gone, he hints to Gerald over port that a knighthood may be coming, then lectures Gerald and Eric that a man must look after himself and his own, until the doorbell cuts him off in mid-sentence.',
      setting: 'The dining-room over port and cigars',
      who: ['Arthur Birling', 'Sybil Birling', 'Sheila Birling', 'Gerald Croft', 'Eric Birling'],
      quote: 'community and all that nonsense',
      themes: ['Social responsibility', 'Age versus youth'],
      tension: 2,
      significance:
        'Priestley lets Birling state the creed the play will test, then interrupts it with the Inspector.',
    },
    {
      where: 'Act 1',
      title: 'The Inspector calls',
      summary:
        'Edna shows in Inspector Goole, and the light grows brighter and harder. A young woman, Eva Smith, has died in the Infirmary after swallowing strong disinfectant. Birling admits he sacked her in September 1910 as one of the leaders of a strike for 25 shillings a week instead of 22s 6d.',
      setting: 'The dining-room, now in harder light, with the port still on the table',
      who: [
        'Inspector Goole',
        'Arthur Birling',
        'Gerald Croft',
        'Eric Birling',
        'Edna',
        'Eva Smith / Daisy Renton',
      ],
      quote: 'it’s better to ask for the earth than to take it',
      themes: ['Social responsibility', 'Class', 'Power'],
      tension: 3,
      significance:
        'The Inspector’s reply turns Birling’s fear of workers “asking for the earth” around: asking is not taking, and the chain of events begins with the most powerful man in the room.',
    },
    {
      where: 'Act 1',
      title: 'Sheila and Milwards',
      summary:
        'Shown the photograph, Sheila runs out, then returns to admit that in a jealous temper she had Eva dismissed from Milwards at the end of January 1911. When the Inspector says Eva then changed her name to Daisy Renton, Gerald starts and gives himself away.',
      setting: 'The dining-room, the Inspector standing by a lamp with the photograph',
      who: [
        'Sheila Birling',
        'Inspector Goole',
        'Arthur Birling',
        'Gerald Croft',
        'Eric Birling',
        'Eva Smith / Daisy Renton',
      ],
      quote: 'I’ll never, never do it again to anybody.',
      themes: ['Guilt and responsibility', 'Class', 'Gender'],
      tension: 3,
      significance:
        'Sheila is the first to accept blame, and the first to see that the Inspector already knows.',
    },
    {
      where: 'Act 2',
      title: 'Gerald and Daisy Renton',
      summary:
        'Gerald admits he met Daisy Renton in the Palace bar in March 1911, rescued her from Alderman Meggarty and moved her into a friend’s rooms in Morgan Terrace, where she became his mistress until he ended it that September. Sheila hands back the ring, and Gerald goes out to walk.',
      setting: 'The dining-room, with Mr and Mrs Birling now listening to Gerald',
      who: [
        'Gerald Croft',
        'Sheila Birling',
        'Inspector Goole',
        'Sybil Birling',
        'Arthur Birling',
        'Eva Smith / Daisy Renton',
      ],
      quote: 'I didn’t feel about her as she felt about me.',
      themes: ['Gender', 'Class', 'Power'],
      tension: 3,
      significance:
        'The most sympathetic confession is still a story of a man with choices and a woman without them.',
    },
    {
      where: 'Act 2',
      title: 'The charity committee',
      summary:
        'Mrs Birling denies recognising the photograph. The Inspector reveals that two weeks ago, chairing the interviewing committee of the Brumley Women’s Charity Organisation, she persuaded it to refuse help to a desperate girl who had called herself Mrs Birling, and who was going to have a child.',
      setting: 'The dining-room, with Eric gone out of the house',
      who: [
        'Sybil Birling',
        'Inspector Goole',
        'Sheila Birling',
        'Arthur Birling',
        'Eva Smith / Daisy Renton',
      ],
      quote: 'Go and look for the father of the child.',
      themes: ['Class', 'Gender', 'Guilt and responsibility'],
      tension: 4,
      significance:
        'The last door Eva knocked on was a charity, and it was shut by the family’s most confident member.',
    },
    {
      where: 'Act 2, ending',
      title: 'Mrs Birling condemns her son',
      summary:
        'Mrs Birling blames the girl, then the young man who fathered the child, and demands he be made to confess in public. Sheila begs her to stop. As the parents realise the young man is Eric, the front door opens, he walks in, and the curtain falls quickly.',
      setting: 'The dining-room, everyone turned towards the door',
      who: ['Sybil Birling', 'Inspector Goole', 'Sheila Birling', 'Arthur Birling', 'Eric Birling'],
      quote: 'He should be made an example of.',
      themes: ['Guilt and responsibility', 'Age versus youth'],
      tension: 5,
      significance:
        'Dramatic irony at its sharpest: she writes her son’s sentence before she knows it is his.',
    },
    {
      where: 'Act 3',
      title: 'Eric’s confession',
      summary:
        'Eric admits he met Eva in the Palace bar the previous November and, drunk, threatened to make a row until she let him into her lodgings, though she had not wanted him to come in; she became pregnant. He gave her about fifty pounds taken from his father’s office, which she refused once she knew it was stolen.',
      setting: 'The dining-room, Eric with a whisky, Mrs Birling and Sheila sent out and then back',
      who: [
        'Eric Birling',
        'Inspector Goole',
        'Arthur Birling',
        'Sybil Birling',
        'Sheila Birling',
        'Eva Smith / Daisy Renton',
      ],
      quote: 'you’re not the kind of father a chap could go to',
      themes: ['Guilt and responsibility', 'Age versus youth', 'Gender'],
      tension: 5,
      significance:
        'Eric’s charge against his father turns the confession back on the family: the last link in the chain is their own son, and his mother turned away his child.',
    },
    {
      where: 'Act 3',
      title: 'The Inspector’s last speech',
      summary:
        'The Inspector reminds each Birling what they did, then warns them that there are millions of Eva and John Smiths, that we are responsible for each other, and that people who refuse to learn that lesson will be taught it through suffering. He walks straight out.',
      setting: 'The dining-room, the family silent and still',
      who: ['Inspector Goole', 'Arthur Birling', 'Sybil Birling', 'Sheila Birling', 'Eric Birling'],
      quote: 'We are members of one body.',
      themes: ['Social responsibility'],
      tension: 5,
      significance:
        'The detective story becomes a sermon, addressed as much to the audience as to the Birlings.',
    },
    {
      where: 'Act 3',
      title: 'Was he a real inspector?',
      summary:
        'Birling frets about scandal and his knighthood. Sheila wonders whether the Inspector was real, Gerald returns with a police sergeant’s word that there is no Inspector Goole, and Birling’s call to the Chief Constable confirms it. Eric insists that what matters is “what happened to the girl and what we all did to her”.',
      setting: 'The dining-room, Birling at the telephone to the Chief Constable',
      who: [
        'Arthur Birling',
        'Sybil Birling',
        'Sheila Birling',
        'Eric Birling',
        'Gerald Croft',
        'Edna',
      ],
      quote: 'By Jingo! A fake!',
      themes: ['Power', 'Age versus youth', 'Guilt and responsibility'],
      tension: 2,
      significance:
        'The family splits by age: the old ask who he was, the young ask what they did.',
    },
    {
      where: 'Act 3',
      title: 'No girl at the Infirmary',
      summary:
        'Gerald argues there may have been several girls and several photographs, and his call to the Infirmary finds no suicide for months. Birling pours drinks and mocks the Inspector, but Sheila and Eric refuse to pretend nothing happened, and Sheila will not take the ring back yet.',
      setting: 'The dining-room, drinks poured again as if the evening could restart',
      who: ['Gerald Croft', 'Arthur Birling', 'Sybil Birling', 'Sheila Birling', 'Eric Birling'],
      quote: 'You began to learn something. And now you’ve stopped.',
      themes: ['Age versus youth', 'Social responsibility'],
      tension: 3,
      significance: 'The relief of the older Birlings is the play’s real test, and they fail it.',
    },
    {
      where: 'Act 3, ending',
      title: 'The telephone rings',
      summary:
        'The telephone rings. Birling reports that a girl has just died on her way to the Infirmary after swallowing disinfectant, and that a police inspector is on his way to ask questions. The family stare, guilty and dumbfounded, as the curtain falls.',
      setting: 'The dining-room, Birling at the telephone',
      who: ['Arthur Birling', 'Sybil Birling', 'Sheila Birling', 'Eric Birling', 'Gerald Croft'],
      quote: 'a police inspector is on his way here',
      themes: ['Guilt and responsibility', 'Social responsibility'],
      tension: 5,
      significance:
        'The ending loops back to the doorbell, so the lesson refused must be faced again.',
    },
  ],

  relationships: [
    {
      from: 'Arthur Birling',
      to: 'Sybil Birling',
      kind: 'husband and wife',
      note: 'The opening stage direction makes her her husband’s social superior, and she corrects his manners at dinner. By the end of Act 3 they are united again, in relief and in refusing to change.',
    },
    {
      from: 'Arthur Birling',
      to: 'Eric Birling',
      kind: 'father and son',
      note: 'Birling lectures and dismisses Eric all evening. Eric’s answer, that his father is not someone he could go to in trouble, explains why he stole rather than ask for help, and Birling’s first thought is to cover the theft up.',
    },
    {
      from: 'Arthur Birling',
      to: 'Gerald Croft',
      kind: 'future father-in-law and son-in-law',
      note: 'Birling sees the marriage as a business alliance with a bigger, older firm. After the Inspector leaves, the two men work together to prove it was a hoax.',
    },
    {
      from: 'Sheila Birling',
      to: 'Gerald Croft',
      kind: 'engaged couple',
      note: 'Sheila teases Gerald about his absence last summer in the first scene, and later admits she knew all along there was something wrong about it. She hands back the ring in Act 2, saying the evening has made them different people, and at the end she will not take it again yet.',
    },
    {
      from: 'Sybil Birling',
      to: 'Eric Birling',
      kind: 'mother and son',
      note: 'She insists he is only a boy who does not drink, then condemns the father of the child without knowing it is him. Eric turns on her for turning Eva and his child away.',
    },
    {
      from: 'Sheila Birling',
      to: 'Eric Birling',
      kind: 'sister and brother',
      note: 'They squabble at dinner and he calls her a sneak for telling their mother about his drinking. By the end they stand together against their parents.',
    },
    {
      from: 'Inspector Goole',
      to: 'Arthur Birling',
      kind: 'questioner and public man',
      note: 'Birling reminds the Inspector of his rank and his friendship with the Chief Constable. The Inspector answers that public men have responsibilities as well as privileges, and is never impressed.',
    },
    {
      from: 'Inspector Goole',
      to: 'Sheila Birling',
      kind: 'questioner and pupil',
      note: 'Sheila is the first to understand how he works and ends the play repeating his words. She says she does not understand him, and he tells her there is no reason she should.',
    },
    {
      from: 'Arthur Birling',
      to: 'Eva Smith / Daisy Renton',
      kind: 'employer and worker',
      note: 'He praised her as a good worker, then sacked her as a ringleader of the strike. The Inspector says it was Birling who started the chain.',
    },
    {
      from: 'Sheila Birling',
      to: 'Eva Smith / Daisy Renton',
      kind: 'customer and shop assistant',
      note: 'Sheila used her family’s account at Milwards to have Eva sacked because she was jealous of her. She is the one who later feels it most.',
    },
    {
      from: 'Gerald Croft',
      to: 'Eva Smith / Daisy Renton',
      kind: 'rescuer, then kept lover',
      note: 'He rescued her from Alderman Meggarty and kept her in a friend’s rooms, then broke it off in September before going away on business; Sheila says he dropped her when it suited him. The Inspector allows that he at least made her happy for a time.',
    },
    {
      from: 'Eric Birling',
      to: 'Eva Smith / Daisy Renton',
      kind: 'father of her unborn child',
      note: 'Their meetings began with Eric drunk and threatening his way into her lodgings. She did not want to marry him and would take no more of his money once she knew it was stolen, arguably showing more principle than the family who judged her.',
    },
    {
      from: 'Sybil Birling',
      to: 'Eva Smith / Daisy Renton',
      kind: 'charity chair and applicant',
      note: 'Offended that the girl used the name Mrs Birling, she had the committee refuse her. It was the last help Eva asked for.',
    },
    {
      from: 'Sybil Birling',
      to: 'Edna',
      kind: 'mistress and servant',
      note: 'Mrs Birling gives Edna her orders about coffee and tea. Edna is the only servant the audience sees, waiting on the family and answering their door all evening.',
    },
  ],

  compareWith: [
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        'Willy Russell also shows class deciding the course of a life, and uses a Narrator who, like the Inspector, passes judgement on the characters and warns the audience.',
    },
    {
      title: 'A View from the Bridge',
      href: '/igcse/edexcel/drama/a-view-from-the-bridge',
      reason:
        'On the same 4ET1 modern drama list, with Alfieri, a lawyer-narrator, as another figure of judgement watching a family head for disaster.',
    },
    {
      title: 'Lord of the Flies',
      href: '/revision/texts/lord-of-the-flies',
      reason:
        'Published in 1954, nine years after the play was first staged at the end of the Second World War, it reaches a much darker view of whether people will look after one another, a useful counterweight to the Inspector’s hope.',
    },
  ],

  contentGuidance: [
    'mortality',
    'mental_health',
    'intimate_relationships',
    'crime_injustice',
    'addiction',
    'discrimination',
    'political_ideology',
    'supernatural',
  ],

  sources: [
    {
      label:
        'Opening extract of the Penguin text (An Inspector Calls and Other Plays, pages 161 to 174), supplied for Lovereading4kids: a scan of the printed pages, Act 1 from the opening stage direction to Sheila’s first entrance. Exact wording of every Act 1 quotation up to that point, the stage directions on lighting and the Inspector, and the facts of the strike and the wages',
      url: 'https://www.lovereading4kids.co.uk/extract/3725/An-Inspector-Calls-by-J-B-Priestley.html',
    },
    {
      label:
        'OCR GCSE English Literature J352/01 question paper, June 2023: prints the Act 1 passage in which Sheila recognises the photograph (Penguin text)',
      url: 'https://www.ocr.org.uk/Images/705069-question-paper-exploring-modern-and-literary-heritage-texts.pdf',
    },
    {
      label:
        'OCR J352/01 question paper, June 2024: prints Birling’s toast in Act 1, confirming “for lower costs and higher prices”',
      url: 'https://www.ocr.org.uk/Images/727830-question-paper-exploring-modern-and-literary-heritage-texts.pdf',
    },
    {
      label:
        'OCR J352/01 question paper, June 2025: gives the opening and closing words of the Act 2 passage “Who is to blame then?” to Mrs Birling calling Sheila hysterical (Penguin, 2000, pages 200 to 201); the text itself was removed for copyright',
      url: 'https://www.ocr.org.uk/Images/753564-question-paper-exploring-modern-and-literary-heritage-texts.pdf',
    },
    {
      label:
        'OCR J352/01 sample assessment materials (version 1.0, April 2026): prints the Act 3 ending from Birling’s “But the whole thing’s different now” to Mrs Birling’s line about the morning',
      url: 'https://www.ocr.org.uk/Images/169188-unit-j352-01-exploring-modern-and-literary-heritage-texts-sample-assessment-materials.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature (4ET1) specification, Issue 3, August 2025: An Inspector Calls in the modern drama lists for Component 2 (open book, clean prescribed edition allowed) and Component 3; prescribed editions Penguin Modern Classics 2001, Heinemann 1993 and Firestone Books 2020 (Appendix 3)',
    },
    {
      label:
        'Pearson, Guidance on prescribed editions of set texts for 4ET1 (Issue 3, August 2024): Paper 2 is open book with clean prescribed editions; the An Inspector Calls editions are Penguin Modern Classics and Penguin Books (March 2001), Heinemann (January 1993) and Firestone Books (March 2020)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/forms-and-administration/guidance-for-centres-on-the-use-of-prescribed-editions-of-set-texts-for-4et1.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature Component 2 question papers, which print extracts of the play: June 2017 (Act 3, from “But the whole thing’s different now” to the final curtain), June 2018 (Mrs Birling on the committee, Act 2), June 2019 (the Inspector’s last speech, Act 3) and June 2023 (the end of Act 2, from “And if her story is true” to the curtain). Exact wording of the Act 2 ending and Act 3 ending quotations and stage directions',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202023%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'A complete typed classroom transcript of the play, hosted by a school, and a school text guide that reprints the same transcript (the two share its typing errors, so they count as one source). Used only to fix speakers and the order of events across all three acts, and for the word count; no wording was taken from it. Not linked, because both are unauthorised copies of a play in copyright',
    },
    {
      label:
        'The 20 Minute An Inspector Calls (englishatlc.com), an abridged school acting text, typed independently of the transcript above: check on Act 2 and Act 3 lines, capitalisation (“Socialist”, “By Jingo”) and stage directions. Not linked: it reproduces much of a play in copyright and its licence, if any, is not known',
    },
    {
      label:
        'Mr Bacon’s An Inspector Calls quotation bank, with speakers and page numbers: check on wording and attribution, including Eric as the speaker of “what we all did to her”',
      url: 'https://mrbacongcseenglish.wordpress.com/wp-content/uploads/2020/05/aic-quotation-bank.pdf',
    },
    {
      label:
        'Coleshill School, Overview and Key Scenes, An Inspector Calls: quotations with act and speaker, agreeing with the above',
      url: 'https://coleshill.warwickshire.sch.uk/files/2022/04/Overview-and-Key-Scenes-An-Inspector-Calls-AQA-English-Literature-GCSE.pdf',
    },
    {
      label: 'Brine Leas School, An Inspector Calls character notes and key quotations',
      url: 'http://brineleas.cheshire.sch.uk/Docs/English/AnInspectorCallsCharactersAndQuotes.pdf',
    },
    {
      label: 'Earl Mortimer College, quotes from An Inspector Calls',
      url: 'https://www.earlmortimer.org.uk/uploads/quotes-from-an-inspector-calls.pdf',
    },
    {
      label: 'Bournville School, Inspector Goole’s final speech',
      url: 'https://www.bournvilleschool.org/wp-content/uploads/2018/04/AIC-2.8-Inspector-Gooles-Final-Speech.pdf',
    },
    {
      label:
        'Wikipedia, An Inspector Calls: first performed in the Soviet Union in 1945 (Kamerny Theatre, Moscow, and Leningrad), first British production at the New Theatre, London, 1946, first edition Heinemann, London, 1947; also quotes the opening note’s “an industrial city in the north Midlands” from the Heinemann edition of 1992',
      url: 'https://en.wikipedia.org/wiki/An_Inspector_Calls',
    },
    {
      label:
        'University of Bradford Special Collections, Remember Eva Smith: the Inspector’s Russian journey: the 1945 Soviet premiere, because no London theatre was free',
      url: 'https://100objectsbradford.wordpress.com/2011/06/15/19-remember-eva-smith-the-inspectors-russian-journey/',
    },
    {
      label:
        'Wikipedia, Titanic: maiden voyage from Southampton on 10 April 1912, sank on 15 April 1912',
      url: 'https://en.wikipedia.org/wiki/Titanic',
    },
    {
      label:
        'Wikipedia, National coal strike of 1912: began at the end of February 1912 in Alfreton and spread nationwide, ended 6 April 1912, for a minimum wage',
      url: 'https://en.wikipedia.org/wiki/1912_United_Kingdom_national_coal_strike',
    },
    {
      label: 'Wikipedia, Fabian Society: Shaw and Wells as members (Wells from 1903 to 1908)',
      url: 'https://en.wikipedia.org/wiki/Fabian_Society',
    },
    {
      label:
        'Wikipedia, Alderman: elected by the council under the Municipal Reform Act 1835; aldermen with voting rights abolished by the Local Government Act 1972 with effect from 1974, and in London from 1978',
      url: 'https://en.wikipedia.org/wiki/Alderman',
    },
    {
      label: 'Wikipedia, Well-made play and Morality play: definitions used in the glossary',
      url: 'https://en.wikipedia.org/wiki/Well-made_play',
    },
    {
      label:
        'Wiktionary: squiffy, governor (father), sell (a hoax), crank, varsity and cable (a telegram)',
      url: 'https://en.wiktionary.org/wiki/squiffy',
    },
  ],
}
